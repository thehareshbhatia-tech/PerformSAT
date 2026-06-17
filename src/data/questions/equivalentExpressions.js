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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Distribute both products and track the signs: $6x+12$ from the first, $-2x+2$ from the second. Combine to get $4x+14$.\n\n**The Full Solution:**\nStep 1: Distribute the $3$: $3(2x+4)=6x+12$.\nStep 2: Distribute the $-2$: $-2(x-1)=-2x+2$ (negative times negative is positive).\nStep 3: Combine like terms: $(6x-2x)+(12+2)=4x+14$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($4x+10$): distributed $-2(x-1)$ as $-2x-2$, dropping the sign flip on the $-1$.\n* Choice C ($8x+14$): added the $x$ terms ($6x+2x$) instead of subtracting; $6x-2x=4x$.\n* Choice D ($4x+12$): forgot the $+2$ from $-2(-1)$, distributing only to the first inner term.\n\n**Test Day Takeaway:** A negative outside parentheses flips the sign of every term inside — apply it to all terms, not just the first.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** This is difference of squares: $(a+b)(a-b)=a^2-b^2$. With $a=x$, $b=3$, you get $x^2-9$ instantly.\n\n**The Full Solution:**\nStep 1: Recognize the pattern $(a+b)(a-b)=a^2-b^2$ — the cross terms cancel.\nStep 2: Here $a=x$ and $b=3$, so $(x+3)(x-3)=x^2-3^2=x^2-9$, which is choice C.\nStep 3: FOIL to confirm: $x^2-3x+3x-9=x^2-9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^2-6$): computed $3^2$ as $6$ instead of $9$ — confused doubling with squaring.\n* Choice B ($x^2+9$): kept a plus sign; difference of squares gives $a^2-b^2$, not $a^2+b^2$.\n* Choice D ($x^2+6x+9$): expanded $(x+3)^2$ instead, treating both factors as $(x+3)$.\n\n**Test Day Takeaway:** $(a+b)(a-b)=a^2-b^2$ — when you see matching terms with opposite signs, skip FOIL and write the difference of squares.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Divide coefficients ($4\\div 2=2$) and subtract exponents on each base: $x^{2-1}=x$ and $y^{3-1}=y^2$. That gives $2xy^2$.\n\n**The Full Solution:**\nStep 1: Coefficients: $\\frac{4}{2}=2$.\nStep 2: Base $x$: $\\frac{x^2}{x}=x^{2-1}=x$.\nStep 3: Base $y$: $\\frac{y^3}{y}=y^{3-1}=y^2$.\nStep 4: Combine: $\\frac{4x^2y^3}{2xy}=2xy^2$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2x^2y^2$): forgot to subtract the $x$ exponent; $\\frac{x^2}{x}=x$, not $x^2$.\n* Choice C ($2xy$): over-subtracted on $y$; $y^{3-1}=y^2$, not $y^1$.\n* Choice D ($8x^3y^4$): multiplied instead of dividing — added exponents and multiplied coefficients.\n\n**Test Day Takeaway:** Dividing same-base powers means subtracting exponents: $\\frac{a^m}{a^n}=a^{m-n}$. A fraction signals subtraction, never addition.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~10s):** The first and last terms are perfect squares ($x^2$ and $9$) and the middle is $2\\cdot x\\cdot 3=6x$, so this factors as $(x+3)^2$.\n\n**The Full Solution:**\nStep 1: Match the pattern $a^2+2ab+b^2=(a+b)^2$. Here $a=x$ (since $a^2=x^2$) and $b=3$ (since $b^2=9$).\nStep 2: Check the middle term: $2ab=2(x)(3)=6x$. $\\checkmark$\nStep 3: Factor: $x^2+6x+9=(x+3)^2$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($(x-3)^2$): expands to $x^2-6x+9$; a $+6x$ middle term needs a plus inside the parentheses.\n* Choice C ($(x+9)(x+1)$): multiplies to $9$ but expands to $x^2+10x+9$, so the middle term is wrong.\n* Choice D ($(x+6)(x+3)$): expands to $x^2+9x+18$; mistook the $6$ coefficient for a factor.\n\n**Test Day Takeaway:** When both end terms are perfect squares and the middle equals $2\\sqrt{\\text{first}}\\cdot\\sqrt{\\text{last}}$, it factors as a perfect square binomial.",
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
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** Square the binomial: $(2a)^2+2(2a)(b)+b^2=4a^2+4ab+b^2$. The key is squaring the full $2a$ and doubling the cross term.\n\n**The Full Solution:**\nStep 1: Apply $(x+y)^2=x^2+2xy+y^2$ with $x=2a$ and $y=b$.\nStep 2: First term: $(2a)^2=4a^2$.\nStep 3: Middle term: $2(2a)(b)=4ab$.\nStep 4: Last term: $b^2$. Combine: $4a^2+4ab+b^2$, which is choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4a^2+b^2$): dropped the middle term; $(a+b)^2\\neq a^2+b^2$ — squaring a binomial always gives three terms.\n* Choice B ($4a^2+2ab+b^2$): used $2ab$ for the cross term, forgetting the inner $a$ is really $2a$, so it should be $4ab$.\n* Choice D ($2a^2+2ab+b^2$): computed $(2a)^2$ as $2a^2$; squaring hits both the coefficient and the variable, giving $4a^2$.\n\n**Test Day Takeaway:** $(ka+b)^2=k^2a^2+2kab+b^2$ — square the whole leading term and double the product for the middle. Never forget the cross term.",
      skills: ['perfect-square-trinomial']
    }
  ]
};
