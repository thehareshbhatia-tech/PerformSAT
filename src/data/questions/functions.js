// Practice questions for Functions module
// Questions are organized by SECTION (question type)

export const functionsQuestions = {
  // Section: Fundamentals
  "Fundamentals": [
    {
      id: 1,
      difficulty: "easy",
      question: "If f(x) = 3x - 7, what is f(4)?",
      choices: [
        { id: "A", text: "5" },
        { id: "B", text: "12" },
        { id: "C", text: "-4" },
        { id: "D", text: "19" }
      ],
      correctAnswer: "A",
      hint: "Replace every x in the function with 4, then simplify using order of operations.",
      explanation: "Substitute x = 4 into f(x) = 3x - 7: f(4) = 3(4) - 7 = 12 - 7 = 5."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "For the function g(x) = x² + 2x, what is g(-3)?",
      choices: [
        { id: "A", text: "3" },
        { id: "B", text: "15" },
        { id: "C", text: "-3" },
        { id: "D", text: "9" }
      ],
      correctAnswer: "A",
      hint: "Substitute -3 for x and remember that squaring a negative number gives a positive result.",
      explanation: "g(-3) = (-3)² + 2(-3) = 9 - 6 = 3."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "If f(x) = 2x + 1 and f(a) = 11, what is the value of a?",
      choices: [
        { id: "A", text: "5" },
        { id: "B", text: "6" },
        { id: "C", text: "10" },
        { id: "D", text: "4" }
      ],
      correctAnswer: "A",
      hint: "Set up an equation by replacing f(a) with 2a + 1, then solve for a.",
      explanation: "Set f(a) = 11: 2a + 1 = 11. Solving: 2a = 10, a = 5."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Which of the following represents a function?",
      choices: [
        { id: "A", text: "{(1, 2), (1, 3), (2, 4)}" },
        { id: "B", text: "{(1, 2), (2, 2), (3, 4)}" },
        { id: "C", text: "x² + y² = 4" },
        { id: "D", text: "y² = x" }
      ],
      correctAnswer: "B",
      hint: "A function cannot have the same input (x-value) paired with different outputs. Check which option has unique x-values.",
      explanation: "A function has exactly one output for each input. Option B is the only one where each x-value maps to exactly one y-value."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "What is the domain of f(x) = 1/(x - 3)?",
      choices: [
        { id: "A", text: "All real numbers" },
        { id: "B", text: "All real numbers except 3" },
        { id: "C", text: "All real numbers except 0" },
        { id: "D", text: "x > 3" }
      ],
      correctAnswer: "B",
      hint: "The domain excludes any x-value that makes the denominator equal to zero. Find what value of x causes division by zero.",
      explanation: "The function is undefined when the denominator equals zero: x - 3 = 0, so x = 3. Domain: all real numbers except 3."
    }
  ],

  // Section: Simple Function Problems
  "Simple Function Problems": [
    {
      id: 1,
      difficulty: "easy",
      question: "If f(x) = x² - 4 and g(x) = x + 2, what is f(g(1))?",
      choices: [
        { id: "A", text: "5" },
        { id: "B", text: "9" },
        { id: "C", text: "-3" },
        { id: "D", text: "3" }
      ],
      correctAnswer: "A",
      hint: "Work from the inside out: first calculate g(1), then use that result as the input for f.",
      explanation: "First find g(1) = 1 + 2 = 3. Then f(3) = 3² - 4 = 9 - 4 = 5."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If h(x) = 5x - 2, what is h(x + 1)?",
      choices: [
        { id: "A", text: "5x - 1" },
        { id: "B", text: "5x + 3" },
        { id: "C", text: "5x + 1" },
        { id: "D", text: "5x - 3" }
      ],
      correctAnswer: "B",
      hint: "Replace every x in the formula with (x + 1), using parentheses, then distribute and simplify.",
      explanation: "Replace x with (x + 1): h(x + 1) = 5(x + 1) - 2 = 5x + 5 - 2 = 5x + 3."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "If f(x) = 2x and g(x) = x + 3, what is f(x) + g(x)?",
      choices: [
        { id: "A", text: "2x² + 3" },
        { id: "B", text: "3x + 3" },
        { id: "C", text: "2x + 3" },
        { id: "D", text: "5x" }
      ],
      correctAnswer: "B",
      hint: "Add the two function expressions together and combine like terms.",
      explanation: "f(x) + g(x) = 2x + (x + 3) = 3x + 3."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "For f(x) = x² - 1, what is f(2) - f(1)?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "3" },
        { id: "C", text: "1" },
        { id: "D", text: "4" }
      ],
      correctAnswer: "B",
      hint: "Calculate f(2) and f(1) separately, then subtract the second result from the first.",
      explanation: "f(2) = 2² - 1 = 3 and f(1) = 1² - 1 = 0. So f(2) - f(1) = 3 - 0 = 3."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "If f(x) = 4x + k and f(2) = 15, what is the value of k?",
      choices: [
        { id: "A", text: "7" },
        { id: "B", text: "8" },
        { id: "C", text: "11" },
        { id: "D", text: "23" }
      ],
      correctAnswer: "A",
      hint: "Substitute x = 2 into the function, set it equal to 15, and solve for k.",
      explanation: "f(2) = 4(2) + k = 15. So 8 + k = 15, k = 7."
    }
  ],

  // Section: Complex Function Problems
  "Complex Function Problems": [
    {
      id: 1,
      difficulty: "easy",
      question: "If f(x) = 3x - 1, what is f(f(2))?",
      choices: [
        { id: "A", text: "5" },
        { id: "B", text: "8" },
        { id: "C", text: "14" },
        { id: "D", text: "17" }
      ],
      correctAnswer: "C",
      hint: "This is a nested function. First find f(2), then plug that answer back into f again.",
      explanation: "f(2) = 3(2) - 1 = 5. Then f(f(2)) = f(5) = 3(5) - 1 = 14."
    },
    {
      id: 2,
      difficulty: "easy",
      question: "If f(x) = x + 2 and g(x) = x², what is g(f(x))?",
      choices: [
        { id: "A", text: "x² + 2" },
        { id: "B", text: "(x + 2)²" },
        { id: "C", text: "x² + 4" },
        { id: "D", text: "x² + 4x + 4" }
      ],
      correctAnswer: "B",
      hint: "For composition g(f(x)), replace the input of g with the entire expression f(x). Think about what gets squared.",
      explanation: "g(f(x)) = g(x + 2) = (x + 2)². This can also be expanded to x² + 4x + 4, making both B and D equivalent, but B is the composed form."
    },
    {
      id: 3,
      difficulty: "medium",
      question: "If f(x) = 2x + 3 and f(g(x)) = 4x + 7, what is g(x)?",
      choices: [
        { id: "A", text: "2x + 2" },
        { id: "B", text: "2x + 4" },
        { id: "C", text: "x + 2" },
        { id: "D", text: "2x + 5" }
      ],
      correctAnswer: "A",
      hint: "Write f(g(x)) by substituting g(x) into f, then compare coefficients with 4x + 7 to find g(x).",
      explanation: "f(g(x)) = 2(g(x)) + 3 = 4x + 7. So 2(g(x)) = 4x + 4, which means g(x) = 2x + 2."
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The graph of y = f(x) passes through point (2, 5). If g(x) = f(x) + 3, what point must be on the graph of g?",
      choices: [
        { id: "A", text: "(2, 5)" },
        { id: "B", text: "(2, 8)" },
        { id: "C", text: "(5, 5)" },
        { id: "D", text: "(5, 8)" }
      ],
      correctAnswer: "B",
      hint: "Adding 3 to a function shifts all y-values up by 3. The x-coordinate stays the same.",
      explanation: "If f(2) = 5, then g(2) = f(2) + 3 = 5 + 3 = 8. So (2, 8) is on g."
    },
    {
      id: 5,
      difficulty: "hard",
      question: "If f(x) = x² and f(a + 1) - f(a - 1) = 8, what is the value of a?",
      choices: [
        { id: "A", text: "1" },
        { id: "B", text: "2" },
        { id: "C", text: "3" },
        { id: "D", text: "4" }
      ],
      correctAnswer: "B",
      hint: "Expand (a + 1)² and (a - 1)² using FOIL, then subtract and simplify. Many terms will cancel.",
      explanation: "f(a+1) - f(a-1) = (a+1)² - (a-1)² = (a²+2a+1) - (a²-2a+1) = 4a = 8. So a = 2."
    }
  ]
};
