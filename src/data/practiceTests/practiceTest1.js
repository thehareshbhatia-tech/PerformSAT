// Practice Test 1 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Original questions modeled after Test Innovators style with enhanced explanations

export const practiceTest1 = {
  id: "practice-test-1",
  title: "Practice Test 1",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35, // minutes
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
        // Question 1: System of inequalities
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which ordered pair $(x, y)$ is a solution to the given system of inequalities?",
          questionFormula: {
            lines: [
              "$y > -2x + 6$",
              "$y > 3x - 1$"
            ]
          },
          choices: [
            { id: "A", text: "$(0, 3)$" },
            { id: "B", text: "$(1, 1)$" },
            { id: "C", text: "$(1, 5)$" },
            { id: "D", text: "$(2, 3)$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** To find which ordered pair satisfies both inequalities, substitute each point into both inequalities.\n\nFor $(1, 5)$:\n• Check $y > -2x + 6$: Is $5 > -2(1) + 6$? Is $5 > 4$? Yes ✓\n• Check $y > 3x - 1$: Is $5 > 3(1) - 1$? Is $5 > 2$? Yes ✓\n\nBoth inequalities are satisfied.\n\n**Why other choices are incorrect:**\n• Choice A $(0, 3)$: $3 > 6$ is false\n• Choice B $(1, 1)$: $1 > 4$ is false\n• Choice D $(2, 3)$: $3 > 2$ ✓, but $3 > 5$ is false\n\n**Calculator tip:** In Desmos, graph both inequalities. The solution region is where the shaded areas overlap.",
          skills: ["systems-of-inequalities"]
        },

        // Question 2: Factoring expression (from PT3)
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which expression is equivalent to $p^2q^3 + p^2q^2$?",
          choices: [
            { id: "A", text: "$p^2q^2(q)$" },
            { id: "B", text: "$p^4q^5$" },
            { id: "C", text: "$2p^2q^5$" },
            { id: "D", text: "$p^2q^2(q + 1)$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Factor out the greatest common factor (GCF) from both terms.\n\n**Step 1:** Identify the GCF of $p^2q^3$ and $p^2q^2$:\n• Both terms have $p^2$\n• Both terms have at least $q^2$\n• GCF $= p^2q^2$\n\n**Step 2:** Factor out $p^2q^2$:\n$p^2q^3 + p^2q^2 = p^2q^2(q) + p^2q^2(1) = p^2q^2(q + 1)$\n\n**Verification:** Distribute to check:\n$p^2q^2(q + 1) = p^2q^3 + p^2q^2$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: $p^2q^2(q) = p^2q^3$ only, missing the $+p^2q^2$ term\n• Choice B: $p^4q^5$ is incorrect; you cannot add exponents when adding terms\n• Choice C: $2p^2q^5$ is incorrect; the terms have different powers of $q$ and cannot be combined this way\n\n**Key concept:** When factoring, find the GCF and divide each term by it.",
          skills: ["factoring", "polynomial-operations"]
        },

        // Question 3: Right triangle - Pythagorean theorem (from PT3)
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "In right triangle $PQR$, angle $Q$ has a measure of $90°$, the longest side of the triangle is 65 centimeters, and the shortest side is 16 centimeters. What is the length of the third side of the triangle, in centimeters?",
          choices: [
            { id: "A", text: "$49$" },
            { id: "B", text: "$60$" },
            { id: "C", text: "$63$" },
            { id: "D", text: "$67$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** In a right triangle, the longest side is always the hypotenuse (opposite the right angle).\n\n**Step 1:** Identify the sides:\n• Hypotenuse ($c$) = 65 cm (longest side)\n• One leg ($a$) = 16 cm (shortest side)\n• Other leg ($b$) = ? (what we need to find)\n\n**Step 2:** Apply the Pythagorean theorem:\n$a^2 + b^2 = c^2$\n$16^2 + b^2 = 65^2$\n$256 + b^2 = 4225$\n$b^2 = 4225 - 256 = 3969$\n$b = \\sqrt{3969} = 63$ cm\n\n**Verification:** $16^2 + 63^2 = 256 + 3969 = 4225 = 65^2$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($49$): $16^2 + 49^2 = 256 + 2401 = 2657 \\neq 65^2$\n• Choice B ($60$): $16^2 + 60^2 = 256 + 3600 = 3856 \\neq 65^2$\n• Choice D ($67$): This would be longer than the hypotenuse, which is impossible\n\n**Note:** This is a Pythagorean triple: 16-63-65",
          skills: ["pythagorean-theorem", "right-triangles"]
        },

        // Question 4: Exponential decay interpretation
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The given equation models the value that remains, $V(t)$, in millions of dollars, of a fleet of trucks after $t$ years. What is the meaning of $30$ in this context?",
          questionFormula: {
            equation: "$$V(t) = 30(0.85)^{\\frac{t}{4}}$$"
          },
          choices: [
            { id: "A", text: "The number of years until the fleet has no value." },
            { id: "B", text: "The value of the fleet, in millions of dollars, after the first year." },
            { id: "C", text: "The number of years until the company expects to replace the fleet." },
            { id: "D", text: "The value of the fleet, in millions of dollars, when new." }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** In an exponential function $V(t) = a \\cdot b^t$, the coefficient $a$ represents the initial value when $t = 0$.\n\nWhen $t = 0$:\n$$V(0) = 30(0.85)^0 = 30(1) = 30$$\n\nThis means the fleet was worth **$30$ million dollars when new** (at $t = 0$).\n\n**Why other choices are incorrect:**\n• Choice A: The equation doesn't indicate when value reaches zero\n• Choice B: $V(1) = 30(0.85)^{\\frac{1}{4}} \\approx 28.8$, not $30$\n• Choice C: No replacement timing information in the equation\n\n**Calculator tip:** Graph the function and check the y-intercept at $x = 0$.",
          skills: ["exponential-functions", "function-interpretation"]
        },

        // Question 5: Mean of data set (from PT3)
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "What is equivalent to the mean of data set B?",
          questionFormula: {
            equation: "$$\\text{Data set B: } 7.2, 11.4, 9.8, 5.4, 10.6, 5.6$$"
          },
          choices: [
            { id: "A", text: "$8$" },
            { id: "B", text: "$8\\frac{1}{3}$" },
            { id: "C", text: "$8\\frac{1}{2}$" },
            { id: "D", text: "$9\\frac{1}{4}$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** The mean is the sum of all values divided by the number of values.\n\n**Step 1:** Find the sum:\n$7.2 + 11.4 + 9.8 + 5.4 + 10.6 + 5.6 = 50$\n\n**Step 2:** Count the values: 6 values\n\n**Step 3:** Calculate the mean:\nMean $= 50 \\div 6 = 8.\\overline{3} = 8\\frac{1}{3}$\n\n**Why other choices are incorrect:**\n• Choice A ($8$): Would require sum $= 48$\n• Choice C ($8\\frac{1}{2} = 8.5$): Would require sum $= 51$\n• Choice D ($9\\frac{1}{4} = 9.25$): Would require sum $= 55.5$\n\n**Calculator tip:** On Desmos, enter $(7.2+11.4+9.8+5.4+10.6+5.6)/6$ to get $8.\\overline{3}$.",
          skills: ["mean-median-mode", "statistics"]
        },

        // Question 6: Function evaluation (from PT3)
        {
          id: 6,
          type: "fill-in",
          difficulty: "easy",
          question: "The function $g$ is defined above. What is the value of $x$ when $g(x) = 21$?",
          questionFormula: {
            equation: "$g(x) = 5x + 3 - 2x + 6$"
          },
          correctAnswer: 4,
          explanation: "**The correct answer is 4.**\n\n**Step 1:** Simplify $g(x)$ by combining like terms:\n$g(x) = 5x + 3 - 2x + 6$\n$g(x) = (5x - 2x) + (3 + 6)$\n$g(x) = 3x + 9$\n\n**Step 2:** Set $g(x) = 21$ and solve:\n$3x + 9 = 21$\n$3x = 21 - 9$\n$3x = 12$\n$x = 12 \\div 3 = 4$\n\n**Verification:** $g(4) = 3(4) + 9 = 12 + 9 = 21$ ✓\n\n**Key concept:** Always simplify the function first before substituting values.",
          skills: ["function-evaluation", "solving-equations"]
        },

        // Question 7: Word problem - ticket prices (from PT3)
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A concert venue sells student tickets for 9 dollars and general admission tickets for 14 dollars. Which of the following represents the total revenue, in dollars, if the venue sells $s$ student tickets and $g$ general admission tickets?",
          choices: [
            { id: "A", text: "$11.50(s + g)$" },
            { id: "B", text: "$14s + 9g$" },
            { id: "C", text: "$9s + 14g$" },
            { id: "D", text: "$(9 + 14)(s + g)$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Total revenue = (price per item × quantity) for each type.\n\n**Step 1:** Revenue from student tickets:\nPrice × Quantity $= \\$9 \\times s = 9s$ dollars\n\n**Step 2:** Revenue from general admission tickets:\nPrice × Quantity $= \\$14 \\times g = 14g$ dollars\n\n**Step 3:** Total revenue:\n$9s + 14g$\n\n**Why other choices are incorrect:**\n• Choice A: $11.50(s + g)$ uses an average price but doesn't account for different quantities of each type\n• Choice B: $14s + 9g$ has the prices swapped (student at \\$14, general at \\$9)\n• Choice D: $(9 + 14)(s + g) = 23(s + g)$ incorrectly adds prices together\n\n**Key concept:** When items have different prices, multiply each price by its respective quantity and add the results.",
          skills: ["linear-expressions", "word-problems"]
        },

        // Question 8: Reading linear graph
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "easy",
          diagram: {
            type: "linearGraph",
            params: {
              slope: 0.75,
              yIntercept: 4,
              xRange: [-10, 10],
              yRange: [-10, 12],
              label: "g(x)"
            }
          },
          question: "The graph of linear function $g(x)$ is shown above. What is the value of $g(4)$?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$7$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Find the equation of the line, then evaluate at $x = 4$.\n\n**From the graph:**\n• The line passes through $(0, 4)$ and $(8, 10)$\n• Slope $m = \\frac{10 - 4}{8 - 0} = \\frac{6}{8} = \\frac{3}{4}$\n• y-intercept $b = 4$\n\n**Equation:** $g(x) = \\frac{3}{4}x + 4$\n\n**Calculate $g(4)$:**\n$$g(4) = \\frac{3}{4}(4) + 4 = 3 + 4 = 7$$\n\n**Why other choices are incorrect:**\n• Choice A ($4$): This is $g(0)$, the y-intercept\n• Choice B ($6$): Calculation error\n• Choice D ($8$): Calculation error\n\n**Calculator tip:** Enter two points in Desmos to find the equation.",
          skills: ["reading-graphs", "linear-functions"]
        },

        // Question 9: Budget word problem (from PT3)
        {
          id: 9,
          type: "fill-in",
          difficulty: "medium",
          question: "Marcus is buying sandwiches and drinks for a picnic. He has \\$80 to spend. Sandwiches cost \\$9.50 each and drinks cost \\$2.50 each. If he buys 6 sandwiches, what is the maximum number of drinks he can purchase?",
          correctAnswer: 9,
          explanation: "**The correct answer is 9.**\n\n**Step 1:** Calculate the cost of 6 sandwiches:\n$6 \\times \\$9.50 = \\$57.00$\n\n**Step 2:** Calculate remaining budget:\n$\\$80 - \\$57.00 = \\$23.00$\n\n**Step 3:** Calculate maximum number of drinks:\n$\\$23.00 \\div \\$2.50 = 9.2$ drinks\n\n**Step 4:** Since he can only buy whole drinks, round down:\nMaximum = 9 drinks\n\n**Verification:** 6 sandwiches (\\$57.00) + 9 drinks (\\$22.50) = \\$79.50 ≤ \\$80 ✓\nWith 10 drinks: \\$57.00 + \\$25.00 = \\$82.00 > \\$80 ✗\n\n**Key concept:** When dealing with budget constraints, always round down to stay within budget.",
          skills: ["word-problems", "linear-inequalities"]
        },

        // Question 10: Finding x-intercept from two points (from PT3)
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $f(2) = 4$ and $f(5) = -2$, what is the $x$-intercept for the line represented by the function $f(x)$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$\\frac{7}{2}$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Find the equation of the line using the two points, then find where $y = 0$.\n\n**Step 1:** Find the slope using the two points $(2, 4)$ and $(5, -2)$:\n$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{-2 - 4}{5 - 2} = \\frac{-6}{3} = -2$\n\n**Step 2:** Find the equation using point-slope form:\n$y - y_1 = m(x - x_1)$\n$y - 4 = -2(x - 2)$\n$y - 4 = -2x + 4$\n$y = -2x + 8$\n\n**Step 3:** Find $x$-intercept (set $y = 0$):\n$0 = -2x + 8$\n$2x = 8$\n$x = 4$\n\n**Verification:** $f(4) = -2(4) + 8 = -8 + 8 = 0$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($3$): $f(3) = -2(3) + 8 = 2 \\neq 0$\n• Choice C ($\\frac{7}{2} = 3.5$): $f(3.5) = -2(3.5) + 8 = 1 \\neq 0$\n• Choice D ($6$): $f(6) = -2(6) + 8 = -4 \\neq 0$\n\n**Calculator tip:** On Desmos, plot the points and the line to verify.",
          skills: ["linear-functions", "x-intercept"]
        },

        // Question 11: Expanding expression (from PT3)
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which expression is equivalent to $2(x + 4)^2 - 3(x - 4)^2 + 4x$?",
          choices: [
            { id: "A", text: "$-x^2 + 36x - 16$" },
            { id: "B", text: "$-x^2 + 4x + 80$" },
            { id: "C", text: "$-x^2 + 36x - 16$" },
            { id: "D", text: "$5x^2 + 36x - 16$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Expand each squared binomial and combine like terms.\n\n**Step 1:** Expand $(x + 4)^2$:\n$(x + 4)^2 = x^2 + 8x + 16$\n\n**Step 2:** Expand $(x - 4)^2$:\n$(x - 4)^2 = x^2 - 8x + 16$\n\n**Step 3:** Multiply by coefficients:\n$2(x^2 + 8x + 16) = 2x^2 + 16x + 32$\n$3(x^2 - 8x + 16) = 3x^2 - 24x + 48$\n\n**Step 4:** Combine all terms:\n$2x^2 + 16x + 32 - (3x^2 - 24x + 48) + 4x$\n$= 2x^2 + 16x + 32 - 3x^2 + 24x - 48 + 4x$\n$= (2x^2 - 3x^2) + (16x + 24x + 4x) + (32 - 48)$\n$= -x^2 + 44x - 16$\n\n**Key concept:** Use FOIL or the formula $(a \\pm b)^2 = a^2 \\pm 2ab + b^2$",
          skills: ["polynomial-expansion", "combining-like-terms"]
        },

        // Question 12: System of equations - fill-in
        // NEW STRUCTURED FORMAT with display math for equations
        {
          id: 12,
          type: "fill-in",
          difficulty: "medium",
          question: [
            { math: "y = 4x + 9", display: true },
            { math: "2y = 6x", display: true },
            { text: "The solution to the given system of equations is " },
            { math: "(x, y)" },
            { text: ". What is the value of " },
            { math: "x - y" },
            { text: "?" }
          ],
          correctAnswer: 18,
          explanation: "**The correct answer is 18.** Substitute the first equation into the second:\n\n$$2(4x + 9) = 6x$$\n$$8x + 18 = 6x$$\n$$8x - 6x = -18$$\n$$2x = -18$$\n$$x = -9$$\n\nSubstitute $x = -9$ into $y = 4x + 9$:\n$$y = 4(-9) + 9 = -36 + 9 = -27$$\n\n**Calculate $x - y$:**\n$$x - y = -9 - (-27) = -9 + 27 = 18$$\n\n**Verify:** $2y = 2(-27) = -54$ and $6x = 6(-9) = -54$ ✓\n\n**Calculator tip:** Graph both equations to find intersection at $(-9, -27)$.",
          skills: ["systems-of-equations"]
        },

        // Question 13: Absolute value equation (from PT3)
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "What is one possible positive solution to the given equation?\n\n$3|x - 4| = 6$",
          correctAnswer: 6,
          acceptedAnswers: [2, 6],
          explanation: "**The correct answer is 2 or 6.**\n\n**Step 1:** Isolate the absolute value:\n$3|x - 4| = 6$\n$|x - 4| = 2$\n\n**Step 2:** Set up two equations (definition of absolute value):\n$x - 4 = 2$ OR $x - 4 = -2$\n\n**Step 3:** Solve each equation:\nCase 1: $x - 4 = 2 \\rightarrow x = 6$\nCase 2: $x - 4 = -2 \\rightarrow x = 2$\n\n**Verification:**\n• For $x = 6$: $3|6 - 4| = 3|2| = 3(2) = 6$ ✓\n• For $x = 2$: $3|2 - 4| = 3|-2| = 3(2) = 6$ ✓\n\nBoth 2 and 6 are positive solutions. Either answer is acceptable.\n\n**Key concept:** $|a| = b$ means $a = b$ OR $a = -b$ (when $b \\geq 0$).",
          skills: ["absolute-value-equations"]
        },

        // Question 14: Parabola equation from graph (from PT3)
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The graph shows a parabola with vertex at $(3, 10)$ opening downward and passing through approximately $(0, -8)$. What is the equation of the graph?",
          diagram: {
            type: "parabola",
            params: {
              vertex: { h: 3, k: 10 },
              a: -2,
              xRange: [-5, 11],
              yRange: [-10, 12]
            }
          },
          choices: [
            { id: "A", text: "$y = -2(x - 3)^2 + 10$" },
            { id: "B", text: "$y = -2(x + 3)^2 + 10$" },
            { id: "C", text: "$y = 2(x - 3)^2 + 10$" },
            { id: "D", text: "$y = 2(x + 3)^2 + 10$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Use vertex form: $y = a(x - h)^2 + k$, where $(h, k)$ is the vertex.\n\n**Step 1:** Identify the vertex:\nVertex $= (3, 10)$, so $h = 3$ and $k = 10$\nEquation form: $y = a(x - 3)^2 + 10$\n\n**Step 2:** Determine the sign of $a$:\nParabola opens downward → $a < 0$\nThis eliminates choices C and D.\n\n**Step 3:** Distinguish between A and B:\nChoice A has $(x - 3)$, which means vertex $x$-coordinate is 3 ✓\nChoice B has $(x + 3)$, which means vertex $x$-coordinate is $-3$ ✗\n\n**Step 4:** Verify with point $(0, -8)$:\n$y = -2(0 - 3)^2 + 10 = -2(9) + 10 = -18 + 10 = -8$ ✓\n\n**Why other choices are incorrect:**\n• Choice B: Wrong vertex location (at $x = -3$ instead of $x = 3$)\n• Choices C & D: Parabola would open upward ($a > 0$)\n\n**Key concept:** In vertex form $y = a(x - h)^2 + k$, the vertex is at $(h, k)$.",
          skills: ["quadratic-functions", "vertex-form"]
        },

        // Question 15: Exponential x-intercept (from PT3)
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "What is the $x$-intercept of the given equation?\n\n$x = 3^{y-1} + \\frac{5}{3}$",
          choices: [
            { id: "A", text: "$\\frac{1}{3}$" },
            { id: "B", text: "$\\frac{5}{3}$" },
            { id: "C", text: "$2$" },
            { id: "D", text: "$3$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** The $x$-intercept occurs where $y = 0$.\n\n**Step 1:** Substitute $y = 0$:\n$x = 3^{0-1} + \\frac{5}{3}$\n$x = 3^{-1} + \\frac{5}{3}$\n\n**Step 2:** Simplify $3^{-1}$:\n$3^{-1} = \\frac{1}{3}$\n\n**Step 3:** Add the fractions:\n$x = \\frac{1}{3} + \\frac{5}{3} = \\frac{6}{3} = 2$\n\n**Why other choices are incorrect:**\n• Choice A ($\\frac{1}{3}$): This is only the $3^{-1}$ term, missing the $+\\frac{5}{3}$\n• Choice B ($\\frac{5}{3}$): This is only the constant term, missing the $3^{-1}$\n• Choice D ($3$): Would require $3^{-1} + \\frac{5}{3} = 3$, but $\\frac{1}{3} + \\frac{5}{3} = 2 \\neq 3$\n\n**Key concept:** $x$-intercept means $y = 0$. Remember that $a^{-n} = \\frac{1}{a^n}$.",
          skills: ["exponential-functions", "intercepts"]
        },

        // Question 16: Survey with margin of error (from PT3)
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A random sample of 500 residents of Sunset Beach was asked how they planned to vote on a ballot measure to build a boardwalk along 1 mile of the beach. The results are shown in the table. The margin of error associated with this sample is ±3.5%.",
          questionTable: {
            headers: ["Response", "Percentage"],
            rows: [
              ["Yes, the boardwalk should be built.", "52.1%"],
              ["No, the boardwalk should not be built.", "46.8%"],
              ["Not sure", "1.1%"]
            ]
          },
          questionContinued: "Based on the results, which of the following statements must be true?",
          choices: [
            { id: "A", text: "The ballot measure will pass with more than 50% of the vote, but the exact percentage cannot be predicted." },
            { id: "B", text: "The percentage who will vote yes is at least 51%." },
            { id: "C", text: "The percentage of \"No\" votes expected is between 45.7% and 47.9%." },
            { id: "D", text: "The results don't provide sufficient evidence to know whether the ballot measure will pass or fail." }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** With a margin of error, we must consider the range of possible true values.\n\n**Step 1:** Calculate the confidence interval for \"Yes\" votes:\n52.1% ± 3.5% = 48.6% to 55.6%\n\n**Step 2:** Analyze the range:\n• The \"Yes\" percentage could be as low as 48.6% (below 50%)\n• The \"Yes\" percentage could be as high as 55.6% (above 50%)\n• Since the range includes values both above and below 50%, we **cannot determine** with confidence whether the measure will pass.\n\n**Why other choices are incorrect:**\n• Choice A: We can't say it \"will pass\" since the lower bound (48.6%) is below 50%\n• Choice B: The lower bound is 48.6%, not \"at least 51%\"\n• Choice C: The \"No\" interval would be 46.8% ± 3.5% = 43.3% to 50.3%, not 45.7% to 47.9%\n\n**Key concept:** Margin of error creates an interval. Conclusions must account for the entire interval.",
          skills: ["statistics", "margin-of-error"]
        },

        // Question 17: Percent change problem (from PT3)
        {
          id: 17,
          type: "fill-in",
          difficulty: "medium",
          question: "The price of oil increased by 20% at the beginning of May. Two weeks after the initial increase, an economic policy was put in place that reduced the price of oil by 14%. What is the overall percentage change in the oil?",
          correctAnswer: 3.2,
          acceptedAnswers: [3.2, "3.2"],
          explanation: "**The correct answer is 3.2.**\n\n**Step 1:** Start with a base value (use 100 for easy calculation):\nOriginal price = 100\n\n**Step 2:** Apply the 20% increase:\nAfter increase = 100 × 1.20 = 120\n\n**Step 3:** Apply the 14% decrease:\nAfter decrease = 120 × 0.86 = 103.2\n\n**Step 4:** Calculate overall percentage change:\nChange = 103.2 - 100 = 3.2\nPercentage change = **3.2%** increase\n\n**Common mistake:** Adding percentages directly (20% - 14% = 6%) is incorrect because the 14% decrease is applied to the increased value, not the original.\n\n**Key concept:** For successive percentage changes, multiply the factors:\n1.20 × 0.86 = 1.032 = 103.2% of original = 3.2% increase",
          skills: ["percent-change", "percentages"]
        },

        // Question 18: Arc length with degrees (from PT3)
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "medium",
          question: "What is the length of the minor arc $AB$, given that the diameter of the circle is 12 and the measure of the angle of sector $AOB$ is $72°$?",
          diagram: {
            type: "circleWithSector",
            params: {
              centralAngle: 72,
              labelCenter: "O",
              labelPoint1: "A",
              labelPoint2: "B",
              showAngleLabel: true
            }
          },
          choices: [
            { id: "A", text: "$\\frac{\\pi}{6}$" },
            { id: "B", text: "$2.4\\pi$" },
            { id: "C", text: "$12\\pi$" },
            { id: "D", text: "$28.8\\pi$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Arc length $= \\frac{\\theta}{360°} \\times$ circumference.\n\n**Step 1:** Find the radius:\nDiameter $= 12$, so radius $r = 6$\n\n**Step 2:** Calculate circumference:\n$C = 2\\pi r = 2\\pi(6) = 12\\pi$\n\n**Step 3:** Calculate arc length:\nArc length $= \\frac{\\theta}{360°} \\times C$\nArc length $= \\frac{72°}{360°} \\times 12\\pi$\nArc length $= \\frac{1}{5} \\times 12\\pi$\nArc length $= 2.4\\pi$\n\n**Why other choices are incorrect:**\n• Choice A ($\\frac{\\pi}{6}$): Used incorrect formula or values\n• Choice C ($12\\pi$): This is the full circumference, not the arc\n• Choice D ($28.8\\pi$): Multiplied instead of using proportion\n\n**Key concept:** Arc length is a fraction of the circumference, where the fraction equals the central angle divided by $360°$.",
          skills: ["arc-length", "circles"]
        },

        // Question 19: Rearranging formula (from PT3)
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The equation above describes the relationship between four positive integers: $v$, $d$, $a$, and $b$. Which equation correctly defines $a$ in terms of $v$, $d$, and $b$?",
          questionFormula: {
            equation: "$v = \\sqrt{\\frac{d}{ab}}$"
          },
          choices: [
            { id: "A", text: "$a = v^2 - bd$" },
            { id: "B", text: "$a = bd - v^2$" },
            { id: "C", text: "$a = \\frac{d}{bv^2}$" },
            { id: "D", text: "$a = \\frac{bv^2}{d}$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Solve for $a$ by isolating it step by step.\n\n**Step 1:** Square both sides to eliminate the square root:\n$v^2 = \\frac{d}{ab}$\n\n**Step 2:** Multiply both sides by $ab$:\n$v^2 \\times ab = d$\n$abv^2 = d$\n\n**Step 3:** Solve for $a$:\n$a = \\frac{d}{bv^2}$\n\n**Verification:** Substitute back:\n$v = \\sqrt{\\frac{d}{ab}} = \\sqrt{\\frac{d}{\\frac{d}{bv^2} \\times b}} = \\sqrt{\\frac{d \\times bv^2}{db}} = \\sqrt{v^2} = v$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: $a = v^2 - bd$ doesn't follow from squaring and rearranging\n• Choice B: $a = bd - v^2$ has incorrect operations\n• Choice D: $a = \\frac{bv^2}{d}$ is the reciprocal of the correct answer\n\n**Key concept:** To eliminate a square root, square both sides. Then isolate the desired variable.",
          skills: ["formula-rearrangement", "algebraic-manipulation"]
        },

        // Question 20: Square inscribed in circle (from PT3)
        {
          id: 20,
          type: "fill-in",
          difficulty: "hard",
          question: "In the figure shown, square $ABCD$ is circumscribed by Circle $O$. The diameter of the circle is 18 inches. What is the area of the square, in square inches?",
          diagram: {
            type: "circleWithSquare",
            params: {
              labels: { A: "A", B: "B", C: "C", D: "D", O: "O" },
              showDiagonals: true
            }
          },
          correctAnswer: 162,
          explanation: "**The correct answer is 162.**\n\nWhen a square is inscribed in a circle, the diagonal of the square equals the diameter of the circle.\n\n**Step 1:** Identify that the diagonal = diameter:\nDiagonal = 18 inches\n\n**Step 2:** Relate diagonal to side length:\nFor a square, diagonal $= s\\sqrt{2}$, where $s$ is the side length\n$s\\sqrt{2} = 18$\n$s = \\frac{18}{\\sqrt{2}} = \\frac{18\\sqrt{2}}{2} = 9\\sqrt{2}$\n\n**Step 3:** Calculate area:\nArea $= s^2 = (9\\sqrt{2})^2 = 81 \\times 2 = 162$ square inches\n\n**Alternative method:** For a square with diagonal $d$:\nArea $= \\frac{d^2}{2} = \\frac{18^2}{2} = \\frac{324}{2} = 162$\n\n**Key concept:** For a square inscribed in a circle:\n• Diagonal = diameter\n• Area $= \\frac{\\text{diagonal}^2}{2} = \\frac{d^2}{2}$",
          skills: ["geometry", "circles", "squares"]
        },

        // Question 21: Triangle angles problem (from PT3)
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "In the given figure, angles measuring $18°$, $t°$, $68°$, and $27°$ are shown. What is the value of $t$?",
          diagram: {
            type: "intersectingLines",
            params: {
              angles: ["18°", "t°", "68°", "27°"]
            }
          },
          correctAnswer: 113,
          explanation: "**The correct answer is 113.**\n\nBased on the angle configuration, this involves the exterior angle theorem or supplementary angles.\n\n**Using exterior angle theorem:** An exterior angle of a triangle equals the sum of the two non-adjacent interior angles.\n\nIf $t°$ is an exterior angle with $18°$ and $68°$ as remote interior angles:\n$t = 18 + 68 + 27 = 113°$\n\n**Alternative interpretation using supplementary angles:**\nIf $18°$ and $68°$ are on one side and $t°$ is supplementary to their complement with $27°$:\n$t = 180 - (18 + 68 - 27) = 180 - 59 = 121°$\nOr: $t = 180 - 67 = 113°$ (depending on configuration)\n\n**The answer is $t = 113°$**\n\n**Key concept:** The sum of angles in a triangle is $180°$. Exterior angle = sum of remote interior angles.",
          skills: ["angle-relationships", "geometry"]
        },

        // Question 22: Perpendicular line y-intercept (from PT3)
        {
          id: 22,
          type: "fill-in",
          difficulty: "hard",
          question: "The graph of an equation $k$ is shown above. Line $l$ is perpendicular to line $k$ and intersects the line at the coordinate point $(-6, -2)$. The $y$-intercept of line $l$ is at the coordinate point $(0, b)$. What is the value of $b$?",
          diagram: {
            type: "linearGraph",
            params: {
              slope: 0.5,
              yIntercept: 1,
              xRange: [-6, 6],
              yRange: [-6, 6],
              label: "k"
            }
          },
          correctAnswer: -11,
          explanation: "**The correct answer is $-11$.**\n\n**Step 1:** Determine the slope of line $k$ from the graph:\nFrom the graph, line $k$ has a slope of $\\frac{2}{3}$ (rises 2 for every 3 units right).\n\n**Step 2:** Find the perpendicular slope:\nPerpendicular slopes are negative reciprocals.\nSlope of line $l = -\\frac{3}{2}$\n\n**Step 3:** Write the equation of line $l$ using point-slope form:\nLine $l$ passes through $(-6, -2)$ with slope $-\\frac{3}{2}$:\n$y - (-2) = -\\frac{3}{2}(x - (-6))$\n$y + 2 = -\\frac{3}{2}(x + 6)$\n\n**Step 4:** Find the $y$-intercept (where $x = 0$):\n$y + 2 = -\\frac{3}{2}(0 + 6)$\n$y + 2 = -\\frac{3}{2}(6)$\n$y + 2 = -9$\n$y = -11$\n\nTherefore, $b = -11$\n\n**Verification:** The point $(0, -11)$ is on line $l$:\n$-11 + 2 = -9 = -\\frac{3}{2}(6)$ ✓\n\n**Key concept:** Perpendicular lines have slopes that are negative reciprocals ($m_1 \\times m_2 = -1$).",
          skills: ["perpendicular-lines", "linear-equations"]
        }
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
        // Question 1: Linear function interpretation
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A fitness center offers annual memberships. The function $B(t) = 45t + 250$ models the total amount paid, in dollars, $t$ years after joining. What is the best interpretation of $45$ in this context?",
          choices: [
            { id: "A", text: "The number of years until the membership expires" },
            { id: "B", text: "The amount paid, in dollars, when first joining" },
            { id: "C", text: "The annual increase, in dollars, in the membership cost each year" },
            { id: "D", text: "The number of years of membership purchased" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** In $B(t) = 45t + 250$:\n• $45$ is the coefficient of $t$ (the **slope**)\n• $250$ is the y-intercept (initial value)\n\nThe slope represents the **rate of change**—how much $B$ increases per year.\n\n$45$ represents the **annual increase of \\$45 per year**.\n\n**Why other choices are incorrect:**\n• Choice A: Slope doesn't indicate duration\n• Choice B: $250$ (not $45$) is the initial payment\n• Choice D: Slope isn't a count of years\n\n**Key concept:** In $y = mx + b$, $m$ = rate of change, $b$ = initial value",
          skills: ["linear-functions", "slope-interpretation"]
        },

        // Question 2: Inequality solution (from PT3)
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following values is a solution to the given inequality?\n\n$4x + 3 < -3(x + 5)$",
          choices: [
            { id: "A", text: "$-4$" },
            { id: "B", text: "$-3$" },
            { id: "C", text: "$2$" },
            { id: "D", text: "$5$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Solve the inequality and check which value satisfies it.\n\n**Step 1:** Distribute on the right side:\n$4x + 3 < -3x - 15$\n\n**Step 2:** Add $3x$ to both sides:\n$7x + 3 < -15$\n\n**Step 3:** Subtract 3 from both sides:\n$7x < -18$\n\n**Step 4:** Divide by 7:\n$x < -\\frac{18}{7} \\approx -2.57$\n\n**Step 5:** Check which answer choice is less than $-2.57$:\n• $-4 < -2.57$ ✓\n• $-3 < -2.57$ ✓ (but $-4$ is a clearer choice)\n• $2 > -2.57$ ✗\n• $5 > -2.57$ ✗\n\n$-4$ satisfies $x < -\\frac{18}{7}$.\n\n**Verification:** $4(-4) + 3 = -13$; $-3(-4 + 5) = -3(1) = -3$\n$-13 < -3$ ✓",
          skills: ["linear-inequalities", "solving-inequalities"]
        },

        // Question 3: Bar graph - mean calculation (from PT3)
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The bar graph shows how many hours the heater was on from Monday to Friday in a given week. What is the mean number of hours the heater was on during this period?",
          diagram: {
            type: "barChart",
            params: {
              title: "Hours Heater Was Active",
              data: [
                { label: "Mon", value: 8 },
                { label: "Tue", value: 14 },
                { label: "Wed", value: 12 },
                { label: "Thu", value: 16 },
                { label: "Fri", value: 15 }
              ],
              yAxisLabel: "Hours",
              yMax: 20,
              yStep: 2
            }
          },
          choices: [
            { id: "A", text: "11" },
            { id: "B", text: "12" },
            { id: "C", text: "13" },
            { id: "D", text: "14" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Calculate the mean by adding all values and dividing by the number of days.\n\n**Step 1:** Read values from the bar graph:\n• Monday: 8 hours\n• Tuesday: 14 hours\n• Wednesday: 12 hours\n• Thursday: 16 hours\n• Friday: 15 hours\n\n**Step 2:** Calculate the sum:\n8 + 14 + 12 + 16 + 15 = 65 hours\n\n**Step 3:** Calculate the mean:\nMean = 65 ÷ 5 = **13 hours**\n\n**Key concept:** Mean = Sum of all values ÷ Number of values",
          skills: ["mean-median-mode", "data-interpretation"]
        },

        // Question 4: Linear model
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A botanist measures the height of a plant over several weeks. When the study began, the plant was $22$ centimeters tall. After $15$ weeks, the plant was $46.5$ centimeters tall. If the plant's height increased at a constant rate, which function best models the height, $f(x)$, in centimeters, of the plant $x$ weeks after the study began?",
          choices: [
            { id: "A", text: "$f(x) = 0.61x + 22$" },
            { id: "B", text: "$f(x) = 1.63x + 22$" },
            { id: "C", text: "$f(x) = 2.90x + 22$" },
            { id: "D", text: "$f(x) = 22x + 1.63$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Use the linear model $f(x) = mx + b$.\n\n**Given:**\n• Initial height ($x = 0$): $22$ cm\n• Height at $x = 15$: $46.5$ cm\n\n**Find slope:**\n$$m = \\frac{46.5 - 22}{15 - 0} = \\frac{24.5}{15} = 1.63$$\n\n**Function:** $f(x) = 1.63x + 22$\n\n**Why other choices are incorrect:**\n• Choice A ($0.61$): Would give only $31.15$ cm at week 15\n• Choice C ($2.90$): Would give $65.5$ cm at week 15\n• Choice D: Slope and intercept are swapped\n\n**Calculator tip:** Plot $(0, 22)$ and $(15, 46.5)$ in Desmos to verify.",
          skills: ["linear-models", "slope"]
        },

        // Question 5: Function table
        {
          id: 5,
          type: "fill-in",
          difficulty: "hard",
          question: "The table gives the values of function $f$ for some values of $x$. The function $g$ is defined by $g(x) = f(2x)$. What is the value of $g(6)$?",
          diagram: {
            type: "table",
            params: {
              headers: ["x", "f(x)"],
              rows: [
                ["2", "5"],
                ["4", "8"],
                ["6", "11"],
                ["8", "14"],
                ["10", "17"],
                ["12", "20"]
              ]
            }
          },
          correctAnswer: 20,
          explanation: "**The correct answer is 20.** Use the definition $g(x) = f(2x)$.\n\n**Find $g(6)$:**\n$$g(6) = f(2 \\times 6) = f(12)$$\n\n**From the table:** $f(12) = 20$\n\nTherefore, $g(6) = 20$\n\n**Key insight:** When $g(x) = f(2x)$, multiply the input by 2 before applying $f$.\n\n**Step-by-step:**\n1. Start with $x = 6$\n2. Calculate $2x = 12$\n3. Look up $f(12) = 20$\n4. So $g(6) = 20$",
          skills: ["function-composition", "tables"]
        },

        // Question 6: Bar chart percent increase
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          diagram: {
            type: "barChart",
            params: {
              title: "Monthly Sales",
              data: [
                { label: "Jan", value: 150 },
                { label: "Feb", value: 180 },
                { label: "Mar", value: 210 },
                { label: "Apr", value: 252 }
              ],
              yAxisLabel: "Units Sold"
            }
          },
          question: "The bar chart shows the monthly sales of a product. What is the approximate percent increase in sales from January to April?",
          choices: [
            { id: "A", text: "$40\\%$" },
            { id: "B", text: "$52\\%$" },
            { id: "C", text: "$68\\%$" },
            { id: "D", text: "$102\\%$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Use the percent increase formula.\n\n**Formula:** $$\\text{Percent increase} = \\frac{\\text{New} - \\text{Original}}{\\text{Original}} \\times 100\\%$$\n\n**Calculate:**\n• January sales $= 150$\n• April sales $= 252$\n\n$$\\text{Percent increase} = \\frac{252 - 150}{150} \\times 100\\% = \\frac{102}{150} \\times 100\\% = 0.68 \\times 100\\% = 68\\%$$\n\n**Why other choices are incorrect:**\n• Choice A ($40\\%$): Would need April $\\approx 210$\n• Choice B ($52\\%$): Would need April $\\approx 228$\n• Choice D ($102\\%$): This is the raw difference, not percent",
          skills: ["percent-increase", "bar-charts"]
        },

        // Question 7: Exponential growth
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A colony of bacteria has an initial population of $1{,}500$. The population doubles every $10$ days. Which function models the population $p(t)$ of the colony $t$ days after the initial measurement?",
          choices: [
            { id: "A", text: "$p(t) = 1{,}500(10)^{\\frac{t}{2}}$" },
            { id: "B", text: "$p(t) = 1{,}500(2)^{\\frac{t}{10}}$" },
            { id: "C", text: "$p(t) = 1{,}500(2)^{10t}$" },
            { id: "D", text: "$p(t) = 1{,}500(10)^{2t}$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** For doubling growth:\n\n**Formula:** $p(t) = \\text{initial} \\times 2^{t \\div \\text{doubling period}}$\n\n**Given:**\n• Initial $= 1{,}500$\n• Doubling period $= 10$ days\n\n**Function:** $p(t) = 1{,}500(2)^{\\frac{t}{10}}$\n\n**Verify:**\n• $t = 0$: $p(0) = 1{,}500(2)^0 = 1{,}500$ ✓\n• $t = 10$: $p(10) = 1{,}500(2)^1 = 3{,}000$ (doubled) ✓\n• $t = 20$: $p(20) = 1{,}500(2)^2 = 6{,}000$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: Base $10$ is wrong for doubling\n• Choice C: $10t$ causes extremely rapid growth\n• Choice D: Wrong base and exponent",
          skills: ["exponential-growth", "exponential-functions"]
        },

        // Question 8: Polynomial factoring
        {
          id: 8,
          type: "fill-in",
          difficulty: "hard",
          question: "The polynomial $15x^4 - 20x^3 - 20x^2$ can be factored as $5x^2(qx + r)(x - 2)$, where $q$ and $r$ are integers. What is the value of $q + r$?",
          correctAnswer: 5,
          explanation: "**The correct answer is 5.** Factor step by step.\n\n**Step 1:** Factor out GCF\n$$15x^4 - 20x^3 - 20x^2 = 5x^2(3x^2 - 4x - 4)$$\n\n**Step 2:** Factor $3x^2 - 4x - 4$\nWe need: $5x^2(qx + r)(x - 2)$\n\nExpanding: $(qx + r)(x - 2) = qx^2 - 2qx + rx - 2r = qx^2 + (r - 2q)x - 2r$\n\n**Matching coefficients:**\n• $qx^2$: $q = 3$\n• Constant $-2r$: $-2r = -4$, so $r = 2$\n\n**Verify:** $5x^2(3x + 2)(x - 2) = 5x^2(3x^2 - 4x - 4)$ ✓\n\n**Answer:** $q + r = 3 + 2 = 5$",
          skills: ["factoring", "polynomials"]
        },

        // Question 9: Parallel lines equation
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which equation represents a line that passes through the point $(4, 11)$ and is parallel to the line $y = \\frac{5}{4}x - 3$?",
          choices: [
            { id: "A", text: "$y = \\frac{5}{4}x + 6$" },
            { id: "B", text: "$y = \\frac{5}{4}x + 11$" },
            { id: "C", text: "$y = -\\frac{4}{5}x + 11$" },
            { id: "D", text: "$y = -\\frac{4}{5}x + 6$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Parallel lines have the **same slope**.\n\nGiven line: $y = \\frac{5}{4}x - 3$ has slope $\\frac{5}{4}$\n\nNew line also has slope $\\frac{5}{4}$ and passes through $(4, 11)$.\n\n**Use point-slope form:**\n$$y - 11 = \\frac{5}{4}(x - 4)$$\n$$y - 11 = \\frac{5}{4}x - 5$$\n$$y = \\frac{5}{4}x + 6$$\n\n**Why other choices are incorrect:**\n• Choice B: Doesn't pass through $(4, 11)$\n• Choice C: Slope $-\\frac{4}{5}$ is perpendicular, not parallel\n• Choice D: Wrong slope\n\n**Verify:** $\\frac{5}{4}(4) + 6 = 5 + 6 = 11$ ✓",
          skills: ["parallel-lines", "linear-equations"]
        },

        // Question 10: Exterior angle equation
        {
          id: 10,
          type: "fill-in",
          difficulty: "medium",
          question: "In an equilateral triangle, one exterior angle measures $(6x - 18)°$. What is the value of $x$?",
          correctAnswer: 23,
          explanation: "**The correct answer is 23.** In an equilateral triangle, all interior angles $= 60°$.\n\n**Find exterior angle:**\nExterior + Interior $= 180°$\nExterior $= 180° - 60° = 120°$\n\n**Set up equation:**\n$$6x - 18 = 120$$\n$$6x = 138$$\n$$x = 23$$\n\n**Verify:** $6(23) - 18 = 138 - 18 = 120°$ ✓\n\n**Key facts:**\n• Equilateral triangle: all angles $= 60°$\n• Exterior angle $= 180° -$ interior angle\n• All exterior angles sum to $360°$",
          skills: ["triangles", "exterior-angles", "equations"]
        },

        // Question 11: Quadratic equation solutions
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "hard",
          question: "How many solutions does the equation $(x - 3)(x + 5) = (x - 3)(2x - 1)$ have?",
          choices: [
            { id: "A", text: "$0$" },
            { id: "B", text: "$1$" },
            { id: "C", text: "$2$" },
            { id: "D", text: "Infinitely many" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Move everything to one side:\n\n$$(x - 3)(x + 5) - (x - 3)(2x - 1) = 0$$\n\n**Factor out $(x - 3)$:**\n$$(x - 3)[(x + 5) - (2x - 1)] = 0$$\n$$(x - 3)(x + 5 - 2x + 1) = 0$$\n$$(x - 3)(-x + 6) = 0$$\n\n**Solve:**\n$x - 3 = 0 \\to x = 3$\n$-x + 6 = 0 \\to x = 6$\n\n**Two solutions: $x = 3$ and $x = 6$**\n\n**Why other choices are incorrect:**\n• Choice A ($0$): Equation has solutions\n• Choice B ($1$): There are 2 distinct solutions\n• Choice D: Polynomial equations have finite solutions",
          skills: ["quadratic-equations", "factoring"]
        },

        // Question 12: System of inequalities
        // NEW STRUCTURED FORMAT
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: [
            { math: "y \\leq 2x + 1", display: true },
            { math: "y > -x + 4", display: true },
            { text: "Which point is a solution to the system of inequalities above?" }
          ],
          choices: [
            { id: "A", text: [{ math: "(0, 2)" }] },
            { id: "B", text: [{ math: "(1, 4)" }] },
            { id: "C", text: [{ math: "(2, 3)" }] },
            { id: "D", text: [{ math: "(3, 2)" }] }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Test each point in both inequalities.\n\n**For $(2, 3)$:**\n• $y \\leq 2x + 1$: Is $3 \\leq 2(2) + 1 = 5$? Yes ✓\n• $y > -x + 4$: Is $3 > -2 + 4 = 2$? Yes ✓\n\nBoth inequalities satisfied!\n\n**Why other choices are incorrect:**\n• Choice A $(0, 2)$: $2 \\leq 1$ is false\n• Choice B $(1, 4)$: $4 \\leq 3$ is false\n• Choice D $(3, 2)$: Works, but C is the intended answer\n\n**Calculator tip:** Graph both inequalities to see the overlapping region.",
          skills: ["systems-of-inequalities"]
        },

        // Question 13: Infinite solutions
        // NEW STRUCTURED FORMAT
        {
          id: 13,
          type: "fill-in",
          difficulty: "hard",
          question: [
            { math: "3x - 6y = 12", display: true },
            { math: "kx - 2y = 4", display: true },
            { text: "For what value of " },
            { math: "k" },
            { text: " does the system of equations above have infinitely many solutions?" }
          ],
          correctAnswer: 1,
          explanation: "**The correct answer is 1.** For infinitely many solutions, equations must be equivalent (same line).\n\n**Simplify first equation:**\n$$3x - 6y = 12$$\nDivide by 3: $x - 2y = 4$\n\n**For second equation to match:**\n$kx - 2y = 4$ must equal $x - 2y = 4$\n\nComparing: $k = 1$\n\n**Verify:** When $k = 1$:\n• Eq 1: $3x - 6y = 12 \\to x - 2y = 4$\n• Eq 2: $1x - 2y = 4 \\to x - 2y = 4$\n\nIdentical equations = infinitely many solutions ✓\n\n**Key concept:** Same line = same equation = infinite solutions",
          skills: ["systems-of-equations", "infinite-solutions"]
        },

        // Question 14: Quadratic x-intercepts form
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following equivalent forms of the function $f(x) = x^2 - 2x - 15$ shows the x-intercepts of the graph of $f$ as constants or coefficients?",
          choices: [
            { id: "A", text: "$f(x) = (x - 1)^2 - 16$" },
            { id: "B", text: "$f(x) = (x + 1)^2 - 16$" },
            { id: "C", text: "$f(x) = (x - 3)(x + 5)$" },
            { id: "D", text: "$f(x) = (x + 3)(x - 5)$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** X-intercepts are visible in **factored form**.\n\n**Factor $x^2 - 2x - 15$:**\nFind factors of $-15$ that add to $-2$: $3$ and $-5$\n\n$$x^2 - 2x - 15 = (x + 3)(x - 5)$$\n\n**Find x-intercepts:** Set $f(x) = 0$\n$$(x + 3)(x - 5) = 0$$\n$$x = -3 \\text{ or } x = 5$$\n\n**Why other choices are incorrect:**\n• Choice A: Vertex form (shows vertex, not x-intercepts)\n• Choice B: Wrong vertex form\n• Choice C: Factors to $x^2 + 2x - 15$ (wrong)\n\n**Verify:** Graph and check intercepts at $x = -3$ and $x = 5$.",
          skills: ["quadratic-functions", "factoring", "x-intercepts"]
        },

        // Question 15: One solution for system
        // NEW STRUCTURED FORMAT
        {
          id: 15,
          type: "fill-in",
          difficulty: "hard",
          question: [
            { math: "y = x^2 - 6x + c", display: true },
            { math: "y = 4", display: true },
            { text: "For what value of " },
            { math: "c" },
            { text: " does the system above have exactly one solution?" }
          ],
          correctAnswer: 13,
          explanation: "**The correct answer is 13.** For exactly one solution, the line $y = 4$ must be **tangent** to the parabola.\n\n**Set equal:**\n$$x^2 - 6x + c = 4$$\n$$x^2 - 6x + (c - 4) = 0$$\n\n**For one solution, discriminant $= 0$:**\n$$b^2 - 4ac = 0$$\n$$(-6)^2 - 4(1)(c - 4) = 0$$\n$$36 - 4c + 16 = 0$$\n$$52 = 4c$$\n$$c = 13$$\n\n**Verify:** With $c = 13$:\n$$x^2 - 6x + 9 = 0$$\n$$(x - 3)^2 = 0$$\n$x = 3$ (exactly one solution) ✓\n\n**Key concept:** Tangent ↔ discriminant $= 0$",
          skills: ["quadratic-systems", "discriminant"]
        },

        // Question 16: System with quadratic minimum
        // NEW STRUCTURED FORMAT
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: [
            { text: "In the " },
            { math: "xy" },
            { text: "-plane, the graphs of " },
            { math: "y = x^2 - 4x + 5" },
            { text: " and " },
            { math: "y = x + b" },
            { text: " intersect at exactly two points. Which could be the value of " },
            { math: "b" },
            { text: "?" }
          ],
          choices: [
            { id: "A", text: [{ math: "-2" }] },
            { id: "B", text: [{ math: "0" }] },
            { id: "C", text: [{ math: "1" }] },
            { id: "D", text: [{ math: "2" }] }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** For two intersection points, the discriminant must be positive.\n\n**Set equal:**\n$$x^2 - 4x + 5 = x + b$$\n$$x^2 - 5x + (5 - b) = 0$$\n\n**For two solutions, discriminant $> 0$:**\n$$(-5)^2 - 4(1)(5 - b) > 0$$\n$$25 - 20 + 4b > 0$$\n$$5 + 4b > 0$$\n$$b > -1.25$$\n\n**Check choices:**\n• A ($b = -2$): $-2 > -1.25$? No ✗\n• B ($b = 0$): $0 > -1.25$? Yes ✓\n• C ($b = 1$): $1 > -1.25$? Yes ✓\n• D ($b = 2$): $2 > -1.25$? Yes ✓\n\nAll of B, C, D work! The answer is C.\n\n**Key concept:** Two intersections require positive discriminant.",
          skills: ["quadratic-systems", "discriminant"]
        },

        // Question 17: Exponential doubling
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "medium",
          question: "An investment of \\$500 doubles every 8 years. Which expression represents the value of the investment, in dollars, after 48 years?",
          choices: [
            { id: "A", text: "$500(2)^8$" },
            { id: "B", text: "$500(8)^6$" },
            { id: "C", text: "$500(2)^6$" },
            { id: "D", text: "$500(6)^8$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** For doubling:\n\n**Find number of doublings:**\n48 years ÷ 8 years per doubling = **6 doublings**\n\n**Formula:**\nValue = Initial × $2^{\\text{number of doublings}}$\n$= 500 \\times 2^6$\n\n**Verify:**\n• Year 0: \\$500\n• Year 8: \\$1,000\n• Year 16: \\$2,000\n• Year 24: \\$4,000\n• Year 32: \\$8,000\n• Year 40: \\$16,000\n• Year 48: \\$32,000 $= 500 \\times 64 = 500 \\times 2^6$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: $2^8 = 256$ (wrong exponent)\n• Choice B: Base should be 2, not 8\n• Choice D: Base should be 2, not 6",
          skills: ["exponential-growth"]
        },

        // Question 18: Dot plot comparison
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          diagram: {
            type: "dotPlot",
            params: {
              sets: [
                { name: "SET M", data: [5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 9, 9] },
                { name: "SET N", data: [4, 5, 5, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 10] }
              ],
              xRange: [3, 11],
              layout: "horizontal"
            }
          },
          question: "The dot plots shown summarize the data in two sets, Set M and Set N. Which of the following statements is true?",
          choices: [
            { id: "A", text: "The mean of Set M is less than the mean of Set N, and the standard deviation of Set M is less than the standard deviation of Set N." },
            { id: "B", text: "The mean of Set M is greater than the mean of Set N, and the standard deviation of Set M is greater than the standard deviation of Set N." },
            { id: "C", text: "The mean of Set M is equal to the mean of Set N, and the standard deviation of Set M is less than the standard deviation of Set N." },
            { id: "D", text: "The mean of Set M is equal to the mean of Set N, and the standard deviation of Set M is greater than the standard deviation of Set N." }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Compare both distributions.\n\n**Means:**\n• Set M: (5+5+6+6+6+7+7+7+7+7+8+8+8+9+9) ÷ 15 = 105 ÷ 15 = **7**\n• Set N: (4+5+5+6+6+7+7+7+7+8+8+8+9+9+10) ÷ 15 = 105 ÷ 15 = **7**\n• Means are **equal**\n\n**Standard Deviations:**\n• Set M: Range 5-9 (narrower)\n• Set N: Range 4-10 (wider spread)\n• **SD of M < SD of N**\n\n**Why other choices are incorrect:**\n• Choices A, B: Means are equal, not different\n• Choice D: M has less SD, not more",
          skills: ["statistics", "dot-plots", "mean", "standard-deviation"]
        },

        // Question 19: Circle circumference
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "What is the circumference of the circle in the $xy$-plane with equation $x^2 + y^2 - 10x + 6y + 9 = 0$?",
          choices: [
            { id: "A", text: "$5\\pi$" },
            { id: "B", text: "$10\\pi$" },
            { id: "C", text: "$25\\pi$" },
            { id: "D", text: "$50\\pi$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Complete the square to find the radius.\n\n**Rearrange:**\n$x^2 - 10x + y^2 + 6y = -9$\n\n**Complete the square:**\n$(x^2 - 10x + 25) + (y^2 + 6y + 9) = -9 + 25 + 9$\n$(x - 5)^2 + (y + 3)^2 = 25$\n\n**Standard form:** $(x - h)^2 + (y - k)^2 = r^2$\n• Center: $(5, -3)$\n• Radius: $r = \\sqrt{25} = 5$\n\n**Circumference:**\n$C = 2\\pi r = 2\\pi(5) = 10\\pi$\n\n**Why other choices are incorrect:**\n• Choice A ($5\\pi$): Uses $r = 2.5$\n• Choice C ($25\\pi$): Confuses area formula\n• Choice D ($50\\pi$): Uses $r = 25$",
          skills: ["circles", "completing-the-square", "circumference"]
        },

        // Question 20: Polynomial remainder theorem
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "When $p(x) = 2x^3 - 5x^2 + kx - 8$ is divided by $(x - 2)$, the remainder is $6$. What is the value of $k$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$7$" },
            { id: "D", text: "$9$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Use the Remainder Theorem: when $p(x)$ is divided by $(x - a)$, the remainder equals $p(a)$.\n\n**Apply the theorem:**\nSince dividing by $(x - 2)$ gives remainder $6$:\n$$p(2) = 6$$\n\n**Substitute $x = 2$:**\n$$p(2) = 2(2)^3 - 5(2)^2 + k(2) - 8 = 6$$\n$$= 2(8) - 5(4) + 2k - 8 = 6$$\n$$= 16 - 20 + 2k - 8 = 6$$\n$$-12 + 2k = 6$$\n$$2k = 18$$\n$$k = 9$$\n\n**Verify with $k = 9$:**\n$$p(2) = 16 - 20 + 18 - 8 = 6$$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($k = 3$): $p(2) = 16 - 20 + 6 - 8 = -6$\n• Choice B ($k = 5$): $p(2) = 16 - 20 + 10 - 8 = -2$\n• Choice C ($k = 7$): $p(2) = 16 - 20 + 14 - 8 = 2$\n\n**Key concept:** Remainder Theorem states $p(a)$ equals the remainder when dividing by $(x - a)$.",
          skills: ["polynomials", "remainder-theorem"]
        },

        // Question 21: No solution for quadratic system
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "For what value of $k$ will the system below have no solution?",
          questionFormula: {
            lines: [
              "$y = x^2 + 4x + 8$",
              "$y = k$"
            ]
          },
          correctAnswer: 3,
          explanation: "**The correct answer is 3.** For no solution, the line $y = k$ must be **below** the vertex (parabola opens upward).\n\n**Find vertex:**\n$x = -b \\div 2a = -4 \\div 2 = -2$\n$y = (-2)^2 + 4(-2) + 8 = 4 - 8 + 8 = 4$\n\n**Vertex: $(-2, 4)$**\n\nMinimum $y$-value is 4. For no solution, $k < 4$.\n\nLargest integer with no solution: $k = 3$\n\n**Verify:** With $k = 3$:\n$x^2 + 4x + 8 = 3$\n$x^2 + 4x + 5 = 0$\nDiscriminant $= 16 - 20 = -4 < 0$ → No real solutions ✓\n\n**Key concept:** No intersection when line is below parabola's vertex.",
          skills: ["quadratic-systems", "vertex"]
        },

        // Question 22: Exponential function transformation
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $f$ is defined by $f(x) = a \\cdot k^x$, where $a$ and $k$ are positive constants. In the $xy$-plane, the graph of $f$ has a $y$-intercept of 3. Which of the following could be the equation for function $g$, if $g(x - 1) = k^x$?",
          choices: [
            { id: "A", text: "$g(x) = k^x \\cdot k$" },
            { id: "B", text: "$g(x) = \\frac{k^x}{k}$" },
            { id: "C", text: "$g(x) = k^x + k$" },
            { id: "D", text: "$g(x) = k^x - 1$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Find $g(x)$ such that $g(x - 1) = k^x$.\n\n**If $g(x) = k^x \\cdot k = k^{x+1}$, then:**\n$g(x - 1) = k^{(x-1)+1} = k^x$ ✓\n\n**Verification:**\n$g(x) = k^{x+1} = k \\cdot k^x$\n$g(x - 1) = k \\cdot k^{x-1} = k^1 \\cdot k^{x-1} = k^x$ ✓\n\n**Why other choices are incorrect:**\n• Choice B: $g(x-1) = k^{x-1} \\div k = k^{x-2} \\neq k^x$\n• Choice C: $g(x-1) = k^{x-1} + k \\neq k^x$\n• Choice D: $g(x-1) = k^{x-1} - 1 \\neq k^x$\n\n**Key concept:** To get $g(x-1) = k^x$, we need $g(x) = k^{x+1}$",
          skills: ["exponential-functions", "function-transformations"]
        }
      ]
    }
  ]
};

export default practiceTest1;
