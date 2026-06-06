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
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Total $\\times 0.44 = 1{,}540$, so total $= \\dfrac{1{,}540}{0.44} = 3{,}500$.\n\n**The Full Solution:**\nLet $T$ be the total student count. Then ${}0.44 \\cdot T = 1{,}540$.\nDivide both sides by $0.44$: $T = \\dfrac{1{,}540}{0.44} = 3{,}500$.\n\nVerification: $44\\%$ of $3{,}500 = 0.44 \\cdot 3{,}500 = 1{,}540$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — multiplies $1{,}540 \\cdot 0.44 \\approx 678$ instead of dividing.\n* Choice B: \"wrong base\" — divides by the complement $0.56$ (treats $1{,}540$ as the count of students NOT taking a language).\n* Choice D: \"off-by-one / decimal slip\" — divides by $0.044$ instead of $0.44$.\n\n**Test Day Takeaway:** When a percent of an unknown total is given, divide the part by the percent (as a decimal) to recover the whole.",
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
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Paperbacks make up $\\dfrac{5}{5+3} = \\dfrac{5}{8}$ of the total. So paperbacks $= \\dfrac{5}{8} \\cdot 48 = 30$.\n\n**The Full Solution:**\nLet paperbacks $= 5k$ and hardcovers $= 3k$.\nTotal: $5k + 3k = 8k = 48$, so $k = 6$.\nPaperbacks $= 5k = 5 \\cdot 6 = 30$.\n\nVerification: hardcovers $= 3 \\cdot 6 = 18$, total $= 30 + 18 = 48$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports $5$ (the paperback ratio number) directly.\n* Choice B: \"applies the inverse operation\" — solves for hardcovers ($\\dfrac{3}{8} \\cdot 48 = 18$) instead of paperbacks.\n* Choice D: \"wrong base\" — uses $\\dfrac{5}{3}$ instead of $\\dfrac{5}{8}$.\n\n**Test Day Takeaway:** When parts are given as a ratio and the total is known, the denominator is the SUM of the ratio parts (not just one part).",
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
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Cross-multiply: $3y \\cdot 4 = 8 \\cdot 27$, so $12y = 216$ and $y = 18$. Then $y - 6 = 12$.\n\n**The Full Solution:**\n$\\dfrac{3y}{8} = \\dfrac{27}{4}$\n\nCross-multiply: $4 \\cdot 3y = 8 \\cdot 27 \\Rightarrow 12y = 216 \\Rightarrow y = 18$.\n\nThe question asks for $y - 6$, not $y$: $18 - 6 = 12$.\n\nVerification: $\\dfrac{3(18)}{8} = \\dfrac{54}{8} = \\dfrac{27}{4}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — solves for $y$ correctly but forgets to subtract $6$.\n* Choice C: \"applies the inverse operation\" — adds $6$ to $y$ instead of subtracting.\n* Choice D: \"wrong base\" — keeps $3y$ instead of solving for $y$.\n\n**Test Day Takeaway:** Always re-read the last sentence before answering. The question often asks for a related quantity, not the variable itself.",
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
  explanation: "**SAT Pattern: Function Evaluation in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $g(4) = 250 - 18(4) = 250 - 72 = 178$.\n\n**The Full Solution:**\nIn $g(x) = 250 - 18x$, the constant $250$ is the initial amount and $-18$ is the drain rate (gallons per hour). After $4$ hours:\n$g(4) = 250 - 18(4) = 250 - 72 = 178$ gallons.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — computes the amount drained ($72$ gal) and reports it instead of the amount remaining.\n* Choice C: \"applies the inverse operation\" — adds instead of subtracts: $250 + 18(4) - 100 = 232$.\n* Choice D: \"off-by-one\" — subtracts only one drain hour ($250 - 18 = 232$) or mis-counts the hours.\n\n**Test Day Takeaway:** When a function models a quantity over time, the constant is the starting value and the coefficient of the variable is the rate of change. \"Remaining\" $\\neq$ \"drained.\"",
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
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Each extra pound adds $\\$5$ in shipping. $4$ extra pounds add $4 \\cdot \\$5 = \\$20$. New total: $\\$48 + \\$20 = \\$68$. The flat fee does not change.\n\n**The Full Solution:**\nLet the original equation be $5w + 3 = 48$, so $5w = 45$ and $w = 9$.\nFor $w + 4 = 13$ pounds: total $= 5(13) + 3 = 65 + 3 = \\$68$.\n\nShortcut: you do not need to find $w$. Adding $4$ pounds adds $4 \\cdot \\$5 = \\$20$ in weight charge. The flat fee is unchanged, so total is $\\$48 + \\$20 = \\$68$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — adds the count $4$ as dollars instead of $4 \\cdot \\$5 = \\$20$.\n* Choice B: \"off-by-one\" — doubles the per-pound rate, getting $\\$48 + 4 \\cdot \\$10 = \\$88$ then mis-rounds.\n* Choice D: \"wrong base\" — uses the fee ($\\$3$) as the per-pound rate, giving $\\$48 + 4 \\cdot \\$3 = \\$60$.\n\n**Test Day Takeaway:** Linear cost = (rate $\\times$ quantity) + fixed fee. Adding more units changes only the rate-times-quantity piece — the fixed fee stays the same.",
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
  explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Given the student passed, look at the 'Passed' column only. Studied and passed: $72$. Total passed: $105$. Probability: $\\dfrac{72}{105}$.\n\n**The Full Solution:**\nThe condition is 'given that the student passed,' so the sample space is restricted to the $105$ students who passed. Of those, $72$ studied.\n\n$P(\\text{Studied} \\mid \\text{Passed}) = \\dfrac{72}{105}$\n\nThis simplifies to $\\dfrac{24}{35} \\approx 0.686$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses the grand total $140$ as the denominator instead of the column total.\n* Choice C: \"applies the inverse operation\" — uses the row total $80$ (all who studied), confusing the condition.\n* Choice D: \"stops one step early\" — gives $P(\\text{Passed})$, not the conditional probability asked for.\n\n**Test Day Takeaway:** 'Given that X' means restrict your denominator to the total for X.",
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
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $\\sin 40^{\\circ} = \\dfrac{\\text{opposite}}{\\text{hypotenuse}} = \\dfrac{12}{h}$, so $h = \\dfrac{12}{\\sin 40^{\\circ}}$.\n\n**The Full Solution:**\nIn a right triangle, $\\sin(\\theta) = \\dfrac{\\text{opposite}}{\\text{hypotenuse}}$. For the $40^{\\circ}$ angle, the opposite side is $12$ and the hypotenuse is $h$:\n$\\sin 40^{\\circ} = \\dfrac{12}{h} \\Rightarrow h = \\dfrac{12}{\\sin 40^{\\circ}}$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — uses cosine, which relates the adjacent side, not the opposite.\n* Choice C: \"applies the inverse operation\" — multiplies by sine, but $\\sin 40^{\\circ} < 1$, so the result is less than $12$ — smaller than the opposite leg. The hypotenuse must be the longest side.\n* Choice D: \"applies the inverse operation\" + \"wrong base\" — both errors (cosine AND multiplication).\n\n**Test Day Takeaway:** SOH-CAH-TOA: Sine $= \\dfrac{\\text{Opposite}}{\\text{Hypotenuse}}$. To find the hypotenuse from the opposite leg, divide by $\\sin$.",
  skills: ["triangles", "right-triangles", "trigonometry"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $5(3x + 2) - 7 = 8x + 24$, what is the value of $x$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~15s):** Expand: $15x + 10 - 7 = 8x + 24$, so $15x + 3 = 8x + 24$, then $7x = 21$, giving $x = 3$.\n\n**The Full Solution:**\n$5(3x + 2) - 7 = 8x + 24$\n$15x + 10 - 7 = 8x + 24$\n$15x + 3 = 8x + 24$\n$15x - 8x = 24 - 3$\n$7x = 21$\n$x = 3$\n\n**Common Mistakes to Avoid:**\n* Forgetting to distribute the $5$ to both the $3x$ and the $2$.\n* Combining $10 - 7$ incorrectly (gives $3$, not $17$).\n\n**Verification:** Left: $5(3(3) + 2) - 7 = 5(11) - 7 = 55 - 7 = 48$. Right: $8(3) + 24 = 24 + 24 = 48$ \\checkmark.\n\n**Test Day Takeaway:** Distribute, combine like terms, isolate the variable, verify.",
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
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $y = -0.6(30) + 45 = -18 + 45 = 27$.\n\n**The Full Solution:**\nSubstitute $x = 30$:\n$y = -0.6(30) + 45 = -18 + 45 = 27$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — computes $-0.6(30) = -18$ and reports the absolute value, forgetting to add the intercept.\n* Choice B: \"wrong base\" — uses slope $-0.7$ instead of $-0.6$.\n* Choice D: \"applies the inverse operation\" — adds $18 + 45 = 63$ instead of subtracting.\n\n**Test Day Takeaway:** Pay attention to the sign of the slope. A negative slope means the product $mx$ is subtracted from the $y$-intercept.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A solid right circular cylinder has a radius of $5$ inches and a height of $7$ inches. The volume of the cylinder, in cubic inches, can be expressed as $k\\pi$. What is the value of $k$?",
  correctAnswer: "175",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $175$.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (5)^2 (7) = 25 \\cdot 7 \\pi = 175\\pi$. So $k = 175$.\n\n**The Full Solution:**\nThe volume formula for a right circular cylinder is $V = \\pi r^2 h$.\nWith $r = 5$ in and $h = 7$ in:\n$V = \\pi (5)^2 (7) = \\pi (25)(7) = 175\\pi$ cubic inches.\nSo $k = 175$.\n\n**Common Mistakes to Avoid:**\n* Forgetting to square the radius — using $\\pi r h$ would give $35\\pi$, so $k = 35$.\n* Confusing the cylinder formula with the cone formula $V = \\dfrac{1}{3}\\pi r^2 h$, which gives a value one-third as large.\n\n**Verification:** $\\pi (25)(7) = 175\\pi$ \\checkmark.\n\n**Test Day Takeaway:** For a cylinder, square the radius first, then multiply by the height. $V = \\pi r^2 h$ is on the SAT Reference Sheet.",
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
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Add the equations: $8x = 32$, so $x = 4$. Substitute: $3(4) + 4y = -8$, giving $4y = -20$ and $y = -5$. Then $x + y = 4 + (-5) = -1$.\n\n**The Full Solution:**\nAdd the two equations to eliminate $y$:\n$(3x + 4y) + (5x - 4y) = -8 + 40$\n$8x = 32$\n$x = 4$\n\nSubstitute $x = 4$ into $3x + 4y = -8$:\n$12 + 4y = -8$\n$4y = -20$\n$y = -5$\n\nSo $x + y = 4 + (-5) = -1$.\n\nVerification: $3(4) + 4(-5) = 12 - 20 = -8$ \\checkmark and $5(4) - 4(-5) = 20 + 20 = 40$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — arithmetic error in the substitution gives $y = -7$ and $x + y = -3$.\n* Choice C: \"wrong base\" — picks an arithmetic slip from the elimination step.\n* Choice D: \"applies the inverse operation\" — computes $x - y = 4 - (-5) = 9$ and confuses with another slip giving $3$.\n\n**Test Day Takeaway:** When coefficients of one variable are opposites, ADD the equations to eliminate it. Then re-read the final question — make sure you answer $x + y$, not just $x$ or $y$.",
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
  explanation: "**SAT Pattern: Line from Slope and Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $y = mx + b$: $1 = -\\dfrac{3}{4}(8) + b = -6 + b$, so $b = 7$. The equation is $y = -\\dfrac{3}{4}x + 7$.\n\n**The Full Solution:**\nUsing slope-intercept form $y = mx + b$ with $m = -\\dfrac{3}{4}$ and point $(8, 1)$:\n$1 = -\\dfrac{3}{4}(8) + b$\n$1 = -6 + b$\n$b = 7$\n\nEquation: $y = -\\dfrac{3}{4}x + 7$\n\nVerification: At $(8, 1)$: $-\\dfrac{3}{4}(8) + 7 = -6 + 7 = 1$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"off-by-one\" — arithmetic slip getting $b = 5$ instead of $7$.\n* Choice C: \"applies the inverse operation\" — sign error: writes $b$ negative.\n* Choice D: \"wrong base\" — subtracts the $x$-coordinate from the $y$-coordinate without using the slope.\n\n**Test Day Takeaway:** Plug the point into $y = mx + b$ and solve for $b$. Always verify by substituting the point into your final equation.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The mean of $5$ numbers is $42$. If one of the numbers is removed, the mean of the remaining $4$ numbers is $38$. What is the number that was removed?",
  correctAnswer: "58",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $58$.**\n\n**The Fast Way (~15s):** Total of $5$ numbers: $5 \\times 42 = 210$. Total of remaining $4$: $4 \\times 38 = 152$. Removed number: $210 - 152 = 58$.\n\n**The Full Solution:**\nMean $= \\dfrac{\\text{sum}}{\\text{count}}$, so sum $= \\text{mean} \\times \\text{count}$.\n\nOriginal sum: $5 \\times 42 = 210$.\nRemaining sum: $4 \\times 38 = 152$.\nRemoved number: $210 - 152 = 58$.\n\n**Common Mistakes to Avoid:**\n* Computing $42 - 38 = 4$ and reporting $4$ as the removed number.\n* Forgetting to multiply mean by count to get the sum.\n\n**Verification:** $(152 + 58) \\div 5 = 210 \\div 5 = 42$ \\checkmark, and $152 \\div 4 = 38$ \\checkmark.\n\n**Test Day Takeaway:** Sum = mean $\\times$ count. Use this identity to convert between means and totals.",
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
  explanation: "**SAT Pattern: Solving with Function Notation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $-3a + 11 = -7$, so $-3a = -18$ and $a = 6$.\n\n**The Full Solution:**\n$g(a) = -7$ means:\n$-3a + 11 = -7$\n$-3a = -7 - 11 = -18$\n$a = 6$\n\nVerification: $g(6) = -3(6) + 11 = -18 + 11 = -7$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — gets $-3a = 18$ by adding $11$ instead of subtracting, giving $a = -6$.\n* Choice B: \"off-by-one\" — solves $-3a + 11 = 7$ (drops the negative on $-7$).\n* Choice D: \"wrong base\" — computes $-7 \\cdot (-3) + 11 = 32$, confusing input and output.\n\n**Test Day Takeaway:** $g(a) = -7$ means 'plug in $a$ for $x$ and set the expression equal to $-7$.' Then solve for $a$.",
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
  explanation: "**SAT Pattern: Exponent Rules with Multiple Variables**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Numerator: $3^4 x^8 y^{12} = 81x^8y^{12}$. Divide by $9x^5y^7$: $\\dfrac{81}{9} = 9$, $x^{8-5} = x^3$, $y^{12-7} = y^5$. So $9x^3y^5$. Then $a + b + c = 9 + 3 + 5 = 17$.\n\n**The Full Solution:**\nSimplify the numerator: $(3x^2y^3)^4 = 3^4 \\cdot (x^2)^4 \\cdot (y^3)^4 = 81x^8y^{12}$.\n\nDivide by the denominator:\n$\\dfrac{81x^8y^{12}}{9x^5y^7} = \\dfrac{81}{9} \\cdot x^{8-5} \\cdot y^{12-7} = 9x^3y^5$\n\nSo $a = 9$, $b = 3$, $c = 5$. $a + b + c = 17$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"off-by-one\" — gets $a = 9$ but miscalculates one exponent (e.g., $x^{8-5} = x^4$ giving $9 + 4 + 5 = 18$, then mis-records as $19$).\n* Choice C: \"applies the inverse operation\" — keeps $a = 81$ but reduces the exponents (e.g., $81 + (-5) + 7$).\n* Choice D: \"wrong base\" — forgets to raise $3$ to the $4$th power: $(3x^2y^3)^4 = 3x^8y^{12}$ then $a = 3$, $b = 3$, $c = 17$.\n\n**Test Day Takeaway:** Apply the power rule to every factor inside parentheses (the coefficient too), then divide by subtracting exponents.",
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
  explanation: "**SAT Pattern: Area with Radical Side Lengths**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~15s):** Area $= \\dfrac{1}{2} \\cdot 3\\sqrt{5} \\cdot 4\\sqrt{5} = \\dfrac{1}{2} \\cdot 12 \\cdot 5 = \\dfrac{60}{2} = 30$.\n\n**The Full Solution:**\nArea of a right triangle $= \\dfrac{1}{2} \\times \\text{leg}_1 \\times \\text{leg}_2$.\n\n$= \\dfrac{1}{2} \\times 3\\sqrt{5} \\times 4\\sqrt{5}$\n\n$= \\dfrac{1}{2} \\times (3 \\times 4) \\times (\\sqrt{5} \\times \\sqrt{5})$\n\n$= \\dfrac{1}{2} \\times 12 \\times 5$\n\n$= \\dfrac{60}{2} = 30$\n\n**Common Mistakes to Avoid:**\n* Forgetting that $\\sqrt{5} \\times \\sqrt{5} = 5$, not $\\sqrt{10}$.\n* Forgetting the $\\dfrac{1}{2}$ factor, giving $60$ instead of $30$.\n\n**Verification:** $3\\sqrt{5} \\approx 6.71$ and $4\\sqrt{5} \\approx 8.94$. Area $\\approx \\dfrac{1}{2}(6.71)(8.94) \\approx 30$ \\checkmark.\n\n**Test Day Takeaway:** When multiplying radicals, $\\sqrt{a} \\times \\sqrt{a} = a$. Separate coefficients from radicals to simplify.",
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
  explanation: "**SAT Pattern: Exponential Function with Two Conditions**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** At $x = 0$: $-a + b = 5$. At $x = 2$: $-4a + b = -4$. Subtract first from second: $-3a = -9$, so $a = 3$. Then $b = 5 + 3 = 8$. So $a + b = 11$.\n\n**The Full Solution:**\nAt $x = 0$: $f(0) = -a \\cdot 2^0 + b = -a + b = 5$.\nAt $x = 2$: $f(2) = -a \\cdot 2^2 + b = -4a + b = -4$.\n\nSubtract the first equation from the second:\n$(-4a + b) - (-a + b) = -4 - 5$\n$-3a = -9$\n$a = 3$\n\nSubstitute back: $-3 + b = 5$, so $b = 8$. $a + b = 11$.\n\nVerification: $f(x) = -3 \\cdot 2^x + 8$. $f(0) = -3 + 8 = 5$ \\checkmark, $f(2) = -12 + 8 = -4$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reads the $y$-intercept value $5$ and adds $2$.\n* Choice B: \"off-by-one\" — arithmetic error giving $b = 6$ instead of $8$.\n* Choice D: \"wrong base\" — reports $a + 2b$ or similar mis-combination.\n\n**Test Day Takeaway:** Use two points to create a system of equations. The $y$-intercept ($x = 0$) simplifies exponentials since any base raised to $0$ is $1$.",
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
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Discriminant $= 0$: $(-5)^2 - 4(3)(k) = 0$, so $25 - 12k = 0$, giving $k = \\dfrac{25}{12}$.\n\n**The Full Solution:**\nA quadratic $ax^2 + bx + c = 0$ has exactly one real solution when the discriminant equals zero:\n$b^2 - 4ac = 0$\n\nHere $a = 3$, $b = -5$, $c = k$:\n$(-5)^2 - 4(3)(k) = 0$\n$25 - 12k = 0$\n$12k = 25$\n$k = \\dfrac{25}{12}$\n\nVerification: With $k = \\dfrac{25}{12}$, discriminant $= 25 - 4(3) \\cdot \\dfrac{25}{12} = 25 - 25 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — inverts the fraction.\n* Choice C: \"wrong base\" — uses $\\dfrac{b}{a}$ instead of $\\dfrac{b^2}{4a}$.\n* Choice D: \"off-by-one\" — divides by $a$ instead of $4a$, getting $\\dfrac{25}{3}$.\n\n**Test Day Takeaway:** Exactly one solution means discriminant $= 0$. Set $b^2 - 4ac = 0$ and solve for the unknown.",
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
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Complete the square: $(x+4)^2 + (y-7)^2 = 16 + 49 - 40 = 25$. Radius $= 5$. Area $= 25\\pi$.\n\n**The Full Solution:**\nGroup and complete the square:\n$(x^2 + 8x) + (y^2 - 14y) = -40$\n\n$x$: half of $8$ is $4$, square is $16$: $(x + 4)^2$.\n$y$: half of $-14$ is $-7$, square is $49$: $(y - 7)^2$.\n\n$(x + 4)^2 + (y - 7)^2 = -40 + 16 + 49 = 25$.\n\nSo $r^2 = 25$, $r = 5$. Area $= \\pi r^2 = 25\\pi$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses $r^2 = 5$ from a miscalculation that skips a constant.\n* Choice B: \"stops one step early\" — only completes one square, getting $r^2 = 9$.\n* Choice D: \"off-by-one\" — computes $16 + 49 = 65$ without subtracting $40$, then mis-rounds to $81$.\n\n**Test Day Takeaway:** Complete BOTH squares, then $r^2 = $ right side. Area $= \\pi r^2$.",
  skills: ["circle-equations", "coordinate-geometry", "area"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $(2x + k)(3x - 4) = 6x^2 + 7x + m$ for all values of $x$, what is the value of $m$?",
  correctAnswer: "-20",
  explanation: "**SAT Pattern: Matching Coefficients**\n\n**The correct answer is $-20$.**\n\n**The Fast Way (~20s):** Expand: $6x^2 - 8x + 3kx - 4k = 6x^2 + (3k - 8)x - 4k$. Match $x$-coefficient: $3k - 8 = 7$, so $k = 5$. Then $m = -4k = -20$.\n\n**The Full Solution:**\nExpand the left side:\n$(2x + k)(3x - 4) = 6x^2 - 8x + 3kx - 4k = 6x^2 + (3k - 8)x - 4k$\n\nMatch with $6x^2 + 7x + m$:\n* $x^2$ coefficient: $6 = 6$ \\checkmark\n* $x$ coefficient: $3k - 8 = 7 \\Rightarrow 3k = 15 \\Rightarrow k = 5$\n* constant: $-4k = m \\Rightarrow m = -4(5) = -20$\n\n**Common Mistakes to Avoid:**\n* Finding $k = 5$ but reporting $k$ instead of $m$.\n* Sign error on $-4k$, getting $m = +20$.\n\n**Verification:** $(2x + 5)(3x - 4) = 6x^2 - 8x + 15x - 20 = 6x^2 + 7x - 20$ \\checkmark.\n\n**Test Day Takeaway:** Expand, match coefficients term by term, and answer the variable that's actually asked for.",
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
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Vertex $(3, -5)$: $f(x) = a(x - 3)^2 - 5$. Use $(7, 27)$: $27 = 16a - 5$, so $a = 2$. Then $f(0) = 2(9) - 5 = 13$.\n\n**The Full Solution:**\nThe minimum at $x = 3$ with value $-5$ means the vertex is $(3, -5)$:\n$f(x) = a(x - 3)^2 - 5$\n\nUsing the point $(7, 27)$:\n$27 = a(7 - 3)^2 - 5$\n$27 = 16a - 5$\n$32 = 16a$\n$a = 2$\n\nNow find $f(0)$: $f(0) = 2(0 - 3)^2 - 5 = 2(9) - 5 = 18 - 5 = 13$.\n\nVerification: $f(7) = 2(4)^2 - 5 = 32 - 5 = 27$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses $a = 1$ instead of $a = 2$.\n* Choice C: \"off-by-one\" — computes $(0 - 3)^2 = 10$ instead of $9$.\n* Choice D: \"applies the inverse operation\" — misremembers vertex $y$-coordinate, computing $2(9) + 4 = 22$.\n\n**Test Day Takeaway:** Minimum/maximum value gives the vertex. Find $a$ from a second point, then evaluate wherever needed.",
  skills: ["vertex-form", "quadratic-equations", "function-interpretation"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "For $x > 0$, the expression $\\dfrac{\\sqrt[4]{x} \\cdot x^2}{\\sqrt[3]{x}}$ is equal to $x^k$. What is the value of $k$? Express your answer as a fraction.",
  correctAnswer: "23/12",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\dfrac{23}{12}$.**\n\n**The Fast Way (~20s):** $\\sqrt[4]{x} = x^{\\frac{1}{4}}$, $\\sqrt[3]{x} = x^{\\frac{1}{3}}$. Numerator: $x^{\\frac{1}{4}} \\cdot x^2 = x^{\\frac{9}{4}}$. Divide: $x^{\\frac{9}{4} - \\frac{1}{3}} = x^{\\frac{27}{12} - \\frac{4}{12}} = x^{\\frac{23}{12}}$.\n\n**The Full Solution:**\n$\\dfrac{\\sqrt[4]{x} \\cdot x^2}{\\sqrt[3]{x}} = \\dfrac{x^{\\frac{1}{4}} \\cdot x^2}{x^{\\frac{1}{3}}}$\n\nCombine the numerator (add exponents):\n$x^{\\frac{1}{4} + 2} = x^{\\frac{1}{4} + \\frac{8}{4}} = x^{\\frac{9}{4}}$\n\nDivide (subtract exponents):\n$x^{\\frac{9}{4} - \\frac{1}{3}}$\n\nCommon denominator $12$:\n$\\dfrac{9}{4} = \\dfrac{27}{12}, \\quad \\dfrac{1}{3} = \\dfrac{4}{12}, \\quad \\dfrac{27}{12} - \\dfrac{4}{12} = \\dfrac{23}{12}$.\n\nSo $k = \\dfrac{23}{12}$.\n\n**Common Mistakes to Avoid:**\n* Writing $\\sqrt[4]{x} = x^4$ instead of $x^{\\frac{1}{4}}$.\n* Adding the denominator's exponent instead of subtracting it.\n\n**Verification:** $\\dfrac{1}{4} + 2 - \\dfrac{1}{3} = 0.25 + 2 - 0.333 = 1.9167 = \\dfrac{23}{12}$ \\checkmark.\n\n**Test Day Takeaway:** Convert all radicals to fractional exponents. Multiply $=$ add exponents; divide $=$ subtract exponents.",
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
// Hard closers Q17-22 (exponential-growth model, no-solution system, perpendicular
// slope, cube-minus-cylinder volume, discriminant integer-bound, exponential period).
// Pool items infused: D-p1#22 (Q5 radian-degree), D-p26#15 (Q3 mean comparison),
// E#8 (Q8 line-parabola intersection count), D-p39#23 (Q9 linear solve-for-b).
// Carriers use the observatory/snowpack/bookbinding/esports/harbor-ferry/
// butterfly-garden palette.

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
  explanation: "**SAT Pattern: Linear vs Exponential**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** \"Steady rate\" + \"boarding the ferry\" $\\Rightarrow$ increasing linear. Each minute adds the same $14$ passengers, so the change per unit time is constant.\n\n**The Full Solution:**\nThe defining feature of a LINEAR function is a constant rate of change. \"$14$ passengers per minute\" describes exactly that — the same number added each minute. Because passengers are being ADDED (count growing), the slope is positive.\n\nA model would be $P(t) = 30 + 14t$.\n\nVerification: at $t = 0$, $P = 30$; at $t = 1$, $P = 44$; at $t = 2$, $P = 58$. Differences: $+14, +14$ — constant \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong formula\" — exponential growth requires a multiplicative factor each minute (e.g., \"the count doubles each minute\"), not a constant additive rate.\n* Choice C: \"sign error\" — passengers are walking ONTO the ferry (count increases), so the slope is positive.\n* Choice D: \"wrong direction AND wrong type\" — combines both errors.\n\n**Test Day Takeaway:** \"Steady rate of X per unit\" $\\Rightarrow$ LINEAR. The verb (\"boarding/added\" vs \"leaving/removed\") tells you the sign. Reserve EXPONENTIAL for \"multiplied by\" or \"percent\" language.",
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
  explanation: "**SAT Pattern: Linear Cost Setup**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Cost $=$ (per-book rate) $\\times$ (books) $+$ (setup fee) $= 4b + 7$.\n\n**The Full Solution:**\n\"For each book bound\" is a rate that scales with the number of books: $4 \\cdot b = 4b$.\n\"One-time setup fee\" is a single charge that does not depend on $b$: $7$.\nTotal: $C = 4b + 7$.\n\nVerification: an order of $5$ books costs $C = 4(5) + 7 = 27$ dollars \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — swaps the roles, putting the setup fee on $b$ and the rate as the constant.\n* Choice C: \"stops one step early\" — adds the two numbers ($7 + 4 = 11$) without keeping the rate attached to $b$.\n* Choice D: \"applies the inverse operation\" — collapses the setup fee and rate into a single coefficient.\n\n**Test Day Takeaway:** Linear cost $=$ rate $\\times$ quantity $+$ fixed fee. Identify which value scales (rate) and which is constant (one-time fee).",
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
  explanation: "**SAT Pattern: New mean after adding a value**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Compare the added value to the original mean. Original mean $= \\dfrac{38+44+41+47+40}{5} = \\dfrac{210}{5} = 42$. The added value $30$ is below $42$, so the new mean must DROP. Therefore the original mean is greater.\n\n**The Full Solution:**\nOriginal mean $= \\dfrac{210}{5} = 42$.\nNew set adds $30$: new sum $= 210 + 30 = 240$ over $6$ values, so new mean $= \\dfrac{240}{6} = 40$.\nSince $42 > 40$, the original mean is greater than the new mean.\n\nKey insight: a value below the current mean pulls the mean down; a value above it pulls the mean up. You can answer just by comparing $30$ to $42$ — no need to recompute fully.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong direction\" — assumes adding any value raises the mean; here $30 < 42$, so it lowers it.\n* Choice C: \"stops one step early\" — assumes adding a value never moves the mean. It only stays equal if the added value equals the mean ($42$).\n* Choice D: \"overcautious\" — every value is given, so the comparison is fully determined.\n\n**Test Day Takeaway:** To compare means after adding one value, just compare the new value to the OLD mean: below it lowers the mean, above it raises it, equal keeps it the same.",
  skills: ["statistics", "mean"]
},
{
  id: 4,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "Triangles $ABC$ and $DEF$ are similar, with $AB$ corresponding to $DE$. The lengths $AB = 12$ and $DE = 18$. If the perimeter of triangle $ABC$ is $30$, what is the perimeter of triangle $DEF$?",
  correctAnswer: "45",
  explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**The correct answer is $45$.**\n\n**The Fast Way (~15s):** Scale factor $= \\dfrac{DE}{AB} = \\dfrac{18}{12} = \\dfrac{3}{2}$. Perimeter scales by the same factor: $30 \\cdot \\dfrac{3}{2} = 45$.\n\n**The Full Solution:**\nFor similar figures, all corresponding lengths scale by the same factor.\nScale factor: $k = \\dfrac{DE}{AB} = \\dfrac{18}{12} = \\dfrac{3}{2}$.\nThe perimeter of $DEF$ is $k$ times the perimeter of $ABC$:\n$P_{DEF} = \\dfrac{3}{2} \\cdot 30 = 45$.\n\n**Common Mistakes to Avoid:**\n* Adding $18 - 12 = 6$ to the perimeter ($30 + 6 = 36$) — perimeter scales multiplicatively, not additively.\n* Using the area scale factor $k^2$ — that would apply only to areas.\n* Using $\\dfrac{2}{3}$ instead of $\\dfrac{3}{2}$ (inverted ratio).\n\n**Verification:** If side $AB = 12$ scales to $DE = 18$, every side scales by $\\dfrac{3}{2}$, so the sum of sides also scales by $\\dfrac{3}{2}$ \\checkmark.\n\n**Test Day Takeaway:** In similar figures, the perimeter ratio equals the side ratio. The area ratio equals the side ratio squared.",
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
  explanation: "**SAT Pattern: Radian-Degree Conversion**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** $N = \\dfrac{3\\pi}{4} + \\dfrac{7\\pi}{12} = \\dfrac{9\\pi}{12} + \\dfrac{7\\pi}{12} = \\dfrac{16\\pi}{12} = \\dfrac{4\\pi}{3}$. Convert: $\\dfrac{4\\pi}{3} \\cdot \\dfrac{180}{\\pi} = 240^{\\circ}$.\n\n**The Full Solution:**\nFirst add the two radian measures using a common denominator of $12$:\n$\\dfrac{3\\pi}{4} = \\dfrac{9\\pi}{12}$, so $N = \\dfrac{9\\pi}{12} + \\dfrac{7\\pi}{12} = \\dfrac{16\\pi}{12} = \\dfrac{4\\pi}{3}$ radians.\n\nConvert to degrees by multiplying by $\\dfrac{180^{\\circ}}{\\pi}$:\n$\\dfrac{4\\pi}{3} \\cdot \\dfrac{180^{\\circ}}{\\pi} = \\dfrac{4 \\cdot 180^{\\circ}}{3} = \\dfrac{720^{\\circ}}{3} = 240^{\\circ}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — converts only the increment $\\dfrac{7\\pi}{12} = 105^{\\circ}$ and forgets to add $M$.\n* Choice B: \"stops one step early\" — converts only $M = \\dfrac{3\\pi}{4} = 135^{\\circ}$ and forgets the increment.\n* Choice D: \"off-by-one\" — reduces $\\dfrac{16\\pi}{12}$ to $\\dfrac{8\\pi}{3}$ (drops a factor of $2$ in the numerator only), then converts to $480^{\\circ}$.\n\n**Test Day Takeaway:** Add the radian fractions FIRST (common denominator), then convert the single result with $\\times \\dfrac{180}{\\pi}$. Converting before adding multiplies the chance of an error.",
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
  explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $g(-3) = 4(-3) - (-3)^2 = -12 - 9 = -21$.\n\n**The Full Solution:**\n$g(-3) = 4(-3) - (-3)^2 = -12 - 9 = -21$.\n\nNote: $(-3)^2 = 9$ (positive), and the formula has $-x^2$, so we subtract $9$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — drops the negative on $x$ and computes $g(3) = 12 - 9 = 3$.\n* Choice C: \"wrong base\" — writes $(-3)^2 = -9$, getting $-12 - (-9) = -3$.\n* Choice D: \"stops one step early\" — forgets to square, computing $4(-3) - (-3) = -12 + 3 = -9$.\n\n**Test Day Takeaway:** Order of operations: handle exponents BEFORE multiplication. $(-x)^2 = x^2$ is positive.",
  skills: ["function-interpretation", "quadratic-equations"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A rectangular display panel has a perimeter of $58$ inches. Its length is $5$ inches more than twice its width. What is the width of the panel, in inches?",
  correctAnswer: "8",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~20s):** Let $w$ = width, length $= 2w + 5$. Perimeter $= 2(\\ell + w) = 58$, so $\\ell + w = 29$. Substitute: $(2w + 5) + w = 29 \\Rightarrow 3w = 24 \\Rightarrow w = 8$.\n\n**The Full Solution:**\nLet $w$ = width and $\\ell = 2w + 5$ = length.\nPerimeter: $2\\ell + 2w = 58$, so $\\ell + w = 29$.\nSubstitute: $(2w + 5) + w = 29$.\n$3w + 5 = 29$.\n$3w = 24$.\n$w = 8$.\n\n**Verification:** Width $= 8$, length $= 2(8) + 5 = 21$. Perimeter $= 2(21) + 2(8) = 42 + 16 = 58$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $21$ (the length) instead of $8$ (the width).\n* Setting up $2w + 5 = 58$ (forgetting the perimeter formula).\n\n**Test Day Takeaway:** Define variables explicitly, write the perimeter formula, substitute, solve. Re-read what's asked at the end.",
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
  explanation: "**SAT Pattern: Line-Parabola Intersection Count**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The parabola $y = -2(x - 9)^2 + 19$ opens downward, so its greatest value is the vertex output $19$. The horizontal line $y = 24$ sits above $19$, so the curve never reaches it: zero intersections.\n\n**The Full Solution:**\nThe parabola is in vertex form with $a = -2 < 0$, so it opens downward and its MAXIMUM value is the vertex $y$-coordinate, $19$. Every output of the parabola satisfies $y \\le 19$.\n\nThe line $y = 24$ requires $y = 24 > 19$, which the parabola can never produce. So the graphs share no points.\n\nAlgebraic check: set $-2(x - 9)^2 + 19 = 24 \\Rightarrow -2(x - 9)^2 = 5 \\Rightarrow (x - 9)^2 = -2.5$. A squared real quantity cannot be negative, so there is no real solution \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong model\" — assumes any line meets a parabola exactly once (true only for some non-horizontal cases).\n* Choice B: \"wrong model\" — assumes a horizontal line always cuts a parabola twice; that holds only when the line is below the maximum.\n* Choice C: \"misreads the prompt\" — infinitely many points would require identical graphs, not a line and a parabola.\n\n**Test Day Takeaway:** For a horizontal line vs a vertex-form parabola, compare the line's height to the vertex value. Above the max of a downward parabola $\\Rightarrow$ zero intersections.",
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
  explanation: "**SAT Pattern: Linear Function Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** $g(c+9) = b - 12(c+9) = b - 12c - 108$. Set equal to $\\dfrac{c}{5}$ and solve for $b$: $b = \\dfrac{c}{5} + 12c + 108 = \\dfrac{61c}{5} + 108$.\n\n**The Full Solution:**\nSubstitute $x = c + 9$ into $g(x) = b - 12x$:\n$g(c + 9) = b - 12(c + 9) = b - 12c - 108$.\n\nSet this equal to the given value $\\dfrac{c}{5}$:\n$b - 12c - 108 = \\dfrac{c}{5}$.\n\nIsolate $b$:\n$b = \\dfrac{c}{5} + 12c + 108$.\n\nCombine the $c$-terms over a common denominator of $5$:\n$12c = \\dfrac{60c}{5}$, so $\\dfrac{c}{5} + \\dfrac{60c}{5} = \\dfrac{61c}{5}$.\n\nThus $b = \\dfrac{61c}{5} + 108$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses the literal $9$ from $c + 9$ as the added constant instead of $12 \\cdot 9 = 108$.\n* Choice B: \"stops one step early\" — drops the $\\dfrac{c}{5}$ term, as if $g(c+9) = 0$.\n* Choice D: \"applies the inverse operation\" — distributes $-12$ only to the $9$ and forgets the $12c$ term, leaving $\\dfrac{c}{5} + 108$.\n\n**Test Day Takeaway:** Substitute the full input, distribute carefully (every term inside the parentheses), then combine like terms over a common denominator before matching to the answer form.",
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
  explanation: "**SAT Pattern: Vertex Form of a Quadratic**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Vertex of $h(t) = -4.9(t - 1.6)^2 + 14$ is $(1.6, 14)$. Since $a = -4.9 < 0$, the vertex is a MAX: max height $= 14$ m at $t = 1.6$ s.\n\n**The Full Solution:**\nVertex form $h(t) = a(t - h_0)^2 + k$ has vertex $(h_0, k) = (1.6, 14)$. Because $a = -4.9 < 0$, the parabola opens DOWN and the vertex is the maximum. The arrow reaches its greatest height, $14$ m, at $t = 1.6$ s after release.\n\nVerification: $h(1.6) = 0 + 14 = 14$. $h(0)$ (at release) $= -4.9(1.6)^2 + 14 \\approx 1.5$ m, near the archer's hand height \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"swaps coordinates\" — interchanges the time ($1.6$) and height ($14$) values of the vertex.\n* Choice C: \"wrong direction\" — since $a < 0$, the vertex is a MAX, not a min.\n* Choice D: \"wrong base\" — uses the leading coefficient's magnitude $4.9$ as the time of the maximum.\n\n**Test Day Takeaway:** Vertex form $a(t - h_0)^2 + k$ has vertex $(h_0, k)$ — input first, output second. The sign of $a$ tells you max vs min; the $-4.9$ is the gravity coefficient, not a time.",
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
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In a right triangle, angles $A$ and $B$ are complementary ($A + B = 90^{\\circ}$). Therefore $\\cos(B) = \\sin(A) = \\dfrac{15}{17}$.\n\n**The Full Solution:**\nSince $A + B = 90^{\\circ}$ in a right triangle with the right angle at $C$:\n$\\cos(B) = \\cos(90^{\\circ} - A) = \\sin(A) = \\dfrac{15}{17}$.\n\nAlternatively: $\\sin(A) = \\dfrac{\\text{opposite}}{\\text{hyp}} = \\dfrac{BC}{AB} = \\dfrac{15}{17}$.\nThird side: $AC = \\sqrt{17^2 - 15^2} = \\sqrt{64} = 8$.\nFor angle $B$: adjacent $= BC = 15$, hypotenuse $= AB = 17$.\n$\\cos(B) = \\dfrac{15}{17}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — gives $\\cos(A) = \\dfrac{8}{17}$, not $\\cos(B)$.\n* Choice C: \"applies the inverse operation\" — gives $\\tan(B) = \\dfrac{8}{15}$.\n* Choice D: \"off-by-one\" — inverts the sine ratio.\n\n**Test Day Takeaway:** In a right triangle, $\\sin(A) = \\cos(B)$ because $A$ and $B$ are complementary.",
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
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Range $=$ max $-$ min $= 110 - 72 = 38$.\n\n**The Full Solution:**\nThe range of a data set is the greatest value minus the least value.\nGreatest depth $= 110$ cm. Least depth $= 72$ cm.\nRange $= 110 - 72 = 38$ cm.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — subtracts $110 - 84 = 26$, using the second-smallest value instead of the true minimum $72$.\n* Choice C: \"wrong measure\" — reports $88$, a middle value, confusing range with a center.\n* Choice D: \"stops one step early\" — reports the maximum $110$ without subtracting the minimum.\n\n**Test Day Takeaway:** Range $=$ maximum $-$ minimum. Scan the whole list for the true largest and smallest values before subtracting.",
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
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** By Vieta's formulas, the two roots multiply to $40$ and add to $p$. The integer factor pair of $40$ that differs by $3$ is $5$ and $8$, so $p = 5 + 8 = 13$.\n\n**The Full Solution:**\nFor $x^2 - px + 40 = 0$ with roots $r$ and $s$:\n* Sum: $r + s = p$ (the negative of the $x$-coefficient over the leading coefficient).\n* Product: $rs = 40$.\n\nList positive integer factor pairs of $40$: $(1, 40), (2, 20), (4, 10), (5, 8)$. The pair differing by $3$ is $(5, 8)$.\n\nSo $p = r + s = 5 + 8 = 13$.\n\nVerification: $x^2 - 13x + 40 = (x - 5)(x - 8) = 0$, roots $5$ and $8$, which differ by $3$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports the given difference $3$ instead of the sum.\n* Choice B: \"wrong base\" — uses the pair $(2, 20)$, which multiplies to $40$ but differs by $18$, giving a sum of $22$.\n* Choice D: \"wrong base\" — reports the constant $40$ (the product of the roots) as $p$.\n\n**Test Day Takeaway:** For $x^2 - px + q = 0$, the roots add to $p$ and multiply to $q$. Use the product to find the candidate pairs, then the extra condition to pick the right one.",
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
  explanation: "**SAT Pattern: Percent Increase**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** \"$35\\%$ greater\" means multiply by $1.35$: $240{,}000 \\times 1.35 = 324{,}000$.\n\n**The Full Solution:**\nA quantity that is $35\\%$ greater than the original equals $100\\% + 35\\% = 135\\%$ of the original:\n$240{,}000 \\times 1.35 = 324{,}000$ concurrent viewers.\n\nEquivalently, the increase is $0.35 \\times 240{,}000 = 84{,}000$, added to the original: $240{,}000 + 84{,}000 = 324{,}000$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports only the increase $0.35 \\times 240{,}000 = 84{,}000$ without adding it to the original.\n* Choice B: \"wrong direction\" — treats \"greater\" as \"less,\" computing $240{,}000 \\times 0.65 = 156{,}000$.\n* Choice C: \"decimal slip\" — reads $35\\%$ as $3.5\\%$, computing $240{,}000 \\times 1.035 = 248{,}400$.\n\n**Test Day Takeaway:** \"$p\\%$ greater than\" means multiply by $1 + \\dfrac{p}{100}$. The bare percent times the base is only the increase, not the new total.",
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
  explanation: "**SAT Pattern: Complete the Square — Non-Square Radius**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Complete the square: $(x+3)^2 + (y-5)^2 = 9 + 25 - 9 = 25$. Radius $= \\sqrt{25} = 5$.\n\n**The Full Solution:**\nGroup $x$- and $y$-terms:\n$(x^2 + 6x) + (y^2 - 10y) = -9$\n\nComplete each square:\n$x$: half of $6$ is $3$, $3^2 = 9$: $(x + 3)^2$.\n$y$: half of $-10$ is $-5$, $(-5)^2 = 25$: $(y - 5)^2$.\n\n$(x + 3)^2 + (y - 5)^2 = -9 + 9 + 25 = 25$.\n\nSo $r^2 = 25$ and $r = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — pulls $\\sqrt{9}$ from the constant in the original equation.\n* Choice B: \"applies the inverse operation\" — only completes one square, getting $r^2 = 9$ then writes $\\sqrt{9}$.\n* Choice D: \"stops one step early\" — reports $r^2 = 25$ as the radius instead of $r = 5$.\n\n**Test Day Takeaway:** Complete BOTH squares. Move all the completing-square constants to the right side. The radius is $\\sqrt{r^2}$, NOT $r^2$.",
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
  explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Rate $= \\dfrac{45 \\text{ images}}{18 \\text{ min}} = 2.5$ images per minute. A $2$-hour session is $120$ minutes, so $120 \\times 2.5 = 300$ images.\n\n**The Full Solution:**\nConvert the session length to minutes: $2$ hours $= 120$ minutes.\nSet up a proportion with images over minutes:\n$\\dfrac{45}{18} = \\dfrac{x}{120}$\n\nCross-multiply: $18x = 45 \\times 120 = 5400$, so $x = \\dfrac{5400}{18} = 300$ images.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"missing unit conversion\" — uses $2$ (hours) directly: $\\dfrac{45 \\times 2}{18} = 5$, forgetting to convert hours to minutes.\n* Choice C: \"stops one step early\" — reports the session length $120$ minutes instead of the image count.\n* Choice D: \"inverse operation\" — inverts the rate ratio: $\\dfrac{18}{45} \\times 120 = 48$.\n\n**Test Day Takeaway:** Match units before setting up a proportion. Convert hours to minutes first, then scale the rate.",
  skills: ["ratios", "proportions", "unit-conversion"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A model estimates that at the end of each year from $2017$ to $2022$, the number of deer in a population was $150\\%$ more than the number of deer at the end of the previous year. The model estimates that at the end of $2018$, there were $200$ deer. Which equation represents this model, where $n$ is the number of deer $t$ years after the end of $2017$ and $t \\le 5$?",
  choices: [
    // distractor: reads "150% more" as growth factor 1.5 instead of 2.5
    { id: "A", text: "$n = 80(1.5)^t$" },
    { id: "B", text: "$n = 80(2.5)^t$" },
    // distractor: uses the 2018 count 200 as the t=0 initial value without back-calculating, AND misreads the factor as 1.5
    { id: "C", text: "$n = 200(1.5)^t$" },
    // distractor: uses the 2018 count 200 as the t=0 initial value instead of back-calculating to 80
    { id: "D", text: "$n = 200(2.5)^t$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** \"$150\\%$ more\" $=$ factor $2.5$. At $t = 0$ (end of $2017$): $n_0 = 200/2.5 = 80$. So $n = 80(2.5)^t$.\n\n**Why the wrong answers are tempting:**\n* A: uses $1.5$ (not \"more\").\n* C/D: uses $200$ as initial without back-calculating.\n\n**Test Day Takeaway:** \"$p\\%$ more\" $= 1 + p/100$. Anchor initial value at $t = 0$.",
  skills: ["exponential-functions", "exponential-growth"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the system of equations below, $a$ is a constant.\n\n$\\dfrac{2}{3}x - \\dfrac{1}{2}y = 5$\n$ax - 3y = 24$\n\nIf the system has no solution, what is the value of $a$?",
  choices: [
    // distractor: matches y-coefficient ratio incorrectly: a/(2/3) = 3/(1/2) gives a = 4
    { id: "A", text: "$2$" },
    // distractor: arithmetic slip giving a = 3
    { id: "B", text: "$3$" },
    { id: "C", text: "$4$" },
    // distractor: keeps the y-coefficient ratio but doesn't multiply: a = 6
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** A system has no solution when the lines are parallel: equal slope ratios but different constants. Match $\\dfrac{a}{\\frac{2}{3}} = \\dfrac{-3}{-\\frac{1}{2}}$ (the $x$ and $y$ coefficient ratios). $\\dfrac{a}{\\frac{2}{3}} = 6$, so $a = 4$.\n\n**The Full Solution:**\nNo solution requires the same slope (proportional coefficients of $x$ and $y$) but different constants.\nFor proportionality: $\\dfrac{a}{\\frac{2}{3}} = \\dfrac{-3}{-\\frac{1}{2}} = 6$.\nSo $a = 6 \\cdot \\dfrac{2}{3} = 4$.\n\nCheck constant ratio: $\\dfrac{24}{5}$ should NOT equal $6$. Since $\\dfrac{24}{5} = 4.8 \\neq 6$, the constants are different — the system has no solution. \\checkmark\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — matches incorrectly: divides $\\dfrac{2}{3}$ by something off, getting $a = 2$.\n* Choice B: \"off-by-one\" — arithmetic slip giving $a = 3$ instead of $4$.\n* Choice D: \"applies the inverse operation\" — keeps the ratio $6$ as $a$ directly without multiplying by $\\dfrac{2}{3}$.\n\n**Test Day Takeaway:** No solution = same coefficient ratios on $x$ and $y$ (parallel lines), but the constant breaks the proportion.",
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
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Slope of $\\ell = \\dfrac{1 - 7}{4 - (-2)} = \\dfrac{-6}{6} = -1$. Perpendicular slope $= +1$. For $kx - 5y = 12$, slope $= -\\dfrac{k}{-5} = \\dfrac{k}{5}$. Set $\\dfrac{k}{5} = 1 \\Rightarrow k = 5$.\n\n**The Full Solution:**\nSlope of $\\ell$: $m_\\ell = \\dfrac{1 - 7}{4 - (-2)} = \\dfrac{-6}{6} = -1$.\nA line perpendicular to $\\ell$ has slope $m = -\\dfrac{1}{m_\\ell} = -\\dfrac{1}{-1} = 1$.\nFor a line in standard form $Ax + By = C$, the slope is $-\\dfrac{A}{B}$. Here $A = k$ and $B = -5$, so the slope of $m$ is $-\\dfrac{k}{-5} = \\dfrac{k}{5}$.\nSet this equal to the required perpendicular slope: $\\dfrac{k}{5} = 1$, so $k = 5$.\nCheck: $5x - 5y = 12 \\Rightarrow y = x - \\dfrac{12}{5}$, slope $+1$, which is perpendicular to slope $-1$. \\checkmark\n\n**Why the wrong answers are tempting:**\n* Choice B: uses the slope of $\\ell$ itself ($-1$) as the target instead of its negative reciprocal, giving $k = -5$.\n* Choice C: multiplies through by an extra factor of $5$ instead of taking the reciprocal.\n* Choice D: scales $k$ by $5$ a second time after already solving $\\dfrac{k}{5} = 1$.\n\n**Test Day Takeaway:** Standard-form slope $= -\\dfrac{A}{B}$. Perpendicular slopes are negative reciprocals — their product is $-1$.",
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
  explanation: "**SAT Pattern: Inscribed Solid Volume**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** The largest inscribed cylinder has radius $= \\dfrac{12}{2} = 6$ and height $= 12$. $V_{\\text{cyl}} = \\pi(6)^2(12) = 432\\pi \\approx 1{,}357$. Remaining $= 1{,}728 - 1{,}357 = 371$.\n\n**The Full Solution:**\nThe cube has edge $12$, so $V_{\\text{cube}} = 12^3 = 1{,}728$ cubic centimeters.\nThe largest cylinder that fits with its bases on opposite faces has height equal to the edge, $h = 12$, and its curved surface touches the four side faces, so its diameter equals the edge: radius $r = 6$.\n$V_{\\text{cyl}} = \\pi r^2 h = \\pi (6)^2 (12) = 432\\pi \\approx 1{,}357.17$.\nRemaining volume $= 1{,}728 - 1{,}357.17 \\approx 370.83$, which rounds to $371$ cubic centimeters.\n\n**Why the wrong answers are tempting:**\n* Choice B: reports the carved-out cylinder's volume ($\\approx 1{,}357$) instead of what remains.\n* Choice C: gives the full cube volume ($1{,}728$) without subtracting the cylinder.\n* Choice D: uses the cube edge $12$ as the radius instead of $6$, inflating the cylinder.\n\n**Test Day Takeaway:** For the largest cylinder inside a cube, radius $=$ half the edge and height $=$ the edge. Subtract the carved solid from the whole to get the remainder.",
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
  explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** No real solutions means discriminant $< 0$: $b^2 - 4(5)(45) < 0 \\Rightarrow b^2 < 900 \\Rightarrow |b| < 30$. Greatest positive integer: $b = 29$.\n\n**The Full Solution:**\nDiscriminant $< 0$:\n$b^2 - 4ac < 0$\n$b^2 - 4(5)(45) < 0$\n$b^2 - 900 < 0$\n$b^2 < 900$\n$-30 < b < 30$\n\nSince $b$ is a positive integer and $b < 30$ (strict inequality), the greatest value is $b = 29$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — misses the strict inequality, gives $b = 30$ (where discriminant equals zero, so there IS one solution).\n* Choice C: \"applies the inverse operation\" — bumps down twice, getting $28$.\n* Choice D: \"wrong base\" — gives $b^2$ instead of $b$.\n\n**Test Day Takeaway:** \"No real solutions\" $\\Leftrightarrow$ discriminant $< 0$ (STRICT). \"Exactly one solution\" $\\Leftrightarrow$ discriminant $= 0$. Read the boundary carefully.",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $P$ is defined by $P(t) = 380(1.05)^{(8/6)t}$ and models the population of a certain city $t$ years after $2005$. According to the model, the population is predicted to increase by $5\\%$ every $n$ months. What is the value of $n$?",
  choices: [
    { id: "A", text: "$9$" },
    // distractor: ignores the (8/6) exponent factor and assumes the 5% applies once per 12-month year
    { id: "B", text: "$12$" },
    // distractor: inverts the exponent factor, using 6/8 of 12 months reciprocally to get 16
    { id: "C", text: "$16$" },
    // distractor: multiplies the 9-month period by the unrelated base years instead of stopping
    { id: "D", text: "$72$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** $\\dfrac{8t}{6}$ increases by $1$ when $t$ increases by $\\dfrac{6}{8} = \\dfrac{3}{4}$ year $= 9$ months.\n\n**Why the wrong answers are tempting:**\n* B: forgets fractional exponent.\n* C/D: misreads $6/8$ as $8/6$.\n\n**Test Day Takeaway:** $(1+r)^{kt}$ advances once per $1/k$ in $t$.",
  skills: ["exponential-functions", "function-interpretation"]
}
      ]
    }
  ]
};

export default practiceTest2;
