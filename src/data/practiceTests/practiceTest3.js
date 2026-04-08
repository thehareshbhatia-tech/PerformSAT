// Practice Test 3 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty

export const practiceTest3 = {
  id: "practice-test-3",
  title: "Practice Test 3",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A gym charges a one-time registration fee of $\\$25$ and a monthly membership fee of $\\$40$. Which expression represents the total cost, in dollars, for $m$ months of membership?",
  choices: [
    { id: "A", text: "$25m + 40$" },
    { id: "B", text: "$40m + 25$" },
    { id: "C", text: "$65m$" },
    { id: "D", text: "$25(m + 40)$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Word-to-Expression Translation**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Monthly fee repeats: $40m$. Registration is once: $+25$. Total: $40m + 25$.\n\n**The Full Solution:**\nThe one-time registration fee is $\\$25$ (a constant).\nThe monthly fee is $\\$40$ per month for $m$ months: $40m$.\nTotal cost $= 40m + 25$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Swaps which cost is per-month and which is one-time.\n• Choice C: Adds the two numbers ($25 + 40 = 65$) and multiplies by $m$, treating both as monthly.\n• Choice D: Creates a nonsensical expression by distributing $25$.\n\n**Test Day Takeaway:** Identify which costs are one-time (constant) and which repeat (multiply by the variable).",
  skills: ["word-problems", "linear-functions"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A jar contains $120$ marbles. If $45\\%$ of the marbles are blue, how many marbles are NOT blue?",
  choices: [
    { id: "A", text: "$54$" },
    { id: "B", text: "$55$" },
    { id: "C", text: "$66$" },
    { id: "D", text: "$75$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent Complement**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** Not blue $= 100\\% - 45\\% = 55\\%$. $55\\%$ of $120 = 0.55 \\times 120 = 66$.\n\n**The Full Solution:**\nBlue marbles: $0.45 \\times 120 = 54$.\nNot blue: $120 - 54 = 66$.\n\nAlternatively: $55\\%$ are not blue, so $0.55 \\times 120 = 66$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Computes the number of blue marbles ($54$) instead of not blue.\n• Choice B: Uses $55\\%$ but rounds incorrectly.\n• Choice D: Computes $120 - 45 = 75$, subtracting the percentage instead of the count.\n\n**Test Day Takeaway:** Read carefully: 'not blue' means use the complement ($100\\% - 45\\% = 55\\%$).",
  skills: ["percents", "word-problems"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  question: "If $\\frac{7x}{6} = \\frac{49}{3}$, what is the value of $x$?",
  choices: [
    { id: "A", text: "$7$" },
    { id: "B", text: "$14$" },
    { id: "C", text: "$21$" },
    { id: "D", text: "$42$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Cross-multiply: $7x \\times 3 = 49 \\times 6$, so $21x = 294$ and $x = 14$.\n\n**The Full Solution:**\n$\\frac{7x}{6} = \\frac{49}{3}$\n\nCross-multiply: $3 \\cdot 7x = 6 \\cdot 49$\n$21x = 294$\n$x = \\frac{294}{21} = 14$\n\nVerification: $\\frac{7(14)}{6} = \\frac{98}{6} = \\frac{49}{3}$ \\checkmark\n\n**Why the wrong answers are tempting:**\n• Choice A: Solves $7x = 49$ without accounting for the denominators.\n• Choice C: Divides $294$ by $14$ instead of $21$.\n• Choice D: Computes $\\frac{294}{7}$ instead of $\\frac{294}{21}$.\n\n**Test Day Takeaway:** Cross-multiply, then divide carefully. Verify by substituting back.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A scientist recorded that a plant grew $1.3$ centimeters per day over a $d$-day observation period. The plant was $5.2$ centimeters tall at the start. Which function $h(d)$ gives the height of the plant, in centimeters, after $d$ days?",
  choices: [
    { id: "A", text: "$h(d) = 5.2d + 1.3$" },
    { id: "B", text: "$h(d) = 1.3d + 5.2$" },
    { id: "C", text: "$h(d) = 5.2(1.3)^d$" },
    { id: "D", text: "$h(d) = 1.3(5.2)^d$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Linear Model from Rate and Initial Value**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Growth rate is $1.3$ cm/day (coefficient of $d$). Initial height is $5.2$ cm (constant). $h(d) = 1.3d + 5.2$.\n\n**The Full Solution:**\nThe plant grows at a constant rate of $1.3$ cm/day, so the model is linear:\n$h(d) = (\\text{rate}) \\cdot d + (\\text{initial height})$\n$h(d) = 1.3d + 5.2$\n\nCheck: At $d = 0$: $h(0) = 5.2$ cm (initial height) \\checkmark\nAt $d = 1$: $h(1) = 1.3 + 5.2 = 6.5$ cm (grew $1.3$ cm) \\checkmark\n\n**Why the wrong answers are tempting:**\n• Choice A: Swaps the rate and initial value.\n• Choice C: Uses an exponential model, but the growth is constant per day (linear), not by a percentage.\n• Choice D: Also exponential with swapped values.\n\n**Test Day Takeaway:** Constant growth per unit time means a linear model. The rate is the coefficient; the initial value is the constant.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A worker earns $\\$18.50$ per hour. How much does the worker earn for $6$ hours of work?",
  choices: [
    { id: "A", text: "$\\$96.00$" },
    { id: "B", text: "$\\$105.00$" },
    { id: "C", text: "$\\$111.00$" },
    { id: "D", text: "$\\$118.50$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Unit Rate Calculation**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $18.50 \\times 6 = 111.00$.\n\n**The Full Solution:**\nEarnings $=$ hourly rate $\\times$ hours worked\n$= 18.50 \\times 6$\n$= 18 \\times 6 + 0.50 \\times 6$\n$= 108 + 3$\n$= 111$\n\n**Why the wrong answers are tempting:**\n• Choice A: Computes $16 \\times 6 = 96$, misreading the hourly rate.\n• Choice B: Computes $17.50 \\times 6 = 105$.\n• Choice D: Adds $100 + 18.50 = 118.50$, using an incorrect method.\n\n**Test Day Takeaway:** Break decimal multiplication into parts: multiply the whole number and the decimal separately, then add.",
  skills: ["word-problems", "ratios"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The line passing through the points $(-2, 7)$ and $(4, -5)$ can be written in the form $y = mx + b$. What is the value of $b$?",
  choices: [
    { id: "A", text: "$-5$" },
    { id: "B", text: "$1$" },
    { id: "C", text: "$3$" },
    { id: "D", text: "$7$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** Slope $= \\frac{-5 - 7}{4 - (-2)} = \\frac{-12}{6} = -2$. Using $(-2, 7)$: $7 = -2(-2) + b = 4 + b$, so $b = 3$.\n\n**The Full Solution:**\nStep 1: Find the slope.\n$m = \\frac{-5 - 7}{4 - (-2)} = \\frac{-12}{6} = -2$\n\nStep 2: Find the $y$-intercept using $(-2, 7)$.\n$7 = -2(-2) + b$\n$7 = 4 + b$\n$b = 3$\n\nEquation: $y = -2x + 3$\n\nVerification: At $(4, -5)$: $-2(4) + 3 = -8 + 3 = -5$ \\checkmark\n\n**Why the wrong answers are tempting:**\n• Choice A: Uses the $y$-value of the second point as the $y$-intercept.\n• Choice B: Makes an arithmetic error in solving for $b$.\n• Choice D: Uses the $y$-value of the first point as the $y$-intercept.\n\n**Test Day Takeaway:** Find the slope first, then plug one point into $y = mx + b$ to solve for $b$.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  question: "\n\n| | Owns a Pet | Does Not Own a Pet | Total |\n|---|---|---|---|\n| Lives Alone | $34$ | $46$ | $80$ |\n| Lives with Others | $81$ | $39$ | $120$ |\n| Total | $115$ | $85$ | $200$ |\n\nWhat percentage of people who live alone own a pet?",
  choices: [
    { id: "A", text: "$17\\%$" },
    { id: "B", text: "$30\\%$" },
    { id: "C", text: "$42.5\\%$" },
    { id: "D", text: "$57.5\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Two-Way Table Conditional Percentage**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** People who live alone: $80$. Of those, pet owners: $34$. Percentage: $\\frac{34}{80} = 0.425 = 42.5\\%$.\n\n**The Full Solution:**\nThe question asks: of those who live alone, what percentage own a pet?\n\n$\\frac{34}{80} = 0.425 = 42.5\\%$\n\n**Why the wrong answers are tempting:**\n• Choice A: Computes $\\frac{34}{200} = 17\\%$, dividing by the grand total.\n• Choice B: Computes $\\frac{34}{115} \\approx 30\\%$, dividing by total pet owners.\n• Choice D: Computes $\\frac{46}{80} = 57.5\\%$, giving the percentage who do NOT own a pet.\n\n**Test Day Takeaway:** 'Of people who live alone' means the denominator is the row total for 'Lives Alone' ($80$), not the grand total.",
  skills: ["two-way-tables", "probability", "percents"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The system of equations below has the solution $(x, y)$.\n\n$2x + 5y = -3$\n$3x - 5y = 33$\n\nWhat is the value of $y$?",
  choices: [
    { id: "A", text: "$-3$" },
    { id: "B", text: "$-1$" },
    { id: "C", text: "$1$" },
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Systems of Linear Equations**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Add the equations: $5x = 30$, so $x = 6$. Substitute: $2(6) + 5y = -3$, giving $12 + 5y = -3$, so $5y = -15$ and $y = -3$.\n\n**The Full Solution:**\nAdd the two equations to eliminate $y$:\n$(2x + 5y) + (3x - 5y) = -3 + 33$\n$5x = 30$\n$x = 6$\n\nSubstitute $x = 6$ into $2x + 5y = -3$:\n$12 + 5y = -3$\n$5y = -15$\n$y = -3$\n\nVerification: $2(6) + 5(-3) = 12 - 15 = -3$ \\checkmark\n$3(6) - 5(-3) = 18 + 15 = 33$ \\checkmark\n\n**Why the wrong answers are tempting:**\n• Choice B: Makes a sign error in the subtraction step.\n• Choice C: Gets $5y = 5$ instead of $5y = -15$.\n• Choice D: Reports the value of $x$ instead of $y$.\n\n**Test Day Takeaway:** When coefficients of one variable are opposites, add the equations. Double-check which variable the question asks for.",
  skills: ["systems-of-equations", "solving-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A data set is best modeled by the equation $y = 2.4x - 8.6$. Based on this model, what is the predicted change in $y$ when $x$ increases by $5$?",
  choices: [
    { id: "A", text: "$3.4$" },
    { id: "B", text: "$5.0$" },
    { id: "C", text: "$12.0$" },
    { id: "D", text: "$20.6$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Interpreting Slope as Rate of Change**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** The slope is $2.4$, meaning $y$ changes by $2.4$ for each $1$-unit increase in $x$. For $5$ units: $2.4 \\times 5 = 12.0$.\n\n**The Full Solution:**\nThe slope of the line is $2.4$, which represents the change in $y$ per unit change in $x$.\n\nWhen $x$ increases by $5$:\n$\\Delta y = m \\times \\Delta x = 2.4 \\times 5 = 12.0$\n\n**Why the wrong answers are tempting:**\n• Choice A: Evaluates $y$ at $x = 5$: $2.4(5) - 8.6 = 3.4$, confusing a single $y$-value with the change.\n• Choice B: Confuses the change in $x$ ($5$) with the change in $y$.\n• Choice D: Computes $2.4 \\times 5 + 8.6 = 20.6$, incorrectly adding the intercept to the change.\n\n**Test Day Takeaway:** The predicted change in $y$ for a given change in $x$ is simply slope $\\times$ change in $x$. The $y$-intercept does not matter.",
  skills: ["scatterplots", "slope", "function-interpretation"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  question: "If $3(4x - 1) + 2(x + 5) = 63$, what is the value of $x$?",
  correctAnswer: "4",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $4$.**\n\n**The Fast Way (15 seconds):** Expand: $12x - 3 + 2x + 10 = 63$, combine: $14x + 7 = 63$, so $14x = 56$ and $x = 4$.\n\n**The Full Solution:**\n$3(4x - 1) + 2(x + 5) = 63$\n$12x - 3 + 2x + 10 = 63$\n$14x + 7 = 63$\n$14x = 56$\n$x = 4$\n\n**Common Mistakes to Avoid:**\n• Forgetting to distribute the $3$ and $2$ to every term inside the parentheses.\n• Combining $-3 + 10$ incorrectly.\n\n**Verification:** $3(4(4) - 1) + 2(4 + 5) = 3(15) + 2(9) = 45 + 18 = 63$ \\checkmark\n\n**Test Day Takeaway:** Distribute each coefficient, combine all like terms, then isolate $x$.",
  skills: ["solving-equations"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The value of an investment account is modeled by $A(t) = 5000(1.06)^t$, where $t$ is the number of years since the account was opened. What is the best interpretation of the number $1.06$ in this expression?",
  choices: [
    { id: "A", text: "The account earns $\\$1.06$ in interest each year" },
    { id: "B", text: "The account value increases by $6\\%$ each year" },
    { id: "C", text: "The account value increases by $106\\%$ each year" },
    { id: "D", text: "The account will be worth $\\$1.06$ after one year" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** The base $1.06 = 1 + 0.06$ means a $6\\%$ increase each year.\n\n**The Full Solution:**\nIn the model $A(t) = P_0(1 + r)^t$, the base $(1 + r)$ represents the growth factor.\n$1.06 = 1 + 0.06$, so $r = 0.06 = 6\\%$.\n\nEach year, the account value is multiplied by $1.06$, meaning it increases by $6\\%$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Confuses percentage growth with a fixed dollar amount.\n• Choice C: Interprets $1.06$ as $106\\%$ growth instead of $6\\%$ growth (the $1$ represents keeping the original, the $0.06$ is the growth).\n• Choice D: Confuses the growth factor with the account value.\n\n**Test Day Takeaway:** In $P(1 + r)^t$, the growth rate $r$ is the base minus $1$, expressed as a percentage.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  question: "Line $j$ passes through the origin and is parallel to the line $4x + 5y = 20$. What is the slope of line $j$? Express your answer as a fraction.",
  correctAnswer: "-4/5",
  explanation: "**SAT Pattern: Parallel Lines and Standard Form**\n\n**The correct answer is $-\\frac{4}{5}$.**\n\n**The Fast Way (15 seconds):** Rewrite $4x + 5y = 20$ as $y = -\\frac{4}{5}x + 4$. Parallel lines have the same slope: $-\\frac{4}{5}$.\n\n**The Full Solution:**\nConvert $4x + 5y = 20$ to slope-intercept form:\n$5y = -4x + 20$\n$y = -\\frac{4}{5}x + 4$\n\nThe slope is $-\\frac{4}{5}$. Parallel lines have equal slopes, so line $j$ also has slope $-\\frac{4}{5}$.\n\n**Common Mistakes to Avoid:**\n• Reading the coefficient of $x$ as $\\frac{4}{5}$ (forgetting the negative).\n• Using the negative reciprocal $\\frac{5}{4}$ (that's for perpendicular lines).\n\n**Verification:** Line $j$ through origin with slope $-\\frac{4}{5}$: $y = -\\frac{4}{5}x$. This is parallel to $y = -\\frac{4}{5}x + 4$ since slopes match. \\checkmark\n\n**Test Day Takeaway:** Parallel lines have the same slope. Convert to $y = mx + b$ to find it.",
  skills: ["slope", "linear-functions"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The median of the data set $\\{3, 7, 10, x, 18, 22\\}$ (arranged in order) is $12$. What is the value of $x$?",
  choices: [
    { id: "A", text: "$12$" },
    { id: "B", text: "$14$" },
    { id: "C", text: "$15$" },
    { id: "D", text: "$16$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Median Calculation**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** With $6$ values, the median is the average of the $3$rd and $4$th values: $\\frac{10 + x}{2} = 12$, so $10 + x = 24$ and $x = 14$.\n\n**The Full Solution:**\nFor a data set with $6$ values in order, the median is the average of the $3$rd and $4$th values.\n\nThe ordered data is: $3, 7, 10, x, 18, 22$ (given that this is already in order).\nThe $3$rd value is $10$ and the $4$th value is $x$.\n\n$\\text{Median} = \\frac{10 + x}{2} = 12$\n$10 + x = 24$\n$x = 14$\n\nCheck that the order is maintained: $3, 7, 10, 14, 18, 22$ \\checkmark (all in increasing order).\n\n**Why the wrong answers are tempting:**\n• Choice A: Assumes $x$ must equal the median.\n• Choice C: Averages $10$ and $x$ but solves $\\frac{10 + x}{2} = 12.5$ by mistake.\n• Choice D: Computes $18 - 2 = 16$ using nearby values.\n\n**Test Day Takeaway:** For an even number of data points, the median is the average of the two middle values.",
  skills: ["statistics"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  question: "If $f(x) = 3x^2 + 2x - 8$ and $g(x) = x - 2$, what is $f(x) - g(x)$?",
  choices: [
    { id: "A", text: "$3x^2 + x - 6$" },
    { id: "B", text: "$3x^2 + x - 10$" },
    { id: "C", text: "$3x^2 + 3x - 10$" },
    { id: "D", text: "$3x^2 + 3x - 6$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Operations**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** $f(x) - g(x) = (3x^2 + 2x - 8) - (x - 2) = 3x^2 + 2x - 8 - x + 2 = 3x^2 + x - 6$.\n\n**The Full Solution:**\n$f(x) - g(x) = (3x^2 + 2x - 8) - (x - 2)$\n\nDistribute the negative sign:\n$= 3x^2 + 2x - 8 - x + 2$\n\nCombine like terms:\n$= 3x^2 + (2x - x) + (-8 + 2)$\n$= 3x^2 + x - 6$\n\n**Why the wrong answers are tempting:**\n• Choice B: Subtracts $-2$ incorrectly, getting $-8 - 2 = -10$ instead of $-8 + 2 = -6$.\n• Choice C: Gets $2x + x = 3x$ (adding instead of subtracting) and also $-10$.\n• Choice D: Gets $3x$ in the middle but the correct constant.\n\n**Test Day Takeaway:** When subtracting a function, distribute the negative to every term. The most common error is forgetting $-(- 2) = +2$.",
  skills: ["polynomial-operations", "function-interpretation"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  question: "If $4x^2 + 12x + 9 = 0$ and $x = a$ is the solution, what is the value of $2a + 3$?",
  choices: [
    { id: "A", text: "$-3$" },
    { id: "B", text: "$0$" },
    { id: "C", text: "$\\frac{3}{2}$" },
    { id: "D", text: "$3$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Perfect Square Trinomial**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $4x^2 + 12x + 9 = (2x + 3)^2 = 0$, so $2x + 3 = 0$ and $x = -\\frac{3}{2}$. Then $2a + 3 = 2(-\\frac{3}{2}) + 3 = -3 + 3 = 0$.\n\n**The Full Solution:**\nRecognize the perfect square: $4x^2 + 12x + 9 = (2x)^2 + 2(2x)(3) + 3^2 = (2x + 3)^2$.\n\nSet equal to zero:\n$(2x + 3)^2 = 0$\n$2x + 3 = 0$\n$x = -\\frac{3}{2}$\n\nSo $a = -\\frac{3}{2}$, and $2a + 3 = 2(-\\frac{3}{2}) + 3 = -3 + 3 = 0$.\n\nSince this is a perfect square, there is only one solution: $a = -\\frac{3}{2}$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Computes $2(-\\frac{3}{2}) = -3$ but forgets to add $3$.\n• Choice C: Gives $|a| = \\frac{3}{2}$ as the answer.\n• Choice D: Reads the constant from the factored form as the answer.\n\n**Test Day Takeaway:** Recognizing perfect square trinomials saves time. If the question asks for an expression involving $x$, you may not need to find $x$ itself.",
  skills: ["factoring", "quadratic-equations"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  question: "The circle $(x - 2)^2 + (y + 3)^2 = 36$ and the line $y = -3$ intersect at two points. What is the distance between these two points?",
  choices: [
    { id: "A", text: "$6$" },
    { id: "B", text: "$10$" },
    { id: "C", text: "$12$" },
    { id: "D", text: "$36$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Circle-Line Intersection**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** The center is $(2, -3)$ and $y = -3$ passes through the center (since the center's $y$-coordinate is $-3$). So the chord is a diameter. Radius $= 6$, diameter $= 12$.\n\n**The Full Solution:**\nThe circle has center $(2, -3)$ and radius $\\sqrt{36} = 6$.\n\nSubstitute $y = -3$ into the circle equation:\n$(x - 2)^2 + (-3 + 3)^2 = 36$\n$(x - 2)^2 + 0 = 36$\n$(x - 2)^2 = 36$\n$x - 2 = \\pm 6$\n$x = 8$ or $x = -4$\n\nThe two intersection points are $(8, -3)$ and $(-4, -3)$.\nDistance $= 8 - (-4) = 12$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Gives the radius instead of the diameter.\n• Choice B: Computes $8 + 2 = 10$ or similar error.\n• Choice D: Gives $r^2 = 36$ instead of the distance.\n\n**Test Day Takeaway:** When a horizontal or vertical line passes through the center of a circle, the chord is a diameter. Diameter $= 2r$.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  question: "If $\\left(\\frac{x^3}{\\sqrt{x}}\\right)^2 = x^k$ for $x > 0$, what is the value of $k$?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $5$.**\n\n**The Fast Way (15 seconds):** Inside: $\\frac{x^3}{x^{1/2}} = x^{3 - 1/2} = x^{5/2}$. Then $(x^{5/2})^2 = x^5$. So $k = 5$.\n\n**The Full Solution:**\nSimplify inside the parentheses:\n$\\frac{x^3}{\\sqrt{x}} = \\frac{x^3}{x^{1/2}} = x^{3 - 1/2} = x^{5/2}$\n\nRaise to the power of $2$:\n$(x^{5/2})^2 = x^{(5/2) \\cdot 2} = x^5$\n\nSo $k = 5$.\n\n**Common Mistakes to Avoid:**\n• Writing $\\sqrt{x} = x^2$ instead of $x^{1/2}$.\n• Adding exponents when dividing (should subtract) or adding when raising to a power (should multiply).\n\n**Verification:** $\\left(\\frac{x^3}{\\sqrt{x}}\\right)^2 = \\left(x^{5/2}\\right)^2 = x^5$ \\checkmark\n\n**Test Day Takeaway:** When simplifying nested exponents: first simplify inside parentheses using division (subtract exponents), then apply the outer exponent (multiply).",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  question: "The quadratic equation $2x^2 + bx + 18 = 0$ has exactly one real solution. If $b > 0$, what is the value of $b$?",
  choices: [
    { id: "A", text: "$6$" },
    { id: "B", text: "$9$" },
    { id: "C", text: "$12$" },
    { id: "D", text: "$18$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Discriminant Equals Zero**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** Discriminant $= 0$: $b^2 - 4(2)(18) = 0$, so $b^2 = 144$ and $b = 12$ (since $b > 0$).\n\n**The Full Solution:**\nA quadratic has exactly one real solution when the discriminant is zero:\n$b^2 - 4ac = 0$\n\nWith $a = 2$, $c = 18$:\n$b^2 - 4(2)(18) = 0$\n$b^2 - 144 = 0$\n$b^2 = 144$\n$b = \\pm 12$\n\nSince $b > 0$: $b = 12$.\n\nVerification: $2x^2 + 12x + 18 = 0 \\Rightarrow x^2 + 6x + 9 = 0 \\Rightarrow (x + 3)^2 = 0$, so $x = -3$ (one solution) \\checkmark\n\n**Why the wrong answers are tempting:**\n• Choice A: Computes $\\sqrt{36} = 6$, using $4(2)(18) = 36$ instead of $144$.\n• Choice B: Uses $\\frac{b^2}{4a} = 18$ and solves for $b$ incorrectly.\n• Choice D: Confuses $b$ with $c = 18$.\n\n**Test Day Takeaway:** One real solution means $b^2 - 4ac = 0$. Solve for the unknown and check the sign constraint.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  question: "The function $f(x) = a(x + 2)^2 - 10$ passes through the point $(1, 8)$. What is the $y$-intercept of $f(x)$?",
  choices: [
    { id: "A", text: "$-2$" },
    { id: "B", text: "$0$" },
    { id: "C", text: "$-6$" },
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Quadratic Vertex Form Application**\n\n**Choice A is correct.**\n\n**The Fast Way (25 seconds):** Use $(1, 8)$: $8 = a(3)^2 - 10 = 9a - 10$, so $9a = 18$ and $a = 2$. $y$-intercept $= f(0) = 2(2)^2 - 10 = 8 - 10 = -2$.\n\n**The Full Solution:**\nSubstitute the point $(1, 8)$ into $f(x) = a(x + 2)^2 - 10$:\n$8 = a(1 + 2)^2 - 10$\n$8 = 9a - 10$\n$18 = 9a$\n$a = 2$\n\nFind the $y$-intercept by evaluating $f(0)$:\n$f(0) = 2(0 + 2)^2 - 10 = 2(4) - 10 = 8 - 10 = -2$\n\nVerification: $f(1) = 2(3)^2 - 10 = 18 - 10 = 8$ \\checkmark\n\n**Why the wrong answers are tempting:**\n• Choice B: Guesses the $y$-intercept is zero.\n• Choice C: Uses $a = 1$ instead of $a = 2$, getting $1(4) - 10 = -6$.\n• Choice D: Gets the right magnitude but wrong sign.\n\n**Test Day Takeaway:** Find $a$ first from the given point, then evaluate $f(0)$ for the $y$-intercept.",
  skills: ["vertex-form", "quadratic-equations", "coordinate-geometry"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  question: "If $(4x - 5)(2x + k) = 8x^2 + 18x - 35$ for all values of $x$, what is the value of $k$?",
  correctAnswer: "7",
  explanation: "**SAT Pattern: Matching Polynomial Coefficients**\n\n**The correct answer is $7$.**\n\n**The Fast Way (20 seconds):** Look at the constant term: $(-5)(k) = -35$, so $k = 7$. Verify the $x$-coefficient: $4(7) - 10 = 18$ \\checkmark.\n\n**The Full Solution:**\nExpand: $(4x - 5)(2x + k) = 8x^2 + 4kx - 10x - 5k = 8x^2 + (4k - 10)x - 5k$\n\nMatch with $8x^2 + 18x - 35$:\n- constant: $-5k = -35 \\Rightarrow k = 7$\n- $x$-coefficient: $4(7) - 10 = 28 - 10 = 18$ \\checkmark\n\n**Common Mistakes to Avoid:**\n• Forgetting the cross terms when expanding.\n• Getting $k = 7$ from the constant but not verifying with the $x$-coefficient.\n\n**Verification:** $(4x - 5)(2x + 7) = 8x^2 + 28x - 10x - 35 = 8x^2 + 18x - 35$ \\checkmark\n\n**Test Day Takeaway:** Match any coefficient to find the unknown, then verify with another coefficient for consistency.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  question: "Triangle $PQR$ is a right triangle with the right angle at $Q$. If $PQ = 5\\sqrt{3}$ and $QR = 5$, what is the area of triangle $PQR$?",
  choices: [
    { id: "A", text: "$\\frac{25}{2}$" },
    { id: "B", text: "$\\frac{25\\sqrt{3}}{2}$" },
    { id: "C", text: "$25$" },
    { id: "D", text: "$25\\sqrt{3}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle Area with Surds**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** The legs are $PQ = 5\\sqrt{3}$ and $QR = 5$. Area $= \\frac{1}{2}(5\\sqrt{3})(5) = \\frac{25\\sqrt{3}}{2}$.\n\n**The Full Solution:**\nIn a right triangle, the area is $\\frac{1}{2} \\times \\text{leg}_1 \\times \\text{leg}_2$.\n\nThe right angle is at $Q$, so $PQ$ and $QR$ are the legs.\n\nArea $= \\frac{1}{2} \\times 5\\sqrt{3} \\times 5 = \\frac{1}{2} \\times 25\\sqrt{3} = \\frac{25\\sqrt{3}}{2}$\n\n**Why the wrong answers are tempting:**\n• Choice A: Computes $\\frac{1}{2}(5)(5) = \\frac{25}{2}$, dropping the $\\sqrt{3}$.\n• Choice C: Computes $5 \\times 5 = 25$, forgetting both $\\frac{1}{2}$ and $\\sqrt{3}$.\n• Choice D: Forgets the $\\frac{1}{2}$, giving $5\\sqrt{3} \\times 5 = 25\\sqrt{3}$.\n\n**Test Day Takeaway:** In a right triangle, the two legs are the base and height. Don't forget the $\\frac{1}{2}$ and keep the radical through the calculation.",
  skills: ["triangles", "area", "radical-expressions"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  question: "If $27^{x-1} = 9^{2x+3}$, what is the value of $x$?",
  correctAnswer: "-9",
  explanation: "**SAT Pattern: Exponential Equations with Common Base**\n\n**The correct answer is $-9$.**\n\n**The Fast Way (20 seconds):** $27 = 3^3$ and $9 = 3^2$. So $3^{3(x-1)} = 3^{2(2x+3)}$, meaning $3x - 3 = 4x + 6$ and $x = -9$.\n\n**The Full Solution:**\nConvert to base $3$:\n$27^{x-1} = (3^3)^{x-1} = 3^{3(x-1)} = 3^{3x-3}$\n$9^{2x+3} = (3^2)^{2x+3} = 3^{2(2x+3)} = 3^{4x+6}$\n\nSince the bases are equal, set exponents equal:\n$3x - 3 = 4x + 6$\n$-3 - 6 = 4x - 3x$\n$-9 = x$\n\nVerification: Left: $27^{-9-1} = 27^{-10} = 3^{-30}$.\nRight: $9^{2(-9)+3} = 9^{-15} = 3^{-30}$ \\checkmark\n\n**Common Mistakes to Avoid:**\n• Writing $27 = 3^3$ but $9 = 3^3$ (should be $3^2$).\n• Distributing incorrectly: $2(2x + 3) = 4x + 6$, not $4x + 3$.\n\n**Verification:** $3(-9) - 3 = -30$ and $4(-9) + 6 = -30$ \\checkmark\n\n**Test Day Takeaway:** When both sides can be written as powers of the same base, set the exponents equal and solve.",
  skills: ["exponent-rules", "solving-equations"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A delivery truck travels 156 miles on 12 gallons of fuel. At this rate, how many gallons of fuel are needed to travel 390 miles?",
  choices: [
    { id: "A", text: "$13$" },
    { id: "B", text: "$26$" },
    { id: "C", text: "$30$" },
    { id: "D", text: "$32.5$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Proportional Reasoning**\n\n**Choice C is correct.**\n\n**The Fast Way (15s):** Rate $= \\frac{156}{12} = 13$ miles per gallon. Gallons needed $= \\frac{390}{13} = 30$.\n\n**The Full Solution:**\nMiles per gallon: $\\frac{156}{12} = 13$ mpg.\nFor 390 miles: $\\frac{390}{13} = 30$ gallons.\n\n**Why the wrong answers are tempting:**\n• A: Gives the miles-per-gallon rate, not the gallons needed.\n• B: Divides 390 by 15 (wrong rate).\n• D: Divides 390 by 12.\n\n**Test Day Takeaway:** Find the unit rate first, then use it to solve for the unknown quantity.",
  skills: ["ratios", "word-problems"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A recipe calls for $\\frac{3}{4}$ cup of sugar to make 12 cookies. How many cups of sugar are needed to make 80 cookies?",
  choices: [
    { id: "A", text: "$4$" },
    { id: "B", text: "$5$" },
    { id: "C", text: "$6$" },
    { id: "D", text: "$15$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Proportional Reasoning**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** Scale factor: $\\frac{80}{12} = \\frac{20}{3}$. Sugar $= \\frac{3}{4} \\times \\frac{20}{3} = \\frac{20}{4} = 5$ cups.\n\n**The Full Solution:**\nSet up proportion: $\\frac{3/4}{12} = \\frac{x}{80}$.\n$x = \\frac{3}{4} \\times \\frac{80}{12} = \\frac{3 \\times 80}{4 \\times 12} = \\frac{240}{48} = 5$.\n\n**Why the wrong answers are tempting:**\n• A: Computes $\\frac{80}{12} \\approx 6.67$ and rounds to a nearby whole number.\n• C: Uses $\\frac{80}{12} \\approx 6.67$ and rounds up.\n• D: Multiplies $\\frac{3}{4} \\times 20 = 15$ (forgets to divide by 3).\n\n**Test Day Takeaway:** Set up a proportion or find the unit rate. Keep fractions until the final step to avoid rounding errors.",
  skills: ["ratios", "word-problems"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  question: "Which expression is equivalent to $(3x^2 + 7x - 4) - (x^2 - 3x + 5)$?",
  choices: [
    { id: "A", text: "$2x^2 + 4x + 1$" },
    { id: "B", text: "$2x^2 + 10x - 9$" },
    { id: "C", text: "$4x^2 + 4x + 1$" },
    { id: "D", text: "$4x^2 + 10x - 9$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Subtracting Polynomials**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** Distribute the negative: $3x^2 + 7x - 4 - x^2 + 3x - 5$. Combine: $(3-1)x^2 + (7+3)x + (-4-5) = 2x^2 + 10x - 9$.\n\n**The Full Solution:**\n$(3x^2 + 7x - 4) - (x^2 - 3x + 5)$\n$= 3x^2 + 7x - 4 - x^2 + 3x - 5$\n$= 2x^2 + 10x - 9$.\n\n**Why the wrong answers are tempting:**\n• A: Subtracts the $x$ terms instead of adding ($7 - 3 = 4$) and the constants ($-4 + 5 = 1$).\n• C: Adds the $x^2$ coefficients instead of subtracting ($3 + 1 = 4$).\n• D: Adds all coefficients without distributing the negative sign.\n\n**Test Day Takeaway:** When subtracting polynomials, distribute the negative sign to EVERY term in the second polynomial.",
  skills: ["polynomial-operations"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  question: "The function $f$ is defined by $f(x) = 5x - 3$. What is the value of $f(4) - f(1)$?",
  choices: [
    { id: "A", text: "$3$" },
    { id: "B", text: "$12$" },
    { id: "C", text: "$15$" },
    { id: "D", text: "$19$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice C is correct.**\n\n**The Fast Way (15s):** $f(4) = 5(4) - 3 = 17$. $f(1) = 5(1) - 3 = 2$. Difference: $17 - 2 = 15$.\n\n**The Full Solution:**\n$f(4) = 20 - 3 = 17$.\n$f(1) = 5 - 3 = 2$.\n$f(4) - f(1) = 17 - 2 = 15$.\n\n**Why the wrong answers are tempting:**\n• A: Computes $f(4-1) = f(3) = 12$ and then subtracts something.\n• B: Computes $f(3) = 12$ directly (substituting the difference of inputs).\n• D: Adds $f(4) + f(1) = 17 + 2 = 19$.\n\n**Test Day Takeaway:** $f(a) - f(b) \neq f(a - b)$. Evaluate each function value separately, then subtract.",
  skills: ["function-interpretation"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  question: "If $3(x + 4) = 5x - 6$, what is the value of $x$?",
  choices: [
    { id: "A", text: "$3$" },
    { id: "B", text: "$6$" },
    { id: "C", text: "$9$" },
    { id: "D", text: "$18$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Solving Linear Equations**\n\n**Choice C is correct.**\n\n**The Fast Way (15s):** $3x + 12 = 5x - 6$. Then $12 + 6 = 5x - 3x$, so $18 = 2x$, giving $x = 9$.\n\n**The Full Solution:**\n$3(x + 4) = 5x - 6$\n$3x + 12 = 5x - 6$\n$12 + 6 = 5x - 3x$\n$18 = 2x$\n$x = 9$.\nCheck: $3(9 + 4) = 3(13) = 39$ and $5(9) - 6 = 45 - 6 = 39$. ✓\n\n**Why the wrong answers are tempting:**\n• A: Divides 18 by 6 instead of 2.\n• B: Divides 18 by 3.\n• D: Uses 18 as the answer without dividing by 2.\n\n**Test Day Takeaway:** Distribute, collect variable terms on one side, constants on the other, then divide.",
  skills: ["solving-equations"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A researcher wants to estimate the proportion of households in a city that have solar panels. She surveys a random sample of 400 households and finds that 12% have solar panels, with a margin of error of $\\pm 3\\%$ at a 95% confidence level. Which of the following is the most appropriate conclusion?",
  choices: [
    { id: "A", text: "Exactly 12% of all households in the city have solar panels." },
    { id: "B", text: "It is plausible that between 9% and 15% of all households in the city have solar panels." },
    { id: "C", text: "Between 9% and 15% of the 400 surveyed households have solar panels." },
    { id: "D", text: "95% of all households in the city have solar panels." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Margin of Error Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** $12\\% \\pm 3\\% = (9\\%, 15\\%)$. This interval estimates the true population proportion. \"Plausible\" correctly conveys the uncertainty.\n\n**The Full Solution:**\nThe confidence interval is $12\\% - 3\\% = 9\\%$ to $12\\% + 3\\% = 15\\%$.\nThis interval applies to ALL households in the city (the population), not just the sample.\nThe sample itself had exactly 12% with solar panels.\n\n**Why the wrong answers are tempting:**\n• A: A sample gives an estimate, never an exact value for the population.\n• C: The interval is for the population, not the sample (the sample result is exactly 12%).\n• D: Misinterprets the confidence level.\n\n**Test Day Takeaway:** A confidence interval is a plausible range for the POPULATION parameter, not a description of the sample.",
  skills: ["margin-of-error", "statistics"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A gym charges a one-time enrollment fee of $\\$75$ plus $\\$40$ per month. A second gym charges no enrollment fee but $\\$55$ per month. After how many months will the two gyms cost the same total amount?",
  choices: [
    { id: "A", text: "$3$" },
    { id: "B", text: "$5$" },
    { id: "C", text: "$7$" },
    { id: "D", text: "$15$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Setting Two Linear Expressions Equal**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** Set equal: $75 + 40m = 55m$. Then $75 = 15m$, so $m = 5$.\n\n**The Full Solution:**\nGym 1: $75 + 40m$.\nGym 2: $55m$.\nSet equal: $75 + 40m = 55m$.\n$75 = 55m - 40m = 15m$.\n$m = 5$.\nCheck: Gym 1: $75 + 200 = 275$. Gym 2: $55 \\times 5 = 275$. ✓\n\n**Why the wrong answers are tempting:**\n• A: Divides 75 by 25 or uses wrong rates.\n• C: Divides 75 by a wrong difference.\n• D: Divides 75 by 5 instead of 15.\n\n**Test Day Takeaway:** To find when two plans cost the same, set their cost expressions equal and solve.",
  skills: ["word-problems", "solving-equations", "linear-functions"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A rocket's height $h$, in meters, after $t$ seconds is modeled by $h(t) = -5(t - 8)^2 + 400$. What is the height of the rocket at launch ($t = 0$)?",
  choices: [
    { id: "A", text: "$-400$ meters" },
    { id: "B", text: "$0$ meters" },
    { id: "C", text: "$80$ meters" },
    { id: "D", text: "$400$ meters" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Evaluating Vertex Form at a Specific Input**\n\n**Choice C is correct.**\n\n**The Fast Way (15s):** $h(0) = -5(0 - 8)^2 + 400 = -5(64) + 400 = -320 + 400 = 80$.\n\n**The Full Solution:**\n$h(0) = -5(-8)^2 + 400 = -5(64) + 400 = -320 + 400 = 80$ meters.\nNote: The maximum height is 400 meters at $t = 8$, but the launch height is 80 meters.\n\n**Why the wrong answers are tempting:**\n• A: Computes $-5(64) = -320$ and subtracts 400.\n• B: Assumes launch height is 0 (ground level).\n• D: Gives the maximum height (vertex value) instead of the launch height.\n\n**Test Day Takeaway:** The vertex value ($k$) is the max/min, not necessarily the starting value. To find the starting value, plug in $t = 0$.",
  skills: ["vertex-form", "function-interpretation"]
},
{
  id: 9,
  type: "fill-in",
  difficulty: "medium",
  question: "If $\\frac{2x + 5}{3} = \\frac{x + 14}{3}$ for all values of $x$, what value of $x$ satisfies this equation?",
  correctAnswer: "9",
  explanation: "**The correct answer is $9$.**\n\n**The Full Solution:**\nSince both sides have the same denominator, set the numerators equal:\n$2x + 5 = x + 14$.\n$2x - x = 14 - 5$.\n$x = 9$.\n\n**Verification:** Left: $\\frac{2(9) + 5}{3} = \\frac{23}{3}$. Right: $\\frac{9 + 14}{3} = \\frac{23}{3}$. ✓\n\n**Common Mistakes:**\n• Cross-multiplying unnecessarily (both denominators are already 3).\n• Getting the sign wrong: $14 + 5 = 19$ instead of $14 - 5 = 9$.",
  skills: ["solving-equations"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A survey of 500 students asked about their grade level and whether they participate in a sport.\n\n| | Plays Sport | No Sport | Total |\n|---|---|---|---|\n| 9th Grade | 90 | 60 | 150 |\n| 10th Grade | 110 | 40 | 150 |\n| 11th Grade | 75 | 125 | 200 |\n| Total | 275 | 225 | 500 |\n\nAmong 10th graders, what fraction plays a sport?",
  choices: [
    { id: "A", text: "$\\frac{110}{500}$" },
    { id: "B", text: "$\\frac{110}{275}$" },
    { id: "C", text: "$\\frac{110}{150}$" },
    { id: "D", text: "$\\frac{150}{275}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (10s):** \"Among 10th graders\" restricts to the 10th Grade row: total = 150. Plays sport = 110. Fraction $= \\frac{110}{150} = \\frac{11}{15}$.\n\n**The Full Solution:**\n$P(\\text{sport} | \\text{10th grade}) = \\frac{110}{150}$.\n\n**Why the wrong answers are tempting:**\n• A: Uses the grand total (500) as the denominator.\n• B: Uses the total who play sports (275) as the denominator.\n• D: Gives $\\frac{\\text{10th grade total}}{\\text{sport total}}$.\n\n**Test Day Takeaway:** \"Among\" or \"given\" a group means restrict to that row or column. The group total is the denominator.",
  skills: ["probability", "two-way-tables"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The equation $y = -3x + 12$ represents line $p$ in the $xy$-plane. Line $q$ is parallel to line $p$ and passes through the origin. Which of the following is the equation of line $q$?",
  choices: [
    { id: "A", text: "$y = -3x$" },
    { id: "B", text: "$y = 3x$" },
    { id: "C", text: "$y = \\frac{1}{3}x$" },
    { id: "D", text: "$y = -3x + 12$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Parallel Lines — Same Slope**\n\n**Choice A is correct.**\n\n**The Fast Way (10s):** Parallel lines have the same slope. Slope of $p$ is $-3$. Line $q$ passes through the origin, so $y$-intercept is 0. Equation: $y = -3x$.\n\n**The Full Solution:**\nLine $p$: $y = -3x + 12$, slope $= -3$.\nParallel → same slope: $m_q = -3$.\nPasses through $(0, 0)$: $b = 0$.\nEquation of $q$: $y = -3x + 0 = -3x$.\n\n**Why the wrong answers are tempting:**\n• B: Uses the opposite sign of the slope.\n• C: Uses the negative reciprocal (perpendicular, not parallel).\n• D: This is line $p$ itself, which doesn't pass through the origin.\n\n**Test Day Takeaway:** Parallel = same slope, different intercept. Check if the line passes through the given point.",
  skills: ["slope", "linear-functions", "coordinate-geometry"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  question: "The equation $2(5x - 4) + 3 = ax + 2$ has no solution. What is the value of $a$?",
  correctAnswer: "10",
  explanation: "**The correct answer is $10$.**\n\n**The Full Solution:**\nExpand the left side: $10x - 8 + 3 = 10x - 5$.\nSo the equation is $10x - 5 = ax + 2$.\nRearrange: $(10 - a)x = 7$.\nFor no solution, the coefficient of $x$ must be 0 while the right side is nonzero:\n$10 - a = 0$, so $a = 10$.\nCheck: $0 \\cdot x = 7$ → $0 = 7$, which is a contradiction. No solution. ✓\n\n**Common Mistakes:**\n• Solving for $x$ instead of $a$.\n• Setting $a$ to make the equation have infinitely many solutions instead of no solutions.",
  skills: ["solving-equations", "linear-functions"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The equation $x^2 + y^2 - 10x + 6y + 9 = 0$ represents a circle in the $xy$-plane. What are the coordinates of the center of the circle?",
  choices: [
    { id: "A", text: "$(5, -3)$" },
    { id: "B", text: "$(-5, 3)$" },
    { id: "C", text: "$(10, -6)$" },
    { id: "D", text: "$(-10, 6)$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Complete the Square — Circle Center**\n\n**Choice A is correct.**\n\n**The Fast Way (20s):** Complete the square:\n$(x^2 - 10x + 25) + (y^2 + 6y + 9) = -9 + 25 + 9$\n$(x - 5)^2 + (y + 3)^2 = 25$.\nCenter: $(5, -3)$.\n\n**The Full Solution:**\nGroup: $(x^2 - 10x) + (y^2 + 6y) = -9$.\nComplete the square for $x$: half of $-10$ is $-5$, squared is $25$.\nComplete the square for $y$: half of $6$ is $3$, squared is $9$.\n$(x-5)^2 + (y+3)^2 = -9 + 25 + 9 = 25$.\nCenter: $(5, -3)$, radius $= 5$.\n\n**Why the wrong answers are tempting:**\n• B: Uses wrong signs for the center ($x$ term $-10x$ → center $+5$, not $-5$).\n• C: Uses the coefficients directly ($-10, +6$) without halving.\n• D: Both wrong sign and not halved.\n\n**Test Day Takeaway:** In $(x-h)^2 + (y-k)^2 = r^2$, the center is $(h, k)$. The signs in the factored form are opposite to the original coefficients.",
  skills: ["circle-equations", "solving-equations"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The quadratic function $f(x) = -2x^2 + 16x - 24$ models the daily profit, in hundreds of dollars, of a business, where $x$ is the number of items produced (in hundreds). How many items should be produced to maximize the daily profit?",
  choices: [
    { id: "A", text: "$200$" },
    { id: "B", text: "$400$" },
    { id: "C", text: "$600$" },
    { id: "D", text: "$800$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex of a Parabola — Optimization**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** Vertex $x = -\\frac{b}{2a} = -\\frac{16}{2(-2)} = -\\frac{16}{-4} = 4$. Since $x$ is in hundreds, this means $4 \\times 100 = 400$ items.\n\n**The Full Solution:**\nFor $f(x) = -2x^2 + 16x - 24$: $a = -2$, $b = 16$.\nVertex at $x = -\\frac{16}{-4} = 4$ (hundreds of items).\nSince $a < 0$, the parabola opens downward, so the vertex is a maximum.\n$4$ hundred items $= 400$ items.\n\n**Why the wrong answers are tempting:**\n• A: Divides 16 by 8 instead of 4.\n• C: Computes $-b/a = -16/(-2) = 8$ (forgets the factor of 2).\n• D: Uses $b = 16$ and multiplies by 100/2.\n\n**Test Day Takeaway:** For $ax^2 + bx + c$, the vertex is at $x = -b/(2a)$. Read the units carefully — the answer may need conversion.",
  skills: ["vertex-form", "quadratic-equations", "function-interpretation"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  question: "In right triangle $DEF$, angle $F$ is the right angle, $DE = 41$, and $DF = 40$. What is the value of $\\sin(D)$?",
  choices: [
    { id: "A", text: "$\\frac{9}{41}$" },
    { id: "B", text: "$\\frac{40}{41}$" },
    { id: "C", text: "$\\frac{9}{40}$" },
    { id: "D", text: "$\\frac{41}{40}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Right Triangle Trigonometry**\n\n**Choice A is correct.**\n\n**The Fast Way (25s):** Right angle at $F$, so $DE = 41$ is the hypotenuse. Find $EF$: $EF = \\sqrt{41^2 - 40^2} = \\sqrt{1681 - 1600} = \\sqrt{81} = 9$. For angle $D$: opposite $= EF = 9$, hypotenuse $= DE = 41$. $\\sin(D) = \\frac{9}{41}$.\n\n**The Full Solution:**\n$EF^2 = DE^2 - DF^2 = 1681 - 1600 = 81$.\n$EF = 9$.\nVerification: $9^2 + 40^2 = 81 + 1600 = 1681 = 41^2$. ✓\n$\\sin(D) = \\frac{\\text{opposite to } D}{\\text{hypotenuse}} = \\frac{EF}{DE} = \\frac{9}{41}$.\n\n**Why the wrong answers are tempting:**\n• B: Uses $DF = 40$ (adjacent to $D$) — this is $\\cos(D)$.\n• C: Uses $\\frac{EF}{DF} = \\frac{9}{40}$ — this is $\\tan(D)$.\n• D: Inverts the cosine ratio.\n\n**Test Day Takeaway:** Draw the triangle, identify the hypotenuse (opposite the right angle), then use SOH-CAH-TOA for the specified angle.",
  skills: ["trigonometry", "triangles"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  question: "The equation $5x^2 - bx + 45 = 0$ has no real solutions. What is the greatest integer value of $b$?",
  choices: [
    { id: "A", text: "$29$" },
    { id: "B", text: "$30$" },
    { id: "C", text: "$31$" },
    { id: "D", text: "$900$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Discriminant — No Real Solutions**\n\n**Choice A is correct.**\n\n**The Fast Way (25s):** Discriminant $< 0$:\n$(-b)^2 - 4(5)(45) < 0$\n$b^2 - 900 < 0$\n$b^2 < 900$\n$|b| < 30$.\nGreatest integer: $b = 29$.\n\n**The Full Solution:**\nFor $5x^2 - bx + 45 = 0$: $a = 5$, the coefficient of $x$ is $-b$, and $c = 45$.\nDiscriminant $= (-b)^2 - 4(5)(45) = b^2 - 900$.\nNo real solutions: $b^2 < 900$, so $|b| < 30$.\nAt $b = 30$: discriminant $= 0$ (exactly one real solution — not \"no\" solutions).\nGreatest integer: $b = 29$.\n\n**Why the wrong answers are tempting:**\n• B: Uses $\\leq$ instead of $<$ (at $b = 30$ there IS a repeated root).\n• C: Off-by-one from the boundary.\n• D: Gives $b^2$ instead of $b$.\n\n**Test Day Takeaway:** No real solutions = discriminant $< 0$. At discriminant $= 0$, there's one real solution (not zero).",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  question: "A radioactive substance decays according to $A(t) = 200(0.84)^{t/3}$, where $A(t)$ is the amount in grams and $t$ is the time in years. By what percent does the substance decay every 3 years?",
  correctAnswer: "16",
  explanation: "**The correct answer is $16$.**\n\n**The Full Solution:**\nWhen $t$ increases by 3:\n$A(t+3) = 200(0.84)^{(t+3)/3} = 200(0.84)^{t/3} \\cdot 0.84 = 0.84 \\cdot A(t)$.\nEvery 3 years, the amount is multiplied by $0.84$.\nPercent decay $= 1 - 0.84 = 0.16 = 16\\%$.\n\n**Verification:** At $t = 0$: $A = 200$. At $t = 3$: $A = 200(0.84) = 168$.\nDecrease: $\\frac{200 - 168}{200} = \\frac{32}{200} = 0.16 = 16\\%$. ✓\n\n**Common Mistakes:**\n• Answering 84 (the retention factor, not the decay rate).\n• Finding the annual rate instead of the 3-year rate.",
  skills: ["exponential-functions", "percents"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  question: "Consider the system of equations.\n\n$2x - y + 3z = 8$\n$4x - 2y + 6z = 16$\n$6x - 3y + 9z = 24$\n\nHow many solutions $(x, y, z)$ does this system have?",
  choices: [
    { id: "A", text: "Zero" },
    { id: "B", text: "Exactly one" },
    { id: "C", text: "Exactly three" },
    { id: "D", text: "Infinitely many" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Counting Solutions — Dependent System**\n\n**Choice D is correct.**\n\n**The Fast Way (15s):** Equation 2 $= 2 \\times$ Equation 1: $2(2x - y + 3z) = 2(8) = 16$. ✓\nEquation 3 $= 3 \\times$ Equation 1: $3(2x - y + 3z) = 3(8) = 24$. ✓\nAll three equations are multiples of the same equation, so there's really only 1 independent equation in 3 unknowns → infinitely many solutions.\n\n**The Full Solution:**\nDivide Eq 2 by 2: $2x - y + 3z = 8$ (same as Eq 1).\nDivide Eq 3 by 3: $2x - y + 3z = 8$ (same as Eq 1).\nAll three equations are equivalent. One equation in three unknowns has infinitely many solutions.\n\n**Why the wrong answers are tempting:**\n• A: The system is consistent (all equations agree), so solutions exist.\n• B: One equation in three unknowns cannot determine a unique solution.\n• C: Linear systems can have 0, 1, or infinitely many solutions — never exactly 3.\n\n**Test Day Takeaway:** If all equations reduce to the same equation, the system is dependent (infinitely many solutions). Compare by dividing each equation by its leading coefficient.",
  skills: ["systems-of-equations"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  question: "A data set of 9 values is listed in order:\n\n$4, 6, 6, 8, 9, 11, 11, 13, 22$\n\nIf the value 22 is removed from the data set, which statement correctly describes the change?",
  choices: [
    { id: "A", text: "The mean decreases and the median decreases." },
    { id: "B", text: "The mean decreases and the median stays the same." },
    { id: "C", text: "The mean stays the same and the median decreases." },
    { id: "D", text: "The mean decreases and the median increases." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Effect of Removing an Outlier**\n\n**Choice A is correct.**\n\n**The Full Solution:**\nOriginal (9 values): Sum $= 4+6+6+8+9+11+11+13+22 = 90$. Mean $= \\frac{90}{9} = 10$. Median (5th value) $= 9$.\n\nAfter removing 22 (8 values): $4, 6, 6, 8, 9, 11, 11, 13$. Sum $= 68$. Mean $= \\frac{68}{8} = 8.5$. Median (average of 4th and 5th) $= \\frac{8+9}{2} = 8.5$.\n\nMean: $10 \\to 8.5$ (decreases by 1.5). ✓\nMedian: $9 \\to 8.5$ (decreases by 0.5). ✓\n\n**Why the wrong answers are tempting:**\n• B: The median seems resistant to outliers, but switching from odd to even count changes the median calculation, causing a small decrease here.\n• C: The mean clearly decreases when the largest value is removed.\n• D: Removing the largest value cannot increase the median.\n\n**Test Day Takeaway:** Removing a high outlier decreases the mean. The median may also shift, especially when the count changes from odd to even.",
  skills: ["statistics"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  question: "A cylinder has a radius of 5 and a height of 12. What is the total surface area of the cylinder? (Give your answer in terms of $\\pi$, as a coefficient times $\\pi$. For example, if the answer is $80\\pi$, enter $80$.)",
  correctAnswer: "170",
  explanation: "**The correct answer is $170$ (the surface area is $170\\pi$).**\n\n**The Full Solution:**\nTotal surface area of a cylinder: $2\\pi r^2 + 2\\pi rh$.\n$= 2\\pi(5)^2 + 2\\pi(5)(12)$\n$= 2\\pi(25) + 2\\pi(60)$\n$= 50\\pi + 120\\pi$\n$= 170\\pi$.\n\n**Verification:** Two circular bases: $2 \\times 25\\pi = 50\\pi$. Lateral surface: $2\\pi(5)(12) = 120\\pi$. Total: $170\\pi$. ✓\n\n**Common Mistakes:**\n• Giving $120\\pi$ (lateral surface only, forgetting the two circular bases).\n• Giving $145\\pi$ (adding only one base: $25\\pi + 120\\pi$).\n• Using the diameter instead of the radius in the formula.",
  skills: ["surface-area"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  question: "If 264 is $p\\%$ greater than 48, what is the value of $p$?",
  choices: [
    { id: "A", text: "$350$" },
    { id: "B", text: "$450$" },
    { id: "C", text: "$550$" },
    { id: "D", text: "$5.5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Percent Greater Than**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):**\n$48\\left(1 + \\frac{p}{100}\\right) = 264$.\n$1 + \\frac{p}{100} = \\frac{264}{48} = 5.5$.\n$\\frac{p}{100} = 4.5$.\n$p = 450$.\n\n**The Full Solution:**\n\"264 is $p\\%$ greater than 48\" means:\n$48 + \\frac{p}{100}(48) = 264$.\n$48\\left(1 + \\frac{p}{100}\\right) = 264$.\n$1 + \\frac{p}{100} = \\frac{264}{48} = 5.5$.\n$\\frac{p}{100} = 4.5$.\n$p = 450$.\n\n**Verification:** $48 + 450\\%$ of $48 = 48 + 216 = 264$. ✓\n\n**Why the wrong answers are tempting:**\n• A: Arithmetic error in computing $\\frac{264}{48}$.\n• C: Adds instead of subtracting: $\\frac{264}{48} = 5.5 \\to p = 550$.\n• D: Gives the ratio $\\frac{264}{48} = 5.5$ as the answer without converting.\n\n**Test Day Takeaway:** \"$A$ is $p\\%$ greater than $B$\" means $A = B(1 + p/100)$. Solve for $p$, and remember to subtract 1 before multiplying by 100.",
  skills: ["percents", "word-problems"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  question: "Let $f(x) = x + 5$ and $g(x) = x^2 - 4$. If $g(f(a)) = 60$, what is a positive value of $a$?",
  correctAnswer: "3",
  explanation: "**The correct answer is $3$.**\n\n**The Full Solution:**\n$f(a) = a + 5$.\n$g(f(a)) = (a + 5)^2 - 4 = 60$.\n$(a + 5)^2 = 64$.\n$a + 5 = \\pm 8$.\nPositive branch: $a + 5 = 8 \\Rightarrow a = 3$.\nNegative branch: $a + 5 = -8 \\Rightarrow a = -13$ (not positive).\n\n**Verification:** $f(3) = 8$. $g(8) = 64 - 4 = 60$. ✓\n\n**Common Mistakes:**\n• Solving $(a+5)^2 = 60$ instead of $(a+5)^2 = 64$.\n• Confusing $g(f(a))$ with $f(g(a))$.",
  skills: ["function-interpretation", "solving-equations"]
}
      ]
    }
  ]
};

export default practiceTest3;
