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
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Add $9$ to both sides to get $4x = 32$, then divide by $4$: $x = 8$.\n\n**The Full Solution:**\nStep 1: Start with $4x - 9 = 23$ and add $9$ to both sides: $4x = 32$.\nStep 2: Divide both sides by $4$: $x = \\dfrac{32}{4} = 8$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3.5$): subtracts $9$ instead of adding, computing $\\dfrac{23 - 9}{4} = 3.5$.\n* Choice B ($7$): an arithmetic slip on the constant, treating the numerator as $28$.\n* Choice D ($14$): stops at $23 - 9 = 14$ and forgets to divide by $4$.\n\n**Test Day Takeaway:** Isolate the variable in two ordered moves: undo the addition or subtraction first, then divide off the coefficient.",
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
  explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** If $30\\%$ sold at the door, then $70\\%$ sold in advance: $0.70 \\times 480 = 336$ tickets. Revenue $= 336 \\times 8 = \\$2{,}688$.\n\n**The Full Solution:**\nStep 1: The door tickets are $30\\%$, so the advance tickets are the complement, $100\\% - 30\\% = 70\\%$.\nStep 2: Advance count $= 0.70 \\times 480 = 336$ tickets.\nStep 3: At $\\$8$ each, advance revenue $= 336 \\times 8 = \\$2{,}688$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$1{,}152$): uses the door percent instead of the advance percent: $0.30 \\times 480 \\times 8 = 1{,}152$.\n* Choice B ($\\$1{,}440$): an arithmetic slip on the door-count path ($144 \\times 10$), still using the wrong $30\\%$ base.\n* Choice D ($\\$3{,}840$): multiplies all $480$ tickets by $\\$8$, ignoring the percent split entirely.\n\n**Test Day Takeaway:** \"$x\\%$ at the door\" means $(100 - x)\\%$ in advance — solve for the complement, not the named quantity.",
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
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Subtract $7$ from $6y + 7 = 31$ to get the block $6y = 24$. Then $6y - 2 = 24 - 2 = 22$ — never solve for $y$.\n\n**The Full Solution:**\nStep 1: Treat $6y$ as a single block. From $6y + 7 = 31$, subtract $7$: $6y = 24$.\nStep 2: The question asks for $6y - 2$, so subtract $2$ from the block: $6y - 2 = 24 - 2 = 22$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($24$): reports the block value $6y = 24$ without applying the $-2$ shift.\n* Choice C ($4$): solves for the variable $y = 4$ and reports it instead of the requested expression.\n* Choice D ($29$): subtracts $2$ from the right side $31$ instead of from $6y$.\n\n**Test Day Takeaway:** When asked for an expression like $6y - 2$, isolate the matching block $6y$ first — you rarely need the variable itself.",
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
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The $84$ children are $28\\%$ of the total $T$, so $T = \\dfrac{84}{0.28} = 300$.\n\n**The Full Solution:**\nStep 1: Let $T$ be the total number of patients. Children are $28\\%$ of $T$: $0.28 \\cdot T = 84$.\nStep 2: Divide both sides by $0.28$: $T = \\dfrac{84}{0.28} = 300$.\nStep 3: Check: $0.28 \\times 300 = 84$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($24$): multiplies instead of dividing, $84 \\times 0.28 \\approx 23.5$, rounded to $24$.\n* Choice B ($117$): divides by the complement $0.72$, treating $84$ as the non-children count.\n* Choice D ($3{,}000$): divides by $0.028$ instead of $0.28$ — a decimal slip of one place.\n\n**Test Day Takeaway:** When a part is given as a percent of an unknown total, divide the part by the percent (as a decimal) to recover the whole.",
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
  explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Unit rate $= \\dfrac{60}{4} = 15$ deliveries per hour. In $10$ hours: $15 \\times 10 = 150$.\n\n**The Full Solution:**\nStep 1: A constant rate means deliveries are proportional to time: $\\dfrac{60}{4} = \\dfrac{x}{10}$.\nStep 2: Cross-multiply: $4x = 600$, so $x = 150$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): reports the unit rate $15$ per hour instead of the $10$-hour total.\n* Choice B ($24$): inverts the proportion, computing $\\dfrac{60 \\times 4}{10} = 24$ by swapping the $4$ and $10$.\n* Choice C ($66$): adds the $6$ extra hours as one delivery each, $60 + 6 = 66$, instead of scaling by the rate.\n\n**Test Day Takeaway:** Constant-rate problems are proportions. Find the unit rate first, then multiply by the new amount.",
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
  explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Standard form is $(x - h)^2 + (y - k)^2 = r^2$, so $r^2 = 36$ and $r = 6$.\n\n**The Full Solution:**\nStep 1: Match $(x - 4)^2 + (y + 1)^2 = 36$ to $(x - h)^2 + (y - k)^2 = r^2$. The right side is $r^2$.\nStep 2: So $r^2 = 36$, and $r = \\sqrt{36} = 6$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): reads the $h$-coordinate of the center ($4$) instead of the radius.\n* Choice B ($18$): divides $36$ by $2$ instead of taking the square root.\n* Choice D ($36$): reports $r^2 = 36$ as the radius without taking the square root.\n\n**Test Day Takeaway:** In $(x - h)^2 + (y - k)^2 = r^2$, the right side is $r^2$, not $r$ — always take the square root.",
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
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** \"Prefers a reusable bag\" restricts you to that column, total $138$. Members in it: $96$. So $P = \\dfrac{96}{138} = \\dfrac{16}{23}$.\n\n**The Full Solution:**\nStep 1: The condition restricts the sample space to the \"Reusable Bag\" column, which has $138$ shoppers.\nStep 2: Favorable outcomes are reusable-bag shoppers who are members: $96$.\nStep 3: $P = \\dfrac{96}{138} = \\dfrac{16}{23}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{16}{45}$): uses the grand total $270$ as the denominator: $\\dfrac{96}{270} = \\dfrac{16}{45}$.\n* Choice B ($\\dfrac{4}{5}$): uses the Members row total $120$: $\\dfrac{96}{120} = \\dfrac{4}{5}$ — that is $P(\\text{reusable} \\mid \\text{member})$, the reversed condition.\n* Choice D ($\\dfrac{23}{16}$): flips numerator and denominator, computing $\\dfrac{138}{96}$ simplified.\n\n**Test Day Takeaway:** \"Given X\" means restrict to the X row or column. The numerator counts the favorable cases within that subset; the denominator is the subset's total.",
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
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**The correct answer is $79.6$.**\n\n**The Fast Way (~10s):** Substitute $x = 9$ into $y = 6.4x + 22$: $y = 6.4(9) + 22 = 57.6 + 22 = 79.6$.\n\n**The Full Solution:**\nStep 1: A line of best fit is just a linear function; substitute the input $x = 9$.\nStep 2: $y = 6.4(9) + 22 = 57.6 + 22 = 79.6$.\n\n**Common Mistakes:** Reporting $57.6$ by forgetting to add the intercept $22$; misreading the model as $y = 6.4 + 22x$ to get $204.4$; rounding the slope to $6$ for $6(9) + 22 = 76$.\n\n**Test Day Takeaway:** A line of best fit is a linear function — plug in the input and use both the slope and the intercept.",
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
  explanation: "**SAT Pattern: Points on a Line**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Through the origin with slope $\\dfrac{3}{4}$ gives $y = \\dfrac{3}{4}x$. Test $(8, 6)$: $\\dfrac{3}{4}(8) = 6$. $\\checkmark$\n\n**The Full Solution:**\nStep 1: A line through the origin with slope $\\dfrac{3}{4}$ has equation $y = \\dfrac{3}{4}x$.\nStep 2: Check each point by confirming $y = \\dfrac{3}{4}x$.\n* $(3, 4)$: $\\dfrac{3}{4}(3) = 2.25 \\neq 4$.\n* $(6, 8)$: $\\dfrac{3}{4}(6) = 4.5 \\neq 8$.\n* $(8, 6)$: $\\dfrac{3}{4}(8) = 6$. $\\checkmark$\n* $(4, 6)$: $\\dfrac{3}{4}(4) = 3 \\neq 6$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(3, 4)$): reads the slope upside down as $\\dfrac{4}{3}$, matching rise $4$ over run $3$.\n* Choice B ($(6, 8)$): also uses the flipped slope $\\dfrac{4}{3}$: $\\dfrac{4}{3}(6) = 8$.\n* Choice D ($(4, 6)$): uses slope $\\dfrac{3}{2}$ instead of $\\dfrac{3}{4}$: $\\dfrac{3}{2}(4) = 6$.\n\n**Test Day Takeaway:** For a point to lie on $y = mx$, the ratio $\\dfrac{y}{x}$ must equal the slope $m$.",
  skills: ["slope", "coordinate-geometry", "linear-functions"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The function $f$ is defined by $f(x) = 800(0.85)^x$. What is the value of $f(0) + 100$?",
  correctAnswer: "900",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $900$.**\n\n**The Fast Way (~10s):** Any nonzero base to the $0$ power is $1$, so $f(0) = 800 \\cdot 1 = 800$. Then $f(0) + 100 = 900$.\n\n**The Full Solution:**\nStep 1: $f(0) = 800 \\cdot (0.85)^0 = 800 \\cdot 1 = 800$.\nStep 2: $f(0) + 100 = 800 + 100 = 900$.\n\n**Common Mistakes:** Treating $(0.85)^0$ as $0$ instead of $1$; evaluating $f(1) = 800 \\cdot 0.85 = 680$ and adding $100$ for $780$; stopping at $800$ and forgetting the $+100$ shift.\n\n**Test Day Takeaway:** In an exponential $a \\cdot b^x$, the value $f(0)$ is always $a$, the initial value. Watch for shifted prompts like $f(0) + c$.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The function $f$ is defined by $f(x) = 2x^2 - 5$. The function $g$ is defined by $g(x) = f(x - 3)$. What is the value of $g(5)$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: Function Transformation**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~15s):** $g(5) = f(5 - 3) = f(2) = 2(2)^2 - 5 = 8 - 5 = 3$.\n\n**The Full Solution:**\nStep 1: By definition $g(x) = f(x - 3)$, so $g(5) = f(5 - 3) = f(2)$.\nStep 2: Evaluate $f(2) = 2(2)^2 - 5 = 2 \\cdot 4 - 5 = 8 - 5 = 3$.\n\n**Common Mistakes:** Computing $f(5) = 2(25) - 5 = 45$ and forgetting the shift; using $f(5 + 3) = f(8) = 123$ by shifting the wrong way; computing $2 \\cdot 2 - 5 = -1$ by not squaring.\n\n**Test Day Takeaway:** $g(x) = f(x - h)$ shifts $f$ right by $h$. To evaluate, replace $x$ with $x - h$ inside $f$ and compute.",
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
  explanation: "**SAT Pattern: Compound Interest**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Growing $5\\%$ per year means multiplying by $1.05$ each year, so the value is $2000(1.05)^t$.\n\n**The Full Solution:**\nStep 1: Compound growth has the form $A = P(1 + r)^t$, with principal $P = 2000$ and rate $r = 0.05$.\nStep 2: Substitute: $A = 2000(1 + 0.05)^t = 2000(1.05)^t$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2000(1.5)^t$): writes $5\\%$ as $0.5$ instead of $0.05$, giving $1 + 0.5 = 1.5$.\n* Choice C ($2000(0.95)^t$): subtracts the rate, $1 - 0.05 = 0.95$, modeling decay instead of growth.\n* Choice D ($2000 + 100t$): models simple, linear interest of $\\$100$ per year rather than compound growth.\n\n**Test Day Takeaway:** Compound growth is $P(1 + r)^t$ — convert the percent to a decimal and add it to $1$ (subtract only for decay).",
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
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Slope $= \\dfrac{-7 - 11}{2 - (-4)} = \\dfrac{-18}{6} = -3$. Plug $(2, -7)$ into $y = -3x + b$: $-7 = -6 + b$, so $b = -1$.\n\n**The Full Solution:**\nStep 1: Compute the slope. $m = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{-7 - 11}{2 - (-4)} = \\dfrac{-18}{6} = -3$.\nStep 2: Substitute one point into $y = mx + b$ to find $b$. Using $(2, -7)$: $-7 = -3(2) + b = -6 + b$, so $b = -1$.\nStep 3: Check the other point. At $x = -4$: $y = -3(-4) - 1 = 12 - 1 = 11$. $\\checkmark$\n\nThat makes the $y$-intercept $-1$, choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): reports the slope instead of the intercept — one step short.\n* Choice B ($23$): mishandles the sign on $-3(-4)$, computing $11 + 12$ instead of $11 - 12$.\n* Choice D ($-7$): takes the $y$-value of a given point as the intercept, which only works if that point is on the $y$-axis.\n\n**Test Day Takeaway:** For a line through two points, find the slope first, then plug either point into $y = mx + b$ and solve for $b$.",
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
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The $x$-terms match, so subtract equation 2 from equation 1: $-4y = 14$, giving $y = -\\dfrac{7}{2}$.\n\n**The Full Solution:**\nStep 1: Both equations have $3x$, so subtracting cancels $x$.\nStep 2: $(3x - 2y) - (3x + 2y) = 19 - 5 \\Rightarrow -4y = 14$.\nStep 3: Divide: $y = -\\dfrac{14}{4} = -\\dfrac{7}{2}$.\nStep 4: Check with $x = 4$: equation 1 gives $3(4) - 2\\left(-\\dfrac{7}{2}\\right) = 12 + 7 = 19$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): solves for $x$ and reports it instead of $y$.\n* Choice B ($\\dfrac{7}{2}$): drops the negative sign while subtracting in the wrong order.\n* Choice D ($3.5$): the same sign slip, written as a decimal — still positive, so still wrong.\n\n**Test Day Takeaway:** When only one variable is asked for, line up the equations and add or subtract to kill the other variable in a single move.",
  skills: ["systems-of-equations", "solving-equations"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $4^{2x} \\cdot 8^{x+1} = 2^{17}$, what is the value of $x$?",
  correctAnswer: "2",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~30s):** Rewrite to base $2$: $4^{2x} = 2^{4x}$ and $8^{x+1} = 2^{3x+3}$. Multiplying adds exponents, so $2^{7x+3} = 2^{17}$, giving $7x + 3 = 17$ and $x = 2$.\n\n**The Full Solution:**\nStep 1: Convert every base to $2$. Since $4 = 2^2$, $4^{2x} = (2^2)^{2x} = 2^{4x}$. Since $8 = 2^3$, $8^{x+1} = (2^3)^{x+1} = 2^{3x+3}$.\nStep 2: Multiply the powers by adding exponents: $2^{4x} \\cdot 2^{3x+3} = 2^{7x+3}$.\nStep 3: With equal bases, set the exponents equal: $7x + 3 = 17 \\Rightarrow 7x = 14 \\Rightarrow x = 2$.\nStep 4: Check: $4^4 \\cdot 8^3 = 256 \\cdot 512 = 131{,}072 = 2^{17}$. $\\checkmark$\n\n**Common Mistakes:** Treating $8$ as $2^2$ instead of $2^3$; failing to distribute, writing $3x + 1$ instead of $3x + 3$; multiplying the bases instead of adding the exponents.\n\n**Test Day Takeaway:** Convert everything to one common base, then add exponents across multiplication and match the powers.",
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
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Write the line as $2x - y + b = 0$. Its distance from the center $(1, 2)$ is $\\dfrac{|2(1) - 2 + b|}{\\sqrt{5}} = \\dfrac{|b|}{\\sqrt{5}}$. Set that equal to the radius $\\sqrt{5}$: $|b| = 5$, so $b = 5$ or $b = -5$. Only $-5$ is listed.\n\n**The Full Solution:**\nStep 1: A line of slope $2$ is $y = 2x + b$, or $2x - y + b = 0$.\nStep 2: The circle $(x-1)^2 + (y-2)^2 = 5$ has center $(1, 2)$ and radius $\\sqrt{5}$.\nStep 3: Distance from center to line: $d = \\dfrac{|2(1) - 1(2) + b|}{\\sqrt{2^2 + (-1)^2}} = \\dfrac{|b|}{\\sqrt{5}}$.\nStep 4: Tangency means $d = r$: $\\dfrac{|b|}{\\sqrt{5}} = \\sqrt{5} \\Rightarrow |b| = 5 \\Rightarrow b = 5 \\text{ or } b = -5$. Choice B, $-5$, is one of these.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): grabs the center's $y$-coordinate without using the distance condition.\n* Choice C ($\\sqrt{5}$): reports the radius as if it were the intercept.\n* Choice D ($0$): sets the distance to $0$, which puts the line through the center — a secant, not a tangent.\n\n**Test Day Takeaway:** A line is tangent to a circle exactly when its distance from the center equals the radius. Use $d = \\dfrac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}$.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In triangle $ABC$, $\\overline{DE}$ is parallel to $\\overline{BC}$ where $D$ is on $\\overline{AB}$ and $E$ is on $\\overline{AC}$. If $AD = 6$, $DB = 9$, and $AE = 8$, what is the length of $EC$?",
  correctAnswer: "12",
  explanation: "**SAT Pattern: Similar Triangles (Side Splitter Theorem)**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~15s):** $\\overline{DE} \\parallel \\overline{BC}$ means $\\dfrac{AD}{DB} = \\dfrac{AE}{EC}$, so $\\dfrac{6}{9} = \\dfrac{8}{EC}$, giving $EC = \\dfrac{9 \\cdot 8}{6} = 12$.\n\n**The Full Solution:**\nStep 1: A line parallel to one side of a triangle cuts the other two sides proportionally (the side-splitter theorem): $\\dfrac{AD}{DB} = \\dfrac{AE}{EC}$.\nStep 2: Substitute the known lengths: $\\dfrac{6}{9} = \\dfrac{8}{EC}$.\nStep 3: Cross-multiply: $6 \\cdot EC = 9 \\cdot 8 = 72$, so $EC = 12$.\nStep 4: Check the ratios: $\\dfrac{6}{9} = \\dfrac{2}{3}$ and $\\dfrac{8}{12} = \\dfrac{2}{3}$. $\\checkmark$\n\n**Common Mistakes:** Pairing $\\dfrac{AD}{AB}$ with $\\dfrac{AE}{EC}$ (mismatched ratio shapes); reporting $AC = AE + EC = 20$ instead of $EC$.\n\n**Test Day Takeaway:** When a segment parallel to one side meets the other two sides, it splits them in the same ratio — match identical fraction shapes on both sides before cross-multiplying.",
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
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Complete the square on each variable: $(x^2 - 10x + 25) + (y^2 + 6y + 9) = -18 + 25 + 9$, which gives $(x-5)^2 + (y+3)^2 = 16$. Center $(5, -3)$, radius $\\sqrt{16} = 4$.\n\n**The Full Solution:**\nStep 1: Group and move the constant: $(x^2 - 10x) + (y^2 + 6y) = -18$.\nStep 2: For $x$, half of $-10$ is $-5$, squared is $25$; add $25$. For $y$, half of $6$ is $3$, squared is $9$; add $9$. Add both to the right side too.\nStep 3: $(x - 5)^2 + (y + 3)^2 = -18 + 25 + 9 = 16$.\nStep 4: Read off the center $(5, -3)$ and radius $\\sqrt{16} = 4$. That is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-5, 3)$, radius $4$): flips the center signs — $(x-5)^2$ gives $+5$, not $-5$.\n* Choice C ($(5, -3)$, radius $16$): leaves the radius as $r^2 = 16$ without taking the square root.\n* Choice D ($(10, -6)$, radius $\\sqrt{18}$): reads the raw coefficients $-10$ and $6$ as the center instead of completing the square.\n\n**Test Day Takeaway:** To convert general form to standard form, complete the square for both $x$ and $y$, then take the square root of the right side for the radius.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, line $j$ passes through the points $(2, -3)$ and $(-1, 9)$. Line $k$ is perpendicular to line $j$ and passes through the point $(8, 5)$. What is the $x$-coordinate of the point where line $k$ crosses the $x$-axis?",
  correctAnswer: "-12",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**The correct answer is $-12$.**\n\n**The Fast Way (~30s):** Slope of $j$ is $\\dfrac{9 - (-3)}{-1 - 2} = \\dfrac{12}{-3} = -4$, so $k$ has slope $\\dfrac{1}{4}$. From $(8, 5)$: $y - 5 = \\dfrac{1}{4}(x - 8)$. Set $y = 0$: $-5 = \\dfrac{1}{4}(x - 8) \\Rightarrow x - 8 = -20 \\Rightarrow x = -12$.\n\n**The Full Solution:**\nStep 1: Slope of $j$: $m_j = \\dfrac{9 - (-3)}{-1 - 2} = \\dfrac{12}{-3} = -4$.\nStep 2: Perpendicular slope is the negative reciprocal: $m_k = \\dfrac{1}{4}$.\nStep 3: Line $k$ through $(8, 5)$: $y - 5 = \\dfrac{1}{4}(x - 8)$.\nStep 4: The $x$-axis crossing has $y = 0$: $-5 = \\dfrac{1}{4}(x - 8) \\Rightarrow x - 8 = -20 \\Rightarrow x = -12$.\nStep 5: Check: at $x = -12$, $y = \\dfrac{1}{4}(-20) + 5 = -5 + 5 = 0$. $\\checkmark$\n\n**Common Mistakes:** Using $-4$ for $k$ (that is parallel, not perpendicular); using $-\\dfrac{1}{4}$ and forgetting the sign flip; setting $x = 0$ for a $y$-intercept when the question asks where the line meets the $x$-axis.\n\n**Test Day Takeaway:** Perpendicular slopes flip the fraction and switch the sign. To hit the $x$-axis, set $y = 0$.",
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
  explanation: "**SAT Pattern: Solving Exponential Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Set $3 \\cdot 2^x - 12 = 0$, so $3 \\cdot 2^x = 12$ and $2^x = 4 = 2^2$, giving $x = 2$.\n\n**The Full Solution:**\nStep 1: $g(x) = 0 \\Rightarrow 3 \\cdot 2^x - 12 = 0$.\nStep 2: Isolate the power: $3 \\cdot 2^x = 12 \\Rightarrow 2^x = 4$.\nStep 3: Match bases: $4 = 2^2$, so $2^x = 2^2$ gives $x = 2$. That is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): $g(0) = 3 - 12 = -9 \\neq 0$.\n* Choice C ($3$): solves as if $2^x = 8$ instead of $4$.\n* Choice D ($4$): confuses the constant $12$ or the value $4$ with the exponent itself.\n\n**Test Day Takeaway:** Isolate the exponential term first, then rewrite the other side as the same base to read off the exponent.",
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
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The vertex $(2, -7)$ gives $k = -7$ directly. Plug $(5, 11)$ into $y = a(x-2)^2 - 7$: $11 = 9a - 7 \\Rightarrow a = 2$. So $a + k = 2 + (-7) = -5$.\n\n**The Full Solution:**\nStep 1: In $y = a(x - h)^2 + k$, the vertex is $(h, k)$. Here $(h, k) = (2, -7)$, so $k = -7$.\nStep 2: Use the point $(5, 11)$ to find $a$: $11 = a(5 - 2)^2 + (-7) = 9a - 7$.\nStep 3: Solve: $9a = 18 \\Rightarrow a = 2$.\nStep 4: Combine: $a + k = 2 + (-7) = -5$, which is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): stops at $a = 2$ and forgets to add $k$.\n* Choice C ($9$): adds the absolute value of $k$, computing $2 + 7$ instead of $2 + (-7)$.\n* Choice D ($-9$): sign-flips $a$, computing $-2 + (-7)$.\n\n**Test Day Takeaway:** In $y = a(x - h)^2 + k$, the vertex hands you $h$ and $k$ for free. Use the extra point only to pin down $a$, then combine exactly as asked.",
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
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $52$.**\n\n**The Fast Way (~25s):** All $11$ integers must sum to $11 \\cdot 52 = 572$. The $10$ listed values sum to $520$, so the eleventh is $572 - 520 = 52$.\n\n**The Full Solution:**\nStep 1: Mean $= \\dfrac{\\text{sum}}{\\text{count}}$, so the total of all $11$ integers is $11 \\cdot 52 = 572$.\nStep 2: Add the listed values: $54 + 49 + 51 + 53 + 57 + 50 + 52 + 48 + 56 + 50 = 520$.\nStep 3: The missing integer is $572 - 520 = 52$.\nStep 4: Check: $\\dfrac{520 + 52}{11} = \\dfrac{572}{11} = 52$. $\\checkmark$\n\n**Common Mistakes:** Averaging only the $10$ listed numbers (their mean happens to be $52$ as well, so it lands on the right value for the wrong reason); using $10 \\cdot 52 = 520$ as the target total instead of $11 \\cdot 52$.\n\n**Test Day Takeaway:** Adding a value equal to the current mean leaves the mean unchanged — but build it the reliable way: required total minus known total.",
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
  explanation: "**SAT Pattern: Simple Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Total marbles $= 4 + 6 + 5 = 15$, red $= 4$, so $P(\\text{red}) = \\dfrac{4}{15}$.\n\n**The Full Solution:**\nStep 1: $P = \\dfrac{\\text{favorable}}{\\text{total}}$.\nStep 2: Total marbles: $4 + 6 + 5 = 15$.\nStep 3: Favorable (red): $4$.\nStep 4: $P(\\text{red}) = \\dfrac{4}{15}$, which is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{1}{15}$): uses $1$ in the numerator, ignoring that there are $4$ red marbles.\n* Choice C ($\\dfrac{4}{6}$): compares red to blue instead of red to the whole bag.\n* Choice D ($\\dfrac{6}{15}$): counts the $6$ blue marbles in the numerator instead of the red.\n\n**Test Day Takeaway:** Probability is favorable over total — and the total is every outcome, not just one color.",
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
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Factor the left side: $(24p - 3)x = 72$. A single linear equation has no solution only when the $x$-coefficient is $0$ while the constant is not. Set $24p - 3 = 0 \\Rightarrow p = \\dfrac{3}{24} = \\dfrac{1}{8}$.\n\n**The Full Solution:**\nStep 1: Combine the $x$-terms: $-3x + 24px = (24p - 3)x$, so the equation is $(24p - 3)x = 72$.\nStep 2: If $24p - 3 \\neq 0$, you can divide and get exactly one solution. For no solution, the coefficient must vanish while the right side stays nonzero.\nStep 3: $24p - 3 = 0 \\Rightarrow 24p = 3 \\Rightarrow p = \\dfrac{1}{8}$.\nStep 4: At $p = \\dfrac{1}{8}$ the equation reads $0 \\cdot x = 72$, i.e. $0 = 72$ — impossible, so no solution. That is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): $p = 0$ leaves $-3x = 72$, which solves to $x = -24$ — a solution exists.\n* Choice C ($8$): inverts the fraction, computing $\\dfrac{24}{3}$ instead of $\\dfrac{3}{24}$.\n* Choice D ($-\\dfrac{1}{8}$): sign error from solving $24p = -3$.\n\n**Test Day Takeaway:** For $(\\text{coefficient})x = (\\text{constant})$ to have no solution, force the coefficient to $0$ while keeping the constant nonzero.",
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
  explanation: "**SAT Pattern: Linear Function Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** \"Drops by a steady $3$ degrees each minute\" is a constant rate of change, and the temperature is falling — that is a decreasing linear function.\n\n**The Full Solution:**\nStep 1: A linear function changes by the same amount each step. \"A steady $3$ degrees each minute\" removes the same fixed quantity every minute, so the differences are constant — linear.\nStep 2: The temperature goes down, so the slope is negative. A model is $T(m) = T_0 - 3m$: $T(0)=T_0$, $T(1)=T_0-3$, $T(2)=T_0-6$, successive differences $-3, -3$ — constant and negative.\n\n**Why the wrong answers are tempting:**\n* Choice A: an exponential decay falls by a constant percent each minute, so the absolute drops shrink — but here every drop is exactly $3$ degrees.\n* Choice C: right type, wrong direction — the mixture cools, so the slope is negative, not positive.\n* Choice D: wrong type and wrong direction at once.\n\n**Test Day Takeaway:** Constant amount per unit $\\Rightarrow$ linear. Constant percent per unit $\\Rightarrow$ exponential. Read the rate language before you pick the type.",
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
  explanation: "**SAT Pattern: Quadratic-Linear System**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Substitute the line into the parabola: $x+5 = x^2+12x+35 \\Rightarrow x^2+11x+30=0 \\Rightarrow (x+5)(x+6)=0$. Roots are $x=-5$ and $x=-6$; the greatest is $-5$.\n\n**The Full Solution:**\nStep 1: Set the two expressions for $y$ equal: $x+5 = x^2+12x+35$.\nStep 2: Move everything to one side: $0 = x^2+11x+30$.\nStep 3: Factor: $0 = (x+5)(x+6)$, so $x=-5$ or $x=-6$. The greatest value of $x$ is $-5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): picks the lesser root instead of the greatest.\n* Choice C ($5$): reports the constant from the line $y=x+5$.\n* Choice D ($35$): reports the constant term of the quadratic.\n\n**Test Day Takeaway:** For a line-parabola system, substitute to get a quadratic in $x$, solve, then read off exactly what the question asks — greatest, least, or matching $y$.",
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
  explanation: "**SAT Pattern: Quadratic Vertex Form Application**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Vertex form $A(t)=-3(t-6)^2+54$ has vertex $(6,54)$. Since $a=-3<0$, that vertex is a maximum: amplitude $54$ mm at $t=6$ seconds.\n\n**The Full Solution:**\nStep 1: In $A(t)=a(t-h)^2+k$ the vertex is $(h,k)$. Here $h=6$ (the time) and $k=54$ (the amplitude).\nStep 2: Because $a=-3<0$, the parabola opens down, so the vertex is the maximum.\nStep 3: Confirm: $A(6)=54$, $A(5)=-3+54=51$, $A(7)=-3+54=51$ — both neighbors are lower, so $54$ is the peak.\n\n**Why the wrong answers are tempting:**\n* Choice A: swaps the coordinates, reading $6$ mm at $54$ s.\n* Choice C: right values, but calls it a minimum — $a<0$ means a maximum.\n* Choice D: uses the leading coefficient's magnitude $3$ as the time.\n\n**Test Day Takeaway:** In $a(t-h)^2+k$ the vertex is $(h,k)$, and the sign of $a$ tells you max ($a<0$) versus min ($a>0$).",
  skills: ["function-interpretation", "quadratic-equations"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "easy",
  band: 2,
  question: "Two lines intersect at a single point, forming four angles. One of the angles measures $53^{\\circ}$. What is the measure, in degrees, of the angle directly opposite (vertical to) it?",
  correctAnswer: "53",
  explanation: "**SAT Pattern: Vertical Angles**\n\n**The correct answer is $53$.**\n\n**The Fast Way (~5s):** Vertical angles — the pair opposite each other where two lines cross — are equal, so the opposite angle is $53^\\circ$.\n\n**The Full Solution:**\nStep 1: Two intersecting lines form two pairs of vertical angles, and each pair is equal.\nStep 2: The given angle is $53^\\circ$, so the angle directly opposite it is also $53^\\circ$. The two adjacent angles are each $180^\\circ - 53^\\circ = 127^\\circ$, but the question asks for the opposite angle.\n\n**Common Mistakes:** Reporting $127$ by confusing vertical (equal) with supplementary (adjacent, sum to $180^\\circ$); reporting $37$ by treating the angles as complementary ($90^\\circ - 53^\\circ$).\n\n**Test Day Takeaway:** Vertical angles are equal; adjacent angles on a straight line are supplementary, summing to $180^\\circ$.",
  skills: ["angles", "geometry"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, line $p$ has the equation $4x - 5y = 35$. Line $q$ is perpendicular to line $p$ and passes through the point $(8, 1)$. What is the $y$-intercept of line $q$?",
  correctAnswer: "11",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~30s):** Line $p$ has slope $\\frac{4}{5}$, so $q$ has perpendicular slope $-\\frac{5}{4}$. Through $(8,1)$: $y-1=-\\frac{5}{4}(x-8)$. Set $x=0$: $y-1=-\\frac{5}{4}(-8)=10$, so $y=11$.\n\n**The Full Solution:**\nStep 1: Rewrite $p$ in slope-intercept form: $4x-5y=35 \\Rightarrow y=\\frac{4}{5}x-7$, so the slope of $p$ is $\\frac{4}{5}$.\nStep 2: Perpendicular slope is the negative reciprocal: $m_q=-\\frac{5}{4}$.\nStep 3: Use point-slope with $(8,1)$: $y-1=-\\frac{5}{4}(x-8)$.\nStep 4: For the $y$-intercept set $x=0$: $y-1=-\\frac{5}{4}(0-8)=-\\frac{5}{4}(-8)=10$, so $y=11$.\n\n**Common Mistakes:** Using slope $\\frac{4}{5}$ for $q$ (parallel, not perpendicular); writing the perpendicular slope as $\\frac{5}{4}$ without the negative; setting $y=0$ (the $x$-intercept) instead of $x=0$ for the $y$-intercept.\n\n**Test Day Takeaway:** Perpendicular slopes flip the fraction and change the sign. For a $y$-intercept, set $x=0$.",
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
  explanation: "**SAT Pattern: Inscribed Solid Volume**\n\n**Choice B is correct.**\n\n**The Fast Way (~50s):** Touching the center of each face means the sphere's diameter equals the cube's edge: edge $=2 \\cdot 25 = 50$. Empty space $=50^3 - \\frac{4}{3}\\pi(25)^3 = 125{,}000 - 65{,}449.8 \\approx 59{,}550$.\n\n**The Full Solution:**\nStep 1: The sphere is inscribed, so its diameter equals the edge: edge $=2r=50$ inches, and the cube's volume is $50^3 = 125{,}000$ cubic inches.\nStep 2: Sphere volume is $\\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi(25)^3 = \\frac{4}{3}\\pi(15{,}625) \\approx 65{,}449.8$ cubic inches.\nStep 3: Empty space $= 125{,}000 - 65{,}449.8 \\approx 59{,}550$ cubic inches.\n\n**Why the wrong answers are tempting:**\n* Choice A ($65{,}450$): reports the sphere's volume — the space the mold occupies, not the empty space.\n* Choice C ($125{,}000$): stops at the chest's volume without subtracting the mold.\n* Choice D ($75{,}913$): drops the $\\frac{4}{3}$ factor, using $\\pi r^3 \\approx 49{,}087$, giving $125{,}000 - 49{,}087$.\n\n**Test Day Takeaway:** An inscribed sphere has diameter equal to the cube's edge. Empty space $=$ cube volume $-$ sphere volume; never lose the $\\frac{4}{3}$ in $\\frac{4}{3}\\pi r^3$.",
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
  explanation: "**SAT Pattern: Exponential Growth Rate**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Collapse the base over a single $x$: $(2.25)^{x/3} = \\left(2.25^{1/3}\\right)^x$. The cube root of $2.25$ is about $1.31$, so $1+\\frac{p}{100}\\approx 1.31$ and $p \\approx 31$.\n\n**The Full Solution:**\nStep 1: Use $a^{x/3} = \\left(a^{1/3}\\right)^x$ to write $(2.25)^{x/3} = \\left(2.25^{1/3}\\right)^x$.\nStep 2: Compute the per-$x$ base: $2.25^{1/3} \\approx 1.3104$.\nStep 3: Match $\\left(1+\\frac{p}{100}\\right)^x$: $1+\\frac{p}{100} \\approx 1.3104$, so $\\frac{p}{100}\\approx 0.3104$ and $p\\approx 31$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($125$): treats $2.25$ as the per-$x$ multiplier ($1+1.25$), ignoring the exponent $\\frac{x}{3}$.\n* Choice B ($75$): divides the base by the period, $\\frac{2.25}{3}=0.75$.\n* Choice D ($42$): applies the period to the growth part, $\\frac{2.25-1}{3}\\approx 0.417$.\n\n**Test Day Takeaway:** To turn $a^{x/k}$ into a per-$x$ rate, take the $k$-th root of $a$ first, then subtract $1$ and scale to a percent.",
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
  explanation: "**SAT Pattern: Quadratic-Linear System with One Intersection**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Set the sides equal: $2x^2-19x+56 = 4x+a \\Rightarrow 2x^2-23x+(56-a)=0$. \"Exactly one intersection\" means a double root, which sits at the vertex: $x=-\\frac{-23}{2(2)}=\\frac{23}{4}$.\n\n**The Full Solution:**\nStep 1: Substitute the line into the parabola: $2x^2-19x+56 = 4x+a$.\nStep 2: Combine: $2x^2-23x+(56-a)=0$.\nStep 3: One intersection means this quadratic has a double root, located at $x=-\\frac{b}{2a}$ no matter the value of $a$: $x=-\\frac{-23}{2(2)}=\\frac{23}{4}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{23}{4}$): drops the sign of $-b$, giving the negative of the correct value.\n* Choice B ($\\frac{19}{4}$): forgets to move the $4x$ over, using the original $-19$ instead of $-23$.\n* Choice D ($8$): factors the constant $56$ and guesses an integer root.\n\n**Test Day Takeaway:** A line tangent to a parabola produces a double root at the vertex $x=-\\frac{b}{2a}$ of the combined quadratic — you do not even need to know $a$.",
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
  explanation: "**SAT Pattern: Vertex of a Parabola — Optimization**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The maximum of $L(t)=-2t^2+28t+60$ occurs at $t=-\\frac{b}{2a}=-\\frac{28}{2(-2)}=7$. Then $L(7)=-2(49)+28(7)+60=-98+196+60=158$.\n\n**The Full Solution:**\nStep 1: Since $a=-2<0$, the parabola opens downward and peaks at its vertex.\nStep 2: Time of the maximum: $t=-\\frac{b}{2a}=-\\frac{28}{-4}=7$ hours.\nStep 3: Substitute back: $L(7)=-2(7)^2+28(7)+60=-98+196+60=158$ centimeters.\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): reports the input time of the maximum, not the level.\n* Choice B ($60$): reports the initial level $L(0)=60$.\n* Choice D ($196$): computes $28 \\cdot 7$ and stops, dropping the $-98$ and $+60$ terms.\n\n**Test Day Takeaway:** The maximum value is $L$ evaluated at the vertex time $t=-\\frac{b}{2a}$. Find the time first, then substitute back for the level.",
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
  explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The drop is $36 - 27 = 9$ dollars. Percent decrease $=\\frac{9}{36}=0.25=25\\%$.\n\n**The Full Solution:**\nStep 1: Percent decrease compares the change to the original amount: percent decrease $=\\frac{\\text{old} - \\text{new}}{\\text{old}}\\times 100\\%$.\nStep 2: Substitute the costs: $\\frac{36 - 27}{36}\\times 100\\% = \\frac{9}{36}\\times 100\\% = 0.25\\times 100\\% = 25\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($9\\%$): reports the raw dollar drop of \\$9 as if it were the percent.\n* Choice C ($33.\\overline{3}\\%$): divides by the new cost $27$ instead of the original: $\\frac{9}{27}$.\n* Choice D ($75\\%$): gives the ratio of new to old, $\\frac{27}{36}$, instead of the decrease.\n\n**Test Day Takeaway:** Percent change is always relative to the original value: $\\frac{\\text{change}}{\\text{original}}\\times 100\\%$.",
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
  explanation: "**SAT Pattern: Grouped Data — Mean Bounds**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Within each interval the exact integers are unknown, so each set's mean can slide across a range. Those two ranges overlap, so both means can be tuned to the same value — the smallest possible difference is $0$.\n\n**The Full Solution:**\nStep 1: Place every value of set A at the bottom of its interval: mean $=\\frac{5(10)+4(20)+4(30)+3(40)+3(50)}{19}=\\frac{520}{19}\\approx 27.4$. Pushing each value up by as much as $9$ raises A's mean to about $36.4$, so A's mean spans roughly $[27.4, 36.4]$.\nStep 2: For set B at the bottom: $\\frac{3(10)+3(20)+4(30)+4(40)+5(50)}{19}=\\frac{620}{19}\\approx 32.6$, up to about $41.6$, so B's mean spans roughly $[32.6, 41.6]$.\nStep 3: These ranges overlap (about $32.6$ to $36.4$), and since each total can be adjusted one integer at a time, both means can be made equal. The smallest possible difference is $0$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): assumes the means must differ by at least $1$, ignoring that within-interval values are free.\n* Choice C ($5$): uses interval midpoints, getting means of about $32.4$ and $37.6$ — but the values need not be midpoints.\n* Choice D ($10$): reports the interval width as the minimum gap.\n\n**Test Day Takeaway:** When grouped data hides the exact values, a mean is a range, not a single number. If the ranges overlap, the smallest possible difference is $0$.",
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
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** A sample proportion of $62\\%$ with margin of error $\\pm 3\\%$ gives the interval $59\\%$ to $65\\%$, and the conclusion applies only to the population sampled — this service's customers — at the stated confidence level.\n\n**The Full Solution:**\nStep 1: The $95\\%$ confidence interval is $62\\% \\pm 3\\% = (59\\%, 65\\%)$.\nStep 2: A valid conclusion must apply to the sampled population (this service's customers), name the confidence level (\"$95\\%$ confident\"), and report the interval rather than a single value.\nStep 3: Only Choice B satisfies all three conditions.\n\n**Why the wrong answers are tempting:**\n* Choice A: drops the margin and confidence level, treating $62\\%$ as an exact figure.\n* Choice C: broadens to all online shoppers — the wrong population.\n* Choice D: extends beyond the sampled customers to a nationwide figure — again the wrong population.\n\n**Test Day Takeaway:** A confidence-interval conclusion must name the sampled population, state the confidence level, and report the interval — never a single exact value.",
  skills: ["margin-of-error", "statistics"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A rectangle is inscribed in a circle so that all four of its vertices lie on the circle. The length of the rectangle's diagonal is twice the length of its shorter side, and the area of the rectangle is $49\\sqrt{3}$ square centimeters. What is the diameter of the circle, in centimeters?",
  correctAnswer: "14",
  explanation: "**SAT Pattern: Special Right Triangle — 30-60-90**\n\n**The correct answer is $14$.**\n\n**The Fast Way (~40s):** A rectangle inscribed in a circle has a diagonal equal to the diameter. With diagonal $= 2 \\times$ shorter side, the shorter side, longer side, and diagonal form a $30$-$60$-$90$ triangle, so the longer side is $s\\sqrt{3}$. Area $= s \\cdot s\\sqrt{3} = s^2\\sqrt{3} = 49\\sqrt{3}$ gives $s = 7$, and the diameter is $2s = 14$.\n\n**The Full Solution:**\nStep 1: Because all four vertices lie on the circle, the rectangle's diagonal passes through the center and equals the diameter.\nStep 2: Let the shorter side be $s$. The diagonal is $2s$, a hypotenuse-to-leg ratio of $2:1$ — the signature of a $30$-$60$-$90$ triangle.\nStep 3: The sides of a $30$-$60$-$90$ triangle are in ratio $1 : \\sqrt{3} : 2$, so the longer side of the rectangle is $s\\sqrt{3}$.\nStep 4: Area $= s \\cdot s\\sqrt{3} = s^2\\sqrt{3}$. Set equal to the given area: $s^2\\sqrt{3} = 49\\sqrt{3} \\Rightarrow s^2 = 49 \\Rightarrow s = 7$.\nStep 5: Diameter $=$ diagonal $= 2s = 2(7) = 14$ centimeters. Check: longer side $7\\sqrt{3}$, so diagonal $= \\sqrt{7^2 + (7\\sqrt{3})^2} = \\sqrt{49 + 147} = \\sqrt{196} = 14$. $\\checkmark$\n\n**Common Mistakes:** Reporting $7$ (the shorter side, which equals the radius — not the diameter); treating the rectangle as a square with diagonal $s\\sqrt{2}$; reporting the longer side $7\\sqrt{3} \\approx 12.12$ as the diameter.\n\n**Test Day Takeaway:** A rectangle inscribed in a circle has its diagonal as a diameter; a hypotenuse-to-leg ratio of $2:1$ means a $30$-$60$-$90$ triangle with sides $1 : \\sqrt{3} : 2$.",
  skills: ["special-right-triangles", "geometry", "circles"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "easy",
  band: 2,
  question: "A river gauge recorded the following water depths, in centimeters, over six consecutive hours:\n\n$42, 55, 38, 61, 47, 50$\n\nWhat is the range of these depths, in centimeters?",
  correctAnswer: "23",
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**The correct answer is $23$.**\n\n**The Fast Way (~10s):** Range $=$ maximum $-$ minimum $= 61 - 38 = 23$.\n\n**The Full Solution:**\nStep 1: The range is the difference between the largest and smallest values.\nStep 2: The largest depth is $61$ and the smallest is $38$.\nStep 3: Range $= 61 - 38 = 23$ centimeters.\n\n**Common Mistakes:** Subtracting two non-extreme values such as $55 - 42$; reporting the maximum $61$ or the count of values $6$.\n\n**Test Day Takeaway:** Range is max minus min — find the two extremes and ignore everything between them.",
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
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The per-lesson rate is the slope: $\\dfrac{170 - 95}{9 - 4} = \\dfrac{75}{5} = 15$. Plug $(4, 95)$ into total $= 15(\\text{lessons}) + f$: $95 = 60 + f$, so $f = 35$, which is choice C.\n\n**The Full Solution:**\nStep 1: Let $f$ be the fixed fee and $r$ the per-lesson rate, so total $= r \\cdot (\\text{lessons}) + f$.\nStep 2: Write the two facts: $4r + f = 95$ and $9r + f = 170$.\nStep 3: Subtract the first from the second to cancel $f$: $5r = 75$, so $r = 15$.\nStep 4: Substitute back: $4(15) + f = 95 \\Rightarrow 60 + f = 95 \\Rightarrow f = 35$. Check: $9(15) + 35 = 135 + 35 = 170$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$15$): reports the per-lesson rate instead of the fixed fee.\n* Choice B ($\\$23.75$): divides $\\frac{95}{4} = 23.75$ as if the whole cost were per-lesson with no fixed fee.\n* Choice D ($\\$75$): uses the raw total difference $170 - 95 = 75$.\n\n**Test Day Takeaway:** \"Fixed fee + per-unit rate\" is linear: total $= \\text{rate} \\cdot \\text{count} + \\text{fee}$. Find the rate as the slope between two points, then back-solve for the fee.",
  skills: ["systems-of-equations", "linear-functions", "word-problems"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A rooftop solar installation consists of two adjacent square panels; the side length of the larger panel is $3$ times the side length of the smaller panel. Sunlight delivers power to each panel equal to the irradiance, $18$ watts per square meter, times the panel's area. If the total power delivered to both panels together is $4{,}500$ watts, what is the power delivered to the larger panel, in watts?",
  correctAnswer: "4050",
  explanation: "**SAT Pattern: Area Ratio to Side Ratio in Similar Figures**\n\n**The correct answer is $4050$.**\n\n**The Fast Way (~45s):** Let the smaller side be $s$. Total area $= s^2 + (3s)^2 = 10s^2$, so total power $= 18 \\cdot 10s^2 = 180s^2 = 4500 \\Rightarrow s^2 = 25$. Larger area $= 9s^2 = 225$, so larger power $= 18 \\cdot 225 = 4050$ watts.\n\n**The Full Solution:**\nStep 1: Let $s$ be the smaller panel's side. The larger panel's side is $3s$, so its area is $(3s)^2 = 9s^2$ — nine times the smaller area $s^2$.\nStep 2: Total area $= s^2 + 9s^2 = 10s^2$.\nStep 3: Total power $= 18 \\times 10s^2 = 180s^2$. Set equal to $4{,}500$: $180s^2 = 4{,}500 \\Rightarrow s^2 = 25$.\nStep 4: Larger panel area $= 9s^2 = 225$ square meters, so its power $= 18 \\times 225 = 4{,}050$ watts. Check: smaller power $= 18 \\times 25 = 450$, and $450 + 4{,}050 = 4{,}500$. $\\checkmark$\n\n**Common Mistakes:** Reporting $450$ (the smaller panel's power); reporting $1{,}350$ by scaling with the side ratio $3$ instead of the area ratio $9$; reporting $2{,}250$ by splitting the total evenly.\n\n**Test Day Takeaway:** When a length scales by $k$, area scales by $k^2$. A side ratio of $3$ means an area ratio of $9$, so the big square takes $9$ of every $10$ parts of the total.",
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
  explanation: "**SAT Pattern: Radical Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Square both sides: $2x + 15 = x^2 \\Rightarrow x^2 - 2x - 15 = 0 \\Rightarrow (x - 5)(x + 3) = 0$, so $x = 5$ or $x = -3$. A square root is never negative, so $x = -3$ is extraneous; the answer is $x = 5$, choice B.\n\n**The Full Solution:**\nStep 1: Square both sides of $\\sqrt{2x + 15} = x$ to get $2x + 15 = x^2$.\nStep 2: Rearrange: $x^2 - 2x - 15 = 0$, which factors as $(x - 5)(x + 3) = 0$.\nStep 3: The candidate solutions are $x = 5$ and $x = -3$.\nStep 4: Check each in the original equation. For $x = 5$: $\\sqrt{2(5) + 15} = \\sqrt{25} = 5$. $\\checkmark$ For $x = -3$: $\\sqrt{2(-3) + 15} = \\sqrt{9} = 3 \\neq -3$, so it is extraneous. The only solution is $x = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): keeps the extraneous root without checking that $\\sqrt{\\ }$ cannot equal a negative number.\n* Choice C ($2$): adds the two squared-equation roots, $5 + (-3) = 2$.\n* Choice D ($15$): grabs the constant $15$ from under the radical.\n\n**Test Day Takeaway:** Squaring can create extraneous roots. Always substitute back into the original radical equation and reject any value that makes the radical equal a negative number.",
  skills: ["radical-equations", "solving-equations"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Sage manages a drone-delivery hub. In one shift the numbers of short-range flights $x$, mid-range flights $y$, and long-range flights $z$ satisfy the system:\n\n$$x + y + z = 30$$\n$$2x + 3y + z = 54$$\n$$x + 2y + 4z = 88$$\n\nWhat is the value of $z$?",
  correctAnswer: "16",
  explanation: "**SAT Pattern: System of Three Equations**\n\n**The correct answer is $16$.**\n\n**The Fast Way (~50s):** Eliminate $x$ to isolate $z$. Equation 3 $-$ equation 1: $y + 3z = 58$. Equation 2 $-$ $2\\times$ equation 1: $y - z = -6$. Subtract these: $4z = 64$, so $z = 16$.\n\n**The Full Solution:**\nStep 1: Label the equations: (1) $x + y + z = 30$, (2) $2x + 3y + z = 54$, (3) $x + 2y + 4z = 88$.\nStep 2: (2) $-$ (1): $x + 2y = 24$. Call this (4).\nStep 3: From (1), $z = 30 - x - y$. Substitute into (3): $x + 2y + 4(30 - x - y) = 88 \\Rightarrow -3x - 2y = -32 \\Rightarrow 3x + 2y = 32$. Call this (5).\nStep 4: (5) $-$ (4): $2x = 8 \\Rightarrow x = 4$. Then (4) gives $2y = 20 \\Rightarrow y = 10$, so $z = 30 - 4 - 10 = 16$. Check (2): $2(4) + 3(10) + 16 = 54$. $\\checkmark$\n\n**Common Mistakes:** Stopping at $x = 4$ or $y = 10$ instead of solving for the requested $z$; arithmetic slips when distributing the $4$ across $(30 - x - y)$.\n\n**Test Day Takeaway:** For a $3 \\times 3$ system, subtract equation pairs to eliminate one variable, reduce to a $2 \\times 2$ system, then back-substitute — and track which variable the question actually asks for.",
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
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Complete the square: $(x^2 - 12x + 36) + (y^2 + 8y + 16) = -3 + 36 + 16 = 49$, giving $(x - 6)^2 + (y + 4)^2 = 49$. So $r = \\sqrt{49} = 7$, choice B.\n\n**The Full Solution:**\nStep 1: Group the $x$ and $y$ terms: $(x^2 - 12x) + (y^2 + 8y) = -3$.\nStep 2: Complete the square for $x$: half of $-12$ is $-6$, squared is $36$. For $y$: half of $8$ is $4$, squared is $16$.\nStep 3: Add $36$ and $16$ to both sides: $(x - 6)^2 + (y + 4)^2 = -3 + 36 + 16 = 49$.\nStep 4: The right side is $r^2 = 49$, so the radius is $\\sqrt{49} = 7$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($49$): reports $r^2 = 49$ without taking the square root.\n* Choice C ($\\sqrt{3}$): uses the constant $3$ directly as $r^2$.\n* Choice D ($\\sqrt{55}$): leaves $+3$ on the right ($3 + 36 + 16 = 55$) instead of moving it across as $-3$.\n\n**Test Day Takeaway:** General form to standard form: complete the square for $x$ and $y$, move the constant across with the correct sign, then take the square root of $r^2$ to get the radius.",
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
  explanation: "**SAT Pattern: Quadratic in Disguise**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** Let $u = x^2 - 4$: $u^2 - 3u - 10 = 0 \\Rightarrow (u - 5)(u + 2) = 0$, so $u = 5$ or $u = -2$. Then $x^2 = 9 \\Rightarrow x = \\pm 3$ and $x^2 = 2 \\Rightarrow x = \\pm\\sqrt{2}$ — four distinct real solutions, choice C.\n\n**The Full Solution:**\nStep 1: Substitute $u = x^2 - 4$ to get the quadratic $u^2 - 3u - 10 = 0$.\nStep 2: Factor: $(u - 5)(u + 2) = 0$, so $u = 5$ or $u = -2$.\nStep 3: Back-substitute. $x^2 - 4 = 5 \\Rightarrow x^2 = 9 \\Rightarrow x = 3$ or $x = -3$. And $x^2 - 4 = -2 \\Rightarrow x^2 = 2 \\Rightarrow x = \\sqrt{2}$ or $x = -\\sqrt{2}$.\nStep 4: All four values are real and distinct, so there are $4$ distinct real solutions.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): counts the two values of $u$ and stops there.\n* Choice B ($3$): finds $3, -3, \\sqrt{2}$ but forgets $-\\sqrt{2}$.\n* Choice D ($5$): reports the $u$-value $5$ as the count.\n\n**Test Day Takeaway:** For a quadratic in disguise, solve for the substitution variable first, then back-substitute. Each positive $x^2 = c$ yields two real values, $\\pm\\sqrt{c}$.",
  skills: ["quadratic-equations", "factoring"]
}
      ]
    }
  ]
};

export default practiceTest6;
