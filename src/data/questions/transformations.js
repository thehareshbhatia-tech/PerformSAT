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
      explanation: "Adding a constant outside the function (f(x) + k) shifts the graph up by k units.",
      skills: ['function-transformations']
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
      explanation: "Subtracting a constant inside the function (f(x - h)) shifts the graph right by h units.",
      skills: ['function-transformations']
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
      explanation: "Negating the entire function (-f(x)) reflects the graph across the x-axis.",
      skills: ['function-transformations']
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
      explanation: "Multiplying the function by a constant greater than 1 (af(x) where a > 1) stretches vertically.",
      skills: ['function-transformations']
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
      explanation: "Negating the input (f(-x)) reflects the graph across the y-axis.",
      skills: ['function-transformations']
    },
    {
      id: 6,
      difficulty: "easy",
      question: "If f(x) = 3x + 2, what transformation does f(x) - 7 represent?",
      choices: [
        { id: "A", text: "Shift 7 units right" },
        { id: "B", text: "Shift 7 units left" },
        { id: "C", text: "Shift 7 units up" },
        { id: "D", text: "Shift 7 units down" }
      ],
      correctAnswer: "D",
      hint: "When a constant is subtracted outside the function, it affects the y-values (outputs). Subtracting makes outputs smaller.",
      explanation: "Subtracting a constant outside the function (f(x) - k) shifts the graph down by k units. So f(x) - 7 shifts down 7.",
      skills: ['function-transformations']
    },
    {
      id: 7,
      difficulty: "easy",
      question: "If g(x) = |x|, what transformation does g(x + 5) represent?",
      choices: [
        { id: "A", text: "Shift 5 units right" },
        { id: "B", text: "Shift 5 units left" },
        { id: "C", text: "Shift 5 units up" },
        { id: "D", text: "Shift 5 units down" }
      ],
      correctAnswer: "B",
      hint: "Changes inside the parentheses affect horizontal movement, and they work opposite to what you expect. Adding shifts which way?",
      explanation: "Adding a constant inside the function (f(x + h)) shifts the graph left by h units. This is counterintuitive - the shift is opposite to the sign!",
      skills: ['function-transformations']
    },
    {
      id: 8,
      difficulty: "medium",
      question: "The function f(x) = x² has its vertex at (0, 0). What is the vertex of f(x - 4) + 6?",
      choices: [
        { id: "A", text: "(4, 6)" },
        { id: "B", text: "(-4, 6)" },
        { id: "C", text: "(4, -6)" },
        { id: "D", text: "(-4, -6)" }
      ],
      correctAnswer: "A",
      hint: "Apply both transformations: (x - 4) affects horizontal position (remember the opposite rule), and +6 affects vertical position.",
      explanation: "(x - 4) shifts right 4 units, and +6 shifts up 6 units. Vertex moves from (0, 0) to (4, 6).",
      skills: ['function-transformations']
    },
    {
      id: 9,
      difficulty: "medium",
      question: "If h(x) = √x, what does the transformation below do to the graph?",
      questionFormula: { fraction: { numerator: "1", denominator: "3" }, textAfter: "h(x)" },
      choices: [
        { id: "A", text: "Horizontal compression by 3" },
        { id: "B", text: "Horizontal stretch by 3" },
        { id: "C", text: "Vertical stretch by 3" },
        { id: "D", text: "Vertical compression by 3" }
      ],
      correctAnswer: "D",
      hint: "Multiplying outside the function affects the y-values. When you multiply every output by 1/3, does the graph get taller or shorter?",
      explanation: "Multiplying the function by a constant between 0 and 1 (af(x) where 0 < a < 1) compresses the graph vertically. Each y-value becomes 1/3 of its original value.",
      skills: ['function-transformations']
    },
    {
      id: 10,
      difficulty: "hard",
      question: "Which expression represents a reflection across the x-axis AND a shift up 4 units?",
      choices: [
        { id: "A", text: "-f(x) + 4" },
        { id: "B", text: "-f(x) - 4" },
        { id: "C", text: "f(-x) + 4" },
        { id: "D", text: "-f(x + 4)" }
      ],
      correctAnswer: "A",
      hint: "Reflection across x-axis means negating the output (-f(x)). Shifting up means adding to the result. Combine these in the right order.",
      explanation: "Reflection across x-axis: -f(x). Shift up 4: add 4 to the result. Combined: -f(x) + 4.",
      skills: ['function-transformations']
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
      explanation: "Vertex moves from (0,0) to (3,-2): shift right 3 → (x - 3), shift down 2 → subtract 2. Result: f(x - 3) - 2.",
      skills: ['function-transformations']
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
      explanation: "f(x) - 3 shifts down 3 units. Point (2, 5) becomes (2, 5-3) = (2, 2).",
      skills: ['function-transformations']
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
      explanation: "f(x - 1) shifts right 1, +2 shifts up 2. Maximum moves from (4, 6) to (4+1, 6+2) = (5, 8).",
      skills: ['function-transformations']
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
      explanation: "Reflect across x-axis: -f(x). Shift up 4: add 4. Result: y = -f(x) + 4.",
      skills: ['function-transformations']
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
      explanation: "At x = 0: y = 2f(0) = 2(3) = 6. The y-intercept is (0, 6).",
      skills: ['function-transformations']
    },
    {
      id: 6,
      difficulty: "easy",
      question: "The graph of f(x) = x² has vertex at (0, 0). A transformed graph has vertex at (-2, 0). Which transformation was applied?",
      choices: [
        { id: "A", text: "f(x - 2)" },
        { id: "B", text: "f(x + 2)" },
        { id: "C", text: "f(x) - 2" },
        { id: "D", text: "f(x) + 2" }
      ],
      correctAnswer: "B",
      hint: "The vertex moved left 2 units (x changed from 0 to -2, y stayed at 0). Which transformation shifts the graph left?",
      explanation: "Moving left 2 uses f(x + 2). Remember: adding inside shifts LEFT (opposite direction). The vertex moves from (0,0) to (-2, 0).",
      skills: ['function-transformations']
    },
    {
      id: 7,
      difficulty: "easy",
      question: "Graph of f(x) passes through (0, 4). After transformation g(x) = f(x - 3), which point is on g(x)?",
      choices: [
        { id: "A", text: "(3, 4)" },
        { id: "B", text: "(-3, 4)" },
        { id: "C", text: "(0, 1)" },
        { id: "D", text: "(0, 7)" }
      ],
      correctAnswer: "A",
      hint: "f(x - 3) shifts the graph right 3 units. The point (0, 4) moves right, so x increases while y stays the same.",
      explanation: "f(x - 3) shifts right 3 units. Point (0, 4) becomes (0+3, 4) = (3, 4).",
      skills: ['function-transformations']
    },
    {
      id: 8,
      difficulty: "medium",
      question: "The minimum of f(x) is at (1, -3). Where is the minimum of g(x) = f(x + 4) - 1?",
      choices: [
        { id: "A", text: "(-3, -4)" },
        { id: "B", text: "(5, -4)" },
        { id: "C", text: "(-3, -2)" },
        { id: "D", text: "(5, -2)" }
      ],
      correctAnswer: "A",
      hint: "Apply each transformation: (x + 4) shifts left 4 units, -1 shifts down 1 unit. Track the minimum point through both shifts.",
      explanation: "f(x + 4) shifts left 4: x goes from 1 to 1-4 = -3. Then -1 shifts down 1: y goes from -3 to -4. Minimum is at (-3, -4).",
      skills: ['function-transformations']
    },
    {
      id: 9,
      difficulty: "medium",
      question: "The graph of y = f(x) is reflected across the y-axis and then shifted right 2 units. Which equation represents this?",
      choices: [
        { id: "A", text: "y = f(-x - 2)" },
        { id: "B", text: "y = f(-x + 2)" },
        { id: "C", text: "y = f(-(x - 2))" },
        { id: "D", text: "y = -f(x - 2)" }
      ],
      correctAnswer: "C",
      hint: "Reflect across y-axis first: f(-x). Then shift right 2: replace x with (x - 2). Be careful about where the negative sign goes!",
      explanation: "Reflect across y-axis: f(-x). Shift right 2: replace x with (x-2) giving f(-(x-2)). This simplifies to f(-x + 2) or f(2 - x).",
      skills: ['function-transformations']
    },
    {
      id: 10,
      difficulty: "hard",
      question: "If the x-intercepts of f(x) are at x = -1 and x = 5, what are the x-intercepts of f(x - 3)?",
      choices: [
        { id: "A", text: "x = -4 and x = 2" },
        { id: "B", text: "x = 2 and x = 8" },
        { id: "C", text: "x = -1 and x = 5" },
        { id: "D", text: "x = -4 and x = 8" }
      ],
      correctAnswer: "B",
      hint: "f(x - 3) shifts the entire graph right 3 units. Each x-intercept moves right by 3.",
      explanation: "f(x - 3) shifts right 3 units. X-intercepts shift from -1 to 2 and from 5 to 8. New x-intercepts: x = 2 and x = 8.",
      skills: ['function-transformations']
    },
    {
      id: 11,
      difficulty: "hard",
      question: "If y = f(x) has x-intercept at (4, 0), what is the x-intercept of y = -f(x) + 5?",
      choices: [
        { id: "A", text: "(4, 0)" },
        { id: "B", text: "(4, 5)" },
        { id: "C", text: "(-4, 0)" },
        { id: "D", text: "Cannot be determined without more information" }
      ],
      correctAnswer: "D",
      hint: "At the original x-intercept (4, 0), the transformed function gives -f(4) + 5 = -0 + 5 = 5. Is this a new x-intercept?",
      explanation: "At x = 4: y = -f(4) + 5 = -0 + 5 = 5, so (4, 5) is on the graph but is NOT an x-intercept. To find where y = 0, we need -f(x) + 5 = 0, so f(x) = 5. We don't know where f(x) = 5 without more info.",
      skills: ['function-transformations']
    },
    {
      id: 12,
      difficulty: "hard",
      question: "The vertex of a parabola f(x) is at (2, -4). After applying the transformation g(x) = 3f(x - 1) + 2, where is the new vertex?",
      choices: [
        { id: "A", text: "(3, -10)" },
        { id: "B", text: "(1, -10)" },
        { id: "C", text: "(3, -14)" },
        { id: "D", text: "(3, 2)" }
      ],
      correctAnswer: "A",
      hint: "Break it down: (x - 1) shifts right 1, multiplying by 3 stretches vertically (affects y-value at vertex), and +2 shifts up.",
      explanation: "(x - 1) shifts right 1: vertex x goes from 2 to 3. Multiply by 3: y-value -4 becomes 3(-4) = -12. Add 2: -12 + 2 = -10. New vertex: (3, -10).",
      skills: ['function-transformations']
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
      explanation: "g(2) = f(2) + 5 = 7 + 5 = 12.",
      skills: ['function-transformations']
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
      explanation: "h(5) = f(5 - 2) = f(3) = 8.",
      skills: ['function-transformations']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "Given the table: f(1) = 4, f(2) = 7, f(3) = 10. If g(x) = -f(x), what is g(2)?",
      choices: [
        { id: "A", text: "−7" },
        { id: "B", text: "7" },
        { id: "C", text: "−2" },
        { id: "D", text: "14" }
      ],
      correctAnswer: "A",
      hint: "Find f(2) from the table first, then apply the negative sign to that result.",
      explanation: "g(2) = -f(2) = -7.",
      skills: ['function-transformations']
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
      explanation: "g(1) = f(1 + 3) - 2 = f(4) - 2 = 10 - 2 = 8.",
      skills: ['function-transformations']
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
      explanation: "g(1) = 2f(1) = 2(8) = 16.",
      skills: ['function-transformations']
    },
    {
      id: 6,
      difficulty: "easy",
      question: "If f(0) = 5, what is g(0) if g(x) = f(x) - 3?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "5" },
        { id: "C", text: "8" },
        { id: "D", text: "−3" }
      ],
      correctAnswer: "A",
      hint: "Substitute x = 0 into g(x) = f(x) - 3. Use the given value of f(0).",
      explanation: "g(0) = f(0) - 3 = 5 - 3 = 2.",
      skills: ['function-transformations']
    },
    {
      id: 7,
      difficulty: "easy",
      question: "If f(4) = 12, what is h(6) if h(x) = f(x - 2)?",
      choices: [
        { id: "A", text: "10" },
        { id: "B", text: "12" },
        { id: "C", text: "14" },
        { id: "D", text: "Cannot determine" }
      ],
      correctAnswer: "B",
      hint: "When x = 6, what is (x - 2)? Find f of that value.",
      explanation: "h(6) = f(6 - 2) = f(4) = 12.",
      skills: ['function-transformations']
    },
    {
      id: 8,
      difficulty: "medium",
      question: "Given the table: f(0) = 2, f(1) = 5, f(2) = 8. If g(x) = f(x - 1), what is g(2)?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "5" },
        { id: "C", text: "8" },
        { id: "D", text: "Cannot determine" }
      ],
      correctAnswer: "B",
      hint: "g(2) = f(2 - 1) = f(1). Look up f(1) in the table.",
      explanation: "g(2) = f(2 - 1) = f(1) = 5.",
      skills: ['function-transformations']
    },
    {
      id: 9,
      difficulty: "medium",
      question: "Given: f(1) = 3, f(2) = 7, f(3) = 11. If g(x) = f(x) + 4, what is g(2)?",
      choices: [
        { id: "A", text: "7" },
        { id: "B", text: "11" },
        { id: "C", text: "15" },
        { id: "D", text: "6" }
      ],
      correctAnswer: "B",
      hint: "g(2) = f(2) + 4. Find f(2) from the given information, then add 4.",
      explanation: "g(2) = f(2) + 4 = 7 + 4 = 11.",
      skills: ['function-transformations']
    },
    {
      id: 10,
      difficulty: "medium",
      question: "If f(5) = 20 and g(x) = f(x + 2) - 6, what is g(3)?",
      choices: [
        { id: "A", text: "14" },
        { id: "B", text: "16" },
        { id: "C", text: "20" },
        { id: "D", text: "26" }
      ],
      correctAnswer: "A",
      hint: "First find what goes into f: when x = 3, calculate (x + 2). Then subtract 6 from the f-value.",
      explanation: "g(3) = f(3 + 2) - 6 = f(5) - 6 = 20 - 6 = 14.",
      skills: ['function-transformations']
    },
    {
      id: 11,
      difficulty: "medium",
      question: "Table shows: x = [1, 2, 3, 4], f(x) = [6, 9, 12, 15]. For g(x) = f(x + 1), what is g(1)?",
      choices: [
        { id: "A", text: "6" },
        { id: "B", text: "9" },
        { id: "C", text: "12" },
        { id: "D", text: "3" }
      ],
      correctAnswer: "B",
      hint: "g(1) = f(1 + 1) = f(2). Look up f(2) in the table.",
      explanation: "g(1) = f(1 + 1) = f(2) = 9.",
      skills: ['function-transformations']
    },
    {
      id: 12,
      difficulty: "hard",
      question: "Given: f(2) = 8, f(4) = 14. If g(x) = f(2x), what is g(1)?",
      choices: [
        { id: "A", text: "4" },
        { id: "B", text: "8" },
        { id: "C", text: "14" },
        { id: "D", text: "Cannot determine" }
      ],
      correctAnswer: "B",
      hint: "g(1) = f(2 × 1) = f(2). You're given f(2) in the problem.",
      explanation: "g(1) = f(2 × 1) = f(2) = 8.",
      skills: ['function-transformations']
    },
    {
      id: 13,
      difficulty: "hard",
      question: "Table: x = [0, 2, 4, 6], f(x) = [1, 5, 9, 13]. If h(x) = 3f(x) - 2, what is h(4)?",
      choices: [
        { id: "A", text: "7" },
        { id: "B", text: "25" },
        { id: "C", text: "27" },
        { id: "D", text: "29" }
      ],
      correctAnswer: "B",
      hint: "First find f(4) from the table, then apply the transformation: multiply by 3, then subtract 2.",
      explanation: "f(4) = 9 from the table. h(4) = 3f(4) - 2 = 3(9) - 2 = 27 - 2 = 25.",
      skills: ['function-transformations']
    },
    {
      id: 14,
      difficulty: "hard",
      question: "If f(3) = 10 and g(x) = f(x - 2) + f(x + 2), and we also know f(1) = 4 and f(5) = 16, what is g(3)?",
      choices: [
        { id: "A", text: "14" },
        { id: "B", text: "20" },
        { id: "C", text: "26" },
        { id: "D", text: "30" }
      ],
      correctAnswer: "B",
      hint: "g(3) = f(3-2) + f(3+2) = f(1) + f(5). Look up both values from the given information.",
      explanation: "g(3) = f(3 - 2) + f(3 + 2) = f(1) + f(5) = 4 + 16 = 20.",
      skills: ['function-transformations']
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
      explanation: "f(x + 3) = (x + 3)² which expands to x² + 6x + 9. Both representations are correct.",
      skills: ['function-transformations']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If f(x) = 2x - 1, what is -f(x)?",
      choices: [
        { id: "A", text: "−2x − 1" },
        { id: "B", text: "−2x + 1" },
        { id: "C", text: "2x + 1" },
        { id: "D", text: "−2x" }
      ],
      correctAnswer: "B",
      hint: "Multiply the entire expression (2x - 1) by -1. Remember to distribute the negative to both terms.",
      explanation: "-f(x) = -(2x - 1) = -2x + 1.",
      skills: ['function-transformations']
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
      explanation: "Replace x with (x - 4) in |x|, then add 2: g(x - 4) + 2 = |x - 4| + 2.",
      skills: ['function-transformations']
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
      explanation: "f(-x) = (-x)³ = -x³. Both expressions represent the same thing.",
      skills: ['function-transformations']
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
      explanation: "3h(x) - 1 = 3(√x) - 1 = 3√x - 1.",
      skills: ['function-transformations']
    },
    {
      id: 6,
      difficulty: "easy",
      question: "If f(x) = x² + 1, what is f(x) - 4?",
      choices: [
        { id: "A", text: "x² - 3" },
        { id: "B", text: "x² + 5" },
        { id: "C", text: "(x - 4)² + 1" },
        { id: "D", text: "x² - 4" }
      ],
      correctAnswer: "A",
      hint: "f(x) - 4 means take the entire expression for f(x) and subtract 4 from it.",
      explanation: "f(x) - 4 = (x² + 1) - 4 = x² + 1 - 4 = x² - 3.",
      skills: ['function-transformations']
    },
    {
      id: 7,
      difficulty: "easy",
      question: "If g(x) = 5x, what is g(x - 2)?",
      choices: [
        { id: "A", text: "5x - 2" },
        { id: "B", text: "5x - 10" },
        { id: "C", text: "5(x - 2)" },
        { id: "D", text: "Both B and C" }
      ],
      correctAnswer: "D",
      hint: "Replace every x in g(x) = 5x with (x - 2). Then simplify to see if it matches any answer.",
      explanation: "g(x - 2) = 5(x - 2) = 5x - 10. Both B and C are equivalent expressions.",
      skills: ['function-transformations']
    },
    {
      id: 8,
      difficulty: "medium",
      question: "If f(x) = x² - 2x, what is f(x + 1)?",
      choices: [
        { id: "A", text: "x² - 1" },
        { id: "B", text: "x² + 1" },
        { id: "C", text: "x² - 2x + 1" },
        { id: "D", text: "x² - 2x - 1" }
      ],
      correctAnswer: "A",
      hint: "Replace every x with (x + 1): f(x + 1) = (x + 1)² - 2(x + 1). Expand and simplify.",
      explanation: "f(x + 1) = (x + 1)² - 2(x + 1) = x² + 2x + 1 - 2x - 2 = x² - 1.",
      skills: ['function-transformations']
    },
    {
      id: 9,
      difficulty: "medium",
      question: "If f(x) = 2x + 3, what is f(-x) + 5?",
      choices: [
        { id: "A", text: "−2x + 8" },
        { id: "B", text: "−2x − 2" },
        { id: "C", text: "2x + 8" },
        { id: "D", text: "−2x + 3" }
      ],
      correctAnswer: "A",
      hint: "First find f(-x) by replacing x with (-x), then add 5 to the result.",
      explanation: "f(-x) = 2(-x) + 3 = -2x + 3. Then f(-x) + 5 = -2x + 3 + 5 = -2x + 8.",
      skills: ['function-transformations']
    },
    {
      id: 10,
      difficulty: "medium",
      question: "If g(x) = x³, what is -g(x)?",
      choices: [
        { id: "A", text: "(-x)³" },
        { id: "B", text: "-x³" },
        { id: "C", text: "x³" },
        { id: "D", text: "Both A and B" }
      ],
      correctAnswer: "B",
      hint: "The negative is outside the function, so it multiplies the entire output. Don't replace x with -x.",
      explanation: "-g(x) = -(x³) = -x³. Note: this is different from g(-x) = (-x)³.",
      skills: ['function-transformations']
    },
    {
      id: 11,
      difficulty: "hard",
      question: "If f(x) = |x - 3|, what is f(x + 5) - 2?",
      choices: [
        { id: "A", text: "|x + 2| - 2" },
        { id: "B", text: "|x + 8| - 2" },
        { id: "C", text: "|x - 3| + 3" },
        { id: "D", text: "|x + 2| + 3" }
      ],
      correctAnswer: "A",
      hint: "Replace x with (x + 5) inside the expression, simplify, then subtract 2.",
      explanation: "f(x + 5) = |(x + 5) - 3| = |x + 2|. Then f(x + 5) - 2 = |x + 2| - 2.",
      skills: ['function-transformations']
    },
    {
      id: 12,
      difficulty: "hard",
      question: "If f(x) = 3x² - 2x + 1, what is -f(x)?",
      choices: [
        { id: "A", text: "−3x² + 2x − 1" },
        { id: "B", text: "3x² + 2x + 1" },
        { id: "C", text: "−3x² − 2x − 1" },
        { id: "D", text: "3x² - 2x - 1" }
      ],
      correctAnswer: "A",
      hint: "Multiply the entire expression by -1. Distribute the negative to every term.",
      explanation: "-f(x) = -(3x² - 2x + 1) = -3x² + 2x - 1. The negative flips the sign of every term.",
      skills: ['function-transformations']
    }
  ],

  // Section: Difficult Transformations
  // Based on "System of Equations Method" and "Answer Choice Method" from videos
  "Difficult Transformations": [
    {
      id: 1,
      difficulty: "hard",
      question: "The rational function f is defined by an equation in the form shown below, where a and b are constants. The partial graph of y = f(x) is shown. If g(x) = f(x + 4), which equation could define function g?",
      questionFormula: { text: "f(x) = ", fraction: { numerator: "a", denominator: "x + b" } },
      diagram: {
        type: "rationalFunction",
        params: { a: 6, b: 2, showPoints: [[0, 3], [1, 2]] }
      },
      choices: [
        { id: "A", text: "g(x) = ", fraction: { numerator: "6", denominator: "x" } },
        { id: "B", text: "g(x) = ", fraction: { numerator: "6", denominator: "x + 4" } },
        { id: "C", text: "g(x) = ", fraction: { numerator: "6", denominator: "x + 6" } },
        { id: "D", text: "g(x) = ", fraction: { numerator: "3", denominator: "x + 2" } }
      ],
      correctAnswer: "C",
      hint: "Read two points from the graph to set up a system of equations. Solve for a and b, then apply the transformation.",
      explanation: "From the graph, f passes through (0, 3) and (1, 2). From (0, 3): 3 = a/b → a = 3b. From (1, 2): 2 = a/(1 + b). Substituting: 2 = 3b/(1 + b) → b = 2, a = 6. Thus f(x) = 6/(x + 2). Now g(x) = f(x + 4) = 6/((x + 4) + 2) = 6/(x + 6).",
      skills: ['function-transformations', 'system-of-equations']
    },
    {
      id: 2,
      difficulty: "hard",
      question: "The rational function f is defined by an equation in the form shown below, where a and b are constants. The partial graph of y = f(x) is shown. If g(x) = f(x − 2), which equation could define function g?",
      questionFormula: { text: "f(x) = ", fraction: { numerator: "a", denominator: "x + b" } },
      diagram: {
        type: "rationalFunction",
        params: { a: 8, b: 2, showPoints: [[0, 4], [2, 2]] }
      },
      choices: [
        { id: "A", text: "g(x) = ", fraction: { numerator: "8", denominator: "x + 4" } },
        { id: "B", text: "g(x) = ", fraction: { numerator: "8", denominator: "x" } },
        { id: "C", text: "g(x) = ", fraction: { numerator: "8", denominator: "x + 2" } },
        { id: "D", text: "g(x) = ", fraction: { numerator: "4", denominator: "x − 2" } }
      ],
      correctAnswer: "B",
      hint: "Read two points from the graph, solve for a and b, then apply the transformation g(x) = f(x - 2).",
      explanation: "From the graph, f passes through (0, 4) and (2, 2). Solving: a = 4b and 2 = 4b/(2 + b) → b = 2, a = 8. Thus f(x) = 8/(x + 2). Now g(x) = f(x - 2) = 8/((x - 2) + 2) = 8/x.",
      skills: ['function-transformations', 'system-of-equations']
    },
    {
      id: 3,
      difficulty: "hard",
      question: "The function f is defined by f(x) = (x - h)² + k. The graph of f has its vertex at (3, -4). If g(x) = f(x + 5), what are the coordinates of the vertex of the graph of g?",
      diagram: {
        type: "quadraticVertex",
        params: { vertex: [3, -4], direction: "up", showVertex: true }
      },
      choices: [
        { id: "A", text: "(8, -4)" },
        { id: "B", text: "(-2, -4)" },
        { id: "C", text: "(3, 1)" },
        { id: "D", text: "(-2, 1)" }
      ],
      correctAnswer: "B",
      hint: "The transformation g(x) = f(x + 5) shifts the graph horizontally. Adding inside the function shifts left (opposite direction). The y-coordinate stays the same.",
      explanation: "f(x + 5) shifts the graph left 5 units. The vertex moves from (3, -4) to (3 - 5, -4) = (-2, -4).",
      skills: ['function-transformations', 'vertex-form']
    },
    {
      id: 4,
      difficulty: "hard",
      question: "The function f is defined by f(x) = |x + 2| - 3. The vertex of the graph of f is at (-2, -3). If g(x) = f(x - 4) + 2, what are the coordinates of the vertex of the graph of g?",
      diagram: {
        type: "absoluteValue",
        params: { vertex: [-2, -3], slope: 1 }
      },
      choices: [
        { id: "A", text: "(2, -1)" },
        { id: "B", text: "(-6, -1)" },
        { id: "C", text: "(2, -5)" },
        { id: "D", text: "(-6, -5)" }
      ],
      correctAnswer: "A",
      hint: "Apply both transformations step by step. f(x - 4) shifts right 4 units. The +2 outside shifts up 2 units.",
      explanation: "f(x - 4) shifts right 4: vertex x goes from -2 to -2 + 4 = 2. The +2 shifts up 2: vertex y goes from -3 to -3 + 2 = -1. New vertex: (2, -1).",
      skills: ['function-transformations', 'combined-transformations']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "The rational function f is defined by an equation in the form shown below, where a and b are constants. From the graph, f(1) = 6 and f(5) = 2. If g(x) = f(x + 4), which equation could define function g?",
      questionFormula: { text: "f(x) = ", fraction: { numerator: "a", denominator: "x + b" } },
      diagram: {
        type: "rationalFunction",
        params: { a: 12, b: 1, showPoints: [[1, 6], [5, 2]] }
      },
      choices: [
        { id: "A", text: "g(x) = ", fraction: { numerator: "12", denominator: "x + 6" } },
        { id: "B", text: "g(x) = ", fraction: { numerator: "12", denominator: "x + 2" } },
        { id: "C", text: "g(x) = ", fraction: { numerator: "6", denominator: "x + 4" } },
        { id: "D", text: "g(x) = ", fraction: { numerator: "12", denominator: "x − 2" } }
      ],
      correctAnswer: "A",
      hint: "Set up two equations using the given function values. Solve for a and b, then apply the transformation.",
      explanation: "From f(1) = 6: a = 6(1 + b). From f(5) = 2: a = 2(5 + b). Setting equal: 6(1 + b) = 2(5 + b) → 6 + 6b = 10 + 2b → 4b = 4 → b = 1, so a = 12. Thus f(x) = 12/(x + 2). Now g(x) = f(x + 4) = 12/((x + 4) + 2) = 12/(x + 6).",
      skills: ['function-transformations', 'system-of-equations']
    },
    {
      id: 6,
      difficulty: "hard",
      question: "The graph of y = f(x) passes through the points (2, 5) and (4, 9). The function g is defined by g(x) = f(x - 3) + 2. Which point must be on the graph of g?",
      diagram: {
        type: "coordinatePoints",
        params: { points: [[2, 5], [4, 9]], labels: ["(2, 5)", "(4, 9)"] }
      },
      choices: [
        { id: "A", text: "(5, 7)" },
        { id: "B", text: "(7, 11)" },
        { id: "C", text: "(1, 7)" },
        { id: "D", text: "(-1, 3)" }
      ],
      correctAnswer: "B",
      hint: "For g(x) = f(x - 3) + 2, the (x - 3) shifts right 3 units, and the +2 shifts up 2 units. Apply both to one of the given points.",
      explanation: "Take point (4, 9) on f. The transformation f(x - 3) shifts right 3: x goes from 4 to 4 + 3 = 7. The +2 shifts up 2: y goes from 9 to 9 + 2 = 11. Point (7, 11) is on g.",
      skills: ['function-transformations', 'combined-transformations']
    },
    {
      id: 7,
      difficulty: "hard",
      question: "The quadratic function f has x-intercepts at x = -1 and x = 5. If g(x) = f(x + 3), what are the x-intercepts of the graph of g?",
      diagram: {
        type: "quadraticIntercepts",
        params: { intercepts: [-1, 5], direction: "up" }
      },
      choices: [
        { id: "A", text: "x = 2 and x = 8" },
        { id: "B", text: "x = -4 and x = 2" },
        { id: "C", text: "x = -1 and x = 5" },
        { id: "D", text: "x = -4 and x = 8" }
      ],
      correctAnswer: "B",
      hint: "g(x) = f(x + 3) shifts the graph left 3 units. Each x-intercept shifts left by 3.",
      explanation: "f(x + 3) shifts the graph left 3 units. X-intercepts shift from -1 to -1 - 3 = -4, and from 5 to 5 - 3 = 2. New x-intercepts: x = -4 and x = 2.",
      skills: ['function-transformations', 'x-intercepts']
    },
    {
      id: 8,
      difficulty: "hard",
      question: "The rational function f is defined by an equation in the form shown below, where a and b are constants. The graph passes through (0, 3) and (1, 2). Using the answer choice method: if g(x) = f(x + 2), which equation could define g?",
      questionFormula: { text: "f(x) = ", fraction: { numerator: "a", denominator: "x + b" } },
      diagram: {
        type: "rationalFunction",
        params: { a: 6, b: 2, showPoints: [[0, 3], [1, 2]] }
      },
      choices: [
        { id: "A", text: "g(x) = ", fraction: { numerator: "6", denominator: "x + 4" } },
        { id: "B", text: "g(x) = ", fraction: { numerator: "6", denominator: "x + 2" } },
        { id: "C", text: "g(x) = ", fraction: { numerator: "3", denominator: "x + 1" } },
        { id: "D", text: "g(x) = ", fraction: { numerator: "6", denominator: "x" } }
      ],
      correctAnswer: "A",
      hint: "Answer Choice Method: Work backwards from each answer. If g(x) = f(x + 2), then f(x) = g(x - 2). Test which answer gives f(0) = 3 and f(1) = 2.",
      explanation: "Using Answer Choice Method: If g(x) = 6/(x + 4), then f(x) = g(x - 2) = 6/((x - 2) + 4) = 6/(x + 2). Check: f(0) = 6/2 = 3 ✓. f(1) = 6/3 = 2 ✓. Choice A works!",
      skills: ['function-transformations', 'answer-choice-method']
    },
    {
      id: 9,
      difficulty: "hard",
      question: "The graph of y = f(x) passes through the points (1, 4) and (3, 10). The function g is defined by g(x) = 2f(x - 1). Which point must be on the graph of g?",
      diagram: {
        type: "coordinatePoints",
        params: { points: [[1, 4], [3, 10]], labels: ["(1, 4)", "(3, 10)"] }
      },
      choices: [
        { id: "A", text: "(2, 8)" },
        { id: "B", text: "(0, 8)" },
        { id: "C", text: "(4, 20)" },
        { id: "D", text: "(2, 20)" }
      ],
      correctAnswer: "C",
      hint: "For g(x) = 2f(x - 1), first apply the horizontal shift (x - 1 shifts right 1), then the vertical stretch (multiply y by 2).",
      explanation: "Take point (3, 10) on f. For g(x) = 2f(x - 1): The (x - 1) shifts right 1, so x goes from 3 to 4. The factor of 2 doubles the y-value: 10 × 2 = 20. Point (4, 20) is on g.",
      skills: ['function-transformations', 'combined-transformations']
    }
  ]
};
