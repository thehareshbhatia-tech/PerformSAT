#!/usr/bin/env bun
/**
 * topOfBand14.mjs — 2 upgrades for short-stemmed hard items surfaced
 * by the band-calibration audit.
 *
 * Codex is offline (rate-limit reset 2026-05-19). These upgrades aren't
 * grader-validated, but they follow patterns the rater has accepted in
 * prior batches: multi-step setup, concrete distractor misconceptions.
 *
 *   bank-am-059 (hard distributive, 46-char stem):
 *     OLD: "Which expression is equivalent to $(x + 2)^3$?" — single
 *     binomial expansion, mechanical band-3 work.
 *     NEW: $(x + 2)^3 = ax^3 + bx^2 + cx + d$; find $a - b + c - d$.
 *     Tests the CB-style $f(-1)$ substitution trick. Distractors trace
 *     to natural slip points (computing the full expansion, sign on $-1$,
 *     reporting only one coefficient).
 *
 *   bank-alg-216 (hard slope-intercept, 52-char stem):
 *     OLD: "What is the y-intercept of $3y - x = 15$?" — 1-step
 *     rearrangement, easy-band-2 work.
 *     NEW: 2-line intersection problem requiring rearrangement +
 *     perpendicular slope + system-solving.
 *
 * Run: bun scripts/rewrites/topOfBand14.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BANK_DIR = path.resolve(__dirname, '..', '..', 'src/data/questions/bank');

const REWRITES_BY_FILE = {
  'advancedMath.js': [
    {
      id: 'bank-am-059',
      block: `  { id: 'bank-am-059', domain: 'advanced-math', skills: ['distributive-property'], difficulty: 'hard', type: 'multiple-choice',
    question: 'For all values of $x$, the equation $(x + 2)^3 = ax^3 + bx^2 + cx + d$ is true, where $a$, $b$, $c$, and $d$ are constants. What is the value of $a - b + c - d$?',
    choices: [{ id: 'A', text: '$-27$' }, { id: 'B', text: '$-1$' }, { id: 'C', text: '$1$' }, { id: 'D', text: '$27$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Alternating-Sign Coefficient Sum via $f(-1)$**\\n\\n**Choice B is correct.**\\n\\n**The Fast Way (~10s):** Let $f(x) = ax^3 + bx^2 + cx + d$. Then $f(-1) = a(-1)^3 + b(-1)^2 + c(-1) + d = -a + b - c + d$, so $a - b + c - d = -f(-1)$. Since $f(x) = (x + 2)^3$, $f(-1) = (-1 + 2)^3 = 1$, and $a - b + c - d = -1$.\\n\\n**The Full Solution:**\\nMethod 1 (substitution shortcut):\\n$f(-1) = -a + b - c + d$, so $-f(-1) = a - b + c - d$.\\nCompute directly: $f(-1) = (-1 + 2)^3 = 1^3 = 1$.\\nTherefore $a - b + c - d = -1$.\\n\\nMethod 2 (full expansion):\\n$(x + 2)^3 = x^3 + 6x^2 + 12x + 8$, so $a = 1$, $b = 6$, $c = 12$, $d = 8$.\\n$a - b + c - d = 1 - 6 + 12 - 8 = -1$.\\n\\nVerification: $-1 = -(1)^3 = -f(-1)$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($-27$): computes $-(1 + 2)^3 = -27$ — substitutes $x = 1$ (gives $a + b + c + d$, not the alternating sign) and then sign-flips.\\n* Choice B ($-1$): correct.\\n* Choice C ($1$): correctly identifies $f(-1) = 1$ but forgets to negate ($f(-1)$ gives $-a + b - c + d$, not $a - b + c - d$).\\n* Choice D ($27$): computes $(1 + 2)^3 = 27$ — substitutes $x = 1$, gives $a + b + c + d$ instead.\\n\\n**Test Day Takeaway:** For 'sum of coefficients' style questions, plug in $x = 1$ to get $a + b + c + d = f(1)$. For 'alternating-sign sum', plug in $x = -1$ to get $-a + b - c + d = f(-1)$. Watch the sign relationship between $f(-1)$ and the specific alternating combination the question asks for.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'cube-of-binomial', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
    },
  ],

  'algebra.js': [
    {
      id: 'bank-alg-216',
      block: `  { id: 'bank-alg-216', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In the $xy$-plane, line $\\\\ell$ has equation $y - 2x = 5$. Line $m$ is perpendicular to $\\\\ell$ and passes through the origin. What is the $y$-coordinate of the point where lines $\\\\ell$ and $m$ intersect?',
    choices: [{ id: 'A', text: '$-2$' }, { id: 'B', text: '$0$' }, { id: 'C', text: '$1$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Perpendicular Line + Intersection**\\n\\n**Choice C is correct.**\\n\\n**The Fast Way (~40s):** Slope of $\\\\ell$ is $2$, so slope of $m$ (perpendicular) is $-1/2$. Line $m$ through origin: $y = -x/2$. Intersect: $-x/2 = 2x + 5 \\\\Rightarrow -5x/2 = 5 \\\\Rightarrow x = -2$. Then $y = -(-2)/2 = 1$.\\n\\n**The Full Solution:**\\nStep 1: Rewrite $\\\\ell$ in slope-intercept form: $y - 2x = 5 \\\\Rightarrow y = 2x + 5$. Slope of $\\\\ell$ is $2$.\\nStep 2: Perpendicular slopes are negative reciprocals: slope of $m$ is $-1/2$.\\nStep 3: $m$ passes through the origin, so its equation is $y = -x/2$.\\nStep 4: Set the two equations equal to find the intersection:\\n$\\\\quad -x/2 = 2x + 5$\\n$\\\\quad -x/2 - 2x = 5$\\n$\\\\quad -5x/2 = 5$\\n$\\\\quad x = -2$.\\nStep 5: Substitute $x = -2$ into either equation: $y = -(-2)/2 = 1$ (or $y = 2(-2) + 5 = 1$).\\n\\nVerification: $(-2, 1)$ is on $\\\\ell$: $1 - 2(-2) = 5$ \\\\checkmark. It is on $m$: $1 = -(-2)/2$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($-2$): reports the $x$-coordinate of the intersection instead of the $y$-coordinate.\\n* Choice B ($0$): reports the $y$-coordinate at the ORIGIN ($m$ passes through the origin, but the intersection is somewhere else).\\n* Choice C ($1$): correct.\\n* Choice D ($5$): reports the $y$-intercept of line $\\\\ell$ (the value when $x = 0$), confusing 'intercept of $\\\\ell$' with 'intersection of $\\\\ell$ and $m$'.\\n\\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals. To find a line through the origin perpendicular to a given line, take the negative reciprocal of the given slope and write $y = (\\\\text{slope})\\\\cdot x$. To find the intersection, set the two line equations equal and solve.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-from-rearranged-form', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
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
