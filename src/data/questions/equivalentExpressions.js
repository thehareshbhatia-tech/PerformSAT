// Practice questions for Equivalent Expressions module
// Questions are organized by SECTION (question type)

export const equivalentExpressionsQuestions = {
  // Section: Equivalent Expressions
  "Equivalent Expressions": [
    {
      id: 1,
      question: "Which expression is equivalent to 3(2x + 4) - 2(x - 1)?",
      choices: [
        { id: "A", text: "4x + 14" },
        { id: "B", text: "4x + 10" },
        { id: "C", text: "8x + 14" },
        { id: "D", text: "4x + 12" }
      ],
      correctAnswer: "A",
      explanation: "3(2x + 4) - 2(x - 1) = 6x + 12 - 2x + 2 = 4x + 14. Distribute carefully, noting that -2(x-1) = -2x + 2."
    },
    {
      id: 2,
      question: "Which expression is equivalent to (x + 3)(x - 3)?",
      choices: [
        { id: "A", text: "x² - 6" },
        { id: "B", text: "x² + 9" },
        { id: "C", text: "x² - 9" },
        { id: "D", text: "x² + 6x + 9" }
      ],
      correctAnswer: "C",
      explanation: "This is the difference of squares pattern: (a + b)(a - b) = a² - b². So (x + 3)(x - 3) = x² - 9."
    },
    {
      id: 3,
      question: "Simplify: (4x²y³)/(2xy)",
      choices: [
        { id: "A", text: "2xy²" },
        { id: "B", text: "2x²y²" },
        { id: "C", text: "2xy" },
        { id: "D", text: "8x³y⁴" }
      ],
      correctAnswer: "A",
      explanation: "Divide coefficients: 4/2 = 2. Subtract exponents: x²⁻¹ = x, y³⁻¹ = y². Result: 2xy²."
    },
    {
      id: 4,
      question: "Which expression is equivalent to x² + 6x + 9?",
      choices: [
        { id: "A", text: "(x + 3)²" },
        { id: "B", text: "(x - 3)²" },
        { id: "C", text: "(x + 9)(x + 1)" },
        { id: "D", text: "(x + 6)(x + 3)" }
      ],
      correctAnswer: "A",
      explanation: "This is a perfect square trinomial: x² + 6x + 9 = (x + 3)². Check: (x + 3)² = x² + 6x + 9 ✓"
    },
    {
      id: 5,
      question: "Which expression is equivalent to (2a + b)²?",
      choices: [
        { id: "A", text: "4a² + b²" },
        { id: "B", text: "4a² + 2ab + b²" },
        { id: "C", text: "4a² + 4ab + b²" },
        { id: "D", text: "2a² + 2ab + b²" }
      ],
      correctAnswer: "C",
      explanation: "(2a + b)² = (2a)² + 2(2a)(b) + b² = 4a² + 4ab + b². Remember the middle term is 2 times the product."
    }
  ]
};
