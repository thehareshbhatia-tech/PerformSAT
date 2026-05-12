#!/usr/bin/env bun
/**
 * topOfBand4.mjs — final round, surgical fixes for the 4 stubborn items at 3/5.
 *
 *   bank-alg-302: replace with polynomial-identity equation that has clean
 *                 integer answer and surgical distractor paths.
 *   bank-geo-141: tighten distractors with cleaner derivation paths.
 *   bank-geo-145: multi-percent-change scaling (genuinely band-7 hard).
 *   bank-geo-167: 3-step vertical/adjacent angles problem.
 */
import { promises as fs } from 'node:fs';

const FILES = {
  algebra: '/Users/hareshbhatia/PerformSAT/src/data/questions/bank/algebra.js',
  geometry: '/Users/hareshbhatia/PerformSAT/src/data/questions/bank/geometry.js',
};

const REPLACEMENTS = [
  {
    file: 'algebra', findId: 'bank-alg-302',
    newItem: `  { id: 'bank-alg-302', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In the equation $\\\\dfrac{ax + 5}{6} - \\\\dfrac{x - 3}{4} = \\\\dfrac{x + b}{12}$, $a$ and $b$ are constants. The equation is true for all values of $x$. What is the value of $a + b$?',
    choices: [{ id: 'A', text: '$21$' }, { id: 'B', text: '$19$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$24$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Polynomial Identity with Rational Expressions**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~40s):** Multiply both sides by $12$: $2(ax + 5) - 3(x - 3) = x + b$. Expand: $(2a - 3)x + 19 = x + b$. For an identity in $x$: $2a - 3 = 1 \\\\Rightarrow a = 2$, and $19 = b$. So $a + b = 21$.\\n\\n**The Full Solution:**\\nThe equation is true for all $x$, so it is an IDENTITY: the two sides simplify to the same expression.\\nMultiply every term by the LCD $12$:\\n$\\\\quad 2(ax + 5) - 3(x - 3) = x + b$\\nDistribute:\\n$\\\\quad 2ax + 10 - 3x + 9 = x + b$\\n$\\\\quad (2a - 3)x + 19 = x + b$\\nMatch coefficients:\\n$\\\\quad$ $x$-coefficient: $2a - 3 = 1 \\\\Rightarrow a = 2$\\n$\\\\quad$ constant: $19 = b$\\nTherefore $a + b = 2 + 19 = 21$.\\n\\nVerification: with $a = 2, b = 19$: LHS $= \\\\dfrac{2x + 5}{6} - \\\\dfrac{x - 3}{4}$. Common denominator $12$: $\\\\dfrac{2(2x + 5) - 3(x - 3)}{12} = \\\\dfrac{x + 19}{12} = $ RHS \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($19$): reports the value of $b$ alone — stops one step short.\\n* Choice C ($2$): reports the value of $a$ alone — stops one step short.\\n* Choice D ($24$): sign error on the constant — uses $-3 \\\\cdot (-3) = -9$ (drops a negative) to get $b = 1$ then mis-arithmetic.\\n\\n**Test Day Takeaway:** When an equation in $x$ is true for all $x$, it is a polynomial identity. Clear denominators with the LCD, then match coefficients of $x$ and the constant term SEPARATELY.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    file: 'geometry', findId: 'bank-geo-141',
    newItem: `  { id: 'bank-geo-141', domain: 'geometry', skills: ['volume-prism'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A rectangular prism has a volume of $432$ cubic centimeters. The length is $9$ centimeters and the width is $4$ centimeters. What is the surface area of the prism, in square centimeters?',
    choices: [{ id: 'A', text: '$384$' }, { id: 'B', text: '$108$' }, { id: 'C', text: '$36$' }, { id: 'D', text: '$432$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Volume → Missing Dimension → Surface Area**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~30s):** $h = V/(lw) = 432/36 = 12$. Surface area $= 2(lw + lh + wh) = 2(36 + 108 + 48) = 2(192) = 384$.\\n\\n**The Full Solution:**\\nStep 1: Recover the missing dimension. The base area is $lw = 9 \\\\cdot 4 = 36$, so $h = V/(lw) = 432/36 = 12$ cm.\\nStep 2: Apply the surface-area formula: $SA = 2(lw + lh + wh)$.\\n$\\\\quad lw = 36$, $lh = 9 \\\\cdot 12 = 108$, $wh = 4 \\\\cdot 12 = 48$\\n$\\\\quad SA = 2(36 + 108 + 48) = 2(192) = 384$ sq cm.\\n\\nVerification: dimensions $9 \\\\times 4 \\\\times 12$ give volume $432$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($108$): reports the area of just the largest face ($l \\\\cdot h = 9 \\\\cdot 12$) instead of summing all six faces.\\n* Choice C ($36$): reports the base area ($lw = 9 \\\\cdot 4$) alone — stops at step 1.\\n* Choice D ($432$): reports the VOLUME as the surface area — formula confusion (cubic vs square units).\\n\\n**Test Day Takeaway:** Volume gives the missing dimension via division. Surface area uses $2(lw + lh + wh)$ — six faces in three congruent pairs. Pay attention to units: volume is cubic, surface area is square.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'volume-of-a-rectangular-prism', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    file: 'geometry', findId: 'bank-geo-145',
    newItem: `  { id: 'bank-geo-145', domain: 'geometry', skills: ['volume-prism'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A rectangular prism has its length increased by $25\\\\%$, its width increased by $20\\\\%$, and its height decreased by $50\\\\%$. The volume of the new rectangular prism is what percent of the volume of the original prism?',
    choices: [{ id: 'A', text: '$75\\\\%$' }, { id: 'B', text: '$95\\\\%$' }, { id: 'C', text: '$125\\\\%$' }, { id: 'D', text: '$50\\\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Multi-Percent Change in Volume**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~15s):** New volume $= V \\\\cdot (1.25)(1.20)(0.50) = V \\\\cdot 0.75$. So $75\\\\%$ of the original.\\n\\n**The Full Solution:**\\nLet the original volume be $V = lwh$.\\nApply each scaling factor:\\n$\\\\quad$ length $\\\\to 1.25 l$ (increase $25\\\\%$)\\n$\\\\quad$ width $\\\\to 1.20 w$ (increase $20\\\\%$)\\n$\\\\quad$ height $\\\\to 0.50 h$ (decrease $50\\\\%$)\\nNew volume $V' = (1.25 l)(1.20 w)(0.50 h) = (1.25 \\\\cdot 1.20 \\\\cdot 0.50) \\\\cdot lwh$.\\nCompute the product: $1.25 \\\\cdot 1.20 = 1.50$; $1.50 \\\\cdot 0.50 = 0.75$.\\nSo $V' = 0.75 V$, which is $75\\\\%$ of $V$.\\n\\nNumerical check: original $4 \\\\times 5 \\\\times 10$, $V = 200$. New: $5 \\\\times 6 \\\\times 5$, $V' = 150 = 0.75 \\\\cdot 200$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($95\\\\%$): ADDS the percent changes ($25 + 20 - 50 = -5$, so $95\\\\%$) — treats compound scaling as additive.\\n* Choice C ($125\\\\%$): ignores the $50\\\\%$ height decrease — computes only $(1.25)(1.20) \\\\cdot 100\\\\% = 150\\\\%$, then mis-arithmetic.\\n* Choice D ($50\\\\%$): copies the height-decrease percent directly — uses only one of the three scale factors.\\n\\n**Test Day Takeaway:** Compound percent changes are MULTIPLICATIVE, not additive. Convert each change to a factor: $+25\\\\% \\\\to \\\\times 1.25$; $-50\\\\% \\\\to \\\\times 0.50$. Multiply all factors together.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'volume-of-a-rectangular-prism', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    file: 'geometry', findId: 'bank-geo-167',
    newItem: `  { id: 'bank-geo-167', domain: 'geometry', skills: ['triangle-angle-sum'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Two lines intersect at point $P$, forming two pairs of vertical angles. One pair of vertical angles each measure $(4x + 10)°$, and the other pair of vertical angles each measure $(6x)°$. What is the value of $x$?',
    choices: [{ id: 'A', text: '$17$' }, { id: 'B', text: '$15$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$78$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertical and Linear-Pair Angles**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~20s):** A vertical angle from one pair forms a linear pair with a vertical angle from the other pair, so they are supplementary: $(4x + 10) + 6x = 180 \\\\Rightarrow 10x = 170 \\\\Rightarrow x = 17$.\\n\\n**The Full Solution:**\\nWhen two lines intersect, they form four angles in two vertical pairs. Each angle from one pair is ADJACENT to each angle from the other pair, and adjacent angles formed by intersecting lines are SUPPLEMENTARY:\\n$\\\\quad (4x + 10) + 6x = 180$\\n$\\\\quad 10x + 10 = 180$\\n$\\\\quad 10x = 170$\\n$\\\\quad x = 17$\\n\\nVerification: the angles measure $4(17) + 10 = 78°$ and $6(17) = 102°$. Sum: $78 + 102 = 180$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($15$): sign error during isolation — gets $10x = 150 \\\\Rightarrow x = 15$ via a constant mistake.\\n* Choice C ($5$): treats the two angle expressions as EQUAL (sets them equal as if they were vertical) — gets $4x + 10 = 6x \\\\Rightarrow 2x = 10 \\\\Rightarrow x = 5$. This is the error from confusing vertical (equal) with adjacent (supplementary).\\n* Choice D ($78$): reports the angle measure ($4x + 10 = 78$) instead of the variable $x$ — confuses the answer with an intermediate.\\n\\n**Test Day Takeaway:** Vertical angles are EQUAL; adjacent angles (formed by intersecting lines) are SUPPLEMENTARY. Two different vertical pairs always have angles that are supplementary to each other.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'angles-with-parallel-lines-and-transversals', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
];

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry');
  const byFile = new Map();
  for (const r of REPLACEMENTS) {
    if (!byFile.has(r.file)) byFile.set(r.file, []);
    byFile.get(r.file).push(r);
  }
  let applied = 0, skipped = 0;
  for (const [fileKey, reps] of byFile) {
    let src = await fs.readFile(FILES[fileKey], 'utf8');
    for (const r of reps) {
      const startIdx = src.indexOf(`{ id: '${r.findId}',`);
      if (startIdx === -1) { console.log(`SKIP ${r.findId}`); skipped++; continue; }
      let pos = startIdx + 100, endIdx = -1;
      while (pos < startIdx + 5000 && pos < src.length) {
        const candidate = src.indexOf('createdAt:', pos);
        if (candidate === -1) break;
        const after = src.slice(candidate, candidate + 100);
        const m = after.match(/^createdAt:\s*'[\d-]+'\s*\},?/);
        if (m) { endIdx = candidate + m[0].length; break; }
        pos = candidate + 1;
      }
      if (endIdx === -1) { console.log(`SKIP ${r.findId}: end not found`); skipped++; continue; }
      const lineStart = src.lastIndexOf('\n', startIdx) + 1;
      const lineEnd = src.indexOf('\n', endIdx);
      if (dryRun) console.log(`[dry] ${r.findId}: ${lineEnd - lineStart} → ${r.newItem.length}`);
      else {
        src = src.slice(0, lineStart) + r.newItem + src.slice(lineEnd);
        console.log(`OK ${r.findId}: ${lineEnd - lineStart} → ${r.newItem.length}`);
      }
      applied++;
    }
    if (!dryRun) await fs.writeFile(FILES[fileKey], src);
  }
  console.log(`\n${dryRun ? '[DRY] ' : ''}${applied} applied, ${skipped} skipped.`);
}
main().catch(e => { console.error(e); process.exit(1); });
