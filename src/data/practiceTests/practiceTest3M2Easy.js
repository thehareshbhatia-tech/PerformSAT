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
      question: "The scatterplot shows $11$ data points and a line of best fit for the data. Based on the line, which of the following is closest to the predicted value of $y$ when $x = 12$?",
      diagram: { type: "scatterplot", params: { points: [[1, 24], [2, 22], [4, 36], [5, 31], [7, 46], [8, 42], [10, 58], [12, 66], [13, 59], [15, 74], [16, 70]], xMin: 0, xMax: 16, yMin: 0, yMax: 80, xGridStep: 2, yGridStep: 10, xLabelStep: 4, yLabelStep: 20, xLabel: "x", yLabel: "y", bestFitLine: { slope: 3.5, intercept: 18 } } },
      choices: [
        // distractor: gives how far the data point at x = 12 lies above the line, 66 - 60 = 6, instead of the predicted value
        { id: "A", text: "$6$" },
        // distractor: reads the line where it meets the y-axis, at x = 0, instead of at x = 12
        { id: "B", text: "$18$" },
        { id: "C", text: "$60$" },
        // distractor: reads the data point at x = 12, the actual y-value 66, instead of the line
        { id: "D", text: "$66$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Go up from $x = 12$ to the line of best fit and read across: the line passes through $(12, 60)$.\n\n**The Full Solution:**\nStep 1: Find $x = 12$ on the $x$-axis.\nStep 2: Move straight up to the line of best fit, not to the data point. The line crosses $x = 12$ where it meets the gridline $y = 60$.\nStep 3: The predicted value of $y$ is about $60$. Check: the data point at $x = 12$ is $(12, 66)$, which lies above the line, so the prediction must be less than $66$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): is the vertical distance from the data point $(12, 66)$ down to the line, not the predicted value.\n* Choice B ($18$): is where the line meets the $y$-axis, the predicted value at $x = 0$.\n* Choice D ($66$): is the actual $y$-value of the data point at $x = 12$; the question asks for the value on the line.\n\n**Test Day Takeaway:** A predicted value comes from the line of best fit, not from a data point: go up from the given $x$-value to the line and read across.",
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
      question: "A bakery made $640$ cookies: $160$ oatmeal, $288$ chocolate chip, and the rest sugar. If one of these cookies is selected at random, what is the probability of selecting a cookie that is not chocolate chip?",
      choices: [
        // distractor: counts only the 160 oatmeal cookies as not chocolate chip, leaving out the sugar cookies
        { id: "A", text: "$\\frac{1}{4}$" },
        // distractor: counts only the 192 sugar cookies as not chocolate chip, leaving out the oatmeal cookies
        { id: "B", text: "$\\frac{3}{10}$" },
        // distractor: finds the probability of selecting a chocolate chip cookie, 288/640, instead of a cookie that is not chocolate chip
        { id: "C", text: "$\\frac{9}{20}$" },
        { id: "D", text: "$\\frac{11}{20}$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Basic Probability**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The cookies that are not chocolate chip number $640 - 288 = 352$, so the probability is $\\frac{352}{640} = \\frac{11}{20}$.\n\n**The Full Solution:**\nStep 1: The cookies that are not chocolate chip are the oatmeal cookies and the sugar cookies. There are $640 - 160 - 288 = 192$ sugar cookies.\nStep 2: The number of cookies that are not chocolate chip is $160 + 192 = 352$, which is the same as $640 - 288$.\nStep 3: Divide by the total: $\\frac{352}{640} = \\frac{11}{20}$. Check: the probability of selecting a chocolate chip cookie is $\\frac{288}{640} = \\frac{9}{20}$, and $\\frac{9}{20} + \\frac{11}{20} = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{4}$): this is $\\frac{160}{640}$, which counts only the oatmeal cookies. The sugar cookies are also not chocolate chip.\n* Choice B ($\\frac{3}{10}$): this is $\\frac{192}{640}$, which counts only the sugar cookies and leaves out the oatmeal cookies.\n* Choice C ($\\frac{9}{20}$): this is $\\frac{288}{640}$, the probability of selecting a chocolate chip cookie, the opposite of what the question asks.\n\n**Test Day Takeaway:** For \"not\" a category, subtract that category from the total, or subtract its probability from $1$; then check that the two probabilities add to $1$.",
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
      question: "Based on a random sample of loaves from a bakery, it is estimated that the mean mass of all the bakery's loaves is between $412.6$ grams and $419.4$ grams. What is the margin of error, in grams, for this estimate?",
      correctAnswer: "3.4",
      explanation: "**SAT Pattern: Margin of Error**\n\n**The correct answer is 3.4.**\n\n**The Fast Way (~15s):** The interval is the sample mean plus or minus the margin of error, so the margin of error is half the width: $\\frac{419.4 - 412.6}{2} = 3.4$ grams.\n\n**The Full Solution:**\nStep 1: An estimate like this runs from (sample mean $-$ margin of error) to (sample mean $+$ margin of error), so its width is twice the margin of error.\nStep 2: Find the width: $419.4 - 412.6 = 6.8$ grams.\nStep 3: Halve the width: $\\frac{6.8}{2} = 3.4$ grams. Check: the midpoint is $\\frac{412.6 + 419.4}{2} = 416$, and $416 - 3.4 = 412.6$ and $416 + 3.4 = 419.4$ ✓\n\n**Common Mistakes:**\n* $6.8$: reports the full width of the interval, which is twice the margin of error.\n* $416$: reports the midpoint, which is the sample mean, not the margin of error.\n* $1.7$: halves the width twice, dividing $6.8$ by $4$.\n\n**Test Day Takeaway:** The margin of error is half the width of the interval, and the sample mean is the midpoint. Given the endpoints, subtract and divide by $2$.",
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
      question: "Line $\\ell$ is parallel to the graph of $y = \\frac{5}{2}x - 3$ in the $xy$-plane. Line $\\ell$ passes through the points $(0, 0)$ and $(6, d)$. What is the value of $d$?",
      choices: [
        // distractor: uses the reciprocal of the slope, 2/5, giving (2/5)(6)
        { id: "A", text: "$\\frac{12}{5}$" },
        // distractor: substitutes x = 6 into the given equation, which describes a different line, giving (5/2)(6) - 3
        { id: "B", text: "$12$" },
        { id: "C", text: "$15$" },
        // distractor: writes line l as y = (5/2)x + 3, giving (5/2)(6) + 3, but line l passes through the origin
        { id: "D", text: "$18$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Line $\\ell$ has slope $\\frac{5}{2}$ and passes through the origin, so its equation is $y = \\frac{5}{2}x$, and $d = \\frac{5}{2}(6) = 15$.\n\n**The Full Solution:**\nStep 1: The given line has slope $\\frac{5}{2}$, and parallel lines have the same slope, so line $\\ell$ has slope $\\frac{5}{2}$.\nStep 2: Line $\\ell$ passes through $(0, 0)$, so its $y$-intercept is $0$ and its equation is $y = \\frac{5}{2}x$.\nStep 3: Substitute $x = 6$: $d = \\frac{5}{2}(6) = 15$. Check: the slope from $(0, 0)$ to $(6, 15)$ is $\\frac{15 - 0}{6 - 0} = \\frac{5}{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{12}{5}$): uses the reciprocal slope, $\\frac{2}{5}$, so $\\frac{2}{5}(6) = \\frac{12}{5}$.\n* Choice B ($12$): substitutes $x = 6$ into the given equation, $\\frac{5}{2}(6) - 3 = 12$. Line $\\ell$ is a different line through the origin.\n* Choice D ($18$): uses $+3$ as the $y$-intercept, $\\frac{5}{2}(6) + 3$. Line $\\ell$ passes through $(0, 0)$, so its $y$-intercept is $0$.\n\n**Test Day Takeaway:** A line parallel to $y = mx + b$ through the origin is $y = mx$; multiply the slope by the $x$-coordinate to get the $y$-coordinate.",
      skills: ["writing-parallel-equation"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$3x^{2} + kx + 6$\nIn the given expression, $k$ is a constant. If $x - 3$ is a factor of the expression, what is the value of $k$?",
      choices: [
        { id: "A", text: "$-11$" },
        // distractor: multiplies (x - 3)(3x - 2) but keeps only the -9x term, leaving out the -2x term
        { id: "B", text: "$-9$" },
        // distractor: substitutes x = 3 but uses x^2 instead of 3x^2, solving 9 + 3k + 6 = 0
        { id: "C", text: "$-5$" },
        // distractor: substitutes x = -3 instead of x = 3, solving 27 - 3k + 6 = 0
        { id: "D", text: "$11$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Polynomial Factoring with Given Factor**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** If $x - 3$ is a factor, the expression equals $0$ when $x = 3$: $3(3)^{2} + 3k + 6 = 0$, so $33 + 3k = 0$ and $k = -11$.\n\n**The Full Solution:**\nStep 1: If $x - 3$ is a factor of the expression, then the expression equals $0$ when $x - 3 = 0$, that is, when $x = 3$.\nStep 2: Substitute $x = 3$: $3(9) + 3k + 6 = 0$, which gives $33 + 3k = 0$.\nStep 3: Solve: $3k = -33$, so $k = -11$. Check: $(x - 3)(3x - 2) = 3x^{2} - 2x - 9x + 6 = 3x^{2} - 11x + 6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-9$): multiplies $(x - 3)(3x - 2)$ but keeps only the $-9x$ term. The $-2x$ term also belongs to the middle term.\n* Choice C ($-5$): drops the coefficient $3$ on $x^{2}$, solving $9 + 3k + 6 = 0$.\n* Choice D ($11$): substitutes $x = -3$. The factor $x - 3$ is zero when $x = 3$, not $-3$.\n\n**Test Day Takeaway:** $x - a$ is a factor exactly when the expression equals $0$ at $x = a$; substitute $a$ and solve for the unknown constant.",
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
      question: "The table shows the number of marbles of each color in a bag. One red marble is removed from the bag and not replaced. If one of the remaining marbles is then selected at random, what is the probability of selecting a red marble? (Express your answer as a decimal or fraction, not as a percent.)",
      diagram: { type: "dataTable", params: { headers: ["Color", "Number of marbles"], rows: [["Red", "10"], ["Blue", "9"], ["Green", "6"], ["Total", "25"]] } },
      correctAnswer: "3/8",
      explanation: "**SAT Pattern: Probability Without Replacement**\n\n**The correct answer is $\\frac{3}{8}$.**\n\n**The Fast Way (~20s):** After one red marble is removed, $9$ red marbles remain among $24$ marbles, so the probability is $\\frac{9}{24} = \\frac{3}{8}$.\n\n**The Full Solution:**\nStep 1: The bag starts with $10$ red marbles and $25$ marbles in all.\nStep 2: Removing one red marble lowers both counts by $1$: $10 - 1 = 9$ red marbles and $25 - 1 = 24$ marbles in all.\nStep 3: The probability of selecting a red marble from the remaining marbles is $\\frac{9}{24} = \\frac{3}{8}$. Check: $\\frac{3}{8} = 0.375$, and $9 \\div 24 = 0.375$ ✓\n\n**Common Mistakes:**\n* $\\frac{2}{5}$: uses the original counts, $\\frac{10}{25}$, as if the red marble had not been removed.\n* $\\frac{5}{12}$: lowers the total to $24$ but keeps $10$ red marbles, giving $\\frac{10}{24}$.\n* $\\frac{9}{25}$: lowers the number of red marbles to $9$ but keeps the total at $25$.\n\n**Test Day Takeaway:** When an item is removed and not replaced, both the number of favorable outcomes and the total change before the next selection; update both counts, then divide.",
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
      question: "The table shows the number of square feet that $1$ gallon of each of three types of paint covers. Ana will use paint Y to cover walls with a total area of $1{,}600$ square feet. Paint Y is sold only in $1$-quart cans, and $1$ gallon is equal to $4$ quarts. What is the least number of cans of paint Y Ana needs?",
      diagram: { type: "dataTable", params: { headers: ["Paint", "Area covered per gallon (square feet)"], rows: [["X", "425"], ["Y", "340"], ["Z", "510"]] } },
      correctAnswer: "19",
      explanation: "**SAT Pattern: Proportion Solving**\n\n**The correct answer is $19$.**\n\n**The Fast Way (~30s):** One quart of paint Y covers $\\frac{340}{4} = 85$ square feet, so Ana needs $\\frac{1{,}600}{85} \\approx 18.8$ quarts. She can buy only whole cans, so she needs $19$ cans.\n\n**The Full Solution:**\nStep 1: From the table, paint Y covers $340$ square feet per gallon. Since $1$ gallon is $4$ quarts, one quart covers $\\frac{340}{4} = 85$ square feet.\nStep 2: Divide the area by the coverage per quart: $\\frac{1{,}600}{85} \\approx 18.8$ quarts.\nStep 3: Paint is sold only in whole $1$-quart cans, so round up to $19$ cans. Check: $18$ cans cover $18 \\times 85 = 1{,}530$ square feet, which is less than $1{,}600$, while $19$ cans cover $19 \\times 85 = 1{,}615$ square feet ✓\n\n**Common Mistakes:**\n* $18$: rounds $18.8$ down. Eighteen cans cover only $1{,}530$ square feet, which is not enough.\n* $5$: finds the number of gallons, $\\frac{1{,}600}{340} \\approx 4.7$, rounds up to $5$, and never converts gallons to quarts.\n* $20$: rounds $4.7$ gallons up to $5$ gallons before converting, giving $20$ quarts. Twenty cans are enough, but fewer also work.\n\n**Test Day Takeaway:** Convert the rate to the unit the item is sold in before dividing, and round only at the end: when an item comes in whole units, the least number that is enough is the next whole number up.",
      skills: ["unit-conversion"]
    },
    {
      id: 22,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "A company made $600$ phones at factory A and $400$ phones at factory B. Of these, $8\\%$ of factory A's phones and $3\\%$ of factory B's phones were defective. If one of the defective phones is selected at random, what is the probability that it was made at factory A?",
      choices: [
        // distractor: divides the 48 defective phones from factory A by all 1,000 phones instead of by the 60 defective phones
        { id: "A", text: "$0.048$" },
        // distractor: reports the share of all 1,000 phones that are defective, 60/1,000
        { id: "B", text: "$0.06$" },
        // distractor: reports factory A's share of all phones made, 600/1,000, ignoring the two different defect rates
        { id: "C", text: "$0.6$" },
        { id: "D", text: "$0.8$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Factory A made $0.08(600) = 48$ defective phones and factory B made $0.03(400) = 12$, for $60$ defective phones in all, so the probability is $\\frac{48}{60} = 0.8$.\n\n**The Full Solution:**\nStep 1: Count the defective phones from each factory: $0.08(600) = 48$ from factory A and $0.03(400) = 12$ from factory B.\nStep 2: The phone is selected from the defective phones, so the total to divide by is $48 + 12 = 60$.\nStep 3: Divide: $\\frac{48}{60} = 0.8$. Check: $\\frac{12}{60} = 0.2$ of the defective phones are from factory B, and $0.8 + 0.2 = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.048$): this is $\\frac{48}{1{,}000}$, which divides by all the phones instead of by the defective phones.\n* Choice B ($0.06$): this is $\\frac{60}{1{,}000}$, the share of all phones that are defective. That is a total, not the answer.\n* Choice C ($0.6$): this is $\\frac{600}{1{,}000}$, factory A's share of all phones. Defective phones are not split in the same ratio, because factory A has the higher defect rate.\n\n**Test Day Takeaway:** When the selection is made from one group, such as the defective phones, that group's total is the denominator. Turn each percent into a count first, then divide.",
      skills: ["conditional-probability"]
    }
  ]
};

export default practiceTest3M2Easy;
