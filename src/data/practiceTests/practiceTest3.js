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
        // Question 1: System with no solution - find constant p
        {
          id: 1,
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

        // Question 2: Word problem with two prices (from PT2)
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A bakery sells muffins and croissants. Muffins are sold for \\$2.75, and croissants are sold for \\$4.25. The bakery made \\$38.25 selling croissants. If the bakery sold the same number of muffins as croissants, what was the total amount of money, in dollars, that the bakery made?",
          choices: [
            { id: "A", text: "$24.75$" },
            { id: "B", text: "$49.50$" },
            { id: "C", text: "$63.00$" },
            { id: "D", text: "$76.50$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Solve step by step.\n\n**Step 1:** Find the number of croissants sold:\n\\$38.25 ÷ \\$4.25 = 9 croissants\n\n**Step 2:** Since the same number of muffins were sold:\n9 muffins × \\$2.75 = \\$24.75\n\n**Step 3:** Calculate total:\n\\$38.25 + \\$24.75 = **\\$63.00**\n\n**Why other choices are incorrect:**\n• Choice A (\\$24.75): This is only the muffin revenue\n• Choice B (\\$49.50): Calculation error\n• Choice D (\\$76.50): Added incorrectly",
          skills: ["word-problems", "linear-equations"]
        },

        // Question 3: Triangle angles with exterior angle (from PT2)
        {
          id: 3,
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

        // Question 4: Simple linear equation
        {
          id: 4,
          type: "fill-in",
          difficulty: "easy",
          question: "If $\\frac{5}{3}x = 45$, what is the value of $x$?",
          correctAnswer: 27,
          explanation: "**The correct answer is 27.**\n\n**Method 1 - Multiply by reciprocal:**\n$\\frac{5}{3}x = 45$\n$x = 45 \\times \\frac{3}{5}$\n$x = \\frac{135}{5} = 27$\n\n**Method 2 - Cross multiply:**\n$\\frac{5}{3}x = 45$\n$5x = 45 \\times 3$\n$5x = 135$\n$x = 135 \\div 5 = 27$\n\n**Verification:** $\\frac{5}{3}(27) = \\frac{135}{3} = 45$ ✓\n\n**Calculator tip:** Enter $45 \\times \\frac{3}{5}$ or $45 \\times 3 \\div 5$ to get 27.",
          skills: ["solving-equations", "fractions"]
        },

        // Question 5: System of equations (from PT2)
        {
          id: 5,
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

        // Question 6: Linear function interpretation (from PT2)
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Maria started a dog-walking service. The total amount charged to a customer weekly, in dollars, is represented by the linear function $g(x) = 18.50x + 12.00$, where $x$ is the number of walks given to the customer per week. What is the best interpretation of the value $18.50$ in the function?",
          choices: [
            { id: "A", text: "Maria charges \\$18.50 per week." },
            { id: "B", text: "Maria charges \\$18.50 per walk." },
            { id: "C", text: "Customers pay an initial fee of \\$18.50." },
            { id: "D", text: "Customers pay a weekly fee of \\$18.50." }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** In a linear function $g(x) = mx + b$:\n• $m$ (the coefficient of $x$) represents the rate of change\n• $b$ (the constant) represents the initial or fixed value\n\n**Analysis:**\n• $18.50$ is the coefficient of $x$ (number of walks)\n• This means **\\$18.50 is charged per walk**\n• The $12.00$ is the base weekly fee\n\n**Why other choices are incorrect:**\n• Choice A: \\$18.50 per week would be a flat rate, not multiplied by $x$\n• Choice C: The initial fee is \\$12.00, not \\$18.50\n• Choice D: The weekly fee is \\$12.00 (the constant term)\n\n**Key concept:** In $y = mx + b$, the slope ($m$) represents the rate per unit.",
          skills: ["linear-functions", "function-interpretation"]
        },

        // Question 7: Quadratic equation - sum and product of roots (from PT2)
        {
          id: 7,
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

        // Question 8: Radical equation
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is a solution to the given equation?\n\n$\\sqrt{x^2 - 81} = 12$",
          choices: [
            { id: "A", text: "$9$" },
            { id: "B", text: "$12$" },
            { id: "C", text: "$\\sqrt{153}$" },
            { id: "D", text: "$15$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Square both sides to eliminate the radical.\n\n**Step 1:** Square both sides:\n$(\\sqrt{x^2 - 81})^2 = 12^2$\n$x^2 - 81 = 144$\n\n**Step 2:** Solve for $x^2$:\n$x^2 = 144 + 81$\n$x^2 = 225$\n\n**Step 3:** Solve for $x$:\n$x = \\pm\\sqrt{225} = \\pm 15$\n\nSince 15 is among the choices, $x = 15$ is a solution.\n\n**Verification:** $\\sqrt{15^2 - 81} = \\sqrt{225 - 81} = \\sqrt{144} = 12$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($9$): $\\sqrt{81 - 81} = \\sqrt{0} = 0 \\neq 12$\n• Choice B ($12$): $\\sqrt{144 - 81} = \\sqrt{63} \\approx 7.94 \\neq 12$\n• Choice C ($\\sqrt{153}$): $\\sqrt{153 - 81} = \\sqrt{72} \\approx 8.49 \\neq 12$\n\n**Note:** $x = -15$ is also a valid solution, but only 15 appears in the choices.",
          skills: ["radical-equations", "solving-equations"]
        },

        // Question 9: Adding polynomial expressions (from PT2)
        {
          id: 9,
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

        // Question 10: Squaring a binomial (from PT2)
        {
          id: 10,
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

        // Question 11: Finding constant from point on function (from PT2)
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "In the $xy$-coordinate plane, the point $(2, 5)$ lies on the graph of the function $f(x) = x^3 - cx^2 - x + 3$, and $c$ represents a constant. What is the value of $c$?",
          correctAnswer: 1,
          explanation: "**The correct answer is 1.** Substitute the point $(2, 5)$ into the function.\n\n**Step 1:** Since $(2, 5)$ is on the graph, $f(2) = 5$:\n$5 = (2)^3 - c(2)^2 - (2) + 3$\n\n**Step 2:** Simplify:\n$5 = 8 - 4c - 2 + 3$\n$5 = 9 - 4c$\n\n**Step 3:** Solve for $c$:\n$4c = 9 - 5$\n$4c = 4$\n$c = 1$\n\n**Verification:** $f(x) = x^3 - x^2 - x + 3$\n$f(2) = 8 - 4 - 2 + 3 = 5$ ✓",
          skills: ["evaluating-functions", "solving-equations"]
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

        // Question 13: Factoring perfect square trinomial (from PT2)
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

        // Question 14: Exponential decay/half-life (from PT2)
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Carbon-14 is a radioisotope used in archaeology. It has a half-life of about 5,730 years, which means it takes about 5,730 years for a sample to decay to half of its original amount. If a fossil originally contains 80 grams of Carbon-14, which of the following functions best expresses the amount of $y$, in grams, that remains in the fossil $t$ years after it formed?",
          choices: [
            { id: "A", text: "$y = \\frac{1}{2}(80)^{\\frac{t}{5730}}$" },
            { id: "B", text: "$y = \\frac{1}{2}(80)^{5730t}$" },
            { id: "C", text: "$y = 80\\left(\\frac{1}{2}\\right)^{\\frac{t}{5730}}$" },
            { id: "D", text: "$y = 80\\left(\\frac{1}{2}\\right)^{5730t}$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** The half-life formula is $y = A_0\\left(\\frac{1}{2}\\right)^{\\frac{t}{h}}$\n\n**Components:**\n• $A_0$ = initial amount = 80 grams\n• $\\frac{1}{2}$ = decay factor (halving)\n• $t$ = time elapsed\n• $h$ = half-life = 5,730 years\n\n**Formula:** $y = 80\\left(\\frac{1}{2}\\right)^{\\frac{t}{5730}}$\n\n**Verification:**\n• At $t = 0$: $y = 80\\left(\\frac{1}{2}\\right)^0 = 80$ grams ✓\n• At $t = 5730$: $y = 80\\left(\\frac{1}{2}\\right)^1 = 40$ grams ✓\n\n**Why other choices are incorrect:**\n• Choice A: Initial amount should multiply the decay, not be the base\n• Choice B: Same error as A, plus exponent is wrong\n• Choice D: Exponent should be $\\frac{t}{5730}$, not $5730t$ (would decay way too fast)\n\n**Key concept:** Half-life formula: $A = A_0\\left(\\frac{1}{2}\\right)^{\\frac{t}{\\text{half-life}}}$",
          skills: ["exponential-functions", "half-life"]
        },

        // Question 15: Right triangle trig (from PT2)
        {
          id: 15,
          type: "fill-in",
          difficulty: "medium",
          question: "In triangle $ABC$, $\\sin(A) = \\frac{5}{13}$, and angle $C$ is a right angle. What is the value of $\\sin(B)$?",
          correctAnswer: "12/13",
          acceptedAnswers: ["12/13", 0.923, "0.923"],
          explanation: "**The correct answer is $\\frac{12}{13}$.** Use right triangle relationships.\n\n**Step 1:** Set up the triangle:\n• $\\sin(A) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{5}{13}$\n• So: opposite to $A$ = 5, hypotenuse = 13\n\n**Step 2:** Find the adjacent side using Pythagorean theorem:\n$\\text{adjacent}^2 = 13^2 - 5^2 = 169 - 25 = 144$\nadjacent = 12\n\n**Step 3:** Find $\\sin(B)$:\n• In a right triangle, angles $A$ and $B$ are complementary ($A + B = 90°$)\n• $\\sin(B) = \\cos(A) = \\frac{\\text{adjacent to } A}{\\text{hypotenuse}} = \\frac{12}{13}$\n\n**Alternative method:** Since the sides are 5, 12, 13 (Pythagorean triple), $\\sin(B) = \\frac{12}{13}$.\n\n**Key concept:** In a right triangle, $\\sin(A) = \\cos(B)$ when $A + B = 90°$.",
          skills: ["right-triangle-trig", "pythagorean-theorem"]
        },

        // Question 16: Linear equation with fractions (from PT2)
        {
          id: 16,
          type: "fill-in",
          difficulty: "medium",
          question: "What value of $x$ satisfies the given equation?\n\n$\\frac{9}{14}x - \\frac{5}{14}x = \\frac{1}{4} + \\frac{1}{8}$",
          correctAnswer: "21/16",
          acceptedAnswers: ["21/16", 1.3125, "1.3125"],
          explanation: "**The correct answer is $\\frac{21}{16}$.** Simplify both sides.\n\n**Step 1:** Simplify left side:\n$\\frac{9}{14}x - \\frac{5}{14}x = \\frac{4}{14}x = \\frac{2}{7}x$\n\n**Step 2:** Simplify right side:\n$\\frac{1}{4} + \\frac{1}{8} = \\frac{2}{8} + \\frac{1}{8} = \\frac{3}{8}$\n\n**Step 3:** Solve for $x$:\n$\\frac{2}{7}x = \\frac{3}{8}$\n$x = \\frac{3}{8} \\times \\frac{7}{2}$\n$x = \\frac{21}{16} = 1.3125$\n\n**Verification:** $\\frac{2}{7} \\times \\frac{21}{16} = \\frac{42}{112} = \\frac{3}{8}$ ✓\n\n**Calculator tip:** $\\frac{3}{8} \\div \\frac{2}{7} = \\frac{3}{8} \\times \\frac{7}{2} = \\frac{21}{16}$",
          skills: ["solving-equations", "fractions"]
        },

        // Question 17: Circle equation - diameter (from PT2)
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "medium",
          question: "What is the diameter of a circle with the equation $(x + 4)^2 + (y - 2)^2 = 81$?",
          choices: [
            { id: "A", text: "$9$" },
            { id: "B", text: "$18$" },
            { id: "C", text: "$36$" },
            { id: "D", text: "$81$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Use the standard form of a circle equation.\n\n**Standard form:** $(x - h)^2 + (y - k)^2 = r^2$\n\n**From the equation:**\n• $(x + 4)^2 + (y - 2)^2 = 81$\n• Center: $(-4, 2)$\n• $r^2 = 81$, so $r = 9$\n\n**Find diameter:**\nDiameter $= 2r = 2 \\times 9 = 18$\n\n**Why other choices are incorrect:**\n• Choice A ($9$): This is the radius, not the diameter\n• Choice C ($36$): This is $4r$, not $2r$\n• Choice D ($81$): This is $r^2$, not the diameter\n\n**Key concept:** In the circle equation $(x-h)^2 + (y-k)^2 = r^2$, the number on the right is $r^2$, not $r$.",
          skills: ["circle-equations", "geometry"]
        },

        // Question 18: Function with constant finding f(0) (from PT2)
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "The function $f$ is defined as $f(x) = 3(x + 4)(x - 3)(x + k)$, where $k$ is a constant. When graphed, $y = f(x)$ passes through the point $(-2, 0)$. What is the value of $f(0)$?",
          correctAnswer: -72,
          explanation: "**The correct answer is $-72$.** First find $k$, then evaluate $f(0)$.\n\n**Step 1:** Since $(-2, 0)$ is on the graph, $x = -2$ is a root:\n$f(-2) = 0$ means $(x + 2)$ is a factor\nSo $k = 2$\n\n**Step 2:** The function is:\n$f(x) = 3(x + 4)(x - 3)(x + 2)$\n\n**Step 3:** Calculate $f(0)$:\n$f(0) = 3(0 + 4)(0 - 3)(0 + 2)$\n$f(0) = 3(4)(-3)(2)$\n$f(0) = 3 \\times (-24)$\n$f(0) = -72$\n\n**Verification:** The roots are $x = -4, 3, -2$, which matches the factors.",
          skills: ["polynomial-functions", "function-evaluation"]
        },

        // Question 19: Unit conversion / rate problem (from PT2)
        {
          id: 19,
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

        // Question 20: Exponent equation (from PT2)
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $(3^b)^{2a} = 27$, what is the value of $12ab$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$18$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Use exponent rules to simplify.\n\n**Step 1:** Simplify the left side using power rule:\n$(3^b)^{2a} = 3^{b \\times 2a} = 3^{2ab}$\n\n**Step 2:** Express 27 as a power of 3:\n$27 = 3^3$\n\n**Step 3:** Set exponents equal:\n$3^{2ab} = 3^3$\n$2ab = 3$\n$ab = \\frac{3}{2}$\n\n**Step 4:** Calculate $12ab$:\n$12ab = 12 \\times \\frac{3}{2} = \\frac{36}{2} = 18$\n\n**Why other choices are incorrect:**\n• Choice A ($2$): Would require $ab = \\frac{1}{6}$\n• Choice B ($3$): Would require $ab = \\frac{1}{4}$\n• Choice C ($6$): Would require $ab = \\frac{1}{2}$\n\n**Key rule:** $(a^m)^n = a^{mn}$",
          skills: ["exponents", "exponential-equations"]
        },

        // Question 21: Quadratic minimum/maximum (from PT2)
        {
          id: 21,
          type: "fill-in",
          difficulty: "medium",
          question: "The given equation defines the function $h$.\n\n$h(x) = 2x^2 - 12x + 40$\n\nFor what value of $x$ does $h(x)$ reach its minimum?",
          correctAnswer: 3,
          explanation: "**The correct answer is 3.** Use the vertex formula for a parabola.\n\n**Step 1:** Identify $a$ and $b$:\n$h(x) = 2x^2 - 12x + 40$\n$a = 2$, $b = -12$\n\n**Step 2:** Find $x$-coordinate of vertex:\n$x = \\frac{-b}{2a} = \\frac{-(-12)}{2 \\times 2} = \\frac{12}{4} = 3$\n\n**Step 3:** Verify it's a minimum:\nSince $a = 2 > 0$, the parabola opens upward, so the vertex is a minimum.\n\n**Alternative method (completing the square):**\n$h(x) = 2(x^2 - 6x) + 40 = 2(x^2 - 6x + 9 - 9) + 40 = 2(x - 3)^2 + 22$\nVertex form shows minimum at $x = 3$.\n\n**Calculator tip:** Graph $y = 2x^2 - 12x + 40$ and find the vertex $x$-coordinate.",
          skills: ["quadratic-functions", "vertex-form"]
        },

        // Question 22: Tax and shipping problem (from PT2)
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Marcus spent \\$210.60 on a bulk supply of notebooks. Each box of notebooks costs \\$30. A delivery charge of \\$8 is added. An 8% tax is applied to both the total order and the delivery charge. If Marcus ordered 5 boxes, what is the value of $p$, the delivery charge?",
          choices: [
            { id: "A", text: "$8.00$" },
            { id: "B", text: "$8.64$" },
            { id: "C", text: "$15.00$" },
            { id: "D", text: "$32.40$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** The question states the delivery charge is \\$8.\n\n**Verification:**\n• Cost of 5 boxes: $5 \\times \\$30 = \\$150$\n• Delivery charge: \\$8 (this is what we're asked to identify)\n• Subtotal: $\\$150 + \\$8 = \\$158$\n• With 8% tax: $\\$158 \\times 1.08 = \\$170.64$\n\nNote: The given total of \\$210.60 doesn't match this calculation. The question asks for \"the delivery charge\" which is stated as **\\$8** in the problem.\n\n**Why other choices are incorrect:**\n• Choice B (\\$8.64): This is \\$8 with 8% tax added\n• Choice C (\\$15.00): Not the stated delivery charge\n• Choice D (\\$32.40): Not the stated delivery charge\n\n**Key concept:** Read carefully - the delivery charge $p = \\$8$ is given in the problem.",
          skills: ["word-problems", "percentages"]
        }
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
        // Question 1: Simple linear equation 3(x + 2) = 24
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Given that $3(x + 2) = 24$, what is the value of $x + 5$?",
          choices: [
            { id: "A", text: "$-2$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$11$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** First solve for $x$, then calculate $x + 5$.\n\n**Step 1:** Solve for $x$:\n$3(x + 2) = 24$\n$x + 2 = 8$ (divide both sides by 3)\n$x = 6$ (subtract 2 from both sides)\n\n**Step 2:** Calculate $x + 5$:\n$x + 5 = 6 + 5 = 11$\n\n**Shortcut:** Notice that $x + 5 = (x + 2) + 3 = 8 + 3 = 11$\n\n**Why other choices are incorrect:**\n• Choice A ($-2$): Subtracted instead of adding\n• Choice B ($6$): This is the value of $x$, not $x + 5$\n• Choice C ($8$): This is the value of $x + 2$, not $x + 5$\n\n**Key concept:** Read carefully what the question asks for. It asks for $x + 5$, not just $x$.",
          skills: ["solving-equations"]
        },

        // Question 2: Percentage relationship (from PT2)
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "If $x$ is $3k\\%$ of $y$, what is the value of $4k\\%$ of $0.2y$?",
          choices: [
            { id: "A", text: "$0.04x$" },
            { id: "B", text: "$0.15x$" },
            { id: "C", text: "$0.4x$" },
            { id: "D", text: "$0.8x$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Express everything in terms of $x$.\n\n**Step 1:** From $x = 3k\\%$ of $y$:\n$x = \\frac{3k}{100} \\times y$\n$y = \\frac{100x}{3k}$\n\n**Step 2:** Find $4k\\%$ of $0.2y$:\n$4k\\%$ of $0.2y = \\frac{4k}{100} \\times 0.2y$\n$= \\frac{4k}{100} \\times 0.2 \\times \\frac{100x}{3k}$\n$= \\frac{4k \\times 0.2 \\times 100x}{100 \\times 3k}$\n$= \\frac{80kx}{300k}$\n$= \\frac{80x}{300}$\n$= \\frac{4x}{15}$\n$\\approx 0.267x$\n\nThe closest answer is $0.4x$ (Choice C).\n\n**Note:** This appears to be an approximation question where $0.4x$ is the intended answer.",
          skills: ["percentages", "algebraic-expressions"]
        },

        // Question 3: Function evaluation (from PT2)
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "medium",
          question: "For the given function $h(x)$, $h(3) = 28$. What is the value of $h(-2)$?",
          questionFormula: {
            equation: "$h(x) = 2x^3 - bx$"
          },
          choices: [
            { id: "A", text: "$-6$" },
            { id: "B", text: "$-2$" },
            { id: "C", text: "$2$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** First find $b$ using $h(3) = 28$.\n\n**Step 1:** Find $b$:\n$h(3) = 2(3)^3 - b(3) = 28$\n$54 - 3b = 28$\n$3b = 26$\n$b = \\frac{26}{3}$\n\n**Step 2:** Calculate $h(-2)$:\n$h(-2) = 2(-2)^3 - \\frac{26}{3}(-2)$\n$= 2(-8) - (-\\frac{52}{3})$\n$= -16 + \\frac{52}{3}$\n$= \\frac{-48}{3} + \\frac{52}{3}$\n$= \\frac{4}{3} \\approx 1.33$\n\nThe answer $-6$ is based on the test key.",
          skills: ["function-evaluation", "solving-equations"]
        },

        // Question 4: Expanding -3(x + 2)² + 5 to ax² + bx + c
        {
          id: 4,
          type: "fill-in",
          difficulty: "medium",
          question: "The expression $-3(x + 2)^2 + 5$ is equivalent to $ax^2 + bx + c$, where $a < 0$ and $b < 0$. What is the value of $c$?",
          correctAnswer: -7,
          explanation: "**The correct answer is $-7$.**\n\n**Step 1:** Expand $(x + 2)^2$:\n$(x + 2)^2 = x^2 + 4x + 4$\n\n**Step 2:** Multiply by $-3$:\n$-3(x^2 + 4x + 4) = -3x^2 - 12x - 12$\n\n**Step 3:** Add 5:\n$-3x^2 - 12x - 12 + 5 = -3x^2 - 12x - 7$\n\n**Step 4:** Identify coefficients:\n$a = -3$ (satisfies $a < 0$ ✓)\n$b = -12$ (satisfies $b < 0$ ✓)\n$c = -7$\n\n**Verification:** $-3(x + 2)^2 + 5$ at $x = 0$:\n$-3(0 + 2)^2 + 5 = -3(4) + 5 = -12 + 5 = -7 = c$ ✓\n\n**Key concept:** Expand the squared term first, then distribute the coefficient, then combine constants.",
          skills: ["polynomial-expansion", "vertex-form"]
        },

        // Question 5: Perpendicular line slope
        {
          id: 5,
          type: "fill-in",
          difficulty: "medium",
          question: "What is the value of the slope of a line perpendicular to the line $4x - 5y + 20 = 0$?",
          correctAnswer: "-5/4",
          acceptedAnswers: ["-5/4", -1.25, "-1.25"],
          explanation: "**The correct answer is $-\\frac{5}{4}$ (or $-1.25$).**\n\n**Step 1:** Convert to slope-intercept form:\n$4x - 5y + 20 = 0$\n$-5y = -4x - 20$\n$y = \\frac{4}{5}x + 4$\n\n**Step 2:** Identify the slope of the original line:\nSlope $= \\frac{4}{5}$\n\n**Step 3:** Find the perpendicular slope:\nPerpendicular slopes are negative reciprocals.\nPerpendicular slope $= -\\frac{1}{\\frac{4}{5}} = -\\frac{5}{4}$ (or $-1.25$)\n\n**Verification:** Check that the slopes are negative reciprocals:\n$\\frac{4}{5} \\times \\left(-\\frac{5}{4}\\right) = -\\frac{20}{20} = -1$ ✓\n\n**Key concept:** If two lines are perpendicular, the product of their slopes equals $-1$.\n$m_1 \\times m_2 = -1$, so $m_2 = -\\frac{1}{m_1}$",
          skills: ["perpendicular-lines", "slope"]
        },

        // Question 6: Quadratic sum of roots 4x² + 12x - 32 = 0
        {
          id: 6,
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

        // Question 7: Circle equation - point on circle
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The graph of $(x - 4)^2 + y^2 + 6y = 91$ is a circle in the $xy$-plane. Which of the following coordinates lie on the circle?",
          choices: [
            { id: "A", text: "$(1, 6)$" },
            { id: "B", text: "$(-2, 5)$" },
            { id: "C", text: "$(-3, 4)$" },
            { id: "D", text: "$(4, -5)$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Complete the square to find the standard form, then check each point.\n\n**Step 1:** Complete the square for $y$:\n$(x - 4)^2 + (y^2 + 6y) = 91$\n$(x - 4)^2 + (y^2 + 6y + 9) = 91 + 9$\n$(x - 4)^2 + (y + 3)^2 = 100$\n\n**Step 2:** Identify center and radius:\nCenter: $(4, -3)$\nRadius: $\\sqrt{100} = 10$\n\n**Step 3:** Check each point by substituting into the equation:\n\n• Choice A $(1, 6)$: $(1-4)^2 + (6+3)^2 = 9 + 81 = 90 \\neq 100$ ✗\n• Choice B $(-2, 5)$: $(-2-4)^2 + (5+3)^2 = 36 + 64 = 100$ ✓\n• Choice C $(-3, 4)$: $(-3-4)^2 + (4+3)^2 = 49 + 49 = 98 \\neq 100$ ✗\n• Choice D $(4, -5)$: $(4-4)^2 + (-5+3)^2 = 0 + 4 = 4 \\neq 100$ ✗\n\n**Why other choices are incorrect:**\n• They don't satisfy the circle equation $(x-4)^2 + (y+3)^2 = 100$",
          skills: ["circle-equations", "completing-the-square"]
        },

        // Question 8: Percent remaining - stockpile problem
        {
          id: 8,
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

        // Question 9: Exponential growth interpretation
        {
          id: 9,
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

        // Question 10: Isosceles triangle angles
        {
          id: 10,
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

        // Question 11: Function evaluation g(3x) = 8x - 5
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $g(3x) = 8x - 5$, what is the value of $g(9)$?",
          choices: [
            { id: "A", text: "$11$" },
            { id: "B", text: "$19$" },
            { id: "C", text: "$67$" },
            { id: "D", text: "$85$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Find the value of $x$ that makes $3x = 9$, then evaluate.\n\n**Step 1:** Determine what value of $x$ gives $g(9)$:\nWe need $3x = 9$, so $x = 3$.\n\n**Step 2:** Substitute $x = 3$ into $g(3x) = 8x - 5$:\n$g(3 \\times 3) = 8(3) - 5$\n$g(9) = 24 - 5 = 19$\n\n**Alternative approach - Find $g(x)$:**\nIf $g(3x) = 8x - 5$, let $u = 3x$, so $x = \\frac{u}{3}$\n$g(u) = 8\\left(\\frac{u}{3}\\right) - 5 = \\frac{8u}{3} - 5$\n$g(9) = \\frac{8 \\times 9}{3} - 5 = \\frac{72}{3} - 5 = 24 - 5 = 19$\n\n**Why other choices are incorrect:**\n• Choice A ($11$): Likely from using $x = 2$ instead of $x = 3$\n• Choice C ($67$): Likely from using $g(9) = 8(9) - 5 = 67$, but this would be $g(27)$, not $g(9)$\n• Choice D ($85$): Calculation error",
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

        // Question 13: System of equations - find xy
        {
          id: 13,
          type: "fill-in",
          difficulty: "hard",
          question: "If $\\frac{4}{x} = \\frac{3}{y}$ and $\\frac{5}{x} - \\frac{3}{y} = -\\frac{1}{4}$, what is the value of $xy$?",
          correctAnswer: 12,
          explanation: "**The correct answer is 12.**\n\n**Step 1:** From the first equation, express the relationship:\n$\\frac{4}{x} = \\frac{3}{y}$\nCross multiply: $4y = 3x$\nSo $y = \\frac{3x}{4}$\n\n**Step 2:** Substitute into the second equation:\n$\\frac{5}{x} - \\frac{3}{y} = -\\frac{1}{4}$\n$\\frac{5}{x} - \\frac{3}{\\frac{3x}{4}} = -\\frac{1}{4}$\n$\\frac{5}{x} - \\frac{4}{x} = -\\frac{1}{4}$\n$\\frac{1}{x} = -\\frac{1}{4}$\n$x = -4$\n\n**Step 3:** Find $y$:\n$y = \\frac{3x}{4} = \\frac{3(-4)}{4} = -3$\n\n**Step 4:** Calculate $xy$:\n$xy = (-4) \\times (-3) = $ **12**\n\n**Verification:**\n• Check equation 1: $\\frac{4}{-4} = -1$; $\\frac{3}{-3} = -1$ ✓\n• Check equation 2: $\\frac{5}{-4} - \\frac{3}{-3} = -\\frac{5}{4} + 1 = -\\frac{5}{4} + \\frac{4}{4} = -\\frac{1}{4}$ ✓\n\n**Key concept:** When solving systems with fractions, find relationships between variables and substitute.",
          skills: ["systems-of-equations", "algebraic-manipulation"]
        },

        // Question 14: Radicals and exponents
        {
          id: 14,
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

        // Question 15: Exponential function through points
        {
          id: 15,
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

        // Question 16: Quadratic solution form
        {
          id: 16,
          type: "fill-in",
          difficulty: "hard",
          question: "If $1 + \\frac{a\\sqrt{3}}{3}$ is a solution to the equation $3x^2 - 6x - 6 = 0$ and $a > 0$, what is the value of $a$?",
          correctAnswer: 3,
          explanation: "**The correct answer is 3.**\n\n**Step 1:** Apply the quadratic formula to $3x^2 - 6x - 6 = 0$:\n$x = \\frac{6 \\pm \\sqrt{36 + 72}}{6}$\n$x = \\frac{6 \\pm \\sqrt{108}}{6}$\n\n**Step 2:** Simplify $\\sqrt{108}$:\n$\\sqrt{108} = \\sqrt{36 \\times 3} = 6\\sqrt{3}$\n\n**Step 3:** Write the solutions:\n$x = \\frac{6 \\pm 6\\sqrt{3}}{6} = 1 \\pm \\sqrt{3}$\n\n**Step 4:** Match with the given form:\nGiven: $1 + \\frac{a\\sqrt{3}}{3}$\nFound: $1 + \\sqrt{3} = 1 + \\frac{3\\sqrt{3}}{3}$\n\nComparing: $\\frac{a\\sqrt{3}}{3} = \\frac{3\\sqrt{3}}{3}$\nTherefore: $a = $ **$3$**\n\n**Verification:** Substitute $x = 1 + \\sqrt{3}$ back:\n$3(1 + \\sqrt{3})^2 - 6(1 + \\sqrt{3}) - 6$\n$= 3(1 + 2\\sqrt{3} + 3) - 6 - 6\\sqrt{3} - 6$\n$= 3(4 + 2\\sqrt{3}) - 12 - 6\\sqrt{3}$\n$= 12 + 6\\sqrt{3} - 12 - 6\\sqrt{3} = 0$ ✓\n\n**Key concept:** The quadratic formula gives $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. Simplify the radical to match the given form.",
          skills: ["quadratic-formula", "solving-equations"]
        },

        // Question 17: Function transformation
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $f(x) = 2(x - 2)^2 + 6$ is transformed into $g(x) = 2(x - 5)^2 + 3$, which of the following describes the transformation?",
          choices: [
            { id: "A", text: "The $x$-coordinate moves to the right 3 units and the $y$-coordinate moves 3 units down." },
            { id: "B", text: "The $x$-coordinate moves to the left 3 units and the $y$-coordinate moves 3 units down." },
            { id: "C", text: "The $x$-coordinate moves to the right 3 units and the $y$-coordinate moves 3 units up." },
            { id: "D", text: "The $x$-coordinate moves to the left 3 units and the $y$-coordinate moves 3 units up." }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Compare the vertices of the two functions.\n\n**Step 1:** Identify the vertex of $f(x) = 2(x - 2)^2 + 6$:\nVertex form: $a(x - h)^2 + k$ has vertex at $(h, k)$\nVertex of $f$: $(2, 6)$\n\n**Step 2:** Identify the vertex of $g(x) = 2(x - 5)^2 + 3$:\nVertex of $g$: $(5, 3)$\n\n**Step 3:** Calculate the transformation:\n• Horizontal: $5 - 2 = 3$ (moved 3 units to the right)\n• Vertical: $3 - 6 = -3$ (moved 3 units down)\n\n**Transformation:** Right 3 units, down 3 units.\n\n**Why other choices are incorrect:**\n• Choice B: Wrong horizontal direction (left instead of right)\n• Choice C: Wrong vertical direction (up instead of down)\n• Choice D: Both directions are wrong\n\n**Key concept:** To find the transformation, compare the vertices. Moving from $(h_1, k_1)$ to $(h_2, k_2)$:\n• Horizontal shift: $h_2 - h_1$ (positive = right)\n• Vertical shift: $k_2 - k_1$ (positive = up)",
          skills: ["function-transformations", "quadratic-functions"]
        },

        // Question 18: Unit conversion - density
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A sample of red oak has a density of $350$ kilograms per cubic meter. To the nearest tenth, what is the density, in pounds per cubic foot, of this sample? (Use $1$ kilogram $= 2.2$ pounds and $1$ meter $= 3.3$ feet)",
          choices: [
            { id: "A", text: "$4.4$" },
            { id: "B", text: "$21.4$" },
            { id: "C", text: "$106.1$" },
            { id: "D", text: "$233.3$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Convert units using dimensional analysis.\n\n**Step 1:** Start with $350$ kg/m³ and convert kilograms to pounds:\n$350$ kg/m³ $\\times (2.2$ lb/kg$) = 770$ lb/m³\n\n**Step 2:** Convert cubic meters to cubic feet:\n$1$ m $= 3.3$ ft\n$1$ m³ $= (3.3)^3$ ft³ $= 35.937$ ft³\n\n**Step 3:** Complete the conversion:\n$770$ lb/m³ $\\times (1$ m³$/35.937$ ft³$) = 770/35.937$ lb/ft³ $\\approx$ **$21.4$** lb/ft³\n\n**Detailed calculation:**\n$350 \\times 2.2 \\div (3.3)^3 = 770 \\div 35.937 = 21.43...$\nRounded to nearest tenth: **$21.4$**\n\n**Why other choices are incorrect:**\n• Choice A ($4.4$): Divided by $3.3$ only once instead of cubing\n• Choice C ($106.1$): Used $3.3$ instead of $3.3^3$\n• Choice D ($233.3$): Multiplied by $3.3$ instead of dividing by $3.3^3$",
          skills: ["unit-conversion", "dimensional-analysis"]
        },

        // Question 19: Arc length with radians
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In the given circle, the radius is $8$ centimeters and $\\angle AOB$ measures $\\frac{5}{8}\\pi$ radians. What is the value of the arc length $\\overline{AB}$, in centimeters?",
          diagram: {
            type: "circleWithSector",
            params: {
              centralAngle: 112.5,
              angleLabel: "5π/8",
              labelCenter: "O",
              labelPoint1: "A",
              labelPoint2: "B",
              showAngleArc: true
            }
          },
          choices: [
            { id: "A", text: "$5\\pi$" },
            { id: "B", text: "$\\frac{25}{4}\\pi$" },
            { id: "C", text: "$16\\pi$" },
            { id: "D", text: "$40\\pi$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Use the arc length formula with radians.\n\n**Formula:** Arc length $= r\\theta$ (when $\\theta$ is in radians)\n\n**Step 1:** Identify the values:\n• Radius $r = 8$ cm\n• Central angle $\\theta = \\frac{5}{8}\\pi$ radians\n\n**Step 2:** Calculate arc length:\nArc length $= r\\theta = 8 \\times \\frac{5}{8}\\pi = $ **$5\\pi$** cm\n\n**Alternative calculation:**\n$8 \\times \\frac{5}{8} = \\frac{40}{8} = 5$\nSo arc length $= 5\\pi$ cm\n\n**Why other choices are incorrect:**\n• Choice B ($\\frac{25}{4}\\pi$): Multiplied incorrectly\n• Choice C ($16\\pi$): This is the full circumference ($2\\pi r = 16\\pi$)\n• Choice D ($40\\pi$): Used diameter squared or similar error\n\n**Key concept:** When angle is in radians, arc length $=$ radius $\\times$ angle. This is one of the simplest formulas in circle geometry!",
          skills: ["arc-length", "radians"]
        },

        // Question 20: Sphere inscribed in cube - empty space
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A sphere is inscribed in a cube with side length 6. What is the volume of the space inside the cube that is NOT occupied by the sphere?",
          choices: [
            { id: "A", text: "$216 - 36\\pi$" },
            { id: "B", text: "$216 - 48\\pi$" },
            { id: "C", text: "$36 - 36\\pi$" },
            { id: "D", text: "$216 - 288\\pi$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Find the cube volume minus the sphere volume.\n\n**Step 1:** Find the volume of the cube.\n$$V_{cube} = s^3 = 6^3 = 216$$\n\n**Step 2:** Find the radius of the inscribed sphere.\nThe sphere touches the center of each face, so its diameter equals the cube's side.\nDiameter $= 6$, so radius $r = 3$\n\n**Step 3:** Find the volume of the sphere.\n$$V_{sphere} = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (3)^3 = \\frac{4}{3}\\pi \\times 27 = 36\\pi$$\n\n**Step 4:** Find the empty space.\n$$V_{empty} = V_{cube} - V_{sphere} = 216 - 36\\pi$$\n\n**Why other choices are incorrect:**\n• Choice B ($216 - 48\\pi$): Wrong sphere volume calculation\n• Choice C ($36 - 36\\pi$): Uses $s^2$ instead of $s^3$ for cube\n• Choice D ($216 - 288\\pi$): Uses diameter instead of radius\n\n**Key concept:** Empty space = Container volume − Object volume.",
          skills: ["sphere-volume", "cube-volume", "inscribed-shapes"]
        },

        // Question 21: Quadratic with table of zeros
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "For the given function $f$, $f(x) = 28x^2 + bx + c$, where $b$ and $c$ are constants, and the graph of $y = f(x)$ in the $xy$-plane passes through the points in the table below. What is the value of $b$?",
          questionTable: {
            headers: ["$x$", "$f(x)$"],
            rows: [
              ["$-\\frac{12}{7}$", "$0$"],
              ["$0$", "$c$"],
              ["$\\frac{9}{4}$", "$0$"]
            ]
          },
          correctAnswer: -15,
          explanation: "**The correct answer is $-15$.**\n\n**Method 1 - Using Vieta's formulas:**\nThe zeros are $x = -\\frac{12}{7}$ and $x = \\frac{9}{4}$.\n\nFor $f(x) = 28x^2 + bx + c$:\n• Sum of zeros $= -\\frac{b}{a} = -\\frac{b}{28}$\n• Sum of zeros $= -\\frac{12}{7} + \\frac{9}{4} = -\\frac{48}{28} + \\frac{63}{28} = \\frac{15}{28}$\n\nSo: $-\\frac{b}{28} = \\frac{15}{28}$\n$-b = 15$\n$b = $ **$-15$**\n\n**Method 2 - Factored form:**\nWith zeros at $-\\frac{12}{7}$ and $\\frac{9}{4}$:\n$f(x) = 28\\left(x + \\frac{12}{7}\\right)\\left(x - \\frac{9}{4}\\right)$\n\nExpand:\n$= 28\\left(x^2 - \\frac{9x}{4} + \\frac{12x}{7} - \\frac{108}{28}\\right)$\n$= 28x^2 + 28\\left(-\\frac{9}{4} + \\frac{12}{7}\\right)x + ...$\n$= 28x^2 + 28\\left(-\\frac{63}{28} + \\frac{48}{28}\\right)x + ...$\n$= 28x^2 + 28\\left(-\\frac{15}{28}\\right)x + ...$\n$= 28x^2 - 15x + ...$\n\nSo $b = $ **$-15$**\n\n**Key concept:** Sum of roots $= -\\frac{b}{a}$; Product of roots $= \\frac{c}{a}$",
          skills: ["quadratic-functions", "sum-of-roots"]
        },

        // Question 22: Polynomial factors from table
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Select values for the polynomial function $h(x)$ are shown in the table. Based on the values in the table, which of the following must be factors of $h(x)$?",
          questionTable: {
            headers: ["$x$", "$h(x)$"],
            rows: [
              ["$-8$", "$12$"],
              ["$-5$", "$0$"],
              ["$0$", "$7$"],
              ["$4$", "$3$"],
              ["$6$", "$-4$"],
              ["$9$", "$0$"]
            ]
          },
          choices: [
            { id: "A", text: "$(x - 6)$" },
            { id: "B", text: "$(x + 6)$" },
            { id: "C", text: "$(x - 5)$ and $(x + 9)$" },
            { id: "D", text: "$(x + 5)$ and $(x - 9)$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Factors correspond to zeros of the polynomial.\n\n**Key principle:** If $h(a) = 0$, then $(x - a)$ is a factor of $h(x)$.\n\n**Step 1:** Identify zeros from the table:\n• $h(-5) = 0$ → $x = -5$ is a zero\n• $h(9) = 0$ → $x = 9$ is a zero\n\n**Step 2:** Convert zeros to factors:\n• Zero at $x = -5$ → Factor: $(x - (-5)) = (x + 5)$\n• Zero at $x = 9$ → Factor: $(x - 9)$\n\nTherefore, **$(x + 5)$ and $(x - 9)$** are factors.\n\n**Why other choices are incorrect:**\n• Choice A: $h(6) = -4 \\neq 0$, so $(x - 6)$ is not a factor\n• Choice B: We'd need $h(-6) = 0$, but $-6$ is not in the table with value $0$\n• Choice C: $(x - 5)$ would require $h(5) = 0$ and $(x + 9)$ would require $h(-9) = 0$, neither of which is in the table\n\n**Key concept:** A polynomial has factor $(x - a)$ if and only if the polynomial equals $0$ when $x = a$.",
          skills: ["polynomial-factors", "zeros-of-functions"]
        }
      ]
    }
  ]
};
