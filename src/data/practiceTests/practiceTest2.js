// Practice Test 2 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Round-7 recalibration (test 2): M1 lifted to band-3 ceiling on easy items,
// domain rebalanced to 7/6/5/4 (Q11 AdvMath→Geo-Trig cylinder volume,
// Q12 PSDA→Geo-Trig right-triangle trig). M2 hardened to 0E/6M/16H with
// band-6/7 ceilings on hard items.

export const practiceTest2 = {
  id: "practice-test-2",
  title: "Practice Test 2",
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
  question: "A survey found that $1{,}540$ students at a university take a foreign language. If this represents $44\\%$ of all students at the university, how many students attend the university in total?",
  choices: [
    // distractor: applies the percent forward: 1540 \cdot 0.44 = 677.6
    { id: "A", text: "$678$" },
    // distractor: divides by the complement 0.56 instead of 0.44
    { id: "B", text: "$2{,}750$" },
    { id: "C", text: "$3{,}500$" },
    // distractor: divides by 0.044 instead of 0.44 (decimal-place slip)
    { id: "D", text: "$35{,}000$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The $1{,}540$ students are $44\\%$ of the whole, so divide: total $= \\dfrac{1{,}540}{0.44} = 3{,}500$.\n\n**The Full Solution:**\nStep 1: Let $T$ be the total number of students. The given count is a percent of that total: $0.44 \\cdot T = 1{,}540$.\nStep 2: Divide both sides by $0.44$: $T = \\dfrac{1{,}540}{0.44} = 3{,}500$.\nStep 3: Check: $0.44 \\cdot 3{,}500 = 1{,}540$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($678$): multiplies $1{,}540 \\cdot 0.44 \\approx 678$ instead of dividing — that shrinks an already-partial count.\n* Choice B ($2{,}750$): divides by the complement $0.56$, treating $1{,}540$ as the students who do NOT take a language.\n* Choice D ($35{,}000$): divides by $0.044$ instead of $0.44$ — a decimal-place slip.\n\n**Test Day Takeaway:** When a percent of an unknown whole is given, divide the part by the percent written as a decimal to recover the whole.",
  skills: ["percents"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A classroom has paperback and hardcover books in a ratio of $5$ paperbacks to $3$ hardcovers. If there are $48$ books in total, how many paperbacks are there?",
  choices: [
    // distractor: picks the ratio number (5) directly
    { id: "A", text: "$5$" },
    // distractor: solves for hardcovers (3/8 of 48 = 18)
    { id: "B", text: "$18$" },
    { id: "C", text: "$30$" },
    // distractor: uses 5/3 as the fraction (off-by-one) — gives a value > 48
    { id: "D", text: "$80$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Paperbacks are $\\dfrac{5}{5+3} = \\dfrac{5}{8}$ of all books, so paperbacks $= \\dfrac{5}{8} \\cdot 48 = 30$.\n\n**The Full Solution:**\nStep 1: Write the parts as $5k$ paperbacks and $3k$ hardcovers.\nStep 2: The total is $5k + 3k = 8k = 48$, so $k = 6$.\nStep 3: Paperbacks $= 5k = 5 \\cdot 6 = 30$. Check: hardcovers $= 18$, and $30 + 18 = 48$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): reports the ratio number itself instead of scaling it to the total.\n* Choice B ($18$): solves for hardcovers ($\\dfrac{3}{8} \\cdot 48$) rather than paperbacks.\n* Choice D ($80$): uses $\\dfrac{5}{3} \\cdot 48$ — the part-to-part ratio instead of part-to-whole.\n\n**Test Day Takeaway:** With a part-to-part ratio and a known total, the fraction's denominator is the SUM of the ratio numbers, not a single part.",
  skills: ["ratios", "word-problems"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $\\dfrac{3y}{8} = \\dfrac{27}{4}$, what is the value of $y - 6$?",
  choices: [
    { id: "A", text: "$12$" },
    // distractor: stops at y = 18 (forgets the "minus 6" final step)
    { id: "B", text: "$18$" },
    // distractor: adds 6 instead of subtracting
    { id: "C", text: "$24$" },
    // distractor: leaves the answer at 3y = 54 instead of y
    { id: "D", text: "$54$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Cross-multiply $\\dfrac{3y}{8} = \\dfrac{27}{4}$ to get $12y = 216$, so $y = 18$. The question wants $y - 6 = 12$.\n\n**The Full Solution:**\nStep 1: Cross-multiply: $4 \\cdot 3y = 8 \\cdot 27 \\Rightarrow 12y = 216$.\nStep 2: Solve: $y = 18$.\nStep 3: The question asks for $y - 6$, not $y$: $18 - 6 = 12$. Check: $\\dfrac{3(18)}{8} = \\dfrac{54}{8} = \\dfrac{27}{4}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($18$): solves $y$ correctly but forgets to subtract $6$.\n* Choice C ($24$): adds $6$ to $y$ instead of subtracting.\n* Choice D ($54$): stops at $3y = 54$ without dividing by $3$.\n\n**Test Day Takeaway:** Re-read the final sentence before bubbling. The SAT often asks for a shifted expression like $y - 6$, not the variable itself.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The function $g(x) = 250 - 18x$ models the amount of water, in gallons, remaining in a tank $x$ hours after a drain is opened. According to this model, what is the amount of water, in gallons, that remains in the tank after $4$ hours?",
  choices: [
    // distractor: stops at 18 \cdot 4 = 72 — reports the amount drained, not the amount remaining
    { id: "A", text: "$72$" },
    { id: "B", text: "$178$" },
    // distractor: adds instead of subtracts: 250 + 18 \cdot 4 = 322 then off-by-one
    { id: "C", text: "$232$" },
    // distractor: sign flip — subtracts only one drain hour: 250 - 18 = 232 then mis-states
    { id: "D", text: "$268$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Evaluation in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $g(4) = 250 - 18(4) = 250 - 72 = 178$.\n\n**The Full Solution:**\nStep 1: In $g(x) = 250 - 18x$, the $250$ is the starting volume and $-18$ is the drain rate in gallons per hour.\nStep 2: Evaluate at $x = 4$: $g(4) = 250 - 18(4) = 250 - 72 = 178$ gallons.\n\n**Why the wrong answers are tempting:**\n* Choice A ($72$): reports the amount drained, $18(4) = 72$, instead of the amount remaining.\n* Choice C ($232$): subtracts only one hour's drain, $250 - 18 = 232$, instead of four.\n* Choice D ($268$): adds the drain instead of subtracting: $250 + 18 = 268$, ignoring the negative rate.\n\n**Test Day Takeaway:** In a function modeling change over time, the constant is the initial value and the variable's coefficient is the rate. \"Remaining\" is the model's output, not the amount drained.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A delivery service charges a flat fee of $\\$3$ per package plus $\\$5$ for each pound of weight. The total charge for a package weighing $w$ pounds is $\\$48$. What is the total charge, in dollars, for a package weighing $w + 4$ pounds?",
  choices: [
    // distractor: adds 4 dollars instead of 4 \cdot \$5 = \$20
    { id: "A", text: "$\\$52$" },
    // distractor: doubles the weight rate, using $\$10$ per extra pound
    { id: "B", text: "$\\$58$" },
    { id: "C", text: "$\\$68$" },
    // distractor: uses the $\$3$ fee as the per-pound rate ($48 + 4 \cdot \$3$)
    { id: "D", text: "$\\$60$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Each pound adds $\\$5$, so $4$ more pounds add $4 \\cdot \\$5 = \\$20$. The flat fee is unchanged, so the new total is $\\$48 + \\$20 = \\$68$.\n\n**The Full Solution:**\nStep 1: The charge is $5w + 3 = 48$, so $5w = 45$ and $w = 9$ pounds.\nStep 2: For $w + 4 = 13$ pounds: total $= 5(13) + 3 = 65 + 3 = \\$68$.\nStep 3: Shortcut check — you never needed $w$: adding $4$ pounds adds $4 \\cdot \\$5 = \\$20$, and $\\$48 + \\$20 = \\$68$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$52$): adds the $4$ pounds as $\\$4$ instead of $4 \\cdot \\$5 = \\$20$.\n* Choice B ($\\$58$): adds $\\$10$ for the extra weight, undercounting the per-pound rate.\n* Choice D ($\\$60$): uses the $\\$3$ flat fee as the per-pound rate: $\\$48 + 4 \\cdot \\$3 = \\$60$.\n\n**Test Day Takeaway:** Linear cost is (rate $\\times$ quantity) plus a fixed fee. Adding units changes only the rate-times-quantity part; the fixed fee never moves.",
  skills: ["word-problems", "solving-equations"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "\n\n| | Passed | Failed | Total |\n|---|---|---|---|\n| Studied | $72$ | $8$ | $80$ |\n| Did Not Study | $33$ | $27$ | $60$ |\n| Total | $105$ | $35$ | $140$ |\n\nBased on the table above, a student is selected at random from those who passed. What is the probability that this student studied?",
  choices: [
    // distractor: divides by the grand total 140 instead of column total 105
    { id: "A", text: "$\\dfrac{72}{140}$" },
    { id: "B", text: "$\\dfrac{72}{105}$" },
    // distractor: uses the row total 80 (all who studied) — wrong condition
    { id: "C", text: "$\\dfrac{72}{80}$" },
    // distractor: gives P(passed), not the conditional probability
    { id: "D", text: "$\\dfrac{105}{140}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** \"Selected from those who passed\" restricts you to the Passed column. Of the $105$ who passed, $72$ studied, so the probability is $\\dfrac{72}{105}$.\n\n**The Full Solution:**\nStep 1: The condition is \"given the student passed,\" so the sample space is the $105$ students in the Passed column.\nStep 2: Among those, the studiers are $72$.\nStep 3: $P(\\text{Studied} \\mid \\text{Passed}) = \\dfrac{72}{105}$, which reduces to $\\dfrac{24}{35} \\approx 0.69$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{72}{140}$): uses the grand total $140$ as the denominator instead of the passed total.\n* Choice C ($\\dfrac{72}{80}$): uses the Studied row total $80$, which answers $P(\\text{Passed} \\mid \\text{Studied})$ — the reverse condition.\n* Choice D ($\\dfrac{105}{140}$): gives the unconditional $P(\\text{Passed})$, ignoring the studied requirement.\n\n**Test Day Takeaway:** \"Given that X\" fixes the denominator to X's total. Read the conditioning phrase first to pick the right row or column.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the right triangle shown, one acute angle measures $40^{\\circ}$ and the side opposite that angle has length $12$. Which expression gives the length of the hypotenuse?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["40°", "", ""],
      sideLabels: ["", "12", ""],
      rightAngleVertex: 1
    }
  },
  choices: [
    { id: "A", text: "$\\dfrac{12}{\\sin 40^{\\circ}}$" },
    // distractor: uses cosine (adjacent/hypotenuse) instead of sine (opposite/hypotenuse)
    { id: "B", text: "$\\dfrac{12}{\\cos 40^{\\circ}}$" },
    // distractor: multiplies — gives a value < 12, smaller than the opposite leg
    { id: "C", text: "$12 \\sin 40^{\\circ}$" },
    // distractor: uses cosine and multiplies — both errors at once
    { id: "D", text: "$12 \\cos 40^{\\circ}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Sine ties the opposite leg to the hypotenuse: $\\sin 40^\\circ = \\dfrac{12}{h}$, so $h = \\dfrac{12}{\\sin 40^\\circ}$.\n\n**The Full Solution:**\nStep 1: For the $40^\\circ$ angle, the side of length $12$ is opposite and $h$ is the hypotenuse.\nStep 2: $\\sin 40^\\circ = \\dfrac{\\text{opposite}}{\\text{hypotenuse}} = \\dfrac{12}{h}$.\nStep 3: Solve for $h$: $h = \\dfrac{12}{\\sin 40^\\circ}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\dfrac{12}{\\cos 40^\\circ}$): uses cosine, which relates the adjacent leg, not the opposite one.\n* Choice C ($12 \\sin 40^\\circ$): multiplies by $\\sin 40^\\circ < 1$, giving a length shorter than $12$ — but the hypotenuse must be the longest side.\n* Choice D ($12 \\cos 40^\\circ$): combines both errors, wrong ratio and wrong operation.\n\n**Test Day Takeaway:** SOH: $\\sin = \\dfrac{\\text{opposite}}{\\text{hypotenuse}}$. To get the hypotenuse from the opposite leg, divide that leg by $\\sin$.",
  skills: ["triangles", "right-triangles", "trigonometry"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $5(3x + 2) - 7 = 8x + 24$, what is the value of $x$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~15s):** Distribute and collect: $15x + 3 = 8x + 24 \\Rightarrow 7x = 21 \\Rightarrow x = 3$.\n\n**The Full Solution:**\nStep 1: Distribute the $5$: $15x + 10 - 7 = 8x + 24$.\nStep 2: Combine constants on the left: $15x + 3 = 8x + 24$.\nStep 3: Gather terms: $7x = 21$, so $x = 3$. Check: left $= 5(11) - 7 = 48$, right $= 24 + 24 = 48$. $\\checkmark$\n\n**Common Mistakes:** Distributing the $5$ to only the $3x$ and not the $2$; mishandling $10 - 7$ as $17$ instead of $3$.\n\n**Test Day Takeaway:** Distribute, combine like terms, move variables to one side and constants to the other, then divide — and verify by plugging back in.",
  skills: ["solving-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A linear model for a data set is $y = -0.6x + 45$. According to this model, what is the predicted value of $y$ when $x = 30$?",
  choices: [
    // distractor: takes absolute value of -18 and reports it
    { id: "A", text: "$18$" },
    // distractor: uses slope -0.7 instead of -0.6
    { id: "B", text: "$24$" },
    { id: "C", text: "$27$" },
    // distractor: adds instead of subtracts: 18 + 45 = 63
    { id: "D", text: "$63$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $y = -0.6(30) + 45 = -18 + 45 = 27$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 30$ into $y = -0.6x + 45$.\nStep 2: $-0.6(30) = -18$.\nStep 3: $y = -18 + 45 = 27$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($18$): reports $|{-0.6(30)}| = 18$ and forgets to add the $45$ intercept.\n* Choice B ($24$): uses slope $-0.7$ instead of $-0.6$.\n* Choice D ($63$): adds $18 + 45$ instead of subtracting, ignoring the negative slope.\n\n**Test Day Takeaway:** Mind the sign of the slope. A negative slope means $mx$ is subtracted from the intercept before you read off $y$.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A solid right circular cylinder has a radius of $5$ inches and a height of $7$ inches. The volume of the cylinder, in cubic inches, can be expressed as $k\\pi$. What is the value of $k$?",
  correctAnswer: "175",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $175$.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (5)^2 (7) = 175\\pi$, so $k = 175$.\n\n**The Full Solution:**\nStep 1: The cylinder volume formula is $V = \\pi r^2 h$.\nStep 2: Substitute $r = 5$ and $h = 7$: $V = \\pi (5)^2 (7) = \\pi (25)(7)$.\nStep 3: $25 \\cdot 7 = 175$, so $V = 175\\pi$ and $k = 175$.\n\n**Common Mistakes:** Forgetting to square the radius (using $\\pi r h$ gives $35\\pi$); using the cone formula $V = \\dfrac{1}{3}\\pi r^2 h$, which gives one-third the value.\n\n**Test Day Takeaway:** Square the radius first, then multiply by the height: $V = \\pi r^2 h$ is on the SAT Reference Sheet.",
  skills: ["volume", "geometry"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The system of equations below has the solution $(x, y)$.\n\n$3x + 4y = -8$\n$5x - 4y = 40$\n\nWhat is the value of $x + y$?",
  choices: [
    // distractor: arithmetic error — gets y = -7 from a substitution slip
    { id: "A", text: "$-3$" },
    { id: "B", text: "$-1$" },
    // distractor: stops one step early — reports x - y = 9 minus value mismatch
    { id: "C", text: "$1$" },
    // distractor: reports x - y instead of x + y
    { id: "D", text: "$3$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The $y$ terms are opposites, so add: $8x = 32 \\Rightarrow x = 4$. Then $3(4) + 4y = -8$ gives $y = -5$, so $x + y = -1$.\n\n**The Full Solution:**\nStep 1: Add the equations to eliminate $y$: $(3x + 4y) + (5x - 4y) = -8 + 40 \\Rightarrow 8x = 32$, so $x = 4$.\nStep 2: Substitute into the first equation: $12 + 4y = -8 \\Rightarrow 4y = -20 \\Rightarrow y = -5$.\nStep 3: $x + y = 4 + (-5) = -1$. Check: $3(4) + 4(-5) = -8$ and $5(4) - 4(-5) = 40$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): a substitution slip yielding $y = -7$ and $x + y = -3$.\n* Choice C ($1$): an arithmetic error in the elimination step.\n* Choice D ($3$): computes $x - y = 9$ or otherwise mixes up the requested sum.\n\n**Test Day Takeaway:** When one variable has opposite coefficients, ADD to eliminate it — then re-read the question and answer $x + y$, not just $x$ or $y$.",
  skills: ["systems-of-equations", "solving-equations"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "What is the equation of the line that has a slope of $-\\dfrac{3}{4}$ and passes through the point $(8, 1)$?",
  choices: [
    { id: "A", text: "$y = -\\dfrac{3}{4}x + 7$" },
    // distractor: arithmetic slip — gets b = 5 instead of 7
    { id: "B", text: "$y = -\\dfrac{3}{4}x + 5$" },
    // distractor: sign error on the y-intercept
    { id: "C", text: "$y = -\\dfrac{3}{4}x - 5$" },
    // distractor: subtracts the x-coordinate directly (1 - 8 = -7) without using slope
    { id: "D", text: "$y = -\\dfrac{3}{4}x - 7$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Line from Slope and Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Plug the point into $y = mx + b$: $1 = -\\dfrac{3}{4}(8) + b = -6 + b$, so $b = 7$, giving $y = -\\dfrac{3}{4}x + 7$.\n\n**The Full Solution:**\nStep 1: Use $y = mx + b$ with $m = -\\dfrac{3}{4}$ and the point $(8, 1)$.\nStep 2: $1 = -\\dfrac{3}{4}(8) + b = -6 + b$.\nStep 3: Solve: $b = 7$. The line is $y = -\\dfrac{3}{4}x + 7$. Check at $(8,1)$: $-6 + 7 = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($+5$): an arithmetic slip producing $b = 5$ instead of $7$.\n* Choice C ($-5$): a sign error that flips $b$ negative.\n* Choice D ($-7$): subtracts the coordinates without applying the slope.\n\n**Test Day Takeaway:** Substitute the known point into $y = mx + b$, solve for $b$, then confirm by plugging the point back into your equation.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The mean of $5$ numbers is $42$. If one of the numbers is removed, the mean of the remaining $4$ numbers is $38$. What is the number that was removed?",
  correctAnswer: "58",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $58$.**\n\n**The Fast Way (~15s):** Sum is mean $\\times$ count. The $5$ numbers total $5 \\times 42 = 210$; the remaining $4$ total $4 \\times 38 = 152$. The removed number is $210 - 152 = 58$.\n\n**The Full Solution:**\nStep 1: Mean $= \\dfrac{\\text{sum}}{\\text{count}}$, so sum $= \\text{mean} \\times \\text{count}$.\nStep 2: Original sum of all $5$ numbers: $5 \\times 42 = 210$.\nStep 3: Sum of the remaining $4$ numbers: $4 \\times 38 = 152$.\nStep 4: The removed number is the difference: $210 - 152 = 58$.\n\nCheck: $(152 + 58) \\div 5 = 210 \\div 5 = 42$ $\\checkmark$.\n\n**Common Mistakes:** Reporting $42 - 38 = 4$ — the means dropped by $4$, but that is not the value removed. Forgetting to convert each mean back to a total before subtracting.\n\n**Test Day Takeaway:** Sum $=$ mean $\\times$ count. Whenever a mean changes after adding or removing a value, work with totals, not the means themselves.",
  skills: ["statistics", "word-problems"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $g(x) = -3x + 11$ and $g(a) = -7$, what is the value of $a$?",
  choices: [
    // distractor: adds 11 instead of subtracting, getting -3a = 18 and a = -6
    { id: "A", text: "$-6$" },
    // distractor: drops the negative on -7 and solves -3a + 11 = 7
    { id: "B", text: "$\\dfrac{4}{3}$" },
    { id: "C", text: "$6$" },
    // distractor: confuses input and output: computes -7 \cdot (-3) + 11 = 32
    { id: "D", text: "$32$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Solving with Function Notation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $g(a) = -7$ means $-3a + 11 = -7$, so $-3a = -18$ and $a = 6$.\n\n**The Full Solution:**\nStep 1: $g(a) = -7$ says: plug $a$ in for $x$ and set the result equal to $-7$, giving $-3a + 11 = -7$.\nStep 2: Subtract $11$ from both sides: $-3a = -18$.\nStep 3: Divide by $-3$: $a = 6$.\n\nCheck: $g(6) = -3(6) + 11 = -18 + 11 = -7$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): added $11$ to both sides instead of subtracting, getting $-3a = 18$ and $a = -6$.\n* Choice B ($\\frac{4}{3}$): dropped the negative on $-7$ and solved $-3a + 11 = 7$.\n* Choice D ($32$): computed $-7 \\cdot (-3) + 11 = 32$, treating $-7$ as the input rather than the output.\n\n**Test Day Takeaway:** $g(a) = c$ means substitute $a$ for $x$ and set the expression equal to $c$, then solve for $a$.",
  skills: ["function-interpretation", "solving-equations"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The expression $\\dfrac{(3x^2y^3)^4}{9x^5y^7}$ can be written as $ax^by^c$, where $a$, $b$, and $c$ are constants. What is the value of $a + b + c$?",
  choices: [
    { id: "A", text: "$17$" },
    // distractor: miscalculates one exponent (e.g., x^{8-5} = x^4)
    { id: "B", text: "$19$" },
    // distractor: keeps 81 in the coefficient instead of dividing by 9
    { id: "C", text: "$21$" },
    // distractor: forgets to raise 3 to the 4th power inside the parentheses
    { id: "D", text: "$23$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponent Rules with Multiple Variables**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The numerator is $(3x^2y^3)^4 = 81x^8y^{12}$. Dividing by $9x^5y^7$ gives $\\dfrac{81}{9}x^{8-5}y^{12-7} = 9x^3y^5$, so $a + b + c = 9 + 3 + 5 = 17$.\n\n**The Full Solution:**\nStep 1: Apply the power to every factor inside the parentheses, including the coefficient: $(3x^2y^3)^4 = 3^4 (x^2)^4 (y^3)^4 = 81x^8y^{12}$.\nStep 2: Divide by $9x^5y^7$ by subtracting exponents: $\\dfrac{81}{9} = 9$, $x^{8-5} = x^3$, $y^{12-7} = y^5$.\nStep 3: So the expression is $9x^3y^5$, meaning $a = 9$, $b = 3$, $c = 5$.\nStep 4: $a + b + c = 9 + 3 + 5 = 17$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($19$): a single exponent slip, such as $x^{8-5} = x^4$, inflates the sum.\n* Choice C ($21$): leaves $a = 81$ but mishandles the variable exponents in the division.\n* Choice D ($23$): forgets to raise $3$ to the $4$th power, breaking the coefficient and exponent bookkeeping.\n\n**Test Day Takeaway:** A power outside parentheses hits every factor inside — the coefficient too. Then divide by subtracting exponents on each matching base.",
  skills: ["exponent-rules", "polynomial-operations"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The two legs of a right triangle measure $3\\sqrt{5}$ centimeters and $4\\sqrt{5}$ centimeters, as shown in the figure. What is the area of the triangle, in square centimeters?",
  diagram: {
    type: "rightTriangle",
    params: {
      sideLabels: ["3√5", "4√5", ""],
      rightAngleVertex: 1
    }
  },
  correctAnswer: "30",
  explanation: "**SAT Pattern: Area with Radical Side Lengths**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~15s):** The legs are perpendicular, so Area $= \\dfrac{1}{2} \\cdot 3\\sqrt{5} \\cdot 4\\sqrt{5} = \\dfrac{1}{2} \\cdot 12 \\cdot 5 = 30$.\n\n**The Full Solution:**\nStep 1: For a right triangle the two legs are the base and height, so Area $= \\dfrac{1}{2} \\times \\text{leg}_1 \\times \\text{leg}_2$.\nStep 2: Separate coefficients from radicals: $\\dfrac{1}{2} \\times (3 \\times 4) \\times (\\sqrt{5} \\times \\sqrt{5})$.\nStep 3: $\\sqrt{5} \\times \\sqrt{5} = 5$, so the product is $\\dfrac{1}{2} \\times 12 \\times 5 = \\dfrac{60}{2} = 30$.\n\nCheck numerically: $3\\sqrt{5} \\approx 6.71$, $4\\sqrt{5} \\approx 8.94$, and $\\dfrac{1}{2}(6.71)(8.94) \\approx 30$ $\\checkmark$.\n\n**Common Mistakes:** Writing $\\sqrt{5} \\times \\sqrt{5} = \\sqrt{10}$ instead of $5$. Dropping the $\\dfrac{1}{2}$ and reporting $60$.\n\n**Test Day Takeaway:** $\\sqrt{a} \\times \\sqrt{a} = a$. Multiply the coefficients and the radicals separately, then apply the $\\dfrac{1}{2}$ for triangle area.",
  skills: ["triangles", "area", "radical-expressions"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the graph of $f(x) = -a \\cdot 2^x + b$ has a $y$-intercept of $(0, 5)$ and passes through the point $(2, -4)$. What is the value of $a + b$?",
  choices: [
    // distractor: reads y-intercept value 5 and adds 2
    { id: "A", text: "$7$" },
    // distractor: arithmetic error giving b = 6 instead of 8
    { id: "B", text: "$9$" },
    { id: "C", text: "$11$" },
    // distractor: reports a + 2b or similar mis-combination
    { id: "D", text: "$13$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponential Function with Two Conditions**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** At $x = 0$: $-a + b = 5$. At $x = 2$: $-4a + b = -4$. Subtracting the first from the second gives $-3a = -9$, so $a = 3$ and $b = 8$. Then $a + b = 11$.\n\n**The Full Solution:**\nStep 1: Use the $y$-intercept $(0, 5)$. Since $2^0 = 1$, $f(0) = -a + b = 5$.\nStep 2: Use the point $(2, -4)$. Since $2^2 = 4$, $f(2) = -4a + b = -4$.\nStep 3: Subtract the first equation from the second to eliminate $b$: $(-4a + b) - (-a + b) = -4 - 5 \\Rightarrow -3a = -9 \\Rightarrow a = 3$.\nStep 4: Back-substitute: $-3 + b = 5$, so $b = 8$. Then $a + b = 3 + 8 = 11$.\n\nCheck: $f(x) = -3 \\cdot 2^x + 8$ gives $f(0) = 5$ and $f(2) = -12 + 8 = -4$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): stops at the $y$-intercept $5$ and just adds $2$ from the second point's $x$-value.\n* Choice B ($9$): an arithmetic slip lands $b = 6$ instead of $8$.\n* Choice D ($13$): mis-combines the constants, e.g. forming $a + 2b$.\n\n**Test Day Takeaway:** Two points give two equations. Plug in $x = 0$ first — any base to the $0$ power is $1$, which strips the exponential and isolates the constant.",
  skills: ["exponential-functions", "systems-of-equations"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For what value of $k$ does the equation $3x^2 - 5x + k = 0$ have exactly one real solution?",
  choices: [
    // distractor: inverts the fraction
    { id: "A", text: "$\\dfrac{12}{25}$" },
    { id: "B", text: "$\\dfrac{25}{12}$" },
    // distractor: uses b/a = 5/3 instead of the discriminant formula
    { id: "C", text: "$\\dfrac{5}{3}$" },
    // distractor: divides by a (not 4a) — uses b^2/a = 25/3
    { id: "D", text: "$\\dfrac{25}{3}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Exactly one real solution means the discriminant is $0$: $(-5)^2 - 4(3)(k) = 0 \\Rightarrow 25 - 12k = 0 \\Rightarrow k = \\dfrac{25}{12}$.\n\n**The Full Solution:**\nStep 1: A quadratic $ax^2 + bx + c = 0$ has exactly one real solution when $b^2 - 4ac = 0$.\nStep 2: Here $a = 3$, $b = -5$, $c = k$, so $(-5)^2 - 4(3)(k) = 0$.\nStep 3: Simplify: $25 - 12k = 0$, so $12k = 25$ and $k = \\dfrac{25}{12}$.\n\nCheck: the discriminant is $25 - 4(3)\\left(\\dfrac{25}{12}\\right) = 25 - 25 = 0$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{12}{25}$): inverts the fraction at the end.\n* Choice C ($\\frac{5}{3}$): uses $\\dfrac{b}{a}$ instead of the discriminant condition.\n* Choice D ($\\frac{25}{3}$): divides by $a$ instead of $4a$, dropping the factor of $4$.\n\n**Test Day Takeaway:** \"Exactly one real solution\" $\\Rightarrow$ discriminant $= 0$. Set $b^2 - 4ac = 0$ and solve for the unknown.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $x^2 + y^2 + 8x - 14y + 40 = 0$ represents a circle in the $xy$-plane. What is the area of this circle?",
  choices: [
    // distractor: uses r^2 = 5 (some miscalculation skipping the constant)
    { id: "A", text: "$5\\pi$" },
    // distractor: only completes one square, gets r^2 = 9
    { id: "B", text: "$9\\pi$" },
    { id: "C", text: "$25\\pi$" },
    // distractor: computes 16 + 49 = 65 without subtracting 40, then mis-rounds to 81
    { id: "D", text: "$81\\pi$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Complete both squares: $(x+4)^2 + (y-7)^2 = 16 + 49 - 40 = 25$. So $r^2 = 25$ and Area $= \\pi r^2 = 25\\pi$.\n\n**The Full Solution:**\nStep 1: Group the $x$ and $y$ terms: $(x^2 + 8x) + (y^2 - 14y) = -40$.\nStep 2: Complete the square on $x$: half of $8$ is $4$, $4^2 = 16$, giving $(x + 4)^2$. On $y$: half of $-14$ is $-7$, $(-7)^2 = 49$, giving $(y - 7)^2$.\nStep 3: Add $16$ and $49$ to the right side: $(x + 4)^2 + (y - 7)^2 = -40 + 16 + 49 = 25$.\nStep 4: So $r^2 = 25$ and $r = 5$. Area $= \\pi r^2 = 25\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5\\pi$): treats $r^2 = 25$ as $r$, or uses $r^2 = 5$ from a dropped constant.\n* Choice B ($9\\pi$): completes only one square, landing on $r^2 = 9$.\n* Choice D ($81\\pi$): adds $16 + 49 = 65$ without subtracting $40$, then mis-rounds to a perfect square.\n\n**Test Day Takeaway:** Convert general form to standard form by completing BOTH squares; the right side is $r^2$, and Area $= \\pi r^2$.",
  skills: ["circle-equations", "coordinate-geometry", "area"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $(2x + k)(3x - 4) = 6x^2 + 7x + m$ for all values of $x$, what is the value of $m$?",
  correctAnswer: "-20",
  explanation: "**SAT Pattern: Matching Coefficients**\n\n**The correct answer is $-20$.**\n\n**The Fast Way (~20s):** Expand to $6x^2 + (3k - 8)x - 4k$. Match the $x$-coefficient: $3k - 8 = 7$, so $k = 5$. Then $m = -4k = -20$.\n\n**The Full Solution:**\nStep 1: Expand the left side: $(2x + k)(3x - 4) = 6x^2 - 8x + 3kx - 4k = 6x^2 + (3k - 8)x - 4k$.\nStep 2: Match coefficients with $6x^2 + 7x + m$. The $x$ term gives $3k - 8 = 7 \\Rightarrow 3k = 15 \\Rightarrow k = 5$.\nStep 3: The constant term gives $m = -4k = -4(5) = -20$.\n\nCheck: $(2x + 5)(3x - 4) = 6x^2 - 8x + 15x - 20 = 6x^2 + 7x - 20$ $\\checkmark$.\n\n**Common Mistakes:** Solving for $k = 5$ and reporting $5$ instead of $m$. Sign-slipping on $-4k$ to get $+20$.\n\n**Test Day Takeaway:** When two expressions are equal for all $x$, match coefficients term by term — but answer the variable the question actually asks for.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f(x) = a(x - h)^2 + k$ has a minimum value of $-5$ at $x = 3$ and passes through the point $(7, 27)$. What is the value of $f(0)$?",
  choices: [
    // distractor: uses a = 1 instead of a = 2
    { id: "A", text: "$7$" },
    { id: "B", text: "$13$" },
    // distractor: computes (0 - 3)^2 = 10 instead of 9 (off-by-one)
    { id: "C", text: "$15$" },
    // distractor: misremembers the vertex y-coordinate, computing 2(9) + 4 = 22
    { id: "D", text: "$22$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The minimum $-5$ at $x = 3$ gives the vertex $(3, -5)$, so $f(x) = a(x - 3)^2 - 5$. Using $(7, 27)$: $27 = 16a - 5 \\Rightarrow a = 2$. Then $f(0) = 2(9) - 5 = 13$.\n\n**The Full Solution:**\nStep 1: A minimum value of $-5$ occurring at $x = 3$ means the vertex is $(3, -5)$, so $f(x) = a(x - 3)^2 - 5$.\nStep 2: Use the point $(7, 27)$: $27 = a(7 - 3)^2 - 5 = 16a - 5$, so $32 = 16a$ and $a = 2$.\nStep 3: Evaluate $f(0) = 2(0 - 3)^2 - 5 = 2(9) - 5 = 18 - 5 = 13$.\n\nCheck: $f(7) = 2(4)^2 - 5 = 32 - 5 = 27$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): uses $a = 1$ instead of solving for $a = 2$.\n* Choice C ($15$): computes $(0 - 3)^2 = 10$ instead of $9$.\n* Choice D ($22$): misremembers the vertex $y$-coordinate, computing $2(9) + 4$.\n\n**Test Day Takeaway:** A minimum or maximum value pins the vertex $(h, k)$. Find $a$ from a second point, then evaluate $f$ wherever asked.",
  skills: ["vertex-form", "quadratic-equations", "function-interpretation"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "For $x > 0$, the expression $\\dfrac{\\sqrt[4]{x} \\cdot x^2}{\\sqrt[3]{x}}$ is equal to $x^k$. What is the value of $k$? Express your answer as a fraction.",
  correctAnswer: "23/12",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\dfrac{23}{12}$.**\n\n**The Fast Way (~20s):** Rewrite roots as exponents: $\\dfrac{x^{1/4} \\cdot x^2}{x^{1/3}} = x^{\\frac{1}{4} + 2 - \\frac{1}{3}}$. Combine over $12$: $\\dfrac{3}{12} + \\dfrac{24}{12} - \\dfrac{4}{12} = \\dfrac{23}{12}$.\n\n**The Full Solution:**\nStep 1: Convert radicals to fractional exponents: $\\sqrt[4]{x} = x^{\\frac{1}{4}}$ and $\\sqrt[3]{x} = x^{\\frac{1}{3}}$.\nStep 2: Multiply in the numerator by adding exponents: $x^{\\frac{1}{4}} \\cdot x^2 = x^{\\frac{1}{4} + \\frac{8}{4}} = x^{\\frac{9}{4}}$.\nStep 3: Divide by subtracting the denominator's exponent: $x^{\\frac{9}{4} - \\frac{1}{3}}$.\nStep 4: Use a common denominator of $12$: $\\dfrac{9}{4} = \\dfrac{27}{12}$ and $\\dfrac{1}{3} = \\dfrac{4}{12}$, so $\\dfrac{27}{12} - \\dfrac{4}{12} = \\dfrac{23}{12}$. Thus $k = \\dfrac{23}{12}$.\n\n**Common Mistakes:** Reading $\\sqrt[4]{x}$ as $x^4$ instead of $x^{\\frac{1}{4}}$. Adding the denominator's exponent rather than subtracting it.\n\n**Test Day Takeaway:** Turn every radical into a fractional exponent, then multiply $=$ add exponents and divide $=$ subtract exponents.",
  skills: ["exponent-rules", "radical-expressions"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 2 — Math Module 2 (22 questions)
// 2026-06 flow diversification. Distribution: 3E / 7M / 12H.
// Wavy flow by position (E=easy, M=medium, H=hard):
//   Q1 E, Q2 E, Q3 M, Q4 M, Q5 H, Q6 M, Q7 M, Q8 H, Q9 H, Q10 M, Q11 H,
//   Q12 E (mid-module breather), Q13 H, Q14 M, Q15 H, Q16 M, Q17 H, Q18 H,
//   Q19 H, Q20 H, Q21 H, Q22 H.
// Hard closers Q17-22 (exponential-growth back-solve model, no-solution system,
// perpendicular slope, cube-minus-cylinder volume, discriminant integer-bound,
// exponential fractional-exponent period).
// Pool items infused: D-p1#22 (Q5 radian-degree), D-p26#15 (Q3 mean comparison),
// E#8 (Q8 line-parabola intersection count), D-p39#23 (Q9 linear solve-for-b),
// D-p7#25 (Q17 "150% more" exponential back-solve, distractor comments hardened
// E#22), D-p28#25 (Q22 fractional-exponent period, reskinned coral-reef coverage
// off the source city-population skeleton for IP distance — answer n=16).
// Carriers use the observatory/snowpack/bookbinding/esports/harbor-ferry/
// butterfly-garden/coral-reef palette.

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "Mateo manages boarding for a harbor ferry. Passengers walk up a ramp and onto the ferry at a steady rate of $14$ passengers per minute. When boarding began, $30$ passengers were already aboard. Which type of function best models the number of passengers aboard the ferry as a function of the number of minutes since boarding began?",
  choices: [
    // distractor: confuses constant rate with multiplicative growth
    { id: "A", text: "Increasing exponential" },
    { id: "B", text: "Increasing linear" },
    // distractor: sign error — passengers are being ADDED
    { id: "C", text: "Decreasing linear" },
    // distractor: combines wrong type with wrong direction
    { id: "D", text: "Decreasing exponential" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Linear vs Exponential**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** A \"steady rate\" of $14$ passengers per minute is a constant amount added each minute, and the count is growing — that is an increasing linear model.\n\n**The Full Solution:**\nStep 1: A linear function has a constant rate of change. \"$14$ passengers per minute\" adds the same amount each minute, which is exactly that.\nStep 2: Passengers board (the count rises), so the slope is positive — the function is increasing. A model is $P(t) = 30 + 14t$.\n\nCheck: $P(0) = 30$, $P(1) = 44$, $P(2) = 58$; the differences are $+14, +14$, constant $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A (Increasing exponential): exponential growth needs a constant multiplier each minute (doubling, percent change), not a constant additive rate.\n* Choice C (Decreasing linear): right type, wrong direction — passengers are boarding, so the count increases.\n* Choice D (Decreasing exponential): wrong on both the type and the direction.\n\n**Test Day Takeaway:** \"Steady rate of $X$ per unit\" $\\Rightarrow$ linear; the verb (boarding vs leaving) sets the sign. Save exponential for \"multiplied by\" or \"percent\" language.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "A bookbinding studio charges a one-time setup fee of $\\$7$ for an order plus $\\$4$ for each book bound. Which equation represents the total cost $C$, in dollars, of an order in which $b$ books are bound?",
  choices: [
    // distractor: swaps the roles of setup fee and per-book rate
    { id: "A", text: "$C = 7b + 4$" },
    { id: "B", text: "$C = 4b + 7$" },
    // distractor: stops one step early - adds the two values without applying the rate to b
    { id: "C", text: "$C = 11 + b$" },
    // distractor: applies inverse op - combines setup and rate into one coefficient
    { id: "D", text: "$C = 11b$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Linear Cost Setup**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Total $=$ (per-book rate)(books) $+$ (setup fee) $= 4b + 7$.\n\n**The Full Solution:**\nStep 1: The \\$4 charge is per book bound, so it scales with $b$: $4b$.\nStep 2: The \\$7 setup fee is charged once and does not depend on $b$: a constant.\nStep 3: Add them: $C = 4b + 7$.\n\nCheck: an order of $5$ books costs $C = 4(5) + 7 = \\$27$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($C = 7b + 4$): swaps the roles, attaching the one-time fee to $b$ and treating the per-book rate as the constant.\n* Choice C ($C = 11 + b$): adds $7 + 4 = 11$ but loses the rate on each book.\n* Choice D ($C = 11b$): folds the fixed fee into the coefficient, so the setup fee wrongly scales with every book.\n\n**Test Day Takeaway:** Linear cost $=$ rate $\\times$ quantity $+$ fixed fee. Decide which value scales with the count (the rate) and which is charged once (the constant).",
  skills: ["linear-functions", "word-problems"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Astrid records the number of monarch butterflies tagged at each of five butterfly gardens during one afternoon. The counts are shown in the table.\n\n| Garden | Butterflies tagged |\n|---|---|\n| Meadowlark | $38$ |\n| Cedar Hollow | $44$ |\n| Riverbend | $41$ |\n| Sunfield | $47$ |\n| Highgate | $40$ |\n\nA sixth garden, Birchwood, is added to the record with $30$ butterflies tagged. Which of the following correctly compares the mean of the original five-garden data set with the mean of the new six-garden data set?",
  choices: [
    { id: "A", text: "The mean of the original data set is greater than the mean of the new data set." },
    // distractor: assumes any added value raises the mean
    { id: "B", text: "The mean of the original data set is less than the mean of the new data set." },
    // distractor: assumes adding a value never changes the mean
    { id: "C", text: "The means of the two data sets are equal." },
    // distractor: claims the table is insufficient even though all values are given
    { id: "D", text: "There is not enough information to compare the means." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: New mean after adding a value**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Compare the added value to the current mean. The original mean is $\\frac{38+44+41+47+40}{5}=\\frac{210}{5}=42$. The new garden adds $30$, which is below $42$, so the new mean drops. The original mean is greater.\n\n**The Full Solution:**\nStep 1: Original mean $=\\frac{210}{5}=42$.\nStep 2: Adding $30$ gives a new sum of $210+30=240$ over $6$ gardens, so the new mean $=\\frac{240}{6}=40$.\nStep 3: Since $42>40$, the original mean exceeds the new mean.\n\n**Why the wrong answers are tempting:**\n* Choice B: assumes adding any value raises the mean. Here $30<42$, so it lowers it.\n* Choice C: assumes a new value never moves the mean. It stays equal only if the added value equals the mean, $42$.\n* Choice D: overcautious. Every count is given, so the comparison is fully determined.\n\n**Test Day Takeaway:** To compare a mean before and after adding one value, compare that value to the OLD mean: below it lowers the mean, above it raises it, equal keeps it the same.",
  skills: ["statistics", "mean"]
},
{
  id: 4,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "Triangles $ABC$ and $DEF$ are similar, with $AB$ corresponding to $DE$. The lengths $AB = 12$ and $DE = 18$. If the perimeter of triangle $ABC$ is $30$, what is the perimeter of triangle $DEF$?",
  correctAnswer: "45",
  explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**The correct answer is $45$.**\n\n**The Fast Way (~15s):** The scale factor is $\\frac{DE}{AB}=\\frac{18}{12}=\\frac{3}{2}$, and perimeter scales by the same factor: $30\\cdot\\frac{3}{2}=45$.\n\n**The Full Solution:**\nStep 1: In similar figures, every corresponding length scales by one factor $k=\\frac{DE}{AB}=\\frac{18}{12}=\\frac{3}{2}$.\nStep 2: The perimeter is the sum of side lengths, so it scales by $k$ too: $P_{DEF}=\\frac{3}{2}\\cdot 30=45$.\nStep 3: Check: scaling each side of $ABC$ by $\\frac{3}{2}$ scales their sum by $\\frac{3}{2}$. $\\checkmark$\n\n**Common Mistakes:** Adding $18-12=6$ to get $36$ (perimeter scales multiplicatively, not additively); using the area factor $k^2$; or inverting the ratio to $\\frac{2}{3}$ and getting $20$.\n\n**Test Day Takeaway:** In similar figures, the perimeter ratio equals the side ratio. The area ratio equals the side ratio squared.",
  skills: ["triangles", "geometry", "ratios"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In a star chart, the angular separation labeled $M$ measures $\\dfrac{3\\pi}{4}$ radians. A second separation, labeled $N$, is $\\dfrac{7\\pi}{12}$ radians greater than $M$. What is the measure of separation $N$, in \\underline{degrees}?",
  choices: [
    // distractor: converts only the increment 7pi/12 = 105 (forgets to add M)
    { id: "A", text: "$105$" },
    // distractor: converts only M = 3pi/4 = 135 (forgets to add the increment)
    { id: "B", text: "$135$" },
    { id: "C", text: "$240$" },
    // distractor: reduces 16pi/12 to 8pi/3 (drops a factor) before converting -> 480
    { id: "D", text: "$480$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Radian-Degree Conversion**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Add first: $N=\\frac{3\\pi}{4}+\\frac{7\\pi}{12}=\\frac{9\\pi}{12}+\\frac{7\\pi}{12}=\\frac{16\\pi}{12}=\\frac{4\\pi}{3}$. Convert: $\\frac{4\\pi}{3}\\cdot\\frac{180}{\\pi}=240^\\circ$.\n\n**The Full Solution:**\nStep 1: Use a common denominator of $12$. Since $\\frac{3\\pi}{4}=\\frac{9\\pi}{12}$, then $N=\\frac{9\\pi}{12}+\\frac{7\\pi}{12}=\\frac{16\\pi}{12}=\\frac{4\\pi}{3}$ radians.\nStep 2: Convert to degrees by multiplying by $\\frac{180^\\circ}{\\pi}$: $\\frac{4\\pi}{3}\\cdot\\frac{180^\\circ}{\\pi}=\\frac{4\\cdot 180^\\circ}{3}=\\frac{720^\\circ}{3}=240^\\circ$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($105$): converts only the increment $\\frac{7\\pi}{12}=105^\\circ$ and forgets to add $M$.\n* Choice B ($135$): converts only $M=\\frac{3\\pi}{4}=135^\\circ$ and forgets the increment.\n* Choice D ($480$): mishandles $\\frac{16\\pi}{12}$, doubling the result to $480^\\circ$.\n\n**Test Day Takeaway:** Add the radian fractions first over a common denominator, then convert the single total with $\\times\\frac{180}{\\pi}$. Converting before adding multiplies the chance of error.",
  skills: ["radians", "angle-arithmetic", "geometry"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $g(x) = 4x - x^2$, what is the value of $g(-3)$?",
  choices: [
    { id: "A", text: "$-21$" },
    // distractor: ignores the negative on x and computes g(3) = 3
    { id: "B", text: "$3$" },
    // distractor: writes (-3)^2 = -9 (sign error)
    { id: "C", text: "$-3$" },
    // distractor: forgets to square: 4(-3) - (-3) = -9
    { id: "D", text: "$-9$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $g(-3)=4(-3)-(-3)^2=-12-9=-21$.\n\n**The Full Solution:**\nStep 1: Substitute $x=-3$ into $g(x)=4x-x^2$.\nStep 2: $(-3)^2=9$, and the formula subtracts $x^2$, so $g(-3)=4(-3)-9=-12-9=-21$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): drops the negative sign on the input and computes $g(3)=12-9=3$.\n* Choice C ($-3$): treats $(-3)^2$ as $-9$, getting $-12-(-9)=-3$.\n* Choice D ($-9$): forgets to square, computing $4(-3)-(-3)=-12+3=-9$.\n\n**Test Day Takeaway:** Apply exponents before multiplication, and remember $(-x)^2=x^2$ is positive.",
  skills: ["function-interpretation", "quadratic-equations"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A rectangular display panel has a perimeter of $58$ inches. Its length is $5$ inches more than twice its width. What is the width of the panel, in inches?",
  correctAnswer: "8",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~20s):** Let $w$ be the width and $2w+5$ the length. Perimeter $2(\\ell+w)=58$ gives $\\ell+w=29$, so $(2w+5)+w=29\\Rightarrow 3w=24\\Rightarrow w=8$.\n\n**The Full Solution:**\nStep 1: Let $w=$ width and $\\ell=2w+5=$ length.\nStep 2: $2\\ell+2w=58$, so $\\ell+w=29$.\nStep 3: Substitute $\\ell$: $(2w+5)+w=29\\Rightarrow 3w+5=29\\Rightarrow 3w=24\\Rightarrow w=8$.\nStep 4: Check: $\\ell=2(8)+5=21$, and perimeter $=2(21)+2(8)=42+16=58$. $\\checkmark$\n\n**Common Mistakes:** Reporting $21$ (the length) instead of the width; or writing $2w+5=58$ and skipping the perimeter formula.\n\n**Test Day Takeaway:** Define variables, write the perimeter formula, substitute, solve, then re-read what was asked before answering.",
  skills: ["word-problems", "solving-equations"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Consider the two equations $y = 24$ and $y = -2(x - 9)^2 + 19$. If these equations are graphed in the $xy$-plane, at how many points do the two graphs intersect?",
  choices: [
    // distractor: assumes a line and a parabola always meet once
    { id: "A", text: "Exactly one" },
    // distractor: assumes a horizontal line through a parabola always meets it twice
    { id: "B", text: "Exactly two" },
    // distractor: confuses identical-graph wording with intersection
    { id: "C", text: "Infinitely many" },
    { id: "D", text: "Zero" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Line-Parabola Intersection Count**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The parabola $y=-2(x-9)^2+19$ opens downward, so its greatest output is the vertex value $19$. The line $y=24$ sits above $19$, which the curve never reaches, so there are zero intersections.\n\n**The Full Solution:**\nStep 1: In vertex form $a=-2<0$, so the parabola opens down and its maximum output is the vertex $y$-value, $19$. Every output satisfies $y\\le 19$.\nStep 2: The line requires $y=24>19$, which the parabola cannot produce, so the graphs share no points.\nStep 3: Confirm algebraically: $-2(x-9)^2+19=24\\Rightarrow -2(x-9)^2=5\\Rightarrow (x-9)^2=-2.5$. A real square cannot be negative, so there is no real solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: assumes any line meets a parabola exactly once.\n* Choice B: assumes a horizontal line always cuts a parabola twice; that holds only when the line is below the maximum.\n* Choice C: infinitely many points would require identical graphs, not a line and a parabola.\n\n**Test Day Takeaway:** For a horizontal line versus a vertex-form parabola, compare the line's height to the vertex value. Above the max of a downward parabola $\\Rightarrow$ zero intersections.",
  skills: ["nonlinear-functions", "quadratic-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The linear function $g$ is defined by $g(x) = b - 12x$, where $b$ is a constant. If $g(c + 9) = \\dfrac{c}{5}$, where $c$ is a constant, which of the following expressions is equal to $b$?",
  choices: [
    // distractor: uses the literal 9 (from c+9) as the constant instead of 12*9 = 108
    { id: "A", text: "$\\dfrac{61c}{5} + 9$" },
    // distractor: drops the c/5 term entirely (treats g(c+9) = 0)
    { id: "B", text: "$12c + 108$" },
    { id: "C", text: "$\\dfrac{61c}{5} + 108$" },
    // distractor: distributes -12 only to the 9, omitting the 12c term
    { id: "D", text: "$\\dfrac{c}{5} + 108$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Linear Function Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** $g(c+9)=b-12(c+9)=b-12c-108$. Set this equal to $\\frac{c}{5}$ and solve for $b$: $b=\\frac{c}{5}+12c+108=\\frac{61c}{5}+108$.\n\n**The Full Solution:**\nStep 1: Substitute $x=c+9$ into $g(x)=b-12x$: $g(c+9)=b-12(c+9)=b-12c-108$.\nStep 2: Set equal to the given value: $b-12c-108=\\frac{c}{5}$.\nStep 3: Isolate $b$: $b=\\frac{c}{5}+12c+108$.\nStep 4: Combine the $c$-terms over denominator $5$: $12c=\\frac{60c}{5}$, so $\\frac{c}{5}+\\frac{60c}{5}=\\frac{61c}{5}$. Thus $b=\\frac{61c}{5}+108$.\n\n**Why the wrong answers are tempting:**\n* Choice A: uses the literal $9$ as the constant instead of $12\\cdot 9=108$.\n* Choice B: drops the $\\frac{c}{5}$ term, as if $g(c+9)=0$.\n* Choice D: distributes $-12$ only to the $9$ and forgets the $-12c$ term, leaving $\\frac{c}{5}+108$.\n\n**Test Day Takeaway:** Substitute the full input, distribute $-12$ to every term in the parentheses, then combine like terms over a common denominator before matching the answer form.",
  skills: ["linear-functions", "function-interpretation", "algebraic-manipulation"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "An archer's arrow follows an arc whose height above the ground, in meters, is modeled by $h(t) = -4.9(t - 1.6)^2 + 14$, where $t$ is the time, in seconds, after the arrow is released. Which of the following is the best interpretation of the vertex of the graph of $h(t)$ in the $th$-plane?",
  choices: [
    // distractor: swaps the coordinates of the vertex
    { id: "A", text: "The arrow reaches a maximum height of $1.6$ meters, $14$ seconds after release." },
    { id: "B", text: "The arrow reaches a maximum height of $14$ meters, $1.6$ seconds after release." },
    // distractor: wrong direction — calls the max a min
    { id: "C", text: "The arrow reaches a minimum height of $14$ meters, $1.6$ seconds after release." },
    // distractor: wrong base — uses the leading coefficient's magnitude as the time
    { id: "D", text: "The arrow reaches a maximum height of $14$ meters, $4.9$ seconds after release." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex Form of a Quadratic**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The vertex of $h(t)=-4.9(t-1.6)^2+14$ is $(1.6,14)$, and $a=-4.9<0$ makes it a maximum: greatest height $14$ m at $t=1.6$ s.\n\n**The Full Solution:**\nStep 1: Vertex form $a(t-h_0)^2+k$ has vertex $(h_0,k)=(1.6,14)$.\nStep 2: Since $a=-4.9<0$, the parabola opens down, so the vertex is the maximum: the arrow reaches its greatest height, $14$ m, at $t=1.6$ s after release.\nStep 3: Check: $h(1.6)=0+14=14$, and at release $h(0)=-4.9(1.6)^2+14\\approx 1.5$ m, near hand height. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: swaps the coordinates, reading height $1.6$ at time $14$.\n* Choice C: calls the vertex a minimum, but $a<0$ makes it a maximum.\n* Choice D: uses the leading coefficient $4.9$ as the time of the maximum.\n\n**Test Day Takeaway:** Vertex form $a(t-h_0)^2+k$ has vertex $(h_0,k)$ — input first, output second — and the sign of $a$ decides max versus min. The $-4.9$ is the gravity coefficient, not a time.",
  skills: ["function-interpretation", "quadratic-equations"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In right triangle $ABC$ shown, angle $C$ is the right angle. If $\\sin(A) = \\dfrac{15}{17}$, what is the value of $\\cos(B)$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["A", "C", "B"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: gives cos(A) = 8/17, not cos(B)
    { id: "A", text: "$\\dfrac{8}{17}$" },
    { id: "B", text: "$\\dfrac{15}{17}$" },
    // distractor: gives tan(B) = 8/15
    { id: "C", text: "$\\dfrac{8}{15}$" },
    // distractor: inverts the sine ratio
    { id: "D", text: "$\\dfrac{17}{15}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In a right triangle the acute angles are complementary ($A+B=90^\\circ$), so $\\cos(B)=\\sin(A)=\\frac{15}{17}$.\n\n**The Full Solution:**\nStep 1: With the right angle at $C$, angles $A$ and $B$ satisfy $A+B=90^\\circ$, so $B=90^\\circ-A$.\nStep 2: The co-function identity gives $\\cos(B)=\\cos(90^\\circ-A)=\\sin(A)=\\frac{15}{17}$.\nStep 3: Side check: $\\sin(A)=\\frac{BC}{AB}=\\frac{15}{17}$, so $AC=\\sqrt{17^2-15^2}=\\sqrt{64}=8$. For angle $B$, the adjacent side is $BC=15$ and the hypotenuse is $AB=17$, so $\\cos(B)=\\frac{15}{17}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: gives $\\cos(A)=\\frac{8}{17}$, the cosine of the other angle.\n* Choice C: gives $\\tan(B)=\\frac{8}{15}$, a different ratio.\n* Choice D: inverts the sine ratio to $\\frac{17}{15}$.\n\n**Test Day Takeaway:** In a right triangle, $\\sin(A)=\\cos(B)$ because the two acute angles are complementary.",
  skills: ["trigonometry", "triangles", "right-triangles"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "On a winter morning, the snow depths, in centimeters, recorded at six alpine monitoring stations were $84$, $96$, $72$, $110$, $88$, and $102$. What is the range of these six depths, in centimeters?",
  choices: [
    // distractor: subtracts the wrong endpoints (110 - 84) instead of max - min
    { id: "A", text: "$26$" },
    { id: "B", text: "$38$" },
    // distractor: reports a middle value, treating range like a central measure
    { id: "C", text: "$88$" },
    // distractor: reports the maximum value only, forgetting to subtract the minimum
    { id: "D", text: "$110$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Range $=$ max $-$ min $=110-72=38$.\n\n**The Full Solution:**\nStep 1: The range is the greatest value minus the least value.\nStep 2: The greatest depth is $110$ cm and the least is $72$ cm.\nStep 3: Range $=110-72=38$ cm.\n\n**Why the wrong answers are tempting:**\n* Choice A ($26$): subtracts $110-84$, using the second-smallest value instead of the true minimum $72$.\n* Choice C ($88$): reports a middle value, confusing range with a center.\n* Choice D ($110$): reports the maximum without subtracting the minimum.\n\n**Test Day Takeaway:** Range $=$ maximum $-$ minimum. Scan the whole list for the true largest and smallest values before subtracting.",
  skills: ["statistics", "range"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The two solutions of the equation $x^2 - px + 40 = 0$ are positive integers that differ by $3$. What is the value of the constant $p$?",
  choices: [
    // distractor: reports the given difference (3) instead of the sum of the roots
    { id: "A", text: "$3$" },
    // distractor: uses the factor pair (2, 20) that multiplies to 40 but ignores the "differ by 3" condition
    { id: "B", text: "$22$" },
    { id: "C", text: "$13$" },
    // distractor: reports the constant 40 (the product of the roots) as p
    { id: "D", text: "$40$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** By Vieta's formulas the roots multiply to $40$ and add to $p$. The factor pair of $40$ that differs by $3$ is $5$ and $8$, so $p=5+8=13$.\n\n**The Full Solution:**\nStep 1: For $x^2-px+40=0$ with roots $r$ and $s$, the sum is $r+s=p$ and the product is $rs=40$.\nStep 2: Positive integer factor pairs of $40$: $(1,40),(2,20),(4,10),(5,8)$. The pair differing by $3$ is $(5,8)$.\nStep 3: So $p=5+8=13$.\nStep 4: Check: $x^2-13x+40=(x-5)(x-8)=0$ has roots $5$ and $8$, which differ by $3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports the given difference instead of the sum.\n* Choice B ($22$): uses the pair $(2,20)$, which multiplies to $40$ but differs by $18$, giving sum $22$.\n* Choice D ($40$): reports the product of the roots as $p$.\n\n**Test Day Takeaway:** For $x^2-px+q=0$, the roots add to $p$ and multiply to $q$. Use the product to list candidate pairs, then the extra condition to pick the right one.",
  skills: ["quadratic-equations", "factoring"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "During the group stage of an esports tournament, the livestream peaked at $240{,}000$ concurrent viewers. During the finals, the peak number of concurrent viewers was $35\\%$ greater than during the group stage. What was the peak number of concurrent viewers during the finals?",
  choices: [
    // distractor: reports only the increase amount (0.35 * 240,000), stops one step early
    { id: "A", text: "$84{,}000$" },
    // distractor: subtracts the percent instead of adding (treats "greater" as "less"): 240,000 * 0.65
    { id: "B", text: "$156{,}000$" },
    // distractor: reads 35% as 3.5% (decimal slip): 240,000 * 1.035
    { id: "C", text: "$248{,}400$" },
    { id: "D", text: "$324{,}000$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Percent Increase**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** \"$35\\%$ greater\" means multiply by $1.35$: $240{,}000\\times 1.35=324{,}000$.\n\n**The Full Solution:**\nStep 1: A value that is $35\\%$ greater than the original is $100\\%+35\\%=135\\%$ of it.\nStep 2: $240{,}000\\times 1.35=324{,}000$ concurrent viewers.\nStep 3: Equivalently, the increase is $0.35\\times 240{,}000=84{,}000$, added to the original: $240{,}000+84{,}000=324{,}000$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($84{,}000$): reports only the increase without adding it to the original.\n* Choice B ($156{,}000$): treats \"greater\" as \"less,\" computing $240{,}000\\times 0.65$.\n* Choice C ($248{,}400$): reads $35\\%$ as $3.5\\%$, computing $240{,}000\\times 1.035$.\n\n**Test Day Takeaway:** \"$p\\%$ greater than\" means multiply by $1+\\frac{p}{100}$. The bare percent times the base is only the increase, not the new total.",
  skills: ["percents", "word-problems"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $x^2 + y^2 + 6x - 10y + 9 = 0$ represents a circle in the $xy$-plane. What is the radius of the circle?",
  choices: [
    // distractor: takes \sqrt{9} from the constant
    { id: "A", text: "$3$" },
    // distractor: only completes one square — gets r^2 = 9
    { id: "B", text: "$\\sqrt{9}$" },
    { id: "C", text: "$5$" },
    // distractor: stops at r^2 = 25 instead of r = 5
    { id: "D", text: "$25$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Complete the Square — Non-Square Radius**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Complete the square on both variables: $(x+3)^2+(y-5)^2 = -9+9+25 = 25$, so $r = \\sqrt{25} = 5$.\n\n**The Full Solution:**\nStep 1: Group the $x$- and $y$-terms and move the constant: $(x^2+6x)+(y^2-10y) = -9$.\nStep 2: Complete each square. Half of $6$ is $3$, and $3^2 = 9$, giving $(x+3)^2$. Half of $-10$ is $-5$, and $(-5)^2 = 25$, giving $(y-5)^2$. Add both constants to the right side.\nStep 3: $(x+3)^2+(y-5)^2 = -9+9+25 = 25$. So $r^2 = 25$ and $r = \\sqrt{25} = 5$, which is choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): pulls $\\sqrt{9}$ from the bare constant in the original equation instead of completing both squares.\n* Choice B ($\\sqrt{9}$): the same misstep written in radical form — uses only the $x$-square constant, getting $r^2 = 9$.\n* Choice D ($25$): reports $r^2 = 25$ as the radius instead of taking the square root.\n\n**Test Day Takeaway:** Complete BOTH squares, push every completing-square constant to the right side, and remember the radius is $\\sqrt{r^2}$, not $r^2$.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A robotic telescope at an observatory captures $45$ images during each $18$-minute exposure cycle, at a constant rate. At this same rate, how many images does the telescope capture during a continuous $2$-hour observation session?",
  choices: [
    // distractor: uses 2 (hours) directly without converting to minutes: 45*2/18 = 5
    { id: "A", text: "$5$" },
    { id: "B", text: "$300$" },
    // distractor: reports the session length in minutes (120) instead of the image count
    { id: "C", text: "$120$" },
    // distractor: inverts the rate ratio: 18/45 * 120 = 48
    { id: "D", text: "$48$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The rate is $\\frac{45}{18} = 2.5$ images per minute. A $2$-hour session is $120$ minutes, so $120 \\times 2.5 = 300$ images.\n\n**The Full Solution:**\nStep 1: Match units. The cycle is measured in minutes, so convert the session: $2$ hours $= 120$ minutes.\nStep 2: Set up a proportion of images to minutes: $\\frac{45}{18} = \\frac{x}{120}$.\nStep 3: Cross-multiply: $18x = 45 \\times 120 = 5400$, so $x = \\frac{5400}{18} = 300$ images, which is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): skips the unit conversion and uses $2$ hours directly: $\\frac{45 \\times 2}{18} = 5$.\n* Choice C ($120$): reports the session length in minutes instead of the image count.\n* Choice D ($48$): inverts the rate, computing $\\frac{18}{45} \\times 120 = 48$.\n\n**Test Day Takeaway:** Match units before building a proportion — convert hours to minutes first, then scale the rate.",
  skills: ["ratios", "proportions", "unit-conversion"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A model estimates that at the end of each year from $2017$ to $2022$, the number of deer in a population was $150\\%$ more than the number of deer at the end of the previous year. The model estimates that at the end of $2018$, there were $200$ deer. Which equation represents this model, where $n$ is the number of deer $t$ years after the end of $2017$ and $t \\le 5$?",
  choices: [
    // distractor: reads "150% more" as growth factor 1.5 instead of 2.5, but does back-solve the initial to 80
    { id: "A", text: "$n = 80(1.5)^t$" },
    { id: "B", text: "$n = 80(2.5)^t$" },
    // distractor: uses the 2018 count 200 as the t=0 initial value without back-calculating, AND misreads the factor as 1.5
    { id: "C", text: "$n = 200(1.5)^t$" },
    // distractor: uses the 2018 count 200 as the t=0 initial value instead of back-calculating to 80
    { id: "D", text: "$n = 200(2.5)^t$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** \"$150\\%$ more\" means a growth factor of $1 + 1.5 = 2.5$. The end of $2018$ is $t = 1$ with $n = 200$, so the start value is $n_0 = \\frac{200}{2.5} = 80$, giving $n = 80(2.5)^t$.\n\n**The Full Solution:**\nStep 1: Convert the rate to a factor. \"$p\\%$ more\" means $100\\% + p\\%$ of the previous value, so \"$150\\%$ more\" is $250\\%$, a factor of $2.5$ per year. The model is $n = n_0(2.5)^t$.\nStep 2: Anchor the data point. Since $t$ counts years after the end of $2017$, the end of $2018$ is $t = 1$, where $n = 200$: $200 = n_0(2.5)^1 = 2.5\\,n_0$.\nStep 3: Solve for the initial value: $n_0 = \\frac{200}{2.5} = 80$. So $n = 80(2.5)^t$, which is choice B. Check: at $t = 1$, $n = 80(2.5) = 200$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($n = 80(1.5)^t$): pairs the correct coefficient $80$ with a factor of $1.5$, misreading \"$150\\%$ more\" as a $1.5\\times$ growth.\n* Choice C ($n = 200(1.5)^t$): both misreads the factor as $1.5$ and treats the $2018$ count $200$ as the $t = 0$ value.\n* Choice D ($n = 200(2.5)^t$): uses the right factor $2.5$ but anchors $200$ at $t = 0$, ignoring that the end of $2018$ is $t = 1$.\n\n**Test Day Takeaway:** \"$p\\%$ more\" is a factor of $1 + \\frac{p}{100}$. Then anchor the initial value at $t = 0$: if the given point is at $t = 1$, divide it by the factor to recover $n_0$.",
  skills: ["exponential-functions", "exponential-growth"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the system of equations below, $a$ is a constant.\n\n$\\dfrac{2}{3}x - \\dfrac{1}{2}y = 5$\n$ax - 3y = 24$\n\nIf the system has no solution, what is the value of $a$?",
  choices: [
    // distractor: uses the bare y-coefficient 3 instead of 3 ÷ (1/2): a/(2/3) = 3 gives a = (2/3)(3) = 2
    { id: "A", text: "$2$" },
    // distractor: finds the correct ratio 6 but scales it by 1/2 instead of 2/3: a = 6(1/2) = 3
    { id: "B", text: "$3$" },
    { id: "C", text: "$4$" },
    // distractor: keeps the coefficient ratio 6 as the answer, forgetting to multiply by 2/3
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** No solution means the lines are parallel: equal coefficient ratios on $x$ and $y$. So $\\frac{a}{\\frac{2}{3}} = \\frac{-3}{-\\frac{1}{2}} = 6$, giving $a = 6 \\cdot \\frac{2}{3} = 4$.\n\n**The Full Solution:**\nStep 1: A linear system has no solution exactly when the lines are parallel — the $x$- and $y$-coefficients are in the same ratio but the constants are not.\nStep 2: Match the $y$-coefficients $-\\frac{1}{2}$ and $-3$: their ratio is $\\frac{-3}{-\\frac{1}{2}} = (-3) \\cdot (-2) = 6$.\nStep 3: Set the $x$-coefficient ratio equal to it: $\\frac{a}{\\frac{2}{3}} = 6 \\Rightarrow a = 6 \\cdot \\frac{2}{3} = 4$, which is choice C.\nStep 4: Confirm it is \"no solution,\" not \"infinitely many.\" With $a = 4$ the second equation is $4x - 3y = 24$, which is $6$ times the left side of the first equation; but $6 \\cdot 5 = 30 \\neq 24$, so the constants disagree. The lines are parallel and distinct. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): uses the bare $y$-coefficient $3$ as the ratio, getting $\\frac{a}{\\frac{2}{3}} = 3$ and $a = 2$.\n* Choice B ($3$): finds the correct ratio $6$ but multiplies by $\\frac{1}{2}$ instead of $\\frac{2}{3}$, getting $a = 3$.\n* Choice D ($6$): stops at the coefficient ratio $6$ without multiplying back by $\\frac{2}{3}$.\n\n**Test Day Takeaway:** No solution means matching coefficient ratios on $x$ and $y$ (parallel lines) but a constant that breaks the proportion. Solve the ratio equation all the way through.",
  skills: ["systems-of-equations", "linear-functions"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Line $\\ell$ passes through the points $(-2, 7)$ and $(4, 1)$. Line $m$ is perpendicular to line $\\ell$ and can be written in the form $kx - 5y = 12$, where $k$ is a constant. What is the value of $k$?",
  choices: [
    { id: "A", text: "$5$" },
    // distractor: uses the slope of line l itself (-1) as the target instead of its negative reciprocal, giving k = -5
    { id: "B", text: "$-5$" },
    // distractor: multiplies the slopes' denominators instead of taking the reciprocal
    { id: "C", text: "$-25$" },
    // distractor: scales k by 5 a second time after solving k/5 = 1
    { id: "D", text: "$25$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Slope of $\\ell = \\frac{1-7}{4-(-2)} = \\frac{-6}{6} = -1$, so the perpendicular slope is $+1$. In standard form $kx - 5y = 12$ the slope is $-\\frac{k}{-5} = \\frac{k}{5}$. Set $\\frac{k}{5} = 1 \\Rightarrow k = 5$.\n\n**The Full Solution:**\nStep 1: Find the slope of $\\ell$: $m_\\ell = \\frac{1-7}{4-(-2)} = \\frac{-6}{6} = -1$.\nStep 2: A perpendicular line has the negative reciprocal slope: $m = -\\frac{1}{-1} = 1$.\nStep 3: For $Ax + By = C$ the slope is $-\\frac{A}{B}$. Here $A = k$ and $B = -5$, so the slope of $m$ is $-\\frac{k}{-5} = \\frac{k}{5}$.\nStep 4: Set it equal to $1$: $\\frac{k}{5} = 1 \\Rightarrow k = 5$, which is choice A. Check: $5x - 5y = 12 \\Rightarrow y = x - \\frac{12}{5}$, slope $+1$, perpendicular to slope $-1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-5$): uses the slope of $\\ell$ itself ($-1$) as the target instead of its negative reciprocal.\n* Choice C ($-25$): multiplies through by an extra factor of $5$ rather than taking the reciprocal.\n* Choice D ($25$): scales $k$ by $5$ a second time after already solving $\\frac{k}{5} = 1$.\n\n**Test Day Takeaway:** Standard-form slope is $-\\frac{A}{B}$, and perpendicular slopes are negative reciprocals — their product is $-1$.",
  skills: ["linear-functions", "perpendicular-lines"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A storage block is a cube with edge length $12$ centimeters. The largest possible right circular cylinder is carved out of the block so that the cylinder's circular bases lie on two opposite faces of the cube and its curved surface just touches the other four faces. To the nearest cubic centimeter, what volume of the original cube remains after the cylinder is removed?",
  choices: [
    { id: "A", text: "$371$" },
    // distractor: reports the carved cylinder's volume instead of the remaining solid
    { id: "B", text: "$1{,}357$" },
    // distractor: uses the full cube volume without subtracting the cylinder
    { id: "C", text: "$1{,}728$" },
    // distractor: uses the cube edge 12 as the cylinder radius instead of 6
    { id: "D", text: "$5{,}429$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Inscribed Solid Volume**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** The largest inscribed cylinder has radius $\\frac{12}{2} = 6$ and height $12$, so $V_{\\text{cyl}} = \\pi(6)^2(12) = 432\\pi \\approx 1{,}357$. Remaining $= 1{,}728 - 1{,}357 = 371$.\n\n**The Full Solution:**\nStep 1: Cube volume: $V_{\\text{cube}} = 12^3 = 1{,}728$ cubic centimeters.\nStep 2: The cylinder's bases lie on opposite faces, so its height equals the edge, $h = 12$. Its curved surface touches all four side faces, so its diameter equals the edge: $r = 6$.\nStep 3: $V_{\\text{cyl}} = \\pi r^2 h = \\pi(6)^2(12) = 432\\pi \\approx 1{,}357.17$.\nStep 4: Subtract: $1{,}728 - 1{,}357.17 \\approx 370.83$, which rounds to $371$ cubic centimeters — choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($1{,}357$): reports the carved-out cylinder's volume instead of what remains.\n* Choice C ($1{,}728$): gives the full cube volume without subtracting the cylinder.\n* Choice D ($5{,}429$): uses the edge $12$ as the radius instead of $6$, inflating the cylinder.\n\n**Test Day Takeaway:** For the largest cylinder inside a cube, the radius is half the edge and the height is the full edge. Subtract the carved solid from the whole to get the remainder.",
  skills: ["volume-cylinder", "volume-prism"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  question: "The equation $5x^2 - bx + 45 = 0$ has no real solutions, where $b$ is a positive integer. What is the greatest possible value of $b$?",
  choices: [
    // distractor: misses strict inequality, gives b = 30 (when discriminant = 0)
    { id: "A", text: "$30$" },
    { id: "B", text: "$29$" },
    // distractor: returns b^2 < 900 boundary in wrong form
    { id: "C", text: "$28$" },
    // distractor: doesn't divide by 4: just 4 \cdot 5 \cdot 45 = 900
    { id: "D", text: "$900$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** No real solutions means discriminant $< 0$: $b^2 - 4(5)(45) < 0 \\Rightarrow b^2 < 900 \\Rightarrow b < 30$. The greatest positive integer is $b = 29$.\n\n**The Full Solution:**\nStep 1: A quadratic has no real solutions when its discriminant is negative: $b^2 - 4ac < 0$.\nStep 2: Substitute $a = 5$, $c = 45$: $b^2 - 4(5)(45) < 0 \\Rightarrow b^2 - 900 < 0 \\Rightarrow b^2 < 900$.\nStep 3: This gives $-30 < b < 30$. Since $b$ is a positive integer and the inequality is strict, the greatest value is $b = 29$, which is choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($30$): ignores the strict inequality; at $b = 30$ the discriminant is $0$, so there is exactly one real solution.\n* Choice C ($28$): drops down one extra value past the correct boundary.\n* Choice D ($900$): reports $b^2$ instead of $b$.\n\n**Test Day Takeaway:** \"No real solutions\" means discriminant $< 0$ (strict); \"exactly one solution\" means discriminant $= 0$. Read the boundary carefully.",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A marine biologist models the live coral cover of a reef colony with the function $C(t) = 95(1.07)^{(3/4)t}$, where $C(t)$ is the percent of the original cover present $t$ years after monitoring began. According to the model, the coral cover is predicted to increase by $7\\%$ every $n$ months. What is the value of $n$?",
  choices: [
    // distractor: inverts the exponent fraction, treating 3/4 of a year (9 months) as the growth period
    { id: "A", text: "$9$" },
    // distractor: ignores the (3/4) exponent factor and assumes the 7% applies once per 12-month year
    { id: "B", text: "$12$" },
    { id: "C", text: "$16$" },
    // distractor: uses the denominator 4 as a number of years and converts to months: 4 × 12 = 48
    { id: "D", text: "$48$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The base $1.07$ is applied once each time the exponent $\\frac{3}{4}t$ rises by $1$, which happens when $t$ increases by $\\frac{4}{3}$ year $= \\frac{4}{3} \\cdot 12 = 16$ months. So $n = 16$.\n\n**The Full Solution:**\nStep 1: Each factor of $1.07$ multiplies the cover by $1 + 0.07$, a $7\\%$ increase. One such factor appears each time the exponent $\\frac{3}{4}t$ grows by a whole unit.\nStep 2: Solve for that time interval: $\\frac{3}{4}\\,\\Delta t = 1 \\Rightarrow \\Delta t = \\frac{4}{3}$ year.\nStep 3: Convert to months: $\\Delta t = \\frac{4}{3} \\cdot 12 = 16$ months, so $n = 16$ — choice C. Check: over $16$ months the exponent rises by $\\frac{3}{4} \\cdot \\frac{4}{3} = 1$, multiplying the cover by $1.07^1$, exactly one $7\\%$ step. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): treats $\\frac{3}{4}$ of a year as the period, computing $\\frac{3}{4} \\cdot 12 = 9$ instead of taking the reciprocal of the exponent coefficient first.\n* Choice B ($12$): assumes the $7\\%$ applies once per calendar year, as if the exponent were just $t$.\n* Choice D ($48$): reads the denominator $4$ as years and converts $4 \\cdot 12 = 48$, instead of using $\\frac{4}{3}$ year.\n\n**Test Day Takeaway:** For $(1+r)^{kt}$ the quantity grows by one factor of $(1+r)$ each time $t$ increases by $\\frac{1}{k}$. Take the reciprocal of the exponent's coefficient first, then convert to the requested units.",
  skills: ["exponential-functions", "function-interpretation"]
}
      ]
    }
  ]
};

export default practiceTest2;
