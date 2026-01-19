// Practice questions for Linear Equations module
// Questions are organized by SECTION (question type), not individual lessons

export const linearEquationsQuestions = {
  // Section: Deriving Equations (covers videos 7-11)
  // Types: From Context, From Graph (scatterplot), From Graph (line), From Table, From Function Notation
  "Deriving Equations": [
    // === FROM CONTEXT (slope and point given in words) ===
    {
      id: 1,
      difficulty: "easy",
      question: "A phone plan charges a flat fee of $25 per month plus $0.10 per text message. Which equation represents the total monthly cost C in terms of the number of text messages t?",
      choices: [
        { id: "A", text: "C = 0.10 + 25t" },
        { id: "B", text: "C = 25 + 0.10t" },
        { id: "C", text: "C = 25t + 0.10" },
        { id: "D", text: "C = 10 + 25t" }
      ],
      correctAnswer: "B",
      hint: "Think about what stays the same each month (the flat fee) and what changes based on usage (the per-text charge).",
      explanation: "The flat fee ($25) is the y-intercept (constant term), and the rate per text ($0.10) is the slope (coefficient of t). In slope-intercept form: C = 25 + 0.10t, which represents total cost = fixed fee + (rate × texts).",
      skills: ['word-problem-to-equation', 'slope-intercept-form']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The relationship between two variables, x and y, is linear. For every increase in the value of x by 1, the value of y increases by 8. When the value of x is 2, the value of y is 18. Which equation represents this relationship?",
      choices: [
        { id: "A", text: "y = 2x + 18" },
        { id: "B", text: "y = 2x + 8" },
        { id: "C", text: "y = 8x + 2" },
        { id: "D", text: "y = 3x + 26" }
      ],
      correctAnswer: "C",
      hint: "The rate of change (slope) is how much y changes when x changes by 1. Use the given point (2, 18) to find the y-intercept.",
      explanation: "Slope = 8 (y increases by 8 for each 1 increase in x). Using point (2, 18): 18 = 8(2) + b → 18 = 16 + b → b = 2. Equation: y = 8x + 2.",
      skills: ['word-problem-to-equation', 'slope-intercept-form']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A candle is 12 inches tall and burns at a rate of 0.5 inches per hour. Which equation gives the height h of the candle after t hours?",
      choices: [
        { id: "A", text: "h = 12 + 0.5t" },
        { id: "B", text: "h = 0.5 − 12t" },
        { id: "C", text: "h = 12 − 0.5t" },
        { id: "D", text: "h = 12t − 0.5" }
      ],
      correctAnswer: "C",
      hint: "The candle is getting shorter over time (decreasing), so the slope should be negative. Start with the initial height.",
      explanation: "The candle starts at 12 inches (initial value/y-intercept) and decreases by 0.5 inches each hour (negative slope). The equation is h = 12 − 0.5t.",
      skills: ['word-problem-to-equation', 'slope-intercept-form']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The relationship between two variables, x and y, is linear. For every increase in x by 1, y decreases by 5. When x is 4, y is 3. Which equation represents this relationship?",
      choices: [
        { id: "A", text: "y = −5x + 23" },
        { id: "B", text: "y = 5x − 17" },
        { id: "C", text: "y = −5x − 17" },
        { id: "D", text: "y = 5x + 23" }
      ],
      correctAnswer: "A",
      hint: "A decrease means negative slope. Use the point (4, 3) with slope −5 to find the y-intercept.",
      explanation: "Slope = −5 (y decreases by 5 for each 1 increase in x). Using point (4, 3): 3 = −5(4) + b → 3 = −20 + b → b = 23. Equation: y = −5x + 23.",
      skills: ['word-problem-to-equation', 'slope-intercept-form']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A water tank contains 500 gallons. Water drains from the tank at a constant rate of 15 gallons per minute. For every 2-minute interval, how much does the water level change, and which equation represents the remaining water W after m minutes?",
      choices: [
        { id: "A", text: "Decreases by 30 gallons; W = 500 − 15m" },
        { id: "B", text: "Decreases by 15 gallons; W = 500 − 15m" },
        { id: "C", text: "Decreases by 30 gallons; W = 500 + 15m" },
        { id: "D", text: "Decreases by 7.5 gallons; W = 500 − 7.5m" }
      ],
      correctAnswer: "A",
      hint: "In 2 minutes, how much drains? The equation uses the rate per minute, not per 2 minutes.",
      explanation: "In 2 minutes: 15 × 2 = 30 gallons drain. The equation uses rate per minute: W = 500 − 15m (starting amount minus rate times time).",
      skills: ['word-problem-to-equation', 'slope-intercept-form']
    },

    // === FROM GRAPH (Scatterplot - find best-fit model) ===
    {
      id: 6,
      difficulty: "easy",
      question: "Which of the following equations is the most appropriate linear model for the data shown in the scatterplot?",
      diagram: {
        type: "scatterplot",
        params: {
          points: [[1, 9], [2, 7], [3, 5], [4, 3]],
          xMax: 5,
          yMax: 10
        }
      },
      choices: [
        { id: "A", text: "y = −2x + 11" },
        { id: "B", text: "y = 2x + 7" },
        { id: "C", text: "y = −2x − 11" },
        { id: "D", text: "y = 2x − 11" }
      ],
      correctAnswer: "A",
      hint: "The data shows y decreasing as x increases, so the slope should be negative. Estimate the rate of decrease and the y-intercept.",
      explanation: "The points show a negative trend (y decreases as x increases). Slope ≈ (3−9)/(4−1) = −6/3 = −2. When x = 1, y = 9, so 9 = −2(1) + b → b = 11. Equation: y = −2x + 11.",
      skills: ['graph-to-equation', 'slope-from-points', 'best-fit-line']
    },
    {
      id: 7,
      difficulty: "medium",
      question: "Which equation is the most appropriate linear model for the data shown in the scatterplot?",
      diagram: {
        type: "scatterplot",
        params: {
          points: [[0, 10], [1, 8], [2, 7], [3, 5], [4, 2]],
          xMax: 5,
          yMax: 12
        }
      },
      choices: [
        { id: "A", text: "y = −1.9x − 10.1" },
        { id: "B", text: "y = −1.9x + 10.1" },
        { id: "C", text: "y = 1.9x − 10.1" },
        { id: "D", text: "y = 1.9x + 10.1" }
      ],
      correctAnswer: "B",
      hint: "The data shows a downward trend (negative slope) and starts near y = 10 when x = 0 (positive y-intercept).",
      explanation: "Slope ≈ (2−10)/(4−0) = −8/4 ≈ −2 (close to −1.9). The y-intercept is near 10. Only y = −1.9x + 10.1 has negative slope and positive y-intercept around 10.",
      skills: ['graph-to-equation', 'best-fit-line']
    },
    {
      id: 8,
      difficulty: "hard",
      question: "The scatterplot shows the relationship between hours studied (x) and test score (y). Which equation best models this relationship?",
      diagram: {
        type: "scatterplot",
        params: {
          points: [[2, 65], [4, 75], [6, 85], [8, 95]],
          xLabel: "Hours",
          yLabel: "Score",
          xMax: 10,
          yMax: 100
        }
      },
      choices: [
        { id: "A", text: "y = 5x + 55" },
        { id: "B", text: "y = 10x + 45" },
        { id: "C", text: "y = 5x + 65" },
        { id: "D", text: "y = 10x + 55" }
      ],
      correctAnswer: "A",
      hint: "Find the slope using two points, then check which equation works for all the given points.",
      explanation: "Slope = (95−65)/(8−2) = 30/6 = 5. Using (2, 65): 65 = 5(2) + b → 65 = 10 + b → b = 55. Equation: y = 5x + 55. Verify: 5(8) + 55 = 95 ✓",
      skills: ['graph-to-equation', 'slope-from-points', 'best-fit-line']
    },

    // === FROM GRAPH (Line with intercepts) ===
    {
      id: 9,
      difficulty: "easy",
      question: "What is the equation of the line shown in the graph?",
      diagram: {
        type: "simpleLine",
        params: {
          points: [[0, 4], [2, 10]],
          xMax: 4,
          yMax: 12
        }
      },
      choices: [
        { id: "A", text: "y = 3x + 4" },
        { id: "B", text: "y = 4x + 3" },
        { id: "C", text: "y = 2x + 4" },
        { id: "D", text: "y = 3x + 10" }
      ],
      correctAnswer: "A",
      hint: "Use the slope formula: m = (y₂ − y₁)/(x₂ − x₁). The point where the line crosses the y-axis tells you the y-intercept directly.",
      explanation: "First find slope: m = (10−4)/(2−0) = 6/2 = 3. The y-intercept is 4 (the point where x = 0). So the equation is y = 3x + 4.",
      skills: ['slope-from-points', 'slope-intercept-form', 'graph-to-equation']
    },
    {
      id: 10,
      difficulty: "medium",
      question: "The graph shows the relationship between the number of shares of Company A stock (x) and the number of shares of Company B stock (y) that Simone can purchase. Which equation could represent this relationship?",
      diagram: {
        type: "linearLine",
        params: {
          points: [[0, 40], [60, 0]],
          xLabel: "Company A",
          yLabel: "Company B",
          xRange: [0, 100],
          yRange: [0, 50]
        }
      },
      choices: [
        { id: "A", text: "y = 8x + 12" },
        { id: "B", text: "8x + 12y = 480" },
        { id: "C", text: "y = 12x + 8" },
        { id: "D", text: "12x + 8y = 480" }
      ],
      correctAnswer: "D",
      hint: "Use the intercepts to find the equation. When x = 0, y = 40. When y = 0, x = 60. Which equation satisfies both?",
      explanation: "Using intercepts: slope = (0−40)/(60−0) = −2/3. The line passes through (0, 40) and (60, 0). Testing option D: 12(0) + 8(40) = 320 and 12(60) + 8(0) = 720. Actually the equation x/60 + y/40 = 1 → 2x + 3y = 120 → 8x + 12y = 480.",
      skills: ['graph-to-equation', 'slope-from-points', 'standard-form']
    },
    {
      id: 11,
      difficulty: "hard",
      question: "Which equation represents the line shown in the graph?",
      diagram: {
        type: "coordinatePoints",
        params: {
          points: [[-2, 8], [4, -4]],
          label: ""
        }
      },
      choices: [
        { id: "A", text: "y = −2x + 4" },
        { id: "B", text: "y = 2x + 12" },
        { id: "C", text: "y = −2x − 4" },
        { id: "D", text: "y = 2x − 4" }
      ],
      correctAnswer: "A",
      hint: "Calculate the slope using the two points, then use one point to find the y-intercept.",
      explanation: "Slope = (−4 − 8)/(4 − (−2)) = −12/6 = −2. Using point (4, −4): −4 = −2(4) + b → −4 = −8 + b → b = 4. Equation: y = −2x + 4.",
      skills: ['slope-from-points', 'slope-intercept-form', 'graph-to-equation']
    },

    // === FROM TABLE ===
    {
      id: 12,
      difficulty: "easy",
      question: "For the linear function f, the table shows three values of x and their corresponding values of f(x). Which equation defines f(x)?",
      diagram: {
        type: "table",
        params: {
          rows: [[0, 29], [1, 32], [2, 35]],
          xHeader: "x",
          yHeader: "f(x)"
        }
      },
      choices: [
        { id: "A", text: "f(x) = 3x + 29" },
        { id: "B", text: "f(x) = 29x + 32" },
        { id: "C", text: "f(x) = 35x + 29" },
        { id: "D", text: "f(x) = 32x + 35" }
      ],
      correctAnswer: "A",
      hint: "Find the slope by seeing how much f(x) changes when x increases by 1. The value when x = 0 is your y-intercept.",
      explanation: "Slope = (32 − 29)/(1 − 0) = 3. When x = 0, f(x) = 29 (y-intercept). Equation: f(x) = 3x + 29. Verify: f(2) = 3(2) + 29 = 35 ✓",
      skills: ['table-to-equation', 'slope-from-points']
    },
    {
      id: 13,
      difficulty: "medium",
      question: "The table shows values of x and their corresponding values of y. Which equation represents this linear relationship?",
      diagram: {
        type: "table",
        params: {
          rows: [[0, 5], [2, 11], [4, 17], [6, 23]],
          xHeader: "x",
          yHeader: "y"
        }
      },
      choices: [
        { id: "A", text: "y = 3x + 5" },
        { id: "B", text: "y = 6x + 5" },
        { id: "C", text: "y = 3x + 11" },
        { id: "D", text: "y = 2x + 5" }
      ],
      correctAnswer: "A",
      hint: "Find how much y changes when x increases by 2. That's your rise. Divide by 2 to get the slope. When x = 0, y gives you the y-intercept.",
      explanation: "From the table: when x increases by 2, y increases by 6. Slope = 6/2 = 3. When x = 0, y = 5 (y-intercept). Equation: y = 3x + 5.",
      skills: ['table-to-equation', 'slope-from-points']
    },
    {
      id: 14,
      difficulty: "medium",
      question: "For the linear function g, the table shows three values of x and their corresponding values of g(x). Which equation defines g(x)?",
      diagram: {
        type: "table",
        params: {
          rows: [[1, 7], [3, 13], [5, 19]],
          xHeader: "x",
          yHeader: "g(x)"
        }
      },
      choices: [
        { id: "A", text: "g(x) = 3x + 4" },
        { id: "B", text: "g(x) = 6x + 1" },
        { id: "C", text: "g(x) = 3x + 7" },
        { id: "D", text: "g(x) = 2x + 5" }
      ],
      correctAnswer: "A",
      hint: "Find the slope from consecutive x-values. Then use any point to find the y-intercept.",
      explanation: "Slope = (13 − 7)/(3 − 1) = 6/2 = 3. Using (1, 7): 7 = 3(1) + b → b = 4. Equation: g(x) = 3x + 4. Verify: g(5) = 3(5) + 4 = 19 ✓",
      skills: ['table-to-equation', 'slope-from-points']
    },
    {
      id: 15,
      difficulty: "hard",
      question: "The table shows values of x and their corresponding values of f(x). Which equation defines f(x)?",
      diagram: {
        type: "table",
        params: {
          rows: [["−2", 15], [0, 9], [2, 3], [4, "−3"]],
          xHeader: "x",
          yHeader: "f(x)"
        }
      },
      choices: [
        { id: "A", text: "f(x) = −3x + 9" },
        { id: "B", text: "f(x) = 3x + 9" },
        { id: "C", text: "f(x) = −3x − 9" },
        { id: "D", text: "f(x) = 3x − 9" }
      ],
      correctAnswer: "A",
      hint: "Notice that f(x) is decreasing as x increases, so the slope is negative. Use x = 0 to find the y-intercept directly.",
      explanation: "When x = 0, f(x) = 9, so the y-intercept is 9. Slope = (3 − 9)/(2 − 0) = −6/2 = −3. Equation: f(x) = −3x + 9. Verify: f(−2) = −3(−2) + 9 = 15 ✓",
      skills: ['table-to-equation', 'slope-from-points']
    },

    // === FROM FUNCTION NOTATION ===
    {
      id: 16,
      difficulty: "easy",
      question: "In the linear function f, f(0) = 8 and f(1) = 12. Which equation defines f?",
      choices: [
        { id: "A", text: "f(x) = 12x + 8" },
        { id: "B", text: "f(x) = 4x" },
        { id: "C", text: "f(x) = 4x + 12" },
        { id: "D", text: "f(x) = 4x + 8" }
      ],
      correctAnswer: "D",
      hint: "f(0) = 8 means the y-intercept is 8. Use f(1) = 12 to find the slope.",
      explanation: "f(0) = 8 tells us b = 8 (y-intercept). Slope = (12 − 8)/(1 − 0) = 4. Equation: f(x) = 4x + 8.",
      skills: ['function-notation-to-equation', 'slope-from-points']
    },
    {
      id: 17,
      difficulty: "medium",
      question: "If f(x) is a linear function where f(2) = 7 and f(5) = 16, what is f(0)?",
      choices: [
        { id: "A", text: "1" },
        { id: "B", text: "−1" },
        { id: "C", text: "3" },
        { id: "D", text: "−3" }
      ],
      correctAnswer: "A",
      hint: "First find the slope using the two points (2, 7) and (5, 16). Then use point-slope form to find the y-intercept, which equals f(0).",
      explanation: "Slope = (16 − 7)/(5 − 2) = 9/3 = 3. Using f(2) = 7: f(x) = 3x + b → 7 = 3(2) + b → b = 1. So f(x) = 3x + 1, and f(0) = 1.",
      skills: ['function-notation-to-equation', 'slope-from-points', 'slope-intercept-form']
    },
    {
      id: 18,
      difficulty: "medium",
      question: "For the linear function h, h(3) = 14 and h(7) = 26. Which equation defines h?",
      choices: [
        { id: "A", text: "h(x) = 3x + 5" },
        { id: "B", text: "h(x) = 4x + 2" },
        { id: "C", text: "h(x) = 3x + 14" },
        { id: "D", text: "h(x) = 4x − 2" }
      ],
      correctAnswer: "A",
      hint: "Find the slope using the two given points, then find the y-intercept.",
      explanation: "Slope = (26 − 14)/(7 − 3) = 12/4 = 3. Using (3, 14): 14 = 3(3) + b → 14 = 9 + b → b = 5. Equation: h(x) = 3x + 5.",
      skills: ['function-notation-to-equation', 'slope-from-points']
    },
    {
      id: 19,
      difficulty: "hard",
      question: "In the linear function g, g(−1) = 10 and g(3) = −2. What is the value of x when g(x) = 7?",
      choices: [
        { id: "A", text: "0" },
        { id: "B", text: "1" },
        { id: "C", text: "−2" },
        { id: "D", text: "2" }
      ],
      correctAnswer: "A",
      hint: "First find the equation of g(x), then solve g(x) = 7 for x.",
      explanation: "Slope = (−2 − 10)/(3 − (−1)) = −12/4 = −3. Using (−1, 10): 10 = −3(−1) + b → 10 = 3 + b → b = 7. So g(x) = −3x + 7. Solving −3x + 7 = 7: −3x = 0, x = 0.",
      skills: ['function-notation-to-equation', 'slope-from-points', 'solving-linear-equations']
    },
    {
      id: 20,
      difficulty: "hard",
      question: "The linear function f is defined such that f(−2) = 25 and f(6) = 9. What is the y-intercept of the graph of y = f(x)?",
      choices: [
        { id: "A", text: "17" },
        { id: "B", text: "21" },
        { id: "C", text: "23" },
        { id: "D", text: "25" }
      ],
      correctAnswer: "B",
      hint: "Find the slope, then use one of the given points to find b in f(x) = mx + b.",
      explanation: "Slope = (9 − 25)/(6 − (−2)) = −16/8 = −2. Using (6, 9): 9 = −2(6) + b → 9 = −12 + b → b = 21. The y-intercept is 21.",
      skills: ['function-notation-to-equation', 'slope-from-points', 'slope-intercept-form']
    }
  ],

  // Section: Parallel Lines (covers videos 13-21)
  // Types: Find slope of parallel line, Write equation through point, No solution systems, Find constant for no solution
  "Parallel Lines": [
    // === TYPE 1: Find slope of parallel line (SAT style) ===
    {
      id: 1,
      difficulty: "easy",
      question: "f(x) = 3x + 7\n\nThe graph of y = f(x) in the xy-plane is a line. Line j is parallel to this graph. What is the slope of line j?",
      choices: [
        { id: "A", text: "3" },
        { id: "B", text: "7" },
        { id: "C", text: "−3" },
        { id: "D", text: "−", fraction: { numerator: "1", denominator: "3" } }
      ],
      correctAnswer: "A",
      hint: "Parallel lines have the same slope. What is the slope of f(x) = 3x + 7?",
      explanation: "The slope of f(x) = 3x + 7 is 3 (the coefficient of x). Since line j is parallel to the graph of f, line j also has slope 3.",
      skills: ['parallel-line-slope']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "g(x) = −4x + 9\n\nThe graph of y = g(x) in the xy-plane is a line. Line k is parallel to this graph. What is the slope of line k?",
      choices: [
        { id: "A", text: "9" },
        { id: "B", text: "4" },
        { id: "C", text: "−4" },
        { id: "D", text: "−9" }
      ],
      correctAnswer: "C",
      hint: "Parallel lines have identical slopes. Identify the slope from the equation g(x) = −4x + 9.",
      explanation: "The slope of g(x) = −4x + 9 is −4. Parallel lines have the same slope, so line k has slope −4.",
      skills: ['parallel-line-slope']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "h(x) = (2/5)x − 6\n\nThe graph of y = h(x) in the xy-plane is a line. Line m is parallel to this graph. What is the slope of line m?",
      choices: [
        { id: "A", text: "−6" },
        { id: "B", text: "−", fraction: { numerator: "5", denominator: "2" } },
        { id: "C", fraction: { numerator: "2", denominator: "5" } },
        { id: "D", text: "6" }
      ],
      correctAnswer: "C",
      hint: "Parallel lines have the same slope. The slope is the coefficient of x.",
      explanation: "The slope of h(x) = (2/5)x − 6 is 2/5. Since line m is parallel to the graph of h, line m also has slope 2/5.",
      skills: ['parallel-line-slope']
    },

    // === TYPE 2: Write equation through point parallel to given line ===
    {
      id: 4,
      difficulty: "easy",
      question: "What is the equation of the line that passes through the point (0, 8) and is parallel to the graph of y = 5x + 2 in the xy-plane?",
      choices: [
        { id: "A", text: "y = 8x" },
        { id: "B", text: "y = 5x + 8" },
        { id: "C", text: "y = 5x" },
        { id: "D", text: "y = 8x + 5" }
      ],
      correctAnswer: "B",
      hint: "Parallel lines have the same slope. The point (0, 8) tells you the y-intercept directly.",
      explanation: "Parallel to y = 5x + 2 means slope = 5. The point (0, 8) is the y-intercept, so b = 8. Equation: y = 5x + 8.",
      skills: ['parallel-line-slope', 'writing-parallel-equation']
    },
    {
      id: 5,
      difficulty: "medium",
      question: "What is the equation of the line that passes through the point (3, 14) and is parallel to the graph of y = 3x − 2 in the xy-plane?",
      choices: [
        { id: "A", text: "y = 3x + 5" },
        { id: "B", text: "y = 3x − 2" },
        { id: "C", text: "y = 3x + 14" },
        { id: "D", text: "y = −", fraction: { numerator: "1", denominator: "3" }, textAfter: "x + 14" }
      ],
      correctAnswer: "A",
      hint: "Use slope 3 (same as the given line). Substitute point (3, 14) into y = 3x + b to find b.",
      explanation: "Parallel means slope = 3. Using (3, 14): 14 = 3(3) + b → 14 = 9 + b → b = 5. Equation: y = 3x + 5.",
      skills: ['parallel-line-slope', 'writing-parallel-equation']
    },
    {
      id: 6,
      difficulty: "medium",
      question: "What is the equation of the line that passes through the point (−2, 4) and is parallel to the graph of y = −2x + 5 in the xy-plane?",
      choices: [
        { id: "A", text: "y = −2x" },
        { id: "B", text: "y = −2x + 4" },
        { id: "C", text: "y = 2x + 8" },
        { id: "D", text: "y = ", fraction: { numerator: "1", denominator: "2" }, textAfter: "x + 4" }
      ],
      correctAnswer: "A",
      hint: "Parallel lines have slope −2. Use point (−2, 4) to find the y-intercept.",
      explanation: "Parallel means slope = −2. Using (−2, 4): 4 = −2(−2) + b → 4 = 4 + b → b = 0. Equation: y = −2x.",
      skills: ['parallel-line-slope', 'writing-parallel-equation']
    },

    // === TYPE 3: System with no solution - identify parallel equation ===
    {
      id: 7,
      difficulty: "medium",
      question: "y = 4x + 12\n\nOne of the equations in a system of two linear equations is given. The system has no solution. Which equation could be the second equation in the system?",
      choices: [
        { id: "A", text: "−4x + y = 12" },
        { id: "B", text: "−4x + y = 20" },
        { id: "C", text: "−8x + y = 24" },
        { id: "D", text: "−8x + y = 12" }
      ],
      correctAnswer: "B",
      hint: "No solution means parallel lines (same slope, different y-intercept). Rewrite each choice in y = mx + b form.",
      explanation: "y = 4x + 12 has slope 4. For no solution, we need same slope but different y-intercept. Choice B: −4x + y = 20 → y = 4x + 20. Same slope (4), different intercept (20 ≠ 12). ✓",
      skills: ['parallel-line-slope', 'system-no-solution']
    },
    {
      id: 8,
      difficulty: "medium",
      question: "y = −5x + 15\n\nOne of the equations in a system of two linear equations is given. The system has no solution. Which equation could be the second equation in the system?",
      choices: [
        { id: "A", text: "5x + y = 15" },
        { id: "B", text: "5x + y = 25" },
        { id: "C", text: "−5x + y = 15" },
        { id: "D", text: "10x + 2y = 30" }
      ],
      correctAnswer: "B",
      hint: "Convert each answer to slope-intercept form. No solution requires same slope but different y-intercept.",
      explanation: "y = −5x + 15 has slope −5. Choice B: 5x + y = 25 → y = −5x + 25. Same slope (−5), different intercept (25 ≠ 15). This creates parallel lines with no solution.",
      skills: ['parallel-line-slope', 'system-no-solution']
    },

    // === TYPE 4: Find constant p for no solution (single equation) ===
    {
      id: 9,
      difficulty: "hard",
      question: "−4x + 28px = 56\n\nIn the given equation, p is a constant. The equation has no solution. What is the value of p?",
      choices: [
        { id: "A", text: "0" },
        { id: "B", fraction: { numerator: "1", denominator: "7" } },
        { id: "C", fraction: { numerator: "2", denominator: "7" } },
        { id: "D", text: "7" }
      ],
      correctAnswer: "B",
      hint: "Combine the x terms: (−4 + 28p)x = 56. For no solution, the coefficient of x must be 0 while the right side is non-zero.",
      explanation: "Combine terms: (−4 + 28p)x = 56. For no solution, we need 0 · x = 56 (impossible). Set −4 + 28p = 0 → 28p = 4 → p = 4/28 = 1/7.",
      skills: ['parallel-line-slope', 'no-solution-equation']
    },
    {
      id: 10,
      difficulty: "hard",
      question: "7x − 21px = 42\n\nIn the given equation, p is a constant. The equation has no solution. What is the value of p?",
      choices: [
        { id: "A", text: "−3" },
        { id: "B", text: "−", fraction: { numerator: "1", denominator: "3" } },
        { id: "C", fraction: { numerator: "1", denominator: "3" } },
        { id: "D", text: "3" }
      ],
      correctAnswer: "C",
      hint: "Factor out x: (7 − 21p)x = 42. For no solution, make the x coefficient equal to 0.",
      explanation: "Combine: (7 − 21p)x = 42. For no solution: 7 − 21p = 0 → 21p = 7 → p = 7/21 = 1/3.",
      skills: ['parallel-line-slope', 'no-solution-equation']
    },

    // === TYPE 5: Find constant for no solution in system (advanced) ===
    {
      id: 11,
      difficulty: "hard",
      question: "36x − 48y = 36y + 18\nry = (1/6) − 9x\n\nIn the given system of equations, r is a constant. If the system has no solution, what is the value of r?",
      choices: [
        { id: "A", text: "−21" },
        { id: "B", text: "−", fraction: { numerator: "1", denominator: "4" } },
        { id: "C", fraction: { numerator: "1", denominator: "4" } },
        { id: "D", text: "21" }
      ],
      correctAnswer: "A",
      hint: "Rewrite both equations in standard form (ax + by = c). For no solution, the ratios a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
      explanation: "Equation 1: 36x − 48y = 36y + 18 → 36x − 84y = 18 → divide by 6: 6x − 14y = 3. Equation 2: ry = 1/6 − 9x → 9x + ry = 1/6. For no solution: 6/9 = −14/r → 2/3 = −14/r → r = −14 × 3/2 = −21.",
      skills: ['parallel-line-slope', 'system-no-solution', 'algebraic-manipulation']
    },
    {
      id: 12,
      difficulty: "hard",
      question: "(5/2)y − (1/3)x = (1/2) − (5/2)y\n(1/3)x + (5/3) = py + (11/3)\n\nIn the given system of equations, p is a constant. If the system has no solution, what is the value of p?",
      choices: [
        { id: "A", text: "−5" },
        { id: "B", text: "−", fraction: { numerator: "1", denominator: "5" } },
        { id: "C", fraction: { numerator: "1", denominator: "5" } },
        { id: "D", text: "5" }
      ],
      correctAnswer: "D",
      hint: "Simplify each equation to standard form. Then set up the parallel condition where the slopes are equal.",
      explanation: "Eq 1: (5/2)y − (1/3)x = (1/2) − (5/2)y → 5y − (1/3)x = 1/2 → −(1/3)x + 5y = 1/2 → multiply by 3: −x + 15y = 3/2. Eq 2: (1/3)x + 5/3 = py + 11/3 → (1/3)x − py = 2 → multiply by 3: x − 3py = 6. For no solution: −1/1 = 15/(−3p) → −1 = −5/p → p = 5.",
      skills: ['parallel-line-slope', 'system-no-solution', 'algebraic-manipulation']
    }
  ],

  // Section: Perpendicular Lines (covers videos 23-24)
  "Perpendicular Lines": [
    {
      id: 1,
      difficulty: "easy",
      question: "Line k has the equation y = 2x + 5. What is the slope of a line perpendicular to line k?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "−2" },
        { id: "C", fraction: { numerator: "1", denominator: "2" } },
        { id: "D", text: "−", fraction: { numerator: "1", denominator: "2" } }
      ],
      correctAnswer: "D",
      hint: "Perpendicular slopes are negative reciprocals. Flip the fraction and change the sign.",
      explanation: "Perpendicular lines have slopes that are negative reciprocals. The slope of line k is 2. The negative reciprocal of 2 is -1/2.",
      skills: ['perpendicular-negative-reciprocal']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Which equation represents a line perpendicular to y = -3x + 1?",
      choices: [
        { id: "A", text: "y = -3x + 4" },
        { id: "B", text: "y = 3x - 2" },
        { id: "C", text: "y = ", fraction: { numerator: "1", denominator: "3" }, textAfter: "x + 5" },
        { id: "D", text: "y = −", fraction: { numerator: "1", denominator: "3" }, textAfter: "x + 1" }
      ],
      correctAnswer: "C",
      hint: "The slope is -3. The negative reciprocal means flip it (1/3) and change the sign (positive).",
      explanation: "The slope of y = -3x + 1 is -3. The negative reciprocal is 1/3. Only y = (1/3)x + 5 has slope 1/3.",
      skills: ['perpendicular-negative-reciprocal']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A line passes through (2, 4) and is perpendicular to the line shown below. What is the equation of this line?",
      questionFormula: { text: "y = ", fraction: { numerator: "1", denominator: "2" }, textAfter: "x − 3" },
      choices: [
        { id: "A", text: "y = -2x + 8" },
        { id: "B", text: "y = 2x" },
        { id: "C", text: "y = ", fraction: { numerator: "1", denominator: "2" }, textAfter: "x + 3" },
        { id: "D", text: "y = -2x" }
      ],
      correctAnswer: "A",
      hint: "The negative reciprocal of 1/2 is -2. Use this slope with the point (2, 4) to find the equation.",
      explanation: "The original slope is 1/2. Perpendicular slope = -2. Using point (2, 4): y - 4 = -2(x - 2) → y = -2x + 4 + 4 → y = -2x + 8.",
      skills: ['perpendicular-negative-reciprocal', 'writing-perpendicular-equation']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "If two lines are perpendicular and one has the slope shown below, what is the slope of the other?",
      questionFormula: { fraction: { numerator: "4", denominator: "5" } },
      choices: [
        { id: "A", fraction: { numerator: "4", denominator: "5" } },
        { id: "B", text: "−", fraction: { numerator: "4", denominator: "5" } },
        { id: "C", fraction: { numerator: "5", denominator: "4" } },
        { id: "D", text: "−", fraction: { numerator: "5", denominator: "4" } }
      ],
      correctAnswer: "D",
      hint: "To find the negative reciprocal: flip 4/5 to get 5/4, then make it negative.",
      explanation: "Perpendicular slopes are negative reciprocals. The negative reciprocal of 4/5 is -5/4. You flip the fraction and change the sign.",
      skills: ['perpendicular-negative-reciprocal']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Line j passes through (0, 3) and (4, 1). A line perpendicular to j passes through (2, 5). What is the y-intercept of the perpendicular line?",
      choices: [
        { id: "A", text: "1" },
        { id: "B", text: "3" },
        { id: "C", text: "−1" },
        { id: "D", text: "5" }
      ],
      correctAnswer: "A",
      hint: "First find the slope of line j, then find the perpendicular slope. Use point (2, 5) to write the equation and find b.",
      explanation: "Slope of j = (1-3)/(4-0) = -2/4 = -1/2. Perpendicular slope = 2. Using (2, 5): y - 5 = 2(x - 2) → y = 2x + 1. Y-intercept is 1.",
      skills: ['slope-from-points', 'perpendicular-negative-reciprocal', 'writing-perpendicular-equation']
    }
  ]
};
