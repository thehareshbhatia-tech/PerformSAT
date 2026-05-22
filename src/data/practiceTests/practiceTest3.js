// Practice Test 3 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Round-6 propagation: M1 lifted to band-3 ceiling on easy items, domain
// rebalanced to 7/6/5/4. M2 hardened to 0E/6M/16H with band-7 ceilings on
// most hard items.

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
  question: "A printing service charges a flat $\\$15$ setup fee plus $\\$3$ per booklet. The total cost to print $b$ booklets, including the setup fee, is $\\$54$. What is the total cost, in dollars, of printing $b + 4$ booklets (with one setup fee)?",
  choices: [
    // distractor: stops one step early — adds the count 4 as dollars instead of 4 \cdot 3 = 12
    { id: "A", text: "$\\$58$" },
    { id: "B", text: "$\\$66$" },
    // distractor: uses the setup fee ($15) as the per-booklet price for the extra ones
    { id: "C", text: "$\\$114$" },
    // distractor: doubles the original $54 (off-by-one wrong base)
    { id: "D", text: "$\\$108$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $4$ extra booklets at $\\$3$ each add $\\$12$ to the original total. New total: $\\$54 + \\$12 = \\$66$.\n\n**The Full Solution:**\nLet the cost equation be $3b + 15 = 54$, so $3b = 39$ and $b = 13$.\nFor $b + 4 = 17$ booklets: total $= 3(17) + 15 = 51 + 15 = \\$66$.\n\nShortcut: you do not need to find $b$. Adding $4$ booklets adds $4 \\cdot \\$3 = \\$12$, and the setup fee is unchanged, so the new total is $\\$54 + \\$12 = \\$66$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — adds the count $4$ as dollars instead of $4 \\cdot \\$3 = \\$12$.\n* Choice C: \"wrong base\" — uses the setup fee ($\\$15$) as the unit price, getting $\\$54 + 4 \\cdot \\$15 = \\$114$.\n* Choice D: \"off-by-one\" — double-counts the original $\\$54$ as if every order pays it twice.\n\n**Test Day Takeaway:** Linear cost = (rate $\\times$ quantity) + fixed fee. Adding more items only changes the rate-times-quantity piece — the fixed fee does not change.",
  skills: ["word-problems", "linear-functions"]
},
{
  id: 2,
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
  id: 3,
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
  id: 4,
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
  id: 5,
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
  question: "If $\\left(\\dfrac{x^3}{\\sqrt{x}}\\right)^2 = x^k$ for $x > 0$, what is the value of $k$?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** Inside: $\\dfrac{x^3}{x^{\\frac{1}{2}}} = x^{3 - \\frac{1}{2}} = x^{\\frac{5}{2}}$. Then $(x^{\\frac{5}{2}})^2 = x^5$. So $k = 5$.\n\n**The Full Solution:**\nSimplify inside the parentheses:\n$\\dfrac{x^3}{\\sqrt{x}} = \\dfrac{x^3}{x^{\\frac{1}{2}}} = x^{3 - \\frac{1}{2}} = x^{\\frac{5}{2}}$\n\nRaise to the power of $2$:\n$(x^{\\frac{5}{2}})^2 = x^{(\\frac{5}{2}) \\cdot 2} = x^5$\n\nSo $k = 5$.\n\n**Common Mistakes to Avoid:**\n* Writing $\\sqrt{x} = x^2$ instead of $x^{\\frac{1}{2}}$.\n* Adding exponents when dividing (should subtract) or adding when raising to a power (should multiply).\n\n**Verification:** $\\left(\\dfrac{x^3}{\\sqrt{x}}\\right)^2 = \\left(x^{\\frac{5}{2}}\\right)^2 = x^5$ \\checkmark.\n\n**Test Day Takeaway:** When simplifying nested exponents: first simplify inside parentheses using division (subtract exponents), then apply the outer exponent (multiply).",
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
  question: "The right triangle shown has legs of length $a$ and $a + 17$ and hypotenuse of length $25$. What is the perimeter of the triangle?",
  diagram: {
    type: "rightTriangle",
    params: {
      sideLabels: ["a", "a + 17", "25"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: stops one step early — sums only the two legs (7 + 24 = 31) without the hypotenuse
    { id: "A", text: "$31$" },
    // distractor: uses a + 17 = 17 (off-by-one) and gets 7 + 17 + 25 = 49
    { id: "B", text: "$49$" },
    { id: "C", text: "$56$" },
    // distractor: forgets to subtract one leg — adds 7 + 24 + 25 + 7 (double-counts a)
    { id: "D", text: "$63$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Recognize the $7$-$24$-$25$ Pythagorean triple. So $a = 7$ and $a + 17 = 24$. Perimeter $= 7 + 24 + 25 = 56$.\n\n**The Full Solution:**\nApply the Pythagorean theorem: $a^2 + (a + 17)^2 = 25^2$.\n$a^2 + a^2 + 34a + 289 = 625$\n$2a^2 + 34a - 336 = 0$\n$a^2 + 17a - 168 = 0$\n$(a + 24)(a - 7) = 0$\n\nSo $a = 7$ (rejecting the negative root). Then $a + 17 = 24$.\n\nPerimeter $= 7 + 24 + 25 = 56$.\n\nVerification: $7^2 + 24^2 = 49 + 576 = 625 = 25^2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — adds only the two legs ($7 + 24 = 31$) and forgets the hypotenuse.\n* Choice B: \"off-by-one\" — uses $a + 17 = 17$ instead of $24$, getting $7 + 17 + 25 = 49$.\n* Choice D: \"wrong base\" — double-counts the leg $a = 7$, computing $7 + 24 + 25 + 7 = 63$.\n\n**Test Day Takeaway:** Memorize the common Pythagorean triples ($3$-$4$-$5$, $5$-$12$-$13$, $7$-$24$-$25$, $8$-$15$-$17$). When the hypotenuse is $25$, check both $7$-$24$-$25$ and the scaled $15$-$20$-$25$.",
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
// Distribution: 3E / 6M / 13H with band-8 ceiling on Q15, Q17.
// Calibrated to Bluebook Module 2 Hard (Q15 polynomial w/ zeros, Q17 trig identity).

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "A retirement portfolio invested in a particular index fund has historically quadrupled in value every $14$ years. Assuming this trend continues, which type of function best models the value of the portfolio as a function of the number of years since the initial investment?",
  choices: [
    // distractor: linear — value would add the SAME amount each year
    { id: "A", text: "Increasing linear" },
    { id: "B", text: "Increasing exponential" },
    // distractor: wrong direction — \"quadruples\" is growth, not decay
    { id: "C", text: "Decreasing exponential" },
    // distractor: wrong type — quadratic has constant second difference, not constant multiplier
    { id: "D", text: "Quadratic" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Classify Physical Motion Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** \"Quadruples every $14$ years\" = multiplied by a fixed factor ($4$) every fixed period $\\Rightarrow$ exponential growth.\n\n**The Full Solution:**\nWhen a quantity is MULTIPLIED by a constant factor (here, $4$) every constant time interval (here, $14$ years), the model is EXPONENTIAL. The factor is $> 1$, so the function increases.\n\nA model would be $V(t) = V_0 \\cdot 4^{t/14}$ where $t$ is years.\n\nVerification: at $t = 0$, $V = V_0$; at $t = 14$, $V = 4V_0$; at $t = 28$, $V = 16V_0$. Each $14$-year period quadruples the value, not adds a fixed amount \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong formula\" — linear would mean adding the SAME number of dollars each year, but quadrupling adds an increasing number each year.\n* Choice C: \"wrong direction\" — quadrupling means GROWTH, not decay. Decay would say \"halves every $14$ years.\"\n* Choice D: \"wrong formula\" — quadratic relationships have constant SECOND differences, not constant multiplicative factors.\n\n**Test Day Takeaway:** \"Multiplied / doubles / quadruples / grows by X percent every [period]\" $\\Rightarrow$ EXPONENTIAL. \"Adds X every [period]\" $\\Rightarrow$ LINEAR.",
  skills: ["function-interpretation", "exponential-growth-decay"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "What is the smallest integer $n$ for which $3n + 5 > 26$?",
  choices: [
    // distractor: uses ≥ instead of strict > and gives the boundary
    { id: "A", text: "$7$" },
    { id: "B", text: "$8$" },
    // distractor: stops one step early at 3n > 21 without dividing
    { id: "C", text: "$21$" },
    // distractor: applies inverse op - uses 26 + 5 instead of subtracting
    { id: "D", text: "$31$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Smallest Integer in an Inequality**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $3n > 21 \\Rightarrow n > 7$. Smallest integer strictly greater than $7$ is $8$.\n\n**The Full Solution:**\n$3n + 5 > 26$\n$3n > 21$\n$n > 7$.\n\nThe smallest integer with $n > 7$ is $8$ (since $7$ does not satisfy $n > 7$).\nVerification: at $n = 8$, $3(8) + 5 = 29 > 26$ \\checkmark. At $n = 7$, $3(7) + 5 = 26$, which is NOT strictly greater.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — confuses $>$ with $\\geq$ and gives the boundary value.\n* Choice C: \"stops one step early\" — solves $3n > 21$ but reports $3n$ instead of $n$.\n* Choice D: \"applies the inverse operation\" — adds $5$ to $26$ instead of subtracting.\n\n**Test Day Takeaway:** Strict $>$ excludes the boundary. After solving $n > k$, the smallest integer answer is $k + 1$.",
  skills: ["solving-equations", "inequalities"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A local food truck has been operating for two years. The function $c(w) = 18w + 45$ approximates the cumulative number of regular customers the truck has gained after $w$ weeks of operation. Which statement is the best interpretation of the $y$-intercept of the graph of $y = c(w)$ in the $wy$-plane in this context?",
  choices: [
    // distractor: confuses slope (rate) with y-intercept (initial)
    { id: "A", text: "The truck added approximately $45$ new regular customers each week." },
    { id: "B", text: "The truck began operations with approximately $45$ regular customers from a previous venue." },
    // distractor: swaps slope and intercept
    { id: "C", text: "The truck began operations with approximately $18$ regular customers from a previous venue." },
    // distractor: combines both confusions
    { id: "D", text: "The truck added approximately $18$ new regular customers each week, starting from zero." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $y$-intercept of $c(w) = 18w + 45$ is $c(0) = 45$. At $w = 0$ (the truck just started), regular customers $\\approx 45$.\n\n**The Full Solution:**\nThe $y$-intercept of a linear function $c(w) = mw + b$ is $b$, the value at $w = 0$. Here $b = 45$, and $w$ counts weeks of operation, so $w = 0$ corresponds to when the truck began. The truck started with about $45$ regular customers, presumably carried over from a previous venue.\n\nVerification: at $w = 0$, $c = 45$ ✓. At $w = 1$, $c = 63$ — gained $18$ customers in one week, confirming the slope. The slope is the per-week growth; the $y$-intercept is the starting customer base \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"correct interpretation of slope, wrong question\" — accurately describes the slope, but the question asks about the $y$-intercept.\n* Choice C: \"swaps coefficients\" — uses the slope's magnitude as the starting count.\n* Choice D: \"sign error AND wrong base\" — ignores the $+45$ and treats the start as zero.\n\n**Test Day Takeaway:** $y$-intercept = value at input $0$ = the starting point in the story. Slope = rate of change per unit. The question's wording (\"$y$-intercept\" vs \"slope/rate\") tells you which to report.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A researcher models the relationship between the age $x$ of a truck, in years, and its value $y$, in thousands of dollars, using the equation $y = -3.5x + 28$. A particular truck that is $4$ years old has an actual value of $\\$16{,}400$. What is the residual, in thousands of dollars?",
  diagram: { type: "scatterplot", params: {
    points: [[0,29],[1,23],[2,22],[3,19],[5,12],[5,9],[6,8],[7,3]],
    xMin: 0, xMax: 8, yMin: 0, yMax: 32,
    xGridStep: 1, xLabelStep: 1, yGridStep: 4, yLabelStep: 8,
    bestFitLine: { slope: -3.5, intercept: 28 },
    highlightPoint: [4, 16.4], highlightLabel: "(4, 16.4)", showResidual: true,
    xLabel: "Age (years)", yLabel: "Value (thousands of dollars)",
  } },
  choices: [
    // distractor: predicted - actual (reversed sign)
    { id: "A", text: "$-2.4$" },
    { id: "B", text: "$2.4$" },
    // distractor: arithmetic error
    { id: "C", text: "$4.8$" },
    // distractor: gives the predicted value, not the residual
    { id: "D", text: "$14$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Residual**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Predicted: $y = -3.5(4) + 28 = -14 + 28 = 14$ thousand. Actual: $16.4$ thousand. Residual $= 16.4 - 14 = 2.4$.\n\n**The Full Solution:**\nPredicted at $x = 4$: $-3.5(4) + 28 = -14 + 28 = 14$ thousand dollars.\nActual: $\\$16{,}400 = 16.4$ thousand dollars.\nResidual $=$ actual $-$ predicted $= 16.4 - 14 = 2.4$ thousand dollars.\nA positive residual means the actual value lies above the line of best fit.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — computes predicted $-$ actual ($14 - 16.4 = -2.4$).\n* Choice C: \"off-by-one\" — arithmetic slip on the subtraction step.\n* Choice D: \"stops one step early\" — gives the predicted value $14$ without subtracting.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted. Positive means above the line; negative means below.",
  skills: ["scatterplots", "statistics"]
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
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A survey of $500$ students asked about their grade level and whether they participate in a sport.\n\n| | Plays Sport | No Sport | Total |\n|---|---|---|---|\n| 9th Grade | $90$ | $60$ | $150$ |\n| 10th Grade | $110$ | $40$ | $150$ |\n| 11th Grade | $75$ | $125$ | $200$ |\n| Total | $275$ | $225$ | $500$ |\n\nAmong 10th graders, what fraction plays a sport?",
  choices: [
    // distractor: uses grand total 500 as denominator
    { id: "A", text: "$\\dfrac{110}{500}$" },
    // distractor: uses sport total 275 as denominator
    { id: "B", text: "$\\dfrac{110}{275}$" },
    { id: "C", text: "$\\dfrac{110}{150}$" },
    // distractor: gives 10th grade total over sport total (inverted ratio)
    { id: "D", text: "$\\dfrac{150}{275}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** \"Among 10th graders\" restricts to the 10th Grade row: total $= 150$. Plays sport $= 110$. Fraction $= \\dfrac{110}{150}$.\n\n**The Full Solution:**\n$P(\\text{sport} \\mid \\text{10th grade}) = \\dfrac{110}{150}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses the grand total ($500$) as the denominator.\n* Choice B: \"applies the inverse operation\" — uses the total who play sports ($275$) as the denominator.\n* Choice D: \"off-by-one\" — gives $\\dfrac{\\text{10th grade total}}{\\text{sport total}}$ (an inverted ratio).\n\n**Test Day Takeaway:** \"Among\" or \"given\" a group means restrict to that row or column. The group total is the denominator.",
  skills: ["probability", "two-way-tables"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the system of equations below, $a$ and $b$ are constants. The system has infinitely many solutions $(x, y)$. What is the value of $a + b$?\n\n$2x + 3y = 7$\n$ax + 9y = b$",
  choices: [
    // distractor: stops one step early — gives just a (= 6)
    { id: "A", text: "$6$" },
    // distractor: stops one step early — gives just b (= 21)
    { id: "B", text: "$21$" },
    { id: "C", text: "$27$" },
    // distractor: wrong base — adds the visible coefficients 9 + 3
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Infinitely many solutions $\\Leftrightarrow$ the two equations represent the same line. Multiply equation 1 by $3$: $6x + 9y = 21$. Match against $ax + 9y = b$: $a = 6$, $b = 21$. So $a + b = 27$.\n\n**The Full Solution:**\nFor the system to have infinitely many solutions, the equations must be proportional — equation 2 must be a scalar multiple of equation 1.\n\nThe $y$-coefficient in equation 1 is $3$; in equation 2 it is $9$. The scaling factor is $\\frac{9}{3} = 3$.\n\nApply the same scaling to the other terms: $a = 3 \\cdot 2 = 6$ and $b = 3 \\cdot 7 = 21$.\n\nVerify: $3 \\cdot (2x + 3y) = 6x + 9y$ and $3 \\cdot 7 = 21$. So $6x + 9y = 21$ matches $ax + 9y = b$ with $a = 6$, $b = 21$ \\checkmark.\n\n$a + b = 6 + 21 = 27$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports just $a$ without adding $b$.\n* Choice B: \"stops one step early\" — reports just $b$ without adding $a$.\n* Choice D: \"wrong base\" — adds the $y$-coefficients $3 + 9 = 12$ instead of solving for $a$ and $b$.\n\n**Test Day Takeaway:** Infinitely many solutions $\\Leftrightarrow$ all three ratios match: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$. Find the scale factor from the easiest pair, then apply it everywhere.",
  skills: ["systems-of-equations"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A researcher wants to estimate the proportion of households in a city that have solar panels. She surveys a random sample of $400$ households and finds that $12\\%$ have solar panels, with a margin of error of $\\pm 3\\%$ at a $95\\%$ confidence level. Which of the following is the most appropriate conclusion?",
  choices: [
    // distractor: claims an exact value for the population (sample never gives that)
    { id: "A", text: "Exactly $12\\%$ of all households in the city have solar panels." },
    { id: "B", text: "It is plausible that between $9\\%$ and $15\\%$ of all households in the city have solar panels." },
    // distractor: applies the interval to the sample (the sample IS exactly 12%)
    { id: "C", text: "Between $9\\%$ and $15\\%$ of the $400$ surveyed households have solar panels." },
    // distractor: misinterprets the confidence level as the proportion
    { id: "D", text: "$95\\%$ of all households in the city have solar panels." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $12\\% \\pm 3\\% = (9\\%, 15\\%)$. This interval estimates the true population proportion. \"Plausible\" correctly conveys the uncertainty.\n\n**The Full Solution:**\nThe confidence interval is $12\\% - 3\\% = 9\\%$ to $12\\% + 3\\% = 15\\%$.\nThis interval applies to ALL households in the city (the population), not just the sample.\nThe sample itself had exactly $12\\%$ with solar panels.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — a sample gives an estimate, never an exact value for the population.\n* Choice C: \"wrong base\" — the interval is for the population, not the sample (the sample result is exactly $12\\%$).\n* Choice D: \"applies the inverse operation\" — misinterprets the confidence level as the proportion.\n\n**Test Day Takeaway:** A confidence interval is a plausible range for the POPULATION parameter, not a description of the sample.",
  skills: ["margin-of-error", "statistics"]
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
  question: "A soccer player kicks a ball into the air. The height of the ball above the ground, in meters, after the kick is modeled by $h(t) = -4.9(t - 0.8)^2 + 4.2$, where $t$ is the time, in seconds, after the kick. Which of the following is the best interpretation of the vertex of the graph of $h(t)$ in the $th$-plane?",
  choices: [
    // distractor: swaps coordinates
    { id: "A", text: "The ball reaches a maximum height of $0.8$ meters, $4.2$ seconds after the kick." },
    { id: "B", text: "The ball reaches a maximum height of $4.2$ meters, $0.8$ seconds after the kick." },
    // distractor: wrong direction — calls the max a min
    { id: "C", text: "The ball reaches a minimum height of $4.2$ meters, $0.8$ seconds after the kick." },
    // distractor: wrong base — uses the leading coefficient as the time
    { id: "D", text: "The ball reaches a maximum height of $4.2$ meters, $4.9$ seconds after the kick." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Interpret Vertex Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Vertex of $h(t) = -4.9(t - 0.8)^2 + 4.2$ is $(0.8, 4.2)$. $a = -4.9 < 0$, so vertex is a MAX. Max height $= 4.2$ m at $t = 0.8$ s.\n\n**The Full Solution:**\nVertex form $h(t) = a(t - h_0)^2 + k$ has vertex $(h_0, k) = (0.8, 4.2)$. Because $a = -4.9 < 0$, the parabola opens DOWN and the vertex is the maximum height. The ball reaches its max of $4.2$ m at $t = 0.8$ s.\n\nVerification: $h(0.8) = 0 + 4.2 = 4.2$. $h(0)$ (at the kick): $h \\approx -4.9(0.64) + 4.2 \\approx 1.06$ m (above the ground at kick time). $h(1.6) \\approx 1.06$ (symmetric) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"swaps coordinates\" — swaps the $t$ (time) and $h$ (height) values of the vertex.\n* Choice C: \"wrong direction\" — since $a < 0$, the vertex is a MAX, not a min.\n* Choice D: \"wrong base\" — uses the gravity-related leading coefficient $4.9$ as the time.\n\n**Test Day Takeaway:** Vertex form $a(t - h_0)^2 + k$ in a projectile context: $(h_0, k)$ is the vertex, where $h_0$ is the time of max and $k$ is the max height. The leading coefficient $a$ encodes gravity, not time.",
  skills: ["function-interpretation", "quadratic-equations"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  question: "A data set of $9$ values is listed in order:\n\n$4, 6, 6, 8, 9, 11, 11, 13, 22$\n\nIf the value $22$ is removed from the data set, which statement correctly describes the change?",
  choices: [
    { id: "A", text: "The mean decreases and the median decreases." },
    // distractor: median seems resistant but actually shifts here
    { id: "B", text: "The mean decreases and the median stays the same." },
    // distractor: the mean clearly changes when largest value removed
    { id: "C", text: "The mean stays the same and the median decreases." },
    // distractor: removing largest value cannot increase the median
    { id: "D", text: "The mean decreases and the median increases." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice A is correct.**\n\n**The Full Solution:**\nOriginal ($9$ values): Sum $= 4+6+6+8+9+11+11+13+22 = 90$. Mean $= \\dfrac{90}{9} = 10$. Median ($5$th value) $= 9$.\n\nAfter removing $22$ ($8$ values): $4, 6, 6, 8, 9, 11, 11, 13$. Sum $= 68$. Mean $= \\dfrac{68}{8} = 8.5$. Median (average of $4$th and $5$th) $= \\dfrac{8+9}{2} = 8.5$.\n\nMean: $10 \\to 8.5$ (decreases by $1.5$) \\checkmark.\nMedian: $9 \\to 8.5$ (decreases by $0.5$) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — the median seems resistant to outliers, but switching from odd to even count changes the median calculation, causing a small decrease here.\n* Choice C: \"wrong base\" — the mean clearly decreases when the largest value is removed.\n* Choice D: \"applies the inverse operation\" — removing the largest value cannot increase the median.\n\n**Test Day Takeaway:** Removing a high outlier decreases the mean. The median may also shift, especially when the count changes from odd to even.",
  skills: ["statistics"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Consider the system of equations:\n\n$3x + 4y = 18$\n$5x + 2y = 16$\n\nWhat is the value of $x + y$?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Solve for a Combination**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~25s):** Multiply equation 2 by $2$: $10x + 4y = 32$. Subtract equation 1: $7x = 14 \\Rightarrow x = 2$. From equation 1: $4y = 18 - 6 = 12 \\Rightarrow y = 3$. So $x + y = 2 + 3 = 5$.\n\n**The Full Solution:**\nMultiply equation 2 by $2$ to match the $y$-coefficient of equation 1: $10x + 4y = 32$.\nSubtract equation 1 from this: $(10x + 4y) - (3x + 4y) = 32 - 18 \\Rightarrow 7x = 14 \\Rightarrow x = 2$.\n\nSubstitute $x = 2$ into equation 2: $5(2) + 2y = 16 \\Rightarrow 2y = 6 \\Rightarrow y = 3$.\n\nVerification: equation 1: $3(2) + 4(3) = 6 + 12 = 18$ \\checkmark; equation 2: $5(2) + 2(3) = 10 + 6 = 16$ \\checkmark.\n\nSo $x + y = 2 + 3 = 5$.\n\n**Common Mistakes to Avoid:**\n* Stopping after solving for $x$ alone ($= 2$) and reporting that as the answer.\n* Sign errors when subtracting equations — line up like terms carefully.\n\n**Test Day Takeaway:** To solve a $2 \\times 2$ system, scale one equation so the coefficients of one variable match (or are opposites), then add or subtract to eliminate.",
  skills: ["systems-of-equations", "linear-functions"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "hard",
  band: 6,
  question: "A radioactive substance decays according to $A(t) = 200(0.84)^{\\frac{t}{3}}$, where $A(t)$ is the amount in grams and $t$ is the time in years. By what percent does the substance decay every $3$ years?",
  correctAnswer: "16",
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**The correct answer is $16$.**\n\n**The Fast Way (~15s):** Every $3$ years, the multiplier is $0.84$. Percent decay $= 1 - 0.84 = 0.16 = 16\\%$.\n\n**The Full Solution:**\nWhen $t$ increases by $3$:\n$A(t+3) = 200(0.84)^{\\frac{t+3}{3}} = 200(0.84)^{\\frac{t}{3}} \\cdot 0.84 = 0.84 \\cdot A(t)$.\nEvery $3$ years, the amount is multiplied by $0.84$.\nPercent decay $= 1 - 0.84 = 0.16 = 16\\%$.\n\n**Verification:** At $t = 0$: $A = 200$. At $t = 3$: $A = 200(0.84) = 168$.\nDecrease: $\\dfrac{200 - 168}{200} = \\dfrac{32}{200} = 0.16 = 16\\%$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Answering $84$ (the retention factor, not the decay rate).\n* Finding the annual rate instead of the $3$-year rate.\n\n**Test Day Takeaway:** A decay multiplier $b < 1$ over period $d$ means the percent decrease per period is $(1 - b) \\times 100\\%$.",
  skills: ["exponential-functions", "percents"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  question: "The positive number $x$ is $180\\%$ of the sum of the positive numbers $y$ and $z$, and $y$ is $25\\%$ of $z$. What percent of $y$ is $x$?",
  choices: [
    // distractor: adds the percents directly: 180 + 25 = 205
    { id: "A", text: "$205\\%$" },
    // distractor: uses (1 + 0.25) * 180 = 225
    { id: "B", text: "$225\\%$" },
    { id: "C", text: "$900\\%$" },
    // distractor: divides 180 by 0.25 = 720
    { id: "D", text: "$720\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Set $z = 100$. Then $y = 25\\% \\cdot 100 = 25$. Sum $y + z = 125$. So $x = 1.80 \\cdot 125 = 225$. Percent of $y$ that $x$ is: $\\dfrac{225}{25} \\cdot 100 = 900\\%$.\n\n**The Full Solution:**\nLet $z = 100$ (any positive choice works since percents are scale-invariant).\nThen $y = 0.25 \\cdot 100 = 25$.\nSum: $y + z = 25 + 100 = 125$.\n$x = 1.80 \\cdot 125 = 225$.\nPercent of $y$ that $x$ is: $\\dfrac{x}{y} \\cdot 100\\% = \\dfrac{225}{25} \\cdot 100\\% = 9 \\cdot 100\\% = 900\\%$.\n\nVerification (algebraic): $x = 1.8(y + z)$ and $y = 0.25z$, so $z = 4y$. Then $x = 1.8(y + 4y) = 1.8 \\cdot 5y = 9y$, giving $\\dfrac{x}{y} = 9 = 900\\%$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — adds the two percents ($180 + 25 = 205$).\n* Choice B: \"stops one step early\" — computes $x = 225$ but reports it as a raw percent.\n* Choice D: \"wrong base\" — divides $180$ by $0.25$ ignoring the sum structure.\n\n**Test Day Takeaway:** When two percents stack, pick a clean numerical value (e.g., $z = 100$) and compute through. \"Percent of $y$\" means divide by $y$, not by $z$.",
  skills: ["percents", "word-problems"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 8,
  question: "The polynomial $p(x)$ has degree $3$ and zeros at $x = -1$, $x = 2$, and $x = 4$. If $p(0) = 16$, what is the value of $p(1)$?",
  correctAnswer: "12",
  explanation: "**SAT Pattern: Polynomial from Zeros + Value**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~40s):** Write $p(x) = a(x + 1)(x - 2)(x - 4)$. Use $p(0)$ to find $a$: $p(0) = a(1)(-2)(-4) = 8a = 16 \\Rightarrow a = 2$. Then $p(1) = 2(2)(-1)(-3) = 12$.\n\n**The Full Solution:**\nA degree-$3$ polynomial with the given zeros has the form:\n$p(x) = a(x + 1)(x - 2)(x - 4)$ for some leading coefficient $a$.\n\nUse the given value $p(0) = 16$ to solve for $a$:\n$p(0) = a(0 + 1)(0 - 2)(0 - 4) = a(1)(-2)(-4) = 8a = 16$\n$a = 2$.\n\nNow evaluate $p(1)$:\n$p(1) = 2(1 + 1)(1 - 2)(1 - 4) = 2 \\cdot 2 \\cdot (-1) \\cdot (-3) = 12$.\n\n**Verification:** $p(-1) = 2(0)(-3)(-5) = 0$ \\checkmark. $p(2) = 2(3)(0)(-2) = 0$ \\checkmark. $p(4) = 2(5)(2)(0) = 0$ \\checkmark. $p(0) = 2(1)(-2)(-4) = 16$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting the leading coefficient $a$ and assuming $p(x) = (x+1)(x-2)(x-4)$ directly — would give $p(0) = 8$, not $16$.\n* Sign errors with $(0 - 2)(0 - 4) = (-2)(-4) = +8$ (positive product of two negatives).\n* Reporting $a = 2$ as the answer instead of $p(1)$.\n\n**Test Day Takeaway:** A polynomial of degree $n$ with given zeros $r_1, \\ldots, r_n$ has the form $a(x - r_1)\\cdots(x - r_n)$. Use one extra given value (e.g. $p(0)$ or a $y$-intercept) to pin down $a$, then evaluate as needed.",
  skills: ["polynomial-operations", "factoring", "function-interpretation"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The equation $2(5x - 4) + 3 = ax + 2$ has no solution. What is the value of $a$?",
  correctAnswer: "10",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~15s):** Expand left: $10x - 5$. For no solution, the coefficient of $x$ must match (so the variable cancels) but the constants must differ: $a = 10$ and $-5 \\neq 2$. So $a = 10$.\n\n**The Full Solution:**\nExpand the left side: $2(5x - 4) + 3 = 10x - 8 + 3 = 10x - 5$.\nSo the equation is $10x - 5 = ax + 2$.\nRearrange: $(10 - a)x = 7$.\nFor no solution, the coefficient of $x$ must be $0$ while the right side is nonzero:\n$10 - a = 0 \\Rightarrow a = 10$.\nCheck: $0 \\cdot x = 7 \\Rightarrow 0 = 7$, which is a contradiction. No solution \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Solving for $x$ instead of $a$.\n* Setting $a$ to make the equation have infinitely many solutions instead of no solutions.\n\n**Test Day Takeaway:** No solution $\\iff$ $0 \\cdot x = (\\text{nonzero})$. Match coefficients of $x$ on both sides; require the constants to differ.",
  skills: ["solving-equations", "linear-functions"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 8,
  question: "For an acute angle $\\theta$, $\\sin\\theta - \\cos\\theta = \\dfrac{1}{5}$. What is the value of $\\sin\\theta \\cdot \\cos\\theta$?",
  correctAnswer: "12/25",
  explanation: "**SAT Pattern: Trig Identity (Square the Sum/Difference)**\n\n**The correct answer is $\\dfrac{12}{25}$.**\n\n**The Fast Way (~30s):** Square both sides of $\\sin\\theta - \\cos\\theta = \\dfrac{1}{5}$: $\\sin^2\\theta - 2\\sin\\theta\\cos\\theta + \\cos^2\\theta = \\dfrac{1}{25}$. Use $\\sin^2\\theta + \\cos^2\\theta = 1$: $1 - 2\\sin\\theta\\cos\\theta = \\dfrac{1}{25}$. So $2\\sin\\theta\\cos\\theta = \\dfrac{24}{25}$, giving $\\sin\\theta\\cos\\theta = \\dfrac{12}{25}$.\n\n**The Full Solution:**\nStart with: $\\sin\\theta - \\cos\\theta = \\dfrac{1}{5}$.\n\nSquare both sides:\n$(\\sin\\theta - \\cos\\theta)^2 = \\left(\\dfrac{1}{5}\\right)^2$\n$\\sin^2\\theta - 2\\sin\\theta\\cos\\theta + \\cos^2\\theta = \\dfrac{1}{25}$\n\nApply the Pythagorean identity $\\sin^2\\theta + \\cos^2\\theta = 1$:\n$1 - 2\\sin\\theta\\cos\\theta = \\dfrac{1}{25}$\n$2\\sin\\theta\\cos\\theta = 1 - \\dfrac{1}{25} = \\dfrac{24}{25}$\n$\\sin\\theta\\cos\\theta = \\dfrac{12}{25}$.\n\n**Verification:** Working backward, if $\\sin\\theta\\cos\\theta = \\dfrac{12}{25}$, then $(\\sin\\theta - \\cos\\theta)^2 = 1 - 2\\left(\\dfrac{12}{25}\\right) = \\dfrac{1}{25}$, so $|\\sin\\theta - \\cos\\theta| = \\dfrac{1}{5}$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting the cross-term $-2\\sin\\theta\\cos\\theta$ when squaring (it's a binomial, not separate squares).\n* Reporting $\\dfrac{24}{25}$ (the value of $2\\sin\\theta\\cos\\theta$, not $\\sin\\theta\\cos\\theta$).\n* Trying to find $\\theta$ explicitly — unnecessary.\n\n**Test Day Takeaway:** When given $\\sin\\theta \\pm \\cos\\theta$ and asked about $\\sin\\theta\\cos\\theta$ (or vice versa), SQUARE the expression and apply $\\sin^2 + \\cos^2 = 1$. Don't try to solve for the angle.",
  skills: ["trigonometry", "trig-identities"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $3x^2 + bx + 12 = 0$ has no real solutions. What is the greatest integer value of $b$?",
  choices: [
    { id: "A", text: "$11$" },
    // distractor: uses ≤ instead of < (misses strict inequality boundary)
    { id: "B", text: "$12$" },
    // distractor: off-by-one beyond the boundary
    { id: "C", text: "$13$" },
    // distractor: gives b^2 = 144 instead of b
    { id: "D", text: "$144$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Discriminant $< 0$: $b^2 - 4(3)(12) < 0 \\Rightarrow b^2 - 144 < 0 \\Rightarrow b^2 < 144 \\Rightarrow |b| < 12$. Greatest integer: $b = 11$.\n\n**The Full Solution:**\nFor $3x^2 + bx + 12 = 0$: $a = 3$, $c = 12$.\nDiscriminant $= b^2 - 4(3)(12) = b^2 - 144$.\nNo real solutions: $b^2 < 144$, so $|b| < 12$.\nAt $b = 12$: discriminant $= 0$ (exactly one real solution — not \"no\" solutions).\nGreatest integer strictly less than $12$: $b = 11$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — uses $\\leq$ instead of $<$ (at $b = 12$ there IS a repeated root).\n* Choice C: \"off-by-one\" — over-shoots the boundary.\n* Choice D: \"wrong base\" — gives $b^2 = 144$ instead of $b$.\n\n**Test Day Takeaway:** No real solutions $=$ discriminant $< 0$. At discriminant $= 0$, there's one real solution (not zero).",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  question: "If $x > 0$, the expression $\\sqrt[4]{x^3} \\cdot \\sqrt[3]{x^5}$ is equivalent to $x^{\\frac{p}{q}}$ where $\\dfrac{p}{q}$ is in lowest terms. What is the value of $p + q$?",
  choices: [
    // distractor: gives p alone (29) without adding q
    { id: "A", text: "$29$" },
    // distractor: sums radical exponents directly (3 + 5 = 8)
    { id: "B", text: "$8$" },
    { id: "C", text: "$41$" },
    // distractor: sums all numbers in expression (4 + 3 + 5 + 3 = 15)
    { id: "D", text: "$15$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** $\\sqrt[4]{x^3} = x^{\\frac{3}{4}}$. $\\sqrt[3]{x^5} = x^{\\frac{5}{3}}$. Add: $\\dfrac{3}{4} + \\dfrac{5}{3} = \\dfrac{9}{12} + \\dfrac{20}{12} = \\dfrac{29}{12}$. So $p + q = 29 + 12 = 41$.\n\n**The Full Solution:**\nConvert each radical to a fractional exponent:\n$\\sqrt[4]{x^3} = x^{\\frac{3}{4}}, \\quad \\sqrt[3]{x^5} = x^{\\frac{5}{3}}$\n\nWhen multiplying same bases, add exponents:\n$x^{\\frac{3}{4}} \\cdot x^{\\frac{5}{3}} = x^{\\frac{3}{4} + \\frac{5}{3}} = x^{\\frac{9 + 20}{12}} = x^{\\frac{29}{12}}$\n\n$\\gcd(29, 12) = 1$, so $\\dfrac{29}{12}$ is already in lowest terms. Then $p = 29$, $q = 12$, and $p + q = 41$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives just the numerator $p = 29$, forgetting to add $q$.\n* Choice B: \"applies the inverse operation\" — sums the radical exponents directly ($3 + 5 = 8$) instead of converting to fractional exponents.\n* Choice D: \"wrong base\" — sums all the integers visible in the expression ($4 + 3 + 5 + 3 = 15$).\n\n**Test Day Takeaway:** $\\sqrt[n]{x^m} = x^{\\frac{m}{n}}$ — power on top, root on the bottom. Add fractional exponents when multiplying same bases.",
  skills: ["polynomial-operations", "exponent-rules", "radical-expressions"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The graph of $x^2 + y^2 - 6x + 8y = 24$ in the $xy$-plane is a circle. What is the length of the circle's radius?",
  choices: [
    { id: "A", text: "$7$" },
    // distractor: gives r^2 = 49 instead of r
    { id: "B", text: "$49$" },
    // distractor: subtracts completion terms instead of adding (sqrt(24 - 25))
    { id: "C", text: "$\\sqrt{24}$" },
    // distractor: takes the constant 24 directly without completing the square
    { id: "D", text: "$\\sqrt{49 - 24}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Complete the Square — Circle Center**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Half of $-6$ is $-3$, squared is $9$. Half of $8$ is $4$, squared is $16$. Add to both sides: $(x - 3)^2 + (y + 4)^2 = 24 + 9 + 16 = 49$. Radius $= \\sqrt{49} = 7$.\n\n**The Full Solution:**\nGroup terms and complete the square for each variable:\n$(x^2 - 6x) + (y^2 + 8y) = 24$\n$(x^2 - 6x + 9) + (y^2 + 8y + 16) = 24 + 9 + 16$\n$(x - 3)^2 + (y + 4)^2 = 49$\n\nSo $r^2 = 49$ and $r = 7$.\n\nVerification: center $(3, -4)$, radius $7$. The point $(3, 3)$ on the circle satisfies $(3-3)^2 + (3+4)^2 = 49$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — gives $r^2 = 49$ instead of $r = 7$.\n* Choice C: \"wrong base\" — uses the constant $24$ directly without completing the square.\n* Choice D: \"applies the inverse operation\" — subtracts $24$ from the completion terms instead of adding.\n\n**Test Day Takeaway:** Complete the square SYMMETRICALLY for both variables. \"Half the coefficient, squared\" gets added to BOTH sides — once for $x$, once for $y$.",
  skills: ["circle-equations", "solving-equations"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In right triangle $DEF$ shown, angle $F$ is the right angle, $DE = 41$, and $DF = 40$. What is the value of $\\sin(D)$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["D", "F", "E"],
      sideLabels: ["40", "", "41"],
      rightAngleVertex: 1
    }
  },
  choices: [
    { id: "A", text: "$\\dfrac{9}{41}$" },
    // distractor: uses DF (adjacent to D) — this is cos(D)
    { id: "B", text: "$\\dfrac{40}{41}$" },
    // distractor: uses EF/DF — this is tan(D)
    { id: "C", text: "$\\dfrac{9}{40}$" },
    // distractor: inverts the ratio
    { id: "D", text: "$\\dfrac{41}{40}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Right Triangle Trigonometry**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Right angle at $F$, so $DE = 41$ is the hypotenuse. Find $EF$: $EF = \\sqrt{41^2 - 40^2} = \\sqrt{1681 - 1600} = \\sqrt{81} = 9$. For angle $D$: opposite $= EF = 9$, hypotenuse $= DE = 41$. $\\sin(D) = \\dfrac{9}{41}$.\n\n**The Full Solution:**\n$EF^2 = DE^2 - DF^2 = 1681 - 1600 = 81$.\n$EF = 9$.\nVerification: $9^2 + 40^2 = 81 + 1600 = 1681 = 41^2$ \\checkmark.\n$\\sin(D) = \\dfrac{\\text{opposite to } D}{\\text{hypotenuse}} = \\dfrac{EF}{DE} = \\dfrac{9}{41}$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — uses $DF = 40$ (adjacent to $D$); this is $\\cos(D)$.\n* Choice C: \"applies the inverse operation\" — uses $\\dfrac{EF}{DF} = \\dfrac{9}{40}$; this is $\\tan(D)$.\n* Choice D: \"off-by-one\" — inverts the cosine ratio.\n\n**Test Day Takeaway:** Draw the triangle, identify the hypotenuse (opposite the right angle), then use SOH-CAH-TOA for the specified angle.",
  skills: ["trigonometry", "triangles"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A school prom committee has a budget of $\\$720$ for centerpieces. To receive a vendor's quantity discount, the committee must order a minimum of $100$ centerpieces total. Simple centerpieces cost $\\$4$ each and elegant centerpieces cost $\\$8$ each. What is the maximum number of elegant centerpieces the committee can order while staying within the budget and qualifying for the discount?",
  correctAnswer: "80",
  explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**The correct answer is $80$.**\n\n**The Fast Way (~40s):** Let $s$ = simple, $e$ = elegant. To max $e$, set $s + e = 100$ exactly, $s = 100 - e$. Budget: $4(100 - e) + 8e \\leq 720 \\Rightarrow 400 + 4e \\leq 720 \\Rightarrow e \\leq 80$.\n\n**The Full Solution:**\nLet $s$ = simple centerpieces, $e$ = elegant centerpieces.\nConstraints:\n* Discount floor: $s + e \\geq 100$.\n* Budget: $4s + 8e \\leq 720$.\n* Both non-negative integers.\n\nTo MAXIMIZE $e$, fill the rest with the cheaper simple centerpieces at EXACTLY the floor (any extras waste budget). Set $s = 100 - e$:\n\n$4(100 - e) + 8e \\leq 720$\n$400 - 4e + 8e \\leq 720$\n$4e \\leq 320$\n$e \\leq 80$.\n\nMax integer: $e = 80$.\n\n**Verification:** With $e = 80$, $s = 20$. Total: $20 + 80 = 100 \\geq 100$ ✓. Cost: $4(20) + 8(80) = 80 + 640 = 720 \\leq 720$ ✓ (exactly at budget). Try $e = 81$, $s = 19$: $4(19) + 8(81) = 76 + 648 = 724 > 720$ ✗ — exceeds budget \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Answering $90$ (treats $720/8 = 90$ as the max, ignoring the floor — also $s = 0, e = 90$ violates the floor: $0 + 90 = 90 < 100$).\n* Answering $100$ (treats the floor itself as the answer).\n* Answering $81$ (forgets to round DOWN).\n* Answering $20$ (reports simple centerpieces instead of elegant).\n\n**Test Day Takeaway:** Two-constraint optimization (budget + minimum total): To maximize one quantity, fill the remainder with the cheaper option AT EXACTLY the minimum total. Solve the resulting single-variable inequality and take the FLOOR.",
  skills: ["inequalities", "word-problems", "systems-of-equations"]
},
{
  id: 23,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "What is the value of $\\tan\\dfrac{85\\pi}{3}$?",
  choices: [
    { id: "A", text: "$-\\sqrt{3}$" },
    { id: "B", text: "$-\\dfrac{\\sqrt{3}}{3}$" },
    { id: "C", text: "$\\dfrac{\\sqrt{3}}{3}$" },
    { id: "D", text: "$\\sqrt{3}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Coterminal Angle Reduction (Tangent)**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** $\\dfrac{85\\pi}{3} = 28\\pi + \\dfrac{\\pi}{3}$. Tangent has period $\\pi$, so $\\tan\\dfrac{85\\pi}{3} = \\tan\\dfrac{\\pi}{3} = \\sqrt{3}$.\n\n**Why the wrong answers are tempting:**\n* A: forgets the period reduction sign.\n* B/C: gives $\\cot(\\pi/3)$.\n\n**Test Day Takeaway:** Tangent has period $\\pi$ (not $2\\pi$). Reduce by the largest multiple of $\\pi$ first.",
  skills: ["trigonometry", "radians"]
},
{
  id: 24,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$$y = -2.5$$\n$$y = x^2 + 10x + a$$\n\nIn the given system of equations, $a$ is a positive constant. The system has exactly one distinct real solution. What is the value of $a$?",
  correctAnswer: "22.5",
  explanation: "**SAT Pattern: Discriminant Equals Zero**\n\n**The correct answer is $22.5$.**\n\n**The Fast Way (~30s):** $x^2 + 10x + (a+2.5) = 0$. Discriminant $=0$: $100 - 4(a+2.5) = 0 \\Rightarrow a = 22.5$.\n\n**Common Mistakes to Avoid:**\n* Forgetting to move the $-2.5$ to the left side first.\n\n**Test Day Takeaway:** Parabola meets horizontal line at one point iff discriminant $= 0$.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 25,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The regular price of a shirt at a store is $\\$14.40$. The sale price of the shirt is $75\\%$ less than the regular price, and the sale price is $20\\%$ greater than the store's cost for the shirt. What was the store's cost, in dollars, for the shirt?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: Markup–Discount Chain**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~30s):** Sale price $= 14.40 \\times 0.25 = 3.60$. Sale $=$ cost $\\times 1.20 \\Rightarrow$ cost $= 3.60/1.20 = 3.00$.\n\n**Common Mistakes to Avoid:**\n* Multiplying instead of dividing in the second step.\n\n**Test Day Takeaway:** Chain percent changes: each step is a separate multiplication or division.",
  skills: ["percent-change", "percent-word-problems"]
},
{
  id: 26,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The rational function $f$ is defined by $f(x) = \\dfrac{a}{x+b}$, where $a$ and $b$ are constants. The partial graph of $y = f(x)$ has a vertical asymptote at $x = 0$ and passes through the point $(-5, -1)$. If $g(x) = f(x + 3)$, which equation could define function $g$?",
  choices: [
    { id: "A", text: "$g(x) = \\dfrac{5}{x}$" },
    { id: "B", text: "$g(x) = \\dfrac{5}{x+3}$" },
    { id: "C", text: "$g(x) = \\dfrac{5}{x+8}$" },
    { id: "D", text: "$g(x) = \\dfrac{5(x+3)}{x+3}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Horizontal Shift of a Rational Function**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Asymptote at $x=0$ means $b=0$, so $f(x) = a/x$. Point $(-5, -1)$: $a/(-5) = -1 \\Rightarrow a = 5$. Then $g(x) = f(x+3) = 5/(x+3)$.\n\n**Why the wrong answers are tempting:**\n* A: forgets the shift.\n* C: stacks the shift.\n* D: simplifies to constant.\n\n**Test Day Takeaway:** $f(x+h)$ shifts the graph LEFT by $h$.",
  skills: ["function-transformations", "rational-functions"]
}
      ]
    }
  ]
};

export default practiceTest3;
