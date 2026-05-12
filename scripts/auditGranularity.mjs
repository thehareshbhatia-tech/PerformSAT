#!/usr/bin/env bun
/**
 * auditGranularity.mjs — flag sourceStyleRefs that span multiple SAT Patterns.
 *
 * Input:  scripts/audit-output/inventory.json
 * Output: scripts/audit-output/granularity-flags.json
 *
 * Heuristic:
 *   - Group BANK items by sourceStyleRef.
 *   - For each ssr, count unique aliased patterns.
 *   - Flag ssrs with >=2 patterns where the smaller-count pattern has >=3 items
 *     (real volume on both sides, not a one-off mistag).
 *   - Severity: HIGH if both buckets >=5; MED if smaller >=3 and <5; LOW <3.
 *
 * Limitations:
 *   - Doesn't read into the items to judge whether the split is pedagogically
 *     correct. That's the human review step.
 *   - sourceStyleRef itself is a content-author tag; mistags there inflate this
 *     audit. Flagged items should be visually-reviewed.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, 'audit-output');

const inv = JSON.parse(
  await fs.readFile(path.join(OUT_DIR, 'inventory.json'), 'utf8'),
);

// Group bank items by sourceStyleRef
const bySsr = new Map();
for (const it of inv.items) {
  if (it.source !== 'bank') continue;
  if (!it.sourceStyleRef || !it.patternAliased) continue;
  if (!bySsr.has(it.sourceStyleRef)) bySsr.set(it.sourceStyleRef, []);
  bySsr.get(it.sourceStyleRef).push(it);
}

const flags = [];
for (const [ssr, items] of bySsr) {
  const patternCounts = new Map();
  for (const it of items) {
    patternCounts.set(
      it.patternAliased,
      (patternCounts.get(it.patternAliased) || 0) + 1,
    );
  }
  if (patternCounts.size < 2) continue;
  const sorted = [...patternCounts.entries()].sort((a, b) => b[1] - a[1]);
  const [top, ...rest] = sorted;
  const smallestSignificant = rest.filter((r) => r[1] >= 3);
  if (!smallestSignificant.length) continue;

  // Severity
  const smallest = sorted[sorted.length - 1];
  let severity = 'LOW';
  if (top[1] >= 5 && smallest[1] >= 5) severity = 'HIGH';
  else if (smallest[1] >= 3) severity = 'MED';

  flags.push({
    sourceStyleRef: ssr,
    totalItems: items.length,
    distinctPatterns: patternCounts.size,
    patterns: sorted.map(([p, n]) => ({ pattern: p, count: n })),
    severity,
    sampleItemIds: items.slice(0, 6).map((x) => x.id),
  });
}

flags.sort((a, b) => {
  const order = { HIGH: 0, MED: 1, LOW: 2 };
  return (
    order[a.severity] - order[b.severity] ||
    b.distinctPatterns - a.distinctPatterns ||
    b.totalItems - a.totalItems
  );
});

const summary = {
  flaggedSsrs: flags.length,
  byseverity: {
    HIGH: flags.filter((f) => f.severity === 'HIGH').length,
    MED: flags.filter((f) => f.severity === 'MED').length,
    LOW: flags.filter((f) => f.severity === 'LOW').length,
  },
};

await fs.writeFile(
  path.join(OUT_DIR, 'granularity-flags.json'),
  JSON.stringify({ summary, flags }, null, 2),
);

console.log('Granularity audit:');
console.log(JSON.stringify(summary, null, 2));
console.log('\nTop 15 flags:');
for (const f of flags.slice(0, 15)) {
  console.log(
    `  [${f.severity}] ${f.sourceStyleRef} (${f.totalItems} items, ${f.distinctPatterns} patterns)`,
  );
  for (const p of f.patterns) console.log(`     - ${p.pattern}: ${p.count}`);
}
