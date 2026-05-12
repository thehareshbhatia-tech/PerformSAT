#!/usr/bin/env bun
/**
 * addDistractorBlocks2.mjs — Round 2 of distractor block additions.
 *
 * Covers 16 algebra items spanning four sourceStyleRef pools:
 *   two-equation-system-from-a-word-problem (4): alg-248/250/252/254
 *   solve-for-a-combination (4):              alg-256/258/260/262
 *   vertex-form-to-standard-form (4):         alg-272/274/276/278
 *   absolute-value-equation (4):              alg-288/290/292/294
 *
 * Shares the insertion logic with addDistractorBlocks1.mjs: locate the
 * "**Test Day Takeaway:**" anchor in the existing explanation, insert
 * the custom block immediately before it.
 *
 * Run:
 *   bun scripts/rewrites/addDistractorBlocks2.mjs --dry
 *   bun scripts/rewrites/addDistractorBlocks2.mjs
 */

import { promises as fs } from 'node:fs';

const FILE = '/Users/hareshbhatia/PerformSAT/src/data/questions/bank/algebra.js';

const ENTRIES = [
  // ───── two-equation-system-from-a-word-problem ─────
  {
    id: 'bank-alg-248',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($9$): reports the number of BOYS instead of girls — solved correctly but mis-labeled.\\n* Choice C ($18$): adds $7$ to half the total ($11 + 7$) — half-correct shortcut that overshoots.\\n* Choice D ($25$): reports the total class size — ignores the boys/girls split.\\n\\n",
  },
  {
    id: 'bank-alg-250',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($8$): reports the number of $7$-point games (the OTHER variable) — solved correctly but mis-labeled.\\n* Choice C ($10$): mis-sets up the score equation, perhaps using $7$ as the count of $5$-point games.\\n* Choice D ($4$): arithmetic error in the substitution — drops a factor of $2$.\\n\\n",
  },
  {
    id: 'bank-alg-252',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($24$): reports the FATHER current age — solved correctly but mis-labeled.\\n* Choice C ($36$): reports the father age in $12$ years.\\n* Choice D ($6$): half-arithmetic error — uses the future relationship without shifting both ages.\\n\\n",
  },
  {
    id: 'bank-alg-254',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($22$): reports the number of DIMES instead of nickels — solved correctly but mis-labeled.\\n* Choice C ($16$): forgets to multiply the coin counts by their value — solves for the wrong variable.\\n* Choice D ($30$): uses only the count equation without the value constraint.\\n\\n",
  },

  // ───── solve-for-a-combination ─────
  {
    id: 'bank-alg-256',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($11$): reports the RHS of equation 2 as the answer — confuses \\$x + y\\$ with \\$x + 4y\\$.\\n* Choice C ($5$): swaps signs during substitution — gets \\$y = -1, x = 6\\$, sums incorrectly.\\n* Choice D ($3$): reports the difference \\$y - x\\$ instead of \\$x + y\\$.\\n\\n",
  },
  {
    id: 'bank-alg-258',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($20$): reports the RHS of equation 1 — uses \\$3x + 5y\\$ directly without the combination step.\\n* Choice C ($12$): doubles equation 2 ($2x + 2y = 12$) — wrong target combination.\\n* Choice D ($8$): adds the two RHS values instead of subtracting.\\n\\n",
  },
  {
    id: 'bank-alg-260',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($22$): doubles equation 2 and adds — uses \\$4a - 3b + 4a + 2b\\$ instead of straight addition.\\n* Choice C ($11$): reports RHS of equation 1 — \\$4a - 3b\\$ directly.\\n* Choice D ($14$): mis-derives — perhaps adds RHS values then subtracts \\$4$.\\n\\n",
  },
  {
    id: 'bank-alg-262',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($8$): reports the difference of RHS ($18 - 10 = 8$) — answers \\$2x\\$ instead of \\$x + y\\$.\\n* Choice C ($4$): reports \\$x\\$ alone — solves the system but stops at one variable.\\n* Choice D ($1$): reports \\$|y|\\$ — magnitude without sign.\\n\\n",
  },

  // ───── vertex-form-to-standard-form ─────
  {
    id: 'bank-alg-272',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($x^2 + 4x + 7$): sign error on the middle term — uses $+2h$ instead of $-2h$ when expanding $(x - h)^2$.\\n* Choice C ($x^2 - 4x + 3$): forgets to add the $+3$ outside — drops the vertical shift.\\n* Choice D ($x^2 - 2x + 3$): linear expansion error — multiplies $h$ once instead of twice ($-2h$ becomes $-h$).\\n\\n",
  },
  {
    id: 'bank-alg-274',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($-6$): forgets to distribute the leading coefficient $2$ to the middle term — gives the coefficient inside the parentheses.\\n* Choice C ($6$): drops the sign of $-6$ — applies the wrong sign convention to $-2h$.\\n* Choice D ($12$): forgets the sign and uses the full distributed value $|2 \\\\cdot (-2h)| = 12$.\\n\\n",
  },
  {
    id: 'bank-alg-276',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($41$): plugs $x = 2$ into the standard form — computes $f(2) = 4a + 2b + c$ instead of $f(1)$.\\n* Choice C ($3$): reports the value of $a$ alone — stops at solving for the leading coefficient.\\n* Choice D ($-3$): sign-flipped value of $a$ — sign error when solving $4a - 7 = 5$.\\n\\n",
  },
  {
    id: 'bank-alg-278',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($17$): copies the constant of the standard form as $k$ — forgets that the expansion contributes $+12$.\\n* Choice C ($12$): reports the expansion constant ($3 \\\\cdot h^2$) as $k$ — confuses pieces.\\n* Choice D ($-12$): reports the middle coefficient as $k$ — wrong slot.\\n\\n",
  },

  // ───── absolute-value-equation ─────
  {
    id: 'bank-alg-288',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($\\\\{5\\\\}$): reports only the positive solution — forgets the negative branch.\\n* Choice C ($\\\\{0\\\\}$): mis-reads the equation — perhaps confuses absolute value with squaring.\\n* Choice D ($\\\\{-5\\\\}$): reports only the negative solution — forgets the positive branch.\\n\\n",
  },
  {
    id: 'bank-alg-290',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($10$): reports the larger solution alone, not the sum of both.\\n* Choice C ($14$): doubles the constant $7$ — confuses $|x - h| = k$ symmetry.\\n* Choice D ($0$): reports the sum assuming solutions are symmetric about $0$ — but they are symmetric about $h = 3$.\\n\\n",
  },
  {
    id: 'bank-alg-292',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($1$): treats the negative RHS as a single solution — ignores that absolute value cannot be negative.\\n* Choice C ($2$): applies the $|x| = k$ rule (which gives 2 solutions) without checking that $k$ must be non-negative.\\n* Choice D (Infinite): confuses the impossibility with all-real-values condition.\\n\\n",
  },
  {
    id: 'bank-alg-294',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($3$): reports the POSITIVE solution — ignores the $x < 0$ constraint.\\n* Choice C ($11/3$): solves the positive branch incorrectly — uses $3x + 1 = 10 \\\\Rightarrow x = 9/3 = 3$ but mis-arithmetic.\\n* Choice D ($-3$): negates the positive solution without using $|...| = 10$ correctly.\\n\\n",
  },
];

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry');

  let src = await fs.readFile(FILE, 'utf8');
  let edits = 0, skipped = 0;

  for (const e of ENTRIES) {
    const idIdx = src.indexOf(`{ id: '${e.id}',`);
    if (idIdx === -1) { console.log(`SKIP ${e.id}: id not found`); skipped++; continue; }
    const expRe = /explanation:\s*('|")/g;
    expRe.lastIndex = idIdx;
    const expMatch = expRe.exec(src);
    if (!expMatch) { console.log(`SKIP ${e.id}: explanation not found`); skipped++; continue; }
    const quote = expMatch[1];
    const expStart = expMatch.index + expMatch[0].length;

    let i = expStart;
    while (i < src.length) {
      if (src[i] === '\\') { i += 2; continue; }
      if (src[i] === quote) break;
      i++;
    }
    const expEnd = i;
    const fullExp = src.slice(expStart, expEnd);

    if (fullExp.includes('Why the wrong answers are tempting')) {
      console.log(`SKIP ${e.id}: already has distractor block`); skipped++; continue;
    }

    const takeawayAnchor = '\\n\\n**Test Day Takeaway:';
    const taIdx = fullExp.indexOf(takeawayAnchor);
    if (taIdx === -1) { console.log(`SKIP ${e.id}: Test Day Takeaway anchor not found`); skipped++; continue; }

    let escapedBlock = e.block;
    if (quote === "'") escapedBlock = escapedBlock.replace(/'/g, "\\'");
    else if (quote === '"') escapedBlock = escapedBlock.replace(/"/g, '\\"');

    const newExp = fullExp.slice(0, taIdx + 4) + escapedBlock + fullExp.slice(taIdx + 4);
    src = src.slice(0, expStart) + newExp + src.slice(expEnd);
    edits++;
    console.log(`OK   ${e.id}: ${fullExp.length} → ${newExp.length} chars`);
  }

  if (!dryRun && edits > 0) await fs.writeFile(FILE, src);
  console.log('');
  console.log(`${dryRun ? '[DRY] ' : ''}${edits} blocks added, ${skipped} skipped.`);
}

main().catch(e => { console.error(e); process.exit(1); });
