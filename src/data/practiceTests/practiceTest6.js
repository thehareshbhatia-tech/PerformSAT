// Practice Test 6 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Official-calibration recreation (2026-09-01): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md).
// Slot metadata (id/type/difficulty/band/skills/pattern) FROZEN from the prior
// build: M1 5E/9M/8H; M2 wavy flow — easy at Q1/Q6/Q16, medium at
// Q2/Q3/Q5/Q9/Q12/Q14/Q17, hard at the rest with hard closers Q18-Q22 and the
// band ramp mean(Q1-5)=5.0 < mean(Q18-22)=7.0. All scenarios replaced fresh
// (vineyard / wind-farm / bookbindery / kite-festival / radio-tower /
// freight-yard palette — disjoint from recreated tests 1-5). Figure density
// lifted to official ~20%: M1 carries 4 diagram items (Q7 twoWayTable, Q8
// scatterplot, Q17 nestedRightTriangles, Q22 dotPlot), M2 carries 4 (Q6
// intersectingLines, Q13 dataTable, Q15 circleWithInscribedTriangle, Q16
// barChart). Numeric MC choices sorted ascending (official convention).

export const practiceTest6 = {
  id: "practice-test-6",
  title: "Practice Test 6",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
// Practice Test 6 — Math Module 1 (22 questions)
// Easy block Q1-5 keeps the frozen archetype order: multi-step-linear (Q1),
// percent-of-whole (Q2), shifted-output (Q3), reverse-percent (Q4),
// proportion (Q5). All stems, numbers, and scenarios are new.

// ===== EASY (Q1–Q5) =====

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $5x + 13 = 48$, what is the value of $x$?",
  choices: [
    { id: "A", text: "$7$" },
    // distractor: divides 48 by 5 without first subtracting the 13
    { id: "B", text: "$9.6$" },
    // distractor: adds 13 instead of subtracting, computing 61/5
    { id: "C", text: "$12.2$" },
    // distractor: stops one step early — leaves the answer at 5x = 35
    { id: "D", text: "$35$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Subtract $13$ from both sides to get $5x = 35$, then divide by $5$: $x = 7$.\n\n**The Full Solution:**\nStep 1: Start with $5x + 13 = 48$ and subtract $13$ from both sides: $5x = 35$.\nStep 2: Divide both sides by $5$: $x = \\dfrac{35}{5} = 7$.\nStep 3: Check: $5(7) + 13 = 35 + 13 = 48$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($9.6$): divides $48$ by $5$ without first clearing the $+13$.\n* Choice C ($12.2$): adds $13$ instead of subtracting, computing $\\dfrac{61}{5}$.\n* Choice D ($35$): stops at $5x = 35$ and forgets to divide by $5$.\n\n**Test Day Takeaway:** Undo operations in reverse order: clear the added constant first, then divide off the coefficient.",
  skills: ["solving-equations"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Of the $540$ cups a juice bar sold last week, $35\\%$ were small cups. The rest were large cups sold for $\\$6$ each. What was the total revenue, in dollars, from the large cups?",
  choices: [
    // distractor: stops one step early — reports the number of large cups, not the revenue
    { id: "A", text: "$\\$351$" },
    // distractor: wrong base — uses the 35% small-cup count: 0.35(540)(6)
    { id: "B", text: "$\\$1{,}134$" },
    { id: "C", text: "$\\$2{,}106$" },
    // distractor: ignores the percent split and multiplies all 540 cups by $6
    { id: "D", text: "$\\$3{,}240$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** If $35\\%$ were small, then $65\\%$ were large: $0.65 \\times 540 = 351$ cups. Revenue $= 351 \\times 6 = \\$2{,}106$.\n\n**The Full Solution:**\nStep 1: The large cups are the complement of the small cups: $100\\% - 35\\% = 65\\%$.\nStep 2: Large-cup count $= 0.65 \\times 540 = 351$.\nStep 3: At $\\$6$ each, the large-cup revenue is $351 \\times 6 = \\$2{,}106$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$351$): reports the number of large cups instead of the revenue.\n* Choice B ($\\$1{,}134$): uses the small-cup percent as the base: $0.35 \\times 540 \\times 6$.\n* Choice D ($\\$3{,}240$): multiplies all $540$ cups by $\\$6$, ignoring the split entirely.\n\n**Test Day Takeaway:** \"$x\\%$ were one kind\" means $(100 - x)\\%$ were the other — compute the complement before applying the price.",
  skills: ["percents", "word-problems"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $8w - 5 = 43$, what is the value of $8w + 9$?",
  choices: [
    // distractor: solves for the variable w = 6 instead of the shifted expression
    { id: "A", text: "$6$" },
    // distractor: stops one step early — reports the block 8w = 48 without the +9 shift
    { id: "B", text: "$48$" },
    // distractor: adds 9 to the right side 43 instead of to the block 8w
    { id: "C", text: "$52$" },
    { id: "D", text: "$57$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Add $5$ to both sides of $8w - 5 = 43$ to isolate the block: $8w = 48$. Then $8w + 9 = 48 + 9 = 57$ — no need to find $w$.\n\n**The Full Solution:**\nStep 1: Treat $8w$ as one block. From $8w - 5 = 43$, add $5$: $8w = 48$.\nStep 2: The question asks for $8w + 9$: $48 + 9 = 57$.\nStep 3: Check via $w = 6$: $8(6) + 9 = 57$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): solves for $w$ itself and reports it instead of the requested expression.\n* Choice B ($48$): finds the block $8w = 48$ but never applies the $+9$ shift.\n* Choice C ($52$): adds $9$ to $43$ instead of to the isolated block $8w$.\n\n**Test Day Takeaway:** When the target is an expression like $8w + 9$, isolate the matching block $8w$ and shift it — solving for the variable wastes time.",
  skills: ["solving-equations"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A recycling depot has collected $216$ kilograms of glass this month, which is $40\\%$ of its monthly collection target. What is the depot's monthly target, in kilograms?",
  choices: [
    // distractor: applies the percent forward — multiplies 216 by 0.40
    { id: "A", text: "$86.4$" },
    // distractor: wrong base — divides 216 by the complement 0.60
    { id: "B", text: "$360$" },
    { id: "C", text: "$540$" },
    // distractor: decimal slip — divides by 0.04 instead of 0.40
    { id: "D", text: "$5{,}400$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The $216$ kilograms is $40\\%$ of the target $T$, so $T = \\dfrac{216}{0.40} = 540$.\n\n**The Full Solution:**\nStep 1: Translate \"$216$ is $40\\%$ of the target\" into $0.40 \\cdot T = 216$.\nStep 2: Divide both sides by $0.40$: $T = \\dfrac{216}{0.40} = 540$ kilograms.\nStep 3: Check: $0.40 \\times 540 = 216$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($86.4$): multiplies $216 \\times 0.40$ instead of dividing — the inverse operation.\n* Choice B ($360$): divides by the complement $0.60$, treating $216$ as the uncollected part.\n* Choice D ($5{,}400$): divides by $0.04$ — a one-place decimal slip.\n\n**Test Day Takeaway:** To recover a whole from a known part, divide the part by the percent written as a decimal.",
  skills: ["percents", "word-problems"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A bookbindery sews signatures at a constant rate. The bindery sewed $84$ signatures during a $3$-hour shift. At this rate, how many signatures will the bindery sew during an $8$-hour shift?",
  choices: [
    // distractor: stops one step early — reports the hourly rate 28 instead of the 8-hour total
    { id: "A", text: "$28$" },
    // distractor: inverts the proportion — computes 84(3)/8
    { id: "B", text: "$31.5$" },
    // distractor: additive error — adds the 5 extra hours as one signature each
    { id: "C", text: "$89$" },
    { id: "D", text: "$224$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Unit rate $= \\dfrac{84}{3} = 28$ signatures per hour. In $8$ hours: $28 \\times 8 = 224$.\n\n**The Full Solution:**\nStep 1: A constant rate makes signatures proportional to hours: $\\dfrac{84}{3} = \\dfrac{x}{8}$.\nStep 2: Cross-multiply: $3x = 672$, so $x = 224$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($28$): reports the per-hour rate instead of the $8$-hour total.\n* Choice B ($31.5$): swaps the $3$ and the $8$ in the proportion, computing $\\dfrac{84 \\times 3}{8}$.\n* Choice C ($89$): adds the $5$ extra hours as $+1$ signature each instead of scaling by the rate.\n\n**Test Day Takeaway:** Constant-rate problems are proportions — find the unit rate, then multiply by the new amount of time.",
  skills: ["proportions", "word-problems"]
},

// ===== MEDIUM (Q6–Q14) =====

{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A circle in the $xy$-plane has the equation $(x + 5)^2 + (y - 3)^2 = 64$. What is the radius of the circle?",
  choices: [
    // distractor: reads the 5 from the center's x-coordinate instead of computing r
    { id: "A", text: "$5$" },
    { id: "B", text: "$8$" },
    // distractor: applies the inverse op — divides 64 by 2 instead of taking the square root
    { id: "C", text: "$32$" },
    // distractor: stops one step early — reports r^2 = 64 as the radius
    { id: "D", text: "$64$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Standard form is $(x - h)^2 + (y - k)^2 = r^2$, so $r^2 = 64$ and $r = 8$.\n\n**The Full Solution:**\nStep 1: Match $(x + 5)^2 + (y - 3)^2 = 64$ to $(x - h)^2 + (y - k)^2 = r^2$. The right side is $r^2$, not $r$.\nStep 2: $r^2 = 64$, so $r = \\sqrt{64} = 8$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): grabs the $5$ from the center coordinate $(-5, 3)$ instead of the radius.\n* Choice C ($32$): halves $64$ instead of taking its square root.\n* Choice D ($64$): reports $r^2$ without taking the square root.\n\n**Test Day Takeaway:** In circle standard form the right side is $r^2$ — always finish with a square root.",
  skills: ["circle-equations"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The two-way table summarizes the $180$ kites entered in a kite festival, classified by kite type and by whether the builder was a student or an adult. If a delta kite entered in the festival is selected at random, what is the probability that its builder was a student?",
  diagram: {
    type: "twoWayTable",
    params: {
      headers: ["", "Delta kite", "Box kite", "Total"],
      rows: [
        ["Student", "51", "24", "75"],
        ["Adult", "39", "66", "105"],
        ["Total", "90", "90", "180"]
      ]
    }
  },
  choices: [
    // distractor: wrong base — divides 51 by the grand total 180
    { id: "A", text: "$\\dfrac{17}{60}$" },
    // distractor: uses the marginal delta share 90/180 instead of the conditional
    { id: "B", text: "$\\dfrac{1}{2}$" },
    { id: "C", text: "$\\dfrac{17}{30}$" },
    // distractor: reverses the condition — divides 51 by the student total 75
    { id: "D", text: "$\\dfrac{17}{25}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** \"A delta kite is selected\" restricts you to the Delta column, total $90$. Student-built delta kites: $51$. So $P = \\dfrac{51}{90} = \\dfrac{17}{30}$.\n\n**The Full Solution:**\nStep 1: The condition limits the sample space to the Delta kite column, which contains $90$ kites.\nStep 2: The favorable outcomes are the student-built kites in that column: $51$.\nStep 3: $P = \\dfrac{51}{90} = \\dfrac{17}{30}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{17}{60}$): divides $51$ by the grand total $180$ instead of the delta total.\n* Choice B ($\\dfrac{1}{2}$): reports the marginal share of delta kites, $\\dfrac{90}{180}$, ignoring the builder condition.\n* Choice D ($\\dfrac{17}{25}$): reverses the condition, computing $\\dfrac{51}{75}$ — the probability a STUDENT kite is a delta.\n\n**Test Day Takeaway:** The given condition names the row or column that becomes your denominator; the matching cell is the numerator.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The scatterplot shows the wind speed $x$, in meters per second, and the power output $y$, in kilowatts, of a wind turbine during $10$ test intervals, along with a line of best fit. The equation of the line of best fit is $y = 3.2x + 14$. According to the model, what is the predicted power output, in kilowatts, at a wind speed of $15$ meters per second?",
  diagram: { type: "scatterplot", params: {
    points: [[4,26],[6,33],[7,38],[9,42],[10,47],[12,52],[13,55],[16,66],[17,68],[19,75]],
    xMin: 0, xMax: 20, yMin: 0, yMax: 80,
    xGridStep: 2, yGridStep: 5, xLabelStep: 4, yLabelStep: 10,
    xLabel: "Wind speed (m/s)", yLabel: "Power output (kW)",
    bestFitLine: { slope: 3.2, intercept: 14 },
  } },
  correctAnswer: "62",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**The correct answer is $62$.**\n\n**The Fast Way (~10s):** Substitute $x = 15$ into $y = 3.2x + 14$: $y = 3.2(15) + 14 = 48 + 14 = 62$.\n\n**The Full Solution:**\nStep 1: \"Predicted\" means use the line of best fit, not an individual data point.\nStep 2: $y = 3.2(15) + 14 = 48 + 14 = 62$ kilowatts. The plot confirms it: at $x = 15$ the line passes between the points at $x = 13$ and $x = 16$. $\\checkmark$\n\n**Common Mistakes:** Reporting $48$ by forgetting the intercept $14$; reading a nearby data point instead of the line; misreading the model as $y = 3.2 + 14x$ to get $213.2$.\n\n**Test Day Takeaway:** A line of best fit is just a linear function — substitute the input and keep both the slope term and the intercept.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, line $\\ell$ passes through the origin and has a slope of $\\dfrac{2}{5}$. Which of the following points lies on line $\\ell$?",
  choices: [
    // distractor: reads the slope numbers as a coordinate pair (x, y) = (2, 5)
    { id: "A", text: "$(2, 5)$" },
    { id: "B", text: "$(10, 4)$" },
    // distractor: uses the flipped slope 5/2, since 5/2 of 4 is 10
    { id: "C", text: "$(4, 10)$" },
    // distractor: applies the flipped slope 5/2 at x = 10
    { id: "D", text: "$(10, 25)$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Points on a Line**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Through the origin with slope $\\dfrac{2}{5}$ means $y = \\dfrac{2}{5}x$. Test $(10, 4)$: $\\dfrac{2}{5}(10) = 4$. $\\checkmark$\n\n**The Full Solution:**\nStep 1: A line through the origin with slope $m$ has equation $y = mx$, so here $y = \\dfrac{2}{5}x$.\nStep 2: Check each point against $y = \\dfrac{2}{5}x$:\n* $(2, 5)$: $\\dfrac{2}{5}(2) = 0.8 \\neq 5$.\n* $(10, 4)$: $\\dfrac{2}{5}(10) = 4$. $\\checkmark$\n* $(4, 10)$: $\\dfrac{2}{5}(4) = 1.6 \\neq 10$.\n* $(10, 25)$: $\\dfrac{2}{5}(10) = 4 \\neq 25$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(2, 5)$): turns the slope fraction into a point — but slope is a ratio of changes, not a location.\n* Choice C ($(4, 10)$): satisfies the FLIPPED slope $\\dfrac{5}{2}$.\n* Choice D ($(10, 25)$): also uses the flipped slope $\\dfrac{5}{2}$ at $x = 10$.\n\n**Test Day Takeaway:** A point lies on $y = mx$ exactly when $\\dfrac{y}{x}$ equals the slope — keep rise over run in that order.",
  skills: ["slope", "coordinate-geometry", "linear-functions"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The function $f$ is defined by $f(x) = 650(1.2)^x$. What is the value of $f(0) - 50$?",
  correctAnswer: "600",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $600$.**\n\n**The Fast Way (~10s):** Any nonzero base to the power $0$ is $1$, so $f(0) = 650 \\cdot 1 = 650$. Then $f(0) - 50 = 600$.\n\n**The Full Solution:**\nStep 1: $f(0) = 650 \\cdot (1.2)^0 = 650 \\cdot 1 = 650$.\nStep 2: $f(0) - 50 = 650 - 50 = 600$.\n\n**Common Mistakes:** Treating $(1.2)^0$ as $0$ and answering $-50$; evaluating $f(1) = 650(1.2) = 780$ and subtracting $50$ to get $730$; stopping at $650$ and skipping the $-50$ shift.\n\n**Test Day Takeaway:** In $a \\cdot b^x$, the value at $x = 0$ is always $a$ — then finish the arithmetic the question actually asks for.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The function $f$ is defined by $f(x) = 3x^2 + 4$. The function $g$ is defined by $g(x) = f(x + 2)$. What is the value of $g(1)$?",
  correctAnswer: "31",
  explanation: "**SAT Pattern: Function Transformation**\n\n**The correct answer is $31$.**\n\n**The Fast Way (~15s):** $g(1) = f(1 + 2) = f(3) = 3(3)^2 + 4 = 27 + 4 = 31$.\n\n**The Full Solution:**\nStep 1: By definition $g(x) = f(x + 2)$, so $g(1) = f(1 + 2) = f(3)$.\nStep 2: Evaluate $f(3) = 3(3)^2 + 4 = 3 \\cdot 9 + 4 = 31$.\n\n**Common Mistakes:** Computing $f(1) = 7$ and ignoring the shift; shifting the wrong way with $f(1 - 2) = f(-1) = 7$; computing $3 \\cdot 3 + 4 = 13$ by not squaring.\n\n**Test Day Takeaway:** $g(x) = f(x + h)$ means replace the input with $x + h$ BEFORE evaluating $f$ — do the inside first.",
  skills: ["function-interpretation", "function-transformation"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "An investment of $\\$3{,}500$ earns $4\\%$ interest compounded annually. Which expression represents the value of the investment, in dollars, after $t$ years?",
  choices: [
    // distractor: applies the inverse — uses (1 - 0.04) = 0.96, modeling decay
    { id: "A", text: "$3500(0.96)^t$" },
    // distractor: decimal slip — writes 4% as 0.4, giving a base of 1.4
    { id: "B", text: "$3500(1.4)^t$" },
    // distractor: models simple interest as linear growth of $140 per year
    { id: "C", text: "$3500 + 140t$" },
    { id: "D", text: "$3500(1.04)^t$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Compound Interest**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Growing $4\\%$ per year means multiplying by $1.04$ each year, so the value is $3500(1.04)^t$.\n\n**The Full Solution:**\nStep 1: Compound growth has the form $A = P(1 + r)^t$ with principal $P = 3500$ and rate $r = 0.04$.\nStep 2: Substitute: $A = 3500(1 + 0.04)^t = 3500(1.04)^t$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3500(0.96)^t$): subtracts the rate from $1$, which models a $4\\%$ annual DECAY.\n* Choice B ($3500(1.4)^t$): writes $4\\%$ as $0.4$ instead of $0.04$ — a $40\\%$ rate.\n* Choice C ($3500 + 140t$): adds a flat $\\$140$ each year, which is simple (linear) interest, not compounding.\n\n**Test Day Takeaway:** Compound growth multiplies by $(1 + r)$ each period — convert the percent to a decimal and add it to $1$.",
  skills: ["exponential-functions"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A line in the $xy$-plane passes through the points $(-3, 14)$ and $(2, -6)$. What is the $y$-intercept of the line?",
  choices: [
    // distractor: takes the y-value of the given point (2, -6) as the intercept
    { id: "A", text: "$-6$" },
    // distractor: stops one step early — reports the slope instead of the intercept
    { id: "B", text: "$-4$" },
    { id: "C", text: "$2$" },
    // distractor: sign slip on -4(-3), computing 14 + 12 instead of 14 - 12
    { id: "D", text: "$26$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Slope $= \\dfrac{-6 - 14}{2 - (-3)} = \\dfrac{-20}{5} = -4$. Plug $(2, -6)$ into $y = -4x + b$: $-6 = -8 + b$, so $b = 2$.\n\n**The Full Solution:**\nStep 1: Compute the slope: $m = \\dfrac{-6 - 14}{2 - (-3)} = \\dfrac{-20}{5} = -4$.\nStep 2: Substitute one point into $y = -4x + b$. Using $(2, -6)$: $-6 = -4(2) + b$, so $b = 2$.\nStep 3: Check the other point: at $x = -3$, $y = -4(-3) + 2 = 12 + 2 = 14$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): uses a given point's $y$-value as the intercept — only valid if that point sits on the $y$-axis.\n* Choice B ($-4$): reports the slope, one step short of the intercept.\n* Choice D ($26$): botches the sign on $-4(-3)$, computing $14 + 12$ when checking with the first point.\n\n**Test Day Takeaway:** Two points give the slope first; then one substitution into $y = mx + b$ pins down the intercept.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The system of equations is:\n\n$4x + 6y = 15$\n$4x - 6y = 33$\n\nWhat is the value of $y$?",
  choices: [
    // distractor: stops one step early — reports 12y = -18 without dividing
    { id: "A", text: "$-18$" },
    { id: "B", text: "$-\\dfrac{3}{2}$" },
    // distractor: subtracts in the wrong order, dropping the negative sign
    { id: "C", text: "$\\dfrac{3}{2}$" },
    // distractor: adds the equations and solves for x instead of y
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The $x$-terms match, so subtract the second equation from the first: $12y = -18$, giving $y = -\\dfrac{3}{2}$.\n\n**The Full Solution:**\nStep 1: Both equations contain $4x$, so subtracting eliminates $x$ in one move.\nStep 2: $(4x + 6y) - (4x - 6y) = 15 - 33 \\Rightarrow 12y = -18$.\nStep 3: Divide: $y = -\\dfrac{18}{12} = -\\dfrac{3}{2}$.\nStep 4: Check with $x = 6$ (from adding the equations): $4(6) + 6\\left(-\\dfrac{3}{2}\\right) = 24 - 9 = 15$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-18$): stops at $12y = -18$ without dividing by $12$.\n* Choice C ($\\dfrac{3}{2}$): subtracts $33 - 15$ on the right while subtracting the other direction on the left — a sign slip.\n* Choice D ($6$): adds the equations, which solves for $x$, and reports that instead.\n\n**Test Day Takeaway:** When the question asks for one variable, add or subtract the equations to kill the other variable in a single step — and finish the division.",
  skills: ["systems-of-equations", "solving-equations"]
},

// ===== HARD (Q15–Q22) =====

{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $9^{3x} \\cdot 27^{x - 2} = 3^{21}$, what is the value of $x$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~30s):** Rewrite everything in base $3$: $9^{3x} = 3^{6x}$ and $27^{x-2} = 3^{3x-6}$. Multiplying adds exponents: $3^{9x - 6} = 3^{21}$, so $9x - 6 = 21$, giving $9x = 27$ and $x = 3$.\n\n**The Full Solution:**\nStep 1: Convert to base $3$. Since $9 = 3^2$, $9^{3x} = (3^2)^{3x} = 3^{6x}$. Since $27 = 3^3$, $27^{x-2} = (3^3)^{x-2} = 3^{3x-6}$.\nStep 2: Multiply by adding exponents: $3^{6x} \\cdot 3^{3x-6} = 3^{9x-6}$.\nStep 3: Equal bases mean equal exponents: $9x - 6 = 21 \\Rightarrow 9x = 27 \\Rightarrow x = 3$.\nStep 4: Check: $9^{9} \\cdot 27^{1} = 3^{18} \\cdot 3^{3} = 3^{21}$. $\\checkmark$\n\n**Common Mistakes:** Treating $27$ as $3^2$ instead of $3^3$; failing to distribute the exponent, writing $3x - 2$ instead of $3x - 6$; multiplying the exponents across the product instead of adding them.\n\n**Test Day Takeaway:** Push every base to one common base, distribute exponents fully, add exponents across multiplication, then match powers.",
  skills: ["exponent-rules", "exponential-functions"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, a line with slope $2$ is tangent to the circle $(x - 2)^2 + (y - 3)^2 = 5$. Which of the following could be the $y$-intercept of this tangent line?",
  choices: [
    { id: "A", text: "$-6$" },
    // distractor: sets the distance to 0, which puts the line through the center
    { id: "B", text: "$-1$" },
    // distractor: stops one step early — reports the radius as if it were the intercept
    { id: "C", text: "$\\sqrt{5}$" },
    // distractor: grabs the center's y-coordinate without using the distance condition
    { id: "D", text: "$3$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Write the line as $2x - y + c = 0$. Its distance from the center $(2, 3)$ is $\\dfrac{|2(2) - 3 + c|}{\\sqrt{5}} = \\dfrac{|c + 1|}{\\sqrt{5}}$. Tangency means this equals the radius $\\sqrt{5}$: $|c + 1| = 5$, so $c = 4$ or $c = -6$. Only $-6$ is listed.\n\n**The Full Solution:**\nStep 1: A line of slope $2$ with $y$-intercept $c$ is $y = 2x + c$, or $2x - y + c = 0$.\nStep 2: The circle has center $(2, 3)$ and radius $\\sqrt{5}$.\nStep 3: Distance from the center to the line: $d = \\dfrac{|2(2) - 1(3) + c|}{\\sqrt{2^2 + (-1)^2}} = \\dfrac{|c + 1|}{\\sqrt{5}}$.\nStep 4: Tangency requires $d = r$: $\\dfrac{|c + 1|}{\\sqrt{5}} = \\sqrt{5} \\Rightarrow |c + 1| = 5 \\Rightarrow c = 4$ or $c = -6$. Choice A gives $-6$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-1$): solves $|c + 1| = 0$, which runs the line through the CENTER — a secant, not a tangent.\n* Choice C ($\\sqrt{5}$): reports the radius itself as the intercept.\n* Choice D ($3$): copies the center's $y$-coordinate without any distance work.\n\n**Test Day Takeaway:** A line is tangent to a circle exactly when its distance from the center equals the radius: $d = \\dfrac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}$.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the figure, point $B$ lies on segment $AD$, point $C$ lies on segment $AE$, and segment $BC$ is parallel to segment $DE$. If $AC = 8$, $CE = 12$, and $AB = 10$, what is the length of segment $BD$?",
  diagram: {
    type: "nestedRightTriangles",
    params: {
      labels: { A: "A", B: "B", C: "C", D: "D", E: "E" },
      sideLabels: { AB: "10", AC: "8", CE: "12" },
      figureNote: true
    }
  },
  correctAnswer: "15",
  explanation: "**SAT Pattern: Similar Triangles (Side Splitter Theorem)**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~15s):** $\\overline{BC} \\parallel \\overline{DE}$ splits the sides proportionally: $\\dfrac{AB}{BD} = \\dfrac{AC}{CE}$, so $\\dfrac{10}{BD} = \\dfrac{8}{12}$ and $BD = \\dfrac{10 \\cdot 12}{8} = 15$.\n\n**The Full Solution:**\nStep 1: A segment parallel to one side of a triangle cuts the other two sides in the same ratio (side-splitter theorem): $\\dfrac{AB}{BD} = \\dfrac{AC}{CE}$.\nStep 2: Substitute: $\\dfrac{10}{BD} = \\dfrac{8}{12}$.\nStep 3: Cross-multiply: $8 \\cdot BD = 120$, so $BD = 15$.\nStep 4: Check the ratios: $\\dfrac{10}{15} = \\dfrac{2}{3}$ and $\\dfrac{8}{12} = \\dfrac{2}{3}$. $\\checkmark$\n\n**Common Mistakes:** Mismatching the ratio shapes by pairing $\\dfrac{AB}{AD}$ with $\\dfrac{AC}{CE}$ (whole side against a part); reporting $AD = AB + BD = 25$ instead of $BD$ itself.\n\n**Test Day Takeaway:** Side-splitter ratios must have the same shape on both sides — part-to-part with part-to-part — before you cross-multiply.",
  skills: ["similar-triangles", "ratios"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation of a circle in the $xy$-plane is $x^2 + y^2 + 8x - 14y + 40 = 0$. What are the coordinates of the center and the radius of the circle?",
  choices: [
    // distractor: flips the signs read from the completed squares
    { id: "A", text: "Center $(4, -7)$, radius $5$" },
    { id: "B", text: "Center $(-4, 7)$, radius $5$" },
    // distractor: stops one step early — reports r^2 = 25 as the radius
    { id: "C", text: "Center $(-4, 7)$, radius $25$" },
    // distractor: reads the raw coefficients 8 and -14 as the center
    { id: "D", text: "Center $(8, -14)$, radius $\\sqrt{40}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Complete the square: $(x^2 + 8x + 16) + (y^2 - 14y + 49) = -40 + 16 + 49$, so $(x + 4)^2 + (y - 7)^2 = 25$. Center $(-4, 7)$, radius $5$.\n\n**The Full Solution:**\nStep 1: Group and move the constant: $(x^2 + 8x) + (y^2 - 14y) = -40$.\nStep 2: Half of $8$ is $4$, squared is $16$; half of $-14$ is $-7$, squared is $49$. Add both to each side.\nStep 3: $(x + 4)^2 + (y - 7)^2 = -40 + 16 + 49 = 25$.\nStep 4: Read off center $(-4, 7)$ and radius $\\sqrt{25} = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(4, -7)$, radius $5$): flips the center's signs — $(x + 4)^2$ means $h = -4$, not $4$.\n* Choice C ($(-4, 7)$, radius $25$): leaves the radius as $r^2$ without the square root.\n* Choice D ($(8, -14)$, radius $\\sqrt{40}$): reads the raw equation coefficients as the center and constant as $r^2$.\n\n**Test Day Takeaway:** General form hides the center — complete the square for both variables, then square-root the right side.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, line $j$ passes through the points $(1, -2)$ and $(4, 7)$. Line $k$ is perpendicular to line $j$ and passes through the point $(-6, 4)$. What is the $x$-coordinate of the point where line $k$ crosses the $x$-axis?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~30s):** Slope of $j$ is $\\dfrac{7 - (-2)}{4 - 1} = 3$, so $k$ has slope $-\\dfrac{1}{3}$. From $(-6, 4)$: $y - 4 = -\\dfrac{1}{3}(x + 6)$. Set $y = 0$: $-4 = -\\dfrac{1}{3}(x + 6) \\Rightarrow x + 6 = 12 \\Rightarrow x = 6$.\n\n**The Full Solution:**\nStep 1: Slope of $j$: $m_j = \\dfrac{7 - (-2)}{4 - 1} = \\dfrac{9}{3} = 3$.\nStep 2: Perpendicular slope is the negative reciprocal: $m_k = -\\dfrac{1}{3}$.\nStep 3: Line $k$ through $(-6, 4)$: $y - 4 = -\\dfrac{1}{3}(x + 6)$.\nStep 4: The $x$-axis crossing has $y = 0$: $-4 = -\\dfrac{1}{3}(x + 6)$, so $x + 6 = 12$ and $x = 6$.\nStep 5: Check: at $x = 6$, $y = 4 - \\dfrac{1}{3}(12) = 0$. $\\checkmark$\n\n**Common Mistakes:** Reusing slope $3$ for line $k$ (that is parallel, not perpendicular); using $\\dfrac{1}{3}$ and forgetting the sign flip; setting $x = 0$, which finds the $y$-intercept instead.\n\n**Test Day Takeaway:** Perpendicular slopes flip the fraction AND the sign; hitting the $x$-axis means setting $y = 0$.",
  skills: ["slope", "coordinate-geometry", "linear-functions"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $g$ is defined by $g(x) = 4 \\cdot 5^x - 500$. For what value of $x$ does $g(x) = 0$?",
  choices: [
    // distractor: tries x = 0, but g(0) = 4 - 500 is not 0
    { id: "A", text: "$0$" },
    // distractor: solves 4 * 5^x = 100 instead of 500, giving 5^x = 25
    { id: "B", text: "$2$" },
    { id: "C", text: "$3$" },
    // distractor: uses the base 5 itself as the answer
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Solving Exponential Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Set $4 \\cdot 5^x - 500 = 0$, so $4 \\cdot 5^x = 500$ and $5^x = 125 = 5^3$, giving $x = 3$.\n\n**The Full Solution:**\nStep 1: $g(x) = 0 \\Rightarrow 4 \\cdot 5^x - 500 = 0$.\nStep 2: Isolate the power: $4 \\cdot 5^x = 500 \\Rightarrow 5^x = 125$.\nStep 3: Match bases: $125 = 5^3$, so $x = 3$.\nStep 4: Check: $4 \\cdot 125 - 500 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): $g(0) = 4 - 500 = -496 \\neq 0$.\n* Choice B ($2$): divides $500$ by $4$ incorrectly (as if the target were $100$), landing on $5^x = 25$.\n* Choice D ($5$): confuses the base $5$ with the exponent being solved for.\n\n**Test Day Takeaway:** Isolate the exponential term completely — divide off its coefficient — before rewriting the other side as a power of the same base.",
  skills: ["exponential-functions", "solving-equations"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The parabola defined by $y = a(x + 3)^2 + k$ has its vertex at $(-3, 8)$ and passes through the point $(1, -24)$. What is the value of $a + k$?",
  choices: [
    // distractor: sign error on k — computes -2 + (-8)
    { id: "A", text: "$-10$" },
    // distractor: stops one step early — reports a = -2 alone
    { id: "B", text: "$-2$" },
    { id: "C", text: "$6$" },
    // distractor: drops the sign of a, computing 2 + 8
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The vertex $(-3, 8)$ gives $k = 8$ directly. Plug $(1, -24)$ into $y = a(x + 3)^2 + 8$: $-24 = 16a + 8 \\Rightarrow a = -2$. So $a + k = -2 + 8 = 6$.\n\n**The Full Solution:**\nStep 1: In $y = a(x - h)^2 + k$ the vertex is $(h, k)$. Here the form $(x + 3)^2$ means $h = -3$, and the vertex $(-3, 8)$ gives $k = 8$.\nStep 2: Use the point $(1, -24)$: $-24 = a(1 + 3)^2 + 8 = 16a + 8$.\nStep 3: Solve: $16a = -32 \\Rightarrow a = -2$.\nStep 4: Combine: $a + k = -2 + 8 = 6$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-10$): flips the sign of $k$, computing $-2 + (-8)$.\n* Choice B ($-2$): stops at $a$ and never adds $k$.\n* Choice D ($10$): drops the sign of $a$, computing $2 + 8$.\n\n**Test Day Takeaway:** Vertex form hands you $k$ for free; spend the extra point only on $a$, then combine exactly what the question asks.",
  skills: ["vertex-form", "quadratic-equations", "function-interpretation"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The dot plot shows the number of wraps a food truck sold on each of $10$ days. After an eleventh day, the mean number of wraps sold per day over all $11$ days was $61$. How many wraps did the food truck sell on the eleventh day?",
  diagram: { type: "dotPlot", params: {
    data: [
      { value: 58, count: 1 },
      { value: 60, count: 2 },
      { value: 61, count: 2 },
      { value: 62, count: 1 },
      { value: 63, count: 2 },
      { value: 65, count: 2 }
    ],
    xMin: 56, xMax: 67,
    xLabel: "Wraps sold per day"
  } },
  correctAnswer: "53",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $53$.**\n\n**The Fast Way (~30s):** All $11$ days must total $11 \\cdot 61 = 671$ wraps. The dot plot's $10$ days total $618$, so the eleventh day sold $671 - 618 = 53$.\n\n**The Full Solution:**\nStep 1: Mean $= \\dfrac{\\text{sum}}{\\text{count}}$, so the $11$-day total is $11 \\cdot 61 = 671$.\nStep 2: Read the dot plot and sum the $10$ values: $58 + 2(60) + 2(61) + 62 + 2(63) + 2(65) = 58 + 120 + 122 + 62 + 126 + 130 = 618$.\nStep 3: Eleventh-day sales $= 671 - 618 = 53$.\nStep 4: Check: $\\dfrac{618 + 53}{11} = \\dfrac{671}{11} = 61$. $\\checkmark$\n\n**Common Mistakes:** Using $10 \\cdot 61 = 610$ as the required total instead of $11 \\cdot 61$; counting each dot-plot value once instead of once per dot; answering $61$ on the assumption the new day must match the mean.\n\n**Test Day Takeaway:** Missing-value mean problems are sum problems: required total minus known total — and a dot plot's sum weights each value by its number of dots.",
  skills: ["statistics", "mean"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 6 — Math Module 2 (22 questions) — hard track
// Frozen wavy flow: easy 3 [1,6,16] / medium 7 [2,3,5,9,12,14,17] /
// hard 12 [4,7,8,10,11,13,15,18,19,20,21,22]. Bands: Q1 band 3 opener,
// band-2 breathers Q6 (vertical angles figure) and Q16 (range bar graph),
// medium band 5-6, hard band 7 with Q9/Q11 at band 6.
// Band ramp holds: mean(Q1-5)=5.0 < mean(Q18-22)=7.0.
// Q1-5 warm-up rule: every opener is 2+ steps or carries a trap
// (ratio-sum probability, no-solution coefficient, percent-of-ORIGINAL
// linear-vs-exponential trap, quadratic-linear greatest root, vertex swap).

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A stained-glass studio stores sheets of amber, cobalt, and clear glass in the ratio $2:3:7$ by count. If one sheet is selected at random, what is the probability that it is cobalt?",
  choices: [
    { id: "A", text: "$\\dfrac{1}{4}$" },
    // distractor: uses one-of-three-types reasoning, ignoring the ratio weights
    { id: "B", text: "$\\dfrac{1}{3}$" },
    // distractor: compares cobalt to clear (3 to 7) instead of cobalt to the total
    { id: "C", text: "$\\dfrac{3}{7}$" },
    // distractor: reports the clear-glass probability 7/12
    { id: "D", text: "$\\dfrac{7}{12}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Simple Probability**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The ratio parts total $2 + 3 + 7 = 12$, and cobalt is $3$ of them: $P = \\dfrac{3}{12} = \\dfrac{1}{4}$.\n\n**The Full Solution:**\nStep 1: A $2:3:7$ ratio means the sheets come in groups of $2 + 3 + 7 = 12$, with $3$ cobalt sheets per group.\nStep 2: The probability equals the cobalt fraction of the whole: $\\dfrac{3}{12} = \\dfrac{1}{4}$. (The actual number of sheets cancels out — only the ratio matters.)\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\dfrac{1}{3}$): treats the three COLORS as equally likely, ignoring that the ratio weights them differently.\n* Choice C ($\\dfrac{3}{7}$): compares cobalt to clear instead of cobalt to the whole collection.\n* Choice D ($\\dfrac{7}{12}$): computes the probability for clear glass, the wrong color.\n\n**Test Day Takeaway:** With a ratio, the probability denominator is the SUM of the parts — convert ratio parts to a fraction of the total first.",
  skills: ["probability", "ratios"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$$5x - 30kx = 45$$\n\nIn the given equation, $k$ is a constant. If the equation has no solution, what is the value of $k$?",
  choices: [
    // distractor: sign error — solves 30k = -5
    { id: "A", text: "$-\\dfrac{1}{6}$" },
    // distractor: picks k = 0, but that leaves 5x = 45, which has a solution
    { id: "B", text: "$0$" },
    { id: "C", text: "$\\dfrac{1}{6}$" },
    // distractor: inverts the fraction — computes 30/5 instead of 5/30
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Factor the left side: $(5 - 30k)x = 45$. A linear equation has no solution only when the $x$-coefficient is $0$ while the constant is not: $5 - 30k = 0 \\Rightarrow k = \\dfrac{5}{30} = \\dfrac{1}{6}$.\n\n**The Full Solution:**\nStep 1: Combine the $x$-terms: $5x - 30kx = (5 - 30k)x$, so the equation reads $(5 - 30k)x = 45$.\nStep 2: If $5 - 30k \\neq 0$, dividing gives exactly one solution. No solution requires the coefficient to vanish while the right side stays nonzero.\nStep 3: $5 - 30k = 0 \\Rightarrow k = \\dfrac{1}{6}$.\nStep 4: At $k = \\dfrac{1}{6}$ the equation becomes $0 \\cdot x = 45$, which is false for every $x$ — no solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\dfrac{1}{6}$): solves $30k = -5$, a sign slip.\n* Choice B ($0$): removes the $k$-term, but $5x = 45$ still solves to $x = 9$.\n* Choice D ($6$): inverts the fraction, computing $\\dfrac{30}{5}$.\n\n**Test Day Takeaway:** For $(\\text{coefficient})x = (\\text{nonzero constant})$ to have no solution, set the coefficient to zero — then confirm the constant really is nonzero.",
  skills: ["linear-equations", "solving-equations"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A café's espresso machine loses value each year by $4\\%$ of its original purchase price. Which type of function best models the machine's value as a function of the number of years since it was purchased?",
  choices: [
    // distractor: the percent language lures toward exponential decay, but the base is the ORIGINAL value
    { id: "A", text: "Decreasing exponential" },
    { id: "B", text: "Decreasing linear" },
    // distractor: wrong direction — the value falls, so no increasing model fits
    { id: "C", text: "Increasing exponential" },
    // distractor: wrong direction and treats the change as additive growth
    { id: "D", text: "Increasing linear" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Linear Function Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"$4\\%$ of the ORIGINAL price\" is the same dollar amount every year — a constant yearly drop. Constant change per year is linear, and the value falls: decreasing linear.\n\n**The Full Solution:**\nStep 1: Let the purchase price be $P$. Each year the machine loses $0.04P$ — a FIXED amount, because it is computed from the original price, not the current value.\nStep 2: The value after $t$ years is $V(t) = P - 0.04Pt$, a linear function with slope $-0.04P$.\nStep 3: Exponential decay would require losing $4\\%$ of the CURRENT value each year, making each year's drop smaller than the last. That is not what the model says.\n\n**Why the wrong answers are tempting:**\n* Choice A: the percent wording suggests exponential decay — but percent OF THE ORIGINAL is a constant amount, which is linear.\n* Choice C: wrong on both counts — the value decreases.\n* Choice D: right type only if the value grew by a constant amount, but it shrinks.\n\n**Test Day Takeaway:** Percent of the ORIGINAL each period $\\Rightarrow$ linear; percent of the CURRENT value each period $\\Rightarrow$ exponential. Find the base of the percent before choosing the model.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$$y = x - 2$$\n$$y = x^2 - 9x + 14$$\n\nA solution to the given system of equations is $(x, y)$. What is the greatest possible value of $x$?",
  choices: [
    // distractor: sign-flips the line's constant and reports it
    { id: "A", text: "$-2$" },
    // distractor: selects the lesser of the two roots
    { id: "B", text: "$2$" },
    { id: "C", text: "$8$" },
    // distractor: reports the constant term of the quadratic
    { id: "D", text: "$14$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Quadratic-Linear System**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Set the expressions for $y$ equal: $x - 2 = x^2 - 9x + 14 \\Rightarrow x^2 - 10x + 16 = 0 \\Rightarrow (x - 2)(x - 8) = 0$. Roots are $2$ and $8$; the greatest is $8$.\n\n**The Full Solution:**\nStep 1: Substitute the line into the parabola: $x - 2 = x^2 - 9x + 14$.\nStep 2: Move everything to one side: $0 = x^2 - 10x + 16$.\nStep 3: Factor: $(x - 2)(x - 8) = 0$, so $x = 2$ or $x = 8$. The greatest value is $8$.\nStep 4: Check $x = 8$: line gives $y = 6$; parabola gives $64 - 72 + 14 = 6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): reports the line's constant with a sign flip.\n* Choice B ($2$): finds both roots but picks the LESSER one.\n* Choice D ($14$): grabs the quadratic's constant term.\n\n**Test Day Takeaway:** Line-parabola systems collapse to one quadratic — solve it, then re-read whether the question wants the greatest root, the least, or a $y$-value.",
  skills: ["systems-of-equations", "quadratic-equations", "factoring"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The height, in meters, of a glider above a field $t$ seconds after it is released from a launch line is modeled by $H(t) = -2(t - 9)^2 + 48$. Which of the following best interprets the vertex of the graph of $y = H(t)$ in the $ty$-plane?",
  choices: [
    // distractor: swaps the vertex coordinates
    { id: "A", text: "The glider reaches an estimated maximum height of $9$ meters, $48$ seconds after release." },
    // distractor: calls the peak a minimum despite the negative leading coefficient
    { id: "B", text: "The glider reaches an estimated minimum height of $48$ meters, $9$ seconds after release." },
    // distractor: uses the leading coefficient's magnitude as the time
    { id: "C", text: "The glider reaches an estimated maximum height of $48$ meters, $2$ seconds after release." },
    { id: "D", text: "The glider reaches an estimated maximum height of $48$ meters, $9$ seconds after release." }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Quadratic Vertex Form Application**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Vertex form $H(t) = -2(t - 9)^2 + 48$ has vertex $(9, 48)$. Since $a = -2 < 0$, that vertex is a maximum: height $48$ meters at $t = 9$ seconds.\n\n**The Full Solution:**\nStep 1: In $H(t) = a(t - h)^2 + k$ the vertex is $(h, k)$: here $h = 9$ (a time) and $k = 48$ (a height).\nStep 2: The leading coefficient $-2$ is negative, so the parabola opens downward and the vertex is the highest point.\nStep 3: Confirm: $H(9) = 48$, while $H(8) = H(10) = 46$ — both neighbors are lower. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: swaps the coordinates, reading a $9$-meter height at $48$ seconds.\n* Choice B: keeps the right numbers but calls the peak a minimum — impossible with $a < 0$.\n* Choice C: uses the magnitude of $a$ as the time.\n\n**Test Day Takeaway:** In $a(t - h)^2 + k$, the vertex is $(h, k)$, with $h$ in input units and $k$ in output units; the sign of $a$ decides max versus min.",
  skills: ["function-interpretation", "quadratic-equations"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "easy",
  band: 2,
  question: "In the figure, line $m$ and line $n$ intersect. What is the value of $w$?",
  diagram: { type: "intersectingLines", params: { angles: ["124°", "", "w°", ""], lineLabels: ["m", "n"], figureNote: true } },
  correctAnswer: "124",
  explanation: "**SAT Pattern: Vertical Angles**\n\n**The correct answer is $124$.**\n\n**The Fast Way (~5s):** The $w^\\circ$ angle and the $124^\\circ$ angle sit directly opposite each other at the intersection — vertical angles — so $w = 124$.\n\n**The Full Solution:**\nStep 1: Two intersecting lines form two pairs of vertical (opposite) angles, and the angles in each pair are equal.\nStep 2: The $w^\\circ$ angle is vertical to the $124^\\circ$ angle, so $w = 124$. The other two angles each measure $180^\\circ - 124^\\circ = 56^\\circ$.\n\n**Common Mistakes:** Reporting $56$ by treating the pair as supplementary (adjacent) instead of vertical; computing $90 - 124$ as if the angles were complementary.\n\n**Test Day Takeaway:** Opposite angles at an intersection are equal; only ADJACENT angles on a line sum to $180^\\circ$.",
  skills: ["angles", "geometry"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, line $p$ has the equation $3x + 4y = 12$. Line $q$ is perpendicular to line $p$ and passes through the point $(6, -2)$. What is the $y$-intercept of line $q$?",
  correctAnswer: "-10",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**The correct answer is $-10$.**\n\n**The Fast Way (~30s):** Line $p$ has slope $-\\dfrac{3}{4}$, so $q$ has slope $\\dfrac{4}{3}$. Through $(6, -2)$: $y + 2 = \\dfrac{4}{3}(x - 6)$. At $x = 0$: $y + 2 = -8$, so $y = -10$.\n\n**The Full Solution:**\nStep 1: Rewrite $p$: $4y = -3x + 12 \\Rightarrow y = -\\dfrac{3}{4}x + 3$, so $p$ has slope $-\\dfrac{3}{4}$.\nStep 2: The perpendicular slope is the negative reciprocal: $m_q = \\dfrac{4}{3}$.\nStep 3: Point-slope through $(6, -2)$: $y - (-2) = \\dfrac{4}{3}(x - 6)$.\nStep 4: For the $y$-intercept set $x = 0$: $y + 2 = \\dfrac{4}{3}(-6) = -8$, so $y = -10$.\n\n**Common Mistakes:** Keeping slope $-\\dfrac{3}{4}$ for $q$ (parallel, not perpendicular); using $-\\dfrac{4}{3}$ by flipping the fraction without switching the sign; setting $y = 0$, which finds the $x$-intercept instead.\n\n**Test Day Takeaway:** From standard form $Ax + By = C$, the slope is $-\\dfrac{A}{B}$; the perpendicular slope flips it and switches the sign.",
  skills: ["slope", "coordinate-geometry", "linear-functions"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A spherical glass float with a radius of $9$ centimeters rests inside a closed cylindrical display case so that it touches the case's side, top, and bottom. To the nearest cubic centimeter, what is the volume of the space inside the case that is NOT occupied by the float?",
  choices: [
    { id: "A", text: "$1{,}527$" },
    // distractor: drops the 4/3 factor in the sphere volume, subtracting pi r^3
    { id: "B", text: "$2{,}290$" },
    // distractor: reports the float's volume (the occupied space) instead of the empty space
    { id: "C", text: "$3{,}054$" },
    // distractor: stops at the case's volume without subtracting the float
    { id: "D", text: "$4{,}580$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Inscribed Solid Volume**\n\n**Choice A is correct.**\n\n**The Fast Way (~50s):** Touching the side, top, and bottom means the cylinder has $r = 9$ and $h = 2(9) = 18$. Empty space $= \\pi(9)^2(18) - \\frac{4}{3}\\pi(9)^3 = 1{,}458\\pi - 972\\pi = 486\\pi \\approx 1{,}527$.\n\n**The Full Solution:**\nStep 1: The sphere touches the cylinder's side, so the cylinder's radius equals the sphere's: $r = 9$. It touches top and bottom, so the height equals the diameter: $h = 18$.\nStep 2: Cylinder volume $= \\pi r^2 h = \\pi(81)(18) = 1{,}458\\pi \\approx 4{,}580.4$ cubic centimeters.\nStep 3: Sphere volume $= \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi(729) = 972\\pi \\approx 3{,}053.6$ cubic centimeters.\nStep 4: Empty space $= 1{,}458\\pi - 972\\pi = 486\\pi \\approx 1{,}527$ cubic centimeters.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2{,}290$): drops the $\\frac{4}{3}$, subtracting $\\pi r^3 = 729\\pi$ and leaving $729\\pi$.\n* Choice C ($3{,}054$): reports the float's own volume — the space it DOES occupy.\n* Choice D ($4{,}580$): reports the case's volume with nothing subtracted.\n\n**Test Day Takeaway:** A sphere inscribed in a cylinder shares its radius, and the height equals the diameter — empty space is outer volume minus inner, with the full $\\frac{4}{3}\\pi r^3$.",
  skills: ["volume", "spheres", "geometry"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 6,
  question: "$$f(x) = (1.69)^{\\frac{x}{2}}$$\n\nThe function $f$ is defined by the given equation. The equation can be rewritten as $f(x) = \\left(1 + \\dfrac{p}{100}\\right)^{x}$, where $p$ is a constant. What is the value of $p$?",
  choices: [
    { id: "A", text: "$30$" },
    // distractor: divides the growth part by the period, (1.69 - 1)/2
    { id: "B", text: "$34.5$" },
    // distractor: ignores the exponent x/2 and reads 1.69 as 1 + 0.69
    { id: "C", text: "$69$" },
    // distractor: divides the whole base by the period, 1.69/2
    { id: "D", text: "$84.5$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponential Growth Rate**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Collapse the base over a single $x$: $(1.69)^{x/2} = \\left(1.69^{1/2}\\right)^x = (1.3)^x$, since $\\sqrt{1.69} = 1.3$. Match $1 + \\dfrac{p}{100} = 1.3$, so $p = 30$.\n\n**The Full Solution:**\nStep 1: Use $a^{x/2} = \\left(a^{1/2}\\right)^x$ to rewrite $(1.69)^{x/2}$ with exponent $x$.\nStep 2: The per-$x$ base is $1.69^{1/2} = \\sqrt{1.69} = 1.3$ exactly, because $1.3^2 = 1.69$.\nStep 3: Set $1 + \\dfrac{p}{100} = 1.3$: then $\\dfrac{p}{100} = 0.3$ and $p = 30$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($34.5$): divides the growth amount by the period, $\\dfrac{1.69 - 1}{2} = 0.345$ — rates over periods don't divide linearly.\n* Choice C ($69$): treats $1.69$ itself as the per-$x$ multiplier, ignoring the $\\dfrac{x}{2}$ exponent.\n* Choice D ($84.5$): divides the base by the period, $\\dfrac{1.69}{2}$.\n\n**Test Day Takeaway:** To convert $a^{x/k}$ to a per-$x$ rate, take the $k$-th ROOT of $a$ — never divide the base or the rate by $k$.",
  skills: ["exponential-functions", "percents"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$$y = 3x^2 - 13x + 30$$\n$$y = 5x + a$$\n\nIn the given system of equations, $a$ is a constant. The graphs of the equations intersect at exactly one point, $(x, y)$, in the $xy$-plane. What is the value of $x$?",
  choices: [
    // distractor: sign error on -b/(2a), giving the negative of the correct value
    { id: "A", text: "$-3$" },
    // distractor: forgets to move the 5x across, keeping the original -13 coefficient
    { id: "B", text: "$\\dfrac{13}{6}$" },
    { id: "C", text: "$3$" },
    // distractor: factors the constant 30 and guesses an integer root
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Quadratic-Linear System with One Intersection**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Set the sides equal: $3x^2 - 13x + 30 = 5x + a \\Rightarrow 3x^2 - 18x + (30 - a) = 0$. One intersection means a double root, which sits at $x = -\\dfrac{-18}{2(3)} = 3$ — no matter what $a$ is.\n\n**The Full Solution:**\nStep 1: Substitute the line into the parabola: $3x^2 - 13x + 30 = 5x + a$.\nStep 2: Collect terms: $3x^2 - 18x + (30 - a) = 0$.\nStep 3: Exactly one intersection means this quadratic has a repeated root, located at $x = -\\dfrac{b}{2a} = -\\dfrac{-18}{6} = 3$. The constant $a$ only tunes WHETHER the root repeats, not where it is.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): drops the sign in $-\\dfrac{b}{2a}$.\n* Choice B ($\\dfrac{13}{6}$): forgets to subtract $5x$, using the original $-13$ coefficient.\n* Choice D ($10$): factor-hunts the constant $30$ for an integer root.\n\n**Test Day Takeaway:** A tangent line meets a parabola at the combined quadratic's double root, $x = -\\dfrac{b}{2a}$ — you never need the unknown constant.",
  skills: ["quadratic-equations", "systems-of-equations"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  question: "The temperature, in degrees Fahrenheit, inside a sauna $t$ minutes after its heater is switched on is modeled by $T(t) = -3t^2 + 36t + 58$ for $0 \\le t \\le 12$. What is the maximum temperature, in degrees Fahrenheit, predicted by the model?",
  choices: [
    // distractor: reports the time of the maximum instead of the temperature
    { id: "A", text: "$6$" },
    // distractor: reports the initial temperature T(0)
    { id: "B", text: "$58$" },
    { id: "C", text: "$166$" },
    // distractor: computes 36(6) and stops, dropping the -108 and +58 terms
    { id: "D", text: "$216$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Vertex of a Parabola — Optimization**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The maximum of $T(t) = -3t^2 + 36t + 58$ occurs at $t = -\\dfrac{b}{2a} = -\\dfrac{36}{2(-3)} = 6$. Then $T(6) = -3(36) + 36(6) + 58 = -108 + 216 + 58 = 166$.\n\n**The Full Solution:**\nStep 1: With $a = -3 < 0$, the parabola opens downward, so its vertex is the maximum.\nStep 2: Time of the maximum: $t = -\\dfrac{36}{-6} = 6$ minutes.\nStep 3: Substitute back: $T(6) = -3(6)^2 + 36(6) + 58 = -108 + 216 + 58 = 166$ degrees.\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): reports the TIME of the peak, not the temperature.\n* Choice B ($58$): reports the starting temperature $T(0)$.\n* Choice D ($216$): computes only the middle term $36 \\cdot 6$ and drops the rest.\n\n**Test Day Takeaway:** Optimization is two moves: find the vertex time with $-\\dfrac{b}{2a}$, then substitute it back for the actual maximum value.",
  skills: ["quadratic-equations", "function-interpretation"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A laundromat's monthly water bill fell from $\\$75$ to $\\$45$ after high-efficiency washers were installed. By what percent did the water bill decrease?",
  choices: [
    // distractor: reports the raw $30 drop as if it were the percent
    { id: "A", text: "$30\\%$" },
    { id: "B", text: "$40\\%$" },
    // distractor: divides new by old, 45/75, giving what the bill IS of the original
    { id: "C", text: "$60\\%$" },
    // distractor: wrong base — divides the drop by the new bill, 30/45
    { id: "D", text: "$66.\\overline{6}\\%$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The drop is $75 - 45 = 30$ dollars. Percent decrease $= \\dfrac{30}{75} = 0.40 = 40\\%$.\n\n**The Full Solution:**\nStep 1: Percent decrease compares the change with the ORIGINAL amount: $\\dfrac{\\text{old} - \\text{new}}{\\text{old}} \\times 100\\%$.\nStep 2: Substitute: $\\dfrac{75 - 45}{75} \\times 100\\% = \\dfrac{30}{75} \\times 100\\% = 40\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($30\\%$): repeats the $\\$30$ dollar drop as a percent.\n* Choice C ($60\\%$): computes $\\dfrac{45}{75}$ — the fraction the bill still IS of the original, not the decrease.\n* Choice D ($66.\\overline{6}\\%$): divides the drop by the NEW bill, $\\dfrac{30}{45}$.\n\n**Test Day Takeaway:** Percent change always divides by the value you started from, never the one you ended at.",
  skills: ["percents", "word-problems"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A mushroom farm weighed each of $20$ harvested mushrooms and recorded the masses in the frequency table shown, where each mass falls in one of four intervals. Within an interval, the exact masses are unknown. What is the smallest possible value of the mean mass, in grams, of the $20$ mushrooms?",
  diagram: {
    type: "dataTable",
    params: {
      headers: ["Mass (grams)", "Frequency"],
      rows: [
        ["0 to 9", "4"],
        ["10 to 19", "6"],
        ["20 to 29", "5"],
        ["30 to 39", "5"]
      ]
    }
  },
  choices: [
    // distractor: reports the start of the most frequent interval
    { id: "A", text: "$10$" },
    { id: "B", text: "$15.5$" },
    // distractor: assumes every mass sits at its interval midpoint
    { id: "C", text: "$20$" },
    // distractor: computes the LARGEST possible mean, placing every mass at its interval maximum
    { id: "D", text: "$24.5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Grouped Data — Mean Bounds**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The mean is smallest when every mass sits at the BOTTOM of its interval: $\\dfrac{4(0) + 6(10) + 5(20) + 5(30)}{20} = \\dfrac{0 + 60 + 100 + 150}{20} = \\dfrac{310}{20} = 15.5$.\n\n**The Full Solution:**\nStep 1: Within each interval the exact values are free, so the minimum possible mean uses each interval's least value.\nStep 2: Minimum total $= 4(0) + 6(10) + 5(20) + 5(30) = 310$ grams.\nStep 3: Minimum mean $= \\dfrac{310}{20} = 15.5$ grams. (Any mass moved up from its interval floor can only raise the mean.)\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): grabs the start of the most frequent interval — that is not how a mean works.\n* Choice C ($20$): assumes midpoints, which estimates the TYPICAL mean, not the smallest possible one.\n* Choice D ($24.5$): places every mass at its interval MAXIMUM, which gives the largest possible mean.\n\n**Test Day Takeaway:** Grouped data pins each value only to a range — extreme possible means come from pushing every value to the same end of its interval.",
  skills: ["statistics", "mean"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In a random sample of $350$ students at a university, $58\\%$ reported buying a cafeteria meal plan, with a margin of error of $\\pm 4\\%$ at a $95\\%$ confidence level. Which of the following is the most appropriate conclusion based on this survey?",
  choices: [
    // distractor: drops the margin of error and confidence level, treating the sample value as exact
    { id: "A", text: "Exactly $58\\%$ of all students at the university buy a cafeteria meal plan." },
    // distractor: overreaches to a population that was never sampled
    { id: "B", text: "Between $54\\%$ and $62\\%$ of all college students in the country buy a cafeteria meal plan." },
    // distractor: misreads the interval as two exact possible values
    { id: "C", text: "The percentage of all students at the university who buy a meal plan is exactly $54\\%$ or exactly $62\\%$." },
    { id: "D", text: "We are $95\\%$ confident that between $54\\%$ and $62\\%$ of all students at the university buy a cafeteria meal plan." }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The interval is $58\\% \\pm 4\\% = 54\\%$ to $62\\%$, the conclusion must name the confidence level, and it can only describe the population actually sampled — students at THIS university. Only choice D does all three.\n\n**The Full Solution:**\nStep 1: Build the confidence interval: $58\\% - 4\\% = 54\\%$ and $58\\% + 4\\% = 62\\%$.\nStep 2: A sound survey conclusion (a) reports the interval rather than a single exact value, (b) states the confidence level, and (c) generalizes only to the sampled population.\nStep 3: Choice D satisfies all three conditions.\n\n**Why the wrong answers are tempting:**\n* Choice A: treats the sample estimate as an exact population value, discarding the margin of error.\n* Choice B: extends the result to all college students in the country — a population the sample cannot speak for.\n* Choice C: misreads the interval's endpoints as the only two possible values.\n\n**Test Day Takeaway:** A margin-of-error conclusion is an interval, at a stated confidence level, about the sampled population — reject any option that sharpens, widens, or relocates that claim.",
  skills: ["margin-of-error", "statistics"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the figure, triangle $ABC$ is inscribed in the circle with center $O$, and segment $AB$ is a diameter of the circle. The measure of angle $A$ is $30^{\\circ}$ and $BC = 9$ centimeters. The area of the circle, in square centimeters, can be written as $k\\pi$. What is the value of $k$?",
  diagram: {
    type: "circleWithInscribedTriangle",
    params: {
      labels: { A: "A", B: "B", C: "C", O: "O" },
      angleAtA: "30°",
      angleAtAValue: 30,
      showDiameter: true,
      showCenter: true,
      showRightAngleAtC: true,
      figureNote: true
    }
  },
  correctAnswer: "81",
  explanation: "**SAT Pattern: Special Right Triangle — 30-60-90**\n\n**The correct answer is $81$.**\n\n**The Fast Way (~40s):** $AB$ is a diameter, so the inscribed angle $C$ is $90^\\circ$ (Thales). With angle $A = 30^\\circ$, triangle $ABC$ is a $30$-$60$-$90$ triangle whose side opposite $30^\\circ$ is $BC = 9$, so the hypotenuse $AB = 2(9) = 18$. Then $r = 9$ and the area is $\\pi(9)^2 = 81\\pi$, so $k = 81$.\n\n**The Full Solution:**\nStep 1: An angle inscribed in a semicircle is a right angle, so angle $C = 90^\\circ$ and $AB$ is the hypotenuse.\nStep 2: The angles are $30^\\circ$, $60^\\circ$, $90^\\circ$, and the sides sit in ratio $1 : \\sqrt{3} : 2$. Side $BC$ is opposite the $30^\\circ$ angle at $A$, so it is the shortest side: $BC = 9$ means $AB = 18$.\nStep 3: $AB$ is a diameter, so the radius is $r = \\dfrac{18}{2} = 9$.\nStep 4: Area $= \\pi r^2 = 81\\pi$, so $k = 81$.\n\n**Common Mistakes:** Using $BC = 9$ as the diameter (giving $k = 20.25$); pairing $BC$ with the $60^\\circ$ angle and computing $AB = \\dfrac{18}{\\sqrt{3}}$; reporting the radius $9$ or the diameter $18$ instead of $k$.\n\n**Test Day Takeaway:** A triangle inscribed with one side on a diameter is right-angled at the third vertex — chain Thales with the $1 : \\sqrt{3} : 2$ ratios, and keep track of which side faces the $30^\\circ$ angle.",
  skills: ["special-right-triangles", "geometry", "circles"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "easy",
  band: 2,
  question: "The bar graph shows the number of crates of grapes a vineyard crew picked on each of five days. What is the range of the numbers of crates picked per day?",
  diagram: { type: "barChart", params: {
    data: [
      { label: "Mon", value: 14 },
      { label: "Tue", value: 22 },
      { label: "Wed", value: 9 },
      { label: "Thu", value: 17 },
      { label: "Fri", value: 12 }
    ],
    xAxisLabel: "Day",
    yAxisLabel: "Crates picked",
    yMax: 24,
    yStep: 4
  } },
  correctAnswer: "13",
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~10s):** Tallest bar $22$ (Tuesday), shortest bar $9$ (Wednesday): range $= 22 - 9 = 13$.\n\n**The Full Solution:**\nStep 1: The range of a data set is the maximum value minus the minimum value.\nStep 2: From the bars: the greatest daily count is $22$ and the least is $9$.\nStep 3: Range $= 22 - 9 = 13$ crates.\n\n**Common Mistakes:** Subtracting the first and last bars ($14 - 12 = 2$) instead of the extremes; reporting the maximum $22$ itself; averaging the values.\n\n**Test Day Takeaway:** Range only ever uses the two extreme values — scan for the tallest and shortest bars and subtract.",
  skills: ["statistics", "data-analysis"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A trampoline park charges a one-time entry fee plus a fixed rate per hour of jump time. A visitor who buys $2$ hours pays $\\$23$ in total, and a visitor who buys $5$ hours pays $\\$44$ in total. What is the entry fee, in dollars?",
  choices: [
    // distractor: stops one step early — reports the hourly rate as the fee
    { id: "A", text: "$\\$7$" },
    { id: "B", text: "$\\$9$" },
    // distractor: divides 23 by 2, ignoring the entry fee entirely
    { id: "C", text: "$\\$11.50$" },
    // distractor: uses the raw total difference 44 - 23
    { id: "D", text: "$\\$21$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The hourly rate is the slope: $\\dfrac{44 - 23}{5 - 2} = \\dfrac{21}{3} = 7$. Then from $(2, 23)$: fee $= 23 - 7(2) = 9$.\n\n**The Full Solution:**\nStep 1: Let $f$ be the entry fee and $r$ the hourly rate: total $= r \\cdot (\\text{hours}) + f$.\nStep 2: The two visits give $2r + f = 23$ and $5r + f = 44$.\nStep 3: Subtract to cancel $f$: $3r = 21$, so $r = 7$.\nStep 4: Back-substitute: $2(7) + f = 23 \\Rightarrow f = 9$. Check: $5(7) + 9 = 44$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$7$): reports the per-hour rate instead of the fee.\n* Choice C ($\\$11.50$): treats the whole $\\$23$ as hourly cost with no fee, $\\dfrac{23}{2}$.\n* Choice D ($\\$21$): reports the raw difference $44 - 23$, which is $3$ hours of jumping, not the fee.\n\n**Test Day Takeaway:** Fee-plus-rate pricing is a line: the rate is the slope between the two data points, and the fee is the $y$-intercept you back-solve.",
  skills: ["systems-of-equations", "linear-functions", "word-problems"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A quilter sews two square quilt panels; the side length of the larger panel is $4$ times the side length of the smaller panel. Batting for the panels costs $\\$12$ per square meter of panel area. If the batting for both panels together costs $\\$3{,}264$, what is the cost, in dollars, of the batting for the larger panel alone?",
  correctAnswer: "3072",
  explanation: "**SAT Pattern: Area Ratio to Side Ratio in Similar Figures**\n\n**The correct answer is $3072$.**\n\n**The Fast Way (~45s):** Side ratio $4$ means area ratio $16$: areas are $a$ and $16a$, so total cost $= 12(17a) = 3264 \\Rightarrow a = 16$. Larger panel cost $= 12(16a) = 12 \\cdot 256 = 3072$.\n\n**The Full Solution:**\nStep 1: Let the smaller side be $s$; the larger side is $4s$, so the areas are $s^2$ and $(4s)^2 = 16s^2$.\nStep 2: Total area $= s^2 + 16s^2 = 17s^2$, so the total cost is $12 \\cdot 17s^2 = 3{,}264$, giving $s^2 = 16$ square meters.\nStep 3: The larger panel's area is $16s^2 = 256$ square meters, so its batting costs $12 \\times 256 = \\$3{,}072$.\nStep 4: Check: smaller panel costs $12 \\times 16 = \\$192$, and $192 + 3{,}072 = 3{,}264$. $\\checkmark$\n\n**Common Mistakes:** Reporting $192$ (the smaller panel's cost); splitting the total by the SIDE ratio $4:1$ to get $2{,}611.20$; splitting the total evenly to get $1{,}632$.\n\n**Test Day Takeaway:** When a side scales by $k$, area — and any cost proportional to area — scales by $k^2$: the big square takes $16$ of every $17$ parts here.",
  skills: ["proportion", "geometry", "area"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "What is the solution to the equation $\\sqrt{3x + 28} = x$?",
  choices: [
    // distractor: the extraneous root, kept without checking the original equation
    { id: "A", text: "$-4$" },
    // distractor: reports the sum of the two squared-equation roots, 7 + (-4)
    { id: "B", text: "$3$" },
    { id: "C", text: "$7$" },
    // distractor: grabs the constant from under the radical
    { id: "D", text: "$28$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Radical Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Square both sides: $3x + 28 = x^2 \\Rightarrow x^2 - 3x - 28 = 0 \\Rightarrow (x - 7)(x + 4) = 0$, so $x = 7$ or $x = -4$. A square root can't equal a negative number, so $-4$ is extraneous: $x = 7$.\n\n**The Full Solution:**\nStep 1: Square both sides of $\\sqrt{3x + 28} = x$: $3x + 28 = x^2$.\nStep 2: Rearrange and factor: $x^2 - 3x - 28 = (x - 7)(x + 4) = 0$.\nStep 3: Candidates: $x = 7$ and $x = -4$.\nStep 4: Check both in the ORIGINAL equation. $x = 7$: $\\sqrt{21 + 28} = \\sqrt{49} = 7$. $\\checkmark$ $x = -4$: $\\sqrt{-12 + 28} = \\sqrt{16} = 4 \\neq -4$ — extraneous.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): keeps the extraneous root produced by squaring.\n* Choice B ($3$): adds the two candidate roots, $7 + (-4)$.\n* Choice D ($28$): lifts the constant out from under the radical.\n\n**Test Day Takeaway:** Squaring both sides can invent solutions — always substitute candidates back into the original radical equation and discard any that force $\\sqrt{\\ }$ to be negative.",
  skills: ["radical-equations", "solving-equations"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "At a freight rail yard, the numbers of flatcars $x$, boxcars $y$, and tank cars $z$ moved during one shift satisfy the system:\n\n$$x + y + z = 24$$\n$$3x + y + 2z = 47$$\n$$x + 4y + z = 51$$\n\nWhat is the value of $z$?",
  correctAnswer: "7",
  explanation: "**SAT Pattern: System of Three Equations**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~45s):** Equation 3 minus equation 1 kills both $x$ and $z$ at once: $3y = 27$, so $y = 9$. Then equation 1 gives $x + z = 15$, and equation 2 gives $3x + 2z = 47 - 9 = 38$. Substituting $x = 15 - z$: $45 - z = 38$, so $z = 7$.\n\n**The Full Solution:**\nStep 1: Label the equations: (1) $x + y + z = 24$, (2) $3x + y + 2z = 47$, (3) $x + 4y + z = 51$.\nStep 2: (3) $-$ (1): $3y = 27 \\Rightarrow y = 9$ — a lucky elimination, since (1) and (3) share the same $x$ and $z$ coefficients.\nStep 3: Substitute $y = 9$ into (1): $x + z = 15$. Into (2): $3x + 2z = 38$.\nStep 4: From $x = 15 - z$: $3(15 - z) + 2z = 38 \\Rightarrow 45 - z = 38 \\Rightarrow z = 7$, and $x = 8$.\nStep 5: Check (2): $3(8) + 9 + 2(7) = 24 + 9 + 14 = 47$. $\\checkmark$\n\n**Common Mistakes:** Reporting $x = 8$ or $y = 9$ instead of the requested $z$; grinding a full three-way elimination instead of spotting that two equations differ only in the $y$-term.\n\n**Test Day Takeaway:** Before eliminating mechanically, scan a $3 \\times 3$ system for two equations that differ in just one variable — subtracting them solves that variable instantly.",
  skills: ["systems-of-equations", "three-variable-systems"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A radio tower's signal reaches every point on and inside the circle in the $xy$-plane with equation $x^2 + y^2 + 6x - 16y + 48 = 0$, where units are kilometers. What is the radius of this circle, in kilometers?",
  choices: [
    { id: "A", text: "$5$" },
    // distractor: uses the constant 48 directly as r^2
    { id: "B", text: "$\\sqrt{48}$" },
    // distractor: sign error — adds 48 instead of subtracting, giving sqrt(121)
    { id: "C", text: "$11$" },
    // distractor: stops one step early — reports r^2 = 25 as the radius
    { id: "D", text: "$25$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Complete the square: $(x^2 + 6x + 9) + (y^2 - 16y + 64) = -48 + 9 + 64 = 25$, so $(x + 3)^2 + (y - 8)^2 = 25$ and $r = \\sqrt{25} = 5$.\n\n**The Full Solution:**\nStep 1: Group terms and move the constant: $(x^2 + 6x) + (y^2 - 16y) = -48$.\nStep 2: Complete each square: half of $6$ is $3$ (add $9$); half of $-16$ is $-8$ (add $64$). Add both to the right side as well.\nStep 3: $(x + 3)^2 + (y - 8)^2 = -48 + 9 + 64 = 25$.\nStep 4: $r^2 = 25$, so the radius is $5$ kilometers.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\sqrt{48}$): treats the constant $48$ as if it were $r^2$.\n* Choice C ($11$): adds the $48$ instead of moving it across with a sign change ($9 + 64 + 48 = 121$).\n* Choice D ($25$): stops at $r^2$ without the square root.\n\n**Test Day Takeaway:** Completing the square moves the constant across with its sign flipped — then the radius is the square root of what remains.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "How many distinct real solutions does the equation $(x^2 - 9)^2 - 5(x^2 - 9) - 36 = 0$ have?",
  choices: [
    // distractor: counts the two values of u = x^2 - 9 and stops
    { id: "A", text: "$2$" },
    // distractor: drops one root of a ± pair, assuming the negative u-case contributes only one value
    { id: "B", text: "$3$" },
    { id: "C", text: "$4$" },
    // distractor: adds the two u-values to the two x-pairs, double counting
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Quadratic in Disguise**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** Let $u = x^2 - 9$: $u^2 - 5u - 36 = 0 \\Rightarrow (u - 9)(u + 4) = 0$, so $u = 9$ or $u = -4$. Then $x^2 = 18 \\Rightarrow x = \\pm 3\\sqrt{2}$ and $x^2 = 5 \\Rightarrow x = \\pm\\sqrt{5}$ — four distinct real solutions.\n\n**The Full Solution:**\nStep 1: Substitute $u = x^2 - 9$ to expose the hidden quadratic $u^2 - 5u - 36 = 0$.\nStep 2: Factor: $(u - 9)(u + 4) = 0$, so $u = 9$ or $u = -4$.\nStep 3: Back-substitute each. $x^2 - 9 = 9 \\Rightarrow x^2 = 18 \\Rightarrow x = \\pm 3\\sqrt{2}$. $x^2 - 9 = -4 \\Rightarrow x^2 = 5 \\Rightarrow x = \\pm\\sqrt{5}$.\nStep 4: Both right-hand sides ($18$ and $5$) are positive, so each yields two real values — $4$ distinct real solutions in all.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): counts the two $u$-values and forgets to return to $x$.\n* Choice B ($3$): drops one of the $\\pm$ pairs, assuming a negative $u$ gives no solutions — but $x^2 = 5$ is still positive.\n* Choice D ($6$): double-counts by adding the $u$-values to the four $x$-values.\n\n**Test Day Takeaway:** After solving for the substituted variable, back-substitute EVERY case: $x^2 = c$ contributes two real roots whenever $c > 0$, even when $u$ itself was negative.",
  skills: ["quadratic-equations", "factoring"]
}
      ]
    }
  ]
};

export default practiceTest6;
