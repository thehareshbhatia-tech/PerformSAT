#!/usr/bin/env bun
/**
 * topOfBand15.mjs — 2 more band-calibration upgrades from the audit.
 *
 * Codex still offline (limit resets 2026-05-19). These upgrades follow
 * patterns the rater has accepted in prior batches.
 *
 *   bank-alg-215 (hard slope-intercept, 67-char stem):
 *     OLD: "A line is graphed as $2y = 6x + 10$. What is the slope?"
 *     — 1-step rearrangement, mechanical band-2.
 *     NEW: line + reflection across x-axis → find slope of reflected line.
 *     Multi-step: rearrange, identify slope, apply transformation.
 *
 *   bank-am-040 (hard exponent-laws, 69-char stem):
 *     OLD: "Which expression equivalent to (12 x^5 y^-2)/(4 x^-1 y^3)?"
 *     — 4-rule mechanical simplification.
 *     NEW: parameter inference — find a + b given the simplified result.
 *     Multi-step: simplify, match coefficients, sum.
 *
 * Run: bun scripts/rewrites/topOfBand15.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BANK_DIR = path.resolve(__dirname, '..', '..', 'src/data/questions/bank');

const REWRITES_BY_FILE = {
  'algebra.js': [
    {
      id: 'bank-alg-215',
      block: `  { id: 'bank-alg-215', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In the $xy$-plane, line $\\\\ell$ is graphed by the equation $2y = 6x + 10$. Line $m$ is the reflection of line $\\\\ell$ across the $x$-axis. What is the slope of line $m$?',
    choices: [{ id: 'A', text: '$-3$' }, { id: 'B', text: '$-\\\\dfrac{1}{3}$' }, { id: 'C', text: '$\\\\dfrac{1}{3}$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Slope of a Reflected Line**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~25s):** Slope of $\\\\ell$: $2y = 6x + 10 \\\\Rightarrow y = 3x + 5$, slope $= 3$. Reflection across the $x$-axis negates every $y$-value, which flips the sign of the slope. Slope of $m = -3$.\\n\\n**The Full Solution:**\\nStep 1: Rewrite $\\\\ell$ in slope-intercept form. Divide both sides by $2$: $y = 3x + 5$. The slope of $\\\\ell$ is $3$.\\nStep 2: Reflection across the $x$-axis maps each point $(x, y)$ to $(x, -y)$. So if $(x, y)$ satisfies $y = 3x + 5$, the reflected point $(x, -y)$ satisfies $-y = 3x + 5$, or equivalently $y = -3x - 5$. The slope of $m$ is $-3$.\\n\\nAlternative: two points on $\\\\ell$ are $(0, 5)$ and $(1, 8)$. Their reflections are $(0, -5)$ and $(1, -8)$. Slope $= \\\\dfrac{-8 - (-5)}{1 - 0} = -3$.\\n\\nVerification: $m$: $y = -3x - 5$. Both lines pass through $(x, \\\\pm 5)$ at $x = 0$, and the $y$-coordinates flip sign \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($-3$): correct.\\n* Choice B ($-1/3$): applies the PERPENDICULAR-line rule (negative reciprocal) instead of the reflection rule. Perpendicular ≠ reflection across the $x$-axis.\\n* Choice C ($1/3$): just takes the reciprocal of the original slope, losing the sign change.\\n* Choice D ($3$): reports the slope of $\\\\ell$ unchanged. Forgets that reflection across the $x$-axis flips the sign of slope.\\n\\n**Test Day Takeaway:** Reflection across the $x$-axis negates the $y$-values of every point, which negates the slope: $m' = -m$. Reflection across the $y$-axis negates $x$-values and ALSO negates the slope. Reflection across $y = x$ INVERTS the slope ($m' = 1/m$). Don't confuse with perpendicular slopes (negative reciprocals).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-from-rearranged-form', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
    },
  ],

  'advancedMath.js': [
    {
      id: 'bank-am-040',
      block: `  { id: 'bank-am-040', domain: 'advanced-math', skills: ['exponent-laws'], difficulty: 'hard', type: 'multiple-choice',
    question: 'For all positive values of $x$ and $y$, the equation $\\\\dfrac{12 x^a y^b}{4 x^{-1} y^3} = 3 x^6 y^{-5}$ is true, where $a$ and $b$ are constants. What is the value of $a + b$?',
    choices: [{ id: 'A', text: '$-7$' }, { id: 'B', text: '$-2$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Match Coefficients After Exponent Simplification**\\n\\n**Choice C is correct.**\\n\\n**The Fast Way (~30s):** Simplify LHS: $\\\\dfrac{12 x^a y^b}{4 x^{-1} y^3} = 3 x^{a + 1} y^{b - 3}$. Match exponents with $3 x^6 y^{-5}$: $a + 1 = 6 \\\\Rightarrow a = 5$; $b - 3 = -5 \\\\Rightarrow b = -2$. So $a + b = 5 + (-2) = 3$.\\n\\n**The Full Solution:**\\nStep 1: Apply the quotient rule for exponents on each variable: $\\\\dfrac{x^a}{x^{-1}} = x^{a - (-1)} = x^{a + 1}$ and $\\\\dfrac{y^b}{y^3} = y^{b - 3}$. The coefficient is $12/4 = 3$.\\nLHS simplified: $3 x^{a + 1} y^{b - 3}$.\\nStep 2: Match each piece to the RHS $3 x^6 y^{-5}$:\\n$\\\\quad a + 1 = 6 \\\\Rightarrow a = 5$.\\n$\\\\quad b - 3 = -5 \\\\Rightarrow b = -2$.\\nStep 3: Compute the sum: $a + b = 5 + (-2) = 3$.\\n\\nVerification: with $a = 5$, $b = -2$: $\\\\dfrac{12 x^5 y^{-2}}{4 x^{-1} y^3} = 3 x^{5 - (-1)} y^{-2 - 3} = 3 x^6 y^{-5}$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($-7$): sign-flips both: $a + 1 = -6 \\\\Rightarrow a = -7$ (uses $-6$ instead of $+6$ for the $x$-exponent). Combined with correct $b$, gets $-7 + (-2)$, but reads just $-7$ in confusion.\\n* Choice B ($-2$): reports $b$ alone (stops one step early after solving the $y$-exponent equation).\\n* Choice C ($3$): correct.\\n* Choice D ($5$): reports $a$ alone (stops one step early after solving the $x$-exponent equation).\\n\\n**Test Day Takeaway:** When the equation is given as the SIMPLIFIED form, work backward by reversing the exponent rules. The quotient rule $\\\\dfrac{x^a}{x^b} = x^{a - b}$ gives one equation per variable; pair with the target exponent to solve for each unknown. Always re-read what the question wants — $a$, $b$, $a + b$, or some other combination.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'simplify-exponent-quotient', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
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
