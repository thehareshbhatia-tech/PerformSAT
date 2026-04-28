// Practice Test 7 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Round-6 propagation: M1 lifted to band-3 ceiling on easy items, domain
// rebalanced to 7/6/5/4. M2 hardened to 0E/6M/16H with band-7 ceilings on
// most hard items and concept-fusion items added at the top end.

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
  band: 3,
  question: "If $5b - 14 = 6$, what is the value of $5b + 14$?",
  choices: [
    // distractor: stops one step early — solves for b = 4 and reports it
    { id: "A", text: "$4$" },
    // distractor: applies inverse operation — subtracts 14 instead of adding
    { id: "B", text: "$6$" },
    { id: "C", text: "$34$" },
    // distractor: doubles the right side instead of using the +28 shift
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $5b + 14$ is exactly $28$ more than $5b - 14$. So $5b + 14 = 6 + 28 = 34$.\n\n**The Full Solution:**\n$5b - 14 = 6 \\Rightarrow 5b = 20 \\Rightarrow b = 4$.\nThen $5b + 14 = 5(4) + 14 = 20 + 14 = 34$.\n\nShortcut: notice the requested expression differs from the given by exactly $+28$ (since $14 - (-14) = 28$). So the answer is $6 + 28 = 34$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — solves for $b = 4$ and reports the variable's value instead of $5b + 14$.\n* Choice B: \"applies the inverse operation\" — subtracts $14$ from $20$ to get $6$.\n* Choice D: \"wrong base\" — doubles the right side to $12$ without using the shift.\n\n**Test Day Takeaway:** When the question asks for an expression in $x$ instead of $x$ itself, look for a shortcut: the requested expression often differs from the given by a fixed constant.",
  skills: ["solving-equations", "word-problems"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $\\dfrac{3x}{14} = \\dfrac{27}{42}$, what is the value of $x + 4$?",
  choices: [
    { id: "A", text: "$7$" },
    // distractor: stops at x = 3 (forgets the +4 final step)
    { id: "B", text: "$3$" },
    // distractor: subtracts 4 instead of adding
    { id: "C", text: "$-1$" },
    // distractor: leaves the answer at 3x = 9 instead of x
    { id: "D", text: "$9$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Simplify $\\dfrac{27}{42} = \\dfrac{9}{14}$. So $\\dfrac{3x}{14} = \\dfrac{9}{14}$, giving $3x = 9$ and $x = 3$. Then $x + 4 = 7$.\n\n**The Full Solution:**\nCross-multiply: $3x \\cdot 42 = 27 \\cdot 14 \\Rightarrow 126x = 378 \\Rightarrow x = 3$.\n\nThe question asks for $x + 4$, not $x$: $3 + 4 = 7$.\n\nVerification: $\\dfrac{3(3)}{14} = \\dfrac{9}{14} = \\dfrac{27}{42}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — solves for $x$ correctly but forgets to add $4$.\n* Choice C: \"applies the inverse operation\" — subtracts $4$ from $x$ instead of adding.\n* Choice D: \"wrong base\" — keeps $3x = 9$ instead of solving for $x$.\n\n**Test Day Takeaway:** Re-read the last sentence before answering. The question often asks for a related quantity, not the variable itself.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The function $g(t) = 250 - 15t$ models the amount of water, in gallons, remaining in a tank $t$ minutes after a drain is opened. What does the number $15$ represent in this context?",
  choices: [
    { id: "A", text: "The tank loses $15$ gallons each minute." },
    // distractor: confuses 15 with the initial value (which is 250)
    { id: "B", text: "The tank starts with $15$ gallons." },
    // distractor: treats 15 as a time value rather than a rate
    { id: "C", text: "After $15$ minutes, the tank is empty." },
    // distractor: confuses the rate with a maximum capacity
    { id: "D", text: "The tank holds a maximum of $15$ gallons." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** In $g(t) = 250 - 15t$, the coefficient of $t$ is $-15$, representing the rate of change: $15$ gallons lost per minute.\n\n**The Full Solution:**\nThis is in the form $g(t) = b + mt$ where $m = -15$ and $b = 250$.\nThe slope $m = -15$ means the water decreases by $15$ gallons for each additional minute.\nThe initial amount $b = 250$ is the starting volume.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — confuses the rate $15$ with the starting amount, which is $250$.\n* Choice C: \"applies the inverse operation\" — $\\frac{250}{15} \\approx 16.7$ minutes to empty, so $15$ minutes is not when it empties.\n* Choice D: \"wrong base\" — confuses a per-minute rate with a maximum capacity.\n\n**Test Day Takeaway:** In $f(x) = b + mx$, the coefficient of $x$ is the rate of change per unit; the constant is the initial value.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A delivery service charges a flat fee of $\\$4.50$ plus $\\$1.20$ per mile driven. Which expression represents the total cost, in dollars, for a delivery of $m$ miles?",
  choices: [
    // distractor: swaps the flat fee and per-mile rate
    { id: "A", text: "${}1.20 + 4.50m$" },
    { id: "B", text: "${}4.50 + 1.20m$" },
    // distractor: adds the two numbers and multiplies by m (treats flat fee as per-mile)
    { id: "C", text: "$5.70m$" },
    // distractor: same swap as A — coefficient and constant interchanged
    { id: "D", text: "$4.50m + 1.20$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Word-to-Expression Translation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Flat fee $=$ constant $= 4.50$. Per-mile rate $=$ coefficient of $m = 1.20$. Total $= 4.50 + 1.20m$.\n\n**The Full Solution:**\nThe flat fee of $\\$4.50$ does not depend on miles, so it is the constant term.\nThe $\\$1.20$ per mile charge means we multiply $1.20$ by $m$.\nTotal cost $= 4.50 + 1.20m$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — swaps the flat fee and per-mile rate.\n* Choice C: \"wrong base\" — adds the two numbers and multiplies by $m$, treating the flat fee as a per-mile charge.\n* Choice D: \"applies the inverse operation\" — same coefficient/constant swap as A.\n\n**Test Day Takeaway:** \"Flat fee\" $=$ constant term. \"Per unit\" $=$ coefficient of the variable.",
  skills: ["linear-functions", "word-problems"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A theater sold $312$ tickets for a Friday show, which was $40\\%$ of all tickets sold for that weekend. How many tickets were sold for the entire weekend?",
  choices: [
    // distractor: applies percent forward — $312 \cdot 0.40 = 124.8 \approx 125$
    { id: "A", text: "$125$" },
    // distractor: divides by complement $0.60$ — $\\frac{312}{0.60} = 520$
    { id: "B", text: "$520$" },
    { id: "C", text: "$780$" },
    // distractor: divides by $0.04$ instead of $0.40$ (decimal slip)
    { id: "D", text: "$7{,}800$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Total $\\times 0.40 = 312$, so total $= \\frac{312}{0.40} = 780$.\n\n**The Full Solution:**\nLet $T$ be the total weekend tickets. Then ${}0.40 \\cdot T = 312$.\nDivide both sides by $0.40$: $T = \\dfrac{312}{0.40} = 780$.\n\nVerification: $40\\%$ of $780 = 0.40 \\cdot 780 = 312$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — multiplies $312 \\cdot 0.40 = 124.8$ instead of dividing.\n* Choice B: \"wrong base\" — divides by the complement $0.60$ (treats $312$ as the non-Friday count).\n* Choice D: \"off-by-one / decimal slip\" — divides by $0.04$ instead of $0.40$.\n\n**Test Day Takeaway:** When a percent of an unknown total is given, divide the part by the percent (as a decimal) to recover the whole.",
  skills: ["percents"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Which of the following systems of equations has no solution?",
  choices: [
    { id: "A", text: "$y = 3x + 5$ and $y = 3x - 2$" },
    // distractor: opposite slopes look like they "never meet" but actually intersect at (0, 5)
    { id: "B", text: "$y = 3x + 5$ and $y = -3x + 5$" },
    // distractor: identical lines — infinitely many solutions, not no solution
    { id: "C", text: "$y = 3x + 5$ and $2y = 6x + 10$" },
    // distractor: different slopes guarantee one intersection (off-by-one trap)
    { id: "D", text: "$y = 3x + 5$ and $y = 5x + 3$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** No solution $\\iff$ parallel lines $\\iff$ same slope, different $y$-intercepts. Choice A: slopes both $3$, intercepts $5 \\neq -2$.\n\n**The Full Solution:**\nA system has no solution exactly when the two lines are parallel (same slope, different intercept).\n* A: slopes $3 = 3$, intercepts $5 \\neq -2 \\Rightarrow$ parallel, no solution \\checkmark.\n* B: slopes $3 \\neq -3 \\Rightarrow$ lines intersect, one solution.\n* C: $2y = 6x + 10 \\Rightarrow y = 3x + 5$, identical to the first $\\Rightarrow$ infinitely many solutions.\n* D: slopes $3 \\neq 5 \\Rightarrow$ lines intersect, one solution.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — opposite slopes look like they never meet, but they intersect at $(0, 5)$.\n* Choice C: \"applies the inverse operation\" — same line means infinitely many solutions, not no solution.\n* Choice D: \"off-by-one\" — different slopes always give one intersection.\n\n**Test Day Takeaway:** No solution $\\iff$ same slope, different intercept. Infinitely many $\\iff$ identical equations after simplification.",
  skills: ["systems-of-equations", "linear-functions"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $5(2x - 3) - 4(x + 7) = ax + b$ is true for all values of $x$, what is the value of $b$?",
  correctAnswer: "-43",
  explanation: "**SAT Pattern: Matching Coefficients**\n\n**The correct answer is $-43$.**\n\n**The Fast Way (~20s):** Expand the left: $5(2x-3) - 4(x+7) = 10x - 15 - 4x - 28 = 6x - 43$. Match: $a = 6$, $b = -43$.\n\n**The Full Solution:**\n$5(2x - 3) - 4(x + 7) = 10x - 15 - 4x - 28 = 6x - 43$.\nSince this equals $ax + b$ for all $x$:\n$a = 6$ and $b = -43$.\n\n**Common Mistakes to Avoid:**\n* Forgetting to distribute the negative sign: $-4(x+7) = -4x - 28$, not $-4x + 28$.\n* Sign error on $-15 - 28$: the answer is $-43$, not $-13$.\n\n**Verification:** $6x - 43$ matches $ax + b$ when $b = -43$ \\checkmark.\n\n**Test Day Takeaway:** When two algebraic expressions are equal for ALL $x$, match the coefficients term-by-term: like-power coefficients must agree.",
  skills: ["solving-equations", "polynomial-operations"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The function $f$ is defined by $f(x) = 3(0.85)^x$. What is the best interpretation of $f(4) \\approx 1.57$?",
  choices: [
    { id: "A", text: "After $4$ time periods, the quantity is approximately $1.57$." },
    // distractor: misreads as a constant linear decrease
    { id: "B", text: "The quantity decreases by $1.57$ each time period." },
    // distractor: reverses the input and output (the inverse function)
    { id: "C", text: "When the quantity is $4$, the time is approximately $1.57$." },
    // distractor: misinterprets the base 0.85 as an across-period decay rate
    { id: "D", text: "The quantity loses $85\\%$ of its value every $4$ time periods." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $f(4) \\approx 1.57$ means: when the input $x = 4$ (time periods), the output is approximately $1.57$.\n\n**The Full Solution:**\n$f(x) = 3(0.85)^x$ is exponential decay.\n$f(4) = 3(0.85)^4 \\approx 3(0.522) \\approx 1.57$.\nThis means after $4$ time periods, the quantity has decayed from its initial value $3$ to about $1.57$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — exponential functions do not change by a constant amount each period (that would be linear).\n* Choice C: \"applies the inverse operation\" — reverses the input/output relationship.\n* Choice D: \"off-by-one\" — the base $0.85$ means the quantity retains $85\\%$ each period (loses $15\\%$), not loses $85\\%$ every $4$ periods.\n\n**Test Day Takeaway:** $f(a) = b$ means \"when the input is $a$, the output is $b$.\" Always check whether the question swaps inputs and outputs.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Line $p$ passes through the points $(2, -1)$ and $(6, 7)$. Line $q$ is perpendicular to line $p$ and passes through the point $(4, 3)$. What is the $y$-intercept of line $q$?",
  choices: [
    { id: "A", text: "$5$" },
    // distractor: uses the slope of p (parallel, not perpendicular)
    { id: "B", text: "$1$" },
    // distractor: arithmetic error in the point-slope intercept step
    { id: "C", text: "$\\dfrac{7}{2}$" },
    // distractor: confuses the x-coordinate of the given point with the y-intercept
    { id: "D", text: "$4$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Slope of $p$: $\\dfrac{7 - (-1)}{6 - 2} = \\dfrac{8}{4} = 2$. Perpendicular slope $= -\\dfrac{1}{2}$. Line $q$: $y - 3 = -\\dfrac{1}{2}(x - 4)$, so $y = -\\dfrac{1}{2}x + 2 + 3 = -\\dfrac{1}{2}x + 5$. Intercept $= 5$.\n\n**The Full Solution:**\nStep 1: slope of $p = \\dfrac{7 - (-1)}{6 - 2} = \\dfrac{8}{4} = 2$.\nStep 2: perpendicular slope $= -\\dfrac{1}{2}$.\nStep 3: with $(4, 3)$ and slope $-\\dfrac{1}{2}$:\n$y - 3 = -\\dfrac{1}{2}(x - 4) \\Rightarrow y = -\\dfrac{1}{2}x + 2 + 3 = -\\dfrac{1}{2}x + 5$.\n$y$-intercept $= 5$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — uses the slope of $p$ itself (parallel slope $= 2$, not perpendicular).\n* Choice C: \"off-by-one\" — arithmetic slip in the point-slope step.\n* Choice D: \"wrong base\" — uses the $x$-coordinate $4$ of the given point as the intercept.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals: flip the fraction AND change the sign.",
  skills: ["slope", "coordinate-geometry", "linear-functions"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A population of bacteria doubles every $3$ hours. If the population starts at $500$, which expression gives the population after $t$ hours?",
  choices: [
    // distractor: uses 3t in the exponent — would triple the doubling rate per hour
    { id: "A", text: "$500(2)^{3t}$" },
    { id: "B", text: "$500(2)^{\\frac{t}{3}}$" },
    // distractor: swaps the base (3) and the doubling factor (2)
    { id: "C", text: "$500(3)^{\\frac{t}{2}}$" },
    // distractor: combines 500 and 2 into the base — incorrectly merges initial value with rate
    { id: "D", text: "$1000^{\\frac{t}{3}}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"Doubles every $3$ hours\" means base $= 2$ and exponent $= \\dfrac{t}{3}$ so the exponent equals $1$ when $t = 3$. Initial value $= 500$.\n\n**The Full Solution:**\nGeneral doubling-period model: $P(t) = P_0 \\cdot 2^{\\frac{t}{d}}$, where $P_0 = 500$ and $d = 3$.\nSo $P(t) = 500(2)^{\\frac{t}{3}}$.\n\nCheck: $P(3) = 500(2)^1 = 1000$ (doubled) \\checkmark; $P(6) = 500(2)^2 = 2000$ (doubled again) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses $3t$ instead of $\\dfrac{t}{3}$, which would mean tripling per hour.\n* Choice C: \"wrong base\" — swaps the doubling factor $2$ with the period $3$.\n* Choice D: \"off-by-one\" — combines the initial value $500$ and the base $2$ into a single base of $1000$.\n\n**Test Day Takeaway:** \"Doubles every $d$ units\" $\\Rightarrow$ base $= 2$, exponent $= \\dfrac{t}{d}$.",
  skills: ["exponential-functions"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "\n\n| | Prefers Coffee | Prefers Tea | Total |\n|---|---|---|---|\n| Under 30 | $45$ | $75$ | $120$ |\n| 30 or older | $90$ | $40$ | $130$ |\n| Total | $135$ | $115$ | $250$ |\n\nBased on the two-way table above, what fraction of people who prefer tea are under $30$?",
  choices: [
    // distractor: uses the grand total (250) as denominator instead of the tea total
    { id: "A", text: "$\\dfrac{75}{250}$" },
    // distractor: uses the Under 30 row total (120) as denominator
    { id: "B", text: "$\\dfrac{75}{120}$" },
    { id: "C", text: "$\\dfrac{75}{115}$" },
    // distractor: gives the marginal P(tea) = 115/250 instead of the conditional
    { id: "D", text: "$\\dfrac{115}{250}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** \"Of people who prefer tea\" $\\Rightarrow$ restrict to the Tea column (total $115$). Under-30 who prefer tea $= 75$. Fraction $= \\dfrac{75}{115}$.\n\n**The Full Solution:**\nThe condition is \"prefers tea.\" The denominator is the tea-column total: $115$.\nOf those, the number under $30$ is $75$.\nFraction $= \\dfrac{75}{115}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses the grand total $250$ instead of the tea total.\n* Choice B: \"wrong base\" — uses the Under-30 row total $120$ as the denominator.\n* Choice D: \"stops one step early\" — gives the marginal probability of preferring tea, not the conditional.\n\n**Test Day Takeaway:** \"Of those who [condition]\" means the denominator is that row or column total, not the grand total.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A researcher models the relationship between the number of hours studied, $x$, and test scores, $y$, for $15$ students using the equation $y = 12.4x + 38.5$. One student studied for $5$ hours and scored $94$. What is the residual for this student?",
  choices: [
    { id: "A", text: "$-6.5$" },
    // distractor: applies the inverse operation — predicted minus actual instead of actual minus predicted
    { id: "B", text: "$6.5$" },
    // distractor: arithmetic error in the predicted value
    { id: "C", text: "$-5.5$" },
    // distractor: combines both errors — sign flip and arithmetic slip
    { id: "D", text: "$5.5$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Residual**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Predicted $= 12.4(5) + 38.5 = 62 + 38.5 = 100.5$. Residual $=$ actual $-$ predicted $= 94 - 100.5 = -6.5$.\n\n**The Full Solution:**\nStep 1: predicted value at $x = 5$:\n$y = 12.4(5) + 38.5 = 62.0 + 38.5 = 100.5$.\nStep 2: residual $=$ actual $-$ predicted:\n$94 - 100.5 = -6.5$.\nThe negative residual means the actual score is below the predicted score (point lies below the line).\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — reverses the subtraction (predicted $-$ actual).\n* Choice C: \"off-by-one\" — arithmetic error in the predicted-value step.\n* Choice D: \"applies the inverse operation\" — combines both errors at once.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted. A negative residual means the data point is below the regression line.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "medium",
  band: 4,
  question: "A survey found that $36$ out of $240$ households in a neighborhood have solar panels. Based on this rate, how many households out of $1{,}500$ in the entire town would be expected to have solar panels?",
  correctAnswer: "225",
  explanation: "**SAT Pattern: Proportion Solving**\n\n**The correct answer is $225$.**\n\n**The Fast Way (~15s):** Rate $= \\dfrac{36}{240} = \\dfrac{3}{20}$. Expected: $\\dfrac{3}{20} \\cdot 1{,}500 = 225$.\n\n**The Full Solution:**\nRate of households with solar panels: $\\dfrac{36}{240} = \\dfrac{3}{20} = 0.15$.\nExpected count out of $1{,}500$: $\\dfrac{3}{20} \\cdot 1{,}500 = \\dfrac{4{,}500}{20} = 225$.\n\n**Common Mistakes to Avoid:**\n* Setting up the proportion in the wrong direction.\n* Using $36 \\cdot \\frac{1{,}500}{240}$ but stopping at the cross-multiplied numerator.\n\n**Verification:** $\\dfrac{225}{1{,}500} = \\dfrac{3}{20} = \\dfrac{36}{240}$ \\checkmark.\n\n**Test Day Takeaway:** Survey-to-population: keep the same rate. Cross-multiply only after writing $\\dfrac{\\text{part}}{\\text{whole}} = \\dfrac{\\text{part}}{\\text{whole}}$.",
  skills: ["ratios", "percents"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the right triangle shown, one of the acute angles is $\\theta$ and $\\sin(\\theta) = \\dfrac{9}{41}$. What is the value of $\\cos(\\theta)$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["θ", "", ""],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: stops one step early — reuses sin(θ) value as cos(θ)
    { id: "A", text: "$\\dfrac{9}{41}$" },
    { id: "B", text: "$\\dfrac{40}{41}$" },
    // distractor: applies inverse operation — gives 1/sin(θ) = 41/9 (csc instead of cos)
    { id: "C", text: "$\\dfrac{41}{9}$" },
    // distractor: wrong base — gives tan(θ) = 9/40 (opposite/adjacent)
    { id: "D", text: "$\\dfrac{9}{40}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $\\sin(\\theta) = \\dfrac{9}{41}$ implies opposite $= 9$, hypotenuse $= 41$. Adjacent $= \\sqrt{41^2 - 9^2} = \\sqrt{1600} = 40$. So $\\cos(\\theta) = \\dfrac{40}{41}$.\n\n**The Full Solution:**\n$\\sin(\\theta) = \\dfrac{\\text{opposite}}{\\text{hypotenuse}} = \\dfrac{9}{41}$, so opposite $= 9$ and hypotenuse $= 41$.\n\nBy the Pythagorean theorem, adjacent $= \\sqrt{41^2 - 9^2} = \\sqrt{1681 - 81} = \\sqrt{1600} = 40$.\n\n$\\cos(\\theta) = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}} = \\dfrac{40}{41}$.\n\nVerification: $\\sin^2 + \\cos^2 = \\dfrac{81}{1681} + \\dfrac{1600}{1681} = \\dfrac{1681}{1681} = 1$ \\checkmark. ($9$-$40$-$41$ is a Pythagorean triple.)\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reuses the value of $\\sin(\\theta)$ as $\\cos(\\theta)$.\n* Choice C: \"applies the inverse operation\" — gives $\\dfrac{1}{\\sin(\\theta)} = \\csc(\\theta)$, not $\\cos(\\theta)$.\n* Choice D: \"wrong base\" — gives $\\dfrac{\\text{opposite}}{\\text{adjacent}} = \\tan(\\theta)$.\n\n**Test Day Takeaway:** Memorize the common Pythagorean triples ($3$-$4$-$5$, $5$-$12$-$13$, $7$-$24$-$25$, $9$-$40$-$41$). When sine is given, use Pythagoras for the third side, then form cosine from adjacent over hypotenuse.",
  skills: ["trigonometry", "triangles", "right-triangles"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $a^{\\frac{3}{4}} = 8$ where $a > 0$, what is the value of $a^{\\frac{3}{2}}$?",
  choices: [
    // distractor: applies inverse operation — multiplies 2 * 8 = 16 instead of squaring
    { id: "A", text: "$16$" },
    { id: "B", text: "$64$" },
    // distractor: off-by-one — exponent manipulation slip giving 32 = 2^5
    { id: "C", text: "$32$" },
    // distractor: wrong base — uses 8^3 instead of 8^2
    { id: "D", text: "$512$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $a^{\\frac{3}{2}} = (a^{\\frac{3}{4}})^2 = 8^2 = 64$.\n\n**The Full Solution:**\nGiven $a^{\\frac{3}{4}} = 8$, we want $a^{\\frac{3}{2}}$.\nNote that $\\dfrac{3}{2} = 2 \\cdot \\dfrac{3}{4}$, so $a^{\\frac{3}{2}} = (a^{\\frac{3}{4}})^2$.\nSubstitute: $(8)^2 = 64$.\n\nVerification: $a^{\\frac{3}{4}} = 8 \\Rightarrow a = 8^{\\frac{4}{3}} = (2^3)^{\\frac{4}{3}} = 2^4 = 16$. Then $a^{\\frac{3}{2}} = 16^{\\frac{3}{2}} = 4^3 = 64$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — multiplies $2 \\cdot 8 = 16$ instead of squaring.\n* Choice C: \"off-by-one\" — exponent-manipulation slip ($32 = 2^5$ has no clean derivation here).\n* Choice D: \"wrong base\" — computes $8^3$ instead of $8^2$.\n\n**Test Day Takeaway:** When you know $a^n$ and need $a^m$, write $m = k \\cdot n$ so $a^m = (a^n)^k$. Avoid solving for $a$ directly when you can chain exponents.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A data set consists of $10$ positive integers. Nine of the integers are listed below.\n\n$25, 28, 30, 32, 34, 35, 38, 40, 42$\n\nThe mean of all $10$ integers in the data set is $35$. What is the value of the tenth integer?",
  correctAnswer: "46",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $46$.**\n\n**The Fast Way (~25s):** Total sum $= 10 \\cdot 35 = 350$. Sum of given $9$ integers $= 304$. Tenth integer $= 350 - 304 = 46$.\n\n**The Full Solution:**\nIf the mean of $10$ integers is $35$, the total sum is $10 \\cdot 35 = 350$.\nSum of the $9$ listed integers: $25 + 28 + 30 + 32 + 34 + 35 + 38 + 40 + 42$.\nAdd in pairs: $(25 + 42) + (28 + 40) + (30 + 38) + (32 + 35) + 34 = 67 + 68 + 68 + 67 + 34 = 304$.\nTenth integer $= 350 - 304 = 46$.\n\n**Common Mistakes to Avoid:**\n* Reporting $35$ (the target mean) without computing the missing value.\n* Subtracting the wrong way ($304 - 350 = -46$).\n\n**Verification:** mean $= \\dfrac{304 + 46}{10} = \\dfrac{350}{10} = 35$ \\checkmark.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ sum. To recover a missing value, compute the target sum first, then subtract the known sum.",
  skills: ["statistics", "mean-median-mode"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $\\dfrac{x^2 + 5x + 6}{x + 2} = x + a$ for all $x \\neq -2$, and $\\dfrac{x^2 - 7x + 12}{x - 3} = x + b$ for all $x \\neq 3$, what is the value of $a \\cdot b$?",
  choices: [
    { id: "A", text: "$-12$" },
    // distractor: applies inverse operation — uses b = +4 (sign error on the (x-4) factor)
    { id: "B", text: "$12$" },
    // distractor: stops one step early — gives just b, not the product
    { id: "C", text: "$-4$" },
    // distractor: wrong base — uses the linear coefficient -7 from the second numerator directly
    { id: "D", text: "$-7$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):**\n$x^2 + 5x + 6 = (x+2)(x+3)$, so $\\dfrac{(x+2)(x+3)}{x+2} = x + 3$. Hence $a = 3$.\n$x^2 - 7x + 12 = (x-3)(x-4)$, so $\\dfrac{(x-3)(x-4)}{x-3} = x - 4$. Hence $b = -4$.\nProduct: $a \\cdot b = (3)(-4) = -12$.\n\n**The Full Solution:**\nFactor each numerator and cancel the common factor:\nFor the first: $x^2 + 5x + 6 = (x+2)(x+3) \\Rightarrow x + a = x + 3 \\Rightarrow a = 3$.\nFor the second: $x^2 - 7x + 12 = (x-3)(x-4) \\Rightarrow x + b = x - 4 \\Rightarrow b = -4$.\n$a \\cdot b = 3 \\cdot (-4) = -12$.\n\nVerification: at $x = 0$, first expression $= \\dfrac{6}{2} = 3 = 0 + 3$ \\checkmark; second $= \\dfrac{12}{-3} = -4 = 0 + (-4)$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — uses $b = +4$ (sign error on the $(x - 4)$ factor).\n* Choice C: \"stops one step early\" — gives just $b$, not the product $a \\cdot b$.\n* Choice D: \"wrong base\" — uses the linear coefficient $-7$ of the second numerator directly.\n\n**Test Day Takeaway:** Factor the numerator, cancel the matching denominator factor, then read off the remaining linear constant.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The equation $\\dfrac{2}{x - 1} + \\dfrac{3}{x + 2} = \\dfrac{21}{(x - 1)(x + 2)}$ is defined for $x \\neq 1$ and $x \\neq -2$. What is the value of $x$?",
  correctAnswer: "4",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~25s):** Multiply both sides by $(x - 1)(x + 2)$: $2(x + 2) + 3(x - 1) = 21$, so $5x + 1 = 21$ and $x = 4$.\n\n**The Full Solution:**\nMultiply both sides by $(x - 1)(x + 2)$:\n$2(x + 2) + 3(x - 1) = 21$\n$2x + 4 + 3x - 3 = 21$\n$5x + 1 = 21$\n$5x = 20$\n$x = 4$.\n\nSince $x = 4 \\neq 1$ and $x = 4 \\neq -2$, this is a valid solution.\n\n**Common Mistakes to Avoid:**\n* Forgetting to check that the solution does not make a denominator zero.\n* Distribution errors: $2(x + 2) = 2x + 4$, not $2x + 2$.\n\n**Verification:** LHS $= \\dfrac{2}{3} + \\dfrac{3}{6} = \\dfrac{2}{3} + \\dfrac{1}{2} = \\dfrac{7}{6}$. RHS $= \\dfrac{21}{3 \\cdot 6} = \\dfrac{21}{18} = \\dfrac{7}{6}$ \\checkmark.\n\n**Test Day Takeaway:** Clear all denominators by multiplying through by their product. Always verify the solution does not make any original denominator zero.",
  skills: ["polynomial-operations", "factoring"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The exponential function $f(x) = a \\cdot b^x$ with $b > 0$ satisfies $f(0) = 7$ and $f(1) = 5$. What is the value of $f(3)$?",
  choices: [
    { id: "A", text: "$\\dfrac{125}{49}$" },
    // distractor: applies inverse operation — inverts b, computing 7 \cdot (7/5)^3
    { id: "B", text: "$\\dfrac{343}{125}$" },
    // distractor: off-by-one — uses b^2 (=25/49) instead of b^3 in the numerator chain
    { id: "C", text: "$\\dfrac{175}{49}$" },
    // distractor: stops one step early — gives f(2) instead of f(3)
    { id: "D", text: "$\\dfrac{25}{7}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** $f(0) = a = 7$. $f(1) = 7b = 5 \\Rightarrow b = \\dfrac{5}{7}$. $f(3) = 7 \\left(\\dfrac{5}{7}\\right)^3 = \\dfrac{7 \\cdot 125}{343} = \\dfrac{125}{49}$.\n\n**The Full Solution:**\nFrom $f(0) = a \\cdot b^0 = a = 7$.\nFrom $f(1) = 7b = 5 \\Rightarrow b = \\dfrac{5}{7}$.\n$f(3) = 7 \\left(\\dfrac{5}{7}\\right)^3 = 7 \\cdot \\dfrac{125}{343} = \\dfrac{875}{343} = \\dfrac{125}{49}$.\n\n(Reduction: $\\gcd(875, 343) = 7$, giving $\\dfrac{125}{49}$.)\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — inverts $b$, computing $\\left(\\dfrac{7}{5}\\right)^3$ in the numerator.\n* Choice C: \"off-by-one\" — uses $b^2$ instead of $b^3$ in the numerator.\n* Choice D: \"stops one step early\" — computes $f(2) = 7 \\cdot \\left(\\dfrac{5}{7}\\right)^2 = \\dfrac{25}{7}$ instead of $f(3)$.\n\n**Test Day Takeaway:** Use $f(0) = a$ to read off the initial value, then $\\dfrac{f(1)}{f(0)} = b$ gives the base. Then chain to the requested input.",
  skills: ["exponential-functions", "exponent-rules"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $x^2 + y^2 - 4x + 12y + 31 = 0$ represents a circle in the $xy$-plane. What is the radius of the circle?",
  choices: [
    { id: "A", text: "$3$" },
    // distractor: stops one step early — reports r^2 = 9 instead of r = 3
    { id: "B", text: "$9$" },
    // distractor: applies inverse operation — keeps +31 on the same side instead of moving it
    { id: "C", text: "$\\sqrt{71}$" },
    // distractor: off-by-one — only completes one square (drops the y term contribution)
    { id: "D", text: "$\\sqrt{5}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Complete the square: $(x - 2)^2 + (y + 6)^2 = 4 + 36 - 31 = 9$. Radius $= \\sqrt{9} = 3$.\n\n**The Full Solution:**\nGroup $x$- and $y$-terms:\n$(x^2 - 4x) + (y^2 + 12y) = -31$\n\nComplete the square: half of $-4$ is $-2$, $(-2)^2 = 4$. Half of $12$ is $6$, $6^2 = 36$.\n$(x^2 - 4x + 4) + (y^2 + 12y + 36) = -31 + 4 + 36$\n$(x - 2)^2 + (y + 6)^2 = 9$\n\nSo $r^2 = 9$ and $r = 3$.\n\nVerification: a point at distance $3$ from the center $(2, -6)$, e.g., $(5, -6)$, gives $25 + 36 - 20 - 72 + 31 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — gives $r^2 = 9$ as the radius instead of $r = 3$.\n* Choice C: \"applies the inverse operation\" — keeps $+31$ on the same side instead of moving it.\n* Choice D: \"off-by-one\" — only completes one square, drops the $y$-term contribution.\n\n**Test Day Takeaway:** Complete the square for BOTH variables symmetrically. The radius is $\\sqrt{r^2}$, not $r^2$.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The right triangle shown has legs of length $a$ and $a + 1$ and hypotenuse of length $29$. What is the perimeter of the triangle?",
  diagram: {
    type: "rightTriangle",
    params: {
      sideLabels: ["a", "a + 1", "29"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: stops one step early — sums only the two legs (20 + 21 = 41) without adding the hypotenuse
    { id: "A", text: "$41$" },
    { id: "B", text: "$70$" },
    // distractor: off-by-one — uses a + 1 = 1 instead of 21, gets 20 + 1 + 29 = 50
    { id: "C", text: "$50$" },
    // distractor: wrong base — double-counts the leg a, computing 20 + 21 + 29 + 20 = 90
    { id: "D", text: "$90$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Recognize the $20$-$21$-$29$ Pythagorean triple. So $a = 20$ and $a + 1 = 21$. Perimeter $= 20 + 21 + 29 = 70$.\n\n**The Full Solution:**\nApply the Pythagorean theorem: $a^2 + (a + 1)^2 = 29^2$.\n$a^2 + a^2 + 2a + 1 = 841$\n$2a^2 + 2a - 840 = 0$\n$a^2 + a - 420 = 0$\n$(a - 20)(a + 21) = 0$\n\nSo $a = 20$ (rejecting the negative root). Then $a + 1 = 21$.\n\nPerimeter $= 20 + 21 + 29 = 70$.\n\nVerification: $20^2 + 21^2 = 400 + 441 = 841 = 29^2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — adds only the two legs ($20 + 21 = 41$) and forgets the hypotenuse.\n* Choice C: \"off-by-one\" — uses $a + 1 = 1$ instead of $21$, getting $20 + 1 + 29 = 50$.\n* Choice D: \"wrong base\" — double-counts the leg $a$, computing $20 + 21 + 29 + 20 = 90$.\n\n**Test Day Takeaway:** Memorize the common Pythagorean triples ($3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $20$-$21$-$29$). When the legs differ by a small constant and the hypotenuse is given, the triple often surfaces directly.",
  skills: ["triangles", "right-triangles", "area"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the line $y = 2x - 3$ intersects the parabola $y = x^2 - 4x + c$ at exactly one point. What is the value of $c$?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~30s):** Set equal: $x^2 - 4x + c = 2x - 3 \\Rightarrow x^2 - 6x + (c + 3) = 0$. Discriminant $= 0$: $36 - 4(c + 3) = 0 \\Rightarrow c + 3 = 9 \\Rightarrow c = 6$.\n\n**The Full Solution:**\nSet the parabola and the line equal:\n$x^2 - 4x + c = 2x - 3$\n$x^2 - 6x + (c + 3) = 0$\n\nFor exactly one intersection, the discriminant must equal zero:\n$(-6)^2 - 4(1)(c + 3) = 0$\n$36 - 4c - 12 = 0$\n$24 = 4c$\n$c = 6$.\n\nVerification at $c = 6$: $x^2 - 6x + 9 = (x - 3)^2 = 0$, so $x = 3$ (double root). Then $y = 2(3) - 3 = 3$. Single intersection at $(3, 3)$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting the sign change: $-(-3) = +3$ moves to the constant side.\n* Using the wrong sign on $b$ in the discriminant: $(-6)^2 = 36$, not $-36$.\n\n**Test Day Takeaway:** A line is tangent to a parabola exactly when the system, rearranged into one quadratic in $x$, has discriminant zero.",
  skills: ["systems-of-equations", "quadratic-equations", "discriminant"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 7 — Math Module 2 (22 questions)
// Distribution: 3E / 6M / 13H. Q1-3 are easy openers (CB-authentic ramp).

{
  id: 1,
  type: "fill-in",
  difficulty: "easy",
  band: 2,
  question: "On a number line, point $A$ has coordinate $-7$ and point $B$ has coordinate $11$. What is the distance between $A$ and $B$?",
  correctAnswer: "18",
  explanation: "**SAT Pattern: Distance on a Number Line**\n\n**The correct answer is $18$.**\n\n**The Fast Way (~5s):** Distance $= |11 - (-7)| = |18| = 18$.\n\n**The Full Solution:**\nThe distance between two points on a number line is the absolute value of their difference:\n$|B - A| = |11 - (-7)| = |11 + 7| = |18| = 18$.\n\n**Common Mistakes to Avoid:**\n* Subtracting without flipping the sign of the negative coordinate: $11 - 7 = 4$ (wrong).\n* Adding the absolute values incorrectly: works for opposite-sign pairs but fails when both are positive or both negative.\n\n**Test Day Takeaway:** Distance on a number line $= |B - A|$. Watch the signs when one or both coordinates are negative.",
  skills: ["coordinate-geometry", "absolute-value"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "If $\\dfrac{x}{6} = \\dfrac{15}{10}$, what is the value of $x$?",
  choices: [
    // distractor: takes ratio of difference values incorrectly
    { id: "A", text: "$4$" },
    { id: "B", text: "$9$" },
    // distractor: adds the values rather than cross-multiplying
    { id: "C", text: "$25$" },
    // distractor: stops one step early at cross-product without dividing
    { id: "D", text: "$90$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Solve a Proportion**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Cross-multiply: $10x = 6 \\cdot 15 = 90$. So $x = 9$.\n\n**The Full Solution:**\n$\\dfrac{x}{6} = \\dfrac{15}{10}$\nCross-multiply: $10x = 6 \\cdot 15 = 90$.\nDivide by $10$: $x = 9$.\n\nVerification: $\\dfrac{9}{6} = 1.5 = \\dfrac{15}{10}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — divides values incorrectly without cross-multiplying.\n* Choice C: \"applies the inverse operation\" — adds the cross terms ($15 + 10 = 25$).\n* Choice D: \"stops one step early\" — gives the cross-product without dividing.\n\n**Test Day Takeaway:** Cross-multiply, then solve. Always finish the division step.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Which of the following functions has a constant percent rate of change?",
  choices: [
    // distractor: linear - constant ABSOLUTE rate, not percent rate
    { id: "A", text: "$f(x) = 3x + 5$" },
    { id: "B", text: "$f(x) = 2(3)^x$" },
    // distractor: quadratic - changing rate, not constant
    { id: "C", text: "$f(x) = x^2$" },
    // distractor: square root - changing rate
    { id: "D", text: "$f(x) = \\sqrt{x}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Linear vs Exponential**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Exponential functions $f(x) = a \\cdot b^x$ have a CONSTANT PERCENT rate of change (multiply by $b$ each step). Linear functions have a constant ABSOLUTE rate.\n\n**The Full Solution:**\nA linear function (Choice A) increases by the same AMOUNT each step ($+3$ per unit $x$), so its absolute change is constant — but its percent change varies.\n\nAn exponential function $f(x) = 2(3)^x$ multiplies by $3$ each unit step, so its PERCENT change ($+200\\%$) is constant.\n\n$x^2$ and $\\sqrt{x}$ are neither linear nor exponential; their rates of change vary.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — confuses constant absolute change with constant percent change.\n* Choice C: \"applies the inverse operation\" — quadratic has neither constant absolute nor constant percent change.\n* Choice D: \"wrong base\" — square root has decreasing rate of change.\n\n**Test Day Takeaway:** Linear $\\Leftrightarrow$ constant absolute change. Exponential $\\Leftrightarrow$ constant percent change.",
  skills: ["exponential-functions", "linear-functions", "function-interpretation"]
},
{
  id: 4,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The function $f$ is defined by $f(x) = 3(2)^x$. What is the value of $f(5) - f(3)$?",
  correctAnswer: "72",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $72$.**\n\n**The Fast Way (~15s):** $f(5) = 3 \\cdot 32 = 96$. $f(3) = 3 \\cdot 8 = 24$. Difference $= 96 - 24 = 72$.\n\n**The Full Solution:**\n$f(5) = 3 \\cdot 2^5 = 3 \\cdot 32 = 96$.\n$f(3) = 3 \\cdot 2^3 = 3 \\cdot 8 = 24$.\n$f(5) - f(3) = 96 - 24 = 72$.\n\n**Common Mistakes to Avoid:**\n* Computing $f(5 - 3) = f(2) = 3 \\cdot 4 = 12$ (subtracting inputs instead of outputs).\n* Forgetting the coefficient: $2^5 - 2^3 = 24$, not $72$.\n\n**Verification:** $96 - 24 = 72$ \\checkmark.\n\n**Test Day Takeaway:** $f(a) - f(b) \\neq f(a - b)$ for exponential (or most) functions. Evaluate each separately, then subtract.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A function $f$ is defined by $f(x) = \\dfrac{2x + 6}{x - 1}$. For what value of $x$ is $f(x) = 0$?",
  choices: [
    { id: "A", text: "$-3$" },
    // distractor: stops one step early — picks -1, half of -3
    { id: "B", text: "$-1$" },
    // distractor: applies inverse operation — gives the value that makes the denominator 0
    { id: "C", text: "$1$" },
    // distractor: wrong base — solves 2x + 6 = x - 1 instead of 2x + 6 = 0
    { id: "D", text: "$3$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** A fraction equals $0$ when its numerator is $0$ (and denominator is not). $2x + 6 = 0 \\Rightarrow x = -3$. Denominator at $x = -3$: $-4 \\neq 0$ \\checkmark.\n\n**The Full Solution:**\nSet $f(x) = 0$: $\\dfrac{2x + 6}{x - 1} = 0 \\Rightarrow 2x + 6 = 0 \\Rightarrow x = -3$.\nVerify denominator: $-3 - 1 = -4 \\neq 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — half the correct answer.\n* Choice C: \"applies the inverse operation\" — solves for the denominator $=0$ (which makes $f$ undefined, not zero).\n* Choice D: \"wrong base\" — solves $2x + 6 = x - 1$ instead of $2x + 6 = 0$.\n\n**Test Day Takeaway:** A rational function equals zero when the numerator is zero AND the denominator is nonzero.",
  skills: ["function-interpretation", "solving-equations"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $f(x) = x^2 + 1$ and $g(x) = 2x - 3$, what is the value of $f(g(2))$?",
  choices: [
    { id: "A", text: "$2$" },
    // distractor: stops one step early — computes f(2) = 5 instead of f(g(2))
    { id: "B", text: "$5$" },
    // distractor: applies inverse operation — computes g(2) + f(2) = 1 + 5 + 1 = 7
    { id: "C", text: "$7$" },
    // distractor: wrong base — multiplies f(2) and g(2) instead of composing
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $g(2) = 2(2) - 3 = 1$. Then $f(1) = 1^2 + 1 = 2$.\n\n**The Full Solution:**\nFirst evaluate the inner function: $g(2) = 2(2) - 3 = 4 - 3 = 1$.\nThen evaluate the outer function: $f(g(2)) = f(1) = 1^2 + 1 = 2$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — computes $f(2) = 5$ instead of $f(g(2))$.\n* Choice C: \"applies the inverse operation\" — sums function values rather than composing them.\n* Choice D: \"wrong base\" — multiplies $f(2) \\cdot g(2)$ instead of composing.\n\n**Test Day Takeaway:** For $f(g(x))$, work inside out: evaluate $g$ first, then feed the result into $f$.",
  skills: ["function-interpretation"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = x^3 - 6x^2 + 11x - 6$. It is known that $f(1) = 0$. What is the sum of the other two zeros of $f$?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~25s):** Since $f(1) = 0$, $(x - 1)$ is a factor. Divide: $x^3 - 6x^2 + 11x - 6 = (x - 1)(x^2 - 5x + 6) = (x - 1)(x - 2)(x - 3)$. Other zeros: $2$ and $3$. Sum $= 5$.\n\n**The Full Solution:**\nDivide $x^3 - 6x^2 + 11x - 6$ by $(x - 1)$ using synthetic division:\nBring down $1$; multiply by $1$ and add: $-6 + 1 = -5$. Multiply by $1$ and add: $11 + (-5) = 6$. Multiply by $1$ and add: $-6 + 6 = 0$.\nQuotient: $x^2 - 5x + 6 = (x - 2)(x - 3)$.\nZeros: $1$, $2$, $3$. The other two zeros sum to $2 + 3 = 5$.\n\n**Common Mistakes to Avoid:**\n* Reporting the sum of ALL three zeros ($1 + 2 + 3 = 6$).\n* Vieta's gives sum of all roots $= 6$ (negative of $x^2$ coefficient), but we need $6 - 1 = 5$.\n\n**Test Day Takeaway:** If one root is known, divide it out to get a quadratic, then use Vieta's on the quotient (sum of roots $= -\\frac{b}{a}$).",
  skills: ["polynomial-operations", "factoring"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The function $g$ is defined by $g(x) = 2x^2 - 8x + 11$. What is the minimum value of $g(x)$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~20s):** Minimum at $x = -\\dfrac{b}{2a} = -\\dfrac{-8}{4} = 2$. $g(2) = 2(4) - 16 + 11 = 8 - 16 + 11 = 3$.\n\n**The Full Solution:**\nComplete the square: $g(x) = 2(x^2 - 4x) + 11 = 2(x^2 - 4x + 4) + 11 - 8 = 2(x - 2)^2 + 3$.\n\nSince $2(x - 2)^2 \\geq 0$, the minimum value is $3$, attained at $x = 2$.\n\n**Common Mistakes to Avoid:**\n* Forgetting to subtract $2 \\cdot 4 = 8$ when completing the square (the $+4$ inside the parens contributes $+8$, which must be balanced by $-8$ outside).\n* Reporting $11$ (the $y$-intercept, not the minimum).\n\n**Verification:** $g(0) = 11$, $g(2) = 3$, $g(4) = 32 - 32 + 11 = 11$. So the parabola dips to $3$ at $x = 2$ \\checkmark.\n\n**Test Day Takeaway:** For $ax^2 + bx + c$ with $a > 0$, the minimum is at $x = -\\dfrac{b}{2a}$; the minimum VALUE is $c - \\dfrac{b^2}{4a}$ (or just substitute back).",
  skills: ["vertex-form", "quadratic-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A function $f$ satisfies $f(x) = f(x + 4)$ for all real numbers $x$. If $f(3) = 7$ and $f(5) = 2$, what is the value of $f(3) + f(11) + f(19)$?",
  choices: [
    // distractor: applies inverse operation — confuses f(11) with f(5) = 2, getting 7 + 2 + 7 = 16 reduced wrongly
    { id: "A", text: "$9$" },
    // distractor: stops one step early — gets two terms right (7 + 7 = 14) and stops
    { id: "B", text: "$14$" },
    // distractor: off-by-one — mixes up the period and gets one term wrong
    { id: "C", text: "$16$" },
    { id: "D", text: "$21$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Period $= 4$, so $f(11) = f(7) = f(3) = 7$ and $f(19) = f(15) = f(11) = 7$. Sum $= 7 \\cdot 3 = 21$.\n\n**The Full Solution:**\nSince $f$ has period $4$: $f(x) = f(x + 4)$ for all $x$.\n$f(3) = 7$ (given).\n$f(11) = f(11 - 4) = f(7) = f(7 - 4) = f(3) = 7$.\n$f(19) = f(19 - 4) = f(15) = f(11) = 7$.\nSum $= 7 + 7 + 7 = 21$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — confuses $f(11)$ with $f(5) = 2$ (would need period $6$).\n* Choice B: \"stops one step early\" — gets two terms right and stops.\n* Choice C: \"off-by-one\" — mixes up the period and miscounts one term.\n\n**Test Day Takeaway:** For a periodic function, reduce the input modulo the period to find an equivalent known input.",
  skills: ["function-interpretation"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The function $h(t) = -16t^2 + 64t + 5$ models the height in feet of a ball $t$ seconds after being thrown upward. At what time, in seconds, does the ball reach its maximum height?",
  correctAnswer: "2",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~10s):** $t = -\\dfrac{b}{2a} = -\\dfrac{64}{-32} = 2$.\n\n**The Full Solution:**\nThe height function $h(t) = -16t^2 + 64t + 5$ has $a = -16 < 0$, so the parabola opens downward and the maximum occurs at the vertex.\n\n$t = -\\dfrac{b}{2a} = -\\dfrac{64}{2(-16)} = -\\dfrac{64}{-32} = 2$ seconds.\n\nAt that time, the maximum height is $h(2) = -16(4) + 128 + 5 = -64 + 128 + 5 = 69$ feet.\n\n**Common Mistakes to Avoid:**\n* Solving $h(t) = 0$ instead of finding the vertex.\n* Computing $-\\dfrac{64}{32} = -2$ (wrong sign).\n\n**Test Day Takeaway:** For projectile-motion stems, the time at maximum height is $t = -\\dfrac{b}{2a}$, not where $h = 0$.",
  skills: ["quadratic-equations", "vertex-form", "function-interpretation"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f(x) = a \\cdot b^x$ passes through the points $(0, 5)$ and $(3, 320)$. What is the value of $f(2)$?",
  choices: [
    // distractor: stops one step early — uses b alone (= 4) without raising to the second power
    { id: "A", text: "$20$" },
    { id: "B", text: "$80$" },
    // distractor: applies inverse operation — uses b^3 (= 64) by mistake at x = 2
    { id: "C", text: "$320$" },
    // distractor: wrong base — substitutes x = 0 result in place of f(2)
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $f(0) = a = 5$. $f(3) = 5 b^3 = 320 \\Rightarrow b^3 = 64 \\Rightarrow b = 4$. $f(2) = 5 \\cdot 16 = 80$.\n\n**The Full Solution:**\nFrom $(0, 5)$: $f(0) = a \\cdot b^0 = a = 5$.\nFrom $(3, 320)$: $5 b^3 = 320 \\Rightarrow b^3 = 64 \\Rightarrow b = 4$.\nThen $f(2) = 5 \\cdot 4^2 = 5 \\cdot 16 = 80$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — uses $b = 4$ as the answer instead of $5 b^2$.\n* Choice C: \"applies the inverse operation\" — uses $f(3) = 320$ in place of $f(2)$.\n* Choice D: \"wrong base\" — gives $f(0) = 5$ instead of $f(2)$.\n\n**Test Day Takeaway:** Use $(0, y_0)$ to find $a$, then plug another point to solve for $b$. Then substitute the requested input.",
  skills: ["exponential-functions"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $x > 0$, the expression $\\sqrt[3]{x^4} \\cdot \\sqrt{x^7}$ is equivalent to $x^{\\frac{p}{q}}$ where $\\dfrac{p}{q}$ is in lowest terms. What is the value of $p + q$?",
  choices: [
    // distractor: stops one step early — gives p alone (= 29) instead of p + q
    { id: "A", text: "$29$" },
    // distractor: applies inverse operation — sums the exponent and index 7 + 3 = 10
    { id: "B", text: "$10$" },
    { id: "C", text: "$35$" },
    // distractor: wrong base — sums all visible integers in the original expression: 4 + 7 + 3 + 2 = 16
    { id: "D", text: "$16$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** $\\sqrt[3]{x^4} = x^{\\frac{4}{3}}$. $\\sqrt{x^7} = x^{\\frac{7}{2}}$. Add: $\\dfrac{4}{3} + \\dfrac{7}{2} = \\dfrac{8 + 21}{6} = \\dfrac{29}{6}$. So $p + q = 29 + 6 = 35$.\n\n**The Full Solution:**\nConvert each radical to a fractional exponent:\n$\\sqrt[3]{x^4} = x^{\\frac{4}{3}}, \\quad \\sqrt{x^7} = x^{\\frac{7}{2}}$\n\nWhen multiplying same bases, add exponents:\n$x^{\\frac{4}{3}} \\cdot x^{\\frac{7}{2}} = x^{\\frac{4}{3} + \\frac{7}{2}} = x^{\\frac{8 + 21}{6}} = x^{\\frac{29}{6}}$\n\n$\\gcd(29, 6) = 1$, so $\\dfrac{29}{6}$ is in lowest terms. Then $p = 29$, $q = 6$, and $p + q = 35$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives just the numerator $p = 29$, forgetting to add $q$.\n* Choice B: \"applies the inverse operation\" — sums the radical exponent and index ($7 + 3 = 10$) instead of converting and adding fractions.\n* Choice D: \"wrong base\" — sums all the integers visible in the expression.\n\n**Test Day Takeaway:** $\\sqrt[n]{x^m} = x^{\\frac{m}{n}}$ — power on top, root on the bottom. Add fractional exponents when multiplying same bases.",
  skills: ["polynomial-operations", "exponent-rules", "radical-expressions"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For what value of $k$ does the system of equations below have no solution?\n\n$2x + 3y = 7$\n$kx + 9y = 11$",
  choices: [
    // distractor: stops one step early — uses k = 3 (one of the original coefficients)
    { id: "A", text: "$3$" },
    { id: "B", text: "$6$" },
    // distractor: applies inverse operation — sets k/2 = 9/3 → k = 6, then takes negative
    { id: "C", text: "$-6$" },
    // distractor: wrong base — uses k = 9 (matches one denominator)
    { id: "D", text: "$9$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** No solution means same slope, different intercept. Slopes equal: $-\\dfrac{2}{3} = -\\dfrac{k}{9} \\Rightarrow k = 6$. Verify intercepts differ: $\\dfrac{7}{3} \\neq \\dfrac{11}{9}$ \\checkmark.\n\n**The Full Solution:**\nWrite each equation in slope-intercept form:\n$2x + 3y = 7 \\Rightarrow y = -\\dfrac{2}{3}x + \\dfrac{7}{3}$.\n$kx + 9y = 11 \\Rightarrow y = -\\dfrac{k}{9}x + \\dfrac{11}{9}$.\n\nFor no solution: same slope, different intercept.\nSlope: $-\\dfrac{2}{3} = -\\dfrac{k}{9} \\Rightarrow k = 6$.\nIntercept check: $\\dfrac{7}{3} = \\dfrac{21}{9} \\neq \\dfrac{11}{9}$, so the lines are NOT identical \\checkmark.\n\nThus $k = 6$ produces parallel non-coincident lines, giving no solution.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — picks one of the original coefficients without solving.\n* Choice C: \"applies the inverse operation\" — sign error after solving.\n* Choice D: \"wrong base\" — picks the coefficient $9$ from the second equation directly.\n\n**Test Day Takeaway:** Two-equation system has no solution $\\iff$ ratios of $x$- and $y$-coefficients are equal but ratios of constants differ. Equivalently: same slope, different $y$-intercept.",
  skills: ["systems-of-equations", "linear-equations"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A factory makes $12$-inch, $8$-inch, and $5$-inch metal rods. During one shift, the number of $12$-inch rods produced is $4$ times the number $r$ of $8$-inch rods, and the number of $5$-inch rods is $25$ more than the number of $8$-inch rods. The factory produces a total of $853$ rods that shift. How many $8$-inch rods does the factory produce that shift?",
  choices: [
    // distractor: off-by-one — divides total by 6 (4r + r + r) ignoring the +25 offset
    { id: "A", text: "$142$" },
    { id: "B", text: "$138$" },
    // distractor: applies inverse operation — uses (853 - 25)/4 = 207 instead of dividing by 6
    { id: "C", text: "$207$" },
    // distractor: stops one step early — divides 853 / 4 ignoring the offset and r itself
    { id: "D", text: "$213$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Total $= 4r + r + (r + 25) = 6r + 25 = 853$. So $6r = 828$ and $r = 138$.\n\n**The Full Solution:**\nLet $r$ be the number of $8$-inch rods.\nNumber of $12$-inch rods: $4r$.\nNumber of $5$-inch rods: $r + 25$.\n\nTotal: $4r + r + (r + 25) = 6r + 25 = 853$.\n$6r = 828 \\Rightarrow r = 138$.\n\nVerification: $4(138) + 138 + (138 + 25) = 552 + 138 + 163 = 853$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — divides $853$ by $6$ ignoring the $+25$ offset.\n* Choice C: \"applies the inverse operation\" — uses $\\frac{853 - 25}{4} = 207$ instead of dividing by $6$.\n* Choice D: \"stops one step early\" — divides $\\frac{853}{4}$ ignoring the offset and the additional $r$ counts.\n\n**Test Day Takeaway:** When three quantities share a common variable, write each in terms of that variable, then sum and equate to the total. Always include any offsets like \"$25$ more than\".",
  skills: ["word-problems", "ratios"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f(x) = 250(0.85)^x$ models the amount of a medication, in mg, in a patient's bloodstream $x$ hours after administration. After how many complete hours will the amount first drop below $100$ mg?\n\n(Use: $\\log(0.4) \\approx -0.3979$ and $\\log(0.85) \\approx -0.0706$.)",
  choices: [
    // distractor: off-by-one — rounds 5.64 down to 5, but at x = 5 the amount is still above 100
    { id: "A", text: "$5$" },
    { id: "B", text: "$6$" },
    // distractor: applies inverse operation — divides logs in the wrong order
    { id: "C", text: "$7$" },
    // distractor: wrong base — miscalculates the logarithm ratio
    { id: "D", text: "$8$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $250(0.85)^x < 100 \\Rightarrow (0.85)^x < 0.4 \\Rightarrow x > \\dfrac{\\log(0.4)}{\\log(0.85)} \\approx \\dfrac{-0.3979}{-0.0706} \\approx 5.64$. First complete hour: $6$.\n\n**The Full Solution:**\n$250(0.85)^x < 100$\n$(0.85)^x < 0.4$\n$x \\log(0.85) < \\log(0.4)$\n\nSince $\\log(0.85) < 0$, dividing flips the inequality:\n$x > \\dfrac{\\log(0.4)}{\\log(0.85)} = \\dfrac{-0.3979}{-0.0706} \\approx 5.64$\n\nThe first complete hour after $5.64$ is $x = 6$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — rounds $5.64$ down to $5$, but at $x = 5$ the amount is still above $100$.\n* Choice C: \"applies the inverse operation\" — rounds up too aggressively or divides in the wrong order.\n* Choice D: \"wrong base\" — miscalculates the logarithm ratio.\n\n**Test Day Takeaway:** When dividing by a negative log, flip the inequality. Then round UP for \"first drops below\".",
  skills: ["exponential-functions", "solving-equations"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A table shows the results of a student survey:\n\n|  | Prefers Math | Prefers English | Total |\n|---|---|---|---|\n| Grade 10 | $35$ | $25$ | $60$ |\n| Grade 11 | $28$ | $32$ | $60$ |\n| Total | $63$ | $57$ | $120$ |\n\nA student is selected at random from those who prefer Math. What is the probability that the student is in Grade 11?",
  choices: [
    // distractor: wrong base — uses Grade 11 row total (60) as denominator
    { id: "A", text: "$\\dfrac{28}{60}$" },
    { id: "B", text: "$\\dfrac{28}{63}$" },
    // distractor: wrong base — uses grand total (120) as denominator
    { id: "C", text: "$\\dfrac{28}{120}$" },
    // distractor: stops one step early — gives marginal P(Math) = 63/120
    { id: "D", text: "$\\dfrac{63}{120}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** \"From those who prefer Math\" means denominator $=$ Math column total $= 63$. Grade 11 who prefer Math $= 28$. So $\\dfrac{28}{63}$.\n\n**The Full Solution:**\n$P(\\text{Grade 11} \\mid \\text{Math}) = \\dfrac{\\text{Grade 11 and Math}}{\\text{Total Math}} = \\dfrac{28}{63}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses the Grade 11 row total $60$ as the denominator.\n* Choice C: \"wrong base\" — uses the grand total $120$ as the denominator.\n* Choice D: \"stops one step early\" — gives the marginal probability of preferring Math overall.\n\n**Test Day Takeaway:** In conditional probability, the condition determines the denominator. \"Given Math\" means denominator $=$ Math total.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A spinner has $4$ equal sections colored red, blue, green, and yellow. The spinner is spun $4$ times, and the colors recorded. What is the probability of getting red exactly $3$ times in those $4$ spins?",
  choices: [
    // distractor: applies inverse operation — uses (1/4)^3 alone, ignoring the 4 ways to choose which spin is non-red
    { id: "A", text: "$\\dfrac{1}{64}$" },
    { id: "B", text: "$\\dfrac{3}{64}$" },
    // distractor: stops one step early — uses (3/4)(1/4)^3 = 3/256 (forgets to multiply by 4 spin positions)
    { id: "C", text: "$\\dfrac{3}{256}$" },
    // distractor: wrong base — uses (3/4)^3 = 27/64 (probability of "not all red")
    { id: "D", text: "$\\dfrac{27}{64}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Composition**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Probability $= \\dbinom{4}{3} \\left(\\dfrac{1}{4}\\right)^3 \\left(\\dfrac{3}{4}\\right)^1 = 4 \\cdot \\dfrac{1}{64} \\cdot \\dfrac{3}{4} = \\dfrac{12}{256} = \\dfrac{3}{64}$.\n\n**The Full Solution:**\nThe probability of \"exactly $3$ red, $1$ non-red\" out of $4$ spins:\n\n* Choose which of the $4$ spins is non-red: $\\binom{4}{1} = 4$ ways.\n* Each red spin has probability $\\dfrac{1}{4}$; each non-red spin has probability $\\dfrac{3}{4}$.\n* For each arrangement: $\\left(\\dfrac{1}{4}\\right)^3 \\left(\\dfrac{3}{4}\\right) = \\dfrac{3}{256}$.\n\nTotal: $4 \\cdot \\dfrac{3}{256} = \\dfrac{12}{256} = \\dfrac{3}{64}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses only $(\\frac{1}{4})^3$, ignoring the non-red spin and the choice factor.\n* Choice C: \"stops one step early\" — gives one arrangement's probability ($\\frac{3}{256}$) but forgets to multiply by $4$ positions.\n* Choice D: \"wrong base\" — gives $(\\frac{3}{4})^3 = \\frac{27}{64}$, the probability that $3$ specific spins are all non-red.\n\n**Test Day Takeaway:** For \"exactly $k$ successes out of $n$\" with independent trials, the formula is $\\binom{n}{k} p^k (1 - p)^{n-k}$.",
  skills: ["probability"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the line $\\ell$ has equation $4x + 3y = 18$, and the line $m$ is perpendicular to $\\ell$ and passes through the point $(8, -1)$. What is the equation of line $m$?",
  choices: [
    // distractor: stops one step early — uses the slope of ℓ instead of perpendicular slope
    { id: "A", text: "$y = -\\dfrac{4}{3}x + \\dfrac{29}{3}$" },
    { id: "B", text: "$y = \\dfrac{3}{4}x - 7$" },
    // distractor: applies inverse operation — keeps the negative reciprocal but flips the wrong sign
    { id: "C", text: "$y = -\\dfrac{3}{4}x + 5$" },
    // distractor: wrong base — uses (8, -1) reversed as (-1, 8) when substituting
    { id: "D", text: "$y = \\dfrac{3}{4}x + \\dfrac{1}{4}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Slope of $\\ell$: $4x + 3y = 18 \\Rightarrow y = -\\dfrac{4}{3}x + 6$. Perpendicular slope: $\\dfrac{3}{4}$. Through $(8, -1)$: $-1 = \\dfrac{3}{4}(8) + b = 6 + b$, so $b = -7$. Equation: $y = \\dfrac{3}{4}x - 7$.\n\n**The Full Solution:**\nStep 1: rewrite $\\ell$ in slope-intercept form: $4x + 3y = 18 \\Rightarrow y = -\\dfrac{4}{3}x + 6$. Slope of $\\ell = -\\dfrac{4}{3}$.\n\nStep 2: perpendicular slope $=$ negative reciprocal $= \\dfrac{3}{4}$.\n\nStep 3: line $m$ through $(8, -1)$ with slope $\\dfrac{3}{4}$:\n$y - (-1) = \\dfrac{3}{4}(x - 8)$\n$y + 1 = \\dfrac{3}{4}x - 6$\n$y = \\dfrac{3}{4}x - 7$\n\nVerification: at $(8, -1)$: $\\dfrac{3}{4}(8) - 7 = 6 - 7 = -1$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — uses the slope of $\\ell$ itself (parallel, not perpendicular).\n* Choice C: \"applies the inverse operation\" — wrong sign on the perpendicular slope.\n* Choice D: \"wrong base\" — substitutes $(8, -1)$ in reversed order or with sign error.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals: flip the fraction AND change the sign. Then plug in the point to find the intercept.",
  skills: ["slope", "coordinate-geometry", "linear-functions"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A survey asks $200$ people whether they own a cat, a dog, or both. The results show that $90$ own a cat, $75$ own a dog, and $140$ own at least one of the two. How many people own both a cat and a dog?",
  correctAnswer: "25",
  explanation: "**SAT Pattern: Marginal Probability**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~20s):** Inclusion-exclusion: $|C \\cup D| = |C| + |D| - |C \\cap D|$, so $140 = 90 + 75 - |C \\cap D|$, giving $|C \\cap D| = 25$.\n\n**The Full Solution:**\nLet $C$ = cat owners, $D$ = dog owners.\nBy inclusion-exclusion: $|C \\cup D| = |C| + |D| - |C \\cap D|$.\n$140 = 90 + 75 - |C \\cap D|$\n$140 = 165 - |C \\cap D|$\n$|C \\cap D| = 25$.\n\nVerification: only cat $= 90 - 25 = 65$, only dog $= 75 - 25 = 50$, both $= 25$. Total at least one $= 65 + 50 + 25 = 140$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing $200 - 140 = 60$ (people with neither, not both).\n* Adding $90 + 75 = 165$ without subtracting.\n\n**Test Day Takeaway:** Inclusion-exclusion: $|A \\cup B| = |A| + |B| - |A \\cap B|$. Solve for the unknown intersection.",
  skills: ["probability"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = (x - 4)^2 - 7$. If the function $g$ is defined by $g(x) = f(x + 6)$, what is the minimum value of $g$?",
  choices: [
    // distractor: stops one step early — gives the x at minimum (x = -2) instead of g(x)
    { id: "A", text: "$-2$" },
    { id: "B", text: "$-7$" },
    // distractor: off-by-one — forgets to add the -7 vertical shift
    { id: "C", text: "$0$" },
    // distractor: applies inverse operation — combines -7 and -6 into -13
    { id: "D", text: "$-13$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $f$ has minimum value $-7$ (at $x = 4$). $g(x) = f(x + 6)$ shifts $f$ horizontally by $6$ units; horizontal shifts do NOT change the minimum value. So $g$ also has minimum value $-7$.\n\n**The Full Solution:**\n$g(x) = f(x + 6) = ((x + 6) - 4)^2 - 7 = (x + 2)^2 - 7$\n\nThis is vertex form with vertex $(-2, -7)$. The minimum value is $-7$, attained at $x = -2$.\n\nVerification: $(x + 2)^2 \\geq 0$ for all real $x$, so $g(x) \\geq -7$ with equality at $x = -2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the $x$-coordinate of the minimum instead of $g(x) = -7$.\n* Choice C: \"off-by-one\" — forgets the constant $-7$ in the original function.\n* Choice D: \"applies the inverse operation\" — combines $-7$ and $-6$ into $-13$ via incorrect shift direction.\n\n**Test Day Takeaway:** Horizontal shifts (replacing $x$ with $x \\pm h$) do NOT change the minimum/maximum value of a function. Only vertical shifts ($+k$ outside) do.",
  skills: ["function-interpretation", "vertex-form", "quadratic-equations"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The positive number $a$ is $300\\%$ of the sum of the positive numbers $b$ and $c$, and $c$ is $25\\%$ of $b$. What percent of $b$ is $a$?",
  choices: [
    // distractor: applies inverse operation — adds the two percents 300 + 25 = 325
    { id: "A", text: "$325\\%$" },
    // distractor: stops one step early — computes 3 * 1.25 then loses a factor of 100
    { id: "B", text: "$3.75\\%$" },
    { id: "C", text: "$375\\%$" },
    // distractor: wrong base — divides 300/0.25 = 1200% ignoring the sum structure
    { id: "D", text: "$1{,}200\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Set $b = 100$. Then $c = 25\\% \\cdot 100 = 25$. Sum $b + c = 125$. So $a = 3.00 \\cdot 125 = 375$. Percent of $b$: $\\dfrac{375}{100} \\cdot 100\\% = 375\\%$.\n\n**The Full Solution:**\nLet $b = 100$ (any positive value works since percents are scale-invariant).\nThen $c = 0.25 \\cdot 100 = 25$.\nSum: $b + c = 100 + 25 = 125$.\n$a = 3.00 \\cdot 125 = 375$.\nPercent of $b$ that $a$ is: $\\dfrac{a}{b} \\cdot 100\\% = \\dfrac{375}{100} \\cdot 100\\% = 375\\%$.\n\nVerification (algebraic): $a = 3(b + c)$ and $c = 0.25b$, so $a = 3(b + 0.25b) = 3 \\cdot 1.25b = 3.75b$, giving $\\dfrac{a}{b} = 3.75 = 375\\%$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — adds the two percents ($300 + 25 = 325$).\n* Choice B: \"stops one step early\" — computes $3.75$ but loses the percent factor of $100$.\n* Choice D: \"wrong base\" — divides $300$ by $0.25$ ignoring the sum structure.\n\n**Test Day Takeaway:** When two percents stack, pick a clean numerical value (e.g., $b = 100$) and compute through. \"Percent of $b$\" means divide by $b$, not $c$ or the sum.",
  skills: ["percents"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A box contains $6$ red balls, $4$ blue balls, and $5$ green balls. Two balls are drawn at random without replacement. What is the probability that both balls are green?",
  choices: [
    // distractor: applies inverse operation — uses (5/15)*(4/15) and simplifies wrongly
    { id: "A", text: "$\\dfrac{1}{21}$" },
    { id: "B", text: "$\\dfrac{2}{21}$" },
    // distractor: wrong base — uses (5/15)^2 = 25/225 (with replacement)
    { id: "C", text: "$\\dfrac{25}{225}$" },
    // distractor: stops one step early — gives the with-replacement answer 1/9
    { id: "D", text: "$\\dfrac{1}{9}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Composition**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $P = \\dfrac{5}{15} \\cdot \\dfrac{4}{14} = \\dfrac{20}{210} = \\dfrac{2}{21}$.\n\n**The Full Solution:**\nTotal balls $= 6 + 4 + 5 = 15$.\n$P(\\text{1st green}) = \\dfrac{5}{15} = \\dfrac{1}{3}$.\nAfter drawing one green: $4$ green left out of $14$ balls.\n$P(\\text{2nd green} \\mid \\text{1st green}) = \\dfrac{4}{14} = \\dfrac{2}{7}$.\n$P(\\text{both green}) = \\dfrac{1}{3} \\cdot \\dfrac{2}{7} = \\dfrac{2}{21}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — keeps $15$ in the second denominator, then simplifies wrongly.\n* Choice C: \"wrong base\" — $\\left(\\dfrac{5}{15}\\right)^2 = \\dfrac{25}{225}$ assumes replacement.\n* Choice D: \"stops one step early\" — simplifies $\\dfrac{25}{225}$ to $\\dfrac{1}{9}$ (still the with-replacement answer).\n\n**Test Day Takeaway:** Without replacement: after the first draw, reduce both the favorable count and the total by $1$.",
  skills: ["probability"]
}
      ]
    }
  ]
};

export default practiceTest7;
