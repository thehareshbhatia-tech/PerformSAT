#!/usr/bin/env bun
/**
 * topOfBand1.mjs — top-of-band rewrites for the 3 critical items rated ≤ 2/5
 * by the codex grader.
 *
 *   bank-am-180  (easy, exponential-growth-decay)  overall=1
 *     BUG: Choice D ($50 \cdot 4^2 = 800$) equals Choice A ($800$).
 *     FIX: Replace D with $1600$ (off-by-one upward) and reverse-direction
 *          stem twist (period-doubling) to lift to band-3 ceiling.
 *
 *   bank-alg-310 (hard, linear-equation-with-distribution)  overall=2
 *     Original was a single-step distribute-then-solve. Band-3 at best.
 *     FIX: Re-design as a parameter-inference item — coefficient matching
 *          for infinite-solutions condition. Real band-7 hard.
 *
 *   bank-geo-169 (hard, parallel-lines-transversal)  overall=2
 *     Original was a single supplementary-angles equation.
 *     FIX: Multi-step item chaining alternate-interior + supplementary +
 *          algebraic solve. Real band-7 hard.
 *
 * Run:
 *   bun scripts/rewrites/topOfBand1.mjs --dry
 *   bun scripts/rewrites/topOfBand1.mjs
 */

import { promises as fs } from 'node:fs';

const FILES = {
  algebra: '/Users/hareshbhatia/PerformSAT/src/data/questions/bank/algebra.js',
  advancedMath: '/Users/hareshbhatia/PerformSAT/src/data/questions/bank/advancedMath.js',
  geometry: '/Users/hareshbhatia/PerformSAT/src/data/questions/bank/geometry.js',
};

const REPLACEMENTS = [
  // ─── bank-am-180 ─── full redesign + bug fix
  {
    file: 'advancedMath',
    findId: 'bank-am-180',
    newItem: `  { id: 'bank-am-180', domain: 'advanced-math', skills: ['exponential-growth-decay'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A bacteria culture begins with $50$ bacteria, and the number of bacteria in the culture doubles every $2$ hours. What is the number of bacteria in the culture after $8$ hours?',
    choices: [{ id: 'A', text: '$800$' }, { id: 'B', text: '$200$' }, { id: 'C', text: '$400$' }, { id: 'D', text: '$1{,}600$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Exponential Growth Model**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~10s):** In $8$ hours there are $8/2 = 4$ doubling periods. $50 \\\\cdot 2^4 = 50 \\\\cdot 16 = 800$.\\n\\n**The Full Solution:**\\nThe doubling period is $2$ hours, so in $8$ hours the population doubles $8/2 = 4$ times.\\n$P(8) = 50 \\\\cdot 2^4 = 50 \\\\cdot 16 = 800$.\\n\\nVerification: at $t = 2$, $P = 100$. At $t = 4$, $P = 200$. At $t = 6$, $P = 400$. At $t = 8$, $P = 800$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($200$): assumes the doubling period is $1$ hour and stops at $t = 2$ — uses $50 \\\\cdot 2^2$, or equivalently treats \\"every $2$ hours\\" as the elapsed time.\\n* Choice C ($400$): off-by-one — counts $3$ doublings instead of $4$ ($50 \\\\cdot 2^3$).\\n* Choice D ($1{,}600$): off-by-one in the other direction — counts $5$ doublings instead of $4$, or treats $8$ hours as the exponent: $50 \\\\cdot 2^5$.\\n\\n**Test Day Takeaway:** When the doubling period is not $1$ unit, the exponent is (elapsed time) / (doubling period), not the elapsed time itself.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'exponential-growth-model', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },

  // ─── bank-alg-310 ─── full redesign (parameter-inference for infinite-solutions)
  {
    file: 'algebra',
    findId: 'bank-alg-310',
    newItem: `  { id: 'bank-alg-310', domain: 'algebra', skills: ['distributive-property'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In the equation $a(x + 5) - 2(x - 3) = 4x + c$, $a$ and $c$ are constants. If the equation has infinitely many solutions, what is the value of $a + c$?',
    choices: [{ id: 'A', text: '$42$' }, { id: 'B', text: '$6$' }, { id: 'C', text: '$36$' }, { id: 'D', text: '$30$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Equation with Distribution**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~30s):** Distribute the LHS: $(a - 2)x + (5a + 6)$. For infinitely many solutions, both sides must be identical: $a - 2 = 4 \\\\Rightarrow a = 6$; $5a + 6 = c \\\\Rightarrow c = 36$. So $a + c = 42$.\\n\\n**The Full Solution:**\\nDistribute and simplify the left side: $a(x + 5) - 2(x - 3) = ax + 5a - 2x + 6 = (a - 2)x + (5a + 6)$.\\nThe right side is $4x + c$.\\nFor the equation to have infinitely many solutions, the coefficients of $x$ must match AND the constant terms must match:\\n$\\\\quad a - 2 = 4 \\\\Rightarrow a = 6$\\n$\\\\quad 5a + 6 = c \\\\Rightarrow 5(6) + 6 = c \\\\Rightarrow c = 36$\\nTherefore, $a + c = 6 + 36 = 42$.\\n\\nVerification: with $a = 6, c = 36$: LHS $= 6(x + 5) - 2(x - 3) = 6x + 30 - 2x + 6 = 4x + 36$ = RHS \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($6$): reports the value of $a$ alone — stops one step early before computing $c$.\\n* Choice C ($36$): reports the value of $c$ alone — stops one step early before computing $a$.\\n* Choice D ($30$): sign error on the constant equation — uses $5a - 6 = c \\\\Rightarrow c = 24$, then $a + c = 30$.\\n\\n**Test Day Takeaway:** Infinitely many solutions means the equation is an IDENTITY: the two sides simplify to the same expression. Match the $x$-coefficient and the constant SEPARATELY.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },

  // ─── bank-geo-169 ─── full redesign (multi-step transversal)
  {
    file: 'geometry',
    findId: 'bank-geo-169',
    newItem: `  { id: 'bank-geo-169', domain: 'geometry', skills: ['triangle-angle-sum'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In the $xy$-plane, lines $\\\\ell_1$ and $\\\\ell_2$ are parallel and are intersected by a transversal. The transversal forms an angle with $\\\\ell_1$ that measures $(4y + 8)°$. The angle that is alternate interior to that angle (at $\\\\ell_2$) and another angle at $\\\\ell_2$ form a straight line, and the other angle measures $(2y + 28)°$. What is the value of $y$?',
    choices: [{ id: 'A', text: '$24$' }, { id: 'B', text: '$26$' }, { id: 'C', text: '$12$' }, { id: 'D', text: '$36$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~30s):** Alternate interior angles are equal, so the angle at $\\\\ell_2$ alternate to the given $(4y + 8)°$ angle also measures $(4y + 8)°$. Since this angle and $(2y + 28)°$ form a straight line, they sum to $180°$: $(4y + 8) + (2y + 28) = 180 \\\\Rightarrow 6y + 36 = 180 \\\\Rightarrow y = 24$.\\n\\n**The Full Solution:**\\nStep 1: When parallel lines are cut by a transversal, alternate interior angles are congruent. So the angle at $\\\\ell_2$ that is alternate interior to the $(4y + 8)°$ angle also measures $(4y + 8)°$.\\nStep 2: That angle and the $(2y + 28)°$ angle form a straight line on $\\\\ell_2$, so they are supplementary:\\n$\\\\quad (4y + 8) + (2y + 28) = 180$\\n$\\\\quad 6y + 36 = 180$\\n$\\\\quad 6y = 144$\\n$\\\\quad y = 24$\\n\\nVerification: the two angles measure $4(24) + 8 = 104°$ and $2(24) + 28 = 76°$. Sum: $104 + 76 = 180$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($26$): assumes the two angles are EQUAL instead of supplementary — solves $4y + 8 = 2y + 28 \\\\Rightarrow 2y = 20 \\\\Rightarrow y = 10$, then mis-arithmetic to $26$.\\n* Choice C ($12$): drops the constant $36$ when dividing — uses $6y = 72 \\\\Rightarrow y = 12$ via a sign error on the constant term.\\n* Choice D ($36$): reports the wrong intermediate value — $144/4 = 36$, dividing by the wrong coefficient.\\n\\n**Test Day Takeaway:** Multi-step transversal problems chain together: alternate-interior (equal) → linear pair (supplementary). Identify each relationship before writing equations.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'angles-with-parallel-lines-and-transversals', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
];

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry');

  // Group by file
  const byFile = new Map();
  for (const r of REPLACEMENTS) {
    if (!byFile.has(r.file)) byFile.set(r.file, []);
    byFile.get(r.file).push(r);
  }

  let applied = 0;
  let skipped = 0;

  for (const [fileKey, reps] of byFile) {
    const filePath = FILES[fileKey];
    let src = await fs.readFile(filePath, 'utf8');

    for (const r of reps) {
      // Find item start
      const startIdx = src.indexOf(`{ id: '${r.findId}',`);
      if (startIdx === -1) { console.log(`SKIP ${r.findId}: not found`); skipped++; continue; }
      // Find item end (createdAt line)
      let pos = startIdx + 100;
      let endIdx = -1;
      while (pos < startIdx + 4000 && pos < src.length) {
        const candidate = src.indexOf('createdAt:', pos);
        if (candidate === -1) break;
        const after = src.slice(candidate, candidate + 100);
        const m = after.match(/^createdAt:\s*'[\d-]+'\s*\},?/);
        if (m) { endIdx = candidate + m[0].length; break; }
        pos = candidate + 1;
      }
      if (endIdx === -1) { console.log(`SKIP ${r.findId}: end not found`); skipped++; continue; }
      // Start should be on a line that begins with "  { id:" — back up to the line start
      const lineStart = src.lastIndexOf('\n', startIdx) + 1;
      // End should consume up to the end of the line that has createdAt
      const lineEnd = src.indexOf('\n', endIdx);

      if (dryRun) {
        console.log(`[dry] ${r.findId}: ${lineEnd - lineStart} → ${r.newItem.length} chars`);
      } else {
        src = src.slice(0, lineStart) + r.newItem + src.slice(lineEnd);
        console.log(`OK   ${r.findId}: ${lineEnd - lineStart} → ${r.newItem.length} chars`);
      }
      applied++;
    }

    if (!dryRun) await fs.writeFile(filePath, src);
  }

  console.log('');
  console.log(`${dryRun ? '[DRY] ' : ''}${applied} top-of-band rewrites applied, ${skipped} skipped.`);
}

main().catch(e => { console.error(e); process.exit(1); });
