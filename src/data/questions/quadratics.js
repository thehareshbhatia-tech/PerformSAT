// Practice questions for Quadratics module
// Questions are organized by SECTION (question type)

export const quadraticsQuestions = {
  // Section: Overview
  "Overview": [
    {
      id: 1,
      difficulty: "easy",
      question: "Which of the following is a quadratic function?",
      choices: [
        { id: "A", text: "f(x) = 3x + 2" },
        { id: "B", text: "f(x) = x² + 5x - 3" },
        { id: "C", text: "f(x) = x³ - x" },
        { id: "D", text: "f(x) = √x + 1" }
      ],
      correctAnswer: "B",
      hint: "A quadratic function always has an x² term as its highest power. Look for the function where the variable is raised to exactly the second power.",
      explanation: "A quadratic function has the form f(x) = ax² + bx + c where a ≠ 0. Only f(x) = x² + 5x - 3 fits this form."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "In the quadratic function f(x) = 2x² - 4x + 7, what is the value of 'a'?",
      choices: [
        { id: "A", text: "-4" },
        { id: "B", text: "2" },
        { id: "C", text: "7" },
        { id: "D", text: "x²" }
      ],
      correctAnswer: "B",
      hint: "In standard form f(x) = ax² + bx + c, the coefficient 'a' is the number multiplying the x² term.",
      explanation: "In standard form f(x) = ax² + bx + c, 'a' is the coefficient of x². Here a = 2."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The graph of a quadratic function is called a:",
      choices: [
        { id: "A", text: "Line" },
        { id: "B", text: "Circle" },
        { id: "C", text: "Parabola" },
        { id: "D", text: "Hyperbola" }
      ],
      correctAnswer: "C",
      hint: "Think of the U-shaped curve you see when graphing y = x². This shape has a specific name in mathematics.",
      explanation: "All quadratic functions graph as parabolas - U-shaped curves that open either upward or downward."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "If a > 0 in f(x) = ax² + bx + c, the parabola:",
      choices: [
        { id: "A", text: "Opens upward" },
        { id: "B", text: "Opens downward" },
        { id: "C", text: "Opens to the right" },
        { id: "D", text: "Opens to the left" }
      ],
      correctAnswer: "A",
      hint: "The sign of 'a' determines the direction. When 'a' is positive, think of a smile; when negative, think of a frown.",
      explanation: "When a > 0, the parabola opens upward (like a smile). When a < 0, it opens downward."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "What is the y-intercept of f(x) = 3x² - 2x + 5?",
      choices: [
        { id: "A", text: "3" },
        { id: "B", text: "-2" },
        { id: "C", text: "5" },
        { id: "D", text: "0" }
      ],
      correctAnswer: "C",
      hint: "To find the y-intercept, substitute x = 0 into the function. Notice what happens to all the terms with x in them.",
      explanation: "The y-intercept is found when x = 0: f(0) = 3(0)² - 2(0) + 5 = 5. The y-intercept equals c in standard form."
    }
  ],

  // Section: Roots
  "Roots": [
    {
      id: 1,
      difficulty: "easy",
      question: "What are the roots of x² - 5x + 6 = 0?",
      choices: [
        { id: "A", text: "x = 2 and x = 3" },
        { id: "B", text: "x = -2 and x = -3" },
        { id: "C", text: "x = 1 and x = 6" },
        { id: "D", text: "x = -1 and x = -6" }
      ],
      correctAnswer: "A",
      hint: "Try factoring the quadratic. Find two numbers that multiply to give +6 and add to give -5.",
      explanation: "Factor: x² - 5x + 6 = (x - 2)(x - 3) = 0. So x = 2 or x = 3."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If x = -4 is a root of x² + 7x + k = 0, what is the value of k?",
      choices: [
        { id: "A", text: "-12" },
        { id: "B", text: "12" },
        { id: "C", text: "-28" },
        { id: "D", text: "28" }
      ],
      correctAnswer: "B",
      hint: "If x = -4 is a root, the equation equals zero when you substitute -4 for x. Plug in and solve for k.",
      explanation: "Substitute x = -4: (-4)² + 7(-4) + k = 0 → 16 - 28 + k = 0 → k = 12."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The equation x² - 9 = 0 has roots at:",
      choices: [
        { id: "A", text: "x = 9 only" },
        { id: "B", text: "x = 3 only" },
        { id: "C", text: "x = 3 and x = -3" },
        { id: "D", text: "x = 81 and x = -81" }
      ],
      correctAnswer: "C",
      hint: "This is a difference of squares. Remember that x² = 9 has two solutions: one positive and one negative.",
      explanation: "x² - 9 = 0 → x² = 9 → x = ±3. Or factor as (x-3)(x+3) = 0."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "If a quadratic equation has roots at x = 1 and x = 5, which could be the equation?",
      choices: [
        { id: "A", text: "x² - 6x + 5 = 0" },
        { id: "B", text: "x² + 6x + 5 = 0" },
        { id: "C", text: "x² - 4x + 5 = 0" },
        { id: "D", text: "x² - 6x - 5 = 0" }
      ],
      correctAnswer: "A",
      hint: "Work backwards from the roots. If r and s are roots, then the equation can be written as (x - r)(x - s) = 0. Expand this product.",
      explanation: "If roots are 1 and 5, the equation is (x-1)(x-5) = 0 → x² - 6x + 5 = 0."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "For what value of x does 2x² - 8x = 0?",
      choices: [
        { id: "A", text: "x = 0 only" },
        { id: "B", text: "x = 4 only" },
        { id: "C", text: "x = 0 and x = 4" },
        { id: "D", text: "x = 2 and x = -4" }
      ],
      correctAnswer: "C",
      hint: "Factor out the greatest common factor first. Both terms share a common factor of 2x.",
      explanation: "Factor: 2x(x - 4) = 0. So 2x = 0 or x - 4 = 0, giving x = 0 or x = 4."
    }
  ],

  // Section: Vertex
  "Vertex": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the x-coordinate of the vertex of f(x) = x² - 6x + 5?",
      choices: [
        { id: "A", text: "-6" },
        { id: "B", text: "-3" },
        { id: "C", text: "3" },
        { id: "D", text: "6" }
      ],
      correctAnswer: "C",
      hint: "Use the vertex formula x = -b/(2a). Identify the values of a and b from the standard form.",
      explanation: "The x-coordinate of the vertex is x = -b/(2a) = -(-6)/(2×1) = 6/2 = 3."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The vertex of f(x) = (x - 2)² + 3 is at:",
      choices: [
        { id: "A", text: "(2, 3)" },
        { id: "B", text: "(-2, 3)" },
        { id: "C", text: "(2, -3)" },
        { id: "D", text: "(-2, -3)" }
      ],
      correctAnswer: "A",
      hint: "This is already in vertex form f(x) = a(x - h)² + k. The vertex is at (h, k). Be careful with the sign inside the parentheses.",
      explanation: "In vertex form f(x) = a(x - h)² + k, the vertex is (h, k). Here h = 2 and k = 3."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "For f(x) = -2x² + 8x - 3, does the vertex represent a maximum or minimum?",
      choices: [
        { id: "A", text: "Maximum, because a < 0" },
        { id: "B", text: "Minimum, because a < 0" },
        { id: "C", text: "Maximum, because a > 0" },
        { id: "D", text: "Neither" }
      ],
      correctAnswer: "A",
      hint: "Look at the coefficient of x². If it's negative, the parabola opens downward, making the vertex the highest point.",
      explanation: "When a = -2 < 0, the parabola opens downward, so the vertex is the maximum point."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "What is the minimum value of f(x) = x² + 4x + 7?",
      choices: [
        { id: "A", text: "3" },
        { id: "B", text: "4" },
        { id: "C", text: "7" },
        { id: "D", text: "-2" }
      ],
      correctAnswer: "A",
      hint: "First find the x-coordinate of the vertex using x = -b/(2a), then substitute this x-value back into the function to find the minimum y-value.",
      explanation: "x-coordinate of vertex: x = -4/(2×1) = -2. Minimum value: f(-2) = (-2)² + 4(-2) + 7 = 4 - 8 + 7 = 3."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The axis of symmetry of f(x) = 2x² + 12x - 5 is:",
      choices: [
        { id: "A", text: "x = 3" },
        { id: "B", text: "x = -3" },
        { id: "C", text: "x = 6" },
        { id: "D", text: "x = -6" }
      ],
      correctAnswer: "B",
      hint: "The axis of symmetry is a vertical line that passes through the vertex. Use x = -b/(2a) to find it.",
      explanation: "The axis of symmetry passes through the vertex at x = -b/(2a) = -12/(2×2) = -12/4 = -3."
    }
  ],

  // Section: Discriminant
  "Discriminant": [
    {
      id: 1,
      difficulty: "easy",
      question: "What is the discriminant of x² - 4x + 4 = 0?",
      choices: [
        { id: "A", text: "-32" },
        { id: "B", text: "0" },
        { id: "C", text: "32" },
        { id: "D", text: "48" }
      ],
      correctAnswer: "B",
      hint: "The discriminant is b² - 4ac. Identify a, b, and c from the equation, then substitute into this formula.",
      explanation: "Discriminant = b² - 4ac = (-4)² - 4(1)(4) = 16 - 16 = 0."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If the discriminant is negative, the quadratic equation has:",
      choices: [
        { id: "A", text: "Two real solutions" },
        { id: "B", text: "One real solution" },
        { id: "C", text: "No real solutions" },
        { id: "D", text: "Infinitely many solutions" }
      ],
      correctAnswer: "C",
      hint: "The discriminant tells you about the number of real solutions. A negative discriminant means you would be taking the square root of a negative number.",
      explanation: "When discriminant < 0, there are no real solutions (the solutions are complex/imaginary)."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "How many x-intercepts does y = x² + 2x + 5 have?",
      choices: [
        { id: "A", text: "0" },
        { id: "B", text: "1" },
        { id: "C", text: "2" },
        { id: "D", text: "Cannot determine" }
      ],
      correctAnswer: "A",
      hint: "X-intercepts occur where the parabola crosses the x-axis. Calculate the discriminant to determine if there are real roots.",
      explanation: "Discriminant = 2² - 4(1)(5) = 4 - 20 = -16 < 0. No real roots means no x-intercepts."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "For what value of k does x² + kx + 9 = 0 have exactly one solution?",
      choices: [
        { id: "A", text: "k = 3 only" },
        { id: "B", text: "k = 6 only" },
        { id: "C", text: "k = ±6" },
        { id: "D", text: "k = ±3" }
      ],
      correctAnswer: "C",
      hint: "One solution means the discriminant equals zero. Set b² - 4ac = 0 and solve for k. Remember that k² has two square roots.",
      explanation: "One solution when discriminant = 0: k² - 4(1)(9) = 0 → k² = 36 → k = ±6."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The equation 2x² - 5x + 1 = 0 has:",
      choices: [
        { id: "A", text: "Two distinct real roots" },
        { id: "B", text: "One repeated real root" },
        { id: "C", text: "No real roots" },
        { id: "D", text: "Cannot be determined" }
      ],
      correctAnswer: "A",
      hint: "Calculate the discriminant and check its sign. Positive means two solutions, zero means one, negative means none.",
      explanation: "Discriminant = (-5)² - 4(2)(1) = 25 - 8 = 17 > 0. Positive discriminant means two distinct real roots."
    }
  ],

  // Section: Deriving Standard Form
  "Deriving Standard Form": [
    {
      id: 1,
      difficulty: "easy",
      question: "Convert f(x) = (x + 3)² - 4 to standard form.",
      choices: [
        { id: "A", text: "f(x) = x² + 6x + 5" },
        { id: "B", text: "f(x) = x² + 6x + 9" },
        { id: "C", text: "f(x) = x² - 6x + 5" },
        { id: "D", text: "f(x) = x² + 3x - 4" }
      ],
      correctAnswer: "A",
      hint: "Expand (x + 3)² using FOIL or the pattern (a + b)² = a² + 2ab + b², then combine with the -4.",
      explanation: "(x + 3)² - 4 = x² + 6x + 9 - 4 = x² + 6x + 5."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If a parabola has vertex (2, -1) and passes through (0, 3), what is the value of 'a' in f(x) = a(x - 2)² - 1?",
      choices: [
        { id: "A", text: "1" },
        { id: "B", text: "-1" },
        { id: "C", text: "2" },
        { id: "D", text: "-2" }
      ],
      correctAnswer: "A",
      hint: "Substitute the point (0, 3) into the vertex form equation. This gives you an equation with only 'a' as the unknown.",
      explanation: "Substitute (0, 3): 3 = a(0 - 2)² - 1 → 3 = 4a - 1 → 4 = 4a → a = 1."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A parabola has x-intercepts at 1 and 5 and passes through (0, -10). What is the equation?",
      choices: [
        { id: "A", text: "y = 2(x - 1)(x - 5)" },
        { id: "B", text: "y = -2(x - 1)(x - 5)" },
        { id: "C", text: "y = (x - 1)(x - 5)" },
        { id: "D", text: "y = -10(x - 1)(x - 5)" }
      ],
      correctAnswer: "B",
      hint: "Start with factored form y = a(x - 1)(x - 5) using the x-intercepts. Then substitute the point (0, -10) to find 'a'.",
      explanation: "Use factored form y = a(x - 1)(x - 5). At (0, -10): -10 = a(-1)(-5) = 5a → a = -2."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "What is the standard form of a quadratic with roots 2 and -3 that passes through (1, -8)?",
      choices: [
        { id: "A", text: "y = 2x² + 2x - 12" },
        { id: "B", text: "y = x² + x - 6" },
        { id: "C", text: "y = 2x² - 2x - 12" },
        { id: "D", text: "y = -2x² - 2x + 12" }
      ],
      correctAnswer: "A",
      hint: "Write in factored form using the roots: y = a(x - 2)(x + 3). Find 'a' using the given point, then expand to standard form.",
      explanation: "y = a(x - 2)(x + 3). At (1, -8): -8 = a(-1)(4) = -4a → a = 2. Expand: 2(x² + x - 6) = 2x² + 2x - 12."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Convert f(x) = -2(x - 1)² + 8 to standard form.",
      choices: [
        { id: "A", text: "f(x) = -2x² + 4x + 6" },
        { id: "B", text: "f(x) = -2x² - 4x + 6" },
        { id: "C", text: "f(x) = -2x² + 4x - 6" },
        { id: "D", text: "f(x) = 2x² - 4x + 6" }
      ],
      correctAnswer: "A",
      hint: "First expand (x - 1)², then distribute the -2 to all terms inside the parentheses, and finally add the 8.",
      explanation: "-2(x - 1)² + 8 = -2(x² - 2x + 1) + 8 = -2x² + 4x - 2 + 8 = -2x² + 4x + 6."
    }
  ]
};
