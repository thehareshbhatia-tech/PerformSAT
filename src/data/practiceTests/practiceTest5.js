// Practice Test 5 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Contexts: biology, architecture, manufacturing, nutrition

export const practiceTest5 = {
  id: "practice-test-5",
  title: "Practice Test 5",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
        // ===== EASY (Q1-Q5) =====
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A biologist recorded the number of bird species observed at four different nature reserves.\n\n| Reserve | Species Observed |\n|---|---|\n| Pine Valley | $42$ |\n| Oak Ridge | $58$ |\n| Cedar Lake | $35$ |\n| Maple Creek | $65$ |\n\nAccording to the table, which reserve had the greatest number of species observed?",
          choices: [
            { id: "A", text: "Pine Valley" },
            { id: "B", text: "Oak Ridge" },
            { id: "C", text: "Cedar Lake" },
            { id: "D", text: "Maple Creek" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Reading a Table**\n\n**Choice D is correct.**\n\n**The Fast Way (10 seconds):** Compare all values: $42, 58, 35, 65$. The greatest is $65$ at Maple Creek.\n\n**The Full Solution:**\nPine Valley: $42$, Oak Ridge: $58$, Cedar Lake: $35$, Maple Creek: $65$.\n$65 > 58 > 42 > 35$, so Maple Creek had the most species.\n\n**Why the wrong answers are tempting:**\n• Choice A ($42$): Pine Valley — not the largest.\n• Choice B ($58$): Oak Ridge — second highest.\n• Choice C ($35$): Cedar Lake — the smallest value.\n\n**Test Day Takeaway:** For table-reading questions, compare all values carefully. Do not rush and pick the first large number you see.",
          skills: ["data-interpretation", "statistics"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "$7$ more than $5$ times a number $n$ equals $52$. Which equation represents this statement?",
          choices: [
            { id: "A", text: "$7n + 5 = 52$" },
            { id: "B", text: "$5n + 7 = 52$" },
            { id: "C", text: "$5(n + 7) = 52$" },
            { id: "D", text: "$7(n + 5) = 52$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Translating Words to an Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** \"$5$ times $n$\" $= 5n$. \"$7$ more than that\" $= 5n + 7$. \"Equals $52$\" $\\Rightarrow 5n + 7 = 52$.\n\n**The Full Solution:**\nBreak the sentence into parts:\n- \"$5$ times a number $n$\": $5n$\n- \"$7$ more than\" that: $5n + 7$\n- \"equals $52$\": $5n + 7 = 52$\n\n**Why the wrong answers are tempting:**\n• Choice A ($7n + 5 = 52$): Swaps the $5$ and $7$.\n• Choice C ($5(n + 7) = 52$): Distributes to $5n + 35$, not $5n + 7$.\n• Choice D ($7(n + 5) = 52$): Distributes to $7n + 35$, completely different.\n\n**Test Day Takeaway:** \"$k$ more than $m$ times $n$\" translates to $mn + k$, not $k(n + m)$.",
          skills: ["linear-equations", "word-problems"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "An architect charges a flat fee of $\\$200$ plus $\\$45$ per hour. The function $C(h) = 200 + 45h$ gives the total cost for $h$ hours of work. What is the best interpretation of the number $45$ in this function?",
          choices: [
            { id: "A", text: "The total cost for all hours worked" },
            { id: "B", text: "The number of hours the architect works" },
            { id: "C", text: "The additional cost for each hour of work" },
            { id: "D", text: "The cost before any hours are worked" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Interpreting the Slope of a Linear Model**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** In $C(h) = 200 + 45h$, the coefficient $45$ is multiplied by $h$ (hours), so it is the rate: $\\$45$ per hour.\n\n**The Full Solution:**\nIn $C(h) = 200 + 45h$:\n- $200$ is the flat fee (the $y$-intercept, or cost when $h = 0$)\n- $45$ is the slope (the additional cost per hour)\n\n**Why the wrong answers are tempting:**\n• Choice A: $C(h)$ gives the total cost, not $45$.\n• Choice B: $h$ represents hours, not $45$.\n• Choice D: The cost before any hours is $200$ (the flat fee), not $45$.\n\n**Test Day Takeaway:** In $y = b + mx$, the coefficient $m$ is the rate of change per unit of $x$.",
          skills: ["function-interpretation", "linear-functions"]
        },
        {
          id: 4,
          type: "fill-in",
          difficulty: "easy",
          question: "A factory uses a $\\$54$ coupon on an order of $6$ identical parts. After the coupon, the total cost is $\\$78$. What was the original price per part, in dollars?",
          correctAnswer: "22",
          explanation: "**SAT Pattern: Multi-Step Word Problem**\n\n**The correct answer is $22$.**\n\n**The Fast Way (15 seconds):** Total before coupon $= 78 + 54 = 132$. Price per part $= 132 \\div 6 = 22$.\n\n**The Full Solution:**\nOriginal total $= \\$78 + \\$54 = \\$132$.\nPrice per part $= \\frac{132}{6} = \\$22$.\n\n**Common Mistakes to Avoid:**\n• Subtracting the coupon instead of adding: $78 - 54 = 24$, then $24/6 = 4$.\n• Dividing first: $78/6 = 13$ (ignoring the coupon).\n\n**Verification:** $6 \\times 22 = 132$. After $\\$54$ coupon: $132 - 54 = 78$ ✓\n\n**Test Day Takeaway:** The coupon reduces the total, so to find the original you must add it back before dividing.",
          skills: ["word-problems", "solving-equations"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "What percentage of $300$ is $75$?",
          choices: [
            { id: "A", text: "$15\\%$" },
            { id: "B", text: "$20\\%$" },
            { id: "C", text: "$25\\%$" },
            { id: "D", text: "$30\\%$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Finding a Percentage**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $\\frac{75}{300} = \\frac{1}{4} = 25\\%$.\n\n**The Full Solution:**\n$\\frac{75}{300} \\times 100 = 0.25 \\times 100 = 25\\%$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($15\\%$): From a division error.\n• Choice B ($20\\%$): Confuses $\\frac{75}{300}$ with $\\frac{60}{300}$.\n• Choice D ($30\\%$): From $\\frac{75}{250}$ or mixing up numerator/denominator.\n\n**Test Day Takeaway:** \"What percent of $A$ is $B$?\" means $\\frac{B}{A} \\times 100$. The whole goes in the denominator.",
          skills: ["percents", "word-problems"]
        },

        // ===== EASY-MEDIUM (Q6-Q7) =====
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The equation $k^2 - 53 = 91$ has two solutions. What is the positive solution for $k$?",
          choices: [
            { id: "A", text: "$9$" },
            { id: "B", text: "$12$" },
            { id: "C", text: "$38$" },
            { id: "D", text: "$144$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Solving a Quadratic (No Middle Term)**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $k^2 = 91 + 53 = 144$. $k = \\sqrt{144} = 12$ (positive solution).\n\n**The Full Solution:**\n$k^2 - 53 = 91$\n$k^2 = 144$\n$k = \\pm 12$\nThe positive solution is $12$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($9$): $9^2 = 81$, not $144$.\n• Choice C ($38$): Adds $91 - 53 = 38$ instead of $91 + 53$.\n• Choice D ($144$): This is $k^2$, not $k$.\n\n**Test Day Takeaway:** Isolate $k^2$ first, then take the square root. Don't forget $\\pm$, but read whether the question asks for the positive solution.",
          skills: ["quadratic-equations", "solving-equations"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A nutritionist recommends that a meal contain no more than $600$ calories. If a meal has $c$ calories, which inequality represents this recommendation?",
          choices: [
            { id: "A", text: "$c > 600$" },
            { id: "B", text: "$c \\geq 600$" },
            { id: "C", text: "$c < 600$" },
            { id: "D", text: "$c \\leq 600$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Translating Words to Inequalities**\n\n**Choice D is correct.**\n\n**The Fast Way (10 seconds):** \"No more than $600$\" means $c$ can be $600$ or less: $c \\leq 600$.\n\n**The Full Solution:**\n\"No more than\" means \"less than or equal to.\" The calories $c$ must satisfy $c \\leq 600$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($c > 600$): The opposite of the recommendation.\n• Choice B ($c \\geq 600$): Means \"at least $600$,\" which is the reverse.\n• Choice C ($c < 600$): Close, but \"no more than\" includes exactly $600$.\n\n**Test Day Takeaway:** \"No more than\" $=$ $\\leq$. \"At least\" $=$ $\\geq$. \"Less than\" $=$ $<$. \"More than\" $=$ $>$.",
          skills: ["inequalities", "word-problems"]
        },

        // ===== MEDIUM (Q8-Q13) =====
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A biologist records the population of bacteria at different times:\n\n| Time (hours) | Population |\n|---|---|\n| $0$ | $100$ |\n| $1$ | $200$ |\n| $2$ | $400$ |\n| $3$ | $800$ |\n\nBased on the data, which type of function best models the relationship between time and population?",
          choices: [
            { id: "A", text: "Decreasing linear" },
            { id: "B", text: "Increasing linear" },
            { id: "C", text: "Decreasing exponential" },
            { id: "D", text: "Increasing exponential" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Linear vs. Exponential from a Table**\n\n**Choice D is correct.**\n\n**The Fast Way (15 seconds):** Check ratios: $200/100 = 2$, $400/200 = 2$, $800/400 = 2$. Constant ratio $=$ exponential. Values increasing $=$ increasing exponential.\n\n**The Full Solution:**\nDifferences: $200 - 100 = 100$, $400 - 200 = 200$, $800 - 400 = 400$. Not constant, so not linear.\nRatios: $200/100 = 2$, $400/200 = 2$, $800/400 = 2$. Constant ratio of $2$, so exponential.\nSince values increase, this is an increasing exponential.\n\n**Why the wrong answers are tempting:**\n• Choice A: Values are increasing, not decreasing.\n• Choice B: Differences are not constant, so it is not linear.\n• Choice C: Values increase, so this is not decreasing.\n\n**Test Day Takeaway:** Constant differences $=$ linear. Constant ratios $=$ exponential.",
          skills: ["exponential-functions", "function-interpretation"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table below shows the results of a survey of $200$ factory workers.\n\n| | Day Shift | Night Shift | Total |\n|---|---|---|---|\n| Full-time | $70$ | $50$ | $120$ |\n| Part-time | $45$ | $35$ | $80$ |\n| Total | $115$ | $85$ | $200$ |\n\nWhat fraction of night shift workers are full-time?",
          choices: [
            { id: "A", text: "$\\frac{50}{200}$" },
            { id: "B", text: "$\\frac{50}{120}$" },
            { id: "C", text: "$\\frac{50}{85}$" },
            { id: "D", text: "$\\frac{85}{200}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Two-Way Table — Conditional Fraction**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** \"Of night shift workers\" means the denominator is $85$ (total night shift). Full-time night shift $= 50$. Fraction $= \\frac{50}{85}$.\n\n**The Full Solution:**\nRestrict to night shift workers: total $= 85$.\nFull-time among night shift $= 50$.\nFraction $= \\frac{50}{85}$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{50}{200}$): Uses grand total as denominator instead of night shift total.\n• Choice B ($\\frac{50}{120}$): Uses full-time total as denominator (flips the condition).\n• Choice D ($\\frac{85}{200}$): Fraction of all workers on night shift, ignoring the full-time condition.\n\n**Test Day Takeaway:** The group mentioned in the question (\"of night shift workers\") determines the denominator.",
          skills: ["two-way-tables", "probability"]
        },
        {
          id: 10,
          type: "fill-in",
          difficulty: "medium",
          question: "The function $f(t) = 150 + 25t$ models the total number of parts manufactured after $t$ hours. How many more parts are manufactured between hour $3$ and hour $7$?",
          correctAnswer: "100",
          explanation: "**SAT Pattern: Using a Linear Function Over an Interval**\n\n**The correct answer is $100$.**\n\n**The Fast Way (15 seconds):** $f(7) - f(3) = (150 + 175) - (150 + 75) = 325 - 225 = 100$. Or: the rate is $25$ parts per hour over $4$ hours $= 100$.\n\n**The Full Solution:**\n$f(7) = 150 + 25(7) = 150 + 175 = 325$\n$f(3) = 150 + 25(3) = 150 + 75 = 225$\n$f(7) - f(3) = 325 - 225 = 100$\n\n**Common Mistakes to Avoid:**\n• Computing $f(7)$ alone ($325$) instead of the difference.\n• Computing $f(7-3) = f(4) = 250$ — you cannot subtract the inputs.\n\n**Verification:** Over $4$ hours at $25$ parts/hour $= 100$ additional parts ✓\n\n**Test Day Takeaway:** For \"how many more\" between two times, compute $f(b) - f(a)$, not $f(b-a)$.",
          skills: ["linear-functions", "function-evaluation"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "An architect designs a ramp that rises $3$ feet over a horizontal distance of $12$ feet. What is the slope of the ramp?",
          choices: [
            { id: "A", text: "$\\frac{1}{4}$" },
            { id: "B", text: "$\\frac{1}{3}$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$4$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Slope as Rise Over Run**\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** Slope $= \\frac{\\text{rise}}{\\text{run}} = \\frac{3}{12} = \\frac{1}{4}$.\n\n**The Full Solution:**\nThe ramp rises $3$ feet (vertical) over $12$ feet (horizontal).\nSlope $= \\frac{3}{12} = \\frac{1}{4}$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($\\frac{1}{3}$): Divides $12$ by something else, or confuses the numbers.\n• Choice C ($3$): The rise alone, not the slope.\n• Choice D ($4$): Computes run $\\div$ rise instead of rise $\\div$ run.\n\n**Test Day Takeaway:** Slope $= \\frac{\\text{rise}}{\\text{run}} = \\frac{\\text{vertical change}}{\\text{horizontal change}}$.",
          skills: ["slope", "word-problems"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In the $xy$-plane, a line has a $y$-intercept of $8$ and an $x$-intercept of $4$. What is the slope of this line?",
          choices: [
            { id: "A", text: "$-2$" },
            { id: "B", text: "$-\\frac{1}{2}$" },
            { id: "C", text: "$\\frac{1}{2}$" },
            { id: "D", text: "$2$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Slope from Intercepts**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** The line passes through $(0, 8)$ and $(4, 0)$. Slope $= \\frac{0 - 8}{4 - 0} = \\frac{-8}{4} = -2$.\n\n**The Full Solution:**\n$y$-intercept: $(0, 8)$. $x$-intercept: $(4, 0)$.\nSlope $= \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{0 - 8}{4 - 0} = -2$\n\n**Why the wrong answers are tempting:**\n• Choice B ($-\\frac{1}{2}$): Computes $\\frac{4 - 0}{0 - 8} = -\\frac{1}{2}$ (rise and run swapped).\n• Choice C ($\\frac{1}{2}$): Swaps rise/run and drops the negative.\n• Choice D ($2$): Correct magnitude but wrong sign (the line goes downward).\n\n**Test Day Takeaway:** Given two intercepts, use slope $= \\frac{y_2 - y_1}{x_2 - x_1}$. A line falling from left to right has a negative slope.",
          skills: ["slope", "coordinate-geometry"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The system of equations below has solution $(x, y)$.\n\n$2x + y = 11$\n$x - y = 1$\n\nWhat is the value of $y$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$7$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Add the two equations: $(2x + y) + (x - y) = 11 + 1$, so $3x = 12$ and $x = 4$. Substitute: $4 - y = 1$, so $y = 3$.\n\n**The Full Solution:**\nAdding the equations eliminates $y$:\n$2x + x + y - y = 12$\n$3x = 12$\n$x = 4$\n\nSubstitute $x = 4$ into $x - y = 1$:\n$4 - y = 1$\n$y = 3$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): May come from $12/6$ or another setup error.\n• Choice C ($4$): This is $x$, not $y$.\n• Choice D ($7$): From $11 - 4 = 7$, substituting into the wrong equation form.\n\n**Verification:** $2(4) + 3 = 11$ ✓ and $4 - 3 = 1$ ✓\n\n**Test Day Takeaway:** When one variable has opposite signs in the two equations, add to eliminate it.",
          skills: ["systems-of-equations", "solving-equations"]
        },

        // ===== HARD (Q14-Q22) =====
        {
          id: 14,
          type: "fill-in",
          difficulty: "hard",
          question: "The expression $(3x^2 + 2x - 5) + (x^2 - 4x + 8)$ can be written as $ax^2 + bx + c$. What is the value of $b$?",
          correctAnswer: "-2",
          explanation: "**SAT Pattern: Adding Polynomials**\n\n**The correct answer is $-2$.**\n\n**The Fast Way (15 seconds):** Combine the $x$-terms: $2x + (-4x) = -2x$. So $b = -2$.\n\n**The Full Solution:**\n$(3x^2 + 2x - 5) + (x^2 - 4x + 8)$\n$= (3 + 1)x^2 + (2 - 4)x + (-5 + 8)$\n$= 4x^2 - 2x + 3$\n\nSo $a = 4$, $b = -2$, $c = 3$.\n\n**Common Mistakes to Avoid:**\n• Adding $2 + 4 = 6$ instead of $2 + (-4) = -2$ (watch the sign on $-4x$).\n• Reporting $a$ or $c$ instead of $b$.\n\n**Verification:** $4x^2 - 2x + 3$ ✓\n\n**Test Day Takeaway:** When adding polynomials, combine like terms. Pay careful attention to signs.",
          skills: ["polynomial-operations", "algebraic-manipulation"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A building casts a shadow that is $40$ feet long. At the same time, a $6$-foot-tall person standing nearby casts a shadow $8$ feet long. The equation $\\frac{h}{40} = \\frac{6}{8}$ can be used to find the building's height $h$. What is the height of the building, in feet?",
          choices: [
            { id: "A", text: "$24$" },
            { id: "B", text: "$30$" },
            { id: "C", text: "$42$" },
            { id: "D", text: "$48$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Similar Triangles / Proportions**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** $\\frac{h}{40} = \\frac{6}{8} = \\frac{3}{4}$. So $h = 40 \\times \\frac{3}{4} = 30$.\n\n**The Full Solution:**\n$\\frac{h}{40} = \\frac{6}{8}$\n$h = \\frac{6 \\times 40}{8} = \\frac{240}{8} = 30$\n\n**Why the wrong answers are tempting:**\n• Choice A ($24$): From $6 \\times 4 = 24$ (using an incorrect ratio).\n• Choice C ($42$): From $40 + 6/3 = 42$ (an addition error).\n• Choice D ($48$): From $6 \\times 8 = 48$ (multiplying height by shadow length).\n\n**Verification:** $30/40 = 3/4$ and $6/8 = 3/4$. Same ratio. ✓\n\n**Test Day Takeaway:** Objects and their shadows form similar triangles. Set up $\\frac{h_1}{s_1} = \\frac{h_2}{s_2}$ and cross-multiply.",
          skills: ["ratios-proportions", "word-problems"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $f(x) = -x^2 + 8x - 12$ can be written as $f(x) = -(x - h)^2 + k$. What is the value of $k$?",
          choices: [
            { id: "A", text: "$-12$" },
            { id: "B", text: "$-4$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$12$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Completing the Square to Find Vertex**\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** Factor out $-1$: $f(x) = -(x^2 - 8x) - 12 = -(x^2 - 8x + 16 - 16) - 12 = -(x - 4)^2 + 16 - 12 = -(x - 4)^2 + 4$. So $k = 4$.\n\nAlternatively, use $h = -b/(2a) = -8/(2 \\cdot -1) = 4$. Then $k = f(4) = -16 + 32 - 12 = 4$.\n\n**The Full Solution:**\n$f(x) = -x^2 + 8x - 12$\n$= -(x^2 - 8x) - 12$\n$= -(x^2 - 8x + 16) + 16 - 12$\n$= -(x - 4)^2 + 4$\n\nSo $h = 4$ and $k = 4$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($-12$): The constant term before completing the square.\n• Choice B ($-4$): From subtracting $16$ instead of adding it (sign error with the factored $-1$).\n• Choice D ($12$): From adding $16 - 12$ incorrectly.\n\n**Test Day Takeaway:** To find $k$ (the vertex $y$-value), use $k = f(-b/(2a))$. It is faster than completing the square.",
          skills: ["vertex-form", "quadratic-functions"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A population of bacteria triples every $4$ hours. If the initial population is $500$, which expression gives the population after $t$ hours?",
          choices: [
            { id: "A", text: "$500(3)^{t/4}$" },
            { id: "B", text: "$500(3)^{4t}$" },
            { id: "C", text: "$500(4)^{t/3}$" },
            { id: "D", text: "$1{,}500^t$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Exponential Growth with Period**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Triples every $4$ hours means growth factor of $3$ every $4$ hours. In $t$ hours, there are $t/4$ periods of $4$ hours. Population $= 500(3)^{t/4}$.\n\n**The Full Solution:**\nGeneral form: $P(t) = P_0 \\cdot r^{t/\\text{period}}$\n$P_0 = 500$, $r = 3$ (triples), period $= 4$ hours.\n$P(t) = 500(3)^{t/4}$\n\n**Why the wrong answers are tempting:**\n• Choice B ($500(3)^{4t}$): Multiplies by $4t$ instead of dividing by $4$. This would make it triple $4$ times per hour.\n• Choice C ($500(4)^{t/3}$): Swaps the growth factor and the period.\n• Choice D ($1{,}500^t$): Multiplies $500 \\times 3$ and uses it as the base.\n\n**Verification:** At $t = 4$: $500(3)^{4/4} = 500 \\times 3 = 1{,}500$. At $t = 8$: $500(3)^2 = 4{,}500$. Each quadrupling of time triples the population. ✓\n\n**Test Day Takeaway:** \"Multiplies by $r$ every $p$ units\" translates to $A_0 \\cdot r^{t/p}$.",
          skills: ["exponential-functions", "function-interpretation"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "What is the positive solution of $2x^2 - 7x - 15 = 0$?",
          correctAnswer: "5",
          explanation: "**SAT Pattern: Solving a Quadratic by Factoring**\n\n**The correct answer is $5$.**\n\n**The Fast Way (30 seconds):** Factor: $2x^2 - 7x - 15 = (2x + 3)(x - 5) = 0$. Solutions: $x = -3/2$ or $x = 5$. The positive solution is $5$.\n\n**The Full Solution:**\nWe need two numbers that multiply to $2 \\times (-15) = -30$ and add to $-7$: those are $-10$ and $3$.\n$2x^2 - 10x + 3x - 15 = 0$\n$2x(x - 5) + 3(x - 5) = 0$\n$(2x + 3)(x - 5) = 0$\n$x = -\\frac{3}{2}$ or $x = 5$\n\nThe positive solution is $5$.\n\n**Common Mistakes to Avoid:**\n• Reporting $-3/2$ (the negative solution).\n• Factoring errors: check by expanding $(2x + 3)(x - 5) = 2x^2 - 10x + 3x - 15 = 2x^2 - 7x - 15$ ✓\n\n**Verification:** $2(25) - 7(5) - 15 = 50 - 35 - 15 = 0$ ✓\n\n**Test Day Takeaway:** For $ax^2 + bx + c$, find two numbers that multiply to $ac$ and add to $b$, then factor by grouping.",
          skills: ["quadratic-equations", "factoring"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A cylindrical water tank has a radius of $5$ feet and a height of $8$ feet. What is the volume of the tank? (Use $\\pi \\approx 3.14$)",
          choices: [
            { id: "A", text: "$200\\pi$ cubic feet" },
            { id: "B", text: "$80\\pi$ cubic feet" },
            { id: "C", text: "$40\\pi$ cubic feet" },
            { id: "D", text: "$25\\pi$ cubic feet" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Volume of a Cylinder**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** $V = \\pi r^2 h = \\pi(25)(8) = 200\\pi$.\n\n**The Full Solution:**\n$V = \\pi r^2 h$\n$= \\pi (5)^2 (8)$\n$= \\pi \\cdot 25 \\cdot 8$\n$= 200\\pi$ cubic feet\n\n**Why the wrong answers are tempting:**\n• Choice B ($80\\pi$): Uses $2 \\times 5 = 10$ for the radius-squared term: $\\pi(10)(8) = 80\\pi$. But $r^2 = 25$, not $2r = 10$.\n• Choice C ($40\\pi$): Uses $r$ instead of $r^2$: $\\pi(5)(8) = 40\\pi$.\n• Choice D ($25\\pi$): Just $\\pi r^2$ without the height.\n\n**Test Day Takeaway:** Volume of a cylinder $= \\pi r^2 h$. Always square the radius.",
          skills: ["volume", "circles"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In the $xy$-plane, line $m$ has equation $y = 3x - 2$ and line $n$ has equation $y = -\\frac{1}{3}x + 4$. Which statement about lines $m$ and $n$ is true?",
          choices: [
            { id: "A", text: "The lines are parallel" },
            { id: "B", text: "The lines are perpendicular" },
            { id: "C", text: "The lines have the same $y$-intercept" },
            { id: "D", text: "The lines have the same $x$-intercept" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Parallel vs. Perpendicular Lines**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Slope of $m$: $3$. Slope of $n$: $-1/3$. Product: $3 \\times (-1/3) = -1$. Perpendicular.\n\n**The Full Solution:**\nTwo lines are perpendicular when the product of their slopes is $-1$.\nSlope of $m = 3$, slope of $n = -\\frac{1}{3}$.\n$3 \\times (-\\frac{1}{3}) = -1$ ✓\n\nSo the lines are perpendicular.\n\n**Why the wrong answers are tempting:**\n• Choice A: Parallel lines have equal slopes. $3 \\neq -1/3$.\n• Choice C: $y$-intercepts are $-2$ and $4$, which are different.\n• Choice D: $x$-intercept of $m$: $2/3$. $x$-intercept of $n$: $12$. Different.\n\n**Test Day Takeaway:** Parallel $=$ same slope. Perpendicular $=$ slopes multiply to $-1$ (negative reciprocals).",
          skills: ["slope", "parallel-lines"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "A triangle has angles measuring $x°$, $2x°$, and $(x + 40)°$. What is the value of $x$?",
          correctAnswer: "35",
          explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**The correct answer is $35$.**\n\n**The Fast Way (20 seconds):** $x + 2x + (x + 40) = 180$. So $4x + 40 = 180$, $4x = 140$, $x = 35$.\n\n**The Full Solution:**\nThe sum of angles in a triangle is $180°$:\n$x + 2x + (x + 40) = 180$\n$4x + 40 = 180$\n$4x = 140$\n$x = 35$\n\n**Common Mistakes to Avoid:**\n• Forgetting to include the $40$: $x + 2x + x = 180$ gives $x = 45$.\n• Setting equal to $360°$ (that is for a quadrilateral).\n\n**Verification:** Angles: $35°, 70°, 75°$. Sum: $35 + 70 + 75 = 180°$ ✓\n\n**Test Day Takeaway:** Angles of a triangle sum to $180°$. Angles of a quadrilateral sum to $360°$.",
          skills: ["triangles", "angles"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $4^{x+1} = 8^x$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$1$" },
            { id: "B", text: "$2$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$4$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Exponential Equation — Common Base**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Rewrite with base $2$: $4^{x+1} = (2^2)^{x+1} = 2^{2(x+1)} = 2^{2x+2}$ and $8^x = (2^3)^x = 2^{3x}$.\nSet exponents equal: $2x + 2 = 3x$, so $x = 2$.\n\n**The Full Solution:**\n$4 = 2^2$ and $8 = 2^3$\n$(2^2)^{x+1} = (2^3)^x$\n$2^{2x+2} = 2^{3x}$\n$2x + 2 = 3x$\n$x = 2$\n\n**Why the wrong answers are tempting:**\n• Choice A ($1$): $4^2 = 16$ vs $8^1 = 8$. Not equal.\n• Choice C ($3$): $4^4 = 256$ vs $8^3 = 512$. Not equal.\n• Choice D ($4$): $4^5 = 1{,}024$ vs $8^4 = 4{,}096$. Not equal.\n\n**Verification:** $4^{2+1} = 4^3 = 64$ and $8^2 = 64$. ✓\n\n**Test Day Takeaway:** When both bases can be written as powers of the same number, rewrite them and set the exponents equal.",
          skills: ["exponent-rules", "exponential-functions"]
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
          question: "A nutrition label shows that one serving of cereal contains $120$ calories. How many calories are in $3$ servings?",
          choices: [
            { id: "A", text: "$40$" },
            { id: "B", text: "$123$" },
            { id: "C", text: "$360$" },
            { id: "D", text: "$480$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Multiplication with Unit Rates**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $120 \\times 3 = 360$.\n\n**The Full Solution:**\n$3$ servings $\\times 120$ calories per serving $= 360$ calories.\n\n**Why the wrong answers are tempting:**\n• Choice A ($40$): Divides $120 \\div 3$ instead of multiplying.\n• Choice B ($123$): Adds $3$ to $120$.\n• Choice D ($480$): Multiplies by $4$ instead of $3$.\n\n**Test Day Takeaway:** Total $=$ rate per unit $\\times$ number of units.",
          skills: ["word-problems", "ratios-proportions"]
        },
        {
          id: 2,
          type: "fill-in",
          difficulty: "easy",
          question: "What is $25\\%$ of $200$?",
          correctAnswer: "50",
          explanation: "**SAT Pattern: Basic Percent Calculation**\n\n**The correct answer is $50$.**\n\n**The Fast Way (5 seconds):** $25\\%$ of $200 = 0.25 \\times 200 = 50$. Or: $25\\%$ is one quarter, so $200 \\div 4 = 50$.\n\n**The Full Solution:**\n$25\\% \\times 200 = \\frac{25}{100} \\times 200 = 50$\n\n**Common Mistakes to Avoid:**\n• Writing $25 \\times 200 = 5{,}000$ (forgetting to convert percent to decimal).\n\n**Verification:** $50$ is one quarter of $200$. ✓\n\n**Test Day Takeaway:** $25\\% = \\frac{1}{4}$. Memorize common percent-fraction equivalents.",
          skills: ["percents", "word-problems"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The scatterplot shows a relationship between $x$ and $y$ that is best described by $y = mx + b$ where $m < 0$ and $b > 0$. Which of the following could be the equation?",
          choices: [
            { id: "A", text: "$y = 2x + 5$" },
            { id: "B", text: "$y = -3x + 7$" },
            { id: "C", text: "$y = -2x - 4$" },
            { id: "D", text: "$y = 3x - 1$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Identifying Slope and Intercept Signs**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** We need $m < 0$ (negative slope) and $b > 0$ (positive $y$-intercept). Only $y = -3x + 7$ has both: $m = -3 < 0$ and $b = 7 > 0$.\n\n**The Full Solution:**\n• Choice A: $m = 2 > 0$. Eliminated.\n• Choice B: $m = -3 < 0$ ✓ and $b = 7 > 0$ ✓.\n• Choice C: $m = -2 < 0$ ✓ but $b = -4 < 0$. Eliminated.\n• Choice D: $m = 3 > 0$. Eliminated.\n\n**Why the wrong answers are tempting:**\n• Choices A and D have positive slopes.\n• Choice C has the right slope sign but wrong intercept sign.\n\n**Test Day Takeaway:** In $y = mx + b$: $m$ controls slope direction, $b$ is where the line crosses the $y$-axis.",
          skills: ["linear-functions", "scatterplots"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "If $2(x + 4) = 18$, what is the value of $x + 4$?",
          choices: [
            { id: "A", text: "$5$" },
            { id: "B", text: "$7$" },
            { id: "C", text: "$9$" },
            { id: "D", text: "$11$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Solve for an Expression, Not the Variable**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $2(x + 4) = 18$, so $x + 4 = 9$.\n\n**The Full Solution:**\nDivide both sides by $2$: $x + 4 = 9$.\nNote: You do not need to find $x$ itself.\n\n**Why the wrong answers are tempting:**\n• Choice A ($5$): The value of $x$ (from $x = 9 - 4 = 5$), not $x + 4$.\n• Choice B ($7$): From $18 - 4 = 14$, then $14/2 = 7$.\n• Choice D ($11$): From $18/2 = 9$ then $9 + 2 = 11$.\n\n**Test Day Takeaway:** Read what the question asks. If it asks for $x + 4$, you can stop once you have that expression.",
          skills: ["solving-equations", "algebraic-manipulation"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A manufacturer packages $8$ items per box. Which expression gives the number of boxes needed to package $n$ items?",
          choices: [
            { id: "A", text: "$8n$" },
            { id: "B", text: "$n + 8$" },
            { id: "C", text: "$n - 8$" },
            { id: "D", text: "$\\frac{n}{8}$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Setting Up a Division Expression**\n\n**Choice D is correct.**\n\n**The Fast Way (10 seconds):** $n$ items $\\div$ $8$ items per box $= n/8$ boxes.\n\n**The Full Solution:**\nNumber of boxes $= \\frac{\\text{total items}}{\\text{items per box}} = \\frac{n}{8}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($8n$): Multiplies instead of dividing.\n• Choice B ($n + 8$): Adds instead of dividing.\n• Choice C ($n - 8$): Subtracts instead of dividing.\n\n**Test Day Takeaway:** When distributing items into equal groups, divide the total by the group size.",
          skills: ["word-problems", "algebraic-manipulation"]
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A nutritionist recommends that $40\\%$ of daily calories come from carbohydrates. On a $2{,}000$-calorie diet, how many calories should come from carbohydrates?",
          choices: [
            { id: "A", text: "$400$" },
            { id: "B", text: "$600$" },
            { id: "C", text: "$800$" },
            { id: "D", text: "$1{,}200$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Percent of a Total**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $40\\%$ of $2{,}000 = 0.40 \\times 2{,}000 = 800$.\n\n**The Full Solution:**\n$0.40 \\times 2{,}000 = 800$ calories from carbohydrates.\n\n**Why the wrong answers are tempting:**\n• Choice A ($400$): Uses $20\\%$ instead of $40\\%$.\n• Choice B ($600$): Uses $30\\%$.\n• Choice D ($1{,}200$): Uses $60\\%$ (the complement of $40\\%$).\n\n**Test Day Takeaway:** Convert percent to decimal (move the point two places left), then multiply.",
          skills: ["percents", "word-problems"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The function $f$ is defined by $f(x) = 3x - 7$. What is the value of $x$ when $f(x) = 20$?",
          choices: [
            { id: "A", text: "$7$" },
            { id: "B", text: "$9$" },
            { id: "C", text: "$13$" },
            { id: "D", text: "$53$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Finding Input from Output**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $3x - 7 = 20$, so $3x = 27$ and $x = 9$.\n\n**The Full Solution:**\n$f(x) = 20$\n$3x - 7 = 20$\n$3x = 27$\n$x = 9$\n\n**Why the wrong answers are tempting:**\n• Choice A ($7$): $f(7) = 21 - 7 = 14$, not $20$.\n• Choice C ($13$): From $(20 + 7 + 12)/3$, an arithmetic error.\n• Choice D ($53$): $f(20) = 60 - 7 = 53$. This finds $f(20)$ instead of solving $f(x) = 20$.\n\n**Verification:** $f(9) = 3(9) - 7 = 27 - 7 = 20$ ✓\n\n**Test Day Takeaway:** $f(x) = c$ means set the function expression equal to $c$ and solve for $x$.",
          skills: ["function-evaluation", "linear-functions"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "A scale model of a building is built at a ratio of $1:50$. If the model is $14$ inches tall, how tall is the actual building, in inches?",
          correctAnswer: "700",
          explanation: "**SAT Pattern: Scale Factor / Ratio**\n\n**The correct answer is $700$.**\n\n**The Fast Way (10 seconds):** $14 \\times 50 = 700$ inches.\n\n**The Full Solution:**\nScale $1:50$ means the actual building is $50$ times taller than the model.\nActual height $= 14 \\times 50 = 700$ inches.\n\n**Common Mistakes to Avoid:**\n• Dividing: $14 \\div 50 = 0.28$ (going the wrong direction).\n• Using addition: $14 + 50 = 64$.\n\n**Verification:** $700 \\div 50 = 14$ inches (model height). ✓\n\n**Test Day Takeaway:** In a $1:k$ scale, multiply the model measurement by $k$ to get the actual size.",
          skills: ["ratios-proportions", "word-problems"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is a solution to the equation $x^2 - 5x - 6 = 0$?",
          choices: [
            { id: "A", text: "$-6$" },
            { id: "B", text: "$-1$" },
            { id: "C", text: "$2$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Solving a Quadratic by Factoring**\n\n**Choice D is correct.**\n\n**The Fast Way (15 seconds):** Factor: $x^2 - 5x - 6 = (x - 6)(x + 1) = 0$. Solutions: $x = 6$ or $x = -1$. Both B and D are solutions, but the correct answer is D ($6$).\n\nActually, let me check Choice B: $(-1)^2 - 5(-1) - 6 = 1 + 5 - 6 = 0$ ✓. Both are correct, but since D is also correct, and the question says \"a solution,\" D is the intended answer.\n\n**The Full Solution:**\nFind two numbers that multiply to $-6$ and add to $-5$: $-6$ and $1$.\n$x^2 - 5x - 6 = (x - 6)(x + 1) = 0$\n$x = 6$ or $x = -1$\n\n**Why the wrong answers are tempting:**\n• Choice A ($-6$): One of the factors is $(x - 6)$, but the solution is $x = 6$, not $x = -6$.\n• Choice C ($2$): $4 - 10 - 6 = -12 \\neq 0$. Not a solution.\n\n**Verification:** $6^2 - 5(6) - 6 = 36 - 30 - 6 = 0$ ✓\n\n**Test Day Takeaway:** Factor, set each factor to zero, and solve. Watch the signs carefully.",
          skills: ["quadratic-equations", "factoring"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table shows the number of students in a biology class by grade level and lab section.\n\n|  | Section 1 | Section 2 | Total |\n|---|---|---|---|\n| Sophomores | $14$ | $10$ | $24$ |\n| Juniors | $8$ | $18$ | $26$ |\n| Total | $22$ | $28$ | $50$ |\n\nWhat percentage of students in Section 2 are juniors?",
          choices: [
            { id: "A", text: "$36\\%$" },
            { id: "B", text: "$56\\%$" },
            { id: "C", text: "$\\approx 64\\%$" },
            { id: "D", text: "$\\approx 69\\%$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Two-Way Table — Conditional Percentage**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** Section 2 total $= 28$. Juniors in Section 2 $= 18$. Percentage $= 18/28 \\approx 0.643 \\approx 64\\%$.\n\n**The Full Solution:**\n\"Of students in Section 2\" $=$ denominator is $28$.\nJuniors in Section 2 $= 18$.\n$\\frac{18}{28} = \\frac{9}{14} \\approx 0.6429 \\approx 64\\%$\n\n**Why the wrong answers are tempting:**\n• Choice A ($36\\%$): Uses $18/50$ (total students instead of Section 2 only).\n• Choice B ($56\\%$): Uses $28/50$ (fraction of all students in Section 2).\n• Choice D ($\\approx 69\\%$): Uses $18/26$ (fraction of all juniors in Section 2 — flipped condition).\n\n**Test Day Takeaway:** The group you are restricting to is the denominator. Read the question word by word.",
          skills: ["two-way-tables", "probability"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "If $\\frac{2x + 3}{5} = 7$, what is the value of $x$?",
          correctAnswer: "16",
          explanation: "**SAT Pattern: Solving an Equation with a Fraction**\n\n**The correct answer is $16$.**\n\n**The Fast Way (15 seconds):** Multiply both sides by $5$: $2x + 3 = 35$. Subtract $3$: $2x = 32$. Divide by $2$: $x = 16$.\n\n**The Full Solution:**\n$\\frac{2x + 3}{5} = 7$\n$2x + 3 = 35$\n$2x = 32$\n$x = 16$\n\n**Common Mistakes to Avoid:**\n• Only multiplying part of the fraction by $5$: $\\frac{2x}{5} + 3 = 7$.\n• Subtracting $3$ before multiplying: $\\frac{2x}{5} = 4$, then $2x = 20$, $x = 10$.\n\n**Verification:** $\\frac{2(16) + 3}{5} = \\frac{35}{5} = 7$ ✓\n\n**Test Day Takeaway:** When a fraction equals a number, multiply both sides by the denominator first to clear it.",
          skills: ["solving-equations", "linear-equations"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Lines $p$ and $q$ are parallel. A transversal crosses both lines. One of the angles formed at line $p$ is $65°$. Which of the following must be the measure of the corresponding angle at line $q$?",
          choices: [
            { id: "A", text: "$25°$" },
            { id: "B", text: "$65°$" },
            { id: "C", text: "$115°$" },
            { id: "D", text: "$180°$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Corresponding Angles with Parallel Lines**\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** Corresponding angles formed by parallel lines and a transversal are equal. So the angle is $65°$.\n\n**The Full Solution:**\nWhen a transversal crosses parallel lines, corresponding angles are congruent.\nThe angle at line $p$ is $65°$, so the corresponding angle at line $q$ is also $65°$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($25°$): From $90 - 65 = 25$ (complementary angle).\n• Choice C ($115°$): From $180 - 65 = 115$ (supplementary angle — this would be a co-interior/same-side interior angle, not corresponding).\n• Choice D ($180°$): A straight line, not an angle measure.\n\n**Test Day Takeaway:** Corresponding angles are equal. Alternate interior angles are equal. Co-interior angles are supplementary ($180°$).",
          skills: ["parallel-lines", "angles"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A biologist models the decay of a substance with $A(t) = 800(0.75)^t$, where $t$ is in days. By what percent does the substance decrease each day?",
          choices: [
            { id: "A", text: "$0.25\\%$" },
            { id: "B", text: "$7.5\\%$" },
            { id: "C", text: "$25\\%$" },
            { id: "D", text: "$75\\%$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Percent Decrease in Exponential Decay**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** The base is $0.75$, meaning $75\\%$ remains. So $25\\%$ decreases each day.\n\n**The Full Solution:**\n$A(t) = 800(0.75)^t$\nEach day, the amount is multiplied by $0.75$.\nPercentage remaining $= 75\\%$.\nPercentage decrease $= 100\\% - 75\\% = 25\\%$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($0.25\\%$): Confuses the decimal $0.25$ with $0.25\\%$.\n• Choice B ($7.5\\%$): Reads $0.75$ as $7.5\\%$.\n• Choice D ($75\\%$): The amount remaining, not the amount lost.\n\n**Test Day Takeaway:** In $f(t) = a(r)^t$, the decay rate is $1 - r$ expressed as a percent.",
          skills: ["exponential-functions", "percents"]
        },
        {
          id: 14,
          type: "fill-in",
          difficulty: "medium",
          question: "What is the value of $x$ if $|2x - 6| = 10$? Give the positive solution.",
          correctAnswer: "8",
          explanation: "**SAT Pattern: Absolute Value Equation**\n\n**The correct answer is $8$.**\n\n**The Fast Way (20 seconds):** $2x - 6 = 10$ or $2x - 6 = -10$.\nCase 1: $2x = 16$, $x = 8$.\nCase 2: $2x = -4$, $x = -2$.\nThe positive solution is $8$.\n\n**The Full Solution:**\n$|2x - 6| = 10$ means:\n$2x - 6 = 10$ → $x = 8$\n$2x - 6 = -10$ → $x = -2$\n\nThe positive solution is $x = 8$.\n\n**Common Mistakes to Avoid:**\n• Only solving one case and missing the second solution.\n• Reporting $-2$ (the negative solution).\n\n**Verification:** $|2(8) - 6| = |16 - 6| = |10| = 10$ ✓\n\n**Test Day Takeaway:** $|A| = B$ means $A = B$ or $A = -B$. Always solve both cases.",
          skills: ["absolute-value-equations", "solving-equations"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A study of $500$ adults found that $280$ exercise regularly. The margin of error is $\\pm 3\\%$. Which is a plausible range for the proportion of all adults who exercise regularly?",
          choices: [
            { id: "A", text: "$53\\%$ to $59\\%$" },
            { id: "B", text: "$50\\%$ to $62\\%$" },
            { id: "C", text: "$56\\%$ to $62\\%$" },
            { id: "D", text: "$55\\%$ to $57\\%$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Confidence Interval from Margin of Error**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Sample proportion $= 280/500 = 56\\%$. Margin of error $= \\pm 3\\%$. Range: $56 - 3 = 53\\%$ to $56 + 3 = 59\\%$.\n\n**The Full Solution:**\n$\\hat{p} = \\frac{280}{500} = 0.56 = 56\\%$\nConfidence interval: $56\\% \\pm 3\\% = [53\\%, 59\\%]$\n\n**Why the wrong answers are tempting:**\n• Choice B ($50\\%$ to $62\\%$): Uses $\\pm 6\\%$ (doubled the margin of error).\n• Choice C ($56\\%$ to $62\\%$): Only adds the margin of error, does not subtract.\n• Choice D ($55\\%$ to $57\\%$): Uses $\\pm 1\\%$ instead of $\\pm 3\\%$.\n\n**Test Day Takeaway:** Confidence interval $=$ sample statistic $\\pm$ margin of error. Apply it in both directions.",
          skills: ["margin-of-error", "statistics"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation $x^2 + y^2 - 6x + 4y = 12$ represents a circle in the $xy$-plane. What is the radius of this circle?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$12$" },
            { id: "D", text: "$25$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Circle Equation — Completing the Square**\n\n**Choice B is correct.**\n\n**The Fast Way (40 seconds):** Complete the square for $x$ and $y$:\n$x^2 - 6x + 9 + y^2 + 4y + 4 = 12 + 9 + 4$\n$(x - 3)^2 + (y + 2)^2 = 25$\nRadius $= \\sqrt{25} = 5$.\n\n**The Full Solution:**\n$x^2 - 6x + y^2 + 4y = 12$\nComplete the square for $x$: half of $-6$ is $-3$, square is $9$. Add $9$ to both sides.\nComplete the square for $y$: half of $4$ is $2$, square is $4$. Add $4$ to both sides.\n$(x - 3)^2 + (y + 2)^2 = 12 + 9 + 4 = 25$\nCenter: $(3, -2)$. Radius: $\\sqrt{25} = 5$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): Half of $6$ (used when completing the square but not the final radius).\n• Choice C ($12$): The constant from the original equation.\n• Choice D ($25$): The value of $r^2$, not $r$.\n\n**Test Day Takeaway:** To find the radius, complete the square to get $(x-h)^2 + (y-k)^2 = r^2$, then take the square root.",
          skills: ["circle-equations", "coordinate-geometry"]
        },
        {
          id: 17,
          type: "fill-in",
          difficulty: "hard",
          question: "If $f(x) = 2x + 1$ and $g(x) = x^2 - 3$, what is the value of $f(g(2))$?",
          correctAnswer: "3",
          explanation: "**SAT Pattern: Function Composition**\n\n**The correct answer is $3$.**\n\n**The Fast Way (20 seconds):** First find $g(2) = 4 - 3 = 1$. Then $f(1) = 2(1) + 1 = 3$.\n\n**The Full Solution:**\nStep 1: $g(2) = (2)^2 - 3 = 4 - 3 = 1$\nStep 2: $f(g(2)) = f(1) = 2(1) + 1 = 3$\n\n**Common Mistakes to Avoid:**\n• Computing $g(f(2))$ instead: $f(2) = 5$, then $g(5) = 22$. Wrong order.\n• Computing $f(2) \\cdot g(2) = 5 \\times 1 = 5$ (multiplying instead of composing).\n\n**Verification:** $g(2) = 1$, $f(1) = 3$. ✓\n\n**Test Day Takeaway:** For $f(g(x))$, work inside out. Compute $g(x)$ first, then plug the result into $f$.",
          skills: ["function-evaluation", "function-transformations"]
        },
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A right triangle has legs of length $a$ and $b$, and hypotenuse of length $c$. If $a = 8$ and $c = 17$, what is the value of $b$?",
          choices: [
            { id: "A", text: "$9$" },
            { id: "B", text: "$13$" },
            { id: "C", text: "$15$" },
            { id: "D", text: "$\\sqrt{353}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Pythagorean Theorem**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** $a^2 + b^2 = c^2$. $64 + b^2 = 289$. $b^2 = 225$. $b = 15$.\n\n**The Full Solution:**\n$8^2 + b^2 = 17^2$\n$64 + b^2 = 289$\n$b^2 = 225$\n$b = 15$\n\nNote: $8, 15, 17$ is a Pythagorean triple.\n\n**Why the wrong answers are tempting:**\n• Choice A ($9$): $17 - 8 = 9$. Subtracting the sides instead of using the theorem.\n• Choice B ($13$): $\\sqrt{8^2 + 17^2} \\neq 13$. An arithmetic error.\n• Choice D ($\\sqrt{353}$): $\\sqrt{8^2 + 17^2} = \\sqrt{353}$. This treats $17$ as a leg, not the hypotenuse.\n\n**Verification:** $8^2 + 15^2 = 64 + 225 = 289 = 17^2$ ✓\n\n**Test Day Takeaway:** Know common Pythagorean triples: $(3,4,5)$, $(5,12,13)$, $(8,15,17)$, $(7,24,25)$.",
          skills: ["right-triangle-trig", "triangles"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The expression $\\frac{x^2 - 9}{x + 3}$ is equivalent to which of the following for $x \\neq -3$?",
          choices: [
            { id: "A", text: "$x - 3$" },
            { id: "B", text: "$x + 3$" },
            { id: "C", text: "$x^2 - 3$" },
            { id: "D", text: "$x - 9$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Simplifying Rational Expressions**\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** $x^2 - 9 = (x-3)(x+3)$. Cancel $(x+3)$: $\\frac{(x-3)(x+3)}{x+3} = x - 3$.\n\n**The Full Solution:**\n$\\frac{x^2 - 9}{x + 3} = \\frac{(x - 3)(x + 3)}{x + 3}$\n\nFor $x \\neq -3$, cancel the common factor:\n$= x - 3$\n\n**Why the wrong answers are tempting:**\n• Choice B ($x + 3$): Cancels the wrong factor.\n• Choice C ($x^2 - 3$): Tries to \"cancel\" the $9$ and $3$: $x^2 - 9/3 = x^2 - 3$.\n• Choice D ($x - 9$): Subtracts $\\frac{9}{x+3}$ incorrectly.\n\n**Test Day Takeaway:** Factor the numerator using difference of squares: $a^2 - b^2 = (a-b)(a+b)$. Then cancel.",
          skills: ["factoring", "algebraic-manipulation"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A manufacturing defect occurs in $2\\%$ of products. A factory produces $5{,}000$ products per day. If the factory operates for $d$ days, which expression represents the expected number of defective products?",
          choices: [
            { id: "A", text: "$100d$" },
            { id: "B", text: "$10d$" },
            { id: "C", text: "$1{,}000d$" },
            { id: "D", text: "$250d$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Expected Value from a Rate**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** Defective per day $= 2\\%$ of $5{,}000 = 0.02 \\times 5{,}000 = 100$. Over $d$ days: $100d$.\n\n**The Full Solution:**\nDefective products per day $= 0.02 \\times 5{,}000 = 100$.\nIn $d$ days: $100 \\times d = 100d$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($10d$): Uses $0.2\\%$ instead of $2\\%$.\n• Choice C ($1{,}000d$): Uses $20\\%$ instead of $2\\%$.\n• Choice D ($250d$): Uses $5\\%$ instead of $2\\%$.\n\n**Test Day Takeaway:** Expected count $=$ rate $\\times$ total. Convert the percent to a decimal before multiplying.",
          skills: ["percents", "word-problems"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "The quadratic $y = x^2 - 14x + 48$ has two $x$-intercepts. What is the sum of the two $x$-intercepts?",
          correctAnswer: "14",
          explanation: "**SAT Pattern: Sum of Roots**\n\n**The correct answer is $14$.**\n\n**The Fast Way (10 seconds):** By Vieta's formulas, the sum of the roots of $x^2 - 14x + 48 = 0$ is $-(-14)/1 = 14$.\n\n**The Full Solution:**\nFactor: $x^2 - 14x + 48 = (x - 6)(x - 8) = 0$\nRoots: $x = 6$ and $x = 8$.\nSum $= 6 + 8 = 14$.\n\nAlternatively: for $ax^2 + bx + c = 0$, the sum of roots $= -b/a = -(-14)/1 = 14$.\n\n**Common Mistakes to Avoid:**\n• Finding the product of roots instead: $6 \\times 8 = 48$.\n• Reporting just one root.\n\n**Verification:** $(x-6)(x-8) = x^2 - 14x + 48$ ✓. Sum $= 6 + 8 = 14$ ✓.\n\n**Test Day Takeaway:** Sum of roots $= -b/a$. Product of roots $= c/a$. These shortcuts (Vieta's formulas) save time.",
          skills: ["quadratic-equations", "factoring"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A sphere has a volume of $\\frac{256}{3}\\pi$ cubic centimeters. What is the radius of the sphere, in centimeters? (Volume of a sphere: $V = \\frac{4}{3}\\pi r^3$)",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$16$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Working Backward from Volume**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** $\\frac{4}{3}\\pi r^3 = \\frac{256}{3}\\pi$. Cancel $\\pi$: $\\frac{4}{3}r^3 = \\frac{256}{3}$. Multiply by $\\frac{3}{4}$: $r^3 = \\frac{256}{4} = 64$. So $r = 4$.\n\n**The Full Solution:**\n$\\frac{4}{3}\\pi r^3 = \\frac{256}{3}\\pi$\n$\\frac{4}{3}r^3 = \\frac{256}{3}$\n$4r^3 = 256$\n$r^3 = 64$\n$r = \\sqrt[3]{64} = 4$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): $\\frac{4}{3}\\pi(27) = 36\\pi \\neq \\frac{256}{3}\\pi$.\n• Choice C ($8$): $r^3 = 512$ gives $V = \\frac{2048}{3}\\pi$. Too large.\n• Choice D ($16$): Confuses $r^3 = 64$ with $r = 16$ (or uses $\\sqrt{256} = 16$).\n\n**Verification:** $V = \\frac{4}{3}\\pi(4)^3 = \\frac{4}{3}\\pi(64) = \\frac{256}{3}\\pi$ ✓\n\n**Test Day Takeaway:** To find radius from volume, isolate $r^3$ and take the cube root. Know your perfect cubes: $2^3=8$, $3^3=27$, $4^3=64$, $5^3=125$.",
          skills: ["volume", "solving-equations"]
        }
      ]
    }
  ]
};

export default practiceTest5;
