#!/usr/bin/env bun
/**
 * topOfBand9.mjs — 2 stragglers from topOfBand8.
 *
 *   bank-am-034: vertex-form question scored 3 — "too easy for hard, one weak
 *                distractor". Replace with a 2-step vertex-+-point-substitution
 *                problem; $a+h+k$ with clean integer answer.
 *
 *   bank-ps-219: discount complement scored 3 — "too easy, weak distractor".
 *                Replace with reverse-discount (find original price from sale).
 *
 * Run: bun scripts/rewrites/topOfBand9.mjs
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
    question: 'The function $f$, defined by $f(x) = a(x - h)^2 + k$, where $a$, $h$, and $k$ are constants, has its vertex at the point $(3, -4)$ and passes through the point $(1, 8)$. What is the value of $a + h + k$?',
    choices: [{ id: 'A', text: '$-4$' }, { id: 'B', text: '$-1$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$6$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Vertex Form from Vertex + Point**\\n\\n**Choice C is correct.**\\n\\n**The Fast Way (~35s):** The vertex $(h, k)$ gives $h = 3$, $k = -4$. Use the point $(1, 8)$: $a(1 - 3)^2 - 4 = 8 \\\\Rightarrow 4a = 12 \\\\Rightarrow a = 3$. So $a + h + k = 3 + 3 + (-4) = 2$.\\n\\n**The Full Solution:**\\nStep 1: Read the vertex coordinates directly into the form $f(x) = a(x - h)^2 + k$. The vertex is $(3, -4)$, so $h = 3$ and $k = -4$.\\nStep 2: Substitute the point $(1, 8)$ to solve for $a$.\\n$\\\\quad f(1) = a(1 - 3)^2 + (-4) = 8$\\n$\\\\quad a(4) - 4 = 8$\\n$\\\\quad 4a = 12$\\n$\\\\quad a = 3$\\nStep 3: $a + h + k = 3 + 3 + (-4) = 2$.\\n\\nVerification: $f(x) = 3(x - 3)^2 - 4$. At $x = 1$: $3(4) - 4 = 8$ \\\\checkmark. At $x = 3$: $0 - 4 = -4$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($-4$): reports $k$ alone (the $y$-coordinate of the vertex). Stops at the first read-off, forgetting to find $a$ and sum.\\n* Choice B ($-1$): reports $a + k = 3 + (-4) = -1$. Forgets to include $h$ in the sum.\\n* Choice C ($2$): correct.\\n* Choice D ($6$): reports $a + h = 3 + 3 = 6$. Forgets to include $k$ in the sum.\\n\\n**Test Day Takeaway:** Vertex form $a(x - h)^2 + k$ reads the vertex directly: $(h, k)$. To find $a$, substitute any non-vertex point. After solving for all three constants, always re-read the prompt — questions often ask for a SUM or DIFFERENCE of constants, not any one of them alone.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'factored-to-standard', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
    },
  ],

  'problemSolving.js': [
    {
      id: 'bank-ps-219',
      block: `  { id: 'bank-ps-219', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A jacket is on sale for $\\\\$64$, which represents a $20\\\\%$ discount off the original price. What was the original price of the jacket, in dollars?',
    choices: [{ id: 'A', text: '$\\\\$51.20$' }, { id: 'B', text: '$\\\\$76.80$' }, { id: 'C', text: '$\\\\$80$' }, { id: 'D', text: '$\\\\$320$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Reverse Percent (Find Original from Sale)**\\n\\n**Choice C is correct.**\\n\\n**The Fast Way (~15s):** Sale price $= 80\\\\%$ of original: $0.80 \\\\cdot P = 64 \\\\Rightarrow P = 64 / 0.80 = 80$.\\n\\n**The Full Solution:**\\nA $20\\\\%$ discount means the sale price is $100\\\\% - 20\\\\% = 80\\\\%$ of the original price $P$:\\n$\\\\quad 0.80 \\\\cdot P = 64$\\n$\\\\quad P = 64 / 0.80 = 80$.\\n\\nVerification: $80 \\\\cdot 0.20 = 16$ (discount), $80 - 16 = 64$ (sale price) \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($\\\\$51.20$): applies the $20\\\\%$ discount AGAIN to the sale price ($64 \\\\cdot 0.80 = 51.20$) — treats $64$ as if it were the original, not the discounted price.\\n* Choice B ($\\\\$76.80$): adds $20\\\\%$ to the sale price ($64 \\\\cdot 1.20 = 76.80$) — applies a markup of $20\\\\%$ instead of reversing the discount. Markups and discounts are NOT inverses of each other.\\n* Choice C ($\\\\$80$): correct.\\n* Choice D ($\\\\$320$): divides by the discount percent ($64 / 0.20 = 320$) instead of by the surviving fraction ($0.80$).\\n\\n**Test Day Takeaway:** To reverse a discount, divide the sale price by the COMPLEMENT of the discount (the surviving fraction). A $20\\\\%$ discount means the sale is $80\\\\%$ of the original, so divide by $0.80$, not by $0.20$, and not by $1.20$. The 'add back' shortcut works only for simple-interest style increases, not for percent discounts.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-complement', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
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
    if (intervening !== -1 && intervening < idIdx) {
      cursor = back - 1;
      continue;
    }
    startIdx = back + 1;
    break;
  }
  if (startIdx === -1) return { ok: false, reason: 'no-item-start' };

  let endIdx = src.indexOf('\n  { id:', startIdx + 1);
  const endIdxMulti = src.indexOf('\n  {\n', startIdx + 1);
  if (endIdxMulti !== -1 && (endIdx === -1 || endIdxMulti < endIdx)) endIdx = endIdxMulti;
  if (endIdx === -1) endIdx = src.indexOf('\n];', startIdx);
  if (endIdx === -1) return { ok: false, reason: 'no-end-marker' };

  return { ok: true, next: src.slice(0, startIdx) + newBlock + src.slice(endIdx) };
}

let totalApplied = 0;
let totalSkipped = 0;
for (const [file, rewrites] of Object.entries(REWRITES_BY_FILE)) {
  const filePath = path.join(BANK_DIR, file);
  let src = fs.readFileSync(filePath, 'utf8');
  console.log(`\n=== ${file} ===`);
  for (const { id, block } of rewrites) {
    const before = src.length;
    const result = replaceBlock(src, id, block);
    if (!result.ok) {
      console.log(`SKIP ${id}: ${result.reason}`);
      totalSkipped++;
      continue;
    }
    src = result.next;
    console.log(`OK ${id}: ${before} → ${src.length}`);
    totalApplied++;
  }
  fs.writeFileSync(filePath, src, 'utf8');
}
console.log(`\nTotal: ${totalApplied} applied, ${totalSkipped} skipped.`);
