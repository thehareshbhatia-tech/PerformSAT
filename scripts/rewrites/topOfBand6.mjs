#!/usr/bin/env bun
/**
 * topOfBand6.mjs — round 6 surgical fixes for the 3 items still rated 3/5
 * after topOfBand5. Each redesign attacks the specific rater complaint:
 *
 *  - geo-163: rater said "Stem does not specify the given angle is interior."
 *             Difficulty calibration 2/5 (too trivial for even an easy band).
 *             FIX: variable-expression alt-int with explicit interior tagging.
 *             Distractors: stops-at-x, supp-instead-of-equal (smaller / larger).
 *
 *  - geo-167: rater said "Too easy for medium; weak distractor derivations."
 *             FIX: linear-pair (not vertical) setup that forces angle-measure
 *             computation, not just x. Distractors: stops-at-x,
 *             vertical-vs-adjacent confusion, smaller-vs-larger.
 *
 *  - geo-169: rater said "Distractors lack clear, valid misconception paths."
 *             FIX: 2-equation system with a clean integer solution and
 *             concrete misconception derivations for every wrong choice.
 *
 * Run: bun scripts/rewrites/topOfBand6.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BANK_FILE = path.resolve(__dirname, '..', '..', 'src/data/questions/bank/geometry.js');

const REWRITES = [
  // ─────────────────────────────────────────────────────────────────
  // bank-geo-163 — alt-int with variable expressions, interior tagged
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'bank-geo-163',
    block: `  { id: 'bank-geo-163', domain: 'geometry', skills: ['triangle-angle-sum'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Parallel lines $\\\\ell$ and $m$ are cut by a transversal $t$. At the point where $t$ intersects $\\\\ell$, the interior angle (in the region between $\\\\ell$ and $m$) on the right side of $t$ measures $(3x + 10)°$. At the point where $t$ intersects $m$, the alternate interior angle measures $(x + 50)°$. What is the measure, in degrees, of either of these alternate interior angles?',
    choices: [{ id: 'A', text: '$20°$' }, { id: 'B', text: '$70°$' }, { id: 'C', text: '$80°$' }, { id: 'D', text: '$100°$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\\n\\n**Choice B is correct.**\\n\\n**The Fast Way (~20s):** Alternate interior angles formed by parallel lines and a transversal are CONGRUENT. Set the expressions equal: $3x + 10 = x + 50 \\\\Rightarrow 2x = 40 \\\\Rightarrow x = 20$. Plug back: angle $= 3(20) + 10 = 70°$.\\n\\n**The Full Solution:**\\nStep 1: Identify the relationship. The two given angles are alternate interior — on opposite sides of the transversal, both in the interior region between the parallel lines. Alternate interior angles are EQUAL when the cut lines are parallel.\\nStep 2: Set the expressions equal: $3x + 10 = x + 50$.\\nStep 3: Solve: $2x = 40 \\\\Rightarrow x = 20$.\\nStep 4: Substitute back to find the angle measure: $3(20) + 10 = 70°$ (and $20 + 50 = 70°$ \\\\checkmark — both expressions agree).\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($20°$): the value of $x$, not the angle measure. Stops one step early — solves for $x$ correctly but forgets to plug back in.\\n* Choice C ($80°$): treats the alternate interior angles as SUPPLEMENTARY (sum to $180°$) instead of equal. Setup: $(3x + 10) + (x + 50) = 180 \\\\Rightarrow 4x = 120 \\\\Rightarrow x = 30$. Then $x + 50 = 80°$ (the smaller of the two resulting angles).\\n* Choice D ($100°$): same supplementary mistake, but reports the larger resulting angle: $3(30) + 10 = 100°$.\\n\\n**Test Day Takeaway:** Alternate interior angles are EQUAL (not supplementary). The supplementary rule applies to same-side (co-interior) angles and linear pairs. Always plug the solved variable back in if the question asks for an angle measure, not the variable.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'angles-with-parallel-lines-and-transversals', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },

  // ─────────────────────────────────────────────────────────────────
  // bank-geo-167 — linear-pair (NOT vertical) at intersection
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'bank-geo-167',
    block: `  { id: 'bank-geo-167', domain: 'geometry', skills: ['triangle-angle-sum'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Two lines intersect at point $P$. Two of the angles formed at $P$ are a linear pair (not a vertical pair); one measures $(4x + 10)°$ and the other measures $(6x)°$. What is the measure, in degrees, of the LARGER of these two angles?',
    choices: [{ id: 'A', text: '$17$' }, { id: 'B', text: '$30$' }, { id: 'C', text: '$78$' }, { id: 'D', text: '$102$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Vertical and Linear-Pair Angles**\\n\\n**Choice D is correct.**\\n\\n**The Fast Way (~25s):** Linear-pair angles are SUPPLEMENTARY: $(4x + 10) + 6x = 180 \\\\Rightarrow 10x = 170 \\\\Rightarrow x = 17$. The two angles are $4(17) + 10 = 78°$ and $6(17) = 102°$. The larger is $102°$.\\n\\n**The Full Solution:**\\nStep 1: Identify the relationship. A linear pair consists of two adjacent angles whose non-shared rays form a straight line. Linear-pair angles sum to $180°$.\\nStep 2: Set up the equation: $(4x + 10) + 6x = 180$.\\nStep 3: Solve: $10x + 10 = 180 \\\\Rightarrow 10x = 170 \\\\Rightarrow x = 17$.\\nStep 4: Compute both angle measures: $4(17) + 10 = 78°$ and $6(17) = 102°$.\\nStep 5: Verify: $78 + 102 = 180°$ \\\\checkmark.\\nStep 6: The question asks for the LARGER angle: $102°$.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($17$): reports the value of $x$ instead of the angle measure. Stops one step early — solves for $x$ correctly but doesn't substitute back to find the angle.\\n* Choice B ($30$): treats the two given angles as VERTICAL (equal) instead of as a linear pair: $4x + 10 = 6x \\\\Rightarrow x = 5$, then $4(5) + 10 = 30°$. This is the classic vertical-vs-adjacent confusion. Vertical angles ARE equal, but the problem explicitly states these are a linear pair, not a vertical pair.\\n* Choice C ($78$): correct setup and correct $x$, but reports the SMALLER angle ($4x + 10 = 78°$) instead of the larger. Read-the-question error.\\n* Choice D ($102$): correct (larger angle, $6x = 102°$).\\n\\n**Test Day Takeaway:** When two lines intersect, vertical pairs are EQUAL and adjacent pairs are SUPPLEMENTARY. The problem must tell you (or the figure must show) which pair you're dealing with. After solving for $x$, always check what the question is actually asking for — $x$, an angle measure, or a specific one of multiple angles.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'angles-with-parallel-lines-and-transversals', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },

  // ─────────────────────────────────────────────────────────────────
  // bank-geo-169 — 2-equation system with clean integer solution
  //               and concrete misconception derivations
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'bank-geo-169',
    block: `  { id: 'bank-geo-169', domain: 'geometry', skills: ['triangle-angle-sum'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Parallel lines $\\\\ell$ and $m$ are cut by a transversal $t$ at points $A$ and $B$, respectively. At point $A$, two angles formed at line $\\\\ell$ are a linear pair, measuring $(2x + y)°$ and $(x + 8y)°$. At point $B$, the angle corresponding to the $(2x + y)°$ angle measures $(x + 4y)°$. What is the value of $x$?',
    choices: [{ id: 'A', text: '$10$' }, { id: 'B', text: '$30$' }, { id: 'C', text: '$60$' }, { id: 'D', text: '$70$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Angles with Parallel Lines (System of Two Conditions)**\\n\\n**Choice B is correct.**\\n\\n**The Fast Way (~50s):** Linear pair at $A$: $(2x + y) + (x + 8y) = 180 \\\\Rightarrow 3x + 9y = 180 \\\\Rightarrow x + 3y = 60$. Corresponding angles equal: $2x + y = x + 4y \\\\Rightarrow x = 3y$. Substitute: $3y + 3y = 60 \\\\Rightarrow y = 10$, so $x = 30$.\\n\\n**The Full Solution:**\\nStep 1: Linear-pair angles at $A$ are supplementary: $(2x + y) + (x + 8y) = 180$, which simplifies to $3x + 9y = 180$, or $x + 3y = 60$. **[Equation 1]**\\nStep 2: Corresponding angles formed by parallel lines and a transversal are congruent: $2x + y = x + 4y$, which simplifies to $x = 3y$. **[Equation 2]**\\nStep 3: Substitute Eq. 2 into Eq. 1: $3y + 3y = 60 \\\\Rightarrow 6y = 60 \\\\Rightarrow y = 10$.\\nStep 4: $x = 3(10) = 30$.\\n\\nVerification: At $A$, angles are $2(30) + 10 = 70°$ and $30 + 8(10) = 110°$; sum $= 180°$ \\\\checkmark. Corresponding at $B$: $30 + 4(10) = 70°$ — matches the $(2x + y)°$ angle at $A$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($10$): reports $y$ instead of $x$. Correct system, correct values, but the question asks for $x$, not $y$.\\n* Choice C ($60$): treats the corresponding angles as SUPPLEMENTARY instead of equal — uses $(2x + y) + (x + 4y) = 180$ as the second equation. Combined with the correct linear pair, this gives $3x + 5y = 180$ and $x + 3y = 60$. Solving: from Eq. 1 of the wrong system, $x = 60 - 3y$. Substituting into $3x + 5y = 180$: $3(60 - 3y) + 5y = 180 \\\\Rightarrow -4y = 0 \\\\Rightarrow y = 0$. So $x = 60$.\\n* Choice D ($70$): reports the angle measure $(2x + y)°$ instead of $x$. Stops one step early — solves the system correctly, then plugs into $2x + y = 70$ thinking the labeled angle is the final answer.\\n\\n**Test Day Takeaway:** Multi-condition transversal problems need TWO independent equations: one supplementary (linear pair or co-interior), one congruent (corresponding or alternate). Identify each correctly. After solving the system, check what the question actually asks — $x$, $y$, or a labeled angle measure.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'angles-with-parallel-lines-and-transversals', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
];

// ─────────────────────────────────────────────────────────────────────
// Replacement logic
// ─────────────────────────────────────────────────────────────────────
function replaceBlock(src, id, newBlock) {
  // Find the line starting with `  { id: 'bank-geo-XXX',`
  const startIdx = src.indexOf(`  { id: '${id}',`);
  if (startIdx === -1) {
    return { ok: false, reason: `not-found` };
  }
  // Find the closing of this item: look for `\n  { id: 'bank-geo-` (next item)
  // or end-of-array marker `\n];` after this position.
  let endIdx = src.indexOf(`\n  { id: '`, startIdx + 1);
  // If there's no next item, fall back to the closing array marker.
  if (endIdx === -1) {
    endIdx = src.indexOf(`\n];`, startIdx);
  }
  if (endIdx === -1) {
    return { ok: false, reason: `no-end-marker` };
  }
  // Replacement spans [startIdx, endIdx). endIdx already points at the `\n`.
  const before = src.slice(0, startIdx);
  const after = src.slice(endIdx);
  return { ok: true, next: before + newBlock + after };
}

let src = fs.readFileSync(BANK_FILE, 'utf8');
let applied = 0;
let skipped = 0;

for (const { id, block } of REWRITES) {
  const before = src.length;
  const result = replaceBlock(src, id, block);
  if (!result.ok) {
    console.log(`SKIP ${id}: ${result.reason}`);
    skipped++;
    continue;
  }
  src = result.next;
  console.log(`OK ${id}: ${before} → ${src.length}`);
  applied++;
}

fs.writeFileSync(BANK_FILE, src, 'utf8');
console.log(`\n${applied} applied, ${skipped} skipped.`);
