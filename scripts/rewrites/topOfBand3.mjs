#!/usr/bin/env bun
/**
 * topOfBand3.mjs — top-of-band redesigns for 8 more items rated 3/5.
 *
 *   alg-299 (med fractions)    → add parameter inference. Band-5.
 *   alg-302 (hard fractions)   → 3-fraction equation. Band-6.
 *   alg-304 (easy distrib)     → shifted-output. Band-3 ceiling.
 *   alg-312 (easy combining)   → shifted-output ("expression = N, find $a$").
 *   alg-316 (med combining)    → parameter-inference for identity.
 *   alg-318 (hard combining)   → parameter-inference for polynomial identity.
 *   geo-141 (med volume)       → multi-step (volume → height → surface area).
 *   geo-145 (hard volume)      → non-uniform scaling.
 */
import { promises as fs } from 'node:fs';

const FILES = {
  algebra: '/Users/hareshbhatia/PerformSAT/src/data/questions/bank/algebra.js',
  geometry: '/Users/hareshbhatia/PerformSAT/src/data/questions/bank/geometry.js',
};

const REPLACEMENTS = [
  {
    file: 'algebra', findId: 'bank-alg-299',
    newItem: `  { id: 'bank-alg-299', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'fill-in',
    question: 'In the equation $\\\\dfrac{x + 5}{3} = \\\\dfrac{x - 1}{a}$, $a$ is a positive integer constant. If $x = 13$ is the solution to the equation, what is the value of $a$?',
    correctAnswer: '2',
    explanation: "**SAT Pattern: Parameter Inference from a Linear Equation**\\n\\n**The correct answer is $2$.**\\n\\n**The Fast Way (~15s):** Plug in $x = 13$: LHS $= \\\\dfrac{18}{3} = 6$. RHS $= \\\\dfrac{12}{a}$. Set equal: $6 = \\\\dfrac{12}{a} \\\\Rightarrow a = 2$.\\n\\n**The Full Solution:**\\nSince $x = 13$ is a solution, substituting it into the equation must produce a true statement.\\nLHS: $\\\\dfrac{13 + 5}{3} = \\\\dfrac{18}{3} = 6$.\\nRHS: $\\\\dfrac{13 - 1}{a} = \\\\dfrac{12}{a}$.\\nThe equation $6 = \\\\dfrac{12}{a}$ requires $a = \\\\dfrac{12}{6} = 2$.\\n\\nVerification: with $a = 2$, the equation becomes $\\\\dfrac{x + 5}{3} = \\\\dfrac{x - 1}{2}$. Cross-multiplying: $2(x + 5) = 3(x - 1) \\\\Rightarrow 2x + 10 = 3x - 3 \\\\Rightarrow x = 13$ \\\\checkmark.\\n\\n**Test Day Takeaway:** When a parameter and a solution are both involved, substitute the solution to get a single equation in the parameter. Avoid solving the original symbolic equation unless necessary.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    file: 'algebra', findId: 'bank-alg-302',
    newItem: `  { id: 'bank-alg-302', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'hard', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $\\\\dfrac{2x + 1}{4} + \\\\dfrac{x - 3}{6} = \\\\dfrac{7x - 1}{12}$?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$-2$' }, { id: 'C', text: '$\\\\dfrac{1}{2}$' }, { id: 'D', text: '$1$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Multi-Step Linear Equation with Fractions**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~30s):** Multiply every term by the LCD $12$: $3(2x + 1) + 2(x - 3) = 7x - 1 \\\\Rightarrow 6x + 3 + 2x - 6 = 7x - 1 \\\\Rightarrow 8x - 3 = 7x - 1 \\\\Rightarrow x = 2$.\\n\\n**The Full Solution:**\\nMultiply each term by the least common denominator $\\\\text{lcm}(4, 6, 12) = 12$:\\n$\\\\quad 12 \\\\cdot \\\\dfrac{2x + 1}{4} + 12 \\\\cdot \\\\dfrac{x - 3}{6} = 12 \\\\cdot \\\\dfrac{7x - 1}{12}$\\n$\\\\quad 3(2x + 1) + 2(x - 3) = 7x - 1$\\nDistribute and combine: $6x + 3 + 2x - 6 = 7x - 1 \\\\Rightarrow 8x - 3 = 7x - 1$.\\nSubtract $7x$: $x - 3 = -1 \\\\Rightarrow x = 2$.\\n\\nVerification: $\\\\dfrac{2(2) + 1}{4} + \\\\dfrac{2 - 3}{6} = \\\\dfrac{5}{4} - \\\\dfrac{1}{6} = \\\\dfrac{15}{12} - \\\\dfrac{2}{12} = \\\\dfrac{13}{12}$. RHS: $\\\\dfrac{7(2) - 1}{12} = \\\\dfrac{13}{12}$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($-2$): sign error when crossing terms — gets $x = -2$ instead of $+2$.\\n* Choice C ($\\\\frac{1}{2}$): drops a factor when distributing — uses $3(2x + 1) = 6x + 1$ (instead of $6x + 3$), getting $7x - 5 = 7x - 1$, no solution interpreted as $x = 1/2$.\\n* Choice D ($1$): clears denominators incorrectly — uses LCD $= 4$ instead of $12$, getting $(2x + 1) + (x - 3)/(3/2) \\\\ne 12$, but mis-arithmetic to $1$.\\n\\n**Test Day Takeaway:** When THREE fractions appear, multiply every term by the LCD of all denominators. Distribute each numerator carefully.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    file: 'algebra', findId: 'bank-alg-304',
    newItem: `  { id: 'bank-alg-304', domain: 'algebra', skills: ['distributive-property'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $3(x + 4) = 27$, what is the value of $x + 4$?',
    choices: [{ id: 'A', text: '$9$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$12$' }, { id: 'D', text: '$21$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Shifted-Output Linear**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~5s):** Divide both sides by $3$ — the asked quantity $(x + 4)$ appears directly: $x + 4 = 27/3 = 9$.\\n\\n**The Full Solution:**\\nThe equation $3(x + 4) = 27$ asks for the value of $x + 4$ — NOT $x$.\\nThe shortcut: divide both sides by $3$ to isolate the bracketed expression directly: $x + 4 = 9$.\\n\\nNumerical check (long way): $3(x + 4) = 27 \\\\Rightarrow x + 4 = 9 \\\\Rightarrow x = 5$. Then $x + 4 = 5 + 4 = 9$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($5$): reports the value of $x$ instead of $x + 4$ — solves further than necessary.\\n* Choice C ($12$): adds $3$ to the value of $x$: $5 + 3 + 4 = 12$, or some near-arithmetic.\\n* Choice D ($21$): subtracts $6$ from $27$: $27 - 6 = 21$, treating the $4$ as if it were $\\\\cdot 3 - 3$.\\n\\n**Test Day Takeaway:** When the question asks for a SHIFTED expression of $x$ (like $x + 4$, $2x - 3$, etc.), recognize that you may not need to solve for $x$ first. Manipulate the equation to isolate the asked-for expression directly.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-distribution', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    file: 'algebra', findId: 'bank-alg-312',
    newItem: `  { id: 'bank-alg-312', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $3a + 5a - 2a = 24$, what is the value of $a$?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$6$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$24$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Combining Like Terms — Solve for the Variable**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~5s):** Combine the like terms: $(3 + 5 - 2)a = 6a$. So $6a = 24 \\\\Rightarrow a = 4$.\\n\\n**The Full Solution:**\\nCombine the like terms on the left by adding the coefficients: $3 + 5 - 2 = 6$, giving $6a = 24$.\\nDivide both sides by $6$: $a = 4$.\\n\\nVerification: $3(4) + 5(4) - 2(4) = 12 + 20 - 8 = 24$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($6$): reports the COEFFICIENT after combining ($6a$, so coefficient is $6$) instead of the value of $a$.\\n* Choice C ($3$): combines only two of the three terms — uses $3a + 5a = 8a$ ignoring $-2a$, then $8a = 24 \\\\Rightarrow a = 3$.\\n* Choice D ($24$): reports the right side of the equation as the answer — number/variable confusion.\\n\\n**Test Day Takeaway:** When like terms appear on one side and a number on the other, combine the coefficients FIRST to get a single $a$-coefficient, then divide.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    file: 'algebra', findId: 'bank-alg-316',
    newItem: `  { id: 'bank-alg-316', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For all values of $x$, $a(x - 2) - 3(x + 4) = 2x - 22$, where $a$ is a constant. What is the value of $a$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$-3$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Parameter Inference (Identity)**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~20s):** Distribute the LHS: $ax - 2a - 3x - 12 = (a - 3)x - (2a + 12)$. Match coefficients with $2x - 22$: $a - 3 = 2 \\\\Rightarrow a = 5$. Verify: $-(2 \\\\cdot 5 + 12) = -22$ \\\\checkmark.\\n\\n**The Full Solution:**\\nSince the equation holds for all values of $x$, the two sides must be identical as polynomials. Expand the LHS:\\n$\\\\quad a(x - 2) - 3(x + 4) = ax - 2a - 3x - 12 = (a - 3)x - (2a + 12)$.\\nSet the LHS equal to the RHS $2x - 22$ and match coefficients:\\n$\\\\quad$ $x$-coefficient: $a - 3 = 2 \\\\Rightarrow a = 5$\\n$\\\\quad$ constant: $-(2a + 12) = -22 \\\\Rightarrow 2a + 12 = 22 \\\\Rightarrow a = 5$ \\\\checkmark (consistent)\\n\\nBoth conditions give $a = 5$, confirming the identity.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($2$): reads $a$ off the RHS coefficient directly without solving — copies the $x$-coefficient from the RHS.\\n* Choice C ($-3$): reads $a$ from the $-3$ coefficient on the second bracket — wrong variable, formula confusion.\\n* Choice D ($3$): solves $a - 3 = 2$ then takes the wrong sign on the constant equation — gets $a = 3$ via sign error.\\n\\n**Test Day Takeaway:** \\"For all values of $x$\\" means the two sides are an IDENTITY. Expand both sides, then match the $x$-coefficient and the constant term SEPARATELY.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    file: 'algebra', findId: 'bank-alg-318',
    newItem: `  { id: 'bank-alg-318', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'hard', type: 'multiple-choice',
    question: 'For all values of $x$, $a(x^2 + 3x) - (x^2 - 5x) = 3x^2 + bx$, where $a$ and $b$ are constants. What is the value of $a + b$?',
    choices: [{ id: 'A', text: '$21$' }, { id: 'B', text: '$17$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Polynomial Identity with Two Parameters**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~30s):** Expand LHS: $(a - 1)x^2 + (3a + 5)x$. Match: $a - 1 = 3 \\\\Rightarrow a = 4$; $3(4) + 5 = b \\\\Rightarrow b = 17$. $a + b = 21$.\\n\\n**The Full Solution:**\\nExpand the LHS: $a(x^2 + 3x) - (x^2 - 5x) = ax^2 + 3ax - x^2 + 5x = (a - 1)x^2 + (3a + 5)x$.\\nMatch the RHS $3x^2 + bx$:\\n$\\\\quad x^2$-coefficient: $a - 1 = 3 \\\\Rightarrow a = 4$\\n$\\\\quad x$-coefficient: $3a + 5 = b \\\\Rightarrow b = 3(4) + 5 = 17$\\nSum: $a + b = 4 + 17 = 21$.\\n\\nVerification: with $a = 4$: $4(x^2 + 3x) - (x^2 - 5x) = 4x^2 + 12x - x^2 + 5x = 3x^2 + 17x = $ RHS \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($17$): reports $b$ alone — stops one step short.\\n* Choice C ($4$): reports $a$ alone — stops one step short.\\n* Choice D ($5$): mis-arithmetic — uses $b = 5$ from the constant of the inner bracket, then $a + b = 4 + 1 = 5$ via further error.\\n\\n**Test Day Takeaway:** Polynomial identity gives ONE equation per power of $x$. Match coefficients of $x^2$, $x$, and constant terms SEPARATELY.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combining-like-terms', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    file: 'geometry', findId: 'bank-geo-141',
    newItem: `  { id: 'bank-geo-141', domain: 'geometry', skills: ['volume-prism'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A rectangular prism has a volume of $432$ cubic centimeters. The length is $9$ centimeters and the width is $4$ centimeters. What is the surface area of the prism, in square centimeters?',
    choices: [{ id: 'A', text: '$384$' }, { id: 'B', text: '$24$' }, { id: 'C', text: '$12$' }, { id: 'D', text: '$216$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Volume → Missing Dimension → Surface Area**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~30s):** $h = V/(lw) = 432/36 = 12$. Surface area $= 2(lw + lh + wh) = 2(36 + 108 + 48) = 2(192) = 384$.\\n\\n**The Full Solution:**\\nStep 1: Recover the missing dimension. The base area is $lw = 9 \\\\cdot 4 = 36$, so $h = V/(lw) = 432/36 = 12$ cm.\\nStep 2: Apply the surface-area formula for a rectangular prism: $SA = 2(lw + lh + wh)$.\\n$\\\\quad lw = 36$\\n$\\\\quad lh = 9 \\\\cdot 12 = 108$\\n$\\\\quad wh = 4 \\\\cdot 12 = 48$\\n$\\\\quad SA = 2(36 + 108 + 48) = 2(192) = 384$ sq cm.\\n\\nVerification: dimensions $9 \\\\times 4 \\\\times 12$ give volume $9 \\\\cdot 4 \\\\cdot 12 = 432$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($24$): adds the dimensions ($9 + 4 + 12 = 25$, rounded to $24$) — confuses surface area with sum of edges.\\n* Choice C ($12$): reports the missing dimension (height) alone — stops one step short.\\n* Choice D ($216$): reports HALF the surface area ($lw + lh + wh = 192$, close to $216$) — forgets the factor of $2$.\\n\\n**Test Day Takeaway:** Volume gives the missing dimension via division. Surface area then uses $2(lw + lh + wh)$ — there are SIX faces in three congruent pairs.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'volume-of-a-rectangular-prism', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    file: 'geometry', findId: 'bank-geo-145',
    newItem: `  { id: 'bank-geo-145', domain: 'geometry', skills: ['volume-prism'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A rectangular prism has its length doubled, its width tripled, and its height halved to form a new rectangular prism. The volume of the new prism is how many times the volume of the original prism?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$6$' }, { id: 'C', text: '$8$' }, { id: 'D', text: '$\\\\dfrac{3}{2}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Non-Uniform Scaling of Volume**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~10s):** New volume $= (2l)(3w)(h/2) = 2 \\\\cdot 3 \\\\cdot \\\\dfrac{1}{2} \\\\cdot lwh = 3 \\\\cdot lwh$. So the new volume is $3$ times the original.\\n\\n**The Full Solution:**\\nOriginal volume: $V = lwh$.\\nNew dimensions: length $= 2l$, width $= 3w$, height $= h/2$.\\nNew volume: $V' = (2l)(3w)\\\\left(\\\\dfrac{h}{2}\\\\right) = (2 \\\\cdot 3 \\\\cdot \\\\tfrac{1}{2}) \\\\cdot lwh = 3 \\\\cdot lwh = 3V$.\\nThe new volume is $3$ times the original.\\n\\nNumerical check: original $1 \\\\times 1 \\\\times 2$, $V = 2$. New: $2 \\\\times 3 \\\\times 1$, $V' = 6 = 3 \\\\cdot 2$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($6$): multiplies the linear factors only ($2 \\\\cdot 3 = 6$) — forgets the halving of the height.\\n* Choice C ($8$): applies a uniform-scaling assumption ($2^3 = 8$) — wrong because the dimensions scale by different factors.\\n* Choice D ($\\\\frac{3}{2}$): averages or otherwise mis-combines the scale factors.\\n\\n**Test Day Takeaway:** For non-uniform scaling, multiply each dimension's scale factor individually. The total volume scale is the product of the three.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'volume-of-a-rectangular-prism', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
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
        console.log(`OK ${r.findId}: ${lineEnd - lineStart} → ${r.newItem.length}`);
      }
      applied++;
    }
    if (!dryRun) await fs.writeFile(FILES[fileKey], src);
  }
  console.log(`\n${dryRun ? '[DRY] ' : ''}${applied} applied, ${skipped} skipped.`);
}
main().catch(e => { console.error(e); process.exit(1); });
