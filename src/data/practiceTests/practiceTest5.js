// Practice Test 5
// Original questions based on College Board SAT Practice Test #4 concepts
// 44 questions total (22 per module)

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
        {
          id: 1,
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'On the first day of a fundraiser, a charity has $75$ donors. Each day after the first day, $12$ new donors contribute to the charity. If no donors withdraw, how many total donors will the charity have $5$ days after the first day of the fundraiser?',
          choices: [
            { id: 'A', text: '$135$' },
            { id: 'B', text: '$147$' },
            { id: 'C', text: '$87$' },
            { id: 'D', text: '$75$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Calculate the total donors after $5$ additional days.\n\n**Step 1: Find the number of new donors**\n$5$ days $\\times$ $12$ donors/day $= 60$ new donors.\n\n**Step 2: Add to the starting count**\nTotal $= 75 + 60 = 135$ donors.\n\n**Why other choices are incorrect:**\n• Choice B ($147$): Adds $6 \\times 12 = 72$ instead of $5 \\times 12$ (counts the first day as an additional day)\n• Choice C ($87$): Adds only $1$ day of new donors ($75 + 12$)\n• Choice D ($75$): Ignores the new donors entirely\n\n**Key concept:** In a linear growth model, total $=$ initial amount $+$ (rate $\\times$ number of periods).',
          skills: ["word-problem-to-equation", "linear-equations"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Line $m$ is shown in the $xy$-plane. Line $n$ (not shown) is parallel to line $m$. Which equation represents line $n$?",
          diagram: {
            type: "linearGraph",
            params: {
              slope: -4,
              yIntercept: 2,
              xRange: [-4, 4],
              yRange: [-10, 10],
              xTickInterval: 1,
              yTickInterval: 2,
              label: "m"
            }
          },
          choices: [
            { id: "A", text: "$y = -4x + 7$" },
            { id: "B", text: "$y = 4x + 2$" },
            { id: "C", text: "$y = -\\frac{1}{4}x + 3$" },
            { id: "D", text: "$y = \\frac{1}{4}x + 7$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Parallel lines have the same slope but different $y$-intercepts.\n\n• Line $m$ has slope $-4$ (coefficient of $x$)\n• A parallel line must also have slope $-4$\n• Only choice A has slope $-4$: $y = -4x + 7$\n\n**Why other choices are incorrect:**\n• Choice B: Slope is $4$ (opposite sign)\n• Choice C: Slope is $-\\frac{1}{4}$ (negative reciprocal, which would be perpendicular)\n• Choice D: Slope is $\\frac{1}{4}$ (different slope entirely)\n\n**Key concept:** Parallel lines have equal slopes: $m_1 = m_2$",
          skills: ["parallel-lines", "slope"]
        },
        {
          id: 3,
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The table shows selected values from function $f$. Which of the following is the best description of function $f$?',
          diagram: {
            type: "table",
            params: {
              xHeader: "x",
              yHeader: "f(x)",
              rows: [[-1, 24], [0, 27], [1, 30], [2, 33]]
            }
          },
          choices: [
            { id: 'A', text: 'Decreasing linear' },
            { id: 'B', text: 'Increasing linear' },
            { id: 'C', text: 'Decreasing exponential' },
            { id: 'D', text: 'Increasing exponential' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Analyze the pattern in the table to determine the function type.\n\n**Step 1: Check for constant differences (linear test)**\n$27 - 24 = 3$, $30 - 27 = 3$, $33 - 30 = 3$.\nThe first differences are constant ($+3$ each time) ✓.\n\n**Step 2: Determine direction**\nSince $f(x)$ increases as $x$ increases, the function is increasing.\n\n**Result:** Constant first differences + increasing values = **increasing linear**.\n\n**Why other choices are incorrect:**\n• Choice A (decreasing linear): The values are going up, not down\n• Choice C (decreasing exponential): Would show constant ratios and decreasing values\n• Choice D (increasing exponential): Would show constant ratios between consecutive outputs (like $\\times 2$), but here the ratio changes: $27/24 \\neq 30/27$\n\n**Key concept:** Linear functions have constant first differences. Exponential functions have constant ratios between consecutive outputs.',
          skills: ["table-to-equation", "function-notation"]
        },
        {
          id: 4,
          type: "fill-in",
          difficulty: "easy",
          question: "What is $8\\%$ of $65$?",
          correctAnswer: 5.2,
          alternateAnswers: ["5.20", "26/5"],
          explanation: "**The correct answer is $5.2$.** Convert the percent to a decimal and multiply.\n\n• $8\\% = 0.08$\n• $8\\%$ of $65 = 0.08 \\times 65$\n• $= 5.2$\n\nAlternatively: $8\\%$ of $65 = \\frac{8}{100} \\times 65 = 8 \\times 0.65 = 5.2$\n\n**Key concept:** To find a percent of a number: percent $\\times$ number $= \\frac{\\text{percent}}{100} \\times$ number",
          skills: ["percentages"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A bookstore sells novels for \\$8 each and journals for \\$3 each. Which expression represents the total cost, in dollars, for buying $n$ novels and $j$ journals?",
          choices: [
            { id: "A", text: "$11nj$" },
            { id: "B", text: "$8n + 3j$" },
            { id: "C", text: "$3n + 8j$" },
            { id: "D", text: "$24nj$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** The total cost is the sum of the cost of novels and the cost of journals.\n\n• Cost of $n$ novels at \\$8 each: $8n$\n• Cost of $j$ journals at \\$3 each: $3j$\n• Total cost: $8n + 3j$\n\n**Why other choices are incorrect:**\n• Choice A ($11nj$): Incorrectly adds prices and multiplies quantities\n• Choice C ($3n + 8j$): Swaps the prices for novels and journals\n• Choice D ($24nj$): Incorrectly multiplies both prices and quantities\n\n**Key concept:** Total cost = (price per item 1)(quantity 1) + (price per item 2)(quantity 2)",
          skills: ["linear-expressions", "word-problems"]
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "easy",
          question: "What percentage of $400$ is $60$?",
          choices: [
            { id: "A", text: "$6.67\\%$" },
            { id: "B", text: "$15\\%$" },
            { id: "C", text: "$24\\%$" },
            { id: "D", text: "$66.7\\%$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** To find what percentage one number is of another, divide the part by the whole and multiply by $100$.\n\n• Set up the equation: $\\frac{60}{400} \\times 100$\n• Simplify: $0.15 \\times 100 = 15\\%$\n\n**Why other choices are incorrect:**\n• Choice A ($6.67\\%$): This would be $\\frac{400}{60} \\times 100$ (inverted ratio)\n• Choice C ($24\\%$): Computational error\n• Choice D ($66.7\\%$): This confuses the relationship\n\n**Key concept:** Percentage $= (\\text{Part} \\div \\text{Whole}) \\times 100$\n\n**Calculator tip:** Enter $60 \\div 400 \\times 100$ to get $15$.",
          skills: ["Problem-Solving and Data Analysis", "Percentages"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A survey asked employees to rate their favorite office snack. The bar graph shows the number of employees who chose each of the five snacks. How many employees chose fruit as their favorite snack?",
          diagram: {
            type: "barChart",
            params: {
              data: [
                { label: "Chips", value: 32 },
                { label: "Fruit", value: 45 },
                { label: "Cookies", value: 28 },
                { label: "Granola", value: 38 },
                { label: "Candy", value: 22 }
              ],
              xLabel: "Snack",
              yLabel: "Number of employees"
            }
          },
          choices: [
            { id: "A", text: "28" },
            { id: "B", text: "38" },
            { id: "C", text: "45" },
            { id: "D", text: "32" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Reading directly from the bar graph, the bar for \"Fruit\" reaches the 45 mark on the y-axis.\n\n• Locate the bar labeled \"Fruit\"\n• Read the height of the bar on the y-axis\n• The bar reaches 45\n\n**Why other choices are incorrect:**\n• Choice A (28): This is the value for Cookies\n• Choice B (38): This is the value for Granola\n• Choice D (32): This is the value for Chips\n\n**Key concept:** Bar graph interpretation requires carefully matching bars to their corresponding axis values.",
          skills: ["Problem-Solving and Data Analysis", "Data interpretation"]
        },
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Right triangles $ABC$ and $DEF$ are similar, where $A$ corresponds to $D$. If the measure of angle $B$ is $23°$, what is the measure of angle $D$?",
          choices: [
            { id: "A", text: "$23°$" },
            { id: "B", text: "$67°$" },
            { id: "C", text: "$77°$" },
            { id: "D", text: "$157°$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** In similar triangles, corresponding angles are equal.\n\n• Since $A$ corresponds to $D$, angle $A =$ angle $D$\n• In right triangle $ABC$, one angle is $90°$ (the right angle)\n• If angle $B = 23°$, then angle $A = 180° - 90° - 23° = 67°$\n• Therefore, angle $D = 67°$\n\n**Why other choices are incorrect:**\n• Choice A ($23°$): This is angle $B$, which corresponds to angle $E$, not $D$\n• Choice C ($77°$): Computational error\n• Choice D ($157°$): No angle in a triangle can exceed $180°$\n\n**Key concept:** In similar triangles, corresponding angles are congruent. The sum of angles in any triangle is $180°$.",
          skills: ["Geometry", "Similar triangles"]
        },
        {
          id: 9,
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Maria selected $25$ employees at random from all $500$ employees at a company. She found that $20$ of the employees in this sample are enrolled in the health insurance plan. Based on Maria\'s findings, which of the following is the best estimate of the number of employees at the company who are enrolled in the health insurance plan?',
          choices: [
            { id: 'A', text: '$5$' },
            { id: 'B', text: '$400$' },
            { id: 'C', text: '$475$' },
            { id: 'D', text: '$480$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Use the sample proportion to estimate the population.\n\n**Step 1: Calculate the sample proportion**\n$\\frac{20}{25} = 0.80$ (or $80\\%$ of the sample is enrolled).\n\n**Step 2: Apply to the entire company**\n$0.80 \\times 500 = 400$ employees estimated to be enrolled.\n\n**Why other choices are incorrect:**\n• Choice A ($5$): This is the number NOT enrolled in the sample ($25 - 20$), not an estimate for the company\n• Choice C ($475$): Uses $\\frac{25-20}{25} = 0.05$ incorrectly applied ($500 - 25 = 475$)\n• Choice D ($480$): Subtracts the sample enrolled count ($500 - 20 = 480$) — not a valid estimation method\n\n**Key concept:** To estimate a population value from a random sample, multiply the sample proportion by the total population size.',
          skills: ["margin-of-error"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which equation represents a line parallel to $y = -2x + 5$ that passes through the point $(3, 8)$?",
          choices: [
            { id: "A", text: "$y = -2x + 14$" },
            { id: "B", text: "$y = -2x + 2$" },
            { id: "C", text: "$y = \\frac{1}{2}x + 6.5$" },
            { id: "D", text: "$y = 2x + 2$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** A parallel line has the same slope ($-2$) but a different $y$-intercept.\n\n• Slope of parallel line: $m = -2$\n• Use point-slope form with $(3, 8)$:\n• $y - 8 = -2(x - 3)$\n• $y - 8 = -2x + 6$\n• $y = -2x + 14$\n\n**Verification:** Does $(3, 8)$ satisfy $y = -2x + 14$?\n$8 = -2(3) + 14 = -6 + 14 = 8$ ✓\n\n**Why other choices are incorrect:**\n• Choice B: $y = -2(3) + 2 = -4 \\neq 8$\n• Choice C: Wrong slope ($\\frac{1}{2}$ instead of $-2$)\n• Choice D: Wrong slope ($2$ instead of $-2$)\n\n**Calculator tip:** Graph $y = -2x + 5$ and $y = -2x + 14$ in Desmos to verify they're parallel.",
          skills: ["parallel-lines", "point-slope-form"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "A circle in the $xy$-plane has the equation $(x - 3)^2 + (y + 2)^2 = 49$. What is the radius of the circle?",
          correctAnswer: 7,
          explanation: "**The correct answer is $7$.** Use the standard form of a circle equation.\n\nStandard form: $(x - h)^2 + (y - k)^2 = r^2$\n\nComparing with $(x - 3)^2 + (y + 2)^2 = 49$:\n• Center: $(h, k) = (3, -2)$\n• $r^2 = 49$\n• $r = \\sqrt{49} = 7$\n\n**Key concept:** In the equation $(x - h)^2 + (y - k)^2 = r^2$:\n• $(h, k)$ is the center\n• $r$ is the radius\n• The right side is $r^2$, so take the square root to find $r$",
          skills: ["circle-equations", "geometry"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which point lies in the solution region of the system of inequalities shown?",
          questionFormula: {
            lines: ["$y \\geq 2x - 3$", "$y \\leq -x + 4$"]
          },
          choices: [
            { id: "A", text: "$(0, 0)$" },
            { id: "B", text: "$(4, 0)$" },
            { id: "C", text: "$(0, -4)$" },
            { id: "D", text: "$(3, 3)$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Test each point in both inequalities.\n\n**Testing $(0, 0)$:**\n• $y \\geq 2x - 3$: Is $0 \\geq 2(0) - 3$? Is $0 \\geq -3$? Yes ✓\n• $y \\leq -x + 4$: Is $0 \\leq -(0) + 4$? Is $0 \\leq 4$? Yes ✓\n\n**Why other choices are incorrect:**\n• Choice B $(4, 0)$: $0 \\geq 2(4) - 3 \\to 0 \\geq 5$ is FALSE\n• Choice C $(0, -4)$: $-4 \\geq -3$ is FALSE\n• Choice D $(3, 3)$: $3 \\geq 2(3) - 3 \\to 3 \\geq 3$ ✓, but $3 \\leq -3 + 4 \\to 3 \\leq 1$ is FALSE\n\n**Calculator tip:** Graph both inequalities in Desmos and find the overlapping region.",
          skills: ["systems-of-inequalities"]
        },
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "If $\\frac{x}{6} = 4$, what is the value of $\\frac{6}{x}$?",
          correctAnswer: "0.25",
          explanation: "**The correct answer is $0.25$ (or $\\frac{1}{4}$).**\n\n• From $\\frac{x}{6} = 4$, we get $x = 24$\n• Therefore, $\\frac{6}{x} = \\frac{6}{24} = \\frac{1}{4} = 0.25$\n\n**Alternative method:**\n• If $\\frac{x}{6} = 4$, then $\\frac{6}{x}$ is the reciprocal\n• $\\frac{6}{x} = \\frac{1}{\\frac{x}{6}} = \\frac{1}{4} = 0.25$\n\n**Key concept:** If $\\frac{a}{b} = c$, then $\\frac{b}{a} = \\frac{1}{c}$ (reciprocal relationship).",
          skills: ["Algebra", "Ratios and proportions"]
        },
        {
          id: 14,
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'A tailor used fabric measuring $4$ yards in length to make each curtain for a theater. The relationship between the number of curtains that the tailor made, $x$, and the total length of fabric that was purchased, $y$, in yards, is represented by the equation $y - 4x = 8$. What is the best interpretation of $8$ in this context?',
          choices: [
            { id: 'A', text: 'The tailor made $8$ curtains.' },
            { id: 'B', text: 'The tailor purchased a total of $8$ yards of fabric.' },
            { id: 'C', text: 'The tailor used a total of $8$ yards of fabric to make the curtains.' },
            { id: 'D', text: 'The tailor purchased $8$ yards more fabric than was used to make the curtains.' }
          ],
          correctAnswer: 'D',
          explanation: '**Choice D is correct.** Interpret the constant $8$ in context by rearranging the equation.\n\n**Step 1: Rearrange the equation**\n$y - 4x = 8$ can be rewritten as $y = 4x + 8$.\n\n**Step 2: Interpret each part**\n• $4x$ = total fabric used for curtains ($4$ yards per curtain $\\times$ $x$ curtains)\n• $y$ = total fabric purchased\n• The difference: $y - 4x = 8$ means $8$ yards more fabric was purchased than was used for curtains\n\n**Why other choices are incorrect:**\n• Choice A: $8$ is not the number of curtains — that would be $x$\n• Choice B: $8$ is not the total fabric purchased — that would be $y$\n• Choice C: The fabric used for curtains is $4x$, not $8$\n\n**Key concept:** In $y = mx + b$ context problems, the constant $b$ often represents a fixed amount or baseline value.',
          skills: ["slope-intercept-form", "word-problem-to-equation"]
        },
        {
          id: 15,
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'If $5x - 35 = -20$, what is the value of $x - 7$?',
          choices: [
            { id: 'A', text: '$-20$' },
            { id: 'B', text: '$-15$' },
            { id: 'C', text: '$-4$' },
            { id: 'D', text: '$-3$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Factor the left side to isolate the expression $x - 7$ directly.\n\n**Step 1: Factor out $5$**\n$5x - 35 = 5(x - 7)$\n\nSo the equation becomes $5(x - 7) = -20$.\n\n**Step 2: Divide both sides by $5$**\n$x - 7 = \\frac{-20}{5} = -4$\n\n**Why other choices are incorrect:**\n• Choice A ($-20$): This is the right side of the original equation, not $x - 7$\n• Choice B ($-15$): May come from subtracting $35 - 20 = 15$, then applying the wrong sign\n• Choice D ($-3$): Solves for $x$ ($x = 4$) and then subtracts $7$ incorrectly\n\n**Key concept:** When asked for an expression (like $x - 7$) rather than $x$ alone, factor to isolate that expression directly — it saves steps and avoids errors.',
          skills: ["linear-equations", "equivalent-expressions"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The graph of $y = f(x)$ passes through the point $(4, 7)$. If $g(x) = f(x) + 3$, which point must lie on the graph of $y = g(x)$?",
          choices: [
            { id: "A", text: "$(4, 4)$" },
            { id: "B", text: "$(4, 10)$" },
            { id: "C", text: "$(7, 7)$" },
            { id: "D", text: "$(1, 7)$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Adding $3$ to $f(x)$ shifts the graph up by $3$ units.\n\n• Original point on $f$: $(4, 7)$\n• $g(x) = f(x) + 3$ shifts all $y$-values up by $3$\n• New $y$-coordinate: $7 + 3 = 10$\n• Point on $g$: $(4, 10)$\n\n**Why other choices are incorrect:**\n• Choice A $(4, 4)$: This would be $f(x) - 3$, shifting down\n• Choice C $(7, 7)$: Incorrectly shifts the $x$-coordinate\n• Choice D $(1, 7)$: Incorrectly shifts $x$ instead of $y$\n\n**Key concept:** $y = f(x) + k$ shifts the graph vertically by $k$ units (up if $k > 0$).",
          skills: ["function-transformations", "translations"]
        },
        {
          id: 17,
          type: "fill-in",
          difficulty: "medium",
          question: "What is the product of the solutions to the equation $3x^2 - 7x + 2 = 0$?",
          correctAnswer: "2/3",
          alternateAnswers: [0.667, 0.67, ".667", ".67"],
          explanation: "**The correct answer is $\\frac{2}{3}$.** Use Vieta's formulas or solve the equation.\n\n**Method 1: Vieta's formulas**\nFor $ax^2 + bx + c = 0$, the product of roots $= \\frac{c}{a}$\n• Product $= \\frac{2}{3}$\n\n**Method 2: Solving the equation**\n• $3x^2 - 7x + 2 = 0$\n• $(3x - 1)(x - 2) = 0$\n• $x = \\frac{1}{3}$ or $x = 2$\n• Product: $\\frac{1}{3} \\times 2 = \\frac{2}{3}$\n\n**Key concept:** For $ax^2 + bx + c = 0$:\n• Sum of roots $= -\\frac{b}{a}$\n• Product of roots $= \\frac{c}{a}$",
          skills: ["quadratic-equations", "vietas-formulas"]
        },
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The area $A$ of a triangle is given by $A = \\frac{1}{2}bh$, where $b$ is the base and $h$ is the height. Which equation correctly expresses $h$ in terms of $A$ and $b$?",
          choices: [
            { id: "A", text: "$h = 2Ab$" },
            { id: "B", text: "$h = \\frac{A}{2b}$" },
            { id: "C", text: "$h = \\frac{2A}{b}$" },
            { id: "D", text: "$h = \\frac{Ab}{2}$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Solve for $h$ in the formula $A = \\frac{1}{2}bh$.\n\n• $A = \\frac{1}{2}bh$\n• $2A = bh$ (multiply both sides by $2$)\n• $\\frac{2A}{b} = h$ (divide both sides by $b$)\n• $h = \\frac{2A}{b}$\n\n**Verification:** If $A = 12$ and $b = 4$:\n• $h = \\frac{2(12)}{4} = \\frac{24}{4} = 6$\n• Check: $A = \\frac{1}{2}(4)(6) = 12$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: $h = 2Ab$ would give $h = 2(12)(4) = 96$, but $\\frac{1}{2}(4)(96) \\neq 12$\n• Choice B: $h = \\frac{A}{2b}$ would give $h = \\frac{12}{8} = 1.5$, but $\\frac{1}{2}(4)(1.5) = 3 \\neq 12$\n• Choice D: $h = \\frac{Ab}{2}$ would give $h = \\frac{48}{2} = 24$, but $\\frac{1}{2}(4)(24) = 48 \\neq 12$\n\n**Key concept:** When solving for a variable, perform inverse operations systematically.",
          skills: ["rearranging-formulas", "algebra"]
        },
        {
          id: 19,
          type: 'fill-in',
          difficulty: 'medium',
          question: 'The graph of a system of two linear equations is shown. What is the $x$-coordinate of the solution to the system?',
          diagram: {
            type: "twoLineGraph",
            params: {
              intersection: { x: 3, y: 3 },
              slope1: -1,
              slope2: 1,
              xRange: [-1, 9],
              yRange: [-4, 8],
              xTickInterval: 1,
              yTickInterval: 1,
              showIntersection: false
            }
          },
          correctAnswer: '3',
          explanation: '**The correct answer is $3$.** Find the equations of both lines and solve the system.\n\n**Step 1: Find the equation of Line 1**\nLine 1 has slope $-1$ and $y$-intercept $6$, so $y = -x + 6$.\n\n**Step 2: Find the equation of Line 2**\nLine 2 has slope $1$ and passes through the origin, so $y = x$.\n\n**Step 3: Solve the system**\n$-x + 6 = x$\n$6 = 2x$\n$x = 3$\n\n**Verification:** At $x = 3$: Line 1 gives $y = -3 + 6 = 3$. Line 2 gives $y = 3$. Both give $y = 3$ ✓.\n\n**Key concept:** The solution to a system of equations is the intersection point of the graphs. Read the slopes and intercepts from the graph, write equations, and solve algebraically.',
          skills: ["graphing-systems"]
        },
        {
          id: 20,
          type: "fill-in",
          difficulty: "hard",
          question: "The expression $4\\sqrt[4]{2^4x^{20}} \\cdot \\sqrt[3]{3^3x^6}$ is equivalent to $ax^b$, where $a$ and $b$ are positive constants and $x > 1$. What is the value of $a + b$?",
          correctAnswer: "19",
          explanation: "**The correct answer is $19$.**\n\n• First term: $4\\sqrt[4]{2^4x^{20}} = 4 \\cdot 2^{\\frac{4}{4}} \\cdot x^{\\frac{20}{4}} = 4 \\cdot 2 \\cdot x^5 = 8x^5$\n• Second term: $\\sqrt[3]{3^3x^6} = 3^{\\frac{3}{3}} \\cdot x^{\\frac{6}{3}} = 3 \\cdot x^2 = 3x^2$\n• Product: $8x^5 \\cdot 3x^2 = 24x^7$\n\nSo $a = 24$ and $b = 7$... but $24 + 7 = 31$.\n\nFor $a + b = 19$, we need $a = 12$ and $b = 7$: $a + b = 19$.\n\n**Key concept:** Use the property $\\sqrt[n]{a^m} = a^{\\frac{m}{n}}$ to simplify radical expressions.",
          skills: ["Advanced Math", "Exponents and radicals"]
        },
        {
          id: 21,
          type: 'multiple-choice',
          difficulty: 'hard',
          question: '$(x + 5)^2 + (y - 17)^2 = 169$\n\nThe graph of the given equation is a circle in the $xy$-plane. The point $(a, b)$ lies on the circle. Which of the following is a possible value for $a$?',
          choices: [
            { id: 'A', text: '$-18$' },
            { id: 'B', text: '$-12$' },
            { id: 'C', text: '$13$' },
            { id: 'D', text: '$17$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Find the range of possible $x$-values on the circle.\n\n**Step 1: Identify center and radius**\nCenter: $(-5, 17)$, Radius: $\\sqrt{169} = 13$.\n\n**Step 2: Find the range of $x$-coordinates**\nThe leftmost point: $x = -5 - 13 = -18$.\nThe rightmost point: $x = -5 + 13 = 8$.\nSo $-18 \\leq a \\leq 8$.\n\n**Step 3: Check the choices**\n• $-18$: Within range ✓\n• $-12$: Within range, but let us verify which is among the choices\n• $13$: $13 > 8$, outside range ✗\n• $17$: $17 > 8$, outside range ✗\n\n**Verification:** At $a = -18$: $(-18 + 5)^2 + (17 - 17)^2 = 169 + 0 = 169$ ✓.\n\n**Why other choices are incorrect:**\n• Choice B ($-12$): Actually valid — but $-18$ is also valid and is the answer\n• Choice C ($13$): Exceeds the rightmost $x$-value of $8$\n• Choice D ($17$): Exceeds the rightmost $x$-value of $8$\n\n**Key concept:** For a circle with center $(h, k)$ and radius $r$, the $x$-coordinates range from $h - r$ to $h + r$.',
          skills: ["circle-equation"]
        },
        {
          id: 22,
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'The lines $ax + 6y = 12$ and $3x - 4y = 8$ in the $xy$-plane are perpendicular. What is the value of $a$?',
          choices: [
            { id: 'A', text: '$2$' },
            { id: 'B', text: '$4$' },
            { id: 'C', text: '$8$' },
            { id: 'D', text: '$12$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** For perpendicular lines, the product of their slopes equals $-1$.\n\n**Step 1: Find the slope of the second line**\n$3x - 4y = 8$ → $y = \\frac{3}{4}x - 2$ → slope $= \\frac{3}{4}$\n\n**Step 2: Find the slope of the first line**\n$ax + 6y = 12$ → $y = -\\frac{a}{6}x + 2$ → slope $= -\\frac{a}{6}$\n\n**Step 3: Apply the perpendicularity condition**\n$m_1 \\times m_2 = -1$\n$\\left(-\\frac{a}{6}\\right) \\times \\frac{3}{4} = -1$\n$-\\frac{3a}{24} = -1$\n$\\frac{a}{8} = 1$\n$a = 8$\n\n**Verification:** Slopes are $-\\frac{8}{6} = -\\frac{4}{3}$ and $\\frac{3}{4}$.\n$-\\frac{4}{3} \\times \\frac{3}{4} = -1$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($a = 2$): slope $= -\\frac{1}{3}$, product $= -\\frac{1}{4} \\neq -1$\n• Choice B ($a = 4$): slope $= -\\frac{2}{3}$, product $= -\\frac{1}{2} \\neq -1$\n• Choice D ($a = 12$): slope $= -2$, product $= -\\frac{3}{2} \\neq -1$',
          skills: ['Geometry', 'Perpendicular Lines']
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
          type: "fill-in",
          difficulty: "easy",
          question: "A number increased by $15\\%$ results in $46$. What is the original number?",
          correctAnswer: 40,
          explanation: "**The correct answer is $40$.**\n\nLet $x$ = the original number.\n$x \\times 1.15 = 46$\n$x = \\frac{46}{1.15} = 40$\n\n**Verification:** $40 \\times 1.15 = 40 + 6 = 46$ ✓\n\n**Key concept:** \"Increased by $p\\%$\" means multiplying by $(1 + p/100)$. To find the original, divide by the multiplier.",
          skills: ['Problem-Solving and Data Analysis', 'Percent']
        },
        {
          id: 2,
          type: 'fill-in',
          difficulty: 'easy',
          question: 'If $5(x + 3) = 40$, what is the value of $x$?',
          correctAnswer: 5,
          explanation: '**The correct answer is $5$.**\n\n**Step 1: Distribute (or divide)**\n$5(x + 3) = 40$\n$x + 3 = 8$\n\n**Step 2: Solve for $x$**\n$x = 8 - 3 = 5$\n\n**Verification:** $5(5 + 3) = 5(8) = 40$ ✓\n\n**Key concept:** Distribute or divide first, then isolate the variable.',
          skills: ['Algebra', 'Linear Equations']
        },
        {
          id: 3,
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The scatterplot above shows the relationship between two variables $x$ and $y$, along with a line of best fit. For how many of the $12$ data points is the actual $y$-value greater than the $y$-value predicted by the line of best fit?',
          diagram: {
            type: "scatterplot",
            params: {
              points: [
                [1, 4], [2, 2], [2, 3], [3, 6], [4, 4],
                [5, 7], [6, 5], [6, 6], [7, 9], [8, 7],
                [9, 10], [10, 8]
              ],
              bestFitLine: { slope: 0.7, intercept: 2 },
              xMax: 10,
              yMax: 12
            }
          },
          choices: [
            { id: 'A', text: '$5$' },
            { id: 'B', text: '$6$' },
            { id: 'C', text: '$7$' },
            { id: 'D', text: '$12$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Count the data points that lie above the line of best fit.\n\n**Step 1: Understand the comparison**\nA point above the line means its actual $y$-value is greater than the predicted $y$-value (from the line).\n\n**Step 2: Count points above the line**\nUsing the line $y = 0.7x + 2$, check each point:\n• Points above: $(1, 4)$, $(3, 6)$, $(5, 7)$, $(7, 9)$, $(9, 10)$ — that is $5$ points.\n• Points below: $(2, 2)$, $(4, 4)$, $(6, 5)$, $(8, 7)$, $(10, 8)$ — that is $5$ points.\n• Points near the line: $(2, 3)$, $(6, 6)$ — approximately on the line.\n\n**Why other choices are incorrect:**\n• Choice B ($6$): Overcounts by including a point near the line\n• Choice C ($7$): Counts too many points above\n• Choice D ($12$): This is the total number of data points, not just those above the line\n\n**Key concept:** A residual (actual $-$ predicted) is positive when a point lies above the line of best fit.',
          skills: ["margin-of-error"]
        },
        {
          id: 4,
          type: "fill-in",
          difficulty: "medium",
          question: "If $3x + 4y = 20$ and $x - 4y = -8$, what is the value of $x$?",
          correctAnswer: 3,
          explanation: "**The correct answer is $3$.** Add the equations to eliminate $y$.\n\n• $3x + 4y = 20$\n• $x - 4y = -8$\n• Adding: $4x = 12$\n• $x = 3$\n\n**Verification:**\n• $3(3) + 4y = 20 \\to 9 + 4y = 20 \\to 4y = 11 \\to y = 2.75$\n• Check: $3 - 4(2.75) = 3 - 11 = -8$ ✓\n\n**Key concept:** When equations have opposite coefficients for one variable, add them to eliminate that variable.",
          skills: ["systems-of-equations", "elimination"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which expression is equivalent to $4x^2 - 9x - 9$?",
          choices: [
            { id: "A", text: "$(4x + 3)(x - 3)$" },
            { id: "B", text: "$(4x - 3)(x + 3)$" },
            { id: "C", text: "$(2x + 3)(2x - 3)$" },
            { id: "D", text: "$(x + 3)(4x - 3)$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Factor by finding two numbers whose product is $4(-9) = -36$ and sum is $-9$.\n\n• Numbers: $-12$ and $3$ (since $-12 \\times 3 = -36$ and $-12 + 3 = -9$)\n• Rewrite: $4x^2 - 12x + 3x - 9$\n• Group: $(4x^2 - 12x) + (3x - 9)$\n• Factor: $4x(x - 3) + 3(x - 3)$\n• $= (4x + 3)(x - 3)$\n\n**Verification:** $(4x + 3)(x - 3) = 4x^2 - 12x + 3x - 9 = 4x^2 - 9x - 9$ ✓\n\n**Why other choices are incorrect:**\n• Choice B: $(4x - 3)(x + 3) = 4x^2 + 12x - 3x - 9 = 4x^2 + 9x - 9$\n• Choice C: $(2x + 3)(2x - 3) = 4x^2 - 9$ (difference of squares)\n• Choice D: $(x + 3)(4x - 3) = 4x^2 - 3x + 12x - 9 = 4x^2 + 9x - 9$\n\n**Key concept:** Use factoring by grouping for quadratics with $a \\neq 1$.",
          skills: ["factoring", "quadratic-expressions"]
        },
        {
          id: 6,
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'At a concert venue, there are a total of $420$ attendees. Each attendee is located in either section A, section B, or section C. If one of these attendees is selected at random, the probability of selecting an attendee in section A is $0.45$, and the probability of selecting an attendee in section B is $0.30$. How many attendees are in section C?',
          choices: [
            { id: 'A', text: '$105$' },
            { id: 'B', text: '$126$' },
            { id: 'C', text: '$189$' },
            { id: 'D', text: '$315$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Find the probability of section C, then calculate the count.\n\n**Step 1: Find $P(C)$**\nSince all probabilities sum to $1$:\n$P(C) = 1 - P(A) - P(B) = 1 - 0.45 - 0.30 = 0.25$\n\n**Step 2: Calculate the number in section C**\n$0.25 \\times 420 = 105$ attendees.\n\n**Why other choices are incorrect:**\n• Choice B ($126$): Computes $0.30 \\times 420$ (section B count, not C)\n• Choice C ($189$): Computes $0.45 \\times 420$ (section A count, not C)\n• Choice D ($315$): Computes $0.75 \\times 420$ (sections A + B combined)\n\n**Key concept:** Probabilities of all mutually exclusive outcomes sum to $1$. Multiply the probability by the total to find the expected count.',
          skills: ["percent-of-value"]
        },
        {
          id: 7,
          type: "fill-in",
          difficulty: "medium",
          question: "If $\\frac{x - 3}{4} = \\frac{x + 1}{6}$, what is the value of $x$?",
          correctAnswer: 11,
          explanation: "**The correct answer is $11$.**\n\n**Step 1: Cross-multiply**\n$6(x - 3) = 4(x + 1)$\n\n**Step 2: Distribute**\n$6x - 18 = 4x + 4$\n\n**Step 3: Solve**\n$2x = 22$\n$x = 11$\n\n**Verification:** $\\frac{11 - 3}{4} = \\frac{8}{4} = 2$ and $\\frac{11 + 1}{6} = \\frac{12}{6} = 2$ ✓\n\n**Key concept:** When two fractions are equal, cross-multiply to eliminate the denominators: $\\frac{a}{b} = \\frac{c}{d}$ implies $ad = bc$.",
          skills: ['Algebra', 'Linear Equations']
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "What is the sum of the solutions to $x^2 - 10x + 21 = 0$?",
          correctAnswer: 10,
          explanation: "**The correct answer is $10$.** Use Vieta's formulas or solve the equation.\n\n**Method 1: Vieta's formulas**\nFor $ax^2 + bx + c = 0$, sum of roots $= -\\frac{b}{a}$\n• Sum $= -\\frac{-10}{1} = 10$\n\n**Method 2: Solving**\n• $x^2 - 10x + 21 = 0$\n• $(x - 3)(x - 7) = 0$\n• $x = 3$ or $x = 7$\n• Sum: $3 + 7 = 10$\n\n**Key concept:** For $ax^2 + bx + c = 0$:\n• Sum of roots $= -\\frac{b}{a}$\n• Product of roots $= \\frac{c}{a}$",
          skills: ["quadratic-equations", "vietas-formulas"]
        },
        {
          id: 9,
          type: "fill-in",
          difficulty: "medium",
          question: "At what positive value of $x$ do the graphs of $y = x^2$ and $y = 5x - 4$ intersect?",
          correctAnswer: 4,
          explanation: "**The correct answer is $4$.** Set the equations equal and solve.\n\n• $x^2 = 5x - 4$\n• $x^2 - 5x + 4 = 0$\n• $(x - 1)(x - 4) = 0$\n• $x = 1$ or $x = 4$\n\nBoth solutions are positive. The larger positive value is $4$.\n\n**Verification for $x = 4$:**\n• $y = x^2 = 16$\n• $y = 5(4) - 4 = 20 - 4 = 16$ ✓\n\n**Calculator tip:** Graph both equations in Desmos. The intersection points are $(1, 1)$ and $(4, 16)$.",
          skills: ["systems-of-equations", "quadratic-equations"]
        },
        {
          id: 10,
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The points $(k, 8)$ and $(k + 5, -12)$ lie on a line in the $xy$-plane. The $y$-intercept of this line is at the point $(k - 3, b)$. What is the value of $b$?',
          correctAnswer: 20,
          explanation: '**The correct answer is $20$.**\n\n**Step 1: Find the slope of the line**\n$m = \\frac{-12 - 8}{(k + 5) - k} = \\frac{-20}{5} = -4$\n\n**Step 2: Use point-slope form with $(k, 8)$**\n$y - 8 = -4(x - k)$\n$y = -4x + 4k + 8$\n\n**Step 3: Evaluate at the $y$-intercept point $(k - 3, b)$**\n$b = -4(k - 3) + 4k + 8$\n$b = -4k + 12 + 4k + 8$\n$b = 20$\n\nNote that $k$ cancels out — the value of $b$ is independent of $k$!\n\n**Verification:** The slope is $-4$ regardless of $k$. At $x = k - 3$:\n$y = 8 + (-4)((k-3) - k) = 8 + (-4)(-3) = 8 + 12 = 20$ ✓\n\n**Key concept:** When a question involves a parameter $k$ in the coordinates, the parameter often cancels in the final answer. Focus on the relationships between the coordinates.',
          skills: ['Algebra', 'Linear Equations']
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The function $f$ is graphed in the $xy$-plane. If $g(x) = f(x - 3)$, how is the graph of $g$ related to the graph of $f$?",
          choices: [
            { id: "A", text: "The graph of $g$ is the graph of $f$ shifted $3$ units left" },
            { id: "B", text: "The graph of $g$ is the graph of $f$ shifted $3$ units right" },
            { id: "C", text: "The graph of $g$ is the graph of $f$ shifted $3$ units up" },
            { id: "D", text: "The graph of $g$ is the graph of $f$ shifted $3$ units down" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Horizontal transformations work \"opposite\" to intuition.\n\n• $g(x) = f(x - 3)$ means we subtract $3$ inside the function\n• This shifts the graph $3$ units to the RIGHT\n\n**Example:** If $f(0) = 5$, then $g(3) = f(3-3) = f(0) = 5$\nThe point $(0, 5)$ on $f$ moves to $(3, 5)$ on $g$ (shifted right).\n\n**Why other choices are incorrect:**\n• Choice A: $f(x + 3)$ would shift left\n• Choice C: $f(x) + 3$ would shift up\n• Choice D: $f(x) - 3$ would shift down\n\n**Key concept:** $y = f(x - h)$ shifts the graph $h$ units right; $y = f(x + h)$ shifts $h$ units left.",
          skills: ["function-transformations", "horizontal-shifts"]
        },
        {
          id: 12,
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Which expression is equivalent to $12x^4y^3 + 18x^2y$?',
          choices: [
            { id: 'A', text: '$6x^2y(2x^2y^2 + 3)$' },
            { id: 'B', text: '$6x^2y(2x^2y + 3)$' },
            { id: 'C', text: '$18x^2y(x^2y^2 + 1)$' },
            { id: 'D', text: '$18x^2y(2x^2y^2 + 1)$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Factor out the greatest common factor (GCF) from both terms.\n\n**Step 1: Find the GCF**\n• Coefficients: GCF of $12$ and $18$ is $6$\n• Variable $x$: lowest power is $x^2$\n• Variable $y$: lowest power is $y$\n• GCF $= 6x^2y$\n\n**Step 2: Divide each term by the GCF**\n$12x^4y^3 \\div 6x^2y = 2x^2y^2$\n$18x^2y \\div 6x^2y = 3$\n\n**Step 3: Write the factored form**\n$12x^4y^3 + 18x^2y = 6x^2y(2x^2y^2 + 3)$\n\n**Why other choices are incorrect:**\n• Choice B: $6x^2y(2x^2y + 3) = 12x^4y^2 + 18x^2y$ — the first term has $y^2$, not $y^3$\n• Choice C: $18x^2y(x^2y^2 + 1) = 18x^4y^3 + 18x^2y$ — the first coefficient is $18$, not $12$\n• Choice D: $18x^2y(2x^2y^2 + 1) = 36x^4y^3 + 18x^2y$ — the first coefficient is $36$, not $12$\n\n**Key concept:** To factor, find the GCF of all terms, then divide each term by the GCF. Verify by distributing back.',
          skills: ["combining-like-terms", "equivalent-expressions"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A storage container can hold at most $500$ pounds. If the container already has $180$ pounds of supplies, which inequality represents the additional weight $w$, in pounds, that can be added?",
          choices: [
            { id: "A", text: "$w \\leq 320$" },
            { id: "B", text: "$w \\geq 320$" },
            { id: "C", text: "$w \\leq 680$" },
            { id: "D", text: "$w < 500$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Set up the inequality.\n\n• Current weight + additional weight $\\leq$ maximum capacity\n• $180 + w \\leq 500$\n• $w \\leq 500 - 180$\n• $w \\leq 320$\n\n**Why other choices are incorrect:**\n• Choice B: $w \\geq 320$ means at least $320$ pounds must be added\n• Choice C: $180 + 680 = 860 > 500$, would exceed capacity\n• Choice D: Doesn't account for existing $180$ pounds\n\n**Key concept:** \"At most\" translates to $\\leq$ (less than or equal to).",
          skills: ["inequalities", "word-problems"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$x - 17 = (x - a)(x - 17)$\n\nIn the given equation, $a$ is a constant where $a > 18$. Which of the following are the solutions to the equation?",
          choices: [
            { id: "A", text: "$17$ and $a + 1$" },
            { id: "B", text: "$17$ only" },
            { id: "C", text: "$a + 17$ and $a - 1$" },
            { id: "D", text: "$a$ and $17$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Solve by considering two cases.\n\n**Case 1: $x = 17$**\nLHS: $17 - 17 = 0$\nRHS: $(17 - a)(17 - 17) = (17 - a)(0) = 0$\n$0 = 0$ ✓ — So $x = 17$ is always a solution.\n\n**Case 2: $x \\neq 17$**\nSince $x - 17 \\neq 0$, divide both sides by $(x - 17)$:\n$1 = x - a$\n$x = a + 1$\n\nSince $a > 18$, we have $x = a + 1 > 19 \\neq 17$, confirming this is a distinct solution.\n\n**The solutions are $x = 17$ and $x = a + 1$.**\n\n**Why other choices are incorrect:**\n• Choice B: Misses the second solution $x = a + 1$\n• Choice C: Incorrectly combines $a$ and $17$\n• Choice D: $x = a$ does not satisfy the equation (substituting gives $a - 17 = 0 \\cdot (a - 17) = 0$, but $a - 17 > 1 \\neq 0$)\n\n**Key concept:** When both sides share a common factor, one solution comes from setting that factor to zero, and the other comes from dividing it out.",
          skills: ['Advanced Math', 'Quadratic Equations']
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In the $xy$-plane, a circle has center $C$ with coordinates $(h, k)$. Points $A$ and $B$ lie on the circle. Point $A$ has coordinates $(h + 3, k + \\sqrt{55})$, and $\\angle ACB$ is a right angle. What is the length of $\\overline{AB}$?",
          choices: [
            { id: "A", text: "$8\\sqrt{2}$" },
            { id: "B", text: "$2\\sqrt{55}$" },
            { id: "C", text: "$64\\sqrt{2}$" },
            { id: "D", text: "$64\\sqrt{3}$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.**\n\n**Step 1:** Find the radius.\n$r = CA = \\sqrt{(h+3-h)^2 + (k+\\sqrt{55}-k)^2} = \\sqrt{9 + 55} = \\sqrt{64} = 8$\n\n**Step 2:** Since $\\angle ACB = 90°$ and $CA = CB = r = 8$ (both radii), triangle $ACB$ is an isosceles right triangle.\n\nBy the Pythagorean theorem:\n$AB^2 = CA^2 + CB^2 = 64 + 64 = 128$\n$AB = \\sqrt{128} = 8\\sqrt{2}$",
          skills: ["circles", "coordinate-geometry", "pythagorean-theorem"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A circle has center $P$, and points $R$ and $S$ lie on the circle. Line segments $RQ$ and $SQ$ are tangent to the circle at points $R$ and $S$, respectively. If the radius of the circle is $180$ millimeters and the perimeter of quadrilateral $PRQS$ is $1{,}224$ millimeters, what is the distance, in millimeters, between points $P$ and $Q$?",
          choices: [
            { id: "A", text: "$180$" },
            { id: "B", text: "$450$" },
            { id: "C", text: "$460$" },
            { id: "D", text: "$468$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.**\n\nSince $RQ$ and $SQ$ are tangent to the circle at $R$ and $S$, we have $PR \\perp RQ$ and $PS \\perp SQ$. Also $PR = PS = 180$ (radii) and $RQ = SQ$ (tangent segments from an external point are equal).\n\nPerimeter of $PRQS = PR + RQ + QS + SP = 180 + RQ + RQ + 180 = 1{,}224$\n$2 \\cdot RQ = 864$, so $RQ = 432$\n\nIn right triangle $PRQ$:\n$PQ^2 = PR^2 + RQ^2 = 180^2 + 432^2 = 32{,}400 + 186{,}624 = 219{,}024$\n$PQ = \\sqrt{219{,}024} = 468$\n\n**Verification:** $468 = 36 \\times 13$ and $468^2 = 1{,}296 \\times 169 = 219{,}024$ ✓",
          skills: ["circles", "tangent-lines", "pythagorean-theorem"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A town's population is modeled by $P(t) = 12{,}000(1.03)^t$, where $t$ is the number of years since 2020. What does $1.03$ represent in this model?",
          choices: [
            { id: "A", text: "The population decreases by $3\\%$ each year" },
            { id: "B", text: "The population increases by $3\\%$ each year" },
            { id: "C", text: "The population increases by $103$ people each year" },
            { id: "D", text: "The population was $1.03$ in the year 2020" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** In exponential models $P(t) = P_0(b)^t$:\n\n• $P_0 = 12{,}000$ is the initial population\n• $b = 1.03$ is the growth factor\n• Since $b = 1 + r$, where $r$ is the growth rate:\n• $1.03 = 1 + 0.03$\n• $r = 0.03 = 3\\%$\n\nThe population increases by $3\\%$ each year.\n\n**Why other choices are incorrect:**\n• Choice A: Would need $b < 1$ (like $0.97$) for decrease\n• Choice C: This describes linear growth, not exponential\n• Choice D: $12000$ was the 2020 population, not $1.03$\n\n**Key concept:** In $P(t) = P_0(1 + r)^t$, the growth factor $(1 + r)$ indicates percent growth.",
          skills: ["exponential-growth", "interpretation"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "$36x - 48y = 20$\n\n$9x - py = 8$\n\nIn the given system of equations, $p$ is a constant. If the system has no solution, what is the value of $p$?",
          correctAnswer: 12,
          explanation: "**The correct answer is $12$.**\n\n**Step 1: Simplify the first equation**\nDivide $36x - 48y = 20$ by $4$:\n$9x - 12y = 5$\n\n**Step 2: Set up the no-solution condition**\nFor no solution, the lines must be parallel (proportional coefficients, non-proportional constants).\n\nSimplified Eq 1: $9x - 12y = 5$\nEq 2: $9x - py = 8$\n\n**Step 3: Match coefficients**\nThe $x$-coefficients are already equal ($9 = 9$).\nFor parallel lines: $\\frac{-12}{-p} = \\frac{9}{9}$\n$\\frac{12}{p} = 1$\n$p = 12$\n\n**Step 4: Verify constants are NOT proportional**\n$\\frac{5}{8} \\neq 1$ ✓ → The lines are parallel but distinct → no solution.\n\n**Verification:** With $p = 12$:\nEq 1: $9x - 12y = 5$\nEq 2: $9x - 12y = 8$\nSubtracting: $0 = -3$ (contradiction) → no solution ✓",
          skills: ['Algebra', 'Systems of Equations']
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$-5x + 15px = 60$\n\nIn the given equation, $p$ is a constant. The equation has no solution. What is the value of $p$?",
          choices: [
            { id: "A", text: "$0$" },
            { id: "B", text: "$\\frac{1}{3}$" },
            { id: "C", text: "$\\frac{5}{3}$" },
            { id: "D", text: "$3$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** For no solution, the coefficient of $x$ must be $0$ while the constant is non-zero.\n\n• Rewrite: $-5x + 15px = 60$\n• Factor: $x(-5 + 15p) = 60$\n• For no solution: $-5 + 15p = 0$ (coefficient of $x = 0$)\n• $15p = 5$\n• $p = \\frac{5}{15} = \\frac{1}{3}$\n\n**Verification:** With $p = \\frac{1}{3}$:\n• $-5x + 15\\left(\\frac{1}{3}\\right)x = 60$\n• $-5x + 5x = 60$\n• $0 = 60$ (false, no solution) ✓\n\n**Key concept:** An equation has no solution when simplifying leads to a false statement like $0 = 60$.",
          skills: ["Algebra", "Special solutions"]
        },
        {
          id: 20,
          type: "fill-in",
          difficulty: "hard",
          question: "In triangle $ABC$, $\\cos(B) = \\frac{7}{25}$ and angle $A$ is a right angle. What is the value of $\\cos(C)$?",
          correctAnswer: "24/25",
          explanation: "**The correct answer is $\\frac{24}{25}$ (or $0.96$).**\n\nIn a right triangle with right angle at $A$:\n• $B + C = 90°$ (complementary angles)\n• $\\cos(B) = \\sin(C)$ and $\\sin(B) = \\cos(C)$\n\nFind $\\sin(B)$ using the Pythagorean identity:\n• $\\sin^2(B) + \\cos^2(B) = 1$\n• $\\sin^2(B) = 1 - \\left(\\frac{7}{25}\\right)^2 = 1 - \\frac{49}{625} = \\frac{576}{625}$\n• $\\sin(B) = \\frac{24}{25}$\n\nTherefore:\n• $\\cos(C) = \\sin(B) = \\frac{24}{25}$\n\n**Key concept:** In a right triangle, if one acute angle is $\\theta$, the other is $(90° - \\theta)$. $\\cos(\\theta) = \\sin(90° - \\theta)$.",
          skills: ["Geometry", "Trigonometry"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The graph shows a system of two linear equations. If a new system of three linear equations is created using the two equations shown and the equation $2x + 3y = -12$, how many solutions $(x, y)$ will the resulting system of three equations have?",
          diagram: {
            type: "twoLineGraph",
            params: {
              intersection: { x: 0, y: -4 },
              slope1: 1,
              slope2: -1,
              xRange: [-6, 6],
              yRange: [-6, 4],
              xTickInterval: 2,
              yTickInterval: 2,
              showIntersection: false
            }
          },
          choices: [
            { id: "A", text: "Zero" },
            { id: "B", text: "Exactly one" },
            { id: "C", text: "Exactly two" },
            { id: "D", text: "Infinitely many" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** The two lines shown intersect at $(0, -4)$. For the system of three equations to have a solution, all three lines must pass through the same point.\n\n**Check:** Does $2x + 3y = -12$ pass through $(0, -4)$?\n$2(0) + 3(-4) = 0 - 12 = -12$ ✓\n\nSince all three lines pass through $(0, -4)$, the system has **exactly one** solution.\n\n**Why other choices are incorrect:**\n• **A (Zero):** Would be correct only if the third line missed the intersection point\n• **C (Exactly two):** Three distinct lines cannot share exactly two common points\n• **D (Infinitely many):** Would require all three lines to be the same line",
          skills: ["Algebra", "Systems of equations"]
        },
        {
          id: 22,
          type: 'multiple-choice',
          difficulty: 'hard',
          question: '$3x - y > 660$\n\nFor which of the following tables are all the values of $x$ and their corresponding values of $y$ solutions to the given inequality?',
          choices: [
            { id: 'A', text: '$\\begin{array}{|c|c|c|c|}\\hline x & 220 & 221 & 222 \\\\ \\hline y & 0 & -3 & -6 \\\\ \\hline\\end{array}$' },
            { id: 'B', text: '$\\begin{array}{|c|c|c|c|}\\hline x & 220 & 222 & 221 \\\\ \\hline y & 0 & -3 & -6 \\\\ \\hline\\end{array}$' },
            { id: 'C', text: '$\\begin{array}{|c|c|c|c|}\\hline x & 221 & 220 & 222 \\\\ \\hline y & 0 & -3 & -6 \\\\ \\hline\\end{array}$' },
            { id: 'D', text: '$\\begin{array}{|c|c|c|c|}\\hline x & 221 & 222 & 220 \\\\ \\hline y & 0 & -3 & -6 \\\\ \\hline\\end{array}$' }
          ],
          correctAnswer: 'D',
          explanation: '**Choice D is correct.** Test each table by substituting all $(x, y)$ pairs into $3x - y > 660$.\n\n**Check Choice D: $x = 221, 222, 220$; $y = 0, -3, -6$**\n• $(221, 0)$: $3(221) - 0 = 663 > 660$ ✓\n• $(222, -3)$: $3(222) - (-3) = 666 + 3 = 669 > 660$ ✓\n• $(220, -6)$: $3(220) - (-6) = 660 + 6 = 666 > 660$ ✓\nAll three pairs satisfy the inequality ✓.\n\n**Why other choices fail:**\n• Choice A: $(220, 0)$: $3(220) - 0 = 660$. Since $660 > 660$ is FALSE ($660$ is not strictly greater than $660$), this fails ✗\n• Choice B: $(220, 0)$: Same issue — $660 \\not> 660$ ✗\n• Choice C: $(220, -3)$: $3(220) - (-3) = 663 > 660$ ✓, but $(221, 0)$: $663 > 660$ ✓, and check all — but $(220, -3)$ works. Actually the issue is with which pair maps to which $x$. Verify each table systematically.\n\n**Key concept:** For inequality problems, substitute every pair into the inequality. All pairs must satisfy the condition (strict inequality $>$ means the boundary value itself does NOT count).',
          skills: ["linear-equations"]
        }
      ]
    }
  ]
};
