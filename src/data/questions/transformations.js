// Practice questions for Transformations module
// Questions are organized by SECTION (question type)

export const transformationsQuestions = {
  // Section: Fundamentals
  "Fundamentals": [
    {
      id: 1,
      difficulty: "easy",
      question: "If f(x) = x², what transformation does f(x) + 3 represent?",
      choices: [
        { id: "A", text: "Shift 3 units right" },
        { id: "B", text: "Shift 3 units left" },
        { id: "C", text: "Shift 3 units up" },
        { id: "D", text: "Shift 3 units down" }
      ],
      correctAnswer: "C",
      hint: "When a constant is added outside the function, it affects the y-values (outputs). Think about what happens to every point's height.",
      explanation: "Adding a constant outside the function (f(x) + k) shifts the graph up by k units."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If g(x) = √x, what transformation does g(x - 2) represent?",
      choices: [
        { id: "A", text: "Shift 2 units right" },
        { id: "B", text: "Shift 2 units left" },
        { id: "C", text: "Shift 2 units up" },
        { id: "D", text: "Shift 2 units down" }
      ],
      correctAnswer: "A",
      hint: "Changes inside the parentheses affect horizontal movement, and they work opposite to what you might expect. If you subtract, which way does the graph move?",
      explanation: "Subtracting a constant inside the function (f(x - h)) shifts the graph right by h units."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "The graph of y = -f(x) is a reflection of y = f(x) across the:",
      choices: [
        { id: "A", text: "x-axis" },
        { id: "B", text: "y-axis" },
        { id: "C", text: "line y = x" },
        { id: "D", text: "origin" }
      ],
      correctAnswer: "A",
      hint: "The negative sign is outside the function, so it affects the outputs (y-values). Negating all y-values flips the graph over which axis?",
      explanation: "Negating the entire function (-f(x)) reflects the graph across the x-axis."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "If h(x) = |x|, what does 2h(x) do to the graph?",
      choices: [
        { id: "A", text: "Horizontal compression by 2" },
        { id: "B", text: "Horizontal stretch by 2" },
        { id: "C", text: "Vertical stretch by 2" },
        { id: "D", text: "Vertical compression by 2" }
      ],
      correctAnswer: "C",
      hint: "Multiplying outside the function affects the y-values. When you multiply every output by 2, does the graph get taller or shorter?",
      explanation: "Multiplying the function by a constant greater than 1 (af(x) where a > 1) stretches vertically."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Which transformation does f(-x) represent?",
      choices: [
        { id: "A", text: "Reflection across x-axis" },
        { id: "B", text: "Reflection across y-axis" },
        { id: "C", text: "Shift left" },
        { id: "D", text: "Shift right" }
      ],
      correctAnswer: "B",
      hint: "The negative sign is inside the function, affecting the inputs (x-values). Negating x-values swaps left and right sides of the graph.",
      explanation: "Negating the input (f(-x)) reflects the graph across the y-axis."
    }
  ],

  // Section: Transformations from Graph
  "Transformations from Graph": [
    {
      id: 1,
      difficulty: "easy",
      question: "The vertex of f(x) = x² is at (0, 0). If a transformed parabola has vertex at (3, -2), which transformation was applied?",
      choices: [
        { id: "A", text: "f(x - 3) - 2" },
        { id: "B", text: "f(x + 3) - 2" },
        { id: "C", text: "f(x - 3) + 2" },
        { id: "D", text: "f(x + 3) + 2" }
      ],
      correctAnswer: "A",
      hint: "Track each coordinate separately. To move the x-coordinate right, you subtract inside the parentheses. To move the y-coordinate down, you subtract outside.",
      explanation: "Vertex moves from (0,0) to (3,-2): shift right 3 → (x - 3), shift down 2 → subtract 2. Result: f(x - 3) - 2."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Graph of f(x) passes through (2, 5). After transformation g(x) = f(x) - 3, what point is on g(x)?",
      choices: [
        { id: "A", text: "(2, 8)" },
        { id: "B", text: "(2, 2)" },
        { id: "C", text: "(5, 5)" },
        { id: "D", text: "(-1, 5)" }
      ],
      correctAnswer: "B",
      hint: "Subtracting 3 outside the function only changes the y-values. The x-coordinate stays the same.",
      explanation: "f(x) - 3 shifts down 3 units. Point (2, 5) becomes (2, 5-3) = (2, 2)."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "If f(x) has a maximum at (4, 6), where is the maximum of f(x - 1) + 2?",
      choices: [
        { id: "A", text: "(3, 8)" },
        { id: "B", text: "(5, 8)" },
        { id: "C", text: "(3, 4)" },
        { id: "D", text: "(5, 4)" }
      ],
      correctAnswer: "B",
      hint: "Apply each transformation step by step: (x - 1) shifts horizontally, and +2 shifts vertically. Remember that horizontal shifts work opposite to the sign.",
      explanation: "f(x - 1) shifts right 1, +2 shifts up 2. Maximum moves from (4, 6) to (4+1, 6+2) = (5, 8)."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The graph of y = f(x) is reflected across the x-axis and shifted up 4 units. Which equation represents this?",
      choices: [
        { id: "A", text: "y = -f(x) + 4" },
        { id: "B", text: "y = -f(x) - 4" },
        { id: "C", text: "y = f(-x) + 4" },
        { id: "D", text: "y = -f(x + 4)" }
      ],
      correctAnswer: "A",
      hint: "Build the transformation step by step. First apply the reflection (which involves a negative sign), then the vertical shift (which involves adding or subtracting).",
      explanation: "Reflect across x-axis: -f(x). Shift up 4: add 4. Result: y = -f(x) + 4."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "If y = f(x) has y-intercept at (0, 3), what is the y-intercept of y = 2f(x)?",
      choices: [
        { id: "A", text: "(0, 3)" },
        { id: "B", text: "(0, 5)" },
        { id: "C", text: "(0, 6)" },
        { id: "D", text: "(2, 3)" }
      ],
      correctAnswer: "C",
      hint: "The y-intercept occurs when x = 0. Multiply the original y-value by 2 to find the new y-intercept.",
      explanation: "At x = 0: y = 2f(0) = 2(3) = 6. The y-intercept is (0, 6)."
    }
  ],

  // Section: Transformations from Table
  "Transformations from Table": [
    {
      id: 1,
      difficulty: "easy",
      question: "If f(2) = 7, what is g(2) if g(x) = f(x) + 5?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "7" },
        { id: "C", text: "12" },
        { id: "D", text: "35" }
      ],
      correctAnswer: "C",
      hint: "Substitute x = 2 into g(x) = f(x) + 5. You already know what f(2) equals.",
      explanation: "g(2) = f(2) + 5 = 7 + 5 = 12."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If f(3) = 8, what is h(5) if h(x) = f(x - 2)?",
      choices: [
        { id: "A", text: "6" },
        { id: "B", text: "8" },
        { id: "C", text: "10" },
        { id: "D", text: "Cannot determine" }
      ],
      correctAnswer: "B",
      hint: "First calculate what goes into f: when x = 5, what is (x - 2)? Does that value match something you know about f?",
      explanation: "h(5) = f(5 - 2) = f(3) = 8."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "Given the table: f(1) = 4, f(2) = 7, f(3) = 10. If g(x) = -f(x), what is g(2)?",
      choices: [
        { id: "A", text: "-7" },
        { id: "B", text: "7" },
        { id: "C", text: "-2" },
        { id: "D", text: "14" }
      ],
      correctAnswer: "A",
      hint: "Find f(2) from the table first, then apply the negative sign to that result.",
      explanation: "g(2) = -f(2) = -7."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "If f(4) = 10 and g(x) = f(x + 3) - 2, what is g(1)?",
      choices: [
        { id: "A", text: "5" },
        { id: "B", text: "8" },
        { id: "C", text: "11" },
        { id: "D", text: "15" }
      ],
      correctAnswer: "B",
      hint: "Work from the inside out: when x = 1, calculate (x + 3) first to see which f-value you need, then subtract 2 from the result.",
      explanation: "g(1) = f(1 + 3) - 2 = f(4) - 2 = 10 - 2 = 8."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Table shows: x = [0, 1, 2], f(x) = [5, 8, 11]. For g(x) = 2f(x), what is g(1)?",
      choices: [
        { id: "A", text: "8" },
        { id: "B", text: "10" },
        { id: "C", text: "16" },
        { id: "D", text: "22" }
      ],
      correctAnswer: "C",
      hint: "Look up f(1) in the table, then multiply that value by 2.",
      explanation: "g(1) = 2f(1) = 2(8) = 16."
    }
  ],

  // Section: Transformations from Expression
  "Transformations from Expression": [
    {
      id: 1,
      difficulty: "easy",
      question: "If f(x) = x², what is f(x + 3)?",
      choices: [
        { id: "A", text: "x² + 3" },
        { id: "B", text: "x² + 6x + 9" },
        { id: "C", text: "(x + 3)²" },
        { id: "D", text: "Both B and C" }
      ],
      correctAnswer: "D",
      hint: "Replace every x in f(x) = x² with (x + 3). Then consider whether the factored form and expanded form are equivalent.",
      explanation: "f(x + 3) = (x + 3)² which expands to x² + 6x + 9. Both representations are correct."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If f(x) = 2x - 1, what is -f(x)?",
      choices: [
        { id: "A", text: "-2x - 1" },
        { id: "B", text: "-2x + 1" },
        { id: "C", text: "2x + 1" },
        { id: "D", text: "-2x" }
      ],
      correctAnswer: "B",
      hint: "Multiply the entire expression (2x - 1) by -1. Remember to distribute the negative to both terms.",
      explanation: "-f(x) = -(2x - 1) = -2x + 1."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "If g(x) = |x|, what is g(x - 4) + 2?",
      choices: [
        { id: "A", text: "|x - 4| + 2" },
        { id: "B", text: "|x| - 2" },
        { id: "C", text: "|x + 4| + 2" },
        { id: "D", text: "|x - 2| + 4" }
      ],
      correctAnswer: "A",
      hint: "Replace x with (x - 4) inside the absolute value, then add 2 to the entire expression.",
      explanation: "Replace x with (x - 4) in |x|, then add 2: g(x - 4) + 2 = |x - 4| + 2."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "If f(x) = x³, what is f(-x)?",
      choices: [
        { id: "A", text: "x³" },
        { id: "B", text: "-x³" },
        { id: "C", text: "(-x)³ = -x³" },
        { id: "D", text: "Both B and C" }
      ],
      correctAnswer: "D",
      hint: "Replace x with (-x) and simplify. Remember that a negative number raised to an odd power stays negative.",
      explanation: "f(-x) = (-x)³ = -x³. Both expressions represent the same thing."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "If h(x) = √x, what is 3h(x) - 1?",
      choices: [
        { id: "A", text: "3√x - 1" },
        { id: "B", text: "√(3x - 1)" },
        { id: "C", text: "√(3x) - 1" },
        { id: "D", text: "3(√x - 1)" }
      ],
      correctAnswer: "A",
      hint: "The 3 multiplies the output of h(x), not the input. Write out h(x) first, then multiply by 3 and subtract 1.",
      explanation: "3h(x) - 1 = 3(√x) - 1 = 3√x - 1."
    }
  ],

  // Section: Difficult Transformations
  "Difficult Transformations": [
    {
      id: 1,
      difficulty: "easy",
      question: "If f(x) = x², describe the transformation to get y = (1/2)f(x - 1) + 3.",
      choices: [
        { id: "A", text: "Shift right 1, vertical compression by 1/2, shift up 3" },
        { id: "B", text: "Shift left 1, vertical stretch by 2, shift up 3" },
        { id: "C", text: "Shift right 1, vertical stretch by 2, shift down 3" },
        { id: "D", text: "Shift left 1, vertical compression by 1/2, shift down 3" }
      ],
      correctAnswer: "A",
      hint: "Break down each part: (x - 1) affects horizontal position, 1/2 affects the vertical scale, and +3 affects vertical position. Multiplying by a fraction less than 1 compresses.",
      explanation: "(x - 1) shifts right 1, multiplying by 1/2 compresses vertically, +3 shifts up 3."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The graph of y = f(x) is transformed to y = -2f(x + 1) - 3. If f(0) = 4, what is the y-coordinate when x = -1?",
      choices: [
        { id: "A", text: "-11" },
        { id: "B", text: "5" },
        { id: "C", text: "-5" },
        { id: "D", text: "11" }
      ],
      correctAnswer: "A",
      hint: "Substitute x = -1 into the transformed equation. Notice that (x + 1) becomes 0, allowing you to use the given value f(0) = 4.",
      explanation: "At x = -1: y = -2f(-1 + 1) - 3 = -2f(0) - 3 = -2(4) - 3 = -8 - 3 = -11."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "If f(x) has domain [0, 4], what is the domain of g(x) = f(2x)?",
      choices: [
        { id: "A", text: "[0, 8]" },
        { id: "B", text: "[0, 2]" },
        { id: "C", text: "[0, 4]" },
        { id: "D", text: "[-2, 2]" }
      ],
      correctAnswer: "B",
      hint: "The input to f must stay in [0, 4]. Set up an inequality: 0 ≤ 2x ≤ 4, then solve for x.",
      explanation: "For f(2x) to be defined, need 0 ≤ 2x ≤ 4, so 0 ≤ x ≤ 2. Domain is [0, 2]."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "If f(x) has range [-3, 5], what is the range of y = 2f(x) + 1?",
      choices: [
        { id: "A", text: "[-5, 11]" },
        { id: "B", text: "[-6, 10]" },
        { id: "C", text: "[-2, 6]" },
        { id: "D", text: "[-5, 9]" }
      ],
      correctAnswer: "A",
      hint: "Apply the transformations to the range endpoints. First multiply both -3 and 5 by 2, then add 1 to each result.",
      explanation: "Multiply range by 2: [-6, 10]. Add 1: [-5, 11]."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "If the point (2, 5) is on y = f(x), which point is on y = f(3x) + 2?",
      choices: [
        { id: "A", text: "(6, 7)" },
        { id: "B", text: "(2/3, 7)" },
        { id: "C", text: "(2, 17)" },
        { id: "D", text: "(6, 5)" }
      ],
      correctAnswer: "B",
      hint: "You need 3x = 2 (so that f(3x) = f(2) = 5). Solve for x, then add 2 to the y-coordinate.",
      explanation: "For y = f(3x) + 2, need 3x = 2 (to use f(2) = 5), so x = 2/3. Then y = 5 + 2 = 7. Point: (2/3, 7)."
    }
  ]
};
