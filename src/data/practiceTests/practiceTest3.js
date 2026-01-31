// Practice Test 3 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions mirror Practice Test 3 PDF with same concepts, different contexts/numbers

export const practiceTest3 = {
  id: "practice-test-3",
  title: "Practice Test 3",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35, // minutes
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
        // Question 1: System with no solution - find constant p
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In the given system of equations, $p$ is a constant. If the system has no solution, what is the value of $p$?",
          questionFormula: {
            lines: [
              "$3x - 4y = 8$",
              "$px + 8y + 6 = 0$"
            ]
          },
          choices: [
            { id: "A", text: "$-6$" },
            { id: "B", text: "$-2$" },
            { id: "C", text: "$2$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** For a system of linear equations to have no solution, the lines must be parallel (same slope but different $y$-intercepts).\n\n**Step 1:** Convert the first equation to slope-intercept form:\n$3x - 4y = 8$\n$-4y = -3x + 8$\n$y = \\frac{3}{4}x - 2$\nSlope of first line $= \\frac{3}{4}$\n\n**Step 2:** Convert the second equation to slope-intercept form:\n$px + 8y + 6 = 0$\n$8y = -px - 6$\n$y = \\frac{-p}{8}x - \\frac{6}{8}$\nSlope of second line $= \\frac{-p}{8}$\n\n**Step 3:** Set slopes equal for parallel lines:\n$\\frac{-p}{8} = \\frac{3}{4}$\n$-p = 6$\n$p = -6$\n\n**Why other choices are incorrect:**\n• Choice B ($-2$): Would give slope $= \\frac{2}{8} = \\frac{1}{4}$, not parallel\n• Choice C ($2$): Would give slope $= \\frac{-2}{8} = -\\frac{1}{4}$, not parallel\n• Choice D ($6$): Would give slope $= \\frac{-6}{8} = -\\frac{3}{4}$, which is the negative of the correct slope\n\n**Key concept:** Parallel lines have equal slopes. For no solution, lines must be parallel but not identical.",
          skills: ["systems-of-equations", "parallel-lines"]
        },

        // Question 2: Factoring expression m³n² + m³n
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which expression is equivalent to $m^3n^2 + m^3n$?",
          choices: [
            { id: "A", text: "$m^3n(n)$" },
            { id: "B", text: "$m^6n^3$" },
            { id: "C", text: "$2m^3n^3$" },
            { id: "D", text: "$m^3n(n + 1)$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Factor out the greatest common factor (GCF) from both terms.\n\n**Step 1:** Identify the GCF of $m^3n^2$ and $m^3n$:\n• Both terms have $m^3$\n• Both terms have at least $n^1$\n• GCF $= m^3n$\n\n**Step 2:** Factor out $m^3n$:\n$m^3n^2 + m^3n = m^3n(n) + m^3n(1) = m^3n(n + 1)$\n\n**Verification:** Distribute to check:\n$m^3n(n + 1) = m^3n^2 + m^3n$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: $m^3n(n) = m^3n^2$ only, missing the $+m^3n$ term\n• Choice B: $m^6n^3$ is incorrect; you cannot add exponents when adding terms\n• Choice C: $2m^3n^3$ is incorrect; the terms have different powers of $n$ and cannot be combined this way\n\n**Key concept:** When factoring, find the GCF and divide each term by it.",
          skills: ["factoring", "polynomial-operations"]
        },

        // Question 3: Right triangle - Pythagorean theorem
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "In right triangle $ABC$, angle $B$ has a measure of $90°$, the longest side of the triangle is 61 centimeters, and the shortest side is 11 centimeters. What is the length of the third side of the triangle, in centimeters?",
          choices: [
            { id: "A", text: "$40$" },
            { id: "B", text: "$59$" },
            { id: "C", text: "$60$" },
            { id: "D", text: "$62$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** In a right triangle, the longest side is always the hypotenuse (opposite the right angle).\n\n**Step 1:** Identify the sides:\n• Hypotenuse ($c$) = 61 cm (longest side)\n• One leg ($a$) = 11 cm (shortest side)\n• Other leg ($b$) = ? (what we need to find)\n\n**Step 2:** Apply the Pythagorean theorem:\n$a^2 + b^2 = c^2$\n$11^2 + b^2 = 61^2$\n$121 + b^2 = 3721$\n$b^2 = 3721 - 121 = 3600$\n$b = \\sqrt{3600} = 60$ cm\n\n**Verification:** $11^2 + 60^2 = 121 + 3600 = 3721 = 61^2$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($40$): $11^2 + 40^2 = 121 + 1600 = 1721 \\neq 61^2$\n• Choice B ($59$): $11^2 + 59^2 = 121 + 3481 = 3602 \\neq 61^2$\n• Choice D ($62$): This would be longer than the hypotenuse, which is impossible\n\n**Note:** This is a Pythagorean triple: 11-60-61",
          skills: ["pythagorean-theorem", "right-triangles"]
        },

        // Question 4: Simple linear equation (3/2)x = 48
        {
          id: 4,
          type: "fill-in",
          difficulty: "easy",
          question: "If $\\frac{3}{2}x = 48$, what is the value of $x$?",
          correctAnswer: 32,
          explanation: "**The correct answer is 32.**\n\n**Method 1 - Multiply by reciprocal:**\n$\\frac{3}{2}x = 48$\n$x = 48 \\times \\frac{2}{3}$\n$x = \\frac{96}{3} = 32$\n\n**Method 2 - Cross multiply:**\n$\\frac{3}{2}x = 48$\n$3x = 48 \\times 2$\n$3x = 96$\n$x = 96 \\div 3 = 32$\n\n**Verification:** $\\frac{3}{2}(32) = \\frac{96}{2} = 48$ ✓\n\n**Calculator tip:** Enter $48 \\times \\frac{2}{3}$ or $48 \\times 2 \\div 3$ to get 32.",
          skills: ["solving-equations", "fractions"]
        },

        // Question 5: Mean of data set
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Data set A: $6.5, 12.1, 10.5, 4.75, 9.9, 7.25$\n\nWhat is equivalent to the mean of data set A?",
          choices: [
            { id: "A", text: "$8\\frac{1}{3}$" },
            { id: "B", text: "$8\\frac{1}{2}$" },
            { id: "C", text: "$8\\frac{2}{3}$" },
            { id: "D", text: "$10\\frac{1}{5}$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** The mean is the sum of all values divided by the number of values.\n\n**Step 1:** Find the sum:\n$6.5 + 12.1 + 10.5 + 4.75 + 9.9 + 7.25 = 51$\n\n**Step 2:** Count the values: 6 values\n\n**Step 3:** Calculate the mean:\nMean $= 51 \\div 6 = 8.5 = 8\\frac{1}{2}$\n\n**Why other choices are incorrect:**\n• Choice A ($8\\frac{1}{3} \\approx 8.33$): Would require sum $= 50$\n• Choice C ($8\\frac{2}{3} \\approx 8.67$): Would require sum $= 52$\n• Choice D ($10\\frac{1}{5} = 10.2$): Would require sum $= 61.2$\n\n**Calculator tip:** On Desmos, enter $(6.5+12.1+10.5+4.75+9.9+7.25)/6$ to get $8.5$.",
          skills: ["mean-median-mode", "statistics"]
        },

        // Question 6: Function evaluation h(x) = 6x + 2 - 3x + 5
        {
          id: 6,
          type: "fill-in",
          difficulty: "easy",
          question: "The function $h$ is defined above. What is the value of $x$ when $h(x) = 19$?",
          questionFormula: {
            equation: "$h(x) = 6x + 2 - 3x + 5$"
          },
          correctAnswer: 4,
          explanation: "**The correct answer is 4.**\n\n**Step 1:** Simplify $h(x)$ by combining like terms:\n$h(x) = 6x + 2 - 3x + 5$\n$h(x) = (6x - 3x) + (2 + 5)$\n$h(x) = 3x + 7$\n\n**Step 2:** Set $h(x) = 19$ and solve:\n$3x + 7 = 19$\n$3x = 19 - 7$\n$3x = 12$\n$x = 12 \\div 3 = 4$\n\n**Verification:** $h(4) = 3(4) + 7 = 12 + 7 = 19$ ✓\n\n**Key concept:** Always simplify the function first before substituting values.",
          skills: ["function-evaluation", "solving-equations"]
        },

        // Question 7: Word problem - ticket prices
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A movie theater sells child tickets for 8 dollars and adult tickets for 11 dollars. Which of the following represents the amount of money, in dollars, the theater makes if they sell $c$ child tickets and $a$ adult tickets?",
          choices: [
            { id: "A", text: "$9.50(c + a)$" },
            { id: "B", text: "$11c + 8a$" },
            { id: "C", text: "$8c + 11a$" },
            { id: "D", text: "$(8 + 11)(c + a)$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Total revenue = (price per item × quantity) for each type.\n\n**Step 1:** Revenue from child tickets:\nPrice × Quantity $= \\$8 \\times c = 8c$ dollars\n\n**Step 2:** Revenue from adult tickets:\nPrice × Quantity $= \\$11 \\times a = 11a$ dollars\n\n**Step 3:** Total revenue:\n$8c + 11a$\n\n**Why other choices are incorrect:**\n• Choice A: $9.50(c + a)$ uses an average price but doesn't account for different quantities of each type\n• Choice B: $11c + 8a$ has the prices swapped (child at \\$11, adult at \\$8)\n• Choice D: $(8 + 11)(c + a) = 19(c + a)$ incorrectly adds prices together\n\n**Key concept:** When items have different prices, multiply each price by its respective quantity and add the results.",
          skills: ["linear-expressions", "word-problems"]
        },

        // Question 8: Radical equation √(x² - 64) = 6
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is a solution to the given equation?\n\n$\\sqrt{x^2 - 64} = 6$",
          choices: [
            { id: "A", text: "$6$" },
            { id: "B", text: "$8$" },
            { id: "C", text: "$\\sqrt{70}$" },
            { id: "D", text: "$10$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Square both sides to eliminate the radical.\n\n**Step 1:** Square both sides:\n$(\\sqrt{x^2 - 64})^2 = 6^2$\n$x^2 - 64 = 36$\n\n**Step 2:** Solve for $x^2$:\n$x^2 = 36 + 64$\n$x^2 = 100$\n\n**Step 3:** Solve for $x$:\n$x = \\pm\\sqrt{100} = \\pm 10$\n\nSince 10 is among the choices, $x = 10$ is a solution.\n\n**Verification:** $\\sqrt{10^2 - 64} = \\sqrt{100 - 64} = \\sqrt{36} = 6$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($6$): $\\sqrt{36 - 64} = \\sqrt{-28}$ is not real\n• Choice B ($8$): $\\sqrt{64 - 64} = \\sqrt{0} = 0 \\neq 6$\n• Choice C ($\\sqrt{70}$): $\\sqrt{70 - 64} = \\sqrt{6} \\approx 2.45 \\neq 6$\n\n**Note:** $x = -10$ is also a valid solution, but only 10 appears in the choices.",
          skills: ["radical-equations", "solving-equations"]
        },

        // Question 9: Budget word problem
        {
          id: 9,
          type: "fill-in",
          difficulty: "medium",
          question: "Tiffany is buying pizzas and soda for a party. She has \\$75 to spend. Pizzas cost \\$8.25 each and soda costs \\$2.25 per bottle. If she buys 7 pizzas, what is the maximum number of bottles of soda she can purchase?",
          correctAnswer: 7,
          explanation: "**The correct answer is 7.**\n\n**Step 1:** Calculate the cost of 7 pizzas:\n$7 \\times \\$8.25 = \\$57.75$\n\n**Step 2:** Calculate remaining budget:\n$\\$75 - \\$57.75 = \\$17.25$\n\n**Step 3:** Calculate maximum bottles of soda:\n$\\$17.25 \\div \\$2.25 = 7.67$ bottles\n\n**Step 4:** Since she can only buy whole bottles, round down:\nMaximum = 7 bottles\n\n**Verification:** 7 pizzas (\\$57.75) + 7 sodas (\\$15.75) = \\$73.50 ≤ \\$75 ✓\nWith 8 sodas: \\$57.75 + \\$18.00 = \\$75.75 > \\$75 ✗\n\n**Key concept:** When dealing with budget constraints, always round down to stay within budget.",
          skills: ["word-problems", "linear-inequalities"]
        },

        // Question 10: Finding x-intercept from two points
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $f(3) = -1$ and $f(4) = -3$, what is the $x$-intercept for the line represented by the function $f(x)$?",
          choices: [
            { id: "A", text: "$-2$" },
            { id: "B", text: "$\\frac{2}{5}$" },
            { id: "C", text: "$2.5$" },
            { id: "D", text: "$5$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Find the equation of the line using the two points, then find where $y = 0$.\n\n**Step 1:** Find the slope using the two points $(3, -1)$ and $(4, -3)$:\n$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{-3 - (-1)}{4 - 3} = \\frac{-2}{1} = -2$\n\n**Step 2:** Find the equation using point-slope form:\n$y - y_1 = m(x - x_1)$\n$y - (-1) = -2(x - 3)$\n$y + 1 = -2x + 6$\n$y = -2x + 5$\n\n**Step 3:** Find $x$-intercept (set $y = 0$):\n$0 = -2x + 5$\n$2x = 5$\n$x = 2.5$\n\n**Verification:** $f(2.5) = -2(2.5) + 5 = -5 + 5 = 0$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($-2$): $f(-2) = -2(-2) + 5 = 9 \\neq 0$\n• Choice B ($\\frac{2}{5} = 0.4$): $f(0.4) = -2(0.4) + 5 = 4.2 \\neq 0$\n• Choice D ($5$): $f(5) = -2(5) + 5 = -5 \\neq 0$\n\n**Calculator tip:** On Desmos, plot the points and the line to verify.",
          skills: ["linear-functions", "x-intercept"]
        },

        // Question 11: Expanding expression 3(x+5)² - 2(x-5)² + 2x
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which expression is equivalent to $3(x + 5)^2 - 2(x - 5)^2 + 2x$?",
          choices: [
            { id: "A", text: "$x^2 - 2x - 25$" },
            { id: "B", text: "$x^2 + x + 125$" },
            { id: "C", text: "$x^2 + 52x + 25$" },
            { id: "D", text: "$3x^2 + 52x + 25$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Expand each squared binomial and combine like terms.\n\n**Step 1:** Expand $(x + 5)^2$:\n$(x + 5)^2 = x^2 + 10x + 25$\n\n**Step 2:** Expand $(x - 5)^2$:\n$(x - 5)^2 = x^2 - 10x + 25$\n\n**Step 3:** Multiply by coefficients:\n$3(x^2 + 10x + 25) = 3x^2 + 30x + 75$\n$2(x^2 - 10x + 25) = 2x^2 - 20x + 50$\n\n**Step 4:** Combine all terms:\n$3x^2 + 30x + 75 - (2x^2 - 20x + 50) + 2x$\n$= 3x^2 + 30x + 75 - 2x^2 + 20x - 50 + 2x$\n$= (3x^2 - 2x^2) + (30x + 20x + 2x) + (75 - 50)$\n$= x^2 + 52x + 25$\n\n**Why other choices are incorrect:**\n• Choice A: Sign errors in expansion\n• Choice B: Incorrect coefficient for $x$ term\n• Choice D: Incorrect $x^2$ coefficient (should be 1, not 3)\n\n**Key concept:** Use FOIL or the formula $(a \\pm b)^2 = a^2 \\pm 2ab + b^2$",
          skills: ["polynomial-expansion", "combining-like-terms"]
        },

        // Question 12: Ratio simplification 3x/4y = 18, find 9x/12y
        {
          id: 12,
          type: "fill-in",
          difficulty: "medium",
          question: "If $\\frac{3x}{4y}$ is equal to 18, what is the value of $\\frac{9x}{12y}$?",
          correctAnswer: 18,
          explanation: "**The correct answer is 18.**\n\n**Method 1 - Simplify the second expression:**\n$\\frac{9x}{12y} = \\frac{3 \\times 3x}{3 \\times 4y} = \\frac{3x}{4y}$\n\nSince $\\frac{3x}{4y} = 18$, therefore $\\frac{9x}{12y} = 18$\n\n**Method 2 - Direct verification:**\nNotice that $\\frac{9x}{12y}$ is the same as $\\frac{3x}{4y}$ multiplied by $\\frac{3}{3}$ (which equals 1):\n$\\frac{9x}{12y} = \\frac{3}{3} \\times \\frac{3x}{4y} = 1 \\times 18 = 18$\n\n**Key insight:** The expressions $\\frac{3x}{4y}$ and $\\frac{9x}{12y}$ are equivalent fractions because $\\frac{9x}{12y}$ reduces to $\\frac{3x}{4y}$ when you divide both numerator and denominator by 3.\n\n**Key concept:** Multiplying both numerator and denominator by the same number doesn't change the value of a fraction.",
          skills: ["ratios", "algebraic-expressions"]
        },

        // Question 13: Absolute value equation 3|x - 4| = 6
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

        // Question 14: Parabola equation from graph
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

        // Question 15: Exponential x-intercept x = 3^(y-1) + 5/3
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

        // Question 16: Survey with margin of error
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

        // Question 17: Percent change problem
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

        // Question 18: Arc length with degrees
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
          explanation: "**Choice B is correct.** Arc length $= \\frac{\\theta}{360°} \\times$ circumference.\n\n**Step 1:** Find the radius:\nDiameter $= 12$, so radius $r = 6$\n\n**Step 2:** Calculate circumference:\n$C = 2\\pi r = 2\\pi(6) = 12\\pi$\n\n**Step 3:** Calculate arc length:\nArc length $= \\frac{\\theta}{360°} \\times C$\nArc length $= \\frac{72°}{360°} \\times 12\\pi$\nArc length $= \\frac{1}{5} \\times 12\\pi$\nArc length $= 2.4\\pi$\n\n**Alternative formula:** Arc length $= \\frac{\\theta}{360°} \\times 2\\pi r = \\frac{72}{360} \\times 2\\pi(6) = 2.4\\pi$\n\n**Why other choices are incorrect:**\n• Choice A ($\\frac{\\pi}{6}$): Used incorrect formula or values\n• Choice C ($12\\pi$): This is the full circumference, not the arc\n• Choice D ($28.8\\pi$): Multiplied instead of using proportion\n\n**Key concept:** Arc length is a fraction of the circumference, where the fraction equals the central angle divided by $360°$.",
          skills: ["arc-length", "circles"]
        },

        // Question 19: Rearranging formula v = √(d/ab) for a
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

        // Question 20: Square inscribed in circle
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

        // Question 21: Triangle angles problem
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

        // Question 22: Perpendicular line y-intercept
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
        // Question 1: Simple linear equation 2(x + 4) = 18
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Given that $2(x + 4) = 18$, what is the value of $x + 6$?",
          choices: [
            { id: "A", text: "$-4$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$9$" },
            { id: "D", text: "$11$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** First solve for $x$, then calculate $x + 6$.\n\n**Step 1:** Solve for $x$:\n$2(x + 4) = 18$\n$x + 4 = 9$ (divide both sides by 2)\n$x = 5$ (subtract 4 from both sides)\n\n**Step 2:** Calculate $x + 6$:\n$x + 6 = 5 + 6 = 11$\n\n**Shortcut:** Notice that $x + 6 = (x + 4) + 2 = 9 + 2 = 11$\n\n**Why other choices are incorrect:**\n• Choice A ($-4$): Subtracted instead of adding\n• Choice B ($5$): This is the value of $x$, not $x + 6$\n• Choice C ($9$): This is the value of $x + 4$, not $x + 6$\n\n**Key concept:** Read carefully what the question asks for. It asks for $x + 6$, not just $x$.",
          skills: ["solving-equations"]
        },

        // Question 2: Inequality solution 3x + 2 < -5(x + 6)
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following values is a solution to the given inequality?\n\n$3x + 2 < -5(x + 6)$",
          choices: [
            { id: "A", text: "$-5$" },
            { id: "B", text: "$-4$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$4$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Solve the inequality and check which value satisfies it.\n\n**Step 1:** Distribute on the right side:\n$3x + 2 < -5x - 30$\n\n**Step 2:** Add $5x$ to both sides:\n$8x + 2 < -30$\n\n**Step 3:** Subtract 2 from both sides:\n$8x < -32$\n\n**Step 4:** Divide by 8:\n$x < -4$\n\n**Step 5:** Check which answer choice is less than $-4$:\n• $-5 < -4$ ✓\n• $-4$ is not less than $-4$ ✗\n• $3 > -4$ ✗\n• $4 > -4$ ✗\n\nOnly $-5$ satisfies $x < -4$.\n\n**Verification:** $3(-5) + 2 = -13$; $-5(-5 + 6) = -5(1) = -5$\n$-13 < -5$ ✓\n\n**Why other choices are incorrect:**\n• Choices B, C, D: All are $\\geq -4$, which doesn't satisfy $x < -4$",
          skills: ["linear-inequalities", "solving-inequalities"]
        },

        // Question 3: Bar graph - mean calculation
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The bar graph shows how many hours the air conditioner was on from Monday to Friday in a given week. What is the mean number of hours the air conditioner was on during this period?",
          diagram: {
            type: "barChart",
            params: {
              title: "Hours Air Conditioner Was Active",
              data: [
                { label: "Mon", value: 10 },
                { label: "Tue", value: 12 },
                { label: "Wed", value: 15 },
                { label: "Thu", value: 18 },
                { label: "Fri", value: 15 }
              ],
              yAxisLabel: "Hours",
              yMax: 20,
              yStep: 2
            }
          },
          choices: [
            { id: "A", text: "8" },
            { id: "B", text: "10" },
            { id: "C", text: "12" },
            { id: "D", text: "14" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Calculate the mean by adding all values and dividing by the number of days.\n\n**Step 1:** Read values from the bar graph:\n• Monday: 10 hours\n• Tuesday: 12 hours\n• Wednesday: 15 hours\n• Thursday: 18 hours\n• Friday: 15 hours\n\n**Step 2:** Calculate the sum:\n10 + 12 + 15 + 18 + 15 = 70 hours\n\n**Step 3:** Calculate the mean:\nMean = 70 ÷ 5 = **14 hours**\n\n**Why other choices are incorrect:**\n• Choice A (8): Too low, doesn't match any reasonable calculation\n• Choice B (10): This is just Monday's value\n• Choice C (12): This is Tuesday's value or an incorrect average\n\n**Key concept:** Mean = Sum of all values ÷ Number of values",
          skills: ["mean-median-mode", "data-interpretation"]
        },

        // Question 4: Expanding -2(x + 3)² + 6 to ax² + bx + c
        {
          id: 4,
          type: "fill-in",
          difficulty: "medium",
          question: "The expression $-2(x + 3)^2 + 6$ is equivalent to $ax^2 + bx + c$, where $a < 0$ and $b < 0$. What is the value of $c$?",
          correctAnswer: -12,
          explanation: "**The correct answer is $-12$.**\n\n**Step 1:** Expand $(x + 3)^2$:\n$(x + 3)^2 = x^2 + 6x + 9$\n\n**Step 2:** Multiply by $-2$:\n$-2(x^2 + 6x + 9) = -2x^2 - 12x - 18$\n\n**Step 3:** Add 6:\n$-2x^2 - 12x - 18 + 6 = -2x^2 - 12x - 12$\n\n**Step 4:** Identify coefficients:\n$a = -2$ (satisfies $a < 0$ ✓)\n$b = -12$ (satisfies $b < 0$ ✓)\n$c = -12$\n\n**Verification:** $-2(x + 3)^2 + 6$ at $x = 0$:\n$-2(0 + 3)^2 + 6 = -2(9) + 6 = -18 + 6 = -12 = c$ ✓\n\n**Key concept:** Expand the squared term first, then distribute the coefficient, then combine constants.",
          skills: ["polynomial-expansion", "vertex-form"]
        },

        // Question 5: Perpendicular line slope
        {
          id: 5,
          type: "fill-in",
          difficulty: "medium",
          question: "What is the value of the slope of a line perpendicular to the line $5x - 6y + 30 = 0$?",
          correctAnswer: "-6/5",
          acceptedAnswers: ["-6/5", -1.2, "-1.2"],
          explanation: "**The correct answer is $-\\frac{6}{5}$ (or $-1.2$).**\n\n**Step 1:** Convert to slope-intercept form:\n$5x - 6y + 30 = 0$\n$-6y = -5x - 30$\n$y = \\frac{5}{6}x + 5$\n\n**Step 2:** Identify the slope of the original line:\nSlope $= \\frac{5}{6}$\n\n**Step 3:** Find the perpendicular slope:\nPerpendicular slopes are negative reciprocals.\nPerpendicular slope $= -\\frac{1}{\\frac{5}{6}} = -\\frac{6}{5}$ (or $-1.2$)\n\n**Verification:** Check that the slopes are negative reciprocals:\n$\\frac{5}{6} \\times \\left(-\\frac{6}{5}\\right) = -\\frac{30}{30} = -1$ ✓\n\n**Key concept:** If two lines are perpendicular, the product of their slopes equals $-1$.\n$m_1 \\times m_2 = -1$, so $m_2 = -\\frac{1}{m_1}$",
          skills: ["perpendicular-lines", "slope"]
        },

        // Question 6: Quadratic sum of roots 3x² + 9x - 27 = 0
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $m$ and $n$ are solutions to the given equation, what is the value of $m + n$?",
          questionFormula: {
            equation: "$3x^2 + 9x - 27 = 0$"
          },
          choices: [
            { id: "A", text: "$-9$" },
            { id: "B", text: "$-3$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$9$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Use Vieta's formulas for the sum of roots.\n\n**Method 1 - Vieta's formulas:**\nFor $ax^2 + bx + c = 0$, the sum of roots $= \\frac{-b}{a}$\n\nHere: $a = 3$, $b = 9$, $c = -27$\nSum of roots $= m + n = \\frac{-9}{3} = -3$\n\n**Method 2 - Solve the equation:**\n$3x^2 + 9x - 27 = 0$\nDivide by 3: $x^2 + 3x - 9 = 0$\nUsing quadratic formula: $x = \\frac{-3 \\pm \\sqrt{9 + 36}}{2} = \\frac{-3 \\pm \\sqrt{45}}{2}$\n$m = \\frac{-3 + \\sqrt{45}}{2}$, $n = \\frac{-3 - \\sqrt{45}}{2}$\n$m + n = \\frac{-3 + \\sqrt{45} - 3 - \\sqrt{45}}{2} = \\frac{-6}{2} = -3$\n\n**Why other choices are incorrect:**\n• Choice A ($-9$): This is the value of $b$, not $\\frac{-b}{a}$\n• Choice C ($3$): Sign error\n• Choice D ($9$): Used wrong sign\n\n**Key concept:** Sum of roots $= \\frac{-b}{a}$; Product of roots $= \\frac{c}{a}$",
          skills: ["quadratic-equations", "sum-of-roots"]
        },

        // Question 7: Circle equation - point on circle
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The graph of $(x - 3)^2 + y^2 + 8y = 84$ is a circle in the $xy$-plane. Which of the following coordinates lie on the circle?",
          choices: [
            { id: "A", text: "$(1, 7)$" },
            { id: "B", text: "$(-2, 5)$" },
            { id: "C", text: "$(-3, 4)$" },
            { id: "D", text: "$(3, -6)$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Complete the square to find the standard form, then check each point.\n\n**Step 1:** Complete the square for $y$:\n$(x - 3)^2 + (y^2 + 8y) = 84$\n$(x - 3)^2 + (y^2 + 8y + 16) = 84 + 16$\n$(x - 3)^2 + (y + 4)^2 = 100$\n\n**Step 2:** Identify center and radius:\nCenter: $(3, -4)$\nRadius: $\\sqrt{100} = 10$\n\n**Step 3:** Check each point by substituting into the equation:\n\n• Choice A $(1, 7)$: $(1-3)^2 + (7+4)^2 = 4 + 121 = 125 \\neq 100$ ✗\n• Choice B $(-2, 5)$: $(-2-3)^2 + (5+4)^2 = 25 + 81 = 106 \\neq 100$ ✗\n• Choice C $(-3, 4)$: $(-3-3)^2 + (4+4)^2 = 36 + 64 = 100$ ✓\n• Choice D $(3, -6)$: $(3-3)^2 + (-6+4)^2 = 0 + 4 = 4 \\neq 100$ ✗\n\n**Why other choices are incorrect:**\n• They don't satisfy the circle equation $(x-3)^2 + (y+4)^2 = 100$",
          skills: ["circle-equations", "completing-the-square"]
        },

        // Question 8: Percent remaining - stockpile problem
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "At the start of the winter, the US stockpile of corn was 5 billion bushels. Two months later, $p\\%$ of the stockpile had been used. Which expression best represents the number, in billions, of bushels of corn remaining in the US stockpile at the end of those two months?",
          choices: [
            { id: "A", text: "$2(5)\\left(\\frac{100 - p}{100}\\right)$" },
            { id: "B", text: "$5\\left(\\frac{100 - p}{100}\\right)$" },
            { id: "C", text: "$\\frac{p}{100}$" },
            { id: "D", text: "$2(5)(100 - p)$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** If $p\\%$ is used, then $(100 - p)\\%$ remains.\n\n**Step 1:** Identify the starting amount:\nInitial stockpile = 5 billion bushels\n\n**Step 2:** Determine the percentage remaining:\nIf $p\\%$ was used, then $(100 - p)\\%$ remains.\n\n**Step 3:** Calculate the remaining amount:\nRemaining = Initial × (percent remaining as decimal)\nRemaining $= 5 \\times \\frac{100 - p}{100}$\n\nThis matches $5\\left(\\frac{100 - p}{100}\\right)$\n\n**Example verification:** If $p = 20$ (20% used):\nRemaining $= 5 \\times \\frac{100 - 20}{100} = 5 \\times 0.80 = 4$ billion bushels ✓\n\n**Why other choices are incorrect:**\n• Choice A: The factor of 2 is unexplained and incorrect\n• Choice C: This gives the decimal form of $p\\%$, not the remaining amount\n• Choice D: Not divided by 100, so units would be wrong\n\n**Key concept:** Remaining amount = Original × (1 - rate used) = Original × $\\frac{100-p}{100}$",
          skills: ["percentages", "algebraic-expressions"]
        },

        // Question 9: Exponential growth interpretation
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The equation $P(y) = 37(1.1)^y$ gives the estimated annual profit, in thousands of dollars, at a pottery studio, where $y$ is the number of years since the studio moved to a new location. Which of the following is the best interpretation of the number 37 in this context?",
          choices: [
            { id: "A", text: "The estimated annual profit, in thousands of dollars, when the studio moved to the new location" },
            { id: "B", text: "The increase in the estimated annual profit, in thousands of dollars, each year" },
            { id: "C", text: "The number of years since the studio moved to the new location" },
            { id: "D", text: "The percent increase in the estimated annual profit each year" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** In exponential functions of the form $f(x) = a(b)^x$, the value '$a$' is the initial value when $x = 0$.\n\n**Analysis:**\n$P(y) = 37(1.1)^y$\n\nWhen $y = 0$ (the year the studio moved):\n$P(0) = 37(1.1)^0 = 37(1) = 37$\n\nSo 37 represents the profit (in thousands of dollars) at the time of the move.\n\n**Why other choices are incorrect:**\n• Choice B: The increase each year is represented by the growth factor $1.1$, not 37. The profit grows by 10% each year, not \\$37,000.\n• Choice C: The variable $y$ represents years since the move, not 37.\n• Choice D: The percent increase is 10% (from $1.1 = 1 + 0.10$), not 37%.\n\n**Key concept:** In $f(x) = a(b)^x$:\n• $a$ = initial value (when $x = 0$)\n• $b$ = growth/decay factor ($1 +$ rate)\n• $b - 1$ = percent change rate",
          skills: ["exponential-functions", "function-interpretation"]
        },

        // Question 10: Isosceles triangle angles
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Triangle $JKL$ is an isosceles triangle. The measure of angle $J$ is $30°$. If $\\overline{JL}$ is the longest side of the triangle, what is the measure of angle $K$?",
          choices: [
            { id: "A", text: "$30$" },
            { id: "B", text: "$75$" },
            { id: "C", text: "$120$" },
            { id: "D", text: "$150$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Use properties of isosceles triangles and the triangle angle sum.\n\n**Step 1:** Understand the relationship:\n• In any triangle, the longest side is opposite the largest angle.\n• $\\overline{JL}$ is the longest side, so angle $K$ (opposite to $\\overline{JL}$) is the largest angle.\n\n**Step 2:** Determine which angles are equal:\n• Since $\\overline{JL}$ is the longest side and angle $J = 30°$, angle $J$ is one of the base angles.\n• In an isosceles triangle with $\\overline{JL}$ as the unique longest side, the two equal sides must be $\\overline{JK}$ and $\\overline{KL}$.\n• This means angles $J$ and $L$ are equal (base angles).\n• So angle $L = 30°$.\n\n**Step 3:** Calculate angle $K$:\nAngle sum $= 180°$\nAngle $K = 180° - 30° - 30° = 120°$\n\n**Verification:** $120° > 30°$, so $K$ is indeed the largest angle, confirming $\\overline{JL}$ is the longest side. ✓\n\n**Why other choices are incorrect:**\n• Choice A ($30°$): Would make all angles equal, but then $\\overline{JL}$ wouldn't be the longest side\n• Choice B ($75°$): Would make the triangle have angles $30°, 75°, 75°$, but then $K$ wouldn't be the largest\n• Choice D ($150°$): Would make the sum exceed $180°$",
          skills: ["triangle-angles", "isosceles-triangles"]
        },

        // Question 11: Function evaluation f(2x) = 9x - 7
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $f(2x) = 9x - 7$, what is the value of $f(6)$?",
          choices: [
            { id: "A", text: "$11$" },
            { id: "B", text: "$20$" },
            { id: "C", text: "$47$" },
            { id: "D", text: "$101$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Find the value of $x$ that makes $2x = 6$, then evaluate.\n\n**Step 1:** Determine what value of $x$ gives $f(6)$:\nWe need $2x = 6$, so $x = 3$.\n\n**Step 2:** Substitute $x = 3$ into $f(2x) = 9x - 7$:\n$f(2 \\times 3) = 9(3) - 7$\n$f(6) = 27 - 7 = 20$\n\n**Alternative approach - Find $f(x)$:**\nIf $f(2x) = 9x - 7$, let $u = 2x$, so $x = \\frac{u}{2}$\n$f(u) = 9\\left(\\frac{u}{2}\\right) - 7 = \\frac{9u}{2} - 7$\n$f(6) = \\frac{9 \\times 6}{2} - 7 = \\frac{54}{2} - 7 = 27 - 7 = 20$\n\n**Why other choices are incorrect:**\n• Choice A ($11$): Likely from using $x = 2$ instead of $x = 3$\n• Choice C ($47$): Likely from using $f(6) = 9(6) - 7 = 47$, but this would be $f(12)$, not $f(6)$\n• Choice D ($101$): Calculation error",
          skills: ["function-evaluation", "algebraic-manipulation"]
        },

        // Question 12: System with no solution
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "How many solutions does the given system of equations have?",
          questionFormula: {
            lines: [
              "$3x - 4y = 16$",
              "$-6x = -8y + 32$"
            ]
          },
          choices: [
            { id: "A", text: "Exactly one" },
            { id: "B", text: "Exactly two" },
            { id: "C", text: "Infinitely many" },
            { id: "D", text: "Zero" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Transform both equations to the same form and compare.\n\n**Step 1:** Rewrite the second equation in standard form:\n$-6x = -8y + 32$\n$-6x + 8y = 32$\n$6x - 8y = -32$ (multiply by $-1$)\n\n**Step 2:** Simplify by dividing by 2:\n$3x - 4y = -16$\n\n**Step 3:** Compare with the first equation:\n• Equation 1: $3x - 4y = 16$\n• Equation 2: $3x - 4y = -16$\n\n**Analysis:**\nBoth equations have the same left side ($3x - 4y$) but different right sides ($16 \\neq -16$).\n\nThis means the lines are parallel (same slope) but different (different $y$-intercepts).\n\nParallel lines never intersect, so there are **zero solutions**.\n\n**Why other choices are incorrect:**\n• Choice A: One solution would require intersecting lines\n• Choice B: Linear systems can have 0, 1, or infinitely many solutions—never exactly 2\n• Choice C: Infinitely many would require the equations to be identical",
          skills: ["systems-of-equations", "parallel-lines"]
        },

        // Question 13: System of equations - find xy
        {
          id: 13,
          type: "fill-in",
          difficulty: "hard",
          question: "If $\\frac{5}{x} = \\frac{2}{y}$ and $\\frac{4}{x} - \\frac{2}{y} = -\\frac{1}{5}$, what is the value of $xy$?",
          correctAnswer: 10,
          explanation: "**The correct answer is 10.**\n\n**Step 1:** From the first equation, express the relationship:\n$\\frac{5}{x} = \\frac{2}{y}$\nCross multiply: $5y = 2x$\nSo $y = \\frac{2x}{5}$\n\n**Step 2:** Substitute into the second equation:\n$\\frac{4}{x} - \\frac{2}{y} = -\\frac{1}{5}$\n$\\frac{4}{x} - \\frac{2}{\\frac{2x}{5}} = -\\frac{1}{5}$\n$\\frac{4}{x} - \\frac{5}{x} = -\\frac{1}{5}$\n$-\\frac{1}{x} = -\\frac{1}{5}$\n$x = 5$\n\n**Step 3:** Find $y$:\n$y = \\frac{2x}{5} = \\frac{2(5)}{5} = 2$\n\n**Step 4:** Calculate $xy$:\n$xy = 5 \\times 2 = $ **10**\n\n**Verification:**\n• Check equation 1: $\\frac{5}{5} = 1$; $\\frac{2}{2} = 1$ ✓\n• Check equation 2: $\\frac{4}{5} - \\frac{2}{2} = \\frac{4}{5} - 1 = \\frac{4}{5} - \\frac{5}{5} = -\\frac{1}{5}$ ✓\n\n**Key concept:** When solving systems with fractions, find relationships between variables and substitute.",
          skills: ["systems-of-equations", "algebraic-manipulation"]
        },

        // Question 14: Radicals and exponents
        {
          id: 14,
          type: "fill-in",
          difficulty: "hard",
          question: "In the equation $\\frac{1}{2}\\sqrt{a} = 2\\sqrt[3]{b}$, both $a$ and $b$ are positive real numbers. If $a = 8$ and the equation is written in the form $a^x = b$, what is the value of $x$?",
          correctAnswer: "-1/2",
          acceptedAnswers: ["-1/2", -0.5, "-0.5"],
          explanation: "**The correct answer is $-\\frac{1}{2}$ (or $-0.5$).**\n\n**Step 1:** Substitute $a = 8$ and solve for $b$:\n$\\frac{1}{2}\\sqrt{8} = 2\\sqrt[3]{b}$\n$\\frac{1}{2}(2\\sqrt{2}) = 2\\sqrt[3]{b}$\n$\\sqrt{2} = 2\\sqrt[3]{b}$\n$\\sqrt[3]{b} = \\frac{\\sqrt{2}}{2} = 2^{-1/2}$\n$b = (2^{-1/2})^3 = 2^{-3/2}$\n\n**Step 2:** Express in the form $a^x = b$:\n$a = 8 = 2^3$\n$b = 2^{-3/2}$\n\nSo: $(2^3)^x = 2^{-3/2}$\n$2^{3x} = 2^{-3/2}$\n\n**Step 3:** Equate exponents:\n$3x = -\\frac{3}{2}$\n$x = -\\frac{3}{2} \\div 3 = $ **$-\\frac{1}{2}$**\n\n**Verification:** $8^{-1/2} = \\frac{1}{\\sqrt{8}} = \\frac{1}{2\\sqrt{2}} = \\frac{\\sqrt{2}}{4}$\nAnd $b = 2^{-3/2} = \\frac{1}{2^{3/2}} = \\frac{1}{2\\sqrt{2}} = \\frac{\\sqrt{2}}{4}$ ✓\n\n**Key concept:** Convert roots to fractional exponents: $\\sqrt{a} = a^{1/2}$, $\\sqrt[3]{a} = a^{1/3}$",
          skills: ["exponents", "radicals"]
        },

        // Question 15: Exponential function through points
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $g$ is defined by $g(x) = a^x - b$, where $a$ and $b$ are constants. In the $xy$-plane, the graph of $g(x)$ passes through the points $(0, -6)$ and $(1, 2)$. What is the value of $a$?",
          choices: [
            { id: "A", text: "$6$" },
            { id: "B", text: "$7$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$9$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Use the two points to create a system of equations.\n\n**Step 1:** Use point $(0, -6)$:\n$g(0) = a^0 - b = 1 - b = -6$\n$b = 7$\n\n**Step 2:** Use point $(1, 2)$:\n$g(1) = a^1 - b = a - 7 = 2$\n$a = 2 + 7 = $ **$9$**\n\n**Verification:**\n• $g(0) = 9^0 - 7 = 1 - 7 = -6$ ✓\n• $g(1) = 9^1 - 7 = 9 - 7 = 2$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($a = 6$): $g(1) = 6 - 7 = -1 \\neq 2$\n• Choice B ($a = 7$): $g(1) = 7 - 7 = 0 \\neq 2$\n• Choice C ($a = 8$): $g(1) = 8 - 7 = 1 \\neq 2$\n\n**Key concept:** For exponential functions $g(x) = a^x - b$, the point $(0, y)$ gives $y = 1 - b$, allowing you to find $b$ first.",
          skills: ["exponential-functions", "solving-equations"]
        },

        // Question 16: Quadratic solution form
        {
          id: 16,
          type: "fill-in",
          difficulty: "hard",
          question: "If $1 + \\frac{a\\sqrt{2}}{2}$ is a solution to the equation $2x^2 - 4x - 7 = 0$ and $a > 0$, what is the value of $a$?",
          correctAnswer: 3,
          explanation: "**The correct answer is 3.**\n\n**Step 1:** Apply the quadratic formula to $2x^2 - 4x - 7 = 0$:\n$x = \\frac{4 \\pm \\sqrt{16 + 56}}{4}$\n$x = \\frac{4 \\pm \\sqrt{72}}{4}$\n\n**Step 2:** Simplify $\\sqrt{72}$:\n$\\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}$\n\n**Step 3:** Write the solutions:\n$x = \\frac{4 \\pm 6\\sqrt{2}}{4} = 1 \\pm \\frac{6\\sqrt{2}}{4} = 1 \\pm \\frac{3\\sqrt{2}}{2}$\n\n**Step 4:** Match with the given form:\nGiven: $1 + \\frac{a\\sqrt{2}}{2}$\nFound: $1 + \\frac{3\\sqrt{2}}{2}$\n\nComparing: $\\frac{a\\sqrt{2}}{2} = \\frac{3\\sqrt{2}}{2}$\nTherefore: $a = $ **$3$**\n\n**Verification:** Substitute $x = 1 + \\frac{3\\sqrt{2}}{2}$ back:\n$2\\left(1 + \\frac{3\\sqrt{2}}{2}\\right)^2 - 4\\left(1 + \\frac{3\\sqrt{2}}{2}\\right) - 7 = 0$ ✓\n\n**Key concept:** The quadratic formula gives $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. Simplify the radical to match the given form.",
          skills: ["quadratic-formula", "solving-equations"]
        },

        // Question 17: Function transformation
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $f(x) = 2(x - 3)^2 + 8$ is transformed into $g(x) = 2(x - 5)^2 + 5$, which of the following describes the transformation?",
          choices: [
            { id: "A", text: "The $x$-coordinate moves to the right 2 units and the $y$-coordinate moves 3 units down." },
            { id: "B", text: "The $x$-coordinate moves to the left 2 units and the $y$-coordinate moves 3 units down." },
            { id: "C", text: "The $x$-coordinate moves to the right 2 units and the $y$-coordinate moves 3 units up." },
            { id: "D", text: "The $x$-coordinate moves to the left 2 units and the $y$-coordinate moves 3 units up." }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Compare the vertices of the two functions.\n\n**Step 1:** Identify the vertex of $f(x) = 2(x - 3)^2 + 8$:\nVertex form: $a(x - h)^2 + k$ has vertex at $(h, k)$\nVertex of $f$: $(3, 8)$\n\n**Step 2:** Identify the vertex of $g(x) = 2(x - 5)^2 + 5$:\nVertex of $g$: $(5, 5)$\n\n**Step 3:** Calculate the transformation:\n• Horizontal: $5 - 3 = 2$ (moved 2 units to the right)\n• Vertical: $5 - 8 = -3$ (moved 3 units down)\n\n**Transformation:** Right 2 units, down 3 units.\n\n**Why other choices are incorrect:**\n• Choice B: Wrong horizontal direction (left instead of right)\n• Choice C: Wrong vertical direction (up instead of down)\n• Choice D: Both directions are wrong\n\n**Key concept:** To find the transformation, compare the vertices. Moving from $(h_1, k_1)$ to $(h_2, k_2)$:\n• Horizontal shift: $h_2 - h_1$ (positive = right)\n• Vertical shift: $k_2 - k_1$ (positive = up)",
          skills: ["function-transformations", "quadratic-functions"]
        },

        // Question 18: Unit conversion - density
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A sample of dried yellow pine has a density of $420$ kilograms per cubic meter. To the nearest tenth, what is the density, in pounds per cubic foot, of this sample? (Use $1$ kilogram $= 2.2$ pounds and $1$ meter $= 3.3$ feet)",
          choices: [
            { id: "A", text: "$5.3$" },
            { id: "B", text: "$25.7$" },
            { id: "C", text: "$127.3$" },
            { id: "D", text: "$280.0$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Convert units using dimensional analysis.\n\n**Step 1:** Start with $420$ kg/m³ and convert kilograms to pounds:\n$420$ kg/m³ $\\times (2.2$ lb/kg$) = 924$ lb/m³\n\n**Step 2:** Convert cubic meters to cubic feet:\n$1$ m $= 3.3$ ft\n$1$ m³ $= (3.3)^3$ ft³ $= 35.937$ ft³\n\n**Step 3:** Complete the conversion:\n$924$ lb/m³ $\\times (1$ m³$/35.937$ ft³$) = 924/35.937$ lb/ft³ $\\approx$ **$25.7$** lb/ft³\n\n**Detailed calculation:**\n$420 \\times 2.2 \\div (3.3)^3 = 924 \\div 35.937 = 25.71...$\nRounded to nearest tenth: **$25.7$**\n\n**Why other choices are incorrect:**\n• Choice A ($5.3$): Divided by $3.3$ only once instead of cubing\n• Choice C ($127.3$): Used $3.3$ instead of $3.3^3$\n• Choice D ($280.0$): Multiplied by $3.3$ instead of dividing by $3.3^3$",
          skills: ["unit-conversion", "dimensional-analysis"]
        },

        // Question 19: Arc length with radians
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In the given circle, the radius is $6$ centimeters and $\\angle AOB$ measures $\\frac{7}{12}\\pi$ radians. What is the value of the arc length $\\overline{AB}$, in centimeters?",
          diagram: {
            type: "circleWithSector",
            params: {
              centralAngle: 105,
              labelCenter: "O",
              labelPoint1: "A",
              labelPoint2: "B",
              showAngleArc: true
            }
          },
          choices: [
            { id: "A", text: "$\\frac{7}{2}\\pi$" },
            { id: "B", text: "$\\frac{21}{2}\\pi$" },
            { id: "C", text: "$12\\pi$" },
            { id: "D", text: "$36\\pi$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Use the arc length formula with radians.\n\n**Formula:** Arc length $= r\\theta$ (when $\\theta$ is in radians)\n\n**Step 1:** Identify the values:\n• Radius $r = 6$ cm\n• Central angle $\\theta = \\frac{7}{12}\\pi$ radians\n\n**Step 2:** Calculate arc length:\nArc length $= r\\theta = 6 \\times \\frac{7}{12}\\pi = \\frac{42}{12}\\pi = $ **$\\frac{7}{2}\\pi$** cm\n\n**Alternative calculation:**\n$6 \\times \\frac{7}{12} = \\frac{42}{12} = \\frac{7}{2}$\nSo arc length $= \\frac{7}{2}\\pi$ cm\n\n**Why other choices are incorrect:**\n• Choice B ($\\frac{21}{2}\\pi$): Multiplied incorrectly\n• Choice C ($12\\pi$): This is the full circumference ($2\\pi r = 12\\pi$)\n• Choice D ($36\\pi$): Used diameter squared or similar error\n\n**Key concept:** When angle is in radians, arc length $=$ radius $\\times$ angle. This is one of the simplest formulas in circle geometry!",
          skills: ["arc-length", "radians"]
        },

        // Question 20: Right triangle with altitude
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In the image shown, right triangle $LMN$ has a right angle at $M$. Altitude $\\overline{PM}$ is shown and $\\angle NPM$ is a right angle. $LP = 13$ and $PM = 10$. Which of the following are closest to the length of $NP$?",
          diagram: {
            type: "rightTriangleWithAltitude",
            params: {
              vertexLabels: ["L", "M", "N", "P"],
              rightAngleAt: "M",
              altitudeFrom: "P",
              sideLengths: { LP: 13, PM: 10 }
            }
          },
          choices: [
            { id: "A", text: "$3.0$" },
            { id: "B", text: "$6.2$" },
            { id: "C", text: "$7.1$" },
            { id: "D", text: "$7.7$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Use the geometric mean relationship in right triangles.\n\n**Key theorem:** When an altitude is drawn from the right angle to the hypotenuse, it creates similar triangles with the relationship:\n\n$PM^2 = LP \\times NP$ (altitude is the geometric mean of the two segments of the hypotenuse)\n\n**Step 1:** Apply the relationship:\n$10^2 = 13 \\times NP$\n$100 = 13 \\times NP$\n$NP = \\frac{100}{13} \\approx $ **$7.69 \\approx 7.7$**\n\n**Verification using similar triangles:**\n$\\triangle LPM \\sim \\triangle MPN$\n$\\frac{LP}{PM} = \\frac{PM}{NP}$\n$\\frac{13}{10} = \\frac{10}{NP}$\n$NP = \\frac{100}{13} \\approx 7.7$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($3.0$): Too small\n• Choice B ($6.2$): Calculation error\n• Choice C ($7.1$): Close but not as accurate as $7.7$\n\n**Key concept:** The altitude to the hypotenuse of a right triangle is the geometric mean of the two segments it creates.",
          skills: ["similar-triangles", "geometric-mean"]
        },

        // Question 21: Quadratic with table of zeros
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "For the given function $f$, $f(x) = 24x^2 + bx + c$, where $b$ and $c$ are constants, and the graph of $y = f(x)$ in the $xy$-plane passes through the points in the table below. What is the value of $b$?",
          questionTable: {
            headers: ["$x$", "$f(x)$"],
            rows: [
              ["$-\\frac{15}{8}$", "$0$"],
              ["$0$", "$c$"],
              ["$\\frac{11}{4}$", "$0$"]
            ]
          },
          correctAnswer: -21,
          explanation: "**The correct answer is $-21$.**\n\n**Method 1 - Using Vieta's formulas:**\nThe zeros are $x = -\\frac{15}{8}$ and $x = \\frac{11}{4}$.\n\nFor $f(x) = 24x^2 + bx + c$:\n• Sum of zeros $= -\\frac{b}{a} = -\\frac{b}{24}$\n• Sum of zeros $= -\\frac{15}{8} + \\frac{11}{4} = -\\frac{15}{8} + \\frac{22}{8} = \\frac{7}{8}$\n\nSo: $-\\frac{b}{24} = \\frac{7}{8}$\n$-b = 24 \\times \\frac{7}{8} = 21$\n$b = $ **$-21$**\n\n**Method 2 - Factored form:**\nWith zeros at $-\\frac{15}{8}$ and $\\frac{11}{4}$:\n$f(x) = 24\\left(x + \\frac{15}{8}\\right)\\left(x - \\frac{11}{4}\\right)$\n\nExpand:\n$= 24\\left(x^2 - \\frac{11x}{4} + \\frac{15x}{8} - \\frac{165}{32}\\right)$\n$= 24x^2 + 24\\left(-\\frac{11}{4} + \\frac{15}{8}\\right)x + ...$\n$= 24x^2 + 24\\left(-\\frac{22}{8} + \\frac{15}{8}\\right)x + ...$\n$= 24x^2 + 24\\left(-\\frac{7}{8}\\right)x + ...$\n$= 24x^2 - 21x + ...$\n\nSo $b = $ **$-21$**\n\n**Key concept:** Sum of roots $= -\\frac{b}{a}$; Product of roots $= \\frac{c}{a}$",
          skills: ["quadratic-functions", "sum-of-roots"]
        },

        // Question 22: Polynomial factors from table
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Select values for the polynomial function $g(x)$ are shown in the table. Based on the values in the table, which of the following must be factors of $g(x)$?",
          questionTable: {
            headers: ["$x$", "$g(x)$"],
            rows: [
              ["$-7$", "$10$"],
              ["$-4$", "$0$"],
              ["$0$", "$5$"],
              ["$3$", "$1$"],
              ["$5$", "$-6$"],
              ["$11$", "$0$"]
            ]
          },
          choices: [
            { id: "A", text: "$(x - 5)$" },
            { id: "B", text: "$(x + 5)$" },
            { id: "C", text: "$(x - 4)$ and $(x + 11)$" },
            { id: "D", text: "$(x + 4)$ and $(x - 11)$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Factors correspond to zeros of the polynomial.\n\n**Key principle:** If $g(a) = 0$, then $(x - a)$ is a factor of $g(x)$.\n\n**Step 1:** Identify zeros from the table:\n• $g(-4) = 0$ → $x = -4$ is a zero\n• $g(11) = 0$ → $x = 11$ is a zero\n\n**Step 2:** Convert zeros to factors:\n• Zero at $x = -4$ → Factor: $(x - (-4)) = (x + 4)$\n• Zero at $x = 11$ → Factor: $(x - 11)$\n\nTherefore, **$(x + 4)$ and $(x - 11)$** are factors.\n\n**Why other choices are incorrect:**\n• Choice A: $g(5) = -6 \\neq 0$, so $(x - 5)$ is not a factor\n• Choice B: We'd need $g(-5) = 0$, but $-5$ is not in the table with value $0$\n• Choice C: $(x - 4)$ would require $g(4) = 0$ and $(x + 11)$ would require $g(-11) = 0$, neither of which is in the table\n\n**Key concept:** A polynomial has factor $(x - a)$ if and only if the polynomial equals $0$ when $x = a$.",
          skills: ["polynomial-factors", "zeros-of-functions"]
        }
      ]
    }
  ]
};
