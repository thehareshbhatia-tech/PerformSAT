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
      hint: "Think about all the ways two lines can relate to each other on a graph. Can they cross, run parallel, or overlap?",
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
      hint: "When each equation gives you unique information that the other doesn't, what does that say about their relationship?",
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
      hint: "If there's no solution, the lines never share a common point. What kind of lines never meet?",
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
      hint: "What must be true about a solution? It needs to work when plugged into every equation in the system.",
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
      hint: "Substitute x = 2 and y = 3 into both equations separately. Does each equation become a true statement?",
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
      hint: "Write one equation for the total number of tickets, and another for the total money. Make sure the units match on each side.",
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
      hint: "One equation should count items, the other should count dollars. Make sure prices multiply with the correct variables.",
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
      hint: "Translate 'sum' and 'difference' directly into mathematical operations. Sum means add, difference means subtract.",
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
      hint: "Downstream, the current helps (add speeds). Upstream, the current slows you down (subtract). Use distance = rate times time.",
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
      hint: "The total weight is 10 lbs. For the cost equation, calculate the total value of the blend: 10 lbs times $5.50/lb.",
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
      hint: "Since y already equals 2x, replace y in the second equation with 2x, then solve for x.",
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
      hint: "Replace x with (3y - 1) in the second equation, then simplify and solve for y.",
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
      hint: "Look for a variable with a coefficient of 1 or -1. Solving for that variable avoids fractions.",
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
      hint: "Both equations equal y, so set them equal to each other: x + 4 = 3x - 2. Solve for x first.",
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
      hint: "Solve the second equation for x (since its coefficient is 1), substitute into the first, then find both values.",
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
      hint: "Notice the y terms have opposite signs. Adding the equations will eliminate y.",
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
      hint: "The x coefficients are the same. Subtract one equation from the other to eliminate x.",
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
      hint: "To eliminate x, you need both equations to have the same x coefficient. Find the LCM of 2 and 5.",
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
      hint: "Multiply the first equation by -3 to make the y coefficients opposites, then add the equations.",
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
      hint: "The y coefficients are already equal. Subtract the equations to find x directly, then multiply by 5.",
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
      hint: "The solution must satisfy both equations. On a graph, where do both lines share the same point?",
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
      hint: "Parallel lines have the same slope but different y-intercepts. Will they ever cross?",
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
      hint: "If the lines overlap completely, they are the same line. How many points do they share?",
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
      hint: "Desmos can find intersection points automatically. What's the most efficient way to use this feature?",
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
      hint: "Compare the slopes and y-intercepts of both lines. What does it mean when lines never touch?",
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
      hint: "Try dividing the second equation by 2. What do you notice about the two equations?",
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
      hint: "If every point that satisfies one equation also satisfies the other, what must be true about the lines?",
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
      hint: "Divide the first equation by 3 to put it in the same form as the second. What should k equal for them to be identical?",
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
      hint: "Is 0 = 0 always true, never true, or sometimes true? What does that tell you about the equations?",
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
      hint: "Simplify each system to see if both equations reduce to the same line. Divide or multiply to compare.",
      explanation: "In B, divide second by 2: y = 2x + 3, same as first equation - infinitely many solutions."
    }
  ]
};
