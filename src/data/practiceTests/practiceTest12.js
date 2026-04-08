// Practice Test 12 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Contexts: camping/hiking, astronomy, event planning, cycling

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
  question: "A jar contains 60 marbles. If 40% of the marbles are blue, how many marbles are NOT blue?",
  choices: [
    { id: "A", text: "20" },
    { id: "B", text: "24" },
    { id: "C", text: "36" },
    { id: "D", text: "40" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent Complement**\n\n**Choice C is correct.**\n\n**The Fast Way (10s):** If 40% are blue, then 60% are not blue. $0.60 \\times 60 = 36$.\n\n**The Full Solution:**\nBlue marbles: $0.40 \\times 60 = 24$. Not blue: $60 - 24 = 36$.\n\n**Why the wrong answers are tempting:**\n• A: Confuses 40% with $\\frac{40}{60}$ or uses the wrong total.\n• B: Computes the number of blue marbles, not the non-blue ones.\n• D: Uses 40 as the count (confusing percent with number).\n\n**Test Day Takeaway:** If you want the complement, use $100\\% - \\text{given}\\%$, or subtract the count from the total.",
  skills: ["percents"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  question: "The mean of five numbers is 14. If four of the numbers are 10, 12, 16, and 18, what is the fifth number?",
  choices: [
    { id: "A", text: "12" },
    { id: "B", text: "14" },
    { id: "C", text: "16" },
    { id: "D", text: "10" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Find a Value from the Mean**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** Total must be $5 \\times 14 = 70$. Sum of four numbers: $10 + 12 + 16 + 18 = 56$. Fifth number: $70 - 56 = 14$.\n\n**The Full Solution:**\nMean $= \\frac{\\text{sum}}{n}$, so sum $= \\text{mean} \\times n = 14 \\times 5 = 70$.\nSum of known values: $10 + 12 + 16 + 18 = 56$.\nFifth number: $70 - 56 = 14$.\n\n**Why the wrong answers are tempting:**\n• A: Guesses the median of the four numbers.\n• C: Uses $72 - 56 = 16$ from a miscalculated total.\n• D: Picks the smallest existing number.\n\n**Test Day Takeaway:** Mean = total / count. Rearrange to find the total, then subtract the known values.",
  skills: ["statistics"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  question: "If $5x + 12 = 47$, what is the value of $x$?",
  choices: [
    { id: "A", text: "5" },
    { id: "B", text: "7" },
    { id: "C", text: "8" },
    { id: "D", text: "9" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (5s):** $5x = 47 - 12 = 35$, so $x = 7$.\n\n**The Full Solution:**\n$5x + 12 = 47$\n$5x = 35$\n$x = 7$\n\nVerification: $5(7) + 12 = 35 + 12 = 47$ ✓.\n\n**Why the wrong answers are tempting:**\n• A: Divides 47 by 5 and rounds down.\n• C: Subtracts 7 instead of 12.\n• D: Adds 12 instead of subtracting, getting $5x = 59$.\n\n**Test Day Takeaway:** Isolate the variable by undoing operations in reverse order.",
  skills: ["solving-equations"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  question: "The ratio of cats to dogs at an animal shelter is $5:3$. If there are 40 cats, how many dogs are there?",
  choices: [
    { id: "A", text: "15" },
    { id: "B", text: "20" },
    { id: "C", text: "24" },
    { id: "D", text: "30" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Ratio and Proportion**\n\n**Choice C is correct.**\n\n**The Fast Way (10s):** $\\frac{5}{3} = \\frac{40}{d}$. Cross-multiply: $5d = 120$, so $d = 24$.\n\n**The Full Solution:**\nThe ratio $5:3$ means for every 5 cats there are 3 dogs. The multiplier is $40 / 5 = 8$. So dogs $= 3 \\times 8 = 24$.\n\n**Why the wrong answers are tempting:**\n• A: Uses $40 \\times \\frac{3}{8}$ incorrectly.\n• B: Uses $40/2 = 20$, halving instead of using the ratio.\n• D: Uses $40 \\times \\frac{3}{4}$.\n\n**Test Day Takeaway:** Find the multiplier by dividing the known quantity by its ratio number, then multiply the other ratio number.",
  skills: ["ratios"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A function $h$ is defined by $h(x) = -2x + 9$. What is the value of $h(3)$?",
  choices: [
    { id: "A", text: "1" },
    { id: "B", text: "3" },
    { id: "C", text: "5" },
    { id: "D", text: "15" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (5s):** $h(3) = -2(3) + 9 = -6 + 9 = 3$.\n\n**The Full Solution:**\nSubstitute $x = 3$: $h(3) = -2(3) + 9 = -6 + 9 = 3$.\n\n**Why the wrong answers are tempting:**\n• A: Computes $-2(3) + 9 = -6 + 9$ but gets $-5 + 6 = 1$ by error.\n• C: Drops the negative: $2(3) + 9 = 15$, then realizes that is too big and guesses 5.\n• D: Computes $2(3) + 9 = 15$ (forgets the negative).\n\n**Test Day Takeaway:** Substitute carefully and watch negative signs.",
  skills: ["function-interpretation"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  question: "\n\n| | Prefers Coffee | Prefers Tea | Total |\n|---|---|---|---|\n| Morning Shift | 45 | 30 | 75 |\n| Evening Shift | 35 | 40 | 75 |\n| Total | 80 | 70 | 150 |\n\nAn employee is chosen at random. Given that the employee prefers tea, what is the probability that the employee works the evening shift?",
  choices: [
    { id: "A", text: "$\\frac{40}{75}$" },
    { id: "B", text: "$\\frac{40}{70}$" },
    { id: "C", text: "$\\frac{40}{150}$" },
    { id: "D", text: "$\\frac{30}{70}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (10s):** \"Given prefers tea\" restricts to the Tea column (total 70). Evening shift and tea = 40. Probability $= \\frac{40}{70}$.\n\n**The Full Solution:**\n$P(\\text{Evening} \\mid \\text{Tea}) = \\frac{\\text{Evening AND Tea}}{\\text{Tea total}} = \\frac{40}{70}$.\n\nSimplified: $\\frac{40}{70} = \\frac{4}{7}$.\n\n**Why the wrong answers are tempting:**\n• A: Uses the Evening Shift row total (75) as the denominator.\n• C: Uses the grand total (150) as the denominator.\n• D: Gives $P(\\text{Morning} \\mid \\text{Tea})$ instead.\n\n**Test Day Takeaway:** The word \"given\" tells you the denominator. Restrict to that group first.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  question: "If $\\frac{x + 3}{4} = \\frac{2x - 1}{6}$, what is the value of $x$?",
  choices: [
    { id: "A", text: "7" },
    { id: "B", text: "9" },
    { id: "C", text: "11" },
    { id: "D", text: "13" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Proportion with Linear Expressions**\n\n**Choice C is correct.**\n\n**The Fast Way (20s):** Cross-multiply: $6(x + 3) = 4(2x - 1)$, so $6x + 18 = 8x - 4$, giving $22 = 2x$, so $x = 11$.\n\n**The Full Solution:**\n$\\frac{x + 3}{4} = \\frac{2x - 1}{6}$\nCross-multiply: $6(x + 3) = 4(2x - 1)$\n$6x + 18 = 8x - 4$\n$18 + 4 = 8x - 6x$\n$22 = 2x$\n$x = 11$\n\nVerification: LHS $= \\frac{11 + 3}{4} = \\frac{14}{4} = \\frac{7}{2}$. RHS $= \\frac{2(11) - 1}{6} = \\frac{21}{6} = \\frac{7}{2}$. ✓\n\n**Why the wrong answers are tempting:**\n• A: Cross-multiplies incorrectly as $4(x+3) = 6(2x-1)$.\n• B: Arithmetic error when combining like terms.\n• D: Adds instead of subtracting when moving $6x$ to the right.\n\n**Test Day Takeaway:** Cross-multiply, distribute, then collect like terms.",
  skills: ["solving-equations"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  question: "A study of 12 cities comparing population density ($x$, in thousands per square mile) and average commute time ($y$, in minutes) produces the line of best fit $y = 4.2x + 15$. One city has a population density of 5 thousand per square mile and an actual average commute time of 32 minutes. What is the residual for this city?",
  correctAnswer: "-4",
  explanation: "**SAT Pattern: Residual Calculation**\n\nThe correct answer is $-4$.\n\n**Solution:**\nPredicted value at $x = 5$: $y = 4.2(5) + 15 = 21 + 15 = 36$.\nResidual = actual $-$ predicted = $32 - 36 = -4$.\nA negative residual means the actual value was below the prediction.\n\n**Verification:** $36 - 4 = 32$. ✓\n\n**Common Mistakes:**\n• Computing predicted $-$ actual ($36 - 32 = 4$) and getting a positive value.\n• Using the wrong $x$ value in the equation.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The function $f(t) = 2{,}400(0.92)^t$ models the value, in dollars, of a piece of equipment $t$ years after purchase. Which statement best describes the meaning of 0.92 in this context?",
  choices: [
    { id: "A", text: "The equipment loses 92% of its value each year." },
    { id: "B", text: "The equipment retains 92% of its value each year." },
    { id: "C", text: "The equipment was purchased for \\$0.92." },
    { id: "D", text: "The equipment loses \\$0.92 in value each year." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Interpret Exponential Base**\n\n**Choice B is correct.**\n\n**The Fast Way (10s):** The base $0.92$ means each year the value is $92\\%$ of the previous year's value. It retains 92% (loses 8%).\n\n**The Full Solution:**\nIn $f(t) = 2{,}400(0.92)^t$, the base 0.92 is the growth/decay factor. Since $0.92 < 1$, the function is decaying. Each year, the new value is $0.92$ times the old value, meaning 92% is retained and 8% is lost.\n\n**Why the wrong answers are tempting:**\n• A: Confuses retaining 92% with losing 92%.\n• C: Misidentifies the base as a dollar amount.\n• D: Treats the exponential model as a linear one.\n\n**Test Day Takeaway:** In $a \\cdot b^t$: if $b < 1$, the quantity decays; $b$ is the retention rate, and $1 - b$ is the loss rate.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A system of equations is shown below.\n\n$2x + 5y = 19$\n$3x - 2y = 0$\n\nWhat is the value of $x + y$?",
  choices: [
    { id: "A", text: "3" },
    { id: "B", text: "5" },
    { id: "C", text: "7" },
    { id: "D", text: "9" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Systems of Linear Equations**\n\n**Choice B is correct.**\n\n**The Full Solution:**\nFrom $3x - 2y = 0$: $3x = 2y$, so $x = \\frac{2y}{3}$.\nSubstitute into $2x + 5y = 19$:\n$2 \\cdot \\frac{2y}{3} + 5y = 19$\n$\\frac{4y}{3} + 5y = 19$\n$\\frac{4y + 15y}{3} = 19$\n$\\frac{19y}{3} = 19$\n$y = 3$\n\nThen $x = \\frac{2(3)}{3} = 2$.\nSo $x + y = 2 + 3 = 5$.\n\nVerification: $2(2) + 5(3) = 4 + 15 = 19$ ✓. $3(2) - 2(3) = 6 - 6 = 0$ ✓.\n\n**Why the wrong answers are tempting:**\n• A: Gives just the value of $y$.\n• C: Adds wrong values or makes an arithmetic error.\n• D: Computes $19/2$ or a similar slip.\n\n**Test Day Takeaway:** When the question asks for a combination like $x + y$, solve the system fully first.",
  skills: ["systems-of-equations"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "medium",
  question: "A triangle in the $xy$-plane has vertices at $(0, 0)$, $(8, 0)$, and $(3, 6)$. What is the area of the triangle?",
  correctAnswer: "24",
  explanation: "**SAT Pattern: Triangle Area from Coordinates**\n\nThe correct answer is $24$.\n\n**Solution:**\nThe base lies along the $x$-axis from $(0,0)$ to $(8,0)$, so the base $= 8$.\nThe height is the perpendicular distance from $(3, 6)$ to the $x$-axis, which is $6$.\n\nArea $= \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2}(8)(6) = 24$.\n\n**Verification:** Using the coordinate formula: $\\frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$\n$= \\frac{1}{2}|0(0 - 6) + 8(6 - 0) + 3(0 - 0)| = \\frac{1}{2}|0 + 48 + 0| = 24$. ✓\n\n**Common Mistakes:**\n• Forgetting the $\\frac{1}{2}$ factor: $8 \\times 6 = 48$.\n• Using the $x$-coordinate of the third vertex (3) as the height instead of the $y$-coordinate (6).",
  skills: ["area", "coordinate-geometry"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  question: "If $f(x) = 3x - 7$ and $f(a) = 20$, what is the value of $a$?",
  choices: [
    { id: "A", text: "7" },
    { id: "B", text: "8" },
    { id: "C", text: "9" },
    { id: "D", text: "10" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Solving via Function Notation**\n\n**Choice C is correct.**\n\n**The Fast Way (10s):** $3a - 7 = 20$, so $3a = 27$, giving $a = 9$.\n\n**The Full Solution:**\n$f(a) = 20$ means $3a - 7 = 20$.\n$3a = 27$\n$a = 9$\n\nVerification: $f(9) = 3(9) - 7 = 27 - 7 = 20$ ✓.\n\n**Why the wrong answers are tempting:**\n• A: Solves $3a = 21$ instead of $3a = 27$.\n• B: Uses $3a - 7 = 20 \\Rightarrow 3a = 24$.\n• D: Uses $2a = 20$.\n\n**Test Day Takeaway:** $f(a) = k$ just means replace $x$ with $a$ and solve.",
  skills: ["function-interpretation", "solving-equations"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  question: "Two similar triangles have a scale factor of $3:5$. If the area of the smaller triangle is 27 square centimeters, what is the area of the larger triangle?",
  choices: [
    { id: "A", text: "45" },
    { id: "B", text: "75" },
    { id: "C", text: "108" },
    { id: "D", text: "135" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Similar Triangles and Area Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** Area ratio = square of the linear scale factor $= (3/5)^2 = 9/25$. So $\\frac{27}{A} = \\frac{9}{25}$, giving $A = \\frac{27 \\times 25}{9} = 75$.\n\n**The Full Solution:**\nIf the linear scale factor is $k$, the area ratio is $k^2$.\nLinear ratio: $\\frac{\\text{small}}{\\text{large}} = \\frac{3}{5}$, so area ratio $= \\frac{9}{25}$.\n$\\frac{27}{\\text{large area}} = \\frac{9}{25}$\n$\\text{large area} = 27 \\times \\frac{25}{9} = 3 \\times 25 = 75$.\n\n**Why the wrong answers are tempting:**\n• A: Multiplies by $\\frac{5}{3}$ (linear scale, not area scale).\n• C: Squares only the numerator: $27 \\times 4 = 108$.\n• D: Multiplies $27 \\times 5 = 135$.\n\n**Test Day Takeaway:** Areas scale as the square of the linear factor. Perimeters scale linearly.",
  skills: ["similar-triangles", "area", "ratios"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "medium",
  question: "If $4^{x+1} = 8^x$, what is the value of $x$?",
  correctAnswer: "2",
  explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\nThe correct answer is $2$.\n\n**Solution:**\nRewrite with base 2: $4 = 2^2$ and $8 = 2^3$.\n$(2^2)^{x+1} = (2^3)^x$\n$2^{2(x+1)} = 2^{3x}$\n$2^{2x+2} = 2^{3x}$\n\nSince the bases are equal: $2x + 2 = 3x$, so $x = 2$.\n\n**Verification:** $4^{2+1} = 4^3 = 64$ and $8^2 = 64$. ✓\n\n**Common Mistakes:**\n• Writing $8 = 2^2$ instead of $2^3$.\n• Distributing incorrectly: $2(x+1) = 2x + 1$ instead of $2x + 2$.",
  skills: ["exponent-rules", "solving-equations"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  question: "The equation $3x^2 + kx + 12 = 0$ has no real solutions. Which of the following could be the value of $k$?",
  choices: [
    { id: "A", text: "$-13$" },
    { id: "B", text: "$-12$" },
    { id: "C", text: "$11$" },
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Discriminant Inequality**\n\n**Choice C is correct.**\n\n**The Full Solution:**\nNo real solutions means discriminant $< 0$:\n$k^2 - 4(3)(12) < 0$\n$k^2 - 144 < 0$\n$k^2 < 144$\n$-12 < k < 12$\n\nCheck each choice:\n• A: $k = -13$. $|-13| = 13 > 12$. Not in range.\n• B: $k = -12$. $|-12| = 12$. Not strictly less than 12 (gives zero discriminant = one solution, not none).\n• C: $k = 11$. $|11| = 11 < 12$. In range. ✓\n• D: $k = 12$. $|12| = 12$. Not strictly less than 12.\n\nVerification: $k = 11$: discriminant $= 121 - 144 = -23 < 0$. ✓\n\n**Why the wrong answers are tempting:**\n• A: $k = -13$ gives $169 - 144 = 25 > 0$ (two real solutions).\n• B: $k = -12$ gives $144 - 144 = 0$ (exactly one solution, not none).\n• D: $k = 12$ also gives discriminant $= 0$.\n\n**Test Day Takeaway:** No real solutions means $b^2 - 4ac < 0$ (strictly less than zero).",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  question: "In the $xy$-plane, the graph of $y = x^2 - 10x + 21$ crosses the $x$-axis at points $A$ and $B$. What is the length of $\\overline{AB}$?",
  choices: [
    { id: "A", text: "2" },
    { id: "B", text: "4" },
    { id: "C", text: "6" },
    { id: "D", text: "10" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice B is correct.**\n\n**The Full Solution:**\nFind the $x$-intercepts by factoring: $x^2 - 10x + 21 = 0$.\n$(x - 3)(x - 7) = 0$\n$x = 3$ or $x = 7$.\n\nThe points are $A = (3, 0)$ and $B = (7, 0)$.\nDistance $= |7 - 3| = 4$.\n\nVerification: $3^2 - 10(3) + 21 = 9 - 30 + 21 = 0$ ✓. $7^2 - 10(7) + 21 = 49 - 70 + 21 = 0$ ✓.\n\n**Why the wrong answers are tempting:**\n• A: Miscalculates one root as 5.\n• C: Uses the sum of roots ($3 + 7 = 10$) minus something.\n• D: Uses the sum of the roots instead of the difference.\n\n**Test Day Takeaway:** Factor the quadratic to find the roots, then subtract to find the distance between $x$-intercepts.",
  skills: ["quadratic-equations", "factoring", "coordinate-geometry"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  question: "If $\\sqrt{5x + 11} = x + 1$, what is the sum of all real solutions?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Radical Equation with Potential Extraneous Solution**\n\nThe correct answer is $5$.\n\n**Solution:**\nSquare both sides: $5x + 11 = (x + 1)^2 = x^2 + 2x + 1$\n$x^2 + 2x + 1 - 5x - 11 = 0$\n$x^2 - 3x - 10 = 0$\n$(x - 5)(x + 2) = 0$\n$x = 5$ or $x = -2$\n\nCheck for extraneous solutions:\n$x = 5$: $\\sqrt{25 + 11} = \\sqrt{36} = 6$ and $5 + 1 = 6$. ✓\n$x = -2$: $\\sqrt{-10 + 11} = \\sqrt{1} = 1$ and $-2 + 1 = -1$. Since $1 \\neq -1$, this is extraneous. ✗\n\nOnly $x = 5$ is valid, so the sum of all real solutions is $5$.\n\n**Common Mistakes:**\n• Including $x = -2$ without checking: sum would be $3$ (incorrect).\n• Squaring incorrectly: $(x+1)^2 = x^2 + 1$ (missing the $2x$ term).",
  skills: ["radical-expressions", "solving-equations"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  question: "The expression $\\frac{(2x^3y^{-2})^3 \\cdot (3x^{-1}y^4)^2}{12x^5y^2}$ simplifies to which of the following?",
  choices: [
    { id: "A", text: "$6x^2y^4$" },
    { id: "B", text: "$6x^{-2}y^4$" },
    { id: "C", text: "$6y^2$" },
    { id: "D", text: "$6x^2$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Complex Exponent Simplification**\n\n**Choice D is correct.**\n\n**The Full Solution:**\n$(2x^3y^{-2})^3 = 2^3 x^{9} y^{-6} = 8x^9y^{-6}$\n$(3x^{-1}y^4)^2 = 9x^{-2}y^8$\n\nNumerator product: $8x^9y^{-6} \\cdot 9x^{-2}y^8 = 72x^{9+(-2)}y^{-6+8} = 72x^7y^2$.\n\nDivide by $12x^5y^2$:\n$\\frac{72x^7y^2}{12x^5y^2} = 6x^{7-5}y^{2-2} = 6x^2$.\n\n**Why the wrong answers are tempting:**\n• A: Miscalculates the $y$ exponents, keeping $y^4$ instead of $y^0$.\n• B: Subtracts $x$ exponents as $7 - 9$ instead of $7 - 5$.\n• C: Gets the coefficient and $y$ exponent wrong.\n\n**Test Day Takeaway:** Simplify one piece at a time: apply power-of-a-product, then combine with multiplication, then divide. Track each variable separately.",
  skills: ["exponent-rules"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  question: "The quadratic function $g(x) = ax^2 + bx + c$ has roots at $x = -1$ and $x = 5$, and its maximum value is 18. What is the value of $a$?",
  choices: [
    { id: "A", text: "$-3$" },
    { id: "B", text: "$-2$" },
    { id: "C", text: "$2$" },
    { id: "D", text: "$3$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Quadratic from Roots and Vertex Constraint**\n\n**Choice B is correct.**\n\n**The Full Solution:**\nRoots at $x = -1$ and $x = 5$ mean $g(x) = a(x + 1)(x - 5)$.\nThe vertex $x$-coordinate is the midpoint of the roots: $\\frac{-1 + 5}{2} = 2$.\n\nAt the vertex: $g(2) = a(2 + 1)(2 - 5) = a(3)(-3) = -9a$.\nSince the maximum value is 18: $-9a = 18$, so $a = -2$.\n\nNote: $a < 0$ confirms the parabola opens downward, so a maximum exists. ✓\n\nVerification: $g(x) = -2(x + 1)(x - 5) = -2(x^2 - 4x - 5) = -2x^2 + 8x + 10$.\n$g(2) = -8 + 16 + 10 = 18$ ✓. $g(-1) = -2 + (-8) + 10 = 0$ ✓. $g(5) = -50 + 40 + 10 = 0$ ✓.\n\n**Why the wrong answers are tempting:**\n• A: Uses vertex at $x = 3$ instead of $x = 2$.\n• C: Positive $a$ would give a minimum, not a maximum.\n• D: Same issue as C, plus miscalculation.\n\n**Test Day Takeaway:** From roots, write factored form. The vertex is at the midpoint of the roots. Plug in to find $a$.",
  skills: ["quadratic-equations", "vertex-form"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  question: "In the $xy$-plane, the circle $x^2 + y^2 - 6x + 4y = 12$ has center $(h, k)$ and radius $r$. What is the value of $h + k + r$?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Circle Equation — Completing the Square**\n\nThe correct answer is $6$.\n\n**Solution:**\nGroup and complete the square:\n$(x^2 - 6x) + (y^2 + 4y) = 12$\n$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$\n$(x - 3)^2 + (y + 2)^2 = 25$\n\nCenter: $(h, k) = (3, -2)$, radius $r = 5$.\n$h + k + r = 3 + (-2) + 5 = 6$.\n\n**Verification:** $(x - 3)^2 + (y + 2)^2 = 25$. Expand: $x^2 - 6x + 9 + y^2 + 4y + 4 = 25$, so $x^2 + y^2 - 6x + 4y = 25 - 13 = 12$ ✓.\n\n**Common Mistakes:**\n• Forgetting to add the completing-the-square constants to both sides.\n• Writing the center as $(3, 2)$ instead of $(3, -2)$ from $(y + 2)^2$.\n• Using $r = 25$ (the $r^2$ value) instead of $r = 5$.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  question: "For what value of $m$ does the system below have infinitely many solutions?\n\n$6x - 9y = 12$\n$-2x + 3y = m$",
  choices: [
    { id: "A", text: "$-6$" },
    { id: "B", text: "$-4$" },
    { id: "C", text: "$4$" },
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Infinitely Many Solutions (Dependent System)**\n\n**Choice B is correct.**\n\n**The Full Solution:**\nFor infinitely many solutions, the two equations must be proportional (one is a multiple of the other).\n\nCompare: $6x - 9y = 12$ and $-2x + 3y = m$.\nMultiply the second equation by $-3$: $6x - 9y = -3m$.\nFor this to equal the first equation: $-3m = 12$, so $m = -4$.\n\nVerification: With $m = -4$: $-2x + 3y = -4$, multiply by $-3$: $6x - 9y = 12$ ✓. Same line.\n\n**Why the wrong answers are tempting:**\n• A: Uses multiplier of $-2$ instead of $-3$.\n• C: Drops the negative sign: $3m = 12$.\n• D: Uses a multiplier of 2 from comparing individual terms incorrectly.\n\n**Test Day Takeaway:** Infinitely many solutions means the equations represent the same line. Make one equation a constant multiple of the other.",
  skills: ["systems-of-equations", "linear-functions"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  question: "In the $xy$-plane, a parabola with equation $y = a(x - h)^2 + k$, where $a < 0$, has its vertex in the first quadrant and passes through the origin and the point $(8, 0)$. If the maximum value of $y$ is 48, what is the value of $h + k$?",
  choices: [
    { id: "A", text: "48" },
    { id: "B", text: "52" },
    { id: "C", text: "56" },
    { id: "D", text: "64" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex Form with Root and Maximum Constraints**\n\n**Choice B is correct.**\n\n**The Full Solution:**\nThe parabola passes through $(0, 0)$ and $(8, 0)$, so its $x$-intercepts are $0$ and $8$.\nThe vertex $x$-coordinate is the midpoint: $h = \\frac{0 + 8}{2} = 4$.\nSince $a < 0$, the parabola opens downward, so the vertex gives the maximum. Thus $k = 48$.\n\nNow find $a$: at $x = 0$, $y = 0$:\n$0 = a(0 - 4)^2 + 48 = 16a + 48$\n$a = -3$.\n\nSo $h + k = 4 + 48 = 52$.\n\nVerification: $y = -3(x-4)^2 + 48$.\nAt $x = 0$: $-3(16) + 48 = -48 + 48 = 0$ ✓.\nAt $x = 8$: $-3(16) + 48 = 0$ ✓.\nMaximum at $x = 4$: $y = 48$ ✓.\n\n**Why the wrong answers are tempting:**\n• A: Gives just $k = 48$, forgetting to add $h$.\n• C: Uses $h = 8$ (an endpoint instead of the midpoint).\n• D: Adds $16 + 48 = 64$, confusing $h^2$ with $h$.\n\n**Test Day Takeaway:** The vertex of a parabola with roots $r_1$ and $r_2$ is at $x = \\frac{r_1 + r_2}{2}$. The $k$ value in vertex form is the max or min.",
  skills: ["vertex-form", "quadratic-equations", "coordinate-geometry"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
{
  id: 1, type: "multiple-choice", difficulty: "easy",
  question: "If $3x + 7 = 22$, what is the value of $6x + 14$?",
  choices: [{ id: "A", text: "30" }, { id: "B", text: "37" }, { id: "C", text: "44" }, { id: "D", text: "15" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Scaled Expression Shortcut**\n\n**Choice C is correct.**\n\n**The Fast Way:** $6x + 14 = 2(3x + 7) = 2(22) = 44$. No need to solve for $x$.\n\n**The Full Solution:**\nNotice that $6x + 14 = 2(3x + 7)$. Since $3x + 7 = 22$, we have $6x + 14 = 2 \\times 22 = 44$.\n\nAlternatively: $3x = 15$, $x = 5$, so $6(5) + 14 = 44$.\n\n**Why the wrong answers are tempting:**\n• A: Computes $6(5) = 30$ but forgets to add 14.\n• B: Adds 15 to 22 by mistake.\n• D: Solves for $x = 5$ and stops.\n\n**Test Day Takeaway:** Before solving for $x$, check if the target expression is a multiple of the given equation.",
  skills: ["solving-equations"]
},
{
  id: 2, type: "multiple-choice", difficulty: "easy",
  question: "A data set has the values $\\{14, 18, 18, 22, 23, 25\\}$. What is the median of this data set?",
  choices: [{ id: "A", text: "18" }, { id: "B", text: "20" }, { id: "C", text: "22" }, { id: "D", text: "21" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Median of Even-Sized Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way:** 6 values, so the median is the average of the 3rd and 4th values: $\\frac{18 + 22}{2} = 20$.\n\n**The Full Solution:**\nThe data is already sorted: $14, 18, 18, 22, 23, 25$. With 6 values, the median is the average of the 3rd and 4th values: $\\frac{18 + 22}{2} = \\frac{40}{2} = 20$.\n\n**Why the wrong answers are tempting:**\n• A: Picks the 3rd value without averaging with the 4th.\n• C: Picks the 4th value without averaging with the 3rd.\n• D: A plausible but incorrect average.\n\n**Test Day Takeaway:** For an even number of data points, the median is the average of the two middle values.",
  skills: ["statistics"]
},
{
  id: 3, type: "multiple-choice", difficulty: "easy",
  question: "Which of the following is equivalent to $\\sqrt{50}$?",
  choices: [{ id: "A", text: "$25\\sqrt{2}$" }, { id: "B", text: "$5\\sqrt{2}$" }, { id: "C", text: "$2\\sqrt{5}$" }, { id: "D", text: "$10\\sqrt{5}$" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Simplifying Radicals**\n\n**Choice B is correct.**\n\n**The Fast Way:** $\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$.\n\n**The Full Solution:**\nFactor 50 to find a perfect square: $50 = 25 \\times 2$.\n$\\sqrt{50} = \\sqrt{25 \\times 2} = \\sqrt{25} \\times \\sqrt{2} = 5\\sqrt{2}$.\n\n**Why the wrong answers are tempting:**\n• A: Confuses $\\sqrt{25}$ with 25.\n• C: Uses $\\sqrt{50} = \\sqrt{2 \\times 25}$ but takes the wrong square root.\n• D: Multiplies instead of taking the square root.\n\n**Test Day Takeaway:** To simplify $\\sqrt{n}$, find the largest perfect square that divides $n$.",
  skills: ["radical-expressions"]
},
{
  id: 4, type: "multiple-choice", difficulty: "easy",
  question: "A linear function $g$ satisfies $g(0) = 8$ and $g(4) = 0$. What is $g(6)$?",
  choices: [{ id: "A", text: "-4" }, { id: "B", text: "-2" }, { id: "C", text: "2" }, { id: "D", text: "-6" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Linear Function from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way:** Slope $= \\frac{0-8}{4-0} = -2$. Equation: $g(x) = -2x + 8$. $g(6) = -12 + 8 = -4$.\n\n**The Full Solution:**\nFrom the two points $(0, 8)$ and $(4, 0)$:\nSlope $= \\frac{0 - 8}{4 - 0} = \\frac{-8}{4} = -2$.\n$y$-intercept is 8 (from $g(0) = 8$).\n$g(x) = -2x + 8$.\n$g(6) = -2(6) + 8 = -12 + 8 = -4$.\n\n**Why the wrong answers are tempting:**\n• B: Uses slope $-1$ instead of $-2$.\n• C: Adds $2 \\times 6 = 12$ to something incorrectly.\n• D: Uses slope $-2$ but subtracts from 6 instead of using the equation.\n\n**Test Day Takeaway:** Given two points on a linear function, find the slope first, then write the equation.",
  skills: ["linear-functions"]
},
{
  id: 5, type: "multiple-choice", difficulty: "easy",
  question: "A bag contains 5 red, 3 blue, and 2 green marbles. If one marble is drawn at random, what is the probability it is NOT blue?",
  choices: [{ id: "A", text: "$\\frac{3}{10}$" }, { id: "B", text: "$\\frac{7}{10}$" }, { id: "C", text: "$\\frac{1}{3}$" }, { id: "D", text: "$\\frac{7}{7}$" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Complementary Probability**\n\n**Choice B is correct.**\n\n**The Fast Way:** Total = 10 marbles. Not blue = $10 - 3 = 7$. Probability = $\\frac{7}{10}$.\n\n**The Full Solution:**\nTotal marbles: $5 + 3 + 2 = 10$.\n$P(\\text{not blue}) = 1 - P(\\text{blue}) = 1 - \\frac{3}{10} = \\frac{7}{10}$.\nOr directly: $P(\\text{not blue}) = \\frac{5 + 2}{10} = \\frac{7}{10}$.\n\n**Why the wrong answers are tempting:**\n• A: This is the probability of drawing a blue marble.\n• C: Divides blue marbles by non-blue marbles ($\\frac{3}{7}$ simplified wrong).\n• D: Divides non-blue by non-blue.\n\n**Test Day Takeaway:** $P(\\text{not } A) = 1 - P(A)$. Or count favorable outcomes directly.",
  skills: ["probability"]
},
{
  id: 6, type: "multiple-choice", difficulty: "medium",
  question: "If $f(x) = 2x^2 - kx + 8$ and $f(3) = 5$, what is the value of $k$?",
  choices: [{ id: "A", text: "3" }, { id: "B", text: "7" }, { id: "C", text: "13" }, { id: "D", text: "21" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Evaluation to Find Parameter**\n\n**Choice B is correct.**\n\n**The Fast Way:** $f(3) = 18 - 3k + 8 = 26 - 3k = 5$. So $3k = 21$, giving $k = 7$.\n\n**The Full Solution:**\n$f(3) = 2(3)^2 - k(3) + 8 = 18 - 3k + 8 = 26 - 3k$.\nSet equal to 5: $26 - 3k = 5$, so $3k = 21$, thus $k = 7$.\n\n**Why the wrong answers are tempting:**\n• A: Divides 21 by 7 instead of 3.\n• C: Forgets the constant 8 in the function.\n• D: This is $3k$, not $k$.\n\n**Test Day Takeaway:** Substitute the given input/output pair and solve for the unknown parameter.",
  skills: ["function-interpretation", "solving-equations"]
},
{
  id: 7, type: "multiple-choice", difficulty: "medium",
  question: "A line in the $xy$-plane passes through the point $(2, -1)$ and is perpendicular to the line $4x - 3y = 12$. What is the $y$-intercept of this line?",
  choices: [{ id: "A", text: "$\\frac{1}{2}$" }, { id: "B", text: "$-\\frac{1}{2}$" }, { id: "C", text: "$\\frac{7}{4}$" }, { id: "D", text: "$-\\frac{7}{4}$" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Perpendicular Line Through a Point**\n\n**Choice A is correct.**\n\n**The Fast Way:** Slope of $4x - 3y = 12$ is $\\frac{4}{3}$. Perpendicular slope: $-\\frac{3}{4}$. Line: $y + 1 = -\\frac{3}{4}(x - 2)$, so $y = -\\frac{3}{4}x + \\frac{3}{2} - 1 = -\\frac{3}{4}x + \\frac{1}{2}$. The $y$-intercept is $\\frac{1}{2}$.\n\n**The Full Solution:**\nRewrite $4x - 3y = 12$ in slope-intercept form: $y = \\frac{4}{3}x - 4$. Slope $= \\frac{4}{3}$.\nPerpendicular slope $= -\\frac{3}{4}$.\nUsing point $(2, -1)$:\n$y - (-1) = -\\frac{3}{4}(x - 2)$\n$y + 1 = -\\frac{3}{4}x + \\frac{3}{2}$\n$y = -\\frac{3}{4}x + \\frac{1}{2}$\nThe $y$-intercept is $\\frac{1}{2}$.\n\n**Why the wrong answers are tempting:**\n• B: Sign error in the calculation.\n• C: Uses the original slope instead of the perpendicular one.\n• D: Multiple sign and arithmetic errors.\n\n**Test Day Takeaway:** For perpendicular lines: flip the fraction and change the sign of the slope.",
  skills: ["slope", "coordinate-geometry"]
},
{
  id: 8, type: "fill-in", difficulty: "medium",
  question: "If $x^2 + y^2 = 100$ and $xy = 36$, what is the value of $(x + y)^2$?",
  correctAnswer: "172",
  explanation: "**SAT Pattern: Algebraic Identity Expansion**\n\n**The correct answer is 172.**\n\n**The Fast Way:** $(x+y)^2 = x^2 + 2xy + y^2 = (x^2 + y^2) + 2xy = 100 + 2(36) = 172$.\n\n**The Full Solution:**\nExpand $(x+y)^2 = x^2 + 2xy + y^2$.\nWe know $x^2 + y^2 = 100$ and $xy = 36$.\n$(x+y)^2 = 100 + 2(36) = 100 + 72 = 172$.\n\n**Test Day Takeaway:** Memorize the identity $(x+y)^2 = x^2 + 2xy + y^2$. You don't need to find individual values of $x$ and $y$.",
  skills: ["polynomial-operations", "solving-equations"]
},
{
  id: 9, type: "multiple-choice", difficulty: "medium",
  question: "The table shows the distribution of students by grade and club membership.\n\n| | In a Club | Not in a Club | Total |\n|---|---|---|---|\n| 9th Grade | 45 | 30 | 75 |\n| 10th Grade | 60 | 40 | 100 |\n| 11th Grade | 55 | 20 | 75 |\n| Total | 160 | 90 | 250 |\n\nA student is randomly selected from those NOT in a club. What is the probability that the student is in 11th grade?",
  choices: [{ id: "A", text: "$\\frac{20}{75}$" }, { id: "B", text: "$\\frac{20}{90}$" }, { id: "C", text: "$\\frac{20}{250}$" }, { id: "D", text: "$\\frac{55}{160}$" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Conditional Probability from Table**\n\n**Choice B is correct.**\n\n**The Fast Way:** Given: not in a club (total 90). Of those, 20 are 11th graders. Probability = $\\frac{20}{90}$.\n\n**The Full Solution:**\n$P(\\text{11th grade} | \\text{not in club}) = \\frac{\\text{11th grade AND not in club}}{\\text{not in club}} = \\frac{20}{90}$.\n\n**Why the wrong answers are tempting:**\n• A: Divides by total 11th graders (75) instead of total not-in-club (90).\n• C: Divides by all students (250).\n• D: Uses club members instead of non-club members.\n\n**Test Day Takeaway:** In conditional probability, the denominator is the total of the \"given\" condition. Read the condition carefully.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 10, type: "multiple-choice", difficulty: "medium",
  question: "The equation $\\frac{a}{x-2} = \\frac{3x}{x-2} + 5$ has no solution. What is the value of $a$?",
  choices: [{ id: "A", text: "6" }, { id: "B", text: "11" }, { id: "C", text: "16" }, { id: "D", text: "-4" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Rational Equation with No Solution**\n\n**Choice A is correct.**\n\n**The Fast Way:** Multiply both sides by $(x-2)$: $a = 3x + 5(x-2) = 8x - 10$, giving $x = \\frac{a+10}{8}$. For no solution, this must equal the excluded value $x = 2$: $a = 8(2) - 10 = 6$.\n\n**The Full Solution:**\nThe excluded value is $x = 2$ (makes the denominator zero).\nMultiply both sides by $(x - 2)$:\n$a = 3x + 5(x - 2) = 8x - 10$\n$x = \\frac{a + 10}{8}$\n\nThe equation has no solution when the only algebraic solution is the excluded value $x = 2$:\n$\\frac{a + 10}{8} = 2 \\Rightarrow a + 10 = 16 \\Rightarrow a = 6$.\n\nVerify: with $a = 6$, the equation becomes $\\frac{6}{x-2} = \\frac{3x}{x-2} + 5$, which simplifies to $x = 2$, but $x = 2$ is excluded. No solution. ✓\n\n**Why the wrong answers are tempting:**\n• B: Computes $3(2) + 5 = 11$, substituting into the wrong expression.\n• C: Computes $a + 10 = 16$ but forgets to subtract 10.\n• D: Sign error.\n\n**Test Day Takeaway:** A rational equation has no solution when the algebra produces only excluded values. Find the excluded value, plug it back, and solve for the parameter.",
  skills: ["solving-equations"]
},
{
  id: 11, type: "fill-in", difficulty: "medium",
  question: "The polynomial $p(x) = x^3 - 4x^2 - 7x + 10$ has $x = 1$ as a root. If the other two roots are $r$ and $s$, what is the value of $r \\cdot s$?",
  correctAnswer: "-10",
  explanation: "**SAT Pattern: Polynomial Root Relationships**\n\n**The correct answer is -10.**\n\n**The Fast Way:** Since $x = 1$ is a root, divide: $p(x) = (x-1)(x^2 - 3x - 10) = (x-1)(x-5)(x+2)$. The other roots are 5 and $-2$. Product: $5 \\times (-2) = -10$.\n\n**The Full Solution:**\nDivide $x^3 - 4x^2 - 7x + 10$ by $(x - 1)$ using synthetic division:\n$1 | 1 \\quad -4 \\quad -7 \\quad 10$\n$\\quad | \\quad 1 \\quad -3 \\quad -10$\n$\\quad 1 \\quad -3 \\quad -10 \\quad 0$\n\nSo $p(x) = (x-1)(x^2 - 3x - 10)$.\nFactor: $x^2 - 3x - 10 = (x-5)(x+2)$.\nRoots: $r = 5$, $s = -2$.\n$r \\cdot s = 5 \\times (-2) = -10$.\n\nAlternatively, by Vieta's: $r \\cdot s$ equals the constant term of the quotient, which is $-10$.\n\n**Test Day Takeaway:** When one root is given, use synthetic division to find the remaining quadratic, then factor or use Vieta's.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 12, type: "multiple-choice", difficulty: "medium",
  question: "A sample of 600 adults found that 42% preferred working remotely. If the margin of error is $\\pm 4\\%$ at a 95% confidence level, which of the following sample sizes would produce a smaller margin of error at the same confidence level?",
  choices: [{ id: "A", text: "150" }, { id: "B", text: "300" }, { id: "C", text: "600" }, { id: "D", text: "2400" }],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Sample Size and Margin of Error Relationship**\n\n**Choice D is correct.**\n\n**The Fast Way:** Larger sample size = smaller margin of error. Only 2400 > 600, so only D produces a smaller margin of error.\n\n**The Full Solution:**\nThe margin of error is inversely proportional to $\\sqrt{n}$. To decrease the margin of error, we need to increase the sample size. Of the choices, only $n = 2400$ is larger than the original $n = 600$.\n\nIn fact, $n = 2400 = 4 \\times 600$, so the margin of error would be halved: $\\frac{4\\%}{\\sqrt{4}} = 2\\%$.\n\n**Why the wrong answers are tempting:**\n• A: $n = 150$ is smaller, which would increase the margin of error.\n• B: $n = 300$ is smaller, which would increase the margin of error.\n• C: Same sample size gives the same margin of error.\n\n**Test Day Takeaway:** To halve the margin of error, quadruple the sample size. Margin of error $\\propto \\frac{1}{\\sqrt{n}}$.",
  skills: ["margin-of-error", "statistics"]
},
{
  id: 13, type: "multiple-choice", difficulty: "medium",
  question: "The graph of $y = a(x - h)^2 + k$ has vertex $(3, -2)$ and passes through $(0, 7)$. What is the value of $a$?",
  choices: [{ id: "A", text: "1" }, { id: "B", text: "-1" }, { id: "C", text: "3" }, { id: "D", text: "$\\frac{1}{3}$" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Vertex Form — Finding the Coefficient**\n\n**Choice A is correct.**\n\n**The Fast Way:** Vertex form: $y = a(x-3)^2 - 2$. Plug in $(0, 7)$: $7 = a(9) - 2$, so $9a = 9$ and $a = 1$.\n\n**The Full Solution:**\nWith vertex $(3, -2)$: $y = a(x-3)^2 - 2$.\nSubstitute $(0, 7)$:\n$7 = a(0-3)^2 - 2$\n$7 = 9a - 2$\n$9 = 9a$\n$a = 1$\n\n**Why the wrong answers are tempting:**\n• B: $a = -1$ would give $y = -(9) - 2 = -11 \neq 7$.\n• C: Divides 9 by 3 instead of 9.\n• D: Inverts the calculation.\n\n**Test Day Takeaway:** Vertex form makes it easy to find $a$ — just plug in any other point on the graph.",
  skills: ["vertex-form", "quadratic-equations"]
},
{
  id: 14, type: "fill-in", difficulty: "medium",
  question: "If $\\frac{3^{2x}}{3^5} = 3^7$, what is the value of $x$?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Exponent Division Rule**\n\n**The correct answer is 6.**\n\n**The Fast Way:** $\\frac{3^{2x}}{3^5} = 3^{2x-5} = 3^7$. So $2x - 5 = 7$, giving $2x = 12$ and $x = 6$.\n\n**The Full Solution:**\nUsing the rule $\\frac{a^m}{a^n} = a^{m-n}$:\n$3^{2x-5} = 3^7$\nSince the bases are equal: $2x - 5 = 7$\n$2x = 12$\n$x = 6$\n\nVerify: $\\frac{3^{12}}{3^5} = 3^7$ ✓.\n\n**Test Day Takeaway:** When dividing powers with the same base, subtract exponents. Then match exponents to solve.",
  skills: ["exponent-rules", "solving-equations"]
},
{
  id: 15, type: "multiple-choice", difficulty: "hard",
  question: "The equation $-3x^2 + bx - 48 = 0$ has no real solutions. What is the greatest integer value of $b$?",
  choices: [{ id: "A", text: "23" }, { id: "B", text: "24" }, { id: "C", text: "25" }, { id: "D", text: "12" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Discriminant — Greatest Value for No Real Solutions**\n\n**Choice A is correct.**\n\n**The Fast Way:** Discriminant $< 0$: $b^2 - 4(-3)(-48) < 0$, so $b^2 < 576$, meaning $|b| < 24$. Greatest integer: 23.\n\n**The Full Solution:**\nFor $-3x^2 + bx - 48 = 0$, the discriminant is:\n$\\Delta = b^2 - 4(-3)(-48) = b^2 - 576$\nFor no real solutions: $\\Delta < 0$\n$b^2 - 576 < 0$\n$b^2 < 576$\n$|b| < 24$\n$-24 < b < 24$\nThe greatest integer value of $b$ is 23.\n\n**Why the wrong answers are tempting:**\n• B: At $b = 24$, $\\Delta = 0$ — exactly one solution, not none.\n• C: At $b = 25$, $\\Delta = 49 > 0$ — two real solutions.\n• D: Valid but not the greatest.\n\n**Test Day Takeaway:** For \"no real solutions,\" the discriminant must be strictly negative. The boundary value gives exactly one solution.",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 16, type: "multiple-choice", difficulty: "hard",
  question: "A radioactive substance has a half-life of 18 months. The amount remaining is modeled by $A(t) = 5000(0.5)^{t/18}$, where $t$ is in months. Which of the following is closest to the percent decrease per month?",
  choices: [{ id: "A", text: "2.78%" }, { id: "B", text: "3.78%" }, { id: "C", text: "5.56%" }, { id: "D", text: "50%" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Converting Exponential Half-Life to Monthly Rate**\n\n**Choice B is correct.**\n\n**The Fast Way:** Monthly factor $= (0.5)^{1/18} = 0.5^{0.0556} \\approx 0.9622$. Monthly decrease $= 1 - 0.9622 = 0.0378 = 3.78\\%$.\n\n**The Full Solution:**\nRewrite $A(t) = 5000(0.5)^{t/18} = 5000\\left((0.5)^{1/18}\\right)^t$.\nCompute $(0.5)^{1/18}$: Using $\\ln(0.5) = -0.6931$:\n$(0.5)^{1/18} = e^{-0.6931/18} = e^{-0.03851} \\approx 0.9622$.\nMonthly decrease: $1 - 0.9622 = 0.0378 = 3.78\\%$.\n\n**Why the wrong answers are tempting:**\n• A: Computes $\\frac{50\\%}{18} \\approx 2.78\\%$ — but exponential decay doesn't divide linearly.\n• C: Doubles 2.78% incorrectly.\n• D: This is the decrease per 18 months, not per month.\n\n**Test Day Takeaway:** To find the per-period rate from a half-life, compute $(0.5)^{1/n}$ where $n$ is the number of periods in one half-life. Don't just divide 50% by $n$.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 17, type: "fill-in", difficulty: "hard",
  question: "In the $xy$-plane, a circle has center $(4, -1)$ and is tangent to the line $y = 2$. A point on the circle has coordinates $(4, k)$ where $k < -1$. What is the value of $k$?",
  correctAnswer: "-4",
  explanation: "**SAT Pattern: Circle Tangent to a Line — Finding Radius**\n\n**The correct answer is -4.**\n\n**The Fast Way:** The circle is tangent to $y = 2$, so the radius is the distance from center $(4, -1)$ to the line $y = 2$: $|2 - (-1)| = 3$. The point $(4, k)$ is directly below the center (same $x$-coordinate), so $k = -1 - 3 = -4$.\n\n**The Full Solution:**\nThe line $y = 2$ is horizontal. The distance from center $(4, -1)$ to this line is $|2 - (-1)| = 3$. Since the circle is tangent to the line, the radius is 3.\n\nThe circle equation is $(x-4)^2 + (y+1)^2 = 9$.\nFor a point $(4, k)$ on the circle: $(4-4)^2 + (k+1)^2 = 9$, so $(k+1)^2 = 9$, giving $k + 1 = \\pm 3$.\n$k = 2$ or $k = -4$. Since $k < -1$, $k = -4$.\n\n**Test Day Takeaway:** A circle tangent to a horizontal line has its radius equal to the vertical distance from center to line. Points on the circle along the vertical through the center are at the top and bottom.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 18, type: "multiple-choice", difficulty: "hard",
  question: "A company's profit $P$, in thousands of dollars, is modeled by $P(x) = -2x^2 + 28x - 80$, where $x$ is the number of units produced (in thousands). For what values of $x$ is the profit positive?",
  choices: [{ id: "A", text: "$x < 4$ or $x > 10$" }, { id: "B", text: "$4 < x < 10$" }, { id: "C", text: "$x < -10$ or $x > -4$" }, { id: "D", text: "$0 < x < 14$" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**Choice B is correct.**\n\n**The Fast Way:** Set $P(x) > 0$: $-2x^2 + 28x - 80 > 0$, or $x^2 - 14x + 40 < 0$ (dividing by $-2$ flips the inequality). Factor: $(x-4)(x-10) < 0$. This holds for $4 < x < 10$.\n\n**The Full Solution:**\nSolve $-2x^2 + 28x - 80 = 0$:\n$x^2 - 14x + 40 = 0$\n$(x - 4)(x - 10) = 0$\n$x = 4$ or $x = 10$\n\nSince the leading coefficient of $P(x)$ is negative (parabola opens downward), $P(x) > 0$ between the roots: $4 < x < 10$.\n\nCheck: $P(7) = -2(49) + 196 - 80 = -98 + 196 - 80 = 18 > 0$ ✓.\n\n**Why the wrong answers are tempting:**\n• A: This is where $P(x) < 0$ (outside the roots for a downward parabola).\n• C: Uses wrong signs for the roots.\n• D: Not related to the actual zeros of the function.\n\n**Test Day Takeaway:** For a downward-opening parabola, the function is positive between the roots and negative outside them.",
  skills: ["quadratic-equations", "word-problems"]
},
{
  id: 19, type: "multiple-choice", difficulty: "hard",
  question: "In a right triangle, one acute angle is $\\theta$. If $\\sin \\theta = \\frac{a}{c}$ and $\\cos \\theta = \\frac{b}{c}$, which of the following must equal $\\frac{1}{c^2}$?",
  choices: [{ id: "A", text: "$\\sin^2 \\theta + \\cos^2 \\theta$" }, { id: "B", text: "$\\frac{\\sin^2 \\theta}{a^2} + \\frac{\\cos^2 \\theta}{b^2}$" }, { id: "C", text: "$\\frac{1}{a^2} + \\frac{1}{b^2}$" }, { id: "D", text: "$\\frac{\\sin^2 \\theta + \\cos^2 \\theta}{a^2 + b^2}$" }],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Trig Identity Manipulation**\n\n**Choice D is correct.**\n\n**The Fast Way:** $\\sin^2\\theta + \\cos^2\\theta = 1$ and $a^2 + b^2 = c^2$ (Pythagorean theorem). So $\\frac{\\sin^2\\theta + \\cos^2\\theta}{a^2 + b^2} = \\frac{1}{c^2}$.\n\n**The Full Solution:**\nWe know:\n1. $\\sin^2\\theta + \\cos^2\\theta = 1$ (Pythagorean identity)\n2. $a^2 + b^2 = c^2$ (Pythagorean theorem, since $a$ and $b$ are legs, $c$ is hypotenuse)\n\nCheck D: $\\frac{\\sin^2\\theta + \\cos^2\\theta}{a^2 + b^2} = \\frac{1}{c^2}$ ✓.\n\nCheck others:\n• A: $= 1 \neq \\frac{1}{c^2}$ (unless $c = 1$).\n• B: $\\frac{a^2/c^2}{a^2} + \\frac{b^2/c^2}{b^2} = \\frac{1}{c^2} + \\frac{1}{c^2} = \\frac{2}{c^2} \neq \\frac{1}{c^2}$.\n• C: $\\frac{1}{a^2} + \\frac{1}{b^2} = \\frac{a^2+b^2}{a^2 b^2} = \\frac{c^2}{a^2 b^2} \neq \\frac{1}{c^2}$.\n\n**Why the wrong answers are tempting:**\n• A: The Pythagorean identity equals 1, which is $\\frac{c^2}{c^2}$, not $\\frac{1}{c^2}$.\n• B: Close — each term is $\\frac{1}{c^2}$, so the sum is $\\frac{2}{c^2}$.\n• C: A plausible combination that doesn't simplify correctly.\n\n**Test Day Takeaway:** Combine the Pythagorean identity ($\\sin^2 + \\cos^2 = 1$) with the Pythagorean theorem ($a^2 + b^2 = c^2$) for powerful simplifications.",
  skills: ["trigonometry"]
},
{
  id: 20, type: "fill-in", difficulty: "hard",
  question: "For the system of equations below, what is the value of $a + b + c$?\n\n$a + 2b + 3c = 16$\n$2a + b - c = 5$\n$a - b + 2c = 7$",
  correctAnswer: "8",
  explanation: "**SAT Pattern: System of Three Equations — Strategic Combination**\n\n**The correct answer is 8.**\n\n**The Fast Way:** Add equations 2 and 3: $3a + c = 12$. Subtract equation 3 from equation 1: $3b + c = 9$. Now solve the reduced system.\n\n**The Full Solution:**\nAdd Eq2 and Eq3: $(2a+b-c) + (a-b+2c) = 5 + 7$, giving $3a + c = 12$ ... (i)\nSubtract Eq3 from Eq1: $(a+2b+3c) - (a-b+2c) = 16 - 7$, giving $3b + c = 9$ ... (ii)\n\nFrom (ii): $c = 9 - 3b$.\nSubstitute into (i): $3a + 9 - 3b = 12$, so $a = b + 1$.\nSubstitute both into Eq2: $2(b+1) + b - (9-3b) = 5$\n$2b + 2 + b - 9 + 3b = 5$\n$6b - 7 = 5$\n$b = 2$\n\nThen $a = 3$ and $c = 3$.\n$a + b + c = 3 + 2 + 3 = 8$.\n\n**Test Day Takeaway:** For 3-variable systems, eliminate variables by adding or subtracting pairs of equations. Look for pairs that cancel a variable cleanly.",
  skills: ["systems-of-equations"]
},
{
  id: 21, type: "multiple-choice", difficulty: "hard",
  question: "A rectangular prism has a square base with side length $s$ and height $h$. The total surface area is 150 square inches, and the volume is 125 cubic inches. What is the value of $s$?",
  choices: [{ id: "A", text: "5" }, { id: "B", text: "10" }, { id: "C", text: "$5\\sqrt{2}$" }, { id: "D", text: "25" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Surface Area and Volume System**\n\n**Choice A is correct.**\n\n**The Fast Way:** Try $s = 5$: volume gives $25h = 125$, so $h = 5$. SA $= 2(25) + 4(5)(5) = 50 + 100 = 150$ ✓.\n\n**The Full Solution:**\nVolume: $s^2 h = 125$, so $h = \\frac{125}{s^2}$.\nSurface area: $2s^2 + 4sh = 150$.\nSubstitute: $2s^2 + 4s \\cdot \\frac{125}{s^2} = 150$\n$2s^2 + \\frac{500}{s} = 150$\nMultiply by $s$: $2s^3 - 150s + 500 = 0$, or $s^3 - 75s + 250 = 0$.\nTest $s = 5$: $125 - 375 + 250 = 0$ ✓.\nSo $s = 5$ and $h = 5$.\n\nVerify: SA $= 2(25) + 4(25) = 50 + 100 = 150$ ✓. Volume $= 25 \\times 5 = 125$ ✓.\n\n**Why the wrong answers are tempting:**\n• B: $s = 10$ gives $h = 1.25$, SA $= 200 + 50 = 250 \neq 150$.\n• C: Doesn't satisfy both equations simultaneously.\n• D: $s = 25$ is far too large for these constraints.\n\n**Test Day Takeaway:** When given surface area and volume with two unknowns, express one variable in terms of the other and substitute. Testing integer values from the choices is the fastest approach.",
  skills: ["surface-area", "volume", "solving-equations"]
},
{
  id: 22, type: "multiple-choice", difficulty: "hard",
  question: "The function $f(x) = a \\cdot b^x$ satisfies $f(2) = 18$ and $f(5) = 486$. What is the value of $f(0)$?",
  choices: [{ id: "A", text: "2" }, { id: "B", text: "3" }, { id: "C", text: "6" }, { id: "D", text: "1" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponential Function — Finding Parameters from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way:** $\\frac{f(5)}{f(2)} = \\frac{ab^5}{ab^2} = b^3 = \\frac{486}{18} = 27$, so $b = 3$. Then $f(2) = a \\cdot 9 = 18$, so $a = 2$. $f(0) = a = 2$.\n\n**The Full Solution:**\n$f(2) = ab^2 = 18$ and $f(5) = ab^5 = 486$.\nDivide: $\\frac{ab^5}{ab^2} = b^3 = \\frac{486}{18} = 27$.\n$b = \\sqrt[3]{27} = 3$.\nFrom $ab^2 = 18$: $a(9) = 18$, so $a = 2$.\n$f(0) = a \\cdot b^0 = a \\cdot 1 = a = 2$.\n\n**Why the wrong answers are tempting:**\n• B: Confuses $a$ with $b$.\n• C: Computes $ab = 2 \\times 3 = 6$ instead of $f(0) = a$.\n• D: Assumes $f(0)$ always equals 1.\n\n**Test Day Takeaway:** For $f(x) = ab^x$, dividing two function values eliminates $a$ and isolates a power of $b$. Always remember $f(0) = a$.",
  skills: ["exponential-functions", "solving-equations"]
}
      ]
    }
  ]
};

export default practiceTest12;
