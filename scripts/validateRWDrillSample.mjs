#!/usr/bin/env node
/**
 * R&W Drill Render-Sample Validator
 *
 * Pulls a small random sample of items via the R&W drill dispatcher and
 * asserts each is renderable end-to-end:
 *   - has a non-empty passage
 *   - has a non-empty question stem
 *   - has 2+ choices, each with id and text
 *   - has a correctAnswer that exists among the choice IDs
 *   - has a non-empty explanation
 *   - has a `section: 'rw'` tag
 *   - has the namespaced ID prefix `rw-test*-*`
 *
 * Catches regressions where a typo in the flattening loop ("forgot to copy
 * `passage`") leaks empty drills into production. Per /autoplan Phase 1 M9
 * + Phase 3 T7. Runs fast (no LLM calls) — good for CI.
 *
 * Usage: `node scripts/validateRWDrillSample.mjs [--count=20] [--seed=N]`
 */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// Parse args
const args = Object.fromEntries(
  process.argv.slice(2).map(a => {
    const m = a.match(/^--([^=]+)(?:=(.*))?$/);
    return m ? [m[1], m[2] ?? true] : [a, true];
  })
);
const COUNT = Number(args.count) || 20;
const SEED = args.seed ? Number(args.seed) : null;

// Seeded RNG so reruns can be reproduced when chasing a bug.
function seededRandom(seed) {
  let s = Math.abs(seed) || 1;
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}
const rng = SEED !== null ? seededRandom(SEED) : Math.random;

// CRA's webpack lets `import './foo'` resolve `foo.js` automatically. Node ESM
// doesn't — restore the extension via a custom loader so we can import the
// app's modules directly without bundling.
import { register } from 'node:module';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';
const HOOK_SRC = `
export async function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith('.') && !specifier.endsWith('.js') && !specifier.endsWith('.mjs') && !specifier.endsWith('.json')) {
    try { return await nextResolve(specifier + '.js', context); } catch {}
    try { return await nextResolve(specifier + '/index.js', context); } catch {}
  }
  return nextResolve(specifier, context);
}
`;
// Write the hook to an OS temp dir so the validator doesn't litter the repo.
const HOOK_DIR = mkdtempSync(path.join(tmpdir(), 'rw-validate-'));
const HOOK_PATH = path.join(HOOK_DIR, 'hook.mjs');
writeFileSync(HOOK_PATH, HOOK_SRC);
register(pathToFileURL(HOOK_PATH));

const m = await import(path.join(ROOT, 'src/data/questions/rwBank/index.js'));
const {
  rwQuestionBank,
  RW_CANONICAL_SKILLS,
  RW_DOMAINS,
  getTargetedWeaknessSet,
  getBankStats,
} = m;

let errors = [];
let checked = 0;

const fail = (label, msg) => errors.push(`${label}: ${msg}`);

// Sanity: bank loaded
if (!Array.isArray(rwQuestionBank) || rwQuestionBank.length === 0) {
  console.error('FAIL: rwQuestionBank is empty or missing');
  process.exit(1);
}

console.log(`Loaded R&W drill bank: ${rwQuestionBank.length} items`);
const stats = getBankStats();
console.log(`  Domains: ${Object.keys(stats.byDomain).join(', ')}`);
console.log(`  Skills:  ${Object.keys(stats.bySkill).length} canonical`);
console.log(`  Tests:   ${Object.keys(stats.bySourceTest).length}`);
console.log(`  By difficulty:`, stats.byDifficulty);
console.log('');

// 1. Random direct sample
const shuffled = [...rwQuestionBank];
for (let i = shuffled.length - 1; i > 0; i--) {
  const j = Math.floor(rng() * (i + 1));
  [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
}
const sample = shuffled.slice(0, COUNT);

// R&W items use 3 different content shapes:
//   - Standard: `passage: string`
//   - Cross-text connections: `passages: Array<{label, text}>`
//   - Rhetorical synthesis: `studentNotes: {intro, bullets, goal}`
// Validate the field that matches the item's skill.
const hasReadableContent = (q) => {
  if (q.skill === 'cross-text-connections') {
    return Array.isArray(q.passages)
      && q.passages.length >= 2
      && q.passages.every(p => p?.text && typeof p.text === 'string');
  }
  if (q.skill === 'rhetorical-synthesis') {
    return q.studentNotes
      && typeof q.studentNotes === 'object'
      && Array.isArray(q.studentNotes.bullets)
      && q.studentNotes.bullets.length > 0
      && typeof q.studentNotes.goal === 'string';
  }
  return q.passage && typeof q.passage === 'string';
};

const validateOne = (q, label) => {
  if (!q || typeof q !== 'object') return fail(label, 'item is not an object');
  if (!q.id || typeof q.id !== 'string') return fail(label, `bad id (${q.id})`);
  if (!q.id.startsWith('rw-')) return fail(label, `id missing rw- prefix: ${q.id}`);
  if (q.section !== 'rw') return fail(label, `section is ${q.section} (expected 'rw')`);
  if (!hasReadableContent(q)) {
    return fail(label, `missing readable content for skill=${q.skill} (expected passage / passages / studentNotes)`);
  }
  if (!q.question || typeof q.question !== 'string') return fail(label, 'missing or empty question');
  if (!Array.isArray(q.choices) || q.choices.length < 2) return fail(label, `bad choices array (${q.choices?.length})`);
  for (const c of q.choices) {
    if (!c.id || !c.text) return fail(label, `bad choice ${JSON.stringify(c)}`);
  }
  if (!q.correctAnswer) return fail(label, 'missing correctAnswer');
  if (!q.choices.some(c => c.id === q.correctAnswer)) {
    return fail(label, `correctAnswer ${q.correctAnswer} not in choices`);
  }
  if (!q.explanation || typeof q.explanation !== 'string' || q.explanation.length < 30) {
    return fail(label, `explanation too short (${q.explanation?.length ?? 0} chars)`);
  }
  if (!RW_CANONICAL_SKILLS.includes(q.skill)) return fail(label, `non-canonical skill ${q.skill}`);
  if (!RW_DOMAINS.includes(q.domain)) return fail(label, `non-canonical domain ${q.domain}`);
};

for (const q of sample) {
  validateOne(q, `direct ${q.id}`);
  checked++;
}

// 2. Dispatcher sample — pull via getTargetedWeaknessSet for one weakness per
// canonical skill. Catches issues with the alias map, dispatcher fallbacks,
// and difficulty mix logic.
for (const skillId of RW_CANONICAL_SKILLS) {
  const items = getTargetedWeaknessSet({
    weakSkills: [{ skillId, domain: undefined }],
    count: 3,
  });
  if (items.length === 0) {
    fail(`dispatcher[${skillId}]`, 'returned 0 items (skill has no questions in bank)');
    continue;
  }
  for (const q of items) {
    validateOne(q, `dispatcher[${skillId}] ${q.id}`);
    if (q.skill !== skillId) {
      fail(`dispatcher[${skillId}]`, `returned skill ${q.skill}`);
    }
    checked++;
  }
}

// 3. Difficulty mix sanity — verify that requesting a specific difficulty
// returns items at that difficulty.
for (const diff of ['easy', 'medium', 'hard']) {
  const items = getTargetedWeaknessSet({
    weakSkills: [{ skillId: 'words-in-context' }],
    difficultyMix: { [diff]: 1.0, ...(diff !== 'easy' ? { easy: 0 } : {}), ...(diff !== 'medium' ? { medium: 0 } : {}), ...(diff !== 'hard' ? { hard: 0 } : {}) },
    count: 3,
  });
  if (items.length === 0) continue; // ok — that skill may not have items at that difficulty
  for (const q of items) {
    if (q.difficulty !== diff) {
      fail(`difficulty[${diff}]`, `returned ${q.difficulty} item ${q.id}`);
    }
    checked++;
  }
}

// 4. Exclusion sanity — verify excludeIds is honored.
const exclusion = sample.slice(0, 5).map(q => q.id);
const excluded = getTargetedWeaknessSet({
  weakSkills: [{ skillId: 'words-in-context' }],
  excludeIds: exclusion,
  count: 50,
});
for (const q of excluded) {
  if (exclusion.includes(q.id)) {
    fail('exclusion', `${q.id} should have been excluded`);
  }
  checked++;
}

console.log(`Checked ${checked} items.`);
if (errors.length > 0) {
  console.error(`\nFAIL: ${errors.length} errors`);
  errors.slice(0, 50).forEach(e => console.error('  - ' + e));
  if (errors.length > 50) console.error(`  ... and ${errors.length - 50} more`);
  process.exit(1);
} else {
  console.log('\nAll R&W drill render-sample checks passed.');
}
