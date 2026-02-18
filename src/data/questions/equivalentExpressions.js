// Practice questions for Equivalent Expressions module
// Questions are organized by SECTION (question type)

export const equivalentExpressionsQuestions = {
  // Section: Equivalent Expressions
  "Equivalent Expressions": [
    {
      id: 1,
      difficulty: "easy",
      question: "Which expression is equivalent to 3(2x + 4) - 2(x - 1)?",
      choices: [
        { id: "A", text: "4x + 14" },
        { id: "B", text: "4x + 10" },
        { id: "C", text: "8x + 14" },
        { id: "D", text: "4x + 12" }
      ],
      correctAnswer: "A",
      hint: "Use the distributive property to expand each term, then combine like terms. Pay close attention to signs when distributing a negative number.",
      explanation: "**Choice A is correct.** Use the distributive property, then combine like terms.\n\n**Step 1:** Distribute $3$ into $(2x + 4)$:\n$3(2x + 4) = 6x + 12$\n\n**Step 2:** Distribute $-2$ into $(x - 1)$:\n$-2(x - 1) = -2x + 2$\n\n**Step 3:** Combine like terms:\n$6x + 12 - 2x + 2 = 4x + 14$\n\n**Why other choices are incorrect:**\n• Choice B ($4x + 10$): [TRAP: sign error] This results from distributing $-2(x - 1)$ as $-2x - 2$ instead of $-2x + 2$. The negative times a negative gives a positive — the most common distribution error on the SAT.\n• Choice C ($8x + 14$): You likely forgot to subtract the $x$ terms: $6x - 2x = 4x$, not $8x$. This is a procedural error in combining like terms.\n• Choice D ($4x + 12$): You got the $x$ terms right but forgot the $+2$ from $-2(-1) = +2$. This is a partial calculation — you distributed to the first term but not the second.\n\n**Key concept:** When distributing a negative number, flip the sign of every term inside the parentheses: $-2(x - 1) = -2x + 2$, NOT $-2x - 2$.\n\n**Verification:** Plug in $x = 1$: $3(2+4) - 2(1-1) = 18 - 0 = 18$. Check: $4(1) + 14 = 18$ ✓",
      skills: ['distributive-property', 'combining-like-terms']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Which expression is equivalent to (x + 3)(x - 3)?",
      choices: [
        { id: "A", text: "x² - 6" },
        { id: "B", text: "x² + 9" },
        { id: "C", text: "x² - 9" },
        { id: "D", text: "x² + 6x + 9" }
      ],
      correctAnswer: "C",
      hint: "Look for a special pattern here. When you have the sum and difference of the same two terms being multiplied, there's a shortcut formula you can use.",
      explanation: "**Choice C is correct.** This is the difference of squares pattern.\n\n**Step 1:** Recognize the pattern $(a + b)(a - b) = a^2 - b^2$:\nHere $a = x$ and $b = 3$.\n\n**Step 2:** Apply the formula:\n$(x + 3)(x - 3) = x^2 - 3^2 = x^2 - 9$\n\n**Verification:** FOIL to confirm: $x^2 - 3x + 3x - 9 = x^2 - 9$ ✓ (the middle terms cancel)\n\n**Why other choices are incorrect:**\n• Choice A ($x^2 - 6$): [TRAP: arithmetic slip] You squared $3$ incorrectly as $6$ instead of $9$. This happens when students confuse $2 \\times 3 = 6$ with $3^2 = 9$.\n• Choice B ($x^2 + 9$): [TRAP: sign error] You dropped the negative sign. The difference of squares gives $a^2 - b^2$ (minus), not $a^2 + b^2$.\n• Choice D ($x^2 + 6x + 9$): This is $(x + 3)^2$, not $(x + 3)(x - 3)$. You treated both factors as $(x + 3)$ — a careless error of misreading the signs.\n\n**Key concept:** $(a + b)(a - b) = a^2 - b^2$ — the middle terms always cancel. This pattern is tested repeatedly on the SAT. Learn to spot it instantly.",
      skills: ['difference-of-squares']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "Simplify: (4x²y³)/(2xy)",
      choices: [
        { id: "A", text: "2xy²" },
        { id: "B", text: "2x²y²" },
        { id: "C", text: "2xy" },
        { id: "D", text: "8x³y⁴" }
      ],
      correctAnswer: "A",
      hint: "When dividing terms with the same base, subtract the exponents. Handle the coefficients and each variable separately.",
      explanation: "**Choice A is correct.** Simplify by dividing coefficients and subtracting exponents.\n\n**Step 1:** Divide the coefficients:\n$4 \\div 2 = 2$\n\n**Step 2:** Subtract exponents for $x$:\n$x^{2-1} = x^1 = x$\n\n**Step 3:** Subtract exponents for $y$:\n$y^{3-1} = y^2$\n\n**Result:** $\\frac{4x^2y^3}{2xy} = 2xy^2$\n\n**Why other choices are incorrect:**\n• Choice B ($2x^2y^2$): [TRAP: partial calculation] You subtracted the $y$ exponents correctly but forgot to subtract the $x$ exponents. When dividing $x^2 \\div x$, the result is $x$, not $x^2$.\n• Choice C ($2xy$): You subtracted one too many from the $y$ exponent. $y^{3-1} = y^2$, not $y^1$. This is an arithmetic slip.\n• Choice D ($8x^3y^4$): [TRAP: reversed operation] You multiplied instead of dividing. When you see a fraction, you divide (subtract exponents), not multiply (add exponents).\n\n**Key concept:** When dividing terms with the same base: $\\frac{a^m}{a^n} = a^{m-n}$. Subtract the exponents. When multiplying: $a^m \\cdot a^n = a^{m+n}$. Add the exponents. Don't mix these up!",
      skills: ['simplifying-rational-expressions', 'exponent-laws']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Which expression is equivalent to x² + 6x + 9?",
      choices: [
        { id: "A", text: "(x + 3)²" },
        { id: "B", text: "(x - 3)²" },
        { id: "C", text: "(x + 9)(x + 1)" },
        { id: "D", text: "(x + 6)(x + 3)" }
      ],
      correctAnswer: "A",
      hint: "Check if this is a perfect square trinomial by seeing if the first and last terms are perfect squares, and if the middle term equals twice the product of their square roots.",
      explanation: "**Choice A is correct.** This is a perfect square trinomial.\n\n**Step 1:** Check if it matches the pattern $a^2 + 2ab + b^2 = (a + b)^2$:\n• $a^2 = x^2$ → $a = x$\n• $b^2 = 9$ → $b = 3$\n• $2ab = 2(x)(3) = 6x$ ✓ (matches the middle term)\n\n**Step 2:** Factor:\n$x^2 + 6x + 9 = (x + 3)^2$\n\n**Verification:** $(x + 3)^2 = x^2 + 6x + 9$ ✓\n\n**Why other choices are incorrect:**\n• Choice B ($(x - 3)^2$): [TRAP: sign error] $(x - 3)^2 = x^2 - 6x + 9$. The middle term would be $-6x$, not $+6x$. The sign of the middle term tells you the sign inside the parentheses.\n• Choice C ($(x + 9)(x + 1)$): Expanding gives $x^2 + 10x + 9$, not $x^2 + 6x + 9$. The middle term doesn't match. This comes from finding two numbers that multiply to $9$ but don't add to $6$.\n• Choice D ($(x + 6)(x + 3)$): Expanding gives $x^2 + 9x + 18$. You confused the coefficient of $x$ with one of the factors.\n\n**Key concept:** Perfect square trinomials: $a^2 + 2ab + b^2 = (a + b)^2$ and $a^2 - 2ab + b^2 = (a - b)^2$. The telltale sign: the first and last terms are perfect squares, and the middle term is exactly $2 \\times \\sqrt{\\text{first}} \\times \\sqrt{\\text{last}}$.",
      skills: ['perfect-square-trinomial']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Which expression is equivalent to (2a + b)²?",
      choices: [
        { id: "A", text: "4a² + b²" },
        { id: "B", text: "4a² + 2ab + b²" },
        { id: "C", text: "4a² + 4ab + b²" },
        { id: "D", text: "2a² + 2ab + b²" }
      ],
      correctAnswer: "C",
      hint: "Use the perfect square formula: (a + b)² = a² + 2ab + b². Remember to square the entire first term, including its coefficient.",
      explanation: "**Choice C is correct.** Expand $(2a + b)^2$ using the perfect square formula.\n\n**Step 1:** Apply $(x + y)^2 = x^2 + 2xy + y^2$ with $x = 2a$ and $y = b$:\n$$(2a + b)^2 = (2a)^2 + 2(2a)(b) + b^2$$\n\n**Step 2:** Simplify each term:\n• $(2a)^2 = 4a^2$\n• $2(2a)(b) = 4ab$\n• $b^2 = b^2$\n\n**Result:** $4a^2 + 4ab + b^2$\n\n**Verification:** Try $a = 1, b = 1$: $(2 + 1)^2 = 9$. Check: $4 + 4 + 1 = 9$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($4a^2 + b^2$): [TRAP: common mistake] You forgot the middle term entirely. $(a + b)^2 \\neq a^2 + b^2$ — this is one of the most common algebra errors on the SAT. Squaring a binomial always produces three terms.\n• Choice B ($4a^2 + 2ab + b^2$): [TRAP: partial calculation] The middle term should be $2(2a)(b) = 4ab$, not $2ab$. You applied the formula $2ab$ but forgot that $a$ in the formula is actually $2a$, so you need $2 \\times 2a \\times b = 4ab$.\n• Choice D ($2a^2 + 2ab + b^2$): You computed $(2a)^2$ as $2a^2$ instead of $4a^2$. Remember: $(2a)^2 = 2^2 \\cdot a^2 = 4a^2$ — you must square both the coefficient and the variable.\n\n**Key concept:** When squaring a term like $(2a)^2$, square everything: the $2$ and the $a$. $(2a)^2 = 4a^2$, NOT $2a^2$. Also: $(a+b)^2$ always has three terms — never forget the middle term $2ab$.",
      skills: ['perfect-square-trinomial']
    }
  ]
};
