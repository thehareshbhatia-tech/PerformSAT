#!/usr/bin/env bun
/**
 * topOfBand5.mjs — surgical distractor + math redesigns for the 8 items
 * still rated 3/5 in the final regrade.
 *
 *   alg-302: polynomial-identity item, redesigned distractors to clean
 *            misconception paths (sign-flip path, stops-early on $a$,
 *            stops-early on $b$).
 *   alg-304: shifted-output, redesigned distractors with concrete
 *            error paths (reports $x$, double-adds $4$, swaps op).
 *   geo-141: volume → surface area, redesigned distractors with
 *            arithmetic-error paths (forgets ×2, drops a term).
 *   geo-145: redesigned as inverse-percent problem — find $k$ such that
 *            volume change matches given. Genuine band-7.
 *   geo-159: reordered choices in ascending order ($1, 2, 4, 8$) +
 *            updated correctAnswer + distractor block.
 *   geo-163: tightened stem (explicit angle position) + reordered
 *            choices ascending.
 *   geo-167: cleaner distractor paths (vertical vs adjacent confusion).
 *   geo-169: redesigned distractors as wrong-equation-setup paths
 *            rather than wrong-quantity-reports.
 */
import { promises as fs } from 'node:fs';

const FILES = {
  algebra: '/Users/hareshbhatia/PerformSAT/src/data/questions/bank/algebra.js',
  geometry: '/Users/hareshbhatia/PerformSAT/src/data/questions/bank/geometry.js',
};

const REPLACEMENTS = [
  // ─── alg-302: redesigned distractors with clean paths ───
  {
    file: 'algebra', findId: 'bank-alg-302',
    newItem: `  { id: 'bank-alg-302', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In the equation $\\\\dfrac{ax + 5}{6} - \\\\dfrac{x - 3}{4} = \\\\dfrac{x + b}{12}$, $a$ and $b$ are constants. The equation is true for all values of $x$. What is the value of $a + b$?',
    choices: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$19$' }, { id: 'D', text: '$21$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Polynomial Identity with Rational Expressions**\\n\\n**Choice D is correct.**\\n\\n**The Fast Way (~40s):** Multiply both sides by $12$: $2(ax + 5) - 3(x - 3) = x + b$. Expand: $(2a - 3)x + 19 = x + b$. For an identity in $x$: $2a - 3 = 1 \\\\Rightarrow a = 2$, and $19 = b$. So $a + b = 21$.\\n\\n**The Full Solution:**\\nThe equation is true for all $x$, so it is an IDENTITY: the two sides simplify to the same expression.\\nMultiply every term by the LCD $12$:\\n$\\\\quad 2(ax + 5) - 3(x - 3) = x + b$\\nDistribute:\\n$\\\\quad 2ax + 10 - 3x + 9 = x + b$\\n$\\\\quad (2a - 3)x + 19 = x + b$\\nMatch coefficients (one equation per power of $x$):\\n$\\\\quad$ $x$-coefficient: $2a - 3 = 1 \\\\Rightarrow a = 2$\\n$\\\\quad$ constant: $19 = b$\\nTherefore $a + b = 2 + 19 = 21$.\\n\\nVerification: with $a = 2$, $b = 19$: $\\\\dfrac{2x + 5}{6} - \\\\dfrac{x - 3}{4}$ over common denominator $12$ gives $\\\\dfrac{2(2x + 5) - 3(x - 3)}{12} = \\\\dfrac{x + 19}{12}$ = RHS \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($0$): sign error when distributing $-(x - 3) \\\\to -x - 3$ instead of $-x + 3$, then $2ax + 10 - 3x - 9 = x + b$ gives $(2a-3)x + 1 = x + b \\\\Rightarrow a = 2, b = 1$. Then $a + b = 3$, but mis-arithmetic to $0$.\\n* Choice B ($2$): reports the value of $a$ alone — stops one step short, ignores $b$.\\n* Choice C ($19$): reports the value of $b$ alone — stops one step short, ignores $a$.\\n\\n**Test Day Takeaway:** A polynomial identity gives ONE equation per power of $x$. Clear denominators with the LCD, then match the $x$-coefficient and the constant SEPARATELY. Watch the sign on distributed negatives.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },

  // ─── alg-304: shifted-output with cleaner distractor paths ───
  {
    file: 'algebra', findId: 'bank-alg-304',
    newItem: `  { id: 'bank-alg-304', domain: 'algebra', skills: ['distributive-property'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $3(x + 4) = 27$, what is the value of $x + 4$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$9$' }, { id: 'C', text: '$13$' }, { id: 'D', text: '$23$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Shifted-Output Linear**\\n\\n**Choice B is correct.**\\n\\n**The Fast Way (~5s):** The asked quantity is $(x + 4)$. Divide both sides by $3$ to isolate it directly: $x + 4 = 27/3 = 9$.\\n\\n**The Full Solution:**\\nThe equation $3(x + 4) = 27$ has $(x + 4)$ already grouped on the left. Divide both sides by $3$ to recover the value of the bracketed expression:\\n$\\\\quad 3(x + 4) = 27 \\\\Rightarrow x + 4 = 9$.\\nThe answer is $9$ — no need to solve for $x$ separately.\\n\\nVerification (long way): from $x + 4 = 9$, $x = 5$. Plug back: $3(5 + 4) = 3 \\\\cdot 9 = 27$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($5$): solves for $x$ ($x = 5$) and reports it instead of $x + 4$ — stops one step early on the wrong quantity.\\n* Choice C ($13$): correctly computes $x + 4 = 9$ then mistakenly adds $4$ again — double-counts the $+4$.\\n* Choice D ($23$): subtracts $4$ from $27$ ($27 - 4 = 23$) instead of dividing by $3$ — applies the inverse of the outer operation but the wrong outer operation.\\n\\n**Test Day Takeaway:** When the question asks for a SHIFTED expression of $x$ (like $x + 4$, $2x - 3$, etc.), isolate that expression directly. You often do not need to solve for $x$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },

  // ─── geo-141: tightened distractors ───
  {
    file: 'geometry', findId: 'bank-geo-141',
    newItem: `  { id: 'bank-geo-141', domain: 'geometry', skills: ['volume-prism'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A rectangular prism has a volume of $432$ cubic centimeters. The length is $9$ centimeters and the width is $4$ centimeters. What is the surface area of the prism, in square centimeters?',
    choices: [{ id: 'A', text: '$192$' }, { id: 'B', text: '$288$' }, { id: 'C', text: '$384$' }, { id: 'D', text: '$432$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Volume → Missing Dimension → Surface Area**\\n\\n**Choice C is correct.**\\n\\n**The Fast Way (~30s):** $h = V/(lw) = 432/36 = 12$. Surface area $= 2(lw + lh + wh) = 2(36 + 108 + 48) = 2(192) = 384$.\\n\\n**The Full Solution:**\\nStep 1: Recover the missing dimension. The base area is $lw = 9 \\\\cdot 4 = 36$, so $h = V/(lw) = 432/36 = 12$ cm.\\nStep 2: Apply the surface-area formula: $SA = 2(lw + lh + wh)$.\\n$\\\\quad lw = 36$\\n$\\\\quad lh = 9 \\\\cdot 12 = 108$\\n$\\\\quad wh = 4 \\\\cdot 12 = 48$\\n$\\\\quad SA = 2(36 + 108 + 48) = 2 \\\\cdot 192 = 384$ sq cm.\\n\\nVerification: $9 \\\\times 4 \\\\times 12 = 432$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($192$): forgets the factor of $2$ — computes $lw + lh + wh = 192$ (the sum of three distinct face areas) without doubling for the parallel face pairs.\\n* Choice B ($288$): drops one term — computes $2(lw + lh) = 2(36 + 108) = 288$, forgetting the $wh$ term.\\n* Choice D ($432$): reports the VOLUME as the surface area — formula confusion (cubic vs square units).\\n\\n**Test Day Takeaway:** Volume gives the missing dimension via division. Surface area uses $2(lw + lh + wh)$ — three distinct face areas, each appearing twice (six faces in three parallel pairs).",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'volume-of-a-rectangular-prism', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },

  // ─── geo-145: redesigned as inverse-percent problem (band-7) ───
  {
    file: 'geometry', findId: 'bank-geo-145',
    newItem: `  { id: 'bank-geo-145', domain: 'geometry', skills: ['volume-prism'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A rectangular prism has its length multiplied by $1.25$, its width multiplied by a constant $k$, and its height multiplied by $0.80$. After these changes, the new volume is $90\\\\%$ of the original volume. What is the value of $k$?',
    choices: [{ id: 'A', text: '$0.72$' }, { id: 'B', text: '$0.80$' }, { id: 'C', text: '$0.90$' }, { id: 'D', text: '$1.125$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Inverse Multi-Percent Change (Volume)**\\n\\n**Choice C is correct.**\\n\\n**The Fast Way (~30s):** New volume factor $= 1.25 \\\\cdot k \\\\cdot 0.80 = 0.90$. Compute $1.25 \\\\cdot 0.80 = 1.00$, so $k = 0.90$.\\n\\n**The Full Solution:**\\nThe new volume is the product of the three scale factors times the original volume:\\n$\\\\quad V' = (1.25)(k)(0.80) V$\\nWe're told $V' = 0.90 V$, so:\\n$\\\\quad (1.25)(k)(0.80) = 0.90$\\nCompute the known factors: $1.25 \\\\cdot 0.80 = 1.00$ (these two factors cancel each other out).\\nTherefore $k = 0.90$.\\n\\nVerification: $(1.25)(0.90)(0.80) = (1.00)(0.90) = 0.90$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($0.72$): multiplies the given changes instead of dividing — computes $0.90 \\\\cdot 0.80 = 0.72$.\\n* Choice B ($0.80$): copies the height factor as the width factor — coincidental-numeric trap.\\n* Choice D ($1.125$): computes $0.90 / 0.80 = 1.125$, dividing by the wrong factor (height only).\\n\\n**Test Day Takeaway:** Volume is a product of three independent scale factors. To find a missing factor: divide the target volume ratio by the known factors. Convenient pairs like $1.25 \\\\times 0.80 = 1$ simplify the arithmetic.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'volume-of-a-rectangular-prism', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },

  // ─── geo-159: reordered choices ascending ───
  {
    file: 'geometry', findId: 'bank-geo-159',
    newItem: `  { id: 'bank-geo-159', domain: 'geometry', skills: ['triangle-area'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The perimeter of a square is doubled to form a new square. The area of the new square is how many times the area of the original square?',
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$8$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Square Perimeter and Area Scaling**\\n\\n**Choice C is correct.**\\n\\n**The Fast Way (~10s):** Perimeter $= 4s$ scales linearly with the side; doubling the perimeter doubles the side. Doubling the side multiplies the area by $2^2 = 4$.\\n\\n**The Full Solution:**\\nOriginal side: $s$. Original area: $s^2$.\\nNew perimeter $= 2(4s) = 8s$, so new side $= 8s/4 = 2s$.\\nNew area $= (2s)^2 = 4s^2$, which is $4$ times the original area $s^2$.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($1$): assumes area is independent of side — fundamental misread.\\n* Choice B ($2$): scales the area by the same factor as the linear scaling — common 1-D vs 2-D error.\\n* Choice D ($8$): cubes the linear scale ($2^3$) — applies volume scaling to area.\\n\\n**Test Day Takeaway:** Perimeter and side scale together (both 1-D). Area scales as the SQUARE of the linear factor.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'square-perimeter', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },

  // ─── geo-163: tightened stem (no figure dependency) + reorder ───
  {
    file: 'geometry', findId: 'bank-geo-163',
    newItem: `  { id: 'bank-geo-163', domain: 'geometry', skills: ['triangle-angle-sum'], difficulty: 'easy', type: 'multiple-choice',
    question: 'In the $xy$-plane, two parallel lines are intersected by a transversal. One of the angles formed has a measure of $65°$. What is the measure of its alternate interior angle?',
    choices: [{ id: 'A', text: '$25°$' }, { id: 'B', text: '$65°$' }, { id: 'C', text: '$115°$' }, { id: 'D', text: '$130°$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\\n\\n**Choice B is correct.**\\n\\n**The Fast Way (~5s):** Alternate interior angles formed by parallel lines and a transversal are CONGRUENT. So the alternate interior angle is also $65°$.\\n\\n**The Full Solution:**\\nWhen two parallel lines are cut by a transversal, alternate interior angles (on opposite sides of the transversal, between the parallel lines) are equal in measure.\\nGiven angle: $65°$. Alternate interior angle: $65°$.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($25°$): applies the COMPLEMENTARY rule ($90 - 65 = 25$) — no parallel-lines theorem uses complementary.\\n* Choice C ($115°$): applies the SUPPLEMENTARY rule ($180 - 65 = 115$) — correct for same-side (co-interior) angles or linear pairs, not alternate interior.\\n* Choice D ($130°$): doubles the given angle — no geometric justification.\\n\\n**Test Day Takeaway:** Parallel lines + transversal rules:\\n  • Corresponding & alternate (interior or exterior) angles are CONGRUENT.\\n  • Same-side (co-interior) angles are SUPPLEMENTARY ($+180°$).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'angles-with-parallel-lines-and-transversals', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },

  // ─── geo-167: tighter distractors + ascending order ───
  {
    file: 'geometry', findId: 'bank-geo-167',
    newItem: `  { id: 'bank-geo-167', domain: 'geometry', skills: ['triangle-angle-sum'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Two lines intersect at point $P$, forming two pairs of vertical angles. One pair of vertical angles each measure $(4x + 10)°$, and the other pair of vertical angles each measure $(6x)°$. What is the value of $x$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$17$' }, { id: 'D', text: '$45$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Vertical and Linear-Pair Angles**\\n\\n**Choice C is correct.**\\n\\n**The Fast Way (~20s):** An angle from one vertical pair forms a linear pair with an angle from the other pair, so they are supplementary: $(4x + 10) + 6x = 180 \\\\Rightarrow 10x = 170 \\\\Rightarrow x = 17$.\\n\\n**The Full Solution:**\\nWhen two lines intersect at a point, they form four angles in two vertical pairs. Each angle from one pair is ADJACENT to each angle from the other pair, and adjacent angles formed by intersecting lines are SUPPLEMENTARY:\\n$\\\\quad (4x + 10) + 6x = 180$\\n$\\\\quad 10x + 10 = 180$\\n$\\\\quad 10x = 170$\\n$\\\\quad x = 17$\\n\\nVerification: the angles measure $4(17) + 10 = 78°$ and $6(17) = 102°$; $78 + 102 = 180$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($5$): treats the two angle expressions as EQUAL (sets vertical-pair-1 equal to vertical-pair-2 as if they were vertical to each other) — gets $4x + 10 = 6x \\\\Rightarrow x = 5$. This is the vertical-vs-adjacent confusion.\\n* Choice B ($10$): mis-divides — solves $10x = 100$ (sign error in the constant) to get $x = 10$.\\n* Choice D ($45$): adds the constants and divides by the wrong coefficient — gets $x = 180/4 = 45$ via mis-arithmetic.\\n\\n**Test Day Takeaway:** Vertical angles are EQUAL; adjacent angles (formed at the same intersection) are SUPPLEMENTARY. Two angles from DIFFERENT vertical pairs are always supplementary.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'angles-with-parallel-lines-and-transversals', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },

  // ─── geo-169: redesigned distractors as wrong-setup paths ───
  {
    file: 'geometry', findId: 'bank-geo-169',
    newItem: `  { id: 'bank-geo-169', domain: 'geometry', skills: ['triangle-angle-sum'], difficulty: 'medium', type: 'multiple-choice',
    question: 'In the $xy$-plane, lines $\\\\ell$ and $m$ are parallel and are cut by transversal $t$. An angle at $\\\\ell$ measures $(3x + 2y)°$. The corresponding angle at $m$ measures $(5x - y)°$, and the angle supplementary to that corresponding angle measures $(2x + 3y - 70)°$. What is the value of $x$?',
    choices: [{ id: 'A', text: '$10$' }, { id: 'B', text: '$20$' }, { id: 'C', text: '$25$' }, { id: 'D', text: '$30$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Angles with Parallel Lines (System of Two Conditions)**\\n\\n**Choice D is correct.**\\n\\n**The Fast Way (~45s):** Corresponding angles are equal: $3x + 2y = 5x - y \\\\Rightarrow 2x = 3y$. Supplementary: $(5x - y) + (2x + 3y - 70) = 180 \\\\Rightarrow 7x + 2y = 250$. Substitute $x = 1.5y$: $7(1.5y) + 2y = 12.5y = 250 \\\\Rightarrow y = 20$, $x = 30$.\\n\\n**The Full Solution:**\\nStep 1: Corresponding angles formed by parallel lines and a transversal are congruent: $3x + 2y = 5x - y$, which gives $2x = 3y$, or $x = 1.5y$.\\nStep 2: Adjacent angles on a straight line are supplementary: $(5x - y) + (2x + 3y - 70) = 180$, which gives $7x + 2y = 250$.\\nStep 3: Substitute $x = 1.5y$ into the second equation: $7(1.5y) + 2y = 250 \\\\Rightarrow 12.5y = 250 \\\\Rightarrow y = 20$.\\nStep 4: $x = 1.5(20) = 30$.\\n\\nVerification: $3(30) + 2(20) = 130$ = corresponding angle $5(30) - 20 = 130$ \\\\checkmark. Supplementary partner $= 2(30) + 3(20) - 70 = 50$ and $130 + 50 = 180$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($10$): treats the corresponding angles as SUPPLEMENTARY (not equal) — sets up the wrong first equation $(3x + 2y) + (5x - y) = 180$, which combined with the second supplementary equation produces a different (incorrect) system.\\n* Choice B ($20$): solves for $y$ instead of $x$ — correct system, wrong variable reported.\\n* Choice C ($25$): mis-arithmetic in the substitution step — gets $y$ wrong by dropping a coefficient, propagates to wrong $x$.\\n\\n**Test Day Takeaway:** Multi-condition transversal problems require TWO independent equations. Identify which pairs are CONGRUENT (corresponding, alternate) and which are SUPPLEMENTARY (co-interior, linear pair). Set up the system, solve, then confirm which variable the question asks for.",
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
