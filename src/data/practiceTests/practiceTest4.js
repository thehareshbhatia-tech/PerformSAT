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
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Almonds are $4$ of the $3+4=7$ ratio parts, so they make up $\\frac{4}{7}$ of the total: $\\frac{4}{7}\\cdot 42 = 24$ cups.\n\n**The Full Solution:**\nStep 1: Write the parts as $3k$ raisins and $4k$ almonds, so the ratio stays $3:4$.\nStep 2: The combined total is $3k+4k=7k=42$, so $k=6$.\nStep 3: Almonds $=4k=4\\cdot 6=24$ cups.\nCheck: raisins $=3\\cdot 6=18$, and $18+24=42$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): reports the raw ratio number for almonds instead of solving.\n* Choice B ($18$): solves for raisins, $\\frac{3}{7}\\cdot 42$, not almonds.\n* Choice D ($28$): uses the wrong fraction $\\frac{2}{3}$ of $42$ instead of $\\frac{4}{7}$.\n\n**Test Day Takeaway:** When a ratio gives both parts and you know the total of both, each part's fraction has the SUM of the ratio numbers as its denominator.",
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
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $g(t)=250+18t$, the coefficient of $t$ is the weekly rate of change: $18$ items added each week.\n\n**The Full Solution:**\nStep 1: The model has the form $g(t)=b+mt$ with intercept $b=250$ and slope $m=18$.\nStep 2: The slope is the change per one-unit increase in $t$. Since $t$ is in weeks, the number of items rises by $18$ each week.\n\n**Why the wrong answers are tempting:**\n* Choice A (increase of $250$): that is the starting count at $t=0$, not the weekly change.\n* Choice C (increase of $268$): adds the intercept and slope, $250+18$, which mixes two unrelated quantities.\n* Choice D (increase of $\\frac{1}{18}$): inverts the rate.\n\n**Test Day Takeaway:** In $y=b+mx$, the coefficient of the variable is always the rate of change per unit; the constant is the starting value.",
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
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $26\\%$ of the total is $312$, so total $=\\frac{312}{0.26}=1{,}200$.\n\n**The Full Solution:**\nStep 1: Let $T$ be the total number of plants. Then $0.26\\,T=312$.\nStep 2: Divide both sides by $0.26$: $T=\\frac{312}{0.26}=1{,}200$.\nCheck: $0.26\\cdot 1{,}200=312$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($81$): multiplies $312\\cdot 0.26$ instead of dividing.\n* Choice B ($422$): divides by the complement $0.74$, treating $312$ as the non-orchid count.\n* Choice D ($12{,}000$): divides by $0.026$, a decimal-place slip.\n\n**Test Day Takeaway:** When you know a percent of an unknown whole, divide the part by the percent written as a decimal to recover the whole.",
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
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $f(6)=7\\cdot 6-4=38$, then $f(6)+5=38+5=43$.\n\n**The Full Solution:**\nStep 1: Evaluate the function at $x=6$: $f(6)=7(6)-4=42-4=38$.\nStep 2: Add $5$ to that output: $f(6)+5=38+5=43$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($38$): stops at $f(6)$ and forgets the final $+5$.\n* Choice C ($33$): subtracts $5$ instead of adding it.\n* Choice D ($73$): adds $5$ to the input, computing $f(11)$ instead of adding to the output.\n\n**Test Day Takeaway:** $f(6)+5$ adds $5$ to the OUTPUT; $f(6+5)$ adds $5$ to the INPUT. Read which side the shift is on.",
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
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Adding $5$ notebooks adds $5\\cdot\\$4=\\$20$ and leaves the one shipping fee unchanged: new total $=\\$31+\\$20=\\$51$.\n\n**The Full Solution:**\nStep 1: The cost model is $4n+7=31$, so $4n=24$ and $n=6$.\nStep 2: For $n+5=11$ notebooks: total $=4(11)+7=44+7=\\$51$.\nFaster: you never need $n$ — five more notebooks only add $5\\cdot\\$4=\\$20$ to the rate-times-quantity piece, so $\\$31+\\$20=\\$51$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$36$): adds the count $5$ as dollars instead of $5\\cdot\\$4=\\$20$.\n* Choice B ($\\$66$): treats the $\\$7$ fee as the per-notebook price for the new books.\n* Choice D ($\\$30$): multiplies $n=6$ by $5$ and ignores the rest of the cost.\n\n**Test Day Takeaway:** Linear cost $=$ (rate $\\times$ quantity) $+$ fixed fee. Adding items changes only the rate-times-quantity piece; the fixed fee stays put.",
  skills: ["word-problems", "solving-equations"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "In a right triangle, one acute angle measures $32°$. What is the measure, in degrees, of the other acute angle?",
  correctAnswer: "58",
  explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**The correct answer is $58$.**\n\n**The Fast Way (~5s):** The two acute angles of a right triangle are complementary, so the other one is $90^\\circ-32^\\circ=58^\\circ$.\n\n**The Full Solution:**\nStep 1: The angles of any triangle sum to $180^\\circ$, and a right triangle has one $90^\\circ$ angle.\nStep 2: $90^\\circ+32^\\circ+x=180^\\circ$, so $x=180^\\circ-90^\\circ-32^\\circ=58^\\circ$.\nCheck: $90+32+58=180$. $\\checkmark$\n\n**Common Mistakes:** Writing $180-32=148$ and forgetting the right angle; confusing complementary ($90^\\circ$) with supplementary ($180^\\circ$).\n\n**Test Day Takeaway:** In a right triangle, the two acute angles always add to $90^\\circ$.",
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
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The margin of error builds a plausible interval for the whole population: $57\\%\\pm 4\\%=[53\\%,\\,61\\%]$ of all voters.\n\n**The Full Solution:**\nStep 1: A margin of error means the true population proportion is plausibly within $4$ percentage points of the sample's $57\\%$.\nStep 2: That gives the interval $53\\%$ to $61\\%$ as a plausible range for the percentage of all voters who support the policy.\n\n**Why the wrong answers are tempting:**\n* Choice A: claims an exact population value — a sample statistic is never exact.\n* Choice B: applies the interval to the sampled voters, but the $57\\%$ for the sample is already known exactly.\n* Choice D: treats the margin of error as a guarantee about a single future sample.\n\n**Test Day Takeaway:** Margin of error gives a plausible range for the POPULATION parameter, not for the sample statistic you already measured.",
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
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Substitute $x=13$: $y=3.8(13)+22=49.4+22=71.4$, so $71.4\\,^\\circ\\text{F}$.\n\n**The Full Solution:**\nStep 1: Use the model $y=3.8x+22$ with $x=13$.\nStep 2: $3.8(13)=49.4$.\nStep 3: $y=49.4+22=71.4\\,^\\circ\\text{F}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($65.2\\,^\\circ\\text{F}$): rounding error in the multiplication.\n* Choice C ($49.4\\,^\\circ\\text{F}$): computes $3.8\\times 13$ but forgets to add the intercept $22$.\n* Choice D ($60.0\\,^\\circ\\text{F}$): uses $x=10$, giving $3.8(10)+22=60$.\n\n**Test Day Takeaway:** For a prediction, substitute the given $x$ into the full model — never drop the intercept.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 9,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A system of equations is given:\n\n$3x + 2y = 19$\n$5x - 2y = 13$\n\nWhat is the value of $x$?",
  correctAnswer: "4",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~15s):** The $y$-terms are opposites ($+2y$ and $-2y$), so add the equations: $8x=32$, giving $x=4$.\n\n**The Full Solution:**\nStep 1: Stack the equations: $3x+2y=19$ and $5x-2y=13$.\nStep 2: Add them; the $y$-terms cancel: $(3x+5x)+(2y-2y)=19+13$, so $8x=32$.\nStep 3: $x=4$.\nCheck: from the first equation, $12+2y=19$ gives $y=3.5$; then $5(4)-2(3.5)=20-7=13$. $\\checkmark$\n\n**Common Mistakes:** Subtracting instead of adding, which fails to cancel $y$; solving for $y$ when the question asks for $x$.\n\n**Test Day Takeaway:** When one variable's coefficients are opposites, add the equations to eliminate it in a single step.",
  skills: ["systems-of-equations"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $\\dfrac{x + 3}{4} - \\dfrac{x - 1}{6} = 2$, what is the value of $x$?",
  correctAnswer: "13",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~30s):** Multiply through by the LCD $12$: $3(x+3)-2(x-1)=24 \\Rightarrow x+11=24 \\Rightarrow x=13$.\n\n**The Full Solution:**\nStep 1: Multiply every term of $\\frac{x+3}{4}-\\frac{x-1}{6}=2$ by $12$: $3(x+3)-2(x-1)=24$.\nStep 2: Distribute carefully, watching the second sign: $3x+9-2x+2=24$.\nStep 3: Combine: $x+11=24$, so $x=13$.\nCheck: $\\frac{16}{4}-\\frac{12}{6}=4-2=2$. $\\checkmark$\n\n**Common Mistakes:** Dropping the negative on the second numerator, leaving $-2x-2$ instead of $-2x+2$; multiplying by only one denominator instead of the LCD $12$.\n\n**Test Day Takeaway:** Clear all fractions first by multiplying every term by the least common denominator.",
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
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The perpendicular slope is $\\frac{5}{2}$. Plug $(4,1)$ into $y=\\frac{5}{2}x+b$: $1=10+b$, so $b=-9$, giving the $y$-intercept $(0,-9)$.\n\n**The Full Solution:**\nStep 1: The given line $y=-\\frac{2}{5}x+7$ has slope $-\\frac{2}{5}$.\nStep 2: Perpendicular slopes are negative reciprocals, so the new slope is $\\frac{5}{2}$.\nStep 3: Use point-slope with $(4,1)$: $y-1=\\frac{5}{2}(x-4)$, so $y=\\frac{5}{2}x-10+1=\\frac{5}{2}x-9$.\nStep 4: The $y$-intercept is $(0,-9)$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($(0,9)$): keeps $+10$ instead of $-10$ when distributing $\\frac{5}{2}(-4)$.\n* Choice C ($(0,\\frac{13}{5})$): reuses the original slope $-\\frac{2}{5}$ instead of the perpendicular slope.\n* Choice D ($(0,-11)$): arithmetic slip, computing $1-10$ as $-11$.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals: $m_1\\cdot m_2=-1$. Flip and change the sign.",
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
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"Of people who prefer swimming\" sets the denominator to the swimming total, $65$; those under $30$ are $30$. Proportion $=\\frac{30}{65}$.\n\n**The Full Solution:**\nStep 1: The condition is \"prefers swimming,\" so the group size is the Swimming column total: $30+35=65$.\nStep 2: Within that group, the under-$30$ count is $30$.\nStep 3: The proportion is $\\frac{30}{65}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{30}{100}$): uses the under-$30$ row total as the base — the wrong condition direction.\n* Choice C ($\\frac{35}{65}$): gives the proportion of swimmers who are $30$ and over.\n* Choice D ($\\frac{30}{200}$): uses the grand total $200$, a joint proportion rather than a conditional one.\n\n**Test Day Takeaway:** In a conditional proportion, the denominator is the total of the GIVEN group, not the grand total.",
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
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (4)^2 (9) = \\pi \\cdot 16 \\cdot 9 = 144\\pi$.\n\n**The Full Solution:**\nStep 1: The volume of a right circular cylinder is $V = \\pi r^2 h$.\nStep 2: Substitute $r = 4$ and $h = 9$: $V = \\pi (4)^2 (9)$.\nStep 3: Evaluate: $\\pi \\cdot 16 \\cdot 9 = 144\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($72\\pi$): uses the lateral surface area $2\\pi r h = 2\\pi(4)(9) = 72\\pi$ instead of volume.\n* Choice C ($36\\pi$): uses $r$ instead of $r^2$, getting $\\pi(4)(9) = 36\\pi$.\n* Choice D ($169\\pi$): squares the sum $(4 + 9)^2 = 169$ instead of squaring $r$ alone.\n\n**Test Day Takeaway:** Cylinder volume is $\\pi r^2 h$. Square the radius only — never the height, never the sum.",
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
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"Triples every $4$ days\" means base $3$ with exponent $\\frac{t}{4}$; the initial value $90$ stays out front. That is $A(t) = 90(3)^{\\frac{t}{4}}$.\n\n**The Full Solution:**\nStep 1: The general growth form is $A(t) = A_0 \\cdot r^{\\frac{t}{d}}$, where $A_0$ is the start value, $r$ is the multiplier, and $d$ is how long one multiply takes.\nStep 2: Here $A_0 = 90$, $r = 3$ (triples), $d = 4$ (every $4$ days), so $A(t) = 90(3)^{\\frac{t}{4}}$.\nStep 3: Check $t = 4$: $A(4) = 90(3)^1 = 270$ $\\checkmark$ (tripled). Check $t = 8$: $A(8) = 90(3)^2 = 810$ $\\checkmark$ (tripled again).\n\n**Why the wrong answers are tempting:**\n* Choice A ($90(3)^{4t}$): uses $4t$ instead of $\\frac{t}{4}$, which would triple every $\\frac{1}{4}$ day.\n* Choice C ($90(4)^{\\frac{t}{3}}$): swaps the multiplier and the period — base should be $3$, period $4$.\n* Choice D ($90 + 3t$): models linear growth (add $3$) instead of multiplying by $3$.\n\n**Test Day Takeaway:** \"Multiplies by $r$ every $d$ units\" $\\Rightarrow$ base $r$, exponent $\\frac{t}{d}$.",
  skills: ["exponential-functions"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The expression $\\dfrac{6^5 \\cdot 3^4}{2^5 \\cdot 9^3}$ can be written as $3^a$ for some integer $a$. What is the value of $a$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~30s):** Rewrite every base with primes $2$ and $3$: $6^5 = 2^5 \\cdot 3^5$ and $9^3 = 3^6$. The $2^5$ cancels top and bottom, leaving $\\frac{3^{5+4}}{3^6} = 3^{9-6} = 3^3$, so $a = 3$.\n\n**The Full Solution:**\nStep 1: Convert composite bases to primes. $6^5 = (2 \\cdot 3)^5 = 2^5 \\cdot 3^5$ and $9^3 = (3^2)^3 = 3^6$.\nStep 2: Substitute into the fraction: $\\dfrac{2^5 \\cdot 3^5 \\cdot 3^4}{2^5 \\cdot 3^6} = \\dfrac{2^5 \\cdot 3^9}{2^5 \\cdot 3^6}$.\nStep 3: Cancel $2^5$ and subtract exponents on $3$: $3^{9-6} = 3^3$. So $a = 3$.\n\n**Common Mistakes:** Forgetting to split $6^5$ into $2^5 \\cdot 3^5$ (which leaves the $2$s uncancelled); or mis-adding the numerator exponents — it is $5 + 4 = 9$, then $9 - 6 = 3$.\n\n**Test Day Takeaway:** Break every base down to prime factors, then add and subtract exponents on each prime separately.",
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
  explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** No real solutions means the discriminant is negative: $b^2 - 4(7)(28) < 0 \\Rightarrow b^2 < 784 \\Rightarrow |b| < 28$. The greatest integer below $28$ is $27$.\n\n**The Full Solution:**\nStep 1: For $7x^2 - bx + 28 = 0$, the discriminant is $(-b)^2 - 4ac = b^2 - 4(7)(28) = b^2 - 784$.\nStep 2: No real solutions requires $b^2 - 784 < 0$, so $b^2 < 784$ and $|b| < 28$.\nStep 3: The largest integer satisfying $|b| < 28$ is $b = 27$. Check: at $b = 27$ the discriminant is $729 - 784 = -55 < 0$ $\\checkmark$. At $b = 28$ it equals $0$, giving one real solution — not allowed.\n\n**Why the wrong answers are tempting:**\n* Choice A ($28$): treats the inequality as $\\le$, but $b = 28$ makes the discriminant $0$ (one solution, not zero).\n* Choice C ($784$): reports $b^2$ instead of $b$.\n* Choice D ($112$): reports $4ac \\div 7 = 112$ rather than solving for $b$.\n\n**Test Day Takeaway:** No real solutions $\\Leftrightarrow$ discriminant $< 0$. The strict inequality excludes the boundary, so the largest integer is one below the cutoff.",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the line $y = 2x + 3$ intersects the parabola $y = x^2 - 3x - 21$ at two points. What is the $x$-coordinate of the intersection point with the greater $x$-value?",
  correctAnswer: "8",
  explanation: "**SAT Pattern: Quadratic-Linear System**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~30s):** Set the expressions equal: $2x + 3 = x^2 - 3x - 21$. Rearrange to $x^2 - 5x - 24 = 0$, which factors as $(x - 8)(x + 3) = 0$. The roots are $x = 8$ and $x = -3$; the greater is $8$.\n\n**The Full Solution:**\nStep 1: At an intersection the $y$-values match, so $2x + 3 = x^2 - 3x - 21$.\nStep 2: Move everything to one side: $0 = x^2 - 3x - 21 - 2x - 3 = x^2 - 5x - 24$.\nStep 3: Factor: $(x - 8)(x + 3) = 0$, so $x = 8$ or $x = -3$.\nStep 4: The question asks for the greater $x$-value, which is $8$. Check at $x = 8$: line gives $2(8)+3 = 19$ and parabola gives $64 - 24 - 21 = 19$ $\\checkmark$.\n\n**Common Mistakes:** Picking $x = -3$ (the smaller root) instead of $8$; or dropping a sign when subtracting the line, which corrupts the quadratic.\n\n**Test Day Takeaway:** To find where a line meets a parabola, set the two expressions equal, rearrange to standard form, factor, then read off the requested root.",
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
  explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $r^2$ is the squared distance from center to the given point: $r^2 = (7-3)^2 + (1-(-2))^2 = 16 + 9 = 25$. So $(x-3)^2 + (y+2)^2 = 25$.\n\n**The Full Solution:**\nStep 1: Standard form is $(x-h)^2 + (y-k)^2 = r^2$ with center $(h, k)$. Center $(3, -2)$ gives $(x-3)^2 + (y+2)^2$.\nStep 2: The radius is the distance from the center to the point on the circle: $r = \\sqrt{(7-3)^2 + (1-(-2))^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$.\nStep 3: So $r^2 = 25$, giving $(x-3)^2 + (y+2)^2 = 25$.\n\n**Why the wrong answers are tempting:**\n* Choice A: keeps $r = 5$ but writes $r^2 = 5$ — the equation needs the square, $25$.\n* Choice C: flips the center signs to $(x+3)^2 + (y-2)^2$, which sets the center at $(-3, 2)$.\n* Choice D: computes $\\sqrt{16} + \\sqrt{9} = 7$ instead of $\\sqrt{16 + 9}$.\n\n**Test Day Takeaway:** The right side is $r^2$, found from the distance formula squared: $r^2 = (\\Delta x)^2 + (\\Delta y)^2$.",
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
  explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Side $AB$ lies on the $x$-axis with length $10$, so the height is just the $y$-coordinate of $C$, which is $7$. Area $= \\frac{1}{2}(10)(7) = 35$.\n\n**The Full Solution:**\nStep 1: $A(0,0)$ and $B(10,0)$ both sit on the $x$-axis, so use $AB$ as the base: $b = 10 - 0 = 10$.\nStep 2: The height is the perpendicular distance from $C$ to the $x$-axis, which is the $y$-coordinate of $C$: $h = 7$.\nStep 3: Area $= \\frac{1}{2} b h = \\frac{1}{2}(10)(7) = 35$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($28$): uses the horizontal distance from $A$ to $C$ ($8$) as the base: $\\frac{1}{2}(8)(7) = 28$.\n* Choice C ($42$): uses a wrong base length of $12$: $\\frac{1}{2}(12)(7) = 42$.\n* Choice D ($70$): forgets the $\\frac{1}{2}$ factor: $10 \\times 7 = 70$.\n\n**Test Day Takeaway:** When one side lies on an axis, use it as the base — the height is simply the perpendicular coordinate of the opposite vertex.",
  skills: ["area", "coordinate-geometry", "triangles"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A rectangle has a length that is $5$ more than twice its width. If the perimeter of the rectangle is $88$, what is the area of the rectangle?",
  correctAnswer: "403",
  explanation: "**SAT Pattern: Multi-Step Word Problem with Geometry**\n\n**The correct answer is $403$.**\n\n**The Fast Way (~30s):** Let width $= w$ and length $= 2w + 5$. Perimeter $2(w + 2w + 5) = 88 \\Rightarrow 3w + 5 = 44 \\Rightarrow w = 13$, so length $= 31$ and area $= 13 \\times 31 = 403$.\n\n**The Full Solution:**\nStep 1: Let $w$ be the width. The length is $5$ more than twice the width: $2w + 5$.\nStep 2: Perimeter is $2(\\text{width} + \\text{length})$: $2(w + 2w + 5) = 88$, so $2(3w + 5) = 88$ and $3w + 5 = 44$.\nStep 3: Solve: $3w = 39$, so $w = 13$ and length $= 2(13) + 5 = 31$.\nStep 4: Area $= 13 \\times 31 = 403$. Check: perimeter $2(13 + 31) = 88$ $\\checkmark$.\n\n**Common Mistakes:** Using $P = w + l$ instead of $P = 2(w + l)$; or stopping at the dimensions and reporting $13$, $31$, or the perimeter instead of the area.\n\n**Test Day Takeaway:** Build the variable relationship first, use the perimeter to solve for the dimensions, then compute the quantity actually requested.",
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
  explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The constant term gives $k(-5) = -40$, so $k = 8$. Then the middle term of $(3x + 8)(2x - 5)$ is $-15x + 16x = x$, so $b = 1$.\n\n**The Full Solution:**\nStep 1: Expand $(3x + k)(2x - 5) = 6x^2 - 15x + 2kx - 5k = 6x^2 + (2k - 15)x - 5k$.\nStep 2: Match constants with $6x^2 + bx - 40$: $-5k = -40$, so $k = 8$.\nStep 3: Match linear terms: $b = 2k - 15 = 2(8) - 15 = 16 - 15 = 1$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-31$): subtracts $2k$ instead of adding it: $-15 - 16 = -31$.\n* Choice C ($-1$): sign-flips the result: $15 - 16 = -1$ instead of $-15 + 16$.\n* Choice D ($31$): drops the negative on $-15$: $15 + 16 = 31$.\n\n**Test Day Takeaway:** Match coefficients term by term, and solve for the unknown constant using the simplest equation first — here, the constant term pins down $k$.",
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
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** \"Given a household with a garden\" restricts to the Has Garden row, total $125$. Of those, $70$ own a pet, so the probability is $\\frac{70}{125}$.\n\n**The Full Solution:**\nStep 1: The condition \"selected from those that have a garden\" fixes the denominator as the Has Garden row total: $125$.\nStep 2: Within that row, the pet owners number $70$.\nStep 3: So $P(\\text{pet owner} \\mid \\text{has garden}) = \\frac{70}{125}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{70}{250}$): uses the grand total $250$ — that is the joint probability, not the conditional.\n* Choice B ($\\frac{70}{130}$): uses $130$ (all pet owners) as the denominator — the wrong condition direction.\n* Choice D ($\\frac{125}{250}$): gives $P(\\text{has garden})$, ignoring pet ownership entirely.\n\n**Test Day Takeaway:** In conditional probability the \"given\" group sets the denominator — restrict to that row or column total, not the grand total.",
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
// Distribution: 3E / 6M / 13H. Calibrated to Bluebook Module 2 Hard with a gradual ramp.
//   Easy (band 3):   Q2 (margin-of-error plausible range), Q6 (percent of a total), Q15 (range).
//   Medium (band 4-5): Q1, Q3, Q4, Q8, Q9, Q13.
//   Hard (band 6-7): Q5, Q7, Q10, Q11, Q12, Q14, Q16, Q17, Q18, Q19, Q20, Q21, Q22.
// Hard anchors: Q10 composite-function solve-for-inner, Q20 rational w/ extraneous root.
// Pool infusion: Q1 reskins E#2 (line from two points); Q5 reskins D-p3#25 (parabola tangent);
//   Q11 reskins D-p12#21 (reverse-percent retail chain); Q12 reskins D-p22#21 (coterminal tan);
//   Q18 reskins D-p15#27 (fraction-coeff no-solution); Q21 reskins D-p15#25 (45-45-90 perimeter).
// Authoring pass (T4): Q2 replaced median-bar opener with margin-of-error (opener-bar fix);
//   Q16 replaced verbatim ticket-system duplicate of Q13 with a HARD grouped-data smallest-mean
//   (Grouped Data — Mean Bounds, barChart); Q18 expanded to full house format + skills fixed
//   (infinite-solutions-condition -> no-solution-condition); Q22 reskinned away from D-p25#27
//   (new zeros 0/4/-6, shift 10, answer 32 vs source 25/31).

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
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Slope $= \\frac{31 - 19}{10 - 4} = \\frac{12}{6} = 2$. Plug $(4, 19)$ into $y = 2x + b$: $19 = 8 + b$, so $b = 11$ and $h(x) = 2x + 11$.\n\n**The Full Solution:**\nStep 1: Find the slope between the two points: $m = \\frac{31 - 19}{10 - 4} = \\frac{12}{6} = 2$.\nStep 2: Substitute one point into $y = 2x + b$. Using $(4, 19)$: $19 = 2(4) + b = 8 + b$, so $b = 11$.\nStep 3: Thus $h(x) = 2x + 11$. Check: $h(10) = 20 + 11 = 31$ $\\checkmark$ and $h(4) = 8 + 11 = 19$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2x + 19$): finds slope $2$ but writes the first $y$-value $19$ as the intercept without solving for $b$.\n* Choice C ($\\frac{1}{2}x + 17$): inverts the slope ratio to $\\frac{\\Delta x}{\\Delta y} = \\frac{6}{12} = \\frac{1}{2}$.\n* Choice D ($2x + 4$): uses the first $x$-coordinate $4$ as the intercept.\n\n**Test Day Takeaway:** A correct slope is only half the work — always substitute a point to solve for $b$. When two choices share a slope, the point-check decides between them.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A researcher surveyed a random sample of students at a large university and estimated that $42\\%$ of all students bike to campus, with an associated margin of error of $3$ percentage points. Based on this estimate and margin of error, which of the following is the most appropriate conclusion?",
  choices: [
    // distractor: reports the margin of error itself (3%) as if it were the proportion
    { id: "A", text: "About $3\\%$ of all students at the university bike to campus." },
    { id: "B", text: "It is plausible that between $39\\%$ and $45\\%$ of all students at the university bike to campus." },
    // distractor: stops one step early — treats the sample estimate as an exact population value
    { id: "C", text: "Exactly $42\\%$ of all students at the university bike to campus." },
    // distractor: keeps only the upper endpoint, discarding the lower half of the interval
    { id: "D", text: "At most $45\\%$ of all students at the university bike to campus." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** A margin of error builds a plausible interval around the estimate: $42\\% \\pm 3\\% = [39\\%, 45\\%]$. That is exactly Choice B.\n\n**The Full Solution:**\nStep 1: The margin of error means the true population proportion is plausibly within $3$ percentage points of the sample estimate of $42\\%$.\nStep 2: Lower endpoint: $42\\% - 3\\% = 39\\%$. Upper endpoint: $42\\% + 3\\% = 45\\%$.\nStep 3: So it is plausible that between $39\\%$ and $45\\%$ of all students bike to campus.\n\n**Why the wrong answers are tempting:**\n* Choice A: reports the margin of error $3\\%$ as if it were the proportion who bike.\n* Choice C: treats the sample estimate $42\\%$ as an exact population value, ignoring the margin of error.\n* Choice D: keeps only the upper bound $45\\%$ and discards the lower half of the interval.\n\n**Test Day Takeaway:** A margin of error gives a two-sided plausible interval (estimate $\\pm$ MoE) for the population value — never an exact figure, never a one-sided bound.",
  skills: ["statistics", "margin-of-error"]
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
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The $y$ terms are $+y$ and $-y$, so add the equations: $(2x+y)+(x-y)=17+4$ gives $3x=21$, so $x=7$.\n\n**The Full Solution:**\nStep 1: Add the two equations to cancel $y$: $2x+y+x-y=21$, so $3x=21$.\nStep 2: Divide by $3$: $x=7$.\nStep 3: Back-substitute to check: $y=17-2(7)=3$, and $7-3=4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): solves on to find $y=3$ instead of stopping at $x$.\n* Choice C ($10.5$): adds $17+4=21$ but divides by $2$ instead of $3$.\n* Choice D ($13$): subtracts the equations instead of adding, mishandling the constants.\n\n**Test Day Takeaway:** When one equation has $+y$ and the other has $-y$, add them to eliminate $y$ in a single step.",
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
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The parabola opens down, so the max is at the vertex $t=-\\frac{30}{2(-5)}=3$. Then $h(3)=-45+90=45$ meters.\n\n**The Full Solution:**\nStep 1: $h(t)=-5t^2+30t$ has $a=-5<0$, so it opens downward and peaks at its vertex.\nStep 2: Vertex time: $t=-\\frac{b}{2a}=-\\frac{30}{2(-5)}=3$ seconds.\nStep 3: Maximum height: $h(3)=-5(3)^2+30(3)=-45+90=45$ meters.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports the $t$-coordinate of the vertex ($3$ seconds), not the height.\n* Choice B ($40$): evaluates at the wrong time $t=2$: $-20+60=40$.\n* Choice D ($60$): just doubles $30$ and ignores the $-5t^2$ term.\n\n**Test Day Takeaway:** For $f(t)=at^2+bt+c$, the vertex is at $t=-\\frac{b}{2a}$. The max/min *value* is what you get after substituting that $t$ back in.",
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
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** A horizontal line meets a downward parabola at exactly one point only at the vertex, so $c$ equals the maximum. Vertex at $x=-\\frac{8}{2(-1)}=4$, and the max is $-(4)^2+8(4)-5=11$.\n\n**The Full Solution:**\nStep 1: $y=-x^2+8x-5$ opens downward, so its highest point is the vertex.\nStep 2: A line $y=c$ touches the parabola once exactly when $c$ is that maximum value.\nStep 3: Vertex $x$-coordinate: $x=-\\frac{b}{2a}=-\\frac{8}{2(-1)}=4$.\nStep 4: Maximum value: $-(4)^2+8(4)-5=-16+32-5=11$, so $c=11$.\n\nEquivalently, setting $-x^2+8x-5=c$ gives $x^2-8x+(5+c)=0$; one solution means the discriminant is $0$: $64-4(5+c)=0 \\Rightarrow c=11$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-5$): reads the constant term, the value at $x=0$, not the maximum.\n* Choice C ($8$): grabs the coefficient of $x$.\n* Choice D ($4$): reports the vertex's $x$-coordinate instead of its $y$-value $c$.\n\n**Test Day Takeaway:** A horizontal line is tangent to a parabola only at the vertex, so the single-intersection value equals the max (downward) or min (upward).",
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
  explanation: "**SAT Pattern: Basic Percent Calculation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $35\\%$ of $8{,}400$ is $0.35\\times 8{,}400=2{,}940$.\n\n**The Full Solution:**\nStep 1: \"$35\\%$ of the weekday total\" means multiply by $0.35$.\nStep 2: $0.35\\times 8{,}400=2{,}940$ riders.\n\n**Why the wrong answers are tempting:**\n* Choice B ($5{,}460$): uses the complement $65\\%$: $0.65\\times 8{,}400=5{,}460$.\n* Choice C ($24{,}000$): divides by $0.35$ instead of multiplying.\n* Choice D ($294$): multiplies by $0.035$, a decimal slip of one place.\n\n**Test Day Takeaway:** \"$X\\%$ of a total\" means multiply the total by $\\frac{X}{100}$. Check whether the percent or its complement is being asked for.",
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
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** First trip: $0.30m=117-45=72 \\Rightarrow m=240$ miles. New trip: $240-30=210$ miles over $2$ days: $2(45)+0.30(210)=90+63=\\$153$.\n\n**The Full Solution:**\nStep 1: Solve for the original miles: $45+0.30m=117 \\Rightarrow 0.30m=72 \\Rightarrow m=240$.\nStep 2: New mileage is $30$ fewer: $240-30=210$ miles.\nStep 3: New bill is $2$ days plus the mile charge: $2(45)+0.30(210)=90+63=\\$153$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$108$): uses one day instead of two: $45+0.30(210)=108$.\n* Choice C ($\\$162$): keeps the original $240$ miles: $2(45)+0.30(240)=162$.\n* Choice D ($\\$234$): just doubles the original bill, $2(117)$.\n\n**Test Day Takeaway:** Track every change in a word problem — here the new bill changes both the number of days and the mile count, each at the stated per-unit rate.",
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
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Multiply through by $6$: $2x+x=90$, so $3x=90$ and $x=30$.\n\n**The Full Solution:**\nStep 1: The LCD of $3$ and $6$ is $6$. Multiply every term by $6$: $2x+x=90$.\nStep 2: Combine: $3x=90$.\nStep 3: Divide by $3$: $x=30$.\nStep 4: Check: $\\frac{30}{3}+\\frac{30}{6}=10+5=15$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): computes $\\frac{30}{3}=10$ and stops at one term.\n* Choice B ($18$): a botched clearing of the fractions.\n* Choice D ($45$): multiplies $15$ by $3$ alone instead of clearing both denominators.\n\n**Test Day Takeaway:** Multiply through by the LCD to clear every fraction at once, then solve the linear equation that remains.",
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
  explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Expand and factor: $3(x-5)^2-27=3(x^2-10x+25)-27=3x^2-30x+48=3(x-2)(x-8)$, which shows the $x$-intercepts.\n\n**The Full Solution:**\nStep 1: Expand the square: $3(x-5)^2-27=3(x^2-10x+25)-27$.\nStep 2: Distribute and combine: $3x^2-30x+75-27=3x^2-30x+48$.\nStep 3: Factor out $3$ and factor the trinomial: $3(x^2-10x+16)=3(x-2)(x-8)$.\nStep 4: The $x$-intercepts are $x=2$ and $x=8$; their average $\\frac{2+8}{2}=5$ matches the vertex $x=5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($3(x+2)(x-8)$): zeros at $-2$ and $8$ would put the vertex at $x=3$, not $5$.\n* Choice C ($3(x-2)(x+8)$): zeros at $2$ and $-8$ put the vertex at $x=-3$.\n* Choice D ($3(x+2)(x+8)$): zeros at $-2$ and $-8$ put the vertex at $x=-5$.\n\n**Test Day Takeaway:** To go from vertex form to factored form, expand, simplify, and factor. The average of the zeros must equal the vertex $x$-coordinate — use that to sanity-check the signs.",
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
  explanation: "**SAT Pattern: Function Composition**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $f(g(x))=2g(x)+3=4x^2+3$. Subtract $3$: $2g(x)=4x^2$. Divide by $2$: $g(x)=2x^2$.\n\n**The Full Solution:**\nStep 1: Substitute $g(x)$ as the input to $f$: $f(g(x))=2\\cdot g(x)+3$.\nStep 2: Set equal to the given output: $2g(x)+3=4x^2+3$.\nStep 3: Subtract $3$ from both sides: $2g(x)=4x^2$.\nStep 4: Divide by $2$: $g(x)=2x^2$.\nCheck: $f(2x^2)=2(2x^2)+3=4x^2+3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4x^2$): subtracts $3$ but forgets to divide by $2$.\n* Choice C ($2x^2+3$): leaves a $+3$ inside $g$, but that $+3$ belongs to $f$.\n* Choice D ($x^2-\\frac{3}{2}$): mishandles the constant while dividing.\n\n**Test Day Takeaway:** Treat $g(x)$ as the unknown input: substitute it into $f$, undo the additive constant first, then undo the leading coefficient.",
  skills: ["function-composition", "function-interpretation"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A community theater sells a souvenir program. The regular price of the program is $\\$24.00$. During a sale, the program's price is $75\\%$ less than the regular price, and that sale price is $20\\%$ greater than the theater's cost to print one program. What is the theater's cost, in dollars, to print one program?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~40s):** Sale price $=(1-0.75)(24)=0.25\\times 24=\\$6$. The sale price is $20\\%$ above cost, so cost $=\\frac{6}{1.20}=\\$5$.\n\n**The Full Solution:**\nStep 1: Apply the $75\\%$ decrease: sale $=24.00\\times(1-0.75)=24.00\\times 0.25=\\$6.00$.\nStep 2: The sale price is $20\\%$ greater than cost, so $\\text{sale}=1.20\\times\\text{cost}$, giving $6.00=1.20\\times\\text{cost}$.\nStep 3: Divide: $\\text{cost}=\\frac{6.00}{1.20}=\\$5.00$.\nCheck: $20\\%$ more than $\\$5.00$ is $5.00\\times 1.20=\\$6.00$, and $\\$6.00$ is $75\\%$ less than $\\$24.00$. $\\checkmark$\n\n**Common Mistakes:** Taking $20\\%$ *of* the sale price ($6\\times 0.80=4.80$) instead of dividing by $1.20$; stopping at the sale price $\\$6$; or subtracting the percents ($75-20=55$) and applying $55\\%$ in one move.\n\n**Test Day Takeaway:** Chain percents one step at a time. \"$X\\%$ greater than the cost\" means sale $=(1+\\frac{X}{100})\\cdot\\text{cost}$, so recover the cost by dividing, not multiplying.",
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
  explanation: "**SAT Pattern: Coterminal Angles — Unit Circle**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Subtract full turns: $\\frac{53\\pi}{6}-\\frac{48\\pi}{6}=\\frac{5\\pi}{6}$. This lands in Quadrant II, where tangent is negative, with reference angle $\\frac{\\pi}{6}$, so $\\tan\\frac{5\\pi}{6}=-\\frac{\\sqrt{3}}{3}$.\n\n**The Full Solution:**\nStep 1: Reduce by multiples of $2\\pi=\\frac{12\\pi}{6}$: $\\frac{53\\pi}{6}-4(2\\pi)=\\frac{53\\pi}{6}-\\frac{48\\pi}{6}=\\frac{5\\pi}{6}$.\nStep 2: $\\frac{5\\pi}{6}$ is in Quadrant II (between $\\frac{\\pi}{2}$ and $\\pi$), where tangent is negative.\nStep 3: Reference angle: $\\pi-\\frac{5\\pi}{6}=\\frac{\\pi}{6}$, and $\\tan\\frac{\\pi}{6}=\\frac{1}{\\sqrt{3}}=\\frac{\\sqrt{3}}{3}$.\nStep 4: Apply the QII sign: $\\tan\\frac{5\\pi}{6}=-\\frac{\\sqrt{3}}{3}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{\\sqrt{3}}{3}$): right magnitude but drops the negative sign for Quadrant II.\n* Choice C ($-\\sqrt{3}$): uses reference angle $\\frac{\\pi}{3}$ (magnitude $\\sqrt{3}$) with the correct sign.\n* Choice D ($\\sqrt{3}$): wrong reference angle and wrong sign together.\n\n**Test Day Takeaway:** For a large radian angle, subtract $2\\pi$ until you land in $[0,2\\pi)$, then use the quadrant to set the sign and the reference angle to set the magnitude.",
  skills: ["trigonometry", "radians", "unit-circle"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A movie theater sold adult tickets for $\\$12$ each and child tickets for $\\$7$ each. A total of $200$ tickets were sold, and the total revenue was $\\$2{,}100$. How many adult tickets were sold?",
  correctAnswer: "140",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $140$.**\n\n**The Fast Way (~30s):** Let $a$ = adult, $c$ = child. From $a+c=200$, $c=200-a$. Substitute into $12a+7c=2100$: $12a+7(200-a)=2100 \\Rightarrow 5a+1400=2100 \\Rightarrow a=140$.\n\n**The Full Solution:**\nStep 1: Set up the count and revenue equations: $a+c=200$ and $12a+7c=2100$.\nStep 2: Solve the first for $c$: $c=200-a$.\nStep 3: Substitute: $12a+7(200-a)=2100 \\Rightarrow 12a+1400-7a=2100$.\nStep 4: Combine and solve: $5a=700 \\Rightarrow a=140$.\nCheck: $c=60$ and $12(140)+7(60)=1680+420=2100$. $\\checkmark$\n\n**Common Mistakes:** Answering $60$ (the number of child tickets), or setting the revenue equation equal to $200$ instead of $2100$.\n\n**Test Day Takeaway:** Build two equations — one for the count of tickets, one for the dollar revenue — then substitute and solve for the quantity asked.",
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
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $f$ has its minimum at the midpoint of its zeros, $x=4$, where $f(4)=(7)(-7)=-49$. Adding $k$ raises the parabola; for exactly one $x$-intercept the vertex must sit on the $x$-axis: $-49+k=0 \\Rightarrow k=49$.\n\n**The Full Solution:**\nStep 1: $f(x)=(x+3)(x-11)$ has zeros at $x=-3$ and $x=11$, so the vertex is at $x=\\frac{-3+11}{2}=4$.\nStep 2: Minimum value: $f(4)=(4+3)(4-11)=(7)(-7)=-49$.\nStep 3: $g(x)=f(x)+k$ has minimum $-49+k$.\nStep 4: Exactly one $x$-intercept means the vertex lies on the $x$-axis: $-49+k=0 \\Rightarrow k=49$.\nCheck: $g(x)=(x+3)(x-11)+49=x^2-8x-33+49=x^2-8x+16=(x-4)^2$, a single $x$-intercept at $x=4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-49$): reports $f$'s minimum instead of the shift that cancels it.\n* Choice C ($33$): uses $-(-3)(11)=33$, a stray product.\n* Choice D ($-33$): grabs the constant term of $f$ rather than the negative of its minimum.\n\n**Test Day Takeaway:** A parabola has exactly one $x$-intercept when its vertex sits on the $x$-axis. Shift the function by the negative of its minimum (or maximum) value.",
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
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Range $=\\text{max}-\\text{min}=460-372=88$.\n\n**The Full Solution:**\nStep 1: The range of a data set is the largest value minus the smallest value.\nStep 2: Scan the six masses: the largest is $460$ and the smallest is $372$.\nStep 3: Range $=460-372=88$ grams, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($460$): reports only the maximum value and skips the subtraction.\n* Choice C ($372$): reports only the minimum value and skips the subtraction.\n* Choice D ($76$): subtracts from the second-largest value ($448-372=76$) instead of the true maximum.\n\n**Test Day Takeaway:** Range is a single subtraction — pin down the true max and the true min, then subtract once.",
  skills: ["statistics", "range"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A naturalist recorded the number of berries eaten by each of $20$ thrushes during one hour. The histogram shows how many thrushes ate a number of berries in each interval, but the exact count for each individual bird is not given. What is the smallest possible value of the mean number of berries eaten per thrush?",
  diagram: {
    type: "barChart",
    params: {
      data: [
        { label: "10–14", value: 8 },
        { label: "15–19", value: 6 },
        { label: "20–24", value: 4 },
        { label: "25–29", value: 2 }
      ],
      xAxisLabel: "Berries eaten",
      yAxisLabel: "Number of thrushes",
      yMax: 10,
      yStep: 2
    }
  },
  correctAnswer: "15",
  explanation: "**SAT Pattern: Grouped Data — Mean Bounds**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~50s):** The mean is smallest when every bird ate the fewest its interval allows — the lower endpoint. Use $10, 15, 20, 25$ with frequencies $8, 6, 4, 2$: total $=80+90+80+50=300$, so mean $=\\frac{300}{20}=15$.\n\n**The Full Solution:**\nStep 1: The histogram fixes how many birds fall in each interval but not the exact counts, so the true mean lies between two extremes.\nStep 2: To minimize the mean, assume every bird in an interval ate the smallest number that interval allows — its lower endpoint.\nStep 3: Lower endpoints $10, 15, 20, 25$ with frequencies $8, 6, 4, 2$ give minimum total $=10(8)+15(6)+20(4)+25(2)=80+90+80+50=300$.\nStep 4: Divide by the $8+6+4+2=20$ birds: smallest possible mean $=\\frac{300}{20}=15$.\n\n**Common Mistakes:** Using the interval midpoints (gives the estimate $17$, not the minimum); using the upper endpoints (gives the largest mean, $19$); dividing by the number of intervals ($4$) instead of the number of birds ($20$).\n\n**Test Day Takeaway:** With grouped data the mean is bounded — it is smallest when every value sits at its interval's lower endpoint and largest at the upper endpoints.",
  skills: ["statistics", "grouped-data", "mean"]
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
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The right angle is at $Z$, so $XY=85$ is the hypotenuse and the leg opposite angle $X$ is $YZ=\\sqrt{85^2-77^2}=\\sqrt{1296}=36$. Then $\\sin(X)=\\frac{36}{85}$.\n\n**The Full Solution:**\nStep 1: With the right angle at $Z$, side $XY=85$ is the hypotenuse and $XZ=77$, $YZ$ are the legs.\nStep 2: Find the missing leg: $YZ^2=XY^2-XZ^2=7225-5929=1296$, so $YZ=36$.\nStep 3: For angle $X$, side $YZ=36$ is opposite and $XY=85$ is the hypotenuse, so $\\sin(X)=\\frac{\\text{opposite}}{\\text{hypotenuse}}=\\frac{36}{85}$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{77}{85}$): uses the adjacent leg over the hypotenuse — that is $\\cos(X)$, not $\\sin(X)$.\n* Choice C ($\\frac{36}{77}$): uses opposite over adjacent — that is $\\tan(X)$.\n* Choice D ($\\frac{77}{36}$): inverts the tangent ratio.\n\n**Test Day Takeaway:** SOH — $\\sin=\\frac{\\text{opposite}}{\\text{hypotenuse}}$. First identify which leg is opposite the angle in question, then which side is the hypotenuse.",
  skills: ["trigonometry", "triangles"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$$\\dfrac{3}{4}y - \\dfrac{1}{8}x = \\dfrac{1}{2} - \\dfrac{3}{4}y$$\n$$\\dfrac{1}{4}x + \\dfrac{5}{4} = py + \\dfrac{7}{4}$$\n\nIn the given system of equations, $p$ is a constant. If the system has no solution, what is the value of $p$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~50s):** Clear fractions to get $x-12y=-4$ and $x-4py=2$. The $x$-coefficients already match, so for no solution the $y$-coefficients must match too: $-12=-4p\\Rightarrow p=3$. The constants $-4$ and $2$ differ, so the lines are parallel and never meet.\n\n**The Full Solution:**\nStep 1: Equation 1: add $\\frac{3}{4}y$ to both sides of $\\frac{3}{4}y-\\frac{1}{8}x=\\frac{1}{2}-\\frac{3}{4}y$ to get $\\frac{3}{2}y-\\frac{1}{8}x=\\frac{1}{2}$; multiply by $8$: $12y-x=4$, i.e. $x-12y=-4$.\nStep 2: Equation 2: subtract $\\frac{5}{4}$ from $\\frac{1}{4}x+\\frac{5}{4}=py+\\frac{7}{4}$ to get $\\frac{1}{4}x=py+\\frac{1}{2}$; multiply by $4$: $x=4py+2$, i.e. $x-4py=2$.\nStep 3: A linear system has no solution exactly when the lines are parallel but distinct — matching $x$- and $y$-coefficients with mismatched constants. Both $x$-coefficients are $1$, so set $-12=-4p$, giving $p=3$.\nStep 4: With $p=3$ the equations are $x-12y=-4$ and $x-12y=2$; the same expression cannot equal both $-4$ and $2$, so there is no solution.\n\n**Common Mistakes:** Solving for infinitely many solutions instead (that would also need the constants to match, which is impossible here); skipping the fraction-clearing step; comparing the raw coefficients $\\frac{3}{4}$ and $p$ before putting both equations in the same standard form.\n\n**Test Day Takeaway:** No solution means parallel-but-distinct lines — match the $x$- and $y$-coefficient ratios with mismatched constants. Always rewrite both equations in the same standard form before comparing.",
  skills: ["systems-of-equations", "no-solution-condition"]
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
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The listed $x$-values are exactly the zeros of $f$, so $f(x)=0$ at each one. Then $y=f(x)-4=0-4=-4$ for all three, which is choice B.\n\n**The Full Solution:**\nStep 1: The factored form $f(x)=(x+8)(x+3)(x-5)$ has zeros at $x=-8, -3, 5$.\nStep 2: At each of those inputs the product is $0$, so $f(x)=0$.\nStep 3: The new function subtracts $4$, so $y=f(x)-4=0-4=-4$ at every listed input — all three $y$-values equal $-4$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): subtracts $8$, a factor constant, instead of the $4$ in the shift.\n* Choice C ($4$): adds $4$ instead of subtracting it.\n* Choice D ($-4, -3, 5$): reports the $x$-values as if they were the outputs.\n\n**Test Day Takeaway:** $y=f(x)+k$ shifts every output by $k$. At a zero of $f$ the output is $0$, so the shifted value is simply $k$.",
  skills: ["polynomial-functions", "function-transformations"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "What value of $x$ satisfies the equation $\\dfrac{x}{x - 2} + \\dfrac{2}{x + 1} = \\dfrac{6}{x^2 - x - 2}$?",
  correctAnswer: "-5",
  explanation: "**SAT Pattern: Rational Equation**\n\n**The correct answer is $-5$.**\n\n**The Fast Way (~45s):** Factor the right denominator: $x^2-x-2=(x-2)(x+1)$. Multiply both sides by $(x-2)(x+1)$: $x(x+1)+2(x-2)=6$, which simplifies to $x^2+3x-10=0$, i.e. $(x+5)(x-2)=0$. So $x=-5$ or $x=2$; reject $x=2$ (it zeroes a denominator), leaving $x=-5$.\n\n**The Full Solution:**\nStep 1: Factor the right denominator: $x^2-x-2=(x-2)(x+1)$, which is the common denominator of all three fractions.\nStep 2: Multiply every term by $(x-2)(x+1)$: $x(x+1)+2(x-2)=6$.\nStep 3: Expand and collect: $x^2+x+2x-4=6\\Rightarrow x^2+3x-10=0\\Rightarrow (x+5)(x-2)=0$, so $x=-5$ or $x=2$.\nStep 4: Check for extraneous roots: $x=2$ makes $x-2=0$, dividing by zero, so reject it. Only $x=-5$ survives.\nStep 5: Verify $x=-5$: $\\frac{-5}{-7}+\\frac{2}{-4}=\\frac{5}{7}-\\frac{1}{2}=\\frac{3}{14}$, and the right side is $\\frac{6}{25+5-2}=\\frac{6}{28}=\\frac{3}{14}$. $\\checkmark$\n\n**Common Mistakes:** Reporting $x=2$ — it solves the polynomial but makes the original equation undefined; forgetting to factor the right denominator before finding the common denominator; mis-distributing when clearing the fractions.\n\n**Test Day Takeaway:** For a rational equation, factor every denominator, multiply through by the LCD, solve the polynomial — then always reject any root that makes a denominator zero.",
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
  explanation: "**SAT Pattern: Special Right Triangle — 45-45-90**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Let the leg be $L$; the hypotenuse is $L\\sqrt{2}$, so the perimeter is $2L+L\\sqrt{2}=L(2+\\sqrt{2})$. Set this equal to $78(1+\\sqrt{2})$ and solve to get $L=39\\sqrt{2}$, which is choice B.\n\n**The Full Solution:**\nStep 1: In an isosceles right triangle the two legs are equal ($L$) and the hypotenuse is $L\\sqrt{2}$, so the perimeter is $2L+L\\sqrt{2}=L(2+\\sqrt{2})$.\nStep 2: Set it equal to $78+78\\sqrt{2}=78(1+\\sqrt{2})$, so $L=\\frac{78(1+\\sqrt{2})}{2+\\sqrt{2}}$.\nStep 3: Rationalize by multiplying by $\\frac{2-\\sqrt{2}}{2-\\sqrt{2}}$: the denominator becomes $4-2=2$ and the numerator becomes $78(1+\\sqrt{2})(2-\\sqrt{2})=78\\sqrt{2}$.\nStep 4: So $L=\\frac{78\\sqrt{2}}{2}=39\\sqrt{2}$. Check: legs $39\\sqrt{2}$, hypotenuse $39\\sqrt{2}\\cdot\\sqrt{2}=78$, perimeter $=2(39\\sqrt{2})+78=78+78\\sqrt{2}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($39$): halves $78$ but drops the $\\sqrt{2}$ factor.\n* Choice C ($78$): reads the rational part of the perimeter as the leg without solving.\n* Choice D ($78\\sqrt{2}$): gives the wrong side — this is twice the leg, not a leg.\n\n**Test Day Takeaway:** In a 45-45-90 triangle the hypotenuse is $\\text{leg}\\cdot\\sqrt{2}$. Build the perimeter as $L(2+\\sqrt{2})$ and rationalize to isolate $L$.",
  skills: ["special-right-triangles", "triangles"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "For the polynomial $g$ with $g(x) = x(x - 4)(x + 6)^2$, suppose $g(10 - w)$ equals $0$ for some constant $w$. Find the total of every value of $w$ for which this holds.",
  correctAnswer: "32",
  explanation: "**SAT Pattern: Polynomial Zeros via Factoring**\n\n**The correct answer is $32$.**\n\n**The Fast Way (~30s):** $g$ is zero at its roots $x=0, 4, -6$. Set the input equal to each: $10-w=0, 4, -6\\Rightarrow w=10, 6, 16$. Their sum is $10+6+16=32$.\n\n**The Full Solution:**\nStep 1: A product is $0$ exactly when one factor is $0$, so $g(x)=x(x-4)(x+6)^2=0$ at $x=0$, $x=4$, and $x=-6$.\nStep 2: The squared factor $(x+6)^2$ makes $x=-6$ a repeated root, but it is still a single distinct value — multiplicity does not add a new root.\nStep 3: $g(10-w)=0$ requires the input $10-w$ to be one of those roots: $10-w=0\\Rightarrow w=10$; $10-w=4\\Rightarrow w=6$; $10-w=-6\\Rightarrow w=16$.\nStep 4: Sum the values: $10+6+16=32$. Check: $g(0)=0$, $g(4)=0$, $g(-6)=(-6)(-10)(0)^2=0$. $\\checkmark$\n\n**Common Mistakes:** Treating the squared factor as two roots and adding an extra $w$-value; dropping the root $x=0$ from the bare factor $x$, which would lose $w=10$; solving $10-w$ as $w-10$ and sending every root to the wrong $w$.\n\n**Test Day Takeaway:** Find every distinct root, set the shifted input equal to each, and sum the resulting values — a repeated factor still contributes only one root value.",
  skills: ["polynomial-zeros", "quadratic-equations"]
}
      ]
    }
  ]
};

export default practiceTest4;
