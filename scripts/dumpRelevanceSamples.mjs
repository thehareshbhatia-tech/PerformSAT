#!/usr/bin/env bun
/**
 * dumpRelevanceSamples.mjs — for each top-10 Tier-1 pattern, dump 2 test items
 * + 3 bank items side-by-side for pedagogical comparison.
 *
 * Output: scripts/audit-output/relevance-samples.json (and a markdown table
 * scripts/audit-output/relevance-samples.md)
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, 'audit-output');
const REPO_ROOT = path.resolve(__dirname, '..');

const inv = JSON.parse(
  await fs.readFile(path.join(OUT_DIR, 'inventory.json'), 'utf8'),
);

// Build pattern → test count
const testPatternCount = new Map();
for (const it of inv.items) {
  if (it.source !== 'test' || !it.patternAliased) continue;
  testPatternCount.set(
    it.patternAliased,
    (testPatternCount.get(it.patternAliased) || 0) + 1,
  );
}

// Tier-1 patterns
const bankPatternCount = new Map();
for (const it of inv.items) {
  if (it.source !== 'bank' || !it.patternAliased) continue;
  bankPatternCount.set(
    it.patternAliased,
    (bankPatternCount.get(it.patternAliased) || 0) + 1,
  );
}
const tier1 = new Set(
  [...bankPatternCount.entries()].filter(([, n]) => n >= 8).map(([p]) => p),
);

// Top 10 patterns by test occurrence among Tier-1
const top10 = [...testPatternCount.entries()]
  .filter(([p]) => tier1.has(p))
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10);

console.log('Top 10 Tier-1 patterns by test occurrence:');
for (const [p, n] of top10) {
  console.log(`  ${p}: ${n} test items, ${bankPatternCount.get(p)} bank items`);
}

// For each, dump 2 test items + 3 bank items with their FULL explanations.
// We need to re-load the original files to get full explanations (inventory.json
// has only stemPreview to keep size manageable).

async function loadFullItems() {
  const all = [];
  const bankShards = ['algebra', 'problemSolving', 'advancedMath', 'geometry'];
  for (const s of bankShards) {
    const url = pathToFileURL(
      path.join(REPO_ROOT, 'src/data/questions/bank', `${s}.js`),
    ).href;
    const mod = await import(url);
    for (const it of mod[`${s}Bank`]) all.push({ ...it, _source: 'bank', _shard: s });
  }
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
        all.push({ ...q, _source: 'test', _test: i, _module: idx === 0 ? 'module1' : 'module2' });
      }
    });
  }
  return all;
}

function kebab(t) {
  return t
    .toLowerCase()
    .replace(/[–—]/g, ' ')
    .replace(/[/\\]/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function loadAliases() {
  const src = await fs.readFile(
    path.join(REPO_ROOT, 'src/data/questions/extractSatPattern.js'),
    'utf8',
  );
  const block = src.match(/Object\.freeze\(\{([\s\S]*?)\}\)/);
  const aliases = {};
  const kvRe = /'([^']+)'\s*:\s*'([^']+)'/g;
  let m;
  while ((m = kvRe.exec(block[1])) !== null) aliases[m[1]] = m[2];
  return aliases;
}

const aliases = await loadAliases();
const SAT_PATTERN_RE = /\*\*SAT Pattern:\s*([^*]+?)\s*\*\*/;
function patternOf(it) {
  const m = (it.explanation || '').match(SAT_PATTERN_RE);
  if (!m) return null;
  const slug = kebab(m[1].trim());
  return aliases[slug] || slug;
}

const all = await loadFullItems();

const samples = {};
for (const [pattern, count] of top10) {
  const testItems = all.filter((x) => x._source === 'test' && patternOf(x) === pattern).slice(0, 2);
  const bankItems = all.filter((x) => x._source === 'bank' && patternOf(x) === pattern).slice(0, 3);
  samples[pattern] = {
    testCount: count,
    bankCount: bankPatternCount.get(pattern),
    testItems: testItems.map((x) => ({
      id: x.id,
      test: x._test,
      module: x._module,
      stem: x.question,
      choices: x.choices,
      correctAnswer: x.correctAnswer,
      explanation: x.explanation,
      skills: x.skills,
      sourceStyleRef: x.sourceStyleRef,
    })),
    bankItems: bankItems.map((x) => ({
      id: x.id,
      stem: x.question,
      choices: x.choices,
      correctAnswer: x.correctAnswer,
      explanation: x.explanation,
      skills: x.skills,
      sourceStyleRef: x.sourceStyleRef,
    })),
  };
}

await fs.writeFile(
  path.join(OUT_DIR, 'relevance-samples.json'),
  JSON.stringify(samples, null, 2),
);
console.log(`\nWrote ${OUT_DIR}/relevance-samples.json`);
