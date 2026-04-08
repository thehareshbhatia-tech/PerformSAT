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
  question: "A scatterplot shows data for 12 cities comparing population density ($x$, in thousands per square mile) and average commute time ($y$, in minutes). The line of best fit is $y = 4.2x + 15$. One city has a population density of 5 thousand per square mile and an actual average commute time of 32 minutes. What is the residual for this city?",
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
        // ===== EASY (Q1-Q5) =====
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A campground has $45$ campsites. If $\\frac{1}{3}$ of the campsites are occupied, how many are occupied?",
          choices: [
            { id: "A", text: "$12$" },
            { id: "B", text: "$15$" },
            { id: "C", text: "$30$" },
            { id: "D", text: "$42$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Fraction of a Whole**\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** $\\frac{45}{3} = 15$.\n\n**The Full Solution:**\n$\\frac{1}{3} \\times 45 = 15$ campsites.\n\n**Why the wrong answers are tempting:**\n• Choice A ($12$): Incorrect division.\n• Choice C ($30$): Computes $\\frac{2}{3}$ of $45$.\n• Choice D ($42$): Computes $45 - 3$.\n\n**Test Day Takeaway:** $\\frac{1}{3}$ of a number means divide by $3$.",
          skills: ["ratios-proportions"]
        },
        {
          id: 2,
          type: "fill-in",
          difficulty: "easy",
          question: "If $6y = 54$, what is the value of $y$?",
          correctAnswer: "9",
          explanation: "**SAT Pattern: One-Step Equation**\n\n**The correct answer is $9$.**\n\n**The Fast Way (5 seconds):** $y = 54 \\div 6 = 9$.\n\n**The Full Solution:**\n$6y = 54$\n$y = \\frac{54}{6} = 9$\n\n**Common Mistakes to Avoid:**\n• Multiplying: $6 \\times 54 = 324$.\n\n**Verification:** $6(9) = 54$. Correct.\n\n**Test Day Takeaway:** Divide both sides by the coefficient.",
          skills: ["linear-equations", "solving-equations"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A planet is $4.2 \\times 10^8$ miles from its star. Which of the following represents this distance in standard notation?",
          choices: [
            { id: "A", text: "$42{,}000{,}000$" },
            { id: "B", text: "$420{,}000{,}000$" },
            { id: "C", text: "$4{,}200{,}000{,}000$" },
            { id: "D", text: "$42{,}000{,}000{,}000$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Scientific Notation**\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** $4.2 \\times 10^8 = 420{,}000{,}000$ (move the decimal $8$ places right).\n\n**The Full Solution:**\n$4.2 \\times 10^8 = 420{,}000{,}000$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Moves decimal only $7$ places ($4.2 \\times 10^7$).\n• Choice C: Moves decimal $9$ places ($4.2 \\times 10^9$).\n• Choice D: Moves decimal $10$ places ($4.2 \\times 10^{10}$).\n\n**Test Day Takeaway:** $10^n$ means move the decimal point $n$ places to the right.",
          skills: ["exponent-rules"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "An event has $180$ attendees. If $60$ are children, what fraction of the attendees are children?",
          choices: [
            { id: "A", text: "$\\frac{1}{6}$" },
            { id: "B", text: "$\\frac{1}{4}$" },
            { id: "C", text: "$\\frac{1}{3}$" },
            { id: "D", text: "$\\frac{2}{3}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Part-to-Whole Fraction**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $\\frac{60}{180} = \\frac{1}{3}$.\n\n**The Full Solution:**\n$\\frac{60}{180} = \\frac{60 \\div 60}{180 \\div 60} = \\frac{1}{3}$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{1}{6}$): Divides $180$ by $60$ then flips.\n• Choice B ($\\frac{1}{4}$): Incorrect simplification.\n• Choice D ($\\frac{2}{3}$): The fraction of adults, not children.\n\n**Test Day Takeaway:** Fraction $= \\frac{\\text{part}}{\\text{whole}}$. Always simplify.",
          skills: ["ratios-proportions", "percents"]
        },
        {
          id: 5,
          type: "fill-in",
          difficulty: "easy",
          question: "How many minutes are in $3.5$ hours?",
          correctAnswer: "210",
          explanation: "**SAT Pattern: Unit Conversion**\n\n**The correct answer is $210$.**\n\n**The Fast Way (5 seconds):** $3.5 \\times 60 = 210$.\n\n**The Full Solution:**\n$3.5 \\text{ hours} \\times 60 \\text{ minutes/hour} = 210$ minutes.\n\n**Common Mistakes to Avoid:**\n• Using $3.5 \\times 100 = 350$ (wrong conversion factor).\n\n**Verification:** $210 \\div 60 = 3.5$ hours. Correct.\n\n**Test Day Takeaway:** $1$ hour $= 60$ minutes. Multiply hours by $60$.",
          skills: ["unit-conversion"]
        },

        // ===== MEDIUM (Q6-Q15) =====
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A cyclist travels at $18$ miles per hour for $2$ hours and then at $12$ miles per hour for $3$ hours. What is the total distance traveled?",
          choices: [
            { id: "A", text: "$66$ miles" },
            { id: "B", text: "$72$ miles" },
            { id: "C", text: "$78$ miles" },
            { id: "D", text: "$90$ miles" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Two-Part Distance Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $18(2) + 12(3) = 36 + 36 = 72$.\n\n**The Full Solution:**\nDistance $= 18 \\times 2 + 12 \\times 3 = 36 + 36 = 72$ miles.\n\n**Why the wrong answers are tempting:**\n• Choice A ($66$): Computes $18(2) + 12(2.5) = 36 + 30$.\n• Choice C ($78$): Computes $18(3) + 12(2) = 54 + 24$, swapping the times.\n• Choice D ($90$): Computes $(18 + 12) \\times 3 = 90$.\n\n**Test Day Takeaway:** Total distance $=$ sum of (rate $\\times$ time) for each segment.",
          skills: ["word-problems", "ratios-proportions"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $\\frac{x + 3}{2} = 7$, what is the value of $x + 3$?",
          choices: [
            { id: "A", text: "$3.5$" },
            { id: "B", text: "$7$" },
            { id: "C", text: "$11$" },
            { id: "D", text: "$14$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Equation with Fraction - Finding an Expression**\n\n**Choice D is correct.**\n\n**The Fast Way (5 seconds):** Multiply both sides by $2$: $x + 3 = 14$.\n\n**The Full Solution:**\n$\\frac{x + 3}{2} = 7$\n$x + 3 = 14$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3.5$): Divides $7$ by $2$ instead of multiplying.\n• Choice B ($7$): Uses the right-hand side as the answer.\n• Choice C ($11$): Computes $x = 14 - 3 = 11$ (which is $x$, not $x + 3$).\n\n**Test Day Takeaway:** Read carefully: the question asks for $x + 3$, not $x$. Multiply both sides to clear the fraction.",
          skills: ["solving-equations", "algebraic-manipulation"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "The function $g(x) = 5x + 20$ gives the cost, in dollars, of renting a kayak for $x$ hours. What is the cost of renting a kayak for $4$ hours?",
          correctAnswer: "40",
          explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $40$.**\n\n**The Fast Way (5 seconds):** $g(4) = 5(4) + 20 = 20 + 20 = 40$.\n\n**The Full Solution:**\n$g(4) = 5(4) + 20 = 20 + 20 = 40$ dollars.\n\n**Common Mistakes to Avoid:**\n• Computing $5 + 20 = 25$ and then $25 \\times 4 = 100$.\n\n**Verification:** $g(4) = 40$. $40 - 20 = 20$, and $20 \\div 4 = 5$ per hour rate. Correct.\n\n**Test Day Takeaway:** Substitute the input into the function and simplify.",
          skills: ["function-evaluation", "linear-functions"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following systems of equations has no solution?\n\n(I) $y = 2x + 3$ and $y = 2x - 1$\n(II) $y = 2x + 3$ and $y = -2x + 3$\n(III) $y = 2x + 3$ and $y = 2x + 3$",
          choices: [
            { id: "A", text: "I only" },
            { id: "B", text: "II only" },
            { id: "C", text: "III only" },
            { id: "D", text: "I and II" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Number of Solutions in a System**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** Same slope, different $y$-intercepts $=$ parallel lines $=$ no solution. System I has slope $2$ for both but different intercepts ($3$ vs $-1$).\n\n**The Full Solution:**\nSystem I: Both lines have slope $2$ but different intercepts ($3$ and $-1$). Parallel lines, no intersection, no solution.\nSystem II: Slopes are $2$ and $-2$ (different). They intersect once.\nSystem III: Same line. Infinitely many solutions.\n\n**Why the wrong answers are tempting:**\n• Choice B: System II has different slopes, so they do intersect.\n• Choice C: System III is the same equation twice -- infinitely many solutions, not none.\n• Choice D: Only System I has no solution.\n\n**Test Day Takeaway:** No solution $=$ same slope, different intercept (parallel lines).",
          skills: ["systems-of-equations", "slope"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A sample of $400$ hikers found that $52\\%$ prefer mountain trails, with a margin of error of $3\\%$. Which is the best conclusion?",
          choices: [
            { id: "A", text: "Exactly $52\\%$ of all hikers prefer mountain trails." },
            { id: "B", text: "Between $49\\%$ and $55\\%$ of the sampled hikers prefer mountain trails." },
            { id: "C", text: "It is plausible that between $49\\%$ and $55\\%$ of all hikers prefer mountain trails." },
            { id: "D", text: "At least $49\\%$ of all hikers prefer mountain trails." }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Margin of Error Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $52\\% \\pm 3\\% = [49\\%, 55\\%]$. This is an estimate for the population, not the sample.\n\n**The Full Solution:**\nThe confidence interval is $52\\% \\pm 3\\% = [49\\%, 55\\%]$. This interval estimates the true population proportion.\n\n**Why the wrong answers are tempting:**\n• Choice A: \"Exactly\" is too precise for a statistical estimate.\n• Choice B: The interval applies to the population, not the sample (the sample percentage is already known exactly).\n• Choice D: The interval is two-sided; we can't claim \"at least.\"\n\n**Test Day Takeaway:** Margin of error creates a range for the population parameter.",
          skills: ["margin-of-error", "statistics"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "If $x^2 - 9 = 0$, what is the positive value of $x$?",
          correctAnswer: "3",
          explanation: "**SAT Pattern: Difference of Squares**\n\n**The correct answer is $3$.**\n\n**The Fast Way (5 seconds):** $x^2 = 9$, so $x = \\pm 3$. The positive value is $3$.\n\n**The Full Solution:**\n$x^2 - 9 = 0$\n$(x - 3)(x + 3) = 0$\n$x = 3$ or $x = -3$\nPositive value: $x = 3$.\n\n**Common Mistakes to Avoid:**\n• Giving $-3$ (the negative solution).\n• Giving $9$ ($x^2$, not $x$).\n\n**Verification:** $3^2 - 9 = 9 - 9 = 0$. Correct.\n\n**Test Day Takeaway:** $x^2 = c$ gives $x = \\pm\\sqrt{c}$. Read whether the question asks for positive, negative, or both.",
          skills: ["factoring", "quadratic-equations"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A triangle has angles measuring $x°$, $2x°$, and $3x°$. What is the value of $x$?",
          choices: [
            { id: "A", text: "$20$" },
            { id: "B", text: "$30$" },
            { id: "C", text: "$45$" },
            { id: "D", text: "$60$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $x + 2x + 3x = 180$, so $6x = 180$ and $x = 30$.\n\n**The Full Solution:**\nAngles of a triangle sum to $180°$:\n$x + 2x + 3x = 180$\n$6x = 180$\n$x = 30$\n\n**Why the wrong answers are tempting:**\n• Choice A ($20$): Uses $x + 2x + 3x = 120$ or makes an arithmetic error.\n• Choice C ($45$): May think two angles sum to $90°$.\n• Choice D ($60$): Divides $180$ by $3$ instead of $6$.\n\n**Test Day Takeaway:** Always use the triangle angle sum: $180°$. Combine like terms and solve.",
          skills: ["triangles", "angles"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $f(x) = 2x^2 - 3x + 1$, what is $f(-1)$?",
          choices: [
            { id: "A", text: "$0$" },
            { id: "B", text: "$2$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Evaluating a Quadratic Function**\n\n**Choice D is correct.**\n\n**The Fast Way (10 seconds):** $f(-1) = 2(1) - 3(-1) + 1 = 2 + 3 + 1 = 6$.\n\n**The Full Solution:**\n$f(-1) = 2(-1)^2 - 3(-1) + 1$\n$= 2(1) + 3 + 1$\n$= 2 + 3 + 1 = 6$\n\n**Why the wrong answers are tempting:**\n• Choice A ($0$): Computes $2 - 3 + 1 = 0$ (using $x = 1$ instead of $x = -1$).\n• Choice B ($2$): Computes $2(1) - 3(1) + 1 + 2 = 2$.\n• Choice C ($4$): Mishandles the signs: $2 + 3 - 1 = 4$.\n\n**Test Day Takeaway:** When substituting a negative value, be careful with signs: $(-1)^2 = 1$ and $-3(-1) = +3$.",
          skills: ["function-evaluation", "quadratic-functions"]
        },
        {
          id: 14,
          type: "fill-in",
          difficulty: "medium",
          question: "A proportion states $\\frac{3}{8} = \\frac{x}{24}$. What is the value of $x$?",
          correctAnswer: "9",
          explanation: "**SAT Pattern: Solving a Proportion**\n\n**The correct answer is $9$.**\n\n**The Fast Way (5 seconds):** $24 \\div 8 = 3$, so $x = 3 \\times 3 = 9$.\n\n**The Full Solution:**\n$\\frac{3}{8} = \\frac{x}{24}$\nCross-multiply: $3 \\times 24 = 8x$\n$72 = 8x$\n$x = 9$\n\n**Common Mistakes to Avoid:**\n• Cross-multiplying incorrectly: $3x = 8 \\times 24$.\n\n**Verification:** $\\frac{9}{24} = \\frac{3}{8}$. Correct.\n\n**Test Day Takeaway:** Cross-multiply or find the scale factor to solve proportions.",
          skills: ["ratios-proportions", "solving-equations"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The inequality $3x - 7 > 14$ is satisfied by which of the following values of $x$?",
          choices: [
            { id: "A", text: "$5$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$7$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Solving a Linear Inequality**\n\n**Choice D is correct.**\n\n**The Fast Way (10 seconds):** $3x > 21$, so $x > 7$. The only choice greater than $7$ is $8$.\n\n**The Full Solution:**\n$3x - 7 > 14$\n$3x > 21$\n$x > 7$\nOnly $x = 8$ satisfies this.\n\n**Why the wrong answers are tempting:**\n• Choice A ($5$): $3(5) - 7 = 8 \\not> 14$.\n• Choice B ($6$): $3(6) - 7 = 11 \\not> 14$.\n• Choice C ($7$): $3(7) - 7 = 14 \\not> 14$ (not strictly greater).\n\n**Test Day Takeaway:** Solve inequalities like equations. Remember: $>$ means strictly greater than, not $\\geq$.",
          skills: ["inequalities", "solving-equations"]
        },

        // ===== HARD (Q16-Q22) =====
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $f(x) = 3x^2 - 18x + 30$ has a minimum value. What is this minimum value?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$12$" },
            { id: "D", text: "$30$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Minimum of a Quadratic**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** $x = \\frac{18}{6} = 3$. $f(3) = 3(9) - 18(3) + 30 = 27 - 54 + 30 = 3$.\n\n**The Full Solution:**\n$x_{\\text{vertex}} = \\frac{-b}{2a} = \\frac{18}{6} = 3$\n$f(3) = 3(9) - 54 + 30 = 27 - 54 + 30 = 3$\n\nAlternatively: $f(x) = 3(x^2 - 6x) + 30 = 3(x^2 - 6x + 9 - 9) + 30 = 3(x-3)^2 - 27 + 30 = 3(x-3)^2 + 3$.\nMinimum $= 3$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($6$): Half of $-b = 18$ divided by $a = 3$... various miscalculations.\n• Choice C ($12$): May compute $f(2) = 12 - 36 + 30 = 6$ or another value.\n• Choice D ($30$): The $y$-intercept, $f(0)$.\n\n**Test Day Takeaway:** Find the vertex $x$-coordinate with $\\frac{-b}{2a}$, then plug back in to find the minimum $y$-value.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 17,
          type: "fill-in",
          difficulty: "hard",
          question: "The expression $\\frac{x^2 - 16}{x - 4}$ is equivalent to what expression for all $x \\neq 4$?",
          correctAnswer: "x + 4",
          explanation: "**SAT Pattern: Simplifying Rational Expressions**\n\n**The correct answer is $x + 4$.**\n\n**The Fast Way (10 seconds):** $x^2 - 16 = (x-4)(x+4)$. Divide by $(x-4)$: $x + 4$.\n\n**The Full Solution:**\n$\\frac{x^2 - 16}{x - 4} = \\frac{(x-4)(x+4)}{x-4} = x + 4$ for $x \\neq 4$.\n\n**Common Mistakes to Avoid:**\n• Canceling incorrectly to get $x - 4$ or just $4$.\n• Not recognizing $x^2 - 16$ as a difference of squares.\n\n**Verification:** Let $x = 5$: $\\frac{25 - 16}{5 - 4} = \\frac{9}{1} = 9$ and $5 + 4 = 9$. Correct.\n\n**Test Day Takeaway:** Factor the numerator using difference of squares: $a^2 - b^2 = (a-b)(a+b)$.",
          skills: ["factoring", "algebraic-manipulation"]
        },
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A spaceship travels a distance $d$ that varies directly with the square of its speed $s$. If $d = 100$ when $s = 5$, what is $d$ when $s = 10$?",
          choices: [
            { id: "A", text: "$200$" },
            { id: "B", text: "$400$" },
            { id: "C", text: "$500$" },
            { id: "D", text: "$1{,}000$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Direct Variation with Square**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $d = ks^2$. $100 = k(25)$, so $k = 4$. $d = 4(100) = 400$.\n\n**The Full Solution:**\n$d = ks^2$\n$100 = k(5)^2 = 25k$\n$k = 4$\n$d = 4(10)^2 = 4(100) = 400$\n\n**Why the wrong answers are tempting:**\n• Choice A ($200$): Assumes $d$ varies directly with $s$ (linear): $100 \\times 2 = 200$.\n• Choice C ($500$): Computes $100 \\times 5$.\n• Choice D ($1{,}000$): Computes $100 \\times 10$.\n\n**Test Day Takeaway:** \"Varies directly with the square\" means $d = ks^2$. Find $k$ first, then use it.",
          skills: ["ratios-proportions", "quadratic-functions"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $\\sqrt{2x + 5} = 7$, what is the value of $2x + 5$?",
          choices: [
            { id: "A", text: "$7$" },
            { id: "B", text: "$14$" },
            { id: "C", text: "$44$" },
            { id: "D", text: "$49$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Radical Equation Shortcut**\n\n**Choice D is correct.**\n\n**The Fast Way (5 seconds):** If $\\sqrt{\\text{something}} = 7$, then something $= 49$. So $2x + 5 = 49$.\n\n**The Full Solution:**\n$\\sqrt{2x + 5} = 7$\nSquare both sides: $2x + 5 = 49$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($7$): Uses the right-hand side without squaring.\n• Choice B ($14$): Computes $7 \\times 2$.\n• Choice C ($44$): Solves for $x$ ($x = 22$) and computes $2(22) = 44$.\n\n**Test Day Takeaway:** Read what the question asks. It asks for $2x + 5$, not $x$. Square both sides: done.",
          skills: ["radical-equations", "solving-equations"]
        },
        {
          id: 20,
          type: "fill-in",
          difficulty: "hard",
          question: "A cone has a radius of $3$ and a height of $12$. What is the volume of the cone? (Volume of a cone: $V = \\frac{1}{3}\\pi r^2 h$). Give your answer in terms of $\\pi$. (Enter the coefficient of $\\pi$.)",
          correctAnswer: "36",
          explanation: "**SAT Pattern: Volume Formula Application**\n\n**The correct answer is $36$ (the volume is $36\\pi$).**\n\n**The Fast Way (10 seconds):** $V = \\frac{1}{3}\\pi(3)^2(12) = \\frac{1}{3}\\pi(9)(12) = \\frac{108\\pi}{3} = 36\\pi$.\n\n**The Full Solution:**\n$V = \\frac{1}{3}\\pi r^2 h$\n$= \\frac{1}{3}\\pi(9)(12)$\n$= \\frac{108\\pi}{3}$\n$= 36\\pi$\n\n**Common Mistakes to Avoid:**\n• Forgetting the $\\frac{1}{3}$: $\\pi(9)(12) = 108\\pi$.\n• Using $2r$ instead of $r^2$.\n\n**Verification:** $\\frac{1}{3}(9)(12) = \\frac{108}{3} = 36$.\n\n**Test Day Takeaway:** The cone volume is $\\frac{1}{3}$ of the cylinder volume with the same base and height.",
          skills: ["volume"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In the $xy$-plane, the parabola $y = (x - 2)(x - 8)$ has a vertex at $(h, k)$. What is the value of $k$?",
          choices: [
            { id: "A", text: "$-9$" },
            { id: "B", text: "$-5$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$16$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Vertex from Factored Form**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** The roots are $x = 2$ and $x = 8$. Vertex $x = \\frac{2+8}{2} = 5$. $k = (5-2)(5-8) = (3)(-3) = -9$.\n\n**The Full Solution:**\n$y = (x-2)(x-8)$\nRoots: $x = 2$ and $x = 8$.\nVertex $x$-coordinate $= \\frac{2+8}{2} = 5$.\n$k = f(5) = (5-2)(5-8) = (3)(-3) = -9$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($-5$): Confuses the vertex $x$-coordinate ($5$) with $k$, with a sign flip.\n• Choice C ($5$): This is $h$, the $x$-coordinate.\n• Choice D ($16$): Computes $2 \\times 8 = 16$ (the product of the roots).\n\n**Test Day Takeaway:** From factored form, the vertex $x$ is the midpoint of the roots. Plug back in to find $k$.",
          skills: ["quadratic-functions", "factoring"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In a $45$-$45$-$90$ triangle, the hypotenuse has length $10\\sqrt{2}$. What is the length of each leg?",
          choices: [
            { id: "A", text: "$5$" },
            { id: "B", text: "$5\\sqrt{2}$" },
            { id: "C", text: "$10$" },
            { id: "D", text: "$10\\sqrt{2}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: 45-45-90 Special Right Triangle**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** In a $45$-$45$-$90$ triangle, hypotenuse $= \\text{leg} \\times \\sqrt{2}$. So leg $= \\frac{10\\sqrt{2}}{\\sqrt{2}} = 10$.\n\n**The Full Solution:**\nIn a $45$-$45$-$90$ triangle, the sides are in the ratio $1 : 1 : \\sqrt{2}$.\n$\\text{leg} \\times \\sqrt{2} = 10\\sqrt{2}$\n$\\text{leg} = 10$\n\n**Why the wrong answers are tempting:**\n• Choice A ($5$): Divides the hypotenuse by $2\\sqrt{2}$ or by $2$.\n• Choice B ($5\\sqrt{2}$): Divides $10\\sqrt{2}$ by $2$, treating it like a $30$-$60$-$90$ triangle.\n• Choice D ($10\\sqrt{2}$): Uses the hypotenuse as the leg.\n\n**Test Day Takeaway:** $45$-$45$-$90$ sides: $s$, $s$, $s\\sqrt{2}$. Divide the hypotenuse by $\\sqrt{2}$ to get each leg.",
          skills: ["special-right-triangles", "triangles"]
        }
      ]
    }
  ]
};

export default practiceTest12;
