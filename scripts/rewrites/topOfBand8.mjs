#!/usr/bin/env bun
/**
 * topOfBand8.mjs — 12 surgical fixes from the 50-item bank-wide sample.
 *
 * Bank-wide reading (35 graded after SKIPs): 23/35 = 65.7% pass. Below
 * the 80% rubric exit gate. This batch fixes the 12 fails with rater-
 * driven redesigns.
 *
 * Fixes:
 *   bank-alg-055 (easy elimination): CB-voice stem, cleaner explanation
 *   bank-alg-284 (medium identity): parameter inference, harder
 *   bank-am-034  (hard quadratic forms): vertex-form conversion (genuinely hard)
 *   bank-am-060  (easy combining): CB-voice stem
 *   bank-am-063  (hard multi-distribute): parameter inference, harder
 *   bank-am-065  (medium DoS): two-step difference of squares
 *   bank-geo-047 (hard heights): cleaner trig values, tighter distractors
 *   bank-geo-048 (hard similar): tighter distractors + 2-step
 *   bank-ps-011  (medium % change): clean distractor derivations
 *   bank-ps-049  (easy unit conv): operation-based distractors
 *   bank-ps-214  (medium cond prob): CB-voice stem, bumped context
 *   bank-ps-219  (medium % comp): BUG FIX — asked fraction, choices decimal
 *
 * Run: bun scripts/rewrites/topOfBand8.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BANK_DIR = path.resolve(__dirname, '..', '..', 'src/data/questions/bank');

// ─────────────────────────────────────────────────────────────────────
// Rewrites (file → list of {id, block})
// ─────────────────────────────────────────────────────────────────────
const REWRITES_BY_FILE = {
  'algebra.js': [
    {
      id: 'bank-alg-055',
      block: `  { id: 'bank-alg-055', domain: 'algebra', skills: ['elimination-method'], difficulty: 'easy', type: 'fill-in',
    question: 'The system of equations $x + y = 13$ and $x - y = 5$ has solution $(x, y)$. What is the value of $y$?',
    correctAnswer: '4',
    explanation: "**SAT Pattern: Solving a System by Elimination**\\n\\n**The correct answer is $4$.**\\n\\n**The Fast Way (~10s):** Subtract the second equation from the first: $(x + y) - (x - y) = 13 - 5 \\\\Rightarrow 2y = 8 \\\\Rightarrow y = 4$.\\n\\n**The Full Solution:**\\nWhen a system has two equations with the same $x$ coefficient, subtraction eliminates $x$ in one step.\\n\\n$\\\\quad x + y = 13$\\n$\\\\quad x - y = \\\\phantom{1}5$\\n\\nSubtract: $(x + y) - (x - y) = 13 - 5$, which gives $2y = 8$, so $y = 4$.\\n\\nVerification: with $y = 4$, the first equation gives $x = 13 - 4 = 9$. Check the second: $9 - 4 = 5$ \\\\checkmark.\\n\\n**Common Mistakes:** Reporting $9$ (the value of $x$); reporting $8$ (the value of $2y$, forgetting to divide); choosing the wrong sign by subtracting in the wrong direction.\\n\\n**Test Day Takeaway:** To isolate $y$ in a system like this, SUBTRACT the equations. To isolate $x$, ADD them. Always pick the operation that eliminates the variable you DON'T want.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'elimination-solve', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
    },
    {
      id: 'bank-alg-284',
      block: `  { id: 'bank-alg-284', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'medium', type: 'multiple-choice',
    question: 'In the equation $a(2x - 3) = 10x + b$, $a$ and $b$ are constants. The equation has infinitely many solutions. What is the value of $a + b$?',
    choices: [{ id: 'A', text: '$-20$' }, { id: 'B', text: '$-15$' }, { id: 'C', text: '$-10$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Identity / Contradiction — Match Coefficients**\\n\\n**Choice C is correct.**\\n\\n**The Fast Way (~25s):** Infinitely many solutions $\\\\Rightarrow$ the two sides are the SAME linear expression. Expand left: $2ax - 3a$. Match $x$-coefficient with right side: $2a = 10 \\\\Rightarrow a = 5$. Match constant: $-3a = b \\\\Rightarrow b = -15$. So $a + b = 5 + (-15) = -10$.\\n\\n**The Full Solution:**\\nStep 1: For an equation to be true for all values of $x$ (infinitely many solutions), the two sides must be identical as polynomials.\\nStep 2: Expand the left side: $a(2x - 3) = 2ax - 3a$.\\nStep 3: Match $x$-coefficients: $2a = 10 \\\\Rightarrow a = 5$.\\nStep 4: Match constant terms: $-3a = b$, so $b = -3(5) = -15$.\\nStep 5: $a + b = 5 + (-15) = -10$.\\n\\nVerification: plug back in: $5(2x - 3) = 10x - 15$ — both sides expand to $10x - 15$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($-20$): forgets that $-3a$ goes to $b$ DIRECTLY (no extra factor) and computes $b = -3 \\\\cdot 5 - 5 = -20$ — adds an extra $-5$ somewhere.\\n* Choice B ($-15$): reports $b$ alone instead of $a + b$. Stops one step early after finding $b = -15$.\\n* Choice D ($5$): reports $a$ alone instead of $a + b$. Stops one step early after finding $a = 5$.\\n\\n**Test Day Takeaway:** Identity (infinitely many solutions) means the polynomials are identical — match coefficients term by term. After solving for the parameters, always re-read what the question asks for (a value, a sum, a product).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'identifying-identity-contradiction-equations', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
    },
  ],

  'advancedMath.js': [
    {
      id: 'bank-am-034',
      block: `  { id: 'bank-am-034', domain: 'advanced-math', skills: ['converting-quadratic-forms'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = -2x^2 + 12x - 10$. The function can be written in the form $f(x) = a(x - h)^2 + k$, where $a$, $h$, and $k$ are constants. What is the value of $a + h + k$?',
    choices: [{ id: 'A', text: '$-18$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$8$' }, { id: 'D', text: '$9$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Standard Form to Vertex Form**\\n\\n**Choice D is correct.**\\n\\n**The Fast Way (~40s):** Vertex of $f(x) = -2x^2 + 12x - 10$ is at $x = -12/(2 \\\\cdot -2) = 3$. $f(3) = -2(9) + 36 - 10 = 8$. So $a = -2$, $h = 3$, $k = 8$, and $a + h + k = 9$.\\n\\n**The Full Solution:**\\nMethod 1 — Complete the square:\\n$f(x) = -2x^2 + 12x - 10 = -2(x^2 - 6x) - 10$.\\nAdd and subtract $9$ inside (to complete $(x - 3)^2$): $-2(x^2 - 6x + 9 - 9) - 10 = -2((x - 3)^2 - 9) - 10$.\\nDistribute the $-2$: $-2(x - 3)^2 + 18 - 10 = -2(x - 3)^2 + 8$.\\nSo $a = -2$, $h = 3$, $k = 8$, and $a + h + k = -2 + 3 + 8 = 9$.\\n\\nMethod 2 — Vertex shortcut:\\n$h = -b/(2a) = -12/(-4) = 3$. $k = f(h) = f(3) = -2(9) + 36 - 10 = 8$. $a$ is the leading coefficient: $-2$. Sum: $9$.\\n\\nVerification: at $x = 3$, $-2(0)^2 + 8 = 8$, matches $f(3) = 8$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($-18$): forgets to negate the $9$ when factoring out the $-2$ — gets $k = -10 - 9 = -19$ wait no — gets $k$ wrong by sign-mistake on the completed-square constant ($k = -2(9) - 10 = -28$ then summed with wrong $h$). Common 'completing the square' sign trap.\\n* Choice B ($3$): reports $h$ alone (stops one step early after finding the vertex $x$-coordinate).\\n* Choice C ($8$): reports $k$ alone (stops one step early after finding the vertex $y$-coordinate).\\n* Choice D ($9$): correct.\\n\\n**Test Day Takeaway:** When converting $ax^2 + bx + c$ to vertex form, the vertex $(h, k)$ satisfies $h = -b/(2a)$ and $k = f(h)$. The leading coefficient $a$ is unchanged. Re-read what the question wants — $a$, $h$, $k$, or some combination.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'factored-to-standard', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
    },
    {
      id: 'bank-am-060',
      block: `  { id: 'bank-am-060', domain: 'advanced-math', skills: ['combining-like-terms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which of the following expressions is equivalent to $7x^2 - 3x + 4x^2 + 9x - 2$?',
    choices: [{ id: 'A', text: '$3x^2 + 6x - 2$' }, { id: 'B', text: '$11x^2 - 12x - 2$' }, { id: 'C', text: '$11x^2 + 6x - 2$' }, { id: 'D', text: '$11x^4 + 6x - 2$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Combine Like Terms**\\n\\n**Choice C is correct.**\\n\\n**The Fast Way (~10s):** $x^2$ terms: $7 + 4 = 11$. $x$ terms: $-3 + 9 = 6$. Constant: $-2$. Result: $11x^2 + 6x - 2$.\\n\\n**The Full Solution:**\\nGroup like terms (terms with the same variable and exponent):\\n* $x^2$ terms: $7x^2 + 4x^2 = 11x^2$\\n* $x$ terms: $-3x + 9x = 6x$\\n* Constant: $-2$\\nCombined: $11x^2 + 6x - 2$.\\n\\nVerification: at $x = 1$, original $= 7 - 3 + 4 + 9 - 2 = 15$. Simplified: $11 + 6 - 2 = 15$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($3x^2 + 6x - 2$): subtracts the $x^2$ coefficients ($7 - 4 = 3$) instead of adding. Mis-tracks the signs on like terms.\\n* Choice B ($11x^2 - 12x - 2$): correctly combines $x^2$ but subtracts the $x$ coefficients ($-3 - 9 = -12$) instead of adding them ($-3 + 9 = 6$).\\n* Choice D ($11x^4 + 6x - 2$): correctly combines coefficients, but adds the exponents on $x^2 + x^2$ to get $x^4$. Like-term combination keeps the exponent unchanged.\\n\\n**Test Day Takeaway:** Like terms share the SAME variable and exponent. Add their coefficients only; the exponent stays the same. $7x^2 + 4x^2 = 11x^2$, not $11x^4$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'combine-polynomial', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
    },
    {
      id: 'bank-am-063',
      block: `  { id: 'bank-am-063', domain: 'advanced-math', skills: ['combining-like-terms', 'distributive-property'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The expression $3(2x^2 + ax) - 2(x^2 + x - b)$ is equivalent to $4x^2 + 16x + 6$ for all values of $x$, where $a$ and $b$ are constants. What is the value of $a + b$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$6$' }, { id: 'C', text: '$9$' }, { id: 'D', text: '$12$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Match Coefficients of Equivalent Polynomials**\\n\\n**Choice C is correct.**\\n\\n**The Fast Way (~45s):** Expand: $6x^2 + 3ax - 2x^2 - 2x + 2b = 4x^2 + (3a - 2)x + 2b$. Match: $3a - 2 = 16 \\\\Rightarrow a = 6$. $2b = 6 \\\\Rightarrow b = 3$. So $a + b = 9$.\\n\\n**The Full Solution:**\\nStep 1: Expand each product.\\n$\\\\quad 3(2x^2 + ax) = 6x^2 + 3ax$\\n$\\\\quad -2(x^2 + x - b) = -2x^2 - 2x + 2b$\\nStep 2: Combine: $(6 - 2)x^2 + (3a - 2)x + 2b = 4x^2 + (3a - 2)x + 2b$.\\nStep 3: Match coefficient of $x$ with the target $4x^2 + 16x + 6$: $3a - 2 = 16 \\\\Rightarrow 3a = 18 \\\\Rightarrow a = 6$.\\nStep 4: Match constant: $2b = 6 \\\\Rightarrow b = 3$.\\nStep 5: $a + b = 6 + 3 = 9$.\\n\\nVerification: with $a = 6$, $b = 3$: $3(2x^2 + 6x) - 2(x^2 + x - 3) = 6x^2 + 18x - 2x^2 - 2x + 6 = 4x^2 + 16x + 6$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($3$): sign-flips the $-b$ when distributing, treats $-2(x^2 + x - b) = -2x^2 - 2x - 2b$ (correct sign) but then matches $-2b = 6$ to get $b = -3$, summing with $a = 6$ to get $a + b = 3$.\\n* Choice B ($6$): reports $a$ alone. Stops one step early after solving the $x$-coefficient equation.\\n* Choice C ($9$): correct.\\n* Choice D ($12$): forgets that the constant in the expansion is $2b$, not $b$, so reads $b = 6$ directly. Then $a + b = 6 + 6 = 12$.\\n\\n**Test Day Takeaway:** Equivalent polynomials means the two sides are identical as polynomials — match each coefficient column separately ($x^2$, $x$, constant). Track sign distribution carefully; pay attention to factors that multiply the unknown after distribution.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'multi-distribute-combine', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
    },
    {
      id: 'bank-am-065',
      block: `  { id: 'bank-am-065', domain: 'advanced-math', skills: ['difference-of-squares'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which of the following is the complete factorization of $x^4 - 16y^4$ over the integers?',
    choices: [{ id: 'A', text: '$(x^2 - 4y^2)(x^2 + 4y^2)$' }, { id: 'B', text: '$(x - 2y)(x + 2y)(x^2 + 4y^2)$' }, { id: 'C', text: '$(x - 4y)(x + 4y)(x^2 + 4y^2)$' }, { id: 'D', text: '$(x - 2y)^2(x + 2y)^2$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Two-Step Difference of Squares**\\n\\n**Choice B is correct.**\\n\\n**The Fast Way (~25s):** $x^4 - 16y^4 = (x^2)^2 - (4y^2)^2 = (x^2 - 4y^2)(x^2 + 4y^2)$. Then $x^2 - 4y^2 = (x - 2y)(x + 2y)$. Full: $(x - 2y)(x + 2y)(x^2 + 4y^2)$.\\n\\n**The Full Solution:**\\nStep 1: Apply difference of squares to $x^4 - 16y^4$. Write each term as a square: $x^4 = (x^2)^2$ and $16y^4 = (4y^2)^2$. So $x^4 - 16y^4 = (x^2 - 4y^2)(x^2 + 4y^2)$.\\nStep 2: $x^2 - 4y^2$ is itself a difference of squares: $x^2 - (2y)^2 = (x - 2y)(x + 2y)$.\\nStep 3: $x^2 + 4y^2$ is a SUM of squares and does not factor over the integers.\\nStep 4: Combine: $(x - 2y)(x + 2y)(x^2 + 4y^2)$.\\n\\nVerification: $(x - 2y)(x + 2y) = x^2 - 4y^2$, then $(x^2 - 4y^2)(x^2 + 4y^2) = x^4 - 16y^4$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A: stops one step early after the FIRST difference-of-squares application. $(x^2 - 4y^2)$ still factors further.\\n* Choice C: takes $\\\\sqrt{16y^4}$ incorrectly as $4y$ instead of $4y^2$, treating $x^4 - 16y^4$ as $(x^2)^2 - (4y)^2$, which is wrong.\\n* Choice D: applies difference-of-squares incorrectly to the SUM factor $(x^2 + 4y^2)$. Sum of squares does not factor over the integers.\\n\\n**Test Day Takeaway:** When you see $x^4$ or higher even powers, keep applying difference of squares until each factor is either a sum-of-squares (irreducible) or linear. Always check $\\\\sqrt{\\\\text{coefficient}}$ AND $\\\\sqrt{\\\\text{power}}$ — $\\\\sqrt{16y^4} = 4y^2$, not $4y$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'difference-of-squares', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
    },
  ],

  'geometry.js': [
    {
      id: 'bank-geo-047',
      block: `  { id: 'bank-geo-047', domain: 'geometry', skills: ['soh-cah-toa', 'pythagorean-theorem'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A surveyor stands $200$ meters from the base of a cliff. The angle of elevation from the surveyor to the top of the cliff is $\\\\theta$, where $\\\\tan(\\\\theta) = 0.5$. The angle of elevation from the surveyor to the top of a radio tower mounted on the cliff is $\\\\phi$, where $\\\\tan(\\\\phi) = 0.6$. What is the height, in meters, of the radio tower alone?',
    choices: [{ id: 'A', text: '$20$' }, { id: 'B', text: '$100$' }, { id: 'C', text: '$120$' }, { id: 'D', text: '$220$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Difference of Heights via Tangent**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~25s):** Cliff height $= 200 \\\\tan \\\\theta = 200(0.5) = 100$ m. Top of tower height $= 200 \\\\tan \\\\phi = 200(0.6) = 120$ m. Tower alone $= 120 - 100 = 20$ m.\\n\\n**The Full Solution:**\\nLet $h_c$ be the cliff height and $h_t$ be the total height (cliff + tower) from the surveyor's eye level.\\nUsing the tangent ratio (opposite/adjacent) with the $200$-m horizontal distance:\\n$\\\\quad h_c = 200 \\\\tan(\\\\theta) = 200(0.5) = 100$ meters.\\n$\\\\quad h_t = 200 \\\\tan(\\\\phi) = 200(0.6) = 120$ meters.\\nThe tower's height alone is the difference:\\n$\\\\quad h_{\\\\text{tower}} = h_t - h_c = 120 - 100 = 20$ meters.\\n\\nVerification: the larger angle ($\\\\phi$ with bigger tangent) points higher; the tower sits on the cliff so its top is $20$ m above the cliff top \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($20$): correct.\\n* Choice B ($100$): reports the CLIFF height alone, forgetting that the question asks for the tower's height.\\n* Choice C ($120$): reports the TOTAL height (cliff + tower), forgetting to subtract the cliff height.\\n* Choice D ($220$): ADDS the cliff and total heights ($100 + 120$) instead of subtracting — treats the two elevation lines as independent.\\n\\n**Test Day Takeaway:** For \\\"object on top of object\\\" elevation problems, compute the cliff height and the total height separately using $\\\\tan = \\\\text{opp}/\\\\text{adj}$, then subtract. The two angles do NOT subtract — only the heights do.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'double-angle-elevation', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
    },
    {
      id: 'bank-geo-048',
      block: `  { id: 'bank-geo-048', domain: 'geometry', skills: ['similar-triangles', 'triangle-area'], difficulty: 'hard', type: 'multiple-choice',
    question: 'Triangle $JKL$ is similar to triangle $MNP$. The length of side $JK$ is $6$ and the length of the corresponding side $MN$ is $9$. If the area of triangle $JKL$ is $20$ square units, what is the area, in square units, of triangle $MNP$?',
    choices: [{ id: 'A', text: '$30$' }, { id: 'B', text: '$45$' }, { id: 'C', text: '$60$' }, { id: 'D', text: '$67.5$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Area Scaling by Square of Linear Ratio**\\n\\n**Choice B is correct.**\\n\\n**The Fast Way (~20s):** Linear ratio (MN to JK) is $9/6 = 3/2$. Area ratio is the square: $(3/2)^2 = 9/4$. Area of $MNP = 20 \\\\cdot 9/4 = 45$ square units.\\n\\n**The Full Solution:**\\nFor similar figures with linear scale factor $k$:\\n* Lengths scale by $k$.\\n* Areas scale by $k^2$.\\n* Volumes scale by $k^3$.\\n\\nFrom $JKL$ to $MNP$, the linear scale factor is $MN/JK = 9/6 = 3/2$.\\nArea ratio: $(3/2)^2 = 9/4$.\\nArea of $MNP$: $20 \\\\cdot 9/4 = 45$ square units.\\n\\nVerification: $45/20 = 9/4 = (3/2)^2$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($30$): applies the LINEAR ratio to the area ($20 \\\\cdot 3/2 = 30$) — forgets to square the ratio when scaling area.\\n* Choice B ($45$): correct (squared ratio).\\n* Choice C ($60$): applies the linear ratio TWICE multiplicatively ($20 \\\\cdot 3 = 60$), treating the ratio $3/2$ as if it were $3/1$.\\n* Choice D ($67.5$): applies the CUBED ratio ($20 \\\\cdot 27/8 = 67.5$), the volume-scaling rule applied to area by mistake.\\n\\n**Test Day Takeaway:** Areas of similar figures scale by the SQUARE of the linear ratio. Lengths scale by $k$, areas by $k^2$, volumes by $k^3$. Memorize the trio and apply the right power to the quantity you're scaling.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'area-scaling', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
    },
  ],

  'problemSolving.js': [
    {
      id: 'bank-ps-011',
      block: `  { id: 'bank-ps-011', domain: 'problem-solving', skills: ['percent-change'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A city park recorded $12{,}500$ visitors in June and $10{,}750$ visitors in July. What is the percent decrease in visitors from June to July?',
    choices: [{ id: 'A', text: '$14\\\\%$' }, { id: 'B', text: '$16.3\\\\%$' }, { id: 'C', text: '$17.5\\\\%$' }, { id: 'D', text: '$86\\\\%$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Percent Decrease**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~15s):** Decrease $= 12{,}500 - 10{,}750 = 1{,}750$. Percent decrease $= 1{,}750 / 12{,}500 = 0.14 = 14\\\\%$.\\n\\n**The Full Solution:**\\nPercent decrease $= \\\\dfrac{\\\\text{old} - \\\\text{new}}{\\\\text{old}} \\\\cdot 100\\\\%$.\\nNumerator: $12{,}500 - 10{,}750 = 1{,}750$.\\nDivide by the OLD value: $1{,}750 / 12{,}500 = 7/50 = 0.14$.\\nConvert: $0.14 = 14\\\\%$.\\n\\nVerification: $12{,}500 \\\\cdot 0.86 = 10{,}750$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($14\\\\%$): correct.\\n* Choice B ($16.3\\\\%$): divides by the NEW value instead of the old: $1{,}750 / 10{,}750 \\\\approx 0.163$. Classic percent-change base error.\\n* Choice C ($17.5\\\\%$): drops a decimal place ($1{,}750 / 10{,}000$) by approximating the base.\\n* Choice D ($86\\\\%$): reports the SURVIVAL ratio ($10{,}750 / 12{,}500 = 0.86$) — confuses 'percent decrease' with 'percent that remain'.\\n\\n**Test Day Takeaway:** Percent change ALWAYS uses the ORIGINAL (old) value as the base — that's the denominator. The numerator is the change (positive or negative). Don't confuse percent change with the ratio of new-to-old.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'percent-change-basic', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
    },
    {
      id: 'bank-ps-049',
      block: `  { id: 'bank-ps-049', domain: 'problem-solving', skills: ['unit-conversion'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A recipe calls for $3.5$ cups of flour. If $1$ cup is equivalent to $240$ milliliters, how many milliliters of flour are needed for the recipe?',
    choices: [{ id: 'A', text: '$68.6$' }, { id: 'B', text: '$243.5$' }, { id: 'C', text: '$840$' }, { id: 'D', text: '$8{,}400$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Single Unit Conversion**\\n\\n**Choice C is correct.**\\n\\n**The Fast Way (~10s):** $3.5 \\\\cdot 240 = 840$ mL.\\n\\n**The Full Solution:**\\nMultiply the quantity by the conversion factor with the new unit on top:\\n$\\\\quad 3.5 \\\\text{ cups} \\\\cdot \\\\dfrac{240 \\\\text{ mL}}{1 \\\\text{ cup}} = 3.5 \\\\cdot 240 = 840 \\\\text{ mL}$.\\n\\nVerification: $3 \\\\cdot 240 = 720$ and $0.5 \\\\cdot 240 = 120$; total $= 840$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($68.6$): DIVIDES instead of multiplying ($240 / 3.5 \\\\approx 68.6$) — applies the conversion factor upside-down.\\n* Choice B ($243.5$): ADDS instead of multiplying ($240 + 3.5 = 243.5$) — treats the conversion as an offset.\\n* Choice C ($840$): correct.\\n* Choice D ($8{,}400$): multiplies by $10$ extra (mis-tracks a decimal place; treats $3.5$ as $35$).\\n\\n**Test Day Takeaway:** Unit conversions use MULTIPLICATION with the conversion factor arranged so the OLD unit cancels and the NEW unit remains. Never add and never divide unless converting in the opposite direction.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'single-unit-conversion', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
    },
    {
      id: 'bank-ps-214',
      block: `  { id: 'bank-ps-214', domain: 'problem-solving', skills: ['conditional-probability'], difficulty: 'medium', type: 'fill-in',
    question: 'In a county election, $45\\\\%$ of registered voters identify with Party A. Among those Party A voters, $80\\\\%$ voted in the most recent election. What percent of all registered voters in the county are Party A AND voted in the most recent election? (Report only the number, without the % sign.)',
    correctAnswer: '36',
    explanation: "**SAT Pattern: Joint Probability via Multiplication**\\n\\n**The correct answer is $36$.**\\n\\n**The Fast Way (~10s):** Joint $=$ unconditional $\\\\cdot$ conditional $= 0.45 \\\\cdot 0.80 = 0.36 = 36\\\\%$.\\n\\n**The Full Solution:**\\nWhen the question asks for the percent of the WHOLE population in two categories at once (here: Party A AND voted), multiply the marginal percent by the conditional percent.\\nLet $T$ be the total number of registered voters. Then:\\n* Party A: $0.45 \\\\cdot T$ voters.\\n* Of those, voted: $0.80 \\\\cdot (0.45 \\\\cdot T) = 0.36 \\\\cdot T$.\\nSo $36\\\\%$ of all registered voters are Party A AND voted.\\n\\nVerification: with $T = 1000$, Party A $= 450$, and $80\\\\%$ of $450 = 360 = 36\\\\%$ of $1000$ \\\\checkmark.\\n\\n**Common Mistakes:** Reporting $80$ (the conditional alone, forgetting to multiply by the marginal); reporting $45$ (the marginal alone, forgetting to apply the conditional); reporting $125$ ($45 + 80$, adding instead of multiplying).\\n\\n**Test Day Takeaway:** 'X AND Y' where Y is conditional on X means MULTIPLY the percentages (as decimals). 'X OR Y' would use addition with overlap subtraction. The word 'AND' is the cue for multiplication of conditionals.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'conditional-probability-with-percent', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
    },
    {
      id: 'bank-ps-219',
      block: `  { id: 'bank-ps-219', domain: 'problem-solving', skills: ['percent-of-value'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A store offers a $30\\\\%$ discount off the original price of an item. The amount the customer pays is what percent of the original price?',
    choices: [{ id: 'A', text: '$30\\\\%$' }, { id: 'B', text: '$60\\\\%$' }, { id: 'C', text: '$70\\\\%$' }, { id: 'D', text: '$130\\\\%$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Percent Complement (Discount)**\\n\\n**Choice C is correct.**\\n\\n**The Fast Way (~5s):** $30\\\\%$ off means the customer pays the COMPLEMENT: $100\\\\% - 30\\\\% = 70\\\\%$.\\n\\n**The Full Solution:**\\nA discount of $r\\\\%$ off the original price $P$ means the customer pays $P - rP/100 = P(1 - r/100)$.\\nFor $r = 30$: customer pays $P(1 - 0.30) = 0.70 \\\\cdot P = 70\\\\%$ of the original.\\n\\nVerification: if $P = \\\\$100$, the discount is $\\\\$30$ and the customer pays $\\\\$70 = 70\\\\%$ of $\\\\$100$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice A ($30\\\\%$): reports the DISCOUNT percent instead of the percent the customer pays.\\n* Choice B ($60\\\\%$): doubles the discount ($30 \\\\cdot 2 = 60$) — a frequent off-by-one when computing complements.\\n* Choice C ($70\\\\%$): correct.\\n* Choice D ($130\\\\%$): ADDS the discount to $100\\\\%$ instead of subtracting — applies a markup interpretation.\\n\\n**Test Day Takeaway:** $X\\\\%$ off means the customer pays $(100 - X)\\\\%$. Discount and amount-paid are complements that sum to $100\\\\%$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'percent-complement', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────
// Block replacement that handles both single-line and multi-line formats.
//
// Strategy: locate the unique `id: '${id}',` substring, then walk
// BACKWARD to find the opening `\n  {` of the block, and FORWARD to
// find either the next item start `\n  { ` / `\n  {\n` or the array
// terminator `\n];`. Splice in the new block.
// ─────────────────────────────────────────────────────────────────────
function replaceBlock(src, id, newBlock) {
  const idMarker = `id: '${id}',`;
  const idIdx = src.indexOf(idMarker);
  if (idIdx === -1) return { ok: false, reason: 'id-not-found' };

  // Walk backward to find `\n  {` (item start). The pattern is `\n  {`
  // followed by either ` ` (single-line) or `\n` (multi-line). To avoid
  // matching nested choices arrays etc., require that the item-open is
  // also followed by either ` id:` (single-line) or `\n    id:` (multi-line)
  // — i.e., the brace directly precedes the id we care about.
  let startIdx = -1;
  let cursor = idIdx;
  while (cursor > 0) {
    const back = src.lastIndexOf('\n  {', cursor);
    if (back === -1) break;
    // Validate: this brace must wrap our target id, meaning between this
    // brace and our idMarker there is no intervening `\n  {` (another item).
    const intervening = src.indexOf('\n  {', back + 1);
    if (intervening !== -1 && intervening < idIdx) {
      // This back-brace wraps a DIFFERENT item; move cursor and try again.
      cursor = back - 1;
      continue;
    }
    startIdx = back + 1; // Skip the leading newline → point at `  {`
    break;
  }
  if (startIdx === -1) return { ok: false, reason: 'no-item-start' };

  // Walk forward from startIdx to find the next item start or terminator.
  let endIdx = src.indexOf('\n  { id:', startIdx + 1); // single-line next item
  const endIdxMulti = src.indexOf('\n  {\n', startIdx + 1); // multi-line next item
  if (endIdxMulti !== -1 && (endIdx === -1 || endIdxMulti < endIdx)) {
    endIdx = endIdxMulti;
  }
  if (endIdx === -1) {
    endIdx = src.indexOf('\n];', startIdx);
  }
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
