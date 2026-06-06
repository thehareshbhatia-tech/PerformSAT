// Practice Test 5 - SAT Math
// 2 Modules, 22 questions each (44 total)
// 2026-06 M2 flow diversification. New wavy difficulty flow (unique to this
// test): E M M E M H H M H H M H E H H M H H H M H H — easies at 1/4/13 (13 is
// the mid-module breather), mediums at 2/3/5/8/11/16/20, hards everywhere else
// with a band-7 ceiling. Six transformed difficult-PDF "pool" items infused:
// a parametric dependent-system point (Q6), a circle-domain value (Q9), a
// quadratic-formula discriminant-form fill-in (Q10), an exponential period
// years-to-months conversion (Q14), a rearranged-linear-model constant reading
// (Q3), and a scatterplot best-fit-line scaling item (Q17). Cloned archetypes
// retired (classify-function-type, y-intercept interpretation, right-triangle
// trig, b^(t/k) percent, no-solution/infinitely-many find-k, discriminant
// greatest-integer, residual, margin-of-error). Scenario palette: solar-panel
// arrays, marathon pacing, aquaponics, museum acoustics, paper recycling,
// night-market stalls. M1 de-cloned: easy-block reordered + new opener
// coefficient family; Q11 cylinder and Q21 Pythagorean re-carried.

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
  question: "At a night-market stall, the spices in a blend are mixed in a ratio of $4$ grams of cinnamon to $7$ grams of cardamom. If a batch of the blend weighs $66$ grams, how many grams of cinnamon does it contain?",
  choices: [
    // distractor: picks the ratio number (4) directly
    { id: "A", text: "$4$" },
    { id: "B", text: "$24$" },
    // distractor: uses 4/7 of total instead of 4/11 (gives ~37.7)
    { id: "C", text: "$37.7$" },
    // distractor: solves for cardamom instead of cinnamon (7/11 of 66 = 42)
    { id: "D", text: "$42$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Cinnamon makes up $\\dfrac{4}{4 + 7} = \\dfrac{4}{11}$ of the total. Cinnamon $= \\dfrac{4}{11} \\cdot 66 = 24$ grams.\n\n**The Full Solution:**\nLet cinnamon $= 4k$ and cardamom $= 7k$ (so the ratio is $4 : 7$).\nTotal: $4k + 7k = 11k = 66$, so $k = 6$.\nCinnamon $= 4k = 4 \\cdot 6 = 24$ grams.\n\nVerification: cardamom $= 7 \\cdot 6 = 42$, total $= 24 + 42 = 66$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports $4$ (the cinnamon part of the ratio) instead of solving the proportion.\n* Choice C: \"wrong base\" — uses $\\dfrac{4}{7}$ of the total instead of $\\dfrac{4}{11}$.\n* Choice D: \"applies the inverse operation\" — solves for cardamom ($\\dfrac{7}{11} \\cdot 66 = 42$) instead of cinnamon.\n\n**Test Day Takeaway:** When two parts are given as a ratio AND the combined total is known, divide the total by the SUM of the ratio parts to get the unit value.",
  skills: ["ratios", "word-problems"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A paper-recycling service charges customers using the rule $C(n) = 18n + 12$, where $C$ is the cost in dollars to process $n$ bins of paper and the $\\$12$ is a one-time pickup fee. Which of the following best interprets the value $18$ in this context?",
  choices: [
    // distractor: confuses 18 with pickup fee instead of per-bin rate
    { id: "A", text: "The one-time pickup fee, in dollars" },
    { id: "B", text: "The cost to process one bin of paper, in dollars" },
    // distractor: applies the inverse — uses 18 as a count instead of a rate
    { id: "C", text: "The number of bins processed" },
    // distractor: off-by-one — confuses 18 with the total cost when n = 0
    { id: "D", text: "The cost when no bins are processed, in dollars" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $C(n) = 18n + 12$, the coefficient of $n$ is the rate per bin: each additional bin costs $\\$18$.\n\n**The Full Solution:**\nThe function is in the form $C(n) = mn + b$, where $m = 18$ is the slope and $b = 12$ is the fixed pickup fee. The slope is the cost per bin: each additional bin adds $\\$18$ to the total.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — confuses the slope ($18$) with the constant term ($12$).\n* Choice C: \"applies the inverse operation\" — treats $18$ as a quantity instead of a rate.\n* Choice D: \"off-by-one\" — that would be $C(0) = 12$, not $18$.\n\n**Test Day Takeaway:** In $y = mn + b$, the coefficient of the variable is the rate of change per unit of that variable.",
  skills: ["function-interpretation", "linear-functions", "slope"]
},
{
  id: 3,
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
  id: 4,
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
    // distractor: subtracts from 360 instead of 180
    { id: "D", text: "$245$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Angles in a triangle sum to $180^{\\circ}$. Third angle $= 180 - 42 - 73 = 65$.\n\n**The Full Solution:**\nThe interior angles of any triangle add to $180^{\\circ}$.\nIf two angles are $42^{\\circ}$ and $73^{\\circ}$, the third must be:\n$180^{\\circ} - 42^{\\circ} - 73^{\\circ} = 180^{\\circ} - 115^{\\circ} = 65^{\\circ}$.\n\nVerification: $42 + 73 + 65 = 180$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — subtracts only one angle ($180 - 73 = 107$).\n* Choice B: \"applies the inverse operation\" — adds the two given angles ($42 + 73 = 115$) instead of subtracting from $180$.\n* Choice D: \"wrong base\" — uses $360^{\\circ}$ (a quadrilateral) instead of $180^{\\circ}$.\n\n**Test Day Takeaway:** Triangle interior angles always sum to $180^{\\circ}$. Subtract the known angles from $180$ to find the missing one.",
  skills: ["triangles", "angles"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $7x - 4 = 31$, what is the value of $7x + 6$?",
  choices: [
    // distractor: stops one step early — reports x = 5 instead of 7x + 6
    { id: "A", text: "$5$" },
    { id: "B", text: "$41$" },
    // distractor: applies the inverse operation — subtracts 10 instead of adding
    { id: "C", text: "$21$" },
    // distractor: wrong base — gives 7x = 35 then forgets to add 6
    { id: "D", text: "$35$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Notice $7x + 6 = (7x - 4) + 10 = 31 + 10 = 41$. No need to find $x$ at all.\n\n**The Full Solution:**\nGiven $7x - 4 = 31$, add $4$: $7x = 35$, so $x = 5$.\nThe question asks for $7x + 6$, not $x$: $7(5) + 6 = 35 + 6 = 41$.\n\nShortcut: $(7x + 6) - (7x - 4) = 10$, so $7x + 6 = 31 + 10 = 41$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports $x = 5$ instead of evaluating $7x + 6$.\n* Choice C: \"applies the inverse operation\" — subtracts $10$ instead of adding ($31 - 10 = 21$).\n* Choice D: \"wrong base\" — gives $7x = 35$ but forgets to add $6$.\n\n**Test Day Takeaway:** When the question asks for an expression in $x$ rather than $x$ itself, look for a one-step shift before computing $x$.",
  skills: ["solving-equations"]
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
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $a \\cdot b^t$, the base $b = 1.08 = 1 + 0.08$, so the growth rate is ${}0.08 = 8\\%$ per year.\n\n**The Full Solution:**\nThe model $R(t) = 150(1.08)^t$ has the form $P_0(1 + r)^t$.\nHere $1 + r = 1.08$, so $r = 0.08 = 8\\%$.\nEach year the revenue grows by $8\\%$ of the previous year's value.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — confuses exponential growth with linear growth.\n* Choice C: \"applies the inverse operation\" — interprets $1.08$ as a $108\\%$ increase rather than a $1.08$ multiplier.\n* Choice D: \"stops one step early\" — misreads the base as an output value.\n\n**Test Day Takeaway:** In $P_0(1 + r)^t$, the growth rate is $r$, not the entire base. Subtract $1$ from the base to find the rate.",
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
  diagram: { type: "scatterplot", params: {
    points: [[1,22],[2,22],[3,28],[4,26],[5,29],[6,34],[7,33],[8,38],[9,40],[10,42],[11,43],[13,52],[14,52]],
    xMin: 0, xMax: 15, yMin: 0, yMax: 60,
    xGridStep: 1, yGridStep: 5, xLabelStep: 3, yLabelStep: 10,
    bestFitLine: { slope: 2.4, intercept: 18.5 },
  } },
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
  question: "A cylindrical aquaponics tank has an interior radius of $6$ feet and an interior height of $8$ feet. The interior volume of the tank, in cubic feet, can be expressed as $k\\pi$. What is the value of $k$?",
  correctAnswer: "288",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $288$.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi(6)^2(8) = 36 \\cdot 8 \\cdot \\pi = 288\\pi$. So $k = 288$.\n\n**The Full Solution:**\nThe volume formula for a right circular cylinder is $V = \\pi r^2 h$.\nWith $r = 6$ ft and $h = 8$ ft:\n$V = \\pi (6)^2 (8) = \\pi (36)(8) = 288\\pi$ cubic feet.\nSo $k = 288$.\n\n**Common Mistakes to Avoid:**\n* Forgetting to square the radius: $\\pi r h = 48\\pi$, giving $k = 48$.\n* Confusing the cylinder formula with the cone formula $V = \\dfrac{1}{3}\\pi r^2 h$, giving $k = 96$.\n\n**Verification:** $\\pi(36)(8) = 288\\pi$ \\checkmark.\n\n**Test Day Takeaway:** For a cylinder, square the radius first, then multiply by the height. $V = \\pi r^2 h$ is on the Reference Sheet.",
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
  question: "Along a marathon course, three water stations form a right triangle. The right-angle station is connected to the next station by a straight path of length $15$ meters, and the longest path, the hypotenuse, measures $25$ meters. What is the perimeter, in meters, of the triangle formed by the three paths?",
  diagram: {
    type: "rightTriangle",
    params: {
      sideLabels: ["15", "", "25"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: stops one step early — sums only the two legs (15 + 20 = 35)
    { id: "A", text: "$35$" },
    { id: "B", text: "$60$" },
    // distractor: subtracts the sides directly instead of using the Pythagorean theorem (25 - 15 = 10)
    { id: "C", text: "$50$" },
    // distractor: wrong base — writes the missing leg 20 into the hypotenuse slot too (15 + 20 + 20)
    { id: "D", text: "$55$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Recognize the $15$-$20$-$25$ triangle (a $3$-$4$-$5$ triple scaled by $5$). The missing leg is $20$. Perimeter $= 15 + 20 + 25 = 60$.\n\n**The Full Solution:**\nLet the missing leg be $b$. By the Pythagorean theorem, $15^2 + b^2 = 25^2$.\n$225 + b^2 = 625$\n$b^2 = 400$\n$b = 20$.\nPerimeter $= 15 + 20 + 25 = 60$ meters.\n\nVerification: $15^2 + 20^2 = 225 + 400 = 625 = 25^2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — adds only the two legs ($15 + 20 = 35$) and forgets the hypotenuse.\n* Choice C: \"wrong base\" — subtracts the sides directly ($25 - 15 = 10$) instead of applying the Pythagorean theorem, then adds $15 + 10 + 25$.\n* Choice D: \"off-by-one\" — finds the leg $20$ but mistakenly uses it as the hypotenuse as well ($15 + 20 + 20$).\n\n**Test Day Takeaway:** Memorize the common Pythagorean triples ($3$-$4$-$5$, $5$-$12$-$13$, $7$-$24$-$25$, $8$-$15$-$17$) and their multiples. A leg of $15$ with hypotenuse $25$ is the $3$-$4$-$5$ triple scaled by $5$.",
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
// Wavy flow: E M M E M H H M H H M H E H H M H H H M H H
// Easies at Q1/Q4/Q13 (Q13 breather: range). Mediums at Q2/Q3/Q5/Q8/Q11/Q16/Q20.
// Hards elsewhere, band-7 ceiling. Pool infusions: Q6 parametric dependent
// system, Q9 circle-domain x-value, Q10 quadratic-formula discriminant form,
// Q14 exponential period years-to-months, Q3 rearranged-linear-model constant,
// Q17 scatterplot best-fit-line scaling.

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
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
  explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $f(8) = 5(8) - 7 = 40 - 7 = 33$.\n\n**The Full Solution:**\nSubstitute $x = 8$ into $f(x) = 5x - 7$:\n$f(8) = 5(8) - 7 = 40 - 7 = 33$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — adds $5 + 8$ instead of multiplying $5 \\cdot 8$.\n* Choice C: \"stops one step early\" — computes $5 \\cdot 8 = 40$ but forgets to subtract $7$.\n* Choice D: \"applies the inverse operation\" — adds $7$ instead of subtracting.\n\n**Test Day Takeaway:** Always carry out every operation in the function. Substitute, multiply, then add or subtract.",
  skills: ["function-evaluation", "linear-functions"]
},
{
  id: 2,
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
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Dmitri uses $4$ square meters of panel material to build each solar-panel array. The relationship between the number of arrays he builds, $x$, and the total area of panel material he purchased, $y$, in square meters, satisfies $y - 4x = 9$. Which of the following is the best interpretation of $9$ in this context?",
  choices: [
    // distractor: treats 9 as a count of arrays
    { id: "A", text: "Dmitri built $9$ arrays." },
    // distractor: reads 9 as the material used rather than the surplus
    { id: "B", text: "Dmitri used a total of $9$ square meters of material to build the arrays." },
    // distractor: reads 9 as the total purchased rather than the surplus
    { id: "C", text: "Dmitri purchased a total of $9$ square meters of material." },
    { id: "D", text: "Dmitri purchased $9$ square meters more material than he used to build the arrays." }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Interpret Intercept in Context**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Rearrange $y - 4x = 9$ to $y = 4x + 9$. The $4x$ is the material USED ($4$ per array); $y$ is the material PURCHASED. So $9 = y - 4x$ is the leftover: purchased minus used.\n\n**The Full Solution:**\nSolve for $y$: $y = 4x + 9$. Here $4x$ is the area of material consumed building $x$ arrays (since each array uses $4$ square meters), and $y$ is the total area purchased. Rearranged, $9 = y - 4x = (\\text{purchased}) - (\\text{used})$, the surplus material that was bought but not used.\n\nVerification: if Dmitri builds $x = 5$ arrays, used $= 4(5) = 20$, and $y = 20 + 9 = 29$ purchased — exactly $9$ more than used \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — treats $9$ as a count of arrays; arrays are counted by $x$, not by the constant.\n* Choice B: \"swaps used and surplus\" — the material used is $4x$, not the constant $9$.\n* Choice C: \"swaps purchased and surplus\" — the total purchased is $y$, which depends on $x$; $9$ is only the leftover.\n\n**Test Day Takeaway:** Rearrange to $y = mx + b$ first. When $y$ is a total and $mx$ is the amount consumed, the constant $b$ is the difference — what was left over, not a total or a count.",
  skills: ["interpreting-linear-models", "linear-functions"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Aisha runs at a constant pace, covering $9$ kilometers in $36$ minutes. At this pace, how many minutes does it take Aisha to run $1$ kilometer?",
  choices: [
    // distractor: gives total time for all 9 km, stops one step early
    { id: "A", text: "$36$" },
    { id: "B", text: "$4$" },
    // distractor: inverts the rate — km per minute (9/36 = 0.25)
    { id: "C", text: "$0.25$" },
    // distractor: wrong base — divides 36 by 6 instead of 9
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Time per kilometer $= \\dfrac{36 \\text{ min}}{9 \\text{ km}} = 4$ minutes per kilometer.\n\n**The Full Solution:**\nA constant pace means time is proportional to distance. Divide total time by total distance:\n$\\dfrac{36 \\text{ minutes}}{9 \\text{ kilometers}} = 4 \\text{ minutes per kilometer}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports the total time for all $9$ km instead of the per-kilometer time.\n* Choice C: \"applies the inverse operation\" — computes kilometers per minute ($\\frac{9}{36} = 0.25$) instead of minutes per kilometer.\n* Choice D: \"wrong base\" — divides $36$ by $6$ instead of by $9$.\n\n**Test Day Takeaway:** \"Per one unit\" means divide the total by the count of that unit. Watch the order: minutes per km is $\\frac{\\text{minutes}}{\\text{km}}$.",
  skills: ["proportions", "rates"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "An acoustic engineer recorded $9$ ambient sound-level readings, in decibels, in a museum gallery, listed in order:\n\n$1, 4, 4, 6, 7, 8, 9, 11, 12$\n\nA faulty sensor then adds the erroneous reading $80$ to the data set. Compared with the original nine readings, which of the following describes the change to the median and the range?",
  choices: [
    // distractor: overestimates the median shift (an outlier barely moves the median)
    { id: "A", text: "The median increases by more than $1$ and the range increases." },
    { id: "B", text: "The median increases by $0.5$ and the range increases." },
    // distractor: ignores both effects (the outlier clearly enlarges the range)
    { id: "C", text: "The median stays the same and the range stays the same." },
    // distractor: gets the median right but misses the obvious range change
    { id: "D", text: "The median increases by $0.5$ and the range stays the same." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):**\nOriginal: $9$ values $\\to$ median $=$ $5$th value $= 7$. Range $= 12 - 1 = 11$.\nWith $80$ added: $10$ values $\\to$ median $=$ average of $5$th and $6$th values $= \\dfrac{7 + 8}{2} = 7.5$. Range $= 80 - 1 = 79$.\nMedian increases by $0.5$. Range increases.\n\n**The Full Solution:**\nOriginal sorted: $1, 4, 4, 6, \\mathbf{7}, 8, 9, 11, 12$. Median = middle ($5$th) value = $7$.\nWith $80$ appended: $1, 4, 4, 6, \\mathbf{7, 8}, 9, 11, 12, 80$. Median = average of $5$th and $6$th = $\\dfrac{7+8}{2} = 7.5$.\nMedian change: $7.5 - 7 = 0.5$. Range change: $79 - 11 = 68$ (increases).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"overestimates the median shift\" — an outlier moves the median by at most half of one rank shift, never by more than $1$ here.\n* Choice C: \"ignores both effects\" — the outlier $80$ obviously enlarges the range, so it cannot stay the same.\n* Choice D: \"misses the range change\" — gets the median shift right but overlooks the obvious jump in the range.\n\n**Test Day Takeaway:** An extreme outlier greatly affects the mean and range but barely affects the median. The median is resistant to outliers.",
  skills: ["statistics"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$$3x + 4y = 11$$\n$$9x + 12y = 33$$\n\nFor each real number $r$, which of the following points lies on the graph of both equations of the given system in the $xy$-plane?",
  choices: [
    // distractor: nonsense parametrization scaled by 3 (does not satisfy the line)
    { id: "A", text: "$\\left(\\dfrac{r}{3} + 11,\\ -\\dfrac{r}{3} + 33\\right)$" },
    { id: "B", text: "$\\left(-\\dfrac{4r}{3} + \\dfrac{11}{3},\\ r\\right)$" },
    // distractor: sign-flipped y-parametrization (gives 6r + 11, not constant)
    { id: "C", text: "$\\left(r,\\ \\dfrac{3r}{4} + \\dfrac{11}{4}\\right)$" },
    // distractor: puts the x-solve coefficients into the y-slot
    { id: "D", text: "$\\left(r,\\ -\\dfrac{4r}{3} + \\dfrac{11}{3}\\right)$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The second equation is exactly $3\\times$ the first, so both graphs are the single line $3x + 4y = 11$. Parametrize it: let $y = r$ and solve for $x$: $3x = 11 - 4r$, so $x = -\\dfrac{4r}{3} + \\dfrac{11}{3}$. The point $\\left(-\\dfrac{4r}{3} + \\dfrac{11}{3},\\ r\\right)$ lies on the line for every $r$.\n\n**The Full Solution:**\nDivide the second equation by $3$: $3x + 4y = 11$ — identical to the first. So the system is one line, and every point on $3x + 4y = 11$ is a solution.\n\nTo write that line parametrically, set one variable to the free parameter $r$ and solve for the other. Setting $y = r$: $3x + 4r = 11 \\Rightarrow x = \\dfrac{11 - 4r}{3} = -\\dfrac{4r}{3} + \\dfrac{11}{3}$. That is choice B.\n\nCheck B in $3x + 4y = 11$: $3\\left(-\\dfrac{4r}{3} + \\dfrac{11}{3}\\right) + 4r = -4r + 11 + 4r = 11$ for all $r$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — a scaled-up nonsense point; $3\\left(\\dfrac{r}{3}+11\\right) + 4\\left(-\\dfrac{r}{3}+33\\right) = -\\dfrac{r}{3} + 165 \\neq 11$.\n* Choice C: \"applies the inverse operation\" — sign-flips the $y$-coefficient; $3r + 4\\left(\\dfrac{3r}{4}+\\dfrac{11}{4}\\right) = 6r + 11 \\neq 11$.\n* Choice D: \"swaps the slots\" — puts the $x$-solve coefficients in the $y$-position; $3r + 4\\left(-\\dfrac{4r}{3}+\\dfrac{11}{3}\\right) = -\\dfrac{7r}{3} + \\dfrac{44}{3} \\neq 11$.\n\n**Test Day Takeaway:** When one equation is a constant multiple of the other, the system is a single line. To match a parametric choice, fix the variable that appears alone (here $y = r$) and solve for the other — then verify the chosen point satisfies the equation for ALL $r$.",
  skills: ["systems-of-equations", "infinitely-many-solutions"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the line $y = 6x + c$, where $c$ is a constant, is tangent to the parabola $y = x^2 + 2x + 11$ at exactly one point. What is the value of $c$?",
  choices: [
    // distractor: applies the inverse operation — solves 4c = -28 instead of +28
    { id: "A", text: "$-7$" },
    { id: "B", text: "$7$" },
    // distractor: wrong base — reads the parabola's constant term 11 as the answer
    { id: "C", text: "$11$" },
    // distractor: sign error in the discriminant — uses +4(11 - c) instead of -4(11 - c)
    { id: "D", text: "$15$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Quadratic-Linear System with One Intersection**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Tangent means the line meets the parabola exactly once, so setting them equal gives a quadratic with discriminant $0$. $x^2 + 2x + 11 = 6x + c \\Rightarrow x^2 - 4x + (11 - c) = 0$. Discriminant $= (-4)^2 - 4(11 - c) = 0 \\Rightarrow 16 - 44 + 4c = 0 \\Rightarrow c = 7$.\n\n**The Full Solution:**\nA line is tangent to a parabola when the two graphs intersect at exactly one point. Set the expressions equal:\n$x^2 + 2x + 11 = 6x + c$\n$x^2 + 2x - 6x + 11 - c = 0$\n$x^2 - 4x + (11 - c) = 0$\n\nExactly one solution requires the discriminant to be zero:\n$(-4)^2 - 4(1)(11 - c) = 0$\n$16 - 44 + 4c = 0$\n$4c = 28$\n$c = 7$.\n\nVerification: with $c = 7$, the quadratic is $x^2 - 4x + 4 = (x - 2)^2 = 0$, a double root at $x = 2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — solves $4c = -28$ (a sign slip) and gets $c = -7$.\n* Choice C: \"wrong base\" — reads the parabola's constant term $11$ straight off without using the discriminant.\n* Choice D: \"sign error in the discriminant\" — writes $16 + 4(11 - c) = 0$, giving $4c = 60$ and $c = 15$.\n\n**Test Day Takeaway:** \"Tangent\" or \"exactly one intersection\" for a line and a parabola means: set them equal, collect into a quadratic, and set the discriminant $b^2 - 4ac = 0$.",
  skills: ["quadratic-equations", "systems-of-equations", "discriminant"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "What is the solution to the equation $\\sqrt{3x + 4} = x$?",
  correctAnswer: "4",
  explanation: "**SAT Pattern: Radical Equation**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~25s):** Square both sides: $3x + 4 = x^2$, so $x^2 - 3x - 4 = 0 \\Rightarrow (x - 4)(x + 1) = 0$. The candidates are $x = 4$ and $x = -1$, but $x = -1$ would make the right side negative while a square root is never negative, so $x = 4$.\n\n**The Full Solution:**\nSquare both sides to clear the radical:\n$(\\sqrt{3x + 4})^2 = x^2$\n$3x + 4 = x^2$\n$x^2 - 3x - 4 = 0$\n$(x - 4)(x + 1) = 0$\nSo $x = 4$ or $x = -1$.\n\nCheck each candidate in the ORIGINAL equation (squaring can introduce extraneous roots):\n* $x = 4$: $\\sqrt{3(4) + 4} = \\sqrt{16} = 4$ \\checkmark.\n* $x = -1$: $\\sqrt{3(-1) + 4} = \\sqrt{1} = 1 \\neq -1$ \\times. Extraneous.\n\nThe only valid solution is $x = 4$.\n\n**Common Mistakes to Avoid:**\n* Reporting $x = -1$ without checking — squaring both sides can create false roots.\n* Forgetting that the principal square root is never negative, so the right side $x$ must be $\\geq 0$.\n\n**Test Day Takeaway:** After squaring a radical equation, always substitute each candidate back into the original — discard any root that makes a square root equal a negative value.",
  skills: ["radical-equations", "solving-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$$(x + 6)^2 + (y - 8)^2 = 169$$\n\nThe graph of the given equation is a circle in the $xy$-plane. The point $(a, b)$ lies on this circle. Which of the following could be the value of $a$?",
  choices: [
    // distractor: just below the minimum x-value (−19), tempting boundary miss
    { id: "A", text: "$-20$" },
    { id: "B", text: "$-15$" },
    // distractor: uses the y-coordinate of the center as an x-value
    { id: "C", text: "$8$" },
    // distractor: uses the radius itself as a coordinate (outside the x-range)
    { id: "D", text: "$19$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Circle Equation — Center and Radius**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The circle has center $(-6, 8)$ and radius $\\sqrt{169} = 13$. The $x$-coordinates of points on the circle span $[-6 - 13,\\ -6 + 13] = [-19, 7]$. Only $-15$ lies in that interval.\n\n**The Full Solution:**\nWrite the equation in standard form $(x - h)^2 + (y - k)^2 = r^2$: here $h = -6$, $k = 8$, and $r^2 = 169$, so $r = 13$.\n\nThe horizontal extent of the circle reaches $13$ units left and right of the center's $x$-coordinate $-6$:\n$-6 - 13 = -19$ (leftmost) and $-6 + 13 = 7$ (rightmost).\nSo any point on the circle has an $x$-coordinate in $[-19, 7]$.\n\nTesting the choices: $-15$ is in $[-19, 7]$; $-20$, $8$, and $19$ are not.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one boundary\" — $-20$ is just past the left edge $-19$; a sign or rounding slip on $-6 - 13$ lands here.\n* Choice C: \"wrong base\" — uses the center's $y$-coordinate $8$ as an $x$-value; $8 > 7$ is outside the range.\n* Choice D: \"wrong base\" — plugs in the radius $13$-adjacent value $19$ from $\\sqrt{169}$ misread; it is far outside the $x$-range.\n\n**Test Day Takeaway:** A circle centered at $(h, k)$ with radius $r$ has $x$-values in $[h - r,\\ h + r]$ and $y$-values in $[k - r,\\ k + r]$. Read off the center and radius first, then test each choice against the interval.",
  skills: ["circle-equation", "center-radius"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$$3x^2 - 12x - 5 = 0$$\n\nOne solution to the given equation can be written as $\\dfrac{12 - \\sqrt{k}}{6}$, where $k$ is a constant. What is the value of $k$?",
  correctAnswer: "204",
  explanation: "**SAT Pattern: Quadratic Formula — Discriminant Form**\n\n**The correct answer is $204$.**\n\n**The Fast Way (~30s):** With $a = 3$, $b = -12$, $c = -5$, the quadratic formula gives $x = \\dfrac{12 \\pm \\sqrt{(-12)^2 - 4(3)(-5)}}{2(3)} = \\dfrac{12 \\pm \\sqrt{204}}{6}$. Matching $\\dfrac{12 - \\sqrt{k}}{6}$, the value under the root is $k = 204$.\n\n**The Full Solution:**\nThe quadratic formula for $ax^2 + bx + c = 0$ is $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.\n\nHere $a = 3$, $b = -12$, $c = -5$:\n$-b = 12$, $\\quad 2a = 6$.\nDiscriminant: $b^2 - 4ac = (-12)^2 - 4(3)(-5) = 144 + 60 = 204$.\n\nSo $x = \\dfrac{12 \\pm \\sqrt{204}}{6}$. The given form $\\dfrac{12 - \\sqrt{k}}{6}$ matches with $k = 204$.\n\n**Common Mistakes to Avoid:**\n* Dropping a sign: writing $b^2 - 4ac = 144 - 60 = 84$ by treating $c = -5$ as $+5$.\n* Confusing the numerator $12$ (which is $-b$) with the denominator $6$ (which is $2a$).\n\n**Test Day Takeaway:** When a root is given in the form $\\dfrac{-b \\pm \\sqrt{k}}{2a}$, the constant $k$ is just the discriminant $b^2 - 4ac$. Identify $a$, $b$, $c$ carefully — sign errors on $c$ are the most common trap.",
  skills: ["quadratic-formula", "discriminant"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "At a night-market stall, dumplings sell for $\\$3$ each and grilled skewers sell for $\\$5$ each. Aisha buys a total of $12$ of these items and spends exactly $\\$46$. How many skewers does she buy?",
  choices: [
    // distractor: solves for dumplings (7) instead of skewers
    { id: "A", text: "$7$" },
    { id: "B", text: "$5$" },
    // distractor: off-by-one slip in the elimination step
    { id: "C", text: "$6$" },
    // distractor: divides total spent by skewer price (46/5 rounded) ignoring the count constraint
    { id: "D", text: "$9$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Let $s$ = skewers. Then dumplings $= 12 - s$. Cost: $3(12 - s) + 5s = 46 \\Rightarrow 36 + 2s = 46 \\Rightarrow s = 5$.\n\n**The Full Solution:**\nLet $d$ = number of dumplings and $s$ = number of skewers.\nCount equation: $d + s = 12$.\nCost equation: $3d + 5s = 46$.\n\nSubstitute $d = 12 - s$ into the cost equation:\n$3(12 - s) + 5s = 46$\n$36 - 3s + 5s = 46$\n$36 + 2s = 46$\n$2s = 10 \\Rightarrow s = 5$.\n\nThen $d = 12 - 5 = 7$.\nVerification: $3(7) + 5(5) = 21 + 25 = 46$ \\checkmark, and $7 + 5 = 12$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"answers the wrong variable\" — $7$ is the number of dumplings, not skewers.\n* Choice C: \"off-by-one\" — an arithmetic slip in $2s = 10$ that reads $s = 6$.\n* Choice D: \"wrong base\" — divides the total $\\$46$ by the skewer price $\\$5$ and ignores the count constraint $d + s = 12$.\n\n**Test Day Takeaway:** With two unknowns and two facts (a count and a total), substitute one equation into the other. Always re-check which variable the question asks for before bubbling.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A paper-recycling center sorted $80$ incoming bales by source and by grade. The table summarizes the bales:\n\n| | High grade | Mixed grade | Low grade | Total |\n|---|---|---|---|---|\n| Route X | $14$ | $9$ | $7$ | $30$ |\n| Route Y | $5$ | $11$ | $4$ | $20$ |\n| Route Z | $11$ | $13$ | $6$ | $30$ |\n| Total | $30$ | $33$ | $17$ | $80$ |\n\nIf one high-grade bale is selected at random, what is the probability that it came from Route Y or Route Z?",
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
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Restrict to the High-grade column (total $30$). Route Y or Z count: $5 + 11 = 16$. Probability $= \\dfrac{16}{30} = \\dfrac{8}{15}$.\n\n**The Full Solution:**\nGiven: the bale is High grade. The conditional restricts the sample space to that column, which has $30$ bales.\nFavorable: High grade AND (Route Y OR Route Z) $= 5 + 11 = 16$.\nProbability $= \\dfrac{16}{30} = \\dfrac{8}{15}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses the grand total ($80$) as denominator: $\\dfrac{16}{80} = \\dfrac{1}{5}$.\n* Choice B: \"stops one step early\" — counts only Route Y ($5$) and divides by $30$.\n* Choice D: \"off-by-one\" — uses the Route X count ($14$) instead of Y + Z.\n\n**Test Day Takeaway:** \"Given X\" means restrict to the X-row or X-column. Numerator counts favorable cases in that subset; denominator is the subset's total.",
  skills: ["probability", "two-way-tables"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "An aquaponics technician recorded the water temperature, in degrees Celsius, of a tank at six times during the day:\n\n$18, 21, 19, 24, 20, 17$\n\nWhat is the range of these temperatures, in degrees Celsius?",
  choices: [
    // distractor: reports the maximum value only
    { id: "A", text: "$24$" },
    { id: "B", text: "$7$" },
    // distractor: reports the minimum value only
    { id: "C", text: "$17$" },
    // distractor: gives the mean instead of the range
    { id: "D", text: "$19.8$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Range $=$ maximum $-$ minimum $= 24 - 17 = 7$.\n\n**The Full Solution:**\nThe range of a data set is the difference between its largest and smallest values.\nLargest: $24$. Smallest: $17$.\nRange $= 24 - 17 = 7$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports the maximum $24$ without subtracting the minimum.\n* Choice C: \"stops one step early\" — reports the minimum $17$.\n* Choice D: \"wrong base\" — computes the mean ($\\approx 19.8$) instead of the range.\n\n**Test Day Takeaway:** Range is a single subtraction: largest minus smallest. Don't confuse it with the mean or the spread of the middle values.",
  skills: ["statistics"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$$N(t) = 540(1.05)^{\\frac{4}{3}t}$$\n\nThe function $N$ models the number of residential solar-panel arrays installed in a county $t$ years after 2018. According to the model, the number of arrays is predicted to increase by $5\\%$ every $m$ months. What is the value of $m$?",
  choices: [
    // distractor: assumes the 5% increase happens once per year, ignoring the 4/3 exponent factor
    { id: "A", text: "$12$" },
    { id: "B", text: "$9$" },
    // distractor: inverts the rate — multiplies 4/3 by 12 instead of using 3/4 of a year
    { id: "C", text: "$16$" },
    // distractor: uses 3 years worth of months
    { id: "D", text: "$36$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The factor $1.05$ multiplies in once each time the exponent $\\frac{4}{3}t$ increases by $1$, i.e. when $\\frac{4}{3}t = 1 \\Rightarrow t = \\frac{3}{4}$ year. Convert: $\\frac{3}{4} \\times 12 = 9$ months.\n\n**The Full Solution:**\nThe base $1.05$ corresponds to a $5\\%$ increase, applied once every time the exponent grows by exactly $1$.\n\nSet the exponent change to $1$:\n$\\frac{4}{3}t = 1 \\Rightarrow t = \\frac{3}{4}$ year.\n\nConvert years to months: $\\frac{3}{4} \\text{ year} \\times 12 \\frac{\\text{months}}{\\text{year}} = 9$ months.\n\nSo the number of arrays increases by $5\\%$ every $9$ months, giving $m = 9$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — assumes the $5\\%$ increase happens once per year (ignores the $\\frac{4}{3}$ factor in the exponent).\n* Choice C: \"applies the inverse operation\" — multiplies $\\frac{4}{3} \\times 12 = 16$ instead of using $\\frac{3}{4}$ of a year.\n* Choice D: \"wrong base\" — uses $3$ years' worth of months.\n\n**Test Day Takeaway:** A base $b$ in $a \\cdot b^{ct}$ multiplies in once each time the exponent $ct$ increases by $1$ — that is, every $\\frac{1}{c}$ units of $t$. Solve $ct = 1$, then convert units.",
  skills: ["exponential-functions", "unit-conversion"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $4^{x + 1} = 8^{x - 1}$, what is the value of $x$?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~30s):** Rewrite both sides as powers of $2$: $4 = 2^2$ and $8 = 2^3$. So $2^{2(x+1)} = 2^{3(x-1)}$. Equate exponents: $2x + 2 = 3x - 3$, giving $x = 5$.\n\n**The Full Solution:**\nFor an equation of the form $b^M = b^N$ (same positive base $b \\neq 1$), we must have $M = N$. So convert both sides to a common base.\n\n$4 = 2^2$ and $8 = 2^3$, so:\n$4^{x + 1} = (2^2)^{x + 1} = 2^{2(x + 1)} = 2^{2x + 2}$\n$8^{x - 1} = (2^3)^{x - 1} = 2^{3(x - 1)} = 2^{3x - 3}$\n\nSet exponents equal:\n$2x + 2 = 3x - 3$\n$5 = x$\n\n**Verification:** $4^{5 + 1} = 4^6 = 4096$. $8^{5 - 1} = 8^4 = 4096$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Setting $4 = 8$ in some way (e.g., trying to equate the bases without rewriting them as common powers).\n* Forgetting to distribute: writing $2(x+1)$ as $2x + 1$ instead of $2x + 2$.\n* Sign error: $-(-3) = +3$, leading to wrong constant.\n\n**Test Day Takeaway:** When two exponential expressions are equal and the bases are powers of a common base, rewrite both sides in that common base, then equate exponents. Use $(b^m)^n = b^{mn}$ — multiply, don't add.",
  skills: ["exponent-rules", "solving-equations", "exponential-functions"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A museum gift shop prices a poster at $\\$40$. For a weekend promotion, the price is first increased by $25\\%$, and then the increased price is reduced by $20\\%$. What is the final price of the poster?",
  choices: [
    // distractor: nets the two percents as +5% (25 − 20) applied to 40
    { id: "A", text: "$\\$42$" },
    { id: "B", text: "$\\$40$" },
    // distractor: applies the 20% reduction to the original 40, then ignores the increase
    { id: "C", text: "$\\$32$" },
    // distractor: applies both percents additively the wrong way (40 + 25% then + 20%)
    { id: "D", text: "$\\$60$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Successive Percent Changes**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Multiply by the two factors in sequence: $40 \\times 1.25 \\times 0.80 = 40 \\times 1.00 = \\$40$.\n\n**The Full Solution:**\nA $25\\%$ increase multiplies the price by $1.25$:\n$40 \\times 1.25 = 50$.\nA $20\\%$ decrease multiplies the new price by $0.80$:\n$50 \\times 0.80 = 40$.\n\nSo the final price is $\\$40$ — the same as the start, because $1.25 \\times 0.80 = 1.00$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — nets the percents as $25\\% - 20\\% = 5\\%$ and adds $5\\%$ to $\\$40$, ignoring that each percent applies to a different base.\n* Choice C: \"stops one step early\" — applies only the $20\\%$ reduction to the original $\\$40$.\n* Choice D: \"stops one step early\" — applies only the $25\\%$ increase ($\\$50$) or over-adds to $\\$60$.\n\n**Test Day Takeaway:** Apply successive percent changes as MULTIPLIERS in order ($1.25$ then $0.80$), not by adding or subtracting the percentages — each change acts on the most recent amount.",
  skills: ["percents", "word-problems"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The scatterplot shows the relationship between two variables, $x$ and $y$, for sample $J$, along with its line of best fit. Sample $K$ is formed by multiplying the $y$-coordinate of every data point in sample $J$ by $2.5$. Which of the following could be an equation of the line of best fit for sample $K$?",
  diagram: { type: "scatterplot", params: {
    points: [[2,12],[4,17],[6,19],[8,25],[10,27],[12,33],[14,35],[16,41],[18,43]],
    xMin: 0, xMax: 20, yMin: 0, yMax: 50,
    xGridStep: 2, xLabelStep: 4, yGridStep: 5, yLabelStep: 10,
    bestFitLine: { slope: 2, intercept: 8 },
    xLabel: "x", yLabel: "y",
  } },
  choices: [
    // distractor: scales only the slope, leaves the intercept unchanged
    { id: "A", text: "$y = 8 + 5x$" },
    { id: "B", text: "$y = 20 + 5x$" },
    // distractor: scales only the intercept, leaves the slope unchanged
    { id: "C", text: "$y = 20 + 2x$" },
    // distractor: scales neither — repeats the original line of best fit
    { id: "D", text: "$y = 8 + 2x$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Multiplying every $y$-value by $2.5$ scales BOTH the slope and the intercept of the best-fit line by $2.5$. Original line $y = 8 + 2x \\Rightarrow$ new line $y = 8(2.5) + 2(2.5)x = 20 + 5x$.\n\n**The Full Solution:**\nIf the original line of best fit is $y = b + mx$ and every $y$-value is multiplied by a constant $c$, the new line of best fit is $cy = c(b + mx)$, i.e. $y_{\\text{new}} = cb + cmx$. Both the intercept and the slope scale by $c$.\n\nFrom the scatterplot, sample $J$ has best-fit line $y = 8 + 2x$ (intercept $\\approx 8$, slope $\\approx 2$).\nWith $c = 2.5$:\nNew intercept $= 8 \\times 2.5 = 20$.\nNew slope $= 2 \\times 2.5 = 5$.\nSo the new line is $y = 20 + 5x$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — scales the slope to $5$ but forgets to scale the intercept.\n* Choice C: \"stops one step early\" — scales the intercept to $20$ but forgets to scale the slope.\n* Choice D: \"wrong base\" — repeats the original line without scaling anything.\n\n**Test Day Takeaway:** Multiplying every $y$-value by $c$ multiplies BOTH the slope and the intercept of the best-fit line by $c$. Scaling the data scales the whole equation, not just one coefficient.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In a museum courtyard, a fountain jet sends water upward. The height of the water, in feet above the nozzle, is modeled by $h(t) = -5t^2 + 30t + 8$, where $t$ is the time in seconds after the water leaves the nozzle. What is the maximum height, in feet, reached by the water?",
  correctAnswer: "53",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $53$.**\n\n**The Fast Way (~30s):** The maximum of a downward parabola occurs at $t = -\\dfrac{b}{2a} = -\\dfrac{30}{2(-5)} = 3$. Then $h(3) = -5(9) + 30(3) + 8 = -45 + 90 + 8 = 53$.\n\n**The Full Solution:**\nSince the coefficient of $t^2$ is $-5 < 0$, the parabola opens downward and its vertex is the maximum.\n\nThe vertex occurs at $t = -\\dfrac{b}{2a} = -\\dfrac{30}{2(-5)} = \\dfrac{-30}{-10} = 3$ seconds.\n\nSubstitute $t = 3$:\n$h(3) = -5(3)^2 + 30(3) + 8 = -5(9) + 90 + 8 = -45 + 90 + 8 = 53$ feet.\n\n**Common Mistakes to Avoid:**\n* Reporting $t = 3$ (the time of the maximum) instead of the height $53$.\n* Using $+\\dfrac{b}{2a}$ and getting $t = -3$, then evaluating outside the physical range.\n* Reporting the initial height $8$ (the value at $t = 0$) rather than the maximum.\n\n**Test Day Takeaway:** For $f(t) = at^2 + bt + c$ with $a < 0$, the maximum value is $f\\left(-\\dfrac{b}{2a}\\right)$. Find the vertex's $t$-coordinate first, then substitute to get the height.",
  skills: ["quadratic-equations", "vertex-form"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the equation $x^2 - 14x + c = 0$, where $c$ is a constant, the two solutions differ by $6$. What is the value of $c$?",
  choices: [
    { id: "A", text: "$40$" },
    // distractor: assumes the two solutions are equal (both 7), product 49
    { id: "B", text: "$49$" },
    // distractor: splits the sum with the wrong half-difference (roots 9 and 5)
    { id: "C", text: "$45$" },
    // distractor: multiplies the sum by the difference (14 × 6)
    { id: "D", text: "$84$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** By Vieta's, the solutions sum to $14$ and their difference is $6$, so they are $\\dfrac{14 + 6}{2} = 10$ and $\\dfrac{14 - 6}{2} = 4$. Their product is $c = 10 \\times 4 = 40$.\n\n**The Full Solution:**\nFor $x^2 - 14x + c = 0$, Vieta's formulas give: sum of roots $= 14$, product of roots $= c$.\n\nLet the roots be $r$ and $s$ with $r + s = 14$ and $r - s = 6$.\nAdding: $2r = 20 \\Rightarrow r = 10$. Then $s = 14 - 10 = 4$.\n\nProduct: $c = rs = 10 \\times 4 = 40$.\n\nVerification: $x^2 - 14x + 40 = (x - 10)(x - 4)$, roots $10$ and $4$, difference $6$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"ignores the difference\" — sets both roots to $14/2 = 7$, giving product $49$ (the equal-root case).\n* Choice C: \"off-by-one split\" — uses roots $9$ and $5$ (difference $4$, not $6$), product $45$.\n* Choice D: \"wrong operation\" — multiplies the sum by the difference ($14 \\times 6 = 84$) instead of finding the roots.\n\n**Test Day Takeaway:** For $x^2 - (\\text{sum})x + (\\text{product}) = 0$, the sum of roots is $-\\dfrac{b}{a}$ and the product is $\\dfrac{c}{a}$. Given the sum and the difference, solve for each root, then multiply.",
  skills: ["quadratic-equations", "factoring"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Rowan is training for a marathon and wants to run a total of at least $40$ miles this week. He has already run $13$ miles, and he plans to run $m$ miles on each of the $5$ remaining days. Which inequality represents this situation?",
  choices: [
    { id: "A", text: "$13 + 5m \\geq 40$" },
    // distractor: forgets the 13 miles already run
    { id: "B", text: "$5m \\geq 40$" },
    // distractor: reverses the inequality direction
    { id: "C", text: "$13 + 5m \\leq 40$" },
    // distractor: swaps which quantity is multiplied by 5
    { id: "D", text: "$5 + 13m \\geq 40$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Linear Inequality from Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Total miles $= 13$ (already run) $+ 5m$ (the $5$ remaining days at $m$ miles each). \"At least $40$\" means $\\geq 40$: $13 + 5m \\geq 40$.\n\n**The Full Solution:**\nRowan's total weekly mileage is the sum of what he has run and what he plans to run:\n$\\text{total} = 13 + 5m$.\nThe phrase \"at least $40$ miles\" means the total must be greater than or equal to $40$:\n$13 + 5m \\geq 40$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — leaves out the $13$ miles already completed.\n* Choice C: \"reverses the inequality\" — uses $\\leq$, which would cap the mileage instead of setting a minimum.\n* Choice D: \"wrong base\" — multiplies $13$ by $m$ instead of the $5$ remaining days.\n\n**Test Day Takeaway:** Translate \"at least\" as $\\geq$ and \"at most\" as $\\leq$. Build the total expression first (fixed amount $+$ rate $\\times$ count), then attach the correct inequality sign.",
  skills: ["inequalities", "word-problems"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In a random survey of $810$ visitors to a night market, $512$ chose Dmitri's stall and $298$ chose Aisha's stall as their favorite. If all $8{,}910$ visitors to the market vote with the same preferences, by how many votes would Dmitri's stall be expected to win?",
  choices: [
    // distractor: reports the unscaled survey margin without scaling up
    { id: "A", text: "$214$" },
    // distractor: scales only the loser's count (298 × 11)
    { id: "B", text: "$3{,}278$" },
    { id: "C", text: "$2{,}354$" },
    // distractor: scales only the winner's count (512 × 11)
    { id: "D", text: "$5{,}632$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Proportional Scaling**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Scaling factor $= \\dfrac{8910}{810} = 11$. Survey margin $= 512 - 298 = 214$. Expected margin $= 11 \\times 214 = 2354$.\n\n**The Full Solution:**\nThe full vote scales up from the survey by the factor $\\dfrac{8910}{810} = 11$.\n\nFind the margin in the survey first:\n$512 - 298 = 214$ votes.\n\nScale that margin by $11$:\n$214 \\times 11 = 2354$ votes.\n\n(Equivalently: Dmitri $\\to 512 \\times 11 = 5632$ and Aisha $\\to 298 \\times 11 = 3278$; the difference is $5632 - 3278 = 2354$.)\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports the survey margin $214$ without scaling up to the full vote.\n* Choice B: \"wrong base\" — scales only the loser's count ($298 \\times 11 = 3278$) and treats it as the margin.\n* Choice D: \"wrong base\" — scales only the winner's count ($512 \\times 11 = 5632$) and treats it as the margin.\n\n**Test Day Takeaway:** When a sample is scaled up to a full population, multiply the MARGIN (winner $-$ loser) by the scale factor, or scale each count and subtract — both give the same answer. Don't report a single scaled count as the margin.",
  skills: ["proportions", "statistics"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, a parabola has vertex $(8, -20)$ and intersects the $x$-axis at two points. If the equation of the parabola is written in the form $y = ax^2 + bx + c$, where $a$, $b$, and $c$ are constants, which of the following could be the value of $a + b + c$?",
  choices: [
    // distractor: assumes a < 0 (downward), giving values below −20
    { id: "A", text: "$-25$" },
    // distractor: also below −20; treats the vertex y-value as a ceiling
    { id: "B", text: "$-22$" },
    // distractor: uses a = 0, which is not a parabola (boundary value −20)
    { id: "C", text: "$-20$" },
    { id: "D", text: "$-18$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Quadratic Coefficients from Graph**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The vertex $(8, -20)$ is below the $x$-axis and the parabola crosses the $x$-axis twice, so it opens upward: $a > 0$. In vertex form $y = a(x - 8)^2 - 20$, the value $a + b + c$ equals $y(1) = a(1 - 8)^2 - 20 = 49a - 20$. Since $a > 0$, $49a - 20 > -20$. Only $-18$ exceeds $-20$.\n\n**The Full Solution:**\nA parabola with a minimum vertex below the $x$-axis that meets the $x$-axis at two points must open upward, so $a > 0$.\n\nWrite it in vertex form: $y = a(x - 8)^2 - 20$.\n\nNote that $a + b + c$ is the value of $y$ when $x = 1$ (since $y(1) = a(1)^2 + b(1) + c = a + b + c$):\n$y(1) = a(1 - 8)^2 - 20 = a(49) - 20 = 49a - 20$.\n\nBecause $a > 0$, we have $49a > 0$, so $49a - 20 > -20$. The value of $a + b + c$ must be strictly greater than $-20$.\n\nAmong the choices, only $-18 > -20$. (For instance, $a = \\tfrac{2}{49}$ gives exactly $-18$, and that parabola still crosses the $x$-axis twice.)\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign of $a$\" — assumes the parabola opens downward, which would put $a + b + c$ below $-20$ but then it could not have a minimum vertex below the axis with two real roots.\n* Choice B: \"wrong sign of $a$\" — also below $-20$; treats the vertex $y$-value as an upper bound.\n* Choice C: \"boundary value\" — corresponds to $a = 0$, which is a line, not a parabola; $a + b + c$ must be strictly greater than $-20$.\n\n**Test Day Takeaway:** To find $a + b + c$, evaluate the function at $x = 1$. Combine that with the sign of $a$ (read from how the parabola opens) to bound the answer.",
  skills: ["quadratic-equations", "vertex-form"]
}
      ]
    }
  ]
};

export default practiceTest5;
