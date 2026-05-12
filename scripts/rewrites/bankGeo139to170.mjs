#!/usr/bin/env bun
/**
 * bankGeo139to170.mjs — substantive rewrite of 32 worst-tier geometry items.
 *
 * Covers four skill pools (8 items each) authored in an earlier rapid pass
 * with one-line explanations and no distractor analysis:
 *   geo-139..146: volume-of-a-rectangular-prism
 *   geo-147..154: area-of-a-circle
 *   geo-155..162: square-perimeter
 *   geo-163..170: angles-with-parallel-lines-and-transversals
 *
 * Each rewrite preserves id / skills / sourceStyleRef / type / difficulty —
 * only the stem (where suboptimal), choices (where redesigned per the
 * 4-misconception rule), and explanation change.
 *
 * Run:
 *   bun scripts/rewrites/bankGeo139to170.mjs --dry
 *   bun scripts/rewrites/bankGeo139to170.mjs
 */

import { promises as fs } from 'node:fs';

const FILE = '/Users/hareshbhatia/PerformSAT/src/data/questions/bank/geometry.js';

const REWRITES = [
  // ─────────── volume-of-a-rectangular-prism (geo-139..146) ───────────
  {
    id: 'bank-geo-139',
    replacement: `  { id: 'bank-geo-139', domain: 'geometry', skills: ['volume-prism'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A rectangular prism has length $5$, width $3$, and height $4$. What is the volume of the prism?',
    choices: [{ id: 'A', text: '$60$' }, { id: 'B', text: '$12$' }, { id: 'C', text: '$47$' }, { id: 'D', text: '$120$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Volume of a Rectangular Prism**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~5s):** $V = l \\\\cdot w \\\\cdot h = 5 \\\\cdot 3 \\\\cdot 4 = 60$.\\n\\n**The Full Solution:**\\nThe volume of a rectangular prism is the product of its three dimensions: $V = l \\\\cdot w \\\\cdot h$.\\nSubstitute: $V = 5 \\\\cdot 3 \\\\cdot 4 = 15 \\\\cdot 4 = 60$.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($12$): adds the dimensions ($5 + 3 + 4 = 12$) instead of multiplying — confuses volume with the sum-of-edges shortcut.\\n* Choice C ($47$): computes the surface area of one face plus another partial area; arises from mixing 2-D area into the 3-D formula.\\n* Choice D ($120$): doubles the volume — applies the formula $2lwh$ (perhaps confusing with surface area's coefficient of $2$).\\n\\n**Test Day Takeaway:** Volume of a rectangular prism = product of three perpendicular dimensions. Adding dimensions gives a 1-D number; multiplying gives a 3-D number.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'volume-of-a-rectangular-prism', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-140',
    replacement: `  { id: 'bank-geo-140', domain: 'geometry', skills: ['volume-prism'], difficulty: 'easy', type: 'fill-in',
    question: 'A box in the shape of a rectangular prism has dimensions $2$ feet by $3$ feet by $5$ feet. What is the volume of the box, in cubic feet?',
    correctAnswer: '30',
    explanation: "**SAT Pattern: Volume of a Rectangular Prism**\\n\\n**The correct answer is $30$.**\\n\\n**The Fast Way (~5s):** $V = 2 \\\\cdot 3 \\\\cdot 5 = 30$ cubic feet.\\n\\n**The Full Solution:**\\nThe volume of a rectangular prism is the product of its three perpendicular dimensions.\\n$V = 2 \\\\cdot 3 \\\\cdot 5 = 6 \\\\cdot 5 = 30$ cubic feet.\\n\\n**Test Day Takeaway:** When dimensions are in feet, volume is in cubic feet — units cube along with the numbers.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'volume-of-a-rectangular-prism', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-141',
    replacement: `  { id: 'bank-geo-141', domain: 'geometry', skills: ['volume-prism'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A rectangular prism has volume $72$, length $6$, and width $4$. What is the height of the prism?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$12$' }, { id: 'C', text: '$18$' }, { id: 'D', text: '$24$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Volume of a Rectangular Prism**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~10s):** $h = V / (lw) = 72 / (6 \\\\cdot 4) = 72/24 = 3$.\\n\\n**The Full Solution:**\\nStart from $V = lwh$. Solve for $h$: $h = V / (lw)$.\\nCompute the base area: $lw = 6 \\\\cdot 4 = 24$.\\nDivide: $h = 72/24 = 3$.\\n\\nVerification: $6 \\\\cdot 4 \\\\cdot 3 = 72$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($12$): divides by the length only — computes $V/l = 72/6 = 12$, forgetting to also divide by the width.\\n* Choice C ($18$): divides by the width only — computes $V/w = 72/4 = 18$, forgetting to also divide by the length.\\n* Choice D ($24$): reports the base area $lw = 24$ instead of finishing the division.\\n\\n**Test Day Takeaway:** When given $V$ and two of the three dimensions, divide $V$ by the PRODUCT of the known dimensions, not by each separately.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'volume-of-a-rectangular-prism', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-142',
    replacement: `  { id: 'bank-geo-142', domain: 'geometry', skills: ['volume-prism'], difficulty: 'medium', type: 'fill-in',
    question: 'A cube has an edge length of $4$ centimeters. What is the volume of the cube, in cubic centimeters?',
    correctAnswer: '64',
    explanation: "**SAT Pattern: Volume of a Rectangular Prism**\\n\\n**The correct answer is $64$.**\\n\\n**The Fast Way (~5s):** $V = s^3 = 4^3 = 64$.\\n\\n**The Full Solution:**\\nA cube is a rectangular prism with $l = w = h = s$. Volume $= s^3$.\\nSubstitute: $V = 4^3 = 4 \\\\cdot 4 \\\\cdot 4 = 64$ cubic centimeters.\\n\\n**Test Day Takeaway:** Cube volume cubes the side. Don't confuse with $s^2$ (face area) or $6s^2$ (surface area).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'volume-of-a-rectangular-prism', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-143',
    replacement: `  { id: 'bank-geo-143', domain: 'geometry', skills: ['volume-prism'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A rectangular prism has a square base with side length $5$ and a height of $8$. What is the volume of the prism?',
    choices: [{ id: 'A', text: '$200$' }, { id: 'B', text: '$40$' }, { id: 'C', text: '$125$' }, { id: 'D', text: '$80$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Volume of a Rectangular Prism**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~5s):** Square base ⇒ $l = w = 5$. $V = 5 \\\\cdot 5 \\\\cdot 8 = 25 \\\\cdot 8 = 200$.\\n\\n**The Full Solution:**\\nSquare base means length equals width. So $V = s^2 \\\\cdot h = 5^2 \\\\cdot 8 = 25 \\\\cdot 8 = 200$.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($40$): computes the area of one rectangular face ($5 \\\\cdot 8$) and stops, treating the prism as 2-D.\\n* Choice C ($125$): treats the prism as a cube, using $s^3 = 5^3 = 125$ and ignoring the given height.\\n* Choice D ($80$): doubles the rectangular face area ($2 \\\\cdot 5 \\\\cdot 8$), perhaps computing the area of two opposite faces but stopping there.\\n\\n**Test Day Takeaway:** \\"Square base\\" tells you $l = w$. Don't substitute for $h$ — height is given separately.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'volume-of-a-rectangular-prism', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-144',
    replacement: `  { id: 'bank-geo-144', domain: 'geometry', skills: ['volume-prism'], difficulty: 'medium', type: 'fill-in',
    question: 'A box in the shape of a rectangular prism has a volume of $48$ cubic inches and a square base with side length $4$ inches. What is the height of the box, in inches?',
    correctAnswer: '3',
    explanation: "**SAT Pattern: Volume of a Rectangular Prism**\\n\\n**The correct answer is $3$.**\\n\\n**The Fast Way (~10s):** Base area $= 4^2 = 16$. Height $= V / \\\\text{base area} = 48/16 = 3$.\\n\\n**The Full Solution:**\\nVolume of a rectangular prism with a square base: $V = s^2 h$.\\nSolve for $h$: $h = V / s^2 = 48 / 16 = 3$ inches.\\n\\nVerification: $4 \\\\cdot 4 \\\\cdot 3 = 48$ \\\\checkmark.\\n\\n**Test Day Takeaway:** With a square base, the base area is $s^2$, not $s$. Divide volume by base area to recover the height.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'volume-of-a-rectangular-prism', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-145',
    replacement: `  { id: 'bank-geo-145', domain: 'geometry', skills: ['volume-prism'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The length, width, and height of a rectangular prism are each doubled to form a new rectangular prism. The volume of the new prism is how many times the volume of the original prism?',
    choices: [{ id: 'A', text: '$8$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$6$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Volume of a Rectangular Prism**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~10s):** Each dimension doubles, so volume scales by $2 \\\\cdot 2 \\\\cdot 2 = 8$.\\n\\n**The Full Solution:**\\nOriginal volume: $V = lwh$.\\nNew volume: $V' = (2l)(2w)(2h) = 8 \\\\cdot lwh = 8V$.\\nThe new volume is $8$ times the original.\\n\\nNumerical check: try $l = w = h = 1$ (original $V = 1$); after doubling, all sides are $2$, new $V = 8 = 8 \\\\cdot 1$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($2$): scales the volume by the same factor as the linear scaling — common error of treating volume as 1-D.\\n* Choice C ($4$): squares the linear scale ($2^2 = 4$) — treats volume as 2-D (area-like) instead of 3-D.\\n* Choice D ($6$): adds the scaling across dimensions ($2 + 2 + 2 = 6$) — additive misread of multiplicative scaling.\\n\\n**Test Day Takeaway:** Linear scaling by $k$ multiplies length by $k$, area by $k^2$, and volume by $k^3$. The exponent matches the dimension.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'volume-of-a-rectangular-prism', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-146',
    replacement: `  { id: 'bank-geo-146', domain: 'geometry', skills: ['volume-prism'], difficulty: 'hard', type: 'fill-in',
    question: 'A cube has a volume of $125$ cubic inches. What is the surface area of the cube, in square inches?',
    correctAnswer: '150',
    explanation: "**SAT Pattern: Volume of a Rectangular Prism**\\n\\n**The correct answer is $150$.**\\n\\n**The Fast Way (~15s):** $s = \\\\sqrt[3]{125} = 5$. Surface area $= 6s^2 = 6 \\\\cdot 25 = 150$.\\n\\n**The Full Solution:**\\nStep 1: Recover the side from the volume. $V = s^3$, so $s = \\\\sqrt[3]{125} = 5$ inches.\\nStep 2: Apply the surface-area formula. A cube has $6$ congruent square faces, each with area $s^2$. Total surface area $= 6s^2 = 6 \\\\cdot 25 = 150$ square inches.\\n\\n**Test Day Takeaway:** Cube volume gives the side via cube root. Cube surface area uses $6s^2$ (six faces, each $s^2$).",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'volume-of-a-rectangular-prism', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },

  // ─────────── area-of-a-circle (geo-147..154) ───────────
  {
    id: 'bank-geo-147',
    replacement: `  { id: 'bank-geo-147', domain: 'geometry', skills: ['circle-equation'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A circle in the $xy$-plane has a radius of $5$. What is the area of the circle, in terms of $\\\\pi$?',
    choices: [{ id: 'A', text: '$25\\\\pi$' }, { id: 'B', text: '$10\\\\pi$' }, { id: 'C', text: '$5\\\\pi$' }, { id: 'D', text: '$50\\\\pi$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Area of a Circle**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~5s):** $A = \\\\pi r^2 = \\\\pi \\\\cdot 25 = 25\\\\pi$.\\n\\n**The Full Solution:**\\nArea of a circle: $A = \\\\pi r^2$.\\nSubstitute $r = 5$: $A = \\\\pi \\\\cdot 5^2 = 25\\\\pi$.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($10\\\\pi$): uses the circumference formula $2\\\\pi r$ instead of the area formula $\\\\pi r^2$.\\n* Choice C ($5\\\\pi$): drops the square — treats the formula as $\\\\pi r$.\\n* Choice D ($50\\\\pi$): doubles the area — perhaps confuses with $2\\\\pi r^2$ or computes $\\\\pi(2r)^2/2$.\\n\\n**Test Day Takeaway:** Area uses $r^2$ (because area is 2-D). Circumference uses $r$ (because perimeter is 1-D). Always square the radius for area.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'area-of-a-circle', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-148',
    replacement: `  { id: 'bank-geo-148', domain: 'geometry', skills: ['circle-equation'], difficulty: 'easy', type: 'fill-in',
    question: 'A circle has a radius of $3$. The area of the circle can be written in the form $k\\\\pi$, where $k$ is a constant. What is the value of $k$?',
    correctAnswer: '9',
    explanation: "**SAT Pattern: Area of a Circle**\\n\\n**The correct answer is $9$.**\\n\\n**The Fast Way (~5s):** $A = \\\\pi r^2 = 9\\\\pi$, so $k = 9$.\\n\\n**The Full Solution:**\\nApply $A = \\\\pi r^2$ with $r = 3$: $A = \\\\pi \\\\cdot 9 = 9\\\\pi$.\\nThe coefficient of $\\\\pi$ is $9$, so $k = 9$.\\n\\n**Test Day Takeaway:** When asked for \\"the coefficient of $\\\\pi$\\" or \\"the value of $k$ in $k\\\\pi$\\", just compute the radius squared (for area) or twice the radius (for circumference).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'area-of-a-circle', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-149',
    replacement: `  { id: 'bank-geo-149', domain: 'geometry', skills: ['circle-equation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A circle has an area of $36\\\\pi$ square units. What is the radius of the circle?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$18$' }, { id: 'C', text: '$36$' }, { id: 'D', text: '$12$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Area of a Circle**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~10s):** $r^2 = 36 \\\\Rightarrow r = 6$.\\n\\n**The Full Solution:**\\nStart from $A = \\\\pi r^2$. With $A = 36\\\\pi$: $\\\\pi r^2 = 36\\\\pi$.\\nDivide both sides by $\\\\pi$: $r^2 = 36$.\\nTake the positive square root: $r = 6$.\\n\\nVerification: $\\\\pi(6)^2 = 36\\\\pi$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($18$): halves the area coefficient ($36/2$) — treats the formula as $2r = A/\\\\pi$.\\n* Choice C ($36$): forgets to take the square root — reports $r^2$ instead of $r$.\\n* Choice D ($12$): doubles the answer — perhaps confuses with diameter or applies $r = A/(\\\\pi \\\\cdot \\\\text{something})$.\\n\\n**Test Day Takeaway:** Going from area back to radius requires square root, not just division. Solve $r^2 = A/\\\\pi$ then take the root.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'area-of-a-circle', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-150',
    replacement: `  { id: 'bank-geo-150', domain: 'geometry', skills: ['circle-equation'], difficulty: 'medium', type: 'fill-in',
    question: 'A circle has a diameter of $14$. The area of the circle can be written as $k\\\\pi$, where $k$ is a constant. What is the value of $k$?',
    correctAnswer: '49',
    explanation: "**SAT Pattern: Area of a Circle**\\n\\n**The correct answer is $49$.**\\n\\n**The Fast Way (~10s):** Radius $= 14/2 = 7$. $A = \\\\pi r^2 = 49\\\\pi$. So $k = 49$.\\n\\n**The Full Solution:**\\nStep 1: Halve the diameter to get the radius. $r = 14/2 = 7$.\\nStep 2: Apply the area formula. $A = \\\\pi r^2 = \\\\pi \\\\cdot 49 = 49\\\\pi$.\\nThe coefficient of $\\\\pi$ is $49$.\\n\\n**Test Day Takeaway:** Diameter ≠ radius. Halve the diameter FIRST, then square. A common trap is squaring the diameter directly, which gives $4r^2$ — four times too large.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'area-of-a-circle', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-151',
    replacement: `  { id: 'bank-geo-151', domain: 'geometry', skills: ['circle-equation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If the radius of a circle is doubled, the area of the resulting circle is how many times the area of the original circle?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$8$' }, { id: 'D', text: '$1$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Area of a Circle**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~5s):** Area is proportional to $r^2$, so doubling $r$ multiplies the area by $2^2 = 4$.\\n\\n**The Full Solution:**\\nOriginal area: $A = \\\\pi r^2$.\\nNew radius: $2r$. New area: $A' = \\\\pi (2r)^2 = \\\\pi \\\\cdot 4r^2 = 4A$.\\nThe new area is $4$ times the original.\\n\\nNumerical check: try $r = 1$ ($A = \\\\pi$); after doubling, $r = 2$, $A' = 4\\\\pi = 4 \\\\cdot \\\\pi$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($2$): scales the area by the same factor as the linear scaling — common error of treating area as 1-D.\\n* Choice C ($8$): cubes the linear scale ($2^3$) — applies the volume scaling to an area.\\n* Choice D ($1$): assumes area is independent of radius — fundamental misread.\\n\\n**Test Day Takeaway:** Linear scaling by $k$ multiplies area by $k^2$ and volume by $k^3$. The exponent matches the dimension.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'area-of-a-circle', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-152',
    replacement: `  { id: 'bank-geo-152', domain: 'geometry', skills: ['circle-equation'], difficulty: 'medium', type: 'fill-in',
    question: 'A circle has an area of $100\\\\pi$. The circumference of the circle can be written as $k\\\\pi$, where $k$ is a constant. What is the value of $k$?',
    correctAnswer: '20',
    explanation: "**SAT Pattern: Area of a Circle**\\n\\n**The correct answer is $20$.**\\n\\n**The Fast Way (~10s):** $r^2 = 100 \\\\Rightarrow r = 10$. $C = 2\\\\pi r = 20\\\\pi$. So $k = 20$.\\n\\n**The Full Solution:**\\nStep 1: Recover the radius from the area. $\\\\pi r^2 = 100\\\\pi \\\\Rightarrow r^2 = 100 \\\\Rightarrow r = 10$.\\nStep 2: Apply the circumference formula. $C = 2\\\\pi r = 2\\\\pi \\\\cdot 10 = 20\\\\pi$.\\nThe coefficient of $\\\\pi$ is $20$.\\n\\n**Test Day Takeaway:** Two-step problems between area and circumference go through the radius. Area $\\\\to r^2 \\\\to r \\\\to C$ (or $C \\\\to r \\\\to r^2 \\\\to A$).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'area-of-a-circle', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-153',
    replacement: `  { id: 'bank-geo-153', domain: 'geometry', skills: ['circle-equation'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A circle has a circumference of $12\\\\pi$. What is the area of the circle, in terms of $\\\\pi$?',
    choices: [{ id: 'A', text: '$36\\\\pi$' }, { id: 'B', text: '$144\\\\pi$' }, { id: 'C', text: '$24\\\\pi$' }, { id: 'D', text: '$6\\\\pi$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Area of a Circle**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~10s):** $2\\\\pi r = 12\\\\pi \\\\Rightarrow r = 6$. $A = \\\\pi r^2 = 36\\\\pi$.\\n\\n**The Full Solution:**\\nStep 1: Recover the radius from the circumference. $C = 2\\\\pi r = 12\\\\pi \\\\Rightarrow r = 6$.\\nStep 2: Apply the area formula. $A = \\\\pi r^2 = \\\\pi \\\\cdot 36 = 36\\\\pi$.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($144\\\\pi$): squares the circumference coefficient ($12^2 = 144$) — skips the step of dividing by $2\\\\pi$ to get the radius.\\n* Choice C ($24\\\\pi$): doubles the circumference instead of solving for the radius.\\n* Choice D ($6\\\\pi$): reports the radius times $\\\\pi$ instead of the area — confuses formulas.\\n\\n**Test Day Takeaway:** From circumference to area, always go through the radius. $C = 2\\\\pi r$ gives $r$ in one division by $2\\\\pi$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'area-of-a-circle', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-154',
    replacement: `  { id: 'bank-geo-154', domain: 'geometry', skills: ['circle-equation'], difficulty: 'hard', type: 'fill-in',
    question: 'A circle is inscribed in a square that has a side length of $10$. The area of the circle can be written as $k\\\\pi$, where $k$ is a constant. What is the value of $k$?',
    correctAnswer: '25',
    explanation: "**SAT Pattern: Area of a Circle**\\n\\n**The correct answer is $25$.**\\n\\n**The Fast Way (~10s):** Inscribed in square of side $10$ ⇒ diameter $= 10 \\\\Rightarrow r = 5$. $A = \\\\pi r^2 = 25\\\\pi$. So $k = 25$.\\n\\n**The Full Solution:**\\nWhen a circle is inscribed in a square, the circle's diameter equals the square's side length. So diameter $= 10$, and radius $= 10/2 = 5$.\\n$A = \\\\pi r^2 = \\\\pi \\\\cdot 25 = 25\\\\pi$. The coefficient of $\\\\pi$ is $25$.\\n\\n**Test Day Takeaway:** Inscribed circle: diameter $=$ side of the square (the circle just fits inside). Don't confuse with a circle CIRCUMscribed around the square (where the diagonal of the square equals the diameter of the circle).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'area-of-a-circle', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },

  // ─────────── square-perimeter (geo-155..162) ───────────
  {
    id: 'bank-geo-155',
    replacement: `  { id: 'bank-geo-155', domain: 'geometry', skills: ['triangle-area'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A square has a side length of $7$. What is the perimeter of the square?',
    choices: [{ id: 'A', text: '$28$' }, { id: 'B', text: '$14$' }, { id: 'C', text: '$49$' }, { id: 'D', text: '$21$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Square Perimeter**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~5s):** $P = 4s = 4 \\\\cdot 7 = 28$.\\n\\n**The Full Solution:**\\nA square has $4$ congruent sides. Perimeter $= 4s = 4 \\\\cdot 7 = 28$.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($14$): doubles the side instead of multiplying by $4$ — counts only two sides.\\n* Choice C ($49$): computes the area $s^2 = 49$ instead of the perimeter.\\n* Choice D ($21$): multiplies by $3$ instead of $4$ — counts three sides (perhaps confusing with a triangle).\\n\\n**Test Day Takeaway:** Perimeter sums ALL sides. A square has $4$ congruent sides ⇒ $P = 4s$. Area uses $s^2$ — different formula.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'square-perimeter', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-156',
    replacement: `  { id: 'bank-geo-156', domain: 'geometry', skills: ['triangle-area'], difficulty: 'easy', type: 'fill-in',
    question: 'A square has an area of $64$. What is the perimeter of the square?',
    correctAnswer: '32',
    explanation: "**SAT Pattern: Square Perimeter**\\n\\n**The correct answer is $32$.**\\n\\n**The Fast Way (~10s):** $s = \\\\sqrt{64} = 8$, then $P = 4 \\\\cdot 8 = 32$.\\n\\n**The Full Solution:**\\nStep 1: Recover the side from the area. $s^2 = 64 \\\\Rightarrow s = 8$.\\nStep 2: Apply the perimeter formula. $P = 4s = 4 \\\\cdot 8 = 32$.\\n\\n**Test Day Takeaway:** When given area, take square root to get the side, then multiply by $4$ for perimeter.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'square-perimeter', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-157',
    replacement: `  { id: 'bank-geo-157', domain: 'geometry', skills: ['triangle-area'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A square has a perimeter of $36$. What is the area of the square?',
    choices: [{ id: 'A', text: '$81$' }, { id: 'B', text: '$9$' }, { id: 'C', text: '$36$' }, { id: 'D', text: '$72$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Square Perimeter**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~10s):** $s = P/4 = 36/4 = 9$. Area $= s^2 = 81$.\\n\\n**The Full Solution:**\\nStep 1: Recover the side from the perimeter. $s = P/4 = 36/4 = 9$.\\nStep 2: Apply the area formula. $A = s^2 = 81$.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($9$): reports the side length instead of finishing with the area formula.\\n* Choice C ($36$): reports the perimeter back as the area — formula confusion.\\n* Choice D ($72$): doubles the perimeter ($2 \\\\cdot 36$) instead of computing $s^2$.\\n\\n**Test Day Takeaway:** Perimeter $\\\\to$ side: divide by $4$. Side $\\\\to$ area: square it. Two-step conversion through the side length.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'square-perimeter', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-158',
    replacement: `  { id: 'bank-geo-158', domain: 'geometry', skills: ['triangle-area'], difficulty: 'medium', type: 'fill-in',
    question: 'A square has a diagonal of length $\\\\sqrt{50}$. What is the perimeter of the square?',
    correctAnswer: '20',
    explanation: "**SAT Pattern: Square Perimeter**\\n\\n**The correct answer is $20$.**\\n\\n**The Fast Way (~15s):** Diagonal $= s\\\\sqrt{2}$, so $s = \\\\sqrt{50}/\\\\sqrt{2} = \\\\sqrt{25} = 5$. $P = 4s = 20$.\\n\\n**The Full Solution:**\\nFor a square, the diagonal and side are related by the Pythagorean theorem: $d^2 = s^2 + s^2 = 2s^2$, so $d = s\\\\sqrt{2}$.\\nSolve for $s$: $s = d/\\\\sqrt{2} = \\\\sqrt{50}/\\\\sqrt{2} = \\\\sqrt{50/2} = \\\\sqrt{25} = 5$.\\nApply the perimeter formula: $P = 4 \\\\cdot 5 = 20$.\\n\\nVerification: side $= 5$, diagonal $= 5\\\\sqrt{2} = \\\\sqrt{50}$ \\\\checkmark.\\n\\n**Test Day Takeaway:** The diagonal of a square is the side times $\\\\sqrt{2}$ (45-45-90 special triangle). Divide by $\\\\sqrt{2}$ to recover the side; rationalize or use $\\\\sqrt{a/b}$ to simplify.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'square-perimeter', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-159',
    replacement: `  { id: 'bank-geo-159', domain: 'geometry', skills: ['triangle-area'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The perimeter of a square is doubled to form a new square. The area of the new square is how many times the area of the original square?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$8$' }, { id: 'D', text: '$1$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Square Perimeter**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~10s):** Doubling the perimeter doubles the side ($P = 4s$ is linear in $s$). Doubling the side scales the area by $2^2 = 4$.\\n\\n**The Full Solution:**\\nOriginal side: $s$. Original area: $s^2$.\\nNew perimeter $= 2P = 8s$, so new side $= 2s$.\\nNew area $= (2s)^2 = 4s^2$, which is $4$ times the original.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($2$): scales the area by the same factor as the linear scaling — common 1-D vs. 2-D error.\\n* Choice C ($8$): cubes the scale ($2^3$) — applies volume scaling to area.\\n* Choice D ($1$): assumes area unchanged — fundamental misread.\\n\\n**Test Day Takeaway:** Perimeter and side scale together (both 1-D). Area scales as the square of the linear factor.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'square-perimeter', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-160',
    replacement: `  { id: 'bank-geo-160', domain: 'geometry', skills: ['triangle-area'], difficulty: 'medium', type: 'fill-in',
    question: 'A square has a side length of $x$. If $x = 9$, what is the perimeter of the square?',
    correctAnswer: '36',
    explanation: "**SAT Pattern: Square Perimeter**\\n\\n**The correct answer is $36$.**\\n\\n**The Fast Way (~5s):** $P = 4x = 4 \\\\cdot 9 = 36$.\\n\\n**The Full Solution:**\\nPerimeter of a square with side $x$ is $P = 4x$.\\nSubstitute $x = 9$: $P = 4 \\\\cdot 9 = 36$.\\n\\n**Test Day Takeaway:** Express the perimeter in terms of the side variable FIRST, then substitute. The variable $x$ is just a stand-in for the numerical side length.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'square-perimeter', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-161',
    replacement: `  { id: 'bank-geo-161', domain: 'geometry', skills: ['triangle-area'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A square has a side length of $2x + 3$. Which expression represents the perimeter of the square?',
    choices: [{ id: 'A', text: '$8x + 12$' }, { id: 'B', text: '$4x + 12$' }, { id: 'C', text: '$8x + 3$' }, { id: 'D', text: '$2x + 12$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Square Perimeter**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~5s):** $P = 4(2x + 3) = 8x + 12$.\\n\\n**The Full Solution:**\\nPerimeter of a square: $P = 4s$. Substitute $s = 2x + 3$:\\n$P = 4(2x + 3) = 8x + 12$ (distribute the $4$ through both terms).\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($4x + 12$): distributes the $4$ only to the constant — keeps $2x$ unchanged.\\n* Choice C ($8x + 3$): distributes the $4$ only to $2x$ — keeps $3$ unchanged.\\n* Choice D ($2x + 12$): multiplies only the constant by $4$ and drops the coefficient on $x$.\\n\\n**Test Day Takeaway:** When the side is an expression, distribute the $4$ to EVERY term. $4(a + b) = 4a + 4b$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'square-perimeter', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-162',
    replacement: `  { id: 'bank-geo-162', domain: 'geometry', skills: ['triangle-area'], difficulty: 'hard', type: 'fill-in',
    question: 'A square has a perimeter of $4x + 16$ and a side length of $x + 4$. If the perimeter of the square is $48$, what is the value of $x$?',
    correctAnswer: '8',
    explanation: "**SAT Pattern: Square Perimeter**\\n\\n**The correct answer is $8$.**\\n\\n**The Fast Way (~10s):** $4x + 16 = 48 \\\\Rightarrow 4x = 32 \\\\Rightarrow x = 8$.\\n\\n**The Full Solution:**\\nSet the perimeter expression equal to the given perimeter: $4x + 16 = 48$.\\nSubtract $16$: $4x = 32$.\\nDivide by $4$: $x = 8$.\\n\\nVerification: side $= x + 4 = 12$, perimeter $= 4 \\\\cdot 12 = 48$ \\\\checkmark.\\n\\n**Test Day Takeaway:** Setting an algebraic expression equal to a numeric value gives a linear equation. Solve, then verify by plugging back in.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'square-perimeter', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },

  // ─────────── angles-with-parallel-lines-and-transversals (geo-163..170) ───────────
  {
    id: 'bank-geo-163',
    replacement: `  { id: 'bank-geo-163', domain: 'geometry', skills: ['triangle-angle-sum'], difficulty: 'easy', type: 'multiple-choice',
    question: 'In the $xy$-plane, two parallel lines are intersected by a transversal. One of the angles formed has a measure of $65°$. What is the measure of the angle that is the alternate interior angle to the given angle?',
    choices: [{ id: 'A', text: '$65°$' }, { id: 'B', text: '$115°$' }, { id: 'C', text: '$25°$' }, { id: 'D', text: '$130°$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~5s):** Alternate interior angles formed by parallel lines and a transversal are CONGRUENT. So the alternate interior angle is also $65°$.\\n\\n**The Full Solution:**\\nWhen two parallel lines are cut by a transversal, alternate interior angles are equal in measure. Given one angle is $65°$, its alternate interior angle is also $65°$.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($115°$): uses the SUPPLEMENTARY angle rule — correct for same-side (co-interior) angles, not alternate interior. $180 - 65 = 115$.\\n* Choice C ($25°$): uses the COMPLEMENTARY rule — $90 - 65 = 25$. Complementary angles are not the relationship here.\\n* Choice D ($130°$): doubles the angle — no geometric reason for this relationship.\\n\\n**Test Day Takeaway:** Parallel lines + transversal angle rules:\\n  • Corresponding & alternate (interior or exterior) angles are CONGRUENT.\\n  • Same-side (co-interior) angles are SUPPLEMENTARY (sum to $180°$).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'angles-with-parallel-lines-and-transversals', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-164',
    replacement: `  { id: 'bank-geo-164', domain: 'geometry', skills: ['triangle-angle-sum'], difficulty: 'easy', type: 'fill-in',
    question: 'Two parallel lines are cut by a transversal, forming two same-side interior angles that measure $x°$ and $(2x + 30)°$. What is the value of $x$?',
    correctAnswer: '50',
    explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\\n\\n**The correct answer is $50$.**\\n\\n**The Fast Way (~10s):** Same-side interior angles are supplementary: $x + (2x + 30) = 180 \\\\Rightarrow 3x = 150 \\\\Rightarrow x = 50$.\\n\\n**The Full Solution:**\\nSame-side (co-interior) angles formed by parallel lines and a transversal sum to $180°$.\\nSet up the equation: $x + (2x + 30) = 180$.\\nCombine: $3x + 30 = 180$.\\nSubtract $30$: $3x = 150$.\\nDivide: $x = 50$.\\n\\nVerification: $50 + 130 = 180$ \\\\checkmark (the two angles are $50°$ and $130°$).\\n\\n**Test Day Takeaway:** Same-side interior angles ⇒ SUPPLEMENTARY (sum $= 180°$). Don't confuse with alternate interior, which are EQUAL.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'angles-with-parallel-lines-and-transversals', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-165',
    replacement: `  { id: 'bank-geo-165', domain: 'geometry', skills: ['triangle-angle-sum'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Two parallel lines are intersected by a transversal. One of the angles formed has a measure of $48°$. What is the measure of its corresponding angle?',
    choices: [{ id: 'A', text: '$48°$' }, { id: 'B', text: '$132°$' }, { id: 'C', text: '$42°$' }, { id: 'D', text: '$96°$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~5s):** Corresponding angles formed by parallel lines and a transversal are CONGRUENT. So the corresponding angle is $48°$.\\n\\n**The Full Solution:**\\nCorresponding angles occupy the same position at each intersection point. When the cut lines are parallel, corresponding angles are equal in measure.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($132°$): applies the supplementary rule ($180 - 48 = 132$) — correct for linear pairs or co-interior angles, not corresponding.\\n* Choice C ($42°$): applies the complementary rule ($90 - 48 = 42$) — no parallel-lines theorem uses complementary.\\n* Choice D ($96°$): doubles the angle — no geometric justification.\\n\\n**Test Day Takeaway:** Corresponding angles sit at the same \\"corner\\" of each intersection. They're always congruent when the cut lines are parallel.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'angles-with-parallel-lines-and-transversals', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-166',
    replacement: `  { id: 'bank-geo-166', domain: 'geometry', skills: ['triangle-angle-sum'], difficulty: 'medium', type: 'fill-in',
    question: 'In the $xy$-plane, lines $\\\\ell_1$ and $\\\\ell_2$ are parallel. A transversal forms an angle of $70°$ with $\\\\ell_1$. What is the measure, in degrees, of the same-side (co-interior) angle on $\\\\ell_2$?',
    correctAnswer: '110',
    explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\\n\\n**The correct answer is $110$.**\\n\\n**The Fast Way (~5s):** Same-side interior angles are supplementary: $180 - 70 = 110$.\\n\\n**The Full Solution:**\\nThe same-side (co-interior) angle on the second line is supplementary to the angle on the first line: $\\\\text{measure} = 180 - 70 = 110$ degrees.\\n\\n**Test Day Takeaway:** Same-side interior angles ⇒ supplementary. Subtract from $180°$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'angles-with-parallel-lines-and-transversals', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-167',
    replacement: `  { id: 'bank-geo-167', domain: 'geometry', skills: ['triangle-angle-sum'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Two lines intersect at a point, forming two pairs of vertical angles. One of the vertical angles has a measure of $115°$. What is the measure of its vertical angle (the angle directly across from it)?',
    choices: [{ id: 'A', text: '$115°$' }, { id: 'B', text: '$65°$' }, { id: 'C', text: '$45°$' }, { id: 'D', text: '$230°$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~5s):** Vertical angles are always CONGRUENT.\\n\\n**The Full Solution:**\\nWhen two lines intersect, the two angles directly opposite each other (across the intersection) are called vertical angles. They are always equal in measure.\\nGiven one vertical angle is $115°$, the other is also $115°$.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($65°$): gives the measure of the ADJACENT angle ($180 - 115 = 65$), not the vertical angle.\\n* Choice C ($45°$): random — no geometric relationship.\\n* Choice D ($230°$): doubles the angle — no geometric justification.\\n\\n**Test Day Takeaway:** Vertical angles (\\"X-pattern\\" at an intersection) are equal. Adjacent angles at the intersection are supplementary (sum $= 180°$). Both rules hold even without parallel lines.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'angles-with-parallel-lines-and-transversals', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-168',
    replacement: `  { id: 'bank-geo-168', domain: 'geometry', skills: ['triangle-angle-sum'], difficulty: 'medium', type: 'fill-in',
    question: 'Two parallel lines are cut by a transversal. One angle measures $(3x + 10)°$ and its corresponding angle measures $(4x - 20)°$. What is the value of $x$?',
    correctAnswer: '30',
    explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\\n\\n**The correct answer is $30$.**\\n\\n**The Fast Way (~10s):** Corresponding angles are equal: $3x + 10 = 4x - 20 \\\\Rightarrow x = 30$.\\n\\n**The Full Solution:**\\nCorresponding angles formed by parallel lines and a transversal are congruent: $3x + 10 = 4x - 20$.\\nSubtract $3x$: $10 = x - 20$.\\nAdd $20$: $x = 30$.\\n\\nVerification: both angles measure $3(30) + 10 = 100$ degrees \\\\checkmark.\\n\\n**Test Day Takeaway:** When the problem states two angles are corresponding (or alternate), set them EQUAL. When same-side interior, set them to sum to $180°$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'angles-with-parallel-lines-and-transversals', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-169',
    replacement: `  { id: 'bank-geo-169', domain: 'geometry', skills: ['triangle-angle-sum'], difficulty: 'hard', type: 'multiple-choice',
    question: 'Lines $\\\\ell_1$ and $\\\\ell_2$ are parallel and are intersected by a transversal. The transversal forms an angle of $5x°$ on $\\\\ell_1$ and a same-side interior angle of $(x + 30)°$ on $\\\\ell_2$. What is the value of $x$?',
    choices: [{ id: 'A', text: '$25$' }, { id: 'B', text: '$30$' }, { id: 'C', text: '$35$' }, { id: 'D', text: '$45$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\\n\\n**Choice A is correct.**\\n\\n**The Fast Way (~15s):** Same-side interior angles are supplementary: $5x + (x + 30) = 180 \\\\Rightarrow 6x = 150 \\\\Rightarrow x = 25$.\\n\\n**The Full Solution:**\\nSame-side interior angles formed by parallel lines and a transversal are supplementary: $5x + (x + 30) = 180$.\\nCombine: $6x + 30 = 180$.\\nSubtract $30$: $6x = 150$.\\nDivide: $x = 25$.\\n\\nVerification: angles are $5(25) = 125°$ and $25 + 30 = 55°$. Sum: $125 + 55 = 180$ \\\\checkmark.\\n\\n**Why the wrong answers are tempting:**\\n* Choice B ($30$): sets the angles EQUAL ($5x = x + 30 \\\\Rightarrow 4x = 30 \\\\Rightarrow x = 7.5$) — wrong relationship; same-side interior are supplementary, not congruent.\\n* Choice C ($35$): arithmetic error in the sum.\\n* Choice D ($45$): solves $5x + x = 180 - 30 \\\\Rightarrow 6x = 150 \\\\Rightarrow x = 25$, but then doubles or mis-derives.\\n\\n**Test Day Takeaway:** Always check the type of angle pair: alternate / corresponding ⇒ EQUAL; same-side ⇒ SUM to $180°$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'angles-with-parallel-lines-and-transversals', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
  {
    id: 'bank-geo-170',
    replacement: `  { id: 'bank-geo-170', domain: 'geometry', skills: ['triangle-angle-sum'], difficulty: 'hard', type: 'fill-in',
    question: 'Two parallel lines are cut by a transversal, forming alternate exterior angles measuring $(2x + 15)°$ and $(3x - 10)°$. What is the value of $x$?',
    correctAnswer: '25',
    explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\\n\\n**The correct answer is $25$.**\\n\\n**The Fast Way (~10s):** Alternate exterior angles are equal: $2x + 15 = 3x - 10 \\\\Rightarrow x = 25$.\\n\\n**The Full Solution:**\\nAlternate exterior angles formed by parallel lines and a transversal are congruent: $2x + 15 = 3x - 10$.\\nSubtract $2x$: $15 = x - 10$.\\nAdd $10$: $x = 25$.\\n\\nVerification: both angles measure $2(25) + 15 = 65$ degrees \\\\checkmark.\\n\\n**Test Day Takeaway:** Alternate (interior OR exterior) angles ⇒ EQUAL. Both pairs share the same congruence property when the cut lines are parallel.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'angles-with-parallel-lines-and-transversals', authoredBy: 'performsat-engine', createdAt: '2026-05-12' },`,
  },
];

// ---------------------------------------------------------------------------
// Apply
// ---------------------------------------------------------------------------

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry');

  let src = await fs.readFile(FILE, 'utf8');
  let applied = 0;
  let skipped = 0;

  for (const r of REWRITES) {
    const startIdx = src.indexOf(`{ id: '${r.id}',`);
    if (startIdx === -1) {
      console.log(`SKIP ${r.id}: id not found in file`);
      skipped++;
      continue;
    }
    const endMarker = src.indexOf(`createdAt: '2026-05-11' },`, startIdx);
    if (endMarker === -1) {
      console.log(`SKIP ${r.id}: createdAt end-marker not found`);
      skipped++;
      continue;
    }
    if (endMarker - startIdx > 3000) {
      console.log(`SKIP ${r.id}: end marker too far (${endMarker - startIdx} chars)`);
      skipped++;
      continue;
    }
    const lineStart = src.lastIndexOf('\n', startIdx) + 1;
    const lineEnd = src.indexOf('\n', endMarker);
    const oldBlock = src.slice(lineStart, lineEnd);

    if (!oldBlock.startsWith('  { id:')) {
      console.log(`SKIP ${r.id}: unexpected indentation`);
      skipped++;
      continue;
    }

    if (dryRun) {
      console.log(`[dry] ${r.id}: ${oldBlock.length} → ${r.replacement.length} chars`);
    } else {
      src = src.slice(0, lineStart) + r.replacement + src.slice(lineEnd);
      console.log(`OK   ${r.id}: ${oldBlock.length} → ${r.replacement.length} chars`);
    }
    applied++;
  }

  if (!dryRun) await fs.writeFile(FILE, src);

  console.log('');
  console.log(`${dryRun ? '[DRY] ' : ''}${applied} rewrites applied, ${skipped} skipped.`);
}

main().catch(e => { console.error(e); process.exit(1); });
