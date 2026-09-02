// Practice Test 11 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Official-calibration recreation (2026-09-01): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md).
// Slot metadata (id/type/difficulty/band/skills/pattern) frozen from the
// 2026-06 blueprint: M1 5E/9M/8H; M2 wavy T11-unique flow 3E/7M/12H
// (easy [2,5,10] / medium [1,3,4,7,9,13,18] / hard elsewhere).
// Figure density at official ~20%: M1 carries 4 diagram items, M2 carries 4.
// Numeric MC choices sorted ascending (official convention).
// Scenario palette (test-11 exclusive): ropes courses, bike-share docks,
// seed-drill calibration, ice-rink resurfacing, hotel linen laundry,
// elevator load limits, camera-equipment rental, vending machines,
// water-park slides, community-orchestra ticketing.

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
  question: "A line in the $xy$-plane passes through the points $(1, 5)$ and $(7, -13)$. What is the slope of the line?",
  choices: [
    // distractor: stops at the rise (-18) without dividing by the run
    { id: "A", text: "$-18$" },
    { id: "B", text: "$-3$" },
    // distractor: inverts the ratio, computing run over rise (6/-18)
    { id: "C", text: "$-\\dfrac{1}{3}$" },
    // distractor: subtracts the coordinates in mixed order, flipping the sign
    { id: "D", text: "$3$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Slope $= \\frac{-13 - 5}{7 - 1} = \\frac{-18}{6} = -3$.\n\n**The Full Solution:**\nStep 1: Slope is $\\frac{y_2 - y_1}{x_2 - x_1}$, keeping the points in the same order top and bottom.\nStep 2: $\\frac{-13 - 5}{7 - 1} = \\frac{-18}{6} = -3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-18$): the rise $-13 - 5 = -18$, never divided by the run $6$.\n* Choice C ($-\\frac{1}{3}$): inverts the ratio, putting the run over the rise.\n* Choice D ($3$): mixes the subtraction order between numerator and denominator, flipping the sign.\n\n**Test Day Takeaway:** Slope is rise over run, $\\frac{\\Delta y}{\\Delta x}$ — subtract the coordinates in the same order on top and bottom, and keep the sign.",
  skills: ["slope", "linear-functions", "coordinate-geometry"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "In one week, a vending machine at a recreation center dispensed $168$ bottles of water, which was $35\\%$ of the total number of items the machine dispensed that week. How many items did the machine dispense that week?",
  choices: [
    // distractor: decimal-place slip — divides by 3.5 instead of 0.35
    { id: "A", text: "$48$" },
    // distractor: applies the percent forward — 168 x 0.35 = 58.8, rounded
    { id: "B", text: "$59$" },
    // distractor: divides by the complement 0.65 instead of 0.35
    { id: "C", text: "$258$" },
    { id: "D", text: "$480$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** The $168$ bottles are $35\\%$ of the total, so total $= \\frac{168}{0.35} = 480$.\n\n**The Full Solution:**\nStep 1: Let $T$ be the total number of items. Then $0.35 \\cdot T = 168$.\nStep 2: Divide by $0.35$: $T = \\frac{168}{0.35} = 480$.\nStep 3: Check: $0.35 \\cdot 480 = 168$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($48$): a decimal slip — divides by $3.5$ instead of $0.35$.\n* Choice B ($59$): multiplies $168 \\times 0.35$ instead of dividing — the inverse operation.\n* Choice C ($258$): divides by the complement $0.65$, treating the water bottles as the non-water share.\n\n**Test Day Takeaway:** When a part and its percent of an unknown whole are given, divide the part by the percent written as a decimal to recover the whole.",
  skills: ["percents"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The function $f(t) = 40 + 6t$ gives the number of gallons of water in the tank of a rink-resurfacing machine $t$ seconds after an operator begins filling the tank. What is the best interpretation of $6$ in this context?",
  choices: [
    // distractor: describes the initial value 40, not the slope
    { id: "A", text: "The number of gallons in the tank when the operator begins filling it" },
    // distractor: treats 6 as an input value rather than a rate
    { id: "B", text: "The number of gallons in the tank $6$ seconds after filling begins" },
    // distractor: inverts the rate (that would be 1/6 second per gallon)
    { id: "C", text: "The number of seconds needed to add $1$ gallon to the tank" },
    { id: "D", text: "The number of gallons added to the tank each second" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** In $f(t) = 40 + 6t$, the coefficient of $t$ is the rate of change: $6$ gallons added each second.\n\n**The Full Solution:**\nStep 1: The model has the form $f(t) = b + mt$ with $b = 40$ and $m = 6$.\nStep 2: The slope $m = 6$ is how much the volume rises per one-second increase in $t$, so $6$ is gallons added per second.\n\n**Why the wrong answers are tempting:**\n* Choice A: describes the starting value $40$ (the volume at $t = 0$), not the slope.\n* Choice B: treats $6$ as an input ($t = 6$) rather than a per-second rate.\n* Choice C: inverts the rate — $6$ gallons per second means $\\frac{1}{6}$ second per gallon, not $6$ seconds.\n\n**Test Day Takeaway:** In $y = b + mx$, the coefficient of the variable is the rate of change per unit; the constant is the starting value.",
  skills: ["function-interpretation", "linear-functions", "slope"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A shop rents a camera lens for $\\$18$ per day plus a one-time $\\$25$ cleaning fee. The total cost of Priya's rental, including the fee, is $\\$115$. What is the total cost, in dollars, of a rental that lasts $2$ days longer, with one cleaning fee?",
  choices: [
    // distractor: adds the count 2 as dollars instead of 2 x $18 = $36
    { id: "A", text: "$\\$117$" },
    // distractor: adds only one extra day's charge of $18
    { id: "B", text: "$\\$133$" },
    { id: "C", text: "$\\$151$" },
    // distractor: uses the $25 fee as the daily rate for the extra days
    { id: "D", text: "$\\$165$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Two more days at $\\$18$ each add $\\$36$; the cleaning fee does not change, so the new total is $\\$115 + \\$36 = \\$151$.\n\n**The Full Solution:**\nStep 1: The cost of an $n$-day rental is $18n + 25$. From $18n + 25 = 115$, $18n = 90$, so $n = 5$ days.\nStep 2: The longer rental has $n + 2 = 7$ days with one fee: $18(7) + 25 = 126 + 25 = \\$151$.\nStep 3: Faster: adding $2$ days adds $2 \\cdot \\$18 = \\$36$ and leaves the fee alone, so $\\$115 + \\$36 = \\$151$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$117$): adds the count $2$ as dollars instead of $2 \\times \\$18$.\n* Choice B ($\\$133$): adds only one extra day's $\\$18$ — an off-by-one count slip.\n* Choice D ($\\$165$): uses the $\\$25$ fee as the daily rate, computing $\\$115 + 2 \\cdot \\$25$.\n\n**Test Day Takeaway:** Linear cost is rate $\\times$ quantity plus a fixed fee. Adding days moves only the rate-times-quantity piece; the fixed fee stays put.",
  skills: ["word-problems", "solving-equations"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $5x + 7 = 52$, what is the value of $5x - 8$?",
  choices: [
    // distractor: solves for x = 9 and reports it instead of 5x - 8
    { id: "A", text: "$9$" },
    { id: "B", text: "$37$" },
    // distractor: stops at 5x = 45 without subtracting 8
    { id: "C", text: "$45$" },
    // distractor: adds 15 to 52 instead of subtracting
    { id: "D", text: "$67$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $5x - 8 = (5x + 7) - 15 = 52 - 15 = 37$. No need to find $x$.\n\n**The Full Solution:**\nStep 1: From $5x + 7 = 52$, subtract $7$: $5x = 45$.\nStep 2: Then $5x - 8 = 45 - 8 = 37$.\nStep 3: Or notice $5x - 8$ is $15$ less than $5x + 7$, so $52 - 15 = 37$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): solves for $x = 9$ and reports it instead of $5x - 8$.\n* Choice C ($45$): stops at $5x = 45$ without subtracting $8$.\n* Choice D ($67$): adds the $15$-unit shift instead of subtracting it.\n\n**Test Day Takeaway:** Read the final clause. The question often wants a related expression, not the variable — and often you can shift the given equation directly.",
  skills: ["solving-equations"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The midpoint of segment $\\overline{JK}$ in the $xy$-plane is $(-2, 6)$. If $J = (4, 1)$, what is the $y$-coordinate of point $K$?",
  correctAnswer: "11",
  explanation: "**SAT Pattern: Midpoint Formula**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~15s):** The midpoint $y$ is the average: $\\frac{1 + y_2}{2} = 6$, so $1 + y_2 = 12$ and $y_2 = 11$.\n\n**The Full Solution:**\nStep 1: The midpoint's $y$-coordinate is $\\frac{y_1 + y_2}{2}$, which equals $6$.\nStep 2: With $y_1 = 1$: $\\frac{1 + y_2}{2} = 6 \\Rightarrow 1 + y_2 = 12 \\Rightarrow y_2 = 11$.\nStep 3: Check: $\\frac{1 + 11}{2} = 6$. $\\checkmark$\n\n**Common Mistakes:** Subtracting the coordinates ($6 - 1 = 5$) as if the midpoint measured a distance rather than an average; solving for the $x$-coordinate ($-8$) instead of the $y$-coordinate the question asks for.\n\n**Test Day Takeaway:** The midpoint is the average of the endpoints — never a difference. To recover a missing endpoint, use $2 \\cdot (\\text{midpoint}) - (\\text{known endpoint})$.",
  skills: ["coordinate-geometry"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  question: "A city models the relationship between the number of docks $x$ at a bike-share station and the number of daily rentals $y$ at that station with the equation $y = 4.5x + 20$. According to the model, how many daily rentals are predicted for a station with $16$ docks?",
  choices: [
    // distractor: computes 4.5 x 16 = 72 but forgets to add the constant 20
    { id: "A", text: "$72$" },
    // distractor: rounds the rate 4.5 down to 4, giving 4(16) + 20
    { id: "B", text: "$84$" },
    { id: "C", text: "$92$" },
    // distractor: rounds the rate 4.5 up to 5, giving 5(16) + 20
    { id: "D", text: "$100$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $y = 4.5(16) + 20 = 72 + 20 = 92$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 16$ into $y = 4.5x + 20$.\nStep 2: $4.5(16) = 72$, then add the constant: $72 + 20 = 92$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($72$): computes $4.5 \\cdot 16$ but never adds the constant $20$.\n* Choice B ($84$): rounds the decimal rate $4.5$ down to $4$ before multiplying.\n* Choice D ($100$): rounds $4.5$ up to $5$ before multiplying.\n\n**Test Day Takeaway:** When you plug into $y = mx + b$, multiply by the exact decimal rate and always add the constant term $b$.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The function $f$ is defined by $f(x) = 1{,}800(1.06)^x$. What is the value of $f(4)$, to the nearest whole number?",
  choices: [
    // distractor: applies the 6% growth only once — 1,800(1.06)
    { id: "A", text: "$1{,}908$" },
    // distractor: uses (1.06)^2 instead of (1.06)^4
    { id: "B", text: "$2{,}022$" },
    // distractor: treats 6% over 4 periods as simple growth — 1,800(1.24)
    { id: "C", text: "$2{,}232$" },
    { id: "D", text: "$2{,}272$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Exponential Function Evaluation**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** $(1.06)^4 \\approx 1.2625$, so $f(4) \\approx 1{,}800 \\cdot 1.2625 \\approx 2{,}272$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 4$: $f(4) = 1{,}800(1.06)^4$.\nStep 2: Build the power: $(1.06)^2 = 1.1236$, so $(1.06)^4 = (1.1236)^2 \\approx 1.2625$.\nStep 3: $1{,}800 \\cdot 1.2625 \\approx 2{,}272.46$, which rounds to $2{,}272$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($1{,}908$): applies the $6\\%$ growth only once, computing $1{,}800(1.06)$.\n* Choice B ($2{,}022$): stops at $(1.06)^2$, using two periods of growth instead of four.\n* Choice C ($2{,}232$): treats the growth as simple interest, using $1 + 4(0.06) = 1.24$ as the multiplier.\n\n**Test Day Takeaway:** Raise the full multiplier to the exponent — compound growth is not the rate times the number of periods. On the calculator, evaluate $(1.06)^4$ in one step.",
  skills: ["exponential-functions"]
},
{
  id: 9,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The scatterplot below has line of best fit $\\hat{y} = 1.8x + 4.5$. The highlighted data point has coordinates $(12, 30)$. What is the residual at that data point?",
  diagram: { type: "scatterplot", params: {
    points: [[1,7],[2,8],[3,10],[4,11],[5,14],[6,15],[7,17],[8,19],[10,22],[13,27]],
    xMin: 0, xMax: 14, yMin: 0, yMax: 36,
    xGridStep: 1, yGridStep: 4, xLabelStep: 2, yLabelStep: 8,
    bestFitLine: { slope: 1.8, intercept: 4.5 },
    highlightPoint: [12, 30], highlightLabel: "(12, 30)", showResidual: true,
  } },
  correctAnswer: "3.9",
  explanation: "**SAT Pattern: Residual**\n\n**The correct answer is $3.9$.**\n\n**The Fast Way (~15s):** Predicted $\\hat{y} = 1.8(12) + 4.5 = 26.1$; actual is $30$, so residual $= 30 - 26.1 = 3.9$.\n\n**The Full Solution:**\nStep 1: Residual $=$ actual $-$ predicted.\nStep 2: Predicted at $x = 12$: $1.8(12) + 4.5 = 21.6 + 4.5 = 26.1$.\nStep 3: Residual $= 30 - 26.1 = 3.9$. The positive value means the point sits above the line.\n\n**Common Mistakes:** Computing predicted $-$ actual and reporting $-3.9$; forgetting to add the intercept $4.5$ when finding the predicted value.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted. Positive means above the line, negative means below.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "In right triangle $DEF$ shown, the right angle is at $E$, $DE = 20$, and $DF = 29$. What is the length of $\\overline{EF}$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["D", "E", "F"],
      sideLabels: ["20", "", "29"],
      rightAngleVertex: 1
    }
  },
  correctAnswer: "21",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**The correct answer is $21$.**\n\n**The Fast Way (~15s):** The right angle is at $E$, so $DF = 29$ is the hypotenuse and $DE = 20$ is a leg. That's the $20$-$21$-$29$ triple, so $EF = 21$.\n\n**The Full Solution:**\nStep 1: The hypotenuse is opposite the right angle at $E$, so it is $DF = 29$.\nStep 2: $DE^2 + EF^2 = DF^2 \\Rightarrow 20^2 + EF^2 = 29^2$.\nStep 3: $400 + EF^2 = 841 \\Rightarrow EF^2 = 441 \\Rightarrow EF = 21$.\n\n**Common Mistakes:** Treating $DF$ as a leg and adding the squares ($\\sqrt{841 + 400}$); mislabeling which side is the hypotenuse.\n\n**Test Day Takeaway:** The hypotenuse is always opposite the right angle. Subtract squares to find a leg; add them only for the hypotenuse.",
  skills: ["triangles", "pythagorean"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, the line $5x - 12y = 60$ intersects the $x$-axis at point $P$ and the $y$-axis at point $Q$. What is the length of $\\overline{PQ}$?",
  choices: [
    // distractor: uses only the |y-intercept| value (5)
    { id: "A", text: "$5$" },
    // distractor: uses only the x-intercept value (12)
    { id: "B", text: "$12$" },
    { id: "C", text: "$13$" },
    // distractor: adds the intercept magnitudes 12 + 5 instead of using the distance formula
    { id: "D", text: "$17$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Intercepts are $P = (12, 0)$ and $Q = (0, -5)$, so $PQ = \\sqrt{12^2 + 5^2} = \\sqrt{169} = 13$ — a $5$-$12$-$13$ right triangle.\n\n**The Full Solution:**\nStep 1: $x$-intercept: set $y = 0$ in $5x - 12y = 60$: $5x = 60 \\Rightarrow x = 12$, so $P = (12, 0)$.\nStep 2: $y$-intercept: set $x = 0$: $-12y = 60 \\Rightarrow y = -5$, so $Q = (0, -5)$.\nStep 3: Distance: $PQ = \\sqrt{(12 - 0)^2 + (0 - (-5))^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): reports only the $y$-intercept's distance from the origin.\n* Choice B ($12$): reports only the $x$-intercept's distance from the origin.\n* Choice D ($17$): adds the intercept magnitudes $12 + 5$ instead of applying the distance formula.\n\n**Test Day Takeaway:** Find both intercepts, then apply the distance formula. Watch for the $5$-$12$-$13$ triple to skip the arithmetic.",
  skills: ["coordinate-geometry", "linear-functions"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The graph of $y = g(x)$ in the $xy$-plane passes through the points $(0, 5)$ and $(2, 245)$. If $g$ is an exponential function, which of the following could define $g$?",
  choices: [
    // distractor: a linear function through the same two points, not exponential
    { id: "A", text: "$g(x) = 5 + 120x$" },
    // distractor: uses b = 49 instead of solving b^2 = 49 for b = 7
    { id: "B", text: "$g(x) = 5(49)^x$" },
    // distractor: g(0) = 245, contradicting the point (0, 5)
    { id: "C", text: "$g(x) = 245(7)^x$" },
    { id: "D", text: "$g(x) = 5(7)^x$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Exponential Function with Two Conditions**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** $g(0) = 5$ fixes the initial value at $5$. Then $5 \\cdot b^2 = 245 \\Rightarrow b^2 = 49 \\Rightarrow b = 7$, so $g(x) = 5(7)^x$.\n\n**The Full Solution:**\nStep 1: Write $g(x) = a \\cdot b^x$. From $(0, 5)$: $a \\cdot b^0 = a = 5$.\nStep 2: From $(2, 245)$: $5 \\cdot b^2 = 245 \\Rightarrow b^2 = 49 \\Rightarrow b = 7$ (positive base).\nStep 3: So $g(x) = 5(7)^x$. Check: $g(0) = 5$ and $g(2) = 5 \\cdot 49 = 245$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5 + 120x$): a linear function — it passes through both points but is not exponential.\n* Choice B ($5(49)^x$): uses $b = 49$ instead of solving $b^2 = 49$ for $b = 7$.\n* Choice C ($245(7)^x$): has $g(0) = 245$, contradicting the given point $(0, 5)$.\n\n**Test Day Takeaway:** Use the $x = 0$ point to read off $a$, then plug the second point to solve for $b$ — and don't skip the square-root step when the exponent is $2$.",
  skills: ["exponential-functions", "coordinate-geometry"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A researcher surveyed $500$ randomly selected visitors at a water park and estimated that $38\\%$ of all the park's visitors ride at least three water slides per visit, with an associated margin of error of $3$ percentage points. Which interval is the most plausible range for the percent of all visitors who ride at least three water slides per visit?",
  choices: [
    // distractor: uses the point estimate alone, ignoring the margin of error
    { id: "A", text: "Exactly $38\\%$" },
    // distractor: applies the margin on the upper side only
    { id: "B", text: "Between $38\\%$ and $41\\%$" },
    { id: "C", text: "Between $35\\%$ and $41\\%$" },
    // distractor: doubles the margin to plus or minus 6 points
    { id: "D", text: "Between $32\\%$ and $44\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The plausible interval is the point estimate $\\pm$ the margin of error: $38\\% \\pm 3\\%$, which runs from $35\\%$ to $41\\%$.\n\n**The Full Solution:**\nStep 1: A margin of error of $\\pm E$ gives a plausible range of $\\hat{p} - E$ to $\\hat{p} + E$.\nStep 2: Here $\\hat{p} = 38\\%$ and $E = 3\\%$, so the range is $38\\% - 3\\% = 35\\%$ up to $38\\% + 3\\% = 41\\%$, which is choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($38\\%$ exactly): reports the sample point estimate and ignores the margin of error entirely.\n* Choice B ($38\\%$ to $41\\%$): applies the margin on the high side only instead of both sides.\n* Choice D ($32\\%$ to $44\\%$): doubles the margin to $\\pm 6$ points.\n\n**Test Day Takeaway:** A margin of error of $\\pm E$ produces a symmetric interval of total width $2E$ centered on the point estimate.",
  skills: ["statistics", "margin-of-error"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, line $\\ell$ passes through the point $(4, 3)$ and is perpendicular to the line $y = \\dfrac{1}{2}x + 7$. Which equation defines line $\\ell$?",
  choices: [
    { id: "A", text: "$y = -2x + 11$" },
    // distractor: negates the slope without taking the reciprocal
    { id: "B", text: "$y = -\\dfrac{1}{2}x + 5$" },
    // distractor: keeps the original slope — parallel, not perpendicular
    { id: "C", text: "$y = \\dfrac{1}{2}x + 1$" },
    // distractor: takes the reciprocal but forgets the negative sign
    { id: "D", text: "$y = 2x - 5$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The perpendicular slope is the negative reciprocal of $\\frac{1}{2}$, which is $-2$. Plug $(4, 3)$ into $y = -2x + b$: $3 = -8 + b$, so $b = 11$, giving $y = -2x + 11$.\n\n**The Full Solution:**\nStep 1: The given line $y = \\frac{1}{2}x + 7$ has slope $\\frac{1}{2}$. A perpendicular line has slope $-2$ (flip and negate).\nStep 2: Use point-slope through $(4, 3)$: $y - 3 = -2(x - 4) \\Rightarrow y = -2x + 8 + 3 = -2x + 11$.\nStep 3: Check: at $x = 4$, $y = -8 + 11 = 3$ $\\checkmark$, and $\\frac{1}{2} \\cdot (-2) = -1$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice B: negates the slope to $-\\frac{1}{2}$ without taking the reciprocal.\n* Choice C: keeps the original slope $\\frac{1}{2}$ — that line is parallel, not perpendicular.\n* Choice D: flips to $2$ (the reciprocal) but forgets the negative sign.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals: $m_1 \\cdot m_2 = -1$. Flip the fraction and change the sign.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the circle $(x - 2)^2 + (y + 1)^2 = 45$ and the line $y = 2x + b$ intersect at exactly one point. If $b > 0$, what is the value of $b$?",
  correctAnswer: "10",
  explanation: "**SAT Pattern: Circle in Standard Form**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~40s):** The circle has center $(2, -1)$ and radius $\\sqrt{45}$. One intersection means the line is tangent, so the distance from the center to the line equals the radius. Writing the line as $2x - y + b = 0$: $\\frac{|2(2) - (-1) + b|}{\\sqrt{5}} = \\sqrt{45}$ gives $|b + 5| = 15$. With $b > 0$, $b = 10$.\n\n**The Full Solution:**\nStep 1: From $(x - 2)^2 + (y + 1)^2 = 45$, the center is $(2, -1)$ and the radius is $\\sqrt{45} = 3\\sqrt{5}$.\nStep 2: Rewrite $y = 2x + b$ as $2x - y + b = 0$, so $A = 2$, $B = -1$, $C = b$.\nStep 3: Tangency requires distance $=$ radius: $\\frac{|2(2) - 1(-1) + b|}{\\sqrt{4 + 1}} = 3\\sqrt{5} \\Rightarrow \\frac{|b + 5|}{\\sqrt{5}} = 3\\sqrt{5} \\Rightarrow |b + 5| = 15$.\nStep 4: So $b + 5 = 15 \\Rightarrow b = 10$, or $b + 5 = -15 \\Rightarrow b = -20$. Since $b > 0$, take $b = 10$.\n\n**Common Mistakes:** Forgetting $\\sqrt{5} \\cdot \\sqrt{5} = 5$ when clearing the denominator; sign-slipping on the center coordinates $(2, -1)$; reporting the rejected root $b = -20$.\n\n**Test Day Takeaway:** A line is tangent to a circle when the distance from the center to the line equals the radius. Put the line in $Ax + By + C = 0$ form first, then apply the distance formula.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A hotel laundry recorded the number of loads of linens it washed on each of $9$ days. Eight of the daily counts are listed below.\n\n$46, 56, 49, 58, 51, 44, 57, 53$\n\nThe mean of all $9$ daily counts is $52$. What is the value of the ninth daily count?",
  correctAnswer: "54",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $54$.**\n\n**The Fast Way (~25s):** Total of all $9$ counts $= 9 \\cdot 52 = 468$. The eight listed counts sum to $414$, so the ninth count is $468 - 414 = 54$.\n\n**The Full Solution:**\nStep 1: Mean $\\times$ count $=$ sum, so the sum of all $9$ counts is $9 \\cdot 52 = 468$.\nStep 2: Add the eight listed counts: $46 + 56 + 49 + 58 + 51 + 44 + 57 + 53 = 414$.\nStep 3: The ninth count $= 468 - 414 = 54$.\nStep 4: Check: $\\frac{414 + 54}{9} = \\frac{468}{9} = 52$ $\\checkmark$.\n\n**Common Mistakes:** Averaging only the eight given counts (which gives $51.75$); multiplying the mean by $8$ instead of $9$; subtracting in the wrong direction.\n\n**Test Day Takeaway:** To recover a missing value, multiply the mean by the count to get the total sum, then subtract the known sum.",
  skills: ["statistics", "mean"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The expression $(px + 5)(2x + q)$ is equivalent to $6x^2 + 31x + 35$, where $p$ and $q$ are positive constants. What is the value of $p + q$?",
  choices: [
    // distractor: reads q = 5 straight from the visible 5 without checking the constant term
    { id: "A", text: "$8$" },
    // distractor: uses p = 2 from the visible factor 2x, breaking the leading coefficient
    { id: "B", text: "$9$" },
    { id: "C", text: "$10$" },
    // distractor: swaps the roles, using p = 5 and q = 7
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Expand $(px + 5)(2x + q) = 2px^2 + (pq + 10)x + 5q$. Matching gives $2p = 6 \\Rightarrow p = 3$ and $5q = 35 \\Rightarrow q = 7$; the middle term checks ($3 \\cdot 7 + 10 = 31$). So $p + q = 10$.\n\n**The Full Solution:**\nStep 1: Expand: $(px + 5)(2x + q) = 2px^2 + pqx + 10x + 5q = 2px^2 + (pq + 10)x + 5q$.\nStep 2: Match against $6x^2 + 31x + 35$. Leading term: $2p = 6 \\Rightarrow p = 3$. Constant: $5q = 35 \\Rightarrow q = 7$.\nStep 3: Confirm the middle: $pq + 10 = 3(7) + 10 = 31$ $\\checkmark$.\nStep 4: $p + q = 3 + 7 = 10$, which is choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): grabs $q = 5$ from the visible $5$ in the factor instead of solving $5q = 35$.\n* Choice B ($9$): uses $p = 2$ from the visible $2x$, which breaks the leading coefficient $6$.\n* Choice D ($12$): swaps the roles of the constants, using $p = 5$ and $q = 7$.\n\n**Test Day Takeaway:** Match the leading coefficient and the constant term first, then verify the middle term before adding.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the line $y = 4x + c$ intersects the parabola $y = x^2 - 2x + 7$ at exactly one point. What is the value of $c$?",
  choices: [
    { id: "A", text: "$-2$" },
    // distractor: miscomputes 36 - 28 as 4, giving 4 + 4c = 0
    { id: "B", text: "$-1$" },
    // distractor: drops the negative sign on the final value of c
    { id: "C", text: "$2$" },
    // distractor: solves 4c = 36, dropping the 28 entirely
    { id: "D", text: "$9$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Set the line equal to the parabola: $4x + c = x^2 - 2x + 7 \\Rightarrow x^2 - 6x + (7 - c) = 0$. One intersection means discriminant $= 0$: $36 - 4(7 - c) = 0 \\Rightarrow c = -2$.\n\n**The Full Solution:**\nStep 1: Set equal: $4x + c = x^2 - 2x + 7$, so $0 = x^2 - 6x + (7 - c)$.\nStep 2: Exactly one solution means the discriminant is zero: $(-6)^2 - 4(1)(7 - c) = 0$.\nStep 3: $36 - 28 + 4c = 0 \\Rightarrow 8 + 4c = 0 \\Rightarrow c = -2$, which is choice A.\nStep 4: Check: $x^2 - 6x + 9 = (x - 3)^2 = 0$ gives the single point $x = 3$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-1$): miscomputes $36 - 28$ as $4$, then solves $4 + 4c = 0$.\n* Choice C ($2$): drops the negative sign on the final value.\n* Choice D ($9$): solves $4c = 36$, losing the $-28$ term entirely.\n\n**Test Day Takeaway:** For one intersection, set the two equations equal, write the result in standard form, and set the discriminant $b^2 - 4ac = 0$.",
  skills: ["quadratic-equations", "discriminant", "systems-of-equations"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In triangle $PQR$ shown, the angle at $Q$ is a right angle. If $\\cos P = \\dfrac{8}{17}$, what is the value of $\\sin R$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["P", "Q", "R"],
      rightAngleVertex: 1
    }
  },
  correctAnswer: "8/17",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**The correct answer is $\\frac{8}{17}$.**\n\n**The Fast Way (~15s):** With the right angle at $Q$, angles $P$ and $R$ are complementary, so $\\sin R = \\sin(90^\\circ - P) = \\cos P = \\frac{8}{17}$.\n\n**The Full Solution:**\nStep 1: Since $Q = 90^\\circ$, the acute angles satisfy $P + R = 90^\\circ$.\nStep 2: The cofunction identity gives $\\sin(90^\\circ - P) = \\cos P$, so $\\sin R = \\cos P = \\frac{8}{17}$.\nStep 3: Confirm with sides: $\\cos P = \\frac{8}{17}$ means the side adjacent to $P$ is $8$ and the hypotenuse is $17$. That same side of length $8$ is opposite $R$, so $\\sin R = \\frac{8}{17}$.\n\n**Common Mistakes:** Computing $\\sin P = \\frac{15}{17}$ instead of $\\sin R$; substituting $\\cos R$ for $\\sin R$.\n\n**Test Day Takeaway:** In a right triangle the two acute angles are complementary, so the sine of one equals the cosine of the other.",
  skills: ["triangles", "trigonometry"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The right triangle shown has legs of length $\\sqrt{7} + \\sqrt{3}$ and $\\sqrt{7} - \\sqrt{3}$. What is the area of the triangle?",
  diagram: {
    type: "rightTriangle",
    params: {
      sideLabels: ["√7 + √3", "√7 − √3", ""],
      rightAngleVertex: 1
    }
  },
  choices: [
    { id: "A", text: "$2$" },
    // distractor: subtracts the legs instead of multiplying them
    { id: "B", text: "$2\\sqrt{3}$" },
    // distractor: computes the product 7 - 3 = 4 but forgets the 1/2 in the area formula
    { id: "C", text: "$4$" },
    // distractor: adds the squares instead of subtracting — 1/2 of (7 + 3)
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Algebraic Identity Expansion**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Area $= \\frac{1}{2}(\\sqrt{7}+\\sqrt{3})(\\sqrt{7}-\\sqrt{3})$. The legs are a difference-of-squares pair: $(\\sqrt{7})^2 - (\\sqrt{3})^2 = 7 - 3 = 4$, so the area is $\\frac{1}{2}(4) = 2$.\n\n**The Full Solution:**\nStep 1: Area of a right triangle $= \\frac{1}{2} \\cdot \\text{leg} \\cdot \\text{leg} = \\frac{1}{2}(\\sqrt{7}+\\sqrt{3})(\\sqrt{7}-\\sqrt{3})$.\nStep 2: Apply $(a+b)(a-b) = a^2 - b^2$: $(\\sqrt{7})^2 - (\\sqrt{3})^2 = 7 - 3 = 4$.\nStep 3: So the area is $\\frac{1}{2}(4) = 2$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2\\sqrt{3}$): subtracts the legs, $(\\sqrt{7}+\\sqrt{3}) - (\\sqrt{7}-\\sqrt{3}) = 2\\sqrt{3}$, instead of multiplying them.\n* Choice C ($4$): computes the product $7 - 3 = 4$ but forgets the $\\frac{1}{2}$ in the area formula.\n* Choice D ($5$): adds the squared terms, $\\frac{1}{2}(7 + 3)$, instead of subtracting.\n\n**Test Day Takeaway:** Spot the $(a+b)(a-b)$ pattern — it collapses to $a^2 - b^2$ and clears the radicals instantly.",
  skills: ["area", "triangles", "radical-expressions"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Which of the following is equivalent to $\\dfrac{x^{\\frac{10}{3}} \\cdot x^{-\\frac{1}{4}}}{x^{\\frac{1}{12}}}$ for $x > 0$?",
  choices: [
    // distractor: treats the exponent 1/4 as 1/3, subtracting 4/12 instead of 3/12
    { id: "A", text: "$x^{\\frac{35}{12}}$" },
    { id: "B", text: "$x^3$" },
    // distractor: forgets to subtract the denominator's 1/12
    { id: "C", text: "$x^{\\frac{37}{12}}$" },
    // distractor: adds the denominator's exponent instead of subtracting it
    { id: "D", text: "$x^{\\frac{19}{6}}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Multiplying adds exponents and dividing subtracts: $\\frac{10}{3} - \\frac{1}{4} - \\frac{1}{12} = \\frac{40 - 3 - 1}{12} = \\frac{36}{12} = 3$, so the expression is $x^3$.\n\n**The Full Solution:**\nStep 1: Combine the numerator (multiplication adds exponents): $x^{\\frac{10}{3}} \\cdot x^{-\\frac{1}{4}} = x^{\\frac{10}{3} - \\frac{1}{4}}$.\nStep 2: $\\frac{10}{3} - \\frac{1}{4} = \\frac{40}{12} - \\frac{3}{12} = \\frac{37}{12}$, so the numerator is $x^{\\frac{37}{12}}$.\nStep 3: Dividing by $x^{\\frac{1}{12}}$ subtracts: $x^{\\frac{37}{12} - \\frac{1}{12}} = x^{\\frac{36}{12}} = x^3$, which is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^{\\frac{35}{12}}$): treats the $\\frac{1}{4}$ as $\\frac{1}{3}$, subtracting $\\frac{4}{12}$ instead of $\\frac{3}{12}$.\n* Choice C ($x^{\\frac{37}{12}}$): stops after the numerator, never subtracting the final $\\frac{1}{12}$.\n* Choice D ($x^{\\frac{19}{6}}$): adds the denominator's exponent, computing $\\frac{37}{12} + \\frac{1}{12} = \\frac{38}{12}$.\n\n**Test Day Takeaway:** With fractional exponents, put everything over a common denominator: multiply $\\Rightarrow$ add exponents, divide $\\Rightarrow$ subtract.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the graph of $y = (x - a)^2 + b$ has vertex $(5, -4)$ and passes through $(0, c)$. The graph of $y = (x - a)^2 + d$ has the same vertex $x$-coordinate but passes through $(0, c + 9)$. What is the value of $d$?",
  choices: [
    // distractor: subtracts c from the shift amount: 9 - 21
    { id: "A", text: "$-12$" },
    { id: "B", text: "$5$" },
    // distractor: assumes the 9-unit shift in the y-value equals d directly
    { id: "C", text: "$9$" },
    // distractor: stops at c = 21 and reports it as d
    { id: "D", text: "$21$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The first parabola has vertex $(5, -4)$, so at $x = 0$, $c = 25 - 4 = 21$. The second parabola is $(x - 5)^2 + d$, and at $x = 0$ it equals $c + 9 = 30$, so $25 + d = 30 \\Rightarrow d = 5$.\n\n**The Full Solution:**\nStep 1: Vertex $(5, -4)$ gives $a = 5$ and $b = -4$, so the first parabola is $y = (x - 5)^2 - 4$.\nStep 2: At $x = 0$: $c = (0 - 5)^2 - 4 = 25 - 4 = 21$.\nStep 3: The second parabola shares the vertex $x$-coordinate: $y = (x - 5)^2 + d$. At $x = 0$ it passes through $c + 9 = 30$: $25 + d = 30 \\Rightarrow d = 5$, which is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): subtracts $c$ from the shift, computing $9 - 21$.\n* Choice C ($9$): assumes the $9$-unit shift in the $y$-value at $x = 0$ equals $d$ directly.\n* Choice D ($21$): stops at $c = 21$ and reports it as $d$.\n\n**Test Day Takeaway:** Carry each condition through step by step — the change in the constant term is not the same as the change in the function value at a point.",
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
// Official-calibration recreation (2026-09-01): all content re-authored;
// slot metadata and flow shape frozen. Q1-5 warm-ups each carry 2+ steps
// or a trap (successive-percent, add-squares missing leg, shifted ask,
// retain-vs-lose, first-value-as-intercept).
// Palette: bike-share docks, camera-equipment rental, ice-rink resurfacing,
// ropes courses, water-park slides, seed-drill calibration,
// community-orchestra ticketing.

{
  id: 1,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The function $r(t) = 400(1.1)^t$ models the number of daily rides taken from a city's bike-share docks $t$ months after a dock expansion. According to the model, how many daily rides are taken $2$ months after the expansion?",
  choices: [
    // distractor: treats the 10% growth as adding a flat 10 rides each month
    { id: "A", text: "$420$" },
    // distractor: applies the 10% growth only once
    { id: "B", text: "$440$" },
    // distractor: adds 10% of the ORIGINAL value twice — the successive-percent trap
    { id: "C", text: "$480$" },
    { id: "D", text: "$484$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** $r(2) = 400(1.1)^2 = 400(1.21) = 484$.\n\n**The Full Solution:**\nStep 1: Substitute $t = 2$: $r(2) = 400(1.1)^2$.\nStep 2: Square the base first: $(1.1)^2 = 1.21$.\nStep 3: $400 \\cdot 1.21 = 484$, which is choice D. Note the second month's $10\\%$ applies to $440$, not to the original $400$ — that is why the answer is $484$, not $480$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($420$): treats the $10\\%$ growth as adding a flat $10$ rides each month.\n* Choice B ($440$): applies the $10\\%$ growth only once.\n* Choice C ($480$): adds $10\\%$ of the original value twice — successive percent changes compound, they don't add.\n\n**Test Day Takeaway:** In $a \\cdot b^t$, raise the base to the exponent first. Two $10\\%$ increases multiply to $1.21$, never add to $1.20$.",
  skills: ["exponential-functions"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "In the right triangle shown, one leg has length $6$ centimeters and the hypotenuse has length $11$ centimeters. What is the length, in centimeters, of the other leg?",
  diagram: {
    type: "rightTriangle",
    params: {
      sideLabels: ["6", "", "11"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: subtracts the lengths directly: 11 - 6
    { id: "A", text: "$5$" },
    { id: "B", text: "$\\sqrt{85}$" },
    // distractor: ADDS the squares as if finding a hypotenuse
    { id: "C", text: "$\\sqrt{157}$" },
    // distractor: adds the lengths directly: 11 + 6
    { id: "D", text: "$17$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The missing side is a LEG, so subtract squares: $\\sqrt{11^2 - 6^2} = \\sqrt{121 - 36} = \\sqrt{85}$.\n\n**The Full Solution:**\nStep 1: For a right triangle, $a^2 + b^2 = c^2$, where $c = 11$ is the hypotenuse and $a = 6$ is a leg.\nStep 2: $b^2 = 11^2 - 6^2 = 121 - 36 = 85$, so $b = \\sqrt{85}$.\nStep 3: Since $85 = 5 \\cdot 17$ has no perfect-square factor, $\\sqrt{85}$ is already in simplest form — choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): subtracts the side lengths themselves ($11 - 6$) instead of their squares.\n* Choice C ($\\sqrt{157}$): ADDS the squares ($121 + 36$) — that finds a hypotenuse, but the missing side here is a leg.\n* Choice D ($17$): adds the lengths directly and never squares anything.\n\n**Test Day Takeaway:** Identify the missing side first. Hypotenuse $\\Rightarrow$ add the squared legs; leg $\\Rightarrow$ subtract the squared leg from the squared hypotenuse.",
  skills: ["right-triangles", "pythagorean-theorem"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $\\dfrac{4}{x} = \\dfrac{7}{x + 9}$, what is the value of $x + 9$?",
  choices: [
    // distractor: crosses the wrong pair — solves 4x = 7(x + 9), getting x = -21
    { id: "A", text: "$-12$" },
    // distractor: stops one step early — solves for x = 12 and reports it
    { id: "B", text: "$12$" },
    { id: "C", text: "$21$" },
    // distractor: reports the value of 7x instead of x + 9
    { id: "D", text: "$84$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Cross-multiply $\\frac{4}{x} = \\frac{7}{x + 9}$: $4(x + 9) = 7x \\Rightarrow 36 = 3x \\Rightarrow x = 12$. The question wants $x + 9 = 21$.\n\n**The Full Solution:**\nStep 1: Cross-multiply, pairing each numerator with the OTHER denominator: $4(x + 9) = 7x$.\nStep 2: Distribute and collect: $4x + 36 = 7x \\Rightarrow 36 = 3x \\Rightarrow x = 12$.\nStep 3: Read the target. The question asks for $x + 9$, not $x$: $12 + 9 = 21$, which is choice C.\nCheck: $\\frac{4}{12} = \\frac{1}{3}$ and $\\frac{7}{21} = \\frac{1}{3}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): crosses the wrong pair, solving $4x = 7(x + 9)$ to get $x = -21$ and $x + 9 = -12$.\n* Choice B ($12$): solves for $x$ correctly but forgets the question asks for $x + 9$.\n* Choice D ($84$): reports $7x = 84$ instead of $x + 9$.\n\n**Test Day Takeaway:** In a proportion, each numerator multiplies the opposite denominator — then re-read the last line, because the question wants $x + 9$, not $x$.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A camera-rental company models the resale value, in dollars, of one of its cameras with the function $v(t) = 3{,}200(0.88)^t$, where $t$ is the number of years after the camera is purchased. Which of the following is the best interpretation of $0.88$ in this context?",
  choices: [
    // distractor: confuses retention with loss rate
    { id: "A", text: "The camera loses $88\\%$ of its value each year." },
    // distractor: treats the multiplier as a dollar amount
    { id: "B", text: "The camera loses $\\$0.88$ of its value each year." },
    // distractor: confuses the decay multiplier with the initial value
    { id: "C", text: "The camera is initially worth $\\$0.88$." },
    { id: "D", text: "The camera retains $88\\%$ of its value each year." }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** In $a \\cdot b^t$, the base $b$ is the per-year multiplier. Here $b = 0.88 < 1$, so each year the camera keeps $88\\%$ of its value: choice D.\n\n**The Full Solution:**\nStep 1: In $v(t) = 3{,}200(0.88)^t$, each year the value is multiplied by $0.88$.\nStep 2: Multiplying by $0.88$ leaves $88\\%$ of the previous year's value — that is what \"retains\" means.\nStep 3: Equivalently, $1 - 0.88 = 0.12$, so $12\\%$ is lost each year. The retained-value reading is choice D.\n\n**Why the wrong answers are tempting:**\n* Choice A: confuses retention with loss; losing $88\\%$ would leave $12\\%$, a multiplier of $0.12$, not $0.88$.\n* Choice B: treats $0.88$ as a fixed dollar loss instead of a fractional multiplier.\n* Choice C: confuses the decay base with the initial value, which is $3{,}200$, not $0.88$.\n\n**Test Day Takeaway:** A base $b < 1$ in $a \\cdot b^t$ means the quantity retains $b \\times 100\\%$ each period and loses $(1 - b) \\times 100\\%$.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The table gives the volume of water $V$, in liters, remaining in a rink-resurfacing machine's tank $t$ minutes after the machine begins resurfacing. The volume decreases at a constant rate. Which equation represents the relationship between $t$ and $V$?",
  diagram: {
    type: "dataTable",
    params: {
      headers: ["t (minutes)", "V (liters)"],
      rows: [["2", "168"], ["6", "120"]]
    }
  },
  choices: [
    { id: "A", text: "$V = -12t + 192$" },
    // distractor: reads the first table value 168 as the starting volume (the intercept)
    { id: "B", text: "$V = -12t + 168$" },
    // distractor: inverts the rate, using the reciprocal of the slope
    { id: "C", text: "$V = -\\dfrac{1}{12}t + 192$" },
    // distractor: correct rate magnitude but wrong sign — treats draining as filling
    { id: "D", text: "$V = 12t + 192$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The tank drains, so the slope is negative: $\\frac{120 - 168}{6 - 2} = \\frac{-48}{4} = -12$. Plug in $(2, 168)$: $168 = -12(2) + b \\Rightarrow b = 192$. So $V = -12t + 192$, choice A.\n\n**The Full Solution:**\nStep 1: The data points are $(t, V) = (2, 168)$ and $(6, 120)$.\nStep 2: Slope $= \\frac{\\Delta V}{\\Delta t} = \\frac{120 - 168}{6 - 2} = \\frac{-48}{4} = -12$ liters per minute.\nStep 3: Solve for the intercept using $(2, 168)$: $168 = -12(2) + b \\Rightarrow 168 = -24 + b \\Rightarrow b = 192$.\nStep 4: So $V = -12t + 192$. Check $t = 6$: $-72 + 192 = 120$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice B: reads the first row's volume $168$ as the starting volume — but $168$ is the volume at $t = 2$, not $t = 0$.\n* Choice C: inverts the rate, using $\\frac{\\Delta t}{\\Delta V} = -\\frac{1}{12}$.\n* Choice D: uses slope $+12$, treating the draining tank as filling.\n\n**Test Day Takeaway:** Find the slope $\\frac{\\Delta y}{\\Delta x}$ first and mind its sign, then substitute a point to solve for the intercept — a listed value is not the intercept unless its input is $0$.",
  skills: ["linear-functions", "slope", "solving-equations"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The parabola defined by $y = 3(x - h)^2 + k$ has its vertex at the point $(-4, 6)$ and passes through the point $(-2, 18)$. What is the value of $h + k$?",
  choices: [
    // distractor: reports h alone (= -4)
    { id: "A", text: "$-4$" },
    { id: "B", text: "$2$" },
    // distractor: reports k alone (= 6)
    { id: "C", text: "$6$" },
    // distractor: computes k - h = 6 - (-4) instead of the sum
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** In $y = a(x - h)^2 + k$, the vertex is $(h, k)$. The vertex $(-4, 6)$ gives $h = -4$, $k = 6$ directly, so $h + k = -4 + 6 = 2$, choice B.\n\n**The Full Solution:**\nStep 1: Vertex form $y = a(x - h)^2 + k$ has its vertex at $(h, k)$. Given vertex $(-4, 6)$, so $h = -4$ and $k = 6$. Watch the sign: the factor is $(x - h) = (x + 4)$.\nStep 2: The point $(-2, 18)$ just confirms $a = 3$: $3(-2 + 4)^2 + 6 = 3(4) + 6 = 18$ $\\checkmark$.\nStep 3: $h + k = -4 + 6 = 2$, choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): reports $h$ alone and forgets to add $k$.\n* Choice C ($6$): reports $k$ alone.\n* Choice D ($10$): computes $k - h = 6 - (-4)$ instead of the sum.\n\n**Test Day Takeaway:** In $y = a(x - h)^2 + k$, the vertex is exactly $(h, k)$ — and a vertex at $x = -4$ means $h = -4$, not $4$. Use the extra point only to find or verify $a$.",
  skills: ["vertex-form", "function-interpretation"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "On the day a water park opened a new slide, $45$ people rode the slide. A model estimates that, at the end of each week after opening, the number of weekly riders had increased by $120\\%$ of the number of weekly riders at the end of the previous week. Which equation best represents this model, where $R$ is the estimated number of weekly riders $t$ weeks after opening and $t \\le 5$?",
  choices: [
    // distractor: reads 120% as 12%
    { id: "A", text: "$R = 45(1.12)^t$" },
    // distractor: treats 120% as the growth factor itself, omitting the +1
    { id: "B", text: "$R = 45(1.2)^t$" },
    { id: "C", text: "$R = 45(2.2)^t$" },
    // distractor: uses 120 raw, never converting the percent
    { id: "D", text: "$R = 45(120)^t$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** \"Increased by $120\\%$\" means the new value is the old value plus $120\\%$ of it: growth factor $= 1 + 1.20 = 2.2$. So $R = 45(2.2)^t$, choice C.\n\n**The Full Solution:**\nStep 1: A percent increase adds to the original before scaling. Increasing by $120\\%$ each week multiplies by $1 + 1.20 = 2.2$.\nStep 2: Starting from $45$ riders at $t = 0$: $R = 45(2.2)^t$.\nStep 3: Check $t = 1$: $45(2.2) = 99$, which is $45$ plus $120\\%$ of $45$ ($45 + 54 = 99$) $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A: reads $120\\%$ as $12\\%$, giving factor $1.12$.\n* Choice B: uses $1.2$, the factor for a $20\\%$ increase — it drops the $1$ before converting.\n* Choice D: uses $120$ raw, never converting the percent to a decimal.\n\n**Test Day Takeaway:** \"Increased by $p\\%$\" gives a growth factor of $1 + \\frac{p}{100}$. Add the $1$ before raising to the power.",
  skills: ["exponential-functions", "percent-increase", "modeling"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The graphs of $y = 2x^2 - 13x + 9$ and $y = 7x + a$, where $a$ is a constant, intersect at exactly one point $(x, y)$ in the $xy$-plane. What is the value of $x$?",
  choices: [
    // distractor: sign error applying -B/2A — drops the negative on -20
    { id: "A", text: "$-5$" },
    { id: "B", text: "$5$" },
    // distractor: divides 20 by A = 2 instead of 2A = 4
    { id: "C", text: "$10$" },
    // distractor: uses -B = 20 alone, never dividing by 2A
    { id: "D", text: "$20$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Quadratic-Linear System with One Intersection**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Set the curves equal: $2x^2 - 13x + 9 = 7x + a$, i.e. $2x^2 - 20x + (9 - a) = 0$. One intersection means a repeated root, which sits at the vertex: $x = \\frac{20}{2(2)} = 5$, choice B. No need to find $a$.\n\n**The Full Solution:**\nStep 1: Set the expressions equal: $2x^2 - 13x + 9 = 7x + a$.\nStep 2: Move everything to one side: $2x^2 - 20x + (9 - a) = 0$.\nStep 3: Exactly one intersection means the discriminant is $0$, so there is a double root. A double root of $Ax^2 + Bx + C$ lies at $x = -\\frac{B}{2A}$.\nStep 4: $x = -\\frac{-20}{2(2)} = \\frac{20}{4} = 5$, choice B. The constant $a$ only forces the discriminant to zero; it is not needed for $x$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): drops the sign when applying $-\\frac{B}{2A}$.\n* Choice C ($10$): divides $20$ by $A = 2$ instead of $2A = 4$.\n* Choice D ($20$): uses $-B = 20$ alone and never divides.\n\n**Test Day Takeaway:** When a line meets a parabola at exactly one point, move everything to one side and read the double root from $x = -\\frac{B}{2A}$ — you rarely need the constant.",
  skills: ["systems-of-equations", "discriminant", "quadratic-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The value of a rental camera decreases by $9\\%$ every $4$ months. The percent of the original value remaining can be modeled by $100(0.91)^n$, where $n$ is the number of $4$-month periods after purchase. Which expression gives the percent of the original value remaining $t$ years after purchase?",
  choices: [
    // distractor: divides by the periods-per-year count instead of multiplying
    { id: "A", text: "$100(0.91)^{\\frac{t}{3}}$" },
    { id: "B", text: "$100(0.91)^{3t}$" },
    // distractor: uses the 4 from "4 months" as the periods-per-year count
    { id: "C", text: "$100(0.91)^{4t}$" },
    // distractor: uses months-per-year (12), ignoring the period length
    { id: "D", text: "$100(0.91)^{12t}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The base $0.91$ is already given, so only the exponent changes. One year holds three $4$-month periods, so $n = 3t$, giving $100(0.91)^{3t}$, choice B.\n\n**The Full Solution:**\nStep 1: The decay factor $0.91$ is fixed — each $4$-month period keeps $91\\%$ of the value. Only the period count needs converting.\nStep 2: A year has $12$ months and each period is $4$ months, so one year holds $\\frac{12}{4} = 3$ periods.\nStep 3: In $t$ years there are $n = 3t$ periods, giving $100(0.91)^{3t}$, choice B.\nStep 4: Check $t = 1$: $100(0.91)^3 \\approx 75.4\\%$, matching three straight $9\\%$ drops $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A: divides by the period count, using $\\frac{t}{3}$ instead of multiplying.\n* Choice C: grabs the $4$ from \"$4$ months\" and uses $4t$ periods per year.\n* Choice D: multiplies by months-per-year ($12$) without dividing by the $4$-month period length.\n\n**Test Day Takeaway:** When the decay factor is already supplied, only the exponent needs work: divide the total time by the length of one period to count the periods.",
  skills: ["exponential-functions", "word-problems"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "The dot plot shows the number of course elements completed by each of the $14$ campers in a ropes-course session. What is the range of the numbers of elements completed?",
  diagram: { type: "dotPlot", params: {
    data: [
      { value: 2, count: 1 },
      { value: 3, count: 2 },
      { value: 5, count: 2 },
      { value: 6, count: 4 },
      { value: 7, count: 3 },
      { value: 8, count: 1 },
      { value: 9, count: 1 }
    ],
    xMin: 1, xMax: 10,
    xLabel: "Number of elements completed"
  } },
  choices: [
    // distractor: reports the minimum value instead of the range
    { id: "A", text: "$2$" },
    // distractor: reports the mode (the value with the tallest stack)
    { id: "B", text: "$6$" },
    { id: "C", text: "$7$" },
    // distractor: reports the maximum value instead of the range
    { id: "D", text: "$9$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Range $=$ max $-$ min $= 9 - 2 = 7$, choice C.\n\n**The Full Solution:**\nStep 1: The range of a data set is the largest value minus the smallest.\nStep 2: On the dot plot, the leftmost dot sits at $2$ and the rightmost at $9$.\nStep 3: Range $= 9 - 2 = 7$ elements, choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reports the minimum value instead of the difference.\n* Choice B ($6$): reports the mode — the tallest stack — which has nothing to do with range.\n* Choice D ($9$): reports the maximum value instead of the difference.\n\n**Test Day Takeaway:** Range is always max $-$ min. On a dot plot, that is the rightmost value minus the leftmost — stack heights don't matter.",
  skills: ["statistics", "range"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = -a^x + b$, where $a$ and $b$ are positive constants. In the $xy$-plane, the graph of $y = f(x) - 7$ has a $y$-intercept at $\\left(0, -\\dfrac{19}{3}\\right)$, and the product of $a$ and $b$ is $15$. What is the value of $a$?",
  correctAnswer: "9",
  explanation: "**SAT Pattern: Exponential Function — Solving for Parameter**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~40s):** At $x = 0$, $f(0) - 7 = -a^0 + b - 7 = -1 + b - 7 = b - 8$. Set $b - 8 = -\\frac{19}{3}$, so $b = \\frac{5}{3}$. Then $a = \\frac{ab}{b} = \\frac{15}{5/3} = 9$.\n\n**The Full Solution:**\nStep 1: The $y$-intercept of $y = f(x) - 7$ is its value at $x = 0$: $f(0) - 7 = -a^0 + b - 7$.\nStep 2: Since $a^0 = 1$ for any positive $a$, this is $-1 + b - 7 = b - 8$.\nStep 3: Set equal to the given intercept: $b - 8 = -\\frac{19}{3} \\Rightarrow b = 8 - \\frac{19}{3} = \\frac{24 - 19}{3} = \\frac{5}{3}$.\nStep 4: Use $ab = 15$: $a = \\frac{15}{5/3} = 15 \\cdot \\frac{3}{5} = 9$.\nCheck: $ab = 9 \\cdot \\frac{5}{3} = 15$, and $f(0) - 7 = -1 + \\frac{5}{3} - 7 = -\\frac{19}{3}$ $\\checkmark$.\n\n**Common Mistakes:** Forgetting that $a^0 = 1$ (reading $-a^0$ as $-a$ or as $0$); dropping the $-7$ shift when reading the intercept; solving for $b = \\frac{5}{3}$ and reporting it instead of $a$.\n\n**Test Day Takeaway:** Evaluate a transformed graph at $x = 0$ for its $y$-intercept, and remember any nonzero base raised to the $0$ power equals $1$.",
  skills: ["exponential-functions", "y-intercept", "systems-of-equations"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The function $g$ is defined by $g(x) = (x + 6)(x - 2)^2(x - 7)$. The value of $g(11 - w)$ is $0$, where $w$ is a constant. What is the sum of all distinct possible values of $w$?",
  correctAnswer: "30",
  explanation: "**SAT Pattern: Polynomial Zeros via Factoring**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~35s):** $g$ has distinct zeros $x = -6,\\ 2,\\ 7$ (the factor $(x - 2)^2$ repeats the root $2$, but it is one value). Set $11 - w$ to each: $w = 17,\\ 9,\\ 4$. Sum $= 30$.\n\n**The Full Solution:**\nStep 1: $g(11 - w) = 0$ exactly when $11 - w$ is a zero of $g$.\nStep 2: The zeros of $g(x) = (x + 6)(x - 2)^2(x - 7)$ are $x = -6$, $x = 2$, and $x = 7$ (from $(x - 2)^2$, a double root but a single distinct value).\nStep 3: Set $11 - w$ equal to each distinct zero:\n$11 - w = -6 \\Rightarrow w = 17$;\n$11 - w = 2 \\Rightarrow w = 9$;\n$11 - w = 7 \\Rightarrow w = 4$.\nStep 4: Sum of distinct $w$: $17 + 9 + 4 = 30$.\nCheck: $g(-6) = 0$, $g(2) = 0$, $g(7) = 0$ $\\checkmark$.\n\n**Common Mistakes:** Counting the double root $2$ twice — it yields only one value of $w$; misreading $(x + 6)$ as a zero of $6$ instead of $-6$; a sign slip solving $11 - w = \\text{zero}$.\n\n**Test Day Takeaway:** A factored polynomial is zero exactly at its roots, and a squared factor is still one distinct root. Translate each root through the inner expression $11 - w$ to recover the variable.",
  skills: ["polynomial-zeros", "factoring", "substitution"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "At a community orchestra concert, $2$ adult tickets and $3$ student tickets cost $\\$43$, and $4$ adult tickets and $1$ student ticket cost $\\$51$. Every adult ticket has the same price, and every student ticket has the same price. What is the price, in dollars, of one student ticket?",
  choices: [
    // distractor: gives the difference between the two prices
    { id: "A", text: "$\\$4$" },
    { id: "B", text: "$\\$7$" },
    // distractor: gives the adult ticket price instead of the student price
    { id: "C", text: "$\\$11$" },
    // distractor: gives the sum of one adult and one student ticket
    { id: "D", text: "$\\$18$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Let $a$ = adult price, $s$ = student price: $2a + 3s = 43$ and $4a + s = 51$. Double the first: $4a + 6s = 86$. Subtract the second: $5s = 35 \\Rightarrow s = 7$, choice B.\n\n**The Full Solution:**\nStep 1: Set up the system: $2a + 3s = 43$ and $4a + s = 51$.\nStep 2: Multiply the first equation by $2$ to match the adult terms: $4a + 6s = 86$.\nStep 3: Subtract the second: $(4a + 6s) - (4a + s) = 86 - 51 \\Rightarrow 5s = 35 \\Rightarrow s = 7$.\nStep 4: Check: from $4a + 7 = 51$, $a = 11$; then $2(11) + 3(7) = 22 + 21 = 43$ $\\checkmark$. The student ticket costs $\\$7$, choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$4$): gives the difference $11 - 7$ between the two prices.\n* Choice C ($\\$11$): solves for the adult price, but the question asks for the student price.\n* Choice D ($\\$18$): adds one adult and one student ticket ($11 + 7$).\n\n**Test Day Takeaway:** Write one equation per condition, eliminate the variable you do not need, and re-read which price the question actually wants.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A right circular cylinder has a total surface area of $168\\pi$ square centimeters. If the height of the cylinder is $5$ centimeters, what is the radius of the cylinder, in centimeters?",
  choices: [
    // distractor: r = 4 gives r(r+5) = 36, not 84
    { id: "A", text: "$4$" },
    // distractor: r = 6 gives r(r+5) = 66, not 84
    { id: "B", text: "$6$" },
    { id: "C", text: "$7$" },
    // distractor: the rejected root's magnitude from (r+12)(r-7) = 0
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Surface Area of a Cylinder — Solving for Radius**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Total surface area $= 2\\pi r^2 + 2\\pi rh = 2\\pi r(r + h) = 168\\pi$, so $r(r + 5) = 84$. Test $r = 7$: $7 \\cdot 12 = 84$ $\\checkmark$, choice C.\n\n**The Full Solution:**\nStep 1: Total surface area of a cylinder: $SA = 2\\pi r^2 + 2\\pi rh$.\nStep 2: With $h = 5$: $2\\pi r^2 + 2\\pi r(5) = 168\\pi$.\nStep 3: Divide by $2\\pi$: $r^2 + 5r = 84 \\Rightarrow r^2 + 5r - 84 = 0$.\nStep 4: Factor: $(r + 12)(r - 7) = 0$, so $r = 7$ (reject $r = -12$). That is choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): $4(4 + 5) = 36 \\neq 84$.\n* Choice B ($6$): $6(6 + 5) = 66 \\neq 84$.\n* Choice D ($12$): the magnitude of the rejected negative root $r = -12$.\n\n**Test Day Takeaway:** A cylinder's total surface area has two parts — two bases ($2\\pi r^2$) plus the lateral side ($2\\pi rh$). Divide by $2\\pi$ and solve the resulting quadratic, rejecting the negative root.",
  skills: ["surface-area", "geometry", "quadratic-equations"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$$5x^2 - 14x - 8 = 0$$\n\nOne solution to the given equation can be written as $\\dfrac{14 - \\sqrt{k}}{10}$, where $k$ is a constant. What is the value of $k$?",
  correctAnswer: "356",
  explanation: "**SAT Pattern: Quadratic Formula — Discriminant Form**\n\n**The correct answer is $356$.**\n\n**The Fast Way (~25s):** The quadratic formula puts the discriminant under the radical. With $a = 5$, $b = -14$, $c = -8$, that radicand is $b^2 - 4ac = 196 + 160 = 356$, so $k = 356$.\n\n**The Full Solution:**\nStep 1: Apply $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ to $5x^2 - 14x - 8 = 0$ with $a = 5$, $b = -14$, $c = -8$.\nStep 2: The numerator's $-b$ is $14$ and the denominator is $2(5) = 10$, matching the given form $\\dfrac{14 - \\sqrt{k}}{10}$.\nStep 3: Compute the radicand: $b^2 - 4ac = (-14)^2 - 4(5)(-8) = 196 + 160 = 356$.\nSo $k = 356$.\n\n**Common Mistakes:** Treating $-4ac$ as $-160$ (two negatives multiply to a positive $+160$), which gives $36$; forgetting to square $b$; reporting the whole solution instead of just the value under the radical.\n\n**Test Day Takeaway:** When a root is written as $\\dfrac{-b \\pm \\sqrt{k}}{2a}$, the value under the radical is the discriminant $b^2 - 4ac$ — watch every sign.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The linear function $g$ is defined by $g(x) = b - 9x$, where $b$ is a constant. If $g(c + 4) = \\dfrac{c}{2}$, where $c$ is a constant, which of the following expressions represents the value of $b$?",
  choices: [
    // distractor: drops the 9c term when isolating b
    { id: "A", text: "$\\dfrac{c}{2} + 36$" },
    // distractor: loses the c/2 from the right-hand side
    { id: "B", text: "$9c + 36$" },
    // distractor: keeps the +4 from the input instead of the distributed 36
    { id: "C", text: "$\\dfrac{19c}{2} + 4$" },
    { id: "D", text: "$\\dfrac{19c}{2} + 36$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Function Evaluation to Find Parameter**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** Plug $c + 4$ into $g$: $g(c + 4) = b - 9(c + 4) = b - 9c - 36$. Set this equal to $\\dfrac{c}{2}$ and solve for $b$: $b = \\dfrac{c}{2} + 9c + 36 = \\dfrac{19c}{2} + 36$, which is choice D.\n\n**The Full Solution:**\nStep 1: Evaluate $g$ at $x = c + 4$: $g(c + 4) = b - 9(c + 4) = b - 9c - 36$.\nStep 2: Use the condition $g(c + 4) = \\dfrac{c}{2}$: $b - 9c - 36 = \\dfrac{c}{2}$.\nStep 3: Isolate $b$: $b = \\dfrac{c}{2} + 9c + 36$.\nStep 4: Combine the $c$-terms over a common denominator: $\\dfrac{c}{2} + \\dfrac{18c}{2} = \\dfrac{19c}{2}$, so $b = \\dfrac{19c}{2} + 36$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{c}{2} + 36$): drops the $9c$ when moving terms across.\n* Choice B ($9c + 36$): loses the $\\dfrac{c}{2}$ from the right-hand side entirely.\n* Choice C ($\\dfrac{19c}{2} + 4$): keeps the $+4$ from the input instead of the distributed $9 \\cdot 4 = 36$.\n\n**Test Day Takeaway:** Substitute the full input, distribute, then move every term except the target to the other side. Convert to a common denominator before combining like terms.",
  skills: ["linear-functions", "function-evaluation"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "What is the solution to the equation $\\dfrac{x^2}{x - 5} = \\dfrac{25}{x - 5} + 3$?",
  choices: [
    { id: "A", text: "$-2$" },
    // distractor: accepts the extraneous root that zeroes the denominator
    { id: "B", text: "$5$" },
    // distractor: keeps both algebraic roots without rejecting the extraneous one
    { id: "C", text: "$-2 \\text{ and } 5$" },
    // distractor: solves x^2 = 25, ignoring the linear 3(x - 5) term
    { id: "D", text: "$-5 \\text{ and } 5$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Rational Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Multiply through by $(x - 5)$: $x^2 = 25 + 3(x - 5) = 3x + 10$, so $x^2 - 3x - 10 = 0 \\Rightarrow (x - 5)(x + 2) = 0$. The root $x = 5$ is excluded (it zeroes the denominator), leaving $x = -2$, choice A.\n\n**The Full Solution:**\nStep 1: Note the domain restriction first: $x - 5 \\neq 0$, so $x = 5$ is forbidden.\nStep 2: Clear the denominator by multiplying both sides by $(x - 5)$: $x^2 = 25 + 3(x - 5) = 3x + 10$.\nStep 3: Rearrange: $x^2 - 3x - 10 = 0$, which factors as $(x - 5)(x + 2) = 0$, so $x = 5$ or $x = -2$.\nStep 4: Reject $x = 5$ as extraneous. The only valid solution is $x = -2$.\nCheck $x = -2$: LHS $= \\dfrac{(-2)^2}{-2 - 5} = -\\dfrac{4}{7}$; RHS $= \\dfrac{25}{-7} + 3 = -\\dfrac{25}{7} + \\dfrac{21}{7} = -\\dfrac{4}{7}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): accepts the algebraic root $5$ without checking the domain.\n* Choice C ($-2$ and $5$): keeps both roots and never discards the extraneous one.\n* Choice D ($-5$ and $5$): solves $x^2 = 25$, ignoring the $3(x - 5)$ term entirely.\n\n**Test Day Takeaway:** Before clearing a denominator, list the excluded values. Any algebraic root equal to an excluded value is extraneous — discard it.",
  skills: ["rational-equations", "extraneous-solutions", "factoring"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A technician calibrated a seed drill by measuring the mass of seed, in kilograms, that it discharged in each of $5$ test runs. The table shows the results. If the mean mass for all $6$ test runs was $12.5$ kilograms, what was the mass, in kilograms, discharged in the sixth run?",
  diagram: {
    type: "dataTable",
    params: {
      headers: ["Run", "Mass (kg)"],
      rows: [
        ["1", "12.4"],
        ["2", "11.8"],
        ["3", "12.9"],
        ["4", "12.1"],
        ["5", "12.6"]
      ]
    }
  },
  correctAnswer: "13.2",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $13.2$.**\n\n**The Fast Way (~25s):** The six masses must total $6 \\times 12.5 = 75$. The five listed masses sum to $12.4 + 11.8 + 12.9 + 12.1 + 12.6 = 61.8$, so the sixth is $75 - 61.8 = 13.2$.\n\n**The Full Solution:**\nStep 1: Mean times count gives the total, so all six masses sum to $6 \\times 12.5 = 75$ kilograms.\nStep 2: Add the five listed masses: $12.4 + 11.8 + 12.9 + 12.1 + 12.6 = 61.8$.\nStep 3: The sixth mass is $75 - 61.8 = 13.2$ kilograms.\nCheck: $\\dfrac{61.8 + 13.2}{6} = \\dfrac{75}{6} = 12.5$. $\\checkmark$\n\n**Common Mistakes:** Multiplying the mean by $5$ instead of $6$ when finding the required total; averaging only the five listed values; a decimal slip in the long addition.\n\n**Test Day Takeaway:** To recover a missing value, multiply the mean by the count to get the required total, then subtract the sum of the values you already have.",
  skills: ["statistics", "mean", "solving-equations"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A rider accelerates down a water-park slide at a constant rate of $4.2$ meters per second squared. This rate is equivalent to how many kilometers per minute squared? (Use $1$ kilometer $= 1{,}000$ meters.)",
  choices: [
    // distractor: squares the distance conversion instead of the time conversion
    { id: "A", text: "$0.01512$" },
    // distractor: converts the time factor only once instead of squaring it
    { id: "B", text: "$0.252$" },
    { id: "C", text: "$15.12$" },
    // distractor: squares the time but never converts meters to kilometers
    { id: "D", text: "$15{,}120$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Multi-Step Unit Conversion**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Distance over time-squared means the time factor gets squared. Convert: $4.2 \\times \\dfrac{1}{1{,}000} \\times 60^2 = 4.2 \\times \\dfrac{3{,}600}{1{,}000} = 4.2 \\times 3.6 = 15.12$, choice C.\n\n**The Full Solution:**\nStep 1: The rate is $4.2\\ \\dfrac{\\text{m}}{\\text{s}^2}$. Convert meters to kilometers by multiplying by $\\dfrac{1}{1{,}000}$.\nStep 2: Convert seconds-squared to minutes-squared. Since $1\\ \\text{min} = 60\\ \\text{s}$, the seconds-to-minutes factor is squared: $60^2 = 3{,}600$.\nStep 3: Combine: $4.2 \\times \\dfrac{3{,}600}{1{,}000} = 4.2 \\times 3.6 = 15.12\\ \\dfrac{\\text{km}}{\\text{min}^2}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.01512$): squares the distance factor instead of the time factor.\n* Choice B ($0.252$): multiplies the time factor by $60$ instead of $60^2$, giving $4.2 \\times \\dfrac{60}{1{,}000}$.\n* Choice D ($15{,}120$): squares the time but never converts meters to kilometers.\n\n**Test Day Takeaway:** When a unit is squared (like $\\text{time}^2$), its conversion factor must be squared too. Convert one dimension at a time and track the exponents.",
  skills: ["unit-conversion", "rate-conversion"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, a circle has center $C$ at $(h, k)$, and points $A$ and $B$ both lie on the circle. Point $A$ has coordinates $\\left(h + 5,\\ k + \\sqrt{11}\\right)$, and $\\angle ACB$ is a right angle. What is the length of $\\overline{AB}$?",
  choices: [
    { id: "A", text: "$6\\sqrt{2}$" },
    // distractor: applies the 30-60-90 long-leg factor instead of 45-45-90
    { id: "B", text: "$6\\sqrt{3}$" },
    // distractor: uses the diameter as the chord length
    { id: "C", text: "$12$" },
    // distractor: applies the sqrt(2) factor to the diameter instead of the radius
    { id: "D", text: "$12\\sqrt{2}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Circle Radius and Isosceles Right Triangle**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The radius $CA = \\sqrt{5^2 + (\\sqrt{11})^2} = \\sqrt{25 + 11} = \\sqrt{36} = 6$. Since $CA$ and $CB$ are equal radii meeting at a right angle, $\\triangle ACB$ is a $45$-$45$-$90$ triangle, so $AB = r\\sqrt{2} = 6\\sqrt{2}$, choice A.\n\n**The Full Solution:**\nStep 1: Find the radius as the distance from $C(h, k)$ to $A(h + 5,\\ k + \\sqrt{11})$: $CA = \\sqrt{5^2 + (\\sqrt{11})^2} = \\sqrt{25 + 11} = \\sqrt{36} = 6$.\nStep 2: Both $A$ and $B$ lie on the circle, so $CA = CB = 6 = r$.\nStep 3: With $\\angle ACB = 90^\\circ$ and two equal legs, $\\triangle ACB$ is an isosceles right triangle, so the hypotenuse $\\overline{AB} = r\\sqrt{2} = 6\\sqrt{2}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($6\\sqrt{3}$): applies the $30$-$60$-$90$ factor $\\sqrt{3}$ instead of the $45$-$45$-$90$ factor $\\sqrt{2}$.\n* Choice C ($12$): uses the diameter $2r$, which equals the chord only if $A$, $C$, $B$ were collinear.\n* Choice D ($12\\sqrt{2}$): applies the $\\sqrt{2}$ factor to the diameter instead of the radius.\n\n**Test Day Takeaway:** Two equal radii meeting at a right angle form a $45$-$45$-$90$ triangle, so the connecting chord is $r\\sqrt{2}$.",
  skills: ["circle-equations", "triangles", "distance-formula"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $x^2 - 18x + k = 0$, where $k$ is a constant, has two real solutions whose positive difference is $4$. What is the value of $k$?",
  choices: [
    // distractor: reports the given difference of the roots
    { id: "A", text: "$4$" },
    // distractor: reports the sum of the roots
    { id: "B", text: "$18$" },
    // distractor: multiplies the sum by the difference: 18 x 4
    { id: "C", text: "$72$" },
    { id: "D", text: "$77$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** For $x^2 - 18x + k = 0$, the roots sum to $18$ and multiply to $k$. From $r + s = 18$ and $r - s = 4$, the roots are $11$ and $7$, so $k = 11 \\cdot 7 = 77$, choice D.\n\n**The Full Solution:**\nStep 1: By Vieta's formulas, the roots of $x^2 - 18x + k = 0$ satisfy $r + s = 18$ and $rs = k$.\nStep 2: The positive difference is $4$, so $r - s = 4$.\nStep 3: Add the sum and difference equations: $2r = 22 \\Rightarrow r = 11$. Subtract: $2s = 14 \\Rightarrow s = 7$.\nStep 4: The product is $k = rs = 11 \\cdot 7 = 77$.\nCheck: $x^2 - 18x + 77 = (x - 11)(x - 7)$; the roots $11$ and $7$ differ by $4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): reports the given difference instead of computing $k$.\n* Choice B ($18$): reports the sum of the roots rather than the product.\n* Choice C ($72$): multiplies the sum by the difference, $18 \\cdot 4$, instead of finding the roots first.\n\n**Test Day Takeaway:** For $x^2 + bx + c$, the roots sum to $-b$ and multiply to $c$. Combine the sum and difference to pin each root, then take the product.",
  skills: ["quadratic-equations", "vietas-formulas", "factoring"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the graph of the equation $x^2 + y^2 - 10x + 4y - 20 = 0$ is a circle. What is the radius of this circle?",
  choices: [
    // distractor: moves the constant with the wrong sign — 25 + 4 - 20 = 9, then root
    { id: "A", text: "$3$" },
    // distractor: takes the square root of the bare constant term
    { id: "B", text: "$\\sqrt{20}$" },
    // distractor: forgets to move the -20, using only 25 + 4
    { id: "C", text: "$\\sqrt{29}$" },
    { id: "D", text: "$7$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** Complete the square: $(x^2 - 10x) + (y^2 + 4y) = 20$ becomes $(x - 5)^2 + (y + 2)^2 = 20 + 25 + 4 = 49$. The radius is $\\sqrt{49} = 7$, choice D.\n\n**The Full Solution:**\nStep 1: Move the constant: $(x^2 - 10x) + (y^2 + 4y) = 20$.\nStep 2: Complete the square in $x$ by adding $\\left(\\dfrac{-10}{2}\\right)^2 = 25$, and in $y$ by adding $\\left(\\dfrac{4}{2}\\right)^2 = 4$. Add the same amounts to the right side.\nStep 3: $(x - 5)^2 + (y + 2)^2 = 20 + 25 + 4 = 49$.\nStep 4: In standard form $(x - h)^2 + (y - k)^2 = r^2$, the right side is $r^2 = 49$, so $r = 7$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): moves the constant with the wrong sign, computing $25 + 4 - 20 = 9$ and rooting it.\n* Choice B ($\\sqrt{20}$): takes the square root of the bare constant before completing the square.\n* Choice C ($\\sqrt{29}$): forgets to move the $-20$ across, using only $25 + 4$.\n\n**Test Day Takeaway:** To find a circle's radius from general form, complete the square in both variables and add the same constants to the right side. The right side equals $r^2$, so take its square root.",
  skills: ["circle-equations", "completing-the-square"]
}
      ]
    }
  ]
};

export default practiceTest11;
