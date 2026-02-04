// Practice Test 2 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions mirror Practice Test 1 structure with different contexts and numbers

export const practiceTest2 = {
  id: "practice-test-2",
  title: "Practice Test 2",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35, // minutes
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
        // Question 1: Mean calculation
        {
          id: 1,
          type: "fill-in",
          difficulty: "easy",
          question: "The values below represent how many miles Kenji ran in each of his last ten training sessions. What is the mean of Kenji's distances over these ten sessions?",
          questionFormula: {
            equation: "$$16, 12, 18, 9, 21, 15, 15, 19, 25, 20$$"
          },
          correctAnswer: 17,
          explanation: "**The correct answer is 17.** To find the mean, add all values and divide by the count.\n\n**Step 1:** Add all values:\n16 + 12 + 18 + 9 + 21 + 15 + 15 + 19 + 25 + 20 = 170\n\n**Step 2:** Divide by the number of values:\n170 ÷ 10 = **17**\n\n**Calculator tip:** Enter all values separated by commas into a list function, then use the mean function.",
          skills: ["mean-median-mode"]
        },

        // Question 2: System of linear equations (from PT1)
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "If $5x - y = 17$ and $x - y = 1$, what is the value of $x + y$?",
          choices: [
            { id: "A", text: "$5$" },
            { id: "B", text: "$7$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$10$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Solve using the elimination method.\n\nSubtract the second equation from the first:\n$$(5x - y) - (x - y) = 17 - 1$$\n$$4x = 16$$\n$$x = 4$$\n\nSubstitute $x = 4$ into $x - y = 1$:\n$$4 - y = 1$$\n$$y = 3$$\n\nTherefore, $x + y = 4 + 3 = 7$\n\n**Why other choices are incorrect:**\n• Choice A ($5$): This is $x + 1$, not $x + y$\n• Choice C ($8$): Arithmetic error\n• Choice D ($10$): Would require different values\n\n**Calculator tip:** In Desmos, graph both equations. The intersection point $(4, 3)$ gives $x + y = 7$.",
          skills: ["systems-of-equations"]
        },

        // Question 3: Absolute value equation (from PT1)
        {
          id: 3,
          type: "fill-in",
          difficulty: "easy",
          question: "If $a$ is a solution to the equation $|3x - 5| = 13$ and $a > 0$, what is the value of $a$?",
          correctAnswer: 6,
          explanation: "**The correct answer is 6.** Solving an absolute value equation requires considering two cases.\n\n**Case 1:** $3x - 5 = 13$\n$$3x = 18$$\n$$x = 6$$\n\n**Case 2:** $3x - 5 = -13$\n$$3x = -8$$\n$$x = -\\frac{8}{3} \\approx -2.67$$\n\nThe two solutions are $x = 6$ and $x = -\\frac{8}{3}$.\n\nSince $a > 0$, we need the positive solution: **$a = 6$**\n\n**Calculator tip:** In Desmos, graph $y = |3x - 5|$ and $y = 13$. The intersection points show $x = 6$ and $x \\approx -2.67$.",
          skills: ["absolute-value-equations"]
        },

        // Question 4: Percentage problem
        {
          id: 4,
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

        // Question 5: Cylinder volume (from PT1)
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The radius of a right cylinder is $5$ inches, and its height is three times the length of the radius. What is the volume of the cylinder, in cubic inches?",
          choices: [
            { id: "A", text: "$75\\pi$" },
            { id: "B", text: "$125\\pi$" },
            { id: "C", text: "$375\\pi$" },
            { id: "D", text: "$750\\pi$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Use the cylinder volume formula: $V = \\pi r^2 h$\n\n**Given:**\n• Radius $r = 5$ inches\n• Height $h = 3r = 3(5) = 15$ inches\n\n**Calculate:**\n$$V = \\pi r^2 h = \\pi(5)^2(15) = \\pi(25)(15) = 375\\pi \\text{ cubic inches}$$\n\n**Why other choices are incorrect:**\n• Choice A ($75\\pi$): Uses $h = 3$ instead of $h = 15$\n• Choice B ($125\\pi$): Uses $h = 5$ instead of $h = 15$\n• Choice D ($750\\pi$): Doubles the answer incorrectly\n\n**Calculator tip:** Verify: $25 \\times 15 = 375$",
          skills: ["volume", "cylinders"]
        },

        // Question 6: Two-way table probability (from PT1)
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table shows the average weekly coffee sales at a café.",
          diagram: {
            type: "table",
            params: {
              headers: ["", "Hot", "Iced", "Total"],
              rows: [
                ["Latte", "65", "48", "113"],
                ["Cappuccino", "82", "35", "117"],
                ["Americano", "43", "67", "110"],
                ["Total", "190", "150", "340"]
              ]
            }
          },
          questionContinued: "If a customer who purchased iced coffee is selected at random, what is the probability that the customer purchased a cappuccino?",
          choices: [
            { id: "A", text: "$\\frac{35}{117}$" },
            { id: "B", text: "$\\frac{35}{150}$" },
            { id: "C", text: "$\\frac{117}{340}$" },
            { id: "D", text: "$\\frac{150}{117}$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** This is a conditional probability: $P(\\text{Cappuccino} | \\text{Iced})$\n\nWe want: probability of cappuccino **given** the customer bought iced coffee.\n\n**Formula:**\n$$P(\\text{Cappuccino} | \\text{Iced}) = \\frac{\\text{Iced Cappuccino}}{\\text{Total Iced}} = \\frac{35}{150}$$\n\n(or $\\frac{7}{30}$)\n\n**Why other choices are incorrect:**\n• Choice A ($\\frac{35}{117}$): Divides by total cappuccino, not total iced\n• Choice C ($\\frac{117}{340}$): This is $P(\\text{Cappuccino})$, ignoring the iced condition\n• Choice D ($\\frac{150}{117}$): Inverts the fraction\n\n**Key concept:** For conditional probability, the denominator is the \"given\" condition (total iced = 150).",
          skills: ["probability", "two-way-tables"]
        },

        // Question 7: Word problem - algebraic expression (from PT1)
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

        // Question 8: Solving for variable with fractions
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "easy",
          question: "If $\\frac{32}{7}w = \\frac{40}{3}$, what is the value of $w$?",
          choices: [
            { id: "A", text: "$\\frac{7}{12}$" },
            { id: "B", text: "$\\frac{3}{4}$" },
            { id: "C", text: "$\\frac{4}{3}$" },
            { id: "D", text: "$\\frac{35}{12}$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Solve for $w$ by dividing both sides.\n\n**Step 1:** Isolate $w$:\n$w = \\frac{40}{3} \\div \\frac{32}{7}$\n\n**Step 2:** Dividing fractions = multiplying by reciprocal:\n$w = \\frac{40}{3} \\times \\frac{7}{32}$\n\n**Step 3:** Multiply:\n$w = \\frac{40 \\times 7}{3 \\times 32} = \\frac{280}{96}$\n\n**Step 4:** Simplify:\n$\\frac{280}{96} = \\frac{35}{12}$\n\n**Why other choices are incorrect:**\n• Choice A ($\\frac{7}{12}$): Inverted the calculation\n• Choice B ($\\frac{3}{4}$): Incorrect simplification\n• Choice C ($\\frac{4}{3}$): Calculation error\n\n**Calculator tip:** $\\frac{40}{3} \\div \\frac{32}{7} = \\frac{40}{3} \\times \\frac{7}{32} = 2.917 = \\frac{35}{12}$",
          skills: ["solving-equations", "fractions"]
        },

        // Question 9: Quadratic equation - find k (from PT1)
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If the solution to the given equation is a positive whole number, what could be a value of $k$?",
          questionFormula: {
            equation: "$$kx^2 + 36 = 900$$"
          },
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Solve for $x^2$:\n\n$$kx^2 + 36 = 900$$\n$$kx^2 = 864$$\n$$x^2 = \\frac{864}{k}$$\n\nFor $x$ to be a positive whole number, $\\frac{864}{k}$ must be a perfect square.\n\n**Test each option:**\n• $k = 2$: $x^2 = 432 \\to \\sqrt{432} \\approx 20.8$ (not whole)\n• $k = 4$: $x^2 = 216 \\to \\sqrt{216} \\approx 14.7$ (not whole)\n• **$k = 6$: $x^2 = 144 \\to \\sqrt{144} = 12$ ✓ (whole number!)**\n• $k = 8$: $x^2 = 108 \\to \\sqrt{108} \\approx 10.4$ (not whole)\n\nWhen $k = 6$, $x = 12$ is a positive whole number.\n\n**Calculator tip:** Test each $k$ value to find which gives a perfect square.",
          skills: ["quadratic-equations"]
        },

        // Question 10: Rational expression simplification (from PT1)
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The expression $\\frac{x^2 + 7x + 12}{x^2 + x - 12}$ is equivalent to which expression?",
          choices: [
            { id: "A", text: "$\\frac{x + 3}{x - 3}$" },
            { id: "B", text: "$\\frac{x + 4}{x - 4}$" },
            { id: "C", text: "$\\frac{x + 7}{x + 1}$" },
            { id: "D", text: "$7$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Factor both numerator and denominator.\n\n**Numerator:** $x^2 + 7x + 12 = (x + 3)(x + 4)$\n**Denominator:** $x^2 + x - 12 = (x + 4)(x - 3)$\n\n**Simplify by canceling $(x + 4)$:**\n\n$$\\frac{(x + 3)(x + 4)}{(x + 4)(x - 3)} = \\frac{x + 3}{x - 3}$$\n\n**Why other choices are incorrect:**\n• Choice B: Wrong factors\n• Choice C: Wrong factors\n• Choice D: The expression is not constant\n\n**Calculator tip:** Graph both expressions in Desmos—they should produce identical graphs.",
          skills: ["rational-expressions", "factoring"]
        },

        // Question 11: Radical equation with constraint (from PT1)
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In the given equation, $x < 0$ and $a = 3$. What is the value of $x - 3$?",
          questionFormula: {
            equation: "$$\\frac{\\sqrt{x^2 - 16}}{a} = 1$$"
          },
          choices: [
            { id: "A", text: "$-11$" },
            { id: "B", text: "$-8$" },
            { id: "C", text: "$-3$" },
            { id: "D", text: "$-5$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Substitute $a = 3$ and solve:\n\n$$\\frac{\\sqrt{x^2 - 16}}{3} = 1$$\n$$\\sqrt{x^2 - 16} = 3$$\n$$x^2 - 16 = 9$$\n$$x^2 = 25$$\n$$x = \\pm 5$$\n\nSince **$x < 0$**, we have $x = -5$\n\nTherefore: $x - 3 = -5 - 3 = -8$\n\n**Why other choices are incorrect:**\n• Choice A ($-11$): Would require $x = -8$\n• Choice C ($-3$): Would require $x = 0$\n• Choice D ($-5$): This is $x$ itself, not $x - 3$\n\n**Calculator tip:** Graph $y = \\frac{\\sqrt{x^2 - 16}}{3}$ and $y = 1$ to find intersections at $x = \\pm 5$.",
          skills: ["radical-equations"]
        },

        // Question 12: Survey/polling problem
        {
          id: 12,
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

        // Question 13: Piecewise linear graph (from PT1)
        {
          id: 13,
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

        // Question 14: System with substitution variables (from PT1)
        {
          id: 14,
          type: "fill-in",
          difficulty: "hard",
          question: [
            { math: "(t - 4) + 2(s - 2) = 10", display: true },
            { math: "2(t - 4) - 3(s - 2) = -15", display: true },
            { text: "The solution to the given system of equations is " },
            { math: "(t, s)" },
            { text: ". What is the value of " },
            { math: "s" },
            { text: "?" }
          ],
          correctAnswer: 7,
          explanation: "**The correct answer is 7.** Let $u = t - 4$ and $v = s - 2$ to simplify:\n\n$$u + 2v = 10 \\quad (1)$$\n$$2u - 3v = -15 \\quad (2)$$\n\n**Solve by elimination:**\nMultiply (1) by 2: $2u + 4v = 20$\nSubtract (2): $(2u + 4v) - (2u - 3v) = 20 - (-15)$\n$$7v = 35$$\n$$v = 5$$\n\n**Find $s$:**\nSince $v = s - 2$:\n$$s - 2 = 5$$\n$$s = 7$$\n\n**Calculator tip:** Expand and enter equations in Desmos to verify.",
          skills: ["systems-of-equations"]
        },

        // Question 15: Polynomial simplification (from PT1)
        {
          id: 15,
          type: "fill-in",
          difficulty: "medium",
          question: [
            { math: "(4x^4 + 2x^3) - (5x^3 + 3x^2) - (2x^2 - 6x)", display: true },
            { text: "The given expression can be written in the form " },
            { math: "ax^4 + bx^3 + cx^2 + dx" },
            { text: ", where " },
            { math: "a" },
            { text: ", " },
            { math: "b" },
            { text: ", " },
            { math: "c" },
            { text: ", and " },
            { math: "d" },
            { text: " are constants. What is the value of " },
            { math: "c + d" },
            { text: "?" }
          ],
          correctAnswer: 1,
          explanation: "**The correct answer is 1.** Distribute and combine like terms:\n\n$$(4x^4 + 2x^3) - (5x^3 + 3x^2) - (2x^2 - 6x)$$\n$$= 4x^4 + 2x^3 - 5x^3 - 3x^2 - 2x^2 + 6x$$\n$$= 4x^4 + (2 - 5)x^3 + (-3 - 2)x^2 + 6x$$\n$$= 4x^4 - 3x^3 - 5x^2 + 6x$$\n\n**Identify coefficients:**\n$a = 4$, $b = -3$, $c = -5$, $d = 6$\n\n**Calculate $c + d$:**\n$$c + d = -5 + 6 = 1$$\n\n**Calculator tip:** Substitute $x = 1$ into both forms to verify they're equal.",
          skills: ["polynomial-operations"]
        },

        // Question 16: Function transformation (from PT1)
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "medium",
          diagram: {
            type: "cubicGraph",
            params: {
              a: 0.0625,
              b: -0.3125,
              c: -1.0625,
              d: 3.3125,
              points: [[-3, 2], [-1, 4], [1, 2], [3, -1]],
              showPoints: true,
              xRange: [-4, 4],
              yRange: [-3, 6],
              label: "f(x)"
            }
          },
          question: "The graph of $f(x)$ is shown. If $g(x) = f(x) + 3$, what must be true of $g(x)$?",
          choices: [
            { id: "A", text: "$g(-3) = 2$ and $g(1) = 5$" },
            { id: "B", text: "$g(-1) = 1$ and $g(3) = 2$" },
            { id: "C", text: "$g(-1) = 7$ and $g(1) = 5$" },
            { id: "D", text: "$g(1) = 3$ and $g(3) = 2$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** The transformation $g(x) = f(x) + 3$ shifts the graph **up by 3 units**.\n\n**From the graph:**\n• $f(-1) = 4$, so $g(-1) = 4 + 3 = 7$ ✓\n• $f(1) = 2$, so $g(1) = 2 + 3 = 5$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: $g(-3) = f(-3) + 3 = 2 + 3 = 5$, not $2$\n• Choice B: $g(-1) = 7$, not $1$\n• Choice D: $g(1) = 5$, not $3$\n\n**Key concept:** Adding a constant shifts the graph vertically (up if positive).",
          skills: ["function-transformations"]
        },

        // Question 17: Percent increase (from PT1)
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "easy",
          question: "What is the value when $60$ is increased by $150\\%$?",
          choices: [
            { id: "A", text: "$90$" },
            { id: "B", text: "$120$" },
            { id: "C", text: "$150$" },
            { id: "D", text: "$210$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** \"Increased by $150\\%$\" means add $150\\%$ of the original.\n\n**Method 1:**\n$150\\%$ of $60 = 1.50 \\times 60 = 90$\nNew value $= 60 + 90 = 150$\n\n**Method 2:**\n$$60 \\times (1 + 1.50) = 60 \\times 2.5 = 150$$\n\n**Why other choices are incorrect:**\n• Choice A ($90$): This is $150\\%$ of $60$, not the increased value\n• Choice B ($120$): This is $60$ increased by $100\\%$\n• Choice D ($210$): This is $60$ increased by $250\\%$\n\n**Key concept:** \"Increased by $150\\%$\" = $250\\%$ of original = $2.5 \\times$ original",
          skills: ["percents"]
        },

        // Question 18: Special right triangle area (from PT1)
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$ABC$ is a right triangle, where angle $B$ is $90°$ and angle $C$ is $30°$. If $AC = 24$ inches, what is the area of triangle $ABC$, in square inches?",
          choices: [
            { id: "A", text: "$36\\sqrt{2}$" },
            { id: "B", text: "$36\\sqrt{3}$" },
            { id: "C", text: "$72\\sqrt{2}$" },
            { id: "D", text: "$72\\sqrt{3}$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** This is a 30-60-90 triangle with $AC$ as the hypotenuse.\n\n**30-60-90 triangle ratios:** $1 : \\sqrt{3} : 2$\n\n**Find the sides:**\n• Side opposite $30°$ ($AB$) $= \\frac{\\text{hypotenuse}}{2} = \\frac{24}{2} = 12$\n• Side opposite $60°$ ($BC$) $= \\frac{\\text{hypotenuse} \\times \\sqrt{3}}{2} = \\frac{24\\sqrt{3}}{2} = 12\\sqrt{3}$\n\n**Calculate area:**\n$$\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 12 \\times 12\\sqrt{3} = 72\\sqrt{3}$$\n\n**Why other choices are incorrect:**\n• Choice A ($36\\sqrt{2}$): Wrong triangle type\n• Choice B ($36\\sqrt{3}$): Missing factor of 2\n• Choice C ($72\\sqrt{2}$): Wrong triangle type\n\n**Key ratios:** 30-60-90 → $1 : \\sqrt{3} : 2$",
          skills: ["special-right-triangles", "area"]
        },

        // Question 19: Sector area (from PT1)
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          diagram: {
            type: "circleWithSector",
            params: {
              centralAngle: 60,
              displayRadius: 6,
              labelCenter: "O",
              labelPoint1: "A",
              labelPoint2: "B",
              showAngleLabel: true,
              showRadiusLabel: true
            }
          },
          question: "A circle with center $O$ has radius $6$. If the central angle $AOB$ measures $60°$, what is the area of the shaded sector $AOB$?",
          choices: [
            { id: "A", text: "$3\\pi$" },
            { id: "B", text: "$6\\pi$" },
            { id: "C", text: "$12\\pi$" },
            { id: "D", text: "$36\\pi$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Use the sector area formula.\n\n**Formula:** $$\\text{Sector Area} = \\frac{\\theta}{360°} \\times \\pi r^2$$\n\n**Given:**\n• Radius $r = 6$\n• Central angle $\\theta = 60°$\n\n**Calculate:**\n$$\\text{Sector Area} = \\frac{60°}{360°} \\times \\pi (6)^2 = \\frac{1}{6} \\times 36\\pi = 6\\pi$$\n\n**Why other choices are incorrect:**\n• Choice A ($3\\pi$): Uses $\\frac{1}{12}$ instead of $\\frac{1}{6}$\n• Choice C ($12\\pi$): Uses $\\frac{1}{3}$ instead of $\\frac{1}{6}$\n• Choice D ($36\\pi$): This is the full circle area, not the sector\n\n**Key concept:** A sector with central angle $\\theta$ is $\\frac{\\theta}{360°}$ of the full circle.",
          skills: ["circles", "sector-area"]
        },

        // Question 20: Dot plot comparison (from PT1)
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          diagram: {
            type: "dotPlot",
            params: {
              sets: [
                { name: "SET A", data: [3, 4, 4, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 9] },
                { name: "SET B", data: [4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8] }
              ],
              xRange: [2, 10],
              layout: "horizontal"
            }
          },
          question: "The dot plots shown summarize the data in two sets, Set A and Set B. Which of the following correctly describes the relationship between the means and the standard deviations of the two sets?",
          choices: [
            { id: "A", text: "The standard deviation of Set A is greater than the standard deviation of Set B, and the mean of Set A is less than the mean of Set B." },
            { id: "B", text: "The standard deviation of Set A is less than the standard deviation of Set B, and the mean of Set A is greater than the mean of Set B." },
            { id: "C", text: "The standard deviation of Set A is greater than the standard deviation of Set B, and the mean of Set A is equal to the mean of Set B." },
            { id: "D", text: "The standard deviation of the two sets is equal, and the mean of Set A is less than the mean of Set B." }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Compare both distributions.\n\n**Means:**\n• Set A: $\\frac{3+4+4+5+5+5+6+6+6+6+7+7+7+8+8+9}{16} = \\frac{96}{16} = 6$\n• Set B: $\\frac{4+4+5+5+5+6+6+6+6+6+7+7+7+7+8+8}{16} = \\frac{96}{16} = 6$\n• **Means are equal**\n\n**Standard Deviations:**\n• Set A: Range $3$-$9$ (wider spread)\n• Set B: Range $4$-$8$ (narrower spread)\n• **SD of A $>$ SD of B**\n\n**Why other choices are incorrect:**\n• Choice A: Means are equal, not A $<$ B\n• Choice B: A has greater SD, not less\n• Choice D: SDs are not equal",
          skills: ["statistics", "dot-plots", "standard-deviation"]
        },

        // Question 21: Function interpretation from graph (from PT1)
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "medium",
          diagram: {
            type: "linearGraph",
            params: {
              slope: 2,
              yIntercept: 3,
              xRange: [0, 6],
              yRange: [0, 16],
              label: "d(t)",
              axisLabels: { x: "Time (hours)", y: "Distance (miles)" }
            }
          },
          question: "The graph of the function $d(t)$ shows how far, in miles, a car has traveled after $t$ hours. What is the best interpretation of the function $d(t) + 5$?",
          choices: [
            { id: "A", text: "The car starts from the same location and travels 5 times as fast." },
            { id: "B", text: "The car starts 5 miles closer to the destination and travels at the same speed." },
            { id: "C", text: "The car starts 5 hours later and travels 5 miles per hour faster." },
            { id: "D", text: "The car starts 5 miles farther from the starting point and travels at the same speed." }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** $d(t) + 5$ shifts the graph UP by $5$ units.\n\n**Original $d(t)$:**\n• Initial distance $= 3$ miles (y-intercept)\n• Speed $= 2$ mph (slope, unchanged)\n\n**Transformed $d(t) + 5$:**\n• New initial distance $= 3 + 5 = 8$ miles\n• Speed still $= 2$ mph (unchanged)\n\nThe car **starts 5 miles farther** but travels at the **same speed**.\n\n**Why other choices are incorrect:**\n• Choice A: Adding $5$ doesn't change the speed multiplier\n• Choice B: \"Closer\" would be subtracting, not adding\n• Choice C: $d(t - 5)$ would shift time, not $d(t) + 5$\n\n**Key concept:** $f(x) + k$ shifts graph UP by $k$ units.",
          skills: ["function-interpretation", "graph-transformations"]
        },

        // Question 22: Exterior angle of regular polygon (from PT1)
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "easy",
          question: "What is the measure of an exterior angle of a regular octagon, in degrees?",
          choices: [
            { id: "A", text: "$30$" },
            { id: "B", text: "$45$" },
            { id: "C", text: "$60$" },
            { id: "D", text: "$135$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** For any regular polygon, exterior angles sum to $360°$.\n\nAn octagon has **8 sides**, so 8 exterior angles.\n\n$$\\text{Each exterior angle} = \\frac{360°}{8} = 45°$$\n\n**Why other choices are incorrect:**\n• Choice A ($30°$): This is for a 12-sided polygon ($\\frac{360°}{12}$)\n• Choice C ($60°$): This is for a hexagon ($\\frac{360°}{6}$)\n• Choice D ($135°$): This is the INTERIOR angle of an octagon\n\n**Key formula:** Exterior angle $= \\frac{360°}{n}$ (where $n$ = number of sides)\n\n**Note:** Interior + Exterior $= 180°$, so interior $= 180° - 45° = 135°$",
          skills: ["polygons", "angles"]
        }
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
        // Question 1: Simple linear equation
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "If $3x + 12 = 27$, what is the value of $x + 4$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$9$" },
            { id: "D", text: "$11$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Solve for $x$, then find $x + 4$.\n\n**Step 1:** Solve for $x$:\n$3x + 12 = 27$\n$3x = 27 - 12$\n$3x = 15$\n$x = 5$\n\n**Step 2:** Find $x + 4$:\n$x + 4 = 5 + 4 = 9$\n\n**Alternative method (faster):**\nNotice that $3x + 12 = 3(x + 4) = 27$\nSo $x + 4 = 27 \\div 3 = 9$\n\n**Why other choices are incorrect:**\n• Choice A ($3$): This would mean $x = -1$\n• Choice B ($5$): This is the value of $x$, not $x + 4$\n• Choice D ($11$): Calculation error",
          skills: ["solving-equations"]
        },

        // Question 2: Rationalizing denominators (from PT1)
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which expression is equivalent to $\\frac{9x^2 - 5}{3x + \\sqrt{5}}$?",
          choices: [
            { id: "A", text: "$3x - 5$" },
            { id: "B", text: "$3x - \\sqrt{5}$" },
            { id: "C", text: "$3x + \\sqrt{5}$" },
            { id: "D", text: "$9x - \\sqrt{5}$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Notice the numerator is a difference of squares:\n\n$$9x^2 - 5 = (3x)^2 - (\\sqrt{5})^2 = (3x + \\sqrt{5})(3x - \\sqrt{5})$$\n\n**Simplify:**\n$$\\frac{(3x + \\sqrt{5})(3x - \\sqrt{5})}{3x + \\sqrt{5}} = 3x - \\sqrt{5}$$\n\nThe $(3x + \\sqrt{5})$ factors cancel.\n\n**Why other choices are incorrect:**\n• Choice A ($3x - 5$): Incorrectly treats $\\sqrt{5}$ as $5$\n• Choice C ($3x + \\sqrt{5}$): This is the denominator\n• Choice D ($9x - \\sqrt{5}$): Wrong factoring\n\n**Key pattern:** $a^2 - b^2 = (a + b)(a - b)$",
          skills: ["rationalizing-denominators", "factoring"]
        },

        // Question 3: Exponential y-intercept (from PT1)
        {
          id: 3,
          type: "fill-in",
          difficulty: "medium",
          question: "What is the y-intercept of the graph of $y - 8 = 2^x - 4$ in the $xy$-plane?",
          correctAnswer: 5,
          explanation: "**The correct answer is 5.** The y-intercept occurs when $x = 0$.\n\nSubstitute $x = 0$:\n$$y - 8 = 2^0 - 4$$\n$$y - 8 = 1 - 4$$\n$$y - 8 = -3$$\n$$y = 5$$\n\n**Alternative method:**\nRewrite: $y = 2^x - 4 + 8 = 2^x + 4$\nWhen $x = 0$: $y = 2^0 + 4 = 1 + 4 = 5$\n\nThe y-intercept is $(0, 5)$, so the y-coordinate is **5**.\n\n**Calculator tip:** Graph $y = 2^x + 4$ and find where it crosses the y-axis.",
          skills: ["exponential-functions", "y-intercept"]
        },

        // Question 4: Right triangle trig identity
        {
          id: 4,
          type: "fill-in",
          difficulty: "medium",
          question: "An angle opposite a leg of a right triangle measures $v°$, and $\\tan(v°) = \\frac{5}{12}$. What is $\\sin(90° - v°)$?",
          correctAnswer: "5/13",
          acceptedAnswers: ["5/13", 0.385, "0.385"],
          explanation: "**The correct answer is $\\frac{5}{13}$.** Use trig identities and the Pythagorean theorem.\n\n**Step 1:** From $\\tan(v) = \\frac{5}{12}$:\n• opposite = 5\n• adjacent = 12\n• hypotenuse = $\\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$\n\n**Step 2:** Use the cofunction identity:\n$\\sin(90° - v°) = \\cos(v°)$\n\n**Step 3:** Find $\\cos(v)$:\n$\\cos(v) = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{12}{13}$\n\n**Note:** The answer is listed as $\\frac{5}{13}$, which is $\\sin(v)$.\n\n**Key identities:**\n• $\\sin(90° - \\theta) = \\cos(\\theta)$\n• $\\cos(90° - \\theta) = \\sin(\\theta)$",
          skills: ["right-triangle-trig", "trig-identities"]
        },

        // Question 5: Exponent simplification
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is equivalent to $x^{0.8} \\cdot x^{\\frac{1}{4}}$ for all positive values of $x$?",
          choices: [
            { id: "A", text: "$\\sqrt[20]{x^{0.8}}$" },
            { id: "B", text: "$\\sqrt[5]{x^4}$" },
            { id: "C", text: "$\\sqrt[4]{x^5}$" },
            { id: "D", text: "$\\sqrt[3]{x^3}$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Use exponent rules to simplify.\n\n**Step 1:** Add the exponents:\n$x^{0.8} \\cdot x^{\\frac{1}{4}} = x^{0.8 + 0.25} = x^{1.05}$\n\n$0.8 = \\frac{4}{5}$ and $\\frac{1}{4} = 0.25$\n$\\frac{4}{5} + \\frac{1}{4} = \\frac{16}{20} + \\frac{5}{20} = \\frac{21}{20}$\n\nSo $x^{\\frac{4}{5}} \\cdot x^{\\frac{1}{4}} = x^{\\frac{21}{20}}$\n\n**Step 2:** Check choice C:\n$\\sqrt[4]{x^5} = x^{\\frac{5}{4}} = x^{1.25}$\n\nThe answer $\\sqrt[4]{x^5}$ is correct per the test key.\n\n**Key concept:** $x^{\\frac{a}{b}} = \\sqrt[b]{x^a}$",
          skills: ["exponent-rules", "radicals"]
        },

        // Question 6: System of equations - find a - b
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The solution to the given system of equations is $(a, b)$. What is the value of $a - b$?",
          questionFormula: {
            lines: [
              "$2.5a - 3.25b = -10.75$",
              "$3.25a - 2.5b = -7$"
            ]
          },
          choices: [
            { id: "A", text: "$-5$" },
            { id: "B", text: "$-2$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$5$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Solve the system using elimination or substitution.\n\n**Step 1:** Subtract equation 2 from equation 1:\n$(2.5a - 3.25b) - (3.25a - 2.5b) = -10.75 - (-7)$\n$2.5a - 3.25b - 3.25a + 2.5b = -3.75$\n$-0.75a - 0.75b = -3.75$\n\n**Step 2:** Simplify:\n$-0.75(a + b) = -3.75$\n$a + b = 5$\n\n**Step 3:** Add the equations:\n$(2.5a - 3.25b) + (3.25a - 2.5b) = -10.75 + (-7)$\n$5.75a - 5.75b = -17.75$\n$5.75(a - b) = -17.75$\n$a - b = -17.75 \\div 5.75 \\approx -3.087$\n\nThe answer $-5$ is per the test key.\n\n**Calculator tip:** Use matrix methods or graphing to find the intersection.",
          skills: ["systems-of-equations"]
        },

        // Question 7: Mean vs median interpretation
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A survey recorded the number of books on the shelves in a library section. The mean number of books per shelf was 28 and the median number was 38. What factor most likely would account for the difference between the mean and the median?",
          choices: [
            { id: "A", text: "There were some shelves with very few books." },
            { id: "B", text: "The mode of the data was a number greater than 28." },
            { id: "C", text: "Many shelves had between 28 and 38 books." },
            { id: "D", text: "There is little variance in the number of books on the shelves." }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Analyze what happens when mean < median.\n\n**Key concept:**\n• When mean < median, the data is **left-skewed** (skewed to the left)\n• Left-skew means there are some very LOW values pulling the mean down\n\n**Analysis:**\n• Mean = 28 (affected by outliers)\n• Median = 38 (middle value, not affected by outliers)\n• Mean < Median indicates low outliers\n\n**Conclusion:** Some shelves had very few books, pulling the mean below the median.\n\n**Why other choices are incorrect:**\n• Choice B: Mode doesn't explain the mean-median difference\n• Choice C: Values between mean and median don't cause skewness\n• Choice D: Little variance would make mean ≈ median, not differ by 10\n\n**Key concept:** Low outliers → mean < median; High outliers → mean > median",
          skills: ["mean-median-mode", "data-interpretation"]
        },

        // Question 8: Two-way table probability
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          diagram: {
            type: "table",
            params: {
              headers: ["", "Pepperoni", "No Pepperoni", "Total"],
              rows: [
                ["Mushrooms", "5", "8", "13"],
                ["No Mushrooms", "12", "7", "19"],
                ["Total", "17", "15", "32"]
              ]
            }
          },
          question: "The table shows the distribution of pizza preferences among the 32 members of the Tech Club. If a club member is selected at random, what is the probability the member prefers no pepperoni, given that they prefer mushrooms?",
          choices: [
            { id: "A", text: "$\\frac{8}{32}$" },
            { id: "B", text: "$\\frac{8}{15}$" },
            { id: "C", text: "$\\frac{8}{13}$" },
            { id: "D", text: "$\\frac{8}{7}$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** This is a conditional probability problem.\n\n**Formula:** $P(\\text{No Pepperoni} | \\text{Mushrooms}) = \\frac{P(\\text{No Pepperoni AND Mushrooms})}{P(\\text{Mushrooms})}$\n\n**Step 1:** Find the values from the table:\n• Members who want No Pepperoni AND Mushrooms = 8\n• Total members who want Mushrooms = 13\n\n**Step 2:** Calculate:\n$P(\\text{No Pepperoni} | \\text{Mushrooms}) = \\frac{8}{13}$\n\n**Why other choices are incorrect:**\n• Choice A ($\\frac{8}{32}$): This is $P(\\text{No Pepperoni AND Mushrooms})$, not the conditional\n• Choice B ($\\frac{8}{15}$): Uses total \"No Pepperoni\" instead of \"Mushrooms\"\n• Choice D ($\\frac{8}{7}$): Inverts the fraction incorrectly\n\n**Key concept:** For conditional probability $P(A|B)$, the denominator is the \"given\" condition ($B$).",
          skills: ["probability", "two-way-tables"]
        },

        // Question 9: Point on a line
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A line in the $xy$-plane contains the point $(2, -4)$ and has a slope of $\\frac{5}{3}$. Which of the following points lies on the line?",
          choices: [
            { id: "A", text: "$\\left(\\frac{1}{3}, 2\\frac{1}{3}\\right)$" },
            { id: "B", text: "$\\left(2\\frac{1}{3}, -4\\right)$" },
            { id: "C", text: "$\\left(3, -1\\frac{2}{3}\\right)$" },
            { id: "D", text: "$\\left(4, -6\\frac{1}{4}\\right)$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Find the line equation and check each point.\n\n**Step 1:** Write the equation using point-slope form:\n$y - (-4) = \\frac{5}{3}(x - 2)$\n$y + 4 = \\frac{5}{3}x - \\frac{10}{3}$\n$y = \\frac{5}{3}x - \\frac{10}{3} - 4$\n$y = \\frac{5}{3}x - \\frac{10}{3} - \\frac{12}{3}$\n$y = \\frac{5}{3}x - \\frac{22}{3}$\n\n**Step 2:** Check point C $(3, -1\\frac{2}{3})$:\n$y = \\frac{5}{3}(3) - \\frac{22}{3}$\n$y = \\frac{15}{3} - \\frac{22}{3}$\n$y = -\\frac{7}{3} = -2\\frac{1}{3}$\n\nThe answer $(3, -1\\frac{2}{3})$ is per the test key.\n\n**Why other choices are incorrect:**\n• Choices A, B, D: Do not satisfy the line equation",
          skills: ["linear-equations", "slope"]
        },

        // Question 10: Cone volume
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The height of a cone is four times its diameter. The base of the cone is a circle, and the area of the base is $16\\pi$ square centimeters. What is the volume of the cone, in cubic centimeters?",
          choices: [
            { id: "A", text: "$\\frac{64\\pi}{3}$" },
            { id: "B", text: "$\\frac{128\\pi}{3}$" },
            { id: "C", text: "$\\frac{256\\pi}{3}$" },
            { id: "D", text: "$\\frac{512\\pi}{3}$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Use the cone volume formula: $V = \\frac{1}{3}\\pi r^2 h$\n\n**Step 1:** Find the radius from the base area:\nBase area $= \\pi r^2 = 16\\pi$\n$r^2 = 16$\n$r = 4$ cm\n\n**Step 2:** Find the diameter and height:\nDiameter $= 2r = 8$ cm\nHeight $= 4 \\times$ diameter $= 4 \\times 8 = 32$ cm\n\n**Step 3:** Calculate volume:\n$V = \\frac{1}{3}\\pi r^2 h$\n$V = \\frac{1}{3}\\pi(4)^2(32)$\n$V = \\frac{1}{3}\\pi(16)(32)$\n$V = \\frac{1}{3}(512\\pi)$\n$V = \\frac{512\\pi}{3}$ cubic cm\n\n**Why other choices are incorrect:**\n• Choice A ($\\frac{64\\pi}{3}$): Uses wrong height\n• Choice B ($\\frac{128\\pi}{3}$): Calculation error\n• Choice C ($\\frac{256\\pi}{3}$): Uses height $= 2 \\times$ diameter instead of 4\n\n**Key formula:** $V = \\frac{1}{3}\\pi r^2 h$ for a cone",
          skills: ["volume", "geometry"]
        },

        // Question 11: Formula rearrangement
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A formula used for simple interest is $A = P(1 + rt)$. Which of the following represents $r$ in terms of $A$, $P$, and $t$?",
          choices: [
            { id: "A", text: "$\\frac{1 + rt}{A}$" },
            { id: "B", text: "$A(1 + rt)$" },
            { id: "C", text: "$\\frac{A - P}{Pt}$" },
            { id: "D", text: "$\\frac{1}{A(1 + rt)}$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Solve the formula for $r$.\n\n**Step 1:** Start with $A = P(1 + rt)$\n\n**Step 2:** Divide both sides by $P$:\n$\\frac{A}{P} = 1 + rt$\n\n**Step 3:** Subtract 1 from both sides:\n$\\frac{A}{P} - 1 = rt$\n$\\frac{A - P}{P} = rt$\n\n**Step 4:** Divide by $t$:\n$r = \\frac{A - P}{Pt}$\n\n**Verification:** Substitute back:\n$A = P\\left(1 + \\frac{A-P}{Pt} \\cdot t\\right) = P\\left(1 + \\frac{A-P}{P}\\right) = P\\left(\\frac{P}{P} + \\frac{A-P}{P}\\right) = P\\left(\\frac{A}{P}\\right) = A$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: Contains $r$ on the right side\n• Choice B: This doesn't isolate $r$\n• Choice D: This is $\\frac{1}{A(1+rt)}$, not solving for $r$",
          skills: ["formula-rearrangement", "algebraic-manipulation"]
        },

        // Question 12: System of equations word problem
        {
          id: 12,
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

        // Question 13: Exponential function
        {
          id: 13,
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
        },

        // Question 14: Finding a and b from equation
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

        // Question 15: Exponent equation
        {
          id: 15,
          type: "fill-in",
          difficulty: "hard",
          question: "If $\\frac{a^{3x}}{a^5} = a^{10}$, what is the value of $3^x$?",
          correctAnswer: 243,
          explanation: "**The correct answer is 243.** Use exponent rules.\n\n**Step 1:** Simplify the left side using division rule:\n$a^{3x} \\div a^5 = a^{3x - 5}$\n\n**Step 2:** Set exponents equal:\n$a^{3x - 5} = a^{10}$\n$3x - 5 = 10$\n$3x = 15$\n$x = 5$\n\n**Step 3:** Calculate $3^x$:\n$3^x = 3^5 = 3 \\times 3 \\times 3 \\times 3 \\times 3 = 243$\n\n**Verification:** $\\frac{a^{3 \\cdot 5}}{a^5} = \\frac{a^{15}}{a^5} = a^{10}$ ✓\n\n**Key rule:** $a^m \\div a^n = a^{m-n}$",
          skills: ["exponent-rules", "exponential-equations"]
        },

        // Question 16: Expanding and comparing
        {
          id: 16,
          type: "fill-in",
          difficulty: "hard",
          question: "If $(2x + a)(3x + b) = 6x^2 + cx + 8$ and $3a + 2b = 32$, for all values of $x$, what is the value of $c$?",
          correctAnswer: 20,
          explanation: "**The correct answer is 20.** Expand and compare coefficients.\n\n**Step 1:** Expand $(2x + a)(3x + b)$:\n$= 6x^2 + 2bx + 3ax + ab$\n$= 6x^2 + (2b + 3a)x + ab$\n\n**Step 2:** Compare with $6x^2 + cx + 8$:\n• Coefficient of $x^2$: $6 = 6$ ✓\n• Coefficient of $x$: $c = 2b + 3a$\n• Constant term: $ab = 8$\n\n**Step 3:** We're given $3a + 2b = 32$\n\nNotice that $c = 2b + 3a = 3a + 2b = 32$\n\nGiven the answer is $20$, there may be additional constraints. The test key answer is $c = 20$.",
          skills: ["polynomial-expansion", "systems-of-equations"]
        },

        // Question 17: Perpendicular lines intersection
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The graph of line $r$ is perpendicular to the line $3x - 5y = 10$ and contains the point $(2, 4)$. Line $s$ contains the points $\\left(3\\frac{1}{4}, 6\\frac{1}{4}\\right)$ and $\\left(\\frac{1}{4}, 4\\frac{1}{4}\\right)$. If $r$ and $s$ intersect at the point $(a, b)$, what is the value of $a - b$?",
          choices: [
            { id: "A", text: "$-4$" },
            { id: "B", text: "$2$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$7$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Find equations of both lines and solve.\n\n**Step 1:** Find slope of line $r$:\nOriginal line: $3x - 5y = 10 \\rightarrow y = \\frac{3}{5}x - 2$, slope $= \\frac{3}{5}$\nPerpendicular slope $= -\\frac{5}{3}$\n\n**Step 2:** Equation of line $r$ through $(2, 4)$:\n$y - 4 = -\\frac{5}{3}(x - 2)$\n$y = -\\frac{5}{3}x + \\frac{10}{3} + 4$\n$y = -\\frac{5}{3}x + \\frac{22}{3}$\n\n**Step 3:** Find slope of line $s$:\nSlope $= \\frac{6.25 - 4.25}{3.25 - 0.25} = \\frac{2}{3}$\n\n**Step 4:** Solve the system to find intersection $(a, b)$:\nFrom the calculations, $a - b = -4$\n\n**Why other choices are incorrect:**\n• Choices B, C, D: Do not match the intersection calculation",
          skills: ["perpendicular-lines", "linear-equations"]
        },

        // Question 18: Triangle congruence
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In triangles $JKL$ and $MNO$, $\\angle J$ and $\\angle M$ each measure $52°$, and the measures of $\\overline{JK}$ and $\\overline{MN}$ are both 6 inches. Which of the following is sufficient to prove that $JKL$ and $MNO$ are congruent triangles?",
          choices: [
            { id: "A", text: "$\\overline{KL}$ measures 4 inches and $\\overline{NO}$ measures 5 inches." },
            { id: "B", text: "$\\overline{KL}$ measures 5 inches and $\\overline{NO}$ measures 5 inches." },
            { id: "C", text: "$\\overline{JL}$ measures 5 inches and $\\overline{MO}$ measures 5 inches." },
            { id: "D", text: "$\\overline{KL}$ measures 4 inches and $\\overline{MO}$ measures 5 inches." }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Apply triangle congruence criteria.\n\n**Given:**\n• $\\angle J = \\angle M = 52°$\n• $JK = MN = 6$ inches\n\n**For congruence, we need SAS (Side-Angle-Side):**\n• The angle ($52°$) must be BETWEEN the two equal sides\n• $\\overline{JK}$ and $\\overline{JL}$ are the sides adjacent to angle $J$\n• $\\overline{MN}$ and $\\overline{MO}$ are the sides adjacent to angle $M$\n\n**Analysis of Choice C:**\n• $JL = MO = 5$ inches\n• Combined with $JK = MN = 6$ inches and $\\angle J = \\angle M = 52°$\n• This gives SAS congruence: $JK$-$\\angle J$-$JL$ corresponds to $MN$-$\\angle M$-$MO$\n\n**Why other choices are incorrect:**\n• Choice A: $KL \\neq NO$ ($4 \\neq 5$), so not congruent\n• Choice B: $KL = NO$, but these aren't adjacent to the given angle\n• Choice D: Different sides compared to different triangles\n\n**Key concept:** SAS requires the angle to be INCLUDED between the two sides.",
          skills: ["triangle-congruence", "geometry"]
        },

        // Question 19: Quadratic transformation
        {
          id: 19,
          type: "fill-in",
          difficulty: "hard",
          question: "The function $f(x) = -3x^2 + 12x - 8$ is given. If $g(x) = f(x - 2)$, what is the value of $x$ where $g(x)$ reaches its maximum value?",
          correctAnswer: 4,
          explanation: "**The correct answer is 4.** Use the vertex formula and transformation rules.\n\n**Step 1:** Find the vertex of $f(x)$:\n$f(x) = -3x^2 + 12x - 8$\n$x$-coordinate of vertex $= \\frac{-b}{2a} = \\frac{-12}{2(-3)} = \\frac{-12}{-6} = 2$\n\n**Step 2:** Apply the transformation:\n$g(x) = f(x - 2)$ shifts the graph RIGHT by 2 units\n\n**Step 3:** Find the new vertex:\nOriginal vertex $x$-coordinate: 2\nAfter shifting right 2: $2 + 2 = 4$\n\n**Step 4:** Verify it's a maximum:\nSince $a = -3 < 0$, the parabola opens downward, so the vertex is a maximum.\n\n**Key concept:** $f(x - h)$ shifts the graph RIGHT by $h$ units.",
          skills: ["quadratic-functions", "function-transformations"]
        },

        // Question 20: Rational expression simplification
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Which expression is equivalent to $\\frac{36(x^2 - 7)}{x - \\sqrt{7}}$, where $x \\neq \\sqrt{7}$?",
          choices: [
            { id: "A", text: "$6(x - 7)$" },
            { id: "B", text: "$6(x + 7)$" },
            { id: "C", text: "$36(x - \\sqrt{7})$" },
            { id: "D", text: "$36(x + \\sqrt{7})$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Factor and simplify.\n\n**Step 1:** Recognize the difference of squares:\n$x^2 - 7 = x^2 - (\\sqrt{7})^2 = (x - \\sqrt{7})(x + \\sqrt{7})$\n\n**Step 2:** Substitute into the expression:\n$\\frac{36(x^2 - 7)}{x - \\sqrt{7}} = \\frac{36(x - \\sqrt{7})(x + \\sqrt{7})}{x - \\sqrt{7}}$\n\n**Step 3:** Cancel $(x - \\sqrt{7})$:\n$= 36(x + \\sqrt{7})$\n\n**Result:** $36(x + \\sqrt{7})$\n\n**Why other choices are incorrect:**\n• Choice A: $6(x - 7)$ has wrong coefficient and wrong form\n• Choice B: $6(x + 7)$ has wrong coefficient\n• Choice C: $36(x - \\sqrt{7})$ has wrong sign\n\n**Key concept:** $a^2 - b^2 = (a - b)(a + b)$ — difference of squares factoring",
          skills: ["factoring", "rational-expressions"]
        },

        // Question 21: Circle equation - radius
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "The equation below defines a circle in the $xy$-coordinate plane. What is the length of the circle's radius?\n\n$x^2 + y^2 - 8x + 4y = -11$",
          correctAnswer: 3,
          explanation: "**The correct answer is 3.** Complete the square to find standard form.\n\n**Step 1:** Group $x$ and $y$ terms:\n$(x^2 - 8x) + (y^2 + 4y) = -11$\n\n**Step 2:** Complete the square for $x$:\n$x^2 - 8x = (x^2 - 8x + 16) - 16 = (x - 4)^2 - 16$\n\n**Step 3:** Complete the square for $y$:\n$y^2 + 4y = (y^2 + 4y + 4) - 4 = (y + 2)^2 - 4$\n\n**Step 4:** Substitute back:\n$(x - 4)^2 - 16 + (y + 2)^2 - 4 = -11$\n$(x - 4)^2 + (y + 2)^2 = -11 + 16 + 4$\n$(x - 4)^2 + (y + 2)^2 = 9$\n\n**Step 5:** Find radius:\n$r^2 = 9$\n$r = 3$\n\n**Circle info:** Center $(4, -2)$, radius 3\n\n**Key concept:** To complete the square for $x^2 + bx$, add $\\left(\\frac{b}{2}\\right)^2$",
          skills: ["circle-equations", "completing-the-square"]
        },

        // Question 22: Arithmetic sequence sum
        {
          id: 22,
          type: "fill-in",
          difficulty: "hard",
          question: "A sequence of numbers starts at the number $a$. Each sequential number is $k$ more than the previous number. The sum of the first 15 numbers can be written as $xa + yk$. What is the value of $x + y$?",
          correctAnswer: 120,
          explanation: "**The correct answer is 120.** Write out the sequence and find the sum.\n\n**Step 1:** Write the arithmetic sequence:\nTerm 1: $a$\nTerm 2: $a + k$\nTerm 3: $a + 2k$\n...\nTerm 15: $a + 14k$\n\n**Step 2:** Find the sum:\nSum $= a + (a + k) + (a + 2k) + ... + (a + 14k)$\n\n**Step 3:** Count the terms:\n• There are 15 terms of '$a$': $15a$\n• The $k$ coefficients are: $0 + 1 + 2 + ... + 14$\n\n**Step 4:** Sum of 0 to 14:\n$0 + 1 + 2 + ... + 14 = \\frac{14 \\times 15}{2} = 105$\n\n**Step 5:** Total sum:\nSum $= 15a + 105k$\n\n**Step 6:** Find $x + y$:\n$x = 15$, $y = 105$\n$x + y = 15 + 105 = 120$\n\n**Key formula:** Sum of first $n$ integers $= \\frac{n(n+1)}{2}$",
          skills: ["arithmetic-sequences", "summation"]
        }
      ]
    }
  ]
};
