// Practice questions for Exponents module
// Questions are organized by SECTION (question type)

export const exponentsQuestions = {
  // Section: Laws of Exponents
  "Laws of Exponents": [
    {
      id: 1,
      difficulty: "easy",
      question: "Simplify: x⁴ · x³",
      choices: [
        { id: "A", text: "x⁷" },
        { id: "B", text: "x¹²" },
        { id: "C", text: "x¹" },
        { id: "D", text: "2x⁷" }
      ],
      correctAnswer: "A",
      hint: "When multiplying terms with the same base, think about what happens to the exponents. Do you add, subtract, or multiply them?",
      explanation: "When multiplying like bases, add the exponents: x⁴ · x³ = x⁴⁺³ = x⁷."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Simplify: (x³)⁴",
      choices: [
        { id: "A", text: "x⁷" },
        { id: "B", text: "x¹²" },
        { id: "C", text: "4x³" },
        { id: "D", text: "x⁶⁴" }
      ],
      correctAnswer: "B",
      hint: "When you raise a power to another power, you need to combine the exponents. Think about what operation connects them.",
      explanation: "When raising a power to a power, multiply the exponents: (x³)⁴ = x³ˣ⁴ = x¹²."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "Simplify: x⁸/x³",
      choices: [
        { id: "A", text: "x⁵" },
        { id: "B", text: "x²⁴" },
        { id: "C", text: "x¹¹" },
        { id: "D", text: "x⁸/³" }
      ],
      correctAnswer: "A",
      hint: "Division is the opposite of multiplication. If multiplying bases means adding exponents, what does dividing bases mean for the exponents?",
      explanation: "When dividing like bases, subtract the exponents: x⁸/x³ = x⁸⁻³ = x⁵."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "What is the value of 3⁰?",
      choices: [
        { id: "A", text: "0" },
        { id: "B", text: "1" },
        { id: "C", text: "3" },
        { id: "D", text: "Undefined" }
      ],
      correctAnswer: "B",
      hint: "There's a special rule for any nonzero number raised to the power of zero. This is a fundamental exponent property to memorize.",
      explanation: "Any nonzero number raised to the power of 0 equals 1. So 3⁰ = 1."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Simplify: (2x²y)³",
      choices: [
        { id: "A", text: "6x⁶y³" },
        { id: "B", text: "8x⁶y³" },
        { id: "C", text: "2x⁶y³" },
        { id: "D", text: "8x⁵y⁴" }
      ],
      correctAnswer: "B",
      hint: "The exponent outside applies to every factor inside the parentheses. Don't forget to raise the coefficient (2) to the power as well!",
      explanation: "(2x²y)³ = 2³ · (x²)³ · y³ = 8 · x⁶ · y³ = 8x⁶y³. Raise each factor to the power."
    }
  ],

  // Section: Comparing Exponential Expressions
  "Comparing Exponential Expressions": [
    {
      id: 1,
      difficulty: "easy",
      question: "Which is greater: 2⁵ or 5²?",
      choices: [
        { id: "A", text: "2⁵" },
        { id: "B", text: "5²" },
        { id: "C", text: "They are equal" },
        { id: "D", text: "Cannot be determined" }
      ],
      correctAnswer: "A",
      hint: "Calculate each expression separately. Remember, 2⁵ means 2 multiplied by itself 5 times, and 5² means 5 multiplied by itself 2 times.",
      explanation: "2⁵ = 32 and 5² = 25. Since 32 > 25, 2⁵ is greater."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If 2ⁿ = 64, what is the value of n?",
      choices: [
        { id: "A", text: "4" },
        { id: "B", text: "5" },
        { id: "C", text: "6" },
        { id: "D", text: "8" }
      ],
      correctAnswer: "C",
      hint: "Start doubling from 2: 2, 4, 8, 16... Count how many times you need to multiply 2 by itself to reach 64.",
      explanation: "64 = 2 × 2 × 2 × 2 × 2 × 2 = 2⁶. So n = 6."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "Which expression has the greatest value: 3⁴, 4³, or 2⁶?",
      choices: [
        { id: "A", text: "3⁴" },
        { id: "B", text: "4³" },
        { id: "C", text: "2⁶" },
        { id: "D", text: "All are equal" }
      ],
      correctAnswer: "A",
      hint: "Evaluate each expression by computing the actual numerical value. Sometimes smaller bases with larger exponents can surprise you!",
      explanation: "3⁴ = 81, 4³ = 64, 2⁶ = 64. Since 81 > 64, 3⁴ has the greatest value."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "If x > 1, which is greater: x² or x³?",
      choices: [
        { id: "A", text: "x²" },
        { id: "B", text: "x³" },
        { id: "C", text: "They are equal" },
        { id: "D", text: "Cannot be determined" }
      ],
      correctAnswer: "B",
      hint: "Think about what x³ equals in terms of x². Since x > 1, consider what happens when you multiply a number greater than 1 by itself again.",
      explanation: "For x > 1, multiplying by x (which is greater than 1) increases the value. So x³ = x² · x > x²."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "For what value of x does 4ˣ = 8?",
      choices: [
        { id: "A", text: "1.5" },
        { id: "B", text: "2" },
        { id: "C", text: "0.75" },
        { id: "D", text: "3" }
      ],
      correctAnswer: "A",
      hint: "Try rewriting both 4 and 8 as powers of 2. This will let you compare the exponents directly.",
      explanation: "4ˣ = 8 can be rewritten as (2²)ˣ = 2³, so 2²ˣ = 2³. Therefore 2x = 3, and x = 1.5."
    }
  ],

  // Section: Exponential Functions
  "Exponential Functions": [
    {
      id: 1,
      difficulty: "easy",
      question: "The function f(x) = 2ˣ represents exponential:",
      choices: [
        { id: "A", text: "Decay" },
        { id: "B", text: "Growth" },
        { id: "C", text: "Neither" },
        { id: "D", text: "Linear increase" }
      ],
      correctAnswer: "B",
      hint: "Look at the base of the exponential. Is it greater than 1 or between 0 and 1? This determines whether the function grows or decays.",
      explanation: "When the base is greater than 1 (here, 2 > 1), the function represents exponential growth."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A population doubles every year. If it starts at 100, what is the population after 3 years?",
      choices: [
        { id: "A", text: "300" },
        { id: "B", text: "400" },
        { id: "C", text: "600" },
        { id: "D", text: "800" }
      ],
      correctAnswer: "D",
      hint: "Doubling means multiplying by 2. Track the population year by year, or use the formula: initial value times 2 raised to the number of years.",
      explanation: "P = 100 × 2³ = 100 × 8 = 800. Each year the population doubles: 100 → 200 → 400 → 800."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The function f(x) = 500(0.8)ˣ represents a quantity that:",
      choices: [
        { id: "A", text: "Increases by 80% each time period" },
        { id: "B", text: "Decreases by 80% each time period" },
        { id: "C", text: "Decreases by 20% each time period" },
        { id: "D", text: "Increases by 20% each time period" }
      ],
      correctAnswer: "C",
      hint: "The base 0.8 means the quantity keeps 80% of its value each period. What percentage is being lost?",
      explanation: "Base 0.8 = 1 - 0.2, which means 20% decay each period. The quantity retains 80% and loses 20%."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Which function has the y-intercept of 5?",
      choices: [
        { id: "A", text: "f(x) = 5(2)ˣ" },
        { id: "B", text: "f(x) = 2(5)ˣ" },
        { id: "C", text: "f(x) = 2ˣ + 5" },
        { id: "D", text: "f(x) = 5ˣ + 2" }
      ],
      correctAnswer: "A",
      hint: "The y-intercept occurs when x = 0. Substitute x = 0 into each function and remember that any number raised to the power of 0 equals 1.",
      explanation: "Y-intercept is when x = 0. For A: f(0) = 5(2)⁰ = 5(1) = 5. For B: f(0) = 2(5)⁰ = 2(1) = 2. For C: f(0) = 2⁰ + 5 = 1 + 5 = 6. For D: f(0) = 5⁰ + 2 = 1 + 2 = 3. Only A has y-intercept of 5."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A car depreciates by 15% per year. If its initial value is $20,000, which expression gives its value after t years?",
      choices: [
        { id: "A", text: "20000(0.15)ᵗ" },
        { id: "B", text: "20000(0.85)ᵗ" },
        { id: "C", text: "20000(1.15)ᵗ" },
        { id: "D", text: "20000 - 0.15t" }
      ],
      correctAnswer: "B",
      hint: "Depreciation means losing value. If the car loses 15% of its value each year, what percentage of its value does it retain?",
      explanation: "Depreciation of 15% means retaining 85% = 0.85 each year. Value = 20000(0.85)ᵗ."
    }
  ]
};
