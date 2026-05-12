#!/usr/bin/env bun
/**
 * topOfBand10.mjs — final attempt at bank-am-034.
 *
 * Rater rejected "partial sums" distractor pattern (asking for $a + h + k$).
 * Switch the QUESTION TYPE: extract vertex + intercepts → reconstruct $f$ →
 * evaluate at a non-trivial point. Distractors trace to concrete computational
 * misconceptions, not "reports a/h/k alone."
 *
 * Run: bun scripts/rewrites/topOfBand10.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BANK_DIR = path.resolve(__dirname, '..', '..', 'src/data/questions/bank');

const REWRITES_BY_FILE = {
  'advancedMath.js': [
    {
      id: 'bank-am-034',
      block: `  { id: 'bank-am-034', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In the $xy$-plane, the graph of $y = f(x)$ is a parabola with vertex $(2, 9)$. The parabola intersects the $x$-axis at $x = -1$ and $x = 5$. What is the value of $f(-3)$?',
    choices: [{ id: 'A', text: '$-25$' }, { id: 'B', text: '$-16$' }, { id: 'C', text: '$0$' }, { id: 'D', text: '$9$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Vertex Form from Vertex + Intercepts**\\n\\n**Choice B is correct.**\\n\\n**The Fast Way (~40s):** Vertex form $f(x) = a(x - 2)^2 + 9$. Plug in the intercept $x = -1$: $a(9) + 9 = 0 \\\\Rightarrow a = -1$. So $f(x) = -(x - 2)^2 + 9$. Then $f(-3) = -(-5)^2 + 9 = -25 + 9 = -16$.\\n\\n**The Full Solution:**\\nStep 1: Write $f$ in vertex form using the vertex $(2, 9)$.\\n$\\\\quad f(x) = a(x - 2)^2 + 9$.\\nStep 2: Use one $x$-intercept to solve for $a$. At $x = -1$, $f(-1) = 0$:\\n$\\\\quad a(-1 - 2)^2 + 9 = 0$\\n$\\\\quad 9a + 9 = 0$\\n$\\\\quad a = -1$.\\nStep 3: Substitute $a$: $f(x) = -(x - 2)^2 + 9$.\\nStep 4: Evaluate at $x = -3$:\\n$\\\\quad f(-3) = -(-3 - 2)^2 + 9 = -(-5)^2 + 9 = -25 + 9 = -16$.\\n\\nVerification: the other intercept should also satisfy $f(5) = -(3)^2 + 9 = 0$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($-25$): correctly computes $-(-3 - 2)^2 = -25$ but forgets to add $k = 9$. The vertex form has a final additive term that is easy to drop.\\n* Choice B ($-16$): correct.\\n* Choice C ($0$): mistakes $-3$ for an $x$-intercept (perhaps confusing the symmetry: $-3$ is the reflection of $7$ across $x = 2$, not of an intercept). $f$ equals zero only at $x = -1$ and $x = 5$.\\n* Choice D ($9$): reports the MAXIMUM value of $f$ (the $y$-coordinate of the vertex) rather than the value at the specific input $x = -3$.\\n\\n**Test Day Takeaway:** When given the vertex and one other point on a parabola, vertex form $f(x) = a(x - h)^2 + k$ lets you read $(h, k)$ directly and solve for $a$ in one step. Then evaluate carefully: the $-(x - 2)^2$ piece is negative for ALL $x \\\\ne 2$, while the $+ 9$ piece is constant — track both.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'factored-to-standard', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
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
