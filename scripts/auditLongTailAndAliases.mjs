#!/usr/bin/env bun
/**
 * auditLongTailAndAliases.mjs — find alias candidates + characterize long tail.
 *
 * Strategy:
 *   1. Long tail = test-bundle patterns appearing 1-7 times, NOT covered by an
 *      existing alias, NOT a Tier-1 pattern.
 *   2. For each long-tail pattern, find the closest Tier-1 pattern by:
 *      a. Shared sourceStyleRef in the bank.
 *      b. Token-overlap on the pattern slug itself.
 *   3. Score: STRONG (same ssr + tokens overlap), MEDIUM (one of the two),
 *      WEAK (heuristic only).
 *
 * Strong candidates are the highest-leverage new PATTERN_ALIASES entries:
 * one line in extractSatPattern.js gains 1-7 test items of Tier-1 coverage.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, 'audit-output');

const inv = JSON.parse(
  await fs.readFile(path.join(OUT_DIR, 'inventory.json'), 'utf8'),
);

// Build bank pattern stats
const bankPatternCount = new Map();
const bankPatternToSsrs = new Map();
for (const it of inv.items) {
  if (it.source !== 'bank' || !it.patternAliased) continue;
  bankPatternCount.set(
    it.patternAliased,
    (bankPatternCount.get(it.patternAliased) || 0) + 1,
  );
  if (it.sourceStyleRef) {
    if (!bankPatternToSsrs.has(it.patternAliased)) bankPatternToSsrs.set(it.patternAliased, new Set());
    bankPatternToSsrs.get(it.patternAliased).add(it.sourceStyleRef);
  }
}

// Test pattern stats — count per pattern
const testPatternCount = new Map();
const testPatternSamples = new Map();
for (const it of inv.items) {
  if (it.source !== 'test' || !it.patternAliased) continue;
  testPatternCount.set(
    it.patternAliased,
    (testPatternCount.get(it.patternAliased) || 0) + 1,
  );
  if (!testPatternSamples.has(it.patternAliased)) testPatternSamples.set(it.patternAliased, []);
  if (testPatternSamples.get(it.patternAliased).length < 2) {
    testPatternSamples.get(it.patternAliased).push({
      id: it.id,
      test: it.test,
      module: it.module,
      stem: it.stemPreview,
    });
  }
}

const TIER1_THRESHOLD = 8;
const tier1 = new Set(
  [...bankPatternCount.entries()]
    .filter(([, n]) => n >= TIER1_THRESHOLD)
    .map(([p]) => p),
);

// Long tail = test patterns that are NOT Tier-1
const longTail = [];
for (const [p, n] of testPatternCount) {
  if (tier1.has(p)) continue;
  const bankCount = bankPatternCount.get(p) || 0;
  longTail.push({
    pattern: p,
    testCount: n,
    bankCount,
    tier1: false,
    samples: testPatternSamples.get(p),
  });
}

// For each long-tail pattern, find closest Tier-1 candidate
function tokens(slug) {
  return new Set(slug.split('-').filter((t) => t.length > 2));
}

function tokenOverlap(a, b) {
  const ta = tokens(a);
  const tb = tokens(b);
  let shared = 0;
  for (const t of ta) if (tb.has(t)) shared++;
  return shared / Math.max(ta.size, tb.size, 1);
}

const tier1Arr = [...tier1];
for (const lt of longTail) {
  let bestScore = 0;
  let bestPattern = null;
  let bestSsrMatch = false;
  const ltSsrs = bankPatternToSsrs.get(lt.pattern) || new Set();

  for (const t1 of tier1Arr) {
    const overlap = tokenOverlap(lt.pattern, t1);
    const t1Ssrs = bankPatternToSsrs.get(t1) || new Set();
    const ssrShared = [...ltSsrs].some((s) => t1Ssrs.has(s));
    const score = (ssrShared ? 0.5 : 0) + overlap * 0.5;
    if (score > bestScore) {
      bestScore = score;
      bestPattern = t1;
      bestSsrMatch = ssrShared;
    }
  }

  lt.aliasCandidate = bestPattern;
  lt.candidateScore = +bestScore.toFixed(3);
  lt.ssrMatch = bestSsrMatch;
  let conf = 'WEAK';
  if (bestScore >= 0.7) conf = 'STRONG';
  else if (bestScore >= 0.4) conf = 'MEDIUM';
  lt.confidence = conf;
}

longTail.sort((a, b) => {
  const order = { STRONG: 0, MEDIUM: 1, WEAK: 2 };
  return order[a.confidence] - order[b.confidence] || b.testCount - a.testCount;
});

const summary = {
  totalLongTailPatterns: longTail.length,
  testItemsInLongTail: longTail.reduce((a, b) => a + b.testCount, 0),
  byConfidence: {
    STRONG: longTail.filter((x) => x.confidence === 'STRONG').length,
    MEDIUM: longTail.filter((x) => x.confidence === 'MEDIUM').length,
    WEAK: longTail.filter((x) => x.confidence === 'WEAK').length,
  },
  potentialCoverageLift: {
    fromStrong: longTail
      .filter((x) => x.confidence === 'STRONG')
      .reduce((a, b) => a + b.testCount, 0),
    fromStrongPlusMedium: longTail
      .filter((x) => ['STRONG', 'MEDIUM'].includes(x.confidence))
      .reduce((a, b) => a + b.testCount, 0),
  },
};

await fs.writeFile(
  path.join(OUT_DIR, 'long-tail.json'),
  JSON.stringify({ summary, longTail }, null, 2),
);

console.log('Long-tail audit:');
console.log(JSON.stringify(summary, null, 2));
console.log('\nTop 20 STRONG alias candidates:');
let printed = 0;
for (const lt of longTail) {
  if (lt.confidence !== 'STRONG') continue;
  if (printed++ >= 20) break;
  console.log(
    `  ${lt.pattern} (${lt.testCount}x in tests) → alias to "${lt.aliasCandidate}" (score ${lt.candidateScore}${lt.ssrMatch ? ', ssrMatch' : ''})`,
  );
}
console.log('\nTop 10 MEDIUM candidates:');
printed = 0;
for (const lt of longTail) {
  if (lt.confidence !== 'MEDIUM') continue;
  if (printed++ >= 10) break;
  console.log(
    `  ${lt.pattern} (${lt.testCount}x) → "${lt.aliasCandidate}" (score ${lt.candidateScore})`,
  );
}
console.log('\nWeak/no candidate (sample of 10):');
printed = 0;
for (const lt of longTail) {
  if (lt.confidence !== 'WEAK') continue;
  if (printed++ >= 10) break;
  console.log(`  ${lt.pattern} (${lt.testCount}x in tests)`);
}
