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
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Sugar is $3$ parts out of $3+8=11$ total parts, so sugar $=\\frac{3}{11}\\cdot 44 = 12$ cups.\n\n**The Full Solution:**\nStep 1: Write the parts as $3k$ (sugar) and $8k$ (flour), so the ratio stays $3:8$.\nStep 2: The total is $3k+8k=11k=44$, so $k=4$.\nStep 3: Sugar $=3k=3\\cdot 4=12$ cups. Check: flour $=8\\cdot 4=32$, and $12+32=44$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): reports the flour part of the ratio instead of solving for sugar.\n* Choice C ($16.5$): uses $\\frac{3}{8}$ of the total instead of $\\frac{3}{11}$ — divides by one part, not the sum.\n* Choice D ($32$): solves for flour ($\\frac{8}{11}\\cdot 44$) instead of sugar.\n\n**Test Day Takeaway:** When a total is split by a ratio, each part's fraction has the SUM of the ratio numbers as its denominator, not a single part.",
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
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $1{,}260$ is $35\\%$ of the total $T$, so $T=\\frac{1{,}260}{0.35}=3{,}600$.\n\n**The Full Solution:**\nStep 1: Translate \"fiction is $35\\%$ of the total\" into $0.35\\cdot T = 1{,}260$.\nStep 2: Divide both sides by $0.35$: $T=\\frac{1{,}260}{0.35}=3{,}600$.\nStep 3: Check: $0.35\\cdot 3{,}600 = 1{,}260$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($441$): multiplies $1{,}260\\cdot 0.35$ instead of dividing — the inverse operation.\n* Choice B ($1{,}938$): divides by the complement $0.65$, treating $1{,}260$ as the non-fiction count.\n* Choice D ($36{,}000$): divides by $0.035$ instead of $0.35$ — a decimal-place slip.\n\n**Test Day Takeaway:** To recover a whole from a known percent of it, divide the part by the percent written as a decimal.",
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
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Four more coats at $\\$7$ each add $\\$28$; the setup fee does not change, so the new total is $\\$38+\\$28=\\$66$.\n\n**The Full Solution:**\nStep 1: The cost is $7n+3$. For the first order, $7n+3=38$, so $7n=35$ and $n=5$.\nStep 2: The new order has $n+4=9$ coats with one setup fee: total $=7(9)+3=63+3=\\$66$.\nStep 3: Or skip finding $n$: adding $4$ coats adds $4\\cdot\\$7=\\$28$ and leaves the fee alone, so $\\$38+\\$28=\\$66$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$42$): adds the count $4$ as dollars instead of $4\\cdot\\$7=\\$28$.\n* Choice B ($\\$50$): uses the $\\$3$ setup fee as the per-coat price: $\\$38+4\\cdot\\$3$.\n* Choice D ($\\$76$): double-counts the original $\\$38$ as if charged twice.\n\n**Test Day Takeaway:** Linear cost $=$ (rate $\\times$ quantity) $+$ fixed fee. Adding items moves only the rate-times-quantity piece; the fixed fee stays put.",
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
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Cross-multiply: $2x\\cdot 5 = 15\\cdot 18$, so $10x=270$ and $x=27$. The question wants $x-7=20$.\n\n**The Full Solution:**\nStep 1: From $\\frac{2x}{15}=\\frac{18}{5}$, cross-multiply: $5\\cdot 2x = 15\\cdot 18 \\Rightarrow 10x=270$.\nStep 2: Divide: $x=27$.\nStep 3: The last sentence asks for $x-7$, not $x$: $27-7=20$. Check: $\\frac{2(27)}{15}=\\frac{54}{15}=\\frac{18}{5}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($27$): solves for $x$ correctly but forgets to subtract $7$.\n* Choice C ($34$): adds $7$ to $x$ instead of subtracting.\n* Choice D ($54$): stops at $2x=54$ instead of dividing to get $x$.\n\n**Test Day Takeaway:** Re-read the final sentence before bubbling — the SAT often asks for a shifted quantity like $x-7$, not the variable itself.",
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
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** In $f(t)=85+12t$, the coefficient of $t$ is the rate of change: the temperature rises $12$ degrees each minute.\n\n**The Full Solution:**\nStep 1: The model has the form $f(t)=b+mt$, with $b=85$ and $m=12$.\nStep 2: The slope $m$ is the change in temperature per one-unit change in $t$ (one minute), so $12$ means the liquid heats up $12^\\circ$ Fahrenheit per minute. That is Choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A: describes the initial value $85$ (temperature before heating), not the slope.\n* Choice B: treats $12$ as an input $t=12$ rather than a per-minute rate.\n* Choice D: inverts the rate — that would be $\\frac{1}{12}$ minute per degree, not $12$.\n\n**Test Day Takeaway:** In $y=b+mx$, the number multiplying the variable is always the rate of change per unit of that variable.",
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
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Substitute $x=15$: $y=1.8(15)+12.5=27.0+12.5=39.5$.\n\n**The Full Solution:**\nStep 1: Plug $x=15$ into $y=1.8x+12.5$.\nStep 2: $1.8(15)=27.0$.\nStep 3: Add the intercept: $27.0+12.5=39.5$. That is Choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($27.0$): stops at $1.8\\times 15$ and forgets to add the intercept $12.5$.\n* Choice B ($34.5$): adds only part of the intercept (uses $7.5$ instead of $12.5$).\n* Choice D ($42.0$): rounds $1.8\\to 2$ and $12.5\\to 12$, getting $2(15)+12$.\n\n**Test Day Takeaway:** When evaluating $y=mx+b$, finish by adding the constant term — and resist rounding the decimals before you compute.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A solid right circular cone has a base radius of $6$ centimeters and a height of $14$ centimeters. The volume of the cone, in cubic centimeters, can be expressed as $k\\pi$. What is the value of $k$?",
  correctAnswer: "168",
  explanation: "**SAT Pattern: Volume of a Cone**\n\n**The correct answer is $168$.**\n\n**The Fast Way (~15s):** $V=\\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(6)^2(14)=\\frac{1}{3}\\pi(36)(14)=168\\pi$, so $k=168$.\n\n**The Full Solution:**\nStep 1: The cone volume formula is $V=\\frac{1}{3}\\pi r^2 h$.\nStep 2: With $r=6$ and $h=14$: $V=\\frac{1}{3}\\pi(36)(14)=\\frac{1}{3}\\pi(504)$.\nStep 3: $\\frac{504}{3}=168$, so $V=168\\pi$ and $k=168$.\n\n**Common Mistakes:** Dropping the $\\frac{1}{3}$ gives $504\\pi$ (the cylinder, $k=504$); forgetting to square the radius gives $\\frac{1}{3}\\pi(6)(14)=28\\pi$.\n\n**Test Day Takeaway:** For a cone, square the radius, multiply by the height, then take one-third. $V=\\frac{1}{3}\\pi r^2 h$ is on the Reference Sheet — use it.",
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
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"Triples every $4$ hours\" means the exponent must equal $1$ at $t=4$. Only $\\frac{t}{4}$ does that, with start $200$ and base $3$: $N(t)=200(3)^{\\frac{t}{4}}$.\n\n**The Full Solution:**\nStep 1: The tripling-period model is $N(t)=N_0\\cdot 3^{\\frac{t}{d}}$ with start $N_0=200$ and period $d=4$.\nStep 2: So $N(t)=200(3)^{\\frac{t}{4}}$ — Choice B.\nStep 3: Check: $N(4)=200(3)^1=600$ (tripled) and $N(8)=200(3)^2=1800$ (tripled again). $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: uses $4t$ in the exponent, which would triple every $\\frac{1}{4}$ hour — far too fast.\n* Choice C: swaps base and period, using base $4$ and exponent $\\frac{t}{3}$.\n* Choice D: starts at $600$ (already tripled) instead of $200$.\n\n**Test Day Takeaway:** \"Triples every $d$ units\" $\\Rightarrow$ base $3$ with exponent $\\frac{t}{d}$. The period divides $t$ in the exponent — it is never multiplied.",
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
  explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** \"Of those who prefer tea\" sets the denominator to the tea total, $93$. Of those, $58$ are aged 18-30: $\\frac{58}{93}\\approx 62\\%$.\n\n**The Full Solution:**\nStep 1: The condition is \"prefers tea,\" so use the tea column total, $93$, as the denominator.\nStep 2: The 18-30 tea count is $58$.\nStep 3: $\\frac{58}{93}\\approx 0.624 \\approx 62\\%$ — Choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($29\\%$): divides by the grand total $200$ instead of the tea total: $\\frac{58}{200}$.\n* Choice B ($58\\%$): reads the raw count $58$ as if it were already a percent.\n* Choice D ($38\\%$): uses the wrong row, the 31-50 tea count $35$, over $93$.\n\n**Test Day Takeaway:** In conditional probability, the denominator is the total of the GIVEN group, not the grand total.",
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
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Slope $=\\frac{10-(-2)}{7-3}=\\frac{12}{4}=3$. Using $(3,-2)$: $-2=3(3)+b$, so $b=-2-9=-11$.\n\n**The Full Solution:**\nStep 1: Find the slope: $m=\\frac{10-(-2)}{7-3}=\\frac{12}{4}=3$.\nStep 2: Plug $(3,-2)$ into $y=mx+b$: $-2=3(3)+b \\Rightarrow b=-2-9=-11$.\nStep 3: The line is $y=3x-11$, so the $y$-intercept is $-11$. Check $(7,10)$: $3(7)-11=10$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-9$): drops the $-2$ and computes only $0-9$.\n* Choice C ($-8$): uses slope $2$ instead of $3$, giving $-2-6$.\n* Choice D ($-5$): subtracts the $x$-coordinate $3$ from $-2$ instead of using the slope.\n\n**Test Day Takeaway:** After finding $b$, confirm BOTH given points satisfy your equation — it catches slope and sign slips instantly.",
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
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $\\sin 35^\\circ = \\frac{\\text{opposite}}{\\text{hypotenuse}}=\\frac{9}{h}$, so $h=\\frac{9}{\\sin 35^\\circ}$.\n\n**The Full Solution:**\nStep 1: For the $35^\\circ$ angle, the side of length $9$ is opposite and $h$ is the hypotenuse.\nStep 2: Sine relates opposite to hypotenuse: $\\sin 35^\\circ=\\frac{9}{h}$.\nStep 3: Solve for $h$: $h=\\frac{9}{\\sin 35^\\circ}$ — Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B: uses cosine, which relates the adjacent side, not the opposite.\n* Choice C: multiplies by $\\sin 35^\\circ$; since $\\sin 35^\\circ<1$, the result is smaller than $9$, but the hypotenuse must be the longest side.\n* Choice D: combines both errors — cosine and multiplication.\n\n**Test Day Takeaway:** SOH: $\\sin=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}$. To get the hypotenuse from the opposite leg, divide the leg by $\\sin$.",
  skills: ["triangles", "angles"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $4(2w - 3) + 5 = 3w + 12$, what is the value of $w$?",
  correctAnswer: "19/5",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $\\frac{19}{5}$.**\n\n**The Fast Way (~20s):** Expand to $8w-12+5=3w+12$, so $8w-7=3w+12$, then $5w=19$ and $w=\\frac{19}{5}$.\n\n**The Full Solution:**\nStep 1: Distribute the $4$: $4(2w-3)+5=8w-12+5=8w-7$.\nStep 2: Set equal to the right side: $8w-7=3w+12$.\nStep 3: Subtract $3w$ and add $7$: $5w=19$, so $w=\\frac{19}{5}$.\n\n**Common Mistakes:** Distributing the $4$ to only the first term (getting $8w-3$); a sign slip on $-12+5$, writing $-17$ instead of $-7$.\n\n**Test Day Takeaway:** Distribute first, combine like terms second, isolate the variable last — work each step slowly to avoid sign errors.",
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
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The $y$-terms are $-3y$ and $+3y$ — exact opposites. Add the equations: $7x = 35$, so $x = 5$. Then $2(5) + 3y = 16 \\Rightarrow 3y = 6 \\Rightarrow y = 2$.\n\n**The Full Solution:**\nStep 1: Add the two equations to cancel $y$: $(5x - 3y) + (2x + 3y) = 19 + 16$, which gives $7x = 35$, so $x = 5$.\nStep 2: Substitute $x = 5$ into $2x + 3y = 16$: $10 + 3y = 16 \\Rightarrow 3y = 6 \\Rightarrow y = 2$.\nStep 3: Check in the first equation: $5(5) - 3(2) = 25 - 6 = 19$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): divides the final $6$ by $6$ instead of by $3$.\n* Choice C ($3$): grabs a coefficient from the system rather than solving.\n* Choice D ($5$): reports $x$, the value found first, instead of the requested $y$.\n\n**Test Day Takeaway:** When one variable has opposite coefficients, add the equations to eliminate it in a single step.",
  skills: ["systems-of-equations", "solving-equations"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "Line $p$ has a slope of $-\\dfrac{2}{5}$. Line $q$ is perpendicular to line $p$ and passes through the point $(4, -1)$. What is the $y$-intercept of line $q$?",
  correctAnswer: "-11",
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $-11$.**\n\n**The Fast Way (~20s):** Perpendicular slope is the negative reciprocal of $-\\frac{2}{5}$, which is $\\frac{5}{2}$. Plug $(4, -1)$ into $y = \\frac{5}{2}x + b$: $-1 = 10 + b$, so $b = -11$.\n\n**The Full Solution:**\nStep 1: Perpendicular slopes are negative reciprocals. Line $p$ has slope $-\\frac{2}{5}$, so line $q$ has slope $\\frac{5}{2}$.\nStep 2: Substitute the point $(4, -1)$ into $y = \\frac{5}{2}x + b$: $-1 = \\frac{5}{2}(4) + b = 10 + b$.\nStep 3: Solve for the $y$-intercept: $b = -1 - 10 = -11$.\n\n**Common Mistakes:** Using $-\\frac{2}{5}$ (parallel slope) or $\\frac{2}{5}$ (flipped but unsigned) instead of the negative reciprocal $\\frac{5}{2}$; or stopping at $b + 10 = -1$ without isolating $b$.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals — flip the fraction AND change the sign — then use the given point to solve for $b$.",
  skills: ["slope", "linear-functions", "coordinate-geometry"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Over $9$ days, a trail crew recorded the number of fallen branches cleared each day. The counts for $8$ of the days are listed below.\n\n$14, 19, 16, 23, 18, 25, 20, 17$\n\nIf the mean number of branches cleared per day over all $9$ days is $21$, how many branches were cleared on the ninth day?",
  correctAnswer: "37",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $37$.**\n\n**The Fast Way (~25s):** The total for $9$ days is $9 \\times 21 = 189$. The $8$ listed counts sum to $152$, so the ninth day is $189 - 152 = 37$.\n\n**The Full Solution:**\nStep 1: Mean $\\times$ count $=$ total, so all $9$ days sum to $9 \\times 21 = 189$.\nStep 2: Add the $8$ known counts: $14 + 19 + 16 + 23 + 18 + 25 + 20 + 17 = 152$.\nStep 3: The missing day is the total minus the known sum: $189 - 152 = 37$.\n\n**Common Mistakes:** Reporting $\\frac{152}{8} = 19$, the mean of just the eight listed days; or subtracting backwards as $152 - 189 = -37$.\n\n**Test Day Takeaway:** To recover a missing value from a mean, multiply the mean by the count to get the total, then subtract the known sum.",
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
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Complete the square on both variables: $(x-3)^2 + (y+5)^2 = -18 + 9 + 25 = 16$. The radius is $\\sqrt{16} = 4$.\n\n**The Full Solution:**\nStep 1: Group the variable terms: $(x^2 - 6x) + (y^2 + 10y) = -18$.\nStep 2: Complete each square — half of $-6$ is $-3$, and $(-3)^2 = 9$; half of $10$ is $5$, and $5^2 = 25$. Add both to each side: $(x^2 - 6x + 9) + (y^2 + 10y + 25) = -18 + 9 + 25$.\nStep 3: This is $(x-3)^2 + (y+5)^2 = 16$, so $r^2 = 16$ and $r = \\sqrt{16} = 4$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\sqrt{7}$): drops one of the completing-square constants, leaving $16 - 9 = 7$ under the root.\n* Choice C ($\\sqrt{18}$): treats the original constant $18$ as $r^2$.\n* Choice D ($16$): reports $r^2$ as the radius instead of taking the square root.\n\n**Test Day Takeaway:** Complete the square for both $x$ and $y$, then remember the radius is $\\sqrt{r^2}$, not $r^2$ itself.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $\\dfrac{8^{x+1} \\cdot 4^{2x}}{2^{5x-2}} = 2^{n}$ and $x = 2$, what is the value of $n$?",
  correctAnswer: "9",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~30s):** With $x = 2$, rewrite every term in base $2$: $8^3 = 2^9$, $4^4 = 2^8$, denominator $= 2^8$. So $\\frac{2^9 \\cdot 2^8}{2^8} = 2^9$, giving $n = 9$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 2$: $\\frac{8^{2+1} \\cdot 4^{2(2)}}{2^{5(2)-2}} = \\frac{8^3 \\cdot 4^4}{2^8}$.\nStep 2: Convert to base $2$: $8^3 = (2^3)^3 = 2^9$ and $4^4 = (2^2)^4 = 2^8$.\nStep 3: Combine using add-when-multiplying, subtract-when-dividing: $\\frac{2^9 \\cdot 2^8}{2^8} = 2^{9 + 8 - 8} = 2^9$, so $n = 9$.\n\n**Common Mistakes:** Writing $4^4 = 2^{16}$ by treating $4$ as $2^4$ instead of $2^2$; or mishandling the subtraction of the denominator's exponent.\n\n**Test Day Takeaway:** Convert every term to the same prime base, then add exponents when multiplying and subtract when dividing.",
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
  explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Write vertex form $y = -2(x+3)^2 + 8$ and expand. The constant terms give $-2(9) + 8 = -18 + 8 = -10$, so $c = -10$.\n\n**The Full Solution:**\nStep 1: With vertex $(-3, 8)$ and $a = -2$, vertex form is $y = -2(x + 3)^2 + 8$.\nStep 2: Expand the square: $y = -2(x^2 + 6x + 9) + 8$.\nStep 3: Distribute and collect: $y = -2x^2 - 12x - 18 + 8 = -2x^2 - 12x - 10$. The constant term is $c = -10$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-28$): adds $-18 + (-10)$ instead of $-18 + 8$.\n* Choice C ($-8$): negates the vertex $y$-coordinate $8$, confusing it with $c$.\n* Choice D ($10$): a sign slip turning $-18 + 8$ into $+10$.\n\n**Test Day Takeaway:** Build vertex form first, then fully expand. The constant $c$ is the $y$-intercept, not the vertex's $y$-coordinate.",
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
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Set the curves equal: $2x^2 + 7x + (2 - c) = 0$. One solution means discriminant $= 0$: $49 - 4(2)(2-c) = 0 \\Rightarrow 49 - 16 + 8c = 0 \\Rightarrow c = -\\frac{33}{8}$.\n\n**The Full Solution:**\nStep 1: Set $2x^2 + 11x + 2 = 4x + c$, then move everything to one side: $2x^2 + 7x + (2 - c) = 0$.\nStep 2: Exactly one solution requires the discriminant $b^2 - 4ac = 0$, with $a = 2$, $b = 7$: $7^2 - 4(2)(2 - c) = 0$.\nStep 3: Simplify: $49 - 8(2 - c) = 49 - 16 + 8c = 33 + 8c = 0$, so $c = -\\frac{33}{8}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{41}{8}$): mishandles the sign when distributing $-8(2-c)$.\n* Choice C ($-3$): sets the constant $2 - c$ to zero instead of the discriminant.\n* Choice D ($\\frac{33}{8}$): right magnitude, wrong sign.\n\n**Test Day Takeaway:** A line is tangent to a parabola exactly when the combined equation's discriminant equals zero — set the equations equal first, then apply $b^2 - 4ac = 0$.",
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
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Factor: numerator is the difference of squares $(2x-5)(2x+5)$; denominator factors to $(2x-5)(x+3)$. Cancel the shared $(2x-5)$ to get $\\frac{2x+5}{x+3}$.\n\n**The Full Solution:**\nStep 1: Numerator $4x^2 - 25 = (2x)^2 - 5^2 = (2x-5)(2x+5)$.\nStep 2: Denominator $2x^2 + x - 15$: find factors of $2 \\cdot (-15) = -30$ that add to $1$, namely $6$ and $-5$. So $2x^2 + 6x - 5x - 15 = 2x(x+3) - 5(x+3) = (2x-5)(x+3)$.\nStep 3: Cancel $(2x-5)$: $\\frac{(2x-5)(2x+5)}{(2x-5)(x+3)} = \\frac{2x+5}{x+3}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{2}{x}$): no valid factoring path produces this — a blind guess.\n* Choice C ($\\frac{2x-5}{x+3}$): cancels the wrong numerator factor, keeping $(2x-5)$ instead of $(2x+5)$.\n* Choice D ($\\frac{2x+5}{2x-5}$): cancels the wrong denominator factor, dropping $(x+3)$.\n\n**Test Day Takeaway:** Factor numerator and denominator completely before cancelling; a difference of squares $a^2 - b^2$ is the classic SAT factoring cue.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $\\sqrt[4]{x^5} \\cdot \\sqrt[3]{x^2} = x^k$ for $x > 0$, what is the value of $k$? Express your answer as a fraction.",
  correctAnswer: "23/12",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\frac{23}{12}$.**\n\n**The Fast Way (~20s):** Convert each radical to a fractional exponent: $\\sqrt[4]{x^5} = x^{\\frac{5}{4}}$ and $\\sqrt[3]{x^2} = x^{\\frac{2}{3}}$. Multiplying same bases adds exponents: $\\frac{5}{4} + \\frac{2}{3} = \\frac{15}{12} + \\frac{8}{12} = \\frac{23}{12}$.\n\n**The Full Solution:**\nStep 1: Rewrite the radicals — the power goes on top, the index on the bottom: $\\sqrt[4]{x^5} = x^{\\frac{5}{4}}$ and $\\sqrt[3]{x^2} = x^{\\frac{2}{3}}$.\nStep 2: Multiplying powers of the same base adds the exponents: $x^{\\frac{5}{4}} \\cdot x^{\\frac{2}{3}} = x^{\\frac{5}{4} + \\frac{2}{3}}$.\nStep 3: Use a common denominator of $12$: $\\frac{5}{4} = \\frac{15}{12}$ and $\\frac{2}{3} = \\frac{8}{12}$, so $k = \\frac{15}{12} + \\frac{8}{12} = \\frac{23}{12}$.\n\n**Common Mistakes:** Flipping a radical to $x^{\\frac{4}{5}}$ instead of $x^{\\frac{5}{4}}$; or multiplying the exponents instead of adding them when the bases are multiplied.\n\n**Test Day Takeaway:** Convert radicals to fractional exponents (power over index), then add exponents when multiplying matching bases.",
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
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** A hypotenuse of $29$ signals the $20$-$21$-$29$ Pythagorean triple, so the legs are $a = 20$ and $a + 1 = 21$. Perimeter $= 20 + 21 + 29 = 70$.\n\n**The Full Solution:**\nStep 1: Apply the Pythagorean theorem to the legs $a$ and $a+1$: $a^2 + (a+1)^2 = 29^2$.\nStep 2: Expand and simplify: $2a^2 + 2a + 1 = 841 \\Rightarrow 2a^2 + 2a - 840 = 0 \\Rightarrow a^2 + a - 420 = 0$, which factors as $(a + 21)(a - 20) = 0$. Take the positive root $a = 20$, so $a + 1 = 21$.\nStep 3: Add all three sides: $20 + 21 + 29 = 70$ feet.\n\n**Why the wrong answers are tempting:**\n* Choice A ($41$): adds only the two legs and forgets the hypotenuse.\n* Choice B ($50$): uses $a + 1 = 1$ instead of $21$.\n* Choice D ($90$): double-counts a leg, adding $20 + 21 + 29 + 20$.\n\n**Test Day Takeaway:** Memorize the common Pythagorean triples — a hypotenuse of $29$ pairs with legs $20$ and $21$ — and remember perimeter sums all three sides.",
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
// Openers (quick-but-real): Q1 bare Pythagorean hypotenuse (surd answer),
// Q5 margin-of-error plausible-range conclusion.
// Pool infusions: Q7 (D-p33#26 linear-from-rational-table), Q9 (E#4 rail inequality),
// Q11 (D-p10#23 cheese-decay model), Q14 (E#18 similar-triangle area).
// Re-angles: Q16 (D-p3#25) now asks an intersection COUNT at a given c (not vertex-y);
// Q21 (was D-p1#19 kiln-circle area-ratio) reskinned to stamping disks, new ratio 13 -> 169.

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A right triangle has legs of length $5$ and $8$. What is the length of the hypotenuse?",
  choices: [
    // distractor: adds the two legs instead of combining their squares (5 + 8)
    { id: "A", text: "$13$" },
    // distractor: subtracts the squares of the legs ($8^2 - 5^2 = 39$) instead of adding them
    { id: "B", text: "$\\sqrt{39}$" },
    { id: "C", text: "$\\sqrt{89}$" },
    // distractor: computes the sum of the squares but forgets to take the square root
    { id: "D", text: "$89$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Hypotenuse $= \\sqrt{5^2 + 8^2} = \\sqrt{25 + 64} = \\sqrt{89}$. Since $89$ is prime, $\\sqrt{89}$ does not simplify.\n\n**The Full Solution:**\nStep 1: The Pythagorean theorem gives $c^2 = a^2 + b^2$, where $c$ is the hypotenuse.\nStep 2: Substitute the legs: $c^2 = 5^2 + 8^2 = 25 + 64 = 89$.\nStep 3: Take the root: $c = \\sqrt{89}$, which is already simplest form since $89$ has no perfect-square factor.\n\n**Why the wrong answers are tempting:**\n* Choice A ($13$): adds the legs $5 + 8$ instead of combining their squares.\n* Choice B ($\\sqrt{39}$): subtracts the squares ($8^2 - 5^2 = 39$), the move for a missing leg, not the hypotenuse.\n* Choice D ($89$): finds $a^2 + b^2 = 89$ but forgets to take the square root.\n\n**Test Day Takeaway:** The hypotenuse is $\\sqrt{a^2 + b^2}$ — square each leg, add, then take the root.",
  skills: ["triangles", "pythagorean", "geometry"]
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
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Slope of $j$ is $\\frac{-1 - 7}{5 - 1} = \\frac{-8}{4} = -2$. The perpendicular slope is the negative reciprocal: $\\frac{1}{2}$.\n\n**The Full Solution:**\nStep 1: Use the slope formula on $(1, 7)$ and $(5, -1)$: $m_j = \\frac{-1 - 7}{5 - 1} = \\frac{-8}{4} = -2$.\nStep 2: Perpendicular slopes are negative reciprocals, so $m_k = -\\frac{1}{-2} = \\frac{1}{2}$.\nStep 3: Check: $(-2) \\cdot \\frac{1}{2} = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): reports the slope of $j$ itself (parallel, not perpendicular).\n* Choice B ($-\\frac{1}{2}$): takes the reciprocal but keeps the negative sign.\n* Choice D ($2$): reciprocates but forgets to flip the sign.\n\n**Test Day Takeaway:** Perpendicular slopes flip the fraction AND change the sign; their product must equal $-1$.",
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
  explanation: "**SAT Pattern: Parallel Lines and Transversals**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~20s):** The two marked angles are corresponding angles on parallel lines, so they are equal: $3x + 10 = 5x - 30$. Solving gives $40 = 2x$, so $x = 20$.\n\n**The Full Solution:**\nStep 1: When a transversal crosses parallel lines, corresponding angles are equal. Set the expressions equal: $3x + 10 = 5x - 30$.\nStep 2: Collect terms: $10 + 30 = 5x - 3x$, so $40 = 2x$.\nStep 3: Divide: $x = 20$.\n\nVerification: at $x = 20$ the first angle is $3(20) + 10 = 70^\\circ$ and the corresponding angle is $5(20) - 30 = 70^\\circ$. $\\checkmark$\n\n**Common Mistakes:** Treating the angles as supplementary (summing to $180^\\circ$) gives $8x - 20 = 180$, so $x = 25$ — wrong, because corresponding angles are equal, not supplementary. Watch the sign when moving $-30$ across the equals sign.\n\n**Test Day Takeaway:** On parallel lines cut by a transversal, corresponding, alternate interior, and alternate exterior angles are all EQUAL; only same-side interior angles are supplementary.",
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
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $g(x) = f(x-2) + 5 = (x-2)^2 + 5$. This is $y = x^2$ shifted right $2$, so its minimum sits at $x = 2$.\n\n**The Full Solution:**\nStep 1: Write $g$ explicitly: since $f(x) = x^2$, $g(x) = (x-2)^2 + 5$.\nStep 2: A squared term is smallest when it equals $0$. Set $x - 2 = 0$, so $x = 2$.\nStep 3: Confirm: $g(2) = 0 + 5 = 5$, and for any other $x$, $(x-2)^2 > 0$, so $g(x) > 5$. The minimum is attained at $x = 2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): shifts in the wrong direction — reads $f(x-2)$ as a leftward shift.\n* Choice C ($0$): the minimum location of the un-shifted $f(x) = x^2$, ignoring the horizontal shift.\n* Choice D ($5$): uses the vertical shift (the minimum value) as the $x$-coordinate.\n\n**Test Day Takeaway:** $f(x-h)$ shifts the graph RIGHT by $h$ (the sign feels reversed); $f(x)+k$ shifts UP by $k$. The vertex $(0,0)$ moves to $(h,k)$.",
  skills: ["function-interpretation"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A plant nursery measured a random sample of its seedlings and estimated the mean height to be $38$ centimeters, with an associated margin of error of $2.5$ centimeters. Based on this estimate and margin of error, which of the following is the most appropriate conclusion about the mean height of all the nursery's seedlings?",
  choices: [
    // distractor: applies the margin of error on only one side (38 to 40.5)
    { id: "A", text: "It is plausible that the mean height of all the seedlings is between $38$ and $40.5$ centimeters." },
    { id: "B", text: "It is plausible that the mean height of all the seedlings is between $35.5$ and $40.5$ centimeters." },
    // distractor: doubles the margin of error before adding/subtracting (38 +/- 5)
    { id: "C", text: "It is plausible that the mean height of all the seedlings is between $33$ and $43$ centimeters." },
    // distractor: treats the margin of error as the full plausible value (mean is exactly 2.5)
    { id: "D", text: "The mean height of all the seedlings is exactly $2.5$ centimeters." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The plausible interval is estimate $\\pm$ margin of error: $38 - 2.5 = 35.5$ up to $38 + 2.5 = 40.5$ centimeters.\n\n**The Full Solution:**\nStep 1: A margin of error defines a symmetric band around the sample estimate where the true population mean plausibly lies.\nStep 2: Lower bound: $38 - 2.5 = 35.5$ centimeters.\nStep 3: Upper bound: $38 + 2.5 = 40.5$ centimeters. So the mean height of all seedlings is plausibly between $35.5$ and $40.5$ centimeters.\n\n**Why the wrong answers are tempting:**\n* Choice A: applies the margin on the upper side only ($38$ to $40.5$), forgetting the lower bound.\n* Choice C: doubles the margin to $5$ before forming the interval ($38 \\pm 5 = 33$ to $43$).\n* Choice D: reports the margin of error $2.5$ itself as the mean, which a margin of error never describes.\n\n**Test Day Takeaway:** A margin of error gives a two-sided interval — subtract it from AND add it to the estimate. The true mean is plausibly anywhere in that band, never a single exact value.",
  skills: ["statistics", "margin-of-error", "data-analysis"]
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
  explanation: "**SAT Pattern: Residual**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Predicted radius: $\\hat{y} = 0.45(40) + 6 = 24$ m. Residual $=$ actual $-$ predicted $= 26 - 24 = 2$.\n\n**The Full Solution:**\nStep 1: Plug $x = 40$ into the model: $\\hat{y} = 0.45(40) + 6 = 18 + 6 = 24$ meters.\nStep 2: The residual is actual minus predicted: $26 - 24 = 2$ meters.\nStep 3: A positive residual means the observed point lies above the line of best fit.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): computes predicted $-$ actual ($24 - 26$), reversing the order.\n* Choice C ($4$): an arithmetic slip on the subtraction.\n* Choice D ($24$): stops at the predicted value without subtracting the actual.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted. Positive means the point is above the line; negative means below.",
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
  explanation: "**SAT Pattern: Linear Function from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** Since $g(x) = \\dfrac{f(x)}{x+2}$, recover $f(x) = g(x)(x+2)$ at each row, fit the line, and read $f(0)$. That gives $f(x) = 3x + 24$, so the $y$-intercept is $(0, 24)$.\n\n**The Full Solution:**\nStep 1: Solve for $f$: $f(x) = g(x)\\,(x+2)$.\nStep 2: Evaluate at each table value:\n$f(-8) = 0 \\cdot (-6) = 0$,\n$f(-5) = -3 \\cdot (-3) = 9$,\n$f(4) = 6 \\cdot 6 = 36$.\nStep 3: Fit the line through $(-8, 0)$ and $(-5, 9)$: slope $= \\dfrac{9 - 0}{-5 - (-8)} = \\dfrac{9}{3} = 3$. Check with $(4, 36)$: $\\dfrac{36 - 0}{4 - (-8)} = \\dfrac{36}{12} = 3$. $\\checkmark$\nStep 4: Use $f(x) = 3x + b$ with $(-8, 0)$: $0 = 3(-8) + b$, so $b = 24$. Thus $f(x) = 3x + 24$ and the $y$-intercept is $(0, 24)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(0, 12)$): halves the true intercept, as if the slope were $\\tfrac{3}{2}$.\n* Choice C ($(0, -3)$): reads a $g(x)$ value straight from the table instead of building $f$.\n* Choice D ($(0, 9)$): reports $f(-5) = 9$ rather than evaluating at $x = 0$.\n\n**Test Day Takeaway:** When $g = \\dfrac{f}{x+a}$ with $f$ linear, recover $f(x) = g(x)(x+a)$ at each listed $x$, fit the line, THEN evaluate at $x = 0$.",
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
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Use $r^3 + s^3 = (r+s)^3 - 3rs(r+s)$. Substitute: $5^3 - 3(6)(5) = 125 - 90 = 35$.\n\n**The Full Solution:**\nStep 1: Expand the cube of a sum: $(r+s)^3 = r^3 + s^3 + 3rs(r+s)$.\nStep 2: Rearrange to isolate the cubes: $r^3 + s^3 = (r+s)^3 - 3rs(r+s)$.\nStep 3: Plug in $r + s = 5$ and $rs = 6$: $r^3 + s^3 = 125 - 3(6)(5) = 125 - 90 = 35$.\n\nVerification: the numbers with sum $5$ and product $6$ are $2$ and $3$. Then $2^3 + 3^3 = 8 + 27 = 35$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($125$): stops at $(r+s)^3 = 125$ without subtracting the cross term.\n* Choice C ($95$): drops the factor of $3$, computing $125 - 6 \\cdot 5 = 95$.\n* Choice D ($13$): finds $r^2 + s^2 = (r+s)^2 - 2rs = 25 - 12 = 13$, the squared identity instead of the cubed one.\n\n**Test Day Takeaway:** Memorize $r^3 + s^3 = (r+s)^3 - 3rs(r+s)$. Work with the sum and product directly — you rarely need the individual roots.",
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
  explanation: "**SAT Pattern: Linear Inequality from Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Subtract the fixed $240$ kg coupling from the $8{,}400$ kg cap to get a bin budget of $8{,}160$. Pair $35$ with $x$ and $80$ with $y$, capped with $\\le$: $35x + 80y \\le 8{,}160$.\n\n**The Full Solution:**\nStep 1: The $240$-kg coupling module always rides along, so it uses up capacity first: bin budget $= 8{,}400 - 240 = 8{,}160$ kg.\nStep 2: The $35$-kg bins contribute $35x$ and the $80$-kg bins contribute $80y$.\nStep 3: Their combined mass cannot exceed the budget, so $35x + 80y \\le 8{,}160$.\n\n**Why the wrong answers are tempting:**\n* Choice B: uses the correct budget but writes $\\ge$, which would describe loads that OVERFILL the car.\n* Choice C: attaches $80$ to $x$ and $35$ to $y$, and never subtracts the $240$-kg module.\n* Choice D: swaps the coefficients, skips the module subtraction, AND flips the direction.\n\n**Test Day Takeaway:** Subtract every FIXED weight from the cap first, then match each coefficient to its own variable. A maximum capacity gives $\\le$.",
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
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** \"Given Medium\" restricts you to the Medium column (total $27$). High or Mid count: $14 + 4 = 18$. Probability $= \\dfrac{18}{27} = \\dfrac{2}{3}$.\n\n**The Full Solution:**\nStep 1: The condition \"selected from the Medium size class\" restricts the sample space to the Medium column, which holds $27$ organisms.\nStep 2: Favorable cases are Medium AND (High zone OR Mid zone): $14 + 4 = 18$.\nStep 3: Probability $= \\dfrac{18}{27} = \\dfrac{2}{3}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\tfrac{1}{5}$): divides by the grand total $90$, giving $\\dfrac{18}{90}$.\n* Choice B ($\\tfrac{14}{27}$): counts only the High zone in the column, forgetting the Mid zone.\n* Choice D ($\\tfrac{1}{3}$): mis-simplifies $\\dfrac{18}{90}$ — both the base and the reduction are wrong.\n\n**Test Day Takeaway:** \"Given X\" means restrict to the X-row or X-column. The denominator is that subset's own total, not the grand total.",
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
  explanation: "**SAT Pattern: Exponential Decay Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The starting index $22$ is the coefficient. A $35\\%$ drop per week leaves $100\\% - 35\\% = 65\\%$, so the base is $0.65$: $m(w) = 22(0.65)^{w}$.\n\n**The Full Solution:**\nStep 1: An exponential model is $m(w) = m_0 \\cdot b^{w}$, where $m_0$ is the start value and $b$ is the per-week multiplier.\nStep 2: The wheel begins at $m_0 = 22$.\nStep 3: A $35\\%$ decrease multiplies by $1 - 0.35 = 0.65$, so $b = 0.65$, giving $m(w) = 22(0.65)^{w}$.\n\nCheck: $m(0) = 22$ $\\checkmark$; $m(1) = 22 \\cdot 0.65 = 14.3$, which is $35\\%$ below $22$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: swaps the roles — puts $22$ in the base and $0.65$ as the coefficient.\n* Choice B: uses $1.35$, modeling $35\\%$ growth instead of a $35\\%$ drop.\n* Choice D: uses the drop $0.35$ directly as the base instead of $1 - 0.35$.\n\n**Test Day Takeaway:** Initial value is the coefficient; a $p\\%$ decrease makes the base $1 - \\dfrac{p}{100}$, never $\\dfrac{p}{100}$.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The polynomial $f(x) = 2x^3 + ax^2 + bx + 12$ satisfies $f(2) = 0$ and $f(-1) = 15$. What is the value of $a + b$?",
  correctAnswer: "-11",
  explanation: "**SAT Pattern: Finding Polynomial Coefficients from Conditions**\n\n**The correct answer is $-11$.**\n\n**The Fast Way (~50s):** Each given value of $f$ becomes one linear equation in $a$ and $b$. Solve the $2 \\times 2$ system, then add: $a = -3$, $b = -8$, so $a + b = -11$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 2$ into $f(x) = 2x^3 + ax^2 + bx + 12$: $16 + 4a + 2b + 12 = 0$, so $4a + 2b = -28$, i.e. $2a + b = -14$. (Equation 1)\nStep 2: Substitute $x = -1$: $-2 + a - b + 12 = 15$, so $a - b = 5$. (Equation 2)\nStep 3: Add the two equations: $(2a + b) + (a - b) = -14 + 5$, so $3a = -9$ and $a = -3$.\nStep 4: From Equation 2, $b = a - 5 = -8$. Therefore $a + b = -3 + (-8) = -11$.\n\nVerification: $f(x) = 2x^3 - 3x^2 - 8x + 12$. Then $f(2) = 16 - 12 - 16 + 12 = 0$ $\\checkmark$ and $f(-1) = -2 - 3 + 8 + 12 = 15$. $\\checkmark$\n\n**Common Mistakes:** Sign-slipping on $2(-1)^3 = -2$ (not $+2$); forgetting the constant $+12$ in either setup; reporting just $a = -3$ or $b = -8$ instead of their sum $-11$.\n\n**Test Day Takeaway:** A value $f(c) = k$ gives one linear equation in the unknown coefficients. Two values mean two equations — solve the system, then read exactly what the question asks for.",
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
  explanation: "**SAT Pattern: Systems of Linear Equations (Word Problem)**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Let $f$ be the fresh price; the aged price is $f + 6$. Then $4(f+6) + 3f = 108$, so $7f + 24 = 108$, $7f = 84$, and $f = 12$.\n\n**The Full Solution:**\nStep 1: Let $f$ be the fresh-wheel price and $a$ the aged-wheel price. The relationship is $a = f + 6$.\nStep 2: The purchase total is $4a + 3f = 108$.\nStep 3: Substitute $a = f + 6$: $4(f+6) + 3f = 108$, so $4f + 24 + 3f = 108$, giving $7f = 84$ and $f = 12$.\n\nVerification: aged $= 18$, and $4(18) + 3(12) = 72 + 36 = 108$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($18$): solves for the aged-wheel price instead of the fresh one.\n* Choice C ($15.43$): divides $108$ by $7$ wheels, ignoring the $\\$6$ price gap.\n* Choice D ($9$): subtracts $6$ from a mis-computed subtotal.\n\n**Test Day Takeaway:** Write the relationship equation first, substitute into the total, then re-read which price the question actually wants.",
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
  explanation: "**SAT Pattern: Similar Triangles and Area Ratio**\n\n**The correct answer is $360$.**\n\n**The Fast Way (~50s):** In the small triangle, $BC = \\sqrt{41 - 16} = 5$. The scale factor is $\\dfrac{AE}{AC} = \\dfrac{24}{4} = 6$, so $DE = 6 \\cdot 5 = 30$. Area $= \\tfrac{1}{2}(24)(30) = 360$.\n\n**The Full Solution:**\nStep 1: Find $BC$ in the small right triangle $ABC$ (right angle at $C$): $BC = \\sqrt{AB^2 - AC^2} = \\sqrt{(\\sqrt{41})^2 - 4^2} = \\sqrt{41 - 16} = \\sqrt{25} = 5$.\nStep 2: Find the base of the large triangle: $AE = AC + CE = 4 + 20 = 24$.\nStep 3: Since $\\triangle ABC \\sim \\triangle ADE$, the scale factor is $\\dfrac{AE}{AC} = \\dfrac{24}{4} = 6$, so the corresponding vertical leg scales the same: $DE = 6 \\cdot BC = 30$.\nStep 4: The legs $AE$ and $DE$ meet at the right angle $E$, so area $= \\tfrac{1}{2}(AE)(DE) = \\tfrac{1}{2}(24)(30) = 360$ square units.\n\nVerification: a scale factor of $6$ means the area ratio is $6^2 = 36$. The small-triangle area is $\\tfrac{1}{2}(4)(5) = 10$, so the large area is $36 \\cdot 10 = 360$. $\\checkmark$\n\n**Common Mistakes:** Using $CE = 20$ as the full base instead of $AE = 24$; scaling $BC$ by $\\dfrac{CE}{AC}$ instead of $\\dfrac{AE}{AC}$; reporting the small triangle's area of $10$.\n\n**Test Day Takeaway:** Find the missing leg with the Pythagorean theorem, take the scale factor as a ratio of corresponding sides, then scale the other leg before computing area.",
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
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** A downward parabola peaks at $m=-\\frac{b}{2a}=-\\frac{72}{2(-3)}=12$. Then $T(12)=-3(144)+72(12)+140=572$.\n\n**The Full Solution:**\nStep 1: The coefficient of $m^2$ is $-3<0$, so the parabola opens downward and its maximum is at the vertex.\nStep 2: Vertex input: $m=-\\frac{b}{2a}=-\\frac{72}{2(-3)}=-\\frac{72}{-6}=12$.\nStep 3: Evaluate: $T(12)=-3(12)^2+72(12)+140=-432+864+140=572$ degrees Celsius.\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): reports the vertex input $m=12$ instead of the temperature it produces.\n* Choice B ($140$): gives $T(0)=140$, the starting value, not the maximum.\n* Choice D ($432$): computes $-3(144)+72(12)=432$ but drops the $+140$ constant.\n\n**Test Day Takeaway:** For $am^2+bm+c$ with $a<0$, the maximum value is $T\\left(-\\frac{b}{2a}\\right)$ — find the input first, then substitute back to get the output.",
  skills: ["quadratic-equations", "vertex-form"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the graph of $y = -x^2 + 6x - 5$ and the line $y = -2$ are drawn. At how many points do the two graphs intersect?",
  choices: [
    // distractor: thinks the line lies above the parabola's maximum, so no intersection
    { id: "A", text: "$0$" },
    // distractor: assumes a horizontal line is always tangent to a parabola (one point)
    { id: "B", text: "$1$" },
    { id: "C", text: "$2$" },
    // distractor: confuses a parabola with a cubic and expects three crossings
    { id: "D", text: "$3$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Line-Parabola Intersection Count**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Set the graphs equal: $-x^2+6x-5=-2 \\Rightarrow x^2-6x+3=0$. The discriminant $36-12=24>0$, so there are $2$ intersection points.\n\n**The Full Solution:**\nStep 1: Intersections satisfy $-x^2+6x-5=-2$. Rearrange to $x^2-6x+3=0$.\nStep 2: The number of intersection points equals the number of real roots, set by the discriminant $b^2-4ac=(-6)^2-4(1)(3)=36-12=24$.\nStep 3: Since $24>0$, the quadratic has two distinct real roots, so the line crosses the parabola at $2$ points.\nSanity check: the peak of $y=-x^2+6x-5$ is $y=-(3)^2+6(3)-5=4$ at $x=3$. The line $y=-2$ sits below that peak, so it must cut through twice.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): assumes $y=-2$ lies above the parabola's peak; the peak is $4$, so the line does cross.\n* Choice B ($1$): treats the line as tangent, but the discriminant is positive, not zero.\n* Choice D ($3$): expects three crossings as if for a cubic; a line meets a parabola at most twice.\n\n**Test Day Takeaway:** To count line-parabola intersections, set them equal and read the discriminant sign: positive $\\Rightarrow 2$ points, zero $\\Rightarrow 1$ (tangent), negative $\\Rightarrow 0$.",
  skills: ["quadratic-equations", "discriminant"]
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
    // distractor: computes the median (8) instead of the range
    { id: "C", text: "$8$" },
    // distractor: gives the minimum value instead of the range
    { id: "D", text: "$4$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Range $=$ max $-$ min $=20-4=16$.\n\n**The Full Solution:**\nStep 1: The range of a data set is the largest value minus the smallest value.\nStep 2: Scan $4, 11, 7, 20, 9, 6$: the largest is $20$ and the smallest is $4$.\nStep 3: Range $=20-4=16$ branches. Only the two extremes matter; the middle values do not affect it.\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): reports the maximum without subtracting the minimum.\n* Choice C ($8$): a near-median middle value rather than the spread between extremes.\n* Choice D ($4$): reports the minimum instead of the difference.\n\n**Test Day Takeaway:** Range is a single subtraction: biggest minus smallest. Scan for the two extremes — no sorting or averaging needed.",
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
  explanation: "**SAT Pattern: Vertical Translation of Functions**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Slope of $h$: $\\frac{125-95}{18-12}=5$. Its $y$-intercept: $95-5(12)=35$. Shift down $8$ gives $27$. Solve $5x+27=0 \\Rightarrow x=-\\frac{27}{5}$.\n\n**The Full Solution:**\nStep 1: Slope $=\\frac{125-95}{18-12}=\\frac{30}{6}=5$.\nStep 2: Line $h$ is $y=5x+b$; using $(12,95)$: $95=60+b \\Rightarrow b=35$.\nStep 3: Translating down $8$ units subtracts $8$ from the $y$-intercept, so line $k$ is $y=5x+27$.\nStep 4: Set $y=0$: $5x+27=0 \\Rightarrow x=-\\frac{27}{5}$, so the $x$-intercept is $\\left(-\\frac{27}{5},0\\right)$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{31}{5}$): shifts by $4$ instead of $8$, giving $y$-intercept $31$.\n* Choice C ($-7$): ignores the downward shift and uses $y$-intercept $35$.\n* Choice D ($\\frac{27}{5}$): has the right magnitude but drops the negative sign.\n\n**Test Day Takeaway:** A vertical shift changes only the $y$-intercept (here by $-8$); the slope stays the same. Then solve $0=mx+b$ for the new $x$-intercept.",
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
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Each day multiplies by the base $1.20$, which is a $1.20-1=0.20=20\\%$ increase.\n\n**The Full Solution:**\nStep 1: In $C(d)=150(1.20)^{d}$, the base $1.20$ is the per-day growth factor.\nStep 2: A factor of $1.20$ means the count becomes $120\\%$ of the previous day's, an increase of $1.20-1=0.20$, or $20\\%$.\nCheck: $C(0)=150$ and $C(1)=150\\cdot1.20=180$, which is $30$ more, and $\\frac{30}{150}=20\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($150\\%$): reads the initial value $150$ as the growth percent.\n* Choice B ($120\\%$): reports the whole factor instead of the increase $1.20-1$.\n* Choice D ($1.2\\%$): uses the digits $1.2$ directly as a $1.2\\%$ rate.\n\n**Test Day Takeaway:** A base $b$ in $a\\cdot b^{d}$ gives a per-period percent change of $(b-1)\\times100\\%$ — subtract $1$ before converting to a percent.",
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
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Complete the square: $(x+4)^2+(y-7)^2=16+49-56=9$. Radius $=\\sqrt{9}=3$.\n\n**The Full Solution:**\nStep 1: Group terms: $(x^2+8x)+(y^2-14y)=-56$.\nStep 2: Complete each square. Half of $8$ is $4$, $4^2=16$; half of $-14$ is $-7$, $(-7)^2=49$.\nStep 3: $(x^2+8x+16)+(y^2-14y+49)=-56+16+49$, so $(x+4)^2+(y-7)^2=9$.\nStep 4: The right side is $r^2=9$, so radius $=\\sqrt{9}=3$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\sqrt{7}$): completes only one square or drops a constant.\n* Choice C ($\\sqrt{56}$): treats the constant $56$ as $r^2$.\n* Choice D ($9$): reports $r^2=9$ instead of $r=3$.\n\n**Test Day Takeaway:** Complete the square for BOTH variables, move constants to the right, and remember the radius is $\\sqrt{r^2}$, not $r^2$.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A stamping press cuts two circular metal disks: a small washer of radius $6n$ and a large flange of radius $78n$, where $n$ is a positive constant. The area of the flange is how many times the area of the washer?",
  choices: [
    // distractor: gives the linear radius ratio without squaring
    { id: "A", text: "$13$" },
    // distractor: doubles the linear ratio instead of squaring
    { id: "B", text: "$26$" },
    // distractor: uses the larger radius coefficient 78 directly
    { id: "C", text: "$78$" },
    { id: "D", text: "$169$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Similar Figures — Area Ratio**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Area scales as the square of the radius ratio. $\\frac{78n}{6n}=13$, and $13^2=169$.\n\n**The Full Solution:**\nStep 1: A disk's area is $\\pi r^2$, so the ratio of two disk areas is $\\left(\\frac{r_2}{r_1}\\right)^2$.\nStep 2: Linear ratio: $\\frac{78n}{6n}=13$ (the $n$ cancels).\nStep 3: Area ratio: $13^2=169$. The flange's area is $169$ times the washer's area.\n\n**Why the wrong answers are tempting:**\n* Choice A ($13$): gives the linear radius ratio instead of squaring it.\n* Choice B ($26$): doubles the linear ratio ($2\\cdot13$) instead of squaring.\n* Choice C ($78$): copies the larger radius coefficient.\n\n**Test Day Takeaway:** When a linear dimension is scaled by a factor, area scales by the SQUARE of that factor. Reach for $(\\text{ratio})^2$, not the ratio itself.",
  skills: ["circle-area", "geometry", "ratios"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Two cheese-aging rooms, A and B, each log the mass, in grams, of $20$ wheels in a frequency table that uses the same set of half-open intervals of width $50$ (for example, $[400, 450)$ means at least $400$ but less than $450$ grams). The two rooms recorded the identical frequency count in every one of these identical intervals. What is the smallest possible value of $|\\,\\overline{x}_A - \\overline{x}_B\\,|$, the absolute difference between the mean masses of the two rooms?",
  choices: [
    { id: "A", text: "$0$" },
    // distractor: assumes at least one wheel must differ by a gram
    { id: "B", text: "$1$" },
    // distractor: uses half the interval width (25) as a forced gap
    { id: "C", text: "$25$" },
    // distractor: uses the full interval width (50) as the difference
    { id: "D", text: "$50$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Grouped Data — Mean Bounds**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** A frequency table fixes only how many wheels land in each interval, not their exact masses. With identical frequencies, both rooms can hold the same underlying masses, so the means can be exactly equal: smallest difference $=0$.\n\n**The Full Solution:**\nStep 1: Within an interval the actual masses can be anything in that range, so a grouped mean is not pinned down — it spans a range of possible values.\nStep 2: Since Rooms A and B have the same frequency in every interval, one valid scenario is for both to hold the identical list of $20$ masses. Then $\\overline{x}_A=\\overline{x}_B$, so $|\\overline{x}_A-\\overline{x}_B|=0$.\nStep 3: An absolute value is never negative, and $0$ is attainable, so $0$ is the smallest possible difference.\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): assumes at least one wheel must differ by a gram, so the means cannot match exactly.\n* Choice C ($25$): uses half the interval width, $\\frac{50}{2}=25$, as a forced gap.\n* Choice D ($50$): uses the full interval width $50$ as if every wheel sat a full bin away from its counterpart.\n\n**Test Day Takeaway:** Grouped frequencies pin down only ranges of possible means. Identical frequency tables can arise from identical raw data, so the minimum possible difference of means is $0$.",
  skills: ["statistics", "data-analysis"]
}
      ]
    }
  ]
};

export default practiceTest1;
