#!/usr/bin/env bun
/**
 * topOfBand11.mjs — final 6 stragglers from the bank-wide 50-sample.
 *
 * Already at 82.9% pass (29/35). These 6 push toward 100%:
 *
 *   bank-am-039  (medium exponent-laws):    ambiguous + too easy
 *     → multi-step exponent identity with explicit "for all $x > 0$"
 *   bank-alg-306 (medium distributive):     too easy, distractors overlap
 *     → parameter inference (find $a$ given solution)
 *   bank-geo-047 (hard double elevation):   still too easy after v2
 *     → two-position observation (walk closer), 2-equation system
 *   bank-geo-172 (medium soh-cah-toa):      too easy
 *     → perimeter + one leg → Pythag → smaller-angle sine
 *   bank-ps-200  (hard percent change):     too easy
 *     → 3-quarter compound change to find original
 *   bank-ps-195  (hard percent of value):   too easy
 *     → 3-year compound population to find baseline
 *
 * Run: bun scripts/rewrites/topOfBand11.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BANK_DIR = path.resolve(__dirname, '..', '..', 'src/data/questions/bank');

const REWRITES_BY_FILE = {
  'algebra.js': [
    {
      id: 'bank-alg-306',
      block: `  { id: 'bank-alg-306', domain: 'algebra', skills: ['distributive-property'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The equation $a(x - 3) - 5 = 9$ has solution $x = -4$, where $a$ is a constant. What is the value of $a$?',
    choices: [{ id: 'A', text: '$-2$' }, { id: 'B', text: '$-\\\\dfrac{2}{7}$' }, { id: 'C', text: '$\\\\dfrac{2}{7}$' }, { id: 'D', text: '$2$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Solve for a Parameter Given a Solution**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~20s):** Substitute $x = -4$: $a(-4 - 3) - 5 = 9 \\\\Rightarrow -7a - 5 = 9 \\\\Rightarrow -7a = 14 \\\\Rightarrow a = -2$.\\n\\n**The Full Solution:**\\nStep 1: Substitute the given solution $x = -4$ into the equation: $a(-4 - 3) - 5 = 9$, which simplifies to $-7a - 5 = 9$.\\nStep 2: Isolate the $a$ term: add $5$ to both sides: $-7a = 14$.\\nStep 3: Divide by $-7$: $a = -2$.\\n\\nVerification: plug $a = -2$ back: $-2(-4 - 3) - 5 = -2(-7) - 5 = 14 - 5 = 9$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($-2$): correct.\\n* Choice B ($-\\\\tfrac{2}{7}$): forgets to add $5$ before dividing: $-7a = 9 \\\\Rightarrow a = -\\\\tfrac{9}{7}$, or otherwise mis-arithmetics into a $\\\\tfrac{2}{7}$ shape. A 'stops one step early' error.\\n* Choice C ($\\\\tfrac{2}{7}$): same shape as B with the wrong sign — applies the sign flip incorrectly when dividing by $-7$.\\n* Choice D ($2$): sign error on the division step — divides $14$ by $-7$ as if dividing by $+7$.\\n\\n**Test Day Takeaway:** When given a specific solution to an equation with an unknown parameter, substitute the solution in and solve for the parameter. Do all required arithmetic on BOTH sides before isolating the parameter; sign on the divisor is the most common slip.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
    },
  ],

  'advancedMath.js': [
    {
      id: 'bank-am-039',
      block: `  { id: 'bank-am-039', domain: 'advanced-math', skills: ['exponent-laws'], difficulty: 'medium', type: 'fill-in',
    question: 'For all positive values of $x$, the equation $\\\\dfrac{x^{2a + 3}}{x^a} = x^{12}$ holds. What is the value of $a$?',
    correctAnswer: '9',
    explanation: "**SAT Pattern: Exponent Laws — Quotient Rule + Solve**\\n\\n**The correct answer is $9$.**\\n\\n**The Fast Way (~10s):** Quotient rule: $\\\\dfrac{x^{2a + 3}}{x^a} = x^{(2a + 3) - a} = x^{a + 3}$. Set $a + 3 = 12 \\\\Rightarrow a = 9$.\\n\\n**The Full Solution:**\\nStep 1: Apply the quotient rule for exponents: $\\\\dfrac{x^m}{x^n} = x^{m - n}$.\\n$\\\\quad \\\\dfrac{x^{2a + 3}}{x^a} = x^{(2a + 3) - a} = x^{a + 3}$.\\nStep 2: Equate the exponents (valid because the equation holds for ALL $x > 0$, not just $x = 0$ or $x = 1$):\\n$\\\\quad a + 3 = 12 \\\\Rightarrow a = 9$.\\n\\nVerification: $\\\\dfrac{x^{2(9) + 3}}{x^9} = \\\\dfrac{x^{21}}{x^9} = x^{12}$ \\\\checkmark.\\n\\n**Common Mistakes:** Reporting $5$ (gets the right equation $a + 3 = 12$ but solves $a + 3 = 8$ by mis-reading the exponent on the right); reporting $12$ (substitutes the target exponent for $a$ directly); reporting $6$ (mis-applies the quotient rule as $2a + 3 - a = 12$ but solves arithmetic-wrong).\\n\\n**Test Day Takeaway:** Quotient rule: $\\\\dfrac{x^m}{x^n} = x^{m - n}$ — SUBTRACT exponents when dividing same-base powers. The 'for all positive $x$' clause is what lets you equate exponents on both sides.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponent-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
    },
  ],

  'geometry.js': [
    {
      id: 'bank-geo-047',
      block: `  { id: 'bank-geo-047', domain: 'geometry', skills: ['soh-cah-toa', 'pythagorean-theorem'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A surveyor stands at horizontal distance $d$ meters from the base of a cliff. The angle of elevation from the surveyor to the top of the cliff is $\\\\alpha$, where $\\\\tan(\\\\alpha) = 0.5$. The surveyor then walks $50$ meters DIRECTLY TOWARD the cliff. From the new position, the angle of elevation to the top of the cliff is $\\\\beta$, where $\\\\tan(\\\\beta) = 1$. What is the height, in meters, of the cliff?',
    choices: [{ id: 'A', text: '$25$' }, { id: 'B', text: '$50$' }, { id: 'C', text: '$100$' }, { id: 'D', text: '$150$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Two-Position Elevation (System of Two Tangents)**\\n\\n**Choice B is correct.**\\n\\n**The Fast Way (~45s):** Let cliff height be $h$. From position 1: $h = d \\\\tan(\\\\alpha) = 0.5d$. From position 2 (closer by $50$): $h = (d - 50) \\\\tan(\\\\beta) = d - 50$. Equate: $0.5d = d - 50 \\\\Rightarrow 50 = 0.5d \\\\Rightarrow d = 100$. So $h = 0.5(100) = 50$.\\n\\n**The Full Solution:**\\nStep 1: At the first position, the tangent equation gives the cliff height as a function of $d$:\\n$\\\\quad h = d \\\\cdot \\\\tan(\\\\alpha) = 0.5d$.\\nStep 2: After walking $50$ m closer, the new horizontal distance is $d - 50$:\\n$\\\\quad h = (d - 50) \\\\cdot \\\\tan(\\\\beta) = (d - 50)(1) = d - 50$.\\nStep 3: The cliff height is the same in both expressions. Equate:\\n$\\\\quad 0.5d = d - 50$\\n$\\\\quad -0.5d = -50$\\n$\\\\quad d = 100$ meters.\\nStep 4: Substitute back into either expression: $h = 0.5(100) = 50$ meters.\\n\\nVerification: from $d = 100$, $\\\\tan(\\\\alpha) = 50/100 = 0.5$ \\\\checkmark; from $d - 50 = 50$, $\\\\tan(\\\\beta) = 50/50 = 1$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($25$): mis-arithmetic in the substitution step — divides $d$ by $4$ instead of $2$.\\n* Choice B ($50$): correct.\\n* Choice C ($100$): reports the HORIZONTAL DISTANCE $d$, not the cliff height $h$. A 'stops one step early' error.\\n* Choice D ($150$): adds $d$ and $50$ (or mis-reads the walking direction as 'away from' rather than 'toward'), confusing the geometry.\\n\\n**Test Day Takeaway:** When an observer moves and the angle of elevation changes, the cliff height is the SAME for both observations. Write one tangent equation per position, set them equal, solve for the unknown horizontal distance, then back-substitute to get the height.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'double-angle-elevation', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
    },
    {
      id: 'bank-geo-172',
      block: `  { id: 'bank-geo-172', domain: 'geometry', skills: ['soh-cah-toa'], difficulty: 'medium', type: 'fill-in',
    question: 'A right triangle has perimeter $30$ and one leg of length $5$. If $\\\\theta$ is the smaller acute angle of the triangle, what is the value of $\\\\sin(\\\\theta)$? Express your answer as a fraction.',
    correctAnswer: '5/13',
    explanation: "**SAT Pattern: Right Triangle Trig — Perimeter Constraint to Sides**\\n\\n**The correct answer is $5/13$.**\\n\\n**The Fast Way (~30s):** Let other leg $= b$, hypotenuse $= c$. Perimeter: $5 + b + c = 30 \\\\Rightarrow b + c = 25$. Pythagorean: $25 + b^2 = c^2 \\\\Rightarrow c^2 - b^2 = 25 \\\\Rightarrow (c - b)(c + b) = 25 \\\\Rightarrow (c - b)(25) = 25 \\\\Rightarrow c - b = 1$. So $c = 13$ and $b = 12$. The 5-12-13 right triangle. Smaller acute angle is opposite the SHORTER leg (5): $\\\\sin(\\\\theta) = 5/13$.\\n\\n**The Full Solution:**\\nStep 1: Use the perimeter to relate the unknown leg $b$ and hypotenuse $c$:\\n$\\\\quad 5 + b + c = 30 \\\\Rightarrow b + c = 25$.\\nStep 2: Use the Pythagorean theorem:\\n$\\\\quad 5^2 + b^2 = c^2 \\\\Rightarrow c^2 - b^2 = 25$.\\nStep 3: Factor the difference of squares: $(c - b)(c + b) = 25$. Substitute $b + c = 25$:\\n$\\\\quad (c - b)(25) = 25 \\\\Rightarrow c - b = 1$.\\nStep 4: Solve the system $b + c = 25$ and $c - b = 1$: adding gives $2c = 26 \\\\Rightarrow c = 13$; subtracting gives $b = 12$. Sides: $5$, $12$, $13$ (Pythagorean triple).\\nStep 5: The smaller acute angle is opposite the shorter leg ($5$). $\\\\sin(\\\\theta) = \\\\text{opposite}/\\\\text{hypotenuse} = 5/13$.\\n\\n**Common Mistakes:** Reporting $12/13$ (sine of the LARGER acute angle, opposite the leg of length $12$); reporting $5/12$ (tangent rather than sine); reporting $5/25$ (treats the perimeter $25$ as the hypotenuse).\\n\\n**Test Day Takeaway:** Perimeter + one side + right triangle = enough info to find all sides via Pythagorean theorem. The factoring trick $(c - b)(c + b) = c^2 - b^2$ pairs nicely with the perimeter constraint.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'right-triangle-trigonometry-with-perimeter', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
    },
  ],

  'problemSolving.js': [
    {
      id: 'bank-ps-195',
      block: `  { id: 'bank-ps-195', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'hard', type: 'fill-in',
    question: 'Three years ago, a town had a population of $N$ people. In the first year, the population increased by $10\\\\%$. In the second year, it increased by $20\\\\%$ from its end-of-first-year value. In the third year, it decreased by $25\\\\%$ from its end-of-second-year value. If the current population is $9{,}900$, what is the value of $N$?',
    correctAnswer: '10000',
    explanation: "**SAT Pattern: Compound Percent Change — Reverse to Find Original**\\n\\n**The correct answer is $10{,}000$.**\\n\\n**The Fast Way (~30s):** Combined multiplier: $1.10 \\\\cdot 1.20 \\\\cdot 0.75 = 0.99$. So $0.99 N = 9{,}900 \\\\Rightarrow N = 10{,}000$.\\n\\n**The Full Solution:**\\nMulti-step percent changes COMPOUND multiplicatively. Convert each change to a multiplier:\\n* $+10\\\\%$ → multiply by $1.10$\\n* $+20\\\\%$ → multiply by $1.20$\\n* $-25\\\\%$ → multiply by $0.75$\\n\\nCombined multiplier:\\n$\\\\quad 1.10 \\\\cdot 1.20 \\\\cdot 0.75 = 1.32 \\\\cdot 0.75 = 0.99$.\\n\\nSet up the equation: $0.99 \\\\cdot N = 9{,}900$. Solve: $N = 10{,}000$.\\n\\nVerification: $10{,}000 \\\\cdot 1.10 = 11{,}000$; $11{,}000 \\\\cdot 1.20 = 13{,}200$; $13{,}200 \\\\cdot 0.75 = 9{,}900$ \\\\checkmark.\\n\\n**Common Mistakes:** Adding the percent changes ($+10 + 20 - 25 = +5\\\\%$, gets $N = 9{,}900 / 1.05 \\\\approx 9{,}428.57$ — sign of additive-vs-multiplicative trap); reporting $9{,}900$ (no change applied); reporting $13{,}200$ (the second-year population, not the original).\\n\\n**Test Day Takeaway:** Percent changes compound MULTIPLICATIVELY, not additively. A $+10\\\\%$ followed by a $-10\\\\%$ does NOT net to $0\\\\%$ — it nets to $1.10 \\\\cdot 0.90 = 0.99$, a $1\\\\%$ decrease. Always multiply the multipliers.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-of-a-number', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
    },
    {
      id: 'bank-ps-200',
      block: `  { id: 'bank-ps-200', domain: 'problem-solving', skills: ['percent-change'], difficulty: 'hard', type: 'fill-in',
    question: 'A stock price increases by $25\\\\%$ over the first quarter of the year. In the second quarter, the price decreases by $r\\\\%$, and the price at the end of the second quarter equals the price at the start of the first quarter. What is the value of $r$?',
    correctAnswer: '20',
    explanation: "**SAT Pattern: Compound Percent Change — Solve for the Unknown Rate**\\n\\n**The correct answer is $20$.**\\n\\n**The Fast Way (~25s):** Combined multiplier must equal $1$ (final = original): $1.25 \\\\cdot (1 - r/100) = 1 \\\\Rightarrow 1 - r/100 = 0.80 \\\\Rightarrow r = 20$.\\n\\n**The Full Solution:**\\nLet the original price be $P$. After the first-quarter increase: $1.25 P$. After the second-quarter decrease: $1.25 P \\\\cdot (1 - r/100)$.\\nThe problem states the final price equals the original:\\n$\\\\quad 1.25 P \\\\cdot (1 - r/100) = P$\\nDivide both sides by $P$ (nonzero):\\n$\\\\quad 1.25 \\\\cdot (1 - r/100) = 1$\\n$\\\\quad 1 - r/100 = 1/1.25 = 0.80$\\n$\\\\quad r/100 = 0.20$\\n$\\\\quad r = 20$.\\n\\nVerification: with $r = 20$, the second-quarter multiplier is $0.80$. Combined: $1.25 \\\\cdot 0.80 = 1.00$, so the final equals the original \\\\checkmark.\\n\\n**Common Mistakes:** Reporting $25$ (assumes a $+x\\\\%$ followed by $-x\\\\%$ returns to the original — wrong because of the asymmetry of compounding); reporting $5$ (subtracts the percent changes additively: $25 - r = 0 \\\\Rightarrow r = 25$, then mis-arithmetics down to $5$).\\n\\n**Test Day Takeaway:** A $+25\\\\%$ followed by a $-25\\\\%$ does NOT return to the original — it returns to $1.25 \\\\cdot 0.75 = 0.9375$, a $6.25\\\\%$ net decrease. To 'undo' a percent increase, the matching decrease is SMALLER in percent. Always use the multiplicative form.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-decrease', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
    },
  ],
};

function replaceBlock(src, id, newBlock) {
  const idMarker = `id: '${id}',`;
  const idIdx = src.indexOf(idMarker);
  if (idIdx === -1) return { ok: false, reason: 'id-not-found' };
  let startIdx = -1;
  let cursor = idIdx;
  while (cursor > 0) {
    const back = src.lastIndexOf('\n  {', cursor);
    if (back === -1) break;
    const intervening = src.indexOf('\n  {', back + 1);
    if (intervening !== -1 && intervening < idIdx) { cursor = back - 1; continue; }
    startIdx = back + 1; break;
  }
  if (startIdx === -1) return { ok: false, reason: 'no-item-start' };
  let endIdx = src.indexOf('\n  { id:', startIdx + 1);
  const endIdxMulti = src.indexOf('\n  {\n', startIdx + 1);
  if (endIdxMulti !== -1 && (endIdx === -1 || endIdxMulti < endIdx)) endIdx = endIdxMulti;
  if (endIdx === -1) endIdx = src.indexOf('\n];', startIdx);
  if (endIdx === -1) return { ok: false, reason: 'no-end-marker' };
  return { ok: true, next: src.slice(0, startIdx) + newBlock + src.slice(endIdx) };
}

let totalApplied = 0, totalSkipped = 0;
for (const [file, rewrites] of Object.entries(REWRITES_BY_FILE)) {
  const filePath = path.join(BANK_DIR, file);
  let src = fs.readFileSync(filePath, 'utf8');
  console.log(`\n=== ${file} ===`);
  for (const { id, block } of rewrites) {
    const before = src.length;
    const result = replaceBlock(src, id, block);
    if (!result.ok) { console.log(`SKIP ${id}: ${result.reason}`); totalSkipped++; continue; }
    src = result.next;
    console.log(`OK ${id}: ${before} → ${src.length}`);
    totalApplied++;
  }
  fs.writeFileSync(filePath, src, 'utf8');
}
console.log(`\nTotal: ${totalApplied} applied, ${totalSkipped} skipped.`);
