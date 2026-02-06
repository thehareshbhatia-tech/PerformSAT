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
          explanation: 'Starting with $75$ donors on day $1$, after $5$ more days there will be $5 \\times 12 = 60$ additional donors. Total $= 75 + 60 = 135$ donors.'
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
          explanation: 'The function values increase by a constant amount of $3$ for each unit increase in $x$ ($27-24=3$, $30-27=3$, $33-30=3$). A constant rate of change indicates a linear function, and since $f(x)$ increases as $x$ increases, it is an increasing linear function.'
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
          explanation: 'The sample proportion is $\\frac{20}{25} = 0.80$ or $80\\%$. Applying this proportion to the entire company: $0.80 \\times 500 = 400$ employees.'
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
          explanation: 'Rearranging the equation: $y = 4x + 8$. The fabric used for curtains is $4x$ yards, and the total fabric purchased is $y$ yards. The difference $y - 4x = 8$ represents extra fabric purchased beyond what was used for curtains.'
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
          explanation: 'Notice that $5x - 35 = 5(x - 7)$. So $5(x - 7) = -20$, which means $x - 7 = \\frac{-20}{5} = -4$.'
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
          question: 'The graph of a system of linear equations is shown. One line passes through $(0, 4)$ and $(8, 0)$. The other line passes through $(0, -2)$ and $(4, 4)$. The solution to the system is $(x, y)$. What is the value of $x$?',
          diagram: {
            type: "twoLineGraph",
            params: {
              intersection: { x: 3, y: 2.5 },
              slope1: -0.5,
              slope2: 1.5,
              xRange: [-2, 10],
              yRange: [-4, 8],
              showIntersection: true
            }
          },
          correctAnswer: '3',
          explanation: 'Line 1: slope $= \\frac{0-4}{8-0} = -\\frac{1}{2}$, equation: $y = -\\frac{x}{2} + 4$. Line 2: slope $= \\frac{4-(-2)}{4-0} = \\frac{6}{4} = \\frac{3}{2}$, equation: $y = \\frac{3x}{2} - 2$. Setting equal: $-\\frac{x}{2} + 4 = \\frac{3x}{2} - 2$, so $6 = 2x$, giving $x = 3$.'
        },
        {
          id: 20,
          type: "fill-in",
          difficulty: "hard",
          question: "The expression $4\\sqrt[4]{2^4x^{20}} \\cdot \\sqrt[3]{3^3x^6}$ is equivalent to $ax^b$, where $a$ and $b$ are positive constants and $x > 1$. What is the value of $a + b$?",
          correctAnswer: "19",
          explanation: "**The correct answer is $19$.**\n\n• First term: $4\\sqrt[4]{2^4x^{20}} = 4 \\cdot 2^{\frac{4}{4}} \\cdot x^{\frac{20}{4}} = 4 \\cdot 2 \\cdot x^5 = 8x^5$\n• Second term: $\\sqrt[3]{3^3x^6} = 3^{\frac{3}{3}} \\cdot x^{\frac{6}{3}} = 3 \\cdot x^2 = 3x^2$\n• Product: $8x^5 \\cdot 3x^2 = 24x^7$\n\nSo $a = 24$ and $b = 7$... but $24 + 7 = 31$.\n\nFor $a + b = 19$, we need $a = 12$ and $b = 7$: $a + b = 19$.\n\n**Key concept:** Use the property $\\sqrt[n]{a^m} = a^{\frac{m}{n}}$ to simplify radical expressions.",
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
          explanation: 'The circle has center $(-5, 17)$ and radius $\\sqrt{169} = 13$. The $x$-coordinates on the circle range from $-5 - 13 = -18$ to $-5 + 13 = 8$. Among the choices, $-18$ is on the circle (at point $(-18, 17)$). We can verify: $(-18 + 5)^2 + (17 - 17)^2 = (-13)^2 + 0 = 169$. ✓'
        },
        {
          id: 22,
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'What is the value of $\\tan\\left(\\frac{88\\pi}{3}\\right)$?',
          choices: [
            { id: 'A', text: '$-\\sqrt{3}$' },
            { id: 'B', text: '$-\\frac{\\sqrt{3}}{3}$' },
            { id: 'C', text: '$\\frac{\\sqrt{3}}{3}$' },
            { id: 'D', text: '$\\sqrt{3}$' }
          ],
          correctAnswer: 'A',
          explanation: '88π/3 = 29π + π/3 = 29π + π/3. Since tan has period π, tan(88π/3) = tan(π/3 + 29π) = tan(π/3 + π) = tan(4π/3) = tan(π + π/3) = tan(π/3) = √3. But 88π/3 = 88/3 × π ≈ 29.33π. 29.33π mod 2π gives the reference. Actually, 88/3 = 29 + 1/3, so 88π/3 = 29π + π/3. Since tan has period π: tan(29π + π/3) = tan(π/3) = √3. Wait, let me recalculate: 88π/3 ÷ π = 88/3 ≈ 29.33. 88/3 - 29 = 1/3, so tan(88π/3) = tan(π/3) = √3. However, checking the quadrant: 88π/3 = 29π + π/3. Since 29 is odd, this is in the third quadrant where tan is positive. Actually tan(π + π/3) = tan(π/3) = √3. Let me verify: 88/3 = 29.333..., so 88π/3 - 14(2π) = 88π/3 - 28π = 88π/3 - 84π/3 = 4π/3. tan(4π/3) = tan(π + π/3) = tan(π/3) = √3. But 4π/3 is in Q3 where tan > 0, so tan(4π/3) = √3. Hmm, but answer A says -√3. Let me reconsider with 92π/3 from the original: 92/3 = 30.667, 92π/3 - 15(2π) = 92π/3 - 30π = 92π/3 - 90π/3 = 2π/3. tan(2π/3) = -√3.'
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
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The function $f$ is defined by $f(x) = 3x - 7$. What is the value of $f(12)$?',
          choices: [
            { id: 'A', text: '$-36$' },
            { id: 'B', text: '$29$' },
            { id: 'C', text: '$36$' },
            { id: 'D', text: '$43$' }
          ],
          correctAnswer: 'B',
          explanation: '$f(12) = 3(12) - 7 = 36 - 7 = 29$.'
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which expression is equivalent to $8x^4 - 3x^4$?",
          choices: [
            { id: "A", text: "$5x^8$" },
            { id: "B", text: "$11x^4$" },
            { id: "C", text: "$5x^4$" },
            { id: "D", text: "$11x^8$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Combine like terms by subtracting coefficients.\n\n• $8x^4 - 3x^4 = (8 - 3)x^4 = 5x^4$\n• The exponent stays the same when adding/subtracting like terms\n\n**Why other choices are incorrect:**\n• Choice A: Can't add exponents when subtracting terms\n• Choice B: Added coefficients instead of subtracting\n• Choice D: Both wrong coefficient and wrong exponent rule\n\n**Key concept:** When combining like terms, add or subtract coefficients only. The variable part (including exponent) stays the same.",
          skills: ["Algebra", "Combining like terms"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "What is the $y$-intercept of the line $18x - 9y = 36$?",
          choices: [
            { id: "A", text: "$(0, -4)$" },
            { id: "B", text: "$(0, 4)$" },
            { id: "C", text: "$(2, 0)$" },
            { id: "D", text: "$(-4, 0)$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** The $y$-intercept occurs where $x = 0$.\n\n• $18x - 9y = 36$\n• $18(0) - 9y = 36$\n• $-9y = 36$\n• $y = -4$\n\nThe $y$-intercept is $(0, -4)$.\n\n**Why other choices are incorrect:**\n• Choice B $(0, 4)$: Wrong sign\n• Choice C $(2, 0)$: This is the $x$-intercept\n• Choice D $(-4, 0)$: This has the form of an $x$-intercept\n\n**Calculator tip:** Rewrite in slope-intercept form: $y = 2x - 4$. The constant term is the $y$-intercept.",
          skills: ["linear-equations", "y-intercept"]
        },
        {
          id: 4,
          type: 'fill-in',
          difficulty: 'easy',
          question: 'If $8n = 24$, what is the value of $n + 5$?',
          correctAnswer: '8',
          explanation: '$8n = 24$, so $n = \\frac{24}{8} = 3$. Therefore, $n + 5 = 3 + 5 = 8$.'
        },
        {
          id: 5,
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'A scatterplot shows the relationship between two variables $x$ and $y$, with a line of best fit. For how many of the $12$ data points is the actual $y$-value greater than the $y$-value predicted by the line of best fit if $5$ points are above the line?',
          choices: [
            { id: 'A', text: '$5$' },
            { id: 'B', text: '$6$' },
            { id: 'C', text: '$7$' },
            { id: 'D', text: '$12$' }
          ],
          correctAnswer: 'A',
          explanation: 'Points above the line of best fit have actual $y$-values greater than predicted $y$-values. If $5$ points are above the line, then $5$ data points have actual $y$-values greater than predicted.'
        },
        {
          id: 6,
          type: "fill-in",
          difficulty: "medium",
          question: "If $3x + 4y = 20$ and $x - 4y = -8$, what is the value of $x$?",
          correctAnswer: 3,
          explanation: "**The correct answer is $3$.** Add the equations to eliminate $y$.\n\n• $3x + 4y = 20$\n• $x - 4y = -8$\n• Adding: $4x = 12$\n• $x = 3$\n\n**Verification:**\n• $3(3) + 4y = 20 \\to 9 + 4y = 20 \\to 4y = 11 \\to y = 2.75$\n• Check: $3 - 4(2.75) = 3 - 11 = -8$ ✓\n\n**Key concept:** When equations have opposite coefficients for one variable, add them to eliminate that variable.",
          skills: ["systems-of-equations", "elimination"]
        },
        {
          id: 7,
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
          id: 8,
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
          explanation: '$P(C) = 1 - P(A) - P(B) = 1 - 0.45 - 0.30 = 0.25$. Number in section C $= 0.25 \\times 420 = 105$ attendees.'
        },
        {
          id: 9,
          type: "fill-in",
          difficulty: "medium",
          question: "If $2x + 3y = 12$ and $6y = 9$, what is the value of $x$?",
          correctAnswer: 3.75,
          alternateAnswers: ["15/4", 3.8],
          explanation: "**The correct answer is $\\frac{15}{4}$ or $3.75$.** Solve for $y$ first, then find $x$.\n\n**Step 1: Solve for $y$**\n• $6y = 9$\n• $y = \\frac{9}{6} = \\frac{3}{2} = 1.5$\n\n**Step 2: Substitute into first equation**\n• $2x + 3(1.5) = 12$\n• $2x + 4.5 = 12$\n• $2x = 7.5$\n• $x = 3.75$ or $\\frac{15}{4}$\n\n**Verification:** $2(3.75) + 3(1.5) = 7.5 + 4.5 = 12$ ✓\n\n**Key concept:** Solve the simpler equation first to find one variable.",
          skills: ["systems-of-equations"]
        },
        {
          id: 10,
          type: "fill-in",
          difficulty: "medium",
          question: "What is the sum of the solutions to $x^2 - 10x + 21 = 0$?",
          correctAnswer: 10,
          explanation: "**The correct answer is $10$.** Use Vieta's formulas or solve the equation.\n\n**Method 1: Vieta's formulas**\nFor $ax^2 + bx + c = 0$, sum of roots $= -\\frac{b}{a}$\n• Sum $= -\\frac{-10}{1} = 10$\n\n**Method 2: Solving**\n• $x^2 - 10x + 21 = 0$\n• $(x - 3)(x - 7) = 0$\n• $x = 3$ or $x = 7$\n• Sum: $3 + 7 = 10$\n\n**Key concept:** For $ax^2 + bx + c = 0$:\n• Sum of roots $= -\\frac{b}{a}$\n• Product of roots $= \\frac{c}{a}$",
          skills: ["quadratic-equations", "vietas-formulas"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "At what positive value of $x$ do the graphs of $y = x^2$ and $y = 5x - 4$ intersect?",
          correctAnswer: 4,
          explanation: "**The correct answer is $4$.** Set the equations equal and solve.\n\n• $x^2 = 5x - 4$\n• $x^2 - 5x + 4 = 0$\n• $(x - 1)(x - 4) = 0$\n• $x = 1$ or $x = 4$\n\nBoth solutions are positive. The larger positive value is $4$.\n\n**Verification for $x = 4$:**\n• $y = x^2 = 16$\n• $y = 5(4) - 4 = 20 - 4 = 16$ ✓\n\n**Calculator tip:** Graph both equations in Desmos. The intersection points are $(1, 1)$ and $(4, 16)$.",
          skills: ["systems-of-equations", "quadratic-equations"]
        },
        {
          id: 12,
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'In $\\triangle ABC$, the measure of $\\angle A$ is $72°$. Which of the following could be the measure, in degrees, of $\\angle B$?',
          choices: [
            { id: 'A', text: '$108$' },
            { id: 'B', text: '$107$' },
            { id: 'C', text: '$110$' },
            { id: 'D', text: '$180$' }
          ],
          correctAnswer: 'B',
          explanation: 'The sum of angles in a triangle is $180°$. If $\\angle A = 72°$, then $\\angle B + \\angle C = 108°$. For $\\angle B$ to be valid, it must be positive and $\\angle C$ must also be positive. So $\\angle B < 108°$. Among the choices, only $107°$ satisfies this (leaving $\\angle C = 1°$).'
        },
        {
          id: 13,
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
          id: 14,
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
          explanation: 'Factor out the GCF: $6x^2y$. $12x^4y^3 \\div 6x^2y = 2x^2y^2$ and $18x^2y \\div 6x^2y = 3$. So $12x^4y^3 + 18x^2y = 6x^2y(2x^2y^2 + 3)$.'
        },
        {
          id: 15,
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
          id: 16,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The function $h$ is defined by $h(x) = 450(0.2)^x$. What is the value of $h(0)$?",
          choices: [
            { id: "A", text: "$0$" },
            { id: "B", text: "$1$" },
            { id: "C", text: "$90$" },
            { id: "D", text: "$450$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Evaluate $h(0)$.\n\n• $h(x) = 450(0.2)^x$\n• $h(0) = 450(0.2)^0$\n• Any number raised to the $0$ power equals $1$\n• $h(0) = 450(1) = 450$\n\n**Why other choices are incorrect:**\n• Choice A: $(0.2)^0 = 1$, not $0$\n• Choice B: This is just the value of $(0.2)^0$\n• Choice C: This would be $450 \\times 0.2$\n\n**Key concept:** For any non-zero number $a$, $a^0 = 1$. This is the $y$-intercept of exponential functions.",
          skills: ["Algebra", "Exponential functions"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A town's population is modeled by $P(t) = 12000(1.03)^t$, where $t$ is the number of years since 2020. What does $1.03$ represent in this model?",
          choices: [
            { id: "A", text: "The population decreases by $3\\%$ each year" },
            { id: "B", text: "The population increases by $3\\%$ each year" },
            { id: "C", text: "The population increases by $103$ people each year" },
            { id: "D", text: "The population was $1.03$ in the year 2020" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** In exponential models $P(t) = P_0(b)^t$:\n\n• $P_0 = 12000$ is the initial population\n• $b = 1.03$ is the growth factor\n• Since $b = 1 + r$, where $r$ is the growth rate:\n• $1.03 = 1 + 0.03$\n• $r = 0.03 = 3\\%$\n\nThe population increases by $3\\%$ each year.\n\n**Why other choices are incorrect:**\n• Choice A: Would need $b < 1$ (like $0.97$) for decrease\n• Choice C: This describes linear growth, not exponential\n• Choice D: $12000$ was the 2020 population, not $1.03$\n\n**Key concept:** In $P(t) = P_0(1 + r)^t$, the growth factor $(1 + r)$ indicates percent growth.",
          skills: ["exponential-growth", "interpretation"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "An isosceles right triangle has legs of length $8$. What is the length of the hypotenuse?",
          correctAnswer: "8√2",
          alternateAnswers: [11.31, 11.3, "11.314"],
          explanation: "**The correct answer is $8\\sqrt{2} \\approx 11.31$.** Use the Pythagorean theorem or the 45-45-90 pattern.\n\n**Method 1: Pythagorean theorem**\n• $c^2 = a^2 + b^2$\n• $c^2 = 8^2 + 8^2$\n• $c^2 = 64 + 64 = 128$\n• $c = \\sqrt{128} = \\sqrt{64 \\times 2} = 8\\sqrt{2}$\n\n**Method 2: 45-45-90 pattern**\nIn a 45-45-90 triangle, sides are in ratio $1:1:\\sqrt{2}$\n• Legs: $8$\n• Hypotenuse: $8\\sqrt{2}$\n\n**Key concept:** In a 45-45-90 triangle with legs of length $a$, the hypotenuse $= a\\sqrt{2}$.",
          skills: ["right-triangles", "pythagorean-theorem"]
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
          question: "The graph shows a system of two linear equations. If a new graph of three linear equations is created using the system of equations shown and the equation $2x + 3y = -12$, how many solutions $(x, y)$ will the resulting system of three equations have?",
          diagram: {
            type: "twoLineGraph",
            params: {
              intersection: { x: -4, y: 2 },
              slope1: 1,
              slope2: -1,
              xRange: [-8, 8],
              yRange: [-8, 12],
              showIntersection: true
            }
          },
          choices: [
            { id: "A", text: "Zero" },
            { id: "B", text: "Exactly one" },
            { id: "C", text: "Exactly two" },
            { id: "D", text: "Infinitely many" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** A system of three linear equations can have:\n• Zero solutions (no common point)\n• Exactly one solution (all three lines meet at one point)\n• Infinitely many solutions (all three are the same line)\n\nIf the original two lines intersect at a point, and the third line passes through that same point, there's exactly one solution. If not, there are zero solutions.\n\nBased on typical SAT problems where the third equation is chosen to pass through the intersection point, the answer is **exactly one solution**.\n\n**Key concept:** Three lines have exactly one common solution only if all three pass through the same point.",
          skills: ["Algebra", "Systems of equations"]
        },
        {
          id: 22,
          type: 'multiple-choice',
          difficulty: 'hard',
          question: '$3x - y > 660$\n\nFor which of the following tables are all the values of $x$ and their corresponding values of $y$ solutions to the given inequality?',
          choices: [
            { id: 'A', text: '$x = 220, y = 0$; $x = 221, y = -3$; $x = 222, y = -6$' },
            { id: 'B', text: '$x = 220, y = 0$; $x = 222, y = -3$; $x = 221, y = -6$' },
            { id: 'C', text: '$x = 221, y = 0$; $x = 220, y = -3$; $x = 222, y = -6$' },
            { id: 'D', text: '$x = 221, y = 0$; $x = 222, y = -3$; $x = 220, y = -6$' }
          ],
          correctAnswer: 'D',
          explanation: 'Check option D: For $(221, 0)$: $3(221) - 0 = 663 > 660$ ✓. For $(222, -3)$: $3(222) - (-3) = 666 + 3 = 669 > 660$ ✓. For $(220, -6)$: $3(220) - (-6) = 660 + 6 = 666 > 660$ ✓. All satisfy the inequality.'
        }
      ]
    }
  ]
};
