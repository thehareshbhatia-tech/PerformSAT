// Practice Test 3 - SAT Math
// 2 Modules, 22 questions each (44 total)
// 2026-06 M2 flow diversification. Module 2 follows this test's unique wavy
// difficulty shape: easy at Q1, Q3, Q19 (Q19 is the mid/late breather); medium
// at Q2, Q4, Q5, Q7, Q10, Q11, Q12; hard everywhere else (Q6, 8, 9, 13-18,
// 20-22), with Q21/Q22 as hard closers. Six transformed "pool" hard/medium
// items are infused (line-translation x-intercept, exponential back-solve model,
// right-triangle cosine ratio, radical-substitution equation, margin-of-error
// conclusion, reverse-percent "increase by p%"). Module 1 keeps its ramp; only
// targeted de-cloning applied (easy-block reorder, new linear-cost opener, new
// exponent-radical structure, new Pythagorean triple).

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
  question: "The function $f(t) = 120 + 8t$ models the depth, in centimeters, of water in a tank $t$ minutes after a pump is turned on. What does the number $8$ represent in this context?",
  choices: [
    // distractor: confuses 8 with the initial value (which is 120)
    { id: "A", text: "The depth of the water before the pump is turned on" },
    // distractor: treats 8 as an input value rather than a rate of change
    { id: "B", text: "The depth of the water after $8$ minutes" },
    { id: "C", text: "The increase in water depth, in centimeters, each minute" },
    // distractor: inverts the rate (would be 1/8 minutes per centimeter)
    { id: "D", text: "The number of minutes needed for the depth to increase by $1$ centimeter" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** In $f(t) = 120 + 8t$, the coefficient of $t$ is the rate of change: the depth rises $8$ centimeters every minute.\n\n**The Full Solution:**\nStep 1: The model is linear, $f(t) = b + mt$, with intercept $b = 120$ and slope $m = 8$.\nStep 2: The intercept $120$ is the starting depth (at $t = 0$); the slope $8$ is how much the depth changes per added minute.\nStep 3: So $8$ means the water depth increases by $8$ centimeters each minute, which is choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A: that is the intercept $120$, not the slope $8$.\n* Choice B: treats $8$ as an input ($t = 8$ minutes) instead of the per-minute rate.\n* Choice D: inverts the rate — at $8$ cm per minute it takes only $\\frac{1}{8}$ minute to gain $1$ cm.\n\n**Test Day Takeaway:** In $y = b + mx$, the coefficient of the variable is always the rate of change per one unit of that variable.",
  skills: ["function-interpretation", "linear-functions", "slope"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A salad mix contains spinach and arugula in a ratio of $5$ ounces of spinach to $3$ ounces of arugula. If the total weight of the mix is $72$ ounces, how many ounces of arugula does the mix contain?",
  choices: [
    // distractor: picks the spinach ratio number (5) directly
    { id: "A", text: "$5$" },
    { id: "B", text: "$27$" },
    // distractor: uses 3/5 of total (43.2) instead of 3/8
    { id: "C", text: "$43.2$" },
    // distractor: solves for spinach amount instead of arugula (5/8 of 72 = 45)
    { id: "D", text: "$45$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Arugula is $\\frac{3}{5+3} = \\frac{3}{8}$ of the mix, so arugula $= \\frac{3}{8} \\cdot 72 = 27$ ounces.\n\n**The Full Solution:**\nStep 1: Write the parts as $5k$ spinach and $3k$ arugula, so the ratio stays $5 : 3$.\nStep 2: The total is $5k + 3k = 8k = 72$, so $k = 9$.\nStep 3: Arugula $= 3k = 3 \\cdot 9 = 27$ ounces. Check: spinach $= 45$, and $27 + 45 = 72$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): reports the spinach ratio number instead of solving for the amount.\n* Choice C ($43.2$): uses $\\frac{3}{5}$ of the total instead of $\\frac{3}{8}$.\n* Choice D ($45$): solves for spinach ($\\frac{5}{8} \\cdot 72$) instead of arugula.\n\n**Test Day Takeaway:** When two parts are given as a ratio and the total is known, each fraction's denominator is the SUM of the ratio numbers, not a single part.",
  skills: ["ratios", "word-problems"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "At a community center, $945$ adults are members, and the number of adult members is $42\\%$ of the center's total membership. How many members, in total, does the center have?",
  choices: [
    // distractor: applies the percent forward — 945 \times 0.42 = 396.9
    { id: "A", text: "$397$" },
    // distractor: divides by the complement: 945 / 0.58 \approx 1629
    { id: "B", text: "$1{,}629$" },
    { id: "C", text: "$2{,}250$" },
    // distractor: divides by 0.042 instead of 0.42 (decimal-place slip)
    { id: "D", text: "$22{,}500$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $0.42 \\times \\text{total} = 945$, so total $= \\frac{945}{0.42} = 2{,}250$.\n\n**The Full Solution:**\nStep 1: Let $T$ be the total membership. The adults are $42\\%$ of it, so $0.42 \\cdot T = 945$.\nStep 2: Divide both sides by $0.42$: $T = \\frac{945}{0.42} = 2{,}250$.\nStep 3: Check: $0.42 \\cdot 2{,}250 = 945$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($397$): multiplies $945 \\cdot 0.42$ instead of dividing.\n* Choice B ($1{,}629$): divides by the complement $0.58$, treating $945$ as the non-adult count.\n* Choice D ($22{,}500$): divides by $0.042$ instead of $0.42$ — a decimal slip.\n\n**Test Day Takeaway:** When a percent of an unknown whole is given, divide the part by the percent (as a decimal) to recover the whole.",
  skills: ["percents", "word-problems"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Elena rents a booth at a craft fair for a flat $\\$40$ fee plus $\\$7$ for each batch of honey she sells. Her total cost for one fair, including the booth fee, is $\\$96$. What would Elena's total cost be, in dollars, if she sold $5$ more batches at the same fair (with one booth fee)?",
  choices: [
    // distractor: stops one step early — adds the count 5 as dollars instead of 5 \cdot 7 = 35
    { id: "A", text: "$\\$101$" },
    { id: "B", text: "$\\$131$" },
    // distractor: uses the booth fee ($40) as the per-batch price for the extra batches
    { id: "C", text: "$\\$296$" },
    // distractor: doubles the original $96 (off-by-one wrong base)
    { id: "D", text: "$\\$192$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $5$ more batches at $\\$7$ each add $\\$35$, so the new total is $\\$96 + \\$35 = \\$131$.\n\n**The Full Solution:**\nStep 1: The cost is $7b + 40$. The fixed $\\$40$ booth fee is paid once and does not change.\nStep 2: Selling $5$ more batches adds $5 \\cdot \\$7 = \\$35$ to the variable part.\nStep 3: New total $= \\$96 + \\$35 = \\$131$, which is choice B. (If you solve first, $7b + 40 = 96 \\Rightarrow b = 8$, and $7(13) + 40 = \\$131$.)\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$101$): adds the count $5$ as dollars instead of $5 \\cdot \\$7$.\n* Choice C ($\\$296$): uses the $\\$40$ booth fee as the per-batch price.\n* Choice D ($\\$192$): roughly doubles the original $\\$96$, charging the fixed fee twice.\n\n**Test Day Takeaway:** Linear cost = (rate $\\times$ quantity) + fixed fee. Adding items changes only the rate-times-quantity piece; the fixed fee stays put.",
  skills: ["word-problems", "linear-functions"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $\\dfrac{5x}{8} = \\dfrac{45}{4}$, what is the value of $x - 6$?",
  choices: [
    // distractor: stops one step early — solves for x = 18 but forgets to subtract 6
    { id: "A", text: "$18$" },
    { id: "B", text: "$12$" },
    // distractor: adds 6 instead of subtracting (wrong sign)
    { id: "C", text: "$24$" },
    // distractor: leaves answer at 5x = 90 instead of x
    { id: "D", text: "$90$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Cross-multiply $\\frac{5x}{8} = \\frac{45}{4}$: $20x = 360$, so $x = 18$. Then $x - 6 = 12$.\n\n**The Full Solution:**\nStep 1: Cross-multiply: $4 \\cdot 5x = 8 \\cdot 45 \\Rightarrow 20x = 360 \\Rightarrow x = 18$.\nStep 2: The question asks for $x - 6$, not $x$: $18 - 6 = 12$, which is choice B.\nStep 3: Check: $\\frac{5(18)}{8} = \\frac{90}{8} = \\frac{45}{4}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($18$): solves for $x$ but forgets to subtract $6$.\n* Choice C ($24$): adds $6$ to $x$ instead of subtracting.\n* Choice D ($90$): stops at $5x = 90$ without dividing.\n\n**Test Day Takeaway:** Re-read the last line before bubbling. The question often wants a shifted quantity ($x - 6$), not the variable itself.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The value of an investment account is modeled by $A(t) = 5000(1.06)^t$, where $t$ is the number of years since the account was opened. What is the best interpretation of the number $1.06$ in this expression?",
  choices: [
    // distractor: confuses percentage growth with a fixed dollar amount
    { id: "A", text: "The account earns $\\$1.06$ in interest each year" },
    { id: "B", text: "The account value increases by $6\\%$ each year" },
    // distractor: interprets 1.06 as 106% growth instead of 6% growth (wrong base)
    { id: "C", text: "The account value increases by $106\\%$ each year" },
    // distractor: confuses the growth factor with the account value
    { id: "D", text: "The account will be worth $\\$1.06$ after one year" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The base $1.06 = 1 + 0.06$ means a $6\\%$ increase each year.\n\n**The Full Solution:**\nStep 1: The model fits $A(t) = P_0(1 + r)^t$, where the base $1 + r$ is the yearly growth factor.\nStep 2: Here $1 + r = 1.06$, so $r = 0.06 = 6\\%$.\nStep 3: Each year the value is multiplied by $1.06$, i.e. it grows by $6\\%$, which is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A: confuses a percentage rate with a flat dollar amount.\n* Choice C: reads $1.06$ as $106\\%$ growth; the $1$ keeps the original, the $0.06$ is the $6\\%$ growth.\n* Choice D: confuses the growth factor with the account's value after one year.\n\n**Test Day Takeaway:** In $P(1 + r)^t$, the growth rate is the base minus $1$, written as a percent.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A solid right circular cylinder has a radius of $3$ inches and a height of $8$ inches. The volume of the cylinder, in cubic inches, can be expressed as $k\\pi$. What is the value of $k$?",
  correctAnswer: "72",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $72$.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (3)^2 (8) = 72\\pi$, so $k = 72$.\n\n**The Full Solution:**\nStep 1: The volume of a right circular cylinder is $V = \\pi r^2 h$.\nStep 2: With $r = 3$ and $h = 8$: $V = \\pi (3)^2 (8) = \\pi (9)(8) = 72\\pi$ cubic inches.\nStep 3: The volume is written as $k\\pi$, so $k = 72$.\n\n**Common Mistakes:** Forgetting to square the radius gives $\\pi (3)(8) = 24\\pi$, so $k = 24$; using the cone formula $\\frac{1}{3}\\pi r^2 h$ also lands on $24$.\n\n**Test Day Takeaway:** For a cylinder, square the radius first, then multiply by the height: $V = \\pi r^2 h$. It is on the Reference Sheet.",
  skills: ["volume", "geometry"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "Line $j$ passes through the origin and is parallel to the line $4x + 5y = 20$. What is the slope of line $j$? Express your answer as a fraction.",
  correctAnswer: "-4/5",
  explanation: "**SAT Pattern: Parallel Lines and Standard Form**\n\n**The correct answer is $-\\frac{4}{5}$.**\n\n**The Fast Way (~15s):** Solve $4x + 5y = 20$ for $y$: $y = -\\frac{4}{5}x + 4$. Parallel lines share this slope, so line $j$ has slope $-\\frac{4}{5}$.\n\n**The Full Solution:**\nStep 1: Convert to slope-intercept form: $5y = -4x + 20 \\Rightarrow y = -\\frac{4}{5}x + 4$.\nStep 2: The slope of the given line is $-\\frac{4}{5}$.\nStep 3: Parallel lines have equal slopes, so line $j$ also has slope $-\\frac{4}{5}$. (Passing through the origin only fixes its intercept at $0$, not its slope.)\n\n**Common Mistakes:** Dropping the negative sign and writing $\\frac{4}{5}$; using the negative reciprocal $\\frac{5}{4}$, which is the slope of a perpendicular line.\n\n**Test Day Takeaway:** Parallel lines have the same slope. Rewrite in $y = mx + b$ form and read off $m$.",
  skills: ["slope", "linear-functions"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The system of equations below has the solution $(x, y)$.\n\n$2x + 5y = -3$\n$3x - 5y = 33$\n\nWhat is the value of $y$?",
  choices: [
    { id: "A", text: "$-3$" },
    // distractor: makes a sign error in subtraction step
    { id: "B", text: "$-1$" },
    // distractor: gets 5y = 5 instead of 5y = -15 (wrong sign)
    { id: "C", text: "$1$" },
    // distractor: stops one step early — reports the value of x instead of y
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Add the equations to cancel $y$: $5x = 30$, so $x = 6$. Then $2(6) + 5y = -3 \\Rightarrow 5y = -15 \\Rightarrow y = -3$.\n\n**The Full Solution:**\nStep 1: The $y$-terms are $+5y$ and $-5y$ (opposites), so add the equations: $(2x + 5y) + (3x - 5y) = -3 + 33 \\Rightarrow 5x = 30 \\Rightarrow x = 6$.\nStep 2: Substitute into $2x + 5y = -3$: $12 + 5y = -3 \\Rightarrow 5y = -15 \\Rightarrow y = -3$, which is choice A.\nStep 3: Check the second equation: $3(6) - 5(-3) = 18 + 15 = 33$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-1$): a sign slip giving $5y = -5$.\n* Choice C ($1$): solving $5y = 5$ with the wrong sign.\n* Choice D ($6$): reports $x$, the value found first, instead of $y$.\n\n**Test Day Takeaway:** When one variable's coefficients are opposites, add the equations to eliminate it — then confirm which variable the question wants.",
  skills: ["systems-of-equations", "solving-equations"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $3(4x - 1) + 2(x + 5) = 63$, what is the value of $x$?",
  correctAnswer: "4",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~15s):** Distribute: $12x - 3 + 2x + 10 = 63 \\Rightarrow 14x + 7 = 63 \\Rightarrow 14x = 56 \\Rightarrow x = 4$.\n\n**The Full Solution:**\nStep 1: Distribute each coefficient: $3(4x - 1) = 12x - 3$ and $2(x + 5) = 2x + 10$.\nStep 2: Combine like terms: $12x + 2x = 14x$ and $-3 + 10 = 7$, giving $14x + 7 = 63$.\nStep 3: Isolate $x$: $14x = 56 \\Rightarrow x = 4$. Check: $3(15) + 2(9) = 45 + 18 = 63$. $\\checkmark$\n\n**Common Mistakes:** Distributing to only the first term in each parenthesis; mis-adding $-3 + 10$ as $7$ versus $-7$ or $13$.\n\n**Test Day Takeaway:** Distribute every coefficient across every term, combine like terms, then isolate the variable.",
  skills: ["solving-equations"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The median of the data set $\\{3, 7, 10, x, 18, 22\\}$ (arranged in order) is $12$. What is the value of $x$?",
  choices: [
    // distractor: assumes x must equal the median
    { id: "A", text: "$12$" },
    { id: "B", text: "$14$" },
    // distractor: averages 10 and x but solves the equation incorrectly
    { id: "C", text: "$15$" },
    // distractor: computes 18 - 2 = 16 from nearby values (off-by-one)
    { id: "D", text: "$16$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Median Calculation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** With $6$ ordered values, the median is the average of the $3$rd and $4$th: $\\frac{10 + x}{2} = 12 \\Rightarrow x = 14$.\n\n**The Full Solution:**\nStep 1: An even-sized data set has its median midway between the two middle values. For $6$ values, those are the $3$rd ($10$) and $4$th ($x$).\nStep 2: Set the average equal to the given median: $\\frac{10 + x}{2} = 12$.\nStep 3: Solve: $10 + x = 24 \\Rightarrow x = 14$, which is choice B. The order $3, 7, 10, 14, 18, 22$ holds. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): assumes the median value $12$ must be $x$ itself.\n* Choice C ($15$): solves $\\frac{10 + x}{2} = 12.5$, misreading the median.\n* Choice D ($16$): pulled from nearby values rather than the median equation.\n\n**Test Day Takeaway:** For an even count of data points, the median is the average of the two middle values — set that average equal to the given median and solve.",
  skills: ["statistics"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The line passing through the points $(-2, 7)$ and $(4, -5)$ can be written in the form $y = mx + b$. What is the value of $b$?",
  choices: [
    // distractor: uses the y-value of the second point as the intercept
    { id: "A", text: "$-5$" },
    // distractor: makes an arithmetic error in solving for b
    { id: "B", text: "$1$" },
    { id: "C", text: "$3$" },
    // distractor: uses the y-value of the first point as the intercept
    { id: "D", text: "$7$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Slope $= \\frac{-5 - 7}{4 - (-2)} = \\frac{-12}{6} = -2$. Plug $(-2, 7)$ in: $7 = -2(-2) + b = 4 + b$, so $b = 3$.\n\n**The Full Solution:**\nStep 1: Find the slope: $m = \\frac{-5 - 7}{4 - (-2)} = \\frac{-12}{6} = -2$.\nStep 2: Use $y = mx + b$ with the point $(-2, 7)$: $7 = -2(-2) + b \\Rightarrow 7 = 4 + b \\Rightarrow b = 3$, which is choice C.\nStep 3: Check with $(4, -5)$: $-2(4) + 3 = -8 + 3 = -5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): uses the second point's $y$-value as the intercept.\n* Choice B ($1$): an arithmetic slip while solving for $b$.\n* Choice D ($7$): uses the first point's $y$-value as the intercept.\n\n**Test Day Takeaway:** Find the slope first, then substitute either point into $y = mx + b$ and solve for $b$.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  question: "A data set is best modeled by the equation $y = 2.4x - 8.6$. Based on this model, what is the predicted change in $y$ when $x$ increases by $5$?",
  choices: [
    // distractor: evaluates y at x = 5 (3.4) — confuses single y-value with change
    { id: "A", text: "$3.4$" },
    // distractor: confuses the change in x (5) with the change in y
    { id: "B", text: "$5.0$" },
    { id: "C", text: "$12.0$" },
    // distractor: adds the intercept (2.4*5 + 8.6 = 20.6) — wrong base
    { id: "D", text: "$20.6$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The slope $2.4$ is the change in $y$ per $1$-unit change in $x$. For $5$ units: $2.4 \\times 5 = 12.0$.\n\n**The Full Solution:**\nStep 1: In $y = 2.4x - 8.6$, the slope $2.4$ tells you how much $y$ moves for each $1$-unit rise in $x$.\nStep 2: A change in $y$ is slope times change in $x$: $\\Delta y = 2.4 \\times 5 = 12.0$. This matches choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3.4$): evaluated $y$ at $x = 5$, computing $2.4(5) - 8.6 = 3.4$ — that is a single $y$-value, not the change.\n* Choice B ($5.0$): just echoed the change in $x$ instead of scaling it by the slope.\n* Choice D ($20.6$): added the intercept to the change, computing $2.4(5) + 8.6 = 20.6$.\n\n**Test Day Takeaway:** The predicted change in $y$ equals slope $\\times$ change in $x$. The $y$-intercept never enters a change calculation.",
  skills: ["scatterplots", "slope", "function-interpretation"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "\n\n| | Owns a Pet | Does Not Own a Pet | Total |\n|---|---|---|---|\n| Lives Alone | $34$ | $46$ | $80$ |\n| Lives with Others | $81$ | $39$ | $120$ |\n| Total | $115$ | $85$ | $200$ |\n\nWhat percentage of people who live alone own a pet?",
  choices: [
    // distractor: divides 34 by grand total 200 (uses wrong base)
    { id: "A", text: "$17\\%$" },
    // distractor: divides by total pet owners 115 instead of row total
    { id: "B", text: "$30\\%$" },
    { id: "C", text: "$42.5\\%$" },
    // distractor: gives the percentage who do NOT own a pet (off-by-complement)
    { id: "D", text: "$57.5\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Two-Way Table Conditional Percentage**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** \"Of those who live alone\" sets the denominator to the row total $80$. Pet owners in that row: $34$. So $\\frac{34}{80} = 0.425 = 42.5\\%$.\n\n**The Full Solution:**\nStep 1: Restrict to people who live alone — that row totals $80$.\nStep 2: Among them, $34$ own a pet. Divide: $\\frac{34}{80} = 0.425 = 42.5\\%$. This matches choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($17\\%$): divided by the grand total $200$ instead of the row total: $\\frac{34}{200} = 17\\%$.\n* Choice B ($30\\%$): divided by total pet owners $115$: $\\frac{34}{115} \\approx 30\\%$ — wrong base.\n* Choice D ($57.5\\%$): gave the percentage who do NOT own a pet: $\\frac{46}{80} = 57.5\\%$.\n\n**Test Day Takeaway:** \"Of group X\" fixes the denominator to group X's total — here the \"Lives Alone\" row ($80$), never the grand total.",
  skills: ["two-way-tables", "probability", "percents"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $\\left(\\dfrac{x^4}{\\sqrt[3]{x}}\\right)^3 = x^k$ for $x > 0$, what is the value of $k$?",
  correctAnswer: "11",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~15s):** Inside: $\\frac{x^4}{x^{\\frac{1}{3}}} = x^{4 - \\frac{1}{3}} = x^{\\frac{11}{3}}$. Cube it: $\\left(x^{\\frac{11}{3}}\\right)^3 = x^{11}$, so $k = 11$.\n\n**The Full Solution:**\nStep 1: Rewrite the cube root as a power: $\\sqrt[3]{x} = x^{\\frac{1}{3}}$.\nStep 2: Divide by subtracting exponents: $\\frac{x^4}{x^{\\frac{1}{3}}} = x^{4 - \\frac{1}{3}} = x^{\\frac{11}{3}}$.\nStep 3: Apply the outer exponent by multiplying: $\\left(x^{\\frac{11}{3}}\\right)^3 = x^{\\frac{11}{3} \\cdot 3} = x^{11}$. So $k = 11$.\n\n**Common Mistakes:** Writing $\\sqrt[3]{x} = x^3$ instead of $x^{\\frac{1}{3}}$; adding exponents when raising a power to a power (you multiply) or adding when dividing (you subtract).\n\n**Test Day Takeaway:** Convert every radical to a fractional exponent first, then divide by subtracting and raise-to-a-power by multiplying.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $27^{x-1} = 9^{2x+3}$, what is the value of $x$?",
  correctAnswer: "-9",
  explanation: "**SAT Pattern: Exponential Equations with Common Base**\n\n**The correct answer is $-9$.**\n\n**The Fast Way (~20s):** $27 = 3^3$ and $9 = 3^2$, so $3^{3(x-1)} = 3^{2(2x+3)}$. Match exponents: $3x - 3 = 4x + 6 \\Rightarrow x = -9$.\n\n**The Full Solution:**\nStep 1: Rewrite both sides over base $3$: $27^{x-1} = 3^{3(x-1)} = 3^{3x-3}$ and $9^{2x+3} = 3^{2(2x+3)} = 3^{4x+6}$.\nStep 2: Equal bases force equal exponents: $3x - 3 = 4x + 6$.\nStep 3: Solve: $-9 = x$.\nCheck: left exponent $3(-9) - 3 = -30$; right exponent $4(-9) + 6 = -30$. Both equal $3^{-30}$. $\\checkmark$\n\n**Common Mistakes:** Writing $9 = 3^3$ instead of $3^2$; mis-distributing $2(2x + 3)$ as $4x + 3$ instead of $4x + 6$.\n\n**Test Day Takeaway:** When both sides can be written over one base, drop the bases and set the exponents equal.",
  skills: ["exponent-rules", "solving-equations"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Triangle $PQR$ shown is a right triangle with the right angle at $Q$, $PQ = 5\\sqrt{3}$, and $QR = 5$. What is the area of triangle $PQR$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["R", "Q", "P"],
      sideLabels: ["5", "5√3", ""],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: drops the sqrt(3), giving 1/2 * 5 * 5 = 25/2
    { id: "A", text: "$\\dfrac{25}{2}$" },
    { id: "B", text: "$\\dfrac{25\\sqrt{3}}{2}$" },
    // distractor: forgets both 1/2 and sqrt(3), giving 5*5 = 25
    { id: "C", text: "$25$" },
    // distractor: forgets the 1/2, giving 5sqrt(3) * 5 = 25sqrt(3)
    { id: "D", text: "$25\\sqrt{3}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle Area with Surds**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The right angle at $Q$ makes $PQ = 5\\sqrt{3}$ and $QR = 5$ the legs. Area $= \\frac{1}{2}(5\\sqrt{3})(5) = \\frac{25\\sqrt{3}}{2}$.\n\n**The Full Solution:**\nStep 1: In a right triangle the two legs serve as base and height, so area $= \\frac{1}{2} \\times \\text{leg} \\times \\text{leg}$.\nStep 2: The right angle sits at $Q$, so the legs are $PQ = 5\\sqrt{3}$ and $QR = 5$.\nStep 3: Area $= \\frac{1}{2}(5\\sqrt{3})(5) = \\frac{1}{2}(25\\sqrt{3}) = \\frac{25\\sqrt{3}}{2}$. This matches choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{25}{2}$): computed $\\frac{1}{2}(5)(5)$ and dropped the $\\sqrt{3}$.\n* Choice C ($25$): multiplied the legs $5\\sqrt{3} \\cdot 5$ but lost both the $\\frac{1}{2}$ and the radical (treating $\\sqrt{3}$ loosely).\n* Choice D ($25\\sqrt{3}$): forgot the factor of $\\frac{1}{2}$, leaving $5\\sqrt{3} \\times 5$.\n\n**Test Day Takeaway:** The two legs of a right triangle are the base and height. Keep the $\\frac{1}{2}$ and carry the radical through untouched.",
  skills: ["triangles", "area", "radical-expressions"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A right triangular sail has legs of length $a$ and $a + 7$ and a hypotenuse of length $17$. What is the perimeter, in the same units, of the sail?",
  diagram: {
    type: "rightTriangle",
    params: {
      sideLabels: ["a", "a + 7", "17"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: stops one step early — sums only the two legs (8 + 15 = 23) without the hypotenuse
    { id: "A", text: "$23$" },
    // distractor: uses a + 7 = 7 (off-by-one) and gets 8 + 7 + 17 = 32
    { id: "B", text: "$32$" },
    { id: "C", text: "$40$" },
    // distractor: forgets to subtract one leg — adds 8 + 15 + 17 + 8 (double-counts a)
    { id: "D", text: "$48$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Hypotenuse $17$ signals the $8$-$15$-$17$ triple. So $a = 8$ and $a + 7 = 15$, giving perimeter $8 + 15 + 17 = 40$.\n\n**The Full Solution:**\nStep 1: Apply the Pythagorean theorem: $a^2 + (a + 7)^2 = 17^2$.\nStep 2: Expand: $a^2 + a^2 + 14a + 49 = 289 \\Rightarrow 2a^2 + 14a - 240 = 0 \\Rightarrow a^2 + 7a - 120 = 0$.\nStep 3: Factor: $(a + 15)(a - 8) = 0$, so $a = 8$ (the negative root makes no sense for a length). Then $a + 7 = 15$.\nStep 4: Perimeter $= 8 + 15 + 17 = 40$. This matches choice C. Check: $8^2 + 15^2 = 64 + 225 = 289 = 17^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($23$): added only the two legs $8 + 15$ and forgot the hypotenuse.\n* Choice B ($32$): used the wrong second leg ($a + 7 = 7$ instead of $15$): $8 + 7 + 17 = 32$.\n* Choice D ($48$): double-counted a leg, computing $8 + 15 + 17 + 8 = 48$.\n\n**Test Day Takeaway:** Memorize the common triples ($3$-$4$-$5$, $5$-$12$-$13$, $7$-$24$-$25$, $8$-$15$-$17$). A hypotenuse of $17$ points straight to $8$-$15$-$17$.",
  skills: ["triangles", "pythagorean", "perimeter"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f(x) = a(x + 2)^2 - 10$ passes through the point $(1, 8)$. What is the $y$-intercept of $f(x)$?",
  choices: [
    { id: "A", text: "$-2$" },
    // distractor: guesses the y-intercept is zero
    { id: "B", text: "$0$" },
    // distractor: uses a = 1 instead of a = 2 (off-by-one in solving)
    { id: "C", text: "$-6$" },
    // distractor: gets right magnitude but wrong sign (sign error)
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Quadratic Vertex Form Application**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Plug in $(1, 8)$: $8 = a(3)^2 - 10 = 9a - 10$, so $a = 2$. Then $f(0) = 2(2)^2 - 10 = -2$.\n\n**The Full Solution:**\nStep 1: Substitute the point into $f(x) = a(x + 2)^2 - 10$: $8 = a(1 + 2)^2 - 10 = 9a - 10$.\nStep 2: Solve for $a$: $18 = 9a \\Rightarrow a = 2$.\nStep 3: The $y$-intercept is $f(0) = 2(0 + 2)^2 - 10 = 2(4) - 10 = -2$. This matches choice A. Check: $f(1) = 2(3)^2 - 10 = 8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($0$): guessed the intercept is zero without solving for $a$.\n* Choice C ($-6$): used $a = 1$ instead of $a = 2$: $1(4) - 10 = -6$.\n* Choice D ($6$): got the right magnitude but flipped the sign.\n\n**Test Day Takeaway:** Pin down $a$ from the given point first, then evaluate $f(0)$ to read off the $y$-intercept.",
  skills: ["vertex-form", "quadratic-equations", "coordinate-geometry"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $4x^2 + 12x + 9 = 0$ and $x = a$ is the solution, what is the value of $2a + 3$?",
  choices: [
    // distractor: computes 2(-3/2) = -3 but forgets to add 3
    { id: "A", text: "$-3$" },
    { id: "B", text: "$0$" },
    // distractor: gives |a| = 3/2 as the answer
    { id: "C", text: "$\\dfrac{3}{2}$" },
    // distractor: reads the constant from the factored form (3) as the answer
    { id: "D", text: "$3$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Perfect Square Trinomial**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $4x^2 + 12x + 9 = (2x + 3)^2 = 0$, so $2x + 3 = 0$. The question asks for $2a + 3$, which is exactly that expression — it equals $0$.\n\n**The Full Solution:**\nStep 1: Recognize the perfect square: $4x^2 + 12x + 9 = (2x)^2 + 2(2x)(3) + 3^2 = (2x + 3)^2$.\nStep 2: Set it to zero: $(2x + 3)^2 = 0 \\Rightarrow 2x + 3 = 0 \\Rightarrow x = -\\frac{3}{2}$.\nStep 3: With $a = -\\frac{3}{2}$, $2a + 3 = 2\\left(-\\frac{3}{2}\\right) + 3 = -3 + 3 = 0$. This matches choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): computed $2\\left(-\\frac{3}{2}\\right) = -3$ but forgot to add $3$.\n* Choice C ($\\frac{3}{2}$): reported $|a|$ rather than the requested expression.\n* Choice D ($3$): copied the constant from the factored form as the answer.\n\n**Test Day Takeaway:** When a quadratic is a perfect square, the factor $(2x + 3)$ is zero — and if the question asks for $2x + 3$ itself, you are already done.",
  skills: ["factoring", "quadratic-equations"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The quadratic equation $2x^2 + bx + 18 = 0$ has exactly one real solution. If $b > 0$, what is the value of $b$?",
  choices: [
    // distractor: computes sqrt(36) = 6 using 4(2)(18) = 36 instead of 144
    { id: "A", text: "$6$" },
    // distractor: solves b^2/(4a) = 18 incorrectly
    { id: "B", text: "$9$" },
    { id: "C", text: "$12$" },
    // distractor: confuses b with c = 18 (wrong base)
    { id: "D", text: "$18$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Discriminant Equals Zero**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Exactly one solution means discriminant $= 0$: $b^2 - 4(2)(18) = 0 \\Rightarrow b^2 = 144 \\Rightarrow b = 12$ (since $b > 0$).\n\n**The Full Solution:**\nStep 1: A quadratic has exactly one real solution when $b^2 - 4ac = 0$.\nStep 2: With $a = 2$ and $c = 18$: $b^2 - 4(2)(18) = b^2 - 144 = 0$.\nStep 3: So $b^2 = 144 \\Rightarrow b = \\pm 12$. The condition $b > 0$ selects $b = 12$. This matches choice C.\nCheck: $2x^2 + 12x + 18 = 0 \\Rightarrow x^2 + 6x + 9 = (x + 3)^2 = 0$, one solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): took $\\sqrt{36}$, using $4(2)(18)$ as $36$ instead of $144$.\n* Choice B ($9$): mishandled the discriminant and solved incorrectly.\n* Choice D ($18$): confused $b$ with the constant $c = 18$.\n\n**Test Day Takeaway:** \"Exactly one real solution\" is the trigger for $b^2 - 4ac = 0$. Solve, then honor any sign constraint.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The circle $(x - 2)^2 + (y + 3)^2 = 36$ and the line $y = -3$ intersect at two points. What is the distance between these two points?",
  choices: [
    // distractor: gives the radius instead of the diameter
    { id: "A", text: "$6$" },
    // distractor: arithmetic slip — computes 8 + 2 = 10
    { id: "B", text: "$10$" },
    { id: "C", text: "$12$" },
    // distractor: gives r^2 = 36 instead of the distance
    { id: "D", text: "$36$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Circle-Line Intersection**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The center is $(2, -3)$, and $y = -3$ runs through that center, so the chord is a diameter. Radius $\\sqrt{36} = 6$, diameter $= 12$.\n\n**The Full Solution:**\nStep 1: The circle has center $(2, -3)$ and radius $\\sqrt{36} = 6$.\nStep 2: Substitute $y = -3$: $(x - 2)^2 + (-3 + 3)^2 = 36 \\Rightarrow (x - 2)^2 = 36 \\Rightarrow x - 2 = \\pm 6$, so $x = 8$ or $x = -4$.\nStep 3: The points are $(8, -3)$ and $(-4, -3)$; distance $= 8 - (-4) = 12$. This matches choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): reported the radius instead of the full diameter.\n* Choice B ($10$): arithmetic slip, adding $8 + 2$ instead of $8 + 4$.\n* Choice D ($36$): gave $r^2 = 36$ rather than the distance.\n\n**Test Day Takeaway:** A line through a circle's center cuts a diameter, so the chord length is $2r$. Here that is $12$.",
  skills: ["circle-equations", "coordinate-geometry"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 3 — Math Module 2 (22 questions)
// 2026-06 flow diversification + de-clone pass. Wavy shape unique to this test:
//   easy at Q1, Q3, Q19 (Q19 = mid/late breather);
//   medium at Q2, Q4, Q5, Q7, Q10, Q11, Q12;
//   hard everywhere else (Q6, Q8, Q9, Q13-Q18, Q20-Q22), Q21/Q22 hard closers.
//   E count = 3 (Q1, Q3, Q19); M count = 7 (Q2, Q4, Q5, Q7, Q10, Q11, Q12);
//   H count = 12 (Q6, Q8, Q9, Q13-Q18, Q20-Q22). Total 22.
// 2026-06 de-clone edits (this pass):
//   Q1 REPLACED: was Function-Evaluation P(7)=18d+60 (below opener bar + near-dup of
//     the Q11 18d-model surface) -> now a bare Pythagorean surd-hypotenuse opener
//     (legs 6, 9 -> 3sqrt13); two-step (theorem + surd simplification), distinct from
//     Q20's trig-ratio skeleton.
//   Q5 UPGRADED IN PLACE: was equal-denominator (2x+5)/3=(x+14)/3 (collapsed to one
//     step) -> now unequal denominators (3x-1)/4=(x+7)/2 -> x=15 (cross-multiply,
//     distribute, collect: two real steps). Still easy/band 3 opener.
//   Q11 RE-ANGLED: retired the 18d+240 surface (the old Q1 near-dup twin) -> new
//     kayak-rental linear model 12h+48=180 -> h=11, same solve-for-input deliverable,
//     all visible numbers changed.
//   Q18 NUDGED (ip-risk): radical-substitution skeleton kept; constant moved to the
//     LHS via subtraction and K changed 24 -> 40; answer -sqrt(c^2+40^2); all four
//     choice forms re-derived.
//   Q19 RE-ANGLED (near-dup / cross-test clone in T7): reverse-percent breather ROLE
//     kept; "increase by 300% -> 84 -> 21" changed to "increase by 150% -> 120 -> 48"
//     (factor 2.5, distinct from source E#19's 400%->60->12 and from Q11's final form).
//   Q20 POLISHED: diagram bottom-right vertex 18 -> 17.86 (= sqrt(319)) so the drawn
//     horizontal leg matches the 9-20 right triangle; explanation unchanged (already
//     full-format and correct, cos x = 9/20 = 0.45).
// Five transformed pool items remain infused: E#3 margin-of-error (Q7), D-p7#25
// exponential back-solve (Q8), D-p2#24 line-translation x-intercept (Q13), D-p41#26
// radical substitution (Q18, now nudged off-source), D-p23#20 right-triangle cosine
// ratio (Q20). Retired archetypes: classify-function-type, two-way-table conditional
// probability, outlier effect, exponential percent interpretation, reverse-percent
// chain, exponent-radical (p+q), coterminal tangent, no-solution find-k,
// infinitely-many find-k, budget-floor inequality, residual, direct function
// evaluation (old Q1).

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A right triangle has legs of length $6$ centimeters and $9$ centimeters. What is the length, in centimeters, of the hypotenuse?",
  choices: [
    // distractor: adds the two leg lengths directly instead of using the Pythagorean theorem
    { id: "A", text: "$15$" },
    // distractor: subtracts the squares (81 - 36 = 45) instead of adding them
    { id: "B", text: "$3\\sqrt{5}$" },
    { id: "C", text: "$3\\sqrt{13}$" },
    // distractor: forgets to take the square root and reports the radicand 36 + 81 = 117
    { id: "D", text: "$117$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $h^2 = 6^2 + 9^2 = 117$, so $h = \\sqrt{117} = \\sqrt{9 \\cdot 13} = 3\\sqrt{13}$.\n\n**The Full Solution:**\nStep 1: The hypotenuse satisfies $h^2 = 6^2 + 9^2 = 36 + 81 = 117$.\nStep 2: Take the root: $h = \\sqrt{117}$. Since $117 = 9 \\cdot 13$ and $9$ is a perfect square, $\\sqrt{117} = \\sqrt{9}\\,\\sqrt{13} = 3\\sqrt{13}$ centimeters. This matches choice C.\nCheck: $(3\\sqrt{13})^2 = 9 \\cdot 13 = 117 = 6^2 + 9^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): added the legs $6 + 9$ instead of combining their squares under a root.\n* Choice B ($3\\sqrt{5}$): subtracted the squares ($81 - 36 = 45$), giving $\\sqrt{45} = 3\\sqrt{5}$ — that solves for a missing leg, not the hypotenuse.\n* Choice D ($117$): reported the radicand without taking the square root.\n\n**Test Day Takeaway:** The hypotenuse is $\\sqrt{a^2 + b^2}$ — add the squared legs, then simplify by pulling out perfect-square factors.",
  skills: ["triangles", "pythagorean", "radical-expressions"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "On a coral-reef survey, divers count an average of $14$ species along every $8$ meters of a transect line. At this rate, how many species would they expect to count along a transect that is $52$ meters long?",
  choices: [
    // distractor: applies the inverse rate (8 species per 14 meters)
    { id: "A", text: "$29.7$" },
    // distractor: adds the difference 52 - 8 = 44 to 14
    { id: "B", text: "$58$" },
    { id: "C", text: "$91$" },
    // distractor: multiplies 14 by 8 instead of scaling by 52/8
    { id: "D", text: "$112$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Rate is $\\frac{14}{8} = 1.75$ species per meter. Over $52$ meters: $1.75 \\times 52 = 91$.\n\n**The Full Solution:**\nStep 1: Set up the proportion $\\frac{14}{8} = \\frac{s}{52}$.\nStep 2: Cross-multiply: $8s = 14 \\cdot 52 = 728$.\nStep 3: Solve: $s = \\frac{728}{8} = 91$. This matches choice C. Check: $\\frac{91}{52} = 1.75 = \\frac{14}{8}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($29.7$): inverted the rate, using $\\frac{8}{14}$ per meter.\n* Choice B ($58$): added the extra length ($52 - 8 = 44$) to $14$ instead of scaling.\n* Choice D ($112$): multiplied $14 \\cdot 8$ rather than scaling by $\\frac{52}{8}$.\n\n**Test Day Takeaway:** A per-unit rate scales by multiplication: (rate) $\\times$ (new amount). Build the proportion in the right direction so you never invert the ratio.",
  skills: ["ratios", "proportions", "word-problems"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "What is the smallest integer $n$ for which $4n + 7 > 35$?",
  choices: [
    // distractor: uses ≥ instead of strict > and gives the boundary
    { id: "A", text: "$7$" },
    { id: "B", text: "$8$" },
    // distractor: stops one step early at 4n > 28 without dividing
    { id: "C", text: "$28$" },
    // distractor: applies inverse op - uses 35 + 7 instead of subtracting
    { id: "D", text: "$42$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Smallest Integer in an Inequality**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $4n + 7 > 35 \\Rightarrow 4n > 28 \\Rightarrow n > 7$. The smallest integer strictly greater than $7$ is $8$.\n\n**The Full Solution:**\nStep 1: Subtract $7$ from both sides: $4n > 28$.\nStep 2: Divide by $4$: $n > 7$.\nStep 3: Strictly greater than $7$ excludes $7$ itself, so the smallest integer that works is $8$.\n\nCheck: at $n = 8$, $4(8) + 7 = 39 > 35$ $\\checkmark$. At $n = 7$, $4(7) + 7 = 35$, which is not strictly greater.\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): treats $>$ as $\\ge$ and reports the boundary value, but $7$ gives exactly $35$, not more.\n* Choice C ($28$): stops at $4n > 28$ and reports $4n$ instead of solving for $n$.\n* Choice D ($42$): adds $7$ to $35$ instead of subtracting it.\n\n**Test Day Takeaway:** A strict $>$ excludes the boundary. After solving down to $n > k$, the smallest integer answer is $k + 1$.",
  skills: ["solving-equations", "inequalities"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Over $5$ days, a food truck completed routes covering $42$, $51$, $45$, $39$, and one more distance, all in kilometers. If the mean distance over the $5$ days was $48$ kilometers, what was the distance covered on the fifth day, in kilometers?",
  choices: [
    // distractor: averages only the four listed values (177/4 ≈ 44.25, rounded)
    { id: "A", text: "$44$" },
    // distractor: subtracts the mean from the sum of the four listed (177 - 48)
    { id: "B", text: "$129$" },
    { id: "C", text: "$63$" },
    // distractor: uses the mean itself as the missing value
    { id: "D", text: "$48$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Mean from List**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Total needed $= 5 \\times 48 = 240$. The four known distances sum to $42 + 51 + 45 + 39 = 177$. Missing day $= 240 - 177 = 63$ km.\n\n**The Full Solution:**\nStep 1: Mean times count gives the total: $5 \\times 48 = 240$ kilometers.\nStep 2: Add the four known distances: $42 + 51 + 45 + 39 = 177$.\nStep 3: The fifth distance is the total minus the known sum: $240 - 177 = 63$ kilometers.\n\nCheck: $\\dfrac{42 + 51 + 45 + 39 + 63}{5} = \\dfrac{240}{5} = 48$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($44$): averages only the four listed values instead of solving for the missing fifth.\n* Choice B ($129$): subtracts the mean from the partial sum rather than the partial sum from the total.\n* Choice D ($48$): assumes the missing value equals the mean, which only holds if every value were already $48$.\n\n**Test Day Takeaway:** To recover a missing value from a known mean, multiply the mean by the count to get the total, then subtract the sum of the known values.",
  skills: ["statistics", "mean", "word-problems"]
},
{
  id: 5,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $\\dfrac{3x - 1}{4} = \\dfrac{x + 7}{2}$, what value of $x$ satisfies this equation?",
  correctAnswer: "15",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~25s):** Cross-multiply: $2(3x - 1) = 4(x + 7) \\Rightarrow 6x - 2 = 4x + 28 \\Rightarrow 2x = 30 \\Rightarrow x = 15$.\n\n**The Full Solution:**\nStep 1: The denominators differ ($4$ and $2$), so cross-multiply: $2(3x - 1) = 4(x + 7)$.\nStep 2: Distribute both sides: $6x - 2 = 4x + 28$.\nStep 3: Collect like terms: $6x - 4x = 28 + 2 \\Rightarrow 2x = 30$.\nStep 4: Divide: $x = 15$.\n\nCheck: left $= \\dfrac{3(15) - 1}{4} = \\dfrac{44}{4} = 11$; right $= \\dfrac{15 + 7}{2} = \\dfrac{22}{2} = 11$ $\\checkmark$.\n\n**Common Mistakes:** Setting the numerators equal directly ($3x - 1 = x + 7$), which only works when denominators match; or forgetting to distribute, writing $2(3x - 1)$ as $6x - 1$ instead of $6x - 2$.\n\n**Test Day Takeaway:** When two fractions with different denominators are set equal, cross-multiply first, then distribute and collect like terms before isolating the variable.",
  skills: ["solving-equations"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Consider the system of equations:\n\n$3x + 4y = 18$\n$5x + 2y = 16$\n\nWhat is the value of $x + y$?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~25s):** Multiply equation 2 by $2$: $10x + 4y = 32$. Subtract equation 1 to kill $y$: $7x = 14 \\Rightarrow x = 2$, then $y = 3$. So $x + y = 5$.\n\n**The Full Solution:**\nStep 1: Match the $y$-coefficients. Multiply $5x + 2y = 16$ by $2$: $10x + 4y = 32$.\nStep 2: Subtract equation 1 from this: $(10x + 4y) - (3x + 4y) = 32 - 18 \\Rightarrow 7x = 14 \\Rightarrow x = 2$.\nStep 3: Substitute into $5x + 2y = 16$: $10 + 2y = 16 \\Rightarrow 2y = 6 \\Rightarrow y = 3$.\nStep 4: $x + y = 2 + 3 = 5$.\n\nCheck: $3(2) + 4(3) = 18$ $\\checkmark$ and $5(2) + 2(3) = 16$ $\\checkmark$.\n\n**Common Mistakes:** Stopping after solving for $x = 2$ and reporting that as the answer; or sign errors when subtracting equations because the like terms were not lined up.\n\n**Test Day Takeaway:** To solve a $2 \\times 2$ system, scale one equation so a variable's coefficients match (or are opposites), then add or subtract to eliminate it in one step.",
  skills: ["systems-of-equations", "linear-functions"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "To estimate the defect rate of a screen-printing run, a quality team inspected a random sample of $280$ printed shirts from a typical week. From the sample, they estimated that $9\\%$ of all shirts printed that week were defective, with an associated margin of error of $2.5\\%$. Based on this estimate and margin of error, which conclusion about all shirts printed that week is most appropriate?",
  choices: [
    // distractor: reports the margin of error itself as the defect rate
    { id: "A", text: "$2.5\\%$ of the shirts are defective." },
    { id: "B", text: "It is plausible that between $6.5\\%$ and $11.5\\%$ of the shirts are defective." },
    // distractor: treats the point estimate as exact
    { id: "C", text: "Exactly $9\\%$ of the shirts are defective." },
    // distractor: keeps only the upper tail beyond the interval
    { id: "D", text: "It is plausible that more than $11.5\\%$ of the shirts are defective." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The plausible interval is the estimate $\\pm$ the margin of error: $9\\% \\pm 2.5\\% = (6.5\\%, 11.5\\%)$.\n\n**The Full Solution:**\nStep 1: A margin of error defines a plausible range for the true population value, centered on the sample estimate.\nStep 2: Lower bound: $9\\% - 2.5\\% = 6.5\\%$.\nStep 3: Upper bound: $9\\% + 2.5\\% = 11.5\\%$.\nSo it is plausible that between $6.5\\%$ and $11.5\\%$ of all shirts printed that week are defective.\n\n**Why the wrong answers are tempting:**\n* Choice A: reports the margin of error ($2.5\\%$) as if it were the defect rate itself.\n* Choice C: treats the sample point estimate as an exact population value, ignoring the margin of error entirely.\n* Choice D: keeps only the upper endpoint, discarding the lower half of the interval and turning a two-sided range into a one-sided claim.\n\n**Test Day Takeaway:** Margin of error gives a plausible interval (estimate $\\pm$ MoE) for the population — not an exact value and not a one-sided \"more than\" claim.",
  skills: ["margin-of-error", "statistics"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "At the end of each year from $2018$ through $2023$, a beekeeper's count of active hives was $200\\%$ more than the count at the end of the previous year. The end-of-$2019$ count was $240$ hives. Which equation models the number of hives $n$ as a function of $t$, the number of years after the end of $2018$, for $t \\le 5$ ?",
  choices: [
    // distractor: uses the given 2019 count as the t=0 value
    { id: "A", text: "$n = 240(3)^t$" },
    // distractor: treats \"200% more\" as a growth factor of 2 instead of 3
    { id: "B", text: "$n = 80(2)^t$" },
    { id: "C", text: "$n = 80(3)^t$" },
    // distractor: combines both errors (factor 2 AND uses 240 as initial)
    { id: "D", text: "$n = 240(2)^t$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** \"$200\\%$ more\" means the new value is $100\\% + 200\\% = 300\\%$ of the old, a growth factor of $3$. The $2019$ count ($240$) sits at $t = 1$, so the $t = 0$ value is $\\dfrac{240}{3} = 80$. Thus $n = 80(3)^t$.\n\n**The Full Solution:**\nStep 1: Increasing by $200\\%$ multiplies by $1 + 2 = 3$ each year, so $n = a(3)^t$ for some initial amount $a$.\nStep 2: The end of $2019$ is $t = 1$ (one year after the end of $2018$), and there $n = 240$: $a(3)^1 = 240 \\Rightarrow 3a = 240 \\Rightarrow a = 80$.\nStep 3: So $n = 80(3)^t$.\n\nCheck: $n(1) = 80 \\cdot 3 = 240$ $\\checkmark$; $n(0) = 80$, and $80 \\to 240$ is a $200\\%$ increase $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A: uses the $2019$ value ($240$) as the $t = 0$ initial amount instead of back-solving to $80$.\n* Choice B: reads \"$200\\%$ more\" as a factor of $2$ rather than $3$.\n* Choice D: combines both errors — factor $2$ and initial $240$.\n\n**Test Day Takeaway:** \"$p\\%$ more\" means multiply by $1 + \\dfrac{p}{100}$. If the given data point is not at $t = 0$, divide by the growth factor to recover the true initial value.",
  skills: ["exponential-functions", "exponential-growth-decay", "modeling"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = 5x - 3$. If $g(x) = f(x - 4) + 2x$, what is $g(7)$?",
  choices: [
    // distractor: stops at f(7) = 32 and adds 14 instead of using x - 4 = 3
    { id: "A", text: "$46$" },
    { id: "B", text: "$26$" },
    // distractor: applies the +2x as a constant, getting f(3) + 2 = 14
    { id: "C", text: "$14$" },
    // distractor: applies the shift in wrong direction, uses f(11) + 14
    { id: "D", text: "$66$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Composition**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $g(7) = f(7 - 4) + 2(7) = f(3) + 14 = (5 \\cdot 3 - 3) + 14 = 12 + 14 = 26$.\n\n**The Full Solution:**\nStep 1: Evaluate the shifted-input piece: $f(7 - 4) = f(3) = 5(3) - 3 = 12$.\nStep 2: Evaluate the second term: $2 \\cdot 7 = 14$.\nStep 3: Combine: $g(7) = 12 + 14 = 26$.\n\nCheck via the full rule: $g(x) = f(x - 4) + 2x = 5(x - 4) - 3 + 2x = 7x - 23$, so $g(7) = 49 - 23 = 26$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($46$): uses $f(7) = 32$ instead of $f(3)$, ignoring the $-4$ shift, then adds $14$.\n* Choice C ($14$): treats $2x$ as the constant $2$ and adds $f(3) + 2 = 14$.\n* Choice D ($66$): shifts the input the wrong way ($x + 4$), using $f(11) = 52$, then adds $14$.\n\n**Test Day Takeaway:** $f(x - h)$ shifts the input to $x - h$. Substitute $x = 7$ into every $x$ in the expression for $g(x)$ before simplifying.",
  skills: ["function-interpretation", "function-composition"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A survey drone is launched upward from a coral-reef research vessel. Its height above the water, in meters, is modeled by $h(t) = -5(t - 1.2)^2 + 9$, where $t$ is the time, in seconds, after launch. Which of the following is the best interpretation of the vertex of the graph of $h(t)$ in the $th$-plane?",
  choices: [
    // distractor: swaps coordinates
    { id: "A", text: "The drone reaches a maximum height of $1.2$ meters, $9$ seconds after launch." },
    { id: "B", text: "The drone reaches a maximum height of $9$ meters, $1.2$ seconds after launch." },
    // distractor: wrong direction — calls the max a min
    { id: "C", text: "The drone reaches a minimum height of $9$ meters, $1.2$ seconds after launch." },
    // distractor: wrong base — uses the leading coefficient as the time
    { id: "D", text: "The drone reaches a maximum height of $9$ meters, $5$ seconds after launch." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Quadratic Vertex Form Application**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The vertex of $h(t) = -5(t - 1.2)^2 + 9$ is $(1.2, 9)$. Since $a = -5 < 0$, the parabola opens down, so the vertex is a maximum: max height $9$ m at $t = 1.2$ s.\n\n**The Full Solution:**\nStep 1: Vertex form $h(t) = a(t - h_0)^2 + k$ has vertex $(h_0, k)$. Here that is $(1.2, 9)$.\nStep 2: Because $a = -5 < 0$, the parabola opens downward and the vertex is the maximum.\nStep 3: So the drone reaches a maximum height of $9$ meters at $t = 1.2$ seconds.\n\nCheck: $h(1.2) = -5(0)^2 + 9 = 9$, and the graph is symmetric about $t = 1.2$, so every other height is lower $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A: swaps the time and height values of the vertex, reading $1.2$ as the height and $9$ as the time.\n* Choice C: calls it a minimum, but $a < 0$ makes the vertex a maximum.\n* Choice D: uses the leading coefficient $5$ as the time instead of $1.2$.\n\n**Test Day Takeaway:** In $a(t - h_0)^2 + k$, the vertex is $(h_0, k)$: $h_0$ is when the extreme occurs and $k$ is its value. A negative leading coefficient means the vertex is a maximum.",
  skills: ["function-interpretation", "quadratic-equations"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A guide service charges a flat $\\$48$ outfitting fee plus $\\$12$ for each hour a kayak is rented, so the total charge in dollars for $h$ hours is modeled by $C(h) = 12h + 48$. For how many hours was a kayak rented if the total charge was $\\$180$?",
  choices: [
    // distractor: forgets to subtract the 48 fee, solving 12h = 180
    { id: "A", text: "$15$" },
    { id: "B", text: "$11$" },
    // distractor: divides 180 by the sum 12 + 48 = 60 (wrong base)
    { id: "C", text: "$3$" },
    // distractor: reports the intermediate value 180 - 48 = 132 instead of dividing by 12
    { id: "D", text: "$132$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Set $12h + 48 = 180$. Subtract the fee: $12h = 132$. Divide by the rate: $h = 11$.\n\n**The Full Solution:**\nStep 1: $12h + 48 = 180$.\nStep 2: Subtract the flat fee: $12h = 180 - 48 = 132$.\nStep 3: Divide by the hourly rate: $h = \\dfrac{132}{12} = 11$.\n\nCheck: $C(11) = 12(11) + 48 = 132 + 48 = 180$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): divides $180$ by $12$ without first subtracting the $\\$48$ fee.\n* Choice C ($3$): divides $180$ by the sum $12 + 48 = 60$, mixing the fee into the rate.\n* Choice D ($132$): reports the intermediate value $180 - 48 = 132$ without dividing by $12$.\n\n**Test Day Takeaway:** To find the input for a target output of a linear model, undo the constant first (subtract the fixed fee), then undo the coefficient (divide by the per-unit rate).",
  skills: ["solving-equations", "linear-functions", "word-problems"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A screen-printing shop raised the price of a custom shirt from $\\$12$ to $\\$15$. By what percent did the price increase?",
  choices: [
    // distractor: divides the increase by the new price instead of the original
    { id: "A", text: "$20\\%$" },
    { id: "B", text: "$25\\%$" },
    // distractor: reports the raw dollar increase as a percent
    { id: "C", text: "$3\\%$" },
    // distractor: uses the new price over the old as the percent change
    { id: "D", text: "$125\\%$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Percent Increase**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Percent increase $= \\dfrac{\\text{increase}}{\\text{original}} = \\dfrac{15 - 12}{12} = \\dfrac{3}{12} = 0.25 = 25\\%$.\n\n**The Full Solution:**\nStep 1: The increase is $15 - 12 = 3$ dollars.\nStep 2: Divide by the original price: $\\dfrac{3}{12} = \\dfrac{1}{4} = 0.25$.\nStep 3: As a percent, $0.25 = 25\\%$.\n\nCheck: $12 \\times 1.25 = 15$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($20\\%$): divides the increase by the new price, $\\dfrac{3}{15}$, instead of the original.\n* Choice C ($3\\%$): reports the raw dollar increase ($3$) as if it were a percent.\n* Choice D ($125\\%$): uses $\\dfrac{15}{12} = 125\\%$, the ratio of prices, rather than the percent of the change.\n\n**Test Day Takeaway:** Percent change always divides by the original amount: $\\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$.",
  skills: ["percents", "percent-change", "word-problems"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table gives three points on line $h$. Line $k$ is the result of translating line $h$ down $7$ units in the $xy$-plane. What is the $x$-intercept of line $k$?",
  diagram: { type: "table", params: {
    xHeader: "x", yHeader: "y",
    rows: [["10", "84"], ["14", "104"], ["20", "134"]]
  } },
  choices: [
    { id: "A", text: "$\\left(-\\dfrac{27}{5},\\,0\\right)$" },
    // distractor: uses line h's own x-intercept without applying the downward shift
    { id: "B", text: "$\\left(-\\dfrac{34}{5},\\,0\\right)$" },
    // distractor: shifts the constant the wrong direction (+7 instead of -7)
    { id: "C", text: "$\\left(-\\dfrac{41}{5},\\,0\\right)$" },
    // distractor: divides the new constant by the shift (7) instead of the slope (5)
    { id: "D", text: "$\\left(-\\dfrac{27}{7},\\,0\\right)$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Slope $= \\dfrac{104 - 84}{14 - 10} = \\dfrac{20}{4} = 5$. From $(10, 84)$: $b = 84 - 50 = 34$, so $h$: $y = 5x + 34$. Down $7$ gives $k$: $y = 5x + 27$. Set $0 = 5x + 27 \\Rightarrow x = -\\dfrac{27}{5}$, point $\\left(-\\dfrac{27}{5}, 0\\right)$.\n\n**The Full Solution:**\nStep 1: Find the slope from two table points: $\\dfrac{104 - 84}{14 - 10} = 5$.\nStep 2: Write $h$ in slope-intercept form using $(10, 84)$: $84 = 5(10) + b \\Rightarrow b = 34$, so $h$: $y = 5x + 34$.\nStep 3: Translating down $7$ subtracts $7$ from the output: $k$: $y = 5x + 34 - 7 = 5x + 27$.\nStep 4: Set $y = 0$: $5x + 27 = 0 \\Rightarrow x = -\\dfrac{27}{5}$. The $x$-intercept is $\\left(-\\dfrac{27}{5}, 0\\right)$.\n\n**Why the wrong answers are tempting:**\n* Choice B: gives line $h$'s own $x$-intercept ($-\\dfrac{34}{5}$) without applying the downward shift.\n* Choice C: translates up instead of down, solving $5x + 41 = 0$.\n* Choice D: divides the new constant $27$ by the shift amount $7$ instead of by the slope $5$.\n\n**Test Day Takeaway:** Translating a line down $c$ units subtracts $c$ from the $y$-intercept. Build the equation from the points first, apply the shift, then solve for the new $x$-intercept.",
  skills: ["linear-functions", "transformations", "x-intercept"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The polynomial $p(x)$ has degree $3$ and zeros at $x = -1$, $x = 2$, and $x = 4$. If $p(0) = 16$, what is the value of $p(1)$?",
  correctAnswer: "12",
  explanation: "**SAT Pattern: Polynomial Zeros via Factoring**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~40s):** Write $p(x) = a(x + 1)(x - 2)(x - 4)$. From $p(0) = a(1)(-2)(-4) = 8a = 16$, so $a = 2$. Then $p(1) = 2(2)(-1)(-3) = 12$.\n\n**The Full Solution:**\nStep 1: A degree-$3$ polynomial with zeros $-1, 2, 4$ has the form $p(x) = a(x + 1)(x - 2)(x - 4)$.\nStep 2: Use $p(0) = 16$ to find $a$: $p(0) = a(0 + 1)(0 - 2)(0 - 4) = a(1)(-2)(-4) = 8a = 16 \\Rightarrow a = 2$.\nStep 3: Evaluate $p(1) = 2(1 + 1)(1 - 2)(1 - 4) = 2 \\cdot 2 \\cdot (-1) \\cdot (-3) = 12$.\n\nCheck: $p(0) = 2(1)(-2)(-4) = 16$ $\\checkmark$, and each zero gives $p = 0$ $\\checkmark$.\n\n**Common Mistakes:** Dropping the leading coefficient $a$ and using $p(x) = (x + 1)(x - 2)(x - 4)$, which gives $p(0) = 8$ not $16$; sign-slipping on $(0 - 2)(0 - 4) = +8$; or reporting $a = 2$ instead of $p(1)$.\n\n**Test Day Takeaway:** A degree-$n$ polynomial with zeros $r_1, \\ldots, r_n$ has the form $a(x - r_1)\\cdots(x - r_n)$. Use one extra given value to pin down $a$, then evaluate as needed.",
  skills: ["polynomial-operations", "factoring", "function-interpretation"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Jasper runs a screen-printing booth. His daily operating cost, in dollars, for printing $x$ dozen shirts is modeled by $C(x) = x^2 - 24x + 200$. What is the minimum possible daily operating cost, in dollars?",
  correctAnswer: "56",
  explanation: "**SAT Pattern: Quadratic — Completing the Square**\n\n**The correct answer is $56$.**\n\n**The Fast Way (~25s):** A quadratic with $a>0$ bottoms out at its vertex. Complete the square: $C(x)=(x-12)^2+56$, so the minimum cost is $56$.\n\n**The Full Solution:**\nStep 1: Take half the $x$-coefficient: $\\frac{-24}{2}=-12$, then square it: $144$.\nStep 2: $C(x)=x^2-24x+144-144+200=(x-12)^2+56$.\nStep 3: Since $(x-12)^2\\ge 0$, $C$ is smallest when $x=12$, leaving $C=56$.\n\nCheck: $C(12)=144-288+200=56$. $\\checkmark$\n\n**Common Mistakes:** Reporting $x=12$, the input that minimizes cost, instead of the cost itself; forgetting to subtract the added $144$, which throws off the constant.\n\n**Test Day Takeaway:** For $ax^2+bx+c$ with $a>0$, the minimum value is the constant left over after writing it as $(x-h)^2+k$ — that $k$ is the answer.",
  skills: ["quadratic-equations", "completing-the-square", "vertex-form"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the horizontal line $y = -3$ is tangent to the parabola $y = x^2 + 8x + a$, touching it at exactly one point. Here $a$ is a constant. Find $a$.",
  correctAnswer: "13",
  explanation: "**SAT Pattern: Line-Parabola Intersection Count**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~25s):** A tangent line meets the parabola exactly once, so the equation has one repeated root and discriminant $0$. Set $x^2+8x+a=-3$, i.e. $x^2+8x+(a+3)=0$, and require $8^2-4(a+3)=0 \\Rightarrow a+3=16 \\Rightarrow a=13$.\n\n**The Full Solution:**\nStep 1: Tangency at one point means $x^2+8x+a=-3$ has a single (repeated) solution.\nStep 2: Rewrite as $x^2+8x+(a+3)=0$.\nStep 3: A quadratic has one real root when its discriminant is $0$: $b^2-4ac=64-4(a+3)=0$.\nStep 4: Solve: $4(a+3)=64 \\Rightarrow a+3=16 \\Rightarrow a=13$.\n\nCheck: with $a=13$, $x^2+8x+16=(x+4)^2=0$, one repeated root $x=-4$. $\\checkmark$\n\n**Common Mistakes:** Forgetting to move the $-3$ to the same side before applying the discriminant; setting the discriminant $>0$ or $<0$, which gives two touch points or none.\n\n**Test Day Takeaway:** A horizontal line is tangent to a parabola exactly when the resulting quadratic has discriminant $0$ — one repeated root, one point of contact.",
  skills: ["quadratic-equations", "discriminant", "systems-of-equations"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "At a farmers' market, the regular price of a jar of honey is $\\$18.00$. Its sale price is $75\\%$ less than the regular price, and that sale price is $20\\%$ greater than the seller's cost for the jar. What was the seller's cost, in dollars, for the jar?",
  correctAnswer: "3.75",
  explanation: "**SAT Pattern: Successive Percent Changes**\n\n**The correct answer is $3.75$.**\n\n**The Fast Way (~25s):** Sale price $=\\$18.00\\times(1-0.75)=\\$4.50$. That sale price is $1.20$ times the cost, so cost $=\\frac{4.50}{1.20}=3.75$.\n\n**The Full Solution:**\nStep 1: \"$75\\%$ less than $\\$18.00$\" keeps $25\\%$ of it: $18\\times 0.25=\\$4.50$.\nStep 2: The sale price is $20\\%$ greater than the cost, so $\\$4.50=1.20\\times\\text{cost}$.\nStep 3: Solve: $\\text{cost}=\\frac{4.50}{1.20}=3.75$.\n\nCheck: $3.75\\times 1.20=4.50$, matching the sale price. $\\checkmark$\n\n**Common Mistakes:** Multiplying $4.50$ by $1.20$ instead of dividing — the cost is the smaller base, so it must come out below the sale price; treating \"$75\\%$ less\" as keeping $75\\%$ rather than $25\\%$.\n\n**Test Day Takeaway:** Chain percent steps one at a time. \"$x\\%$ less\" keeps $(100-x)\\%$; \"$y\\%$ greater than the cost\" means sale $=(1+\\frac{y}{100})\\times\\text{cost}$, so divide to recover the cost.",
  skills: ["percent-change", "percent-word-problems"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the equation below, $c$ is a positive constant.\n\n$$\\dfrac{x^2}{\\sqrt{x^2 - c^2}} - 40 = \\dfrac{c^2}{\\sqrt{x^2 - c^2}}$$\n\nWhich expression is one of the solutions for $x$?",
  choices: [
    // distractor: uses the excluded boundary x^2 = c^2 (where the denominator is 0)
    { id: "A", text: "$-c$" },
    // distractor: forgets to take the square root, reports the radicand negated
    { id: "B", text: "$-c^2 - 40^2$" },
    // distractor: subtracts under the radical instead of adding (sign slip on c^2)
    { id: "C", text: "$-\\sqrt{40^2 - c^2}$" },
    { id: "D", text: "$-\\sqrt{c^2 + 40^2}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Radical Equation — Substitution**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** Both terms share the denominator $\\sqrt{x^2-c^2}$. Collect them: $\\frac{x^2-c^2}{\\sqrt{x^2-c^2}}=40$, which is just $\\sqrt{x^2-c^2}=40$. Square: $x^2-c^2=40^2$, so $x=\\pm\\sqrt{c^2+40^2}$. One solution is $-\\sqrt{c^2+40^2}$, choice D.\n\n**The Full Solution:**\nStep 1: Add $40$ to both sides so the two fractions sit together over their common denominator: $\\frac{x^2}{\\sqrt{x^2-c^2}}-\\frac{c^2}{\\sqrt{x^2-c^2}}=40$.\nStep 2: Combine: $\\frac{x^2-c^2}{\\sqrt{x^2-c^2}}=40$.\nStep 3: Let $u=\\sqrt{x^2-c^2}$, so $u^2=x^2-c^2$. The left side is $\\frac{u^2}{u}=u$, giving $u=40$.\nStep 4: Then $x^2-c^2=40^2=1600 \\Rightarrow x^2=c^2+40^2 \\Rightarrow x=\\pm\\sqrt{c^2+40^2}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: uses the boundary $x^2=c^2$, where the radical is $0$ and the original expression is undefined.\n* Choice B: stops at $x^2=c^2+40^2$ and forgets to take the square root.\n* Choice C: flips the sign under the radical to $40^2-c^2$ instead of $c^2+40^2$.\n\n**Test Day Takeaway:** When the same radical sits in every term, combine the fractions over the common denominator; $\\frac{u^2}{u}$ collapses to $u$, turning the equation into a one-step solve.",
  skills: ["radical-equations", "rational-equations", "solving-equations"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The result of increasing a quantity $q$ by $150\\%$ is $120$. What is the value of $q$?",
  choices: [
    { id: "A", text: "$48$" },
    // distractor: treats \"increase by 150%\" as multiplying by 1.5, so q = 120/1.5
    { id: "B", text: "$80$" },
    // distractor: multiplies 120 by the correct factor 2.5 instead of dividing
    { id: "C", text: "$300$" },
    // distractor: multiplies 120 by 1.5 instead of dividing
    { id: "D", text: "$180$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Percent Increase**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Increasing by $150\\%$ multiplies by $1+1.5=2.5$. So $2.5q=120 \\Rightarrow q=48$, choice A.\n\n**The Full Solution:**\nStep 1: Increasing $q$ by $150\\%$ adds $1.5q$ to $q$: $q+1.5q=2.5q$.\nStep 2: $2.5q=120 \\Rightarrow q=\\frac{120}{2.5}=48$.\n\nCheck: $48+150\\%\\text{ of }48=48+72=120$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($80$): treats \"increase by $150\\%$\" as multiplying by $1.5$, giving $\\frac{120}{1.5}=80$.\n* Choice C ($300$): multiplies $120\\times 2.5$ instead of dividing.\n* Choice D ($180$): multiplies $120\\times 1.5$ instead of dividing.\n\n**Test Day Takeaway:** \"Increase by $p\\%$\" multiplies the original by $1+\\frac{p}{100}$. A $150\\%$ increase is a factor of $2.5$, not $1.5$.",
  skills: ["percents", "percent-change"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the right triangle shown, the right angle is at the bottom-left vertex. The vertical leg has length $9$ and the hypotenuse has length $20$. The angle $x^{\\circ}$ is at the top vertex, between the vertical leg and the hypotenuse. What is the value of $\\cos x^{\\circ}$? (Express your answer as a decimal or fraction.)",
  diagram: {
    type: "rightTriangle",
    params: {
      vertices: [[0, 9], [0, 0], [17.86, 0]],
      sideLabels: ["9", "", "20"],
      labels: ["", "", ""],
      rightAngleVertex: 1
    }
  },
  correctAnswer: "0.45",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**The correct answer is $0.45$ (equivalently $\\frac{9}{20}$).**\n\n**The Fast Way (~20s):** From the top vertex, the vertical leg of length $9$ lies along the angle, so it is adjacent. Cosine is adjacent over hypotenuse: $\\cos x^\\circ=\\frac{9}{20}=0.45$.\n\n**The Full Solution:**\nStep 1: Cosine equals the leg adjacent to the angle divided by the hypotenuse.\nStep 2: The angle $x^\\circ$ is at the top vertex; the side running along it is the vertical leg, length $9$ — that is the adjacent side. The hypotenuse is $20$.\nStep 3: $\\cos x^\\circ=\\frac{9}{20}=0.45$. The third side is not needed, since both required lengths are given.\n\n**Common Mistakes:** Treating the vertical leg as opposite the top angle, which would give $\\sin x^\\circ$ instead of $\\cos x^\\circ$; computing the missing leg $\\sqrt{400-81}=\\sqrt{319}$ for no reason.\n\n**Test Day Takeaway:** Locate the angle first. The leg lying along the angle is the adjacent side; cosine is adjacent over hypotenuse, and no third side is needed when both are given.",
  skills: ["right-triangle-trig", "cosine-ratio", "triangles"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The rational function $f$ is defined by $f(x) = \\dfrac{a}{x+b}$, where $a$ and $b$ are constants. The graph of $y = f(x)$ has a vertical asymptote at $x = 0$ and passes through the point $(-5, -1)$. If $g(x) = f(x + 3)$, which equation could define function $g$?",
  choices: [
    // distractor: forgets to apply the +3 input shift, keeps f unchanged
    { id: "A", text: "$g(x) = \\dfrac{5}{x}$" },
    { id: "B", text: "$g(x) = \\dfrac{5}{x+3}$" },
    // distractor: adds the shift to the (already determined) b = 0 a second time, then to f's denominator
    { id: "C", text: "$g(x) = \\dfrac{5}{x+8}$" },
    // distractor: multiplies numerator by the shift factor instead of shifting the input
    { id: "D", text: "$g(x) = \\dfrac{5(x+3)}{x+3}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Rational Function Transformation**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** A vertical asymptote at $x=0$ forces $b=0$, so $f(x)=\\frac{a}{x}$. The point $(-5,-1)$ gives $-1=\\frac{a}{-5} \\Rightarrow a=5$, so $f(x)=\\frac{5}{x}$. Then $g(x)=f(x+3)=\\frac{5}{x+3}$, choice B.\n\n**The Full Solution:**\nStep 1: The denominator $x+b$ is zero at $x=-b$, which is the vertical asymptote. Since the asymptote is $x=0$, $-b=0$, so $b=0$ and $f(x)=\\frac{a}{x}$.\nStep 2: Plug in $(-5,-1)$: $-1=\\frac{a}{-5} \\Rightarrow a=5$, so $f(x)=\\frac{5}{x}$.\nStep 3: $g(x)=f(x+3)$ replaces $x$ with $x+3$: $g(x)=\\frac{5}{x+3}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: leaves $f$ unshifted, ignoring the $x+3$ substitution.\n* Choice C: adds the shift inside an already-shifted denominator, producing $x+8$.\n* Choice D: multiplies the numerator by $x+3$ instead of substituting into the input.\n\n**Test Day Takeaway:** $f(x+h)$ replaces every $x$ with $x+h$, shifting the graph left by $h$. Pin down the constants from the asymptote and the point first, then apply the shift.",
  skills: ["function-transformations", "rational-functions"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The equation $2x^2 - 16x + 5 = 0$ has two distinct solutions $r$ and $s$. What is the value of $\\dfrac{1}{r} + \\dfrac{1}{s}$?",
  correctAnswer: "3.2",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**The correct answer is $3.2$ (equivalently $\\frac{16}{5}$).**\n\n**The Fast Way (~25s):** $\\frac{1}{r}+\\frac{1}{s}=\\frac{r+s}{rs}$. By Vieta's, $r+s=\\frac{16}{2}=8$ and $rs=\\frac{5}{2}$. So $\\frac{1}{r}+\\frac{1}{s}=\\frac{8}{\\frac{5}{2}}=8\\cdot\\frac{2}{5}=\\frac{16}{5}=3.2$.\n\n**The Full Solution:**\nStep 1: For $ax^2+bx+c=0$, the sum of the roots is $-\\frac{b}{a}$ and the product is $\\frac{c}{a}$. Here $a=2$, $b=-16$, $c=5$.\nStep 2: Sum: $r+s=-\\frac{-16}{2}=8$. Product: $rs=\\frac{5}{2}$.\nStep 3: Combine the reciprocals: $\\frac{1}{r}+\\frac{1}{s}=\\frac{r+s}{rs}=\\frac{8}{\\frac{5}{2}}=8\\cdot\\frac{2}{5}=\\frac{16}{5}=3.2$.\n\n**Common Mistakes:** Dropping the leading coefficient and using $r+s=16$ or $rs=5$ instead of dividing by $a=2$; writing $\\frac{1}{r}+\\frac{1}{s}$ as $\\frac{1}{r+s}$ rather than $\\frac{r+s}{rs}$.\n\n**Test Day Takeaway:** $\\frac{1}{r}+\\frac{1}{s}=\\frac{r+s}{rs}$ — apply Vieta's ($\\text{sum}=-\\frac{b}{a}$, $\\text{product}=\\frac{c}{a}$) so you never have to solve the quadratic.",
  skills: ["quadratic-equations", "vietas-formulas", "polynomial-operations"]
}
      ]
    }
  ]
};

export default practiceTest3;
