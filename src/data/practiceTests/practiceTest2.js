// Practice Test 2 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Official-calibration recreation (2026-08-31): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md).
// Slot metadata (id/type/difficulty/band/skills/pattern) frozen from the
// round-7 blueprint: M1 5E/9M/8H, domains 7/6/5/4. M2 3E/7M/12H.
// Figure density lifted to official ~20%: M1 carries 5 diagram items
// (Q6 two-way table, Q7 right triangle, Q9 scatterplot, Q13 data table,
// Q16 right triangle), M2 carries 4 (Q3 data table, Q4 similar triangles,
// Q11 right triangle, Q12 dot plot). Numeric MC choices sorted ascending.

export const practiceTest2 = {
  id: "practice-test-2",
  title: "Practice Test 2",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A botanical garden has sold $1{,}380$ memberships this year, which is $40\\%$ of its membership goal for the year. What is the garden's membership goal for the year?",
  choices: [
    // distractor: applies the percent forward: 1380 * 0.40 = 552
    { id: "A", text: "$552$" },
    // distractor: divides by the complement 0.60 instead of 0.40
    { id: "B", text: "$2{,}300$" },
    { id: "C", text: "$3{,}450$" },
    // distractor: divides by 0.04 instead of 0.40 (decimal-place slip)
    { id: "D", text: "$34{,}500$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $1{,}380$ memberships are $40\\%$ of the goal $G$, so divide: $G = \\dfrac{1{,}380}{0.40} = 3{,}450$.\n\n**The Full Solution:**\nStep 1: Let $G$ be the membership goal. \"$1{,}380$ is $40\\%$ of the goal\" translates to $0.40 \\cdot G = 1{,}380$.\nStep 2: Divide both sides by $0.40$: $G = \\dfrac{1{,}380}{0.40} = 3{,}450$.\nStep 3: Check: $0.40 \\cdot 3{,}450 = 1{,}380$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($552$): multiplies $1{,}380 \\cdot 0.40$ instead of dividing — the inverse operation shrinks an already-partial count.\n* Choice B ($2{,}300$): divides by the complement $0.60$, treating $1{,}380$ as the memberships NOT yet sold.\n* Choice D ($34{,}500$): divides by $0.04$ instead of $0.40$ — a decimal-place slip.\n\n**Test Day Takeaway:** When a known amount is a percent of an unknown whole, divide the amount by the percent written as a decimal to recover the whole.",
  skills: ["percents"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A snack mix contains almonds and dried cherries in a ratio of $5$ to $2$ by mass. If the total mass of the mix is $70$ ounces, how many ounces of dried cherries does the mix contain?",
  choices: [
    // distractor: reports the ratio number 2 itself
    { id: "A", text: "$2$" },
    { id: "B", text: "$20$" },
    // distractor: uses the part-to-part fraction 2/5 of the total instead of 2/7
    { id: "C", text: "$28$" },
    // distractor: solves for the almonds (5/7 of 70) instead of the cherries
    { id: "D", text: "$50$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Cherries are $2$ parts out of $5 + 2 = 7$ total parts, so cherries $= \\dfrac{2}{7} \\cdot 70 = 20$ ounces.\n\n**The Full Solution:**\nStep 1: Write the parts as $5k$ ounces of almonds and $2k$ ounces of cherries, keeping the $5:2$ ratio.\nStep 2: The total is $5k + 2k = 7k = 70$, so $k = 10$.\nStep 3: Cherries $= 2k = 20$ ounces. Check: almonds $= 50$, and $50 + 20 = 70$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reports the ratio number itself instead of scaling it to the total.\n* Choice C ($28$): uses $\\dfrac{2}{5}$ of the total — the part-to-part fraction — instead of $\\dfrac{2}{7}$.\n* Choice D ($50$): solves for the almonds ($\\dfrac{5}{7} \\cdot 70$) rather than the cherries.\n\n**Test Day Takeaway:** With a part-to-part ratio and a known total, each part's fraction of the whole has the SUM of the ratio numbers as its denominator.",
  skills: ["ratios", "word-problems"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $\\dfrac{2x}{9} = \\dfrac{16}{3}$, what is the value of $x - 15$?",
  choices: [
    { id: "A", text: "$9$" },
    // distractor: solves for x correctly but forgets the final subtraction
    { id: "B", text: "$24$" },
    // distractor: adds 15 instead of subtracting
    { id: "C", text: "$39$" },
    // distractor: stops at 2x = 48 instead of dividing to get x
    { id: "D", text: "$48$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Cross-multiply: $3 \\cdot 2x = 9 \\cdot 16$, so $6x = 144$ and $x = 24$. The question asks for $x - 15 = 9$.\n\n**The Full Solution:**\nStep 1: From $\\dfrac{2x}{9} = \\dfrac{16}{3}$, cross-multiply: $3 \\cdot 2x = 9 \\cdot 16 \\Rightarrow 6x = 144$.\nStep 2: Divide: $x = 24$.\nStep 3: The final sentence asks for $x - 15$, not $x$: $24 - 15 = 9$. Check: $\\dfrac{2(24)}{9} = \\dfrac{48}{9} = \\dfrac{16}{3}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($24$): solves for $x$ correctly but never subtracts $15$.\n* Choice C ($39$): adds $15$ to $x$ instead of subtracting.\n* Choice D ($48$): stops at $2x = 48$ without dividing by $2$.\n\n**Test Day Takeaway:** Re-read the final sentence before bubbling — the SAT often asks for a shifted quantity like $x - 15$, not the variable itself.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The function $v(t) = 19 - 3t$ gives the volume of fuel, in gallons, remaining in a generator's tank $t$ hours after the generator is turned on. According to this model, how many gallons of fuel remain in the tank $4$ hours after the generator is turned on?",
  choices: [
    { id: "A", text: "$7$" },
    // distractor: reports the fuel used, 3(4) = 12, not the fuel remaining
    { id: "B", text: "$12$" },
    // distractor: subtracts only one hour of use: 19 - 3
    { id: "C", text: "$16$" },
    // distractor: adds the fuel used instead of subtracting: 19 + 12
    { id: "D", text: "$31$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Evaluation in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $v(4) = 19 - 3(4) = 19 - 12 = 7$.\n\n**The Full Solution:**\nStep 1: In $v(t) = 19 - 3t$, the $19$ is the starting volume and the $-3$ is the burn rate in gallons per hour.\nStep 2: Evaluate at $t = 4$: $v(4) = 19 - 3(4) = 19 - 12 = 7$ gallons.\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): reports the fuel USED, $3(4) = 12$, instead of the fuel remaining.\n* Choice C ($16$): subtracts only one hour's burn, $19 - 3$, instead of four hours'.\n* Choice D ($31$): adds the burned fuel instead of subtracting, ignoring the negative rate.\n\n**Test Day Takeaway:** In a model of change over time, the constant is the initial value and the coefficient is the rate. \"Remaining\" is the model's output, not the amount used.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A kayak rental company charges $\\$8$ for each hour of rental plus a flat $\\$12$ equipment fee. The total charge to rent a kayak for $h$ hours is $\\$52$. What is the total charge, in dollars, to rent a kayak for $h + 3$ hours?",
  choices: [
    // distractor: adds the count 3 as dollars instead of 3 * $8 = $24
    { id: "A", text: "$\\$55$" },
    // distractor: adds only 2 hours' worth: $52 + 2($8)
    { id: "B", text: "$\\$68$" },
    { id: "C", text: "$\\$76$" },
    // distractor: uses the $12 fee as the hourly rate: $52 + 3($12)
    { id: "D", text: "$\\$88$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Three more hours at $\\$8$ each add $\\$24$; the flat fee does not change. New total: $\\$52 + \\$24 = \\$76$.\n\n**The Full Solution:**\nStep 1: The charge is $8h + 12$. For the first rental, $8h + 12 = 52$, so $8h = 40$ and $h = 5$.\nStep 2: The new rental lasts $h + 3 = 8$ hours with one fee: total $= 8(8) + 12 = 64 + 12 = \\$76$.\nStep 3: Or skip finding $h$: adding $3$ hours adds $3 \\cdot \\$8 = \\$24$ and leaves the fee alone, so $\\$52 + \\$24 = \\$76$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$55$): adds the count $3$ as dollars instead of $3 \\cdot \\$8 = \\$24$.\n* Choice B ($\\$68$): adds $2 \\cdot \\$8 = \\$16$ instead of $3 \\cdot \\$8 = \\$24$ — an off-by-one count slip.\n* Choice D ($\\$88$): uses the $\\$12$ fee as the hourly rate: $\\$52 + 3 \\cdot \\$12$.\n\n**Test Day Takeaway:** Linear cost $=$ (rate $\\times$ quantity) $+$ fixed fee. Adding units moves only the rate-times-quantity piece; the fixed fee stays put.",
  skills: ["word-problems", "solving-equations"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table summarizes the $200$ melons harvested at a farm one morning, classified by the field they were grown in and by whether each melon was ripe. If one of the ripe melons is selected at random, what is the probability that it was grown in Field A?",
  diagram: {
    type: "twoWayTable",
    params: {
      headers: ["", "Ripe", "Not ripe", "Total"],
      rows: [
        ["Field A", "63", "57", "120"],
        ["Field B", "27", "53", "80"],
        ["Total", "90", "110", "200"]
      ]
    }
  },
  choices: [
    // distractor: divides by the grand total 200 instead of the ripe total
    { id: "A", text: "$\\dfrac{63}{200}$" },
    // distractor: gives P(ripe), the unconditional probability, not the requested one
    { id: "B", text: "$\\dfrac{90}{200}$" },
    // distractor: uses the Field A row total 120 — the reverse condition
    { id: "C", text: "$\\dfrac{63}{120}$" },
    { id: "D", text: "$\\dfrac{63}{90}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** \"Selected from the ripe melons\" restricts the sample space to the Ripe column. Of the $90$ ripe melons, $63$ came from Field A, so the probability is $\\dfrac{63}{90}$.\n\n**The Full Solution:**\nStep 1: The condition is \"given the melon is ripe,\" so the denominator is the Ripe column total, $90$.\nStep 2: Among the ripe melons, $63$ are from Field A.\nStep 3: $P(\\text{Field A} \\mid \\text{Ripe}) = \\dfrac{63}{90}$, which reduces to $\\dfrac{7}{10}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{63}{200}$): divides by the grand total $200$ instead of the ripe total — that is the joint probability, not the conditional one.\n* Choice B ($\\dfrac{90}{200}$): gives the unconditional $P(\\text{Ripe})$, ignoring the field entirely.\n* Choice C ($\\dfrac{63}{120}$): uses the Field A row total, which answers $P(\\text{Ripe} \\mid \\text{Field A})$ — the reverse condition.\n\n**Test Day Takeaway:** \"Given that X\" fixes the denominator to X's total. Find the given group's row or column first, then count within it.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the right triangle shown, one acute angle measures $35^{\\circ}$ and the side opposite that angle has length $21$. Which expression gives the length of the hypotenuse?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["35°", "", ""],
      sideLabels: ["", "21", ""],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: multiplies by sine — gives a length shorter than the opposite leg
    { id: "A", text: "$21 \\sin 35^{\\circ}$" },
    // distractor: uses cosine and multiplies — both errors at once
    { id: "B", text: "$21 \\cos 35^{\\circ}$" },
    // distractor: uses cosine (adjacent/hypotenuse) instead of sine
    { id: "C", text: "$\\dfrac{21}{\\cos 35^{\\circ}}$" },
    { id: "D", text: "$\\dfrac{21}{\\sin 35^{\\circ}}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Sine ties the opposite leg to the hypotenuse: $\\sin 35^\\circ = \\dfrac{21}{h}$, so $h = \\dfrac{21}{\\sin 35^\\circ}$.\n\n**The Full Solution:**\nStep 1: For the $35^\\circ$ angle, the side of length $21$ is the opposite leg and $h$ is the hypotenuse.\nStep 2: $\\sin 35^\\circ = \\dfrac{\\text{opposite}}{\\text{hypotenuse}} = \\dfrac{21}{h}$.\nStep 3: Solve for $h$: $h = \\dfrac{21}{\\sin 35^\\circ}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($21 \\sin 35^\\circ$): multiplies by $\\sin 35^\\circ < 1$, giving a length SHORTER than the leg — but the hypotenuse must be the longest side.\n* Choice B ($21 \\cos 35^\\circ$): combines the wrong ratio with the wrong operation.\n* Choice C ($\\dfrac{21}{\\cos 35^\\circ}$): uses cosine, which relates the adjacent leg, not the opposite one.\n\n**Test Day Takeaway:** SOH: $\\sin = \\dfrac{\\text{opposite}}{\\text{hypotenuse}}$. To get the hypotenuse from the opposite leg, divide that leg by the sine.",
  skills: ["triangles", "right-triangles", "trigonometry"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $4(2x - 5) + 6 = 7x + 9$, what is the value of $x$?",
  correctAnswer: "23",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $23$.**\n\n**The Fast Way (~15s):** Distribute and collect: $8x - 20 + 6 = 7x + 9 \\Rightarrow 8x - 14 = 7x + 9 \\Rightarrow x = 23$.\n\n**The Full Solution:**\nStep 1: Distribute the $4$: $8x - 20 + 6 = 7x + 9$.\nStep 2: Combine constants on the left: $8x - 14 = 7x + 9$.\nStep 3: Subtract $7x$ and add $14$: $x = 23$. Check: left $= 4(41) + 6 = 170$, right $= 7(23) + 9 = 170$. $\\checkmark$\n\n**Common Mistakes:** Distributing the $4$ to only the $2x$ and not the $-5$; mishandling $-20 + 6$ as $-26$ instead of $-14$.\n\n**Test Day Takeaway:** Distribute, combine like terms, move variables to one side and constants to the other — then verify by plugging back in.",
  skills: ["solving-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The scatterplot shows the trunk diameter $x$, in centimeters, and the height $y$, in meters, of each of $9$ maple trees, along with a line of best fit. The equation of the line of best fit is $y = 0.4x + 3$. According to the line of best fit, what is the predicted height, in meters, of a maple tree with a trunk diameter of $30$ centimeters?",
  diagram: { type: "scatterplot", params: {
    points: [[5, 6], [8, 6], [12, 8], [15, 8], [18, 10], [22, 13], [25, 12], [28, 15], [32, 16]],
    xMin: 0, xMax: 36, yMin: 0, yMax: 20,
    xGridStep: 4, xLabelStep: 8, yGridStep: 2, yLabelStep: 4,
    bestFitLine: { slope: 0.4, intercept: 3 },
    xLabel: "Trunk diameter (cm)", yLabel: "Height (m)",
  } },
  choices: [
    // distractor: computes 0.4(30) = 12 but forgets to add the intercept
    { id: "A", text: "$12$" },
    { id: "B", text: "$15$" },
    // distractor: uses slope 1 instead of 0.4, computing 30 + 3
    { id: "C", text: "$33$" },
    // distractor: divides by the slope instead of multiplying: 30 / 0.4
    { id: "D", text: "$75$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $y = 0.4(30) + 3 = 12 + 3 = 15$.\n\n**The Full Solution:**\nStep 1: The line of best fit predicts $y$ from $x$, so substitute $x = 30$ into $y = 0.4x + 3$.\nStep 2: $0.4(30) = 12$.\nStep 3: $y = 12 + 3 = 15$ meters.\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): computes the slope term $0.4(30)$ but forgets to add the intercept $3$.\n* Choice C ($33$): uses slope $1$ instead of $0.4$, computing $30 + 3$.\n* Choice D ($75$): divides by the slope, $30 \\div 0.4$, instead of multiplying.\n\n**Test Day Takeaway:** Predictions from a line of best fit come from its EQUATION: substitute the given $x$ and evaluate — slope times input, plus intercept.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A cylindrical candle mold has a base radius of $4$ centimeters and a height of $11$ centimeters. The volume of the mold, in cubic centimeters, can be expressed as $k\\pi$. What is the value of $k$?",
  correctAnswer: "176",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $176$.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (4)^2 (11) = 176\\pi$, so $k = 176$.\n\n**The Full Solution:**\nStep 1: The cylinder volume formula is $V = \\pi r^2 h$.\nStep 2: Substitute $r = 4$ and $h = 11$: $V = \\pi (4)^2 (11) = \\pi (16)(11)$.\nStep 3: $16 \\cdot 11 = 176$, so $V = 176\\pi$ and $k = 176$.\n\n**Common Mistakes:** Forgetting to square the radius (using $\\pi r h$ gives $44\\pi$); using the cone formula $V = \\dfrac{1}{3}\\pi r^2 h$, which gives one-third the value.\n\n**Test Day Takeaway:** Square the radius first, then multiply by the height: $V = \\pi r^2 h$ is on the SAT Reference Sheet.",
  skills: ["volume", "geometry"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The system of equations below has the solution $(x, y)$.\n\n$2x + 5y = 24$\n$2x - 5y = -16$\n\nWhat is the value of $x + y$?",
  choices: [
    // distractor: reports x - y instead of x + y
    { id: "A", text: "$-2$" },
    // distractor: stops at x = 2 and reports it
    { id: "B", text: "$2$" },
    // distractor: stops at y = 4 and reports it
    { id: "C", text: "$4$" },
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The $y$ terms are opposites, so add: $4x = 8 \\Rightarrow x = 2$. Then $2(2) + 5y = 24$ gives $y = 4$, so $x + y = 6$.\n\n**The Full Solution:**\nStep 1: Add the equations to eliminate $y$: $(2x + 5y) + (2x - 5y) = 24 + (-16) \\Rightarrow 4x = 8$, so $x = 2$.\nStep 2: Substitute into the first equation: $4 + 5y = 24 \\Rightarrow 5y = 20 \\Rightarrow y = 4$.\nStep 3: $x + y = 2 + 4 = 6$. Check: $2(2) - 5(4) = 4 - 20 = -16$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): computes $x - y = 2 - 4$ instead of the requested sum.\n* Choice B ($2$): stops at $x = 2$ without finding $y$.\n* Choice C ($4$): stops at $y = 4$ without adding $x$.\n\n**Test Day Takeaway:** When one variable has opposite coefficients, ADD to eliminate it — then re-read the question and answer $x + y$, not just $x$ or $y$.",
  skills: ["systems-of-equations", "solving-equations"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "What is the equation of the line that has a slope of $\\dfrac{2}{5}$ and passes through the point $(10, -3)$?",
  choices: [
    { id: "A", text: "$y = \\dfrac{2}{5}x - 7$" },
    // distractor: computes (2/5)(10) as 2 instead of 4, getting b = -5
    { id: "B", text: "$y = \\dfrac{2}{5}x - 5$" },
    // distractor: adds 4 to -3 instead of subtracting, getting b = 1
    { id: "C", text: "$y = \\dfrac{2}{5}x + 1$" },
    // distractor: sign flip on the y-intercept
    { id: "D", text: "$y = \\dfrac{2}{5}x + 7$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Line from Slope and Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Plug the point into $y = mx + b$: $-3 = \\dfrac{2}{5}(10) + b = 4 + b$, so $b = -7$, giving $y = \\dfrac{2}{5}x - 7$.\n\n**The Full Solution:**\nStep 1: Use $y = mx + b$ with $m = \\dfrac{2}{5}$ and the point $(10, -3)$.\nStep 2: $-3 = \\dfrac{2}{5}(10) + b = 4 + b$.\nStep 3: Solve: $b = -7$. The line is $y = \\dfrac{2}{5}x - 7$. Check at $(10, -3)$: $4 - 7 = -3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-5$): computes $\\dfrac{2}{5}(10)$ as $2$ instead of $4$, landing on $b = -5$.\n* Choice C ($+1$): adds $4$ to $-3$ instead of subtracting, getting $b = 1$.\n* Choice D ($+7$): a sign flip on the correct intercept.\n\n**Test Day Takeaway:** Substitute the known point into $y = mx + b$, solve for $b$, then confirm by plugging the point back into your equation.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The table shows the number of meals a community kitchen delivered on each of four days. If the mean number of meals delivered per day over the five days from Monday through Friday was $58$, how many meals did the kitchen deliver on Friday?",
  diagram: {
    type: "dataTable",
    params: {
      headers: ["Day", "Meals delivered"],
      rows: [
        ["Monday", "54"],
        ["Tuesday", "61"],
        ["Wednesday", "48"],
        ["Thursday", "67"]
      ]
    }
  },
  correctAnswer: "60",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $60$.**\n\n**The Fast Way (~20s):** Five days at a mean of $58$ means a total of $5 \\times 58 = 290$ meals. The four listed days total $54 + 61 + 48 + 67 = 230$, so Friday $= 290 - 230 = 60$.\n\n**The Full Solution:**\nStep 1: Mean $= \\dfrac{\\text{sum}}{\\text{count}}$, so the five-day total is $5 \\times 58 = 290$.\nStep 2: Add the four known days: $54 + 61 + 48 + 67 = 230$.\nStep 3: Friday's count is the difference: $290 - 230 = 60$.\n\nCheck: $\\dfrac{230 + 60}{5} = \\dfrac{290}{5} = 58$. $\\checkmark$\n\n**Common Mistakes:** Averaging only the four listed days ($\\dfrac{230}{4} = 57.5$); reporting the required total $290$ instead of the missing day's count.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ total. To find a missing value, subtract the known sum from the required total.",
  skills: ["statistics", "word-problems"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $g(x) = 7 - 4x$ and $g(a) = 19$, what is the value of $a$?",
  choices: [
    // distractor: treats 19 as the input, computing g(19) = 7 - 76
    { id: "A", text: "$-69$" },
    // distractor: adds 7 to both sides instead of subtracting, getting -4a = 26
    { id: "B", text: "$-6.5$" },
    { id: "C", text: "$-3$" },
    // distractor: drops the negative when dividing by -4
    { id: "D", text: "$3$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Solving with Function Notation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $g(a) = 19$ means $7 - 4a = 19$, so $-4a = 12$ and $a = -3$.\n\n**The Full Solution:**\nStep 1: $g(a) = 19$ says: substitute $a$ for $x$ and set the result equal to $19$, giving $7 - 4a = 19$.\nStep 2: Subtract $7$ from both sides: $-4a = 12$.\nStep 3: Divide by $-4$: $a = -3$.\n\nCheck: $g(-3) = 7 - 4(-3) = 7 + 12 = 19$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-69$): treats $19$ as the input rather than the output, computing $7 - 4(19)$.\n* Choice B ($-6.5$): adds $7$ to both sides instead of subtracting, getting $-4a = 26$.\n* Choice D ($3$): drops the negative sign when dividing $12$ by $-4$.\n\n**Test Day Takeaway:** $g(a) = c$ means substitute $a$ for $x$ and set the expression equal to $c$ — then track every sign while solving for $a$.",
  skills: ["function-interpretation", "solving-equations"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The expression $\\dfrac{(2a^3b^4)^5}{8a^7b^9}$ can be written as $ca^mb^n$, where $c$, $m$, and $n$ are constants. What is the value of $c + m + n$?",
  choices: [
    // distractor: exponent slip on b: computes b^{20-9} as b^9, giving 4 + 8 + 9
    { id: "A", text: "$21$" },
    { id: "B", text: "$23$" },
    // distractor: exponent slip on a: computes a^{15-7} as a^10, giving 4 + 10 + 11
    { id: "C", text: "$25$" },
    // distractor: forgets to divide 32 by 8, keeping the coefficient 32
    { id: "D", text: "$51$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponent Rules with Multiple Variables**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The numerator is $(2a^3b^4)^5 = 32a^{15}b^{20}$. Dividing by $8a^7b^9$ gives $\\dfrac{32}{8}a^{15-7}b^{20-9} = 4a^8b^{11}$, so $c + m + n = 4 + 8 + 11 = 23$.\n\n**The Full Solution:**\nStep 1: Apply the outer power to every factor, including the coefficient: $(2a^3b^4)^5 = 2^5 (a^3)^5 (b^4)^5 = 32a^{15}b^{20}$.\nStep 2: Divide by $8a^7b^9$ by subtracting exponents: $\\dfrac{32}{8} = 4$, $a^{15-7} = a^8$, $b^{20-9} = b^{11}$.\nStep 3: The expression is $4a^8b^{11}$, so $c = 4$, $m = 8$, $n = 11$.\nStep 4: $c + m + n = 4 + 8 + 11 = 23$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($21$): an exponent slip on $b$, computing $b^{20-9}$ as $b^9$.\n* Choice C ($25$): an exponent slip on $a$, computing $a^{15-7}$ as $a^{10}$.\n* Choice D ($51$): keeps the coefficient $32$ without dividing by $8$: $32 + 8 + 11$.\n\n**Test Day Takeaway:** A power outside parentheses hits every factor inside — the coefficient too. Then divide by subtracting exponents on each matching base.",
  skills: ["exponent-rules", "polynomial-operations"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The two legs of a right triangle measure $5\\sqrt{3}$ inches and $8\\sqrt{3}$ inches, as shown in the figure. What is the area of the triangle, in square inches?",
  diagram: {
    type: "rightTriangle",
    params: {
      sideLabels: ["5√3", "8√3", ""],
      rightAngleVertex: 1
    }
  },
  correctAnswer: "60",
  explanation: "**SAT Pattern: Area with Radical Side Lengths**\n\n**The correct answer is $60$.**\n\n**The Fast Way (~15s):** The legs are perpendicular, so Area $= \\dfrac{1}{2} \\cdot 5\\sqrt{3} \\cdot 8\\sqrt{3} = \\dfrac{1}{2} \\cdot 40 \\cdot 3 = 60$.\n\n**The Full Solution:**\nStep 1: In a right triangle the two legs serve as base and height, so Area $= \\dfrac{1}{2} \\times \\text{leg}_1 \\times \\text{leg}_2$.\nStep 2: Separate coefficients from radicals: $\\dfrac{1}{2} \\times (5 \\times 8) \\times (\\sqrt{3} \\times \\sqrt{3})$.\nStep 3: $\\sqrt{3} \\times \\sqrt{3} = 3$, so the product is $\\dfrac{1}{2} \\times 40 \\times 3 = 60$.\n\nCheck numerically: $5\\sqrt{3} \\approx 8.66$, $8\\sqrt{3} \\approx 13.86$, and $\\dfrac{1}{2}(8.66)(13.86) \\approx 60$. $\\checkmark$\n\n**Common Mistakes:** Writing $\\sqrt{3} \\times \\sqrt{3} = \\sqrt{6}$ instead of $3$. Dropping the $\\dfrac{1}{2}$ and reporting $120$.\n\n**Test Day Takeaway:** $\\sqrt{a} \\times \\sqrt{a} = a$. Multiply the coefficients and the radicals separately, then apply the $\\dfrac{1}{2}$ for triangle area.",
  skills: ["triangles", "area", "radical-expressions"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the graph of $f(x) = -a \\cdot 3^x + b$ has a $y$-intercept of $(0, 7)$ and passes through the point $(2, -25)$. What is the value of $a + b$?",
  choices: [
    // distractor: solves correctly but reports only a
    { id: "A", text: "$4$" },
    // distractor: stops at the y-intercept value b - a = 7
    { id: "B", text: "$7$" },
    // distractor: solves correctly but reports only b
    { id: "C", text: "$11$" },
    { id: "D", text: "$15$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Exponential Function with Two Conditions**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** At $x = 0$: $-a + b = 7$. At $x = 2$: $-9a + b = -25$. Subtracting the second from the first gives $8a = 32$, so $a = 4$ and $b = 11$. Then $a + b = 15$.\n\n**The Full Solution:**\nStep 1: Use the $y$-intercept $(0, 7)$. Since $3^0 = 1$, $f(0) = -a + b = 7$.\nStep 2: Use the point $(2, -25)$. Since $3^2 = 9$, $f(2) = -9a + b = -25$.\nStep 3: Subtract the second equation from the first to eliminate $b$: $(-a + b) - (-9a + b) = 7 - (-25) \\Rightarrow 8a = 32 \\Rightarrow a = 4$.\nStep 4: Back-substitute: $-4 + b = 7$, so $b = 11$. Then $a + b = 4 + 11 = 15$.\n\nCheck: $f(x) = -4 \\cdot 3^x + 11$ gives $f(0) = 7$ and $f(2) = -36 + 11 = -25$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): solves the system correctly but reports only $a$.\n* Choice B ($7$): stops at the $y$-intercept equation $b - a = 7$ and reports its value.\n* Choice C ($11$): solves correctly but reports only $b$.\n\n**Test Day Takeaway:** Two points give two equations. Plug in $x = 0$ first — any base to the $0$ power is $1$, which strips the exponential — then answer the COMBINATION the question asks for.",
  skills: ["exponential-functions", "systems-of-equations"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For what value of $k$ does the equation $4x^2 - 9x + k = 0$ have exactly one real solution?",
  choices: [
    // distractor: uses b/a = 9/4 instead of the discriminant condition
    { id: "A", text: "$\\dfrac{9}{4}$" },
    { id: "B", text: "$\\dfrac{81}{16}$" },
    // distractor: divides b^2 by 2a instead of 4a
    { id: "C", text: "$\\dfrac{81}{8}$" },
    // distractor: divides b^2 by a instead of 4a, dropping the factor of 4
    { id: "D", text: "$\\dfrac{81}{4}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Exactly one real solution means the discriminant is $0$: $(-9)^2 - 4(4)(k) = 0 \\Rightarrow 81 - 16k = 0 \\Rightarrow k = \\dfrac{81}{16}$.\n\n**The Full Solution:**\nStep 1: A quadratic $ax^2 + bx + c = 0$ has exactly one real solution when $b^2 - 4ac = 0$.\nStep 2: Here $a = 4$, $b = -9$, $c = k$, so $(-9)^2 - 4(4)(k) = 0$.\nStep 3: Simplify: $81 - 16k = 0$, so $16k = 81$ and $k = \\dfrac{81}{16}$.\n\nCheck: the discriminant is $81 - 16\\left(\\dfrac{81}{16}\\right) = 81 - 81 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{9}{4}$): uses the ratio $\\dfrac{b}{a}$ instead of the discriminant condition.\n* Choice C ($\\dfrac{81}{8}$): divides $b^2$ by $2a$ instead of $4a$.\n* Choice D ($\\dfrac{81}{4}$): divides $b^2$ by $a$, dropping the factor of $4$ entirely.\n\n**Test Day Takeaway:** \"Exactly one real solution\" $\\Rightarrow$ discriminant $= 0$. Set $b^2 - 4ac = 0$ and keep the full $4ac$ product intact.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $x^2 + y^2 + 10x - 4y + 20 = 0$ represents a circle in the $xy$-plane. What is the area of this circle?",
  choices: [
    { id: "A", text: "$9\\pi$" },
    // distractor: completes the squares but never moves the constant: 25 + 4
    { id: "B", text: "$29\\pi$" },
    // distractor: moves the constant with the wrong sign: 25 + 4 + 20
    { id: "C", text: "$49\\pi$" },
    // distractor: squares r^2 again, computing (r^2)^2 = 81
    { id: "D", text: "$81\\pi$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Complete both squares: $(x+5)^2 + (y-2)^2 = 25 + 4 - 20 = 9$. So $r^2 = 9$ and Area $= \\pi r^2 = 9\\pi$.\n\n**The Full Solution:**\nStep 1: Group the $x$ and $y$ terms and move the constant: $(x^2 + 10x) + (y^2 - 4y) = -20$.\nStep 2: Complete each square. Half of $10$ is $5$, and $5^2 = 25$, giving $(x + 5)^2$. Half of $-4$ is $-2$, and $(-2)^2 = 4$, giving $(y - 2)^2$. Add $25$ and $4$ to the right side.\nStep 3: $(x + 5)^2 + (y - 2)^2 = -20 + 25 + 4 = 9$.\nStep 4: So $r^2 = 9$ and Area $= \\pi r^2 = 9\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($29\\pi$): adds $25 + 4$ but never moves the $+20$ to the right side.\n* Choice C ($49\\pi$): moves the constant with the wrong sign, computing $25 + 4 + 20$.\n* Choice D ($81\\pi$): squares $r^2 = 9$ a second time, as if the area formula needed $r^4$.\n\n**Test Day Takeaway:** Convert general form to standard form by completing BOTH squares; the right side is already $r^2$ — the area is $\\pi$ times that number, no extra squaring.",
  skills: ["circle-equations", "coordinate-geometry", "area"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $(4x + k)(x - 3) = 4x^2 - 5x + m$ for all values of $x$, what is the value of $m$?",
  correctAnswer: "-21",
  explanation: "**SAT Pattern: Matching Coefficients**\n\n**The correct answer is $-21$.**\n\n**The Fast Way (~20s):** Expand to $4x^2 + (k - 12)x - 3k$. Match the $x$-coefficient: $k - 12 = -5$, so $k = 7$. Then $m = -3k = -21$.\n\n**The Full Solution:**\nStep 1: Expand the left side: $(4x + k)(x - 3) = 4x^2 - 12x + kx - 3k = 4x^2 + (k - 12)x - 3k$.\nStep 2: Match coefficients with $4x^2 - 5x + m$. The $x$ term gives $k - 12 = -5 \\Rightarrow k = 7$.\nStep 3: The constant term gives $m = -3k = -3(7) = -21$.\n\nCheck: $(4x + 7)(x - 3) = 4x^2 - 12x + 7x - 21 = 4x^2 - 5x - 21$. $\\checkmark$\n\n**Common Mistakes:** Solving for $k = 7$ and reporting $7$ instead of $m$. Sign-slipping on $-3k$ to get $+21$.\n\n**Test Day Takeaway:** When two polynomials are equal for all $x$, match coefficients term by term — but answer the constant the question actually asks for.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f(x) = a(x - h)^2 + k$ has a minimum value of $-7$ at $x = 4$ and passes through the point $(6, 5)$. What is the value of $f(0)$?",
  choices: [
    // distractor: uses a = 1 instead of solving for a = 3
    { id: "A", text: "$9$" },
    // distractor: computes (0 - 4)^2 = 10 instead of 16
    { id: "B", text: "$23$" },
    { id: "C", text: "$41$" },
    // distractor: adds the vertex value instead of subtracting: 48 + 7
    { id: "D", text: "$55$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The minimum $-7$ at $x = 4$ pins the vertex $(4, -7)$, so $f(x) = a(x - 4)^2 - 7$. Using $(6, 5)$: $5 = 4a - 7 \\Rightarrow a = 3$. Then $f(0) = 3(16) - 7 = 41$.\n\n**The Full Solution:**\nStep 1: A minimum value of $-7$ at $x = 4$ means the vertex is $(4, -7)$, so $f(x) = a(x - 4)^2 - 7$.\nStep 2: Use the point $(6, 5)$: $5 = a(6 - 4)^2 - 7 = 4a - 7$, so $12 = 4a$ and $a = 3$.\nStep 3: Evaluate $f(0) = 3(0 - 4)^2 - 7 = 3(16) - 7 = 48 - 7 = 41$.\n\nCheck: $f(6) = 3(2)^2 - 7 = 12 - 7 = 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): uses $a = 1$ instead of solving for $a = 3$.\n* Choice B ($23$): computes $(0 - 4)^2$ as $10$ instead of $16$.\n* Choice D ($55$): adds the vertex value instead of subtracting: $48 + 7$.\n\n**Test Day Takeaway:** A minimum or maximum value pins the vertex $(h, k)$. Find $a$ from a second point, then evaluate $f$ wherever asked.",
  skills: ["vertex-form", "quadratic-equations", "function-interpretation"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "For $x > 0$, the expression $\\dfrac{x^2 \\cdot \\sqrt[3]{x}}{\\sqrt[4]{x}}$ is equal to $x^k$. What is the value of $k$? Express your answer as a fraction.",
  correctAnswer: "25/12",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\dfrac{25}{12}$.**\n\n**The Fast Way (~20s):** Rewrite roots as exponents: $\\dfrac{x^2 \\cdot x^{1/3}}{x^{1/4}} = x^{2 + \\frac{1}{3} - \\frac{1}{4}}$. Combine over $12$: $\\dfrac{24}{12} + \\dfrac{4}{12} - \\dfrac{3}{12} = \\dfrac{25}{12}$.\n\n**The Full Solution:**\nStep 1: Convert radicals to fractional exponents: $\\sqrt[3]{x} = x^{\\frac{1}{3}}$ and $\\sqrt[4]{x} = x^{\\frac{1}{4}}$.\nStep 2: Multiply in the numerator by adding exponents: $x^2 \\cdot x^{\\frac{1}{3}} = x^{\\frac{6}{3} + \\frac{1}{3}} = x^{\\frac{7}{3}}$.\nStep 3: Divide by subtracting the denominator's exponent: $x^{\\frac{7}{3} - \\frac{1}{4}}$.\nStep 4: Use a common denominator of $12$: $\\dfrac{7}{3} = \\dfrac{28}{12}$ and $\\dfrac{1}{4} = \\dfrac{3}{12}$, so $\\dfrac{28}{12} - \\dfrac{3}{12} = \\dfrac{25}{12}$. Thus $k = \\dfrac{25}{12}$.\n\n**Common Mistakes:** Reading $\\sqrt[3]{x}$ as $x^3$ instead of $x^{\\frac{1}{3}}$. Adding the denominator's exponent rather than subtracting it.\n\n**Test Day Takeaway:** Turn every radical into a fractional exponent, then multiply $=$ add exponents and divide $=$ subtract exponents.",
  skills: ["exponent-rules", "radical-expressions"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 2 — Math Module 2 (22 questions)
// Flow: E at 1,2,12 · M at 3,4,6,7,10,14,16 ·
// H at 5,8,9,11,13,15,17,18,19,20,21,22. Breather easy at Q12 (range).
// Official-calibration recreation 2026-08-31: fresh scenarios throughout;
// warm-ups Q1-5 all carry a trap or 2+ steps (percent-of-previous growth,
// first-visit pricing, added-value mean shift, perimeter scaling, radian sum).
// Diagrams at Q3 (data table), Q4 (similar triangles), Q11 (right triangle),
// Q12 (dot plot).

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "The number of listeners of a weekly podcast increases by $6\\%$ of the previous month's listener count each month. Which type of function best models the number of listeners of the podcast as a function of the number of months?",
  choices: [
    // distractor: wrong direction — the count is growing, not shrinking
    { id: "A", text: "Decreasing exponential" },
    // distractor: combines wrong type with wrong direction
    { id: "B", text: "Decreasing linear" },
    // distractor: THE TRAP — reads the constant "6" as a constant amount added per month
    { id: "C", text: "Increasing linear" },
    { id: "D", text: "Increasing exponential" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Linear vs Exponential**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** \"$6\\%$ of the previous month's count\" is a constant MULTIPLIER ($\\times 1.06$ each month), not a constant amount — and the count is growing. That is increasing exponential.\n\n**The Full Solution:**\nStep 1: Each month the count is multiplied by $1.06$: the amount added ($6\\%$ of an ever-larger total) changes every month, so the growth is not linear.\nStep 2: A constant percent change per unit of time defines an exponential model, and \"increases\" makes it increasing.\n\nCheck: from $1{,}000$ listeners, the increases are $60$, then $63.6$, then $67.4$ — growing, not constant. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (Decreasing exponential): right type, wrong direction — the count rises.\n* Choice B (Decreasing linear): wrong on both counts.\n* Choice C (Increasing linear): the trap — the fixed-looking \"$6$\" suggests a constant amount, but $6\\%$ OF THE PREVIOUS TOTAL is a constant factor, which is exponential.\n\n**Test Day Takeaway:** \"Increases by $X$ per month\" $\\Rightarrow$ linear. \"Increases by $X\\%$ of the previous amount\" $\\Rightarrow$ exponential. The word \"percent\" is the tell.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "A climbing gym charges $\\$15$ for a customer's first visit and $\\$9$ for each visit after the first. Which equation gives the total amount $C$, in dollars, that a customer pays for $v$ visits, where $v \\geq 1$?",
  choices: [
    { id: "A", text: "$C = 9v + 6$" },
    // distractor: charges $9 for every visit AND adds the full $15 on top
    { id: "B", text: "$C = 9v + 15$" },
    // distractor: swaps the roles of the two prices
    { id: "C", text: "$C = 15v + 9$" },
    // distractor: adds both prices into one per-visit rate
    { id: "D", text: "$C = 24v$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Linear Cost Setup**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Only $v - 1$ visits cost $\\$9$: $C = 15 + 9(v - 1) = 9v + 6$.\n\n**The Full Solution:**\nStep 1: The first visit costs $\\$15$; the remaining $v - 1$ visits cost $\\$9$ each.\nStep 2: Total: $C = 15 + 9(v - 1)$.\nStep 3: Simplify: $C = 15 + 9v - 9 = 9v + 6$.\n\nCheck: one visit costs $9(1) + 6 = \\$15$; two visits cost $9(2) + 6 = \\$24 = \\$15 + \\$9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($C = 9v + 15$): charges $\\$9$ for ALL $v$ visits and then adds the full $\\$15$ on top — the first visit gets billed twice.\n* Choice C ($C = 15v + 9$): swaps the two prices, charging $\\$15$ per visit.\n* Choice D ($C = 24v$): adds both prices into a single per-visit rate.\n\n**Test Day Takeaway:** \"$\\$p$ for the first, $\\$q$ for each additional\" means $q$ applies to $v - 1$ units: $C = p + q(v-1)$. Verify with $v = 1$ — the total must equal the first-unit price.",
  skills: ["linear-functions", "word-problems"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table shows the mass of kale, in kilograms, harvested from each of five plots at a community garden. A sixth plot is then harvested, yielding $8$ kilograms of kale. Which of the following correctly compares the mean of the original five-plot data set with the mean of the new six-plot data set?",
  diagram: {
    type: "dataTable",
    params: {
      headers: ["Plot", "Kale harvested (kg)"],
      rows: [
        ["1", "16"],
        ["2", "22"],
        ["3", "19"],
        ["4", "25"],
        ["5", "18"]
      ]
    }
  },
  choices: [
    { id: "A", text: "The mean of the original data set is greater than the mean of the new data set." },
    // distractor: assumes any added value raises the mean
    { id: "B", text: "The mean of the original data set is less than the mean of the new data set." },
    // distractor: assumes adding a value never changes the mean
    { id: "C", text: "The means of the two data sets are equal." },
    // distractor: claims the data are insufficient even though every value is given
    { id: "D", text: "There is not enough information to compare the means." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: New mean after adding a value**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Compare the added value to the current mean. The original mean is $\\dfrac{16+22+19+25+18}{5} = \\dfrac{100}{5} = 20$. The sixth plot adds $8$, which is below $20$, so the new mean drops — the original mean is greater.\n\n**The Full Solution:**\nStep 1: Original mean $= \\dfrac{100}{5} = 20$ kilograms.\nStep 2: Adding $8$ gives a new sum of $100 + 8 = 108$ over $6$ plots, so the new mean $= \\dfrac{108}{6} = 18$.\nStep 3: Since $20 > 18$, the original mean exceeds the new mean.\n\n**Why the wrong answers are tempting:**\n* Choice B: assumes adding any value raises the mean. Here $8 < 20$, so it pulls the mean down.\n* Choice C: a new value leaves the mean unchanged only if it EQUALS the old mean, $20$.\n* Choice D: overcautious — every value is given, so the comparison is fully determined.\n\n**Test Day Takeaway:** To compare a mean before and after adding one value, compare that value to the OLD mean: below it lowers the mean, above it raises it, equal keeps it the same.",
  skills: ["statistics", "mean"]
},
{
  id: 4,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "Triangles $PQR$ and $STU$ shown are similar, where side $PQ$ corresponds to side $ST$. The perimeter of triangle $PQR$ is $36$. What is the perimeter of triangle $STU$?",
  diagram: {
    type: "similarTriangles",
    params: {
      triangle1: { labels: ["P", "Q", "R"], sideLabels: ["10", "", ""] },
      triangle2: { labels: ["S", "T", "U"], sideLabels: ["25", "", ""] },
      figureNote: true
    }
  },
  correctAnswer: "90",
  explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**The correct answer is $90$.**\n\n**The Fast Way (~15s):** The scale factor is $\\dfrac{ST}{PQ} = \\dfrac{25}{10} = \\dfrac{5}{2}$, and perimeter scales by the same factor: $36 \\cdot \\dfrac{5}{2} = 90$.\n\n**The Full Solution:**\nStep 1: In similar triangles, every corresponding length scales by one factor $k = \\dfrac{ST}{PQ} = \\dfrac{25}{10} = \\dfrac{5}{2}$.\nStep 2: The perimeter is a sum of side lengths, so it scales by $k$ too: $P_{STU} = \\dfrac{5}{2} \\cdot 36 = 90$.\nStep 3: Check: scaling each side of $PQR$ by $\\dfrac{5}{2}$ scales their sum by $\\dfrac{5}{2}$. $\\checkmark$\n\n**Common Mistakes:** Adding the difference $25 - 10 = 15$ to get $51$ (lengths scale multiplicatively, not additively); using the area factor $k^2 = \\dfrac{25}{4}$; inverting the ratio to $\\dfrac{2}{5}$ and getting $14.4$.\n\n**Test Day Takeaway:** In similar figures, the perimeter ratio equals the side ratio. Only AREA uses the square of the side ratio.",
  skills: ["triangles", "geometry", "ratios"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In a gear mechanism, gear $P$ rotates through an angle of $\\dfrac{5\\pi}{6}$ radians. Gear $Q$ rotates through an angle that is $\\dfrac{4\\pi}{9}$ radians greater than the angle gear $P$ rotates through. What is the measure, in degrees, of the angle gear $Q$ rotates through?",
  choices: [
    // distractor: converts only the increment 4pi/9 = 80 (forgets to add P's angle)
    { id: "A", text: "$80$" },
    // distractor: converts only P's angle 5pi/6 = 150 (forgets the increment)
    { id: "B", text: "$150$" },
    { id: "C", text: "$230$" },
    // distractor: doubles the total while combining the fractions
    { id: "D", text: "$460$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Radian-Degree Conversion**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Add first: $\\dfrac{5\\pi}{6} + \\dfrac{4\\pi}{9} = \\dfrac{15\\pi}{18} + \\dfrac{8\\pi}{18} = \\dfrac{23\\pi}{18}$. Convert: $\\dfrac{23\\pi}{18} \\cdot \\dfrac{180}{\\pi} = 230^\\circ$.\n\n**The Full Solution:**\nStep 1: Use a common denominator of $18$: $\\dfrac{5\\pi}{6} = \\dfrac{15\\pi}{18}$ and $\\dfrac{4\\pi}{9} = \\dfrac{8\\pi}{18}$, so gear $Q$ rotates $\\dfrac{15\\pi}{18} + \\dfrac{8\\pi}{18} = \\dfrac{23\\pi}{18}$ radians.\nStep 2: Convert to degrees by multiplying by $\\dfrac{180^\\circ}{\\pi}$: $\\dfrac{23\\pi}{18} \\cdot \\dfrac{180^\\circ}{\\pi} = 23 \\cdot 10^\\circ = 230^\\circ$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($80$): converts only the increment $\\dfrac{4\\pi}{9} = 80^\\circ$ and forgets gear $P$'s angle.\n* Choice B ($150$): converts only $\\dfrac{5\\pi}{6} = 150^\\circ$ and forgets the increment.\n* Choice D ($460$): doubles the correct total — a slip while combining $\\dfrac{23\\pi}{18}$.\n\n**Test Day Takeaway:** Add the radian fractions first over a common denominator, then convert the single total with $\\times\\dfrac{180}{\\pi}$. Converting before adding multiplies the chance of error.",
  skills: ["radians", "angle-arithmetic", "geometry"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $h(x) = x^2 - 5x$, what is the value of $h(-4)$?",
  choices: [
    // distractor: both sign errors at once: -16 - 20
    { id: "A", text: "$-36$" },
    // distractor: sign slip on the -5x term: 16 - 20
    { id: "B", text: "$-4$" },
    // distractor: writes (-4)^2 = -16, getting -16 + 20
    { id: "C", text: "$4$" },
    { id: "D", text: "$36$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $h(-4) = (-4)^2 - 5(-4) = 16 + 20 = 36$.\n\n**The Full Solution:**\nStep 1: Substitute $x = -4$ into $h(x) = x^2 - 5x$.\nStep 2: $(-4)^2 = 16$, and $-5(-4) = +20$ — a negative times a negative is positive.\nStep 3: $h(-4) = 16 + 20 = 36$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-36$): makes both sign errors at once: $-16 - 20$.\n* Choice B ($-4$): treats $-5(-4)$ as $-20$, computing $16 - 20$.\n* Choice C ($4$): treats $(-4)^2$ as $-16$, computing $-16 + 20$.\n\n**Test Day Takeaway:** With a negative input, wrap it in parentheses before substituting: $(-a)^2 = +a^2$, and subtracting a negative adds.",
  skills: ["function-interpretation", "quadratic-equations"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A rectangular ice rink has a perimeter of $66$ meters. The length of the rink is $7$ meters less than $3$ times its width. What is the width of the rink, in meters?",
  correctAnswer: "10",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~20s):** Let $w$ be the width and $3w - 7$ the length. Perimeter $2(\\ell + w) = 66$ gives $\\ell + w = 33$, so $(3w - 7) + w = 33 \\Rightarrow 4w = 40 \\Rightarrow w = 10$.\n\n**The Full Solution:**\nStep 1: Let $w =$ width and $\\ell = 3w - 7 =$ length.\nStep 2: $2\\ell + 2w = 66$, so $\\ell + w = 33$.\nStep 3: Substitute $\\ell$: $(3w - 7) + w = 33 \\Rightarrow 4w - 7 = 33 \\Rightarrow 4w = 40 \\Rightarrow w = 10$.\nStep 4: Check: $\\ell = 3(10) - 7 = 23$, and perimeter $= 2(23) + 2(10) = 46 + 20 = 66$. $\\checkmark$\n\n**Common Mistakes:** Reporting $23$ (the length) instead of the width; writing $3w - 7 = 66$ and skipping the perimeter formula entirely.\n\n**Test Day Takeaway:** Define variables, write the perimeter equation, substitute, solve — then re-read which dimension was asked for.",
  skills: ["word-problems", "solving-equations"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Consider the two equations $y = -8$ and $y = -3(x + 2)^2 - 8$. If these equations are graphed in the $xy$-plane, at how many points do the two graphs intersect?",
  choices: [
    // distractor: assumes a line above/below a parabola never touches it
    { id: "A", text: "Zero" },
    { id: "B", text: "Exactly one" },
    // distractor: assumes a horizontal line through a parabola always meets it twice
    { id: "C", text: "Exactly two" },
    // distractor: confuses a shared point with identical graphs
    { id: "D", text: "Infinitely many" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Line-Parabola Intersection Count**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The parabola $y = -3(x+2)^2 - 8$ opens downward with vertex $(-2, -8)$, so its maximum output is exactly $-8$. The line $y = -8$ sits precisely at that maximum, touching the curve only at the vertex — one intersection.\n\n**The Full Solution:**\nStep 1: In vertex form, $a = -3 < 0$, so the parabola opens down and its greatest value is the vertex $y$-value, $-8$, reached only at $x = -2$.\nStep 2: The line requires $y = -8$, which the parabola produces at exactly one input.\nStep 3: Confirm algebraically: $-3(x+2)^2 - 8 = -8 \\Rightarrow -3(x+2)^2 = 0 \\Rightarrow x = -2$. One solution, so one intersection point: $(-2, -8)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (Zero): would require the line to sit ABOVE the maximum; here it sits exactly at it.\n* Choice C (Exactly two): holds only when a horizontal line is strictly below the maximum of a downward parabola.\n* Choice D (Infinitely many): would require identical graphs, not a line and a parabola.\n\n**Test Day Takeaway:** Compare a horizontal line's height to the vertex value: below the max $\\Rightarrow$ two points, exactly at the max $\\Rightarrow$ one (tangent), above $\\Rightarrow$ zero.",
  skills: ["nonlinear-functions", "quadratic-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The linear function $h$ is defined by $h(x) = b + 7x$, where $b$ is a constant. If $h(2c - 3) = \\dfrac{4c}{3}$, where $c$ is a constant, which of the following expressions is equal to $b$?",
  choices: [
    { id: "A", text: "$-\\dfrac{38c}{3} + 21$" },
    // distractor: moves the 21 with the wrong sign
    { id: "B", text: "$-\\dfrac{38c}{3} - 21$" },
    // distractor: treats 4c/3 as 4c when combining, getting 4c - 14c = -10c
    { id: "C", text: "$-10c + 21$" },
    // distractor: distributes the 7 only to the -3, dropping the 14c term
    { id: "D", text: "$\\dfrac{4c}{3} + 21$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Linear Function Interpretation**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** $h(2c - 3) = b + 7(2c - 3) = b + 14c - 21$. Set equal to $\\dfrac{4c}{3}$ and solve: $b = \\dfrac{4c}{3} - 14c + 21 = -\\dfrac{38c}{3} + 21$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 2c - 3$ into $h(x) = b + 7x$: $h(2c - 3) = b + 7(2c - 3) = b + 14c - 21$.\nStep 2: Set equal to the given value: $b + 14c - 21 = \\dfrac{4c}{3}$.\nStep 3: Isolate $b$: $b = \\dfrac{4c}{3} - 14c + 21$.\nStep 4: Combine the $c$-terms over denominator $3$: $14c = \\dfrac{42c}{3}$, so $\\dfrac{4c}{3} - \\dfrac{42c}{3} = -\\dfrac{38c}{3}$. Thus $b = -\\dfrac{38c}{3} + 21$.\n\n**Why the wrong answers are tempting:**\n* Choice B: moves the $-21$ across the equation with the wrong sign.\n* Choice C: treats $\\dfrac{4c}{3}$ as $4c$ while combining, getting $4c - 14c = -10c$.\n* Choice D: distributes the $7$ only to the $-3$, dropping the $14c$ term entirely.\n\n**Test Day Takeaway:** Substitute the FULL input expression, distribute to every term, then combine like terms over a common denominator before matching answer forms.",
  skills: ["linear-functions", "function-interpretation", "algebraic-manipulation"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The height above the ground of a stream of water from a fountain nozzle is modeled by $h(d) = -2(d - 6)^2 + 9$, where $h(d)$ is the height, in feet, of the stream at a horizontal distance of $d$ feet from the nozzle. Which of the following is the best interpretation of the vertex of the graph of $h(d)$ in the $dh$-plane?",
  choices: [
    // distractor: wrong direction — calls the maximum a minimum
    { id: "A", text: "The stream reaches a minimum height of $9$ feet at a horizontal distance of $6$ feet from the nozzle." },
    // distractor: swaps the coordinates of the vertex
    { id: "B", text: "The stream reaches a maximum height of $6$ feet at a horizontal distance of $9$ feet from the nozzle." },
    { id: "C", text: "The stream reaches a maximum height of $9$ feet at a horizontal distance of $6$ feet from the nozzle." },
    // distractor: uses the leading coefficient's magnitude as the distance
    { id: "D", text: "The stream reaches a maximum height of $9$ feet at a horizontal distance of $2$ feet from the nozzle." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Vertex Form of a Quadratic**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The vertex of $h(d) = -2(d - 6)^2 + 9$ is $(6, 9)$, and $a = -2 < 0$ makes it a maximum: greatest height $9$ feet at distance $6$ feet.\n\n**The Full Solution:**\nStep 1: Vertex form $a(d - d_0)^2 + k$ has vertex $(d_0, k) = (6, 9)$.\nStep 2: Since $a = -2 < 0$, the parabola opens down, so the vertex is the maximum: the stream's greatest height is $9$ feet, reached $6$ feet from the nozzle.\nStep 3: Check: $h(6) = 0 + 9 = 9$, and $h(5) = -2 + 9 = 7 < 9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: calls the vertex a minimum, but $a < 0$ makes it a maximum.\n* Choice B: swaps the coordinates, reading height $6$ at distance $9$.\n* Choice D: uses the leading coefficient's magnitude $2$ as the distance.\n\n**Test Day Takeaway:** Vertex form $a(x - h_0)^2 + k$ has vertex $(h_0, k)$ — input first, output second — and the sign of $a$ decides max versus min. The leading coefficient is a steepness, not a location.",
  skills: ["function-interpretation", "quadratic-equations"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In right triangle $ABC$ shown, angle $C$ is the right angle. If $\\sin(A) = \\dfrac{35}{37}$, what is the value of $\\cos(B)$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["A", "C", "B"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: gives cos(A) = 12/37, the cosine of the wrong angle
    { id: "A", text: "$\\dfrac{12}{37}$" },
    { id: "B", text: "$\\dfrac{35}{37}$" },
    // distractor: inverts the sine ratio
    { id: "C", text: "$\\dfrac{37}{35}$" },
    // distractor: gives tan(A) = 35/12, mixing the two legs
    { id: "D", text: "$\\dfrac{35}{12}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In a right triangle the acute angles are complementary ($A + B = 90^\\circ$), so $\\cos(B) = \\sin(A) = \\dfrac{35}{37}$.\n\n**The Full Solution:**\nStep 1: With the right angle at $C$, angles $A$ and $B$ satisfy $A + B = 90^\\circ$, so $B = 90^\\circ - A$.\nStep 2: The co-function identity gives $\\cos(B) = \\cos(90^\\circ - A) = \\sin(A) = \\dfrac{35}{37}$.\nStep 3: Side check: $\\sin(A) = \\dfrac{BC}{AB} = \\dfrac{35}{37}$, so $AC = \\sqrt{37^2 - 35^2} = \\sqrt{144} = 12$. For angle $B$, the adjacent leg is $BC = 35$ and the hypotenuse is $AB = 37$, so $\\cos(B) = \\dfrac{35}{37}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{12}{37}$): gives $\\cos(A)$ — the cosine of the OTHER acute angle.\n* Choice C ($\\dfrac{37}{35}$): inverts the sine ratio; a sine or cosine can never exceed $1$.\n* Choice D ($\\dfrac{35}{12}$): gives $\\tan(A)$, mixing the two legs.\n\n**Test Day Takeaway:** In a right triangle, $\\sin(A) = \\cos(B)$ because the two acute angles are complementary — no side lengths needed.",
  skills: ["trigonometry", "triangles", "right-triangles"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The dot plot shows the number of service calls a technician completed on each of $14$ workdays. What is the range of the numbers of service calls for these $14$ workdays?",
  diagram: {
    type: "dotPlot",
    params: {
      data: [
        { value: 2, count: 1 },
        { value: 3, count: 2 },
        { value: 4, count: 3 },
        { value: 5, count: 4 },
        { value: 6, count: 2 },
        { value: 8, count: 1 },
        { value: 9, count: 1 }
      ],
      xMin: 1, xMax: 10,
      xLabel: "Service calls per day"
    }
  },
  choices: [
    { id: "A", text: "$7$" },
    // distractor: reports the greatest value, forgetting to subtract the least
    { id: "B", text: "$9$" },
    // distractor: adds the max and min instead of subtracting
    { id: "C", text: "$11$" },
    // distractor: reports the number of workdays (total dots)
    { id: "D", text: "$14$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Range $=$ max $-$ min. The dots run from $2$ to $9$, so range $= 9 - 2 = 7$.\n\n**The Full Solution:**\nStep 1: The range is the greatest value minus the least value in the data set.\nStep 2: From the dot plot, the least number of calls is $2$ and the greatest is $9$.\nStep 3: Range $= 9 - 2 = 7$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): reports the maximum without subtracting the minimum.\n* Choice C ($11$): ADDS the max and min ($9 + 2$) instead of subtracting.\n* Choice D ($14$): counts the dots — the number of workdays, not the spread of the values.\n\n**Test Day Takeaway:** On a dot plot, range uses only the leftmost and rightmost dots: max $-$ min. Dot counts are frequencies, not values.",
  skills: ["statistics", "range"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The two solutions of the equation $x^2 - px + 70 = 0$ are positive integers that differ by $3$. What is the value of the constant $p$?",
  choices: [
    // distractor: reports the given difference instead of the sum of the roots
    { id: "A", text: "$3$" },
    // distractor: reports the larger root instead of p
    { id: "B", text: "$10$" },
    { id: "C", text: "$17$" },
    // distractor: uses the pair (2, 35), which multiplies to 70 but ignores the difference condition
    { id: "D", text: "$37$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** By Vieta's formulas the roots multiply to $70$ and add to $p$. The factor pair of $70$ that differs by $3$ is $7$ and $10$, so $p = 7 + 10 = 17$.\n\n**The Full Solution:**\nStep 1: For $x^2 - px + 70 = 0$ with roots $r$ and $s$: sum $r + s = p$, product $rs = 70$.\nStep 2: Positive integer factor pairs of $70$: $(1, 70), (2, 35), (5, 14), (7, 10)$. The pair differing by $3$ is $(7, 10)$.\nStep 3: So $p = 7 + 10 = 17$.\nStep 4: Check: $x^2 - 17x + 70 = (x - 7)(x - 10) = 0$ has roots $7$ and $10$, which differ by $3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports the given difference instead of the sum.\n* Choice B ($10$): reports the larger root itself, not $p$.\n* Choice D ($37$): uses the pair $(2, 35)$, which multiplies to $70$ but differs by $33$.\n\n**Test Day Takeaway:** For $x^2 - px + q = 0$, the roots add to $p$ and multiply to $q$. List factor pairs of $q$, then apply the extra condition to pick the right pair.",
  skills: ["quadratic-equations", "factoring"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Last year, $8{,}200$ runners finished a city marathon. This year, the number of finishers was $40\\%$ greater than last year. How many runners finished the marathon this year?",
  choices: [
    // distractor: reports only the increase (0.40 * 8,200), stopping one step early
    { id: "A", text: "$3{,}280$" },
    // distractor: treats "greater" as "less," computing 8,200 * 0.60
    { id: "B", text: "$4{,}920$" },
    // distractor: reads 40% as 4% (decimal slip): 8,200 * 1.04
    { id: "C", text: "$8{,}528$" },
    { id: "D", text: "$11{,}480$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Percent Increase**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** \"$40\\%$ greater\" means multiply by $1.40$: $8{,}200 \\times 1.40 = 11{,}480$.\n\n**The Full Solution:**\nStep 1: A value $40\\%$ greater than the original is $100\\% + 40\\% = 140\\%$ of it.\nStep 2: $8{,}200 \\times 1.40 = 11{,}480$ finishers.\nStep 3: Equivalently, the increase is $0.40 \\times 8{,}200 = 3{,}280$; added to the original: $8{,}200 + 3{,}280 = 11{,}480$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3{,}280$): reports only the increase without adding it to the original.\n* Choice B ($4{,}920$): treats \"greater\" as \"less,\" computing $8{,}200 \\times 0.60$.\n* Choice C ($8{,}528$): reads $40\\%$ as $4\\%$, computing $8{,}200 \\times 1.04$.\n\n**Test Day Takeaway:** \"$p\\%$ greater than\" means multiply by $1 + \\dfrac{p}{100}$. The bare percent times the base gives only the increase, not the new total.",
  skills: ["percents", "word-problems"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $x^2 + y^2 - 10x + 2y + 6 = 0$ represents a circle in the $xy$-plane. What is the radius of the circle?",
  choices: [
    // distractor: takes the square root of the bare constant 6
    { id: "A", text: "$\\sqrt{6}$" },
    // distractor: completes only the x-square, getting r^2 = 25 - 6 = 19
    { id: "B", text: "$\\sqrt{19}$" },
    { id: "C", text: "$2\\sqrt{5}$" },
    // distractor: reports r^2 = 20 instead of taking the square root
    { id: "D", text: "$20$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Complete the Square — Non-Square Radius**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Complete both squares: $(x - 5)^2 + (y + 1)^2 = 25 + 1 - 6 = 20$, so $r = \\sqrt{20} = 2\\sqrt{5}$.\n\n**The Full Solution:**\nStep 1: Group terms and move the constant: $(x^2 - 10x) + (y^2 + 2y) = -6$.\nStep 2: Complete each square. Half of $-10$ is $-5$, and $(-5)^2 = 25$, giving $(x - 5)^2$. Half of $2$ is $1$, and $1^2 = 1$, giving $(y + 1)^2$. Add $25$ and $1$ to the right side.\nStep 3: $(x - 5)^2 + (y + 1)^2 = -6 + 25 + 1 = 20$, so $r^2 = 20$.\nStep 4: $r = \\sqrt{20} = \\sqrt{4 \\cdot 5} = 2\\sqrt{5}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\sqrt{6}$): takes the square root of the bare constant in the original equation instead of completing the squares.\n* Choice B ($\\sqrt{19}$): completes only the $x$-square, landing on $r^2 = 25 - 6 = 19$.\n* Choice D ($20$): reports $r^2$ instead of the radius $r = \\sqrt{20}$.\n\n**Test Day Takeaway:** Complete BOTH squares, add every completing constant to the right side, and finish by taking the square root — simplify $\\sqrt{20}$ to $2\\sqrt{5}$.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A 3D printer extrudes $24$ grams of filament every $15$ minutes, at a constant rate. At this rate, how many grams of filament does the printer extrude during a continuous print job that lasts $4.5$ hours?",
  choices: [
    // distractor: uses 4.5 (hours) directly without converting to minutes: 24 * 4.5 / 15
    { id: "A", text: "$7.2$" },
    // distractor: inverts the rate ratio: (15/24) * 270
    { id: "B", text: "$168.75$" },
    // distractor: reports the job length in minutes instead of the filament mass
    { id: "C", text: "$270$" },
    { id: "D", text: "$432$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The rate is $\\dfrac{24}{15} = 1.6$ grams per minute. A $4.5$-hour job is $270$ minutes, so $270 \\times 1.6 = 432$ grams.\n\n**The Full Solution:**\nStep 1: Match units first. The rate is per minute, so convert the job length: $4.5$ hours $= 4.5 \\times 60 = 270$ minutes.\nStep 2: Set up a proportion of grams to minutes: $\\dfrac{24}{15} = \\dfrac{x}{270}$.\nStep 3: Cross-multiply: $15x = 24 \\times 270 = 6{,}480$, so $x = \\dfrac{6{,}480}{15} = 432$ grams.\n\n**Why the wrong answers are tempting:**\n* Choice A ($7.2$): skips the unit conversion, using $4.5$ hours as if it were minutes.\n* Choice B ($168.75$): inverts the rate, computing $\\dfrac{15}{24} \\times 270$.\n* Choice C ($270$): reports the job length in minutes instead of the filament mass.\n\n**Test Day Takeaway:** Match units BEFORE building a proportion — convert hours to minutes first, then scale the rate.",
  skills: ["ratios", "proportions", "unit-conversion"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A model estimates that at the end of each year from $2019$ to $2024$, the area of a pond covered by water hyacinth was $200\\%$ more than the area covered at the end of the previous year. The model estimates that at the end of $2020$, the covered area was $45$ square meters. Which equation represents this model, where $A$ is the covered area, in square meters, $t$ years after the end of $2019$ and $t \\le 5$?",
  choices: [
    // distractor: reads "200% more" as a growth factor of 2 instead of 3, but does back-solve the initial value
    { id: "A", text: "$A = 15(2)^t$" },
    { id: "B", text: "$A = 15(3)^t$" },
    // distractor: misreads the factor as 2 AND anchors the 2020 value at t = 0
    { id: "C", text: "$A = 45(2)^t$" },
    // distractor: uses the right factor 3 but anchors the 2020 value 45 at t = 0
    { id: "D", text: "$A = 45(3)^t$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** \"$200\\%$ more\" means a growth factor of $1 + 2 = 3$. The end of $2020$ is $t = 1$ with $A = 45$, so the initial area is $\\dfrac{45}{3} = 15$, giving $A = 15(3)^t$.\n\n**The Full Solution:**\nStep 1: Convert the rate to a factor. \"$200\\%$ more\" means $100\\% + 200\\% = 300\\%$ of the previous value — a factor of $3$ per year. The model is $A = A_0(3)^t$.\nStep 2: Anchor the data point. Since $t$ counts years after the end of $2019$, the end of $2020$ is $t = 1$: $45 = A_0 \\cdot 3$.\nStep 3: Solve: $A_0 = 15$, so $A = 15(3)^t$. Check: at $t = 1$, $A = 15(3) = 45$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($15(2)^t$): back-solves the initial value but misreads \"$200\\%$ more\" as doubling.\n* Choice C ($45(2)^t$): makes both errors — factor $2$ and the $2020$ value anchored at $t = 0$.\n* Choice D ($45(3)^t$): uses the right factor but treats the $2020$ area as the $t = 0$ value, ignoring that the end of $2020$ is $t = 1$.\n\n**Test Day Takeaway:** \"$p\\%$ more\" is a factor of $1 + \\dfrac{p}{100}$ — so \"$200\\%$ more\" TRIPLES. Then anchor $t = 0$: if the given point sits at $t = 1$, divide it by the factor.",
  skills: ["exponential-functions", "exponential-growth"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the system of equations below, $a$ is a constant.\n\n$\\dfrac{5}{6}x - \\dfrac{1}{3}y = 7$\n$ax - 4y = 9$\n\nIf the system has no solution, what is the value of $a$?",
  choices: [
    // distractor: uses the bare y-coefficient 4 as the ratio: a = (5/6)(4)
    { id: "A", text: "$\\dfrac{10}{3}$" },
    // distractor: finds the ratio 12 but scales it by 1/2 instead of 5/6
    { id: "B", text: "$6$" },
    { id: "C", text: "$10$" },
    // distractor: stops at the coefficient ratio 12 without scaling by 5/6
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** No solution means parallel lines: equal coefficient ratios on $x$ and $y$. The $y$-ratio is $\\dfrac{-4}{-\\frac{1}{3}} = 12$, so $\\dfrac{a}{\\frac{5}{6}} = 12$, giving $a = 12 \\cdot \\dfrac{5}{6} = 10$.\n\n**The Full Solution:**\nStep 1: A linear system has no solution exactly when the lines are parallel — the $x$- and $y$-coefficients are in the same ratio but the constants are not.\nStep 2: Compare the $y$-coefficients $-\\dfrac{1}{3}$ and $-4$: their ratio is $\\dfrac{-4}{-\\frac{1}{3}} = 12$.\nStep 3: Set the $x$-coefficient ratio equal to it: $\\dfrac{a}{\\frac{5}{6}} = 12 \\Rightarrow a = 12 \\cdot \\dfrac{5}{6} = 10$.\nStep 4: Confirm \"no solution,\" not \"infinitely many\": multiplying the first equation by $12$ gives $10x - 4y = 84$, but the second says $10x - 4y = 9$. Since $84 \\neq 9$, the lines are parallel and distinct. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{10}{3}$): uses the bare $y$-coefficient $4$ as the ratio, computing $a = \\dfrac{5}{6} \\cdot 4$.\n* Choice B ($6$): finds the ratio $12$ but scales it by $\\dfrac{1}{2}$ instead of $\\dfrac{5}{6}$.\n* Choice D ($12$): stops at the coefficient ratio without multiplying back by $\\dfrac{5}{6}$.\n\n**Test Day Takeaway:** No solution $=$ matching coefficient ratios on $x$ and $y$ (parallel lines) with a constant that breaks the proportion. Solve the ratio equation all the way through.",
  skills: ["systems-of-equations", "linear-functions"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Line $\\ell$ passes through the points $(-3, 8)$ and $(5, -8)$. Line $m$ is perpendicular to line $\\ell$ and can be written in the form $kx + 6y = 20$, where $k$ is a constant. What is the value of $k$?",
  choices: [
    // distractor: uses the slope of line l itself (-2) as the target AND flips a sign
    { id: "A", text: "$-12$" },
    { id: "B", text: "$-3$" },
    // distractor: sign slip in the standard-form slope -k/6
    { id: "C", text: "$3$" },
    // distractor: sets -k/6 equal to l's own slope -2 instead of the perpendicular slope
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Slope of $\\ell = \\dfrac{-8 - 8}{5 - (-3)} = \\dfrac{-16}{8} = -2$, so the perpendicular slope is $\\dfrac{1}{2}$. In $kx + 6y = 20$ the slope is $-\\dfrac{k}{6}$. Set $-\\dfrac{k}{6} = \\dfrac{1}{2} \\Rightarrow k = -3$.\n\n**The Full Solution:**\nStep 1: Find the slope of $\\ell$: $m_\\ell = \\dfrac{-8 - 8}{5 - (-3)} = \\dfrac{-16}{8} = -2$.\nStep 2: A perpendicular line has the negative reciprocal slope: $m = -\\dfrac{1}{-2} = \\dfrac{1}{2}$.\nStep 3: For $Ax + By = C$ the slope is $-\\dfrac{A}{B}$. Here $A = k$ and $B = 6$, so the slope of $m$ is $-\\dfrac{k}{6}$.\nStep 4: Set $-\\dfrac{k}{6} = \\dfrac{1}{2}$: $k = -3$. Check: $-3x + 6y = 20 \\Rightarrow y = \\dfrac{1}{2}x + \\dfrac{10}{3}$, and $\\left(\\dfrac{1}{2}\\right)(-2) = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): targets $\\ell$'s own slope and flips a sign along the way.\n* Choice C ($3$): a sign slip in the standard-form slope formula $-\\dfrac{k}{6}$.\n* Choice D ($12$): sets $-\\dfrac{k}{6}$ equal to $-2$ — parallel to $\\ell$, not perpendicular.\n\n**Test Day Takeaway:** Standard-form slope is $-\\dfrac{A}{B}$, and perpendicular slopes are negative reciprocals — their product must equal $-1$.",
  skills: ["linear-functions", "perpendicular-lines"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A cylindrical vase with a radius of $5$ inches and a height of $20$ inches is shipped in the smallest rectangular box that can contain it — a box with a square base of side $10$ inches and a height of $20$ inches. Packing foam fills all of the space inside the box that the vase does not occupy. To the nearest cubic inch, what is the volume of the packing foam?",
  choices: [
    { id: "A", text: "$429$" },
    // distractor: reports the vase's volume instead of the leftover space
    { id: "B", text: "$1{,}571$" },
    // distractor: reports the full box volume without subtracting the vase
    { id: "C", text: "$2{,}000$" },
    // distractor: adds the vase volume to the box instead of subtracting
    { id: "D", text: "$3{,}571$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Inscribed Solid Volume**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Box: $10 \\times 10 \\times 20 = 2{,}000$. Vase: $\\pi(5)^2(20) = 500\\pi \\approx 1{,}571$. Foam $= 2{,}000 - 1{,}571 = 429$ cubic inches.\n\n**The Full Solution:**\nStep 1: Box volume: $V_{\\text{box}} = 10 \\cdot 10 \\cdot 20 = 2{,}000$ cubic inches. (The square base's side equals the vase's diameter, $2 \\cdot 5 = 10$, and the heights match — the smallest such box.)\nStep 2: Vase volume: $V_{\\text{cyl}} = \\pi r^2 h = \\pi (5)^2 (20) = 500\\pi \\approx 1{,}570.80$.\nStep 3: Foam $=$ box $-$ vase: $2{,}000 - 1{,}570.80 \\approx 429.20$, which rounds to $429$ cubic inches.\n\n**Why the wrong answers are tempting:**\n* Choice B ($1{,}571$): reports the vase's own volume instead of the leftover space.\n* Choice C ($2{,}000$): reports the full box volume without removing the vase.\n* Choice D ($3{,}571$): ADDS the vase volume to the box instead of subtracting it.\n\n**Test Day Takeaway:** \"Space around an inscribed solid\" $=$ outer volume $-$ inner volume. The tight box around a cylinder has base side $= 2r$ and height $= h$.",
  skills: ["volume-cylinder", "volume-prism"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  question: "The equation $3x^2 - bx + 27 = 0$ has no real solutions, where $b$ is a positive integer. What is the greatest possible value of $b$?",
  choices: [
    // distractor: steps one value further below the boundary than necessary
    { id: "A", text: "$16$" },
    { id: "B", text: "$17$" },
    // distractor: allows discriminant = 0, which gives exactly one real solution
    { id: "C", text: "$18$" },
    // distractor: reports b^2 = 324 instead of b
    { id: "D", text: "$324$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** No real solutions means discriminant $< 0$: $b^2 - 4(3)(27) < 0 \\Rightarrow b^2 < 324 \\Rightarrow b < 18$. The greatest positive integer is $b = 17$.\n\n**The Full Solution:**\nStep 1: A quadratic has no real solutions when its discriminant is negative: $b^2 - 4ac < 0$.\nStep 2: Substitute $a = 3$, $c = 27$: $b^2 - 4(3)(27) < 0 \\Rightarrow b^2 < 324$.\nStep 3: So $-18 < b < 18$. Since $b$ is a positive integer and the inequality is STRICT, the greatest value is $b = 17$.\n\nCheck: at $b = 17$ the discriminant is $289 - 324 = -35 < 0$; at $b = 18$ it is $0$, which gives one real solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($16$): retreats one value further below the boundary than needed.\n* Choice C ($18$): allows the discriminant to equal $0$ — but that gives exactly ONE real solution, not none.\n* Choice D ($324$): reports $b^2$ instead of $b$.\n\n**Test Day Takeaway:** \"No real solutions\" means discriminant $< 0$ (strict); \"exactly one\" means $= 0$. Check the boundary value before answering.",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "An energy analyst models the total installed capacity of a region's solar farms with the function $M(t) = 30(1.06)^{(3/8)t}$, where $M(t)$ is the capacity, in megawatts, $t$ years after the start of a monitoring program. According to the model, the capacity is predicted to increase by $6\\%$ every $n$ months. What is the value of $n$?",
  choices: [
    // distractor: treats 3/8 of a year as the growth period: (3/8)(12) = 4.5
    { id: "A", text: "$4.5$" },
    // distractor: ignores the (3/8) exponent factor and assumes 6% once per 12-month year
    { id: "B", text: "$12$" },
    { id: "C", text: "$32$" },
    // distractor: reads the denominator 8 as a number of years and converts: 8 * 12
    { id: "D", text: "$96$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** One factor of $1.06$ is applied each time the exponent $\\dfrac{3}{8}t$ increases by $1$, which happens when $t$ increases by $\\dfrac{8}{3}$ year $= \\dfrac{8}{3} \\cdot 12 = 32$ months. So $n = 32$.\n\n**The Full Solution:**\nStep 1: Each factor of $1.06$ multiplies the capacity by $1 + 0.06$ — a $6\\%$ increase. One such factor appears whenever the exponent $\\dfrac{3}{8}t$ grows by a whole unit.\nStep 2: Solve for that interval: $\\dfrac{3}{8}\\,\\Delta t = 1 \\Rightarrow \\Delta t = \\dfrac{8}{3}$ year.\nStep 3: Convert to months: $\\dfrac{8}{3} \\cdot 12 = 32$ months, so $n = 32$. Check: over $32$ months, the exponent rises by $\\dfrac{3}{8} \\cdot \\dfrac{8}{3} = 1$, multiplying the capacity by exactly $1.06$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4.5$): treats $\\dfrac{3}{8}$ of a year as the period, computing $\\dfrac{3}{8} \\cdot 12$ instead of taking the reciprocal first.\n* Choice B ($12$): assumes the $6\\%$ applies once per calendar year, as if the exponent were simply $t$.\n* Choice D ($96$): reads the denominator $8$ as a number of years and converts $8 \\cdot 12$.\n\n**Test Day Takeaway:** For $(1+r)^{kt}$, the quantity grows by one factor of $(1+r)$ each time $t$ increases by $\\dfrac{1}{k}$. Take the reciprocal of the exponent's coefficient first, then convert units.",
  skills: ["exponential-functions", "function-interpretation"]
}
      ]
    }
  ]
};

export default practiceTest2;
