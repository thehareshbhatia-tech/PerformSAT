// Practice Test 11 — Math Module 2 Easy variant (22 questions)
// v2 freshness rebuild (2026-09-07): every slot re-patterned and re-authored against the seen-corpus gate — docs/TEST_RECREATION_V2_SPEC.md
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Official-calibration recreation (2026-09-01): fresh content authored per
// docs/TEST_RECREATION_SPEC.md against the CB Educator QBank register.
// Slot metadata (id/type/difficulty/band/skills/pattern) frozen. 4 diagram
// items (triangle, bar graph, line graph, right triangle). Numeric MC
// choices sorted ascending. Palette: ropes courses, vending machines,
// camera-equipment rental, seed-drill calibration, hotel linen laundry,
// elevator load limits.

export const practiceTest11M2Easy = {
  id: "module-2-easy",
  title: "Module 2 (Easy)",
  variant: "easy",
  timeLimit: 35,
  questions: [
    // ============================================================
    // Q1-Q3: Easy openers (band 2-3)
    // ============================================================
    {
      id: 1,
      type: "multiple-choice",
      difficulty: "easy",
      band: 2,
      question: "$f(x) = 2(x - 3)^{2} + 1$\nThe graph of $y = f(x)$ for the given function $f$ is shown. Which expression is equivalent to $f(x)$?",
      diagram: { type: "parabola", params: { vertex: { h: 3, k: 1 }, a: 2, xRange: [1, 5], yRange: [0, 10], xTickInterval: 1, yTickInterval: 2, gridInterval: 1, showVertex: false } },
      choices: [
        // distractor: squares (x - 3) as x^2 - 6x, dropping the +9, so the constant term stays at 1
        { id: "A", text: "$2x^{2} - 12x + 1$" },
        // distractor: adds 9 + 1 = 10 without first multiplying the 9 by 2
        { id: "B", text: "$2x^{2} - 12x + 10$" },
        // distractor: squares (x - 3) as x^2 - 3x + 9, forgetting to double the middle term
        { id: "C", text: "$2x^{2} - 6x + 19$" },
        { id: "D", text: "$2x^{2} - 12x + 19$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Square first, then distribute: $(x - 3)^{2} = x^{2} - 6x + 9$, so $2(x^{2} - 6x + 9) + 1 = 2x^{2} - 12x + 19$.\n\n**The Full Solution:**\nStep 1: Expand the square: $(x - 3)^{2} = x^{2} - 6x + 9$.\nStep 2: Multiply every term by $2$: $2(x^{2} - 6x + 9) = 2x^{2} - 12x + 18$.\nStep 3: Add the $1$: $2x^{2} - 12x + 18 + 1 = 2x^{2} - 12x + 19$. Check at $x = 3$: the original gives $2(0)^{2} + 1 = 1$, and $2(9) - 36 + 19 = 1$, which matches the lowest point of the graph shown ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2x^{2} - 12x + 1$): drops the $+9$ from $(x - 3)^{2}$, so the constant term never picks up $2(9) = 18$. At $x = 3$ it gives $-17$, not $1$.\n* Choice B ($2x^{2} - 12x + 10$): adds $9 + 1 = 10$ without multiplying the $9$ by $2$ first.\n* Choice C ($2x^{2} - 6x + 19$): expands $(x - 3)^{2}$ as $x^{2} - 3x + 9$; the middle term of a square is twice the product, $2(x)(-3) = -6x$, before the factor of $2$ doubles it again.\n\n**Test Day Takeaway:** Expand the square completely before distributing the outside factor, and test the vertex: the standard form must give the same output there.",
      skills: ["distributive-property", "converting-quadratic-forms"]
    },
    {
      id: 2,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "$2x + 3y = 23$\n$2x - y = 11$\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
      choices: [
        { id: "A", text: "$3$" },
        // distractor: subtracts the equations but treats 3y - (-y) as 2y, so 2y = 12 and y = 6
        { id: "B", text: "$6$" },
        // distractor: reports the value of x instead of y
        { id: "C", text: "$7$" },
        // distractor: finds 4y = 12 and stops before dividing by 4
        { id: "D", text: "$12$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Subtracting the second equation from the first eliminates $x$: $4y = 12$, so $y = 3$.\n\n**The Full Solution:**\nStep 1: Both equations have $2x$, so subtract the second equation from the first: $(2x + 3y) - (2x - y) = 23 - 11$.\nStep 2: Simplify: $3y - (-y) = 4y$, so $4y = 12$.\nStep 3: Divide by $4$: $y = 3$. Then $2x - 3 = 11$ gives $x = 7$. Check in the first equation: $2(7) + 3(3) = 14 + 9 = 23$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): subtracts $-y$ as though it were $+y$, getting $2y = 12$. Subtracting a negative adds it, so the $y$-terms combine to $4y$.\n* Choice C ($7$): this is the value of $x$ in the solution, not $y$.\n* Choice D ($12$): stops at $4y = 12$ without dividing by $4$.\n\n**Test Day Takeaway:** When the same $x$-term appears in both equations, subtract to eliminate it, and watch the signs: subtracting $-y$ adds $y$.",
      skills: ["elimination-method", "setting-up-systems"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "A right triangle has legs of length $a$ units and $a\\sqrt{3}$ units. What is the area, in square units, of the triangle?",
      choices: [
        // distractor: uses the area formula for an equilateral triangle, s^2 sqrt(3)/4, with side a
        { id: "A", text: "$\\dfrac{a^{2}\\sqrt{3}}{4}$" },
        { id: "B", text: "$\\dfrac{a^{2}\\sqrt{3}}{2}$" },
        // distractor: multiplies a by a sqrt(3) as though sqrt(3) times a gave 3a, getting 3a^2 before halving
        { id: "C", text: "$\\dfrac{3a^{2}}{2}$" },
        // distractor: multiplies the two legs and forgets the factor of 1/2
        { id: "D", text: "$a^{2}\\sqrt{3}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Right Triangle Area with Surds**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The legs of a right triangle are a base and a height, so the area is $\\frac{1}{2}(a)(a\\sqrt{3}) = \\frac{a^{2}\\sqrt{3}}{2}$.\n\n**The Full Solution:**\nStep 1: In a right triangle the two legs are perpendicular, so one leg is the base and the other is the height.\nStep 2: Apply $A = \\frac{1}{2}bh$: $A = \\frac{1}{2}(a)(a\\sqrt{3})$.\nStep 3: Multiply: $a \\cdot a\\sqrt{3} = a^{2}\\sqrt{3}$, so $A = \\frac{a^{2}\\sqrt{3}}{2}$. Check with $a = 2$: the legs are $2$ and $2\\sqrt{3}$, the area is $\\frac{1}{2}(2)(2\\sqrt{3}) = 2\\sqrt{3}$, and $\\frac{4\\sqrt{3}}{2} = 2\\sqrt{3}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{a^{2}\\sqrt{3}}{4}$): uses the equilateral-triangle formula $\\frac{s^{2}\\sqrt{3}}{4}$; this triangle is a right triangle with two different legs.\n* Choice C ($\\frac{3a^{2}}{2}$): treats $a \\cdot a\\sqrt{3}$ as $3a^{2}$, which squares the $\\sqrt{3}$ when it should stay as $\\sqrt{3}$.\n* Choice D ($a^{2}\\sqrt{3}$): multiplies the legs but leaves out the $\\frac{1}{2}$ in the triangle area formula.\n\n**Test Day Takeaway:** For a right triangle, the legs are the base and height; multiply them, keep any radical as it is, and halve.",
      skills: ["triangle-area"]
    },
    // ============================================================
    // Q4-Q16: Medium core (band 4-5)
    // ============================================================
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "Last month, Ana spent $x$ dollars on groceries and $3x$ dollars on rent, for a total of $\\$1{,}596$. What is the value of $x$?",
      choices: [
        { id: "A", text: "$399$" },
        // distractor: drops the x term and solves 3x = 1,596, so x = 532
        { id: "B", text: "$532$" },
        // distractor: reports the amount spent on rent, 3x = 1,197, instead of x
        { id: "C", text: "$1{,}197$" },
        // distractor: subtracts the combined coefficient 4 from 1,596 instead of dividing by it
        { id: "D", text: "$1{,}592$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The total is $x + 3x = 4x$, so $4x = 1{,}596$ and $x = 399$.\n\n**The Full Solution:**\nStep 1: Write the total as an equation: $x + 3x = 1{,}596$.\nStep 2: Combine like terms: $x + 3x = 4x$, so $4x = 1{,}596$.\nStep 3: Divide by $4$: $x = 399$. Check: $3(399) = 1{,}197$ and $399 + 1{,}197 = 1{,}596$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($532$): solves $3x = 1{,}596$, leaving out the $x$ dollars spent on groceries.\n* Choice C ($1{,}197$): this is $3x$, the amount spent on rent, not the value of $x$.\n* Choice D ($1{,}592$): subtracts $4$ from $1{,}596$; the $4$ in $4x$ multiplies $x$, so undo it by dividing.\n\n**Test Day Takeaway:** Combine the like terms into one term first; then a single division finishes the equation.",
      skills: ["combining-like-terms"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In the $xy$-plane, the graph of the linear function $f$ passes through the points $(2, 11)$ and $(6, 23)$. Which equation defines $f$?",
      choices: [
        { id: "A", text: "$f(x) = 3x + 5$" },
        // distractor: uses the y-coordinate of the point (2, 11) as the y-intercept
        { id: "B", text: "$f(x) = 3x + 11$" },
        // distractor: adds instead of subtracts when solving for the intercept: b = 11 + 3(2) = 17
        { id: "C", text: "$f(x) = 3x + 17$" },
        // distractor: uses the change in y, 12, as the slope without dividing by the change in x, 4, then b = 11 - 12(2) = -13
        { id: "D", text: "$f(x) = 12x - 13$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The slope is $\\frac{23 - 11}{6 - 2} = 3$, and $11 = 3(2) + b$ gives $b = 5$, so $f(x) = 3x + 5$.\n\n**The Full Solution:**\nStep 1: Find the slope from the two points: $m = \\frac{23 - 11}{6 - 2} = \\frac{12}{4} = 3$.\nStep 2: Substitute the slope and the point $(2, 11)$ into $f(x) = mx + b$: $11 = 3(2) + b$, so $b = 5$.\nStep 3: Write the function: $f(x) = 3x + 5$. Check with the other point: $f(6) = 3(6) + 5 = 23$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($f(x) = 3x + 11$): uses $11$ as the $y$-intercept, but $11$ is the output at $x = 2$, not at $x = 0$. This line gives $f(2) = 17$.\n* Choice C ($f(x) = 3x + 17$): solves $11 = 6 + b$ as $b = 11 + 6$, adding when it should subtract.\n* Choice D ($f(x) = 12x - 13$): takes the change in $y$, $12$, as the slope without dividing by the change in $x$, $4$.\n\n**Test Day Takeaway:** Slope is change in $y$ divided by change in $x$; then substitute one point to find the intercept and check the other point.",
      skills: ["linear-functions", "slope", "coordinate-geometry"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "For the linear function $f$, the table shows four values of $x$ and their corresponding values of $f(x)$. What is the value of $f(16)$?",
      diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["2", "47"], ["5", "38"], ["8", "29"], ["11", "20"]] } },
      correctAnswer: "5",
      explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is 5.**\n\n**The Fast Way (~25s):** Each increase of $3$ in $x$ lowers $f(x)$ by $9$, so the slope is $-3$; from $f(11) = 20$, five more units give $f(16) = 20 - 15 = 5$.\n\n**The Full Solution:**\nStep 1: Find the slope: from $x = 2$ to $x = 5$, $f(x)$ goes from $47$ to $38$, so $m = \\frac{38 - 47}{5 - 2} = \\frac{-9}{3} = -3$.\nStep 2: Find the intercept: $47 = -3(2) + b$, so $b = 53$ and $f(x) = -3x + 53$.\nStep 3: Evaluate: $f(16) = -3(16) + 53 = -48 + 53 = 5$. Check the rule against another row: $f(8) = -24 + 53 = 29$ ✓\n\n**Common Mistakes:**\n* $-79$: uses the drop of $9$ between rows as the slope, giving $f(x) = -9x + 65$; the rows are $3$ units apart in $x$, so the slope is $-3$.\n* $11$: evaluates $f(14)$, the next value in the table's pattern, instead of $f(16)$.\n* $-1$: uses $47$ as the $y$-intercept, writing $f(x) = -3x + 47$; the $47$ is the output at $x = 2$, not at $x = 0$.\n\n**Test Day Takeaway:** From a table, divide the change in outputs by the change in inputs to get the slope, then anchor the rule on one row before evaluating.",
      skills: ["function-evaluation"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Each of the $24$ boxes in a shipment contains either $18$ pens or $30$ pens. There are $552$ pens in the shipment. How many boxes in the shipment contain $30$ pens?",
      choices: [
        // distractor: finds the 120 extra pens but divides by 30 instead of by the 12-pen difference per box
        { id: "A", text: "$4$" },
        { id: "B", text: "$10$" },
        // distractor: reports the number of boxes that contain 18 pens
        { id: "C", text: "$14$" },
        // distractor: divides the total number of pens by the number of boxes, 552/24 = 23
        { id: "D", text: "$23$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** If all $24$ boxes held $18$ pens there would be $432$ pens; each $30$-pen box adds $12$ more, and $\\frac{552 - 432}{12} = 10$.\n\n**The Full Solution:**\nStep 1: Let $a$ be the number of $18$-pen boxes and $b$ the number of $30$-pen boxes: $a + b = 24$ and $18a + 30b = 552$.\nStep 2: Substitute $a = 24 - b$: $18(24 - b) + 30b = 552$, so $432 + 12b = 552$ and $12b = 120$.\nStep 3: Divide: $b = 10$, so $a = 14$. Check: $18(14) + 30(10) = 252 + 300 = 552$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): divides the $120$ extra pens by $30$; each $30$-pen box adds only $30 - 18 = 12$ pens beyond an $18$-pen box.\n* Choice C ($14$): this is the number of boxes that contain $18$ pens.\n* Choice D ($23$): divides $552$ by $24$, the average number of pens per box, which is not a count of boxes.\n\n**Test Day Takeaway:** Write one equation for the count and one for the total; substitute, and make sure your answer is the quantity the question names.",
      skills: ["word-problem-to-equation", "setting-up-systems"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Line $k$ is defined by $y = \\frac{3}{4}x + 2$. Line $j$ is perpendicular to line $k$ and passes through the point $(6, 5)$. Which equation defines line $j$?",
      choices: [
        // distractor: uses the same slope as line k, which gives a parallel line through (6, 5)
        { id: "A", text: "$y = \\frac{3}{4}x + \\frac{1}{2}$" },
        // distractor: takes the reciprocal of 3/4 but not its opposite
        { id: "B", text: "$y = \\frac{4}{3}x - 3$" },
        // distractor: takes the opposite of 3/4 but not its reciprocal
        { id: "C", text: "$y = -\\frac{3}{4}x + \\frac{19}{2}$" },
        { id: "D", text: "$y = -\\frac{4}{3}x + 13$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** A perpendicular slope is the negative reciprocal, $-\\frac{4}{3}$, and $5 = -\\frac{4}{3}(6) + b$ gives $b = 13$.\n\n**The Full Solution:**\nStep 1: The slope of line $k$ is $\\frac{3}{4}$, so the slope of line $j$ is its negative reciprocal, $-\\frac{4}{3}$.\nStep 2: Substitute the point $(6, 5)$ into $y = -\\frac{4}{3}x + b$: $5 = -8 + b$, so $b = 13$.\nStep 3: Line $j$ is $y = -\\frac{4}{3}x + 13$. Check: $-\\frac{4}{3}(6) + 13 = 5$, and $\\frac{3}{4} \\cdot \\left(-\\frac{4}{3}\\right) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = \\frac{3}{4}x + \\frac{1}{2}$): keeps the slope $\\frac{3}{4}$, which makes the line parallel to line $k$, not perpendicular.\n* Choice B ($y = \\frac{4}{3}x - 3$): flips the fraction but keeps the positive sign; the product of the slopes is $1$, not $-1$.\n* Choice C ($y = -\\frac{3}{4}x + \\frac{19}{2}$): changes the sign but does not flip the fraction.\n\n**Test Day Takeaway:** Perpendicular slopes multiply to $-1$: flip the fraction and change its sign, then use the given point to find the intercept.",
      skills: ["perpendicular-negative-reciprocal"]
    },
    {
      id: 9,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The equation $y = 0.85x + 14.2$ is a linear model for a data set. One of the data points is $(26, 37.7)$. Which statement about this data point is true?",
      choices: [
        // distractor: computes the correct difference of 1.4 but reverses which value is larger
        { id: "A", text: "The model predicts a $y$-value that is $1.4$ greater than the actual $y$-value." },
        { id: "B", text: "The model predicts a $y$-value that is $1.4$ less than the actual $y$-value." },
        // distractor: leaves out the intercept, predicting 0.85(26) = 22.1 and subtracting it from 37.7
        { id: "C", text: "The model predicts a $y$-value that is $15.6$ less than the actual $y$-value." },
        // distractor: leaves out the slope term, subtracting only the intercept 14.2 from 37.7
        { id: "D", text: "The model predicts a $y$-value that is $23.5$ less than the actual $y$-value." }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Residual**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** At $x = 26$ the model predicts $0.85(26) + 14.2 = 36.3$, which is $37.7 - 36.3 = 1.4$ less than the actual value.\n\n**The Full Solution:**\nStep 1: Substitute $x = 26$ into the model: $y = 0.85(26) + 14.2 = 22.1 + 14.2 = 36.3$.\nStep 2: Compare the prediction with the actual $y$-value of the data point: $37.7 - 36.3 = 1.4$.\nStep 3: The actual value is larger, so the predicted value is $1.4$ less than the actual value. Check: $36.3 + 1.4 = 37.7$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: has the right difference, $1.4$, but the wrong direction; the prediction $36.3$ is below the actual $37.7$, so the model underestimates.\n* Choice C: leaves out the $14.2$, predicting $0.85(26) = 22.1$ and getting $37.7 - 22.1 = 15.6$.\n* Choice D: leaves out the $0.85x$ term, subtracting only $14.2$ from $37.7$.\n\n**Test Day Takeaway:** To compare a data point with a model, plug its $x$-value into the equation and subtract the prediction from the actual $y$-value; a positive result means the model predicts too low.",
      skills: ["calculate-mean", "slope-intercept-form"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The price of a bicycle decreased from \\$250 to \\$200. The price decreased by $p\\%$. What is the value of $p$?",
      choices: [
        { id: "A", text: "$20$" },
        // distractor: divides the \$50 decrease by the new price, 200, instead of the original price, 250
        { id: "B", text: "$25$" },
        // distractor: finds the new price as a percent of the original price, 200/250 = 80%
        { id: "C", text: "$80$" },
        // distractor: finds the original price as a percent of the new price, 250/200 = 125%
        { id: "D", text: "$125$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The price fell by $250 - 200 = 50$ dollars, and $\\frac{50}{250} = 0.20$, so $p = 20$.\n\n**The Full Solution:**\nStep 1: Find the amount of the decrease: $250 - 200 = 50$ dollars.\nStep 2: Divide by the original price: $\\frac{50}{250} = 0.20$.\nStep 3: Write $0.20$ as a percent: $20\\%$, so $p = 20$. Check: $20\\%$ of $250$ is $50$, and $250 - 50 = 200$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($25$): divides the decrease by the new price, $\\frac{50}{200} = 0.25$; a percent change is always measured from the original value.\n* Choice C ($80$): finds what percent the new price is of the original, $\\frac{200}{250} = 80\\%$, which is the part that remains, not the decrease.\n* Choice D ($125$): divides the original price by the new price, $\\frac{250}{200} = 1.25$.\n\n**Test Day Takeaway:** Percent decrease is the amount of change divided by the original amount; dividing by the new amount is the most common trap.",
      skills: ["percent-change"]
    },
    {
      id: 11,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The table shows the number of juniors and seniors in a club who did or did not sign up for a field trip. Two of the students who did not sign up will be selected at random, one at a time, without replacement. What is the probability that both students selected are juniors? (Express your answer as a decimal or fraction, not as a percent.)",
      diagram: { type: "twoWayTable", params: { headers: ["", "Signed up", "Did not sign up", "Total"], rows: [["Juniors", "18", "6", "24"], ["Seniors", "10", "6", "16"], ["Total", "28", "12", "40"]] } },
      correctAnswer: "5/22",
      explanation: "**SAT Pattern: Probability Without Replacement**\n\n**The correct answer is $\\frac{5}{22}$ (or $0.2272$ or $0.2273$).**\n\n**The Fast Way (~30s):** Of the $12$ students who did not sign up, $6$ are juniors, so the probability is $\\frac{6}{12} \\cdot \\frac{5}{11} = \\frac{30}{132} = \\frac{5}{22}$.\n\n**The Full Solution:**\nStep 1: Restrict to the students who did not sign up: there are $12$ of them, and $6$ are juniors.\nStep 2: The first selection is a junior with probability $\\frac{6}{12}$. After one junior is removed, $5$ juniors remain among $11$ students, so the second is a junior with probability $\\frac{5}{11}$.\nStep 3: Multiply: $\\frac{6}{12} \\cdot \\frac{5}{11} = \\frac{30}{132} = \\frac{5}{22}$. Check by counting pairs: there are $6 \\cdot 5 = 30$ ordered junior pairs out of $12 \\cdot 11 = 132$ ordered pairs ✓\n\n**Common Mistakes:**\n* $\\frac{1}{4}$: uses $\\frac{6}{12}$ for both selections, as though the first student were put back.\n* $\\frac{1}{2}$: finds the probability for only the first selection.\n* $\\frac{5}{92}$: divides by the $24$ juniors instead of the $12$ students who did not sign up, computing $\\frac{6}{24} \\cdot \\frac{5}{23}$.\n\n**Test Day Takeaway:** Find the group the selection comes from first, then reduce both the favorable count and the total by one for the second selection.",
      skills: ["probability-basics"]
    },
    {
      id: 12,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The amount, in dollars, that Lena still owes on a loan $m$ months after she begins repaying it is given by the expression $9{,}250 - 385m$. What is the best interpretation of $385$ in this context?",
      choices: [
        // distractor: confuses the rate of change with the starting amount, which is 9,250
        { id: "A", text: "Lena owed $\\$385$ when she began repaying the loan." },
        // distractor: ignores the minus sign in front of 385m
        { id: "B", text: "The amount Lena owes increases by $\\$385$ each month." },
        { id: "C", text: "The amount Lena owes decreases by $\\$385$ each month." },
        // distractor: treats the coefficient of m as a number of months
        { id: "D", text: "Lena will finish repaying the loan in $385$ months." }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The expression is linear in $m$ with slope $-385$, so each month the amount owed goes down by $\\$385$.\n\n**The Full Solution:**\nStep 1: Write the expression as $-385m + 9{,}250$: the constant $9{,}250$ is the amount owed at $m = 0$, and $-385$ is the change per month.\nStep 2: Each time $m$ increases by $1$, the expression changes by $-385$, so the amount owed drops by $\\$385$.\nStep 3: So $385$ is the amount by which the balance decreases each month. Check: $m = 0$ gives $9{,}250$ and $m = 1$ gives $8{,}865$, a decrease of $385$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: the amount owed at the start is the value at $m = 0$, which is $\\$9{,}250$, not $\\$385$.\n* Choice B: overlooks the minus sign; $385m$ is subtracted, so the balance goes down as $m$ increases.\n* Choice D: $385$ is a dollar amount per month, not a number of months; the loan is repaid when $9{,}250 - 385m = 0$, about $24$ months.\n\n**Test Day Takeaway:** In a linear model, the coefficient of the variable is the change per unit and its sign tells you the direction; the constant term is the starting value.",
      skills: ["slope-intercept-form"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The number $60$ is what percent greater than the number $48$?",
      choices: [
        // distractor: reports the difference, 60 - 48 = 12, as the percent
        { id: "A", text: "$12\\%$" },
        // distractor: divides the difference by 60 instead of 48
        { id: "B", text: "$20\\%$" },
        { id: "C", text: "$25\\%$" },
        // distractor: finds 60 as a percent of 48, 60/48 = 125%, instead of the increase
        { id: "D", text: "$125\\%$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Percent Increase**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The increase is $60 - 48 = 12$, and $\\frac{12}{48} = 0.25$, so $60$ is $25\\%$ greater than $48$.\n\n**The Full Solution:**\nStep 1: Find the difference: $60 - 48 = 12$.\nStep 2: Divide by the number being compared to, $48$: $\\frac{12}{48} = 0.25$.\nStep 3: Write as a percent: $25\\%$. Check: $1.25(48) = 60$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($12\\%$): reports the difference itself; $12$ must be compared with $48$ to become a percent.\n* Choice B ($20\\%$): divides by $60$, giving $\\frac{12}{60} = 20\\%$; that says $48$ is $20\\%$ less than $60$, a different comparison.\n* Choice D ($125\\%$): finds $60$ as a percent of $48$; the increase is the part above $100\\%$, which is $25\\%$.\n\n**Test Day Takeaway:** \"$A$ is what percent greater than $B$\" divides the difference by $B$, the number after \"than.\"",
      skills: ["percent-of-value", "percent-change"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$7q + 23 = 100$\nWhat is the value of $7q - 9$?",
      choices: [
        { id: "A", text: "$68$" },
        // distractor: finds 7q = 77 and stops there
        { id: "B", text: "$77$" },
        // distractor: adds 9 to 7q instead of subtracting it
        { id: "C", text: "$86$" },
        // distractor: subtracts 9 from 100 without first removing the 23
        { id: "D", text: "$91$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Subtract $23$ from both sides to get $7q = 77$, so $7q - 9 = 77 - 9 = 68$.\n\n**The Full Solution:**\nStep 1: Isolate the term $7q$: subtract $23$ from both sides to get $7q = 77$.\nStep 2: There is no need to find $q$; substitute $77$ for $7q$ in $7q - 9$.\nStep 3: Compute: $77 - 9 = 68$. Check: $q = 11$, and $7(11) - 9 = 77 - 9 = 68$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($77$): this is the value of $7q$, one step short of $7q - 9$.\n* Choice C ($86$): computes $77 + 9$, adding the $9$ instead of subtracting it.\n* Choice D ($91$): computes $100 - 9$, which skips removing the $23$ from the left side.\n\n**Test Day Takeaway:** When the question asks for an expression that contains the same term as the equation, solve for that term and substitute; finding the variable itself is an extra step.",
      skills: ["solving-equations", "ratios"]
    },
    {
      id: 15,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "Triangle $ABC$ is similar to triangle $DEF$, where $A$, $B$, and $C$ correspond to $D$, $E$, and $F$, respectively. In these triangles, $AB = 9$, $BC = 15$, and $DE = 24$. What is the length of $\\overline{EF}$?",
      correctAnswer: "40",
      explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**The correct answer is 40.**\n\n**The Fast Way (~20s):** The scale factor from triangle $ABC$ to triangle $DEF$ is $\\frac{24}{9} = \\frac{8}{3}$, so $EF = \\frac{8}{3}(15) = 40$.\n\n**The Full Solution:**\nStep 1: Corresponding sides are $\\overline{AB}$ and $\\overline{DE}$, and $\\overline{BC}$ and $\\overline{EF}$.\nStep 2: Set up the proportion: $\\frac{EF}{BC} = \\frac{DE}{AB}$, so $\\frac{EF}{15} = \\frac{24}{9}$.\nStep 3: Solve: $EF = \\frac{24 \\cdot 15}{9} = \\frac{360}{9} = 40$. Check: $\\frac{40}{15} = \\frac{8}{3}$ and $\\frac{24}{9} = \\frac{8}{3}$ ✓\n\n**Common Mistakes:**\n* $30$: adds the difference $24 - 9 = 15$ to $15$; similar triangles scale by multiplying, not by adding.\n* $14.4$: uses the ratio upside down, computing $\\frac{9}{15}(24)$.\n* $5.625$: computes $\\frac{9 \\cdot 15}{24}$, which scales $15$ down instead of up.\n\n**Test Day Takeaway:** Match corresponding sides by the order of the letters, find the scale factor from one known pair, and multiply.",
      skills: ["similar-triangles"]
    },
    {
      id: 16,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The linear function $g$ can be written as $g(x) = a(x - 5) + b$, where $a$ and $b$ are constants. The table shows four values of $x$ and their corresponding values of $g(x)$. What is the value of $a + b$?",
      diagram: { type: "dataTable", params: { headers: ["x", "g(x)"], rows: [["0", "3"], ["1", "7"], ["2", "11"], ["3", "15"]] } },
      choices: [
        // distractor: expands a(x - 5) + b as ax + 5a + b, so 5(4) + b = 3 and b = -17
        { id: "A", text: "$-13$" },
        // distractor: takes b to be g(0) = 3 instead of g(5)
        { id: "B", text: "$7$" },
        // distractor: takes b to be the last value in the table, g(3) = 15, instead of g(5)
        { id: "C", text: "$19$" },
        { id: "D", text: "$27$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The outputs rise by $4$ for each increase of $1$ in $x$, so $a = 4$, and $b = g(5) = 4(5) + 3 = 23$, giving $a + b = 27$.\n\n**The Full Solution:**\nStep 1: From the table, $g(0) = 3$ and $g(x)$ increases by $4$ each time $x$ increases by $1$, so $g(x) = 4x + 3$.\nStep 2: Expand the given form: $a(x - 5) + b = ax + (b - 5a)$. Matching coefficients gives $a = 4$ and $b - 5(4) = 3$.\nStep 3: Solve: $b = 23$, so $a + b = 4 + 23 = 27$. Check: $4(x - 5) + 23 = 4x - 20 + 23 = 4x + 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-13$): expands $a(x - 5)$ as $ax + 5a$, dropping the minus sign, which gives $b = -17$.\n* Choice B ($7$): uses $g(0) = 3$ as $b$; in the form $a(x - 5) + b$, the constant $b$ is the output at $x = 5$.\n* Choice C ($19$): uses the last table value, $15$, as $b$; that is $g(3)$, not $g(5)$.\n\n**Test Day Takeaway:** Expand the given form and match the $x$-coefficients and the constants separately; in $a(x - h) + b$, the constant $b$ is the output at $x = h$.",
      skills: ["distributive-property"]
    },
    // ============================================================
    // Q17-Q22: Medium-hard ceiling (band 6-7)
    // ============================================================
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "The monthly rate for renting a storage unit was reduced by $12\\%$. Then a \\$9.50 fee was added to the reduced rate, for a total monthly charge of \\$255.90. Which expression represents the monthly rate, in dollars, before it was reduced?",
      choices: [
        // distractor: removes the fee correctly but divides by 1.12, treating the 12% reduction as an increase
        { id: "A", text: "$\\dfrac{255.90 - 9.50}{1.12}$" },
        // distractor: removes the fee but multiplies by 1.12, as though adding 12% back undoes a 12% reduction
        { id: "B", text: "$1.12(255.90 - 9.50)$" },
        { id: "C", text: "$\\dfrac{255.90 - 9.50}{0.88}$" },
        // distractor: adds the fee to the total instead of subtracting it before undoing the reduction
        { id: "D", text: "$\\dfrac{255.90 + 9.50}{0.88}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** Undo the steps in reverse order: subtract the fee, then divide by $0.88$, the multiplier for a $12\\%$ reduction, giving $\\dfrac{255.90 - 9.50}{0.88}$.\n\n**The Full Solution:**\nStep 1: Let $r$ be the original monthly rate. A $12\\%$ reduction leaves $88\\%$ of the rate, so the reduced rate is $0.88r$.\nStep 2: Adding the fee gives the total: $0.88r + 9.50 = 255.90$, so $0.88r = 255.90 - 9.50$.\nStep 3: Divide by $0.88$: $r = \\dfrac{255.90 - 9.50}{0.88}$. Check: this equals $\\dfrac{246.40}{0.88} = 280$, and $0.88(280) + 9.50 = 246.40 + 9.50 = 255.90$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{255.90 - 9.50}{1.12}$): divides by $1.12$, which would undo a $12\\%$ increase, not a reduction.\n* Choice B ($1.12(255.90 - 9.50)$): adds $12\\%$ of the reduced rate back, but the $12\\%$ was taken of the larger original rate, so this gives about $\\$275.97$ instead of $\\$280$.\n* Choice D ($\\dfrac{255.90 + 9.50}{0.88}$): adds the fee to the total; the fee was added to produce the total, so it must be subtracted to undo it.\n\n**Test Day Takeaway:** To reverse a chain of changes, undo the last change first, and undo a percent change by dividing by its multiplier ($0.88$ for a $12\\%$ decrease).",
      skills: ["percent-word-problems", "percent-of-value"]
    },
    {
      id: 18,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "$\\frac{2}{3}(6x - 9) + 4 = \\frac{1}{2}(10x + 2) - 11$\nWhat is the solution to the given equation?",
      choices: [
        // distractor: reaches -x = -8 correctly but drops the negative sign on only one side when dividing by -1
        { id: "A", text: "$-8$" },
        // distractor: multiplies only the 6x by 2/3, getting 4x - 9 + 4 on the left
        { id: "B", text: "$5$" },
        // distractor: multiplies only the 10x by 1/2, getting 5x + 2 - 11 on the right
        { id: "C", text: "$7$" },
        { id: "D", text: "$8$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** Distributing gives $4x - 6 + 4 = 5x + 1 - 11$, or $4x - 2 = 5x - 10$, so $x = 8$.\n\n**The Full Solution:**\nStep 1: Distribute on each side: $\\frac{2}{3}(6x - 9) = 4x - 6$ and $\\frac{1}{2}(10x + 2) = 5x + 1$, so the equation becomes $4x - 6 + 4 = 5x + 1 - 11$.\nStep 2: Combine constants: $4x - 2 = 5x - 10$.\nStep 3: Subtract $4x$ and add $10$ to both sides: $8 = x$. Check: the left side is $\\frac{2}{3}(39) + 4 = 26 + 4 = 30$ and the right side is $\\frac{1}{2}(82) - 11 = 41 - 11 = 30$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): gets $-x = -8$ and then writes $x = -8$, changing the sign of only one side.\n* Choice B ($5$): multiplies only $6x$ by $\\frac{2}{3}$, leaving the $-9$ unchanged, so the left side becomes $4x - 5$.\n* Choice C ($7$): multiplies only $10x$ by $\\frac{1}{2}$, leaving the $+2$ unchanged, so the right side becomes $5x - 9$.\n\n**Test Day Takeaway:** Distribute a fraction to every term inside the parentheses, then combine constants before moving terms; check by substituting into the original equation.",
      skills: ["solving-equations"]
    },
    {
      id: 19,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "In the $xy$-plane, the midpoint of the line segment with endpoints $(a, 7)$ and $(12, b)$ is $(5, -2)$. What is the value of $a + b$?",
      correctAnswer: "-13",
      explanation: "**SAT Pattern: Midpoint Formula**\n\n**The correct answer is -13.**\n\n**The Fast Way (~30s):** Each endpoint coordinate is twice the midpoint coordinate minus the other endpoint: $a = 2(5) - 12 = -2$ and $b = 2(-2) - 7 = -11$, so $a + b = -13$.\n\n**The Full Solution:**\nStep 1: The midpoint averages the coordinates: $\\frac{a + 12}{2} = 5$ and $\\frac{7 + b}{2} = -2$.\nStep 2: Solve each: $a + 12 = 10$, so $a = -2$; $7 + b = -4$, so $b = -11$.\nStep 3: Add: $a + b = -2 + (-11) = -13$. Check: $\\frac{-2 + 12}{2} = 5$ and $\\frac{7 + (-11)}{2} = -2$ ✓\n\n**Common Mistakes:**\n* $-16$: sets $a + 12 = 5$ and $7 + b = -2$, forgetting to multiply the midpoint coordinates by $2$, which gives $a = -7$ and $b = -9$.\n* $1$: solves $7 + b = -4$ as $b = -4 + 7 = 3$, adding the $7$ instead of subtracting it.\n* $-2$: reports $a$ alone instead of $a + b$.\n\n**Test Day Takeaway:** A midpoint coordinate is an average, so double it and subtract the known endpoint to recover the missing one.",
      skills: ["coordinate-geometry"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "A school has $900$ students. If one student is selected at random, the probability of selecting a student who plays a sport is $0.86$, and the probability of selecting a student who plays a sport and is a senior is $0.22$. Which of the following must be true?",
      choices: [
        // distractor: uses 1 - 0.86 = 0.14, the probability of not playing a sport, giving 0.14(900) = 126
        { id: "A", text: "Exactly $126$ students play a sport and are seniors." },
        { id: "B", text: "Exactly $198$ students play a sport and are seniors." },
        // distractor: subtracts 0.22 from 0.86 and treats 0.64(900) = 576 as the number of seniors
        { id: "C", text: "Exactly $576$ students are seniors." },
        // distractor: uses 0.86, the probability of playing a sport, giving 0.86(900) = 774
        { id: "D", text: "Exactly $774$ students play a sport and are seniors." }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Basic Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** A probability times the total gives a count, so $0.22(900) = 198$ students play a sport and are seniors.\n\n**The Full Solution:**\nStep 1: For a random selection, probability equals (number of students in the group) divided by $900$.\nStep 2: The group \"plays a sport and is a senior\" has probability $0.22$, so it contains $0.22(900) = 198$ students.\nStep 3: Only this count is fixed by the given information; the total number of seniors is not given, because some seniors may not play a sport. Check: $\\frac{198}{900} = 0.22$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($126$): $0.14(900)$, or $126$, is the number of students who do not play a sport, not the number who play a sport and are seniors.\n* Choice C ($576$): subtracting $0.22$ from $0.86$ leaves $0.64$, and $0.64(900) = 576$ is the number of students who play a sport and are not seniors; the number of seniors cannot be found from the information given.\n* Choice D ($774$): $0.86(900)$, or $774$, counts every student who plays a sport, seniors or not.\n\n**Test Day Takeaway:** Multiply a probability by the total to get a count, and match each probability to exactly the group it describes.",
      skills: ["probability-basics"]
    },
    {
      id: 21,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "$f(x) = 3x^{2} + bx + c$\nIn the given function, $b$ and $c$ are constants. The table shows four values of $x$ and their corresponding values of $f(x)$. What is the value of $b + c$?",
      diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["1", "0"], ["2", "-6"], ["3", "-6"], ["4", "0"]] } },
      choices: [
        // distractor: takes c to be the product of the zeros, 4, instead of 3 times that product, 12
        { id: "A", text: "$-11$" },
        { id: "B", text: "$-3$" },
        // distractor: takes b to be the negative of the sum of the zeros, -5, instead of 3 times that, -15
        { id: "C", text: "$7$" },
        // distractor: uses b = +15, reversing the sign relating the sum of the zeros to b
        { id: "D", text: "$27$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The table shows $f(1) = 0$ and $f(4) = 0$, so the zeros sum to $-\\frac{b}{3} = 5$ and multiply to $\\frac{c}{3} = 4$, giving $b = -15$, $c = 12$, and $b + c = -3$.\n\n**The Full Solution:**\nStep 1: From the table, $f(1) = 0$ and $f(4) = 0$, so $1$ and $4$ are the solutions of $3x^{2} + bx + c = 0$.\nStep 2: For $ax^{2} + bx + c$, the sum of the solutions is $-\\frac{b}{a}$ and the product is $\\frac{c}{a}$. With $a = 3$: $1 + 4 = -\\frac{b}{3}$, so $b = -15$, and $1 \\cdot 4 = \\frac{c}{3}$, so $c = 12$.\nStep 3: Add: $b + c = -15 + 12 = -3$. Check with a row not used: $f(2) = 3(4) - 15(2) + 12 = 12 - 30 + 12 = -6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-11$): uses the product of the zeros, $4$, as $c$; the product equals $\\frac{c}{3}$, so $c = 12$.\n* Choice C ($7$): uses $-(1 + 4) = -5$ as $b$; the sum equals $-\\frac{b}{3}$, so $b = -15$.\n* Choice D ($27$): uses $b = 15$, which would make $f(2) = 12 + 30 + 12 = 54$, not $-6$.\n\n**Test Day Takeaway:** When the leading coefficient is not $1$, the sum of the zeros is $-\\frac{b}{a}$ and the product is $\\frac{c}{a}$; multiply by $a$ before reading off $b$ and $c$.",
      skills: ["quadratic-factoring"]
    },
    {
      id: 22,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "In the $xy$-plane, a line with a slope of $-\\frac{4}{7}$ passes through the points $(-2, 17)$ and $(k, 5)$. What is the value of $k$?",
      correctAnswer: "19",
      explanation: "**SAT Pattern: Slope from Two Points**\n\n**The correct answer is 19.**\n\n**The Fast Way (~30s):** The $y$-value drops by $17 - 5 = 12$, which is $3$ times $4$, so $x$ must increase by $3 \\cdot 7 = 21$: $k = -2 + 21 = 19$.\n\n**The Full Solution:**\nStep 1: Write the slope between the two points: $\\frac{5 - 17}{k - (-2)} = \\frac{-12}{k + 2}$.\nStep 2: Set it equal to the given slope: $\\frac{-12}{k + 2} = -\\frac{4}{7}$, so $4(k + 2) = 84$ and $k + 2 = 21$.\nStep 3: Solve: $k = 19$. Check: $\\frac{5 - 17}{19 - (-2)} = \\frac{-12}{21} = -\\frac{4}{7}$ ✓\n\n**Common Mistakes:**\n* $23$: writes the run as $k - 2$ instead of $k - (-2)$, which gives $k - 2 = 21$.\n* $-23$: drops the negative sign of the slope, solving $\\frac{-12}{k + 2} = \\frac{4}{7}$.\n* $\\frac{34}{7}$: uses the slope upside down, solving $\\frac{-12}{k + 2} = -\\frac{7}{4}$.\n\n**Test Day Takeaway:** Subtract coordinates in the same order in the numerator and denominator, and be careful subtracting a negative $x$-coordinate.",
      skills: ["slope-from-points"]
    }
  ]
};

export default practiceTest11M2Easy;
