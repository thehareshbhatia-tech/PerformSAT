#!/usr/bin/env bun
/**
 * sampleForInterRater.mjs — sample 50 test items for blind tagging.
 *
 * Deterministic sample (seed=42) so the audit is reproducible. Outputs only
 * the question + correct answer + (HIDDEN) ground-truth pattern in a separate
 * answer-key file. The blind file shows just the stem; the rater (me) writes
 * a guess; then we compare.
 *
 * Stratified to ensure coverage:
 *   - 5 from each of the 10 main-test bundles (50 total), randomly per test.
 *   - Skip M2Easy variants (M2Easy is a difficulty variant, not main-test).
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, 'audit-output');

const inv = JSON.parse(
  await fs.readFile(path.join(OUT_DIR, 'inventory.json'), 'utf8'),
);

// Deterministic RNG (Mulberry32, seed=42)
function rng(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = rng(42);

// Test items only, with non-null pattern
const testItems = inv.items.filter((x) => x.source === 'test' && x.patternAliased);

// Group by test
const byTest = new Map();
for (const it of testItems) {
  if (!byTest.has(it.test)) byTest.set(it.test, []);
  byTest.get(it.test).push(it);
}

// 5 from each test, all 10 tests
const sample = [];
for (let t = 1; t <= 10; t++) {
  const pool = byTest.get(t) || [];
  // Shuffle deterministically
  const indices = [...pool.keys()].map((i) => ({ i, r: rand() }));
  indices.sort((a, b) => a.r - b.r);
  for (let k = 0; k < 5 && k < pool.length; k++) {
    sample.push(pool[indices[k].i]);
  }
}

// We need the full question stem + choices + correctAnswer.
// inventory.json only has stemPreview. Re-read the actual files.
import { pathToFileURL } from 'node:url';
const REPO_ROOT = path.resolve(__dirname, '..');

async function loadTestItemsWithFullDetail() {
  const all = [];
  for (let i = 1; i <= 12; i++) {
    const url = pathToFileURL(
      path.join(REPO_ROOT, 'src/data/practiceTests', `practiceTest${i}.js`),
    ).href;
    const mod = await import(url);
    const test = mod[`practiceTest${i}`];
    if (!Array.isArray(test?.modules)) continue;
    test.modules.forEach((m, idx) => {
      if (!m?.questions) return;
      for (const q of m.questions) {
        all.push({ ...q, _test: i, _module: idx === 0 ? 'module1' : 'module2' });
      }
    });
  }
  return all;
}

const full = await loadTestItemsWithFullDetail();
const fullById = new Map();
for (const it of full) fullById.set(`${it._test}-${it._module}-${it.id}`, it);

// Build blind sample (no pattern) + answer key (with pattern)
const blind = [];
const answerKey = [];
for (const s of sample) {
  // sample items came from inventory.json which keyed by raw id. Re-find by
  // (test, module, id) since multiple tests share ids like "1", "2".
  const key = `${s.test}-${s.module}-${s.id}`;
  const f = fullById.get(key);
  if (!f) continue;
  blind.push({
    sampleId: `s${blind.length + 1}`,
    test: s.test,
    module: s.module,
    itemId: s.id,
    stem: f.question,
    choices: f.choices,
    correctAnswer: f.correctAnswer,
    domain: s.domain,
    // Skills and ssr are NOT shown to blind rater — only what student sees
  });
  answerKey.push({
    sampleId: `s${answerKey.length + 1}`,
    test: s.test,
    module: s.module,
    itemId: s.id,
    groundTruthPatternRaw: s.patternRaw,
    groundTruthPatternSlug: s.patternSlug,
    groundTruthPatternAliased: s.patternAliased,
    skills: s.skills,
    sourceStyleRef: s.sourceStyleRef,
  });
}

await fs.writeFile(
  path.join(OUT_DIR, 'inter-rater-blind.json'),
  JSON.stringify(blind, null, 2),
);
await fs.writeFile(
  path.join(OUT_DIR, 'inter-rater-answer-key.json'),
  JSON.stringify(answerKey, null, 2),
);

console.log(`Wrote ${blind.length} samples to inter-rater-blind.json + answer-key.json`);
