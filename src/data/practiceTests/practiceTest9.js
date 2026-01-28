// Practice Test 9 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Based on College Board SAT Practice Test #8 style and content

export const practiceTest9 = {
  id: "practice-test-9",
  title: "Practice Test 9",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35, // minutes
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
        // Question 1: Linear equation
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "What is the solution to the equation 4x - 7 = 21?",
          choices: [
            { id: "A", text: "3.5" },
            { id: "B", text: "7" },
            { id: "C", text: "14" },
            { id: "D", text: "28" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Solve the linear equation step by step.\n\n4x - 7 = 21\n4x = 21 + 7\n4x = 28\nx = 7\n\n**Verification:** 4(7) - 7 = 28 - 7 = 21 ✓\n\n**Why other choices are incorrect:**\n• Choice A (3.5): Would give 4(3.5) - 7 = 7, not 21\n• Choice C (14): Would give 4(14) - 7 = 49, not 21\n• Choice D (28): Would give 4(28) - 7 = 105, not 21",
          skills: ["linear-equations"]
        },

        // Question 2: Probability
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A jar contains 15 red marbles, 10 blue marbles, and 25 green marbles. If one marble is selected at random, what is the probability that it is NOT green?",
          choices: [
            { id: "A", fraction: { numerator: "1", denominator: "2" } },
            { id: "B", fraction: { numerator: "1", denominator: "5" } },
            { id: "C", fraction: { numerator: "3", denominator: "10" } },
            { id: "D", fraction: { numerator: "2", denominator: "5" } }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Find the probability of NOT selecting a green marble.\n\nTotal marbles = 15 + 10 + 25 = 50\nNon-green marbles = 15 + 10 = 25\n\nP(not green) = 25/50 = **1/2**\n\n**Why other choices are incorrect:**\n• Choice B (1/5): This would be P(blue) = 10/50\n• Choice C (3/10): This would be P(red) = 15/50\n• Choice D (2/5): Calculation error",
          skills: ["probability"]
        },

        // Question 3: Adding polynomials
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which expression is equivalent to (3x² - 5x + 2) + (2x² + 7x - 4)?",
          choices: [
            { id: "A", text: "5x² + 2x - 2" },
            { id: "B", text: "5x² - 2x + 6" },
            { id: "C", text: "5x⁴ + 2x² - 2" },
            { id: "D", text: "6x² + 2x - 2" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Combine like terms when adding polynomials.\n\n(3x² - 5x + 2) + (2x² + 7x - 4)\n\nx² terms: 3x² + 2x² = 5x²\nx terms: -5x + 7x = 2x\nconstants: 2 + (-4) = -2\n\nResult: **5x² + 2x - 2**\n\n**Why other choices are incorrect:**\n• Choice B: Sign error on 2x - 2 should not be +6\n• Choice C: Cannot multiply exponents when adding\n• Choice D: 3 + 2 = 5, not 6",
          skills: ["polynomials", "algebraic-expressions"]
        },

        // Question 4: Margin of error interpretation
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A survey of 400 randomly selected adults in a city found that 68% support a new public transit proposal, with a margin of error of 4.5 percentage points. Which of the following is the best interpretation of this result?",
          choices: [
            { id: "A", text: "Between 63.5% and 72.5% of all adults in the city support the proposal." },
            { id: "B", text: "Exactly 68% of all adults in the city support the proposal." },
            { id: "C", text: "Between 63.5% and 72.5% of the 400 surveyed adults support the proposal." },
            { id: "D", text: "If the survey is repeated, 68% of new respondents will support the proposal." }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** The margin of error creates a confidence interval for the true population proportion.\n\n68% ± 4.5% gives the interval [63.5%, 72.5%]\n\nThis interval estimates the range where the true proportion of ALL adults in the city likely falls.\n\n**Why other choices are incorrect:**\n• Choice B: Statistics cannot give an exact value for the population\n• Choice C: We know exactly how many surveyed (68% of 400); margin of error applies to the population\n• Choice D: Different samples will give different results, not guaranteed 68%",
          skills: ["statistics", "margin-of-error"]
        },

        // Question 5: Similar triangles
        {
          id: 5,
          type: "fill-in",
          difficulty: "medium",
          question: "Triangle ABC is similar to triangle DEF. In triangle ABC, AB = 8 and BC = 12. In triangle DEF, DE = 14. What is the length of EF?",
          correctAnswer: 21,
          explanation: "**The correct answer is 21.** In similar triangles, corresponding sides are proportional.\n\nAB corresponds to DE, and BC corresponds to EF.\n\nSet up the proportion:\nAB/DE = BC/EF\n8/14 = 12/EF\n\nCross multiply:\n8 × EF = 14 × 12\n8 × EF = 168\nEF = 168/8 = **21**\n\n**Calculator tip:** Verify that 8/14 = 12/21 → Both equal 4/7 ✓",
          skills: ["similar-triangles", "proportions"]
        },

        // Question 6: Parallel lines and transversal
        {
          id: 6,
          type: "fill-in",
          difficulty: "medium",
          question: "Two parallel lines are cut by a transversal. One of the angles formed measures 125°. What is the measure, in degrees, of the supplementary angle formed at that same intersection?",
          correctAnswer: 55,
          explanation: "**The correct answer is 55.** When a transversal crosses parallel lines, angles at each intersection come in pairs.\n\nSupplementary angles sum to 180°.\n\n180° - 125° = **55°**\n\nThe angle measuring 55° is supplementary to the 125° angle at the same intersection point.\n\n**Key relationships for parallel lines cut by a transversal:**\n• Corresponding angles are equal\n• Alternate interior angles are equal\n• Co-interior (same-side interior) angles are supplementary",
          skills: ["parallel-lines", "angles"]
        },

        // Question 7: Exponential growth
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A scientist is studying a bacteria population that doubles every 3 hours. If the initial population is 500 bacteria, which function P(t) models the population after t hours?",
          choices: [
            { id: "A", text: "P(t) = 500(2)^(t/3)" },
            { id: "B", text: "P(t) = 500(2)^(3t)" },
            { id: "C", text: "P(t) = 500(3)^(t/2)" },
            { id: "D", text: "P(t) = 500 + 2t" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** For exponential growth where the quantity doubles every k units of time:\n\nP(t) = P₀ × 2^(t/k)\n\nHere:\n• P₀ = 500 (initial population)\n• Doubling time k = 3 hours\n\nSo: **P(t) = 500(2)^(t/3)**\n\n**Verification:** At t = 3: P(3) = 500(2)¹ = 1000 ✓ (doubled)\nAt t = 6: P(6) = 500(2)² = 2000 ✓ (doubled again)\n\n**Why other choices are incorrect:**\n• Choice B: Would triple after 1 hour (way too fast)\n• Choice C: Wrong base and wrong exponent structure\n• Choice D: Linear, not exponential growth",
          skills: ["exponential-functions", "modeling"]
        },

        // Question 8: System of equations
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The system of equations below has solution (x, y). What is the value of x?",
          questionFormula: {
            lines: [
              "3x + 2y = 19",
              "x - 2y = 5"
            ]
          },
          choices: [
            { id: "A", text: "2" },
            { id: "B", text: "4" },
            { id: "C", text: "6" },
            { id: "D", text: "8" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Solve using elimination by adding the equations.\n\n3x + 2y = 19\nx - 2y = 5\n\nAdd the equations (2y terms cancel):\n4x = 24\nx = **6**\n\n**Verification:** If x = 6:\nFrom equation 2: 6 - 2y = 5 → y = 0.5\nCheck in equation 1: 3(6) + 2(0.5) = 18 + 1 = 19 ✓\n\n**Why other choices are incorrect:**\n• Choice A (x=2): Would give 6 + 2y = 19, so y = 6.5, but 2 - 13 ≠ 5\n• Choice B (x=4): Would give 12 + 2y = 19, so y = 3.5, but 4 - 7 ≠ 5\n• Choice D (x=8): Would give 24 + 2y = 19, so y = -2.5, but 8 - (-5) ≠ 5",
          skills: ["systems-of-equations"]
        },

        // Question 9: Radians and degrees
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "An angle has a measure of 5π/6 radians. What is the measure of this angle in degrees?",
          choices: [
            { id: "A", text: "75°" },
            { id: "B", text: "120°" },
            { id: "C", text: "150°" },
            { id: "D", text: "210°" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Convert radians to degrees using the conversion factor.\n\nπ radians = 180°\n\n(5π/6) × (180°/π) = (5 × 180°)/6 = 900°/6 = **150°**\n\n**Why other choices are incorrect:**\n• Choice A (75°): Would be 5π/12 radians\n• Choice B (120°): Would be 2π/3 radians\n• Choice D (210°): Would be 7π/6 radians\n\n**Calculator tip:** Multiply 5/6 by 180 to get the answer.",
          skills: ["radians-degrees", "angle-measures"]
        },

        // Question 10: Quadratic vertex
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The function f(x) = -2(x - 4)² + 18 is graphed in the xy-plane. Which of the following statements about the graph is true?",
          choices: [
            { id: "A", text: "The graph has a minimum value of 18." },
            { id: "B", text: "The graph has a maximum value of 18." },
            { id: "C", text: "The graph has a minimum value of 4." },
            { id: "D", text: "The graph has a maximum value of 4." }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** The function is in vertex form: f(x) = a(x - h)² + k\n\nHere: a = -2, h = 4, k = 18\n\nSince a = -2 < 0, the parabola opens **downward**, meaning it has a **maximum** value.\n\nThe vertex is at (4, 18), so the maximum value is **18** (occurring when x = 4).\n\n**Why other choices are incorrect:**\n• Choice A: Downward parabola has maximum, not minimum\n• Choice C: 4 is the x-coordinate of the vertex, not a minimum\n• Choice D: 4 is the x-coordinate, not the maximum value\n\n**Key insight:** When a < 0, the parabola opens down (∩ shape) → maximum at vertex.",
          skills: ["quadratic-functions", "vertex-form"]
        },

        // Question 11: Linear programming context
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A bakery makes cakes and pies. Each cake requires 3 cups of flour and each pie requires 2 cups of flour. The bakery has 60 cups of flour available. If c represents the number of cakes and p represents the number of pies, which inequality represents this constraint?",
          choices: [
            { id: "A", text: "3c + 2p ≤ 60" },
            { id: "B", text: "3c + 2p ≥ 60" },
            { id: "C", text: "2c + 3p ≤ 60" },
            { id: "D", text: "5(c + p) ≤ 60" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Set up the constraint for total flour usage.\n\nFlour for cakes: 3c cups\nFlour for pies: 2p cups\nTotal flour available: 60 cups\n\nThe total flour used cannot exceed what's available:\n**3c + 2p ≤ 60**\n\n**Why other choices are incorrect:**\n• Choice B: ≥ 60 would mean they must use AT LEAST 60 cups\n• Choice C: Switches the coefficients (2 for cakes, 3 for pies)\n• Choice D: Assumes each item uses 5 cups, which is incorrect\n\n**Verification:** If c = 10 and p = 15: 3(10) + 2(15) = 30 + 30 = 60 ✓",
          skills: ["linear-inequalities", "modeling"]
        },

        // Question 12: Mean vs median
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A data set contains the values: 12, 15, 18, 19, 20, 22, 85. Which statement about the mean and median is correct?",
          choices: [
            { id: "A", text: "The mean is greater than the median." },
            { id: "B", text: "The median is greater than the mean." },
            { id: "C", text: "The mean and median are equal." },
            { id: "D", text: "The relationship cannot be determined without calculation." }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Calculate both measures.\n\n**Median:** With 7 values, the median is the 4th value when ordered.\nMedian = 19\n\n**Mean:** (12 + 15 + 18 + 19 + 20 + 22 + 85) ÷ 7 = 191 ÷ 7 ≈ 27.3\n\nSince 27.3 > 19, the **mean is greater than the median**.\n\n**Key insight:** The outlier (85) pulls the mean up significantly but doesn't affect the median, which is resistant to outliers.\n\n**Why other choices are incorrect:**\n• Choice B: The mean (≈27.3) is greater than median (19)\n• Choice C: They are not equal\n• Choice D: We can determine this by observation or calculation",
          skills: ["statistics", "mean", "median"]
        },

        // Question 13: Factored form equation
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "What is the sum of the solutions to the equation (x - 3)(x + 7) = 0?",
          correctAnswer: -4,
          explanation: "**The correct answer is -4.** Use the zero product property.\n\n(x - 3)(x + 7) = 0\n\nEither x - 3 = 0 → x = 3\nOr x + 7 = 0 → x = -7\n\nSum of solutions: 3 + (-7) = **-4**\n\n**Alternative method:** For any quadratic ax² + bx + c = 0, the sum of solutions equals -b/a.\n\nExpanding: x² + 4x - 21 = 0\nSum = -4/1 = -4 ✓\n\n**Calculator tip:** Graph y = (x-3)(x+7) and find the x-intercepts at 3 and -7.",
          skills: ["quadratic-equations", "zero-product-property"]
        },

        // Question 14: Parabola and line intersection
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In the xy-plane, the graph of y = x² - 4x + 3 intersects the line y = x - 1 at how many points?",
          choices: [
            { id: "A", text: "Zero" },
            { id: "B", text: "One" },
            { id: "C", text: "Two" },
            { id: "D", text: "Three" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Find intersection points by setting the equations equal.\n\nx² - 4x + 3 = x - 1\nx² - 5x + 4 = 0\n(x - 1)(x - 4) = 0\nx = 1 or x = 4\n\nThere are **two** intersection points: at x = 1 and x = 4.\n\n**Verification:**\n• At x = 1: Parabola: 1 - 4 + 3 = 0; Line: 1 - 1 = 0 ✓\n• At x = 4: Parabola: 16 - 16 + 3 = 3; Line: 4 - 1 = 3 ✓\n\n**Why other choices are incorrect:**\n• The discriminant of x² - 5x + 4 = 0 is 25 - 16 = 9 > 0, confirming two real solutions\n\n**Calculator tip:** Graph both equations in Desmos and count intersection points.",
          skills: ["quadratic-functions", "systems-of-equations"]
        },

        // Question 15: Equivalent expressions with exponents
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which expression is equivalent to (2x³y²)³?",
          choices: [
            { id: "A", text: "6x⁶y⁵" },
            { id: "B", text: "6x⁹y⁶" },
            { id: "C", text: "8x⁶y⁵" },
            { id: "D", text: "8x⁹y⁶" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Apply the power rule: (ab)ⁿ = aⁿbⁿ and (aᵐ)ⁿ = aᵐⁿ\n\n(2x³y²)³ = 2³ × (x³)³ × (y²)³\n= 8 × x⁹ × y⁶\n= **8x⁹y⁶**\n\n**Why other choices are incorrect:**\n• Choice A: 2³ = 8, not 6; also wrong exponents\n• Choice B: 2³ = 8, not 6\n• Choice C: Exponents should be 9 and 6, not 6 and 5\n\n**Key rules:**\n• (x³)³ = x^(3×3) = x⁹\n• (y²)³ = y^(2×3) = y⁶",
          skills: ["exponents", "algebraic-expressions"]
        },

        // Question 16: Percent increase
        {
          id: 16,
          type: "fill-in",
          difficulty: "medium",
          question: "A store increases the price of an item from $80 to $100. What is the percent increase in the price?",
          correctAnswer: 25,
          explanation: "**The correct answer is 25.** Calculate percent increase using the formula.\n\nPercent increase = (New - Original)/Original × 100\n\n= (100 - 80)/80 × 100\n= 20/80 × 100\n= 0.25 × 100\n= **25%**\n\n**Common error:** Don't divide by the new value (100). Always divide by the original value (80).\n\n**Verification:** 80 × 1.25 = 100 ✓",
          skills: ["percent-change"]
        },

        // Question 17: Function evaluation
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If f(x) = 2x² - 3x + 5, what is the value of f(-2)?",
          choices: [
            { id: "A", text: "3" },
            { id: "B", text: "7" },
            { id: "C", text: "15" },
            { id: "D", text: "19" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Substitute x = -2 into the function.\n\nf(-2) = 2(-2)² - 3(-2) + 5\n= 2(4) - (-6) + 5\n= 8 + 6 + 5\n= **19**\n\n**Why other choices are incorrect:**\n• Choice A: Likely forgot to square the negative\n• Choice B: Sign error with -3(-2)\n• Choice C: Arithmetic error\n\n**Key reminder:** (-2)² = 4 (positive), and -3(-2) = +6",
          skills: ["function-evaluation"]
        },

        // Question 18: Scatterplot trend
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A scatterplot shows the relationship between hours studied (x) and test scores (y) for 20 students. The line of best fit has equation y = 5.2x + 62. What does the slope represent in this context?",
          choices: [
            { id: "A", text: "The predicted test score with zero hours of studying" },
            { id: "B", text: "The predicted increase in test score for each additional hour studied" },
            { id: "C", text: "The total number of hours studied" },
            { id: "D", text: "The average test score of all students" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** In a linear model y = mx + b, the slope m represents the rate of change.\n\nHere, slope = 5.2 means:\nFor each additional hour studied, the predicted test score increases by **5.2 points**.\n\n**Why other choices are incorrect:**\n• Choice A: This describes the y-intercept (62), not the slope\n• Choice C: The slope is not a count of hours\n• Choice D: The slope is not an average\n\n**Key insight:** Slope = change in y / change in x = change in score / change in hours studied",
          skills: ["linear-regression", "slope-interpretation"]
        },

        // Question 19: Right triangle trigonometry
        {
          id: 19,
          type: "fill-in",
          difficulty: "medium",
          question: "In a right triangle, one leg has length 5 and the hypotenuse has length 13. What is the length of the other leg?",
          correctAnswer: 12,
          explanation: "**The correct answer is 12.** Use the Pythagorean theorem: a² + b² = c²\n\nLet the unknown leg = b, given leg = 5, hypotenuse = 13.\n\n5² + b² = 13²\n25 + b² = 169\nb² = 144\nb = 12\n\n**Recognition:** This is a 5-12-13 Pythagorean triple (a multiple of 5-12-13).\n\n**Verification:** 5² + 12² = 25 + 144 = 169 = 13² ✓",
          skills: ["pythagorean-theorem", "right-triangles"]
        },

        // Question 20: Linear equation from table
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table shows pairs of x and y values that satisfy a linear equation.",
          diagram: {
            type: "table",
            params: {
              headers: ["x", "y"],
              rows: [
                ["0", "7"],
                ["2", "11"],
                ["4", "15"],
                ["6", "19"]
              ]
            }
          },
          questionContinued: "Which equation represents the relationship between x and y?",
          choices: [
            { id: "A", text: "y = 2x + 7" },
            { id: "B", text: "y = 4x + 7" },
            { id: "C", text: "y = 2x + 11" },
            { id: "D", text: "y = x + 7" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Find the slope and y-intercept from the table.\n\n**Slope:** Change in y / Change in x = (11-7)/(2-0) = 4/2 = 2\n\n**Y-intercept:** When x = 0, y = 7\n\n**Equation:** y = 2x + 7\n\n**Verification:**\n• x = 0: y = 2(0) + 7 = 7 ✓\n• x = 2: y = 2(2) + 7 = 11 ✓\n• x = 4: y = 2(4) + 7 = 15 ✓\n• x = 6: y = 2(6) + 7 = 19 ✓\n\n**Why other choices are incorrect:**\n• Choice B: Slope is 2, not 4\n• Choice C: Y-intercept is 7, not 11\n• Choice D: Slope is 2, not 1",
          skills: ["linear-equations", "slope-intercept-form"]
        },

        // Question 21: Area of composite figure
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "A rectangle has length 10 cm and width 6 cm. A semicircle with diameter equal to the width is removed from one end. What is the area of the remaining figure, in square centimeters? (Use π ≈ 3.14 and round to the nearest tenth.)",
          correctAnswer: 45.9,
          explanation: "**The correct answer is 45.9.** Calculate the area of the rectangle minus the semicircle.\n\n**Rectangle area:** 10 × 6 = 60 cm²\n\n**Semicircle:**\n• Diameter = 6 cm, so radius = 3 cm\n• Semicircle area = (1/2)πr² = (1/2)(3.14)(3)² = (1/2)(3.14)(9) = 14.13 cm²\n\n**Remaining area:** 60 - 14.13 = **45.87 ≈ 45.9 cm²**\n\n**Calculator tip:** 60 - 0.5 × π × 9 ≈ 45.86 using the π button.",
          skills: ["area", "composite-figures"]
        },

        // Question 22: Interpreting graphs
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function f(t) = -16t² + 48t + 64 models the height, in feet, of a ball thrown upward from a platform, where t is time in seconds. What is the maximum height reached by the ball?",
          choices: [
            { id: "A", text: "48 feet" },
            { id: "B", text: "64 feet" },
            { id: "C", text: "100 feet" },
            { id: "D", text: "112 feet" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Find the vertex of the downward parabola.\n\nFor f(t) = at² + bt + c, the t-coordinate of the vertex is t = -b/(2a)\n\nt = -48/(2(-16)) = -48/(-32) = 1.5 seconds\n\n**Maximum height:** f(1.5) = -16(1.5)² + 48(1.5) + 64\n= -16(2.25) + 72 + 64\n= -36 + 72 + 64\n= **100 feet**\n\n**Why other choices are incorrect:**\n• Choice A (48): This is the coefficient of t\n• Choice B (64): This is the initial height (at t = 0)\n• Choice D (112): Arithmetic error\n\n**Calculator tip:** Graph the function and find the maximum point, or use the vertex formula.",
          skills: ["quadratic-functions", "vertex", "modeling"]
        }
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
        // Question 1: Y-intercept
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "What is the y-intercept of the line 3x - 4y = 24?",
          choices: [
            { id: "A", text: "(0, -6)" },
            { id: "B", text: "(0, 6)" },
            { id: "C", text: "(8, 0)" },
            { id: "D", text: "(-6, 0)" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** The y-intercept occurs when x = 0.\n\nSubstitute x = 0:\n3(0) - 4y = 24\n-4y = 24\ny = -6\n\nThe y-intercept is **(0, -6)**\n\n**Why other choices are incorrect:**\n• Choice B: Sign error; y = -6, not 6\n• Choice C: This is the x-intercept (when y = 0)\n• Choice D: This has the wrong coordinate format\n\n**Alternative:** Rewrite in slope-intercept form: y = (3/4)x - 6. The y-intercept is -6.",
          skills: ["linear-equations", "intercepts"]
        },

        // Question 2: Table data interpretation
        {
          id: 2,
          type: "fill-in",
          difficulty: "easy",
          question: "The table shows the number of books read by students in a class.",
          diagram: {
            type: "table",
            params: {
              headers: ["Books Read", "Number of Students"],
              rows: [
                ["0-2", "4"],
                ["3-5", "8"],
                ["6-8", "6"],
                ["9-11", "2"]
              ]
            }
          },
          questionContinued: "How many students are in the class?",
          correctAnswer: 20,
          explanation: "**The correct answer is 20.** Add up all the students in each category.\n\n4 + 8 + 6 + 2 = **20 students**\n\nThis is a frequency table showing the distribution of books read.",
          skills: ["data-analysis", "frequency-tables"]
        },

        // Question 3: Parallel lines angle relationship
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Two parallel lines are cut by a transversal. If one angle measures 72°, what is the measure of its corresponding angle?",
          choices: [
            { id: "A", text: "18°" },
            { id: "B", text: "72°" },
            { id: "C", text: "108°" },
            { id: "D", text: "288°" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Corresponding angles formed by a transversal cutting parallel lines are equal.\n\nIf one angle measures 72°, its corresponding angle also measures **72°**.\n\n**Why other choices are incorrect:**\n• Choice A: 18° is not related to 72° in this context\n• Choice C: 108° would be the supplementary angle (180° - 72°)\n• Choice D: 288° is greater than 180°, impossible for a single angle\n\n**Key angle relationships:**\n• Corresponding angles: equal\n• Alternate interior angles: equal\n• Co-interior angles: supplementary (sum to 180°)",
          skills: ["parallel-lines", "angles"]
        },

        // Question 4: Cost equation
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A gym charges a $50 registration fee plus $25 per month. Which equation represents the total cost C, in dollars, for m months of membership?",
          choices: [
            { id: "A", text: "C = 50m + 25" },
            { id: "B", text: "C = 25m + 50" },
            { id: "C", text: "C = 75m" },
            { id: "D", text: "C = 50(m + 25)" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Build the cost equation from the given information.\n\n• Fixed cost (registration): $50 (one-time fee)\n• Variable cost: $25 per month × m months = 25m\n\n**Total cost: C = 25m + 50**\n\n**Verification:** For 3 months: C = 25(3) + 50 = 75 + 50 = $125 ✓\n\n**Why other choices are incorrect:**\n• Choice A: Switches the coefficients\n• Choice C: Ignores the registration fee structure\n• Choice D: Multiplies incorrectly",
          skills: ["linear-equations", "modeling"]
        },

        // Question 5: Pythagorean theorem
        {
          id: 5,
          type: "fill-in",
          difficulty: "easy",
          question: "A ladder is placed against a wall. The base of the ladder is 6 feet from the wall, and the ladder reaches 8 feet up the wall. What is the length of the ladder, in feet?",
          correctAnswer: 10,
          explanation: "**The correct answer is 10.** Use the Pythagorean theorem.\n\nThe ladder, wall, and ground form a right triangle:\n• One leg = 6 feet (ground)\n• Other leg = 8 feet (wall)\n• Hypotenuse = ladder length\n\na² + b² = c²\n6² + 8² = c²\n36 + 64 = c²\n100 = c²\nc = **10 feet**\n\n**Recognition:** This is a 6-8-10 right triangle (a multiple of 3-4-5).",
          skills: ["pythagorean-theorem", "right-triangles"]
        },

        // Question 6: Cubic function zeros
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The function f(x) = x(x - 2)(x + 5) has zeros at which values of x?",
          choices: [
            { id: "A", text: "x = 0, x = 2, and x = 5" },
            { id: "B", text: "x = 0, x = 2, and x = -5" },
            { id: "C", text: "x = 0, x = -2, and x = 5" },
            { id: "D", text: "x = 0, x = -2, and x = -5" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Find zeros by setting each factor equal to zero.\n\nx(x - 2)(x + 5) = 0\n\n• x = 0\n• x - 2 = 0 → x = 2\n• x + 5 = 0 → x = -5\n\nThe zeros are **x = 0, x = 2, and x = -5**\n\n**Why other choices are incorrect:**\n• Choice A: The factor (x + 5) gives x = -5, not x = 5\n• Choice C: The factor (x - 2) gives x = 2, not x = -2\n• Choice D: Both non-zero values have wrong signs\n\n**Calculator tip:** Graph the function and locate where it crosses the x-axis.",
          skills: ["polynomial-functions", "zeros"]
        },

        // Question 7: Y-intercept from function
        {
          id: 7,
          type: "fill-in",
          difficulty: "medium",
          question: "The function h(x) = x² - 6x + 8 is graphed in the xy-plane. What is the y-coordinate of the y-intercept?",
          correctAnswer: 8,
          explanation: "**The correct answer is 8.** The y-intercept occurs when x = 0.\n\nh(0) = (0)² - 6(0) + 8 = 0 - 0 + 8 = **8**\n\nThe y-intercept is at the point (0, 8), so the y-coordinate is **8**.\n\n**Key insight:** For any function f(x), the y-intercept is always f(0), which equals the constant term when x = 0.",
          skills: ["quadratic-functions", "intercepts"]
        },

        // Question 8: Linear equation from context
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A video streaming service has 3 million subscribers at the start of the year. Each month, the service gains 150,000 new subscribers. Which equation represents the total number of subscribers S, in millions, after m months?",
          choices: [
            { id: "A", text: "S = 3 + 0.15m" },
            { id: "B", text: "S = 3 + 150m" },
            { id: "C", text: "S = 3m + 0.15" },
            { id: "D", text: "S = 0.15m" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Build the equation using the given information.\n\n• Initial subscribers: 3 million\n• Monthly gain: 150,000 = 0.15 million\n\n**Equation: S = 3 + 0.15m** (in millions)\n\n**Verification:** After 10 months: S = 3 + 0.15(10) = 3 + 1.5 = 4.5 million ✓\n\n**Why other choices are incorrect:**\n• Choice B: 150 million per month is way too large\n• Choice C: Puts the multiplier on the wrong term\n• Choice D: Ignores the initial 3 million subscribers",
          skills: ["linear-equations", "modeling"]
        },

        // Question 9: Function transformation
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The graph of y = f(x) passes through the point (3, 7). Through which point must the graph of y = f(x - 2) + 4 pass?",
          choices: [
            { id: "A", text: "(1, 11)" },
            { id: "B", text: "(1, 3)" },
            { id: "C", text: "(5, 11)" },
            { id: "D", text: "(5, 3)" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Apply the transformations to the original point.\n\nOriginal: f(x) passes through (3, 7), meaning f(3) = 7\n\nFor y = f(x - 2) + 4:\n• (x - 2) shifts the graph **right** 2 units\n• +4 shifts the graph **up** 4 units\n\nNew x-coordinate: 3 + 2 = 5\nNew y-coordinate: 7 + 4 = 11\n\nThe new point is **(5, 11)**\n\n**Why other choices are incorrect:**\n• (x - 2) shifts RIGHT, not left, so x increases\n• +4 shifts UP, not down, so y increases\n\n**Verification:** When x = 5 in the new function: f(5-2) + 4 = f(3) + 4 = 7 + 4 = 11 ✓",
          skills: ["function-transformations"]
        },

        // Question 10: System of equations
        {
          id: 10,
          type: "fill-in",
          difficulty: "medium",
          question: "If 2x + 3y = 12 and 4x - 3y = 6, what is the value of x + y?",
          correctAnswer: 5,
          explanation: "**The correct answer is 5.** Solve the system using elimination.\n\nAdd the two equations:\n2x + 3y = 12\n4x - 3y = 6\n───────────\n6x = 18\nx = 3\n\nSubstitute x = 3 into the first equation:\n2(3) + 3y = 12\n6 + 3y = 12\n3y = 6\ny = 2\n\n**Therefore: x + y = 3 + 2 = 5**\n\n**Verification:** \n• 2(3) + 3(2) = 6 + 6 = 12 ✓\n• 4(3) - 3(2) = 12 - 6 = 6 ✓",
          skills: ["systems-of-equations"]
        },

        // Question 11: Trigonometry (sine)
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In a right triangle, one of the acute angles measures θ. If sin(θ) = 5/13, what is cos(θ)?",
          choices: [
            { id: "A", fraction: { numerator: "5", denominator: "12" } },
            { id: "B", fraction: { numerator: "12", denominator: "13" } },
            { id: "C", fraction: { numerator: "12", denominator: "5" } },
            { id: "D", fraction: { numerator: "13", denominator: "12" } }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Use the Pythagorean identity and right triangle ratios.\n\nIf sin(θ) = 5/13, then:\n• Opposite = 5\n• Hypotenuse = 13\n\nFind the adjacent side using Pythagorean theorem:\n5² + adj² = 13²\n25 + adj² = 169\nadj² = 144\nadj = 12\n\n**cos(θ) = adjacent/hypotenuse = 12/13**\n\n**Alternative:** Use sin²θ + cos²θ = 1\n(5/13)² + cos²θ = 1\n25/169 + cos²θ = 1\ncos²θ = 144/169\ncos θ = 12/13\n\n**Recognition:** This is a 5-12-13 right triangle.",
          skills: ["trigonometry", "right-triangles"]
        },

        // Question 12: Area calculation
        {
          id: 12,
          type: "fill-in",
          difficulty: "medium",
          question: "A triangle has a base of 14 inches and a height of 9 inches. What is the area of the triangle, in square inches?",
          correctAnswer: 63,
          explanation: "**The correct answer is 63.** Use the triangle area formula.\n\nArea = (1/2) × base × height\n= (1/2) × 14 × 9\n= (1/2) × 126\n= **63 square inches**\n\n**Calculator tip:** 14 × 9 ÷ 2 = 63",
          skills: ["area", "triangles"]
        },

        // Question 13: Exponent equations
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If 3^(2x) = 81, what is the value of x?",
          choices: [
            { id: "A", text: "2" },
            { id: "B", text: "4" },
            { id: "C", text: "8" },
            { id: "D", text: "40.5" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Express both sides with the same base.\n\n3^(2x) = 81\n3^(2x) = 3⁴ (since 81 = 3⁴)\n\nSince the bases are equal, the exponents must be equal:\n2x = 4\nx = **2**\n\n**Verification:** 3^(2×2) = 3⁴ = 81 ✓\n\n**Why other choices are incorrect:**\n• Choice B: Would give 3⁸ = 6561\n• Choice C: Would give 3¹⁶ = huge number\n• Choice D: Would give 3⁸¹ = astronomical",
          skills: ["exponents", "exponential-equations"]
        },

        // Question 14: Rate problem
        {
          id: 14,
          type: "fill-in",
          difficulty: "medium",
          question: "A printer can print 24 pages in 3 minutes. At this rate, how many pages can it print in 12 minutes?",
          correctAnswer: 96,
          explanation: "**The correct answer is 96.** Find the rate and apply it.\n\n**Rate:** 24 pages ÷ 3 minutes = 8 pages per minute\n\n**In 12 minutes:** 8 × 12 = **96 pages**\n\n**Alternative proportion method:**\n24/3 = x/12\n24 × 12 = 3x\n288 = 3x\nx = 96",
          skills: ["rates", "proportions"]
        },

        // Question 15: Substitution
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If a = 3b and 2a + b = 35, what is the value of b?",
          choices: [
            { id: "A", text: "5" },
            { id: "B", text: "7" },
            { id: "C", text: "15" },
            { id: "D", text: "21" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Use substitution to solve.\n\nSubstitute a = 3b into the second equation:\n2(3b) + b = 35\n6b + b = 35\n7b = 35\nb = **5**\n\n**Verification:** If b = 5, then a = 3(5) = 15\nCheck: 2(15) + 5 = 30 + 5 = 35 ✓\n\n**Why other choices are incorrect:**\n• Choice B (b=7): Would give a = 21, and 2(21) + 7 = 49 ≠ 35\n• Choice C (b=15): This is the value of a, not b\n• Choice D (b=21): Would give a = 63, far too large",
          skills: ["systems-of-equations", "substitution"]
        },

        // Question 16: Linear context interpretation
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The equation C = 0.08m + 35 models the monthly cost C, in dollars, of a phone plan where m is the number of minutes used over the plan limit. What does 35 represent in this context?",
          choices: [
            { id: "A", text: "The cost per minute over the limit" },
            { id: "B", text: "The base monthly cost before overage charges" },
            { id: "C", text: "The number of minutes included in the plan" },
            { id: "D", text: "The total cost for 35 overage minutes" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** In C = 0.08m + 35, identify what 35 represents.\n\nThe constant term 35 is the cost when m = 0 (no overage minutes).\n\nThis is the **base monthly cost** before any overage charges are added.\n\n**Why other choices are incorrect:**\n• Choice A: 0.08 is the cost per minute, not 35\n• Choice C: 35 is a dollar amount, not a count of minutes\n• Choice D: The cost for 35 overage minutes would be 0.08(35) + 35 = $37.80",
          skills: ["linear-equations", "function-interpretation"]
        },

        // Question 17: Radical exponents
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Which expression is equivalent to x^(2/3) · x^(1/6)?",
          choices: [
            { id: "A", text: "x^(1/9)" },
            { id: "B", text: "x^(1/3)" },
            { id: "C", text: "x^(5/6)" },
            { id: "D", text: "x^(2/9)" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** When multiplying powers with the same base, add exponents.\n\nx^(2/3) · x^(1/6) = x^(2/3 + 1/6)\n\nFind common denominator:\n2/3 = 4/6\n\n4/6 + 1/6 = 5/6\n\n**Result: x^(5/6)**\n\n**Why other choices are incorrect:**\n• Choice A: Would require multiplying exponents (wrong operation)\n• Choice B: 2/3 + 1/6 ≠ 1/3\n• Choice D: Would require multiplying exponents\n\n**Key rule:** x^a · x^b = x^(a+b)",
          skills: ["exponents", "radicals"]
        },

        // Question 18: Dot plot statistics
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A dot plot shows the following data for number of pets owned by 15 families: 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 4, 6. What is the median number of pets?",
          choices: [
            { id: "A", text: "1" },
            { id: "B", text: "2" },
            { id: "C", text: "2.5" },
            { id: "D", text: "3" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Find the middle value of the ordered data.\n\nWith 15 values, the median is the 8th value (since (15+1)/2 = 8).\n\nCount through the ordered data:\n0, 0, 1, 1, 1, 1, 2, **2**, 2, 2, 2, 3, 3, 4, 6\n\nThe 8th value is **2**.\n\n**Why other choices are incorrect:**\n• Choice A: 1 is the mode of the lower values, not the median\n• Choice C: 2.5 would be correct only for even number of data points\n• Choice D: 3 is too high in the ordered list",
          skills: ["statistics", "median"]
        },

        // Question 19: Isosceles triangle angles
        {
          id: 19,
          type: "fill-in",
          difficulty: "hard",
          question: "In an isosceles triangle, the vertex angle measures 40°. What is the measure, in degrees, of each base angle?",
          correctAnswer: 70,
          explanation: "**The correct answer is 70.** Use the triangle angle sum property.\n\nIn an isosceles triangle:\n• The two base angles are equal\n• All angles sum to 180°\n\nLet each base angle = x\n\n40 + x + x = 180\n40 + 2x = 180\n2x = 140\nx = **70°**\n\n**Verification:** 40° + 70° + 70° = 180° ✓",
          skills: ["triangles", "isosceles-triangles", "angles"]
        },

        // Question 20: System with infinitely many solutions (Parametric)
        {
          id: 20,
          type: "fill-in",
          difficulty: "hard",
          question: "Consider the system of equations:\n\n2x + 3y = 7\n10x + 15y = 35\n\nIf (x, y) is a solution to this system where y = 5, what is the value of x?",
          correctAnswer: -4,
          explanation: "**The correct answer is -4.** Analyze the system first.\n\n**Observation:** The second equation is exactly 5 times the first:\n5(2x + 3y) = 5(7) → 10x + 15y = 35 ✓\n\nThis means the equations represent the **same line**, so there are infinitely many solutions (any point on the line 2x + 3y = 7 works).\n\n**Find x when y = 5:**\n2x + 3(5) = 7\n2x + 15 = 7\n2x = -8\nx = **-4**\n\n**Verification:** \n• First equation: 2(-4) + 3(5) = -8 + 15 = 7 ✓\n• Second equation: 10(-4) + 15(5) = -40 + 75 = 35 ✓\n\n**Key insight:** When one equation is a multiple of another, the system has infinitely many solutions - all points on that line. The question asks for the specific solution where y = 5.",
          skills: ["systems-of-equations", "dependent-systems", "parametric-solutions"]
        },

        // Question 21: Complex radical equation (CHALLENGING - College Board style)
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In the given equation, c is a positive constant. Which of the following is one of the solutions to the given equation?\n\nx²/√(x² - c²) = c²/√(x² - c²) + 39",
          choices: [
            { id: "A", text: "-c" },
            { id: "B", text: "-√(c² + 39²)" },
            { id: "C", text: "-√(39² - c²)" },
            { id: "D", text: "-√(c² + 39²)" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Solve this equation involving radicals.\n\n**Step 1:** Multiply both sides by √(x² - c²):\nx² = c² + 39√(x² - c²)\n\n**Step 2:** Rearrange and isolate the radical:\nx² - c² = 39√(x² - c²)\n\n**Step 3:** Let u = √(x² - c²), so u² = x² - c²:\nu² = 39u\nu² - 39u = 0\nu(u - 39) = 0\nu = 0 or u = 39\n\n**Step 4:** Solve for x:\n• If u = 0: √(x² - c²) = 0 → x² = c² → x = ±c\n  But x = ±c makes the original denominator zero. **Reject.**\n\n• If u = 39: √(x² - c²) = 39 → x² - c² = 1521 → x² = c² + 1521 = c² + 39²\n  So x = ±√(c² + 39²)\n\nThe negative solution is **x = -√(c² + 39²)**\n\n**Why other choices are incorrect:**\n• Choice A (-c): Makes denominator zero\n• Choice B: Same as D (trick option)\n• Choice C: Would give x² - c² = 39² - c² - c² = 39² - 2c², which doesn't match",
          skills: ["radical-equations", "algebraic-manipulation", "quadratic-equations"]
        },

        // Question 22: Quadratic modeling - Seal dive depth (CHALLENGING - College Board Q27)
        {
          id: 22,
          type: "fill-in",
          difficulty: "hard",
          question: "The quadratic function g models the depth, in meters, below the surface of the water of a seal t minutes after the seal entered the water during a dive. The function estimates that the seal reached its maximum depth of 302.4 meters 6 minutes after it entered the water and then reached the surface of the water 12 minutes after it entered the water. Based on the function, what was the estimated depth, to the nearest meter, of the seal 10 minutes after it entered the water?",
          correctAnswer: 168,
          explanation: "**The correct answer is 168.** Build the quadratic function from the given information.\n\n**Given information:**\n• Maximum depth = 302.4 meters at t = 6 minutes (vertex)\n• Surface (depth = 0) at t = 12 minutes\n• By symmetry, surface at t = 0 minutes (when seal entered)\n\n**Step 1:** Use vertex form: g(t) = a(t - h)² + k\nwhere (h, k) is the vertex = (6, 302.4)\n\ng(t) = a(t - 6)² + 302.4\n\n**Step 2:** Find 'a' using the point (12, 0):\n0 = a(12 - 6)² + 302.4\n0 = a(36) + 302.4\n-302.4 = 36a\na = -302.4/36 = -8.4\n\n**Step 3:** The function is:\ng(t) = -8.4(t - 6)² + 302.4\n\n**Step 4:** Find depth at t = 10:\ng(10) = -8.4(10 - 6)² + 302.4\n= -8.4(4)² + 302.4\n= -8.4(16) + 302.4\n= -134.4 + 302.4\n= **168 meters**\n\n**Key concepts:**\n1. Use vertex form with vertex at (6, 302.4)\n2. Find 'a' using another known point (12, 0)\n3. Evaluate at t = 10\n\n**Verification by symmetry:** t = 10 is 4 minutes after the vertex (t = 6). By symmetry, g(2) should equal g(10). g(2) = -8.4(2-6)² + 302.4 = -8.4(16) + 302.4 = 168 ✓",
          skills: ["quadratic-functions", "vertex-form", "modeling", "word-problems"]
        }
      ]
    }
  ]
};
