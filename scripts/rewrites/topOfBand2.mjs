#!/usr/bin/env bun
/**
 * topOfBand2.mjs — top-of-band redesigns for 5 items rated 3/5 by the grader.
 *
 * Each pulls the labeled difficulty to its CB band ceiling:
 *   easy   = band-3 (shifted output / multi-step context)
 *   medium = band-5 (parameter inference / 2-step setup)
 *   hard   = band-7 (system / identity condition / multi-constraint)
 *
 *   bank-alg-219 (medium perpendicular-slope)  3 → target ≥4
 *     Was: find slope perpendicular from standard form. Band-3.
 *     Now: find the EQUATION of the perpendicular line through a given
 *          point (slope + intercept derivation). Band-5.
 *
 *   bank-alg-238 (hard matching-coefficients)  3 → target ≥4
 *     Was: $(2x + a)(3x + b) = 6x^2 + 13x + 6$, find $ab$. Band-4.
 *     Now: add integer constraint + ask for $a + b$ (forces solving
 *          the system instead of reading off the constant). Band-6.
 *
 *   bank-alg-308 (medium dist + identity)  3 → target ≥4
 *     Was: solve $6 - 3(x + 1) = 0$. Band-3.
 *     Now: for what $k$ does $k(x+2) - 3 = 4x + ?$ have a unique
 *          solution (specifying a condition). Band-5.
 *
 *   bank-geo-149 (medium circle area→radius)  3 → target ≥4
 *     Was: area $= 36\pi$, find radius. Band-3.
 *     Now: a circle's area equals the area of a square of side 6.
 *          Find the radius. Band-5 (intermediate step).
 *
 *   bank-geo-167 (medium vertical angles)  3 → target ≥4
 *     Was: vertical angle of $115°$. Band-2.
 *     Now: two intersecting lines, angles labeled with algebraic
 *          expressions, find the value of $x$ and angle. Band-5.
 *
 * Run:
 *   bun scripts/rewrites/topOfBand2.mjs --dry
 *   bun scripts/rewrites/topOfBand2.mjs
 */

import { promises as fs } from 'node:fs';

const FILES = {
  algebra: '/Users/hareshbhatia/PerformSAT/src/data/questions/bank/algebra.js',
  geometry: '/Users/hareshbhatia/PerformSAT/src/data/questions/bank/geometry.js',
};

const REPLACEMENTS = [
  // ─── bank-alg-219 ─── upgrade to band-5: perpendicular through point
  {
    file: 'algebra',
    findId: 'bank-alg-219',
    newItem: `  { id: 'bank-alg-219', domain: 'algebra', skills: ['perpendicular-negative-reciprocal'], difficulty: 'medium', type: 'multiple-choice',
    question: 'In the $xy$-plane, line $p$ has the equation $2x + 5y = 10$. Line $q$ is perpendicular to line $p$ and passes through the point $(2, -1)$. What is the $y$-intercept of line $q$?',
    choices: [{ id: 'A', text: '$-6$' }, { id: 'B', text: '$-1$' }, { id: 'C', text: '$\\\\dfrac{9}{5}$' }, { id: 'D', text: '$4$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Perpendicular Line Through a Point**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~20s):** Slope of $p$ = $-A/B = -2/5$. Perpendicular slope = $5/2$. Through $(2, -1)$: $-1 = (5/2)(2) + b \\\\Rightarrow -1 = 5 + b \\\\Rightarrow b = -6$.\\n\\n**The Full Solution:**\\nStep 1: Find the slope of $p$. Rewrite $2x + 5y = 10$ as $y = -\\\\dfrac{2}{5}x + 2$, so slope = $-\\\\dfrac{2}{5}$.\\nStep 2: Perpendicular slopes are negative reciprocals: slope of $q$ = $\\\\dfrac{5}{2}$.\\nStep 3: Use the point $(2, -1)$ in $y = mx + b$: $-1 = \\\\dfrac{5}{2}(2) + b = 5 + b \\\\Rightarrow b = -6$.\\n\\nVerification: at $x = 2$, $y = \\\\dfrac{5}{2}(2) + (-6) = 5 - 6 = -1$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($-1$): reports the $y$-coordinate of the given point as the intercept — confuses \\"passes through\\" with \\"$y$-intercept at\\".\\n* Choice C ($\\\\frac{9}{5}$): uses the slope of $p$ (= $-2/5$) instead of the perpendicular slope: $-1 = (-2/5)(2) + b \\\\Rightarrow b = -1 + 4/5 = -1/5$, then mis-arithmetic.\\n* Choice D ($4$): forgets the negative sign of the perpendicular slope — uses $-5/2$, getting $-1 = -5 + b \\\\Rightarrow b = 4$.\\n\\n**Test Day Takeaway:** Standard form $Ax + By = C$ has slope $-A/B$. Negative reciprocal flips AND negates. Then plug the point into $y = mx + b$ to solve for $b$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'perpendicular-slope', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },

  // ─── bank-alg-238 ─── upgrade to band-6: integer constraint forces system solve
  {
    file: 'algebra',
    findId: 'bank-alg-238',
    newItem: `  { id: 'bank-alg-238', domain: 'algebra', skills: ['distributive-property'], difficulty: 'hard', type: 'multiple-choice',
    question: 'For all values of $x$, $(2x + a)(3x + b) = 6x^2 + 13x + 6$, where $a$ and $b$ are positive integers. What is the value of $a + b$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$6$' }, { id: 'C', text: '$7$' }, { id: 'D', text: '$13$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Matching Coefficients with Integer Constraints**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~30s):** FOIL: $(2x + a)(3x + b) = 6x^2 + (2b + 3a)x + ab$. Match: $ab = 6$ and $2b + 3a = 13$. Positive integer pairs $(a, b)$ with $ab = 6$: $(1, 6), (2, 3), (3, 2), (6, 1)$. Test each: $2(2) + 3(3) = 13$ ✓ for $(a, b) = (3, 2)$. So $a + b = 5$.\\n\\n**The Full Solution:**\\nExpand the left side: $(2x + a)(3x + b) = 6x^2 + 2bx + 3ax + ab = 6x^2 + (2b + 3a)x + ab$.\\nMatch coefficients with $6x^2 + 13x + 6$:\\n$\\\\quad ab = 6$\\n$\\\\quad 2b + 3a = 13$\\n\\nList positive integer factor pairs of $6$: $(a, b) \\\\in \\\\{(1, 6), (2, 3), (3, 2), (6, 1)\\\\}$.\\nCheck the middle-coefficient constraint:\\n$\\\\quad (1, 6)$: $2(6) + 3(1) = 15$ ✗\\n$\\\\quad (2, 3)$: $2(3) + 3(2) = 12$ ✗\\n$\\\\quad (3, 2)$: $2(2) + 3(3) = 13$ ✓\\n$\\\\quad (6, 1)$: $2(1) + 3(6) = 20$ ✗\\nTherefore $a = 3$ and $b = 2$, so $a + b = 5$.\\n\\nVerification: $(2x + 3)(3x + 2) = 6x^2 + 4x + 9x + 6 = 6x^2 + 13x + 6$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($6$): reports $ab$ (the constant term of the product) instead of $a + b$.\\n* Choice C ($7$): from the (2,5) or (5,2) factor pair — would work if $ab = 10$, but $ab = 6$. Mis-factors the constant term.\\n* Choice D ($13$): reports the middle coefficient itself.\\n\\n**Test Day Takeaway:** When a factorization has a constraint (e.g., \\"positive integers\\"), enumerate the candidate pairs from the constant term, then filter by the middle-coefficient equation.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'matching-coefficients', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },

  // ─── bank-alg-308 ─── upgrade to band-5: condition on parameter
  {
    file: 'algebra',
    findId: 'bank-alg-308',
    newItem: `  { id: 'bank-alg-308', domain: 'algebra', skills: ['distributive-property'], difficulty: 'medium', type: 'multiple-choice',
    question: 'In the equation $k(x + 2) - 3 = 4x + c$, $k$ and $c$ are constants. For what value of $k$ does the equation have exactly one solution for $x$, regardless of the value of $c$?',
    choices: [{ id: 'A', text: 'Any value of $k$ except $4$' }, { id: 'B', text: '$k = 4$ only' }, { id: 'C', text: '$k = 0$ only' }, { id: 'D', text: '$k = -4$ only' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Equation with Distribution (Solution-Count Condition)**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~25s):** Distribute: $kx + 2k - 3 = 4x + c \\\\Rightarrow (k - 4)x = c - 2k + 3$. Exactly one solution requires $k - 4 \\\\ne 0$, i.e., $k \\\\ne 4$.\\n\\n**The Full Solution:**\\nDistribute the $k$: $kx + 2k - 3 = 4x + c$.\\nMove $x$-terms together and constants together: $kx - 4x = c - 2k + 3$, or $(k - 4)x = c - 2k + 3$.\\n\\nSolution counts depend on the coefficient $(k - 4)$:\\n$\\\\quad$ if $k - 4 \\\\ne 0$: divide to get a unique $x = \\\\dfrac{c - 2k + 3}{k - 4}$ (one solution for any $c$).\\n$\\\\quad$ if $k - 4 = 0$ (i.e., $k = 4$): the equation becomes $0 = c - 5$. This is true only when $c = 5$ (infinite solutions) and false otherwise (no solution).\\n\\nSo for the equation to have exactly one solution REGARDLESS of $c$, we need $k - 4 \\\\ne 0$, which means $k$ can be any value except $4$.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($k = 4$ only): this is the value that makes the coefficient vanish, giving either infinitely many or no solutions — the OPPOSITE of what is asked.\\n* Choice C ($k = 0$ only): a single specific value gives a single solution, but other values of $k \\\\ne 4$ also work.\\n* Choice D ($k = -4$ only): same misreading — a specific value rather than a condition.\\n\\n**Test Day Takeaway:** A linear equation $ax = b$ has exactly one solution iff $a \\\\ne 0$, infinitely many iff $a = 0$ and $b = 0$, and no solution iff $a = 0$ and $b \\\\ne 0$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },

  // ─── bank-geo-149 ─── upgrade to band-5: comparing-area context
  {
    file: 'geometry',
    findId: 'bank-geo-149',
    newItem: `  { id: 'bank-geo-149', domain: 'geometry', skills: ['circle-equation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A square has a side length of $6$. A circle in the $xy$-plane has the same area as the square. What is the radius of the circle?',
    choices: [{ id: 'A', text: '$\\\\dfrac{6}{\\\\sqrt{\\\\pi}}$' }, { id: 'B', text: '$\\\\dfrac{36}{\\\\pi}$' }, { id: 'C', text: '$6$' }, { id: 'D', text: '$\\\\dfrac{6}{\\\\pi}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Area of a Circle (Reverse from Given Area)**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~15s):** Square area = $6^2 = 36$. Set $\\\\pi r^2 = 36 \\\\Rightarrow r^2 = \\\\dfrac{36}{\\\\pi} \\\\Rightarrow r = \\\\dfrac{6}{\\\\sqrt{\\\\pi}}$.\\n\\n**The Full Solution:**\\nStep 1: Compute the area of the square. $A_\\\\text{square} = s^2 = 6^2 = 36$.\\nStep 2: Set the circle's area equal to $36$ and solve for $r$.\\n$\\\\quad \\\\pi r^2 = 36$\\n$\\\\quad r^2 = \\\\dfrac{36}{\\\\pi}$\\n$\\\\quad r = \\\\sqrt{\\\\dfrac{36}{\\\\pi}} = \\\\dfrac{6}{\\\\sqrt{\\\\pi}}$\\n\\nVerification: $\\\\pi \\\\cdot \\\\left(\\\\dfrac{6}{\\\\sqrt{\\\\pi}}\\\\right)^2 = \\\\pi \\\\cdot \\\\dfrac{36}{\\\\pi} = 36$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($\\\\frac{36}{\\\\pi}$): reports $r^2$ instead of $r$ — forgets the square-root step.\\n* Choice C ($6$): reports the side length of the square as the radius — fails to apply the area-equality condition.\\n* Choice D ($\\\\frac{6}{\\\\pi}$): incorrectly takes the square root only of the numerator: $\\\\sqrt{36/\\\\pi} \\\\ne \\\\sqrt{36}/\\\\pi$.\\n\\n**Test Day Takeaway:** To go from area to radius, divide by $\\\\pi$ FIRST, then take the square root. The order matters because $\\\\sqrt{a/b} = \\\\sqrt{a}/\\\\sqrt{b}$, not $\\\\sqrt{a}/b$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'area-of-a-circle', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },

  // ─── bank-geo-167 ─── upgrade to band-5: algebraic vertical angles
  {
    file: 'geometry',
    findId: 'bank-geo-167',
    newItem: `  { id: 'bank-geo-167', domain: 'geometry', skills: ['triangle-angle-sum'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Two lines intersect at a point, forming two pairs of vertical angles. One angle has measure $(4x + 10)°$, and the vertical angle to it has measure $(6x - 20)°$. What is the measure, in degrees, of the angle adjacent to the angle of $(4x + 10)°$?',
    choices: [{ id: 'A', text: '$110$' }, { id: 'B', text: '$70$' }, { id: 'C', text: '$15$' }, { id: 'D', text: '$50$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertical and Linear-Pair Angles**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~20s):** Vertical angles are equal: $4x + 10 = 6x - 20 \\\\Rightarrow 2x = 30 \\\\Rightarrow x = 15$. The $(4x + 10)°$ angle measures $70°$. The adjacent angle is supplementary: $180 - 70 = 110°$.\\n\\n**The Full Solution:**\\nStep 1: Vertical angles formed by two intersecting lines are congruent. Set them equal: $4x + 10 = 6x - 20 \\\\Rightarrow 30 = 2x \\\\Rightarrow x = 15$.\\nStep 2: Compute the measure of the $(4x + 10)°$ angle: $4(15) + 10 = 70°$ (verify: $6(15) - 20 = 70$ \\\\checkmark).\\nStep 3: The angle adjacent to the $70°$ angle forms a linear pair with it, so the two angles sum to $180°$: $180 - 70 = 110°$.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($70$): reports the vertical angle measure ($70°$) instead of the adjacent (supplementary) angle — stops one step short.\\n* Choice C ($15$): reports the value of $x$ instead of the angle measure — confuses the variable with the answer.\\n* Choice D ($50$): subtracts $x$ from $\\\\sim$ adjacent-supplement misderivation — uses $180 - 130 = 50$ from a mis-substitution.\\n\\n**Test Day Takeaway:** Vertical angles are equal; adjacent angles formed by intersecting lines are supplementary. Set vertical angles equal to solve for the variable, then use supplementary to find the adjacent angle.",
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

  let applied = 0;
  let skipped = 0;
  for (const [fileKey, reps] of byFile) {
    const filePath = FILES[fileKey];
    let src = await fs.readFile(filePath, 'utf8');
    for (const r of reps) {
      const startIdx = src.indexOf(`{ id: '${r.findId}',`);
      if (startIdx === -1) { console.log(`SKIP ${r.findId}: not found`); skipped++; continue; }
      let pos = startIdx + 100, endIdx = -1;
      while (pos < startIdx + 4000 && pos < src.length) {
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
        console.log(`OK   ${r.findId}: ${lineEnd - lineStart} → ${r.newItem.length}`);
      }
      applied++;
    }
    if (!dryRun) await fs.writeFile(filePath, src);
  }
  console.log(`\n${dryRun ? '[DRY] ' : ''}${applied} applied, ${skipped} skipped.`);
}

main().catch(e => { console.error(e); process.exit(1); });
