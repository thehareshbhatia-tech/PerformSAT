// Practice questions for Linear Equations module
// Questions are organized by SECTION (question type), not individual lessons

export const linearEquationsQuestions = {
  // Section: Deriving Equations (covers videos 7-11)
  "Deriving Equations": [
    {
      id: 1,
      question: "A phone plan charges a flat fee of $25 per month plus $0.10 per text message. Which equation represents the total monthly cost C in terms of the number of text messages t?",
      choices: [
        { id: "A", text: "C = 0.10 + 25t" },
        { id: "B", text: "C = 25 + 0.10t" },
        { id: "C", text: "C = 25t + 0.10" },
        { id: "D", text: "C = 10 + 25t" }
      ],
      correctAnswer: "B",
      explanation: "The flat fee ($25) is the y-intercept (constant term), and the rate per text ($0.10) is the slope (coefficient of t). In slope-intercept form: C = 25 + 0.10t, which represents total cost = fixed fee + (rate × texts)."
    },
    {
      id: 2,
      question: "A line passes through points (0, 4) and (2, 10) on a graph. What is the equation of this line?",
      choices: [
        { id: "A", text: "y = 3x + 4" },
        { id: "B", text: "y = 4x + 3" },
        { id: "C", text: "y = 2x + 4" },
        { id: "D", text: "y = 3x + 10" }
      ],
      correctAnswer: "A",
      explanation: "First find slope: m = (10-4)/(2-0) = 6/2 = 3. The y-intercept is 4 (the point where x=0). So the equation is y = 3x + 4."
    },
    {
      id: 3,
      question: "A table shows: x = [0, 2, 4, 6] and y = [5, 11, 17, 23]. What is the equation?",
      choices: [
        { id: "A", text: "y = 3x + 5" },
        { id: "B", text: "y = 6x + 5" },
        { id: "C", text: "y = 3x + 11" },
        { id: "D", text: "y = 2x + 5" }
      ],
      correctAnswer: "A",
      explanation: "From the table: when x increases by 2, y increases by 6. Slope = 6/2 = 3. When x = 0, y = 5 (y-intercept). Equation: y = 3x + 5."
    },
    {
      id: 4,
      question: "If f(x) is a linear function where f(2) = 7 and f(5) = 16, what is f(0)?",
      choices: [
        { id: "A", text: "1" },
        { id: "B", text: "-1" },
        { id: "C", text: "3" },
        { id: "D", text: "-3" }
      ],
      correctAnswer: "A",
      explanation: "Slope = (16-7)/(5-2) = 9/3 = 3. Using f(2) = 7: f(x) = 3x + b → 7 = 3(2) + b → b = 1. So f(x) = 3x + 1, and f(0) = 1."
    },
    {
      id: 5,
      question: "A candle is 12 inches tall and burns at a rate of 0.5 inches per hour. Which equation gives the height h of the candle after t hours?",
      choices: [
        { id: "A", text: "h = 12 + 0.5t" },
        { id: "B", text: "h = 0.5 - 12t" },
        { id: "C", text: "h = 12 - 0.5t" },
        { id: "D", text: "h = 12t - 0.5" }
      ],
      correctAnswer: "C",
      explanation: "The candle starts at 12 inches (initial value/y-intercept) and decreases by 0.5 inches each hour (negative slope). The equation is h = 12 - 0.5t. The negative coefficient shows the height is decreasing over time."
    }
  ],

  // Section: Parallel Lines (covers videos 13-21)
  "Parallel Lines": [
    {
      id: 1,
      question: "Line p has the equation y = 4x - 3. Which equation represents a line parallel to line p?",
      choices: [
        { id: "A", text: "y = -4x + 5" },
        { id: "B", text: "y = (1/4)x - 3" },
        { id: "C", text: "y = 4x + 7" },
        { id: "D", text: "y = -(1/4)x + 2" }
      ],
      correctAnswer: "C",
      explanation: "Parallel lines have the same slope. Line p has slope 4. Only y = 4x + 7 also has slope 4. The y-intercept can be different, but the slope must match."
    },
    {
      id: 2,
      question: "Which line is parallel to 2x + y = 8?",
      choices: [
        { id: "A", text: "y = 2x + 3" },
        { id: "B", text: "y = -2x + 5" },
        { id: "C", text: "y = (1/2)x - 1" },
        { id: "D", text: "y = -(1/2)x + 4" }
      ],
      correctAnswer: "B",
      explanation: "First, convert 2x + y = 8 to slope-intercept form: y = -2x + 8. The slope is -2. A parallel line must also have slope -2. Only y = -2x + 5 has this slope."
    },
    {
      id: 3,
      question: "Line m passes through (1, 5) and is parallel to y = 3x - 2. What is the equation of line m?",
      choices: [
        { id: "A", text: "y = 3x + 2" },
        { id: "B", text: "y = 3x - 2" },
        { id: "C", text: "y = -3x + 8" },
        { id: "D", text: "y = (1/3)x + 5" }
      ],
      correctAnswer: "A",
      explanation: "Parallel means same slope, so m = 3. Using point (1, 5): y - 5 = 3(x - 1) → y = 3x - 3 + 5 → y = 3x + 2."
    },
    {
      id: 4,
      question: "In a system of equations, y = 2x + 3 and y = 2x - 1, how many solutions exist?",
      choices: [
        { id: "A", text: "No solution" },
        { id: "B", text: "One solution" },
        { id: "C", text: "Two solutions" },
        { id: "D", text: "Infinitely many solutions" }
      ],
      correctAnswer: "A",
      explanation: "Both lines have the same slope (2) but different y-intercepts (3 and -1). This means the lines are parallel and never intersect, so there is no solution."
    },
    {
      id: 5,
      question: "If y = mx + 5 is parallel to the line passing through (-2, 1) and (4, 7), what is m?",
      choices: [
        { id: "A", text: "1" },
        { id: "B", text: "-1" },
        { id: "C", text: "3" },
        { id: "D", text: "6" }
      ],
      correctAnswer: "A",
      explanation: "Find the slope of the line through the two points: m = (7-1)/(4-(-2)) = 6/6 = 1. For parallel lines, m = 1."
    }
  ],

  // Section: Perpendicular Lines (covers videos 23-24)
  "Perpendicular Lines": [
    {
      id: 1,
      question: "Line k has the equation y = 2x + 5. What is the slope of a line perpendicular to line k?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "-2" },
        { id: "C", text: "1/2" },
        { id: "D", text: "-1/2" }
      ],
      correctAnswer: "D",
      explanation: "Perpendicular lines have slopes that are negative reciprocals. The slope of line k is 2. The negative reciprocal of 2 is -1/2."
    },
    {
      id: 2,
      question: "Which equation represents a line perpendicular to y = -3x + 1?",
      choices: [
        { id: "A", text: "y = -3x + 4" },
        { id: "B", text: "y = 3x - 2" },
        { id: "C", text: "y = (1/3)x + 5" },
        { id: "D", text: "y = -(1/3)x + 1" }
      ],
      correctAnswer: "C",
      explanation: "The slope of y = -3x + 1 is -3. The negative reciprocal is 1/3. Only y = (1/3)x + 5 has slope 1/3."
    },
    {
      id: 3,
      question: "A line passes through (2, 4) and is perpendicular to y = (1/2)x - 3. What is the equation of this line?",
      choices: [
        { id: "A", text: "y = -2x + 8" },
        { id: "B", text: "y = 2x" },
        { id: "C", text: "y = (1/2)x + 3" },
        { id: "D", text: "y = -2x" }
      ],
      correctAnswer: "A",
      explanation: "The original slope is 1/2. Perpendicular slope = -2. Using point (2, 4): y - 4 = -2(x - 2) → y = -2x + 4 + 4 → y = -2x + 8."
    },
    {
      id: 4,
      question: "If two lines are perpendicular and one has slope 4/5, what is the slope of the other?",
      choices: [
        { id: "A", text: "4/5" },
        { id: "B", text: "-4/5" },
        { id: "C", text: "5/4" },
        { id: "D", text: "-5/4" }
      ],
      correctAnswer: "D",
      explanation: "Perpendicular slopes are negative reciprocals. The negative reciprocal of 4/5 is -5/4. You flip the fraction and change the sign."
    },
    {
      id: 5,
      question: "Line j passes through (0, 3) and (4, 1). A line perpendicular to j passes through (2, 5). What is the y-intercept of the perpendicular line?",
      choices: [
        { id: "A", text: "1" },
        { id: "B", text: "3" },
        { id: "C", text: "-1" },
        { id: "D", text: "5" }
      ],
      correctAnswer: "A",
      explanation: "Slope of j = (1-3)/(4-0) = -2/4 = -1/2. Perpendicular slope = 2. Using (2, 5): y - 5 = 2(x - 2) → y = 2x + 1. Y-intercept is 1."
    }
  ]
};
