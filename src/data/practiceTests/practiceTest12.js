// Practice Test 12 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Round-6 propagation: M1 lifted to band-3 ceiling on easy items, domain
// rebalanced to 7/6/5/4. M2 hardened to 0E/6M/16H with band-7 ceilings on
// most hard items and concept-fusion items added at the top end.

export const practiceTest12 = {
  id: "practice-test-12",
  title: "Practice Test 12",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
// Practice Test 12 — Math Module 1
// Theme: Comprehensive Mix (Capstone Difficulty)
// 22 questions: Easy (1-5), Medium (6-14), Hard (15-22)

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A function $h$ is defined by $h(x) = -2x + 9$. What is the value of $h(3) + 5$?",
  choices: [
    // distractor: stops one step early — gives $h(3) = 3$ without adding $5$
    { id: "A", text: "$3$" },
    { id: "B", text: "$8$" },
    // distractor: drops the negative sign — computes $2(3) + 9 + 5 = 20$
    { id: "C", text: "$20$" },
    // distractor: applies the inverse operation — subtracts $5$ instead of adding
    { id: "D", text: "$-2$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $h(3) = -2(3) + 9 = -6 + 9 = 3$. Then $h(3) + 5 = 3 + 5 = 8$.\n\n**The Full Solution:**\nSubstitute $x = 3$: $h(3) = -2(3) + 9 = -6 + 9 = 3$.\nAdd $5$: $h(3) + 5 = 3 + 5 = 8$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives $h(3) = 3$ but forgets to add $5$.\n* Choice C: \"applies the inverse operation\" — drops the negative sign on the slope ($2(3) + 9 + 5 = 20$).\n* Choice D: \"applies the inverse operation\" — subtracts $5$ instead of adding ($3 - 5 = -2$).\n\n**Test Day Takeaway:** Always re-read the LAST step. After evaluating a function, check whether the question wants the function value or some shifted version of it.",
  skills: ["function-interpretation"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The ratio of cats to dogs at an animal shelter is $5 : 3$. If the shelter has $40$ cats and dogs combined, how many of them are dogs?",
  choices: [
    // distractor: applies the percent forward — uses $\frac{3}{8} \cdot 40$ but mis-rounds
    { id: "A", text: "$12$" },
    { id: "B", text: "$15$" },
    // distractor: uses $40/2 = 20$, halving instead of using the ratio
    { id: "C", text: "$20$" },
    // distractor: solves for cats ($\frac{5}{8} \cdot 40$) instead of dogs
    { id: "D", text: "$25$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Dogs make up $\\dfrac{3}{5 + 3} = \\dfrac{3}{8}$ of the total. So dogs $= \\dfrac{3}{8} \\cdot 40 = 15$.\n\n**The Full Solution:**\nLet cats $= 5k$ and dogs $= 3k$ (so the ratio is $5:3$).\nTotal: $5k + 3k = 8k = 40$, so $k = 5$.\nDogs $= 3k = 3 \\cdot 5 = 15$.\n\nVerification: cats $= 25$, dogs $= 15$, $25 + 15 = 40$ \\checkmark, ratio $25:15 = 5:3$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — uses $\\dfrac{3}{8} \\cdot 40 = 15$ but mis-rounds to $12$ via arithmetic slip.\n* Choice C: \"applies the inverse operation\" — halves the total ignoring the ratio.\n* Choice D: \"stops one step early\" — solves for cats ($\\dfrac{5}{8} \\cdot 40 = 25$) instead of dogs.\n\n**Test Day Takeaway:** When two parts are given as a ratio AND the total is known, the denominator is the SUM of the ratio numbers ($5 + 3 = 8$), not just one part.",
  skills: ["ratios", "word-problems"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The mean of five numbers is $14$. If four of the numbers are $10$, $12$, $16$, and $18$, what is the fifth number?",
  choices: [
    // distractor: picks the smallest existing number
    { id: "A", text: "$10$" },
    // distractor: guesses the median of the four numbers
    { id: "B", text: "$12$" },
    { id: "C", text: "$14$" },
    // distractor: uses $72 - 56 = 16$ from a miscalculated total
    { id: "D", text: "$16$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Mean from List**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Total must be $5 \\times 14 = 70$. Sum of four numbers: $10 + 12 + 16 + 18 = 56$. Fifth number: $70 - 56 = 14$.\n\n**The Full Solution:**\nMean $= \\dfrac{\\text{sum}}{n}$, so sum $= \\text{mean} \\times n = 14 \\times 5 = 70$.\nSum of known values: $10 + 12 + 16 + 18 = 56$.\nFifth number: $70 - 56 = 14$.\n\nVerification: mean $= \\dfrac{56 + 14}{5} = \\dfrac{70}{5} = 14$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — picks the smallest existing number.\n* Choice B: \"applies the inverse operation\" — guesses the median of the four numbers.\n* Choice D: \"off-by-one\" — uses $72 - 56 = 16$ from a miscalculated total.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ sum. Rearrange to find the total, then subtract the known values.",
  skills: ["statistics"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $5x + 12 = 47$, what is the value of $5x - 12$?",
  choices: [
    // distractor: stops one step early — reports the value of $x$
    { id: "A", text: "$7$" },
    // distractor: gives $5x = 35$ but forgets to subtract 12
    { id: "B", text: "$35$" },
    { id: "C", text: "$23$" },
    // distractor: applies the inverse operation — adds 12 instead of subtracting
    { id: "D", text: "$47$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** From $5x + 12 = 47$, $5x = 35$. So $5x - 12 = 35 - 12 = 23$.\n\n**The Full Solution:**\n$5x + 12 = 47$\n$5x = 35$\n$5x - 12 = 35 - 12 = 23$.\n\nNote: you do not need to find $x$ explicitly — the requested expression differs from the given one by exactly $-24$, so $47 - 24 = 23$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — solves for $x$ ($x = 7$) and reports it instead of $5x - 12$.\n* Choice B: \"stops one step early\" — gives $5x = 35$ and forgets to subtract $12$.\n* Choice D: \"applies the inverse operation\" — re-uses the given total $47$.\n\n**Test Day Takeaway:** Read the LAST sentence carefully. The question often asks for a related expression (like $5x - 12$), not the variable itself.",
  skills: ["solving-equations"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A jar contains $60$ marbles. If $40\\%$ of the marbles are blue, how many marbles are NOT blue?",
  choices: [
    // distractor: stops one step early — gives the count of blue marbles ($24$) instead of NOT blue
    { id: "A", text: "$24$" },
    // distractor: applies the inverse operation — uses 40% of 60 minus 40 (treats percent as count)
    { id: "B", text: "$20$" },
    { id: "C", text: "$36$" },
    // distractor: wrong base — reads 40% as 40 marbles directly
    { id: "D", text: "$40$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent Complement**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** If $40\\%$ are blue, then $60\\%$ are not blue. $0.60 \\times 60 = 36$.\n\n**The Full Solution:**\nBlue marbles: $0.40 \\times 60 = 24$. Not blue: $60 - 24 = 36$.\n\nVerification: $24 + 36 = 60$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — computes the number of blue marbles ($24$) instead of the not-blue count.\n* Choice B: \"applies the inverse operation\" — confuses $40\\%$ with $\\dfrac{40}{60}$ or treats the percent as the count.\n* Choice D: \"wrong base\" — reads $40\\%$ as $40$ marbles directly.\n\n**Test Day Takeaway:** For the complement, use $100\\% - \\text{given}\\%$, or subtract the count from the total.",
  skills: ["percents"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A system of equations is shown below.\n\n$2x + 5y = 19$\n$3x - 2y = 0$\n\nWhat is the value of $x + y$?",
  choices: [
    // distractor: stops one step early — gives just the value of $y$
    { id: "A", text: "$3$" },
    { id: "B", text: "$5$" },
    // distractor: arithmetic error when combining $x$ and $y$
    { id: "C", text: "$7$" },
    // distractor: computes $19/2$ or a similar slip
    { id: "D", text: "$9$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice B is correct.**\n\n**The Full Solution:**\nFrom $3x - 2y = 0$: $3x = 2y$, so $x = \\dfrac{2y}{3}$.\nSubstitute into $2x + 5y = 19$:\n$2 \\cdot \\dfrac{2y}{3} + 5y = 19$\n$\\dfrac{4y}{3} + 5y = 19$\n$\\dfrac{4y + 15y}{3} = 19$\n$\\dfrac{19y}{3} = 19 \\Rightarrow y = 3$\n\nThen $x = \\dfrac{2(3)}{3} = 2$. So $x + y = 2 + 3 = 5$.\n\nVerification: $2(2) + 5(3) = 4 + 15 = 19$ \\checkmark; $3(2) - 2(3) = 6 - 6 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives just the value of $y$.\n* Choice C: \"off-by-one\" — arithmetic slip when adding $x + y$.\n* Choice D: \"wrong base\" — computes $19/2$ ignoring the second equation.\n\n**Test Day Takeaway:** When the question asks for a combination like $x + y$, solve the system fully first, THEN compute the requested expression.",
  skills: ["systems-of-equations"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A triangle in the $xy$-plane has vertices at $(0, 0)$, $(8, 0)$, and $(3, 6)$. What is the area of the triangle?",
  correctAnswer: "24",
  explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**The correct answer is $24$.**\n\n**The Fast Way (~15s):** Base along the $x$-axis from $(0,0)$ to $(8,0)$ has length $8$. Height is the perpendicular distance from $(3,6)$ to the $x$-axis $= 6$. Area $= \\dfrac{1}{2}(8)(6) = 24$.\n\n**The Full Solution:**\nThe base lies along the $x$-axis from $(0,0)$ to $(8,0)$, so base $= 8$.\nThe height is the $y$-coordinate of the third vertex (perpendicular distance to the base) $= 6$.\n\nArea $= \\dfrac{1}{2} \\times \\text{base} \\times \\text{height} = \\dfrac{1}{2}(8)(6) = 24$.\n\nVerification (coordinate formula): $\\dfrac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$\n$= \\dfrac{1}{2}|0(0 - 6) + 8(6 - 0) + 3(0 - 0)| = \\dfrac{1}{2}|48| = 24$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting the $\\dfrac{1}{2}$ factor: $8 \\times 6 = 48$.\n* Using the $x$-coordinate of the third vertex ($3$) as the height instead of the $y$-coordinate ($6$).\n\n**Test Day Takeaway:** When a triangle has a side on an axis, the height is the perpendicular distance from the opposite vertex to that axis.",
  skills: ["area", "coordinate-geometry"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $f(x) = 3x - 7$ and $f(a) = 20$, what is the value of $a$?",
  choices: [
    // distractor: solves $3a = 21$ instead of $3a = 27$
    { id: "A", text: "$7$" },
    // distractor: uses $3a - 7 = 20 \Rightarrow 3a = 24$
    { id: "B", text: "$8$" },
    { id: "C", text: "$9$" },
    // distractor: uses $2a = 20$ (wrong slope)
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Solving via Function Notation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $3a - 7 = 20$, so $3a = 27$, giving $a = 9$.\n\n**The Full Solution:**\n$f(a) = 20$ means $3a - 7 = 20$.\n$3a = 27$\n$a = 9$\n\nVerification: $f(9) = 3(9) - 7 = 27 - 7 = 20$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — solves $3a = 21$ instead of $3a = 27$.\n* Choice B: \"off-by-one\" — uses $3a - 7 = 20 \\Rightarrow 3a = 24$.\n* Choice D: \"wrong base\" — uses $2a = 20$ (wrong slope).\n\n**Test Day Takeaway:** $f(a) = k$ just means replace $x$ with $a$ in the formula and solve for $a$.",
  skills: ["function-interpretation", "solving-equations"]
},
{
  id: 9,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $4^{x+1} = 8^x$, what is the value of $x$?",
  correctAnswer: "2",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~15s):** Rewrite with base $2$: $(2^2)^{x+1} = (2^3)^x \\Rightarrow 2^{2x+2} = 2^{3x}$, so $2x + 2 = 3x$ and $x = 2$.\n\n**The Full Solution:**\n$4 = 2^2$ and $8 = 2^3$.\n$(2^2)^{x+1} = (2^3)^x$\n$2^{2(x+1)} = 2^{3x}$\n$2^{2x+2} = 2^{3x}$\n\nSince the bases are equal: $2x + 2 = 3x$, so $x = 2$.\n\nVerification: $4^{2+1} = 4^3 = 64$ and $8^2 = 64$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Writing $8 = 2^2$ instead of $2^3$.\n* Distributing incorrectly: $2(x+1) = 2x + 1$ instead of $2x + 2$.\n\n**Test Day Takeaway:** When two exponential expressions are equal, rewrite both sides with the same base, then equate the exponents.",
  skills: ["exponent-rules", "solving-equations"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $\\dfrac{x + 3}{4} = \\dfrac{2x - 1}{6}$, what is the value of $x$?",
  choices: [
    // distractor: cross-multiplies as $4(x+3) = 6(2x-1)$, getting $-9$ then mis-signs
    { id: "A", text: "$7$" },
    // distractor: arithmetic error when combining like terms
    { id: "B", text: "$9$" },
    { id: "C", text: "$11$" },
    // distractor: applies the inverse operation — adds instead of subtracting $6x$
    { id: "D", text: "$13$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Proportion with Linear Expressions**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Cross-multiply: $6(x + 3) = 4(2x - 1)$, so $6x + 18 = 8x - 4$, giving $22 = 2x$, so $x = 11$.\n\n**The Full Solution:**\n$\\dfrac{x + 3}{4} = \\dfrac{2x - 1}{6}$\nCross-multiply: $6(x + 3) = 4(2x - 1)$\n$6x + 18 = 8x - 4$\n$18 + 4 = 8x - 6x$\n$22 = 2x$\n$x = 11$\n\nVerification: LHS $= \\dfrac{11 + 3}{4} = \\dfrac{14}{4} = \\dfrac{7}{2}$. RHS $= \\dfrac{2(11) - 1}{6} = \\dfrac{21}{6} = \\dfrac{7}{2}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — cross-multiplies incorrectly.\n* Choice B: \"off-by-one\" — arithmetic error when combining like terms.\n* Choice D: \"applies the inverse operation\" — adds instead of subtracting when moving $6x$.\n\n**Test Day Takeaway:** Cross-multiply, distribute, then collect like terms. Verify by plugging the answer into the original proportion.",
  skills: ["solving-equations"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Two similar triangles have a scale factor of $3 : 5$. If the area of the smaller triangle is $27$ square centimeters, what is the area of the larger triangle, in square centimeters?",
  choices: [
    // distractor: applies linear scale factor only ($27 \cdot \frac{5}{3} = 45$)
    { id: "A", text: "$45$" },
    { id: "B", text: "$75$" },
    // distractor: squares only the numerator ($27 \cdot 4 = 108$)
    { id: "C", text: "$108$" },
    // distractor: multiplies $27 \times 5 = 135$ (uses just one ratio number)
    { id: "D", text: "$135$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Similar Triangles and Area Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Area ratio $=$ (scale factor)$^2 = \\left(\\dfrac{3}{5}\\right)^2 = \\dfrac{9}{25}$. Then $\\dfrac{27}{A} = \\dfrac{9}{25}$ gives $A = 75$.\n\n**The Full Solution:**\nIf the linear scale factor is $k$, the area ratio is $k^2$.\nLinear ratio $\\dfrac{\\text{small}}{\\text{large}} = \\dfrac{3}{5}$, so area ratio $= \\dfrac{9}{25}$.\n$\\dfrac{27}{\\text{large area}} = \\dfrac{9}{25}$\n$\\text{large area} = 27 \\cdot \\dfrac{25}{9} = 3 \\cdot 25 = 75$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — applies linear scale factor only ($27 \\cdot \\dfrac{5}{3} = 45$).\n* Choice C: \"applies the inverse operation\" — squares only the numerator of the ratio.\n* Choice D: \"wrong base\" — multiplies $27 \\times 5 = 135$, ignoring the denominator.\n\n**Test Day Takeaway:** Areas scale as the SQUARE of the linear factor; perimeters scale linearly.",
  skills: ["triangles", "area", "ratios"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A study of $12$ cities comparing population density ($x$, in thousands per square mile) and average commute time ($y$, in minutes) produces the line of best fit $y = 4.2x + 15$. One city has a population density of $5$ thousand per square mile and an actual average commute time of $32$ minutes. What is the residual for this city?",
  correctAnswer: "-4",
  explanation: "**SAT Pattern: Residual**\n\n**The correct answer is $-4$.**\n\n**The Fast Way (~15s):** Predicted: $y = 4.2(5) + 15 = 21 + 15 = 36$. Residual $=$ actual $-$ predicted $= 32 - 36 = -4$.\n\n**The Full Solution:**\nPredicted value at $x = 5$: $y = 4.2(5) + 15 = 21 + 15 = 36$.\nResidual $=$ actual $-$ predicted $= 32 - 36 = -4$.\nA negative residual means the actual value lies BELOW the prediction.\n\nVerification: $36 + (-4) = 32$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing predicted $-$ actual ($36 - 32 = 4$) and reporting a positive value.\n* Using the wrong $x$ value when evaluating the prediction.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted. The sign tells you whether the data point is above or below the line of best fit.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "\n\n| | Prefers Coffee | Prefers Tea | Total |\n|---|---|---|---|\n| Morning Shift | $45$ | $30$ | $75$ |\n| Evening Shift | $35$ | $40$ | $75$ |\n| Total | $80$ | $70$ | $150$ |\n\nAn employee is chosen at random. Given that the employee prefers tea, what is the probability that the employee works the evening shift?",
  choices: [
    // distractor: wrong base — uses the Evening Shift row total ($75$) as denominator
    { id: "A", text: "$\\dfrac{40}{75}$" },
    { id: "B", text: "$\\dfrac{40}{70}$" },
    // distractor: wrong base — uses the grand total ($150$) as denominator
    { id: "C", text: "$\\dfrac{40}{150}$" },
    // distractor: applies the inverse operation — gives $P(\text{Morning} | \text{Tea})$ instead
    { id: "D", text: "$\\dfrac{30}{70}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** \"Given prefers tea\" restricts to the Tea column (total $70$). Evening shift AND tea $= 40$. Probability $= \\dfrac{40}{70}$.\n\n**The Full Solution:**\n$P(\\text{Evening} \\mid \\text{Tea}) = \\dfrac{\\text{Evening AND Tea}}{\\text{Tea total}} = \\dfrac{40}{70} = \\dfrac{4}{7}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses the Evening Shift row total ($75$) as denominator.\n* Choice C: \"wrong base\" — uses the grand total ($150$) as denominator.\n* Choice D: \"applies the inverse operation\" — gives $P(\\text{Morning} \\mid \\text{Tea}) = \\dfrac{30}{70}$ instead.\n\n**Test Day Takeaway:** The word \"given\" tells you the denominator. Restrict to that group first, then count favorable outcomes inside it.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A right circular cylinder has a radius of $4$ centimeters and a height of $9$ centimeters. The volume of the cylinder, in cubic centimeters, can be expressed as $k\\pi$. What is the value of $k$?",
  choices: [
    // distractor: forgets to square the radius — uses $\pi r h = 36\pi$
    { id: "A", text: "$36$" },
    // distractor: uses cone formula $\frac{1}{3} \pi r^2 h$ instead of cylinder
    { id: "B", text: "$48$" },
    // distractor: doubles the radius before squaring (uses $r = 8$)
    { id: "C", text: "$72$" },
    { id: "D", text: "$144$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (4)^2 (9) = 16 \\cdot 9 \\pi = 144\\pi$. So $k = 144$.\n\n**The Full Solution:**\nThe volume formula for a right circular cylinder is $V = \\pi r^2 h$.\nWith $r = 4$ cm and $h = 9$ cm:\n$V = \\pi (4)^2 (9) = \\pi (16)(9) = 144\\pi$ cubic centimeters.\nSo $k = 144$.\n\nVerification: $16 \\cdot 9 = 144$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — uses $\\pi r h$ ($r$ to the first power) and gets $36$.\n* Choice B: \"wrong base\" — uses cone formula $\\dfrac{1}{3}\\pi r^2 h$, giving $48$.\n* Choice C: \"applies the inverse operation\" — doubles the radius before squaring (uses $r = 8$, gets $r^2 = 64 \\cdot \\dots$ then mis-arithmetic to $72$).\n\n**Test Day Takeaway:** For a cylinder, square the radius FIRST, then multiply by the height. $V = \\pi r^2 h$ is on the SAT Reference Sheet.",
  skills: ["volume", "geometry"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The quadratic function $g(x) = ax^2 + bx + c$ has roots at $x = -1$ and $x = 5$, and its maximum value is $18$. What is the value of $a$?",
  choices: [
    // distractor: uses vertex at $x = 3$ instead of $x = 2$
    { id: "A", text: "$-3$" },
    { id: "B", text: "$-2$" },
    // distractor: positive $a$ would give a minimum, not a maximum
    { id: "C", text: "$2$" },
    // distractor: same sign mistake as C, plus arithmetic
    { id: "D", text: "$3$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Quadratic from Roots and Vertex Constraint**\n\n**Choice B is correct.**\n\n**The Full Solution:**\nRoots at $x = -1$ and $x = 5$ mean $g(x) = a(x + 1)(x - 5)$.\nVertex $x$-coordinate is the midpoint: $\\dfrac{-1 + 5}{2} = 2$.\nAt the vertex: $g(2) = a(2 + 1)(2 - 5) = a(3)(-3) = -9a$.\nMaximum value $18 \\Rightarrow -9a = 18 \\Rightarrow a = -2$.\n\nNote: $a < 0$ confirms the parabola opens downward (so a max exists) \\checkmark.\n\nVerification: $g(x) = -2(x + 1)(x - 5) = -2(x^2 - 4x - 5) = -2x^2 + 8x + 10$. $g(2) = -8 + 16 + 10 = 18$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — uses vertex at $x = 3$ instead of $x = 2$.\n* Choice C: \"applies the inverse operation\" — positive $a$ gives a minimum, not a maximum.\n* Choice D: \"applies the inverse operation\" — same sign mistake plus arithmetic.\n\n**Test Day Takeaway:** From roots, write factored form. The vertex sits at the midpoint of the roots; plug it in to find $a$.",
  skills: ["quadratic-equations", "vertex-form"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For what value of $m$ does the system below have no solution?\n\n$3x + my = 12$\n$6x - 4y = 7$",
  choices: [
    // distractor: solves $3m = -4$ (wrong cross-multiplication)
    { id: "A", text: "$-\\dfrac{4}{3}$" },
    { id: "B", text: "$-2$" },
    // distractor: applies the wrong sign — uses $m = +2$ (parallel slopes flipped)
    { id: "C", text: "$2$" },
    // distractor: stops one step early — uses ratio $\\frac{3}{6} = \\frac{1}{2}$
    { id: "D", text: "$\\dfrac{1}{2}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Two lines have no solution iff they are parallel: same ratio of $x$- and $y$-coefficients but different ratio of constants. Compare $\\dfrac{3}{6}$ to $\\dfrac{m}{-4}$: $\\dfrac{m}{-4} = \\dfrac{1}{2} \\Rightarrow m = -2$. (Constants $\\dfrac{12}{7}$ differ from $\\dfrac{1}{2}$, confirming truly no solution.)\n\n**The Full Solution:**\nWrite both equations in slope-intercept form (or compare coefficients).\nLine 1: $3x + my = 12 \\Rightarrow$ slope $= -\\dfrac{3}{m}$.\nLine 2: $6x - 4y = 7 \\Rightarrow$ slope $= \\dfrac{6}{4} = \\dfrac{3}{2}$.\n\nFor no solution, slopes equal but lines distinct:\n$-\\dfrac{3}{m} = \\dfrac{3}{2} \\Rightarrow m = -2$.\n\nWith $m = -2$: line 1 is $3x - 2y = 12$, slope $\\dfrac{3}{2}$, $y$-intercept $-6$. Line 2: slope $\\dfrac{3}{2}$, $y$-intercept $-\\dfrac{7}{4}$. Different intercepts confirm parallel-distinct \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — cross-multiplies as $3 \\cdot (-4) = 6m$ giving $m = -2$ then sign-flips to get $-\\dfrac{4}{3}$.\n* Choice C: \"applies the inverse operation\" — drops the negative sign on the slope match.\n* Choice D: \"stops one step early\" — gives the ratio $\\dfrac{3}{6} = \\dfrac{1}{2}$ instead of solving for $m$.\n\n**Test Day Takeaway:** Two linear equations have NO solution exactly when their slopes are equal but their intercepts differ. Match slopes first.",
  skills: ["systems-of-equations", "linear-functions"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the graph of $y = x^2 - 10x + 21$ crosses the $x$-axis at points $A$ and $B$. What is the length of $\\overline{AB}$?",
  choices: [
    // distractor: miscomputes one root as $5$ and uses $|7-5|$
    { id: "A", text: "$2$" },
    { id: "B", text: "$4$" },
    // distractor: uses sum of roots minus 4 ($10 - 4 = 6$)
    { id: "C", text: "$6$" },
    // distractor: applies the inverse operation — uses sum of roots ($3 + 7 = 10$) instead of difference
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice B is correct.**\n\n**The Full Solution:**\nFactor: $x^2 - 10x + 21 = (x - 3)(x - 7)$, so $x = 3$ or $x = 7$.\n\nThe points are $A = (3, 0)$ and $B = (7, 0)$.\nDistance $= |7 - 3| = 4$.\n\nVerification: $3^2 - 10(3) + 21 = 0$ \\checkmark and $7^2 - 10(7) + 21 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — miscomputes one root as $5$ and uses $|7 - 5|$.\n* Choice C: \"wrong base\" — uses sum of roots minus $4$ ($10 - 4 = 6$).\n* Choice D: \"applies the inverse operation\" — uses sum of roots instead of difference.\n\n**Test Day Takeaway:** Factor the quadratic to find the roots, then subtract them. The distance between $x$-intercepts is the absolute difference of the roots.",
  skills: ["quadratic-equations", "factoring", "coordinate-geometry"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the circle $x^2 + y^2 - 6x + 4y = 12$ has center $(h, k)$ and radius $r$. What is the value of $h + k + r$?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~30s):** Group and complete the square: $(x-3)^2 + (y+2)^2 = 25$. So $(h, k, r) = (3, -2, 5)$ and $h + k + r = 6$.\n\n**The Full Solution:**\n$(x^2 - 6x) + (y^2 + 4y) = 12$\n$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$\n$(x - 3)^2 + (y + 2)^2 = 25$\n\nCenter: $(h, k) = (3, -2)$, radius $r = \\sqrt{25} = 5$.\n$h + k + r = 3 + (-2) + 5 = 6$.\n\nVerification: expand $(x-3)^2 + (y+2)^2 = 25$ to $x^2 - 6x + 9 + y^2 + 4y + 4 = 25$, i.e. $x^2 + y^2 - 6x + 4y = 12$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting to add the completing-the-square constants to BOTH sides.\n* Writing the center as $(3, 2)$ instead of $(3, -2)$ from $(y + 2)^2$.\n* Reporting $r = 25$ instead of $r = \\sqrt{25} = 5$.\n\n**Test Day Takeaway:** Complete the square symmetrically for both variables; the center is $(h, k)$ with sign-flipped offsets, and the radius is $\\sqrt{r^2}$, NOT $r^2$.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $\\sqrt{5x + 11} = x + 1$, what is the sum of all real solutions?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Radical Equation with Potential Extraneous Solution**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~30s):** Square both sides; solve the quadratic; check each root in the original.\n\n**The Full Solution:**\nSquare: $5x + 11 = (x + 1)^2 = x^2 + 2x + 1$\n$x^2 - 3x - 10 = 0$\n$(x - 5)(x + 2) = 0$\n$x = 5$ or $x = -2$\n\nCheck $x = 5$: $\\sqrt{25 + 11} = \\sqrt{36} = 6$ and $5 + 1 = 6$ \\checkmark.\nCheck $x = -2$: $\\sqrt{-10 + 11} = 1$ but $-2 + 1 = -1 \\neq 1$ — EXTRANEOUS.\n\nOnly valid solution: $x = 5$. Sum of all real solutions $= 5$.\n\n**Common Mistakes to Avoid:**\n* Including $x = -2$ without checking; the sum would be $3$ (incorrect).\n* Squaring incorrectly: $(x + 1)^2 = x^2 + 1$ (missing the $2x$ middle term).\n\n**Test Day Takeaway:** Always check radical-equation solutions in the ORIGINAL equation. Squaring can introduce extraneous roots.",
  skills: ["radical-expressions", "solving-equations"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $3x^2 + kx + 12 = 0$ has no real solutions. Which of the following could be the value of $k$?",
  choices: [
    // distractor: $k = -13$ gives discriminant $> 0$ (two real solutions)
    { id: "A", text: "$-13$" },
    // distractor: $k = -12$ gives discriminant exactly zero (one solution, not none)
    { id: "B", text: "$-12$" },
    { id: "C", text: "$11$" },
    // distractor: $k = 12$ also gives discriminant zero
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice C is correct.**\n\n**The Full Solution:**\nNo real solutions means discriminant $< 0$:\n$k^2 - 4(3)(12) < 0$\n$k^2 - 144 < 0$\n$k^2 < 144 \\Rightarrow -12 < k < 12$ (strictly).\n\nCheck each choice:\n* A: $k = -13 \\Rightarrow k^2 = 169 > 144$ — two real solutions.\n* B: $k = -12 \\Rightarrow k^2 = 144$ — discriminant $= 0$, exactly one solution (not none).\n* C: $k = 11 \\Rightarrow k^2 = 121 < 144$ — no real solutions \\checkmark.\n* D: $k = 12 \\Rightarrow k^2 = 144$ — discriminant $= 0$, exactly one solution.\n\nVerification: $k = 11$: discriminant $= 121 - 144 = -23 < 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — picks a value outside the range.\n* Choice B: \"off-by-one\" — uses $\\leq$ instead of $<$ on the discriminant.\n* Choice D: \"off-by-one\" — same boundary error as B.\n\n**Test Day Takeaway:** \"No real solutions\" means discriminant $< 0$ STRICTLY. At discriminant $= 0$, there is exactly ONE real solution.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, a parabola with equation $y = a(x - h)^2 + k$, where $a < 0$, has its vertex in the first quadrant and passes through the origin and the point $(8, 0)$. If the maximum value of $y$ is $48$, what is the value of $h + k$?",
  choices: [
    // distractor: gives just $k = 48$, forgetting to add $h$
    { id: "A", text: "$48$" },
    { id: "B", text: "$52$" },
    // distractor: uses $h = 8$ (an endpoint instead of the midpoint)
    { id: "C", text: "$56$" },
    // distractor: adds $16 + 48 = 64$, confusing $h^2$ with $h$
    { id: "D", text: "$64$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Full Solution:**\nThe parabola passes through $(0, 0)$ and $(8, 0)$, so its $x$-intercepts are $0$ and $8$.\nVertex $x$-coordinate $=$ midpoint $= \\dfrac{0 + 8}{2} = 4$, so $h = 4$.\nSince $a < 0$, the vertex gives the maximum, so $k = 48$.\n\nFind $a$: at $x = 0$, $y = 0$:\n$0 = a(0 - 4)^2 + 48 = 16a + 48 \\Rightarrow a = -3$.\n\n$h + k = 4 + 48 = 52$.\n\nVerification: $y = -3(x-4)^2 + 48$. At $x = 0$: $-3(16) + 48 = 0$ \\checkmark; at $x = 8$: $-3(16) + 48 = 0$ \\checkmark; max at $x = 4$: $48$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives just $k = 48$, forgetting to add $h$.\n* Choice C: \"wrong base\" — uses $h = 8$ (an endpoint instead of the midpoint).\n* Choice D: \"applies the inverse operation\" — adds $16 + 48 = 64$, confusing $h^2$ with $h$.\n\n**Test Day Takeaway:** A parabola's vertex sits at the midpoint of its $x$-intercepts. The $k$ value in vertex form is the max or min.",
  skills: ["vertex-form", "quadratic-equations", "coordinate-geometry"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For what value of $m$ does the system below have infinitely many solutions?\n\n$6x - 9y = 12$\n$-2x + 3y = m$",
  choices: [
    // distractor: uses multiplier of $-2$ instead of $-3$
    { id: "A", text: "$-6$" },
    { id: "B", text: "$-4$" },
    // distractor: drops the negative sign — solves $3m = 12$
    { id: "C", text: "$4$" },
    // distractor: uses multiplier of $2$ from comparing coefficients incorrectly
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice B is correct.**\n\n**The Full Solution:**\nFor infinitely many solutions, the equations must be proportional (scalar multiples).\nMultiply $-2x + 3y = m$ by $-3$: $6x - 9y = -3m$.\nThis must equal the first equation: $-3m = 12 \\Rightarrow m = -4$.\n\nVerification: with $m = -4$, $-2x + 3y = -4$, multiply by $-3$ to get $6x - 9y = 12$ \\checkmark — same line.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — uses multiplier $-2$ instead of $-3$.\n* Choice C: \"applies the inverse operation\" — drops the negative sign and solves $3m = 12$.\n* Choice D: \"wrong base\" — uses multiplier $2$ from comparing coefficients incorrectly.\n\n**Test Day Takeaway:** Infinitely many solutions $\\iff$ the two equations represent the SAME line. Make one equation a scalar multiple of the other to find the parameter.",
  skills: ["systems-of-equations", "linear-functions"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 12 — Math Module 2 (22 questions)
// Distribution: 3E / 6M / 13H. Q1-3 are easy openers (CB-authentic ramp).

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "If $5x - 7 = 18$, what is the value of $x$?",
  choices: [
    { id: "A", text: "$5$" },
    // distractor: stops one step early - subtracts but doesn't divide
    { id: "B", text: "$11$" },
    // distractor: applies inverse op - adds 7 to 18 but skips dividing
    { id: "C", text: "$25$" },
    // distractor: sign error - negates the answer
    { id: "D", text: "$-5$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $5x = 25 \\Rightarrow x = 5$.\n\n**The Full Solution:**\n$5x - 7 = 18$\nAdd $7$ to both sides: $5x = 25$.\nDivide by $5$: $x = 5$.\nVerification: $5(5) - 7 = 25 - 7 = 18$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — does $18 - 7 = 11$ but forgets to divide by $5$.\n* Choice C: \"stops one step early\" — finds $5x = 25$ but reports $25$ instead of solving for $x$.\n* Choice D: \"applies the inverse operation\" — sign error in the answer.\n\n**Test Day Takeaway:** Two-step equations: undo addition/subtraction first, then division/multiplication. Always verify by substituting.",
  skills: ["solving-equations"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "A right triangle has legs of length $6$ and $8$. What is the area of the triangle?",
  choices: [
    // distractor: stops one step early - sums the legs
    { id: "A", text: "$14$" },
    { id: "B", text: "$24$" },
    // distractor: forgets the 1/2 factor in area formula
    { id: "C", text: "$48$" },
    // distractor: gives the hypotenuse squared (used Pythagorean instead)
    { id: "D", text: "$100$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Area $= \\dfrac{1}{2}(6)(8) = 24$.\n\n**The Full Solution:**\nFor a right triangle, the two legs are the base and height, so:\nArea $= \\dfrac{1}{2} \\cdot \\text{leg}_1 \\cdot \\text{leg}_2 = \\dfrac{1}{2}(6)(8) = 24$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — sums the legs ($6 + 8 = 14$).\n* Choice C: \"applies the inverse operation\" — multiplies the legs but forgets the $\\dfrac{1}{2}$ factor.\n* Choice D: \"wrong base\" — gives the hypotenuse squared ($6^2 + 8^2 = 100$).\n\n**Test Day Takeaway:** Right triangle area $= \\dfrac{1}{2} \\cdot \\text{leg}_1 \\cdot \\text{leg}_2$. The two legs serve as base and height because they meet at a right angle.",
  skills: ["geometry", "area", "triangles"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "A recipe calls for $3$ cups of flour for every $2$ cups of sugar. If a baker uses $9$ cups of flour, how many cups of sugar should the baker use?",
  choices: [
    // distractor: subtracts difference incorrectly
    { id: "A", text: "$4$" },
    { id: "B", text: "$6$" },
    // distractor: adds the values instead of scaling proportionally
    { id: "C", text: "$12$" },
    // distractor: wrong scale factor - uses 1.5x sugar instead of 3x
    { id: "D", text: "$13.5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Proportional Scaling**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Scale factor: $9 / 3 = 3$. Sugar $= 2 \\cdot 3 = 6$ cups.\n\n**The Full Solution:**\nThe ratio of flour to sugar is $3 : 2$. With $9$ cups of flour:\n$\\dfrac{3}{2} = \\dfrac{9}{x}$\nCross-multiply: $3x = 18$, so $x = 6$.\n\nAlternatively: scale factor $= 9 / 3 = 3$, so multiply each ratio component by $3$: sugar $= 2 \\cdot 3 = 6$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — subtracts to estimate without proper scaling.\n* Choice C: \"applies the inverse operation\" — adds the difference ($9 + 3 = 12$).\n* Choice D: \"off-by-one\" — uses scale factor of $1.5$ instead of $3$.\n\n**Test Day Takeaway:** When scaling a ratio, multiply BOTH parts by the same factor. Find the factor from the ratio of new-to-old for one quantity.",
  skills: ["ratios", "proportions"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The equation $\\dfrac{a}{x - 2} = \\dfrac{3x}{x - 2} + 5$ has no solution. What is the value of $a$?",
  choices: [
    { id: "A", text: "$6$" },
    // distractor: computes $3(2) + 5 = 11$, substituting into the wrong expression
    { id: "B", text: "$11$" },
    // distractor: computes $a + 10 = 16$ but forgets to subtract $10$
    { id: "C", text: "$16$" },
    // distractor: sign error
    { id: "D", text: "$-4$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Rational Equation with No Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Multiply both sides by $(x - 2)$: $a = 3x + 5(x - 2) = 8x - 10$. The unique algebraic solution is $x = \\dfrac{a + 10}{8}$. For NO solution, this must equal the excluded value $x = 2$: $a = 8(2) - 10 = 6$.\n\n**The Full Solution:**\nExcluded value: $x = 2$ (denominator zero).\nMultiply both sides by $(x - 2)$: $a = 3x + 5(x - 2) = 8x - 10$, so $x = \\dfrac{a + 10}{8}$.\n\nFor no solution, the algebraic root must equal the excluded value:\n$\\dfrac{a + 10}{8} = 2 \\Rightarrow a + 10 = 16 \\Rightarrow a = 6$.\n\nVerify: with $a = 6$, equation reduces to $x = 2$, but $x = 2$ is excluded — no solution \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — computes $3(2) + 5 = 11$.\n* Choice C: \"stops one step early\" — uses $a + 10 = 16$ but forgets to subtract $10$.\n* Choice D: \"applies the inverse operation\" — sign error.\n\n**Test Day Takeaway:** A rational equation has NO solution when the only algebraic root is an excluded value. Find that excluded value, plug it in, then solve for the parameter.",
  skills: ["solving-equations"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A line in the $xy$-plane passes through the point $(2, -1)$ and is perpendicular to the line $4x - 3y = 12$. What is the $y$-intercept of this line?",
  choices: [
    { id: "A", text: "$\\dfrac{1}{2}$" },
    // distractor: sign error in the calculation
    { id: "B", text: "$-\\dfrac{1}{2}$" },
    // distractor: uses the original slope instead of the perpendicular one
    { id: "C", text: "$\\dfrac{7}{4}$" },
    // distractor: multiple sign and arithmetic errors
    { id: "D", text: "$-\\dfrac{7}{4}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Slope of $4x - 3y = 12$ is $\\dfrac{4}{3}$. Perpendicular slope: $-\\dfrac{3}{4}$. Line: $y + 1 = -\\dfrac{3}{4}(x - 2)$, so $y = -\\dfrac{3}{4}x + \\dfrac{3}{2} - 1 = -\\dfrac{3}{4}x + \\dfrac{1}{2}$. The $y$-intercept is $\\dfrac{1}{2}$.\n\n**The Full Solution:**\nRewrite $4x - 3y = 12$: $y = \\dfrac{4}{3}x - 4$. Slope $= \\dfrac{4}{3}$.\nPerpendicular slope $= -\\dfrac{3}{4}$.\nUsing point $(2, -1)$:\n$y - (-1) = -\\dfrac{3}{4}(x - 2)$\n$y + 1 = -\\dfrac{3}{4}x + \\dfrac{3}{2}$\n$y = -\\dfrac{3}{4}x + \\dfrac{1}{2}$\n$y$-intercept $= \\dfrac{1}{2}$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — sign error.\n* Choice C: \"wrong base\" — uses original slope instead of perpendicular.\n* Choice D: \"applies the inverse operation\" — multiple sign and arithmetic slips.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals: flip the fraction AND change the sign.",
  skills: ["slope", "coordinate-geometry"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table shows the distribution of students by grade and club membership.\n\n| | In a Club | Not in a Club | Total |\n|---|---|---|---|\n| 9th Grade | $45$ | $30$ | $75$ |\n| 10th Grade | $60$ | $40$ | $100$ |\n| 11th Grade | $55$ | $20$ | $75$ |\n| Total | $160$ | $90$ | $250$ |\n\nA student is randomly selected from those NOT in a club. What is the probability that the student is in 11th grade?",
  choices: [
    // distractor: divides by total 11th graders (75) instead of total not-in-club (90)
    { id: "A", text: "$\\dfrac{20}{75}$" },
    { id: "B", text: "$\\dfrac{20}{90}$" },
    // distractor: divides by all students (250)
    { id: "C", text: "$\\dfrac{20}{250}$" },
    // distractor: uses club members instead of non-club members
    { id: "D", text: "$\\dfrac{55}{160}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Given: not in club (total $90$). 11th graders not in club: $20$. Probability $= \\dfrac{20}{90}$.\n\n**The Full Solution:**\n$P(\\text{11th grade} \\mid \\text{not in club}) = \\dfrac{\\text{11th AND not in club}}{\\text{total not in club}} = \\dfrac{20}{90} = \\dfrac{2}{9}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses total 11th graders ($75$) as denominator.\n* Choice C: \"wrong base\" — uses grand total ($250$).\n* Choice D: \"applies the inverse operation\" — uses club members instead of non-club.\n\n**Test Day Takeaway:** \"Given X\" $\\Rightarrow$ restrict the sample space to X. Numerator counts favorable cases inside X; denominator is X's total.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $x^2 + y^2 = 100$ and $xy = 36$, what is the value of $(x + y)^2$?",
  correctAnswer: "172",
  explanation: "**SAT Pattern: Algebraic Identity Expansion**\n\n**The correct answer is $172$.**\n\n**The Fast Way (~15s):** $(x+y)^2 = x^2 + 2xy + y^2 = (x^2 + y^2) + 2xy = 100 + 72 = 172$.\n\n**The Full Solution:**\nExpand $(x+y)^2 = x^2 + 2xy + y^2$.\nGiven: $x^2 + y^2 = 100$ and $xy = 36$.\n$(x+y)^2 = 100 + 2(36) = 100 + 72 = 172$.\n\n**Common Mistakes to Avoid:**\n* Trying to solve for $x$ and $y$ individually — unnecessary work.\n* Writing $(x+y)^2 = x^2 + y^2$ (forgetting the $2xy$ middle term).\n\n**Test Day Takeaway:** Memorize $(x+y)^2 = x^2 + 2xy + y^2$ and $(x-y)^2 = x^2 - 2xy + y^2$. You rarely need to find individual values.",
  skills: ["solving-equations", "polynomial-operations"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The graph of $y = a(x - h)^2 + k$ has vertex $(3, -2)$ and passes through $(0, 7)$. What is the value of $a$?",
  choices: [
    { id: "A", text: "$1$" },
    // distractor: $a = -1$ would give $y = -(9) - 2 = -11 \neq 7$
    { id: "B", text: "$-1$" },
    // distractor: divides $9$ by $3$ instead of $9$
    { id: "C", text: "$3$" },
    // distractor: inverts the calculation
    { id: "D", text: "$\\dfrac{1}{3}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Vertex form: $y = a(x-3)^2 - 2$. Plug in $(0, 7)$: $7 = 9a - 2 \\Rightarrow a = 1$.\n\n**The Full Solution:**\nWith vertex $(3, -2)$: $y = a(x - 3)^2 - 2$.\nSubstitute $(0, 7)$:\n$7 = a(0 - 3)^2 - 2$\n$7 = 9a - 2$\n$9a = 9 \\Rightarrow a = 1$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — sign error gives $a = -1$.\n* Choice C: \"off-by-one\" — divides $9$ by $3$ instead of $9$.\n* Choice D: \"applies the inverse operation\" — inverts the calculation.\n\n**Test Day Takeaway:** Plug the vertex directly into vertex form first ($h$, $k$ visible), then use any other point to solve for $a$.",
  skills: ["vertex-form", "quadratic-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In a right triangle, one acute angle is $\\theta$. If $\\sin \\theta = \\dfrac{a}{c}$ and $\\cos \\theta = \\dfrac{b}{c}$, which of the following must equal $\\dfrac{1}{c^2}$?",
  choices: [
    // distractor: sin^2 + cos^2 = 1, not 1/c^2
    { id: "A", text: "$\\sin^2 \\theta + \\cos^2 \\theta$" },
    // distractor: each term is 1/c^2, so sum is 2/c^2
    { id: "B", text: "$\\dfrac{\\sin^2 \\theta}{a^2} + \\dfrac{\\cos^2 \\theta}{b^2}$" },
    // distractor: 1/a^2 + 1/b^2 = c^2/(a^2 b^2), not 1/c^2
    { id: "C", text: "$\\dfrac{1}{a^2} + \\dfrac{1}{b^2}$" },
    { id: "D", text: "$\\dfrac{\\sin^2 \\theta + \\cos^2 \\theta}{a^2 + b^2}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Pythagorean identity: $\\sin^2 + \\cos^2 = 1$. Pythagorean theorem: $a^2 + b^2 = c^2$. Combine: $\\dfrac{\\sin^2 + \\cos^2}{a^2 + b^2} = \\dfrac{1}{c^2}$.\n\n**The Full Solution:**\nKey identities:\n1. $\\sin^2\\theta + \\cos^2\\theta = 1$.\n2. $a^2 + b^2 = c^2$ (legs and hypotenuse).\n\nCheck D: $\\dfrac{\\sin^2\\theta + \\cos^2\\theta}{a^2 + b^2} = \\dfrac{1}{c^2}$ \\checkmark.\n\nCheck others:\n* A: $= 1 \\neq \\dfrac{1}{c^2}$ unless $c = 1$.\n* B: $\\dfrac{a^2/c^2}{a^2} + \\dfrac{b^2/c^2}{b^2} = \\dfrac{1}{c^2} + \\dfrac{1}{c^2} = \\dfrac{2}{c^2}$.\n* C: $\\dfrac{1}{a^2} + \\dfrac{1}{b^2} = \\dfrac{c^2}{a^2 b^2}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — Pythagorean identity equals $1$, which is $\\dfrac{c^2}{c^2}$, not $\\dfrac{1}{c^2}$.\n* Choice B: \"off-by-one\" — sum of two $\\dfrac{1}{c^2}$ terms gives $\\dfrac{2}{c^2}$.\n* Choice C: \"wrong base\" — algebra gives $\\dfrac{c^2}{a^2 b^2}$, not $\\dfrac{1}{c^2}$.\n\n**Test Day Takeaway:** Pythagorean identity ($\\sin^2 + \\cos^2 = 1$) and Pythagorean theorem ($a^2 + b^2 = c^2$) are partners — combine them for clean simplifications.",
  skills: ["trigonometry"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "In the right triangle shown, one acute angle measures $\\theta$ such that $\\cos \\theta = \\dfrac{8}{17}$, and the side adjacent to $\\theta$ has length $24$. What is the length of the hypotenuse?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["θ", "", ""],
      sideLabels: ["24", "", ""],
      rightAngleVertex: 1
    }
  },
  correctAnswer: "51",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**The correct answer is $51$.**\n\n**The Fast Way (~20s):** $\\cos \\theta = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}} = \\dfrac{8}{17} = \\dfrac{24}{h}$. Cross-multiply: $8h = 24 \\cdot 17 = 408$, so $h = 51$.\n\n**The Full Solution:**\n$\\cos \\theta = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}}$.\nGiven $\\cos \\theta = \\dfrac{8}{17}$ and adjacent $= 24$: $\\dfrac{24}{h} = \\dfrac{8}{17}$.\nCross-multiply: $24 \\cdot 17 = 8h \\Rightarrow 408 = 8h \\Rightarrow h = 51$.\n\nAlternatively: scale factor between $\\dfrac{8}{17}$ and the actual triangle is $\\dfrac{24}{8} = 3$, so hypotenuse $= 17 \\cdot 3 = 51$.\n\nVerification: $\\dfrac{24}{51} = \\dfrac{8}{17}$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Confusing adjacent and opposite sides relative to angle $\\theta$.\n* Computing hypotenuse from $\\sin$ instead of $\\cos$.\n\n**Test Day Takeaway:** SOH-CAH-TOA: $\\cos = \\dfrac{\\text{Adjacent}}{\\text{Hypotenuse}}$. Set up the proportion and cross-multiply.",
  skills: ["trigonometry", "triangles"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $\\sqrt[3]{x^4} \\cdot \\sqrt{x^7} = x^{p/q}$ for $x > 0$, where $\\dfrac{p}{q}$ is in lowest terms, what is the value of $p + q$?",
  choices: [
    // distractor: stops at $p$ alone (= $29$)
    { id: "A", text: "$29$" },
    // distractor: applies the inverse operation — sums radical exponents and indices
    { id: "B", text: "$14$" },
    { id: "C", text: "$35$" },
    // distractor: uses $4 + 7 + 3 + 2 = 16$ (sums all visible numbers)
    { id: "D", text: "$16$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** $\\sqrt[3]{x^4} = x^{4/3}$ and $\\sqrt{x^7} = x^{7/2}$. Add: $\\dfrac{4}{3} + \\dfrac{7}{2} = \\dfrac{8 + 21}{6} = \\dfrac{29}{6}$. So $p + q = 29 + 6 = 35$.\n\n**The Full Solution:**\nConvert each radical to a fractional exponent:\n$\\sqrt[3]{x^4} = x^{4/3}$ and $\\sqrt{x^7} = x^{7/2}$.\n\nMultiply same bases — add exponents:\n$x^{4/3} \\cdot x^{7/2} = x^{4/3 + 7/2} = x^{(8 + 21)/6} = x^{29/6}$\n\n$\\gcd(29, 6) = 1$, so $\\dfrac{29}{6}$ is in lowest terms. $p = 29$, $q = 6$, so $p + q = 35$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives just $p = 29$ without adding $q$.\n* Choice B: \"applies the inverse operation\" — sums radical exponent and index ($7 + 3 + 4 = 14$ or similar).\n* Choice D: \"wrong base\" — sums all integers in the expression.\n\n**Test Day Takeaway:** $\\sqrt[n]{x^m} = x^{m/n}$. Add fractional exponents when multiplying same bases.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A linear function $g$ satisfies $g(0) = 10$ and $g(5) = 0$. What is the value of $g(8) + 2 \\cdot g(3)$?",
  choices: [
    // distractor: stops one step early — gives $g(8) = -6$ alone
    { id: "A", text: "$-6$" },
    { id: "B", text: "$2$" },
    // distractor: uses slope $-1$ instead of $-2$
    { id: "C", text: "$8$" },
    // distractor: applies the inverse operation — adds $g(8) + g(3)$ instead of $g(8) + 2 g(3)$
    { id: "D", text: "$-2$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Slope $= \\dfrac{0 - 10}{5 - 0} = -2$. So $g(x) = -2x + 10$. $g(8) = -6$ and $g(3) = 4$. Combined: $-6 + 2(4) = -6 + 8 = 2$.\n\n**The Full Solution:**\nFrom $(0, 10)$ and $(5, 0)$:\nSlope $= \\dfrac{0 - 10}{5 - 0} = -2$, $y$-intercept $= 10$.\n$g(x) = -2x + 10$.\n\n$g(8) = -16 + 10 = -6$.\n$g(3) = -6 + 10 = 4$.\n$g(8) + 2 \\cdot g(3) = -6 + 8 = 2$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives $g(8) = -6$ alone.\n* Choice C: \"wrong base\" — uses slope $-1$ instead of $-2$.\n* Choice D: \"applies the inverse operation\" — adds $g(8) + g(3) = -6 + 4 = -2$ without doubling $g(3)$.\n\n**Test Day Takeaway:** Two points $\\to$ slope $\\to$ equation. Then evaluate carefully — read the FULL expression the question asks for.",
  skills: ["linear-functions"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, a circle has center $(4, -1)$ and is tangent to the line $y = 2$. A point on the circle has coordinates $(4, k)$ where $k < -1$. What is the value of $k$?",
  correctAnswer: "-4",
  explanation: "**SAT Pattern: Circle in Standard Form**\n\n**The correct answer is $-4$.**\n\n**The Fast Way (~25s):** Tangent to $y = 2$ from center $(4, -1)$: vertical distance $= |2 - (-1)| = 3$, so radius $= 3$. Point $(4, k)$ on circle directly below center: $k = -1 - 3 = -4$.\n\n**The Full Solution:**\nThe line $y = 2$ is horizontal. Distance from center $(4, -1)$ to this line is $|2 - (-1)| = 3$. Since the circle is tangent to the line, $r = 3$.\n\nCircle equation: $(x - 4)^2 + (y + 1)^2 = 9$.\nFor point $(4, k)$: $(4 - 4)^2 + (k + 1)^2 = 9 \\Rightarrow (k + 1)^2 = 9 \\Rightarrow k + 1 = \\pm 3$.\nSo $k = 2$ or $k = -4$. Since $k < -1$, take $k = -4$.\n\n**Common Mistakes to Avoid:**\n* Picking $k = 2$ (the upper tangent point) instead of $k = -4$.\n* Computing distance as $|2 - 1| = 1$ instead of $|2 - (-1)| = 3$.\n\n**Test Day Takeaway:** A circle tangent to a horizontal line has radius equal to the VERTICAL distance from center to line. The tangent point sits directly above or below the center.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A bag contains $5$ red marbles, $3$ blue marbles, and $2$ green marbles. Two marbles are drawn at random one after another, without replacement. What is the probability that BOTH marbles are red?",
  choices: [
    // distractor: assumes replacement — uses $(5/10)^2 = 1/4$
    { id: "A", text: "$\\dfrac{1}{4}$" },
    { id: "B", text: "$\\dfrac{2}{9}$" },
    // distractor: stops one step early — gives only $P(\text{first red}) = 1/2$
    { id: "C", text: "$\\dfrac{1}{2}$" },
    // distractor: applies the inverse operation — adds probabilities instead of multiplying
    { id: "D", text: "$\\dfrac{9}{10}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Probability Without Replacement**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $P(\\text{1st red}) = \\dfrac{5}{10} = \\dfrac{1}{2}$. After removing one red, $P(\\text{2nd red}) = \\dfrac{4}{9}$. Multiply: $\\dfrac{1}{2} \\cdot \\dfrac{4}{9} = \\dfrac{4}{18} = \\dfrac{2}{9}$.\n\n**The Full Solution:**\nTotal marbles: $5 + 3 + 2 = 10$.\nFirst draw red: $P_1 = \\dfrac{5}{10}$.\nAfter one red removed: $4$ red of $9$ remaining. Second draw red: $P_2 = \\dfrac{4}{9}$.\n\n$P(\\text{both red}) = \\dfrac{5}{10} \\cdot \\dfrac{4}{9} = \\dfrac{20}{90} = \\dfrac{2}{9}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — assumes replacement, using $(\\dfrac{5}{10})^2 = \\dfrac{1}{4}$.\n* Choice C: \"stops one step early\" — reports only $P(\\text{1st red}) = \\dfrac{1}{2}$.\n* Choice D: \"wrong base\" — adds probabilities instead of multiplying.\n\n**Test Day Takeaway:** Without replacement, the second probability uses (favorable $- 1$) over (total $- 1$). Multiply for sequential events.",
  skills: ["probability"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $7x + 4 = 39$, what is the value of $14x - 8$?",
  choices: [
    // distractor: stops one step early — gives $7x = 35$
    { id: "A", text: "$35$" },
    // distractor: doubles $39$ to get $78$ but forgets to subtract $16$
    { id: "B", text: "$78$" },
    { id: "C", text: "$62$" },
    // distractor: gives just $x = 5$ and stops
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $14x - 8 = 2(7x + 4) - 16 = 2(39) - 16 = 78 - 16 = 62$. No need to solve for $x$.\n\n**The Full Solution:**\nNotice $14x - 8 = 2(7x + 4) - 16$. Since $7x + 4 = 39$, we have $14x - 8 = 2 \\cdot 39 - 16 = 78 - 16 = 62$.\n\nAlternatively: $7x = 35 \\Rightarrow x = 5$, so $14(5) - 8 = 70 - 8 = 62$.\n\nVerification: $14(5) - 8 = 62$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives $7x = 35$ without doubling or subtracting.\n* Choice B: \"applies the inverse operation\" — doubles $39$ but forgets the $-16$ adjustment.\n* Choice D: \"stops one step early\" — solves for $x$ and stops.\n\n**Test Day Takeaway:** Before solving for $x$, check whether the target expression is a SCALAR MULTIPLE of the given equation, possibly shifted. Often you can avoid finding $x$ entirely.",
  skills: ["solving-equations"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $f(x) = 2x^2 - kx + 8$ and $f(3) = 5$, what is the value of $k$?",
  choices: [
    // distractor: divides 21 by 7 instead of 3
    { id: "A", text: "$3$" },
    { id: "B", text: "$7$" },
    // distractor: forgets the constant 8 in the function
    { id: "C", text: "$13$" },
    // distractor: this is $3k$, not $k$
    { id: "D", text: "$21$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Solving via Function Notation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $f(3) = 18 - 3k + 8 = 26 - 3k = 5$. So $3k = 21$, giving $k = 7$.\n\n**The Full Solution:**\n$f(3) = 2(3)^2 - k(3) + 8 = 18 - 3k + 8 = 26 - 3k$.\nSet equal to $5$: $26 - 3k = 5 \\Rightarrow 3k = 21 \\Rightarrow k = 7$.\n\nVerification: $f(3) = 18 - 7(3) + 8 = 18 - 21 + 8 = 5$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — divides $21$ by $7$ instead of $3$.\n* Choice C: \"off-by-one\" — forgets the constant $8$ in the function.\n* Choice D: \"stops one step early\" — gives $3k$ instead of $k$.\n\n**Test Day Takeaway:** Substitute the given input/output pair, simplify, and solve for the unknown parameter.",
  skills: ["function-interpretation", "solving-equations"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A data set consists of $11$ positive integers. The list shown gives $10$ of these integers.\n\n$28, 35, 31, 27, 38, 32, 30, 33, 29, 37$\n\nThe mean of the $10$ listed integers is $32$. If the mean of all $11$ integers is also $32$, what is the value of the eleventh integer?",
  correctAnswer: "32",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $32$.**\n\n**The Fast Way (~25s):** If adding a value does NOT change the mean, that value MUST equal the mean. Eleventh integer $= 32$.\n\n**The Full Solution:**\nSum of $10$ integers: $10 \\cdot 32 = 320$.\nSum of $11$ integers: $11 \\cdot 32 = 352$.\nEleventh integer: $352 - 320 = 32$.\n\nVerification: $28 + 35 + 31 + 27 + 38 + 32 + 30 + 33 + 29 + 37 = 320$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing $\\dfrac{320}{10}$ and reporting that as the answer — it equals $32$, but for the wrong reason.\n* Forgetting that adding a value EQUAL to the current mean leaves the mean unchanged.\n\n**Test Day Takeaway:** Adding a value equal to the current mean leaves the mean unchanged. Verify your reasoning matches that invariant.",
  skills: ["statistics"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $-3x^2 + bx - 48 = 0$ has no real solutions. What is the greatest integer value of $b$?",
  choices: [
    { id: "A", text: "$23$" },
    // distractor: at $b = 24$, discriminant $= 0$ — exactly one solution, not none
    { id: "B", text: "$24$" },
    // distractor: at $b = 25$, discriminant $> 0$ — two real solutions
    { id: "C", text: "$25$" },
    // distractor: valid (any $|b| < 24$) but not the greatest
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Discriminant $< 0$: $b^2 - 4(-3)(-48) < 0$, so $b^2 < 576$, meaning $|b| < 24$. Greatest integer: $23$.\n\n**The Full Solution:**\nFor $-3x^2 + bx - 48 = 0$, discriminant $= b^2 - 4(-3)(-48) = b^2 - 576$.\nNo real solutions $\\iff b^2 - 576 < 0 \\iff -24 < b < 24$.\nGreatest integer in this range: $23$.\n\nVerification at $b = 23$: discriminant $= 529 - 576 = -47 < 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"off-by-one\" — at $b = 24$, discriminant $= 0$ (exactly one solution, not none).\n* Choice C: \"applies the inverse operation\" — uses $|b| \\leq 25$ ignoring the bound.\n* Choice D: \"stops one step early\" — picks a valid but not greatest value.\n\n**Test Day Takeaway:** \"No real solutions\" means discriminant $< 0$ STRICTLY. The boundary $= 0$ gives exactly one solution.",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A polling organization surveyed $400$ voters and reported a margin of error of $\\pm 5\\%$ at a $95\\%$ confidence level. The pollster wants to redo the survey at the same confidence level but cut the margin of error to $\\pm 1\\%$. Approximately how many voters must they survey?",
  choices: [
    // distractor: doubles sample size — uses $400 \cdot 5 = 2000$ (linear thinking)
    { id: "A", text: "$2{,}000$" },
    // distractor: stops one step early — uses $400 \cdot 5 = 2000$ then half
    { id: "B", text: "$8{,}000$" },
    { id: "C", text: "$10{,}000$" },
    // distractor: divides margin by 5 instead of squaring
    { id: "D", text: "$80$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Margin of error $\\propto \\dfrac{1}{\\sqrt{n}}$. To cut margin from $5\\%$ to $1\\%$ (factor of $5$), multiply $n$ by $5^2 = 25$: $400 \\cdot 25 = 10{,}000$.\n\n**The Full Solution:**\nThe margin of error is inversely proportional to $\\sqrt{n}$. If we want a new margin $E_2 = \\dfrac{E_1}{5}$, we need $\\sqrt{n_2} = 5\\sqrt{n_1}$, so $n_2 = 25 n_1 = 25 \\cdot 400 = 10{,}000$.\n\nVerification: at $n = 10{,}000$, margin $\\propto \\dfrac{1}{\\sqrt{10{,}000}} = \\dfrac{1}{100}$, vs. original $\\dfrac{1}{\\sqrt{400}} = \\dfrac{1}{20}$. Ratio $\\dfrac{1/100}{1/20} = \\dfrac{1}{5}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — multiplies sample size by $5$ (linear) instead of $25$ (quadratic).\n* Choice B: \"off-by-one\" — uses factor of $20$ ($400 \\cdot 20 = 8{,}000$) instead of $25$.\n* Choice D: \"wrong base\" — divides by $5$ instead of squaring.\n\n**Test Day Takeaway:** Margin of error scales with $\\dfrac{1}{\\sqrt{n}}$. To cut margin by a factor of $k$, MULTIPLY sample size by $k^2$.",
  skills: ["margin-of-error", "statistics"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A company's profit $P$, in thousands of dollars, is modeled by $P(x) = -2x^2 + 28x - 80$, where $x$ is the number of units produced (in thousands). For what values of $x$ is the profit positive?",
  choices: [
    // distractor: gives where $P(x) < 0$ (outside the roots for downward parabola)
    { id: "A", text: "$x < 4$ or $x > 10$" },
    { id: "B", text: "$4 < x < 10$" },
    // distractor: applies the inverse operation — wrong signs on roots
    { id: "C", text: "$x < -10$ or $x > -4$" },
    // distractor: not related to the actual zeros
    { id: "D", text: "$0 < x < 14$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Set $P(x) > 0$: $-2x^2 + 28x - 80 > 0$, divide by $-2$ (flip): $x^2 - 14x + 40 < 0$. Factor: $(x - 4)(x - 10) < 0 \\Rightarrow 4 < x < 10$.\n\n**The Full Solution:**\nSolve $-2x^2 + 28x - 80 = 0$:\n$x^2 - 14x + 40 = 0 \\Rightarrow (x - 4)(x - 10) = 0 \\Rightarrow x = 4$ or $x = 10$.\n\nLeading coefficient $-2 < 0$ means parabola opens DOWN — so $P(x) > 0$ BETWEEN the roots: $4 < x < 10$.\n\nCheck $P(7) = -98 + 196 - 80 = 18 > 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — gives where the parabola is below the $x$-axis.\n* Choice C: \"applies the inverse operation\" — wrong signs on roots.\n* Choice D: \"wrong base\" — random interval not derived from zeros.\n\n**Test Day Takeaway:** For a downward-opening parabola, $f(x) > 0$ BETWEEN the roots; for upward-opening, $f(x) > 0$ OUTSIDE the roots.",
  skills: ["quadratic-equations", "word-problems"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A study of $200$ households measured weekly grocery spending ($x$, in dollars) and weekly grocery delivery cost ($y$, in dollars). The line of best fit is $y = 0.18x + 3.5$. A particular household spent $\\$220$ on groceries and paid $\\$48$ for delivery. What is the residual for this household, in dollars?",
  choices: [
    // distractor: applies the inverse operation — predicted minus actual
    { id: "A", text: "$-5.1$" },
    // distractor: stops one step early — gives only the predicted value $43.1$
    { id: "B", text: "$43.1$" },
    { id: "C", text: "$4.9$" },
    // distractor: drops the intercept — uses $0.18(220) = 39.6$ as predicted
    { id: "D", text: "$8.4$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Residual**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Predicted: $0.18(220) + 3.5 = 39.6 + 3.5 = 43.1$. Residual $=$ actual $-$ predicted $= 48 - 43.1 = 4.9$.\n\n**The Full Solution:**\nPredicted at $x = 220$: $y = 0.18(220) + 3.5 = 39.6 + 3.5 = 43.1$ dollars.\nActual: $48$ dollars.\nResidual $=$ actual $-$ predicted $= 48 - 43.1 = 4.9$ dollars.\n\nA positive residual means the actual value lies ABOVE the line of best fit.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — predicted $-$ actual ($43.1 - 48 = -4.9$, then sign-flipped to $-5.1$ via arithmetic slip).\n* Choice B: \"stops one step early\" — gives only the predicted value $43.1$.\n* Choice D: \"wrong base\" — drops the intercept and uses $0.18(220) = 39.6$ as predicted.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted. Always include the intercept when computing the predicted value from $y = mx + b$.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A radioactive substance has a half-life of $18$ months. The amount remaining is modeled by $A(t) = 5000(0.5)^{t/18}$, where $t$ is in months. To the nearest hundredth of a percent, what is the percent decrease per month?",
  choices: [
    // distractor: divides $50\%$ by $18$ — linear thinking on an exponential
    { id: "A", text: "$2.78\\%$" },
    { id: "B", text: "$3.78\\%$" },
    // distractor: doubles the linear divide
    { id: "C", text: "$5.56\\%$" },
    // distractor: this is the decrease per $18$ months, not per month
    { id: "D", text: "$50.00\\%$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Monthly factor $= (0.5)^{1/18} \\approx 0.9622$. Monthly decrease $= 1 - 0.9622 = 0.0378 = 3.78\\%$.\n\n**The Full Solution:**\nRewrite $A(t) = 5000(0.5)^{t/18} = 5000 \\left[(0.5)^{1/18}\\right]^t$.\n$(0.5)^{1/18} = e^{\\ln(0.5)/18} = e^{-0.6931/18} \\approx e^{-0.03851} \\approx 0.9622$.\nMonthly decrease: $1 - 0.9622 = 0.0378 = 3.78\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — divides $50\\%$ by $18$ (linear, ignores compounding).\n* Choice C: \"off-by-one\" — doubles the linear divide.\n* Choice D: \"wrong base\" — gives the decrease per $18$ months, not per month.\n\n**Test Day Takeaway:** Per-period rate from a half-life: $(0.5)^{1/n}$ where $n$ is the number of periods in one half-life. Don't divide $50\\%$ by $n$ — exponential decay does NOT scale linearly.",
  skills: ["exponential-functions", "function-interpretation"]
}
      ]
    }
  ]
};

export default practiceTest12;
