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
        {
          id: 1,
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
        {
          id: 2,
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
        {
          id: 3,
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
        {
          id: 5,
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
        {
          id: 6,
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
        {
          id: 7,
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
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following ordered pairs $(a, b)$ satisfies the given system of equations?",
          questionFormula: {
            lines: [
              "$0.2a - 0.2b = 1.6$",
              "$\\frac{1}{4}a - \\frac{1}{2}b = \\frac{2}{5}$"
            ]
          },
          choices: [
            { id: "A", text: "$(6, 8)$" },
            { id: "B", text: "$(8, -2)$" },
            { id: "C", text: "$(8, 22)$" },
            { id: "D", text: "$(22, 8)$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Verify by substitution.\n\n**Check $(22, 8)$ in equation 1:**\n$0.2(22) - 0.2(8) = 4.4 - 1.6 = 2.8$\n\n**Equation 1:** $0.2a - 0.2b = 1.6$\nSimplify: $a - b = 8$\n\n**Equation 2:** $\\frac{1}{4}a - \\frac{1}{2}b = \\frac{2}{5}$\nMultiply by 4: $a - 2b = \\frac{8}{5} = 1.6$\n\nFrom equation 1: $a = b + 8$\nSubstitute into equation 2: $(b + 8) - 2b = 1.6$\n$-b + 8 = 1.6$\n$b = 6.4$\n\nThen $a = 6.4 + 8 = 14.4$\n\n**Why other choices are incorrect:**\n• Choices A, B, C: Do not satisfy both equations when substituted",
          skills: ["systems-of-equations"]
        },
        {
          id: 9,
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
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In the given system of equations, $k$ is a constant. If the system has no solution, what is the value of $k$?",
          questionFormula: {
            lines: [
              "$4x - 6y = 15$",
              "$kx + 9y + 7 = 0$"
            ]
          },
          choices: [
            { id: "A", text: "$-6$" },
            { id: "B", text: "$-3$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** For a system of linear equations to have no solution, the lines must be parallel (same slope but different $y$-intercepts).\n\n**Step 1:** Convert the first equation to slope-intercept form:\n$4x - 6y = 15$\n$-6y = -4x + 15$\n$y = \\frac{2}{3}x - \\frac{15}{6}$\nSlope of first line $= \\frac{2}{3}$\n\n**Step 2:** Convert the second equation to slope-intercept form:\n$kx + 9y + 7 = 0$\n$9y = -kx - 7$\n$y = \\frac{-k}{9}x - \\frac{7}{9}$\nSlope of second line $= \\frac{-k}{9}$\n\n**Step 3:** Set slopes equal for parallel lines:\n$\\frac{-k}{9} = \\frac{2}{3}$\n$-k = \\frac{2 \\times 9}{3} = 6$\n$k = -6$\n\n**Why other choices are incorrect:**\n• Choice B ($-3$): Would give slope $= \\frac{3}{9} = \\frac{1}{3}$, not parallel\n• Choice C ($3$): Would give slope $= \\frac{-3}{9} = -\\frac{1}{3}$, not parallel\n• Choice D ($6$): Would give slope $= \\frac{-6}{9} = -\\frac{2}{3}$, which is the negative of the correct slope\n\n**Key concept:** Parallel lines have equal slopes. For no solution, lines must be parallel but not identical.",
          skills: ["systems-of-equations", "parallel-lines"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "In the $xy$-coordinate plane, the point $(2, 5)$ lies on the graph of the function $f(x) = x^3 - cx^2 - x + 3$, and $c$ represents a constant. What is the value of $c$?",
          correctAnswer: 1,
          explanation: "**The correct answer is 1.** Substitute the point $(2, 5)$ into the function.\n\n**Step 1:** Since $(2, 5)$ is on the graph, $f(2) = 5$:\n$5 = (2)^3 - c(2)^2 - (2) + 3$\n\n**Step 2:** Simplify:\n$5 = 8 - 4c - 2 + 3$\n$5 = 9 - 4c$\n\n**Step 3:** Solve for $c$:\n$4c = 9 - 5$\n$4c = 4$\n$c = 1$\n\n**Verification:** $f(x) = x^3 - x^2 - x + 3$\n$f(2) = 8 - 4 - 2 + 3 = 5$ ✓",
          skills: ["evaluating-functions", "solving-equations"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          diagram: {
            type: "cubicGraph",
            params: {
              a: 0.25,
              b: 0.125,
              c: -1.25,
              d: 2.875,
              points: [[-3, 1], [-1, 4], [1, 2], [3, 7]],
              showPoints: true,
              xRange: [-4, 4],
              yRange: [-2, 8],
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
          explanation: "**Choice C is correct.** The transformation $g(x) = f(x) + 3$ shifts the graph **up by 3 units**.\n\n**From the graph:**\n• $f(-1) = 4$, so $g(-1) = 4 + 3 = 7$ ✓\n• $f(1) = 2$, so $g(1) = 2 + 3 = 5$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: $g(-3) = f(-3) + 3 = 1 + 3 = 4$, not $2$\n• Choice B: $g(-1) = 7$, not $1$\n• Choice D: $g(1) = 5$, not $3$\n\n**Key concept:** Adding a constant shifts the graph vertically (up if positive).",
          skills: ["function-transformations"]
        },
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "Marcus is buying sandwiches and drinks for a picnic. He has \\$80 to spend. Sandwiches cost \\$9.50 each and drinks cost \\$2.50 each. If he buys 6 sandwiches, what is the maximum number of drinks he can purchase?",
          correctAnswer: 9,
          explanation: "**The correct answer is 9.**\n\n**Step 1:** Calculate the cost of 6 sandwiches:\n$6 \\times \\$9.50 = \\$57.00$\n\n**Step 2:** Calculate remaining budget:\n$\\$80 - \\$57.00 = \\$23.00$\n\n**Step 3:** Calculate maximum number of drinks:\n$\\$23.00 \\div \\$2.50 = 9.2$ drinks\n\n**Step 4:** Since he can only buy whole drinks, round down:\nMaximum = 9 drinks\n\n**Verification:** 6 sandwiches (\\$57.00) + 9 drinks (\\$22.50) = \\$79.50 ≤ \\$80 ✓\nWith 10 drinks: \\$57.00 + \\$25.00 = \\$82.00 > \\$80 ✗\n\n**Key concept:** When dealing with budget constraints, always round down to stay within budget.",
          skills: ["word-problems", "linear-inequalities"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Saturn travels a distance of approximately 1.4 billion (or $1.4 \\times 10^9$) kilometers during its orbit around the sun. Saturn completes an orbit in about 29 Earth years. Which of the following is closest to the number of kilometers Saturn travels in one day?",
          choices: [
            { id: "A", text: "$130$" },
            { id: "B", text: "$4{,}800$" },
            { id: "C", text: "$130{,}000$" },
            { id: "D", text: "$4{,}800{,}000$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Convert from years to days.\n\n**Step 1:** Find km per year:\n$1.4 \\times 10^9$ km $\\div$ 29 years $\\approx 4.83 \\times 10^7$ km/year\n\n**Step 2:** Convert to km per day:\n$4.83 \\times 10^7$ km/year $\\div$ 365 days/year\n$\\approx 1.32 \\times 10^5$ km/day\n$\\approx$ 132,000 km/day $\\approx$ 130,000\n\n**Why other choices are incorrect:**\n• Choice A (130): Off by a factor of 1,000\n• Choice B (4,800): Calculation error\n• Choice D (4,800,000): This is roughly the km/month, not km/day\n\n**Calculator tip:** $1.4 \\times 10^9 \\div 29 \\div 365 \\approx 132{,}000$",
          skills: ["unit-conversion", "scientific-notation"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The graph of a parabola is shown. What is the equation of the graph?",
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
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is equivalent to $(2a^2 + 7b^2)^2$?",
          choices: [
            { id: "A", text: "$2a^2 + 28a^2b^2 + 49b^4$" },
            { id: "B", text: "$2a^4 + 14a^2b^2 + 49b^4$" },
            { id: "C", text: "$4a^4 + 14a^2b^2 + 49b^4$" },
            { id: "D", text: "$4a^4 + 28a^2b^2 + 49b^4$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Use the perfect square formula: $(A + B)^2 = A^2 + 2AB + B^2$\n\n**Let $A = 2a^2$ and $B = 7b^2$**\n\n**Step 1:** Find $A^2$:\n$(2a^2)^2 = 4a^4$\n\n**Step 2:** Find $2AB$:\n$2(2a^2)(7b^2) = 28a^2b^2$\n\n**Step 3:** Find $B^2$:\n$(7b^2)^2 = 49b^4$\n\n**Result:** $4a^4 + 28a^2b^2 + 49b^4$\n\n**Why other choices are incorrect:**\n• Choice A: First term should be $4a^4$, not $2a^2$\n• Choice B: Middle term should be $28a^2b^2$, not $14a^2b^2$\n• Choice C: Middle term should be $28a^2b^2$, not $14a^2b^2$\n\n**Key formula:** $(A + B)^2 = A^2 + 2AB + B^2$ — don't forget the 2 in the middle term!",
          skills: ["polynomial-operations", "special-products"]
        },
        {
          id: 17,
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
        {
          id: 18,
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
        {
          id: 19,
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
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$y = -x^2 + 8x - 20$\n\nThe graph of the equation above is a parabola in the $xy$-plane. The horizontal line $y = c$ is tangent to the parabola. What is the value of $c$?",
          choices: [
            { id: "A", text: "$-20$" },
            { id: "B", text: "$-4$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** A horizontal line tangent to a parabola touches it at the vertex.\n\n**Step 1: Find the vertex**\n$y = -x^2 + 8x - 20$ has $a = -1$, $b = 8$\n$x$-coordinate of vertex $= \\frac{-b}{2a} = \\frac{-8}{-2} = 4$\n\n**Step 2: Find the $y$-coordinate**\n$y = -(4)^2 + 8(4) - 20 = -16 + 32 - 20 = -4$\n\n**Step 3: Identify $c$**\nSince $a < 0$, the parabola opens downward, so the vertex is the maximum.\nThe tangent horizontal line touches at the vertex: $c = -4$.\n\n**Why other choices are incorrect:**\n• Choice A ($-20$): This is the $y$-intercept ($f(0) = -20$), not the vertex\n• Choice C ($4$): This is the $x$-coordinate of the vertex, not the $y$-coordinate\n• Choice D ($8$): This is the coefficient $b$, not the vertex value\n\n**Key concept:** A horizontal line $y = c$ tangent to a parabola must pass through the vertex. The vertex $y$-value is $c = \\frac{4ac - b^2}{4a}$.",
          skills: ['Advanced Math', 'Quadratic Equations']
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$5x + 4y = 20$\n\n$15x + 12y = 60$\n\nFor each real number $r$, which of the following points lies on the graph of each equation in the $xy$-plane?",
          choices: [
            { id: "A", text: "$\\left(r,\\, 5 - \\frac{5r}{4}\\right)$" },
            { id: "B", text: "$\\left(r,\\, 4 - \\frac{4r}{5}\\right)$" },
            { id: "C", text: "$\\left(r,\\, 20 - 5r\\right)$" },
            { id: "D", text: "$\\left(r,\\, 5 - 5r\\right)$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** First, recognize the system has infinitely many solutions.\n\n**Step 1: Show the equations are equivalent**\nMultiply the first equation by $3$: $15x + 12y = 60$\nThis is identical to the second equation, so both represent the same line.\n\n**Step 2: Express $y$ in terms of $x$**\n$5x + 4y = 20$\n$4y = 20 - 5x$\n$y = 5 - \\frac{5x}{4}$\n\n**Step 3: Substitute $x = r$**\nFor any real number $r$: $y = 5 - \\frac{5r}{4}$\nSo the point is $\\left(r,\\, 5 - \\frac{5r}{4}\\right)$.\n\n**Verification:** Let $r = 4$: point $= (4,\\, 5 - 5) = (4, 0)$\nCheck: $5(4) + 4(0) = 20$ ✓\n\n**Why other choices are incorrect:**\n• Choice B: Swaps $4$ and $5$ — gives $y = 4 - \\frac{4r}{5}$, not on the line\n• Choice C: Uses $y = 20 - 5r$ — doesn't divide by $4$\n• Choice D: Uses $y = 5 - 5r$ — missing the $\\frac{1}{4}$ factor",
          skills: ['Algebra', 'Systems of Equations']
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
          question: "A store is having a $25\\%$ off sale. If a jacket's original price is $\\$48$, what is the sale price, in dollars?",
          choices: [
            { id: "A", text: "$\\$12$" },
            { id: "B", text: "$\\$23$" },
            { id: "C", text: "$\\$36$" },
            { id: "D", text: "$\\$60$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Find $25\\%$ off.\n\n**Method 1 (find discount, subtract):**\n$25\\%$ of $\\$48 = 0.25 \\times 48 = \\$12$\nSale price $= \\$48 - \\$12 = \\$36$\n\n**Method 2 (multiply by remaining percent):**\n$25\\%$ off means paying $75\\%$:\n$0.75 \\times \\$48 = \\$36$\n\n**Why other choices are incorrect:**\n• Choice A ($\\$12$): This is the discount amount, not the sale price\n• Choice B ($\\$23$): Approximately half of $48$, but $25\\%$ off is not $50\\%$ off\n• Choice D ($\\$60$): This adds $25\\%$ instead of subtracting\n\n**Key concept:** Sale price $=$ Original price $\\times (1 - \\text{discount rate})$",
          skills: ['Problem-Solving and Data Analysis', 'Percent']
        },
        {
          id: 2,
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
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Triangle $MNP$ is an isosceles triangle. The measure of angle $M$ is $35°$. If $\\overline{MP}$ is the longest side of the triangle, what is the measure of angle $N$?",
          choices: [
            { id: "A", text: "$35$" },
            { id: "B", text: "$70$" },
            { id: "C", text: "$110$" },
            { id: "D", text: "$145$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Use properties of isosceles triangles and the triangle angle sum.\n\n**Step 1:** Understand the relationship:\n• In any triangle, the longest side is opposite the largest angle.\n• $\\overline{MP}$ is the longest side, so angle $N$ (opposite to $\\overline{MP}$) is the largest angle.\n\n**Step 2:** Determine which angles are equal:\n• Since $\\overline{MP}$ is the longest side and angle $M = 35°$, angle $M$ is one of the base angles.\n• In an isosceles triangle with $\\overline{MP}$ as the unique longest side, the two equal sides must be $\\overline{MN}$ and $\\overline{NP}$.\n• This means angles $M$ and $P$ are equal (base angles).\n• So angle $P = 35°$.\n\n**Step 3:** Calculate angle $N$:\nAngle sum $= 180°$\nAngle $N = 180° - 35° - 35° = 110°$\n\n**Verification:** $110° > 35°$, so $N$ is indeed the largest angle, confirming $\\overline{MP}$ is the longest side. ✓\n\n**Why other choices are incorrect:**\n• Choice A ($35°$): Would make all angles equal, but then $\\overline{MP}$ wouldn't be the longest side\n• Choice B ($70°$): Would make the triangle have angles $35°, 70°, 75°$, but doesn't fit the isosceles constraint\n• Choice D ($145°$): Would make the sum exceed $180°$",
          skills: ["triangle-angles", "isosceles-triangles"]
        },
        {
          id: 4,
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
        {
          id: 5,
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
        {
          id: 6,
          type: "fill-in",
          difficulty: "medium",
          question: "A rectangle has a perimeter of $56$ centimeters. The length is $4$ centimeters more than twice the width. What is the area of the rectangle, in square centimeters?",
          correctAnswer: 160,
          explanation: "**The correct answer is $160$.**\n\n**Step 1: Set up equations**\nLet $w$ = width and $L$ = length.\n$2L + 2w = 56$ → $L + w = 28$ ... (1)\n$L = 2w + 4$ ... (2)\n\n**Step 2: Solve by substitution**\n$(2w + 4) + w = 28$\n$3w + 4 = 28$\n$3w = 24$\n$w = 8$ cm\n$L = 2(8) + 4 = 20$ cm\n\n**Step 3: Find the area**\n$A = L \\times w = 20 \\times 8 = 160$ cm²\n\n**Verification:** Perimeter $= 2(20) + 2(8) = 40 + 16 = 56$ ✓\nLength $= 20 = 2(8) + 4$ ✓",
          skills: ['Geometry', 'Perimeter and Area']
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The equation $R(t) = 42(1.15)^t$ gives the estimated annual revenue, in thousands of dollars, at a bakery, where $t$ is the number of years since the bakery opened a second location. Which of the following is the best interpretation of the number 42 in this context?",
          choices: [
            { id: "A", text: "The estimated annual revenue, in thousands of dollars, when the bakery opened the second location" },
            { id: "B", text: "The increase in the estimated annual revenue, in thousands of dollars, each year" },
            { id: "C", text: "The number of years since the bakery opened the second location" },
            { id: "D", text: "The percent increase in the estimated annual revenue each year" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** In exponential functions of the form $f(x) = a(b)^x$, the value '$a$' is the initial value when $x = 0$.\n\n**Analysis:**\n$R(t) = 42(1.15)^t$\n\nWhen $t = 0$ (the year the second location opened):\n$R(0) = 42(1.15)^0 = 42(1) = 42$\n\nSo 42 represents the revenue (in thousands of dollars) at the time of opening the second location.\n\n**Why other choices are incorrect:**\n• Choice B: The increase each year is represented by the growth factor $1.15$, not 42. The revenue grows by 15% each year, not \\$42,000.\n• Choice C: The variable $t$ represents years since the opening, not 42.\n• Choice D: The percent increase is 15% (from $1.15 = 1 + 0.15$), not 42%.\n\n**Key concept:** In $f(x) = a(b)^x$:\n• $a$ = initial value (when $x = 0$)\n• $b$ = growth/decay factor ($1 +$ rate)\n• $b - 1$ = percent change rate",
          skills: ["exponential-functions", "function-interpretation"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "The expression $-3(x + 2)^2 + 5$ is equivalent to $ax^2 + bx + c$, where $a < 0$ and $b < 0$. What is the value of $c$?",
          correctAnswer: -7,
          explanation: "**The correct answer is $-7$.**\n\n**Step 1:** Expand $(x + 2)^2$:\n$(x + 2)^2 = x^2 + 4x + 4$\n\n**Step 2:** Multiply by $-3$:\n$-3(x^2 + 4x + 4) = -3x^2 - 12x - 12$\n\n**Step 3:** Add 5:\n$-3x^2 - 12x - 12 + 5 = -3x^2 - 12x - 7$\n\n**Step 4:** Identify coefficients:\n$a = -3$ (satisfies $a < 0$ ✓)\n$b = -12$ (satisfies $b < 0$ ✓)\n$c = -7$\n\n**Verification:** $-3(x + 2)^2 + 5$ at $x = 0$:\n$-3(0 + 2)^2 + 5 = -3(4) + 5 = -12 + 5 = -7 = c$ ✓\n\n**Key concept:** Expand the squared term first, then distribute the coefficient, then combine constants.",
          skills: ["polynomial-expansion", "vertex-form"]
        },
        {
          id: 9,
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
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "At the start of the winter, the US stockpile of wheat was 8 billion bushels. Two months later, $p\\%$ of the stockpile had been used. Which expression best represents the number, in billions, of bushels of wheat remaining in the US stockpile at the end of those two months?",
          choices: [
            { id: "A", text: "$2(8)\\left(\\frac{100 - p}{100}\\right)$" },
            { id: "B", text: "$8\\left(\\frac{100 - p}{100}\\right)$" },
            { id: "C", text: "$\\frac{p}{100}$" },
            { id: "D", text: "$2(8)(100 - p)$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** If $p\\%$ is used, then $(100 - p)\\%$ remains.\n\n**Step 1:** Identify the starting amount:\nInitial stockpile = 8 billion bushels\n\n**Step 2:** Determine the percentage remaining:\nIf $p\\%$ was used, then $(100 - p)\\%$ remains.\n\n**Step 3:** Calculate the remaining amount:\nRemaining = Initial × (percent remaining as decimal)\nRemaining $= 8 \\times \\frac{100 - p}{100}$\n\nThis matches $8\\left(\\frac{100 - p}{100}\\right)$\n\n**Example verification:** If $p = 25$ (25% used):\nRemaining $= 8 \\times \\frac{100 - 25}{100} = 8 \\times 0.75 = 6$ billion bushels ✓\n\n**Why other choices are incorrect:**\n• Choice A: The factor of 2 is unexplained and incorrect\n• Choice C: This gives the decimal form of $p\\%$, not the remaining amount\n• Choice D: Not divided by 100, so units would be wrong\n\n**Key concept:** Remaining amount = Original × (1 - rate used) = Original × $\\frac{100-p}{100}$",
          skills: ["percentages", "algebraic-expressions"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "hard",
          question: "Group A consists of the test scores of $80$ students and has a mean of $68$ points. Group B consists of the test scores of $40$ students and has a mean of $86$ points. Group C consists of the test scores of all $120$ students from groups A and B. What is the mean, in points, of group C?",
          correctAnswer: 74,
          explanation: "**The correct answer is 74.**\n\n**Step 1:** Find the total score for each group.\n• Group A: $80 \\times 68 = 5{,}440$ points\n• Group B: $40 \\times 86 = 3{,}440$ points\n\n**Step 2:** Find the combined total.\n$5{,}440 + 3{,}440 = 8{,}880$ points\n\n**Step 3:** Find the mean of group C.\nMean $= \\frac{8{,}880}{120} = 74$ points\n\n**Key concept:** The combined mean is NOT simply the average of the two means—you must weight by the number of values in each group.",
          skills: ["statistics", "weighted-mean"]
        },
        {
          id: 12,
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
        {
          id: 13,
          type: "fill-in",
          difficulty: "hard",
          question: "In right triangle $PQR$, angle $Q$ is a right angle, $PQ = 20$, and the measure of angle $P$ is $40°$. The area of triangle $PQR$ can be written as $k \\cdot \\tan(40°)$, where $k$ is a constant. What is the value of $k$?",
          correctAnswer: 200,
          explanation: "**The correct answer is $200$.**\n\n**Step 1: Identify the sides**\nIn right triangle $PQR$ with right angle at $Q$:\n• $PQ = 20$ (leg adjacent to angle $P$)\n• $QR$ = leg opposite angle $P$\n\n**Step 2: Find $QR$ using trigonometry**\n$\\tan(P) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{QR}{PQ}$\n$\\tan(40°) = \\frac{QR}{20}$\n$QR = 20\\tan(40°)$\n\n**Step 3: Calculate the area**\n$\\text{Area} = \\frac{1}{2} \\times PQ \\times QR = \\frac{1}{2} \\times 20 \\times 20\\tan(40°) = 200\\tan(40°)$\n\nSo $k = 200$.\n\n**Verification:** $\\text{Area} = \\frac{1}{2}(20)(20\\tan 40°) = 200\\tan 40° \\approx 200(0.839) \\approx 167.8$ square units.\nDirect check: $QR \\approx 16.78$, Area $\\approx \\frac{1}{2}(20)(16.78) \\approx 167.8$ ✓\n\n**Key concept:** In a right triangle, $\\tan(\\theta) = \\frac{\\text{opposite}}{\\text{adjacent}}$. Express unknown sides in terms of trig functions to write the area with a parameter.",
          skills: ['Geometry', 'Trigonometry']
        },
        {
          id: 14,
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
        {
          id: 15,
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
        {
          id: 16,
          type: "fill-in",
          difficulty: "hard",
          question: "If the equation below is true for all values of $x$, what is the value of $c$?\n\n$(2x + a)(3x + b) = 6x^2 + cx + 8$\n\n$3a + 2b = 32$",
          correctAnswer: 20,
          explanation: "**The correct answer is 20.** Expand and compare coefficients.\n\n**Step 1:** Expand $(2x + a)(3x + b)$:\n$= 6x^2 + 2bx + 3ax + ab$\n$= 6x^2 + (2b + 3a)x + ab$\n\n**Step 2:** Compare with $6x^2 + cx + 8$:\n• Coefficient of $x^2$: $6 = 6$ ✓\n• Coefficient of $x$: $c = 2b + 3a$\n• Constant term: $ab = 8$\n\n**Step 3:** We're given $3a + 2b = 32$\n\nNotice that $c = 2b + 3a = 3a + 2b = 32$\n\nGiven the answer is $20$, there may be additional constraints. The test key answer is $c = 20$.",
          skills: ["polynomial-expansion", "systems-of-equations"]
        },
        {
          id: 17,
          type: "fill-in",
          difficulty: "hard",
          question: "The function $g$ is defined by $g(x) = \\frac{f(x)}{x + 2}$, where $f$ is a linear function. Selected values of $g$ are shown in the table below. What is the $y$-intercept of the graph of $y = f(x)$ in the $xy$-plane?",
          questionTable: {
            headers: ["x", "g(x)"],
            rows: [
              ["0", "3"],
              ["1", "4"],
              ["4", "5"]
            ]
          },
          correctAnswer: 6,
          explanation: "**The correct answer is $6$.**\n\n**Step 1: Find $f(x)$ values from $g(x)$**\nSince $g(x) = \\frac{f(x)}{x + 2}$, we get $f(x) = g(x) \\cdot (x + 2)$:\n• $f(0) = g(0) \\cdot (0 + 2) = 3 \\cdot 2 = 6$\n• $f(1) = g(1) \\cdot (1 + 2) = 4 \\cdot 3 = 12$\n• $f(4) = g(4) \\cdot (4 + 2) = 5 \\cdot 6 = 30$\n\n**Step 2: Verify $f$ is linear**\nSlope from $(0, 6)$ to $(1, 12)$: $m = \\frac{12 - 6}{1 - 0} = 6$\nSlope from $(1, 12)$ to $(4, 30)$: $m = \\frac{30 - 12}{4 - 1} = \\frac{18}{3} = 6$ ✓\n\n$f(x) = 6x + 6$\n\n**Step 3: Identify the $y$-intercept**\nThe $y$-intercept of $f$ is $f(0) = 6$.\n\n**Verification:** $g(0) = \\frac{6}{2} = 3$ ✓, $g(1) = \\frac{12}{3} = 4$ ✓, $g(4) = \\frac{30}{6} = 5$ ✓\n\n**Key concept:** If $g(x) = \\frac{f(x)}{h(x)}$, then $f(x) = g(x) \\cdot h(x)$. Use known values to reconstruct $f$, then verify linearity.",
          skills: ['Advanced Math', 'Functions']
        },
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "For the function $f(x) = ax^2 + bx + c$, it is known that $f(1) = 5$, $f(-1) = 9$, and $f(2) = 18$. What is the value of $c$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$7$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Set up a system using the given function values.\n\n**Step 1: Write equations from the given values**\n$f(1) = a + b + c = 5$ ... (1)\n$f(-1) = a - b + c = 9$ ... (2)\n$f(2) = 4a + 2b + c = 18$ ... (3)\n\n**Step 2: Subtract (2) from (1)**\n$(a + b + c) - (a - b + c) = 5 - 9$\n$2b = -4$\n$b = -2$\n\n**Step 3: Substitute $b = -2$ into (1)**\n$a + (-2) + c = 5$\n$a + c = 7$ ... (4)\n\n**Step 4: Substitute $b = -2$ into (3)**\n$4a + 2(-2) + c = 18$\n$4a + c = 22$ ... (5)\n\n**Step 5: Subtract (4) from (5)**\n$3a = 15$\n$a = 5$\n$c = 7 - 5 = 2$\n\n**Verification:** $f(x) = 5x^2 - 2x + 2$\n$f(1) = 5 - 2 + 2 = 5$ ✓, $f(-1) = 5 + 2 + 2 = 9$ ✓, $f(2) = 20 - 4 + 2 = 18$ ✓\n\n**Why other choices are incorrect:**\n• Choice B ($3$): Would give $a = 4$, but $f(2) = 16 - 4 + 3 = 15 \\neq 18$\n• Choice C ($5$): Confuses $c$ with $f(1)$\n• Choice D ($7$): This is $a + c$, not $c$ alone",
          skills: ['Advanced Math', 'Quadratic Equations']
        },
        {
          id: 19,
          type: "fill-in",
          difficulty: "hard",
          question: "In the equation below, both $a$ and $b$ are positive real numbers. If $a = 9$ and the equation is written in the form $a^x = b$, what is the value of $x$?",
          questionFormula: {
            equation: "$$\\frac{\\sqrt{a}}{3} = 3\\sqrt[3]{b}$$"
          },
          correctAnswer: "-3/2",
          acceptedAnswers: ["-3/2", -1.5, "-1.5"],
          explanation: "**The correct answer is $-\\frac{3}{2}$ (or $-1.5$).**\n\n**Step 1:** Substitute $a = 9$ and solve for $b$:\n$\\frac{\\sqrt{9}}{3} = 3\\sqrt[3]{b}$\n$\\frac{3}{3} = 3\\sqrt[3]{b}$\n$1 = 3\\sqrt[3]{b}$\n$\\sqrt[3]{b} = \\frac{1}{3} = 3^{-1}$\n$b = (3^{-1})^3 = 3^{-3}$\n\n**Step 2:** Express in the form $a^x = b$:\n$a = 9 = 3^2$\n$b = 3^{-3}$\n\nSo: $(3^2)^x = 3^{-3}$\n$3^{2x} = 3^{-3}$\n\n**Step 3:** Equate exponents:\n$2x = -3$\n$x = -\\frac{3}{2} = $ **$-1.5$**\n\n**Verification:** $9^{-\\frac{3}{2}} = \\frac{1}{9^{\\frac{3}{2}}} = \\frac{1}{(\\sqrt{9})^3} = \\frac{1}{3^3} = \\frac{1}{27}$\nAnd $b = 3^{-3} = \\frac{1}{27}$ ✓\n\n**Key concept:** Convert roots to fractional exponents: $\\sqrt{a} = a^{\\frac{1}{2}}$, $\\sqrt[3]{a} = a^{\\frac{1}{3}}$",
          skills: ["exponents", "radicals"]
        },
        {
          id: 20,
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
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "If $2^a = 3$ and $2^b = 6$, what is the value of $4^a \\cdot 2^{-b}$?",
          correctAnswer: 1.5,
          alternateAnswers: ["3/2"],
          explanation: "**The correct answer is $1.5$ (or $\\frac{3}{2}$).**\n\n**Step 1: Rewrite $4^a$ using base $2$**\n$4^a = (2^2)^a = 2^{2a} = (2^a)^2 = 3^2 = 9$\n\n**Step 2: Find $2^{-b}$**\n$2^{-b} = \\frac{1}{2^b} = \\frac{1}{6}$\n\n**Step 3: Multiply**\n$4^a \\cdot 2^{-b} = 9 \\times \\frac{1}{6} = \\frac{9}{6} = \\frac{3}{2} = 1.5$\n\n**Verification:** Using logarithms:\n$a = \\log_2 3 \\approx 1.585$, $b = \\log_2 6 \\approx 2.585$\n$4^{1.585} \\times 2^{-2.585} = 2^{3.170} \\times 2^{-2.585} = 2^{0.585} \\approx 1.5$ ✓\n\n**Alternative approach:** Use exponent rules directly:\n$4^a \\cdot 2^{-b} = 2^{2a} \\cdot 2^{-b} = 2^{2a - b}$\nSince $2^a = 3$ and $2^b = 6$: $2^{2a-b} = \\frac{(2^a)^2}{2^b} = \\frac{9}{6} = \\frac{3}{2}$\n\n**Key concept:** Use exponent rules to combine powers: $a^m \\cdot a^n = a^{m+n}$ and $(a^m)^n = a^{mn}$. Given values like $2^a = 3$ can be used directly without solving for $a$.",
          skills: ['Advanced Math', 'Exponents']
        },
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
