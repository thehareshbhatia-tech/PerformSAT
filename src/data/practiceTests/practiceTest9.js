// Practice Test 9 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Based on College Board SAT Practice Test #8 style and content

export const practiceTest9 = {
  id: "practice-test-9",
  title: "Practice Test 9",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35, // minutes
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
        // Question 1: Linear equation
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "What is the solution to the equation $4x - 7 = 21$?",
          choices: [
            { id: "A", text: "$3.5$" },
            { id: "B", text: "$7$" },
            { id: "C", text: "$14$" },
            { id: "D", text: "$28$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Solve the linear equation step by step.\n\n$4x - 7 = 21$\n$4x = 21 + 7$\n$4x = 28$\n$x = 7$\n\n**Verification:** $4(7) - 7 = 28 - 7 = 21$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($3.5$): Would give $4(3.5) - 7 = 7$, not $21$\n• Choice C ($14$): Would give $4(14) - 7 = 49$, not $21$\n• Choice D ($28$): Would give $4(28) - 7 = 105$, not $21$",
          skills: ["linear-equations"]
        },

        // Question 2: Probability
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A jar contains $15$ red marbles, $10$ blue marbles, and $25$ green marbles. If one marble is selected at random, what is the probability that it is NOT green?",
          choices: [
            { id: "A", text: "$\\frac{1}{2}$" },
            { id: "B", text: "$\\frac{1}{5}$" },
            { id: "C", text: "$\\frac{3}{10}$" },
            { id: "D", text: "$\\frac{2}{5}$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Find the probability of NOT selecting a green marble.\n\nTotal marbles $= 15 + 10 + 25 = 50$\nNon-green marbles $= 15 + 10 = 25$\n\n$P(\\text{not green}) = \\frac{25}{50} = \\frac{1}{2}$\n\n**Why other choices are incorrect:**\n• Choice B ($\\frac{1}{5}$): This would be $P(\\text{blue}) = \\frac{10}{50}$\n• Choice C ($\\frac{3}{10}$): This would be $P(\\text{red}) = \\frac{15}{50}$\n• Choice D ($\\frac{2}{5}$): Calculation error",
          skills: ["probability"]
        },

        // Question 3: Adding polynomials
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which expression is equivalent to $(3x^2 - 5x + 2) + (2x^2 + 7x - 4)$?",
          choices: [
            { id: "A", text: "$5x^2 + 2x - 2$" },
            { id: "B", text: "$5x^2 - 2x + 6$" },
            { id: "C", text: "$5x^4 + 2x^2 - 2$" },
            { id: "D", text: "$6x^2 + 2x - 2$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Combine like terms when adding polynomials.\n\n$(3x^2 - 5x + 2) + (2x^2 + 7x - 4)$\n\n$x^2$ terms: $3x^2 + 2x^2 = 5x^2$\n$x$ terms: $-5x + 7x = 2x$\nconstants: $2 + (-4) = -2$\n\nResult: $5x^2 + 2x - 2$\n\n**Why other choices are incorrect:**\n• Choice B: Sign error on $2x - 2$ should not be $+6$\n• Choice C: Cannot multiply exponents when adding\n• Choice D: $3 + 2 = 5$, not $6$",
          skills: ["polynomials", "algebraic-expressions"]
        },

        // Question 4: Margin of error interpretation
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A survey of $400$ randomly selected adults in a city found that $68\\%$ support a new public transit proposal, with a margin of error of $4.5$ percentage points. Which of the following is the best interpretation of this result?",
          choices: [
            { id: "A", text: "Between $63.5\\%$ and $72.5\\%$ of all adults in the city support the proposal." },
            { id: "B", text: "Exactly $68\\%$ of all adults in the city support the proposal." },
            { id: "C", text: "Between $63.5\\%$ and $72.5\\%$ of the $400$ surveyed adults support the proposal." },
            { id: "D", text: "If the survey is repeated, $68\\%$ of new respondents will support the proposal." }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** The margin of error creates a confidence interval for the true population proportion.\n\n$68\\% \\pm 4.5\\%$ gives the interval $[63.5\\%, 72.5\\%]$\n\nThis interval estimates the range where the true proportion of ALL adults in the city likely falls.\n\n**Why other choices are incorrect:**\n• Choice B: Statistics cannot give an exact value for the population\n• Choice C: We know exactly how many surveyed ($68\\%$ of $400$); margin of error applies to the population\n• Choice D: Different samples will give different results, not guaranteed $68\\%$",
          skills: ["statistics", "margin-of-error"]
        },

        // Question 5: Similar triangles
        {
          id: 5,
          type: "fill-in",
          difficulty: "medium",
          question: "Triangle $ABC$ is similar to triangle $DEF$. In triangle $ABC$, $AB = 8$ and $BC = 12$. In triangle $DEF$, $DE = 14$. What is the length of $EF$?",
          correctAnswer: 21,
          explanation: "**The correct answer is 21.** In similar triangles, corresponding sides are proportional.\n\n$AB$ corresponds to $DE$, and $BC$ corresponds to $EF$.\n\nSet up the proportion:\n$\\frac{AB}{DE} = \\frac{BC}{EF}$\n$\\frac{8}{14} = \\frac{12}{EF}$\n\nCross multiply:\n$8 \\times EF = 14 \\times 12$\n$8 \\times EF = 168$\n$EF = \\frac{168}{8} = 21$\n\n**Calculator tip:** Verify that $\\frac{8}{14} = \\frac{12}{21}$ → Both equal $\\frac{4}{7}$ ✓",
          skills: ["similar-triangles", "proportions"]
        },

        // Question 6: Parallel lines and transversal
        {
          id: 6,
          type: "fill-in",
          difficulty: "medium",
          question: "Two parallel lines are cut by a transversal as shown. What is the measure, in degrees, of angle $x$?",
          diagram: {
            type: 'parallelLines',
            params: {
              angles: { x: true, y: '125°' },
              lineLabels: ['m', 'n', 't'],
              showParallelMarks: false
            }
          },
          correctAnswer: 55,
          explanation: "**The correct answer is 55.** When a transversal crosses parallel lines, angles at each intersection come in pairs.\n\nSupplementary angles sum to $180°$.\n\n$180° - 125° = 55°$\n\nThe angle measuring $55°$ is supplementary to the $125°$ angle at the same intersection point.\n\n**Key relationships for parallel lines cut by a transversal:**\n• Corresponding angles are equal\n• Alternate interior angles are equal\n• Co-interior (same-side interior) angles are supplementary",
          skills: ["parallel-lines", "angles"]
        },

        // Question 7: Exponential growth
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A scientist is studying a bacteria population that doubles every $3$ hours. If the initial population is $500$ bacteria, which function $P(t)$ models the population after $t$ hours?",
          choices: [
            { id: "A", text: "$P(t) = 500(2)^{\\frac{t}{3}}$" },
            { id: "B", text: "$P(t) = 500(2)^{3t}$" },
            { id: "C", text: "$P(t) = 500(3)^{\\frac{t}{2}}$" },
            { id: "D", text: "$P(t) = 500 + 2t$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** For exponential growth where the quantity doubles every $k$ units of time:\n\n$P(t) = P_0 \\times 2^{\\frac{t}{k}}$\n\nHere:\n• $P_0 = 500$ (initial population)\n• Doubling time $k = 3$ hours\n\nSo: $P(t) = 500(2)^{\\frac{t}{3}}$\n\n**Verification:** At $t = 3$: $P(3) = 500(2)^1 = 1000$ ✓ (doubled)\nAt $t = 6$: $P(6) = 500(2)^2 = 2000$ ✓ (doubled again)\n\n**Why other choices are incorrect:**\n• Choice B: Would triple after $1$ hour (way too fast)\n• Choice C: Wrong base and wrong exponent structure\n• Choice D: Linear, not exponential growth",
          skills: ["exponential-functions", "modeling"]
        },

        // Question 8: System of equations
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The system of equations below has solution $(x, y)$. What is the value of $x$?\n\n$3x + 2y = 19$\n$x - 2y = 5$",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Solve using elimination by adding the equations.\n\n$3x + 2y = 19$\n$x - 2y = 5$\n\nAdd the equations ($2y$ terms cancel):\n$4x = 24$\n$x = 6$\n\n**Verification:** If $x = 6$:\nFrom equation 2: $6 - 2y = 5 \\rightarrow y = 0.5$\nCheck in equation 1: $3(6) + 2(0.5) = 18 + 1 = 19$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($x = 2$): Would give $6 + 2y = 19$, so $y = 6.5$, but $2 - 13 \\neq 5$\n• Choice B ($x = 4$): Would give $12 + 2y = 19$, so $y = 3.5$, but $4 - 7 \\neq 5$\n• Choice D ($x = 8$): Would give $24 + 2y = 19$, so $y = -2.5$, but $8 - (-5) \\neq 5$",
          skills: ["systems-of-equations"]
        },

        // Question 9: Radians and degrees
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "An angle has a measure of $\\frac{5\\pi}{6}$ radians. What is the measure of this angle in degrees?",
          choices: [
            { id: "A", text: "$75°$" },
            { id: "B", text: "$120°$" },
            { id: "C", text: "$150°$" },
            { id: "D", text: "$210°$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Convert radians to degrees using the conversion factor.\n\n$\\pi$ radians $= 180°$\n\n$\\frac{5\\pi}{6} \\times \\frac{180°}{\\pi} = \\frac{5 \\times 180°}{6} = \\frac{900°}{6} = 150°$\n\n**Why other choices are incorrect:**\n• Choice A ($75°$): Would be $\\frac{5\\pi}{12}$ radians\n• Choice B ($120°$): Would be $\\frac{2\\pi}{3}$ radians\n• Choice D ($210°$): Would be $\\frac{7\\pi}{6}$ radians\n\n**Calculator tip:** Multiply $\\frac{5}{6}$ by $180$ to get the answer.",
          skills: ["radians-degrees", "angle-measures"]
        },

        // Question 10: Quadratic vertex
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The function $f(x) = -2(x - 4)^2 + 18$ is graphed in the $xy$-plane. Which of the following statements about the graph is true?",
          choices: [
            { id: "A", text: "The graph has a minimum value of $18$." },
            { id: "B", text: "The graph has a maximum value of $18$." },
            { id: "C", text: "The graph has a minimum value of $4$." },
            { id: "D", text: "The graph has a maximum value of $4$." }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** The function is in vertex form: $f(x) = a(x - h)^2 + k$\n\nHere: $a = -2$, $h = 4$, $k = 18$\n\nSince $a = -2 < 0$, the parabola opens **downward**, meaning it has a **maximum** value.\n\nThe vertex is at $(4, 18)$, so the maximum value is $18$ (occurring when $x = 4$).\n\n**Why other choices are incorrect:**\n• Choice A: Downward parabola has maximum, not minimum\n• Choice C: $4$ is the $x$-coordinate of the vertex, not a minimum\n• Choice D: $4$ is the $x$-coordinate, not the maximum value\n\n**Key insight:** When $a < 0$, the parabola opens down (∩ shape) → maximum at vertex.",
          skills: ["quadratic-functions", "vertex-form"]
        },

        // Question 11: Linear programming context
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A bakery makes cakes and pies. Each cake requires $3$ cups of flour and each pie requires $2$ cups of flour. The bakery has $60$ cups of flour available. If $c$ represents the number of cakes and $p$ represents the number of pies, which inequality represents this constraint?",
          choices: [
            { id: "A", text: "$3c + 2p \\leq 60$" },
            { id: "B", text: "$3c + 2p \\geq 60$" },
            { id: "C", text: "$2c + 3p \\leq 60$" },
            { id: "D", text: "$5(c + p) \\leq 60$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Set up the constraint for total flour usage.\n\nFlour for cakes: $3c$ cups\nFlour for pies: $2p$ cups\nTotal flour available: $60$ cups\n\nThe total flour used cannot exceed what's available:\n$3c + 2p \\leq 60$\n\n**Why other choices are incorrect:**\n• Choice B: $\\geq 60$ would mean they must use AT LEAST $60$ cups\n• Choice C: Switches the coefficients ($2$ for cakes, $3$ for pies)\n• Choice D: Assumes each item uses $5$ cups, which is incorrect\n\n**Verification:** If $c = 10$ and $p = 15$: $3(10) + 2(15) = 30 + 30 = 60$ ✓",
          skills: ["linear-inequalities", "modeling"]
        },

        // Question 12: Mean vs median
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which statement about the mean and median of the data set is correct?",
          questionFormula: {
            equation: "$$\\text{Data set: } 12, 15, 18, 19, 20, 22, 85$$"
          },
          choices: [
            { id: "A", text: "The mean is greater than the median." },
            { id: "B", text: "The median is greater than the mean." },
            { id: "C", text: "The mean and median are equal." },
            { id: "D", text: "The relationship cannot be determined without calculation." }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Calculate both measures.\n\n**Median:** With $7$ values, the median is the 4th value when ordered.\nMedian $= 19$\n\n**Mean:** $(12 + 15 + 18 + 19 + 20 + 22 + 85) \\div 7 = 191 \\div 7 \\approx 27.3$\n\nSince $27.3 > 19$, the **mean is greater than the median**.\n\n**Key insight:** The outlier ($85$) pulls the mean up significantly but doesn't affect the median, which is resistant to outliers.\n\n**Why other choices are incorrect:**\n• Choice B: The mean ($\\approx 27.3$) is greater than median ($19$)\n• Choice C: They are not equal\n• Choice D: We can determine this by observation or calculation",
          skills: ["statistics", "mean", "median"]
        },

        // Question 13: Factored form equation
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "What is the sum of the solutions to the equation $(x - 3)(x + 7) = 0$?",
          correctAnswer: -4,
          explanation: "**The correct answer is -4.** Use the zero product property.\n\n$(x - 3)(x + 7) = 0$\n\nEither $x - 3 = 0 \\rightarrow x = 3$\nOr $x + 7 = 0 \\rightarrow x = -7$\n\nSum of solutions: $3 + (-7) = -4$\n\n**Alternative method:** For any quadratic $ax^2 + bx + c = 0$, the sum of solutions equals $\\frac{-b}{a}$.\n\nExpanding: $x^2 + 4x - 21 = 0$\nSum $= \\frac{-4}{1} = -4$ ✓\n\n**Calculator tip:** Graph $y = (x - 3)(x + 7)$ and find the $x$-intercepts at $3$ and $-7$.",
          skills: ["quadratic-equations", "zero-product-property"]
        },

        // Question 14: Parabola and line intersection
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In the $xy$-plane, the graph of $y = x^2 - 4x + 3$ intersects the line $y = x - 1$ at how many points?",
          choices: [
            { id: "A", text: "Zero" },
            { id: "B", text: "One" },
            { id: "C", text: "Two" },
            { id: "D", text: "Three" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Find intersection points by setting the equations equal.\n\n$x^2 - 4x + 3 = x - 1$\n$x^2 - 5x + 4 = 0$\n$(x - 1)(x - 4) = 0$\n$x = 1$ or $x = 4$\n\nThere are **two** intersection points: at $x = 1$ and $x = 4$.\n\n**Verification:**\n• At $x = 1$: Parabola: $1 - 4 + 3 = 0$; Line: $1 - 1 = 0$ ✓\n• At $x = 4$: Parabola: $16 - 16 + 3 = 3$; Line: $4 - 1 = 3$ ✓\n\n**Why other choices are incorrect:**\n• The discriminant of $x^2 - 5x + 4 = 0$ is $25 - 16 = 9 > 0$, confirming two real solutions\n\n**Calculator tip:** Graph both equations and count intersection points.",
          skills: ["quadratic-functions", "systems-of-equations"]
        },

        // Question 15: Equivalent expressions with exponents
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which expression is equivalent to $(2x^3y^2)^3$?",
          choices: [
            { id: "A", text: "$6x^6y^5$" },
            { id: "B", text: "$6x^9y^6$" },
            { id: "C", text: "$8x^6y^5$" },
            { id: "D", text: "$8x^9y^6$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Apply the power rule: $(ab)^n = a^n b^n$ and $(a^m)^n = a^{mn}$\n\n$(2x^3y^2)^3 = 2^3 \\times (x^3)^3 \\times (y^2)^3$\n$= 8 \\times x^9 \\times y^6$\n$= 8x^9y^6$\n\n**Why other choices are incorrect:**\n• Choice A: $2^3 = 8$, not $6$; also wrong exponents\n• Choice B: $2^3 = 8$, not $6$\n• Choice C: Exponents should be $9$ and $6$, not $6$ and $5$\n\n**Key rules:**\n• $(x^3)^3 = x^{3 \\times 3} = x^9$\n• $(y^2)^3 = y^{2 \\times 3} = y^6$",
          skills: ["exponents", "algebraic-expressions"]
        },

        // Question 16: Percent increase
        {
          id: 16,
          type: "fill-in",
          difficulty: "medium",
          question: "A store increases the price of an item from \\$80 to \\$100. What is the percent increase in the price?",
          correctAnswer: 25,
          explanation: "**The correct answer is 25.** Calculate percent increase using the formula.\n\nPercent increase $= \\frac{\\text{New} - \\text{Original}}{\\text{Original}} \\times 100$\n\n$= \\frac{100 - 80}{80} \\times 100$\n$= \\frac{20}{80} \\times 100$\n$= 0.25 \\times 100$\n$= 25\\%$\n\n**Common error:** Don't divide by the new value ($100$). Always divide by the original value ($80$).\n\n**Verification:** $80 \\times 1.25 = 100$ ✓",
          skills: ["percent-change"]
        },

        // Question 17: Function evaluation
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $f(x) = 2x^2 - 3x + 5$, what is the value of $f(-2)$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$7$" },
            { id: "C", text: "$15$" },
            { id: "D", text: "$19$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Substitute $x = -2$ into the function.\n\n$f(-2) = 2(-2)^2 - 3(-2) + 5$\n$= 2(4) - (-6) + 5$\n$= 8 + 6 + 5$\n$= 19$\n\n**Why other choices are incorrect:**\n• Choice A: Likely forgot to square the negative\n• Choice B: Sign error with $-3(-2)$\n• Choice C: Arithmetic error\n\n**Key reminder:** $(-2)^2 = 4$ (positive), and $-3(-2) = +6$",
          skills: ["function-evaluation"]
        },

        // Question 18: Equilateral triangle height
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "An equilateral triangle has a perimeter of $360$ centimeters. The height of this triangle can be written as $k\\sqrt{3}$ centimeters, where $k$ is a constant. What is the value of $k$?",
          correctAnswer: 60,
          explanation: "**The correct answer is $60$.** Find the side length, then use the equilateral triangle height formula.\n\n**Step 1: Find the side length**\nEach side $= \\frac{360}{3} = 120$ cm\n\n**Step 2: Find the height**\nFor an equilateral triangle with side $s$, the height $= \\frac{s\\sqrt{3}}{2}$.\n$$h = \\frac{120\\sqrt{3}}{2} = 60\\sqrt{3}$$\n\n**Step 3: Identify $k$**\nSince $h = k\\sqrt{3}$ and $h = 60\\sqrt{3}$, we get $k = 60$.\n\n**Verification:** Splitting the equilateral triangle creates two 30-60-90 right triangles with hypotenuse $120$, short leg $60$, and long leg $60\\sqrt{3}$. By Pythagorean theorem: $60^2 + (60\\sqrt{3})^2 = 3{,}600 + 10{,}800 = 14{,}400 = 120^2$ ✓",
          skills: ['Geometry', 'Special Right Triangles']
        },

        // Question 19: Perpendicular lines
        {
          id: 19,
          type: "fill-in",
          difficulty: "hard",
          question: "In the $xy$-plane, line $\\ell_1$ has equation $ax + 3y = 12$ and line $\\ell_2$ has equation $6x - 4y = 8$. If the two lines are perpendicular, what is the value of $a$?",
          correctAnswer: 2,
          explanation: "**The correct answer is $2$.** Use the condition that perpendicular lines have slopes whose product is $-1$.\n\n**Step 1: Find the slope of line $\\ell_2$**\n$6x - 4y = 8 \\rightarrow -4y = -6x + 8 \\rightarrow y = \\frac{3}{2}x - 2$\nSlope of $\\ell_2 = \\frac{3}{2}$\n\n**Step 2: Find the slope of line $\\ell_1$**\n$ax + 3y = 12 \\rightarrow 3y = -ax + 12 \\rightarrow y = -\\frac{a}{3}x + 4$\nSlope of $\\ell_1 = -\\frac{a}{3}$\n\n**Step 3: Apply the perpendicular condition**\n$$\\left(-\\frac{a}{3}\\right) \\cdot \\frac{3}{2} = -1$$\n$$-\\frac{a}{2} = -1$$\n$$a = 2$$\n\n**Verification:** With $a = 2$: slope of $\\ell_1 = -\\frac{2}{3}$. Product: $\\left(-\\frac{2}{3}\\right)\\left(\\frac{3}{2}\\right) = -1$ ✓",
          skills: ['Geometry', 'Perpendicular Lines']
        },

        // Question 20: Infinite solutions parametric point
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$7x + 6y = 5$\n$28x + 24y = 20$\n\nFor each real number $r$, which of the following points lies on the graph of each equation in the $xy$-plane?",
          choices: [
            { id: "A", text: "$\\left(r, \\frac{5 - 7r}{6}\\right)$" },
            { id: "B", text: "$\\left(r, \\frac{5 + 7r}{6}\\right)$" },
            { id: "C", text: "$\\left(r, \\frac{5 - 7r}{24}\\right)$" },
            { id: "D", text: "$\\left(r, \\frac{7r - 5}{6}\\right)$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** First, recognize that the system has infinitely many solutions.\n\n**Step 1: Check if the equations are equivalent**\n$28x + 24y = 20$ is exactly $4 \\times (7x + 6y = 5)$.\nThe equations represent the same line, so every point on this line is a solution.\n\n**Step 2: Express $y$ in terms of $r$**\nSubstitute $x = r$ into $7x + 6y = 5$:\n$7r + 6y = 5$\n$6y = 5 - 7r$\n$y = \\frac{5 - 7r}{6}$\n\nSo the point $\\left(r, \\frac{5 - 7r}{6}\\right)$ lies on both equations for every real number $r$.\n\n**Why other choices are incorrect:**\n• Choice B: Sign error — uses $5 + 7r$ instead of $5 - 7r$\n• Choice C: Uses denominator $24$ from the second equation instead of $6$\n• Choice D: Reversed the subtraction ($7r - 5$ instead of $5 - 7r$)\n\n**Key concept:** When two equations are multiples of each other, the system has infinitely many solutions. Set $x = r$ and solve for $y$ to express all solutions parametrically.",
          skills: ['Algebra', 'Systems of Equations']
        },

        // Question 21: Parabola tangent to horizontal line
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "In the $xy$-plane, the graph of $y = -x^2 + 12x - 40$ intersects the line $y = c$ at exactly one point. What is the value of $c$?",
          correctAnswer: -4,
          explanation: "**The correct answer is $-4$.** Find the vertex of the parabola.\n\n**Step 1: Find the $x$-coordinate of the vertex**\n$$x = -\\frac{b}{2a} = -\\frac{12}{2(-1)} = 6$$\n\n**Step 2: Find the $y$-coordinate of the vertex**\n$$y = -(6)^2 + 12(6) - 40 = -36 + 72 - 40 = -4$$\n\nThe vertex is at $(6, -4)$.\n\n**Step 3: Determine $c$**\nA horizontal line $y = c$ intersects a parabola at exactly one point only when it passes through the vertex. Since this parabola opens downward ($a = -1 < 0$), the vertex is the maximum point.\n\n$$c = -4$$\n\n**Verification:** Substituting $y = -4$: $-4 = -x^2 + 12x - 40$, so $x^2 - 12x + 36 = 0$, giving $(x - 6)^2 = 0$. Exactly one solution: $x = 6$ ✓\n\n**Key concept:** A horizontal line $y = c$ is tangent to a parabola when $c$ equals the $y$-coordinate of the vertex.",
          skills: ['Advanced Math', 'Quadratic Equations']
        },

        // Question 22: Nonlinear system — exactly one solution
        {
          id: 22,
          type: "fill-in",
          difficulty: "hard",
          question: "$y + k = x + 10$\n$y - k = x^2 - 3x$\n\nIn the given system of equations, $k$ is a constant. The system has exactly one real solution. What is the value of $k$?",
          correctAnswer: 7,
          explanation: "**The correct answer is $7$.** Eliminate $y$ and use the discriminant condition.\n\n**Step 1: Solve for $y$ from the first equation**\n$y = x + 10 - k$\n\n**Step 2: Substitute into the second equation**\n$(x + 10 - k) - k = x^2 - 3x$\n$x + 10 - 2k = x^2 - 3x$\n\n**Step 3: Rearrange to standard form**\n$x^2 - 4x + 2k - 10 = 0$\n\n**Step 4: Apply the discriminant condition**\nFor exactly one real solution, the discriminant equals zero:\n$$(-4)^2 - 4(1)(2k - 10) = 0$$\n$$16 - 8k + 40 = 0$$\n$$56 - 8k = 0$$\n$$k = 7$$\n\n**Verification:** With $k = 7$: $x^2 - 4x + 4 = 0 \\rightarrow (x - 2)^2 = 0 \\rightarrow x = 2$.\nThen $y = 2 + 10 - 7 = 5$. Check second equation: $5 - 7 = -2$ and $4 - 6 = -2$ ✓\n\n**Key concept:** Eliminate one variable, then set the discriminant of the resulting quadratic equal to zero for exactly one solution.",
          skills: ['Advanced Math', 'Systems of Equations']
        }
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
        // Question 2: Table data interpretation
        {
          id: 2,
          type: "fill-in",
          difficulty: "easy",
          question: "The table shows the number of books read by students in a class.",
          diagram: {
            type: "table",
            params: {
              headers: ["Books Read", "Number of Students"],
              rows: [
                ["0-2", "4"],
                ["3-5", "8"],
                ["6-8", "6"],
                ["9-11", "2"]
              ]
            }
          },
          questionContinued: "How many students are in the class?",
          correctAnswer: 20,
          explanation: "**The correct answer is 20.** Add up all the students in each category.\n\n$4 + 8 + 6 + 2 = 20$ students\n\nThis is a frequency table showing the distribution of books read.",
          skills: ["data-analysis", "frequency-tables"]
        },
        // Question 3: Parallel lines angle relationship
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Two parallel lines are cut by a transversal as shown. What is the measure of the corresponding angle $x$?",
          diagram: {
            type: 'parallelLines',
            params: {
              angles: { x: true, y: '72°' },
              lineLabels: ['l', 'm', 't'],
              showParallelMarks: false
            }
          },
          choices: [
            { id: "A", text: "$18°$" },
            { id: "B", text: "$72°$" },
            { id: "C", text: "$108°$" },
            { id: "D", text: "$288°$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Corresponding angles formed by a transversal cutting parallel lines are equal.\n\nIf one angle measures $72°$, its corresponding angle also measures $72°$.\n\n**Why other choices are incorrect:**\n• Choice A: $18°$ is not related to $72°$ in this context\n• Choice C: $108°$ would be the supplementary angle ($180° - 72°$)\n• Choice D: $288°$ is greater than $180°$, impossible for a single angle\n\n**Key angle relationships:**\n• Corresponding angles: equal\n• Alternate interior angles: equal\n• Co-interior angles: supplementary (sum to $180°$)",
          skills: ["parallel-lines", "angles"]
        },
        // Question 4: Cost equation
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A gym charges a \\$50 registration fee plus \\$25 per month. Which equation represents the total cost $C$, in dollars, for $m$ months of membership?",
          choices: [
            { id: "A", text: "$C = 50m + 25$" },
            { id: "B", text: "$C = 25m + 50$" },
            { id: "C", text: "$C = 75m$" },
            { id: "D", text: "$C = 50(m + 25)$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Build the cost equation from the given information.\n\n• Fixed cost (registration): \\$50 (one-time fee)\n• Variable cost: \\$25 per month $\\times m$ months $= 25m$\n\n**Total cost:** $C = 25m + 50$\n\n**Verification:** For $3$ months: $C = 25(3) + 50 = 75 + 50 = \\$125$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: Switches the coefficients\n• Choice C: Ignores the registration fee structure\n• Choice D: Multiplies incorrectly",
          skills: ["linear-equations", "modeling"]
        },
        // Question 5: Pythagorean theorem
        {
          id: 5,
          type: "fill-in",
          difficulty: "easy",
          question: "A ladder is placed against a wall. The base of the ladder is $6$ feet from the wall, and the ladder reaches $8$ feet up the wall. What is the length of the ladder, in feet?",
          correctAnswer: 10,
          explanation: "**The correct answer is 10.** Use the Pythagorean theorem.\n\nThe ladder, wall, and ground form a right triangle:\n• One leg $= 6$ feet (ground)\n• Other leg $= 8$ feet (wall)\n• Hypotenuse $=$ ladder length\n\n$a^2 + b^2 = c^2$\n$6^2 + 8^2 = c^2$\n$36 + 64 = c^2$\n$100 = c^2$\n$c = 10$ feet\n\n**Recognition:** This is a $6$-$8$-$10$ right triangle (a multiple of $3$-$4$-$5$).",
          skills: ["pythagorean-theorem", "right-triangles"]
        },
        // Question 6: Cubic function zeros
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The function $f(x) = x(x - 2)(x + 5)$ has zeros at which values of $x$?",
          choices: [
            { id: "A", text: "$x = 0$, $x = 2$, and $x = 5$" },
            { id: "B", text: "$x = 0$, $x = 2$, and $x = -5$" },
            { id: "C", text: "$x = 0$, $x = -2$, and $x = 5$" },
            { id: "D", text: "$x = 0$, $x = -2$, and $x = -5$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Find zeros by setting each factor equal to zero.\n\n$x(x - 2)(x + 5) = 0$\n\n• $x = 0$\n• $x - 2 = 0 \\rightarrow x = 2$\n• $x + 5 = 0 \\rightarrow x = -5$\n\nThe zeros are $x = 0$, $x = 2$, and $x = -5$\n\n**Why other choices are incorrect:**\n• Choice A: The factor $(x + 5)$ gives $x = -5$, not $x = 5$\n• Choice C: The factor $(x - 2)$ gives $x = 2$, not $x = -2$\n• Choice D: Both non-zero values have wrong signs\n\n**Calculator tip:** Graph the function and locate where it crosses the $x$-axis.",
          skills: ["polynomial-functions", "zeros"]
        },
        // Question 7: Y-intercept from function
        {
          id: 7,
          type: "fill-in",
          difficulty: "medium",
          question: "The function $h(x) = x^2 - 6x + 8$ is graphed in the $xy$-plane. What is the $y$-coordinate of the $y$-intercept?",
          correctAnswer: 8,
          explanation: "**The correct answer is 8.** The $y$-intercept occurs when $x = 0$.\n\n$h(0) = (0)^2 - 6(0) + 8 = 0 - 0 + 8 = 8$\n\nThe $y$-intercept is at the point $(0, 8)$, so the $y$-coordinate is $8$.\n\n**Key insight:** For any function $f(x)$, the $y$-intercept is always $f(0)$, which equals the constant term when $x = 0$.",
          skills: ["quadratic-functions", "intercepts"]
        },
        // Question 8: Linear equation from context
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A video streaming service has $3$ million subscribers at the start of the year. Each month, the service gains $150{,}000$ new subscribers. Which equation represents the total number of subscribers $S$, in millions, after $m$ months?",
          choices: [
            { id: "A", text: "$S = 3 + 0.15m$" },
            { id: "B", text: "$S = 3 + 150m$" },
            { id: "C", text: "$S = 3m + 0.15$" },
            { id: "D", text: "$S = 0.15m$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Build the equation using the given information.\n\n• Initial subscribers: $3$ million\n• Monthly gain: $150{,}000 = 0.15$ million\n\n**Equation:** $S = 3 + 0.15m$ (in millions)\n\n**Verification:** After $10$ months: $S = 3 + 0.15(10) = 3 + 1.5 = 4.5$ million ✓\n\n**Why other choices are incorrect:**\n• Choice B: $150$ million per month is way too large\n• Choice C: Puts the multiplier on the wrong term\n• Choice D: Ignores the initial $3$ million subscribers",
          skills: ["linear-equations", "modeling"]
        },
        // Question 9: Function transformation
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The graph of $y = f(x)$ passes through the point $(3, 7)$. Through which point must the graph of $y = f(x - 2) + 4$ pass?",
          choices: [
            { id: "A", text: "$(1, 11)$" },
            { id: "B", text: "$(1, 3)$" },
            { id: "C", text: "$(5, 11)$" },
            { id: "D", text: "$(5, 3)$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Apply the transformations to the original point.\n\nOriginal: $f(x)$ passes through $(3, 7)$, meaning $f(3) = 7$\n\nFor $y = f(x - 2) + 4$:\n• $(x - 2)$ shifts the graph **right** $2$ units\n• $+4$ shifts the graph **up** $4$ units\n\nNew $x$-coordinate: $3 + 2 = 5$\nNew $y$-coordinate: $7 + 4 = 11$\n\nThe new point is $(5, 11)$\n\n**Why other choices are incorrect:**\n• $(x - 2)$ shifts RIGHT, not left, so $x$ increases\n• $+4$ shifts UP, not down, so $y$ increases\n\n**Verification:** When $x = 5$ in the new function: $f(5 - 2) + 4 = f(3) + 4 = 7 + 4 = 11$ ✓",
          skills: ["function-transformations"]
        },
        // Question 10: System of equations
        {
          id: 10,
          type: "fill-in",
          difficulty: "medium",
          question: "If $2x + 3y = 12$ and $4x - 3y = 6$, what is the value of $x + y$?",
          correctAnswer: 5,
          explanation: "**The correct answer is 5.** Solve the system using elimination.\n\nAdd the two equations:\n$2x + 3y = 12$\n$4x - 3y = 6$\n───────────\n$6x = 18$\n$x = 3$\n\nSubstitute $x = 3$ into the first equation:\n$2(3) + 3y = 12$\n$6 + 3y = 12$\n$3y = 6$\n$y = 2$\n\n**Therefore:** $x + y = 3 + 2 = 5$\n\n**Verification:** \n• $2(3) + 3(2) = 6 + 6 = 12$ ✓\n• $4(3) - 3(2) = 12 - 6 = 6$ ✓",
          skills: ["systems-of-equations"]
        },
        // Question 11: Multi-variable fraction equation
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$\\frac{15}{a} = \\frac{15}{b} + \\frac{15}{c}$\n\nThe given equation relates the distinct positive numbers $a$, $b$, and $c$, where $c > a$. Which of the following correctly expresses $b$ in terms of $a$ and $c$?",
          choices: [
            { id: "A", text: "$b = \\frac{ac}{c - a}$" },
            { id: "B", text: "$b = \\frac{ac}{a + c}$" },
            { id: "C", text: "$b = \\frac{a + c}{ac}$" },
            { id: "D", text: "$b = a - c$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Isolate $b$ by algebraic manipulation.\n\n**Step 1: Divide both sides by $15$**\n$$\\frac{1}{a} = \\frac{1}{b} + \\frac{1}{c}$$\n\n**Step 2: Isolate $\\frac{1}{b}$**\n$$\\frac{1}{b} = \\frac{1}{a} - \\frac{1}{c}$$\n\n**Step 3: Combine the right side**\n$$\\frac{1}{b} = \\frac{c - a}{ac}$$\n\n**Step 4: Take the reciprocal**\n$$b = \\frac{ac}{c - a}$$\n\n**Verification:** Let $a = 3$, $c = 6$. Then $b = \\frac{18}{3} = 6$.\nCheck: $\\frac{15}{3} = \\frac{15}{6} + \\frac{15}{6} = 2.5 + 2.5 = 5$ and $\\frac{15}{3} = 5$ ✓\n\n**Why other choices are incorrect:**\n• Choice B: Uses $a + c$ instead of $c - a$ — this would come from $\\frac{1}{b} = \\frac{1}{a} + \\frac{1}{c}$\n• Choice C: This is $\\frac{1}{b}$, not $b$ (forgot to take the reciprocal)\n• Choice D: Incorrect simplification — the equation involves reciprocals, not simple subtraction\n\n**Key concept:** When solving equations with reciprocals, work with $\\frac{1}{x}$ form, combine fractions, then take the reciprocal at the end.",
          skills: ['Advanced Math', 'Rational Equations']
        },
        // Question 12: Area calculation
        {
          id: 12,
          type: "fill-in",
          difficulty: "medium",
          question: "A triangle has a base of $14$ inches and a height of $9$ inches. What is the area of the triangle, in square inches?",
          correctAnswer: 63,
          explanation: "**The correct answer is 63.** Use the triangle area formula.\n\nArea $= \\frac{1}{2} \\times \\text{base} \\times \\text{height}$\n$= \\frac{1}{2} \\times 14 \\times 9$\n$= \\frac{1}{2} \\times 126$\n$= 63$ square inches\n\n**Calculator tip:** $14 \\times 9 \\div 2 = 63$",
          skills: ["area", "triangles"]
        },
        // Question 13: Poll proportion scaling
        {
          id: 13,
          type: "fill-in",
          difficulty: "hard",
          question: "In a random poll of $600$ voters in a town, $420$ said they would support Candidate A. If the town has $45{,}000$ eligible voters, approximately how many of the eligible voters would be expected to support Candidate A based on this poll?",
          correctAnswer: '31500',
          explanation: "**The correct answer is $31{,}500$.** Scale the poll proportion to the full population.\n\n**Step 1: Find the proportion from the poll**\n$$\\frac{420}{600} = 0.70 = 70\\%$$\n\n**Step 2: Apply to the full population**\n$$0.70 \\times 45{,}000 = 31{,}500$$\n\n**Verification:** $\\frac{420}{600} = \\frac{7}{10}$, and $\\frac{7}{10} \\times 45{,}000 = 31{,}500$ ✓\n\n**Key concept:** In proportion problems, the ratio in the sample is assumed to represent the ratio in the population: $\\frac{\\text{sample favorable}}{\\text{sample total}} = \\frac{\\text{population favorable}}{\\text{population total}}$.",
          skills: ['Data Analysis', 'Proportions']
        },
        // Question 14: Combined rates
        {
          id: 14,
          type: "fill-in",
          difficulty: "hard",
          question: "Machine A can complete a job in $6$ hours, and Machine B can complete the same job in $4$ hours. If both machines work together at their respective rates, how many hours will it take to complete the job?",
          correctAnswer: '2.4',
          explanation: "**The correct answer is $2.4$ hours.** Add the individual rates to find the combined rate.\n\n**Step 1: Find each machine's rate**\n• Machine A: $\\frac{1}{6}$ of the job per hour\n• Machine B: $\\frac{1}{4}$ of the job per hour\n\n**Step 2: Add the rates**\n$$\\frac{1}{6} + \\frac{1}{4} = \\frac{2}{12} + \\frac{3}{12} = \\frac{5}{12}$$\n\nTogether they complete $\\frac{5}{12}$ of the job per hour.\n\n**Step 3: Find the time**\n$$\\text{Time} = \\frac{1}{\\text{Rate}} = \\frac{1}{5/12} = \\frac{12}{5} = 2.4 \\text{ hours}$$\n\n**Verification:** In $2.4$ hours, Machine A completes $\\frac{2.4}{6} = 0.4$ of the job, and Machine B completes $\\frac{2.4}{4} = 0.6$ of the job. Total: $0.4 + 0.6 = 1$ (complete job) ✓\n\n**Key concept:** For combined work problems: add rates, not times. Rate $= \\frac{1}{\\text{time}}$, and combined time $= \\frac{1}{\\text{sum of rates}}$.",
          skills: ['Problem Solving', 'Rates']
        },
        // Question 15: Substitution
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $a = 3b$ and $2a + b = 35$, what is the value of $b$?",
          choices: [
            { id: "A", text: "$5$" },
            { id: "B", text: "$7$" },
            { id: "C", text: "$15$" },
            { id: "D", text: "$21$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Use substitution to solve.\n\nSubstitute $a = 3b$ into the second equation:\n$2(3b) + b = 35$\n$6b + b = 35$\n$7b = 35$\n$b = 5$\n\n**Verification:** If $b = 5$, then $a = 3(5) = 15$\nCheck: $2(15) + 5 = 30 + 5 = 35$ ✓\n\n**Why other choices are incorrect:**\n• Choice B ($b = 7$): Would give $a = 21$, and $2(21) + 7 = 49 \\neq 35$\n• Choice C ($b = 15$): This is the value of $a$, not $b$\n• Choice D ($b = 21$): Would give $a = 63$, far too large",
          skills: ["systems-of-equations", "substitution"]
        },
        // Question 16: Linear context interpretation
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The equation $C = 0.08m + 35$ models the monthly cost $C$, in dollars, of a phone plan where $m$ is the number of minutes used over the plan limit. What does $35$ represent in this context?",
          choices: [
            { id: "A", text: "The cost per minute over the limit" },
            { id: "B", text: "The base monthly cost before overage charges" },
            { id: "C", text: "The number of minutes included in the plan" },
            { id: "D", text: "The total cost for $35$ overage minutes" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** In $C = 0.08m + 35$, identify what $35$ represents.\n\nThe constant term $35$ is the cost when $m = 0$ (no overage minutes).\n\nThis is the **base monthly cost** before any overage charges are added.\n\n**Why other choices are incorrect:**\n• Choice A: $0.08$ is the cost per minute, not $35$\n• Choice C: $35$ is a dollar amount, not a count of minutes\n• Choice D: The cost for $35$ overage minutes would be $0.08(35) + 35 = \\$37.80$",
          skills: ["linear-equations", "function-interpretation"]
        },
        // Question 17: Data table - g(x) = f(x)/(x+2), find y-intercept of f
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The table gives the values of the function $g$ for some values of $x$, where $g(x) = \\frac{f(x)}{x + 2}$ and $f$ is a linear function. What is the $y$-intercept of the graph of $y = f(x)$ in the $xy$-plane?",
          diagram: {
            type: 'dataTable',
            params: {
              headers: ['x', 'g(x)'],
              rows: [
                ['-5', '0'],
                ['0', '5'],
                ['4', '3']
              ]
            }
          },
          choices: [
            { id: "A", text: "$(0, -5)$" },
            { id: "B", text: "$(0, 10)$" },
            { id: "C", text: "$(0, 20)$" },
            { id: "D", text: "$(0, 30)$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Since $g(x) = \\frac{f(x)}{x + 2}$, we have $f(x) = g(x) \\cdot (x + 2)$.\n\nUsing the table values:\n• At $x = -5$: $f(-5) = 0 \\cdot (-5 + 2) = 0 \\cdot (-3) = 0$\n• At $x = 0$: $f(0) = 5 \\cdot (0 + 2) = 5 \\cdot 2 = 10$\n• At $x = 4$: $f(4) = 3 \\cdot (4 + 2) = 3 \\cdot 6 = 18$\n\nSince $f$ is linear, find its equation using two points $(-5, 0)$ and $(0, 10)$:\n$\\text{slope} = \\frac{10 - 0}{0 - (-5)} = \\frac{10}{5} = 2$\n\n$f(x) = 2(x + 5) = 2x + 10$\n\nVerify with $(4, 18)$: $f(4) = 2(4) + 10 = 8 + 10 = 18$ ✓\n\nThe $y$-intercept is $f(0) = 10$, so the $y$-intercept is $(0, 10)$.\n\n**Why other choices are incorrect:**\n• Choice A: $(0, -5)$ confuses the $x$-intercept value with the $y$-intercept\n• Choice C: $(0, 20)$ likely a computation error doubling the correct answer\n• Choice D: $(0, 30)$ results from an incorrect slope calculation",
          skills: ["function-operations", "linear-functions", "tables"]
        },
        // Question 17: Radical exponents
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Which expression is equivalent to $x^{\\frac{2}{3}} \\cdot x^{\\frac{1}{6}}$?",
          choices: [
            { id: "A", text: "$x^{\\frac{1}{9}}$" },
            { id: "B", text: "$x^{\\frac{1}{3}}$" },
            { id: "C", text: "$x^{\\frac{5}{6}}$" },
            { id: "D", text: "$x^{\\frac{2}{9}}$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** When multiplying powers with the same base, add exponents.\n\n$x^{\\frac{2}{3}} \\cdot x^{\\frac{1}{6}} = x^{\\frac{2}{3} + \\frac{1}{6}}$\n\nFind common denominator:\n$\\frac{2}{3} = \\frac{4}{6}$\n\n$\\frac{4}{6} + \\frac{1}{6} = \\frac{5}{6}$\n\n**Result:** $x^{\\frac{5}{6}}$\n\n**Why other choices are incorrect:**\n• Choice A: Would require multiplying exponents (wrong operation)\n• Choice B: $\\frac{2}{3} + \\frac{1}{6} \\neq \\frac{1}{3}$\n• Choice D: Would require multiplying exponents\n\n**Key rule:** $x^a \\cdot x^b = x^{a+b}$",
          skills: ["exponents", "radicals"]
        },
        // Question 18: Radical equation
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "What is the solution to the equation $\\sqrt{3x + 7} = x - 1$?",
          correctAnswer: 6,
          explanation: "**The correct answer is $6$.** Square both sides and check for extraneous solutions.\n\n**Step 1: Square both sides**\n$$3x + 7 = (x - 1)^2 = x^2 - 2x + 1$$\n\n**Step 2: Rearrange to standard form**\n$$x^2 - 2x + 1 - 3x - 7 = 0$$\n$$x^2 - 5x - 6 = 0$$\n\n**Step 3: Factor and solve**\n$$(x - 6)(x + 1) = 0$$\n$$x = 6 \\text{ or } x = -1$$\n\n**Step 4: Check for extraneous solutions**\n• $x = 6$: $\\sqrt{3(6) + 7} = \\sqrt{25} = 5$ and $6 - 1 = 5$ ✓\n• $x = -1$: $\\sqrt{3(-1) + 7} = \\sqrt{4} = 2$ and $-1 - 1 = -2$ ✗ (extraneous)\n\nThe only valid solution is $x = 6$.\n\n**Key concept:** When solving radical equations by squaring, always check solutions in the original equation. Squaring can introduce extraneous solutions because $\\sqrt{a} \\geq 0$ by definition.",
          skills: ['Advanced Math', 'Radical Equations']
        },
        // Question 19: Quadratic with vertex and point (graph-based)
        {
          id: 19,
          type: "fill-in",
          difficulty: "hard",
          question: "The function $f$ is defined by $f(x) = 2x^2 + bx + c$, where $b$ and $c$ are constants. The graph of $y = f(x)$ in the $xy$-plane is shown. What is the value of $b + c$?",
          diagram: {
            type: "parabola",
            params: {
              vertex: { h: 3, k: -5 },
              a: 2,
              xRange: [-2, 8],
              yRange: [-8, 16],
              xTickInterval: 2,
              yTickInterval: 2,
              gridInterval: 1,
              showVertex: true,
              highlightPoints: [[0, 13]],
              label: "y = f(x)"
            }
          },
          correctAnswer: 1,
          explanation: "**The correct answer is $1$.** Read the vertex and a point from the graph, then use vertex form.\n\n**Step 1: Read the graph**\nFrom the graph, the vertex is at $(3, -5)$ and the curve passes through $(0, 13)$.\n\n**Step 2: Write in vertex form**\nSince $a = 2$ and vertex $= (3, -5)$:\n$f(x) = 2(x - 3)^2 - 5$\n\n**Step 3: Expand**\n$f(x) = 2(x^2 - 6x + 9) - 5 = 2x^2 - 12x + 18 - 5 = 2x^2 - 12x + 13$\n\n**Step 4: Identify $b$ and $c$**\n$b = -12$ and $c = 13$\n\n**Step 5: Calculate $b + c$**\n$b + c = -12 + 13 = 1$\n\n**Verification:**\n• $f(0) = 2(0) - 12(0) + 13 = 13$ ✓ (matches the point on the graph)\n• Vertex at $x = \\frac{-(-12)}{2(2)} = 3$, $f(3) = 18 - 36 + 13 = -5$ ✓\n\n**Key concept:** Read key features (vertex, intercepts) from the graph, then use vertex form $a(x - h)^2 + k$ to build the equation and expand to standard form.",
          skills: ['Advanced Math', 'Quadratic Equations']
        },
        // Question 20: Parabola-line system — exactly one intersection
        {
          id: 20,
          type: "fill-in",
          difficulty: "hard",
          question: "In the $xy$-plane, the line $y = -2x + k$ is tangent to the parabola $y = x^2 - 6x + 5$. What is the value of $k$?",
          correctAnswer: 1,
          explanation: "**The correct answer is $1$.** Set the equations equal and apply the discriminant condition.\n\n**Step 1: Set the equations equal**\n$$x^2 - 6x + 5 = -2x + k$$\n$$x^2 - 4x + 5 - k = 0$$\n\n**Step 2: Apply the tangent condition**\nFor the line to be tangent (exactly one intersection), the discriminant must equal zero:\n$$(-4)^2 - 4(1)(5 - k) = 0$$\n$$16 - 20 + 4k = 0$$\n$$4k - 4 = 0$$\n$$k = 1$$\n\n**Verification:** With $k = 1$: $x^2 - 4x + 4 = 0 \\rightarrow (x - 2)^2 = 0 \\rightarrow x = 2$.\nParabola: $4 - 12 + 5 = -3$. Line: $-4 + 1 = -3$ ✓. Exactly one intersection point at $(2, -3)$.\n\n**Key concept:** A line is tangent to a curve when they intersect at exactly one point. Setting them equal yields a quadratic — for tangency, its discriminant must be zero.",
          skills: ['Advanced Math', 'Quadratic Equations']
        },
        // Question 21: Complex radical equation
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In the given equation, $k$ is a positive constant. Which of the following is one of the solutions to the given equation?\n\n$\\frac{x^2}{\\sqrt{x^2 - k^2}} = \\frac{k^2}{\\sqrt{x^2 - k^2}} + 17$",
          choices: [
            { id: "A", text: "$-k$" },
            { id: "B", text: "$\\sqrt{17^2 - k^2}$" },
            { id: "C", text: "$-\\sqrt{k^2 + 17^2}$" },
            { id: "D", text: "$\\sqrt{k^2 - 17^2}$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Solve this equation involving radicals.\n\n**Step 1:** Multiply both sides by $\\sqrt{x^2 - k^2}$:\n$x^2 = k^2 + 17\\sqrt{x^2 - k^2}$\n\n**Step 2:** Rearrange and isolate the radical:\n$x^2 - k^2 = 17\\sqrt{x^2 - k^2}$\n\n**Step 3:** Let $u = \\sqrt{x^2 - k^2}$, so $u^2 = x^2 - k^2$:\n$u^2 = 17u$\n$u^2 - 17u = 0$\n$u(u - 17) = 0$\n$u = 0$ or $u = 17$\n\n**Step 4:** Solve for $x$:\n• If $u = 0$: $\\sqrt{x^2 - k^2} = 0 \\rightarrow x^2 = k^2 \\rightarrow x = \\pm k$\n  But $x = \\pm k$ makes the original denominator zero. **Reject.**\n\n• If $u = 17$: $\\sqrt{x^2 - k^2} = 17 \\rightarrow x^2 - k^2 = 289 \\rightarrow x^2 = k^2 + 289 = k^2 + 17^2$\n  So $x = \\pm\\sqrt{k^2 + 17^2}$\n\nThe negative solution $x = -\\sqrt{k^2 + 17^2}$ matches Choice C.\n\n**Why other choices are incorrect:**\n• Choice A ($-k$): Makes the denominator zero (undefined)\n• Choice B: Uses subtraction instead of addition under the radical\n• Choice D: Uses subtraction in the wrong direction",
          skills: ["radical-equations", "algebraic-manipulation", "quadratic-equations"]
        },
        // Question 22: Quadratic modeling - Rocket height
        {
          id: 22,
          type: "fill-in",
          difficulty: "hard",
          question: "A quadratic function $h$ models the height, in feet, above the ground of a model rocket $t$ seconds after launch. The function estimates that the rocket reached its maximum height of $576$ feet $6$ seconds after launch and returned to the ground $12$ seconds after launch. Based on this function, what was the estimated height, in feet, of the rocket $9$ seconds after launch?",
          correctAnswer: 432,
          explanation: "**The correct answer is 432.** Build the quadratic function from the given information.\n\n**Given information:**\n• Maximum height $= 576$ feet at $t = 6$ seconds (vertex)\n• Ground (height $= 0$) at $t = 12$ seconds\n• By symmetry, ground at $t = 0$ seconds (launch)\n\n**Step 1:** Use vertex form: $h(t) = a(t - h)^2 + k$\nwhere the vertex $= (6, 576)$\n\n$h(t) = a(t - 6)^2 + 576$\n\n**Step 2:** Find $a$ using the point $(12, 0)$:\n$0 = a(12 - 6)^2 + 576$\n$0 = 36a + 576$\n$a = \\frac{-576}{36} = -16$\n\n**Step 3:** The function is:\n$h(t) = -16(t - 6)^2 + 576$\n\n**Step 4:** Find height at $t = 9$:\n$h(9) = -16(9 - 6)^2 + 576$\n$= -16(3)^2 + 576$\n$= -16(9) + 576$\n$= -144 + 576$\n$= 432$ feet\n\n**Verification by symmetry:** $t = 9$ is $3$ seconds after the vertex ($t = 6$). By symmetry, $h(3)$ should equal $h(9)$.\n$h(3) = -16(3-6)^2 + 576 = -16(9) + 576 = 432$ ✓",
          skills: ["quadratic-functions", "vertex-form", "modeling", "word-problems"]
        }
      ]
    }
  ]
};
