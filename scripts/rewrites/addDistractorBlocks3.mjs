#!/usr/bin/env bun
/**
 * addDistractorBlocks3.mjs — Round 3 of distractor block additions.
 *
 * Covers 21 geometry items spanning six sourceStyleRef pools:
 *   triangle-angle-sum (1):                   geo-097
 *   circle-in-standard-form (4):              geo-099/101/103/105
 *   soh-cah-toa-in-a-3-4-5-triangle (4):      geo-107/109/111/113
 *   rectangle-area (4):                       geo-115/117/119/121
 *   pythagorean-theorem-3-4-5-family (4):     geo-123/125/127/129
 *   distance-from-center-as-radius (4):       geo-131/133/135/137
 *
 * Run:
 *   bun scripts/rewrites/addDistractorBlocks3.mjs --dry
 *   bun scripts/rewrites/addDistractorBlocks3.mjs
 */

import { promises as fs } from 'node:fs';

const FILE = '/Users/hareshbhatia/PerformSAT/src/data/questions/bank/geometry.js';

const ENTRIES = [
  // ───── triangle-angle-sum ─────
  {
    id: 'bank-geo-097',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($25$): drops one of the constants — perhaps treats $(2x+10) + (3x-20) + (x+10) = 180$ as $6x - 20 = 180$ and solves to get $x \\\\approx 33$, but mis-arithmetic to $25$.\\n* Choice C ($45$): assumes the triangle is equilateral (each angle $60°$), then $(2x + 10) = 60 \\\\Rightarrow x = 25$, but mis-derives.\\n* Choice D ($60$): uses $360°$ (quadrilateral) instead of $180°$ — applies the wrong polygon rule.\\n\\n",
  },

  // ───── circle-in-standard-form ─────
  {
    id: 'bank-geo-099',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($25$): reports $r^2$ instead of $r$ — forgets the square root step.\\n* Choice C ($\\\\sqrt{25}$ — not simplified): leaves the answer unsimplified — $\\\\sqrt{25} = 5$, so the simplified form is the correct A.\\n* Choice D ($2$): copies the value of $h$ from the center — confuses center coordinate with radius.\\n\\n",
  },
  {
    id: 'bank-geo-101',
    block: "**Why the wrong answers are tempting:**\\n* Choice B: flips both signs in the parentheses — uses $(x + h)$ instead of $(x - h)$ pattern.\\n* Choice C: uses $r$ (not $r^2$) as the right-hand side — drops the square.\\n* Choice D: ignores the sign of the $y$-coordinate — uses $(y - 2)$ instead of $(y + 2)$ for center $y = -2$.\\n\\n",
  },
  {
    id: 'bank-geo-103',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($10\\\\pi$): reports the circumference ($2\\\\pi r$) instead of the area.\\n* Choice C ($50\\\\pi$): halves the area — perhaps confuses semicircle vs full circle.\\n* Choice D ($25\\\\pi$): squares half the radius ($r/2 = 5$, then $\\\\pi(5)^2$) — uses radius/2 by mistake.\\n\\n",
  },
  {
    id: 'bank-geo-105',
    block: "**Why the wrong answers are tempting:**\\n* Choice B: flips the signs in the parentheses — wrong center placement.\\n* Choice C ($r^2 = 5$): reports the radius itself as $r^2$ — forgets to square.\\n* Choice D ($r^2 = 7$): adds the differences ($4 + 3 = 7$) instead of the squared differences.\\n\\n",
  },

  // ───── soh-cah-toa-in-a-3-4-5-triangle ─────
  {
    id: 'bank-geo-107',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($4/5$): gives the sine of the OTHER acute angle (opposite the side of length $4$).\\n* Choice C ($3/4$): gives the tangent of the requested angle (opp/adj instead of opp/hyp).\\n* Choice D ($5/3$): inverts the ratio — uses hyp/opp instead of opp/hyp.\\n\\n",
  },
  {
    id: 'bank-geo-109',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($4/3$): tangent of the LARGER acute angle (opposite the side of length $4$).\\n* Choice C ($3/5$): sine of the smaller angle — not the tangent.\\n* Choice D ($4/5$): cosine of the smaller angle — not the tangent.\\n\\n",
  },
  {
    id: 'bank-geo-111',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($3/4$): reports the tangent ($\\\\sin/\\\\cos$) instead of $\\\\cos$ alone.\\n* Choice C ($5/4$): inverts the ratio — reports $1/\\\\cos$ (the secant).\\n* Choice D ($2/5$): uses $1 - \\\\sin$ ($1 - 3/5 = 2/5$) instead of the Pythagorean identity.\\n\\n",
  },
  {
    id: 'bank-geo-113',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($4/5$): reports the cosine instead of the sine of $\\\\theta$.\\n* Choice C ($3/4$): copies the tangent back as sine — formula confusion.\\n* Choice D ($4/3$): inverts the tangent and reports it as sine.\\n\\n",
  },

  // ───── rectangle-area ─────
  {
    id: 'bank-geo-115',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($26$): reports the PERIMETER ($2(L + W) = 2 \\\\cdot 13$) instead of the area.\\n* Choice C ($13$): reports $L + W$ alone — half the perimeter.\\n* Choice D ($80$): doubles the area — uses $2lw$, perhaps confusing with surface area formula.\\n\\n",
  },
  {
    id: 'bank-geo-117',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($45$): treats the perimeter formula as $L + W = 30$, gets $W = 21$, then mis-computes.\\n* Choice C ($30$): reports the PERIMETER as the area — formula confusion.\\n* Choice D ($60$): finds $W$ via $30 - 9 = 21$? Or doubles correct answer in arithmetic error.\\n\\n",
  },
  {
    id: 'bank-geo-119',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($24$): reports HALF the perimeter ($L + W = 16$, then $16 + 4 = 20$? or stops at $L + W$) — incomplete formula.\\n* Choice C ($48$): reports the AREA back as the perimeter — formula confusion.\\n* Choice D ($16$): reports $L + W$ alone — half the perimeter.\\n\\n",
  },
  {
    id: 'bank-geo-121',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($30\\\\%$): ADDS the percent increases ($20 + 10$) — misses the cross-product term.\\n* Choice C ($22\\\\%$): subtracts ($20 - 10 + 12$) or mis-derives — arithmetic error in the multiplication.\\n* Choice D ($200\\\\%$): doubles the wrong direction — interprets percent increase as multiplicative factor.\\n\\n",
  },

  // ───── pythagorean-theorem-3-4-5-family ─────
  {
    id: 'bank-geo-123',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($21$): adds the legs ($9 + 12$) instead of applying the Pythagorean formula.\\n* Choice C ($\\\\sqrt{21}$): uses $\\\\sqrt{a + b}$ instead of $\\\\sqrt{a^2 + b^2}$ — drops the squares.\\n* Choice D ($108$): multiplies the legs ($9 \\\\cdot 12$) — confuses Pythagorean with area.\\n\\n",
  },
  {
    id: 'bank-geo-125',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($10$): subtracts $25 - 15 = 10$ — confuses Pythagorean with arithmetic difference.\\n* Choice C ($40$): adds $25 + 15 = 40$ — wrong operation.\\n* Choice D ($30$): doubles the known leg ($2 \\\\cdot 15$) — random misderivation.\\n\\n",
  },
  {
    id: 'bank-geo-127',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($8$): scales $4$ instead of $5$ (reports leg, not hypotenuse).\\n* Choice C ($5$): reports the un-scaled hypotenuse of the base $3$-$4$-$5$ triangle.\\n* Choice D ($12$): reports the perimeter ratio scale ($\\\\text{perimeter}/2$) without applying it to a specific side.\\n\\n",
  },
  {
    id: 'bank-geo-129',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($4$): one off from the correct answer — perhaps stops at $a^2 - 2a - 3 = 0$ without factoring properly.\\n* Choice C ($5$): mis-solves the quadratic — perhaps uses the discriminant incorrectly.\\n* Choice D ($6$): also a Pythagorean triple component ($6$-$8$-$10$ family) but with non-consecutive sides — picks a wrong triple.\\n\\n",
  },

  // ───── distance-from-center-as-radius ─────
  {
    id: 'bank-geo-131',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($7$): adds the coordinates ($3 + 4 = 7$) instead of using the distance formula.\\n* Choice C ($25$): reports $r^2$ instead of $r$ — forgets the square root.\\n* Choice D ($3$): reports the $x$-coordinate of the point as the radius — coordinate confusion.\\n\\n",
  },
  {
    id: 'bank-geo-133',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($7$): adds $|\\\\Delta x| + |\\\\Delta y|$ ($3 + 4 = 7$) — uses taxicab distance, not Euclidean.\\n* Choice C ($25$): reports $r^2$ instead of $r$ — forgets the square root.\\n* Choice D ($\\\\sqrt{17}$): sign error in $\\\\Delta y$ ($2 - 2 = 0$? or computes $\\\\sqrt{1 + 16}$).\\n\\n",
  },
  {
    id: 'bank-geo-135',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($\\\\sqrt{7}$): adds the coordinates without squaring — uses $4 + 3 = 7$ then takes $\\\\sqrt{}$.\\n* Choice C ($7$): adds $h + |k|$ ($4 + 3$) directly as $r$.\\n* Choice D ($25$): reports $r^2$ instead of $r$ — forgets the square root.\\n\\n",
  },
  {
    id: 'bank-geo-137',
    block: "**Why the wrong answers are tempting:**\\n* Choice B ($8$): reports the DIAMETER as the radius — forgets to halve.\\n* Choice C ($2$): subtracts incorrectly ($5 + (-3) = 2$ instead of $5 - (-3) = 8$).\\n* Choice D ($5$): reports the $y$-coordinate of one endpoint as the radius.\\n\\n",
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
