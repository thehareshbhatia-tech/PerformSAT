// Practice questions for Systems module
// Questions are organized by SECTION (question type)

export const systemsQuestions = {
  // Section: Introduction
  "Introduction": [
    {
      id: 1,
      question: "A system of linear equations can have:",
      choices: [
        { id: "A", text: "Exactly one solution only" },
        { id: "B", text: "No solution or one solution only" },
        { id: "C", text: "No solution, one solution, or infinitely many solutions" },
        { id: "D", text: "Two solutions" }
      ],
      correctAnswer: "C",
      explanation: "A system of two linear equations can have no solution (parallel lines), exactly one solution (intersecting lines), or infinitely many solutions (same line)."
    },
    {
      id: 2,
      question: "If two lines intersect at exactly one point, the system is called:",
      choices: [
        { id: "A", text: "Inconsistent" },
        { id: "B", text: "Dependent" },
        { id: "C", text: "Independent" },
        { id: "D", text: "Parallel" }
      ],
      correctAnswer: "C",
      explanation: "When lines intersect at exactly one point, they are independent - each equation provides unique information."
    },
    {
      id: 3,
      question: "What does it mean graphically if a system has no solution?",
      choices: [
        { id: "A", text: "The lines intersect at one point" },
        { id: "B", text: "The lines are the same" },
        { id: "C", text: "The lines are parallel" },
        { id: "D", text: "The lines are perpendicular" }
      ],
      correctAnswer: "C",
      explanation: "No solution means the lines never intersect - they are parallel."
    },
    {
      id: 4,
      question: "The solution to a system of equations represents:",
      choices: [
        { id: "A", text: "The y-intercept of both lines" },
        { id: "B", text: "The slope of both lines" },
        { id: "C", text: "The point(s) that satisfy all equations" },
        { id: "D", text: "The x-intercept of the first line" }
      ],
      correctAnswer: "C",
      explanation: "A solution to a system is an ordered pair (x, y) that makes ALL equations true simultaneously."
    },
    {
      id: 5,
      question: "Is (2, 3) a solution to the system: x + y = 5 and 2x - y = 1?",
      choices: [
        { id: "A", text: "Yes" },
        { id: "B", text: "No, it only satisfies the first equation" },
        { id: "C", text: "No, it only satisfies the second equation" },
        { id: "D", text: "No, it satisfies neither equation" }
      ],
      correctAnswer: "A",
      explanation: "Check: x + y = 2 + 3 = 5 ✓ and 2x - y = 2(2) - 3 = 4 - 3 = 1 ✓. Both are satisfied."
    }
  ],

  // Section: Setting Up Systems
  "Setting Up Systems": [
    {
      id: 1,
      question: "Adult tickets cost $8 and child tickets cost $5. Total sales were $95 for 14 tickets. Which system represents this?",
      choices: [
        { id: "A", text: "a + c = 95, 8a + 5c = 14" },
        { id: "B", text: "a + c = 14, 8a + 5c = 95" },
        { id: "C", text: "8a + 5c = 14, a + c = 95" },
        { id: "D", text: "a + c = 14, a + c = 95" }
      ],
      correctAnswer: "B",
      explanation: "Let a = adult tickets, c = child tickets. Total tickets: a + c = 14. Total cost: 8a + 5c = 95."
    },
    {
      id: 2,
      question: "A store sells pens for $2 and notebooks for $5. Maria spent $29 on 8 items. If p = pens and n = notebooks, which system is correct?",
      choices: [
        { id: "A", text: "p + n = 29, 2p + 5n = 8" },
        { id: "B", text: "2p + 5n = 29, p + n = 8" },
        { id: "C", text: "p + n = 8, 2p + 5n = 29" },
        { id: "D", text: "5p + 2n = 29, p + n = 8" }
      ],
      correctAnswer: "C",
      explanation: "Total items: p + n = 8. Total cost: 2p + 5n = 29."
    },
    {
      id: 3,
      question: "The sum of two numbers is 20 and their difference is 6. Which system represents this?",
      choices: [
        { id: "A", text: "x + y = 20, x - y = 6" },
        { id: "B", text: "x + y = 6, x - y = 20" },
        { id: "C", text: "xy = 20, x/y = 6" },
        { id: "D", text: "x + y = 26, xy = 6" }
      ],
      correctAnswer: "A",
      explanation: "Sum: x + y = 20. Difference: x - y = 6 (assuming x > y)."
    },
    {
      id: 4,
      question: "A boat travels 30 miles downstream in 2 hours and 18 miles upstream in 3 hours. If b = boat speed and c = current speed, which equations are correct?",
      choices: [
        { id: "A", text: "b + c = 15, b - c = 6" },
        { id: "B", text: "b + c = 30, b - c = 18" },
        { id: "C", text: "2(b + c) = 30, 3(b - c) = 18" },
        { id: "D", text: "Both A and C" }
      ],
      correctAnswer: "D",
      explanation: "Downstream: rate = b + c, so 2(b + c) = 30 → b + c = 15. Upstream: rate = b - c, so 3(b - c) = 18 → b - c = 6."
    },
    {
      id: 5,
      question: "Coffee A costs $4/lb and Coffee B costs $7/lb. To make 10 lbs of a blend costing $5.50/lb, which system applies?",
      choices: [
        { id: "A", text: "a + b = 10, 4a + 7b = 55" },
        { id: "B", text: "a + b = 55, 4a + 7b = 10" },
        { id: "C", text: "a + b = 10, 4a + 7b = 5.50" },
        { id: "D", text: "4a + 7b = 10, a + b = 55" }
      ],
      correctAnswer: "A",
      explanation: "Total weight: a + b = 10. Total value: 4a + 7b = 10 × 5.50 = 55."
    }
  ],

  // Section: Substitution Method
  "Substitution Method": [
    {
      id: 1,
      question: "Solve using substitution: y = 2x and x + y = 9. What is x?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "3" },
        { id: "C", text: "6" },
        { id: "D", text: "9" }
      ],
      correctAnswer: "B",
      explanation: "Substitute y = 2x into x + y = 9: x + 2x = 9 → 3x = 9 → x = 3."
    },
    {
      id: 2,
      question: "Solve: x = 3y - 1 and 2x + y = 12. What is y?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "5" },
        { id: "C", text: "7" },
        { id: "D", text: "14" }
      ],
      correctAnswer: "A",
      explanation: "Substitute: 2(3y - 1) + y = 12 → 6y - 2 + y = 12 → 7y = 14 → y = 2."
    },
    {
      id: 3,
      question: "Which equation is best to solve first for substitution in: 3x + y = 10 and 2x - 3y = 1?",
      choices: [
        { id: "A", text: "Solve first equation for x" },
        { id: "B", text: "Solve first equation for y" },
        { id: "C", text: "Solve second equation for x" },
        { id: "D", text: "Either equation for either variable" }
      ],
      correctAnswer: "B",
      explanation: "Solve 3x + y = 10 for y gives y = 10 - 3x (coefficient of y is 1, so no fractions)."
    },
    {
      id: 4,
      question: "Solve: y = x + 4 and y = 3x - 2. What is the solution (x, y)?",
      choices: [
        { id: "A", text: "(3, 7)" },
        { id: "B", text: "(1, 5)" },
        { id: "C", text: "(2, 6)" },
        { id: "D", text: "(4, 8)" }
      ],
      correctAnswer: "A",
      explanation: "Set equal: x + 4 = 3x - 2 → 6 = 2x → x = 3. Then y = 3 + 4 = 7. Solution: (3, 7)."
    },
    {
      id: 5,
      question: "Using substitution on 2x - y = 7 and x + 2y = 1, what is x + y?",
      choices: [
        { id: "A", text: "-2" },
        { id: "B", text: "2" },
        { id: "C", text: "3" },
        { id: "D", text: "8" }
      ],
      correctAnswer: "B",
      explanation: "From second: x = 1 - 2y. Substitute: 2(1 - 2y) - y = 7 → 2 - 4y - y = 7 → -5y = 5 → y = -1. Then x = 1 - 2(-1) = 3. x + y = 3 + (-1) = 2."
    }
  ],

  // Section: Elimination Method
  "Elimination Method": [
    {
      id: 1,
      question: "Solve by elimination: x + y = 10 and x - y = 2. What is x?",
      choices: [
        { id: "A", text: "4" },
        { id: "B", text: "6" },
        { id: "C", text: "8" },
        { id: "D", text: "12" }
      ],
      correctAnswer: "B",
      explanation: "Add equations: 2x = 12, so x = 6."
    },
    {
      id: 2,
      question: "Solve: 3x + 2y = 12 and 3x - 2y = 0. What is y?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "3" },
        { id: "C", text: "4" },
        { id: "D", text: "6" }
      ],
      correctAnswer: "B",
      explanation: "Subtract second from first: 4y = 12, so y = 3."
    },
    {
      id: 3,
      question: "To eliminate x from 2x + 3y = 8 and 5x - 2y = 1, multiply the first equation by:",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "5" },
        { id: "C", text: "-5" },
        { id: "D", text: "5 and the second by 2" }
      ],
      correctAnswer: "B",
      explanation: "To eliminate x: multiply first by 5 and second by 2 (or first by -5 and second by 2) to get coefficients of ±10."
    },
    {
      id: 4,
      question: "Solve: 4x + y = 11 and 2x + 3y = 13. What is the solution?",
      choices: [
        { id: "A", text: "(2, 3)" },
        { id: "B", text: "(3, 2)" },
        { id: "C", text: "(1, 7)" },
        { id: "D", text: "(4, -5)" }
      ],
      correctAnswer: "A",
      explanation: "Multiply first by -3: -12x - 3y = -33. Add to second: -10x = -20, x = 2. Substitute: 4(2) + y = 11, y = 3."
    },
    {
      id: 5,
      question: "Using elimination on 2x + 5y = 24 and 3x + 5y = 29, what is 5x?",
      choices: [
        { id: "A", text: "5" },
        { id: "B", text: "10" },
        { id: "C", text: "25" },
        { id: "D", text: "53" }
      ],
      correctAnswer: "C",
      explanation: "Subtract first from second: x = 5. So 5x = 25."
    }
  ],

  // Section: DESMOS Method
  "DESMOS Method": [
    {
      id: 1,
      question: "When graphing a system in Desmos, the solution is found at:",
      choices: [
        { id: "A", text: "The y-intercepts" },
        { id: "B", text: "The x-intercepts" },
        { id: "C", text: "The intersection point(s)" },
        { id: "D", text: "The highest point" }
      ],
      correctAnswer: "C",
      explanation: "The solution to a system is where the graphs intersect - the point(s) that satisfy both equations."
    },
    {
      id: 2,
      question: "In Desmos, if two lines appear parallel, the system has:",
      choices: [
        { id: "A", text: "One solution" },
        { id: "B", text: "Two solutions" },
        { id: "C", text: "No solution" },
        { id: "D", text: "Infinitely many solutions" }
      ],
      correctAnswer: "C",
      explanation: "Parallel lines never intersect, so there is no point that satisfies both equations - no solution."
    },
    {
      id: 3,
      question: "If Desmos shows the lines overlapping completely, the system has:",
      choices: [
        { id: "A", text: "No solution" },
        { id: "B", text: "One solution" },
        { id: "C", text: "Two solutions" },
        { id: "D", text: "Infinitely many solutions" }
      ],
      correctAnswer: "D",
      explanation: "Overlapping lines are the same line - every point on the line is a solution, giving infinitely many solutions."
    },
    {
      id: 4,
      question: "When using Desmos for the SAT, it's best to:",
      choices: [
        { id: "A", text: "Graph only one equation" },
        { id: "B", text: "Type both equations and find their intersection" },
        { id: "C", text: "Guess and check values" },
        { id: "D", text: "Use only the substitution method" }
      ],
      correctAnswer: "B",
      explanation: "On the SAT, Desmos is built into the calculator. Type both equations and click on the intersection point to find the solution."
    },
    {
      id: 5,
      question: "A Desmos graph shows lines y = 2x + 1 and y = 2x - 3 never touching. This means:",
      choices: [
        { id: "A", text: "The solution is (0, 1)" },
        { id: "B", text: "The solution is (2, 1)" },
        { id: "C", text: "There are infinitely many solutions" },
        { id: "D", text: "The system has no solution" }
      ],
      correctAnswer: "D",
      explanation: "Both lines have slope 2 (parallel) but different y-intercepts, so they never intersect - no solution."
    }
  ],

  // Section: Infinite Solutions
  "Infinite Solutions": [
    {
      id: 1,
      question: "The system x + y = 5 and 2x + 2y = 10 has:",
      choices: [
        { id: "A", text: "No solution" },
        { id: "B", text: "One solution" },
        { id: "C", text: "Two solutions" },
        { id: "D", text: "Infinitely many solutions" }
      ],
      correctAnswer: "D",
      explanation: "The second equation is just 2 times the first (2x + 2y = 2(x + y) = 2(5) = 10). They're the same line - infinite solutions."
    },
    {
      id: 2,
      question: "For infinite solutions, the two equations must represent:",
      choices: [
        { id: "A", text: "Parallel lines" },
        { id: "B", text: "Perpendicular lines" },
        { id: "C", text: "The same line" },
        { id: "D", text: "Lines with different slopes" }
      ],
      correctAnswer: "C",
      explanation: "Infinite solutions means every point on one line is also on the other - they're the same line."
    },
    {
      id: 3,
      question: "For what value of k does 3x - 6y = 9 and x - 2y = k have infinite solutions?",
      choices: [
        { id: "A", text: "k = 3" },
        { id: "B", text: "k = 9" },
        { id: "C", text: "k = -3" },
        { id: "D", text: "k = 27" }
      ],
      correctAnswer: "A",
      explanation: "The first equation divided by 3 gives x - 2y = 3. For same line, second must also be x - 2y = 3, so k = 3."
    },
    {
      id: 4,
      question: "If using elimination gives 0 = 0, the system has:",
      choices: [
        { id: "A", text: "No solution" },
        { id: "B", text: "Exactly one solution" },
        { id: "C", text: "Infinitely many solutions" },
        { id: "D", text: "An error" }
      ],
      correctAnswer: "C",
      explanation: "0 = 0 is always true, meaning the equations are dependent - infinite solutions."
    },
    {
      id: 5,
      question: "Which system has infinitely many solutions?",
      choices: [
        { id: "A", text: "y = 2x + 3, y = 2x - 1" },
        { id: "B", text: "y = 2x + 3, 2y = 4x + 6" },
        { id: "C", text: "y = 2x + 3, y = 3x + 2" },
        { id: "D", text: "y = 2x + 3, y = -2x + 3" }
      ],
      correctAnswer: "B",
      explanation: "In B, divide second by 2: y = 2x + 3, same as first equation - infinitely many solutions."
    }
  ]
};
