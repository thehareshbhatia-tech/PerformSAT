// Practice Test 3 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions mirror Practice Test 3 PDF with same concepts, different contexts/numbers

export const practiceTest3 = {
  id: "practice-test-3",
  title: "Practice Test 3",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35, // minutes
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
        // Question 1: System with no solution - find constant p (like PDF Q1)
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In the given system of equations, p is a constant. If the system has no solution, what is the value of p?",
          questionFormula: {
            lines: [
              "3x - 4y = 8",
              "px + 8y + 6 = 0"
            ]
          },
          choices: [
            { id: "A", text: "-6" },
            { id: "B", text: "-2" },
            { id: "C", text: "2" },
            { id: "D", text: "6" }
          ],
          correctAnswer: "A",
          explanation: "For no solution, lines must be parallel (same slope, different y-intercepts). First equation: y = (3/4)x - 2, slope = 3/4. Second equation: y = (-p/8)x - 6/8, slope = -p/8. For parallel lines: -p/8 = 3/4, so p = -6.",
          skills: ["systems-of-equations", "parallel-lines"]
        },

        // Question 2: Factoring expression m³n² + m³n (like PDF Q2)
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which expression is equivalent to m³n² + m³n?",
          choices: [
            { id: "A", text: "m³n(n)" },
            { id: "B", text: "m⁶n³" },
            { id: "C", text: "2m³n³" },
            { id: "D", text: "m³n(n + 1)" }
          ],
          correctAnswer: "D",
          explanation: "Factor out the GCF m³n: m³n² + m³n = m³n(n) + m³n(1) = m³n(n + 1).",
          skills: ["factoring", "polynomial-operations"]
        },

        // Question 3: Right triangle - Pythagorean theorem (like PDF Q3)
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "In right triangle ABC, angle B has a measure of 90°, the longest side of the triangle is 61 centimeters, and the shortest side is 11 centimeters. What is the length of the third side of the triangle, in centimeters?",
          choices: [
            { id: "A", text: "40" },
            { id: "B", text: "59" },
            { id: "C", text: "60" },
            { id: "D", text: "62" }
          ],
          correctAnswer: "C",
          explanation: "In a right triangle, the longest side is the hypotenuse. Using Pythagorean theorem: a² + b² = c². 11² + b² = 61². 121 + b² = 3721. b² = 3600. b = 60.",
          skills: ["pythagorean-theorem", "right-triangles"]
        },

        // Question 4: Simple linear equation (3/2)x = 48 (like PDF Q4)
        {
          id: 4,
          type: "fill-in",
          difficulty: "easy",
          question: "If (3/2)x = 48, what is the value of x?",
          correctAnswer: 32,
          explanation: "Multiply both sides by 2/3: x = 48 × (2/3) = 96/3 = 32.",
          skills: ["solving-equations", "fractions"]
        },

        // Question 5: Mean of data set (like PDF Q5)
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Data set A: 6.5, 12.1, 10.5, 4.75, 9.9, 7.25\n\nWhat is equivalent to the mean of data set A?",
          choices: [
            { id: "A", text: "8⅓" },
            { id: "B", text: "8½" },
            { id: "C", text: "8⅔" },
            { id: "D", text: "10⅕" }
          ],
          correctAnswer: "B",
          explanation: "Sum = 6.5 + 12.1 + 10.5 + 4.75 + 9.9 + 7.25 = 51. Mean = 51 ÷ 6 = 8.5 = 8½.",
          skills: ["mean-median-mode", "statistics"]
        },

        // Question 6: Function evaluation h(x) = 6x + 2 - 3x + 5 (like PDF Q6)
        {
          id: 6,
          type: "fill-in",
          difficulty: "easy",
          question: "The function h is defined above. What is the value of x when h(x) = 19?",
          questionFormula: {
            equation: "h(x) = 6x + 2 - 3x + 5"
          },
          correctAnswer: 4,
          explanation: "Simplify h(x): h(x) = 6x - 3x + 2 + 5 = 3x + 7. Set equal to 19: 3x + 7 = 19. 3x = 12. x = 4.",
          skills: ["function-evaluation", "solving-equations"]
        },

        // Question 7: Word problem - ticket prices (like PDF Q7)
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A movie theater sells child tickets for 8 dollars and adult tickets for 11 dollars. Which of the following represents the amount of money, in dollars, the theater makes if they sell c child tickets and a adult tickets?",
          choices: [
            { id: "A", text: "9.50(c + a)" },
            { id: "B", text: "11c + 8a" },
            { id: "C", text: "8c + 11a" },
            { id: "D", text: "(8 + 11)(c + a)" }
          ],
          correctAnswer: "C",
          explanation: "Revenue = (price per child ticket × number of child tickets) + (price per adult ticket × number of adult tickets) = 8c + 11a.",
          skills: ["linear-expressions", "word-problems"]
        },

        // Question 8: Radical equation √(x² - 64) = 6 (like PDF Q8)
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is a solution to the given equation?\n\n√(x² - 64) = 6",
          choices: [
            { id: "A", text: "6" },
            { id: "B", text: "8" },
            { id: "C", text: "√70" },
            { id: "D", text: "10" }
          ],
          correctAnswer: "D",
          explanation: "Square both sides: x² - 64 = 36. x² = 100. x = ±10. Since we need a positive answer from the options, x = 10.",
          skills: ["radical-equations", "solving-equations"]
        },

        // Question 9: Budget word problem (like PDF Q9)
        {
          id: 9,
          type: "fill-in",
          difficulty: "medium",
          question: "Tiffany is buying pizzas and soda for a party. She has $75 to spend. Pizzas cost $8.25 each and soda costs $2.25 per bottle. If she buys 7 pizzas, what is the maximum number of bottles of soda she can purchase?",
          correctAnswer: 7,
          explanation: "Cost of 7 pizzas = 7 × $8.25 = $57.75. Remaining = $75 - $57.75 = $17.25. Max bottles = $17.25 ÷ $2.25 = 7.67, so 7 bottles.",
          skills: ["word-problems", "linear-inequalities"]
        },

        // Question 10: Finding x-intercept from two points (like PDF Q10)
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If f(3) = -1 and f(4) = -3, what is the x-intercept for the line represented by the function f(x)?",
          choices: [
            { id: "A", text: "-2" },
            { id: "B", text: "2/5" },
            { id: "C", text: "2.5" },
            { id: "D", text: "5" }
          ],
          correctAnswer: "C",
          explanation: "Slope = (-3 - (-1))/(4 - 3) = -2/1 = -2. Using point-slope: y - (-1) = -2(x - 3). y + 1 = -2x + 6. y = -2x + 5. For x-intercept, set y = 0: 0 = -2x + 5. x = 2.5.",
          skills: ["linear-functions", "x-intercept"]
        },

        // Question 11: Expanding expression 3(x+5)² - 2(x-5)² + 2x (like PDF Q11)
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which expression is equivalent to 3(x + 5)² - 2(x - 5)² + 2x?",
          choices: [
            { id: "A", text: "x² - 2x - 25" },
            { id: "B", text: "x² + x + 125" },
            { id: "C", text: "x² + 52x + 25" },
            { id: "D", text: "3x² + 52x + 25" }
          ],
          correctAnswer: "C",
          explanation: "Expand: 3(x² + 10x + 25) - 2(x² - 10x + 25) + 2x = 3x² + 30x + 75 - 2x² + 20x - 50 + 2x = x² + 52x + 25.",
          skills: ["polynomial-expansion", "combining-like-terms"]
        },

        // Question 12: Ratio simplification 3x/4y = 18, find 9x/12y (like PDF Q12)
        {
          id: 12,
          type: "fill-in",
          difficulty: "medium",
          question: "If (3x)/(4y) is equal to 18, what is the value of (9x)/(12y)?",
          correctAnswer: 18,
          explanation: "(9x)/(12y) = (3 × 3x)/(3 × 4y) = (3x)/(4y) = 18. The ratio simplifies to the same value.",
          skills: ["ratios", "algebraic-expressions"]
        },

        // Question 13: Absolute value equation 3|x - 4| = 6 (like PDF Q13)
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "What is one possible positive solution to the given equation?\n\n3|x - 4| = 6",
          correctAnswer: 6,
          acceptedAnswers: [2, 6],
          explanation: "|x - 4| = 2. So x - 4 = 2 or x - 4 = -2. x = 6 or x = 2. Both are positive solutions.",
          skills: ["absolute-value-equations"]
        },

        // Question 14: Parabola equation from graph (like PDF Q14)
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The graph shows a parabola with vertex at (3, 10) opening downward and passing through approximately (0, -8). What is the equation of the graph?",
          diagram: {
            type: "parabola",
            description: "Downward-opening parabola with vertex at (3, 10), passing through points near (-10, -10) and (10, -10)"
          },
          choices: [
            { id: "A", text: "y = -2(x - 3)² + 10" },
            { id: "B", text: "y = -2(x + 3)² + 10" },
            { id: "C", text: "y = 2(x - 3)² + 10" },
            { id: "D", text: "y = 2(x + 3)² + 10" }
          ],
          correctAnswer: "A",
          explanation: "Vertex form is y = a(x - h)² + k. Vertex at (3, 10) gives y = a(x - 3)² + 10. Since parabola opens downward, a < 0. Testing with another point confirms a = -2.",
          skills: ["quadratic-functions", "vertex-form"]
        },

        // Question 15: Exponential x-intercept x = 3^(y-1) + 5/3 (like PDF Q15)
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "What is the x-intercept of the given equation?\n\nx = 3^(y-1) + 5/3",
          choices: [
            { id: "A", text: "1/3" },
            { id: "B", text: "5/3" },
            { id: "C", text: "2" },
            { id: "D", text: "3" }
          ],
          correctAnswer: "C",
          explanation: "The x-intercept occurs when y = 0. x = 3^(0-1) + 5/3 = 3^(-1) + 5/3 = 1/3 + 5/3 = 6/3 = 2.",
          skills: ["exponential-functions", "intercepts"]
        },

        // Question 16: Survey with margin of error (like PDF Q16)
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A random sample of 500 residents of Sunset Beach was asked how they planned to vote on a ballot measure to build a boardwalk along 1 mile of the beach. The results are shown in the table. The margin of error associated with this sample is ±3.5%.",
          questionTable: {
            headers: ["Response", "Percentage"],
            rows: [
              ["Yes, the boardwalk should be built.", "52.1%"],
              ["No, the boardwalk should not be built.", "46.8%"],
              ["Not sure", "1.1%"]
            ]
          },
          questionContinued: "Based on the results, which of the following statements must be true?",
          choices: [
            { id: "A", text: "The ballot measure will pass with more than 50% of the vote, but the exact percentage cannot be predicted." },
            { id: "B", text: "The percentage who will vote yes is at least 51%." },
            { id: "C", text: "The percentage of \"No\" votes expected is between 45.7% and 47.9%." },
            { id: "D", text: "The results don't provide sufficient evidence to know whether the ballot measure will pass or fail." }
          ],
          correctAnswer: "D",
          explanation: "With 52.1% ± 3.5%, the yes votes could range from 48.6% to 55.6%. Since this range includes values below 50%, we cannot be certain the measure will pass.",
          skills: ["statistics", "margin-of-error"]
        },

        // Question 17: Percent change problem (like PDF Q17)
        {
          id: 17,
          type: "fill-in",
          difficulty: "medium",
          question: "The price of oil increased by 20% at the beginning of May. Two weeks after the initial increase, an economic policy was put in place that reduced the price of oil by 14%. What is the overall percentage change in the oil?",
          correctAnswer: 3.2,
          acceptedAnswers: [3.2, "3.2"],
          explanation: "Start with 100. After 20% increase: 100 × 1.20 = 120. After 14% decrease: 120 × 0.86 = 103.2. Overall change = 3.2%.",
          skills: ["percent-change", "percentages"]
        },

        // Question 18: Arc length with radians (like PDF Q18)
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "medium",
          question: "What is the length of the minor arc AB, given that the diameter of the circle is 12 and the measure of the angle of sector AOB is 72°?",
          diagram: {
            type: "circle-sector",
            description: "Circle with center O, radius to points A and B forming a 72° angle"
          },
          choices: [
            { id: "A", text: "π/6" },
            { id: "B", text: "2.4π" },
            { id: "C", text: "12π" },
            { id: "D", text: "28.8π" }
          ],
          correctAnswer: "B",
          explanation: "Radius = 12/2 = 6. Arc length = (θ/360°) × 2πr = (72/360) × 2π(6) = (1/5) × 12π = 2.4π.",
          skills: ["arc-length", "circles"]
        },

        // Question 19: Rearranging formula v = √(d/ab) for a (like PDF Q19)
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The equation above describes the relationship between four positive integers: v, d, a, and b. Which equation correctly defines a in terms of v, d, and b?",
          questionFormula: {
            equation: "v = √(d/(ab))"
          },
          choices: [
            { id: "A", text: "a = v² - bd" },
            { id: "B", text: "a = bd - v²" },
            { id: "C", text: "a = d/(bv²)" },
            { id: "D", text: "a = bv²/d" }
          ],
          correctAnswer: "C",
          explanation: "Square both sides: v² = d/(ab). Multiply by ab: abv² = d. Solve for a: a = d/(bv²).",
          skills: ["formula-rearrangement", "algebraic-manipulation"]
        },

        // Question 20: Square inscribed in circle (like PDF Q20)
        {
          id: 20,
          type: "fill-in",
          difficulty: "hard",
          question: "In the figure shown, square ABCD is circumscribed by Circle O. The diameter of the circle is 18 inches. What is the area of the square, in square inches?",
          diagram: {
            type: "square-in-circle",
            description: "Square ABCD inscribed in circle O with center marked"
          },
          correctAnswer: 162,
          explanation: "The diagonal of the square equals the diameter of the circle = 18. For a square, diagonal = s√2, where s is side length. So s√2 = 18, s = 18/√2 = 9√2. Area = s² = (9√2)² = 81 × 2 = 162.",
          skills: ["geometry", "circles", "squares"]
        },

        // Question 21: Triangle angles problem (like PDF Q21)
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "In the given figure, angles measuring 18°, t°, 68°, and 27° are shown. What is the value of t?",
          diagram: {
            type: "intersecting-lines",
            description: "Two lines intersecting with angles 18°, t°, 68°, and 27° marked"
          },
          correctAnswer: 113,
          explanation: "The exterior angle of a triangle equals the sum of the two non-adjacent interior angles. Or using supplementary/vertical angles: t = 180 - 18 - 68 + 27 = 113° (depends on configuration). Based on the diagram, t = 180 - 67 = 113°.",
          skills: ["angle-relationships", "geometry"]
        },

        // Question 22: Perpendicular line y-intercept (like PDF Q22)
        {
          id: 22,
          type: "fill-in",
          difficulty: "hard",
          question: "The graph of an equation k is shown above. Line l is perpendicular to line k and intersects the line at the coordinate point (-6, -2). The y-intercept of line l is at the coordinate point (0, b). What is the value of b?",
          diagram: {
            type: "linear-graph",
            description: "Line k passing through points showing positive slope"
          },
          correctAnswer: -11,
          explanation: "From the graph, line k has slope = 2/3 (rise over run). Perpendicular slope = -3/2. Line l: y - (-2) = -3/2(x - (-6)). y + 2 = -3/2(x + 6). At x = 0: y + 2 = -3/2(6) = -9. y = -11. So b = -11.",
          skills: ["perpendicular-lines", "linear-equations"]
        }
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
        // Question 1: Simple linear equation 2(x + 4) = 18 (like PDF M2 Q1)
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Given that 2(x + 4) = 18, what is the value of x + 6?",
          choices: [
            { id: "A", text: "-4" },
            { id: "B", text: "5" },
            { id: "C", text: "9" },
            { id: "D", text: "11" }
          ],
          correctAnswer: "D",
          explanation: "2(x + 4) = 18. x + 4 = 9. x = 5. Therefore, x + 6 = 5 + 6 = 11.",
          skills: ["solving-equations"]
        },

        // Question 2: Inequality solution 3x + 2 < -5(x + 6) (like PDF M2 Q2)
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following values is a solution to the given inequality?\n\n3x + 2 < -5(x + 6)",
          choices: [
            { id: "A", text: "-5" },
            { id: "B", text: "-4" },
            { id: "C", text: "3" },
            { id: "D", text: "4" }
          ],
          correctAnswer: "A",
          explanation: "3x + 2 < -5x - 30. 8x < -32. x < -4. Only -5 is less than -4.",
          skills: ["linear-inequalities", "solving-inequalities"]
        },

        // Question 3: Bar graph - mean calculation (like PDF M2 Q3)
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The bar graph shows how many hours the air conditioner was on from Monday to Friday in a given week. What is the mean number of hours the air conditioner was on during this period?",
          diagram: {
            type: "bar-graph",
            description: "Bar graph showing: Monday=10, Tuesday=12, Wednesday=15, Thursday=18, Friday=15 hours"
          },
          choices: [
            { id: "A", text: "8" },
            { id: "B", text: "10" },
            { id: "C", text: "12" },
            { id: "D", text: "14" }
          ],
          correctAnswer: "D",
          explanation: "Sum = 10 + 12 + 15 + 18 + 15 = 70. Mean = 70 ÷ 5 = 14 hours.",
          skills: ["mean-median-mode", "data-interpretation"]
        },

        // Question 4: Expanding -2(x + 3)² + 6 to ax² + bx + c (like PDF M2 Q4)
        {
          id: 4,
          type: "fill-in",
          difficulty: "medium",
          question: "The expression -2(x + 3)² + 6 is equivalent to ax² + bx + c, where a < 0 and b < 0. What is the value of c?",
          correctAnswer: -12,
          explanation: "-2(x + 3)² + 6 = -2(x² + 6x + 9) + 6 = -2x² - 12x - 18 + 6 = -2x² - 12x - 12. So c = -12.",
          skills: ["polynomial-expansion", "vertex-form"]
        },

        // Question 5: Perpendicular line slope (like PDF M2 Q5)
        {
          id: 5,
          type: "fill-in",
          difficulty: "medium",
          question: "What is the value of the slope of a line perpendicular to the line 5x - 6y + 30 = 0?",
          correctAnswer: "-6/5",
          acceptedAnswers: ["-6/5", -1.2, "-1.2"],
          explanation: "Rewrite in slope-intercept form: -6y = -5x - 30. y = (5/6)x + 5. Slope = 5/6. Perpendicular slope = -6/5.",
          skills: ["perpendicular-lines", "slope"]
        },

        // Question 6: Quadratic sum of roots 3x² + 9x - 27 = 0 (like PDF M2 Q6)
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If m and n are solutions to the given equation, what is the value of m + n?",
          questionFormula: {
            equation: "3x² + 9x - 27 = 0"
          },
          choices: [
            { id: "A", text: "-9" },
            { id: "B", text: "-3" },
            { id: "C", text: "3" },
            { id: "D", text: "9" }
          ],
          correctAnswer: "B",
          explanation: "For a quadratic ax² + bx + c = 0, sum of roots = -b/a. Here, m + n = -9/3 = -3.",
          skills: ["quadratic-equations", "sum-of-roots"]
        },

        // Question 7: Circle equation - point on circle (like PDF M2 Q7)
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The graph of (x - 3)² + y² + 8y = 84 is a circle in the xy-plane. Which of the following coordinates lie on the circle?",
          choices: [
            { id: "A", text: "(1, 7)" },
            { id: "B", text: "(-2, 5)" },
            { id: "C", text: "(-3, 4)" },
            { id: "D", text: "(3, -6)" }
          ],
          correctAnswer: "C",
          explanation: "Complete the square: (x - 3)² + (y² + 8y + 16) = 84 + 16. (x - 3)² + (y + 4)² = 100. Check C: (-3 - 3)² + (4 + 4)² = 36 + 64 = 100. ✓",
          skills: ["circle-equations", "completing-the-square"]
        },

        // Question 8: Percent remaining - stockpile problem (like PDF M2 Q8)
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "At the start of the winter, the US stockpile of corn was 5 billion bushels. Two months later, p% of the stockpile had been used. Which expression best represents the number, in billions, of bushels of corn remaining in the US stockpile at the end of those two months?",
          choices: [
            { id: "A", text: "2(5)((100 - p)/100)" },
            { id: "B", text: "5((100 - p)/100)" },
            { id: "C", text: "(p/100)" },
            { id: "D", text: "2(5)(100 - p)" }
          ],
          correctAnswer: "B",
          explanation: "If p% was used, then (100 - p)% remains. Remaining = 5 × (100 - p)/100.",
          skills: ["percentages", "algebraic-expressions"]
        },

        // Question 9: Exponential growth interpretation (like PDF M2 Q9)
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The equation P(y) = 37(1.1)^y gives the estimated annual profit, in thousands of dollars, at a pottery studio, where y is the number of years since the studio moved to a new location. Which of the following is the best interpretation of the number 37 in this context?",
          choices: [
            { id: "A", text: "The estimated annual profit, in thousands of dollars, when the studio moved to the new location" },
            { id: "B", text: "The increase in the estimated annual profit, in thousands of dollars, each year" },
            { id: "C", text: "The number of years since the studio moved to the new location" },
            { id: "D", text: "The percent increase in the estimated annual profit each year" }
          ],
          correctAnswer: "A",
          explanation: "In P(y) = 37(1.1)^y, when y = 0 (the year the studio moved), P(0) = 37(1.1)^0 = 37. So 37 is the initial profit when they moved.",
          skills: ["exponential-functions", "function-interpretation"]
        },

        // Question 10: Isosceles triangle angles (like PDF M2 Q10)
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Triangle JKL is an isosceles triangle. The measure of angle J is 30°. If JL is the longest side of the triangle, what is the measure of angle K?",
          choices: [
            { id: "A", text: "30" },
            { id: "B", text: "75" },
            { id: "C", text: "120" },
            { id: "D", text: "150" }
          ],
          correctAnswer: "C",
          explanation: "In an isosceles triangle, if JL is the longest side, the angle opposite to it (K) is the largest. With J = 30°, if the triangle is isosceles with JL longest, then J = L = 30°. So K = 180° - 30° - 30° = 120°.",
          skills: ["triangle-angles", "isosceles-triangles"]
        },

        // Question 11: Function evaluation f(2x) = 9x - 7 (like PDF M2 Q11)
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If f(2x) = 9x - 7, what is the value of f(6)?",
          choices: [
            { id: "A", text: "11" },
            { id: "B", text: "20" },
            { id: "C", text: "47" },
            { id: "D", text: "101" }
          ],
          correctAnswer: "B",
          explanation: "We need f(6), so set 2x = 6, which gives x = 3. f(6) = f(2×3) = 9(3) - 7 = 27 - 7 = 20.",
          skills: ["function-evaluation", "algebraic-manipulation"]
        },

        // Question 12: System with no solution (like PDF M2 Q12)
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "How many solutions does the given system of equations have?",
          questionFormula: {
            lines: [
              "3x - 4y = 16",
              "-6x = -8y + 32"
            ]
          },
          choices: [
            { id: "A", text: "Exactly one" },
            { id: "B", text: "Exactly two" },
            { id: "C", text: "Infinitely many" },
            { id: "D", text: "Zero" }
          ],
          correctAnswer: "D",
          explanation: "Rewrite second equation: -6x + 8y = 32, or 6x - 8y = -32, or 3x - 4y = -16. But first equation says 3x - 4y = 16. These are parallel lines (same slope, different intercepts), so zero solutions.",
          skills: ["systems-of-equations", "parallel-lines"]
        },

        // Question 13: System of equations - find xy (like PDF M2 Q13)
        {
          id: 13,
          type: "fill-in",
          difficulty: "hard",
          question: "If (5/x) = (2/y) and (4/x) - (2/y) = -1/5, what is the value of xy?",
          correctAnswer: 10,
          explanation: "From first equation: 5y = 2x, so y = 2x/5. Substitute into second: 4/x - 2/(2x/5) = -1/5. 4/x - 5/x = -1/5. -1/x = -1/5. x = 5. Then y = 2(5)/5 = 2. xy = 5 × 2 = 10.",
          skills: ["systems-of-equations", "algebraic-manipulation"]
        },

        // Question 14: Radicals and exponents (like PDF M2 Q14)
        {
          id: 14,
          type: "fill-in",
          difficulty: "hard",
          question: "In the equation (1/2)√a = 2∛b, both a and b are positive real numbers. If a = 8 and the equation is written in the form a^x = b, what is the value of x?",
          correctAnswer: "-1/2",
          acceptedAnswers: ["-1/2", -0.5, "-0.5"],
          explanation: "(1/2)√8 = 2∛b. √8/2 = 2∛b. 2√2/2 = 2∛b. √2 = 2∛b. ∛b = √2/2 = 2^(-1/2). b = (2^(-1/2))³ = 2^(-3/2). If a^x = b: 8^x = 2^(-3/2). (2³)^x = 2^(-3/2). 3x = -3/2. x = -1/2.",
          skills: ["exponents", "radicals"]
        },

        // Question 15: Exponential function through points (like PDF M2 Q15)
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function g is defined by g(x) = a^x - b, where a and b are constants. In the xy-plane, the graph of g(x) passes through the points (0, -6) and (1, 2). What is the value of a?",
          choices: [
            { id: "A", text: "6" },
            { id: "B", text: "7" },
            { id: "C", text: "8" },
            { id: "D", text: "9" }
          ],
          correctAnswer: "D",
          explanation: "g(0) = a^0 - b = 1 - b = -6, so b = 7. g(1) = a^1 - b = a - 7 = 2, so a = 9.",
          skills: ["exponential-functions", "solving-equations"]
        },

        // Question 16: Quadratic solution form (like PDF M2 Q16)
        {
          id: 16,
          type: "fill-in",
          difficulty: "hard",
          question: "If 1 + (a√2)/2 is a solution to the equation 2x² - 4x - 7 = 0 and a > 0, what is the value of a?",
          correctAnswer: 3,
          explanation: "Using quadratic formula: x = (4 ± √(16 + 56))/4 = (4 ± √72)/4 = (4 ± 6√2)/4 = 1 ± (3√2)/2. Comparing with 1 + (a√2)/2, we get a = 3.",
          skills: ["quadratic-formula", "solving-equations"]
        },

        // Question 17: Function transformation (like PDF M2 Q17)
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If f(x) = 2(x - 3)² + 8 is transformed into g(x) = 2(x - 5)² + 5, which of the following describes the transformation?",
          choices: [
            { id: "A", text: "The x-coordinate moves to the right 2 units and the y-coordinate moves 3 units down." },
            { id: "B", text: "The x-coordinate moves to the left 2 units and the y-coordinate moves 3 units down." },
            { id: "C", text: "The x-coordinate moves to the right 2 units and the y-coordinate moves 3 units up." },
            { id: "D", text: "The x-coordinate moves to the left 2 units and the y-coordinate moves 3 units up." }
          ],
          correctAnswer: "A",
          explanation: "f(x) has vertex at (3, 8). g(x) has vertex at (5, 5). Change: x goes from 3 to 5 (right 2 units), y goes from 8 to 5 (down 3 units).",
          skills: ["function-transformations", "quadratic-functions"]
        },

        // Question 18: Unit conversion - density (like PDF M2 Q18)
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A sample of dried yellow pine has a density of 420 kilograms per cubic meter. To the nearest tenth, what is the density, in pounds per cubic foot, of this sample? (Use 1 kilogram = 2.2 pounds and 1 meter = 3.3 feet)",
          choices: [
            { id: "A", text: "5.3" },
            { id: "B", text: "25.7" },
            { id: "C", text: "127.3" },
            { id: "D", text: "280.0" }
          ],
          correctAnswer: "B",
          explanation: "420 kg/m³ × (2.2 lb/kg) / (3.3 ft/m)³ = 420 × 2.2 / 35.937 = 924 / 35.937 ≈ 25.7 lb/ft³.",
          skills: ["unit-conversion", "dimensional-analysis"]
        },

        // Question 19: Arc length with radians (like PDF M2 Q19)
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In the given circle, the radius is 6 centimeters and angle AOB measures (7/12)π radians. What is the value of the arc length AB, in centimeters?",
          diagram: {
            type: "circle-sector",
            description: "Circle with center O, points A and B on circumference"
          },
          choices: [
            { id: "A", text: "(7/2)π" },
            { id: "B", text: "(21/2)π" },
            { id: "C", text: "12π" },
            { id: "D", text: "36π" }
          ],
          correctAnswer: "A",
          explanation: "Arc length = rθ = 6 × (7/12)π = (42/12)π = (7/2)π centimeters.",
          skills: ["arc-length", "radians"]
        },

        // Question 20: Right triangle with altitude (like PDF M2 Q20)
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In the image shown, right triangle LMN has a right angle at M. Altitude PM is shown and ∠NPM is a right angle. LP = 13 and PM = 10. Which of the following are closest to the length of NP?",
          diagram: {
            type: "right-triangle-altitude",
            description: "Right triangle LMN with altitude PM from right angle M to hypotenuse LN"
          },
          choices: [
            { id: "A", text: "3.0" },
            { id: "B", text: "6.2" },
            { id: "C", text: "7.1" },
            { id: "D", text: "7.7" }
          ],
          correctAnswer: "D",
          explanation: "In a right triangle, the altitude to the hypotenuse creates similar triangles. PM² = LP × NP. 100 = 13 × NP. NP = 100/13 ≈ 7.7.",
          skills: ["similar-triangles", "geometric-mean"]
        },

        // Question 21: Quadratic with table of zeros (like PDF M2 Q21)
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "For the given function f, f(x) = 24x² + bx + c, where b and c are constants, and the graph of y = f(x) in the xy-plane passes through the points in the table below. What is the value of b?",
          questionTable: {
            headers: ["x", "f(x)"],
            rows: [
              ["-15/8", "0"],
              ["0", "c"],
              ["11/4", "0"]
            ]
          },
          correctAnswer: -21,
          explanation: "The zeros are x = -15/8 and x = 11/4. Sum of zeros = -b/a = -15/8 + 11/4 = -15/8 + 22/8 = 7/8. So -b/24 = 7/8. b = -24 × 7/8 = -21.",
          skills: ["quadratic-functions", "sum-of-roots"]
        },

        // Question 22: Polynomial factors from table (like PDF M2 Q22)
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Select values for the polynomial function g(x) are shown in the table. Based on the values in the table, which of the following must be factors of g(x)?",
          questionTable: {
            headers: ["x", "g(x)"],
            rows: [
              ["-7", "10"],
              ["-4", "0"],
              ["0", "5"],
              ["3", "1"],
              ["5", "-6"],
              ["11", "0"]
            ]
          },
          choices: [
            { id: "A", text: "(x - 5)" },
            { id: "B", text: "(x + 5)" },
            { id: "C", text: "(x - 4) and (x + 11)" },
            { id: "D", text: "(x + 4) and (x - 11)" }
          ],
          correctAnswer: "D",
          explanation: "g(x) = 0 when x = -4 and x = 11. So (x - (-4)) = (x + 4) and (x - 11) are factors.",
          skills: ["polynomial-factors", "zeros-of-functions"]
        }
      ]
    }
  ]
};
