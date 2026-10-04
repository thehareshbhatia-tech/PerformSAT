// Practice Test 3 — Math Module 2 Easy variant (22 questions)
// v2 freshness rebuild (2026-09-07): every slot re-patterned and re-authored against the seen-corpus gate — docs/TEST_RECREATION_V2_SPEC.md
// For students routed to easier path after Module 1 (~<60% correct).
// Official-calibration recreation (2026-08-31): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Domain mix: 7 Algebra / 6 Advanced Math / 5 Problem-Solving / 4 Geometry & Trig.
// Diagram items: Q15 rightTriangle, Q19 dataTable, Q21 scatterplot, Q22 twoWayTable.

export const practiceTest3M2Easy = {
  id: "module-2-easy",
  title: "Module 2 (Easy)",
  variant: "easy",
  timeLimit: 35,
  questions: [
    {
      id: 1,
      type: "multiple-choice",
      difficulty: "easy",
      band: 2,
      question: "For the linear function $f$, the table shows four values of $x$ and their corresponding values of $f(x)$. For what value of $x$ does $f(x) = 280$?",
      diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["5", "72"], ["10", "112"], ["15", "152"], ["20", "192"]] } },
      choices: [
        // distractor: divides 280 by 8 first and subtracts 32 afterward: 35 - 32 = 3
        { id: "A", text: "$3$" },
        { id: "B", text: "$31$" },
        // distractor: ignores the y-intercept 32 and computes 280/8 = 35
        { id: "C", text: "$35$" },
        // distractor: adds 32 instead of subtracting it: 312/8 = 39
        { id: "D", text: "$39$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Solve $f(a) = c$**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Each increase of $5$ in $x$ raises $f(x)$ by $40$, so the slope is $8$, and $f(5) = 72$ gives $f(x) = 8x + 32$. Then $8x + 32 = 280$ gives $x = 31$.\n\n**The Full Solution:**\nStep 1: Find the slope from any two rows. From $x = 5$ to $x = 10$, $f(x)$ rises from $72$ to $112$, so the slope is $\\frac{112 - 72}{10 - 5} = 8$.\nStep 2: Find the y-intercept. Substituting $x = 5$ and $f(5) = 72$ into $f(x) = 8x + b$ gives $72 = 40 + b$, so $b = 32$ and $f(x) = 8x + 32$.\nStep 3: Set $f(x)$ equal to $280$ and solve. $8x + 32 = 280$, so $8x = 248$ and $x = 31$. Check: $8(31) + 32 = 248 + 32 = 280$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): divides before subtracting. $280 \\div 8 = 35$ and then $35 - 32 = 3$ undoes the two operations in the wrong order.\n* Choice C ($35$): ignores the y-intercept and reports $280 \\div 8 = 35$, which would be right only if $f(0)$ were $0$.\n* Choice D ($39$): adds the y-intercept instead of subtracting it, giving $\\frac{280 + 32}{8} = 39$.\n\n**Test Day Takeaway:** When a table defines a linear function, write the rule $f(x) = mx + b$ first. Solving $f(a) = c$ then means undoing the operations in reverse order: subtract $b$ first, divide by $m$ second.",
      skills: ["function-notation"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "$(x - 7)^{2} + (y + 4)^{2} = 121$\nThe given equation defines a circle in the $xy$-plane. What is the radius of the circle?",
      correctAnswer: "11",
      explanation: "**SAT Pattern: Circle in Standard Form**\n\n**The correct answer is 11.**\n\n**The Fast Way (~10s):** In $(x - h)^{2} + (y - k)^{2} = r^{2}$ the right side is the radius squared, so $r^{2} = 121$ and $r = 11$.\n\n**The Full Solution:**\nStep 1: Match the equation to standard form. A circle with center $(h, k)$ and radius $r$ has equation $(x - h)^{2} + (y - k)^{2} = r^{2}$.\nStep 2: Read the right side. Here $r^{2} = 121$.\nStep 3: Take the positive square root, since a radius is a length: $r = \\sqrt{121} = 11$. Check: $11^{2} = 121$ ✓\n\n**Common Mistakes:**\n* $121$: reports $r^{2}$, the number on the right side, instead of its square root.\n* $60.5$: divides $121$ by $2$, confusing squaring with doubling.\n* $22$: reports the diameter, $2r$, instead of the radius.\n\n**Test Day Takeaway:** In standard form the center comes from the numbers inside the parentheses (with their signs flipped) and the radius is the square root of the constant on the right side; never report that constant itself.",
      skills: ["circle-equation"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "$6x - 15 = 45$\nWhat value of $x$ is the solution to the given equation?",
      choices: [
        // distractor: subtracts 15 from 45 instead of adding it, solving 6x = 30
        { id: "A", text: "$5$" },
        // distractor: ignores the -15 and divides 45 by 6
        { id: "B", text: "$7.5$" },
        { id: "C", text: "$10$" },
        // distractor: adds 15 to both sides but does not divide by 6, reporting 6x = 60
        { id: "D", text: "$60$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Add $15$ to both sides to get $6x = 60$, then divide by $6$: $x = 10$.\n\n**The Full Solution:**\nStep 1: Undo the subtraction. Adding $15$ to both sides of $6x - 15 = 45$ gives $6x = 60$.\nStep 2: Undo the multiplication. Dividing both sides by $6$ gives $x = 10$.\nStep 3: Substitute to confirm. Check: $6(10) - 15 = 60 - 15 = 45$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): subtracts $15$ from $45$ instead of adding it, solving $6x = 30$. Test it: $6(5) - 15 = 15$, not $45$.\n* Choice B ($7.5$): ignores the $-15$ and divides $45$ by $6$.\n* Choice D ($60$): stops after the first step and reports the value of $6x$, not $x$.\n\n**Test Day Takeaway:** Undo operations in reverse order: first the constant (with the opposite operation), then the coefficient. Substituting your answer back takes five seconds and catches sign slips.",
      skills: ["combining-like-terms"]
    },
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "The scatterplot shows the relationship between two variables, $x$ and $y$. A line of best fit for the data, $y = 3.5x + 18$, is also shown. For the data point with $x = 8$, how much greater is the actual $y$-value than the $y$-value predicted by the line of best fit?",
      diagram: { type: "scatterplot", params: { points: [[1, 20], [2, 27], [4, 30], [5, 38], [6, 36], [8, 53], [10, 50], [11, 59], [13, 61], [14, 70], [16, 72]], xMin: 0, xMax: 16, yMin: 0, yMax: 80, xGridStep: 2, yGridStep: 10, xLabelStep: 4, yLabelStep: 20, xLabel: "x", yLabel: "y", bestFitLine: { slope: 3.5, intercept: 18 }, highlightPoint: [8, 53], highlightLabel: "(8, 53)", showResidual: true } },
      choices: [
        { id: "A", text: "$7$" },
        // distractor: drops the intercept, predicting 3.5(8) = 28 and reporting 53 - 28
        { id: "B", text: "$25$" },
        // distractor: reports the predicted y-value instead of the difference
        { id: "C", text: "$46$" },
        // distractor: reports the actual y-value instead of the difference
        { id: "D", text: "$53$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** At $x = 8$ the line predicts $3.5(8) + 18 = 46$, and the data point is at $(8, 53)$, so the difference is $53 - 46 = 7$.\n\n**The Full Solution:**\nStep 1: Evaluate the line of best fit at $x = 8$. Substituting into $y = 3.5x + 18$ gives $y = 28 + 18 = 46$.\nStep 2: Read the actual value. The data point with $x = 8$ is $(8, 53)$, so the actual $y$-value is $53$.\nStep 3: Subtract in the order the question asks. The actual value exceeds the predicted value by $53 - 46 = 7$. Check: $46 + 7 = 53$, the actual value ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($25$): uses $3.5(8) = 28$ as the prediction and computes $53 - 28 = 25$, dropping the intercept $18$.\n* Choice C ($46$): stops at the predicted $y$-value, which is only the middle of the calculation.\n* Choice D ($53$): reports the actual $y$-value without comparing it to the line.\n\n**Test Day Takeaway:** The vertical gap between a data point and the line of best fit is the actual value minus the predicted value. Substitute $x$ into the whole equation, intercept included, before subtracting.",
      skills: ["scatterplots", "linear-functions"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "$y = \\frac{2}{5}x - 4$\n$8x + ky = 9$\nIn the given system of equations, $k$ is a constant. If the system has no solution, what is the value of $k$?",
      choices: [
        { id: "A", text: "$-20$" },
        // distractor: inverts the slope, solving -k/8 = 2/5 to get -16/5
        { id: "B", text: "$-3.2$" },
        // distractor: inverts the slope and drops the sign, solving k/8 = 2/5
        { id: "C", text: "$3.2$" },
        // distractor: loses the negative created by moving 8x across, solving 8/k = 2/5
        { id: "D", text: "$20$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** No solution means the lines are parallel. The second line has slope $-\\frac{8}{k}$, and $-\\frac{8}{k} = \\frac{2}{5}$ gives $k = -20$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has no solution when the lines are parallel and distinct: equal slopes, different y-intercepts.\nStep 2: Solve the second equation for $y$. From $8x + ky = 9$, $ky = -8x + 9$, so $y = -\\frac{8}{k}x + \\frac{9}{k}$ and the slope is $-\\frac{8}{k}$.\nStep 3: Set the slopes equal. $-\\frac{8}{k} = \\frac{2}{5}$ gives $2k = -40$, so $k = -20$. Check: with $k = -20$ the second line is $y = \\frac{2}{5}x - \\frac{9}{20}$, which has slope $\\frac{2}{5}$ and a y-intercept different from $-4$, so the lines are parallel and distinct ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-3.2$): inverts the fraction, solving $-\\frac{k}{8} = \\frac{2}{5}$ to get $-\\frac{16}{5} = -3.2$.\n* Choice C ($3.2$): makes the same inversion and also drops the negative sign, solving $\\frac{k}{8} = \\frac{2}{5}$.\n* Choice D ($20$): forgets that moving $8x$ to the other side makes the slope negative, solving $\\frac{8}{k} = \\frac{2}{5}$. With $k = 20$ the second line has slope $-\\frac{2}{5}$ and the lines intersect.\n\n**Test Day Takeaway:** No solution means parallel and distinct. Solve the standard-form equation for $y$ so the slope is visible, and keep the sign that appears when the $x$-term crosses the equals sign.",
      skills: ["system-solution-types"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "The graph of $y = |x - a|$, where $a$ is a constant, is shown. What is the greatest solution to the equation $|x - a| = 5$?",
      diagram: { type: "absoluteValue", params: { vertex: [4, 0], slope: 1 } },
      correctAnswer: "9",
      explanation: "**SAT Pattern: Absolute Value Equation**\n\n**The correct answer is 9.**\n\n**The Fast Way (~20s):** The vertex of $y = |x - a|$ is at $(a, 0)$, and the graph's vertex is at $(4, 0)$, so $a = 4$. The solutions of $|x - 4| = 5$ are $4 + 5 = 9$ and $4 - 5 = -1$, and the greater is $9$.\n\n**The Full Solution:**\nStep 1: Find $a$ from the graph. The graph of $y = |x - a|$ touches the x-axis only at $x = a$, and the vertex shown is at $(4, 0)$, so $a = 4$.\nStep 2: Split the equation $|x - 4| = 5$ into its two cases: $x - 4 = 5$ or $x - 4 = -5$.\nStep 3: Solve both and take the greater. The solutions are $x = 9$ and $x = -1$, so the greatest solution is $9$. Check: $|9 - 4| = |5| = 5$ ✓\n\n**Common Mistakes:**\n* $-1$: solves only the negative case and reports the lesser solution.\n* $1$: reads the constant as $a = -4$, solving $|x + 4| = 5$, whose solutions are $1$ and $-9$.\n* $5$: ignores $a$ and solves $|x| = 5$.\n\n**Test Day Takeaway:** An equation $|x - a| = b$ with $b > 0$ has two solutions, $a + b$ and $a - b$, the points at distance $b$ from $a$. Find $a$ first, then decide which of the two solutions the question asks for.",
      skills: ["combining-like-terms"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Of the $640$ students at a school, $44$ are in the band, $36$ are in the choir, and $16$ are in both. What is the probability that a student selected at random is in the band, the choir, or both?",
      choices: [
        // distractor: counts only the 16 students who are in both groups
        { id: "A", text: "$\\frac{1}{40}$" },
        // distractor: removes the 16 students in both groups twice, using 44 + 36 - 32 = 48
        { id: "B", text: "$\\frac{3}{40}$" },
        { id: "C", text: "$\\frac{1}{10}$" },
        // distractor: adds 44 and 36 without removing the 16 students counted in both groups
        { id: "D", text: "$\\frac{1}{8}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Basic Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The $16$ students in both groups are counted twice, so remove them once: $44 + 36 - 16 = 64$ students, and $\\frac{64}{640} = \\frac{1}{10}$.\n\n**The Full Solution:**\nStep 1: Adding $44$ and $36$ counts the $16$ students who are in both the band and the choir twice.\nStep 2: Remove the double count once. The number of students in the band, the choir, or both is $44 + 36 - 16 = 64$.\nStep 3: Divide by the total number of students. The probability is $\\frac{64}{640} = \\frac{1}{10}$. Check: $28$ are in the band only, $20$ are in the choir only, and $16$ are in both, and $28 + 20 + 16 = 64$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{40}$): uses only the $16$ students in both groups, giving $\\frac{16}{640}$. That is the probability of being in both, not in at least one.\n* Choice B ($\\frac{3}{40}$): subtracts the overlap from each group, using $44 + 36 - 32 = 48$ and giving $\\frac{48}{640}$.\n* Choice D ($\\frac{1}{8}$): adds the two counts as if no student were in both, giving $\\frac{80}{640}$.\n\n**Test Day Takeaway:** When two groups share members, the count for \"one or the other or both\" is the first group plus the second group minus the overlap. Subtract the overlap exactly once, then divide by the total.",
      skills: ["probability-basics"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$\\frac{4x^{2} - 81}{2x + 9} = 2x + c$\nIn the given equation, $c$ is a constant, and the equation is true for all $x > 0$. What is the value of $c$?",
      choices: [
        // distractor: carries the numerator's constant -81 straight down without factoring
        { id: "A", text: "$-81$" },
        // distractor: doubles -9, applying the factor of 2 from 2x to the constant as well
        { id: "B", text: "$-18$" },
        { id: "C", text: "$-9$" },
        // distractor: divides -9 by 2, as if the whole numerator had been divided by 2x
        { id: "D", text: "$-4.5$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The numerator is a difference of squares: $4x^{2} - 81 = (2x + 9)(2x - 9)$. Dividing out $2x + 9$ leaves $2x - 9$, so $c = -9$.\n\n**The Full Solution:**\nStep 1: Factor the numerator. Since $4x^{2} = (2x)^{2}$ and $81 = 9^{2}$, $4x^{2} - 81 = (2x + 9)(2x - 9)$.\nStep 2: Divide out the common factor. For $x > 0$, $2x + 9$ is not zero, so $\\frac{(2x + 9)(2x - 9)}{2x + 9} = 2x - 9$.\nStep 3: Match the result to $2x + c$. Writing $2x - 9$ as $2x + (-9)$ gives $c = -9$. Check with $x = 2$: $\\frac{16 - 81}{4 + 9} = \\frac{-65}{13} = -5$, and $2(2) - 9 = -5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-81$): copies the constant from the numerator without factoring.\n* Choice B ($-18$): doubles the $-9$, applying the $2$ from $2x$ to the constant term as well.\n* Choice D ($-4.5$): divides $-9$ by $2$, as if every term of the numerator had been divided by $2x$.\n\n**Test Day Takeaway:** A quadratic over a linear expression is usually a factoring question, and $a^{2} - b^{2} = (a + b)(a - b)$ is the pattern the SAT reuses most. Factor, divide out the common factor, and read the constant from the result.",
      skills: ["simplifying-rational-expressions", "difference-of-squares"]
    },
    {
      id: 9,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "Based on a random sample of loaves from a bakery, a $95\\%$ confidence interval for the mean mass of the bakery's loaves is $412.6$ grams to $419.4$ grams. What is the margin of error, in grams, for this estimate?",
      correctAnswer: "3.4",
      explanation: "**SAT Pattern: Margin of Error**\n\n**The correct answer is 3.4.**\n\n**The Fast Way (~15s):** The interval is the sample mean plus or minus the margin of error, so the margin of error is half the width: $\\frac{419.4 - 412.6}{2} = 3.4$ grams.\n\n**The Full Solution:**\nStep 1: A confidence interval runs from (sample mean $-$ margin of error) to (sample mean $+$ margin of error), so its width is twice the margin of error.\nStep 2: Find the width: $419.4 - 412.6 = 6.8$ grams.\nStep 3: Halve the width: $\\frac{6.8}{2} = 3.4$ grams. Check: the midpoint is $\\frac{412.6 + 419.4}{2} = 416$, and $416 - 3.4 = 412.6$ and $416 + 3.4 = 419.4$ ✓\n\n**Common Mistakes:**\n* $6.8$: reports the full width of the interval, which is twice the margin of error.\n* $416$: reports the midpoint, which is the sample mean, not the margin of error.\n* $1.7$: halves the width twice, dividing $6.8$ by $4$.\n\n**Test Day Takeaway:** The margin of error is half the width of the interval, and the sample mean is the midpoint. Given the endpoints, subtract and divide by $2$.",
      skills: ["margin-of-error"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$7x + 4y = 94$\n$4x + 7y = 82$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x + y$?",
      choices: [
        // distractor: solves the system and reports y alone
        { id: "A", text: "$6$" },
        // distractor: adds the equations but divides 176 by 22 instead of 11
        { id: "B", text: "$8$" },
        // distractor: solves the system and reports x alone
        { id: "C", text: "$10$" },
        { id: "D", text: "$16$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Add the two equations: $11x + 11y = 176$. Dividing by $11$ gives $x + y = 16$, with no need to find $x$ and $y$ separately.\n\n**The Full Solution:**\nStep 1: The question asks for $x + y$, so look for a way to produce $x + y$ directly.\nStep 2: Add the equations. $(7x + 4y) + (4x + 7y) = 94 + 82$ gives $11x + 11y = 176$.\nStep 3: Factor and divide. $11(x + y) = 176$, so $x + y = 16$. Check: solving fully gives $x = 10$ and $y = 6$; $7(10) + 4(6) = 94$, $4(10) + 7(6) = 82$, and $10 + 6 = 16$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): solves the system completely and reports $y$ instead of $x + y$.\n* Choice B ($8$): adds the equations correctly but divides $176$ by $22$, the sum of all four coefficients, instead of by $11$.\n* Choice C ($10$): solves the system completely and reports $x$ instead of $x + y$.\n\n**Test Day Takeaway:** When a system asks for a sum or difference of the variables, add or subtract the equations first. If the resulting coefficients match, one division finishes the problem.",
      skills: ["elimination-method"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The table shows the amount a family budgeted each month this year for four categories and the percent increase in each amount from last year. What was the monthly amount the family budgeted for utilities last year?",
      diagram: { type: "dataTable", params: { headers: ["Category", "This year's amount (dollars)", "Percent increase"], rows: [["Housing", "1,344", "12%"], ["Utilities", "261", "16%"], ["Groceries", "638", "10%"], ["Transportation", "405", "8%"]] } },
      choices: [
        // distractor: takes 16% off this year's amount: 261 x 0.84 = 219.24
        { id: "A", text: "$\\$219.24$" },
        { id: "B", text: "$\\$225.00$" },
        // distractor: subtracts 16 dollars instead of 16 percent: 261 - 16 = 245
        { id: "C", text: "$\\$245.00$" },
        // distractor: increases this year's amount by 16% instead of undoing the increase: 261 x 1.16 = 302.76
        { id: "D", text: "$\\$302.76$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** This year's amount is $116\\%$ of last year's, so last year's amount is $\\frac{261}{1.16} = 225$ dollars.\n\n**The Full Solution:**\nStep 1: Let $u$ be last year's monthly amount for utilities. A $16\\%$ increase makes this year's amount $u + 0.16u = 1.16u$.\nStep 2: Use the table value for utilities: $1.16u = 261$.\nStep 3: Divide: $u = \\frac{261}{1.16} = 225$ dollars. Check: $16\\%$ of $225$ is $36$, and $225 + 36 = 261$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$219.24$): takes $16\\%$ off this year's amount, computing $261 \\times 0.84$. The $16\\%$ was taken of last year's smaller amount, so undoing it requires division.\n* Choice C ($\\$245.00$): subtracts $16$ dollars instead of $16$ percent.\n* Choice D ($\\$302.76$): increases this year's amount by another $16\\%$, which moves in the wrong direction.\n\n**Test Day Takeaway:** A percent increase is always a percent of the earlier amount. To go back to the earlier amount, divide by $1 + r$; subtracting the same percent from the new amount always lands too low.",
      skills: ["percent-word-problems", "percent-of-value"]
    },
    {
      id: 12,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The side lengths of a right triangle are $k$, $k + 7$, and $k + 8$ units, where $k > 0$. What is the value of $k$?",
      correctAnswer: "5",
      explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**The correct answer is 5.**\n\n**The Fast Way (~30s):** The longest side, $k + 8$, is the hypotenuse, so $k^{2} + (k + 7)^{2} = (k + 8)^{2}$. This simplifies to $k^{2} - 2k - 15 = 0$, so $k = 5$.\n\n**The Full Solution:**\nStep 1: Identify the hypotenuse. Since $k > 0$, $k + 8$ is the longest side, so the legs are $k$ and $k + 7$.\nStep 2: Apply the Pythagorean theorem and expand. $k^{2} + (k + 7)^{2} = (k + 8)^{2}$ becomes $k^{2} + k^{2} + 14k + 49 = k^{2} + 16k + 64$.\nStep 3: Collect terms and solve. Subtracting $k^{2} + 16k + 64$ from both sides gives $k^{2} - 2k - 15 = 0$, which factors as $(k - 5)(k + 3) = 0$. Since $k > 0$, $k = 5$. Check: the sides are $5$, $12$, and $13$, and $25 + 144 = 169$ ✓\n\n**Common Mistakes:**\n* $-3$: keeps the negative root, but $k > 0$.\n* $12$: reports $k + 7$, the longer leg, instead of $k$.\n* $13$: reports $k + 8$, the hypotenuse, instead of $k$.\n\n**Test Day Takeaway:** When the side lengths are written in terms of one variable, the largest expression is the hypotenuse and goes alone on one side of the Pythagorean equation. Reject any root that makes a side length zero or negative.",
      skills: ["pythagorean-theorem"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In the $xy$-plane, the distance between the points $(m, 5)$ and $(4, -3)$ is $17$ units. Which of the following could be the value of $m$?",
      choices: [
        // distractor: adds the legs instead of their squares, solving |m - 4| + 8 = 17
        { id: "A", text: "$13$" },
        // distractor: reports the horizontal distance 15 rather than solving m - 4 = 15
        { id: "B", text: "$15$" },
        { id: "C", text: "$19$" },
        // distractor: sets (m - 4)^2 = 289, ignoring the vertical distance of 8
        { id: "D", text: "$21$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Distance Formula**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The vertical distance is $5 - (-3) = 8$, so $(m - 4)^{2} + 8^{2} = 17^{2}$. That gives $(m - 4)^{2} = 225$, so $m - 4 = \\pm 15$ and $m = 19$ is one possibility.\n\n**The Full Solution:**\nStep 1: Write the distance formula for the two points: $\\sqrt{(m - 4)^{2} + (5 - (-3))^{2}} = 17$.\nStep 2: Square both sides: $(m - 4)^{2} + 64 = 289$, so $(m - 4)^{2} = 225$.\nStep 3: Take both square roots: $m - 4 = 15$ or $m - 4 = -15$, so $m = 19$ or $m = -11$. Only $19$ is a choice. Check: from $(19, 5)$ to $(4, -3)$ the differences are $15$ and $8$, and $\\sqrt{225 + 64} = \\sqrt{289} = 17$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($13$): adds the distances instead of their squares, solving $|m - 4| + 8 = 17$ to get $m - 4 = 9$.\n* Choice B ($15$): stops at the horizontal distance. Since $m - 4 = 15$, $m$ is $4 + 15 = 19$, not $15$.\n* Choice D ($21$): sets $(m - 4)^{2} = 289$, ignoring the vertical distance of $8$.\n\n**Test Day Takeaway:** The distance between two points is the hypotenuse of a right triangle whose legs are the differences in the coordinates. Subtract the known leg's square before taking a root, and remember that the root can be positive or negative.",
      skills: ["coordinate-geometry"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$2x^{2} - 22x + 48 = 0$\nOne solution to the given equation is $3$. What is the other solution?",
      choices: [
        // distractor: sign slip in factoring, writing 2(x - 3)(x + 8) instead of 2(x - 3)(x - 8)
        { id: "A", text: "$-8$" },
        { id: "B", text: "$8$" },
        // distractor: uses 22/2 = 11, the sum of the two solutions, as the second solution
        { id: "C", text: "$11$" },
        // distractor: uses 48 as the product of the solutions without dividing by the leading coefficient 2, computing 48/3 = 16
        { id: "D", text: "$16$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Polynomial Factoring with Given Factor**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Since $3$ is a solution, $x - 3$ is a factor. Factoring out $2$ gives $2(x^{2} - 11x + 24) = 2(x - 3)(x - 8)$, so the other solution is $8$.\n\n**The Full Solution:**\nStep 1: Because $x = 3$ is a solution, $x - 3$ is a factor of $2x^{2} - 22x + 48$.\nStep 2: Factor out $2$: $2(x^{2} - 11x + 24) = 0$. The numbers with product $24$ and sum $-11$ are $-3$ and $-8$, so the equation is $2(x - 3)(x - 8) = 0$.\nStep 3: The solutions are $x = 3$ and $x = 8$, so the other solution is $8$. Check: $2(8)^{2} - 22(8) + 48 = 128 - 176 + 48 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): flips a sign while factoring, writing $2(x - 3)(x + 8)$. That product has middle term $+10x$, not $-22x$.\n* Choice C ($11$): computes $\\frac{22}{2} = 11$, which is the sum of the two solutions, not the second solution. Subtracting the known solution gives $11 - 3 = 8$.\n* Choice D ($16$): treats $48$ as the product of the solutions and computes $\\frac{48}{3} = 16$. The product of the solutions is $\\frac{48}{2} = 24$, because the leading coefficient is $2$.\n\n**Test Day Takeaway:** One known solution turns a quadratic into a quick factoring problem. Factor out the leading coefficient first, then find the pair of numbers whose product is the constant and whose sum is the middle coefficient.",
      skills: ["finding-roots-factoring"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In the $xy$-plane, a triangle has vertices at $(0, 0)$, $(14, 0)$, and $(6, h)$, where $h > 0$. The area of the triangle is $63$ square units. What is the value of $h$?",
      choices: [
        // distractor: divides 63 by the base 14 without doubling, dropping the factor of 1/2
        { id: "A", text: "$4.5$" },
        { id: "B", text: "$9$" },
        // distractor: uses 6, the x-coordinate of the third vertex, as the base: 63/6 = 10.5
        { id: "C", text: "$10.5$" },
        // distractor: doubles the area but divides by 7, half of the base: 126/7 = 18
        { id: "D", text: "$18$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The side on the x-axis is the base, $14$ units, and the height is $h$. From $\\frac{1}{2}(14)h = 63$, $h = 9$.\n\n**The Full Solution:**\nStep 1: Identify the base. The vertices $(0, 0)$ and $(14, 0)$ both lie on the x-axis, so that side has length $14$.\nStep 2: Identify the height. The height is the perpendicular distance from $(6, h)$ to the x-axis, which is $h$.\nStep 3: Solve the area equation. $\\frac{1}{2}(14)h = 63$ gives $7h = 63$, so $h = 9$. Check: $\\frac{1}{2}(14)(9) = 63$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4.5$): computes $\\frac{63}{14}$ and forgets the factor of $\\frac{1}{2}$ in the area formula.\n* Choice C ($10.5$): uses $6$ as the base. The $6$ is the x-coordinate of the third vertex, not a side length.\n* Choice D ($18$): doubles the area but divides by $7$ instead of $14$, halving the base a second time.\n\n**Test Day Takeaway:** When one side of a triangle lies on an axis, that side is the base, and the height is the distance from the opposite vertex to that axis. The other coordinate of that vertex does not affect the area.",
      skills: ["triangle-area"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The table shows the number of marbles of each color in a bag. Two marbles will be selected from the bag at random, one at a time, without replacement. What is the probability that both marbles selected are red?",
      diagram: { type: "dataTable", params: { headers: ["Color", "Number of marbles"], rows: [["Red", "10"], ["Blue", "9"], ["Green", "6"], ["Total", "25"]] } },
      correctAnswer: "3/20",
      explanation: "**SAT Pattern: Probability Without Replacement**\n\n**The correct answer is $\\frac{3}{20}$.**\n\n**The Fast Way (~25s):** The first marble is red with probability $\\frac{10}{25}$; with that marble removed, the second is red with probability $\\frac{9}{24}$. The product is $\\frac{90}{600} = \\frac{3}{20}$.\n\n**The Full Solution:**\nStep 1: The bag has $10$ red marbles out of $25$, so the first marble is red with probability $\\frac{10}{25} = \\frac{2}{5}$.\nStep 2: After one red marble is removed, $9$ red marbles remain among $24$, so the second marble is red with probability $\\frac{9}{24} = \\frac{3}{8}$.\nStep 3: Multiply: $\\frac{2}{5} \\times \\frac{3}{8} = \\frac{6}{40} = \\frac{3}{20}$. Check: $\\frac{10}{25} \\times \\frac{9}{24} = \\frac{90}{600} = \\frac{3}{20}$ ✓\n\n**Common Mistakes:**\n* $\\frac{4}{25}$: uses $\\frac{10}{25} \\times \\frac{10}{25}$, as if the first marble were put back.\n* $\\frac{1}{6}$: uses $\\frac{10}{25} \\times \\frac{10}{24}$, reducing the total to $24$ but forgetting that only $9$ red marbles remain.\n* $\\frac{2}{5}$: finds the probability for one marble only.\n\n**Test Day Takeaway:** Without replacement, both the number of favorable outcomes and the total drop by one before the second selection. Multiply the two fractions.",
      skills: ["probability-basics"]
    },
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "$\\frac{5}{3}x - \\frac{4}{3}y = \\frac{14}{3}$\n$ax + 12y = b$\nIn the given system of equations, $a$ and $b$ are constants. The system has infinitely many solutions. What is the value of $a + b$?",
      choices: [
        { id: "A", text: "$-57$" },
        // distractor: uses +9 for a and -9 for b, applying two different multipliers: 15 + (-42)
        { id: "B", text: "$-27$" },
        // distractor: uses -9 for a and +9 for b, applying two different multipliers: -15 + 42
        { id: "C", text: "$27$" },
        // distractor: multiplies by +9 throughout, missing the sign change needed to turn -4/3 into +12
        { id: "D", text: "$57$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** Infinitely many solutions means the second equation is a multiple of the first. Turning $-\\frac{4}{3}$ into $12$ takes a multiplier of $-9$, so $a = -9 \\cdot \\frac{5}{3} = -15$ and $b = -9 \\cdot \\frac{14}{3} = -42$, giving $a + b = -57$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has infinitely many solutions when both equations describe the same line, so every coefficient and the constant are multiplied by the same nonzero number.\nStep 2: Find the multiplier from the $y$-coefficients, the only pair fully known. $-\\frac{4}{3} \\cdot n = 12$ gives $n = -9$.\nStep 3: Apply $n = -9$ to the other terms. $a = \\frac{5}{3}(-9) = -15$ and $b = \\frac{14}{3}(-9) = -42$, so $a + b = -57$. Check: multiplying the first equation by $-9$ gives $-15x + 12y = -42$, which is the second equation with $a = -15$ and $b = -42$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-27$): multiplies $\\frac{5}{3}$ by $+9$ and $\\frac{14}{3}$ by $-9$, giving $15 + (-42)$. A single multiplier must apply to every term.\n* Choice C ($27$): makes the reverse mismatch, giving $-15 + 42$.\n* Choice D ($57$): uses $+9$ throughout, which would turn $-\\frac{4}{3}$ into $-12$, not $12$.\n\n**Test Day Takeaway:** For infinitely many solutions, find the one multiplier that maps a fully known coefficient to its partner, then apply it to every remaining term, including the constant.",
      skills: ["system-solution-types", "infinite-solutions-condition"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "Rectangle $A$ has a length of $x + 5$ inches and a width of $x$ inches. Rectangle $B$ has a length of $x + 9$ inches and a width of $x - 2$ inches. The two rectangles have the same area. What is the area, in square inches, of rectangle $A$?",
      correctAnswer: "126",
      explanation: "**SAT Pattern: Rectangle Area**\n\n**The correct answer is 126.**\n\n**The Fast Way (~40s):** Setting the areas equal gives $x^{2} + 5x = x^{2} + 7x - 18$. The $x^{2}$ terms cancel, leaving $2x = 18$ and $x = 9$, so rectangle $A$ has area $9(14) = 126$ square inches.\n\n**The Full Solution:**\nStep 1: Write both areas. Rectangle $A$ has area $x(x + 5) = x^{2} + 5x$, and rectangle $B$ has area $(x - 2)(x + 9) = x^{2} + 7x - 18$.\nStep 2: Set them equal and solve. $x^{2} + 5x = x^{2} + 7x - 18$ becomes $5x = 7x - 18$, so $2x = 18$ and $x = 9$.\nStep 3: Find the area of rectangle $A$, which is $9$ inches by $14$ inches: $9 \\times 14 = 126$ square inches. Check: rectangle $B$ is $7$ inches by $18$ inches, and $7 \\times 18 = 126$ ✓\n\n**Common Mistakes:**\n* $9$: stops at the value of $x$ instead of finding the area.\n* $14$: reports the length of rectangle $A$, $x + 5$, instead of its area.\n* $252$: adds the areas of the two rectangles instead of giving the area of rectangle $A$.\n\n**Test Day Takeaway:** When two areas are equal, expand both products and set them equal; matching $x^{2}$ terms cancel and the equation becomes linear. Then substitute back and answer the quantity the question asks for.",
      skills: ["triangle-area"]
    },
    {
      id: 19,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "$3x - 8 > k$\nIn the given inequality, $k$ is an integer. If the least integer value of $x$ that satisfies the inequality is $12$, what is the greatest possible value of $k$?",
      choices: [
        // distractor: uses 3(11) - 8 = 25, a value of k that works but is not the greatest one
        { id: "A", text: "$25$" },
        { id: "B", text: "$27$" },
        // distractor: uses 3(12) - 8 = 28, treating x = 12 as a solution of 3x - 8 = k rather than of the strict inequality
        { id: "C", text: "$28$" },
        // distractor: drops the -8 and computes 3(12) = 36
        { id: "D", text: "$36$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Smallest Integer in an Inequality**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Solving gives $x > \\frac{k + 8}{3}$. For $12$ to be the least integer solution, $11 \\le \\frac{k + 8}{3} < 12$, so $25 \\le k < 28$ and the greatest integer value of $k$ is $27$.\n\n**The Full Solution:**\nStep 1: Isolate $x$. Adding $8$ to both sides and dividing by $3$ gives $x > \\frac{k + 8}{3}$.\nStep 2: For $12$ to satisfy the inequality, $\\frac{k + 8}{3} < 12$; for $11$ not to satisfy it, $\\frac{k + 8}{3} \\ge 11$. Together, $11 \\le \\frac{k + 8}{3} < 12$.\nStep 3: Multiply by $3$: $33 \\le k + 8 < 36$, so $25 \\le k < 28$, and the greatest integer value is $k = 27$. Check: with $k = 27$, $x > \\frac{35}{3} \\approx 11.67$, so the least integer solution is $12$; with $k = 28$, $x > 12$, and the least integer solution would be $13$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($25$): comes from $3(11) - 8 = 25$. With $k = 25$ the least integer solution is $12$, but $26$ and $27$ also work, and the question asks for the greatest value.\n* Choice C ($28$): comes from $3(12) - 8 = 28$, which makes the two sides equal at $x = 12$. The inequality is strict, so $x = 12$ would not satisfy it.\n* Choice D ($36$): drops the $-8$ and computes $3(12)$, solving $3x > k$ instead.\n\n**Test Day Takeaway:** \"The least integer solution is $n$\" is a two-sided condition: $n$ must satisfy the inequality and $n - 1$ must not. Write both conditions, then find the extreme value of the constant.",
      skills: ["inequalities"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "$5(2x - 3) + k = a(x + 4) - 1$\nIn the given equation, $a$ and $k$ are constants. If the equation has infinitely many solutions, what is the value of $k$?",
      choices: [
        // distractor: computes 39 - 15 instead of 39 + 15, moving the -15 the wrong way
        { id: "A", text: "$24$" },
        // distractor: stops at the right side's constant 4a - 1 = 39 without undoing the -15 on the left
        { id: "B", text: "$39$" },
        { id: "C", text: "$54$" },
        // distractor: drops the -1 on the right, solving -15 + k = 40
        { id: "D", text: "$55$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** Expand both sides: $10x - 15 + k = ax + 4a - 1$. Matching $x$-coefficients gives $a = 10$, and matching constants gives $-15 + k = 39$, so $k = 54$.\n\n**The Full Solution:**\nStep 1: Expand each side. The left side is $10x - 15 + k$, and the right side is $ax + 4a - 1$.\nStep 2: An equation with infinitely many solutions has identical sides, so the $x$-coefficients match: $a = 10$.\nStep 3: Match the constant terms. With $a = 10$, the right side's constant is $4(10) - 1 = 39$, so $-15 + k = 39$ and $k = 54$. Check: the left side becomes $10x - 15 + 54 = 10x + 39$, and the right side becomes $10x + 40 - 1 = 10x + 39$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($24$): computes $39 - 15$. Isolating $k$ in $-15 + k = 39$ means adding $15$ to $39$.\n* Choice B ($39$): reports the right side's constant, $4a - 1$, which equals $-15 + k$, not $k$.\n* Choice D ($55$): drops the $-1$ and matches $-15 + k$ to $4a = 40$.\n\n**Test Day Takeaway:** A linear equation has infinitely many solutions when both sides are the same expression. Expand, match the $x$-coefficients to find the first constant, then substitute it before matching the constant terms.",
      skills: ["distributive-property"]
    },
    {
      id: 21,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "The table shows the number of square feet that $1$ gallon of each of three types of paint covers. Ana will apply two coats of paint Y to walls with a total area of $1{,}600$ square feet. Paint Y is sold only in $1$-quart cans, and $1$ gallon is equal to $4$ quarts. What is the least number of cans of paint Y Ana needs?",
      diagram: { type: "dataTable", params: { headers: ["Paint", "Area covered per gallon (square feet)"], rows: [["X", "425"], ["Y", "340"], ["Z", "510"]] } },
      correctAnswer: "38",
      explanation: "**SAT Pattern: Proportion Solving**\n\n**The correct answer is $38$.**\n\n**The Fast Way (~45s):** Two coats cover $2(1{,}600) = 3{,}200$ square feet, and one quart of paint Y covers $\\frac{340}{4} = 85$ square feet, so Ana needs $\\frac{3{,}200}{85} \\approx 37.6$ quarts. She can buy only whole cans, so she needs $38$ cans.\n\n**The Full Solution:**\nStep 1: Find the total area to be painted. Each coat covers the whole $1{,}600$ square feet, so two coats require paint for $2 \\times 1{,}600 = 3{,}200$ square feet.\nStep 2: Convert the coverage rate to quarts. Paint Y covers $340$ square feet per gallon, and $1$ gallon is $4$ quarts, so one quart covers $\\frac{340}{4} = 85$ square feet. Ana needs $\\frac{3{,}200}{85} \\approx 37.6$ quarts.\nStep 3: Paint is sold only in whole $1$-quart cans, so round up: $37$ cans are not enough and $38$ cans are. Check: $37$ cans cover $37 \\times 85 = 3{,}145$ square feet, which is less than $3{,}200$, while $38$ cans cover $38 \\times 85 = 3{,}230$ square feet ✓\n\n**Common Mistakes:**\n* $37$: rounds $37.6$ down. Thirty-seven cans cover only $3{,}145$ square feet, so the second coat would not be finished.\n* $40$: rounds $9.41$ gallons up to $10$ gallons before converting to quarts. Forty cans are enough, but fewer cans also work.\n* $19$: applies a single coat, computing $\\frac{1{,}600}{85} \\approx 18.8$ quarts.\n\n**Test Day Takeaway:** Track the units at every step of a rate chain, account for repeated coats before dividing, and round only at the end: when an item comes in whole units, the least number that is enough is the next whole number up.",
      skills: ["unit-conversion"]
    },
    {
      id: 22,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "At a company, $60\\%$ of phones are made at factory A and $40\\%$ at factory B. The defect rate is $8\\%$ at factory A and $3\\%$ at factory B. If a defective phone is selected at random, what is the probability that it was made at factory A?",
      choices: [
        // distractor: reports 0.60 x 0.08 = 0.048, the share of ALL phones that are defective and from factory A
        { id: "A", text: "$0.048$" },
        // distractor: reports the overall defect rate, 0.048 + 0.012 = 0.06
        { id: "B", text: "$0.06$" },
        // distractor: reports factory A's share of production, ignoring the two different defect rates
        { id: "C", text: "$0.6$" },
        { id: "D", text: "$0.8$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice D is correct.**\n\n**The Fast Way (~45s):** Take $1{,}000$ phones: $600$ from factory A give $48$ defective phones, and $400$ from factory B give $12$, for $60$ defective phones in all. Then $\\frac{48}{60} = 0.8$.\n\n**The Full Solution:**\nStep 1: Count the defective phones from each factory. Out of $1{,}000$ phones, factory A makes $600$, of which $0.08(600) = 48$ are defective, and factory B makes $400$, of which $0.03(400) = 12$ are defective.\nStep 2: The phone selected is known to be defective, so the group to choose from is the $48 + 12 = 60$ defective phones.\nStep 3: Divide: $\\frac{48}{60} = 0.8$. Check: $\\frac{12}{60} = 0.2$ of the defective phones are from factory B, and $0.8 + 0.2 = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.048$): computes $0.60 \\times 0.08$, the share of all phones that are defective and from factory A. That is the numerator, divided by the wrong total.\n* Choice B ($0.06$): adds $0.048$ and $0.012$ to get the company's overall defect rate. That is the denominator, not the answer.\n* Choice C ($0.6$): reports factory A's share of all phones. Defective phones are not split in the same ratio, because factory A has the higher defect rate.\n\n**Test Day Takeaway:** A \"given\" condition shrinks the group you divide by. Once you know the phone is defective, divide by the number of defective phones, and choosing a round total such as $1{,}000$ turns the percents into counts.",
      skills: ["conditional-probability"]
    }
  ]
};

export default practiceTest3M2Easy;
