#!/usr/bin/env bun
/**
 * auditSatPatterns.mjs — SAT Pattern inventory + 4-dimension audit.
 *
 * Loads the 4 bank shards + 12 main-test bundles, extracts every item's
 * SAT Pattern (mirroring production extractSatPattern.js + PATTERN_ALIASES),
 * and produces:
 *
 *   scripts/audit-output/inventory.json          — raw structured items
 *   scripts/audit-output/granularity-flags.json  — flagged sourceStyleRefs
 *   scripts/audit-output/long-tail.json          — 1-7x patterns + alias candidates
 *   scripts/audit-output/inter-rater-sample.json — 50 items for blind tagging
 *
 * Run: bun scripts/auditSatPatterns.mjs
 *
 * Math-only (R&W deliberately excluded; R&W routes by skill not pattern).
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(__dirname, 'audit-output');

// Mirror src/data/questions/extractSatPattern.js
const SAT_PATTERN_RE = /\*\*SAT Pattern:\s*([^*]+?)\s*\*\*/;

// Mirror the PATTERN_ALIASES map exactly. Kept in sync at audit time;
// reload from disk to detect drift.
async function loadPatternAliases() {
  const src = await fs.readFile(
    path.join(REPO_ROOT, 'src/data/questions/extractSatPattern.js'),
    'utf8',
  );
  // Pull the Object.freeze({...}) block. Parse the kv pairs by regex
  // since the block uses string literals.
  const block = src.match(/Object\.freeze\(\{([\s\S]*?)\}\)/);
  if (!block) throw new Error('PATTERN_ALIASES block not found');
  const aliases = {};
  const kvRe = /'([^']+)'\s*:\s*'([^']+)'/g;
  let m;
  while ((m = kvRe.exec(block[1])) !== null) {
    aliases[m[1]] = m[2];
  }
  return aliases;
}

function kebab(title) {
  return title
    .toLowerCase()
    .replace(/[–—]/g, ' ') // en-dash, em-dash → space
    .replace(/[/\\]/g, ' ') // slash → space
    .replace(/[^a-z0-9]+/g, '-') // non-alphanum → hyphen
    .replace(/^-+|-+$/g, '');
}

function extractPattern(explanation, aliases) {
  if (typeof explanation !== 'string') return { rawTitle: null, slug: null, aliased: null };
  const m = explanation.match(SAT_PATTERN_RE);
  if (!m) return { rawTitle: null, slug: null, aliased: null };
  const rawTitle = m[1].trim();
  const slug = kebab(rawTitle);
  const aliased = aliases[slug] || slug;
  return { rawTitle, slug, aliased };
}

async function loadBankShards() {
  const shards = ['algebra', 'problemSolving', 'advancedMath', 'geometry'];
  const items = [];
  for (const s of shards) {
    const url = pathToFileURL(
      path.join(REPO_ROOT, 'src/data/questions/bank', `${s}.js`),
    ).href;
    const mod = await import(url);
    const exportName = `${s}Bank`;
    const arr = mod[exportName];
    if (!Array.isArray(arr)) throw new Error(`${exportName} not array`);
    for (const it of arr) items.push({ ...it, _source: 'bank', _shard: s });
  }
  return items;
}

async function loadMainTests() {
  const items = [];
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
        items.push({
          ...q,
          _source: 'test',
          _test: i,
          _module: idx === 0 ? 'module1' : 'module2',
        });
      }
    });
  }
  return items;
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  console.log('Loading PATTERN_ALIASES...');
  const aliases = await loadPatternAliases();
  console.log(`  ${Object.keys(aliases).length} alias entries`);

  console.log('Loading bank shards...');
  const bank = await loadBankShards();
  console.log(`  ${bank.length} bank items`);

  console.log('Loading main-test bundles...');
  const tests = await loadMainTests();
  console.log(`  ${tests.length} main-test items`);

  const all = [...bank, ...tests];
  const enriched = all.map((it) => {
    const { rawTitle, slug, aliased } = extractPattern(it.explanation, aliases);
    return {
      id: it.id,
      source: it._source,
      shard: it._shard ?? null,
      test: it._test ?? null,
      module: it._module ?? null,
      domain: it.domain ?? null,
      skills: it.skills ?? [],
      sourceStyleRef: it.sourceStyleRef ?? null,
      difficulty: it.difficulty ?? null,
      type: it.type ?? null,
      patternRaw: rawTitle,
      patternSlug: slug,
      patternAliased: aliased,
      // First 300 chars of stem for inter-rater sample (avoid bloating JSON
      // with huge passages)
      stemPreview:
        typeof it.question === 'string'
          ? it.question.slice(0, 300)
          : null,
      correctAnswer: it.correctAnswer ?? null,
      // Save full explanation for inter-rater context (just for sampled items
      // later; not for all)
    };
  });

  // Coverage stats
  const byPatternBank = new Map();
  const byPatternTest = new Map();
  for (const it of enriched) {
    if (!it.patternAliased) continue;
    const map = it.source === 'bank' ? byPatternBank : byPatternTest;
    map.set(it.patternAliased, (map.get(it.patternAliased) || 0) + 1);
  }

  // Tier-1 viability: patterns with bank pool >= 8
  const TIER1_THRESHOLD = 8;
  const tier1Patterns = new Set();
  for (const [p, n] of byPatternBank) if (n >= TIER1_THRESHOLD) tier1Patterns.add(p);

  let tier1TestCoverage = 0;
  let totalTestItems = 0;
  for (const it of enriched) {
    if (it.source !== 'test') continue;
    totalTestItems++;
    if (it.patternAliased && tier1Patterns.has(it.patternAliased)) tier1TestCoverage++;
  }

  const summary = {
    timestamp: new Date().toISOString(),
    counts: {
      bankItems: bank.length,
      testItems: tests.length,
      uniquePatternsBankRaw: new Set(
        enriched.filter((x) => x.source === 'bank' && x.patternSlug).map((x) => x.patternSlug),
      ).size,
      uniquePatternsBankAliased: byPatternBank.size,
      uniquePatternsTestRaw: new Set(
        enriched.filter((x) => x.source === 'test' && x.patternSlug).map((x) => x.patternSlug),
      ).size,
      uniquePatternsTestAliased: byPatternTest.size,
      tier1PatternsCount: tier1Patterns.size,
      aliasEntries: Object.keys(aliases).length,
    },
    tier1Coverage: {
      mainTestItemsCovered: tier1TestCoverage,
      mainTestItemsTotal: totalTestItems,
      percent: (tier1TestCoverage / totalTestItems) * 100,
    },
  };

  await fs.writeFile(
    path.join(OUT_DIR, 'inventory.json'),
    JSON.stringify({ summary, items: enriched }, null, 2),
  );

  await fs.writeFile(
    path.join(OUT_DIR, 'pattern-counts.json'),
    JSON.stringify(
      {
        bank: Object.fromEntries(
          [...byPatternBank.entries()].sort((a, b) => b[1] - a[1]),
        ),
        test: Object.fromEntries(
          [...byPatternTest.entries()].sort((a, b) => b[1] - a[1]),
        ),
      },
      null,
      2,
    ),
  );

  console.log('\nSUMMARY:');
  console.log(JSON.stringify(summary, null, 2));
  console.log(`\nWrote ${OUT_DIR}/inventory.json + pattern-counts.json`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
