#!/usr/bin/env bun
/**
 * gradeBankAuthenticity.mjs — codex-graded SAT-authenticity audit of bank items.
 *
 * Scores each target bank item against the 5-dimension CB authenticity rubric
 * (docs/CB_AUTHENTICITY_RUBRIC.md + docs/calibration_set/methodology.md):
 *
 *   1. Stem clarity      (1-5)
 *   2. Distractor quality (1-5)
 *   3. Notation polish   (1-5)
 *   4. Difficulty calibration (1-5)
 *   5. Overall CB-grade  (1-5)
 *
 * Each item is graded with 2-3 real CB QBank items on the same skill as anchors,
 * so the rater has a calibration reference. The codex output is structured JSON
 * (one score per dimension + one-line reason for any dim ≤ 3).
 *
 * Output: scripts/generated/bank-quality-scores.jsonl (one item per line).
 *
 * Run:
 *   bun scripts/gradeBankAuthenticity.mjs --ids=bank-alg-298,bank-alg-300
 *   bun scripts/gradeBankAuthenticity.mjs --sample=10                # random 10 from this-session rewrites
 *   bun scripts/gradeBankAuthenticity.mjs --skill=combining-like-terms
 *
 * Requires: codex CLI authenticated with ChatGPT account.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { spawn } from 'node:child_process';

const REPO_ROOT = '/Users/hareshbhatia/PerformSAT';
const BANK_DIR = path.join(REPO_ROOT, 'src/data/questions/bank');
const QBANK_PATH = path.join(REPO_ROOT, 'scripts/generated/cbEducatorQBank.json');
const OUTPUT_PATH = path.join(REPO_ROOT, 'scripts/generated/bank-quality-scores.jsonl');

// Skill → CB skill_desc mapping. Each bank skill maps to one or more
// College Board skill categories. Items whose skills all miss this map
// get SKIP'd by the grader for lack of anchors. The set of CB categories
// is fixed (see cbEducatorQBank.json). Keep this map in sync with
// scripts/calibrateModule.mjs::SKILL_TO_CB.
const SKILL_TO_CB = {
  // Linear equations in one variable
  'combining-like-terms': ['Linear equations in one variable'],
  'distributive-property': ['Linear equations in one variable', 'Equivalent expressions'],
  'absolute-value': ['Linear equations in one variable'],
  'infinite-solutions-condition': ['Linear equations in one variable', 'Equivalent expressions'],

  // Linear equations in two variables
  'perpendicular-negative-reciprocal': ['Linear equations in two variables'],
  'writing-parallel-equation': ['Linear equations in two variables'],
  'writing-perpendicular-equation': ['Linear equations in two variables'],
  'parallel-line-slope': ['Linear equations in two variables'],
  'slope-intercept-form': ['Linear equations in two variables', 'Linear functions'],
  'slope-from-points': ['Linear equations in two variables', 'Linear functions'],
  'table-to-equation': ['Linear equations in two variables', 'Linear functions'],
  'word-problem-to-equation': ['Linear equations in one variable', 'Linear equations in two variables'],

  // Linear functions
  'function-notation': ['Linear functions'],
  'function-evaluation': ['Linear functions', 'Nonlinear functions'],
  'finding-function-from-conditions': ['Linear functions', 'Nonlinear functions'],

  // Systems of two linear equations in two variables
  'system-solution-types': ['Systems of two linear equations in two variables'],
  'elimination-method': ['Systems of two linear equations in two variables'],
  'setting-up-systems': ['Systems of two linear equations in two variables'],
  'substitution-method': ['Systems of two linear equations in two variables'],
  'graphing-systems': ['Systems of two linear equations in two variables'],

  // Equivalent expressions
  'quadratic-factoring': ['Equivalent expressions', 'Nonlinear equations in one variable and systems of equations in two variables'],
  'converting-quadratic-forms': ['Equivalent expressions'],
  'roots-from-factors': ['Equivalent expressions'],
  'exponent-laws': ['Equivalent expressions'],
  'difference-of-squares': ['Equivalent expressions'],
  'perfect-square-trinomial': ['Equivalent expressions'],
  'simplifying-rational-expressions': ['Equivalent expressions'],
  'comparing-exponentials': ['Equivalent expressions', 'Nonlinear functions'],
  'domain-restrictions': ['Equivalent expressions', 'Nonlinear functions'],
  'zero-negative-exponents': ['Equivalent expressions'],
  'finding-roots-factoring': ['Equivalent expressions', 'Nonlinear equations in one variable and systems of equations in two variables'],
  'identify-quadratic': ['Equivalent expressions', 'Nonlinear functions'],

  // Nonlinear equations in one variable and systems
  'discriminant-analysis': ['Nonlinear equations in one variable and systems of equations in two variables', 'Equivalent expressions'],
  'vertex-formula': ['Nonlinear equations in one variable and systems of equations in two variables', 'Nonlinear functions'],

  // Nonlinear functions
  'function-composition': ['Nonlinear functions'],
  'exponential-growth-decay': ['Nonlinear functions'],
  'function-transformations': ['Nonlinear functions'],
  'exponential-y-intercept': ['Nonlinear functions'],
  'vertex-form': ['Nonlinear functions', 'Equivalent expressions'],
  'parabola-direction': ['Nonlinear functions', 'Equivalent expressions'],

  // Circles
  'circle-equation': ['Circles'],
  'tangent-lines': ['Circles'],
  'circle-area': ['Circles', 'Area and volume'],
  'circle-parts': ['Circles'],
  'completing-square-circles': ['Circles', 'Equivalent expressions'],
  'circumference': ['Circles'],
  'sector-area': ['Circles'],
  'arc-length': ['Circles'],

  // Right triangles and trigonometry
  'soh-cah-toa': ['Right triangles and trigonometry'],
  'pythagorean-theorem': ['Right triangles and trigonometry'],
  'special-right-triangles': ['Right triangles and trigonometry'],
  'degrees-to-radians': ['Right triangles and trigonometry'],
  'radians-to-degrees': ['Right triangles and trigonometry'],
  'radian-measure-understanding': ['Right triangles and trigonometry'],

  // Area and volume
  'triangle-area': ['Area and volume'],
  'volume-prism': ['Area and volume'],
  'volume-pyramid-cone': ['Area and volume'],
  'volume-sphere': ['Area and volume'],
  'volume-scaling': ['Area and volume'],
  'squared-cubed-units': ['Area and volume', 'Ratios, rates, proportional relationships, and units'],

  // Lines, angles, and triangles
  'triangle-angle-sum': ['Lines, angles, and triangles'],
  'triangle-inequality': ['Lines, angles, and triangles'],
  'triangle-types': ['Lines, angles, and triangles'],
  'similar-triangles': ['Lines, angles, and triangles', 'Right triangles and trigonometry'],

  // Probability and conditional probability
  'probability-basics': ['Probability and conditional probability'],
  'conditional-probability': ['Probability and conditional probability'],
  'two-way-table': ['Probability and conditional probability'],

  // One-variable data
  'calculate-mean': ['One-variable data: Distributions and measures of center and spread'],
  'find-median': ['One-variable data: Distributions and measures of center and spread'],
  'find-mode': ['One-variable data: Distributions and measures of center and spread'],
  'range-calculation': ['One-variable data: Distributions and measures of center and spread'],
  'standard-deviation-concept': ['One-variable data: Distributions and measures of center and spread'],
  'weighted-mean': ['One-variable data: Distributions and measures of center and spread'],

  // Percentages
  'percent-of-value': ['Percentages'],
  'percent-change': ['Percentages'],
  'percent-decimal-conversion': ['Percentages'],
  'percent-word-problems': ['Percentages'],
  'successive-percent-change': ['Percentages'],

  // Ratios, rates, proportional relationships, and units
  'unit-conversion': ['Ratios, rates, proportional relationships, and units'],
  'rate-conversion': ['Ratios, rates, proportional relationships, and units'],

  // Margin of error / Inference from sample statistics
  'margin-of-error': ['Inference from sample statistics and margin of error'],
};

// CLI parsing
function parseArgs() {
  const args = process.argv.slice(2);
  const idsArg = args.find(a => a.startsWith('--ids='));
  const sampleArg = args.find(a => a.startsWith('--sample='));
  const skillArg = args.find(a => a.startsWith('--skill='));
  const seedArg = args.find(a => a.startsWith('--seed='));
  const ids = idsArg ? idsArg.split('=')[1].split(',') : null;
  const sampleCount = sampleArg ? parseInt(sampleArg.split('=')[1], 10) : null;
  const skill = skillArg ? skillArg.split('=')[1] : null;
  // `--seed=N` is reproducible; omit for a time-based seed (default).
  const seed = seedArg ? parseInt(seedArg.split('=')[1], 10) : Date.now() & 0x7fffffff;
  return { ids, sampleCount, skill, seed };
}

async function loadBank() {
  const shards = ['algebra', 'advancedMath', 'geometry', 'problemSolving'];
  const items = [];
  for (const shard of shards) {
    const url = pathToFileURL(path.join(BANK_DIR, `${shard}.js`)).href;
    const mod = await import(url + '?t=' + Date.now());
    const arr = Object.values(mod).find(Array.isArray) || mod.default;
    for (const item of arr) items.push({ ...item, _shard: shard });
  }
  return items;
}

async function loadQBank() {
  const json = JSON.parse(await fs.readFile(QBANK_PATH, 'utf8'));
  // Index by CB skill, return list of {id, stem, choices, correctAnswer, rationale, band, difficulty}
  const bySkill = {};
  for (const [id, item] of Object.entries(json.items || {})) {
    if (!item.skill || item.type !== 'mcq' || !item.stemPlain) continue;
    // Reject MathSpeak-residue items
    if (/StartFraction|EndFraction|left parenthesis|right parenthesis/i.test(item.stemPlain)) continue;
    if (!bySkill[item.skill]) bySkill[item.skill] = [];
    bySkill[item.skill].push({
      id,
      stem: item.stemPlain,
      choices: (item.answerOptions || []).map(o => o.contentPlain),
      correctAnswer: (item.correctKeys || [])[0],
      rationale: item.rationalePlain || '',
      band: item.scoreBandRangeCd,
      difficulty: item.difficulty,
    });
  }
  return bySkill;
}

// Convert MathSpeak-style bracket math to inline TeX
function cleanCBStem(stem) {
  // [...] math → $...$
  // CB stems use [...] for math; convert to $$
  return stem.replace(/\[([^\]]+)\]/g, (_, m) => '$' + m + '$');
}

// Pick 2-3 anchor items per bank item
function pickAnchors(item, qbankBySkill) {
  const cbSkills = (item.skills || []).flatMap(s => SKILL_TO_CB[s] || []);
  const targetDiff = item.difficulty === 'easy' ? 'E' : item.difficulty === 'medium' ? 'M' : 'H';
  const allAnchors = [];
  for (const skill of cbSkills) {
    const candidates = qbankBySkill[skill] || [];
    // Prefer items at the same difficulty
    const sameDiff = candidates.filter(c => c.difficulty === targetDiff);
    const otherDiff = candidates.filter(c => c.difficulty !== targetDiff);
    allAnchors.push(...sameDiff.slice(0, 2));
    allAnchors.push(...otherDiff.slice(0, 1));
  }
  return allAnchors.slice(0, 3);
}

function buildPrompt(item, anchors) {
  const itemBlock = `=== TARGET ITEM (PerformSAT bank-id: ${item.id}, difficulty: ${item.difficulty}) ===

Stem: ${item.question}

${(item.choices || []).length ? 'Choices:\n' + item.choices.map(c => `  ${c.id}) ${c.text}`).join('\n') : `Correct answer (fill-in): ${item.correctAnswer}`}

${item.choices ? 'Correct answer: ' + item.correctAnswer : ''}

Explanation:
${item.explanation}
`;

  const anchorBlocks = anchors.map((a, i) => `=== ANCHOR ${i + 1} (CB QBank, difficulty: ${a.difficulty}, band: ${a.band}) ===

Stem: ${cleanCBStem(a.stem)}

Choices:
${a.choices.map((c, idx) => `  ${String.fromCharCode(65 + idx)}) ${c}`).join('\n')}

Rationale: ${a.rationale.slice(0, 600)}
`).join('\n');

  return `You are an SAT authoring rater. Your job is to rate a PerformSAT-bank item against the College Board (CB) authenticity rubric.

CB AUTHENTICITY RUBRIC (5 dimensions, each 1-5):

1. STEM CLARITY — does the question read crisply?
   5 = indistinguishable from a CB stem (economical, unambiguous, period-precise)
   4 = reads well, matches CB style with at most a minor quibble
   3 = clear intent but a phrase is verbose or non-idiomatic for SAT style
   2 = comprehensible but awkward
   1 = unparseable on first read

2. DISTRACTOR QUALITY — do distractors map to specific misconceptions?
   5 = each distractor nails a different real-world student error pattern
   4 = all three map to distinct misconceptions with clear derivations
   3 = all three map to plausible errors but two are the same misconception
   2 = one distractor is plausible; others are noise
   1 = two or more distractors are random with no plausible derivation
   (N/A for fill-in items — score 5)

3. NOTATION POLISH — LaTeX correctness, units, spacing
   5 = pixel-perfect: variables auto-italic via \\$x\\$, units roman via \\\\text{cm}, no entity leaks
   4 = notation correct; minor typographical preferences differ
   3 = mostly correct; minor inconsistencies
   2 = one notation problem (units in math mode, % not in math mode)
   1 = mixed delimiters, bare HTML entities, or MathSpeak residue

4. DIFFICULTY CALIBRATION — does it feel like its claimed band (easy=band-3, medium=band-5, hard=band-7 TOP)?
   5 = top-of-band (easy at band-3 ceiling, medium at band-5, hard at band-7)
   4 = solidly mid-bucket
   3 = right bucket but bottom-of-band
   2 = off by one band in the wrong direction
   1 = off by two bands

5. OVERALL CB-GRADE — would the STEM, CHOICES, AND DISTRACTOR DESIGN look indistinguishable from a real CB item?
   5 = stem voice, choice form, and distractor misconceptions all match CB
   4 = reads as CB-grade in stem and choices; minor distractor or notation quibble
   3 = stem/choices/distractors plausible but feel off (wrong voice or wrong distractor misconception archetype)
   2 = perceptibly different stem voice or distractor design (feels like a textbook/state-test/workbook problem)
   1 = stem voice or distractor design obviously not CB

IMPORTANT: When rating Overall CB-grade, focus ONLY on the stem, choices, and the
4-misconception distractor analysis. DO NOT penalize the explanation for being
PerformSAT-formatted (Fast Way / Full Solution / Why-tempting / Test Day Takeaway) —
that template is the deliberate target per the PerformSAT authenticity rubric.
A CB-grade item has stem + choices indistinguishable from CB; the explanation can
be in any consistent format.

For comparison, here are 2-3 ACTUAL CB items on the same skill. Rate the target's
STEM and CHOICES against these CB items. Compare the CB rationale to the target's
explanation only to verify the distractor MISCONCEPTIONS match — not the tone.

${anchorBlocks}

${itemBlock}

Output ONLY a JSON object on a single line with these keys:
{ "id": "${item.id}", "stem_clarity": N, "distractor_quality": N, "notation_polish": N, "difficulty_calibration": N, "overall_cb_grade": N, "weakness_notes": "..." }

Where:
- Each N is an integer 1-5.
- weakness_notes is one short sentence (<60 chars) naming the single biggest weakness. Empty string if all dims are 4 or 5.

Output NOTHING ELSE. No markdown, no preamble, no explanation, no closing remarks. Just the JSON object on one line.`;
}

function runCodex(prompt) {
  return new Promise((resolve, reject) => {
    // Use --output-schema for structured JSON, --ephemeral for clean session,
    // and pipe the prompt via stdin to avoid argument-length limits.
    const schemaPath = path.join(REPO_ROOT, 'scripts/generated/bank-grader-schema.json');
    const proc = spawn('codex', [
      'exec',
      '--ephemeral',
      '--skip-git-repo-check',
      '-s', 'read-only',
      '--output-schema', schemaPath,
    ], { cwd: REPO_ROOT });
    let stdout = '';
    let stderr = '';
    proc.stdout.on('data', d => { stdout += d; });
    proc.stderr.on('data', d => { stderr += d; });
    proc.on('close', code => {
      if (code !== 0) return reject(new Error(`codex exited ${code}\nstderr:\n${stderr.slice(-500)}\nstdout:\n${stdout.slice(-500)}`));
      resolve(stdout);
    });
    proc.on('error', reject);
    proc.stdin.write(prompt);
    proc.stdin.end();
  });
}

function extractJson(output) {
  // codex output includes meta noise (session id, tokens used, etc.) and the
  // final JSON. Find the last well-formed JSON object containing "id".
  // Match a balanced { ... } using a permissive scan.
  // Strategy: find every `{` and try to parse forward to the matching `}`.
  const candidates = [];
  for (let i = 0; i < output.length; i++) {
    if (output[i] !== '{') continue;
    let depth = 0, inStr = false, esc = false;
    for (let j = i; j < output.length; j++) {
      const c = output[j];
      if (esc) { esc = false; continue; }
      if (c === '\\') { esc = true; continue; }
      if (c === '"') { inStr = !inStr; continue; }
      if (inStr) continue;
      if (c === '{') depth++;
      else if (c === '}') {
        depth--;
        if (depth === 0) {
          const snippet = output.slice(i, j + 1);
          if (snippet.includes('"id"') && snippet.includes('overall_cb_grade')) {
            try {
              const parsed = JSON.parse(snippet);
              if (parsed.id && parsed.overall_cb_grade !== undefined) candidates.push(parsed);
            } catch {}
          }
          break;
        }
      }
    }
  }
  return candidates.length > 0 ? candidates[candidates.length - 1] : null;
}

async function main() {
  const { ids, sampleCount, skill, seed } = parseArgs();
  const bank = await loadBank();
  const qbankBySkill = await loadQBank();

  let targets = bank;
  if (ids) {
    const idSet = new Set(ids);
    targets = bank.filter(i => idSet.has(i.id));
  } else if (skill) {
    targets = bank.filter(i => (i.skills || []).includes(skill));
  } else if (sampleCount) {
    // Fisher-Yates shuffle with a seedable LCG. The previous
    // implementation used `sort((a, b) => rand() - 0.5)`, which is a
    // biased shuffle (some permutations are over-represented) and
    // hard-coded seed=42, so consecutive `--sample=N` runs returned
    // the same items by coincidence of seed.
    const rand = (() => { let s = seed; return () => (s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff; })();
    const shuffled = [...bank];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    targets = shuffled.slice(0, sampleCount);
    console.log(`(seed=${seed} — pass --seed=${seed} to reproduce this sample)`);
  } else {
    console.log('Usage: --ids=... | --sample=N | --skill=...');
    process.exit(1);
  }

  console.log(`Grading ${targets.length} items...`);
  console.log('');

  const outStream = await fs.open(OUTPUT_PATH, 'w');
  for (const item of targets) {
    const anchors = pickAnchors(item, qbankBySkill);
    if (anchors.length === 0) {
      console.log(`SKIP ${item.id}: no CB anchors for skill ${item.skills?.join(',')}`);
      continue;
    }
    const prompt = buildPrompt(item, anchors);
    process.stdout.write(`Grading ${item.id} (${anchors.length} anchors)... `);
    try {
      const output = await runCodex(prompt);
      const parsed = extractJson(output);
      if (!parsed) {
        console.log(`PARSE-FAIL (raw: ${output.slice(0, 200)}...)`);
        continue;
      }
      await outStream.write(JSON.stringify({ ...parsed, _skill: item.skills?.[0], _difficulty: item.difficulty, _shard: item._shard }) + '\n');
      const avg = ((parsed.stem_clarity + parsed.distractor_quality + parsed.notation_polish + parsed.difficulty_calibration + parsed.overall_cb_grade) / 5).toFixed(1);
      console.log(`avg=${avg} overall=${parsed.overall_cb_grade} ${parsed.weakness_notes || ''}`);
    } catch (e) {
      console.log(`ERROR: ${e.message.slice(0, 100)}`);
    }
  }
  await outStream.close();
  console.log('');
  console.log(`Wrote ${OUTPUT_PATH}`);
}

main().catch(e => { console.error(e); process.exit(1); });
