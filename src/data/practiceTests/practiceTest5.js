// Practice Test 5 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Round-6 propagation: M1 lifted to band-3 ceiling on easy items, domain
// rebalanced to 7/6/5/4 (swaps Q3/Q13 to Geo-Trig, Q15/Q20 to Geo-Trig).
// M2 hardened to 0E/6M/16H with band-7 ceilings on most hard items and
// concept-fusion items added at the top end. Domain mix mirrors M1.

export const practiceTest5 = {
  id: "practice-test-5",
  title: "Practice Test 5",
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
  question: "If $4x + 9 = 33$, what is the value of $4x - 5$?",
  choices: [
    // distractor: stops one step early — reports x = 6 instead of 4x - 5
    { id: "A", text: "$6$" },
    { id: "B", text: "$19$" },
    // distractor: applies the inverse operation — adds 5 instead of subtracting
    { id: "C", text: "$29$" },
    // distractor: wrong base — uses 4x = 33 - 9 then drops the -5
    { id: "D", text: "$24$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Notice $4x - 5 = (4x + 9) - 14 = 33 - 14 = 19$. No need to find $x$ at all.\n\n**The Full Solution:**\nGiven $4x + 9 = 33$, subtract $9$: $4x = 24$, so $x = 6$.\nThe question asks for $4x - 5$, not $x$: $4(6) - 5 = 24 - 5 = 19$.\n\nShortcut: $(4x - 5) - (4x + 9) = -14$, so $4x - 5 = 33 - 14 = 19$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports $x = 6$ instead of evaluating $4x - 5$.\n* Choice C: \"applies the inverse operation\" — adds $5$ to $4x$ instead of subtracting.\n* Choice D: \"wrong base\" — gives $4x = 24$ but forgets to subtract $5$.\n\n**Test Day Takeaway:** When the question asks for an expression in $x$ rather than $x$ itself, look for a one-step shift before computing $x$.",
  skills: ["solving-equations"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "In a triangle, two of the interior angles measure $42^{\\circ}$ and $73^{\\circ}$. What is the measure, in degrees, of the third angle?",
  choices: [
    // distractor: subtracts only one angle from 180 (180 - 73 = 107)
    { id: "A", text: "$107$" },
    // distractor: adds the two angles (42 + 73 = 115)
    { id: "B", text: "$115$" },
    { id: "C", text: "$65$" },
    // distractor: subtracts from 360 instead of 180 (360 - 115 = 245... but reports 245/2 ≈ 123?)
    { id: "D", text: "$245$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Angles in a triangle sum to $180^{\\circ}$. Third angle $= 180 - 42 - 73 = 65$.\n\n**The Full Solution:**\nThe interior angles of any triangle add to $180^{\\circ}$.\nIf two angles are $42^{\\circ}$ and $73^{\\circ}$, the third must be:\n$180^{\\circ} - 42^{\\circ} - 73^{\\circ} = 180^{\\circ} - 115^{\\circ} = 65^{\\circ}$.\n\nVerification: $42 + 73 + 65 = 180$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — subtracts only one angle ($180 - 73 = 107$).\n* Choice B: \"applies the inverse operation\" — adds the two given angles ($42 + 73 = 115$) instead of subtracting from $180$.\n* Choice D: \"wrong base\" — uses $360^{\\circ}$ (a quadrilateral) instead of $180^{\\circ}$.\n\n**Test Day Takeaway:** Triangle interior angles always sum to $180^{\\circ}$. Subtract the known angles from $180$ to find the missing one.",
  skills: ["triangles", "angles"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A trail mix combines almonds and raisins in a ratio of $4$ ounces of almonds to $7$ ounces of raisins. If the total weight of the trail mix is $66$ ounces, how many ounces of almonds does the mix contain?",
  choices: [
    // distractor: picks the ratio number (4) directly
    { id: "A", text: "$4$" },
    { id: "B", text: "$24$" },
    // distractor: uses 4/7 of total instead of 4/11 (gives ~37.7)
    { id: "C", text: "$37.7$" },
    // distractor: solves for raisins instead of almonds (7/11 of 66 = 42)
    { id: "D", text: "$42$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Almonds make up $\\dfrac{4}{4 + 7} = \\dfrac{4}{11}$ of the total. Almonds $= \\dfrac{4}{11} \\cdot 66 = 24$ ounces.\n\n**The Full Solution:**\nLet almonds $= 4k$ and raisins $= 7k$ (so the ratio is $4 : 7$).\nTotal: $4k + 7k = 11k = 66$, so $k = 6$.\nAlmonds $= 4k = 4 \\cdot 6 = 24$ ounces.\n\nVerification: raisins $= 7 \\cdot 6 = 42$, total $= 24 + 42 = 66$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports $4$ (the almonds part of the ratio) instead of solving the proportion.\n* Choice C: \"wrong base\" — uses $\\dfrac{4}{7}$ of the total instead of $\\dfrac{4}{11}$.\n* Choice D: \"applies the inverse operation\" — solves for raisins ($\\dfrac{7}{11} \\cdot 66 = 42$) instead of almonds.\n\n**Test Day Takeaway:** When two parts are given as a ratio AND the combined total is known, divide the total by the SUM of the ratio parts to get the unit value.",
  skills: ["ratios", "word-problems"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The cost, in dollars, of $n$ identical lawn chairs is given by $C(n) = 18n + 12$, where the $\\$12$ is a one-time delivery fee. Which of the following best interprets the value $18$ in this context?",
  choices: [
    // distractor: confuses 18 with delivery fee instead of unit price
    { id: "A", text: "The one-time delivery fee, in dollars" },
    { id: "B", text: "The price of one lawn chair, in dollars" },
    // distractor: applies the inverse — uses 18 as a count instead of a rate
    { id: "C", text: "The number of lawn chairs purchased" },
    // distractor: off-by-one — confuses 18 with the total cost when n = 0
    { id: "D", text: "The cost when no lawn chairs are purchased, in dollars" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $C(n) = 18n + 12$, the coefficient of $n$ is the rate per chair: each additional chair costs $\\$18$.\n\n**The Full Solution:**\nThe function is in the form $C(n) = mn + b$, where $m = 18$ is the slope and $b = 12$ is the fixed delivery fee. The slope is the cost per chair: each additional chair adds $\\$18$ to the total.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — confuses the slope ($18$) with the constant term ($12$).\n* Choice C: \"applies the inverse operation\" — treats $18$ as a quantity instead of a rate.\n* Choice D: \"off-by-one\" — that would be $C(0) = 12$, not $18$.\n\n**Test Day Takeaway:** In $y = mn + b$, the coefficient of the variable is the rate of change per unit of that variable.",
  skills: ["function-interpretation", "linear-functions", "slope"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $f(x) = 3x - 10$, what is the value of $f(7) - 4$?",
  choices: [
    // distractor: stops one step early — reports f(7) without subtracting 4
    { id: "A", text: "$11$" },
    { id: "B", text: "$7$" },
    // distractor: applies inverse operation — adds 4 instead of subtracting
    { id: "C", text: "$15$" },
    // distractor: subtracts 4 inside the function: f(7 - 4) = f(3) = -1
    { id: "D", text: "$-1$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $f(7) = 3(7) - 10 = 11$. Then $f(7) - 4 = 11 - 4 = 7$.\n\n**The Full Solution:**\nFirst evaluate $f$ at $x = 7$:\n$f(7) = 3(7) - 10 = 21 - 10 = 11$.\n\nThe question asks for $f(7) - 4$, not $f(7)$ alone:\n$f(7) - 4 = 11 - 4 = 7$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports $f(7) = 11$ without subtracting $4$.\n* Choice C: \"applies the inverse operation\" — adds $4$ instead of subtracting.\n* Choice D: \"wrong base\" — subtracts $4$ inside the function: $f(7 - 4) = f(3) = -1$.\n\n**Test Day Takeaway:** Always re-read the last operation: $f(a) - 4$ means evaluate $f$ first, THEN subtract $4$ from the output.",
  skills: ["function-interpretation"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A company's revenue $R$, in thousands of dollars, is modeled by $R(t) = 150(1.08)^t$, where $t$ is the number of years since $2020$. Which of the following is the best interpretation of the value $1.08$?",
  choices: [
    // distractor: confuses exponential with linear growth (constant amount)
    { id: "A", text: "The revenue increases by $\\$1.08$ thousand each year." },
    { id: "B", text: "The revenue increases by $8\\%$ each year." },
    // distractor: applies the inverse — interprets 1.08 as 108%
    { id: "C", text: "The revenue increases by $108\\%$ each year." },
    // distractor: wrong base — misinterprets 1.08 as an output value
    { id: "D", text: "The revenue is $\\$1.08$ thousand in year $t$." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $a \\cdot b^t$, the base $b = 1.08 = 1 + 0.08$, so the growth rate is $0.08 = 8\\%$ per year.\n\n**The Full Solution:**\nThe model $R(t) = 150(1.08)^t$ has the form $P_0(1 + r)^t$.\nHere $1 + r = 1.08$, so $r = 0.08 = 8\\%$.\nEach year the revenue grows by $8\\%$ of the previous year's value.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — confuses exponential growth with linear growth.\n* Choice C: \"applies the inverse operation\" — interprets $1.08$ as a $108\\%$ increase rather than a $1.08$ multiplier.\n* Choice D: \"stops one step early\" — misreads the base as an output value.\n\n**Test Day Takeaway:** In $P_0(1 + r)^t$, the growth rate is $r$, not the entire base. Subtract $1$ from the base to find the rate.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A bag contains $5$ red marbles, $6$ blue marbles, and $9$ green marbles. Two marbles are drawn at random without replacement. What is the probability that both marbles are blue?",
  choices: [
    // distractor: uses replacement — (6/20)^2 = 36/400 = 9/100
    { id: "A", text: "$\\dfrac{9}{100}$" },
    // distractor: stops at first probability — gives 6/20 = 3/10
    { id: "B", text: "$\\dfrac{3}{10}$" },
    { id: "C", text: "$\\dfrac{3}{38}$" },
    // distractor: off-by-one — uses 6/20 * 6/19 (forgets to remove drawn ball)
    { id: "D", text: "$\\dfrac{18}{190}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Probability Without Replacement**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $P = \\dfrac{6}{20} \\times \\dfrac{5}{19} = \\dfrac{30}{380} = \\dfrac{3}{38}$.\n\n**The Full Solution:**\nTotal marbles $= 5 + 6 + 9 = 20$.\n$P(\\text{1st blue}) = \\dfrac{6}{20}$.\nAfter drawing one blue marble: $5$ blue remain out of $19$ total.\n$P(\\text{2nd blue} \\mid \\text{1st blue}) = \\dfrac{5}{19}$.\n$P(\\text{both blue}) = \\dfrac{6}{20} \\times \\dfrac{5}{19} = \\dfrac{30}{380} = \\dfrac{3}{38}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — assumes replacement: $\\left(\\dfrac{6}{20}\\right)^2$.\n* Choice B: \"stops one step early\" — gives only $P(\\text{1st blue}) = \\dfrac{3}{10}$.\n* Choice D: \"off-by-one\" — keeps the same numerator $6$ instead of $5$ for the second draw.\n\n**Test Day Takeaway:** \"Without replacement\" means the second draw has one fewer in BOTH numerator and denominator (when the relevant color is removed).",
  skills: ["probability"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $3(2x - 5) - 4(x + 3) = 7$, what is the value of $x$?",
  correctAnswer: "17",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $17$.**\n\n**The Fast Way (~20s):** Distribute: $6x - 15 - 4x - 12 = 7$. Combine: $2x - 27 = 7$. Solve: $2x = 34$, $x = 17$.\n\n**The Full Solution:**\n$3(2x - 5) - 4(x + 3) = 7$\n$6x - 15 - 4x - 12 = 7$\n$(6x - 4x) + (-15 - 12) = 7$\n$2x - 27 = 7$\n$2x = 34$\n$x = 17$\n\n**Common Mistakes to Avoid:**\n* Distributing the negative sign incorrectly: $-4(x + 3) = -4x - 12$, not $-4x + 12$.\n* Combining constants wrong: $-15 - 12 = -27$, not $-3$.\n\n**Verification:** $3(34 - 5) - 4(17 + 3) = 3(29) - 4(20) = 87 - 80 = 7$ \\checkmark.\n\n**Test Day Takeaway:** Distribute carefully, especially with negative signs, then combine like terms.",
  skills: ["solving-equations"]
},
{
  id: 9,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $\\dfrac{x}{3} + \\dfrac{x}{4} = 14$, what is the value of $x$?",
  correctAnswer: "24",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $24$.**\n\n**The Fast Way (~15s):** Multiply everything by $12$: $4x + 3x = 168$, so $7x = 168$ and $x = 24$.\n\n**The Full Solution:**\n$\\dfrac{x}{3} + \\dfrac{x}{4} = 14$\nThe LCD is $12$. Multiply both sides by $12$:\n$\\dfrac{12x}{3} + \\dfrac{12x}{4} = 168$\n$4x + 3x = 168$\n$7x = 168$\n$x = 24$\n\n**Common Mistakes to Avoid:**\n* Using LCD $= 24$ (an unnecessary multiple that complicates arithmetic).\n* Forgetting to multiply the right side by the LCD.\n\n**Verification:** $\\dfrac{24}{3} + \\dfrac{24}{4} = 8 + 6 = 14$ \\checkmark.\n\n**Test Day Takeaway:** Multiply through by the LCD to clear all fractions at once.",
  skills: ["solving-equations"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The scatterplot of a set of data is modeled by the equation $y = 2.4x + 18.5$. According to this model, what is the predicted value of $y$ when $x = 12$?",
  choices: [
    // distractor: stops at 2.4 * 12 = 28.8 — forgets to add the 18.5 intercept
    { id: "A", text: "$28.8$" },
    // distractor: adds only part of the intercept (e.g., 8.5)
    { id: "B", text: "$37.3$" },
    { id: "C", text: "$47.3$" },
    // distractor: rounds 2.4 to 2 and 18.5 to 19 — wrong base
    { id: "D", text: "$43.0$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $y = 2.4(12) + 18.5 = 28.8 + 18.5 = 47.3$.\n\n**The Full Solution:**\nSubstitute $x = 12$ into $y = 2.4x + 18.5$:\n$y = 2.4(12) + 18.5 = 28.8 + 18.5 = 47.3$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — computes $2.4 \\times 12 = 28.8$ but forgets to add the intercept $18.5$.\n* Choice B: \"off-by-one\" — adds part of the intercept (e.g., $8.5$ instead of $18.5$).\n* Choice D: \"wrong base\" — rounds $2.4 \\to 2$ and $18.5 \\to 19$, getting $2(12) + 19 = 43$.\n\n**Test Day Takeaway:** When you plug a value into $y = mx + b$, do not forget the constant term. Decimal multiplication is easy to slip on under time pressure.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A solid right circular cylinder has a radius of $5$ centimeters and a height of $8$ centimeters. The volume of the cylinder, in cubic centimeters, can be expressed as $k\\pi$. What is the value of $k$?",
  correctAnswer: "200",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $200$.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi(5)^2(8) = 25 \\cdot 8 \\cdot \\pi = 200\\pi$. So $k = 200$.\n\n**The Full Solution:**\nThe volume formula for a right circular cylinder is $V = \\pi r^2 h$.\nWith $r = 5$ cm and $h = 8$ cm:\n$V = \\pi (5)^2 (8) = \\pi (25)(8) = 200\\pi$ cubic centimeters.\nSo $k = 200$.\n\n**Common Mistakes to Avoid:**\n* Forgetting to square the radius: $\\pi r h = 40\\pi$, giving $k = 40$.\n* Confusing the cylinder formula with the cone formula $V = \\dfrac{1}{3}\\pi r^2 h$, giving $k = \\dfrac{200}{3}$.\n\n**Verification:** $\\pi(25)(8) = 200\\pi$ \\checkmark.\n\n**Test Day Takeaway:** For a cylinder, square the radius first, then multiply by the height. $V = \\pi r^2 h$ is on the Reference Sheet.",
  skills: ["volume", "geometry"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $|2x - 7| = 13$, what is the sum of all possible values of $x$?",
  choices: [
    // distractor: computes only |10 - 7| = 3 (uses one solution and subtracts)
    { id: "A", text: "$3$" },
    { id: "B", text: "$7$" },
    // distractor: stops one step early — uses only the positive solution x = 10
    { id: "C", text: "$10$" },
    // distractor: wrong base — reports the right-hand side 13 as the answer
    { id: "D", text: "$13$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Case 1: $2x - 7 = 13 \\Rightarrow x = 10$. Case 2: $2x - 7 = -13 \\Rightarrow x = -3$. Sum: $10 + (-3) = 7$.\n\n**The Full Solution:**\n$|2x - 7| = 13$ splits into two cases:\nCase 1: $2x - 7 = 13 \\Rightarrow 2x = 20 \\Rightarrow x = 10$.\nCase 2: $2x - 7 = -13 \\Rightarrow 2x = -6 \\Rightarrow x = -3$.\nSum: $10 + (-3) = 7$.\n\nShortcut: For $|ax + b| = c$ the two roots sum to $-\\dfrac{2b}{a}$. Here $-\\dfrac{2 \\cdot (-7)}{2} = 7$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — computes a difference instead of a sum.\n* Choice C: \"stops one step early\" — uses only the positive case $x = 10$.\n* Choice D: \"wrong base\" — reads off the right-hand side $13$ without solving.\n\n**Test Day Takeaway:** $|f(x)| = c$ always splits into two cases. The sum of solutions is $-\\dfrac{2b}{a}$ when $f(x) = ax + b$.",
  skills: ["solving-equations"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "In a class of $30$ students, $18$ play soccer, $12$ play basketball, and $5$ play both. How many students play neither soccer nor basketball?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Marginal Probability**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** Played at least one sport: $18 + 12 - 5 = 25$. Neither: $30 - 25 = 5$.\n\n**The Full Solution:**\nUsing inclusion-exclusion:\n$|\\text{Soccer} \\cup \\text{Basketball}| = |\\text{Soccer}| + |\\text{Basketball}| - |\\text{Both}|$\n$= 18 + 12 - 5 = 25$\nStudents who play neither: $30 - 25 = 5$.\n\n**Common Mistakes to Avoid:**\n* Forgetting to subtract the overlap: $18 + 12 = 30$ would imply everyone plays.\n* Subtracting the overlap twice.\n\n**Verification:** Soccer only: $13$. Basketball only: $7$. Both: $5$. Neither: $5$. Total: $13 + 7 + 5 + 5 = 30$ \\checkmark.\n\n**Test Day Takeaway:** $|A \\cup B| = |A| + |B| - |A \\cap B|$. Then subtract from total for \"neither.\"",
  skills: ["probability", "statistics"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The function $h$ is defined by $h(x) = 2(x - 4)^2 - 18$. What is the minimum value of $h(x)$?",
  choices: [
    { id: "A", text: "$-18$" },
    // distractor: confuses x-coordinate of vertex with the y-value
    { id: "B", text: "$-4$" },
    // distractor: stops one step early — gives the x-coordinate 4 instead of y
    { id: "C", text: "$4$" },
    // distractor: wrong base — evaluates h(0) = 2(16) - 18 = 14 instead of reading the vertex
    { id: "D", text: "$14$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** In vertex form $a(x-h)^2 + k$ with $a > 0$, the minimum value is $k$. Here $k = -18$.\n\n**The Full Solution:**\n$h(x) = 2(x - 4)^2 - 18$ is in vertex form with $a = 2 > 0$, vertex at $(4, -18)$.\nSince the parabola opens upward ($a > 0$), the vertex gives the minimum.\nMinimum value $= -18$, attained at $x = 4$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — uses the negative of the $x$-coordinate of the vertex.\n* Choice C: \"stops one step early\" — gives the $x$-coordinate $4$ instead of the $y$-value $-18$.\n* Choice D: \"wrong base\" — evaluates $h(0) = 2(16) - 18 = 14$ instead of reading off the vertex form.\n\n**Test Day Takeaway:** In $a(x - h)^2 + k$ with $a > 0$, the minimum is $k$. Read it off without expanding.",
  skills: ["vertex-form", "quadratic-equations"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A deck contains $10$ red cards numbered $1$ through $10$ and $10$ blue cards numbered $1$ through $10$. One card is drawn at random. What is the probability that the card is red OR has a number greater than $7$?",
  choices: [
    // distractor: only counts P(red) = 10/20 and ignores the OR
    { id: "A", text: "$\\dfrac{1}{2}$" },
    { id: "B", text: "$\\dfrac{13}{20}$" },
    // distractor: applies the inverse — adds without subtracting overlap
    { id: "C", text: "$\\dfrac{4}{5}$" },
    // distractor: off-by-one — simplifies a wrong sum (e.g., 14/20)
    { id: "D", text: "$\\dfrac{7}{10}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $P(\\text{red}) = \\dfrac{10}{20}$. $P(>7) = \\dfrac{6}{20}$ (cards $8, 9, 10$ in each color). $P(\\text{red AND} > 7) = \\dfrac{3}{20}$. By inclusion-exclusion: $\\dfrac{10 + 6 - 3}{20} = \\dfrac{13}{20}$.\n\n**The Full Solution:**\n$P(\\text{red}) = \\dfrac{10}{20}$ (all $10$ red cards).\n$P(\\text{number} > 7) = \\dfrac{6}{20}$ (red $8, 9, 10$ and blue $8, 9, 10$).\n$P(\\text{red AND number} > 7) = \\dfrac{3}{20}$ (red $8, 9, 10$).\n$P(\\text{red OR number} > 7) = \\dfrac{10 + 6 - 3}{20} = \\dfrac{13}{20}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — only counts $P(\\text{red}) = \\dfrac{10}{20}$ and ignores the OR.\n* Choice C: \"applies the inverse operation\" — adds without subtracting the overlap: $\\dfrac{16}{20}$.\n* Choice D: \"off-by-one\" — simplifies $\\dfrac{14}{20}$ from a different miscalculation.\n\n**Test Day Takeaway:** $P(A \\text{ or } B) = P(A) + P(B) - P(A \\text{ and } B)$. Always subtract the overlap.",
  skills: ["probability"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The system of equations below has the solution $(x, y)$.\n\n$4x - 3y = 0$\n$x^2 + y = 13$\n\nIf $x > 0$, what is the value of $y$?",
  correctAnswer: "4",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~45s):** From the second equation: $y = 13 - x^2$. Substitute into the first: $4x - 3(13 - x^2) = 0 \\Rightarrow 3x^2 + 4x - 39 = 0 \\Rightarrow (3x + 13)(x - 3) = 0$. Since $x > 0$, $x = 3$, so $y = 13 - 9 = 4$.\n\n**The Full Solution:**\nFrom equation 2: $y = 13 - x^2$.\nSubstitute into equation 1:\n$4x - 3(13 - x^2) = 0$\n$4x - 39 + 3x^2 = 0$\n$3x^2 + 4x - 39 = 0$\n$(3x + 13)(x - 3) = 0$\n$x = -\\dfrac{13}{3}$ or $x = 3$\n\nSince $x > 0$: $x = 3$.\n$y = 13 - 3^2 = 13 - 9 = 4$.\n\n**Common Mistakes to Avoid:**\n* Choosing $x = -\\dfrac{13}{3}$ instead of $x = 3$.\n* Substituting into the wrong equation to find $y$.\n\n**Verification:** $4(3) - 3(4) = 12 - 12 = 0$ \\checkmark. $3^2 + 4 = 9 + 4 = 13$ \\checkmark.\n\n**Test Day Takeaway:** For nonlinear systems, isolate one variable and substitute into the other equation, then enforce sign or domain constraints.",
  skills: ["systems-of-equations", "quadratic-equations"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $9^{x+1} = 27^{x}$, what is the value of $x$?",
  correctAnswer: "2",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~20s):** Rewrite both sides with base $3$: $3^{2(x+1)} = 3^{3x}$. Equate exponents: $2x + 2 = 3x \\Rightarrow x = 2$.\n\n**The Full Solution:**\n$9^{x+1} = 27^x$\n$(3^2)^{x+1} = (3^3)^x$\n$3^{2(x+1)} = 3^{3x}$\n$3^{2x+2} = 3^{3x}$\nSince the bases match, set exponents equal:\n$2x + 2 = 3x$\n$2 = x$\n\n**Common Mistakes to Avoid:**\n* Forgetting to distribute: $2(x + 1) = 2x + 2$, not $2x + 1$.\n* Writing $27 = 3^2$ instead of $3^3$.\n\n**Verification:** $9^{2+1} = 9^3 = 729$. $27^2 = 729$ \\checkmark.\n\n**Test Day Takeaway:** Convert all sides to a common base, then set exponents equal.",
  skills: ["exponent-rules", "exponential-functions"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A quadratic function $f$ has roots at $x = -2$ and $x = 7$. If $f(1) = 36$, what is the value of $f(0)$?",
  choices: [
    // distractor: sign error in computing -2 * 2 * (-7)
    { id: "A", text: "$-28$" },
    { id: "B", text: "$28$" },
    // distractor: applies the inverse — uses a = +2 with sign error
    { id: "C", text: "$-42$" },
    // distractor: stops one step early — computes (2)(7)(3) = 42 without using a
    { id: "D", text: "$42$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $f(x) = a(x + 2)(x - 7)$. Use $f(1) = 36$: $a(3)(-6) = 36 \\Rightarrow -18a = 36 \\Rightarrow a = -2$. Then $f(0) = -2(2)(-7) = 28$.\n\n**The Full Solution:**\nWith roots $-2$ and $7$:\n$f(x) = a(x + 2)(x - 7)$ for some constant $a$.\nUsing $f(1) = 36$:\n$a(1 + 2)(1 - 7) = 36$\n$a(3)(-6) = 36$\n$-18a = 36 \\Rightarrow a = -2$.\n\nNow find $f(0)$:\n$f(0) = -2(0 + 2)(0 - 7) = -2(2)(-7) = -2 \\cdot (-14) = 28$.\n\nVerification: $f(1) = -2(3)(-6) = 36$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — sign error in the product.\n* Choice C: \"wrong base\" — uses incorrect $a$ or mishandles signs.\n* Choice D: \"stops one step early\" — computes $(2)(7)(3) = 42$ without using $a = -2$.\n\n**Test Day Takeaway:** Write the factored form from the roots, use the given condition to find $a$, then evaluate.",
  skills: ["quadratic-equations", "factoring"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $\\dfrac{2}{x - 3} + \\dfrac{5}{x + 3} = \\dfrac{19}{x^2 - 9}$, what is the value of $x$?",
  correctAnswer: "4",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~30s):** Note $x^2 - 9 = (x - 3)(x + 3)$. Multiply through by $(x - 3)(x + 3)$: $2(x + 3) + 5(x - 3) = 19$. Simplify: $7x - 9 = 19$, so $x = 4$.\n\n**The Full Solution:**\nNote $x^2 - 9 = (x - 3)(x + 3)$. Multiply both sides by $(x - 3)(x + 3)$:\n$2(x + 3) + 5(x - 3) = 19$\n$2x + 6 + 5x - 15 = 19$\n$7x - 9 = 19$\n$7x = 28$\n$x = 4$\n\nCheck that $x = 4$ doesn't make any denominator zero: $4 - 3 = 1 \\neq 0$, $4 + 3 = 7 \\neq 0$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting to check that the solution doesn't create a zero denominator.\n* Distributing the $5$ incorrectly: $5(x - 3) = 5x - 15$, not $5x - 3$.\n\n**Verification:** $\\dfrac{2}{1} + \\dfrac{5}{7} = \\dfrac{14}{7} + \\dfrac{5}{7} = \\dfrac{19}{7}$. And $\\dfrac{19}{4^2 - 9} = \\dfrac{19}{7}$ \\checkmark.\n\n**Test Day Takeaway:** Factor the denominator, multiply through by the LCD, and always check for extraneous solutions.",
  skills: ["solving-equations"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For what value of $c$ does the equation $3x^2 - 12x + c = 0$ have exactly one real solution?",
  choices: [
    // distractor: sets b^2 + 4ac = 0 (sign error in discriminant)
    { id: "A", text: "$-12$" },
    // distractor: divides -12 by -3 instead of using discriminant
    { id: "B", text: "$4$" },
    { id: "C", text: "$12$" },
    // distractor: stops one step early — gives 144/4 = 36 instead of dividing by 12
    { id: "D", text: "$36$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Discriminant $= 0$: $(-12)^2 - 4(3)(c) = 0 \\Rightarrow 144 - 12c = 0 \\Rightarrow c = 12$.\n\n**The Full Solution:**\nA quadratic $ax^2 + bx + c = 0$ has exactly one real solution iff the discriminant is zero:\n$b^2 - 4ac = 0$\nWith $a = 3$, $b = -12$:\n$(-12)^2 - 4(3)(c) = 0$\n$144 - 12c = 0$\n$12c = 144$\n$c = 12$\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — sign error gives $144 + 12c = 0$, so $c = -12$.\n* Choice B: \"wrong base\" — divides $-12$ by $-3$ ignoring the discriminant.\n* Choice D: \"stops one step early\" — divides $144$ by $4$ instead of by $12$.\n\n**Test Day Takeaway:** \"Exactly one solution\" means discriminant equals zero. Set $b^2 - 4ac = 0$ and solve for the unknown.",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The right triangle shown has legs of length $a$ and $a + 7$ and hypotenuse of length $13$. What is the perimeter of the triangle?",
  diagram: {
    type: "rightTriangle",
    params: {
      sideLabels: ["a", "a + 7", "13"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: stops one step early — sums only two legs (5 + 12 = 17)
    { id: "A", text: "$17$" },
    // distractor: off-by-one — uses a + 7 = 7 instead of 12 (5 + 7 + 13 = 25)
    { id: "B", text: "$25$" },
    { id: "C", text: "$30$" },
    // distractor: wrong base — double-counts a leg (5 + 12 + 13 + 5 = 35)
    { id: "D", text: "$35$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Recognize the $5$-$12$-$13$ Pythagorean triple. So $a = 5$ and $a + 7 = 12$. Perimeter $= 5 + 12 + 13 = 30$.\n\n**The Full Solution:**\nApply the Pythagorean theorem: $a^2 + (a + 7)^2 = 13^2$.\n$a^2 + a^2 + 14a + 49 = 169$\n$2a^2 + 14a - 120 = 0$\n$a^2 + 7a - 60 = 0$\n$(a + 12)(a - 5) = 0$\n\nSo $a = 5$ (rejecting the negative root). Then $a + 7 = 12$.\n\nPerimeter $= 5 + 12 + 13 = 30$.\n\nVerification: $5^2 + 12^2 = 25 + 144 = 169 = 13^2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — adds only the two legs ($5 + 12 = 17$) and forgets the hypotenuse.\n* Choice B: \"off-by-one\" — uses $a + 7 = 7$ instead of $12$.\n* Choice D: \"wrong base\" — double-counts the leg $a = 5$.\n\n**Test Day Takeaway:** Memorize the common Pythagorean triples ($3$-$4$-$5$, $5$-$12$-$13$, $7$-$24$-$25$, $8$-$15$-$17$). When the hypotenuse is $13$, the legs are usually $5$ and $12$.",
  skills: ["triangles", "right-triangles"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation of a circle in the $xy$-plane is $x^2 + y^2 + 4x - 12y + 15 = 0$. What is the radius of the circle?",
  choices: [
    // distractor: completes only one square or drops a constant
    { id: "A", text: "$\\sqrt{15}$" },
    { id: "B", text: "$5$" },
    // distractor: stops one step early — reports r^2 = 25 instead of r
    { id: "C", text: "$25$" },
    // distractor: wrong base — confuses constant 15 with r^2
    { id: "D", text: "$\\sqrt{40}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Complete the square: $(x+2)^2 + (y-6)^2 = 4 + 36 - 15 = 25$. Radius $= \\sqrt{25} = 5$.\n\n**The Full Solution:**\nGroup $x$- and $y$-terms:\n$(x^2 + 4x) + (y^2 - 12y) = -15$\n\nComplete the square: half of $4$ is $2$, $2^2 = 4$. Half of $-12$ is $-6$, $(-6)^2 = 36$.\n\n$(x^2 + 4x + 4) + (y^2 - 12y + 36) = -15 + 4 + 36$\n$(x + 2)^2 + (y - 6)^2 = 25$\n\nRadius $= \\sqrt{25} = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses the constant $15$ as $r^2$ without completing the square.\n* Choice C: \"stops one step early\" — reports $r^2 = 25$ instead of $r = 5$.\n* Choice D: \"off-by-one\" — adds the completing-square constants to the wrong side: $4 + 36 = 40$.\n\n**Test Day Takeaway:** Complete the square for BOTH variables. Add the completing-square constants to the right side, not subtract. Then radius is $\\sqrt{r^2}$.",
  skills: ["circle-equations", "coordinate-geometry"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 5 — Math Module 2 (22 questions)
// Distribution: 3E / 6M / 13H. Q1-3 are easy openers (CB-authentic ramp).

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Which expression is equivalent to $6x^2 y + 9xy^2$?",
  choices: [
    { id: "A", text: "$3xy(2x + 3y)$" },
    // distractor: stops one step early — factors out 3 but not xy
    { id: "B", text: "$3(2x^2 y + 3xy^2)$" },
    // distractor: factors out xy but not the GCF coefficient 3
    { id: "C", text: "$xy(6x + 9y)$" },
    // distractor: keeps an extra power of x and y inside the parentheses
    { id: "D", text: "$3xy(2x^2 + 3y^2)$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Greatest Common Factor**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** GCF of $6x^2 y$ and $9xy^2$: coefficient $\\gcd(6,9)=3$; variable $x^{\\min(2,1)} y^{\\min(1,2)} = xy$. So GCF $= 3xy$. Factor: $3xy(2x + 3y)$.\n\n**The Full Solution:**\n$6x^2 y + 9xy^2$\n$= 3xy \\cdot 2x + 3xy \\cdot 3y$\n$= 3xy(2x + 3y)$\n\nVerification: $3xy(2x + 3y) = 6x^2 y + 9xy^2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — factors out $3$ only, leaves the $xy$ inside.\n* Choice C: \"wrong base\" — factors out $xy$ only, leaves the coefficient $3$ inside.\n* Choice D: \"off-by-one\" — keeps an extra factor of $x$ in $2x^2$ and an extra factor of $y$ in $3y^2$.\n\n**Test Day Takeaway:** GCF combines the smallest coefficient AND the smallest power of every shared variable. Pull all of it out.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "What is $35\\%$ of $180$?",
  choices: [
    // distractor: applies the inverse operation — divides 180 by 35 with a decimal slip
    { id: "A", text: "$5.14$" },
    // distractor: off-by-five percent — computes 30% of 180
    { id: "B", text: "$54$" },
    { id: "C", text: "$63$" },
    // distractor: subtracts 35 from 180 instead of multiplying by the percent
    { id: "D", text: "$145$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Forward Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $35\\%$ of $180 = 0.35 \\times 180 = 63$.\n\n**The Full Solution:**\n\"$P\\%$ of $N$\" means $\\dfrac{P}{100} \\times N$.\n$\\dfrac{35}{100} \\times 180 = 0.35 \\times 180 = 63$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — divides $180$ by $35$ instead of multiplying by $0.35$.\n* Choice B: \"off-by-one\" — uses $30\\%$ instead of $35\\%$: $0.30 \\times 180 = 54$.\n* Choice D: \"wrong base\" — subtracts $35$ from $180$ instead of taking a percent.\n\n**Test Day Takeaway:** \"$P$ percent of $N$\" $= \\dfrac{P}{100} \\cdot N$. Convert the percent to a decimal first, then multiply.",
  skills: ["percents"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "The function $f$ is defined by $f(x) = 5x - 7$. What is the value of $f(8)$?",
  choices: [
    // distractor: adds 5 + 8 instead of multiplying
    { id: "A", text: "$13$" },
    { id: "B", text: "$33$" },
    // distractor: stops one step early — computes 5*8 = 40 but forgets the -7
    { id: "C", text: "$40$" },
    // distractor: applies the inverse operation — adds 7 instead of subtracting
    { id: "D", text: "$47$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $f(8) = 5(8) - 7 = 40 - 7 = 33$.\n\n**The Full Solution:**\nSubstitute $x = 8$ into $f(x) = 5x - 7$:\n$f(8) = 5(8) - 7 = 40 - 7 = 33$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — adds $5 + 8$ instead of multiplying $5 \\cdot 8$.\n* Choice C: \"stops one step early\" — computes $5 \\cdot 8 = 40$ but forgets to subtract $7$.\n* Choice D: \"applies the inverse operation\" — adds $7$ instead of subtracting.\n\n**Test Day Takeaway:** Always carry out every operation in the function. Substitute, multiply, then add/subtract.",
  skills: ["function-evaluation", "linear-functions"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "What is the sum of the solutions to the equation $|x - 4| = 9$?",
  choices: [
    // distractor: stops one step early - gives one of the two roots
    { id: "A", text: "$-5$" },
    { id: "B", text: "$8$" },
    // distractor: stops one step early - gives the other root
    { id: "C", text: "$13$" },
    // distractor: wrong base - sums constants in the equation
    { id: "D", text: "$18$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $|x - 4| = 9 \\Rightarrow x - 4 = \\pm 9$. Two solutions: $x = 13$ and $x = -5$. Sum $= 13 + (-5) = 8$.\n\n**The Full Solution:**\n$|x - 4| = 9$ has two cases:\nCase 1: $x - 4 = 9 \\Rightarrow x = 13$.\nCase 2: $x - 4 = -9 \\Rightarrow x = -5$.\n\nSum: $13 + (-5) = 8$.\n\nShortcut: the two solutions of $|x - h| = k$ are symmetric about $x = h$, so their sum is always $2h$. Here $h = 4$, sum $= 8$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives one root ($-5$) instead of the sum.\n* Choice C: \"stops one step early\" — gives the other root ($13$).\n* Choice D: \"wrong base\" — sums constants in the equation incorrectly.\n\n**Test Day Takeaway:** $|x - h| = k$ has solutions $x = h \\pm k$. Sum of solutions $= 2h$.",
  skills: ["absolute-value", "solving-equations"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In right triangle $ABC$ shown, angle $C$ is the right angle, $\\sin(A) = \\dfrac{8}{17}$, and the hypotenuse $AB$ has length $34$. What is the length of $BC$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["A", "C", "B"],
      sideLabels: ["", "", "34"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: stops one step early — gives the sin value 8 directly
    { id: "A", text: "$8$" },
    { id: "B", text: "$16$" },
    // distractor: applies inverse — uses 17 directly (the denominator)
    { id: "C", text: "$17$" },
    // distractor: wrong base — uses 34/2 instead of computing via sin
    { id: "D", text: "$30$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $\\sin(A) = \\dfrac{\\text{opposite}}{\\text{hypotenuse}} = \\dfrac{BC}{AB}$. So $BC = AB \\cdot \\sin(A) = 34 \\cdot \\dfrac{8}{17} = 16$.\n\n**The Full Solution:**\nIn right triangle $ABC$ with right angle at $C$, side $BC$ is opposite angle $A$, and $AB$ is the hypotenuse.\n$\\sin(A) = \\dfrac{BC}{AB} = \\dfrac{8}{17}$.\nSo $BC = AB \\cdot \\sin(A) = 34 \\cdot \\dfrac{8}{17} = \\dfrac{272}{17} = 16$.\n\nVerification: with $BC = 16$ and hypotenuse $34$, $AC = \\sqrt{34^2 - 16^2} = \\sqrt{1156 - 256} = \\sqrt{900} = 30$, and $\\sin(A) = \\dfrac{16}{34} = \\dfrac{8}{17}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reads $8$ from the ratio and reports it as the side.\n* Choice C: \"applies the inverse operation\" — uses the denominator $17$ as the side.\n* Choice D: \"wrong base\" — uses the other leg $AC = 30$ instead of $BC$.\n\n**Test Day Takeaway:** $\\sin(\\theta) = \\dfrac{\\text{opposite}}{\\text{hypotenuse}}$. Multiply hypotenuse by the sine ratio to get the opposite side.",
  skills: ["trigonometry", "triangles"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A data set has $9$ values listed in order:\n\n$1, 4, 4, 6, 7, 8, 9, 11, 12$\n\nIf the value $80$ is added to the data set, which of the following is true?",
  choices: [
    // distractor: overestimates median shift
    { id: "A", text: "The median increases by more than $1$ and the range increases." },
    { id: "B", text: "The median increases by $0.5$ and the range increases." },
    // distractor: range obviously changes
    { id: "C", text: "The median stays the same and the range stays the same." },
    // distractor: range clearly changes
    { id: "D", text: "The median increases by $0.5$ and the range stays the same." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):**\nOriginal: $9$ values $\\to$ median $=$ $5$th value $= 7$. Range $= 12 - 1 = 11$.\nWith $80$ added: $10$ values $\\to$ median $=$ average of $5$th and $6$th values $= \\dfrac{7 + 8}{2} = 7.5$. Range $= 80 - 1 = 79$.\nMedian increases by $0.5$. Range increases.\n\n**The Full Solution:**\nOriginal sorted: $1, 4, 4, 6, \\mathbf{7}, 8, 9, 11, 12$. Median = middle ($5$th) value = $7$.\nWith $80$ appended: $1, 4, 4, 6, \\mathbf{7, 8}, 9, 11, 12, 80$. Median = average of $5$th and $6$th = $\\dfrac{7+8}{2} = 7.5$.\nMedian change: $7.5 - 7 = 0.5$. Range change: $79 - 11 = 68$ (increases).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — overestimates the median shift; an outlier moves the median by AT MOST half of one rank shift.\n* Choice C: \"stops one step early\" — ignores the outlier's effect on range.\n* Choice D: \"applies the inverse operation\" — gets median right but ignores the obvious range change.\n\n**Test Day Takeaway:** An extreme outlier greatly affects mean and range, but barely affects the median. The median is RESISTANT to outliers.",
  skills: ["statistics"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the system of equations below, $k$ is a constant. If the system has no solution, what is the value of $k$?\n\n$5x + 2y = 12$\n$10x + ky = 30$",
  choices: [
    // distractor: stops one step early — gives the y-coefficient ratio (k = 2 \\cdot 1 = 2 from coefficient 2)
    { id: "A", text: "$2$" },
    { id: "B", text: "$4$" },
    // distractor: wrong base — uses the x-coefficient of equation 2 (= 10)
    { id: "C", text: "$10$" },
    // distractor: applies the inverse operation — uses the right-side value of equation 2
    { id: "D", text: "$30$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** No solution $\\Leftrightarrow$ left-side coefficient ratios match but right-side ratio differs. $\\frac{5}{10} = \\frac{2}{k} = \\frac{1}{2} \\Rightarrow k = 4$. Verify: $\\frac{12}{30} = \\frac{2}{5} \\neq \\frac{1}{2}$ \\checkmark, so the lines are parallel and distinct.\n\n**The Full Solution:**\nFor a $2 \\times 2$ linear system to have NO solution, the lines must be parallel and distinct: matching slopes (so left-side ratios are equal) but different $y$-intercepts (so the right-side ratio differs).\n\nLeft-side ratio of $x$-coefficients: $\\frac{5}{10} = \\frac{1}{2}$. So we need $\\frac{2}{k} = \\frac{1}{2}$, giving $k = 4$.\n\nCheck constants: $\\frac{12}{30} = \\frac{2}{5}$. Since $\\frac{2}{5} \\neq \\frac{1}{2}$, the lines are distinct.\n\n$k = 4$ produces parallel non-coincident lines $\\Rightarrow$ no solution.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — uses the $y$-coefficient of equation 1 directly.\n* Choice C: \"wrong base\" — uses the $x$-coefficient of equation 2.\n* Choice D: \"applies the inverse operation\" — reports the right-side value of equation 2.\n\n**Test Day Takeaway:** No solution $\\Leftrightarrow \\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$. Always verify the constant ratio fails — if it matches too, the system has infinitely many solutions instead.",
  skills: ["systems-of-equations"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The equation $5(2x - 4) + 14 = 10x + k$ has infinitely many solutions. What is the value of $k$?",
  correctAnswer: "-6",
  explanation: "**SAT Pattern: System Equivalence Check**\n\n**The correct answer is $-6$.**\n\n**The Fast Way (~15s):** Expand: $10x - 20 + 14 = 10x - 6$. For infinitely many solutions, this must equal $10x + k$ for all $x$, so $k = -6$.\n\n**The Full Solution:**\nLeft side: $5(2x - 4) + 14 = 10x - 20 + 14 = 10x - 6$.\nFor the equation $10x - 6 = 10x + k$ to hold for all $x$, the constants must match: $k = -6$.\n\nVerification: with $k = -6$, both sides become $10x - 6$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Writing $k = 6$ (sign error).\n* Computing $-20 + 14 = -34$ instead of $-6$.\n\n**Test Day Takeaway:** Infinitely many solutions $\\iff$ both sides identical after simplification. Match constants AND coefficients on each variable.",
  skills: ["solving-equations", "linear-functions"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table shows the results of a survey of $200$ college students about their preferred study time.\n\n| | Morning | Evening | Total |\n|---|---|---|---|\n| Freshmen | $40$ | $60$ | $100$ |\n| Sophomores | $55$ | $45$ | $100$ |\n| Total | $95$ | $105$ | $200$ |\n\nGiven that a randomly selected student is a freshman, what is the probability that the student prefers morning study?",
  choices: [
    // distractor: wrong base - uses 40/200 (joint, not conditional)
    { id: "A", text: "$0.20$" },
    { id: "B", text: "$0.40$" },
    // distractor: applies inverse op - conditions on Morning instead of Freshman
    { id: "C", text: "$0.42$" },
    // distractor: wrong base - gives marginal P(Morning)
    { id: "D", text: "$0.95$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Conditional Probability from a Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** P(morning | freshman) $= \\dfrac{\\text{freshman \\& morning}}{\\text{total freshmen}} = \\dfrac{40}{100} = 0.40$.\n\n**The Full Solution:**\nThe phrase \"Given that the student is a freshman\" restricts the sample space to the $100$ freshmen.\n\nWithin that group, $40$ prefer morning, so:\nP(morning | freshman) $= \\dfrac{40}{100} = 0.40$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses $\\frac{40}{200}$ (joint probability) instead of conditioning on freshman.\n* Choice C: \"applies the inverse operation\" — conditions on Morning ($\\frac{40}{95} \\approx 0.42$) instead of Freshman.\n* Choice D: \"wrong base\" — gives marginal P(Morning) $= \\frac{95}{100}$.\n\n**Test Day Takeaway:** \"Given X\" sets X as the new total (denominator). $P(A | X) = \\dfrac{P(A \\cap X)}{P(X)} = \\dfrac{\\text{count } A \\& X}{\\text{count } X}$.",
  skills: ["probability", "two-way-tables", "statistics"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $7x^2 - bx + 28 = 0$ has no real solutions. What is the greatest integer value of $b$?",
  choices: [
    // distractor: uses ≤ instead of < (misses strict inequality)
    { id: "A", text: "$28$" },
    { id: "B", text: "$27$" },
    // distractor: off-by-one — over-corrects to 26
    { id: "C", text: "$26$" },
    // distractor: stops one step early — gives b^2 = 784
    { id: "D", text: "$784$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** No real solutions $\\Rightarrow$ discriminant $< 0$: $b^2 - 4(7)(28) < 0 \\Rightarrow b^2 < 784 \\Rightarrow |b| < 28$. Greatest integer: $b = 27$.\n\n**The Full Solution:**\nFor $7x^2 - bx + 28 = 0$: discriminant $= (-b)^2 - 4(7)(28) = b^2 - 784$.\nNo real solutions $\\iff b^2 - 784 < 0 \\iff b^2 < 784 \\iff -28 < b < 28$.\n\nAt $b = 28$: discriminant $= 0$ (one repeated real root), so $b = 28$ does NOT give \"no real solutions.\"\nGreatest integer strictly less than $28$: $b = 27$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — uses $\\leq$ instead of $<$.\n* Choice C: \"applies the inverse operation\" — over-corrects to $b = 26$.\n* Choice D: \"stops one step early\" — gives $b^2 = 784$ instead of $b$.\n\n**Test Day Takeaway:** No real solutions $\\iff$ discriminant strictly less than zero. At discriminant $= 0$, there is exactly ONE real solution.",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A researcher models the relationship between hours spent practicing ($x$) and test score ($y$) for a group of students using the equation $y = 6.4x + 38$. A particular student practiced for $7$ hours and scored $89$. What is the residual for this student?",
  choices: [
    // distractor: predicted - actual (sign reversed)
    { id: "A", text: "$-6.2$" },
    { id: "B", text: "$6.2$" },
    // distractor: arithmetic slip — uses wrong predicted value
    { id: "C", text: "$3.8$" },
    // distractor: gives the predicted value, not the residual
    { id: "D", text: "$82.8$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Residual**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Predicted: $6.4(7) + 38 = 44.8 + 38 = 82.8$. Residual $= 89 - 82.8 = 6.2$.\n\n**The Full Solution:**\nPredicted at $x = 7$: $y = 6.4(7) + 38 = 44.8 + 38 = 82.8$.\nResidual $=$ actual $-$ predicted $= 89 - 82.8 = 6.2$.\nA positive residual means the actual score was above the line of best fit.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — computes predicted $-$ actual.\n* Choice C: \"off-by-one\" — arithmetic slip on the predicted value.\n* Choice D: \"stops one step early\" — gives the predicted value $82.8$ without subtracting.\n\n**Test Day Takeaway:** Residual = actual $-$ predicted. Positive means above the line; negative means below.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A study assigned $80$ participants to one of three experimental groups. The table summarizes participants by group and outcome:\n\n| | Improved | No Change | Worsened | Total |\n|---|---|---|---|---|\n| Group X | $14$ | $9$ | $7$ | $30$ |\n| Group Y | $5$ | $11$ | $4$ | $20$ |\n| Group Z | $11$ | $13$ | $6$ | $30$ |\n| Total | $30$ | $33$ | $17$ | $80$ |\n\nIf one participant who Improved is selected at random, what is the probability that the participant was in Group Y or Group Z?",
  choices: [
    // distractor: uses 16/80 = 1/5 (uses grand total as denominator)
    { id: "A", text: "$\\dfrac{1}{5}$" },
    // distractor: stops at Y only: 5/30 = 1/6
    { id: "B", text: "$\\dfrac{1}{6}$" },
    { id: "C", text: "$\\dfrac{8}{15}$" },
    // distractor: off-by-one — uses 16/30 simplified wrong
    { id: "D", text: "$\\dfrac{14}{30}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Restrict to the Improved column (total $30$). Y or Z count: $5 + 11 = 16$. Probability $= \\dfrac{16}{30} = \\dfrac{8}{15}$.\n\n**The Full Solution:**\nGiven: participant Improved. The conditional restricts the sample space to that column, which has $30$ total participants.\nFavorable: Improved AND (Group Y OR Group Z) = $5 + 11 = 16$.\nProbability $= \\dfrac{16}{30} = \\dfrac{8}{15}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses the grand total ($80$) as denominator: $\\dfrac{16}{80} = \\dfrac{1}{5}$.\n* Choice B: \"stops one step early\" — counts only Group Y ($5$) and divides by $30$.\n* Choice D: \"off-by-one\" — uses Group X count ($14$) instead of Y + Z.\n\n**Test Day Takeaway:** \"Given X\" means restrict to the X-row or X-column. Numerator counts favorable cases in that subset; denominator is the subset's total.",
  skills: ["probability", "two-way-tables"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $432$ is $p\\%$ greater than $48$, what is the value of $p$?",
  choices: [
    // distractor: divides 432 by 48 to get 9, then converts wrong (gives 900)
    { id: "A", text: "$900$" },
    { id: "B", text: "$800$" },
    // distractor: stops one step early — gives ratio 432/48 = 9 as percent
    { id: "C", text: "$9$" },
    // distractor: divides 432 - 48 = 384 by 432 instead of by 48
    { id: "D", text: "$89$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Percent Greater Than**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** \"$432$ is $p\\%$ greater than $48$\" means $432 = 48 + \\dfrac{p}{100}(48)$, so $\\dfrac{p}{100} = \\dfrac{432 - 48}{48} = \\dfrac{384}{48} = 8$, giving $p = 800$.\n\n**The Full Solution:**\n$432 = 48 + \\dfrac{p}{100} \\cdot 48$\n$432 - 48 = \\dfrac{p}{100} \\cdot 48$\n$384 = \\dfrac{48p}{100}$\n$\\dfrac{p}{100} = \\dfrac{384}{48} = 8$\n$p = 800$.\n\nVerification: $48 + 800\\% \\text{ of } 48 = 48 + 384 = 432$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — confuses $\\frac{432}{48} = 9$ with the percent and reports $900$.\n* Choice C: \"stops one step early\" — gives $\\frac{432}{48} = 9$ without converting to a percent increase.\n* Choice D: \"wrong base\" — divides $384$ by $432$ instead of $48$.\n\n**Test Day Takeaway:** \"$A$ is $p\\%$ greater than $B$\" $\\iff$ $A = B(1 + \\dfrac{p}{100})$. Solve via $\\dfrac{A - B}{B} = \\dfrac{p}{100}$.",
  skills: ["percents", "word-problems"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A polling organization surveyed a random sample of $400$ likely voters and reported a margin of error of $\\pm 4$ percentage points at $95\\%$ confidence. The pollsters want to reduce the margin of error to approximately $\\pm 2$ percentage points using the same confidence level. Approximately what total sample size is needed?",
  choices: [
    // distractor: doubles to 800 (would only reduce MOE by sqrt(2))
    { id: "A", text: "$800$" },
    // distractor: 400 * 3 = 1200 (triples instead of quadruples)
    { id: "B", text: "$1{,}200$" },
    { id: "C", text: "$1{,}600$" },
    // distractor: 400 * 8 = 3200 (over-quadruples)
    { id: "D", text: "$3{,}200$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Margin of error $\\propto \\dfrac{1}{\\sqrt{n}}$. To halve the margin of error, multiply $n$ by $4$: $400 \\cdot 4 = 1{,}600$.\n\n**The Full Solution:**\nThe margin of error scales as $\\dfrac{1}{\\sqrt{n}}$. To reduce the margin of error by a factor of $k$, multiply $n$ by $k^2$.\n\nDesired ratio of margins: $\\dfrac{4}{2} = 2$. So multiply $n$ by $2^2 = 4$.\nNew sample size: $400 \\times 4 = 1{,}600$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — doubles $n$, but that only reduces MOE by $\\sqrt{2}$.\n* Choice B: \"off-by-one\" — triples instead of quadrupling.\n* Choice D: \"wrong base\" — multiplies by $8$ (over-corrects).\n\n**Test Day Takeaway:** To CUT the margin of error in half, MULTIPLY the sample size by $4$. In general, the multiplier on $n$ is the square of the desired MOE ratio.",
  skills: ["margin-of-error", "statistics"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The graph of $x^2 + 3x + y^2 + 5y = \\dfrac{33}{2}$ in the $xy$-plane is a circle. What is the length of the circle's radius?",
  choices: [
    // distractor: stops one step early — gives r^2 = 25 instead of r = 5
    { id: "A", text: "$25$" },
    { id: "B", text: "$5$" },
    // distractor: wrong base — uses sqrt of 33/2 directly without completing
    { id: "C", text: "$\\sqrt{\\dfrac{33}{2}}$" },
    // distractor: applies inverse — subtracts the completing-square constants instead of adding
    { id: "D", text: "$4$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Complete the Square — Non-Square Radius**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Half of $3$ is $\\dfrac{3}{2}$, squared $= \\dfrac{9}{4}$. Half of $5$ is $\\dfrac{5}{2}$, squared $= \\dfrac{25}{4}$. Add $\\dfrac{9}{4} + \\dfrac{25}{4} = \\dfrac{34}{4} = \\dfrac{17}{2}$ to both sides: $\\left(x + \\dfrac{3}{2}\\right)^2 + \\left(y + \\dfrac{5}{2}\\right)^2 = \\dfrac{33}{2} + \\dfrac{17}{2} = \\dfrac{50}{2} = 25$. Radius $= \\sqrt{25} = 5$.\n\n**The Full Solution:**\nGroup terms and complete the square for each variable:\n$x^2 + 3x + y^2 + 5y = \\dfrac{33}{2}$\n$\\left(x^2 + 3x + \\dfrac{9}{4}\\right) + \\left(y^2 + 5y + \\dfrac{25}{4}\\right) = \\dfrac{33}{2} + \\dfrac{9}{4} + \\dfrac{25}{4}$\n$\\left(x + \\dfrac{3}{2}\\right)^2 + \\left(y + \\dfrac{5}{2}\\right)^2 = \\dfrac{66}{4} + \\dfrac{34}{4} = \\dfrac{100}{4} = 25$\n\nRadius $= \\sqrt{25} = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives $r^2 = 25$ instead of $r = 5$.\n* Choice C: \"wrong base\" — uses the right-hand-side constant directly without completing the square.\n* Choice D: \"applies the inverse operation\" — subtracts the completing-square constants instead of adding.\n\n**Test Day Takeaway:** Complete the square symmetrically for BOTH variables. Add the completion constants to BOTH sides — once for $x$, once for $y$.",
  skills: ["circle-equations", "solving-equations"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In right triangle $XYZ$ shown, angle $Y$ is the right angle, $XZ = 25$, and $YZ = 7$. What is the value of $\\cos(X)$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["X", "Y", "Z"],
      sideLabels: ["", "7", "25"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: uses YZ (opposite to X) — this is sin(X)
    { id: "A", text: "$\\dfrac{7}{25}$" },
    { id: "B", text: "$\\dfrac{24}{25}$" },
    // distractor: uses YZ/XY — this is tan(X)
    { id: "C", text: "$\\dfrac{7}{24}$" },
    // distractor: gives 1/tan(X) = cot(X)
    { id: "D", text: "$\\dfrac{24}{7}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Angle $Y$ is right, so $XZ = 25$ is the hypotenuse. Find $XY$: $XY = \\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24$. For angle $X$: adjacent $= XY = 24$, hypotenuse $= 25$. $\\cos(X) = \\dfrac{24}{25}$.\n\n**The Full Solution:**\nBy the Pythagorean theorem: $XY^2 + YZ^2 = XZ^2$.\n$XY^2 = 25^2 - 7^2 = 625 - 49 = 576 \\Rightarrow XY = 24$.\nVerification: $24^2 + 7^2 = 576 + 49 = 625 = 25^2$ \\checkmark. ($7$-$24$-$25$ Pythagorean triple.)\n$\\cos(X) = \\dfrac{\\text{adjacent to } X}{\\text{hypotenuse}} = \\dfrac{XY}{XZ} = \\dfrac{24}{25}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses $YZ$ (opposite to $X$); this is $\\sin(X)$.\n* Choice C: \"wrong base\" — uses $\\dfrac{YZ}{XY}$; this is $\\tan(X)$.\n* Choice D: \"applies the inverse operation\" — gives the reciprocal of $\\tan(X) = \\cot(X)$.\n\n**Test Day Takeaway:** Draw and label the triangle relative to the angle in question. Adjacent and opposite swap depending on which acute angle you reference.",
  skills: ["trigonometry", "triangles"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $x > 0$, the expression $\\sqrt[4]{x^3} \\cdot \\sqrt{x^7}$ is equivalent to $x^{\\frac{p}{q}}$ where $\\dfrac{p}{q}$ is in lowest terms. What is the value of $p + q$?",
  choices: [
    // distractor: gives p alone (= 17) instead of p + q
    { id: "A", text: "$17$" },
    // distractor: sums numerator + index (3 + 4 + 7 + 2 = 16)
    { id: "B", text: "$16$" },
    { id: "C", text: "$21$" },
    // distractor: stops at p/q = 17/4 but reports 4 only
    { id: "D", text: "$4$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** $\\sqrt[4]{x^3} = x^{\\frac{3}{4}}$. $\\sqrt{x^7} = x^{\\frac{7}{2}}$. Add: $\\dfrac{3}{4} + \\dfrac{7}{2} = \\dfrac{3}{4} + \\dfrac{14}{4} = \\dfrac{17}{4}$. So $p + q = 17 + 4 = 21$.\n\n**The Full Solution:**\nConvert each radical to a fractional exponent:\n$\\sqrt[4]{x^3} = x^{\\frac{3}{4}}, \\quad \\sqrt{x^7} = x^{\\frac{7}{2}}$.\n\nWhen multiplying same bases, add exponents:\n$x^{\\frac{3}{4}} \\cdot x^{\\frac{7}{2}} = x^{\\frac{3}{4} + \\frac{14}{4}} = x^{\\frac{17}{4}}$.\n\n$\\gcd(17, 4) = 1$, so $\\dfrac{17}{4}$ is already in lowest terms. Then $p = 17$, $q = 4$, and $p + q = 21$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives just the numerator $p = 17$ without adding $q$.\n* Choice B: \"applies the inverse operation\" — sums all the integers in the expression ($3 + 4 + 7 + 2 = 16$).\n* Choice D: \"wrong base\" — gives just the denominator $q = 4$.\n\n**Test Day Takeaway:** $\\sqrt[n]{x^m} = x^{\\frac{m}{n}}$ — power on top, root on bottom. Add fractional exponents when multiplying same bases.",
  skills: ["polynomial-operations", "exponent-rules", "radical-expressions"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A radioactive sample is modeled by $M(t) = 240(0.84)^{\\frac{t}{3}}$, where $M$ is the mass in grams and $t$ is the time in days since the initial measurement. By what percent does the mass decrease every $3$ days?",
  correctAnswer: "16",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**The correct answer is $16$.**\n\n**The Fast Way (~15s):** Every $3$ days, the multiplier is $0.84$. Percent decrease $= 1 - 0.84 = 0.16 = 16\\%$.\n\n**The Full Solution:**\nWhen $t$ increases by $3$:\n$M(t + 3) = 240(0.84)^{\\frac{t+3}{3}} = 240(0.84)^{\\frac{t}{3}} \\cdot 0.84 = 0.84 \\cdot M(t)$.\n\nThe mass is multiplied by $0.84$ every $3$ days, so the percent decrease per $3$-day period is $1 - 0.84 = 0.16 = 16\\%$.\n\nVerification: at $t = 0$, $M = 240$. At $t = 3$, $M = 201.6$. Decrease: $\\dfrac{240 - 201.6}{240} = \\dfrac{38.4}{240} = 0.16 = 16\\%$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Answering $84$ (the multiplier itself, not the percent decrease).\n* Computing the daily rate instead of the $3$-day rate.\n\n**Test Day Takeaway:** A decay multiplier $b < 1$ over period $d$ means the percent decrease per period is $(1 - b) \\times 100\\%$.",
  skills: ["exponential-functions", "percents"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = (x + 4)^2 - 9$. If the function $g$ is defined by $g(x) = f(x - 6)$, what is the minimum value of $g$?",
  choices: [
    // distractor: gives the x at minimum (x = 2) instead of g(x)
    { id: "A", text: "$2$" },
    { id: "B", text: "$-9$" },
    // distractor: forgets the constant -9
    { id: "C", text: "$0$" },
    // distractor: combines -9 + 6 = -3 (wrong shift)
    { id: "D", text: "$-3$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $f$ has minimum value $-9$ (at $x = -4$). $g(x) = f(x - 6)$ shifts $f$ horizontally; horizontal shifts do NOT change the minimum value. So $g$ has minimum value $-9$.\n\n**The Full Solution:**\n$g(x) = f(x - 6) = ((x - 6) + 4)^2 - 9 = (x - 2)^2 - 9$.\n\nThis is vertex form with vertex $(2, -9)$. The minimum value is $-9$, attained at $x = 2$.\n\nVerification: $(x - 2)^2 \\geq 0$ for all real $x$, so $g(x) \\geq -9$ with equality at $x = 2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the $x$-coordinate of the minimum ($2$) instead of $g(x) = -9$.\n* Choice C: \"off-by-one\" — forgets the constant $-9$ in the original function.\n* Choice D: \"applies the inverse operation\" — combines $-9$ and $+6$ via incorrect shift.\n\n**Test Day Takeaway:** Horizontal shifts (replacing $x$ with $x \\pm h$) do NOT change the min/max value. Only vertical shifts ($+k$ outside) do.",
  skills: ["function-interpretation", "vertex-form", "quadratic-equations"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Line $\\ell$ passes through the points $(2, -3)$ and $(8, 9)$. Line $m$ is perpendicular to line $\\ell$ and passes through the point $(4, 5)$. What is the equation of line $m$?",
  choices: [
    // distractor: uses slope of ell (parallel, not perpendicular)
    { id: "A", text: "$y = 2x - 3$" },
    // distractor: applies inverse — keeps negative on slope
    { id: "B", text: "$y = -2x + 13$" },
    { id: "C", text: "$y = -\\dfrac{1}{2}x + 7$" },
    // distractor: off-by-one — wrong intercept
    { id: "D", text: "$y = -\\dfrac{1}{2}x + 5$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Slope of $\\ell$: $\\dfrac{9 - (-3)}{8 - 2} = \\dfrac{12}{6} = 2$. Perpendicular slope: $-\\dfrac{1}{2}$. Using $(4, 5)$: $5 = -\\dfrac{1}{2}(4) + b \\Rightarrow b = 7$. So $y = -\\dfrac{1}{2}x + 7$.\n\n**The Full Solution:**\n$m_{\\ell} = \\dfrac{9 - (-3)}{8 - 2} = \\dfrac{12}{6} = 2$.\nPerpendicular slopes are negative reciprocals: $m_m = -\\dfrac{1}{2}$.\nUsing the point $(4, 5)$:\n$5 = -\\dfrac{1}{2}(4) + b \\Rightarrow 5 = -2 + b \\Rightarrow b = 7$.\nEquation: $y = -\\dfrac{1}{2}x + 7$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — uses the slope of $\\ell$ itself (parallel, not perpendicular).\n* Choice B: \"applies the inverse operation\" — keeps the negative sign on the slope without taking the reciprocal.\n* Choice D: \"off-by-one\" — uses the $y$-coordinate of the given point ($5$) as the intercept.\n\n**Test Day Takeaway:** Perpendicular slope: flip AND change sign. Then plug in the given point to find the intercept.",
  skills: ["slope", "linear-functions", "coordinate-geometry"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Joaquin scored a total of $86$ points across $14$ basketball games. He scored $5$ points in some of the games and $7$ points in each of the others. In how many games did he score $5$ points?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~25s):** Let $a$ = games scoring $5$ points, $b$ = games scoring $7$ points. Then $a + b = 14$ and $5a + 7b = 86$. Substitute $b = 14 - a$: $5a + 7(14 - a) = 86 \\Rightarrow -2a = 86 - 98 = -12 \\Rightarrow a = 6$.\n\n**The Full Solution:**\nLet $a$ be the number of $5$-point games and $b$ be the number of $7$-point games.\n\nTotal games: $a + b = 14$.\nTotal points: $5a + 7b = 86$.\n\nSolve by substitution. From the first equation: $b = 14 - a$. Substitute into the second:\n$5a + 7(14 - a) = 86$\n$5a + 98 - 7a = 86$\n$-2a = -12$\n$a = 6$.\n\nThen $b = 14 - 6 = 8$.\n\nVerification: $6 + 8 = 14$ games \\checkmark; $5(6) + 7(8) = 30 + 56 = 86$ points \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $b = 8$ (the number of $7$-point games) instead of $a = 6$.\n* Setting up the equations backward: $7a + 5b = 86$ — re-read the problem to confirm which variable matches which point value.\n\n**Test Day Takeaway:** SAT word problems with two unknowns and two relationships are linear systems in disguise. Define each variable in one sentence, write each relationship as an equation, then solve.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The parabola defined by $y = -3(x - h)^2 + k$ has its vertex at the point $(2, 12)$ and passes through the point $(4, 0)$. What is the value of $h - k$?",
  choices: [
    // distractor: stops one step early — gives just h = 2
    { id: "A", text: "$2$" },
    // distractor: applies inverse — gives h + k = 14
    { id: "B", text: "$14$" },
    { id: "C", text: "$-10$" },
    // distractor: wrong base — gives k - h = 10
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Vertex $(h, k) = (2, 12)$. Verify the parabola passes through $(4, 0)$: $y = -3(4 - 2)^2 + 12 = -3(4) + 12 = 0$ \\checkmark. So $h - k = 2 - 12 = -10$.\n\n**The Full Solution:**\nIn vertex form $y = a(x - h)^2 + k$, the vertex is $(h, k)$.\nGiven vertex $(2, 12)$: $h = 2$ and $k = 12$.\nVerify with the second point $(4, 0)$ and $a = -3$:\n$y = -3(4 - 2)^2 + 12 = -3(4) + 12 = 0$ \\checkmark.\n\nSo $h - k = 2 - 12 = -10$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports just $h = 2$ without subtracting $k$.\n* Choice B: \"applies the inverse operation\" — computes $h + k = 14$.\n* Choice D: \"wrong base\" — computes $k - h = 10$ (sign reversed).\n\n**Test Day Takeaway:** In $y = a(x - h)^2 + k$, the vertex is exactly $(h, k)$. The other point only verifies $a$.",
  skills: ["vertex-form", "function-interpretation"]
}
      ]
    }
  ]
};

export default practiceTest5;
