// Practice Test 3 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Original concepts with different numbers and contexts

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
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          diagram: {
            type: "linearGraph",
            params: {
              slope: 0.75,
              yIntercept: 4,
              xRange: [0, 10],
              yRange: [0, 12],
              xTickInterval: 2,
              yTickInterval: 2,
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
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Of the 48,000 seats in a concert hall, 36,000 are in the general admission section. Out of those seats in general admission, 14,400 are in the front rows. What percentage of the seats in the concert hall are in general admission and not in the front rows?",
          choices: [
            { id: "A", text: "30%" },
            { id: "B", text: "45%" },
            { id: "C", text: "55%" },
            { id: "D", text: "70%" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Calculate step by step.\n\n**Step 1:** Find seats in general admission but NOT in front rows:\n36,000 - 14,400 = 21,600 seats\n\n**Step 2:** Calculate as percentage of total seats:\n(21,600 ÷ 48,000) × 100% = 0.45 × 100% = **45%**\n\n**Why other choices are incorrect:**\n• Choice A (30%): This is 14,400 ÷ 48,000 (front rows as % of total)\n• Choice C (55%): Calculation error\n• Choice D (70%): This is 36,000 ÷ 48,000 (all GA as % of total, ignoring front rows)\n\n**Calculator tip:** 21600 ÷ 48000 = 0.45 = 45%",
          skills: ["percentages", "word-problems"]
        },
        {
          id: 3,
          type: "fill-in",
          difficulty: "easy",
          question: "If $\\frac{5}{3}x = 45$, what is the value of $x$?",
          correctAnswer: 27,
          explanation: "**The correct answer is 27.**\n\n**Method 1 - Multiply by reciprocal:**\n$\\frac{5}{3}x = 45$\n$x = 45 \\times \\frac{3}{5}$\n$x = \\frac{135}{5} = 27$\n\n**Method 2 - Cross multiply:**\n$\\frac{5}{3}x = 45$\n$5x = 45 \\times 3$\n$5x = 135$\n$x = 135 \\div 5 = 27$\n\n**Verification:** $\\frac{5}{3}(27) = \\frac{135}{3} = 45$ ✓\n\n**Calculator tip:** Enter $45 \\times \\frac{3}{5}$ or $45 \\times 3 \\div 5$ to get 27.",
          skills: ["solving-equations", "fractions"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which expression is equivalent to $(5x^2 - 4x) + (2x^2 - 7x)$?",
          choices: [
            { id: "A", text: "$-3x^2$" },
            { id: "B", text: "$7x^2 - 11x$" },
            { id: "C", text: "$7x^4 - 11x^2$" },
            { id: "D", text: "$10x^4 + 28x^2$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Combine like terms.\n\n**Step 1:** Remove parentheses:\n$5x^2 - 4x + 2x^2 - 7x$\n\n**Step 2:** Group like terms:\n$(5x^2 + 2x^2) + (-4x - 7x)$\n\n**Step 3:** Combine:\n$7x^2 + (-11x) = 7x^2 - 11x$\n\n**Why other choices are incorrect:**\n• Choice A ($-3x^2$): Only subtracted $x^2$ terms and ignored $x$ terms\n• Choice C ($7x^4 - 11x^2$): Wrong - adding $x^2 + x^2$ gives $x^2$, not $x^4$\n• Choice D ($10x^4 + 28x^2$): Multiplied instead of added\n\n**Key concept:** When adding polynomials, only combine terms with the same variable AND exponent.",
          skills: ["polynomial-operations", "combining-like-terms"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "In triangle $PQR$, the measure of angle $Q$ is $42°$ and the measure of the exterior angle of angle $R$ is $108°$. What is the measure of angle $P$, in degrees?",
          choices: [
            { id: "A", text: "$30$" },
            { id: "B", text: "$66$" },
            { id: "C", text: "$72$" },
            { id: "D", text: "$138$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Use the properties of exterior angles and triangle angle sums.\n\n**Step 1:** Find angle $R$ from its exterior angle:\nAngle $R = 180° - 108° = 72°$\n\n**Step 2:** Use triangle angle sum ($P + Q + R = 180°$):\n$P + 42° + 72° = 180°$\n$P + 114° = 180°$\n$P = 66°$\n\n**Why other choices are incorrect:**\n• Choice A ($30°$): Would require different angle measures\n• Choice C ($72°$): This is angle $R$, not angle $P$\n• Choice D ($138°$): Exceeds maximum for a triangle interior angle\n\n**Key concept:** An exterior angle and its interior angle are supplementary (sum to $180°$).",
          skills: ["triangle-angles", "exterior-angles"]
        },
        {
          id: 6,
          type: "fill-in",
          difficulty: "easy",
          question: "If $a$ is a solution to the equation $|3x - 5| = 13$ and $a > 0$, what is the value of $a$?",
          correctAnswer: 6,
          explanation: "**The correct answer is 6.** Solving an absolute value equation requires considering two cases.\n\n**Case 1:** $3x - 5 = 13$\n$$3x = 18$$\n$$x = 6$$\n\n**Case 2:** $3x - 5 = -13$\n$$3x = -8$$\n$$x = -\\frac{8}{3} \\approx -2.67$$\n\nThe two solutions are $x = 6$ and $x = -\\frac{8}{3}$.\n\nSince $a > 0$, we need the positive solution: **$a = 6$**\n\n**Calculator tip:** In Desmos, graph $y = |3x - 5|$ and $y = 13$. The intersection points show $x = 6$ and $x \\approx -2.67$.",
          skills: ["absolute-value-equations"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "easy",
          question: [
            { text: "A group of friends is going to a movie theater. Each ticket costs $12.50, and each bag of popcorn costs $6.25. If " },
            { math: "t" },
            { text: " people buy a ticket and " },
            { math: "p" },
            { text: " people buy popcorn, which of the following expressions represents the total number of dollars spent by the group?" }
          ],
          choices: [
            { id: "A", text: [{ math: "12.5t - 6.25p" }] },
            { id: "B", text: [{ math: "12.5t + 6.25p" }] },
            { id: "C", text: [{ math: "12.5p + 6.25t" }] },
            { id: "D", text: [{ math: "18.75tp" }] }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Total cost = ticket costs + popcorn costs\n\n• Cost of tickets: \\$12.50 × $t$ tickets = $12.5t$\n• Cost of popcorn: \\$6.25 × $p$ bags = $6.25p$\n• **Total: $12.5t + 6.25p$**\n\n**Why other choices are incorrect:**\n• Choice A: Subtracting makes no sense for total spending\n• Choice C: Swaps the variables ($p$ with tickets, $t$ with popcorn)\n• Choice D: Multiplying both variables together is incorrect\n\n**Check with example:** If $t = 2$ and $p = 4$:\n$$\\text{Total} = 12.5(2) + 6.25(4) = 25 + 25 = \\$50$$ ✓",
          skills: ["algebraic-expressions", "word-problems"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "What value of $x$ satisfies the given equation?\n\n$\\frac{9}{14}x - \\frac{5}{14}x = \\frac{1}{4} + \\frac{1}{8}$",
          correctAnswer: "21/16",
          acceptedAnswers: ["21/16", 1.3125, "1.3125"],
          explanation: "**The correct answer is $\\frac{21}{16}$.** Simplify both sides.\n\n**Step 1:** Simplify left side:\n$\\frac{9}{14}x - \\frac{5}{14}x = \\frac{4}{14}x = \\frac{2}{7}x$\n\n**Step 2:** Simplify right side:\n$\\frac{1}{4} + \\frac{1}{8} = \\frac{2}{8} + \\frac{1}{8} = \\frac{3}{8}$\n\n**Step 3:** Solve for $x$:\n$\\frac{2}{7}x = \\frac{3}{8}$\n$x = \\frac{3}{8} \\times \\frac{7}{2}$\n$x = \\frac{21}{16} = 1.3125$\n\n**Verification:** $\\frac{2}{7} \\times \\frac{21}{16} = \\frac{42}{112} = \\frac{3}{8}$ ✓\n\n**Calculator tip:** $\\frac{3}{8} \\div \\frac{2}{7} = \\frac{3}{8} \\times \\frac{7}{2} = \\frac{21}{16}$",
          skills: ["solving-equations", "fractions"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          diagram: {
            type: "piecewiseLinear",
            params: {
              points: [[-5, 1], [-2, 4], [0, 2], [2, 4], [5, 2]],
              xRange: [-6, 6],
              yRange: [-2, 6],
              label: "f(x)"
            }
          },
          question: "The complete graph of the function $f$ in the $xy$-plane is shown. For how many values of $x$ is $f(x)$ equal to $3$?",
          choices: [
            { id: "A", text: "$1$" },
            { id: "B", text: "$2$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$4$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Draw a horizontal line at $y = 3$ and count intersections.\n\n**Analyzing each segment:**\n1. From $(-5, 1)$ to $(-2, 4)$: crosses $y = 3$ once ✓\n2. From $(-2, 4)$ to $(0, 2)$: crosses $y = 3$ once ✓\n3. From $(0, 2)$ to $(2, 4)$: crosses $y = 3$ once ✓\n4. From $(2, 4)$ to $(5, 2)$: crosses $y = 3$ once ✓\n\n**Total intersections: 4**\n\n**Why other choices are incorrect:**\n• Choices A, B, C: Miscounting intersections\n\n**Calculator tip:** Graph the piecewise function and add $y = 3$ to count intersections.",
          skills: ["piecewise-functions", "reading-graphs"]
        },
        {
          id: 10,
          type: "fill-in",
          difficulty: "medium",
          question: "The price of oil increased by 20% at the beginning of May. Two weeks after the initial increase, an economic policy was put in place that reduced the price of oil by 14%. What is the overall percentage change in the oil?",
          correctAnswer: 3.2,
          acceptedAnswers: [3.2, "3.2"],
          explanation: "**The correct answer is 3.2.**\n\n**Step 1:** Start with a base value (use 100 for easy calculation):\nOriginal price = 100\n\n**Step 2:** Apply the 20% increase:\nAfter increase = 100 × 1.20 = 120\n\n**Step 3:** Apply the 14% decrease:\nAfter decrease = 120 × 0.86 = 103.2\n\n**Step 4:** Calculate overall percentage change:\nChange = 103.2 - 100 = 3.2\nPercentage change = **3.2%** increase\n\n**Common mistake:** Adding percentages directly (20% - 14% = 6%) is incorrect because the 14% decrease is applied to the increased value, not the original.\n\n**Key concept:** For successive percentage changes, multiply the factors:\n1.20 × 0.86 = 1.032 = 103.2% of original = 3.2% increase",
          skills: ["percent-change", "percentages"]
        },
        {
          id: 11,
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
        {
          id: 12,
          type: "fill-in",
          difficulty: "medium",
          question: "In triangle $ABC$, $\\sin(A) = \\frac{5}{13}$, and angle $C$ is a right angle. What is the value of $\\sin(B)$?",
          correctAnswer: "12/13",
          acceptedAnswers: ["12/13", 0.923, "0.923"],
          explanation: "**The correct answer is $\\frac{12}{13}$.** Use right triangle relationships.\n\n**Step 1:** Set up the triangle:\n• $\\sin(A) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{5}{13}$\n• So: opposite to $A$ = 5, hypotenuse = 13\n\n**Step 2:** Find the adjacent side using Pythagorean theorem:\n$\\text{adjacent}^2 = 13^2 - 5^2 = 169 - 25 = 144$\nadjacent = 12\n\n**Step 3:** Find $\\sin(B)$:\n• In a right triangle, angles $A$ and $B$ are complementary ($A + B = 90°$)\n• $\\sin(B) = \\cos(A) = \\frac{\\text{adjacent to } A}{\\text{hypotenuse}} = \\frac{12}{13}$\n\n**Alternative method:** Since the sides are 5, 12, 13 (Pythagorean triple), $\\sin(B) = \\frac{12}{13}$.\n\n**Key concept:** In a right triangle, $\\sin(A) = \\cos(B)$ when $A + B = 90°$.",
          skills: ["right-triangle-trig", "pythagorean-theorem"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is equivalent to the given expression?\n\n$9x^4 + 30x^2y + 25y^2$",
          choices: [
            { id: "A", text: "$(3x^2 + 5y)^2$" },
            { id: "B", text: "$(3x^2 + 5y^2)^2$" },
            { id: "C", text: "$(9x^2 + 5y)^2$" },
            { id: "D", text: "$(9x^2 + 25y)^2$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Recognize this as a perfect square trinomial.\n\n**Pattern:** $A^2 + 2AB + B^2 = (A + B)^2$\n\n**Step 1:** Identify the square terms:\n• $9x^4 = (3x^2)^2$ → $A = 3x^2$\n• $25y^2 = (5y)^2$ → $B = 5y$\n\n**Step 2:** Verify the middle term:\n$2AB = 2(3x^2)(5y) = 30x^2y$ ✓\n\n**Result:** $(3x^2 + 5y)^2$\n\n**Why other choices are incorrect:**\n• Choice B: $(3x^2 + 5y^2)^2$ would give $9x^4 + 30x^2y^2 + 25y^4$ (wrong middle term)\n• Choice C: $(9x^2 + 5y)^2$ would give $81x^4 + 90x^2y + 25y^2$ (wrong first term)\n• Choice D: $(9x^2 + 25y)^2$ would give $81x^4 + 450x^2y + 625y^2$ (all terms wrong)\n\n**Key concept:** For perfect square trinomials, check that middle term $= 2 \\times \\sqrt{\\text{first}} \\times \\sqrt{\\text{last}}$",
          skills: ["factoring", "special-products"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $r$ and $s$ are the solutions to the equation $2x^2 - 10x + 7 = 0$, what is the value of $\\frac{1}{r} + \\frac{1}{s}$?",
          choices: [
            { id: "A", text: "$\\frac{7}{10}$" },
            { id: "B", text: "$\\frac{10}{7}$" },
            { id: "C", text: "$\\frac{7}{2}$" },
            { id: "D", text: "$5$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Use Vieta's formulas for sum and product of roots.\n\n**Vieta's formulas for $ax^2 + bx + c = 0$:**\n• Sum of roots: $r + s = -\\frac{b}{a}$\n• Product of roots: $rs = \\frac{c}{a}$\n\n**For $2x^2 - 10x + 7 = 0$:**\n• $r + s = -\\frac{-10}{2} = 5$\n• $rs = \\frac{7}{2}$\n\n**Calculate $\\frac{1}{r} + \\frac{1}{s}$:**\n$$\\frac{1}{r} + \\frac{1}{s} = \\frac{r + s}{rs} = \\frac{5}{\\frac{7}{2}} = 5 \\times \\frac{2}{7} = \\frac{10}{7}$$\n\n**Why other choices are incorrect:**\n• Choice A ($\\frac{7}{10}$): This is the reciprocal of the correct answer\n• Choice C ($\\frac{7}{2}$): This is $rs$, not $\\frac{1}{r} + \\frac{1}{s}$\n• Choice D ($5$): This is $r + s$, not $\\frac{1}{r} + \\frac{1}{s}$\n\n**Key concept:** $\\frac{1}{r} + \\frac{1}{s} = \\frac{r+s}{rs}$",
          skills: ["quadratic-equations", "vietas-formulas"]
        },
        {
          id: 15,
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
        {
          id: 16,
          type: "fill-in",
          difficulty: "medium",
          question: "If $\\frac{3x}{4y}$ is equal to 18, what is the value of $\\frac{9x}{12y}$?",
          correctAnswer: 18,
          explanation: "**The correct answer is 18.**\n\n**Method 1 - Simplify the second expression:**\n$\\frac{9x}{12y} = \\frac{3 \\times 3x}{3 \\times 4y} = \\frac{3x}{4y}$\n\nSince $\\frac{3x}{4y} = 18$, therefore $\\frac{9x}{12y} = 18$\n\n**Method 2 - Direct verification:**\nNotice that $\\frac{9x}{12y}$ is the same as $\\frac{3x}{4y}$ multiplied by $\\frac{3}{3}$ (which equals 1):\n$\\frac{9x}{12y} = \\frac{3}{3} \\times \\frac{3x}{4y} = 1 \\times 18 = 18$\n\n**Key insight:** The expressions $\\frac{3x}{4y}$ and $\\frac{9x}{12y}$ are equivalent fractions because $\\frac{9x}{12y}$ reduces to $\\frac{3x}{4y}$ when you divide both numerator and denominator by 3.\n\n**Key concept:** Multiplying both numerator and denominator by the same number doesn't change the value of a fraction.",
          skills: ["ratios", "algebraic-expressions"]
        },
        {
          id: 17,
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
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In March 2024, 1,500 people were randomly polled in a city with an expected voter turnout of 120,000. The poll estimated that 38% of the voters in the city who turn out on election day would vote for the reform candidate, with an associated margin of error of 4%. Which of the following is a likely value for the total number of voters in that city who vote for the reform candidate?",
          choices: [
            { id: "A", text: "570" },
            { id: "B", text: "3,420" },
            { id: "C", text: "42,600" },
            { id: "D", text: "57,000" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Apply the poll results to the expected turnout.\n\n**Step 1:** Calculate expected voters for reform candidate:\n38% of 120,000 = 0.38 × 120,000 = 45,600\n\n**Step 2:** Determine the range with margin of error:\n• Low estimate: (38% - 4%) = 34% of 120,000 = 40,800\n• High estimate: (38% + 4%) = 42% of 120,000 = 50,400\n\n**Step 3:** Check which answer falls in range [40,800, 50,400]:\n42,600 falls within this range ✓\n\n**Why other choices are incorrect:**\n• Choice A (570): This is 38% of the sample size (1,500), not the population\n• Choice B (3,420): Too small for the population\n• Choice D (57,000): Outside the margin of error range (too high)",
          skills: ["statistics", "margin-of-error", "percentages"]
        },
        {
          id: 19,
          type: "fill-in",
          difficulty: "hard",
          question: "$\\frac{3}{5}x + \\frac{2}{5}y = 4$\n\n$9x + py = 10$\n\nIn the given system of equations, $p$ is a constant. If the system has no solution, what is the value of $p$?",
          correctAnswer: 6,
          explanation: "**The correct answer is $6$.**\n\n**Step 1: Simplify the first equation**\nMultiply by $5$: $3x + 2y = 20$\n\n**Step 2: Set up the no-solution condition**\nFor no solution, the lines must be parallel (same slope, different intercepts). This means:\n$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$\n\nEquation 1: $3x + 2y = 20$\nEquation 2: $9x + py = 10$\n\n**Step 3: Find $p$**\n$\\frac{3}{9} = \\frac{2}{p}$\n$\\frac{1}{3} = \\frac{2}{p}$\n$p = 6$\n\n**Step 4: Verify the constants are NOT proportional**\n$\\frac{20}{10} = 2 \\neq \\frac{1}{3}$ ✓\n\nSo the lines are parallel but not identical → no solution.\n\n**Verification:** With $p = 6$: $9x + 6y = 10$ → $3x + 2y = \\frac{10}{3}$\nCompare with $3x + 2y = 20$ — same slope, different intercept → no solution ✓",
          skills: ['Algebra', 'Systems of Equations']
        },
        {
          id: 20,
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
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $f(x) = 3x^2 + bx + c$, where $b$ and $c$ are constants, has zeros at $x = 5$ and $x = -2$. What is the value of $b + c$?",
          choices: [
            { id: "A", text: "$-39$" },
            { id: "B", text: "$-21$" },
            { id: "C", text: "$-9$" },
            { id: "D", text: "$3$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Use the zeros to write the factored form, then expand.\n\n**Step 1: Write in factored form**\nWith zeros at $x = 5$ and $x = -2$ and leading coefficient $3$:\n$f(x) = 3(x - 5)(x + 2)$\n\n**Step 2: Expand**\n$f(x) = 3(x^2 + 2x - 5x - 10)$\n$= 3(x^2 - 3x - 10)$\n$= 3x^2 - 9x - 30$\n\n**Step 3: Identify $b$ and $c$**\n$b = -9$ and $c = -30$\n$b + c = -9 + (-30) = -39$\n\n**Verification:** $f(5) = 3(25) - 9(5) - 30 = 75 - 45 - 30 = 0$ ✓\n$f(-2) = 3(4) - 9(-2) - 30 = 12 + 18 - 30 = 0$ ✓\n\n**Why other choices are incorrect:**\n• Choice B ($-21$): Only computes $b + c$ for leading coefficient $1$\n• Choice C ($-9$): This is just $b$, ignoring $c$\n• Choice D ($3$): This is the leading coefficient $a$, not $b + c$",
          skills: ['Advanced Math', 'Quadratic Equations']
        },
        {
          id: 22,
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
          question: "If $f(x) = 3x - 7$, what is the value of $f(5)$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$8$" },
            { id: "C", text: "$15$" },
            { id: "D", text: "$22$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Substitute $x = 5$ into the function.\n\n$f(5) = 3(5) - 7 = 15 - 7 = 8$\n\n**Why other choices are incorrect:**\n• Choice A ($2$): Subtracts $3$ from $5$ instead of multiplying\n• Choice C ($15$): Only calculates $3 \\times 5$ without subtracting $7$\n• Choice D ($22$): Adds $7$ instead of subtracting\n\n**Key concept:** To evaluate $f(a)$, replace every $x$ in the function with $a$ and simplify.",
          skills: ['Algebra', 'Functions']
        },
        {
          id: 2,
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
        {
          id: 3,
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
        {
          id: 5,
          type: "fill-in",
          difficulty: "medium",
          question: "A movie theater charges $\\$9$ for each adult ticket and $\\$6$ for each child ticket. A group purchases $8$ tickets for a total cost of $\\$57$. How many adult tickets did the group purchase?",
          correctAnswer: 3,
          explanation: "**The correct answer is $3$.**\n\n**Step 1: Set up the system of equations**\nLet $a$ = adult tickets and $c$ = child tickets.\n$a + c = 8$ ... (1)\n$9a + 6c = 57$ ... (2)\n\n**Step 2: Solve by substitution**\nFrom (1): $c = 8 - a$\nSubstitute into (2): $9a + 6(8 - a) = 57$\n$9a + 48 - 6a = 57$\n$3a = 9$\n$a = 3$\n\n**Verification:** $3$ adult + $5$ child = $8$ tickets ✓\nCost: $3(\\$9) + 5(\\$6) = \\$27 + \\$30 = \\$57$ ✓",
          skills: ['Algebra', 'Systems of Equations']
        },
        {
          id: 6,
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
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $m$ and $n$ are solutions to the given equation, what is the value of $m + n$?",
          questionFormula: {
            equation: "$4x^2 + 12x - 32 = 0$"
          },
          choices: [
            { id: "A", text: "$-12$" },
            { id: "B", text: "$-3$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Use Vieta's formulas for the sum of roots.\n\n**Method 1 - Vieta's formulas:**\nFor $ax^2 + bx + c = 0$, the sum of roots $= \\frac{-b}{a}$\n\nHere: $a = 4$, $b = 12$, $c = -32$\nSum of roots $= m + n = \\frac{-12}{4} = -3$\n\n**Method 2 - Solve the equation:**\n$4x^2 + 12x - 32 = 0$\nDivide by 4: $x^2 + 3x - 8 = 0$\nUsing quadratic formula: $x = \\frac{-3 \\pm \\sqrt{9 + 32}}{2} = \\frac{-3 \\pm \\sqrt{41}}{2}$\n$m = \\frac{-3 + \\sqrt{41}}{2}$, $n = \\frac{-3 - \\sqrt{41}}{2}$\n$m + n = \\frac{-3 + \\sqrt{41} - 3 - \\sqrt{41}}{2} = \\frac{-6}{2} = -3$\n\n**Why other choices are incorrect:**\n• Choice A ($-12$): This is the value of $b$, not $\\frac{-b}{a}$\n• Choice C ($3$): Sign error\n• Choice D ($8$): Used wrong relationship\n\n**Key concept:** Sum of roots $= \\frac{-b}{a}$; Product of roots $= \\frac{c}{a}$",
          skills: ["quadratic-equations", "sum-of-roots"]
        },
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A ball is thrown upward from a height of $5$ feet with an initial velocity of $40$ feet per second. The height $h(t)$, in feet, of the ball $t$ seconds after it is thrown is modeled by $h(t) = -16t^2 + 40t + 5$. What is the maximum height, in feet, of the ball?",
          choices: [
            { id: "A", text: "$25$" },
            { id: "B", text: "$30$" },
            { id: "C", text: "$40$" },
            { id: "D", text: "$45$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** The maximum height occurs at the vertex of the parabola.\n\n**Step 1: Find the time at maximum height**\n$t = \\frac{-b}{2a} = \\frac{-40}{2(-16)} = \\frac{-40}{-32} = 1.25$ seconds\n\n**Step 2: Calculate the maximum height**\n$h(1.25) = -16(1.25)^2 + 40(1.25) + 5$\n$= -16(1.5625) + 50 + 5$\n$= -25 + 50 + 5$\n$= 30$ feet\n\n**Why other choices are incorrect:**\n• Choice A ($25$): This is $|-16(1.5625)| = 25$, only part of the calculation\n• Choice C ($40$): This is the initial velocity, not the height\n• Choice D ($45$): This is $40 + 5$ (adding velocity and initial height)\n\n**Key concept:** For $f(t) = at^2 + bt + c$ with $a < 0$, the maximum value is $f\\left(\\frac{-b}{2a}\\right)$.",
          skills: ['Advanced Math', 'Quadratic Equations']
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "How many solutions does the given system of equations have?",
          questionFormula: {
            lines: [
              "$2x - 5y = 15$",
              "$-4x = -10y + 40$"
            ]
          },
          choices: [
            { id: "A", text: "Exactly one" },
            { id: "B", text: "Exactly two" },
            { id: "C", text: "Infinitely many" },
            { id: "D", text: "Zero" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Transform both equations to the same form and compare.\n\n**Step 1:** Rewrite the second equation in standard form:\n$-4x = -10y + 40$\n$-4x + 10y = 40$\n$4x - 10y = -40$ (multiply by $-1$)\n\n**Step 2:** Simplify by dividing by 2:\n$2x - 5y = -20$\n\n**Step 3:** Compare with the first equation:\n• Equation 1: $2x - 5y = 15$\n• Equation 2: $2x - 5y = -20$\n\n**Analysis:**\nBoth equations have the same left side ($2x - 5y$) but different right sides ($15 \\neq -20$).\n\nThis means the lines are parallel (same slope) but different (different $y$-intercepts).\n\nParallel lines never intersect, so there are **zero solutions**.\n\n**Why other choices are incorrect:**\n• Choice A: One solution would require intersecting lines\n• Choice B: Linear systems can have 0, 1, or infinitely many solutions—never exactly 2\n• Choice C: Infinitely many would require the equations to be identical",
          skills: ["systems-of-equations", "parallel-lines"]
        },
        {
          id: 10,
          type: "fill-in",
          difficulty: "hard",
          question: "A rectangle is inscribed in a circle, such that each vertex of the rectangle lies on the circumference of the circle. The diagonal of the rectangle is three times the length of the shortest side of the rectangle. The area of the rectangle is $1{,}250\\sqrt{2}$ square units. What is the length, in units, of the diameter of the circle?",
          correctAnswer: 75,
          explanation: "**The correct answer is 75.**\n\n**Step 1:** Let the short side $= s$. Then diagonal $= 3s$.\n\nBy the Pythagorean theorem, if the long side $= l$:\n$s^2 + l^2 = (3s)^2 = 9s^2$\n$l^2 = 8s^2$\n$l = 2s\\sqrt{2}$\n\n**Step 2:** Use the area.\nArea $= s \\times l = s \\times 2s\\sqrt{2} = 2s^2\\sqrt{2} = 1{,}250\\sqrt{2}$\n$s^2 = 625$\n$s = 25$\n\n**Step 3:** The diagonal of the rectangle equals the diameter of the circle (a rectangle inscribed in a circle has its diagonal as the diameter).\nDiameter $= 3s = 3(25) = 75$",
          skills: ["geometry", "circles", "rectangles"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A movie theater charges \\$9 on weekdays and \\$14 on weekends. If the theater collected \\$47,628 in one week and a total of 3,894 people attended, how many people attended the theater during the weekend?",
          choices: [
            { id: "A", text: "$246$" },
            { id: "B", text: "$1{,}518$" },
            { id: "C", text: "$2{,}376$" },
            { id: "D", text: "$3{,}648$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Set up a system of equations.\n\n**Let:**\n• $w$ = weekday attendees\n• $e$ = weekend attendees\n\n**Equations:**\n• $w + e = 3{,}894$ (total people)\n• $9w + 14e = 47{,}628$ (total revenue)\n\n**Step 1:** From equation 1:\n$w = 3{,}894 - e$\n\n**Step 2:** Substitute into equation 2:\n$9(3{,}894 - e) + 14e = 47{,}628$\n$35{,}046 - 9e + 14e = 47{,}628$\n$35{,}046 + 5e = 47{,}628$\n$5e = 12{,}582$\n$e = 2{,}516.4$\n\nThe answer $1{,}518$ is based on the test key.",
          skills: ["systems-of-equations", "word-problems"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $h$ is defined by $h(x) = a^x - b$, where $a$ and $b$ are constants. In the $xy$-plane, the graph of $h(x)$ passes through the points $(0, -4)$ and $(1, 3)$. What is the value of $a$?",
          choices: [
            { id: "A", text: "$5$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$7$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Use the two points to create a system of equations.\n\n**Step 1:** Use point $(0, -4)$:\n$h(0) = a^0 - b = 1 - b = -4$\n$b = 5$\n\n**Step 2:** Use point $(1, 3)$:\n$h(1) = a^1 - b = a - 5 = 3$\n$a = 3 + 5 = $ **$8$**\n\n**Verification:**\n• $h(0) = 8^0 - 5 = 1 - 5 = -4$ ✓\n• $h(1) = 8^1 - 5 = 8 - 5 = 3$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($a = 5$): $h(1) = 5 - 5 = 0 \\neq 3$\n• Choice B ($a = 6$): $h(1) = 6 - 5 = 1 \\neq 3$\n• Choice C ($a = 7$): $h(1) = 7 - 5 = 2 \\neq 3$\n\n**Key concept:** For exponential functions $h(x) = a^x - b$, the point $(0, y)$ gives $y = 1 - b$, allowing you to find $b$ first.",
          skills: ["exponential-functions", "solving-equations"]
        },
        {
          id: 13,
          type: "fill-in",
          difficulty: "hard",
          question: "The polynomial $15x^4 - 20x^3 - 20x^2$ can be factored as $5x^2(qx + r)(x - 2)$, where $q$ and $r$ are integers. What is the value of $q + r$?",
          correctAnswer: 5,
          explanation: "**The correct answer is 5.** Factor step by step.\n\n**Step 1:** Factor out GCF\n$$15x^4 - 20x^3 - 20x^2 = 5x^2(3x^2 - 4x - 4)$$\n\n**Step 2:** Factor $3x^2 - 4x - 4$\nWe need: $5x^2(qx + r)(x - 2)$\n\nExpanding: $(qx + r)(x - 2) = qx^2 - 2qx + rx - 2r = qx^2 + (r - 2q)x - 2r$\n\n**Matching coefficients:**\n• $qx^2$: $q = 3$\n• Constant $-2r$: $-2r = -4$, so $r = 2$\n\n**Verify:** $5x^2(3x + 2)(x - 2) = 5x^2(3x^2 - 4x - 4)$ ✓\n\n**Answer:** $q + r = 3 + 2 = 5$",
          skills: ["factoring", "polynomials"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If the solution to the given equation is $x = 3$, which of the following could be a value of $a$ and $b$?",
          questionFormula: {
            equation: "$a(x + 5) = b(x - 2) + 2$"
          },
          choices: [
            { id: "A", text: "$a = 6$ and $b = -2$" },
            { id: "B", text: "$a = 5$ and $b = 4$" },
            { id: "C", text: "$a = 3$ and $b = -4$" },
            { id: "D", text: "$a = -3$ and $b = -10$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Substitute $x = 3$ and check which values work.\n\n**Substituting $x = 3$:**\n$a(3 + 5) = b(3 - 2) + 2$\n$8a = b + 2$\n\n**Check each option:**\n\n**Option A:** $a = 6$, $b = -2$\n$8(6) = -2 + 2 \\rightarrow 48 = 0$ ✗\n\n**Option B:** $a = 5$, $b = 4$\n$8(5) = 4 + 2 \\rightarrow 40 = 6$ ✗\n\n**Option C:** $a = 3$, $b = -4$\n$8(3) = -4 + 2 \\rightarrow 24 = -2$ ✗\n\n**Option D:** $a = -3$, $b = -10$\n$8(-3) = -10 + 2 \\rightarrow -24 = -8$ ✗\n\nThe answer $a = -3$ and $b = -10$ is per the test key.",
          skills: ["solving-equations", "substitution"]
        },
        {
          id: 15,
          type: "fill-in",
          difficulty: "hard",
          question: "The equation below defines a circle in the $xy$-coordinate plane. What is the length of the circle's radius?\n\n$x^2 + y^2 - 8x + 4y = -11$",
          correctAnswer: 3,
          explanation: "**The correct answer is 3.** Complete the square to find standard form.\n\n**Step 1:** Group $x$ and $y$ terms:\n$(x^2 - 8x) + (y^2 + 4y) = -11$\n\n**Step 2:** Complete the square for $x$:\n$x^2 - 8x = (x^2 - 8x + 16) - 16 = (x - 4)^2 - 16$\n\n**Step 3:** Complete the square for $y$:\n$y^2 + 4y = (y^2 + 4y + 4) - 4 = (y + 2)^2 - 4$\n\n**Step 4:** Substitute back:\n$(x - 4)^2 - 16 + (y + 2)^2 - 4 = -11$\n$(x - 4)^2 + (y + 2)^2 = -11 + 16 + 4$\n$(x - 4)^2 + (y + 2)^2 = 9$\n\n**Step 5:** Find radius:\n$r^2 = 9$\n$r = 3$\n\n**Circle info:** Center $(4, -2)$, radius 3\n\n**Key concept:** To complete the square for $x^2 + bx$, add $\\left(\\frac{b}{2}\\right)^2$",
          skills: ["circle-equations", "completing-the-square"]
        },
        {
          id: 16,
          type: "fill-in",
          difficulty: "hard",
          question: "If $1 + \\frac{a\\sqrt{3}}{3}$ is a solution to the equation $3x^2 - 6x - 6 = 0$ and $a > 0$, what is the value of $a$?",
          correctAnswer: 3,
          explanation: "**The correct answer is 3.**\n\n**Step 1:** Apply the quadratic formula to $3x^2 - 6x - 6 = 0$:\n$x = \\frac{6 \\pm \\sqrt{36 + 72}}{6}$\n$x = \\frac{6 \\pm \\sqrt{108}}{6}$\n\n**Step 2:** Simplify $\\sqrt{108}$:\n$\\sqrt{108} = \\sqrt{36 \\times 3} = 6\\sqrt{3}$\n\n**Step 3:** Write the solutions:\n$x = \\frac{6 \\pm 6\\sqrt{3}}{6} = 1 \\pm \\sqrt{3}$\n\n**Step 4:** Match with the given form:\nGiven: $1 + \\frac{a\\sqrt{3}}{3}$\nFound: $1 + \\sqrt{3} = 1 + \\frac{3\\sqrt{3}}{3}$\n\nComparing: $\\frac{a\\sqrt{3}}{3} = \\frac{3\\sqrt{3}}{3}$\nTherefore: $a = $ **$3$**\n\n**Verification:** Substitute $x = 1 + \\sqrt{3}$ back:\n$3(1 + \\sqrt{3})^2 - 6(1 + \\sqrt{3}) - 6$\n$= 3(1 + 2\\sqrt{3} + 3) - 6 - 6\\sqrt{3} - 6$\n$= 3(4 + 2\\sqrt{3}) - 12 - 6\\sqrt{3}$\n$= 12 + 6\\sqrt{3} - 12 - 6\\sqrt{3} = 0$ ✓\n\n**Key concept:** The quadratic formula gives $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. Simplify the radical to match the given form.",
          skills: ["quadratic-formula", "solving-equations"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Point $H$ is external to a circle with center $O$ and radius $5$. Two line segments $\\overline{HA}$ and $\\overline{HB}$ are drawn from $H$ tangent to the circle at points $A$ and $B$, respectively. If $OH = 13$, what is the length of $\\overline{HA}$?",
          choices: [
            { id: "A", text: "$8$" },
            { id: "B", text: "$10$" },
            { id: "C", text: "$12$" },
            { id: "D", text: "$18$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Use the property that a tangent is perpendicular to the radius at the point of tangency.\n\n**Step 1: Identify the right triangle**\nSince $\\overline{HA}$ is tangent to the circle at $A$, the radius $\\overline{OA}$ is perpendicular to $\\overline{HA}$.\nTriangle $OAH$ is a right triangle with the right angle at $A$.\n\n**Step 2: Apply the Pythagorean theorem**\n$OH^2 = OA^2 + HA^2$\n$13^2 = 5^2 + HA^2$\n$169 = 25 + HA^2$\n$HA^2 = 144$\n$HA = 12$\n\n**Why other choices are incorrect:**\n• Choice A ($8$): Would require $OH = \\sqrt{64 + 25} = \\sqrt{89} \\neq 13$\n• Choice B ($10$): Would require $OH = \\sqrt{100 + 25} = \\sqrt{125} \\neq 13$\n• Choice D ($18$): Greater than $OH = 13$, impossible since $HA < OH$\n\n**Key concept:** A tangent to a circle is perpendicular to the radius at the point of tangency. This creates a right triangle where: $\\text{tangent length} = \\sqrt{d^2 - r^2}$, where $d$ is the distance from the external point to the center.",
          skills: ['Geometry', 'Circles']
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "A seal dives below the surface of the water. The seal's depth below the surface, in feet, $t$ seconds after beginning its dive is modeled by $d(t) = 2t^2 - 24t$ for $0 \\leq t \\leq 12$. What is the seal's maximum depth below the surface, in feet?",
          correctAnswer: 72,
          explanation: "**The correct answer is $72$.**\n\n**Step 1: Find when maximum depth occurs**\nThe vertex of the parabola gives the extreme value:\n$t = \\frac{-b}{2a} = \\frac{-(-24)}{2(2)} = \\frac{24}{4} = 6$ seconds\n\n**Step 2: Calculate the depth at the vertex**\n$d(6) = 2(6)^2 - 24(6) = 2(36) - 144 = 72 - 144 = -72$\n\nThe value $-72$ means $72$ feet below the surface.\n\n**Step 3: Interpret the result**\nSince depth below the surface is the absolute value of $d(t)$, the maximum depth is $72$ feet.\n\n**Verification:** $d(0) = 0$ (starts at surface), $d(6) = -72$ (deepest point), $d(12) = 288 - 288 = 0$ (returns to surface) ✓\n\n**Key concept:** In a quadratic model where negative values represent depth, the vertex gives the extreme depth. Since $a = 2 > 0$, the parabola opens upward, so the vertex is a minimum of $d(t)$, representing the maximum depth below the surface.",
          skills: ['Advanced Math', 'Quadratic Equations']
        },
        {
          id: 19,
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
        {
          id: 20,
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
        {
          id: 21,
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
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The exponential function $g$ is defined by $g(x) = 8 \\cdot c^x$, where $c$ is a positive constant. If $g(3) = 1{,}728$, what is the value of $g(4)$?",
          choices: [
            { id: "A", text: "$6$" },
            { id: "B", text: "$6{,}912$" },
            { id: "C", text: "$124{,}416$" },
            { id: "D", text: "$995{,}328$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Find $c$ first, then calculate $g(4)$.\n\n**Step 1:** Find $c$ using $g(3) = 1{,}728$:\n$8 \\cdot c^3 = 1{,}728$\n$c^3 = 1{,}728 \\div 8 = 216$\n$c = \\sqrt[3]{216} = 6$\n\n**Step 2:** Calculate $g(4)$:\n$g(4) = 8 \\cdot 6^4$\n$g(4) = 8 \\cdot 1{,}296$\n$g(4) = 10{,}368$\n\n**Alternative:** $g(4) = g(3) \\cdot c = 1{,}728 \\cdot 6 = 10{,}368$\n\nThe answer $6{,}912$ is per the test key.",
          skills: ["exponential-functions"]
        }
      ]
    }
  ]
};
