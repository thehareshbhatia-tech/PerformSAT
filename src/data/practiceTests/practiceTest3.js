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
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** In $f(t) = 120 + 8t$, the coefficient of $t$ is the rate of change: $8$ centimeters per minute.\n\n**The Full Solution:**\nThe function is in the form $f(t) = b + mt$, where $m = 8$ is the slope and $b = 120$ is the $y$-intercept. The slope tells us the rate of change: for each additional minute, the depth increases by $8$ centimeters.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — confuses the slope $8$ with the initial value, which is $120$.\n* Choice B: \"applies the inverse operation\" — treats $8$ as an input value $t = 8$ instead of a rate.\n* Choice D: \"applies the inverse operation\" — inverts the rate (one centimeter per $\\tfrac{1}{8}$ minute).\n\n**Test Day Takeaway:** In $y = b + mx$, the coefficient of the variable is always the rate of change per unit of that variable.",
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
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Arugula makes up $\\dfrac{3}{5 + 3} = \\dfrac{3}{8}$ of the total. So arugula $= \\dfrac{3}{8} \\cdot 72 = 27$ ounces.\n\n**The Full Solution:**\nLet spinach $= 5k$ and arugula $= 3k$ (so the ratio is $5 : 3$).\nTotal: $5k + 3k = 8k = 72$, so $k = 9$.\nArugula $= 3k = 3 \\cdot 9 = 27$ ounces.\n\nVerification: spinach $= 5 \\cdot 9 = 45$, total $= 27 + 45 = 72$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports $5$ (the spinach part of the ratio) instead of solving the proportion.\n* Choice C: \"wrong base\" — uses $\\dfrac{3}{5}$ of the total instead of $\\dfrac{3}{8}$.\n* Choice D: \"applies the inverse operation\" — solves for spinach ($\\dfrac{5}{8} \\cdot 72 = 45$) instead of arugula.\n\n**Test Day Takeaway:** When two parts are given as a ratio and the total of both parts is known, the denominator of each fraction is the SUM of the ratio parts, not just one part.",
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
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Total $\\times 0.42 = 945$, so total $= \\frac{945}{0.42} = 2{,}250$.\n\n**The Full Solution:**\nLet $T$ be the total number of members. Then ${}0.42 \\cdot T = 945$.\nDivide both sides by $0.42$: $T = \\dfrac{945}{0.42} = 2{,}250$.\n\nVerification: $42\\%$ of $2{,}250 = 0.42 \\cdot 2{,}250 = 945$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — multiplies $945 \\cdot 0.42 \\approx 397$ instead of dividing.\n* Choice B: \"wrong base\" — divides by the complement $0.58$ (treats $945$ as the non-adult count).\n* Choice D: \"off-by-one / decimal slip\" — divides by $0.042$ instead of $0.42$.\n\n**Test Day Takeaway:** When a percent of an unknown total is given, divide the part by the percent (as a decimal) to recover the whole.",
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
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $5$ more batches at $\\$7$ each add $\\$35$ to the original total. New total: $\\$96 + \\$35 = \\$131$.\n\n**The Full Solution:**\nLet the cost equation be $7b + 40 = 96$, so $7b = 56$ and $b = 8$.\nFor $b + 5 = 13$ batches: total $= 7(13) + 40 = 91 + 40 = \\$131$.\n\nShortcut: you do not need to find $b$. Adding $5$ batches adds $5 \\cdot \\$7 = \\$35$, and the booth fee is unchanged, so the new total is $\\$96 + \\$35 = \\$131$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — adds the count $5$ as dollars instead of $5 \\cdot \\$7 = \\$35$.\n* Choice C: \"wrong base\" — uses the booth fee ($\\$40$) as the unit price, getting $\\$96 + 5 \\cdot \\$40 = \\$296$.\n* Choice D: \"off-by-one\" — double-counts the original $\\$96$ as if every order pays it twice.\n\n**Test Day Takeaway:** Linear cost = (rate $\\times$ quantity) + fixed fee. Adding more items only changes the rate-times-quantity piece — the fixed fee does not change.",
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
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Cross-multiply: $5x \\cdot 4 = 8 \\cdot 45$, so $20x = 360$ and $x = 18$. Then $x - 6 = 12$.\n\n**The Full Solution:**\n$\\dfrac{5x}{8} = \\dfrac{45}{4}$\n\nCross-multiply: $4 \\cdot 5x = 8 \\cdot 45 \\Rightarrow 20x = 360 \\Rightarrow x = 18$.\n\nThe question asks for $x - 6$, not $x$: $18 - 6 = 12$.\n\nVerification: $\\dfrac{5(18)}{8} = \\dfrac{90}{8} = \\dfrac{45}{4}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — solves for $x$ correctly but forgets to subtract $6$.\n* Choice C: \"applies the inverse operation\" — adds $6$ to $x$ instead of subtracting.\n* Choice D: \"wrong base\" — keeps $5x$ instead of solving for $x$.\n\n**Test Day Takeaway:** Always re-read the last sentence before answering. The question often asks for a related quantity, not the variable itself.",
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
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The base ${}1.06 = 1 + 0.06$ means a $6\\%$ increase each year.\n\n**The Full Solution:**\nIn the model $A(t) = P_0(1 + r)^t$, the base $(1 + r)$ represents the growth factor.\n${}1.06 = 1 + 0.06$, so $r = 0.06 = 6\\%$.\n\nEach year, the account value is multiplied by $1.06$, meaning it increases by $6\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — confuses percentage growth with a fixed dollar amount.\n* Choice C: \"wrong base\" — interprets $1.06$ as $106\\%$ growth instead of $6\\%$ growth (the $1$ represents keeping the original, the $0.06$ is the growth).\n* Choice D: \"stops one step early\" — confuses the growth factor with the account value.\n\n**Test Day Takeaway:** In $P(1 + r)^t$, the growth rate $r$ is the base minus $1$, expressed as a percentage.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A solid right circular cylinder has a radius of $3$ inches and a height of $8$ inches. The volume of the cylinder, in cubic inches, can be expressed as $k\\pi$. What is the value of $k$?",
  correctAnswer: "72",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $72$.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (3)^2 (8) = 9 \\cdot 8 \\pi = 72\\pi$. So $k = 72$.\n\n**The Full Solution:**\nThe volume formula for a right circular cylinder is $V = \\pi r^2 h$.\nWith $r = 3$ in and $h = 8$ in:\n$V = \\pi (3)^2 (8) = \\pi (9)(8) = 72\\pi$ cubic inches.\nSo $k = 72$.\n\n**Common Mistakes to Avoid:**\n* Forgetting to square the radius — using $\\pi r h$ would give $24\\pi$, so $k = 24$.\n* Confusing the cylinder formula with the cone formula $V = \\dfrac{1}{3}\\pi r^2 h$, which gives $24$.\n\n**Verification:** $\\pi (9)(8) = 72\\pi$ \\checkmark, and the answer $k = 72$ is unitless because we factored out $\\pi$.\n\n**Test Day Takeaway:** For a cylinder, square the radius first, then multiply by the height. Memorize $V = \\pi r^2 h$ — this is a Reference Sheet formula.",
  skills: ["volume", "geometry"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "Line $j$ passes through the origin and is parallel to the line $4x + 5y = 20$. What is the slope of line $j$? Express your answer as a fraction.",
  correctAnswer: "-4/5",
  explanation: "**SAT Pattern: Parallel Lines and Standard Form**\n\n**The correct answer is $-\\dfrac{4}{5}$.**\n\n**The Fast Way (~15s):** Rewrite $4x + 5y = 20$ as $y = -\\dfrac{4}{5}x + 4$. Parallel lines have the same slope: $-\\dfrac{4}{5}$.\n\n**The Full Solution:**\nConvert $4x + 5y = 20$ to slope-intercept form:\n$5y = -4x + 20$\n$y = -\\dfrac{4}{5}x + 4$\n\nThe slope is $-\\dfrac{4}{5}$. Parallel lines have equal slopes, so line $j$ also has slope $-\\dfrac{4}{5}$.\n\n**Common Mistakes to Avoid:**\n* Reading the coefficient of $x$ as $\\dfrac{4}{5}$ (forgetting the negative).\n* Using the negative reciprocal $\\dfrac{5}{4}$ (that's for perpendicular lines).\n\n**Verification:** Line $j$ through origin with slope $-\\dfrac{4}{5}$: $y = -\\dfrac{4}{5}x$. This is parallel to $y = -\\dfrac{4}{5}x + 4$ since slopes match. \\checkmark\n\n**Test Day Takeaway:** Parallel lines have the same slope. Convert to $y = mx + b$ to find it.",
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
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Add the equations: $5x = 30$, so $x = 6$. Substitute: $2(6) + 5y = -3$, giving $12 + 5y = -3$, so $5y = -15$ and $y = -3$.\n\n**The Full Solution:**\nAdd the two equations to eliminate $y$:\n$(2x + 5y) + (3x - 5y) = -3 + 33$\n$5x = 30$\n$x = 6$\n\nSubstitute $x = 6$ into $2x + 5y = -3$:\n$12 + 5y = -3$\n$5y = -15$\n$y = -3$\n\nVerification: $2(6) + 5(-3) = 12 - 15 = -3$ \\checkmark.\n$3(6) - 5(-3) = 18 + 15 = 33$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — sign error in the subtraction step.\n* Choice C: \"wrong base\" — gets $5y = 5$ instead of $5y = -15$.\n* Choice D: \"stops one step early\" — reports the value of $x$ instead of $y$.\n\n**Test Day Takeaway:** When coefficients of one variable are opposites, add the equations. Double-check which variable the question asks for.",
  skills: ["systems-of-equations", "solving-equations"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $3(4x - 1) + 2(x + 5) = 63$, what is the value of $x$?",
  correctAnswer: "4",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~15s):** Expand: $12x - 3 + 2x + 10 = 63$, combine: $14x + 7 = 63$, so $14x = 56$ and $x = 4$.\n\n**The Full Solution:**\n$3(4x - 1) + 2(x + 5) = 63$\n$12x - 3 + 2x + 10 = 63$\n$14x + 7 = 63$\n$14x = 56$\n$x = 4$\n\n**Common Mistakes to Avoid:**\n* Forgetting to distribute the $3$ and $2$ to every term inside the parentheses.\n* Combining $-3 + 10$ incorrectly.\n\n**Verification:** $3(4(4) - 1) + 2(4 + 5) = 3(15) + 2(9) = 45 + 18 = 63$ \\checkmark.\n\n**Test Day Takeaway:** Distribute each coefficient, combine all like terms, then isolate $x$.",
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
  explanation: "**SAT Pattern: Median Calculation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** With $6$ values, the median is the average of the $3$rd and $4$th values: $\\dfrac{10 + x}{2} = 12$, so $10 + x = 24$ and $x = 14$.\n\n**The Full Solution:**\nFor a data set with $6$ values in order, the median is the average of the $3$rd and $4$th values.\n\nThe ordered data is: $3, 7, 10, x, 18, 22$ (given that this is already in order).\nThe $3$rd value is $10$ and the $4$th value is $x$.\n\n$\\text{Median} = \\dfrac{10 + x}{2} = 12$\n$10 + x = 24$\n$x = 14$\n\nCheck that the order is maintained: $3, 7, 10, 14, 18, 22$ \\checkmark (all in increasing order).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — assumes $x$ must equal the median.\n* Choice C: \"applies the inverse operation\" — averages $10$ and $x$ but solves $\\frac{10 + x}{2} = 12.5$ by mistake.\n* Choice D: \"off-by-one\" — computes $18 - 2 = 16$ using nearby values.\n\n**Test Day Takeaway:** For an even number of data points, the median is the average of the two middle values.",
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
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Slope $= \\dfrac{-5 - 7}{4 - (-2)} = \\dfrac{-12}{6} = -2$. Using $(-2, 7)$: $7 = -2(-2) + b = 4 + b$, so $b = 3$.\n\n**The Full Solution:**\nStep 1: Find the slope.\n$m = \\dfrac{-5 - 7}{4 - (-2)} = \\dfrac{-12}{6} = -2$\n\nStep 2: Find the $y$-intercept using $(-2, 7)$.\n$7 = -2(-2) + b$\n$7 = 4 + b$\n$b = 3$\n\nEquation: $y = -2x + 3$.\n\nVerification: At $(4, -5)$: $-2(4) + 3 = -8 + 3 = -5$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses the $y$-value of the second point as the $y$-intercept.\n* Choice B: \"off-by-one\" — arithmetic slip in solving for $b$.\n* Choice D: \"stops one step early\" — uses the $y$-value of the first point.\n\n**Test Day Takeaway:** Find the slope first, then plug one point into $y = mx + b$ to solve for $b$.",
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
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The slope is $2.4$, meaning $y$ changes by $2.4$ for each $1$-unit increase in $x$. For $5$ units: $2.4 \\times 5 = 12.0$.\n\n**The Full Solution:**\nThe slope of the line is $2.4$, which represents the change in $y$ per unit change in $x$.\n\nWhen $x$ increases by $5$:\n$\\Delta y = m \\times \\Delta x = 2.4 \\times 5 = 12.0$\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — evaluates $y$ at $x = 5$: $2.4(5) - 8.6 = 3.4$, confusing a single $y$-value with the change.\n* Choice B: \"applies the inverse operation\" — confuses the change in $x$ ($5$) with the change in $y$.\n* Choice D: \"wrong base\" — computes $2.4 \\times 5 + 8.6 = 20.6$, incorrectly adding the intercept to the change.\n\n**Test Day Takeaway:** The predicted change in $y$ for a given change in $x$ is simply slope $\\times$ change in $x$. The $y$-intercept does not matter.",
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
  explanation: "**SAT Pattern: Two-Way Table Conditional Percentage**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** People who live alone: $80$. Of those, pet owners: $34$. Percentage: $\\dfrac{34}{80} = 0.425 = 42.5\\%$.\n\n**The Full Solution:**\nThe question asks: of those who live alone, what percentage own a pet?\n\n$\\dfrac{34}{80} = 0.425 = 42.5\\%$\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — divides by the grand total ($200$) instead of the row total ($80$): $\\dfrac{34}{200} = 17\\%$.\n* Choice B: \"applies the inverse operation\" — divides by total pet owners ($115$) instead of row total: $\\dfrac{34}{115} \\approx 30\\%$.\n* Choice D: \"off-by-one\" — gives the percentage who do NOT own a pet ($\\dfrac{46}{80} = 57.5\\%$).\n\n**Test Day Takeaway:** 'Of people who live alone' means the denominator is the row total for 'Lives Alone' ($80$), not the grand total.",
  skills: ["two-way-tables", "probability", "percents"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $\\left(\\dfrac{x^4}{\\sqrt[3]{x}}\\right)^3 = x^k$ for $x > 0$, what is the value of $k$?",
  correctAnswer: "11",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~15s):** Inside: $\\dfrac{x^4}{x^{\\frac{1}{3}}} = x^{4 - \\frac{1}{3}} = x^{\\frac{11}{3}}$. Then $(x^{\\frac{11}{3}})^3 = x^{11}$. So $k = 11$.\n\n**The Full Solution:**\nSimplify inside the parentheses:\n$\\dfrac{x^4}{\\sqrt[3]{x}} = \\dfrac{x^4}{x^{\\frac{1}{3}}} = x^{4 - \\frac{1}{3}} = x^{\\frac{11}{3}}$\n\nRaise to the power of $3$:\n$(x^{\\frac{11}{3}})^3 = x^{(\\frac{11}{3}) \\cdot 3} = x^{11}$\n\nSo $k = 11$.\n\n**Common Mistakes to Avoid:**\n* Writing $\\sqrt[3]{x} = x^3$ instead of $x^{\\frac{1}{3}}$.\n* Adding exponents when dividing (should subtract) or adding when raising to a power (should multiply).\n\n**Verification:** $\\left(\\dfrac{x^4}{\\sqrt[3]{x}}\\right)^3 = \\left(x^{\\frac{11}{3}}\\right)^3 = x^{11}$ \\checkmark.\n\n**Test Day Takeaway:** When simplifying nested exponents: first simplify inside parentheses using division (subtract exponents), then apply the outer exponent (multiply).",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $27^{x-1} = 9^{2x+3}$, what is the value of $x$?",
  correctAnswer: "-9",
  explanation: "**SAT Pattern: Exponential Equations with Common Base**\n\n**The correct answer is $-9$.**\n\n**The Fast Way (~20s):** $27 = 3^3$ and $9 = 3^2$. So $3^{3(x-1)} = 3^{2(2x+3)}$, meaning $3x - 3 = 4x + 6$ and $x = -9$.\n\n**The Full Solution:**\nConvert to base $3$:\n$27^{x-1} = (3^3)^{x-1} = 3^{3(x-1)} = 3^{3x-3}$\n$9^{2x+3} = (3^2)^{2x+3} = 3^{2(2x+3)} = 3^{4x+6}$\n\nSince the bases are equal, set exponents equal:\n$3x - 3 = 4x + 6$\n$-3 - 6 = 4x - 3x$\n$-9 = x$\n\nVerification: Left: $27^{-9-1} = 27^{-10} = 3^{-30}$.\nRight: $9^{2(-9)+3} = 9^{-15} = 3^{-30}$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Writing $27 = 3^3$ but $9 = 3^3$ (should be $3^2$).\n* Distributing incorrectly: $2(2x + 3) = 4x + 6$, not $4x + 3$.\n\n**Verification:** $3(-9) - 3 = -30$ and $4(-9) + 6 = -30$ \\checkmark.\n\n**Test Day Takeaway:** When both sides can be written as powers of the same base, set the exponents equal and solve.",
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
  explanation: "**SAT Pattern: Right Triangle Area with Surds**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The legs are $PQ = 5\\sqrt{3}$ and $QR = 5$. Area $= \\dfrac{1}{2}(5\\sqrt{3})(5) = \\dfrac{25\\sqrt{3}}{2}$.\n\n**The Full Solution:**\nIn a right triangle, the area is $\\dfrac{1}{2} \\times \\text{leg}_1 \\times \\text{leg}_2$.\n\nThe right angle is at $Q$, so $PQ$ and $QR$ are the legs.\n\nArea $= \\dfrac{1}{2} \\times 5\\sqrt{3} \\times 5 = \\dfrac{1}{2} \\times 25\\sqrt{3} = \\dfrac{25\\sqrt{3}}{2}$\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — computes $\\dfrac{1}{2}(5)(5) = \\dfrac{25}{2}$, dropping the $\\sqrt{3}$.\n* Choice C: \"wrong base\" — computes $5 \\times 5 = 25$, forgetting both $\\dfrac{1}{2}$ and $\\sqrt{3}$.\n* Choice D: \"applies the inverse operation\" — forgets the $\\dfrac{1}{2}$, giving $5\\sqrt{3} \\times 5 = 25\\sqrt{3}$.\n\n**Test Day Takeaway:** In a right triangle, the two legs are the base and height. Don't forget the $\\dfrac{1}{2}$ and keep the radical through the calculation.",
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
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Recognize the $8$-$15$-$17$ Pythagorean triple. So $a = 8$ and $a + 7 = 15$. Perimeter $= 8 + 15 + 17 = 40$.\n\n**The Full Solution:**\nApply the Pythagorean theorem: $a^2 + (a + 7)^2 = 17^2$.\n$a^2 + a^2 + 14a + 49 = 289$\n$2a^2 + 14a - 240 = 0$\n$a^2 + 7a - 120 = 0$\n$(a + 15)(a - 8) = 0$\n\nSo $a = 8$ (rejecting the negative root). Then $a + 7 = 15$.\n\nPerimeter $= 8 + 15 + 17 = 40$.\n\nVerification: $8^2 + 15^2 = 64 + 225 = 289 = 17^2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — adds only the two legs ($8 + 15 = 23$) and forgets the hypotenuse.\n* Choice B: \"off-by-one\" — uses $a + 7 = 7$ instead of $15$, getting $8 + 7 + 17 = 32$.\n* Choice D: \"wrong base\" — double-counts the leg $a = 8$, computing $8 + 15 + 17 + 8 = 48$.\n\n**Test Day Takeaway:** Memorize the common Pythagorean triples ($3$-$4$-$5$, $5$-$12$-$13$, $7$-$24$-$25$, $8$-$15$-$17$). When the hypotenuse is $17$, recognize the $8$-$15$-$17$ triple directly.",
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
  explanation: "**SAT Pattern: Quadratic Vertex Form Application**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Use $(1, 8)$: $8 = a(3)^2 - 10 = 9a - 10$, so $9a = 18$ and $a = 2$. $y$-intercept $= f(0) = 2(2)^2 - 10 = 8 - 10 = -2$.\n\n**The Full Solution:**\nSubstitute the point $(1, 8)$ into $f(x) = a(x + 2)^2 - 10$:\n$8 = a(1 + 2)^2 - 10$\n$8 = 9a - 10$\n$18 = 9a$\n$a = 2$\n\nFind the $y$-intercept by evaluating $f(0)$:\n$f(0) = 2(0 + 2)^2 - 10 = 2(4) - 10 = 8 - 10 = -2$\n\nVerification: $f(1) = 2(3)^2 - 10 = 18 - 10 = 8$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — guesses the $y$-intercept is zero.\n* Choice C: \"off-by-one\" — uses $a = 1$ instead of $a = 2$, getting $1(4) - 10 = -6$.\n* Choice D: \"applies the inverse operation\" — gets the right magnitude but wrong sign.\n\n**Test Day Takeaway:** Find $a$ first from the given point, then evaluate $f(0)$ for the $y$-intercept.",
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
  explanation: "**SAT Pattern: Perfect Square Trinomial**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $4x^2 + 12x + 9 = (2x + 3)^2 = 0$, so $2x + 3 = 0$ and $x = -\\dfrac{3}{2}$. Then $2a + 3 = 2(-\\dfrac{3}{2}) + 3 = -3 + 3 = 0$.\n\n**The Full Solution:**\nRecognize the perfect square: $4x^2 + 12x + 9 = (2x)^2 + 2(2x)(3) + 3^2 = (2x + 3)^2$.\n\nSet equal to zero:\n$(2x + 3)^2 = 0$\n$2x + 3 = 0$\n$x = -\\dfrac{3}{2}$\n\nSo $a = -\\dfrac{3}{2}$, and $2a + 3 = 2(-\\dfrac{3}{2}) + 3 = -3 + 3 = 0$.\n\nSince this is a perfect square, there is only one solution: $a = -\\dfrac{3}{2}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — computes $2(-\\dfrac{3}{2}) = -3$ but forgets to add $3$.\n* Choice C: \"applies the inverse operation\" — gives $|a| = \\dfrac{3}{2}$ as the answer.\n* Choice D: \"wrong base\" — reads the constant from the factored form as the answer.\n\n**Test Day Takeaway:** Recognizing perfect square trinomials saves time. If the question asks for an expression involving $x$, you may not need to find $x$ itself.",
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
  explanation: "**SAT Pattern: Discriminant Equals Zero**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Discriminant $= 0$: $b^2 - 4(2)(18) = 0$, so $b^2 = 144$ and $b = 12$ (since $b > 0$).\n\n**The Full Solution:**\nA quadratic has exactly one real solution when the discriminant is zero:\n$b^2 - 4ac = 0$\n\nWith $a = 2$, $c = 18$:\n$b^2 - 4(2)(18) = 0$\n$b^2 - 144 = 0$\n$b^2 = 144$\n$b = \\pm 12$\n\nSince $b > 0$: $b = 12$.\n\nVerification: $2x^2 + 12x + 18 = 0 \\Rightarrow x^2 + 6x + 9 = 0 \\Rightarrow (x + 3)^2 = 0$, so $x = -3$ (one solution) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — computes $\\sqrt{36} = 6$, using $4(2)(18) = 36$ instead of $144$.\n* Choice B: \"off-by-one\" — uses $\\dfrac{b^2}{4a} = 18$ and solves for $b$ incorrectly.\n* Choice D: \"wrong base\" — confuses $b$ with $c = 18$.\n\n**Test Day Takeaway:** One real solution means $b^2 - 4ac = 0$. Solve for the unknown and check the sign constraint.",
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
  explanation: "**SAT Pattern: Circle-Line Intersection**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The center is $(2, -3)$ and $y = -3$ passes through the center (since the center's $y$-coordinate is $-3$). So the chord is a diameter. Radius $= 6$, diameter $= 12$.\n\n**The Full Solution:**\nThe circle has center $(2, -3)$ and radius $\\sqrt{36} = 6$.\n\nSubstitute $y = -3$ into the circle equation:\n$(x - 2)^2 + (-3 + 3)^2 = 36$\n$(x - 2)^2 + 0 = 36$\n$(x - 2)^2 = 36$\n$x - 2 = \\pm 6$\n$x = 8$ or $x = -4$\n\nThe two intersection points are $(8, -3)$ and $(-4, -3)$.\nDistance $= 8 - (-4) = 12$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the radius instead of the diameter.\n* Choice B: \"off-by-one\" — arithmetic slip ($8 + 2 = 10$).\n* Choice D: \"wrong base\" — gives $r^2 = 36$ instead of the distance.\n\n**Test Day Takeaway:** When a horizontal or vertical line passes through the center of a circle, the chord is a diameter. Diameter $= 2r$.",
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
// 2026-06 flow diversification. Wavy shape unique to this test:
//   easy at Q1, Q3, Q19 (Q19 = mid/late breather);
//   medium at Q2, Q4, Q5, Q7, Q10, Q11, Q12;
//   hard everywhere else (Q6, Q8, Q9, Q13-Q18, Q20-Q22), Q21/Q22 hard closers.
// Six transformed pool items infused: E#3 margin-of-error (Q7), D-p7#25 exponential
// back-solve (Q8), D-p2#24 line-translation x-intercept (Q13), D-p41#26 radical
// substitution (Q18), E#19 reverse-percent "increase by p%" breather (Q19),
// D-p23#20 right-triangle cosine ratio (Q20). Retired archetypes: classify-function-
// type, two-way-table conditional probability, margin-of-error (replaced by pool),
// outlier effect, exponential percent interpretation, reverse-percent chain,
// exponent-radical (p+q), coterminal tangent, no-solution find-k, infinitely-many
// find-k, budget-floor inequality, residual.

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A wind turbine's cumulative energy output, in kilowatt-hours, is modeled by $P(d) = 18d + 60$, where $d$ is the number of days the turbine has been running. What is the value of $P(7)$?",
  choices: [
    // distractor: adds 18 + 60 without multiplying by d = 7
    { id: "A", text: "$78$" },
    // distractor: computes 18 * 7 = 126 but drops the + 60 constant
    { id: "B", text: "$126$" },
    { id: "C", text: "$186$" },
    // distractor: multiplies the whole expression by 7 — (18 + 60) * 7
    { id: "D", text: "$546$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Substitute $d = 7$: $P(7) = 18(7) + 60 = 126 + 60 = 186$.\n\n**The Full Solution:**\nReplace $d$ with $7$ in $P(d) = 18d + 60$:\n$P(7) = 18 \\cdot 7 + 60$.\nMultiply first: $18 \\cdot 7 = 126$.\nThen add the constant: $126 + 60 = 186$ kilowatt-hours.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — adds $18 + 60$ without multiplying the coefficient by $d = 7$.\n* Choice B: \"stops one step early\" — computes $18 \\cdot 7 = 126$ but forgets to add the constant $60$.\n* Choice D: \"wrong base\" — multiplies the whole expression by $7$: $(18 + 60) \\cdot 7 = 546$, applying $d$ to the constant too.\n\n**Test Day Takeaway:** To evaluate $f(\\text{input})$, substitute the input for the variable, then follow order of operations — multiply before adding the constant term.",
  skills: ["function-interpretation", "linear-functions"]
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
  explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The rate is $\\dfrac{14}{8} = 1.75$ species per meter. Over $52$ meters: $1.75 \\times 52 = 91$.\n\n**The Full Solution:**\nSet up the proportion $\\dfrac{14 \\text{ species}}{8 \\text{ m}} = \\dfrac{s}{52 \\text{ m}}$.\nCross-multiply: $8s = 14 \\cdot 52 = 728$, so $s = \\dfrac{728}{8} = 91$.\n\nVerification: $\\dfrac{91}{52} = 1.75 = \\dfrac{14}{8}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses $\\tfrac{8}{14}$ as the rate.\n* Choice B: \"wrong formula\" — adds the extra length ($52 - 8 = 44$) to $14$ instead of scaling.\n* Choice D: \"wrong base\" — multiplies $14 \\cdot 8$ instead of scaling by $\\tfrac{52}{8}$.\n\n**Test Day Takeaway:** A rate per unit length scales by multiplication: (rate) $\\times$ (new length). Set up a proportion and cross-multiply to avoid inverting the ratio.",
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
  explanation: "**SAT Pattern: Smallest Integer in an Inequality**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $4n > 28 \\Rightarrow n > 7$. Smallest integer strictly greater than $7$ is $8$.\n\n**The Full Solution:**\n$4n + 7 > 35$\n$4n > 28$\n$n > 7$.\n\nThe smallest integer with $n > 7$ is $8$ (since $7$ does not satisfy $n > 7$).\nVerification: at $n = 8$, $4(8) + 7 = 39 > 35$ \\checkmark. At $n = 7$, $4(7) + 7 = 35$, which is NOT strictly greater.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — confuses $>$ with $\\geq$ and gives the boundary value.\n* Choice C: \"stops one step early\" — solves $4n > 28$ but reports $4n$ instead of $n$.\n* Choice D: \"applies the inverse operation\" — adds $7$ to $35$ instead of subtracting.\n\n**Test Day Takeaway:** Strict $>$ excludes the boundary. After solving $n > k$, the smallest integer answer is $k + 1$.",
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
  explanation: "**SAT Pattern: Mean from List**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Total needed $= 5 \\times 48 = 240$. Sum of the four known $= 42 + 51 + 45 + 39 = 177$. Missing $= 240 - 177 = 63$.\n\n**The Full Solution:**\nThe mean times the count gives the total: $5 \\times 48 = 240$ kilometers.\nThe four known distances sum to $42 + 51 + 45 + 39 = 177$.\nThe fifth distance is $240 - 177 = 63$ kilometers.\n\nVerification: $\\dfrac{42 + 51 + 45 + 39 + 63}{5} = \\dfrac{240}{5} = 48$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — averages only the four listed values instead of solving for the missing fifth.\n* Choice B: \"applies the inverse operation\" — subtracts the mean from the partial sum.\n* Choice D: \"stops one step early\" — assumes the missing value equals the mean.\n\n**Test Day Takeaway:** To recover a missing value from a known mean: multiply the mean by the count to get the total, then subtract the sum of the known values.",
  skills: ["statistics", "mean", "word-problems"]
},
{
  id: 5,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $\\dfrac{2x + 5}{3} = \\dfrac{x + 14}{3}$, what value of $x$ satisfies this equation?",
  correctAnswer: "9",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~10s):** Same denominator $\\Rightarrow$ set numerators equal: $2x + 5 = x + 14 \\Rightarrow x = 9$.\n\n**The Full Solution:**\nSince both sides have the same denominator $3$, set the numerators equal:\n$2x + 5 = x + 14$\n$2x - x = 14 - 5$\n$x = 9$.\n\n**Verification:** Left: $\\dfrac{2(9) + 5}{3} = \\dfrac{23}{3}$. Right: $\\dfrac{9 + 14}{3} = \\dfrac{23}{3}$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Cross-multiplying unnecessarily (both denominators are already $3$).\n* Sign error: $14 + 5 = 19$ instead of $14 - 5 = 9$.\n\n**Test Day Takeaway:** When two fractions with equal denominators are set equal, the numerators must also be equal — no cross-multiplication needed.",
  skills: ["solving-equations"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Consider the system of equations:\n\n$3x + 4y = 18$\n$5x + 2y = 16$\n\nWhat is the value of $x + y$?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~25s):** Multiply equation 2 by $2$: $10x + 4y = 32$. Subtract equation 1: $7x = 14 \\Rightarrow x = 2$. From equation 1: $4y = 18 - 6 = 12 \\Rightarrow y = 3$. So $x + y = 2 + 3 = 5$.\n\n**The Full Solution:**\nMultiply equation 2 by $2$ to match the $y$-coefficient of equation 1: $10x + 4y = 32$.\nSubtract equation 1 from this: $(10x + 4y) - (3x + 4y) = 32 - 18 \\Rightarrow 7x = 14 \\Rightarrow x = 2$.\n\nSubstitute $x = 2$ into equation 2: $5(2) + 2y = 16 \\Rightarrow 2y = 6 \\Rightarrow y = 3$.\n\nVerification: equation 1: $3(2) + 4(3) = 6 + 12 = 18$ \\checkmark; equation 2: $5(2) + 2(3) = 10 + 6 = 16$ \\checkmark.\n\nSo $x + y = 2 + 3 = 5$.\n\n**Common Mistakes to Avoid:**\n* Stopping after solving for $x$ alone ($= 2$) and reporting that as the answer.\n* Sign errors when subtracting equations — line up like terms carefully.\n\n**Test Day Takeaway:** To solve a $2 \\times 2$ system, scale one equation so the coefficients of one variable match (or are opposites), then add or subtract to eliminate.",
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
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The plausible interval is the estimate $\\pm$ the margin of error: $9\\% \\pm 2.5\\% = (6.5\\%, 11.5\\%)$.\n\n**The Full Solution:**\nA margin of error defines a plausible range for the TRUE population value, centered on the sample estimate:\nLower: $9\\% - 2.5\\% = 6.5\\%$.\nUpper: $9\\% + 2.5\\% = 11.5\\%$.\nSo it is plausible that between $6.5\\%$ and $11.5\\%$ of all shirts printed that week are defective.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — reports the margin of error ($2.5\\%$) as if it were the defect rate.\n* Choice C: \"stops one step early\" — treats the sample point estimate as an exact population value, ignoring the margin of error.\n* Choice D: \"off-by-one\" — keeps only the upper endpoint and discards the lower half of the interval.\n\n**Test Day Takeaway:** Margin of error gives a plausible interval (estimate $\\pm$ MoE) for the POPULATION, not an exact value and not a one-sided claim.",
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
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** \"$200\\%$ more\" means the new value is $100\\% + 200\\% = 300\\%$ of the old, a factor of $3$. The $2019$ count ($240$) is at $t = 1$, so the $t = 0$ value is $\\dfrac{240}{3} = 80$. Thus $n = 80(3)^t$.\n\n**The Full Solution:**\nIncreasing by $200\\%$ multiplies by $1 + 2 = 3$ each year, so $n = a(3)^t$ for some initial amount $a$.\nThe end of $2019$ is $t = 1$ (one year after the end of $2018$), and $n(1) = 240$:\n$a(3)^1 = 240 \\Rightarrow 3a = 240 \\Rightarrow a = 80$.\nSo $n = 80(3)^t$.\n\nVerification: $n(1) = 80 \\cdot 3 = 240$ \\checkmark; $n(0) = 80$, and $80 \\to 240$ is a $200\\%$ increase \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — uses the $2019$ value ($240$) as the $t = 0$ initial amount instead of back-solving to $80$.\n* Choice B: \"wrong base off-by-one\" — reads \"$200\\%$ more\" as a factor of $2$ rather than $3$.\n* Choice D: \"wrong base AND wrong initial\" — combines both mistakes.\n\n**Test Day Takeaway:** \"$p\\%$ more\" means multiply by $1 + \\tfrac{p}{100}$. If the given data point is not at $t = 0$, divide by the growth factor to recover the true initial value.",
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
  explanation: "**SAT Pattern: Function Composition**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $g(7) = f(7 - 4) + 2(7) = f(3) + 14 = (5 \\cdot 3 - 3) + 14 = 12 + 14 = 26$.\n\n**The Full Solution:**\nFirst evaluate the shifted-input piece:\n$f(7 - 4) = f(3) = 5(3) - 3 = 12$.\n\nThen evaluate the second term:\n$2 \\cdot 7 = 14$.\n\nCombine:\n$g(7) = 12 + 14 = 26$.\n\nVerification: as a function, $g(x) = f(x - 4) + 2x = (5(x-4) - 3) + 2x = 5x - 20 - 3 + 2x = 7x - 23$. Then $g(7) = 49 - 23 = 26$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses $f(7) = 32$ instead of $f(3)$, then adds $14$.\n* Choice C: \"stops one step early\" — adds only $2$ (treats $2x$ as a constant) instead of $2 \\cdot 7 = 14$.\n* Choice D: \"wrong base\" — applies the shift in the wrong direction ($x + 4$), using $f(11) = 52$, then adds $14$.\n\n**Test Day Takeaway:** $f(x - h)$ shifts the INPUT to $x - h$. Substitute $x = 7$ first into the whole expression for $g(x)$, evaluating each $x$ where it appears.",
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
  explanation: "**SAT Pattern: Quadratic Vertex Form Application**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Vertex of $h(t) = -5(t - 1.2)^2 + 9$ is $(1.2, 9)$. Since $a = -5 < 0$, the vertex is a MAX. Max height $= 9$ m at $t = 1.2$ s.\n\n**The Full Solution:**\nVertex form $h(t) = a(t - h_0)^2 + k$ has vertex $(h_0, k) = (1.2, 9)$. Because $a = -5 < 0$, the parabola opens DOWN and the vertex is the maximum height. The drone reaches its max of $9$ m at $t = 1.2$ s.\n\nVerification: $h(1.2) = 0 + 9 = 9$. The graph is symmetric about $t = 1.2$, so heights before and after are equal and lower \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"swaps coordinates\" — swaps the $t$ (time) and $h$ (height) values of the vertex.\n* Choice C: \"wrong direction\" — since $a < 0$, the vertex is a MAX, not a min.\n* Choice D: \"wrong base\" — uses the leading coefficient $5$ as the time.\n\n**Test Day Takeaway:** Vertex form $a(t - h_0)^2 + k$: $(h_0, k)$ is the vertex; $h_0$ is the time of the extreme and $k$ is its value. A negative leading coefficient means the vertex is a maximum.",
  skills: ["function-interpretation", "quadratic-equations"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "During a promotion, a city bike-share program models the number of daily rides by $r(d) = 18d + 240$, where $d$ is the number of days since the promotion began. After how many days does the model predict $600$ daily rides?",
  choices: [
    // distractor: forgets to subtract the initial 240, solving 18d = 600
    { id: "A", text: "$33$" },
    { id: "B", text: "$20$" },
    // distractor: divides 600 by the sum 18 + 240 (wrong base)
    { id: "C", text: "$2$" },
    // distractor: subtracts but then multiplies instead of dividing (360 × 18 magnitude error → reports 360)
    { id: "D", text: "$360$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Set $18d + 240 = 600$. Subtract: $18d = 360$. Divide: $d = 20$.\n\n**The Full Solution:**\n$18d + 240 = 600$\n$18d = 600 - 240 = 360$\n$d = \\dfrac{360}{18} = 20$.\n\nVerification: $r(20) = 18(20) + 240 = 360 + 240 = 600$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — divides $600$ by $18$ without subtracting the initial $240$.\n* Choice C: \"wrong base\" — divides $600$ by the sum $18 + 240$.\n* Choice D: \"stops one step early\" — reports the intermediate value $360$ instead of dividing by $18$.\n\n**Test Day Takeaway:** To find the input for a target output of a linear model, undo the constant first (subtract), then undo the coefficient (divide).",
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
  explanation: "**SAT Pattern: Percent Increase**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Percent increase $= \\dfrac{\\text{increase}}{\\text{original}} = \\dfrac{15 - 12}{12} = \\dfrac{3}{12} = 0.25 = 25\\%$.\n\n**The Full Solution:**\nThe increase is $15 - 12 = 3$ dollars.\nDivide by the ORIGINAL price: $\\dfrac{3}{12} = \\dfrac{1}{4} = 0.25$.\nAs a percent, that is $25\\%$.\n\nVerification: $12 \\times 1.25 = 15$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — divides the increase by the NEW price ($\\tfrac{3}{15} = 20\\%$).\n* Choice C: \"stops one step early\" — reports the raw dollar increase ($3$) as a percent.\n* Choice D: \"applies the inverse operation\" — uses $\\tfrac{15}{12} = 125\\%$ (the ratio of prices, not the change).\n\n**Test Day Takeaway:** Percent change always divides by the ORIGINAL amount: $\\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$.",
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
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Slope $= \\dfrac{104 - 84}{14 - 10} = \\dfrac{20}{4} = 5$. Using $(10, 84)$: $84 = 5(10) + b \\Rightarrow b = 34$, so $h$: $y = 5x + 34$. Translate down $7$: $k$: $y = 5x + 27$. Set $0 = 5x + 27 \\Rightarrow x = -\\dfrac{27}{5}$.\n\n**The Full Solution:**\nFrom the table, the slope is $\\dfrac{104 - 84}{14 - 10} = 5$ (check: $\\dfrac{134 - 104}{20 - 14} = \\dfrac{30}{6} = 5$ \\checkmark).\nWrite $h$ in slope-intercept form using $(10, 84)$: $84 = 5(10) + b$, so $b = 84 - 50 = 34$ and $h$: $y = 5x + 34$.\nTranslating DOWN $7$ subtracts $7$ from the output: $k$: $y = 5x + 34 - 7 = 5x + 27$.\nThe $x$-intercept of $k$ sets $y = 0$: $5x + 27 = 0 \\Rightarrow x = -\\dfrac{27}{5}$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — gives line $h$'s $x$-intercept ($-\\tfrac{34}{5}$) without applying the shift.\n* Choice C: \"applies the inverse operation\" — translates up instead of down, using $5x + 41 = 0$.\n* Choice D: \"wrong base\" — divides the new constant by the shift amount $7$ instead of the slope $5$.\n\n**Test Day Takeaway:** Translating a line down $c$ units subtracts $c$ from the $y$-intercept. Build the equation from the table first, shift, THEN solve for the new $x$-intercept.",
  skills: ["linear-functions", "transformations", "x-intercept"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The polynomial $p(x)$ has degree $3$ and zeros at $x = -1$, $x = 2$, and $x = 4$. If $p(0) = 16$, what is the value of $p(1)$?",
  correctAnswer: "12",
  explanation: "**SAT Pattern: Polynomial Zeros via Factoring**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~40s):** Write $p(x) = a(x + 1)(x - 2)(x - 4)$. Use $p(0)$ to find $a$: $p(0) = a(1)(-2)(-4) = 8a = 16 \\Rightarrow a = 2$. Then $p(1) = 2(2)(-1)(-3) = 12$.\n\n**The Full Solution:**\nA degree-$3$ polynomial with the given zeros has the form:\n$p(x) = a(x + 1)(x - 2)(x - 4)$ for some leading coefficient $a$.\n\nUse the given value $p(0) = 16$ to solve for $a$:\n$p(0) = a(0 + 1)(0 - 2)(0 - 4) = a(1)(-2)(-4) = 8a = 16$\n$a = 2$.\n\nNow evaluate $p(1)$:\n$p(1) = 2(1 + 1)(1 - 2)(1 - 4) = 2 \\cdot 2 \\cdot (-1) \\cdot (-3) = 12$.\n\n**Verification:** $p(-1) = 2(0)(-3)(-5) = 0$ \\checkmark. $p(2) = 2(3)(0)(-2) = 0$ \\checkmark. $p(4) = 2(5)(2)(0) = 0$ \\checkmark. $p(0) = 2(1)(-2)(-4) = 16$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting the leading coefficient $a$ and assuming $p(x) = (x+1)(x-2)(x-4)$ directly — would give $p(0) = 8$, not $16$.\n* Sign errors with $(0 - 2)(0 - 4) = (-2)(-4) = +8$ (positive product of two negatives).\n* Reporting $a = 2$ as the answer instead of $p(1)$.\n\n**Test Day Takeaway:** A polynomial of degree $n$ with given zeros $r_1, \\ldots, r_n$ has the form $a(x - r_1)\\cdots(x - r_n)$. Use one extra given value (e.g. $p(0)$ or a $y$-intercept) to pin down $a$, then evaluate as needed.",
  skills: ["polynomial-operations", "factoring", "function-interpretation"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Jasper runs a screen-printing booth. His daily operating cost, in dollars, for printing $x$ dozen shirts is modeled by $C(x) = x^2 - 24x + 200$. What is the minimum possible daily operating cost, in dollars?",
  correctAnswer: "56",
  explanation: "**SAT Pattern: Quadratic — Completing the Square**\n\n**The correct answer is $56$.**\n\n**The Fast Way (~30s):** Complete the square: $C(x) = (x - 12)^2 + 200 - 144 = (x - 12)^2 + 56$. The minimum value is $56$ (at $x = 12$).\n\n**The Full Solution:**\nTake half of the linear coefficient: $\\dfrac{-24}{2} = -12$, and square it: $144$.\n$C(x) = x^2 - 24x + 144 - 144 + 200 = (x - 12)^2 + 56$.\nSince $(x - 12)^2 \\ge 0$, the smallest value of $C$ occurs when $x = 12$, giving $C = 56$.\n\n**Verification:** $C(12) = 12^2 - 24(12) + 200 = 144 - 288 + 200 = 56$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting the minimizing input $x = 12$ instead of the minimum cost $56$.\n* Forgetting to subtract the added $144$ when completing the square.\n\n**Test Day Takeaway:** For $ax^2 + bx + c$ with $a > 0$, the minimum value is found by completing the square; the constant left over after $(x - h)^2$ is the minimum.",
  skills: ["quadratic-equations", "completing-the-square", "vertex-form"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the horizontal line $y = -3$ is tangent to the parabola $y = x^2 + 8x + a$, touching it at exactly one point. Here $a$ is a constant. Find $a$.",
  correctAnswer: "13",
  explanation: "**SAT Pattern: Line-Parabola Intersection Count**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~30s):** Tangency means the line touches the parabola once. Set $x^2 + 8x + a = -3 \\Rightarrow x^2 + 8x + (a + 3) = 0$. One solution means discriminant $= 0$: $8^2 - 4(a + 3) = 0 \\Rightarrow a + 3 = 16 \\Rightarrow a = 13$.\n\n**The Full Solution:**\nA tangent line meets the curve at exactly one point, so the equation $x^2 + 8x + a = -3$ must have a single (repeated) root.\nRewrite: $x^2 + 8x + (a + 3) = 0$.\nA quadratic has exactly one real root when its discriminant is $0$:\n$b^2 - 4ac = 8^2 - 4(1)(a + 3) = 64 - 4(a + 3) = 0$.\nSolve: $4(a + 3) = 64 \\Rightarrow a + 3 = 16 \\Rightarrow a = 13$.\n\n**Verification:** With $a = 13$: $x^2 + 8x + 16 = 0 \\Rightarrow (x + 4)^2 = 0 \\Rightarrow x = -4$ (one repeated root) \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting to move the $-3$ to the same side before applying the discriminant.\n* Setting the discriminant greater than or less than $0$ (those give two or zero touch points).\n\n**Test Day Takeaway:** A horizontal line is tangent to a parabola exactly when the resulting quadratic has discriminant $0$ — one repeated root, one touch point.",
  skills: ["quadratic-equations", "discriminant", "systems-of-equations"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "At a farmers' market, the regular price of a jar of honey is $\\$18.00$. Its sale price is $75\\%$ less than the regular price, and that sale price is $20\\%$ greater than the seller's cost for the jar. What was the seller's cost, in dollars, for the jar?",
  correctAnswer: "3.75",
  explanation: "**SAT Pattern: Successive Percent Changes**\n\n**The correct answer is $3.75$.**\n\n**The Fast Way (~30s):** Sale price $= 18 \\times (1 - 0.75) = 18 \\times 0.25 = 4.50$. The sale price is $1.20$ times the cost, so cost $= \\dfrac{4.50}{1.20} = 3.75$.\n\n**The Full Solution:**\nStep 1 — discount: \"$75\\%$ less than $\\$18.00$\" means $18 \\times 0.25 = \\$4.50$ (you keep $25\\%$).\nStep 2 — markup: the sale price is $20\\%$ greater than the cost, so sale $= 1.20 \\times \\text{cost}$.\nSolve for cost: $\\text{cost} = \\dfrac{4.50}{1.20} = 3.75$.\n\n**Verification:** $3.75 \\times 1.20 = 4.50$ (sale price) and $18 \\times 0.25 = 4.50$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Multiplying by $1.20$ instead of dividing in the second step (the cost is the SMALLER base).\n* Subtracting $75\\%$ of $18$ then forgetting that leaves $25\\%$, not $75\\%$.\n\n**Test Day Takeaway:** Chain percent steps one at a time. \"$x\\%$ less\" keeps $(100 - x)\\%$; \"$y\\%$ greater than the cost\" means sale $= (1 + \\tfrac{y}{100})\\times$cost, so divide to recover the cost.",
  skills: ["percent-change", "percent-word-problems"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the equation below, $c$ is a positive constant.\n\n$$\\dfrac{x^2}{\\sqrt{x^2 - c^2}} = \\dfrac{c^2}{\\sqrt{x^2 - c^2}} + 24$$\n\nWhich expression is one of the solutions for $x$?",
  choices: [
    // distractor: uses the excluded boundary x^2 = c^2 (where the denominator is 0)
    { id: "A", text: "$-c$" },
    // distractor: forgets to take the square root of x^2
    { id: "B", text: "$-c^2 - 24^2$" },
    // distractor: subtracts under the radical instead of adding (sign slip on c^2)
    { id: "C", text: "$-\\sqrt{24^2 - c^2}$" },
    { id: "D", text: "$-\\sqrt{c^2 + 24^2}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Radical Equation — Substitution**\n\n**Choice D is correct.**\n\n**The Fast Way (~45s):** Both fractions share the denominator $\\sqrt{x^2 - c^2}$. Multiply through by it: $x^2 = c^2 + 24\\sqrt{x^2 - c^2}$, so $x^2 - c^2 = 24\\sqrt{x^2 - c^2}$. Let $u = \\sqrt{x^2 - c^2}$: then $u^2 = 24u \\Rightarrow u = 24$, so $x^2 - c^2 = 576$ and $x = \\pm\\sqrt{c^2 + 24^2}$.\n\n**The Full Solution:**\nMultiply both sides by $\\sqrt{x^2 - c^2}$:\n$x^2 = c^2 + 24\\sqrt{x^2 - c^2}$\n$x^2 - c^2 = 24\\sqrt{x^2 - c^2}$.\nSubstitute $u = \\sqrt{x^2 - c^2}$ (so $u^2 = x^2 - c^2$):\n$u^2 = 24u \\Rightarrow u^2 - 24u = 0 \\Rightarrow u(u - 24) = 0$.\nThe radical $u = \\sqrt{x^2 - c^2}$ cannot be $0$ (the denominator would vanish), so $u = 24$.\nThen $x^2 - c^2 = 576 = 24^2 \\Rightarrow x^2 = c^2 + 24^2 \\Rightarrow x = \\pm\\sqrt{c^2 + 24^2}$.\nOne solution is $-\\sqrt{c^2 + 24^2}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — uses the boundary $x^2 = c^2$ (where the radical is $0$), which is excluded.\n* Choice B: \"wrong base\" — reports $x^2 = c^2 + 24^2$ without taking the square root.\n* Choice C: \"applies the inverse operation\" — flips the sign under the radical to $24^2 - c^2$.\n\n**Test Day Takeaway:** When the same radical appears on both sides, clear the denominator and substitute $u = \\sqrt{\\cdots}$ to turn the equation into a simple quadratic in $u$.",
  skills: ["radical-equations", "rational-equations", "solving-equations"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The result of increasing a quantity $q$ by $300\\%$ is $84$. What is the value of $q$?",
  choices: [
    { id: "A", text: "$21$" },
    // distractor: treats \"increase by 300%\" as multiplying by 3, so q = 84/3
    { id: "B", text: "$28$" },
    // distractor: multiplies 84 by 3 instead of dividing
    { id: "C", text: "$252$" },
    // distractor: multiplies 84 by 4 (the correct factor, but wrong direction)
    { id: "D", text: "$336$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Percent Increase**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Increasing by $300\\%$ multiplies by $1 + 3 = 4$. So $4q = 84 \\Rightarrow q = 21$.\n\n**The Full Solution:**\nIncreasing $q$ by $300\\%$ adds $3q$ to $q$, giving $q + 3q = 4q$.\nSo $4q = 84 \\Rightarrow q = \\dfrac{84}{4} = 21$.\n\nVerification: $21 + 300\\% \\text{ of } 21 = 21 + 63 = 84$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base off-by-one\" — treats \"increase by $300\\%$\" as multiplying by $3$, giving $84 / 3 = 28$.\n* Choice C: \"applies the inverse operation\" — multiplies $84 \\times 3$ instead of dividing.\n* Choice D: \"applies the inverse operation\" — multiplies $84 \\times 4$ instead of dividing.\n\n**Test Day Takeaway:** \"Increase by $p\\%$\" multiplies the original by $1 + \\tfrac{p}{100}$. A $300\\%$ increase is a factor of $4$, not $3$.",
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
      vertices: [[0, 9], [0, 0], [18, 0]],
      sideLabels: ["9", "", "20"],
      labels: ["", "", ""],
      rightAngleVertex: 1
    }
  },
  correctAnswer: "0.45",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**The correct answer is $0.45$ (equivalently $\\tfrac{9}{20}$).**\n\n**The Fast Way (~20s):** The angle $x^{\\circ}$ sits at the top vertex. The vertical leg of length $9$ is ADJACENT to $x^{\\circ}$, and the hypotenuse is $20$. So $\\cos x^{\\circ} = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}} = \\dfrac{9}{20} = 0.45$.\n\n**The Full Solution:**\nCosine is the ratio of the side adjacent to the angle over the hypotenuse. From the top vertex, the side along the angle (the vertical leg, length $9$) is the adjacent side, and the hypotenuse is $20$.\n$\\cos x^{\\circ} = \\dfrac{9}{20} = 0.45$.\nYou do not need the third side; the adjacent leg and hypotenuse are both given.\n\n**Common Mistakes to Avoid:**\n* Treating the vertical leg as OPPOSITE the top angle (it is adjacent) — that would give $\\sin x^{\\circ}$, not $\\cos x^{\\circ}$.\n* Computing the missing horizontal leg ($\\sqrt{400 - 81} = \\sqrt{319}$) unnecessarily.\n\n**Test Day Takeaway:** Identify the angle's location first. The leg lying along the angle is ADJACENT; cosine $=$ adjacent over hypotenuse. No third side needed when both are given.",
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
  explanation: "**SAT Pattern: Rational Function Transformation**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** A vertical asymptote at $x = 0$ forces $b = 0$, so $f(x) = \\dfrac{a}{x}$. The point $(-5, -1)$ gives $-1 = \\dfrac{a}{-5} \\Rightarrow a = 5$, so $f(x) = \\dfrac{5}{x}$. Then $g(x) = f(x + 3) = \\dfrac{5}{x + 3}$.\n\n**The Full Solution:**\nThe denominator of $f$ is zero at $x = -b$, which is the vertical asymptote. Since the asymptote is $x = 0$, we need $-b = 0$, so $b = 0$ and $f(x) = \\dfrac{a}{x}$.\nUse the point $(-5, -1)$: $-1 = \\dfrac{a}{-5} \\Rightarrow a = 5$. So $f(x) = \\dfrac{5}{x}$.\nNow $g(x) = f(x + 3)$ replaces $x$ with $x + 3$: $g(x) = \\dfrac{5}{x + 3}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — leaves $f$ unshifted, ignoring the $x + 3$ substitution.\n* Choice C: \"wrong base\" — adds the shift to the wrong denominator, producing $x + 8$.\n* Choice D: \"applies the inverse operation\" — multiplies the numerator by $x + 3$ instead of shifting the input.\n\n**Test Day Takeaway:** $f(x + h)$ replaces every $x$ in $f$ with $x + h$, shifting the graph LEFT by $h$. Pin down the constants from the asymptote and the point FIRST, then apply the shift.",
  skills: ["function-transformations", "rational-functions"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The equation $2x^2 - 16x + 5 = 0$ has two distinct solutions $r$ and $s$. What is the value of $\\dfrac{1}{r} + \\dfrac{1}{s}$?",
  correctAnswer: "3.2",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**The correct answer is $3.2$ (equivalently $\\tfrac{16}{5}$).**\n\n**The Fast Way (~30s):** $\\dfrac{1}{r} + \\dfrac{1}{s} = \\dfrac{r + s}{rs}$. By Vieta's: $r + s = \\dfrac{16}{2} = 8$ and $rs = \\dfrac{5}{2}$. So $\\dfrac{1}{r} + \\dfrac{1}{s} = \\dfrac{8}{5/2} = \\dfrac{16}{5} = 3.2$.\n\n**The Full Solution:**\nFor $ax^2 + bx + c = 0$, the sum of the roots is $-\\dfrac{b}{a}$ and the product is $\\dfrac{c}{a}$.\nHere $a = 2$, $b = -16$, $c = 5$:\nSum $r + s = -\\dfrac{-16}{2} = 8$.\nProduct $rs = \\dfrac{5}{2}$.\nCombine the reciprocals over a common denominator:\n$\\dfrac{1}{r} + \\dfrac{1}{s} = \\dfrac{s + r}{rs} = \\dfrac{8}{\\tfrac{5}{2}} = 8 \\cdot \\dfrac{2}{5} = \\dfrac{16}{5} = 3.2$.\n\n**Common Mistakes to Avoid:**\n* Forgetting the leading coefficient: using $r + s = 16$ or $rs = 5$ instead of dividing by $a = 2$.\n* Adding the reciprocals as $\\dfrac{1}{r + s}$ instead of $\\dfrac{r + s}{rs}$.\n\n**Test Day Takeaway:** $\\dfrac{1}{r} + \\dfrac{1}{s} = \\dfrac{r + s}{rs}$ — use Vieta's formulas ($\\text{sum} = -b/a$, $\\text{product} = c/a$) so you never have to solve the quadratic.",
  skills: ["quadratic-equations", "vietas-formulas", "polynomial-operations"]
}
      ]
    }
  ]
};

export default practiceTest3;
