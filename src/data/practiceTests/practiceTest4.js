// Practice Test 4 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Round-6 propagation: M1 lifted to band-3/5/7 ceilings; M1 domain rebalanced
// to 7 Algebra / 6 AdvMath / 5 PSDA / 4 Geo-Trig. M2 hardened to 0E/6M/16H
// with band-7 ceilings on most hard items and concept-fusion items added.

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
  question: "The function $f$ is defined by $f(x) = 5x - 9$. What is the value of $f(8) + 3$?",
  choices: [
    // distractor: gives f(8) alone, stopping one step early
    { id: "A", text: "$31$" },
    { id: "B", text: "$34$" },
    // distractor: subtracts 3 instead of adding (applies inverse operation)
    { id: "C", text: "$28$" },
    // distractor: computes f(8 + 3) = f(11) = 46 (applies the +3 to the input)
    { id: "D", text: "$46$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $f(8) = 5 \\cdot 8 - 9 = 31$. Then $f(8) + 3 = 31 + 3 = 34$.\n\n**The Full Solution:**\nEvaluate $f$ at $x = 8$:\n$f(8) = 5(8) - 9 = 40 - 9 = 31$\nNow add $3$:\n$f(8) + 3 = 31 + 3 = 34$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives $f(8) = 31$ but forgets the final $+3$.\n* Choice C: \"applies the inverse operation\" — subtracts $3$ instead of adding it.\n* Choice D: \"wrong base\" — applies the $+3$ to the input, computing $f(11) = 46$ instead of adding to the output.\n\n**Test Day Takeaway:** Read carefully: $f(8) + 3$ adds $3$ to the OUTPUT, while $f(8 + 3)$ adds $3$ to the INPUT. The two are very different.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A recipe uses sugar and flour in a ratio of $2$ cups of sugar to $5$ cups of flour. If the total amount of sugar and flour combined is $35$ cups, how many cups of sugar does the recipe use?",
  choices: [
    // distractor: picks the ratio number 2 directly
    { id: "A", text: "$2$" },
    // distractor: uses 2/5 of total instead of 2/7
    { id: "B", text: "$14$" },
    { id: "C", text: "$10$" },
    // distractor: solves for flour amount instead of sugar (5/7 of 35 = 25)
    { id: "D", text: "$25$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Sugar makes up $\\dfrac{2}{2 + 5} = \\dfrac{2}{7}$ of the total. So sugar $= \\dfrac{2}{7} \\cdot 35 = 10$ cups.\n\n**The Full Solution:**\nLet sugar $= 2k$ and flour $= 5k$ (so the ratio is $2 : 5$).\nTotal: $2k + 5k = 7k = 35$, so $k = 5$.\nSugar $= 2k = 2 \\cdot 5 = 10$ cups.\n\nVerification: flour $= 5 \\cdot 5 = 25$, total $= 10 + 25 = 35$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports the ratio number $2$ rather than solving.\n* Choice B: \"wrong base\" — uses $\\dfrac{2}{5}$ of the total instead of $\\dfrac{2}{7}$.\n* Choice D: \"applies the inverse operation\" — solves for flour ($\\dfrac{5}{7} \\cdot 35 = 25$) instead of sugar.\n\n**Test Day Takeaway:** When two parts are given as a ratio and the total of both parts is known, the denominator of each fraction is the SUM of the ratio parts.",
  skills: ["ratios", "word-problems"]
},
{
  id: 3,
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
  id: 4,
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
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A school library has $204$ fiction books, and the number of fiction books is $34\\%$ of the total number of books in the library. How many books, in total, are in the library?",
  choices: [
    // distractor: applies the percent forward — $204 \cdot 0.34 \approx 69$
    { id: "A", text: "$69$" },
    // distractor: divides by complement: $\\frac{204}{0.66} \approx 309$
    { id: "B", text: "$309$" },
    { id: "C", text: "$600$" },
    // distractor: divides by $0.034$ instead of $0.34$ (decimal-place slip)
    { id: "D", text: "$6{,}000$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Total $\\times 0.34 = 204$, so total $= \\frac{204}{0.34} = 600$.\n\n**The Full Solution:**\nLet $T$ be the total number of books. Then ${}0.34 \\cdot T = 204$.\nDivide both sides by $0.34$: $T = \\dfrac{204}{0.34} = 600$.\n\nVerification: $34\\%$ of $600 = 0.34 \\cdot 600 = 204$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — multiplies $204 \\cdot 0.34 \\approx 69$ instead of dividing.\n* Choice B: \"wrong base\" — divides by the complement $0.66$ (treats $204$ as the non-fiction count).\n* Choice D: \"off-by-one / decimal slip\" — divides by $0.034$ instead of $0.34$.\n\n**Test Day Takeaway:** When a percent of an unknown total is given, divide the part by the percent (as a decimal) to recover the whole.",
  skills: ["percents"]
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
  question: "The population of a colony of bacteria doubles every $3$ hours. If the colony starts with $500$ bacteria, which function $P(t)$ models the population after $t$ hours?",
  choices: [
    // distractor: uses 3t instead of t/3 — doubles every 1/3 hour
    { id: "A", text: "$P(t) = 500(2)^{3t}$" },
    { id: "B", text: "$P(t) = 500(2)^{\\frac{t}{3}}$" },
    // distractor: confuses the base and the period
    { id: "C", text: "$P(t) = 500(3)^{\\frac{t}{2}}$" },
    // distractor: writes a linear model instead of exponential
    { id: "D", text: "$P(t) = 500 + 2t$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Doubles every $3$ hours means base $2$, exponent $\\frac{t}{3}$. Initial value $500$.\n\n**The Full Solution:**\nGeneral form: $P(t) = P_0 \\cdot r^{\\frac{t}{d}}$ where $P_0 = 500$, $r = 2$ (doubles), $d = 3$ (period).\n$P(t) = 500(2)^{\\frac{t}{3}}$\nCheck: At $t = 3$, $P(3) = 500(2)^1 = 1000$ \\checkmark (doubled).\nAt $t = 6$, $P(6) = 500(2)^2 = 2000$ \\checkmark (doubled again).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses $3t$ instead of $\\frac{t}{3}$, which would double every $\\frac{1}{3}$ hour.\n* Choice C: \"wrong base\" — confuses the base and the period.\n* Choice D: \"applies the inverse operation\" — models linear growth instead of exponential.\n\n**Test Day Takeaway:** \"Doubles every $d$ units\" $\\to$ base $2$, exponent $\\frac{t}{d}$.",
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
// Distribution: 3E / 6M / 13H. Q1-3 are easy openers (CB-authentic ramp).

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "A car is traveling at a constant speed of $88$ feet per second. What is the car's speed, in miles per hour? ($1$ mile $= 5{,}280$ feet)",
  choices: [
    // distractor: forgets seconds-to-hours, multiplies by 60 instead of 3600
    { id: "A", text: "$1$" },
    { id: "B", text: "$60$" },
    // distractor: gives the answer in feet per hour without converting to miles
    { id: "C", text: "$316{,}800$" },
    // distractor: returns the conversion factor itself
    { id: "D", text: "$5{,}280$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Multi-Step Unit Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $\\dfrac{88\\text{ ft}}{1\\text{ s}} \\cdot \\dfrac{3600\\text{ s}}{1\\text{ hr}} \\cdot \\dfrac{1\\text{ mi}}{5{,}280\\text{ ft}} = \\dfrac{88 \\cdot 3600}{5{,}280} = 60$ mph.\n\n**The Full Solution:**\nConvert seconds to hours: $88$ ft/s $\\times 3600$ s/hr $= 316{,}800$ ft/hr.\nConvert feet to miles: $\\dfrac{316{,}800}{5{,}280} = 60$ mi/hr.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — multiplies by $60$ (sec→min) instead of $3600$ (sec→hr): $\\dfrac{88 \\cdot 60}{5280} \\approx 1$.\n* Choice C: \"wrong base\" — gives feet per hour without converting to miles.\n* Choice D: \"applies the inverse operation\" — returns the conversion factor as the answer.\n\n**Test Day Takeaway:** When converting compound units, chain conversion factors so unwanted units cancel.",
  skills: ["unit-conversion", "ratios"]
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
  difficulty: "easy",
  band: 2,
  question: "Which expression is equivalent to $(3x^2 + 5x) + (2x^2 - 8x)$?",
  choices: [
    { id: "A", text: "$5x^2 - 3x$" },
    // distractor: adds 5x + 8x instead of 5x - 8x
    { id: "B", text: "$5x^2 + 13x$" },
    // distractor: multiplies x^2 coefficients (3*2=6) instead of adding (3+2=5)
    { id: "C", text: "$6x^2 - 3x$" },
    // distractor: adds exponents (2+2=4) instead of leaving them as 2
    { id: "D", text: "$5x^4 - 3x$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Combining Like Terms**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Add the $x^2$ terms: $3x^2 + 2x^2 = 5x^2$. Add the $x$ terms: $5x - 8x = -3x$. Total: $5x^2 - 3x$.\n\n**The Full Solution:**\n$(3x^2 + 5x) + (2x^2 - 8x)$\n$= (3x^2 + 2x^2) + (5x - 8x)$\n$= 5x^2 + (-3x)$\n$= 5x^2 - 3x$\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — adds $5x + 8x$ instead of $5x - 8x$.\n* Choice C: \"wrong base\" — multiplies the $x^2$ coefficients ($3 \\cdot 2 = 6$) instead of adding ($3 + 2 = 5$).\n* Choice D: \"off-by-one\" — adds the exponents ($2 + 2 = 4$) instead of leaving them.\n\n**Test Day Takeaway:** When adding polynomials, combine ONLY like terms (same variable, same exponent). Coefficients add; exponents stay.",
  skills: ["polynomial-operations", "combining-like-terms"]
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
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
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
  id: 7,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Line $r$ has the equation $y = \\dfrac{2}{5}x - 3$. Line $s$ is perpendicular to line $r$ and passes through the point $(4, 1)$. Which of the following is the equation of line $s$?",
  choices: [
    // distractor: uses slope 5/2 (reciprocal without sign) — gives y = 5x/2 - 9
    { id: "A", text: "$y = \\dfrac{5}{2}x - 9$" },
    { id: "B", text: "$y = -\\dfrac{5}{2}x + 11$" },
    // distractor: keeps the original slope 2/5
    { id: "C", text: "$y = \\dfrac{2}{5}x - \\dfrac{3}{5}$" },
    // distractor: arithmetic error: -10 - 1 = -11 instead of 1 - (-10) = 11
    { id: "D", text: "$y = -\\dfrac{5}{2}x - 11$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Slope of $r$ is $\\dfrac{2}{5}$. Perpendicular slope $= -\\dfrac{5}{2}$. Through $(4, 1)$: $1 = -\\dfrac{5}{2}(4) + b = -10 + b$, so $b = 11$. Equation: $y = -\\dfrac{5}{2}x + 11$.\n\n**The Full Solution:**\nSlope of $s$: $m_s = -\\dfrac{1}{\\frac{2}{5}} = -\\dfrac{5}{2}$ (negative reciprocal).\nUsing point $(4, 1)$: $1 = -\\dfrac{5}{2}(4) + b$.\n$1 = -10 + b$.\n$b = 11$.\nEquation: $y = -\\dfrac{5}{2}x + 11$.\nCheck: $-\\dfrac{5}{2} \\cdot \\dfrac{2}{5} = -1$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses slope $\\dfrac{5}{2}$ (reciprocal without sign change).\n* Choice C: \"wrong base\" — keeps the original slope $\\dfrac{2}{5}$ (parallel, not perpendicular).\n* Choice D: \"off-by-one\" — arithmetic error: computes $-10 - 1 = -11$ instead of $1 - (-10) = 11$.\n\n**Test Day Takeaway:** Perpendicular slope = negative reciprocal. Then use the point to find $b$.",
  skills: ["slope", "coordinate-geometry", "linear-functions"]
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
  difficulty: "hard",
  band: 7,
  question: "The positive number $a$ is $200\\%$ of the sum of the positive numbers $b$ and $c$, and $b$ is $25\\%$ of $c$. What percent of $b$ is $a$?",
  choices: [
    // distractor: adds the percents: 200 + 25 = 225
    { id: "A", text: "$225\\%$" },
    // distractor: stops at a (= 250)
    { id: "B", text: "$250\\%$" },
    { id: "C", text: "$1000\\%$" },
    // distractor: divides 200 by 0.25 = 800
    { id: "D", text: "$800\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Set $c = 100$. Then $b = 25\\% \\cdot 100 = 25$. Sum $b + c = 125$. So $a = 2.0 \\cdot 125 = 250$. Percent of $b$ that $a$ is: $\\dfrac{250}{25} \\cdot 100 = 1000\\%$.\n\n**The Full Solution:**\nLet $c = 100$ (any positive choice works since percents are scale-invariant).\nThen $b = 0.25 \\cdot 100 = 25$.\nSum: $b + c = 25 + 100 = 125$.\n$a = 2.00 \\cdot 125 = 250$.\nPercent of $b$ that $a$ is: $\\dfrac{a}{b} \\cdot 100\\% = \\dfrac{250}{25} \\cdot 100\\% = 10 \\cdot 100\\% = 1000\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — adds the two percents ($200 + 25 = 225$).\n* Choice B: \"stops one step early\" — computes $a = 250$ and reports it as the percent.\n* Choice D: \"wrong base\" — divides $200$ by $0.25$ ignoring the sum structure.\n\n**Test Day Takeaway:** When two percents stack, pick a clean numerical value (e.g., $c = 100$) and compute through. \"Percent of $b$\" means divide by $b$.",
  skills: ["percents"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $2x^2 - 18 = 0$, what is a positive value of $x$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~10s):** $2x^2 = 18 \\Rightarrow x^2 = 9 \\Rightarrow x = 3$ (positive root).\n\n**The Full Solution:**\n$2x^2 - 18 = 0$.\n$2x^2 = 18$.\n$x^2 = 9$.\n$x = \\pm 3$.\nPositive value: $x = 3$.\n\n**Verification:** $2(3)^2 - 18 = 2(9) - 18 = 18 - 18 = 0$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Dividing $18$ by $2$ and forgetting to take the square root, answering $9$.\n* Answering $-3$ (the negative root).\n\n**Test Day Takeaway:** Isolate the $x^2$ term, then take the positive square root if positive value is requested.",
  skills: ["solving-equations", "quadratic-equations"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A survey of $360$ employees asked whether they prefer working from home or the office, categorized by department.\n\n| | Home | Office | Total |\n|---|---|---|---|\n| Marketing | $48$ | $32$ | $80$ |\n| Engineering | $96$ | $24$ | $120$ |\n| Sales | $60$ | $100$ | $160$ |\n| Total | $204$ | $156$ | $360$ |\n\nA randomly selected employee prefers working from home. What is the probability, rounded to the nearest hundredth, that this employee is in Engineering or Marketing?",
  choices: [
    // distractor: uses grand total 360 (joint probability)
    { id: "A", text: "$0.40$" },
    { id: "B", text: "$0.71$" },
    // distractor: forgets Marketing — uses 96/204 only
    { id: "C", text: "$0.47$" },
    // distractor: counts Eng + Marketing totals (200) over 360 = 0.56 (joint)
    { id: "D", text: "$0.56$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Given prefers Home: total $= 204$. Engineering Home + Marketing Home $= 96 + 48 = 144$. Probability $= \\dfrac{144}{204} \\approx 0.706 \\approx 0.71$.\n\n**The Full Solution:**\nWe need $P(\\text{Engineering or Marketing} \\mid \\text{Home})$.\nThe condition restricts us to the Home column, total $= 204$.\nFavorable: $96$ (Engineering Home) $+ 48$ (Marketing Home) $= 144$.\n$P = \\dfrac{144}{204} = \\dfrac{12}{17} \\approx 0.7059 \\approx 0.71$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses grand total $360$ as the denominator (joint probability, not conditional).\n* Choice C: \"stops one step early\" — uses only Engineering ($\\frac{96}{204} \\approx 0.47$), forgetting Marketing.\n* Choice D: \"applies the inverse operation\" — adds Engineering and Marketing totals ($120 + 80 = 200$) over $360$ instead of the Home column total.\n\n**Test Day Takeaway:** \"Given X\" means the total for X becomes your denominator. Sum the favorable outcomes within that condition.",
  skills: ["probability", "two-way-tables"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A rental company charges $\\$45$ per day plus $\\$0.30$ per mile driven. A customer's bill for a one-day rental was $\\$117$. If the same customer instead drove $30$ fewer miles on a two-day rental at the same daily and per-mile rates, what would the total bill be?",
  choices: [
    // distractor: ignores the extra day fee (45) — adds only mile cost change
    { id: "A", text: "$\\$108$" },
    { id: "B", text: "$\\$153$" },
    // distractor: misapplies one of the rate changes
    { id: "C", text: "$\\$162$" },
    // distractor: doubles the original total
    { id: "D", text: "$\\$234$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** Original miles: $0.30m = 117 - 45 = 72 \\Rightarrow m = 240$. New miles: $240 - 30 = 210$. New cost: $2 \\cdot 45 + 0.30 \\cdot 210 = 90 + 63 = \\$153$.\n\n**The Full Solution:**\nFrom the first trip: $45 + 0.30m = 117 \\Rightarrow 0.30m = 72 \\Rightarrow m = 240$ miles.\nNew rental: $2$ days at $\\$45$ each plus ${}0.30 \\cdot (240 - 30) = 0.30 \\cdot 210 = \\$63$ in mile charges.\nTotal: $2 \\cdot 45 + 63 = 90 + 63 = \\$153$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — uses one day instead of two: $45 + 0.30 \\cdot 210 = \\$108$.\n* Choice C: \"off-by-one\" — uses $240$ miles instead of $210$: $2 \\cdot 45 + 0.30 \\cdot 240 = \\$117$ wrong, gets $162$ via different slip.\n* Choice D: \"applies the inverse operation\" — doubles the original total, treating the trip as $2 \\cdot 117$.\n\n**Test Day Takeaway:** Read every change carefully — the new bill changes the day fee AND the mile count, both at the same per-unit rates.",
  skills: ["word-problems", "solving-equations", "linear-functions"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The number of bacteria in a culture is modeled by $N(t) = 500(1.06)^{\\frac{t}{2}}$, where $t$ is the number of days. By what percent does the number of bacteria increase every $2$ days?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~15s):** Every $2$ days, the exponent increases by $1$, so $N$ multiplies by $1.06$. That is a $6\\%$ increase.\n\n**The Full Solution:**\nWhen $t$ increases by $2$:\n$N(t+2) = 500(1.06)^{\\frac{t+2}{2}} = 500(1.06)^{\\frac{t}{2}} \\cdot 1.06 = 1.06 \\cdot N(t)$.\nEvery $2$ days, the population is multiplied by $1.06$.\nPercent increase $= 1.06 - 1 = 0.06 = 6\\%$.\n\n**Verification:** At $t = 0$: $N = 500$. At $t = 2$: $N = 500(1.06) = 530$.\nIncrease: $\\dfrac{530 - 500}{500} = \\dfrac{30}{500} = 0.06 = 6\\%$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Answering $106$ or $1.06$ (the growth factor, not the percent increase).\n* Finding the daily rate instead of the $2$-day rate.\n\n**Test Day Takeaway:** In $a \\cdot b^{\\frac{t}{d}}$, every $d$ time units the value multiplies by $b$. Subtract $1$ to get the percent increase.",
  skills: ["exponential-functions", "percents"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A statistician finds that the mean of a list of $9$ numbers is $24$. When a tenth number is added to the list, the mean of the new list of $10$ numbers becomes $25$. What is the tenth number?",
  choices: [
    // distractor: just gives the new mean as the answer
    { id: "A", text: "$25$" },
    { id: "B", text: "$34$" },
    // distractor: subtracts the means: 25 - 24 = 1, then off-by-base
    { id: "C", text: "$1$" },
    // distractor: uses sum_new = 24 \cdot 10 = 240 then subtracts old mean
    { id: "D", text: "$216$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Mean from List**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Old sum $= 9 \\cdot 24 = 216$. New sum $= 10 \\cdot 25 = 250$. Tenth number $= 250 - 216 = 34$.\n\n**The Full Solution:**\nThe sum of the original $9$ numbers is $9 \\cdot 24 = 216$.\nWhen a tenth number $x$ is added, the new sum is $216 + x$.\nThe new mean is $\\dfrac{216 + x}{10} = 25$, so $216 + x = 250$, giving $x = 34$.\n\nVerification: the new sum $216 + 34 = 250$ divided by $10$ gives $25$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the new mean as the answer rather than computing the missing value.\n* Choice C: \"applies the inverse operation\" — subtracts the means ($25 - 24 = 1$) instead of using sums.\n* Choice D: \"wrong base\" — uses old mean $\\cdot$ new count $= 24 \\cdot 10 = 240$ instead of new mean $\\cdot$ new count.\n\n**Test Day Takeaway:** Convert means to sums (mean $\\cdot$ count). Differences in sums recover individual values.",
  skills: ["statistics", "mean"]
},
{
  id: 15,
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
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $\\dfrac{c}{4}x - 3 = 3x + 5$ has no solution. What is the value of $c$?",
  choices: [
    // distractor: divides 12 by 4 = 3
    { id: "A", text: "$3$" },
    // distractor: confuses denominator with the answer
    { id: "B", text: "$4$" },
    { id: "C", text: "$12$" },
    // distractor: computes 4 \cdot 4 = 16
    { id: "D", text: "$16$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Rearrange: $\\left(\\dfrac{c}{4} - 3\\right)x = 8$. For no solution, the coefficient of $x$ is $0$ but the right side is nonzero. So $\\dfrac{c}{4} = 3$, giving $c = 12$.\n\n**The Full Solution:**\n$\\dfrac{c}{4}x - 3 = 3x + 5$.\n$\\dfrac{c}{4}x - 3x = 8$.\n$\\left(\\dfrac{c - 12}{4}\\right)x = 8$.\nFor no solution: $\\dfrac{c-12}{4} = 0$ and $8 \\neq 0$.\n$c = 12$.\nWith $c = 12$: $3x - 3 = 3x + 5$ $\\to$ $-3 = 5$. Contradiction. No solution \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — divides $12$ by $4$.\n* Choice B: \"wrong base\" — confuses the denominator with the answer.\n* Choice D: \"off-by-one\" — computes $4 \\cdot 4 = 16$ via a wrong path.\n\n**Test Day Takeaway:** No solution means the variable terms cancel but the constants don't match. Set the $x$ coefficient to zero and verify the constants differ.",
  skills: ["solving-equations", "linear-functions"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A data set of $12$ values is listed in order:\n\n$5, 7, 7, 9, 10, 12, 14, 15, 15, 18, 20, 24$\n\nEvery value is multiplied by $3$. How does the new data set compare to the original?",
  choices: [
    { id: "A", text: "The mean is tripled and the range is tripled." },
    // distractor: confuses scaling with shifting (range stays under shift only)
    { id: "B", text: "The mean is tripled and the range is unchanged." },
    // distractor: thinks mean doesn't change under scaling
    { id: "C", text: "The mean is unchanged and the range is tripled." },
    // distractor: confuses multiplying with adding 3
    { id: "D", text: "The mean increases by $3$ and the range increases by $3$." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Scaling a Data Set by a Constant**\n\n**Choice A is correct.**\n\n**The Full Solution:**\nOriginal: Sum $= 5+7+7+9+10+12+14+15+15+18+20+24 = 156$. Mean $= \\dfrac{156}{12} = 13$. Range $= 24 - 5 = 19$.\n\nAfter multiplying every value by $3$: Mean $= 3 \\times 13 = 39$. Range $= 3(24) - 3(5) = 72 - 15 = 57 = 3 \\times 19$.\n\nBoth the mean and the range are tripled.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — confuses scaling with shifting (adding a constant doesn't change the range, but multiplying does).\n* Choice C: \"stops one step early\" — thinks the mean doesn't change when every value is multiplied.\n* Choice D: \"applies the inverse operation\" — confuses multiplying by $3$ with adding $3$.\n\n**Test Day Takeaway:** Multiplying every value by $k$: mean is multiplied by $k$, standard deviation and range are also multiplied by $|k|$. This is different from adding a constant, which only shifts the mean.",
  skills: ["statistics"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A circle in the $xy$-plane has the equation $x^2 + y^2 - 14x + 4y + 28 = 0$. What is the radius of the circle?",
  choices: [
    // distractor: miscomputes -28 + 49 + 4 as 9, takes sqrt(9) = 3
    { id: "A", text: "$3$" },
    { id: "B", text: "$5$" },
    // distractor: completes only one square term
    { id: "C", text: "$\\sqrt{21}$" },
    // distractor: gives r^2 = 25 instead of r = 5
    { id: "D", text: "$25$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Complete the Square — Non-Square Radius**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Complete the square:\n$(x^2 - 14x + 49) + (y^2 + 4y + 4) = -28 + 49 + 4$\n$(x - 7)^2 + (y + 2)^2 = 25$.\nRadius $= \\sqrt{25} = 5$.\n\n**The Full Solution:**\nGroup: $(x^2 - 14x) + (y^2 + 4y) = -28$.\nComplete for $x$: half of $-14$ is $-7$, $(-7)^2 = 49$.\nComplete for $y$: half of $4$ is $2$, $2^2 = 4$.\n$(x-7)^2 + (y+2)^2 = -28 + 49 + 4 = 25$.\nRadius $= \\sqrt{25} = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — miscomputes $-28 + 49 + 4$ as $9$ and takes $\\sqrt{9} = 3$.\n* Choice C: \"stops one step early\" — completes only one square term.\n* Choice D: \"applies the inverse operation\" — gives $r^2 = 25$ instead of $r = 5$.\n\n**Test Day Takeaway:** Move the constant to the right, complete the square for $x$ and $y$, then the right side equals $r^2$.",
  skills: ["circle-equations", "solving-equations"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "An aquarium holds $3{,}600$ fluid ounces of fresh water and a tank in the same room holds $5{,}120$ fluid ounces. A maintenance schedule allows the tank to lose $1$ gallon every $4$ days through evaporation, where $1$ gallon $= 128$ fluid ounces. After how many days does the tank's volume first equal the aquarium's current volume?",
  choices: [
    // distractor: divides total ounces by 128 without subtracting first
    { id: "A", text: "$40$" },
    { id: "B", text: "$47.5$" },
    // distractor: divides 5120 by 128 = 40 days (ignores the aquarium volume)
    { id: "C", text: "$10$" },
    // distractor: forgets the per-4-day rate (treats as 1 gallon per day)
    { id: "D", text: "$11.875$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** Difference: $5{,}120 - 3{,}600 = 1{,}520$ ounces. In gallons: $\\frac{1{,}520}{128} = 11.875$. At $1$ gallon per $4$ days: $11.875 \\cdot 4 = 47.5$ days.\n\n**The Full Solution:**\nThe tank must lose $5{,}120 - 3{,}600 = 1{,}520$ fluid ounces.\nConvert ounces to gallons: $\\dfrac{1{,}520}{128} = 11.875$ gallons.\nAt a rate of $1$ gallon every $4$ days, the time required is $11.875 \\cdot 4 = 47.5$ days.\n\nVerification: in $47.5$ days the tank loses $\\dfrac{47.5}{4} = 11.875$ gallons $= 11.875 \\cdot 128 = 1{,}520$ ounces; new volume $= 5{,}120 - 1{,}520 = 3{,}600$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — divides by $128$ but skips the difference step.\n* Choice C: \"stops one step early\" — divides $5{,}120$ by $128 \\cdot 4 = 512$, treating per-4-day rate without subtracting the aquarium volume.\n* Choice D: \"applies the inverse operation\" — gets the gallons but forgets the per-4-day rate.\n\n**Test Day Takeaway:** For multi-step rate problems, identify (a) what changes, (b) the conversion factor, and (c) the time-rate. Multiply or divide once for each.",
  skills: ["word-problems", "ratios"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For what positive value of $k$ does the equation $9x^2 + kx + 4 = 0$ have exactly one real solution?",
  choices: [
    // distractor: takes sqrt of 36 = 6 (wrong intermediate)
    { id: "A", text: "$6$" },
    { id: "B", text: "$12$" },
    // distractor: stops at 4ac = 4 \cdot 9 = 36 (forgets c)
    { id: "C", text: "$36$" },
    // distractor: gives k^2 = 144 instead of k = 12
    { id: "D", text: "$144$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** One real solution means discriminant $= 0$: $k^2 - 4(9)(4) = 0 \\Rightarrow k^2 = 144 \\Rightarrow k = 12$ (positive).\n\n**The Full Solution:**\nFor $9x^2 + kx + 4 = 0$: $a = 9$, $b = k$, $c = 4$.\nDiscriminant $= k^2 - 4(9)(4) = k^2 - 144$.\nExactly one solution: $k^2 - 144 = 0$, so $k^2 = 144$, giving $k = \\pm 12$. The positive value is $12$.\nVerification: $9x^2 + 12x + 4 = (3x + 2)^2 = 0 \\Rightarrow x = -\\dfrac{2}{3}$ (one repeated root) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — takes $\\sqrt{36} = 6$ from a wrong intermediate.\n* Choice C: \"stops one step early\" — uses $4 \\cdot 9 = 36$ without multiplying by $c$.\n* Choice D: \"applies the inverse operation\" — gives $k^2 = 144$ without taking the square root.\n\n**Test Day Takeaway:** One solution $\\Leftrightarrow$ discriminant $= 0$. Solve $b^2 - 4ac = 0$ for the unknown.",
  skills: ["discriminant", "quadratic-equations"]
}
      ]
    }
  ]
};

export default practiceTest4;
