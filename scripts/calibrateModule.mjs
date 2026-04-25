#!/usr/bin/env node
/**
 * Module 1 + Module 2 difficulty calibrator (decision-support tool, not auto-replacer).
 *
 * For each question in a practice test's Module 1 or Module 2, compares it to the
 * CB Educator QBank reference pool and proposes harder QBank candidates on the
 * same skill (filtered per --module/--track). Also reports current 4-domain
 * coverage vs the target distribution (7/6/5/4 for Module 1).
 *
 * Outputs a markdown report per test for human review.
 *
 * Usage:
 *   node scripts/calibrateModule.mjs --test=1                              # M1 default
 *   node scripts/calibrateModule.mjs --test=1,2,3 --module=1               # multiple, M1
 *   node scripts/calibrateModule.mjs --all --module=1                      # all 12, M1
 *   node scripts/calibrateModule.mjs --test=1 --module=2 --track=hard      # M2 hard track
 *   node scripts/calibrateModule.mjs --test=1 --module=2 --track=easy      # M2 easy track
 *
 * Output:
 *   scripts/generated/module{1|2}-calibration-test-{N}[-{track}].md
 *
 * Exports:
 *   - analyzeDomainCoverage(testJsModule)       — current/target domain table
 *   - checkUniqueness(authoredText, qbankItems) — Jaccard + 3-gram dupe gate
 *   - SKILL_TO_CB                                — internal skill → CB skill_desc map
 */

import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
// CALIBRATE_GEN_DIR / CALIBRATE_TESTS_DIR env overrides exist for running the
// script from worktrees that don't have local copies of the QBank cache or
// practice test fixtures. They default to the repo's normal locations.
const GEN_DIR = process.env.CALIBRATE_GEN_DIR || path.join(ROOT, 'scripts', 'generated');
const QBANK_PATH = path.join(GEN_DIR, 'cbEducatorQBank.json');
const QBANK_INDEX_PATH = path.join(GEN_DIR, 'cbEducatorQBankIndex.json');
const TESTS_DIR = process.env.CALIBRATE_TESTS_DIR || path.join(ROOT, 'src', 'data', 'practiceTests');
const OUTPUT_DIR = process.env.CALIBRATE_OUTPUT_DIR || GEN_DIR;

// ---------------------------------------------------------------------------
// CLI parsing
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const args = argv.slice(2);
  const TEST_ARG = args.find(a => a.startsWith('--test='));
  const MODULE_ARG = args.find(a => a.startsWith('--module='));
  const TRACK_ARG = args.find(a => a.startsWith('--track='));
  const ALL = args.includes('--all');

  const testNumbers = ALL
    ? Array.from({ length: 12 }, (_, i) => i + 1)
    : (TEST_ARG ? TEST_ARG.split('=')[1].split(',').map(n => parseInt(n, 10)) : [1]);

  const moduleNum = MODULE_ARG ? parseInt(MODULE_ARG.split('=')[1], 10) : 1;
  const track = TRACK_ARG ? TRACK_ARG.split('=')[1] : null;

  if (moduleNum === 2 && (track !== 'easy' && track !== 'hard')) {
    throw new Error(`--module=2 requires --track=easy or --track=hard`);
  }
  if (![1, 2].includes(moduleNum)) {
    throw new Error(`--module must be 1 or 2 (got ${moduleNum})`);
  }
  for (const n of testNumbers) {
    if (!Number.isInteger(n) || n < 1 || n > 12) {
      throw new Error(`--test value must be 1-12 (got ${n})`);
    }
  }

  return { testNumbers, moduleNum, track };
}

// ---------------------------------------------------------------------------
// Skill mapping: PerformSAT internal skill tags → CB skill_desc
// ---------------------------------------------------------------------------

export const SKILL_TO_CB = {
  'word-problems': ['Linear equations in one variable', 'Ratios, rates, proportional relationships, and units'],
  'solving-equations': ['Linear equations in one variable'],
  'linear-equations': ['Linear equations in one variable'],
  'percents': ['Percentages'],
  'ratios': ['Ratios, rates, proportional relationships, and units'],
  'linear-functions': ['Linear functions'],
  'function-interpretation': ['Linear functions', 'Nonlinear functions'],
  'slope': ['Linear functions', 'Linear equations in two variables'],
  'coordinate-geometry': ['Linear equations in two variables', 'Circles'],
  'two-way-tables': ['Probability and conditional probability', 'Two-variable data: Models and scatterplots'],
  'probability': ['Probability and conditional probability'],
  'systems-of-equations': ['Systems of two linear equations in two variables', 'Nonlinear equations in one variable and systems of equations in two variables'],
  'scatterplots': ['Two-variable data: Models and scatterplots'],
  'exponential-functions': ['Nonlinear functions'],
  'triangles': ['Lines, angles, and triangles', 'Right triangles and trigonometry'],
  'angles': ['Lines, angles, and triangles'],
  'quadratic-equations': ['Nonlinear equations in one variable and systems of equations in two variables', 'Nonlinear functions'],
  'factoring': ['Equivalent expressions'],
  'polynomial-operations': ['Equivalent expressions'],
  'circle-equations': ['Circles'],
  'circles': ['Circles'],
  'exponent-rules': ['Equivalent expressions'],
  'radical-expressions': ['Equivalent expressions'],
  'vertex-form': ['Nonlinear functions'],
  'discriminant': ['Nonlinear equations in one variable and systems of equations in two variables'],
  'linear-inequalities': ['Linear inequalities in one or two variables'],
  'inequalities': ['Linear inequalities in one or two variables'],
  'statistics': ['One-variable data: Distributions and measures of center and spread'],
  'mean-median-mode': ['One-variable data: Distributions and measures of center and spread'],
  'data-interpretation': ['One-variable data: Distributions and measures of center and spread', 'Two-variable data: Models and scatterplots'],
  'volume': ['Area and volume'],
  'area': ['Area and volume'],
  'geometry': ['Lines, angles, and triangles', 'Area and volume'],
  'trigonometry': ['Right triangles and trigonometry'],
  'right-triangles': ['Right triangles and trigonometry'],
  'transformations': ['Nonlinear functions'],
  'dimensional-analysis': ['Ratios, rates, proportional relationships, and units'],
  'unit-conversion': ['Ratios, rates, proportional relationships, and units'],
};

const DIFFICULTY_LABEL_TO_CB = { easy: 'E', medium: 'M', hard: 'H' };
const CB_DIFF_ORDER = ['E', 'M', 'H'];
const NEXT_HARDER = { easy: 'medium', medium: 'hard', hard: 'hard' };

// CB skill_desc → top-level domain (4 SAT Math domains)
// Mirrors `primary_class_cd_desc` values seen in cbEducatorQBankIndex.json.
export const CB_SKILL_TO_DOMAIN = {
  'Linear equations in one variable': 'Algebra',
  'Systems of two linear equations in two variables': 'Algebra',
  'Linear functions': 'Algebra',
  'Linear equations in two variables': 'Algebra',
  'Linear inequalities in one or two variables': 'Algebra',
  'Nonlinear functions': 'Advanced Math',
  'Nonlinear equations in one variable and systems of equations in two variables': 'Advanced Math',
  'Equivalent expressions': 'Advanced Math',
  'Inference from sample statistics and margin of error': 'Problem-Solving and Data Analysis',
  'Ratios, rates, proportional relationships, and units': 'Problem-Solving and Data Analysis',
  'Probability and conditional probability': 'Problem-Solving and Data Analysis',
  'Percentages': 'Problem-Solving and Data Analysis',
  'One-variable data: Distributions and measures of center and spread': 'Problem-Solving and Data Analysis',
  'Two-variable data: Models and scatterplots': 'Problem-Solving and Data Analysis',
  'Evaluating statistical claims: Observational studies and experiments': 'Problem-Solving and Data Analysis',
  'Lines, angles, and triangles': 'Geometry and Trigonometry',
  'Area and volume': 'Geometry and Trigonometry',
  'Right triangles and trigonometry': 'Geometry and Trigonometry',
  'Circles': 'Geometry and Trigonometry',
};

const DOMAIN_LABELS = ['Algebra', 'Advanced Math', 'Problem-Solving and Data Analysis', 'Geometry and Trigonometry'];

// Module 1 domain target: 7/6/5/4 (per docs/MODULE_RECALIBRATION_PLAN.md).
// Module 2 mirrors Module 1's domain target (per the plan).
const DOMAIN_TARGET_M1 = {
  'Algebra': 7,
  'Advanced Math': 6,
  'Problem-Solving and Data Analysis': 5,
  'Geometry and Trigonometry': 4,
};

// "Slightly harder" proposed distribution (Module 1)
const PROPOSED_DISTRIBUTION_M1 = { easy: 4, medium: 9, hard: 9 };
// Module 2 proposed distributions per track (per plan)
const PROPOSED_DISTRIBUTION_M2 = {
  easy: { easy: 4, medium: 12, hard: 6 },
  hard: { easy: 0, medium: 6, hard: 16 },
};

// ---------------------------------------------------------------------------
// Loaders
// ---------------------------------------------------------------------------

function loadPracticeTest(n) {
  const file = path.join(TESTS_DIR, `practiceTest${n}.js`);
  let src = fs.readFileSync(file, 'utf8');
  src = src.replace(/^export\s+const\s+/gm, 'var ').replace(/^export\s+default\s+[^;]+;?$/gm, '');
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(src, ctx);
  return ctx[`practiceTest${n}`];
}

function loadQBank() {
  if (!fs.existsSync(QBANK_PATH)) {
    throw new Error(`CB QBank cache missing at ${QBANK_PATH}. Run: node scripts/fetchCBQuestionBank.mjs`);
  }
  return JSON.parse(fs.readFileSync(QBANK_PATH, 'utf8'));
}

function loadQBankIndex() {
  if (!fs.existsSync(QBANK_INDEX_PATH)) {
    throw new Error(`CB QBank index missing at ${QBANK_INDEX_PATH}. Run: node scripts/fetchCBQuestionBank.mjs`);
  }
  return JSON.parse(fs.readFileSync(QBANK_INDEX_PATH, 'utf8'));
}

/** Full-population index (uses metadata for all 1,756 items). Used for accurate pool counts. */
function indexByCbSkillFromMetadata(metadata) {
  const bySkillDiff = {};
  for (const m of metadata) {
    const skill = (m.skill_desc || '').trim();
    const key = `${skill}||${m.difficulty}`;
    (bySkillDiff[key] = bySkillDiff[key] || []).push({
      externalId: m.external_id,
      skill,
      difficulty: m.difficulty,
      scoreBandRangeCd: m.score_band_range_cd,
      domain: m.primary_class_cd_desc,
    });
  }
  for (const k of Object.keys(bySkillDiff)) {
    bySkillDiff[k].sort((a, b) => (b.scoreBandRangeCd || 0) - (a.scoreBandRangeCd || 0));
  }
  return bySkillDiff;
}

// ---------------------------------------------------------------------------
// Domain coverage analyzer
// ---------------------------------------------------------------------------

/**
 * Return per-domain current/target counts for a module's questions.
 * Maps each question's internal skills → CB skills (via SKILL_TO_CB) → domain
 * (via CB_SKILL_TO_DOMAIN). When a question maps to multiple domains, attribute
 * it to the dominant one (most-frequent CB skill domain among its mappings).
 *
 * @param {object} testJsModule - { questions: [{ skills: string[], ... }, ...] }
 * @param {object} [opts]
 * @param {object} [opts.target] - target counts per domain (default: M1 7/6/5/4)
 * @returns {{
 *   current: Record<string, number>,
 *   target: Record<string, number>,
 *   gap: Record<string, number>,
 *   perQuestion: Array<{ index: number, skills: string[], domain: string|null }>
 * }}
 */
export function analyzeDomainCoverage(testJsModule, opts = {}) {
  const target = opts.target || DOMAIN_TARGET_M1;
  const current = {};
  for (const d of DOMAIN_LABELS) current[d] = 0;
  const perQuestion = [];

  const questions = (testJsModule && testJsModule.questions) || [];
  questions.forEach((q, i) => {
    const internalSkills = q.skills || [];
    const cbSkills = [...new Set(internalSkills.flatMap(s => SKILL_TO_CB[s] || []))];
    const domainTally = {};
    for (const s of cbSkills) {
      const d = CB_SKILL_TO_DOMAIN[s];
      if (!d) continue;
      domainTally[d] = (domainTally[d] || 0) + 1;
    }
    let dominant = null;
    let topCount = 0;
    for (const [d, c] of Object.entries(domainTally)) {
      if (c > topCount) { topCount = c; dominant = d; }
    }
    if (dominant) current[dominant] = (current[dominant] || 0) + 1;
    perQuestion.push({ index: i + 1, skills: internalSkills, domain: dominant });
  });

  const gap = {};
  for (const d of DOMAIN_LABELS) gap[d] = (current[d] || 0) - (target[d] || 0);
  return { current, target, gap, perQuestion };
}

function renderDomainTable(coverage) {
  const labelWidth = 23; // 'Problem-Solving & Data ' is 23 chars
  const lines = [];
  lines.push('| Domain                  | Current | Target | Gap |');
  lines.push('|-------------------------|---------|--------|-----|');
  const shortLabel = (d) => {
    if (d === 'Problem-Solving and Data Analysis') return 'Problem-Solving & Data';
    if (d === 'Geometry and Trigonometry') return 'Geometry & Trigonometry';
    return d;
  };
  for (const d of DOMAIN_LABELS) {
    const cur = coverage.current[d] || 0;
    const tgt = coverage.target[d] || 0;
    const gap = coverage.gap[d] || 0;
    const sign = gap === 0 ? '0' : (gap > 0 ? `+${gap} (over)` : `${gap} (under)`);
    lines.push(`| ${shortLabel(d).padEnd(labelWidth)} | ${String(cur).padStart(7)} | ${String(tgt).padStart(6)} | ${sign.padEnd(13)}|`);
  }
  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// Candidate filtering (per module/track)
// ---------------------------------------------------------------------------

/**
 * Returns `true` if a QBank candidate should be included given the calibration
 * mode. Mode is one of:
 *   - 'm1'         : Module 1 — no extra filter beyond the requested difficulty
 *   - 'm2-easy'    : Module 2 easy track — lifted floor (M ≥ band 5 + a few H@6)
 *   - 'm2-hard'    : Module 2 hard track — H AND score_band ≥ 6
 */
function candidatePassesMode(candidate, mode) {
  const band = candidate.scoreBandRangeCd || 0;
  if (mode === 'm1') return true;
  if (mode === 'm2-hard') {
    return candidate.difficulty === 'H' && band >= 6;
  }
  if (mode === 'm2-easy') {
    // Lifted floor: M items at band ≥ 5, plus H items at band 6 (the easier
    // end of "hard"). Excludes E and excludes top-end H (band 7) which belongs
    // to the hard track.
    if (candidate.difficulty === 'M' && band >= 5) return true;
    if (candidate.difficulty === 'H' && band === 6) return true;
    return false;
  }
  return true;
}

function candidatesFor(internalSkills, targetDifficultyLabel, cbIndex, cacheItems, mode, limit = 3) {
  const cbSkills = [...new Set((internalSkills || []).flatMap(s => SKILL_TO_CB[s] || []))];
  const diffCode = DIFFICULTY_LABEL_TO_CB[targetDifficultyLabel];
  const pool = [];
  for (const skill of cbSkills) {
    const items = cbIndex[`${skill}||${diffCode}`] || [];
    pool.push(...items);
  }
  const filtered = pool.filter(p => candidatePassesMode(p, mode));
  // Already sorted by score_band desc within each (skill,difficulty) bucket; resort merged pool.
  filtered.sort((a, b) => (b.scoreBandRangeCd || 0) - (a.scoreBandRangeCd || 0));
  const enriched = filtered.slice(0, limit).map(p => ({ ...p, detail: cacheItems[p.externalId] || null }));
  return { cbSkills, pool: enriched, totalAvailable: filtered.length, totalUnfiltered: pool.length };
}

function skillDifficultyCounts(internalSkills, cbIndex) {
  const cbSkills = [...new Set((internalSkills || []).flatMap(s => SKILL_TO_CB[s] || []))];
  const counts = { E: 0, M: 0, H: 0 };
  for (const skill of cbSkills) {
    for (const d of CB_DIFF_ORDER) counts[d] += (cbIndex[`${skill}||${d}`] || []).length;
  }
  return { cbSkills, counts };
}

function truncate(s, n = 200) {
  if (!s) return '';
  return s.length > n ? s.slice(0, n) + '…' : s;
}

function stemSummary(item) {
  if (!item) return '_(stem not yet fetched)_';
  const base = item.stemPlain || item.stimulusPlain || '';
  return truncate(base, 220);
}

// ---------------------------------------------------------------------------
// Uniqueness gate: Jaccard tokens + 3-gram overlap
// ---------------------------------------------------------------------------

const MATH_STOPWORDS = new Set([
  'the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'of', 'in', 'on', 'at', 'to', 'from', 'for', 'with', 'by', 'as',
  'and', 'or', 'but', 'if', 'then', 'so', 'than', 'that', 'this', 'these', 'those',
  'what', 'which', 'who', 'whose', 'how', 'when', 'where', 'why',
  'each', 'every', 'all', 'any', 'some', 'no', 'not',
  'value', 'values', 'equation', 'equations', 'expression', 'expressions',
  'function', 'functions', 'shown', 'given', 'following', 'represents',
  'it', 'its', 'their', 'they', 'he', 'she', 'his', 'her',
  'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'first', 'second', 'third',
]);

/**
 * Tokenize text for similarity:
 *   - lowercase, strip non-alnum (keeps digits because they're meaningful)
 *   - split on whitespace
 *   - remove math stopwords
 */
export function tokenize(text) {
  if (!text) return [];
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(t => t && !MATH_STOPWORDS.has(t));
}

function jaccard(setA, setB) {
  if (setA.size === 0 && setB.size === 0) return 0;
  let inter = 0;
  const smaller = setA.size < setB.size ? setA : setB;
  const larger = setA.size < setB.size ? setB : setA;
  for (const v of smaller) if (larger.has(v)) inter++;
  const uni = setA.size + setB.size - inter;
  return uni === 0 ? 0 : inter / uni;
}

function trigrams(tokens) {
  const grams = new Set();
  for (let i = 0; i + 2 < tokens.length; i++) {
    grams.add(`${tokens[i]} ${tokens[i + 1]} ${tokens[i + 2]}`);
  }
  return grams;
}

function trigramOverlap(gramsA, gramsB) {
  if (gramsA.size === 0 || gramsB.size === 0) return 0;
  let inter = 0;
  const smaller = gramsA.size < gramsB.size ? gramsA : gramsB;
  const larger = gramsA.size < gramsB.size ? gramsB : gramsA;
  for (const g of smaller) if (larger.has(g)) inter++;
  // Ratio of overlap to the *smaller* set — symmetric in spirit but penalises
  // "small authored stem fully contained in long QBank item" cases.
  return inter / smaller.size;
}

const JACCARD_THRESHOLD = 0.78;
const NGRAM_THRESHOLD = 0.60;

/**
 * Compare an authored question stem to all QBank cached items and report the
 * worst-case (closest) similarity. Pass = below both thresholds.
 *
 * @param {string} authoredText                — stem text of the authored item
 * @param {object} qbankItems                  — { [externalId]: { stemPlain, stimulusPlain, ... } }
 * @returns {{ pass: boolean, jaccard: number, ngramOverlap: number, closestQbankId: string|null }}
 */
export function checkUniqueness(authoredText, qbankItems) {
  const aTokens = tokenize(authoredText);
  const aSet = new Set(aTokens);
  const aGrams = trigrams(aTokens);

  let worstJaccard = 0;
  let worstNgram = 0;
  let worstId = null;
  let worstScore = -1;

  for (const [id, item] of Object.entries(qbankItems || {})) {
    if (!item) continue;
    const text = (item.stemPlain || item.stimulusPlain || '');
    if (!text) continue;
    const bTokens = tokenize(text);
    if (bTokens.length === 0) continue;
    const bSet = new Set(bTokens);
    const bGrams = trigrams(bTokens);
    const j = jaccard(aSet, bSet);
    const n = trigramOverlap(aGrams, bGrams);
    // Combined score for "closeness": weighted average; report the worst-by-combined.
    const combined = (j + n) / 2;
    if (combined > worstScore) {
      worstScore = combined;
      worstJaccard = j;
      worstNgram = n;
      worstId = id;
    }
  }

  const pass = worstJaccard <= JACCARD_THRESHOLD && worstNgram <= NGRAM_THRESHOLD;
  return {
    pass,
    jaccard: Number(worstJaccard.toFixed(4)),
    ngramOverlap: Number(worstNgram.toFixed(4)),
    closestQbankId: worstId,
  };
}

// ---------------------------------------------------------------------------
// Report generator
// ---------------------------------------------------------------------------

function getModuleData(pt, moduleNum) {
  // Module 1 always pt.modules[0]. Module 2 is pt.modules[1] (or per-track
  // override if the test file has been split into m2-easy / m2-hard tracks).
  if (moduleNum === 1) return pt.modules[0];
  // Future-proof: if the test file ever exposes track-specific modules, prefer
  // them; otherwise fall back to the single Module 2.
  const m2 = pt.modules[1];
  if (!m2) throw new Error(`Test has no Module 2`);
  return m2;
}

function renderModuleReportSection({
  testN,
  pt,
  moduleNum,
  track,
  cbIndex,
  cacheItems,
  indexTotal,
  cacheTotal,
}) {
  const modData = getModuleData(pt, moduleNum);
  const questions = modData.questions;
  const currentDist = { easy: 0, medium: 0, hard: 0 };
  for (const q of questions) currentDist[q.difficulty] = (currentDist[q.difficulty] || 0) + 1;

  const proposed = moduleNum === 1
    ? PROPOSED_DISTRIBUTION_M1
    : PROPOSED_DISTRIBUTION_M2[track];

  const mode = moduleNum === 1 ? 'm1' : (track === 'hard' ? 'm2-hard' : 'm2-easy');
  const coverage = analyzeDomainCoverage(modData);

  const lines = [];
  const heading = moduleNum === 1
    ? `# Module 1 Calibration — Practice Test ${testN}`
    : `# Module 2 Calibration (${track} track) — Practice Test ${testN}`;
  lines.push(heading);
  lines.push('');
  lines.push(`**Current distribution:** ${currentDist.easy} easy / ${currentDist.medium} medium / ${currentDist.hard} hard`);
  lines.push(`**Proposed distribution:** ${proposed.easy} easy / ${proposed.medium} medium / ${proposed.hard} hard`);
  lines.push(`**CB Educator QBank reference:** ${indexTotal} SAT Math items indexed, ${cacheTotal} with full content cached`);
  if (moduleNum === 2) {
    if (track === 'hard') {
      lines.push(`**Filter:** \`difficulty === "H" AND score_band_range_cd >= 6\``);
    } else {
      lines.push(`**Filter:** \`(difficulty === "M" AND score_band >= 5) OR (difficulty === "H" AND score_band == 6)\``);
    }
  }
  lines.push('');
  lines.push('## Domain coverage');
  lines.push('');
  lines.push(renderDomainTable(coverage));
  lines.push('');
  lines.push('---');
  lines.push('');

  questions.forEach((q, i) => {
    const pos = i + 1;
    const skills = (q.skills || []).join(', ');
    const stem = (q.question || '').replace(/\s+/g, ' ').trim();

    let targetDiff = q.difficulty;
    if (moduleNum === 1) {
      // Promote position 5 from easy → medium (legacy heuristic from calibrateModule1.mjs).
      const easyPositionsToPromote = [5];
      if (q.difficulty === 'easy' && easyPositionsToPromote.includes(pos)) {
        targetDiff = 'medium';
      }
    } else if (moduleNum === 2 && track === 'hard') {
      // Hard track always seeks hard candidates regardless of current item difficulty.
      targetDiff = 'hard';
    } else if (moduleNum === 2 && track === 'easy') {
      // Easy track lifts the floor; aim for medium if currently easy.
      if (q.difficulty === 'easy') targetDiff = 'medium';
    }

    const sameLabelCandidates = candidatesFor(q.skills, q.difficulty, cbIndex, cacheItems, mode, 3);
    const harderLabel = targetDiff !== q.difficulty ? targetDiff : NEXT_HARDER[q.difficulty];
    const harderCandidates = candidatesFor(q.skills, harderLabel, cbIndex, cacheItems, mode, 3);
    const poolCounts = skillDifficultyCounts(q.skills, cbIndex);

    lines.push(`## Q${String(pos).padStart(2, '0')} — current: **${q.difficulty}**  ·  target: **${targetDiff}**${targetDiff !== q.difficulty ? ' (upgrade)' : ''}`);
    lines.push('');
    lines.push(`**Internal skills:** \`${skills || '(none)'}\``);
    lines.push(`**CB skill mapping:** ${poolCounts.cbSkills.map(s => `\`${s}\``).join(', ') || '_(no mapping — add to SKILL_TO_CB)_'}`);
    lines.push(`**CB pool at these skills:** E=${poolCounts.counts.E}, M=${poolCounts.counts.M}, H=${poolCounts.counts.H}`);
    lines.push('');
    lines.push('**Current stem:**');
    lines.push('');
    lines.push(`> ${truncate(stem, 400)}`);
    lines.push('');

    const renderPool = (label, set) => {
      if (!set.pool.length) {
        lines.push(`**${label}:** _none matched filter_`);
        lines.push('');
        return;
      }
      lines.push(`**${label}** (${set.totalAvailable} available, top 3 by score_band):`);
      lines.push('');
      set.pool.forEach((c, k) => {
        lines.push(`${k + 1}. \`${c.externalId}\` — ${c.skill} · ${c.difficulty} · score_band=${c.scoreBandRangeCd ?? '?'}`);
        lines.push(`   ${stemSummary(c.detail)}`);
      });
      lines.push('');
    };

    if (moduleNum === 1) {
      renderPool(`CB reference at CURRENT difficulty (${q.difficulty})`, sameLabelCandidates);
      if (targetDiff !== q.difficulty) {
        renderPool(`CB candidates at TARGET difficulty (${targetDiff})`, harderCandidates);
      } else if (NEXT_HARDER[q.difficulty] !== q.difficulty) {
        renderPool(`CB candidates at HARDER difficulty (${NEXT_HARDER[q.difficulty]}) — for optional upgrade`, harderCandidates);
      }
    } else {
      // Module 2: only show filtered candidates per the chosen track.
      renderPool(`CB candidates at CURRENT difficulty (${q.difficulty}) — track filter applied`, sameLabelCandidates);
      if (targetDiff !== q.difficulty) {
        renderPool(`CB candidates at TARGET difficulty (${targetDiff}) — track filter applied`, harderCandidates);
      }
    }

    lines.push('---');
    lines.push('');
  });

  return lines.join('\n');
}

function renderTestReport({
  testN,
  pt,
  moduleNum,
  track,
  cbIndex,
  cacheItems,
  indexTotal,
  cacheTotal,
}) {
  return renderModuleReportSection({
    testN, pt, moduleNum, track, cbIndex, cacheItems, indexTotal, cacheTotal,
  });
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

export function runCalibration({ testNumbers, moduleNum, track }) {
  const qbank = loadQBank();
  const metadata = loadQBankIndex();
  const cbIndex = indexByCbSkillFromMetadata(metadata);
  const cacheItems = qbank.items || {};
  const indexTotal = metadata.length;
  const cacheTotal = Object.keys(cacheItems).length;

  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const mapped = Object.keys(SKILL_TO_CB).length;
  const modeLabel = moduleNum === 1 ? 'Module 1' : `Module 2 (${track})`;
  console.log(`Calibrating ${modeLabel} for tests: ${testNumbers.join(', ')}`);
  console.log(`Skill mapping covers ${mapped} internal tags.`);
  console.log(`CB QBank metadata: ${indexTotal} items indexed, ${cacheTotal} with full content.`);

  const results = [];
  for (const testN of testNumbers) {
    try {
      const pt = loadPracticeTest(testN);
      const report = renderTestReport({
        testN, pt, moduleNum, track, cbIndex, cacheItems, indexTotal, cacheTotal,
      });
      const outName = moduleNum === 1
        ? `module1-calibration-test-${testN}.md`
        : `module2-calibration-test-${testN}-${track}.md`;
      const out = path.join(OUTPUT_DIR, outName);
      fs.writeFileSync(out, report);
      console.log(`  wrote ${out}`);
      results.push({ testN, out });
    } catch (e) {
      console.error(`  test ${testN} failed: ${e.message}`);
      results.push({ testN, error: e.message });
    }
  }
  return results;
}

// ---------------------------------------------------------------------------
// CLI entrypoint
// ---------------------------------------------------------------------------

function isMainModule() {
  // ESM-equivalent of `require.main === module`. process.argv[1] may be
  // undefined when this module is loaded via `--input-type=module -e`, so
  // guard against that.
  const entry = process.argv[1];
  if (!entry) return false;
  return import.meta.url === `file://${entry}`
    || import.meta.url.endsWith(path.basename(entry));
}

if (isMainModule()) {
  try {
    const opts = parseArgs(process.argv);
    runCalibration(opts);
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}
