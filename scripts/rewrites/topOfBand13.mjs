#!/usr/bin/env bun
/**
 * topOfBand13.mjs — 2 fails from fresh 50-sample run.
 *
 *   bank-geo-122 (hard triangle-area): currently asks "square area 144,
 *     find perimeter" — trivially easy, and the skill is triangle-area
 *     but the question is about a square. Replace with a genuine hard
 *     triangle-area problem: vertex on a line constraint + area filter.
 *
 *   bank-am-203 (hard exp growth): irrational grid-in (sqrt 3) is awkward
 *     for CB conventions. Replace with a clean integer-factor problem.
 *
 * Run: bun scripts/rewrites/topOfBand13.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BANK_DIR = path.resolve(__dirname, '..', '..', 'src/data/questions/bank');

const REWRITES_BY_FILE = {
  'geometry.js': [
    {
      id: 'bank-geo-122',
      block: `  { id: 'bank-geo-122', domain: 'geometry', skills: ['triangle-area'], difficulty: 'hard', type: 'fill-in',
    question: 'In the $xy$-plane, a triangle has vertices at $A(0, 0)$, $B(6, 0)$, and $C$. The area of the triangle is $15$ square units, and $C$ lies on the line $y = 2x - 3$ in the first quadrant. What is the $x$-coordinate of $C$?',
    correctAnswer: '4',
    explanation: "**SAT Pattern: Triangle Area with a Line Constraint**\\n\\n**The correct answer is $4$.**\\n\\n**The Fast Way (~35s):** Base $AB$ has length $6$ along the $x$-axis. Area $= \\\\tfrac{1}{2} \\\\cdot 6 \\\\cdot y_C = 3 y_C = 15$, so $y_C = 5$. Substitute into $y = 2x - 3$: $5 = 2x - 3 \\\\Rightarrow x = 4$.\\n\\n**The Full Solution:**\\nStep 1: Base $AB$ runs along the $x$-axis from $(0, 0)$ to $(6, 0)$, so its length is $6$ and the corresponding height of the triangle from $C$ is $|y_C|$ (the vertical distance from $C$ down to the base).\\nStep 2: Use the triangle-area formula: $\\\\tfrac{1}{2} \\\\cdot \\\\text{base} \\\\cdot \\\\text{height} = \\\\tfrac{1}{2} \\\\cdot 6 \\\\cdot |y_C| = 3 |y_C| = 15$. So $|y_C| = 5$.\\nStep 3: $C$ is in the first quadrant, so $y_C > 0$ and $y_C = 5$.\\nStep 4: $C$ lies on $y = 2x - 3$: substitute $y_C = 5$ to get $5 = 2x_C - 3 \\\\Rightarrow x_C = 4$.\\n\\nVerification: $C = (4, 5)$ is on the line ($5 = 2(4) - 3$ \\\\checkmark) and in the first quadrant. Triangle area: $\\\\tfrac{1}{2} \\\\cdot 6 \\\\cdot 5 = 15$ \\\\checkmark.\\n\\n**Common Mistakes:** Reporting $5$ (the $y$-coordinate, not the $x$-coordinate); reporting $-1$ (the other intersection of the area condition with the line, which lies in the third quadrant — filtered out by the 'first quadrant' constraint); reporting $1.5$ (forgets the $\\\\tfrac{1}{2}$ factor in the area formula and solves $6 y_C = 15$).\\n\\n**Test Day Takeaway:** Coordinate-plane triangle area problems often combine the area formula with a line constraint. Set up the height from the area, then use the line equation to find the coordinate. Quadrant constraints filter between two possible solutions.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'rectangle-area', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
    },
  ],

  'advancedMath.js': [
    {
      id: 'bank-am-203',
      block: `  { id: 'bank-am-203', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'hard', type: 'fill-in',
    question: 'The function $f$ defined by $f(t) = 50 \\\\cdot 4^{t/3}$ models a quantity that grows over time $t$, where $t$ is measured in days. By what factor does the quantity grow over a period of $9$ days?',
    correctAnswer: '64',
    explanation: "**SAT Pattern: Exponential Growth Factor over a Period**\\n\\n**The correct answer is $64$.**\\n\\n**The Fast Way (~15s):** $\\\\dfrac{f(9)}{f(0)} = \\\\dfrac{50 \\\\cdot 4^{9/3}}{50 \\\\cdot 4^0} = 4^{3} = 64$.\\n\\n**The Full Solution:**\\nThe 'factor by which the quantity grows' over a period from $t_1$ to $t_2$ is $f(t_2)/f(t_1)$. The leading constant $50$ cancels.\\n$\\\\quad \\\\dfrac{f(9)}{f(0)} = \\\\dfrac{50 \\\\cdot 4^{9/3}}{50 \\\\cdot 4^{0/3}} = 4^{9/3 - 0} = 4^3 = 64$.\\n\\nVerification: $f(0) = 50$, $f(9) = 50 \\\\cdot 4^3 = 50 \\\\cdot 64 = 3{,}200$. Ratio: $3{,}200 / 50 = 64$ \\\\checkmark.\\n\\n**Common Mistakes:** Reporting $9$ (the time interval, not the growth factor); reporting $4$ (the base of the exponential, not the factor over $9$ days); reporting $12$ (incorrectly computes $4 \\\\cdot 9/3$ instead of $4^{9/3}$); reporting $3$ (reports the divisor in the exponent).\\n\\n**Test Day Takeaway:** For $f(t) = a \\\\cdot b^{t/k}$, the growth factor over a period of $n$ time units is $b^{n/k}$. The leading constant $a$ never affects the growth factor — it scales the absolute values, not their ratio. The key step is reducing the exponent: $9/3 = 3$, so $4^{9/3} = 4^3 = 64$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-interpretation', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
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
