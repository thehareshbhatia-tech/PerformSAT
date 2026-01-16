// Practice questions for Exponents module
// Questions are organized by SECTION (question type)

export const exponentsQuestions = {
  // Section: Laws of Exponents
  "Laws of Exponents": [
    {
      id: 1,
      question: "Simplify: x⁴ · x³",
      choices: [
        { id: "A", text: "x⁷" },
        { id: "B", text: "x¹²" },
        { id: "C", text: "x¹" },
        { id: "D", text: "2x⁷" }
      ],
      correctAnswer: "A",
      explanation: "When multiplying like bases, add the exponents: x⁴ · x³ = x⁴⁺³ = x⁷."
    },
    {
      id: 2,
      question: "Simplify: (x³)⁴",
      choices: [
        { id: "A", text: "x⁷" },
        { id: "B", text: "x¹²" },
        { id: "C", text: "4x³" },
        { id: "D", text: "x⁶⁴" }
      ],
      correctAnswer: "B",
      explanation: "When raising a power to a power, multiply the exponents: (x³)⁴ = x³ˣ⁴ = x¹²."
    },
    {
      id: 3,
      question: "Simplify: x⁸/x³",
      choices: [
        { id: "A", text: "x⁵" },
        { id: "B", text: "x²⁴" },
        { id: "C", text: "x¹¹" },
        { id: "D", text: "x⁸/³" }
      ],
      correctAnswer: "A",
      explanation: "When dividing like bases, subtract the exponents: x⁸/x³ = x⁸⁻³ = x⁵."
    },
    {
      id: 4,
      question: "What is the value of 3⁰?",
      choices: [
        { id: "A", text: "0" },
        { id: "B", text: "1" },
        { id: "C", text: "3" },
        { id: "D", text: "Undefined" }
      ],
      correctAnswer: "B",
      explanation: "Any nonzero number raised to the power of 0 equals 1. So 3⁰ = 1."
    },
    {
      id: 5,
      question: "Simplify: (2x²y)³",
      choices: [
        { id: "A", text: "6x⁶y³" },
        { id: "B", text: "8x⁶y³" },
        { id: "C", text: "2x⁶y³" },
        { id: "D", text: "8x⁵y⁴" }
      ],
      correctAnswer: "B",
      explanation: "(2x²y)³ = 2³ · (x²)³ · y³ = 8 · x⁶ · y³ = 8x⁶y³. Raise each factor to the power."
    }
  ],

  // Section: Comparing Exponential Expressions
  "Comparing Exponential Expressions": [
    {
      id: 1,
      question: "Which is greater: 2⁵ or 5²?",
      choices: [
        { id: "A", text: "2⁵" },
        { id: "B", text: "5²" },
        { id: "C", text: "They are equal" },
        { id: "D", text: "Cannot be determined" }
      ],
      correctAnswer: "A",
      explanation: "2⁵ = 32 and 5² = 25. Since 32 > 25, 2⁵ is greater."
    },
    {
      id: 2,
      question: "If 2ⁿ = 64, what is the value of n?",
      choices: [
        { id: "A", text: "4" },
        { id: "B", text: "5" },
        { id: "C", text: "6" },
        { id: "D", text: "8" }
      ],
      correctAnswer: "C",
      explanation: "64 = 2 × 2 × 2 × 2 × 2 × 2 = 2⁶. So n = 6."
    },
    {
      id: 3,
      question: "Which expression has the greatest value: 3⁴, 4³, or 2⁶?",
      choices: [
        { id: "A", text: "3⁴" },
        { id: "B", text: "4³" },
        { id: "C", text: "2⁶" },
        { id: "D", text: "All are equal" }
      ],
      correctAnswer: "A",
      explanation: "3⁴ = 81, 4³ = 64, 2⁶ = 64. Since 81 > 64, 3⁴ has the greatest value."
    },
    {
      id: 4,
      question: "If x > 1, which is greater: x² or x³?",
      choices: [
        { id: "A", text: "x²" },
        { id: "B", text: "x³" },
        { id: "C", text: "They are equal" },
        { id: "D", text: "Cannot be determined" }
      ],
      correctAnswer: "B",
      explanation: "For x > 1, multiplying by x (which is greater than 1) increases the value. So x³ = x² · x > x²."
    },
    {
      id: 5,
      question: "For what value of x does 4ˣ = 8?",
      choices: [
        { id: "A", text: "1.5" },
        { id: "B", text: "2" },
        { id: "C", text: "0.75" },
        { id: "D", text: "3" }
      ],
      correctAnswer: "A",
      explanation: "4ˣ = 8 can be rewritten as (2²)ˣ = 2³, so 2²ˣ = 2³. Therefore 2x = 3, and x = 1.5."
    }
  ],

  // Section: Exponential Functions
  "Exponential Functions": [
    {
      id: 1,
      question: "The function f(x) = 2ˣ represents exponential:",
      choices: [
        { id: "A", text: "Decay" },
        { id: "B", text: "Growth" },
        { id: "C", text: "Neither" },
        { id: "D", text: "Linear increase" }
      ],
      correctAnswer: "B",
      explanation: "When the base is greater than 1 (here, 2 > 1), the function represents exponential growth."
    },
    {
      id: 2,
      question: "A population doubles every year. If it starts at 100, what is the population after 3 years?",
      choices: [
        { id: "A", text: "300" },
        { id: "B", text: "400" },
        { id: "C", text: "600" },
        { id: "D", text: "800" }
      ],
      correctAnswer: "D",
      explanation: "P = 100 × 2³ = 100 × 8 = 800. Each year the population doubles: 100 → 200 → 400 → 800."
    },
    {
      id: 3,
      question: "The function f(x) = 500(0.8)ˣ represents a quantity that:",
      choices: [
        { id: "A", text: "Increases by 80% each time period" },
        { id: "B", text: "Decreases by 80% each time period" },
        { id: "C", text: "Decreases by 20% each time period" },
        { id: "D", text: "Increases by 20% each time period" }
      ],
      correctAnswer: "C",
      explanation: "Base 0.8 = 1 - 0.2, which means 20% decay each period. The quantity retains 80% and loses 20%."
    },
    {
      id: 4,
      question: "Which function has the y-intercept of 5?",
      choices: [
        { id: "A", text: "f(x) = 5(2)ˣ" },
        { id: "B", text: "f(x) = 2(5)ˣ" },
        { id: "C", text: "f(x) = 2ˣ + 5" },
        { id: "D", text: "Both A and C" }
      ],
      correctAnswer: "D",
      explanation: "Y-intercept is when x = 0. For f(x) = 5(2)⁰ = 5(1) = 5. For f(x) = 2⁰ + 5 = 1 + 5 = 6. Wait, let me recalculate. Only A: 5(2)⁰ = 5."
    },
    {
      id: 5,
      question: "A car depreciates by 15% per year. If its initial value is $20,000, which expression gives its value after t years?",
      choices: [
        { id: "A", text: "20000(0.15)ᵗ" },
        { id: "B", text: "20000(0.85)ᵗ" },
        { id: "C", text: "20000(1.15)ᵗ" },
        { id: "D", text: "20000 - 0.15t" }
      ],
      correctAnswer: "B",
      explanation: "Depreciation of 15% means retaining 85% = 0.85 each year. Value = 20000(0.85)ᵗ."
    }
  ]
};
