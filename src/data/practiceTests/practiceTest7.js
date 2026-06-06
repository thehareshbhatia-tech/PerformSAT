// Practice Test 7 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// 2026-06 M2 flow diversification: M2 reflowed to a unique wavy shape
// (E[2,3,11] / M[1,4,5,8,10,15,19] / H[6,7,9,12,13,14,16,17,18,20,21,22]) with
// 6 transformed pool items infused and cloned archetypes retired. M1 de-cloned:
// easy-block reshuffled, shifted-output/doubling/Pythagorean carriers refreshed.

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
  question: "If $7c - 9 = 12$, what is the value of $7c + 9$?",
  choices: [
    // distractor: stops one step early — solves for c = 3 and reports it
    { id: "A", text: "$3$" },
    // distractor: applies inverse operation — subtracts 9 instead of adding, returning the original right side
    { id: "B", text: "$12$" },
    { id: "C", text: "$30$" },
    // distractor: wrong base — doubles the right side instead of using the +18 shift
    { id: "D", text: "$24$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $7c + 9$ is exactly $18$ more than $7c - 9$. So $7c + 9 = 12 + 18 = 30$.\n\n**The Full Solution:**\n$7c - 9 = 12 \\Rightarrow 7c = 21 \\Rightarrow c = 3$.\nThen $7c + 9 = 7(3) + 9 = 21 + 9 = 30$.\n\nShortcut: the requested expression differs from the given by exactly $+18$ (since $9 - (-9) = 18$). So the answer is $12 + 18 = 30$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — solves for $c = 3$ and reports the variable's value instead of $7c + 9$.\n* Choice B: \"applies the inverse operation\" — returns the original right side $12$ instead of shifting up.\n* Choice D: \"wrong base\" — doubles the right side to $24$ without using the shift.\n\n**Test Day Takeaway:** When the question asks for an expression in the variable instead of the variable itself, look for a shortcut: the requested expression often differs from the given by a fixed constant.",
  skills: ["solving-equations", "word-problems"]
},
{
  id: 2,
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
  id: 3,
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
  id: 4,
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
  id: 5,
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
  question: "A culture of edible-mushroom spores doubles every $5$ hours. If the culture starts with $80$ spores, which expression gives the number of spores after $t$ hours?",
  choices: [
    // distractor: uses 5t in the exponent — would multiply the doubling rate fivefold each hour
    { id: "A", text: "$80(2)^{5t}$" },
    { id: "B", text: "$80(2)^{\\frac{t}{5}}$" },
    // distractor: swaps the base (5) and the doubling factor (2)
    { id: "C", text: "$80(5)^{\\frac{t}{2}}$" },
    // distractor: combines 80 and 2 into the base — incorrectly merges initial value with rate
    { id: "D", text: "$160^{\\frac{t}{5}}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"Doubles every $5$ hours\" means base $= 2$ and exponent $= \\dfrac{t}{5}$, so the exponent equals $1$ when $t = 5$. Initial value $= 80$.\n\n**The Full Solution:**\nGeneral doubling-period model: $P(t) = P_0 \\cdot 2^{\\frac{t}{d}}$, where $P_0 = 80$ and $d = 5$.\nSo $P(t) = 80(2)^{\\frac{t}{5}}$.\n\nCheck: $P(5) = 80(2)^1 = 160$ (doubled) \\checkmark; $P(10) = 80(2)^2 = 320$ (doubled again) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses $5t$ instead of $\\dfrac{t}{5}$, which would mean multiplying fivefold per hour.\n* Choice C: \"wrong base\" — swaps the doubling factor $2$ with the period $5$.\n* Choice D: \"off-by-one\" — combines the initial value $80$ and the base $2$ into a single base of $160$.\n\n**Test Day Takeaway:** \"Doubles every $d$ units\" $\\Rightarrow$ base $= 2$, exponent $= \\dfrac{t}{d}$.",
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
  diagram: { type: "scatterplot", params: {
    points: [[1,50],[2,66],[3,70],[4,88],[6,116],[7,125],[8,130],[9,150],[10,162]],
    xMin: 0, xMax: 11, yMin: 30, yMax: 170,
    xGridStep: 1, xLabelStep: 2, yGridStep: 10, yLabelStep: 20,
    bestFitLine: { slope: 12.4, intercept: 38.5 },
    highlightPoint: [5, 94], highlightLabel: "(5, 94)", showResidual: true,
    xLabel: "Hours studied", yLabel: "Test score",
  } },
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
  question: "A right-triangular climbing-wall panel has legs of length $a$ and $a + 17$ and a hypotenuse of length $25$, all in feet. What is the perimeter, in feet, of the panel?",
  diagram: {
    type: "rightTriangle",
    params: {
      sideLabels: ["a", "a + 17", "25"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: stops one step early — sums only the two legs (7 + 24 = 31) without adding the hypotenuse
    { id: "A", text: "$31$" },
    { id: "B", text: "$56$" },
    // distractor: off-by-one — uses a + 17 = 17 instead of 24, gets 7 + 17 + 25 = 49
    { id: "C", text: "$49$" },
    // distractor: wrong base — double-counts the leg a, computing 7 + 24 + 25 + 7 = 63
    { id: "D", text: "$63$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Recognize the $7$-$24$-$25$ Pythagorean triple. So $a = 7$ and $a + 17 = 24$. Perimeter $= 7 + 24 + 25 = 56$.\n\n**The Full Solution:**\nApply the Pythagorean theorem: $a^2 + (a + 17)^2 = 25^2$.\n$a^2 + a^2 + 34a + 289 = 625$\n$2a^2 + 34a - 336 = 0$\n$a^2 + 17a - 168 = 0$\n$(a - 7)(a + 24) = 0$\n\nSo $a = 7$ (rejecting the negative root). Then $a + 17 = 24$.\n\nPerimeter $= 7 + 24 + 25 = 56$.\n\nVerification: $7^2 + 24^2 = 49 + 576 = 625 = 25^2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — adds only the two legs ($7 + 24 = 31$) and forgets the hypotenuse.\n* Choice C: \"off-by-one\" — uses $a + 17 = 17$ instead of $24$, getting $7 + 17 + 25 = 49$.\n* Choice D: \"wrong base\" — double-counts the leg $a$, computing $7 + 24 + 25 + 7 = 63$.\n\n**Test Day Takeaway:** Memorize the common Pythagorean triples ($3$-$4$-$5$, $5$-$12$-$13$, $7$-$24$-$25$, $8$-$15$-$17$). When the legs differ by a known constant and the hypotenuse is given, the triple often surfaces directly.",
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
// 2026-06 M2 flow diversification. Wavy flow: M[1] E[2,3] M[4,5] H[6,7] M[8] H[9] M[10] E[11] H[12,13,14] M[15] H[16,17,18] M[19] H[20,21,22].
// Distribution: E=3 (q2,q3,q11) / M=7 (q1,q4,q5,q8,q10,q15,q19) / H=12 (q6,q7,q9,q12,q13,q14,q16,q17,q18,q20,q21,q22).
// 7 transformed pool items infused: D-p14#26 (q1), E#11 (q3), D-p42#25 (q6), D-p6#26 (q12), E#17 (q13), D-p27#21 (q14), E#19/D-p25#25 (q19 — reskinned as a decrease inversion). Retired clones replaced; lint pattern names + distractor comments cleared.
// 2026-06 de-clone: q10 re-angled from "max-height TIME (=-b/2a)" to "max-height VALUE (substitute back)" so it no longer collides with q8's vertex/min-value archetype (both formerly resolved to vertex x=2). q19 reskinned off the increase-by-p% source skeleton (was cloned in T3) to a decrease-by-25% reverse-percent.

{
  id: 1,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A ferry operator surveyed $700$ randomly selected commuters, asking which of two proposed new routes they would ride. Of those surveyed, $410$ chose the Harbor Line and $290$ chose the Cove Line. If $8{,}400$ commuters in total are expected to ride one of the two new routes, by how many riders is the Harbor Line expected to exceed the Cove Line?",
  choices: [
    { id: "A", text: "$1{,}440$" },
    // distractor: stops one step early — reports the raw sample difference 410 - 290 = 120 without scaling to the population
    { id: "B", text: "$120$" },
    // distractor: wrong base — scales only the Harbor Line count (410 x 12) instead of the difference
    { id: "C", text: "$4{,}920$" },
    // distractor: wrong base — reports the total projected ridership instead of the margin
    { id: "D", text: "$8{,}400$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Population is $8{,}400 / 700 = 12$ times the sample. Scale the sample MARGIN: $(410 - 290) \\times 12 = 120 \\times 12 = 1{,}440$.\n\n**The Full Solution:**\nThe sample of $700$ scales up to $8{,}400$ by a factor of $\\dfrac{8{,}400}{700} = 12$.\nThe expected margin equals the sample margin scaled by the same factor.\nSample margin: $410 - 290 = 120$.\nProjected margin: $120 \\times 12 = 1{,}440$ riders.\n\n(Scaling each route first gives the same result: Harbor $410 \\times 12 = 4{,}920$, Cove $290 \\times 12 = 3{,}480$, difference $1{,}440$.)\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — gives the raw sample difference $120$ without scaling to the full ridership.\n* Choice C: \"wrong base\" — scales only the Harbor Line count and reports that as the margin.\n* Choice D: \"wrong base\" — reports the total projected ridership instead of the difference.\n\n**Test Day Takeaway:** To project a difference to a larger population, multiply the SAMPLE difference by the population-to-sample ratio — do not stop at the raw counts.",
  skills: ["ratios", "proportional-reasoning", "data-analysis"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A desalination plant has been expanding for several years. The function $w(t) = 4.2t + 35$ approximates the plant's daily fresh-water output, in thousands of liters, after $t$ years of operation. Which statement is the best interpretation of the $y$-intercept of the graph of $y = w(t)$ in the $ty$-plane in this context?",
  choices: [
    // distractor: confuses slope (rate) with y-intercept (initial value)
    { id: "A", text: "Output increases by about $35$ thousand liters per day each year." },
    { id: "B", text: "When the plant opened, its daily output was about $35$ thousand liters." },
    // distractor: swaps slope and intercept — uses the slope magnitude as the starting value
    { id: "C", text: "When the plant opened, its daily output was about $4.2$ thousand liters." },
    // distractor: combines both confusions — ignores the +35 and treats the start as zero
    { id: "D", text: "Output increases by about $4.2$ thousand liters per day each year, starting from zero." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Interpret Y-Intercept in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The $y$-intercept of $w(t) = 4.2t + 35$ is $w(0) = 35$. At $t = 0$ (when the plant opened), output $\\approx 35$ thousand liters per day.\n\n**The Full Solution:**\nFor a linear model $w(t) = mt + b$, the $y$-intercept is $b$, the value at $t = 0$. Here $b = 35$, and $t$ counts years of operation, so $t = 0$ marks the plant's opening. Daily output then was about $35$ thousand liters.\n\nVerification: at $t = 0$, $w = 35$; at $t = 1$, $w = 39.2$ — about $4.2$ thousand liters added in one year, which is the slope, not the intercept \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"correct slope, wrong question\" — describes the slope $4.2$, but the question asks about the $y$-intercept.\n* Choice C: \"swaps coefficients\" — uses the slope's magnitude as the starting output.\n* Choice D: \"sign error AND wrong base\" — ignores the $+35$ and treats the start as zero.\n\n**Test Day Takeaway:** $y$-intercept = value at input $0$ = the starting point in the story. Slope = rate of change per unit.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "How many solutions does the equation $8(x - 5) = -2(x + 20)$ have?",
  choices: [
    { id: "A", text: "Exactly one" },
    // distractor: wrong base — sees the matching constant terms (-40 on each side) and assumes the equation is an identity
    { id: "B", text: "Infinitely many" },
    // distractor: applies inverse operation — believes the variable terms cancel, leaving a false statement
    { id: "C", text: "Zero" },
    // distractor: off-by-one — miscounts, treating the single linear equation as quadratic-like
    { id: "D", text: "Exactly two" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Linear Equation Solution Count**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Distribute: $8x - 40 = -2x - 40$. The constants match, but the variable terms do NOT cancel: $10x = 0$, so there is exactly one solution, $x = 0$.\n\n**The Full Solution:**\n$8(x - 5) = -2(x + 20)$\n$8x - 40 = -2x - 40$\nAdd $2x$ to both sides and add $40$ to both sides:\n$10x = 0 \\Rightarrow x = 0$.\n\nBecause the coefficients of $x$ ($8$ and $-2$) differ, the lines have different slopes and cross exactly once. The matching constants ($-40$) are a decoy.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — the equal constant terms look like an identity, but identical constants alone do not make infinitely many solutions.\n* Choice C: \"applies the inverse operation\" — assumes the $x$-terms cancel to a false statement; they don't, since $8 \\neq -2$.\n* Choice D: \"off-by-one\" — a linear equation cannot have exactly two solutions.\n\n**Test Day Takeaway:** A linear equation has one solution when the $x$-coefficients differ, infinitely many when both sides are identical, and none when only the constants differ. Always distribute first.",
  skills: ["linear-equations", "solving-equations"]
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
  difficulty: "hard",
  band: 7,
  question: "For a positive integer constant $b$, which of the following expressions has a factor of $x + 3b$?",
  choices: [
    // distractor: middle coefficient 20 gives (20 - 5)/6, not an integer b
    { id: "A", text: "$2x^2 + 20x + 15b$" },
    // distractor: middle coefficient 30 gives (30 - 5)/6, not an integer b
    { id: "B", text: "$2x^2 + 30x + 15b$" },
    { id: "C", text: "$2x^2 + 41x + 15b$" },
    // distractor: middle coefficient 50 gives (50 - 5)/6, not an integer b
    { id: "D", text: "$2x^2 + 50x + 15b$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Factoring Analysis with Parameters**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** If $x + 3b$ is a factor of $2x^2 + kx + 15b$, the other factor must be $2x + 5$ (so that the constant term is $3b \\cdot 5 = 15b$). Then the middle coefficient is $k = 5 + 6b$. Only $41 = 5 + 6(6)$ gives a positive integer $b = 6$.\n\n**The Full Solution:**\nWrite the factorization as $(x + 3b)(2x + c)$. Expanding:\n$(x + 3b)(2x + c) = 2x^2 + cx + 6bx + 3bc = 2x^2 + (c + 6b)x + 3bc$.\nMatch the constant term to $15b$: $3bc = 15b \\Rightarrow c = 5$.\nMatch the middle term: $k = c + 6b = 5 + 6b$.\nFor a positive integer $b$, the middle coefficient must satisfy $\\dfrac{k - 5}{6} = b$ being a positive integer.\n* $k = 20$: $\\dfrac{15}{6}$ — not an integer.\n* $k = 30$: $\\dfrac{25}{6}$ — not an integer.\n* $k = 41$: $\\dfrac{36}{6} = 6$ \\checkmark, so $b = 6$.\n* $k = 50$: $\\dfrac{45}{6}$ — not an integer.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — $20$ does not fit the form $5 + 6b$ for an integer $b$.\n* Choice B: \"off-by-one\" — $30$ is close but yields $b = \\frac{25}{6}$, not an integer.\n* Choice D: \"wrong base\" — $50$ yields $b = \\frac{45}{6}$, not an integer.\n\n**Test Day Takeaway:** When a parametric linear binomial is a factor, fix the cofactor's constant from the constant term, then require the resulting middle coefficient to be a valid integer.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = x^3 - 6x^2 + 11x - 6$. It is known that $f(1) = 0$. What is the sum of the other two zeros of $f$?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Factoring a Cubic to Find Zeros**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~25s):** Since $f(1) = 0$, $(x - 1)$ is a factor. Divide: $x^3 - 6x^2 + 11x - 6 = (x - 1)(x^2 - 5x + 6) = (x - 1)(x - 2)(x - 3)$. Other zeros: $2$ and $3$. Sum $= 5$.\n\n**The Full Solution:**\nDivide $x^3 - 6x^2 + 11x - 6$ by $(x - 1)$ using synthetic division:\nBring down $1$; multiply by $1$ and add: $-6 + 1 = -5$. Multiply by $1$ and add: $11 + (-5) = 6$. Multiply by $1$ and add: $-6 + 6 = 0$.\nQuotient: $x^2 - 5x + 6 = (x - 2)(x - 3)$.\nZeros: $1$, $2$, $3$. The other two zeros sum to $2 + 3 = 5$.\n\n**Common Mistakes to Avoid:**\n* Reporting the sum of ALL three zeros ($1 + 2 + 3 = 6$).\n* Vieta's gives sum of all roots $= 6$ (negative of $x^2$ coefficient), but we need $6 - 1 = 5$.\n\n**Test Day Takeaway:** If one root is known, divide it out to get a quadratic, then use Vieta's on the quotient (sum of roots $= -\\frac{b}{a}$).",
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
  question: "The function $h(t) = -16t^2 + 48t + 6$ models the height, in feet, of a drone $t$ seconds after it launches straight up. What is the maximum height, in feet, that the drone reaches?",
  correctAnswer: "42",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $42$.**\n\n**The Fast Way (~20s):** Max occurs at $t = -\\dfrac{b}{2a} = -\\dfrac{48}{-32} = 1.5$. Then $h(1.5) = -16(2.25) + 48(1.5) + 6 = -36 + 72 + 6 = 42$ feet.\n\n**The Full Solution:**\nThe height function $h(t) = -16t^2 + 48t + 6$ has $a = -16 < 0$, so the parabola opens downward and the maximum height is the $y$-value of the vertex.\n\nStep 1 — find the time of the vertex: $t = -\\dfrac{b}{2a} = -\\dfrac{48}{2(-16)} = -\\dfrac{48}{-32} = 1.5$ seconds.\nStep 2 — substitute back to get the height: $h(1.5) = -16(1.5)^2 + 48(1.5) + 6 = -16(2.25) + 72 + 6 = -36 + 72 + 6 = 42$ feet.\n\n**Common Mistakes to Avoid:**\n* Reporting $1.5$ (the TIME of the maximum) instead of the maximum height.\n* Reporting $6$ (the launch height at $t = 0$) instead of the peak.\n* Forgetting to substitute the vertex time back into $h(t)$ after finding it.\n\n**Verification:** $h(0) = 6$, $h(1.5) = 42$, $h(3) = -144 + 144 + 6 = 6$ — the parabola peaks at $42$ then returns to $6$ \\checkmark.\n\n**Test Day Takeaway:** \"Maximum height\" asks for the OUTPUT at the vertex: first find $t = -\\dfrac{b}{2a}$, then substitute back to get the height.",
  skills: ["quadratic-equations", "vertex-form", "function-interpretation"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "easy",
  band: 3,
  question: "A mushroom farm recorded its daily harvest, in kilograms, on seven consecutive days: $12, 9, 15, 11, 14, 9, 16$. What is the range of these daily harvest amounts, in kilograms?",
  correctAnswer: "7",
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~10s):** Range $=$ maximum $-$ minimum $= 16 - 9 = 7$.\n\n**The Full Solution:**\nThe range of a data set is the difference between its largest and smallest values.\nLargest harvest: $16$ kg. Smallest harvest: $9$ kg.\nRange $= 16 - 9 = 7$ kg.\n\n**Common Mistakes to Avoid:**\n* Reporting the maximum ($16$) or the minimum ($9$) instead of their difference.\n* Confusing range with the mean or the median.\n\n**Test Day Takeaway:** Range is a one-step calculation: maximum minus minimum. Scan the list for the extremes and subtract.",
  skills: ["statistics", "data-analysis"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$$4x + 9y = 1$$\n$$ax + by = 1$$\nIn the given pair of equations, $a$ and $b$ are nonzero constants, and the graphs of the two equations are perpendicular lines in the $xy$-plane. Which of the following pairs of equations also represents a pair of perpendicular lines?",
  choices: [
    { id: "A", text: "$8x + 9y = 1$ and $ax + 2by = 1$" },
    // distractor: applies inverse operation — flips the sign on the b term, ruining the slope product
    { id: "B", text: "$8x + 9y = 1$ and $ax - 2by = 1$" },
    // distractor: wrong base — doubles a instead of b, so the second slope is off by a factor
    { id: "C", text: "$8x + 9y = 1$ and $2ax + by = 1$" },
    // distractor: stops one step early — negates the original first equation but leaves the second unchanged
    { id: "D", text: "$4x - 9y = 1$ and $ax + by = 1$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** Perpendicular slopes multiply to $-1$. The first line $4x + 9y = 1$ has slope $-\\dfrac{4}{9}$, so the second line $ax + by = 1$ has slope $-\\dfrac{a}{b} = \\dfrac{9}{4}$, i.e. $\\dfrac{a}{b} = -\\dfrac{9}{4}$. The new first line $8x + 9y = 1$ has slope $-\\dfrac{8}{9}$, so its partner needs slope $\\dfrac{9}{8} = \\dfrac{1}{2}\\cdot\\dfrac{9}{4}$. Halving the magnitude of $-\\dfrac{a}{b}$ means doubling $b$: $ax + 2by = 1$ has slope $-\\dfrac{a}{2b} = \\dfrac{9}{8}$ \\checkmark.\n\n**The Full Solution:**\nFrom the given perpendicular pair: slope of $4x + 9y = 1$ is $-\\dfrac{4}{9}$, and slope of $ax + by = 1$ is $-\\dfrac{a}{b}$. Perpendicularity gives $\\left(-\\dfrac{4}{9}\\right)\\left(-\\dfrac{a}{b}\\right) = -1$, so $\\dfrac{a}{b} = -\\dfrac{9}{4}$ and $-\\dfrac{a}{b} = \\dfrac{9}{4}$.\n\nFor Choice A: $8x + 9y = 1$ has slope $-\\dfrac{8}{9}$; $ax + 2by = 1$ has slope $-\\dfrac{a}{2b} = \\dfrac{1}{2}\\left(\\dfrac{9}{4}\\right) = \\dfrac{9}{8}$. Product: $\\left(-\\dfrac{8}{9}\\right)\\left(\\dfrac{9}{8}\\right) = -1$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — $ax - 2by = 1$ has slope $-\\dfrac{a}{-2b} = -\\dfrac{9}{8}$, giving a product of $+1$, not $-1$.\n* Choice C: \"wrong base\" — $2ax + by = 1$ has slope $-\\dfrac{2a}{b} = \\dfrac{9}{2}$, far from $\\dfrac{9}{8}$.\n* Choice D: \"stops one step early\" — negates the first equation's $y$-term but leaves the partner unchanged, so the product becomes $+1$.\n\n**Test Day Takeaway:** Translate perpendicularity into the slope-product condition, then track how scaling a coefficient scales the slope. Doubling the $y$-coefficient halves the slope's magnitude.",
  skills: ["linear-equations", "slope", "coordinate-geometry"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The graph of the linear function $y = f(x) + 24$ is shown in the $xy$-plane. If $c$ and $d$ are positive constants, which equation could define $f$?",
  diagram: { type: "linearGraph", params: {
    slope: -4, yIntercept: 8,
    xRange: [-4, 4], yRange: [-2, 16],
    xTickInterval: 2, yTickInterval: 4, gridInterval: 1,
    label: "y = f(x) + 24"
  } },
  choices: [
    { id: "A", text: "$f(x) = -d - cx$" },
    // distractor: misreads the intercept as positive — keeps +d though the shifted line sits well above the original
    { id: "B", text: "$f(x) = d - cx$" },
    // distractor: misreads the slope as positive
    { id: "C", text: "$f(x) = -d + cx$" },
    // distractor: gets both the slope sign and the intercept sign wrong
    { id: "D", text: "$f(x) = d + cx$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** The graph of $f(x) + 24$ has a negative slope and a $y$-intercept of $8$. So $f$ has the SAME (negative) slope, $-c$, and a $y$-intercept of $8 - 24 = -16$, which is negative, $-d$. Thus $f(x) = -d - cx$.\n\n**The Full Solution:**\nThe shown line is $y = f(x) + 24$, a vertical shift of $f$ up by $24$.\nReading the graph: the slope is negative and the $y$-intercept is $8$.\nThe slope of $f$ equals the slope of the shifted graph (shifting does not change slope): negative, so the coefficient of $x$ is $-c$ with $c > 0$.\nThe $y$-intercept of $f$ is the shown intercept minus $24$: $8 - 24 = -16$, which is negative, so the constant term is $-d$ with $d > 0$.\nTherefore $f(x) = -d - cx$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"sign error on intercept\" — keeps a positive constant $+d$, but $f$'s intercept is $-16 < 0$.\n* Choice C: \"sign error on slope\" — uses a positive slope $+c$, but the line falls left to right.\n* Choice D: \"both signs wrong\" — positive slope and positive intercept, contradicting both readings.\n\n**Test Day Takeaway:** A vertical shift changes only the intercept, not the slope. Undo the shift on the intercept, keep the slope, and read off the signs.",
  skills: ["linear-functions", "function-interpretation", "coordinate-geometry"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A rectangular glaze panel is inscribed in a circular kiln porthole so that all four corners of the panel touch the circle. The diagonal of the panel is twice the length of its shorter side, and the panel's area is $1{,}600\\sqrt{3}$ square inches. What is the diameter, in inches, of the circular porthole?",
  correctAnswer: "80",
  explanation: "**SAT Pattern: Special Right Triangle — 30-60-90**\n\n**The correct answer is $80$.**\n\n**The Fast Way (~45s):** Diagonal $= 2 \\times$ shorter side creates a $30$-$60$-$90$ triangle, so the sides are $s$ and $s\\sqrt{3}$. Area $= s \\cdot s\\sqrt{3} = s^2\\sqrt{3} = 1{,}600\\sqrt{3} \\Rightarrow s^2 = 1{,}600 \\Rightarrow s = 40$. The diagonal equals the diameter: $2s = 80$.\n\n**The Full Solution:**\nLet the shorter side be $s$. The diagonal is $2s$. By the Pythagorean theorem the longer side is $\\sqrt{(2s)^2 - s^2} = \\sqrt{3s^2} = s\\sqrt{3}$ — the $30$-$60$-$90$ ratio $s : s\\sqrt{3} : 2s$.\nArea $= s \\cdot s\\sqrt{3} = s^2\\sqrt{3}$.\nSet equal to the given area: $s^2\\sqrt{3} = 1{,}600\\sqrt{3} \\Rightarrow s^2 = 1{,}600 \\Rightarrow s = 40$.\nA rectangle inscribed in a circle has its diagonal as a diameter, so the diameter $= 2s = 80$ inches.\n\n**Common Mistakes to Avoid:**\n* Reporting $s = 40$ (the shorter side) instead of the diameter $2s = 80$.\n* Forgetting that the diagonal of an inscribed rectangle is the circle's diameter.\n\n**Verification:** $s = 40$, longer side $40\\sqrt{3}$, area $= 40 \\cdot 40\\sqrt{3} = 1{,}600\\sqrt{3}$ \\checkmark; diagonal $= 2(40) = 80 =$ diameter \\checkmark.\n\n**Test Day Takeaway:** \"Diagonal twice the short side\" signals a $30$-$60$-$90$ triangle; for any rectangle inscribed in a circle, the diagonal is the diameter.",
  skills: ["geometry", "right-triangles", "circles"]
},
{
  id: 15,
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
  id: 16,
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
  explanation: "**SAT Pattern: Independent Events Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Probability $= \\dbinom{4}{3} \\left(\\dfrac{1}{4}\\right)^3 \\left(\\dfrac{3}{4}\\right)^1 = 4 \\cdot \\dfrac{1}{64} \\cdot \\dfrac{3}{4} = \\dfrac{12}{256} = \\dfrac{3}{64}$.\n\n**The Full Solution:**\nThe probability of \"exactly $3$ red, $1$ non-red\" out of $4$ spins:\n\n* Choose which of the $4$ spins is non-red: $\\binom{4}{1} = 4$ ways.\n* Each red spin has probability $\\dfrac{1}{4}$; each non-red spin has probability $\\dfrac{3}{4}$.\n* For each arrangement: $\\left(\\dfrac{1}{4}\\right)^3 \\left(\\dfrac{3}{4}\\right) = \\dfrac{3}{256}$.\n\nTotal: $4 \\cdot \\dfrac{3}{256} = \\dfrac{12}{256} = \\dfrac{3}{64}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses only $(\\frac{1}{4})^3$, ignoring the non-red spin and the choice factor.\n* Choice C: \"stops one step early\" — gives one arrangement's probability ($\\frac{3}{256}$) but forgets to multiply by $4$ positions.\n* Choice D: \"wrong base\" — gives $(\\frac{3}{4})^3 = \\frac{27}{64}$, the probability that $3$ specific spins are all non-red.\n\n**Test Day Takeaway:** For \"exactly $k$ successes out of $n$\" with independent trials, the formula is $\\binom{n}{k} p^k (1 - p)^{n-k}$.",
  skills: ["probability"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table shows three values of $x$ and their corresponding values of $g(x)$, where $g(x) = \\dfrac{f(x)}{x+4}$ and $f$ is a linear function: $g(-24) = 4$, $g(-8) = 0$, $g(16) = 6$. What is the $y$-intercept of the graph of $y = f(x)$?",
  choices: [
    { id: "A", text: "$(0,\\,40)$" },
    // distractor: wrong base — reports an f-value from the table without fitting the full line
    { id: "B", text: "$(0,\\,32)$" },
    // distractor: stops one step early — reports the recovered slope (5) as the intercept
    { id: "C", text: "$(0,\\,5)$" },
    // distractor: applies inverse operation — uses the zero input x = -8 as the intercept value
    { id: "D", text: "$(0,\\,-8)$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** Recover $f(x) = g(x)(x+4)$: $f(-24) = 4(-20) = -80$, $f(-8) = 0$, $f(16) = 6(20) = 120$. Slope $= \\dfrac{0 - (-80)}{-8 - (-24)} = \\dfrac{80}{16} = 5$. Line: $f(x) = 5(x + 8)$. $f(0) = 40$.\n\n**The Full Solution:**\nSince $g(x) = \\dfrac{f(x)}{x + 4}$, we have $f(x) = g(x)(x + 4)$.\n$f(-24) = 4 \\cdot (-24 + 4) = 4(-20) = -80$.\n$f(-8) = 0 \\cdot (-8 + 4) = 0$.\n$f(16) = 6 \\cdot (16 + 4) = 6(20) = 120$.\nFit the line through $(-24, -80)$ and $(-8, 0)$: slope $= \\dfrac{0 - (-80)}{-8 - (-24)} = \\dfrac{80}{16} = 5$.\nUsing the point $(-8, 0)$: $f(x) = 5(x + 8)$. Check $(16, 120)$: $5(24) = 120$ \\checkmark.\nThe $y$-intercept is $f(0) = 5(8) = 40$, the point $(0, 40)$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — uses a recovered $f$-value directly without completing the line fit.\n* Choice C: \"stops one step early\" — reports the slope $5$ as the intercept.\n* Choice D: \"applies the inverse operation\" — uses the zero-input $x = -8$ as the intercept value.\n\n**Test Day Takeaway:** When $g(x) = f(x)/(x+c)$, multiply back to recover $f$-values, fit the line, then read the intercept at $x = 0$.",
  skills: ["linear-functions", "rational-functions"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A survey asks $200$ people whether they own a cat, a dog, or both. The results show that $90$ own a cat, $75$ own a dog, and $140$ own at least one of the two. How many people own both a cat and a dog?",
  correctAnswer: "25",
  explanation: "**SAT Pattern: Inclusion-Exclusion Principle**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~20s):** Inclusion-exclusion: $|C \\cup D| = |C| + |D| - |C \\cap D|$, so $140 = 90 + 75 - |C \\cap D|$, giving $|C \\cap D| = 25$.\n\n**The Full Solution:**\nLet $C$ = cat owners, $D$ = dog owners.\nBy inclusion-exclusion: $|C \\cup D| = |C| + |D| - |C \\cap D|$.\n$140 = 90 + 75 - |C \\cap D|$\n$140 = 165 - |C \\cap D|$\n$|C \\cap D| = 25$.\n\nVerification: only cat $= 90 - 25 = 65$, only dog $= 75 - 25 = 50$, both $= 25$. Total at least one $= 65 + 50 + 25 = 140$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing $200 - 140 = 60$ (people with neither, not both).\n* Adding $90 + 75 = 165$ without subtracting.\n\n**Test Day Takeaway:** Inclusion-exclusion: $|A \\cup B| = |A| + |B| - |A \\cap B|$. Solve for the unknown intersection.",
  skills: ["probability"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "After the quantity $x$ is decreased by $25\\%$, the result is $180$. What is the value of $x$?",
  choices: [
    { id: "A", text: "$240$" },
    // distractor: wrong base — divides 180 by the decrease 0.25 instead of by the retained 0.75
    { id: "B", text: "$720$" },
    // distractor: applies inverse operation — decreases 180 by 25% instead of reversing the decrease
    { id: "C", text: "$135$" },
    // distractor: off-by-one — treats it as an increase and multiplies 180 by 1.25
    { id: "D", text: "$225$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** \"Decrease by $25\\%$\" multiplies by $1 - 0.25 = 0.75$. So $0.75x = 180 \\Rightarrow x = \\dfrac{180}{0.75} = 240$.\n\n**The Full Solution:**\nDecreasing $x$ by $25\\%$ leaves $75\\%$ of it: $x - 0.25x = 0.75x$.\nSet equal to the result: $0.75x = 180 \\Rightarrow x = \\dfrac{180}{0.75} = 240$.\n\nVerification: $240$ decreased by $25\\%$ is $240 - 0.25(240) = 240 - 60 = 180$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — divides $180$ by the decrease $0.25$ ($\\frac{180}{0.25} = 720$) instead of by the retained fraction $0.75$.\n* Choice C: \"applies the inverse operation\" — decreases $180$ by $25\\%$ ($180 - 45 = 135$) instead of reversing the decrease.\n* Choice D: \"off-by-one\" — treats it as an increase and computes $180 \\times 1.25 = 225$.\n\n**Test Day Takeaway:** \"Decrease by $p\\%$\" means multiply by $1 - \\dfrac{p}{100}$. To reverse, divide the result by that retained factor — not by the percent removed.",
  skills: ["percent-change", "percent-word-problems"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
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
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$$(x + 5)^2 + (y - 22)^2 = 144$$\n\nThe graph of the given equation is a circle in the $xy$-plane. The point $(a, b)$ lies on the circle. Which of the following is a possible value for $a$?",
  choices: [
    // distractor: off-by-one — extends one unit past the left edge of the x-range
    { id: "A", text: "$-18$" },
    { id: "B", text: "$-16$" },
    // distractor: wrong base — uses the center x-coordinate plus the radius incorrectly
    { id: "C", text: "$10$" },
    // distractor: applies inverse operation — uses the center y-coordinate as an x-value
    { id: "D", text: "$22$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Circle Equation — Center and Radius**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Center $(-5, 22)$, radius $\\sqrt{144} = 12$. The $x$-coordinates on the circle span $[-5 - 12,\\, -5 + 12] = [-17, 7]$. Only $-16$ falls in that interval.\n\n**The Full Solution:**\nThe equation $(x + 5)^2 + (y - 22)^2 = 144$ has center $(-5, 22)$ and radius $12$.\nFor any point on the circle, $|x - (-5)| \\le 12$, so $-17 \\le x \\le 7$.\nCheck each choice: $-18 < -17$ (too far left), $-16 \\in [-17, 7]$ \\checkmark, $10 > 7$ (too far right), $22 > 7$ (too far right).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — $-18$ is just one unit past the left edge $-17$.\n* Choice C: \"wrong base\" — adds the radius to the center incorrectly, exceeding the right edge.\n* Choice D: \"applies the inverse operation\" — uses the center's $y$-coordinate $22$ as an $x$-value.\n\n**Test Day Takeaway:** For a point on a circle, the $x$-coordinate lies within one radius of the center's $x$-coordinate: $h - r \\le x \\le h + r$.",
  skills: ["circle-equations", "geometry"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Two identical rectangular prisms each have a height of $100$ centimeters (cm). The base of each prism is a square, and the surface area of each prism is $K$ cm$^2$. If the prisms are glued together along a square base, the resulting prism has a surface area of $\\dfrac{41}{21}K$ cm$^2$. What is the side length, in cm, of each square base?",
  choices: [
    // distractor: off-by-one — solves a related equation that yields half the side length
    { id: "A", text: "$5$" },
    { id: "B", text: "$10$" },
    // distractor: wrong base — forgets the hidden base area and overshoots the side length
    { id: "C", text: "$15$" },
    // distractor: applies inverse operation — uses the height-to-ratio relationship incorrectly
    { id: "D", text: "$20$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Composite Solid Surface Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~50s):** One prism: $K = 2s^2 + 4s(100) = 2s^2 + 400s$. Glued end-to-end, the two square bases at the seam are hidden: total $= 2(2s^2 + 400s) - 2s^2 = 2s^2 + 800s$. Set $2s^2 + 800s = \\dfrac{41}{21}(2s^2 + 400s)$ and solve: $s = 10$.\n\n**The Full Solution:**\nEach prism has square base side $s$ and height $100$, so its surface area is\n$K = 2s^2 + 4(s)(100) = 2s^2 + 400s$.\nGluing two along a square base hides $2s^2$ of base area (one square from each prism), so the combined surface area is\n$2K - 2s^2 = 2(2s^2 + 400s) - 2s^2 = 2s^2 + 800s$.\nSet this equal to $\\dfrac{41}{21}K$:\n$2s^2 + 800s = \\dfrac{41}{21}(2s^2 + 400s)$.\nMultiply both sides by $21$: $21(2s^2 + 800s) = 41(2s^2 + 400s)$\n$42s^2 + 16{,}800s = 82s^2 + 16{,}400s$\n$400s = 40s^2 \\Rightarrow s = 10$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — solving a mis-set equation halves the side to $5$.\n* Choice C: \"wrong base\" — forgetting to subtract the hidden $2s^2$ overshoots the side length.\n* Choice D: \"applies the inverse operation\" — misuses the height in the ratio.\n\n**Test Day Takeaway:** Gluing two solids hides the glued faces — subtract that area from the doubled total before comparing.",
  skills: ["surface-area", "geometry"]
}
      ]
    }
  ]
};

export default practiceTest7;
