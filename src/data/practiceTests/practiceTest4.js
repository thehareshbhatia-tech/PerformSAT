// Practice Test 4 - SAT Math
// 2 Modules, 22 questions each (44 total)
// M1: targeted de-cloning (Q5 reverse-percent context swap, Q14 organism swap),
// easy-block archetype shuffle. M2 (2026-06 flow diversification): 3E/7M/12H
// with a unique wavy flow — easies at Q2/Q6/Q15 (Q15 the mid-module breather),
// mediums at Q1/Q3/Q4/Q8/Q9/Q13/Q18, hards at Q5/Q7/Q10/Q11/Q12/Q14/Q16/Q17/
// Q19/Q20/Q21/Q22. Five infused pool items: line-meets-parabola vertex (Q5),
// percent-decrease+reverse-percent chain (Q11), coterminal-angle tangent (Q12),
// linear-from-two-points (Q1), no-solution parameter system (Q18). Band ramp
// rises from a mean of 4.6 (Q1-5) to 6.6 (Q18-22).

export const practiceTest4 = {
  id: "practice-test-4",
  title: "Practice Test 4",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
// Practice Test 4 — Math Module 1 (22 questions)
// Domain mix: 7 Algebra / 6 AdvMath / 5 PSDA / 4 Geo-Trig.

// ===== EASY (Q1–Q5) =====

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A trail mix uses raisins and almonds in a ratio of $3$ cups of raisins to $4$ cups of almonds. If the total amount of raisins and almonds combined is $42$ cups, how many cups of almonds does the mix use?",
  choices: [
    // distractor: picks the ratio number 4 directly
    { id: "A", text: "$4$" },
    // distractor: solves for raisins amount instead of almonds (3/7 of 42 = 18)
    { id: "B", text: "$18$" },
    { id: "C", text: "$24$" },
    // distractor: uses 2/3 of 42 instead of 4/7
    { id: "D", text: "$28$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Almonds make up $\\dfrac{4}{3 + 4} = \\dfrac{4}{7}$ of the total. So almonds $= \\dfrac{4}{7} \\cdot 42 = 24$ cups.\n\n**The Full Solution:**\nLet raisins $= 3k$ and almonds $= 4k$ (so the ratio is $3 : 4$).\nTotal: $3k + 4k = 7k = 42$, so $k = 6$.\nAlmonds $= 4k = 4 \\cdot 6 = 24$ cups.\n\nVerification: raisins $= 3 \\cdot 6 = 18$, total $= 18 + 24 = 42$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports the ratio number $4$ rather than solving.\n* Choice B: \"applies the inverse operation\" — solves for raisins ($\\dfrac{3}{7} \\cdot 42 = 18$) instead of almonds.\n* Choice D: \"wrong base\" — uses $\\dfrac{2}{3}$ of $42$ instead of $\\dfrac{4}{7}$.\n\n**Test Day Takeaway:** When two parts are given as a ratio and the total of both parts is known, the denominator of each fraction is the SUM of the ratio parts.",
  skills: ["ratios", "word-problems"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The function $g(t) = 250 + 18t$ models the number of items in a warehouse $t$ weeks after January 1. According to this model, what is the change in the number of items each week?",
  choices: [
    // distractor: confuses 18 with the initial value (which is 250)
    { id: "A", text: "An increase of $250$ items" },
    { id: "B", text: "An increase of $18$ items" },
    // distractor: treats 18 as a time input rather than a rate of change
    { id: "C", text: "An increase of $268$ items" },
    // distractor: inverts the rate (would be 1/18 weeks per item)
    { id: "D", text: "An increase of $\\dfrac{1}{18}$ items" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $g(t) = 250 + 18t$, the coefficient of $t$ is the rate of change — $18$ items added per week.\n\n**The Full Solution:**\nThe function is in the form $g(t) = b + mt$, where $m = 18$ is the slope and $b = 250$ is the $g$-intercept. The slope tells us the rate of change: for each additional week, the number of items in the warehouse increases by $18$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — confuses $18$ with the initial value $250$.\n* Choice C: \"applies the inverse operation\" — adds $250 + 18 = 268$ instead of identifying the slope alone.\n* Choice D: \"applies the inverse operation\" — inverts the rate ($1$ item per $\\tfrac{1}{18}$ weeks).\n\n**Test Day Takeaway:** In $y = b + mx$, the coefficient of the variable is always the rate of change per unit of that variable.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A botanical conservatory has $312$ orchid plants on display, and the orchids make up $26\\%$ of all the plants on display in the conservatory. How many plants, in total, are on display in the conservatory?",
  choices: [
    // distractor: applies the percent forward — $312 \cdot 0.26 \approx 81$
    { id: "A", text: "$81$" },
    // distractor: divides by complement: $\\frac{312}{0.74} \approx 422$
    { id: "B", text: "$422$" },
    { id: "C", text: "$1{,}200$" },
    // distractor: divides by $0.026$ instead of $0.26$ (decimal-place slip)
    { id: "D", text: "$12{,}000$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Total $\\times 0.26 = 312$, so total $= \\frac{312}{0.26} = 1200$.\n\n**The Full Solution:**\nLet $T$ be the total number of plants. Then ${}0.26 \\cdot T = 312$.\nDivide both sides by $0.26$: $T = \\dfrac{312}{0.26} = 1200$.\n\nVerification: $26\\%$ of $1200 = 0.26 \\cdot 1200 = 312$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — multiplies $312 \\cdot 0.26 \\approx 81$ instead of dividing.\n* Choice B: \"wrong base\" — divides by the complement $0.74$ (treats $312$ as the non-orchid count).\n* Choice D: \"off-by-one / decimal slip\" — divides by $0.026$ instead of $0.26$.\n\n**Test Day Takeaway:** When a percent of an unknown total is given, divide the part by the percent (as a decimal) to recover the whole.",
  skills: ["percents"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The function $f$ is defined by $f(x) = 7x - 4$. What is the value of $f(6) + 5$?",
  choices: [
    // distractor: gives f(6) alone, stopping one step early
    { id: "A", text: "$38$" },
    { id: "B", text: "$43$" },
    // distractor: subtracts 5 instead of adding (applies inverse operation)
    { id: "C", text: "$33$" },
    // distractor: computes f(6 + 5) = f(11) = 73 (applies the +5 to the input)
    { id: "D", text: "$73$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $f(6) = 7 \\cdot 6 - 4 = 38$. Then $f(6) + 5 = 38 + 5 = 43$.\n\n**The Full Solution:**\nEvaluate $f$ at $x = 6$:\n$f(6) = 7(6) - 4 = 42 - 4 = 38$\nNow add $5$:\n$f(6) + 5 = 38 + 5 = 43$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives $f(6) = 38$ but forgets the final $+5$.\n* Choice C: \"applies the inverse operation\" — subtracts $5$ instead of adding it.\n* Choice D: \"wrong base\" — applies the $+5$ to the input, computing $f(11) = 73$ instead of adding to the output.\n\n**Test Day Takeaway:** Read carefully: $f(6) + 5$ adds $5$ to the OUTPUT, while $f(6 + 5)$ adds $5$ to the INPUT. The two are very different.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A store sells notebooks for $\\$4$ each plus a one-time $\\$7$ shipping fee per order. The total cost of buying $n$ notebooks, including shipping, is $\\$31$. What is the total cost, in dollars, of buying $n + 5$ notebooks (with one shipping fee)?",
  choices: [
    // distractor: adds $5 flat to the original total instead of $5 \cdot 4 = \$20$
    { id: "A", text: "$\\$36$" },
    // distractor: uses the $\$7$ fee instead of the $\$4$ unit price for the extras
    { id: "B", text: "$\\$66$" },
    { id: "C", text: "$\\$51$" },
    // distractor: stops at finding $n = 6$ and reports as $\$6 \cdot 5 = \$30$
    { id: "D", text: "$\\$30$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $5$ extra notebooks at $\\$4$ each add $\\$20$ to the original total. New total: $\\$31 + \\$20 = \\$51$.\n\n**The Full Solution:**\nLet the cost equation be $4n + 7 = 31$, so $4n = 24$ and $n = 6$.\nFor $n + 5 = 11$ notebooks: total $= 4(11) + 7 = 44 + 7 = \\$51$.\n\nShortcut: you do not need to find $n$. Adding $5$ notebooks adds $5 \\cdot \\$4 = \\$20$, and the shipping fee is unchanged, so the new total is $\\$31 + \\$20 = \\$51$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — adds the count $5$ as dollars instead of $5 \\cdot \\$4 = \\$20$.\n* Choice B: \"wrong base\" — uses the fee ($\\$7$) as the unit price for the new notebooks.\n* Choice D: \"stops one step early\" — solves $n = 6$ but multiplies by $5$ alone.\n\n**Test Day Takeaway:** Linear cost = (rate $\\times$ quantity) + fixed fee. Adding more items only changes the rate-times-quantity piece — the fixed fee stays the same.",
  skills: ["word-problems", "solving-equations"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "In a right triangle, one acute angle measures $32°$. What is the measure, in degrees, of the other acute angle?",
  correctAnswer: "58",
  explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**The correct answer is $58$.**\n\n**The Fast Way (~5s):** $90° - 32° = 58°$.\n\n**The Full Solution:**\nThe sum of angles in a triangle is $180°$. In a right triangle, one angle is $90°$.\n$90° + 32° + x = 180°$\n$x = 180° - 90° - 32° = 58°$\n\n**Common Mistakes to Avoid:**\n* Writing $180 - 32 = 148$ (forgetting the right angle).\n* Confusing complementary ($90°$) with supplementary ($180°$).\n\n**Verification:** $90 + 32 + 58 = 180$ \\checkmark.\n\n**Test Day Takeaway:** In a right triangle, the two acute angles are complementary (sum to $90°$).",
  skills: ["triangles", "angles"]
},

// ===== MEDIUM (Q6–Q14) =====

{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A researcher surveys a random sample of $600$ voters in a city and finds that $57\\%$ support a new policy. The margin of error for the survey is $\\pm 4\\%$. Which of the following is the best interpretation of this result?",
  choices: [
    // distractor: treats sample stat as population truth
    { id: "A", text: "Exactly $57\\%$ of all voters in the city support the policy." },
    // distractor: applies interval to sample (we already know sample %)
    { id: "B", text: "Between $53\\%$ and $61\\%$ of the sampled voters support the policy." },
    { id: "C", text: "It is plausible that between $53\\%$ and $61\\%$ of all voters in the city support the policy." },
    // distractor: misreads MOE as a guarantee about future samples
    { id: "D", text: "If another sample is taken, exactly $57\\%$ will support the policy." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Margin of error creates a plausibility interval for the population parameter: $57\\% \\pm 4\\% = [53\\%, 61\\%]$.\n\n**The Full Solution:**\nThe margin of error tells us that the true population proportion is plausibly within $4$ percentage points of the sample proportion. So the interval $53\\%$ to $61\\%$ is a plausible range for the percentage of all voters who support the policy.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — treats a sample statistic as an exact population value.\n* Choice B: \"applies the inverse operation\" — applies the interval to the sample (we already know the sample percentage).\n* Choice D: \"stops one step early\" — misreads MOE as a guarantee about future samples.\n\n**Test Day Takeaway:** Margin of error gives a plausible range for the POPULATION parameter, not the sample statistic.",
  skills: ["statistics", "margin-of-error"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A researcher models the relationship between hours of sunlight per day ($x$) and average daily temperature in degrees Fahrenheit ($y$) using the equation $y = 3.8x + 22$. According to this model, what is the predicted average temperature for a month with $13$ hours of sunlight?",
  choices: [
    { id: "A", text: "$71.4°\\text{F}$" },
    // distractor: rounds and accumulates error
    { id: "B", text: "$65.2°\\text{F}$" },
    // distractor: stops at 3.8 \cdot 13 — forgets the y-intercept 22
    { id: "C", text: "$49.4°\\text{F}$" },
    // distractor: uses x = 10 instead of x = 13 (off-by-three)
    { id: "D", text: "$60.0°\\text{F}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Substitute $x = 13$: $y = 3.8(13) + 22 = 49.4 + 22 = 71.4$.\n\n**The Full Solution:**\n$y = 3.8x + 22$\n$y = 3.8(13) + 22$\n$y = 49.4 + 22$\n$y = 71.4$\nThe predicted temperature is $71.4°\\text{F}$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"off-by-one\" — accumulates rounding error to $65.2$.\n* Choice C: \"stops one step early\" — computes $3.8 \\times 13 = 49.4$ but forgets to add the $y$-intercept of $22$.\n* Choice D: \"wrong base\" — uses $x = 10$ instead of $x = 13$, getting $3.8(10) + 22 = 60$.\n\n**Test Day Takeaway:** For prediction problems, just substitute the given value into the model equation — don't forget the intercept.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 9,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A system of equations is given:\n\n$3x + 2y = 19$\n$5x - 2y = 13$\n\nWhat is the value of $x$?",
  correctAnswer: "4",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~15s):** Add the two equations: $8x = 32$, so $x = 4$.\n\n**The Full Solution:**\n$3x + 2y = 19$ ... (1)\n$5x - 2y = 13$ ... (2)\nAdding (1) and (2): $(3x + 5x) + (2y - 2y) = 19 + 13$\n$8x = 32$\n$x = 4$\n\n**Verification:** If $x = 4$, from (1): $12 + 2y = 19$, so $2y = 7$, $y = 3.5$. Check (2): $20 - 7 = 13$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Subtracting instead of adding, which doesn't eliminate $y$.\n* Solving for $y$ when the question asks for $x$.\n\n**Test Day Takeaway:** When coefficients of one variable are opposites, add the equations to eliminate it instantly.",
  skills: ["systems-of-equations"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $\\dfrac{x + 3}{4} - \\dfrac{x - 1}{6} = 2$, what is the value of $x$?",
  correctAnswer: "13",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~30s):** Multiply through by the LCD $12$: $3(x + 3) - 2(x - 1) = 24 \\Rightarrow 3x + 9 - 2x + 2 = 24 \\Rightarrow x + 11 = 24 \\Rightarrow x = 13$.\n\n**The Full Solution:**\nMultiply each term of $\\dfrac{x + 3}{4} - \\dfrac{x - 1}{6} = 2$ by $12$ (the LCD):\n$3(x + 3) - 2(x - 1) = 24$\n$3x + 9 - 2x + 2 = 24$\n$x + 11 = 24$\n$x = 13$\n\n**Verification:** $\\dfrac{13 + 3}{4} - \\dfrac{13 - 1}{6} = \\dfrac{16}{4} - \\dfrac{12}{6} = 4 - 2 = 2$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting to distribute the negative sign on the second term, leaving $-2x - 2$ instead of $-2x + 2$.\n* Multiplying by only one denominator (e.g., by $4$) and missing the second.\n\n**Test Day Takeaway:** Clear all fractions first by multiplying every term by the LCD.",
  skills: ["solving-equations", "linear-functions"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The line $y = -\\dfrac{2}{5}x + 7$ is graphed in the $xy$-plane. A second line is perpendicular to this line and passes through the point $(4, 1)$. What is the $y$-intercept of the second line?",
  choices: [
    { id: "A", text: "$(0, -9)$" },
    // distractor: uses +10 instead of -10 in distribution
    { id: "B", text: "$(0, 9)$" },
    // distractor: keeps slope -2/5 instead of perpendicular slope
    { id: "C", text: "$(0, \\tfrac{13}{5})$" },
    // distractor: uses reciprocal 5/2 without negating, gets different intercept
    { id: "D", text: "$(0, -11)$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Perpendicular slope is $\\dfrac{5}{2}$. Using point $(4, 1)$: $1 = \\dfrac{5}{2}(4) + b = 10 + b$, so $b = -9$.\n\n**The Full Solution:**\nThe given line has slope $m_1 = -\\dfrac{2}{5}$.\nPerpendicular slopes are negative reciprocals: $m_2 = \\dfrac{5}{2}$.\nUsing point-slope form with $(4, 1)$:\n$y - 1 = \\dfrac{5}{2}(x - 4)$\n$y = \\dfrac{5}{2}x - 10 + 1$\n$y = \\dfrac{5}{2}x - 9$\nThe $y$-intercept is $(0, -9)$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — uses $+10$ instead of $-10$ when distributing $\\dfrac{5}{2}(-4)$.\n* Choice C: \"wrong base\" — uses the same slope $-\\dfrac{2}{5}$ instead of the perpendicular slope.\n* Choice D: \"off-by-one\" — arithmetic slip when computing $1 - 10$ as $-11$ instead of $-9$.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals: $m_1 \\cdot m_2 = -1$.",
  skills: ["slope", "linear-functions", "coordinate-geometry"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table below shows the results of a survey on preferred exercise type by age group.\n\n| | Running | Swimming | Cycling | Total |\n|---|---|---|---|---|\n| Under 30 | $45$ | $30$ | $25$ | $100$ |\n| 30 and over | $20$ | $35$ | $45$ | $100$ |\n| Total | $65$ | $65$ | $70$ | $200$ |\n\nWhat proportion of people who prefer swimming are under $30$?",
  choices: [
    // distractor: uses 100 (total under 30) as denominator — wrong condition direction
    { id: "A", text: "$\\dfrac{30}{100}$" },
    { id: "B", text: "$\\dfrac{30}{65}$" },
    // distractor: gives the proportion of swimmers who are 30 and over
    { id: "C", text: "$\\dfrac{35}{65}$" },
    // distractor: uses grand total 200 as denominator (joint, not conditional)
    { id: "D", text: "$\\dfrac{30}{200}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Of people who prefer swimming (total $65$), those under $30$ number $30$. Proportion $= \\dfrac{30}{65}$.\n\n**The Full Solution:**\nThe question asks for a conditional proportion: given that a person prefers swimming, what is the probability they are under $30$?\nThe denominator is the total number of swimming-preferrers: $30 + 35 = 65$.\nThe numerator is swimming-preferrers who are under $30$: $30$.\nProportion $= \\dfrac{30}{65}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses $100$ (total under $30$) as the denominator — wrong condition direction.\n* Choice C: \"applies the inverse operation\" — gives the proportion of swimmers who are $30$ and over.\n* Choice D: \"stops one step early\" — uses the grand total $200$ as the denominator (joint, not conditional).\n\n**Test Day Takeaway:** In conditional probability, the denominator is the total of the given condition.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A right circular cylinder has a radius of $4$ and a height of $9$. What is the volume of the cylinder, in terms of $\\pi$?",
  choices: [
    // distractor: uses 2 \pi r h (lateral area) instead of \pi r^2 h
    { id: "A", text: "$72\\pi$" },
    { id: "B", text: "$144\\pi$" },
    // distractor: uses r instead of r^2 (pi r h = 36 pi)
    { id: "C", text: "$36\\pi$" },
    // distractor: uses (r + h)^2 \pi without applying the volume formula
    { id: "D", text: "$169\\pi$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (4)^2 (9) = \\pi \\cdot 16 \\cdot 9 = 144\\pi$.\n\n**The Full Solution:**\nThe volume of a right circular cylinder is $V = \\pi r^2 h$.\nWith $r = 4$ and $h = 9$:\n$V = \\pi (4)^2 (9) = \\pi \\cdot 16 \\cdot 9 = 144\\pi$\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses $2\\pi r h$ (lateral surface area), getting $2\\pi(4)(9) = 72\\pi$.\n* Choice C: \"stops one step early\" — uses $r$ instead of $r^2$, getting $\\pi(4)(9) = 36\\pi$.\n* Choice D: \"applies the inverse operation\" — squares $(4 + 9)$ instead of squaring $r$ alone.\n\n**Test Day Takeaway:** Cylinder volume is $\\pi r^2 h$. Square the radius, not the height — and not the sum.",
  skills: ["volume", "geometry"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A patch of duckweed on a pond triples in area every $4$ days. If the patch starts with an area of $90$ square centimeters, which function $A(t)$ models the area, in square centimeters, after $t$ days?",
  choices: [
    // distractor: uses 4t instead of t/4 — triples every 1/4 day
    { id: "A", text: "$A(t) = 90(3)^{4t}$" },
    { id: "B", text: "$A(t) = 90(3)^{\\frac{t}{4}}$" },
    // distractor: confuses the base and the period
    { id: "C", text: "$A(t) = 90(4)^{\\frac{t}{3}}$" },
    // distractor: writes a linear model instead of exponential
    { id: "D", text: "$A(t) = 90 + 3t$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Triples every $4$ days means base $3$, exponent $\\frac{t}{4}$. Initial value $90$.\n\n**The Full Solution:**\nGeneral form: $A(t) = A_0 \\cdot r^{\\frac{t}{d}}$ where $A_0 = 90$, $r = 3$ (triples), $d = 4$ (period).\n$A(t) = 90(3)^{\\frac{t}{4}}$\nCheck: At $t = 4$, $A(4) = 90(3)^1 = 270$ \\checkmark (tripled).\nAt $t = 8$, $A(8) = 90(3)^2 = 810$ \\checkmark (tripled again).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses $4t$ instead of $\\frac{t}{4}$, which would triple every $\\frac{1}{4}$ day.\n* Choice C: \"wrong base\" — confuses the base and the period.\n* Choice D: \"applies the inverse operation\" — models linear growth instead of exponential.\n\n**Test Day Takeaway:** \"Triples every $d$ units\" $\\to$ base $3$, exponent $\\frac{t}{d}$.",
  skills: ["exponential-functions"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The expression $\\dfrac{6^5 \\cdot 3^4}{2^5 \\cdot 9^3}$ can be written as $3^a$ for some integer $a$. What is the value of $a$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~30s):** Rewrite everything in terms of primes $2$ and $3$:\n$6^5 = (2 \\cdot 3)^5 = 2^5 \\cdot 3^5$, and $9^3 = (3^2)^3 = 3^6$.\nSo $\\dfrac{2^5 \\cdot 3^5 \\cdot 3^4}{2^5 \\cdot 3^6} = \\dfrac{2^5 \\cdot 3^9}{2^5 \\cdot 3^6} = 3^3$.\nTherefore $a = 3$.\n\n**The Full Solution:**\nStep 1: Convert all bases to primes.\n$6^5 = (2 \\cdot 3)^5 = 2^5 \\cdot 3^5$\n$3^4 = 3^4$\n$2^5 = 2^5$\n$9^3 = (3^2)^3 = 3^6$\n\nStep 2: Substitute.\n$\\dfrac{2^5 \\cdot 3^5 \\cdot 3^4}{2^5 \\cdot 3^6}$\n\nStep 3: Simplify.\nNumerator: $2^5 \\cdot 3^{5+4} = 2^5 \\cdot 3^9$\nDenominator: $2^5 \\cdot 3^6$\nResult: $\\dfrac{2^5}{2^5} \\cdot \\dfrac{3^9}{3^6} = 1 \\cdot 3^3 = 3^3$\n\nSo $a = 3$.\n\n**Common Mistakes to Avoid:**\n* Forgetting to decompose $6^5$ into $2^5 \\cdot 3^5$.\n* Adding exponents incorrectly: $5 + 4 = 9$, then $9 - 6 = 3$.\n\n**Verification:** $\\dfrac{6^5 \\cdot 3^4}{2^5 \\cdot 9^3} = \\dfrac{7776 \\cdot 81}{32 \\cdot 729} = \\dfrac{629{,}856}{23{,}328} = 27 = 3^3$ \\checkmark.\n\n**Test Day Takeaway:** Convert composite bases to prime factors, then use exponent rules to simplify.",
  skills: ["exponent-rules"]
},

// ===== HARD (Q15–Q22) =====

{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $7x^2 - bx + 28 = 0$ has no real solutions. What is the greatest integer value of $b$?",
  choices: [
    // distractor: forgets strict inequality, uses b^2 = 784 -> b = 28
    { id: "A", text: "$28$" },
    { id: "B", text: "$27$" },
    // distractor: returns b^2 itself
    { id: "C", text: "$784$" },
    // distractor: off-by-two: uses sqrt of 4ac without taking square root
    { id: "D", text: "$112$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** No real solutions means discriminant $< 0$: $b^2 - 4(7)(28) < 0 \\Rightarrow b^2 < 784 \\Rightarrow |b| < 28$. Greatest integer: $b = 27$.\n\n**The Full Solution:**\nFor $7x^2 - bx + 28 = 0$: $a = 7$, $c = 28$.\nDiscriminant: $b^2 - 4ac = b^2 - 4(7)(28) = b^2 - 784$.\nNo real solutions: $b^2 - 784 < 0$, so $b^2 < 784$, giving $|b| < 28$.\nGreatest integer satisfying $|b| < 28$ is $b = 27$.\n\nVerification: at $b = 27$, discriminant $= 729 - 784 = -55 < 0$ \\checkmark. At $b = 28$, discriminant $= 0$ (one solution, not zero).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — forgets the strict inequality (the boundary $b^2 = 784$ gives one solution, not zero).\n* Choice C: \"stops one step early\" — returns $b^2$ instead of $b$.\n* Choice D: \"wrong base\" — uses $4ac = \\frac{784}{7} = 112$ as the answer.\n\n**Test Day Takeaway:** No real solutions $\\Leftrightarrow$ discriminant $< 0$. Strict inequality means the boundary is excluded.",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the line $y = 2x + 3$ intersects the parabola $y = x^2 - 3x - 21$ at two points. What is the $x$-coordinate of the intersection point with the greater $x$-value?",
  correctAnswer: "8",
  explanation: "**SAT Pattern: Quadratic-Linear System**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~30s):** Set equal: $2x + 3 = x^2 - 3x - 21$. Rearrange: $x^2 - 5x - 24 = 0$. Factor: $(x - 8)(x + 3) = 0$. So $x = 8$ or $x = -3$. The greater value is $8$.\n\n**The Full Solution:**\nSet the two equations equal:\n$2x + 3 = x^2 - 3x - 21$\n$0 = x^2 - 3x - 21 - 2x - 3$\n$0 = x^2 - 5x - 24$\n$0 = (x - 8)(x + 3)$\n$x = 8$ or $x = -3$\n\n**Verification:** At $x = 8$: Line gives $y = 2(8) + 3 = 19$. Parabola gives $y = 64 - 24 - 21 = 19$ \\checkmark.\nAt $x = -3$: Line gives $y = -6 + 3 = -3$. Parabola gives $y = 9 + 9 - 21 = -3$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Choosing $x = -3$ instead of $x = 8$.\n* Sign errors when moving terms across the equals sign.\n\n**Test Day Takeaway:** Set the two functions equal, rearrange to standard form, and factor.",
  skills: ["quadratic-equations", "systems-of-equations"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, a circle has center $(3, -2)$ and passes through the point $(7, 1)$. Which of the following is the equation of this circle?",
  choices: [
    // distractor: uses r = 5 but writes r^2 = 5 instead of 25
    { id: "A", text: "$(x - 3)^2 + (y + 2)^2 = 5$" },
    { id: "B", text: "$(x - 3)^2 + (y + 2)^2 = 25$" },
    // distractor: gets the signs wrong on the center coordinates
    { id: "C", text: "$(x + 3)^2 + (y - 2)^2 = 25$" },
    // distractor: computes sqrt(16) + sqrt(9) = 4 + 3 = 7 instead of sqrt(25)
    { id: "D", text: "$(x - 3)^2 + (y + 2)^2 = 7$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Radius$^2 = (7-3)^2 + (1-(-2))^2 = 16 + 9 = 25$. Equation: $(x-3)^2 + (y+2)^2 = 25$.\n\n**The Full Solution:**\nThe standard form of a circle is $(x-h)^2 + (y-k)^2 = r^2$ with center $(h, k)$.\nCenter: $(3, -2)$, so $h = 3$, $k = -2$.\nRadius = distance from center to point on circle:\n$r = \\sqrt{(7-3)^2 + (1-(-2))^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$\n$r^2 = 25$\nEquation: $(x-3)^2 + (y+2)^2 = 25$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — uses $r = 5$ but writes $r^2 = 5$ instead of $25$.\n* Choice C: \"applies the inverse operation\" — gets the signs wrong in the center coordinates.\n* Choice D: \"wrong base\" — computes $\\sqrt{16} + \\sqrt{9} = 4 + 3 = 7$ instead of $\\sqrt{16 + 9}$.\n\n**Test Day Takeaway:** Find $r^2$ using the distance formula squared: $r^2 = (\\Delta x)^2 + (\\Delta y)^2$.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Triangle $ABC$ has vertices at $A(0, 0)$, $B(10, 0)$, and $C(4, 7)$. What is the area of triangle $ABC$?",
  choices: [
    // distractor: uses horizontal distance from A to C as the base (8)
    { id: "A", text: "$28$" },
    { id: "B", text: "$35$" },
    // distractor: wrong base length (12)
    { id: "C", text: "$42$" },
    // distractor: forgets the 1/2 factor
    { id: "D", text: "$70$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Base $AB$ lies on the $x$-axis with length $10$. Height is the $y$-coordinate of $C$, which is $7$. Area $= \\dfrac{1}{2}(10)(7) = 35$.\n\n**The Full Solution:**\nSince $A$ and $B$ are both on the $x$-axis ($y = 0$), the base $AB = 10 - 0 = 10$.\nThe height from $C$ to $AB$ is the perpendicular distance from $C$ to the $x$-axis, which is the $y$-coordinate of $C$: $h = 7$.\nArea $= \\dfrac{1}{2} \\cdot b \\cdot h = \\dfrac{1}{2}(10)(7) = 35$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses horizontal distance from $A$ to $C$ as the base ($8$): $\\dfrac{1}{2}(8)(7) = 28$.\n* Choice C: \"off-by-one\" — uses a wrong base length ($12$): $\\dfrac{1}{2}(12)(7) = 42$.\n* Choice D: \"stops one step early\" — forgets the $\\dfrac{1}{2}$ factor: $10 \\times 7 = 70$.\n\n**Test Day Takeaway:** When one side of a triangle lies on a coordinate axis, use that as the base — the height is simply the perpendicular coordinate of the opposite vertex.",
  skills: ["area", "coordinate-geometry", "triangles"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A rectangle has a length that is $5$ more than twice its width. If the perimeter of the rectangle is $88$, what is the area of the rectangle?",
  correctAnswer: "403",
  explanation: "**SAT Pattern: Multi-Step Word Problem with Geometry**\n\n**The correct answer is $403$.**\n\n**The Fast Way (~30s):** Let width $= w$, length $= 2w + 5$. Perimeter: $2(w + 2w + 5) = 88 \\Rightarrow 3w + 5 = 44 \\Rightarrow w = 13$. Length $= 31$. Area $= 13 \\times 31 = 403$.\n\n**The Full Solution:**\nLet $w$ = width. Then length $= 2w + 5$.\nPerimeter: $2(w + 2w + 5) = 88$\n$2(3w + 5) = 88$\n$3w + 5 = 44$\n$3w = 39$\n$w = 13$\nLength $= 2(13) + 5 = 31$\nArea $= 13 \\times 31 = 403$\n\n**Common Mistakes to Avoid:**\n* Using $P = w + l$ instead of $P = 2(w + l)$.\n* Reporting the perimeter or dimensions instead of the area.\n\n**Verification:** Perimeter: $2(13 + 31) = 2(44) = 88$ \\checkmark. Area: $13 \\times 31 = 403$ \\checkmark.\n\n**Test Day Takeaway:** Set up the variable relationship first, use the perimeter to solve for dimensions, then find area.",
  skills: ["word-problems", "area", "solving-equations"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $(3x + k)(2x - 5) = 6x^2 + bx - 40$ for all values of $x$, what is the value of $b$?",
  choices: [
    { id: "A", text: "$1$" },
    // distractor: subtracts 2k instead of adding (sign error on -15 + 2k)
    { id: "B", text: "$-31$" },
    // distractor: sign error on -15 (uses 15 - 16 = -1)
    { id: "C", text: "$-1$" },
    // distractor: drops the negative sign entirely
    { id: "D", text: "$31$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** From the constant term: $k \\cdot (-5) = -40$, so $k = 8$. Expand: $(3x + 8)(2x - 5) = 6x^2 - 15x + 16x - 40 = 6x^2 + x - 40$. So $b = 1$.\n\n**The Full Solution:**\nExpand $(3x + k)(2x - 5)$:\n$= 6x^2 - 15x + 2kx - 5k$\n$= 6x^2 + (-15 + 2k)x - 5k$\nMatch with $6x^2 + bx - 40$:\nConstant terms: $-5k = -40 \\Rightarrow k = 8$.\nLinear terms: $b = -15 + 2(8) = -15 + 16 = 1$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — subtracts $2k$ instead of adding, getting $-15 - 16 = -31$.\n* Choice C: \"off-by-one\" — sign error: $15 - 16 = -1$ instead of $-15 + 16 = 1$.\n* Choice D: \"wrong base\" — drops the negative sign on $-15$, getting $15 + 16 = 31$.\n\n**Test Day Takeaway:** Match coefficients systematically — solve for the unknown constant first using the easiest term (the constant).",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A survey of $250$ households classified each household by whether they own a pet and whether they have a garden.\n\n| | Pet Owner | Not a Pet Owner | Total |\n|---|---|---|---|\n| Has Garden | $70$ | $55$ | $125$ |\n| No Garden | $60$ | $65$ | $125$ |\n| Total | $130$ | $120$ | $250$ |\n\nA household is selected at random from those that have a garden. What is the probability that this household is a pet owner?",
  choices: [
    // distractor: uses grand total 250 (joint probability, not conditional)
    { id: "A", text: "$\\dfrac{70}{250}$" },
    // distractor: uses 130 (total pet owners) — wrong condition direction
    { id: "B", text: "$\\dfrac{70}{130}$" },
    { id: "C", text: "$\\dfrac{70}{125}$" },
    // distractor: gives P(Has Garden) — ignores the pet-owner part
    { id: "D", text: "$\\dfrac{125}{250}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Given: has garden (total $125$). Pet owners with garden: $70$. Probability $= \\dfrac{70}{125}$.\n\n**The Full Solution:**\nWe need $P(\\text{Pet Owner} \\mid \\text{Has Garden})$.\nThe condition restricts us to the \"Has Garden\" row, which has $125$ total households.\nOf those, $70$ are pet owners.\n$P = \\dfrac{70}{125} = \\dfrac{14}{25} = 0.56$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses the grand total $250$ as the denominator (joint probability, not conditional).\n* Choice B: \"applies the inverse operation\" — uses $130$ (total pet owners) as the denominator — wrong condition direction.\n* Choice D: \"stops one step early\" — gives $P(\\text{Has Garden})$ with no regard to pet ownership.\n\n**Test Day Takeaway:** In conditional probability, the \"given\" condition determines the denominator — restrict to that row or column total.",
  skills: ["two-way-tables", "probability", "statistics"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 4 — Math Module 2 (22 questions)
// Distribution: 3E / 6M / 13H with band-8 ceiling on Q7, Q20.
// Calibrated to Bluebook Module 2 Hard (Q7 composite-function inverse, Q20 rational w/ extraneous).

{
  id: 1,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The graph of the linear function $h$ in the $xy$-plane passes through the points $(4, 19)$ and $(10, 31)$. Which equation defines $h$?",
  choices: [
    { id: "A", text: "$h(x) = 2x + 11$" },
    // distractor: correct slope 2 but uses the first point's y-value (19) as the intercept
    { id: "B", text: "$h(x) = 2x + 19$" },
    // distractor: inverts the slope ratio to \\Delta x / \\Delta y = 6/12 = 1/2
    { id: "C", text: "$h(x) = \\dfrac{1}{2}x + 17$" },
    // distractor: uses the first point's x-coordinate (4) as the intercept
    { id: "D", text: "$h(x) = 2x + 4$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Slope $= \\dfrac{31 - 19}{10 - 4} = \\dfrac{12}{6} = 2$. Intercept from $(4, 19)$: $19 = 2(4) + b \\Rightarrow b = 11$. So $h(x) = 2x + 11$.\n\n**The Full Solution:**\nCompute the slope between the two points:\n$m = \\dfrac{31 - 19}{10 - 4} = \\dfrac{12}{6} = 2$.\nUse point-slope (or substitute a point into $y = 2x + b$) with $(4, 19)$:\n$19 = 2(4) + b = 8 + b$, so $b = 11$.\nThus $h(x) = 2x + 11$.\n\n**Verification:** $h(10) = 2(10) + 11 = 31$ \\checkmark and $h(4) = 8 + 11 = 19$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"correct slope, wrong intercept\" — finds slope $2$ but writes the first $y$-value $19$ as the intercept without solving for $b$.\n* Choice C: \"inverse operation\" — inverts the slope ratio to $\\dfrac{\\Delta x}{\\Delta y} = \\dfrac{6}{12} = \\dfrac{1}{2}$.\n* Choice D: \"wrong base\" — uses the first $x$-coordinate $4$ as the intercept.\n\n**Test Day Takeaway:** A correct slope is only half the job — always substitute a point to find $b$. When two answer choices share a slope, the point-check decides between them.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "The bar graph shows the number of pages each of $5$ students read for a book club assignment. What is the median number of pages read?",
  diagram: {
    type: "barChart",
    params: {
      data: [
        { label: "1", value: 28 },
        { label: "2", value: 35 },
        { label: "3", value: 41 },
        { label: "4", value: 32 },
        { label: "5", value: 48 }
      ],
      xLabel: "Student",
      yLabel: "Pages read",
      yMax: 50,
      yStep: 10
    }
  },
  choices: [
    // distractor: returns the minimum value instead of finding the median
    { id: "A", text: "$28$" },
    // distractor: picks one of the data values without ordering
    { id: "B", text: "$32$" },
    { id: "C", text: "$35$" },
    // distractor: computes the mean (184/5 = 36.8) instead of the median
    { id: "D", text: "$36.8$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Median from a Bar Graph**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Read the values: $28, 35, 41, 32, 48$. Sort: $28, 32, 35, 41, 48$. The middle value is $35$.\n\n**The Full Solution:**\nThe median of $5$ values is the third value when sorted in ascending order.\n\nFrom the graph: $\\{28, 35, 41, 32, 48\\}$.\nSorted: $\\{28, 32, \\mathbf{35}, 41, 48\\}$.\nMedian $= 35$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — gives the minimum instead of the median.\n* Choice B: \"stops one step early\" — picks a data value without ordering first.\n* Choice D: \"applies the inverse operation\" — computes the mean ($\\dfrac{184}{5} = 36.8$) instead of the median.\n\n**Test Day Takeaway:** For median, ALWAYS sort first. Pick the middle value (or average the two middles for even counts).",
  skills: ["statistics", "median"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  question: "A system of equations is shown.\n\n$2x + y = 17$\n$x - y = 4$\n\nWhat is the value of $x$?",
  choices: [
    // distractor: gives the value of y instead of x
    { id: "A", text: "$3$" },
    { id: "B", text: "$7$" },
    // distractor: adds 17 + 4 = 21, divides by 2 instead of 3
    { id: "C", text: "$10.5$" },
    // distractor: subtracts the equations instead of adding
    { id: "D", text: "$13$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Add the equations: $(2x + y) + (x - y) = 17 + 4$, so $3x = 21$, giving $x = 7$.\n\n**The Full Solution:**\nAdd: $2x + y + x - y = 21$.\n$3x = 21$.\n$x = 7$.\nCheck: $y = 17 - 2(7) = 3$. Then $7 - 3 = 4$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the value of $y$ instead of $x$.\n* Choice C: \"applies the inverse operation\" — adds $17$ and $4$ and divides by $2$ instead of $3$.\n* Choice D: \"wrong base\" — subtracts the equations instead of adding.\n\n**Test Day Takeaway:** When one equation has $+y$ and the other has $-y$, add them to eliminate $y$.",
  skills: ["systems-of-equations", "solving-equations"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The function $h$ is defined by $h(t) = -5t^2 + 30t$, where $h(t)$ is the height, in meters, of a ball $t$ seconds after it is kicked. What is the maximum height of the ball, in meters?",
  choices: [
    // distractor: gives the time t when max occurs
    { id: "A", text: "$3$" },
    // distractor: stops at h(2) = 40 (uses wrong t)
    { id: "B", text: "$40$" },
    { id: "C", text: "$45$" },
    // distractor: doubles 30 = 60 ignoring the squared term
    { id: "D", text: "$60$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Vertex of $h(t) = -5t^2 + 30t$ at $t = -\\dfrac{30}{2(-5)} = 3$. Then $h(3) = -45 + 90 = 45$.\n\n**The Full Solution:**\n$h(t) = -5t^2 + 30t$ is a downward-opening parabola.\nTime of maximum: $t = -\\dfrac{b}{2a} = -\\dfrac{30}{2(-5)} = 3$ seconds.\nMaximum height: $h(3) = -5(9) + 30(3) = -45 + 90 = 45$ meters.\n\nVerification: factored form $h(t) = -5t(t - 6)$ has zeros at $t = 0, 6$; vertex is at $t = 3$ (midpoint), $h(3) = 45$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the $t$-coordinate of the vertex ($3$ seconds) instead of the maximum height.\n* Choice B: \"wrong base\" — uses $t = 2$ (a wrong vertex) and reports $h(2) = -20 + 60 = 40$.\n* Choice D: \"applies the inverse operation\" — doubles $30$, ignoring the negative quadratic term.\n\n**Test Day Takeaway:** For $f(t) = at^2 + bt + c$ the vertex is at $t = -\\dfrac{b}{2a}$. Plug the vertex $t$ back in to get the max/min value.",
  skills: ["function-interpretation", "quadratic-equations", "vertex-form"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the graph of $y = -x^2 + 8x - 5$ intersects the horizontal line $y = c$ at exactly one point. What is the value of $c$?",
  choices: [
    { id: "A", text: "$11$" },
    // distractor: reads the constant term -5 (the y-value at x = 0)
    { id: "B", text: "$-5$" },
    // distractor: reads the coefficient of x (8) instead of the maximum value
    { id: "C", text: "$8$" },
    // distractor: gives the x-coordinate of the vertex (4) instead of the maximum value
    { id: "D", text: "$4$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** A horizontal line meets a downward parabola at exactly one point only at the vertex, so $c$ equals the maximum value. Vertex at $x = -\\dfrac{8}{2(-1)} = 4$; maximum $= -(4)^2 + 8(4) - 5 = -16 + 32 - 5 = 11$.\n\n**The Full Solution:**\nThe parabola $y = -x^2 + 8x - 5$ opens downward. Setting $y = c$ gives $-x^2 + 8x - 5 = c$, or $x^2 - 8x + (5 + c) = 0$.\nExactly one intersection means this quadratic has exactly one solution, so its discriminant is $0$:\n$(-8)^2 - 4(1)(5 + c) = 0$\n$64 - 20 - 4c = 0$\n$44 = 4c$\n$c = 11$.\nEquivalently, $c$ is the parabola's maximum value, reached at the vertex $x = 4$: $-16 + 32 - 5 = 11$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — reads the constant term $-5$ (the value at $x = 0$) instead of the maximum.\n* Choice C: \"stops one step early\" — reports the coefficient of $x$, which is $8$.\n* Choice D: \"applies the inverse operation\" — gives the vertex's $x$-coordinate ($4$) rather than the $y$-value $c$.\n\n**Test Day Takeaway:** A horizontal line is tangent to a parabola only at the vertex, so the single-intersection value equals the max (downward) or min (upward) of the parabola.",
  skills: ["quadratic-equations", "vertex-form", "discriminant"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "On a typical weekday, the Riverside subway line carries $8{,}400$ riders. On Sunday, ridership on the line is $35\\%$ of the weekday total. How many riders use the line on Sunday?",
  choices: [
    { id: "A", text: "$2{,}940$" },
    // distractor: uses the complement 65% instead of 35%
    { id: "B", text: "$5{,}460$" },
    // distractor: divides by 0.35 instead of multiplying
    { id: "C", text: "$24{,}000$" },
    // distractor: decimal slip — multiplies by 0.035
    { id: "D", text: "$294$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Basic Percent Calculation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $35\\%$ of $8{,}400 = 0.35 \\times 8{,}400 = 2{,}940$.\n\n**The Full Solution:**\nSunday ridership $= 0.35 \\times 8{,}400$.\n$0.35 \\times 8{,}400 = 2{,}940$ riders.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — uses the complement $65\\%$: $0.65 \\times 8{,}400 = 5{,}460$.\n* Choice C: \"applies the inverse operation\" — divides by $0.35$ instead of multiplying.\n* Choice D: \"off-by-one / decimal slip\" — multiplies by $0.035$ instead of $0.35$.\n\n**Test Day Takeaway:** \"$X\\%$ of a total\" means multiply the total by $X/100$. Read whether the percent or its complement is requested.",
  skills: ["percents"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  question: "A rental company charges $\\$45$ per day plus $\\$0.30$ per mile driven. A customer's bill for a one-day rental was $\\$117$. If the same customer instead drove $30$ fewer miles on a two-day rental at the same daily and per-mile rates, what would the total bill be?",
  choices: [
    // distractor: uses one day instead of two — 45 + 0.30(210) = 108
    { id: "A", text: "$\\$108$" },
    { id: "B", text: "$\\$153$" },
    // distractor: keeps the original 240 miles instead of 210
    { id: "C", text: "$\\$162$" },
    // distractor: doubles the original total
    { id: "D", text: "$\\$234$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** Original miles: $0.30m = 117 - 45 = 72 \\Rightarrow m = 240$. New miles: $240 - 30 = 210$. New cost: $2 \\cdot 45 + 0.30 \\cdot 210 = 90 + 63 = \\$153$.\n\n**The Full Solution:**\nFrom the first trip: $45 + 0.30m = 117 \\Rightarrow 0.30m = 72 \\Rightarrow m = 240$ miles.\nNew rental: $2$ days at $\\$45$ each plus ${}0.30 \\cdot (240 - 30) = 0.30 \\cdot 210 = \\$63$ in mile charges.\nTotal: $2 \\cdot 45 + 63 = 90 + 63 = \\$153$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — uses one day instead of two: $45 + 0.30 \\cdot 210 = \\$108$.\n* Choice C: \"off-by-one\" — keeps the original $240$ miles: $2 \\cdot 45 + 0.30 \\cdot 240 = \\$162$.\n* Choice D: \"applies the inverse operation\" — doubles the original total, treating the trip as $2 \\cdot 117$.\n\n**Test Day Takeaway:** Read every change carefully — the new bill changes the day fee AND the mile count, both at the same per-unit rates.",
  skills: ["word-problems", "solving-equations", "linear-functions"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $\\dfrac{x}{3} + \\dfrac{x}{6} = 15$, what is the value of $x$?",
  choices: [
    // distractor: stops at x/3 = 10 from a sub-step
    { id: "A", text: "$10$" },
    // distractor: multiplies 15 by something other than 2
    { id: "B", text: "$18$" },
    { id: "C", text: "$30$" },
    // distractor: multiplies 15 by 3 (denominator of first fraction)
    { id: "D", text: "$45$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Multiply everything by $6$: $2x + x = 90$, so $3x = 90$, giving $x = 30$.\n\n**The Full Solution:**\n$\\dfrac{x}{3} + \\dfrac{x}{6} = 15$.\nLCD is $6$: $\\dfrac{2x}{6} + \\dfrac{x}{6} = 15$.\n$\\dfrac{3x}{6} = 15$.\n$\\dfrac{x}{2} = 15$.\n$x = 30$.\nCheck: $\\dfrac{30}{3} + \\dfrac{30}{6} = 10 + 5 = 15$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — computes $\\dfrac{30}{3} = 10$ and stops.\n* Choice B: \"applies the inverse operation\" — multiplies $15$ by some factor that doesn't clear the fractions correctly.\n* Choice D: \"wrong base\" — multiplies $15$ by $3$ alone (the smaller denominator).\n\n**Test Day Takeaway:** Multiply through by the LCD to clear all fractions at once.",
  skills: ["solving-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A parabola in the $xy$-plane has the equation $y = 3(x - 5)^2 - 27$. Which of the following is an equivalent form that reveals the $x$-intercepts of the parabola?",
  choices: [
    { id: "A", text: "$y = 3(x - 2)(x - 8)$" },
    // distractor: zeros at -2 and 8 — vertex would be x = 3, not 5
    { id: "B", text: "$y = 3(x + 2)(x - 8)$" },
    // distractor: zeros at 2 and -8 — vertex would be x = -3, not 5
    { id: "C", text: "$y = 3(x - 2)(x + 8)$" },
    // distractor: zeros at -2 and -8 — vertex would be x = -5, not 5
    { id: "D", text: "$y = 3(x + 2)(x + 8)$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Expand: $3(x-5)^2 - 27 = 3(x^2 - 10x + 25) - 27 = 3x^2 - 30x + 48 = 3(x - 2)(x - 8)$.\n\n**The Full Solution:**\n$y = 3(x-5)^2 - 27$\n$= 3(x^2 - 10x + 25) - 27$\n$= 3x^2 - 30x + 75 - 27$\n$= 3x^2 - 30x + 48$\n$= 3(x^2 - 10x + 16)$\n$= 3(x - 2)(x - 8)$.\n\nCheck: $x = 2$ and $x = 8$ are the $x$-intercepts.\nVerify vertex: $x = \\dfrac{2+8}{2} = 5$. $y(5) = 3(5-2)(5-8) = 3(3)(-3) = -27$. Vertex $(5, -27)$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — zeros at $-2$ and $8$ would put the vertex at $x = 3$, not $5$.\n* Choice C: \"wrong base\" — zeros at $2$ and $-8$ would put the vertex at $x = -3$.\n* Choice D: \"off-by-one\" — zeros at $-2$ and $-8$ would put the vertex at $x = -5$.\n\n**Test Day Takeaway:** To convert vertex form to factored form: expand, simplify, factor. The average of the zeros must equal the vertex $x$-coordinate.",
  skills: ["quadratic-equations", "factoring", "vertex-form"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = 2x + 3$. If $f(g(x)) = 4x^2 + 3$ for all real numbers $x$, which expression defines $g(x)$?",
  choices: [
    // distractor: takes the difference 4x^2 + 3 - 3 = 4x^2 without dividing by 2
    { id: "A", text: "$4x^2$" },
    { id: "B", text: "$2x^2$" },
    // distractor: keeps the +3 piece (subtracts wrong constant)
    { id: "C", text: "$2x^2 + 3$" },
    // distractor: divides only the leading term, not the constant — and confuses signs
    { id: "D", text: "$x^2 - \\dfrac{3}{2}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Composition**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $f(g(x)) = 2g(x) + 3 = 4x^2 + 3$. Subtract $3$ from both sides: $2g(x) = 4x^2$. Divide by $2$: $g(x) = 2x^2$.\n\n**The Full Solution:**\nSubstitute $g(x)$ into $f$: $f(g(x)) = 2 \\cdot g(x) + 3$.\n\nSet equal to the given expression: $2 g(x) + 3 = 4x^2 + 3$.\n\nSolve for $g(x)$:\n$2 g(x) = 4x^2$\n$g(x) = 2x^2$.\n\n**Verification:** $f(g(x)) = f(2x^2) = 2(2x^2) + 3 = 4x^2 + 3$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — subtracts $3$ from both sides but forgets to divide by $2$, giving $g(x) = 4x^2$.\n* Choice C: \"applies the inverse operation\" — leaves the $+3$ inside $g(x)$, but the $+3$ comes from $f$, not $g$.\n* Choice D: \"wrong base\" — divides only the leading term $4x^2$ by $2$ but mishandles the constant.\n\n**Test Day Takeaway:** Treat $g(x)$ as the input variable: substitute it into $f$, then solve algebraically. Subtract the additive constant first, then divide by the leading coefficient.",
  skills: ["function-composition", "function-interpretation"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A community theater sells a souvenir program. The regular price of the program is $\\$24.00$. During a sale, the program's price is $75\\%$ less than the regular price, and that sale price is $20\\%$ greater than the theater's cost to print one program. What is the theater's cost, in dollars, to print one program?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~40s):** Sale price $= (1 - 0.75)(24) = 0.25 \\cdot 24 = 6$. Sale price is $20\\%$ above cost, so cost $= \\dfrac{6}{1.20} = 5$.\n\n**The Full Solution:**\nStep 1 — apply the percent decrease to get the sale price:\n$\\text{sale} = 24.00 \\times (1 - 0.75) = 24.00 \\times 0.25 = \\$6.00$.\nStep 2 — the sale price is $20\\%$ greater than cost, so $\\text{sale} = 1.20 \\times \\text{cost}$:\n$6.00 = 1.20 \\times \\text{cost}$\n$\\text{cost} = \\dfrac{6.00}{1.20} = \\$5.00$.\n\n**Verification:** $20\\%$ more than $\\$5.00$ is $5.00 \\times 1.20 = \\$6.00$, and $\\$6.00$ is $75\\%$ less than $\\$24.00$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Taking $20\\%$ OF the sale price ($6 \\times 0.80 = 4.80$) instead of dividing by $1.20$ — \"greater than cost\" makes cost the base, not the sale price.\n* Stopping at the sale price $\\$6.00$ and reporting it as the cost.\n* Subtracting the percents ($75 - 20 = 55$) and applying $55\\%$ in one step.\n\n**Test Day Takeaway:** Chain percents one at a time. \"$X\\%$ greater than the cost\" means sale $= (1 + X/100)\\cdot\\text{cost}$, so recover the cost by DIVIDING, not multiplying.",
  skills: ["percents", "reverse-percentage"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "What is the value of $\\tan\\dfrac{53\\pi}{6}$?",
  choices: [
    { id: "A", text: "$-\\dfrac{\\sqrt{3}}{3}$" },
    // distractor: drops the second-quadrant sign
    { id: "B", text: "$\\dfrac{\\sqrt{3}}{3}$" },
    // distractor: uses reference angle pi/3 instead of pi/6
    { id: "C", text: "$-\\sqrt{3}$" },
    // distractor: wrong reference angle AND wrong sign
    { id: "D", text: "$\\sqrt{3}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Coterminal Angles — Unit Circle**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Subtract full turns: $\\dfrac{53\\pi}{6} - 8\\pi = \\dfrac{53\\pi}{6} - \\dfrac{48\\pi}{6} = \\dfrac{5\\pi}{6}$. The angle $\\dfrac{5\\pi}{6}$ is in Quadrant II, where tangent is negative, with reference angle $\\dfrac{\\pi}{6}$. So $\\tan\\dfrac{5\\pi}{6} = -\\tan\\dfrac{\\pi}{6} = -\\dfrac{\\sqrt{3}}{3}$.\n\n**The Full Solution:**\nReduce the angle by subtracting multiples of $2\\pi = \\dfrac{12\\pi}{6}$:\n$\\dfrac{53\\pi}{6} - 4\\cdot 2\\pi = \\dfrac{53\\pi}{6} - \\dfrac{48\\pi}{6} = \\dfrac{5\\pi}{6}$.\nThe coterminal angle $\\dfrac{5\\pi}{6}$ lies in Quadrant II (between $\\dfrac{\\pi}{2}$ and $\\pi$), where tangent is negative.\nIts reference angle is $\\pi - \\dfrac{5\\pi}{6} = \\dfrac{\\pi}{6}$.\n$\\tan\\dfrac{\\pi}{6} = \\dfrac{1}{\\sqrt{3}} = \\dfrac{\\sqrt{3}}{3}$, so $\\tan\\dfrac{5\\pi}{6} = -\\dfrac{\\sqrt{3}}{3}$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"sign error\" — uses the correct reference value but forgets tangent is negative in Quadrant II.\n* Choice C: \"wrong reference angle\" — treats the reference angle as $\\dfrac{\\pi}{3}$ (giving $\\tan = \\sqrt{3}$) with the correct negative sign.\n* Choice D: \"two errors\" — wrong reference angle and wrong sign.\n\n**Test Day Takeaway:** For a large radian angle, subtract $2\\pi$ repeatedly to land in $[0, 2\\pi)$, then use the quadrant to fix the sign and the reference angle to get the magnitude.",
  skills: ["trigonometry", "radians", "unit-circle"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A movie theater sold adult tickets for $\\$12$ each and child tickets for $\\$7$ each. A total of $200$ tickets were sold, and the total revenue was $\\$2{,}100$. How many adult tickets were sold?",
  correctAnswer: "140",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $140$.**\n\n**The Fast Way (~30s):** Let $a$ = adult tickets and $c$ = child tickets. From $a + c = 200$, $c = 200 - a$. Substitute into $12a + 7c = 2100$: $12a + 7(200 - a) = 2100 \\Rightarrow 5a + 1400 = 2100 \\Rightarrow a = 140$.\n\n**The Full Solution:**\nLet $a$ = adult tickets, $c$ = child tickets.\n$a + c = 200$ ... (1)\n$12a + 7c = 2100$ ... (2)\nFrom (1): $c = 200 - a$.\nSubstitute into (2): $12a + 7(200 - a) = 2100$.\n$12a + 1400 - 7a = 2100$.\n$5a = 700$.\n$a = 140$.\n\n**Verification:** $c = 60$. Revenue: $12(140) + 7(60) = 1680 + 420 = 2100$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Answering $60$ (the number of child tickets).\n* Setting up $12a + 7c = 200$ (confusing quantity and revenue equations).\n\n**Test Day Takeaway:** Two equations: one for the count, one for the revenue. Substitute and solve.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = (x + 3)(x - 11)$. The function $g$ is defined by $g(x) = f(x) + k$, where $k$ is a constant. If the graph of $y = g(x)$ in the $xy$-plane has exactly one $x$-intercept, what is the value of $k$?",
  choices: [
    // distractor: gives the original f minimum (-49)
    { id: "A", text: "$-49$" },
    { id: "B", text: "$49$" },
    // distractor: gives the negative product of zeros: -(-3)(11) = 33
    { id: "C", text: "$33$" },
    // distractor: gives k = product of f's zeros (-33)
    { id: "D", text: "$-33$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $f$ has minimum value $f(4) = (7)(-7) = -49$. $g(x) = f(x) + k$ shifts the parabola up by $k$. For exactly one $x$-intercept, the vertex must be on the $x$-axis: $-49 + k = 0 \\Rightarrow k = 49$.\n\n**The Full Solution:**\n$f(x) = (x + 3)(x - 11)$ has zeros at $x = -3$ and $x = 11$, vertex at $x = \\dfrac{-3 + 11}{2} = 4$.\nMinimum value of $f$: $f(4) = (7)(-7) = -49$.\nThen $g(x) = f(x) + k$ has minimum value $-49 + k$.\nFor exactly one $x$-intercept, $g$'s vertex must lie on the $x$-axis: $-49 + k = 0$, so $k = 49$.\n\nVerification: $g(x) = (x + 3)(x - 11) + 49 = x^2 - 8x - 33 + 49 = x^2 - 8x + 16 = (x - 4)^2$, which has exactly one $x$-intercept at $x = 4$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives $f$'s minimum ($-49$) instead of the shift needed.\n* Choice C: \"applies the inverse operation\" — uses $-(-3)(11) = 33$ as a wrong product.\n* Choice D: \"wrong base\" — gives the constant term of $f$ ($-33$) instead of the negative of $f$'s minimum.\n\n**Test Day Takeaway:** A parabola has exactly one $x$-intercept $\\Leftrightarrow$ vertex lies on the $x$-axis. Shift the function by the negative of its minimum (or maximum).",
  skills: ["quadratic-equations", "vertex-form", "function-interpretation"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A beekeeper records the mass of honey, in grams, collected from each of six hives: $410$, $385$, $460$, $372$, $448$, and $405$. What is the range of these masses?",
  choices: [
    { id: "A", text: "$88$" },
    // distractor: reports the maximum value only
    { id: "B", text: "$460$" },
    // distractor: reports the minimum value only
    { id: "C", text: "$372$" },
    // distractor: subtracts the minimum from the second-largest (448 - 372)
    { id: "D", text: "$76$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Range $= \\text{max} - \\text{min} = 460 - 372 = 88$.\n\n**The Full Solution:**\nThe range of a data set is the largest value minus the smallest value.\nLargest $= 460$, smallest $= 372$.\nRange $= 460 - 372 = 88$ grams.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — reports only the maximum value.\n* Choice C: \"stops one step early\" — reports only the minimum value.\n* Choice D: \"wrong base\" — subtracts the minimum from the second-largest value ($448 - 372 = 76$) instead of from the maximum.\n\n**Test Day Takeaway:** Range is a single subtraction: identify the true max and true min, then subtract.",
  skills: ["statistics", "range"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A movie theater sold adult tickets for $\\$12$ each and child tickets for $\\$7$ each. A total of $200$ tickets were sold, and the total revenue was $\\$2{,}100$. How many adult tickets were sold?",
  correctAnswer: "140",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $140$.**\n\n**The Fast Way (~30s):** Let $a$ = adult tickets and $c$ = child tickets. From $a + c = 200$, $c = 200 - a$. Substitute into $12a + 7c = 2100$: $12a + 7(200 - a) = 2100 \\Rightarrow 5a + 1400 = 2100 \\Rightarrow a = 140$.\n\n**The Full Solution:**\nLet $a$ = adult tickets, $c$ = child tickets.\n$a + c = 200$ ... (1)\n$12a + 7c = 2100$ ... (2)\nFrom (1): $c = 200 - a$.\nSubstitute into (2): $12a + 7(200 - a) = 2100$.\n$12a + 1400 - 7a = 2100$.\n$5a = 700$.\n$a = 140$.\n\n**Verification:** $c = 60$. Revenue: $12(140) + 7(60) = 1680 + 420 = 2100$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Answering $60$ (the number of child tickets).\n* Setting up $12a + 7c = 200$ (confusing quantity and revenue equations).\n\n**Test Day Takeaway:** Two equations: one for the count, one for the revenue. Substitute and solve.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In right triangle $XYZ$ shown, angle $Z$ is the right angle, $XY = 85$, and $XZ = 77$. What is the value of $\\sin(X)$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["X", "Z", "Y"],
      sideLabels: ["77", "", "85"],
      rightAngleVertex: 1
    }
  },
  choices: [
    { id: "A", text: "$\\dfrac{36}{85}$" },
    // distractor: uses XZ/XY (adjacent/hypotenuse) — this is cos(X)
    { id: "B", text: "$\\dfrac{77}{85}$" },
    // distractor: uses YZ/XZ — this is tan(X)
    { id: "C", text: "$\\dfrac{36}{77}$" },
    // distractor: inverts the tangent ratio
    { id: "D", text: "$\\dfrac{77}{36}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Right angle at $Z$, so $XY = 85$ is the hypotenuse. $YZ = \\sqrt{85^2 - 77^2} = \\sqrt{1296} = 36$. For angle $X$: opposite $= YZ = 36$, hypotenuse $= XY = 85$. $\\sin(X) = \\dfrac{36}{85}$.\n\n**The Full Solution:**\n$YZ^2 = XY^2 - XZ^2 = 7225 - 5929 = 1296$.\n$YZ = 36$.\nVerification: $36^2 + 77^2 = 1296 + 5929 = 7225 = 85^2$ \\checkmark.\n$\\sin(X) = \\dfrac{\\text{opposite}}{\\text{hypotenuse}} = \\dfrac{YZ}{XY} = \\dfrac{36}{85}$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — uses $XZ = 77$ (adjacent) — this is $\\cos(X)$.\n* Choice C: \"applies the inverse operation\" — uses $\\dfrac{YZ}{XZ}$ — this is $\\tan(X)$.\n* Choice D: \"off-by-one\" — inverts the tangent ratio.\n\n**Test Day Takeaway:** SOH: sin = opposite/hypotenuse. Always identify which side is opposite the angle in question.",
  skills: ["trigonometry", "triangles"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$$\\dfrac{3}{4}y - \\dfrac{1}{8}x = \\dfrac{1}{2} - \\dfrac{3}{4}y$$\n$$\\dfrac{1}{4}x + \\dfrac{5}{4} = py + \\dfrac{7}{4}$$\n\nIn the given system of equations, $p$ is a constant. If the system has no solution, what is the value of $p$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~50s):** Clear fractions: eq 1 becomes $x - 12y = -4$; eq 2 becomes $x - 4py = 2$. For no solution: $-12 = -4p \\Rightarrow p = 3$.\n\n**Test Day Takeaway:** No solution = same slope, different intercept.",
  skills: ["systems-of-equations", "infinite-solutions-condition"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = (x + 8)(x + 3)(x - 5)$. Which of the following must be true about the values of $y = f(x) - 4$ at $x = -8, -3, 5$?",
  choices: [
    // distractor: subtracts 8 (the largest factor constant) instead of 4
    { id: "A", text: "All three $y$-values equal $-12$." },
    { id: "B", text: "All three $y$-values equal $-4$." },
    // distractor: adds 4 instead of subtracting (wrong sign on the shift)
    { id: "C", text: "All three $y$-values equal $4$." },
    // distractor: confuses the input x-values with the output y-values
    { id: "D", text: "The three $y$-values equal $-4$, $-3$, $5$ respectively." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** At each listed $x$-value, $f(x) = 0$ (these are the zeros), so $y = f(x) - 4 = 0 - 4 = -4$. All three equal $-4$.\n\n**The Full Solution:**\nThe zeros of $f(x) = (x + 8)(x + 3)(x - 5)$ are $x = -8, -3, 5$.\nAt each zero, $f(x) = 0$.\nSo $y = f(x) - 4 = 0 - 4 = -4$ at all three inputs.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong shift\" — subtracts $8$ (a factor constant) instead of $4$.\n* Choice C: \"sign error\" — adds $4$ instead of subtracting, giving $+4$.\n* Choice D: \"input/output confusion\" — reports the $x$-values as if they were the $y$-values.\n\n**Test Day Takeaway:** $y = f(x) + k$ shifts every output by $k$. At a zero of $f$, the shifted output is just $k$.",
  skills: ["polynomial-functions", "function-transformations"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "What value of $x$ satisfies the equation $\\dfrac{x}{x - 2} + \\dfrac{2}{x + 1} = \\dfrac{6}{x^2 - x - 2}$?",
  correctAnswer: "-5",
  explanation: "**SAT Pattern: Rational Equation**\n\n**The correct answer is $-5$.**\n\n**The Fast Way (~45s):** Factor the right denominator: $x^2 - x - 2 = (x - 2)(x + 1)$. Multiply both sides by $(x - 2)(x + 1)$: $x(x + 1) + 2(x - 2) = 6$. Expand and simplify: $x^2 + 3x - 10 = 0 \\Rightarrow (x + 5)(x - 2) = 0$. So $x = -5$ or $x = 2$. Reject $x = 2$ (denominator becomes $0$). Answer: $x = -5$.\n\n**The Full Solution:**\nFactor the right denominator: $x^2 - x - 2 = (x - 2)(x + 1)$.\n\nThe common denominator across all three fractions is $(x - 2)(x + 1)$.\n\nMultiply every term by $(x - 2)(x + 1)$:\n$\\dfrac{x}{x - 2} \\cdot (x - 2)(x + 1) + \\dfrac{2}{x + 1} \\cdot (x - 2)(x + 1) = \\dfrac{6}{(x - 2)(x + 1)} \\cdot (x - 2)(x + 1)$\n$x(x + 1) + 2(x - 2) = 6$\n\nExpand:\n$x^2 + x + 2x - 4 = 6$\n$x^2 + 3x - 10 = 0$\n$(x + 5)(x - 2) = 0$\n\nSo $x = -5$ or $x = 2$.\n\n**Check for extraneous solutions:** $x = 2$ makes the denominators $x - 2 = 0$ and $x^2 - x - 2 = 0$ — division by zero. Reject. So $x = -5$ is the only valid solution.\n\n**Verification:** at $x = -5$: $\\dfrac{-5}{-7} + \\dfrac{2}{-4} = \\dfrac{5}{7} - \\dfrac{1}{2} = \\dfrac{10 - 7}{14} = \\dfrac{3}{14}$. Right side: $\\dfrac{6}{25 + 5 - 2} = \\dfrac{6}{28} = \\dfrac{3}{14}$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $x = 2$ — it satisfies the polynomial equation but makes the original equation undefined (extraneous).\n* Forgetting to factor the right-side denominator before finding the LCD.\n* Distributing incorrectly when multiplying by the LCD.\n\n**Test Day Takeaway:** Rational equations: factor every denominator, multiply through by the LCD, solve the polynomial — then ALWAYS check that no solution makes a denominator zero. Extraneous solutions are common when the LCD shares a factor with one of the denominators.",
  skills: ["rational-equations", "factoring", "solving-equations"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "An isosceles right triangle has a perimeter of $78 + 78\\sqrt{2}$ inches. What is the length, in inches, of one leg of this triangle?",
  choices: [
    // distractor: halves 78 but drops the radical factor entirely
    { id: "A", text: "$39$" },
    { id: "B", text: "$39\\sqrt{2}$" },
    // distractor: reads the rational part of the perimeter as the leg without solving
    { id: "C", text: "$78$" },
    // distractor: gives the hypotenuse length instead of a leg
    { id: "D", text: "$78\\sqrt{2}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Special Right Triangle — 45-45-90**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Leg $L$, hypotenuse $L\\sqrt{2}$. Perimeter: $L(2 + \\sqrt{2}) = 78(1 + \\sqrt{2})$. $L = 39\\sqrt{2}$.\n\n**The Full Solution:**\nIn an isosceles right triangle the two legs are equal ($L$) and the hypotenuse is $L\\sqrt{2}$.\nPerimeter $= 2L + L\\sqrt{2} = L(2 + \\sqrt{2})$.\nSet equal to $78 + 78\\sqrt{2} = 78(1 + \\sqrt{2})$:\n$L = \\dfrac{78(1 + \\sqrt{2})}{2 + \\sqrt{2}}$.\nRationalize by multiplying by $\\dfrac{2 - \\sqrt{2}}{2 - \\sqrt{2}}$: denominator $= 4 - 2 = 2$; numerator $= 78(1 + \\sqrt{2})(2 - \\sqrt{2}) = 78\\sqrt{2}$.\nSo $L = \\dfrac{78\\sqrt{2}}{2} = 39\\sqrt{2}$.\n\n**Verification:** legs $39\\sqrt{2}$, hypotenuse $39\\sqrt{2}\\cdot\\sqrt{2} = 78$. Perimeter $= 2(39\\sqrt{2}) + 78 = 78 + 78\\sqrt{2}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"drops the radical\" — halves $78$ but ignores the $\\sqrt{2}$ factor.\n* Choice C: \"reads off the perimeter\" — takes the rational part $78$ as the leg without solving.\n* Choice D: \"wrong side\" — gives the hypotenuse length instead of a leg.\n\n**Test Day Takeaway:** For a 45-45-90 triangle, hypotenuse $= \\text{leg}\\cdot\\sqrt{2}$. Build the perimeter as $L(2 + \\sqrt{2})$ and rationalize to isolate $L$.",
  skills: ["special-right-triangles", "triangles"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The function $g$ is defined by $g(x) = x(x - 3)(x + 5)^2$. The value of $g(9 - w)$ is $0$, where $w$ is a constant. What is the sum of all possible values of $w$?",
  correctAnswer: "29",
  explanation: "**SAT Pattern: Polynomial Zeros via Factoring**\n\n**The correct answer is $29$.**\n\n**The Fast Way (~30s):** Roots of $g$: $0, 3, -5$. Set $9 - w \\in \\{0, 3, -5\\} \\Rightarrow w \\in \\{9, 6, 14\\}$. Sum $= 29$.\n\n**Test Day Takeaway:** Find roots; back-solve. Multiplicity doesn't create new $w$-values.",
  skills: ["polynomial-zeros", "quadratic-equations"]
}
      ]
    }
  ]
};

export default practiceTest4;
