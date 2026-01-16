// Practice questions for Transformations module
// Questions are organized by SECTION (question type)

export const transformationsQuestions = {
  // Section: Fundamentals
  "Fundamentals": [
    {
      id: 1,
      question: "If f(x) = x², what transformation does f(x) + 3 represent?",
      choices: [
        { id: "A", text: "Shift 3 units right" },
        { id: "B", text: "Shift 3 units left" },
        { id: "C", text: "Shift 3 units up" },
        { id: "D", text: "Shift 3 units down" }
      ],
      correctAnswer: "C",
      explanation: "Adding a constant outside the function (f(x) + k) shifts the graph up by k units."
    },
    {
      id: 2,
      question: "If g(x) = √x, what transformation does g(x - 2) represent?",
      choices: [
        { id: "A", text: "Shift 2 units right" },
        { id: "B", text: "Shift 2 units left" },
        { id: "C", text: "Shift 2 units up" },
        { id: "D", text: "Shift 2 units down" }
      ],
      correctAnswer: "A",
      explanation: "Subtracting a constant inside the function (f(x - h)) shifts the graph right by h units."
    },
    {
      id: 3,
      question: "The graph of y = -f(x) is a reflection of y = f(x) across the:",
      choices: [
        { id: "A", text: "x-axis" },
        { id: "B", text: "y-axis" },
        { id: "C", text: "line y = x" },
        { id: "D", text: "origin" }
      ],
      correctAnswer: "A",
      explanation: "Negating the entire function (-f(x)) reflects the graph across the x-axis."
    },
    {
      id: 4,
      question: "If h(x) = |x|, what does 2h(x) do to the graph?",
      choices: [
        { id: "A", text: "Horizontal compression by 2" },
        { id: "B", text: "Horizontal stretch by 2" },
        { id: "C", text: "Vertical stretch by 2" },
        { id: "D", text: "Vertical compression by 2" }
      ],
      correctAnswer: "C",
      explanation: "Multiplying the function by a constant greater than 1 (af(x) where a > 1) stretches vertically."
    },
    {
      id: 5,
      question: "Which transformation does f(-x) represent?",
      choices: [
        { id: "A", text: "Reflection across x-axis" },
        { id: "B", text: "Reflection across y-axis" },
        { id: "C", text: "Shift left" },
        { id: "D", text: "Shift right" }
      ],
      correctAnswer: "B",
      explanation: "Negating the input (f(-x)) reflects the graph across the y-axis."
    }
  ],

  // Section: Transformations from Graph
  "Transformations from Graph": [
    {
      id: 1,
      question: "The vertex of f(x) = x² is at (0, 0). If a transformed parabola has vertex at (3, -2), which transformation was applied?",
      choices: [
        { id: "A", text: "f(x - 3) - 2" },
        { id: "B", text: "f(x + 3) - 2" },
        { id: "C", text: "f(x - 3) + 2" },
        { id: "D", text: "f(x + 3) + 2" }
      ],
      correctAnswer: "A",
      explanation: "Vertex moves from (0,0) to (3,-2): shift right 3 → (x - 3), shift down 2 → subtract 2. Result: f(x - 3) - 2."
    },
    {
      id: 2,
      question: "Graph of f(x) passes through (2, 5). After transformation g(x) = f(x) - 3, what point is on g(x)?",
      choices: [
        { id: "A", text: "(2, 8)" },
        { id: "B", text: "(2, 2)" },
        { id: "C", text: "(5, 5)" },
        { id: "D", text: "(-1, 5)" }
      ],
      correctAnswer: "B",
      explanation: "f(x) - 3 shifts down 3 units. Point (2, 5) becomes (2, 5-3) = (2, 2)."
    },
    {
      id: 3,
      question: "If f(x) has a maximum at (4, 6), where is the maximum of f(x - 1) + 2?",
      choices: [
        { id: "A", text: "(3, 8)" },
        { id: "B", text: "(5, 8)" },
        { id: "C", text: "(3, 4)" },
        { id: "D", text: "(5, 4)" }
      ],
      correctAnswer: "B",
      explanation: "f(x - 1) shifts right 1, +2 shifts up 2. Maximum moves from (4, 6) to (4+1, 6+2) = (5, 8)."
    },
    {
      id: 4,
      question: "The graph of y = f(x) is reflected across the x-axis and shifted up 4 units. Which equation represents this?",
      choices: [
        { id: "A", text: "y = -f(x) + 4" },
        { id: "B", text: "y = -f(x) - 4" },
        { id: "C", text: "y = f(-x) + 4" },
        { id: "D", text: "y = -f(x + 4)" }
      ],
      correctAnswer: "A",
      explanation: "Reflect across x-axis: -f(x). Shift up 4: add 4. Result: y = -f(x) + 4."
    },
    {
      id: 5,
      question: "If y = f(x) has y-intercept at (0, 3), what is the y-intercept of y = 2f(x)?",
      choices: [
        { id: "A", text: "(0, 3)" },
        { id: "B", text: "(0, 5)" },
        { id: "C", text: "(0, 6)" },
        { id: "D", text: "(2, 3)" }
      ],
      correctAnswer: "C",
      explanation: "At x = 0: y = 2f(0) = 2(3) = 6. The y-intercept is (0, 6)."
    }
  ],

  // Section: Transformations from Table
  "Transformations from Table": [
    {
      id: 1,
      question: "If f(2) = 7, what is g(2) if g(x) = f(x) + 5?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "7" },
        { id: "C", text: "12" },
        { id: "D", text: "35" }
      ],
      correctAnswer: "C",
      explanation: "g(2) = f(2) + 5 = 7 + 5 = 12."
    },
    {
      id: 2,
      question: "If f(3) = 8, what is h(5) if h(x) = f(x - 2)?",
      choices: [
        { id: "A", text: "6" },
        { id: "B", text: "8" },
        { id: "C", text: "10" },
        { id: "D", text: "Cannot determine" }
      ],
      correctAnswer: "B",
      explanation: "h(5) = f(5 - 2) = f(3) = 8."
    },
    {
      id: 3,
      question: "Given the table: f(1) = 4, f(2) = 7, f(3) = 10. If g(x) = -f(x), what is g(2)?",
      choices: [
        { id: "A", text: "-7" },
        { id: "B", text: "7" },
        { id: "C", text: "-2" },
        { id: "D", text: "14" }
      ],
      correctAnswer: "A",
      explanation: "g(2) = -f(2) = -7."
    },
    {
      id: 4,
      question: "If f(4) = 10 and g(x) = f(x + 3) - 2, what is g(1)?",
      choices: [
        { id: "A", text: "5" },
        { id: "B", text: "8" },
        { id: "C", text: "11" },
        { id: "D", text: "15" }
      ],
      correctAnswer: "B",
      explanation: "g(1) = f(1 + 3) - 2 = f(4) - 2 = 10 - 2 = 8."
    },
    {
      id: 5,
      question: "Table shows: x = [0, 1, 2], f(x) = [5, 8, 11]. For g(x) = 2f(x), what is g(1)?",
      choices: [
        { id: "A", text: "8" },
        { id: "B", text: "10" },
        { id: "C", text: "16" },
        { id: "D", text: "22" }
      ],
      correctAnswer: "C",
      explanation: "g(1) = 2f(1) = 2(8) = 16."
    }
  ],

  // Section: Transformations from Expression
  "Transformations from Expression": [
    {
      id: 1,
      question: "If f(x) = x², what is f(x + 3)?",
      choices: [
        { id: "A", text: "x² + 3" },
        { id: "B", text: "x² + 6x + 9" },
        { id: "C", text: "(x + 3)²" },
        { id: "D", text: "Both B and C" }
      ],
      correctAnswer: "D",
      explanation: "f(x + 3) = (x + 3)² which expands to x² + 6x + 9. Both representations are correct."
    },
    {
      id: 2,
      question: "If f(x) = 2x - 1, what is -f(x)?",
      choices: [
        { id: "A", text: "-2x - 1" },
        { id: "B", text: "-2x + 1" },
        { id: "C", text: "2x + 1" },
        { id: "D", text: "-2x" }
      ],
      correctAnswer: "B",
      explanation: "-f(x) = -(2x - 1) = -2x + 1."
    },
    {
      id: 3,
      question: "If g(x) = |x|, what is g(x - 4) + 2?",
      choices: [
        { id: "A", text: "|x - 4| + 2" },
        { id: "B", text: "|x| - 2" },
        { id: "C", text: "|x + 4| + 2" },
        { id: "D", text: "|x - 2| + 4" }
      ],
      correctAnswer: "A",
      explanation: "Replace x with (x - 4) in |x|, then add 2: g(x - 4) + 2 = |x - 4| + 2."
    },
    {
      id: 4,
      question: "If f(x) = x³, what is f(-x)?",
      choices: [
        { id: "A", text: "x³" },
        { id: "B", text: "-x³" },
        { id: "C", text: "(-x)³ = -x³" },
        { id: "D", text: "Both B and C" }
      ],
      correctAnswer: "D",
      explanation: "f(-x) = (-x)³ = -x³. Both expressions represent the same thing."
    },
    {
      id: 5,
      question: "If h(x) = √x, what is 3h(x) - 1?",
      choices: [
        { id: "A", text: "3√x - 1" },
        { id: "B", text: "√(3x - 1)" },
        { id: "C", text: "√(3x) - 1" },
        { id: "D", text: "3(√x - 1)" }
      ],
      correctAnswer: "A",
      explanation: "3h(x) - 1 = 3(√x) - 1 = 3√x - 1."
    }
  ],

  // Section: Difficult Transformations
  "Difficult Transformations": [
    {
      id: 1,
      question: "If f(x) = x², describe the transformation to get y = (1/2)f(x - 1) + 3.",
      choices: [
        { id: "A", text: "Shift right 1, vertical compression by 1/2, shift up 3" },
        { id: "B", text: "Shift left 1, vertical stretch by 2, shift up 3" },
        { id: "C", text: "Shift right 1, vertical stretch by 2, shift down 3" },
        { id: "D", text: "Shift left 1, vertical compression by 1/2, shift down 3" }
      ],
      correctAnswer: "A",
      explanation: "(x - 1) shifts right 1, multiplying by 1/2 compresses vertically, +3 shifts up 3."
    },
    {
      id: 2,
      question: "The graph of y = f(x) is transformed to y = -2f(x + 1) - 3. If f(0) = 4, what is the y-coordinate when x = -1?",
      choices: [
        { id: "A", text: "-11" },
        { id: "B", text: "5" },
        { id: "C", text: "-5" },
        { id: "D", text: "11" }
      ],
      correctAnswer: "A",
      explanation: "At x = -1: y = -2f(-1 + 1) - 3 = -2f(0) - 3 = -2(4) - 3 = -8 - 3 = -11."
    },
    {
      id: 3,
      question: "If f(x) has domain [0, 4], what is the domain of g(x) = f(2x)?",
      choices: [
        { id: "A", text: "[0, 8]" },
        { id: "B", text: "[0, 2]" },
        { id: "C", text: "[0, 4]" },
        { id: "D", text: "[-2, 2]" }
      ],
      correctAnswer: "B",
      explanation: "For f(2x) to be defined, need 0 ≤ 2x ≤ 4, so 0 ≤ x ≤ 2. Domain is [0, 2]."
    },
    {
      id: 4,
      question: "If f(x) has range [-3, 5], what is the range of y = 2f(x) + 1?",
      choices: [
        { id: "A", text: "[-5, 11]" },
        { id: "B", text: "[-6, 10]" },
        { id: "C", text: "[-2, 6]" },
        { id: "D", text: "[-5, 9]" }
      ],
      correctAnswer: "A",
      explanation: "Multiply range by 2: [-6, 10]. Add 1: [-5, 11]."
    },
    {
      id: 5,
      question: "If the point (2, 5) is on y = f(x), which point is on y = f(3x) + 2?",
      choices: [
        { id: "A", text: "(6, 7)" },
        { id: "B", text: "(2/3, 7)" },
        { id: "C", text: "(2, 17)" },
        { id: "D", text: "(6, 5)" }
      ],
      correctAnswer: "B",
      explanation: "For y = f(3x) + 2, need 3x = 2 (to use f(2) = 5), so x = 2/3. Then y = 5 + 2 = 7. Point: (2/3, 7)."
    }
  ]
};
