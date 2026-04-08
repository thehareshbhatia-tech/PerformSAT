// Practice Test 10 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Contexts: aviation, marine biology, bakeries, movie theaters

export const practiceTest10 = {
  id: "practice-test-10",
  title: "Practice Test 10",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
        // ===== EASY (Q1-Q7) =====
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A bakery sold $240$ muffins on Saturday. If $25\\%$ of the muffins sold were blueberry, how many blueberry muffins were sold?",
          choices: [
            { id: "A", text: "$25$" },
            { id: "B", text: "$48$" },
            { id: "C", text: "$60$" },
            { id: "D", text: "$96$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $25\\%$ of $240 = \\frac{240}{4} = 60$.\n\n**The Full Solution:**\n$0.25 \\times 240 = 60$ blueberry muffins.\n\n**Why the wrong answers are tempting:**\n• Choice A ($25$): Uses the percentage itself as the answer.\n• Choice B ($48$): Computes $\\frac{240}{5}$ instead of $\\frac{240}{4}$.\n• Choice D ($96$): Computes $40\\%$ of $240$ instead of $25\\%$.\n\n**Test Day Takeaway:** $25\\%$ means divide by $4$.",
          skills: ["percents"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "If $4x + 7 = 31$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$24$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $4x = 31 - 7 = 24$, so $x = 6$.\n\n**The Full Solution:**\n$4x + 7 = 31$\n$4x = 24$\n$x = 6$\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): The coefficient, not the solution.\n• Choice C ($8$): Divides $31$ by $4$ and rounds, skipping the subtraction step.\n• Choice D ($24$): Stops after subtracting $7$ but forgets to divide by $4$.\n\n**Test Day Takeaway:** Always finish both steps -- subtract the constant, then divide by the coefficient.",
          skills: ["linear-equations", "solving-equations"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A movie theater charges $\\$9$ per ticket. A group spent $\\$63$ on tickets. How many tickets did the group buy?",
          choices: [
            { id: "A", text: "$6$" },
            { id: "B", text: "$7$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$9$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Division Word Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** $63 \\div 9 = 7$.\n\n**The Full Solution:**\nTotal cost $\\div$ price per ticket $= 63 \\div 9 = 7$ tickets.\n\n**Why the wrong answers are tempting:**\n• Choice A ($6$): May come from $63 \\div 10$ rounded down.\n• Choice C ($8$): Confuses with $72 \\div 9$.\n• Choice D ($9$): Uses the ticket price as the count.\n\n**Test Day Takeaway:** Total $\\div$ rate $=$ quantity.",
          skills: ["word-problems"]
        },
        {
          id: 4,
          type: "fill-in",
          difficulty: "easy",
          question: "A pilot flies at a constant speed of $450$ miles per hour. How many miles does the pilot fly in $3$ hours?",
          correctAnswer: "1350",
          explanation: "**SAT Pattern: Distance = Rate x Time**\n\n**The correct answer is $1{,}350$.**\n\n**The Fast Way (5 seconds):** $450 \\times 3 = 1{,}350$.\n\n**The Full Solution:**\nDistance $= \\text{rate} \\times \\text{time} = 450 \\times 3 = 1{,}350$ miles.\n\n**Common Mistakes to Avoid:**\n• Dividing instead of multiplying: $450 \\div 3 = 150$.\n\n**Verification:** $1{,}350 \\div 3 = 450$ mph. Correct.\n\n**Test Day Takeaway:** Distance $=$ rate $\\times$ time.",
          skills: ["word-problems", "ratios-proportions"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which expression is equivalent to $9x^2 - 4x^2$?",
          choices: [
            { id: "A", text: "$5x$" },
            { id: "B", text: "$5x^2$" },
            { id: "C", text: "$5x^4$" },
            { id: "D", text: "$13x^2$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Combining Like Terms**\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** $9x^2 - 4x^2 = (9-4)x^2 = 5x^2$.\n\n**The Full Solution:**\nBoth terms have the same variable part $x^2$, so subtract the coefficients: $9 - 4 = 5$. The result is $5x^2$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($5x$): Drops the exponent.\n• Choice C ($5x^4$): Adds the exponents instead of keeping them.\n• Choice D ($13x^2$): Adds $9 + 4$ instead of subtracting.\n\n**Test Day Takeaway:** When combining like terms, only the coefficients change; the variable part stays the same.",
          skills: ["polynomial-operations"]
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A marine biologist recorded $f(t) = 200 + 15t$, where $f(t)$ is the number of fish in a coral reef $t$ months after the study began. What does the $15$ represent in this function?",
          choices: [
            { id: "A", text: "The initial number of fish" },
            { id: "B", text: "The number of fish after $15$ months" },
            { id: "C", text: "The increase in the number of fish per month" },
            { id: "D", text: "The total number of months in the study" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Interpreting Linear Functions**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** In $f(t) = 200 + 15t$, the coefficient of $t$ is the slope, which represents the rate of change: $15$ more fish per month.\n\n**The Full Solution:**\nIn a linear function $f(t) = b + mt$, $m$ is the slope (rate of change) and $b$ is the $y$-intercept (initial value). Here, $m = 15$, meaning the population grows by $15$ fish each month.\n\n**Why the wrong answers are tempting:**\n• Choice A: The initial number is $200$, not $15$.\n• Choice B: This would require evaluating $f(15)$, which is $425$.\n• Choice D: The variable $t$ represents months, but $15$ is not the total.\n\n**Test Day Takeaway:** Slope $=$ rate of change. $y$-intercept $=$ starting value.",
          skills: ["linear-functions", "function-interpretation"]
        },
        {
          id: 7,
          type: "fill-in",
          difficulty: "easy",
          question: "If $p + 5 + 12 = 10$, what is the value of $p$?",
          correctAnswer: "-7",
          explanation: "**SAT Pattern: One-Step Equation**\n\n**The correct answer is $-7$.**\n\n**The Fast Way (5 seconds):** $p + 17 = 10$, so $p = 10 - 17 = -7$.\n\n**The Full Solution:**\n$p + 5 + 12 = 10$\n$p + 17 = 10$\n$p = 10 - 17 = -7$\n\n**Common Mistakes to Avoid:**\n• Getting $p = 7$ by ignoring the negative sign.\n\n**Verification:** $-7 + 5 + 12 = -7 + 17 = 10$. Correct.\n\n**Test Day Takeaway:** Combine constants first, then isolate the variable.",
          skills: ["linear-equations", "solving-equations"]
        },

        // ===== MEDIUM (Q8-Q15) =====
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A bakery sells cupcakes for $\\$3.50$ each and cookies for $\\$2$ each. A customer buys a total of $12$ items and spends $\\$33$. How many cupcakes did the customer buy?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$10$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: System of Linear Equations**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Let $c$ be cupcakes. Then cookies $= 12 - c$. So $3.50c + 2(12 - c) = 33$. That gives $3.50c + 24 - 2c = 33$, so $1.50c = 9$, and $c = 6$.\n\n**The Full Solution:**\nLet $c =$ cupcakes, $k =$ cookies.\n$c + k = 12$\n$3.50c + 2k = 33$\nFrom the first equation: $k = 12 - c$.\nSubstitute: $3.50c + 2(12 - c) = 33$\n$3.50c + 24 - 2c = 33$\n$1.50c = 9$\n$c = 6$\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): $3.50(4) + 2(8) = 14 + 16 = 30 \\neq 33$.\n• Choice C ($8$): $3.50(8) + 2(4) = 28 + 8 = 36 \\neq 33$.\n• Choice D ($10$): $3.50(10) + 2(2) = 35 + 4 = 39 \\neq 33$.\n\n**Test Day Takeaway:** For \"total items\" and \"total cost\" problems, set up two equations and substitute.",
          skills: ["systems-of-equations", "word-problems"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A line passes through the points $(2, 5)$ and $(6, 13)$. What is the slope of the line?",
          choices: [
            { id: "A", text: "$\\frac{1}{2}$" },
            { id: "B", text: "$2$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Slope $= \\frac{13 - 5}{6 - 2} = \\frac{8}{4} = 2$.\n\n**The Full Solution:**\n$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{13 - 5}{6 - 2} = \\frac{8}{4} = 2$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{1}{2}$): Flips the fraction (run over rise).\n• Choice C ($4$): Uses only the $x$-difference.\n• Choice D ($8$): Uses only the $y$-difference.\n\n**Test Day Takeaway:** Slope $= \\frac{\\text{rise}}{\\text{run}} = \\frac{\\Delta y}{\\Delta x}$.",
          skills: ["slope", "linear-functions"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "At a movie theater, $120$ people were surveyed about their snack preference. The results are shown in the table.\n\n| | Popcorn | Candy | Total |\n|---|---|---|---|\n| Adults | $35$ | $25$ | $60$ |\n| Children | $40$ | $20$ | $60$ |\n| Total | $75$ | $45$ | $120$ |\n\nWhat is the probability that a randomly selected person is a child who prefers popcorn?",
          choices: [
            { id: "A", text: "$\\frac{1}{6}$" },
            { id: "B", text: "$\\frac{1}{3}$" },
            { id: "C", text: "$\\frac{1}{2}$" },
            { id: "D", text: "$\\frac{2}{3}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Two-Way Table Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Children who prefer popcorn $= 40$. Total $= 120$. Probability $= \\frac{40}{120} = \\frac{1}{3}$.\n\n**The Full Solution:**\n$P(\\text{child and popcorn}) = \\frac{40}{120} = \\frac{1}{3}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{1}{6}$): Divides $20$ (children who prefer candy) by $120$.\n• Choice C ($\\frac{1}{2}$): Uses $\\frac{60}{120}$ (all children).\n• Choice D ($\\frac{2}{3}$): Uses $\\frac{40}{60}$ (popcorn given child, conditional probability).\n\n**Test Day Takeaway:** For \"randomly selected from the whole group,\" the denominator is always the grand total.",
          skills: ["probability", "two-way-tables"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "The equation $2(3x - 4) = 5x + 6$ is true for what value of $x$?",
          correctAnswer: "14",
          explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**The correct answer is $14$.**\n\n**The Fast Way (15 seconds):** $6x - 8 = 5x + 6$, so $x = 14$.\n\n**The Full Solution:**\n$2(3x - 4) = 5x + 6$\n$6x - 8 = 5x + 6$\n$6x - 5x = 6 + 8$\n$x = 14$\n\n**Common Mistakes to Avoid:**\n• Distributing incorrectly: $2(3x - 4) = 6x - 4$ (forgetting to multiply the $-4$ by $2$).\n\n**Verification:** $2(3(14) - 4) = 2(42 - 4) = 2(38) = 76$. $5(14) + 6 = 70 + 6 = 76$. Both sides equal $76$.\n\n**Test Day Takeaway:** Distribute first, then collect variable terms on one side and constants on the other.",
          skills: ["linear-equations", "solving-equations"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A line has a slope of $-\\frac{2}{3}$ and passes through the point $(6, 1)$. What is the $y$-intercept of this line?",
          choices: [
            { id: "A", text: "$-3$" },
            { id: "B", text: "$1$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$7$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Slope-Intercept Form**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** Use $y = mx + b$. Plug in: $1 = -\\frac{2}{3}(6) + b$, so $1 = -4 + b$, giving $b = 5$.\n\n**The Full Solution:**\n$y = mx + b$\n$1 = -\\frac{2}{3}(6) + b$\n$1 = -4 + b$\n$b = 5$\n\n**Why the wrong answers are tempting:**\n• Choice A ($-3$): Computes $1 - \\frac{2}{3}(6) = 1 - 4 = -3$, subtracting instead of solving for $b$.\n• Choice B ($1$): Uses the $y$-coordinate of the given point.\n• Choice D ($7$): Adds $1 + 6 = 7$, ignoring the slope.\n\n**Test Day Takeaway:** To find the $y$-intercept, plug the given point into $y = mx + b$ and solve for $b$.",
          skills: ["slope", "linear-equations"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A survey of $500$ airline passengers found that $68\\%$ preferred aisle seats, with a margin of error of $4\\%$. Which of the following is the best interpretation of this result?",
          choices: [
            { id: "A", text: "Exactly $68\\%$ of all airline passengers prefer aisle seats." },
            { id: "B", text: "Between $64\\%$ and $72\\%$ of the surveyed passengers prefer aisle seats." },
            { id: "C", text: "It is plausible that between $64\\%$ and $72\\%$ of all airline passengers prefer aisle seats." },
            { id: "D", text: "At most $72\\%$ of all airline passengers prefer aisle seats." }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Margin of Error Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Margin of error creates a confidence interval: $68\\% \\pm 4\\% = [64\\%, 72\\%]$. This estimates the population parameter, not the sample.\n\n**The Full Solution:**\nThe margin of error means the true population percentage is plausibly between $64\\%$ and $72\\%$. It applies to the entire population, not just the sample.\n\n**Why the wrong answers are tempting:**\n• Choice A: \"Exactly\" is too precise; statistics gives a range.\n• Choice B: The margin of error applies to the population, not the sample (the sample is already measured).\n• Choice D: The interval is two-sided, not just an upper bound.\n\n**Test Day Takeaway:** Margin of error gives a range for the population percentage, not the sample.",
          skills: ["margin-of-error", "statistics"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Two parallel lines are cut by a transversal. One of the angles formed is $65°$. Which of the following could NOT be the measure of another angle formed?",
          choices: [
            { id: "A", text: "$65°$" },
            { id: "B", text: "$115°$" },
            { id: "C", text: "$125°$" },
            { id: "D", text: "$65°$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Parallel Lines and Transversals**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** When parallel lines are cut by a transversal, the only angle measures are the given angle and its supplement. Here: $65°$ and $180° - 65° = 115°$. The value $125°$ is neither.\n\n**The Full Solution:**\nParallel lines cut by a transversal create two types of angles: the acute angle ($65°$) and its supplement ($115°$). All eight angles are either $65°$ or $115°$. Since $125°$ is neither, it could NOT be formed.\n\n**Why the wrong answers are tempting:**\n• Choices A and D ($65°$): Corresponding, alternate interior, or vertical angles equal $65°$.\n• Choice B ($115°$): The supplement of $65°$, which is a valid co-interior or supplementary angle.\n\n**Test Day Takeaway:** Parallel lines + transversal = only two angle measures, and they add to $180°$.",
          skills: ["parallel-lines", "angles"]
        },
        {
          id: 15,
          type: "fill-in",
          difficulty: "medium",
          question: "The function $f$ is defined by $f(x) = 3x - 7$. What is the value of $f(5)$?",
          correctAnswer: "8",
          explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $8$.**\n\n**The Fast Way (5 seconds):** $f(5) = 3(5) - 7 = 15 - 7 = 8$.\n\n**The Full Solution:**\n$f(x) = 3x - 7$\n$f(5) = 3(5) - 7 = 15 - 7 = 8$\n\n**Common Mistakes to Avoid:**\n• Forgetting order of operations: computing $3(5) = 15$ then $15 - 7 = 8$ is correct, but $3 \\times (5 - 7) = -6$ is wrong.\n\n**Verification:** $f(5) = 3(5) - 7 = 8$.\n\n**Test Day Takeaway:** Replace $x$ with the input value and simplify.",
          skills: ["function-evaluation", "linear-functions"]
        },

        // ===== HARD (Q16-Q22) =====
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation $x^2 - 6x + k = 0$ has exactly one real solution. What is the value of $k$?",
          choices: [
            { id: "A", text: "$-9$" },
            { id: "B", text: "$0$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$9$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Discriminant = 0 for One Solution**\n\n**Choice D is correct.**\n\n**The Fast Way (20 seconds):** For exactly one solution, the discriminant $= 0$: $b^2 - 4ac = 0$. Here $(-6)^2 - 4(1)(k) = 0$, so $36 - 4k = 0$, giving $k = 9$.\n\n**The Full Solution:**\nFor $ax^2 + bx + c = 0$ with $a = 1$, $b = -6$, $c = k$:\n$\\Delta = b^2 - 4ac = 36 - 4k$\nFor one solution: $36 - 4k = 0$\n$4k = 36$\n$k = 9$\n\n**Why the wrong answers are tempting:**\n• Choice A ($-9$): Uses the wrong sign.\n• Choice B ($0$): Assumes the constant must be $0$.\n• Choice C ($6$): Confuses $k$ with $b$.\n\n**Test Day Takeaway:** Exactly one real solution means discriminant $= 0$: $b^2 - 4ac = 0$.",
          skills: ["discriminant", "quadratic-equations"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $f(x) = (x - 3)^2 - 16$ can be written as $f(x) = (x - a)(x - b)$, where $a < b$. What is the value of $b$?",
          choices: [
            { id: "A", text: "$-1$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$7$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Vertex Form to Factored Form**\n\n**Choice D is correct.**\n\n**The Fast Way (30 seconds):** Set $f(x) = 0$: $(x-3)^2 = 16$, so $x - 3 = \\pm 4$. Thus $x = -1$ or $x = 7$. Since $a < b$, $b = 7$.\n\n**The Full Solution:**\n$(x - 3)^2 - 16 = 0$\n$(x - 3)^2 = 16$\n$x - 3 = \\pm 4$\n$x = 3 + 4 = 7$ or $x = 3 - 4 = -1$\nSo $f(x) = (x - (-1))(x - 7) = (x + 1)(x - 7)$. Since $a < b$: $a = -1$, $b = 7$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($-1$): This is $a$, not $b$.\n• Choice B ($3$): This is the $x$-coordinate of the vertex.\n• Choice C ($4$): This is the value added/subtracted from $3$, not a root.\n\n**Test Day Takeaway:** To factor from vertex form, set equal to zero and take the square root of both sides.",
          skills: ["vertex-form", "factoring", "quadratic-functions"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "A marine biologist tracks a population of sea turtles. The population is modeled by $P(t) = 800(0.95)^t$, where $t$ is the number of years after $2020$. By what percent does the population decrease each year?",
          correctAnswer: "5",
          explanation: "**SAT Pattern: Exponential Decay Rate**\n\n**The correct answer is $5$.**\n\n**The Fast Way (10 seconds):** The base is $0.95 = 1 - 0.05$, so the decay rate is $5\\%$ per year.\n\n**The Full Solution:**\nIn $P(t) = 800(0.95)^t$, the base $0.95$ represents the fraction remaining each year.\nDecay rate $= 1 - 0.95 = 0.05 = 5\\%$.\n\n**Common Mistakes to Avoid:**\n• Answering $95$ (the percent remaining, not the percent lost).\n• Answering $0.05$ (the decimal, but the question asks for the percent).\n\n**Verification:** After $1$ year: $800(0.95) = 760$. Decrease $= 800 - 760 = 40$. $\\frac{40}{800} = 0.05 = 5\\%$.\n\n**Test Day Takeaway:** For $a(r)^t$, the percent change is $|1 - r| \\times 100$.",
          skills: ["exponential-functions", "percents"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation of a circle in the $xy$-plane is $x^2 + y^2 - 8x + 6y = 0$. What is the radius of the circle?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$10$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Completing the Square for Circles**\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** Complete the square: $(x^2 - 8x + 16) + (y^2 + 6y + 9) = 16 + 9 = 25$. So $(x-4)^2 + (y+3)^2 = 25$, and $r = \\sqrt{25} = 5$.\n\n**The Full Solution:**\n$x^2 - 8x + y^2 + 6y = 0$\n$(x^2 - 8x + 16) + (y^2 + 6y + 9) = 0 + 16 + 9$\n$(x - 4)^2 + (y + 3)^2 = 25$\n$r = 5$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): Half of the coefficient of $y$, but not the radius.\n• Choice B ($4$): Half of the coefficient of $x$.\n• Choice D ($10$): Uses $r^2 = 100$ or confuses coefficients.\n\n**Test Day Takeaway:** To find the radius from general form, complete the square for both $x$ and $y$.",
          skills: ["circle-equations", "circles"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "For what value of $c$ does the system of equations $y = 2x + 5$ and $y = x^2 + c$ have exactly one solution?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$7$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Linear-Quadratic System with One Intersection**\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** Set equal: $x^2 + c = 2x + 5$, so $x^2 - 2x + (c - 5) = 0$. For one solution: discriminant $= 0$. $(-2)^2 - 4(1)(c-5) = 0$, so $4 - 4c + 20 = 0$, giving $4c = 24$ and $c = 6$.\n\n**The Full Solution:**\n$x^2 + c = 2x + 5$\n$x^2 - 2x + (c - 5) = 0$\nDiscriminant: $b^2 - 4ac = 4 - 4(c - 5) = 4 - 4c + 20 = 24 - 4c$\nSet $= 0$: $24 - 4c = 0 \\Rightarrow c = 6$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): Discriminant $= 24 - 16 = 8 > 0$, which gives two solutions.\n• Choice B ($5$): Discriminant $= 24 - 20 = 4 > 0$, two solutions.\n• Choice D ($7$): Discriminant $= 24 - 28 = -4 < 0$, no solution.\n\n**Test Day Takeaway:** For a linear-quadratic system, set equal, rearrange to standard form, and use the discriminant.",
          skills: ["systems-of-equations", "discriminant", "quadratic-equations"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "A movie theater has $r$ rows of seats. Each row has $3$ more seats than the row in front of it. If the first row has $10$ seats and the last row has $40$ seats, how many rows are in the theater?",
          correctAnswer: "11",
          explanation: "**SAT Pattern: Arithmetic Sequence**\n\n**The correct answer is $11$.**\n\n**The Fast Way (15 seconds):** First term $= 10$, last term $= 40$, common difference $= 3$. Number of terms $= \\frac{40 - 10}{3} + 1 = \\frac{30}{3} + 1 = 10 + 1 = 11$.\n\n**The Full Solution:**\nThis is an arithmetic sequence: $a_n = a_1 + (n-1)d$\n$40 = 10 + (n-1)(3)$\n$30 = 3(n - 1)$\n$10 = n - 1$\n$n = 11$\n\n**Common Mistakes to Avoid:**\n• Getting $10$ by forgetting the $+1$ (the \"fencepost\" error).\n\n**Verification:** Row $11$: $10 + (11-1)(3) = 10 + 30 = 40$. Correct.\n\n**Test Day Takeaway:** Number of terms $= \\frac{\\text{last} - \\text{first}}{\\text{difference}} + 1$.",
          skills: ["word-problems", "algebraic-manipulation"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A right triangle has legs of lengths $a$ and $b$ and hypotenuse of length $c$. If $a = 5$ and $c = 13$, what is the area of the triangle?",
          choices: [
            { id: "A", text: "$24$" },
            { id: "B", text: "$30$" },
            { id: "C", text: "$32.5$" },
            { id: "D", text: "$60$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Pythagorean Theorem + Area**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** $b = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$. Area $= \\frac{1}{2}(5)(12) = 30$.\n\n**The Full Solution:**\n$a^2 + b^2 = c^2$\n$25 + b^2 = 169$\n$b^2 = 144$\n$b = 12$\nArea $= \\frac{1}{2}ab = \\frac{1}{2}(5)(12) = 30$\n\n**Why the wrong answers are tempting:**\n• Choice A ($24$): Computes $\\frac{1}{2}(5)(\\sqrt{169-25})$ incorrectly, perhaps using $b = \\sqrt{119}$ or a rounding error.\n• Choice C ($32.5$): Computes $\\frac{1}{2}(5)(13)$, using the hypotenuse instead of the missing leg.\n• Choice D ($60$): Forgets the $\\frac{1}{2}$ factor: $5 \\times 12 = 60$.\n\n**Test Day Takeaway:** The $5$-$12$-$13$ triple is a classic Pythagorean triple. Memorize common triples: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$.",
          skills: ["right-triangle-trig", "area", "triangles"]
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
          question: "What is $20\\%$ of $150$?",
          choices: [
            { id: "A", text: "$20$" },
            { id: "B", text: "$30$" },
            { id: "C", text: "$35$" },
            { id: "D", text: "$75$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Basic Percentage**\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** $20\\%$ of $150 = \\frac{150}{5} = 30$.\n\n**The Full Solution:**\n$0.20 \\times 150 = 30$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($20$): Uses the percentage number itself.\n• Choice C ($35$): Confuses with a different calculation.\n• Choice D ($75$): Computes $50\\%$ of $150$.\n\n**Test Day Takeaway:** $20\\% = \\frac{1}{5}$, so divide by $5$.",
          skills: ["percents"]
        },
        {
          id: 2,
          type: "fill-in",
          difficulty: "easy",
          question: "$\\frac{3x}{15} = 12$. What is the value of $x$?",
          correctAnswer: "60",
          explanation: "**SAT Pattern: One-Variable Equation with Fraction**\n\n**The correct answer is $60$.**\n\n**The Fast Way (10 seconds):** $\\frac{3x}{15} = \\frac{x}{5} = 12$, so $x = 60$.\n\n**The Full Solution:**\n$\\frac{3x}{15} = 12$\nMultiply both sides by $15$: $3x = 180$\n$x = 60$\n\n**Common Mistakes to Avoid:**\n• Getting $x = 180$ by forgetting to divide by $3$.\n\n**Verification:** $\\frac{3(60)}{15} = \\frac{180}{15} = 12$. Correct.\n\n**Test Day Takeaway:** Multiply both sides by the denominator first, then solve.",
          skills: ["linear-equations", "solving-equations"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A bakery uses $4$ cups of flour for each batch of bread. How many cups of flour are needed for $9$ batches?",
          choices: [
            { id: "A", text: "$13$" },
            { id: "B", text: "$32$" },
            { id: "C", text: "$36$" },
            { id: "D", text: "$45$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Multiplication Word Problem**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $4 \\times 9 = 36$.\n\n**The Full Solution:**\nFlour needed $= 4 \\text{ cups/batch} \\times 9 \\text{ batches} = 36$ cups.\n\n**Why the wrong answers are tempting:**\n• Choice A ($13$): Adds $4 + 9$ instead of multiplying.\n• Choice B ($32$): Computes $4 \\times 8$.\n• Choice D ($45$): Computes $5 \\times 9$.\n\n**Test Day Takeaway:** Rate $\\times$ quantity $=$ total.",
          skills: ["word-problems", "ratios-proportions"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "$5$ more than $3$ times a number $n$ is equal to $26$. Which equation represents this situation?",
          choices: [
            { id: "A", text: "$5n + 3 = 26$" },
            { id: "B", text: "$3n + 5 = 26$" },
            { id: "C", text: "$3(n + 5) = 26$" },
            { id: "D", text: "$5(n + 3) = 26$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Translating Words to Equations**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** \"$3$ times a number\" $= 3n$. \"$5$ more than that\" $= 3n + 5$. Set equal to $26$: $3n + 5 = 26$.\n\n**The Full Solution:**\nParse the sentence: \"$5$ more than ($3$ times $n$)\" $= 3n + 5 = 26$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Swaps the coefficients, making it \"$3$ more than $5$ times $n$.\"\n• Choice C: Groups incorrectly, making it \"$3$ times ($n + 5$).\"\n• Choice D: Groups incorrectly with wrong coefficient.\n\n**Test Day Takeaway:** \"$k$ more than\" means $+ k$. \"$k$ times\" means $\\times k$. Build from the inside out.",
          skills: ["word-problems", "linear-equations"]
        },
        {
          id: 5,
          type: "fill-in",
          difficulty: "easy",
          question: "How many feet are in $8$ yards? ($1$ yard $= 3$ feet)",
          correctAnswer: "24",
          explanation: "**SAT Pattern: Unit Conversion**\n\n**The correct answer is $24$.**\n\n**The Fast Way (5 seconds):** $8 \\times 3 = 24$ feet.\n\n**The Full Solution:**\n$8 \\text{ yards} \\times \\frac{3 \\text{ feet}}{1 \\text{ yard}} = 24$ feet.\n\n**Common Mistakes to Avoid:**\n• Dividing instead of multiplying: $8 \\div 3 \\approx 2.67$.\n\n**Verification:** $24 \\div 3 = 8$ yards. Correct.\n\n**Test Day Takeaway:** When converting to a smaller unit, multiply.",
          skills: ["unit-conversion"]
        },

        // ===== MEDIUM (Q6-Q15) =====
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The mean of $5$ numbers is $18$. If one of the numbers is removed, the mean of the remaining $4$ numbers is $16$. What is the number that was removed?",
          choices: [
            { id: "A", text: "$20$" },
            { id: "B", text: "$22$" },
            { id: "C", text: "$26$" },
            { id: "D", text: "$34$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Mean and Total**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Sum of $5$ numbers $= 5 \\times 18 = 90$. Sum of remaining $4 = 4 \\times 16 = 64$. Removed number $= 90 - 64 = 26$.\n\n**The Full Solution:**\nTotal sum $= 5 \\times 18 = 90$\nSum after removal $= 4 \\times 16 = 64$\nRemoved number $= 90 - 64 = 26$\n\n**Why the wrong answers are tempting:**\n• Choice A ($20$): Guess based on being close to the mean.\n• Choice B ($22$): May add $18 + 4$ or make an arithmetic error.\n• Choice D ($34$): May compute $18 + 16 = 34$.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ total sum. Use this to find missing values.",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The equation of a line is $3x + 4y = 24$. What is the $x$-intercept of this line?",
          choices: [
            { id: "A", text: "$(6, 0)$" },
            { id: "B", text: "$(8, 0)$" },
            { id: "C", text: "$(0, 6)$" },
            { id: "D", text: "$(0, 8)$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Finding Intercepts**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Set $y = 0$: $3x = 24$, so $x = 8$. The $x$-intercept is $(8, 0)$.\n\n**The Full Solution:**\nThe $x$-intercept occurs where $y = 0$:\n$3x + 4(0) = 24$\n$3x = 24$\n$x = 8$\nSo the $x$-intercept is $(8, 0)$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($(6, 0)$): Divides $24$ by $4$ instead of $3$.\n• Choice C ($(0, 6)$): This is the $y$-intercept.\n• Choice D ($(0, 8)$): Confuses $x$- and $y$-intercepts and uses wrong coefficient.\n\n**Test Day Takeaway:** For the $x$-intercept, set $y = 0$. For the $y$-intercept, set $x = 0$.",
          skills: ["linear-equations", "coordinate-geometry"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "A movie theater sold adult tickets for $\\$12$ and child tickets for $\\$8$. If $45$ adult tickets and $30$ child tickets were sold, what was the total revenue, in dollars?",
          correctAnswer: "780",
          explanation: "**SAT Pattern: Total Revenue Calculation**\n\n**The correct answer is $780$.**\n\n**The Fast Way (15 seconds):** $12 \\times 45 + 8 \\times 30 = 540 + 240 = 780$.\n\n**The Full Solution:**\nAdult revenue $= 12 \\times 45 = 540$\nChild revenue $= 8 \\times 30 = 240$\nTotal $= 540 + 240 = 780$\n\n**Common Mistakes to Avoid:**\n• Confusing the prices with the quantities.\n• Adding only one part of the revenue.\n\n**Verification:** $\\$780 \\div 75$ total tickets $= \\$10.40$ average ticket price, which is between $\\$8$ and $\\$12$. Reasonable.\n\n**Test Day Takeaway:** Total revenue $=$ sum of (price $\\times$ quantity) for each item.",
          skills: ["word-problems"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $f(x) = x^2 - 4x + 3$, what are the solutions to $f(x) = 0$?",
          choices: [
            { id: "A", text: "$x = 1$ and $x = 3$" },
            { id: "B", text: "$x = -1$ and $x = -3$" },
            { id: "C", text: "$x = 1$ and $x = -3$" },
            { id: "D", text: "$x = 2$ and $x = 3$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Factoring Quadratics**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** $x^2 - 4x + 3 = (x - 1)(x - 3) = 0$, so $x = 1$ or $x = 3$.\n\n**The Full Solution:**\nFind two numbers that multiply to $3$ and add to $-4$: $-1$ and $-3$.\n$x^2 - 4x + 3 = (x - 1)(x - 3) = 0$\n$x = 1$ or $x = 3$\n\n**Why the wrong answers are tempting:**\n• Choice B: Sign errors; the factors are $(x-1)(x-3)$, not $(x+1)(x+3)$.\n• Choice C: Mixed signs from a factoring error.\n• Choice D: $2 \\times 3 = 6 \\neq 3$.\n\n**Test Day Takeaway:** For $x^2 + bx + c$, find two numbers that multiply to $c$ and add to $b$.",
          skills: ["factoring", "quadratic-equations"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In an aviation study, aircraft speed $s$ (in knots) is related to fuel burn rate $r$ (in gallons per hour) by the equation $r = 0.02s + 5$. What is the fuel burn rate when the speed is $250$ knots?",
          choices: [
            { id: "A", text: "$7.5$ gallons per hour" },
            { id: "B", text: "$10$ gallons per hour" },
            { id: "C", text: "$12.5$ gallons per hour" },
            { id: "D", text: "$55$ gallons per hour" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Evaluating a Linear Model**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $r = 0.02(250) + 5 = 5 + 5 = 10$.\n\n**The Full Solution:**\n$r = 0.02s + 5$\n$r = 0.02(250) + 5$\n$r = 5 + 5 = 10$ gallons per hour\n\n**Why the wrong answers are tempting:**\n• Choice A ($7.5$): Computes $0.01(250) + 5$.\n• Choice C ($12.5$): Computes $0.03(250) + 5$.\n• Choice D ($55$): Computes $0.2(250) + 5$, misplacing the decimal.\n\n**Test Day Takeaway:** Substitute the given value carefully and watch decimal placement.",
          skills: ["linear-functions", "function-evaluation"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A scatterplot shows a strong negative linear association between the number of hours of TV watched per day and test scores. Which of the following best describes this relationship?",
          choices: [
            { id: "A", text: "As hours of TV increase, test scores tend to increase." },
            { id: "B", text: "As hours of TV increase, test scores tend to decrease." },
            { id: "C", text: "Watching TV causes lower test scores." },
            { id: "D", text: "Test scores cause changes in TV watching habits." }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Interpreting Association vs. Causation**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** \"Negative linear association\" means as one variable increases, the other decreases. No causation can be inferred.\n\n**The Full Solution:**\nA negative association means the variables move in opposite directions. Choices C and D claim causation, which cannot be concluded from a scatterplot alone.\n\n**Why the wrong answers are tempting:**\n• Choice A: Describes a positive association, not negative.\n• Choice C: Confuses association with causation.\n• Choice D: Also confuses association with causation, and reverses the direction.\n\n**Test Day Takeaway:** Association $\\neq$ causation. Scatterplots show trends, not causes.",
          skills: ["scatterplots", "statistics"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $\\frac{x}{3} + \\frac{x}{6} = 5$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$6$" },
            { id: "B", text: "$10$" },
            { id: "C", text: "$15$" },
            { id: "D", text: "$30$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Equation with Fractions**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Multiply everything by $6$: $2x + x = 30$, so $3x = 30$, and $x = 10$.\n\n**The Full Solution:**\n$\\frac{x}{3} + \\frac{x}{6} = 5$\nMultiply by LCD $= 6$:\n$2x + x = 30$\n$3x = 30$\n$x = 10$\n\n**Why the wrong answers are tempting:**\n• Choice A ($6$): The LCD, not the solution.\n• Choice C ($15$): Computes $5 \\times 3$ incorrectly.\n• Choice D ($30$): Stops after clearing the fractions but forgets to divide by $3$.\n\n**Test Day Takeaway:** Clear fractions by multiplying by the LCD, then solve the simpler equation.",
          skills: ["solving-equations", "algebraic-manipulation"]
        },
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "In triangle $ABC$, angle $A$ measures $55°$ and angle $B$ measures $70°$. What is the measure, in degrees, of angle $C$?",
          correctAnswer: "55",
          explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**The correct answer is $55$.**\n\n**The Fast Way (5 seconds):** $180 - 55 - 70 = 55$.\n\n**The Full Solution:**\nThe sum of angles in a triangle is $180°$.\n$A + B + C = 180°$\n$55° + 70° + C = 180°$\n$C = 180° - 125° = 55°$\n\n**Common Mistakes to Avoid:**\n• Adding instead of subtracting: $55 + 70 = 125$ is the sum of the other two angles, not the answer.\n\n**Verification:** $55 + 70 + 55 = 180°$. Correct.\n\n**Test Day Takeaway:** Angles in a triangle always sum to $180°$.",
          skills: ["triangles", "angles"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is equivalent to $\\frac{4x^6}{2x^2}$?",
          choices: [
            { id: "A", text: "$2x^3$" },
            { id: "B", text: "$2x^4$" },
            { id: "C", text: "$4x^4$" },
            { id: "D", text: "$2x^8$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Exponent Rules with Division**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $\\frac{4}{2} = 2$ and $x^{6-2} = x^4$. So the answer is $2x^4$.\n\n**The Full Solution:**\n$\\frac{4x^6}{2x^2} = \\frac{4}{2} \\cdot \\frac{x^6}{x^2} = 2 \\cdot x^{6-2} = 2x^4$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2x^3$): Divides the exponent by $2$ instead of subtracting.\n• Choice C ($4x^4$): Forgets to divide the coefficients.\n• Choice D ($2x^8$): Adds exponents instead of subtracting.\n\n**Test Day Takeaway:** When dividing like bases, subtract the exponents: $\\frac{x^a}{x^b} = x^{a-b}$.",
          skills: ["exponent-rules"]
        },
        {
          id: 15,
          type: "fill-in",
          difficulty: "medium",
          question: "A marine biologist counts fish in two sections of a reef. Section A has $24$ fish and section B has $36$ fish. What is the ratio of fish in section A to section B, expressed as a decimal?",
          correctAnswer: "0.67",
          explanation: "**SAT Pattern: Ratio as a Decimal**\n\n**The correct answer is $0.67$ (or $\\frac{2}{3}$).**\n\n**The Fast Way (10 seconds):** $\\frac{24}{36} = \\frac{2}{3} \\approx 0.67$.\n\n**The Full Solution:**\nRatio $= \\frac{24}{36} = \\frac{2}{3} = 0.\\overline{6} \\approx 0.67$.\n\n**Common Mistakes to Avoid:**\n• Flipping the ratio: $\\frac{36}{24} = 1.5$.\n• Not simplifying: The fraction $\\frac{24}{36}$ simplifies to $\\frac{2}{3}$.\n\n**Verification:** $0.67 \\times 36 \\approx 24$. Correct.\n\n**Test Day Takeaway:** Ratio of A to B means $\\frac{A}{B}$. Be careful about order.",
          skills: ["ratios-proportions"]
        },

        // ===== HARD (Q16-Q22) =====
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $f(x) = 2x^2 - 12x + 22$, what is the minimum value of $f(x)$?",
          choices: [
            { id: "A", text: "$-4$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$22$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Minimum Value of a Quadratic**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** The vertex $x$-coordinate is $x = \\frac{-b}{2a} = \\frac{12}{4} = 3$. Then $f(3) = 2(9) - 12(3) + 22 = 18 - 36 + 22 = 4$.\n\n**The Full Solution:**\n$f(x) = 2x^2 - 12x + 22$\n$x_{\\text{vertex}} = \\frac{-(-12)}{2(2)} = \\frac{12}{4} = 3$\n$f(3) = 2(9) - 36 + 22 = 18 - 36 + 22 = 4$\n\nAlternatively, complete the square: $f(x) = 2(x^2 - 6x) + 22 = 2(x^2 - 6x + 9 - 9) + 22 = 2(x-3)^2 - 18 + 22 = 2(x-3)^2 + 4$.\nMinimum is $4$ when $x = 3$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($-4$): Sign error in the calculation.\n• Choice B ($3$): This is the $x$-value of the vertex, not the minimum $y$-value.\n• Choice D ($22$): This is $f(0)$, the $y$-intercept.\n\n**Test Day Takeaway:** For a quadratic with $a > 0$, the minimum value occurs at the vertex: $x = \\frac{-b}{2a}$.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $g(x) = 3(2)^x$ models a bacterial population. Which of the following describes how the population changes?",
          choices: [
            { id: "A", text: "The population increases by $2$ every hour." },
            { id: "B", text: "The population doubles every unit of time." },
            { id: "C", text: "The population triples every unit of time." },
            { id: "D", text: "The population increases by $200\\%$ every unit of time." }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Interpreting Exponential Functions**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** The base is $2$, which means the quantity is multiplied by $2$ each time period. That is doubling.\n\n**The Full Solution:**\n$g(x) = 3(2)^x$. The initial value is $3$ and the growth factor is $2$.\n$g(0) = 3$, $g(1) = 6$, $g(2) = 12$. Each value is double the previous.\n\n**Why the wrong answers are tempting:**\n• Choice A: This would be linear growth ($3 + 2x$), not exponential.\n• Choice C: Tripling would require a base of $3$.\n• Choice D: $200\\%$ increase means tripling (original $+$ $200\\%$ of original $= 3\\times$ original).\n\n**Test Day Takeaway:** In $f(x) = a \\cdot b^x$, the base $b$ is the growth factor. $b = 2$ means doubling.",
          skills: ["exponential-functions", "function-interpretation"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "In the $xy$-plane, the graph of $y = x^2 - 8x + 12$ crosses the $x$-axis at two points. What is the distance between these two points?",
          correctAnswer: "4",
          explanation: "**SAT Pattern: Distance Between Roots**\n\n**The correct answer is $4$.**\n\n**The Fast Way (15 seconds):** Factor: $x^2 - 8x + 12 = (x-2)(x-6) = 0$. Roots: $x = 2$ and $x = 6$. Distance $= 6 - 2 = 4$.\n\n**The Full Solution:**\n$x^2 - 8x + 12 = 0$\n$(x - 2)(x - 6) = 0$\n$x = 2$ or $x = 6$\nThe two $x$-intercepts are $(2, 0)$ and $(6, 0)$.\nDistance $= |6 - 2| = 4$.\n\n**Common Mistakes to Avoid:**\n• Finding the roots but not subtracting to get the distance.\n• Multiplying the roots instead of finding their difference.\n\n**Verification:** $2^2 - 8(2) + 12 = 4 - 16 + 12 = 0$. $6^2 - 8(6) + 12 = 36 - 48 + 12 = 0$. Both are correct roots.\n\n**Test Day Takeaway:** The $x$-intercepts are the solutions to the quadratic. Distance between them is $|x_2 - x_1|$.",
          skills: ["factoring", "quadratic-equations", "coordinate-geometry"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A cylinder has a radius of $4$ and a height of $10$. What is the volume of the cylinder? (Volume of a cylinder: $V = \\pi r^2 h$)",
          choices: [
            { id: "A", text: "$40\\pi$" },
            { id: "B", text: "$80\\pi$" },
            { id: "C", text: "$160\\pi$" },
            { id: "D", text: "$640\\pi$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Volume Formula Application**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $V = \\pi(4)^2(10) = \\pi(16)(10) = 160\\pi$.\n\n**The Full Solution:**\n$V = \\pi r^2 h$\n$V = \\pi (4)^2 (10)$\n$V = \\pi (16)(10)$\n$V = 160\\pi$\n\n**Why the wrong answers are tempting:**\n• Choice A ($40\\pi$): Uses $r$ instead of $r^2$: $\\pi(4)(10) = 40\\pi$.\n• Choice B ($80\\pi$): Uses $2r$ instead of $r^2$: $\\pi(8)(10) = 80\\pi$.\n• Choice D ($640\\pi$): Uses $r^2 = 4^2 = 16$, then $16^2 \\times 10 \\div 4$, an incorrect calculation.\n\n**Test Day Takeaway:** Remember to square the radius, not just multiply it.",
          skills: ["volume"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $\\sqrt{3x + 7} = 5$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$-\\frac{2}{3}$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$\\frac{32}{3}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Solving Radical Equations**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Square both sides: $3x + 7 = 25$. Then $3x = 18$, so $x = 6$.\n\n**The Full Solution:**\n$\\sqrt{3x + 7} = 5$\n$(\\sqrt{3x + 7})^2 = 5^2$\n$3x + 7 = 25$\n$3x = 18$\n$x = 6$\n\n**Why the wrong answers are tempting:**\n• Choice A ($-\\frac{2}{3}$): Subtracts $7$ from $5$ instead of $25$.\n• Choice B ($4$): Uses $5^2 = 25$ but then computes $\\frac{25-7}{5}$ incorrectly.\n• Choice D ($\\frac{32}{3}$): Adds $7$ to $25$ instead of subtracting.\n\n**Test Day Takeaway:** Square both sides of a radical equation, then solve the resulting linear equation. Check your answer in the original.",
          skills: ["radical-equations", "solving-equations"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "The function $f(x) = -x^2 + 10x - 21$ can be written as $f(x) = -(x - a)(x - b)$ where $a < b$. What is the value of $a + b$?",
          correctAnswer: "10",
          explanation: "**SAT Pattern: Sum of Roots (Vieta's Formulas)**\n\n**The correct answer is $10$.**\n\n**The Fast Way (15 seconds):** For $-x^2 + 10x - 21$, factor out $-1$: $-(x^2 - 10x + 21) = -(x-3)(x-7)$. So $a = 3$, $b = 7$, and $a + b = 10$.\n\n**The Full Solution:**\n$f(x) = -x^2 + 10x - 21$\n$= -(x^2 - 10x + 21)$\n$= -(x - 3)(x - 7)$\nSo $a = 3$ and $b = 7$.\n$a + b = 3 + 7 = 10$\n\n**Common Mistakes to Avoid:**\n• Factoring without the negative sign and getting wrong roots.\n• By Vieta's formulas, $a + b = -\\frac{b}{a} = -\\frac{10}{-1} = 10$. This shortcut is faster.\n\n**Verification:** $-(3-3)(3-7) = 0$ and $-(7-3)(7-7) = 0$. Both roots check out. Also, $-(x-3)(x-7) = -(x^2 - 10x + 21) = -x^2 + 10x - 21$.\n\n**Test Day Takeaway:** For $ax^2 + bx + c$, the sum of roots $= -\\frac{b}{a}$.",
          skills: ["factoring", "quadratic-equations"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In right triangle $DEF$, angle $F = 90°$. If $\\sin(D) = \\frac{5}{13}$, what is $\\cos(D)$?",
          choices: [
            { id: "A", text: "$\\frac{5}{13}$" },
            { id: "B", text: "$\\frac{8}{13}$" },
            { id: "C", text: "$\\frac{12}{13}$" },
            { id: "D", text: "$\\frac{5}{12}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Pythagorean Identity / Right Triangle Trig**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** $\\sin(D) = \\frac{5}{13}$, so opposite $= 5$, hypotenuse $= 13$. Adjacent $= \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$. $\\cos(D) = \\frac{12}{13}$.\n\n**The Full Solution:**\nIn right triangle with $\\sin(D) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{5}{13}$:\nAdjacent $= \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$\n$\\cos(D) = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{12}{13}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{5}{13}$): Confuses sine and cosine.\n• Choice B ($\\frac{8}{13}$): Uses $13 - 5 = 8$ instead of the Pythagorean theorem.\n• Choice D ($\\frac{5}{12}$): This is $\\tan(D)$, not $\\cos(D)$.\n\n**Test Day Takeaway:** The $5$-$12$-$13$ right triangle is a standard Pythagorean triple. Know SOH-CAH-TOA.",
          skills: ["right-triangle-trig", "triangles"]
        }
      ]
    }
  ]
};

export default practiceTest10;
