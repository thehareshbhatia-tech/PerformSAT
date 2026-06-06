// Practice Test 6 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// 2026-06 M2 flow diversification: Module 2 reflowed to a wavy difficulty
// pattern unique to this test — easy at Q1/Q6/Q16 (Q16 a mid-module range
// breather), medium at Q2/Q3/Q5/Q9/Q12/Q14/Q17, hard at the rest with hard
// closers Q18-Q22. Five transformed "difficult-question" pool items infused:
// no-solution parameter (Q2), quadratic-linear greatest-x (Q4), inscribed-
// sphere volume (Q8), exponential-period growth rate (Q9), grouped-data mean
// bounds (Q13). Retired cloned archetypes (outlier-effect, residual, budget-
// floor inequality, find-k equivalence, two-way conditional probability,
// radical exponent p+q, direct trig ratio, mean-from-list) replaced with
// fresh palette-driven items. M1 easy block reordered + shifted-output opener
// re-coefficiented.

export const practiceTest6 = {
  id: "practice-test-6",
  title: "Practice Test 6",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
// Practice Test 6 — Math Module 1 (22 questions)
// Easy block (Q1-Q5) de-cloned + reordered to a non-canonical archetype
// sequence: multi-step-linear (Q1), percent-of-whole (Q2), shifted-output
// (Q3, new 6y+7=31 coefficient family), reverse-percent (Q4), proportion (Q5,
// drone-delivery palette). Two prior duplicate stems (ticket-revenue and
// 4x-9=23 each appeared twice) were collapsed and replaced with the fresh
// shifted-output and proportion items.

// ===== EASY (Q1–Q5) =====

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $4x - 9 = 23$, what is the value of $x$?",
  choices: [
    // distractor: applies inverse op — subtracts 9 from 23 instead of adding
    { id: "A", text: "$3.5$" },
    // distractor: arithmetic slip — uses 23 + 5 instead of 23 + 9
    { id: "B", text: "$7$" },
    { id: "C", text: "$8$" },
    // distractor: stops one step early — leaves answer at 4x = 14 instead of dividing
    { id: "D", text: "$14$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $4x = 32$, so $x = 8$.\n\n**The Full Solution:**\n$4x - 9 = 23$\n$4x = 23 + 9 = 32$\n$x = \\dfrac{32}{4} = 8$\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — computes $\\dfrac{23 - 9}{4} = 3.5$ (subtracts $9$ instead of adding).\n* Choice B: \"off-by-one\" — arithmetic slip giving $\\dfrac{23 + 5}{4} = 7$.\n* Choice D: \"stops one step early\" — computes $23 - 9 = 14$ but forgets to divide by $4$.\n\n**Test Day Takeaway:** Isolate the variable in two ordered moves: first add or subtract, then divide.",
  skills: ["solving-equations"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Of the $480$ tickets sold for a community theatre play, $30\\%$ were sold at the door. The other tickets were sold in advance for $\\$8$ each. What was the total revenue, in dollars, from the advance tickets?",
  choices: [
    // distractor: wrong base — uses 30% of 480 = 144 in advance, then 144*8
    { id: "A", text: "$\\$1{,}152$" },
    // distractor: stops one step early — arithmetic slip on the 30% count
    { id: "B", text: "$\\$1{,}440$" },
    { id: "C", text: "$\\$2{,}688$" },
    // distractor: applies the inverse — multiplies the full 480 by 8, ignoring the split
    { id: "D", text: "$\\$3{,}840$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Advance tickets $= 70\\%$ of $480 = 336$. Revenue $= 336 \\cdot 8 = 2{,}688$.\n\n**The Full Solution:**\nIf $30\\%$ were sold at the door, then $70\\%$ were sold in advance.\nAdvance count: ${}0.70 \\cdot 480 = 336$ tickets.\nAdvance revenue: $336 \\cdot \\$8 = \\$2{,}688$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses $30\\%$ instead of $70\\%$: ${}0.30 \\cdot 480 \\cdot 8 = 1{,}152$.\n* Choice B: \"stops one step early\" — uses $30\\%$ count $\\times \\$8$ but with arithmetic slip: $144 \\cdot 10 = 1{,}440$.\n* Choice D: \"applies the inverse\" — multiplies $480 \\cdot 8 = 3{,}840$, ignoring the percent split entirely.\n\n**Test Day Takeaway:** \"$x\\%$ at the door\" means $(100 - x)\\%$ in advance — read the COMPLEMENT, not the named quantity.",
  skills: ["percents", "word-problems"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $6y + 7 = 31$, what is the value of $6y - 2$?",
  choices: [
    // distractor: stops one step early — reports 6y = 24 without applying the -2 shift
    { id: "A", text: "$24$" },
    { id: "B", text: "$22$" },
    // distractor: solves for the variable y = 4 instead of the shifted expression
    { id: "C", text: "$4$" },
    // distractor: subtracts 2 from the right side 31 instead of from 6y
    { id: "D", text: "$29$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** From $6y + 7 = 31$, the block $6y = 24$. Then $6y - 2 = 24 - 2 = 22$ — no need to find $y$.\n\n**The Full Solution:**\nTreat $6y$ as a single block. Subtract $7$ from both sides of $6y + 7 = 31$:\n$6y = 24$.\nThe question asks for $6y - 2$, so subtract $2$ from the block:\n$6y - 2 = 24 - 2 = 22$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports the block value $6y = 24$ without applying the $-2$ shift.\n* Choice C: \"solves for the variable\" — finds $y = 4$ and reports it instead of evaluating the requested expression.\n* Choice D: \"wrong base\" — subtracts $2$ from the right side $31$ instead of from $6y$.\n\n**Test Day Takeaway:** When asked for an expression like $6y - 2$, isolate the matching block ($6y$) first — you rarely need the variable itself.",
  skills: ["solving-equations"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A clinic recorded that $84$ of its patients last week were children. If children accounted for $28\\%$ of all patients last week, how many total patients did the clinic see that week?",
  choices: [
    // distractor: applies the percent forward — 84 * 0.28 ~ 23
    { id: "A", text: "$24$" },
    // distractor: wrong base — divides 84 by the complement 0.72 instead of 0.28
    { id: "B", text: "$117$" },
    { id: "C", text: "$300$" },
    // distractor: decimal slip — divides by 0.028 instead of 0.28
    { id: "D", text: "$3{,}000$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Total $\\times 0.28 = 84$, so total $= \\frac{84}{0.28} = 300$.\n\n**The Full Solution:**\nLet $T$ be the total number of patients. Then ${}0.28 \\cdot T = 84$.\nDivide: $T = \\dfrac{84}{0.28} = 300$.\n\nVerification: $28\\%$ of $300 = 0.28 \\cdot 300 = 84$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — multiplies $84 \\cdot 0.28 \\approx 23.5$ rounded to $24$.\n* Choice B: \"wrong base\" — divides by the complement $0.72$ (treats $84$ as the adult count).\n* Choice D: \"off-by-one / decimal slip\" — divides by $0.028$ instead of $0.28$.\n\n**Test Day Takeaway:** When the part is given as a percent of an unknown total, divide the part by the percent (as a decimal) to recover the whole.",
  skills: ["percents", "word-problems"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A drone-delivery fleet completes deliveries at a constant rate. The fleet completed $60$ deliveries during a $4$-hour window. At this rate, how many deliveries will the fleet complete during a $10$-hour window?",
  choices: [
    // distractor: stops one step early — reports the hourly rate 15 instead of the 10-hour total
    { id: "A", text: "$15$" },
    // distractor: inverts the proportion — computes 60*4/10 = 24
    { id: "B", text: "$24$" },
    // distractor: additive error — adds the extra 6 hours as +1 delivery each (60 + 6)
    { id: "C", text: "$66$" },
    { id: "D", text: "$150$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Rate $= \\dfrac{60}{4} = 15$ deliveries per hour. In $10$ hours: $15 \\cdot 10 = 150$.\n\n**The Full Solution:**\nA constant rate means deliveries are proportional to time:\n$\\dfrac{60}{4} = \\dfrac{x}{10}$.\nCross-multiply: $4x = 600$, so $x = 150$.\n\nVerification: $15$ per hour $\\times 10$ hours $= 150$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports the unit rate $15$ instead of the $10$-hour total.\n* Choice B: \"inverts the proportion\" — computes $\\dfrac{60 \\cdot 4}{10} = 24$, swapping the $4$ and $10$.\n* Choice C: \"additive error\" — adds the extra $6$ hours as one delivery each: $60 + 6 = 66$.\n\n**Test Day Takeaway:** Constant-rate problems are proportions. Find the unit rate first, then multiply by the new amount.",
  skills: ["proportions", "word-problems"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A circle in the $xy$-plane has the equation $(x - 4)^2 + (y + 1)^2 = 36$. What is the radius of the circle?",
  choices: [
    // distractor: wrong base — reads h = 4 from center instead of computing r
    { id: "A", text: "$4$" },
    // distractor: applies inverse op — divides 36 by 2 instead of taking square root
    { id: "B", text: "$18$" },
    { id: "C", text: "$6$" },
    // distractor: stops one step early — gives r^2 = 36 as the radius
    { id: "D", text: "$36$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $(x - h)^2 + (y - k)^2 = r^2$, so $r^2 = 36$ and $r = 6$.\n\n**The Full Solution:**\nThe standard form of a circle is $(x - h)^2 + (y - k)^2 = r^2$.\nHere $r^2 = 36$, so $r = \\sqrt{36} = 6$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — reads the $h$-value ($4$) from the center instead of finding $r$.\n* Choice B: \"applies inverse op\" — divides $36$ by $2$ instead of taking the square root.\n* Choice D: \"stops one step early\" — reports $r^2 = 36$ as the radius without taking the square root.\n\n**Test Day Takeaway:** In $(x - h)^2 + (y - k)^2 = r^2$, the right side is $r^2$, NOT $r$. Always take the square root.",
  skills: ["circle-equations"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "\n\n| | Reusable Bag | Plastic Bag | Total |\n|---|---|---|---|\n| Members | $96$ | $24$ | $120$ |\n| Non-members | $42$ | $108$ | $150$ |\n| Total | $138$ | $132$ | $270$ |\n\nA grocery store surveyed shoppers about their bag preference. The two-way table summarizes the results. If a shopper who prefers a reusable bag is selected at random, what is the probability that the shopper is a member?",
  choices: [
    // distractor: wrong base — uses 96/270 (the grand total)
    { id: "A", text: "$\\dfrac{16}{45}$" },
    // distractor: stops one step early — uses members count only (96/120)
    { id: "B", text: "$\\dfrac{4}{5}$" },
    { id: "C", text: "$\\dfrac{16}{23}$" },
    // distractor: swaps numerator/denominator (138/96 simplified)
    { id: "D", text: "$\\dfrac{23}{16}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Restrict to the \"Reusable Bag\" column (total $138$). Members in that column: $96$. Probability $= \\dfrac{96}{138} = \\dfrac{16}{23}$.\n\n**The Full Solution:**\nThe condition \"prefers a reusable bag\" restricts the sample space to that column, with $138$ shoppers.\nFavorable outcomes: shoppers who prefer reusable AND are members $= 96$.\nProbability $= \\dfrac{96}{138} = \\dfrac{16}{23}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses the grand total $270$ as denominator: $\\dfrac{96}{270} = \\dfrac{16}{45}$.\n* Choice B: \"stops one step early\" — uses the row total $120$ as denominator: $\\dfrac{96}{120} = \\dfrac{4}{5}$ (this is $P(\\text{reusable} \\mid \\text{member})$, the wrong direction).\n* Choice D: \"swaps numerator/denominator\" — uses $\\dfrac{138}{96}$ simplified.\n\n**Test Day Takeaway:** \"Given X\" means restrict to the X-row or X-column. Numerator counts the favorable cases in that subset; denominator is the subset's total.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The scatterplot below shows the relationship between the number of hours $x$ a student practices a sport per week and their performance score $y$. The line of best fit for the data is $y = 6.4x + 22$. According to the model, what is the predicted score for a student who practices for $9$ hours per week?",
  diagram: { type: "scatterplot", params: {
    points: [[1,30],[2,32],[3,42],[4,46],[5,52],[6,62],[7,64],[8,74],[10,84],[11,90]],
    xMin: 0, xMax: 12, yMin: 0, yMax: 100,
    xGridStep: 1, yGridStep: 10, xLabelStep: 2, yLabelStep: 20,
    xLabel: "Hours practiced per week", yLabel: "Performance score",
    bestFitLine: { slope: 6.4, intercept: 22 },
  } },
  correctAnswer: "79.6",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**The correct answer is $79.6$.**\n\n**The Fast Way (~10s):** Substitute $x = 9$: $y = 6.4(9) + 22 = 57.6 + 22 = 79.6$.\n\n**The Full Solution:**\nThe predicted value comes from substituting the input directly:\n$y = 6.4(9) + 22 = 57.6 + 22 = 79.6$.\n\n**Common Mistakes to Avoid:**\n* Computing only the slope contribution: $6.4 \\cdot 9 = 57.6$ and forgetting to add the intercept $22$.\n* Reading the equation as $y = 6.4 + 22x$, giving $6.4 + 198 = 204.4$.\n* Rounding the slope $6.4$ to $6$ and computing $6(9) + 22 = 76$.\n\n**Verification:** The intercept $22$ is the predicted score for $x = 0$, and the slope $6.4$ is the predicted score increase per added hour, so the model's value at $x = 9$ is $22 + 9 \\cdot 6.4 = 79.6$ \\checkmark.\n\n**Test Day Takeaway:** A line of best fit is just a linear function. Plug in the input to get the prediction. Use BOTH the slope and the intercept.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, line $\\ell$ passes through the origin and has a slope of $\\dfrac{3}{4}$. Which of the following points lies on line $\\ell$?",
  choices: [
    // distractor: swaps numerator/denominator — uses (3, 4) thinking rise = 4, run = 3
    { id: "A", text: "$(3, 4)$" },
    // distractor: applies inverse op — uses slope 4/3: 4/3 * 6 = 8
    { id: "B", text: "$(6, 8)$" },
    { id: "C", text: "$(8, 6)$" },
    // distractor: wrong base — uses y = 3x/2: 3/2 * 4 = 6
    { id: "D", text: "$(4, 6)$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Points on a Line**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Line: $y = \\dfrac{3}{4}x$ (through origin). Check $(8, 6)$: $\\dfrac{3}{4}(8) = 6$ \\checkmark.\n\n**The Full Solution:**\nSince the line passes through the origin with slope $\\dfrac{3}{4}$: $y = \\dfrac{3}{4}x$.\n* Check $(3, 4)$: $\\dfrac{3}{4}(3) = 2.25 \\neq 4$.\n* Check $(6, 8)$: $\\dfrac{3}{4}(6) = 4.5 \\neq 8$.\n* Check $(8, 6)$: $\\dfrac{3}{4}(8) = 6$ \\checkmark.\n* Check $(4, 6)$: $\\dfrac{3}{4}(4) = 3 \\neq 6$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"swaps numerator/denominator\" — confuses rise and run by reading slope as $\\dfrac{4}{3}$.\n* Choice B: \"applies the inverse operation\" — uses slope $\\dfrac{4}{3}$: $\\dfrac{4}{3}(6) = 8$.\n* Choice D: \"wrong base\" — uses $y = \\dfrac{3}{2}x$: $\\dfrac{3}{2}(4) = 6$.\n\n**Test Day Takeaway:** For a point to be on $y = mx$, the ratio $\\frac{y}{x}$ must equal the slope $m$.",
  skills: ["slope", "coordinate-geometry", "linear-functions"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The function $f$ is defined by $f(x) = 800(0.85)^x$. What is the value of $f(0) + 100$?",
  correctAnswer: "900",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $900$.**\n\n**The Fast Way (~10s):** Any nonzero base raised to $0$ is $1$, so $f(0) = 800$. Then $f(0) + 100 = 900$.\n\n**The Full Solution:**\n$f(0) = 800 \\cdot (0.85)^0 = 800 \\cdot 1 = 800$.\n\nThen $f(0) + 100 = 800 + 100 = 900$.\n\n**Common Mistakes to Avoid:**\n* Computing $(0.85)^0 = 0$ (the value is $1$, not $0$).\n* Computing $f(1) = 800 \\cdot 0.85 = 680$ and adding $100$ to get $780$ (used $x = 1$ instead of $x = 0$).\n* Stopping at $f(0) = 800$ and forgetting the $+100$ shift.\n\n**Verification:** By definition, $a^0 = 1$ for any $a \\neq 0$. So $f(0) = 800$, and $f(0) + 100 = 900$ \\checkmark.\n\n**Test Day Takeaway:** $f(0)$ in an exponential $a \\cdot b^x$ is always $a$, the initial value. Watch for shifted-output prompts like $f(0) + c$.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The function $f$ is defined by $f(x) = 2x^2 - 5$. The function $g$ is defined by $g(x) = f(x - 3)$. What is the value of $g(5)$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: Function Transformation**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~15s):** $g(5) = f(5 - 3) = f(2) = 2(2)^2 - 5 = 8 - 5 = 3$.\n\n**The Full Solution:**\nBy definition, $g(x) = f(x - 3)$. To find $g(5)$:\n$g(5) = f(5 - 3) = f(2)$.\n$f(2) = 2(2)^2 - 5 = 2 \\cdot 4 - 5 = 8 - 5 = 3$.\n\n**Common Mistakes to Avoid:**\n* Computing $f(5)$ directly: $f(5) = 2(25) - 5 = 45$ — forgets the horizontal shift.\n* Computing $f(5 + 3) = f(8) = 2(64) - 5 = 123$ — applies the shift in the wrong direction.\n* Computing $f(2) = 2 \\cdot 2 - 5 = -1$ — forgets to square.\n\n**Verification:** $g(x) = 2(x - 3)^2 - 5$, so $g(5) = 2(2)^2 - 5 = 3$ \\checkmark.\n\n**Test Day Takeaway:** $g(x) = f(x - h)$ shifts $f$ to the RIGHT by $h$. To evaluate, replace $x$ with $x - h$ inside $f$ and compute.",
  skills: ["function-interpretation", "function-transformation"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "An investment of $\\$2{,}000$ earns $5\\%$ interest compounded annually. Which expression represents the value of the investment, in dollars, after $t$ years?",
  choices: [
    // distractor: wrong base — writes 5% as 0.5 instead of 0.05
    { id: "A", text: "$2000(1.5)^t$" },
    { id: "B", text: "$2000(1.05)^t$" },
    // distractor: applies inverse op — uses (1 - 0.05) = 0.95 (decay)
    { id: "C", text: "$2000(0.95)^t$" },
    // distractor: stops one step early — models simple interest as linear growth
    { id: "D", text: "$2000 + 100t$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Compound Interest**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $5\\%$ annual growth means multiplying by $1.05$ each year. Value $= 2000(1.05)^t$.\n\n**The Full Solution:**\nThe compound interest formula is $A = P(1 + r)^t$ where $P = 2000$ and $r = 0.05$.\n$A = 2000(1 + 0.05)^t = 2000(1.05)^t$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — writes $5\\%$ as $0.5$ instead of $0.05$, giving $1 + 0.5 = 1.5$.\n* Choice C: \"applies the inverse operation\" — uses $1 - 0.05 = 0.95$, modeling decay instead of growth.\n* Choice D: \"stops one step early\" — models simple interest ($\\$100$/year) as linear growth instead of compound.\n\n**Test Day Takeaway:** Compound growth: $P(1 + r)^t$. Always convert the percent to a decimal AND add to $1$ (don't subtract for growth).",
  skills: ["exponential-functions"]
},

// ===== MEDIUM (Q6–Q14) =====

{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A line in the $xy$-plane passes through the points $(-4, 11)$ and $(2, -7)$. What is the $y$-intercept of the line?",
  choices: [
    // distractor: stops one step early — gives slope (-3) instead of intercept
    { id: "A", text: "$-3$" },
    // distractor: applies inverse op — adds slope*x_1 instead of subtracting
    { id: "B", text: "$23$" },
    { id: "C", text: "$-1$" },
    // distractor: wrong base — uses x = 2, y = -7 directly without computing slope
    { id: "D", text: "$-7$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Slope $= \\dfrac{-7 - 11}{2 - (-4)} = \\dfrac{-18}{6} = -3$. Using $(2, -7)$: $-7 = -3(2) + b$, so $b = -7 + 6 = -1$.\n\n**The Full Solution:**\nSlope: $m = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{-7 - 11}{2 - (-4)} = \\dfrac{-18}{6} = -3$.\n\nUse point-slope form with $(2, -7)$:\n$y = -3x + b$\n$-7 = -3(2) + b$\n$-7 = -6 + b$\n$b = -1$.\n\nVerification: at $x = -4$, $y = -3(-4) - 1 = 12 - 1 = 11$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports the slope $-3$ instead of the intercept.\n* Choice B: \"applies inverse op\" — uses $11 - (-3)(-4) = 11 - 12$ wrongly as $11 + 12 = 23$.\n* Choice D: \"wrong base\" — reports $y_2 = -7$ as the intercept (only correct if the line passes through the $y$-axis at that $y$).\n\n**Test Day Takeaway:** Two-point line: compute slope first, then plug either point into $y = mx + b$ to solve for $b$.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The system of equations is:\n\n$3x - 2y = 19$\n$3x + 2y = 5$\n\nWhat is the value of $y$?",
  choices: [
    // distractor: stops one step early — solves for x and reports x = 4
    { id: "A", text: "$4$" },
    // distractor: applies inverse op — adds equations and solves for y wrongly (gives positive 7/2)
    { id: "B", text: "$\\dfrac{7}{2}$" },
    { id: "C", text: "$-\\dfrac{7}{2}$" },
    // distractor: wrong base — uses 19 - 5 = 14 and divides by 4 to get 3.5 with wrong sign
    { id: "D", text: "$3.5$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Subtract equation 2 from equation 1: $-4y = 14$, so $y = -\\dfrac{7}{2}$.\n\n**The Full Solution:**\nEquation 1 minus equation 2:\n$(3x - 2y) - (3x + 2y) = 19 - 5$\n$-4y = 14$\n$y = -\\dfrac{14}{4} = -\\dfrac{7}{2}$\n\nVerification: equation 2 gives $3x + 2(-\\frac{7}{2}) = 5$, so $3x = 12$ and $x = 4$. Then equation 1: $3(4) - 2(-\\frac{7}{2}) = 12 + 7 = 19$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — solves for $x = 4$ and reports it instead of $y$.\n* Choice B: \"wrong sign\" — adds equations to get $6x = 24$ and confuses the elimination order, dropping the sign.\n* Choice D: \"applies inverse op\" — uses $\\dfrac{19 - 5}{4} = 3.5$ as if eliminating without sign tracking.\n\n**Test Day Takeaway:** When the question asks only for $y$, look for an elimination move that cancels $x$ in one step. Subtraction often beats substitution.",
  skills: ["systems-of-equations", "solving-equations"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $4^{2x} \\cdot 8^{x+1} = 2^{17}$, what is the value of $x$?",
  correctAnswer: "2",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~30s):** Convert to base $2$: $4^{2x} = 2^{4x}$ and $8^{x+1} = 2^{3x + 3}$. So $2^{4x + 3x + 3} = 2^{17}$, giving $7x + 3 = 17$ and $x = 2$.\n\n**The Full Solution:**\nConvert all bases to $2$:\n$4^{2x} = (2^2)^{2x} = 2^{4x}$.\n$8^{x + 1} = (2^3)^{x + 1} = 2^{3x + 3}$.\n\nMultiply: $2^{4x} \\cdot 2^{3x + 3} = 2^{4x + 3x + 3} = 2^{7x + 3}$.\n\nSet exponents equal:\n$7x + 3 = 17$\n$7x = 14$\n$x = 2$.\n\n**Common Mistakes to Avoid:**\n* Forgetting that $8 = 2^3$ (not $2^2$) when converting bases.\n* Forgetting to distribute: $3(x + 1) = 3x + 3$, not $3x + 1$.\n* Adding bases instead of exponents (treating multiplication of powers as power addition).\n\n**Verification:** $4^4 \\cdot 8^3 = 256 \\cdot 512 = 131{,}072 = 2^{17}$ \\checkmark.\n\n**Test Day Takeaway:** Convert all bases to the smallest common base, then add exponents on multiplication, then equate.",
  skills: ["exponent-rules", "exponential-functions"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, a line with slope $2$ is tangent to the circle $(x - 1)^2 + (y - 2)^2 = 5$. Which of the following could be the $y$-intercept of this tangent line?",
  choices: [
    // distractor: wrong base — uses b = 2 (the y-coordinate of the center)
    { id: "A", text: "$2$" },
    { id: "B", text: "$-5$" },
    // distractor: stops one step early — gives sqrt(5) as if that's the intercept
    { id: "C", text: "$\\sqrt{5}$" },
    // distractor: applies inverse op — sets distance to 0 (line through center)
    { id: "D", text: "$0$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Line: $y = 2x + b$, or $2x - y + b = 0$. Distance from center $(1, 2)$ to line $= \\dfrac{|2(1) - 2 + b|}{\\sqrt{4 + 1}} = \\dfrac{|b|}{\\sqrt{5}}$. For tangency, set equal to radius $\\sqrt{5}$: $|b| = 5$, so $b = 5$ or $b = -5$. Among the choices, $b = -5$ appears.\n\n**The Full Solution:**\nThe tangent line has the form $y = 2x + b$, rewritten as $2x - y + b = 0$.\nDistance from center $(1, 2)$ to this line:\n$d = \\dfrac{|2(1) - 1(2) + b|}{\\sqrt{2^2 + (-1)^2}} = \\dfrac{|2 - 2 + b|}{\\sqrt{5}} = \\dfrac{|b|}{\\sqrt{5}}$.\n\nFor tangency, $d$ equals the radius $r = \\sqrt{5}$:\n$\\dfrac{|b|}{\\sqrt{5}} = \\sqrt{5} \\Rightarrow |b| = 5 \\Rightarrow b = 5 \\text{ or } b = -5$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses $b = 2$ (the $y$-coordinate of the center) without applying the distance condition.\n* Choice C: \"stops one step early\" — gives $\\sqrt{5}$ (the radius) as if that were the intercept.\n* Choice D: \"applies inverse op\" — sets distance to $0$ (line through center, secant of length $0$ is no tangent).\n\n**Test Day Takeaway:** A tangent line's distance from the center equals the radius. Use $d = \\dfrac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}$.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In triangle $ABC$, $\\overline{DE}$ is parallel to $\\overline{BC}$ where $D$ is on $\\overline{AB}$ and $E$ is on $\\overline{AC}$. If $AD = 6$, $DB = 9$, and $AE = 8$, what is the length of $EC$?",
  correctAnswer: "12",
  explanation: "**SAT Pattern: Similar Triangles (Side Splitter Theorem)**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~15s):** Side splitter: $\\dfrac{AD}{DB} = \\dfrac{AE}{EC}$, so $\\dfrac{6}{9} = \\dfrac{8}{EC}$, giving $EC = \\dfrac{9 \\cdot 8}{6} = 12$.\n\n**The Full Solution:**\nSince $\\overline{DE} \\parallel \\overline{BC}$, by the basic proportionality (side splitter) theorem:\n$\\dfrac{AD}{DB} = \\dfrac{AE}{EC}$.\n$\\dfrac{6}{9} = \\dfrac{8}{EC}$\n$6 \\cdot EC = 9 \\cdot 8 = 72$\n$EC = 12$.\n\n**Common Mistakes to Avoid:**\n* Using $\\dfrac{AD}{AB}$ on the LHS but $\\dfrac{AE}{EC}$ on the RHS (mixed proportional pairs).\n* Reporting $AC = AE + EC = 8 + 12 = 20$ instead of $EC$.\n\n**Verification:** $\\dfrac{AD}{DB} = \\dfrac{6}{9} = \\dfrac{2}{3}$ and $\\dfrac{AE}{EC} = \\dfrac{8}{12} = \\dfrac{2}{3}$ \\checkmark. Also $\\dfrac{AD}{AB} = \\dfrac{6}{15} = \\dfrac{2}{5}$ matches $\\dfrac{AE}{AC} = \\dfrac{8}{20} = \\dfrac{2}{5}$ \\checkmark.\n\n**Test Day Takeaway:** When a line parallel to one side of a triangle intersects the other two sides, it divides them PROPORTIONALLY — match the same ratio shape on both sides.",
  skills: ["similar-triangles", "ratios"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation of a circle in the $xy$-plane is $x^2 + y^2 - 10x + 6y + 18 = 0$. What are the coordinates of the center and the radius of the circle?",
  choices: [
    // distractor: wrong sign — flips signs from completing the square
    { id: "A", text: "Center $(-5, 3)$, radius $4$" },
    { id: "B", text: "Center $(5, -3)$, radius $4$" },
    // distractor: stops one step early — gives r^2 = 16 as the radius
    { id: "C", text: "Center $(5, -3)$, radius $16$" },
    // distractor: applies inverse op — uses raw coefficients -10, 6 as center directly
    { id: "D", text: "Center $(10, -6)$, radius $\\sqrt{18}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Group and complete the square:\n$(x^2 - 10x + 25) + (y^2 + 6y + 9) = -18 + 25 + 9$\n$(x - 5)^2 + (y + 3)^2 = 16$\nCenter $(5, -3)$, radius $= \\sqrt{16} = 4$.\n\n**The Full Solution:**\nStart with $x^2 + y^2 - 10x + 6y + 18 = 0$.\nRearrange: $(x^2 - 10x) + (y^2 + 6y) = -18$.\n* Complete the square for $x$: half of $-10$ is $-5$, squared is $25$. Add $25$ to both sides.\n* Complete the square for $y$: half of $6$ is $3$, squared is $9$. Add $9$ to both sides.\n\n$(x - 5)^2 + (y + 3)^2 = -18 + 25 + 9 = 16$.\nCenter $(5, -3)$, radius $= \\sqrt{16} = 4$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — flips signs from completing the square (uses $(x + 5)$ instead of $(x - 5)$).\n* Choice C: \"stops one step early\" — reports $r^2 = 16$ instead of $r = 4$.\n* Choice D: \"applies inverse op\" — uses the raw coefficients $-10$ and $6$ directly as center coordinates.\n\n**Test Day Takeaway:** General form $\\to$ standard form: complete the square for both $x$ AND $y$, then read off the center and take the square root for the radius.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, line $j$ passes through the points $(2, -3)$ and $(-1, 9)$. Line $k$ is perpendicular to line $j$ and passes through the point $(8, 5)$. What is the $x$-coordinate of the point where line $k$ crosses the $x$-axis?",
  correctAnswer: "-12",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**The correct answer is $-12$.**\n\n**The Fast Way (~30s):** Slope of $j$: $\\dfrac{9 - (-3)}{-1 - 2} = \\dfrac{12}{-3} = -4$. Perpendicular slope $= \\dfrac{1}{4}$. Line $k$: $y - 5 = \\dfrac{1}{4}(x - 8)$. Set $y = 0$: $-5 = \\dfrac{1}{4}(x - 8)$, so $x - 8 = -20$ and $x = -12$.\n\n**The Full Solution:**\nSlope of $j$: $m_j = \\dfrac{9 - (-3)}{-1 - 2} = \\dfrac{12}{-3} = -4$.\nPerpendicular slope: $m_k = -\\dfrac{1}{m_j} = \\dfrac{1}{4}$.\n\nLine $k$ in point-slope form using $(8, 5)$:\n$y - 5 = \\dfrac{1}{4}(x - 8)$.\n\n$x$-intercept: set $y = 0$:\n$0 - 5 = \\dfrac{1}{4}(x - 8)$\n$-5 = \\dfrac{1}{4}(x - 8)$\n$x - 8 = -20$\n$x = -12$.\n\n**Common Mistakes to Avoid:**\n* Using slope $-4$ for line $k$ (parallel, not perpendicular).\n* Using slope $-\\dfrac{1}{4}$ (forgets to flip the sign — perpendicular slopes are NEGATIVE reciprocals).\n* Solving for the $y$-intercept by setting $x = 0$ instead of $y = 0$.\n\n**Verification:** At $x = -12$, $y = \\dfrac{1}{4}(-12 - 8) + 5 = \\dfrac{1}{4}(-20) + 5 = -5 + 5 = 0$ \\checkmark.\n\n**Test Day Takeaway:** Perpendicular slopes: flip the fraction AND change the sign. For $x$-intercept, set $y = 0$.",
  skills: ["slope", "coordinate-geometry", "linear-functions"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $g$ is defined by $g(x) = 3 \\cdot 2^x - 12$. For what value of $x$ does $g(x) = 0$?",
  choices: [
    // distractor: stops one step early — uses x = 0: 3 - 12 = -9
    { id: "A", text: "$0$" },
    { id: "B", text: "$2$" },
    // distractor: applies inverse op — solves 3*2^x = 12 as 2^x = 9
    { id: "C", text: "$3$" },
    // distractor: wrong base — confuses 12 with the value of x
    { id: "D", text: "$4$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Solving Exponential Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Set $3 \\cdot 2^x - 12 = 0$. So $3 \\cdot 2^x = 12$, $2^x = 4 = 2^2$, $x = 2$.\n\n**The Full Solution:**\n$g(x) = 0$\n$3 \\cdot 2^x - 12 = 0$\n$3 \\cdot 2^x = 12$\n$2^x = 4$\n$2^x = 2^2$\n$x = 2$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — uses $x = 0$: $g(0) = 3 - 12 = -9 \\neq 0$.\n* Choice C: \"applies inverse op\" — solves $2^x = 9$ instead of $4$, then guesses $x = 3$.\n* Choice D: \"wrong base\" — confuses $12$ with the value of $x$.\n\n**Test Day Takeaway:** Isolate the exponential term first, then match bases (e.g., $4 = 2^2$) to solve for the exponent.",
  skills: ["exponential-functions", "solving-equations"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The parabola defined by $y = a(x - 2)^2 + k$ has its vertex at $(2, -7)$ and passes through the point $(5, 11)$. What is the value of $a + k$?",
  choices: [
    // distractor: stops one step early — gives a = 2 only
    { id: "A", text: "$2$" },
    { id: "B", text: "$-5$" },
    // distractor: wrong sign — gives 2 + 7 = 9 instead of 2 + (-7)
    { id: "C", text: "$9$" },
    // distractor: applies inverse op — 11 - 5 = 6, divides by 3 = 2 then adds 7
    { id: "D", text: "$-9$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Vertex $(2, -7)$ gives $k = -7$. Plug $(5, 11)$ into $y = a(x - 2)^2 - 7$: $11 = a(3)^2 - 7$, so $9a = 18$ and $a = 2$. Then $a + k = 2 + (-7) = -5$.\n\n**The Full Solution:**\nIn vertex form $y = a(x - h)^2 + k$, the vertex is $(h, k) = (2, -7)$, so $k = -7$.\n\nUse the point $(5, 11)$ to find $a$:\n$11 = a(5 - 2)^2 + (-7)$\n$11 = 9a - 7$\n$9a = 18$\n$a = 2$.\n\nSo $a + k = 2 + (-7) = -5$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — solves for $a = 2$ and reports it without adding $k$.\n* Choice C: \"wrong sign\" — uses $a + |k| = 2 + 7 = 9$ instead of $a + k = 2 + (-7)$.\n* Choice D: \"applies inverse op\" — sign flip on $a$: $-2 + (-7) = -9$.\n\n**Test Day Takeaway:** In $y = a(x - h)^2 + k$, the vertex is exactly $(h, k)$. Use the second point only to determine $a$ — then combine.",
  skills: ["vertex-form", "quadratic-equations", "function-interpretation"]
},

// ===== HARD (Q15–Q22) =====

{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A data set consists of $11$ positive integers. The list shows $10$ of them:\n\n$54, 49, 51, 53, 57, 50, 52, 48, 56, 50$\n\nThe mean of all $11$ integers is $52$. What is the value of the eleventh integer?",
  correctAnswer: "52",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $52$.**\n\n**The Fast Way (~25s):** Sum of $11$ integers is $11 \\cdot 52 = 572$. Sum of the $10$ listed integers is $520$. Eleventh integer $= 572 - 520 = 52$.\n\n**The Full Solution:**\nSum the listed values: $54 + 49 + 51 + 53 + 57 + 50 + 52 + 48 + 56 + 50 = 520$.\nTotal sum required for mean of $52$ across $11$ integers: $11 \\cdot 52 = 572$.\nEleventh integer $= 572 - 520 = 52$.\n\nObservation: when adding a new value to a data set leaves the mean unchanged, that new value MUST equal the mean.\n\n**Common Mistakes to Avoid:**\n* Computing the mean of the $10$ listed integers ($\\frac{520}{10} = 52$) and reporting it as if that solves the problem (it gives the right number for the wrong reason).\n* Forgetting to multiply by $11$ for the new total (e.g., using $10 \\cdot 52 = 520$ as the target).\n\n**Verification:** $\\dfrac{520 + 52}{11} = \\dfrac{572}{11} = 52$ \\checkmark.\n\n**Test Day Takeaway:** Adding a value EQUAL to the current mean leaves the mean unchanged. Always check whether your reasoning matches that invariant — don't just average the listed numbers.",
  skills: ["statistics", "mean"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 6 — Math Module 2 (22 questions)
// Distribution: easy 3 [1,6,16] / medium 7 [2,3,5,9,12,14,17] / hard 12 [4,7,8,10,11,13,15,18,19,20,21,22].
// Bands: easy opener band 3 (Q1); band-2 breathers Q6 (vertical angles) and Q16 (range);
//        medium band 5-6; hard band 7 closers, with Q9 and Q11 sitting at band 6 inside the hard run.
// Band ramp holds: mean(Q1-5)=5.0 < mean(Q18-22)=7.0.
// Pool infusions (skeleton reused from CB corpora, IP-distanced): Q2 D-p20#17 (no-solution),
//   Q4 E#9 (quadratic-linear greatest x), Q8 D-p5#22 (inscribed sphere), Q9 D-p35#23=E#14 (per-x rate),
//   Q10 D-p17#24 (tangent vertex), Q13 D-p11#26 (grouped-data mean bounds), Q14 E#3 (margin of error),
//   Q17 E#2 (line from two points). Q18-Q22 are figure/concept hard closers.
// Q15 reauthored to a 30-60-90 inscribed-rectangle item to break the Quadratic-in-Disguise
//   duplicate it formed with Q22; Q22 keeps that pattern (count-distinct-roots deliverable).

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A bag contains $4$ red marbles, $6$ blue marbles, and $5$ green marbles. If one marble is selected at random, what is the probability that it is red?",
  choices: [
    // distractor: wrong base — puts 1 in the numerator instead of the red count
    { id: "A", text: "$\\dfrac{1}{15}$" },
    { id: "B", text: "$\\dfrac{4}{15}$" },
    // distractor: applies inverse op — red-to-blue ratio instead of red-to-total
    { id: "C", text: "$\\dfrac{4}{6}$" },
    // distractor: wrong base — counts blue (the wrong color) over the total
    { id: "D", text: "$\\dfrac{6}{15}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Simple Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Total marbles $= 4 + 6 + 5 = 15$. Red marbles $= 4$. $P(\\text{red}) = \\dfrac{4}{15}$.\n\n**The Full Solution:**\nProbability $= \\dfrac{\\text{favorable outcomes}}{\\text{total outcomes}}$.\nTotal marbles: $4 + 6 + 5 = 15$.\nFavorable (red): $4$.\n$P(\\text{red}) = \\dfrac{4}{15}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — puts $1$ in the numerator, ignoring that there are $4$ red marbles.\n* Choice C: \"applies the inverse operation\" — uses the red-to-blue ratio $\\frac{4}{6}$ instead of red-to-total.\n* Choice D: \"wrong base\" — counts the blue marbles instead of the red.\n\n**Test Day Takeaway:** Probability $= \\dfrac{\\text{favorable}}{\\text{total}}$. Always sum ALL outcomes for the denominator, not just one subgroup.",
  skills: ["probability", "ratios"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$$-3x + 24px = 72$$\n\nIn the equation above, $p$ is a constant. If the equation has no solution, what is the value of $p$?",
  choices: [
    // distractor: picks p = 0 thinking it removes the x-term, but p = 0 leaves -3x = 72 which has a solution
    { id: "A", text: "$0$" },
    { id: "B", text: "$\\dfrac{1}{8}$" },
    // distractor: inverts the fraction — uses 24/3 instead of 3/24
    { id: "C", text: "$8$" },
    // distractor: sign error — solves 24p = -3 to get -1/8
    { id: "D", text: "$-\\dfrac{1}{8}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Factor the left side: $x(-3 + 24p) = 72$. A single linear equation has NO solution only when the coefficient of $x$ is $0$ while the constant is nonzero. Set $-3 + 24p = 0$: $p = \\dfrac{3}{24} = \\dfrac{1}{8}$.\n\n**The Full Solution:**\nCollect the $x$-terms: $-3x + 24px = (24p - 3)x$, so the equation is $(24p - 3)x = 72$.\nIf $24p - 3 \\neq 0$, you can divide and get exactly one solution. For NO solution, you need the coefficient to vanish while the right side stays nonzero:\n$24p - 3 = 0 \\Rightarrow 24p = 3 \\Rightarrow p = \\dfrac{1}{8}$.\nWith $p = \\dfrac{1}{8}$ the equation reads $0 \\cdot x = 72$, i.e. $0 = 72$, which is impossible — no solution.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — picks $p = 0$ thinking it cancels the $x$-term, but $p = 0$ leaves $-3x = 72$, which solves to $x = -24$ (a solution exists).\n* Choice C: \"inverts the fraction\" — computes $\\dfrac{24}{3} = 8$ instead of $\\dfrac{3}{24}$.\n* Choice D: \"sign error\" — solves $24p = -3$ to get $-\\dfrac{1}{8}$.\n\n**Test Day Takeaway:** For $(\\text{coeff})x = (\\text{const})$ to have no solution, force the coefficient to $0$ while the constant stays nonzero.",
  skills: ["linear-equations", "solving-equations"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Hiroshi monitors an ice-cream churn during a batch run. As the churn turns, the mixture's temperature drops by a steady $3$ degrees Fahrenheit each minute. Which type of function best models the mixture's temperature as a function of the number of minutes the churn has been running?",
  choices: [
    // distractor: confuses a constant rate with multiplicative decay
    { id: "A", text: "Decreasing exponential" },
    { id: "B", text: "Decreasing linear" },
    // distractor: sign error — the temperature is dropping, so the slope is negative
    { id: "C", text: "Increasing linear" },
    // distractor: combines the wrong type with the wrong direction
    { id: "D", text: "Increasing exponential" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Linear Function Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** \"Steady $3$ degrees each minute\" is a CONSTANT rate of change, and the temperature DROPS, so the model is a decreasing linear function.\n\n**The Full Solution:**\nA linear function is defined by a constant rate of change. \"Drops by a steady $3$ degrees each minute\" means the same amount is removed every minute — constant difference, hence linear. Because the temperature is decreasing, the slope is negative.\nA model would be $T(m) = T_0 - 3m$.\nCheck: $T(0) = T_0$, $T(1) = T_0 - 3$, $T(2) = T_0 - 6$. The successive differences are $-3, -3$ — constant.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong type\" — exponential decay would mean the temperature falls by a constant PERCENT each minute (shrinking absolute drops), but the rate here is a fixed $3$ degrees.\n* Choice C: \"sign error\" — the mixture is cooling, so the rate is negative, not positive.\n* Choice D: \"wrong type AND wrong direction\" — combines both errors.\n\n**Test Day Takeaway:** \"Constant amount per unit\" $\\Rightarrow$ LINEAR. \"Constant percent/fraction per unit\" $\\Rightarrow$ EXPONENTIAL. Read the rate language carefully.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$$y = x + 5$$\n$$y = x^2 + 12x + 35$$\n\nA solution to the given system of equations is $(x, y)$. What is the greatest possible value of $x$?",
  choices: [
    // distractor: selects the lesser of the two roots
    { id: "A", text: "$-6$" },
    { id: "B", text: "$-5$" },
    // distractor: wrong base — reports the constant from the linear equation
    { id: "C", text: "$5$" },
    // distractor: wrong base — reports the constant term of the quadratic
    { id: "D", text: "$35$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Quadratic-Linear System**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Substitute the line into the quadratic: $x + 5 = x^2 + 12x + 35$, so $x^2 + 11x + 30 = 0$, which factors as $(x + 5)(x + 6) = 0$. Roots $x = -5$ or $x = -6$; the greatest is $-5$.\n\n**The Full Solution:**\nSet the two expressions for $y$ equal:\n$x + 5 = x^2 + 12x + 35$\n$0 = x^2 + 11x + 30$\n$0 = (x + 5)(x + 6)$\n$x = -5$ or $x = -6$.\nThe greatest value of $x$ is $-5$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"picks the lesser root\" — reports $-6$ instead of the greatest, $-5$.\n* Choice C: \"wrong base\" — reports the constant $5$ from the line $y = x + 5$.\n* Choice D: \"wrong base\" — reports the quadratic's constant term $35$.\n\n**Test Day Takeaway:** For a line-parabola system, substitute to get a quadratic in $x$, solve, and read off the value the question asks for (greatest, least, or the matching $y$).",
  skills: ["systems-of-equations", "quadratic-equations", "factoring"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "During a tremor, a volcanic seismograph records a signal amplitude, in millimeters, modeled by $A(t) = -3(t - 6)^2 + 54$, where $t$ is the number of seconds after the tremor began. Which of the following best interprets the vertex of the graph of $y = A(t)$ in the $ty$-plane?",
  choices: [
    // distractor: swaps the coordinates of the vertex
    { id: "A", text: "The amplitude reaches an estimated maximum of $6$ mm, $54$ seconds after the tremor began." },
    { id: "B", text: "The amplitude reaches an estimated maximum of $54$ mm, $6$ seconds after the tremor began." },
    // distractor: wrong direction — calls the maximum a minimum
    { id: "C", text: "The amplitude reaches an estimated minimum of $54$ mm, $6$ seconds after the tremor began." },
    // distractor: wrong base — uses the magnitude of the leading coefficient as the time
    { id: "D", text: "The amplitude reaches an estimated maximum of $54$ mm, $3$ seconds after the tremor began." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Quadratic Vertex Form Application**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Vertex of $A(t) = -3(t - 6)^2 + 54$ is $(6, 54)$. Because $a = -3 < 0$, the vertex is a MAXIMUM: amplitude $54$ mm at $t = 6$ seconds.\n\n**The Full Solution:**\nVertex form $A(t) = a(t - h)^2 + k$ has vertex $(h, k) = (6, 54)$. Here $h = 6$ is the input (time) and $k = 54$ is the output (amplitude). Since $a = -3 < 0$, the parabola opens DOWN, so the vertex is the maximum.\nCheck: $A(6) = 0 + 54 = 54$; $A(5) = -3 + 54 = 51 < 54$; $A(7) = -3 + 54 = 51 < 54$ — confirming a maximum.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"swaps coordinates\" — reports $6$ mm at $54$ s, interchanging the time and amplitude.\n* Choice C: \"wrong direction\" — since $a < 0$ the vertex is a maximum, not a minimum.\n* Choice D: \"wrong base\" — uses the leading coefficient's magnitude $3$ as the time.\n\n**Test Day Takeaway:** In $a(t - h)^2 + k$, the vertex is $(h, k)$. The sign of $a$ tells you max ($a < 0$) vs min ($a > 0$).",
  skills: ["function-interpretation", "quadratic-equations"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "easy",
  band: 2,
  question: "Two lines intersect at a single point, forming four angles. One of the angles measures $53^{\\circ}$. What is the measure, in degrees, of the angle directly opposite (vertical to) it?",
  correctAnswer: "53",
  explanation: "**SAT Pattern: Vertical Angles**\n\n**The correct answer is $53$.**\n\n**The Fast Way (~5s):** Vertical angles — formed by two intersecting lines, opposite each other — are EQUAL. So the opposite angle is $53^{\\circ}$.\n\n**The Full Solution:**\nWhen two lines intersect, they form two pairs of vertical angles, and each pair is equal.\nGiven one angle is $53^{\\circ}$, the angle directly opposite is also $53^{\\circ}$.\nThe two angles adjacent to it are each $180^{\\circ} - 53^{\\circ} = 127^{\\circ}$, but the question asks for the OPPOSITE angle, which is $53^{\\circ}$.\n\n**Common Mistakes to Avoid:**\n* Confusing vertical (opposite, equal) with supplementary (adjacent, sum to $180^{\\circ}$): reporting $127$.\n* Treating the angles as complementary: reporting $90^{\\circ} - 53^{\\circ} = 37$.\n\n**Test Day Takeaway:** Vertical $=$ Equal. Adjacent on a straight line $=$ Supplementary (sum to $180^{\\circ}$).",
  skills: ["angles", "geometry"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, line $p$ has the equation $4x - 5y = 35$. Line $q$ is perpendicular to line $p$ and passes through the point $(8, 1)$. What is the $y$-intercept of line $q$?",
  correctAnswer: "11",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~30s):** Slope of $p$: $\\dfrac{4}{5}$ (from $4x - 5y = 35$). Perpendicular slope: $-\\dfrac{5}{4}$. Line $q$: $y - 1 = -\\dfrac{5}{4}(x - 8)$. Set $x = 0$: $y - 1 = -\\dfrac{5}{4}(-8) = 10$, so $y = 11$.\n\n**The Full Solution:**\nRewrite $p$ in slope-intercept form: $4x - 5y = 35 \\Rightarrow y = \\dfrac{4}{5}x - 7$. Slope of $p$ is $\\dfrac{4}{5}$.\nPerpendicular slope: $m_q = -\\dfrac{5}{4}$.\nLine $q$ in point-slope form using $(8, 1)$:\n$y - 1 = -\\dfrac{5}{4}(x - 8)$.\n$y$-intercept: set $x = 0$:\n$y - 1 = -\\dfrac{5}{4}(0 - 8) = -\\dfrac{5}{4}(-8) = 10$.\n$y = 11$.\n\n**Common Mistakes to Avoid:**\n* Using slope $\\dfrac{4}{5}$ for $q$ (parallel, not perpendicular).\n* Sign error on the perpendicular slope: writing $\\dfrac{5}{4}$ instead of $-\\dfrac{5}{4}$.\n* Setting $y = 0$ to find the $x$-intercept instead of $x = 0$ for the $y$-intercept.\n\n**Verification:** At $(8, 1)$: $1 = -\\dfrac{5}{4}(8) + 11 = -10 + 11 = 1$ \\checkmark.\n\n**Test Day Takeaway:** Perpendicular slopes: flip the fraction AND change the sign. For the $y$-intercept, set $x = 0$.",
  skills: ["slope", "coordinate-geometry", "linear-functions"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A spherical ice-cream mold with a radius of $25$ inches rests inside a cubic freezer chest so that the mold just touches the center of each of the chest's six interior faces. To the nearest cubic inch, what is the volume of the space inside the chest that is NOT occupied by the mold?",
  choices: [
    // distractor: reports the sphere's volume (the occupied part) instead of the empty space
    { id: "A", text: "$65{,}450$" },
    { id: "B", text: "$59{,}550$" },
    // distractor: forgets to subtract — reports the chest's volume alone
    { id: "C", text: "$125{,}000$" },
    // distractor: omits the 4/3 factor in the sphere volume, leaving pi*r^3
    { id: "D", text: "$75{,}913$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Inscribed Solid Volume**\n\n**Choice B is correct.**\n\n**The Fast Way (~50s):** The mold touches the center of each face, so its diameter equals the cube's edge: edge $= 2 \\cdot 25 = 50$. Empty space $=$ cube $-$ sphere $= 50^3 - \\frac{4}{3}\\pi(25)^3 = 125{,}000 - 65{,}449.8 \\approx 59{,}550$.\n\n**The Full Solution:**\nSince the sphere touches the center of every face, it is inscribed: its diameter equals the cube's edge length.\nEdge $= 2r = 2(25) = 50$ inches, so the cube's volume is $50^3 = 125{,}000$ cubic inches.\nThe sphere's volume is $\\dfrac{4}{3}\\pi r^3 = \\dfrac{4}{3}\\pi (25)^3 = \\dfrac{4}{3}\\pi (15{,}625) \\approx 65{,}449.8$ cubic inches.\nEmpty space $= 125{,}000 - 65{,}449.8 \\approx 59{,}550$ cubic inches.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong quantity\" — reports the sphere's volume ($\\approx 65{,}450$), the part the mold occupies, not the empty space.\n* Choice C: \"stops one step early\" — reports the chest's volume $125{,}000$ without subtracting the mold.\n* Choice D: \"omits the $\\frac{4}{3}$ factor\" — uses $\\pi r^3 \\approx 49{,}087$ for the sphere, giving $125{,}000 - 49{,}087 \\approx 75{,}913$.\n\n**Test Day Takeaway:** An inscribed sphere has diameter equal to the cube's edge. Empty space $=$ cube volume $-$ sphere volume; never forget the $\\frac{4}{3}$ in $\\frac{4}{3}\\pi r^3$.",
  skills: ["volume", "spheres", "geometry"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 6,
  question: "$$f(x) = (2.25)^{\\frac{x}{3}}$$\n\nThe function $f$ is defined by the given equation. The equation can be rewritten in the form $f(x) = \\left(1 + \\dfrac{p}{100}\\right)^{x}$, where $p$ is a constant. Which of the following is closest to the value of $p$?",
  choices: [
    // distractor: ignores the 1/3 exponent and reads 2.25 as 1 + 1.25, giving p = 125
    { id: "A", text: "$125$" },
    // distractor: divides the base by the period, 2.25/3 = 0.75, reporting 75
    { id: "B", text: "$75$" },
    { id: "C", text: "$31$" },
    // distractor: applies the period to the growth amount, (2.25 - 1)/3, giving about 42
    { id: "D", text: "$42$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponential Growth Rate**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Rewrite the base over a single $x$: $(2.25)^{x/3} = \\left(2.25^{1/3}\\right)^x$. The cube root of $2.25$ is about $1.31$, so $1 + \\dfrac{p}{100} \\approx 1.31$, giving $p \\approx 31$.\n\n**The Full Solution:**\nUse the exponent rule $a^{x/3} = \\left(a^{1/3}\\right)^x$:\n$(2.25)^{x/3} = \\left(2.25^{1/3}\\right)^x$.\nCompute the per-$x$ base: $2.25^{1/3} \\approx 1.3104$.\nMatching $\\left(1 + \\dfrac{p}{100}\\right)^x$: $1 + \\dfrac{p}{100} \\approx 1.3104$, so $\\dfrac{p}{100} \\approx 0.3104$ and $p \\approx 31$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"ignores the exponent\" — reads $2.25$ as the per-$x$ multiplier, $1 + 1.25$, giving $p = 125$.\n* Choice B: \"wrong operation\" — divides the base by the period, $\\dfrac{2.25}{3} = 0.75$, reporting $75$.\n* Choice D: \"applies period to the growth\" — uses $\\dfrac{2.25 - 1}{3} \\approx 0.417$, giving about $42$.\n\n**Test Day Takeaway:** To convert $a^{x/k}$ to a per-$x$ rate, take the $k$-th ROOT of $a$ first, then subtract $1$ and scale to a percent.",
  skills: ["exponential-functions", "percents"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$$y = 2x^2 - 19x + 56$$\n$$y = 4x + a$$\n\nIn the given system of equations, $a$ is a constant. The graphs of the equations intersect at exactly one point, $(x, y)$, in the $xy$-plane. What is the value of $x$?",
  choices: [
    // distractor: sign error on -b/(2a), using -23/4 instead of 23/4
    { id: "A", text: "$-\\dfrac{23}{4}$" },
    // distractor: forgets to move the 4x term, leaving the original -19 coefficient
    { id: "B", text: "$\\dfrac{19}{4}$" },
    { id: "C", text: "$\\dfrac{23}{4}$" },
    // distractor: factors the constant 56 and guesses x = 8
    { id: "D", text: "$8$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Quadratic-Linear System with One Intersection**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Set the expressions equal: $2x^2 - 19x + 56 = 4x + a$, so $2x^2 - 23x + (56 - a) = 0$. \"Exactly one intersection\" means the discriminant is $0$, so the single root is the vertex: $x = \\dfrac{-(-23)}{2(2)} = \\dfrac{23}{4}$.\n\n**The Full Solution:**\nSubstitute the line into the parabola:\n$2x^2 - 19x + 56 = 4x + a$\n$2x^2 - 23x + (56 - a) = 0$.\nFor exactly one intersection, this quadratic has a double root, which occurs at $x = -\\dfrac{b}{2a}$ regardless of $a$:\n$x = -\\dfrac{-23}{2(2)} = \\dfrac{23}{4}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"sign error\" — drops the sign of $-b$, computing $-\\dfrac{23}{4}$.\n* Choice B: \"forgets to move the $4x$\" — uses the original coefficient $-19$: $\\dfrac{19}{4}$.\n* Choice D: \"wrong base\" — factors the constant $56$ and guesses $x = 8$.\n\n**Test Day Takeaway:** A line tangent to a parabola gives a double root at the vertex $x = -\\dfrac{b}{2a}$ of the combined quadratic — you don't even need $a$.",
  skills: ["quadratic-equations", "systems-of-equations"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  question: "The water level $L$, in centimeters, recorded by a river gauge during a storm is modeled by $L(t) = -2t^2 + 28t + 60$, where $t$ is the number of hours after the gauge began recording. What is the maximum water level, in centimeters, predicted by the model?",
  choices: [
    // distractor: reports the time of the maximum instead of the level
    { id: "A", text: "$7$" },
    // distractor: reports the initial level L(0) = 60
    { id: "B", text: "$60$" },
    { id: "C", text: "$158$" },
    // distractor: computes 28*7 = 196 and stops, dropping the other terms
    { id: "D", text: "$196$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Vertex of a Parabola — Optimization**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The maximum of $L(t) = -2t^2 + 28t + 60$ occurs at $t = -\\dfrac{b}{2a} = -\\dfrac{28}{2(-2)} = 7$. Then $L(7) = -2(49) + 28(7) + 60 = -98 + 196 + 60 = 158$.\n\n**The Full Solution:**\nSince $a = -2 < 0$, the parabola opens downward and has a maximum at its vertex.\nTime of maximum: $t = -\\dfrac{b}{2a} = -\\dfrac{28}{-4} = 7$ hours.\nMaximum level: $L(7) = -2(7)^2 + 28(7) + 60 = -98 + 196 + 60 = 158$ centimeters.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"reports the input\" — gives the time of the maximum ($t = 7$) instead of the level.\n* Choice B: \"wrong base\" — reports the initial level $L(0) = 60$.\n* Choice D: \"stops one step early\" — computes $28 \\cdot 7 = 196$ and forgets the $-98$ and $+60$ terms.\n\n**Test Day Takeaway:** The maximum VALUE is $L$ at the vertex time $t = -\\frac{b}{2a}$. Find the time first, then substitute back to get the level.",
  skills: ["quadratic-equations", "function-interpretation"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Leila's rooftop garden used $\\$36$ of water in one month and $\\$27$ the next month after she installed drip lines. By what percent did her water cost decrease from the first month to the second?",
  choices: [
    // distractor: reports the dollar decrease (9) as a raw percent
    { id: "A", text: "$9\\%$" },
    { id: "B", text: "$25\\%$" },
    // distractor: wrong base — uses the new cost 27 as the denominator
    { id: "C", text: "$33.\\overline{3}\\%$" },
    // distractor: applies inverse op — gives the ratio of new to old (27/36)
    { id: "D", text: "$75\\%$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Decrease $= 36 - 27 = 9$. Percent decrease $= \\dfrac{9}{36} = 0.25 = 25\\%$.\n\n**The Full Solution:**\nPercent decrease $= \\dfrac{\\text{old} - \\text{new}}{\\text{old}} \\times 100\\%$.\n$\\dfrac{36 - 27}{36} \\times 100\\% = \\dfrac{9}{36} \\times 100\\% = 0.25 \\times 100\\% = 25\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports the dollar decrease ($\\$9$) as a raw percent.\n* Choice C: \"wrong base\" — uses the NEW cost $27$ as the denominator: $\\dfrac{9}{27} = 33.\\overline{3}\\%$.\n* Choice D: \"applies the inverse operation\" — gives the ratio of new to old ($\\dfrac{27}{36} = 75\\%$) instead of the decrease.\n\n**Test Day Takeaway:** Percent change is always relative to the ORIGINAL value: $\\dfrac{\\text{change}}{\\text{original}} \\times 100\\%$.",
  skills: ["percents", "word-problems"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Two data sets, A and B, each consist of $19$ integers. Each integer falls into one of five intervals of width $10$, and the frequency tables below give how many integers from each set fall into each interval. Within an interval, the exact integer values are unknown. What is the smallest possible difference between the mean of data set A and the mean of data set B?\n\n| Interval | A frequency | B frequency |\n|---|---|---|\n| $10$ to $19$ | $5$ | $3$ |\n| $20$ to $29$ | $4$ | $3$ |\n| $30$ to $39$ | $4$ | $4$ |\n| $40$ to $49$ | $3$ | $4$ |\n| $50$ to $59$ | $3$ | $5$ |",
  choices: [
    { id: "A", text: "$0$" },
    // distractor: assumes the means must differ by at least 1
    { id: "B", text: "$1$" },
    // distractor: treats each interval value as its midpoint and subtracts the two midpoint means
    { id: "C", text: "$5$" },
    // distractor: uses the interval width as the minimum possible gap
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Grouped Data — Mean Bounds**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Within each interval the actual integers are free to be anywhere in that range, so each set's mean can be tuned across an interval of values. Those two adjustable ranges OVERLAP, so the means can be made exactly equal — the smallest possible difference is $0$.\n\n**The Full Solution:**\nIf every value in set A sits at the bottom of its interval, A's mean is $\\dfrac{5(10) + 4(20) + 4(30) + 3(40) + 3(50)}{19} = \\dfrac{520}{19} \\approx 27.4$. Pushing each value up to the top of its interval (add up to $9$) raises A's mean to about $36.4$. So A's mean can be any achievable value in roughly $[27.4, 36.4]$.\nFor B at the bottom: $\\dfrac{3(10) + 3(20) + 4(30) + 4(40) + 5(50)}{19} = \\dfrac{620}{19} \\approx 32.6$, up to about $41.6$. So B's mean ranges over roughly $[32.6, 41.6]$.\nThese two ranges overlap (around $32.6$ to $36.4$), and since each total sum can be tuned integer-by-integer, both means can be made to land on the same value. The smallest possible difference is therefore $0$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"assumes a minimum gap\" — claims the means must differ by at least $1$, ignoring that within-interval values are free.\n* Choice C: \"treats values as midpoints\" — uses interval midpoints, getting mean$_A \\approx 32.4$ and mean$_B \\approx 37.6$, a difference of about $5$ — but the values need not be midpoints.\n* Choice D: \"uses the interval width\" — reports the bin width $10$ as the minimum gap.\n\n**Test Day Takeaway:** When grouped data hides the exact values, the mean is not a single number — it spans a range. If the ranges overlap, the smallest possible difference is $0$.",
  skills: ["statistics", "mean"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In a random sample of $400$ customers of a regional drone-delivery service, $62\\%$ reported receiving a same-day delivery, with a margin of error of $\\pm 3\\%$ at a $95\\%$ confidence level. Which of the following is the most appropriate conclusion based on this survey?",
  choices: [
    // distractor: drops the margin of error and confidence level, treating the sample value as exact
    { id: "A", text: "Exactly $62\\%$ of all customers of this service received a same-day delivery." },
    { id: "B", text: "We are $95\\%$ confident that between $59\\%$ and $65\\%$ of all customers of this service received a same-day delivery." },
    // distractor: broadens to all online shoppers instead of the service's customers
    { id: "C", text: "Between $59\\%$ and $65\\%$ of all online shoppers received a same-day delivery." },
    // distractor: broadens beyond the sampled population to a national figure
    { id: "D", text: "Between $59\\%$ and $65\\%$ of drone-delivery customers nationwide received a same-day delivery." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Sample proportion $62\\%$ with margin of error $\\pm 3\\%$ gives the interval $59\\%$ to $65\\%$, and the conclusion applies to the population sampled (this service's customers) at the stated confidence level.\n\n**The Full Solution:**\nThe $95\\%$ confidence interval is $62\\% \\pm 3\\% = (59\\%, 65\\%)$. A valid conclusion must:\n* apply to the SAMPLED population (customers of this service), not a broader or different group;\n* state the confidence level (\"$95\\%$ confident\");\n* report the interval, not a single exact value.\nOnly Choice B satisfies all three.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — drops the margin and confidence level, treating $62\\%$ as exact.\n* Choice C: \"wrong population\" — broadens to all online shoppers.\n* Choice D: \"wrong population\" — extends beyond the sampled customers to a nationwide figure.\n\n**Test Day Takeaway:** Confidence-interval conclusions must (1) name the SAMPLED population, (2) include the confidence level, (3) report the interval, not a point.",
  skills: ["margin-of-error", "statistics"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A rectangle is inscribed in a circle so that all four of its vertices lie on the circle. The length of the rectangle's diagonal is twice the length of its shorter side, and the area of the rectangle is $49\\sqrt{3}$ square centimeters. What is the diameter of the circle, in centimeters?",
  correctAnswer: "14",
  explanation: "**SAT Pattern: Special Right Triangle — 30-60-90**\n\n**The correct answer is $14$.**\n\n**The Fast Way (~50s):** A diagonal of an inscribed rectangle IS a diameter. With diagonal $= 2 \\times$ shorter side, the diagonal and shorter side form a $30$-$60$-$90$ triangle, so the longer side is $\\sqrt{3}$ times the shorter side $s$. Area $= s \\cdot s\\sqrt{3} = s^2\\sqrt{3} = 49\\sqrt{3}$, so $s = 7$ and the diameter is $2s = 14$.\n\n**The Full Solution:**\nBecause all four vertices lie on the circle, the rectangle's diagonal is a diameter of the circle.\nLet the shorter side be $s$. The diagonal is given as $2s$, so the diagonal-to-shorter-side ratio is $2:1$ — the hypotenuse is twice the short leg, which is the signature of a $30$-$60$-$90$ right triangle.\nIn a $30$-$60$-$90$ triangle the sides are in ratio $1 : \\sqrt{3} : 2$ (short leg : long leg : hypotenuse), so the longer side of the rectangle is $s\\sqrt{3}$.\nArea of the rectangle $= s \\cdot s\\sqrt{3} = s^2\\sqrt{3}$. Set equal to the given area:\n$s^2\\sqrt{3} = 49\\sqrt{3} \\Rightarrow s^2 = 49 \\Rightarrow s = 7$.\nDiameter $= $ diagonal $= 2s = 2(7) = 14$ centimeters.\n\n**Verification:** Shorter side $7$, longer side $7\\sqrt{3} \\approx 12.12$; diagonal $= \\sqrt{7^2 + (7\\sqrt{3})^2} = \\sqrt{49 + 147} = \\sqrt{196} = 14$ \\checkmark, and $14 = 2 \\times 7$ \\checkmark. Area $= 7 \\cdot 7\\sqrt{3} = 49\\sqrt{3}$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $7$ — that is the shorter side (and also the radius), not the diameter; the question asks for the diameter $2s = 14$.\n* Treating the rectangle as a square and using diagonal $= s\\sqrt{2}$, which gives $7\\sqrt{2} \\approx 9.9$ instead of the $30$-$60$-$90$ relationship.\n* Reporting $7\\sqrt{3} \\approx 12.12$ — the longer side — by mistaking it for the diagonal.\n\n**Test Day Takeaway:** When a rectangle is inscribed in a circle, its diagonal is a diameter; a hypotenuse-to-leg ratio of $2:1$ signals a $30$-$60$-$90$ triangle with sides $1 : \\sqrt{3} : 2$.",
  skills: ["special-right-triangles", "geometry", "circles"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "easy",
  band: 2,
  question: "A river gauge recorded the following water depths, in centimeters, over six consecutive hours:\n\n$42, 55, 38, 61, 47, 50$\n\nWhat is the range of these depths, in centimeters?",
  correctAnswer: "23",
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**The correct answer is $23$.**\n\n**The Fast Way (~10s):** Range $=$ maximum $-$ minimum $= 61 - 38 = 23$.\n\n**The Full Solution:**\nThe range of a data set is the difference between the largest and smallest values.\nMaximum depth: $61$. Minimum depth: $38$.\nRange $= 61 - 38 = 23$ centimeters.\n\n**Common Mistakes to Avoid:**\n* Subtracting two non-extreme values (e.g., $55 - 42$).\n* Reporting the maximum ($61$) or the count of values ($6$).\n\n**Test Day Takeaway:** Range is just max minus min — scan for the two extremes, ignore everything in between.",
  skills: ["statistics", "data-analysis"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Sage offers violin lessons for a fixed registration fee plus a per-lesson charge. A student who takes $4$ lessons pays $\\$95$ in total, and a student who takes $9$ lessons pays $\\$170$ in total. What is the fixed registration fee, in dollars?",
  choices: [
    // distractor: stops one step early — reports the per-lesson rate (15) as the fee
    { id: "A", text: "$\\$15$" },
    // distractor: applies inverse op — divides 95 by 4, ignoring the fixed fee
    { id: "B", text: "$\\$23.75$" },
    { id: "C", text: "$\\$35$" },
    // distractor: wrong base — uses the raw difference 170 - 95
    { id: "D", text: "$\\$75$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Per-lesson rate (slope) $= \\dfrac{170 - 95}{9 - 4} = \\dfrac{75}{5} = 15$. Use $(4, 95)$: $95 = 15(4) + f$, so $f = 95 - 60 = 35$.\n\n**The Full Solution:**\nLet $f$ be the fixed fee and $r$ the per-lesson rate. Then:\n$4r + f = 95$ ... (1)\n$9r + f = 170$ ... (2)\nSubtract (1) from (2): $5r = 75$, so $r = 15$.\nFrom (1): $4(15) + f = 95 \\Rightarrow f = 95 - 60 = 35$.\n\n**Verification:** $9(15) + 35 = 135 + 35 = 170$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports the per-lesson rate $\\$15$ as the fee.\n* Choice B: \"applies the inverse operation\" — divides $95 / 4 = 23.75$ as if there were no fixed fee.\n* Choice D: \"wrong base\" — uses the raw difference $170 - 95 = 75$.\n\n**Test Day Takeaway:** \"Fixed fee + rate\" is a linear function $\\text{total} = \\text{rate} \\cdot \\text{count} + \\text{fee}$. Find the rate from two points, then back-solve for the fee.",
  skills: ["systems-of-equations", "linear-functions", "word-problems"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A rooftop solar installation consists of two adjacent square panels; the side length of the larger panel is $3$ times the side length of the smaller panel. Sunlight delivers power to each panel equal to the irradiance, $18$ watts per square meter, times the panel's area. If the total power delivered to both panels together is $4{,}500$ watts, what is the power delivered to the larger panel, in watts?",
  correctAnswer: "4050",
  explanation: "**SAT Pattern: Area Ratio to Side Ratio in Similar Figures**\n\n**The correct answer is $4050$.**\n\n**The Fast Way (~50s):** Let the smaller side be $s$. Total area $= s^2 + (3s)^2 = 10s^2$. Total power $= 18 \\cdot 10s^2 = 180s^2 = 4500$, so $s^2 = 25$. Larger area $= (3s)^2 = 9s^2 = 225$, so larger power $= 18 \\cdot 225 = 4050$.\n\n**The Full Solution:**\nLet $s$ be the smaller panel's side length. The larger panel's side is $3s$, so its area is $(3s)^2 = 9s^2$ — nine times the smaller panel's area $s^2$.\nTotal area $= s^2 + 9s^2 = 10s^2$.\nTotal power $= 18 \\times 10s^2 = 180s^2$. Setting this equal to $4{,}500$:\n$180s^2 = 4{,}500 \\Rightarrow s^2 = 25$.\nLarger panel area $= 9s^2 = 225$ square meters.\nLarger panel power $= 18 \\times 225 = 4{,}050$ watts.\n\n**Verification:** Smaller power $= 18 \\times 25 = 450$; $450 + 4{,}050 = 4{,}500$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $450$ — the SMALLER panel's power.\n* Reporting $1{,}350$ — scaling by the side ratio $3$ instead of the area ratio $9$ ($18 \\times 3 \\times 25$).\n* Reporting $2{,}250$ — splitting the total power evenly between the two panels.\n\n**Test Day Takeaway:** When a length scales by $k$, AREA scales by $k^2$. The larger square is $3^2 = 9$ times the smaller in area, so it gets $9$ of every $10$ parts of the total.",
  skills: ["proportion", "geometry", "area"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "What is the solution to the equation $\\sqrt{2x + 15} = x$?",
  choices: [
    // distractor: the extraneous root x = -3, kept without checking it in the original equation
    { id: "A", text: "$-3$" },
    { id: "B", text: "$5$" },
    // distractor: reports the sum of the two squared-equation roots, 5 + (-3)
    { id: "C", text: "$2$" },
    // distractor: wrong base — uses the constant 15 under the radical
    { id: "D", text: "$15$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Radical Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Square both sides: $2x + 15 = x^2$, so $x^2 - 2x - 15 = 0 \\Rightarrow (x - 5)(x + 3) = 0$, giving $x = 5$ or $x = -3$. A square root is non-negative, so $x = -3$ is extraneous; the solution is $x = 5$.\n\n**The Full Solution:**\nSquare both sides of $\\sqrt{2x + 15} = x$:\n$2x + 15 = x^2$\n$x^2 - 2x - 15 = 0$\n$(x - 5)(x + 3) = 0$\n$x = 5$ or $x = -3$.\nCheck each in the ORIGINAL equation:\n* $x = 5$: $\\sqrt{2(5) + 15} = \\sqrt{25} = 5$ \\checkmark.\n* $x = -3$: $\\sqrt{2(-3) + 15} = \\sqrt{9} = 3 \\neq -3$ — extraneous.\nThe only solution is $x = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"keeps the extraneous root\" — reports $-3$ without checking that $\\sqrt{\\ }$ cannot equal a negative number.\n* Choice C: \"reports the sum\" — adds the two squared-equation roots, $5 + (-3) = 2$.\n* Choice D: \"wrong base\" — uses the constant $15$ from under the radical.\n\n**Test Day Takeaway:** Squaring can introduce extraneous roots. ALWAYS substitute back into the original radical equation and reject any solution that makes the radical equal a negative number.",
  skills: ["radical-equations", "solving-equations"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Sage manages a drone-delivery hub. In one shift the numbers of short-range flights $x$, mid-range flights $y$, and long-range flights $z$ satisfy the system:\n\n$$x + y + z = 30$$\n$$2x + 3y + z = 54$$\n$$x + 2y + 4z = 88$$\n\nWhat is the value of $z$?",
  correctAnswer: "16",
  explanation: "**SAT Pattern: System of Three Equations**\n\n**The correct answer is $16$.**\n\n**The Fast Way (~50s):** Kill $x$ to isolate $z$ directly. Equation 3 $-$ equation 1: $y + 3z = 58$. Equation 2 $-$ $2\\times$ equation 1: $y - z = -6$. Subtract these: $4z = 64$, so $z = 16$.\n\n**The Full Solution:**\nLabel the equations:\n(1) $x + y + z = 30$\n(2) $2x + 3y + z = 54$\n(3) $x + 2y + 4z = 88$\nFrom (2) $-$ (1): $x + 2y = 24$. ... (4)\nFrom (1), $z = 30 - x - y$. Substitute into (3):\n$x + 2y + 4(30 - x - y) = 88$\n$x + 2y + 120 - 4x - 4y = 88$\n$-3x - 2y = -32 \\Rightarrow 3x + 2y = 32$. ... (5)\nSubtract (4) from (5): $2x = 8 \\Rightarrow x = 4$.\nFrom (4): $2y = 24 - 4 = 20 \\Rightarrow y = 10$.\nThen $z = 30 - 4 - 10 = 16$.\n\n**Verification:** (2): $2(4) + 3(10) + 16 = 8 + 30 + 16 = 54$ \\checkmark; (3): $4 + 20 + 64 = 88$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Stopping at $x$ or $y$ instead of solving for the requested $z$.\n* Arithmetic slips when distributing the $4$ across $(30 - x - y)$.\n\n**Test Day Takeaway:** For a $3 \\times 3$ system, eliminate one variable by subtracting equation pairs, reduce to a $2 \\times 2$ system, then back-substitute. Track which variable the question asks for.",
  skills: ["systems-of-equations", "three-variable-systems"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A drone's maximum coverage region in the $xy$-plane is the set of points on the circle $x^2 + y^2 - 12x + 8y + 3 = 0$. What is the radius of this circle?",
  choices: [
    // distractor: reports r^2 = 49 as the radius without taking the square root
    { id: "A", text: "$49$" },
    { id: "B", text: "$7$" },
    // distractor: uses the leftover constant 3 directly as r^2, giving sqrt(3)
    { id: "C", text: "$\\sqrt{3}$" },
    // distractor: sign error — adds +3 instead of subtracting when moving the constant, giving sqrt(55)
    { id: "D", text: "$\\sqrt{55}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Complete the square: $(x^2 - 12x + 36) + (y^2 + 8y + 16) = -3 + 36 + 16 = 49$. So $(x - 6)^2 + (y + 4)^2 = 49$ and $r = \\sqrt{49} = 7$.\n\n**The Full Solution:**\nStart with $x^2 + y^2 - 12x + 8y + 3 = 0$ and group:\n$(x^2 - 12x) + (y^2 + 8y) = -3$.\n* Complete the square for $x$: half of $-12$ is $-6$, squared is $36$.\n* Complete the square for $y$: half of $8$ is $4$, squared is $16$.\nAdd $36$ and $16$ to both sides:\n$(x - 6)^2 + (y + 4)^2 = -3 + 36 + 16 = 49$.\nThe radius is $\\sqrt{49} = 7$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports $r^2 = 49$ as the radius without taking the square root.\n* Choice C: \"wrong base\" — uses the leftover constant $3$ directly as $r^2$, giving $\\sqrt{3}$.\n* Choice D: \"sign error\" — keeps $+3$ on the right ($3 + 36 + 16 = 55$) instead of moving it to $-3$, giving $\\sqrt{55}$.\n\n**Test Day Takeaway:** General form $\\to$ standard form: complete the square for $x$ AND $y$, move the constant across with the correct sign, then take the square root for the radius.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "How many distinct real solutions does the equation $(x^2 - 4)^2 - 3(x^2 - 4) - 10 = 0$ have?",
  choices: [
    // distractor: stops at the two values of u = x^2 - 4 and reports that count
    { id: "A", text: "$2$" },
    // distractor: finds x = 3, -3, and sqrt(2) but misses -sqrt(2)
    { id: "B", text: "$3$" },
    { id: "C", text: "$4$" },
    // distractor: reports the constant 5 (one of the u-values)
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Quadratic in Disguise**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** Let $u = x^2 - 4$: $u^2 - 3u - 10 = 0 \\Rightarrow (u - 5)(u + 2) = 0$, so $u = 5$ or $u = -2$. Then $x^2 - 4 = 5 \\Rightarrow x^2 = 9 \\Rightarrow x = \\pm 3$, and $x^2 - 4 = -2 \\Rightarrow x^2 = 2 \\Rightarrow x = \\pm\\sqrt{2}$. That is $4$ distinct real solutions.\n\n**The Full Solution:**\nSubstitute $u = x^2 - 4$ to turn the equation into a quadratic in $u$:\n$u^2 - 3u - 10 = 0$\n$(u - 5)(u + 2) = 0$\n$u = 5$ or $u = -2$.\nBack-substitute:\n* $x^2 - 4 = 5 \\Rightarrow x^2 = 9 \\Rightarrow x = 3$ or $x = -3$.\n* $x^2 - 4 = -2 \\Rightarrow x^2 = 2 \\Rightarrow x = \\sqrt{2}$ or $x = -\\sqrt{2}$.\nAll four values are real and distinct, so there are $4$ distinct real solutions.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — counts the two values of $u$ and reports $2$.\n* Choice B: \"misses a sign\" — finds $3, -3, \\sqrt{2}$ but forgets $-\\sqrt{2}$.\n* Choice D: \"wrong base\" — reports the $u$-value $5$ as the count.\n\n**Test Day Takeaway:** For a quadratic-in-disguise, solve for the substitution variable first, then back-substitute. Each positive $x^2 = c$ yields TWO real values $\\pm\\sqrt{c}$.",
  skills: ["quadratic-equations", "factoring"]
}
      ]
    }
  ]
};

export default practiceTest6;
