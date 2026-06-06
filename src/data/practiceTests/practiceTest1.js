// Practice Test 1 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Round-7 recalibration: M1 lifted to band-3 ceiling on easy items, domain
// rebalanced to 7/6/5/4. M2 hardened to 0E/6M/16H with band-7 ceilings on
// most hard items and concept-fusion items added at the top end.

export const practiceTest1 = {
  id: "practice-test-1",
  title: "Practice Test 1 — Math",
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
  question: "A recipe uses sugar and flour in a ratio of $3$ cups of sugar to $8$ cups of flour. If the total amount of sugar and flour combined is $44$ cups, how many cups of sugar does the recipe use?",
  choices: [
    // distractor: picks the flour ratio number (8) directly
    { id: "A", text: "$8$" },
    { id: "B", text: "$12$" },
    // distractor: uses 3/8 of total instead of 3/11 ($16.5$)
    { id: "C", text: "$16.5$" },
    // distractor: solves for flour amount instead of sugar (8/11 of 44 = 32)
    { id: "D", text: "$32$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Sugar makes up $\\dfrac{3}{3 + 8} = \\dfrac{3}{11}$ of the total. So sugar $= \\dfrac{3}{11} \\cdot 44 = 12$ cups.\n\n**The Full Solution:**\nLet sugar $= 3k$ and flour $= 8k$ (so the ratio is $3 : 8$).\nTotal: $3k + 8k = 11k = 44$, so $k = 4$.\nSugar $= 3k = 3 \\cdot 4 = 12$ cups.\n\nVerification: flour $= 8 \\cdot 4 = 32$, total $= 12 + 32 = 44$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports $8$ (the flour part of the ratio) instead of solving the proportion.\n* Choice C: \"wrong base\" — uses $\\dfrac{3}{8}$ of the total instead of $\\dfrac{3}{11}$.\n* Choice D: \"applies the inverse operation\" — solves for flour ($\\dfrac{8}{11} \\cdot 44 = 32$) instead of sugar.\n\n**Test Day Takeaway:** When two parts are given as a ratio and the total of both parts is known, the denominator of each fraction is the SUM of the ratio parts, not just one part.",
  skills: ["ratios", "word-problems"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A school library has $1{,}260$ fiction books, and the number of fiction books is $35\\%$ of the total number of books in the library. How many books, in total, are in the library?",
  choices: [
    // distractor: applies the percent forward — $1260 \times 0.35 = 441$
    { id: "A", text: "$441$" },
    // distractor: divides by the complement: $\\frac{1260}{0.65} \approx 1938$, rounds to $1{,}938$
    { id: "B", text: "$1{,}938$" },
    { id: "C", text: "$3{,}600$" },
    // distractor: divides by $0.035$ instead of $0.35$ (decimal-place slip)
    { id: "D", text: "$36{,}000$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Total $\\times 0.35 = 1{,}260$, so total $= \\frac{1{,}260}{0.35} = 3{,}600$.\n\n**The Full Solution:**\nLet $T$ be the total number of books. Then ${}0.35 \\cdot T = 1{,}260$.\nDivide both sides by $0.35$: $T = \\dfrac{1{,}260}{0.35} = 3{,}600$.\n\nVerification: $35\\%$ of $3{,}600 = 0.35 \\cdot 3{,}600 = 1{,}260$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — multiplies $1{,}260 \\cdot 0.35 = 441$ instead of dividing.\n* Choice B: \"wrong base\" — divides by the complement $0.65$ (treats $1{,}260$ as the non-fiction count).\n* Choice D: \"off-by-one / decimal slip\" — divides by $0.035$ instead of $0.35$.\n\n**Test Day Takeaway:** When a percent of an unknown total is given, divide the part by the percent (as a decimal) to recover the whole.",
  skills: ["percents"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A ceramics studio charges $\\$7$ for each glaze coat fired plus a flat $\\$3$ kiln-setup fee per order. The total charge for firing $n$ glaze coats in one order is $\\$38$. What is the total charge, in dollars, for an order of $n + 4$ glaze coats (with one setup fee)?",
  choices: [
    // distractor: adds the count 4 as dollars instead of 4 * $7 = $28
    { id: "A", text: "$\\$42$" },
    // distractor: uses the $3 setup fee as the per-coat price for the extra coats
    { id: "B", text: "$\\$50$" },
    { id: "C", text: "$\\$66$" },
    // distractor: doubles the original total ($38 * 2 = 76$)
    { id: "D", text: "$\\$76$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $4$ extra coats at $\\$7$ each add $\\$28$ to the original total. New total: $\\$38 + \\$28 = \\$66$.\n\n**The Full Solution:**\nLet the cost equation be $7n + 3 = 38$, so $7n = 35$ and $n = 5$.\nFor $n + 4 = 9$ coats: total $= 7(9) + 3 = 63 + 3 = \\$66$.\n\nShortcut: you do not need to find $n$. Adding $4$ coats adds $4 \\cdot \\$7 = \\$28$, and the setup fee is unchanged, so the new total is $\\$38 + \\$28 = \\$66$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — adds the count $4$ as dollars instead of $4 \\cdot \\$7 = \\$28$.\n* Choice B: \"wrong base\" — uses the setup fee ($\\$3$) as the per-coat price: $\\$38 + 4 \\cdot \\$3 = \\$50$.\n* Choice D: \"off-by-one\" — double-counts the original $\\$38$ as if it were charged twice.\n\n**Test Day Takeaway:** Linear cost = (rate $\\times$ quantity) + fixed fee. Adding more items changes only the rate-times-quantity piece — the fixed fee stays put.",
  skills: ["word-problems", "solving-equations"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $\\dfrac{2x}{15} = \\dfrac{18}{5}$, what is the value of $x - 7$?",
  choices: [
    { id: "A", text: "$20$" },
    // distractor: stops at x = 27 (forgets the "minus 7" final step)
    { id: "B", text: "$27$" },
    // distractor: adds 7 instead of subtracting
    { id: "C", text: "$34$" },
    // distractor: leaves the answer at 2x = 54 instead of x
    { id: "D", text: "$54$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Cross-multiply: $2x \\cdot 5 = 15 \\cdot 18$, so $10x = 270$ and $x = 27$. Then $x - 7 = 20$.\n\n**The Full Solution:**\n$\\dfrac{2x}{15} = \\dfrac{18}{5}$\n\nCross-multiply: $5 \\cdot 2x = 15 \\cdot 18 \\Rightarrow 10x = 270 \\Rightarrow x = 27$.\n\nThe question asks for $x - 7$, not $x$: $27 - 7 = 20$.\n\nVerification: $\\dfrac{2(27)}{15} = \\dfrac{54}{15} = \\dfrac{18}{5}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — solves for $x$ correctly but forgets to subtract $7$.\n* Choice C: \"applies the inverse operation\" — adds $7$ to $x$ instead of subtracting.\n* Choice D: \"wrong base\" — keeps $2x$ instead of solving for $x$.\n\n**Test Day Takeaway:** Always re-read the last sentence before answering. The question often asks for a related quantity, not the variable itself.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The function $f(t) = 85 + 12t$ models the temperature, in degrees Fahrenheit, of a liquid $t$ minutes after heating begins. What does the number $12$ represent in this context?",
  choices: [
    // distractor: confuses 12 with the initial value (which is 85)
    { id: "A", text: "The temperature of the liquid before heating begins" },
    // distractor: treats 12 as an input value rather than a rate of change
    { id: "B", text: "The temperature of the liquid after $12$ minutes" },
    { id: "C", text: "The increase in temperature, in degrees Fahrenheit, each minute" },
    // distractor: inverts the rate (would be 1/12 minutes per degree)
    { id: "D", text: "The number of minutes needed for the temperature to increase by $1$ degree" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** In $f(t) = 85 + 12t$, the coefficient of $t$ is the rate of change: $12$ degrees per minute.\n\n**The Full Solution:**\nThe function is in the form $f(t) = b + mt$, where $m = 12$ is the slope and $b = 85$ is the $y$-intercept. The slope tells us the rate of change: for each additional minute, the temperature increases by $12$ degrees Fahrenheit.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — confuses the slope $12$ with the initial value, which is $85$.\n* Choice B: \"applies the inverse operation\" — treats $12$ as an input value $t = 12$ instead of a rate.\n* Choice D: \"applies the inverse operation\" — inverts the rate (one degree per $\\tfrac{1}{12}$ minute).\n\n**Test Day Takeaway:** In $y = b + mx$, the coefficient of the variable is always the rate of change per unit of that variable.",
  skills: ["function-interpretation", "linear-functions", "slope"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  question: "A data set is modeled by the linear equation $y = 1.8x + 12.5$. According to this model, what is the predicted value of $y$ when $x = 15$?",
  choices: [
    // distractor: stops at 1.8 * 15 = 27 — forgets to add the 12.5 intercept
    { id: "A", text: "$27.0$" },
    // distractor: adds only part of the 12.5 intercept (e.g., 7.5)
    { id: "B", text: "$34.5$" },
    { id: "C", text: "$39.5$" },
    // distractor: rounds 1.8 to 2 and 12.5 to 12 — wrong base on rounding
    { id: "D", text: "$42.0$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $y = 1.8(15) + 12.5 = 27.0 + 12.5 = 39.5$.\n\n**The Full Solution:**\nSubstitute $x = 15$ into the equation:\n$y = 1.8(15) + 12.5 = 27.0 + 12.5 = 39.5$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — computes $1.8 \\times 15 = 27$ but forgets to add the intercept $12.5$.\n* Choice B: \"off-by-one\" — adds part of the intercept (e.g., $7.5$ instead of $12.5$).\n* Choice D: \"wrong base\" — rounds $1.8 \\to 2$ and $12.5 \\to 12$, getting $2(15) + 12 = 42$.\n\n**Test Day Takeaway:** When you plug a value into $y = mx + b$, do not forget the constant term. Decimal multiplication is easy to slip on under time pressure.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A solid right circular cone has a base radius of $6$ centimeters and a height of $14$ centimeters. The volume of the cone, in cubic centimeters, can be expressed as $k\\pi$. What is the value of $k$?",
  correctAnswer: "168",
  explanation: "**SAT Pattern: Volume of a Cone**\n\n**The correct answer is $168$.**\n\n**The Fast Way (~15s):** $V = \\dfrac{1}{3}\\pi r^2 h = \\dfrac{1}{3}\\pi (6)^2 (14) = \\dfrac{1}{3}\\pi (36)(14) = 168\\pi$. So $k = 168$.\n\n**The Full Solution:**\nThe volume formula for a right circular cone is $V = \\dfrac{1}{3}\\pi r^2 h$.\nWith $r = 6$ cm and $h = 14$ cm:\n$V = \\dfrac{1}{3}\\pi (6)^2 (14) = \\dfrac{1}{3}\\pi (36)(14) = \\dfrac{1}{3}\\pi (504) = 168\\pi$ cubic centimeters.\nSo $k = 168$.\n\n**Common Mistakes to Avoid:**\n* Forgetting the $\\dfrac{1}{3}$ factor — using $\\pi r^2 h = 504\\pi$ would give $k = 504$ (the cylinder, not the cone).\n* Forgetting to square the radius — using $\\dfrac{1}{3}\\pi r h$ gives $28\\pi$.\n\n**Verification:** $\\dfrac{1}{3}(36)(14) = \\dfrac{504}{3} = 168$ \\checkmark, and $k = 168$ is unitless because we factored out $\\pi$.\n\n**Test Day Takeaway:** For a cone, square the radius, multiply by the height, THEN take one-third. Memorize $V = \\dfrac{1}{3}\\pi r^2 h$ — it is on the Reference Sheet.",
  skills: ["volume", "geometry"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A colony of algae triples in size every $4$ hours. If the colony starts with $200$ cells, which function $N(t)$ gives the number of cells after $t$ hours?",
  choices: [
    // distractor: uses 4t instead of t/4 — would over-grow each hour
    { id: "A", text: "$N(t) = 200(3)^{4t}$" },
    { id: "B", text: "$N(t) = 200(3)^{\\frac{t}{4}}$" },
    // distractor: swaps the base (3) and the period (4)
    { id: "C", text: "$N(t) = 200(4)^{\\frac{t}{3}}$" },
    // distractor: starts at 600 (already tripled) instead of 200
    { id: "D", text: "$N(t) = 600(3)^{t}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"Triples every $4$ hours\" means the exponent must equal $1$ when $t = 4$: $\\dfrac{t}{4}$ gives $\\dfrac{4}{4} = 1$. Initial value is $200$, base is $3$.\n\n**The Full Solution:**\nThe general tripling-period model is $N(t) = N_0 \\cdot 3^{\\frac{t}{d}}$, where $N_0 = 200$ and $d = 4$.\nSo $N(t) = 200(3)^{\\frac{t}{4}}$.\n\nCheck: $N(4) = 200(3)^1 = 600$ (tripled) \\checkmark, $N(8) = 200(3)^2 = 1800$ (tripled again) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses $4t$ in the exponent instead of $\\dfrac{t}{4}$, which over-grows the colony.\n* Choice C: \"wrong base\" — swaps the base $3$ and the period $4$.\n* Choice D: \"off-by-one\" — starts at $600$ (already tripled) instead of $200$.\n\n**Test Day Takeaway:** \"Triples every $d$ units\" $\\Rightarrow$ base $3$ with exponent $\\dfrac{t}{d}$. The period goes UNDER $t$ in the exponent, not multiplied by it.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "\n\n| | Prefer Coffee | Prefer Tea | Total |\n|---|---|---|---|\n| Age 18-30 | $42$ | $58$ | $100$ |\n| Age 31-50 | $65$ | $35$ | $100$ |\n| Total | $107$ | $93$ | $200$ |\n\nBased on the table above, what percentage of people who prefer tea are in the 18-30 age group? (Round to the nearest whole number.)",
  choices: [
    // distractor: divides 58 by grand total 200 (uses wrong base)
    { id: "A", text: "$29\\%$" },
    // distractor: reads 58 directly as a percentage from the table
    { id: "B", text: "$58\\%$" },
    { id: "C", text: "$62\\%$" },
    // distractor: uses 35 (the other row) instead of 58
    { id: "D", text: "$38\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Tea preferrers who are 18-30: $58$. Total tea preferrers: $93$. Percentage: $\\dfrac{58}{93} \\approx 0.624 \\approx 62\\%$.\n\n**The Full Solution:**\nThe question asks: of those who prefer tea, what percentage are aged 18-30? This is a conditional probability.\n$\\dfrac{\\text{Age 18-30 and Tea}}{\\text{Total Tea}} = \\dfrac{58}{93} \\approx 0.6237 \\approx 62\\%$\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — divides by the grand total ($200$) instead of the tea column total ($93$): $\\dfrac{58}{200} = 29\\%$.\n* Choice B: \"stops one step early\" — reads $58$ directly as if the table were already in percent.\n* Choice D: \"off-by-one\" — uses the wrong row ($35$ from 31-50) and divides by $93$ to get $\\approx 38\\%$.\n\n**Test Day Takeaway:** In conditional probability, the denominator is the total of the GIVEN condition, not the grand total.",
  skills: ["two-way-tables", "probability", "percents"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A line passes through the points $(3, -2)$ and $(7, 10)$. What is the $y$-intercept of this line?",
  choices: [
    { id: "A", text: "$-11$" },
    // distractor: drops the -2 from -2 - 9 (gets -9 instead of -11)
    { id: "B", text: "$-9$" },
    // distractor: uses slope = 2 instead of 3
    { id: "C", text: "$-8$" },
    // distractor: subtracts the x-coordinate directly (-2 - 3 = -5)
    { id: "D", text: "$-5$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Slope $= \\dfrac{10 - (-2)}{7 - 3} = \\dfrac{12}{4} = 3$. Using $(3, -2)$: $-2 = 3(3) + b$, so $b = -2 - 9 = -11$.\n\n**The Full Solution:**\nStep 1: Find the slope.\n$m = \\dfrac{10 - (-2)}{7 - 3} = \\dfrac{12}{4} = 3$\n\nStep 2: Use slope-intercept form with $(3, -2)$.\n$-2 = 3(3) + b \\Rightarrow b = -2 - 9 = -11$\n\nThe equation is $y = 3x - 11$, so the $y$-intercept is $-11$.\n\nVerification: at $(7, 10)$, $3(7) - 11 = 10$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"off-by-one\" — drops the $-2$ when computing $-2 - 9$, giving $-9$.\n* Choice C: \"wrong base\" — uses slope $= 2$ instead of $3$.\n* Choice D: \"applies the inverse operation\" — subtracts the $x$-coordinate $3$ from $-2$ to get $-5$.\n\n**Test Day Takeaway:** Always verify the $y$-intercept by checking that BOTH original points satisfy your equation.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the right triangle shown, one acute angle measures $35^{\\circ}$ and the side opposite that angle has length $9$. Which expression gives the length of the hypotenuse?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["35°", "", ""],
      sideLabels: ["", "9", ""],
      rightAngleVertex: 1
    }
  },
  choices: [
    { id: "A", text: "$\\dfrac{9}{\\sin 35^{\\circ}}$" },
    // distractor: uses cosine (adjacent/hypotenuse) instead of sine (opposite/hypotenuse)
    { id: "B", text: "$\\dfrac{9}{\\cos 35^{\\circ}}$" },
    // distractor: multiplies (gives a value < 9, smaller than the opposite — impossible for hypotenuse)
    { id: "C", text: "$9 \\sin 35^{\\circ}$" },
    // distractor: uses cosine and multiplies — both errors at once
    { id: "D", text: "$9 \\cos 35^{\\circ}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $\\sin 35^{\\circ} = \\dfrac{\\text{opposite}}{\\text{hypotenuse}} = \\dfrac{9}{h}$, so $h = \\dfrac{9}{\\sin 35^{\\circ}}$.\n\n**The Full Solution:**\nIn a right triangle, $\\sin(\\theta) = \\dfrac{\\text{opposite}}{\\text{hypotenuse}}$. For the $35^{\\circ}$ angle, the opposite side is $9$ and the hypotenuse is $h$:\n$\\sin 35^{\\circ} = \\dfrac{9}{h} \\Rightarrow h = \\dfrac{9}{\\sin 35^{\\circ}}$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — uses cosine, which relates the adjacent side, not the opposite.\n* Choice C: \"applies the inverse operation\" — multiplies by sine, but $\\sin 35^{\\circ} < 1$, so the result is less than $9$ — smaller than the opposite leg. The hypotenuse must be the longest side.\n* Choice D: \"applies the inverse operation\" + \"wrong base\" — both mistakes (cosine AND multiplication).\n\n**Test Day Takeaway:** SOH-CAH-TOA: Sine $= \\dfrac{\\text{Opposite}}{\\text{Hypotenuse}}$. To find the hypotenuse from the opposite leg, divide by $\\sin$.",
  skills: ["triangles", "angles"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $4(2w - 3) + 5 = 3w + 12$, what is the value of $w$?",
  correctAnswer: "19/5",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $\\dfrac{19}{5}$.**\n\n**The Fast Way (~20s):** Expand: $8w - 12 + 5 = 3w + 12$, so $8w - 7 = 3w + 12$, then $5w = 19$, giving $w = \\dfrac{19}{5}$.\n\n**The Full Solution:**\n$4(2w - 3) + 5 = 3w + 12$\n$8w - 12 + 5 = 3w + 12$\n$8w - 7 = 3w + 12$\n$5w = 19$\n$w = \\dfrac{19}{5}$\n\n**Common Mistakes to Avoid:**\n* Forgetting to distribute the $4$ to BOTH terms inside the parentheses (often missed: $-3 \\to -12$).\n* Sign errors when combining $-12 + 5 = -7$ (some students write $-17$).\n\n**Verification:** Left $= 4(2 \\cdot \\tfrac{19}{5} - 3) + 5 = 4 \\cdot \\tfrac{23}{5} + 5 = \\tfrac{92}{5} + \\tfrac{25}{5} = \\tfrac{117}{5}$. Right $= 3 \\cdot \\tfrac{19}{5} + 12 = \\tfrac{57}{5} + \\tfrac{60}{5} = \\tfrac{117}{5}$ \\checkmark.\n\n**Test Day Takeaway:** Distribute first, combine like terms second, isolate the variable last. Each step is mechanical — slow down to avoid sign slips.",
  skills: ["solving-equations"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The system of equations below has the solution $(x, y)$.\n\n$5x - 3y = 19$\n$2x + 3y = 16$\n\nWhat is the value of $y$?",
  choices: [
    // distractor: arithmetic error — divides 6 by 6 instead of 3 to get 1
    { id: "A", text: "$1$" },
    { id: "B", text: "$2$" },
    // distractor: wrong base — picks one of the system coefficients
    { id: "C", text: "$3$" },
    // distractor: stops one step early — gives x instead of y
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Add the two equations to eliminate $y$: $7x = 35$, so $x = 5$. Substitute: $2(5) + 3y = 16$, so $3y = 6$ and $y = 2$.\n\n**The Full Solution:**\nAdding the equations:\n$(5x - 3y) + (2x + 3y) = 19 + 16$\n$7x = 35 \\Rightarrow x = 5$\n\nSubstitute $x = 5$ into $2x + 3y = 16$:\n$10 + 3y = 16 \\Rightarrow 3y = 6 \\Rightarrow y = 2$.\n\nVerification: $5(5) - 3(2) = 25 - 6 = 19$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — divides $6$ by $6$ instead of $3$ in the final step.\n* Choice C: \"wrong base\" — picks a coefficient from the system as the answer.\n* Choice D: \"stops one step early\" — reports the value of $x$ instead of $y$.\n\n**Test Day Takeaway:** When the coefficients of one variable are opposites, ADD the equations to eliminate it instantly.",
  skills: ["systems-of-equations", "solving-equations"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "Line $p$ has a slope of $-\\dfrac{2}{5}$. Line $q$ is perpendicular to line $p$ and passes through the point $(4, -1)$. What is the $y$-intercept of line $q$?",
  correctAnswer: "-11",
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $-11$.**\n\n**The Fast Way (~20s):** Perpendicular slope is $\\dfrac{5}{2}$. Using $(4, -1)$: $-1 = \\dfrac{5}{2}(4) + b$, so $-1 = 10 + b$ and $b = -11$.\n\n**The Full Solution:**\nPerpendicular slopes are negative reciprocals.\nSlope of $p$: $-\\dfrac{2}{5}$. Slope of $q$: $\\dfrac{5}{2}$.\n\nUsing $(4, -1)$: $-1 = \\dfrac{5}{2}(4) + b \\Rightarrow -1 = 10 + b \\Rightarrow b = -11$.\n\n**Common Mistakes to Avoid:**\n* Using the same slope (parallel) instead of the negative reciprocal.\n* Getting $\\dfrac{2}{5}$ instead of $\\dfrac{5}{2}$ (forgetting to flip).\n\n**Verification:** at $(4, -1)$: $\\dfrac{5}{2}(4) - 11 = 10 - 11 = -1$ \\checkmark.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals: flip the fraction AND change the sign.",
  skills: ["slope", "linear-functions", "coordinate-geometry"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Over $9$ days, a trail crew recorded the number of fallen branches cleared each day. The counts for $8$ of the days are listed below.\n\n$14, 19, 16, 23, 18, 25, 20, 17$\n\nIf the mean number of branches cleared per day over all $9$ days is $21$, how many branches were cleared on the ninth day?",
  correctAnswer: "37",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $37$.**\n\n**The Fast Way (~25s):** Total sum $= 9 \\cdot 21 = 189$. Sum of the $8$ listed counts: $14 + 19 + 16 + 23 + 18 + 25 + 20 + 17 = 152$. Ninth day $= 189 - 152 = 37$.\n\n**The Full Solution:**\nIf the mean over $9$ days is $21$, the total of all $9$ counts is $9 \\cdot 21 = 189$.\nSum of the $8$ listed counts: $14 + 19 = 33$; $33 + 16 = 49$; $49 + 23 = 72$; $72 + 18 = 90$; $90 + 25 = 115$; $115 + 20 = 135$; $135 + 17 = 152$.\nNinth day $= 189 - 152 = 37$.\n\n**Common Mistakes to Avoid:**\n* Computing the mean of the listed $8$ counts ($\\frac{152}{8} = 19$) and reporting it.\n* Subtracting the wrong way (e.g., $152 - 189 = -37$).\n\n**Verification:** mean $= \\dfrac{152 + 37}{9} = \\dfrac{189}{9} = 21$ \\checkmark.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ total. To recover a missing value, compute the total from the mean, then subtract the known sum.",
  skills: ["statistics", "mean"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation of a circle in the $xy$-plane is $x^2 + y^2 - 6x + 10y + 18 = 0$. What is the radius of the circle?",
  choices: [
    { id: "A", text: "$4$" },
    // distractor: completes only one square or drops a constant on the right
    { id: "B", text: "$\\sqrt{7}$" },
    // distractor: confuses the constant 18 with r^2
    { id: "C", text: "$\\sqrt{18}$" },
    // distractor: stops one step early — reports r^2 = 16 instead of r = 4
    { id: "D", text: "$16$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Complete the square: $(x-3)^2 + (y+5)^2 = 9 + 25 - 18 = 16$. Radius $= \\sqrt{16} = 4$.\n\n**The Full Solution:**\nGroup $x$- and $y$-terms:\n$(x^2 - 6x) + (y^2 + 10y) = -18$\n\nComplete the square: half of $-6$ is $-3$, $(-3)^2 = 9$. Half of $10$ is $5$, $5^2 = 25$.\n\n$(x^2 - 6x + 9) + (y^2 + 10y + 25) = -18 + 9 + 25$\n$(x - 3)^2 + (y + 5)^2 = 16$\n\nRadius $= \\sqrt{16} = 4$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"off-by-one\" — only completes one square (e.g., $9 - 18 + 25 = 16$ but partial steps drop a $9$ to give $7$).\n* Choice C: \"wrong base\" — confuses the constant $18$ with $r^2$.\n* Choice D: \"stops one step early\" — reports $r^2 = 16$ as the radius instead of $r = 4$.\n\n**Test Day Takeaway:** Complete the square for BOTH variables. The radius is $\\sqrt{r^2}$, not $r^2$ itself.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $\\dfrac{8^{x+1} \\cdot 4^{2x}}{2^{5x-2}} = 2^{n}$ and $x = 2$, what is the value of $n$?",
  correctAnswer: "9",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~30s):** Convert all to base $2$ at $x = 2$: $8^3 = 2^9$, $4^4 = 2^8$, denominator $2^{8}$. So $\\dfrac{2^9 \\cdot 2^8}{2^8} = 2^{9}$. Hence $n = 9$.\n\n**The Full Solution:**\nSubstitute $x = 2$:\n$\\dfrac{8^{2+1} \\cdot 4^{2(2)}}{2^{5(2)-2}} = \\dfrac{8^3 \\cdot 4^4}{2^8}$\n\nConvert to base $2$:\n$8^3 = (2^3)^3 = 2^9$\n$4^4 = (2^2)^4 = 2^8$\n$2^8$ stays as $2^8$.\n\nCombine: $\\dfrac{2^9 \\cdot 2^8}{2^8} = 2^{9 + 8 - 8} = 2^9$.\n\nSo $n = 9$.\n\n**Common Mistakes to Avoid:**\n* Writing $4^4 = 2^{4 \\cdot 4} = 2^{16}$ instead of $2^{2 \\cdot 4} = 2^8$ — forgetting that $4 = 2^2$, not $2^4$.\n* Subtracting exponents incorrectly when dividing.\n\n**Verification:** $\\dfrac{512 \\cdot 256}{256} = 512 = 2^9$ \\checkmark.\n\n**Test Day Takeaway:** Convert all bases to the same prime, then add when multiplying and subtract when dividing.",
  skills: ["exponent-rules"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the parabola $y = -2x^2 + bx + c$ has its vertex at $(-3, 8)$. What is the value of $c$?",
  choices: [
    // distractor: sums -18 - 10 = -28 (an arithmetic mishap)
    { id: "A", text: "$-28$" },
    { id: "B", text: "$-10$" },
    // distractor: confuses the y-coordinate of the vertex (8) sign-flipped with c
    { id: "C", text: "$-8$" },
    // distractor: sign error: -18 + 8 misread as +10
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Vertex form: $y = -2(x + 3)^2 + 8$. Expand: $-2(x^2 + 6x + 9) + 8 = -2x^2 - 12x - 18 + 8 = -2x^2 - 12x - 10$. So $c = -10$.\n\n**The Full Solution:**\nWith vertex $(-3, 8)$ and leading coefficient $a = -2$:\n$y = -2(x - (-3))^2 + 8 = -2(x + 3)^2 + 8$\n\nExpand:\n$y = -2(x^2 + 6x + 9) + 8$\n$y = -2x^2 - 12x - 18 + 8$\n$y = -2x^2 - 12x - 10$\n\nSo $b = -12$ and $c = -10$.\n\nVerification: vertex $x$-coordinate $= -\\dfrac{b}{2a} = -\\dfrac{-12}{-4} = -3$ \\checkmark, and $y(-3) = -2(9) + 36 - 10 = 8$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — adds $-18 + (-10) = -28$ instead of $-18 + 8 = -10$.\n* Choice C: \"wrong base\" — confuses $c$ with the negated $y$-coordinate of the vertex.\n* Choice D: \"applies the inverse operation\" — sign error: $-18 + 8$ misread as $+10$.\n\n**Test Day Takeaway:** Write vertex form first, then expand to standard form. The constant term $c$ is the $y$-intercept, NOT the vertex $y$-coordinate.",
  skills: ["vertex-form", "quadratic-equations", "coordinate-geometry"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For what value of $c$ does the system of equations below have exactly one solution?\n\n$y = 2x^2 + 11x + 2$\n$y = 4x + c$",
  choices: [
    // distractor: sign error in distributing -8(2-c)
    { id: "A", text: "$c = -\\dfrac{41}{8}$" },
    { id: "B", text: "$c = -\\dfrac{33}{8}$" },
    // distractor: sets 2 - c = 0 instead of using the discriminant
    { id: "C", text: "$c = -3$" },
    // distractor: right magnitude, wrong sign
    { id: "D", text: "$c = \\dfrac{33}{8}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Set equal: $2x^2 + 11x + 2 = 4x + c$, so $2x^2 + 7x + (2 - c) = 0$. For exactly one solution, discriminant $= 0$: $7^2 - 4(2)(2 - c) = 0 \\Rightarrow 49 - 16 + 8c = 0 \\Rightarrow c = -\\dfrac{33}{8}$.\n\n**The Full Solution:**\nSet equations equal:\n$2x^2 + 11x + 2 = 4x + c$\n$2x^2 + 7x + (2 - c) = 0$\n\nFor exactly one (real) solution, the discriminant must equal zero:\n$b^2 - 4ac = 0 \\Rightarrow 7^2 - 4(2)(2 - c) = 0$\n$49 - 8(2 - c) = 0$\n$49 - 16 + 8c = 0$\n$33 + 8c = 0$\n$c = -\\dfrac{33}{8}$\n\nVerification: with $c = -\\tfrac{33}{8}$, constant term is $2 - (-\\tfrac{33}{8}) = \\tfrac{49}{8}$. Discriminant $= 49 - 4(2)(\\tfrac{49}{8}) = 49 - 49 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — sign error when distributing $-8(2 - c)$.\n* Choice C: \"wrong base\" — sets $2 - c = 0$ (the constant, not the discriminant).\n* Choice D: \"applies the inverse operation\" — gets the right magnitude but wrong sign.\n\n**Test Day Takeaway:** A line is tangent to a parabola when the combined equation's discriminant equals zero. Always set the equations equal first, THEN apply the discriminant.",
  skills: ["quadratic-equations", "systems-of-equations", "discriminant"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Which expression is equivalent to $\\dfrac{4x^2 - 25}{2x^2 + x - 15}$ for all values of $x$ where the expression is defined?",
  choices: [
    // distractor: a guess that doesn't actually factor anything — wrong base
    { id: "A", text: "$\\dfrac{2}{x}$" },
    { id: "B", text: "$\\dfrac{2x + 5}{x + 3}$" },
    // distractor: cancels the wrong factor (2x+5 instead of 2x-5)
    { id: "C", text: "$\\dfrac{2x - 5}{x + 3}$" },
    // distractor: keeps both numerator factors but drops the (x+3)
    { id: "D", text: "$\\dfrac{2x + 5}{2x - 5}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Factor numerator as a difference of squares: $(2x-5)(2x+5)$. Factor denominator: $(2x-5)(x+3)$. Cancel the common factor $(2x-5)$: $\\dfrac{2x+5}{x+3}$.\n\n**The Full Solution:**\nNumerator: $4x^2 - 25 = (2x)^2 - 5^2 = (2x - 5)(2x + 5)$.\n\nDenominator: $2x^2 + x - 15$. Factor by grouping — find numbers that multiply to $2 \\cdot (-15) = -30$ and add to $1$: those are $6$ and $-5$.\n$2x^2 + 6x - 5x - 15 = 2x(x + 3) - 5(x + 3) = (2x - 5)(x + 3)$.\n\nSimplify: $\\dfrac{(2x-5)(2x+5)}{(2x-5)(x+3)} = \\dfrac{2x+5}{x+3}$ for $x \\neq \\tfrac{5}{2}$.\n\nVerification at $x = 1$: original $= \\dfrac{4 - 25}{2 + 1 - 15} = \\dfrac{-21}{-12} = \\dfrac{7}{4}$. Choice B at $x = 1$: $\\dfrac{2+5}{1+3} = \\dfrac{7}{4}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — guesses without factoring; no path to this answer.\n* Choice C: \"applies the inverse operation\" — keeps $(2x-5)$ in the numerator instead of cancelling it.\n* Choice D: \"off-by-one\" — keeps both numerator factors but drops the $(x+3)$ in the denominator.\n\n**Test Day Takeaway:** Factor BOTH numerator and denominator completely before cancelling. Difference of squares ($a^2 - b^2$) is the most common SAT factoring trap.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $\\sqrt[4]{x^5} \\cdot \\sqrt[3]{x^2} = x^k$ for $x > 0$, what is the value of $k$? Express your answer as a fraction.",
  correctAnswer: "23/12",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\dfrac{23}{12}$.**\n\n**The Fast Way (~20s):** Convert to exponents: $x^{\\frac{5}{4}} \\cdot x^{\\frac{2}{3}} = x^{\\frac{5}{4} + \\frac{2}{3}}$. Common denominator $12$: $\\dfrac{15}{12} + \\dfrac{8}{12} = \\dfrac{23}{12}$.\n\n**The Full Solution:**\n$\\sqrt[4]{x^5} = x^{\\frac{5}{4}}$\n$\\sqrt[3]{x^2} = x^{\\frac{2}{3}}$\n\nWhen multiplying powers with the same base, add exponents:\n$x^{\\frac{5}{4}} \\cdot x^{\\frac{2}{3}} = x^{\\frac{5}{4} + \\frac{2}{3}}$\n\nCommon denominator $12$:\n$\\dfrac{5}{4} = \\dfrac{15}{12}, \\quad \\dfrac{2}{3} = \\dfrac{8}{12}, \\quad \\dfrac{15}{12} + \\dfrac{8}{12} = \\dfrac{23}{12}$.\n\nSo $k = \\dfrac{23}{12}$.\n\n**Common Mistakes to Avoid:**\n* Writing $\\sqrt[4]{x^5} = x^{\\frac{4}{5}}$ instead of $x^{\\frac{5}{4}}$. The power goes in the numerator; the index goes in the denominator.\n* Multiplying exponents instead of adding when the bases are multiplied.\n\n**Verification:** $\\dfrac{5}{4} + \\dfrac{2}{3} = 1.25 + 0.667 = 1.917 = \\dfrac{23}{12}$ \\checkmark.\n\n**Test Day Takeaway:** Convert radicals to fractional exponents (power over index), THEN add when multiplying same bases.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A triangular trailhead sign-board has a right angle at one corner. Its two perpendicular edges have lengths $a$ and $a + 1$ (in feet), and the longest edge measures $29$ feet. What is the perimeter, in feet, of the sign-board?",
  diagram: {
    type: "rightTriangle",
    params: {
      sideLabels: ["a", "a + 1", "29"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: stops one step early — sums only the two legs (20 + 21 = 41)
    { id: "A", text: "$41$" },
    // distractor: uses a + 1 = 1 (off-by-one) and gets 20 + 1 + 29 = 50
    { id: "B", text: "$50$" },
    { id: "C", text: "$70$" },
    // distractor: double-counts the leg a = 20 (20 + 21 + 29 + 20 = 90)
    { id: "D", text: "$90$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Recognize the $20$-$21$-$29$ Pythagorean triple. So $a = 20$ and $a + 1 = 21$. Perimeter $= 20 + 21 + 29 = 70$.\n\n**The Full Solution:**\nApply the Pythagorean theorem: $a^2 + (a + 1)^2 = 29^2$.\n$a^2 + a^2 + 2a + 1 = 841$\n$2a^2 + 2a - 840 = 0$\n$a^2 + a - 420 = 0$\n$(a + 21)(a - 20) = 0$\n\nSo $a = 20$ (rejecting the negative root). Then $a + 1 = 21$.\n\nPerimeter $= 20 + 21 + 29 = 70$ feet.\n\nVerification: $20^2 + 21^2 = 400 + 441 = 841 = 29^2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — adds only the two legs ($20 + 21 = 41$) and forgets the hypotenuse.\n* Choice B: \"off-by-one\" — uses $a + 1 = 1$ instead of $21$, getting $20 + 1 + 29 = 50$.\n* Choice D: \"wrong base\" — double-counts the leg $a = 20$, computing $20 + 21 + 29 + 20 = 90$.\n\n**Test Day Takeaway:** Memorize the common Pythagorean triples ($3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $20$-$21$-$29$). A hypotenuse of $29$ pairs with legs $20$ and $21$.",
  skills: ["triangles", "pythagorean", "perimeter"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 1 — Math Module 2 (22 questions)
// Flow (diversified 2026-06): E at 1,5,17 · M at 2,3,4,6,9,11,13,19 ·
// H at 7,8,10,12,14,15,16,18,20,21,22. Breather easy at Q17 (range).
// Pool infusions: Q7 (linear-from-rational-table), Q9 (rail inequality),
// Q11 (cheese-decay model), Q14 (similar-triangle area), Q21 (kiln circles).

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Two interior angles of a triangle measure $52^{\\circ}$ and $73^{\\circ}$. What is the measure, in degrees, of the third interior angle?",
  choices: [
    // distractor: subtracts the two given angles instead of summing them
    { id: "A", text: "$21^{\\circ}$" },
    { id: "B", text: "$55^{\\circ}$" },
    // distractor: reports the sum of the two given angles
    { id: "C", text: "$125^{\\circ}$" },
    // distractor: uses a full turn of 360 instead of 180
    { id: "D", text: "$235^{\\circ}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Interior angles of a triangle sum to $180^{\\circ}$. Third angle $= 180 - 52 - 73 = 55^{\\circ}$.\n\n**The Full Solution:**\n$52^{\\circ} + 73^{\\circ} + x = 180^{\\circ}$\n$125^{\\circ} + x = 180^{\\circ}$\n$x = 55^{\\circ}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — subtracts the two given angles ($73 - 52 = 21$).\n* Choice C: \"stops one step early\" — reports the sum of the given angles ($52 + 73 = 125$).\n* Choice D: \"wrong base\" — uses $360^{\\circ}$ instead of $180^{\\circ}$.\n\n**Test Day Takeaway:** Interior angles of any triangle ALWAYS sum to $180^{\\circ}$ — subtract the two known angles from $180$.",
  skills: ["triangles", "angles", "geometry"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Line $j$ passes through the points $(1, 7)$ and $(5, -1)$. Line $k$ is perpendicular to line $j$. What is the slope of line $k$?",
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
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Slope of $j$: $\\dfrac{-1 - 7}{5 - 1} = \\dfrac{-8}{4} = -2$. Perpendicular slope $= -\\dfrac{1}{-2} = \\dfrac{1}{2}$.\n\n**The Full Solution:**\n$m_j = \\dfrac{-1 - 7}{5 - 1} = \\dfrac{-8}{4} = -2$.\nPerpendicular slopes are negative reciprocals: $m_k = \\dfrac{1}{2}$.\nCheck: $(-2) \\cdot \\dfrac{1}{2} = -1$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the slope of $j$ itself (parallel, not perpendicular).\n* Choice B: \"applies the inverse operation\" — takes the reciprocal but keeps the negative sign.\n* Choice D: \"applies the inverse operation\" — takes the absolute value without reciprocating.\n\n**Test Day Takeaway:** Perpendicular slopes: flip the fraction AND change the sign. Their product must equal $-1$.",
  skills: ["slope", "coordinate-geometry"]
},
{
  id: 3,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "In the figure, lines $\\ell$ and $m$ are parallel and are crossed by a transversal $t$. What is the value of $x$?",
  diagram: {
    type: "parallelLines",
    params: {
      angles: { top: ["(3x+10)°", ""], bottom: ["(5x-30)°", ""] },
      lineLabels: ["ℓ", "m", "t"]
    }
  },
  correctAnswer: "20",
  explanation: "**SAT Pattern: Parallel Lines and Transversals**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~20s):** Corresponding angles formed by a transversal cutting parallel lines are EQUAL: $3x + 10 = 5x - 30$. Solve: $40 = 2x \\Rightarrow x = 20$.\n\n**The Full Solution:**\nWhen a transversal crosses parallel lines, corresponding angles are equal:\n$3x + 10 = 5x - 30$\n$10 + 30 = 5x - 3x$\n$40 = 2x$\n$x = 20$\n\nVerification: at $x = 20$, the first angle measures $3(20) + 10 = 70^{\\circ}$ and the corresponding angle measures $5(20) - 30 = 70^{\\circ}$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Setting the angles SUPPLEMENTARY (summing to $180^{\\circ}$): would give $8x = 200$, $x = 25$ (wrong).\n* Reading \"corresponding\" as \"alternate exterior\" — same answer here, but only because both pairs are equal for parallel lines cut by a transversal.\n\n**Test Day Takeaway:** Parallel lines cut by a transversal: corresponding angles, alternate interior angles, and alternate exterior angles are all EQUAL. Same-side interior (co-interior) angles are SUPPLEMENTARY.",
  skills: ["angles", "geometry"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $f(x) = x^2$ and $g(x) = f(x - 2) + 5$, for what value of $x$ does the function $g$ attain its minimum value?",
  choices: [
    // distractor: shift direction error — uses x = -2
    { id: "A", text: "$-2$" },
    { id: "B", text: "$2$" },
    // distractor: forgets the horizontal shift entirely
    { id: "C", text: "$0$" },
    // distractor: confuses horizontal shift with vertical shift (uses 5)
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $g(x) = (x - 2)^2 + 5$ is the parabola $f$ shifted right $2$ and up $5$. The minimum of $f(x) = x^2$ is at $x = 0$; after shifting right $2$, the minimum is at $x = 2$.\n\n**The Full Solution:**\nSince $f(x) = x^2$ has minimum at $x = 0$, the function $g(x) = f(x - 2) + 5 = (x - 2)^2 + 5$ has minimum at $x - 2 = 0$, i.e., $x = 2$.\nMinimum value of $g$: $0 + 5 = 5$, attained at $x = 2$.\n\nVerification: $g(2) = (2-2)^2 + 5 = 5$. For any other $x$, $(x-2)^2 > 0$ so $g(x) > 5$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — shifts in the wrong direction (replacing $x - 2$ with $x + 2$ in the head).\n* Choice C: \"stops one step early\" — uses the original function's minimum without shifting.\n* Choice D: \"wrong base\" — uses the vertical shift $5$ as the $x$-coordinate.\n\n**Test Day Takeaway:** $f(x - h)$ shifts the graph RIGHT by $h$ (intuition reversed). $f(x) + k$ shifts UP by $k$. The vertex $(0, 0)$ becomes $(h, k)$.",
  skills: ["function-interpretation"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A trail-maintenance crew tracks distance cleared with the function $D(h) = 9 + 4h$, where $D$ is the total kilometers of trail cleared after $h$ hours of work. How many kilometers will the crew have cleared after $6$ hours?",
  choices: [
    // distractor: multiplies rate by hours but forgets the 9 km already cleared
    { id: "A", text: "$24$" },
    // distractor: adds the rate and hours instead of multiplying (9 + 4 + 6)
    { id: "B", text: "$19$" },
    { id: "C", text: "$33$" },
    // distractor: adds the starting value to the hours, ignoring the rate (9 + 6 ... mis-scaled)
    { id: "D", text: "$54$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Function Evaluation in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $D(6) = 9 + 4(6) = 9 + 24 = 33$ km.\n\n**The Full Solution:**\nSubstitute $h = 6$ into $D(h) = 9 + 4h$:\n$D(6) = 9 + 4 \\cdot 6 = 9 + 24 = 33$ kilometers.\nThe $9$ is trail cleared before the count began; the $4h$ is the new trail cleared during the $6$ hours.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — computes $4 \\cdot 6 = 24$ but forgets the starting $9$ km.\n* Choice B: \"wrong operation\" — adds the rate and the hours ($9 + 4 + 6 = 19$) instead of multiplying.\n* Choice D: \"wrong base\" — multiplies the starting value $9$ by $6$ instead of adding $4 \\cdot 6$.\n\n**Test Day Takeaway:** To evaluate a linear model, multiply the rate by the input FIRST, then add the constant.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A vineyard uses a linear model to relate a drone's flight altitude $x$, in meters, to the ground-coverage radius $y$, in meters, of each survey image: $\\hat{y} = 0.45x + 6$. At an altitude of $40$ meters, one image actually covered a radius of $26$ meters. What is the residual, in meters, for this image?",
  diagram: { type: "scatterplot", params: {
    points: [[10,11],[20,14],[30,21],[50,27],[60,30],[70,40],[80,41],[90,48]],
    xMin: 0, xMax: 100, yMin: 0, yMax: 52,
    xGridStep: 10, xLabelStep: 20, yGridStep: 4, yLabelStep: 8,
    bestFitLine: { slope: 0.45, intercept: 6 },
    highlightPoint: [40, 26], highlightLabel: "(40, 26)", showResidual: true,
    xLabel: "Altitude (m)", yLabel: "Coverage radius (m)",
  } },
  choices: [
    // distractor: predicted - actual (reversed sign)
    { id: "A", text: "$-2$" },
    { id: "B", text: "$2$" },
    // distractor: arithmetic slip on 26 - 24 step
    { id: "C", text: "$4$" },
    // distractor: gives the predicted value, not the residual
    { id: "D", text: "$24$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Residual**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Predicted: $\\hat{y} = 0.45(40) + 6 = 18 + 6 = 24$ m. Actual: $26$ m. Residual $= 26 - 24 = 2$.\n\n**The Full Solution:**\nPredicted at $x = 40$: $0.45(40) + 6 = 18 + 6 = 24$ meters.\nActual coverage: $26$ meters.\nResidual $=$ actual $-$ predicted $= 26 - 24 = 2$ meters.\nA positive residual means the actual point lies above the line of best fit.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — computes predicted $-$ actual ($24 - 26 = -2$).\n* Choice C: \"off-by-one\" — arithmetic slip on the subtraction step.\n* Choice D: \"stops one step early\" — gives the predicted value $24$ without subtracting.\n\n**Test Day Takeaway:** Residual = actual $-$ predicted. Positive means above the line; negative means below.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $g$ is defined by $g(x) = \\dfrac{f(x)}{x + 2}$, where $f$ is a linear function. The table gives three values of $x$ and the corresponding values of $g(x)$. What is the $y$-intercept of the graph of $y = f(x)$ in the $xy$-plane?",
  diagram: {
    type: "dataTable",
    params: {
      headers: ["x", "g(x)"],
      rows: [["-8", "0"], ["-5", "-3"], ["4", "6"]]
    }
  },
  choices: [
    // distractor: halves the correct intercept
    { id: "A", text: "$(0, 12)$" },
    { id: "B", text: "$(0, 24)$" },
    // distractor: reads off a g(x) value from the table
    { id: "C", text: "$(0, -3)$" },
    // distractor: reports f(-5) = 9 instead of f(0)
    { id: "D", text: "$(0, 9)$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Linear Function from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** Since $g(x) = \\dfrac{f(x)}{x + 2}$, multiply back: $f(x) = g(x)(x + 2)$. Compute $f$ at each row, fit the line, read $f(0)$.\n\n**The Full Solution:**\nRecover $f$ from $f(x) = g(x)\\,(x + 2)$:\n$f(-8) = 0 \\cdot (-6) = 0$\n$f(-5) = -3 \\cdot (-3) = 9$\n$f(4) = 6 \\cdot 6 = 36$\n\nFit a line through $(-8, 0)$, $(-5, 9)$, $(4, 36)$.\nSlope $= \\dfrac{9 - 0}{-5 - (-8)} = \\dfrac{9}{3} = 3$. Check with $(4, 36)$: $\\dfrac{36 - 0}{4 - (-8)} = \\dfrac{36}{12} = 3$ \\checkmark.\nUse $f(x) = 3x + b$ with $(-8, 0)$: $0 = 3(-8) + b \\Rightarrow b = 24$.\nSo $f(x) = 3x + 24$ and the $y$-intercept is $(0, 24)$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — halves the intercept (e.g., uses slope $\\tfrac{3}{2}$).\n* Choice C: \"stops one step early\" — reads a $g(x)$ value straight from the table.\n* Choice D: \"wrong base\" — reports $f(-5) = 9$ instead of evaluating at $x = 0$.\n\n**Test Day Takeaway:** When $g = \\dfrac{f}{x + a}$ and $f$ is linear, recover $f(x) = g(x)(x + a)$ at each listed $x$, fit the line, THEN evaluate at $x = 0$.",
  skills: ["linear-functions", "rational-functions", "coordinate-geometry"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Real numbers $r$ and $s$ satisfy $r + s = 5$ and $rs = 6$. What is the value of $r^3 + s^3$?",
  choices: [
    { id: "A", text: "$35$" },
    // distractor: forgets the cross term — uses (r+s)^3 = 125 directly
    { id: "B", text: "$125$" },
    // distractor: drops the factor of 3 in the cross term — 125 - 30 = 95
    { id: "C", text: "$95$" },
    // distractor: uses r^2 + s^2 = (r+s)^2 - 2rs = 13 instead of cubes
    { id: "D", text: "$13$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Use the identity $r^3 + s^3 = (r + s)^3 - 3rs(r + s)$. Plug in: $5^3 - 3(6)(5) = 125 - 90 = 35$.\n\n**The Full Solution:**\nStart from the cube of a sum:\n$(r + s)^3 = r^3 + 3r^2 s + 3 r s^2 + s^3 = r^3 + s^3 + 3rs(r + s)$.\n\nRearrange:\n$r^3 + s^3 = (r + s)^3 - 3rs(r + s)$.\n\nSubstitute the given values $r + s = 5$ and $rs = 6$:\n$r^3 + s^3 = 5^3 - 3(6)(5) = 125 - 90 = 35$.\n\n**Verification (concrete roots):** The numbers with sum $5$ and product $6$ are $2$ and $3$ (roots of $t^2 - 5t + 6 = 0$). Check: $2^3 + 3^3 = 8 + 27 = 35$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — uses $(r + s)^3 = 125$ without subtracting the cross term.\n* Choice C: \"off-by-one\" — drops the factor of $3$ in the cross term: $125 - 6 \\cdot 5 = 95$.\n* Choice D: \"wrong base\" — computes $r^2 + s^2 = (r + s)^2 - 2rs = 25 - 12 = 13$ (the squared identity, not cubed).\n\n**Test Day Takeaway:** Memorize $r^3 + s^3 = (r + s)^3 - 3rs(r + s)$. You almost never need to find $r$ and $s$ individually — work entirely with the sum and product.",
  skills: ["polynomial-operations", "factoring", "sum-product"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A freight-rail flatcar can carry a maximum load of $8{,}400$ kilograms. On one run the flatcar carries a fixed $240$-kilogram coupling module plus a number of cargo bins: some bins have a mass of $35$ kilograms each and the rest have a mass of $80$ kilograms each. If $x$ is the number of $35$-kilogram bins and $y$ is the number of $80$-kilogram bins, which inequality represents the loads the flatcar can carry on one run?",
  choices: [
    { id: "A", text: "$35x + 80y \\le 8{,}160$" },
    // distractor: keeps the load budget but flips the inequality direction
    { id: "B", text: "$35x + 80y \\ge 8{,}160$" },
    // distractor: swaps the bin coefficients and skips subtracting the module
    { id: "C", text: "$80x + 35y \\le 8{,}400$" },
    // distractor: swaps coefficients, skips the module, and flips the direction
    { id: "D", text: "$80x + 35y \\ge 8{,}400$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Linear Inequality from Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Subtract the fixed $240$ kg from the $8{,}400$ kg cap to get the bin budget $8{,}160$. Pair $35$ with $x$, $80$ with $y$, and use $\\le$: $35x + 80y \\le 8{,}160$.\n\n**The Full Solution:**\nThe coupling module always rides along, so it eats into the capacity first:\nbin budget $= 8{,}400 - 240 = 8{,}160$ kg.\nThe $35$-kg bins contribute $35x$ and the $80$-kg bins contribute $80y$. Their combined mass cannot exceed the budget:\n$35x + 80y \\le 8{,}160$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong direction\" — uses the correct budget but writes $\\ge$, which would describe loads that OVERFILL the car.\n* Choice C: \"swaps coefficients\" — attaches $80$ to $x$ and $35$ to $y$, and forgets to subtract the $240$-kg module.\n* Choice D: \"two errors\" — swaps the coefficients, skips the module subtraction, AND flips the direction.\n\n**Test Day Takeaway:** First subtract every FIXED weight from the cap, then match each coefficient to its own variable. A maximum capacity gives $\\le$.",
  skills: ["inequalities", "modeling", "word-problems"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A tidal-pool survey sorted $90$ observed organisms into one of three zones — High, Mid, or Low — and recorded the body-size class of each. The table summarizes the counts.\n\n| | Small | Medium | Large | Total |\n|---|---|---|---|---|\n| High zone | $7$ | $14$ | $9$ | $30$ |\n| Mid zone | $6$ | $4$ | $20$ | $30$ |\n| Low zone | $17$ | $9$ | $4$ | $30$ |\n| Total | $30$ | $27$ | $33$ | $90$ |\n\nIf one organism is selected at random from those in the Medium size class, what is the probability that it was observed in the High zone or the Mid zone?",
  choices: [
    // distractor: uses 18/90 = 1/5 (grand total as denominator)
    { id: "A", text: "$\\dfrac{1}{5}$" },
    // distractor: counts only the High zone (14/27)
    { id: "B", text: "$\\dfrac{14}{27}$" },
    { id: "C", text: "$\\dfrac{2}{3}$" },
    // distractor: mis-simplifies 18/90 to 1/3
    { id: "D", text: "$\\dfrac{1}{3}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Restrict to the Medium column (total $27$). High or Mid count: $14 + 4 = 18$. Probability $= \\dfrac{18}{27} = \\dfrac{2}{3}$.\n\n**The Full Solution:**\nGiven: the organism is in the Medium size class. That condition restricts the sample space to the Medium column, which has $27$ organisms.\nFavorable: Medium AND (High zone OR Mid zone) $= 14 + 4 = 18$.\nProbability $= \\dfrac{18}{27} = \\dfrac{2}{3}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — divides by the grand total ($90$): $\\dfrac{18}{90} = \\dfrac{1}{5}$.\n* Choice B: \"stops one step early\" — counts only the High zone in the column ($14$ of $27$).\n* Choice D: \"off-by-one\" — mis-simplifies $\\dfrac{18}{90}$ to $\\dfrac{1}{3}$.\n\n**Test Day Takeaway:** \"Given X\" means restrict to the X-row or X-column. The numerator counts favorable cases within that subset; the denominator is the subset's own total.",
  skills: ["probability", "two-way-tables"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "As a wheel of cheese ages, its moisture content (as a percent of its original moisture) drops by $35\\%$ for each additional week of aging. A wheel begins aging with a moisture index of $22$. Which function $m$ gives the moisture index after $w$ weeks of aging?",
  choices: [
    // distractor: swaps the initial value and the decay factor
    { id: "A", text: "$m(w) = 0.65(22)^{w}$" },
    // distractor: uses 1 + 0.35 as the base (treats the drop as growth)
    { id: "B", text: "$m(w) = 22(1.35)^{w}$" },
    { id: "C", text: "$m(w) = 22(0.65)^{w}$" },
    // distractor: uses 0.35 (the drop) as the base instead of 1 - 0.35
    { id: "D", text: "$m(w) = 22(0.35)^{w}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponential Decay Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Initial value $22$ is the coefficient. A $35\\%$ drop per week leaves $100\\% - 35\\% = 65\\%$, so the base is $0.65$: $m(w) = 22(0.65)^{w}$.\n\n**The Full Solution:**\nAn exponential model has the form $m(w) = m_0 \\cdot b^{w}$, where $m_0$ is the starting value and $b$ is the per-period multiplier.\nStarting moisture index: $m_0 = 22$.\nA $35\\%$ decrease each week multiplies the value by $1 - 0.35 = 0.65$, so $b = 0.65$.\nThus $m(w) = 22(0.65)^{w}$.\n\nCheck: $m(0) = 22$ \\checkmark; $m(1) = 22 \\cdot 0.65 = 14.3$, which is $35\\%$ below $22$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"swaps roles\" — puts the initial value $22$ in the base and the decay factor $0.65$ in front.\n* Choice B: \"wrong direction\" — uses $1.35$, modeling $35\\%$ growth instead of a $35\\%$ drop.\n* Choice D: \"stops one step early\" — uses the drop $0.35$ directly as the base instead of $1 - 0.35$.\n\n**Test Day Takeaway:** Initial value is the coefficient; a $p\\%$ decrease makes the base $1 - \\dfrac{p}{100}$, NOT $\\dfrac{p}{100}$.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The polynomial $f(x) = 2x^3 + ax^2 + bx + 12$ satisfies $f(2) = 0$ and $f(-1) = 15$. What is the value of $a + b$?",
  correctAnswer: "-11",
  explanation: "**SAT Pattern: Finding Polynomial Coefficients from Conditions**\n\n**The correct answer is $-11$.**\n\n**The Fast Way (~50s):** Each function value gives one linear equation in $a$ and $b$. Solve the $2 \\times 2$ system, then add.\n\n$f(2) = 16 + 4a + 2b + 12 = 0 \\Rightarrow 4a + 2b = -28 \\Rightarrow 2a + b = -14$ (Eq 1).\n$f(-1) = -2 + a - b + 12 = 15 \\Rightarrow a - b = 5$ (Eq 2).\n\nAdd Eq 1 and Eq 2: $3a = -9 \\Rightarrow a = -3$. From Eq 2: $b = a - 5 = -8$. So $a + b = -3 + (-8) = -11$.\n\n**The Full Solution:**\nSubstitute $x = 2$ into $f(x) = 2x^3 + ax^2 + bx + 12$:\n$f(2) = 2(8) + a(4) + b(2) + 12 = 16 + 4a + 2b + 12 = 28 + 4a + 2b$.\nSet equal to $0$: $4a + 2b = -28 \\Rightarrow 2a + b = -14$. (Equation 1)\n\nSubstitute $x = -1$:\n$f(-1) = 2(-1) + a(1) + b(-1) + 12 = -2 + a - b + 12 = 10 + a - b$.\nSet equal to $15$: $a - b = 5$. (Equation 2)\n\nAdd Equations 1 and 2: $(2a + b) + (a - b) = -14 + 5 \\Rightarrow 3a = -9 \\Rightarrow a = -3$.\nFrom Equation 2: $b = a - 5 = -3 - 5 = -8$.\nSo $a + b = -3 + (-8) = -11$.\n\n**Verification:** $f(x) = 2x^3 - 3x^2 - 8x + 12$. $f(2) = 16 - 12 - 16 + 12 = 0$ \\checkmark. $f(-1) = -2 - 3 + 8 + 12 = 15$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Sign error on $2(-1)^3 = -2$ (not $+2$).\n* Forgetting the constant $+12$ when setting up either equation.\n* Reporting just $a$ ($= -3$) or $b$ ($= -8$) instead of $a + b$.\n\n**Test Day Takeaway:** A polynomial value $f(c) = k$ gives one linear equation in the unknown coefficients. Two function values $\\Rightarrow$ two equations $\\Rightarrow$ solve the system.",
  skills: ["polynomial-operations", "remainder-theorem", "systems-of-equations"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "At a cheese-aging cave, a wheel of aged gouda sells for $\\$6$ more than a wheel of fresh gouda. A customer buys $4$ aged wheels and $3$ fresh wheels for a total of $\\$108$. What is the price, in dollars, of one fresh wheel?",
  choices: [
    // distractor: solves for the aged-wheel price instead of the fresh price
    { id: "A", text: "$18$" },
    { id: "B", text: "$12$" },
    // distractor: divides 108 by 7 wheels, ignoring the price gap
    { id: "C", text: "$15.43$" },
    // distractor: subtracts the 6 from a wrong subtotal
    { id: "D", text: "$9$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Systems of Linear Equations (Word Problem)**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Let $f$ be the fresh price; aged $= f + 6$. Then $4(f + 6) + 3f = 108 \\Rightarrow 7f + 24 = 108 \\Rightarrow 7f = 84 \\Rightarrow f = 12$.\n\n**The Full Solution:**\nLet $f$ = price of a fresh wheel and $a$ = price of an aged wheel.\nRelationship: $a = f + 6$.\nPurchase: $4a + 3f = 108$.\nSubstitute: $4(f + 6) + 3f = 108$\n$4f + 24 + 3f = 108$\n$7f = 84$\n$f = 12$.\n\nVerification: aged $= 18$. $4(18) + 3(12) = 72 + 36 = 108$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — solves for the aged-wheel price $a = 18$ instead of the fresh price.\n* Choice C: \"wrong base\" — divides $108$ by $7$ wheels, ignoring the $\\$6$ price gap.\n* Choice D: \"off-by-one\" — subtracts $6$ from a mis-computed subtotal.\n\n**Test Day Takeaway:** Write the relationship equation first, substitute into the total, then re-read which price the question wants.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A surveyor lays out triangle $ADE$ with the right angle at $E$, and sights a point $B$ on the slope $AD$ so that segment $BC$ drops straight down to point $C$ on the base $AE$, forming the right angle at $C$. The small triangle $ABC$ is similar to the large triangle $ADE$. If $AB = \\sqrt{41}$ units, $AC = 4$ units, and $CE = 20$ units, what is the area, in square units, of triangle $ADE$?",
  diagram: {
    type: "nestedRightTriangles",
    params: {
      labels: { A: "A", B: "B", C: "C", D: "D", E: "E" },
      sideLabels: { AB: "√41", AC: "4", CE: "20" }
    }
  },
  correctAnswer: "360",
  explanation: "**SAT Pattern: Similar Triangles and Area Ratio**\n\n**The correct answer is $360$.**\n\n**The Fast Way (~50s):** In the small triangle, $BC = \\sqrt{41 - 16} = 5$. The scale factor is $AE/AC = 24/4 = 6$, so $DE = 6 \\cdot 5 = 30$. Area $= \\tfrac{1}{2}(24)(30) = 360$.\n\n**The Full Solution:**\nStep 1 — find $BC$ in the small right triangle $ABC$ (right angle at $C$):\n$BC = \\sqrt{AB^2 - AC^2} = \\sqrt{(\\sqrt{41})^2 - 4^2} = \\sqrt{41 - 16} = \\sqrt{25} = 5$.\n\nStep 2 — find the base of the large triangle:\n$AE = AC + CE = 4 + 20 = 24$.\n\nStep 3 — use the similarity $\\triangle ABC \\sim \\triangle ADE$. The scale factor is $\\dfrac{AE}{AC} = \\dfrac{24}{4} = 6$, so the corresponding vertical leg scales the same way:\n$DE = 6 \\cdot BC = 6 \\cdot 5 = 30$.\n\nStep 4 — area of $\\triangle ADE$ (legs $AE$ and $DE$ meet at the right angle $E$):\n$\\text{Area} = \\tfrac{1}{2}(AE)(DE) = \\tfrac{1}{2}(24)(30) = 360$ square units.\n\n**Verification:** Scale factor $6$ means the area ratio is $6^2 = 36$. Small-triangle area $= \\tfrac{1}{2}(4)(5) = 10$; large area $= 36 \\cdot 10 = 360$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using $CE = 20$ as the full base instead of $AE = AC + CE = 24$.\n* Scaling $BC$ by $CE/AC$ instead of $AE/AC$.\n* Reporting the small triangle's area ($10$) instead of the large one's.\n\n**Test Day Takeaway:** Find the missing leg with the Pythagorean theorem, take the scale factor as a ratio of corresponding sides, then scale the other leg before computing area.",
  skills: ["similar-triangles", "pythagorean", "geometry"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A kiln operator models the firing-chamber temperature, in degrees Celsius, by $T(m) = -3m^2 + 72m + 140$, where $m$ is the number of minutes after the cooling cycle begins. What is the maximum temperature, in degrees Celsius, that the model predicts?",
  choices: [
    // distractor: returns the m-value of the vertex (12) instead of the temperature
    { id: "A", text: "$12$" },
    // distractor: uses the initial value T(0) = 140
    { id: "B", text: "$140$" },
    { id: "C", text: "$572$" },
    // distractor: drops the constant term 140 when evaluating the vertex output
    { id: "D", text: "$432$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Max of a downward parabola is at $m = -\\dfrac{b}{2a} = -\\dfrac{72}{2(-3)} = 12$. Then $T(12) = -3(144) + 72(12) + 140 = -432 + 864 + 140 = 572$.\n\n**The Full Solution:**\nThe coefficient of $m^2$ is $-3 < 0$, so the parabola opens downward and has a maximum at its vertex.\nVertex $m$-coordinate: $m = -\\dfrac{b}{2a} = -\\dfrac{72}{2(-3)} = -\\dfrac{72}{-6} = 12$.\nEvaluate: $T(12) = -3(12)^2 + 72(12) + 140 = -3(144) + 864 + 140 = -432 + 864 + 140 = 572$.\nThe maximum temperature is $572^{\\circ}$C.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports the vertex input $m = 12$ instead of the output temperature.\n* Choice B: \"wrong base\" — gives $T(0) = 140$, the starting value, not the maximum.\n* Choice D: \"forgets the constant\" — evaluates $-3(144) + 72(12) = -432 + 864 = 432$ but drops the $+140$ constant term.\n\n**Test Day Takeaway:** For $am^2 + bm + c$ with $a < 0$, the maximum value is $T\\left(-\\dfrac{b}{2a}\\right)$ — find the input first, then substitute back.",
  skills: ["quadratic-equations", "vertex-form"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the graph of $y = -x^2 + 7x - 80$ intersects the line $y = c$ at exactly one point. What is the value of $c$?",
  choices: [
    { id: "A", text: "$-\\dfrac{271}{4}$" },
    // distractor: copies the constant term of the quadratic
    { id: "B", text: "$-80$" },
    // distractor: gives -b^2/(4a) magnitude only, dropping the constant
    { id: "C", text: "$-\\dfrac{49}{4}$" },
    // distractor: returns the x-coordinate of the vertex
    { id: "D", text: "$-\\dfrac{7}{2}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Line-Parabola Intersection Count**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** A horizontal line meets a parabola at exactly one point only at the vertex's $y$-value. Vertex $x = \\dfrac{7}{2}$; $y = -\\left(\\dfrac{7}{2}\\right)^2 + 7\\left(\\dfrac{7}{2}\\right) - 80 = -\\dfrac{49}{4} + \\dfrac{49}{2} - 80 = -\\dfrac{271}{4}$.\n\n**The Full Solution:**\nSetting $-x^2 + 7x - 80 = c$ gives $x^2 - 7x + (80 + c) = 0$. Exactly one solution means the discriminant is $0$:\n$(-7)^2 - 4(1)(80 + c) = 0 \\Rightarrow 49 - 320 - 4c = 0 \\Rightarrow -271 = 4c \\Rightarrow c = -\\dfrac{271}{4}$.\n\nEquivalently, $c$ is the vertex $y$-value: $x = \\dfrac{7}{2}$, and $y = -\\dfrac{49}{4} + \\dfrac{98}{4} - \\dfrac{320}{4} = -\\dfrac{271}{4}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — copies the constant term $-80$ of the quadratic.\n* Choice C: \"stops one step early\" — gives $-\\dfrac{49}{4}$ (the $-x^2$ vertex piece) without adding $\\dfrac{49}{2} - 80$.\n* Choice D: \"wrong base\" — returns the $x$-coordinate of the vertex, $\\dfrac{7}{2}$, with a sign flip.\n\n**Test Day Takeaway:** \"Intersects at exactly one point\" with a horizontal line means $c$ equals the parabola's vertex $y$-value — or set the discriminant to zero.",
  skills: ["quadratic-equations", "vertex-form"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A trail-maintenance log records the number of fallen branches cleared on each of six days: $4, 11, 7, 20, 9, 6$. What is the range of this data set?",
  choices: [
    // distractor: gives the maximum value instead of the range
    { id: "A", text: "$20$" },
    { id: "B", text: "$16$" },
    // distractor: computes the median (7.5) region / mis-orders
    { id: "C", text: "$8$" },
    // distractor: gives the minimum value instead of the range
    { id: "D", text: "$4$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Range $=$ max $-$ min $= 20 - 4 = 16$.\n\n**The Full Solution:**\nThe range of a data set is the largest value minus the smallest value.\nLargest: $20$. Smallest: $4$.\nRange $= 20 - 4 = 16$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports the maximum value $20$ without subtracting the minimum.\n* Choice C: \"wrong base\" — reports a middle value rather than the spread.\n* Choice D: \"wrong base\" — reports the minimum value $4$ instead of the difference.\n\n**Test Day Takeaway:** Range is a single subtraction: biggest minus smallest. Scan for the extremes — you do not need to sort the whole list.",
  skills: ["statistics", "data-analysis"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For line $h$, three points are listed: $(12, 95)$, $(18, 125)$, and $(24, 155)$. Line $k$ is the result of translating line $h$ down $8$ units in the $xy$-plane. What is the $x$-intercept of line $k$?",
  choices: [
    { id: "A", text: "$\\left(-\\dfrac{27}{5},\\,0\\right)$" },
    // distractor: uses a shift of 4 instead of 8, giving y-intercept 31
    { id: "B", text: "$\\left(-\\dfrac{31}{5},\\,0\\right)$" },
    // distractor: forgets the shift entirely (uses y-intercept 35)
    { id: "C", text: "$(-7,\\,0)$" },
    // distractor: drops the negative sign
    { id: "D", text: "$\\left(\\dfrac{27}{5},\\,0\\right)$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Vertical Translation of Functions**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Slope of $h$: $\\dfrac{125 - 95}{18 - 12} = 5$. $y$-intercept of $h$: $95 - 5(12) = 35$. Shift down $8$: new $y$-intercept $= 27$. Set $5x + 27 = 0 \\Rightarrow x = -\\dfrac{27}{5}$.\n\n**The Full Solution:**\nSlope $= \\dfrac{125 - 95}{18 - 12} = \\dfrac{30}{6} = 5$.\nLine $h$: $y = 5x + b$, with $(12, 95)$: $95 = 60 + b \\Rightarrow b = 35$.\nTranslating down $8$ units subtracts $8$ from the $y$-intercept: line $k$ is $y = 5x + 27$.\n$x$-intercept: set $y = 0$: $5x + 27 = 0 \\Rightarrow x = -\\dfrac{27}{5}$. So the intercept is $\\left(-\\dfrac{27}{5}, 0\\right)$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — shifts by $4$ instead of $8$, giving $y$-intercept $31$.\n* Choice C: \"stops one step early\" — ignores the downward shift (uses $y$-intercept $35$).\n* Choice D: \"applies the inverse operation\" — drops the negative sign on the $x$-intercept.\n\n**Test Day Takeaway:** A vertical shift changes only the $y$-intercept (here by $-8$); the slope is unchanged. Then solve $0 = mx + b$ for the new $x$-intercept.",
  skills: ["linear-functions", "function-transformations"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A freight-rail yard's container inventory is modeled by $C(d) = 150(1.20)^{d}$, where $d$ is the number of days since a backlog began. By approximately what percent does the container count grow each day?",
  choices: [
    // distractor: reads 150 (the initial value) as the percent
    { id: "A", text: "$150\\%$" },
    // distractor: reads the whole base 1.20 as the percent
    { id: "B", text: "$120\\%$" },
    { id: "C", text: "$20\\%$" },
    // distractor: uses the digits of 1.20 directly as 1.2%
    { id: "D", text: "$1.2\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Each day multiplies by $1.20$, which is a $1.20 - 1 = 0.20 = 20\\%$ increase.\n\n**The Full Solution:**\nIn $C(d) = 150(1.20)^{d}$, the base $1.20$ is the per-day growth factor.\nA growth factor of $1.20$ means the count becomes $120\\%$ of the previous day's, i.e., an increase of $1.20 - 1 = 0.20$, or $20\\%$ per day.\n\nCheck: $C(0) = 150$; $C(1) = 150 \\cdot 1.20 = 180$, which is $30$ more than $150$, and $\\dfrac{30}{150} = 20\\%$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — reads the initial value $150$ as the growth percent.\n* Choice B: \"stops one step early\" — reports the whole factor $120\\%$ instead of the increase $1.20 - 1$.\n* Choice D: \"off-by-one\" — uses the digits $1.2$ directly as a $1.2\\%$ rate.\n\n**Test Day Takeaway:** A base $b$ in $a \\cdot b^{d}$ gives a percent change of $(b - 1) \\times 100\\%$ per period — subtract $1$ before converting to a percent.",
  skills: ["exponential-functions", "percents"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation of a circle in the $xy$-plane is $x^2 + y^2 + 8x - 14y + 56 = 0$. What is the radius of the circle?",
  choices: [
    { id: "A", text: "$3$" },
    // distractor: only completes one square / drops a constant, lands on sqrt(7)
    { id: "B", text: "$\\sqrt{7}$" },
    // distractor: confuses the constant 56 with r^2
    { id: "C", text: "$\\sqrt{56}$" },
    // distractor: reports r^2 = 9 instead of r = 3
    { id: "D", text: "$9$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Complete the square: $(x + 4)^2 + (y - 7)^2 = 16 + 49 - 56 = 9$. Radius $= \\sqrt{9} = 3$.\n\n**The Full Solution:**\nGroup the $x$- and $y$-terms:\n$(x^2 + 8x) + (y^2 - 14y) = -56$.\nComplete the square: half of $8$ is $4$, $4^2 = 16$; half of $-14$ is $-7$, $(-7)^2 = 49$.\n$(x^2 + 8x + 16) + (y^2 - 14y + 49) = -56 + 16 + 49$\n$(x + 4)^2 + (y - 7)^2 = 9$.\nRadius $= \\sqrt{9} = 3$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"off-by-one\" — completes only one square or drops a constant, landing on $\\sqrt{7}$.\n* Choice C: \"wrong base\" — treats the constant $56$ as $r^2$.\n* Choice D: \"stops one step early\" — reports $r^2 = 9$ instead of $r = 3$.\n\n**Test Day Takeaway:** Complete the square for BOTH variables, move the constants to the right, and remember the radius is $\\sqrt{r^2}$, not $r^2$.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In a kiln, a glaze-test plate is a disk of radius $7n$ and a shelf liner is a disk of radius $119n$, where $n$ is a positive constant. The area of the shelf liner is how many times the area of the glaze-test plate?",
  choices: [
    // distractor: gives the linear radius ratio
    { id: "A", text: "$17$" },
    // distractor: doubles the linear ratio
    { id: "B", text: "$34$" },
    // distractor: uses the larger radius coefficient 119
    { id: "C", text: "$119$" },
    { id: "D", text: "$289$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Similar Figures — Area Ratio**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Area scales as the square of the radius ratio. $\\dfrac{119n}{7n} = 17$, and $17^2 = 289$.\n\n**The Full Solution:**\nThe area of a disk is $\\pi r^2$, so the ratio of two disk areas is $\\left(\\dfrac{r_2}{r_1}\\right)^2$.\nLinear ratio: $\\dfrac{119n}{7n} = 17$ (the $n$ cancels).\nArea ratio: $17^2 = 289$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the linear ratio $17$ instead of squaring it.\n* Choice B: \"off-by-one\" — doubles the linear ratio ($2 \\cdot 17$) instead of squaring.\n* Choice C: \"wrong base\" — copies the larger radius coefficient $119$.\n\n**Test Day Takeaway:** When only radii (or any linear dimension) are scaled, area scales by the SQUARE of that ratio. Reach for $(\\text{ratio})^2$, not the ratio itself.",
  skills: ["circle-area", "geometry", "ratios"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A cheese-aging room logs the mass, in grams, of $20$ wheels in a frequency table. Each interval is half-open: $[400, 450)$ means at least $400$ but less than $450$ grams. Two different rooms, A and B, recorded the exact same frequency in every interval. What is the smallest possible value of $|\\,\\overline{x}_A - \\overline{x}_B\\,|$, the absolute difference between the mean masses of the two rooms?",
  choices: [
    { id: "A", text: "$0$" },
    // distractor: assumes at least one wheel must differ by a gram
    { id: "B", text: "$1$" },
    // distractor: uses half the interval width (25) as the gap
    { id: "C", text: "$25$" },
    // distractor: uses the full interval width
    { id: "D", text: "$50$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Grouped Data — Mean Bounds**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** A frequency table fixes only how many values land in each interval, not the values themselves. Identical frequencies allow Room A and Room B to use identical underlying masses, so the means can be exactly equal: smallest difference $= 0$.\n\n**The Full Solution:**\nWithin any interval, the actual masses can be anything in that range, so the mean of a grouped data set is NOT determined — it lies in a range.\nBecause Rooms A and B have the SAME frequency in every interval, one valid choice is for both rooms to have the exact same list of masses. Then $\\overline{x}_A = \\overline{x}_B$, and $|\\overline{x}_A - \\overline{x}_B| = 0$.\nNo rule forces the rooms to differ, so $0$ is achievable and is therefore the smallest possible difference.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"off-by-one\" — assumes at least one wheel must differ by a gram.\n* Choice C: \"wrong base\" — uses half the interval width $50$ as a forced gap.\n* Choice D: \"wrong base\" — uses the full interval width $50$ as the difference.\n\n**Test Day Takeaway:** Grouped frequencies pin down only ranges of possible means. Identical frequency tables can come from identical raw data, so the minimum mean difference is $0$.",
  skills: ["statistics", "data-analysis"]
}
      ]
    }
  ]
};

export default practiceTest1;
