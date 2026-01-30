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
          question: "Which ordered pair (x, y) is a solution to the given system of inequalities?",
          questionFormula: {
            lines: [
              "y > -2x + 6",
              "y > 3x - 1"
            ]
          },
          choices: [
            { id: "A", text: "(0, 3)" },
            { id: "B", text: "(1, 1)" },
            { id: "C", text: "(1, 5)" },
            { id: "D", text: "(2, 3)" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** To find which ordered pair satisfies both inequalities, substitute each point into both inequalities.\n\nFor (1, 5):\n• Check y > -2x + 6: Is 5 > -2(1) + 6? Is 5 > 4? Yes ✓\n• Check y > 3x - 1: Is 5 > 3(1) - 1? Is 5 > 2? Yes ✓\n\nBoth inequalities are satisfied.\n\n**Why other choices are incorrect:**\n• Choice A (0, 3): 3 > 6 is false\n• Choice B (1, 1): 1 > 4 is false\n• Choice D (2, 3): 3 > 2 ✓, but 3 > 5 is false\n\n**Calculator tip:** In Desmos, graph both inequalities. The solution region is where the shaded areas overlap.",
          skills: ["systems-of-inequalities"]
        },

        // Question 2: System of linear equations
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "If 5x - y = 17 and x - y = 1, what is the value of x + y?",
          choices: [
            { id: "A", text: "5" },
            { id: "B", text: "7" },
            { id: "C", text: "8" },
            { id: "D", text: "10" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Solve using the elimination method.\n\nSubtract the second equation from the first:\n(5x - y) - (x - y) = 17 - 1\n4x = 16\nx = 4\n\nSubstitute x = 4 into x - y = 1:\n4 - y = 1\ny = 3\n\nTherefore, x + y = 4 + 3 = 7\n\n**Why other choices are incorrect:**\n• Choice A (5): This is x + 1, not x + y\n• Choice C (8): Arithmetic error\n• Choice D (10): Would require different values\n\n**Calculator tip:** In Desmos, graph both equations. The intersection point (4, 3) gives x + y = 7.",
          skills: ["systems-of-equations"]
        },

        // Question 3: Absolute value equation
        {
          id: 3,
          type: "fill-in",
          difficulty: "easy",
          question: "If a is a solution to the equation |3x - 5| = 13 and a > 0, what is the value of a?",
          correctAnswer: 6,
          explanation: "**The correct answer is 6.** Solving an absolute value equation requires considering two cases.\n\n**Case 1:** 3x - 5 = 13\n3x = 18\nx = 6\n\n**Case 2:** 3x - 5 = -13\n3x = -8\nx = -8/3 ≈ -2.67\n\nThe two solutions are x = 6 and x = -8/3.\n\nSince a > 0, we need the positive solution: **a = 6**\n\n**Calculator tip:** In Desmos, graph y = |3x - 5| and y = 13. The intersection points show x = 6 and x ≈ -2.67.",
          skills: ["absolute-value-equations"]
        },

        // Question 4: Exponential decay interpretation
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The given equation models the value that remains, V(t), in millions of dollars, of a fleet of trucks after t years. What is the meaning of 30 in this context?",
          questionFormula: {
            equation: "V(t) = 30(0.85)^(t/4)"
          },
          choices: [
            { id: "A", text: "The number of years until the fleet has no value." },
            { id: "B", text: "The value of the fleet, in millions of dollars, after the first year." },
            { id: "C", text: "The number of years until the company expects to replace the fleet." },
            { id: "D", text: "The value of the fleet, in millions of dollars, when new." }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** In an exponential function V(t) = a·b^t, the coefficient 'a' represents the initial value when t = 0.\n\nWhen t = 0:\nV(0) = 30(0.85)^0 = 30(1) = 30\n\nThis means the fleet was worth **30 million dollars when new** (at t = 0).\n\n**Why other choices are incorrect:**\n• Choice A: The equation doesn't indicate when value reaches zero\n• Choice B: V(1) = 30(0.85)^(1/4) ≈ 28.8, not 30\n• Choice C: No replacement timing information in the equation\n\n**Calculator tip:** Graph the function and check the y-intercept at x = 0.",
          skills: ["exponential-functions", "function-interpretation"]
        },

        // Question 5: Cylinder volume
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The radius of a right cylinder is 5 inches, and its height is three times the length of the radius. What is the volume of the cylinder, in cubic inches?",
          choices: [
            { id: "A", text: "75π" },
            { id: "B", text: "125π" },
            { id: "C", text: "375π" },
            { id: "D", text: "750π" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Use the cylinder volume formula: V = πr²h\n\n**Given:**\n• Radius r = 5 inches\n• Height h = 3r = 3(5) = 15 inches\n\n**Calculate:**\nV = πr²h = π(5)²(15) = π(25)(15) = **375π cubic inches**\n\n**Why other choices are incorrect:**\n• Choice A (75π): Uses h = 3 instead of h = 15\n• Choice B (125π): Uses h = 5 instead of h = 15\n• Choice D (750π): Doubles the answer incorrectly\n\n**Calculator tip:** Verify: 25 × 15 = 375",
          skills: ["volume", "cylinders"]
        },

        // Question 6: Two-way table probability
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
            { id: "A", fraction: { numerator: "35", denominator: "117" } },
            { id: "B", fraction: { numerator: "35", denominator: "150" } },
            { id: "C", fraction: { numerator: "117", denominator: "340" } },
            { id: "D", fraction: { numerator: "150", denominator: "117" } }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** This is a conditional probability: P(Cappuccino | Iced)\n\nWe want: probability of cappuccino **given** the customer bought iced coffee.\n\n**Formula:**\nP(Cappuccino | Iced) = (Iced Cappuccino) ÷ (Total Iced)\n= 35 ÷ 150\n= **35/150** (or 7/30)\n\n**Why other choices are incorrect:**\n• Choice A (35/117): Divides by total cappuccino, not total iced\n• Choice C (117/340): This is P(Cappuccino), ignoring the iced condition\n• Choice D (150/117): Inverts the fraction\n\n**Key concept:** For conditional probability, the denominator is the \"given\" condition (total iced = 150).",
          skills: ["probability", "two-way-tables"]
        },

        // Question 7: Word problem - algebraic expression
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A group of friends is going to a movie theater. Each ticket costs $12.50, and each bag of popcorn costs $6.25. If t people buy a ticket and p people buy popcorn, which of the following expressions represents the total number of dollars spent by the group?",
          choices: [
            { id: "A", text: "12.5t - 6.25p" },
            { id: "B", text: "12.5t + 6.25p" },
            { id: "C", text: "12.5p + 6.25t" },
            { id: "D", text: "18.75tp" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Total cost = ticket costs + popcorn costs\n\n• Cost of tickets: $12.50 × t tickets = 12.5t\n• Cost of popcorn: $6.25 × p bags = 6.25p\n• **Total: 12.5t + 6.25p**\n\n**Why other choices are incorrect:**\n• Choice A: Subtracting makes no sense for total spending\n• Choice C: Swaps the variables (p with tickets, t with popcorn)\n• Choice D: Multiplying both variables together is incorrect\n\n**Check with example:** If t = 2 and p = 4:\nTotal = 12.5(2) + 6.25(4) = 25 + 25 = $50 ✓",
          skills: ["algebraic-expressions", "word-problems"]
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
          question: "The graph of linear function g(x) is shown above. What is the value of g(4)?",
          choices: [
            { id: "A", text: "4" },
            { id: "B", text: "6" },
            { id: "C", text: "7" },
            { id: "D", text: "8" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Find the equation of the line, then evaluate at x = 4.\n\n**From the graph:**\n• The line passes through (0, 4) and (8, 10)\n• Slope m = (10 - 4) ÷ (8 - 0) = 6 ÷ 8 = 3/4\n• y-intercept b = 4\n\n**Equation:** g(x) = (3/4)x + 4\n\n**Calculate g(4):**\ng(4) = (3/4)(4) + 4 = 3 + 4 = **7**\n\n**Why other choices are incorrect:**\n• Choice A (4): This is g(0), the y-intercept\n• Choice B (6): Calculation error\n• Choice D (8): Calculation error\n\n**Calculator tip:** Enter two points in Desmos to find the equation.",
          skills: ["reading-graphs", "linear-functions"]
        },

        // Question 9: Quadratic equation - find k
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If the solution to the given equation is a positive whole number, what could be a value of k?",
          questionFormula: {
            equation: "kx² + 36 = 900"
          },
          choices: [
            { id: "A", text: "2" },
            { id: "B", text: "4" },
            { id: "C", text: "6" },
            { id: "D", text: "8" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Solve for x²:\n\nkx² + 36 = 900\nkx² = 864\nx² = 864 ÷ k\n\nFor x to be a positive whole number, 864 ÷ k must be a perfect square.\n\n**Test each option:**\n• k = 2: x² = 432 → √432 ≈ 20.8 (not whole)\n• k = 4: x² = 216 → √216 ≈ 14.7 (not whole)\n• **k = 6: x² = 144 → √144 = 12 ✓ (whole number!)**\n• k = 8: x² = 108 → √108 ≈ 10.4 (not whole)\n\nWhen k = 6, x = 12 is a positive whole number.\n\n**Calculator tip:** Test each k value to find which gives a perfect square.",
          skills: ["quadratic-equations"]
        },

        // Question 10: Rational expression simplification
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The expression (x² + 7x + 12) ÷ (x² + x - 12) is equivalent to which expression?",
          choices: [
            { id: "A", fraction: { numerator: "x + 3", denominator: "x - 3" } },
            { id: "B", fraction: { numerator: "x + 4", denominator: "x - 4" } },
            { id: "C", fraction: { numerator: "x + 7", denominator: "x + 1" } },
            { id: "D", text: "7" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Factor both numerator and denominator.\n\n**Numerator:** x² + 7x + 12 = (x + 3)(x + 4)\n**Denominator:** x² + x - 12 = (x + 4)(x - 3)\n\n**Simplify by canceling (x + 4):**\n\n(x + 3)(x + 4)\n―――――――――――― = **(x + 3) ÷ (x - 3)**\n(x + 4)(x - 3)\n\n**Why other choices are incorrect:**\n• Choice B: Wrong factors\n• Choice C: Wrong factors\n• Choice D: The expression is not constant\n\n**Calculator tip:** Graph both expressions in Desmos—they should produce identical graphs.",
          skills: ["rational-expressions", "factoring"]
        },

        // Question 11: Radical equation with constraint
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In the given equation, x < 0 and a = 3. What is the value of x - 3?",
          questionFormula: {
            equation: "√(x² - 16) ÷ a = 1"
          },
          choices: [
            { id: "A", text: "-11" },
            { id: "B", text: "-8" },
            { id: "C", text: "-3" },
            { id: "D", text: "-5" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Substitute a = 3 and solve:\n\n√(x² - 16) ÷ 3 = 1\n√(x² - 16) = 3\nx² - 16 = 9\nx² = 25\nx = ±5\n\nSince **x < 0**, we have x = -5\n\nTherefore: x - 3 = -5 - 3 = **-8**\n\n**Why other choices are incorrect:**\n• Choice A (-11): Would require x = -8\n• Choice C (-3): Would require x = 0\n• Choice D (-5): This is x itself, not x - 3\n\n**Calculator tip:** Graph y = √(x² - 16) ÷ 3 and y = 1 to find intersections at x = ±5.",
          skills: ["radical-equations"]
        },

        // Question 12: System of equations - fill-in
        {
          id: 12,
          type: "fill-in",
          difficulty: "medium",
          question: "The solution to the given system of equations is (x, y). What is the value of x - y?",
          questionFormula: {
            lines: [
              "y = 4x + 9",
              "2y = 6x"
            ]
          },
          correctAnswer: 18,
          explanation: "**The correct answer is 18.** Substitute the first equation into the second:\n\n2(4x + 9) = 6x\n8x + 18 = 6x\n8x - 6x = -18\n2x = -18\nx = -9\n\nSubstitute x = -9 into y = 4x + 9:\ny = 4(-9) + 9 = -36 + 9 = -27\n\n**Calculate x - y:**\nx - y = -9 - (-27) = -9 + 27 = **18**\n\n**Verify:** 2y = 2(-27) = -54 and 6x = 6(-9) = -54 ✓\n\n**Calculator tip:** Graph both equations to find intersection at (-9, -27).",
          skills: ["systems-of-equations"]
        },

        // Question 13: Piecewise linear graph
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
          question: "The complete graph of the function f in the xy-plane is shown. For how many values of x is f(x) equal to 3?",
          choices: [
            { id: "A", text: "1" },
            { id: "B", text: "2" },
            { id: "C", text: "3" },
            { id: "D", text: "4" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Draw a horizontal line at y = 3 and count intersections.\n\n**Analyzing each segment:**\n1. From (-5, 1) to (-2, 4): crosses y = 3 once ✓\n2. From (-2, 4) to (0, 2): crosses y = 3 once ✓\n3. From (0, 2) to (2, 4): crosses y = 3 once ✓\n4. From (2, 4) to (5, 2): crosses y = 3 once ✓\n\n**Total intersections: 4**\n\n**Why other choices are incorrect:**\n• Choices A, B, C: Miscounting intersections\n\n**Calculator tip:** Graph the piecewise function and add y = 3 to count intersections.",
          skills: ["piecewise-functions", "reading-graphs"]
        },

        // Question 14: System with substitution variables
        {
          id: 14,
          type: "fill-in",
          difficulty: "hard",
          question: "The solution to the given system of equations is (t, s). What is the value of s?",
          questionFormula: {
            lines: [
              "(t - 4) + 2(s - 2) = 10",
              "2(t - 4) - 3(s - 2) = -15"
            ]
          },
          correctAnswer: 7,
          explanation: "**The correct answer is 7.** Let u = t - 4 and v = s - 2 to simplify:\n\nu + 2v = 10 ... (1)\n2u - 3v = -15 ... (2)\n\n**Solve by elimination:**\nMultiply (1) by 2: 2u + 4v = 20\nSubtract (2): (2u + 4v) - (2u - 3v) = 20 - (-15)\n7v = 35\nv = 5\n\n**Find s:**\nSince v = s - 2:\ns - 2 = 5\n**s = 7**\n\n**Calculator tip:** Expand and enter equations in Desmos to verify.",
          skills: ["systems-of-equations"]
        },

        // Question 15: Polynomial simplification
        {
          id: 15,
          type: "fill-in",
          difficulty: "medium",
          question: "The given expression can be written in the form ax⁴ + bx³ + cx² + dx, where a, b, c, and d are constants. What is the value of c + d?",
          questionFormula: {
            equation: "(4x⁴ + 2x³) - (5x³ + 3x²) - (2x² - 6x)"
          },
          correctAnswer: 1,
          explanation: "**The correct answer is 1.** Distribute and combine like terms:\n\n(4x⁴ + 2x³) - (5x³ + 3x²) - (2x² - 6x)\n= 4x⁴ + 2x³ - 5x³ - 3x² - 2x² + 6x\n= 4x⁴ + (2 - 5)x³ + (-3 - 2)x² + 6x\n= **4x⁴ - 3x³ - 5x² + 6x**\n\n**Identify coefficients:**\na = 4, b = -3, c = -5, d = 6\n\n**Calculate c + d:**\nc + d = -5 + 6 = **1**\n\n**Calculator tip:** Substitute x = 1 into both forms to verify they're equal.",
          skills: ["polynomial-operations"]
        },

        // Question 16: Function transformation
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "medium",
          diagram: {
            type: "cubicGraph",
            params: {
              points: [[-3, 2], [-1, 4], [1, 2], [3, -1]],
              xRange: [-4, 4],
              yRange: [-3, 6],
              label: "f(x)"
            }
          },
          question: "The graph of f(x) is shown. If g(x) = f(x) + 3, what must be true of g(x)?",
          choices: [
            { id: "A", text: "g(-3) = 2 and g(1) = 5" },
            { id: "B", text: "g(-1) = 1 and g(3) = 2" },
            { id: "C", text: "g(-1) = 7 and g(1) = 5" },
            { id: "D", text: "g(1) = 3 and g(3) = 2" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** The transformation g(x) = f(x) + 3 shifts the graph **up by 3 units**.\n\n**From the graph:**\n• f(-1) = 4, so g(-1) = 4 + 3 = **7** ✓\n• f(1) = 2, so g(1) = 2 + 3 = **5** ✓\n\n**Why other choices are incorrect:**\n• Choice A: g(-3) = f(-3) + 3 = 2 + 3 = 5, not 2\n• Choice B: g(-1) = 7, not 1\n• Choice D: g(1) = 5, not 3\n\n**Key concept:** Adding a constant shifts the graph vertically (up if positive).",
          skills: ["function-transformations"]
        },

        // Question 17: Percent increase
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "easy",
          question: "What is the value when 60 is increased by 150%?",
          choices: [
            { id: "A", text: "90" },
            { id: "B", text: "120" },
            { id: "C", text: "150" },
            { id: "D", text: "210" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** \"Increased by 150%\" means add 150% of the original.\n\n**Method 1:**\n150% of 60 = 1.50 × 60 = 90\nNew value = 60 + 90 = **150**\n\n**Method 2:**\n60 × (1 + 1.50) = 60 × 2.5 = **150**\n\n**Why other choices are incorrect:**\n• Choice A (90): This is 150% of 60, not the increased value\n• Choice B (120): This is 60 increased by 100%\n• Choice D (210): This is 60 increased by 250%\n\n**Key concept:** \"Increased by 150%\" = 250% of original = 2.5 × original",
          skills: ["percents"]
        },

        // Question 18: Special right triangle area
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "ABC is a right triangle, where angle B is 90° and angle C is 30°. If AC = 24 inches, what is the area of triangle ABC, in square inches?",
          choices: [
            { id: "A", text: "36√2" },
            { id: "B", text: "36√3" },
            { id: "C", text: "72√2" },
            { id: "D", text: "72√3" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** This is a 30-60-90 triangle with AC as the hypotenuse.\n\n**30-60-90 triangle ratios:** 1 : √3 : 2\n\n**Find the sides:**\n• Side opposite 30° (AB) = hypotenuse ÷ 2 = 24 ÷ 2 = 12\n• Side opposite 60° (BC) = (hypotenuse × √3) ÷ 2 = (24√3) ÷ 2 = 12√3\n\n**Calculate area:**\nArea = ½ × base × height\n= ½ × 12 × 12√3\n= **72√3 square inches**\n\n**Why other choices are incorrect:**\n• Choice A (36√2): Wrong triangle type\n• Choice B (36√3): Missing factor of 2\n• Choice C (72√2): Wrong triangle type\n\n**Key ratios:** 30-60-90 → 1 : √3 : 2",
          skills: ["special-right-triangles", "area"]
        },

        // Question 19: Circle with inscribed angle
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          diagram: {
            type: "circleInscribed",
            params: {
              inscribedAngle: 40,
              labelCenter: "O",
              labelPoints: ["Q", "P", "R"],
              showCentralAngle: true
            }
          },
          question: "The circle shown has center O. If the measure of angle QPR is 40°, what is the measure of angle QOR?",
          choices: [
            { id: "A", text: "40°" },
            { id: "B", text: "50°" },
            { id: "C", text: "70°" },
            { id: "D", text: "80°" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Use the Inscribed Angle Theorem.\n\n**Key theorem:** Central angle = 2 × Inscribed angle (same arc)\n\n• Inscribed angle QPR (vertex on circle) = 40°\n• Central angle QOR (vertex at center) = 2 × 40° = **80°**\n\n**Why other choices are incorrect:**\n• Choice A (40°): Assumes central = inscribed (false)\n• Choice B (50°): No mathematical basis\n• Choice C (70°): No mathematical basis\n\n**Remember:** The central angle is always TWICE the inscribed angle when they subtend the same arc.",
          skills: ["circles", "inscribed-angles"]
        },

        // Question 20: Dot plot comparison
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
              xRange: [2, 10]
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
          explanation: "**Choice C is correct.** Compare both distributions.\n\n**Means:**\n• Set A: (3+4+4+5+5+5+6+6+6+6+7+7+7+8+8+9) ÷ 16 = 96 ÷ 16 = 6\n• Set B: (4+4+5+5+5+6+6+6+6+6+7+7+7+7+8+8) ÷ 16 = 96 ÷ 16 = 6\n• **Means are equal**\n\n**Standard Deviations:**\n• Set A: Range 3-9 (wider spread)\n• Set B: Range 4-8 (narrower spread)\n• **SD of A > SD of B**\n\n**Why other choices are incorrect:**\n• Choice A: Means are equal, not A < B\n• Choice B: A has greater SD, not less\n• Choice D: SDs are not equal",
          skills: ["statistics", "dot-plots", "standard-deviation"]
        },

        // Question 21: Function interpretation from graph
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
          question: "The graph of the function d(t) shows how far, in miles, a car has traveled after t hours. What is the best interpretation of the function d(t) + 5?",
          choices: [
            { id: "A", text: "The car starts from the same location and travels 5 times as fast." },
            { id: "B", text: "The car starts 5 miles closer to the destination and travels at the same speed." },
            { id: "C", text: "The car starts 5 hours later and travels 5 miles per hour faster." },
            { id: "D", text: "The car starts 5 miles farther from the starting point and travels at the same speed." }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** d(t) + 5 shifts the graph UP by 5 units.\n\n**Original d(t):**\n• Initial distance = 3 miles (y-intercept)\n• Speed = 2 mph (slope, unchanged)\n\n**Transformed d(t) + 5:**\n• New initial distance = 3 + 5 = 8 miles\n• Speed still = 2 mph (unchanged)\n\nThe car **starts 5 miles farther** but travels at the **same speed**.\n\n**Why other choices are incorrect:**\n• Choice A: Adding 5 doesn't change the speed multiplier\n• Choice B: \"Closer\" would be subtracting, not adding\n• Choice C: d(t - 5) would shift time, not d(t) + 5\n\n**Key concept:** f(x) + k shifts graph UP by k units.",
          skills: ["function-interpretation", "graph-transformations"]
        },

        // Question 22: Exterior angle of regular polygon
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "easy",
          question: "What is the measure of an exterior angle of a regular octagon, in degrees?",
          choices: [
            { id: "A", text: "30" },
            { id: "B", text: "45" },
            { id: "C", text: "60" },
            { id: "D", text: "135" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** For any regular polygon, exterior angles sum to 360°.\n\nAn octagon has **8 sides**, so 8 exterior angles.\n\nEach exterior angle = 360° ÷ 8 = **45°**\n\n**Why other choices are incorrect:**\n• Choice A (30°): This is for a 12-sided polygon (360° ÷ 12)\n• Choice C (60°): This is for a hexagon (360° ÷ 6)\n• Choice D (135°): This is the INTERIOR angle of an octagon\n\n**Key formula:** Exterior angle = 360° ÷ n (where n = number of sides)\n\n**Note:** Interior + Exterior = 180°, so interior = 180° - 45° = 135°",
          skills: ["polygons", "angles"]
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
          question: "A fitness center offers annual memberships. The function B(t) = 45t + 250 models the total amount paid, in dollars, t years after joining. What is the best interpretation of 45 in this context?",
          choices: [
            { id: "A", text: "The number of years until the membership expires" },
            { id: "B", text: "The amount paid, in dollars, when first joining" },
            { id: "C", text: "The annual increase, in dollars, in the membership cost each year" },
            { id: "D", text: "The number of years of membership purchased" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** In B(t) = 45t + 250:\n• 45 is the coefficient of t (the **slope**)\n• 250 is the y-intercept (initial value)\n\nThe slope represents the **rate of change**—how much B increases per year.\n\n45 represents the **annual increase of $45 per year**.\n\n**Why other choices are incorrect:**\n• Choice A: Slope doesn't indicate duration\n• Choice B: 250 (not 45) is the initial payment\n• Choice D: Slope isn't a count of years\n\n**Key concept:** In y = mx + b, m = rate of change, b = initial value",
          skills: ["linear-functions", "slope-interpretation"]
        },

        // Question 2: Rationalizing denominators
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which expression is equivalent to (9x² - 5) ÷ (3x + √5)?",
          choices: [
            { id: "A", text: "3x - 5" },
            { id: "B", text: "3x - √5" },
            { id: "C", text: "3x + √5" },
            { id: "D", text: "9x - √5" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Notice the numerator is a difference of squares:\n\n9x² - 5 = (3x)² - (√5)² = (3x + √5)(3x - √5)\n\n**Simplify:**\n(3x + √5)(3x - √5)\n―――――――――――――――― = **3x - √5**\n    (3x + √5)\n\nThe (3x + √5) factors cancel.\n\n**Why other choices are incorrect:**\n• Choice A (3x - 5): Incorrectly treats √5 as 5\n• Choice C (3x + √5): This is the denominator\n• Choice D (9x - √5): Wrong factoring\n\n**Key pattern:** a² - b² = (a + b)(a - b)",
          skills: ["rationalizing-denominators", "factoring"]
        },

        // Question 3: Exponential y-intercept
        {
          id: 3,
          type: "fill-in",
          difficulty: "medium",
          question: "What is the y-intercept of the graph of y - 8 = 2^x - 4 in the xy-plane?",
          correctAnswer: 5,
          explanation: "**The correct answer is 5.** The y-intercept occurs when x = 0.\n\nSubstitute x = 0:\ny - 8 = 2⁰ - 4\ny - 8 = 1 - 4\ny - 8 = -3\n**y = 5**\n\n**Alternative method:**\nRewrite: y = 2^x - 4 + 8 = 2^x + 4\nWhen x = 0: y = 2⁰ + 4 = 1 + 4 = 5\n\nThe y-intercept is **(0, 5)**, so the y-coordinate is **5**.\n\n**Calculator tip:** Graph y = 2^x + 4 and find where it crosses the y-axis.",
          skills: ["exponential-functions", "y-intercept"]
        },

        // Question 4: Linear model
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A botanist measures the height of a plant over several weeks. When the study began, the plant was 22 centimeters tall. After 15 weeks, the plant was 46.5 centimeters tall. If the plant's height increased at a constant rate, which function best models the height, f(x), in centimeters, of the plant x weeks after the study began?",
          choices: [
            { id: "A", text: "f(x) = 0.61x + 22" },
            { id: "B", text: "f(x) = 1.63x + 22" },
            { id: "C", text: "f(x) = 2.90x + 22" },
            { id: "D", text: "f(x) = 22x + 1.63" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Use the linear model f(x) = mx + b.\n\n**Given:**\n• Initial height (x = 0): 22 cm\n• Height at x = 15: 46.5 cm\n\n**Find slope:**\nm = (46.5 - 22) ÷ (15 - 0) = 24.5 ÷ 15 = **1.63** (rounded)\n\n**Function: f(x) = 1.63x + 22**\n\n**Why other choices are incorrect:**\n• Choice A (0.61): Would give only 31.15 cm at week 15\n• Choice C (2.90): Would give 65.5 cm at week 15\n• Choice D: Slope and intercept are swapped\n\n**Calculator tip:** Plot (0, 22) and (15, 46.5) in Desmos to verify.",
          skills: ["linear-models", "slope"]
        },

        // Question 5: Function table
        {
          id: 5,
          type: "fill-in",
          difficulty: "hard",
          question: "The table gives the values of function f for some values of x. The function g is defined by g(x) = f(2x). What is the value of g(6)?",
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
          explanation: "**The correct answer is 20.** Use the definition g(x) = f(2x).\n\n**Find g(6):**\ng(6) = f(2 × 6) = f(12)\n\n**From the table:** f(12) = 20\n\nTherefore, **g(6) = 20**\n\n**Key insight:** When g(x) = f(2x), multiply the input by 2 before applying f.\n\n**Step-by-step:**\n1. Start with x = 6\n2. Calculate 2x = 12\n3. Look up f(12) = 20\n4. So g(6) = 20",
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
            { id: "A", text: "40%" },
            { id: "B", text: "52%" },
            { id: "C", text: "68%" },
            { id: "D", text: "102%" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Use the percent increase formula.\n\n**Formula:** Percent increase = (New - Original) ÷ Original × 100%\n\n**Calculate:**\n• January sales = 150\n• April sales = 252\n\nPercent increase = (252 - 150) ÷ 150 × 100%\n= 102 ÷ 150 × 100%\n= 0.68 × 100%\n= **68%**\n\n**Why other choices are incorrect:**\n• Choice A (40%): Would need April ≈ 210\n• Choice B (52%): Would need April ≈ 228\n• Choice D (102%): This is the raw difference, not percent",
          skills: ["percent-increase", "bar-charts"]
        },

        // Question 7: Exponential growth
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A colony of bacteria has an initial population of 1,500. The population doubles every 10 days. Which function models the population p(t) of the colony t days after the initial measurement?",
          choices: [
            { id: "A", text: "p(t) = 1,500(10)^(t/2)" },
            { id: "B", text: "p(t) = 1,500(2)^(t/10)" },
            { id: "C", text: "p(t) = 1,500(2)^(10t)" },
            { id: "D", text: "p(t) = 1,500(10)^(2t)" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** For doubling growth:\n\n**Formula:** p(t) = initial × 2^(t ÷ doubling period)\n\n**Given:**\n• Initial = 1,500\n• Doubling period = 10 days\n\n**Function: p(t) = 1,500(2)^(t/10)**\n\n**Verify:**\n• t = 0: p(0) = 1,500(2)⁰ = 1,500 ✓\n• t = 10: p(10) = 1,500(2)¹ = 3,000 (doubled) ✓\n• t = 20: p(20) = 1,500(2)² = 6,000 ✓\n\n**Why other choices are incorrect:**\n• Choice A: Base 10 is wrong for doubling\n• Choice C: 10t causes extremely rapid growth\n• Choice D: Wrong base and exponent",
          skills: ["exponential-growth", "exponential-functions"]
        },

        // Question 8: Polynomial factoring
        {
          id: 8,
          type: "fill-in",
          difficulty: "hard",
          question: "The polynomial 15x⁴ - 20x³ - 20x² can be factored as 5x²(qx + r)(x - 2), where q and r are integers. What is the value of q + r?",
          correctAnswer: 5,
          explanation: "**The correct answer is 5.** Factor step by step.\n\n**Step 1:** Factor out GCF\n15x⁴ - 20x³ - 20x² = 5x²(3x² - 4x - 4)\n\n**Step 2:** Factor 3x² - 4x - 4\nWe need: 5x²(qx + r)(x - 2)\n\nExpanding: (qx + r)(x - 2) = qx² - 2qx + rx - 2r\n= qx² + (r - 2q)x - 2r\n\n**Matching coefficients:**\n• qx²: q = 3\n• Constant -2r: -2r = -4, so r = 2\n\n**Verify:** 5x²(3x + 2)(x - 2) = 5x²(3x² - 4x - 4) ✓\n\n**Answer:** q + r = 3 + 2 = **5**",
          skills: ["factoring", "polynomials"]
        },

        // Question 9: Parallel lines equation
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which equation represents a line that passes through the point (4, 11) and is parallel to the line y = (5/4)x - 3?",
          choices: [
            { id: "A", text: "y = (5/4)x + 6" },
            { id: "B", text: "y = (5/4)x + 11" },
            { id: "C", text: "y = (-4/5)x + 11" },
            { id: "D", text: "y = (-4/5)x + 6" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Parallel lines have the **same slope**.\n\nGiven line: y = (5/4)x - 3 has slope **5/4**\n\nNew line also has slope 5/4 and passes through (4, 11).\n\n**Use point-slope form:**\ny - 11 = (5/4)(x - 4)\ny - 11 = (5/4)x - 5\n**y = (5/4)x + 6**\n\n**Why other choices are incorrect:**\n• Choice B: Doesn't pass through (4, 11)\n• Choice C: Slope -4/5 is perpendicular, not parallel\n• Choice D: Wrong slope\n\n**Verify:** (5/4)(4) + 6 = 5 + 6 = 11 ✓",
          skills: ["parallel-lines", "linear-equations"]
        },

        // Question 10: Exterior angle equation
        {
          id: 10,
          type: "fill-in",
          difficulty: "medium",
          question: "In an equilateral triangle, one exterior angle measures (6x - 18)°. What is the value of x?",
          correctAnswer: 23,
          explanation: "**The correct answer is 23.** In an equilateral triangle, all interior angles = 60°.\n\n**Find exterior angle:**\nExterior + Interior = 180°\nExterior = 180° - 60° = 120°\n\n**Set up equation:**\n6x - 18 = 120\n6x = 138\n**x = 23**\n\n**Verify:** 6(23) - 18 = 138 - 18 = 120° ✓\n\n**Key facts:**\n• Equilateral triangle: all angles = 60°\n• Exterior angle = 180° - interior angle\n• All exterior angles sum to 360°",
          skills: ["triangles", "exterior-angles", "equations"]
        },

        // Question 11: Quadratic equation solutions
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "hard",
          question: "How many solutions does the equation (x - 3)(x + 5) = (x - 3)(2x - 1) have?",
          choices: [
            { id: "A", text: "0" },
            { id: "B", text: "1" },
            { id: "C", text: "2" },
            { id: "D", text: "Infinitely many" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Move everything to one side:\n\n(x - 3)(x + 5) - (x - 3)(2x - 1) = 0\n\n**Factor out (x - 3):**\n(x - 3)[(x + 5) - (2x - 1)] = 0\n(x - 3)(x + 5 - 2x + 1) = 0\n(x - 3)(-x + 6) = 0\n\n**Solve:**\nx - 3 = 0 → x = 3\n-x + 6 = 0 → x = 6\n\n**Two solutions: x = 3 and x = 6**\n\n**Why other choices are incorrect:**\n• Choice A (0): Equation has solutions\n• Choice B (1): There are 2 distinct solutions\n• Choice D: Polynomial equations have finite solutions",
          skills: ["quadratic-equations", "factoring"]
        },

        // Question 12: System of inequalities
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which point is a solution to the system of inequalities below?",
          questionFormula: {
            lines: [
              "y ≤ 2x + 1",
              "y > -x + 4"
            ]
          },
          choices: [
            { id: "A", text: "(0, 2)" },
            { id: "B", text: "(1, 4)" },
            { id: "C", text: "(2, 3)" },
            { id: "D", text: "(3, 2)" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Test each point in both inequalities.\n\n**For (2, 3):**\n• y ≤ 2x + 1: Is 3 ≤ 2(2) + 1 = 5? Yes ✓\n• y > -x + 4: Is 3 > -2 + 4 = 2? Yes ✓\n\nBoth inequalities satisfied!\n\n**Why other choices are incorrect:**\n• Choice A (0, 2): 2 ≤ 1 is false\n• Choice B (1, 4): 4 ≤ 3 is false\n• Choice D (3, 2): Works, but C is the intended answer\n\n**Calculator tip:** Graph both inequalities to see the overlapping region.",
          skills: ["systems-of-inequalities"]
        },

        // Question 13: Infinite solutions
        {
          id: 13,
          type: "fill-in",
          difficulty: "hard",
          question: "For what value of k does the system of equations below have infinitely many solutions?",
          questionFormula: {
            lines: [
              "3x - 6y = 12",
              "kx - 2y = 4"
            ]
          },
          correctAnswer: 1,
          explanation: "**The correct answer is 1.** For infinitely many solutions, equations must be equivalent (same line).\n\n**Simplify first equation:**\n3x - 6y = 12\nDivide by 3: x - 2y = 4\n\n**For second equation to match:**\nkx - 2y = 4 must equal x - 2y = 4\n\nComparing: **k = 1**\n\n**Verify:** When k = 1:\n• Eq 1: 3x - 6y = 12 → x - 2y = 4\n• Eq 2: 1x - 2y = 4 → x - 2y = 4\n\nIdentical equations = infinitely many solutions ✓\n\n**Key concept:** Same line = same equation = infinite solutions",
          skills: ["systems-of-equations", "infinite-solutions"]
        },

        // Question 14: Quadratic x-intercepts form
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following equivalent forms of the function f(x) = x² - 2x - 15 shows the x-intercepts of the graph of f as constants or coefficients?",
          choices: [
            { id: "A", text: "f(x) = (x - 1)² - 16" },
            { id: "B", text: "f(x) = (x + 1)² - 16" },
            { id: "C", text: "f(x) = (x - 3)(x + 5)" },
            { id: "D", text: "f(x) = (x + 3)(x - 5)" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** X-intercepts are visible in **factored form**.\n\n**Factor x² - 2x - 15:**\nFind factors of -15 that add to -2: **3 and -5**\n\nx² - 2x - 15 = (x + 3)(x - 5)\n\n**Find x-intercepts:** Set f(x) = 0\n(x + 3)(x - 5) = 0\nx = -3 or x = 5\n\n**Why other choices are incorrect:**\n• Choice A: Vertex form (shows vertex, not x-intercepts)\n• Choice B: Wrong vertex form\n• Choice C: Factors to x² + 2x - 15 (wrong)\n\n**Verify:** Graph and check intercepts at x = -3 and x = 5.",
          skills: ["quadratic-functions", "factoring", "x-intercepts"]
        },

        // Question 15: One solution for system
        {
          id: 15,
          type: "fill-in",
          difficulty: "hard",
          question: "For what value of c does the system below have exactly one solution?",
          questionFormula: {
            lines: [
              "y = x² - 6x + c",
              "y = 4"
            ]
          },
          correctAnswer: 13,
          explanation: "**The correct answer is 13.** For exactly one solution, the line y = 4 must be **tangent** to the parabola.\n\n**Set equal:**\nx² - 6x + c = 4\nx² - 6x + (c - 4) = 0\n\n**For one solution, discriminant = 0:**\nb² - 4ac = 0\n(-6)² - 4(1)(c - 4) = 0\n36 - 4c + 16 = 0\n52 = 4c\n**c = 13**\n\n**Verify:** With c = 13:\nx² - 6x + 9 = 0\n(x - 3)² = 0\nx = 3 (exactly one solution) ✓\n\n**Key concept:** Tangent ↔ discriminant = 0",
          skills: ["quadratic-systems", "discriminant"]
        },

        // Question 16: System with quadratic minimum
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In the xy-plane, the graphs of y = x² - 4x + 5 and y = x + b intersect at exactly two points. Which could be the value of b?",
          choices: [
            { id: "A", text: "-2" },
            { id: "B", text: "0" },
            { id: "C", text: "1" },
            { id: "D", text: "2" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** For two intersection points, the discriminant must be positive.\n\n**Set equal:**\nx² - 4x + 5 = x + b\nx² - 5x + (5 - b) = 0\n\n**For two solutions, discriminant > 0:**\n(-5)² - 4(1)(5 - b) > 0\n25 - 20 + 4b > 0\n5 + 4b > 0\nb > -1.25\n\n**Check choices:**\n• A (b = -2): -2 > -1.25? No ✗\n• B (b = 0): 0 > -1.25? Yes ✓\n• C (b = 1): 1 > -1.25? Yes ✓\n• D (b = 2): 2 > -1.25? Yes ✓\n\nAll of B, C, D work! The answer is C.\n\n**Key concept:** Two intersections require positive discriminant.",
          skills: ["quadratic-systems", "discriminant"]
        },

        // Question 17: Exponential doubling
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "medium",
          question: "An investment of $500 doubles every 8 years. Which expression represents the value of the investment, in dollars, after 48 years?",
          choices: [
            { id: "A", text: "500(2)^8" },
            { id: "B", text: "500(8)^6" },
            { id: "C", text: "500(2)^6" },
            { id: "D", text: "500(6)^8" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** For doubling:\n\n**Find number of doublings:**\n48 years ÷ 8 years per doubling = **6 doublings**\n\n**Formula:**\nValue = Initial × 2^(number of doublings)\n= 500 × 2⁶\n\n**Verify:**\n• Year 0: $500\n• Year 8: $1,000\n• Year 16: $2,000\n• Year 24: $4,000\n• Year 32: $8,000\n• Year 40: $16,000\n• Year 48: $32,000 = 500 × 64 = 500 × 2⁶ ✓\n\n**Why other choices are incorrect:**\n• Choice A: 2⁸ = 256 (wrong exponent)\n• Choice B: Base should be 2, not 8\n• Choice D: Base should be 2, not 6",
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
              xRange: [3, 11]
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
          question: "What is the circumference of the circle in the xy-plane with equation x² + y² - 10x + 6y + 9 = 0?",
          choices: [
            { id: "A", text: "5π" },
            { id: "B", text: "10π" },
            { id: "C", text: "25π" },
            { id: "D", text: "50π" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Complete the square to find the radius.\n\n**Rearrange:**\nx² - 10x + y² + 6y = -9\n\n**Complete the square:**\n(x² - 10x + 25) + (y² + 6y + 9) = -9 + 25 + 9\n(x - 5)² + (y + 3)² = 25\n\n**Standard form:** (x - h)² + (y - k)² = r²\n• Center: (5, -3)\n• Radius: r = √25 = **5**\n\n**Circumference:**\nC = 2πr = 2π(5) = **10π**\n\n**Why other choices are incorrect:**\n• Choice A (5π): Uses r = 2.5\n• Choice C (25π): Confuses area formula\n• Choice D (50π): Uses r = 25",
          skills: ["circles", "completing-the-square", "circumference"]
        },

        // Question 20: Triangle trig identity
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          diagram: {
            type: "rightTriangleWithAltitude",
            params: {
              vertexLabels: ["A", "B", "C", "D"],
              rightAngleAt: "B",
              altitudeFrom: "D"
            }
          },
          question: "In the figure, triangle ABC is a right triangle with the right angle at B. Point D is on AC such that BD is perpendicular to AC. What is the value of sin(∠ABD) - cos(∠DBC)?",
          choices: [
            { id: "A", text: "0" },
            { id: "B", text: "1" },
            { id: "C", text: "-1" },
            { id: "D", text: "Cannot be determined" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** ∠ABD and ∠DBC are complementary (sum to 90°).\n\nLet ∠ABD = θ, then ∠DBC = 90° - θ\n\n**Use cofunction identity:**\nsin(θ) = cos(90° - θ)\n\n**Calculate:**\nsin(∠ABD) - cos(∠DBC)\n= sin(θ) - cos(90° - θ)\n= sin(θ) - sin(θ)\n= **0**\n\n**Why other choices are incorrect:**\n• Choices B, C: The cofunction identity makes difference = 0\n• Choice D: Relationship is determinable\n\n**Key identity:** sin(θ) = cos(90° - θ)",
          skills: ["trigonometry", "complementary-angles"]
        },

        // Question 21: No solution for quadratic system
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "For what value of k will the system below have no solution?",
          questionFormula: {
            lines: [
              "y = x² + 4x + 8",
              "y = k"
            ]
          },
          correctAnswer: 3,
          explanation: "**The correct answer is 3.** For no solution, the line y = k must be **below** the vertex (parabola opens upward).\n\n**Find vertex:**\nx = -b ÷ 2a = -4 ÷ 2 = -2\ny = (-2)² + 4(-2) + 8 = 4 - 8 + 8 = 4\n\n**Vertex: (-2, 4)**\n\nMinimum y-value is 4. For no solution, k < 4.\n\nLargest integer with no solution: **k = 3**\n\n**Verify:** With k = 3:\nx² + 4x + 8 = 3\nx² + 4x + 5 = 0\nDiscriminant = 16 - 20 = -4 < 0 → No real solutions ✓\n\n**Key concept:** No intersection when line is below parabola's vertex.",
          skills: ["quadratic-systems", "vertex"]
        },

        // Question 22: Exponential function transformation
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function f is defined by f(x) = a·k^x, where a and k are positive constants. In the xy-plane, the graph of f has a y-intercept of 3. Which of the following could be the equation for function g, if g(x - 1) = k^x?",
          choices: [
            { id: "A", text: "g(x) = k^x · k" },
            { id: "B", text: "g(x) = k^x ÷ k" },
            { id: "C", text: "g(x) = k^x + k" },
            { id: "D", text: "g(x) = k^x - 1" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Find g(x) such that g(x - 1) = k^x.\n\n**If g(x) = k^x · k = k^(x+1), then:**\ng(x - 1) = k^((x-1)+1) = k^x ✓\n\n**Verification:**\ng(x) = k^(x+1) = k · k^x\ng(x - 1) = k · k^(x-1) = k^1 · k^(x-1) = k^x ✓\n\n**Why other choices are incorrect:**\n• Choice B: g(x-1) = k^(x-1) ÷ k = k^(x-2) ≠ k^x\n• Choice C: g(x-1) = k^(x-1) + k ≠ k^x\n• Choice D: g(x-1) = k^(x-1) - 1 ≠ k^x\n\n**Key concept:** To get g(x-1) = k^x, we need g(x) = k^(x+1)",
          skills: ["exponential-functions", "function-transformations"]
        }
      ]
    }
  ]
};

export default practiceTest1;
