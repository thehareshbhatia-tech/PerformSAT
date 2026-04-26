// Practice Test 6 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Round-6 propagation: M1 lifted to band-3 ceiling on easy items, domain
// rebalanced from a Geo-Trig-heavy 3/4/1/14 to 7/6/5/4. M2 hardened to
// 0E/6M/16H with band-7 ceilings on most hard items and concept-fusion
// items added at the top end.

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
// Domain mix target 7/6/5/4: Algebra Q1,3,5,6,10,13,17; AdvMath Q9,12,14,18,19,20;
// PSDA Q2,4,7,11,15; Geo-Trig Q8,16,21,22.

// ===== EASY (Q1–Q5) =====

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $5y + 12 = 47$, what is the value of $5y - 8$?",
  choices: [
    // distractor: stops one step early — gives y = 7 instead of 5y - 8
    { id: "A", text: "$7$" },
    // distractor: applies inverse op — subtracts 8 from 47 instead of subtracting 20
    { id: "B", text: "$15$" },
    { id: "C", text: "$27$" },
    // distractor: wrong base — leaves the answer at 5y = 35 instead of 5y - 8
    { id: "D", text: "$35$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $5y + 12 = 47$ means $5y = 35$. The expression $5y - 8 = 35 - 8 = 27$. No need to find $y$.\n\n**The Full Solution:**\n$5y + 12 = 47 \\Rightarrow 5y = 35 \\Rightarrow y = 7$.\nThen $5y - 8 = 35 - 8 = 27$.\n\nShortcut: $5y - 8 = (5y + 12) - 20 = 47 - 20 = 27$ — the requested expression differs from the given one by $-20$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — solves for $y = 7$ and reports it instead of $5y - 8$.\n* Choice B: \"applies inverse op\" — subtracts $8$ from $47$ instead of from $5y$.\n* Choice D: \"wrong base\" — keeps $5y = 35$ without subtracting $8$.\n\n**Test Day Takeaway:** When a question asks for a related expression, always re-read the last sentence. Often you can transform the given equation directly to the requested form without solving for the variable.",
  skills: ["solving-equations", "word-problems"]
},
{
  id: 2,
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
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Total $\\times 0.28 = 84$, so total $= 84 / 0.28 = 300$.\n\n**The Full Solution:**\nLet $T$ be the total number of patients. Then $0.28 \\cdot T = 84$.\nDivide: $T = \\dfrac{84}{0.28} = 300$.\n\nVerification: $28\\%$ of $300 = 0.28 \\cdot 300 = 84$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — multiplies $84 \\cdot 0.28 \\approx 23.5$ rounded to $24$.\n* Choice B: \"wrong base\" — divides by the complement $0.72$ (treats $84$ as the adult count).\n* Choice D: \"off-by-one / decimal slip\" — divides by $0.028$ instead of $0.28$.\n\n**Test Day Takeaway:** When the part is given as a percent of an unknown total, divide the part by the percent (as a decimal) to recover the whole.",
  skills: ["percents", "word-problems"]
},
{
  id: 3,
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
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Of the $480$ tickets sold for a community theatre play, $30\\%$ were sold at the door. The other tickets were sold in advance for $\\$8$ each. What was the total revenue, in dollars, from the advance tickets?",
  choices: [
    // distractor: stops one step early — counts only the at-door tickets (144) instead of advance
    { id: "A", text: "$\\$1{,}152$" },
    // distractor: wrong base — uses 30% of 480 = 144 in advance, then 144*8
    { id: "B", text: "$\\$1{,}440$" },
    { id: "C", text: "$\\$2{,}688$" },
    // distractor: applies the inverse — multiplies by 0.30 then by 8 then doubles
    { id: "D", text: "$\\$3{,}840$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Advance tickets $= 70\\%$ of $480 = 336$. Revenue $= 336 \\cdot 8 = 2{,}688$.\n\n**The Full Solution:**\nIf $30\\%$ were sold at the door, then $70\\%$ were sold in advance.\nAdvance count: $0.70 \\cdot 480 = 336$ tickets.\nAdvance revenue: $336 \\cdot \\$8 = \\$2{,}688$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses $30\\%$ instead of $70\\%$: $0.30 \\cdot 480 \\cdot 8 = 1{,}152$.\n* Choice B: \"stops one step early\" — uses $30\\%$ count $\\times \\$8$ but with arithmetic slip: $144 \\cdot 10 = 1{,}440$.\n* Choice D: \"applies the inverse\" — multiplies $480 \\cdot 8 = 3{,}840$, ignoring the percent split entirely.\n\n**Test Day Takeaway:** \"$x\\%$ at the door\" means $(100 - x)\\%$ in advance — read the COMPLEMENT, not the named quantity.",
  skills: ["percents", "word-problems"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The function $C(t) = 35 + 7t$ gives the cost, in dollars, of renting a kayak for $t$ hours, where $t$ is a non-negative integer. According to this function, what is the cost of renting the kayak for $4$ hours?",
  choices: [
    // distractor: stops one step early — uses only the rate*time (28) and forgets the 35 base
    { id: "A", text: "$\\$28$" },
    // distractor: applies inverse op — subtracts 7t instead of adding (35 - 28)
    { id: "B", text: "$\\$7$" },
    { id: "C", text: "$\\$63$" },
    // distractor: wrong base — uses 35 + 4 instead of 35 + 7(4)
    { id: "D", text: "$\\$39$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $C(4) = 35 + 7 \\cdot 4 = 35 + 28 = 63$.\n\n**The Full Solution:**\nSubstitute $t = 4$ into $C(t) = 35 + 7t$:\n$C(4) = 35 + 7(4) = 35 + 28 = 63$.\nThe cost is $\\$63$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — uses only $7 \\cdot 4 = 28$ and forgets the $\\$35$ base fee.\n* Choice B: \"applies the inverse operation\" — subtracts: $35 - 28 = 7$.\n* Choice D: \"wrong base\" — uses $35 + 4 = 39$, treating $t$ as if the rate were $\\$1$/hour.\n\n**Test Day Takeaway:** Linear-cost evaluation: substitute $t$ first, then add. Both the rate-times-time term AND the constant must appear in the final value.",
  skills: ["linear-functions", "function-interpretation"]
},

// ===== MEDIUM (Q6–Q14) =====

{
  id: 6,
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
  id: 9,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The function $f$ is defined by $f(x) = 800(0.85)^x$. What is the value of $f(0) + 100$?",
  correctAnswer: "900",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $900$.**\n\n**The Fast Way (~10s):** Any nonzero base raised to $0$ is $1$, so $f(0) = 800$. Then $f(0) + 100 = 900$.\n\n**The Full Solution:**\n$f(0) = 800 \\cdot (0.85)^0 = 800 \\cdot 1 = 800$.\n\nThen $f(0) + 100 = 800 + 100 = 900$.\n\n**Common Mistakes to Avoid:**\n* Computing $(0.85)^0 = 0$ (the value is $1$, not $0$).\n* Computing $f(1) = 800 \\cdot 0.85 = 680$ and adding $100$ to get $780$ (used $x = 1$ instead of $x = 0$).\n* Stopping at $f(0) = 800$ and forgetting the $+100$ shift.\n\n**Verification:** By definition, $a^0 = 1$ for any $a \\neq 0$. So $f(0) = 800$, and $f(0) + 100 = 900$ \\checkmark.\n\n**Test Day Takeaway:** $f(0)$ in an exponential $a \\cdot b^x$ is always $a$, the initial value. Watch for shifted-output prompts like $f(0) + c$.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 10,
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
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Subtract equation 2 from equation 1: $-4y = 14$, so $y = -\\dfrac{7}{2}$.\n\n**The Full Solution:**\nEquation 1 minus equation 2:\n$(3x - 2y) - (3x + 2y) = 19 - 5$\n$-4y = 14$\n$y = -\\dfrac{14}{4} = -\\dfrac{7}{2}$\n\nVerification: equation 2 gives $3x + 2(-7/2) = 5$, so $3x = 12$ and $x = 4$. Then equation 1: $3(4) - 2(-7/2) = 12 + 7 = 19$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — solves for $x = 4$ and reports it instead of $y$.\n* Choice B: \"wrong sign\" — adds equations to get $6x = 24$ and confuses the elimination order, dropping the sign.\n* Choice D: \"applies inverse op\" — uses $\\dfrac{19 - 5}{4} = 3.5$ as if eliminating without sign tracking.\n\n**Test Day Takeaway:** When the question asks only for $y$, look for an elimination move that cancels $x$ in one step. Subtraction often beats substitution.",
  skills: ["systems-of-equations", "solving-equations"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A scatterplot shows the relationship between the number of hours $x$ a student practices a sport per week and their performance score $y$. The line of best fit for the data is $y = 6.4x + 22$. According to the model, what is the predicted score for a student who practices for $9$ hours per week?",
  correctAnswer: "79.6",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**The correct answer is $79.6$.**\n\n**The Fast Way (~10s):** Substitute $x = 9$: $y = 6.4(9) + 22 = 57.6 + 22 = 79.6$.\n\n**The Full Solution:**\nThe predicted value comes from substituting the input directly:\n$y = 6.4(9) + 22 = 57.6 + 22 = 79.6$.\n\n**Common Mistakes to Avoid:**\n* Computing only the slope contribution: $6.4 \\cdot 9 = 57.6$ and forgetting to add the intercept $22$.\n* Reading the equation as $y = 6.4 + 22x$, giving $6.4 + 198 = 204.4$.\n* Rounding the slope $6.4$ to $6$ and computing $6(9) + 22 = 76$.\n\n**Verification:** The intercept $22$ is the predicted score for $x = 0$, and the slope $6.4$ is the predicted score increase per added hour, so the model's value at $x = 9$ is $22 + 9 \\cdot 6.4 = 79.6$ \\checkmark.\n\n**Test Day Takeaway:** A line of best fit is just a linear function. Plug in the input to get the prediction. Use BOTH the slope and the intercept.",
  skills: ["scatterplots", "linear-functions"]
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
{
  id: 13,
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
  explanation: "**SAT Pattern: Points on a Line**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Line: $y = \\dfrac{3}{4}x$ (through origin). Check $(8, 6)$: $\\dfrac{3}{4}(8) = 6$ \\checkmark.\n\n**The Full Solution:**\nSince the line passes through the origin with slope $\\dfrac{3}{4}$: $y = \\dfrac{3}{4}x$.\n* Check $(3, 4)$: $\\dfrac{3}{4}(3) = 2.25 \\neq 4$.\n* Check $(6, 8)$: $\\dfrac{3}{4}(6) = 4.5 \\neq 8$.\n* Check $(8, 6)$: $\\dfrac{3}{4}(8) = 6$ \\checkmark.\n* Check $(4, 6)$: $\\dfrac{3}{4}(4) = 3 \\neq 6$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"swaps numerator/denominator\" — confuses rise and run by reading slope as $\\dfrac{4}{3}$.\n* Choice B: \"applies the inverse operation\" — uses slope $\\dfrac{4}{3}$: $\\dfrac{4}{3}(6) = 8$.\n* Choice D: \"wrong base\" — uses $y = \\dfrac{3}{2}x$: $\\dfrac{3}{2}(4) = 6$.\n\n**Test Day Takeaway:** For a point to be on $y = mx$, the ratio $y/x$ must equal the slope $m$.",
  skills: ["slope", "coordinate-geometry", "linear-functions"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The function $f$ is defined by $f(x) = 2x^2 - 5$. The function $g$ is defined by $g(x) = f(x - 3)$. What is the value of $g(5)$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: Function Transformation**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~15s):** $g(5) = f(5 - 3) = f(2) = 2(2)^2 - 5 = 8 - 5 = 3$.\n\n**The Full Solution:**\nBy definition, $g(x) = f(x - 3)$. To find $g(5)$:\n$g(5) = f(5 - 3) = f(2)$.\n$f(2) = 2(2)^2 - 5 = 2 \\cdot 4 - 5 = 8 - 5 = 3$.\n\n**Common Mistakes to Avoid:**\n* Computing $f(5)$ directly: $f(5) = 2(25) - 5 = 45$ — forgets the horizontal shift.\n* Computing $f(5 + 3) = f(8) = 2(64) - 5 = 123$ — applies the shift in the wrong direction.\n* Computing $f(2) = 2 \\cdot 2 - 5 = -1$ — forgets to square.\n\n**Verification:** $g(x) = 2(x - 3)^2 - 5$, so $g(5) = 2(2)^2 - 5 = 3$ \\checkmark.\n\n**Test Day Takeaway:** $g(x) = f(x - h)$ shifts $f$ to the RIGHT by $h$. To evaluate, replace $x$ with $x - h$ inside $f$ and compute.",
  skills: ["function-interpretation", "function-transformation"]
},

// ===== HARD (Q15–Q22) =====

{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A data set consists of $11$ positive integers. The list shows $10$ of them:\n\n$54, 49, 51, 53, 57, 50, 52, 48, 56, 50$\n\nThe mean of all $11$ integers is $52$. What is the value of the eleventh integer?",
  correctAnswer: "52",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $52$.**\n\n**The Fast Way (~25s):** Sum of $11$ integers is $11 \\cdot 52 = 572$. Sum of the $10$ listed integers is $520$. Eleventh integer $= 572 - 520 = 52$.\n\n**The Full Solution:**\nSum the listed values: $54 + 49 + 51 + 53 + 57 + 50 + 52 + 48 + 56 + 50 = 520$.\nTotal sum required for mean of $52$ across $11$ integers: $11 \\cdot 52 = 572$.\nEleventh integer $= 572 - 520 = 52$.\n\nObservation: when adding a new value to a data set leaves the mean unchanged, that new value MUST equal the mean.\n\n**Common Mistakes to Avoid:**\n* Computing the mean of the $10$ listed integers ($520 / 10 = 52$) and reporting it as if that solves the problem (it gives the right number for the wrong reason).\n* Forgetting to multiply by $11$ for the new total (e.g., using $10 \\cdot 52 = 520$ as the target).\n\n**Verification:** $\\dfrac{520 + 52}{11} = \\dfrac{572}{11} = 52$ \\checkmark.\n\n**Test Day Takeaway:** Adding a value EQUAL to the current mean leaves the mean unchanged. Always check whether your reasoning matches that invariant — don't just average the listed numbers.",
  skills: ["statistics", "mean"]
},
{
  id: 16,
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
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, line $j$ passes through the points $(2, -3)$ and $(-1, 9)$. Line $k$ is perpendicular to line $j$ and passes through the point $(8, 5)$. What is the $x$-coordinate of the point where line $k$ crosses the $x$-axis?",
  correctAnswer: "-12",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**The correct answer is $-12$.**\n\n**The Fast Way (~30s):** Slope of $j$: $\\dfrac{9 - (-3)}{-1 - 2} = \\dfrac{12}{-3} = -4$. Perpendicular slope $= \\dfrac{1}{4}$. Line $k$: $y - 5 = \\dfrac{1}{4}(x - 8)$. Set $y = 0$: $-5 = \\dfrac{1}{4}(x - 8)$, so $x - 8 = -20$ and $x = -12$.\n\n**The Full Solution:**\nSlope of $j$: $m_j = \\dfrac{9 - (-3)}{-1 - 2} = \\dfrac{12}{-3} = -4$.\nPerpendicular slope: $m_k = -\\dfrac{1}{m_j} = \\dfrac{1}{4}$.\n\nLine $k$ in point-slope form using $(8, 5)$:\n$y - 5 = \\dfrac{1}{4}(x - 8)$.\n\n$x$-intercept: set $y = 0$:\n$0 - 5 = \\dfrac{1}{4}(x - 8)$\n$-5 = \\dfrac{1}{4}(x - 8)$\n$x - 8 = -20$\n$x = -12$.\n\n**Common Mistakes to Avoid:**\n* Using slope $-4$ for line $k$ (parallel, not perpendicular).\n* Using slope $-\\dfrac{1}{4}$ (forgets to flip the sign — perpendicular slopes are NEGATIVE reciprocals).\n* Solving for the $y$-intercept by setting $x = 0$ instead of $y = 0$.\n\n**Verification:** At $x = -12$, $y = \\dfrac{1}{4}(-12 - 8) + 5 = \\dfrac{1}{4}(-20) + 5 = -5 + 5 = 0$ \\checkmark.\n\n**Test Day Takeaway:** Perpendicular slopes: flip the fraction AND change the sign. For $x$-intercept, set $y = 0$.",
  skills: ["slope", "coordinate-geometry", "linear-functions"]
},
{
  id: 18,
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
  id: 19,
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
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $4^{2x} \\cdot 8^{x+1} = 2^{17}$, what is the value of $x$?",
  correctAnswer: "2",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~30s):** Convert to base $2$: $4^{2x} = 2^{4x}$ and $8^{x+1} = 2^{3x + 3}$. So $2^{4x + 3x + 3} = 2^{17}$, giving $7x + 3 = 17$ and $x = 2$.\n\n**The Full Solution:**\nConvert all bases to $2$:\n$4^{2x} = (2^2)^{2x} = 2^{4x}$.\n$8^{x + 1} = (2^3)^{x + 1} = 2^{3x + 3}$.\n\nMultiply: $2^{4x} \\cdot 2^{3x + 3} = 2^{4x + 3x + 3} = 2^{7x + 3}$.\n\nSet exponents equal:\n$7x + 3 = 17$\n$7x = 14$\n$x = 2$.\n\n**Common Mistakes to Avoid:**\n* Forgetting that $8 = 2^3$ (not $2^2$) when converting bases.\n* Forgetting to distribute: $3(x + 1) = 3x + 3$, not $3x + 1$.\n* Adding bases instead of exponents (treating multiplication of powers as power addition).\n\n**Verification:** $4^4 \\cdot 8^3 = 256 \\cdot 512 = 131{,}072 = 2^{17}$ \\checkmark.\n\n**Test Day Takeaway:** Convert all bases to the smallest common base, then add exponents on multiplication, then equate.",
  skills: ["exponent-rules", "exponential-functions"]
},
{
  id: 21,
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
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In triangle $ABC$, $\\overline{DE}$ is parallel to $\\overline{BC}$ where $D$ is on $\\overline{AB}$ and $E$ is on $\\overline{AC}$. If $AD = 6$, $DB = 9$, and $AE = 8$, what is the length of $EC$?",
  correctAnswer: "12",
  explanation: "**SAT Pattern: Similar Triangles (Side Splitter Theorem)**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~15s):** Side splitter: $\\dfrac{AD}{DB} = \\dfrac{AE}{EC}$, so $\\dfrac{6}{9} = \\dfrac{8}{EC}$, giving $EC = \\dfrac{9 \\cdot 8}{6} = 12$.\n\n**The Full Solution:**\nSince $\\overline{DE} \\parallel \\overline{BC}$, by the basic proportionality (side splitter) theorem:\n$\\dfrac{AD}{DB} = \\dfrac{AE}{EC}$.\n$\\dfrac{6}{9} = \\dfrac{8}{EC}$\n$6 \\cdot EC = 9 \\cdot 8 = 72$\n$EC = 12$.\n\n**Common Mistakes to Avoid:**\n* Using $\\dfrac{AD}{AB}$ on the LHS but $\\dfrac{AE}{EC}$ on the RHS (mixed proportional pairs).\n* Reporting $AC = AE + EC = 8 + 12 = 20$ instead of $EC$.\n\n**Verification:** $\\dfrac{AD}{DB} = \\dfrac{6}{9} = \\dfrac{2}{3}$ and $\\dfrac{AE}{EC} = \\dfrac{8}{12} = \\dfrac{2}{3}$ \\checkmark. Also $\\dfrac{AD}{AB} = \\dfrac{6}{15} = \\dfrac{2}{5}$ matches $\\dfrac{AE}{AC} = \\dfrac{8}{20} = \\dfrac{2}{5}$ \\checkmark.\n\n**Test Day Takeaway:** When a line parallel to one side of a triangle intersects the other two sides, it divides them PROPORTIONALLY — match the same ratio shape on both sides.",
  skills: ["similar-triangles", "ratios"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 6 — Math Module 2 (22 questions, hardened track)
// Target distribution: 0 easy / 6 medium / 16 hard (±2). Domain mix 7/6/5/4.
// Concept-fusion at the top end (Q1 multi-percent, Q3 exponent ladder, Q8 vertex/coord fusion).

{
  id: 1,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The equation $5(2x - 3) + 4 = 10x + k$ has infinitely many solutions. What is the value of $k$?",
  correctAnswer: "-11",
  explanation: "**SAT Pattern: System Equivalence Check**\n\n**The correct answer is $-11$.**\n\n**The Fast Way (~15s):** Expand the left: $10x - 15 + 4 = 10x - 11$. For infinitely many solutions, $10x - 11 = 10x + k$ for ALL $x$, so $k = -11$.\n\n**The Full Solution:**\nLeft side: $5(2x - 3) + 4 = 10x - 15 + 4 = 10x - 11$.\nFor the equation $10x - 11 = 10x + k$ to hold for ALL $x$, the coefficients of $x$ must match (they do, both are $10$) AND the constants must match: $k = -11$.\n\nVerification: with $k = -11$, both sides equal $10x - 11$ for any $x$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Sign error: writing $k = 11$.\n* Computing $-15 - 4 = -19$ instead of $-15 + 4 = -11$.\n\n**Test Day Takeaway:** Infinitely many solutions $\\iff$ both sides are identical after simplification. Match coefficients on $x$ AND match constants.",
  skills: ["solving-equations", "linear-functions"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A boat rental dock charges a fixed daily fee plus an hourly rate. A customer who rents a boat for $3$ hours pays $\\$72$, and a customer who rents for $7$ hours pays $\\$128$. What is the fixed daily fee, in dollars?",
  choices: [
    // distractor: stops one step early — uses the hourly rate (14) as the answer
    { id: "A", text: "$\\$14$" },
    // distractor: applies inverse op — divides 72 by 3 to get 24
    { id: "B", text: "$\\$24$" },
    { id: "C", text: "$\\$30$" },
    // distractor: wrong base — uses 128 - 72 = 56 directly
    { id: "D", text: "$\\$56$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Slope (hourly rate) $= \\dfrac{128 - 72}{7 - 3} = \\dfrac{56}{4} = 14$. Use $(3, 72)$: $72 = 14(3) + b$, so $b = 72 - 42 = 30$.\n\n**The Full Solution:**\nLet $f$ be the fixed fee and $h$ the hourly rate. Then:\n$3h + f = 72$ ... (1)\n$7h + f = 128$ ... (2)\n\nSubtract (1) from (2): $4h = 56$, so $h = 14$.\nFrom (1): $3(14) + f = 72 \\Rightarrow f = 72 - 42 = 30$.\n\nVerification: $7(14) + 30 = 98 + 30 = 128$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports the hourly rate $\\$14$ as the daily fee.\n* Choice B: \"applies the inverse operation\" — divides $72 / 3 = 24$ as if there were no fixed fee.\n* Choice D: \"wrong base\" — uses the difference $128 - 72 = 56$ directly.\n\n**Test Day Takeaway:** \"Fixed fee + rate\" is a linear function $\\text{cost} = \\text{rate} \\cdot \\text{hours} + \\text{fee}$. Use two data points to recover the rate (slope), then back-solve for the fee (intercept).",
  skills: ["systems-of-equations", "linear-functions", "word-problems"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A linear model $y = -1.6x + 27$ predicts the value $y$, in thousands of dollars, of a piece of equipment $x$ years after purchase. A specific piece of equipment that is $5$ years old has an actual value of $\\$22{,}500$. What is the residual, in thousands of dollars?",
  choices: [
    // distractor: stops one step early — uses 22.5 only
    { id: "A", text: "$22.5$" },
    // distractor: applies inverse op — predicted minus actual
    { id: "B", text: "$-3.5$" },
    { id: "C", text: "$3.5$" },
    // distractor: wrong base — uses x = 5 directly without computing prediction
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Residual**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Predicted at $x = 5$: $y = -1.6(5) + 27 = 19$. Actual $= 22.5$. Residual $=$ actual $-$ predicted $= 22.5 - 19 = 3.5$.\n\n**The Full Solution:**\nPredicted value at $x = 5$:\n$y_{\\text{pred}} = -1.6(5) + 27 = -8 + 27 = 19$ thousand dollars.\nActual value: $22.5$ thousand dollars.\nResidual $=$ actual $-$ predicted $= 22.5 - 19 = 3.5$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports the actual value without subtracting the prediction.\n* Choice B: \"applies the inverse operation\" — uses predicted minus actual: $19 - 22.5 = -3.5$.\n* Choice D: \"wrong base\" — uses $x = 5$ as the residual directly.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted. Compute the model's prediction first, then subtract.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The positive number $a$ is $180\\%$ of the sum of the positive numbers $b$ and $c$, and $c$ is $50\\%$ of $b$. What percent of $b$ is $a$?",
  choices: [
    // distractor: stops one step early — adds 180 + 50 = 230
    { id: "A", text: "$230\\%$" },
    // distractor: applies the percent forward — uses 180% directly
    { id: "B", text: "$180\\%$" },
    { id: "C", text: "$270\\%$" },
    // distractor: wrong base — uses 180% of 1.5 with rounding to 300%
    { id: "D", text: "$300\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Let $b = 100$. Then $c = 50$, $b + c = 150$, $a = 1.80 \\cdot 150 = 270$. So $a$ is $\\dfrac{270}{100} = 270\\%$ of $b$.\n\n**The Full Solution:**\nLet $b = 100$ (a convenient value to avoid fractions).\nThen $c = 0.50 \\cdot b = 50$ and $b + c = 150$.\n$a = 1.80 \\cdot (b + c) = 1.80 \\cdot 150 = 270$.\nAs a percent of $b$: $\\dfrac{a}{b} \\cdot 100 = \\dfrac{270}{100} \\cdot 100 = 270\\%$.\n\nIn variables: $a = 1.8(b + 0.5b) = 1.8 \\cdot 1.5b = 2.7b$, so $a$ is $270\\%$ of $b$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — adds $180 + 50 = 230$ percentages directly.\n* Choice B: \"applies the percent forward\" — uses $180\\%$ as the answer without combining the second relationship.\n* Choice D: \"wrong base\" — computes $1.8 \\cdot 1.66 \\approx 3.0$ via rounding errors.\n\n**Test Day Takeaway:** Multi-step percent: pick a clean base (like $b = 100$), then walk through each percent in order. Avoid adding percentages directly.",
  skills: ["percents", "word-problems"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A data set of $9$ values, listed in order, is:\n\n$5, 7, 9, 11, 11, 11, 12, 14, 28$\n\nIf the value $28$ is removed from the data set, which of the following statements correctly describes the change?",
  choices: [
    // distractor: applies inverse op — claims both move (median doesn't here)
    { id: "A", text: "Both the mean and the median decrease." },
    { id: "B", text: "The mean decreases, but the median stays the same." },
    // distractor: wrong base — claims mean stays the same (outliers DO move the mean)
    { id: "C", text: "The mean stays the same, but the median decreases." },
    // distractor: stops one step early — claims neither changes
    { id: "D", text: "Both the mean and the median stay the same." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The original median (9 values) is the $5$th value, $11$. After removing $28$, the remaining $8$ values have median $= \\dfrac{11 + 11}{2} = 11$ — the median stays the same. The mean, however, must drop because the largest value was removed.\n\n**The Full Solution:**\nOriginal data set ($9$ values, sorted): $5, 7, 9, 11, 11, 11, 12, 14, 28$.\n* Median is the $5$th value: $11$.\n* Mean: $\\dfrac{5 + 7 + 9 + 11 + 11 + 11 + 12 + 14 + 28}{9} = \\dfrac{108}{9} = 12$.\n\nAfter removing $28$ ($8$ values): $5, 7, 9, 11, 11, 11, 12, 14$.\n* Median: average of $4$th and $5$th values $= \\dfrac{11 + 11}{2} = 11$ — UNCHANGED.\n* Mean: $\\dfrac{108 - 28}{8} = \\dfrac{80}{8} = 10$ — DECREASED from $12$ to $10$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies inverse op\" — assumes any outlier removal moves both center measures, but the median is robust here.\n* Choice C: \"wrong base\" — claims the mean is robust (it is not — outliers heavily influence the mean).\n* Choice D: \"stops one step early\" — claims neither changes; ignores that the mean is sensitive to extreme values.\n\n**Test Day Takeaway:** The MEAN is sensitive to outliers. The MEDIAN is robust — it can stay unchanged when an extreme value is removed, depending on the data shape.",
  skills: ["statistics", "median"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A workshop produces $14$-inch, $9$-inch, and $5$-inch dowels. During a single day, the number of $14$-inch dowels produced is $3$ times the number $d$ of $9$-inch dowels, and the number of $5$-inch dowels is $80$ more than the number of $9$-inch dowels. The workshop produces a total of $1{,}060$ dowels that day. How many $9$-inch dowels does the workshop produce that day?",
  choices: [
    // distractor: stops one step early — uses 1060/5 ignoring the +80 offset
    { id: "A", text: "$212$" },
    { id: "B", text: "$196$" },
    // distractor: applies inverse op — solves 5d - 80 = 1060 by sign error
    { id: "C", text: "$228$" },
    // distractor: wrong base — drops the 14-inch coefficient (uses 2d + 80)
    { id: "D", text: "$490$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Three-Variable System**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Let $d$ = number of $9$-inch dowels. Then $14$-inch count $= 3d$ and $5$-inch count $= d + 80$. Total: $3d + d + (d + 80) = 1060 \\Rightarrow 5d = 980 \\Rightarrow d = 196$.\n\n**The Full Solution:**\nLet $d$ be the number of $9$-inch dowels.\n* $14$-inch dowels: $3d$.\n* $5$-inch dowels: $d + 80$.\n\nSum equals total:\n$3d + d + (d + 80) = 1060$\n$5d + 80 = 1060$\n$5d = 980$\n$d = 196$.\n\nVerification: $14$-inch $= 588$, $9$-inch $= 196$, $5$-inch $= 276$; sum $= 588 + 196 + 276 = 1060$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — uses $1060 / 5 = 212$, ignoring the $+80$ offset.\n* Choice C: \"applies inverse op\" — solves $5d - 80 = 1060$: $5d = 1140$, $d = 228$ (sign error on the offset).\n* Choice D: \"wrong base\" — drops the $14$-inch term, treating it as if there were only two variables.\n\n**Test Day Takeaway:** Translate each part of a multi-rate word problem into one expression in a single variable, then sum to the total.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $x > 0$, the expression $\\sqrt[5]{x^7} \\cdot \\sqrt[3]{x^4}$ is equivalent to $x^{p/q}$ where $\\dfrac{p}{q}$ is in lowest terms. What is the value of $p + q$?",
  choices: [
    // distractor: stops one step early — adds 7 + 4 = 11
    { id: "A", text: "$11$" },
    // distractor: wrong base — adds 5 + 3 = 8 (denominators)
    { id: "B", text: "$8$" },
    { id: "C", text: "$56$" },
    // distractor: applies inverse op — multiplies 7*4 = 28 over 15
    { id: "D", text: "$43$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** $\\sqrt[5]{x^7} = x^{7/5}$ and $\\sqrt[3]{x^4} = x^{4/3}$. Sum the exponents: $\\dfrac{7}{5} + \\dfrac{4}{3} = \\dfrac{21 + 20}{15} = \\dfrac{41}{15}$. Already in lowest terms, so $p + q = 41 + 15 = 56$.\n\n**The Full Solution:**\nConvert each radical to a fractional exponent:\n* $\\sqrt[5]{x^7} = x^{7/5}$.\n* $\\sqrt[3]{x^4} = x^{4/3}$.\n\nMultiply: $x^{7/5} \\cdot x^{4/3} = x^{7/5 + 4/3}$.\n\nCommon denominator $15$:\n$\\dfrac{7}{5} + \\dfrac{4}{3} = \\dfrac{21}{15} + \\dfrac{20}{15} = \\dfrac{41}{15}$.\n\n$\\gcd(41, 15) = 1$, so $\\dfrac{41}{15}$ is in lowest terms. $p + q = 41 + 15 = 56$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — adds the numerators $7 + 4 = 11$, ignoring the denominators.\n* Choice B: \"wrong base\" — adds the denominators $5 + 3 = 8$ instead of finding the LCD.\n* Choice D: \"applies the inverse operation\" — multiplies $7 \\cdot 4 = 28$ over $15$, then $28 + 15 = 43$.\n\n**Test Day Takeaway:** $\\sqrt[n]{x^m} = x^{m/n}$. To multiply same-base powers, ADD the exponents (find a common denominator first).",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The system of equations\n\n$2x - 5y = 8$\n$ax - 15y = 36$\n\nhas no solution. What is the value of $a$?",
  choices: [
    // distractor: stops one step early — uses a = 2 (the original coefficient)
    { id: "A", text: "$2$" },
    { id: "B", text: "$6$" },
    // distractor: wrong base — uses 36/8 ratio for a
    { id: "C", text: "$9$" },
    // distractor: applies inverse op — uses negative ratio
    { id: "D", text: "$-6$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** For no solution, the lines are parallel: same slope, different intercepts. The $y$-coefficient ratio is $-15 / -5 = 3$, so multiply equation 1's $x$-coefficient by $3$: $a = 6$. Check constants don't match: $3 \\cdot 8 = 24 \\neq 36$ \\checkmark.\n\n**The Full Solution:**\nFor no solution: coefficients of $x$ and $y$ are proportional, but constants are NOT in the same ratio.\n\nFrom the $y$-coefficients: $\\dfrac{-15}{-5} = 3$. So multiply equation 1 by $3$: $6x - 15y = 24$.\n\nCompare with $ax - 15y = 36$:\n* Same $y$-coefficient ($-15$). Need $a = 6$ for matching $x$-coefficient.\n* Constants: $24$ vs $36$ — not equal, so the lines are PARALLEL, not identical.\n\nTherefore $a = 6$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — uses $a = 2$ from equation 1 directly without scaling.\n* Choice C: \"wrong base\" — uses the constant ratio $36 / 8$ rounded to find $a$.\n* Choice D: \"applies the inverse operation\" — uses sign flip on $a = 6$.\n\n**Test Day Takeaway:** No solution $\\iff$ same slope, DIFFERENT intercept. Match the coefficient ratios; verify constants do NOT match the same ratio.",
  skills: ["systems-of-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table shows three values of $x$ and the corresponding values of $f(x)$, where $f$ is a linear function.\n\n| $x$ | $f(x)$ |\n|-----|--------|\n| $-3$ | $19$ |\n| $1$ | $7$ |\n| $5$ | $-5$ |\n\nIf $g(x) = f(x - 4) + 6$, what is the value of $g(5)$?",
  choices: [
    // distractor: applies inverse op — uses f(5+4) = f(9) and adds 6
    { id: "A", text: "$-19$" },
    // distractor: stops one step early — uses f(5) = -5 without shift
    { id: "B", text: "$-5$" },
    { id: "C", text: "$13$" },
    // distractor: wrong base — uses f(5) and forgets the +6
    { id: "D", text: "$1$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** $g(5) = f(5 - 4) + 6 = f(1) + 6 = 7 + 6 = 13$.\n\n**The Full Solution:**\nStart from the definition: $g(x) = f(x - 4) + 6$.\n$g(5) = f(5 - 4) + 6 = f(1) + 6$.\nFrom the table, $f(1) = 7$.\n$g(5) = 7 + 6 = 13$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — shifts the wrong direction: $f(5 + 4) + 6$. From the linear pattern, $f$ has slope $-3$ and $f(0) = 10$; $f(9) = 10 - 27 = -17$, so $-17 + 6 = -11$ rounded.\n* Choice B: \"stops one step early\" — uses $f(5) = -5$ without applying the transformation.\n* Choice D: \"wrong base\" — uses $f(5) = -5$ and adds $6$: $-5 + 6 = 1$.\n\n**Test Day Takeaway:** $g(x) = f(x - h) + k$ shifts the input by $h$ (right) and adds $k$ to the output. Apply both shifts, in order.",
  skills: ["function-interpretation", "function-transformation", "linear-functions"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A researcher surveyed a random sample of $625$ first-time voters in a county and found that $36\\%$ planned to vote in the next election, with a margin of error of $\\pm 4\\%$ at a $95\\%$ confidence level. Which of the following is the most appropriate conclusion based on this survey?",
  choices: [
    // distractor: stops one step early — uses 36% as if it were the population value
    { id: "A", text: "Exactly $36\\%$ of all first-time voters in the county plan to vote." },
    { id: "B", text: "We are $95\\%$ confident that between $32\\%$ and $40\\%$ of all first-time voters in the county plan to vote." },
    // distractor: applies inverse op — applies the margin to a different group
    { id: "C", text: "Between $32\\%$ and $40\\%$ of all voters in the county plan to vote." },
    // distractor: wrong base — extrapolates from sample to all U.S. voters
    { id: "D", text: "Between $32\\%$ and $40\\%$ of all first-time voters nationwide plan to vote." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** A margin of error of $\\pm 4\\%$ on the sample proportion $36\\%$ gives a confidence interval of $32\\%$ to $40\\%$ — and the conclusion applies to the population the sample was drawn from (first-time voters in this county), at the stated confidence level.\n\n**The Full Solution:**\nThe sample proportion is $36\\%$ with margin of error $\\pm 4\\%$. The $95\\%$ confidence interval is $36\\% \\pm 4\\% = (32\\%, 40\\%)$.\n\nThree key restrictions on the conclusion:\n* The interval applies to the POPULATION sampled (first-time voters in this county), NOT to all voters or to a different geography.\n* It must include the confidence level (\"$95\\%$ confident\").\n* It cannot claim exact equality.\n\nOnly Choice B satisfies all three.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — drops the margin of error and confidence level entirely; treats the sample value as exact.\n* Choice C: \"applies inverse op\" — broadens to \"all voters\" instead of \"first-time voters\".\n* Choice D: \"wrong base\" — broadens beyond the sampled population (this county) to the nation.\n\n**Test Day Takeaway:** Confidence-interval conclusions must (1) name the SAMPLED population, (2) include the confidence level, (3) report the interval, NOT a point.",
  skills: ["margin-of-error", "statistics"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Consider the system of equations:\n\n$x + y + z = 18$\n$2x + y - z = 7$\n$x + 3y + 2z = 31$\n\nWhat is the value of $z$?",
  correctAnswer: "9",
  explanation: "**SAT Pattern: Three-Variable Elimination**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~35s):** Add equations 1 and 2 to eliminate $z$: $3x + 2y = 25$ ... (A). Compute equation 3 minus $2 \\times$ equation 1: $-x + y = -5$, so $y = x - 5$ ... (B). Sub (B) into (A): $3x + 2(x - 5) = 25 \\Rightarrow 5x = 35 \\Rightarrow x = 7$, $y = 2$, $z = 18 - 7 - 2 = 9$.\n\n**The Full Solution:**\nEliminate $z$ between equations 1 and 2 by adding them:\n$(x + y + z) + (2x + y - z) = 18 + 7 \\Rightarrow 3x + 2y = 25$ ... (A).\n\nEliminate $z$ between equations 1 and 3 (using $2 \\cdot$ equation 1):\n$\\text{eq 3} - 2 \\cdot \\text{eq 1}: (x + 3y + 2z) - (2x + 2y + 2z) = 31 - 36$\n$\\Rightarrow -x + y = -5 \\Rightarrow y = x - 5$ ... (B).\n\nSubstitute (B) into (A):\n$3x + 2(x - 5) = 25 \\Rightarrow 5x - 10 = 25 \\Rightarrow x = 7$.\nThen $y = 7 - 5 = 2$, and from equation 1: $z = 18 - 7 - 2 = 9$.\n\nVerification:\n* Eq 1: $7 + 2 + 9 = 18$ \\checkmark\n* Eq 2: $14 + 2 - 9 = 7$ \\checkmark\n* Eq 3: $7 + 6 + 18 = 31$ \\checkmark\n\n**Common Mistakes to Avoid:**\n* Solving only for $x$ and stopping (forgetting that the question asks for $z$).\n* Sign errors when subtracting equations — track signs carefully when eliminating.\n\n**Test Day Takeaway:** Three-variable systems: pick two pairs of equations to eliminate ONE variable in each pair, then solve the resulting two-variable system.",
  skills: ["systems-of-equations"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The parabola defined by $y = -3(x - h)^2 + k$ has its vertex at $(4, 19)$ and passes through the point $(2, 7)$. What is the value of $h - k$?",
  choices: [
    // distractor: applies inverse op — uses h + k = 23
    { id: "A", text: "$23$" },
    // distractor: stops one step early — uses h = 4 only
    { id: "B", text: "$4$" },
    { id: "C", text: "$-15$" },
    // distractor: wrong sign — uses k - h = 15
    { id: "D", text: "$15$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Vertex $(h, k) = (4, 19)$. Verify the second point with $a = -3$: $y = -3(2 - 4)^2 + 19 = -3(4) + 19 = 7$ \\checkmark. So $h - k = 4 - 19 = -15$.\n\n**The Full Solution:**\nIn vertex form $y = a(x - h)^2 + k$, the vertex is $(h, k)$. Given vertex $(4, 19)$: $h = 4$, $k = 19$.\n\nVerify the leading coefficient $a = -3$ with $(2, 7)$:\n$y = -3(2 - 4)^2 + 19 = -3(4) + 19 = -12 + 19 = 7$ \\checkmark.\n\nSo $h - k = 4 - 19 = -15$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — adds instead of subtracts: $h + k = 23$.\n* Choice B: \"stops one step early\" — reports $h = 4$ without subtracting $k$.\n* Choice D: \"wrong sign\" — computes $k - h = 19 - 4 = 15$.\n\n**Test Day Takeaway:** In $y = a(x - h)^2 + k$, the vertex is exactly $(h, k)$. Read $h$ and $k$ off directly; verify $a$ with the second point if asked.",
  skills: ["vertex-form", "quadratic-equations", "function-interpretation"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A study assigned $120$ participants to one of four programs: P, Q, R, or S. The two-way table summarizes the distribution by gender.\n\n| | Program P | Program Q | Program R | Program S | Total |\n|---|---|---|---|---|---|\n| Male | $9$ | $14$ | $11$ | $16$ | $50$ |\n| Female | $21$ | $16$ | $19$ | $14$ | $70$ |\n| Total | $30$ | $30$ | $30$ | $30$ | $120$ |\n\nIf one participant who is in Program P or Program R is selected at random, what is the probability that the participant is female?",
  choices: [
    // distractor: wrong base — uses 40/120 (the grand total)
    { id: "A", text: "$\\dfrac{1}{3}$" },
    // distractor: stops one step early — uses only the female total 70/120
    { id: "B", text: "$\\dfrac{7}{12}$" },
    { id: "C", text: "$\\dfrac{2}{3}$" },
    // distractor: swaps numerator/denominator — uses (60-40)/60
    { id: "D", text: "$\\dfrac{1}{4}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Programs P and R together: $30 + 30 = 60$. Female count in P and R: $21 + 19 = 40$. Probability $= \\dfrac{40}{60} = \\dfrac{2}{3}$.\n\n**The Full Solution:**\nThe condition \"in Program P or Program R\" restricts the sample space to those two columns: $30 + 30 = 60$ participants.\nFavorable outcomes: female AND (P or R) = $21 + 19 = 40$.\nProbability $= \\dfrac{40}{60} = \\dfrac{2}{3}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses the grand total $120$: $\\dfrac{40}{120} = \\dfrac{1}{3}$.\n* Choice B: \"stops one step early\" — uses the marginal female proportion $\\dfrac{70}{120} = \\dfrac{7}{12}$, ignoring the program restriction.\n* Choice D: \"swaps numerator/denominator\" — uses $\\dfrac{60 - 40}{60} = \\dfrac{1}{3}$ but reports a wrong reduction.\n\n**Test Day Takeaway:** \"Given X\" restricts to the X-rows or X-columns. Both numerator and denominator must be computed within that restricted subset.",
  skills: ["probability", "two-way-tables"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, line $p$ has the equation $4x - 5y = 35$. Line $q$ is perpendicular to line $p$ and passes through the point $(8, 1)$. What is the $y$-intercept of line $q$?",
  correctAnswer: "11",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~30s):** Slope of $p$: $\\dfrac{4}{5}$ (from $4x - 5y = 35$). Perpendicular slope: $-\\dfrac{5}{4}$. Line $q$: $y - 1 = -\\dfrac{5}{4}(x - 8)$. Set $x = 0$: $y - 1 = -\\dfrac{5}{4}(-8) = 10$, so $y = 11$.\n\n**The Full Solution:**\nRewrite $p$ in slope-intercept form: $4x - 5y = 35 \\Rightarrow y = \\dfrac{4}{5}x - 7$. Slope of $p$ is $\\dfrac{4}{5}$.\nPerpendicular slope: $m_q = -\\dfrac{5}{4}$.\n\nLine $q$ in point-slope form using $(8, 1)$:\n$y - 1 = -\\dfrac{5}{4}(x - 8)$.\n\n$y$-intercept: set $x = 0$:\n$y - 1 = -\\dfrac{5}{4}(0 - 8) = -\\dfrac{5}{4}(-8) = 10$.\n$y = 11$.\n\n**Common Mistakes to Avoid:**\n* Using slope $\\dfrac{4}{5}$ for $q$ (parallel, not perpendicular).\n* Sign error on the perpendicular slope: writing $\\dfrac{5}{4}$ instead of $-\\dfrac{5}{4}$.\n* Setting $y = 0$ to find the $x$-intercept instead of $x = 0$ for the $y$-intercept.\n\n**Verification:** At $(8, 1)$: $1 = -\\dfrac{5}{4}(8) + 11 = -10 + 11 = 1$ \\checkmark.\n\n**Test Day Takeaway:** Perpendicular slopes: flip the fraction AND change the sign. For $y$-intercept, set $x = 0$.",
  skills: ["slope", "coordinate-geometry", "linear-functions"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The graph of $x^2 + y^2 - 8x + 6y = 24$ in the $xy$-plane is a circle. What is the length of the circle's radius?",
  choices: [
    // distractor: stops one step early — gives r^2 = 49 instead of r
    { id: "A", text: "$49$" },
    { id: "B", text: "$7$" },
    // distractor: wrong base — uses sqrt(24) without completing the square
    { id: "C", text: "$2\\sqrt{6}$" },
    // distractor: applies inverse op — subtracts the completion terms instead of adding
    { id: "D", text: "$\\sqrt{24 - 16 - 9}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Complete the Square — Non-Square Radius**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Half of $-8$ is $-4$, squared is $16$; half of $6$ is $3$, squared is $9$. Add to both sides: $(x - 4)^2 + (y + 3)^2 = 24 + 16 + 9 = 49$. Radius $= \\sqrt{49} = 7$.\n\n**The Full Solution:**\nGroup and complete the square for each variable:\n$x^2 - 8x + y^2 + 6y = 24$\n$(x^2 - 8x + 16) + (y^2 + 6y + 9) = 24 + 16 + 9$\n$(x - 4)^2 + (y + 3)^2 = 49$\n\nSo $r^2 = 49$ and $r = 7$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports $r^2 = 49$ instead of $r = 7$.\n* Choice C: \"wrong base\" — uses $\\sqrt{24}$ directly without completing the square (gives $2\\sqrt{6}$).\n* Choice D: \"applies inverse op\" — subtracts the completion terms instead of adding them.\n\n**Test Day Takeaway:** Complete the square SYMMETRICALLY for both variables. \"Half the coefficient, squared\" gets ADDED to both sides — once for $x$, once for $y$.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In right triangle $PQR$, the right angle is at $P$. If $\\cos(R) = \\dfrac{24}{25}$, what is the value of $\\sin(R)$?",
  choices: [
    // distractor: applies inverse op — uses 25/7 (reciprocal-style ratio)
    { id: "A", text: "$\\dfrac{25}{7}$" },
    // distractor: applies inverse op — uses 24/7 (cosecant-like, mixes legs)
    { id: "B", text: "$\\dfrac{24}{7}$" },
    { id: "C", text: "$\\dfrac{7}{25}$" },
    // distractor: wrong base — uses 7/24 (tangent confusion)
    { id: "D", text: "$\\dfrac{7}{24}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Recognize the $7$-$24$-$25$ Pythagorean triple from $\\cos(R) = 24/25$. The remaining leg is $7$, so $\\sin(R) = \\dfrac{7}{25}$.\n\n**The Full Solution:**\nWith the right angle at $P$, $QR$ is the hypotenuse. For angle $R$:\n* Adjacent leg: $PR$.\n* Opposite leg: $PQ$.\n* Hypotenuse: $QR$.\n\nGiven $\\cos(R) = \\dfrac{PR}{QR} = \\dfrac{24}{25}$, so the sides are in ratio $PR : QR = 24 : 25$.\n\nUsing the Pythagorean identity $\\sin^2(R) + \\cos^2(R) = 1$:\n$\\sin^2(R) = 1 - \\left(\\dfrac{24}{25}\\right)^2 = 1 - \\dfrac{576}{625} = \\dfrac{49}{625}$.\n$\\sin(R) = \\dfrac{7}{25}$ (positive for an acute angle).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses the reciprocal $\\dfrac{25}{7}$ (cosecant-like).\n* Choice B: \"applies the inverse operation\" — uses $\\dfrac{24}{7}$, mixing legs to form a cotangent-like ratio.\n* Choice D: \"wrong base\" — uses $\\dfrac{7}{24}$, the tangent of $R$ instead of the sine.\n\n**Test Day Takeaway:** $\\sin^2 + \\cos^2 = 1$ for any acute angle. Recognize Pythagorean triples ($3$-$4$-$5$, $5$-$12$-$13$, $7$-$24$-$25$, $8$-$15$-$17$) to skip the algebra.",
  skills: ["trigonometry", "triangles"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $4x^2 + bx + 9 = 0$ has no real solutions. What is the greatest integer value of $b$?",
  choices: [
    // distractor: stops one step early — uses |b| < 12 boundary, gives b = 12
    { id: "A", text: "$12$" },
    { id: "B", text: "$11$" },
    // distractor: applies inverse op — uses b^2 = 144 and reports b = 144
    { id: "C", text: "$144$" },
    // distractor: wrong sign — gives b = -11 (smallest integer)
    { id: "D", text: "$-11$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** No real solutions $\\Leftrightarrow$ discriminant $< 0$: $b^2 - 4(4)(9) < 0$, so $b^2 < 144$, $|b| < 12$. Greatest INTEGER $b$ is $11$.\n\n**The Full Solution:**\nFor $4x^2 + bx + 9 = 0$ to have no real solutions, the discriminant must be negative:\n$\\Delta = b^2 - 4ac = b^2 - 4(4)(9) = b^2 - 144 < 0$.\n$b^2 < 144 \\Rightarrow |b| < 12 \\Rightarrow -12 < b < 12$.\n\nThe greatest INTEGER strictly less than $12$ is $11$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — uses $b = 12$ (the boundary), but the inequality is STRICT.\n* Choice C: \"applies the inverse operation\" — reports $b^2 = 144$ as $b$.\n* Choice D: \"wrong sign\" — gives the smallest integer $-11$ instead of the greatest.\n\n**Test Day Takeaway:** Discriminant $< 0$ is STRICT inequality. Greatest integer strictly less than $\\sqrt{144} = 12$ is $11$.",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A radioactive substance decays according to $A(t) = 320(0.78)^{t/4}$, where $A(t)$ is the amount in grams and $t$ is the time in years. By approximately what percent does the substance decay every $4$ years?",
  choices: [
    // distractor: applies inverse op — gives 78%
    { id: "A", text: "$78\\%$" },
    // distractor: stops one step early — gives 0.78
    { id: "B", text: "$0.78\\%$" },
    { id: "C", text: "$22\\%$" },
    // distractor: wrong base — gives 12% by halving 22%
    { id: "D", text: "$12\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The decay multiplier per $4$-year period is $0.78$, so the substance retains $78\\%$ and decays $1 - 0.78 = 0.22 = 22\\%$ every $4$ years.\n\n**The Full Solution:**\nIn $A(t) = 320(0.78)^{t/4}$, the exponent $t/4$ means each $4$-year period multiplies $A$ by $0.78$.\n* After $4$ years: $A(4) = 320(0.78)^{4/4} = 320 \\cdot 0.78$, retaining $78\\%$ of the previous amount.\n* Decay = $100\\% - 78\\% = 22\\%$ per $4$-year period.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — reports $78\\%$ (the RETAINED fraction) as the decay percent.\n* Choice B: \"stops one step early\" — reports $0.78$ as a percent literally (without converting to a percent of decay).\n* Choice D: \"wrong base\" — halves $22\\%$ to apply over a $2$-year period, ignoring the $t/4$ exponent.\n\n**Test Day Takeaway:** Decay multiplier $b$ where $0 < b < 1$ means $(1 - b) \\cdot 100\\%$ is lost per period. The PERIOD is set by the exponent (here $t/4$ means every $4$ years).",
  skills: ["exponential-functions", "percents"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Consider the system of equations:\n\n$3x - 2y + z = 10$\n$6x - 4y + 2z = 21$\n$x + y - z = 4$\n\nHow many solutions $(x, y, z)$ does this system have?",
  correctAnswer: "0",
  explanation: "**SAT Pattern: Three-Equation Contradiction**\n\n**The correct answer is $0$.**\n\n**The Fast Way (~25s):** Notice equation 2 is $2 \\times$ equation 1's left side ($6x - 4y + 2z = 2(3x - 2y + z)$), but $2 \\cdot 10 = 20 \\neq 21$. Contradiction $\\Rightarrow$ no solution.\n\n**The Full Solution:**\nMultiply equation 1 by $2$: $6x - 4y + 2z = 20$.\nCompare with equation 2: $6x - 4y + 2z = 21$.\nSame left side, different right side $\\Rightarrow$ contradiction.\n\nSince two of the three equations are inconsistent, the entire system has no solution. Equation 3 cannot rescue it — there is no $(x, y, z)$ satisfying both $20$ and $21$ as the same expression's value.\n\n**Common Mistakes to Avoid:**\n* Trying to solve via substitution and getting tangled — the proportional check on equations 1 and 2 short-circuits the work.\n* Assuming three equations always uniquely determine three variables (proportional dependence breaks this).\n\n**Test Day Takeaway:** Always scan three-variable systems for proportional left-hand sides. If two LHS are proportional but RHS aren't, the system is INCONSISTENT (zero solutions).",
  skills: ["systems-of-equations"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A solid right circular cylinder has a radius of $5$ inches and a height of $11$ inches. The total surface area of the cylinder, including both circular bases, can be written as $k\\pi$ square inches. What is the value of $k$?",
  correctAnswer: "160",
  explanation: "**SAT Pattern: Surface Area**\n\n**The correct answer is $160$.**\n\n**The Fast Way (~25s):** Total SA $= 2\\pi r^2 + 2\\pi r h = 2\\pi r(r + h) = 2\\pi(5)(5 + 11) = 10\\pi(16) = 160\\pi$. So $k = 160$.\n\n**The Full Solution:**\nA cylinder's total surface area:\n* Two circular bases: $2 \\cdot \\pi r^2 = 2 \\cdot \\pi (5)^2 = 50\\pi$.\n* Lateral (side): $2\\pi r h = 2\\pi(5)(11) = 110\\pi$.\n\nTotal: $50\\pi + 110\\pi = 160\\pi$.\n\nSo the coefficient is $k = 160$.\n\n**Common Mistakes to Avoid:**\n* Forgetting the second base: using only $\\pi r^2 + 2\\pi rh = 25\\pi + 110\\pi = 135\\pi$.\n* Using $\\pi r^2 h$ (volume) instead of surface area.\n* Using diameter $d = 10$ instead of radius $5$.\n\n**Verification:** $2\\pi r(r + h) = 2\\pi(5)(16) = 160\\pi$ \\checkmark.\n\n**Test Day Takeaway:** Cylinder total SA $= 2\\pi r^2 + 2\\pi r h = 2\\pi r(r + h)$. Always include BOTH circular bases.",
  skills: ["surface-area"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $432$ is $p\\%$ greater than $48$, what is the value of $p$?",
  choices: [
    // distractor: stops one step early — gives 9 (the multiplicative factor)
    { id: "A", text: "$9$" },
    // distractor: applies inverse op — gives 800 (using 432/48 * 100 wrongly)
    { id: "B", text: "$900$" },
    { id: "C", text: "$800$" },
    // distractor: wrong base — gives 90% via dropping a digit
    { id: "D", text: "$90$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent Greater Than**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** \"$432$ is $p\\%$ greater than $48$\" means $432 = 48 + 48 \\cdot \\dfrac{p}{100}$, i.e., $432 - 48 = 384$ is $p\\%$ of $48$. So $p = \\dfrac{384}{48} \\cdot 100 = 8 \\cdot 100 = 800$.\n\n**The Full Solution:**\n\"$A$ is $p\\%$ greater than $B$\" $\\iff$ $A = B + B \\cdot \\dfrac{p}{100} = B(1 + p/100)$.\nSo $432 = 48(1 + p/100)$.\n$\\dfrac{432}{48} = 1 + \\dfrac{p}{100}$\n$9 = 1 + \\dfrac{p}{100}$\n$\\dfrac{p}{100} = 8$\n$p = 800$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the multiplicative factor $9$ (since $432 = 9 \\cdot 48$) instead of computing $p$.\n* Choice B: \"applies the inverse operation\" — uses $432 / 48 \\cdot 100 = 900$ (forgets to subtract $1$).\n* Choice D: \"wrong base\" — drops a digit to give $90$, treating the answer as a sub-$100\\%$ ratio.\n\n**Test Day Takeaway:** \"$A$ is $p\\%$ greater than $B$\" means $A = B(1 + p/100)$. Compute the ratio $A/B$, subtract $1$, and multiply by $100$ to get $p$.",
  skills: ["percents", "word-problems"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Let $f(x) = x - 4$ and $g(x) = x^2 + 5$. If $g(f(a)) = 30$, what is a positive value of $a$?",
  choices: [
    // distractor: stops one step early — gives a = 5 from sqrt(25)
    { id: "A", text: "$5$" },
    { id: "B", text: "$9$" },
    // distractor: applies inverse op — uses g(a) - 4 = 30 to give 30 + 4 + 4 = 38
    { id: "C", text: "$\\sqrt{34}$" },
    // distractor: wrong base — gives 1 from a - 4 = -1 sign error
    { id: "D", text: "$1$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Composition**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $g(f(a)) = (a - 4)^2 + 5 = 30$, so $(a - 4)^2 = 25$, $a - 4 = \\pm 5$, giving $a = 9$ or $a = -1$. Positive: $a = 9$.\n\n**The Full Solution:**\n$f(a) = a - 4$.\n$g(f(a)) = (a - 4)^2 + 5$.\n\nSet equal to $30$:\n$(a - 4)^2 + 5 = 30$\n$(a - 4)^2 = 25$\n$a - 4 = \\pm 5$\n$a = 9$ or $a = -1$.\n\nThe positive value is $a = 9$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — solves $(a - 4)^2 = 25$ to get $a - 4 = 5$ but reports $5$ instead of $a = 9$.\n* Choice C: \"applies the inverse operation\" — sets $a - 4 = \\sqrt{30 - 5}$ wrongly outside the squared expression.\n* Choice D: \"wrong base\" — uses $a - 4 = -3$ (sign error inside).\n\n**Test Day Takeaway:** $g(f(a))$ means \"plug $f(a)$ into $g$.\" Build the composite expression carefully, then solve. Watch for the $\\pm$ when you take a square root.",
  skills: ["function-interpretation", "function-composition", "solving-equations"]
}
      ]
    }
  ]
};

export default practiceTest6;
