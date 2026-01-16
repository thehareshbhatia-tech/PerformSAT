// Practice questions for Quadratics module
// Questions are organized by SECTION (question type)

export const quadraticsQuestions = {
  // Section: Overview
  "Overview": [
    {
      id: 1,
      question: "Which of the following is a quadratic function?",
      choices: [
        { id: "A", text: "f(x) = 3x + 2" },
        { id: "B", text: "f(x) = x² + 5x - 3" },
        { id: "C", text: "f(x) = x³ - x" },
        { id: "D", text: "f(x) = √x + 1" }
      ],
      correctAnswer: "B",
      explanation: "A quadratic function has the form f(x) = ax² + bx + c where a ≠ 0. Only f(x) = x² + 5x - 3 fits this form."
    },
    {
      id: 2,
      question: "In the quadratic function f(x) = 2x² - 4x + 7, what is the value of 'a'?",
      choices: [
        { id: "A", text: "-4" },
        { id: "B", text: "2" },
        { id: "C", text: "7" },
        { id: "D", text: "x²" }
      ],
      correctAnswer: "B",
      explanation: "In standard form f(x) = ax² + bx + c, 'a' is the coefficient of x². Here a = 2."
    },
    {
      id: 3,
      question: "The graph of a quadratic function is called a:",
      choices: [
        { id: "A", text: "Line" },
        { id: "B", text: "Circle" },
        { id: "C", text: "Parabola" },
        { id: "D", text: "Hyperbola" }
      ],
      correctAnswer: "C",
      explanation: "All quadratic functions graph as parabolas - U-shaped curves that open either upward or downward."
    },
    {
      id: 4,
      question: "If a > 0 in f(x) = ax² + bx + c, the parabola:",
      choices: [
        { id: "A", text: "Opens upward" },
        { id: "B", text: "Opens downward" },
        { id: "C", text: "Opens to the right" },
        { id: "D", text: "Opens to the left" }
      ],
      correctAnswer: "A",
      explanation: "When a > 0, the parabola opens upward (like a smile). When a < 0, it opens downward."
    },
    {
      id: 5,
      question: "What is the y-intercept of f(x) = 3x² - 2x + 5?",
      choices: [
        { id: "A", text: "3" },
        { id: "B", text: "-2" },
        { id: "C", text: "5" },
        { id: "D", text: "0" }
      ],
      correctAnswer: "C",
      explanation: "The y-intercept is found when x = 0: f(0) = 3(0)² - 2(0) + 5 = 5. The y-intercept equals c in standard form."
    }
  ],

  // Section: Roots
  "Roots": [
    {
      id: 1,
      question: "What are the roots of x² - 5x + 6 = 0?",
      choices: [
        { id: "A", text: "x = 2 and x = 3" },
        { id: "B", text: "x = -2 and x = -3" },
        { id: "C", text: "x = 1 and x = 6" },
        { id: "D", text: "x = -1 and x = -6" }
      ],
      correctAnswer: "A",
      explanation: "Factor: x² - 5x + 6 = (x - 2)(x - 3) = 0. So x = 2 or x = 3."
    },
    {
      id: 2,
      question: "If x = -4 is a root of x² + 7x + k = 0, what is the value of k?",
      choices: [
        { id: "A", text: "-12" },
        { id: "B", text: "12" },
        { id: "C", text: "-28" },
        { id: "D", text: "28" }
      ],
      correctAnswer: "B",
      explanation: "Substitute x = -4: (-4)² + 7(-4) + k = 0 → 16 - 28 + k = 0 → k = 12."
    },
    {
      id: 3,
      question: "The equation x² - 9 = 0 has roots at:",
      choices: [
        { id: "A", text: "x = 9 only" },
        { id: "B", text: "x = 3 only" },
        { id: "C", text: "x = 3 and x = -3" },
        { id: "D", text: "x = 81 and x = -81" }
      ],
      correctAnswer: "C",
      explanation: "x² - 9 = 0 → x² = 9 → x = ±3. Or factor as (x-3)(x+3) = 0."
    },
    {
      id: 4,
      question: "If a quadratic equation has roots at x = 1 and x = 5, which could be the equation?",
      choices: [
        { id: "A", text: "x² - 6x + 5 = 0" },
        { id: "B", text: "x² + 6x + 5 = 0" },
        { id: "C", text: "x² - 4x + 5 = 0" },
        { id: "D", text: "x² - 6x - 5 = 0" }
      ],
      correctAnswer: "A",
      explanation: "If roots are 1 and 5, the equation is (x-1)(x-5) = 0 → x² - 6x + 5 = 0."
    },
    {
      id: 5,
      question: "For what value of x does 2x² - 8x = 0?",
      choices: [
        { id: "A", text: "x = 0 only" },
        { id: "B", text: "x = 4 only" },
        { id: "C", text: "x = 0 and x = 4" },
        { id: "D", text: "x = 2 and x = -4" }
      ],
      correctAnswer: "C",
      explanation: "Factor: 2x(x - 4) = 0. So 2x = 0 or x - 4 = 0, giving x = 0 or x = 4."
    }
  ],

  // Section: Vertex
  "Vertex": [
    {
      id: 1,
      question: "What is the x-coordinate of the vertex of f(x) = x² - 6x + 5?",
      choices: [
        { id: "A", text: "-6" },
        { id: "B", text: "-3" },
        { id: "C", text: "3" },
        { id: "D", text: "6" }
      ],
      correctAnswer: "C",
      explanation: "The x-coordinate of the vertex is x = -b/(2a) = -(-6)/(2×1) = 6/2 = 3."
    },
    {
      id: 2,
      question: "The vertex of f(x) = (x - 2)² + 3 is at:",
      choices: [
        { id: "A", text: "(2, 3)" },
        { id: "B", text: "(-2, 3)" },
        { id: "C", text: "(2, -3)" },
        { id: "D", text: "(-2, -3)" }
      ],
      correctAnswer: "A",
      explanation: "In vertex form f(x) = a(x - h)² + k, the vertex is (h, k). Here h = 2 and k = 3."
    },
    {
      id: 3,
      question: "For f(x) = -2x² + 8x - 3, does the vertex represent a maximum or minimum?",
      choices: [
        { id: "A", text: "Maximum, because a < 0" },
        { id: "B", text: "Minimum, because a < 0" },
        { id: "C", text: "Maximum, because a > 0" },
        { id: "D", text: "Neither" }
      ],
      correctAnswer: "A",
      explanation: "When a = -2 < 0, the parabola opens downward, so the vertex is the maximum point."
    },
    {
      id: 4,
      question: "What is the minimum value of f(x) = x² + 4x + 7?",
      choices: [
        { id: "A", text: "3" },
        { id: "B", text: "4" },
        { id: "C", text: "7" },
        { id: "D", text: "-2" }
      ],
      correctAnswer: "A",
      explanation: "x-coordinate of vertex: x = -4/(2×1) = -2. Minimum value: f(-2) = (-2)² + 4(-2) + 7 = 4 - 8 + 7 = 3."
    },
    {
      id: 5,
      question: "The axis of symmetry of f(x) = 2x² + 12x - 5 is:",
      choices: [
        { id: "A", text: "x = 3" },
        { id: "B", text: "x = -3" },
        { id: "C", text: "x = 6" },
        { id: "D", text: "x = -6" }
      ],
      correctAnswer: "B",
      explanation: "The axis of symmetry passes through the vertex at x = -b/(2a) = -12/(2×2) = -12/4 = -3."
    }
  ],

  // Section: Discriminant
  "Discriminant": [
    {
      id: 1,
      question: "What is the discriminant of x² - 4x + 4 = 0?",
      choices: [
        { id: "A", text: "-32" },
        { id: "B", text: "0" },
        { id: "C", text: "32" },
        { id: "D", text: "48" }
      ],
      correctAnswer: "B",
      explanation: "Discriminant = b² - 4ac = (-4)² - 4(1)(4) = 16 - 16 = 0."
    },
    {
      id: 2,
      question: "If the discriminant is negative, the quadratic equation has:",
      choices: [
        { id: "A", text: "Two real solutions" },
        { id: "B", text: "One real solution" },
        { id: "C", text: "No real solutions" },
        { id: "D", text: "Infinitely many solutions" }
      ],
      correctAnswer: "C",
      explanation: "When discriminant < 0, there are no real solutions (the solutions are complex/imaginary)."
    },
    {
      id: 3,
      question: "How many x-intercepts does y = x² + 2x + 5 have?",
      choices: [
        { id: "A", text: "0" },
        { id: "B", text: "1" },
        { id: "C", text: "2" },
        { id: "D", text: "Cannot determine" }
      ],
      correctAnswer: "A",
      explanation: "Discriminant = 2² - 4(1)(5) = 4 - 20 = -16 < 0. No real roots means no x-intercepts."
    },
    {
      id: 4,
      question: "For what value of k does x² + kx + 9 = 0 have exactly one solution?",
      choices: [
        { id: "A", text: "k = 3 only" },
        { id: "B", text: "k = 6 only" },
        { id: "C", text: "k = ±6" },
        { id: "D", text: "k = ±3" }
      ],
      correctAnswer: "C",
      explanation: "One solution when discriminant = 0: k² - 4(1)(9) = 0 → k² = 36 → k = ±6."
    },
    {
      id: 5,
      question: "The equation 2x² - 5x + 1 = 0 has:",
      choices: [
        { id: "A", text: "Two distinct real roots" },
        { id: "B", text: "One repeated real root" },
        { id: "C", text: "No real roots" },
        { id: "D", text: "Cannot be determined" }
      ],
      correctAnswer: "A",
      explanation: "Discriminant = (-5)² - 4(2)(1) = 25 - 8 = 17 > 0. Positive discriminant means two distinct real roots."
    }
  ],

  // Section: Deriving Standard Form
  "Deriving Standard Form": [
    {
      id: 1,
      question: "Convert f(x) = (x + 3)² - 4 to standard form.",
      choices: [
        { id: "A", text: "f(x) = x² + 6x + 5" },
        { id: "B", text: "f(x) = x² + 6x + 9" },
        { id: "C", text: "f(x) = x² - 6x + 5" },
        { id: "D", text: "f(x) = x² + 3x - 4" }
      ],
      correctAnswer: "A",
      explanation: "(x + 3)² - 4 = x² + 6x + 9 - 4 = x² + 6x + 5."
    },
    {
      id: 2,
      question: "If a parabola has vertex (2, -1) and passes through (0, 3), what is the value of 'a' in f(x) = a(x - 2)² - 1?",
      choices: [
        { id: "A", text: "1" },
        { id: "B", text: "-1" },
        { id: "C", text: "2" },
        { id: "D", text: "-2" }
      ],
      correctAnswer: "A",
      explanation: "Substitute (0, 3): 3 = a(0 - 2)² - 1 → 3 = 4a - 1 → 4 = 4a → a = 1."
    },
    {
      id: 3,
      question: "A parabola has x-intercepts at 1 and 5 and passes through (0, -10). What is the equation?",
      choices: [
        { id: "A", text: "y = 2(x - 1)(x - 5)" },
        { id: "B", text: "y = -2(x - 1)(x - 5)" },
        { id: "C", text: "y = (x - 1)(x - 5)" },
        { id: "D", text: "y = -10(x - 1)(x - 5)" }
      ],
      correctAnswer: "B",
      explanation: "Use factored form y = a(x - 1)(x - 5). At (0, -10): -10 = a(-1)(-5) = 5a → a = -2."
    },
    {
      id: 4,
      question: "What is the standard form of a quadratic with roots 2 and -3 that passes through (1, -8)?",
      choices: [
        { id: "A", text: "y = 2x² + 2x - 12" },
        { id: "B", text: "y = x² + x - 6" },
        { id: "C", text: "y = 2x² - 2x - 12" },
        { id: "D", text: "y = -2x² - 2x + 12" }
      ],
      correctAnswer: "A",
      explanation: "y = a(x - 2)(x + 3). At (1, -8): -8 = a(-1)(4) = -4a → a = 2. Expand: 2(x² + x - 6) = 2x² + 2x - 12."
    },
    {
      id: 5,
      question: "Convert f(x) = -2(x - 1)² + 8 to standard form.",
      choices: [
        { id: "A", text: "f(x) = -2x² + 4x + 6" },
        { id: "B", text: "f(x) = -2x² - 4x + 6" },
        { id: "C", text: "f(x) = -2x² + 4x - 6" },
        { id: "D", text: "f(x) = 2x² - 4x + 6" }
      ],
      correctAnswer: "A",
      explanation: "-2(x - 1)² + 8 = -2(x² - 2x + 1) + 8 = -2x² + 4x - 2 + 8 = -2x² + 4x + 6."
    }
  ]
};
