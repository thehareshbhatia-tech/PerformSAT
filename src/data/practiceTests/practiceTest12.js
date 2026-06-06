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
  explanation: "**SAT Pattern: Percent Complement**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** If $40\\%$ are blue, then $60\\%$ are not blue. ${}0.60 \\times 60 = 36$.\n\n**The Full Solution:**\nBlue marbles: ${}0.40 \\times 60 = 24$. Not blue: $60 - 24 = 36$.\n\nVerification: $24 + 36 = 60$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — computes the number of blue marbles ($24$) instead of the not-blue count.\n* Choice B: \"applies the inverse operation\" — confuses $40\\%$ with $\\dfrac{40}{60}$ or treats the percent as the count.\n* Choice D: \"wrong base\" — reads $40\\%$ as $40$ marbles directly.\n\n**Test Day Takeaway:** For the complement, use $100\\% - \\text{given}\\%$, or subtract the count from the total.",
  skills: ["percents"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The ratio of cats to dogs at an animal shelter is $5 : 3$. If the shelter has $40$ cats and dogs combined, how many of them are dogs?",
  choices: [
    // distractor: applies the percent forward — uses $\\frac{3}{8} \cdot 40$ but mis-rounds
    { id: "A", text: "$12$" },
    { id: "B", text: "$15$" },
    // distractor: uses $\\frac{40}{2} = 20$, halving instead of using the ratio
    { id: "C", text: "$20$" },
    // distractor: solves for cats ($\\frac{5}{8} \cdot 40$) instead of dogs
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
  question: "If $8x + 5 = 53$, what is the value of $8x - 5$?",
  choices: [
    // distractor: stops one step early — reports the value of $x$
    { id: "A", text: "$6$" },
    // distractor: gives $8x = 48$ but forgets to subtract 5
    { id: "B", text: "$48$" },
    { id: "C", text: "$43$" },
    // distractor: applies the inverse operation — re-uses the given total
    { id: "D", text: "$53$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** From $8x + 5 = 53$, $8x = 48$. So $8x - 5 = 48 - 5 = 43$.\n\n**The Full Solution:**\n$8x + 5 = 53$\n$8x = 48$\n$8x - 5 = 48 - 5 = 43$.\n\nNote: you do not need to find $x$ explicitly — the requested expression differs from the given one by exactly $-10$, so $53 - 10 = 43$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — solves for $x$ ($x = 6$) and reports it instead of $8x - 5$.\n* Choice B: \"stops one step early\" — gives $8x = 48$ and forgets to subtract $5$.\n* Choice D: \"applies the inverse operation\" — re-uses the given total $53$.\n\n**Test Day Takeaway:** Read the LAST sentence carefully. The question often asks for a related expression (like $8x - 5$), not the variable itself.",
  skills: ["solving-equations"]
},
{
  id: 5,
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
    // distractor: computes $\\frac{19}{2}$ or a similar slip
    { id: "D", text: "$9$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice B is correct.**\n\n**The Full Solution:**\nFrom $3x - 2y = 0$: $3x = 2y$, so $x = \\dfrac{2y}{3}$.\nSubstitute into $2x + 5y = 19$:\n$2 \\cdot \\dfrac{2y}{3} + 5y = 19$\n$\\dfrac{4y}{3} + 5y = 19$\n$\\dfrac{4y + 15y}{3} = 19$\n$\\dfrac{19y}{3} = 19 \\Rightarrow y = 3$\n\nThen $x = \\dfrac{2(3)}{3} = 2$. So $x + y = 2 + 3 = 5$.\n\nVerification: $2(2) + 5(3) = 4 + 15 = 19$ \\checkmark; $3(2) - 2(3) = 6 - 6 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives just the value of $y$.\n* Choice C: \"off-by-one\" — arithmetic slip when adding $x + y$.\n* Choice D: \"wrong base\" — computes $\\frac{19}{2}$ ignoring the second equation.\n\n**Test Day Takeaway:** When the question asks for a combination like $x + y$, solve the system fully first, THEN compute the requested expression.",
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
    // distractor: applies linear scale factor only ($27 \cdot \\frac{5}{3} = 45$)
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
  diagram: { type: "scatterplot", params: {
    points: [[1,22],[2,20],[3,30],[4,28],[6,42],[7,48],[8,44],[9,56],[10,52],[11,65]],
    xMin: 0, xMax: 12, yMin: 10, yMax: 70,
    xGridStep: 1, xLabelStep: 2, yGridStep: 10, yLabelStep: 10,
    bestFitLine: { slope: 4.2, intercept: 15 },
    highlightPoint: [5, 32], highlightLabel: "(5, 32)", showResidual: true,
    xLabel: "Population density (thousands per sq mi)", yLabel: "Commute time (minutes)",
  } },
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
  question: "A right circular cylinder has a radius of $6$ centimeters and a height of $7$ centimeters. The volume of the cylinder, in cubic centimeters, can be expressed as $k\\pi$. What is the value of $k$?",
  choices: [
    // distractor: forgets to square the radius — uses $\pi r h = 42\pi$
    { id: "A", text: "$42$" },
    // distractor: uses cone formula $\\frac{1}{3} \pi r^2 h$ instead of cylinder
    { id: "B", text: "$84$" },
    // distractor: doubles the radius before squaring (uses $r = 12$)
    { id: "C", text: "$1008$" },
    { id: "D", text: "$252$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (6)^2 (7) = 36 \\cdot 7 \\pi = 252\\pi$. So $k = 252$.\n\n**The Full Solution:**\nThe volume formula for a right circular cylinder is $V = \\pi r^2 h$.\nWith $r = 6$ cm and $h = 7$ cm:\n$V = \\pi (6)^2 (7) = \\pi (36)(7) = 252\\pi$ cubic centimeters.\nSo $k = 252$.\n\nVerification: $36 \\cdot 7 = 252$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — uses $\\pi r h$ ($r$ to the first power) and gets $42$.\n* Choice B: \"wrong base\" — uses cone formula $\\dfrac{1}{3}\\pi r^2 h$, giving $84$.\n* Choice C: \"applies the inverse operation\" — doubles the radius before squaring (uses $r = 12$, so $r^2 = 144$ and $144 \\cdot 7 = 1008$).\n\n**Test Day Takeaway:** For a cylinder, square the radius FIRST, then multiply by the height. $V = \\pi r^2 h$ is on the SAT Reference Sheet.",
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
// Distribution: 3E / 7M / 12H. Wavy flow: easies at Q1/Q2/Q8 (Q8 breather),
// mediums at Q3/Q4/Q5/Q10/Q11/Q14/Q19, hards at Q6/Q7/Q9/Q12/Q13/Q15/Q16/Q17/Q18/Q20/Q21/Q22.
// Pool infusions (transformed): successive percent (D-p31#22 -> Q5), no-solution system
// (D-p15#27 -> Q6), radical-function parameter (D-p37#24 -> Q9), composite prism surface
// area (D-p21#26 -> Q15), matching-coefficient factor (D-p42#25 -> Q16), equilateral
// circumradius (D-p40#27 -> Q17), discriminant no-real-solutions (E#13 -> Q18), line-parabola
// substitution greatest-x (E#9 -> Q19), radical-product exponent simplification (D-p16#21 -> Q21),
// inscribed-rectangle 30-60-90 diameter (D-p27#21 -> Q22). Q1 is a fresh Pythagorean-hypotenuse
// opener (non-simplifying surd). Palette: apiary scales, canoe rentals, neon-sign fabrication,
// library archives, telescope mirrors, sled-dog training, bare-math algebra/geometry.

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A right triangle has legs of length $5$ and $9$. What is the length of the hypotenuse?",
  choices: [
    // distractor: subtracts the squared legs instead of adding them
    { id: "A", text: "$\\sqrt{56}$" },
    { id: "B", text: "$\\sqrt{106}$" },
    // distractor: sums the legs directly, ignoring the Pythagorean relationship
    { id: "C", text: "$14$" },
    // distractor: computes the sum of the squares but forgets to take the square root
    { id: "D", text: "$106$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $c = \\sqrt{5^2 + 9^2} = \\sqrt{25 + 81} = \\sqrt{106}$. Since $106 = 2 \\cdot 53$ has no perfect-square factor, $\\sqrt{106}$ does not simplify.\n\n**The Full Solution:**\nFor a right triangle, the hypotenuse $c$ satisfies $c^2 = a^2 + b^2$ where $a$ and $b$ are the legs:\n$c^2 = 5^2 + 9^2 = 25 + 81 = 106$.\nSo $c = \\sqrt{106}$.\nCheck for simplification: $106 = 2 \\cdot 53$, and neither factor is a perfect square, so $\\sqrt{106}$ is already in simplest form ($\\approx 10.3$).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong operation\" — subtracts the squared legs ($81 - 25 = 56$) instead of adding them, giving $\\sqrt{56}$.\n* Choice C: \"skips the theorem\" — adds the legs directly ($5 + 9 = 14$) without using $a^2 + b^2$.\n* Choice D: \"stops one step early\" — finds $a^2 + b^2 = 106$ but forgets to take the square root.\n\n**Test Day Takeaway:** The hypotenuse is $\\sqrt{a^2 + b^2}$ — add the SQUARES of the legs, then take the square root. Always check whether the radicand has a perfect-square factor before assuming the answer simplifies.",
  skills: ["geometry", "right-triangles", "pythagorean-theorem"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A technician polishes a telescope mirror, removing a thin film of coating with each pass of the polishing arm. The function $M(n) = -0.4n + 120$ gives the thickness, in micrometers, of coating remaining on the mirror after $n$ polishing passes. Which statement is the best interpretation of the $y$-intercept of the graph of $y = M(n)$ in the $ny$-plane in this context?",
  choices: [
    // distractor: wrong base and wrong unit — treats the initial total as a per-pass rate
    { id: "A", text: "The mirror lost about $120$ micrometers of coating with each polishing pass." },
    // distractor: swaps slope and intercept — uses the rate's magnitude as the starting amount
    { id: "B", text: "The mirror had about $0.4$ micrometers of coating before polishing began." },
    { id: "C", text: "The mirror had about $120$ micrometers of coating before polishing began." },
    // distractor: correct description of the slope, but the question asks about the intercept
    { id: "D", text: "The mirror lost about $0.4$ micrometers of coating with each polishing pass." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Interpret Intercept in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The $y$-intercept of $M(n) = -0.4n + 120$ is $M(0) = 120$. At $n = 0$ (no passes yet), the coating $\\approx 120$ micrometers.\n\n**The Full Solution:**\nThe $y$-intercept of a linear function $M(n) = mn + b$ is $b$, its value at $n = 0$. Here $b = 120$, and $n$ counts polishing passes, so $n = 0$ corresponds to BEFORE any polishing began. The mirror started with about $120$ micrometers of coating.\n\nVerification: at $n = 0$, $M = 120$ \\checkmark. At $n = 100$, $M = 120 - 40 = 80$ — about $40$ micrometers removed over $100$ passes, confirming the rate of $0.4$ micrometers per pass \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base AND wrong unit\" — treats the starting total as a per-pass rate. At $120$ micrometers per pass the coating would vanish in a single pass.\n* Choice B: \"swaps coefficients\" — uses the slope's magnitude as the starting amount.\n* Choice D: \"correct interpretation of the slope, wrong question\" — accurately describes the rate, but the question asks for the $y$-intercept (the initial value, not the rate).\n\n**Test Day Takeaway:** In $f(n) = mn + b$ contextual problems, $b$ (the $y$-intercept) is the INITIAL value at $n = 0$ and $m$ (the slope) is the per-unit RATE. Let the wording (\"$y$-intercept\" vs \"slope/rate\") tell you which to report.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The equation $\\dfrac{a}{x - 2} = \\dfrac{3x}{x - 2} + 5$ has no solution. What is the value of $a$?",
  choices: [
    { id: "A", text: "$6$" },
    // distractor: computes $3(2) + 5 = 11$, substituting into the wrong expression
    { id: "B", text: "$11$" },
    // distractor: uses $a + 10 = 16$ but forgets to subtract $10$
    { id: "C", text: "$16$" },
    // distractor: sign error on the final step
    { id: "D", text: "$-4$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Rational Equation with No Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Multiply both sides by $(x - 2)$: $a = 3x + 5(x - 2) = 8x - 10$. The unique algebraic solution is $x = \\dfrac{a + 10}{8}$. For NO solution, this must equal the excluded value $x = 2$: $a = 8(2) - 10 = 6$.\n\n**The Full Solution:**\nExcluded value: $x = 2$ (denominator zero).\nMultiply both sides by $(x - 2)$: $a = 3x + 5(x - 2) = 8x - 10$, so $x = \\dfrac{a + 10}{8}$.\n\nFor no solution, the algebraic root must equal the excluded value:\n$\\dfrac{a + 10}{8} = 2 \\Rightarrow a + 10 = 16 \\Rightarrow a = 6$.\n\nVerify: with $a = 6$, the equation reduces to $x = 2$, but $x = 2$ is excluded — no solution \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — computes $3(2) + 5 = 11$.\n* Choice C: \"stops one step early\" — uses $a + 10 = 16$ but forgets to subtract $10$.\n* Choice D: \"applies the inverse operation\" — sign error on the final step.\n\n**Test Day Takeaway:** A rational equation has NO solution when its only algebraic root is an excluded value. Find that excluded value, plug it in, then solve for the parameter.",
  skills: ["solving-equations"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A line in the $xy$-plane passes through the point $(2, -1)$ and is perpendicular to the line $4x - 3y = 12$. What is the $y$-intercept of this line?",
  choices: [
    { id: "A", text: "$\\dfrac{1}{2}$" },
    // distractor: sign error in the final arithmetic
    { id: "B", text: "$-\\dfrac{1}{2}$" },
    // distractor: uses the original slope instead of the perpendicular one
    { id: "C", text: "$\\dfrac{7}{4}$" },
    // distractor: multiple sign and arithmetic slips
    { id: "D", text: "$-\\dfrac{7}{4}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Slope of $4x - 3y = 12$ is $\\dfrac{4}{3}$. Perpendicular slope: $-\\dfrac{3}{4}$. Line: $y + 1 = -\\dfrac{3}{4}(x - 2)$, so $y = -\\dfrac{3}{4}x + \\dfrac{3}{2} - 1 = -\\dfrac{3}{4}x + \\dfrac{1}{2}$. The $y$-intercept is $\\dfrac{1}{2}$.\n\n**The Full Solution:**\nRewrite $4x - 3y = 12$: $y = \\dfrac{4}{3}x - 4$. Slope $= \\dfrac{4}{3}$.\nPerpendicular slope $= -\\dfrac{3}{4}$.\nUsing point $(2, -1)$:\n$y - (-1) = -\\dfrac{3}{4}(x - 2)$\n$y + 1 = -\\dfrac{3}{4}x + \\dfrac{3}{2}$\n$y = -\\dfrac{3}{4}x + \\dfrac{1}{2}$\n$y$-intercept $= \\dfrac{1}{2}$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — sign error.\n* Choice C: \"wrong base\" — uses original slope instead of perpendicular.\n* Choice D: \"applies the inverse operation\" — multiple sign and arithmetic slips.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals: flip the fraction AND change the sign.",
  skills: ["slope", "coordinate-geometry"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "At Idris's apiary, the spring honey harvest was $12\\%$ larger than the winter harvest, and the summer harvest was $5\\%$ larger than the spring harvest. If the summer harvest was $y$ times the winter harvest, what is the value of $y$?",
  choices: [
    // distractor: averages the two percents instead of compounding them
    { id: "A", text: "$1.0850$" },
    // distractor: adds the percents (12% + 5% = 17%) instead of multiplying the factors
    { id: "B", text: "$1.1700$" },
    { id: "C", text: "$1.1760$" },
    // distractor: multiplies the first growth factor by the second RATE (1.12 * 0.05) instead of the second growth factor, then adds 1
    { id: "D", text: "$1.0560$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Successive Percent Changes**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Two successive increases multiply: $y = (1.12)(1.05) = 1.176$.\n\n**The Full Solution:**\nLet the winter harvest be $W$.\nSpring $= W(1 + 0.12) = 1.12W$.\nSummer $= (\\text{spring})(1 + 0.05) = 1.12W \\cdot 1.05 = 1.176W$.\nSo summer $= 1.176 \\cdot W$, meaning $y = 1.176$.\n\nVerification: a $12\\%$ then $5\\%$ rise is slightly MORE than a flat $17\\%$, because the second increase also acts on the first increase. $1.176 > 1.17$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong operation\" — averages the two rates ($\\tfrac{12 + 5}{2} = 8.5\\%$).\n* Choice B: \"stops one step early\" — adds the percents ($12\\% + 5\\% = 17\\%$) instead of compounding the growth factors.\n* Choice D: \"factor times rate\" — multiplies the spring growth factor by the second RATE rather than the second growth factor ($1.12 \\times 0.05 = 0.056$) and tacks on $1$, getting $1.056$.\n\n**Test Day Takeaway:** Successive percent changes COMPOUND — multiply the growth factors $(1 + r_1)(1 + r_2)$. Adding the percents undercounts because the second change also applies to the first change.",
  skills: ["percent-change", "percent-word-problems"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the system below, $p$ is a constant and the system has no solution.\n\n$\\dfrac{3}{4}y - \\dfrac{1}{2}x = \\dfrac{1}{5} - \\dfrac{3}{4}y$\n$\\dfrac{1}{2}x + 3 = py + 8$\n\nWhat is the value of $p$?",
  correctAnswer: "3/2",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $3/2$ (or $1.5$).**\n\n**The Fast Way (~50s):** Reduce each line to slope form. First: $\\dfrac{3}{2}y = \\dfrac{1}{2}x + \\dfrac{1}{5}$, slope $\\dfrac{1}{3}$. Second: $py = \\dfrac{1}{2}x - 5$, slope $\\dfrac{1}{2p}$. No solution $\\Rightarrow$ equal slopes: $\\dfrac{1}{3} = \\dfrac{1}{2p} \\Rightarrow 2p = 3 \\Rightarrow p = \\dfrac{3}{2}$.\n\n**The Full Solution:**\nEquation 1: gather the two $\\dfrac{3}{4}y$ terms on the left — $\\dfrac{3}{4}y + \\dfrac{3}{4}y = \\dfrac{3}{2}y$. So $\\dfrac{3}{2}y = \\dfrac{1}{2}x + \\dfrac{1}{5}$, giving $y = \\dfrac{1}{3}x + \\dfrac{2}{15}$. Slope $= \\dfrac{1}{3}$.\n\nEquation 2: $\\dfrac{1}{2}x + 3 = py + 8 \\Rightarrow py = \\dfrac{1}{2}x - 5$, so $y = \\dfrac{1}{2p}x - \\dfrac{5}{p}$. Slope $= \\dfrac{1}{2p}$.\n\nA linear system has NO solution when the lines are parallel but not identical — equal slopes, different intercepts:\n$\\dfrac{1}{3} = \\dfrac{1}{2p} \\Rightarrow 2p = 3 \\Rightarrow p = \\dfrac{3}{2}$.\n\nVerification: with $p = \\dfrac{3}{2}$, line 2 has intercept $-\\dfrac{5}{3/2} = -\\dfrac{10}{3}$, while line 1 has intercept $\\dfrac{2}{15}$ — different intercepts, so the lines are parallel and never intersect \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Leaving the first equation as $\\dfrac{3}{4}y$ instead of combining both $\\dfrac{3}{4}y$ terms into $\\dfrac{3}{2}y$.\n* Equating the reciprocals of the slopes rather than the slopes themselves, which yields $p = \\dfrac{2}{3}$.\n\n**Test Day Takeaway:** A linear system has no solution exactly when the two lines are parallel and distinct. Put each equation in slope-intercept form, set the slopes equal, and solve for the parameter — then confirm the intercepts actually differ.",
  skills: ["systems-of-equations", "linear-functions"]
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
  difficulty: "easy",
  band: 3,
  question: "At an apiary, Wren records the number of bees leaving a hive each morning over six days: $18$, $25$, $22$, $31$, $19$, $27$. What is the range of these six values?",
  choices: [
    // distractor: reports the maximum value instead of the range
    { id: "A", text: "$31$" },
    { id: "B", text: "$13$" },
    // distractor: gives the median of the data set instead of the range
    { id: "C", text: "$23.5$" },
    // distractor: rounds the mean of the data set
    { id: "D", text: "$24$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Range $=$ maximum $-$ minimum $= 31 - 18 = 13$.\n\n**The Full Solution:**\nThe range of a data set is the largest value minus the smallest value.\nLargest: $31$. Smallest: $18$.\nRange $= 31 - 18 = 13$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports the maximum ($31$) without subtracting the minimum.\n* Choice C: \"wrong measure\" — gives the median (average of the two middle values, $22$ and $25$, is $23.5$).\n* Choice D: \"wrong measure\" — rounds the mean ($142 \\div 6 \\approx 23.67$) instead of finding the range.\n\n**Test Day Takeaway:** Range is a single subtraction: max $-$ min. Don't confuse it with the mean or median.",
  skills: ["statistics"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Constants $a$ and $b$ define the function $g(x) = a\\sqrt{x + b}$. Its graph in the $xy$-plane has an $x$-intercept at $(-21, 0)$, and $g(21)$ is negative. Which statement must be true?",
  choices: [
    // distractor: reads the x-intercept's magnitude as an output value of g
    { id: "A", text: "$g(0) = 21$" },
    // distractor: pins g(0) to a value that depends on the undetermined magnitude of a
    { id: "B", text: "$g(0) = -21$" },
    { id: "C", text: "$a < b$" },
    // distractor: reverses the inequality after correctly finding a is negative
    { id: "D", text: "$a > b$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Radical Function Parameter Analysis**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The $x$-intercept at $x = -21$ forces $b = 21$. Then $g(21) = a\\sqrt{42} < 0$ forces $a < 0$. A negative $a$ is below the positive $b = 21$, so $a < b$.\n\n**The Full Solution:**\nAn $x$-intercept at $(-21, 0)$ means $g(-21) = a\\sqrt{-21 + b} = 0$. Since $a \\neq 0$ (if $a = 0$ then $g$ would be the constant $0$ and $g(21)$ could not be negative), the radicand must vanish: $-21 + b = 0 \\Rightarrow b = 21$.\n\nNext, $g(21) = a\\sqrt{21 + 21} = a\\sqrt{42}$. Because $\\sqrt{42} > 0$ and $g(21) < 0$, we conclude $a < 0$.\n\nWith $a < 0$ and $b = 21 > 0$, it must be that $a < b$.\n\nThe other options fail: $g(0) = a\\sqrt{21}$ depends on the unknown magnitude of $a$, so it cannot be pinned to $21$ or $-21$; and $a < 0 < 21 = b$ directly contradicts $a > b$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — treats the intercept's magnitude as a function output; $g(0)$ depends on $a$, which is not fully determined.\n* Choice B: \"stops one step early\" — fixes a specific output without noticing $a$'s magnitude is unknown.\n* Choice D: \"applies the inverse operation\" — flips the inequality after correctly deducing $a < 0$.\n\n**Test Day Takeaway:** A zero of $a\\sqrt{x + b}$ comes from the radicand, fixing $b$. A sign condition on another output then fixes the sign of $a$. Compare the two determined facts to test each statement.",
  skills: ["radical-functions", "function-interpretation"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The arc of a neon sign is modeled by $y = a(x - h)^2 + k$. Its highest point is the vertex $(2, 5)$, and the curve passes through the point $(4, -3)$. What is the value of $a$?",
  choices: [
    // distractor: drops the negative sign on the leading coefficient
    { id: "A", text: "$2$" },
    { id: "B", text: "$-2$" },
    // distractor: divides $-8$ by $2$ instead of by $4$
    { id: "C", text: "$-4$" },
    // distractor: inverts the final division
    { id: "D", text: "$-\\dfrac{1}{2}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** With vertex $(2, 5)$: $y = a(x - 2)^2 + 5$. Plug in $(4, -3)$: $-3 = 4a + 5 \\Rightarrow a = -2$.\n\n**The Full Solution:**\nThe vertex $(2, 5)$ gives $h = 2$, $k = 5$, so $y = a(x - 2)^2 + 5$.\nSubstitute $(4, -3)$:\n$-3 = a(4 - 2)^2 + 5$\n$-3 = 4a + 5$\n$4a = -8 \\Rightarrow a = -2$.\n\nA negative $a$ matches the picture: the vertex is the HIGHEST point, so the parabola opens downward.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"drops a sign\" — solves $|4a| = 8$ but keeps $a$ positive, contradicting the downward arc.\n* Choice C: \"off-by-one base\" — divides $-8$ by $2$ instead of $4$.\n* Choice D: \"applies the inverse operation\" — inverts the final division.\n\n**Test Day Takeaway:** Plug the vertex straight into $a(x-h)^2 + k$ ($h$, $k$ are read off the vertex), then use the second point to solve for $a$. A maximum vertex means $a < 0$.",
  skills: ["vertex-form", "quadratic-equations"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "For the function $f(x) = 3x^2 - kx + 5$, it is given that $f(2) = -3$. What is the value of $k$?",
  choices: [
    // distractor: divides 20 by 5 (the constant term) instead of by 2
    { id: "A", text: "$4$" },
    // distractor: forgets the constant 5, solving 12 - 2k = -3
    { id: "B", text: "$7.5$" },
    { id: "C", text: "$10$" },
    // distractor: stops one step early — reports 2k instead of k
    { id: "D", text: "$20$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Solving via Function Notation**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $f(2) = 12 - 2k + 5 = 17 - 2k = -3$. So $2k = 20$, giving $k = 10$.\n\n**The Full Solution:**\n$f(2) = 3(2)^2 - k(2) + 5 = 12 - 2k + 5 = 17 - 2k$.\nSet equal to $-3$: $17 - 2k = -3 \\Rightarrow 2k = 20 \\Rightarrow k = 10$.\n\nVerification: $f(2) = 12 - 10(2) + 5 = 12 - 20 + 5 = -3$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — divides $20$ by $5$ instead of $2$.\n* Choice B: \"off-by-one\" — drops the constant $5$, solving $12 - 2k = -3$.\n* Choice D: \"stops one step early\" — reports $2k$ instead of $k$.\n\n**Test Day Takeaway:** Substitute the given input/output pair, combine the constants carefully, and solve for the unknown parameter.",
  skills: ["function-interpretation", "solving-equations"]
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
  difficulty: "medium",
  band: 5,
  question: "If $5x + 3 = 28$, what is the value of $15x - 6$?",
  choices: [
    // distractor: gives 5x = 25 and stops
    { id: "A", text: "$25$" },
    // distractor: triples 28 to 84 but forgets to subtract 15
    { id: "B", text: "$84$" },
    { id: "C", text: "$69$" },
    // distractor: solves x = 5 and reports it
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $15x - 6 = 3(5x + 3) - 15 = 3(28) - 15 = 84 - 15 = 69$. No need to solve for $x$.\n\n**The Full Solution:**\nNotice $15x - 6 = 3(5x + 3) - 15$. Since $5x + 3 = 28$, substitute directly: $15x - 6 = 3 \\cdot 28 - 15 = 84 - 15 = 69$.\n\nAlternatively: $5x = 25 \\Rightarrow x = 5$, so $15(5) - 6 = 75 - 6 = 69$.\n\nVerification: $15(5) - 6 = 69$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives $5x = 25$ without tripling or subtracting.\n* Choice B: \"applies the inverse operation\" — triples $28$ but forgets the $-15$ adjustment.\n* Choice D: \"stops one step early\" — solves for $x$ and reports it.\n\n**Test Day Takeaway:** Before solving for $x$, check whether the target expression is a SCALAR MULTIPLE of the given equation, possibly shifted. Often you can skip finding $x$ entirely.",
  skills: ["solving-equations"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Two identical rectangular prisms are fabricated for a neon-sign mount. Each has a height of $75$ centimeters, a square base, and a total surface area of $K$ square centimeters. When the two prisms are joined face-to-face along a full square base, the resulting single prism has a total surface area of $\\dfrac{7}{4}K$ square centimeters. What is the side length, in centimeters, of each square base?",
  choices: [
    // distractor: arithmetic slip — divides 300 by 12 when factoring 6s^2 - 300s = 0
    { id: "A", text: "$25$" },
    { id: "B", text: "$50$" },
    // distractor: reports the prism's height instead of the base side length
    { id: "C", text: "$75$" },
    // distractor: doubles the solved side, confusing it with a combined dimension
    { id: "D", text: "$100$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Composite Solid Surface Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~70s):** One prism: $K = 2s^2 + 4s(75) = 2s^2 + 300s$. Joined prism (height doubles to $150$, the two glued square faces vanish): $2s^2 + 4s(150) = 2s^2 + 600s = \\dfrac{7}{4}K$. Set $2s^2 + 600s = \\dfrac{7}{4}(2s^2 + 300s)$; this reduces to $6s^2 - 300s = 0$, so $s = 50$.\n\n**The Full Solution:**\nLet $s$ be the base side length. A single prism has two square bases ($2s^2$) and four lateral rectangles ($4 \\cdot s \\cdot 75 = 300s$):\n$$K = 2s^2 + 300s.$$\nJoining the two prisms along a full square base hides those two square faces and makes one taller prism of height $150$: its surface area is two square bases plus four lateral rectangles of height $150$:\n$$2s^2 + 4 \\cdot s \\cdot 150 = 2s^2 + 600s = \\frac{7}{4}K.$$\nSubstitute $K$:\n$$2s^2 + 600s = \\frac{7}{4}(2s^2 + 300s).$$\nMultiply both sides by $4$:\n$$8s^2 + 2400s = 14s^2 + 2100s \\Rightarrow 6s^2 - 300s = 0 \\Rightarrow 6s(s - 50) = 0.$$\nSince $s > 0$, $s = 50$.\n\nVerification: $K = 2(2500) + 300(50) = 5000 + 15000 = 20000$; joined $= 5000 + 600(50) = 35000 = \\frac{7}{4}(20000)$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"arithmetic slip\" — factors $6s^2 - 300s = 0$ but divides $300$ by $12$ instead of $6$.\n* Choice C: \"wrong quantity\" — reports the given height ($75$) instead of the base side.\n* Choice D: \"applies the inverse operation\" — doubles the solved side, treating it as a combined dimension.\n\n**Test Day Takeaway:** Gluing two solids along a face REMOVES the two shared faces from the total surface area and merges the dimension along that axis. Write each surface area as a function of the unknown side, then solve the resulting equation.",
  skills: ["surface-area", "geometry", "quadratic-equations"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the expressions below, $b$ is a positive integer constant. Which expression has $x + 3b$ as a factor?",
  choices: [
    // distractor: gives b = 10/12, not an integer — middle coefficient too small
    { id: "A", text: "$4x^2 + 14x + 12b$" },
    // distractor: gives b = 1.5, not an integer
    { id: "B", text: "$4x^2 + 22x + 12b$" },
    // distractor: gives b = 26/12, not an integer
    { id: "C", text: "$4x^2 + 30x + 12b$" },
    { id: "D", text: "$4x^2 + 40x + 12b$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Matching Coefficients in Factored Form**\n\n**Choice D is correct.**\n\n**The Fast Way (~45s):** Each expression has the form $4x^2 + Mx + 12b$. If $x + 3b$ is a factor, the other factor must be $4x + 4$ (so the leading term is $4x^2$ and the constant is $3b \\cdot 4 = 12b$). Expanding: $(x + 3b)(4x + 4) = 4x^2 + (4 + 12b)x + 12b$. So $M = 4 + 12b \\Rightarrow b = \\dfrac{M - 4}{12}$. Only $M = 40$ gives an integer: $b = 3$.\n\n**The Full Solution:**\nFor $x + 3b$ to divide $4x^2 + Mx + 12b$, write the second factor as $4x + c$. Then\n$(x + 3b)(4x + c) = 4x^2 + cx + 12bx + 3bc = 4x^2 + (c + 12b)x + 3bc$.\nMatching the constant term: $3bc = 12b \\Rightarrow c = 4$.\nMatching the middle term: $M = c + 12b = 4 + 12b$, so $b = \\dfrac{M - 4}{12}$.\nTest each $M$: $14 \\to \\tfrac{10}{12}$, $22 \\to \\tfrac{18}{12} = 1.5$, $30 \\to \\tfrac{26}{12}$, $40 \\to \\tfrac{36}{12} = 3$. Only $M = 40$ yields a positive integer $b = 3$.\n\nVerification: with $b = 3$, $x + 9$ divides $4x^2 + 40x + 36 = (x + 9)(4x + 4)$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"non-integer parameter\" — $M = 14$ gives $b = \\tfrac{10}{12}$, not a positive integer.\n* Choice B: \"non-integer parameter\" — $M = 22$ gives $b = 1.5$, not an integer.\n* Choice C: \"non-integer parameter\" — $M = 30$ gives $b = \\tfrac{26}{12}$, not an integer.\n\n**Test Day Takeaway:** When a binomial $x + k$ must divide a quadratic, the second factor is forced by the leading and constant terms. Match coefficients to get an equation in the unknown, then apply the integer constraint to pick the answer.",
  skills: ["polynomial-functions", "factoring"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A triangular archival seal is an equilateral triangle whose perimeter is $792$ millimeters. All three of its vertices lie on a circle. The radius of that circle is $w\\sqrt{3}$ millimeters. What is the value of $w$?",
  correctAnswer: "88",
  explanation: "**SAT Pattern: Equilateral Triangle — Circumradius**\n\n**The correct answer is $88$.**\n\n**The Fast Way (~40s):** Side $= \\dfrac{792}{3} = 264$. The circumradius of an equilateral triangle is $R = \\dfrac{s}{\\sqrt{3}} = \\dfrac{s\\sqrt{3}}{3} = \\dfrac{264\\sqrt{3}}{3} = 88\\sqrt{3}$. Matching $R = w\\sqrt{3}$ gives $w = 88$.\n\n**The Full Solution:**\nAn equilateral triangle with perimeter $792$ has side $s = \\dfrac{792}{3} = 264$ mm.\nFor an equilateral triangle, the circumradius (distance from center to each vertex) is\n$$R = \\frac{s}{\\sqrt{3}} = \\frac{s\\sqrt{3}}{3}.$$\nSubstitute $s = 264$:\n$$R = \\frac{264\\sqrt{3}}{3} = 88\\sqrt{3} \\text{ mm}.$$\nThe problem states $R = w\\sqrt{3}$, so $w = 88$.\n\n**Common Mistakes to Avoid:**\n* Using the side $264$ directly as $R$ (forgetting to divide by $\\sqrt{3}$).\n* Leaving $w$ as $\\dfrac{264}{\\sqrt{3}}$ without rationalizing to recognize the $\\sqrt{3}$ factor.\n* Dividing the perimeter by $2$ instead of $3$ to find the side.\n\n**Test Day Takeaway:** For an equilateral triangle, the circumradius is $R = \\dfrac{s}{\\sqrt{3}} = \\dfrac{s\\sqrt{3}}{3}$. Rationalize so the $\\sqrt{3}$ matches the form the problem gives.",
  skills: ["special-right-triangles", "circle-equations"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  question: "In the equation $x^2 - 10x + c = 0$, $c$ is a constant. If the equation has no real solutions, which of the following could be the value of $c$?",
  choices: [
    // distractor: discriminant 16 > 0, so the equation has two distinct real solutions ($x = 3$ and $x = 7$)
    { id: "A", text: "$21$" },
    // distractor: discriminant 4 > 0, so it has two distinct real solutions ($x = 4$ and $x = 6$)
    { id: "B", text: "$24$" },
    // distractor: a perfect-square trinomial; discriminant is 0, which still yields one (repeated) real solution
    { id: "C", text: "$25$" },
    { id: "D", text: "$26$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** No real solutions means the discriminant $b^2 - 4ac$ is negative: $(-10)^2 - 4(1)c < 0$, so $100 < 4c$, which gives $c > 25$. Only $26$ qualifies.\n\n**The Full Solution:**\nThe number of real solutions of $ax^2 + bx + c = 0$ is governed by the discriminant $D = b^2 - 4ac$: $D > 0$ gives two real roots, $D = 0$ gives one (repeated) real root, and $D < 0$ gives none.\nHere $a = 1$ and $b = -10$, so $D = 100 - 4c$.\nRequire $D < 0$: $100 - 4c < 0 \\Rightarrow c > 25$.\nCheck each choice:\n* $c = 21$: $D = 100 - 84 = 16 > 0$ — two real roots ($x = 3, 7$).\n* $c = 24$: $D = 100 - 96 = 4 > 0$ — two real roots ($x = 4, 6$).\n* $c = 25$: $D = 100 - 100 = 0$ — one repeated real root ($x = 5$).\n* $c = 26$: $D = 100 - 104 = -4 < 0$ — NO real solutions.\nOnly choice D makes the discriminant negative.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"positive discriminant\" — $c = 21$ factors as $(x - 3)(x - 7)$, so two real solutions exist.\n* Choice B: \"positive discriminant\" — $c = 24$ factors as $(x - 4)(x - 6)$, so two real solutions exist.\n* Choice C: \"discriminant zero\" — $c = 25$ gives the perfect square $(x - 5)^2$; this still has the real solution $x = 5$, not zero solutions. The boundary case is the trap.\n\n**Test Day Takeaway:** \"No real solutions\" means the discriminant $b^2 - 4ac$ is strictly negative. A discriminant of exactly $0$ still counts as one real (repeated) solution — don't lump it in with the no-solution case.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, the graphs of $y = x + 7$ and $y = x^2 + 12x + 31$ intersect at two points. If $(x, y)$ is a solution to this system, what is the greatest possible value of $x$?",
  choices: [
    // distractor: gives the lesser root instead of the greatest x
    { id: "A", text: "$-8$" },
    { id: "B", text: "$-3$" },
    // distractor: reports the y-coordinate at the greatest-x solution, not the x-value
    { id: "C", text: "$4$" },
    // distractor: sign-flips the correct root
    { id: "D", text: "$3$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Set the expressions equal: $x + 7 = x^2 + 12x + 31$, so $x^2 + 11x + 24 = 0 \\Rightarrow (x + 3)(x + 8) = 0$. The solutions are $x = -3$ and $x = -8$; the greatest is $x = -3$.\n\n**The Full Solution:**\nBecause both equations equal $y$, substitute one into the other:\n$x + 7 = x^2 + 12x + 31$.\nMove everything to one side:\n$0 = x^2 + 12x + 31 - x - 7 = x^2 + 11x + 24$.\nFactor: $x^2 + 11x + 24 = (x + 3)(x + 8) = 0$, so $x = -3$ or $x = -8$.\nThe question asks for the greatest possible value of $x$, which is $-3$.\nVerify: at $x = -3$, the line gives $y = -3 + 7 = 4$ and the parabola gives $(-3)^2 + 12(-3) + 31 = 9 - 36 + 31 = 4$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong root chosen\" — picks the smaller solution $x = -8$ instead of the greatest.\n* Choice C: \"reports the wrong coordinate\" — gives the $y$-value $4$ at the $x = -3$ intersection rather than the $x$-value the question asks for.\n* Choice D: \"sign slip\" — flips the sign of the correct root, reading the factor $(x + 3)$ as giving $x = 3$.\n\n**Test Day Takeaway:** When two curves both equal $y$, set the right-hand sides equal and collect to a single quadratic. Solve, then re-read the question to grab the correct quantity (greatest $x$, not a root you happened to find first or its $y$-value).",
  skills: ["systems-of-equations", "quadratic-equations"]
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
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "For $x > 0$, the expression $4 \\sqrt[3]{2^3 x^{12}} \\cdot \\sqrt[4]{5^4 x}$ is equivalent to $a x^{b}$, where $a$ and $b$ are constants. What is the value of $a + b$?",
  correctAnswer: "44.25",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $44.25$ (or $177/4$).**\n\n**The Fast Way (~50s):** $\\sqrt[3]{2^3 x^{12}} = 2x^4$ and $\\sqrt[4]{5^4 x} = 5x^{1/4}$. Multiply: $4 \\cdot 2x^4 \\cdot 5x^{1/4} = 40x^{17/4}$, so $a = 40$, $b = \\dfrac{17}{4}$, and $a + b = 40 + 4.25 = 44.25$.\n\n**The Full Solution:**\nSimplify each radical by writing it with fractional exponents.\nFirst radical: $\\sqrt[3]{2^3 x^{12}} = (2^3 x^{12})^{1/3} = 2^{3/3} x^{12/3} = 2x^4$.\nSecond radical: $\\sqrt[4]{5^4 x} = (5^4 x)^{1/4} = 5^{4/4} x^{1/4} = 5x^{1/4}$.\nNow multiply, collecting the constant and adding the $x$-exponents:\n$$4 \\cdot 2x^4 \\cdot 5x^{1/4} = (4 \\cdot 2 \\cdot 5)\\, x^{4 + 1/4} = 40\\, x^{17/4}.$$\nMatching $a x^{b}$ gives $a = 40$ and $b = \\dfrac{17}{4}$.\nTherefore $a + b = 40 + \\dfrac{17}{4} = \\dfrac{160 + 17}{4} = \\dfrac{177}{4} = 44.25$.\n\n**Common Mistakes to Avoid:**\n* Forgetting that the leading $4$ multiplies the two radical coefficients: $4 \\cdot 2 \\cdot 5 = 40$, not just $2 \\cdot 5 = 10$.\n* Adding the radical indices ($3 + 4$) instead of converting each radical to a fractional exponent.\n* Writing $b = 4 + 1 = 5$ by treating $\\sqrt[4]{x}$ as $x$ rather than $x^{1/4}$.\n\n**Test Day Takeaway:** Convert every radical to a fractional exponent ($\\sqrt[n]{x^m} = x^{m/n}$), multiply the constants separately, and ADD the exponents on the shared base.",
  skills: ["exponents", "radicals"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A rectangle is inscribed in a circle so that all four of its vertices lie on the circle. The length of the rectangle's diagonal is twice the length of its shorter side, and the area of the rectangle is $441\\sqrt{3}$ square units. What is the diameter of the circle?",
  correctAnswer: "42",
  explanation: "**SAT Pattern: Special Right Triangle — 30-60-90**\n\n**The correct answer is $42$.**\n\n**The Fast Way (~60s):** A diagonal that is twice the shorter side makes a 30-60-90 triangle: shorter side $s$, longer side $s\\sqrt{3}$, diagonal $2s$. Area $= s \\cdot s\\sqrt{3} = s^2\\sqrt{3} = 441\\sqrt{3} \\Rightarrow s = 21$. The diagonal is the diameter: $2s = 42$.\n\n**The Full Solution:**\nThe diagonal of a rectangle inscribed in a circle passes through the center, so the diagonal equals the diameter.\nLet the shorter side be $s$. The diagonal is given as $2s$, and the diagonal, shorter side, and longer side form a right triangle (the rectangle's corner is a right angle). With hypotenuse $2s$ and one leg $s$:\n* The side of length $s$ is half the hypotenuse, so it is opposite the $30^\\circ$ angle.\n* This is a 30-60-90 triangle, where the sides are in ratio $1 : \\sqrt{3} : 2$.\n* Therefore the longer side (opposite $60^\\circ$) is $s\\sqrt{3}$.\nThe rectangle's area is shorter side $\\times$ longer side:\n$$s \\cdot s\\sqrt{3} = s^2\\sqrt{3} = 441\\sqrt{3}.$$\nSo $s^2 = 441 \\Rightarrow s = 21$.\nThe diameter equals the diagonal $= 2s = 2(21) = 42$.\nVerify: longer side $= 21\\sqrt{3}$; check $s^2 + (s\\sqrt{3})^2 = 441 + 1{,}323 = 1{,}764 = 42^2$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting that the inscribed rectangle's diagonal IS the diameter of the circle.\n* Solving for $s$ and reporting it ($21$) instead of the diameter $2s$ ($42$).\n* Setting the area equal to $s^2$ alone and dropping the $\\sqrt{3}$ factor from the longer side.\n\n**Test Day Takeaway:** When a hypotenuse is exactly twice one leg, you have a 30-60-90 triangle ($1 : \\sqrt{3} : 2$). For a rectangle inscribed in a circle, the diagonal equals the diameter.",
  skills: ["special-right-triangles", "geometry", "circle-equations"]
}
      ]
    }
  ]
};

export default practiceTest12;
