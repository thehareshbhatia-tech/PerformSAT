// Practice Test 1 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Official-calibration recreation (2026-08-31): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md).
// Slot metadata (id/type/difficulty/band/skills/pattern) frozen from the
// round-7 blueprint: M1 5E/9M/8H, domains 7/6/5/4. M2 3E/8M/11H.
// Figure density lifted to official ~20%: M1 carries 4 diagram items,
// M2 carries 6. Numeric MC choices sorted ascending (official convention).

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
  question: "A landscaping mixture contains gravel and sand in a ratio of $2$ to $7$ by mass. If the combined mass of the gravel and sand in the mixture is $63$ kilograms, how many kilograms of gravel does the mixture contain?",
  choices: [
    // distractor: reports the sand ratio number (7) directly
    { id: "A", text: "$7$" },
    { id: "B", text: "$14$" },
    // distractor: uses 2/7 of the total instead of 2/9 (63 * 2/7 = 18)
    { id: "C", text: "$18$" },
    // distractor: solves for the sand mass instead of the gravel (7/9 of 63)
    { id: "D", text: "$49$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Gravel is $2$ parts out of $2+7=9$ total parts, so gravel $=\\frac{2}{9}\\cdot 63 = 14$ kilograms.\n\n**The Full Solution:**\nStep 1: Write the parts as $2k$ (gravel) and $7k$ (sand), so the ratio stays $2:7$.\nStep 2: The total is $2k+7k=9k=63$, so $k=7$.\nStep 3: Gravel $=2k=2\\cdot 7=14$ kilograms. Check: sand $=7\\cdot 7=49$, and $14+49=63$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): reports the sand part of the ratio instead of solving for gravel.\n* Choice C ($18$): uses $\\frac{2}{7}$ of the total instead of $\\frac{2}{9}$ — divides by one part, not the sum.\n* Choice D ($49$): solves for the sand mass ($\\frac{7}{9}\\cdot 63$) instead of the gravel.\n\n**Test Day Takeaway:** When a total is split by a ratio, each part's fraction has the SUM of the ratio numbers as its denominator, not a single part.",
  skills: ["ratios", "word-problems"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A community fundraiser has raised $\\$2{,}472$, which is $60\\%$ of its fundraising goal. What is the fundraiser's goal, in dollars?",
  choices: [
    // distractor: applies the percent forward — $2472 \times 0.60 = 1483.20$
    { id: "A", text: "$\\$1{,}483.20$" },
    // distractor: adds 60 to the amount raised instead of dividing by 0.60
    { id: "B", text: "$\\$2{,}532$" },
    { id: "C", text: "$\\$4{,}120$" },
    // distractor: divides by the complement 0.40, treating $2,472 as the unraised part
    { id: "D", text: "$\\$6{,}180$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $\\$2{,}472$ is $60\\%$ of the goal $G$, so $G=\\frac{2{,}472}{0.60}=4{,}120$.\n\n**The Full Solution:**\nStep 1: Translate \"$2{,}472$ is $60\\%$ of the goal\" into $0.60\\cdot G = 2{,}472$.\nStep 2: Divide both sides by $0.60$: $G=\\frac{2{,}472}{0.60}=4{,}120$.\nStep 3: Check: $0.60\\cdot 4{,}120 = 2{,}472$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$1{,}483.20$): multiplies $2{,}472\\cdot 0.60$ instead of dividing — the inverse operation.\n* Choice B ($\\$2{,}532$): adds the number $60$ to the amount raised, mixing a percent with a dollar amount.\n* Choice D ($\\$6{,}180$): divides by the complement $0.40$, treating $\\$2{,}472$ as the part NOT yet raised.\n\n**Test Day Takeaway:** To recover a whole from a known percent of it, divide the part by the percent written as a decimal.",
  skills: ["percents"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A print shop charges $\\$9$ for each poster printed plus a flat $\\$5$ design fee per order. The total charge for an order of $n$ posters is $\\$59$. What is the total charge, in dollars, for an order of $n + 3$ posters (with one design fee)?",
  choices: [
    // distractor: adds the count 3 as dollars instead of 3 * $9 = $27
    { id: "A", text: "$\\$62$" },
    // distractor: uses the $5 design fee as the per-poster price for the extra posters
    { id: "B", text: "$\\$74$" },
    // distractor: arithmetic slip — adds 18 instead of 27
    { id: "C", text: "$\\$77$" },
    { id: "D", text: "$\\$86$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Three more posters at $\\$9$ each add $\\$27$; the design fee does not change, so the new total is $\\$59+\\$27=\\$86$.\n\n**The Full Solution:**\nStep 1: The cost is $9n+5$. For the first order, $9n+5=59$, so $9n=54$ and $n=6$.\nStep 2: The new order has $n+3=9$ posters with one design fee: total $=9(9)+5=81+5=\\$86$.\nStep 3: Or skip finding $n$: adding $3$ posters adds $3\\cdot\\$9=\\$27$ and leaves the fee alone, so $\\$59+\\$27=\\$86$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$62$): adds the count $3$ as dollars instead of $3\\cdot\\$9=\\$27$.\n* Choice B ($\\$74$): uses the $\\$5$ design fee as the per-poster price: $\\$59+3\\cdot\\$5$.\n* Choice C ($\\$77$): adds $2\\cdot\\$9=\\$18$ instead of $3\\cdot\\$9=\\$27$ — an off-by-one count slip.\n\n**Test Day Takeaway:** Linear cost $=$ (rate $\\times$ quantity) $+$ fixed fee. Adding items moves only the rate-times-quantity piece; the fixed fee stays put.",
  skills: ["word-problems", "solving-equations"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $\\dfrac{3x}{14} = \\dfrac{27}{7}$, what is the value of $x - 6$?",
  choices: [
    { id: "A", text: "$12$" },
    // distractor: stops at x = 18 (forgets the "minus 6" final step)
    { id: "B", text: "$18$" },
    // distractor: adds 6 instead of subtracting
    { id: "C", text: "$24$" },
    // distractor: leaves the answer at 3x = 54 instead of x
    { id: "D", text: "$54$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Cross-multiply: $3x\\cdot 7 = 14\\cdot 27$, so $21x=378$ and $x=18$. The question wants $x-6=12$.\n\n**The Full Solution:**\nStep 1: From $\\frac{3x}{14}=\\frac{27}{7}$, cross-multiply: $7\\cdot 3x = 14\\cdot 27 \\Rightarrow 21x=378$.\nStep 2: Divide: $x=18$.\nStep 3: The last sentence asks for $x-6$, not $x$: $18-6=12$. Check: $\\frac{3(18)}{14}=\\frac{54}{14}=\\frac{27}{7}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($18$): solves for $x$ correctly but forgets to subtract $6$.\n* Choice C ($24$): adds $6$ to $x$ instead of subtracting.\n* Choice D ($54$): stops at $3x=54$ instead of dividing to get $x$.\n\n**Test Day Takeaway:** Re-read the final sentence before bubbling — the SAT often asks for a shifted quantity like $x-6$, not the variable itself.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The function $f(w) = 14 + 9w$ gives the total mass, in grams, of a mineral crystal $w$ weeks after it is placed in a growth solution. What is the best interpretation of $9$ in this context?",
  choices: [
    // distractor: confuses 9 with the initial value (which is 14)
    { id: "A", text: "The mass of the crystal when it is placed in the solution" },
    // distractor: treats 9 as an input value rather than a rate of change
    { id: "B", text: "The mass of the crystal $9$ weeks after it is placed in the solution" },
    { id: "C", text: "The increase in the mass of the crystal, in grams, each week" },
    // distractor: inverts the rate (would be 1/9 week per gram)
    { id: "D", text: "The number of weeks needed for the mass to increase by $1$ gram" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** In $f(w)=14+9w$, the coefficient of $w$ is the rate of change: the mass grows $9$ grams each week.\n\n**The Full Solution:**\nStep 1: The model has the form $f(w)=b+mw$, with $b=14$ and $m=9$.\nStep 2: The slope $m$ is the change in mass per one-unit change in $w$ (one week), so $9$ means the crystal gains $9$ grams per week. That is Choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A: describes the initial value $14$ (mass at $w=0$), not the slope.\n* Choice B: treats $9$ as an input $w=9$ rather than a per-week rate.\n* Choice D: inverts the rate — that would be $\\frac{1}{9}$ week per gram, not $9$.\n\n**Test Day Takeaway:** In $y=b+mx$, the number multiplying the variable is always the rate of change per unit of that variable.",
  skills: ["function-interpretation", "linear-functions", "slope"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  question: "The scatterplot shows the height $y$, in centimeters, of each of $8$ tomato seedlings $x$ days after germination, along with a line of best fit. The equation of the line of best fit is $y = 2.5x + 8$. According to the line of best fit, what is the predicted height, in centimeters, of a seedling $12$ days after germination?",
  diagram: { type: "scatterplot", params: {
    points: [[2, 14], [4, 17], [6, 25], [8, 26], [10, 34], [14, 41], [16, 50], [18, 52]],
    xMin: 0, xMax: 20, yMin: 0, yMax: 56,
    xGridStep: 2, xLabelStep: 4, yGridStep: 4, yLabelStep: 8,
    bestFitLine: { slope: 2.5, intercept: 8 },
    xLabel: "Days after germination", yLabel: "Height (cm)",
  } },
  choices: [
    // distractor: subtracts the intercept instead of adding (30 - 8)
    { id: "A", text: "$22$" },
    // distractor: stops at 2.5 * 12 = 30 — forgets to add the 8 intercept
    { id: "B", text: "$30$" },
    // distractor: adds only part of the intercept (uses 2 instead of 8)
    { id: "C", text: "$32$" },
    { id: "D", text: "$38$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Substitute $x=12$ into the line of best fit: $y=2.5(12)+8=30+8=38$.\n\n**The Full Solution:**\nStep 1: The line of best fit gives the predicted height for any number of days, so plug $x=12$ into $y=2.5x+8$.\nStep 2: $2.5(12)=30$.\nStep 3: Add the intercept: $30+8=38$ centimeters. The plot confirms it: at $x=12$ the line passes between the points at $x=10$ and $x=14$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($22$): subtracts the intercept ($30-8$) instead of adding it.\n* Choice B ($30$): stops at $2.5\\times 12$ and forgets the intercept $8$.\n* Choice C ($32$): adds only $2$ of the $8$-unit intercept — a partial-add slip.\n\n**Test Day Takeaway:** \"Predicted\" always means \"use the line of best fit's equation\" — substitute and finish with the constant term, even when actual data points sit nearby.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A solid right circular cone has a height of $9$ centimeters and a base diameter of $10$ centimeters. The volume of the cone, in cubic centimeters, can be expressed as $k\\pi$. What is the value of $k$?",
  correctAnswer: "75",
  explanation: "**SAT Pattern: Volume of a Cone**\n\n**The correct answer is $75$.**\n\n**The Fast Way (~15s):** The radius is half the diameter: $r=5$. Then $V=\\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(25)(9)=75\\pi$, so $k=75$.\n\n**The Full Solution:**\nStep 1: The diameter is $10$, so the radius is $r=\\frac{10}{2}=5$ centimeters.\nStep 2: The cone volume formula is $V=\\frac{1}{3}\\pi r^2 h$. With $r=5$ and $h=9$: $V=\\frac{1}{3}\\pi(25)(9)$.\nStep 3: $\\frac{25\\cdot 9}{3}=75$, so $V=75\\pi$ and $k=75$.\n\n**Common Mistakes:** Using the diameter $10$ as the radius gives $\\frac{1}{3}\\pi(100)(9)=300\\pi$; dropping the $\\frac{1}{3}$ gives $225\\pi$ (the cylinder).\n\n**Test Day Takeaway:** Halve a diameter before squaring, and keep the $\\frac{1}{3}$ — $V=\\frac{1}{3}\\pi r^2 h$ is on the Reference Sheet.",
  skills: ["volume", "geometry"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A bacteria culture doubles in size every $6$ hours. If the culture starts with $350$ cells, which function $N(t)$ gives the number of cells after $t$ hours?",
  choices: [
    // distractor: uses 6t instead of t/6 — would over-grow each hour
    { id: "A", text: "$N(t) = 350(2)^{6t}$" },
    { id: "B", text: "$N(t) = 350(2)^{\\frac{t}{6}}$" },
    // distractor: swaps the base (2) and the period (6)
    { id: "C", text: "$N(t) = 350(6)^{\\frac{t}{2}}$" },
    // distractor: starts at 700 (already doubled) instead of 350
    { id: "D", text: "$N(t) = 700(2)^{t}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"Doubles every $6$ hours\" means the exponent must equal $1$ at $t=6$. Only $\\frac{t}{6}$ does that, with start $350$ and base $2$: $N(t)=350(2)^{\\frac{t}{6}}$.\n\n**The Full Solution:**\nStep 1: The doubling-period model is $N(t)=N_0\\cdot 2^{\\frac{t}{d}}$ with start $N_0=350$ and period $d=6$.\nStep 2: So $N(t)=350(2)^{\\frac{t}{6}}$ — Choice B.\nStep 3: Check: $N(6)=350(2)^1=700$ (doubled) and $N(12)=350(2)^2=1{,}400$ (doubled again). $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: uses $6t$ in the exponent, which would double every $\\frac{1}{6}$ hour — far too fast.\n* Choice C: swaps base and period, using base $6$ and exponent $\\frac{t}{2}$.\n* Choice D: starts at $700$ (already doubled) instead of $350$.\n\n**Test Day Takeaway:** \"Doubles every $d$ units\" $\\Rightarrow$ base $2$ with exponent $\\frac{t}{d}$. The period divides $t$ in the exponent — it is never multiplied.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table summarizes how $250$ students at a school travel to school, by grade. If one of the students who walks to school is selected at random, what is the probability that the student is in $10$th grade, expressed as a percent?",
  diagram: {
    type: "twoWayTable",
    params: {
      headers: ["", "Takes the bus", "Walks", "Total"],
      rows: [
        ["9th grade", "72", "38", "110"],
        ["10th grade", "78", "62", "140"],
        ["Total", "150", "100", "250"]
      ]
    }
  },
  choices: [
    // distractor: divides 62 by the grand total 250 (wrong base)
    { id: "A", text: "$24.8\\%$" },
    // distractor: reads the 9th-grade walker count 38 as the percent
    { id: "B", text: "$38\\%$" },
    // distractor: divides 62 by the 10th-grade row total 140
    { id: "C", text: "$44.3\\%$" },
    { id: "D", text: "$62\\%$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** \"Of the students who walk\" sets the denominator to the walkers' total, $100$. Of those, $62$ are in $10$th grade: $\\frac{62}{100} = 62\\%$.\n\n**The Full Solution:**\nStep 1: The condition is \"walks to school,\" so use the Walks column total, $100$, as the denominator.\nStep 2: The $10$th-grade walker count is $62$.\nStep 3: $\\frac{62}{100} = 62\\%$ — Choice D.\n\n**Why the wrong answers are tempting:**\n* Choice A ($24.8\\%$): divides by the grand total $250$ instead of the walkers' total: $\\frac{62}{250}$.\n* Choice B ($38\\%$): reads the $9$th-grade walker count $38$ as if it were the answer.\n* Choice C ($44.3\\%$): divides by the $10$th-grade row total $140$, conditioning on the wrong group.\n\n**Test Day Takeaway:** In conditional probability, the denominator is the total of the GIVEN group, not the grand total — find the given group's row or column first.",
  skills: ["two-way-tables", "probability", "percents"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A line passes through the points $(2, 9)$ and $(6, -3)$ in the $xy$-plane. What is the $y$-intercept of this line?",
  choices: [
    // distractor: uses slope +3 instead of -3 (sign slip): 9 - 6 = 3
    { id: "A", text: "$3$" },
    // distractor: reads the y-value of the first point as the intercept
    { id: "B", text: "$9$" },
    // distractor: arithmetic slip — adds 3 instead of 6 to 9
    { id: "C", text: "$12$" },
    { id: "D", text: "$15$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Slope $=\\frac{-3-9}{6-2}=\\frac{-12}{4}=-3$. Using $(2,9)$: $9=-3(2)+b$, so $b=9+6=15$.\n\n**The Full Solution:**\nStep 1: Find the slope: $m=\\frac{-3-9}{6-2}=\\frac{-12}{4}=-3$.\nStep 2: Plug $(2,9)$ into $y=mx+b$: $9=-3(2)+b \\Rightarrow b=9+6=15$.\nStep 3: The line is $y=-3x+15$, so the $y$-intercept is $15$. Check $(6,-3)$: $-3(6)+15=-3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): flips the slope's sign to $+3$, computing $9-6$.\n* Choice B ($9$): reads the $y$-value of the point $(2,9)$ as if it were the intercept.\n* Choice C ($12$): adds $3$ instead of $6$ when isolating $b$.\n\n**Test Day Takeaway:** After finding $b$, confirm BOTH given points satisfy your equation — it catches slope and sign slips instantly.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the right triangle shown, one acute angle measures $52^{\\circ}$ and the side adjacent to that angle has length $15$. Which expression gives the length of the hypotenuse?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["52°", "", ""],
      sideLabels: ["15", "", ""],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: multiplies by sine — mixes up the ratio and the operation
    { id: "A", text: "$15 \\sin 52^{\\circ}$" },
    // distractor: multiplies (gives a value < 15, smaller than the adjacent leg — impossible for the hypotenuse)
    { id: "B", text: "$15 \\cos 52^{\\circ}$" },
    // distractor: uses sine (opposite/hypotenuse) instead of cosine (adjacent/hypotenuse)
    { id: "C", text: "$\\dfrac{15}{\\sin 52^{\\circ}}$" },
    { id: "D", text: "$\\dfrac{15}{\\cos 52^{\\circ}}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $\\cos 52^\\circ = \\frac{\\text{adjacent}}{\\text{hypotenuse}}=\\frac{15}{h}$, so $h=\\frac{15}{\\cos 52^\\circ}$.\n\n**The Full Solution:**\nStep 1: For the $52^\\circ$ angle, the side of length $15$ is adjacent and $h$ is the hypotenuse.\nStep 2: Cosine relates adjacent to hypotenuse: $\\cos 52^\\circ=\\frac{15}{h}$.\nStep 3: Solve for $h$: $h=\\frac{15}{\\cos 52^\\circ}$ — Choice D.\n\n**Why the wrong answers are tempting:**\n* Choice A: multiplies by sine — the wrong ratio AND the wrong operation.\n* Choice B: multiplies by $\\cos 52^\\circ$; since $\\cos 52^\\circ<1$, the result is smaller than $15$, but the hypotenuse must be the longest side.\n* Choice C: uses sine, which relates the opposite side, not the adjacent one.\n\n**Test Day Takeaway:** CAH: $\\cos=\\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$. To get the hypotenuse from the adjacent leg, divide the leg by $\\cos$.",
  skills: ["triangles", "angles"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $5(2w - 7) + 3w = 6w + 14$, what is the value of $w$?",
  correctAnswer: "7",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~20s):** Expand to $10w-35+3w=6w+14$, so $13w-35=6w+14$, then $7w=49$ and $w=7$.\n\n**The Full Solution:**\nStep 1: Distribute the $5$: $5(2w-7)+3w=10w-35+3w=13w-35$.\nStep 2: Set equal to the right side: $13w-35=6w+14$.\nStep 3: Subtract $6w$ and add $35$: $7w=49$, so $w=7$. Check: $5(14-7)+21=56$ and $6(7)+14=56$. $\\checkmark$\n\n**Common Mistakes:** Distributing the $5$ to only the first term (getting $10w-7$); a sign slip that turns $-35$ into $+35$ and gives $7w=-21$.\n\n**Test Day Takeaway:** Distribute first, combine like terms second, isolate the variable last — work each step slowly to avoid sign errors.",
  skills: ["solving-equations"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The system of equations below has the solution $(x, y)$.\n\n$3x + 2y = 29$\n$3x - 2y = 13$\n\nWhat is the value of $x$?",
  choices: [
    // distractor: stops one step early — gives y instead of x
    { id: "A", text: "$4$" },
    { id: "B", text: "$7$" },
    // distractor: arithmetic error — divides 42 by 5 and rounds
    { id: "C", text: "$8$" },
    // distractor: stops at 3x = 21 and reports 21
    { id: "D", text: "$21$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The $y$-terms are $+2y$ and $-2y$ — exact opposites. Add the equations: $6x = 42$, so $x = 7$.\n\n**The Full Solution:**\nStep 1: Add the two equations to cancel $y$: $(3x + 2y) + (3x - 2y) = 29 + 13$, which gives $6x = 42$, so $x = 7$.\nStep 2: Substitute $x = 7$ into $3x + 2y = 29$: $21 + 2y = 29 \\Rightarrow 2y = 8 \\Rightarrow y = 4$.\nStep 3: Check in the second equation: $3(7) - 2(4) = 21 - 8 = 13$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): reports $y$, the value found second, instead of the requested $x$.\n* Choice C ($8$): divides $42$ by $5$ instead of $6$ — a coefficient slip.\n* Choice D ($21$): stops at $3x = 21$ after substituting, without dividing by $3$.\n\n**Test Day Takeaway:** When one variable has opposite coefficients, add the equations to eliminate it in a single step.",
  skills: ["systems-of-equations", "solving-equations"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "Line $a$ has a slope of $-\\dfrac{3}{7}$. Line $b$ is perpendicular to line $a$ and passes through the point $(6, 8)$. What is the $y$-intercept of line $b$?",
  correctAnswer: "-6",
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $-6$.**\n\n**The Fast Way (~20s):** Perpendicular slope is the negative reciprocal of $-\\frac{3}{7}$, which is $\\frac{7}{3}$. Plug $(6, 8)$ into $y = \\frac{7}{3}x + b$: $8 = 14 + b$, so $b = -6$.\n\n**The Full Solution:**\nStep 1: Perpendicular slopes are negative reciprocals. Line $a$ has slope $-\\frac{3}{7}$, so line $b$ has slope $\\frac{7}{3}$.\nStep 2: Substitute the point $(6, 8)$ into $y = \\frac{7}{3}x + b$: $8 = \\frac{7}{3}(6) + b = 14 + b$.\nStep 3: Solve for the $y$-intercept: $b = 8 - 14 = -6$.\n\n**Common Mistakes:** Using $-\\frac{3}{7}$ (parallel slope) or $\\frac{3}{7}$ (flipped sign but not the fraction) instead of the negative reciprocal $\\frac{7}{3}$; or stopping at $14 + b = 8$ without isolating $b$.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals — flip the fraction AND change the sign — then use the given point to solve for $b$.",
  skills: ["slope", "linear-functions", "coordinate-geometry"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Over $9$ shifts, a bicycle repair shop recorded the number of tune-ups completed each shift. The counts for $8$ of the shifts are listed below.\n\n$12, 21, 18, 26, 15, 22, 19, 24$\n\nIf the mean number of tune-ups per shift over all $9$ shifts is $20$, how many tune-ups were completed on the ninth shift?",
  correctAnswer: "23",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $23$.**\n\n**The Fast Way (~25s):** The total for $9$ shifts is $9 \\times 20 = 180$. The $8$ listed counts sum to $157$, so the ninth shift is $180 - 157 = 23$.\n\n**The Full Solution:**\nStep 1: Mean $\\times$ count $=$ total, so all $9$ shifts sum to $9 \\times 20 = 180$.\nStep 2: Add the $8$ known counts: $12 + 21 + 18 + 26 + 15 + 22 + 19 + 24 = 157$.\nStep 3: The missing shift is the total minus the known sum: $180 - 157 = 23$.\n\n**Common Mistakes:** Reporting $\\frac{157}{8} \\approx 19.6$, the mean of just the eight listed shifts; or multiplying the mean by $8$ instead of $9$, which gives $160 - 157 = 3$.\n\n**Test Day Takeaway:** To recover a missing value from a mean, multiply the mean by the FULL count to get the total, then subtract the known sum.",
  skills: ["statistics", "mean"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation of a circle in the $xy$-plane is $x^2 + y^2 - 10x + 4y + 13 = 0$. What is the radius of the circle?",
  choices: [
    { id: "A", text: "$4$" },
    // distractor: mishandles the constant — computes sqrt(25 + 4) without subtracting 13
    { id: "B", text: "$\\sqrt{29}$" },
    // distractor: reports r^2 = 16 instead of r = 4
    { id: "C", text: "$16$" },
    // distractor: uses 25 + 4 = 29 directly as the radius
    { id: "D", text: "$29$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Complete the square on both variables: $(x-5)^2 + (y+2)^2 = -13 + 25 + 4 = 16$. The radius is $\\sqrt{16} = 4$.\n\n**The Full Solution:**\nStep 1: Group the variable terms: $(x^2 - 10x) + (y^2 + 4y) = -13$.\nStep 2: Complete each square — half of $-10$ is $-5$, and $(-5)^2 = 25$; half of $4$ is $2$, and $2^2 = 4$. Add both to each side: $(x^2 - 10x + 25) + (y^2 + 4y + 4) = -13 + 25 + 4$.\nStep 3: This is $(x-5)^2 + (y+2)^2 = 16$, so $r^2 = 16$ and $r = \\sqrt{16} = 4$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\sqrt{29}$): adds $25 + 4$ but never subtracts the original constant $13$.\n* Choice C ($16$): reports $r^2$ as the radius instead of taking the square root.\n* Choice D ($29$): uses $25 + 4 = 29$ directly, skipping both the constant and the root.\n\n**Test Day Takeaway:** Complete the square for both $x$ and $y$, then remember the radius is $\\sqrt{r^2}$, not $r^2$ itself.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $\\dfrac{27^{x} \\cdot 9^{x+3}}{3^{4x-1}} = 3^{n}$ and $x = 3$, what is the value of $n$?",
  correctAnswer: "10",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~30s):** With $x = 3$, rewrite every term in base $3$: $27^3 = 3^9$, $9^6 = 3^{12}$, denominator $= 3^{11}$. So $\\frac{3^9 \\cdot 3^{12}}{3^{11}} = 3^{10}$, giving $n = 10$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 3$: $\\frac{27^{3} \\cdot 9^{3+3}}{3^{4(3)-1}} = \\frac{27^3 \\cdot 9^6}{3^{11}}$.\nStep 2: Convert to base $3$: $27^3 = (3^3)^3 = 3^9$ and $9^6 = (3^2)^6 = 3^{12}$.\nStep 3: Combine using add-when-multiplying, subtract-when-dividing: $\\frac{3^9 \\cdot 3^{12}}{3^{11}} = 3^{9 + 12 - 11} = 3^{10}$, so $n = 10$.\n\n**Common Mistakes:** Writing $9^6 = 3^{6}$ by treating $9$ as $3^1$; adding the denominator's exponent instead of subtracting it, which gives $9 + 12 + 11 = 32$.\n\n**Test Day Takeaway:** Convert every term to the same prime base, then add exponents when multiplying and subtract when dividing.",
  skills: ["exponent-rules"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the parabola $y = 3x^2 + bx + c$ has its vertex at $(2, -5)$. What is the value of $c$?",
  choices: [
    // distractor: sign slip: 12 - 5 computed as -17
    { id: "A", text: "$-17$" },
    // distractor: confuses the y-coordinate of the vertex with c
    { id: "B", text: "$-5$" },
    { id: "C", text: "$7$" },
    // distractor: sign error: 12 + 5 = 17
    { id: "D", text: "$17$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Write vertex form $y = 3(x-2)^2 - 5$ and expand. The constant terms give $3(4) - 5 = 12 - 5 = 7$, so $c = 7$.\n\n**The Full Solution:**\nStep 1: With vertex $(2, -5)$ and $a = 3$, vertex form is $y = 3(x - 2)^2 - 5$.\nStep 2: Expand the square: $y = 3(x^2 - 4x + 4) - 5$.\nStep 3: Distribute and collect: $y = 3x^2 - 12x + 12 - 5 = 3x^2 - 12x + 7$. The constant term is $c = 7$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-17$): computes $-12 - 5$ instead of $12 - 5$ — a sign slip on the expanded constant.\n* Choice B ($-5$): reports the vertex's $y$-coordinate, confusing it with $c$.\n* Choice D ($17$): adds $12 + 5$, flipping the sign of the vertex's $y$-coordinate.\n\n**Test Day Takeaway:** Build vertex form first, then fully expand. The constant $c$ is the $y$-intercept, not the vertex's $y$-coordinate.",
  skills: ["vertex-form", "quadratic-equations", "coordinate-geometry"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For what value of $c$ does the system of equations below have exactly one solution?\n\n$y = 2x^2 + 9x + 8$\n$y = 3x + c$",
  choices: [
    // distractor: right magnitude, wrong sign
    { id: "A", text: "$c = -\\dfrac{7}{2}$" },
    { id: "B", text: "$c = \\dfrac{7}{2}$" },
    // distractor: sets the constant 8 - c = 0 instead of using the discriminant
    { id: "C", text: "$c = 8$" },
    // distractor: stops at 8c = 28 and reports 28
    { id: "D", text: "$c = 28$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Set the curves equal: $2x^2 + 6x + (8 - c) = 0$. One solution means discriminant $= 0$: $36 - 8(8-c) = 0 \\Rightarrow 8c = 28 \\Rightarrow c = \\frac{7}{2}$.\n\n**The Full Solution:**\nStep 1: Set $2x^2 + 9x + 8 = 3x + c$, then move everything to one side: $2x^2 + 6x + (8 - c) = 0$.\nStep 2: Exactly one solution requires the discriminant $b^2 - 4ac = 0$, with $a = 2$, $b = 6$: $6^2 - 4(2)(8 - c) = 0$.\nStep 3: Simplify: $36 - 64 + 8c = 0$, so $8c = 28$ and $c = \\frac{7}{2}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{7}{2}$): right magnitude, wrong sign — a slip moving $-28$ across the equals sign.\n* Choice C ($8$): sets the constant $8 - c$ to zero instead of the discriminant.\n* Choice D ($28$): stops at $8c = 28$ without dividing by $8$.\n\n**Test Day Takeaway:** A line meets a parabola exactly once when the combined equation's discriminant equals zero — set the equations equal first, then apply $b^2 - 4ac = 0$.",
  skills: ["quadratic-equations", "systems-of-equations", "discriminant"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Which expression is equivalent to $\\dfrac{9x^2 - 16}{3x^2 + 10x + 8}$ for all values of $x$ where the expression is defined?",
  choices: [
    { id: "A", text: "$\\dfrac{3x - 4}{x + 2}$" },
    // distractor: cancels the wrong numerator factor (keeps 3x+4 instead of 3x-4)
    { id: "B", text: "$\\dfrac{3x + 4}{x + 2}$" },
    // distractor: cancels the wrong denominator factor, dropping (x+2)
    { id: "C", text: "$\\dfrac{3x - 4}{3x + 4}$" },
    // distractor: "cancels" individual terms across the fraction — an illegal move
    { id: "D", text: "$\\dfrac{9x - 16}{3x + 8}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Factor: numerator is the difference of squares $(3x-4)(3x+4)$; denominator factors to $(3x+4)(x+2)$. Cancel the shared $(3x+4)$ to get $\\frac{3x-4}{x+2}$.\n\n**The Full Solution:**\nStep 1: Numerator $9x^2 - 16 = (3x)^2 - 4^2 = (3x-4)(3x+4)$.\nStep 2: Denominator $3x^2 + 10x + 8$: find factors of $3 \\cdot 8 = 24$ that add to $10$, namely $4$ and $6$. So $3x^2 + 4x + 6x + 8 = x(3x+4) + 2(3x+4) = (3x+4)(x+2)$.\nStep 3: Cancel $(3x+4)$: $\\frac{(3x-4)(3x+4)}{(3x+4)(x+2)} = \\frac{3x-4}{x+2}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{3x+4}{x+2}$): cancels the wrong numerator factor, keeping $(3x+4)$ instead of $(3x-4)$.\n* Choice C ($\\frac{3x-4}{3x+4}$): cancels the wrong denominator factor, dropping $(x+2)$.\n* Choice D ($\\frac{9x-16}{3x+8}$): \"cancels\" the $x^2$ and constant terms individually — cancellation only works on shared FACTORS.\n\n**Test Day Takeaway:** Factor numerator and denominator completely before cancelling; a difference of squares $a^2 - b^2$ is the classic SAT factoring cue.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $\\sqrt[5]{x^3} \\cdot \\sqrt{x^3} = x^k$ for $x > 0$, what is the value of $k$? Express your answer as a fraction.",
  correctAnswer: "21/10",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\frac{21}{10}$.**\n\n**The Fast Way (~20s):** Convert each radical to a fractional exponent: $\\sqrt[5]{x^3} = x^{\\frac{3}{5}}$ and $\\sqrt{x^3} = x^{\\frac{3}{2}}$. Multiplying same bases adds exponents: $\\frac{3}{5} + \\frac{3}{2} = \\frac{6}{10} + \\frac{15}{10} = \\frac{21}{10}$.\n\n**The Full Solution:**\nStep 1: Rewrite the radicals — the power goes on top, the index on the bottom: $\\sqrt[5]{x^3} = x^{\\frac{3}{5}}$ and $\\sqrt{x^3} = x^{\\frac{3}{2}}$ (a square root has index $2$).\nStep 2: Multiplying powers of the same base adds the exponents: $x^{\\frac{3}{5}} \\cdot x^{\\frac{3}{2}} = x^{\\frac{3}{5} + \\frac{3}{2}}$.\nStep 3: Use a common denominator of $10$: $\\frac{3}{5} = \\frac{6}{10}$ and $\\frac{3}{2} = \\frac{15}{10}$, so $k = \\frac{6}{10} + \\frac{15}{10} = \\frac{21}{10}$.\n\n**Common Mistakes:** Flipping a radical to $x^{\\frac{5}{3}}$ instead of $x^{\\frac{3}{5}}$; or multiplying the exponents ($\\frac{3}{5} \\cdot \\frac{3}{2} = \\frac{9}{10}$) instead of adding them.\n\n**Test Day Takeaway:** Convert radicals to fractional exponents (power over index), then add exponents when multiplying matching bases.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The right triangle shown has legs of length $a$ and $a + 23$, and its hypotenuse has length $37$. What is the perimeter of the triangle?",
  diagram: {
    type: "rightTriangle",
    params: {
      sideLabels: ["a", "a + 23", "37"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: stops one step early — sums only the two legs (12 + 35 = 47)
    { id: "A", text: "$47$" },
    // distractor: skips the longer leg (12 + 37 = 49)
    { id: "B", text: "$49$" },
    { id: "C", text: "$84$" },
    // distractor: double-counts the hypotenuse (12 + 35 + 37 + 37)
    { id: "D", text: "$121$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** A hypotenuse of $37$ signals the $12$-$35$-$37$ Pythagorean triple, so the legs are $a = 12$ and $a + 23 = 35$. Perimeter $= 12 + 35 + 37 = 84$.\n\n**The Full Solution:**\nStep 1: Apply the Pythagorean theorem to the legs $a$ and $a+23$: $a^2 + (a+23)^2 = 37^2$.\nStep 2: Expand and simplify: $2a^2 + 46a + 529 = 1{,}369 \\Rightarrow 2a^2 + 46a - 840 = 0 \\Rightarrow a^2 + 23a - 420 = 0$, which factors as $(a + 35)(a - 12) = 0$. Take the positive root $a = 12$, so $a + 23 = 35$.\nStep 3: Add all three sides: $12 + 35 + 37 = 84$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($47$): adds only the two legs and forgets the hypotenuse.\n* Choice B ($49$): adds $12 + 37$ but skips the $35$ leg.\n* Choice D ($121$): counts the hypotenuse twice, adding $12 + 35 + 37 + 37$.\n\n**Test Day Takeaway:** Memorize the common Pythagorean triples — a hypotenuse of $37$ pairs with legs $12$ and $35$ — and remember perimeter sums all three sides.",
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
// Flow: E at 1,5,17 · M at 2,3,4,6,9,11,13,19 ·
// H at 7,8,10,12,14,15,16,18,20,21,22. Breather easy at Q17 (range).
// Official-calibration recreation 2026-08-31: fresh scenarios throughout;
// diagrams at Q3 (parallel lines), Q6 (scatterplot residual), Q7 (table),
// Q10 (two-way table), Q14 (nested triangles), Q22 (frequency table).

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "In a right triangle, the length of the hypotenuse is $41$ and the length of one leg is $9$. What is the length of the other leg?",
  choices: [
    // distractor: divides the hypotenuse by the known leg and rounds ($41/9 \approx 4.6$)
    { id: "A", text: "$5$" },
    // distractor: subtracts the leg from the hypotenuse (41 - 9)
    { id: "B", text: "$32$" },
    { id: "C", text: "$40$" },
    // distractor: ADDS the squares ($\sqrt{41^2 + 9^2} = \sqrt{1762} \approx 42$) — treats the hypotenuse as a leg
    { id: "D", text: "$42$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The missing side is a LEG, so subtract squares: $\\sqrt{41^2 - 9^2} = \\sqrt{1{,}681 - 81} = \\sqrt{1{,}600} = 40$.\n\n**The Full Solution:**\nStep 1: The Pythagorean theorem gives $a^2 + b^2 = c^2$, where $c = 41$ is the hypotenuse and $a = 9$ is the known leg.\nStep 2: Solve for the other leg: $b^2 = 41^2 - 9^2 = 1{,}681 - 81 = 1{,}600$.\nStep 3: Take the root: $b = \\sqrt{1{,}600} = 40$. Check: $9^2 + 40^2 = 81 + 1{,}600 = 1{,}681 = 41^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): divides $41 \\div 9 \\approx 4.6$ and rounds — the Pythagorean theorem relates SQUARES of sides, not their quotient.\n* Choice B ($32$): subtracts the side lengths ($41 - 9$) instead of their squares.\n* Choice D ($42$): ADDS the squares, $\\sqrt{41^2 + 9^2} \\approx 42$ — the reflex move for finding a hypotenuse, but here $41$ already IS the hypotenuse. This is the trap.\n\n**Test Day Takeaway:** Before applying the Pythagorean theorem, identify which given side is the hypotenuse. Missing hypotenuse → add squares; missing leg → subtract squares.",
  skills: ["triangles", "pythagorean", "geometry"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Line $g$ passes through the points $(2, 3)$ and $(8, 1)$. Line $h$ is perpendicular to line $g$. What is the slope of line $h$?",
  choices: [
    // distractor: takes reciprocal but keeps the negative sign
    { id: "A", text: "$-3$" },
    // distractor: gives slope of g (parallel, not perpendicular)
    { id: "B", text: "$-\\dfrac{1}{3}$" },
    // distractor: flips the sign without reciprocating
    { id: "C", text: "$\\dfrac{1}{3}$" },
    { id: "D", text: "$3$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Slope of $g$ is $\\frac{1 - 3}{8 - 2} = \\frac{-2}{6} = -\\frac{1}{3}$. The perpendicular slope is the negative reciprocal: $3$.\n\n**The Full Solution:**\nStep 1: Use the slope formula on $(2, 3)$ and $(8, 1)$: $m_g = \\frac{1 - 3}{8 - 2} = \\frac{-2}{6} = -\\frac{1}{3}$.\nStep 2: Perpendicular slopes are negative reciprocals, so $m_h = -\\dfrac{1}{-1/3} = 3$.\nStep 3: Check: $\\left(-\\frac{1}{3}\\right) \\cdot 3 = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): takes the reciprocal but keeps the negative sign.\n* Choice B ($-\\frac{1}{3}$): reports the slope of $g$ itself (parallel, not perpendicular).\n* Choice C ($\\frac{1}{3}$): flips the sign but forgets to take the reciprocal.\n\n**Test Day Takeaway:** Perpendicular slopes flip the fraction AND change the sign; their product must equal $-1$.",
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
      angles: { top: ["(2x+15)°", ""], bottom: ["(4x-35)°", ""] },
      lineLabels: ["ℓ", "m", "t"]
    }
  },
  correctAnswer: "25",
  explanation: "**SAT Pattern: Parallel Lines and Transversals**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~20s):** The two marked angles are corresponding angles on parallel lines, so they are equal: $2x + 15 = 4x - 35$. Solving gives $50 = 2x$, so $x = 25$.\n\n**The Full Solution:**\nStep 1: When a transversal crosses parallel lines, corresponding angles are equal. Set the expressions equal: $2x + 15 = 4x - 35$.\nStep 2: Collect terms: $15 + 35 = 4x - 2x$, so $50 = 2x$.\nStep 3: Divide: $x = 25$.\n\nVerification: at $x = 25$ the first angle is $2(25) + 15 = 65^\\circ$ and the corresponding angle is $4(25) - 35 = 65^\\circ$. $\\checkmark$\n\n**Common Mistakes:** Treating the angles as supplementary (summing to $180^\\circ$) gives $6x - 20 = 180$, so $x \\approx 33.3$ — wrong, because corresponding angles are equal, not supplementary. Watch the sign when moving $-35$ across the equals sign.\n\n**Test Day Takeaway:** On parallel lines cut by a transversal, corresponding, alternate interior, and alternate exterior angles are all EQUAL; only same-side interior angles are supplementary.",
  skills: ["angles", "geometry"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $f(x) = x^2$ and $g(x) = f(x + 4) - 3$, for what value of $x$ does the function $g$ attain its minimum value?",
  choices: [
    { id: "A", text: "$-4$" },
    // distractor: confuses the vertical shift with the horizontal one (uses -3)
    { id: "B", text: "$-3$" },
    // distractor: uses the vertical shift with the wrong sign
    { id: "C", text: "$3$" },
    // distractor: shift direction error — reads f(x+4) as a rightward shift
    { id: "D", text: "$4$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $g(x) = f(x+4) - 3 = (x+4)^2 - 3$. This is $y = x^2$ shifted LEFT $4$, so its minimum sits at $x = -4$.\n\n**The Full Solution:**\nStep 1: Write $g$ explicitly: since $f(x) = x^2$, $g(x) = (x+4)^2 - 3$.\nStep 2: A squared term is smallest when it equals $0$. Set $x + 4 = 0$, so $x = -4$.\nStep 3: Confirm: $g(-4) = 0 - 3 = -3$, and for any other $x$, $(x+4)^2 > 0$, so $g(x) > -3$. The minimum is attained at $x = -4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-3$): uses the vertical shift $-3$ (the minimum VALUE's source) as the location.\n* Choice C ($3$): the vertical shift with its sign flipped.\n* Choice D ($4$): shifts in the wrong direction — reads $f(x+4)$ as a rightward shift.\n\n**Test Day Takeaway:** $f(x+h)$ shifts the graph LEFT by $h$ (the sign feels reversed); $f(x)-k$ shifts DOWN by $k$. The vertex $(0,0)$ moves to $(-h,-k)$.",
  skills: ["function-interpretation"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A sleep study measured a random sample of adults in a city and estimated the mean nightly sleep to be $6.4$ hours, with an associated margin of error of $0.6$ hours. Based on this estimate and margin of error, which of the following is the most appropriate conclusion about the mean nightly sleep of all adults in the city?",
  choices: [
    // distractor: applies the margin of error on only one side (6.4 to 7.0)
    { id: "A", text: "It is plausible that the mean nightly sleep of all adults in the city is between $6.4$ and $7.0$ hours." },
    { id: "B", text: "It is plausible that the mean nightly sleep of all adults in the city is between $5.8$ and $7.0$ hours." },
    // distractor: doubles the margin of error before adding/subtracting (6.4 +/- 1.2)
    { id: "C", text: "It is plausible that the mean nightly sleep of all adults in the city is between $5.2$ and $7.6$ hours." },
    // distractor: treats the sample estimate as an exact population value
    { id: "D", text: "The mean nightly sleep of all adults in the city is exactly $6.4$ hours." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The plausible interval is estimate $\\pm$ margin of error: $6.4 - 0.6 = 5.8$ up to $6.4 + 0.6 = 7.0$ hours.\n\n**The Full Solution:**\nStep 1: A margin of error defines a symmetric band around the sample estimate where the true population mean plausibly lies.\nStep 2: Lower bound: $6.4 - 0.6 = 5.8$ hours.\nStep 3: Upper bound: $6.4 + 0.6 = 7.0$ hours. So the mean nightly sleep of all adults in the city is plausibly between $5.8$ and $7.0$ hours.\n\n**Why the wrong answers are tempting:**\n* Choice A: applies the margin on the upper side only ($6.4$ to $7.0$), forgetting the lower bound.\n* Choice C: doubles the margin to $1.2$ before forming the interval ($6.4 \\pm 1.2$).\n* Choice D: claims the population mean is exactly the sample estimate — a margin of error exists precisely because that is not guaranteed.\n\n**Test Day Takeaway:** A margin of error gives a two-sided interval — subtract it from AND add it to the estimate. The true mean is plausibly anywhere in that band, never a single exact value.",
  skills: ["statistics", "margin-of-error", "data-analysis"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The scatterplot shows the score $y$ on a $60$-point quiz for each of $9$ students who studied $x$ hours, along with a line of best fit. The equation of the line of best fit is $\\hat{y} = 1.2x + 14$. One student studied $20$ hours and scored $41$ points. What is the residual, in points, for this student?",
  diagram: { type: "scatterplot", params: {
    points: [[4, 18], [6, 24], [10, 25], [12, 30], [16, 32], [24, 40], [28, 49], [30, 51]],
    xMin: 0, xMax: 32, yMin: 0, yMax: 56,
    xGridStep: 4, xLabelStep: 8, yGridStep: 4, yLabelStep: 8,
    bestFitLine: { slope: 1.2, intercept: 14 },
    highlightPoint: [20, 41], highlightLabel: "(20, 41)", showResidual: true,
    xLabel: "Study time (hours)", yLabel: "Quiz score (points)",
  } },
  choices: [
    // distractor: predicted - actual (reversed sign)
    { id: "A", text: "$-3$" },
    { id: "B", text: "$3$" },
    // distractor: arithmetic slip on the 41 - 38 subtraction
    { id: "C", text: "$5$" },
    // distractor: gives the predicted value, not the residual
    { id: "D", text: "$38$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Residual**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Predicted score: $\\hat{y} = 1.2(20) + 14 = 38$. Residual $=$ actual $-$ predicted $= 41 - 38 = 3$.\n\n**The Full Solution:**\nStep 1: Plug $x = 20$ into the model: $\\hat{y} = 1.2(20) + 14 = 24 + 14 = 38$ points.\nStep 2: The residual is actual minus predicted: $41 - 38 = 3$ points.\nStep 3: A positive residual means the student's point lies above the line of best fit — visible in the plot at $(20, 41)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): computes predicted $-$ actual ($38 - 41$), reversing the order.\n* Choice C ($5$): an arithmetic slip on the subtraction.\n* Choice D ($38$): stops at the predicted value without subtracting.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted. Positive means the point is above the line; negative means below.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $g$ is defined by $g(x) = \\dfrac{f(x)}{x - 3}$, where $f$ is a linear function. The table gives three values of $x$ and the corresponding values of $g(x)$. What is the $y$-intercept of the graph of $y = f(x)$ in the $xy$-plane?",
  diagram: {
    type: "dataTable",
    params: {
      headers: ["x", "g(x)"],
      rows: [["-2", "-2"], ["1", "-8"], ["7", "7"]]
    }
  },
  choices: [
    // distractor: reads a g(x) value straight from the table
    { id: "A", text: "$(0, -8)$" },
    // distractor: halves the correct intercept
    { id: "B", text: "$(0, 7)$" },
    { id: "C", text: "$(0, 14)$" },
    // distractor: reports f(1) = 16 instead of f(0)
    { id: "D", text: "$(0, 16)$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Linear Function from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** Since $g(x) = \\dfrac{f(x)}{x-3}$, recover $f(x) = g(x)(x-3)$ at each row, fit the line, and read $f(0)$. That gives $f(x) = 2x + 14$, so the $y$-intercept is $(0, 14)$.\n\n**The Full Solution:**\nStep 1: Solve for $f$: $f(x) = g(x)\\,(x-3)$.\nStep 2: Evaluate at each table value:\n$f(-2) = -2 \\cdot (-5) = 10$,\n$f(1) = -8 \\cdot (-2) = 16$,\n$f(7) = 7 \\cdot 4 = 28$.\nStep 3: Fit the line through $(-2, 10)$ and $(1, 16)$: slope $= \\dfrac{16 - 10}{1 - (-2)} = \\dfrac{6}{3} = 2$. Check with $(7, 28)$: $\\dfrac{28 - 10}{7 - (-2)} = \\dfrac{18}{9} = 2$. $\\checkmark$\nStep 4: Use $f(x) = 2x + b$ with $(1, 16)$: $16 = 2 + b$, so $b = 14$. Thus $f(x) = 2x + 14$ and the $y$-intercept is $(0, 14)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(0, -8)$): reads a $g(x)$ value straight from the table instead of building $f$.\n* Choice B ($(0, 7)$): halves the true intercept, as if the slope were $1$.\n* Choice D ($(0, 16)$): reports $f(1) = 16$ rather than evaluating at $x = 0$.\n\n**Test Day Takeaway:** When $g = \\dfrac{f}{x-a}$ with $f$ linear, recover $f(x) = g(x)(x-a)$ at each listed $x$, fit the line, THEN evaluate at $x = 0$.",
  skills: ["linear-functions", "rational-functions", "coordinate-geometry"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Real numbers $r$ and $s$ satisfy $r + s = 7$ and $rs = 10$. What is the value of $r^3 + s^3$?",
  choices: [
    // distractor: computes r^2 + s^2 = (r+s)^2 - 2rs = 29 instead of cubes
    { id: "A", text: "$29$" },
    // distractor: reports the cross term 3rs(r+s) = 210 halved — a made-up shortcut
    { id: "B", text: "$70$" },
    { id: "C", text: "$133$" },
    // distractor: stops at (r+s)^3 = 343 without subtracting the cross term
    { id: "D", text: "$343$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Use $r^3 + s^3 = (r+s)^3 - 3rs(r+s)$. Substitute: $7^3 - 3(10)(7) = 343 - 210 = 133$.\n\n**The Full Solution:**\nStep 1: Expand the cube of a sum: $(r+s)^3 = r^3 + s^3 + 3rs(r+s)$.\nStep 2: Rearrange to isolate the cubes: $r^3 + s^3 = (r+s)^3 - 3rs(r+s)$.\nStep 3: Plug in $r + s = 7$ and $rs = 10$: $r^3 + s^3 = 343 - 3(10)(7) = 343 - 210 = 133$.\n\nVerification: the numbers with sum $7$ and product $10$ are $2$ and $5$. Then $2^3 + 5^3 = 8 + 125 = 133$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($29$): finds $r^2 + s^2 = (r+s)^2 - 2rs = 49 - 20 = 29$, the squared identity instead of the cubed one.\n* Choice B ($70$): computes $rs(r+s) = 70$, forgetting the cube entirely.\n* Choice D ($343$): stops at $(r+s)^3 = 343$ without subtracting the cross term.\n\n**Test Day Takeaway:** Memorize $r^3 + s^3 = (r+s)^3 - 3rs(r+s)$. Work with the sum and product directly — you rarely need the individual roots.",
  skills: ["polynomial-operations", "factoring", "sum-product"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A delivery van can carry a maximum load of $1{,}150$ kilograms. On one route the van carries a fixed $70$-kilogram pallet jack plus a number of boxes: some boxes have a mass of $18$ kilograms each and the rest have a mass of $45$ kilograms each. If $x$ is the number of $18$-kilogram boxes and $y$ is the number of $45$-kilogram boxes, which inequality represents the loads the van can carry on one route?",
  choices: [
    { id: "A", text: "$18x + 45y \\le 1{,}080$" },
    // distractor: keeps the load budget but flips the inequality direction
    { id: "B", text: "$18x + 45y \\ge 1{,}080$" },
    // distractor: swaps the box coefficients and skips subtracting the pallet jack
    { id: "C", text: "$45x + 18y \\le 1{,}150$" },
    // distractor: swaps coefficients, skips the pallet jack, and flips the direction
    { id: "D", text: "$45x + 18y \\ge 1{,}150$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Linear Inequality from Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Subtract the fixed $70$-kg pallet jack from the $1{,}150$-kg cap to get a box budget of $1{,}080$. Pair $18$ with $x$ and $45$ with $y$, capped with $\\le$: $18x + 45y \\le 1{,}080$.\n\n**The Full Solution:**\nStep 1: The $70$-kg pallet jack always rides along, so it uses up capacity first: box budget $= 1{,}150 - 70 = 1{,}080$ kg.\nStep 2: The $18$-kg boxes contribute $18x$ and the $45$-kg boxes contribute $45y$.\nStep 3: Their combined mass cannot exceed the budget, so $18x + 45y \\le 1{,}080$.\n\n**Why the wrong answers are tempting:**\n* Choice B: uses the correct budget but writes $\\ge$, which would describe loads that OVERFILL the van.\n* Choice C: attaches $45$ to $x$ and $18$ to $y$, and never subtracts the $70$-kg pallet jack.\n* Choice D: swaps the coefficients, skips the pallet-jack subtraction, AND flips the direction.\n\n**Test Day Takeaway:** Subtract every FIXED weight from the cap first, then match each coefficient to its own variable. A maximum capacity gives $\\le$.",
  skills: ["inequalities", "modeling", "word-problems"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A volunteer coordinator assigned each of $120$ volunteers to one shift — Morning, Afternoon, or Evening — and one role. The table summarizes the assignments. If one of the volunteers assigned the Guide role is selected at random, what is the probability that the volunteer works the Morning shift or the Evening shift?",
  diagram: {
    type: "twoWayTable",
    params: {
      headers: ["", "Greeter", "Guide", "Total"],
      rows: [
        ["Morning", "24", "16", "40"],
        ["Afternoon", "18", "22", "40"],
        ["Evening", "30", "10", "40"],
        ["Total", "72", "48", "120"]
      ]
    }
  },
  choices: [
    // distractor: uses 26/120 (grand total as denominator)
    { id: "A", text: "$\\dfrac{13}{60}$" },
    // distractor: uses the Afternoon count 22 instead of 16 + 10
    { id: "B", text: "$\\dfrac{11}{24}$" },
    { id: "C", text: "$\\dfrac{13}{24}$" },
    // distractor: conditions on the Greeter column instead (24 + 30 over 72)
    { id: "D", text: "$\\dfrac{3}{4}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** \"Given Guide\" restricts you to the Guide column (total $48$). Morning or Evening count: $16 + 10 = 26$. Probability $= \\dfrac{26}{48} = \\dfrac{13}{24}$.\n\n**The Full Solution:**\nStep 1: The condition \"assigned the Guide role\" restricts the sample space to the Guide column, which holds $48$ volunteers.\nStep 2: Favorable cases are Guide AND (Morning OR Evening): $16 + 10 = 26$.\nStep 3: Probability $= \\dfrac{26}{48} = \\dfrac{13}{24}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\tfrac{13}{60}$): divides by the grand total $120$, giving $\\dfrac{26}{120}$.\n* Choice B ($\\tfrac{11}{24}$): uses the Afternoon count $22$ in the numerator instead of $16 + 10$.\n* Choice D ($\\tfrac{3}{4}$): conditions on the Greeter column, computing $\\dfrac{24 + 30}{72}$.\n\n**Test Day Takeaway:** \"Given X\" means restrict to the X-row or X-column. The denominator is that subset's own total, not the grand total.",
  skills: ["probability", "two-way-tables"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The usable capacity of a drone battery decreases by $12\\%$ for each year the battery is in service. A new battery has a capacity index of $85$. Which function $h$ gives the capacity index after $y$ years of service?",
  choices: [
    // distractor: swaps the initial value and the decay factor
    { id: "A", text: "$h(y) = 0.88(85)^{y}$" },
    // distractor: uses 0.12 (the drop) as the base instead of 1 - 0.12
    { id: "B", text: "$h(y) = 85(0.12)^{y}$" },
    // distractor: uses 1 + 0.12 as the base (treats the drop as growth)
    { id: "C", text: "$h(y) = 85(1.12)^{y}$" },
    { id: "D", text: "$h(y) = 85(0.88)^{y}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Exponential Decay Model**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The starting index $85$ is the coefficient. A $12\\%$ drop per year leaves $100\\% - 12\\% = 88\\%$, so the base is $0.88$: $h(y) = 85(0.88)^{y}$.\n\n**The Full Solution:**\nStep 1: An exponential model is $h(y) = h_0 \\cdot b^{y}$, where $h_0$ is the start value and $b$ is the per-year multiplier.\nStep 2: The battery begins at $h_0 = 85$.\nStep 3: A $12\\%$ decrease multiplies by $1 - 0.12 = 0.88$, so $b = 0.88$, giving $h(y) = 85(0.88)^{y}$.\n\nCheck: $h(0) = 85$ $\\checkmark$; $h(1) = 85 \\cdot 0.88 = 74.8$, which is $12\\%$ below $85$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: swaps the roles — puts $85$ in the base and $0.88$ as the coefficient.\n* Choice B: uses the drop $0.12$ directly as the base instead of $1 - 0.12$.\n* Choice C: uses $1.12$, modeling $12\\%$ growth instead of a $12\\%$ drop.\n\n**Test Day Takeaway:** Initial value is the coefficient; a $p\\%$ decrease makes the base $1 - \\dfrac{p}{100}$, never $\\dfrac{p}{100}$.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The polynomial $f(x) = 3x^3 + ax^2 + bx - 10$ satisfies $f(2) = 0$ and $f(-1) = -18$. What is the value of $a + b$?",
  correctAnswer: "-3",
  explanation: "**SAT Pattern: Finding Polynomial Coefficients from Conditions**\n\n**The correct answer is $-3$.**\n\n**The Fast Way (~50s):** Each given value of $f$ becomes one linear equation in $a$ and $b$. Solve the $2 \\times 2$ system, then add: $a = -4$, $b = 1$, so $a + b = -3$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 2$ into $f(x) = 3x^3 + ax^2 + bx - 10$: $24 + 4a + 2b - 10 = 0$, so $4a + 2b = -14$, i.e. $2a + b = -7$. (Equation 1)\nStep 2: Substitute $x = -1$: $-3 + a - b - 10 = -18$, so $a - b = -5$. (Equation 2)\nStep 3: Add the two equations: $(2a + b) + (a - b) = -7 + (-5)$, so $3a = -12$ and $a = -4$.\nStep 4: From Equation 2, $b = a + 5 = 1$. Therefore $a + b = -4 + 1 = -3$.\n\nVerification: $f(x) = 3x^3 - 4x^2 + x - 10$. Then $f(2) = 24 - 16 + 2 - 10 = 0$ $\\checkmark$ and $f(-1) = -3 - 4 - 1 - 10 = -18$. $\\checkmark$\n\n**Common Mistakes:** Sign-slipping on $3(-1)^3 = -3$ (not $+3$); forgetting the constant $-10$ in either setup; reporting just $a = -4$ or $b = 1$ instead of their sum.\n\n**Test Day Takeaway:** A value $f(c) = k$ gives one linear equation in the unknown coefficients. Two values mean two equations — solve the system, then read exactly what the question asks for.",
  skills: ["polynomial-operations", "remainder-theorem", "systems-of-equations"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "At a farmers market, a jar of honey costs $\\$5$ more than a jar of jam. A customer buys $3$ jars of honey and $5$ jars of jam for a total of $\\$87$. What is the price, in dollars, of one jar of jam?",
  choices: [
    { id: "A", text: "$9$" },
    // distractor: divides 87 by 8 jars, ignoring the price gap
    { id: "B", text: "$10.88$" },
    // distractor: subtracts the honey premium then divides by the wrong count
    { id: "C", text: "$12$" },
    // distractor: solves for the honey price instead of the jam price
    { id: "D", text: "$14$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Systems of Linear Equations (Word Problem)**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Let $j$ be the jam price; the honey price is $j + 5$. Then $3(j+5) + 5j = 87$, so $8j + 15 = 87$, $8j = 72$, and $j = 9$.\n\n**The Full Solution:**\nStep 1: Let $j$ be the jam price and $h$ the honey price. The relationship is $h = j + 5$.\nStep 2: The purchase total is $3h + 5j = 87$.\nStep 3: Substitute $h = j + 5$: $3(j+5) + 5j = 87$, so $3j + 15 + 5j = 87$, giving $8j = 72$ and $j = 9$.\n\nVerification: honey $= 14$, and $3(14) + 5(9) = 42 + 45 = 87$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($10.88$): divides $87$ by $8$ jars, ignoring the $\\$5$ price gap.\n* Choice C ($12$): subtracts the $\\$15$ premium correctly but divides $72$ by $6$ instead of $8$.\n* Choice D ($14$): solves for the honey price instead of the jam price.\n\n**Test Day Takeaway:** Write the relationship equation first, substitute into the total, then re-read which price the question actually wants.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the figure, triangle $ADE$ has its right angle at $E$, and point $B$ lies on side $AD$ so that segment $BC$ meets base $AE$ at a right angle at point $C$. Triangle $ABC$ is similar to triangle $ADE$. If $AB = \\sqrt{73}$ units, $AC = 3$ units, and $CE = 12$ units, what is the area, in square units, of triangle $ADE$?",
  diagram: {
    type: "nestedRightTriangles",
    params: {
      labels: { A: "A", B: "B", C: "C", D: "D", E: "E" },
      sideLabels: { AB: "√73", AC: "3", CE: "12" }
    }
  },
  correctAnswer: "300",
  explanation: "**SAT Pattern: Similar Triangles and Area Ratio**\n\n**The correct answer is $300$.**\n\n**The Fast Way (~50s):** In the small triangle, $BC = \\sqrt{73 - 9} = 8$. The scale factor is $\\dfrac{AE}{AC} = \\dfrac{15}{3} = 5$, so $DE = 5 \\cdot 8 = 40$. Area $= \\tfrac{1}{2}(15)(40) = 300$.\n\n**The Full Solution:**\nStep 1: Find $BC$ in the small right triangle $ABC$ (right angle at $C$): $BC = \\sqrt{AB^2 - AC^2} = \\sqrt{(\\sqrt{73})^2 - 3^2} = \\sqrt{73 - 9} = \\sqrt{64} = 8$.\nStep 2: Find the base of the large triangle: $AE = AC + CE = 3 + 12 = 15$.\nStep 3: Since $\\triangle ABC \\sim \\triangle ADE$, the scale factor is $\\dfrac{AE}{AC} = \\dfrac{15}{3} = 5$, so the corresponding vertical leg scales the same: $DE = 5 \\cdot BC = 40$.\nStep 4: The legs $AE$ and $DE$ meet at the right angle $E$, so area $= \\tfrac{1}{2}(AE)(DE) = \\tfrac{1}{2}(15)(40) = 300$ square units.\n\nVerification: a scale factor of $5$ means the area ratio is $5^2 = 25$. The small-triangle area is $\\tfrac{1}{2}(3)(8) = 12$, so the large area is $25 \\cdot 12 = 300$. $\\checkmark$\n\n**Common Mistakes:** Using $CE = 12$ as the full base instead of $AE = 15$; scaling $BC$ by $\\dfrac{CE}{AC}$ instead of $\\dfrac{AE}{AC}$; reporting the small triangle's area of $12$.\n\n**Test Day Takeaway:** Find the missing leg with the Pythagorean theorem, take the scale factor as a ratio of corresponding sides, then scale the other leg before computing area.",
  skills: ["similar-triangles", "pythagorean", "geometry"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A bakery models its daily profit, in dollars, from batch pricing by $P(x) = -2x^2 + 56x + 90$, where $x$ is the price, in dollars, of one batch. What is the maximum daily profit, in dollars, that the model predicts?",
  choices: [
    // distractor: returns the x-value of the vertex (14) instead of the profit
    { id: "A", text: "$14$" },
    // distractor: uses the initial value P(0) = 90
    { id: "B", text: "$90$" },
    // distractor: drops the constant term 90 when evaluating the vertex output
    { id: "C", text: "$392$" },
    { id: "D", text: "$482$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** A downward parabola peaks at $x=-\\frac{b}{2a}=-\\frac{56}{2(-2)}=14$. Then $P(14)=-2(196)+56(14)+90=482$.\n\n**The Full Solution:**\nStep 1: The coefficient of $x^2$ is $-2<0$, so the parabola opens downward and its maximum is at the vertex.\nStep 2: Vertex input: $x=-\\frac{b}{2a}=-\\frac{56}{2(-2)}=-\\frac{56}{-4}=14$.\nStep 3: Evaluate: $P(14)=-2(14)^2+56(14)+90=-392+784+90=482$ dollars.\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): reports the vertex input $x=14$ instead of the profit it produces.\n* Choice B ($90$): gives $P(0)=90$, the value at a price of zero, not the maximum.\n* Choice C ($392$): computes $-2(196)+56(14)=392$ but drops the $+90$ constant.\n\n**Test Day Takeaway:** For $ax^2+bx+c$ with $a<0$, the maximum value is $P\\left(-\\frac{b}{2a}\\right)$ — find the input first, then substitute back to get the output.",
  skills: ["quadratic-equations", "vertex-form"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the graph of $y = x^2 - 8x + 10$ and the line $y = 2x - 15$ are drawn. At how many points do the two graphs intersect?",
  choices: [
    // distractor: assumes the line misses the parabola entirely
    { id: "A", text: "$0$" },
    { id: "B", text: "$1$" },
    // distractor: assumes a line always crosses a parabola twice when it isn't horizontal
    { id: "C", text: "$2$" },
    // distractor: confuses a parabola with a cubic and expects three crossings
    { id: "D", text: "$3$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Line-Parabola Intersection Count**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Set the graphs equal: $x^2-8x+10=2x-15 \\Rightarrow x^2-10x+25=0$. The discriminant is $100-100=0$, so the line is tangent — exactly $1$ intersection point.\n\n**The Full Solution:**\nStep 1: Intersections satisfy $x^2-8x+10=2x-15$. Rearrange to $x^2-10x+25=0$.\nStep 2: The number of intersection points equals the number of real roots, set by the discriminant $b^2-4ac=(-10)^2-4(1)(25)=100-100=0$.\nStep 3: A zero discriminant means one repeated root: $x^2-10x+25=(x-5)^2=0$, so $x=5$ is the only solution. The line touches the parabola at exactly $1$ point.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): assumes the line misses entirely, but the discriminant is zero, not negative.\n* Choice C ($2$): assumes any slanted line must cross twice; tangency gives exactly one touch.\n* Choice D ($3$): expects three crossings as if for a cubic; a line meets a parabola at most twice.\n\n**Test Day Takeaway:** To count line-parabola intersections, set them equal and read the discriminant sign: positive $\\Rightarrow 2$ points, zero $\\Rightarrow 1$ (tangent), negative $\\Rightarrow 0$.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The list shows the numbers of pages each of $7$ book-club members read in one week: $12, 35, 19, 8, 27, 15, 22$. What is the range of this data set?",
  choices: [
    // distractor: gives the minimum value instead of the range
    { id: "A", text: "$8$" },
    // distractor: computes the median (19) instead of the range
    { id: "B", text: "$19$" },
    { id: "C", text: "$27$" },
    // distractor: gives the maximum value instead of the range
    { id: "D", text: "$35$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Range $=$ max $-$ min $=35-8=27$.\n\n**The Full Solution:**\nStep 1: The range of a data set is the largest value minus the smallest value.\nStep 2: Scan $12, 35, 19, 8, 27, 15, 22$: the largest is $35$ and the smallest is $8$.\nStep 3: Range $=35-8=27$ pages. Only the two extremes matter; the middle values do not affect it.\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): reports the minimum instead of the difference.\n* Choice B ($19$): the median of the sorted list rather than the spread between extremes.\n* Choice D ($35$): reports the maximum without subtracting the minimum.\n\n**Test Day Takeaway:** Range is a single subtraction: biggest minus smallest. Scan for the two extremes — no sorting or averaging needed.",
  skills: ["statistics", "data-analysis"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For line $p$, two points are listed: $(6, 41)$ and $(10, 61)$. Line $q$ is the result of translating line $p$ down $26$ units in the $xy$-plane. What is the $x$-intercept of line $q$?",
  choices: [
    // distractor: drops the negative sign after solving 5x + 15 = 0
    { id: "A", text: "$(-3,\\,0)$" },
    // distractor: forgets the shift entirely (uses y-intercept 11)
    { id: "B", text: "$\\left(-\\dfrac{11}{5},\\,0\\right)$" },
    { id: "C", text: "$(3,\\,0)$" },
    // distractor: reports the shifted y-intercept magnitude as the x-intercept
    { id: "D", text: "$(15,\\,0)$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Vertical Translation of Functions**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Slope of $p$: $\\frac{61-41}{10-6}=5$. Its $y$-intercept: $41-5(6)=11$. Shift down $26$ gives $-15$. Solve $5x-15=0 \\Rightarrow x=3$.\n\n**The Full Solution:**\nStep 1: Slope $=\\frac{61-41}{10-6}=\\frac{20}{4}=5$.\nStep 2: Line $p$ is $y=5x+b$; using $(6,41)$: $41=30+b \\Rightarrow b=11$.\nStep 3: Translating down $26$ units subtracts $26$ from the $y$-intercept, so line $q$ is $y=5x-15$.\nStep 4: Set $y=0$: $5x-15=0 \\Rightarrow x=3$, so the $x$-intercept is $(3,0)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): a sign slip solving $5x-15=0$ as if it were $5x+15=0$.\n* Choice B ($-\\frac{11}{5}$): ignores the downward shift and uses the original $y$-intercept $11$.\n* Choice D ($15$): reports the shifted intercept's magnitude $15$ as the $x$-intercept.\n\n**Test Day Takeaway:** A vertical shift changes only the $y$-intercept (here by $-26$); the slope stays the same. Then solve $0=mx+b$ for the new $x$-intercept.",
  skills: ["linear-functions", "function-transformations"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The value of a collectible coin is modeled by $V(t) = 320(1.15)^{t}$, where $t$ is the number of years after the coin is appraised. By what percent does the model predict the coin's value grows each year?",
  choices: [
    // distractor: uses the digits of 1.15 directly as 0.15%
    { id: "A", text: "$0.15\\%$" },
    // distractor: misplaces the decimal — reads 0.15 as 1.5%
    { id: "B", text: "$1.5\\%$" },
    { id: "C", text: "$15\\%$" },
    // distractor: reads the whole base 1.15 as the percent
    { id: "D", text: "$115\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Each year multiplies the value by the base $1.15$, which is a $1.15-1=0.15=15\\%$ increase.\n\n**The Full Solution:**\nStep 1: In $V(t)=320(1.15)^{t}$, the base $1.15$ is the per-year growth factor.\nStep 2: A factor of $1.15$ means the value becomes $115\\%$ of the previous year's, an increase of $1.15-1=0.15$, or $15\\%$.\nCheck: $V(0)=320$ and $V(1)=320\\cdot1.15=368$, which is $48$ more, and $\\frac{48}{320}=15\\%$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.15\\%$): reads the decimal $0.15$ as if it were already a percent.\n* Choice B ($1.5\\%$): a decimal-place slip converting $0.15$ to a percent.\n* Choice D ($115\\%$): reports the whole factor instead of the increase $1.15-1$.\n\n**Test Day Takeaway:** A base $b$ in $a\\cdot b^{t}$ gives a per-period percent change of $(b-1)\\times100\\%$ — subtract $1$ before converting to a percent.",
  skills: ["exponential-functions", "percents"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation of a circle in the $xy$-plane is $x^2 + y^2 - 12x + 6y + 20 = 0$. What is the radius of the circle?",
  choices: [
    // distractor: treats the constant 20 as r^2
    { id: "A", text: "$\\sqrt{20}$" },
    { id: "B", text: "$5$" },
    // distractor: adds 36 + 9 = 45 without subtracting the constant 20
    { id: "C", text: "$\\sqrt{45}$" },
    // distractor: reports r^2 = 25 instead of r = 5
    { id: "D", text: "$25$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Complete the square: $(x-6)^2+(y+3)^2=36+9-20=25$. Radius $=\\sqrt{25}=5$.\n\n**The Full Solution:**\nStep 1: Group terms: $(x^2-12x)+(y^2+6y)=-20$.\nStep 2: Complete each square. Half of $-12$ is $-6$, $(-6)^2=36$; half of $6$ is $3$, $3^2=9$.\nStep 3: $(x^2-12x+36)+(y^2+6y+9)=-20+36+9$, so $(x-6)^2+(y+3)^2=25$.\nStep 4: The right side is $r^2=25$, so radius $=\\sqrt{25}=5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\sqrt{20}$): treats the original constant $20$ as $r^2$.\n* Choice C ($\\sqrt{45}$): adds $36+9$ but never subtracts the constant $20$.\n* Choice D ($25$): reports $r^2=25$ instead of $r=5$.\n\n**Test Day Takeaway:** Complete the square for BOTH variables, move constants to the right, and remember the radius is $\\sqrt{r^2}$, not $r^2$.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "An optics lab grinds two circular mirrors: a small test mirror of radius $5t$ and a large telescope mirror of radius $85t$, where $t$ is a positive constant. The area of the large mirror is how many times the area of the small mirror?",
  choices: [
    // distractor: gives the linear radius ratio without squaring
    { id: "A", text: "$17$" },
    // distractor: doubles the linear ratio instead of squaring
    { id: "B", text: "$34$" },
    // distractor: uses the larger radius coefficient 85 directly
    { id: "C", text: "$85$" },
    { id: "D", text: "$289$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Similar Figures — Area Ratio**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Area scales as the square of the radius ratio. $\\frac{85t}{5t}=17$, and $17^2=289$.\n\n**The Full Solution:**\nStep 1: A circle's area is $\\pi r^2$, so the ratio of two circle areas is $\\left(\\frac{r_2}{r_1}\\right)^2$.\nStep 2: Linear ratio: $\\frac{85t}{5t}=17$ (the $t$ cancels).\nStep 3: Area ratio: $17^2=289$. The large mirror's area is $289$ times the small mirror's area.\n\n**Why the wrong answers are tempting:**\n* Choice A ($17$): gives the linear radius ratio instead of squaring it.\n* Choice B ($34$): doubles the linear ratio ($2\\cdot17$) instead of squaring.\n* Choice C ($85$): copies the larger radius coefficient.\n\n**Test Day Takeaway:** When a linear dimension is scaled by a factor, area scales by the SQUARE of that factor. Reach for $(\\text{ratio})^2$, not the ratio itself.",
  skills: ["circle-area", "geometry", "ratios"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A shipping depot sorted $25$ packages into the mass intervals shown in the frequency table, where the interval $[2, 4)$ means at least $2$ but less than $4$ kilograms. Based on the table, what is the smallest possible value of the mean mass, in kilograms, of the $25$ packages?",
  diagram: {
    type: "dataTable",
    params: {
      headers: ["Mass (kg)", "Number of packages"],
      rows: [
        ["[2, 4)", "8"],
        ["[4, 6)", "10"],
        ["[6, 8)", "7"]
      ]
    }
  },
  choices: [
    // distractor: reports the smallest possible single mass, not the smallest mean
    { id: "A", text: "$2$" },
    { id: "B", text: "$3.92$" },
    // distractor: uses interval midpoints — the "typical" estimate, not the minimum
    { id: "C", text: "$4.92$" },
    // distractor: uses the right endpoints, which gives the (unattainable) upper bound
    { id: "D", text: "$5.92$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Grouped Data — Mean Bounds**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The mean is smallest when every package sits at its interval's LEFT endpoint: $\\frac{8(2)+10(4)+7(6)}{25}=\\frac{16+40+42}{25}=\\frac{98}{25}=3.92$.\n\n**The Full Solution:**\nStep 1: A frequency table fixes only how many packages fall in each interval, not their exact masses — so the mean has a range of possible values.\nStep 2: To minimize the mean, place every package at the smallest allowed mass in its interval. Each interval $[a, b)$ includes $a$, so this is attainable: $8$ packages at $2$, $10$ at $4$, $7$ at $6$.\nStep 3: Minimum mean $=\\frac{8(2)+10(4)+7(6)}{25}=\\frac{98}{25}=3.92$ kilograms.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reports the smallest possible SINGLE mass, not the smallest possible mean of all $25$.\n* Choice C ($4.92$): uses interval midpoints — the standard estimate of the mean, not its minimum.\n* Choice D ($5.92$): uses right endpoints, which the half-open intervals never even reach.\n\n**Test Day Takeaway:** Grouped frequencies pin the mean between the all-left-endpoints total and the all-right-endpoints total. For a minimum, load every value at the left edge — and check the interval actually includes it.",
  skills: ["statistics", "data-analysis"]
}
      ]
    }
  ]
};

export default practiceTest1;
