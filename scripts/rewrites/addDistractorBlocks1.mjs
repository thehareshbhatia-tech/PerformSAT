#!/usr/bin/env bun
/**
 * addDistractorBlocks1.mjs — add "Why the wrong answers are tempting" blocks
 * to 32 high-impact MC items that are missing them.
 *
 * These items have decent stems, **Choice X is correct.** markers, and Fast
 * Way explanations — they just lack the 4-bullet distractor analysis block
 * the CB authenticity rubric requires.
 *
 * Strategy: for each item, the script inserts a custom-authored
 * "**Why the wrong answers are tempting:**" block immediately before the
 * existing "**Test Day Takeaway:**" line.
 *
 * Pools covered (8 sourceStyleRefs, 32 items):
 *   perpendicular-slope (4)
 *   parallel-line-through-a-point (3)
 *   matching-coefficients (4)
 *   parallel-lines-no-solution (4)
 *   same-line-infinitely-many-solutions (4)
 *   identifying-identity-contradiction-equations (4)
 *   circle-in-standard-form (4, geometry)
 *   distance-from-center-as-radius (4, geometry)
 *   parallel-line-through-a-point (extra: 1 more)
 *
 * Run:
 *   bun scripts/rewrites/addDistractorBlocks1.mjs --dry
 *   bun scripts/rewrites/addDistractorBlocks1.mjs
 */

import { promises as fs } from 'node:fs';

const FILES = {
  algebra: '/Users/hareshbhatia/PerformSAT/src/data/questions/bank/algebra.js',
  geometry: '/Users/hareshbhatia/PerformSAT/src/data/questions/bank/geometry.js',
};

// Each entry: { id, shard, block } — block is the multi-bullet distractor analysis,
// inserted before the "**Test Day Takeaway:**" anchor in the existing explanation.
const ENTRIES = [
  // ───── perpendicular-slope (4 items) ─────
  {
    id: 'bank-alg-217', shard: 'algebra',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($1/4$): reciprocates but FORGETS TO NEGATE — gives $1/m$ instead of $-1/m$.\\n* Choice C ($-4$): negates but FORGETS TO FLIP — gives $-m$ instead of $-1/m$.\\n* Choice D ($4$): returns the original slope unchanged — describes a PARALLEL line, not perpendicular.\\n\\n",
  },
  {
    id: 'bank-alg-219', shard: 'algebra',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($-2/5$): returns the slope of line $p$ itself — describes the SAME line, not perpendicular.\\n* Choice C ($-5/2$): flips but FORGETS to negate the result — drops a sign change.\\n* Choice D ($2/5$): negates the slope of $p$ but FORGETS to take the reciprocal — describes a different (non-perpendicular) line.\\n\\n",
  },
  {
    id: 'bank-alg-221', shard: 'algebra',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($-1/6$): reciprocates but FORGETS to negate — gives $1/m$ where $m = -6$, then keeps the original sign.\\n* Choice C ($6$): negates the original $-6$ but does NOT reciprocate — describes a line that mirrors across the $x$-axis.\\n* Choice D ($-6$): returns the original slope unchanged — describes a PARALLEL line.\\n\\n",
  },
  {
    id: 'bank-alg-223', shard: 'algebra',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($1/m$): reciprocates but FORGETS the negative sign.\\n* Choice C ($-m$): negates but FORGETS to reciprocate.\\n* Choice D ($m$): returns the original slope — describes a parallel line.\\n\\n",
  },

  // ───── parallel-line-through-a-point (3 items, +1 from later) ─────
  {
    id: 'bank-alg-225', shard: 'algebra',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($y = -3x - 2$): uses the negative of the slope — describes a different (non-parallel) line.\\n* Choice C ($y = 5x - 2$): uses the $y$-intercept of the original line ($5$) as the slope — slope/intercept confusion.\\n* Choice D ($y = 3x + 5$): copies the original equation exactly — ignores the new point $(0, -2)$.\\n\\n",
  },
  {
    id: 'bank-alg-227', shard: 'algebra',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($1$): reports the $y$-coordinate of the given point as the intercept — confuses passing through a point with the $y$-intercept.\\n* Choice C ($5$): adds the $x$-coordinate to the $y$-coordinate ($4 + 1$) instead of solving for $b$.\\n* Choice D ($-3$): sign error — uses $+\\\\frac{1}{2}$ instead of $-\\\\frac{1}{2}$ for the slope, leading to $1 = 2 + b \\\\Rightarrow b = -1$ then mis-arithmetic.\\n\\n",
  },
  {
    id: 'bank-alg-229', shard: 'algebra',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($y = -\\\\frac{2}{3}x - 2$): flips the sign of the slope — applies the perpendicular rule instead of the parallel rule.\\n* Choice C ($y = \\\\frac{3}{2}x - 2$): swaps the slope numerator and denominator — gets the reciprocal of the correct slope.\\n* Choice D ($y = \\\\frac{2}{3}x + 3$): uses the $x$-coordinate of the point as the $y$-intercept — point/intercept confusion.\\n\\n",
  },

  // ───── matching-coefficients (4 items) ─────
  {
    id: 'bank-alg-232', shard: 'algebra',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($10$): returns the constant term ($2 \\\\cdot 5$) instead of the middle coefficient.\\n* Choice C ($5$): reports just one of the factor constants ($5$).\\n* Choice D ($2$): reports just the other factor constant ($2$).\\n\\n",
  },
  {
    id: 'bank-alg-234', shard: 'algebra',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($8$): reports just the outer-product coefficient ($2 \\\\cdot 4 = 8$) and forgets the inner product.\\n* Choice C ($3$): reports just the inner-product coefficient ($1 \\\\cdot 3 = 3$) and forgets the outer product.\\n* Choice D ($12$): returns the constant term ($3 \\\\cdot 4$) instead of the middle coefficient.\\n\\n",
  },
  {
    id: 'bank-alg-236', shard: 'algebra',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($4$): reports just $j$ alone, forgetting to add $h$.\\n* Choice C ($11$): returns the middle coefficient from the trinomial instead of $h + j$.\\n* Choice D ($5$): subtracts ($h \\\\cdot j$? or $j - h$?) instead of adding.\\n\\n",
  },
  {
    id: 'bank-alg-238', shard: 'algebra',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($13$): returns the middle coefficient of the trinomial instead of the product $ab$.\\n* Choice C ($5$): reports $a + b$ instead of $a \\\\cdot b$ (mistakes the question's operation).\\n* Choice D ($1$): divides the constant by something — possibly computes $\\\\frac{ab}{6}$.\\n\\n",
  },

  // ───── parallel-lines-no-solution (4 items) ─────
  {
    id: 'bank-alg-240', shard: 'algebra',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($2$): copies the intercept of the first equation — produces the SAME line (infinitely many solutions, not no solution).\\n* Choice C (No value works): incorrect — any $k \\\\ne 2$ produces no solution.\\n* Choice D ($3$): copies the slope into the intercept slot — slope/intercept confusion.\\n\\n",
  },
  {
    id: 'bank-alg-242', shard: 'algebra',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($3$): copies the $y$-coefficient from the first equation as the new $x$-coefficient — coefficient confusion.\\n* Choice C ($12$): copies the constant from the second equation into the slot for $c$.\\n* Choice D ($12/5$): uses the constant ratio ($12/5$) instead of the coefficient ratio (which gives the slope).\\n\\n",
  },
  {
    id: 'bank-alg-244', shard: 'algebra',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($3$): keeps the original $y$-coefficient — produces a DIFFERENT slope (a unique solution, not no solution).\\n* Choice C ($6/5$): mixes the constant ratio with the coefficient ratio.\\n* Choice D ($2$): uses the $x$-coefficient ratio's denominator as the $y$-coefficient — formula confusion.\\n\\n",
  },
  {
    id: 'bank-alg-246', shard: 'algebra',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($a = 5$): chooses the value that makes the equations IDENTICAL — infinitely many solutions, NOT no solution.\\n* Choice C ($a = 2$): uses the slope as the intercept — slope/intercept confusion.\\n* Choice D ($a > 5$): too restrictive — any $a \\\\ne 5$ works, including $a < 5$.\\n\\n",
  },

  // ───── same-line-infinitely-many-solutions (4 items) ─────
  {
    id: 'bank-alg-264', shard: 'algebra',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($9$): keeps the original constant unchanged — doesn't scale it by the same factor as the coefficients.\\n* Choice C ($4$): reports the scale factor itself instead of $4 \\\\cdot 9$.\\n* Choice D ($45$): scales by $5$ instead of $4$ — uses the coefficient sum or another wrong factor.\\n\\n",
  },
  {
    id: 'bank-alg-266', shard: 'algebra',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($15$): forgets the negative sign of the scale factor — applies $3 \\\\cdot 5$ instead of $-3 \\\\cdot 5$.\\n* Choice C ($5$): keeps the original constant unchanged.\\n* Choice D ($-5$): keeps the constant but applies just a single sign flip.\\n\\n",
  },
  {
    id: 'bank-alg-268', shard: 'algebra',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($4$): copies the $y$-coefficient from Eq2 directly — forgets to divide by the scale factor.\\n* Choice C ($10$): copies the constant from Eq2 as the new coefficient.\\n* Choice D ($1/2$): uses the reciprocal of the scale factor.\\n\\n",
  },
  {
    id: 'bank-alg-270', shard: 'algebra',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($9$): reports $b$ alone — forgets to add $a$.\\n* Choice C ($13$): adds $4 + 9$ (the Eq2 $x$-coefficient + $b$) instead of $a + b$.\\n* Choice D ($22$): doubles the sum — applies the scale factor to the final answer.\\n\\n",
  },

  // ───── identifying-identity-contradiction-equations (4 items) ─────
  {
    id: 'bank-alg-280', shard: 'algebra',
    block: "**Why the wrong answers are tempting:**\\n* Choice B: simplifies to $3x + 6 = 3x + 5$, a contradiction (no solution, not infinitely many).\\n* Choice C: $3(x + 2) = 5 \\\\Rightarrow 3x = -1 \\\\Rightarrow x = -1/3$ — has a unique solution.\\n* Choice D: $3(x + 2) = 0 \\\\Rightarrow x = -2$ — has a unique solution.\\n\\n",
  },
  {
    id: 'bank-alg-282', shard: 'algebra',
    block: "**Why the wrong answers are tempting:**\\n* Choice B: simplifies to $2x + 6 = 2x + 6$ — an IDENTITY (infinitely many solutions, NOT no solution).\\n* Choice C: $2x + 6 = 0 \\\\Rightarrow x = -3$ — has a unique solution.\\n* Choice D: $2x + 6 = x + 5 \\\\Rightarrow x = -1$ — has a unique solution.\\n\\n",
  },
  {
    id: 'bank-alg-284', shard: 'algebra',
    block: "**Why the wrong answers are tempting:**\\n* Choice B (Only $x = 0$): plugs in $0$ and verifies, but does not check that the equation holds for ALL $x$.\\n* Choice C (No real values): mistakes the identity for a contradiction — but the two sides are equal, not unequal.\\n* Choice D (Only $x = 15$): finds the value where one side equals $0$ or some special number, then mis-reads.\\n\\n",
  },
  {
    id: 'bank-alg-286', shard: 'algebra',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($13$): copies the constant from the right side as the value of $k$ — value confusion.\\n* Choice C ($2$): finds $k$ such that the equation is satisfied at a particular $x$, but no-solution requires the $x$-terms to match.\\n* Choice D (Any value): incorrect — only $k = 4$ produces no solution; other values give a unique $x$.\\n\\n",
  },

  // ───── circle-in-standard-form (4 items, geometry) — geo-099/101/103/105 ─────
];

// Pull current item explanation from the file, build the new one, replace.

async function processFile(fileKey) {
  const filePath = FILES[fileKey];
  let src = await fs.readFile(filePath, 'utf8');
  let edits = 0;
  let skipped = 0;

  const entries = ENTRIES.filter(e => e.shard === fileKey);

  for (const e of entries) {
    // Find the item's `explanation: '...'` line.
    const idIdx = src.indexOf(`{ id: '${e.id}',`);
    if (idIdx === -1) {
      console.log(`SKIP ${e.id}: id not found`);
      skipped++;
      continue;
    }
    // Find the next "explanation: '" or "explanation: \"" after idIdx
    const expRe = /explanation:\s*('|")/g;
    expRe.lastIndex = idIdx;
    const expMatch = expRe.exec(src);
    if (!expMatch) {
      console.log(`SKIP ${e.id}: explanation not found`);
      skipped++;
      continue;
    }
    const quote = expMatch[1];
    const expStart = expMatch.index + expMatch[0].length;

    // Find the matching closing quote (skip escapes \' or \")
    let i = expStart;
    while (i < src.length) {
      if (src[i] === '\\') { i += 2; continue; }
      if (src[i] === quote) break;
      i++;
    }
    const expEnd = i;
    const fullExp = src.slice(expStart, expEnd);

    // Where to insert the block: before "**Test Day Takeaway:**"
    // The escapes in the source are literal `\\n` for newline. So we look for
    // the literal characters "\\n\\n**Test Day Takeaway:" in the source string.
    const takeawayAnchor = '\\n\\n**Test Day Takeaway:';
    const taIdx = fullExp.indexOf(takeawayAnchor);
    if (taIdx === -1) {
      console.log(`SKIP ${e.id}: Test Day Takeaway anchor not found in explanation`);
      skipped++;
      continue;
    }

    // Check if the distractor block is already present (idempotent)
    if (fullExp.includes('Why the wrong answers are tempting')) {
      console.log(`SKIP ${e.id}: already has distractor block`);
      skipped++;
      continue;
    }

    // Escape the inserted block for the current quote style. Bank items use
    // single-quoted explanations, so any `'` inside the block must be escaped
    // as `\'` to avoid prematurely closing the string. Double-quote-style is
    // also supported for forward compatibility.
    let escapedBlock = e.block;
    if (quote === "'") {
      // Escape apostrophes; backslashes are already in the desired form.
      escapedBlock = escapedBlock.replace(/'/g, "\\'");
    } else if (quote === '"') {
      escapedBlock = escapedBlock.replace(/"/g, '\\"');
    }

    // Insert: replace `\n\n**Test Day Takeaway:` with `\n\n${escapedBlock}**Test Day Takeaway:`.
    // The anchor `\n\n` in the source file is 4 characters: `\`, `n`, `\`, `n`.
    // Skip past these 4 chars (the "\n\n" before "**Test Day Takeaway:") and
    // insert the block (which already provides its own trailing `\n\n`).
    const newExp = fullExp.slice(0, taIdx + 4) + escapedBlock + fullExp.slice(taIdx + 4);

    src = src.slice(0, expStart) + newExp + src.slice(expEnd);
    edits++;
    console.log(`OK   ${e.id}: ${fullExp.length} → ${newExp.length} chars`);
  }

  return { src, edits, skipped };
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry');

  let totalEdits = 0;
  let totalSkipped = 0;

  for (const fileKey of Object.keys(FILES)) {
    const { src, edits, skipped } = await processFile(fileKey);
    totalEdits += edits;
    totalSkipped += skipped;
    if (!dryRun && edits > 0) {
      await fs.writeFile(FILES[fileKey], src);
    }
  }

  console.log('');
  console.log(`${dryRun ? '[DRY] ' : ''}${totalEdits} blocks added, ${totalSkipped} skipped.`);
}

main().catch(e => { console.error(e); process.exit(1); });
