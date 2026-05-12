#!/usr/bin/env bun
/**
 * tightenDistractors.mjs — replace hand-wavy distractor bullets with
 * derived misconception paths in 9 items I authored this session.
 *
 * Each entry targets a specific bank item by id, finds the item's block in
 * the source (from `{ id: 'bank-XXX',` through the matching `createdAt: ...`
 * closing brace), and applies a within-item find/replace.
 *
 * This avoids cross-item collisions when multiple items share the same
 * weak bullet text (e.g., "* C: arithmetic slip.").
 *
 * Run:
 *   bun scripts/rewrites/tightenDistractors.mjs --dry
 *   bun scripts/rewrites/tightenDistractors.mjs
 */

import { promises as fs } from 'node:fs';

const FILES = {
  algebra: '/Users/hareshbhatia/PerformSAT/src/data/questions/bank/algebra.js',
  advancedMath: '/Users/hareshbhatia/PerformSAT/src/data/questions/bank/advancedMath.js',
  geometry: '/Users/hareshbhatia/PerformSAT/src/data/questions/bank/geometry.js',
  problemSolving: '/Users/hareshbhatia/PerformSAT/src/data/questions/bank/problemSolving.js',
};

// Each entry: { id, shard, edits: [{ find, replace }] }
// Edits are applied within the slice from the item's `{ id:` to its `createdAt: ...,`.
const ITEM_EDITS = [
  {
    id: 'bank-alg-324', shard: 'algebra',
    edits: [{
      find: '* B: extends the table by $+1$ per step (wrong increment).\\n* C: returns the output.\\n* D: arithmetic slip.',
      replace: '* B ($8$): rounds $29/4 = 7.25$ up to $8$ — divides the target output by the slope but forgets to subtract the intercept first.\\n* C ($29$): returns the target output value itself — confuses input with output.\\n* D ($12$): reports the change in output between the last table row and the target ($29 - 17 = 12$) — confuses the change with the input value.',
    }],
  },
  {
    id: 'bank-alg-332', shard: 'algebra',
    edits: [
      {
        find: "choices: [{ id: 'A', text: '$9$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$15$' }]",
        replace: "choices: [{ id: 'A', text: '$9$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$405$' }]",
      },
      {
        find: '* B: rounds up incorrectly.\\n* C: arithmetic slip.\\n* D: subtracts the wrong amount ($485 - 45 = 440 \\\\div 45 \\\\approx 9.8$, not exact, may confuse to $15$ as next round number).',
        replace: '* B ($10$): forgets the one-time insurance fee — divides total by monthly rate directly: $485/45 \\\\approx 10.78$, rounds down.\\n* C ($11$): forgets the fee and rounds up: $485/45$ rounds to $11$.\\n* D ($405$): reports the rent subtotal ($45 \\\\cdot 9 = 405$) instead of the months — the stops-one-step-early trap.',
      },
    ],
  },
  {
    id: 'bank-alg-336', shard: 'algebra',
    edits: [{
      find: '* B: ignores the $+15$ offset ($147/6 \\\\approx 24.5 \\\\to 25$).\\n* C: divides total by $5$ instead of $6$ (miscounts terms).\\n* D: arithmetic slip.',
      replace: '* B ($25$): ignores the $+15$ offset — divides the total directly by $6$: $147/6 \\\\approx 24.5$, rounds to $25$.\\n* C ($30$): miscounts the $x$-coefficient — divides $147$ by $5$ (treating large as just $s$, not $s + 15$): $147/5 = 29.4 \\\\to 30$.\\n* D ($33$): divides only the offset-adjusted total ($147 - 15 = 132$) by $4$ (the medium-shirt coefficient alone) instead of by $6$.',
    }],
  },
  {
    id: 'bank-alg-341', shard: 'algebra',
    edits: [{
      find: '* B: gives the afternoon count.\\n* C: assumes half-half split.\\n* D: arithmetic slip.',
      replace: '* B ($10$): solves for afternoon hours instead of morning ($30 - 20 = 10$) — solved correctly but reports the wrong variable.\\n* C ($15$): assumes a half-half split ($30/2 = 15$) without using the earnings constraint — ignores the wage difference.\\n* D ($25$): swaps which rate is morning vs afternoon — uses $18m + 12(30 - m) = 420$ which gives $m = 25$.',
    }],
  },
  {
    id: 'bank-am-190', shard: 'advancedMath',
    edits: [{
      find: '* B: sign error.\\n* C: adds the given root to the sum ($5 + 8$).\\n* D: sign error on the wrong-formula answer.',
      replace: '* B ($-3$): negates the correct answer — applies the sign rule incorrectly during the final subtraction $8 - 5 = 3 \\\\to -3$.\\n* C ($13$): adds the given root to the sum of roots ($5 + 8 = 13$) — wrong operation, addition instead of subtraction.\\n* D ($-13$): negated Choice C — both directional errors stacked.',
    }],
  },
  {
    id: 'bank-am-198', shard: 'advancedMath',
    edits: [{
      find: "* B: base as percent.\\n* C: confuses with the denominator.\\n* D: roughly the per-year rate (not what's asked).",
      replace: '* B ($85\\\\%$): reports the multiplier $0.85$ in percent form — confuses MULTIPLIER (what remains) with DECAY rate (what is lost).\\n* C ($5\\\\%$): copies the exponent denominator ($5$, in years) as if it were a percent — number vs percent confusion.\\n* D ($3\\\\%$): estimates per-year rate by dividing $15\\\\%/5 = 3\\\\%$ — answers the per-year question instead of the per-$5$-year question that was asked.',
    }],
  },
  {
    id: 'bank-geo-179', shard: 'geometry',
    edits: [{
      find: '* B: $4/3$ — slope of the radius direction (perpendicular to tangent), not the tangent itself.\\n* C: $3/4$ — flipped ratio.\\n* D: random.',
      replace: '* B ($4/3$): slope of the line from origin to circle center is $3/4$ (rise/run from $(0,0)$ to $(4,3)$); $4/3$ inverts this — tangent and radius are perpendicular, but the student inverted the relationship without negating.\\n* C ($3/4$): reports the slope of the radius line itself (from origin to center) — describes the line connecting two reference points, not the tangent line.\\n* D ($1/3$): mis-uses the radius value ($3$) as a denominator — confuses the radius (which appears in the distance equation) with a slope.',
    }],
  },
  {
    id: 'bank-ps-221', shard: 'problemSolving',
    edits: [{
      find: '* B: the supporter count (not complement).\\n* C: the raw complement percent.\\n* D: the given percent.',
      replace: '* B ($459$): reports the SUPPORTER count ($0.54 \\\\cdot 850 = 459$) — answers the opposite question.\\n* C ($46$): reports the raw complement percent ($100 - 54 = 46$) as the count — number vs percent confusion.\\n* D ($54$): reports the GIVEN support percent ($54$) as the count — copies a stem number without applying it.',
    }],
  },
  {
    id: 'bank-ps-223', shard: 'problemSolving',
    edits: [{
      find: '* B: the MC fraction as a percent (not the complement).\\n* C: assumes equal split.\\n* D: random.',
      replace: '* B ($37.5\\\\%$): converts the MC fraction $3/8$ to percent and reports it — answers the MC group, not the fill-in group.\\n* C ($50\\\\%$): assumes an equal split between MC and fill-in without using the given fraction.\\n* D ($75\\\\%$): uses $3/4$ instead of $3/8$ as the MC fraction — drops a factor of $2$ when interpreting the fraction.',
    }],
  },
];

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry');

  // Group by file
  const byFile = new Map();
  for (const item of ITEM_EDITS) {
    if (!byFile.has(item.shard)) byFile.set(item.shard, []);
    byFile.get(item.shard).push(item);
  }

  let totalApplied = 0;
  let totalSkipped = 0;

  for (const [fileKey, items] of byFile) {
    const filePath = FILES[fileKey];
    let src = await fs.readFile(filePath, 'utf8');
    let editsThisFile = 0;

    for (const item of items) {
      // Locate the item's slice
      const startIdx = src.indexOf(`{ id: '${item.id}',`);
      if (startIdx === -1) {
        console.log(`SKIP ${item.id}: id not found`);
        totalSkipped++;
        continue;
      }
      // Find end of item: the next `createdAt: '...' },` AFTER startIdx
      // Look for the pattern "createdAt: '...'" followed by " }," (within ~3500 chars)
      const itemBlockEnd = (() => {
        let pos = startIdx + 100;
        while (pos < startIdx + 4000 && pos < src.length) {
          const candidate = src.indexOf("createdAt:", pos);
          if (candidate === -1) return -1;
          // Verify the next chars are like `'2026-XX-XX' },` (close of item)
          const after = src.slice(candidate, candidate + 100);
          const m = after.match(/^createdAt:\s*'[\d-]+'\s*\},?/);
          if (m) return candidate + m[0].length;
          pos = candidate + 1;
        }
        return -1;
      })();
      if (itemBlockEnd === -1) {
        console.log(`SKIP ${item.id}: item end not found`);
        totalSkipped++;
        continue;
      }

      // Apply each edit within this slice
      const sliceBefore = src.slice(0, startIdx);
      let slice = src.slice(startIdx, itemBlockEnd);
      const sliceAfter = src.slice(itemBlockEnd);

      for (const edit of item.edits) {
        if (!slice.includes(edit.find)) {
          console.log(`SKIP ${item.id}: edit anchor not found — ${edit.find.slice(0, 70)}...`);
          totalSkipped++;
          continue;
        }
        const occ = slice.split(edit.find).length - 1;
        if (occ > 1) {
          console.log(`SKIP ${item.id}: ambiguous within item (${occ}× match)`);
          totalSkipped++;
          continue;
        }
        // Use a function callback to bypass JS replace's `$'`/`$&` token interpretation.
        // Bank items contain `$...$` math notation; string-replacement values would mangle.
        slice = slice.replace(edit.find, () => edit.replace);
        console.log(`OK   ${item.id}: ${edit.find.slice(0, 60)}...`);
        editsThisFile++;
      }

      src = sliceBefore + slice + sliceAfter;
    }

    if (!dryRun && editsThisFile > 0) {
      await fs.writeFile(filePath, src);
    }
    totalApplied += editsThisFile;
  }

  console.log('');
  console.log(`${dryRun ? '[DRY] ' : ''}${totalApplied} edits applied, ${totalSkipped} skipped.`);
}

main().catch(e => { console.error(e); process.exit(1); });
