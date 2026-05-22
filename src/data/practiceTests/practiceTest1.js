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
  question: "A store sells notebooks for $\\$4$ each plus a flat $\\$2$ packing fee per order. The total cost of buying $n$ notebooks, including the fee, is $\\$26$. What is the total cost, in dollars, of buying $n + 5$ notebooks (with one packing fee)?",
  choices: [
    // distractor: adds $5 flat to original total instead of $5 \cdot 4 = \$20$
    { id: "A", text: "$\\$31$" },
    // distractor: uses the $\$2$ fee instead of the $\$4$ unit price for the extra notebooks
    { id: "B", text: "$\\$36$" },
    { id: "C", text: "$\\$46$" },
    // distractor: doubles the original total ($26 \cdot 2 = 52$, then rounds wrong)
    { id: "D", text: "$\\$50$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $5$ extra notebooks at $\\$4$ each add $\\$20$ to the original total. New total: $\\$26 + \\$20 = \\$46$.\n\n**The Full Solution:**\nLet the cost equation be $4n + 2 = 26$, so $4n = 24$ and $n = 6$.\nFor $n + 5 = 11$ notebooks: total $= 4(11) + 2 = 44 + 2 = \\$46$.\n\nShortcut: you do not need to find $n$. Adding $5$ notebooks adds $5 \\cdot \\$4 = \\$20$, and the packing fee is unchanged, so the new total is $\\$26 + \\$20 = \\$46$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — adds the count $5$ as dollars instead of $5 \\cdot \\$4 = \\$20$.\n* Choice B: \"wrong base\" — uses the fee ($\\$2$) as the unit price, getting $\\$26 + 5 \\cdot \\$2 = \\$36$.\n* Choice D: \"off-by-one\" — double-counts the original $\\$26$ as if every order pays it twice.\n\n**Test Day Takeaway:** Linear cost = (rate $\\times$ quantity) + fixed fee. Adding more items only changes the rate-times-quantity piece — the fixed fee does not change.",
  skills: ["word-problems", "solving-equations"]
},
{
  id: 3,
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
  question: "A solid right circular cylinder has a radius of $3$ inches and a height of $7$ inches. The volume of the cylinder, in cubic inches, can be expressed as $k\\pi$. What is the value of $k$?",
  correctAnswer: "63",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $63$.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (3)^2 (7) = 9 \\cdot 7 \\pi = 63\\pi$. So $k = 63$.\n\n**The Full Solution:**\nThe volume formula for a right circular cylinder is $V = \\pi r^2 h$.\nWith $r = 3$ in and $h = 7$ in:\n$V = \\pi (3)^2 (7) = \\pi (9)(7) = 63\\pi$ cubic inches.\nSo $k = 63$.\n\n**Common Mistakes to Avoid:**\n* Forgetting to square the radius — using $\\pi r h$ would give $21\\pi$, so $k = 21$.\n* Confusing the cylinder formula with the cone formula $V = \\dfrac{1}{3}\\pi r^2 h$, which gives $21$.\n\n**Verification:** $\\pi (9)(7) = 63\\pi$ \\checkmark, and the answer $k = 63$ is unitless because we factored out $\\pi$.\n\n**Test Day Takeaway:** For a cylinder, square the radius first, then multiply by the height. Memorize $V = \\pi r^2 h$ — this is a Reference Sheet formula.",
  skills: ["volume", "geometry"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A population of bacteria doubles every $3$ hours. If the initial population is $500$, which function $P(t)$ models the population after $t$ hours?",
  choices: [
    // distractor: uses 3t instead of t/3 — would triple the exponent each hour
    { id: "A", text: "$P(t) = 500(2)^{3t}$" },
    { id: "B", text: "$P(t) = 500(2)^{\\frac{t}{3}}$" },
    // distractor: swaps the base (3) and the doubling factor (2)
    { id: "C", text: "$P(t) = 500(3)^{\\frac{t}{2}}$" },
    // distractor: starts at 1000 (already doubled) and uses wrong exponent
    { id: "D", text: "$P(t) = 1000(2)^{t}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"Doubles every $3$ hours\" means the exponent must equal $1$ when $t = 3$: $\\dfrac{t}{3}$ gives $\\dfrac{3}{3} = 1$. Initial value is $500$, base is $2$.\n\n**The Full Solution:**\nThe general doubling-period model is $P(t) = P_0 \\cdot 2^{\\frac{t}{d}}$, where $P_0 = 500$ and $d = 3$.\nSo $P(t) = 500(2)^{\\frac{t}{3}}$.\n\nCheck: $P(3) = 500(2)^1 = 1000$ (doubled) \\checkmark, $P(6) = 500(2)^2 = 2000$ (doubled again) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses $3t$ in the exponent instead of $\\dfrac{t}{3}$, which would triple every hour.\n* Choice C: \"wrong base\" — swaps the base and doubling period.\n* Choice D: \"off-by-one\" — starts the exponent off-by-doubling (initial value $1000$ instead of $500$).\n\n**Test Day Takeaway:** \"Doubles every $d$ units\" $\\Rightarrow$ exponent is $\\dfrac{t}{d}$. \"Triples every $d$ units\" would change the base from $2$ to $3$.",
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
  question: "A data set consists of $9$ positive integers. Eight of the integers are listed below.\n\n$12, 18, 22, 25, 27, 30, 31, 35$\n\nThe mean of all $9$ integers in the data set is $26$. What is the value of the ninth integer?",
  correctAnswer: "34",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $34$.**\n\n**The Fast Way (~25s):** Total sum $= 9 \\cdot 26 = 234$. Sum of given $8$ integers: $12 + 18 + 22 + 25 + 27 + 30 + 31 + 35 = 200$. Ninth integer $= 234 - 200 = 34$.\n\n**The Full Solution:**\nIf the mean of $9$ integers is $26$, the sum of all $9$ is $9 \\cdot 26 = 234$.\nSum of the $8$ listed integers: $12 + 18 + 22 + 25 + 27 + 30 + 31 + 35$.\nGroup pairs that add to $40$: $(12 + 28)? $ — instead, just add: $12 + 18 = 30$; $30 + 22 = 52$; $52 + 25 = 77$; $77 + 27 = 104$; $104 + 30 = 134$; $134 + 31 = 165$; $165 + 35 = 200$.\nNinth integer $= 234 - 200 = 34$.\n\n**Common Mistakes to Avoid:**\n* Computing the mean of the given $8$ integers ($\\frac{200}{8} = 25$) and reporting it.\n* Subtracting the wrong way (e.g., $200 - 234 = -34$).\n\n**Verification:** mean $= \\dfrac{200 + 34}{9} = \\dfrac{234}{9} = 26$ \\checkmark.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ sum. To recover a missing value, compute the total sum from the mean, then subtract the known sum.",
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
  question: "If $\\sqrt[3]{x^5} \\cdot \\sqrt{x^3} = x^k$ for $x > 0$, what is the value of $k$? Express your answer as a fraction.",
  correctAnswer: "19/6",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\dfrac{19}{6}$.**\n\n**The Fast Way (~20s):** Convert to exponents: $x^{\\frac{5}{3}} \\cdot x^{\\frac{3}{2}} = x^{\\frac{5}{3} + \\frac{3}{2}}$. Common denominator: $\\dfrac{10}{6} + \\dfrac{9}{6} = \\dfrac{19}{6}$.\n\n**The Full Solution:**\n$\\sqrt[3]{x^5} = x^{\\frac{5}{3}}$\n$\\sqrt{x^3} = x^{\\frac{3}{2}}$\n\nWhen multiplying powers with the same base, add exponents:\n$x^{\\frac{5}{3}} \\cdot x^{\\frac{3}{2}} = x^{\\frac{5}{3} + \\frac{3}{2}}$\n\nCommon denominator $6$:\n$\\dfrac{5}{3} = \\dfrac{10}{6}, \\quad \\dfrac{3}{2} = \\dfrac{9}{6}, \\quad \\dfrac{10}{6} + \\dfrac{9}{6} = \\dfrac{19}{6}$.\n\nSo $k = \\dfrac{19}{6}$.\n\n**Common Mistakes to Avoid:**\n* Writing $\\sqrt[3]{x^5} = x^{\\frac{3}{5}}$ instead of $x^{\\frac{5}{3}}$. The power goes in the numerator; the index goes in the denominator.\n* Multiplying exponents instead of adding when bases are multiplied.\n\n**Verification:** $\\dfrac{5}{3} + \\dfrac{3}{2} = 1.667 + 1.500 = 3.167 = \\dfrac{19}{6}$ \\checkmark.\n\n**Test Day Takeaway:** Convert radicals to fractional exponents, THEN add when multiplying same bases.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The right triangle shown has legs of length $a$ and $a + 7$ and hypotenuse of length $13$. What is the perimeter of the triangle?",
  diagram: {
    type: "rightTriangle",
    params: {
      sideLabels: ["a", "a + 7", "13"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: stops one step early — sums only the two legs (5 + 12 = 17) without adding the hypotenuse
    { id: "A", text: "$17$" },
    // distractor: uses a + 7 = 7 (off-by-one) and gets 5 + 7 + 13 = 25
    { id: "B", text: "$25$" },
    { id: "C", text: "$30$" },
    // distractor: forgets to subtract one leg — adds 5 + 12 + 13 + 5 (wrong base, double-counts a)
    { id: "D", text: "$35$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Recognize the $5$-$12$-$13$ Pythagorean triple. So $a = 5$ and $a + 7 = 12$. Perimeter $= 5 + 12 + 13 = 30$.\n\n**The Full Solution:**\nApply the Pythagorean theorem: $a^2 + (a + 7)^2 = 13^2$.\n$a^2 + a^2 + 14a + 49 = 169$\n$2a^2 + 14a - 120 = 0$\n$a^2 + 7a - 60 = 0$\n$(a + 12)(a - 5) = 0$\n\nSo $a = 5$ (rejecting the negative root). Then $a + 7 = 12$.\n\nPerimeter $= 5 + 12 + 13 = 30$.\n\nVerification: $5^2 + 12^2 = 25 + 144 = 169 = 13^2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — adds only the two legs ($5 + 12 = 17$) and forgets the hypotenuse.\n* Choice B: \"off-by-one\" — uses $a + 7 = 7$ instead of $12$, getting $5 + 7 + 13 = 25$.\n* Choice D: \"wrong base\" — double-counts the leg $a = 5$, computing $5 + 12 + 13 + 5 = 35$.\n\n**Test Day Takeaway:** Memorize the common Pythagorean triples ($3$-$4$-$5$, $5$-$12$-$13$, $7$-$24$-$25$, $8$-$15$-$17$). When the hypotenuse is $13$, the legs are usually $5$ and $12$.",
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
// Distribution: 4E / 8M / 10H with band-6 mid-hard tier (Q9, Q14).
// Calibrated to CB Bluebook M2 progression — smooth ramp, hard SPRs in
// hard slots (Q13, Q14, Q16), hardest items at the tail (Q19-Q22).

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A small water reservoir is being refilled from a city main at a constant rate of $80$ gallons per hour. The reservoir contained $1{,}200$ gallons at the start of the refill. What type of function best models the relationship between the amount of water in the reservoir and the time since the refill began?",
  choices: [
    // distractor: confuses constant rate with multiplicative growth
    { id: "A", text: "Increasing exponential" },
    { id: "B", text: "Increasing linear" },
    // distractor: sign error — refilling is increasing
    { id: "C", text: "Decreasing linear" },
    // distractor: combines wrong type with wrong direction
    { id: "D", text: "Decreasing exponential" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Classify Physical Motion Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** \"Constant rate\" + \"refilled\" $\\Rightarrow$ increasing linear. Each hour adds the same $80$ gallons, so the change per unit time is constant.\n\n**The Full Solution:**\nThe defining feature of a LINEAR function is constant rate of change. \"$80$ gallons per hour\" describes exactly that — same amount added each hour. Because the reservoir is being REFILLED (water growing), the slope is positive.\n\nA model would be $W(t) = 1{,}200 + 80t$.\n\nVerification: at $t = 0$, $W = 1{,}200$; at $t = 1$, $W = 1{,}280$; at $t = 2$, $W = 1{,}360$. Differences: $+80, +80$ — constant \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong formula\" — exponential growth would require a multiplicative factor each hour (e.g., \"doubles each hour\"), not a constant additive rate.\n* Choice C: \"sign error\" — \"refilled\" means the water amount INCREASES, so the slope is positive.\n* Choice D: \"wrong direction AND wrong type\" — combines both errors.\n\n**Test Day Takeaway:** \"Constant rate of X per unit\" $\\Rightarrow$ LINEAR. The sign (increasing/decreasing) comes from the verb (\"refills/grows\" vs \"drains/loses\"). Reserve EXPONENTIAL for \"multiplied by\" or \"by X percent\" language.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "A phone's battery percentage decreases as the user streams video. The function $b(t) = -1.5t + 96$ approximates the remaining battery percentage after $t$ minutes of continuous streaming. Which statement is the best interpretation of the $y$-intercept of the graph of $y = b(t)$ in the $ty$-plane in this context?",
  choices: [
    // distractor: confuses slope (rate) with y-intercept (initial value)
    { id: "A", text: "The phone uses approximately $96\\%$ of battery per minute of streaming." },
    // distractor: confuses slope's magnitude with starting battery
    { id: "B", text: "The phone started with approximately $1.5\\%$ of battery before streaming began." },
    { id: "C", text: "The phone started with approximately $96\\%$ of battery before streaming began." },
    // distractor: combines both confusions
    { id: "D", text: "The phone uses approximately $1.5\\%$ of battery per minute of streaming." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $y$-intercept of $b(t) = -1.5t + 96$ is $b(0) = 96$. At $t = 0$ (streaming just started), battery $\\approx 96\\%$.\n\n**The Full Solution:**\nThe $y$-intercept of a linear function $b(t) = mt + b$ is $b$, the value at $t = 0$. Here the constant is $96$, and $t = 0$ corresponds to the moment streaming begins. So the phone started streaming with about $96\\%$ battery remaining.\n\nVerification: at $t = 0$, $b = 96$ ✓. At $t = 1$, $b = 94.5$ — drop of $1.5\\%$ in one minute, confirming the slope. The slope is the rate; the $y$-intercept is the initial value \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base AND wrong unit\" — treats the initial battery percentage as a per-minute usage rate.\n* Choice B: \"swaps coefficients\" — uses the slope's magnitude as the starting amount.\n* Choice D: \"correct interpretation of slope, wrong question\" — accurately describes the slope, but the question asks about the $y$-intercept (initial value, not rate).\n\n**Test Day Takeaway:** In $f(t) = mt + b$ contextual problems: $b$ (the $y$-intercept) is the INITIAL value at $t = 0$. $m$ (the slope) is the per-unit RATE OF CHANGE. The question's wording (\"$y$-intercept\" vs \"slope/rate\") tells you which to report.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "Two of the angles in a triangle measure $41^{\\circ}$ and $67^{\\circ}$. What is the measure of the third angle?",
  choices: [
    // distractor: applies inverse operation - subtracts the two given angles
    { id: "A", text: "$26^{\\circ}$" },
    { id: "B", text: "$72^{\\circ}$" },
    // distractor: stops one step early - reports the sum of the two given angles
    { id: "C", text: "$108^{\\circ}$" },
    // distractor: wrong base - uses 360 instead of 180
    { id: "D", text: "$252^{\\circ}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Interior angles of a triangle sum to $180^{\\circ}$. Third angle $= 180 - 41 - 67 = 72^{\\circ}$.\n\n**The Full Solution:**\n$41^{\\circ} + 67^{\\circ} + x = 180^{\\circ}$\n$108^{\\circ} + x = 180^{\\circ}$\n$x = 72^{\\circ}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — subtracts the two given angles ($67 - 41 = 26$).\n* Choice C: \"stops one step early\" — reports the sum of the given angles.\n* Choice D: \"wrong base\" — uses $360^{\\circ}$ instead of $180^{\\circ}$.\n\n**Test Day Takeaway:** Interior angles of a triangle ALWAYS sum to $180^{\\circ}$.",
  skills: ["triangles", "angles", "geometry"]
},
{
  id: 4,
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
  id: 5,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A researcher models the relationship between the age $x$ of a car, in years, and its value $y$, in thousands of dollars, using the equation $y = -2.8x + 32$. A particular car that is $5$ years old has an actual value of $\\$19{,}500$. What is the residual, in thousands of dollars?",
  diagram: { type: "scatterplot", params: {
    points: [[1,32],[2,25],[3,25],[4,18],[6,17],[7,13],[8,8],[9,9],[10,6],[11,2]],
    xMin: 0, xMax: 12, yMin: 0, yMax: 36,
    xGridStep: 1, xLabelStep: 2, yGridStep: 4, yLabelStep: 8,
    bestFitLine: { slope: -2.8, intercept: 32 },
    highlightPoint: [5, 19.5], highlightLabel: "(5, 19.5)", showResidual: true,
    xLabel: "Age (years)", yLabel: "Value (thousands of dollars)",
  } },
  choices: [
    // distractor: predicted - actual (reversed sign)
    { id: "A", text: "$-1.5$" },
    { id: "B", text: "$1.5$" },
    // distractor: arithmetic error on 19.5 - 18 step
    { id: "C", text: "$3.5$" },
    // distractor: gives the predicted value, not the residual
    { id: "D", text: "$18$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Residual**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Predicted: $y = -2.8(5) + 32 = -14 + 32 = 18$ thousand. Actual: $19.5$ thousand. Residual $= 19.5 - 18 = 1.5$.\n\n**The Full Solution:**\nPredicted at $x = 5$: $-2.8(5) + 32 = -14 + 32 = 18$ thousand dollars.\nActual: $\\$19{,}500 = 19.5$ thousand dollars.\nResidual $=$ actual $-$ predicted $= 19.5 - 18 = 1.5$ thousand dollars.\nA positive residual means the actual value lies above the line of best fit.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — computes predicted $-$ actual ($18 - 19.5 = -1.5$).\n* Choice C: \"off-by-one\" — arithmetic slip on the subtraction step.\n* Choice D: \"stops one step early\" — gives the predicted value $18$ without subtracting.\n\n**Test Day Takeaway:** Residual = actual $-$ predicted. Positive means above the line; negative means below.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 6,
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
  id: 7,
  type: "fill-in",
  difficulty: "easy",
  band: 4,
  question: "A data set consists of $10$ positive integers. The list shown gives $9$ of these integers.\n\n$43, 45, 44, 43, 38, 39, 40, 46, 40$\n\nThe mean of the $9$ listed integers is $42$. If the mean of all $10$ integers is also $42$, what is the value of the tenth integer?",
  correctAnswer: "42",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $42$.**\n\n**The Fast Way (~25s):** If the mean does not change when one new value is added, the new value MUST equal the mean. So the tenth integer is $42$.\n\n**The Full Solution:**\nSum of $9$ listed integers: $9 \\cdot 42 = 378$.\nSum of all $10$ integers: $10 \\cdot 42 = 420$.\nTenth integer $= 420 - 378 = 42$.\n\nVerification by direct computation: $43 + 45 + 44 + 43 + 38 + 39 + 40 + 46 + 40 = 378$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing $\\dfrac{378}{9}$ and reporting that as the answer (it equals $42$, but for the wrong reason).\n* Forgetting that adding a value equal to the mean leaves the mean unchanged.\n\n**Test Day Takeaway:** Adding a value equal to the current mean leaves the mean unchanged. Always check whether your reasoning matches that invariant.",
  skills: ["statistics", "mean"]
},
{
  id: 8,
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
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~20s):** Corresponding angles formed by a transversal cutting parallel lines are EQUAL: $3x + 10 = 5x - 30$. Solve: $40 = 2x \\Rightarrow x = 20$.\n\n**The Full Solution:**\nWhen a transversal crosses parallel lines, corresponding angles are equal:\n$3x + 10 = 5x - 30$\n$10 + 30 = 5x - 3x$\n$40 = 2x$\n$x = 20$\n\nVerification: at $x = 20$, the first angle measures $3(20) + 10 = 70^{\\circ}$ and the corresponding angle measures $5(20) - 30 = 70^{\\circ}$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Setting the angles SUPPLEMENTARY (summing to $180^{\\circ}$): would give $8x = 200$, $x = 25$ (wrong).\n* Reading \"corresponding\" as \"alternate exterior\" — same answer here, but only because both pairs are equal for parallel lines cut by a transversal.\n\n**Test Day Takeaway:** Parallel lines cut by a transversal: corresponding angles, alternate interior angles, and alternate exterior angles are all EQUAL. Same-side interior (co-interior) angles are SUPPLEMENTARY.",
  skills: ["triangles", "angles"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  question: "A study assigned $90$ participants to one of three groups: A, B, or C. The table summarizes the distribution by age range and group.\n\n| | $0$–$9$ years | $10$–$19$ years | $20+$ years | Total |\n|---|---|---|---|---|\n| Group A | $7$ | $14$ | $9$ | $30$ |\n| Group B | $6$ | $4$ | $20$ | $30$ |\n| Group C | $17$ | $9$ | $4$ | $30$ |\n| Total | $30$ | $27$ | $33$ | $90$ |\n\nIf one participant is selected at random from those in the $10$–$19$ age range, what is the probability that the participant is in Group A or Group B?",
  choices: [
    // distractor: uses 18/90 = 1/5 (uses grand total as denominator)
    { id: "A", text: "$\\dfrac{1}{5}$" },
    // distractor: counts only A (14/27)
    { id: "B", text: "$\\dfrac{14}{27}$" },
    { id: "C", text: "$\\dfrac{2}{3}$" },
    // distractor: uses 18/90 simplified and reports as a percent (off-by-one)
    { id: "D", text: "$\\dfrac{1}{3}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Restrict to the $10$–$19$ column (total $27$). A or B count: $14 + 4 = 18$. Probability $= \\dfrac{18}{27} = \\dfrac{2}{3}$.\n\n**The Full Solution:**\nGiven: participant is from the $10$–$19$ age range. The conditional restricts the sample space to that column, which has $27$ total participants.\nFavorable outcomes: in $10$–$19$ AND (Group A OR Group B) = $14 + 4 = 18$.\nProbability $= \\dfrac{18}{27} = \\dfrac{2}{3}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses the grand total ($90$) as denominator: $\\dfrac{18}{90} = \\dfrac{1}{5}$.\n* Choice B: \"stops one step early\" — counts only Group A in the column ($14$ out of $27$).\n* Choice D: \"off-by-one\" — uses $\\dfrac{18}{90}$ simplified to $\\dfrac{1}{5}$ but reports $\\dfrac{1}{3}$.\n\n**Test Day Takeaway:** \"Given X\" means restrict to the X-row or X-column. Numerator counts the favorable cases in that subset; denominator is the subset's total.",
  skills: ["probability", "two-way-tables"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A data set has $11$ values listed in order:\n\n$2, 3, 3, 4, 5, 5, 6, 7, 7, 8, 10$\n\nIf the value $50$ is added to the data set, which of the following is true?",
  choices: [
    // distractor: overestimates the median shift — middle values barely move
    { id: "A", text: "The median increases by more than $1$ and the range increases." },
    { id: "B", text: "The median increases by $0.5$ and the range increases." },
    // distractor: range obviously changes with such an extreme outlier
    { id: "C", text: "The median stays the same and the range stays the same." },
    // distractor: range clearly increases after adding 50
    { id: "D", text: "The median increases by $0.5$ and the range stays the same." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):**\nOriginal: $11$ values $\\to$ median $=$ $6$th value $= 5$. Range $= 10 - 2 = 8$.\nWith $50$ added: $12$ values $\\to$ median $=$ average of $6$th and $7$th values $= \\dfrac{5 + 6}{2} = 5.5$. Range $= 50 - 2 = 48$.\nMedian increases by $0.5$. Range increases.\n\n**The Full Solution:**\nOriginal sorted: $2, 3, 3, 4, 5, \\mathbf{5}, 6, 7, 7, 8, 10$. Median = middle (6th) value = $5$.\nWith $50$ appended: $2, 3, 3, 4, 5, \\mathbf{5, 6}, 7, 7, 8, 10, 50$. Median = average of 6th and 7th = $\\dfrac{5+6}{2} = 5.5$.\nMedian change: $5.5 - 5 = 0.5$. Range change: $48 - 8 = 40$ (increases).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — overestimates the median shift; an outlier moves the median by AT MOST half of one rank shift.\n* Choice C: \"stops one step early\" — ignores the outlier's effect on range.\n* Choice D: \"applies the inverse operation\" — gets median right but ignores the obvious range change.\n\n**Test Day Takeaway:** An extreme outlier greatly affects mean and range, but barely affects the median. The median is RESISTANT to outliers.",
  skills: ["statistics"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The positive number $a$ is $250\\%$ of the sum of the positive numbers $b$ and $c$, and $b$ is $40\\%$ of $c$. What percent of $b$ is $a$?",
  choices: [
    // distractor: adds the percents: 250 + 40 = 290
    { id: "A", text: "$290\\%$" },
    // distractor: uses (1 + 0.40) * 250 = 350%
    { id: "B", text: "$350\\%$" },
    { id: "C", text: "$875\\%$" },
    // distractor: divides 250 by 0.40 = 625%
    { id: "D", text: "$625\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Set $c = 100$. Then $b = 40\\% \\cdot 100 = 40$. Sum $b + c = 140$. So $a = 2.5 \\cdot 140 = 350$. Percent of $b$ that $a$ is: $\\dfrac{350}{40} \\cdot 100 = 875\\%$.\n\n**The Full Solution:**\nLet $c = 100$ (any positive choice works since percents are scale-invariant).\nThen $b = 0.40 \\cdot 100 = 40$.\nSum: $b + c = 40 + 100 = 140$.\n$a = 2.50 \\cdot 140 = 350$.\nPercent of $b$ that $a$ is: $\\dfrac{a}{b} \\cdot 100\\% = \\dfrac{350}{40} \\cdot 100\\% = 8.75 \\cdot 100\\% = 875\\%$.\n\nVerification (algebraic): $a = 2.5(b + c)$ and $b = 0.4c$, so $c = 2.5b$. Then $a = 2.5(b + 2.5b) = 2.5 \\cdot 3.5b = 8.75b$, giving $\\dfrac{a}{b} = 8.75 = 875\\%$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — adds the two percents ($250 + 40 = 290$).\n* Choice B: \"stops one step early\" — computes $a$ in dollars but reports it as a raw percent of $c$ instead of $b$.\n* Choice D: \"wrong base\" — divides $250$ by $0.4$ ignoring the sum structure.\n\n**Test Day Takeaway:** When two percents stack, pick a clean numerical value (e.g., $c = 100$) and compute through. \"Percent of $b$\" means divide by $b$, not by $c$.",
  skills: ["percents"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The equation $4(2x - 3) + 10 = 8x + k$ has infinitely many solutions. What is the value of $k$?",
  correctAnswer: "-2",
  explanation: "**SAT Pattern: System Equivalence Check**\n\n**The correct answer is $-2$.**\n\n**The Fast Way (~15s):** Expand: $8x - 12 + 10 = 8x - 2$. For infinitely many solutions, this must equal $8x + k$ for ALL $x$, so $k = -2$.\n\n**The Full Solution:**\nLeft side: $4(2x - 3) + 10 = 8x - 12 + 10 = 8x - 2$.\nFor the equation $8x - 2 = 8x + k$ to hold for ALL $x$, the constants must match: $k = -2$.\n\nVerification: with $k = -2$, both sides become $8x - 2$, true for any $x$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Writing $k = 2$ (sign error).\n* Computing $-12 - 10 = -22$ instead of $-12 + 10 = -2$.\n\n**Test Day Takeaway:** Infinitely many solutions $\\iff$ both sides identical after simplification. Match constant terms, AND coefficients on each variable.",
  skills: ["solving-equations", "linear-functions"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "hard",
  band: 8,
  question: "The polynomial $f(x) = 2x^3 + ax^2 + bx + 12$ satisfies $f(2) = 0$ and $f(-1) = 15$. What is the value of $a + b$?",
  correctAnswer: "-11",
  explanation: "**SAT Pattern: Polynomial Remainder Theorem with Two Conditions**\n\n**The correct answer is $-11$.**\n\n**The Fast Way (~50s):** Each function value gives one linear equation in $a$ and $b$. Solve the $2 \\times 2$ system, then add.\n\n$f(2) = 16 + 4a + 2b + 12 = 0 \\Rightarrow 4a + 2b = -28 \\Rightarrow 2a + b = -14$ (Eq 1).\n$f(-1) = -2 + a - b + 12 = 15 \\Rightarrow a - b = 5$ (Eq 2).\n\nAdd Eq 1 and Eq 2: $3a = -9 \\Rightarrow a = -3$. From Eq 2: $b = a - 5 = -8$. So $a + b = -3 + (-8) = -11$.\n\n**The Full Solution:**\nSubstitute $x = 2$ into $f(x) = 2x^3 + ax^2 + bx + 12$:\n$f(2) = 2(8) + a(4) + b(2) + 12 = 16 + 4a + 2b + 12 = 28 + 4a + 2b$.\nSet equal to $0$: $4a + 2b = -28 \\Rightarrow 2a + b = -14$. (Equation 1)\n\nSubstitute $x = -1$:\n$f(-1) = 2(-1) + a(1) + b(-1) + 12 = -2 + a - b + 12 = 10 + a - b$.\nSet equal to $15$: $a - b = 5$. (Equation 2)\n\nAdd Equations 1 and 2: $(2a + b) + (a - b) = -14 + 5 \\Rightarrow 3a = -9 \\Rightarrow a = -3$.\nFrom Equation 2: $b = a - 5 = -3 - 5 = -8$.\nSo $a + b = -3 + (-8) = -11$.\n\n**Verification:** $f(x) = 2x^3 - 3x^2 - 8x + 12$. $f(2) = 16 - 12 - 16 + 12 = 0$ \\checkmark. $f(-1) = -2 - 3 + 8 + 12 = 15$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Sign error on $2(-1)^3 = -2$ (not $+2$).\n* Forgetting the constant $+12$ when setting up either equation.\n* Reporting just $a$ ($= -3$) or $b$ ($= -8$) instead of $a + b$.\n\n**Test Day Takeaway:** A polynomial value $f(c) = k$ gives one linear equation in the unknown coefficients. Two function values $\\Rightarrow$ two equations $\\Rightarrow$ solve the system.",
  skills: ["polynomial-operations", "remainder-theorem", "systems-of-equations"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "hard",
  band: 6,
  question: "A population of bacteria is modeled by $P(t) = 8{,}000(0.73)^{\\frac{t}{4}}$, where $t$ is the number of hours since the initial measurement. By what percent does the population decrease every $4$ hours?",
  correctAnswer: "27",
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**The correct answer is $27$.**\n\n**The Fast Way (~15s):** Every $4$ hours, the multiplier is $0.73$. Percent decrease $= 1 - 0.73 = 0.27 = 27\\%$.\n\n**The Full Solution:**\nWhen $t$ increases by $4$:\n$P(t + 4) = 8{,}000(0.73)^{\\frac{t+4}{4}} = 8{,}000(0.73)^{\\frac{t}{4}} \\cdot 0.73 = 0.73 \\cdot P(t)$.\n\nThe population is multiplied by $0.73$ every $4$ hours, so the percent decrease per $4$-hour period is $1 - 0.73 = 0.27 = 27\\%$.\n\nVerification: at $t = 0$, $P = 8{,}000$. At $t = 4$, $P = 5{,}840$. Decrease: $\\dfrac{8{,}000 - 5{,}840}{8{,}000} = \\dfrac{2{,}160}{8{,}000} = 0.27 = 27\\%$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Answering $73$ (the multiplier itself, not the percent decrease).\n* Computing the hourly rate instead of the $4$-hour rate.\n\n**Test Day Takeaway:** A decay multiplier $b < 1$ over period $d$ means the percent decrease per period is $(1 - b) \\times 100\\%$.",
  skills: ["exponential-functions", "percents"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 8,
  question: "Real numbers $r$ and $s$ satisfy $r + s = 5$ and $rs = 6$. What is the value of $r^3 + s^3$?",
  choices: [
    { id: "A", text: "$35$" },
    // distractor: forgets the cross term — uses (r+s)^3 = 125 directly
    { id: "B", text: "$125$" },
    // distractor: uses (r+s)^3 - rs(r+s) = 125 - 30 = 95
    { id: "C", text: "$95$" },
    // distractor: uses r^2 + s^2 = (r+s)^2 - 2rs = 13 instead of cubes
    { id: "D", text: "$13$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Sum-Product Cubic Identity**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Use the identity $r^3 + s^3 = (r + s)^3 - 3rs(r + s)$. Plug in: $5^3 - 3(6)(5) = 125 - 90 = 35$.\n\n**The Full Solution:**\nStart from the cube of a sum:\n$(r + s)^3 = r^3 + 3r^2 s + 3 r s^2 + s^3 = r^3 + s^3 + 3rs(r + s)$.\n\nRearrange:\n$r^3 + s^3 = (r + s)^3 - 3rs(r + s)$.\n\nSubstitute the given values $r + s = 5$ and $rs = 6$:\n$r^3 + s^3 = 5^3 - 3(6)(5) = 125 - 90 = 35$.\n\n**Verification (concrete roots):** The numbers with sum $5$ and product $6$ are $2$ and $3$ (roots of $t^2 - 5t + 6 = 0$). Check: $2^3 + 3^3 = 8 + 27 = 35$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — uses $(r + s)^3 = 125$ without subtracting the cross term.\n* Choice C: \"off-by-one\" — drops the factor of $3$ in the cross term: $125 - 6 \\cdot 5 = 95$.\n* Choice D: \"wrong base\" — computes $r^2 + s^2 = (r + s)^2 - 2rs = 25 - 12 = 13$ (the squared identity, not cubed).\n\n**Test Day Takeaway:** Memorize $r^3 + s^3 = (r + s)^3 - 3rs(r + s)$. You almost never need to find $r$ and $s$ individually — work entirely with the sum and product.",
  skills: ["polynomial-operations", "factoring", "sum-product"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A student club is purchasing t-shirts for a fundraiser. The club has a budget of $\\$1{,}260$. To qualify for bulk-discount pricing, the club must order a minimum of $140$ shirts total. Cotton shirts cost $\\$5.80$ each and tri-blend shirts cost $\\$10.40$ each. What is the maximum number of tri-blend shirts the club can order while staying within the budget and qualifying for the discount?",
  correctAnswer: "97",
  explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**The correct answer is $97$.**\n\n**The Fast Way (~45s):** Let $c$ = cotton, $t$ = tri-blend. To max $t$, set $c + t = 140$ exactly, $c = 140 - t$. Budget: $5.80(140 - t) + 10.40t \\leq 1260 \\Rightarrow 812 + 4.60t \\leq 1260 \\Rightarrow t \\leq 97.39$. Floor: $t = 97$.\n\n**The Full Solution:**\nLet $c$ = cotton shirts, $t$ = tri-blend shirts.\nConstraints:\n* Discount floor: $c + t \\geq 140$.\n* Budget: $5.80c + 10.40t \\leq 1{,}260$.\n* Both non-negative integers.\n\nTo MAXIMIZE $t$, fill the rest with the cheaper cotton shirts at EXACTLY the floor (any extra cotton shirts waste budget). Set $c = 140 - t$:\n\n$5.80(140 - t) + 10.40t \\leq 1{,}260$\n$812 - 5.80t + 10.40t \\leq 1{,}260$\n$4.60t \\leq 448$\n$t \\leq 97.391...$.\n\nMax integer: $t = 97$.\n\n**Verification:** With $t = 97$, $c = 43$. Total: $97 + 43 = 140 \\geq 140$ ✓. Cost: $5.80(43) + 10.40(97) = 249.40 + 1{,}008.80 = 1{,}258.20 \\leq 1{,}260$ ✓. Try $t = 98$, $c = 42$: $5.80(42) + 10.40(98) = 243.60 + 1{,}019.20 = 1{,}262.80 > 1{,}260$ ✗ — exceeds budget \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Answering $121$ (treats $1{,}260/10.40 \\approx 121$ as the max, ignoring the discount floor — also $c = 0, t = 121$ violates the floor since $0 + 121 = 121 < 140$).\n* Answering $140$ (treats the floor itself as the answer).\n* Answering $98$ (forgets to round DOWN — $98$ exceeds the budget).\n* Answering $43$ (reports cotton shirts instead of tri-blend).\n\n**Test Day Takeaway:** Two-constraint optimization (budget + minimum total): To maximize one quantity, fill the remainder with the cheaper option AT EXACTLY the minimum total. Solve the resulting single-variable inequality and take the FLOOR. Always verify the next integer up.",
  skills: ["inequalities", "word-problems", "systems-of-equations"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the system of equations below, $c$ is a constant. If the system has no solution, what is the value of $c$?\n\n$4x + 6y = 9$\n$2x + cy = 7$",
  choices: [
    // distractor: wrong base — gives the ratio of x-coefficients
    { id: "A", text: "$2$" },
    { id: "B", text: "$3$" },
    // distractor: stops one step early — uses the y-coefficient from equation 1
    { id: "C", text: "$6$" },
    // distractor: applies the inverse operation — uses the right-side value of equation 2
    { id: "D", text: "$7$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** No solution $\\Leftrightarrow$ same slope, different intercept $\\Leftrightarrow$ left-side coefficient ratios match but right-side ratio differs. $\\frac{4}{2} = \\frac{6}{c} = 2 \\Rightarrow c = 3$. Verify: $\\frac{9}{7} \\neq 2$ \\checkmark, so the lines are parallel and distinct.\n\n**The Full Solution:**\nFor a $2 \\times 2$ linear system $\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases}$:\n* No solution: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$ (parallel, distinct lines).\n* Infinitely many: all three ratios equal (same line).\n* Exactly one: $\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}$ (lines cross).\n\nHere $\\frac{4}{2} = 2$, so we need $\\frac{6}{c} = 2$, giving $c = 3$. The right-side ratio is $\\frac{9}{7} \\neq 2$, so the lines are parallel and distinct $\\Rightarrow$ no solution.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — reports the ratio $\\frac{4}{2} = 2$ instead of solving for $c$.\n* Choice C: \"stops one step early\" — uses the y-coefficient of equation 1 directly.\n* Choice D: \"applies the inverse operation\" — uses the right-side value of equation 2.\n\n**Test Day Takeaway:** No solution $\\Leftrightarrow$ ratios of $x$- and $y$-coefficients match, but constants don't. Set up $\\frac{a_1}{a_2} = \\frac{b_1}{b_2}$ and solve.",
  skills: ["systems-of-equations"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For line $h$, the table shows three values of $x$ and their corresponding values of $y$: $(12, 95)$, $(18, 125)$, $(24, 155)$. Line $k$ is the result of translating line $h$ down $8$ units in the $xy$-plane. What is the $x$-intercept of line $k$?",
  choices: [
    { id: "A", text: "$\\left(-\\dfrac{27}{5},\\,0\\right)$" },
    { id: "B", text: "$\\left(-\\dfrac{19}{5},\\,0\\right)$" },
    { id: "C", text: "$(-7,\\,0)$" },
    { id: "D", text: "$\\left(\\dfrac{27}{5},\\,0\\right)$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Vertical Shift of a Line — $x$-intercept**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Slope of $h$: $(125-95)/(18-12)=5$. $y$-intercept of $h$: $95-5(12)=35$. Shift down $8$: new $y$-intercept $=27$. $5x+27=0 \\Rightarrow x=-27/5$.\n\n**Why the wrong answers are tempting:**\n* B: uses a different shift constant.\n* C: divides slope into shifted intercept wrong.\n* D: drops the negative sign.\n\n**Test Day Takeaway:** Vertical shifts move the $y$-intercept by the shift constant; slope is unchanged.",
  skills: ["linear-functions", "function-transformations"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In right triangle $PQR$ shown, angle $R$ is the right angle, $PQ = 65$, and $QR = 33$. What is the value of $\\cos(P)$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["Q", "R", "P"],
      sideLabels: ["33", "", "65"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: uses QR (opposite to P) — this is sin(P)
    { id: "A", text: "$\\dfrac{33}{65}$" },
    { id: "B", text: "$\\dfrac{56}{65}$" },
    // distractor: uses QR/PR — this is tan(P)
    { id: "C", text: "$\\dfrac{33}{56}$" },
    // distractor: gives 1/tan(P) = cot(P)
    { id: "D", text: "$\\dfrac{56}{33}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Angle $R$ is right, so $PQ = 65$ is the hypotenuse. Find $PR$: $PR = \\sqrt{65^2 - 33^2} = \\sqrt{4225 - 1089} = \\sqrt{3136} = 56$. For angle $P$: adjacent $= PR = 56$, hypotenuse $= 65$. $\\cos(P) = \\dfrac{56}{65}$.\n\n**The Full Solution:**\nBy the Pythagorean theorem: $PR^2 + QR^2 = PQ^2$.\n$PR^2 = 65^2 - 33^2 = 4225 - 1089 = 3136 \\Rightarrow PR = 56$.\nVerification: $56^2 + 33^2 = 3136 + 1089 = 4225 = 65^2$ \\checkmark. ($33$-$56$-$65$ is a Pythagorean triple.)\n$\\cos(P) = \\dfrac{\\text{adjacent to } P}{\\text{hypotenuse}} = \\dfrac{PR}{PQ} = \\dfrac{56}{65}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses $QR$ (opposite to $P$); this is $\\sin(P)$.\n* Choice C: \"wrong base\" — uses $\\dfrac{QR}{PR}$; this is $\\tan(P)$.\n* Choice D: \"applies the inverse operation\" — gives the reciprocal of $\\tan(P) = \\cot(P)$.\n\n**Test Day Takeaway:** Draw and label the triangle relative to the angle in question. Adjacent and opposite swap based on which acute angle you reference.",
  skills: ["trigonometry", "triangles"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the graph of $y = -x^2 + 7x - 80$ intersects the line $y = c$ at exactly one point. What is the value of $c$?",
  choices: [
    { id: "A", text: "$-\\dfrac{271}{4}$" },
    { id: "B", text: "$-80$" },
    { id: "C", text: "$-\\dfrac{49}{4}$" },
    { id: "D", text: "$-\\dfrac{7}{2}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Horizontal Tangent to a Parabola**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** A horizontal line meets a parabola at one point only at the vertex $y$-value. Vertex $x = 7/2$; $y = -(7/2)^2 + 7(7/2) - 80 = -49/4 + 49/2 - 80 = -271/4$.\n\n**Why the wrong answers are tempting:**\n* B: copies the constant.\n* C: gives $b^2/(4a)$ alone.\n* D: returns the $x$-coordinate of the vertex.\n\n**Test Day Takeaway:** \"Intersects at exactly one point\" with a horizontal line means $y = $ vertex value.",
  skills: ["quadratic-equations", "vertex-form"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Circle $A$ has a radius of $4n$ and circle $B$ has a radius of $92n$, where $n$ is a positive constant. The area of circle $B$ is how many times the area of circle $A$?",
  choices: [
    { id: "A", text: "$23$" },
    { id: "B", text: "$46$" },
    { id: "C", text: "$92$" },
    { id: "D", text: "$529$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Similar-Figures Area Ratio**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Area scales as the square of the linear ratio. $92n/4n = 23$, squared = $529$.\n\n**Why the wrong answers are tempting:**\n* A: linear ratio.\n* B: double linear ratio.\n* C: larger radius coefficient.\n\n**Test Day Takeaway:** Area ratio = (linear ratio)$^2$.",
  skills: ["circle-area", "geometry"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Two data sets of $30$ integers each are summarized in identical histograms. The first interval represents the frequency of integers $\\ge 10$ but $< 20$, the second $\\ge 20$ but $< 30$, and so on. What is the smallest possible difference between the mean of data set A and the mean of data set B?",
  choices: [
    { id: "A", text: "$0$" },
    { id: "B", text: "$1$" },
    { id: "C", text: "$5$" },
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Grouped Data — Smallest Possible Mean Difference**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Histograms give frequencies per interval, not exact values. With identical histograms, the actual integers within each interval can be chosen to match exactly, so equal means: minimum difference = $0$.\n\n**Why the wrong answers are tempting:**\n* B: assumes at least one integer must differ.\n* C/D: confuses \"smallest\" with \"largest\".\n\n**Test Day Takeaway:** Grouped frequencies set RANGES of means; identical histograms allow identical underlying data.",
  skills: ["statistics", "data-analysis"]
}
      ]
    }
  ]
};

export default practiceTest1;
