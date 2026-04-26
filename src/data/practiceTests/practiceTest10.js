// Practice Test 10 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Round-6 propagation: M1 lifted to band-3 ceiling on easy items, domain
// rebalanced to 7/6/5/4. M2 hardened to 0E/6M/16H with band-7 ceilings on
// most hard items and domain rebalance toward 7/6/5/4.

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
  question: "A community center surveyed its members and found that $35\\%$ of them prefer evening classes. If $1{,}050$ members prefer evening classes, how many members were surveyed in total?",
  choices: [
    // distractor: applies inverse op — multiplies $1{,}050 \\cdot 0.35 = 367.5$, rounds to $368$
    { id: "A", text: "$368$" },
    // distractor: wrong base — divides by complement $0.65$ instead of $0.35$
    { id: "B", text: "$1{,}615$" },
    { id: "C", text: "$3{,}000$" },
    // distractor: off-by-one — divides by $0.035$ instead of $0.35$ (decimal slip)
    { id: "D", text: "$30{,}000$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Total $\\times 0.35 = 1{,}050$, so total $= 1{,}050 / 0.35 = 3{,}000$.\n\n**The Full Solution:**\nLet $T$ be the total number of members surveyed. Then $0.35 \\cdot T = 1{,}050$.\nDivide both sides by $0.35$: $T = \\dfrac{1{,}050}{0.35} = 3{,}000$.\n\nVerification: $35\\%$ of $3{,}000 = 0.35 \\cdot 3{,}000 = 1{,}050$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — multiplies $1{,}050 \\cdot 0.35 = 367.5$ instead of dividing.\n* Choice B: \"wrong base\" — divides by the complement $0.65$ (treats $1{,}050$ as the count for the other group).\n* Choice D: \"off-by-one\" — divides by $0.035$ instead of $0.35$ (decimal-place slip).\n\n**Test Day Takeaway:** When a percent of an unknown total is given, divide the part by the percent (as a decimal) to recover the whole.",
  skills: ["percents"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The list shows the number of books read by five students during a semester:\n\n$$12, \\; 8, \\; 15, \\; 10, \\; 5$$\n\nIf one additional student is added to the data set with a value of $20$, what is the median of the new data set?",
  choices: [
    // distractor: stops one step early — gives the original median (10) without recomputing
    { id: "A", text: "$10$" },
    { id: "B", text: "$11$" },
    // distractor: applies inverse op — averages min and max instead of two middle values
    { id: "C", text: "$12.5$" },
    // distractor: wrong base — picks the new value as the median
    { id: "D", text: "$20$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Order the new data: $5, 8, 10, 12, 15, 20$. With $6$ values, median is the average of the $3$rd and $4$th: $\\dfrac{10 + 12}{2} = 11$.\n\n**The Full Solution:**\nList all values in order: $5, 8, 10, 12, 15, 20$. With an even number of values $(6)$, the median is the average of the two middle values (the $3$rd and $4$th): $\\dfrac{10 + 12}{2} = 11$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports the original median ($10$) without recomputing.\n* Choice C: \"applies the inverse operation\" — averages min and max ($\\dfrac{5 + 20}{2} = 12.5$) instead of the two middle values.\n* Choice D: \"wrong base\" — picks the newly added value as the median.\n\n**Test Day Takeaway:** Always sort the data first. With an even count, the median is the average of the two middle values.",
  skills: ["statistics"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $\\dfrac{3x}{14} = \\dfrac{9}{7}$, what is the value of $x + 4$?",
  choices: [
    // distractor: stops one step early — solves for x = 6 and reports it
    { id: "A", text: "$6$" },
    // distractor: wrong sign — subtracts 4 instead of adding
    { id: "B", text: "$2$" },
    { id: "C", text: "$10$" },
    // distractor: off-by-one — leaves the answer at 3x = 18 instead of x
    { id: "D", text: "$18$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Cross-multiply: $3x \\cdot 7 = 14 \\cdot 9$, so $21x = 126$ and $x = 6$. Then $x + 4 = 10$.\n\n**The Full Solution:**\n$\\dfrac{3x}{14} = \\dfrac{9}{7}$\n\nMultiply both sides by $14$: $3x = 14 \\cdot \\dfrac{9}{7} = 2 \\cdot 9 = 18$, so $x = 6$.\n\nThe question asks for $x + 4$, not $x$: $6 + 4 = 10$.\n\nVerification: $\\dfrac{3(6)}{14} = \\dfrac{18}{14} = \\dfrac{9}{7}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — solves for $x = 6$ and forgets the $+ 4$ shift.\n* Choice B: \"wrong sign\" — subtracts $4$ from $x$ instead of adding.\n* Choice D: \"off-by-one\" — keeps $3x = 18$ instead of solving for $x$.\n\n**Test Day Takeaway:** Re-read the last sentence before answering. The question often asks for a related quantity, not the variable itself.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A taxi service charges a flat pickup fee of $\\$4.50$ plus $\\$2.75$ per mile. The total cost for a ride of $m$ miles is $\\$26.75$. What would be the total cost, in dollars, of a ride that is $4$ miles longer (with one pickup fee)?",
  choices: [
    // distractor: stops one step early — adds $4 directly instead of $4 \\cdot 2.75 = $11
    { id: "A", text: "$\\$30.75$" },
    { id: "B", text: "$\\$37.75$" },
    // distractor: applies inverse op — uses the flat fee as the per-mile rate ($4.50 \\cdot 4 = $18)
    { id: "C", text: "$\\$44.75$" },
    // distractor: wrong base — uses combined rate ($4.50 + 2.75 = $7.25 per mile)
    { id: "D", text: "$\\$55.75$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $4$ extra miles at $\\$2.75$ each add $4 \\cdot 2.75 = \\$11$ to the original total. New total: $\\$26.75 + \\$11 = \\$37.75$.\n\n**The Full Solution:**\nLet the cost equation be $2.75m + 4.50 = 26.75$, so $2.75m = 22.25$ and $m = 8.09\\overline{09}$.\nFor $m + 4$ miles: total $= 2.75(m + 4) + 4.50 = 2.75m + 11 + 4.50 = 26.75 + 11 = \\$37.75$.\n\nShortcut: you do not need to find $m$. Adding $4$ miles adds $4 \\cdot \\$2.75 = \\$11$, and the pickup fee is unchanged, so the new total is $\\$26.75 + \\$11 = \\$37.75$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — adds $\\$4$ directly instead of $4 \\cdot \\$2.75$.\n* Choice C: \"applies the inverse operation\" — uses the flat fee $\\$4.50$ as the per-mile rate, getting $\\$26.75 + 4 \\cdot \\$4.50 = \\$44.75$.\n* Choice D: \"wrong base\" — adds the two rates ($\\$7.25$) and uses that as the per-mile rate.\n\n**Test Day Takeaway:** Linear cost = (rate $\\times$ quantity) + fixed fee. Adding more units only changes the rate-times-quantity piece — the fixed fee does not change.",
  skills: ["word-problems", "linear-functions"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The function $g(t) = 250 - 15t$ models the gallons of water remaining in a tank after $t$ hours of draining. What does the number $15$ represent in this context?",
  choices: [
    { id: "A", text: "The tank loses $15$ gallons of water each hour." },
    // distractor: wrong base — confuses slope (15) with the y-intercept (250)
    { id: "B", text: "The tank starts with $15$ gallons of water." },
    // distractor: applies inverse op — treats 15 as a time value rather than a rate
    { id: "C", text: "After $15$ hours the tank is completely empty." },
    // distractor: applies inverse op — inverts the rate (1/15 hours per gallon)
    { id: "D", text: "The tank requires $15$ hours to lose $1$ gallon of water." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** In $g(t) = 250 - 15t$, the coefficient of $t$ is the rate of change. With a $-15$ coefficient, the tank loses $15$ gallons per hour.\n\n**The Full Solution:**\nThe function is in the form $g(t) = b + mt$ where $m = -15$ is the slope and $b = 250$ is the $y$-intercept. The slope tells us the rate of change: for each additional hour, the volume decreases by $15$ gallons.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — confuses the slope ($15$) with the initial value, which is $250$.\n* Choice C: \"applies the inverse operation\" — treats $15$ as an input time value instead of a rate.\n* Choice D: \"applies the inverse operation\" — inverts the rate (one gallon per $\\dfrac{1}{15}$ hour).\n\n**Test Day Takeaway:** In $f(x) = b + mx$, the coefficient of the variable is always the rate of change per unit of that variable.",
  skills: ["function-interpretation", "linear-functions", "slope"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A researcher collected data on hours studied and exam scores for $20$ students. The line of best fit is $y = 5.8x + 42$, where $x$ is hours studied and $y$ is the predicted exam score. One student studied for $6$ hours and scored $82$. What is the residual for this student?",
  choices: [
    // distractor: wrong sign — computes predicted - actual instead of actual - predicted
    { id: "A", text: "$-5.2$" },
    { id: "B", text: "$5.2$" },
    // distractor: off-by-one — uses 5.8 \\cdot 7 = 40.6 by mistake
    { id: "C", text: "$6.8$" },
    // distractor: wrong base — uses x = 6 directly as the predicted value
    { id: "D", text: "$76$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Residual**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Predicted: $5.8(6) + 42 = 34.8 + 42 = 76.8$. Residual = actual $-$ predicted = $82 - 76.8 = 5.2$.\n\n**The Full Solution:**\nStep 1: Find the predicted value at $x = 6$: $y = 5.8(6) + 42 = 34.8 + 42 = 76.8$.\nStep 2: Residual = actual $-$ predicted = $82 - 76.8 = 5.2$.\nA positive residual means the actual score was above the prediction.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — computes predicted $-$ actual (reverses the formula).\n* Choice C: \"off-by-one\" — uses $5.8 \\times 7$ by mistake.\n* Choice D: \"wrong base\" — uses the predicted value $76.8$ rounded as the answer.\n\n**Test Day Takeaway:** Residual = actual $-$ predicted. Positive means above the line.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "\n\n| | Supports Policy | Opposes Policy | No Opinion | Total |\n|---|---|---|---|---|\n| Under $30$ | $85$ | $60$ | $15$ | $160$ |\n| $30$ and Over | $120$ | $95$ | $25$ | $240$ |\n| Total | $205$ | $155$ | $40$ | $400$ |\n\nBased on the table, what fraction of those who oppose the policy are under $30$?",
  choices: [
    // distractor: wrong base — uses 160 (Under 30 row total) as the denominator
    { id: "A", text: "$\\dfrac{60}{160}$" },
    { id: "B", text: "$\\dfrac{60}{155}$" },
    // distractor: wrong base — uses 400 (grand total) as the denominator
    { id: "C", text: "$\\dfrac{60}{400}$" },
    // distractor: off-by-one — uses the 30+ opposers (95) instead of under 30 (60)
    { id: "D", text: "$\\dfrac{95}{155}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"Of those who oppose\" means the denominator is the Opposes column total $= 155$. Under $30$ who oppose $= 60$. Fraction $= \\dfrac{60}{155}$.\n\n**The Full Solution:**\nThe condition is \"of those who oppose the policy,\" so we restrict to the Opposes column (total $155$). Among those, $60$ are under $30$. The fraction is $\\dfrac{60}{155}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses $160$ (the Under $30$ row total) as the denominator.\n* Choice C: \"wrong base\" — uses $400$ (grand total) as the denominator.\n* Choice D: \"off-by-one\" — uses the $30$+ opposers ($95$) instead of under $30$ ($60$).\n\n**Test Day Takeaway:** Read the condition carefully — it determines your denominator.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $4(2x - 1) + 5 = 3x + 16$, what is the value of $x$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~20s):** Distribute and simplify: $8x - 4 + 5 = 3x + 16 \\Rightarrow 8x + 1 = 3x + 16 \\Rightarrow 5x = 15 \\Rightarrow x = 3$.\n\n**The Full Solution:**\n$4(2x - 1) + 5 = 3x + 16$\n$8x - 4 + 5 = 3x + 16$\n$8x + 1 = 3x + 16$\n$5x = 15$\n$x = 3$\n\n**Verification:** LHS $= 4(2(3) - 1) + 5 = 4(5) + 5 = 25$. RHS $= 3(3) + 16 = 9 + 16 = 25$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Distributing $4$ incorrectly as $8x - 1$ instead of $8x - 4$.\n* Sign errors when combining $-4 + 5 = 1$.\n\n**Test Day Takeaway:** Distribute first, combine like terms second, isolate the variable last.",
  skills: ["solving-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A population of bacteria doubles every $3$ hours. If the initial population is $500$, which function $P$ models the population after $t$ hours?",
  choices: [
    // distractor: applies inverse op — uses 3t instead of t/3 in the exponent
    { id: "A", text: "$P(t) = 500(2)^{3t}$" },
    { id: "B", text: "$P(t) = 500(2)^{t/3}$" },
    // distractor: wrong base — swaps the doubling factor (2) and the period (3)
    { id: "C", text: "$P(t) = 500(3)^{t/2}$" },
    // distractor: applies inverse op — uses linear growth instead of exponential
    { id: "D", text: "$P(t) = 500 + 2t$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Doubles every $3$ hours means base $2$, and the exponent must equal $1$ when $t = 3$, so the exponent is $\\dfrac{t}{3}$.\n\n**The Full Solution:**\nGeneral form: $P(t) = P_0 \\cdot b^{t/d}$ where $P_0 = 500$, $b = 2$ (doubles), $d = 3$ hours.\nSo $P(t) = 500(2)^{t/3}$.\n\nCheck: at $t = 3$, $P = 500(2)^1 = 1000$ \\checkmark. At $t = 6$, $P = 500(2)^2 = 2000$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses $3t$ instead of $\\dfrac{t}{3}$, growing far too fast.\n* Choice C: \"wrong base\" — swaps the base and period.\n* Choice D: \"applies the inverse operation\" — uses linear growth instead of exponential.\n\n**Test Day Takeaway:** \"Doubles every $d$ periods\" means base $2$, exponent $\\dfrac{t}{d}$.",
  skills: ["exponential-functions"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In a right triangle, one angle measures $90^{\\circ}$ and another measures $42^{\\circ}$. The side opposite the $42^{\\circ}$ angle has length $14$. Which expression gives the length of the hypotenuse?",
  choices: [
    { id: "A", text: "$\\dfrac{14}{\\sin 42^{\\circ}}$" },
    // distractor: wrong base — uses cosine (adjacent/hypotenuse) instead of sine
    { id: "B", text: "$\\dfrac{14}{\\cos 42^{\\circ}}$" },
    // distractor: applies inverse op — multiplies (gives a value < 14, less than the opposite leg)
    { id: "C", text: "$14 \\sin 42^{\\circ}$" },
    // distractor: wrong base + inverse op — both errors combined
    { id: "D", text: "$14 \\cos 42^{\\circ}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $\\sin 42^{\\circ} = \\dfrac{\\text{opposite}}{\\text{hypotenuse}} = \\dfrac{14}{h}$, so $h = \\dfrac{14}{\\sin 42^{\\circ}}$.\n\n**The Full Solution:**\nIn a right triangle, $\\sin(\\theta) = \\dfrac{\\text{opposite}}{\\text{hypotenuse}}$. For the $42^{\\circ}$ angle, the opposite side is $14$ and the hypotenuse is $h$:\n$\\sin 42^{\\circ} = \\dfrac{14}{h} \\Rightarrow h = \\dfrac{14}{\\sin 42^{\\circ}}$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — uses cosine, which relates the adjacent leg, not the opposite.\n* Choice C: \"applies the inverse operation\" — multiplies by sine, but $\\sin 42^{\\circ} < 1$, so the result is less than $14$ — smaller than the opposite leg, which is impossible for a hypotenuse.\n* Choice D: \"applies the inverse operation\" + \"wrong base\" — both mistakes (cosine AND multiplication).\n\n**Test Day Takeaway:** SOH-CAH-TOA: Sine $= \\dfrac{\\text{Opposite}}{\\text{Hypotenuse}}$. To find the hypotenuse from the opposite leg, divide by $\\sin$.",
  skills: ["triangles", "angles"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A store sells two types of gift cards. Small gift cards cost $\\$15$ each and large gift cards cost $\\$25$ each. On Monday, the store sold a total of $30$ gift cards for a total of $\\$550$. How many large gift cards were sold?",
  correctAnswer: "10",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~25s):** Let $\\ell$ be large cards. Total cards: $s + \\ell = 30$. Total cost: $15s + 25\\ell = 550$. Substitute $s = 30 - \\ell$: $15(30 - \\ell) + 25\\ell = 550 \\Rightarrow 450 + 10\\ell = 550 \\Rightarrow \\ell = 10$.\n\n**The Full Solution:**\nLet $s$ = number of small gift cards and $\\ell$ = number of large gift cards.\n$s + \\ell = 30$\n$15s + 25\\ell = 550$\n\nFrom the first equation: $s = 30 - \\ell$.\nSubstitute: $15(30 - \\ell) + 25\\ell = 550$\n$450 - 15\\ell + 25\\ell = 550$\n$450 + 10\\ell = 550$\n$\\ell = 10$\n\n**Verification:** $s = 20$, $\\ell = 10$. Total cards: $20 + 10 = 30$ \\checkmark. Total cost: $15(20) + 25(10) = 300 + 250 = 550$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Setting up $25s + 15\\ell = 550$ (swapping prices).\n* Solving for $s$ instead of $\\ell$.\n\n**Test Day Takeaway:** When two equations describe a real-world context, define variables clearly and substitute.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Line $p$ passes through the points $(2, -1)$ and $(6, 7)$. What is the equation of line $p$ in slope-intercept form?",
  choices: [
    { id: "A", text: "$y = 2x - 5$" },
    // distractor: wrong sign — gets +3 instead of -5 for the intercept
    { id: "B", text: "$y = 2x + 3$" },
    // distractor: applies inverse op — uses reciprocal slope 1/2 instead of 2
    { id: "C", text: "$y = \\dfrac{1}{2}x - 2$" },
    // distractor: wrong sign — uses negative slope -2 instead of 2
    { id: "D", text: "$y = -2x + 3$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Slope $= \\dfrac{7 - (-1)}{6 - 2} = \\dfrac{8}{4} = 2$. Use point $(2, -1)$: $-1 = 2(2) + b \\Rightarrow b = -5$. So $y = 2x - 5$.\n\n**The Full Solution:**\nSlope: $m = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{7 - (-1)}{6 - 2} = \\dfrac{8}{4} = 2$.\nUsing point-slope with $(2, -1)$: $y - (-1) = 2(x - 2) \\Rightarrow y + 1 = 2x - 4 \\Rightarrow y = 2x - 5$.\nCheck with $(6, 7)$: $2(6) - 5 = 7$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong sign\" — sign error when computing $b$, getting $+3$ instead of $-5$.\n* Choice C: \"applies the inverse operation\" — uses reciprocal slope $\\dfrac{1}{2}$ instead of $2$.\n* Choice D: \"wrong sign\" — uses negative slope $-2$ instead of $+2$.\n\n**Test Day Takeaway:** Find slope first, then plug one point into $y = mx + b$ to find $b$.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A solid right circular cylinder has a radius of $4$ inches and a height of $9$ inches. The volume of the cylinder, in cubic inches, can be expressed as $k\\pi$. What is the value of $k$?",
  choices: [
    // distractor: stops one step early — forgets to square the radius (uses r·h)
    { id: "A", text: "$36$" },
    // distractor: applies inverse op — uses cone formula V = (1/3)πr²h
    { id: "B", text: "$48$" },
    { id: "C", text: "$144$" },
    // distractor: off-by-one — squares the height instead of the radius
    { id: "D", text: "$324$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (4)^2 (9) = 16 \\cdot 9 \\pi = 144\\pi$. So $k = 144$.\n\n**The Full Solution:**\nThe volume formula for a right circular cylinder is $V = \\pi r^2 h$.\nWith $r = 4$ in and $h = 9$ in:\n$V = \\pi (4)^2 (9) = \\pi (16)(9) = 144\\pi$ cubic inches.\nSo $k = 144$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — forgets to square the radius, computes $\\pi rh = 36\\pi$.\n* Choice B: \"applies the inverse operation\" — uses the cone formula $\\dfrac{1}{3}\\pi r^2 h = 48\\pi$.\n* Choice D: \"off-by-one\" — squares the height instead of the radius, computes $\\pi(4)(81) = 324\\pi$.\n\n**Test Day Takeaway:** For a cylinder, square the radius first, then multiply by the height. Memorize $V = \\pi r^2 h$ — this is on the Reference Sheet.",
  skills: ["volume", "geometry"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $f(x) = 2x^2 - 3x + 4$ and $g(x) = x + 1$, what is the value of $f(g(2))$?",
  correctAnswer: "13",
  explanation: "**SAT Pattern: Function Composition**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~15s):** $g(2) = 2 + 1 = 3$. Then $f(3) = 2(9) - 3(3) + 4 = 18 - 9 + 4 = 13$.\n\n**The Full Solution:**\nStep 1: Find $g(2) = 2 + 1 = 3$.\nStep 2: Find $f(3) = 2(3)^2 - 3(3) + 4 = 2(9) - 9 + 4 = 18 - 9 + 4 = 13$.\n\n**Verification:** $g(2) = 3$ and $f(3) = 18 - 9 + 4 = 13$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing $f(2)$ first instead of $g(2)$: $f(2) = 8 - 6 + 4 = 6$, then $g(6) = 7$ — wrong order.\n* Evaluating $g(f(2))$ instead of $f(g(2))$.\n\n**Test Day Takeaway:** With composite functions, evaluate the inner function first, then plug that result into the outer function.",
  skills: ["function-interpretation"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A researcher models the concentration of a medication in the bloodstream by $C(t) = 200(0.85)^t$, where $t$ is the number of hours after the medication is taken and $C(t)$ is in milligrams per liter. The medication is effective when the concentration is at least $80$ mg/L. For how many complete hours after taking the medication does it remain effective?",
  choices: [
    // distractor: stops one step early — stops computing too soon at t = 4
    { id: "A", text: "$4$" },
    { id: "B", text: "$5$" },
    // distractor: off-by-one — rounds 5.64 up to 6, but at t = 6 concentration is below 80
    { id: "C", text: "$6$" },
    // distractor: wrong base — miscalculates the decay rate
    { id: "D", text: "$7$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Compute $C(t)$ for successive integer values: $C(5) \\approx 88.7$, $C(6) \\approx 75.4$. At $t = 5$, $C \\geq 80$. At $t = 6$, $C < 80$. So $5$ complete hours.\n\n**The Full Solution:**\nWe need $200(0.85)^t \\geq 80$, so $(0.85)^t \\geq 0.4$.\nTaking logarithms: $t \\leq \\dfrac{\\ln(0.4)}{\\ln(0.85)} = \\dfrac{-0.9163}{-0.1625} \\approx 5.64$.\nThe medication remains effective for $5$ complete hours (at $t = 5$ it is still effective; at $t = 6$ it is not).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — stops computing too early at $t = 4$.\n* Choice C: \"off-by-one\" — rounds $5.64$ up to $6$, but at $t = 6$ the concentration is below $80$.\n* Choice D: \"wrong base\" — miscalculates the decay rate.\n\n**Test Day Takeaway:** For \"complete hours\" questions, test integer values near the boundary and check the inequality.",
  skills: ["exponential-functions", "solving-equations"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The expression $\\dfrac{(3x^2y^3)^2 \\cdot (2xy^{-1})^3}{6x^4y^2}$ is equivalent to which of the following?",
  choices: [
    { id: "A", text: "$12x^3y$" },
    // distractor: wrong sign — adds y exponents as 6 + 3 = 9 instead of 6 + (-3) = 3
    { id: "B", text: "$12x^3y^4$" },
    // distractor: off-by-one — divides 72/6 as 6 instead of 12
    { id: "C", text: "$6x^3y$" },
    // distractor: stops one step early — forgets to subtract the x^4 in the denominator
    { id: "D", text: "$12x^7y$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Numerator: $(3x^2y^3)^2 \\cdot (2xy^{-1})^3 = 9x^4y^6 \\cdot 8x^3y^{-3} = 72x^7y^3$. Divide by $6x^4y^2$: $12x^3y$.\n\n**The Full Solution:**\nNumerator: $(3x^2y^3)^2 = 9x^4y^6$ and $(2xy^{-1})^3 = 8x^3y^{-3}$.\nProduct: $9x^4y^6 \\cdot 8x^3y^{-3} = 72x^7y^3$.\nDivide by $6x^4y^2$: $\\dfrac{72x^7y^3}{6x^4y^2} = 12x^{7-4}y^{3-2} = 12x^3y$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong sign\" — adds $y$ exponents as $6 + 3$ instead of $6 + (-3)$, getting $y^4$.\n* Choice C: \"off-by-one\" — divides $72/6$ as $6$ instead of $12$.\n* Choice D: \"stops one step early\" — forgets to subtract the $x^4$ in the denominator.\n\n**Test Day Takeaway:** Apply exponent rules step by step: power of a product first, then multiply same bases, then divide.",
  skills: ["exponent-rules"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $2x^2 + bx + 18 = 0$ has exactly one real solution. If $b > 0$, what is the value of $b$?",
  choices: [
    // distractor: applies inverse op — divides 144 by something to get 6
    { id: "A", text: "$6$" },
    // distractor: off-by-one — miscalculates 4(2)(18) as 100
    { id: "B", text: "$10$" },
    { id: "C", text: "$12$" },
    // distractor: wrong base — uses b² = 4(2)(18) + 4(2) or similar
    { id: "D", text: "$14$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** One real solution means discriminant $= 0$. $b^2 - 4(2)(18) = 0 \\Rightarrow b^2 = 144 \\Rightarrow b = 12$ (since $b > 0$).\n\n**The Full Solution:**\nFor $ax^2 + bx + c = 0$ to have exactly one real solution, the discriminant must equal zero:\n$b^2 - 4ac = 0$\n$b^2 - 4(2)(18) = 0$\n$b^2 - 144 = 0$\n$b^2 = 144$\n$b = \\pm 12$\nSince $b > 0$, $b = 12$.\n\nVerification: $2x^2 + 12x + 18 = 0 \\Rightarrow x^2 + 6x + 9 = 0 \\Rightarrow (x + 3)^2 = 0$, so $x = -3$ is the only solution \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — confuses $\\sqrt{4 \\cdot 2 \\cdot 18}$ with $\\sqrt{4 \\cdot 18 / 2}$.\n* Choice B: \"off-by-one\" — miscalculates $4(2)(18)$ as $100$.\n* Choice D: \"wrong base\" — uses $b^2 = 4(2)(18) + 4(2)$ or similar error.\n\n**Test Day Takeaway:** Exactly one solution means discriminant $b^2 - 4ac = 0$.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The system of equations below has solution $(x, y)$.\n\n$x + y = 3$\n$x^2 - y = 3$\n\nIf $x > 0$, what is the value of $y$?",
  correctAnswer: "1",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $1$.**\n\n**The Fast Way (~30s):** From $y = 3 - x$, substitute into $x^2 - (3 - x) = 3$: $x^2 + x - 6 = 0 \\Rightarrow (x + 3)(x - 2) = 0$. Since $x > 0$, $x = 2$ and $y = 1$.\n\n**The Full Solution:**\nFrom the first equation: $y = 3 - x$.\nSubstitute into the second: $x^2 - (3 - x) = 3$\n$x^2 + x - 3 = 3$\n$x^2 + x - 6 = 0$\n$(x + 3)(x - 2) = 0$\n$x = -3$ or $x = 2$\n\nSince $x > 0$: $x = 2$, so $y = 3 - 2 = 1$.\n\n**Verification:** $x + y = 2 + 1 = 3$ \\checkmark and $x^2 - y = 4 - 1 = 3$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using $x = -3$ and getting $y = 6$.\n* Substitution errors when replacing $y$.\n* Forgetting the condition $x > 0$.\n\n**Test Day Takeaway:** Solve the linear equation for one variable, substitute, and check the constraint.",
  skills: ["systems-of-equations", "quadratic-equations"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, a parabola has vertex $(3, -4)$ and passes through the point $(5, 8)$. What is the $y$-intercept of this parabola?",
  choices: [
    { id: "A", text: "$(0, 23)$" },
    // distractor: stops one step early — forgets to subtract 4, gets just 3(9) = 27
    { id: "B", text: "$(0, 27)$" },
    // distractor: off-by-one — uses a = 2 from a computation error
    { id: "C", text: "$(0, 20)$" },
    // distractor: wrong base — uses (x-3)² evaluated at x = 0 with wrong value of a
    { id: "D", text: "$(0, 32)$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Vertex form: $y = a(x - 3)^2 - 4$. Plug in $(5, 8)$: $8 = 4a - 4 \\Rightarrow a = 3$. At $x = 0$: $y = 3(9) - 4 = 23$.\n\n**The Full Solution:**\nVertex form: $y = a(x - 3)^2 - 4$.\nPlug in $(5, 8)$: $8 = a(5 - 3)^2 - 4 = 4a - 4$, so $4a = 12$, giving $a = 3$.\nEquation: $y = 3(x - 3)^2 - 4$.\n$y$-intercept (set $x = 0$): $y = 3(0 - 3)^2 - 4 = 3(9) - 4 = 27 - 4 = 23$.\n\nSo the $y$-intercept is $(0, 23)$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — forgets to subtract $4$, getting just $3(9) = 27$.\n* Choice C: \"off-by-one\" — uses $a = 2$ from a computation error.\n* Choice D: \"wrong base\" — uses $(x - 3)^2$ evaluated at $x = 0$ as $(-3)^2 = 9$ but multiplies by a wrong value of $a$.\n\n**Test Day Takeaway:** Start with vertex form $y = a(x - h)^2 + k$, use the other point to find $a$, then evaluate at $x = 0$.",
  skills: ["vertex-form", "quadratic-equations", "coordinate-geometry"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For the polynomial $p(x) = 2x^3 - 5x^2 - 14x + 8$, it is known that $(x - 4)$ is a factor. Which of the following gives the complete factorization of $p(x)$?",
  choices: [
    // distractor: stops one step early — correct first step but not fully factored
    { id: "A", text: "$(x - 4)(2x^2 + 3x - 2)$" },
    { id: "B", text: "$(x - 4)(2x - 1)(x + 2)$" },
    // distractor: wrong sign — sign errors in the quadratic factoring
    { id: "C", text: "$(x - 4)(2x + 1)(x - 2)$" },
    // distractor: applies inverse op — incorrect synthetic division (sign flip)
    { id: "D", text: "$(x - 4)(2x^2 - 3x + 2)$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Polynomial Factoring with Given Factor**\n\n**Choice B is correct.**\n\n**The Full Solution:**\nDivide $2x^3 - 5x^2 - 14x + 8$ by $(x - 4)$ using synthetic division with $x = 4$:\n\nCoefficients: $2, -5, -14, 8$.\nBring down $2$. Multiply $2 \\times 4 = 8$. Add: $-5 + 8 = 3$.\nMultiply $3 \\times 4 = 12$. Add: $-14 + 12 = -2$.\nMultiply $-2 \\times 4 = -8$. Add: $8 + (-8) = 0$.\n\nQuotient: $2x^2 + 3x - 2$.\nFactor by grouping: find numbers that multiply to $2 \\cdot (-2) = -4$ and add to $3$: those are $4$ and $-1$.\n$2x^2 + 4x - x - 2 = 2x(x + 2) - 1(x + 2) = (2x - 1)(x + 2)$.\n\nComplete factorization: $(x - 4)(2x - 1)(x + 2)$.\n\nVerification: $p(4) = 128 - 80 - 56 + 8 = 0$ \\checkmark. $p(\\tfrac{1}{2}) = \\tfrac{1}{4} - \\tfrac{5}{4} - 7 + 8 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — correct first step but not fully factored.\n* Choice C: \"wrong sign\" — sign errors in the quadratic factoring.\n* Choice D: \"applies the inverse operation\" — incorrect synthetic division (sign flip).\n\n**Test Day Takeaway:** Use synthetic division to reduce degree, then factor the quotient completely.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, circle $C$ has equation $(x - 3)^2 + (y + 2)^2 = 25$. Line $\\ell$ has equation $y = \\dfrac{3}{4}x + b$ and is tangent to circle $C$. If $b > 0$, what is the value of $b$?",
  correctAnswer: "2",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~45s):** Distance from $(3, -2)$ to $3x - 4y + 4b = 0$ equals radius $5$. $\\dfrac{|9 + 8 + 4b|}{5} = 5 \\Rightarrow |17 + 4b| = 25$. With $b > 0$: $4b = 8$, so $b = 2$.\n\n**The Full Solution:**\nCircle center: $(3, -2)$, radius: $5$.\nA tangent line touches the circle at exactly one point, so the distance from the center to the line equals the radius.\n\nRewrite $y = \\dfrac{3}{4}x + b$ as $3x - 4y + 4b = 0$ (multiply through by $4$).\n\nDistance from $(3, -2)$ to $3x - 4y + 4b = 0$:\n$d = \\dfrac{|3(3) - 4(-2) + 4b|}{\\sqrt{9 + 16}} = \\dfrac{|17 + 4b|}{5}$\n\nSet $d = 5$: $|17 + 4b| = 25$.\n\nCase 1: $17 + 4b = 25 \\Rightarrow b = 2$.\nCase 2: $17 + 4b = -25 \\Rightarrow b = -10.5$.\n\nSince $b > 0$: $b = 2$.\n\n**Common Mistakes to Avoid:**\n* Using the wrong distance formula.\n* Choosing $b = -10.5$ without checking the $b > 0$ condition.\n\n**Test Day Takeaway:** A line is tangent to a circle when the distance from the center to the line equals the radius.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A survey asked $500$ people whether they exercise regularly and whether they follow a specific diet. The results showed:\n\n- $210$ exercise regularly\n- $180$ follow the diet\n- $95$ do both\n\nIf a person is selected at random from those who exercise regularly, what is the probability that this person does NOT follow the diet?",
  choices: [
    { id: "A", text: "$\\dfrac{23}{42}$" },
    // distractor: wrong sign — gives the complement P(diet | exercise) instead
    { id: "B", text: "$\\dfrac{19}{42}$" },
    // distractor: wrong base — uses 500 (grand total) as denominator instead of 210
    { id: "C", text: "$\\dfrac{23}{100}$" },
    // distractor: off-by-one — miscalculates 170/500 or uses incorrect group sizes
    { id: "D", text: "$\\dfrac{17}{50}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Among $210$ exercisers, $210 - 95 = 115$ do NOT follow the diet. Probability $= \\dfrac{115}{210} = \\dfrac{23}{42}$.\n\n**The Full Solution:**\nAmong the $210$ who exercise regularly, $95$ also follow the diet.\nThose who exercise but do NOT follow the diet: $210 - 95 = 115$.\n\nProbability $= \\dfrac{115}{210}$. Simplify by dividing numerator and denominator by $5$: $\\dfrac{23}{42}$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong sign\" — $\\dfrac{19}{42} = \\dfrac{95}{210}$ gives the probability of following the diet given exercise (the complement).\n* Choice C: \"wrong base\" — uses $500$ in the denominator (as $\\dfrac{115}{500}$) instead of restricting to exercisers.\n* Choice D: \"off-by-one\" — miscalculates $\\dfrac{170}{500}$ or uses incorrect group sizes.\n\n**Test Day Takeaway:** Conditional probability restricts the sample space. \"Given exercise\" means the denominator is the number of exercisers.",
  skills: ["probability", "statistics"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
{
  id: 1,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The system of equations below has no solution. \n\n$3x + ky = 12$\n$6x - 4y = 18$\n\nWhat is the value of $k$?",
  choices: [
    { id: "A", text: "$-2$" },
    // distractor: wrong sign — uses k = 2 instead of -2
    { id: "B", text: "$2$" },
    // distractor: applies inverse op — uses k = 4 (the y coefficient from equation 2)
    { id: "C", text: "$4$" },
    // distractor: off-by-one — uses k = -4
    { id: "D", text: "$-4$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** No solution means parallel lines: matching coefficients on $x$ and $y$ but different constants. Multiply equation 1 by $2$: $6x + 2ky = 24$. Match with $6x - 4y = 18$: $2k = -4 \\Rightarrow k = -2$. Constants $24 \\neq 18$, so parallel \\checkmark.\n\n**The Full Solution:**\nFor no solution, the two equations must be parallel: same ratio of coefficients on $x$ and $y$, different ratio on constants.\n$\\dfrac{3}{6} = \\dfrac{k}{-4} \\neq \\dfrac{12}{18}$\n$\\dfrac{3}{6} = \\dfrac{1}{2}$, so $\\dfrac{k}{-4} = \\dfrac{1}{2} \\Rightarrow k = -2$.\nCheck constants: $\\dfrac{12}{18} = \\dfrac{2}{3} \\neq \\dfrac{1}{2}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong sign\" — uses $k = 2$ instead of $-2$.\n* Choice C: \"applies the inverse operation\" — uses $k = 4$ (the $y$ coefficient from the second equation).\n* Choice D: \"off-by-one\" — uses $k = -4$.\n\n**Test Day Takeaway:** No solution = parallel lines. Match the coefficient ratios on the variables, but verify constants don't match.",
  skills: ["systems-of-equations"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $\\dfrac{2}{x - 3} + \\dfrac{1}{x + 1} = \\dfrac{5}{x^2 - 2x - 3}$, how many real solutions does the equation have?",
  choices: [
    // distractor: stops one step early — assumes denominators conflict, says no solution
    { id: "A", text: "$0$" },
    { id: "B", text: "$1$" },
    // distractor: wrong base — assumes a quadratic in disguise gives 2 solutions
    { id: "C", text: "$2$" },
    // distractor: applies inverse op — confuses with an identity
    { id: "D", text: "Infinitely many" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $x^2 - 2x - 3 = (x - 3)(x + 1)$. Multiply through: $2(x + 1) + (x - 3) = 5 \\Rightarrow 3x - 1 = 5 \\Rightarrow x = 2$. Valid since $x \\neq 3, -1$.\n\n**The Full Solution:**\nFactor the denominator: $x^2 - 2x - 3 = (x - 3)(x + 1)$.\nMultiply both sides by $(x - 3)(x + 1)$:\n$2(x + 1) + 1(x - 3) = 5$\n$2x + 2 + x - 3 = 5$\n$3x - 1 = 5$\n$x = 2$\nSince $x = 2$ doesn't make any denominator zero, it's valid. Exactly $1$ solution.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — assumes denominators conflict, says no solution.\n* Choice C: \"wrong base\" — assumes a quadratic in disguise gives $2$ solutions.\n* Choice D: \"applies the inverse operation\" — confuses with an identity.\n\n**Test Day Takeaway:** Always factor denominators in rational equations and check for excluded values.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A group of friends bought tickets to a concert. Adult tickets cost $\\$18$ and student tickets cost $\\$12$. They bought a total of $14$ tickets for $\\$216$. How many student tickets did they buy?",
  choices: [
    // distractor: stops one step early — gives the count of adult tickets
    { id: "A", text: "$8$" },
    { id: "B", text: "$6$" },
    // distractor: applies inverse op — swaps the prices
    { id: "C", text: "$10$" },
    // distractor: off-by-one — uses 14 - 6 = 8 wrong
    { id: "D", text: "$4$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Let $a + s = 14$ and $18a + 12s = 216$. Substitute $a = 14 - s$: $18(14 - s) + 12s = 216 \\Rightarrow 252 - 6s = 216 \\Rightarrow s = 6$.\n\n**The Full Solution:**\nLet $a$ = adult tickets, $s$ = student tickets.\n$a + s = 14$\n$18a + 12s = 216$\n\nFrom the first equation: $a = 14 - s$.\nSubstitute: $18(14 - s) + 12s = 216$\n$252 - 18s + 12s = 216$\n$252 - 6s = 216$\n$-6s = -36$\n$s = 6$\n\nVerification: $a = 8$. Total tickets: $8 + 6 = 14$ \\checkmark. Total cost: $18(8) + 12(6) = 144 + 72 = 216$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports $a = 8$ (adult tickets) instead of student.\n* Choice C: \"applies the inverse operation\" — swaps the prices.\n* Choice D: \"off-by-one\" — error in subtraction.\n\n**Test Day Takeaway:** Define variables clearly and read what the question asks for.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A quantity $a$ is $p\\%$ of the sum of two values, $b + c$. If $a = 90$, $b = 200$, and $c = 100$, what is the value of $p$?",
  choices: [
    // distractor: applies inverse op — divides by a instead of (b+c)
    { id: "A", text: "$33.3$" },
    // distractor: wrong base — uses b alone instead of b + c
    { id: "B", text: "$45$" },
    { id: "C", text: "$30$" },
    // distractor: off-by-one — uses b + c + a in the denominator
    { id: "D", text: "$23.1$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $a = \\dfrac{p}{100}(b + c) \\Rightarrow 90 = \\dfrac{p}{100}(300) \\Rightarrow p = 30$.\n\n**The Full Solution:**\n\"$a$ is $p\\%$ of $(b + c)$\" translates to: $a = \\dfrac{p}{100}(b + c)$.\nSubstitute: $90 = \\dfrac{p}{100}(200 + 100) = 3p$.\nSolve: $p = 30$.\n\nVerification: $30\\%$ of $300 = 0.30 \\cdot 300 = 90$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — divides $b$ by $a$ ($\\dfrac{300}{90} \\cdot 100$ wrongly).\n* Choice B: \"wrong base\" — uses $b = 200$ alone instead of $b + c = 300$ as denominator: $\\dfrac{90}{200} = 45\\%$.\n* Choice D: \"off-by-one\" — uses $b + c + a = 390$ in the denominator: $\\dfrac{90}{390} \\approx 23.1\\%$.\n\n**Test Day Takeaway:** \"$a$ is $p\\%$ of $X$\" means $a = \\dfrac{p}{100} \\cdot X$. The denominator is whatever follows \"of.\"",
  skills: ["percents"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A scatterplot of $25$ data points has a line of best fit $y = 1.4x + 8$. One specific data point has $x = 12$ and $y = 26$. What is the residual for this data point?",
  choices: [
    // distractor: wrong sign — computes predicted - actual
    { id: "A", text: "$-1.2$" },
    { id: "B", text: "$1.2$" },
    // distractor: stops one step early — uses 1.4 \\cdot 12 = 16.8 alone (no intercept)
    { id: "C", text: "$9.2$" },
    // distractor: off-by-one — uses x = 13 instead of x = 12
    { id: "D", text: "$-0.2$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Residual**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Predicted: $1.4(12) + 8 = 16.8 + 8 = 24.8$. Residual = actual $-$ predicted = $26 - 24.8 = 1.2$.\n\n**The Full Solution:**\nPredicted value at $x = 12$: $\\hat{y} = 1.4(12) + 8 = 24.8$.\nResidual = actual $-$ predicted = $26 - 24.8 = 1.2$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — computes predicted $-$ actual, getting $-1.2$.\n* Choice C: \"stops one step early\" — uses $1.4 \\cdot 12 = 16.8$ alone, then $26 - 16.8 = 9.2$ (forgets intercept).\n* Choice D: \"off-by-one\" — uses $x = 13$ instead of $x = 12$.\n\n**Test Day Takeaway:** Residual = actual $-$ predicted. Positive means above the line.",
  skills: ["scatterplots", "statistics", "linear-functions"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A factory produces two types of bolts: standard bolts (each requiring $4$ minutes of machine time) and premium bolts (each requiring $7$ minutes of machine time). In one shift, the factory produces $35$ bolts using $176$ minutes of machine time. How many premium bolts were produced?",
  choices: [
    // distractor: stops one step early — gives the count of standard bolts
    { id: "A", text: "$23$" },
    { id: "B", text: "$12$" },
    // distractor: applies inverse op — swaps the rates 4 and 7
    { id: "C", text: "$16$" },
    // distractor: off-by-one — solves correctly but reports number of standard bolts
    { id: "D", text: "$24$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Let $s$ = standard, $p$ = premium. $s + p = 35$ and $4s + 7p = 176$. Substitute $s = 35 - p$: $4(35 - p) + 7p = 176 \\Rightarrow 140 + 3p = 176 \\Rightarrow p = 12$.\n\n**The Full Solution:**\nLet $s$ = standard bolts, $p$ = premium bolts.\n$s + p = 35$\n$4s + 7p = 176$\n\nFrom the first equation: $s = 35 - p$.\nSubstitute: $4(35 - p) + 7p = 176$\n$140 - 4p + 7p = 176$\n$140 + 3p = 176$\n$3p = 36$\n$p = 12$\n\nVerification: $s = 23$. Total: $23 + 12 = 35$ \\checkmark. Time: $4(23) + 7(12) = 92 + 84 = 176$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports $s = 23$ (standard bolts) instead of premium.\n* Choice C: \"applies the inverse operation\" — swaps the rates $4$ and $7$, getting $p = 16$.\n* Choice D: \"off-by-one\" — solves correctly but reports number of standard bolts.\n\n**Test Day Takeaway:** Define variables explicitly and re-read what the question asks before answering.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "For what value of $c$ does the system of equations below have infinitely many solutions?\n\n$3x - 6y = 12$\n$-x + 2y = c$",
  choices: [
    // distractor: wrong sign — uses constant from first equation with sign change
    { id: "A", text: "$-12$" },
    { id: "B", text: "$-4$" },
    // distractor: applies inverse op — divides 12 by 3 but forgets sign
    { id: "C", text: "$4$" },
    // distractor: stops one step early — uses constant from first equation directly
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** For infinitely many solutions, the equations must be scalar multiples. Divide the first by $-3$: $-x + 2y = -4$. So $c = -4$.\n\n**The Full Solution:**\nFor infinitely many solutions, the equations must be scalar multiples of each other.\nDivide the first equation by $-3$: $-x + 2y = -4$.\nThis must equal the second equation: $-x + 2y = c$.\nSo $c = -4$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — uses constant from first equation with sign change.\n* Choice C: \"applies the inverse operation\" — divides $12$ by $3$ but forgets the negative.\n* Choice D: \"stops one step early\" — uses the constant from the first equation directly.\n\n**Test Day Takeaway:** For infinitely many solutions, one equation must be a multiple of the other. Match coefficients to find the constant.",
  skills: ["systems-of-equations"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $\\sqrt[3]{x^4} \\cdot \\sqrt{x^5} = x^k$ for $x > 0$, what is the value of $k$?",
  choices: [
    // distractor: applies inverse op — flips the fractional exponents
    { id: "A", text: "$\\dfrac{17}{6}$" },
    // distractor: stops one step early — adds numerators only (4 + 5 = 9)
    { id: "B", text: "$\\dfrac{9}{6}$" },
    { id: "C", text: "$\\dfrac{23}{6}$" },
    // distractor: off-by-one — multiplies exponents instead of adding
    { id: "D", text: "$\\dfrac{20}{6}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $\\sqrt[3]{x^4} = x^{4/3}$ and $\\sqrt{x^5} = x^{5/2}$. Sum: $\\dfrac{4}{3} + \\dfrac{5}{2} = \\dfrac{8}{6} + \\dfrac{15}{6} = \\dfrac{23}{6}$.\n\n**The Full Solution:**\n$\\sqrt[3]{x^4} = x^{4/3}$\n$\\sqrt{x^5} = x^{5/2}$\n\nMultiplying with same base: add exponents.\n$x^{4/3} \\cdot x^{5/2} = x^{4/3 + 5/2}$\n\nCommon denominator $6$: $\\dfrac{4}{3} = \\dfrac{8}{6}$ and $\\dfrac{5}{2} = \\dfrac{15}{6}$.\nSum: $\\dfrac{8 + 15}{6} = \\dfrac{23}{6}$.\n\nSo $k = \\dfrac{23}{6}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — flips the fractional exponents to $\\dfrac{3}{4}$ and $\\dfrac{2}{5}$.\n* Choice B: \"stops one step early\" — adds numerators only ($4 + 5 = 9$).\n* Choice D: \"off-by-one\" — multiplies exponents instead of adding.\n\n**Test Day Takeaway:** Convert radicals to fractional exponents (power over index), then add when multiplying same bases.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = (x - 2)^2 + 3$. The function $g$ is defined by $g(x) = f(x + 4) - 5$. For what value of $x$ does $g$ attain its minimum?",
  choices: [
    // distractor: wrong sign — uses x = 6 (shift in wrong direction)
    { id: "A", text: "$6$" },
    { id: "B", text: "$-2$" },
    // distractor: stops one step early — gives x = 2 (the original vertex)
    { id: "C", text: "$2$" },
    // distractor: off-by-one — confuses the y-shift -5 with the x-shift
    { id: "D", text: "$-5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $f$ has minimum at $x = 2$. $g(x) = f(x + 4) - 5$ shifts $f$ left by $4$, so the minimum of $g$ is at $x = 2 - 4 = -2$.\n\n**The Full Solution:**\nThe function $f(x) = (x - 2)^2 + 3$ has minimum at $x = 2$.\nThe transformation $g(x) = f(x + 4) - 5$ shifts $f$ to the LEFT by $4$ (because of the $+4$ inside the function) and DOWN by $5$.\nThe horizontal shift moves the minimum from $x = 2$ to $x = 2 - 4 = -2$. The vertical shift does not affect the $x$-coordinate of the minimum.\n\nVerification: $g(x) = ((x + 4) - 2)^2 + 3 - 5 = (x + 2)^2 - 2$, vertex at $x = -2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — shifts in the wrong direction ($x = 2 + 4 = 6$).\n* Choice C: \"stops one step early\" — gives the vertex of $f$ without applying the shift.\n* Choice D: \"off-by-one\" — confuses the $y$-shift $-5$ with the $x$-shift.\n\n**Test Day Takeaway:** $f(x + c)$ shifts the graph LEFT by $c$ (opposite of what the sign suggests). Vertical shifts don't affect $x$-coordinates of extrema.",
  skills: ["function-interpretation", "vertex-form"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The mean of a list of $9$ values is $42$. When one additional value is added to the list, the mean of the new $10$-value list becomes $45$. What is the value of the additional value?",
  correctAnswer: "72",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $72$.**\n\n**The Fast Way (~25s):** Original sum $= 9 \\cdot 42 = 378$. New sum $= 10 \\cdot 45 = 450$. Added value $= 450 - 378 = 72$.\n\n**The Full Solution:**\nOriginal mean: $42 \\Rightarrow$ sum of original $9$ values is $9 \\cdot 42 = 378$.\nNew mean: $45 \\Rightarrow$ sum of new $10$ values is $10 \\cdot 45 = 450$.\nAdded value $=$ new sum $-$ original sum $= 450 - 378 = 72$.\n\n**Verification:** $\\dfrac{378 + 72}{10} = \\dfrac{450}{10} = 45$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing $\\dfrac{42 + 45}{2} = 43.5$ — wrong because this isn't a simple average of two means.\n* Using $9 \\cdot 45 = 405$ instead of $10 \\cdot 45$.\n\n**Test Day Takeaway:** Mean problems with added/removed values: convert to sums first (mean $\\times$ count), then work with sums.",
  skills: ["statistics", "mean-median-mode"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The system of equations below has solution $(x, y, z)$.\n\n$x + y + z = 14$\n$2x - y + z = 9$\n$x + 2y - z = 11$\n\nWhat is the value of $z$?",
  correctAnswer: "4",
  explanation: "**SAT Pattern: Three-Variable Elimination**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~45s):** Add eqs $(1)+(3)$ to eliminate $z$: $2x + 3y = 25$. Add eqs $(2)+(3)$: $3x + y = 20$. Solve: $x = 5, y = 5$. Substitute into eq $(1)$: $z = 14 - 5 - 5 = 4$.\n\n**The Full Solution:**\nAdd equations $(1) + (3)$: $(x + y + z) + (x + 2y - z) = 14 + 11$, so $2x + 3y = 25$.\nAdd equations $(2) + (3)$: $(2x - y + z) + (x + 2y - z) = 9 + 11$, so $3x + y = 20$.\n\nFrom $3x + y = 20$: $y = 20 - 3x$.\nSubstitute: $2x + 3(20 - 3x) = 25 \\Rightarrow 2x + 60 - 9x = 25 \\Rightarrow -7x = -35 \\Rightarrow x = 5$.\nThen $y = 20 - 15 = 5$.\nFrom equation $(1)$: $5 + 5 + z = 14 \\Rightarrow z = 4$.\n\nVerification: equation $(2)$: $2(5) - 5 + 4 = 9$ \\checkmark. Equation $(3)$: $5 + 10 - 4 = 11$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Sign errors when adding equations.\n* Solving for $x$ or $y$ and reporting that value.\n\n**Test Day Takeaway:** For three-variable systems, eliminate one variable by adding pairs of equations to reduce to a $2 \\times 2$ system.",
  skills: ["systems-of-equations"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The parabola defined by $y = 2(x - h)^2 + k$ has its vertex at the point $(4, -3)$ and passes through the point $(2, 5)$. What is the value of $h + k$?",
  choices: [
    // distractor: wrong sign — uses h - k instead of h + k
    { id: "A", text: "$7$" },
    // distractor: stops one step early — uses k from a wrong calculation
    { id: "B", text: "$-7$" },
    { id: "C", text: "$1$" },
    // distractor: off-by-one — uses passing-point coords as h, k
    { id: "D", text: "$2$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Vertex $(4, -3)$ gives $h = 4, k = -3$. Verify: $y = 2(2 - 4)^2 + (-3) = 2(4) - 3 = 5$ \\checkmark. So $h + k = 4 + (-3) = 1$.\n\n**The Full Solution:**\nFrom vertex form $y = a(x - h)^2 + k$, the vertex is $(h, k)$.\nGiven vertex $(4, -3)$: $h = 4$ and $k = -3$.\n\nVerify with the second point $(2, 5)$: $y = 2(2 - 4)^2 + (-3) = 2(4) - 3 = 5$ \\checkmark.\n\nThus $h + k = 4 + (-3) = 1$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — computes $h - k = 4 - (-3) = 7$ instead of $h + k$.\n* Choice B: \"stops one step early\" — uses $k$ from a wrong calculation.\n* Choice D: \"off-by-one\" — uses passing-point coordinates as $h, k$.\n\n**Test Day Takeaway:** In vertex form $y = a(x - h)^2 + k$, the vertex is $(h, k)$ — directly readable from the equation.",
  skills: ["vertex-form", "function-interpretation"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A sample of $1{,}200$ registered voters was surveyed about a ballot measure. $45\\%$ said they supported the measure. The margin of error is $3$ percentage points. Which of the following is the best interpretation of these results?",
  choices: [
    // distractor: stops one step early — interprets the sample count as population
    { id: "A", text: "Exactly $540$ voters in the population support the measure." },
    // distractor: applies inverse op — uses sample percent to predict result
    { id: "B", text: "The measure will fail because support is below $50\\%$." },
    { id: "C", text: "The true population proportion is plausibly between $42\\%$ and $48\\%$." },
    // distractor: wrong base — claims sample size adjustment increases margin
    { id: "D", text: "If $300$ more people were surveyed, the margin of error would increase." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $45\\% \\pm 3\\% = [42\\%, 48\\%]$ is the confidence interval for the true population proportion.\n\n**The Full Solution:**\nThe margin of error of $3$ percentage points means the confidence interval is $45\\% - 3\\% = 42\\%$ to $45\\% + 3\\% = 48\\%$. This interval estimates the true population proportion, not the sample proportion.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — $540$ is the sample count ($1200 \\times 0.45$), not the population value.\n* Choice B: \"applies the inverse operation\" — the confidence interval includes values below and above; we cannot conclude the measure will fail.\n* Choice D: \"wrong base\" — increasing sample size DECREASES margin of error, not increases.\n\n**Test Day Takeaway:** Larger samples give smaller margins of error. The confidence interval applies to the population, not the sample.",
  skills: ["margin-of-error", "statistics"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Line $\\ell$ in the $xy$-plane is perpendicular to the line $y = -\\dfrac{2}{3}x + 4$ and passes through the point $(6, 1)$. What is the equation of line $\\ell$?",
  choices: [
    { id: "A", text: "$y = \\dfrac{3}{2}x - 8$" },
    // distractor: wrong sign — uses parallel slope (negative reciprocal not flipped)
    { id: "B", text: "$y = -\\dfrac{2}{3}x + 5$" },
    // distractor: applies inverse op — uses 2/3 (not flipped to 3/2)
    { id: "C", text: "$y = \\dfrac{2}{3}x - 3$" },
    // distractor: off-by-one — sign error in y-intercept calculation
    { id: "D", text: "$y = \\dfrac{3}{2}x + 8$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Perpendicular slope to $-\\dfrac{2}{3}$ is $\\dfrac{3}{2}$. Use $(6, 1)$: $1 = \\dfrac{3}{2}(6) + b = 9 + b \\Rightarrow b = -8$.\n\n**The Full Solution:**\nThe given line has slope $-\\dfrac{2}{3}$. Perpendicular slope is the negative reciprocal: $\\dfrac{3}{2}$.\nUsing point-slope form with $(6, 1)$:\n$y - 1 = \\dfrac{3}{2}(x - 6)$\n$y = \\dfrac{3}{2}x - 9 + 1 = \\dfrac{3}{2}x - 8$.\n\nVerification: at $(6, 1)$: $\\dfrac{3}{2}(6) - 8 = 9 - 8 = 1$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong sign\" — keeps the same slope (parallel, not perpendicular).\n* Choice C: \"applies the inverse operation\" — uses $\\dfrac{2}{3}$ (only flipped sign, not reciprocal).\n* Choice D: \"off-by-one\" — sign error gives $b = +8$ instead of $-8$.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals: flip the fraction AND change the sign.",
  skills: ["slope", "coordinate-geometry", "linear-functions"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the equation $x^2 + y^2 - 8x + 6y - 11 = 0$ defines a circle. What is the radius of the circle?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Complete the Square — Non-Square Radius**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~30s):** Complete the square: $(x - 4)^2 + (y + 3)^2 = 11 + 16 + 9 = 36$. So $r^2 = 36$ and $r = 6$.\n\n**The Full Solution:**\nGroup $x$- and $y$-terms:\n$(x^2 - 8x) + (y^2 + 6y) = 11$\n\nComplete the square: half of $-8$ is $-4$, $(-4)^2 = 16$. Half of $6$ is $3$, $3^2 = 9$.\n$(x^2 - 8x + 16) + (y^2 + 6y + 9) = 11 + 16 + 9$\n$(x - 4)^2 + (y + 3)^2 = 36$\n\nRadius $= \\sqrt{36} = 6$.\n\n**Common Mistakes to Avoid:**\n* Reporting $r^2 = 36$ instead of $r = 6$.\n* Sign errors when moving the constant to the right side.\n\n**Test Day Takeaway:** Complete the square for BOTH variables. The radius is $\\sqrt{r^2}$, not $r^2$ itself.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In a right triangle, the side adjacent to angle $\\theta$ has length $5$ and the hypotenuse has length $13$. What is the value of $\\sin \\theta$?",
  choices: [
    { id: "A", text: "$\\dfrac{12}{13}$" },
    // distractor: wrong base — gives cos θ instead of sin θ
    { id: "B", text: "$\\dfrac{5}{13}$" },
    // distractor: applies inverse op — gives tan θ
    { id: "C", text: "$\\dfrac{12}{5}$" },
    // distractor: off-by-one — uses 13² - 5² = 144 but reports 144/13
    { id: "D", text: "$\\dfrac{144}{13}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Use Pythagorean: opposite $= \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$. Then $\\sin \\theta = \\dfrac{\\text{opp}}{\\text{hyp}} = \\dfrac{12}{13}$.\n\n**The Full Solution:**\nIn a right triangle with adjacent $= 5$ and hypotenuse $= 13$:\nFind the opposite leg using the Pythagorean theorem: $\\text{opposite}^2 = 13^2 - 5^2 = 169 - 25 = 144$, so opposite $= 12$.\n\n$\\sin \\theta = \\dfrac{\\text{opposite}}{\\text{hypotenuse}} = \\dfrac{12}{13}$.\n\nThis is the well-known $5$-$12$-$13$ Pythagorean triple.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — gives $\\cos \\theta = \\dfrac{5}{13}$ instead of $\\sin \\theta$.\n* Choice C: \"applies the inverse operation\" — gives $\\tan \\theta = \\dfrac{12}{5}$.\n* Choice D: \"off-by-one\" — uses $13^2 - 5^2 = 144$ but doesn't take the square root.\n\n**Test Day Takeaway:** SOH-CAH-TOA: Sine is opposite over hypotenuse. Memorize the $3$-$4$-$5$ and $5$-$12$-$13$ Pythagorean triples.",
  skills: ["trigonometry", "triangles", "right-triangles"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $4x^2 - bx + 25 = 0$ has no real solutions, where $b$ is a positive integer. What is the greatest possible value of $b$?",
  choices: [
    // distractor: off-by-one — forgets strict inequality, uses b = 20
    { id: "A", text: "$20$" },
    { id: "B", text: "$19$" },
    // distractor: applies inverse op — returns b² value
    { id: "C", text: "$400$" },
    // distractor: wrong base — uses 4ac = 100 incorrectly
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** No real solutions: $b^2 - 4(4)(25) < 0 \\Rightarrow b^2 < 400 \\Rightarrow b < 20$. Greatest positive integer: $b = 19$.\n\n**The Full Solution:**\nNo real solutions means the discriminant is negative:\n$b^2 - 4ac < 0$\n$b^2 - 4(4)(25) < 0$\n$b^2 < 400$\n$|b| < 20$\n\nSince $b$ is a positive integer and $b < 20$ (strict), the greatest possible value is $b = 19$.\n\nVerification: $b = 19$: $19^2 = 361 < 400$ \\checkmark. $b = 20$: $20^2 = 400 \\not< 400$ (one real solution, not zero).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — forgets the strict inequality, uses $b = 20$ (which gives discriminant $= 0$).\n* Choice C: \"applies the inverse operation\" — returns $b^2 = 400$.\n* Choice D: \"wrong base\" — uses $4ac = 100$ incorrectly.\n\n**Test Day Takeaway:** No real solutions means discriminant $< 0$ (strict). Greatest integer below the bound is the floor minus one when the bound is itself an integer.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $\\log_2(x - 1) + \\log_2(x + 3) = 5$ and $x > 1$, what is the value of $x$?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~30s):** $\\log_2[(x - 1)(x + 3)] = 5 \\Rightarrow (x - 1)(x + 3) = 32 \\Rightarrow x^2 + 2x - 35 = 0 \\Rightarrow (x - 5)(x + 7) = 0$. Since $x > 1$: $x = 5$.\n\n**The Full Solution:**\nUsing the log product rule: $\\log_2(x - 1) + \\log_2(x + 3) = \\log_2[(x - 1)(x + 3)] = 5$.\nSo $(x - 1)(x + 3) = 2^5 = 32$.\n$x^2 + 3x - x - 3 = 32$\n$x^2 + 2x - 35 = 0$\n$(x + 7)(x - 5) = 0$\n$x = -7$ or $x = 5$.\nSince $x > 1$: $x = 5$.\n\nVerification: $\\log_2(4) + \\log_2(8) = 2 + 3 = 5$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting to apply the log product rule.\n* Using $x = -7$ without checking the domain.\n\n**Test Day Takeaway:** $\\log_b(A) + \\log_b(B) = \\log_b(AB)$. Always check domain restrictions on logarithms.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$350$ is what percent greater than $50$?",
  choices: [
    // distractor: applies inverse op — divides by 350 instead of 50
    { id: "A", text: "$85.7\\%$" },
    // distractor: stops one step early — computes 350 - 50 = 300 and reports it
    { id: "B", text: "$300\\%$" },
    { id: "C", text: "$600\\%$" },
    // distractor: wrong base — computes 350/50 \\times 100 (percent OF, not percent GREATER)
    { id: "D", text: "$700\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent Greater Than**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Percent greater $= \\dfrac{350 - 50}{50} \\times 100 = 6 \\times 100 = 600\\%$.\n\n**The Full Solution:**\n\"$A$ is what percent greater than $B$\" means $\\dfrac{A - B}{B} \\times 100$.\n$\\dfrac{350 - 50}{50} \\times 100 = \\dfrac{300}{50} \\times 100 = 6 \\times 100 = 600\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — computes $\\dfrac{350 - 50}{350} \\times 100$ — divides by $350$ instead of $50$.\n* Choice B: \"stops one step early\" — computes $350 - 50 = 300$ and stops.\n* Choice D: \"wrong base\" — computes $\\dfrac{350}{50} \\times 100 = 700\\%$, but that's \"what percent OF,\" not \"what percent GREATER.\"\n\n**Test Day Takeaway:** \"Percent greater\" means $\\dfrac{\\text{difference}}{\\text{base}} \\times 100$. The base is the number after \"than.\"",
  skills: ["percents", "word-problems"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A composite solid is made by placing a right circular cone (radius $3$, height $4$) on top of a right circular cylinder (radius $3$, height $6$). The lateral surface area of the cone is $15\\pi$. What is the total surface area of the composite solid (excluding the interior shared circle)?",
  choices: [
    // distractor: stops one step early — only computes cone lateral
    { id: "A", text: "$15\\pi$" },
    // distractor: off-by-one — forgets the bottom circle of cylinder
    { id: "B", text: "$45\\pi$" },
    { id: "C", text: "$60\\pi$" },
    // distractor: applies inverse op — adds the shared circle twice
    { id: "D", text: "$78\\pi$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Composite Solid Surface Area**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Cone lateral $= 15\\pi$. Cylinder lateral $= 2\\pi(3)(6) = 36\\pi$. Bottom circle of cylinder $= \\pi(3)^2 = 9\\pi$. Total $= 15 + 36 + 9 = 60\\pi$.\n\n**The Full Solution:**\nThe composite solid has three exposed surfaces (the shared circle between cone and cylinder is hidden):\n\n1. **Lateral surface of cone:** Given as $15\\pi$.\n2. **Lateral surface of cylinder:** $2\\pi r h = 2\\pi(3)(6) = 36\\pi$.\n3. **Bottom circle of cylinder:** $\\pi r^2 = \\pi(3)^2 = 9\\pi$.\n\nTotal: $15\\pi + 36\\pi + 9\\pi = 60\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — only computes the cone lateral surface.\n* Choice B: \"off-by-one\" — forgets the bottom circle of the cylinder.\n* Choice D: \"applies the inverse operation\" — incorrectly adds the shared internal circle.\n\n**Test Day Takeaway:** For composite solids, identify which surfaces are exposed. The shared interior circle is NOT counted.",
  skills: ["volume", "geometry", "area"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A scientist increased the temperature in a chamber by $40\\%$, then decreased it by $25\\%$ from the new value. If the final temperature is $63^{\\circ}$ Celsius, what was the original temperature, in degrees Celsius?",
  choices: [
    // distractor: applies inverse op — uses 1.40 \\cdot 0.75 = 1.05 directly on 63
    { id: "A", text: "$66.15$" },
    { id: "B", text: "$60$" },
    // distractor: stops one step early — divides 63 by 1.40 only
    { id: "C", text: "$45$" },
    // distractor: off-by-one — uses 1.15 instead of 1.05 (combined factor)
    { id: "D", text: "$54.78$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Combined factor: $1.40 \\times 0.75 = 1.05$. So $1.05 \\times \\text{original} = 63 \\Rightarrow \\text{original} = 60$.\n\n**The Full Solution:**\nLet $T$ be the original temperature.\nAfter $40\\%$ increase: $1.40T$.\nAfter $25\\%$ decrease from new value: $1.40T \\times 0.75 = 1.05T$.\nGiven final $= 63$: $1.05T = 63 \\Rightarrow T = 60$.\n\nVerification: $60 \\times 1.40 = 84$. $84 \\times 0.75 = 63$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — multiplies $63 \\times 1.05 = 66.15$ instead of dividing.\n* Choice C: \"stops one step early\" — divides $63$ by $1.40$ alone, ignoring the second change.\n* Choice D: \"off-by-one\" — uses $1.15$ (additive) instead of $1.05$ (multiplicative).\n\n**Test Day Takeaway:** Successive percent changes multiply, not add. A $40\\%$ increase then $25\\%$ decrease is $1.40 \\times 0.75 = 1.05$, not $1.15$.",
  skills: ["percents", "word-problems"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A cone-shaped tank has a radius of $6$ feet and a height of $9$ feet. The tank is filled with water to a height of $6$ feet from the bottom. What fraction of the tank's total volume is filled with water?",
  choices: [
    // distractor: applies inverse op — uses linear ratio 6/9 = 2/3
    { id: "A", text: "$\\dfrac{2}{3}$" },
    // distractor: stops one step early — uses 6/9 = 2/3 squared
    { id: "B", text: "$\\dfrac{4}{9}$" },
    { id: "C", text: "$\\dfrac{8}{27}$" },
    // distractor: wrong base — uses 6²/9² (incorrect dimensional ratio)
    { id: "D", text: "$\\dfrac{36}{81}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Volume Scaling**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Similar cones: linear ratio $\\dfrac{6}{9} = \\dfrac{2}{3}$. Volume scales as cube: $\\left(\\dfrac{2}{3}\\right)^3 = \\dfrac{8}{27}$.\n\n**The Full Solution:**\nThe water forms a smaller cone similar to the tank. The water cone has height $6$ and the tank has height $9$, so the linear scale ratio is $\\dfrac{6}{9} = \\dfrac{2}{3}$.\nFor similar 3D shapes, volumes scale as the cube of the linear ratio:\n$\\dfrac{V_{\\text{water}}}{V_{\\text{tank}}} = \\left(\\dfrac{2}{3}\\right)^3 = \\dfrac{8}{27}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses linear ratio $\\dfrac{2}{3}$ directly without cubing.\n* Choice B: \"stops one step early\" — squares the ratio (gives area scaling) instead of cubing.\n* Choice D: \"wrong base\" — uses $\\dfrac{36}{81}$ (which equals $\\dfrac{4}{9}$, the area ratio).\n\n**Test Day Takeaway:** For similar 3D figures, volume ratio = (linear ratio)$^3$. For 2D, area ratio = (linear ratio)$^2$.",
  skills: ["volume", "geometry"]
}
      ]
    }
  ]
};

export default practiceTest10;
