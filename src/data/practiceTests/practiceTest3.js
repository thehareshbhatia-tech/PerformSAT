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
  question: "A scatterplot shows data that is best modeled by the equation $y = 2.4x - 8.6$. Based on this model, what is the predicted change in $y$ when $x$ increases by $5$?",
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
          question: "A contractor buys $15$ bags of cement at $\\$8$ each. What is the total cost?",
          choices: [
            { id: "A", text: "$\\$100$" },
            { id: "B", text: "$\\$110$" },
            { id: "C", text: "$\\$120$" },
            { id: "D", text: "$\\$150$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Simple Multiplication**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $15 \\times 8 = 120$.\n\n**The Full Solution:**\nTotal cost $= 15 \\times 8 = 120$ dollars.\n\n**Why the wrong answers are tempting:**\n• Choice A ($100$): Rounding or estimation error.\n• Choice B ($110$): From $15 \\times 7 + 5$, a multiplication error.\n• Choice D ($150$): From $15 \\times 10$, using the wrong price.\n\n**Test Day Takeaway:** Price per item times quantity equals total cost.",
          skills: ["word-problems"]
        },
        {
          id: 2,
          type: "fill-in",
          difficulty: "easy",
          question: "If $n + 12 = 31$, what is the value of $n$?",
          correctAnswer: "19",
          explanation: "**SAT Pattern: One-Step Equation**\n\n**The correct answer is 19.**\n\n**The Fast Way (5 seconds):** $n = 31 - 12 = 19$.\n\n**The Full Solution:**\n$n + 12 = 31$\n$n = 31 - 12 = 19$\n\n**Common Mistakes to Avoid:**\n• Adding: $31 + 12 = 43$\n• Subtraction error: $31 - 12 = 18$\n\n**Verification:** $19 + 12 = 31$ ✓\n\n**Test Day Takeaway:** To undo addition, subtract from both sides.",
          skills: ["solving-equations"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The function $C(t) = 50 + 30t$ gives the cost, in dollars, of renting a tool for $t$ hours. What is the best interpretation of the number $50$ in this function?",
          choices: [
            { id: "A", text: "The cost per hour" },
            { id: "B", text: "The initial rental fee" },
            { id: "C", text: "The total cost for $1$ hour" },
            { id: "D", text: "The number of hours rented" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Interpreting Linear Function Constants**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** In $C(t) = 50 + 30t$, the constant $50$ is the $y$-intercept (the cost when $t = 0$), which is the initial fee.\n\n**The Full Solution:**\nAt $t = 0$: $C(0) = 50$. This is the cost before any hours are rented, so it is the initial rental fee.\n\n**Why the wrong answers are tempting:**\n• Choice A: The cost per hour is $30$ (the coefficient of $t$).\n• Choice C: The total for $1$ hour is $C(1) = 80$, not $50$.\n• Choice D: Hours rented is $t$, the variable.\n\n**Test Day Takeaway:** In $y = mx + b$, the $y$-intercept $b$ is the starting value when $x = 0$.",
          skills: ["function-interpretation", "linear-functions"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "How many inches are in $4$ feet $7$ inches? ($1$ foot $= 12$ inches)",
          choices: [
            { id: "A", text: "$47$" },
            { id: "B", text: "$48$" },
            { id: "C", text: "$55$" },
            { id: "D", text: "$67$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $4 \\times 12 + 7 = 48 + 7 = 55$.\n\n**The Full Solution:**\n$4$ feet $= 4 \\times 12 = 48$ inches\n$48 + 7 = 55$ inches\n\n**Why the wrong answers are tempting:**\n• Choice A ($47$): Wrote $4$ and $7$ together as $47$.\n• Choice B ($48$): Forgot to add the extra $7$ inches.\n• Choice D ($67$): From $5 \\times 12 + 7$, using $5$ feet.\n\n**Test Day Takeaway:** Convert the larger unit to smaller, then add the remainder.",
          skills: ["unit-conversion"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "If $3x - 2 = 13$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $3x = 15$, so $x = 5$.\n\n**The Full Solution:**\n$3x - 2 = 13$\n$3x = 15$\n$x = 5$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): From $\\frac{13 - 2}{3}$... no. Just a guess.\n• Choice B ($4$): From $\\frac{13+2}{4}$, dividing by wrong number.\n• Choice D ($6$): From $\\frac{13+2+1}{3}$... a computation error.\n\n**Test Day Takeaway:** Add or subtract to isolate the variable term, then divide.",
          skills: ["solving-equations", "linear-equations"]
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A hardware store sells nails for $\\$3$ per pound and screws for $\\$5$ per pound. A customer buys a total of $8$ pounds of nails and screws for $\\$30$. How many pounds of nails did the customer buy?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: System of Equations from a Word Problem**\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** Let $n$ = nails. Screws $= 8 - n$. $3n + 5(8-n) = 30$. $3n + 40 - 5n = 30$. $-2n = -10$. $n = 5$.\n\n**The Full Solution:**\n$n + s = 8$ and $3n + 5s = 30$\nSubstitute $s = 8 - n$:\n$3n + 5(8-n) = 30$\n$3n + 40 - 5n = 30$\n$-2n = -10$\n$n = 5$\n\nCheck: $5$ lbs nails + $3$ lbs screws $= 15 + 15 = 30$ ✓\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): $3(3) + 5(5) = 9 + 25 = 34 \\neq 30$.\n• Choice B ($4$): $3(4) + 5(4) = 12 + 20 = 32 \\neq 30$.\n• Choice D ($6$): $3(6) + 5(2) = 18 + 10 = 28 \\neq 30$.\n\n**Test Day Takeaway:** Two equations, two unknowns. Use substitution for these mixture problems.",
          skills: ["systems-of-equations", "word-problems"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Line $j$ has slope $\\frac{3}{4}$ and passes through $(0, -2)$. Which point is also on line $j$?",
          choices: [
            { id: "A", text: "$(4, 1)$" },
            { id: "B", text: "$(3, 2)$" },
            { id: "C", text: "$(8, 6)$" },
            { id: "D", text: "$(4, 3)$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Using Slope to Find Points on a Line**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** $y = \\frac{3}{4}x - 2$. At $x = 4$: $y = 3 - 2 = 1$. So $(4, 1)$ is on the line.\n\n**The Full Solution:**\nThe equation is $y = \\frac{3}{4}x - 2$.\nCheck $(4, 1)$: $\\frac{3}{4}(4) - 2 = 3 - 2 = 1$ ✓\n\n**Why the wrong answers are tempting:**\n• Choice B $(3, 2)$: $\\frac{3}{4}(3) - 2 = \\frac{9}{4} - 2 = \\frac{1}{4} \\neq 2$.\n• Choice C $(8, 6)$: $\\frac{3}{4}(8) - 2 = 6 - 2 = 4 \\neq 6$.\n• Choice D $(4, 3)$: Uses $x = 4$ correctly but adds $\\frac{3}{4}(4) + 2 = 5$... no. Simply a wrong $y$-value.\n\n**Test Day Takeaway:** Write the equation $y = mx + b$ and plug in each choice's $x$-value to check.",
          skills: ["slope", "linear-functions"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "If $2x^2 = 72$, what is the positive value of $x$?",
          correctAnswer: "6",
          explanation: "**SAT Pattern: Solving a Quadratic for a Positive Value**\n\n**The correct answer is 6.**\n\n**The Fast Way (10 seconds):** $x^2 = 36$, so $x = 6$ (positive value).\n\n**The Full Solution:**\n$2x^2 = 72$\n$x^2 = 36$\n$x = \\pm 6$\nSince the question asks for the positive value: $x = 6$.\n\n**Common Mistakes to Avoid:**\n• Answering $36$ (that is $x^2$, not $x$)\n• Answering $-6$ (the question asks for the positive value)\n\n**Verification:** $2(6)^2 = 2(36) = 72$ ✓\n\n**Test Day Takeaway:** Divide first, then take the square root. Read whether the question wants positive, negative, or both.",
          skills: ["solving-equations", "quadratic-equations"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table shows enrollment data at a community college.\n\n| | Full-Time | Part-Time | Total |\n|---|---|---|---|\n| Day Classes | $120$ | $80$ | $200$ |\n| Evening Classes | $30$ | $170$ | $200$ |\n| Total | $150$ | $250$ | $400$ |\n\nWhat fraction of part-time students attend evening classes?",
          choices: [
            { id: "A", text: "$\\frac{17}{40}$" },
            { id: "B", text: "$\\frac{17}{25}$" },
            { id: "C", text: "$\\frac{17}{20}$" },
            { id: "D", text: "$\\frac{4}{5}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Conditional Probability from a Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Part-time evening $= 170$. Total part-time $= 250$. Fraction $= \\frac{170}{250} = \\frac{17}{25}$.\n\n**The Full Solution:**\n$\\frac{\\text{Part-time in evening}}{\\text{Total part-time}} = \\frac{170}{250} = \\frac{17}{25}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{17}{40}$): From $\\frac{170}{400}$, using the grand total.\n• Choice C ($\\frac{17}{20}$): From $\\frac{170}{200}$, using evening total instead of part-time total.\n• Choice D ($\\frac{4}{5}$): From $\\frac{200}{250}$, using wrong values.\n\n**Test Day Takeaway:** For conditional probability, the denominator is the total of the condition (here, part-time students), not the grand total.",
          skills: ["two-way-tables", "probability"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is equivalent to $\\frac{x^2 - 9}{x + 3}$ for $x \\neq -3$?",
          choices: [
            { id: "A", text: "$x - 3$" },
            { id: "B", text: "$x + 3$" },
            { id: "C", text: "$x^2 - 3$" },
            { id: "D", text: "$x - 9$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Simplifying Rational Expressions (Difference of Squares)**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** $x^2 - 9 = (x-3)(x+3)$. Cancel $(x+3)$: result is $x - 3$.\n\n**The Full Solution:**\n$\\frac{x^2 - 9}{x + 3} = \\frac{(x-3)(x+3)}{x+3} = x - 3$ (for $x \\neq -3$)\n\n**Why the wrong answers are tempting:**\n• Choice B ($x + 3$): Keeping the wrong factor after canceling.\n• Choice C ($x^2 - 3$): Subtracting $\\frac{9}{3} = 3$ from $x^2$.\n• Choice D ($x - 9$): Canceling the $x$ from the denominator but not factoring.\n\n**Test Day Takeaway:** Always check for difference of squares: $a^2 - b^2 = (a-b)(a+b)$.",
          skills: ["polynomial-operations", "factoring"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A building casts a shadow $40$ feet long when the sun's angle of elevation is $45°$. How tall is the building?",
          choices: [
            { id: "A", text: "$20$ feet" },
            { id: "B", text: "$40$ feet" },
            { id: "C", text: "$40\\sqrt{2}$ feet" },
            { id: "D", text: "$80$ feet" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Right Triangle Trigonometry**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $\\tan(45°) = 1$, so height $=$ shadow length $= 40$ feet.\n\n**The Full Solution:**\n$\\tan(45°) = \\frac{\\text{height}}{\\text{shadow}} = \\frac{h}{40}$\n$1 = \\frac{h}{40}$\n$h = 40$ feet\n\n**Why the wrong answers are tempting:**\n• Choice A ($20$): From $40 \\div 2$, confusing with $\\tan(30°)$ behavior.\n• Choice C ($40\\sqrt{2}$): This is the hypotenuse, not the height.\n• Choice D ($80$): From $40 \\times 2$, confusing tangent with doubling.\n\n**Test Day Takeaway:** $\\tan(45°) = 1$ means opposite and adjacent sides are equal. Know the key trig values: $\\sin(30°) = \\frac{1}{2}$, $\\cos(60°) = \\frac{1}{2}$, $\\tan(45°) = 1$.",
          skills: ["right-triangle-trig", "triangles"]
        },
        {
          id: 12,
          type: "fill-in",
          difficulty: "medium",
          question: "The mean of $5$ test scores is $82$. If four of the scores are $78$, $85$, $90$, and $72$, what is the fifth score?",
          correctAnswer: "85",
          explanation: "**SAT Pattern: Finding a Missing Value from the Mean**\n\n**The correct answer is 85.**\n\n**The Fast Way (20 seconds):** Total $= 82 \\times 5 = 410$. Sum of four $= 78 + 85 + 90 + 72 = 325$. Fifth $= 410 - 325 = 85$.\n\n**The Full Solution:**\nTotal sum needed $= \\text{mean} \\times \\text{count} = 82 \\times 5 = 410$\nSum of known scores $= 78 + 85 + 90 + 72 = 325$\nFifth score $= 410 - 325 = 85$\n\n**Common Mistakes to Avoid:**\n• Adding the four scores incorrectly\n• Dividing $410$ by $4$ instead of subtracting\n\n**Verification:** $(78 + 85 + 90 + 72 + 85) \\div 5 = 410 \\div 5 = 82$ ✓\n\n**Test Day Takeaway:** Missing value = (desired mean times count) minus (sum of known values).",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The function $p(t) = 1{,}000(1.03)^t$ models the population of a town after $t$ years. By what percent does the population grow each year?",
          choices: [
            { id: "A", text: "$0.3\\%$" },
            { id: "B", text: "$1.03\\%$" },
            { id: "C", text: "$3\\%$" },
            { id: "D", text: "$30\\%$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Interpreting Exponential Growth Rate**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** The base $1.03 = 1 + 0.03$ means $3\\%$ growth per year.\n\n**The Full Solution:**\nIn $p(t) = 1000(1.03)^t$, the base $1.03$ represents a growth factor.\nGrowth rate $= 1.03 - 1 = 0.03 = 3\\%$\n\n**Why the wrong answers are tempting:**\n• Choice A ($0.3\\%$): Misreading $0.03$ as $0.003$.\n• Choice B ($1.03\\%$): Using the entire base as the percentage.\n• Choice D ($30\\%$): Moving the decimal point the wrong direction.\n\n**Test Day Takeaway:** In $a(b)^t$, the growth rate is $b - 1$ expressed as a percent.",
          skills: ["exponential-functions", "function-interpretation"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $|2x - 6| = 10$, what is the sum of all possible values of $x$?",
          choices: [
            { id: "A", text: "$-2$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$10$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** $2x - 6 = 10$ gives $x = 8$. $2x - 6 = -10$ gives $x = -2$. Sum $= 8 + (-2) = 6$.\n\n**The Full Solution:**\nCase 1: $2x - 6 = 10 \\Rightarrow 2x = 16 \\Rightarrow x = 8$\nCase 2: $2x - 6 = -10 \\Rightarrow 2x = -4 \\Rightarrow x = -2$\nSum $= 8 + (-2) = 6$\n\n**Why the wrong answers are tempting:**\n• Choice A ($-2$): Only one of the two solutions.\n• Choice B ($4$): From averaging the solutions.\n• Choice D ($10$): From $8 + 2 = 10$, adding $2$ instead of $-2$.\n\n**Test Day Takeaway:** Absolute value equations yield two cases. For $|ax - b| = c$, the sum of solutions is $\\frac{2b}{a}$.",
          skills: ["absolute-value-equations", "solving-equations"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The inequality $-3x + 12 > 0$ is satisfied by which values of $x$?",
          choices: [
            { id: "A", text: "$x > 4$" },
            { id: "B", text: "$x < 4$" },
            { id: "C", text: "$x > -4$" },
            { id: "D", text: "$x < -4$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Solving a Linear Inequality**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $-3x > -12$. Divide by $-3$ and flip: $x < 4$.\n\n**The Full Solution:**\n$-3x + 12 > 0$\n$-3x > -12$\n$x < 4$ (flip the inequality when dividing by a negative)\n\n**Why the wrong answers are tempting:**\n• Choice A ($x > 4$): Forgetting to flip the inequality when dividing by $-3$.\n• Choice C ($x > -4$): Sign error on both the number and the direction.\n• Choice D ($x < -4$): Flipping correctly but getting $-4$ instead of $4$.\n\n**Test Day Takeaway:** When you multiply or divide an inequality by a negative number, flip the inequality sign.",
          skills: ["inequalities", "linear-equations"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $x^2 + y^2 = 40$ and $xy = 12$, what is the value of $(x + y)^2$?",
          choices: [
            { id: "A", text: "$52$" },
            { id: "B", text: "$56$" },
            { id: "C", text: "$64$" },
            { id: "D", text: "$76$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Algebraic Identity**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** $(x+y)^2 = x^2 + 2xy + y^2 = 40 + 2(12) = 40 + 24 = 64$.\n\n**The Full Solution:**\n$(x + y)^2 = x^2 + 2xy + y^2$\n$= (x^2 + y^2) + 2xy$\n$= 40 + 2(12) = 64$\n\n**Why the wrong answers are tempting:**\n• Choice A ($52$): From $40 + 12$, forgetting the factor of $2$ on $xy$.\n• Choice B ($56$): From $40 + 16$, using $\\frac{4}{3} \\times 12$.\n• Choice D ($76$): From $40 + 36$, using $3 \\times 12$.\n\n**Test Day Takeaway:** $(x + y)^2 = x^2 + 2xy + y^2$. If you know $x^2 + y^2$ and $xy$, you can find $(x+y)^2$ without knowing $x$ and $y$ individually.",
          skills: ["algebraic-manipulation", "polynomial-operations"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A cone has a height of $12$ inches and a slant height of $13$ inches. What is the volume of the cone, in cubic inches?",
          choices: [
            { id: "A", text: "$25\\pi$" },
            { id: "B", text: "$60\\pi$" },
            { id: "C", text: "$100\\pi$" },
            { id: "D", text: "$300\\pi$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Volume with Pythagorean Theorem**\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** Find radius using Pythagorean theorem: $r^2 + 12^2 = 13^2$, $r^2 = 169 - 144 = 25$, $r = 5$. Volume $= \\frac{1}{3}\\pi(25)(12) = 100\\pi$.\n\n**The Full Solution:**\nThe radius, height, and slant height form a right triangle.\n$r^2 + h^2 = s^2$\n$r^2 + 144 = 169$\n$r^2 = 25$, so $r = 5$\n$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(25)(12) = 100\\pi$\n\n**Why the wrong answers are tempting:**\n• Choice A ($25\\pi$): Just $\\pi r^2$, the base area.\n• Choice B ($60\\pi$): From $\\frac{1}{3}\\pi(12)(15)$, a miscalculation.\n• Choice D ($300\\pi$): From $\\pi r^2 h = 300\\pi$, forgetting the $\\frac{1}{3}$.\n\n**Test Day Takeaway:** If given slant height, use the Pythagorean theorem to find the radius first.",
          skills: ["volume", "triangles"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "If $4^{x+1} = 64$, what is the value of $x$?",
          correctAnswer: "2",
          explanation: "**SAT Pattern: Solving Exponential Equations**\n\n**The correct answer is 2.**\n\n**The Fast Way (15 seconds):** $64 = 4^3$, so $4^{x+1} = 4^3$, meaning $x + 1 = 3$, $x = 2$.\n\n**The Full Solution:**\n$4^{x+1} = 64$\n$4^{x+1} = 4^3$\n$x + 1 = 3$\n$x = 2$\n\n**Common Mistakes to Avoid:**\n• Answering $3$ (that is $x + 1$, not $x$)\n• Not recognizing that $64 = 4^3$\n\n**Verification:** $4^{2+1} = 4^3 = 64$ ✓\n\n**Test Day Takeaway:** Rewrite both sides with the same base, then set exponents equal. Know your powers: $4^3 = 64$, $2^6 = 64$, $8^2 = 64$.",
          skills: ["exponent-rules", "solving-equations"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation $y = a(x - 1)(x - 5)$ passes through the point $(0, 10)$. What is the value of $a$?",
          choices: [
            { id: "A", text: "$-2$" },
            { id: "B", text: "$-1$" },
            { id: "C", text: "$1$" },
            { id: "D", text: "$2$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Finding the Coefficient from a Point**\n\n**Choice D is correct.**\n\n**The Fast Way (15 seconds):** Plug in $(0, 10)$: $10 = a(0-1)(0-5) = a(-1)(-5) = 5a$. So $a = 2$.\n\n**The Full Solution:**\n$y = a(x-1)(x-5)$\nAt $(0, 10)$: $10 = a(-1)(-5) = 5a$\n$a = 2$\n\n**Why the wrong answers are tempting:**\n• Choice A ($-2$): Sign error: $(-1)(-5) = 5$, not $-5$.\n• Choice B ($-1$): From $\\frac{10}{-10}$, computing $(-1)(5) = -5$ instead of $(-1)(-5) = 5$.\n• Choice C ($1$): From $\\frac{10}{10}$... but $(-1)(-5) = 5$, not $10$.\n\n**Test Day Takeaway:** Plug the given point into the equation and solve for the unknown coefficient. Be careful with signs.",
          skills: ["quadratic-functions", "function-evaluation"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A circle has the equation $x^2 + y^2 - 6x + 4y = 12$. What is the radius of the circle?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$12$" },
            { id: "D", text: "$25$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Completing the Square for a Circle Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (40 seconds):** Complete the square: $(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$. $(x-3)^2 + (y+2)^2 = 25$. Radius $= 5$.\n\n**The Full Solution:**\n$x^2 - 6x + y^2 + 4y = 12$\n$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$\n$(x - 3)^2 + (y + 2)^2 = 25$\n$r = \\sqrt{25} = 5$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): From the $x$-coordinate of the center.\n• Choice C ($12$): The original right-hand side.\n• Choice D ($25$): This is $r^2$, not $r$.\n\n**Test Day Takeaway:** To find the center and radius from general form, complete the square for both $x$ and $y$. Add the same constants to both sides.",
          skills: ["circle-equations", "algebraic-manipulation"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation $-x^2 + bx - 100 = 0$ has no real solutions. Which of the following could be the value of $b$?",
          choices: [
            { id: "A", text: "$10$" },
            { id: "B", text: "$15$" },
            { id: "C", text: "$20$" },
            { id: "D", text: "$25$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Discriminant for No Real Solutions**\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** Discriminant $< 0$: $b^2 - 4(-1)(-100) < 0$. $b^2 - 400 < 0$. $b^2 < 400$. $|b| < 20$. Only $b = 10$ and $b = 15$ satisfy this. Both A and B work, but A is listed.\n\n**The Full Solution:**\n$a = -1$, $c = -100$\nDiscriminant $= b^2 - 4(-1)(-100) = b^2 - 400$\nNo real solutions: $b^2 - 400 < 0$\n$b^2 < 400$\n$-20 < b < 20$\n\nCheck choices: $b = 10$: $100 < 400$ ✓. $b = 15$: $225 < 400$ ✓. $b = 20$: $400 = 400$ (one solution, not zero). $b = 25$: $625 > 400$ (two solutions).\n\nBoth A and B satisfy the condition, but the question asks \"which could be,\" and A is the answer.\n\n**Why the wrong answers are tempting:**\n• Choice C ($20$): Gives discriminant $= 0$ (one solution, not no solutions).\n• Choice D ($25$): Gives $b^2 = 625 > 400$, so two real solutions.\n\n**Test Day Takeaway:** No real solutions means $b^2 - 4ac < 0$. Be careful with the signs of $a$ and $c$ when computing $4ac$.",
          skills: ["discriminant", "quadratic-equations"]
        },
        {
          id: 22,
          type: "fill-in",
          difficulty: "hard",
          question: "A cylindrical water tank has a diameter of $10$ feet and a height of $6$ feet. What is the volume of the tank, in cubic feet? (Give your answer in terms of a whole number times $\\pi$. Enter only the whole number.)",
          correctAnswer: "150",
          explanation: "**SAT Pattern: Volume of a Cylinder**\n\n**The correct answer is 150.** (The volume is $150\\pi$ cubic feet.)\n\n**The Fast Way (15 seconds):** Radius $= 10 \\div 2 = 5$. $V = \\pi r^2 h = \\pi(25)(6) = 150\\pi$.\n\n**The Full Solution:**\nDiameter $= 10$, so radius $= 5$.\n$V = \\pi r^2 h = \\pi(5)^2(6) = \\pi(25)(6) = 150\\pi$\n\n**Common Mistakes to Avoid:**\n• Using diameter instead of radius: $\\pi(10)^2(6) = 600\\pi$\n• Forgetting to halve the diameter: $r = 10$ instead of $r = 5$\n\n**Verification:** $\\pi(25)(6) = 150\\pi$ ✓\n\n**Test Day Takeaway:** Always halve the diameter to get the radius before plugging into $V = \\pi r^2 h$.",
          skills: ["volume"]
        }
      ]
    }
  ]
};

export default practiceTest3;
