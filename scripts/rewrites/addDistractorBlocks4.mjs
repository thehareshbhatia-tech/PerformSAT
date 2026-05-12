#!/usr/bin/env bun
/**
 * addDistractorBlocks4.mjs — Final round of distractor block additions.
 *
 * Covers 33 items across advanced-math and problem-solving shards.
 *
 * Pools (8):
 *   function-composition (2):                       am-172, am-178
 *   exponential-growth-model (4):                   am-180, am-182, am-184, am-186
 *   proportion-ratio (1):                           ps-156
 *   finding-a-missing-value-given-the-mean (4):     ps-164/166/168/170
 *   basic-probability (4):                          ps-172/174/176/178
 *   percent-of-a-whole (4):                         ps-180/182/184/186
 *   percent-of-a-number (4):                        ps-188/190/192/194
 *   percent-decrease (2):                           ps-196, ps-198
 *   marginal-probability (4):                       ps-201/203/205/207
 *   conditional-probability-with-percent (4):       ps-209/211/213/215
 *
 * Run:
 *   bun scripts/rewrites/addDistractorBlocks4.mjs --dry
 *   bun scripts/rewrites/addDistractorBlocks4.mjs
 */

import { promises as fs } from 'node:fs';

const FILES = {
  advancedMath: '/Users/hareshbhatia/PerformSAT/src/data/questions/bank/advancedMath.js',
  problemSolving: '/Users/hareshbhatia/PerformSAT/src/data/questions/bank/problemSolving.js',
};

const ENTRIES = [
  // ───── function-composition ─────
  {
    id: 'bank-am-172', shard: 'advancedMath',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($8$): swaps the composition order — computes $g(f(5)) = g(11) = 8$ instead of $f(g(5))$.\\n* Choice C ($11$): stops at $f(5) = 11$ — forgets to apply $g$ first.\\n* Choice D ($2$): reports $g(5) = 2$ alone — forgets to apply $f$ at the end.\\n\\n",
  },
  {
    id: 'bank-am-178', shard: 'advancedMath',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($3$): treats $f(g(3)) = 13$ as the question — reports the inner input, not the inner output.\\n* Choice C ($13$): copies the right-hand side back as the answer — formula confusion.\\n* Choice D ($11$): forward-solves $f(3) = 11$ — applies $f$ to $3$ directly, ignoring $g$.\\n\\n",
  },

  // ───── exponential-growth-model ─────
  {
    id: 'bank-am-180', shard: 'advancedMath',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($200$): doubles the population only ONCE — uses $50 \\\\cdot 4 = 200$, treating doubling as linear.\\n* Choice C ($400$): doubles twice instead of four times — stops at $50 \\\\cdot 2^2$.\\n* Choice D ($50 \\\\cdot 4^2$): swaps base and exponent — uses $4$ as the base and $2$ as the exponent.\\n\\n",
  },
  {
    id: 'bank-am-182', shard: 'advancedMath',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($0.05$): reports the RATE (not the factor) — the rate is $r = 0.05$ but the FACTOR is $1 + r = 1.05$.\\n* Choice C ($1000$): reports the initial value as the growth factor — value vs. multiplier confusion.\\n* Choice D ($5\\\\%$): reports the rate in percent form — close to right but mis-labels factor as rate.\\n\\n",
  },
  {
    id: 'bank-am-184', shard: 'advancedMath',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($85\\\\%$): reports the multiplier $0.85$ in percent form — confuses MULTIPLIER with DECAY rate.\\n* Choice C ($50\\\\%$): halves the answer — no clear derivation, distractor.\\n* Choice D ($5\\\\%$): reads the decimal digits ($0.85 \\\\to 5$) — surface misread.\\n\\n",
  },
  {
    id: 'bank-am-186', shard: 'advancedMath',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($4$): solves $2^t = 4$ ignoring the $/4$ in the exponent — drops the period scaling.\\n* Choice C ($2$): mis-reads the doubling period as $2$ years — coefficient confusion.\\n* Choice D ($16$): doubles the answer — applies the doubling period wrong direction.\\n\\n",
  },

  // ───── proportion-ratio ─────
  {
    id: 'bank-ps-156', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($16$): flips the proportion — solves $\\\\frac{3}{5} = \\\\frac{n}{24}$ to get the wrong side.\\n* Choice C ($8$): scales the difference ($5 - 3 = 2$) by the given amount — uses ratio difference, not ratio.\\n* Choice D ($72/5$): scales by $24/3 = 8$ but applies it to the wrong term — gives $5 \\\\cdot 24 / 5 = 24$, but mis-arithmetic.\\n\\n",
  },

  // ───── finding-a-missing-value-given-the-mean ─────
  {
    id: 'bank-ps-164', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($11$): reports the mean as the missing value — formula confusion.\\n* Choice C ($32$): reports the SUM of the three known values — forgets to subtract.\\n* Choice D ($44$): reports the TOTAL sum (mean × count) — forgets to subtract the known sum.\\n\\n",
  },
  {
    id: 'bank-ps-166', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($86$): reports the new mean times the new count divided by 5 — but actually computes $84 + 2$ (mean + 2 points).\\n* Choice C ($84$): reports the new mean itself — stops at the requirement.\\n* Choice D ($82$): reports the current mean — forgets the increase requirement.\\n\\n",
  },
  {
    id: 'bank-ps-168', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($10$): reports the mean itself.\\n* Choice C ($29$): reports the SUM of the three known values.\\n* Choice D ($40$): reports the TOTAL ($4 \\\\cdot 10$) without subtracting.\\n\\n",
  },
  {
    id: 'bank-ps-170', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($30$): reports the ORIGINAL mean — formula confusion.\\n* Choice C ($32$): reports the mean of the six removed numbers.\\n* Choice D ($2$): subtracts $30 - 32 + 4 = 2$ or similar misderivation — uses the wrong direction.\\n\\n",
  },

  // ───── basic-probability ─────
  {
    id: 'bank-ps-172', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($5/8$): divides by $8$ (the sum of $3 + 5$) — forgets to count the green marbles in the total.\\n* Choice C ($2/5$): inverts blue and red counts — uses $2/5$ instead of $5/10$.\\n* Choice D ($5$): reports the COUNT of blue marbles as the probability — formula confusion.\\n\\n",
  },
  {
    id: 'bank-ps-174', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($4/7$): divides by $7$ instead of $8$ — drops one number from the denominator.\\n* Choice C ($4/8$ — not reduced): correct ratio but not in simplest form — should reduce to $1/2$.\\n* Choice D ($1/8$): reports the probability of a SINGLE outcome ($1$ in $8$) — forgets to count all odd outcomes.\\n\\n",
  },
  {
    id: 'bank-ps-176', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($30$): subtracts ($50 - 20$) and reports the NON-red count — wrong slot.\\n* Choice C ($4$): divides $50/0.4 \\\\cdot \\\\frac{1}{...}$ or other misderivation — drops a power of $10$.\\n* Choice D ($0.4$): reports the probability itself as the count — formula confusion.\\n\\n",
  },
  {
    id: 'bank-ps-178', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($25/52$): ADDS hearts and face cards without subtracting overlap — $13 + 12 = 25$.\\n* Choice C ($13/52$): reports hearts only — ignores face cards.\\n* Choice D ($12/52$): reports face cards only — ignores hearts.\\n\\n",
  },

  // ───── percent-of-a-whole ─────
  {
    id: 'bank-ps-180', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($2.4$): misplaces the decimal — uses $0.030 \\\\cdot 80$ instead of $0.30 \\\\cdot 80$.\\n* Choice C ($50$): adds ($30 + 80/4$? or $80 - 30$) — guesses a midpoint.\\n* Choice D ($240$): drops the decimal entirely — uses $3 \\\\cdot 80$.\\n\\n",
  },
  {
    id: 'bank-ps-182', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($12$): MULTIPLIES instead of dividing — uses $0.25 \\\\cdot 48$.\\n* Choice C ($73$): adds ($48 + 25$) — guess based on visible numbers.\\n* Choice D ($96$): doubles instead of quadrupling — uses $2 \\\\cdot 48$ instead of $4 \\\\cdot 48$.\\n\\n",
  },
  {
    id: 'bank-ps-184', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($42\\\\%$): subtracts ($60 - 18 = 42$) and labels as percent — wrong operation.\\n* Choice C ($33.3\\\\%$): inverts the ratio — uses $60/18 - 1$ or $1/3$.\\n* Choice D ($18\\\\%$): reports the numerator as the percent — number/percent confusion.\\n\\n",
  },
  {
    id: 'bank-ps-186', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($24$): copies the given $24$ as the answer — number-confusion.\\n* Choice C ($2.4$): reports $10\\\\%$ of $24$ alone — stops at the right-hand side.\\n* Choice D ($0.30$): reports the RATIO ($8/10 \\\\cdot \\\\text{...}$? or just $0.30 = 30\\\\%$ guess) — decimal confusion.\\n\\n",
  },

  // ───── percent-of-a-number ─────
  {
    id: 'bank-ps-188', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($25$): divides instead of multiplying — uses $50 \\\\cdot 0.50$.\\n* Choice C ($30$): adds ($20 + 10$) instead of multiplying.\\n* Choice D ($5$): drops a factor of $2$ — uses $0.10 \\\\cdot 50$.\\n\\n",
  },
  {
    id: 'bank-ps-190', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($60$): MULTIPLIES instead of dividing — uses $0.20 \\\\cdot 180/0.6$ misderivation.\\n* Choice C ($216$): applies the percent INCREASE direction — uses $180 \\\\cdot 1.20$.\\n* Choice D ($200$): rounds the wrong direction — picks a close round number.\\n\\n",
  },
  {
    id: 'bank-ps-192', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($95$): mis-arithmetic — adds $15$ instead of $12$ to $80$.\\n* Choice C ($68$): SUBTRACTS instead of adding — uses $80 - 12$.\\n* Choice D ($12$): reports the INCREASE alone, not the new value.\\n\\n",
  },
  {
    id: 'bank-ps-194', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($\\\\$84$): adds $40\\\\%$ to $60$ — uses $60 \\\\cdot 1.40$ (wrong direction).\\n* Choice C ($\\\\$36$): subtracts another $40\\\\%$ from $60$ — uses $60 \\\\cdot 0.60$ (wrong direction).\\n* Choice D ($\\\\$150$): mis-divides — uses $60/0.40$.\\n\\n",
  },

  // ───── percent-decrease ─────
  {
    id: 'bank-ps-196', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($20\\\\%$): divides by the FINAL value instead of original — uses $20/60$, wrong base.\\n* Choice C ($30\\\\%$): uses the value of the decrease ($20$) as the percent — number/percent confusion.\\n* Choice D ($33.3\\\\%$): divides by the wrong base — uses $20/60$.\\n\\n",
  },
  {
    id: 'bank-ps-198', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($45.5$): divides by the wrong multiplier — uses $35/(1+0.30)$.\\n* Choice C ($24.5$): SUBTRACTS the decrease ($35 - 0.30 \\\\cdot 35$) — applies the formula in the wrong direction.\\n* Choice D ($65$): adds the decrease back — uses $35 + 30 = 65$.\\n\\n",
  },

  // ───── marginal-probability ─────
  {
    id: 'bank-ps-201', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($0.4$): computes $40/100$ — reports the COMPLEMENT (those who don't prefer Coke).\\n* Choice C ($60$): reports the COUNT as the probability — count/percent confusion.\\n* Choice D ($100$): reports the TOTAL as the probability.\\n\\n",
  },
  {
    id: 'bank-ps-203', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($0.6$): reports the COMPLEMENT (not-seniors).\\n* Choice C ($80$): reports the COUNT as the probability.\\n* Choice D ($0.25$): divides $80/...$ by the wrong base — uses a fraction unrelated to the marginal total.\\n\\n",
  },
  {
    id: 'bank-ps-205', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($0.6$): reports the COMPLEMENT (non-tea preference).\\n* Choice C ($0.5$): averages $50$ and $30$ percents wrongly — $(50 + 30)/200$? No, $(0.5 + 0.3)/2$? Likely from $50/100$ guess.\\n* Choice D ($80$): reports the marginal COUNT as the probability.\\n\\n",
  },
  {
    id: 'bank-ps-207', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($0.1$): doubles the answer — perhaps uses $40/400$ instead of $20/400$.\\n* Choice C ($0.15$): computes $60/400$ — extra count error.\\n* Choice D ($0.2$): computes $80/400$ — likely confuses senior count with another subgroup.\\n\\n",
  },

  // ───── conditional-probability-with-percent ─────
  {
    id: 'bank-ps-209', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($70\\\\%$): ADDS the probabilities ($40 + 30$) — uses sum instead of product.\\n* Choice C ($10\\\\%$): subtracts ($40 - 30$) — wrong operation.\\n* Choice D ($30\\\\%$): reports the conditional alone — forgets to multiply by the base rate.\\n\\n",
  },
  {
    id: 'bank-ps-211', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($0.25$): reports the conditional alone — forgets to multiply by the base rate of $0.60$.\\n* Choice C ($0.60$): reports the base rate alone.\\n* Choice D ($0.85$): ADDS the probabilities ($0.60 + 0.25$) — uses sum instead of product.\\n\\n",
  },
  {
    id: 'bank-ps-213', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($10\\\\%$): subtracts ($50 - 40$) — wrong operation.\\n* Choice C ($50\\\\%$): reports the conditional alone — forgets the base rate.\\n* Choice D ($90\\\\%$): ADDS the percentages ($40 + 50$) — sum vs. product confusion.\\n\\n",
  },
  {
    id: 'bank-ps-215', shard: 'problemSolving',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($0.20$): reports the base rate alone — forgets to multiply by the sensitivity.\\n* Choice C ($0.90$): reports the conditional probability alone — forgets the base rate.\\n* Choice D ($0.02$): MULTIPLIES the wrong direction — uses $0.20 \\\\cdot 0.10$ (false-negative rate).\\n\\n",
  },
];

async function processFile(fileKey) {
  const filePath = FILES[fileKey];
  let src = await fs.readFile(filePath, 'utf8');
  let edits = 0, skipped = 0;
  const entries = ENTRIES.filter(e => e.shard === fileKey);

  for (const e of entries) {
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
  return { src, edits, skipped };
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry');

  let totalEdits = 0, totalSkipped = 0;
  for (const fileKey of Object.keys(FILES)) {
    const { src, edits, skipped } = await processFile(fileKey);
    totalEdits += edits;
    totalSkipped += skipped;
    if (!dryRun && edits > 0) await fs.writeFile(FILES[fileKey], src);
  }
  console.log('');
  console.log(`${dryRun ? '[DRY] ' : ''}${totalEdits} blocks added, ${totalSkipped} skipped.`);
}

main().catch(e => { console.error(e); process.exit(1); });
