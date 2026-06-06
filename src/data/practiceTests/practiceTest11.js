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
  explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Slope $= \\dfrac{11 - (-1)}{8 - 2} = \\dfrac{12}{6} = 2$.\n\n**The Full Solution:**\nSlope $= \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{11 - (-1)}{8 - 2} = \\dfrac{12}{6} = 2$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the $y$-difference $12$ without dividing by the $x$-difference $6$.\n* Choice C: \"applies the inverse operation\" — sign error on the difference: $\\dfrac{-1 - 11}{8 - 2} = -2$.\n* Choice D: \"wrong base\" — divides $y$-coordinate by $x$-coordinate of the second point.\n\n**Test Day Takeaway:** Slope is rise over run — always $\\dfrac{\\Delta y}{\\Delta x}$, in the same order in both numerator and denominator.",
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
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Total $\\times 0.26 = 234$, so total $= \\frac{234}{0.26} = 900$.\n\n**The Full Solution:**\nLet $T$ be the total number of children. Then ${}0.26 \\cdot T = 234$.\nDivide both sides by $0.26$: $T = \\dfrac{234}{0.26} = 900$.\n\nVerification: $26\\%$ of $900 = 0.26 \\cdot 900 = 234$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — multiplies $234 \\cdot 0.26 \\approx 61$ instead of dividing.\n* Choice B: \"wrong base\" — divides by the complement $0.74$ (treats $234$ as the non-art count).\n* Choice D: \"off-by-one / decimal slip\" — divides by $0.026$ instead of $0.26$.\n\n**Test Day Takeaway:** When a percent of an unknown total is given, divide the part by the percent (as a decimal) to recover the whole.",
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
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** In $f(t) = 95 + 8t$, the coefficient of $t$ is the rate of change: $8$ bottles per minute.\n\n**The Full Solution:**\nThe function is in the form $f(t) = b + mt$, where $m = 8$ is the slope and $b = 95$ is the $y$-intercept. The slope tells us the rate of change: for each additional minute, the line produces $8$ more bottles.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — confuses the slope $8$ with the initial value, which is $95$.\n* Choice B: \"applies the inverse operation\" — treats $8$ as an input value $t = 8$ instead of a rate.\n* Choice D: \"applies the inverse operation\" — inverts the rate (one bottle per $\\tfrac{1}{8}$ minute).\n\n**Test Day Takeaway:** In $y = b + mx$, the coefficient of the variable is always the rate of change per unit of that variable.",
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
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $4$ extra paperbacks at $\\$6$ each add $\\$24$ to the original total. New total: $\\$34 + \\$24 = \\$58$.\n\n**The Full Solution:**\nLet the cost equation be $6n + 4 = 34$, so $6n = 30$ and $n = 5$.\nFor $n + 4 = 9$ books: total $= 6(9) + 4 = 54 + 4 = \\$58$.\n\nShortcut: you do not need to find $n$. Adding $4$ books adds $4 \\cdot \\$6 = \\$24$, and the shipping fee is unchanged, so the new total is $\\$34 + \\$24 = \\$58$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — adds the count $4$ as dollars instead of $4 \\cdot \\$6$.\n* Choice B: \"wrong base\" — uses the fee ($\\$4$) as the unit price, getting $\\$34 + 4 \\cdot \\$4 = \\$50$.\n* Choice D: \"off-by-one\" — doubles the original total as if every order pays it twice.\n\n**Test Day Takeaway:** Linear cost = (rate $\\times$ quantity) + fixed fee. Adding more items only changes the rate-times-quantity piece — the fixed fee does not change.",
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
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Notice $7x - 11 = (7x + 9) - 20 = 65 - 20 = 45$. No need to find $x$.\n\n**The Full Solution:**\nFrom $7x + 9 = 65$, we get $7x = 56$, so $x = 8$. Then $7x - 11 = 56 - 11 = 45$.\n\nFaster shortcut: the requested expression $7x - 11$ differs from $7x + 9$ by exactly $-20$, so the answer is $65 - 20 = 45$.\n\nVerification: $7(8) + 9 = 65$ \\checkmark, and $7(8) - 11 = 45$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — solves for $x = 8$ and reports it instead of $7x - 11$.\n* Choice C: \"wrong base\" — keeps $7x = 56$ instead of subtracting $11$.\n* Choice D: \"applies the inverse operation\" — computes $7x + 11 = 67$ instead of $7x - 11$.\n\n**Test Day Takeaway:** Always re-read the last sentence. The question often asks for a related expression, not the variable itself.",
  skills: ["solving-equations"]
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
  question: "A satellite ground station logged the number of daily data downloads on $9$ days. Eight of the daily counts are listed below.\n\n$18, 22, 24, 27, 29, 31, 20, 33$\n\nThe mean of all $9$ daily counts is $26$. What is the value of the ninth daily count?",
  correctAnswer: "30",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~25s):** Total sum $= 9 \\cdot 26 = 234$. Sum of the given $8$ counts: $18 + 22 + 24 + 27 + 29 + 31 + 20 + 33 = 204$. Ninth count $= 234 - 204 = 30$.\n\n**The Full Solution:**\nIf the mean of $9$ counts is $26$, the sum of all $9$ is $9 \\cdot 26 = 234$.\nSum of the $8$ listed counts: $18 + 22 + 24 + 27 + 29 + 31 + 20 + 33$.\nAdd in groups: $(18 + 22) + (24 + 27) + (29 + 31) + (20 + 33) = 40 + 51 + 60 + 53 = 204$.\nNinth count $= 234 - 204 = 30$.\n\nVerification: mean $= \\dfrac{204 + 30}{9} = \\dfrac{234}{9} = 26$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing the mean of the given $8$ counts ($25.5$) and reporting that.\n* Subtracting in the wrong order ($204 - 234 = -30$).\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ sum. To recover a missing value, compute the total sum from the mean, then subtract the known sum.",
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
  explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $m(2) = 60 \\cdot (1.5)^2 = 60 \\cdot 2.25 = 135$.\n\n**The Full Solution:**\nSubstitute $t = 2$ into $m(t) = 60(1.5)^t$:\n$m(2) = 60(1.5)^2 = 60 \\cdot 2.25 = 135$ grams.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses $1.5 \\cdot 2 = 3$, then $60 \\cdot 3 = 180$ instead of raising $1.5$ to the power $2$.\n* Choice C: \"stops one step early\" — applies the rate only once, giving $60 \\cdot 1.5 = 90$.\n* Choice D: \"off-by-one\" — adds $60 + (1.5)^2 \\approx 62$ instead of multiplying.\n\n**Test Day Takeaway:** In an exponential function $a \\cdot b^t$, raise $b$ to the power $t$ first, then multiply by $a$.",
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
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Hypotenuse $= \\sqrt{7^2 + 4^2} = \\sqrt{49 + 16} = \\sqrt{65}$. It does not simplify to a whole number.\n\n**The Full Solution:**\nFor a right triangle, the hypotenuse $c$ satisfies $c^2 = a^2 + b^2$ where $a$ and $b$ are the legs.\n$c^2 = 7^2 + 4^2 = 49 + 16 = 65$.\n$c = \\sqrt{65}$.\nSince $65 = 5 \\cdot 13$ has no perfect-square factors, $\\sqrt{65}$ is already in simplest form.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — subtracts the squares ($49 - 16 = 33$); that would find a leg given the hypotenuse, not the hypotenuse itself.\n* Choice C: \"wrong base\" — adds the legs directly ($7 + 4 = 11$), ignoring the squaring.\n* Choice D: \"stops one step early\" — reports $c^2 = 65$ without taking the square root.\n\n**Test Day Takeaway:** The hypotenuse is the square root of the SUM of the squared legs. If the sum has no perfect-square factor, leave the answer as a radical.",
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
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Cross-multiply: $5x \\cdot 4 = 18 \\cdot 45 \\Rightarrow 20x = 810 \\Rightarrow x = 40.5$. Then $x - 8 = 32.5$.\n\n**The Full Solution:**\n$\\dfrac{5x}{18} = \\dfrac{45}{4}$\n\nCross-multiply: $4 \\cdot 5x = 18 \\cdot 45 \\Rightarrow 20x = 810 \\Rightarrow x = 40.5$.\n\nThe question asks for $x - 8$, not $x$: $40.5 - 8 = 32.5$.\n\nVerification: $\\dfrac{5(40.5)}{18} = \\dfrac{202.5}{18} = 11.25 = \\dfrac{45}{4}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — solves for $x = 40.5$ but forgets the \"$- 8$\" final step.\n* Choice C: \"applies the inverse operation\" — adds $8$ instead of subtracting.\n* Choice D: \"wrong base\" — keeps $5x = 162.5$ instead of solving for $x$.\n\n**Test Day Takeaway:** Always re-read the last sentence before answering. The question often asks for a related quantity, not the variable itself.",
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
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The base $0.85$ in $a \\cdot b^t$ is the multiplier per period. Since $0.85 < 1$, the value decays; the press retains $85\\%$ of its value each year (and therefore loses $15\\%$).\n\n**The Full Solution:**\nIn $v(t) = 5{,}000(0.85)^t$, each year the value is multiplied by $0.85$. That means $85\\%$ of the previous year's value remains. Equivalently, $1 - 0.85 = 0.15 = 15\\%$ is lost each year.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — confuses retention with loss; losing $85\\%$ would leave $15\\%$, so the multiplier would be $0.15$, not $0.85$.\n* Choice C: \"wrong base\" — treats $0.85$ as a fixed dollar amount instead of a fractional retention.\n* Choice D: \"off-by-one\" — confuses the decay multiplier with the initial value $5{,}000$.\n\n**Test Day Takeaway:** A multiplier $b < 1$ means the quantity retains $b \\times 100\\%$ each period and loses $(1 - b) \\times 100\\%$.",
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
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Slope $= \\dfrac{9 - 18}{5 - 2} = \\dfrac{-9}{3} = -3$ (the candle shrinks). Back-solve the intercept with $(2, 18)$: $18 = -3(2) + b \\Rightarrow b = 24$. So $h = -3t + 24$.\n\n**The Full Solution:**\nThe two data points are $(t, h) = (2, 18)$ and $(5, 9)$.\nSlope $= \\dfrac{\\Delta h}{\\Delta t} = \\dfrac{9 - 18}{5 - 2} = \\dfrac{-9}{3} = -3$ centimeters per hour.\nUse point-slope (or substitute a point) to find the intercept $b$:\n$18 = -3(2) + b \\Rightarrow 18 = -6 + b \\Rightarrow b = 24$.\nSo $h = -3t + 24$.\n\n**Verification:** at $t = 5$, $h = -3(5) + 24 = -15 + 24 = 9$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses slope $+3$ instead of $-3$, treating the shrinking candle as growing.\n* Choice C: \"stops one step early\" — reads the first point's height $18$ as the intercept instead of back-solving to $24$.\n* Choice D: \"wrong base\" — flips rise over run, using $\\dfrac{\\Delta t}{\\Delta h} = -\\dfrac{1}{3}$ as the slope.\n\n**Test Day Takeaway:** Find the slope from $\\dfrac{\\Delta y}{\\Delta x}$ first (mind the sign), then substitute a point to solve for the intercept — don't read a point's value as the intercept.",
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
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** In $y = a(x - h)^2 + k$ the vertex is $(h, k) = (3, -7)$. Verify with $(5, 9)$: $y = 4(5 - 3)^2 + (-7) = 4(4) - 7 = 9$ \\checkmark. So $h + k = 3 + (-7) = -4$.\n\n**The Full Solution:**\nIn vertex form $y = a(x - h)^2 + k$, the vertex is $(h, k)$. Given vertex $(3, -7)$: $h = 3$ and $k = -7$.\nThe second point $(5, 9)$ confirms the leading coefficient $a = 4$:\n$y(5) = 4(5 - 3)^2 + (-7) = 4(4) - 7 = 9$ \\checkmark.\n\nSo $h + k = 3 + (-7) = -4$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — computes $h - k = 3 - (-7) = 10$.\n* Choice B: \"stops one step early\" — reports $h = 3$ without adding $k$.\n* Choice D: \"wrong base\" — flips the sign of $k$ to get $3 + 7 = 10$, then negates.\n\n**Test Day Takeaway:** In $y = a(x - h)^2 + k$, the vertex is exactly $(h, k)$. Use the second point only to verify or find $a$.",
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
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** \"Increased by $150\\%$\" means the new amount is the old amount PLUS $150\\%$ of it: growth factor $= 1 + 1.50 = 2.5$. So $B = 16(2.5)^t$.\n\n**The Full Solution:**\nA percent increase adds to the original before scaling. An increase of $150\\%$ per week means each week's bookings equal $(1 + 1.50) = 2.5$ times the previous week's. Starting from $16$ on launch day ($t = 0$):\n$B = 16(2.5)^t$.\n\nVerification: at $t = 1$, $B = 16(2.5) = 40$ — that is $16$ plus $150\\%$ of $16$ ($16 + 24 = 40$) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — uses $1.5$ as the factor, which corresponds to only a $50\\%$ increase, not $150\\%$.\n* Choice C: \"wrong base\" — reads $150\\%$ as $15\\%$, giving factor $1.15$.\n* Choice D: \"off-by-one\" — misplaces the decimal, treating $150\\%$ as a factor of $15$.\n\n**Test Day Takeaway:** \"Increased BY $p\\%$\" gives a growth factor of $1 + \\dfrac{p}{100}$. Add $1$ before exponentiating.",
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
  explanation: "**SAT Pattern: Quadratic-Linear System with One Intersection**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Setting the equations equal gives $3x^2 - 22x + 17 = 8x + a$, i.e. $3x^2 - 30x + (17 - a) = 0$. A single intersection means this quadratic has one repeated root, which sits at the vertex: $x = \\dfrac{30}{2 \\cdot 3} = 5$. No need to find $a$.\n\n**The Full Solution:**\nSet the two expressions equal:\n$3x^2 - 22x + 17 = 8x + a$\n$3x^2 - 30x + (17 - a) = 0$.\nExactly one intersection means the discriminant is $0$, so the quadratic has a double root. A double root of $Ax^2 + Bx + C$ lies at $x = -\\dfrac{B}{2A}$:\n$x = -\\dfrac{-30}{2(3)} = \\dfrac{30}{6} = 5$.\n\nThe value of $a$ would just make the discriminant zero; it is not needed to find $x$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — drops the negative when applying $-\\frac{B}{2A}$, getting $-5$.\n* Choice C: \"stops one step early\" — divides $30$ by $A = 3$ instead of $2A = 6$, getting $10$.\n* Choice D: \"wrong base\" — divides $30$ by $2$ alone, ignoring the leading coefficient, getting $15$.\n\n**Test Day Takeaway:** When a line meets a parabola at exactly one point, move everything to one side and use $x = -\\dfrac{B}{2A}$ for the double root — you rarely need the constant.",
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
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The base $0.88$ is already given, so only the exponent changes. One year holds four $3$-month periods, so $n = 4t$: the expression is $100(0.88)^{4t}$.\n\n**The Full Solution:**\nThe decay factor $0.88$ is fixed (each $3$-month period keeps $88\\%$ of the charge). The only thing to convert is the count of periods.\nThere are $12$ months in a year and each period is $3$ months long, so one year contains $\\dfrac{12}{3} = 4$ periods.\nIn $t$ years there are $n = 4t$ periods, giving $100(0.88)^{4t}$.\n\n**Verification:** at $t = 1$ year, $n = 4$, so $100(0.88)^4 \\approx 59.97\\%$ — the same as four consecutive $12\\%$ drops \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — divides by the period length, using $\\dfrac{t}{4}$ instead of multiplying.\n* Choice C: \"wrong base\" — grabs the $3$ from \"$3$ months\" and uses $3t$ periods.\n* Choice D: \"stops one step early\" — multiplies by months-per-year ($12$) without dividing by the $3$-month period length.\n\n**Test Day Takeaway:** When the decay factor is already supplied, only the exponent needs work: divide the total time by the length of one period to count how many periods occur.",
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
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Range $=$ maximum $-$ minimum $= 4.0 - 2.1 = 1.9$.\n\n**The Full Solution:**\nThe range of a data set is the largest value minus the smallest value.\nMaximum $= 4.0$, minimum $= 2.1$.\nRange $= 4.0 - 2.1 = 1.9$ meters.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports the maximum value ($4.0$) instead of the difference.\n* Choice C: \"wrong base\" — subtracts two interior values rather than the max and the min.\n* Choice D: \"off-by-one\" — reports the minimum value ($2.1$) instead of the range.\n\n**Test Day Takeaway:** Range is always max $-$ min. Identify the two extreme values first, then subtract.",
  skills: ["statistics", "range"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = -a^x + b$, where $a$ and $b$ are positive constants. In the $xy$-plane, the graph of $y = f(x) - 9$ has a $y$-intercept at $\\left(0, -\\dfrac{27}{4}\\right)$, and the product of $a$ and $b$ is $\\dfrac{39}{2}$. What is the value of $a$?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Exponential Function — Solving for Parameter**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~40s):** At $x = 0$: $f(0) - 9 = -a^0 + b - 9 = -1 + b - 9 = b - 10$. Set $b - 10 = -\\dfrac{27}{4} \\Rightarrow b = \\dfrac{13}{4}$. Then $a = \\dfrac{ab}{b} = \\dfrac{39/2}{13/4} = 6$.\n\n**The Full Solution:**\nThe $y$-intercept of $y = f(x) - 9$ is its value at $x = 0$:\n$f(0) - 9 = -a^0 + b - 9$.\nSince $a^0 = 1$ for any positive $a$, this is $-1 + b - 9 = b - 10$.\nSet equal to the given $y$-intercept:\n$b - 10 = -\\dfrac{27}{4} \\Rightarrow b = 10 - \\dfrac{27}{4} = \\dfrac{40 - 27}{4} = \\dfrac{13}{4}$.\nNow use $ab = \\dfrac{39}{2}$:\n$a = \\dfrac{39/2}{13/4} = \\dfrac{39}{2} \\cdot \\dfrac{4}{13} = \\dfrac{156}{26} = 6$.\n\n**Verification:** $a = 6$, $b = \\dfrac{13}{4}$, product $= \\dfrac{78}{4} = \\dfrac{39}{2}$ \\checkmark. And $f(0) - 9 = -1 + \\dfrac{13}{4} - 9 = -10 + \\dfrac{13}{4} = -\\dfrac{27}{4}$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting that $a^0 = 1$ (treating $-a^0$ as $-a$ or as $0$).\n* Dropping the $-9$ vertical shift when reading the $y$-intercept.\n* Solving for $b$ and reporting it instead of $a$.\n\n**Test Day Takeaway:** Evaluate transformed graphs at $x = 0$ for the $y$-intercept, and remember any nonzero base raised to the $0$ power equals $1$.",
  skills: ["exponential-functions", "y-intercept", "systems-of-equations"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The function $g$ is defined by $g(x) = (x - 3)(x + 5)(x - 1)^2$. The value of $g(9 - w)$ is $0$, where $w$ is a constant. What is the sum of all distinct possible values of $w$?",
  correctAnswer: "28",
  explanation: "**SAT Pattern: Polynomial Zeros via Factoring**\n\n**The correct answer is $28$.**\n\n**The Fast Way (~35s):** Zeros of $g$ are $x = 3,\\ -5,\\ 1$ (the factor $(x-1)^2$ gives a repeated zero at $1$, but it is one distinct value). Set $9 - w$ equal to each: $w = 6,\\ 14,\\ 8$. Sum $= 28$.\n\n**The Full Solution:**\n$g(9 - w) = 0$ exactly when $9 - w$ is a zero of $g$.\nThe zeros of $g(x) = (x - 3)(x + 5)(x - 1)^2$ are the values that make a factor zero: $x = 3$, $x = -5$, and $x = 1$ (from $(x - 1)^2$, a double root but a single distinct value).\nSet $9 - w$ equal to each distinct zero:\n* $9 - w = 3 \\Rightarrow w = 6$\n* $9 - w = -5 \\Rightarrow w = 14$\n* $9 - w = 1 \\Rightarrow w = 8$\nSum of distinct $w$: $6 + 14 + 8 = 28$.\n\n**Verification:** $g(9 - 6) = g(3) = 0$ \\checkmark; $g(9 - 14) = g(-5) = 0$ \\checkmark; $g(9 - 8) = g(1) = 0$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Counting the double root $1$ twice — it yields only ONE value of $w$.\n* Misreading the factor $(x + 5)$ as a zero of $5$ instead of $-5$.\n* Solving $9 - w = \\text{zero}$ with a sign slip.\n\n**Test Day Takeaway:** A factored polynomial is zero exactly at its factors' roots. A squared factor is still one distinct root. Translate each root through the inner expression to recover the variable.",
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
  explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Let $p$ = poster price, $c$ = card price. $3p + 2c = 31$ and $2p + 4c = 34$. Double the first: $6p + 4c = 62$. Subtract the second: $4p = 28 \\Rightarrow p = 7$, then $2(7) + 4c = 34 \\Rightarrow c = 5$.\n\n**The Full Solution:**\nLet $p$ and $c$ be the poster and card prices.\n$3p + 2c = 31$\n$2p + 4c = 34$.\nMultiply the first equation by $2$ to match the card terms:\n$6p + 4c = 62$.\nSubtract the second equation:\n$(6p + 4c) - (2p + 4c) = 62 - 34 \\Rightarrow 4p = 28 \\Rightarrow p = 7$.\nSubstitute: $2(7) + 4c = 34 \\Rightarrow 4c = 20 \\Rightarrow c = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — solves for the poster price ($p = 7$) but the question asks for the card price.\n* Choice C: \"wrong base\" — adds one poster and one card ($7 + 5 = 12$).\n* Choice D: \"applies the inverse operation\" — gives the difference $7 - 5 = 2$.\n\n**Test Day Takeaway:** Set up one equation per condition, eliminate the variable you do NOT need, and re-read which price the question wants.",
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
  explanation: "**SAT Pattern: Surface Area of a Cylinder — Solving for Radius**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Total surface area $= 2\\pi r^2 + 2\\pi r h = 2\\pi r(r + h) = 130\\pi$. So $2r(r + 8) = 130 \\Rightarrow r(r + 8) = 65$. Test $r = 5$: $5 \\cdot 13 = 65$ \\checkmark.\n\n**The Full Solution:**\nTotal surface area of a cylinder: $SA = 2\\pi r^2 + 2\\pi r h$.\n$2\\pi r^2 + 2\\pi r(8) = 130\\pi$\nDivide by $2\\pi$:\n$r^2 + 8r = 65$\n$r^2 + 8r - 65 = 0$\n$(r + 13)(r - 5) = 0$\n$r = 5$ (reject $r = -13$).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — $r = 3$ gives $3(11) = 33 \\neq 65$.\n* Choice C: \"wrong base\" — $r = 7$ gives $7(15) = 105 \\neq 65$.\n* Choice D: \"applies the inverse operation\" — ignores the leading coefficient on the quadratic.\n\n**Test Day Takeaway:** The total surface area formula has two parts: two circular bases ($2\\pi r^2$) and the lateral surface ($2\\pi rh$). Set up the equation, divide by $2\\pi$, and solve the resulting quadratic.",
  skills: ["surface-area", "geometry", "quadratic-equations"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$$3x^2 - 10x - 6 = 0$$\n\nOne solution to the given equation can be written as $\\dfrac{10 - \\sqrt{k}}{6}$, where $k$ is a constant. What is the value of $k$?",
  correctAnswer: "172",
  explanation: "**SAT Pattern: Quadratic Formula — Discriminant Form**\n\n**The correct answer is $172$.**\n\n**The Fast Way (~25s):** With $a = 3$, $b = -10$, $c = -6$, the quadratic formula gives $x = \\dfrac{10 \\pm \\sqrt{(-10)^2 - 4(3)(-6)}}{2(3)} = \\dfrac{10 \\pm \\sqrt{172}}{6}$. So $k = 172$.\n\n**The Full Solution:**\nFor $3x^2 - 10x - 6 = 0$, apply $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ with $a = 3$, $b = -10$, $c = -6$:\n$x = \\dfrac{10 \\pm \\sqrt{100 + 72}}{6} = \\dfrac{10 \\pm \\sqrt{172}}{6}$.\nMatching the given form $\\dfrac{10 - \\sqrt{k}}{6}$ gives $k = b^2 - 4ac = 100 - 4(3)(-6) = 100 + 72 = 172$.\n\n**Verification:** $b^2 - 4ac = (-10)^2 - 4(3)(-6) = 100 + 72 = 172$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing $-4ac$ as $-72$ instead of $+72$ (the product of two negatives is positive), giving $28$.\n* Forgetting to square $b$.\n* Reporting the whole solution instead of just the radicand $k$.\n\n**Test Day Takeaway:** When a solution is given as $\\dfrac{-b \\pm \\sqrt{k}}{2a}$, the value under the radical is the discriminant $b^2 - 4ac$. Watch the signs.",
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
  explanation: "**SAT Pattern: Function Evaluation to Find Parameter**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** $g(c + 5) = b - 12(c + 5) = b - 12c - 60$. Set equal to $\\dfrac{c}{3}$: $b - 12c - 60 = \\dfrac{c}{3} \\Rightarrow b = \\dfrac{c}{3} + 12c + 60 = \\dfrac{37c}{3} + 60$.\n\n**The Full Solution:**\nEvaluate $g$ at $x = c + 5$:\n$g(c + 5) = b - 12(c + 5) = b - 12c - 60$.\nThe condition $g(c + 5) = \\dfrac{c}{3}$ gives:\n$b - 12c - 60 = \\dfrac{c}{3}$.\nIsolate $b$:\n$b = \\dfrac{c}{3} + 12c + 60$.\nCombine the $c$-terms: $\\dfrac{c}{3} + 12c = \\dfrac{c}{3} + \\dfrac{36c}{3} = \\dfrac{37c}{3}$.\nSo $b = \\dfrac{37c}{3} + 60$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — drops the $12c$ when moving it across, keeping only $\\dfrac{c}{3} + 60$.\n* Choice C: \"off-by-one\" — mis-adds the $c$-terms to $\\dfrac{13c}{3}$ and keeps $+5$ instead of $+60$.\n* Choice D: \"wrong base\" — forgets to convert $12c$ to thirds before combining with $\\dfrac{c}{3}$.\n\n**Test Day Takeaway:** Substitute the full input, distribute carefully, then move every term except the target to the other side. Use a common denominator when combining like terms.",
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
  explanation: "**SAT Pattern: Rational Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Multiply through by $(x - 2)$: $x^2 = 4 + 5(x - 2) \\Rightarrow x^2 - 5x + 6 = 0 \\Rightarrow (x - 2)(x - 3) = 0$. Algebraic roots $x = 2$ and $x = 3$. Reject $x = 2$ (it makes the denominator zero). Valid solution: $x = 3$.\n\n**The Full Solution:**\nThe denominator forbids $x = 2$, so any algebraic root equal to $2$ is extraneous.\n\nMultiply both sides by $(x - 2)$:\n$x^2 = 4 + 5(x - 2)$\n$x^2 = 5x - 6$\n$x^2 - 5x + 6 = 0$\n$(x - 2)(x - 3) = 0 \\Rightarrow x = 2 \\text{ or } x = 3$.\n\nReject $x = 2$ (excluded value). The only valid solution is $x = 3$.\n\n**Verification:** Substitute $x = 3$: LHS $= \\dfrac{9}{1} = 9$. RHS $= \\dfrac{4}{1} + 5 = 9$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — accepts $x = 2$ from the algebraic factoring without checking the domain.\n* Choice C: \"stops one step early\" — keeps both algebraic roots without rejecting the extraneous one.\n* Choice D: \"applies the inverse operation\" — drops the $5(x-2)$ when clearing the denominator and solves $x^2 - 4 = 5$.\n\n**Test Day Takeaway:** When clearing a denominator in a rational equation, ALWAYS list the excluded values first. Any algebraic root that equals an excluded value is extraneous — discard it.",
  skills: ["rational-equations", "extraneous-solutions", "factoring"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "On six consecutive days, Anya measured the height, in centimeters, of fresh snow packed onto a skatepark ramp. Five of her measurements were $48$, $55$, $50$, $53$, and $49$. If the mean of all six measurements was $52$ centimeters, what was the sixth measurement, in centimeters?",
  correctAnswer: "57",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $57$.**\n\n**The Fast Way (~25s):** Total of six values $= 6 \\times 52 = 312$. Sum of the five known values $= 48 + 55 + 50 + 53 + 49 = 255$. Sixth value $= 312 - 255 = 57$.\n\n**The Full Solution:**\nMean $=$ (sum of values) $\\div$ (number of values), so sum $=$ mean $\\times$ count.\nTotal of all six measurements $= 6 \\times 52 = 312$.\nSum of the five known measurements $= 48 + 55 + 50 + 53 + 49 = 255$.\nThe sixth measurement $= 312 - 255 = 57$ centimeters.\n\n**Verification:** $\\dfrac{48 + 55 + 50 + 53 + 49 + 57}{6} = \\dfrac{312}{6} = 52$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Dividing by $5$ instead of $6$ when finding the required total.\n* Forgetting to subtract the known sum from the total.\n* Averaging only the five known values.\n\n**Test Day Takeaway:** To recover a missing value, multiply the mean by the count to get the required total, then subtract the sum of the values you already have.",
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
  explanation: "**SAT Pattern: Multi-Step Unit Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** $6.5\\ \\dfrac{\\text{m}}{\\text{s}^2} \\times \\dfrac{1\\ \\text{km}}{1{,}000\\ \\text{m}} \\times \\left(\\dfrac{60\\ \\text{s}}{1\\ \\text{min}}\\right)^2 = 6.5 \\times \\dfrac{3{,}600}{1{,}000} = 6.5 \\times 3.6 = 23.4\\ \\dfrac{\\text{km}}{\\text{min}^2}$.\n\n**The Full Solution:**\nThe units are distance over time-squared, so the time conversion must be SQUARED.\nDistance: $1\\ \\text{m} = \\dfrac{1}{1{,}000}\\ \\text{km}$.\nTime: $1\\ \\text{min} = 60\\ \\text{s}$, so $\\text{s}^2 \\to \\text{min}^2$ multiplies by $60^2 = 3{,}600$.\n$6.5 \\times \\dfrac{1}{1{,}000} \\times 3{,}600 = 6.5 \\times 3.6 = 23.4\\ \\dfrac{\\text{km}}{\\text{min}^2}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — multiplies by $60$ instead of $60^2$: $6.5 \\times \\dfrac{60}{1{,}000} = 0.39 \\approx 0.4$.\n* Choice C: \"wrong base\" — squares the time but never converts meters to kilometers: $6.5 \\times 3{,}600 = 23{,}400$.\n* Choice D: \"applies the inverse operation\" — squares the distance factor instead of the time factor.\n\n**Test Day Takeaway:** When a unit is squared (like $\\text{time}^2$), its conversion factor must be squared too. Convert one dimension at a time and track exponents.",
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
  explanation: "**SAT Pattern: Circle Radius and Isosceles Right Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $CA = \\sqrt{3^2 + (\\sqrt{91})^2} = \\sqrt{9 + 91} = \\sqrt{100} = 10 = r$. Since $CA$ and $CB$ are both radii meeting at a right angle, $\\triangle ACB$ is a $45$-$45$-$90$ triangle, so $AB = r\\sqrt{2} = 10\\sqrt{2}$.\n\n**The Full Solution:**\nThe radius is the distance from $C(h, k)$ to $A(h + 3,\\ k + \\sqrt{91})$:\n$CA = \\sqrt{(h + 3 - h)^2 + (k + \\sqrt{91} - k)^2} = \\sqrt{3^2 + (\\sqrt{91})^2} = \\sqrt{9 + 91} = \\sqrt{100} = 10$.\nBoth $A$ and $B$ are on the circle, so $CA = CB = 10 = r$. With $\\angle ACB = 90^{\\circ}$, triangle $ACB$ is an isosceles right triangle with legs of length $10$. The hypotenuse $\\overline{AB}$ is the leg times $\\sqrt{2}$:\n$AB = 10\\sqrt{2}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports the radius $10$ instead of the chord $AB$.\n* Choice C: \"wrong base\" — uses the diameter $2r = 20$, which would be the chord only if $A$, $C$, $B$ were collinear.\n* Choice D: \"applies the inverse operation\" — uses the $30$-$60$-$90$ factor $\\sqrt{3}$ instead of the $45$-$45$-$90$ factor $\\sqrt{2}$.\n\n**Test Day Takeaway:** Two radii meeting at a right angle form a $45$-$45$-$90$ triangle, so the connecting chord is $r\\sqrt{2}$.",
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
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** For $x^2 - 14x + k = 0$, the roots sum to $14$ and multiply to $k$. If the roots are $r$ and $s$ with $r + s = 14$ and $r - s = 6$, then $r = 10$, $s = 4$, so $k = rs = 40$.\n\n**The Full Solution:**\nBy Vieta's formulas, for $x^2 - 14x + k = 0$:\n* sum of roots $= 14$\n* product of roots $= k$.\nLet the roots be $r$ and $s$ with $r > s$. Then $r + s = 14$ and $r - s = 6$.\nAdd the two equations: $2r = 20 \\Rightarrow r = 10$. Subtract: $2s = 8 \\Rightarrow s = 4$.\nProduct: $k = rs = 10 \\cdot 4 = 40$.\n\n**Verification:** $x^2 - 14x + 40 = (x - 10)(x - 4)$; roots $10$ and $4$ differ by $6$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — multiplies $14$ and $6$ pieces incorrectly, or uses $4 \\cdot 6 = 24$.\n* Choice C: \"stops one step early\" — reports the sum of the roots ($14$) instead of the product.\n* Choice D: \"off-by-one\" — reports the difference ($6$) instead of computing $k$.\n\n**Test Day Takeaway:** For $x^2 + bx + c$, the roots sum to $-b$ and multiply to $c$. Combine the sum and difference to find each root, then take the product.",
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
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** Group and complete the square: $(x^2 - 6x) + (y^2 + 8y) = 11 \\Rightarrow (x - 3)^2 + (y + 4)^2 = 11 + 9 + 16 = 36$. Radius $= \\sqrt{36} = 6$.\n\n**The Full Solution:**\nStart from $x^2 + y^2 - 6x + 8y - 11 = 0$ and move the constant:\n$(x^2 - 6x) + (y^2 + 8y) = 11$.\nComplete the square in $x$: add $\\left(\\dfrac{-6}{2}\\right)^2 = 9$. Complete the square in $y$: add $\\left(\\dfrac{8}{2}\\right)^2 = 16$. Add the same amounts to the right side:\n$(x - 3)^2 + (y + 4)^2 = 11 + 9 + 16 = 36$.\nThe standard form $(x - h)^2 + (y - k)^2 = r^2$ gives $r^2 = 36$, so $r = 6$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — takes $\\sqrt{11}$ from the constant before completing the square.\n* Choice C: \"wrong base\" — reports $r^2 = 36$ instead of $r$.\n* Choice D: \"off-by-one\" — forgets to add the completed-square constants to the right side, using $25$ and getting $5$.\n\n**Test Day Takeaway:** To find a circle's radius from general form, complete the square in both variables and add the SAME constants to the right side. The right side equals $r^2$, so take its square root.",
  skills: ["circle-equations", "completing-the-square"]
}
      ]
    }
  ]
};

export default practiceTest11;
