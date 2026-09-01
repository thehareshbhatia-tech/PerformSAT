// Practice Test 3 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Official-calibration recreation (2026-08-31): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md).
// Slot metadata (id/type/difficulty/band/skills/pattern) frozen from the
// 2026-06 blueprint: M1 5E/9M/8H. M2 keeps this test's wavy hard-track shape
// 3E/7M/12H (easy at Q1, Q3, Q19 breather; hard closers Q21-22; Q1-5 warm-ups
// are 2+ steps or carry a trap). Figure density at official ~20%: M1 carries
// 5 diagram items, M2 carries 4. Numeric MC choices sorted ascending.

export const practiceTest3 = {
  id: "practice-test-3",
  title: "Practice Test 3",
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
  question: "The function $f(t) = 350 + 25t$ gives the total number of tiles a ceramics workshop's kiln has fired $t$ hours after the morning shift begins. What is the best interpretation of $25$ in this context?",
  choices: [
    // distractor: confuses 25 with the initial value (which is 350)
    { id: "A", text: "The number of tiles the kiln had fired when the shift began" },
    // distractor: treats 25 as an input value rather than a rate of change
    { id: "B", text: "The total number of tiles fired $25$ hours after the shift begins" },
    // distractor: inverts the rate (would be 1/25 hour per tile)
    { id: "C", text: "The number of hours needed to fire one tile" },
    { id: "D", text: "The number of tiles the kiln fires each hour" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** In $f(t) = 350 + 25t$, the coefficient of $t$ is the rate of change: the kiln fires $25$ tiles every hour.\n\n**The Full Solution:**\nStep 1: The model is linear, $f(t) = b + mt$, with intercept $b = 350$ and slope $m = 25$.\nStep 2: The intercept $350$ is the count already fired at $t = 0$; the slope $25$ is how much the total changes per added hour.\nStep 3: So $25$ means the kiln fires $25$ tiles each hour, which is choice D.\n\n**Why the wrong answers are tempting:**\n* Choice A: that describes the intercept $350$, not the slope $25$.\n* Choice B: treats $25$ as an input ($t = 25$ hours) instead of the per-hour rate.\n* Choice C: inverts the rate — at $25$ tiles per hour, one tile takes $\\frac{1}{25}$ hour.\n\n**Test Day Takeaway:** In $y = b + mx$, the coefficient of the variable is always the rate of change per one unit of that variable.",
  skills: ["function-interpretation", "linear-functions", "slope"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A metallurgy lab prepares a brass sample containing copper and zinc in a ratio of $13$ to $7$ by mass. If the total mass of the sample is $140$ grams, how many grams of copper does the sample contain?",
  choices: [
    // distractor: reports the copper ratio number (13) directly
    { id: "A", text: "$13$" },
    // distractor: solves for the zinc mass instead of the copper (7/20 of 140)
    { id: "B", text: "$49$" },
    { id: "C", text: "$91$" },
    // distractor: subtracts the ratio number from the total (140 - 13)
    { id: "D", text: "$127$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Copper is $13$ parts out of $13 + 7 = 20$ total parts, so copper $= \\frac{13}{20} \\cdot 140 = 91$ grams.\n\n**The Full Solution:**\nStep 1: Write the parts as $13k$ (copper) and $7k$ (zinc), so the ratio stays $13 : 7$.\nStep 2: The total is $13k + 7k = 20k = 140$, so $k = 7$.\nStep 3: Copper $= 13k = 13 \\cdot 7 = 91$ grams. Check: zinc $= 7 \\cdot 7 = 49$, and $91 + 49 = 140$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($13$): reports the ratio number instead of solving for the mass.\n* Choice B ($49$): solves for the zinc mass ($\\frac{7}{20} \\cdot 140$) instead of the copper.\n* Choice D ($127$): subtracts the ratio number $13$ from the total, mixing parts with grams.\n\n**Test Day Takeaway:** When a total is split by a ratio, each part's fraction has the SUM of the ratio numbers as its denominator, not a single part.",
  skills: ["ratios", "word-problems"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Crews have planted $1{,}248$ of the new street trees called for in a city's forestry plan. This is $32\\%$ of the total number of trees the plan calls for. What is that total?",
  choices: [
    // distractor: applies the percent forward — 1,248 x 0.32 = 399.36
    { id: "A", text: "$399$" },
    // distractor: divides by the complement 0.68, treating 1,248 as the unplanted share
    { id: "B", text: "$1{,}835$" },
    { id: "C", text: "$3{,}900$" },
    // distractor: divides by 0.032 instead of 0.32 (decimal-place slip)
    { id: "D", text: "$39{,}000$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $0.32 \\times \\text{total} = 1{,}248$, so total $= \\frac{1{,}248}{0.32} = 3{,}900$.\n\n**The Full Solution:**\nStep 1: Let $T$ be the total number of trees. The planted trees are $32\\%$ of it: $0.32 \\cdot T = 1{,}248$.\nStep 2: Divide both sides by $0.32$: $T = \\frac{1{,}248}{0.32} = 3{,}900$.\nStep 3: Check: $0.32 \\cdot 3{,}900 = 1{,}248$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($399$): multiplies $1{,}248 \\cdot 0.32$ instead of dividing — the inverse operation.\n* Choice B ($1{,}835$): divides by the complement $0.68$, treating $1{,}248$ as the NOT-yet-planted share.\n* Choice D ($39{,}000$): divides by $0.032$ instead of $0.32$ — a decimal slip.\n\n**Test Day Takeaway:** When a known part is a given percent of an unknown whole, divide the part by the percent written as a decimal.",
  skills: ["percents", "word-problems"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A trail-shuttle service charges an $\\$18$ permit fee per trip plus $\\$9$ per passenger. The total charge for a trip carrying $p$ passengers is $\\$99$. What is the total charge, in dollars, for a trip carrying $p + 3$ passengers (with one permit fee)?",
  choices: [
    // distractor: adds the count 3 as dollars instead of 3 x $9 = $27
    { id: "A", text: "$\\$102$" },
    // distractor: adds only 2 x $9 = $18 — an off-by-one count slip
    { id: "B", text: "$\\$117$" },
    { id: "C", text: "$\\$126$" },
    // distractor: uses the $18 permit fee as the per-passenger price for the extra riders
    { id: "D", text: "$\\$153$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Three more passengers at $\\$9$ each add $\\$27$; the permit fee does not change, so the new total is $\\$99 + \\$27 = \\$126$.\n\n**The Full Solution:**\nStep 1: The charge is $9p + 18$. The fixed $\\$18$ permit fee is paid once and stays put.\nStep 2: Adding $3$ passengers adds $3 \\cdot \\$9 = \\$27$ to the variable part.\nStep 3: New total $= \\$99 + \\$27 = \\$126$. (If you solve first: $9p + 18 = 99 \\Rightarrow p = 9$, and $9(12) + 18 = \\$126$.) $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$102$): adds the count $3$ as dollars instead of $3 \\cdot \\$9 = \\$27$.\n* Choice B ($\\$117$): adds $2 \\cdot \\$9 = \\$18$ instead of $3 \\cdot \\$9$ — an off-by-one count slip.\n* Choice D ($\\$153$): uses the $\\$18$ permit fee as the per-passenger price: $\\$99 + 3 \\cdot \\$18$.\n\n**Test Day Takeaway:** Linear cost $=$ (rate $\\times$ quantity) $+$ fixed fee. Adding riders moves only the rate-times-quantity piece; the fixed fee stays put.",
  skills: ["word-problems", "linear-functions"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $\\dfrac{5x}{18} = \\dfrac{20}{9}$, what is the value of $x - 3$?",
  choices: [
    { id: "A", text: "$5$" },
    // distractor: solves for x = 8 correctly but forgets to subtract 3
    { id: "B", text: "$8$" },
    // distractor: adds 3 to x instead of subtracting
    { id: "C", text: "$11$" },
    // distractor: stops at 5x = 40 instead of dividing to get x
    { id: "D", text: "$40$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Cross-multiply: $5x \\cdot 9 = 18 \\cdot 20$, so $45x = 360$ and $x = 8$. The question wants $x - 3 = 5$.\n\n**The Full Solution:**\nStep 1: From $\\frac{5x}{18} = \\frac{20}{9}$, cross-multiply: $9 \\cdot 5x = 18 \\cdot 20 \\Rightarrow 45x = 360$.\nStep 2: Divide: $x = 8$.\nStep 3: The last sentence asks for $x - 3$, not $x$: $8 - 3 = 5$. Check: $\\frac{5(8)}{18} = \\frac{40}{18} = \\frac{20}{9}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): solves for $x$ correctly but forgets to subtract $3$.\n* Choice C ($11$): adds $3$ to $x$ instead of subtracting.\n* Choice D ($40$): stops at $5x = 40$ instead of dividing to get $x$.\n\n**Test Day Takeaway:** Re-read the final sentence before bubbling — the SAT often asks for a shifted quantity like $x - 3$, not the variable itself.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The function $N(m) = 8{,}200(1.04)^m$ models the number of subscribers to a science podcast $m$ months after its launch. What is the best interpretation of $1.04$ in this context?",
  choices: [
    { id: "A", text: "The number of subscribers increases by $4\\%$ each month" },
    // distractor: confuses the growth factor with a fixed monthly count
    { id: "B", text: "The number of subscribers increases by $1.04$ each month" },
    // distractor: reads 1.04 as 104% growth instead of 4% growth
    { id: "C", text: "The number of subscribers increases by $104\\%$ each month" },
    // distractor: misreads the growth factor as a doubling time
    { id: "D", text: "The number of subscribers doubles every $1.04$ months" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The base $1.04 = 1 + 0.04$ means a $4\\%$ increase each month.\n\n**The Full Solution:**\nStep 1: The model fits $N(m) = N_0(1 + r)^m$, where the base $1 + r$ is the monthly growth factor.\nStep 2: Here $1 + r = 1.04$, so $r = 0.04 = 4\\%$.\nStep 3: Each month the count is multiplied by $1.04$ — a $4\\%$ increase — which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B: confuses the multiplicative factor with a flat count of $1.04$ new subscribers.\n* Choice C: reads $1.04$ as $104\\%$ growth; the $1$ keeps the original, only the $0.04$ is growth.\n* Choice D: invents a doubling time — the base tells you the per-month factor, not when the count doubles.\n\n**Test Day Takeaway:** In $P(1 + r)^t$, the growth rate is the base minus $1$, written as a percent.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A solid right circular storage drum has a diameter of $10$ inches and a height of $12$ inches. The volume of the drum, in cubic inches, can be expressed as $k\\pi$. What is the value of $k$?",
  correctAnswer: "300",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $300$.**\n\n**The Fast Way (~15s):** Radius $= \\frac{10}{2} = 5$. Then $V = \\pi r^2 h = \\pi (5)^2 (12) = 300\\pi$, so $k = 300$.\n\n**The Full Solution:**\nStep 1: The volume of a right circular cylinder is $V = \\pi r^2 h$, and the formula needs the RADIUS. The diameter is $10$, so $r = 5$.\nStep 2: Substitute: $V = \\pi (5)^2 (12) = \\pi (25)(12) = 300\\pi$ cubic inches.\nStep 3: The volume is written as $k\\pi$, so $k = 300$.\n\n**Common Mistakes:** Using the diameter as the radius gives $\\pi (10)^2 (12) = 1{,}200\\pi$, four times too big; forgetting to square the radius gives $\\pi (5)(12) = 60\\pi$.\n\n**Test Day Takeaway:** Halve the diameter before touching $V = \\pi r^2 h$ — the formula is on the Reference Sheet, but it only works with the radius.",
  skills: ["volume", "geometry"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, line $t$ is parallel to the line with equation $7x - 3y = 21$. What is the slope of line $t$? Express your answer as a fraction.",
  correctAnswer: "7/3",
  explanation: "**SAT Pattern: Parallel Lines and Standard Form**\n\n**The correct answer is $\\frac{7}{3}$.**\n\n**The Fast Way (~15s):** Solve $7x - 3y = 21$ for $y$: $y = \\frac{7}{3}x - 7$. Parallel lines share this slope, so line $t$ has slope $\\frac{7}{3}$.\n\n**The Full Solution:**\nStep 1: Convert to slope-intercept form: $-3y = -7x + 21 \\Rightarrow y = \\frac{7}{3}x - 7$.\nStep 2: The slope of the given line is $\\frac{7}{3}$.\nStep 3: Parallel lines have equal slopes, so line $t$ also has slope $\\frac{7}{3}$.\n\n**Common Mistakes:** Dropping the sign flip when dividing by $-3$ and writing $-\\frac{7}{3}$; using the negative reciprocal $-\\frac{3}{7}$, which is the slope of a PERPENDICULAR line; reading the slope as $\\frac{a}{b} = \\frac{7}{-3}$ without negating (the standard-form slope is $-\\frac{a}{b}$).\n\n**Test Day Takeaway:** Parallel lines have the same slope. Rewrite standard form as $y = mx + b$ and read off $m$ — for $ax + by = c$, that slope is $-\\frac{a}{b}$.",
  skills: ["slope", "linear-functions"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The system of equations below has the solution $(x, y)$.\n\n$4x + 3y = 2$\n$-4x + 5y = 46$\n\nWhat is the value of $x$?",
  choices: [
    // distractor: stops one step early at 4x = -16 without dividing
    { id: "A", text: "$-16$" },
    { id: "B", text: "$-4$" },
    // distractor: sign slip when isolating x (solves 4x = 16)
    { id: "C", text: "$4$" },
    // distractor: reports the value of y instead of x
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Add the equations to cancel $x$: $8y = 48$, so $y = 6$. Then $4x + 3(6) = 2 \\Rightarrow 4x = -16 \\Rightarrow x = -4$.\n\n**The Full Solution:**\nStep 1: The $x$-terms are $+4x$ and $-4x$ (opposites), so add the equations: $(4x + 3y) + (-4x + 5y) = 2 + 46 \\Rightarrow 8y = 48 \\Rightarrow y = 6$.\nStep 2: Substitute into $4x + 3y = 2$: $4x + 18 = 2 \\Rightarrow 4x = -16 \\Rightarrow x = -4$, which is choice B.\nStep 3: Check the second equation: $-4(-4) + 5(6) = 16 + 30 = 46$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-16$): stops at $4x = -16$ without dividing by $4$.\n* Choice C ($4$): drops the negative sign while isolating $x$.\n* Choice D ($6$): reports $y$, the value found first, instead of $x$.\n\n**Test Day Takeaway:** When one variable's coefficients are opposites, add the equations to eliminate it — then re-read which variable the question actually wants.",
  skills: ["systems-of-equations", "solving-equations"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $4(3x + 2) - 5(x - 1) = 55$, what is the value of $x$?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~15s):** Distribute: $12x + 8 - 5x + 5 = 55 \\Rightarrow 7x + 13 = 55 \\Rightarrow 7x = 42 \\Rightarrow x = 6$.\n\n**The Full Solution:**\nStep 1: Distribute each coefficient: $4(3x + 2) = 12x + 8$ and $-5(x - 1) = -5x + 5$. Note the double negative: $-5 \\cdot (-1) = +5$.\nStep 2: Combine like terms: $12x - 5x = 7x$ and $8 + 5 = 13$, giving $7x + 13 = 55$.\nStep 3: Isolate $x$: $7x = 42 \\Rightarrow x = 6$. Check: $4(20) - 5(5) = 80 - 25 = 55$. $\\checkmark$\n\n**Common Mistakes:** Writing $-5(x - 1)$ as $-5x - 5$ (missing the sign flip on the second term), which leads to $7x + 3 = 55$ and a non-integer answer; distributing $4$ to only the first term inside its parentheses.\n\n**Test Day Takeaway:** A negative coefficient distributes to EVERY term in its parentheses — the signs inside all flip.",
  skills: ["solving-equations"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The dot plot shows the number of service aces recorded by each of the $15$ players on a volleyball team this season. What is the median number of service aces for the $15$ players?",
  diagram: { type: "dotPlot", params: {
    data: [
      { value: 0, count: 2 },
      { value: 1, count: 5 },
      { value: 2, count: 3 },
      { value: 3, count: 2 },
      { value: 4, count: 1 },
      { value: 5, count: 2 }
    ],
    xMin: 0, xMax: 6,
    xLabel: "Number of service aces"
  } },
  choices: [
    // distractor: reports the mode (the value with the tallest stack)
    { id: "A", text: "$1$" },
    { id: "B", text: "$2$" },
    // distractor: reports the midrange of the least and greatest values (0 and 5)
    { id: "C", text: "$2.5$" },
    // distractor: reports the count of dots in the tallest stack (frequency, not value)
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Median Calculation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** With $15$ values, the median is the $8$th when ordered. Count dots left to right: $2$ dots at $0$, then $5$ at $1$ (running total $7$), then $3$ at $2$ (running total $10$). The $8$th value lands in the stack at $2$.\n\n**The Full Solution:**\nStep 1: For an odd count $n = 15$, the median is the $\\frac{15 + 1}{2} = 8$th ordered value.\nStep 2: Accumulate the dot counts: values of $0$ cover positions $1$-$2$; values of $1$ cover positions $3$-$7$; values of $2$ cover positions $8$-$10$.\nStep 3: Position $8$ falls on the value $2$, so the median is $2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): reports the mode — the tallest stack sits at $1$, but the middle VALUE is $2$.\n* Choice C ($2.5$): averages the least and greatest values ($0$ and $5$) — that is the midrange, not the median.\n* Choice D ($5$): counts the dots in the tallest stack, confusing a frequency with a data value.\n\n**Test Day Takeaway:** On a dot plot, find the median by cumulative counting to position $\\frac{n+1}{2}$ — never by eyeballing the tallest stack.",
  skills: ["statistics"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A line in the $xy$-plane passes through the points $(2, 5)$ and $(6, -7)$ and can be written in the form $y = mx + b$. What is the value of $b$?",
  choices: [
    // distractor: uses the second point's y-value as the intercept
    { id: "A", text: "$-7$" },
    // distractor: reports the slope instead of the intercept
    { id: "B", text: "$-3$" },
    // distractor: uses the first point's y-value as the intercept
    { id: "C", text: "$5$" },
    { id: "D", text: "$11$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Slope $= \\frac{-7 - 5}{6 - 2} = \\frac{-12}{4} = -3$. Plug $(2, 5)$ in: $5 = -3(2) + b = -6 + b$, so $b = 11$.\n\n**The Full Solution:**\nStep 1: Find the slope: $m = \\frac{-7 - 5}{6 - 2} = \\frac{-12}{4} = -3$.\nStep 2: Use $y = mx + b$ with the point $(2, 5)$: $5 = -3(2) + b \\Rightarrow 5 = -6 + b \\Rightarrow b = 11$, which is choice D.\nStep 3: Check with $(6, -7)$: $-3(6) + 11 = -18 + 11 = -7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): uses the second point's $y$-value as the intercept.\n* Choice B ($-3$): reports the slope $m$ instead of the intercept $b$.\n* Choice C ($5$): uses the first point's $y$-value as the intercept — that only works when the point's $x$-coordinate is $0$.\n\n**Test Day Takeaway:** Find the slope first, then substitute either point into $y = mx + b$ and solve for $b$. A point's $y$-value is the intercept only if its $x$-value is $0$.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  question: "The scatterplot shows the number of defective castings $y$ produced during a shift at each of $8$ line speeds $x$, in castings per minute, at a foundry. A line of best fit is also shown. Based on the line of best fit, which of the following is closest to the predicted number of defective castings for a shift run at a line speed of $10$ castings per minute?",
  diagram: { type: "scatterplot", params: {
    points: [[3, 33], [4, 29], [5, 30], [6, 25], [7, 23], [8, 24], [9, 19], [11, 17]],
    xMin: 0, xMax: 12, yMin: 0, yMax: 40,
    xGridStep: 1, xLabelStep: 2, yGridStep: 4, yLabelStep: 8,
    bestFitLine: { slope: -2, intercept: 38 },
    xLabel: "Line speed (castings per minute)", yLabel: "Defective castings"
  } },
  choices: [
    // distractor: reads the line one grid step too far, at x = 12
    { id: "A", text: "$14$" },
    { id: "B", text: "$18$" },
    // distractor: reads the line at x = 8 — misreads the axis scale by one labeled step
    { id: "C", text: "$22$" },
    // distractor: reads the line at x = 5, halving the requested speed
    { id: "D", text: "$28$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The line of best fit drops $2$ defective castings for each $1$-unit rise in speed and crosses the $y$-axis near $38$. At $x = 10$: $38 - 2(10) = 18$.\n\n**The Full Solution:**\nStep 1: Read two lattice points off the line of best fit — it passes near $(0, 38)$ and $(10, 18)$ — giving slope $\\frac{18 - 38}{10 - 0} = -2$.\nStep 2: The line is approximately $y = 38 - 2x$.\nStep 3: Predict at $x = 10$: $y = 38 - 20 = 18$. This matches choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): reads the line at $x = 12$, one labeled grid step past the requested speed.\n* Choice C ($22$): reads the line at $x = 8$, one labeled step short.\n* Choice D ($28$): reads the line at $x = 5$, halving the requested speed.\n\n**Test Day Takeaway:** Predictions come from the LINE, not the nearest dot. Anchor the line with two lattice points, build $y = mx + b$, then substitute the requested $x$.",
  skills: ["scatterplots", "slope", "function-interpretation"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table summarizes the responses of $240$ residents of two neighborhoods to a survey about a proposed protected bike lane. What percentage of the Hillcrest residents surveyed support the bike lane?",
  diagram: {
    type: "twoWayTable",
    params: {
      headers: ["", "Supports", "Opposes", "Total"],
      rows: [
        ["Riverside", "30", "60", "90"],
        ["Hillcrest", "90", "60", "150"],
        ["Total", "120", "120", "240"]
      ]
    }
  },
  choices: [
    // distractor: divides Hillcrest supporters by the grand total 240 (wrong base)
    { id: "A", text: "$37.5\\%$" },
    // distractor: gives the percentage of Hillcrest residents who OPPOSE (the complement)
    { id: "B", text: "$40\\%$" },
    { id: "C", text: "$60\\%$" },
    // distractor: divides by the total number of supporters (120) instead of the row total
    { id: "D", text: "$75\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Two-Way Table Conditional Percentage**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** \"Of the Hillcrest residents\" sets the denominator to that row's total, $150$. Supporters in that row: $90$. So $\\frac{90}{150} = 0.60 = 60\\%$.\n\n**The Full Solution:**\nStep 1: Restrict to Hillcrest residents — that row totals $150$.\nStep 2: Among them, $90$ support the bike lane. Divide: $\\frac{90}{150} = 0.60 = 60\\%$. This matches choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($37.5\\%$): divides by the grand total: $\\frac{90}{240} = 37.5\\%$ — the wrong base.\n* Choice B ($40\\%$): computes the Hillcrest residents who OPPOSE: $\\frac{60}{150} = 40\\%$ — the complement.\n* Choice D ($75\\%$): divides by all supporters: $\\frac{90}{120} = 75\\%$ — that answers \"what fraction of supporters are from Hillcrest.\"\n\n**Test Day Takeaway:** \"Of group X\" fixes the denominator to group X's total — here the Hillcrest row ($150$), never the grand total.",
  skills: ["two-way-tables", "probability", "percents"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $\\left(x^{2}\\sqrt[3]{x^{2}}\\right)^{3} = x^{k}$ for $x > 0$, what is the value of $k$?",
  correctAnswer: "8",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~15s):** Inside: $x^{2} \\cdot x^{\\frac{2}{3}} = x^{2 + \\frac{2}{3}} = x^{\\frac{8}{3}}$. Cube it: $\\left(x^{\\frac{8}{3}}\\right)^{3} = x^{8}$, so $k = 8$.\n\n**The Full Solution:**\nStep 1: Rewrite the cube root as a power: $\\sqrt[3]{x^{2}} = x^{\\frac{2}{3}}$.\nStep 2: Multiply by adding exponents: $x^{2} \\cdot x^{\\frac{2}{3}} = x^{\\frac{6}{3} + \\frac{2}{3}} = x^{\\frac{8}{3}}$.\nStep 3: Apply the outer exponent by multiplying: $\\left(x^{\\frac{8}{3}}\\right)^{3} = x^{\\frac{8}{3} \\cdot 3} = x^{8}$. So $k = 8$.\n\n**Common Mistakes:** Writing $\\sqrt[3]{x^{2}}$ as $x^{\\frac{3}{2}}$ (flipping the fraction); multiplying exponents when combining the product (giving $x^{\\frac{4}{3}}$) instead of adding; adding when raising a power to a power instead of multiplying.\n\n**Test Day Takeaway:** Convert every radical to a fractional exponent first — then multiply means ADD exponents, and a power of a power means MULTIPLY them.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $8^{x+2} = 16^{x-1}$, what is the value of $x$?",
  correctAnswer: "10",
  explanation: "**SAT Pattern: Exponential Equations with Common Base**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~20s):** $8 = 2^3$ and $16 = 2^4$, so $2^{3(x+2)} = 2^{4(x-1)}$. Match exponents: $3x + 6 = 4x - 4 \\Rightarrow x = 10$.\n\n**The Full Solution:**\nStep 1: Rewrite both sides over base $2$: $8^{x+2} = 2^{3(x+2)} = 2^{3x+6}$ and $16^{x-1} = 2^{4(x-1)} = 2^{4x-4}$.\nStep 2: Equal bases force equal exponents: $3x + 6 = 4x - 4$.\nStep 3: Solve: $6 + 4 = 4x - 3x \\Rightarrow x = 10$.\nCheck: left exponent $3(12) = 36$; right exponent $4(9) = 36$. Both sides equal $2^{36}$. $\\checkmark$\n\n**Common Mistakes:** Writing $16 = 2^3$ or $8 = 2^4$ (swapping the powers of $2$); mis-distributing $4(x - 1)$ as $4x - 1$ instead of $4x - 4$.\n\n**Test Day Takeaway:** When both sides can be written over one base, drop the bases and set the exponents equal.",
  skills: ["exponent-rules", "solving-equations"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Triangle $JKL$ shown is a right triangle with its right angle at $K$. What is the area, in square units, of triangle $JKL$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["J", "K", "L"],
      sideLabels: ["6", "4√5", ""],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: computes (1/2)(6)(4) and drops the radical
    { id: "A", text: "$12$" },
    // distractor: multiplies the legs 6 x 4 but loses both the 1/2 and the radical
    { id: "B", text: "$24$" },
    { id: "C", text: "$12\\sqrt{5}$" },
    // distractor: forgets the factor of 1/2, leaving 6 x 4√5
    { id: "D", text: "$24\\sqrt{5}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Right Triangle Area with Surds**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The right angle at $K$ makes $JK = 6$ and $KL = 4\\sqrt{5}$ the legs. Area $= \\frac{1}{2}(6)(4\\sqrt{5}) = 12\\sqrt{5}$.\n\n**The Full Solution:**\nStep 1: In a right triangle the two legs serve as base and height, so area $= \\frac{1}{2} \\times \\text{leg} \\times \\text{leg}$.\nStep 2: The right angle sits at $K$, so the legs are the sides meeting there: $JK = 6$ and $KL = 4\\sqrt{5}$.\nStep 3: Area $= \\frac{1}{2}(6)(4\\sqrt{5}) = \\frac{1}{2}(24\\sqrt{5}) = 12\\sqrt{5}$ square units. This matches choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): computes $\\frac{1}{2}(6)(4)$ and drops the $\\sqrt{5}$ entirely.\n* Choice B ($24$): multiplies $6 \\cdot 4$ but loses both the $\\frac{1}{2}$ and the radical.\n* Choice D ($24\\sqrt{5}$): forgets the factor of $\\frac{1}{2}$, leaving $6 \\cdot 4\\sqrt{5}$.\n\n**Test Day Takeaway:** The two legs of a right triangle are its base and height. Keep the $\\frac{1}{2}$ and carry the radical through untouched — $\\sqrt{5}$ never simplifies away.",
  skills: ["triangles", "area", "radical-expressions"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The side lengths of the right triangle shown are given in inches. What is the perimeter, in inches, of the triangle?",
  diagram: {
    type: "rightTriangle",
    params: {
      sideLabels: ["a", "a + 14", "34"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: stops one step early — sums only the two legs (16 + 30)
    { id: "A", text: "$46$" },
    // distractor: skips the longer leg (16 + 34)
    { id: "B", text: "$50$" },
    { id: "C", text: "$80$" },
    // distractor: double-counts the hypotenuse (16 + 30 + 34 + 34)
    { id: "D", text: "$114$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Hypotenuse $34 = 2 \\cdot 17$ signals the doubled $8$-$15$-$17$ triple: legs $16$ and $30$. Check the gap: $30 - 16 = 14$. $\\checkmark$ Perimeter $= 16 + 30 + 34 = 80$.\n\n**The Full Solution:**\nStep 1: Apply the Pythagorean theorem: $a^2 + (a + 14)^2 = 34^2$.\nStep 2: Expand: $a^2 + a^2 + 28a + 196 = 1{,}156 \\Rightarrow 2a^2 + 28a - 960 = 0 \\Rightarrow a^2 + 14a - 480 = 0$.\nStep 3: Factor: $(a + 30)(a - 16) = 0$, so $a = 16$ (a length must be positive). Then $a + 14 = 30$.\nStep 4: Perimeter $= 16 + 30 + 34 = 80$. This matches choice C. Check: $16^2 + 30^2 = 256 + 900 = 1{,}156 = 34^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($46$): adds only the two legs $16 + 30$ and forgets the hypotenuse.\n* Choice B ($50$): adds $16 + 34$, skipping the longer leg.\n* Choice D ($114$): double-counts the hypotenuse, computing $80 + 34$.\n\n**Test Day Takeaway:** Scaled Pythagorean triples hide in plain sight — a hypotenuse of $34$ is $8$-$15$-$17$ doubled. Confirm with the stated relationship between the legs before computing the perimeter.",
  skills: ["triangles", "pythagorean", "perimeter"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The graph of the function $f(x) = a(x - 3)^2 + 5$, where $a$ is a constant, passes through the point $(1, 21)$. What is the $y$-coordinate of the $y$-intercept of the graph of $f$?",
  choices: [
    // distractor: uses a = -4 (sign error), giving -36 + 5
    { id: "A", text: "$-31$" },
    // distractor: reads the vertex constant 5 as the y-intercept
    { id: "B", text: "$5$" },
    // distractor: uses a = 1 instead of a = 4, giving 9 + 5
    { id: "C", text: "$14$" },
    { id: "D", text: "$41$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Quadratic Vertex Form Application**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Plug in $(1, 21)$: $21 = a(1 - 3)^2 + 5 = 4a + 5$, so $a = 4$. Then $f(0) = 4(0 - 3)^2 + 5 = 36 + 5 = 41$.\n\n**The Full Solution:**\nStep 1: Substitute the point into $f(x) = a(x - 3)^2 + 5$: $21 = a(-2)^2 + 5 = 4a + 5$.\nStep 2: Solve for $a$: $16 = 4a \\Rightarrow a = 4$.\nStep 3: The $y$-intercept is $f(0) = 4(0 - 3)^2 + 5 = 4(9) + 5 = 41$. This matches choice D. Check: $f(1) = 4(4) + 5 = 21$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-31$): a sign error gives $a = -4$, so $-4(9) + 5 = -31$.\n* Choice B ($5$): reads the vertex's $y$-value as the $y$-intercept — the vertex sits at $x = 3$, not $x = 0$.\n* Choice C ($14$): skips solving for $a$ and uses $a = 1$: $9 + 5 = 14$.\n\n**Test Day Takeaway:** Pin down $a$ from the given point first, then evaluate $f(0)$ — the vertex constant $k$ is the $y$-intercept only when the vertex sits on the $y$-axis.",
  skills: ["vertex-form", "quadratic-equations", "coordinate-geometry"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $9x^2 - 30x + 25 = 0$ and $x = a$ is the solution, what is the value of $3a - 5$?",
  choices: [
    // distractor: sign slip — negates the whole expression
    { id: "A", text: "$-5$" },
    { id: "B", text: "$0$" },
    // distractor: reports the value of a itself
    { id: "C", text: "$\\dfrac{5}{3}$" },
    // distractor: reports 3a = 5 without subtracting
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Perfect Square Trinomial**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $9x^2 - 30x + 25 = (3x - 5)^2 = 0$, so $3x - 5 = 0$. The question asks for $3a - 5$ — exactly that expression — so it equals $0$.\n\n**The Full Solution:**\nStep 1: Recognize the perfect square: $9x^2 - 30x + 25 = (3x)^2 - 2(3x)(5) + 5^2 = (3x - 5)^2$.\nStep 2: Set it to zero: $(3x - 5)^2 = 0 \\Rightarrow 3x - 5 = 0 \\Rightarrow x = \\frac{5}{3}$.\nStep 3: With $a = \\frac{5}{3}$, $3a - 5 = 3\\left(\\frac{5}{3}\\right) - 5 = 5 - 5 = 0$. This matches choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): a sign slip that treats $3a$ as $0$, leaving $-5$.\n* Choice C ($\\frac{5}{3}$): reports the solution $a$ itself rather than the requested expression.\n* Choice D ($5$): stops at $3a = 5$ and never subtracts the $5$.\n\n**Test Day Takeaway:** When a quadratic is a perfect square, its factor is zero — and if the question asks for that exact factor expression, you are already done: it is $0$.",
  skills: ["factoring", "quadratic-equations"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The quadratic equation $3x^2 + bx + 27 = 0$ has exactly one real solution. If $b < 0$, what is the value of $b$?",
  choices: [
    { id: "A", text: "$-18$" },
    // distractor: mis-multiplies 4(3)(27) as 81, giving b = -9
    { id: "B", text: "$-9$" },
    // distractor: ignores the sign condition b < 0
    { id: "C", text: "$18$" },
    // distractor: confuses b with the constant c = 27
    { id: "D", text: "$27$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Discriminant Equals Zero**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Exactly one solution means discriminant $= 0$: $b^2 - 4(3)(27) = 0 \\Rightarrow b^2 = 324 \\Rightarrow b = \\pm 18$. Since $b < 0$, $b = -18$.\n\n**The Full Solution:**\nStep 1: A quadratic has exactly one real solution when $b^2 - 4ac = 0$.\nStep 2: With $a = 3$ and $c = 27$: $b^2 - 4(3)(27) = b^2 - 324 = 0$.\nStep 3: So $b^2 = 324 \\Rightarrow b = \\pm 18$. The condition $b < 0$ selects $b = -18$. This matches choice A.\nCheck: $3x^2 - 18x + 27 = 3(x^2 - 6x + 9) = 3(x - 3)^2 = 0$ — one repeated solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-9$): mis-multiplies $4 \\cdot 3 \\cdot 27$ as $81$, giving $b^2 = 81$.\n* Choice C ($18$): solves correctly but ignores the constraint $b < 0$.\n* Choice D ($27$): confuses $b$ with the constant term $c = 27$.\n\n**Test Day Takeaway:** \"Exactly one real solution\" is the trigger for $b^2 - 4ac = 0$. Solve for both roots of $b$, then honor the sign constraint.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the circle $(x - 1)^2 + (y - 2)^2 = 25$ and the line $y = 5$ intersect at two points. What is the distance between these two points?",
  choices: [
    // distractor: reports x - 1 = 4, half the chord, instead of the full chord
    { id: "A", text: "$4$" },
    // distractor: gives the radius instead of the chord length
    { id: "B", text: "$5$" },
    // distractor: arithmetic slip — solves (x-1)^2 = 9 and doubles to 6
    { id: "C", text: "$6$" },
    { id: "D", text: "$8$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Circle-Line Intersection**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Substitute $y = 5$: $(x - 1)^2 + 9 = 25 \\Rightarrow (x - 1)^2 = 16 \\Rightarrow x = 5$ or $x = -3$. Distance $= 5 - (-3) = 8$.\n\n**The Full Solution:**\nStep 1: The circle has center $(1, 2)$ and radius $\\sqrt{25} = 5$. The line $y = 5$ is horizontal and does NOT pass through the center, so the chord is shorter than the diameter.\nStep 2: Substitute $y = 5$ into the circle equation: $(x - 1)^2 + (5 - 2)^2 = 25 \\Rightarrow (x - 1)^2 = 25 - 9 = 16$.\nStep 3: So $x - 1 = \\pm 4$, giving $x = 5$ or $x = -3$. The points are $(5, 5)$ and $(-3, 5)$; distance $= 5 - (-3) = 8$. This matches choice D.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): reports $x - 1 = 4$ — half the chord — without doubling.\n* Choice B ($5$): reports the radius; the chord here is neither the radius nor the diameter.\n* Choice C ($6$): an arithmetic slip, solving $(x - 1)^2 = 9$ instead of $16$.\n* (Note the diameter reflex, $10$, would also be wrong: the line misses the center.)\n\n**Test Day Takeaway:** A chord equals the diameter only when the line passes through the center. Otherwise substitute the line into the circle and take the gap between the two $x$-solutions.",
  skills: ["circle-equations", "coordinate-geometry"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 3 — Math Module 2 (22 questions), hard track.
// Official-calibration recreation (2026-08-31). Wavy shape kept from the
// blueprint: easy at Q1, Q3, Q19 (mid/late breather); medium at Q2, Q4, Q5,
// Q7, Q10, Q11, Q12; hard everywhere else, Q21/Q22 hard closers.
// Q1-5 warm-ups are 2+ steps or carry a trap (no one-formula plug-ins):
// Q1 missing-LEG Pythagorean with the add-squares trap + surd simplification,
// Q2 map-scale proportion + km conversion, Q3 inequality with a sign flip,
// Q4 mean read off a bar graph, Q5 unequal-denominator fraction equation.
// Diagram items: Q4 barChart, Q10 quadraticVertex, Q13 table, Q20 rightTriangle.
{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A right triangle has a hypotenuse of length $9$ centimeters and one leg of length $5$ centimeters. What is the length, in centimeters, of the other leg?",
  choices: [
    // distractor: subtracts the side lengths and takes the root: sqrt(9 - 5) = 2
    { id: "A", text: "$2$" },
    // distractor: subtracts the side lengths without squaring anything (9 - 5)
    { id: "B", text: "$4$" },
    { id: "C", text: "$2\\sqrt{14}$" },
    // distractor: ADDS the squares (81 + 25 = 106) — the reflex move for a hypotenuse, but 9 already IS the hypotenuse
    { id: "D", text: "$\\sqrt{106}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The missing side is a LEG, so subtract squares: $\\sqrt{9^2 - 5^2} = \\sqrt{81 - 25} = \\sqrt{56} = 2\\sqrt{14}$.\n\n**The Full Solution:**\nStep 1: The Pythagorean theorem gives $a^2 + b^2 = c^2$, where $c = 9$ is the hypotenuse and $a = 5$ is the known leg.\nStep 2: Solve for the other leg: $b^2 = 9^2 - 5^2 = 81 - 25 = 56$.\nStep 3: Take the root and simplify: $b = \\sqrt{56} = \\sqrt{4 \\cdot 14} = 2\\sqrt{14}$ centimeters. Check: $5^2 + (2\\sqrt{14})^2 = 25 + 56 = 81 = 9^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): subtracts the side lengths and roots the result, $\\sqrt{9 - 5}$ — the theorem relates SQUARES of sides.\n* Choice B ($4$): subtracts the side lengths $9 - 5$ with no squaring at all.\n* Choice D ($\\sqrt{106}$): ADDS the squares — the reflex for finding a hypotenuse, but $9$ already IS the hypotenuse. This is the trap.\n\n**Test Day Takeaway:** Before using the Pythagorean theorem, identify the hypotenuse. Missing hypotenuse → add squares; missing leg → subtract squares — then pull perfect-square factors out of the radical.",
  skills: ["triangles", "pythagorean", "radical-expressions"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "On a zoning map, a length of $4$ centimeters represents an actual distance of $300$ meters. A planned greenway measures $9$ centimeters on the map. What is the actual length of the greenway, in kilometers?",
  choices: [
    // distractor: inverts the proportion, computing (4/9)(300) = 133 m = 0.133 km
    { id: "A", text: "$0.133$" },
    { id: "B", text: "$0.675$" },
    // distractor: converts meters to kilometers by dividing by 100 instead of 1,000
    { id: "C", text: "$6.75$" },
    // distractor: reports the length in meters, ignoring the kilometer request
    { id: "D", text: "$675$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Each centimeter represents $\\frac{300}{4} = 75$ meters. So $9$ cm represents $9 \\cdot 75 = 675$ meters $= 0.675$ kilometers.\n\n**The Full Solution:**\nStep 1: Set up the proportion with matching units: $\\frac{300 \\text{ m}}{4 \\text{ cm}} = \\frac{d}{9 \\text{ cm}}$.\nStep 2: Cross-multiply: $4d = 300 \\cdot 9 = 2{,}700$, so $d = 675$ meters.\nStep 3: The question asks for KILOMETERS: $675 \\div 1{,}000 = 0.675$ km. This matches choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.133$): inverts the proportion, scaling by $\\frac{4}{9}$ instead of $\\frac{9}{4}$.\n* Choice C ($6.75$): divides by $100$ instead of $1{,}000$ when converting meters to kilometers.\n* Choice D ($675$): stops at meters and never converts to the requested unit.\n\n**Test Day Takeaway:** Solve the proportion first, then re-read the units in the final sentence — a correct number in the wrong unit is a wrong answer.",
  skills: ["ratios", "proportions", "word-problems"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "What is the smallest integer $n$ for which $45 - 6n < -3$?",
  choices: [
    // distractor: arithmetic slip solving 6n > 48 (subtracts 2 from the boundary)
    { id: "A", text: "$6$" },
    // distractor: forgets to flip the inequality when dividing by -6, landing on n < 8
    { id: "B", text: "$7$" },
    // distractor: gives the boundary value, where the two sides are equal
    { id: "C", text: "$8$" },
    { id: "D", text: "$9$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Smallest Integer in an Inequality**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** $45 - 6n < -3 \\Rightarrow 48 < 6n \\Rightarrow n > 8$. The smallest integer strictly greater than $8$ is $9$.\n\n**The Full Solution:**\nStep 1: Add $6n$ to both sides and add $3$ to both sides: $45 + 3 < 6n$, so $48 < 6n$. (Moving $6n$ across first avoids dividing by a negative.)\nStep 2: Divide by $6$: $8 < n$, i.e. $n > 8$.\nStep 3: The smallest integer strictly greater than $8$ is $9$. Check: at $n = 9$, $45 - 54 = -9 < -3$ $\\checkmark$; at $n = 8$, $45 - 48 = -3$, which is NOT less than $-3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): an arithmetic slip while solving $6n > 48$.\n* Choice B ($7$): divides by $-6$ without flipping the inequality, landing on $n < 8$ and picking an integer below the true boundary.\n* Choice C ($8$): gives the boundary value, where the two sides are exactly equal — a strict $<$ excludes it.\n\n**Test Day Takeaway:** With a negative coefficient, move the variable term across the inequality instead of dividing by a negative — no flip needed, no sign traps.",
  skills: ["solving-equations", "inequalities"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The bar graph shows the number of inspection reports a city building department filed on each of $5$ days. What is the mean number of reports filed per day over the $5$ days?",
  diagram: { type: "barChart", params: {
    data: [
      { label: "Mon", value: 24 },
      { label: "Tue", value: 18 },
      { label: "Wed", value: 30 },
      { label: "Thu", value: 12 },
      { label: "Fri", value: 26 }
    ],
    xAxisLabel: "Day",
    yAxisLabel: "Number of reports",
    yMax: 32,
    yStep: 4
  } },
  choices: [
    { id: "A", text: "$22$" },
    // distractor: reports the median of the five values instead of the mean
    { id: "B", text: "$24$" },
    // distractor: divides the total by 4, dropping a day
    { id: "C", text: "$27.5$" },
    // distractor: reports the tallest bar (the maximum)
    { id: "D", text: "$30$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Mean from List**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Read the bars: $24, 18, 30, 12, 26$. Sum $= 110$. Mean $= \\frac{110}{5} = 22$.\n\n**The Full Solution:**\nStep 1: Read each bar's height from the graph: Mon $24$, Tue $18$, Wed $30$, Thu $12$, Fri $26$.\nStep 2: Add: $24 + 18 + 30 + 12 + 26 = 110$.\nStep 3: Divide by the number of days: $\\frac{110}{5} = 22$ reports per day. This matches choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($24$): reports the median (ordered: $12, 18, 24, 26, 30$) instead of the mean.\n* Choice C ($27.5$): divides the total $110$ by $4$, dropping one of the five days.\n* Choice D ($30$): reports the tallest bar — the maximum, not the mean.\n\n**Test Day Takeaway:** A mean from a bar graph is still sum-over-count: read every bar, add them all, and divide by the number of bars.",
  skills: ["statistics", "mean", "word-problems"]
},
{
  id: 5,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $\\dfrac{5x + 2}{6} = \\dfrac{2x - 1}{2}$, what is the value of $x$?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~25s):** Multiply both sides by $6$: $5x + 2 = 3(2x - 1) = 6x - 3$. Then $2 + 3 = 6x - 5x$, so $x = 5$.\n\n**The Full Solution:**\nStep 1: The denominators differ ($6$ and $2$), so clear them by multiplying both sides by $6$: $5x + 2 = 3(2x - 1)$.\nStep 2: Distribute: $5x + 2 = 6x - 3$.\nStep 3: Collect like terms: $2 + 3 = 6x - 5x \\Rightarrow x = 5$.\n\nCheck: left $= \\dfrac{5(5) + 2}{6} = \\dfrac{27}{6} = 4.5$; right $= \\dfrac{2(5) - 1}{2} = \\dfrac{9}{2} = 4.5$ $\\checkmark$.\n\n**Common Mistakes:** Setting the numerators equal directly ($5x + 2 = 2x - 1$), which only works when the denominators match; forgetting to distribute the $3$, writing $3(2x - 1)$ as $6x - 1$.\n\n**Test Day Takeaway:** When two fractions with different denominators are equal, multiply through by a common denominator (or cross-multiply), then distribute carefully before collecting terms.",
  skills: ["solving-equations"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Consider the system of equations:\n\n$2x + 7y = 41$\n$5x + 3y = 30$\n\nIf $(x, y)$ is the solution to the system, what is the value of $x + y$?",
  correctAnswer: "8",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~35s):** Multiply the first equation by $5$ and the second by $2$: $10x + 35y = 205$ and $10x + 6y = 60$. Subtract: $29y = 145 \\Rightarrow y = 5$, then $x = 3$, so $x + y = 8$.\n\n**The Full Solution:**\nStep 1: Match the $x$-coefficients: $5 \\times (2x + 7y = 41)$ gives $10x + 35y = 205$; $2 \\times (5x + 3y = 30)$ gives $10x + 6y = 60$.\nStep 2: Subtract the second from the first: $29y = 145 \\Rightarrow y = 5$.\nStep 3: Substitute into $2x + 7y = 41$: $2x + 35 = 41 \\Rightarrow 2x = 6 \\Rightarrow x = 3$.\nStep 4: $x + y = 3 + 5 = 8$.\n\nCheck: $2(3) + 7(5) = 41$ $\\checkmark$ and $5(3) + 3(5) = 30$ $\\checkmark$.\n\n**Common Mistakes:** Reporting $x = 3$ or $y = 5$ alone instead of the requested sum; sign errors when subtracting the scaled equations; scaling only one equation and eliminating nothing.\n\n**Test Day Takeaway:** Scale BOTH equations to a common coefficient, eliminate, back-substitute — and then answer the exact combination the question asks for, here $x + y$.",
  skills: ["systems-of-equations", "linear-functions"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A transit authority surveyed a random sample of $400$ weekday riders of one of its bus routes and estimated that $62\\%$ of the route's weekday riders support extending evening service, with an associated margin of error of $3.5\\%$. Which of the following conclusions is the most appropriate?",
  choices: [
    // distractor: treats the sample point estimate as exact
    { id: "A", text: "Exactly $62\\%$ of the route's weekday riders support extending evening service." },
    // distractor: generalizes beyond the sampled population of weekday riders
    { id: "B", text: "$62\\%$ of all riders in the transit system support extending evening service." },
    // distractor: doubles the margin of error on each side of the estimate
    { id: "C", text: "It is plausible that between $55\\%$ and $69\\%$ of the route's weekday riders support extending evening service." },
    { id: "D", text: "It is plausible that between $58.5\\%$ and $65.5\\%$ of the route's weekday riders support extending evening service." }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The plausible interval is the estimate $\\pm$ the margin of error: $62\\% \\pm 3.5\\%$, which is $58.5\\%$ to $65.5\\%$.\n\n**The Full Solution:**\nStep 1: A margin of error defines a plausible range for the true population value, centered on the sample estimate.\nStep 2: Lower bound: $62\\% - 3.5\\% = 58.5\\%$. Upper bound: $62\\% + 3.5\\% = 65.5\\%$.\nStep 3: The population the sample represents is the route's WEEKDAY riders — so the appropriate claim is that between $58.5\\%$ and $65.5\\%$ of them plausibly support the extension.\n\n**Why the wrong answers are tempting:**\n* Choice A: treats the point estimate as exact, ignoring the margin of error entirely.\n* Choice B: generalizes to all riders in the system, but only weekday riders of this route were sampled.\n* Choice C: doubles the margin of error, stretching the interval to $\\pm 7\\%$.\n\n**Test Day Takeaway:** Margin of error gives estimate $\\pm$ MoE for the SAMPLED population — never widen the interval and never widen the population.",
  skills: ["margin-of-error", "statistics"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The mass of a radioactive tracer in a laboratory sample is halved every $8$ hours. The sample's mass is $96$ milligrams at noon on Tuesday. What was the mass of the tracer, in milligrams, at noon on Monday?",
  choices: [
    // distractor: applies the halving forward in time, computing 96 / 2^3
    { id: "A", text: "$12$" },
    // distractor: multiplies by the number of periods (96 x 3) instead of by 2^3
    { id: "B", text: "$288$" },
    { id: "C", text: "$768$" },
    // distractor: multiplies by the 24 hours instead of the three halvings
    { id: "D", text: "$2{,}304$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Noon Monday is $24$ hours EARLIER — that is $\\frac{24}{8} = 3$ halvings back. Undo each halving by doubling: $96 \\cdot 2^3 = 96 \\cdot 8 = 768$.\n\n**The Full Solution:**\nStep 1: Count the periods between the two times: $24$ hours $\\div$ $8$ hours per halving $= 3$ periods.\nStep 2: Going FORWARD in time divides by $2$ each period; going BACKWARD multiplies by $2$ each period. Monday is backward.\nStep 3: Mass on Monday $= 96 \\cdot 2^3 = 768$ milligrams.\n\nCheck forward: $768 \\to 384 \\to 192 \\to 96$ across Tuesday's three periods. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): applies the decay forward, computing $\\frac{96}{2^3}$ — that is the mass on WEDNESDAY, not Monday.\n* Choice B ($288$): multiplies by the period count $3$ instead of by $2^3 = 8$.\n* Choice D ($2{,}304$): multiplies by the $24$ hours, treating time itself as the growth factor.\n\n**Test Day Takeaway:** For repeated halving, first count the periods, then check the direction of time: earlier means UNDO the decay — multiply by $2$ per period.",
  skills: ["exponential-functions", "exponential-growth-decay", "modeling"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = 3x + 8$. If $g(x) = f(x + 2) + 4x$, what is the value of $g(10)$?",
  choices: [
    // distractor: subtracts the 4x term instead of adding it (44 - 40)
    { id: "A", text: "$4$" },
    // distractor: stops at f(12) = 44 and forgets the +4x term
    { id: "B", text: "$44$" },
    // distractor: ignores the +2 input shift, computing f(10) + 40
    { id: "C", text: "$78$" },
    { id: "D", text: "$84$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Function Composition**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** $g(10) = f(10 + 2) + 4(10) = f(12) + 40 = (3 \\cdot 12 + 8) + 40 = 44 + 40 = 84$.\n\n**The Full Solution:**\nStep 1: Evaluate the shifted-input piece: $f(10 + 2) = f(12) = 3(12) + 8 = 44$.\nStep 2: Evaluate the second term: $4 \\cdot 10 = 40$.\nStep 3: Combine: $g(10) = 44 + 40 = 84$.\n\nCheck via the full rule: $g(x) = 3(x + 2) + 8 + 4x = 7x + 14$, so $g(10) = 70 + 14 = 84$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): subtracts the $4x$ term instead of adding, $44 - 40$.\n* Choice B ($44$): stops at $f(12)$ and never adds the $4x$ term.\n* Choice C ($78$): ignores the $+2$ shift and computes $f(10) + 40 = 38 + 40$.\n\n**Test Day Takeaway:** Substitute the input into EVERY $x$ in the definition — the shifted argument and the extra term both take $x = 10$.",
  skills: ["function-interpretation", "function-composition"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The graph of the quadratic function $f$ is shown in the $xy$-plane. Which equation defines $f$?",
  diagram: { type: "quadraticVertex", params: {
    vertex: [3, 8],
    a: -2,
    showPoints: [[1, 0], [5, 0]],
    showVertex: true
  } },
  choices: [
    { id: "A", text: "$f(x) = -2(x - 3)^2 + 8$" },
    // distractor: uses a = -1, ignoring the marked x-intercepts (this graph would pass through (1, 4))
    { id: "B", text: "$f(x) = -(x - 3)^2 + 8$" },
    // distractor: flips the sign of h, placing the vertex at x = -3
    { id: "C", text: "$f(x) = -2(x + 3)^2 + 8$" },
    // distractor: flips the sign of a, giving a parabola that opens upward
    { id: "D", text: "$f(x) = 2(x - 3)^2 + 8$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Quadratic Vertex Form Application**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The vertex sits at $(3, 8)$, so $f(x) = a(x - 3)^2 + 8$. The graph passes through $(1, 0)$: $0 = a(4) + 8 \\Rightarrow a = -2$.\n\n**The Full Solution:**\nStep 1: Vertex form is $f(x) = a(x - h)^2 + k$ with vertex $(h, k)$. The graphed vertex is $(3, 8)$, so $f(x) = a(x - 3)^2 + 8$.\nStep 2: Use a second marked point to pin down $a$. At $(1, 0)$: $0 = a(1 - 3)^2 + 8 = 4a + 8$, so $a = -2$.\nStep 3: $f(x) = -2(x - 3)^2 + 8$. Check the other intercept: $f(5) = -2(4) + 8 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: keeps the vertex but skips solving for $a$; with $a = -1$ the graph would cross $(1, 4)$, not $(1, 0)$.\n* Choice C: writes $(x + 3)^2$, which moves the vertex to $x = -3$ — vertex form subtracts $h$.\n* Choice D: uses $a = +2$, an upward-opening parabola, but the graphed vertex is a maximum.\n\n**Test Day Takeaway:** Read the vertex for $h$ and $k$, then force the curve through one more marked point to solve for $a$ — the sign of $a$ must match which way the graph opens.",
  skills: ["function-interpretation", "quadratic-equations"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "An observatory's telescope-rental program charges members a $\\$28$ setup fee plus $\\$14$ per hour of observing time, so the total charge in dollars for $h$ hours is $C(h) = 14h + 28$. A member's total charge for one session was $\\$126$. For how many hours of observing time was the member charged?",
  choices: [
    // distractor: swaps the roles of the fee and the rate, computing (126 - 14) / 28
    { id: "A", text: "$4$" },
    { id: "B", text: "$7$" },
    // distractor: divides the total by the rate without removing the setup fee
    { id: "C", text: "$9$" },
    // distractor: adds the fee instead of subtracting it, computing (126 + 28) / 14
    { id: "D", text: "$11$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Set $14h + 28 = 126$. Subtract the fee: $14h = 98$. Divide by the rate: $h = 7$.\n\n**The Full Solution:**\nStep 1: $14h + 28 = 126$.\nStep 2: Subtract the setup fee: $14h = 126 - 28 = 98$.\nStep 3: Divide by the hourly rate: $h = \\dfrac{98}{14} = 7$.\n\nCheck: $C(7) = 14(7) + 28 = 98 + 28 = 126$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): swaps the fee and the rate, computing $\\frac{126 - 14}{28}$.\n* Choice C ($9$): divides $126$ by $14$ without first removing the $\\$28$ fee.\n* Choice D ($11$): ADDS the fee instead of subtracting, computing $\\frac{126 + 28}{14}$.\n\n**Test Day Takeaway:** To invert a linear model, undo the constant first (subtract the fixed fee), then undo the coefficient (divide by the per-unit rate) — in that order.",
  skills: ["solving-equations", "linear-functions", "word-problems"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A sprinter's weekly training volume increased from $32$ kilometers to $44$ kilometers. By what percent did the training volume increase?",
  choices: [
    // distractor: reports the raw 12-kilometer difference as a percent
    { id: "A", text: "$12\\%$" },
    // distractor: divides the increase by the new value 44 instead of the original
    { id: "B", text: "$27.3\\%$" },
    { id: "C", text: "$37.5\\%$" },
    // distractor: reports the new volume as a percent of the old (44/32) instead of the change
    { id: "D", text: "$137.5\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent Increase**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Percent increase $= \\dfrac{\\text{increase}}{\\text{original}} = \\dfrac{44 - 32}{32} = \\dfrac{12}{32} = 0.375 = 37.5\\%$.\n\n**The Full Solution:**\nStep 1: The increase is $44 - 32 = 12$ kilometers.\nStep 2: Divide by the ORIGINAL volume: $\\dfrac{12}{32} = \\dfrac{3}{8} = 0.375$.\nStep 3: As a percent, $0.375 = 37.5\\%$.\n\nCheck: $32 \\times 1.375 = 44$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($12\\%$): reports the raw $12$-kilometer difference as if it were a percent.\n* Choice B ($27.3\\%$): divides the increase by the NEW value, $\\frac{12}{44}$, instead of the original.\n* Choice D ($137.5\\%$): computes $\\frac{44}{32} = 137.5\\%$ — the new volume as a percent of the old, not the change.\n\n**Test Day Takeaway:** Percent change always divides by the original amount: $\\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$.",
  skills: ["percents", "percent-change", "word-problems"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table gives three points on line $h$ in the $xy$-plane. Line $k$ is the result of translating line $h$ down $12$ units. What is the $x$-intercept of line $k$?",
  diagram: { type: "table", params: {
    xHeader: "x", yHeader: "y",
    rows: [["-2", "1"], ["1", "10"], ["4", "19"]]
  } },
  choices: [
    // distractor: translates up instead of down, solving 3x + 19 = 0
    { id: "A", text: "$\\left(-\\dfrac{19}{3},\\,0\\right)$" },
    // distractor: uses line h's own x-intercept without applying the shift
    { id: "B", text: "$\\left(-\\dfrac{7}{3},\\,0\\right)$" },
    { id: "C", text: "$\\left(\\dfrac{5}{3},\\,0\\right)$" },
    // distractor: reports the magnitude of k's y-intercept as the x-intercept
    { id: "D", text: "$\\left(5,\\,0\\right)$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Slope $= \\dfrac{10 - 1}{1 - (-2)} = \\dfrac{9}{3} = 3$. From $(1, 10)$: $b = 10 - 3 = 7$, so $h$: $y = 3x + 7$. Down $12$ gives $k$: $y = 3x - 5$. Set $0 = 3x - 5 \\Rightarrow x = \\dfrac{5}{3}$.\n\n**The Full Solution:**\nStep 1: Find the slope from two table points: $\\dfrac{10 - 1}{1 - (-2)} = 3$.\nStep 2: Write $h$ in slope-intercept form using $(1, 10)$: $10 = 3(1) + b \\Rightarrow b = 7$, so $h$: $y = 3x + 7$. Confirm with $(4, 19)$: $3(4) + 7 = 19$. $\\checkmark$\nStep 3: Translating down $12$ subtracts $12$ from the output: $k$: $y = 3x + 7 - 12 = 3x - 5$.\nStep 4: Set $y = 0$: $3x - 5 = 0 \\Rightarrow x = \\dfrac{5}{3}$. The $x$-intercept is $\\left(\\dfrac{5}{3}, 0\\right)$.\n\n**Why the wrong answers are tempting:**\n* Choice A: translates UP instead of down, solving $3x + 19 = 0$.\n* Choice B: gives line $h$'s own $x$-intercept ($-\\frac{7}{3}$), forgetting the translation entirely.\n* Choice D: reports the magnitude of $k$'s $y$-intercept ($-5$) as if it were the $x$-intercept.\n\n**Test Day Takeaway:** Translating a line down $c$ units subtracts $c$ from the $y$-intercept only. Build the equation from the table first, shift, then solve $y = 0$.",
  skills: ["linear-functions", "transformations", "x-intercept"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The polynomial $q$ has degree $3$ and zeros at $x = -3$, $x = 1$, and $x = 5$. If $q(0) = 30$, what is the value of $q(2)$?",
  correctAnswer: "-30",
  explanation: "**SAT Pattern: Polynomial Zeros via Factoring**\n\n**The correct answer is $-30$.**\n\n**The Fast Way (~40s):** Write $q(x) = a(x + 3)(x - 1)(x - 5)$. From $q(0) = a(3)(-1)(-5) = 15a = 30$, so $a = 2$. Then $q(2) = 2(5)(1)(-3) = -30$.\n\n**The Full Solution:**\nStep 1: A degree-$3$ polynomial with zeros $-3, 1, 5$ has the form $q(x) = a(x + 3)(x - 1)(x - 5)$.\nStep 2: Use $q(0) = 30$ to find $a$: $q(0) = a(0 + 3)(0 - 1)(0 - 5) = a(3)(-1)(-5) = 15a = 30 \\Rightarrow a = 2$.\nStep 3: Evaluate $q(2) = 2(2 + 3)(2 - 1)(2 - 5) = 2 \\cdot 5 \\cdot 1 \\cdot (-3) = -30$.\n\nCheck: $q(0) = 2(3)(-1)(-5) = 30$ $\\checkmark$, and each listed zero gives $q = 0$ $\\checkmark$.\n\n**Common Mistakes:** Dropping the leading coefficient and using $q(x) = (x + 3)(x - 1)(x - 5)$, which gives $q(0) = 15$, not $30$; a sign slip on $(0 - 1)(0 - 5) = +5$; forgetting the final factor's sign, since $2 - 5 = -3$ makes the whole product negative.\n\n**Test Day Takeaway:** A degree-$n$ polynomial with known zeros is $a(x - r_1)\\cdots(x - r_n)$ — pin down $a$ with the extra given value, then evaluate and keep every sign.",
  skills: ["polynomial-operations", "factoring", "function-interpretation"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The daily energy cost, in dollars, of running a cold-storage warehouse at thermostat setting $x$ is modeled by $C(x) = x^2 - 22x + 173$. What is the minimum possible daily energy cost, in dollars?",
  correctAnswer: "52",
  explanation: "**SAT Pattern: Quadratic — Completing the Square**\n\n**The correct answer is $52$.**\n\n**The Fast Way (~25s):** A quadratic with $a > 0$ bottoms out at its vertex. Complete the square: $C(x) = (x - 11)^2 + 52$, so the minimum cost is $52$.\n\n**The Full Solution:**\nStep 1: Take half the $x$-coefficient: $\\frac{-22}{2} = -11$, then square it: $121$.\nStep 2: $C(x) = x^2 - 22x + 121 - 121 + 173 = (x - 11)^2 + 52$.\nStep 3: Since $(x - 11)^2 \\ge 0$, $C$ is smallest when $x = 11$, leaving $C = 52$.\n\nCheck: $C(11) = 121 - 242 + 173 = 52$. $\\checkmark$\n\n**Common Mistakes:** Reporting $x = 11$ — the setting that minimizes cost — instead of the minimum cost itself; forgetting to subtract the added $121$, which shifts the constant; using $-\\frac{b}{2a}$ correctly but then never evaluating $C$ there.\n\n**Test Day Takeaway:** For $ax^2 + bx + c$ with $a > 0$, the minimum VALUE is the $k$ left over after writing it as $(x - h)^2 + k$ — the question asks for $k$, not $h$.",
  skills: ["quadratic-equations", "completing-the-square", "vertex-form"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the horizontal line $y = 6$ is tangent to the parabola $y = x^2 - 10x + c$, where $c$ is a constant. What is the value of $c$?",
  correctAnswer: "31",
  explanation: "**SAT Pattern: Line-Parabola Intersection Count**\n\n**The correct answer is $31$.**\n\n**The Fast Way (~25s):** Tangency means one repeated root. Set $x^2 - 10x + c = 6$, i.e. $x^2 - 10x + (c - 6) = 0$, and require discriminant $0$: $100 - 4(c - 6) = 0 \\Rightarrow c - 6 = 25 \\Rightarrow c = 31$.\n\n**The Full Solution:**\nStep 1: Tangency at one point means $x^2 - 10x + c = 6$ has a single (repeated) solution.\nStep 2: Rewrite as $x^2 - 10x + (c - 6) = 0$.\nStep 3: One real root requires $b^2 - 4ac = 0$: $(-10)^2 - 4(1)(c - 6) = 100 - 4(c - 6) = 0$.\nStep 4: Solve: $4(c - 6) = 100 \\Rightarrow c - 6 = 25 \\Rightarrow c = 31$.\n\nCheck: with $c = 31$, the equation becomes $x^2 - 10x + 25 = (x - 5)^2 = 0$ — one repeated root at $x = 5$, so the line touches the parabola only at $(5, 6)$. $\\checkmark$ (Equivalently, the vertex height $c - 25 = 6$.)\n\n**Common Mistakes:** Forgetting to move the $6$ across before applying the discriminant (using $c$ instead of $c - 6$); setting the discriminant positive or negative, which describes two intersections or none.\n\n**Test Day Takeaway:** A horizontal line is tangent to a parabola exactly when substituting it produces a quadratic with discriminant $0$ — one repeated root, one touch point.",
  skills: ["quadratic-equations", "discriminant", "systems-of-equations"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The price of an alloy ingot was first increased by $20\\%$. The new price was then decreased by $35\\%$. The final price is $p\\%$ less than the original price. What is the value of $p$?",
  correctAnswer: "22",
  explanation: "**SAT Pattern: Successive Percent Changes**\n\n**The correct answer is $22$.**\n\n**The Fast Way (~25s):** Compose the multipliers: $1.20 \\times 0.65 = 0.78$. The final price is $78\\%$ of the original — a $22\\%$ decrease, so $p = 22$.\n\n**The Full Solution:**\nStep 1: An increase of $20\\%$ multiplies the price by $1.20$.\nStep 2: A decrease of $35\\%$ multiplies the NEW price by $1 - 0.35 = 0.65$.\nStep 3: Overall factor: $1.20 \\times 0.65 = 0.78$, so the final price is $78\\%$ of the original.\nStep 4: The drop from $100\\%$ to $78\\%$ is $22\\%$, so $p = 22$.\n\nCheck with a $\\$100$ ingot: $\\$100 \\to \\$120 \\to \\$120 \\times 0.65 = \\$78$, which is $\\$22$ below the original. $\\checkmark$\n\n**Common Mistakes:** Subtracting the percents directly ($35 - 20 = 15$) — successive changes MULTIPLY, they never add; applying the $35\\%$ decrease to the original price instead of the increased price.\n\n**Test Day Takeaway:** Chain percent changes by multiplying their factors: $(1 + r_1)(1 - r_2)$. Compare the product to $1$ to read off the net percent change.",
  skills: ["percent-change", "percent-word-problems"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the equation below, $k$ is a positive constant.\n\n$$\\dfrac{x^2}{\\sqrt{x^2 - k^2}} = \\dfrac{k^2}{\\sqrt{x^2 - k^2}} + 18$$\n\nWhich expression is one of the solutions for $x$?",
  choices: [
    { id: "A", text: "$-\\sqrt{k^2 + 324}$" },
    // distractor: flips the sign under the radical to k^2 - 324
    { id: "B", text: "$-\\sqrt{k^2 - 324}$" },
    // distractor: uses 18 unsquared under the radical
    { id: "C", text: "$\\sqrt{k^2 + 18}$" },
    // distractor: splits the radical illegally into a linear sum
    { id: "D", text: "$k + 18$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Radical Equation — Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Move the fraction across: $\\frac{x^2 - k^2}{\\sqrt{x^2 - k^2}} = 18$, which collapses to $\\sqrt{x^2 - k^2} = 18$. Square: $x^2 = k^2 + 324$, so $x = \\pm\\sqrt{k^2 + 324}$ — and $-\\sqrt{k^2 + 324}$ is choice A.\n\n**The Full Solution:**\nStep 1: Subtract $\\frac{k^2}{\\sqrt{x^2 - k^2}}$ from both sides so the fractions combine over the common denominator: $\\frac{x^2 - k^2}{\\sqrt{x^2 - k^2}} = 18$.\nStep 2: Substitute $u = \\sqrt{x^2 - k^2}$ (with $u > 0$), so $u^2 = x^2 - k^2$ and the left side is $\\frac{u^2}{u} = u$. The equation becomes $u = 18$.\nStep 3: Back-substitute: $x^2 - k^2 = 18^2 = 324 \\Rightarrow x^2 = k^2 + 324 \\Rightarrow x = \\pm\\sqrt{k^2 + 324}$.\nStep 4: Both signs satisfy the original equation (only $x^2$ appears), so $-\\sqrt{k^2 + 324}$ is a solution.\n\n**Why the wrong answers are tempting:**\n* Choice B: flips the sign under the radical to $k^2 - 324$, subtracting where the algebra adds.\n* Choice C: forgets to square the $18$, leaving $k^2 + 18$ under the radical.\n* Choice D: splits $\\sqrt{k^2 + 324}$ into $k + 18$ — radicals never distribute over addition.\n\n**Test Day Takeaway:** When one radical fills every denominator, combine the fractions: $\\frac{u^2}{u}$ collapses to $u$, and the scary equation becomes a one-step solve.",
  skills: ["radical-equations", "rational-equations", "solving-equations"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The result of increasing a quantity $q$ by $250\\%$ is $84$. What is the value of $q$?",
  choices: [
    // distractor: divides by 4, treating the increase as adding 300%
    { id: "A", text: "$21$" },
    { id: "B", text: "$24$" },
    // distractor: treats "increase by 250%" as multiplying by 2.5, dropping the original 100%
    { id: "C", text: "$33.6$" },
    // distractor: applies the 250% increase to 84 itself, computing 84 x 2.5
    { id: "D", text: "$210$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Percent Increase**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Increasing by $250\\%$ multiplies by $1 + 2.5 = 3.5$. So $3.5q = 84 \\Rightarrow q = 24$.\n\n**The Full Solution:**\nStep 1: Increasing $q$ by $250\\%$ adds $2.5q$ to $q$: $q + 2.5q = 3.5q$.\nStep 2: $3.5q = 84 \\Rightarrow q = \\frac{84}{3.5} = 24$.\n\nCheck: $250\\%$ of $24$ is $60$, and $24 + 60 = 84$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($21$): divides by $4$, treating the change as a $300\\%$ increase.\n* Choice C ($33.6$): treats \"increase by $250\\%$\" as multiplying by $2.5$, dropping the original $100\\%$.\n* Choice D ($210$): applies the increase to the RESULT, computing $84 \\times 2.5$ instead of undoing the change.\n\n**Test Day Takeaway:** \"Increase by $p\\%$\" multiplies the original by $1 + \\frac{p}{100}$. A $250\\%$ increase is a factor of $3.5$ — divide the result by that factor to recover the original.",
  skills: ["percents", "percent-change"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the right triangle shown, what is the value of $\\cos x^{\\circ}$? (Express your answer as a decimal or fraction.)",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["x°", "", ""],
      sideLabels: ["", "24", "25"],
      rightAngleVertex: 1
    }
  },
  correctAnswer: "0.28",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**The correct answer is $0.28$ (equivalently $\\frac{7}{25}$).**\n\n**The Fast Way (~30s):** The labeled sides are the leg OPPOSITE $x^{\\circ}$ ($24$) and the hypotenuse ($25$). The adjacent leg is $\\sqrt{25^2 - 24^2} = \\sqrt{49} = 7$, so $\\cos x^{\\circ} = \\frac{7}{25} = 0.28$.\n\n**The Full Solution:**\nStep 1: Cosine is the leg ADJACENT to the angle over the hypotenuse. The figure labels the opposite leg ($24$) and the hypotenuse ($25$) — the adjacent leg must be computed.\nStep 2: Pythagorean theorem: adjacent $= \\sqrt{25^2 - 24^2} = \\sqrt{625 - 576} = \\sqrt{49} = 7$. (This is the $7$-$24$-$25$ triple.)\nStep 3: $\\cos x^{\\circ} = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}} = \\dfrac{7}{25} = 0.28$.\n\nCheck: $\\sin x^{\\circ} = \\frac{24}{25} = 0.96$, and $0.28^2 + 0.96^2 = 0.0784 + 0.9216 = 1$. $\\checkmark$\n\n**Common Mistakes:** Using the labeled leg directly and reporting $\\frac{24}{25} = 0.96$ — that is $\\sin x^{\\circ}$, since $24$ is OPPOSITE the angle; subtracting lengths ($25 - 24 = 1$) instead of subtracting squares when finding the missing leg.\n\n**Test Day Takeaway:** Identify which given side is opposite and which is adjacent BEFORE writing the ratio — if the adjacent side is missing, find it with the Pythagorean theorem first.",
  skills: ["right-triangle-trig", "cosine-ratio", "triangles"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = \\dfrac{a}{x + b}$, where $a$ and $b$ are constants. In the $xy$-plane, the graph of $y = f(x)$ has a vertical asymptote at $x = 6$, and the graph passes through the point $(10, 12)$. If $g(x) = f(x + 4)$, what is the value of $g(4)$?",
  choices: [
    // distractor: ignores the +4 input shift and evaluates f(4) = 48/(4-6)
    { id: "A", text: "$-24$" },
    // distractor: shifts the wrong way, evaluating f(0) = 48/(0-6)
    { id: "B", text: "$-8$" },
    { id: "C", text: "$24$" },
    // distractor: reports the value of the constant a
    { id: "D", text: "$48$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Rational Function Transformation**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The asymptote at $x = 6$ forces $b = -6$, so $f(x) = \\frac{a}{x - 6}$. The point $(10, 12)$ gives $12 = \\frac{a}{4} \\Rightarrow a = 48$. Then $g(4) = f(4 + 4) = f(8) = \\frac{48}{2} = 24$.\n\n**The Full Solution:**\nStep 1: The denominator $x + b$ is zero at the vertical asymptote: $6 + b = 0 \\Rightarrow b = -6$, so $f(x) = \\frac{a}{x - 6}$.\nStep 2: Use the point $(10, 12)$: $12 = \\frac{a}{10 - 6} = \\frac{a}{4} \\Rightarrow a = 48$.\nStep 3: $g(x) = f(x + 4)$ shifts the input: $g(4) = f(8) = \\frac{48}{8 - 6} = \\frac{48}{2} = 24$. This matches choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-24$): ignores the $+4$ shift and evaluates $f(4) = \\frac{48}{-2}$.\n* Choice B ($-8$): shifts the input the wrong way, evaluating $f(4 - 4) = f(0) = \\frac{48}{-6}$.\n* Choice D ($48$): reports the constant $a$ instead of finishing the evaluation.\n\n**Test Day Takeaway:** Pin down the constants first — the asymptote fixes $b$, a point fixes $a$ — then apply the input shift: $g(4) = f(4 + 4)$, not $f(4)$.",
  skills: ["function-transformations", "rational-functions"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The equation $3x^2 - 21x + 4 = 0$ has two distinct solutions $r$ and $s$. What is the value of $\\dfrac{1}{r} + \\dfrac{1}{s}$?",
  correctAnswer: "5.25",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**The correct answer is $5.25$ (equivalently $\\frac{21}{4}$).**\n\n**The Fast Way (~25s):** $\\frac{1}{r} + \\frac{1}{s} = \\frac{r + s}{rs}$. By Vieta's, $r + s = \\frac{21}{3} = 7$ and $rs = \\frac{4}{3}$. So $\\frac{r + s}{rs} = \\frac{7}{\\frac{4}{3}} = 7 \\cdot \\frac{3}{4} = \\frac{21}{4} = 5.25$.\n\n**The Full Solution:**\nStep 1: For $ax^2 + bx + c = 0$, the sum of the roots is $-\\frac{b}{a}$ and the product is $\\frac{c}{a}$. Here $a = 3$, $b = -21$, $c = 4$.\nStep 2: Sum: $r + s = -\\frac{-21}{3} = 7$. Product: $rs = \\frac{4}{3}$.\nStep 3: Combine the reciprocals: $\\frac{1}{r} + \\frac{1}{s} = \\frac{r + s}{rs} = \\frac{7}{\\frac{4}{3}} = \\frac{21}{4} = 5.25$.\n\nCheck the setup: the discriminant $(-21)^2 - 4(3)(4) = 441 - 48 = 393 > 0$, so there really are two distinct real solutions. $\\checkmark$\n\n**Common Mistakes:** Dropping the leading coefficient and using $r + s = 21$ or $rs = 4$ instead of dividing each by $a = 3$; writing $\\frac{1}{r} + \\frac{1}{s}$ as $\\frac{1}{r + s}$ rather than $\\frac{r + s}{rs}$; sign error on $-\\frac{b}{a}$ with $b = -21$.\n\n**Test Day Takeaway:** $\\frac{1}{r} + \\frac{1}{s} = \\frac{r + s}{rs}$ — Vieta's formulas ($\\text{sum} = -\\frac{b}{a}$, $\\text{product} = \\frac{c}{a}$) answer it without ever solving the quadratic.",
  skills: ["quadratic-equations", "vietas-formulas", "polynomial-operations"]
}
      ]
    }
  ]
};

export default practiceTest3;
