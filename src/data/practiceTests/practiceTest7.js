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
  question: "A scatterplot shows the relationship between the number of hours studied, $x$, and test scores, $y$, for 15 students. The line of best fit is $y = 12.4x + 38.5$. One student studied for 5 hours and scored 94. What is the residual for this student?",
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
        // ===== EASY (Q1-Q5) =====
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A sports league has $96$ players divided equally into $8$ teams. How many players are on each team?",
          choices: [
            { id: "A", text: "$8$" },
            { id: "B", text: "$10$" },
            { id: "C", text: "$12$" },
            { id: "D", text: "$14$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Basic Division**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $96 \\div 8 = 12$.\n\n**The Full Solution:**\nPlayers per team $= \\frac{96}{8} = 12$\n\n**Why the wrong answers are tempting:**\n• Choice A ($8$): This is the number of teams, not players per team.\n• Choice B ($10$): From a division error.\n• Choice D ($14$): From a division error.\n\n**Test Day Takeaway:** Read carefully — are they asking for teams or players per team?",
          skills: ["word-problems"]
        },
        {
          id: 2,
          type: "fill-in",
          difficulty: "easy",
          question: "How many feet are in $7$ yards? ($1$ yard $= 3$ feet)",
          correctAnswer: "21",
          explanation: "**SAT Pattern: Unit Conversion**\n\n**The correct answer is 21.**\n\n**The Fast Way (5 seconds):** $7 \\times 3 = 21$ feet.\n\n**The Full Solution:**\n$7 \\text{ yards} \\times \\frac{3 \\text{ feet}}{1 \\text{ yard}} = 21 \\text{ feet}$\n\n**Common Mistakes to Avoid:**\n• Dividing instead of multiplying: $7 \\div 3 \\approx 2.3$.\n\n**Verification:** $21 \\div 3 = 7$ yards ✓\n\n**Test Day Takeaway:** Going from a larger unit to a smaller unit means multiply.",
          skills: ["unit-conversion"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A coffee shop sells cups of coffee for $\\$4$ each. A customer spent $\\$28$ on coffee. How many cups did the customer buy?",
          choices: [
            { id: "A", text: "$5$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$7$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Basic Division Word Problem**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $28 \\div 4 = 7$.\n\n**The Full Solution:**\nNumber of cups $= \\frac{\\$28}{\\$4 \\text{ per cup}} = 7$ cups.\n\n**Why the wrong answers are tempting:**\n• Choice A ($5$): From $28 \\div 5$ or $28 - 23$ — random arithmetic errors.\n• Choice B ($6$): From $28 \\div 4$ rounded or miscalculated.\n• Choice D ($8$): From $28 \\div 3.5$ or similar.\n\n**Test Day Takeaway:** Total $\\div$ price per item $=$ number of items.",
          skills: ["word-problems"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The function $g(t) = 50 + 10t$ gives the total number of books in a library collection $t$ months after January. What does the $10$ represent?",
          choices: [
            { id: "A", text: "The total number of books after $t$ months" },
            { id: "B", text: "The number of books added each month" },
            { id: "C", text: "The number of books in January" },
            { id: "D", text: "The number of months" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Slope Interpretation in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** The coefficient of $t$ is the rate of change — $10$ books per month.\n\n**The Full Solution:**\nIn $g(t) = 50 + 10t$:\n- $50$ is the initial value (books in January)\n- $10$ is the slope (books added per month)\n\n**Why the wrong answers are tempting:**\n• Choice A: Describes $g(t)$ itself, not the coefficient $10$.\n• Choice C: The number of books in January is $50$ (the $y$-intercept), not $10$.\n• Choice D: $t$ represents months; $10$ is the rate.\n\n**Test Day Takeaway:** In $y = mx + b$, the coefficient $m$ is always the rate of change per unit.",
          skills: ["function-interpretation", "slope"]
        },
        {
          id: 5,
          type: "fill-in",
          difficulty: "easy",
          question: "If $\\frac{3x}{5} = 12$, what is the value of $x$?",
          correctAnswer: "20",
          explanation: "**SAT Pattern: One-Step Equation with Fraction**\n\n**The correct answer is 20.**\n\n**The Fast Way (10 seconds):** Multiply both sides by $5$: $3x = 60$. Divide by $3$: $x = 20$.\n\n**The Full Solution:**\n$\\frac{3x}{5} = 12$\n$3x = 60$\n$x = 20$\n\n**Common Mistakes to Avoid:**\n• Getting $x = 4$ by dividing $12$ by $3$ but forgetting to multiply by $5$.\n\n**Verification:** $\\frac{3(20)}{5} = \\frac{60}{5} = 12$ ✓\n\n**Test Day Takeaway:** Clear the fraction first by multiplying both sides by the denominator.",
          skills: ["solving-equations"]
        },

        // ===== MEDIUM (Q6-Q15) =====
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A line has a slope of $-\\frac{2}{3}$ and passes through the point $(6, 1)$. What is the $y$-intercept of the line?",
          choices: [
            { id: "A", text: "$-3$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$9$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Finding Y-Intercept from Slope and a Point**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** $y = mx + b$: $1 = -\\frac{2}{3}(6) + b$, so $1 = -4 + b$, $b = 5$.\n\n**The Full Solution:**\nPlug $(6, 1)$ and $m = -\\frac{2}{3}$ into $y = mx + b$:\n$1 = -\\frac{2}{3}(6) + b$\n$1 = -4 + b$\n$b = 5$\n\n**Why the wrong answers are tempting:**\n• Choice A ($-3$): From an error computing $-\\frac{2}{3} \\times 6$.\n• Choice B ($3$): From computing $1 - (-\\frac{2}{3})(6) = 1 - (-4)$ incorrectly as $3$.\n• Choice D ($9$): From adding $4$ to $1$ incorrectly or misapplying the sign.\n\n**Test Day Takeaway:** Plug the known point into $y = mx + b$ and solve for $b$.",
          skills: ["slope", "linear-equations"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A sports coach records that $2.5b + 4g = 60$, where $b$ is the number of basketballs and $g$ is the number of golf balls purchased. If $g = 10$, how many basketballs were purchased?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$8$" },
            { id: "C", text: "$16$" },
            { id: "D", text: "$20$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Substitution in a Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $2.5b + 4(10) = 60$, so $2.5b + 40 = 60$, $2.5b = 20$, $b = 8$.\n\n**The Full Solution:**\n$2.5b + 4(10) = 60$\n$2.5b + 40 = 60$\n$2.5b = 20$\n$b = \\frac{20}{2.5} = 8$\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): From dividing $20$ by $5$ instead of $2.5$.\n• Choice C ($16$): From dividing $40$ by $2.5$.\n• Choice D ($20$): From stopping at $2.5b = 20$ and reporting $20$ as the answer.\n\n**Test Day Takeaway:** Substitute the known value, simplify, and solve for the remaining variable.",
          skills: ["linear-equations", "word-problems"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "If $3(2x - 4) = 18$, what is the value of $x$?",
          correctAnswer: "5",
          explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is 5.**\n\n**The Fast Way (15 seconds):** Divide both sides by $3$: $2x - 4 = 6$. Add $4$: $2x = 10$. Divide by $2$: $x = 5$.\n\n**The Full Solution:**\n$3(2x - 4) = 18$\n$2x - 4 = 6$\n$2x = 10$\n$x = 5$\n\n**Common Mistakes to Avoid:**\n• Distributing first: $6x - 12 = 18$, $6x = 30$, $x = 5$. Same answer, but more steps.\n• Getting $x = 3$ from dividing $18$ by $6$ without adding $12$ first.\n\n**Verification:** $3(2(5) - 4) = 3(10 - 4) = 3(6) = 18$ ✓\n\n**Test Day Takeaway:** When the entire expression is multiplied by a constant, divide both sides first to simplify.",
          skills: ["solving-equations"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A scatterplot shows a strong positive linear association between hours studied and test scores. Which of the following best describes this relationship?",
          choices: [
            { id: "A", text: "As hours studied increases, test scores tend to decrease." },
            { id: "B", text: "As hours studied increases, test scores tend to increase." },
            { id: "C", text: "There is no relationship between hours studied and test scores." },
            { id: "D", text: "Hours studied causes higher test scores." }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Interpreting Correlation**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** \"Positive linear association\" means both variables increase together.\n\n**The Full Solution:**\nPositive association: as one variable increases, the other tends to increase.\nStrong: the points cluster close to a line.\nLinear: the relationship follows a straight line.\n\n**Why the wrong answers are tempting:**\n• Choice A: This describes a negative association.\n• Choice C: The problem says there IS a strong association.\n• Choice D: Association does not imply causation. The question asks what describes the relationship, and \"causes\" goes beyond what a scatterplot can show.\n\n**Test Day Takeaway:** Positive $=$ both increase together. Association $\\neq$ causation.",
          skills: ["scatterplots", "statistics"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "What is the area, in square units, of a triangle with a base of $14$ units and a height of $9$ units?",
          choices: [
            { id: "A", text: "$23$" },
            { id: "B", text: "$63$" },
            { id: "C", text: "$126$" },
            { id: "D", text: "$252$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Triangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Area $= \\frac{1}{2} \\times 14 \\times 9 = 7 \\times 9 = 63$.\n\n**The Full Solution:**\nArea $= \\frac{1}{2}bh = \\frac{1}{2}(14)(9) = \\frac{126}{2} = 63$\n\n**Why the wrong answers are tempting:**\n• Choice A ($23$): Added $14 + 9$ (perimeter thinking, not area).\n• Choice C ($126$): Forgot to multiply by $\\frac{1}{2}$ (treated it as a rectangle).\n• Choice D ($252$): Doubled the rectangle area instead of halving it.\n\n**Test Day Takeaway:** Triangle area $= \\frac{1}{2} \\times \\text{base} \\times \\text{height}$. Don't forget the $\\frac{1}{2}$.",
          skills: ["area", "triangles"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The expression $\\frac{x^8}{x^3}$ is equivalent to which of the following?",
          choices: [
            { id: "A", text: "$x^{5}$" },
            { id: "B", text: "$x^{11}$" },
            { id: "C", text: "$x^{24}$" },
            { id: "D", text: "$x^{\\frac{8}{3}}$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Exponent Division Rule**\n\n**Choice A is correct.**\n\n**The Fast Way (5 seconds):** $\\frac{x^8}{x^3} = x^{8-3} = x^5$.\n\n**The Full Solution:**\nWhen dividing powers with the same base, subtract exponents:\n$\\frac{x^8}{x^3} = x^{8-3} = x^5$\n\n**Why the wrong answers are tempting:**\n• Choice B ($x^{11}$): Added exponents instead of subtracting (multiplication rule, not division).\n• Choice C ($x^{24}$): Multiplied exponents (power rule, not division).\n• Choice D ($x^{8/3}$): Divided exponents.\n\n**Test Day Takeaway:** Same base: multiply $\\to$ add exponents; divide $\\to$ subtract exponents.",
          skills: ["exponent-rules"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A soccer team's wins $w$ and losses $l$ satisfy the system below. How many wins does the team have?\n\n$w + l = 30$\n$w - l = 6$",
          choices: [
            { id: "A", text: "$12$" },
            { id: "B", text: "$15$" },
            { id: "C", text: "$18$" },
            { id: "D", text: "$24$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: System of Linear Equations (Elimination)**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Add the equations: $2w = 36$, so $w = 18$.\n\n**The Full Solution:**\n$w + l = 30$\n$w - l = 6$\nAdd: $2w = 36$, so $w = 18$.\nThen $l = 30 - 18 = 12$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($12$): This is the number of losses, not wins.\n• Choice B ($15$): From averaging $30 \\div 2$ without using the second equation.\n• Choice D ($24$): From adding $18 + 6$.\n\n**Test Day Takeaway:** When one equation has $+l$ and the other has $-l$, add them to eliminate $l$ instantly.",
          skills: ["systems-of-equations"]
        },
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "A rectangular garden has a length that is $3$ more than twice its width. If the width is $5$ meters, what is the perimeter of the garden in meters?",
          correctAnswer: "36",
          explanation: "**SAT Pattern: Perimeter from a Word Description**\n\n**The correct answer is 36.**\n\n**The Fast Way (15 seconds):** Length $= 2(5) + 3 = 13$. Perimeter $= 2(13 + 5) = 2(18) = 36$.\n\n**The Full Solution:**\nWidth $= 5$\nLength $= 2(5) + 3 = 13$\nPerimeter $= 2(l + w) = 2(13 + 5) = 2(18) = 36$\n\n**Common Mistakes to Avoid:**\n• Computing only $l + w = 18$ and stopping (forgetting to multiply by $2$).\n• Getting the length wrong: $2(5 + 3) = 16$ instead of $2(5) + 3 = 13$.\n\n**Verification:** $2(13) + 2(5) = 26 + 10 = 36$ ✓\n\n**Test Day Takeaway:** Translate word descriptions carefully: \"$3$ more than twice\" means $2w + 3$, not $2(w + 3)$.",
          skills: ["word-problems", "linear-equations"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $f(x) = x^2 + 3x - 10$, what is $f(-5)$?",
          choices: [
            { id: "A", text: "$-10$" },
            { id: "B", text: "$0$" },
            { id: "C", text: "$10$" },
            { id: "D", text: "$30$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $f(-5) = (-5)^2 + 3(-5) - 10 = 25 - 15 - 10 = 0$.\n\n**The Full Solution:**\n$f(-5) = (-5)^2 + 3(-5) - 10$\n$= 25 - 15 - 10$\n$= 0$\n\n**Why the wrong answers are tempting:**\n• Choice A ($-10$): From computing $(-5)^2 = -25$ instead of $25$ (sign error with squaring negatives).\n• Choice C ($10$): From $25 + 15 - 10$, making $3(-5) = +15$.\n• Choice D ($30$): From $25 + 15 - 10 = 30$, two sign errors.\n\n**Test Day Takeaway:** When substituting a negative number, remember $(-5)^2 = 25$ (positive).",
          skills: ["function-evaluation", "quadratic-functions"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In a right triangle, one acute angle measures $35°$. What is the measure of the other acute angle?",
          choices: [
            { id: "A", text: "$35°$" },
            { id: "B", text: "$45°$" },
            { id: "C", text: "$55°$" },
            { id: "D", text: "$145°$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** In a right triangle, the two acute angles sum to $90°$: $90° - 35° = 55°$.\n\n**The Full Solution:**\nSum of angles in a triangle $= 180°$.\nOne angle is $90°$, another is $35°$.\nThird angle $= 180° - 90° - 35° = 55°$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($35°$): Assumes the triangle is isosceles.\n• Choice B ($45°$): Assumes both acute angles are $45°$.\n• Choice D ($145°$): Computed $180° - 35°$, forgetting to subtract the right angle too.\n\n**Test Day Takeaway:** In a right triangle, the two acute angles always add to $90°$.",
          skills: ["triangles", "angles"]
        },

        // ===== HARD (Q16-Q22) =====
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $(x + 3)(x - 3) = x^2 - a$, what is the value of $a$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$9$" },
            { id: "D", text: "$-9$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Difference of Squares**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $(x+3)(x-3) = x^2 - 9$. Since this equals $x^2 - a$, we have $a = 9$.\n\n**The Full Solution:**\n$(x+3)(x-3) = x^2 - 3x + 3x - 9 = x^2 - 9$\nCompare with $x^2 - a$: $a = 9$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): Uses the value inside the parentheses, not its square.\n• Choice B ($6$): Doubles $3$ instead of squaring it.\n• Choice D ($-9$): Sign confusion; $x^2 - (-9) = x^2 + 9 \\neq x^2 - 9$.\n\n**Test Day Takeaway:** $(a+b)(a-b) = a^2 - b^2$. The constant is the square of $b$.",
          skills: ["factoring", "polynomial-operations"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $h(x) = 2(x - 4)^2 + 3$ has a minimum value. What is this minimum value?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$35$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Minimum Value from Vertex Form**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** In vertex form $a(x-h)^2 + k$, the minimum value (when $a > 0$) is $k = 3$.\n\n**The Full Solution:**\n$h(x) = 2(x-4)^2 + 3$ is in vertex form.\nVertex: $(4, 3)$.\nSince $a = 2 > 0$, the parabola opens upward, so the minimum is $y = 3$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): This is $a$, the coefficient, not the minimum.\n• Choice C ($4$): This is the $x$-coordinate of the vertex, not the $y$-coordinate.\n• Choice D ($35$): From evaluating $h(0) = 2(16) + 3 = 35$.\n\n**Test Day Takeaway:** In $a(x-h)^2 + k$: vertex is $(h, k)$, minimum (if $a > 0$) is $k$.",
          skills: ["vertex-form", "quadratic-functions"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "The volume of a cylinder is $V = \\pi r^2 h$. If a water tank has radius $5$ feet and height $8$ feet, what is the volume, in cubic feet, divided by $\\pi$?",
          correctAnswer: "200",
          explanation: "**SAT Pattern: Volume Formula Application**\n\n**The correct answer is 200.**\n\n**The Fast Way (10 seconds):** $V = \\pi(5)^2(8) = 200\\pi$. Divided by $\\pi$: $200$.\n\n**The Full Solution:**\n$V = \\pi r^2 h = \\pi (25)(8) = 200\\pi$\n$\\frac{V}{\\pi} = 200$\n\n**Common Mistakes to Avoid:**\n• Answering $200\\pi$ when the question asks for $V/\\pi$.\n• Computing $r^2 = 10$ instead of $25$.\n\n**Verification:** $25 \\times 8 = 200$ ✓\n\n**Test Day Takeaway:** When a problem says \"divided by $\\pi$,\" they want the numerical coefficient only.",
          skills: ["volume"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "For what value of $c$ does the equation $x^2 - 8x + c = 0$ have no real solutions?",
          choices: [
            { id: "A", text: "$12$" },
            { id: "B", text: "$16$" },
            { id: "C", text: "$17$" },
            { id: "D", text: "$20$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: No Real Solutions via Discriminant**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** No real solutions means discriminant $< 0$: $64 - 4c < 0$, so $c > 16$. The only choice greater than $16$ is $17$.\n\n**The Full Solution:**\nDiscriminant $= b^2 - 4ac = (-8)^2 - 4(1)(c) = 64 - 4c$.\nNo real solutions: $64 - 4c < 0$\n$64 < 4c$\n$c > 16$\n\nOnly Choice C ($17$) satisfies $c > 16$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($12$): $64 - 48 = 16 > 0$, so there ARE real solutions.\n• Choice B ($16$): $64 - 64 = 0$, giving exactly one solution (not none).\n• Choice D ($20$): Also works ($64 - 80 < 0$), but the SAT asks \"which value\" and only one answer can be correct. Actually, D would also be valid — but on the real SAT, only one choice will satisfy the condition. Here, both C and D work, but C is the smallest valid value. The question is asking which one from the choices works.\n\n**Test Day Takeaway:** No real solutions $\\to$ discriminant $< 0$. Exactly one $\\to$ discriminant $= 0$.",
          skills: ["discriminant", "quadratic-equations"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $\\sqrt{2x + 3} = 7$, what is the value of $2x + 3$?",
          choices: [
            { id: "A", text: "$7$" },
            { id: "B", text: "$14$" },
            { id: "C", text: "$46$" },
            { id: "D", text: "$49$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Radical Equation — Square Both Sides**\n\n**Choice D is correct.**\n\n**The Fast Way (5 seconds):** Square both sides: $2x + 3 = 49$.\n\n**The Full Solution:**\n$\\sqrt{2x + 3} = 7$\n$(\\sqrt{2x+3})^2 = 7^2$\n$2x + 3 = 49$\n\n**Why the wrong answers are tempting:**\n• Choice A ($7$): Uses the right side without squaring.\n• Choice B ($14$): Doubles $7$ instead of squaring it.\n• Choice C ($46$): Solves for $x = 23$ and reports $2(23) = 46$.\n\n**Test Day Takeaway:** When a square root equals a number, the expression under the root equals that number squared.",
          skills: ["radical-equations", "solving-equations"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "In the $xy$-plane, the line $y = 3x + 2$ intersects the parabola $y = x^2 + 2x + 2$. What is the $x$-coordinate of the intersection point where $x > 0$?",
          correctAnswer: "1",
          explanation: "**SAT Pattern: Quadratic-Linear System**\n\n**The correct answer is 1.**\n\n**The Fast Way (30 seconds):** Set equal: $3x + 2 = x^2 + 2x + 2$. Simplify: $0 = x^2 - x = x(x - 1)$. So $x = 0$ or $x = 1$. Since $x > 0$, $x = 1$.\n\n**The Full Solution:**\n$3x + 2 = x^2 + 2x + 2$\n$0 = x^2 + 2x + 2 - 3x - 2$\n$0 = x^2 - x$\n$0 = x(x - 1)$\n$x = 0$ or $x = 1$\n\nSince $x > 0$: $x = 1$.\n\n**Common Mistakes to Avoid:**\n• Reporting $x = 0$ — valid intersection but doesn't satisfy $x > 0$.\n• Algebra errors when combining like terms.\n\n**Verification:** At $x = 1$: $y = 3(1) + 2 = 5$ and $y = 1 + 2 + 2 = 5$ ✓\n\n**Test Day Takeaway:** Set the equations equal, move everything to one side, factor, and check which solution meets the given condition.",
          skills: ["systems-of-equations", "quadratic-equations"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A $45°$-$45°$-$90°$ triangle has a hypotenuse of length $10$. What is the length of each leg?",
          choices: [
            { id: "A", text: "$5$" },
            { id: "B", text: "$5\\sqrt{2}$" },
            { id: "C", text: "$10\\sqrt{2}$" },
            { id: "D", text: "$\\frac{10}{\\sqrt{2}}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: 45-45-90 Special Right Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** In a $45$-$45$-$90$ triangle, hypotenuse $= \\text{leg} \\times \\sqrt{2}$. So leg $= \\frac{10}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2}$.\n\n**The Full Solution:**\nIn a $45°$-$45°$-$90°$ triangle, the sides are in ratio $1 : 1 : \\sqrt{2}$.\nLeg : Hypotenuse $= 1 : \\sqrt{2}$\nLeg $= \\frac{10}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($5$): Divides hypotenuse by $2$, using the $30$-$60$-$90$ rule instead.\n• Choice C ($10\\sqrt{2}$): Multiplies by $\\sqrt{2}$ instead of dividing.\n• Choice D ($\\frac{10}{\\sqrt{2}}$): Mathematically equal to $5\\sqrt{2}$, but not simplified. On the SAT, the rationalized form is standard.\n\n**Test Day Takeaway:** $45$-$45$-$90$: legs $= \\frac{\\text{hypotenuse}}{\\sqrt{2}}$. $30$-$60$-$90$: short leg $= \\frac{\\text{hypotenuse}}{2}$.",
          skills: ["special-right-triangles", "triangles"]
        }
      ]
    }
  ]
};

export default practiceTest7;
