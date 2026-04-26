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
 *   node scripts/calibrateModule.mjs --lint --test=1                       # rubric lint (CB authenticity)
 *
 * Output (calibration mode):
 *   scripts/generated/module{1|2}-calibration-test-{N}[-{track}].md
 *
 * Output (lint mode):
 *   stdout: file:line violation: <description> per failure; exit 1 on any failure.
 *
 * Exports:
 *   - analyzeDomainCoverage(testJsModule)       — current/target domain table
 *   - checkUniqueness(authoredText, qbankItems) — Jaccard + 3-gram dupe gate
 *   - lintPracticeTest({ testN, qbankItems })   — rubric checks, returns violation list
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
const PDF_TEXT_DIR = path.join(GEN_DIR, 'pdf-text');
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
  const LINT = args.includes('--lint');

  const testNumbers = ALL
    ? Array.from({ length: 12 }, (_, i) => i + 1)
    : (TEST_ARG ? TEST_ARG.split('=')[1].split(',').map(n => parseInt(n, 10)) : [1]);

  for (const n of testNumbers) {
    if (!Number.isInteger(n) || n < 1 || n > 12) {
      throw new Error(`--test value must be 1-12 (got ${n})`);
    }
  }

  if (LINT) {
    // Lint mode operates on whole tests (both modules) and ignores --module/--track.
    return { mode: 'lint', testNumbers };
  }

  const moduleNum = MODULE_ARG ? parseInt(MODULE_ARG.split('=')[1], 10) : 1;
  const track = TRACK_ARG ? TRACK_ARG.split('=')[1] : null;

  if (moduleNum === 2 && (track !== 'easy' && track !== 'hard')) {
    throw new Error(`--module=2 requires --track=easy or --track=hard`);
  }
  if (![1, 2].includes(moduleNum)) {
    throw new Error(`--module must be 1 or 2 (got ${moduleNum})`);
  }

  return { mode: 'calibrate', testNumbers, moduleNum, track };
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

// PT 4-11 PDF corpus chunking: sliding token windows match the typical stem
// length so a verbatim copy from any single CB question still produces a
// high-Jaccard hit even though the PDF has thousands of unrelated tokens.
const PDF_WINDOW_TOKENS = 25;
const PDF_WINDOW_STEP = 8;

// Sliding window over a long authored field (the explanation). Stems and
// joined choices are short enough to compare as a single window; explanations
// are 100-500+ tokens and need windowing so a verbatim 25-token paste does
// not get diluted by the surrounding original prose.
const EXPLANATION_WINDOW_TOKENS = 25;
const EXPLANATION_WINDOW_STEP = 8;

// A field has to have at least this many content tokens before its uniqueness
// score is meaningful — a 4-token blob like "31 36 46 50" (joined math
// answer choices) collides with random PDF noise too easily.
const MIN_TOKENS_FOR_CHECK = 12;

/**
 * Pre-tokenize a corpus once so the lint can run thousands of stem/choice/
 * explanation comparisons against it without re-tokenizing each call.
 *
 * Accepts either:
 *   - QBank-shaped object: { [id]: { stemPlain | stimulusPlain, ... } }
 *   - PDF-window list:    [{ id, text }] (already chunked)
 *
 * @returns {Array<{ id: string, tokenSet: Set<string>, grams: Set<string>, text: string }>}
 */
export function indexCorpus(corpus) {
  const out = [];
  const entries = Array.isArray(corpus)
    ? corpus.map(c => [c.id, c.text])
    : Object.entries(corpus || {}).map(([id, item]) => [id, item && (item.stemPlain || item.stimulusPlain || '')]);
  for (const [id, text] of entries) {
    if (!text) continue;
    const tokens = tokenize(text);
    if (tokens.length === 0) continue;
    out.push({
      id,
      tokenSet: new Set(tokens),
      grams: trigrams(tokens),
      text,
    });
  }
  return out;
}

/**
 * Slide token windows over a long authored field and return the worst-case
 * window vs. the indexed corpus. Used for explanations.
 *
 * @returns {{ pass: boolean, jaccard: number, ngramOverlap: number, closestId: string|null, authoredOffset: number }}
 */
export function checkUniquenessSliding(authoredText, indexedCorpus, opts = {}) {
  const winSize = opts.window || EXPLANATION_WINDOW_TOKENS;
  const winStep = opts.step || EXPLANATION_WINDOW_STEP;
  const aTokens = tokenize(authoredText);
  if (aTokens.length === 0) {
    return { pass: true, jaccard: 0, ngramOverlap: 0, closestId: null, authoredOffset: 0 };
  }
  // If the field is shorter than one window, fall back to a single check.
  if (aTokens.length <= winSize) {
    const single = matchAgainstIndex(new Set(aTokens), trigrams(aTokens), indexedCorpus);
    return { ...single, authoredOffset: 0 };
  }
  let worst = { jaccard: 0, ngramOverlap: 0, closestId: null, combined: -1, authoredOffset: 0 };
  for (let i = 0; i + winSize <= aTokens.length; i += winStep) {
    const win = aTokens.slice(i, i + winSize);
    const r = matchAgainstIndex(new Set(win), trigrams(win), indexedCorpus);
    const c = (r.jaccard + r.ngramOverlap) / 2;
    if (c > worst.combined) worst = { ...r, combined: c, authoredOffset: i };
  }
  const pass = worst.jaccard <= JACCARD_THRESHOLD && worst.ngramOverlap <= NGRAM_THRESHOLD;
  return {
    pass,
    jaccard: Number(worst.jaccard.toFixed(4)),
    ngramOverlap: Number(worst.ngramOverlap.toFixed(4)),
    closestId: worst.closestId,
    authoredOffset: worst.authoredOffset,
  };
}

function matchAgainstIndex(aSet, aGrams, indexedCorpus) {
  let worstJaccard = 0;
  let worstNgram = 0;
  let worstId = null;
  let worstScore = -1;
  for (const item of indexedCorpus) {
    const j = jaccard(aSet, item.tokenSet);
    const n = trigramOverlap(aGrams, item.grams);
    const combined = (j + n) / 2;
    if (combined > worstScore) {
      worstScore = combined;
      worstJaccard = j;
      worstNgram = n;
      worstId = item.id;
    }
  }
  const pass = worstJaccard <= JACCARD_THRESHOLD && worstNgram <= NGRAM_THRESHOLD;
  return {
    pass,
    jaccard: Number(worstJaccard.toFixed(4)),
    ngramOverlap: Number(worstNgram.toFixed(4)),
    closestId: worstId,
  };
}

/**
 * Compare an authored question stem to all QBank cached items and report the
 * worst-case (closest) similarity. Pass = below both thresholds.
 *
 * @param {string} authoredText                — stem text of the authored item
 * @param {object} qbankItems                  — { [externalId]: { stemPlain, stimulusPlain, ... } }
 * @returns {{ pass: boolean, jaccard: number, ngramOverlap: number, closestQbankId: string|null }}
 */
export function checkUniqueness(authoredText, qbankItems) {
  const indexed = indexCorpus(qbankItems);
  const aTokens = tokenize(authoredText);
  const r = matchAgainstIndex(new Set(aTokens), trigrams(aTokens), indexed);
  return {
    pass: r.pass,
    jaccard: r.jaccard,
    ngramOverlap: r.ngramOverlap,
    closestQbankId: r.closestId,
  };
}

/**
 * Build a sliding-window corpus from the cached PT 4-11 PDF text files.
 * Returns an indexed corpus ready for checkUniquenessSliding / matchAgainstIndex.
 *
 * Throws if the cache directory is missing — bootstrap with:
 *   node scripts/extractCBPracticeTestText.mjs
 */
export function loadPdfCorpus({ requireCache = true, dir = PDF_TEXT_DIR } = {}) {
  if (!fs.existsSync(dir)) {
    if (requireCache) {
      throw new Error(`PDF text cache missing at ${dir}. Run: node scripts/extractCBPracticeTestText.mjs`);
    }
    return [];
  }
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.txt')).sort();
  if (files.length === 0) {
    if (requireCache) {
      throw new Error(`PDF text cache empty at ${dir}. Run: node scripts/extractCBPracticeTestText.mjs`);
    }
    return [];
  }
  const windows = [];
  for (const f of files) {
    const text = fs.readFileSync(path.join(dir, f), 'utf8');
    const tokens = tokenize(text);
    let idx = 0;
    for (let i = 0; i + PDF_WINDOW_TOKENS <= tokens.length; i += PDF_WINDOW_STEP) {
      const win = tokens.slice(i, i + PDF_WINDOW_TOKENS);
      windows.push({ id: `${f}#${idx++}`, text: win.join(' ') });
    }
  }
  return indexCorpus(windows);
}

// ---------------------------------------------------------------------------
// Lint mode — CB authenticity rubric checks
// ---------------------------------------------------------------------------
//
// See docs/CB_AUTHENTICITY_RUBRIC.md §8 for the lint rule list. This module
// enforces the mechanical subset (LaTeX delimiters, choice count, explanation
// pattern, distractor misconception annotation, band field, and uniqueness
// against the cached QBank). Semantic rubric items (top-of-band stem patterns,
// the four-misconception rule of distractor logic) cannot be linted and are
// enforced by the calibration set instead.

const LINT_BAND_MIN = 1;
const LINT_BAND_MAX = 7;

const APPROVED_PATTERN_NAMES = new Set([
  'Word-to-Expression Translation',
  'Percent of a Whole',
  'Reverse-Percent',
  'Percent Increase/Decrease',
  'Percent Increase',
  'Percent Decrease',
  'Proportion Solving',
  'Interpret Slope in Context',
  'Interpret Intercept in Context',
  'Interpret Coefficient in Context',
  'Line from Two Points',
  'Perpendicular Slope',
  'Parallel Slope',
  'Two-Way Table Conditional Probability',
  'Marginal Probability',
  'Quadratic — Discriminant Test',
  "Quadratic — Vieta's Sum/Product",
  'Quadratic — Completing the Square',
  'Function Composition',
  'Function Transformation',
  'Shifted Output',
  'System of Equations — Elimination',
  'System of Equations — Substitution',
  'Circle in Standard Form',
  'Circle in General Form',
  'Right Triangle — Pythagorean',
  'Right Triangle — Trig Ratios',
  'Volume Scaling',
  'Surface Area',
  'Exponential Growth/Decay',
  'Compound Interest',
  // Added during round-7 Test-1 recalibration (Phase 1).
  'Function Evaluation',
  'Combining Like Terms',
  'Multi-Step Linear Equation',
  'Margin of Error',
  'Residual',
  'Discriminant Analysis',
  'Outlier Effect',
  'Composite Surface Area',
  'Tangent Line and Discriminant',
  'Vertex Form to Standard Form',
  'Matching Coefficients',
  'Rational Expression Simplification',
  'Three-Variable System',
  'Conditional Probability from Two-Way Table',
  'Scatterplot Line of Best Fit',
  'Unit Conversion',
  'Inequality Boundary',
  'Vertex Form Maximum',
  'Exponent Rules with Radicals',
  'Common-Base Exponent Simplification',
  'Reverse-Percent Multi-Step',
  'No-Solution Condition',
  'Mean from List',
  'Three-Variable Elimination',
  'System Equivalence Check',
  'Sum of Parts Ratio',
  'Vertex Form from Two Conditions',
  'Cylinder Volume',
  'Right Triangle Trigonometry with Perimeter',
  'Conditional Probability with Percent',
  'Perpendicular Line Through Point',
  'Complete the Square — Non-Square Radius',
  'Discriminant with Integer Bound',
  'Three-Equation Contradiction',
  'Composite Solid Surface Area',
  'Percent Greater Than',
  'Function Composition Inverse',
  // Bulk-added for Tests 2-12 recalibration propagation
  "3D Composite Solid Surface Area",
  "3D Scaling — Volume Ratio",
  "Absolute Value Equation",
  "Algebraic Identity Expansion",
  "Angles with Parallel Lines and Transversals",
  "Area Ratio to Side Ratio in Similar Figures",
  "Area of Triangle from Coordinates",
  "Area of a Rectangle",
  "Area of triangle from coordinates",
  "Area with Radical Side Lengths",
  "Area with Surds (Difference of Squares)",
  "Average Rate of Change from Data",
  "Basic Percent Calculation",
  "Basic Probability",
  "Basic Proportion",
  "Basic percent calculation",
  "Basic percent",
  "Basic probability",
  "Calculating the Mean",
  "Chained Ratios",
  "Circle Equation -- Area from General Form",
  "Circle Equation Transformation",
  "Circle Equation from Center and Point",
  "Circle Equation — Center and Radius",
  "Circle Equation — Completing the Square",
  "Circle Tangent Line",
  "Circle Tangent to a Line — Finding Radius",
  "Circle equation -- test points",
  "Circle-Line Intersection",
  "Circle-Line Tangency",
  "Comparing Function Transformations",
  "Comparing Groups with Proportions vs. Counts",
  "Comparing Standard Deviations Conceptually",
  "Complementary Angle Trig Identity",
  "Complementary Probability",
  "Complete the Square for Circle Equation",
  "Complete the Square for a Circle",
  "Complete the Square — Circle Center",
  "Completing the Square for Circles",
  "Completing the square",
  "Complex Exponent Simplification",
  "Composite 3D Solid Surface Area",
  "Composite Function Evaluation",
  "Compound Interest Expression",
  "Compound Interest Model",
  "Compound Interest — Effective Annual Rate",
  "Conditional Percentage from Two-Way Table",
  "Conditional Probability from Table",
  "Conditional Probability with Overlapping Groups",
  "Conditional percentage from two-way table",
  "Conditional probability from two-way table",
  "Conditional proportion from two-way table",
  "Confidence Interval and Conclusions",
  "Confidence Interval and Majority Claim",
  "Converting Between Quadratic Forms",
  "Converting Exponential Half-Life to Monthly Rate",
  "Converting Exponential Period to Annual Rate",
  "Converting Exponential Periods",
  "Counting Solutions — Dependent System",
  "Cylinder Volume with Percent Fill",
  "Dependent/Inconsistent System Analysis",
  "Determine Exponential from Two Points",
  "Discriminant Equals Zero",
  "Discriminant Inequality",
  "Discriminant and No Real Solutions",
  "Discriminant for No Real Solutions",
  "Discriminant — Greatest Value for No Real Solutions",
  "Discriminant — No Real Solutions",
  "Discriminant — One Real Solution",
  "Distance Between x-Intercepts",
  "Distance Formula for Circle Radius",
  "Distance Formula",
  "Division with rounding up",
  "Effect of Adding a Constant to All Values",
  "Effect of Adding a Constant to Every Data Value",
  "Effect of Adding a Value on Median",
  "Effect of Adding an Outlier on Statistics",
  "Effect of Outlier on Median",
  "Effect of Removing an Outlier",
  "Effect of Sample Size on Estimates",
  "Equal Bases Strategy",
  "Equation of Line from Two Points",
  "Evaluating Exponential Functions",
  "Evaluating Exponential at Zero",
  "Evaluating Vertex Form at a Specific Input",
  "Evaluating a Function",
  "Exponent Division Rule",
  "Exponent Rules for Division",
  "Exponent Rules with Multiple Variables",
  "Exponent Rules with Prime Factorization",
  "Exponent Simplification with Radicals",
  "Exponent rules with fractional exponents",
  "Exponential Decay Inequality",
  "Exponential Decay Model",
  "Exponential Decay — Identifying the Base",
  "Exponential Equation with Common Base",
  "Exponential Equation — Common Base",
  "Exponential Equations with Common Base",
  "Exponential Evaluation",
  "Exponential Function Evaluation",
  "Exponential Function with Two Conditions",
  "Exponential Function — Finding Parameters from Two Points",
  "Exponential Function — Solving for Parameter",
  "Exponential Growth Interpretation",
  "Exponential Growth Model",
  "Exponential Growth Rate",
  "Exponential Growth with Period",
  "Exponential Growth — Unit Conversion",
  "Exponential Model Interpretation",
  "Exponential function from two points",
  "Exponential growth model",
  "Exponential with y-Intercept and Point Constraint",
  "FOIL / Polynomial Multiplication",
  "Factoring Analysis with Parameters",
  "Factoring a Cubic to Find Zeros",
  "Factoring analysis with constraints",
  "Find a Value from the Mean",
  "Find y-intercept from slope and point",
  "Finding Exponential Parameters from Points",
  "Finding Polynomial Coefficients from Conditions",
  "Finding Quadratic from Vertex and Point",
  "Five-Number Summary and IQR",
  "Fractional Exponent Rules",
  "Fractional exponent manipulation",
  "Function Evaluation in Context",
  "Function Evaluation to Find Parameter",
  "Function Operations",
  "Function Transformations",
  "Function transformation evaluation",
  "General form to standard form of a circle",
  "Half-Life — Solving Exponential Equations",
  "Horizontal shift of vertex",
  "Inclusion-Exclusion Principle",
  "Independent Events Probability",
  "Independent compound probability",
  "Infinitely Many Solutions (Dependent System)",
  "Infinitely Many Solutions (Proportional Equations)",
  "Inscribed Angle in Semicircle",
  "Intercepts and Distance",
  "Interpret Exponential Base",
  "Interpret Exponential Half-Life",
  "Interpret Slope in Linear Model",
  "Interpret Y-Intercept in Context",
  "Interpret exponential function value",
  "Interpret slope in context",
  "Interpreting Correlation Coefficient",
  "Interpreting Exponential Decay Base",
  "Interpreting Exponential Growth Rate",
  "Interpreting Slope as Rate of Change",
  "Intersection of Exponential and Quadratic",
  "Line from Slope and Point",
  "Line of Best Fit Direction",
  "Line of Best Fit Prediction with Unit Conversion",
  "Line of Best Fit Prediction",
  "Linear Equation Word Problem",
  "Linear Function Interpretation",
  "Linear Function from Two Points",
  "Linear Growth Model",
  "Linear Growth",
  "Linear Model from Rate and Initial Value",
  "Linear model -- find zero",
  "Logarithm Properties — Combining Logs",
  "Margin of Error Application",
  "Margin of Error Interpretation",
  "Margin of Error and Sample Size Relationship",
  "Margin of Error and Sample Size",
  "Matching Coefficients in Factored Form",
  "Matching Polynomial Coefficients",
  "Mean and Sum Relationship",
  "Mean from data",
  "Mean vs. median relationship",
  "Median Calculation",
  "Median from Data",
  "Median from Frequency Data",
  "Median of Even-Sized Data Set",
  "Median of a Triangle in Coordinate Geometry",
  "Median of a triangle using coordinates",
  "Midpoint Formula",
  "Minimum of a Quadratic in Factored Form",
  "Minimum of a Quadratic — Vertex",
  "Multi-Step Word Problem with Geometry",
  "New mean after adding a value",
  "No Solution Parameter Problem",
  "No Solution — Parameter Problem",
  "Nonlinear System of Equations",
  "Observational vs. Experimental Study Conclusions",
  "One-Step Equation",
  "One-Step Linear Equation",
  "Parallel Lines Same Slope",
  "Parallel Lines and Angle Relationships",
  "Parallel Lines and Solutions",
  "Parallel Lines and Standard Form",
  "Parallel Lines and Transversals",
  "Parallel Lines — Consecutive Interior Angles",
  "Parallel Lines — No Intersection",
  "Parallel Lines — Same Slope",
  "Percent Calculation",
  "Percent Complement",
  "Percent Discount",
  "Percent Increase with Scaling",
  "Percent Markup",
  "Percent of a Total",
  "Perfect Square Trinomial",
  "Periodic Function",
  "Perpendicular Line Through a Point",
  "Perpendicular Line through a Point",
  "Perpendicular Lines and Point-Slope",
  "Perpendicular Lines and x-intercept",
  "Perpendicular Lines — Negative Reciprocal Slopes",
  "Perpendicular Slopes and Finding Intercept",
  "Perpendicular lines",
  "Points on a Line",
  "Polynomial Factoring with Given Factor",
  "Polynomial Root Relationships",
  "Polynomial Zeros via Factoring",
  "Polynomial division / factoring",
  "Prediction from Linear Model",
  "Probability Without Replacement",
  "Probability with Changed Conditions",
  "Probability with OR (Inclusion-Exclusion)",
  "Proportion / unit rate",
  "Proportion solving",
  "Proportion with Linear Expressions",
  "Proportional Reasoning",
  "Pythagorean Theorem Application",
  "Pythagorean Theorem",
  "Quadratic Inequality from Context",
  "Quadratic Maximum (Projectile)",
  "Quadratic Vertex Form Application",
  "Quadratic from Roots and Vertex Constraint",
  "Quadratic from Roots and a Condition",
  "Quadratic from Vertex and Point",
  "Quadratic from three points",
  "Quadratic in Disguise",
  "Quadratic-Linear System with One Intersection",
  "Quadratic-Linear System",
  "Quadratic-linear system with exactly one intersection",
  "Quadratic-linear system, exactly one intersection",
  "Quick Margin of Error Estimate",
  "Radical Equation with Extraneous Solutions",
  "Radical Equation with Potential Extraneous Solution",
  "Radical Equation",
  "Range of a Data Set",
  "Rate × Time = Distance",
  "Rate-Time-Distance Translation",
  "Ratio and Proportion",
  "Ratio to Actual Count",
  "Rational Equation with No Solution",
  "Rational Equation with No Solutions",
  "Rational Equation — Solving with Common Denominator",
  "Rational Equation",
  "Reading Circle Equation",
  "Recalculating Mean After Removing Values",
  "Rectangle Area",
  "Rectangle perimeter",
  "Regular Polygon Exterior Angle",
  "Repeated Doubling",
  "Repeated Independent Events",
  "Residual = Actual - Predicted",
  "Residual Calculation",
  "Residual from Line of Best Fit",
  "Residual from line of best fit",
  "Residual interpretation",
  "Right Triangle Area with Surds",
  "Right Triangle Trig — Area Calculation",
  "Right Triangle Trig — Finding Sides",
  "Right Triangle Trigonometry",
  "Right triangle area",
  "Right triangle trigonometry with scaling",
  "Sample Size and Margin of Error Relationship",
  "Sample Size and Margin of Error",
  "Scale Factor / Unit Rate",
  "Scaled Expression Shortcut",
  "Scaling a Data Set by a Constant",
  "Sector Arc Length to Area",
  "Setting Two Linear Expressions Equal",
  "Similar Figures -- Area Ratio",
  "Similar Figures — Area Ratio",
  "Similar Solids -- Surface Area Ratio",
  "Similar Triangle Side Ratios",
  "Similar Triangles (Side Splitter Theorem)",
  "Similar Triangles Proportion",
  "Similar Triangles and Area Ratio",
  "Similar Triangles — Scale Factor",
  "Similar triangles -- area ratio",
  "Similar triangles -- scale factor and perimeter",
  "Simplifying Radicals",
  "Simplifying Rational Expressions",
  "Slope from Two Points",
  "Slope-Intercept Form",
  "Solving Equations with Fractions",
  "Solving Exponential Equation",
  "Solving Exponential Inequality",
  "Solving Linear Equations",
  "Solving Radical Equations",
  "Solving a Basic Proportion",
  "Solving via Function Notation",
  "Solving with Function Notation",
  "Sphere — Volume to Surface Area",
  "Standard Deviation Boundaries",
  "Standard Deviation Interpretation",
  "Standard Deviation and Empirical Rule",
  "Subtracting Polynomials",
  "Sum of Roots (Vieta's Formulas)",
  "Surface Area and Volume System",
  "Surface Area of a Cylinder — Solving for Radius",
  "Surface Area to Volume Conversion",
  "System of Three Equations — Strategic Combination",
  "System of Three Equations",
  "System of linear equations",
  "Systems of Equations — Elimination",
  "Systems of Linear Equations (Word Problem)",
  "Systems of Linear Equations",
  "Systems with no solution (parallel lines)",
  "Systems — Infinitely Many Solutions",
  "Tangent Line to Circle",
  "Tangent Line to a Circle",
  "Tangent line to a circle -- discriminant method",
  "Tangent to Axis Means Discriminant = 0",
  "Testing a Point in a System of Inequalities",
  "Transformation preserves min/max value",
  "Triangle Angle Sum",
  "Triangle Area from Coordinates",
  "Triangle angle sum",
  "Trig Identity Manipulation",
  "Trig Ratio to Find Side Lengths",
  "Two-Group Overlap",
  "Two-Way Table Conditional Fraction",
  "Two-Way Table Conditional Percentage",
  "Two-Way Table Conditional Proportion",
  "Unit Conversion — Minutes to Hours",
  "Unit Rate Calculation",
  "Vertex Form and Minimum Value",
  "Vertex Form of a Quadratic",
  "Vertex Form to Find y-Intercept",
  "Vertex Form with Multiple Constraints",
  "Vertex Form with Parameter Finding",
  "Vertex Form with Root and Maximum Constraints",
  "Vertex Form — Finding the Coefficient",
  "Vertex form identification",
  "Vertex of a Parabola — Optimization",
  "Vertex of a Parabola — Time of Maximum",
  "Vertex of a Quadratic (Maximum)",
  "Vertex on x-axis (discriminant = 0)",
  "Vertical Distance",
  "Vertical Translation of Functions",
  "Vertical shift of a function",
  "Vieta's Formulas for Sum of Roots",
  "Vieta's Formulas — Sum of Squares of Roots",
  "Volume of a Cone",
  "Weighted Average of Percents",
  "Word to equation",
  "Word to expression",
  "Word-to-Equation Translation",
  "Word-to-Expression",
  "Zeros of Rational Functions",
]);

/**
 * Walk a practice-test source file and produce a flat list of
 *   { questionId, type, moduleIndex, modulePosition, startLine, endLine }
 * mapping each authored question's object literal back to the line range
 * occupied in source. Used to attach line numbers to lint violations.
 *
 * Approach: track `modules:` opener, then for each `questions:` array, count
 * top-level `{ ... }` siblings via brace depth. Each top-level `{` at depth 0
 * inside a questions array starts a question.
 */
export function indexQuestionLines(src) {
  const lines = src.split('\n');
  const result = [];

  // Find each `questions:` array opening (handles two modules). We require a
  // `modules: [` opener to appear before the first `questions: [` so that
  // unrelated test fixtures with their own `questions` keyword don't confuse
  // the walker.
  const moduleStarts = [];
  let modulesOpened = false;
  for (let i = 0; i < lines.length; i++) {
    const ln = lines[i];
    if (!modulesOpened && /modules\s*:\s*\[/.test(ln)) {
      modulesOpened = true;
    }
    if (modulesOpened && /questions\s*:\s*\[/.test(ln)) {
      moduleStarts.push(i);
    }
  }

  // For each `questions: [` block, walk lines forward and split by depth-0
  // braces *inside* the questions array. We have to begin scanning AT the
  // `questions: [` line (not after it) so the question's opening `{` on the
  // same line is included. We also walk character-by-character past the `[`
  // so we don't double-count the array-open as a brace.
  for (let mi = 0; mi < moduleStarts.length; mi++) {
    const startIdx = moduleStarts[mi];
    let depth = 0; // brace depth inside the questions array (0 = between questions)
    let qStart = -1;
    let posInModule = 0;
    let inString = false;
    let stringChar = '';
    let prevChar = '';
    let arrayClosed = false;
    let pastArrayOpen = false;

    for (let i = startIdx; i < lines.length && !arrayClosed; i++) {
      const ln = lines[i];
      // On the questions: [ line itself, advance past everything up to and
      // including the opening `[` so we only count tokens inside the array.
      let j = 0;
      if (!pastArrayOpen) {
        const m = ln.match(/questions\s*:\s*\[/);
        if (m) {
          j = m.index + m[0].length;
          pastArrayOpen = true;
        }
      }
      for (; j < ln.length; j++) {
        const c = ln[j];
        if (inString) {
          if (c === stringChar && prevChar !== '\\') inString = false;
          prevChar = c;
          continue;
        }
        if (c === '"' || c === "'" || c === '`') {
          inString = true;
          stringChar = c;
          prevChar = c;
          continue;
        }
        if (c === '/' && j + 1 < ln.length && ln[j + 1] === '/') {
          // single-line comment — skip rest of line
          break;
        }
        if (c === '{') {
          if (depth === 0) qStart = i;
          depth++;
        } else if (c === '}') {
          depth--;
          if (depth === 0 && qStart >= 0) {
            posInModule++;
            result.push({
              moduleIndex: mi,
              modulePosition: posInModule,
              startLine: qStart + 1, // 1-indexed
              endLine: i + 1,
            });
            qStart = -1;
          }
        } else if (c === ']' && depth === 0) {
          arrayClosed = true;
          break;
        }
        prevChar = c;
      }
    }
  }

  return result;
}

/**
 * Examine the LaTeX delimiters in a chunk of text. Returns a list of offending
 * delimiter forms found. Currently catches `\(` and `\[` (KaTeX-style), which
 * the rubric forbids in favor of `$...$` and `$$...$$`.
 */
function findBadLatexDelimiters(text) {
  if (!text || typeof text !== 'string') return [];
  const found = [];
  if (/\\\(/.test(text)) found.push('\\(...\\)');
  if (/\\\[/.test(text)) found.push('\\[...\\]');
  return found;
}

/** Extract the SAT Pattern name from an explanation string, if present. */
function extractPatternName(explanation) {
  if (!explanation) return null;
  const m = explanation.match(/\*\*SAT Pattern:\s*([^*]+?)\*\*/);
  return m ? m[1].trim() : null;
}

/**
 * Reads `practiceTest{N}.js` raw source and pulls the inline `// distractor: ...`
 * comments out per question. The map is keyed by `${moduleIndex}-${modulePosition}`
 * (1-indexed) and each entry is a count of distractor comments inside the
 * question's source range.
 */
function countDistractorCommentsByQuestion(src, lineIndex) {
  const lines = src.split('\n');
  const counts = {};
  for (const entry of lineIndex) {
    let n = 0;
    for (let i = entry.startLine - 1; i < entry.endLine; i++) {
      const ln = lines[i] || '';
      if (/\/\/\s*distractor:/i.test(ln)) n++;
    }
    counts[`${entry.moduleIndex}-${entry.modulePosition}`] = n;
  }
  return counts;
}

/**
 * Lint a single practice test file against the CB authenticity rubric.
 *
 * @param {object} args
 * @param {number} args.testN - 1-12
 * @param {object} args.qbankItems - { [externalId]: { stemPlain, ... } } from cbEducatorQBank.json
 * @param {Array}  [args.pdfCorpus] - indexed PT 4-11 PDF window corpus from loadPdfCorpus().
 *   When omitted, the PDF-based copyright-distance rules are skipped — the QBank
 *   uniqueness rule still runs.
 * @returns {{ file: string, violations: Array<{ line: number, rule: string, message: string }> }}
 */
export function lintPracticeTest({ testN, qbankItems, pdfCorpus }) {
  const file = path.join(TESTS_DIR, `practiceTest${testN}.js`);
  if (!fs.existsSync(file)) {
    throw new Error(`practice test missing at ${file}`);
  }
  const src = fs.readFileSync(file, 'utf8');
  const pt = loadPracticeTest(testN);
  const lineIndex = indexQuestionLines(src);
  const distractorCommentCounts = countDistractorCommentsByQuestion(src, lineIndex);

  // Pre-index the QBank corpus once so the per-question Jaccard checks don't
  // re-tokenize 1.3K items 528 times during a full 12-test lint.
  const qbankIndex = indexCorpus(qbankItems);

  const violations = [];
  const push = (line, rule, message) => violations.push({ line, rule, message });

  const modules = pt.modules || [];
  modules.forEach((mod, mi) => {
    const qs = mod.questions || [];
    qs.forEach((q, qi) => {
      const idxEntry = lineIndex.find(e => e.moduleIndex === mi && e.modulePosition === qi + 1);
      const startLine = idxEntry ? idxEntry.startLine : 1;
      const moduleLabel = `module ${mi + 1}`;
      const qLabel = `Q${qi + 1} (id=${q.id})`;
      const prefix = `${moduleLabel} ${qLabel}`;

      // Rule 1a — MC items have exactly 4 choices
      if (q.type === 'multiple-choice') {
        const choices = q.choices || [];
        if (choices.length !== 4) {
          push(startLine, 'choice-count',
            `${prefix} MC must have exactly 4 choices (found ${choices.length})`);
        }
        // Each choice id must be one of A-D and text non-empty
        const ids = choices.map(c => (c && c.id) || '');
        const expected = ['A', 'B', 'C', 'D'];
        for (let k = 0; k < choices.length; k++) {
          const c = choices[k];
          if (!c || typeof c !== 'object') {
            push(startLine, 'choice-shape', `${prefix} choice index ${k} is not an object`);
            continue;
          }
          if (!c.text || typeof c.text !== 'string' || !c.text.trim()) {
            push(startLine, 'choice-shape', `${prefix} choice ${c.id || `#${k}`} has empty text`);
          }
        }
        if (choices.length === 4 && JSON.stringify(ids) !== JSON.stringify(expected)) {
          push(startLine, 'choice-ids',
            `${prefix} choice ids must be A,B,C,D in order (got ${ids.join(',') || '∅'})`);
        }
      }

      // Rule 1b — Fill-in items have correctAnswer set
      if (q.type === 'fill-in') {
        if (q.correctAnswer === undefined || q.correctAnswer === null
          || (typeof q.correctAnswer === 'string' && q.correctAnswer.trim() === '')) {
          push(startLine, 'fill-answer', `${prefix} fill-in missing correctAnswer`);
        }
      }

      // Rule 4 — correctAnswer letter is one of the actual choices (MC only)
      if (q.type === 'multiple-choice') {
        const choices = q.choices || [];
        const ids = new Set(choices.map(c => (c && c.id) || ''));
        if (!q.correctAnswer || !ids.has(q.correctAnswer)) {
          push(startLine, 'answer-orphan',
            `${prefix} correctAnswer "${q.correctAnswer}" is not one of the choice ids [${[...ids].join(',')}]`);
        }
      }

      // Rule 2 — band field present and in 1..7
      const band = q.band;
      if (band === undefined || band === null) {
        push(startLine, 'band-missing', `${prefix} missing 'band' field (rubric requires 1-7)`);
      } else if (!Number.isInteger(band) || band < LINT_BAND_MIN || band > LINT_BAND_MAX) {
        push(startLine, 'band-range',
          `${prefix} band=${JSON.stringify(band)} must be integer in ${LINT_BAND_MIN}-${LINT_BAND_MAX}`);
      }

      // Rule 3 — LaTeX delimiters
      const latexFields = [
        ['question', q.question],
        ['explanation', q.explanation],
      ];
      if (q.choices) {
        q.choices.forEach((c, k) => {
          latexFields.push([`choice ${c && c.id || k}`, c && c.text]);
        });
      }
      for (const [field, text] of latexFields) {
        const bad = findBadLatexDelimiters(text);
        if (bad.length) {
          push(startLine, 'latex-delim',
            `${prefix} ${field} uses forbidden LaTeX delimiter ${bad.join(', ')} — use $...$ / $$...$$`);
        }
      }

      // Rule 5 — Explanation opens with **SAT Pattern: ...** and contains **Choice X is correct.**
      const exp = q.explanation || '';
      if (!exp.startsWith('**SAT Pattern:')) {
        push(startLine, 'explanation-pattern-opener',
          `${prefix} explanation must open with "**SAT Pattern: ..."`);
      }
      const patternName = extractPatternName(exp);
      // Pattern-name registry check (advisory, but treated as a violation per rubric §8).
      if (patternName && !APPROVED_PATTERN_NAMES.has(patternName)) {
        push(startLine, 'pattern-name-registry',
          `${prefix} pattern name "${patternName}" not in approved registry (see CB_AUTHENTICITY_RUBRIC.md §5)`);
      }
      if (q.type === 'multiple-choice') {
        // Must contain "**Choice X is correct.**" with X being a single letter.
        if (!/\*\*Choice\s+[A-D]\s+is correct\.\*\*/.test(exp)) {
          push(startLine, 'explanation-choice-correct',
            `${prefix} explanation must contain "**Choice X is correct.**" (X = A-D)`);
        }
      }

      // Rule 6 — Each distractor (non-correct MC choice) has a `// distractor: ` comment
      // OR a `misconception:` field. We allow either convention.
      if (q.type === 'multiple-choice') {
        const choices = q.choices || [];
        const correctId = q.correctAnswer;
        const distractorCount = choices.filter(c => c && c.id !== correctId).length;
        const hasMisconception = choices.some(c => c && c.misconception);
        const commentsInRange = distractorCommentCounts[`${mi}-${qi + 1}`] || 0;
        // Pass if EITHER every distractor has a misconception field OR the
        // source has at least one `// distractor:` comment per distractor.
        const allHaveMisconceptionField = choices
          .filter(c => c && c.id !== correctId)
          .every(c => typeof c.misconception === 'string' && c.misconception.trim());
        if (!allHaveMisconceptionField && commentsInRange < distractorCount) {
          push(startLine, 'distractor-annotation',
            `${prefix} ${distractorCount} distractor(s) but only ${commentsInRange} '// distractor:' comment(s) and no 'misconception' fields — annotate each distractor with its misconception`);
        }
      }

      // Rule 7 — Uniqueness gate vs cached QBank stems
      const stem = (q.question || '').toString();
      if (stem.trim()) {
        const stemTokens = tokenize(stem);
        const u = matchAgainstIndex(new Set(stemTokens), trigrams(stemTokens), qbankIndex);
        if (!u.pass) {
          push(startLine, 'uniqueness',
            `${prefix} stem too close to QBank item ${u.closestId} (jaccard=${u.jaccard}, 3-gram=${u.ngramOverlap}; thresholds ${JACCARD_THRESHOLD} / ${NGRAM_THRESHOLD})`);
        }
      }

      // Rule 8 — Uniqueness gate vs PT 4-11 PDF corpus (stem + joined choices + sliding-window explanation).
      // Only runs when a pdfCorpus is supplied; the QBank rule above is mandatory.
      if (pdfCorpus && pdfCorpus.length) {
        // 8a — stem
        if (stem.trim()) {
          const stemTokens = tokenize(stem);
          if (stemTokens.length >= MIN_TOKENS_FOR_CHECK) {
            const u = matchAgainstIndex(new Set(stemTokens), trigrams(stemTokens), pdfCorpus);
            if (!u.pass) {
              push(startLine, 'pdf-uniqueness-stem',
                `${prefix} stem too close to PT4-11 ${u.closestId} (jaccard=${u.jaccard}, 3-gram=${u.ngramOverlap}; thresholds ${JACCARD_THRESHOLD} / ${NGRAM_THRESHOLD})`);
            }
          }
        }
        // 8b — joined answer choices (catches whole-block copy of all 4 choices)
        if (q.type === 'multiple-choice' && Array.isArray(q.choices)) {
          const joined = q.choices.map(c => (c && c.text) || '').join(' ');
          const cTokens = tokenize(joined);
          if (cTokens.length >= MIN_TOKENS_FOR_CHECK) {
            const u = matchAgainstIndex(new Set(cTokens), trigrams(cTokens), pdfCorpus);
            if (!u.pass) {
              push(startLine, 'pdf-uniqueness-choices',
                `${prefix} answer choices too close to PT4-11 ${u.closestId} (jaccard=${u.jaccard}, 3-gram=${u.ngramOverlap}; thresholds ${JACCARD_THRESHOLD} / ${NGRAM_THRESHOLD})`);
            }
          }
        }
        // 8c — explanation, sliding-window worst-case
        const exp = q.explanation || '';
        if (exp.trim()) {
          const u = checkUniquenessSliding(exp, pdfCorpus);
          if (!u.pass) {
            push(startLine, 'pdf-uniqueness-explanation',
              `${prefix} explanation window (token offset ${u.authoredOffset}) too close to PT4-11 ${u.closestId} (jaccard=${u.jaccard}, 3-gram=${u.ngramOverlap}; thresholds ${JACCARD_THRESHOLD} / ${NGRAM_THRESHOLD})`);
          }
        }
      }
    });
  });

  return { file, violations };
}

/**
 * Run lint mode for a list of test numbers and print violations to stdout.
 * Returns the total violation count.
 */
export function runLint({ testNumbers }) {
  const qbank = loadQBank();
  const qbankItems = qbank.items || {};
  // PT 4-11 PDF corpus is required by default — bootstrap is a one-line script.
  // SKIP_PDF_LINT=1 lets CI/dev opt out if the PDFs aren't available locally.
  let pdfCorpus = null;
  if (!process.env.SKIP_PDF_LINT) {
    try {
      pdfCorpus = loadPdfCorpus();
      console.log(`PT 4-11 PDF corpus: ${pdfCorpus.length} sliding windows indexed`);
    } catch (e) {
      console.error(`PDF lint corpus unavailable: ${e.message}`);
      console.error(`(set SKIP_PDF_LINT=1 to bypass; PDF rules will be skipped)`);
      return { total: 1, byCategory: { 'pdf-corpus-missing': 1 } };
    }
  }
  let total = 0;
  const byCategory = {};
  for (const testN of testNumbers) {
    let report;
    try {
      report = lintPracticeTest({ testN, qbankItems, pdfCorpus });
    } catch (e) {
      console.error(`practiceTest${testN}.js: lint failed: ${e.message}`);
      total++;
      byCategory['load-error'] = (byCategory['load-error'] || 0) + 1;
      continue;
    }
    for (const v of report.violations) {
      console.log(`${report.file}:${v.line} violation: ${v.message}`);
      byCategory[v.rule] = (byCategory[v.rule] || 0) + 1;
      total++;
    }
  }
  console.log('');
  console.log(`Lint summary: ${total} violation(s) across ${testNumbers.length} test(s)`);
  if (total > 0) {
    const cats = Object.entries(byCategory).sort((a, b) => b[1] - a[1]);
    for (const [rule, count] of cats) {
      console.log(`  ${rule}: ${count}`);
    }
  }
  return { total, byCategory };
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
    if (opts.mode === 'lint') {
      const { total } = runLint(opts);
      process.exit(total > 0 ? 1 : 0);
    } else {
      runCalibration(opts);
    }
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}
