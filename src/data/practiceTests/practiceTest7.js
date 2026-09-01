// Practice Test 7 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Official-calibration recreation (2026-09-01): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md).
// Slot metadata (id/type/difficulty/band/skills/pattern) frozen from the
// prior blueprint: M1 5E/9M/8H, domains 7/6/5/4. M2 3E/7M/12H wavy flow.
// Figure density lifted to official ~20%: M1 carries 4 diagram items,
// M2 carries 4. Numeric MC choices sorted ascending (official convention).

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
  question: "If $5d - 8 = 22$, what is the value of $5d + 8$?",
  choices: [
    // distractor: solves all the way to d = 6 and reports the variable
    { id: "A", text: "$6$" },
    // distractor: echoes the right side of the given equation
    { id: "B", text: "$22$" },
    { id: "C", text: "$38$" },
    // distractor: doubles the 22 instead of adding the +16 shift
    { id: "D", text: "$44$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $5d+8$ is exactly $16$ more than $5d-8$ (the constant jumps from $-8$ to $+8$). So $5d+8 = 22+16 = 38$.\n\n**The Full Solution:**\nStep 1: Solve for the group $5d$: from $5d-8=22$, add $8$ to both sides to get $5d=30$.\nStep 2: The target is $5d+8$, not $d$. Since $5d=30$, $5d+8 = 30+8 = 38$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): solved all the way to $d=6$ and reported the variable instead of $5d+8$.\n* Choice B ($22$): just echoed the right side of the original equation.\n* Choice D ($44$): doubled the $22$ instead of adding the $+16$ shift.\n\n**Test Day Takeaway:** When the question asks for an expression rather than the variable, compare it to the given expression — they often differ by a fixed constant you can add directly.",
  skills: ["solving-equations", "word-problems"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The function $p(w) = 460 - 35w$ gives the number of unassembled chair kits remaining in a furniture workshop's storeroom $w$ weeks after a production run begins. What is the best interpretation of $35$ in this context?",
  choices: [
    // distractor: confuses the rate 35 with the starting count (which is 460)
    { id: "A", text: "The workshop starts the production run with $35$ chair kits." },
    { id: "B", text: "The number of chair kits in the storeroom decreases by $35$ each week." },
    // distractor: treats 35 as a time value rather than a per-week rate
    { id: "C", text: "The storeroom is empty $35$ weeks after the production run begins." },
    // distractor: swaps the roles of the rate and the initial value
    { id: "D", text: "The workshop uses $460$ chair kits each week for $35$ weeks." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $p(w)=460-35w$, the coefficient of $w$ is $-35$: the storeroom loses $35$ kits every week.\n\n**The Full Solution:**\nStep 1: The model has the form $p(w)=b+mw$ with $b=460$ and $m=-35$.\nStep 2: The slope $m=-35$ is the rate of change — each additional week removes $35$ kits. That matches Choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A: confuses the rate $35$ with the starting count, which is the constant $460$.\n* Choice C: $\\frac{460}{35}\\approx 13.1$ weeks to empty the storeroom, so $35$ weeks is not the empty time.\n* Choice D: swaps the initial value and the rate.\n\n**Test Day Takeaway:** In $f(x)=b+mx$, the coefficient of $x$ is the per-unit rate of change; the constant is the initial value.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "An ice cream shop sold $240$ waffle cones in June, which was $25\\%$ of all the waffle cones it sold that summer. How many waffle cones did the shop sell that summer?",
  choices: [
    // distractor: applies the percent forward — 240 x 0.25 = 60
    { id: "A", text: "$60$" },
    // distractor: divides by the complement 0.75 instead of 0.25
    { id: "B", text: "$320$" },
    { id: "C", text: "$960$" },
    // distractor: divides by 0.025 instead of 0.25 (decimal slip)
    { id: "D", text: "$9{,}600$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $240$ is $25\\%$ of the total, so total $= \\frac{240}{0.25} = 960$.\n\n**The Full Solution:**\nStep 1: Let $T$ be the summer total. Then $0.25T = 240$.\nStep 2: Divide by $0.25$: $T = \\frac{240}{0.25} = 960$.\nCheck: $0.25 \\times 960 = 240$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($60$): multiplied $240 \\times 0.25$ instead of dividing.\n* Choice B ($320$): divided by the complement $0.75$ instead of $0.25$.\n* Choice D ($9{,}600$): divided by $0.025$ — a decimal slip on the percent.\n\n**Test Day Takeaway:** When a percent of an unknown whole is given, divide the part by the percent as a decimal to recover the whole.",
  skills: ["percents"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $\\dfrac{5x}{12} = \\dfrac{35}{6}$, what is the value of $x + 3$?",
  choices: [
    // distractor: subtracts 3 instead of adding
    { id: "A", text: "$11$" },
    // distractor: stops at x = 14 (forgets the +3 final step)
    { id: "B", text: "$14$" },
    { id: "C", text: "$17$" },
    // distractor: leaves the answer at 5x = 70 instead of x
    { id: "D", text: "$70$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Rewrite $\\frac{35}{6}=\\frac{70}{12}$. Then $\\frac{5x}{12}=\\frac{70}{12}$ gives $5x=70$, so $x=14$ and $x+3=17$.\n\n**The Full Solution:**\nStep 1: Put both sides over $12$: $\\frac{35}{6}=\\frac{70}{12}$.\nStep 2: $\\frac{5x}{12}=\\frac{70}{12} \\Rightarrow 5x=70 \\Rightarrow x=14$.\nStep 3: The target is $x+3$, not $x$: $14+3=17$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($11$): subtracted $3$ instead of adding it.\n* Choice B ($14$): solved for $x$ correctly but forgot to add $3$.\n* Choice D ($70$): stopped at $5x=70$ and never solved for $x$.\n\n**Test Day Takeaway:** Read the final clause before bubbling — the question frequently asks for a shifted quantity like $x+3$, not $x$ itself.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A laundromat charges $\\$1.50$ per kilogram of laundry plus a flat $\\$5$ folding fee per order. Which expression represents the total cost, in dollars, for an order of $k$ kilograms of laundry?",
  choices: [
    // distractor: swaps the flat fee and per-kilogram rate
    { id: "A", text: "$1.50 + 5k$" },
    // distractor: adds the two numbers and multiplies by k (charges the fee per kilogram)
    { id: "B", text: "$6.50k$" },
    // distractor: same fee/rate swap, just rearranged
    { id: "C", text: "$5k + 1.50$" },
    { id: "D", text: "$5 + 1.50k$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Word-to-Expression Translation**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** The flat fee $5$ is the constant; the per-kilogram charge $1.50$ multiplies $k$. Total $=5+1.50k$.\n\n**The Full Solution:**\nStep 1: The $\\$5$ folding fee does not depend on the mass of laundry, so it is the constant term.\nStep 2: The $\\$1.50$-per-kilogram charge scales with mass, so it is $1.50k$.\nStep 3: Total cost $=5+1.50k$.\n\n**Why the wrong answers are tempting:**\n* Choice A: swaps the roles — makes $5$ the per-kilogram rate and $1.50$ the flat fee.\n* Choice B: adds $5+1.50=6.50$ and multiplies by $k$, charging the flat fee for every kilogram.\n* Choice C: same fee/rate swap as A, just rearranged.\n\n**Test Day Takeaway:** \"Flat fee\" is the constant term; \"per unit\" is the coefficient of the variable.",
  skills: ["linear-functions", "word-problems"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Which of the following systems of equations has no solution?",
  choices: [
    // distractor: identical lines after dividing by 3 — infinitely many solutions, not no solution
    { id: "A", text: "$y = -2x + 4$ and $3y = -6x + 12$" },
    // distractor: opposite slopes look like they avoid each other but actually intersect at (0, 4)
    { id: "B", text: "$y = -2x + 4$ and $y = 2x + 4$" },
    // distractor: different slopes guarantee exactly one intersection
    { id: "C", text: "$y = -2x + 4$ and $y = 4x - 2$" },
    { id: "D", text: "$y = -2x + 4$ and $y = -2x - 6$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** No solution means parallel lines: same slope, different intercept. Choice D has slopes $-2$ and $-2$ but intercepts $4 \\neq -6$.\n\n**The Full Solution:**\nA linear system has no solution exactly when the lines are parallel.\n* A: $3y=-6x+12 \\Rightarrow y=-2x+4$, identical to the first line $\\Rightarrow$ infinitely many solutions.\n* B: slopes $-2 \\neq 2 \\Rightarrow$ the lines intersect (one solution).\n* C: slopes $-2 \\neq 4 \\Rightarrow$ the lines intersect (one solution).\n* D: slopes $-2=-2$, intercepts $4 \\neq -6 \\Rightarrow$ parallel, no solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: a duplicate equation gives infinitely many solutions, not none.\n* Choice B: opposite slopes seem to avoid each other, but the lines cross at $(0,4)$.\n* Choice C: different slopes always produce exactly one intersection.\n\n**Test Day Takeaway:** No solution $\\Rightarrow$ same slope, different intercept. Infinitely many $\\Rightarrow$ identical equations after simplifying.",
  skills: ["systems-of-equations", "linear-functions"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $7(3x + 2) - 6(x - 5) = ax + b$ is true for all values of $x$, what is the value of $b$?",
  correctAnswer: "44",
  explanation: "**SAT Pattern: Matching Coefficients**\n\n**The correct answer is $44$.**\n\n**The Fast Way (~20s):** Expand: $7(3x+2)-6(x-5)=21x+14-6x+30=15x+44$. Matching $ax+b$ gives $b=44$.\n\n**The Full Solution:**\nStep 1: Distribute. $7(3x+2)=21x+14$ and $-6(x-5)=-6x+30$.\nStep 2: Combine: $21x+14-6x+30 = 15x+44$.\nStep 3: Since this equals $ax+b$ for all $x$, match the constant term: $b=44$ (and $a=15$).\n\n**Common Mistakes:** Dropping the sign across the second group ($-6x-30$ instead of $-6x+30$) gives $b=-16$; mis-adding $14+30$ gives $34$ instead of $44$.\n\n**Test Day Takeaway:** When two expressions are equal for all $x$, match like-power coefficients term by term — the constant terms must agree.",
  skills: ["solving-equations", "polynomial-operations"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The function $f$ is defined by $f(x) = 12(0.8)^x$. What is the best interpretation of $f(3) \\approx 6.14$?",
  choices: [
    { id: "A", text: "After $3$ time periods, the quantity is approximately $6.14$." },
    // distractor: misreads the change as a constant linear decrease
    { id: "B", text: "The quantity decreases by $6.14$ each time period." },
    // distractor: reverses the input and output (the inverse function)
    { id: "C", text: "When the quantity is $3$, the time is approximately $6.14$." },
    // distractor: misinterprets the base 0.8 as an across-period decay rate
    { id: "D", text: "The quantity loses $80\\%$ of its value every $3$ time periods." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $f(3)\\approx 6.14$ reads as: when the input $x=3$ time periods, the output is about $6.14$.\n\n**The Full Solution:**\nStep 1: $f(x)=12(0.8)^x$ is exponential decay from an initial value of $12$.\nStep 2: $f(3)=12(0.8)^3 = 12(0.512) \\approx 6.14$.\nStep 3: So after $3$ time periods the quantity has fallen to about $6.14$ — Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B: an exponential does not drop by a constant amount each period — that is linear behavior.\n* Choice C: reverses input and output, reading $3$ as the result and $6.14$ as the time.\n* Choice D: base $0.8$ means the quantity keeps $80\\%$ (loses $20\\%$) each period, not loses $80\\%$ over $3$ periods.\n\n**Test Day Takeaway:** $f(a)=b$ means \"input $a$ gives output $b$.\" Watch for choices that flip the input and output.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Line $j$ passes through the points $(1, 8)$ and $(5, -4)$. Line $k$ is perpendicular to line $j$ and passes through the point $(6, 1)$. What is the $y$-intercept of line $k$?",
  choices: [
    // distractor: uses slope 3 (drops the negative when taking the reciprocal)
    { id: "A", text: "$-17$" },
    { id: "B", text: "$-1$" },
    // distractor: confuses the x-coordinate of the given point with the y-intercept
    { id: "C", text: "$6$" },
    // distractor: uses the slope of j (parallel, not perpendicular)
    { id: "D", text: "$19$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Slope of $j$ is $\\frac{-4-8}{5-1}=\\frac{-12}{4}=-3$, so line $k$ has slope $\\frac{1}{3}$. Through $(6,1)$: $y=\\frac{1}{3}(x-6)+1=\\frac{1}{3}x-1$. Intercept $=-1$.\n\n**The Full Solution:**\nStep 1: Slope of $j=\\frac{-4-8}{5-1}=\\frac{-12}{4}=-3$.\nStep 2: Perpendicular slope is the negative reciprocal: $\\frac{1}{3}$.\nStep 3: Use point-slope with $(6,1)$: $y-1=\\frac{1}{3}(x-6) \\Rightarrow y=\\frac{1}{3}x-2+1=\\frac{1}{3}x-1$.\nStep 4: The $y$-intercept is $-1$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-17$): uses slope $3$, dropping the negative from the reciprocal: $1-18=-17$.\n* Choice C ($6$): grabs the $x$-coordinate of the given point as the intercept.\n* Choice D ($19$): uses slope $-3$ (parallel to $j$): $1+18=19$.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals — flip the fraction AND switch the sign.",
  skills: ["slope", "coordinate-geometry", "linear-functions"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A population of fruit flies in a laboratory enclosure doubles every $5$ days. If the population starts at $60$ fruit flies, which expression gives the population after $d$ days?",
  choices: [
    { id: "A", text: "$60(2)^{\\frac{d}{5}}$" },
    // distractor: uses 5d in the exponent — would double every fifth of a day
    { id: "B", text: "$60(2)^{5d}$" },
    // distractor: swaps the base (5) and the doubling factor (2)
    { id: "C", text: "$60(5)^{\\frac{d}{2}}$" },
    // distractor: folds the initial value 60 and the base 2 into one base of 120
    { id: "D", text: "$120^{\\frac{d}{5}}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** \"Doubles every $5$ days\" means base $2$ with exponent $\\frac{d}{5}$, starting from $60$: $60(2)^{\\frac{d}{5}}$.\n\n**The Full Solution:**\nStep 1: A fixed doubling period uses $P(d)=P_0 \\cdot 2^{\\frac{d}{n}}$ with $P_0=60$ and $n=5$.\nStep 2: So $P(d)=60(2)^{\\frac{d}{5}}$.\nCheck: $P(5)=60(2)^1=120$ (one doubling), $P(10)=60(2)^2=240$ (two doublings). $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: uses $5d$ instead of $\\frac{d}{5}$, which would double the population $25$ times faster.\n* Choice C: swaps the doubling factor $2$ with the period $5$ as the base.\n* Choice D: folds the initial value $60$ and base $2$ into one base of $120$.\n\n**Test Day Takeaway:** \"Doubles every $n$ units\" $\\Rightarrow$ base $2$, exponent $\\frac{t}{n}$ — the exponent equals $1$ exactly when $t=n$.",
  skills: ["exponential-functions"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table summarizes the responses of $240$ recreation-center members who were asked whether they prefer morning or evening fitness classes. Based on the table, what fraction of the members who prefer morning classes are $40$ years or older?",
  diagram: {
    type: "twoWayTable",
    params: {
      headers: ["", "Prefers morning", "Prefers evening", "Total"],
      rows: [
        ["Under 40", "38", "82", "120"],
        ["40 or older", "74", "46", "120"],
        ["Total", "112", "128", "240"]
      ]
    }
  },
  choices: [
    // distractor: uses the grand total (240) as the denominator instead of the morning total
    { id: "A", text: "$\\dfrac{74}{240}$" },
    // distractor: gives the marginal fraction preferring morning, not the conditional
    { id: "B", text: "$\\dfrac{112}{240}$" },
    // distractor: uses the 40-or-older row total (120) as the denominator
    { id: "C", text: "$\\dfrac{74}{120}$" },
    { id: "D", text: "$\\dfrac{74}{112}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** \"Of the members who prefer morning classes\" restricts to the morning column, total $112$. Of those, $74$ are $40$ or older. Fraction $=\\frac{74}{112}$.\n\n**The Full Solution:**\nStep 1: The condition is \"prefers morning classes,\" so the denominator is the morning column total, $112$.\nStep 2: Within that column, the number who are $40$ or older is $74$.\nStep 3: Fraction $=\\frac{74}{112}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{74}{240}$): used the grand total $240$ instead of the morning total.\n* Choice B ($\\frac{112}{240}$): gave the marginal fraction who prefer morning, not the conditional.\n* Choice C ($\\frac{74}{120}$): used the $40$-or-older row total $120$ as the denominator.\n\n**Test Day Takeaway:** \"Of those who [condition]\" sets the denominator to that row or column total, never the grand total.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A coach models the relationship between the number of practice sessions attended, $x$, and the number of free throws made in a skills test, $y$, for $10$ players using the equation $y = 4.6x + 12.5$. One player attended $6$ sessions and made $45$ free throws. What is the residual for this player?",
  diagram: { type: "scatterplot", params: {
    points: [[1,18],[2,20],[3,28],[4,30],[5,36],[7,44],[8,50],[9,52],[10,60]],
    xMin: 0, xMax: 11, yMin: 10, yMax: 65,
    xGridStep: 1, xLabelStep: 2, yGridStep: 5, yLabelStep: 10,
    bestFitLine: { slope: 4.6, intercept: 12.5 },
    highlightPoint: [6, 45], highlightLabel: "(6, 45)", showResidual: true,
    xLabel: "Practice sessions", yLabel: "Free throws made",
  } },
  choices: [
    // distractor: combines the sign flip and the arithmetic slip
    { id: "A", text: "$-5.9$" },
    // distractor: applies the inverse operation — predicted minus actual instead of actual minus predicted
    { id: "B", text: "$-4.9$" },
    { id: "C", text: "$4.9$" },
    // distractor: arithmetic error in the predicted value
    { id: "D", text: "$5.9$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Residual**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Predicted $=4.6(6)+12.5=40.1$. Residual $=$ actual $-$ predicted $=45-40.1=4.9$.\n\n**The Full Solution:**\nStep 1: Predict at $x=6$: $y=4.6(6)+12.5=27.6+12.5=40.1$.\nStep 2: Residual $=$ actual $-$ predicted $=45-40.1=4.9$.\nStep 3: The positive sign means the player's actual count sits above the model's line.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5.9$): combined the sign flip with an arithmetic slip.\n* Choice B ($-4.9$): reversed the subtraction (predicted $-$ actual).\n* Choice D ($5.9$): arithmetic slip in computing the predicted value.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted; a positive residual means the point lies above the regression line.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "medium",
  band: 4,
  question: "At a packing plant, $24$ of a sample of $320$ apples inspected had surface blemishes. Based on this rate, how many of the $4{,}000$ apples in the day's shipment would be expected to have surface blemishes?",
  correctAnswer: "300",
  explanation: "**SAT Pattern: Proportion Solving**\n\n**The correct answer is $300$.**\n\n**The Fast Way (~15s):** The rate is $\\frac{24}{320}=\\frac{3}{40}$, so expected count $=\\frac{3}{40}\\cdot 4{,}000=300$.\n\n**The Full Solution:**\nStep 1: Find the rate from the sample: $\\frac{24}{320}=\\frac{3}{40}=0.075$.\nStep 2: Apply the same rate to the shipment: $\\frac{3}{40}\\cdot 4{,}000=\\frac{12{,}000}{40}=300$.\n\n**Common Mistakes:** Inverting the rate as $\\frac{320}{24}$; or cross-multiplying $24\\cdot 4{,}000$ and reporting $96{,}000$ without dividing by $320$.\n\n**Test Day Takeaway:** Sample-to-population problems hold the rate fixed. Write $\\frac{\\text{part}}{\\text{whole}}=\\frac{\\text{part}}{\\text{whole}}$, then scale.",
  skills: ["ratios", "percents"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the right triangle shown, one of the acute angles is $\\theta$ and $\\cos(\\theta) = \\dfrac{15}{17}$. What is the value of $\\sin(\\theta)$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["θ", "", ""],
      rightAngleVertex: 1
    }
  },
  choices: [
    { id: "A", text: "$\\dfrac{8}{17}$" },
    // distractor: forms opposite/adjacent, which is tan(θ)
    { id: "B", text: "$\\dfrac{8}{15}$" },
    // distractor: reuses the cos(θ) value as sin(θ)
    { id: "C", text: "$\\dfrac{15}{17}$" },
    // distractor: flips the ratio, giving sec(θ) = 17/15 instead of sin(θ)
    { id: "D", text: "$\\dfrac{17}{15}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $\\cos(\\theta)=\\frac{15}{17}$ means adjacent $=15$, hypotenuse $=17$. The third side is $\\sqrt{17^2-15^2}=\\sqrt{64}=8$, so $\\sin(\\theta)=\\frac{8}{17}$.\n\n**The Full Solution:**\nStep 1: $\\cos(\\theta)=\\frac{\\text{adjacent}}{\\text{hypotenuse}}=\\frac{15}{17}$, so the leg adjacent to $\\theta$ is $15$ and the hypotenuse is $17$.\nStep 2: By the Pythagorean theorem the opposite leg is $\\sqrt{17^2-15^2}=\\sqrt{289-225}=\\sqrt{64}=8$.\nStep 3: $\\sin(\\theta)=\\frac{\\text{opposite}}{\\text{hypotenuse}}=\\frac{8}{17}$.\n\nCheck: $\\sin^2(\\theta)+\\cos^2(\\theta)=\\frac{64}{289}+\\frac{225}{289}=1$. $\\checkmark$ ($8$-$15$-$17$ is a Pythagorean triple.)\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{8}{15}$): forms $\\frac{\\text{opposite}}{\\text{adjacent}}$, which is $\\tan(\\theta)$.\n* Choice C ($\\frac{15}{17}$): reuses $\\cos(\\theta)$ as if it equaled $\\sin(\\theta)$.\n* Choice D ($\\frac{17}{15}$): flips the ratio, giving $\\sec(\\theta)$ instead of $\\sin(\\theta)$.\n\n**Test Day Takeaway:** Given one ratio, find the missing side with Pythagoras, then read the requested ratio straight off the triangle. Memorizing $8$-$15$-$17$ skips the arithmetic.",
  skills: ["trigonometry", "triangles", "right-triangles"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $a^{\\frac{2}{3}} = 9$ where $a > 0$, what is the value of $a^{\\frac{4}{3}}$?",
  choices: [
    // distractor: takes the square root of 9 instead of squaring it
    { id: "A", text: "$3$" },
    // distractor: applies inverse operation — multiplies 2 x 9 = 18 instead of squaring
    { id: "B", text: "$18$" },
    // distractor: exponent slip — computes 9^(3/2) = 27 instead of 9^2
    { id: "C", text: "$27$" },
    { id: "D", text: "$81$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Since $\\frac{4}{3}=2\\cdot\\frac{2}{3}$, you have $a^{\\frac{4}{3}}=\\left(a^{\\frac{2}{3}}\\right)^2=9^2=81$.\n\n**The Full Solution:**\nStep 1: You are given $a^{\\frac{2}{3}}=9$ and want $a^{\\frac{4}{3}}$.\nStep 2: Notice the target exponent is double the known one: $\\frac{4}{3}=2\\cdot\\frac{2}{3}$, so $a^{\\frac{4}{3}}=\\left(a^{\\frac{2}{3}}\\right)^2$.\nStep 3: Substitute: $9^2=81$.\n\nCheck by solving for $a$: $a=9^{\\frac{3}{2}}=27$, and $27^{\\frac{4}{3}}=\\left(27^{\\frac{1}{3}}\\right)^4=3^4=81$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): takes $\\sqrt{9}$ — halves the exponent instead of doubling it.\n* Choice B ($18$): multiplies $2\\cdot 9$ instead of squaring $9$.\n* Choice C ($27$): computes $9^{\\frac{3}{2}}$, a misapplied exponent chain.\n\n**Test Day Takeaway:** When you know $a^n$ and need $a^m$, write $m=k\\cdot n$ so $a^m=\\left(a^n\\right)^k$. Chaining exponents beats solving for $a$.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A data set consists of $10$ positive integers. Nine of the integers are listed below.\n\n$41, 44, 47, 49, 52, 53, 56, 58, 61$\n\nThe mean of all $10$ integers in the data set is $52$. What is the value of the tenth integer?",
  correctAnswer: "59",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $59$.**\n\n**The Fast Way (~25s):** Total sum $=10\\cdot 52=520$. The nine listed integers add to $461$, so the tenth is $520-461=59$.\n\n**The Full Solution:**\nStep 1: Mean $\\times$ count $=$ sum, so the ten integers total $10\\cdot 52=520$.\nStep 2: Add the nine given values: $41+44+47+49+52+53+56+58+61=461$.\nStep 3: The missing integer is $520-461=59$.\n\nCheck: $\\frac{461+59}{10}=\\frac{520}{10}=52$. $\\checkmark$\n\n**Common Mistakes:** Reporting $52$ (the mean itself) without finding the missing value; or dividing $461$ by $9$ and working from the wrong mean.\n\n**Test Day Takeaway:** To recover a missing value from a mean, build the target sum first (mean $\\times$ count), then subtract the known sum.",
  skills: ["statistics", "mean-median-mode"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $\\dfrac{x^2 + 9x + 20}{x + 4} = x + a$ for all $x \\neq -4$, and $\\dfrac{x^2 - 11x + 24}{x - 8} = x + b$ for all $x \\neq 8$, what is the value of $a \\cdot b$?",
  choices: [
    { id: "A", text: "$-15$" },
    // distractor: grabs the linear coefficient -11 from the second numerator directly
    { id: "B", text: "$-11$" },
    // distractor: stops one step early — gives just b, not the product
    { id: "C", text: "$-3$" },
    // distractor: applies inverse operation — uses b = +3 (sign error on the (x-3) factor)
    { id: "D", text: "$15$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** $x^2+9x+20=(x+4)(x+5)$ cancels to $x+5$, so $a=5$. $x^2-11x+24=(x-8)(x-3)$ cancels to $x-3$, so $b=-3$. Then $a\\cdot b=(5)(-3)=-15$.\n\n**The Full Solution:**\nStep 1: Factor and cancel the first expression: $\\frac{(x+4)(x+5)}{x+4}=x+5$, so $x+a=x+5$ and $a=5$.\nStep 2: Factor and cancel the second: $\\frac{(x-8)(x-3)}{x-8}=x-3$, so $x+b=x-3$ and $b=-3$.\nStep 3: $a\\cdot b=5\\cdot(-3)=-15$.\n\nCheck at $x=0$: first $=\\frac{20}{4}=5$, second $=\\frac{24}{-8}=-3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-11$): grabs the linear coefficient $-11$ of the second numerator directly.\n* Choice C ($-3$): reports $b$ alone instead of the product $a\\cdot b$.\n* Choice D ($15$): drops the sign on the $(x-3)$ factor, using $b=+3$.\n\n**Test Day Takeaway:** Factor the numerator, cancel the denominator factor, then read off the remaining constant. The leftover linear expression is $x+(\\text{constant})$.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The equation $\\dfrac{3}{x - 1} + \\dfrac{2}{x + 3} = \\dfrac{37}{(x - 1)(x + 3)}$ is defined for $x \\neq 1$ and $x \\neq -3$. What is the value of $x$?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~25s):** Multiply both sides by $(x-1)(x+3)$ to clear denominators: $3(x+3)+2(x-1)=37$, which gives $5x+7=37$, so $x=6$.\n\n**The Full Solution:**\nStep 1: Multiply every term by the common denominator $(x-1)(x+3)$: $3(x+3)+2(x-1)=37$.\nStep 2: Expand: $3x+9+2x-2=37$.\nStep 3: Combine: $5x+7=37\\Rightarrow 5x=30\\Rightarrow x=6$.\nStep 4: Since $6\\neq 1$ and $6\\neq -3$, the solution is valid.\n\nCheck: left side $=\\frac{3}{5}+\\frac{2}{9}=\\frac{27}{45}+\\frac{10}{45}=\\frac{37}{45}$; right side $=\\frac{37}{(5)(9)}=\\frac{37}{45}$. $\\checkmark$\n\n**Common Mistakes:** Distributing as $3(x+3)=3x+3$ instead of $3x+9$; or forgetting to confirm the answer does not make a denominator zero.\n\n**Test Day Takeaway:** Clear all denominators by multiplying through by their product, then solve the linear equation — and always check the answer against the excluded values.",
  skills: ["polynomial-operations", "factoring"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The exponential function $f(x) = a \\cdot b^x$ with $b > 0$ satisfies $f(0) = 5$ and $f(1) = 4$. What is the value of $f(3)$?",
  choices: [
    // distractor: treats the change as linear, subtracting 1 per step: 5, 4, 3, 2
    { id: "A", text: "$2$" },
    { id: "B", text: "$\\dfrac{64}{25}$" },
    // distractor: stops one step early — gives f(2) instead of f(3)
    { id: "C", text: "$\\dfrac{16}{5}$" },
    // distractor: applies inverse operation — inverts b, computing 5(5/4)^3
    { id: "D", text: "$\\dfrac{625}{64}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $f(0)=a=5$ and $f(1)=5b=4$, so $b=\\frac{4}{5}$. Then $f(3)=5\\left(\\frac{4}{5}\\right)^3=\\frac{5\\cdot 64}{125}=\\frac{64}{25}$.\n\n**The Full Solution:**\nStep 1: $f(0)=a\\cdot b^0=a=5$, so $a=5$.\nStep 2: $f(1)=5b=4\\Rightarrow b=\\frac{4}{5}$.\nStep 3: $f(3)=5\\left(\\frac{4}{5}\\right)^3=5\\cdot\\frac{64}{125}=\\frac{320}{125}=\\frac{64}{25}$ (dividing top and bottom by $5$).\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): treats the pattern $5, 4, \\ldots$ as linear, subtracting $1$ each step.\n* Choice C ($\\frac{16}{5}$): stops at $f(2)=5\\left(\\frac{4}{5}\\right)^2=\\frac{16}{5}$ instead of $f(3)$.\n* Choice D ($\\frac{625}{64}$): inverts the base, cubing $\\frac{5}{4}$ instead of $\\frac{4}{5}$.\n\n**Test Day Takeaway:** For $f(x)=a\\cdot b^x$, $f(0)$ gives $a$ and $\\frac{f(1)}{f(0)}$ gives $b$. Lock those in, then evaluate at the requested input.",
  skills: ["exponential-functions", "exponent-rules"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $x^2 + y^2 - 10x + 6y + 18 = 0$ represents a circle in the $xy$-plane. What is the radius of the circle?",
  choices: [
    // distractor: completes only the x-square, getting r^2 = 25 - 18 = 7
    { id: "A", text: "$\\sqrt{7}$" },
    { id: "B", text: "$4$" },
    // distractor: applies inverse operation — keeps +18 on the same side instead of moving it
    { id: "C", text: "$\\sqrt{52}$" },
    // distractor: stops one step early — reports r^2 = 16 instead of r = 4
    { id: "D", text: "$16$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Complete the square: $(x-5)^2+(y+3)^2=-18+25+9=16$, so $r=\\sqrt{16}=4$.\n\n**The Full Solution:**\nStep 1: Group the variable terms: $(x^2-10x)+(y^2+6y)=-18$.\nStep 2: Complete each square. Half of $-10$ is $-5$, giving $+25$; half of $6$ is $3$, giving $+9$. Add both to each side: $(x^2-10x+25)+(y^2+6y+9)=-18+25+9$.\nStep 3: $(x-5)^2+(y+3)^2=16$, so $r^2=16$ and $r=4$.\n\nCheck: the point $(9,-3)$ is distance $4$ from center $(5,-3)$, and $81+9-90+(-18)+18=0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\sqrt{7}$): completes only the $x$-square, getting $r^2=25-18=7$.\n* Choice C ($\\sqrt{52}$): leaves $+18$ on the left, getting $r^2=25+9+18=52$.\n* Choice D ($16$): reports $r^2$ as the radius instead of taking the square root.\n\n**Test Day Takeaway:** Complete the square for both variables, move the constant to the right, and remember the radius is $\\sqrt{r^2}$, not $r^2$.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A triangular sail for a model sailboat is a right triangle with legs of length $a$ and $a + 7$ and a hypotenuse of length $17$, all in inches. What is the perimeter, in inches, of the sail?",
  diagram: {
    type: "rightTriangle",
    params: {
      sideLabels: ["a", "a + 7", "17"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: stops one step early — sums only the two legs (8 + 15 = 23) without the hypotenuse
    { id: "A", text: "$23$" },
    // distractor: uses 7 as the second leg instead of a + 7 = 15, getting 8 + 7 + 17 = 32
    { id: "B", text: "$32$" },
    { id: "C", text: "$40$" },
    // distractor: double-counts the leg a, computing 8 + 15 + 17 + 8 = 48
    { id: "D", text: "$48$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Hypotenuse $17$ with legs differing by $7$ is the $8$-$15$-$17$ triple, so $a=8$ and $a+7=15$. Perimeter $=8+15+17=40$.\n\n**The Full Solution:**\nStep 1: Apply the Pythagorean theorem: $a^2+(a+7)^2=17^2$.\nStep 2: Expand and simplify: $2a^2+14a+49=289\\Rightarrow 2a^2+14a-240=0\\Rightarrow a^2+7a-120=0$.\nStep 3: Factor: $(a-8)(a+15)=0$, so $a=8$ (rejecting the negative root). Then $a+7=15$.\nStep 4: Perimeter $=8+15+17=40$.\n\nCheck: $8^2+15^2=64+225=289=17^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($23$): adds only the two legs ($8+15$) and forgets the hypotenuse.\n* Choice B ($32$): uses $7$ as the second leg instead of $a+7=15$.\n* Choice D ($48$): double-counts leg $a$, adding $8+15+17+8$.\n\n**Test Day Takeaway:** When the hypotenuse is given and the legs differ by a fixed amount, check the common triples ($3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$) before grinding the quadratic.",
  skills: ["triangles", "right-triangles", "area"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the line $y = -2x + 5$ intersects the parabola $y = x^2 + 6x + c$ at exactly one point. What is the value of $c$?",
  correctAnswer: "21",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $21$.**\n\n**The Fast Way (~30s):** Set the curves equal: $x^2+6x+c=-2x+5\\Rightarrow x^2+8x+(c-5)=0$. One intersection means discriminant $=0$: $64-4(c-5)=0\\Rightarrow c-5=16\\Rightarrow c=21$.\n\n**The Full Solution:**\nStep 1: Set the parabola equal to the line: $x^2+6x+c=-2x+5$.\nStep 2: Rearrange into one quadratic: $x^2+8x+(c-5)=0$.\nStep 3: A single intersection requires discriminant zero: $8^2-4(1)(c-5)=0$.\nStep 4: $64-4c+20=0\\Rightarrow 84=4c\\Rightarrow c=21$.\n\nCheck at $c=21$: $x^2+8x+16=(x+4)^2=0$, a double root at $x=-4$, with $y=-2(-4)+5=13$. One contact point $(-4,13)$. $\\checkmark$\n\n**Common Mistakes:** Mishandling the sign when moving $-2x+5$ across (writing $c+5$ instead of $c-5$); or dropping the negative in $-4(c-5)$ and getting $64+4c-20=0$.\n\n**Test Day Takeaway:** A line is tangent to a parabola exactly when the combined equation, written as one quadratic in $x$, has discriminant $0$.",
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
// Wavy flow (frozen): M[1] E[2,3] M[4,5] H[6,7] M[8] H[9] M[10] E[11] H[12,13,14] M[15] H[16,17,18] M[19] H[20,21,22].
// Distribution: E=3 (q2,q3,q11) / M=7 (q1,q4,q5,q8,q10,q15,q19) / H=12 (q6,q7,q9,q12,q13,q14,q16,q17,q18,q20,q21,q22).
// Official-calibration recreation (2026-09-01): all content re-authored fresh;
// slot metadata and pattern slugs frozen. Q1-5 warm-ups each carry 2+ steps or
// a trap (scale-the-difference, intercept-vs-slope, equal-constants decoy,
// f(a)-f(b) != f(a-b), rational-zero denominator check).

{
  id: 1,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A food-truck operator surveyed $500$ randomly selected attendees at a street festival, asking which of two proposed menu items they would order. The table shows the results. If $6{,}000$ festival attendees in total are expected to order one of the two items, by how many orders is the taco bowl expected to exceed the rice bowl?",
  diagram: {
    type: "dataTable",
    params: {
      headers: ["Menu item", "Number of attendees"],
      rows: [
        ["Taco bowl", "320"],
        ["Rice bowl", "180"]
      ]
    }
  },
  choices: [
    // distractor: stops one step early — reports the raw sample difference 320 - 180 = 140 without scaling
    { id: "A", text: "$140$" },
    { id: "B", text: "$1{,}680$" },
    // distractor: wrong base — scales only the taco-bowl count (320 x 12) instead of the difference
    { id: "C", text: "$3{,}840$" },
    // distractor: wrong base — reports the total projected orders instead of the margin
    { id: "D", text: "$6{,}000$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The festival crowd is $\\frac{6{,}000}{500}=12$ times the sample, so scale the sample margin: $(320-180)\\times 12=140\\times 12=1{,}680$.\n\n**The Full Solution:**\nStep 1: Find the scale factor from sample to population: $\\frac{6{,}000}{500}=12$.\nStep 2: The sample margin is $320-180=140$ orders.\nStep 3: Scale the margin by the same factor: $140\\times 12=1{,}680$.\n\nConfirm by scaling each item: taco bowl $320\\times 12=3{,}840$, rice bowl $180\\times 12=2{,}160$, difference $=1{,}680$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($140$): gives the raw sample margin without scaling to the full crowd.\n* Choice C ($3{,}840$): scales only the taco-bowl count and reports that as the margin.\n* Choice D ($6{,}000$): reports the total projected orders instead of the difference.\n\n**Test Day Takeaway:** To project a difference onto a larger group, multiply the sample difference by the population-to-sample ratio — don't stop at the raw counts.",
  skills: ["ratios", "proportional-reasoning", "data-analysis"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A maple sugarhouse has been adding taps to its sugarbush for several years. The function $s(t) = 6.5t + 48$ approximates the sugarhouse's syrup production, in liters per season, after $t$ years of expansion. Which statement is the best interpretation of the $y$-intercept of the graph of $y = s(t)$ in the $ty$-plane in this context?",
  choices: [
    { id: "A", text: "When the expansion began, the sugarhouse produced about $48$ liters of syrup per season." },
    // distractor: confuses y-intercept (initial value) with slope (rate)
    { id: "B", text: "Production increases by about $48$ liters per season each year." },
    // distractor: swaps slope and intercept — uses the slope magnitude as the starting value
    { id: "C", text: "When the expansion began, the sugarhouse produced about $6.5$ liters of syrup per season." },
    // distractor: combines both confusions — ignores the +48 and treats the start as zero
    { id: "D", text: "Production increases by about $6.5$ liters per season each year, starting from zero." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Interpret Y-Intercept in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The $y$-intercept is $s(0)=6.5(0)+48=48$. At $t=0$ (when the expansion began) production was about $48$ liters per season.\n\n**The Full Solution:**\nStep 1: For $s(t)=mt+b$, the $y$-intercept is $b$, the output at $t=0$. Here $b=48$.\nStep 2: $t$ counts years of expansion, so $t=0$ is when the expansion began.\nStep 3: Therefore seasonal production at the start was about $48$ liters, which is Choice A.\n\nCheck: $s(0)=48$ and $s(1)=54.5$ — the $6.5$ liters gained per year is the slope, not the intercept. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: attaches the yearly-rate role to $48$, but the question asks about the intercept.\n* Choice C: uses the slope value $6.5$ as the starting production.\n* Choice D: ignores the $+48$ and treats the start as zero.\n\n**Test Day Takeaway:** The $y$-intercept is the value at input $0$ — the starting point in the story. The slope is the rate of change per unit.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "How many solutions does the equation $6(x - 2) = -3(x + 4)$ have?",
  choices: [
    // distractor: applies inverse operation — believes the variable terms cancel, leaving a false statement
    { id: "A", text: "Zero" },
    { id: "B", text: "Exactly one" },
    // distractor: off-by-one — treats the single linear equation as quadratic-like
    { id: "C", text: "Exactly two" },
    // distractor: sees the matching constants (-12 on each side) and assumes the equation is an identity
    { id: "D", text: "Infinitely many" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Linear Equation Solution Count**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Distribute both sides: $6x - 12 = -3x - 12$. The constants match, but the $x$-terms do not. Move them together: $9x = 0$, so $x = 0$ is the one and only solution.\n\n**The Full Solution:**\nStep 1: Distribute. $6(x - 2) = 6x - 12$ and $-3(x + 4) = -3x - 12$, so the equation is $6x - 12 = -3x - 12$.\nStep 2: Add $3x$ to both sides and add $12$ to both sides: $9x = 0$.\nStep 3: Divide by $9$: $x = 0$. One value works, so there is exactly one solution.\n\nThe $x$-coefficients $6$ and $-3$ are different, so the two sides describe lines of different slopes — they cross at exactly one point. The matching constants ($-12$) are a decoy.\n\n**Why the wrong answers are tempting:**\n* Choice A (zero): assumes the $x$-terms cancel and leave a false statement; they don't cancel, since $6 \\neq -3$.\n* Choice C (exactly two): a linear equation can never have two solutions.\n* Choice D (infinitely many): the equal constants look like an identity, but that requires both sides to be completely identical, including the $x$-coefficients.\n\n**Test Day Takeaway:** Distribute first, then compare. Different $x$-coefficients $\\Rightarrow$ one solution; identical sides $\\Rightarrow$ infinitely many; same $x$-term but different constants $\\Rightarrow$ no solution.",
  skills: ["linear-equations", "solving-equations"]
},
{
  id: 4,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The function $f$ is defined by $f(x) = 5(2)^x$. What is the value of $f(6) - f(4)$?",
  correctAnswer: "240",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $240$.**\n\n**The Fast Way (~15s):** Evaluate each output separately: $f(6) = 5 \\cdot 2^6 = 320$ and $f(4) = 5 \\cdot 2^4 = 80$. The difference is $320 - 80 = 240$.\n\n**The Full Solution:**\nStep 1: $f(6) = 5(2)^6 = 5 \\cdot 64 = 320$.\nStep 2: $f(4) = 5(2)^4 = 5 \\cdot 16 = 80$.\nStep 3: $f(6) - f(4) = 320 - 80 = 240$.\n\n**Common Mistakes:** Computing $f(6 - 4) = f(2) = 5 \\cdot 4 = 20$ (subtracting the inputs instead of the outputs); dropping the coefficient $5$ and reporting $2^6 - 2^4 = 48$.\n\n**Test Day Takeaway:** $f(a) - f(b)$ is not $f(a - b)$. Evaluate each value of the function on its own, then subtract.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A function $f$ is defined by $f(x) = \\dfrac{3x - 12}{x + 5}$. For what value of $x$ is $f(x) = 0$?",
  choices: [
    // distractor: applies inverse operation — gives the value that makes the denominator 0
    { id: "A", text: "$-5$" },
    // distractor: sign slip — solves 3x + 12 = 0 instead of 3x - 12 = 0
    { id: "B", text: "$-4$" },
    { id: "C", text: "$4$" },
    // distractor: wrong base — solves 3x - 12 = x + 5 instead of 3x - 12 = 0
    { id: "D", text: "$\\dfrac{17}{2}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** A fraction equals $0$ only when its numerator is $0$ (and the denominator is not). Set $3x - 12 = 0 \\Rightarrow x = 4$. Check the denominator: $4 + 5 = 9 \\neq 0$. $\\checkmark$\n\n**The Full Solution:**\nStep 1: Set $f(x) = 0$: $\\dfrac{3x - 12}{x + 5} = 0$.\nStep 2: A quotient is zero exactly when its numerator is zero, so $3x - 12 = 0 \\Rightarrow x = 4$.\nStep 3: Confirm the denominator is nonzero there: $4 + 5 = 9 \\neq 0$, so $x = 4$ is valid.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): sets the denominator to zero, which makes $f$ undefined, not equal to $0$.\n* Choice B ($-4$): a sign slip, solving $3x + 12 = 0$ instead of $3x - 12 = 0$.\n* Choice D ($\\frac{17}{2}$): solves $3x - 12 = x + 5$ (setting numerator equal to denominator) instead of setting the numerator to $0$.\n\n**Test Day Takeaway:** A rational expression equals zero when the numerator is zero and the denominator is not. Solve the top, then check the bottom.",
  skills: ["function-interpretation", "solving-equations"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For a positive integer constant $b$, which of the following expressions has a factor of $x + 2b$?",
  choices: [
    // distractor: middle coefficient 11 gives (11 - 7)/6, not an integer b
    { id: "A", text: "$3x^2 + 11x + 14b$" },
    { id: "B", text: "$3x^2 + 13x + 14b$" },
    // distractor: middle coefficient 17 gives (17 - 7)/6, not an integer b
    { id: "C", text: "$3x^2 + 17x + 14b$" },
    // distractor: middle coefficient 21 gives (21 - 7)/6, not an integer b
    { id: "D", text: "$3x^2 + 21x + 14b$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Factoring Analysis with Parameters**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** If $x + 2b$ is a factor of $3x^2 + kx + 14b$, the other factor must be $3x + 7$ so the constant term comes out to $2b \\cdot 7 = 14b$. Then the middle coefficient is $k = 7 + 6b$. Only $13 = 7 + 6(1)$ gives a positive integer $b = 1$.\n\n**The Full Solution:**\nStep 1: Write the factorization as $(x + 2b)(3x + c)$ to get the leading $3x^2$.\nStep 2: Expand: $(x + 2b)(3x + c) = 3x^2 + (c + 6b)x + 2bc$.\nStep 3: Match the constant term to $14b$: $2bc = 14b \\Rightarrow c = 7$.\nStep 4: So the middle coefficient is $k = c + 6b = 7 + 6b$, meaning $b = \\dfrac{k - 7}{6}$ must be a positive integer.\n* Choice A, $k = 11$: $b = \\dfrac{4}{6}$ — not an integer.\n* Choice B, $k = 13$: $b = \\dfrac{6}{6} = 1$ $\\checkmark$.\n* Choice C, $k = 17$: $b = \\dfrac{10}{6}$ — not an integer.\n* Choice D, $k = 21$: $b = \\dfrac{14}{6}$ — not an integer.\n\n**Why the wrong answers are tempting:**\n* Choice A: $11$ does not fit the form $7 + 6b$ for any integer $b$.\n* Choice C: $17$ is close but gives $b = \\dfrac{10}{6}$, not whole.\n* Choice D: $21$ looks divisible-friendly but gives $b = \\dfrac{14}{6}$, not whole.\n\n**Test Day Takeaway:** When a binomial with a parameter is a factor, fix the cofactor's constant from the constant term, then force the resulting middle coefficient to produce a valid integer parameter.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = x^3 - 9x^2 + 23x - 15$. It is known that $f(1) = 0$. What is the sum of the other two zeros of $f$?",
  correctAnswer: "8",
  explanation: "**SAT Pattern: Factoring a Cubic to Find Zeros**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~25s):** Since $f(1) = 0$, $(x - 1)$ is a factor. Dividing gives $f(x) = (x - 1)(x^2 - 8x + 15) = (x - 1)(x - 3)(x - 5)$. The other two zeros are $3$ and $5$, which sum to $8$.\n\n**The Full Solution:**\nStep 1: $f(1) = 0$ means $(x - 1)$ divides $f$. Use synthetic division with $1$ on coefficients $1, -9, 23, -15$: bring down $1$; $-9 + 1 = -8$; $23 + (-8) = 15$; $-15 + 15 = 0$.\nStep 2: The quotient is $x^2 - 8x + 15 = (x - 3)(x - 5)$.\nStep 3: The three zeros are $1$, $3$, $5$. The two other than the known root sum to $3 + 5 = 8$.\n\n**Common Mistakes:** Reporting $9$, the sum of all three zeros, instead of just the other two; for the quadratic factor $x^2 - 8x + 15$, Vieta's gives a root sum of $8$ directly — exactly what the question wants.\n\n**Test Day Takeaway:** When one root is known, divide it out to reach a quadratic, then read its root sum as $-\\dfrac{b}{a}$.",
  skills: ["polynomial-operations", "factoring"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The function $g$ is defined by $g(x) = 3x^2 - 12x + 17$. What is the minimum value of $g(x)$?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~20s):** The minimum of $g(x) = 3x^2 - 12x + 17$ sits at $x = -\\dfrac{b}{2a} = -\\dfrac{-12}{6} = 2$. Then $g(2) = 3(4) - 24 + 17 = 5$.\n\n**The Full Solution:**\nStep 1: $a = 3 > 0$, so the parabola opens up and its lowest point is the vertex.\nStep 2: Complete the square: $g(x) = 3(x^2 - 4x) + 17 = 3(x^2 - 4x + 4) + 17 - 12 = 3(x - 2)^2 + 5$.\nStep 3: Since $3(x - 2)^2 \\geq 0$, the smallest value of $g$ is $5$, reached at $x = 2$.\n\n**Common Mistakes:** Forgetting to balance the $+4$ inside the parentheses with $-3 \\cdot 4 = -12$ outside when completing the square; reporting $17$ (the $y$-intercept) instead of the minimum value; reporting $2$ (the input at the vertex) instead of the output.\n\n**Test Day Takeaway:** For $ax^2 + bx + c$ with $a > 0$, the minimum occurs at $x = -\\dfrac{b}{2a}$; substitute back to read the minimum value as the $y$-coordinate of the vertex.",
  skills: ["vertex-form", "quadratic-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A function $f$ satisfies $f(x) = f(x + 6)$ for all real numbers $x$. If $f(2) = 9$ and $f(5) = 4$, what is the value of $f(2) + f(14) + f(26)$?",
  choices: [
    // distractor: wrong base — reduces every input to 5 and uses f(5) = 4 for all three terms
    { id: "A", text: "$12$" },
    // distractor: off-by-period on two terms — lands two of the three inputs on f(5)
    { id: "B", text: "$17$" },
    // distractor: off-by-one — mixes up the period and gets one term wrong
    { id: "C", text: "$22$" },
    { id: "D", text: "$27$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The rule $f(x) = f(x + 6)$ makes $f$ periodic with period $6$. Step back by $6$s to land on $2$: $f(14) = f(8) = f(2) = 9$ and $f(26) = f(20) = f(14) = 9$. So the sum is $9 \\cdot 3 = 27$.\n\n**The Full Solution:**\nStep 1: $f(x) = f(x + 6)$ means shifting the input by any multiple of $6$ leaves the output unchanged — period $6$.\nStep 2: $f(2) = 9$ is given.\nStep 3: $f(14) = f(14 - 6) = f(8) = f(8 - 6) = f(2) = 9$.\nStep 4: $f(26) = f(26 - 12) = f(14) = 9$.\nStep 5: $f(2) + f(14) + f(26) = 9 + 9 + 9 = 27$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): reduces every input to $5$ and uses $f(5) = 4$ three times.\n* Choice B ($17$): lands two of the three inputs on $f(5) = 4$ through period miscounts.\n* Choice C ($22$): miscounts one reduction and lands one term on $f(5) = 4$.\n\n**Test Day Takeaway:** For a periodic function, reduce each input by whole periods until you reach an input whose value you already know.",
  skills: ["function-interpretation"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The function $h(t) = -16t^2 + 64t + 8$ models the height, in feet, of a model rocket $t$ seconds after it launches straight up. What is the maximum height, in feet, that the rocket reaches?",
  correctAnswer: "72",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $72$.**\n\n**The Fast Way (~20s):** The rocket peaks at the vertex time $t = -\\dfrac{b}{2a} = -\\dfrac{64}{-32} = 2$ seconds. Then $h(2) = -16(4) + 64(2) + 8 = -64 + 128 + 8 = 72$ feet.\n\n**The Full Solution:**\nStep 1: $a = -16 < 0$, so $h$ opens downward and the maximum height is the $y$-value of the vertex.\nStep 2: Find the vertex time: $t = -\\dfrac{b}{2a} = -\\dfrac{64}{2(-16)} = -\\dfrac{64}{-32} = 2$ seconds.\nStep 3: Substitute back: $h(2) = -16(2)^2 + 64(2) + 8 = -64 + 128 + 8 = 72$ feet.\n\n**Common Mistakes:** Reporting $2$ (the time of the peak) instead of the height; reporting $8$, the launch height at $t = 0$; stopping after finding $t$ without substituting it back.\n\n**Test Day Takeaway:** \"Maximum height\" asks for the output at the vertex. Find $t = -\\dfrac{b}{2a}$ first, then plug it back into $h(t)$.",
  skills: ["quadratic-equations", "vertex-form", "function-interpretation"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "easy",
  band: 3,
  question: "The dot plot shows the number of strikes a bowling team recorded in each of $12$ league matches. What is the range of the numbers of strikes for these $12$ matches?",
  diagram: {
    type: "dotPlot",
    params: {
      data: [
        { value: 3, count: 2 },
        { value: 4, count: 2 },
        { value: 6, count: 3 },
        { value: 7, count: 2 },
        { value: 9, count: 2 },
        { value: 11, count: 1 }
      ],
      xMin: 2, xMax: 12,
      xLabel: "Strikes per match"
    }
  },
  correctAnswer: "8",
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~10s):** Range = maximum $-$ minimum $= 11 - 3 = 8$.\n\n**The Full Solution:**\nStep 1: The range is the difference between the largest and smallest values in the data set.\nStep 2: Reading the dot plot, the largest value with a dot is $11$ and the smallest is $3$.\nStep 3: Range $= 11 - 3 = 8$ strikes.\n\n**Common Mistakes:** Reporting the maximum ($11$) or the minimum ($3$) alone instead of their difference; counting the dots (the frequencies) instead of reading the values on the number line.\n\n**Test Day Takeaway:** Range is one subtraction: scan the dot plot for the leftmost and rightmost dots, then subtract their values.",
  skills: ["statistics", "data-analysis"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$$3x + 5y = 1$$\n$$ax + by = 1$$\nIn the given pair of equations, $a$ and $b$ are nonzero constants, and the graphs of the two equations are perpendicular lines in the $xy$-plane. Which of the following pairs of equations also represents a pair of perpendicular lines?",
  choices: [
    { id: "A", text: "$6x + 5y = 1$ and $ax + 2by = 1$" },
    // distractor: applies inverse operation — flips the sign on the b term, making the slope product +1
    { id: "B", text: "$6x + 5y = 1$ and $ax - 2by = 1$" },
    // distractor: wrong base — doubles a instead of b, so the second slope is off by a factor of 4
    { id: "C", text: "$6x + 5y = 1$ and $2ax + by = 1$" },
    // distractor: stops one step early — negates the original first equation but leaves the second unchanged
    { id: "D", text: "$3x - 5y = 1$ and $ax + by = 1$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** Perpendicular slopes multiply to $-1$. The line $3x + 5y = 1$ has slope $-\\dfrac{3}{5}$, so its partner $ax + by = 1$ has slope $\\dfrac{5}{3}$, meaning $-\\dfrac{a}{b} = \\dfrac{5}{3}$. The new line $6x + 5y = 1$ has slope $-\\dfrac{6}{5}$, so its partner needs slope $\\dfrac{5}{6}$. Doubling $b$ halves the magnitude: $ax + 2by = 1$ has slope $-\\dfrac{a}{2b} = \\dfrac{5}{6}$. $\\checkmark$\n\n**The Full Solution:**\nStep 1: From the given pair, slope of $3x + 5y = 1$ is $-\\dfrac{3}{5}$ and slope of $ax + by = 1$ is $-\\dfrac{a}{b}$. Perpendicularity gives $\\left(-\\dfrac{3}{5}\\right)\\left(-\\dfrac{a}{b}\\right) = -1$, so $-\\dfrac{a}{b} = \\dfrac{5}{3}$.\nStep 2: Check Choice A. The line $6x + 5y = 1$ has slope $-\\dfrac{6}{5}$. The line $ax + 2by = 1$ has slope $-\\dfrac{a}{2b} = \\dfrac{1}{2}\\left(-\\dfrac{a}{b}\\right) = \\dfrac{1}{2} \\cdot \\dfrac{5}{3} = \\dfrac{5}{6}$.\nStep 3: Product: $\\left(-\\dfrac{6}{5}\\right)\\left(\\dfrac{5}{6}\\right) = -1$, so the lines are perpendicular.\n\n**Why the wrong answers are tempting:**\n* Choice B: $ax - 2by = 1$ has slope $-\\dfrac{a}{-2b} = -\\dfrac{5}{6}$, so the product with $-\\dfrac{6}{5}$ is $+1$, not $-1$ — not perpendicular.\n* Choice C: $2ax + by = 1$ has slope $-\\dfrac{2a}{b} = \\dfrac{10}{3}$, nowhere near $\\dfrac{5}{6}$.\n* Choice D: changing $3x + 5y$ to $3x - 5y$ flips one slope but leaves the partner alone, so the product becomes $+1$.\n\n**Test Day Takeaway:** Turn perpendicularity into the slope-product $= -1$ condition, then track how scaling a coefficient scales the slope: doubling the $y$-coefficient halves the slope's magnitude.",
  skills: ["linear-equations", "slope", "coordinate-geometry"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The graph of the linear function $y = f(x) - 20$ is shown in the $xy$-plane. If $c$ and $d$ are positive constants, which equation could define $f$?",
  diagram: { type: "linearGraph", params: {
    slope: 3, yIntercept: -6,
    xRange: [-4, 4], yRange: [-14, 8],
    xTickInterval: 2, yTickInterval: 4, gridInterval: 1,
    label: "y = f(x) - 20"
  } },
  choices: [
    { id: "A", text: "$f(x) = d + cx$" },
    // distractor: misreads the slope as negative
    { id: "B", text: "$f(x) = d - cx$" },
    // distractor: forgets to undo the shift — keeps the graphed intercept's negative sign
    { id: "C", text: "$f(x) = -d + cx$" },
    // distractor: gets both the slope sign and the intercept sign wrong
    { id: "D", text: "$f(x) = -d - cx$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** The graphed line $y = f(x) - 20$ rises left to right (positive slope) and crosses at $y = -6$. Shifting down by $20$ does not change slope, so $f$ has the same positive slope $c$, and its intercept is $-6 + 20 = 14$, which is positive, so the constant is $+d$. That gives $f(x) = d + cx$.\n\n**The Full Solution:**\nStep 1: $y = f(x) - 20$ is $f$ shifted down $20$. Reading the graph: positive slope, $y$-intercept $-6$.\nStep 2: A vertical shift leaves slope unchanged, so $f$ also has positive slope — the $x$-coefficient is $c$ with $c > 0$.\nStep 3: Undo the shift on the intercept: $f$'s intercept is $-6 + 20 = 14$, which is positive, so the constant term is $d$ with $d > 0$.\nStep 4: Therefore $f(x) = d + cx$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($d - cx$): right intercept sign but uses a negative slope $-c$, contradicting the rising line.\n* Choice C ($-d + cx$): right slope sign but keeps a negative intercept $-d$, forgetting to add the shift back ($-6 + 20 = 14 > 0$).\n* Choice D ($-d - cx$): both signs wrong — negative slope and negative intercept.\n\n**Test Day Takeaway:** A vertical shift moves only the intercept, not the slope. Undo the shift on the read-off intercept, keep the slope, and match the signs to $c, d > 0$.",
  skills: ["linear-functions", "function-interpretation", "coordinate-geometry"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A rectangular stained-glass pane is inscribed in a circular window frame so that all four corners of the pane touch the circle. The diagonal of the pane is twice the length of its shorter side, and the pane's area is $900\\sqrt{3}$ square inches. What is the diameter, in inches, of the circular frame?",
  correctAnswer: "60",
  explanation: "**SAT Pattern: Special Right Triangle — 30-60-90**\n\n**The correct answer is $60$.**\n\n**The Fast Way (~45s):** \"Diagonal twice the shorter side\" makes a $30$-$60$-$90$ triangle, so the sides are $s$ and $s\\sqrt{3}$. Area $= s \\cdot s\\sqrt{3} = s^2\\sqrt{3} = 900\\sqrt{3} \\Rightarrow s^2 = 900 \\Rightarrow s = 30$. The diagonal is the diameter: $2s = 60$.\n\n**The Full Solution:**\nStep 1: Let the shorter side be $s$, so the diagonal is $2s$. By the Pythagorean theorem the longer side is $\\sqrt{(2s)^2 - s^2} = \\sqrt{3s^2} = s\\sqrt{3}$, the $30$-$60$-$90$ ratio $s : s\\sqrt{3} : 2s$.\nStep 2: Area $= s \\cdot s\\sqrt{3} = s^2\\sqrt{3}$. Set equal to the given area: $s^2\\sqrt{3} = 900\\sqrt{3} \\Rightarrow s^2 = 900 \\Rightarrow s = 30$.\nStep 3: A rectangle inscribed in a circle has its diagonal as a diameter, so the diameter $= 2s = 2(30) = 60$ inches.\n\n**Common Mistakes:** Reporting $s = 30$ (the shorter side) instead of the diameter $2s = 60$; forgetting that the diagonal of an inscribed rectangle equals the circle's diameter.\n\n**Test Day Takeaway:** \"Diagonal is twice the short side\" signals a $30$-$60$-$90$ triangle, and for any rectangle inscribed in a circle the diagonal is the diameter.",
  skills: ["geometry", "right-triangles", "circles"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $f(x) = x^2 + 2$ and $g(x) = 2x - 5$, what is the value of $f(g(4))$?",
  choices: [
    { id: "A", text: "$11$" },
    // distractor: stops one step early — computes f(4) = 18 instead of f(g(4))
    { id: "B", text: "$18$" },
    // distractor: adds f(4) and g(4) instead of composing
    { id: "C", text: "$21$" },
    // distractor: reverses the order, computing g(f(4)) instead of f(g(4))
    { id: "D", text: "$31$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Work inside out. $g(4) = 2(4) - 5 = 3$, then $f(3) = 3^2 + 2 = 11$.\n\n**The Full Solution:**\nStep 1: Evaluate the inner function: $g(4) = 2(4) - 5 = 8 - 5 = 3$.\nStep 2: Feed that into the outer function: $f(g(4)) = f(3) = 3^2 + 2 = 11$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($18$): computes $f(4) = 4^2 + 2 = 18$, skipping the inner $g$ entirely.\n* Choice C ($21$): adds $f(4) + g(4) = 18 + 3 = 21$ instead of composing.\n* Choice D ($31$): reverses the order, computing $g(f(4)) = g(18) = 2(18) - 5 = 31$ instead of $f(g(4))$.\n\n**Test Day Takeaway:** For $f(g(x))$, evaluate the inside function first, then substitute its output into the outside function. Never add or multiply the two.",
  skills: ["function-interpretation"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A bag contains $5$ tiles, exactly one of which is marked with a star. A tile is selected at random and then returned to the bag, and this process is repeated until $3$ selections have been made. What is the probability that exactly $2$ of the $3$ selections show the star?",
  choices: [
    // distractor: stops one step early — uses (1/5)^2(4/5) for one arrangement, forgetting the 3 positions
    { id: "A", text: "$\\dfrac{4}{125}$" },
    // distractor: applies inverse operation — uses (1/5)^2 alone, ignoring the non-star draw and the count
    { id: "B", text: "$\\dfrac{1}{25}$" },
    { id: "C", text: "$\\dfrac{12}{125}$" },
    // distractor: wrong base — swaps the success probability, computing 3(4/5)^2(1/5)
    { id: "D", text: "$\\dfrac{48}{125}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Independent Events Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Use the binomial formula with $p = \\frac{1}{5}$ for the star: $\\binom{3}{2}\\left(\\frac{1}{5}\\right)^2\\left(\\frac{4}{5}\\right) = 3 \\cdot \\frac{1}{25} \\cdot \\frac{4}{5} = \\frac{12}{125}$.\n\n**The Full Solution:**\nStep 1: With replacement, each selection is independent: star with probability $\\frac{1}{5}$, non-star with probability $\\frac{4}{5}$.\nStep 2: A single arrangement with $2$ stars and $1$ non-star has probability $\\left(\\frac{1}{5}\\right)^2\\left(\\frac{4}{5}\\right) = \\frac{4}{125}$.\nStep 3: There are $\\binom{3}{2} = 3$ ways to choose which selection is the non-star one.\nStep 4: Total $= 3 \\cdot \\frac{4}{125} = \\frac{12}{125}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{4}{125}$): stops at one arrangement and forgets to multiply by the $3$ positions.\n* Choice B ($\\frac{1}{25}$): uses only $\\left(\\frac{1}{5}\\right)^2$, ignoring the non-star draw and the count of arrangements.\n* Choice D ($\\frac{48}{125}$): swaps the success probability, computing the chance of exactly $2$ NON-star draws.\n\n**Test Day Takeaway:** For \"exactly $k$ successes in $n$ independent trials,\" use $\\binom{n}{k}\\,p^k(1-p)^{n-k}$. The binomial coefficient counts the arrangements you would otherwise miss.",
  skills: ["probability"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table shows three values of $x$ and their corresponding values of $g(x)$, where $g(x) = \\dfrac{f(x)}{x+6}$ and $f$ is a linear function. What is the $y$-intercept of the graph of $y = f(x)$?",
  diagram: {
    type: "dataTable",
    params: {
      headers: ["x", "g(x)"],
      rows: [
        ["-26", "3"],
        ["-11", "0"],
        ["14", "5"]
      ]
    }
  },
  choices: [
    // distractor: applies inverse operation — uses the zero input x = -11 as the intercept value
    { id: "A", text: "$(0,\\,-11)$" },
    // distractor: stops one step early — reports the recovered slope (4) as the intercept
    { id: "B", text: "$(0,\\,4)$" },
    { id: "C", text: "$(0,\\,44)$" },
    // distractor: wrong base — reports an f-value from the table without fitting the full line
    { id: "D", text: "$(0,\\,100)$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** Since $g(x) = \\frac{f(x)}{x+6}$, recover $f(x) = g(x)(x+6)$: $f(-26) = 3(-20) = -60$ and $f(-11) = 0$. Slope $= \\frac{0-(-60)}{-11-(-26)} = \\frac{60}{15} = 4$, so $f(x) = 4(x+11)$ and $f(0) = 44$.\n\n**The Full Solution:**\nStep 1: Multiply back to get $f$-values: $f(-26) = 3(-26+6) = 3(-20) = -60$, $f(-11) = 0(-11+6) = 0$, and $f(14) = 5(14+6) = 5(20) = 100$.\nStep 2: Fit the line through $(-26, -60)$ and $(-11, 0)$: slope $= \\frac{0-(-60)}{-11-(-26)} = \\frac{60}{15} = 4$.\nStep 3: Point-slope from $(-11, 0)$: $f(x) = 4(x+11)$. Check $(14, 100)$: $4(25) = 100$. $\\checkmark$\nStep 4: The $y$-intercept is $f(0) = 4(11) = 44$, the point $(0, 44)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(0, -11)$): uses the zero-input $x = -11$ as the intercept value.\n* Choice B ($(0, 4)$): reports the slope $4$ as the intercept.\n* Choice D ($(0, 100)$): reports the recovered $f$-value at $x = 14$ without completing the line fit.\n\n**Test Day Takeaway:** When $g(x) = \\frac{f(x)}{x+c}$, multiply both sides by $(x+c)$ to recover $f$-values, fit the line through them, then read $f(0)$ for the $y$-intercept.",
  skills: ["linear-functions", "rational-functions"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A summer camp has $240$ campers. Sign-up records show that $130$ campers chose canoeing, $105$ chose archery, and $185$ chose at least one of the two activities. How many campers chose both canoeing and archery?",
  correctAnswer: "50",
  explanation: "**SAT Pattern: Inclusion-Exclusion Principle**\n\n**The correct answer is $50$.**\n\n**The Fast Way (~20s):** Inclusion-exclusion gives $|C \\cup A| = |C| + |A| - |C \\cap A|$, so $185 = 130 + 105 - |C \\cap A| \\Rightarrow |C \\cap A| = 50$.\n\n**The Full Solution:**\nStep 1: Let $C$ be campers who chose canoeing and $A$ those who chose archery. The \"at least one\" count is the union: $|C \\cup A| = 185$.\nStep 2: Apply inclusion-exclusion: $|C \\cup A| = |C| + |A| - |C \\cap A|$.\nStep 3: Substitute: $185 = 130 + 105 - |C \\cap A| = 235 - |C \\cap A|$, so $|C \\cap A| = 50$.\nStep 4: Check: only canoeing $= 130 - 50 = 80$, only archery $= 105 - 50 = 55$, both $= 50$; total $80 + 55 + 50 = 185$. $\\checkmark$\n\n**Common Mistakes:** Reporting $240 - 185 = 55$ (the number who chose neither activity, not both); or adding $130 + 105 = 235$ and forgetting to subtract the overlap.\n\n**Test Day Takeaway:** $|A \\cup B| = |A| + |B| - |A \\cap B|$. When the union is given, solve algebraically for the unknown intersection.",
  skills: ["probability"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "After the quantity $x$ is decreased by $75\\%$, the result is $90$. What is the value of $x$?",
  choices: [
    // distractor: applies inverse operation — decreases 90 by 75% instead of reversing the decrease
    { id: "A", text: "$22.5$" },
    // distractor: wrong base — divides 90 by the removed fraction 0.75 instead of the retained 0.25
    { id: "B", text: "$120$" },
    // distractor: treats it as an increase and multiplies 90 by 1.75
    { id: "C", text: "$157.5$" },
    { id: "D", text: "$360$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Decreasing by $75\\%$ keeps $1 - 0.75 = 0.25$ of $x$, so $0.25x = 90 \\Rightarrow x = \\frac{90}{0.25} = 360$.\n\n**The Full Solution:**\nStep 1: A $75\\%$ decrease leaves $25\\%$: $x - 0.75x = 0.25x$.\nStep 2: Set equal to the result: $0.25x = 90$.\nStep 3: Solve: $x = \\frac{90}{0.25} = 360$.\nStep 4: Check: $360 - 0.75(360) = 360 - 270 = 90$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($22.5$): decreases $90$ by $75\\%$ ($90 - 67.5$) instead of reversing the decrease.\n* Choice B ($120$): divides by the removed fraction, $\\frac{90}{0.75}$, instead of the retained $0.25$.\n* Choice C ($157.5$): treats it as an increase and computes $90 \\times 1.75$.\n\n**Test Day Takeaway:** \"Decrease by $p\\%$\" means multiply by $1 - \\frac{p}{100}$. To undo it, divide the result by that retained factor, not by the percent removed.",
  skills: ["percent-change", "percent-word-problems"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  question: "The function $f(x) = 400(0.8)^x$ models the charge, in microcoulombs, remaining in a capacitor $x$ seconds after it begins discharging. After how many complete seconds will the charge first drop below $150$ microcoulombs?\n\n(Use: $\\log(0.375) \\approx -0.4260$ and $\\log(0.8) \\approx -0.0969$.)",
  choices: [
    // distractor: off-by-one — rounds 4.40 down to 4, but at x = 4 the charge is still above 150
    { id: "A", text: "$4$" },
    { id: "B", text: "$5$" },
    // distractor: applies inverse operation — divides the logs in the wrong order
    { id: "C", text: "$6$" },
    // distractor: wrong base — miscalculates the logarithm ratio
    { id: "D", text: "$7$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Solve $400(0.8)^x < 150 \\Rightarrow (0.8)^x < 0.375 \\Rightarrow x > \\frac{\\log(0.375)}{\\log(0.8)} \\approx \\frac{-0.4260}{-0.0969} \\approx 4.40$. The first complete second is $5$.\n\n**The Full Solution:**\nStep 1: Set up the inequality: $400(0.8)^x < 150$, so $(0.8)^x < 0.375$.\nStep 2: Take logs: $x\\log(0.8) < \\log(0.375)$.\nStep 3: Since $\\log(0.8) < 0$, dividing flips the inequality: $x > \\frac{\\log(0.375)}{\\log(0.8)} = \\frac{-0.4260}{-0.0969} \\approx 4.40$.\nStep 4: The charge first drops below $150$ at the next whole second, $x = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): rounds $4.40$ down, but at $x = 4$ the charge is $400(0.8)^4 \\approx 164 > 150$.\n* Choice C ($6$): overshoots, rounding past the first crossing.\n* Choice D ($7$): miscomputes the log ratio and lands far too high.\n\n**Test Day Takeaway:** When you divide an inequality by a negative log, flip the direction. For \"first drops below,\" round the boundary UP to the next whole value.",
  skills: ["exponential-functions", "solving-equations"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$$(x - 8)^2 + (y + 14)^2 = 25$$\n\nThe graph of the given equation is a circle in the $xy$-plane. The point $(a, b)$ lies on the circle. Which of the following is a possible value for $a$?",
  choices: [
    // distractor: applies inverse operation — uses the center y-coordinate as an x-value
    { id: "A", text: "$-14$" },
    // distractor: off-by-one — lands one unit past the left edge of the x-range
    { id: "B", text: "$2$" },
    { id: "C", text: "$12$" },
    // distractor: off-by-one — lands one unit past the right edge of the x-range
    { id: "D", text: "$14$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Circle Equation — Center and Radius**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Center $(8, -14)$, radius $\\sqrt{25} = 5$. Any $x$ on the circle satisfies $8 - 5 \\le x \\le 8 + 5$, i.e. $3 \\le x \\le 13$. Only $12$ fits.\n\n**The Full Solution:**\nStep 1: Read off center $(8, -14)$ and radius $\\sqrt{25} = 5$ from the standard form.\nStep 2: The $x$-coordinate of any point on the circle stays within one radius of the center's $x$: $8 - 5 \\le x \\le 8 + 5$, so $3 \\le x \\le 13$.\nStep 3: Test the choices: $-14$ and $2$ fall below $3$; $12$ lies in $[3, 13]$ $\\checkmark$; $14$ exceeds $13$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-14$): uses the center's $y$-coordinate as an $x$-value.\n* Choice B ($2$): just one unit past the left edge $3$.\n* Choice D ($14$): just one unit past the right edge $13$.\n\n**Test Day Takeaway:** For a point on a circle with center $(h, k)$ and radius $r$, the $x$-coordinate is trapped in $h - r \\le x \\le h + r$. Build that interval and screen the choices.",
  skills: ["circle-equations", "geometry"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Two identical rectangular prisms each have a height of $60$ centimeters (cm). The base of each prism is a square, and the surface area of each prism is $K$ cm$^2$. If the prisms are glued together along a square base, the resulting prism has a surface area of $\\dfrac{21}{11}K$ cm$^2$. What is the side length, in cm, of each square base?",
  choices: [
    // distractor: drops a factor when setting up the equation, halving the side length
    { id: "A", text: "$6$" },
    { id: "B", text: "$12$" },
    // distractor: forgets to subtract the hidden base areas and overshoots the side length
    { id: "C", text: "$18$" },
    // distractor: misuses the height of 60 in the surface-area ratio
    { id: "D", text: "$24$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Composite Solid Surface Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~50s):** One prism: $K = 2s^2 + 240s$. Gluing two along a square base hides $2s^2$, giving $2K - 2s^2 = 2s^2 + 480s$. Set $2s^2 + 480s = \\frac{21}{11}(2s^2 + 240s)$ and solve: $s = 12$.\n\n**The Full Solution:**\nStep 1: Each prism has square base side $s$ and height $60$, so $K = 2s^2 + 4(s)(60) = 2s^2 + 240s$.\nStep 2: Gluing two prisms along a square base hides one base square from each, removing $2s^2$ from the doubled total: combined $= 2K - 2s^2 = 2(2s^2 + 240s) - 2s^2 = 2s^2 + 480s$.\nStep 3: Set this equal to $\\frac{21}{11}K$: $2s^2 + 480s = \\frac{21}{11}(2s^2 + 240s)$.\nStep 4: Multiply by $11$: $11(2s^2 + 480s) = 21(2s^2 + 240s)$, so $22s^2 + 5{,}280s = 42s^2 + 5{,}040s$.\nStep 5: Simplify: $240s = 20s^2 \\Rightarrow s = 12$.\n\nCheck: $K = 2(144) + 240(12) = 3{,}168$; combined $= 2(144) + 480(12) = 6{,}048 = \\frac{21}{11}(3{,}168)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): drops a factor of $2$ when setting up the equation, halving the side.\n* Choice C ($18$): forgets to subtract the hidden $2s^2$, overshooting the side length.\n* Choice D ($24$): misuses the height of $60$ in the surface-area ratio.\n\n**Test Day Takeaway:** When two solids are glued, the joined faces vanish — subtract their area from the doubled total before setting up the ratio.",
  skills: ["surface-area", "geometry"]
}
      ]
    }
  ]
};

export default practiceTest7;
