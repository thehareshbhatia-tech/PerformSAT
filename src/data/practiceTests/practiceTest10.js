// Practice Test 10 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Official-calibration recreation (2026-09-01): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md).
// Slot metadata (id/type/difficulty/band/skills/pattern) FROZEN from the prior
// build: M1 5E/9M/8H; M2 wavy flow — easy at 1,4,20; medium at 2,3,6,7,12,15,16;
// hard at 5,8,9,10,11,13,14,17,18,19,21,22 (3E/7M/12H, band-6/7 ceilings).
// Figure density at official ~20%: M1 carries 4 diagram items (Q5 dotPlot,
// Q6 twoWayTable, Q9 rightTriangle, Q13 scatterplot), M2 carries 4 (Q2
// twoWayTable, Q3 scatterplot, Q9 rationalFunction, Q13 quadraticVertex).
// Numeric MC choices sorted ascending (official convention). Scenario palette:
// commercial bakery ovens, county road-salt supplies, movie-theater concessions,
// hardware-fastener inventory, laser-tag arenas, wheelchair/loading ramps,
// soccer-field irrigation, campus shuttle routes, cider pressing,
// plant-nursery seedling trays.

export const practiceTest10 = {
  id: "practice-test-10",
  title: "Practice Test 10",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
// Practice Test 10 — Math Module 1
// 22 questions: Easy (1-5), Medium (6-14), Hard (15-22)

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A commercial bakery charges restaurants a flat delivery fee of $\\$6.50$ plus $\\$3.20$ per tray of dinner rolls. The total charge for an order of $t$ trays is $\\$22.50$. What is the total charge, in dollars, for an order that has $4$ more trays (with one delivery fee)?",
  choices: [
    // distractor: adds the count 4 as dollars instead of 4 * $3.20 = $12.80
    { id: "A", text: "$\\$26.50$" },
    { id: "B", text: "$\\$35.30$" },
    // distractor: uses the $6.50 delivery fee as the per-tray price for the extra trays
    { id: "C", text: "$\\$48.50$" },
    // distractor: adds the two rates ($6.50 + $3.20 = $9.70) and uses that as the per-tray price
    { id: "D", text: "$\\$61.30$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Each extra tray adds $\\$3.20$, and the delivery fee stays. Four more trays add $4 \\cdot \\$3.20 = \\$12.80$: new total $= \\$22.50 + \\$12.80 = \\$35.30$.\n\n**The Full Solution:**\nStep 1: The delivery fee is charged once per order, so it does not change when the order grows.\nStep 2: Only the per-tray part grows. Four more trays cost $4 \\times \\$3.20 = \\$12.80$.\nStep 3: Add to the original total: $\\$22.50 + \\$12.80 = \\$35.30$.\n\nYou never need to find $t$ — the shift only touches the per-tray term.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$26.50$): adds $\\$4$ directly, as if each extra tray cost $\\$1$.\n* Choice C ($\\$48.50$): uses the flat fee $\\$6.50$ as the per-tray rate: $\\$22.50 + 4 \\cdot \\$6.50$.\n* Choice D ($\\$61.30$): adds the two rates ($\\$6.50 + \\$3.20 = \\$9.70$) and charges that per extra tray.\n\n**Test Day Takeaway:** In a linear cost = (rate $\\times$ quantity) + fixed fee, changing the quantity moves only the rate-times-quantity term. The fixed fee never shifts.",
  skills: ["word-problems", "linear-functions"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The function $s(w) = 84 - 6w$ models the number of tons of road salt remaining in a county storage dome $w$ weeks after the start of winter. What does the number $6$ represent in this context?",
  choices: [
    { id: "A", text: "The county uses $6$ tons of road salt each week." },
    // distractor: wrong base — confuses the slope (6) with the starting amount (84)
    { id: "B", text: "The storage dome holds $6$ tons of road salt at the start of winter." },
    // distractor: treats 6 as a time value rather than a rate of change
    { id: "C", text: "The storage dome is empty $6$ weeks after the start of winter." },
    // distractor: inverts the rate (6 weeks per ton instead of 6 tons per week)
    { id: "D", text: "The county needs $6$ weeks to use $1$ ton of road salt." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** In $s(w) = 84 - 6w$, the coefficient of $w$ is the rate of change. The $-6$ means $6$ tons of salt leave the dome each week.\n\n**The Full Solution:**\nStep 1: The model has the form $s(w) = b + mw$ with intercept $b = 84$ and slope $m = -6$.\nStep 2: The slope is the change in tons per week. Since it is negative, the supply drops by $6$ tons every week — the county uses $6$ tons weekly.\n\n**Why the wrong answers are tempting:**\n* Choice B: confuses the slope with the starting amount — the initial supply is the $84$, not the $6$.\n* Choice C: treats $6$ as the time the dome empties; it actually empties at $w = \\frac{84}{6} = 14$ weeks.\n* Choice D: inverts the rate, reading $6$ as \"weeks per ton\" instead of \"tons per week.\"\n\n**Test Day Takeaway:** In $f(x) = b + mx$, the coefficient of the variable is the rate of change per unit; the constant is the starting value.",
  skills: ["function-interpretation", "linear-functions", "slope"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Three-tenths of the number $n$ is $27$. What is one-tenth of $n$?",
  choices: [
    { id: "A", text: "$9$" },
    // distractor: subtracts 9 from 27 — that is two-tenths of n, not one-tenth
    { id: "B", text: "$18$" },
    // distractor: multiplies 27 by 3 instead of dividing — scales the wrong way
    { id: "C", text: "$81$" },
    // distractor: stops one step early — solves for n and reports n itself
    { id: "D", text: "$90$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Three-tenths of $n$ is $27$, so ONE-tenth is a third of that: $27 \\div 3 = 9$. No need to find $n$ at all.\n\n**The Full Solution:**\nStep 1: Translate: $\\dfrac{3}{10}n = 27$.\nStep 2: One-tenth is one third of three-tenths, so $\\dfrac{1}{10}n = \\dfrac{27}{3} = 9$.\nStep 3: Alternatively, solve for $n$ first: $n = 27 \\cdot \\dfrac{10}{3} = 90$, and $\\dfrac{1}{10}(90) = 9$.\nCheck: $\\dfrac{3}{10}(90) = 27$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($18$): computes $27 - 9 = 18$, which is two-tenths of $n$, not one-tenth.\n* Choice C ($81$): multiplies $27$ by $3$ instead of dividing — scaling from three-tenths down to one-tenth means dividing by $3$.\n* Choice D ($90$): solves for $n$ correctly but reports $n$ instead of one-tenth of $n$.\n\n**Test Day Takeaway:** When tenths of the same number are involved, scale directly: one-tenth is a third of three-tenths. Answer the quantity asked, not the variable you solved for.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "At a movie theater, $25\\%$ of the tickets sold one Saturday were matinee tickets. If $120$ matinee tickets were sold that day, how many tickets were sold in total?",
  choices: [
    // distractor: applies inverse op — multiplies 120 · 0.25 instead of dividing
    { id: "A", text: "$30$" },
    // distractor: wrong base — divides by the complement 0.75 instead of 0.25
    { id: "B", text: "$160$" },
    { id: "C", text: "$480$" },
    // distractor: off-by-one — divides by 0.025 instead of 0.25 (decimal slip)
    { id: "D", text: "$4{,}800$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $0.25 \\times \\text{total} = 120$, so total $= \\dfrac{120}{0.25} = 480$.\n\n**The Full Solution:**\nStep 1: Let $T$ be the total number of tickets sold. Then $0.25 \\cdot T = 120$.\nStep 2: Divide both sides by $0.25$: $T = \\dfrac{120}{0.25} = 480$.\nCheck: $25\\%$ of $480 = 0.25 \\cdot 480 = 120$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($30$): multiplies $120 \\cdot 0.25$ instead of dividing — the inverse operation.\n* Choice B ($160$): divides by the complement $0.75$, as if $120$ were the non-matinee count.\n* Choice D ($4{,}800$): divides by $0.025$ instead of $0.25$ — a decimal-place slip.\n\n**Test Day Takeaway:** When a percent of an unknown whole is given, divide the part by the percent as a decimal to recover the whole.",
  skills: ["percents"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The dot plot shows the number of hinges in each of $7$ storage bins at a hardware supplier. If an eighth bin containing $16$ hinges is added to the data set, what is the median number of hinges for the $8$ bins?",
  diagram: {
    type: "dotPlot",
    params: {
      data: [
        { value: 6, count: 1 },
        { value: 8, count: 2 },
        { value: 9, count: 1 },
        { value: 11, count: 2 },
        { value: 13, count: 1 }
      ],
      xMin: 5, xMax: 17,
      xLabel: "Hinges per bin"
    }
  },
  choices: [
    // distractor: stops one step early — gives the original median (9) without recomputing
    { id: "A", text: "$9$" },
    { id: "B", text: "$10$" },
    // distractor: applies inverse op — averages the minimum and maximum (6 and 16)
    { id: "C", text: "$11$" },
    // distractor: wrong base — picks the newly added value as the median
    { id: "D", text: "$16$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The $8$ ordered values are $6, 8, 8, 9, 11, 11, 13, 16$. With an even count, the median is the average of the $4$th and $5$th values: $\\dfrac{9 + 11}{2} = 10$.\n\n**The Full Solution:**\nStep 1: Read the $7$ values from the dot plot: $6, 8, 8, 9, 11, 11, 13$.\nStep 2: Add the new value $16$: $6, 8, 8, 9, 11, 11, 13, 16$ — already in order.\nStep 3: Eight values, so the median is the average of the two middle values (the $4$th and $5$th): $\\dfrac{9 + 11}{2} = 10$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): reports the original median of the $7$ bins without recomputing after the new bin was added.\n* Choice C ($11$): averages the minimum and maximum, $\\dfrac{6 + 16}{2}$, instead of the two middle values.\n* Choice D ($16$): mistakes the newly added value for the median.\n\n**Test Day Takeaway:** After a value is added, re-sort and recount. For an even count, the median is the average of the two central values.",
  skills: ["statistics"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table summarizes the $260$ games played at a laser-tag arena one weekend, classified by arena and by whether the game ended in a tiebreaker round. Based on the table, what fraction of the games that ended in a tiebreaker round were played in the Omega arena?",
  diagram: {
    type: "twoWayTable",
    params: {
      headers: ["", "Tiebreaker", "No tiebreaker", "Total"],
      rows: [
        ["Alpha arena", "45", "105", "150"],
        ["Omega arena", "30", "80", "110"],
        ["Total", "75", "185", "260"]
      ]
    }
  },
  choices: [
    // distractor: wrong base — uses 260 (the grand total) as the denominator
    { id: "A", text: "$\\dfrac{30}{260}$" },
    // distractor: wrong base — uses 110 (the Omega row total) as the denominator
    { id: "B", text: "$\\dfrac{30}{110}$" },
    { id: "C", text: "$\\dfrac{30}{75}$" },
    // distractor: off-by-one — uses the Alpha tiebreaker count (45) instead of Omega (30)
    { id: "D", text: "$\\dfrac{45}{75}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** \"Of the games that ended in a tiebreaker\" fixes the denominator at the Tiebreaker total, $75$. Omega tiebreakers $= 30$, so the fraction is $\\dfrac{30}{75}$.\n\n**The Full Solution:**\nStep 1: The phrase \"of the games that ended in a tiebreaker round\" restricts the group to the Tiebreaker column, whose total is $75$.\nStep 2: Within that column, the Omega-arena count is $30$.\nStep 3: The fraction is $\\dfrac{30}{75}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: uses the grand total $260$, ignoring the \"ended in a tiebreaker\" condition.\n* Choice B: uses $110$, the Omega row total — that conditions on the arena, not on the tiebreaker.\n* Choice D: keeps the right denominator but uses $45$, the Alpha tiebreakers, instead of $30$.\n\n**Test Day Takeaway:** In conditional probability, the words after \"of those that\" fix your denominator — pull only that group's total.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In a commercial bakery, a sourdough culture triples in mass every $6$ hours. If the initial mass of the culture is $150$ grams, which function $M$ models the mass, in grams, after $t$ hours?",
  choices: [
    // distractor: applies inverse op — uses linear growth instead of exponential
    { id: "A", text: "$M(t) = 150 + 3t$" },
    // distractor: applies inverse op — uses 6t instead of t/6 in the exponent
    { id: "B", text: "$M(t) = 150(3)^{6t}$" },
    // distractor: wrong base — swaps the tripling factor (3) and the period (6)
    { id: "C", text: "$M(t) = 150(6)^{\\frac{t}{3}}$" },
    { id: "D", text: "$M(t) = 150(3)^{\\frac{t}{6}}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** \"Triples\" means base $3$; \"every $6$ hours\" means the exponent equals $1$ at $t = 6$, so it is $\\dfrac{t}{6}$: $M(t) = 150(3)^{\\frac{t}{6}}$.\n\n**The Full Solution:**\nStep 1: The general model is $M(t) = M_0 \\cdot b^{\\frac{t}{d}}$, with starting mass $M_0 = 150$, multiplier $b = 3$, and period $d = 6$ hours.\nStep 2: Substitute: $M(t) = 150(3)^{\\frac{t}{6}}$.\nCheck: at $t = 6$, $M = 150(3)^1 = 450$; at $t = 12$, $M = 150(3)^2 = 1350$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: models linear growth, $150 + 3t$, when the mass multiplies.\n* Choice B: uses exponent $6t$ instead of $\\dfrac{t}{6}$ — this triples every $10$ minutes, far too fast.\n* Choice C: swaps base and period, putting $6$ as the multiplier and $3$ in the denominator.\n\n**Test Day Takeaway:** \"Multiplies by $b$ every $d$ periods\" gives $M_0 \\cdot b^{t/d}$ — the period goes in the denominator of the exponent.",
  skills: ["exponential-functions"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $f(x) = 3x^2 - 2x + 1$ and $g(x) = x - 2$, what is the value of $f(g(4))$?",
  correctAnswer: "9",
  explanation: "**SAT Pattern: Function Composition**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~15s):** Inner first: $g(4) = 4 - 2 = 2$. Then $f(2) = 3(4) - 4 + 1 = 9$.\n\n**The Full Solution:**\nStep 1: Evaluate the inner function: $g(4) = 4 - 2 = 2$.\nStep 2: Feed that into the outer function: $f(2) = 3(2)^2 - 2(2) + 1 = 12 - 4 + 1 = 9$.\n\n**Common Mistakes:** Evaluating $f(4) = 41$ first and then $g(41) = 39$ reverses the order. Computing $g(f(4))$ instead of $f(g(4))$ gives the same reversal trap.\n\n**Test Day Takeaway:** For $f(g(x))$, work the inside out — evaluate $g$ first, then substitute its result into $f$.",
  skills: ["function-interpretation"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the right triangle shown, one acute angle measures $35^{\\circ}$, the side opposite that angle has length $12$, and the leg adjacent to that angle has length $x$. Which expression gives the value of $x$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["35°", "", ""],
      sideLabels: ["x", "12", ""],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: wrong base + inverse op — uses sine and multiplies
    { id: "A", text: "$12 \\sin 35^{\\circ}$" },
    // distractor: applies inverse op — multiplies by tangent instead of dividing
    { id: "B", text: "$12 \\tan 35^{\\circ}$" },
    { id: "C", text: "$\\dfrac{12}{\\tan 35^{\\circ}}$" },
    // distractor: wrong base — uses sine, which ties the opposite leg to the hypotenuse, not the adjacent leg
    { id: "D", text: "$\\dfrac{12}{\\sin 35^{\\circ}}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $\\tan 35^\\circ = \\dfrac{\\text{opposite}}{\\text{adjacent}} = \\dfrac{12}{x}$, so $x = \\dfrac{12}{\\tan 35^\\circ}$.\n\n**The Full Solution:**\nStep 1: For the $35^\\circ$ angle, the given side ($12$) is opposite and $x$ is the adjacent leg.\nStep 2: Tangent ties opposite to adjacent: $\\tan 35^\\circ = \\dfrac{12}{x}$.\nStep 3: Solve for $x$: $x = \\dfrac{12}{\\tan 35^\\circ}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: uses sine and multiplies — sine relates the hypotenuse, and multiplying shrinks the $12$ instead of solving the ratio.\n* Choice B: multiplies by $\\tan 35^\\circ$ instead of dividing; that solves $\\tan 35^\\circ = \\frac{x}{12}$, which puts the sides in the wrong positions.\n* Choice D: uses sine, which gives the hypotenuse from the opposite leg, not the adjacent leg.\n\n**Test Day Takeaway:** TOA: $\\tan = \\dfrac{\\text{Opposite}}{\\text{Adjacent}}$. To get the adjacent leg from the opposite leg, divide the opposite leg by $\\tan$.",
  skills: ["triangles", "angles"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A cylindrical water tank that supplies a soccer field's irrigation system has a radius of $6$ feet and a height of $9$ feet. The volume of the tank, in cubic feet, can be expressed as $k\\pi$. What is the value of $k$?",
  choices: [
    // distractor: stops one step early — forgets to square the radius (uses r·h)
    { id: "A", text: "$54$" },
    { id: "B", text: "$324$" },
    // distractor: off-by-one — squares the height instead of the radius
    { id: "C", text: "$486$" },
    // distractor: applies inverse op — doubles the radius before squaring (uses diameter)
    { id: "D", text: "$1{,}296$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (6)^2 (9) = 324\\pi$, so $k = 324$.\n\n**The Full Solution:**\nStep 1: A right circular cylinder has volume $V = \\pi r^2 h$.\nStep 2: Substitute $r = 6$ and $h = 9$: $V = \\pi (6)^2 (9) = \\pi (36)(9) = 324\\pi$.\nStep 3: Matching $V = k\\pi$ gives $k = 324$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($54$): forgets to square the radius, computing $\\pi r h = 54\\pi$.\n* Choice C ($486$): squares the height instead of the radius, $\\pi (6)(81) = 486\\pi$.\n* Choice D ($1{,}296$): uses the diameter $12$ as the radius, $\\pi (12)^2 (9) = 1296\\pi$.\n\n**Test Day Takeaway:** For a cylinder, square the radius first, then multiply by the height: $V = \\pi r^2 h$ is on the Reference Sheet.",
  skills: ["volume", "geometry"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Line $k$ passes through the points $(-2, 9)$ and $(4, -9)$. What is the equation of line $k$ in slope-intercept form?",
  choices: [
    { id: "A", text: "$y = -3x + 3$" },
    // distractor: uses the y-value of the first point as the intercept
    { id: "B", text: "$y = -3x + 9$" },
    // distractor: applies inverse op — uses the reciprocal slope -1/3 instead of -3
    { id: "C", text: "$y = -\\dfrac{1}{3}x + 3$" },
    // distractor: wrong sign — flips the slope to +3
    { id: "D", text: "$y = 3x + 3$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Slope $= \\dfrac{-9 - 9}{4 - (-2)} = \\dfrac{-18}{6} = -3$. Plug in $(-2, 9)$: $9 = -3(-2) + b \\Rightarrow b = 3$, so $y = -3x + 3$.\n\n**The Full Solution:**\nStep 1: Slope $m = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{-9 - 9}{4 - (-2)} = \\dfrac{-18}{6} = -3$.\nStep 2: Use point-slope at $(-2, 9)$: $y - 9 = -3(x + 2) \\Rightarrow y = -3x - 6 + 9 = -3x + 3$.\nCheck with $(4, -9)$: $-3(4) + 3 = -9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: copies the $y$-value $9$ of the first point as the intercept without solving for $b$.\n* Choice C: uses the reciprocal $-\\dfrac{1}{3}$ as the slope instead of $-3$.\n* Choice D: flips the slope sign to $+3$; the line clearly falls from left to right.\n\n**Test Day Takeaway:** Find the slope first, then substitute one point into $y = mx + b$ to solve for $b$ — never assume a given $y$-value is the intercept.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A hardware supplier sells deck screws in two box sizes. A small box holds $40$ screws and a large box holds $90$ screws. An order of $24$ boxes holds a total of $1{,}660$ screws. How many large boxes are in the order?",
  correctAnswer: "14",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $14$.**\n\n**The Fast Way (~25s):** Let $\\ell$ be large boxes. Then $s + \\ell = 24$ and $40s + 90\\ell = 1660$. Substitute $s = 24 - \\ell$: $40(24 - \\ell) + 90\\ell = 1660 \\Rightarrow 960 + 50\\ell = 1660 \\Rightarrow \\ell = 14$.\n\n**The Full Solution:**\nStep 1: Let $s$ be small boxes and $\\ell$ be large boxes: $s + \\ell = 24$ and $40s + 90\\ell = 1660$.\nStep 2: From the count equation, $s = 24 - \\ell$.\nStep 3: Substitute: $40(24 - \\ell) + 90\\ell = 960 - 40\\ell + 90\\ell = 960 + 50\\ell = 1660$.\nStep 4: So $50\\ell = 700$ and $\\ell = 14$.\nCheck: $s = 10$, $\\ell = 14$. Count $10 + 14 = 24$; screws $40(10) + 90(14) = 400 + 1260 = 1660$. $\\checkmark$\n\n**Common Mistakes:** Swapping the capacities to $90s + 40\\ell = 1660$. Solving for $s = 10$ and reporting it when the question asks for the large boxes.\n\n**Test Day Takeaway:** Label variables explicitly, write one equation for the count and one for the total, then substitute to isolate the variable the question names.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A transportation office recorded the number of scheduled stops $x$ and the total trip time $y$, in minutes, for $12$ campus shuttle routes. The line of best fit is $\\hat{y} = 3.5x + 12$. One route has $8$ stops and a trip time of $37$ minutes. What is the residual, in minutes, for this route?",
  diagram: { type: "scatterplot", params: {
    points: [[2,20],[3,25],[4,24],[5,31],[6,34],[7,35],[9,45],[10,49],[11,50],[12,56],[13,55]],
    xMin: 0, xMax: 16, yMin: 0, yMax: 70,
    xGridStep: 1, xLabelStep: 2, yGridStep: 5, yLabelStep: 10,
    bestFitLine: { slope: 3.5, intercept: 12 },
    highlightPoint: [8, 37], highlightLabel: "(8, 37)", showResidual: true,
    xLabel: "Scheduled stops", yLabel: "Trip time (minutes)",
  } },
  choices: [
    { id: "A", text: "$-3$" },
    // distractor: wrong sign — computes predicted - actual instead of actual - predicted
    { id: "B", text: "$3$" },
    // distractor: stops one step early — drops the intercept, predicting 3.5(8) = 28
    { id: "C", text: "$9$" },
    // distractor: wrong base — reports the predicted value instead of the residual
    { id: "D", text: "$40$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Residual**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Predicted at $x = 8$ is $3.5(8) + 12 = 40$. Residual $=$ actual $-$ predicted $= 37 - 40 = -3$.\n\n**The Full Solution:**\nStep 1: Plug $x = 8$ into the line of best fit: $\\hat{y} = 3.5(8) + 12 = 28 + 12 = 40$.\nStep 2: Residual $=$ actual $-$ predicted $= 37 - 40 = -3$.\nA negative residual means this route's trip time sits below what the line predicts.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): reverses the formula as predicted $-$ actual, flipping the sign.\n* Choice C ($9$): drops the intercept, predicting $3.5(8) = 28$ and computing $37 - 28$.\n* Choice D ($40$): reports the predicted value instead of the residual.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted. A point below the line has a negative residual — keep the order and the sign.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $5(3x - 2) + 9 = 2x + 51$, what is the value of $x$?",
  correctAnswer: "4",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~20s):** Distribute the $5$, combine constants, and collect: $15x - 10 + 9 = 2x + 51 \\Rightarrow 15x - 1 = 2x + 51 \\Rightarrow 13x = 52 \\Rightarrow x = 4$.\n\n**The Full Solution:**\nStep 1: Distribute: $5(3x - 2) + 9 = 15x - 10 + 9$.\nStep 2: Combine constants on the left: $15x - 1 = 2x + 51$.\nStep 3: Subtract $2x$ and add $1$: $13x = 52$, so $x = 4$.\n\n**Verification:** Left side $= 5(3(4) - 2) + 9 = 5(10) + 9 = 59$. Right side $= 2(4) + 51 = 59$. $\\checkmark$\n\n**Common Mistakes:** Distributing as $15x - 2$ instead of $15x - 10$; mishandling $-10 + 9 = -1$ as $+1$.\n\n**Test Day Takeaway:** Distribute first, combine like terms second, isolate the variable last.",
  skills: ["solving-equations"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The expression $\\dfrac{(2x^3y^2)^3 \\cdot (3x^{-1}y^4)^2}{12x^2y^5}$ is equivalent to which of the following?",
  choices: [
    { id: "A", text: "$6x^5y^9$" },
    // distractor: adds the denominator's y exponent instead of subtracting (14 + 5 = 19)
    { id: "B", text: "$6x^5y^{19}$" },
    // distractor: stops one step early — forgets to subtract the x² in the denominator
    { id: "C", text: "$6x^7y^9$" },
    // distractor: wrong sign — treats x^{-1} as x^{+1}, giving x^{11} in the numerator
    { id: "D", text: "$6x^9y^9$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Raise each factor: $(2x^3y^2)^3 = 8x^9y^6$ and $(3x^{-1}y^4)^2 = 9x^{-2}y^8$. Multiply for $72x^7y^{14}$, then divide by $12x^2y^5$ to get $6x^5y^9$.\n\n**The Full Solution:**\nStep 1: Power of a product on each factor: $(2x^3y^2)^3 = 8x^9y^6$ and $(3x^{-1}y^4)^2 = 9x^{-2}y^8$.\nStep 2: Multiply the numerator factors: $8x^9y^6 \\cdot 9x^{-2}y^8 = 72x^7y^{14}$ (add exponents: $9 + (-2) = 7$, $6 + 8 = 14$).\nStep 3: Divide by $12x^2y^5$: $\\dfrac{72x^7y^{14}}{12x^2y^5} = 6x^{7-2}y^{14-5} = 6x^5y^9$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($6x^5y^{19}$): adds the denominator's $y$ exponent ($14 + 5$) instead of subtracting.\n* Choice C ($6x^7y^9$): forgets to subtract the $x^2$ in the denominator.\n* Choice D ($6x^9y^9$): drops the negative on $x^{-1}$, computing $x^{9+2} = x^{11}$ in the numerator.\n\n**Test Day Takeaway:** Apply the outer power to every factor first, then add exponents when multiplying same bases and subtract when dividing.",
  skills: ["exponent-rules"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the equation $x^2 + 14x + c = 0$, where $c$ is a constant, the equation has two distinct real solutions. Which of the following must be true?",
  choices: [
    // distractor: drops the 4 in 4ac and solves 196 - c > 0
    { id: "A", text: "$c < 196$" },
    // distractor: sets the discriminant to zero — the "exactly one solution" condition
    { id: "B", text: "$c = 49$" },
    // distractor: flips the inequality — that range gives no real solutions
    { id: "C", text: "$c > 49$" },
    { id: "D", text: "$c < 49$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Two distinct real solutions means a positive discriminant: $14^2 - 4(1)c > 0 \\Rightarrow 196 > 4c \\Rightarrow c < 49$.\n\n**The Full Solution:**\nStep 1: For $ax^2 + bx + c = 0$, two distinct real solutions require $b^2 - 4ac > 0$.\nStep 2: Here $a = 1$ and $b = 14$: $14^2 - 4(1)c = 196 - 4c > 0$.\nStep 3: Solve the inequality: $196 > 4c \\Rightarrow c < 49$.\n\n**Verification:** Try $c = 48$: discriminant $= 196 - 192 = 4 > 0$, two real solutions. Try $c = 50$: discriminant $= 196 - 200 = -4 < 0$, none. The boundary behaves as claimed. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($c < 196$): drops the $4$ in $4ac$ and solves $196 - c > 0$.\n* Choice B ($c = 49$): sets the discriminant to zero, which is the exactly-one-solution condition, not two.\n* Choice C ($c > 49$): flips the inequality — that range gives a negative discriminant and NO real solutions.\n\n**Test Day Takeaway:** Map the words to the discriminant: two real solutions $\\iff b^2 - 4ac > 0$, exactly one $\\iff = 0$, none $\\iff < 0$.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, a parabola has vertex $(-2, 6)$ and passes through the point $(2, -10)$. What is the $y$-intercept of this parabola?",
  choices: [
    // distractor: stops one step early — computes a(0+2)² = -4 and forgets to add 6
    { id: "A", text: "$(0, -4)$" },
    { id: "B", text: "$(0, 2)$" },
    // distractor: wrong base — reports the vertex y-value as the intercept
    { id: "C", text: "$(0, 6)$" },
    // distractor: wrong sign — uses a = +1 instead of a = -1
    { id: "D", text: "$(0, 10)$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Vertex form $y = a(x + 2)^2 + 6$. Plug in $(2, -10)$: $-10 = 16a + 6 \\Rightarrow a = -1$. At $x = 0$: $y = -(4) + 6 = 2$, so the intercept is $(0, 2)$.\n\n**The Full Solution:**\nStep 1: With vertex $(-2, 6)$, write $y = a(x + 2)^2 + 6$.\nStep 2: Use the point $(2, -10)$: $-10 = a(2 + 2)^2 + 6 = 16a + 6$, so $16a = -16$ and $a = -1$.\nStep 3: Set $x = 0$: $y = -(0 + 2)^2 + 6 = -4 + 6 = 2$. The $y$-intercept is $(0, 2)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(0, -4)$): stops at $a(0 + 2)^2 = -4$ and forgets to add the vertex height $6$.\n* Choice C ($(0, 6)$): reports the vertex $y$-value as the intercept — the vertex is at $x = -2$, not $x = 0$.\n* Choice D ($(0, 10)$): a sign slip gives $a = +1$, so $4 + 6 = 10$.\n\n**Test Day Takeaway:** Start from vertex form $y = a(x - h)^2 + k$, use the second point to solve for $a$, then evaluate at $x = 0$.",
  skills: ["vertex-form", "quadratic-equations", "coordinate-geometry"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A studio models a film's weekly ticket sales at a theater chain by $S(w) = 240(0.82)^w$, where $w$ is the number of weeks after opening weekend and $S(w)$ is in thousands of tickets. The film stays in wide release as long as weekly sales are at least $90$ thousand tickets. For how many complete weeks after opening weekend does the film stay in wide release?",
  choices: [
    // distractor: stops one step early — stops checking at w = 3
    { id: "A", text: "$3$" },
    { id: "B", text: "$4$" },
    // distractor: off-by-one — rounds 4.94 up to 5, but at w = 5 sales are below 90
    { id: "C", text: "$5$" },
    // distractor: wrong base — treats the decay as far slower than 0.82 per week
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Test integer weeks near the boundary: $S(4) = 240(0.82)^4 \\approx 108.5 \\ge 90$, but $S(5) \\approx 89.0 < 90$. So the film stays in wide release through $4$ complete weeks.\n\n**The Full Solution:**\nStep 1: Set up the requirement $240(0.82)^w \\ge 90$, i.e. $(0.82)^w \\ge 0.375$.\nStep 2: Solve for the boundary: $w \\le \\dfrac{\\ln(0.375)}{\\ln(0.82)} = \\dfrac{-0.9808}{-0.1985} \\approx 4.94$.\nStep 3: The last whole week at which $S \\ge 90$ is $w = 4$; at $w = 5$ sales drop to about $89.0$ thousand. So $4$ complete weeks.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): stops checking one integer too soon, before reaching $w = 4$.\n* Choice C ($5$): rounds $4.94$ up, but $S(5) \\approx 89.0$ is already below $90$.\n* Choice D ($6$): treats the decay as far slower than $0.82$ per week.\n\n**Test Day Takeaway:** For \"complete weeks\" questions, evaluate integer inputs around the boundary and keep the largest one that still satisfies the inequality.",
  skills: ["exponential-functions", "solving-equations"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For the polynomial $p(x) = 3x^3 + 7x^2 - 18x + 8$, it is known that $(x + 4)$ is a factor. Which of the following gives the complete factorization of $p(x)$?",
  choices: [
    // distractor: stops one step early — correct quotient but not fully factored
    { id: "A", text: "$(x + 4)(3x^2 - 5x + 2)$" },
    // distractor: wrong sign — flips both binomial signs in the quadratic factoring
    { id: "B", text: "$(x + 4)(3x + 2)(x + 1)$" },
    // distractor: applies inverse op — a sign slip in the synthetic division gives the wrong quotient
    { id: "C", text: "$(x + 4)(3x^2 + 5x - 2)$" },
    { id: "D", text: "$(x + 4)(3x - 2)(x - 1)$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Polynomial Factoring with Given Factor**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Synthetic-divide by $x = -4$ to get the quotient $3x^2 - 5x + 2$, which factors as $(3x - 2)(x - 1)$. The complete factorization is $(x + 4)(3x - 2)(x - 1)$.\n\n**The Full Solution:**\nStep 1: Synthetic division on coefficients $3, 7, -18, 8$ with $x = -4$: bring down $3$; $3 \\cdot (-4) = -12$, $7 - 12 = -5$; $-5 \\cdot (-4) = 20$, $-18 + 20 = 2$; $2 \\cdot (-4) = -8$, $8 - 8 = 0$. Quotient $3x^2 - 5x + 2$, remainder $0$.\nStep 2: Factor $3x^2 - 5x + 2$ by grouping. Find factors of $3 \\cdot 2 = 6$ that add to $-5$: those are $-3$ and $-2$.\nStep 3: $3x^2 - 3x - 2x + 2 = 3x(x - 1) - 2(x - 1) = (3x - 2)(x - 1)$.\nStep 4: Combine: $(x + 4)(3x - 2)(x - 1)$.\n\n**Verification:** $p(1) = 3 + 7 - 18 + 8 = 0$ and $p(-4) = -192 + 112 + 72 + 8 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x + 4)(3x^2 - 5x + 2)$): correct quotient, but the quadratic is left unfactored.\n* Choice B ($(x + 4)(3x + 2)(x + 1)$): sign errors flip both binomial signs.\n* Choice C ($(x + 4)(3x^2 + 5x - 2)$): a sign slip in the synthetic division gives the wrong quotient.\n\n**Test Day Takeaway:** Use synthetic division to drop the degree by the known factor, then fully factor the quotient.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The system of equations below has solution $(x, y)$.\n\n$x + y = 7$\n$x^2 + y = 19$\n\nIf $x > 0$, what is the value of $y$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~30s):** Subtract the first equation from the second: $x^2 - x = 12 \\Rightarrow x^2 - x - 12 = 0 \\Rightarrow (x - 4)(x + 3) = 0$. Since $x > 0$, $x = 4$ and $y = 7 - 4 = 3$.\n\n**The Full Solution:**\nStep 1: Both equations contain $+y$, so subtracting the first from the second eliminates it: $(x^2 + y) - (x + y) = 19 - 7 \\Rightarrow x^2 - x = 12$.\nStep 2: Collect: $x^2 - x - 12 = 0$.\nStep 3: Factor: $(x - 4)(x + 3) = 0$, so $x = 4$ or $x = -3$. The constraint $x > 0$ forces $x = 4$.\nStep 4: Then $y = 7 - 4 = 3$.\n\n**Verification:** $x + y = 4 + 3 = 7$ and $x^2 + y = 16 + 3 = 19$. $\\checkmark$\n\n**Common Mistakes:** Taking $x = -3$ (which gives $y = 10$) and ignoring $x > 0$; reporting $x = 4$ when the question asks for $y$.\n\n**Test Day Takeaway:** When both equations share a term, subtract to eliminate it, solve the quadratic, then apply the given constraint to pick the valid root.",
  skills: ["systems-of-equations", "quadratic-equations"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, circle $C$ has equation $(x + 1)^2 + (y - 3)^2 = 25$. Line $\\ell$ has equation $y = -\\dfrac{3}{4}x + b$ and is tangent to circle $C$. If $b > 0$, what is the value of $b$?",
  correctAnswer: "8.5",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $8.5$.**\n\n**The Fast Way (~45s):** A tangent line sits exactly one radius from the center. Distance from $(-1, 3)$ to $3x + 4y - 4b = 0$ equals $5$: $\\dfrac{|{-3} + 12 - 4b|}{5} = 5 \\Rightarrow |9 - 4b| = 25$. With $b > 0$, $4b = 34$, so $b = 8.5$.\n\n**The Full Solution:**\nStep 1: The circle has center $(-1, 3)$ and radius $5$. Tangency means the center-to-line distance equals $5$.\nStep 2: Rewrite the line in standard form: $y = -\\dfrac{3}{4}x + b$ becomes $3x + 4y - 4b = 0$.\nStep 3: Distance $= \\dfrac{|3(-1) + 4(3) - 4b|}{\\sqrt{9 + 16}} = \\dfrac{|9 - 4b|}{5}$. Set equal to $5$: $|9 - 4b| = 25$.\nStep 4: $9 - 4b = -25$ gives $b = 8.5$; $9 - 4b = 25$ gives $b = -4$. Since $b > 0$, $b = 8.5$.\n\n**Common Mistakes:** Forgetting the $\\sqrt{9 + 16} = 5$ in the denominator; keeping the negative root $b = -4$ despite $b > 0$.\n\n**Test Day Takeaway:** A line is tangent to a circle exactly when the distance from the center to the line equals the radius.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A plant nursery tracks its $360$ seedling trays. Of these trays, $150$ are misted daily and $120$ are kept under shade cloth; $55$ trays are both misted daily and kept under shade cloth. If a tray is selected at random from the trays that are misted daily, what is the probability that the tray is NOT kept under shade cloth?",
  choices: [
    // distractor: wrong base — uses 360 (all trays) as the denominator: 95/360
    { id: "A", text: "$\\dfrac{19}{72}$" },
    // distractor: wrong sign — gives the complement P(shade | misted) = 55/150 instead
    { id: "B", text: "$\\dfrac{11}{30}$" },
    // distractor: off-by-one — conditions on the shade group: (120-55)/120
    { id: "C", text: "$\\dfrac{13}{24}$" },
    { id: "D", text: "$\\dfrac{19}{30}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** \"From the trays that are misted daily\" makes the denominator the $150$ misted trays. Of those, $150 - 55 = 95$ are not under shade cloth, so the probability is $\\dfrac{95}{150} = \\dfrac{19}{30}$.\n\n**The Full Solution:**\nStep 1: Restrict to the $150$ misted trays — that is the sample space.\nStep 2: Among them, $55$ are under shade cloth, so $150 - 55 = 95$ are not.\nStep 3: Probability $= \\dfrac{95}{150}$. Divide top and bottom by $5$: $\\dfrac{19}{30}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{19}{72}$): equals $\\dfrac{95}{360}$ — uses all $360$ trays in the denominator instead of restricting to misted trays.\n* Choice B ($\\dfrac{11}{30}$): equals $\\dfrac{55}{150}$, the chance of shade cloth given misting — the complement of what is asked.\n* Choice C ($\\dfrac{13}{24}$): equals $\\dfrac{65}{120}$ — conditions on the shade-cloth group instead of the misted group.\n\n**Test Day Takeaway:** \"From the trays that...\" fixes the denominator. Condition on the named group, then count the complement inside it.",
  skills: ["probability", "statistics"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 10 — Math Module 2 (22 questions)
// Distribution: 3E / 7M / 12H (frozen). Wavy flow: easy at 1,4,20; medium at
// 2,3,6,7,12,15,16; hard at 5,8,9,10,11,13,14,17,18,19,21,22.
// Recreation notes (2026-09-01): Q1-5 warm-ups all carry 2+ steps or a trap
// under their frozen patterns — Q1 missing-LEG with the add-squares trap plus
// radical simplification (never hypotenuse-from-legs), Q4 difference-driven
// reverse percent, Q5 vertex-sign bound on a+b+c with a DOWNWARD orientation,
// Q7 rational equation whose lone root is EXCLUDED (0 solutions).
// Palette: loading ramp, laser-tag arenas, cider pressing, seedling trays,
// movie-theater concessions, soccer-field irrigation.

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The sloped surface of a loading-dock ramp is $12$ feet long, and the ramp covers a horizontal distance of $10$ feet along the ground. What is the vertical rise of the ramp, in feet?",
  choices: [
    // distractor: subtracts the side lengths instead of their squares — 12 - 10
    { id: "A", text: "$2$" },
    { id: "B", text: "$2\\sqrt{11}$" },
    // distractor: adds the squares instead of subtracting — treats the 12-ft surface as a leg
    { id: "C", text: "$2\\sqrt{61}$" },
    // distractor: computes 144 - 100 = 44 but never takes the square root
    { id: "D", text: "$44$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The ramp surface is the hypotenuse. Rise $= \\sqrt{12^2 - 10^2} = \\sqrt{144 - 100} = \\sqrt{44} = 2\\sqrt{11}$ feet.\n\n**The Full Solution:**\nStep 1: The surface ($12$), the ground distance ($10$), and the rise form a right triangle with the surface as the hypotenuse — the longest side.\nStep 2: Solve for the missing LEG: rise$^2 = 12^2 - 10^2 = 144 - 100 = 44$.\nStep 3: Simplify the radical by pulling out the perfect square: $\\sqrt{44} = \\sqrt{4 \\cdot 11} = 2\\sqrt{11}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): subtracts the side lengths $12 - 10$ instead of their squares.\n* Choice C ($2\\sqrt{61}$): ADDS the squares, $\\sqrt{144 + 100} = \\sqrt{244}$, treating the ramp surface as a leg — but the sloped surface is the hypotenuse.\n* Choice D ($44$): computes $144 - 100$ correctly but never takes the square root.\n\n**Test Day Takeaway:** Identify the hypotenuse FIRST. When the hypotenuse is given, subtract squares to find a leg — adding is the classic trap.",
  skills: ["geometry", "right-triangles"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Each match at a laser-tag arena is played in either the standard arena or the blackout arena, and each match is recorded as finishing on time or running long. The table summarizes the $210$ matches played one week. Of the matches that ran long, what fraction were played in the blackout arena?",
  diagram: {
    type: "twoWayTable",
    params: {
      headers: ["", "On time", "Ran long", "Total"],
      rows: [
        ["Standard", "85", "35", "120"],
        ["Blackout", "50", "40", "90"],
        ["Total", "135", "75", "210"]
      ]
    }
  },
  choices: [
    // distractor: wrong base — uses 210 (the grand total) as the denominator
    { id: "A", text: "$\\dfrac{40}{210}$" },
    // distractor: wrong base — uses 90 (the Blackout row total) as the denominator
    { id: "B", text: "$\\dfrac{40}{90}$" },
    // distractor: off-by-one — uses the standard-arena long matches (35) instead of blackout (40)
    { id: "C", text: "$\\dfrac{35}{75}$" },
    { id: "D", text: "$\\dfrac{40}{75}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** \"Of the matches that ran long\" fixes the denominator at the Ran-long total, $75$. Blackout long matches $= 40$, so the fraction is $\\dfrac{40}{75}$.\n\n**The Full Solution:**\nStep 1: The condition restricts attention to the Ran-long column, whose total is $75$.\nStep 2: Within that column, $40$ matches were played in the blackout arena.\nStep 3: The conditional fraction is $\\dfrac{40}{75}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{40}{210}$): uses the grand total $210$, ignoring the condition.\n* Choice B ($\\dfrac{40}{90}$): uses $90$, the Blackout row total — that conditions on the arena, not on running long.\n* Choice C ($\\dfrac{35}{75}$): keeps the right denominator but counts the standard arena's long matches ($35$) instead of the blackout arena's.\n\n**Test Day Takeaway:** The phrase after \"of the matches that...\" sets your denominator. Read the condition first, then match the numerator to it.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "An orchard models the number of liters of cider $y$ pressed from $x$ crates of apples using the line of best fit $\\hat{y} = 5.5x + 3$. One pressing run used $9$ crates and yielded $57$ liters. What is the residual, in liters, for this run?",
  diagram: { type: "scatterplot", params: {
    points: [[2,15],[3,18],[4,26],[5,29],[6,38],[7,40],[8,45],[10,60],[11,62],[12,71]],
    xMin: 0, xMax: 14, yMin: 0, yMax: 80,
    xGridStep: 1, yGridStep: 5, xLabelStep: 2, yLabelStep: 10,
    bestFitLine: { slope: 5.5, intercept: 3 },
    highlightPoint: [9, 57], highlightLabel: "(9, 57)", showResidual: true,
    xLabel: "Crates of apples", yLabel: "Liters of cider",
  } },
  choices: [
    // distractor: wrong sign — computes predicted - actual
    { id: "A", text: "$-4.5$" },
    { id: "B", text: "$4.5$" },
    // distractor: stops one step early — uses 5.5 · 9 = 49.5 alone and forgets the intercept
    { id: "C", text: "$7.5$" },
    // distractor: wrong base — reports the predicted value instead of the residual
    { id: "D", text: "$52.5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Residual**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Plug $x = 9$ into the line: $5.5(9) + 3 = 52.5$. Residual $=$ actual $-$ predicted $= 57 - 52.5 = 4.5$.\n\n**The Full Solution:**\nStep 1: Find the predicted value at $x = 9$ from $\\hat{y} = 5.5x + 3$: $\\hat{y} = 49.5 + 3 = 52.5$.\nStep 2: Residual $=$ actual $-$ predicted $= 57 - 52.5 = 4.5$. A positive residual means this run yielded more cider than the line predicts.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4.5$): computed predicted $-$ actual $= 52.5 - 57$, reversing the order.\n* Choice C ($7.5$): used $5.5 \\cdot 9 = 49.5$ and dropped the $+3$ intercept, then $57 - 49.5 = 7.5$.\n* Choice D ($52.5$): reports the predicted value itself instead of the residual.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted. Always plug the point's $x$ into the full line equation, intercept included.",
  skills: ["scatterplots", "statistics", "linear-functions"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "At a plant nursery, $40\\%$ of the seedling trays hold basil. There are $45$ more trays that do not hold basil than trays that hold basil. How many trays hold basil?",
  choices: [
    // distractor: wrong base — takes 40% of the given difference 45
    { id: "A", text: "$18$" },
    { id: "B", text: "$90$" },
    // distractor: solves for the non-basil trays (60% of the total) instead of basil
    { id: "C", text: "$135$" },
    // distractor: stops one step early — finds the total number of trays and reports it
    { id: "D", text: "$225$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Basil is $40\\%$, so non-basil is $60\\%$. The gap between the groups is $60\\% - 40\\% = 20\\%$ of the total: $0.20\\,T = 45 \\Rightarrow T = 225$. Basil $= 0.40 \\cdot 225 = 90$.\n\n**The Full Solution:**\nStep 1: If $40\\%$ of the trays hold basil, then $60\\%$ do not.\nStep 2: The difference between the two groups is $0.60\\,T - 0.40\\,T = 0.20\\,T$, and this equals $45$ trays.\nStep 3: $0.20\\,T = 45 \\Rightarrow T = 225$ total trays.\nStep 4: Basil trays $= 0.40 \\cdot 225 = 90$. Check: non-basil $= 135$, and $135 - 90 = 45$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($18$): takes $40\\%$ of the difference $45$, treating $45$ as the whole.\n* Choice C ($135$): solves correctly but reports the NON-basil trays ($60\\%$ of $225$).\n* Choice D ($225$): stops at the total number of trays and reports it.\n\n**Test Day Takeaway:** When a DIFFERENCE between two percent groups is given, the difference equals (bigger percent $-$ smaller percent) of the whole. Recover the whole first, then answer what is asked.",
  skills: ["percents", "word-problems"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, a parabola has vertex $(6, 10)$ and crosses the $x$-axis at two distinct points. The equation of the parabola is written as $y = ax^2 + bx + c$, where $a$, $b$, and $c$ are constants. Which of the following could be the value of $a + b + c$?",
  choices: [
    { id: "A", text: "$4$" },
    // distractor: off-by-one — uses the vertex y-value 10 itself (excluded boundary)
    { id: "B", text: "$10$" },
    // distractor: picks a value above the vertex height, which would require a > 0
    { id: "C", text: "$15$" },
    // distractor: wrong base — treats the vertex as a minimum and picks a value far above 10
    { id: "D", text: "$21$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Evaluating Vertex Form at a Specific Input**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** $a + b + c = y(1)$. In vertex form $y = a(x - 6)^2 + 10$, two $x$-intercepts force the parabola to open DOWN ($a < 0$), since its vertex sits above the axis. Then $y(1) = a(1 - 6)^2 + 10 = 25a + 10 < 10$. Only $4$ is less than $10$.\n\n**The Full Solution:**\nStep 1: Substituting $x = 1$ into $y = ax^2 + bx + c$ gives $a + b + c = y(1)$.\nStep 2: Write vertex form: $y = a(x - 6)^2 + 10$. The vertex $(6, 10)$ lies above the $x$-axis, so to cross the axis twice the parabola must open downward: $a < 0$.\nStep 3: Evaluate at $x = 1$: $y(1) = a(1 - 6)^2 + 10 = 25a + 10$. Since $a < 0$, $25a < 0$, so $y(1) < 10$.\nStep 4: The only choice less than $10$ is $4$. (It needs $25a + 10 = 4$, i.e. $a = -\\dfrac{6}{25} < 0$. $\\checkmark$)\n\n**Why the wrong answers are tempting:**\n* Choice B ($10$): uses the vertex value itself, but $y(1)$ is strictly less since $x = 1$ is not the vertex's $x = 6$.\n* Choice C ($15$): above the vertex height, which would require $a > 0$ — but an upward parabola with vertex above the axis never crosses it.\n* Choice D ($21$): treats the vertex as a minimum and reaches even further above $10$.\n\n**Test Day Takeaway:** $a + b + c$ is just $y(1)$. Pair that with the sign of $a$ forced by the intercept condition to bound the value.",
  skills: ["quadratic-equations", "vertex-form"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "At a movie theater's concession stand, one customer paid $\\$20.50$ for $3$ soft pretzels and $2$ sodas. Another customer paid $\\$16.50$ for $1$ soft pretzel and $4$ sodas. What is the cost, in dollars, of $1$ soft pretzel?",
  choices: [
    // distractor: applies inverse op — a sign slip during elimination gives 10s = 20.5
    { id: "A", text: "$2.05$" },
    // distractor: stops one step early — solves for the soda price instead of the pretzel
    { id: "B", text: "$2.90$" },
    { id: "C", text: "$4.90$" },
    // distractor: wrong base — divides 29 by 5 instead of 10 in the elimination step
    { id: "D", text: "$5.80$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Let $p$ be the pretzel price and $s$ the soda price: $3p + 2s = 20.50$ and $p + 4s = 16.50$. Scale the second by $3$: $3p + 12s = 49.50$. Subtract the first: $10s = 29.00$, so $s = 2.90$, and $p = 16.50 - 4(2.90) = 4.90$.\n\n**The Full Solution:**\nStep 1: Set up the system: $3p + 2s = 20.50$ and $p + 4s = 16.50$.\nStep 2: To eliminate $p$, multiply the second equation by $3$: $3p + 12s = 49.50$.\nStep 3: Subtract the first: $(3p + 12s) - (3p + 2s) = 49.50 - 20.50 \\Rightarrow 10s = 29.00 \\Rightarrow s = 2.90$.\nStep 4: Back-substitute: $p = 16.50 - 4(2.90) = 16.50 - 11.60 = 4.90$.\nCheck: $3(4.90) + 2(2.90) = 14.70 + 5.80 = 20.50$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2.05$): a sign slip in the subtraction gives $10s = 20.50$ and $s = 2.05$, then reports it.\n* Choice B ($2.90$): solves correctly for the SODA price and reports it instead of the pretzel price.\n* Choice D ($5.80$): divides $29$ by $5$ instead of $10$ in the elimination step.\n\n**Test Day Takeaway:** Line up the equations, scale one so a variable cancels, and confirm which variable the question actually wants.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $\\dfrac{3}{x - 2} + \\dfrac{2}{x + 6} = \\dfrac{24}{x^2 + 4x - 12}$, how many real solutions does the equation have?",
  choices: [
    { id: "A", text: "$0$" },
    // distractor: solves 5x + 14 = 24 to x = 2 but never checks the excluded values
    { id: "B", text: "$1$" },
    // distractor: wrong base — assumes a quadratic in disguise yields two solutions
    { id: "C", text: "$2$" },
    // distractor: applies inverse op — mistakes the equation for an identity
    { id: "D", text: "Infinitely many" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Rational Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The right denominator factors as $x^2 + 4x - 12 = (x - 2)(x + 6)$. Clear fractions: $3(x + 6) + 2(x - 2) = 24 \\Rightarrow 5x + 14 = 24 \\Rightarrow x = 2$. But $x = 2$ makes the ORIGINAL denominators zero — it is excluded. So there are $0$ real solutions.\n\n**The Full Solution:**\nStep 1: Factor the right denominator: $x^2 + 4x - 12 = (x - 2)(x + 6)$. The excluded values are $x = 2$ and $x = -6$.\nStep 2: Multiply both sides by $(x - 2)(x + 6)$: $3(x + 6) + 2(x - 2) = 24$.\nStep 3: Expand and combine: $3x + 18 + 2x - 4 = 24 \\Rightarrow 5x + 14 = 24 \\Rightarrow x = 2$.\nStep 4: Check against the excluded values: $x = 2$ zeroes the denominator $x - 2$, so it is EXTRANEOUS. No valid solution remains.\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): solves to $x = 2$ but never checks it against the excluded values.\n* Choice C ($2$): expects a quadratic to yield two roots, but the $x^2$ terms cancel when fractions clear, leaving a linear equation.\n* Choice D (Infinitely many): mistakes the equation for an identity.\n\n**Test Day Takeaway:** Factor every denominator first and write down the excluded values — a root that lands on one of them is extraneous, and the solution count drops.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "For some constant $k$, the function $h$ satisfies $h(x) = (x + 15)(k - x)$. The point $(24, 0)$ lies on the graph of $y = h(x)$ in the $xy$-plane. Determine $h(0)$.",
  correctAnswer: "360",
  explanation: "**SAT Pattern: Function Evaluation to Find Parameter**\n\n**The correct answer is $360$.**\n\n**The Fast Way (~30s):** $(24, 0)$ is a zero of $h$. Since $24 + 15 = 39 \\neq 0$, the other factor must vanish: $k - 24 = 0 \\Rightarrow k = 24$. Then $h(0) = (15)(24) = 360$.\n\n**The Full Solution:**\nStep 1: The graph passes through $(24, 0)$, so $h(24) = 0$: $h(24) = (24 + 15)(k - 24) = 39(k - 24) = 0$.\nStep 2: Since $39 \\neq 0$, the factor $k - 24 = 0$, giving $k = 24$.\nStep 3: Evaluate at $x = 0$: $h(0) = (0 + 15)(k - 0) = 15 \\cdot k = 15 \\cdot 24 = 360$.\n\n**Common Mistakes:** Setting $x + 15 = 0$ at the given point (that factor is $39$ there, not zero); reporting $k = 24$ instead of evaluating $h(0)$.\n\n**Test Day Takeaway:** A point with $y = 0$ is a zero. Set the factor that CAN vanish equal to zero to solve for the constant, then evaluate.",
  skills: ["quadratic-equations", "function-interpretation"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The rational function $f$ is defined by $f(x) = \\dfrac{a}{x + b}$, where $a$ and $b$ are constants. The partial graph of $y = f(x)$ is shown, with a vertical asymptote at $x = -3$ and points at $(1, 3)$ and $(3, 2)$. If $g(x) = f(x + 2)$, which equation could define the function $g$?",
  diagram: { type: "rationalFunction", params: {
    a: 12, b: 3, c: 0, showPoints: [[1, 3], [3, 2]], label: "y = f(x)"
  } },
  choices: [
    // distractor: applies the shift to the numerator and cancels, losing the function
    { id: "A", text: "$g(x) = \\dfrac{12}{x}$" },
    // distractor: wrong sign — replaces x with x - 2, shifting the graph right instead of left
    { id: "B", text: "$g(x) = \\dfrac{12}{x + 1}$" },
    // distractor: stops one step early — copies f without applying the shift
    { id: "C", text: "$g(x) = \\dfrac{12}{x + 3}$" },
    { id: "D", text: "$g(x) = \\dfrac{12}{x + 5}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Rational Function Transformation**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The asymptote $x = -3$ gives $b = 3$, and $(1, 3)$ gives $\\dfrac{a}{1 + 3} = 3 \\Rightarrow a = 12$. So $f(x) = \\dfrac{12}{x + 3}$, and $g(x) = f(x + 2) = \\dfrac{12}{(x + 2) + 3} = \\dfrac{12}{x + 5}$.\n\n**The Full Solution:**\nStep 1: The vertical asymptote is where the denominator is zero: $x + b = 0 \\Rightarrow x = -b = -3$, so $b = 3$.\nStep 2: Use the point $(1, 3)$: $f(1) = \\dfrac{a}{1 + 3} = \\dfrac{a}{4} = 3 \\Rightarrow a = 12$. Check $(3, 2)$: $\\dfrac{12}{3 + 3} = 2$. $\\checkmark$\nStep 3: So $f(x) = \\dfrac{12}{x + 3}$.\nStep 4: Apply $g(x) = f(x + 2)$ by replacing $x$ with $x + 2$: $g(x) = \\dfrac{12}{(x + 2) + 3} = \\dfrac{12}{x + 5}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{12}{x}$): applied the shift to the numerator and cancelled, discarding the function's structure.\n* Choice B ($\\dfrac{12}{x + 1}$): replaced $x$ with $x - 2$, shifting the asymptote right instead of left.\n* Choice C ($\\dfrac{12}{x + 3}$): left $f$ unshifted, forgetting to substitute $x + 2$.\n\n**Test Day Takeaway:** $f(x + c)$ replaces $x$ with $x + c$ everywhere, sliding the graph left by $c$. Read $a$ and $b$ off the graph first, then substitute.",
  skills: ["rational-functions", "function-interpretation"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $4x^2 - bx + 25 = 0$ has no real solutions, where $b$ is a positive integer. What is the greatest possible value of $b$?",
  choices: [
    { id: "A", text: "$19$" },
    // distractor: off-by-one — forgets the strict inequality and uses b = 20
    { id: "B", text: "$20$" },
    // distractor: wrong base — uses 2·20 doubled incorrectly
    { id: "C", text: "$40$" },
    // distractor: applies inverse op — returns b² = 400 instead of b
    { id: "D", text: "$400$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** No real solutions means a negative discriminant: $b^2 - 4(4)(25) < 0 \\Rightarrow b^2 < 400 \\Rightarrow b < 20$. The greatest positive integer is $b = 19$.\n\n**The Full Solution:**\nStep 1: No real solutions requires $b^2 - 4ac < 0$ (the $-b$ in the middle squares away: $(-b)^2 = b^2$).\nStep 2: $b^2 - 4(4)(25) < 0 \\Rightarrow b^2 - 400 < 0 \\Rightarrow b^2 < 400 \\Rightarrow |b| < 20$.\nStep 3: Since $b$ is a positive integer with $b < 20$ (strict), the greatest value is $b = 19$.\nStep 4: Check: $19^2 = 361 < 400$. $\\checkmark$ And $20^2 = 400$ is not less than $400$, so $b = 20$ gives exactly one real solution.\n\n**Why the wrong answers are tempting:**\n* Choice B ($20$): makes the discriminant exactly $0$, which is one real solution, not zero.\n* Choice C ($40$): doubles $20$ from a misapplied square-root step.\n* Choice D ($400$): reports $b^2$ instead of $b$.\n\n**Test Day Takeaway:** No real solutions means discriminant $< 0$ (strict). When the boundary is itself an integer, the greatest valid integer is one less.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A circle in the $xy$-plane has its center at $(2, -5)$. Line $t$ is tangent to this circle at the point $(8, 3)$. Which of the following points also lies on line $t$?",
  choices: [
    // distractor: treats the tangent as a horizontal line through the tangent point
    { id: "A", text: "$(0, 3)$" },
    // distractor: names the circle's center, which lies on the radius, not the tangent
    { id: "B", text: "$(2, -5)$" },
    { id: "C", text: "$(12, 0)$" },
    // distractor: extends the RADIUS slope 4/3 from the tangent point instead of the tangent slope
    { id: "D", text: "$(14, 11)$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Tangent Line to a Circle**\n\n**Choice C is correct.**\n\n**The Fast Way (~50s):** Radius slope $= \\dfrac{3 - (-5)}{8 - 2} = \\dfrac{8}{6} = \\dfrac{4}{3}$, so the tangent slope is the negative reciprocal $-\\dfrac{3}{4}$. From $(8, 3)$, moving $4$ right drops $y$ by $3$: $(12, 0)$ lies on the line.\n\n**The Full Solution:**\nStep 1: Find the radius slope from center $(2, -5)$ to the tangent point $(8, 3)$: $\\dfrac{3 - (-5)}{8 - 2} = \\dfrac{8}{6} = \\dfrac{4}{3}$.\nStep 2: A tangent is perpendicular to the radius, so its slope is the negative reciprocal: $-\\dfrac{3}{4}$.\nStep 3: Point-slope through $(8, 3)$: $y - 3 = -\\dfrac{3}{4}(x - 8)$.\nStep 4: Test $(12, 0)$: $0 - 3 = -\\dfrac{3}{4}(12 - 8) \\Rightarrow -3 = -\\dfrac{3}{4}(4) = -3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(0, 3)$): assumes the tangent is horizontal through the tangent point.\n* Choice B ($(2, -5)$): names the circle's center, which lies on the radius, not the tangent.\n* Choice D ($(14, 11)$): extends the RADIUS slope $\\dfrac{4}{3}$ from the tangent point instead of the tangent slope.\n\n**Test Day Takeaway:** A tangent is perpendicular to the radius at the point of tangency. Take the negative reciprocal of the radius slope, then build the line through the tangent point.",
  skills: ["tangent-lines", "circle-equations"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$220$ is what percent greater than $55$?",
  choices: [
    // distractor: applies inverse op — divides the difference by 220 instead of 55
    { id: "A", text: "$75\\%$" },
    // distractor: stops one step early — reports the raw difference 220 - 55 = 165
    { id: "B", text: "$165\\%$" },
    { id: "C", text: "$300\\%$" },
    // distractor: wrong base — computes 220/55 × 100 (percent OF, not percent GREATER)
    { id: "D", text: "$400\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent Greater Than**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Percent greater $= \\dfrac{220 - 55}{55} \\times 100 = \\dfrac{165}{55} \\times 100 = 3 \\times 100 = 300\\%$.\n\n**The Full Solution:**\nStep 1: \"$A$ is what percent greater than $B$\" means $\\dfrac{A - B}{B} \\times 100$, with $B$ as the base.\nStep 2: $\\dfrac{220 - 55}{55} \\times 100 = \\dfrac{165}{55} \\times 100 = 3 \\times 100 = 300\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($75\\%$): divides by $220$ instead of $55$, giving $\\dfrac{165}{220} \\times 100$.\n* Choice B ($165\\%$): reports the raw difference $165$ as the percent.\n* Choice D ($400\\%$): computes $\\dfrac{220}{55} \\times 100$, which is \"percent OF,\" not \"percent GREATER.\"\n\n**Test Day Takeaway:** \"Percent greater\" is $\\dfrac{\\text{difference}}{\\text{base}} \\times 100$; the base is the number after \"than.\"",
  skills: ["percents", "word-problems"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The graph of $y = 3x^2 + bx + c$ is shown, where $b$ and $c$ are constants. The parabola has its vertex at $(-2, -4)$ and passes through the points $(0, 8)$ and $(-4, 8)$. What is the value of $bc$?",
  diagram: { type: "quadraticVertex", params: {
    vertex: [-2, -4], a: 3, showPoints: [[0, 8], [-4, 8]], showVertex: true
  } },
  correctAnswer: "96",
  explanation: "**SAT Pattern: Quadratic Coefficients from Graph**\n\n**The correct answer is $96$.**\n\n**The Fast Way (~30s):** The $y$-intercept $(0, 8)$ gives $c = 8$. The axis of symmetry is $x = -2$, so $-\\dfrac{b}{2(3)} = -2 \\Rightarrow b = 12$. Then $bc = (12)(8) = 96$.\n\n**The Full Solution:**\nStep 1: At $x = 0$, $y = c$, and the curve passes through $(0, 8)$, so $c = 8$.\nStep 2: The axis of symmetry of $y = 3x^2 + bx + c$ is $x = -\\dfrac{b}{2a} = -\\dfrac{b}{6}$. The vertex (and the symmetric points $(0, 8)$, $(-4, 8)$) put the axis at $x = -2$.\nStep 3: $-\\dfrac{b}{6} = -2 \\Rightarrow b = 12$. So $bc = (12)(8) = 96$.\nStep 4: Check: $y = 3x^2 + 12x + 8$ gives $y(-2) = 12 - 24 + 8 = -4$ (the vertex) and $y(0) = 8$. $\\checkmark$\n\n**Common Mistakes:** Reading $c$ from the vertex value $-4$ instead of the $y$-intercept $8$; dropping the sign in $-\\frac{b}{2a}$ and getting $b = -12$; forgetting the factor $a = 3$ in $-\\frac{b}{2a}$.\n\n**Test Day Takeaway:** The $y$-intercept gives $c$ directly; the axis of symmetry $x = -\\frac{b}{2a}$ gives $b$. Watch the leading coefficient $a$.",
  skills: ["quadratic-equations", "vertex-form"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $\\log_3(x + 2) + \\log_3(x - 4) = 3$ and $x > 4$, what is the value of $x$?",
  correctAnswer: "7",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~30s):** Combine the logs: $\\log_3[(x + 2)(x - 4)] = 3 \\Rightarrow (x + 2)(x - 4) = 27 \\Rightarrow x^2 - 2x - 35 = 0 \\Rightarrow (x - 7)(x + 5) = 0$. Since $x > 4$, $x = 7$.\n\n**The Full Solution:**\nStep 1: Apply the product rule: $\\log_3(x + 2) + \\log_3(x - 4) = \\log_3[(x + 2)(x - 4)] = 3$.\nStep 2: Rewrite in exponential form: $(x + 2)(x - 4) = 3^3 = 27$.\nStep 3: Expand: $x^2 - 2x - 8 = 27 \\Rightarrow x^2 - 2x - 35 = 0 \\Rightarrow (x - 7)(x + 5) = 0$, so $x = 7$ or $x = -5$.\nStep 4: The domain requires $x > 4$, so discard $x = -5$. Thus $x = 7$.\nStep 5: Check: $\\log_3(9) + \\log_3(3) = 2 + 1 = 3$. $\\checkmark$\n\n**Common Mistakes:** Skipping the product rule before solving; accepting $x = -5$, which violates $x > 4$ and makes both log arguments negative.\n\n**Test Day Takeaway:** $\\log_b(A) + \\log_b(B) = \\log_b(AB)$. Convert to an exponential equation, then discard solutions outside the domain.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A laser-tag arena sells adult sessions for $\\$32$ each and youth sessions for $\\$18$ each. One afternoon, $40$ sessions were sold for a total of $\\$930$. How many youth sessions were sold?",
  choices: [
    // distractor: stops one step early — reports the adult sessions instead of youth
    { id: "A", text: "$15$" },
    // distractor: wrong base — assumes an even split of the 40 sessions
    { id: "B", text: "$20$" },
    { id: "C", text: "$25$" },
    // distractor: applies inverse op — a subtraction slip in the substitution
    { id: "D", text: "$30$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** If all $40$ sessions were adult at $\\$32$, revenue would be $\\$1{,}280$. The actual $\\$930$ is $\\$350$ less, and each youth swap saves $\\$32 - \\$18 = \\$14$. So $\\dfrac{350}{14} = 25$ youth sessions.\n\n**The Full Solution:**\nStep 1: Let $a$ = adult sessions and $y$ = youth sessions. The count gives $a + y = 40$; the revenue gives $32a + 18y = 930$.\nStep 2: Solve the count equation for $a$: $a = 40 - y$.\nStep 3: Substitute: $32(40 - y) + 18y = 930 \\Rightarrow 1280 - 14y = 930$.\nStep 4: $-14y = -350 \\Rightarrow y = 25$.\nStep 5: Check: $a = 15$, so $32(15) + 18(25) = 480 + 450 = 930$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): the number of ADULT sessions — solved for $a$ instead of the youth count the question asks for.\n* Choice B ($20$): assumes the $40$ sessions split evenly without using the revenue equation.\n* Choice D ($30$): a subtraction slip in the substitution that lands on the wrong root.\n\n**Test Day Takeaway:** Name your variables, substitute the count equation into the money equation, and report the exact quantity the question asks for.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "An agronomist models the soil-moisture rating of a soccer field as $M(t) = -0.2(t - 35)^2 + 84$, where $t$ is the daily irrigation time, in minutes. Which of the following is the best interpretation of the vertex of the graph of $M(t)$ in the $tM$-plane in this context?",
  choices: [
    // distractor: swaps the coordinates of the vertex
    { id: "A", text: "The maximum moisture rating of approximately $35$ occurs at an irrigation time of $84$ minutes." },
    // distractor: wrong direction — calls the maximum a minimum
    { id: "B", text: "The minimum moisture rating of approximately $84$ occurs at an irrigation time of $35$ minutes." },
    // distractor: wrong base — uses the leading coefficient as the irrigation time
    { id: "C", text: "The maximum moisture rating of approximately $84$ occurs at an irrigation time of $0.2$ minutes." },
    { id: "D", text: "The maximum moisture rating of approximately $84$ occurs at an irrigation time of $35$ minutes." }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Quadratic Vertex Form Application**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Vertex form $M(t) = -0.2(t - 35)^2 + 84$ has vertex $(35, 84)$. Since $a = -0.2 < 0$ the parabola opens down, so the vertex is a maximum: rating $\\approx 84$ at $35$ minutes.\n\n**The Full Solution:**\nStep 1: Read off the vertex. In $M(t) = a(t - h)^2 + k$, the vertex is $(h, k) = (35, 84)$.\nStep 2: Check the sign of $a$. Here $a = -0.2 < 0$, so the parabola opens downward and the vertex is the highest point.\nStep 3: Interpret in context. An irrigation time of $35$ minutes produces the maximum moisture rating, about $84$.\n\n**Why the wrong answers are tempting:**\n* Choice A: swaps the coordinates, reporting the time as the rating and the rating as the time.\n* Choice B: calls the vertex a minimum, but $a < 0$ makes it a maximum.\n* Choice C: uses the leading coefficient $0.2$ as the irrigation time instead of the vertex input $35$.\n\n**Test Day Takeaway:** In vertex form $a(t - h)^2 + k$, $h$ is the optimal input and $k$ the optimal output; $a < 0$ makes the vertex a maximum, $a > 0$ a minimum.",
  skills: ["function-interpretation", "quadratic-equations"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = (x + 4)^2 - 9$. The function $g$ is defined by $g(x) = f(x - 5) + 2$. For what value of $x$ does $g$ attain its minimum?",
  choices: [
    // distractor: wrong sign — shifts left instead of right (-4 - 5)
    { id: "A", text: "$-9$" },
    // distractor: stops one step early — gives the vertex of f without applying the shift
    { id: "B", text: "$-4$" },
    { id: "C", text: "$1$" },
    // distractor: off-by-one — adds the vertical shift +2 to the x-coordinate as well
    { id: "D", text: "$3$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $f(x) = (x + 4)^2 - 9$ has its minimum at $x = -4$. The rule $g(x) = f(x - 5) + 2$ shifts the graph RIGHT by $5$, so the minimum moves to $x = -4 + 5 = 1$.\n\n**The Full Solution:**\nStep 1: Locate $f$'s minimum. The vertex of $(x + 4)^2 - 9$ sits at $x = -4$.\nStep 2: Apply the horizontal shift. Replacing $x$ with $x - 5$ moves the graph right by $5$, so the minimum input rises from $-4$ to $1$. The $+2$ only raises the graph and does not change the $x$-coordinate.\nStep 3: Confirm directly: $g(x) = ((x - 5) + 4)^2 - 9 + 2 = (x - 1)^2 - 7$, with vertex at $x = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): shifts left instead of right, using $-4 - 5$.\n* Choice B ($-4$): reports $f$'s vertex without applying the shift at all.\n* Choice D ($3$): adds the vertical shift $+2$ to the $x$-coordinate as well, computing $1 + 2$.\n\n**Test Day Takeaway:** $f(x - c)$ shifts the graph RIGHT by $c$; vertical shifts never move the $x$-coordinate of a max or min.",
  skills: ["function-interpretation", "vertex-form"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In $2022$, an orchard's cider production was $24\\%$ greater than in $2021$, and in $2023$ its production was $10\\%$ less than in $2022$. If the $2023$ production was $y$ times the $2021$ production, what is the value of $y$?",
  choices: [
    // distractor: nets the percents as 24 - 10 = 14 and reports the raw decimal
    { id: "A", text: "$0.1400$" },
    // distractor: multiplies the rates (0.24 × 0.10) and adds 1
    { id: "B", text: "$1.0240$" },
    { id: "C", text: "$1.1160$" },
    // distractor: adds the net percent change (24 - 10 = 14) to 1 instead of compounding
    { id: "D", text: "$1.1400$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Successive Percent Changes**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Turn each change into a multiplier and multiply: an increase of $24\\%$ is $\\times 1.24$; a decrease of $10\\%$ is $\\times 0.90$. So $y = 1.24 \\times 0.90 = 1.1160$.\n\n**The Full Solution:**\nStep 1: Let $P$ be the $2021$ production. A $24\\%$ increase multiplies by $1.24$, giving $1.24P$ in $2022$.\nStep 2: A $10\\%$ DECREASE multiplies by $1 - 0.10 = 0.90$: $0.90 \\cdot 1.24P = 1.116P$ in $2023$.\nStep 3: Since the $2023$ production equals $1.1160$ times the $2021$ production, $y = 1.1160$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.1400$): nets the percents ($24 - 10 = 14$) and reports the raw decimal, missing the base $1$.\n* Choice B ($1.0240$): multiplies the rates $0.24 \\times 0.10$ and adds $1$.\n* Choice D ($1.1400$): adds the net percent change ($14\\%$) to $1$ instead of compounding the multipliers.\n\n**Test Day Takeaway:** Successive percent changes MULTIPLY their factors; \"$p\\%$ greater\" is $\\times\\left(1 + \\frac{p}{100}\\right)$ and \"$p\\%$ less\" is $\\times\\left(1 - \\frac{p}{100}\\right)$.",
  skills: ["percents", "successive-percent"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = -a^x + b$, where $a$ and $b$ are constants. In the $xy$-plane, the graph of $y = f(x) - 9$ has a $y$-intercept at $(0, -6)$. The product of $a$ and $b$ is $40$. What is the value of $a$?",
  correctAnswer: "10",
  explanation: "**SAT Pattern: Exponential Function with Two Conditions**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~40s):** At $x = 0$ the shifted graph gives $f(0) - 9 = -6$, so $f(0) = 3$. Since $f(0) = -a^0 + b = -1 + b$, we get $b = 4$. Then $ab = 40 \\Rightarrow a = 10$.\n\n**The Full Solution:**\nStep 1: The $y$-intercept of $y = f(x) - 9$ is at $x = 0$, so $f(0) - 9 = -6$, giving $f(0) = 3$.\nStep 2: Evaluate $f(0) = -a^0 + b$. Any nonzero base to the $0$ power is $1$, so $f(0) = -1 + b$.\nStep 3: Set equal to $3$: $-1 + b = 3 \\Rightarrow b = 4$.\nStep 4: Use the product condition $ab = 40$: $a \\cdot 4 = 40 \\Rightarrow a = 10$.\nStep 5: Check: $f(0) = -10^0 + 4 = -1 + 4 = 3$, and $f(0) - 9 = -6$. $\\checkmark$\n\n**Common Mistakes:** Forgetting that $a^0 = 1$, which fixes $f(0) = -1 + b$; solving correctly but reporting $b = 4$ instead of the requested $a$.\n\n**Test Day Takeaway:** Evaluate at $x = 0$ to pin one constant (any base to the $0$ power is $1$), then use the product condition to recover the other.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The list shows the number of soft pretzels sold at a movie theater's concession stand on each of six days:\n\n$$31, \\; 45, \\; 18, \\; 36, \\; 42, \\; 20$$\n\nWhat is the range of these numbers?",
  choices: [
    // distractor: off-by-one — subtracts the first listed value from the maximum (45 - 31)
    { id: "A", text: "$14$" },
    { id: "B", text: "$27$" },
    // distractor: applies inverse op — computes the mean instead of the range
    { id: "C", text: "$32$" },
    // distractor: wrong base — reports the maximum value instead of the range
    { id: "D", text: "$45$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Range $=$ max $-$ min $= 45 - 18 = 27$.\n\n**The Full Solution:**\nStep 1: Find the extremes. The largest value is $45$ and the smallest is $18$.\nStep 2: Subtract: $45 - 18 = 27$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): subtracts the first listed value ($45 - 31$) rather than the minimum.\n* Choice C ($32$): computes the mean of the six values ($\\frac{192}{6}$) instead of the range.\n* Choice D ($45$): reports the maximum value alone instead of the spread.\n\n**Test Day Takeaway:** Range $=$ max $-$ min. Find the extreme values first; the order of the list does not matter.",
  skills: ["statistics"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the horizontal line $y = -3$ intersects the parabola $y = x^2 + 7x + c$ at exactly one point, where $c$ is a constant. What is the value of $c$?",
  correctAnswer: "9.25",
  explanation: "**SAT Pattern: Quadratic — Discriminant Test**\n\n**The correct answer is $9.25$.**\n\n**The Fast Way (~30s):** Set the curves equal: $x^2 + 7x + c = -3 \\Rightarrow x^2 + 7x + (c + 3) = 0$. One intersection means discriminant $= 0$: $7^2 - 4(c + 3) = 0 \\Rightarrow 49 = 4(c + 3) \\Rightarrow c = \\dfrac{49}{4} - 3 = 9.25$.\n\n**The Full Solution:**\nStep 1: The line and parabola meet where their $y$-values match: $x^2 + 7x + c = -3$.\nStep 2: Collect into standard form: $x^2 + 7x + (c + 3) = 0$.\nStep 3: Exactly one intersection means one repeated real root, so the discriminant is $0$: $7^2 - 4(1)(c + 3) = 0$.\nStep 4: $49 - 4c - 12 = 0 \\Rightarrow 4c = 37 \\Rightarrow c = 9.25$.\nStep 5: Check: with $c = 9.25$, $x^2 + 7x + 12.25 = (x + 3.5)^2 = 0$, one solution at $x = -3.5$, where $y = -3$. $\\checkmark$\n\n**Common Mistakes:** Forgetting to move the $-3$ over and leaving the constant as $c$ instead of $c + 3$; using discriminant $> 0$ (two points); reporting the repeated root $-3.5$ instead of the requested constant $c$.\n\n**Test Day Takeaway:** A line meets a parabola exactly once when, after setting them equal and collecting into a quadratic, the discriminant equals $0$.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, a parabola has vertex $(4, -6)$ and passes through the point $(6, 2)$. The equation of the parabola is written as $y = ax^2 + bx + c$, where $a$, $b$, and $c$ are constants. What is the value of $c$?",
  correctAnswer: "26",
  explanation: "**SAT Pattern: Vertex Form to Find y-Intercept**\n\n**The correct answer is $26$.**\n\n**The Fast Way (~40s):** Write vertex form $y = a(x - 4)^2 - 6$. Plug in $(6, 2)$: $2 = a(2)^2 - 6 \\Rightarrow 4a = 8 \\Rightarrow a = 2$. Then $c = y(0) = 2(0 - 4)^2 - 6 = 32 - 6 = 26$.\n\n**The Full Solution:**\nStep 1: Use the vertex $(4, -6)$ to write $y = a(x - 4)^2 - 6$.\nStep 2: Substitute the point $(6, 2)$: $2 = a(6 - 4)^2 - 6 = 4a - 6 \\Rightarrow 4a = 8 \\Rightarrow a = 2$.\nStep 3: The constant $c$ is the $y$-intercept, the value at $x = 0$: $c = 2(0 - 4)^2 - 6 = 2(16) - 6 = 32 - 6 = 26$.\nStep 4: Check by expanding: $y = 2(x^2 - 8x + 16) - 6 = 2x^2 - 16x + 26$, so $c = 26$. $\\checkmark$\n\n**Common Mistakes:** Reporting the vertex $y$-value $-6$ as $c$; forgetting to square the difference $(0 - 4)$ when evaluating at $x = 0$.\n\n**Test Day Takeaway:** Find $a$ from vertex form using the given point, then evaluate at $x = 0$ to read off the $y$-intercept $c$.",
  skills: ["quadratic-equations", "vertex-form"]
}
      ]
    }
  ]
};

export default practiceTest10;
