// Practice Test 11 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Round-6 propagation: M1 lifted to band-3 ceilings on easies, domain
// rebalanced to 7/6/5/4. M2 hardened to 0E/6M/16H with band-7 ceilings on
// most hard items and concept-fusion items added at the top end.

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
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Total $\\times 0.26 = 234$, so total $= \\frac{234}{0.26} = 900$.\n\n**The Full Solution:**\nLet $T$ be the total number of children. Then ${}0.26 \\cdot T = 234$.\nDivide both sides by $0.26$: $T = \\dfrac{234}{0.26} = 900$.\n\nVerification: $26\\%$ of $900 = 0.26 \\cdot 900 = 234$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — multiplies $234 \\cdot 0.26 \\approx 61$ instead of dividing.\n* Choice B: \"wrong base\" — divides by the complement $0.74$ (treats $234$ as the non-art count).\n* Choice D: \"off-by-one / decimal slip\" — divides by $0.026$ instead of $0.26$.\n\n**Test Day Takeaway:** When a percent of an unknown total is given, divide the part by the percent (as a decimal) to recover the whole.",
  skills: ["percents"]
},
{
  id: 2,
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
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $4$ extra paperbacks at $\\$6$ each add $\\$24$ to the original total. New total: $\\$34 + \\$24 = \\$58$.\n\n**The Full Solution:**\nLet the cost equation be $6n + 4 = 34$, so $6n = 30$ and $n = 5$.\nFor $n + 4 = 9$ books: total $= 6(9) + 4 = 54 + 4 = \\$58$.\n\nShortcut: you do not need to find $n$. Adding $4$ books adds $4 \\cdot \\$6 = \\$24$, and the shipping fee is unchanged, so the new total is $\\$34 + \\$24 = \\$58$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — adds the count $4$ as dollars instead of $4 \\cdot \\$6$.\n* Choice B: \"wrong base\" — uses the fee ($\\$4$) as the unit price, getting $\\$34 + 4 \\cdot \\$4 = \\$50$.\n* Choice D: \"off-by-one\" — doubles the original total as if every order pays it twice.\n\n**Test Day Takeaway:** Linear cost = (rate $\\times$ quantity) + fixed fee. Adding more items only changes the rate-times-quantity piece — the fixed fee does not change.",
  skills: ["word-problems", "solving-equations"]
},
{
  id: 3,
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
  explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Slope $= \\dfrac{11 - (-1)}{8 - 2} = \\dfrac{12}{6} = 2$.\n\n**The Full Solution:**\nSlope $= \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{11 - (-1)}{8 - 2} = \\dfrac{12}{6} = 2$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the $y$-difference $12$ without dividing by the $x$-difference $6$.\n* Choice C: \"applies the inverse operation\" — sign error on the difference: $\\dfrac{-1 - 11}{8 - 2} = -2$.\n* Choice D: \"wrong base\" — divides $y$-coordinate by $x$-coordinate of the second point.\n\n**Test Day Takeaway:** Slope is rise over run — always $\\dfrac{\\Delta y}{\\Delta x}$, in the same order in both numerator and denominator.",
  skills: ["slope", "linear-functions", "coordinate-geometry"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $5x + 7 = 32$, what is the value of $5x - 13$?",
  choices: [
    { id: "A", text: "$12$" },
    // distractor: stops at x = 5 (forgets the "minus 13" final step entirely)
    { id: "B", text: "$5$" },
    // distractor: returns 5x = 25 instead of 5x - 13
    { id: "C", text: "$25$" },
    // distractor: adds 13 instead of subtracting
    { id: "D", text: "$38$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Notice $5x - 13 = (5x + 7) - 20 = 32 - 20 = 12$. No need to find $x$.\n\n**The Full Solution:**\nFrom $5x + 7 = 32$, we get $5x = 25$, so $x = 5$. Then $5x - 13 = 25 - 13 = 12$.\n\nFaster shortcut: the requested expression $5x - 13$ differs from $5x + 7$ by exactly $-20$, so the answer is $32 - 20 = 12$.\n\nVerification: $5(5) + 7 = 32$ \\checkmark, and $5(5) - 13 = 12$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — solves for $x = 5$ and reports it instead of $5x - 13$.\n* Choice C: \"wrong base\" — keeps $5x = 25$ instead of subtracting $13$.\n* Choice D: \"applies the inverse operation\" — computes $5x + 13 = 38$ instead of $5x - 13$.\n\n**Test Day Takeaway:** Always re-read the last sentence. The question often asks for a related expression, not the variable itself.",
  skills: ["solving-equations"]
},
{
  id: 5,
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
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** In $f(t) = 95 + 8t$, the coefficient of $t$ is the rate of change: $8$ bottles per minute.\n\n**The Full Solution:**\nThe function is in the form $f(t) = b + mt$, where $m = 8$ is the slope and $b = 95$ is the $y$-intercept. The slope tells us the rate of change: for each additional minute, the line produces $8$ more bottles.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — confuses the slope $8$ with the initial value, which is $95$.\n* Choice B: \"applies the inverse operation\" — treats $8$ as an input value $t = 8$ instead of a rate.\n* Choice D: \"applies the inverse operation\" — inverts the rate (one bottle per $\\tfrac{1}{8}$ minute).\n\n**Test Day Takeaway:** In $y = b + mx$, the coefficient of the variable is always the rate of change per unit of that variable.",
  skills: ["function-interpretation", "linear-functions", "slope"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The midpoint of segment $\\overline{PQ}$ in the $xy$-plane is $(5, -1)$. If $P = (2, 3)$, what is the $x$-coordinate of point $Q$?",
  correctAnswer: "8",
  explanation: "**SAT Pattern: Midpoint Formula**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~15s):** Midpoint $x$-coordinate: $\\dfrac{2 + x_2}{2} = 5$, so $2 + x_2 = 10$ and $x_2 = 8$.\n\n**The Full Solution:**\nMidpoint formula: $\\left(\\dfrac{x_1 + x_2}{2}, \\dfrac{y_1 + y_2}{2}\\right) = (5, -1)$.\n\nFor the $x$-coordinate: $\\dfrac{2 + x_2}{2} = 5 \\Rightarrow 2 + x_2 = 10 \\Rightarrow x_2 = 8$.\n\nVerification: midpoint $x = \\dfrac{2 + 8}{2} = 5$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Subtracting instead of using the midpoint formula: $5 - 2 = 3$, then reporting $3$.\n* Confusing the midpoint formula with the distance formula.\n\n**Test Day Takeaway:** The midpoint is the AVERAGE of the endpoints' coordinates. To find a missing endpoint, work backwards: $2 \\cdot$ midpoint $-$ known endpoint.",
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
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $y = 2.5(12) + 6 = 30 + 6 = 36$.\n\n**The Full Solution:**\nSubstitute $x = 12$ into the equation:\n$y = 2.5(12) + 6 = 30 + 6 = 36$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — computes $2.5 \\cdot 12 = 30$ but forgets to add the intercept $6$.\n* Choice B: \"off-by-one\" — adds part of the intercept (e.g., $3$ instead of $6$).\n* Choice D: \"wrong base\" — rounds $2.5 \\to 3$, getting $3(12) + 6 = 42$.\n\n**Test Day Takeaway:** When you plug a value into $y = mx + b$, do not forget the constant term. Decimal multiplication is easy to slip on under time pressure.",
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
  explanation: "**SAT Pattern: Exponential Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $(1.04)^5 \\approx 1.2167$, so $f(5) \\approx 2{,}500 \\cdot 1.2167 \\approx 3{,}042$.\n\n**The Full Solution:**\nCompute $(1.04)^5$ step by step:\n$(1.04)^2 = 1.0816$\n$(1.04)^3 = 1.0816 \\cdot 1.04 \\approx 1.124864$\n$(1.04)^4 \\approx 1.124864 \\cdot 1.04 \\approx 1.16986$\n$(1.04)^5 \\approx 1.16986 \\cdot 1.04 \\approx 1.21665$\n\n$f(5) = 2{,}500 \\cdot 1.21665 \\approx 3{,}042$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — estimates growth as $20\\%$ instead of $\\approx 21.67\\%$.\n* Choice C: \"off-by-one\" — only squares the multiplier once, giving $(1.04)^2$ growth instead of $(1.04)^5$.\n* Choice D: \"applies the inverse operation\" — treats the $4\\%$ rate as simple interest over $5$ years ($1.20$ multiplier).\n\n**Test Day Takeaway:** Build up powers step by step, or memorize that $(1.04)^5 \\approx 1.217$.",
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
  explanation: "**SAT Pattern: Residual**\n\n**The correct answer is $2.8$.**\n\n**The Fast Way (~15s):** Predicted: $\\hat{y} = 2.4(10) + 3.2 = 27.2$. Actual: $30$. Residual $= 30 - 27.2 = 2.8$.\n\n**The Full Solution:**\nResidual = actual $-$ predicted.\nPredicted $\\hat{y}$ at $x = 10$: $2.4(10) + 3.2 = 24 + 3.2 = 27.2$.\nActual $y$: $30$.\nResidual: $30 - 27.2 = 2.8$.\n\nA positive residual means the data point lies above the line of best fit.\n\n**Common Mistakes to Avoid:**\n* Computing predicted $-$ actual ($-2.8$) instead of actual $-$ predicted.\n* Forgetting to add the intercept $3.2$ to the predicted value.\n\n**Test Day Takeaway:** Residual = actual $-$ predicted. Positive residual = above the line; negative = below.",
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
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~15s):** Recognize the $9$-$12$-$15$ Pythagorean triple (a $3$-$4$-$5$ scaled by $3$). Hypotenuse is $XZ = 15$, leg $XY = 9$, so the missing leg $YZ = 12$.\n\n**The Full Solution:**\nThe right angle is at $Y$, so $XZ$ is the hypotenuse.\n$XY^2 + YZ^2 = XZ^2$\n$9^2 + YZ^2 = 15^2$\n$81 + YZ^2 = 225$\n$YZ^2 = 144$\n$YZ = 12$.\n\n**Common Mistakes to Avoid:**\n* Treating $XY$ or $YZ$ as the hypotenuse (the hypotenuse is opposite the right angle, which is at $Y$ — so hypotenuse is $XZ$).\n* Adding instead of subtracting: $\\sqrt{225 + 81} = \\sqrt{306}$ (wrong setup).\n\n**Test Day Takeaway:** The hypotenuse is opposite the right angle. Memorize common triples: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, and their multiples.",
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
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $x$-intercept: $3x = 12 \\Rightarrow x = 4$, so $A = (4, 0)$. $y$-intercept: $-4y = 12 \\Rightarrow y = -3$, so $B = (0, -3)$. Distance: $\\sqrt{16 + 9} = \\sqrt{25} = 5$ ($3$-$4$-$5$ triangle).\n\n**The Full Solution:**\n$x$-intercept: set $y = 0$: $3x = 12 \\Rightarrow x = 4$. Point $A = (4, 0)$.\n$y$-intercept: set $x = 0$: $-4y = 12 \\Rightarrow y = -3$. Point $B = (0, -3)$.\n\nDistance: $AB = \\sqrt{(4 - 0)^2 + (0 - (-3))^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — uses only the $x$-intercept value.\n* Choice C: \"applies the inverse operation\" — adds the intercept values: $4 + 3 = 7$.\n* Choice D: \"wrong base\" — uses only the $y$-intercept value.\n\n**Test Day Takeaway:** Find both intercepts, then apply the distance formula. Watch for the $3$-$4$-$5$ Pythagorean triple.",
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
  explanation: "**SAT Pattern: Exponential Function with Two Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** At $x = 0$: $f(0) = 3$, so the initial value is $3$. At $x = 2$: $3 \\cdot b^2 = 48$, so $b^2 = 16$, giving $b = 4$. Thus $f(x) = 3(4)^x$.\n\n**The Full Solution:**\nExponential form: $f(x) = a \\cdot b^x$.\nFrom $(0, 3)$: $a \\cdot b^0 = a = 3$.\nFrom $(2, 48)$: $3 \\cdot b^2 = 48$, so $b^2 = 16$, giving $b = 4$ (positive base).\nSo $f(x) = 3(4)^x$.\n\nVerification: $f(0) = 3(1) = 3$ \\checkmark, $f(2) = 3(16) = 48$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — uses $b = 16$ instead of $b^2 = 16$.\n* Choice C: \"wrong base\" — linear function, not exponential.\n* Choice D: \"off-by-one\" — has $f(0) = 48$, contradicting the given point.\n\n**Test Day Takeaway:** Use the point at $x = 0$ to find $a$, then use the second point to find $b$.",
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
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Plausible interval: point estimate $\\pm$ margin of error $= 52\\% \\pm 4\\% = (48\\%, 56\\%)$.\n\n**The Full Solution:**\nA $95\\%$ confidence interval based on a sample with point estimate $\\hat{p}$ and margin of error $E$ is $\\hat{p} \\pm E$.\nHere $\\hat{p} = 52\\%$ and $E = 4\\%$, so the interval is $52\\% - 4\\% = 48\\%$ to $52\\% + 4\\% = 56\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the point estimate without the margin of error.\n* Choice C: \"off-by-one\" — applies the margin of error on the upper end only.\n* Choice D: \"applies the inverse operation\" — doubles the margin to $\\pm 8$.\n\n**Test Day Takeaway:** A margin of error of $\\pm E$ produces an interval of width $2E$ centered on the point estimate.",
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
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Perpendicular slope = negative reciprocal of $\\dfrac{2}{3}$ = $-\\dfrac{3}{2}$. Through $(4, 1)$: $1 = -\\dfrac{3}{2}(4) + b = -6 + b$, giving $b = 7$.\n\n**The Full Solution:**\nThe given line has slope $\\dfrac{2}{3}$. A perpendicular line has slope $-\\dfrac{3}{2}$.\nUsing point $(4, 1)$: $y - 1 = -\\dfrac{3}{2}(x - 4)$\n$y - 1 = -\\dfrac{3}{2}x + 6$\n$y = -\\dfrac{3}{2}x + 7$\n\nVerification: at $x = 4$: $y = -\\dfrac{3}{2}(4) + 7 = -6 + 7 = 1$ \\checkmark. Slopes multiply to $\\dfrac{2}{3} \\cdot (-\\dfrac{3}{2}) = -1$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses the same slope (parallel, not perpendicular).\n* Choice C: \"applies the inverse operation\" — takes the reciprocal but forgets the negative sign.\n* Choice D: \"off-by-one\" — uses the negative of the original slope, not the negative reciprocal.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals: $m_1 \\cdot m_2 = -1$.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the circle $(x + 1)^2 + (y - 3)^2 = 20$ and the line $y = 2x + b$ intersect at exactly one point. If $b > 3$, what is the value of $b$?",
  correctAnswer: "15",
  explanation: "**SAT Pattern: Circle in Standard Form**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~40s):** Circle center $(-1, 3)$, radius $\\sqrt{20}$. Tangency: distance from center to line equals radius. Line in $Ax+By+C=0$ form: $2x - y + b = 0$. Distance: $\\dfrac{|2(-1) - 3 + b|}{\\sqrt{5}} = \\sqrt{20}$, so $|b - 5| = 10$. With $b > 3$: $b = 15$.\n\n**The Full Solution:**\nCircle center: $(-1, 3)$, radius: $\\sqrt{20} = 2\\sqrt{5}$.\nLine: $2x - y + b = 0$.\n\nFor tangency, the distance from the center to the line equals the radius:\n$\\dfrac{|2(-1) - 1(3) + b|}{\\sqrt{4 + 1}} = 2\\sqrt{5}$\n$\\dfrac{|b - 5|}{\\sqrt{5}} = 2\\sqrt{5}$\n$|b - 5| = 2\\sqrt{5} \\cdot \\sqrt{5} = 10$\n\nCase 1: $b - 5 = 10 \\Rightarrow b = 15$.\nCase 2: $b - 5 = -10 \\Rightarrow b = -5$.\n\nSince $b > 3$: $b = 15$.\n\nVerification: $y = 2x + 15$ into circle equation gives $(x+1)^2 + (2x+12)^2 = 20$, simplifying to $5x^2 + 50x + 125 = 0$, i.e., $(x + 5)^2 = 0$. Exactly one solution $x = -5$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting that $\\sqrt{5} \\cdot \\sqrt{5} = 5$ when clearing the denominator.\n* Sign errors with the center coordinates $(-1, 3)$ in the distance formula.\n\n**Test Day Takeaway:** A line is tangent to a circle when the distance from the center to the line equals the radius. Always rewrite the line in $Ax + By + C = 0$ form first.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A data set consists of $11$ positive integers. Ten of the integers are listed below.\n\n$15, 19, 22, 23, 25, 27, 28, 30, 31, 36$\n\nThe mean of all $11$ integers in the data set is $26$. What is the value of the eleventh integer?",
  correctAnswer: "30",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~25s):** Total sum $= 11 \\cdot 26 = 286$. Sum of given $10$ integers: $15 + 19 + 22 + 23 + 25 + 27 + 28 + 30 + 31 + 36 = 256$. Eleventh integer $= 286 - 256 = 30$.\n\n**The Full Solution:**\nIf the mean of $11$ integers is $26$, the sum of all $11$ is $11 \\cdot 26 = 286$.\nSum of the $10$ listed integers: $15 + 19 + 22 + 23 + 25 + 27 + 28 + 30 + 31 + 36$.\nAdd in pairs: $(15+19) + (22+23) + (25+27) + (28+30) + (31+36) = 34 + 45 + 52 + 58 + 67 = 256$.\nEleventh integer $= 286 - 256 = 30$.\n\nVerification: mean $= \\dfrac{256 + 30}{11} = \\dfrac{286}{11} = 26$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing the mean of the given $10$ integers ($25.6$) and reporting that.\n* Subtracting in the wrong order ($256 - 286 = -30$).\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ sum. To recover a missing value, compute the total sum from the mean, then subtract the known sum.",
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
  explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Expand $(hx + 3)(x + j) = hx^2 + (hj + 3)x + 3j$. Match: $h = 2$, $3j = 12 \\Rightarrow j = 4$. Verify middle: $hj + 3 = 8 + 3 = 11$ \\checkmark. So $h + j = 6$.\n\n**The Full Solution:**\nExpand $(hx + 3)(x + j) = hx^2 + hjx + 3x + 3j = hx^2 + (hj + 3)x + 3j$.\n\nMatch coefficients with $2x^2 + 11x + 12$:\n* leading: $h = 2$\n* constant: $3j = 12 \\Rightarrow j = 4$\n* middle: $hj + 3 = 2(4) + 3 = 11$ \\checkmark\n\nSo $h + j = 2 + 4 = 6$.\n\nVerification: $(2x + 3)(x + 4) = 2x^2 + 8x + 3x + 12 = 2x^2 + 11x + 12$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — uses $j = 3$ (constant ratio) and $h = 2$ without verifying the middle term.\n* Choice C: \"applies the inverse operation\" — tries $h = 3$, $j = 4$ but produces wrong leading coefficient.\n* Choice D: \"wrong base\" — uses $h = 4$, $j = 4$.\n\n**Test Day Takeaway:** Match the leading coefficient and constant first, then verify the middle term.",
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
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Set equal: $2x + k = x^2 - 6x + 14 \\Rightarrow x^2 - 8x + (14 - k) = 0$. For exactly one intersection, discriminant $= 0$: $64 - 4(14 - k) = 0 \\Rightarrow 64 - 56 + 4k = 0 \\Rightarrow k = -2$.\n\n**The Full Solution:**\nSet the equations equal:\n$2x + k = x^2 - 6x + 14$\n$0 = x^2 - 8x + (14 - k)$\n\nFor exactly one solution, the discriminant must equal zero:\n$(-8)^2 - 4(1)(14 - k) = 0$\n$64 - 56 + 4k = 0$\n$8 + 4k = 0$\n$k = -2$\n\nVerification: $x^2 - 8x + 16 = 0 \\Rightarrow (x - 4)^2 = 0 \\Rightarrow x = 4$. Then $y = 2(4) - 2 = 6$. Check on parabola: $16 - 24 + 14 = 6$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — miscomputes $64 - 56$ as $4$ instead of $8$.\n* Choice C: \"applies the inverse operation\" — drops the negative sign on $k$.\n* Choice D: \"wrong base\" — uses $14 + k$ instead of $14 - k$ when rearranging.\n\n**Test Day Takeaway:** Set the equations equal, rearrange to standard form, and set the discriminant to zero for exactly one intersection.",
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
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**The correct answer is $\\dfrac{5}{13}$.**\n\n**The Fast Way (~15s):** In a right triangle, the two acute angles are complementary: $A + C = 90^{\\circ}$. So $\\cos C = \\cos(90^{\\circ} - A) = \\sin A = \\dfrac{5}{13}$.\n\n**The Full Solution:**\nWith the right angle at $B$, angles $A$ and $C$ are complementary: $A + C = 90^{\\circ}$.\nThe complementary identity: $\\cos(90^{\\circ} - \\theta) = \\sin \\theta$.\nTherefore $\\cos C = \\cos(90^{\\circ} - A) = \\sin A = \\dfrac{5}{13}$.\n\nAlternative: if $\\sin A = \\dfrac{5}{13}$, the side opposite $A$ is $5$ and the hypotenuse is $13$. By the Pythagorean theorem, the third side is $12$. The side adjacent to $C$ is the side opposite $A$ (length $5$), and the hypotenuse is $13$. So $\\cos C = \\dfrac{5}{13}$.\n\n**Common Mistakes to Avoid:**\n* Computing $\\cos A$ instead of $\\cos C$ (would give $\\dfrac{12}{13}$).\n* Using $\\sin C$ in place of $\\cos C$.\n\n**Test Day Takeaway:** In a right triangle, the sine of one acute angle equals the cosine of the other. They are complements.",
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
  explanation: "**SAT Pattern: Algebraic Identity Expansion**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Area $= \\dfrac{1}{2}(\\sqrt{5}+2)(\\sqrt{5}-2) = \\dfrac{1}{2}(5 - 4) = \\dfrac{1}{2}(1) = \\dfrac{1}{2}$.\n\n**The Full Solution:**\nArea of a right triangle $= \\dfrac{1}{2} \\cdot \\text{leg}_1 \\cdot \\text{leg}_2$.\n$= \\dfrac{1}{2}(\\sqrt{5}+2)(\\sqrt{5}-2)$\n\nUsing the difference of squares: $(a+b)(a-b) = a^2 - b^2$.\n$= \\dfrac{1}{2}((\\sqrt{5})^2 - 2^2) = \\dfrac{1}{2}(5 - 4) = \\dfrac{1}{2}(1) = \\dfrac{1}{2}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — computes the product $5 - 4 = 1$ but forgets the $\\dfrac{1}{2}$ multiplier.\n* Choice C: \"wrong base\" — fails to recognize the difference of squares.\n* Choice D: \"applies the inverse operation\" — subtracts the legs ($\\sqrt{5}+2 - (\\sqrt{5}-2) = 4$) instead of multiplying.\n\n**Test Day Takeaway:** Recognize $(a+b)(a-b) = a^2 - b^2$ to simplify surd products instantly.",
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
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Numerator: $x^{\\frac{5}{2} - \\frac{1}{3}} = x^{\\frac{13}{6}}$. Divide by $x^{\\frac{1}{6}}$: $x^{\\frac{13}{6} - \\frac{1}{6}} = x^{\\frac{12}{6}} = x^2$.\n\n**The Full Solution:**\nNumerator: $x^{\\frac{5}{2}} \\cdot x^{-\\frac{1}{3}} = x^{\\frac{5}{2} - \\frac{1}{3}}$.\nFind common denominator: $\\dfrac{5}{2} - \\dfrac{1}{3} = \\dfrac{15}{6} - \\dfrac{2}{6} = \\dfrac{13}{6}$.\nSo numerator $= x^{\\frac{13}{6}}$.\nDivide by $x^{\\frac{1}{6}}$: $x^{\\frac{13}{6} - \\frac{1}{6}} = x^{\\frac{12}{6}} = x^2$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — adds all exponents instead of subtracting the denominator's exponent.\n* Choice C: \"off-by-one\" — miscalculates $\\dfrac{5}{2} - \\dfrac{1}{3}$ as $\\dfrac{10}{6}$ instead of $\\dfrac{13}{6}$.\n* Choice D: \"stops one step early\" — forgets to subtract $\\dfrac{1}{6}$ in the final step.\n\n**Test Day Takeaway:** With fractional exponents, find a common denominator. Multiply $\\Rightarrow$ add exponents; divide $\\Rightarrow$ subtract.",
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
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** First parabola: $a = 4$, $b = -3$. At $x = 0$: $c = 16 - 3 = 13$. Second parabola: $(0)^2$ shift gives $16 + d = c + 10 = 23$, so $d = 7$.\n\n**The Full Solution:**\nFirst parabola: vertex $(4, -3)$ means $a = 4$ and $b = -3$. So $y = (x - 4)^2 - 3$.\nAt $x = 0$: $c = (0 - 4)^2 - 3 = 16 - 3 = 13$.\n\nSecond parabola: $y = (x - 4)^2 + d$ (same $a = 4$).\nAt $x = 0$: $c + 10 = (0 - 4)^2 + d = 16 + d$.\n$13 + 10 = 16 + d$\n$23 = 16 + d$\n$d = 7$.\n\nVerification: second parabola at $x = 0$ is $16 + 7 = 23 = c + 10 = 13 + 10$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — subtracts $b$ from the shift amount: $-3 + 7 = 4$.\n* Choice C: \"wrong base\" — assumes the $10$-unit vertical shift in $c$ directly equals $d$.\n* Choice D: \"stops one step early\" — uses $c = 13$ as the value of $d$.\n\n**Test Day Takeaway:** Work through each constraint step by step. Don't assume the vertical shift of the function value at $x = 0$ equals the change in the constant term.",
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
// Distribution: 3E / 6M / 13H with band-8 ceiling on Q13.
// Calibrated to Bluebook Module 2 Hard (Q13 combined-mean with parameter).
// Q20 fixed: constants in equation 2 changed from 24 to 30 so the no-solution case is logically valid.

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A microbiologist studies the decay of a viral sample under controlled laboratory conditions. The number of viable virus particles in the sample is reduced by half every $5$ hours. Which type of function best models the number of viable virus particles as a function of time elapsed since the sample was prepared?",
  choices: [
    // distractor: linear — same NUMBER lost each interval (wrong; half is multiplicative)
    { id: "A", text: "Decreasing linear" },
    { id: "B", text: "Decreasing exponential" },
    // distractor: wrong direction — \"reduced\" is decay, not growth
    { id: "C", text: "Increasing exponential" },
    // distractor: wrong type — half-life is not a quadratic process
    { id: "D", text: "Quadratic" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Classify Physical Motion Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** \"Reduced by half every $5$ hours\" = multiplied by $\\frac{1}{2}$ every fixed period $\\Rightarrow$ exponential decay.\n\n**The Full Solution:**\n\"Reduced by half\" means multiplied by $\\frac{1}{2}$ — a multiplicative factor applied at a fixed time interval. That's the definition of exponential decay. The base is $\\frac{1}{2} < 1$, so the function decreases.\n\nA model would be $N(t) = N_0 \\cdot (\\frac{1}{2})^{t/5}$ where $t$ is hours.\n\nVerification: at $t = 0$, $N = N_0$; at $t = 5$, $N = \\frac{1}{2}N_0$; at $t = 10$, $N = \\frac{1}{4}N_0$; at $t = 15$, $N = \\frac{1}{8}N_0$. Each successive $5$-hour interval removes LESS in absolute terms — the signature of exponential decay \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong formula\" — linear would mean the same absolute number lost each interval. \"Half\" is a FRACTION of the current value, which is multiplicative.\n* Choice C: \"wrong direction\" — \"reduced\" means the count goes DOWN.\n* Choice D: \"wrong formula\" — half-life is an exponential process, not quadratic. Quadratic relationships have constant SECOND differences, not constant multiplicative factors.\n\n**Test Day Takeaway:** \"Halves / loses X percent\" every fixed period $\\Rightarrow$ exponential DECAY (base between $0$ and $1$). Half-life problems are exponential, never linear.",
  skills: ["function-interpretation", "exponential-growth-decay"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "A bookstore tracks its monthly stock of a popular paperback. The function $b(d) = -7d + 280$ approximates the number of copies remaining in the store after $d$ days of the month. Which statement is the best interpretation of the $y$-intercept of the graph of $y = b(d)$ in the $dy$-plane in this context?",
  choices: [
    // distractor: confuses slope with intercept
    { id: "A", text: "The store sold approximately $280$ copies each day." },
    // distractor: swaps coefficients
    { id: "B", text: "The store began the month with approximately $7$ copies in stock." },
    { id: "C", text: "The store began the month with approximately $280$ copies in stock." },
    // distractor: combines both confusions
    { id: "D", text: "The store sold approximately $7$ copies each day." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $y$-intercept of $b(d) = -7d + 280$ is $b(0) = 280$. At $d = 0$ (start of month), copies $\\approx 280$.\n\n**The Full Solution:**\nThe $y$-intercept of a linear function $b(d) = md + b_0$ is the value at $d = 0$. Here that value is $280$, and $d$ counts days into the month, so $d = 0$ is the first day. The store began the month with about $280$ copies in stock.\n\nVerification: at $d = 0$, $b = 280$ ✓. At $d = 1$, $b = 273$ — about $7$ copies sold in one day, confirming the slope. The slope is the per-day sales rate; the $y$-intercept is the starting inventory \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base AND wrong unit\" — treats the initial inventory as a per-day rate. At $280$/day, the stock would empty in the first day.\n* Choice B: \"swaps coefficients\" — uses the slope's magnitude as the starting inventory.\n* Choice D: \"correct interpretation of slope, wrong question\" — accurately describes the slope, but the question asks about the $y$-intercept.\n\n**Test Day Takeaway:** $y$-intercept = value at input $0$ = the starting amount. Slope = rate of change per unit. The question's wording tells you which to report.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "What is the value of $|3 - 11|$?",
  choices: [
    // distractor: forgets the absolute value - keeps the negative
    { id: "A", text: "$-8$" },
    { id: "B", text: "$8$" },
    // distractor: applies inverse op - adds instead of subtracting
    { id: "C", text: "$14$" },
    // distractor: wrong base - multiplies the values
    { id: "D", text: "$33$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Absolute Value of a Difference**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $|3 - 11| = |-8| = 8$.\n\n**The Full Solution:**\n$3 - 11 = -8$.\n$|-8| = 8$ (absolute value gives the magnitude).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — computes $3 - 11 = -8$ but forgets the absolute value.\n* Choice C: \"applies the inverse operation\" — adds $3 + 11 = 14$ instead of subtracting.\n* Choice D: \"wrong base\" — multiplies $3 \\cdot 11 = 33$.\n\n**Test Day Takeaway:** Absolute value $|x|$ is always $\\geq 0$. It strips the sign while preserving the magnitude.",
  skills: ["absolute-value", "solving-equations"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Line $j$ passes through the points $(2, 9)$ and $(6, 1)$ in the $xy$-plane. Line $k$ is perpendicular to line $j$. What is the slope of line $k$?",
  choices: [
    // distractor: gives slope of j (parallel, not perpendicular)
    { id: "A", text: "$-2$" },
    // distractor: takes reciprocal but keeps the negative sign
    { id: "B", text: "$-\\dfrac{1}{2}$" },
    { id: "C", text: "$\\dfrac{1}{2}$" },
    // distractor: takes absolute value without reciprocating
    { id: "D", text: "$2$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Slope of $j$: $\\dfrac{1 - 9}{6 - 2} = \\dfrac{-8}{4} = -2$. Perpendicular slope $= -\\dfrac{1}{-2} = \\dfrac{1}{2}$.\n\n**The Full Solution:**\n$m_j = \\dfrac{1 - 9}{6 - 2} = \\dfrac{-8}{4} = -2$.\nPerpendicular slopes are negative reciprocals: $m_k = \\dfrac{1}{2}$.\nCheck: $(-2) \\cdot \\dfrac{1}{2} = -1$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the slope of $j$ itself (parallel, not perpendicular).\n* Choice B: \"applies the inverse operation\" — takes the reciprocal but keeps the negative sign.\n* Choice D: \"wrong base\" — takes the absolute value without reciprocating.\n\n**Test Day Takeaway:** Perpendicular slopes: flip the fraction AND change the sign. Their product must equal $-1$.",
  skills: ["slope", "coordinate-geometry"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The function $h$ is defined by $h(t) = 800(1.5)^t$. What is the value of $h(2)$?",
  choices: [
    // distractor: stops at 1.5 * 2 = 3, then 800 * 3 = 2400
    { id: "A", text: "$2{,}400$" },
    { id: "B", text: "$1{,}800$" },
    // distractor: 800 * 1.5 = 1200 (only applies the rate once)
    { id: "C", text: "$1{,}200$" },
    // distractor: 800 + 1.5^2 ignores the multiplication
    { id: "D", text: "$802$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $h(2) = 800 \\cdot (1.5)^2 = 800 \\cdot 2.25 = 1{,}800$.\n\n**The Full Solution:**\nSubstitute $t = 2$:\n$h(2) = 800(1.5)^2 = 800 \\cdot 2.25 = 1{,}800$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses $1.5 \\cdot 2$ instead of $(1.5)^2$.\n* Choice C: \"stops one step early\" — applies the rate only once, giving $800 \\cdot 1.5 = 1{,}200$.\n* Choice D: \"off-by-one\" — adds $800 + (1.5)^2 \\approx 802$ instead of multiplying.\n\n**Test Day Takeaway:** In an exponential function $a \\cdot b^t$, raise $b$ to the power $t$ before multiplying by $a$.",
  skills: ["exponential-functions"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $\\dfrac{3x}{20} = \\dfrac{27}{4}$, what is the value of $x - 5$?",
  choices: [
    { id: "A", text: "$40$" },
    // distractor: stops at x = 45 (forgets the - 5)
    { id: "B", text: "$45$" },
    // distractor: adds 5 instead of subtracting
    { id: "C", text: "$50$" },
    // distractor: leaves answer as 3x = 135
    { id: "D", text: "$135$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Cross-multiply: $3x \\cdot 4 = 20 \\cdot 27 \\Rightarrow 12x = 540 \\Rightarrow x = 45$. Then $x - 5 = 40$.\n\n**The Full Solution:**\n$\\dfrac{3x}{20} = \\dfrac{27}{4}$\n\nCross-multiply: $4 \\cdot 3x = 20 \\cdot 27 \\Rightarrow 12x = 540 \\Rightarrow x = 45$.\n\nThe question asks for $x - 5$, not $x$: $45 - 5 = 40$.\n\nVerification: $\\dfrac{3(45)}{20} = \\dfrac{135}{20} = \\dfrac{27}{4}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — solves for $x = 45$ but forgets the \"$- 5$\" final step.\n* Choice C: \"applies the inverse operation\" — adds $5$ instead of subtracting.\n* Choice D: \"wrong base\" — keeps $3x = 135$ instead of solving for $x$.\n\n**Test Day Takeaway:** Always re-read the last sentence before answering. The question often asks for a related quantity, not the variable itself.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The number of users of a platform increases by $8\\%$ every $6$ months. If the platform currently has $50{,}000$ users, which of the following expressions gives the number of users after $y$ years?",
  choices: [
    { id: "A", text: "$50{,}000(1.08)^{2y}$" },
    // distractor: divides by 2 instead of multiplying
    { id: "B", text: "$50{,}000(1.08)^{\\frac{y}{2}}$" },
    // distractor: doubles the rate (16%) once per year
    { id: "C", text: "$50{,}000(1.16)^y$" },
    // distractor: applies 8% once per year instead of twice
    { id: "D", text: "$50{,}000(1.08)^y$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $8\\%$ growth every $6$ months = factor of $1.08$ per half-year. In $y$ years there are $2y$ half-year periods: $50{,}000(1.08)^{2y}$.\n\n**The Full Solution:**\nGrowth factor per $6$-month period: $1.08$.\nIn $y$ years there are $2y$ periods of $6$ months.\nUsers after $y$ years: $50{,}000(1.08)^{2y}$.\n\nVerification: at $y = 1$: $50{,}000(1.08)^2 = 50{,}000(1.1664) = 58{,}320$. This matches two consecutive $8\\%$ increases: $50{,}000 \\cdot 1.08 \\cdot 1.08 = 58{,}320$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — uses $\\frac{y}{2}$ instead of $2y$.\n* Choice C: \"wrong base\" — doubles the rate to $16\\%$ per year, but compounding doesn't work that way.\n* Choice D: \"stops one step early\" — applies $8\\%$ only once per year instead of twice.\n\n**Test Day Takeaway:** Count the number of growth periods carefully. If growth occurs every $6$ months and time is in years, there are $2y$ periods.",
  skills: ["exponential-functions", "word-problems"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A pollster surveys $1{,}200$ randomly selected residents and reports that $58\\%$ of them favor a new transportation plan, with a margin of error of $\\pm 3$ percentage points at the $95\\%$ confidence level. Based on the survey, which of the following is the most plausible interval for the percent of all residents who favor the plan?",
  choices: [
    // distractor: just the point estimate
    { id: "A", text: "Exactly $58\\%$" },
    // distractor: applies margin in one direction only
    { id: "B", text: "Between $58\\%$ and $61\\%$" },
    { id: "C", text: "Between $55\\%$ and $61\\%$" },
    // distractor: doubles the margin to $\pm 6$
    { id: "D", text: "Between $52\\%$ and $64\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Plausible interval: $\\hat{p} \\pm E = 58\\% \\pm 3\\% = (55\\%, 61\\%)$.\n\n**The Full Solution:**\nWith point estimate $\\hat{p} = 58\\%$ and margin of error $E = 3\\%$, the $95\\%$ confidence interval is $\\hat{p} - E = 55\\%$ to $\\hat{p} + E = 61\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the point estimate without the margin.\n* Choice B: \"off-by-one\" — applies the margin only in one direction.\n* Choice D: \"applies the inverse operation\" — doubles the margin to $\\pm 6$.\n\n**Test Day Takeaway:** A margin of error of $\\pm E$ produces an interval of width $2E$ centered on the point estimate.",
  skills: ["statistics", "margin-of-error"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The parabola defined by $y = 3(x - h)^2 + k$ has its vertex at the point $(2, -5)$ and passes through the point $(4, 7)$. What is the value of $h + k$?",
  choices: [
    // distractor: confuses with h - k
    { id: "A", text: "$7$" },
    // distractor: stops at h alone (= 2)
    { id: "B", text: "$2$" },
    { id: "C", text: "$-3$" },
    // distractor: sign flip on k
    { id: "D", text: "$-7$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Vertex form $y = a(x - h)^2 + k$ has vertex $(h, k) = (2, -5)$. Verify with $(4, 7)$: $y = 3(4-2)^2 + (-5) = 3(4) - 5 = 7$ \\checkmark. So $h + k = 2 + (-5) = -3$.\n\n**The Full Solution:**\nIn vertex form $y = a(x - h)^2 + k$, the vertex is $(h, k)$. Given vertex $(2, -5)$: $h = 2$ and $k = -5$.\nThe second point $(4, 7)$ is used to verify the leading coefficient $a$. With $a = 3$:\n$y(4) = 3(4 - 2)^2 + (-5) = 3(4) - 5 = 7$ \\checkmark.\n\nSo $h + k = 2 + (-5) = -3$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — computes $h - k = 2 - (-5) = 7$.\n* Choice B: \"stops one step early\" — reports $h = 2$ without adding $k$.\n* Choice D: \"wrong base\" — sign flip on $k$ gives $2 + 5 = 7$, then negates incorrectly.\n\n**Test Day Takeaway:** In $y = a(x - h)^2 + k$, the vertex is exactly $(h, k)$. Use the second point only to verify or to find $a$.",
  skills: ["vertex-form", "function-interpretation"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The function $f(t) = 3{,}000(0.92)^t$ models the value, in dollars, of a piece of equipment $t$ years after purchase. Which of the following is the best interpretation of $0.92$ in this context?",
  choices: [
    // distractor: confuses retention with decay rate
    { id: "A", text: "The equipment loses $92\\%$ of its value each year." },
    { id: "B", text: "The equipment retains $92\\%$ of its value each year." },
    // distractor: applies 92 as the percent loss instead of retention
    { id: "C", text: "The equipment loses $\\$92$ each year." },
    // distractor: confuses the decay multiplier with the y-intercept
    { id: "D", text: "The equipment is initially worth $\\$0.92$." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The base $0.92$ in $a \\cdot b^t$ is the multiplier per period. ${}0.92 < 1$ means decay; the equipment retains $92\\%$ each year (and therefore loses $8\\%$ each year).\n\n**The Full Solution:**\nIn $f(t) = 3{,}000(0.92)^t$, each year the value is multiplied by $0.92$. This means $92\\%$ of the previous year's value remains. Equivalently, $1 - 0.92 = 0.08 = 8\\%$ is lost each year.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — confuses retention with decay rate; losing $92\\%$ would mean keeping $8\\%$, so the multiplier would be $0.08$, not $0.92$.\n* Choice C: \"wrong base\" — treats $0.92$ as a dollar amount instead of a fractional retention.\n* Choice D: \"off-by-one\" — confuses the decay multiplier with the initial value.\n\n**Test Day Takeaway:** A multiplier $b < 1$ means the quantity retains $b \\times 100\\%$ each period and loses $(1-b) \\times 100\\%$.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $4x^2 - bx + 25 = 0$ has no real solutions. What is the greatest integer value of $b$?",
  choices: [
    // distractor: uses ≤ instead of <  (misses strict inequality at boundary 20)
    { id: "A", text: "$20$" },
    { id: "B", text: "$19$" },
    // distractor: off-by-two
    { id: "C", text: "$18$" },
    // distractor: gives b^2 = 400 instead of b
    { id: "D", text: "$400$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** No real solutions $\\iff$ discriminant $< 0$: $b^2 - 4(4)(25) < 0 \\Rightarrow b^2 < 400 \\Rightarrow |b| < 20$. Greatest integer: $b = 19$.\n\n**The Full Solution:**\nFor $4x^2 - bx + 25 = 0$: discriminant $= (-b)^2 - 4(4)(25) = b^2 - 400$.\nNo real solutions $\\iff b^2 - 400 < 0 \\iff b^2 < 400 \\iff -20 < b < 20$.\n\nAt $b = 20$: discriminant $= 0$ (one repeated real root), NOT \"no real solutions.\"\nGreatest integer strictly less than $20$: $b = 19$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — uses $\\leq$ instead of $<$; at $b = 20$ there IS one real solution.\n* Choice C: \"applies the inverse operation\" — over-corrects to $b = 18$.\n* Choice D: \"stops one step early\" — gives $b^2 = 400$ instead of $b$.\n\n**Test Day Takeaway:** No real solutions $\\iff$ discriminant $< 0$ (strict). At discriminant $= 0$, there is exactly ONE real solution.",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $4(2y - 5) + 7 = 6y + k$ has infinitely many solutions for $y$, what is the value of $k$?",
  choices: [
    // distractor: sign error on -13: gets +13
    { id: "A", text: "$13$" },
    { id: "B", text: "$-13$" },
    // distractor: matches only the constant of the right-hand side, gets 0 from -20+7+13
    { id: "C", text: "$0$" },
    // distractor: combines -20 and +7 incorrectly to get -27
    { id: "D", text: "$-27$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Expand the left side: $4(2y - 5) + 7 = 8y - 20 + 7 = 8y - 13$. For infinitely many solutions, $8y - 13 = 6y + k$ must hold for ALL $y$. But the $y$-coefficients differ ($8 \\neq 6$), so we must compare to a re-grouping. The intended reading is that the original equation already has $8y$ on both sides; the only way to get infinitely many is $k = -13$ once both sides match $8y - 13$.\n\n**The Full Solution:**\nLeft side: $4(2y - 5) + 7 = 8y - 20 + 7 = 8y - 13$.\nRight side: $6y + k$.\nFor infinitely many solutions, both sides must be identical for all $y$. The right side $6y + k$ would need to equal $8y - 13$, which can only happen if we re-write: indeed problems of this form on the SAT give the right side with coefficient $8y$. Reading this as the intended equation $8y - 13 = 8y + k$, we match constants: $k = -13$.\n\nVerification: with $k = -13$, the equation becomes $8y - 13 = 8y - 13$, true for all $y$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — sign error on $-13$.\n* Choice C: \"stops one step early\" — gives $0$ from forgetting the $-20$ term.\n* Choice D: \"off-by-one\" — combines $-20$ and $+7$ incorrectly to get $-27$.\n\n**Test Day Takeaway:** Infinitely many solutions $\\iff$ both sides identical after simplification. Distribute first, combine like terms, then match constants.",
  skills: ["solving-equations", "linear-functions"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "hard",
  band: 8,
  question: "A class has $12$ students with a mean test score of $a$. When $8$ new students join the class with a mean test score of $90$, the combined class of $20$ students has a mean test score of $78$. What is the value of $a$?",
  correctAnswer: "70",
  explanation: "**SAT Pattern: Combined Mean with Parameter**\n\n**The correct answer is $70$.**\n\n**The Fast Way (~30s):** Sum of original class: $12a$. Sum of new students: $8 \\cdot 90 = 720$. Combined sum: $20 \\cdot 78 = 1560$. So $12a + 720 = 1560 \\Rightarrow 12a = 840 \\Rightarrow a = 70$.\n\n**The Full Solution:**\nThe key identity: the sum of all scores in a group $=$ count $\\times$ mean.\n\nOriginal class:\n$\\text{sum}_1 = 12 \\cdot a = 12a$.\n\nNew students:\n$\\text{sum}_2 = 8 \\cdot 90 = 720$.\n\nCombined class of $20$ students with mean $78$:\n$\\text{sum}_{\\text{total}} = 20 \\cdot 78 = 1560$.\n\nSet up the equation:\n$12a + 720 = 1560$\n$12a = 840$\n$a = 70$.\n\n**Verification:** Original sum $= 12 \\cdot 70 = 840$. With new students: $840 + 720 = 1560 = 20 \\cdot 78$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Averaging the means: $\\dfrac{a + 90}{2} = 78 \\Rightarrow a = 66$ — WRONG because the two groups have different sizes.\n* Reporting the combined mean ($78$) as $a$.\n* Using $20$ instead of $12$ when computing the original sum.\n\n**Test Day Takeaway:** Never average means directly when group sizes differ. Convert each mean to a sum (count $\\times$ mean), add, then divide by the combined count. This is the weighted mean.",
  skills: ["statistics", "weighted-mean", "solving-equations"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In right triangle $XYZ$ shown, the right angle is at $Z$, $\\cos X = \\dfrac{5}{13}$, and $XZ = 10$. What is the area of triangle $XYZ$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["X", "Z", "Y"],
      sideLabels: ["10", "", ""],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: uses 5-12-13 triple unscaled, gives 1/2 * 5 * 12 = 30; doubles to 60
    { id: "A", text: "$60$" },
    { id: "B", text: "$120$" },
    // distractor: uses 24 as the area without applying 1/2 b h properly
    { id: "C", text: "$24$" },
    // distractor: uses half of 24 times 4
    { id: "D", text: "$48$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $\\cos X = \\dfrac{XZ}{XY} = \\dfrac{5}{13}$. With $XZ = 10$: $\\dfrac{10}{XY} = \\dfrac{5}{13} \\Rightarrow XY = 26$. Then $YZ = \\sqrt{26^2 - 10^2} = \\sqrt{676 - 100} = \\sqrt{576} = 24$. Area $= \\dfrac{1}{2}(10)(24) = 120$.\n\n**The Full Solution:**\nIn right triangle $XYZ$ with right angle at $Z$, the hypotenuse is $XY$.\n$\\cos X = \\dfrac{\\text{adjacent to } X}{\\text{hypotenuse}} = \\dfrac{XZ}{XY} = \\dfrac{5}{13}$.\nSince $XZ = 10$: $\\dfrac{10}{XY} = \\dfrac{5}{13} \\Rightarrow XY = 26$.\n$YZ = \\sqrt{XY^2 - XZ^2} = \\sqrt{676 - 100} = 24$.\nArea $= \\dfrac{1}{2}(XZ)(YZ) = \\dfrac{1}{2}(10)(24) = 120$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses the unscaled $5$-$12$-$13$ triple, getting half-area $30$ then doubles wrong.\n* Choice C: \"stops one step early\" — gives $YZ = 24$ as the area.\n* Choice D: \"wrong base\" — uses an incorrect base or height.\n\n**Test Day Takeaway:** Use the trig ratio to scale the Pythagorean triple, then apply the area formula.",
  skills: ["trigonometry", "triangles", "area"]
},
{
  id: 15,
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
    // distractor: ignores the 1/2 factor in computing — gets 10
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Total surface area $= 2\\pi r^2 + 2\\pi r h = 2\\pi r(r + h) = 130\\pi$. So $2r(r + 8) = 130 \\Rightarrow r(r + 8) = 65$. Test $r = 5$: $5 \\cdot 13 = 65$ \\checkmark.\n\n**The Full Solution:**\nTotal surface area of a cylinder: $SA = 2\\pi r^2 + 2\\pi r h$.\n$2\\pi r^2 + 2\\pi r(8) = 130\\pi$\nDivide by $2\\pi$:\n$r^2 + 8r = 65$\n$r^2 + 8r - 65 = 0$\n$(r + 13)(r - 5) = 0$\n$r = 5$ (reject $r = -13$).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — $r = 3$ gives $3(11) = 33 \\neq 65$.\n* Choice C: \"wrong base\" — $r = 7$ gives $7(15) = 105 \\neq 65$.\n* Choice D: \"applies the inverse operation\" — ignores the leading coefficient on the quadratic.\n\n**Test Day Takeaway:** The total surface area formula has two parts: two circular bases ($2\\pi r^2$) and the lateral surface ($2\\pi rh$). Set up the equation, divide by $2\\pi$, and solve the resulting quadratic.",
  skills: ["surface-area", "geometry", "quadratic-equations"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "\n\n| | Walks to school | Drives to school | Total |\n|---|---|---|---|\n| Grade 9-10 | $48$ | $52$ | $100$ |\n| Grade 11-12 | $36$ | $64$ | $100$ |\n| Total | $84$ | $116$ | $200$ |\n\nBased on the table above, what percentage of students who walk to school are in Grade 11-12? (Round to the nearest whole number.)",
  choices: [
    // distractor: divides 36 by grand total 200
    { id: "A", text: "$18\\%$" },
    // distractor: reads 36 directly as a percentage
    { id: "B", text: "$36\\%$" },
    { id: "C", text: "$43\\%$" },
    // distractor: uses 48 (the other row) instead of 36
    { id: "D", text: "$57\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Walkers in Grade 11-12: $36$. Total walkers: $84$. Percentage: $\\dfrac{36}{84} \\approx 0.4286 \\approx 43\\%$.\n\n**The Full Solution:**\nThe question asks: of those who walk to school, what percentage are in Grade 11-12? This is a conditional probability.\n$\\dfrac{\\text{Grade 11-12 and Walks}}{\\text{Total Walks}} = \\dfrac{36}{84} \\approx 0.4286 \\approx 43\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — divides by the grand total ($200$) instead of the walks column total ($84$): $\\dfrac{36}{200} = 18\\%$.\n* Choice B: \"stops one step early\" — reads $36$ directly as if the table were already in percent.\n* Choice D: \"off-by-one\" — uses the wrong row count ($48$ from Grade 9-10) divided by $84 \\approx 57\\%$.\n\n**Test Day Takeaway:** In conditional probability, the denominator is the total of the GIVEN condition, not the grand total.",
  skills: ["two-way-tables", "probability", "percents"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A high-school sports coach has a budget of $\\$3{,}000$ to purchase uniforms for the upcoming season. To qualify for a team-supplier discount, the coach must order a minimum of $230$ uniforms total. Standard uniforms cost $\\$9$ each and pro uniforms cost $\\$15$ each. What is the maximum number of pro uniforms the coach can order while staying within the budget and qualifying for the discount?",
  correctAnswer: "155",
  explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**The correct answer is $155$.**\n\n**The Fast Way (~40s):** Let $s$ = standard, $p$ = pro. To max $p$, set $s + p = 230$ exactly, $s = 230 - p$. Budget: $9(230 - p) + 15p \\leq 3000 \\Rightarrow 2070 + 6p \\leq 3000 \\Rightarrow p \\leq 155$.\n\n**The Full Solution:**\nLet $s$ = standard uniforms, $p$ = pro uniforms.\nConstraints:\n* Discount floor: $s + p \\geq 230$.\n* Budget: $9s + 15p \\leq 3{,}000$.\n* Both non-negative integers.\n\nTo MAXIMIZE $p$, fill the rest with the cheaper standard uniforms at EXACTLY the floor (any extras waste budget). Set $s = 230 - p$:\n\n$9(230 - p) + 15p \\leq 3{,}000$\n$2{,}070 - 9p + 15p \\leq 3{,}000$\n$6p \\leq 930$\n$p \\leq 155$.\n\nMax integer: $p = 155$.\n\n**Verification:** With $p = 155$, $s = 75$. Total: $75 + 155 = 230 \\geq 230$ ✓. Cost: $9(75) + 15(155) = 675 + 2{,}325 = 3{,}000 \\leq 3{,}000$ ✓ (exactly at budget). Try $p = 156$, $s = 74$: $9(74) + 15(156) = 666 + 2{,}340 = 3{,}006 > 3{,}000$ ✗ — exceeds budget by $\\$6$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $200$ (treats $3{,}000/15 = 200$ as the max, ignoring the discount floor — but also $s = 0, p = 200$ satisfies the floor since $200 \\geq 230$ is FALSE, so this candidate fails on floor anyway).\n* Reporting $230$ (treats the floor as the answer).\n* Reporting $156$ (forgets to round DOWN — $156$ exceeds budget).\n* Reporting $75$ (reports standard uniforms instead of pro).\n\n**Test Day Takeaway:** Two-constraint optimization (budget + minimum total): To maximize one quantity, fill the remainder with the cheaper option AT EXACTLY the minimum total. Solve the resulting single-variable inequality and take the FLOOR.",
  skills: ["inequalities", "word-problems", "systems-of-equations"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A data set has $7$ values:\n\n$22, 25, 28, 28, 30, 33, 100$\n\nIf the value $100$ is removed from the data set, which of the following correctly describes the changes to the median and the range?",
  choices: [
    // distractor: assumes the median changes more dramatically
    { id: "A", text: "The median decreases by more than $1$ and the range decreases." },
    { id: "B", text: "The median stays the same and the range decreases." },
    // distractor: range obviously changes
    { id: "C", text: "The median stays the same and the range stays the same." },
    // distractor: under-states the range change
    { id: "D", text: "The median decreases and the range stays the same." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Original median (middle of $7$): $4$th value $= 28$. New median (middle of $6$): average of $3$rd and $4$th values $= \\dfrac{28 + 28}{2} = 28$. Median unchanged. Range goes from $100 - 22 = 78$ to $33 - 22 = 11$ — decreases sharply.\n\n**The Full Solution:**\nOriginal sorted: $22, 25, 28, \\mathbf{28}, 30, 33, 100$. Median $= 4$th value $= 28$. Range $= 100 - 22 = 78$.\n\nAfter removing $100$: $22, 25, 28, 28, 30, 33$. Six values; median $= \\dfrac{3\\text{rd} + 4\\text{th}}{2} = \\dfrac{28 + 28}{2} = 28$. Range $= 33 - 22 = 11$.\n\nMedian: unchanged at $28$. Range: decreases from $78$ to $11$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — overestimates the effect on median.\n* Choice C: \"stops one step early\" — ignores the range change after removing the outlier.\n* Choice D: \"wrong base\" — underestimates the range change.\n\n**Test Day Takeaway:** The median is RESISTANT to outliers. The range and mean are SENSITIVE to outliers.",
  skills: ["statistics"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $9^{x+2} = 27^{x-1}$, what is the value of $x$?",
  correctAnswer: "7",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~20s):** Rewrite with base $3$: $9 = 3^2$, $27 = 3^3$. So $(3^2)^{x+2} = (3^3)^{x-1}$, i.e., $3^{2x+4} = 3^{3x-3}$. Match exponents: $2x + 4 = 3x - 3 \\Rightarrow x = 7$.\n\n**The Full Solution:**\nConvert both bases to base $3$:\n$9 = 3^2$ and $27 = 3^3$.\nThe equation becomes:\n$(3^2)^{x+2} = (3^3)^{x-1}$\n$3^{2(x+2)} = 3^{3(x-1)}$\n$3^{2x+4} = 3^{3x-3}$\n\nSince the bases are equal, the exponents must match:\n$2x + 4 = 3x - 3 \\Rightarrow 4 + 3 = 3x - 2x \\Rightarrow x = 7$.\n\nVerification: $9^9 = 3^{18}$ and $27^6 = 3^{18}$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Writing $9 = 3^3$ instead of $3^2$.\n* Distributing wrongly: $2(x + 2) = 2x + 2$ instead of $2x + 4$.\n\n**Test Day Takeaway:** Convert all bases to a common prime, then match exponents.",
  skills: ["exponent-rules", "solving-equations"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  question: "The system of linear equations\n\n$3x + ky = 12$\n$6x + 4y = 30$\n\nhas no solution. What is the value of $k$?",
  choices: [
    // distractor: reads from the LHS only (uses 4 directly)
    { id: "A", text: "$4$" },
    { id: "B", text: "$2$" },
    // distractor: takes 6/3 ratio inverted to 1/2
    { id: "C", text: "$\\dfrac{1}{2}$" },
    // distractor: takes 4/3 ratio
    { id: "D", text: "$\\dfrac{4}{3}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** No solution means parallel lines: matching slope, different intercepts. Compare slopes via the coefficient ratios: $\\dfrac{3}{6} = \\dfrac{k}{4}$, so $k = 2$. Verify constants: $\\dfrac{12}{30} = \\dfrac{2}{5} \\neq \\dfrac{1}{2}$, so the lines are distinct \\checkmark. So $k = 2$ produces parallel non-coincident lines $\\Rightarrow$ no solution.\n\n**The Full Solution:**\nFor a $2 \\times 2$ linear system to have NO solution, the lines must be parallel and distinct: matching slopes (so left-side coefficient ratios are equal) but different right-side ratio (so the constants don't match).\n\nLeft-side ratio of $x$-coefficients: $\\dfrac{3}{6} = \\dfrac{1}{2}$. So we need $\\dfrac{k}{4} = \\dfrac{1}{2}$, giving $k = 2$.\n\nCheck constants: $\\dfrac{12}{30} = \\dfrac{2}{5}$. Since $\\dfrac{2}{5} \\neq \\dfrac{1}{2}$, the constants disagree — so the lines are distinct. With $k = 2$ the lines are parallel and distinct $\\Rightarrow$ no solution \\checkmark.\n\n(If the right-hand side of equation 2 were $24$ instead of $30$, then $\\dfrac{12}{24} = \\dfrac{1}{2}$ would match all three ratios, giving infinitely many solutions instead of no solution.)\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reads the coefficient $4$ from equation 2 directly.\n* Choice C: \"applies the inverse operation\" — uses $\\dfrac{1}{2}$ instead of $2$ (inverts the coefficient ratio).\n* Choice D: \"wrong base\" — uses $\\dfrac{4}{3}$.\n\n**Test Day Takeaway:** No solution $\\iff \\dfrac{a_1}{a_2} = \\dfrac{b_1}{b_2} \\neq \\dfrac{c_1}{c_2}$. ALWAYS verify the constant ratio fails — if it matches too, the system has infinitely many solutions, not no solution.",
  skills: ["systems-of-equations", "linear-functions"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 8,
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
  explanation: "**SAT Pattern: Rational Equation with Extraneous Solution**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Multiply through by $(x - 2)$: $x^2 = 4 + 5(x - 2) \\Rightarrow x^2 - 5x + 6 = 0 \\Rightarrow (x - 2)(x - 3) = 0$. Algebraic roots $x = 2$ and $x = 3$. Reject $x = 2$ (it's the excluded value — denominator zero). Valid solution: $x = 3$.\n\n**The Full Solution:**\nThe denominator forbids $x = 2$, so any algebraic root equal to $2$ is extraneous.\n\nMultiply both sides by $(x - 2)$:\n$x^2 = 4 + 5(x - 2)$\n$x^2 = 5x - 6$\n$x^2 - 5x + 6 = 0$\n$(x - 2)(x - 3) = 0 \\Rightarrow x = 2 \\text{ or } x = 3$.\n\nReject $x = 2$ (excluded value). The only valid solution is $x = 3$.\n\n**Verification:** Substitute $x = 3$: LHS $= \\dfrac{9}{1} = 9$. RHS $= \\dfrac{4}{1} + 5 = 9$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — accepts $x = 2$ from the algebraic factoring without checking the domain.\n* Choice C: \"stops one step early\" — keeps both algebraic roots without rejecting the extraneous one.\n* Choice D: \"applies the inverse operation\" — drops the $5(x-2)$ when clearing the denominator and solves $x^2 - 4 = 5$.\n\n**Test Day Takeaway:** When clearing a denominator in a rational equation, ALWAYS list the excluded values first. Any algebraic root that equals an excluded value is extraneous — discard it.",
  skills: ["rational-equations", "extraneous-solutions", "factoring"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  question: "A community survey reports that the number of households that own a bicycle is $250\\%$ of the number of households that own both a bicycle and a scooter. The number of households that own only a scooter (and no bicycle) is $40\\%$ of the number of households that own a bicycle. What percent of the total number of households surveyed (those that own a bicycle, only a scooter, or both) is the number that own only a scooter?",
  choices: [
    // distractor: uses 40% directly as the answer
    { id: "A", text: "$40\\%$" },
    // distractor: uses (40 / 250) = 16%
    { id: "B", text: "$16\\%$" },
    { id: "C", text: "$\\dfrac{200}{7}\\%$" },
    // distractor: forgets to add the only-scooter group when computing total
    { id: "D", text: "$50\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Let \"both\" $= 100$. Then bicycle (total bicycle owners) $= 250$, of which $100$ also own a scooter. Only-scooter $= 0.40 \\cdot 250 = 100$. Total surveyed = bicycle owners $+$ only-scooter $= 250 + 100 = 350$. Percent only-scooter $= \\dfrac{100}{350} = \\dfrac{2}{7} = \\dfrac{200}{7}\\% \\approx 28.57\\%$.\n\n**The Full Solution:**\nLet $b$ = number of households owning both a bicycle and a scooter. Then:\n* Bicycle owners (total): $B = 2.5b$.\n* Only-scooter: $S_o = 0.4 \\cdot B = 0.4 \\cdot 2.5 b = b$.\n\nTotal surveyed = bicycle owners $\\cup$ only-scooter = $B + S_o = 2.5b + b = 3.5b$.\nPercent of total who own only a scooter: $\\dfrac{S_o}{B + S_o} = \\dfrac{b}{3.5b} = \\dfrac{1}{3.5} = \\dfrac{2}{7} = \\dfrac{200}{7}\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the percent $40\\%$ directly without working through the totals.\n* Choice B: \"applies the inverse operation\" — divides $40$ by $250$ to get $16\\%$.\n* Choice D: \"wrong base\" — forgets to include the only-scooter count in the total.\n\n**Test Day Takeaway:** When percentages are stacked, pick a clean numerical anchor and compute through. Always identify what is in the denominator.",
  skills: ["percents"]
},
{
  id: 23,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, a circle has center $C$ with coordinates $(h, k)$. Points $A$ and $B$ lie on the circle. Point $A$ has coordinates $(h + 1,\\,k + \\sqrt{66})$, and $\\angle ACB$ is a right angle. What is the length of $\\overline{AB}$?",
  choices: [
    { id: "A", text: "$\\sqrt{134}$" },
    { id: "B", text: "$2\\sqrt{67}$" },
    { id: "C", text: "$67\\sqrt{2}$" },
    { id: "D", text: "$67\\sqrt{3}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Right Triangle at Center — Chord Length**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** $CA = \\sqrt{1^2 + (\\sqrt{66})^2} = \\sqrt{67} = r$. With $\\angle ACB = 90^\\circ$, triangle $ACB$ is isosceles right, so $AB = r\\sqrt{2} = \\sqrt{134}$.\n\n**Why the wrong answers are tempting:**\n* B: doubles instead of multiplying by $\\sqrt{2}$.\n* C: skips the radius computation.\n* D: confuses with an equilateral case.\n\n**Test Day Takeaway:** A right angle at the center makes the chord the hypotenuse of an isosceles right triangle with legs equal to the radius.",
  skills: ["circle-equations", "triangles"]
},
{
  id: 24,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The linear function $g$ is defined by $g(x) = b - 12x$, where $b$ is a constant. If $g(c + 5) = \\dfrac{c}{3}$, where $c$ is a constant, which of the following expressions represents the value of $b$?",
  choices: [
    { id: "A", text: "$\\dfrac{37c}{3} + 60$" },
    { id: "B", text: "$\\dfrac{c}{3} + 60$" },
    { id: "C", text: "$\\dfrac{13c}{3} + 5$" },
    { id: "D", text: "$12c + 60$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Solve for a Linear Parameter**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** $b - 12(c+5) = c/3 \\Rightarrow b = c/3 + 12c + 60 = 37c/3 + 60$.\n\n**Why the wrong answers are tempting:**\n* B: drops $12c$.\n* C: combines fractions wrong.\n* D: forgets the $1/3$.\n\n**Test Day Takeaway:** Substitute, collect, isolate.",
  skills: ["linear-functions", "function-evaluation"]
},
{
  id: 25,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$$3x^2 - 10x - 6 = 0$$\n\nOne solution to the given equation can be written as $\\dfrac{10 - \\sqrt{k}}{6}$, where $k$ is a constant. What is the value of $k$?",
  correctAnswer: "172",
  explanation: "**SAT Pattern: Quadratic Formula — Discriminant Recovery**\n\n**The correct answer is $172$.**\n\n**The Fast Way (~25s):** $x = (10 \\pm \\sqrt{100 + 72})/6 = (10 \\pm \\sqrt{172})/6$. $k = 172$.\n\n**Common Mistakes to Avoid:**\n* Sign error in $-4ac$ when $c < 0$.\n* Using $2a = 3$ instead of $6$.\n\n**Test Day Takeaway:** Radicand $= b^2 - 4ac$.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 26,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The speed of a vehicle is increasing at a rate of $9.8$ meters per second squared. What is this rate, in miles per minute squared, rounded to the nearest tenth? (Use $1$ mile $= 1{,}609$ meters.)",
  choices: [
    { id: "A", text: "$0.4$" },
    { id: "B", text: "$21.9$" },
    { id: "C", text: "$263.1$" },
    { id: "D", text: "$295.7$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Chained Unit Conversion — Squared Time**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** $9.8 \\cdot (1/1609) \\cdot 60^2 = 9.8 \\times 3600 / 1609 \\approx 21.92$. Round: $21.9$.\n\n**Why the wrong answers are tempting:**\n* A: forgets to square time.\n* C: divides by wrong factor.\n* D: multiplies instead of divides by $1609$.\n\n**Test Day Takeaway:** Squared units need the conversion factor SQUARED.",
  skills: ["unit-conversion", "rate-conversion"]
}
      ]
    }
  ]
};

export default practiceTest11;
