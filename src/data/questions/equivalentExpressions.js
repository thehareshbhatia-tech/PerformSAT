// Practice questions for Equivalent Expressions module
// Questions are organized by SECTION (question type)

export const equivalentExpressionsQuestions = {
  // Section: Equivalent Expressions
  "Equivalent Expressions": [
    {
      id: 1,
      difficulty: "easy",
      question: "The table shows the number of units of each of two supplies a bakery buys and the price, in dollars, of one unit of each supply. Which expression represents the total cost, in dollars, of these supplies?",
      diagram: { type: "dataTable", params: { headers: ["Supply", "Number of units", "Price per unit (dollars)"], rows: [["Flour sacks", "4", "x + 3"], ["Yeast packets", "3", "2x − 1"]] } },
      choices: [
        // distractor: multiplies only the x-terms by the number of units: 4x + 3 + 6x - 1
        { id: "A", text: "$10x + 2$" },
        { id: "B", text: "$10x + 9$" },
        // distractor: distributes 3(2x - 1) as 6x + 3, losing the negative sign
        { id: "C", text: "$10x + 15$" },
        // distractor: adds units and prices separately and multiplies the sums: 7(3x + 2)
        { id: "D", text: "$21x + 14$" }
      ],
      correctAnswer: "B",
      hint: "Each row contributes (number of units)(price per unit); distribute each product completely before you combine anything.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** Total cost $= 4(x + 3) + 3(2x - 1) = 4x + 12 + 6x - 3 = 10x + 9$.\n\n**The Full Solution:**\nStep 1: The cost of each supply is the number of units times the price per unit: flour costs $4(x + 3)$ dollars and yeast costs $3(2x - 1)$ dollars.\nStep 2: Distribute: $4(x + 3) = 4x + 12$ and $3(2x - 1) = 6x - 3$.\nStep 3: Add and combine like terms: $4x + 12 + 6x - 3 = 10x + 9$. Check with $x = 1$: $4(4) + 3(1) = 19$ and $10(1) + 9 = 19$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($10x + 2$): multiplies only the $x$-terms by the numbers of units, adding $4x + 3 + 6x - 1$.\n* Choice C ($10x + 15$): distributes the $3$ as $6x + 3$, losing the negative sign on the $-1$.\n* Choice D ($21x + 14$): adds the numbers of units and the prices separately and multiplies the sums, $7(3x + 2)$.\n\n**Test Day Takeaway:** Multiply each quantity by its own price before adding, and distribute the factor to every term inside the parentheses.",
      skills: ["distributive-property", "combining-like-terms"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Which expression is equivalent to $64x^{2} - 9$?",
      choices: [
        { id: "A", text: "$(8x - 3)(8x + 3)$" },
        // distractor: expands to 64x^2 - 48x + 9, which has an unwanted middle term
        { id: "B", text: "$(8x - 3)^{2}$" },
        // distractor: expands to 64x^2 + 48x + 9
        { id: "C", text: "$(8x + 3)^{2}$" },
        // distractor: splits 64 as 4 times 16 instead of 8 times 8 and expands to 64x^2 - 36x - 9
        { id: "D", text: "$(4x - 3)(16x + 3)$" }
      ],
      correctAnswer: "A",
      hint: "Notice what kind of number both $64x^{2}$ and $9$ are.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** $64x^{2} - 9 = (8x)^{2} - 3^{2}$, a difference of squares, so it factors as $(8x - 3)(8x + 3)$.\n\n**The Full Solution:**\nStep 1: Both terms are perfect squares: $64x^{2} = (8x)^{2}$ and $9 = 3^{2}$.\nStep 2: A difference of squares factors as $a^{2} - b^{2} = (a - b)(a + b)$.\nStep 3: With $a = 8x$ and $b = 3$: $64x^{2} - 9 = (8x - 3)(8x + 3)$. Check: $(8x - 3)(8x + 3) = 64x^{2} + 24x - 24x - 9 = 64x^{2} - 9$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($(8x - 3)^{2}$): expands to $64x^{2} - 48x + 9$, which has a middle term and a positive constant.\n* Choice C ($(8x + 3)^{2}$): expands to $64x^{2} + 48x + 9$.\n* Choice D ($(4x - 3)(16x + 3)$): splits $64$ as $4 \\cdot 16$ instead of $8 \\cdot 8$; it expands to $64x^{2} - 36x - 9$.\n\n**Test Day Takeaway:** A binomial of the form (perfect square) minus (perfect square) factors into a sum times a difference; the middle terms cancel only when the two factors match.",
      skills: ["difference-of-squares"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "$\\frac{18x^{5}}{3x^{-2}}$\nThe given expression is equivalent to $ax^{b}$, where $a$ and $b$ are constants and $x > 0$. What is the value of $a + b$?",
      choices: [
        // distractor: subtracts as 5 - 2 = 3, ignoring the negative exponent, then adds 6
        { id: "A", text: "$9$" },
        { id: "B", text: "$13$" },
        // distractor: multiplies the exponents and drops the sign to get 10, then adds 6
        { id: "C", text: "$16$" },
        // distractor: subtracts the coefficients, 18 - 3 = 15, and adds 7
        { id: "D", text: "$22$" }
      ],
      correctAnswer: "B",
      hint: "Watch the sign of the exponent in the denominator.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** $\\frac{18}{3} = 6$ and $x^{5 - (-2)} = x^{7}$, so the expression is $6x^{7}$ and $a + b = 13$.\n\n**The Full Solution:**\nStep 1: Divide the coefficients: $\\frac{18}{3} = 6$, so $a = 6$.\nStep 2: Divide the powers by subtracting exponents: $\\frac{x^{5}}{x^{-2}} = x^{5 - (-2)} = x^{7}$, so $b = 7$.\nStep 3: So $a + b = 6 + 7 = 13$. Check with $x = 1$: $\\frac{18}{3} = 6$ and $6(1)^{7} = 6$; with $x = 2$: $\\frac{18(32)}{3\\left(\\frac{1}{4}\\right)} = 768$ and $6(128) = 768$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): subtracts the exponents as $5 - 2 = 3$, ignoring the negative sign, then adds $6$.\n* Choice C ($16$): multiplies the exponents to get $-10$, then drops the sign and adds $6$.\n* Choice D ($22$): subtracts the coefficients, $18 - 3 = 15$, and adds $7$.\n\n**Test Day Takeaway:** Dividing powers of the same base subtracts exponents; subtracting a negative exponent adds.",
      skills: ["simplifying-rational-expressions", "exponent-laws"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "$16x^{2} - 56x + 49$\nThe given expression is equivalent to $(ax + b)^{2}$, where $a$ and $b$ are constants and $a > 0$. What is the value of $a + b$?",
      choices: [
        // distractor: takes b as half the middle coefficient, -28, giving 4 + (-28)
        { id: "A", text: "$-24$" },
        { id: "B", text: "$-3$" },
        // distractor: uses b = 7, ignoring the negative middle term
        { id: "C", text: "$11$" },
        // distractor: adds the coefficients 16 and 49 instead of their square roots
        { id: "D", text: "$65$" }
      ],
      correctAnswer: "B",
      hint: "Expand $(ax + b)^{2}$ in general first, then match it term by term.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** $16x^{2} = (4x)^{2}$ and $49 = (-7)^{2}$, and $2(4)(-7) = -56$ matches the middle term, so $a = 4$, $b = -7$, and $a + b = -3$.\n\n**The Full Solution:**\nStep 1: Expand the target form: $(ax + b)^{2} = a^{2}x^{2} + 2abx + b^{2}$.\nStep 2: Match the $x^{2}$-terms: $a^{2} = 16$, and since $a > 0$, $a = 4$.\nStep 3: Match the $x$-terms: $2(4)b = -56$, so $b = -7$, which also gives $b^{2} = 49$. Then $a + b = 4 + (-7) = -3$. Check: $(4x - 7)^{2} = 16x^{2} - 56x + 49$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-24$): takes $b$ as half the middle coefficient, $\\frac{-56}{2} = -28$, giving $4 + (-28)$.\n* Choice C ($11$): gets both magnitudes right but uses $b = 7$; the negative middle term requires $b < 0$.\n* Choice D ($65$): uses the coefficients $16$ and $49$ themselves instead of their square roots.\n\n**Test Day Takeaway:** To match a perfect-square form, expand the form symbolically and line up coefficients; the sign of the middle term decides the sign of $b$.",
      skills: ["perfect-square-trinomial"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The expression $25x^{2} + kx + 36$, where $k$ is a constant, is equivalent to $(ax + b)^{2}$ for some constants $a$ and $b$. Which of the following could be the value of $k$?",
      choices: [
        // distractor: adds the square roots, 5 + 6
        { id: "A", text: "$11$" },
        // distractor: multiplies the square roots, 5 times 6, and forgets the factor of 2
        { id: "B", text: "$30$" },
        { id: "C", text: "$60$" },
        // distractor: adds the outer coefficients, 25 + 36
        { id: "D", text: "$61$" }
      ],
      correctAnswer: "C",
      hint: "What binomial, when squared, could produce the first and last terms?",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** The square must be $(5x + 6)^{2}$ or $(5x - 6)^{2}$, whose middle terms are $\\pm 2(5)(6)x = \\pm 60x$. Of the choices, only $60$ works.\n\n**The Full Solution:**\nStep 1: Expand: $(ax + b)^{2} = a^{2}x^{2} + 2abx + b^{2}$. Matching, $a^{2} = 25$ and $b^{2} = 36$, so $a = \\pm 5$ and $b = \\pm 6$.\nStep 2: The middle coefficient is $k = 2ab$, so $k = 2(5)(6) = 60$ or $k = 2(5)(-6) = -60$.\nStep 3: The only choice that matches is $60$. Check: $(5x + 6)^{2} = 25x^{2} + 60x + 36$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($11$): adds the square roots of the first and last coefficients, $5 + 6$.\n* Choice B ($30$): multiplies the square roots, $5 \\cdot 6$, but forgets the factor of $2$ in $2ab$.\n* Choice D ($61$): adds the first and last coefficients, $25 + 36$.\n\n**Test Day Takeaway:** For $(ax + b)^{2}$, the middle coefficient is $2ab$: twice the product of the square roots of the outer coefficients.",
      skills: ["perfect-square-trinomial"]
    }
  ]
};
