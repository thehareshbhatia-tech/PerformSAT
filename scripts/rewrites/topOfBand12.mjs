#!/usr/bin/env bun
/**
 * topOfBand12.mjs — 3 still-stuck items from topOfBand11.
 *
 *   bank-alg-306 (medium distributive): distractors "too reciprocal-clustered"
 *     → diversify distractor numerics; use $5(x - a) = 25$ template.
 *   bank-geo-047 (hard double elevation): regressed to 2; distractors weak
 *     → change problem type entirely: given sin θ + adjacent, find height.
 *       This trades on a real CB-hard trap (sin vs tan from a ratio).
 *   bank-ps-195 (hard percent-of-value): "too procedural"
 *     → algebra-flavored: compare this-year vs last-year salary, given
 *       percent difference and absolute difference. Forces system setup.
 *
 * Run: bun scripts/rewrites/topOfBand12.mjs
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
    question: 'The equation $5(x - a) = 25$ has solution $x = 3$, where $a$ is a constant. What is the value of $a$?',
    choices: [{ id: 'A', text: '$-5$' }, { id: 'B', text: '$-2$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Solve for a Parameter Given a Solution**\\n\\n**Choice B is correct.**\\n\\n**The Fast Way (~15s):** Substitute $x = 3$: $5(3 - a) = 25 \\\\Rightarrow 3 - a = 5 \\\\Rightarrow -a = 2 \\\\Rightarrow a = -2$.\\n\\n**The Full Solution:**\\nStep 1: Substitute $x = 3$ into the equation: $5(3 - a) = 25$.\\nStep 2: Divide both sides by $5$: $3 - a = 5$.\\nStep 3: Isolate $a$: $-a = 2$, so $a = -2$.\\n\\nVerification: with $a = -2$: $5(3 - (-2)) = 5(5) = 25$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($-5$): reports the value of the right-hand side after dividing ($25/5 = 5$), then sign-flips. A 'stops at the intermediate quotient' error.\\n* Choice B ($-2$): correct.\\n* Choice C ($2$): subtracts in the wrong direction: $a = 5 - 3 = 2$ instead of $a = 3 - 5 = -2$.\\n* Choice D ($5$): reports $25/5 = 5$ directly as $a$, treating the intermediate quotient as the final answer.\\n\\n**Test Day Takeaway:** When a problem gives an equation with a parameter and a specific solution, substitute the solution and solve for the parameter. Watch the direction of subtraction — $3 - a$ is not the same as $a - 3$. Divide before distributing when the RHS is divisible by the leading coefficient.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
    },
  ],

  'geometry.js': [
    {
      id: 'bank-geo-047',
      block: `  { id: 'bank-geo-047', domain: 'geometry', skills: ['soh-cah-toa', 'pythagorean-theorem'], difficulty: 'hard', type: 'multiple-choice',
    question: 'From a point on the ground that is $200$ feet from the base of a building, the angle of elevation to the top of the building is $\\\\theta$, where $\\\\sin(\\\\theta) = \\\\dfrac{3}{5}$. What is the height of the building, in feet?',
    choices: [{ id: 'A', text: '$120$' }, { id: 'B', text: '$150$' }, { id: 'C', text: '$160$' }, { id: 'D', text: '$250$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Recover Tangent from Sine (3-4-5 Triple)**\\n\\n**Choice B is correct.**\\n\\n**The Fast Way (~30s):** $\\\\sin(\\\\theta) = \\\\tfrac{3}{5}$ means the triangle is a $3$-$4$-$5$ (opposite $= 3$, hypotenuse $= 5$, so adjacent $= 4$). Therefore $\\\\tan(\\\\theta) = \\\\tfrac{3}{4}$. Height $= 200 \\\\cdot \\\\tan(\\\\theta) = 200 \\\\cdot \\\\tfrac{3}{4} = 150$.\\n\\n**The Full Solution:**\\nStep 1: $\\\\sin(\\\\theta) = \\\\dfrac{\\\\text{opposite}}{\\\\text{hypotenuse}} = \\\\dfrac{3}{5}$. Use the Pythagorean theorem to find the adjacent side: $a^2 + 3^2 = 5^2 \\\\Rightarrow a = 4$. So the reference triangle is the $3$-$4$-$5$ right triangle.\\nStep 2: $\\\\tan(\\\\theta) = \\\\dfrac{\\\\text{opposite}}{\\\\text{adjacent}} = \\\\dfrac{3}{4}$.\\nStep 3: For elevation problems, $\\\\tan(\\\\theta) = \\\\dfrac{\\\\text{height}}{\\\\text{horizontal distance}}$. So:\\n$\\\\quad \\\\text{height} = 200 \\\\cdot \\\\dfrac{3}{4} = 150$ feet.\\n\\nVerification: with adjacent $= 200$ and opposite $= 150$, the hypotenuse is $\\\\sqrt{200^2 + 150^2} = \\\\sqrt{40{,}000 + 22{,}500} = \\\\sqrt{62{,}500} = 250$. Then $\\\\sin(\\\\theta) = 150/250 = 3/5$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($120$): applies $\\\\sin(\\\\theta) = \\\\tfrac{3}{5}$ as if it were $\\\\tan$: $200 \\\\cdot \\\\tfrac{3}{5} = 120$. The sine-vs-tangent trap — sine relates opposite to HYPOTENUSE, not to the adjacent leg.\\n* Choice B ($150$): correct.\\n* Choice C ($160$): applies $\\\\cos(\\\\theta) = \\\\tfrac{4}{5}$ instead of $\\\\tan(\\\\theta)$: $200 \\\\cdot \\\\tfrac{4}{5} = 160$. Cosine-vs-tangent trap.\\n* Choice D ($250$): reports the HYPOTENUSE of the reference triangle, scaled to the problem ($200 \\\\cdot \\\\tfrac{5}{4} = 250$). Confuses hypotenuse with opposite (height).\\n\\n**Test Day Takeaway:** Sine, cosine, and tangent each use DIFFERENT side ratios. For 'angle of elevation' problems, the horizontal distance is the ADJACENT side, so use $\\\\tan$ to find the height. If only $\\\\sin$ or $\\\\cos$ is given, recover the third side from the Pythagorean theorem (or recognize the Pythagorean triple) and convert to $\\\\tan$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'double-angle-elevation', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
    },
  ],

  'problemSolving.js': [
    {
      id: 'bank-ps-195',
      block: `  { id: 'bank-ps-195', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'hard', type: 'fill-in',
    question: 'A worker\\\\'s salary this year is $25\\\\%$ higher than last year\\\\'s salary. If this year\\\\'s salary is $\\\\$5{,}000$ greater than last year\\\\'s salary, what is the worker\\\\'s salary this year, in dollars?',
    correctAnswer: '25000',
    explanation: "**SAT Pattern: Percent Relationship + Absolute Difference (System)**\\n\\n**The correct answer is $25{,}000$.**\\n\\n**The Fast Way (~25s):** $25\\\\%$ of last = $\\\\$5{,}000$, so last $= 5{,}000 / 0.25 = \\\\$20{,}000$. This year $= 20{,}000 + 5{,}000 = \\\\$25{,}000$.\\n\\n**The Full Solution:**\\nLet $L$ be last year's salary and $T$ be this year's salary.\\nThe two conditions translate to two equations:\\n$\\\\quad T = 1.25 L$ (percent relationship — this year is $25\\\\%$ HIGHER, so multiplier is $1.25$).\\n$\\\\quad T = L + 5{,}000$ (absolute relationship — this year exceeds last year by $\\\\$5{,}000$).\\n\\nSet them equal: $1.25 L = L + 5{,}000$.\\nSolve: $0.25 L = 5{,}000 \\\\Rightarrow L = 20{,}000$.\\nThen $T = 1.25 \\\\cdot 20{,}000 = 25{,}000$.\\n\\nVerification: $25{,}000 - 20{,}000 = 5{,}000$ ($\\\\$5{,}000$ difference \\\\checkmark); $25{,}000 / 20{,}000 = 1.25$ ($25\\\\%$ higher \\\\checkmark).\\n\\n**Common Mistakes:** Reporting $20{,}000$ (the LAST-year salary instead of this year's); reporting $6{,}250$ (computes $5{,}000 \\\\cdot 1.25$ — applies the percent to the wrong base); reporting $4{,}000$ (applies $20\\\\%$ instead of $25\\\\%$).\\n\\n**Test Day Takeaway:** When a problem gives both a percent relationship AND an absolute difference, set up two equations in two variables (last year, this year). The percent difference is between the two; the absolute difference connects them additively. Solve the linear system, then double-check which variable the question asks for.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-of-a-number', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
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
