// Practice Test 11 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty.
// 2026-06 M2 flow diversification: M2 reflowed to a T11-unique wavy shape
// (easy [2,5,10] / medium [1,3,4,7,9,13,18] / hard [6,8,11,12,14,15,16,17,19,20,21,22]),
// 6 difficult-question pool items infused, retired clone archetypes replaced.
// M1: easy-block reordered + new mean-from-list context + new shifted-output opener.

export const practiceTest11 = {
  id: "practice-test-11",
  title: "Practice Test 11",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
// Practice Test 11 — Math Module 1
// 22 questions: Easy (1-5), Medium (6-14), Hard (15-22)

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A line passes through the points $(2, -1)$ and $(8, 11)$ in the $xy$-plane. What is the slope of the line?",
  choices: [
    // distractor: stops at the y-difference (12) without dividing by x-difference
    { id: "A", text: "$12$" },
    { id: "B", text: "$2$" },
    // distractor: subtracts in the wrong order — gets -2 (sign error)
    { id: "C", text: "$-2$" },
    // distractor: uses 11/8 directly without subtracting (wrong base)
    { id: "D", text: "$\\dfrac{11}{8}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Slope $= \\frac{11 - (-1)}{8 - 2} = \\frac{12}{6} = 2$.\n\n**The Full Solution:**\nStep 1: Slope is $\\frac{y_2 - y_1}{x_2 - x_1}$, keeping the points in the same order top and bottom.\nStep 2: $\\frac{11 - (-1)}{8 - 2} = \\frac{12}{6} = 2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): the rise $11 - (-1) = 12$, but it was never divided by the run $6$.\n* Choice C ($-2$): a sign slip on the rise — using $-1 - 11 = -12$ in the numerator flips the sign.\n* Choice D ($\\frac{11}{8}$): divides the second point's $y$ by its $x$, which is not slope.\n\n**Test Day Takeaway:** Slope is rise over run, $\\frac{\\Delta y}{\\Delta x}$ — subtract the coordinates in the same order on top and bottom.",
  skills: ["slope", "linear-functions", "coordinate-geometry"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "At a community center, $234$ children are enrolled in art classes, and the number of children enrolled in art classes is $26\\%$ of the total number of children enrolled at the center. How many children, in total, are enrolled at the community center?",
  choices: [
    // distractor: applies the percent forward — $234 \times 0.26 = 60.84$, rounds wrong to a clean number
    { id: "A", text: "$61$" },
    // distractor: divides by complement — $\\frac{234}{0.74} \approx 316$
    { id: "B", text: "$316$" },
    { id: "C", text: "$900$" },
    // distractor: divides by $0.026$ instead of $0.26$ (decimal-place slip)
    { id: "D", text: "$9{,}000$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The $234$ children are $26\\%$ of the total, so total $= \\frac{234}{0.26} = 900$.\n\n**The Full Solution:**\nStep 1: Let $T$ be the total enrollment. Then $0.26 \\cdot T = 234$.\nStep 2: Divide by $0.26$: $T = \\frac{234}{0.26} = 900$.\nStep 3: Check: $0.26 \\cdot 900 = 234$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($61$): multiplies $234 \\times 0.26$ instead of dividing.\n* Choice B ($316$): treats $234$ as the non-art count and divides by the complement $0.74$.\n* Choice D ($9{,}000$): a decimal slip — divides by $0.026$ instead of $0.26$.\n\n**Test Day Takeaway:** When a percent of an unknown whole is given, divide the part by the percent (as a decimal) to recover the whole.",
  skills: ["percents"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The function $f(t) = 95 + 8t$ models the number of bottles produced by a small bottling line $t$ minutes after it starts. What does the number $8$ represent in this context?",
  choices: [
    // distractor: confuses 8 with the initial value (which is 95)
    { id: "A", text: "The number of bottles produced before the line starts" },
    // distractor: treats 8 as an input value rather than a rate
    { id: "B", text: "The number of bottles produced after $8$ minutes" },
    { id: "C", text: "The number of bottles produced each minute" },
    // distractor: inverts the rate (would be 1/8 minutes per bottle)
    { id: "D", text: "The number of minutes needed to produce $1$ bottle" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** In $f(t) = 95 + 8t$, the coefficient of $t$ is the rate of change: $8$ bottles each minute.\n\n**The Full Solution:**\nStep 1: The model has the form $f(t) = b + mt$ with $b = 95$ and $m = 8$.\nStep 2: The slope $m = 8$ is how much the count rises per extra minute, so $8$ is bottles produced each minute.\n\n**Why the wrong answers are tempting:**\n* Choice A: that is the starting value $95$ (bottles before the line starts), not the slope.\n* Choice B: treats $8$ as an input ($t = 8$) rather than a per-minute rate.\n* Choice D: inverts the rate; $8$ per minute means one bottle every $\\frac{1}{8}$ minute, not $8$ minutes per bottle.\n\n**Test Day Takeaway:** In $y = b + mx$, the coefficient of the variable is the rate of change per unit; the constant is the starting value.",
  skills: ["function-interpretation", "linear-functions", "slope"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A bookstore charges $\\$6$ per paperback plus a flat $\\$4$ shipping fee per order. Mira's order total, including shipping, is $\\$34$. What is the total cost, in dollars, of an order with $4$ more paperbacks (still one shipping fee)?",
  choices: [
    // distractor: adds the count $4$ as dollars instead of $4 \cdot \$6 = \$24$
    { id: "A", text: "$\\$38$" },
    // distractor: uses the $\$4$ fee as the unit price for the extra books
    { id: "B", text: "$\\$50$" },
    { id: "C", text: "$\\$58$" },
    // distractor: doubles the original total
    { id: "D", text: "$\\$68$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $4$ extra paperbacks at $\\$6$ each add $\\$24$; shipping is unchanged, so the new total is $\\$34 + \\$24 = \\$58$.\n\n**The Full Solution:**\nStep 1: The cost is $6n + 4$. From $6n + 4 = 34$, $6n = 30$, so $n = 5$ paperbacks.\nStep 2: With $4$ more books, $n + 4 = 9$, giving $6(9) + 4 = 54 + 4 = \\$58$.\nStep 3: Faster: adding $4$ books adds $4 \\cdot \\$6 = \\$24$ and the flat fee stays fixed, so $\\$34 + \\$24 = \\$58$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$38$): adds the count $4$ as dollars instead of $4 \\times \\$6$.\n* Choice B ($\\$50$): uses the $\\$4$ fee as the per-book price, getting $\\$34 + 4 \\cdot \\$4$.\n* Choice D ($\\$68$): doubles the original total as if shipping were paid again per book.\n\n**Test Day Takeaway:** Linear cost is rate $\\times$ quantity plus a fixed fee. Adding items changes only the rate-times-quantity part; the fixed fee does not move.",
  skills: ["word-problems", "solving-equations"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $7x + 9 = 65$, what is the value of $7x - 11$?",
  choices: [
    { id: "A", text: "$45$" },
    // distractor: stops at x = 8 (forgets the "minus 11" final step entirely)
    { id: "B", text: "$8$" },
    // distractor: returns 7x = 56 instead of 7x - 11
    { id: "C", text: "$56$" },
    // distractor: adds 11 instead of subtracting
    { id: "D", text: "$67$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $7x - 11 = (7x + 9) - 20 = 65 - 20 = 45$. No need to find $x$.\n\n**The Full Solution:**\nStep 1: From $7x + 9 = 65$, subtract $9$: $7x = 56$.\nStep 2: Then $7x - 11 = 56 - 11 = 45$.\nStep 3: Or notice $7x - 11$ is $20$ less than $7x + 9$, so $65 - 20 = 45$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): solves for $x = 8$ and reports it instead of $7x - 11$.\n* Choice C ($56$): stops at $7x = 56$ without subtracting $11$.\n* Choice D ($67$): computes $7x + 11$ instead of $7x - 11$.\n\n**Test Day Takeaway:** Read the final clause. The question often wants a related expression, not the variable — and often you can shift the given equation directly.",
  skills: ["solving-equations"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The midpoint of segment $\\overline{PQ}$ in the $xy$-plane is $(5, -1)$. If $P = (2, 3)$, what is the $x$-coordinate of point $Q$?",
  correctAnswer: "8",
  explanation: "**SAT Pattern: Midpoint Formula**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~15s):** The midpoint $x$ is the average: $\\frac{2 + x_2}{2} = 5$, so $2 + x_2 = 10$ and $x_2 = 8$.\n\n**The Full Solution:**\nStep 1: The midpoint's $x$-coordinate is $\\frac{x_1 + x_2}{2}$, which equals $5$.\nStep 2: With $x_1 = 2$: $\\frac{2 + x_2}{2} = 5 \\Rightarrow 2 + x_2 = 10 \\Rightarrow x_2 = 8$.\nStep 3: Check: $\\frac{2 + 8}{2} = 5$. $\\checkmark$\n\n**Common Mistakes:** Subtracting the coordinates ($5 - 2 = 3$) instead of averaging; mixing up the midpoint and distance formulas.\n\n**Test Day Takeaway:** The midpoint is the average of the endpoints. To recover a missing endpoint, use $2 \\cdot (\\text{midpoint}) - (\\text{known endpoint})$.",
  skills: ["coordinate-geometry"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  question: "A study models the relationship between the number of hours $x$ spent on a math review course and the score increase $y$, in points, on a follow-up test using $y = 2.5x + 6$. According to the model, what is the predicted score increase for a student who spent $12$ hours on the course?",
  choices: [
    // distractor: stops at 2.5 * 12 = 30 — forgets the +6 intercept
    { id: "A", text: "$30$" },
    // distractor: adds only part of the intercept (e.g., +3)
    { id: "B", text: "$33$" },
    { id: "C", text: "$36$" },
    // distractor: rounds 2.5 to 3 — wrong base on rounding
    { id: "D", text: "$42$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $y = 2.5(12) + 6 = 30 + 6 = 36$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 12$ into $y = 2.5x + 6$.\nStep 2: $2.5(12) = 30$, then add the intercept: $30 + 6 = 36$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($30$): computes $2.5 \\cdot 12$ but forgets to add the intercept $6$.\n* Choice B ($33$): adds only part of the intercept (e.g. $3$ instead of $6$).\n* Choice D ($42$): rounds $2.5$ up to $3$, giving $3(12) + 6$.\n\n**Test Day Takeaway:** When you plug into $y = mx + b$, always add the constant term $b$. Decimal slope multiplication is an easy slip under time pressure.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The function $f$ is defined by $f(x) = 2{,}500(1.04)^x$. What is the value of $f(x)$ when $x = 5$, to the nearest whole number?",
  choices: [
    // distractor: estimates the growth too low ($\approx 2{,}500 \cdot 1.20 = 3{,}000$)
    { id: "A", text: "$3{,}000$" },
    { id: "B", text: "$3{,}042$" },
    // distractor: only squares 1.04 once — gives $\approx 2{,}500 \cdot 1.0816 \approx 2{,}704$
    { id: "C", text: "$2{,}704$" },
    // distractor: uses 1.20 as the multiplier (treats 4% over 5 yrs as simple)
    { id: "D", text: "$3{,}500$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $(1.04)^5 \\approx 1.2167$, so $f(5) \\approx 2{,}500 \\cdot 1.2167 \\approx 3{,}042$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 5$: $f(5) = 2{,}500(1.04)^5$.\nStep 2: Build the power: $(1.04)^2 = 1.0816$, $(1.04)^4 \\approx 1.1699$, $(1.04)^5 \\approx 1.2167$.\nStep 3: $2{,}500 \\cdot 1.2167 \\approx 3{,}042$, which rounds to $3{,}042$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3{,}000$): rounds the growth to a flat $20\\%$ instead of $\\approx 21.7\\%$.\n* Choice C ($2{,}704$): squares the multiplier only once, using $(1.04)^2$ growth instead of $(1.04)^5$.\n* Choice D ($3{,}500$): treats $4\\%$ as simple interest over $5$ years, a $1.20$ multiplier with extra rounding.\n\n**Test Day Takeaway:** Raise the full multiplier to the exponent — don't approximate compound growth as simple interest. On the calculator, evaluate $(1.04)^5$ in one step.",
  skills: ["exponential-functions"]
},
{
  id: 9,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The scatterplot below has line of best fit $\\hat{y} = 2.4x + 3.2$. The highlighted data point has coordinates $(10, 30)$. What is the residual at that data point?",
  diagram: { type: "scatterplot", params: {
    points: [[1,5],[2,9],[3,11],[4,14],[5,16],[6,16],[7,20],[8,21],[9,26],[11,29],[12,32]],
    xMin: 0, xMax: 12, yMin: 0, yMax: 36,
    xGridStep: 1, yGridStep: 4, xLabelStep: 2, yLabelStep: 8,
    bestFitLine: { slope: 2.4, intercept: 3.2 },
    highlightPoint: [10, 30], highlightLabel: "(10, 30)", showResidual: true,
  } },
  correctAnswer: "2.8",
  explanation: "**SAT Pattern: Residual**\n\n**The correct answer is $2.8$.**\n\n**The Fast Way (~15s):** Predicted $\\hat{y} = 2.4(10) + 3.2 = 27.2$; actual is $30$, so residual $= 30 - 27.2 = 2.8$.\n\n**The Full Solution:**\nStep 1: Residual $=$ actual $-$ predicted.\nStep 2: Predicted at $x = 10$: $2.4(10) + 3.2 = 24 + 3.2 = 27.2$.\nStep 3: Residual $= 30 - 27.2 = 2.8$. The positive value means the point sits above the line.\n\n**Common Mistakes:** Computing predicted $-$ actual and reporting $-2.8$; forgetting to add the intercept $3.2$ to the predicted value.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted. Positive means above the line, negative means below.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "In right triangle $XYZ$ shown, the right angle is at $Y$, $XY = 9$, and $XZ = 15$. What is the length of $YZ$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["X", "Y", "Z"],
      sideLabels: ["9", "", "15"],
      rightAngleVertex: 1
    }
  },
  correctAnswer: "12",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~15s):** The right angle is at $Y$, so $XZ = 15$ is the hypotenuse and $XY = 9$ is a leg. That's a $9$-$12$-$15$ triple ($3$-$4$-$5$ scaled by $3$), so $YZ = 12$.\n\n**The Full Solution:**\nStep 1: The hypotenuse is opposite the right angle at $Y$, so it is $XZ = 15$.\nStep 2: $XY^2 + YZ^2 = XZ^2 \\Rightarrow 9^2 + YZ^2 = 15^2$.\nStep 3: $81 + YZ^2 = 225 \\Rightarrow YZ^2 = 144 \\Rightarrow YZ = 12$.\n\n**Common Mistakes:** Treating $XZ$ as a leg and adding instead of subtracting ($\\sqrt{225 + 81}$); mislabeling which side is the hypotenuse.\n\n**Test Day Takeaway:** The hypotenuse is always opposite the right angle. Learn the common triples — $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$ — and their multiples.",
  skills: ["triangles", "pythagorean"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, the line $3x - 4y = 12$ intersects the $x$-axis at point $A$ and the $y$-axis at point $B$. What is the length of $\\overline{AB}$?",
  choices: [
    // distractor: uses only the x-intercept value (4)
    { id: "A", text: "$4$" },
    { id: "B", text: "$5$" },
    // distractor: adds the absolute intercepts: 4 + 3 = 7
    { id: "C", text: "$7$" },
    // distractor: uses only the |y-intercept| value (3)
    { id: "D", text: "$3$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Intercepts are $A = (4, 0)$ and $B = (0, -3)$, so $AB = \\sqrt{4^2 + 3^2} = \\sqrt{25} = 5$ — a $3$-$4$-$5$ right triangle.\n\n**The Full Solution:**\nStep 1: $x$-intercept: set $y = 0$ in $3x - 4y = 12$: $3x = 12 \\Rightarrow x = 4$, so $A = (4, 0)$.\nStep 2: $y$-intercept: set $x = 0$: $-4y = 12 \\Rightarrow y = -3$, so $B = (0, -3)$.\nStep 3: Distance: $AB = \\sqrt{(4 - 0)^2 + (0 - (-3))^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): reports only the $x$-intercept distance from the origin.\n* Choice C ($7$): adds the intercept magnitudes $4 + 3$ instead of using the distance formula.\n* Choice D ($3$): reports only the $y$-intercept distance from the origin.\n\n**Test Day Takeaway:** Find both intercepts, then apply the distance formula. Watch for the $3$-$4$-$5$ triple to skip the arithmetic.",
  skills: ["coordinate-geometry", "linear-functions"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The graph of $y = f(x)$ in the $xy$-plane passes through the points $(0, 3)$ and $(2, 48)$. If $f$ is an exponential function, which of the following could define $f$?",
  choices: [
    { id: "A", text: "$f(x) = 3(4)^x$" },
    // distractor: uses b = 16 instead of b^2 = 16
    { id: "B", text: "$f(x) = 3(16)^x$" },
    // distractor: linear function, not exponential
    { id: "C", text: "$f(x) = 3 + 4x$" },
    // distractor: f(0) = 48 \neq 3 — uses the wrong y-intercept
    { id: "D", text: "$f(x) = 48(3)^x$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponential Function with Two Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $f(0) = 3$ fixes the initial value at $3$. Then $3 \\cdot b^2 = 48 \\Rightarrow b^2 = 16 \\Rightarrow b = 4$, so $f(x) = 3(4)^x$.\n\n**The Full Solution:**\nStep 1: Write $f(x) = a \\cdot b^x$. From $(0, 3)$: $a \\cdot b^0 = a = 3$.\nStep 2: From $(2, 48)$: $3 \\cdot b^2 = 48 \\Rightarrow b^2 = 16 \\Rightarrow b = 4$ (positive base).\nStep 3: So $f(x) = 3(4)^x$. Check: $f(0) = 3$ and $f(2) = 3 \\cdot 16 = 48$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($3(16)^x$): uses $b = 16$ instead of solving $b^2 = 16$ for $b = 4$.\n* Choice C ($3 + 4x$): a linear model, not exponential; it never reaches $48$ at $x = 2$.\n* Choice D ($48(3)^x$): has $f(0) = 48$, contradicting the given point $(0, 3)$.\n\n**Test Day Takeaway:** Use the $x = 0$ point to read off $a$, then plug the second point to solve for $b$ — and don't forget the square root step when the exponent is $2$.",
  skills: ["exponential-functions", "coordinate-geometry"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A polling firm surveys $400$ randomly selected voters in a town and reports that $52\\%$ of them support a new ordinance, with a margin of error of $\\pm 4$ percentage points at a $95\\%$ confidence level. Based on the survey, which interval of percentages is most plausible for the percent of all voters in the town who support the ordinance?",
  choices: [
    // distractor: uses the point estimate alone (ignores the margin of error)
    { id: "A", text: "Exactly $52\\%$" },
    { id: "B", text: "Between $48\\%$ and $56\\%$" },
    // distractor: applies the margin only on the upper end
    { id: "C", text: "Between $52\\%$ and $56\\%$" },
    // distractor: doubles the margin to $\pm 8$
    { id: "D", text: "Between $44\\%$ and $60\\%$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The plausible interval is the point estimate $\\pm$ the margin of error: $52\\% \\pm 4\\%$, which runs from $48\\%$ to $56\\%$.\n\n**The Full Solution:**\nStep 1: A margin of error of $\\pm E$ at $95\\%$ confidence gives a plausible range of $\\hat{p} - E$ to $\\hat{p} + E$.\nStep 2: Here $\\hat{p} = 52\\%$ and $E = 4\\%$, so the range is $52\\% - 4\\% = 48\\%$ up to $52\\% + 4\\% = 56\\%$, which is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($52\\%$ exactly): reports the sample point estimate and ignores the margin of error entirely.\n* Choice C ($52\\%$ to $56\\%$): applies the margin on the high side only instead of both sides.\n* Choice D ($44\\%$ to $60\\%$): doubles the margin to $\\pm 8\\%$.\n\n**Test Day Takeaway:** A margin of error of $\\pm E$ produces a symmetric interval of total width $2E$ centered on the point estimate.",
  skills: ["statistics", "margin-of-error"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, a line passes through the point $(4, 1)$ and is perpendicular to the line $y = \\dfrac{2}{3}x - 5$. What is the equation of this line?",
  choices: [
    // distractor: uses the same slope (parallel, not perpendicular)
    { id: "A", text: "$y = \\dfrac{2}{3}x - \\dfrac{5}{3}$" },
    { id: "B", text: "$y = -\\dfrac{3}{2}x + 7$" },
    // distractor: takes the reciprocal but forgets the negative sign
    { id: "C", text: "$y = \\dfrac{3}{2}x - 5$" },
    // distractor: uses the negative of the original slope, not the negative reciprocal
    { id: "D", text: "$y = -\\dfrac{2}{3}x + \\dfrac{11}{3}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The perpendicular slope is the negative reciprocal of $\\frac{2}{3}$, which is $-\\frac{3}{2}$. Plug $(4, 1)$ into $y = -\\frac{3}{2}x + b$: $1 = -6 + b$, so $b = 7$, giving $y = -\\frac{3}{2}x + 7$.\n\n**The Full Solution:**\nStep 1: The given line $y = \\frac{2}{3}x - 5$ has slope $\\frac{2}{3}$. A perpendicular line has slope $-\\frac{3}{2}$ (flip and negate).\nStep 2: Use point-slope through $(4, 1)$: $y - 1 = -\\frac{3}{2}(x - 4) \\Rightarrow y - 1 = -\\frac{3}{2}x + 6 \\Rightarrow y = -\\frac{3}{2}x + 7$.\nStep 3: Check: at $x = 4$, $y = -6 + 7 = 1$ $\\checkmark$, and $\\frac{2}{3} \\cdot \\left(-\\frac{3}{2}\\right) = -1$ $\\checkmark$. This is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A: keeps the original slope $\\frac{2}{3}$ — that line is parallel, not perpendicular.\n* Choice C: flips to $\\frac{3}{2}$ (the reciprocal) but forgets the negative sign.\n* Choice D: negates the slope to $-\\frac{2}{3}$ without taking the reciprocal.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals: $m_1 \\cdot m_2 = -1$. Flip the fraction and change the sign.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the circle $(x + 1)^2 + (y - 3)^2 = 20$ and the line $y = 2x + b$ intersect at exactly one point. If $b > 3$, what is the value of $b$?",
  correctAnswer: "15",
  explanation: "**SAT Pattern: Circle in Standard Form**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~40s):** The circle has center $(-1, 3)$ and radius $\\sqrt{20}$. One intersection means the line is tangent, so the distance from the center to the line equals the radius. Writing the line as $2x - y + b = 0$: $\\frac{|2(-1) - 3 + b|}{\\sqrt{5}} = \\sqrt{20}$ gives $|b - 5| = 10$. With $b > 3$, $b = 15$.\n\n**The Full Solution:**\nStep 1: From $(x+1)^2 + (y-3)^2 = 20$, the center is $(-1, 3)$ and the radius is $\\sqrt{20} = 2\\sqrt{5}$.\nStep 2: Rewrite $y = 2x + b$ as $2x - y + b = 0$, so $A = 2$, $B = -1$, $C = b$.\nStep 3: Tangency requires distance $=$ radius: $\\frac{|2(-1) - 1(3) + b|}{\\sqrt{4 + 1}} = 2\\sqrt{5} \\Rightarrow \\frac{|b - 5|}{\\sqrt{5}} = 2\\sqrt{5} \\Rightarrow |b - 5| = 10$.\nStep 4: So $b - 5 = 10 \\Rightarrow b = 15$, or $b - 5 = -10 \\Rightarrow b = -5$. Since $b > 3$, take $b = 15$.\n\n**Common Mistakes:** Forgetting $\\sqrt{5} \\cdot \\sqrt{5} = 5$ when clearing the denominator; sign-slipping on the center coordinates $(-1, 3)$; or reporting the rejected root $b = -5$.\n\n**Test Day Takeaway:** A line is tangent to a circle when the distance from the center to the line equals the radius. Put the line in $Ax + By + C = 0$ form first, then apply the distance formula.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A satellite ground station logged the number of daily data downloads on $9$ days. Eight of the daily counts are listed below.\n\n$18, 22, 24, 27, 29, 31, 20, 33$\n\nThe mean of all $9$ daily counts is $26$. What is the value of the ninth daily count?",
  correctAnswer: "30",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~25s):** Total of all $9$ counts $= 9 \\cdot 26 = 234$. The eight listed counts sum to $204$, so the ninth count is $234 - 204 = 30$.\n\n**The Full Solution:**\nStep 1: Mean $\\times$ count $=$ sum, so the sum of all $9$ counts is $9 \\cdot 26 = 234$.\nStep 2: Add the eight listed counts: $18 + 22 + 24 + 27 + 29 + 31 + 20 + 33 = 204$.\nStep 3: The ninth count $= 234 - 204 = 30$.\nStep 4: Check: $\\frac{204 + 30}{9} = \\frac{234}{9} = 26$ $\\checkmark$.\n\n**Common Mistakes:** Averaging only the eight given counts and reporting $25.5$; or subtracting in the wrong direction ($204 - 234 = -30$).\n\n**Test Day Takeaway:** To recover a missing value, multiply the mean by the count to get the total sum, then subtract the known sum.",
  skills: ["statistics", "mean"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The expression $(hx + 3)(x + j)$ is equivalent to $2x^2 + 11x + 12$, where $h$ and $j$ are positive constants. What is the value of $h + j$?",
  choices: [
    // distractor: uses j = 3 and h = 2 without verifying the middle term
    { id: "A", text: "$5$" },
    { id: "B", text: "$6$" },
    // distractor: tries h = 3, j = 4 (gets a non-matching middle term)
    { id: "C", text: "$7$" },
    // distractor: uses h = 4, j = 4 (right product 16 wrong leading coefficient)
    { id: "D", text: "$8$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Expand $(hx + 3)(x + j) = hx^2 + (hj + 3)x + 3j$. Matching gives $h = 2$ and $3j = 12 \\Rightarrow j = 4$; the middle term checks ($2 \\cdot 4 + 3 = 11$). So $h + j = 6$.\n\n**The Full Solution:**\nStep 1: Expand: $(hx + 3)(x + j) = hx^2 + hjx + 3x + 3j = hx^2 + (hj + 3)x + 3j$.\nStep 2: Match against $2x^2 + 11x + 12$. Leading term: $h = 2$. Constant: $3j = 12 \\Rightarrow j = 4$.\nStep 3: Confirm the middle: $hj + 3 = 2(4) + 3 = 11$ $\\checkmark$.\nStep 4: $h + j = 2 + 4 = 6$, which is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): uses $j = 3$ and $h = 2$ and skips the middle-term check.\n* Choice C ($7$): tries $h = 3$, $j = 4$, which breaks the leading coefficient.\n* Choice D ($8$): uses $h = 4$, $j = 4$, also missing $h = 2$.\n\n**Test Day Takeaway:** Match the leading coefficient and the constant first, then verify the middle term before adding.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the line $y = 2x + k$ intersects the parabola $y = x^2 - 6x + 14$ at exactly one point. What is the value of $k$?",
  choices: [
    // distractor: miscomputes 64 - 56 as 4 instead of 8
    { id: "A", text: "$-4$" },
    { id: "B", text: "$-2$" },
    // distractor: drops the negative sign on k
    { id: "C", text: "$2$" },
    // distractor: uses 14 + k instead of 14 - k when rearranging
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Set the line equal to the parabola: $2x + k = x^2 - 6x + 14 \\Rightarrow x^2 - 8x + (14 - k) = 0$. One intersection means discriminant $= 0$: $64 - 4(14 - k) = 0 \\Rightarrow k = -2$.\n\n**The Full Solution:**\nStep 1: Set equal: $2x + k = x^2 - 6x + 14$, so $0 = x^2 - 8x + (14 - k)$.\nStep 2: Exactly one solution means the discriminant is zero: $(-8)^2 - 4(1)(14 - k) = 0$.\nStep 3: $64 - 56 + 4k = 0 \\Rightarrow 8 + 4k = 0 \\Rightarrow k = -2$, which is choice B.\nStep 4: Check: $x^2 - 8x + 16 = (x - 4)^2 = 0$ gives the single point $x = 4$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): miscomputes $64 - 56$ as $4$ instead of $8$.\n* Choice C ($2$): drops the negative sign on the final $k$.\n* Choice D ($6$): rearranges as $14 + k$ instead of $14 - k$.\n\n**Test Day Takeaway:** For one intersection, set the two equations equal, write the result in standard form, and set the discriminant $b^2 - 4ac = 0$.",
  skills: ["quadratic-equations", "discriminant", "systems-of-equations"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In triangle $ABC$ shown, the angle at $B$ is a right angle. If $\\sin A = \\dfrac{5}{13}$, what is the value of $\\cos C$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["A", "B", "C"],
      rightAngleVertex: 1
    }
  },
  correctAnswer: "5/13",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**The correct answer is $\\frac{5}{13}$.**\n\n**The Fast Way (~15s):** With the right angle at $B$, angles $A$ and $C$ are complementary, so $\\cos C = \\cos(90^\\circ - A) = \\sin A = \\frac{5}{13}$.\n\n**The Full Solution:**\nStep 1: Since $B = 90^\\circ$, the acute angles satisfy $A + C = 90^\\circ$.\nStep 2: The cofunction identity gives $\\cos(90^\\circ - A) = \\sin A$, so $\\cos C = \\sin A = \\frac{5}{13}$.\nStep 3: Confirm with sides: $\\sin A = \\frac{5}{13}$ means the side opposite $A$ is $5$ and the hypotenuse is $13$. That same side of length $5$ is adjacent to $C$, so $\\cos C = \\frac{5}{13}$.\n\n**Common Mistakes:** Computing $\\cos A = \\frac{12}{13}$ instead of $\\cos C$; or substituting $\\sin C$ for $\\cos C$.\n\n**Test Day Takeaway:** In a right triangle the two acute angles are complementary, so the sine of one equals the cosine of the other.",
  skills: ["triangles", "trigonometry"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The right triangle shown has legs of length $\\sqrt{5} + 2$ and $\\sqrt{5} - 2$. What is the area of the triangle?",
  diagram: {
    type: "rightTriangle",
    params: {
      sideLabels: ["√5 + 2", "√5 − 2", ""],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: computes the product 5 - 4 = 1 but forgets the 1/2 (gives 1)
    { id: "A", text: "$1$" },
    { id: "B", text: "$\\dfrac{1}{2}$" },
    // distractor: forgets the difference of squares pattern
    { id: "C", text: "$\\sqrt{5}$" },
    // distractor: subtracts the legs instead of multiplying ((sqrt 5 + 2) - (sqrt 5 - 2) = 4)
    { id: "D", text: "$4$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Algebraic Identity Expansion**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Area $= \\frac{1}{2}(\\sqrt{5}+2)(\\sqrt{5}-2)$. The legs are a difference-of-squares pair: $(\\sqrt{5})^2 - 2^2 = 5 - 4 = 1$, so the area is $\\frac{1}{2}(1) = \\frac{1}{2}$.\n\n**The Full Solution:**\nStep 1: Area of a right triangle $= \\frac{1}{2} \\cdot \\text{leg} \\cdot \\text{leg} = \\frac{1}{2}(\\sqrt{5}+2)(\\sqrt{5}-2)$.\nStep 2: Apply $(a+b)(a-b) = a^2 - b^2$: $(\\sqrt{5})^2 - 2^2 = 5 - 4 = 1$.\nStep 3: So the area is $\\frac{1}{2}(1) = \\frac{1}{2}$, which is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): computes the product $5 - 4 = 1$ but forgets the $\\frac{1}{2}$ in the area formula.\n* Choice C ($\\sqrt{5}$): never recognizes the difference of squares.\n* Choice D ($4$): subtracts the legs, $(\\sqrt{5}+2) - (\\sqrt{5}-2) = 4$, instead of multiplying them.\n\n**Test Day Takeaway:** Spot the $(a+b)(a-b)$ pattern — it collapses to $a^2 - b^2$ and clears the radicals instantly.",
  skills: ["area", "triangles", "radical-expressions"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Which of the following is equivalent to $\\dfrac{x^{\\frac{5}{2}} \\cdot x^{-\\frac{1}{3}}}{x^{\\frac{1}{6}}}$ for $x > 0$?",
  choices: [
    { id: "A", text: "$x^2$" },
    // distractor: adds all exponents instead of subtracting the denominator's
    { id: "B", text: "$x^3$" },
    // distractor: miscalculates 5/2 - 1/3 as 10/6 instead of 13/6
    { id: "C", text: "$x^{\\frac{5}{3}}$" },
    // distractor: forgets to subtract 1/6 in the final step
    { id: "D", text: "$x^{\\frac{7}{3}}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Multiplying adds exponents and dividing subtracts: $\\frac{5}{2} - \\frac{1}{3} - \\frac{1}{6} = \\frac{15 - 2 - 1}{6} = \\frac{12}{6} = 2$, so the expression is $x^2$.\n\n**The Full Solution:**\nStep 1: Combine the numerator (multiplication adds exponents): $x^{\\frac{5}{2}} \\cdot x^{-\\frac{1}{3}} = x^{\\frac{5}{2} - \\frac{1}{3}}$.\nStep 2: $\\frac{5}{2} - \\frac{1}{3} = \\frac{15}{6} - \\frac{2}{6} = \\frac{13}{6}$, so the numerator is $x^{\\frac{13}{6}}$.\nStep 3: Dividing by $x^{\\frac{1}{6}}$ subtracts: $x^{\\frac{13}{6} - \\frac{1}{6}} = x^{\\frac{12}{6}} = x^2$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($x^3$): adds the denominator's exponent instead of subtracting it, $\\frac{13}{6} + \\frac{1}{6} = \\frac{14}{6}$, then rounds up to $x^3$.\n* Choice C ($x^{\\frac{5}{3}}$): miscomputes $\\frac{5}{2} - \\frac{1}{3}$ as $\\frac{10}{6}$ rather than $\\frac{13}{6}$.\n* Choice D ($x^{\\frac{7}{3}}$): forgets to subtract the final $\\frac{1}{6}$, leaving the numerator's $\\frac{13}{6}$ and rounding it to $\\frac{7}{3}$.\n\n**Test Day Takeaway:** With fractional exponents, use a common denominator: multiply $\\Rightarrow$ add exponents, divide $\\Rightarrow$ subtract.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the graph of $y = (x - a)^2 + b$ has vertex $(4, -3)$ and passes through $(0, c)$. The graph of $y = (x - a)^2 + d$ has the same vertex $x$-coordinate but passes through $(0, c + 10)$. What is the value of $d$?",
  choices: [
    // distractor: subtracts b from the shift amount: -3 + 7 = 4
    { id: "A", text: "$4$" },
    { id: "B", text: "$7$" },
    // distractor: assumes the y-shift of 10 directly equals d (forgetting the (-3) base)
    { id: "C", text: "$10$" },
    // distractor: uses c = 13 directly as the value of d
    { id: "D", text: "$13$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** First parabola has vertex $(4, -3)$, so at $x = 0$, $c = 16 - 3 = 13$. The second parabola is $(x-4)^2 + d$, and at $x = 0$ it equals $c + 10 = 23$, so $16 + d = 23 \\Rightarrow d = 7$.\n\n**The Full Solution:**\nStep 1: Vertex $(4, -3)$ gives $a = 4$ and $b = -3$, so the first parabola is $y = (x - 4)^2 - 3$.\nStep 2: At $x = 0$: $c = (0 - 4)^2 - 3 = 16 - 3 = 13$.\nStep 3: The second parabola shares the vertex $x$-coordinate: $y = (x - 4)^2 + d$. At $x = 0$ it passes through $c + 10 = 23$: $16 + d = 23 \\Rightarrow d = 7$, which is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): mixes in $b = -3$, computing $-3 + 7 = 4$.\n* Choice C ($10$): assumes the $10$-unit shift in the $y$-value at $x = 0$ equals $d$ directly.\n* Choice D ($13$): stops at $c = 13$ and reports it as $d$.\n\n**Test Day Takeaway:** Carry each condition through step by step — the change in the constant term is not the same as the change in the function value at a point.",
  skills: ["vertex-form", "quadratic-equations", "coordinate-geometry"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 11 — Math Module 2 (22 questions)
// Flow (wavy, T11-unique): easy at [2,5,10]; medium at [1,3,4,7,9,13,18];
// hard at [6,8,11,12,14,15,16,17,19,20,21,22].
// Distribution: 3 easy / 7 medium / 12 hard = 22.
// Pool infusions (E#=exact, D-pX#Y=derived-then-IP-distanced):
//   E#1 Pythagorean surd (Q2); D-p34#25 percent-growth model (Q7);
//   D-p17#24 quadratic-linear tangency (Q8, nudged: coeff 3, x=5);
//   D-p19#27 exp find-a (Q11, nudged: shift 9, a=6);
//   D-p25#27 polynomial zeros (Q12, nudged: sum=28);
//   D-p38#20 quadratic-formula discriminant form (Q15);
//   D-p39#23 linear g(c+5) find-parameter (Q16);
//   D-p40#26 squared-unit rate conversion (Q19); E#20 circle isosceles-right (Q20).
// Note: Q21 (Vieta sum/product k) carries NO pool match — prior flow comment
//   implied a Q21 infusion that does not exist; corrected here.
// Q5 reauthored opener: Line from Two Points (was |6-17| recall, below opener bar).
// Q9 re-angled: exponential DECAY exponent-substitution (was build-the-model,
//   near-dup of Q7's build deliverable).
// Palette: tide gauges, skatepark ramps, letterpress printing, satellite orbits,
// sourdough starters, ziplines, burning candles; names Anya, Desmond, Lucia.

{
  id: 1,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A sourdough starter is fed on a fixed schedule, and its mass grows according to $m(t) = 60(1.5)^t$ grams, where $t$ is the number of feeding cycles. What is the mass of the starter, in grams, after $2$ feeding cycles?",
  choices: [
    // distractor: multiplies 1.5 by 2 instead of squaring it
    { id: "A", text: "$180$" },
    { id: "B", text: "$135$" },
    // distractor: applies the rate only once
    { id: "C", text: "$90$" },
    // distractor: adds instead of multiplying
    { id: "D", text: "$62$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $m(2) = 60 \\cdot (1.5)^2 = 60 \\cdot 2.25 = 135$ grams.\n\n**The Full Solution:**\nStep 1: Substitute $t = 2$ into $m(t) = 60(1.5)^t$: $m(2) = 60(1.5)^2$.\nStep 2: $(1.5)^2 = 2.25$, so $m(2) = 60 \\cdot 2.25 = 135$ grams, which is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($180$): multiplies $1.5 \\times 2 = 3$ first, then $60 \\cdot 3$, instead of raising $1.5$ to the power $2$.\n* Choice C ($90$): applies the growth factor only once: $60 \\cdot 1.5$.\n* Choice D ($62$): adds $60 + (1.5)^2 \\approx 62$ rather than multiplying.\n\n**Test Day Takeaway:** In $a \\cdot b^t$, raise the base $b$ to the exponent $t$ first, then multiply by $a$.",
  skills: ["exponential-functions"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A right triangle has legs with lengths of $7$ inches and $4$ inches. What is the length of the hypotenuse of this triangle, in inches?",
  choices: [
    // distractor: subtracts the squares instead of adding them
    { id: "A", text: "$\\sqrt{33}$" },
    { id: "B", text: "$\\sqrt{65}$" },
    // distractor: adds the legs directly without the Pythagorean theorem
    { id: "C", text: "$11$" },
    // distractor: forgets to take the square root of the sum of squares
    { id: "D", text: "$65$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Hypotenuse $= \\sqrt{7^2 + 4^2} = \\sqrt{49 + 16} = \\sqrt{65}$, which does not reduce to a whole number.\n\n**The Full Solution:**\nStep 1: For a right triangle, $c^2 = a^2 + b^2$ where $a$ and $b$ are the legs.\nStep 2: $c^2 = 7^2 + 4^2 = 49 + 16 = 65$, so $c = \\sqrt{65}$.\nStep 3: Since $65 = 5 \\cdot 13$ has no perfect-square factor, $\\sqrt{65}$ is already simplest form — choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\sqrt{33}$): subtracts the squares ($49 - 16 = 33$); that finds a leg from a known hypotenuse, not the hypotenuse.\n* Choice C ($11$): adds the legs directly ($7 + 4$) and skips the squaring.\n* Choice D ($65$): reports $c^2 = 65$ without taking the square root.\n\n**Test Day Takeaway:** The hypotenuse is the square root of the sum of the squared legs. If the sum has no perfect-square factor, leave it as a radical.",
  skills: ["right-triangles", "pythagorean-theorem"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $\\dfrac{5x}{18} = \\dfrac{45}{4}$, what is the value of $x - 8$?",
  choices: [
    { id: "A", text: "$32\\dfrac{1}{2}$" },
    // distractor: stops at x = 40.5 (forgets the - 8)
    { id: "B", text: "$40\\dfrac{1}{2}$" },
    // distractor: adds 8 instead of subtracting
    { id: "C", text: "$48\\dfrac{1}{2}$" },
    // distractor: leaves answer as 5x = 162.5
    { id: "D", text: "$162\\dfrac{1}{2}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Cross-multiply $\\frac{5x}{18}=\\frac{45}{4}$ to get $20x=810$, so $x=40.5$. The question wants $x-8=32.5=32\\frac{1}{2}$.\n\n**The Full Solution:**\nStep 1: Cross-multiply: $4 \\cdot 5x = 18 \\cdot 45 \\Rightarrow 20x = 810$.\nStep 2: Solve: $x = \\frac{810}{20} = 40.5$.\nStep 3: Read the target. The question asks for $x-8$, not $x$: $40.5 - 8 = 32.5 = 32\\frac{1}{2}$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($40\\frac{1}{2}$): solved for $x=40.5$ but forgot the final $-8$.\n* Choice C ($48\\frac{1}{2}$): added $8$ instead of subtracting.\n* Choice D ($162\\frac{1}{2}$): solved $5x=810$ instead of $20x=810$, getting $x=162.5$.\n\n**Test Day Takeaway:** Re-read the last line before bubbling. The question often asks for a shifted quantity like $x-8$, not the variable itself.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A letterpress shop models the resale value, in dollars, of a printing press with the function $v(t) = 5{,}000(0.85)^t$, where $t$ is the number of years after purchase. Which of the following is the best interpretation of $0.85$ in this context?",
  choices: [
    // distractor: confuses retention with loss rate
    { id: "A", text: "The press loses $85\\%$ of its value each year." },
    { id: "B", text: "The press retains $85\\%$ of its value each year." },
    // distractor: treats the multiplier as a dollar amount
    { id: "C", text: "The press loses $\\$85$ each year." },
    // distractor: confuses the decay multiplier with the initial value
    { id: "D", text: "The press is initially worth $\\$0.85$." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $a \\cdot b^t$, the base $b$ is the per-year multiplier. Here $b=0.85<1$, so each year the press keeps $85\\%$ of its value: choice B.\n\n**The Full Solution:**\nStep 1: In $v(t)=5{,}000(0.85)^t$, each year the value is multiplied by $0.85$.\nStep 2: Multiplying by $0.85$ leaves $85\\%$ of the previous year's value — that is what \"retains\" means.\nStep 3: Equivalently, $1-0.85=0.15$, so $15\\%$ is lost. The retained-value reading is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A: confuses retention with loss; losing $85\\%$ would leave $15\\%$, giving a multiplier of $0.15$, not $0.85$.\n* Choice C: treats $0.85$ as a fixed dollar loss instead of a fractional multiplier.\n* Choice D: confuses the decay base with the initial value, which is $5{,}000$, not $0.85$.\n\n**Test Day Takeaway:** A base $b<1$ in $a \\cdot b^t$ means the quantity retains $b \\times 100\\%$ each period and loses $(1-b)\\times 100\\%$.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A lit candle burns at a constant rate. After $2$ hours its height is $18$ centimeters, and after $5$ hours its height is $9$ centimeters. Which equation gives the height $h$, in centimeters, of the candle $t$ hours after it is lit?",
  choices: [
    // distractor: correct slope magnitude but wrong sign (treats the candle as growing)
    { id: "A", text: "$h = 3t + 24$" },
    { id: "B", text: "$h = -3t + 24$" },
    // distractor: reads the first point's height as the y-intercept without back-solving
    { id: "C", text: "$h = -3t + 18$" },
    // distractor: flips rise and run, using the reciprocal of the slope
    { id: "D", text: "$h = -\\dfrac{1}{3}t + 24$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The candle shrinks, so the slope is negative: $\\frac{9-18}{5-2}=\\frac{-9}{3}=-3$. Plug in $(2,18)$: $18=-3(2)+b \\Rightarrow b=24$. So $h=-3t+24$, choice B.\n\n**The Full Solution:**\nStep 1: The data points are $(t,h)=(2,18)$ and $(5,9)$.\nStep 2: Slope $=\\frac{\\Delta h}{\\Delta t}=\\frac{9-18}{5-2}=\\frac{-9}{3}=-3$ cm per hour.\nStep 3: Solve for the intercept using $(2,18)$: $18=-3(2)+b \\Rightarrow 18=-6+b \\Rightarrow b=24$.\nStep 4: So $h=-3t+24$. Check $t=5$: $-3(5)+24=9$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A: uses slope $+3$ instead of $-3$, treating the shrinking candle as growing.\n* Choice C: reads the first point's height $18$ as the intercept instead of solving for $24$.\n* Choice D: inverts the slope, using $\\frac{\\Delta t}{\\Delta h}=-\\frac{1}{3}$.\n\n**Test Day Takeaway:** Find the slope $\\frac{\\Delta y}{\\Delta x}$ first and mind its sign, then substitute a point to solve for the intercept — a given point's height is not the intercept.",
  skills: ["linear-functions", "slope", "solving-equations"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The parabola defined by $y = 4(x - h)^2 + k$ has its vertex at the point $(3, -7)$ and passes through the point $(5, 9)$. What is the value of $h + k$?",
  choices: [
    // distractor: computes h - k instead of h + k
    { id: "A", text: "$10$" },
    // distractor: stops at h alone (= 3)
    { id: "B", text: "$3$" },
    { id: "C", text: "$-4$" },
    // distractor: sign flip on k
    { id: "D", text: "$-10$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** In $y=a(x-h)^2+k$, the vertex is $(h,k)$. The vertex $(3,-7)$ gives $h=3$, $k=-7$ directly, so $h+k=3+(-7)=-4$, choice C.\n\n**The Full Solution:**\nStep 1: Vertex form $y=a(x-h)^2+k$ has its vertex at $(h,k)$. Given vertex $(3,-7)$, so $h=3$ and $k=-7$.\nStep 2: The point $(5,9)$ just confirms $a=4$: $4(5-3)^2+(-7)=4(4)-7=9$ $\\checkmark$.\nStep 3: $h+k=3+(-7)=-4$, choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): computed $h-k=3-(-7)=10$ instead of the sum.\n* Choice B ($3$): reported $h=3$ alone and forgot to add $k$.\n* Choice D ($-10$): mishandled signs, landing on the negation of $10$.\n\n**Test Day Takeaway:** In $y=a(x-h)^2+k$, the vertex is exactly $(h,k)$. Read $h$ and $k$ straight off; use the second point only to find or verify $a$.",
  skills: ["vertex-form", "function-interpretation"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "When a new zipline course first opened, $16$ riders booked it on launch day. A model estimates that, at the end of each week after launch, the number of weekly bookings had increased by $150\\%$ of the number of weekly bookings at the end of the previous week. Which equation best represents this model, where $B$ is the estimated number of weekly bookings $t$ weeks after launch and $t \\le 5$?",
  choices: [
    // distractor: treats 150% as the growth factor directly, omitting the +1
    { id: "A", text: "$B = 16(1.5)^t$" },
    { id: "B", text: "$B = 16(2.5)^t$" },
    // distractor: reads 150% as 15%
    { id: "C", text: "$B = 16(1.15)^t$" },
    // distractor: misplaces the decimal, using 150% as a factor of 15
    { id: "D", text: "$B = 16(15)^t$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** \"Increased by $150\\%$\" means the new value is the old value plus $150\\%$ of it: growth factor $=1+1.50=2.5$. So $B=16(2.5)^t$, choice B.\n\n**The Full Solution:**\nStep 1: A percent increase adds to the original before scaling. Increasing by $150\\%$ each week multiplies by $1+1.50=2.5$.\nStep 2: Starting from $16$ bookings at $t=0$: $B=16(2.5)^t$.\nStep 3: Check $t=1$: $16(2.5)=40$, which is $16$ plus $150\\%$ of $16$ ($16+24=40$) $\\checkmark$. That is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A: uses $1.5$, the factor for only a $50\\%$ increase, not $150\\%$.\n* Choice C: reads $150\\%$ as $15\\%$, giving factor $1.15$.\n* Choice D: drops the decimal, treating $150\\%$ as a factor of $15$.\n\n**Test Day Takeaway:** \"Increased by $p\\%$\" gives a growth factor of $1+\\frac{p}{100}$. Add the $1$ before raising to the power.",
  skills: ["exponential-functions", "percent-increase", "modeling"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The graphs of $y = 3x^2 - 22x + 17$ and $y = 8x + a$, where $a$ is a constant, intersect at exactly one point $(x, y)$ in the $xy$-plane. What is the value of $x$?",
  choices: [
    // distractor: sign error on the vertex x-coordinate (drops the negative in -B/2A)
    { id: "A", text: "$-5$" },
    { id: "B", text: "$5$" },
    // distractor: divides 30 by A = 3 instead of 2A = 6 (drops the factor of 2)
    { id: "C", text: "$10$" },
    // distractor: divides 30 by 2 alone, ignoring the leading coefficient
    { id: "D", text: "$15$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Quadratic-Linear System with One Intersection**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Set the curves equal: $3x^2-22x+17=8x+a$, i.e. $3x^2-30x+(17-a)=0$. One intersection means a repeated root, which sits at the vertex: $x=\\frac{30}{2(3)}=5$, choice B. No need to find $a$.\n\n**The Full Solution:**\nStep 1: Set the expressions equal: $3x^2-22x+17=8x+a$.\nStep 2: Move everything to one side: $3x^2-30x+(17-a)=0$.\nStep 3: Exactly one intersection means the discriminant is $0$, so there is a double root. A double root of $Ax^2+Bx+C$ lies at $x=-\\frac{B}{2A}$.\nStep 4: $x=-\\frac{-30}{2(3)}=\\frac{30}{6}=5$, choice B. The constant $a$ only forces the discriminant to zero; it is not needed for $x$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): drops the sign when applying $-\\frac{B}{2A}$.\n* Choice C ($10$): divides $30$ by $A=3$ instead of $2A=6$.\n* Choice D ($15$): divides $30$ by $2$ alone, ignoring the leading coefficient.\n\n**Test Day Takeaway:** When a line meets a parabola at exactly one point, move everything to one side and read the double root from $x=-\\frac{B}{2A}$ — you rarely need the constant.",
  skills: ["systems-of-equations", "discriminant", "quadratic-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A satellite's battery charge decreases by $12\\%$ every $3$ months. The percent of charge remaining can be modeled by $100(0.88)^n$, where $n$ is the number of $3$-month periods after launch. Which expression gives the percent of charge remaining $t$ years after launch?",
  choices: [
    { id: "A", text: "$100(0.88)^{4t}$" },
    // distractor: divides by the period length instead of multiplying (inverse of the period count)
    { id: "B", text: "$100(0.88)^{\\frac{t}{4}}$" },
    // distractor: uses the number 3 from "3 months" directly as the per-year multiplier
    { id: "C", text: "$100(0.88)^{3t}$" },
    // distractor: uses months-per-year (12) as the exponent multiplier, forgetting the period length
    { id: "D", text: "$100(0.88)^{12t}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The base $0.88$ is already given, so only the exponent changes. One year holds four $3$-month periods, so $n=4t$, giving $100(0.88)^{4t}$, choice A.\n\n**The Full Solution:**\nStep 1: The decay factor $0.88$ is fixed — each $3$-month period keeps $88\\%$ of the charge. Only the period count needs converting.\nStep 2: A year has $12$ months and each period is $3$ months, so one year holds $\\frac{12}{3}=4$ periods.\nStep 3: In $t$ years there are $n=4t$ periods, giving $100(0.88)^{4t}$, choice A.\nStep 4: Check $t=1$: $100(0.88)^4 \\approx 59.97\\%$, matching four straight $12\\%$ drops $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice B: divides by the period length, using $\\frac{t}{4}$ instead of multiplying.\n* Choice C: grabs the $3$ from \"$3$ months\" and uses $3t$ periods.\n* Choice D: multiplies by months-per-year ($12$) without dividing by the $3$-month period length.\n\n**Test Day Takeaway:** When the decay factor is already supplied, only the exponent needs work: divide the total time by the length of one period to count the periods.",
  skills: ["exponential-functions", "word-problems"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "Over one week, a tide gauge recorded the following daily high-water heights, in meters: $2.1$, $3.4$, $2.8$, $4.0$, $3.1$, $2.5$, $3.7$. What is the range of these heights, in meters?",
  choices: [
    // distractor: reports the maximum value instead of the range
    { id: "A", text: "$4.0$" },
    { id: "B", text: "$1.9$" },
    // distractor: subtracts two interior values rather than max minus min
    { id: "C", text: "$0.9$" },
    // distractor: reports the minimum value instead of the range
    { id: "D", text: "$2.1$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Range $=$ max $-$ min $=4.0-2.1=1.9$, choice B.\n\n**The Full Solution:**\nStep 1: The range of a data set is the largest value minus the smallest.\nStep 2: The maximum is $4.0$ and the minimum is $2.1$.\nStep 3: Range $=4.0-2.1=1.9$ meters, choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4.0$): reports the maximum instead of the difference.\n* Choice C ($0.9$): subtracts two interior values rather than the max and the min.\n* Choice D ($2.1$): reports the minimum instead of the range.\n\n**Test Day Takeaway:** Range is always max $-$ min. Spot the two extreme values first, then subtract.",
  skills: ["statistics", "range"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = -a^x + b$, where $a$ and $b$ are positive constants. In the $xy$-plane, the graph of $y = f(x) - 9$ has a $y$-intercept at $\\left(0, -\\dfrac{27}{4}\\right)$, and the product of $a$ and $b$ is $\\dfrac{39}{2}$. What is the value of $a$?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Exponential Function — Solving for Parameter**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~40s):** At $x=0$, $f(0)-9=-a^0+b-9=-1+b-9=b-10$. Set $b-10=-\\frac{27}{4}$, so $b=\\frac{13}{4}$. Then $a=\\frac{ab}{b}=\\frac{39/2}{13/4}=6$.\n\n**The Full Solution:**\nStep 1: The $y$-intercept of $y=f(x)-9$ is its value at $x=0$: $f(0)-9=-a^0+b-9$.\nStep 2: Since $a^0=1$ for any positive $a$, this is $-1+b-9=b-10$.\nStep 3: Set equal to the given intercept: $b-10=-\\frac{27}{4} \\Rightarrow b=10-\\frac{27}{4}=\\frac{40-27}{4}=\\frac{13}{4}$.\nStep 4: Use $ab=\\frac{39}{2}$: $a=\\frac{39/2}{13/4}=\\frac{39}{2}\\cdot\\frac{4}{13}=\\frac{156}{26}=6$.\nCheck: $ab=6 \\cdot \\frac{13}{4}=\\frac{78}{4}=\\frac{39}{2}$, and $f(0)-9=-1+\\frac{13}{4}-9=-\\frac{27}{4}$ $\\checkmark$.\n\n**Common Mistakes:** Forgetting that $a^0=1$ (reading $-a^0$ as $-a$ or as $0$); dropping the $-9$ shift when reading the intercept; solving for $b=\\frac{13}{4}$ and reporting it instead of $a$.\n\n**Test Day Takeaway:** Evaluate a transformed graph at $x=0$ for its $y$-intercept, and remember any nonzero base raised to the $0$ power equals $1$.",
  skills: ["exponential-functions", "y-intercept", "systems-of-equations"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The function $g$ is defined by $g(x) = (x - 3)(x + 5)(x - 1)^2$. The value of $g(9 - w)$ is $0$, where $w$ is a constant. What is the sum of all distinct possible values of $w$?",
  correctAnswer: "28",
  explanation: "**SAT Pattern: Polynomial Zeros via Factoring**\n\n**The correct answer is $28$.**\n\n**The Fast Way (~35s):** $g$ has distinct zeros $x=3,\\ -5,\\ 1$ (the factor $(x-1)^2$ repeats the root $1$ but it is one value). Set $9-w$ to each: $w=6,\\ 14,\\ 8$. Sum $=28$.\n\n**The Full Solution:**\nStep 1: $g(9-w)=0$ exactly when $9-w$ is a zero of $g$.\nStep 2: The zeros of $g(x)=(x-3)(x+5)(x-1)^2$ are $x=3$, $x=-5$, and $x=1$ (from $(x-1)^2$, a double root but a single distinct value).\nStep 3: Set $9-w$ equal to each distinct zero:\n$9-w=3 \\Rightarrow w=6$;\n$9-w=-5 \\Rightarrow w=14$;\n$9-w=1 \\Rightarrow w=8$.\nStep 4: Sum of distinct $w$: $6+14+8=28$.\nCheck: $g(3)=0$, $g(-5)=0$, $g(1)=0$ $\\checkmark$.\n\n**Common Mistakes:** Counting the double root $1$ twice — it yields only one value of $w$; misreading $(x+5)$ as a zero of $5$ instead of $-5$; a sign slip solving $9-w=\\text{zero}$.\n\n**Test Day Takeaway:** A factored polynomial is zero exactly at its roots, and a squared factor is still one distinct root. Translate each root through the inner expression $9-w$ to recover the variable.",
  skills: ["polynomial-zeros", "factoring", "substitution"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "At Lucia's letterpress shop, the cost of $3$ posters and $2$ greeting cards is $\\$31$, and the cost of $2$ posters and $4$ greeting cards is $\\$34$. Every poster has the same price, and every greeting card has the same price. What is the price, in dollars, of one greeting card?",
  choices: [
    // distractor: gives the poster price instead of the card price
    { id: "A", text: "$\\$7$" },
    { id: "B", text: "$\\$5$" },
    // distractor: gives the sum of one poster and one card
    { id: "C", text: "$\\$12$" },
    // distractor: gives the difference between the two prices
    { id: "D", text: "$\\$2$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Let $p$ = poster price, $c$ = card price: $3p+2c=31$ and $2p+4c=34$. Double the first: $6p+4c=62$. Subtract the second: $4p=28 \\Rightarrow p=7$, then $c=5$, choice B.\n\n**The Full Solution:**\nStep 1: Set up the system: $3p+2c=31$ and $2p+4c=34$.\nStep 2: Multiply the first by $2$ to match the card terms: $6p+4c=62$.\nStep 3: Subtract the second: $(6p+4c)-(2p+4c)=62-34 \\Rightarrow 4p=28 \\Rightarrow p=7$.\nStep 4: Substitute back: $2(7)+4c=34 \\Rightarrow 4c=20 \\Rightarrow c=5$. The card costs $\\$5$, choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$7$): solves for the poster price, but the question asks for the card.\n* Choice C ($\\$12$): adds one poster and one card ($7+5$).\n* Choice D ($\\$2$): gives the difference $7-5$.\n\n**Test Day Takeaway:** Write one equation per condition, eliminate the variable you do not need, and re-read which price the question actually wants.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A right circular cylinder has a total surface area of $130\\pi$ square inches. If the height of the cylinder is $8$ inches, what is the radius of the cylinder, in inches?",
  choices: [
    // distractor: uses r(r+8) = 65 with r = 3 (gives 33, not 65)
    { id: "A", text: "$3$" },
    { id: "B", text: "$5$" },
    // distractor: uses r = 7 — gives 105, not 65
    { id: "C", text: "$7$" },
    // distractor: ignores the leading coefficient on the quadratic — gets 10
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Surface Area of a Cylinder — Solving for Radius**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Total surface area $=2\\pi r^2+2\\pi rh=2\\pi r(r+h)=130\\pi$, so $r(r+8)=65$. Test $r=5$: $5 \\cdot 13=65$ $\\checkmark$, choice B.\n\n**The Full Solution:**\nStep 1: Total surface area of a cylinder: $SA=2\\pi r^2+2\\pi rh$.\nStep 2: With $h=8$: $2\\pi r^2+2\\pi r(8)=130\\pi$.\nStep 3: Divide by $2\\pi$: $r^2+8r=65 \\Rightarrow r^2+8r-65=0$.\nStep 4: Factor: $(r+13)(r-5)=0$, so $r=5$ (reject $r=-13$). That is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): $3(3+8)=33 \\neq 65$.\n* Choice C ($7$): $7(7+8)=105 \\neq 65$.\n* Choice D ($10$): far too large; $10(18)=180 \\neq 65$, from mishandling the quadratic.\n\n**Test Day Takeaway:** A cylinder's total surface area has two parts — two bases ($2\\pi r^2$) plus the lateral side ($2\\pi rh$). Divide by $2\\pi$ and solve the resulting quadratic.",
  skills: ["surface-area", "geometry", "quadratic-equations"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$$3x^2 - 10x - 6 = 0$$\n\nOne solution to the given equation can be written as $\\dfrac{10 - \\sqrt{k}}{6}$, where $k$ is a constant. What is the value of $k$?",
  correctAnswer: "172",
  explanation: "**SAT Pattern: Quadratic Formula — Discriminant Form**\n\n**The correct answer is $172$.**\n\n**The Fast Way (~25s):** The quadratic formula puts the discriminant under the radical. With $a=3$, $b=-10$, $c=-6$, that radicand is $b^2-4ac=100+72=172$, so $k=172$.\n\n**The Full Solution:**\nStep 1: Apply $x=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ to $3x^2-10x-6=0$ with $a=3$, $b=-10$, $c=-6$.\nStep 2: The numerator's $-b$ is $10$ and the denominator is $2(3)=6$, matching the given form $\\dfrac{10-\\sqrt{k}}{6}$.\nStep 3: Compute the radicand: $b^2-4ac=(-10)^2-4(3)(-6)=100+72=172$.\nSo $k=172$.\n\n**Common Mistakes:** Treating $-4ac$ as $-72$ (two negatives multiply to a positive $+72$), which gives $28$; forgetting to square $b$; or reporting the whole solution instead of just the value $k$ under the radical.\n\n**Test Day Takeaway:** When a root is written as $\\dfrac{-b\\pm\\sqrt{k}}{2a}$, the value under the radical is the discriminant $b^2-4ac$ — watch every sign.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The linear function $g$ is defined by $g(x) = b - 12x$, where $b$ is a constant. If $g(c + 5) = \\dfrac{c}{3}$, where $c$ is a constant, which of the following expressions represents the value of $b$?",
  choices: [
    { id: "A", text: "$\\dfrac{37c}{3} + 60$" },
    // distractor: drops the 12 multiplier on c, keeping only the constant shift
    { id: "B", text: "$\\dfrac{c}{3} + 60$" },
    // distractor: adds the c-terms wrong and keeps +5 instead of +60
    { id: "C", text: "$\\dfrac{13c}{3} + 5$" },
    // distractor: forgets to distribute -12 across the c term's coefficient
    { id: "D", text: "$12c + 60$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Evaluation to Find Parameter**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** Plug $c+5$ into $g$: $g(c+5)=b-12(c+5)=b-12c-60$. Set this equal to $\\dfrac{c}{3}$ and solve for $b$: $b=\\dfrac{c}{3}+12c+60=\\dfrac{37c}{3}+60$, which is choice A.\n\n**The Full Solution:**\nStep 1: Evaluate $g$ at $x=c+5$: $g(c+5)=b-12(c+5)=b-12c-60$.\nStep 2: Use the condition $g(c+5)=\\dfrac{c}{3}$: $b-12c-60=\\dfrac{c}{3}$.\nStep 3: Isolate $b$ by moving the other terms across: $b=\\dfrac{c}{3}+12c+60$.\nStep 4: Combine the $c$-terms over a common denominator: $\\dfrac{c}{3}+12c=\\dfrac{c}{3}+\\dfrac{36c}{3}=\\dfrac{37c}{3}$, so $b=\\dfrac{37c}{3}+60$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\dfrac{c}{3}+60$): drops the $12c$ when isolating $b$.\n* Choice C ($\\dfrac{13c}{3}+5$): mis-adds the $c$-terms and keeps $+5$ from the input instead of $+60$.\n* Choice D ($12c+60$): never converts $12c$ to thirds, so it loses the $\\dfrac{c}{3}$ entirely.\n\n**Test Day Takeaway:** Substitute the full input, distribute, then move every term except the target to the other side. Convert to a common denominator before combining like terms.",
  skills: ["linear-functions", "function-evaluation"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "What is the value of $x$ that satisfies the equation $\\dfrac{x^2}{x - 2} = \\dfrac{4}{x - 2} + 5$?",
  choices: [
    // distractor: extraneous root from clearing the denominator
    { id: "A", text: "$2$" },
    { id: "B", text: "$3$" },
    // distractor: includes both algebraic roots without rejecting the extraneous one
    { id: "C", text: "$2 \\text{ and } 3$" },
    // distractor: solves $x^2 - 4 = 5$ ignoring the linear $5(x-2)$ term
    { id: "D", text: "$\\sqrt{9} = 3 \\text{ or } -3$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Rational Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Multiply through by $(x-2)$: $x^2=4+5(x-2)$, which gives $x^2-5x+6=0\\Rightarrow(x-2)(x-3)=0$. The root $x=2$ is excluded (it makes the denominator zero), leaving $x=3$, choice B.\n\n**The Full Solution:**\nStep 1: Note the domain restriction first: $x-2\\neq 0$, so $x=2$ is forbidden.\nStep 2: Clear the denominator by multiplying both sides by $(x-2)$: $x^2=4+5(x-2)=5x-6$.\nStep 3: Rearrange: $x^2-5x+6=0$, which factors as $(x-2)(x-3)=0$, so $x=2$ or $x=3$.\nStep 4: Reject $x=2$ as extraneous. The only valid solution is $x=3$.\n\nCheck $x=3$: LHS $=\\dfrac{9}{1}=9$; RHS $=\\dfrac{4}{1}+5=9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): accepts the algebraic root $2$ without checking the domain.\n* Choice C ($2$ and $3$): keeps both roots and never discards the extraneous one.\n* Choice D ($\\pm 3$): mishandles the right side, solving something like $x^2=9$ instead of the full equation.\n\n**Test Day Takeaway:** Before clearing a denominator, list the excluded values. Any algebraic root equal to an excluded value is extraneous — discard it.",
  skills: ["rational-equations", "extraneous-solutions", "factoring"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "On six consecutive days, Anya measured the height, in centimeters, of fresh snow packed onto a skatepark ramp. Five of her measurements were $48$, $55$, $50$, $53$, and $49$. If the mean of all six measurements was $52$ centimeters, what was the sixth measurement, in centimeters?",
  correctAnswer: "57",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $57$.**\n\n**The Fast Way (~25s):** The six values must total $6\\times 52=312$. The five known values sum to $48+55+50+53+49=255$, so the sixth is $312-255=57$.\n\n**The Full Solution:**\nStep 1: Mean times count gives the total, so all six measurements sum to $6\\times 52=312$.\nStep 2: Add the five known measurements: $48+55+50+53+49=255$.\nStep 3: The missing sixth measurement is $312-255=57$ centimeters.\n\nCheck: $\\dfrac{48+55+50+53+49+57}{6}=\\dfrac{312}{6}=52$. $\\checkmark$\n\n**Common Mistakes:** Dividing by $5$ instead of $6$ when finding the required total; forgetting to subtract the known sum; or averaging only the five given values.\n\n**Test Day Takeaway:** To recover a missing value, multiply the mean by the count to get the required total, then subtract the sum of the values you already have.",
  skills: ["statistics", "mean", "solving-equations"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A skateboarder rolling down a ramp speeds up at a constant rate of $6.5$ meters per second squared. Expressed in kilometers per minute squared, this rate is closest to which of the following? (Use $1$ kilometer $= 1{,}000$ meters.)",
  choices: [
    // distractor: converts the time unit only once instead of squaring it
    { id: "A", text: "$0.4$" },
    { id: "B", text: "$23.4$" },
    // distractor: never converts meters to kilometers
    { id: "C", text: "$23{,}400$" },
    // distractor: squares the distance conversion instead of the time conversion
    { id: "D", text: "$0.02$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Multi-Step Unit Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Distance over time-squared means the time factor gets squared. Convert: $6.5\\times\\dfrac{1}{1{,}000}\\times 60^2=6.5\\times\\dfrac{3{,}600}{1{,}000}=6.5\\times 3.6=23.4$, choice B.\n\n**The Full Solution:**\nStep 1: The rate is $6.5\\ \\dfrac{\\text{m}}{\\text{s}^2}$. Convert meters to kilometers by multiplying by $\\dfrac{1}{1{,}000}$.\nStep 2: Convert seconds-squared to minutes-squared. Since $1\\ \\text{min}=60\\ \\text{s}$, the seconds-to-minutes factor is squared: $60^2=3{,}600$.\nStep 3: Combine: $6.5\\times\\dfrac{1}{1{,}000}\\times 3{,}600=6.5\\times 3.6=23.4\\ \\dfrac{\\text{km}}{\\text{min}^2}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.4$): multiplies the time factor by $60$ instead of $60^2$, giving $6.5\\times\\dfrac{60}{1{,}000}\\approx 0.39$.\n* Choice C ($23{,}400$): squares the time but never converts meters to kilometers.\n* Choice D ($0.02$): squares the distance factor instead of the time factor.\n\n**Test Day Takeaway:** When a unit is squared (like $\\text{time}^2$), its conversion factor must be squared too. Convert one dimension at a time and track the exponents.",
  skills: ["unit-conversion", "rate-conversion"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, a circle has center $C$ at $(h, k)$, and points $A$ and $B$ both lie on the circle. Point $A$ has coordinates $\\left(h + 3,\\ k + \\sqrt{91}\\right)$, and $\\angle ACB$ is a right angle. What is the length of $\\overline{AB}$?",
  choices: [
    // distractor: reports the radius itself instead of the chord
    { id: "A", text: "$10$" },
    { id: "B", text: "$10\\sqrt{2}$" },
    // distractor: uses the diameter (2r) instead of the hypotenuse
    { id: "C", text: "$20$" },
    // distractor: applies the 30-60-90 long-leg factor instead of 45-45-90
    { id: "D", text: "$10\\sqrt{3}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Circle Radius and Isosceles Right Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The radius $CA=\\sqrt{3^2+(\\sqrt{91})^2}=\\sqrt{9+91}=\\sqrt{100}=10$. Since $CA$ and $CB$ are equal radii meeting at a right angle, $\\triangle ACB$ is a $45$-$45$-$90$ triangle, so $AB=r\\sqrt{2}=10\\sqrt{2}$, choice B.\n\n**The Full Solution:**\nStep 1: Find the radius as the distance from $C(h,k)$ to $A(h+3,\\ k+\\sqrt{91})$: $CA=\\sqrt{3^2+(\\sqrt{91})^2}=\\sqrt{9+91}=\\sqrt{100}=10$.\nStep 2: Both $A$ and $B$ lie on the circle, so $CA=CB=10=r$.\nStep 3: With $\\angle ACB=90^\\circ$ and two equal legs, $\\triangle ACB$ is an isosceles right triangle, so the hypotenuse $\\overline{AB}=r\\sqrt{2}=10\\sqrt{2}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): reports the radius instead of the chord $AB$.\n* Choice C ($20$): uses the diameter $2r$, which equals the chord only if $A$, $C$, $B$ were collinear.\n* Choice D ($10\\sqrt{3}$): applies the $30$-$60$-$90$ factor $\\sqrt{3}$ instead of the $45$-$45$-$90$ factor $\\sqrt{2}$.\n\n**Test Day Takeaway:** Two equal radii meeting at a right angle form a $45$-$45$-$90$ triangle, so the connecting chord is $r\\sqrt{2}$.",
  skills: ["circle-equations", "triangles", "distance-formula"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $x^2 - 14x + k = 0$, where $k$ is a constant, has two real solutions whose positive difference is $6$. What is the value of $k$?",
  choices: [
    // distractor: uses the difference 6 as a product term directly
    { id: "A", text: "$24$" },
    { id: "B", text: "$40$" },
    // distractor: reports the sum of the roots
    { id: "C", text: "$14$" },
    // distractor: reports the difference of the roots
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** For $x^2-14x+k=0$, the roots sum to $14$ and multiply to $k$. From $r+s=14$ and $r-s=6$, the roots are $10$ and $4$, so $k=10\\cdot 4=40$, choice B.\n\n**The Full Solution:**\nStep 1: By Vieta's formulas, the roots of $x^2-14x+k=0$ satisfy $r+s=14$ and $rs=k$.\nStep 2: The positive difference is $6$, so $r-s=6$.\nStep 3: Add the sum and difference equations: $2r=20\\Rightarrow r=10$. Subtract: $2s=8\\Rightarrow s=4$.\nStep 4: The product is $k=rs=10\\cdot 4=40$.\n\nCheck: $x^2-14x+40=(x-10)(x-4)$; the roots $10$ and $4$ differ by $6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($24$): a faulty combination such as $4\\cdot 6=24$ instead of the true product.\n* Choice C ($14$): reports the sum of the roots rather than the product.\n* Choice D ($6$): reports the given difference instead of computing $k$.\n\n**Test Day Takeaway:** For $x^2+bx+c$, the roots sum to $-b$ and multiply to $c$. Combine the sum and difference to pin each root, then take the product.",
  skills: ["quadratic-equations", "vietas-formulas", "factoring"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the graph of the equation $x^2 + y^2 - 6x + 8y - 11 = 0$ is a circle. What is the radius of this circle?",
  choices: [
    // distractor: takes the square root of the constant term only
    { id: "A", text: "$\\sqrt{11}$" },
    { id: "B", text: "$6$" },
    // distractor: leaves the answer as r^2 instead of r
    { id: "C", text: "$36$" },
    // distractor: forgets to move the constant when completing the square (uses 25)
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** Complete the square: $(x^2-6x)+(y^2+8y)=11$ becomes $(x-3)^2+(y+4)^2=11+9+16=36$. The radius is $\\sqrt{36}=6$, choice B.\n\n**The Full Solution:**\nStep 1: Move the constant: $(x^2-6x)+(y^2+8y)=11$.\nStep 2: Complete the square in $x$ by adding $\\left(\\dfrac{-6}{2}\\right)^2=9$, and in $y$ by adding $\\left(\\dfrac{8}{2}\\right)^2=16$. Add the same amounts to the right side.\nStep 3: $(x-3)^2+(y+4)^2=11+9+16=36$.\nStep 4: In standard form $(x-h)^2+(y-k)^2=r^2$, the right side is $r^2=36$, so $r=6$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\sqrt{11}$): takes the square root of the bare constant before completing the square.\n* Choice C ($36$): reports $r^2$ instead of $r$.\n* Choice D ($5$): forgets to add the completed-square constants to the right side, using $25$ and getting $5$.\n\n**Test Day Takeaway:** To find a circle's radius from general form, complete the square in both variables and add the same constants to the right side. The right side equals $r^2$, so take its square root.",
  skills: ["circle-equations", "completing-the-square"]
}
      ]
    }
  ]
};

export default practiceTest11;
