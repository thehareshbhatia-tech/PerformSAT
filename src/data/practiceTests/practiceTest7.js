// Practice Test 7 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Contexts: sports stats, environment/ecology, libraries, coffee shops

export const practiceTest7 = {
  id: "practice-test-7",
  title: "Practice Test 7",
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
  question: "A store sells notebooks in packs of 8. If Marcus needs at least 50 notebooks for his class, what is the minimum number of packs he must buy?",
  choices: [
    { id: "A", text: "6" },
    { id: "B", text: "7" },
    { id: "C", text: "8" },
    { id: "D", text: "5" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Division with rounding up**\n\n**Choice B is correct.**\n\n**The Fast Way (10s):** $50 \\div 8 = 6.25$, so round up to 7 packs.\n\n**The Full Solution:**\nEach pack has 8 notebooks. We need at least 50.\n$6 \\times 8 = 48$ (not enough)\n$7 \\times 8 = 56$ (enough)\nSo the minimum is 7 packs.\n\n**Why the wrong answers are tempting:**\n\\u2022 A: $6 \\times 8 = 48$, which is 2 short.\n\\u2022 C: 8 packs works but isn't the minimum.\n\\u2022 D: $5 \\times 8 = 40$, far too few.\n\n**Test Day Takeaway:** When dividing to find a minimum count of whole items, always round UP.",
  skills: ["word-problems"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  question: "The table below shows the number of visitors to a museum each day of the week.\n\n| Day | Visitors |\n|---|---|\n| Mon | 120 |\n| Tue | 95 |\n| Wed | 140 |\n| Thu | 110 |\n| Fri | 180 |\n\nWhat is the mean number of visitors per day for these five days?",
  choices: [
    { id: "A", text: "120" },
    { id: "B", text: "129" },
    { id: "C", text: "140" },
    { id: "D", text: "135" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Mean from data**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** Sum = $120 + 95 + 140 + 110 + 180 = 645$. Mean = $\\frac{645}{5} = 129$.\n\n**The Full Solution:**\nAdd all values: $120 + 95 = 215$, $215 + 140 = 355$, $355 + 110 = 465$, $465 + 180 = 645$.\nDivide by the number of days: $\\frac{645}{5} = 129$.\n\n**Why the wrong answers are tempting:**\n\\u2022 A: 120 is the Monday value, not the mean.\n\\u2022 C: 140 is the median (middle value when ordered), not the mean.\n\\u2022 D: 135 is a common arithmetic error.\n\n**Test Day Takeaway:** Mean = sum divided by count. Don't confuse mean with median.",
  skills: ["statistics"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  question: "If $\\frac{3x}{14} = \\frac{27}{42}$, what is the value of $x$?",
  choices: [
    { id: "A", text: "3" },
    { id: "B", text: "6" },
    { id: "C", text: "9" },
    { id: "D", text: "7" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Proportion solving**\n\n**Choice A is correct.**\n\n**The Fast Way (10s):** Simplify $\\frac{27}{42} = \\frac{9}{14}$. So $\\frac{3x}{14} = \\frac{9}{14}$, giving $3x = 9$, so $x = 3$.\n\n**The Full Solution:**\nCross-multiply: $3x \\times 42 = 27 \\times 14$.\n$126x = 378$\n$x = 3$.\n\n**Why the wrong answers are tempting:**\n\\u2022 B: Confusing $x$ with $3x = 6$ instead of solving fully.\n\\u2022 C: This is the value of $3x$, not $x$.\n\\u2022 D: Comes from mistakenly using 14 in the calculation.\n\n**Test Day Takeaway:** Simplify fractions first to make proportions easier.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  question: "A delivery service charges a flat fee of $\\$4.50$ plus $\\$1.20$ per mile driven. Which expression represents the total cost, in dollars, for a delivery of $m$ miles?",
  choices: [
    { id: "A", text: "$1.20 + 4.50m$" },
    { id: "B", text: "$4.50 + 1.20m$" },
    { id: "C", text: "$5.70m$" },
    { id: "D", text: "$4.50m + 1.20$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Word to expression**\n\n**Choice B is correct.**\n\n**The Fast Way (10s):** Flat fee = constant = $4.50$. Per-mile rate = coefficient of $m$ = $1.20$. Total = $4.50 + 1.20m$.\n\n**The Full Solution:**\nThe flat fee of $\\$4.50$ doesn't depend on miles, so it's the constant term.\nThe $\\$1.20$ per mile charge means we multiply $1.20$ by $m$.\nTotal cost = $4.50 + 1.20m$.\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Swaps the flat fee and per-mile rate.\n\\u2022 C: Adds the two numbers and multiplies by $m$, ignoring that the flat fee is constant.\n\\u2022 D: Same swap as A.\n\n**Test Day Takeaway:** 'Flat fee' = constant term. 'Per unit' = coefficient of the variable.",
  skills: ["linear-functions", "word-problems"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  question: "The function $g(t) = 250 - 15t$ models the amount of water, in gallons, remaining in a tank $t$ minutes after a drain is opened. What does the number 15 represent in this context?",
  choices: [
    { id: "A", text: "The tank loses 15 gallons each minute." },
    { id: "B", text: "The tank starts with 15 gallons." },
    { id: "C", text: "After 15 minutes, the tank is empty." },
    { id: "D", text: "The tank holds a maximum of 15 gallons." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Interpret slope in context**\n\n**Choice A is correct.**\n\n**The Fast Way (10s):** In $g(t) = 250 - 15t$, the coefficient of $t$ is $-15$, representing the rate of change: 15 gallons lost per minute.\n\n**The Full Solution:**\nThis is in slope-intercept form $g(t) = b + mt$ where $m = -15$ and $b = 250$.\nThe slope $m = -15$ means the water decreases by 15 gallons per minute.\nThe $y$-intercept 250 means the tank starts with 250 gallons.\n\n**Why the wrong answers are tempting:**\n\\u2022 B: 250 is the starting amount, not 15.\n\\u2022 C: $250/15 \\approx 16.7$ minutes to empty, so 15 minutes is not when it empties.\n\\u2022 D: The maximum is 250 gallons.\n\n**Test Day Takeaway:** In $f(x) = b + mx$, the coefficient of $x$ is the rate of change per unit.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A researcher models the relationship between the number of hours studied, $x$, and test scores, $y$, for 15 students using the equation $y = 12.4x + 38.5$. One student studied for 5 hours and scored 94. What is the residual for this student?",
  choices: [
    { id: "A", text: "$-6.5$" },
    { id: "B", text: "$6.5$" },
    { id: "C", text: "$-5.5$" },
    { id: "D", text: "$5.5$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Residual from line of best fit**\n\n**Choice A is correct.**\n\n**The Fast Way (15s):** Predicted = $12.4(5) + 38.5 = 62 + 38.5 = 100.5$. Residual = actual $-$ predicted = $94 - 100.5 = -6.5$.\n\n**The Full Solution:**\nStep 1: Find the predicted value at $x = 5$:\n$y = 12.4(5) + 38.5 = 62.0 + 38.5 = 100.5$\nStep 2: Residual = actual $-$ predicted:\n$94 - 100.5 = -6.5$\nThe negative residual means the actual score was below the predicted score.\n\n**Why the wrong answers are tempting:**\n\\u2022 B: Reverses the subtraction (predicted $-$ actual).\n\\u2022 C: Arithmetic error in the predicted value.\n\\u2022 D: Combines both errors.\n\n**Test Day Takeaway:** Residual = actual $-$ predicted. A negative residual means the point is below the line.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  question: "\n\n| | Prefers Coffee | Prefers Tea | Total |\n|---|---|---|---|\n| Under 30 | 45 | 75 | 120 |\n| 30 or older | 90 | 40 | 130 |\n| Total | 135 | 115 | 250 |\n\nBased on the two-way table above, what fraction of people who prefer tea are under 30?",
  choices: [
    { id: "A", text: "$\\frac{75}{250}$" },
    { id: "B", text: "$\\frac{75}{120}$" },
    { id: "C", text: "$\\frac{75}{115}$" },
    { id: "D", text: "$\\frac{115}{250}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Conditional proportion from two-way table**\n\n**Choice C is correct.**\n\n**The Fast Way (10s):** 'Of people who prefer tea' = restrict to the Tea column (total 115). Under 30 who prefer tea = 75. Fraction = $\\frac{75}{115}$.\n\n**The Full Solution:**\nThe question asks: of those who prefer tea, what fraction are under 30?\nThis is a conditional: the condition is 'prefers tea.'\nTotal who prefer tea = 115.\nOf those, under 30 = 75.\nFraction = $\\frac{75}{115} = \\frac{15}{23}$.\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Uses the grand total 250 instead of the tea total.\n\\u2022 B: Uses the Under 30 row total (120) as the denominator.\n\\u2022 D: Gives the fraction of all people who prefer tea, not the conditional.\n\n**Test Day Takeaway:** 'Of those who [condition]' means restrict to that row or column total as the denominator.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  question: "If $5(2x - 3) - 4(x + 7) = ax + b$ is an identity (true for all values of $x$), what is the value of $b$?",
  correctAnswer: "-43",
  explanation: "**The correct answer is $-43$.**\n\n**The Full Solution:**\nExpand the left side:\n$5(2x - 3) - 4(x + 7) = 10x - 15 - 4x - 28 = 6x - 43$\n\nSince this equals $ax + b$ for all $x$:\n$a = 6$ and $b = -43$.\n\n**Common Mistakes:**\n\\u2022 Forgetting to distribute the negative sign: $-4(x+7) = -4x - 28$, not $-4x + 28$.\n\\u2022 Getting $-15 - 28$ wrong (it's $-43$, not $-13$).\n\n**Verification:** $6x - 43$, so $b = -43$. \\u2713",
  skills: ["solving-equations", "polynomial-operations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  question: "A population of bacteria doubles every 3 hours. If the population starts at 500, which expression gives the population after $t$ hours?",
  choices: [
    { id: "A", text: "$500(2)^{3t}$" },
    { id: "B", text: "$500(2)^{t/3}$" },
    { id: "C", text: "$500(3)^{t/2}$" },
    { id: "D", text: "$1000^{t/3}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential growth model**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** Doubles every 3 hours means the growth factor is 2 per 3-hour period. Number of periods in $t$ hours = $t/3$. Population = $500 \\cdot 2^{t/3}$.\n\n**The Full Solution:**\nGeneral exponential growth: $P(t) = P_0 \\cdot r^{t/d}$, where $P_0$ = initial, $r$ = growth factor, $d$ = doubling period.\n$P_0 = 500$, $r = 2$ (doubles), $d = 3$ hours.\n$P(t) = 500(2)^{t/3}$.\n\nCheck: At $t = 3$: $500(2)^1 = 1000$ (doubled). At $t = 6$: $500(2)^2 = 2000$ (doubled again). \\u2713\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Uses $3t$ in the exponent, which would mean doubling 3 times per hour.\n\\u2022 C: Swaps the base and exponent divisor.\n\\u2022 D: Incorrectly combines 500 and 2 into the base.\n\n**Test Day Takeaway:** 'Doubles every $d$ periods' means base 2, exponent $t/d$.",
  skills: ["exponential-functions"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  question: "Line $p$ passes through the points $(2, -1)$ and $(6, 7)$. Line $q$ is perpendicular to line $p$ and passes through the point $(4, 3)$. What is the $y$-intercept of line $q$?",
  choices: [
    { id: "A", text: "5" },
    { id: "B", text: "1" },
    { id: "C", text: "$\\frac{7}{2}$" },
    { id: "D", text: "4" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Perpendicular lines**\n\n**Choice A is correct.**\n\n**The Fast Way (20s):** Slope of $p$: $\\frac{7-(-1)}{6-2} = \\frac{8}{4} = 2$. Perpendicular slope = $-\\frac{1}{2}$. Line $q$: $y - 3 = -\\frac{1}{2}(x - 4)$, so $y = -\\frac{1}{2}x + 2 + 3 = -\\frac{1}{2}x + 5$. The $y$-intercept is 5.\n\n**The Full Solution:**\nStep 1: Slope of $p = \\frac{7 - (-1)}{6 - 2} = \\frac{8}{4} = 2$.\nStep 2: Perpendicular slope = negative reciprocal = $-\\frac{1}{2}$.\nStep 3: Line $q$ through $(4, 3)$ with slope $-\\frac{1}{2}$:\n$y - 3 = -\\frac{1}{2}(x - 4)$\n$y = -\\frac{1}{2}x + 2 + 3 = -\\frac{1}{2}x + 5$\nThe $y$-intercept is $5$.\n\n**Why the wrong answers are tempting:**\n\\u2022 B: Uses the slope of $p$ (not perpendicular) for line $q$.\n\\u2022 C: Arithmetic error in point-slope form.\n\\u2022 D: Confuses the $x$-coordinate of the given point with the intercept.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals. Then use point-slope form.",
  skills: ["slope", "coordinate-geometry", "linear-functions"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "medium",
  question: "A survey found that 36 out of 240 households in a neighborhood have solar panels. Based on this rate, how many households out of 1,500 in the entire town would be expected to have solar panels?",
  correctAnswer: "225",
  explanation: "**The correct answer is $225$.**\n\n**The Full Solution:**\nRate = $\\frac{36}{240} = \\frac{3}{20} = 0.15$, or 15%.\nExpected in town: $\\frac{3}{20} \\times 1500 = \\frac{4500}{20} = 225$.\n\n**Common Mistakes:**\n\\u2022 Setting up the proportion incorrectly.\n\\u2022 Arithmetic error: $36 \\times 1500 / 240 = 54000 / 240 = 225$.\n\n**Verification:** $\\frac{225}{1500} = \\frac{3}{20}$ and $\\frac{36}{240} = \\frac{3}{20}$. \\u2713",
  skills: ["ratios", "percents"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  question: "Which of the following systems of equations has no solution?",
  choices: [
    { id: "A", text: "$y = 3x + 5$ and $y = 3x - 2$" },
    { id: "B", text: "$y = 3x + 5$ and $y = -3x + 5$" },
    { id: "C", text: "$y = 3x + 5$ and $2y = 6x + 10$" },
    { id: "D", text: "$y = 3x + 5$ and $y = 5x + 3$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Systems with no solution (parallel lines)**\n\n**Choice A is correct.**\n\n**The Fast Way (10s):** No solution means parallel lines: same slope, different $y$-intercepts. Choice A has slope 3 for both, but intercepts 5 and $-2$.\n\n**The Full Solution:**\nA system has no solution when the lines are parallel (same slope, different intercept).\n\\u2022 A: slopes $3 = 3$, intercepts $5 \neq -2$ \\u2192 parallel, NO solution. \\u2713\n\\u2022 B: slopes $3 \neq -3$ \\u2192 lines intersect, one solution.\n\\u2022 C: $2y = 6x + 10 \\Rightarrow y = 3x + 5$, identical to the first \\u2192 infinitely many solutions.\n\\u2022 D: slopes $3 \neq 5$ \\u2192 lines intersect, one solution.\n\n**Why the wrong answers are tempting:**\n\\u2022 B: Opposite slopes might seem like they never meet, but they do intersect.\n\\u2022 C: Same line = infinitely many solutions, not no solution.\n\\u2022 D: Different slopes always give one intersection.\n\n**Test Day Takeaway:** No solution = same slope, different intercept. Infinitely many = identical equations.",
  skills: ["systems-of-equations", "linear-functions"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  question: "The function $f$ is defined by $f(x) = 3(0.85)^x$. What is the best interpretation of $f(4) \\approx 1.57$?",
  choices: [
    { id: "A", text: "After 4 time periods, the quantity is approximately 1.57." },
    { id: "B", text: "The quantity decreases by 1.57 each time period." },
    { id: "C", text: "When the quantity is 4, the time is approximately 1.57." },
    { id: "D", text: "The quantity loses 85% of its value every 4 time periods." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Interpret exponential function value**\n\n**Choice A is correct.**\n\n**The Fast Way (10s):** $f(4) \\approx 1.57$ means when $x = 4$ (input = time periods), the output is approximately 1.57.\n\n**The Full Solution:**\n$f(x) = 3(0.85)^x$ is an exponential decay function.\n$f(4) = 3(0.85)^4 = 3(0.52200625) \\approx 1.566 \\approx 1.57$.\nThis means after 4 time periods, the quantity has decayed from 3 to approximately 1.57.\n\n**Why the wrong answers are tempting:**\n\\u2022 B: Exponential functions don't decrease by a constant amount (that's linear).\n\\u2022 C: Reverses the input and output.\n\\u2022 D: The quantity retains 85% (loses 15%) each period, not 85% every 4 periods.\n\n**Test Day Takeaway:** $f(a) = b$ means 'when the input is $a$, the output is $b$.' Don't reverse them.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "medium",
  question: "If $4x - 7 = 2(3x + 5) - 9x$, what is the value of $x$?",
  correctAnswer: "17/7",
  explanation: "**The correct answer is $\\frac{17}{7}$.**\n\n**The Full Solution:**\nExpand the right side:\n$4x - 7 = 6x + 10 - 9x = -3x + 10$\n\nCombine like terms:\n$4x - 7 = -3x + 10$\n$4x + 3x = 10 + 7$\n$7x = 17$\n$x = \\frac{17}{7}$\n\n**Common Mistakes:**\n\\u2022 Distributing incorrectly: $2(3x + 5) = 6x + 10$, not $6x + 5$.\n\\u2022 Sign error when combining $6x - 9x = -3x$.\n\n**Verification:** LHS: $4\\left(\\frac{17}{7}\\right) - 7 = \\frac{68}{7} - \\frac{49}{7} = \\frac{19}{7}$. RHS: $-3\\left(\\frac{17}{7}\\right) + 10 = -\\frac{51}{7} + \\frac{70}{7} = \\frac{19}{7}$. \\u2713",
  skills: ["solving-equations"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  question: "If $a^{3/4} = 8$ where $a > 0$, what is the value of $a^{3/2}$?",
  choices: [
    { id: "A", text: "16" },
    { id: "B", text: "64" },
    { id: "C", text: "32" },
    { id: "D", text: "512" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponent rules with fractional exponents**\n\n**Choice B is correct.**\n\n**The Fast Way (15s):** $a^{3/2} = (a^{3/4})^2 = 8^2 = 64$.\n\n**The Full Solution:**\nWe know $a^{3/4} = 8$.\nWe want $a^{3/2}$.\nNotice that $\\frac{3}{2} = 2 \\times \\frac{3}{4}$.\nSo $a^{3/2} = a^{2 \\cdot (3/4)} = (a^{3/4})^2 = 8^2 = 64$.\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Might compute $2 \\times 8 = 16$ instead of $8^2$.\n\\u2022 C: $32 = 2^5$; comes from errors in exponent manipulation.\n\\u2022 D: $512 = 8^3$, using the wrong power.\n\n**Test Day Takeaway:** When you need $a^m$ and know $a^n$, write $m$ as a multiple of $n$: $a^m = (a^n)^{m/n}$.",
  skills: ["exponent-rules"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  question: "In the $xy$-plane, the graph of $y = 2x^2 - 12x + k$ has its vertex on the $x$-axis. What is the value of $k$?",
  choices: [
    { id: "A", text: "9" },
    { id: "B", text: "18" },
    { id: "C", text: "36" },
    { id: "D", text: "12" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex on x-axis (discriminant = 0)**\n\n**Choice B is correct.**\n\n**The Fast Way (20s):** Vertex on $x$-axis means the parabola just touches the $x$-axis, so discriminant = 0.\n$b^2 - 4ac = 0$: $(-12)^2 - 4(2)(k) = 0 \\Rightarrow 144 - 8k = 0 \\Rightarrow k = 18$.\n\n**The Full Solution:**\nThe vertex of $y = 2x^2 - 12x + k$ is at $x = -\\frac{-12}{2(2)} = 3$.\nThe $y$-coordinate of the vertex: $y = 2(9) - 12(3) + k = 18 - 36 + k = k - 18$.\nFor the vertex to be on the $x$-axis: $k - 18 = 0$, so $k = 18$.\n\n**Why the wrong answers are tempting:**\n\\u2022 A: Computes $(-12)^2/(4 \\cdot 4) = 144/16 = 9$, using $4a$ incorrectly.\n\\u2022 C: Squares the vertex $x$-coordinate and multiplies by $a$: $2(9) \\cdot 2 = 36$.\n\\u2022 D: Uses $-b/(2a) = 12/4$ but confuses the $x$-coordinate with $k$.\n\n**Test Day Takeaway:** Vertex on $x$-axis means exactly one root, so discriminant = 0, or equivalently, the vertex $y$-coordinate = 0.",
  skills: ["quadratic-equations", "vertex-form", "discriminant"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  question: "If $\\frac{x^2 + 5x + 6}{x + 2} = x + a$ for all $x \\neq -2$, and $\\frac{x^2 - 7x + 12}{x - 3} = x + b$ for all $x \\neq 3$, what is the value of $a \\cdot b$?",
  choices: [
    { id: "A", text: "$-12$" },
    { id: "B", text: "$12$" },
    { id: "C", text: "$-4$" },
    { id: "D", text: "$-7$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Polynomial division / factoring**\n\n**Choice A is correct.**\n\n**The Fast Way (20s):**\n$x^2 + 5x + 6 = (x+2)(x+3)$, so $\\frac{(x+2)(x+3)}{x+2} = x + 3$. Thus $a = 3$.\n$x^2 - 7x + 12 = (x-3)(x-4)$, so $\\frac{(x-3)(x-4)}{x-3} = x - 4$. Thus $b = -4$.\n$a \\cdot b = 3 \\times (-4) = -12$.\n\n**The Full Solution:**\nFactor $x^2 + 5x + 6$: Find two numbers that multiply to 6 and add to 5: $2$ and $3$.\n$x^2 + 5x + 6 = (x+2)(x+3)$. Dividing by $(x+2)$: $x + 3$. So $a = 3$.\n\nFactor $x^2 - 7x + 12$: Find two numbers that multiply to 12 and add to $-7$: $-3$ and $-4$.\n$x^2 - 7x + 12 = (x-3)(x-4)$. Dividing by $(x-3)$: $x - 4$. So $b = -4$.\n\n$a \\cdot b = (3)(-4) = -12$.\n\n**Why the wrong answers are tempting:**\n\\u2022 B: Gets $b = 4$ (wrong sign).\n\\u2022 C: Gives just the value of $b$.\n\\u2022 D: Confuses with a coefficient from the original.\n\n**Test Day Takeaway:** Factor the numerator, cancel common factors, then read off the remaining constant.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  question: "In a right triangle, the two legs have lengths $3\\sqrt{5}$ and $6\\sqrt{5}$. What is the area of the triangle?",
  correctAnswer: "45",
  explanation: "**The correct answer is $45$.**\n\n**The Full Solution:**\nFor a right triangle, area = $\\frac{1}{2} \\times \\text{leg}_1 \\times \\text{leg}_2$.\nArea = $\\frac{1}{2}(3\\sqrt{5})(6\\sqrt{5})$\n$= \\frac{1}{2}(18)(\\sqrt{5})^2$\n$= \\frac{1}{2}(18)(5)$\n$= \\frac{1}{2}(90)$\n$= 45$\n\n**Common Mistakes:**\n\\u2022 Forgetting that $\\sqrt{5} \\times \\sqrt{5} = 5$, not $\\sqrt{5}$.\n\\u2022 Forgetting the $\\frac{1}{2}$ factor, giving 90.\n\\u2022 Computing $3 \\times 6 = 18$ but neglecting the $\\sqrt{5}$ terms.\n\n**Verification:** $\\frac{1}{2} \\times 3\\sqrt{5} \\times 6\\sqrt{5} = \\frac{1}{2} \\times 18 \\times 5 = 45$ \\u2713",
  skills: ["area", "triangles", "radical-expressions"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  question: "The system of equations $y = x^2 - 4x + c$ and $y = 2x - 5$ has exactly one solution. What is the value of $c$?",
  choices: [
    { id: "A", text: "4" },
    { id: "B", text: "2" },
    { id: "C", text: "$-4$" },
    { id: "D", text: "6" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Quadratic-linear system with exactly one intersection**\n\n**Choice A is correct.**\n\n**The Fast Way (25s):** Set equal: $x^2 - 4x + c = 2x - 5$, so $x^2 - 6x + (c + 5) = 0$. Exactly one solution means discriminant = 0: $36 - 4(c+5) = 0 \\Rightarrow 36 - 4c - 20 = 0 \\Rightarrow 16 = 4c \\Rightarrow c = 4$.\n\n**The Full Solution:**\nSet the equations equal:\n$x^2 - 4x + c = 2x - 5$\n$x^2 - 6x + c + 5 = 0$\n\nFor exactly one intersection, the discriminant must equal zero:\n$\\Delta = (-6)^2 - 4(1)(c + 5) = 0$\n$36 - 4c - 20 = 0$\n$16 - 4c = 0$\n$c = 4$\n\nVerify: $x^2 - 6x + 9 = 0 \\Rightarrow (x-3)^2 = 0 \\Rightarrow x = 3$, $y = 2(3) - 5 = 1$. One solution: $(3, 1)$. \\u2713\n\n**Why the wrong answers are tempting:**\n\\u2022 B: Might forget to add 5 to $c$ when rearranging.\n\\u2022 C: Sign error when moving $-5$ to the left side.\n\\u2022 D: Arithmetic error in the discriminant calculation.\n\n**Test Day Takeaway:** For a quadratic-linear system with exactly one solution, set equal, rearrange to standard form, and set discriminant = 0.",
  skills: ["systems-of-equations", "quadratic-equations", "discriminant"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  question: "If $(3x + 5)(x + j) = 3x^2 + kx - 20$ for all values of $x$, where $j$ and $k$ are constants, what is the value of $k$?",
  choices: [
    { id: "A", text: "$-7$" },
    { id: "B", text: "$7$" },
    { id: "C", text: "$-17$" },
    { id: "D", text: "$17$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Factoring analysis with constraints**\n\n**Choice A is correct.**\n\n**The Fast Way (20s):** Expand: $(3x + 5)(x + j) = 3x^2 + 3jx + 5x + 5j = 3x^2 + (3j + 5)x + 5j$.\nMatch constants: $5j = -20 \\Rightarrow j = -4$.\nSo $k = 3(-4) + 5 = -12 + 5 = -7$.\n\n**The Full Solution:**\nExpand the left side:\n$(3x + 5)(x + j) = 3x^2 + 3jx + 5x + 5j = 3x^2 + (3j + 5)x + 5j$\n\nMatch with $3x^2 + kx - 20$:\n\\u2022 $x^2$ coefficient: $3 = 3$ \\u2713\n\\u2022 Constant: $5j = -20 \\Rightarrow j = -4$\n\\u2022 $x$ coefficient: $k = 3j + 5 = 3(-4) + 5 = -12 + 5 = -7$\n\nVerify: $(3x + 5)(x - 4) = 3x^2 - 12x + 5x - 20 = 3x^2 - 7x - 20$. \\u2713\n\n**Why the wrong answers are tempting:**\n\\u2022 B: Gets the sign wrong on $3j$.\n\\u2022 C: Uses $k = 3j - 5$ instead of $3j + 5$.\n\\u2022 D: Combines sign errors.\n\n**Test Day Takeaway:** Expand, match coefficients term by term. Start with the easiest (constant term) to find the unknown, then substitute.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  question: "The equation $\\frac{2}{x-1} + \\frac{3}{x+2} = \\frac{21}{(x-1)(x+2)}$ is defined for $x \\neq 1$ and $x \\neq -2$. What is the value of $x$?",
  correctAnswer: "4",
  explanation: "**The correct answer is $4$.**\n\n**The Full Solution:**\nNote that $(x-1)(x+2) = x^2 + x - 2$.\nMultiply both sides by $(x-1)(x+2)$:\n$2(x+2) + 3(x-1) = 21$\n$2x + 4 + 3x - 3 = 21$\n$5x + 1 = 21$\n$5x = 20$\n$x = 4$\n\nSince $x = 4 \neq 1$ and $x = 4 \neq -2$, this is a valid solution.\n\n**Common Mistakes:**\n\\u2022 Forgetting to check that the solution doesn't make a denominator zero.\n\\u2022 Distribution errors: $2(x+2) = 2x + 4$, not $2x + 2$.\n\n**Verification:** LHS: $\\frac{2}{4-1} + \\frac{3}{4+2} = \\frac{2}{3} + \\frac{3}{6} = \\frac{2}{3} + \\frac{1}{2} = \\frac{4}{6} + \\frac{3}{6} = \\frac{7}{6}$.\nRHS: $\\frac{21}{(3)(6)} = \\frac{21}{18} = \\frac{7}{6}$. \\u2713",
  skills: ["solving-equations", "factoring"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  question: "For the exponential function $f(x) = a \\cdot b^x$ with $b > 0$, it is given that $f(0) = 7$ and $f(1) = 5$. What is the value of $f(3)$?",
  choices: [
    { id: "A", text: "$\\frac{125}{49}$" },
    { id: "B", text: "$\\frac{343}{125}$" },
    { id: "C", text: "$\\frac{175}{49}$" },
    { id: "D", text: "$\\frac{25}{7}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponential function from two points**\n\n**Choice A is correct.**\n\n**The Fast Way (20s):** $f(0) = a = 7$. $f(1) = 7b = 5$, so $b = \\frac{5}{7}$. $f(3) = 7 \\left(\\frac{5}{7}\\right)^3 = 7 \\cdot \\frac{125}{343} = \\frac{875}{343} = \\frac{125}{49}$.\n\n**The Full Solution:**\nFrom $f(0) = a \\cdot b^0 = a = 7$.\nFrom $f(1) = 7b = 5$, so $b = \\frac{5}{7}$.\n$f(3) = 7 \\left(\\frac{5}{7}\\right)^3 = 7 \\cdot \\frac{5^3}{7^3} = 7 \\cdot \\frac{125}{343} = \\frac{125}{49}$.\n\nNote: $\\frac{875}{343} = \\frac{125}{49}$ because $875 = 125 \\times 7$ and $343 = 49 \\times 7$.\n\n**Why the wrong answers are tempting:**\n\\u2022 B: Computes $\\frac{7^3}{5^3}$ (inverts $b$).\n\\u2022 C: Multiplies $7 \\times 25$ in the numerator instead of using $b^3$.\n\\u2022 D: Computes $f(2) = 7(5/7)^2 = 25/7$ instead of $f(3)$.\n\n**Test Day Takeaway:** Use $f(0) = a$ to find the initial value, then the ratio $f(1)/f(0)$ gives the base $b$.",
  skills: ["exponential-functions", "exponent-rules"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
{
  id: 1, type: "multiple-choice", difficulty: "easy",
  question: "If $f(x) = 3x - 7$, what is $f(4)$?",
  choices: [{ id: "A", text: "1" }, { id: "B", text: "5" }, { id: "C", text: "12" }, { id: "D", text: "19" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way:** $f(4) = 3(4) - 7 = 12 - 7 = 5$.\n\n**The Full Solution:**\nSubstitute $x = 4$: $f(4) = 3(4) - 7 = 12 - 7 = 5$.\n\n**Why the wrong answers are tempting:**\n• A: Computes $4 - 3 = 1$.\n• C: Computes $3(4) = 12$ and forgets to subtract.\n• D: Computes $3(4) + 7 = 19$ (adds instead of subtracts).\n\n**Test Day Takeaway:** To evaluate $f(a)$, replace every $x$ in the expression with $a$.",
  skills: ["function-interpretation"]
},
{
  id: 2, type: "multiple-choice", difficulty: "easy",
  question: "A bag contains 5 red, 3 blue, and 2 green marbles. If one marble is drawn at random, what is the probability that it is blue?",
  choices: [{ id: "A", text: "$\\frac{1}{10}$" }, { id: "B", text: "$\\frac{3}{10}$" }, { id: "C", text: "$\\frac{1}{3}$" }, { id: "D", text: "$\\frac{3}{7}$" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Basic Probability**\n\n**Choice B is correct.**\n\n**The Fast Way:** $P(\\text{blue}) = \\frac{3}{5+3+2} = \\frac{3}{10}$.\n\n**The Full Solution:**\nTotal marbles $= 5 + 3 + 2 = 10$. Blue marbles $= 3$.\n$P(\\text{blue}) = \\frac{\\text{favorable}}{\\text{total}} = \\frac{3}{10}$.\n\n**Why the wrong answers are tempting:**\n• A: Uses $\\frac{1}{10}$ (probability of one specific marble).\n• C: Divides by 9 or uses $\\frac{1}{3}$ thinking there are 3 colors.\n• D: Divides 3 by $5 + 2 = 7$ (excludes blue from total).\n\n**Test Day Takeaway:** Probability = favorable outcomes / total outcomes. The total must include ALL items.",
  skills: ["probability"]
},
{
  id: 3, type: "multiple-choice", difficulty: "easy",
  question: "Which of the following is equivalent to $\\frac{x^8}{x^3}$?",
  choices: [{ id: "A", text: "$x^{\\frac{8}{3}}$" }, { id: "B", text: "$x^5$" }, { id: "C", text: "$x^{11}$" }, { id: "D", text: "$x^{24}$" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponent Division Rule**\n\n**Choice B is correct.**\n\n**The Fast Way:** $\\frac{x^8}{x^3} = x^{8-3} = x^5$.\n\n**The Full Solution:**\nWhen dividing powers with the same base, subtract exponents: $\\frac{x^a}{x^b} = x^{a-b}$.\n$\\frac{x^8}{x^3} = x^{8-3} = x^5$.\n\n**Why the wrong answers are tempting:**\n• A: Divides the exponents instead of subtracting.\n• C: Adds the exponents ($8 + 3 = 11$) as if multiplying.\n• D: Multiplies the exponents ($8 \\times 3 = 24$).\n\n**Test Day Takeaway:** Division subtracts exponents; multiplication adds them.",
  skills: ["exponent-rules"]
},
{
  id: 4, type: "multiple-choice", difficulty: "easy",
  question: "The graph of $y = f(x)$ passes through the point $(2, 9)$. If $g(x) = f(x) + 3$, what point must lie on the graph of $g$?",
  choices: [{ id: "A", text: "$(2, 6)$" }, { id: "B", text: "$(2, 12)$" }, { id: "C", text: "$(5, 9)$" }, { id: "D", text: "$(5, 12)$" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertical Translation of Functions**\n\n**Choice B is correct.**\n\n**The Fast Way:** $g(2) = f(2) + 3 = 9 + 3 = 12$, so $(2, 12)$ is on the graph of $g$.\n\n**The Full Solution:**\nSince $(2, 9)$ is on $f$, we have $f(2) = 9$. Then $g(2) = f(2) + 3 = 9 + 3 = 12$. The point $(2, 12)$ is on the graph of $g$.\n\n**Why the wrong answers are tempting:**\n• A: Subtracts 3 instead of adding.\n• C: Shifts horizontally by adding 3 to the $x$-coordinate.\n• D: Shifts both coordinates.\n\n**Test Day Takeaway:** Adding a constant outside $f$ shifts the graph vertically. The $x$-coordinate stays the same.",
  skills: ["function-interpretation"]
},
{
  id: 5, type: "multiple-choice", difficulty: "easy",
  question: "A fair six-sided die is rolled twice. What is the probability that both rolls show a number greater than 4?",
  choices: [{ id: "A", text: "$\\frac{1}{3}$" }, { id: "B", text: "$\\frac{1}{9}$" }, { id: "C", text: "$\\frac{2}{6}$" }, { id: "D", text: "$\\frac{4}{36}$" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Independent Events Probability**\n\n**Choice B is correct.**\n\n**The Fast Way:** $P(>4) = \\frac{2}{6} = \\frac{1}{3}$ per roll. Both rolls: $\\frac{1}{3} \\times \\frac{1}{3} = \\frac{1}{9}$.\n\n**The Full Solution:**\nNumbers greater than 4 on a die: 5 and 6 (2 outcomes out of 6).\n$P(>4 \\text{ on one roll}) = \\frac{2}{6} = \\frac{1}{3}$.\n\nSince the rolls are independent: $P(\\text{both} > 4) = \\frac{1}{3} \\times \\frac{1}{3} = \\frac{1}{9}$.\n\n**Why the wrong answers are tempting:**\n• A: Gives the probability for one roll, not both.\n• C: Same as A, just unsimplified.\n• D: Equals $\\frac{1}{9}$ but might trick students into thinking it's different.\n\n**Test Day Takeaway:** For independent events, multiply the individual probabilities. Note that $\\frac{4}{36} = \\frac{1}{9}$, so B and D are actually equal -- but B is simplified.",
  skills: ["probability"]
},
{
  id: 6, type: "multiple-choice", difficulty: "medium",
  question: "The function $g$ is defined by $g(x) = 2x^2 - 8x + 11$. What is the minimum value of $g(x)$?",
  choices: [{ id: "A", text: "1" }, { id: "B", text: "3" }, { id: "C", text: "8" }, { id: "D", text: "11" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex Form and Minimum Value**\n\n**Choice B is correct.**\n\n**The Fast Way:** The minimum occurs at $x = -\\frac{b}{2a} = -\\frac{-8}{4} = 2$. Then $g(2) = 2(4) - 16 + 11 = 3$.\n\n**The Full Solution:**\nComplete the square: $g(x) = 2(x^2 - 4x) + 11 = 2(x^2 - 4x + 4 - 4) + 11 = 2(x-2)^2 - 8 + 11 = 2(x-2)^2 + 3$.\n\nSince $2(x-2)^2 \\geq 0$ for all $x$, the minimum value is $3$, occurring at $x = 2$.\n\n**Why the wrong answers are tempting:**\n• A: Arithmetic error in completing the square.\n• C: Uses only the $-8x$ coefficient.\n• D: Uses $g(0) = 11$ (the $y$-intercept, not the minimum).\n\n**Test Day Takeaway:** For a quadratic $ax^2 + bx + c$ with $a > 0$, the minimum is at $x = -\\frac{b}{2a}$. Substitute to find the minimum value.",
  skills: ["vertex-form", "quadratic-equations"]
},
{
  id: 7, type: "multiple-choice", difficulty: "medium",
  question: "A table shows the results of a student survey:\n\n|  | Prefers Math | Prefers English | Total |\n|---|---|---|---|\n| Grade 10 | 35 | 25 | 60 |\n| Grade 11 | 28 | 32 | 60 |\n| Total | 63 | 57 | 120 |\n\nA student is selected at random from those who prefer Math. What is the probability that the student is in Grade 11?",
  choices: [{ id: "A", text: "$\\frac{28}{60}$" }, { id: "B", text: "$\\frac{28}{63}$" }, { id: "C", text: "$\\frac{28}{120}$" }, { id: "D", text: "$\\frac{63}{120}$" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way:** \"From those who prefer Math\" means the denominator is the Math column total (63). Grade 11 who prefer Math: 28. So $\\frac{28}{63}$.\n\n**The Full Solution:**\n$P(\\text{Grade 11} \\mid \\text{Math}) = \\frac{\\text{Grade 11 and Math}}{\\text{Total Math}} = \\frac{28}{63}$.\n\n**Why the wrong answers are tempting:**\n• A: Uses the Grade 11 row total (60) as the denominator.\n• C: Uses the grand total (120) as the denominator.\n• D: Gives the probability of preferring Math overall.\n\n**Test Day Takeaway:** In conditional probability, the condition determines your denominator. \"Given Math\" means denominator = Math total.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 8, type: "fill-in", difficulty: "medium",
  question: "The function $h(t) = -16t^2 + 64t + 5$ models the height in feet of a ball $t$ seconds after being thrown upward. At what time, in seconds, does the ball reach its maximum height?",
  correctAnswer: "2",
  explanation: "**SAT Pattern: Quadratic Maximum (Projectile)**\n\n**The answer is 2.**\n\n**The Fast Way:** $t = -\\frac{b}{2a} = -\\frac{64}{2(-16)} = -\\frac{64}{-32} = 2$.\n\n**The Full Solution:**\nThe height function $h(t) = -16t^2 + 64t + 5$ has $a = -16 < 0$, so the parabola opens downward. Maximum occurs at the vertex.\n\n$t = -\\frac{b}{2a} = -\\frac{64}{2(-16)} = -\\frac{64}{-32} = 2$ seconds.\n\nThe maximum height is $h(2) = -16(4) + 128 + 5 = -64 + 128 + 5 = 69$ feet.\n\n**Common Mistakes:**\n• Solving $h(t) = 0$ instead of finding the vertex.\n• Computing $-\\frac{64}{32} = -2$ (wrong sign).\n\n**Test Day Takeaway:** For projectile problems, the time at maximum height is $t = -\\frac{b}{2a}$, not where $h = 0$.",
  skills: ["quadratic-equations", "vertex-form", "function-interpretation"]
},
{
  id: 9, type: "multiple-choice", difficulty: "medium",
  question: "If $f(x) = x^2 + 1$ and $g(x) = 2x - 3$, what is $f(g(2))$?",
  choices: [{ id: "A", text: "2" }, { id: "B", text: "5" }, { id: "C", text: "7" }, { id: "D", text: "10" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Composite Function Evaluation**\n\n**Choice A is correct.**\n\n**The Fast Way:** $g(2) = 2(2) - 3 = 1$. Then $f(1) = 1^2 + 1 = 2$.\n\n**The Full Solution:**\nFirst evaluate the inner function: $g(2) = 2(2) - 3 = 4 - 3 = 1$.\nThen evaluate the outer function: $f(g(2)) = f(1) = 1^2 + 1 = 2$.\n\n**Why the wrong answers are tempting:**\n• B: Computes $f(2) = 5$ instead of $f(g(2))$.\n• C: Computes $g(2) + f(2) = 1 + 5 + 1 = 7$.\n• D: Computes $f(2) \\cdot g(2) = 5 \\cdot 2$.\n\n**Test Day Takeaway:** For $f(g(x))$, work from the inside out: evaluate $g$ first, then feed the result into $f$.",
  skills: ["function-interpretation"]
},
{
  id: 10, type: "multiple-choice", difficulty: "medium",
  question: "A spinner has 4 equal sections colored red, blue, green, and yellow. If the spinner is spun 3 times, what is the probability of getting red on all 3 spins?",
  choices: [{ id: "A", text: "$\\frac{3}{4}$" }, { id: "B", text: "$\\frac{1}{4}$" }, { id: "C", text: "$\\frac{1}{16}$" }, { id: "D", text: "$\\frac{1}{64}$" }],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Repeated Independent Events**\n\n**Choice D is correct.**\n\n**The Fast Way:** $P(\\text{red each spin}) = \\frac{1}{4}$. Three independent spins: $\\left(\\frac{1}{4}\\right)^3 = \\frac{1}{64}$.\n\n**The Full Solution:**\nEach spin is independent with $P(\\text{red}) = \\frac{1}{4}$.\n$P(\\text{3 reds}) = \\frac{1}{4} \\times \\frac{1}{4} \\times \\frac{1}{4} = \\frac{1}{64}$.\n\n**Why the wrong answers are tempting:**\n• A: Adds $\\frac{1}{4}$ three times.\n• B: Gives the probability for one spin.\n• C: Squares instead of cubing: $(\\frac{1}{4})^2 = \\frac{1}{16}$.\n\n**Test Day Takeaway:** For $n$ independent repetitions of an event with probability $p$, the probability all succeed is $p^n$.",
  skills: ["probability"]
},
{
  id: 11, type: "fill-in", difficulty: "medium",
  question: "The function $f$ is defined by $f(x) = 3(2)^x$. What is the value of $f(5) - f(3)$?",
  correctAnswer: "72",
  explanation: "**SAT Pattern: Exponential Function Evaluation**\n\n**The answer is 72.**\n\n**The Fast Way:** $f(5) = 3(32) = 96$. $f(3) = 3(8) = 24$. Difference $= 96 - 24 = 72$.\n\n**The Full Solution:**\n$f(5) = 3 \\cdot 2^5 = 3 \\cdot 32 = 96$.\n$f(3) = 3 \\cdot 2^3 = 3 \\cdot 8 = 24$.\n$f(5) - f(3) = 96 - 24 = 72$.\n\n**Common Mistakes:**\n• Computing $f(5-3) = f(2) = 3 \\cdot 4 = 12$ (subtracting inputs instead of outputs).\n• Forgetting the coefficient: $2^5 - 2^3 = 24$.\n\n**Test Day Takeaway:** $f(a) - f(b) \neq f(a - b)$ for exponential (or most) functions. Evaluate each separately.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 12, type: "multiple-choice", difficulty: "medium",
  question: "A local election has 3 candidates. The table below shows the probability of each outcome:\n\n| Candidate | A | B | C |\n|---|---|---|---|\n| Probability | 0.35 | $p$ | 0.25 |\n\nIf $P(A \\text{ or } C) = 0.60$, what is the probability that candidate B wins?",
  choices: [{ id: "A", text: "0.25" }, { id: "B", text: "0.35" }, { id: "C", text: "0.40" }, { id: "D", text: "0.60" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Complementary Probability**\n\n**Choice C is correct.**\n\n**The Fast Way:** All probabilities sum to 1: $P(B) = 1 - P(A) - P(C) = 1 - 0.35 - 0.25 = 0.40$.\n\n**The Full Solution:**\nSince there are only 3 candidates: $P(A) + P(B) + P(C) = 1$.\n$0.35 + p + 0.25 = 1$\n$p = 1 - 0.60 = 0.40$.\n\nCheck: $P(A \\text{ or } C) = 0.35 + 0.25 = 0.60$. ✓\n\n**Why the wrong answers are tempting:**\n• A: Confuses $P(B)$ with $P(C)$.\n• B: Confuses $P(B)$ with $P(A)$.\n• D: Uses $P(A \\text{ or } C)$ as $P(B)$.\n\n**Test Day Takeaway:** For mutually exclusive outcomes covering all possibilities, probabilities sum to 1.",
  skills: ["probability"]
},
{
  id: 13, type: "multiple-choice", difficulty: "medium",
  question: "The function $f(x) = a \\cdot b^x$ passes through the points $(0, 5)$ and $(2, 45)$. What is the value of $b$?",
  choices: [{ id: "A", text: "2" }, { id: "B", text: "3" }, { id: "C", text: "5" }, { id: "D", text: "9" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Finding Exponential Parameters from Points**\n\n**Choice B is correct.**\n\n**The Fast Way:** At $x = 0$: $f(0) = a = 5$. At $x = 2$: $5b^2 = 45$, so $b^2 = 9$, $b = 3$.\n\n**The Full Solution:**\nFrom $(0, 5)$: $f(0) = a \\cdot b^0 = a = 5$.\nFrom $(2, 45)$: $f(2) = 5 \\cdot b^2 = 45$.\n$b^2 = 9$\n$b = 3$ (since $b > 0$ for exponential functions).\n\nCheck: $f(x) = 5 \\cdot 3^x$. $f(2) = 5 \\cdot 9 = 45$. ✓\n\n**Why the wrong answers are tempting:**\n• A: Guesses $b = 2$ without verifying: $5 \\cdot 4 = 20 \neq 45$.\n• C: Uses $a = 5$ as $b$.\n• D: Uses $b^2 = 9$ but reports $9$ instead of $\\sqrt{9} = 3$.\n\n**Test Day Takeaway:** Use $(0, y_0)$ to find $a$, then substitute the other point to find $b$.",
  skills: ["exponential-functions"]
},
{
  id: 14, type: "multiple-choice", difficulty: "medium",
  question: "A function $f$ is defined as $f(x) = \\frac{2x + 6}{x - 1}$. For what value of $x$ is $f(x) = 0$?",
  choices: [{ id: "A", text: "$-3$" }, { id: "B", text: "$-1$" }, { id: "C", text: "$1$" }, { id: "D", text: "$3$" }],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Zeros of Rational Functions**\n\n**Choice A is correct.**\n\n**The Fast Way:** A fraction equals 0 when its numerator is 0 (and denominator is not). $2x + 6 = 0 \\Rightarrow x = -3$. Check: denominator $= -3 - 1 = -4 \neq 0$. ✓\n\n**The Full Solution:**\nSet $f(x) = 0$: $\\frac{2x + 6}{x - 1} = 0$.\nA fraction is zero when the numerator is zero: $2x + 6 = 0 \\Rightarrow x = -3$.\nVerify the denominator is nonzero: $-3 - 1 = -4 \neq 0$. ✓\n\n**Why the wrong answers are tempting:**\n• B: Confuses the zero with the sign of the answer.\n• C: This makes the denominator zero (undefined, not zero).\n• D: Solves $2x + 6 = x - 1$ instead of $2x + 6 = 0$.\n\n**Test Day Takeaway:** A rational function equals zero when the numerator is zero and the denominator is not zero.",
  skills: ["function-interpretation", "solving-equations"]
},
{
  id: 15, type: "multiple-choice", difficulty: "hard",
  question: "The function $f(x) = 250(0.85)^x$ models the amount of a medication (in mg) in a patient's bloodstream $x$ hours after administration. After how many complete hours will the amount first drop below 100 mg?\n\n(Use: $\\log(0.4) \\approx -0.3979$ and $\\log(0.85) \\approx -0.0706$.)",
  choices: [{ id: "A", text: "5" }, { id: "B", text: "6" }, { id: "C", text: "7" }, { id: "D", text: "8" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Solving Exponential Inequality**\n\n**Choice B is correct.**\n\n**The Fast Way:** $250(0.85)^x < 100 \\Rightarrow (0.85)^x < 0.4 \\Rightarrow x > \\frac{\\log(0.4)}{\\log(0.85)} \\approx \\frac{-0.3979}{-0.0706} \\approx 5.64$. First complete hour: 6.\n\n**The Full Solution:**\n$250(0.85)^x < 100$\n$(0.85)^x < 0.4$\n$x \\cdot \\log(0.85) < \\log(0.4)$\n\nSince $\\log(0.85) < 0$, dividing flips the inequality:\n$x > \\frac{\\log(0.4)}{\\log(0.85)} = \\frac{-0.3979}{-0.0706} \\approx 5.64$\n\nThe first complete hour after $5.64$ is $x = 6$.\n\n**Why the wrong answers are tempting:**\n• A: Rounds 5.64 down to 5, but at $t = 5$ the amount is still above 100.\n• C: Rounds up too aggressively.\n• D: Miscalculates the logarithm ratio.\n\n**Test Day Takeaway:** When dividing by a negative number (like $\\log$ of a value less than 1), flip the inequality sign. Then round up for \"first drops below.\"",
  skills: ["exponential-functions", "solving-equations"]
},
{
  id: 16, type: "multiple-choice", difficulty: "hard",
  question: "A box contains 6 red balls, 4 blue balls, and 5 green balls. Two balls are drawn at random without replacement. What is the probability that both balls are green?",
  choices: [{ id: "A", text: "$\\frac{1}{21}$" }, { id: "B", text: "$\\frac{2}{21}$" }, { id: "C", text: "$\\frac{25}{225}$" }, { id: "D", text: "$\\frac{1}{9}$" }],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Probability Without Replacement**\n\n**Choice B is correct.**\n\n**The Fast Way:** $P = \\frac{5}{15} \\times \\frac{4}{14} = \\frac{20}{210} = \\frac{2}{21}$.\n\n**The Full Solution:**\nTotal balls $= 6 + 4 + 5 = 15$.\n\n$P(\\text{1st green}) = \\frac{5}{15} = \\frac{1}{3}$.\n\nAfter drawing one green ball: 4 green left, 14 total left.\n$P(\\text{2nd green} \\mid \\text{1st green}) = \\frac{4}{14} = \\frac{2}{7}$.\n\n$P(\\text{both green}) = \\frac{1}{3} \\times \\frac{2}{7} = \\frac{2}{21}$.\n\n**Why the wrong answers are tempting:**\n• A: Uses $\\frac{5}{15} \\times \\frac{4}{15}$ (keeps 15 instead of 14) and simplifies incorrectly.\n• C: Uses $\\left(\\frac{5}{15}\\right)^2 = \\frac{25}{225}$ (with replacement).\n• D: Simplifies $\\frac{25}{225} = \\frac{1}{9}$ (still the with-replacement answer).\n\n**Test Day Takeaway:** Without replacement: after the first draw, reduce both the favorable count and the total by 1.",
  skills: ["probability"]
},
{
  id: 17, type: "fill-in", difficulty: "hard",
  question: "The function $f$ is defined by $f(x) = x^3 - 6x^2 + 11x - 6$. It is known that $f(1) = 0$. What is the sum of the other two zeros of $f$?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Polynomial Zeros via Factoring**\n\n**The answer is 5.**\n\n**The Fast Way:** Since $f(1) = 0$, $(x - 1)$ is a factor. Divide: $x^3 - 6x^2 + 11x - 6 = (x - 1)(x^2 - 5x + 6) = (x-1)(x-2)(x-3)$. The other zeros are 2 and 3. Sum $= 5$.\n\n**The Full Solution:**\nDivide $x^3 - 6x^2 + 11x - 6$ by $(x - 1)$ using synthetic division:\n$1 \\mid 1 \\quad -6 \\quad 11 \\quad -6$\n$\\quad \\mid \\quad 1 \\quad -5 \\quad 6$\n$\\quad 1 \\quad -5 \\quad 6 \\quad 0$\n\nQuotient: $x^2 - 5x + 6 = (x - 2)(x - 3)$.\n\nZeros: $x = 1, 2, 3$. The other two zeros sum to $2 + 3 = 5$.\n\n**Common Mistakes:**\n• Using the sum of ALL three zeros ($1 + 2 + 3 = 6$) instead of just the other two.\n• Vieta's gives sum of all roots $= 6$ (the negative of the $x^2$ coefficient), but we need $6 - 1 = 5$.\n\n**Test Day Takeaway:** If one root is known, divide it out to get a quadratic, then use Vieta's on the quotient.",
  skills: ["polynomial-operations", "factoring"]
},
{
  id: 18, type: "multiple-choice", difficulty: "hard",
  question: "A function $f$ satisfies $f(x) = f(x + 4)$ for all real numbers $x$. If $f(3) = 7$ and $f(5) = 2$, what is the value of $f(3) + f(11) + f(19)$?",
  choices: [{ id: "A", text: "9" }, { id: "B", text: "14" }, { id: "C", text: "16" }, { id: "D", text: "21" }],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Periodic Function**\n\n**Choice D is correct.**\n\n**The Fast Way:** $f(x) = f(x+4)$ means period $= 4$. So $f(11) = f(7) = f(3) = 7$ and $f(19) = f(15) = f(11) = f(7) = f(3) = 7$.\n\n**The Full Solution:**\nSince $f$ has period 4: $f(x) = f(x + 4)$ for all $x$.\n\n$f(3) = 7$ (given).\n$f(11) = f(11 - 4) = f(7) = f(7 - 4) = f(3) = 7$.\n$f(19) = f(19 - 4) = f(15) = f(15 - 4) = f(11) = 7$.\n\nSum $= 7 + 7 + 7 = 21$.\n\n**Why the wrong answers are tempting:**\n• A: Confuses $f(11)$ with $f(5) = 2$, getting $7 + 2 + ?$.\n• B: Gets two terms right ($7 + 7 = 14$) and stops.\n• C: Mixes up the period and gets one term wrong.\n\n**Test Day Takeaway:** For periodic functions, reduce the input modulo the period to find an equivalent known value.",
  skills: ["function-interpretation"]
},
{
  id: 19, type: "fill-in", difficulty: "hard",
  question: "A survey asks 200 people whether they own a cat, a dog, or both. The results show that 90 own a cat, 75 own a dog, and 140 own at least one of the two. How many people own both a cat and a dog?",
  correctAnswer: "25",
  explanation: "**SAT Pattern: Inclusion-Exclusion Principle**\n\n**The answer is 25.**\n\n**The Fast Way:** $|A \\cup B| = |A| + |B| - |A \\cap B|$, so $140 = 90 + 75 - |A \\cap B|$, giving $|A \\cap B| = 25$.\n\n**The Full Solution:**\nLet $C =$ cat owners, $D =$ dog owners.\nBy inclusion-exclusion:\n$|C \\cup D| = |C| + |D| - |C \\cap D|$\n$140 = 90 + 75 - |C \\cap D|$\n$140 = 165 - |C \\cap D|$\n$|C \\cap D| = 25$.\n\nCheck: Only cat $= 90 - 25 = 65$, only dog $= 75 - 25 = 50$, both $= 25$. Total $= 65 + 50 + 25 = 140$. ✓\n\n**Common Mistakes:**\n• Computing $200 - 140 = 60$ (people with neither, not both).\n• Adding $90 + 75 = 165$ and not subtracting.\n\n**Test Day Takeaway:** Inclusion-exclusion: $|A \\cup B| = |A| + |B| - |A \\cap B|$. Solve for the unknown.",
  skills: ["probability"]
},
{
  id: 20, type: "multiple-choice", difficulty: "hard",
  question: "The function $f(x) = ax^2 + bx + c$ has a vertex at $(3, -2)$ and passes through $(5, 6)$. What is the value of $a$?",
  choices: [{ id: "A", text: "$\\frac{1}{2}$" }, { id: "B", text: "$1$" }, { id: "C", text: "$2$" }, { id: "D", text: "$4$" }],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Finding Quadratic from Vertex and Point**\n\n**Choice C is correct.**\n\n**The Fast Way:** Vertex form: $f(x) = a(x - 3)^2 - 2$. Use $(5, 6)$: $6 = a(5-3)^2 - 2 = 4a - 2$, so $4a = 8$, $a = 2$.\n\n**The Full Solution:**\nVertex form of a quadratic: $f(x) = a(x - h)^2 + k$ where $(h, k)$ is the vertex.\n\n$f(x) = a(x - 3)^2 - 2$.\n\nSubstitute $(5, 6)$:\n$6 = a(5 - 3)^2 - 2$\n$6 = 4a - 2$\n$8 = 4a$\n$a = 2$.\n\n**Why the wrong answers are tempting:**\n• A: Solves $6 = a(4) - 2$ as $6 = 4a - 2 \\Rightarrow 4 = 4a \\Rightarrow a = 1$ (arithmetic error adding 2).\n• B: Similar arithmetic slip.\n• D: Computes $(5-3)^2 = 4$ but then $8/2 = 4$ (divides by 2 instead of 4).\n\n**Test Day Takeaway:** Use vertex form $a(x-h)^2 + k$ when the vertex is given. One additional point determines $a$.",
  skills: ["vertex-form", "quadratic-equations"]
},
{
  id: 21, type: "multiple-choice", difficulty: "hard",
  question: "Let $f(x) = 2^x$ and $g(x) = x^2 + 1$. How many real solutions does the equation $f(x) = g(x)$ have?",
  choices: [{ id: "A", text: "0" }, { id: "B", text: "1" }, { id: "C", text: "2" }, { id: "D", text: "3" }],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Intersection of Exponential and Quadratic**\n\n**Choice D is correct.**\n\n**The Fast Way:** Test integer values and analyze end behavior to count all crossings.\n\n**The Full Solution:**\nWe need to solve $2^x = x^2 + 1$. Test values:\n\n- $x = 0$: $2^0 = 1$ and $0^2 + 1 = 1$. ✓ (1st solution)\n- $x = 1$: $2^1 = 2$ and $1^2 + 1 = 2$. ✓ (2nd solution)\n- $x = 2$: $2^2 = 4$ and $2^2 + 1 = 5$. Not equal ($f < g$).\n- $x = 4$: $2^4 = 16$ and $4^2 + 1 = 17$. Not equal ($f < g$).\n- $x = 5$: $2^5 = 32$ and $5^2 + 1 = 26$. Not equal ($f > g$).\n\nSince $f(4) = 16 < 17 = g(4)$ and $f(5) = 32 > 26 = g(5)$, by the Intermediate Value Theorem there is a crossing between $x = 4$ and $x = 5$. (3rd solution)\n\nFor $x < 0$: $2^x < 1$ while $x^2 + 1 > 1$, so no crossings. For $x > 5$: $2^x$ dominates, so no more crossings.\n\nTotal: 3 solutions.\n\n**Why the wrong answers are tempting:**\n• A: Assumes exponential and quadratic never intersect.\n• B: Finds only one intersection.\n• C: Finds only the two integer solutions and misses the third between $x = 4$ and $x = 5$.\n\n**Test Day Takeaway:** Test integer values AND check end behavior. The exponential eventually dominates the quadratic, which can create additional intersections.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 22, type: "fill-in", difficulty: "hard",
  question: "A jar contains only red and blue marbles. The probability of drawing a red marble is $\\frac{3}{8}$. After 16 more red marbles are added (and no marbles removed), the probability of drawing a red marble becomes $\\frac{1}{2}$. How many marbles were originally in the jar?",
  correctAnswer: "64",
  explanation: "**SAT Pattern: Probability with Changed Conditions**\n\n**The answer is 64.**\n\n**The Fast Way:** Let $n$ = original total. Red $= \\frac{3n}{8}$. After adding 16 red: $\\frac{\\frac{3n}{8} + 16}{n + 16} = \\frac{1}{2}$.\n\n**The Full Solution:**\nOriginal: $n$ total marbles, $\\frac{3n}{8}$ red.\n\nAfter adding 16 red marbles:\n$\\frac{\\frac{3n}{8} + 16}{n + 16} = \\frac{1}{2}$\n\nCross multiply:\n$2\\left(\\frac{3n}{8} + 16\\right) = n + 16$\n$\\frac{3n}{4} + 32 = n + 16$\n$32 - 16 = n - \\frac{3n}{4}$\n$16 = \\frac{n}{4}$\n$n = 64$.\n\nCheck: Originally 64 marbles, 24 red. After adding 16: 80 marbles, 40 red. $\\frac{40}{80} = \\frac{1}{2}$. ✓\n\n**Common Mistakes:**\n• Setting up the equation with the wrong denominator.\n• Forgetting that both numerator and denominator change.\n\n**Test Day Takeaway:** When items are added to a group, update BOTH the favorable count and the total.",
  skills: ["probability", "solving-equations"]
}
      ]
    }
  ]
};

export default practiceTest7;
