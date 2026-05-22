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
  id: 2,
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
  id: 3,
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
  id: 4,
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
  id: 5,
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
  question: "A solid right circular cylinder has a radius of $4$ inches and a height of $9$ inches. The volume of the cylinder, in cubic inches, can be expressed as $k\\pi$. What is the value of $k$?",
  correctAnswer: "144",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $144$.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (4)^2 (9) = 16 \\cdot 9 \\pi = 144\\pi$. So $k = 144$.\n\n**The Full Solution:**\nThe volume formula for a right circular cylinder is $V = \\pi r^2 h$.\nWith $r = 4$ in and $h = 9$ in:\n$V = \\pi (4)^2 (9) = \\pi (16)(9) = 144\\pi$ cubic inches.\nSo $k = 144$.\n\n**Common Mistakes to Avoid:**\n* Forgetting to square the radius — using $\\pi r h$ would give $36\\pi$, so $k = 36$.\n* Confusing the cylinder formula with the cone formula $V = \\dfrac{1}{3}\\pi r^2 h$, which gives $k = 48$.\n\n**Verification:** $\\pi (16)(9) = 144\\pi$ \\checkmark.\n\n**Test Day Takeaway:** For a cylinder, square the radius first, then multiply by the height. $V = \\pi r^2 h$ is on the SAT Reference Sheet.",
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
  question: "The right triangle shown has legs of length $3\\sqrt{5}$ and $6\\sqrt{5}$. What is the area of the triangle?",
  diagram: {
    type: "rightTriangle",
    params: {
      sideLabels: ["3√5", "6√5", ""],
      rightAngleVertex: 1
    }
  },
  correctAnswer: "45",
  explanation: "**SAT Pattern: Area with Radical Side Lengths**\n\n**The correct answer is $45$.**\n\n**The Fast Way (~15s):** Area $= \\dfrac{1}{2} \\cdot 3\\sqrt{5} \\cdot 6\\sqrt{5} = \\dfrac{1}{2} \\cdot 18 \\cdot 5 = \\dfrac{90}{2} = 45$.\n\n**The Full Solution:**\nArea of a right triangle $= \\dfrac{1}{2} \\times \\text{leg}_1 \\times \\text{leg}_2$.\n\n$= \\dfrac{1}{2} \\times 3\\sqrt{5} \\times 6\\sqrt{5}$\n\n$= \\dfrac{1}{2} \\times (3 \\times 6) \\times (\\sqrt{5} \\times \\sqrt{5})$\n\n$= \\dfrac{1}{2} \\times 18 \\times 5$\n\n$= \\dfrac{90}{2} = 45$\n\n**Common Mistakes to Avoid:**\n* Forgetting that $\\sqrt{5} \\times \\sqrt{5} = 5$, not $\\sqrt{10}$.\n* Forgetting the $\\dfrac{1}{2}$ factor, giving $90$ instead of $45$.\n\n**Verification:** $3\\sqrt{5} \\approx 6.71$ and $6\\sqrt{5} \\approx 13.42$. Area $\\approx \\dfrac{1}{2}(6.71)(13.42) \\approx 45$ \\checkmark.\n\n**Test Day Takeaway:** When multiplying radicals, $\\sqrt{a} \\times \\sqrt{a} = a$. Separate coefficients from radicals to simplify.",
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
  question: "If $\\dfrac{\\sqrt{x} \\cdot x^2}{x^{\\frac{1}{3}}} = x^k$ for $x > 0$, what is the value of $k$? Express your answer as a fraction.",
  correctAnswer: "13/6",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\dfrac{13}{6}$.**\n\n**The Fast Way (~20s):** $\\sqrt{x} = x^{\\frac{1}{2}}$. Numerator: $x^{\\frac{1}{2}} \\cdot x^2 = x^{\\frac{5}{2}}$. Divide: $x^{\\frac{5}{2} - \\frac{1}{3}} = x^{\\frac{15}{6} - \\frac{2}{6}} = x^{\\frac{13}{6}}$.\n\n**The Full Solution:**\n$\\dfrac{\\sqrt{x} \\cdot x^2}{x^{\\frac{1}{3}}} = \\dfrac{x^{\\frac{1}{2}} \\cdot x^2}{x^{\\frac{1}{3}}}$\n\nCombine the numerator (add exponents):\n$x^{\\frac{1}{2} + 2} = x^{\\frac{1}{2} + \\frac{4}{2}} = x^{\\frac{5}{2}}$\n\nDivide (subtract exponents):\n$x^{\\frac{5}{2} - \\frac{1}{3}}$\n\nCommon denominator $6$:\n$\\dfrac{5}{2} = \\dfrac{15}{6}, \\quad \\dfrac{1}{3} = \\dfrac{2}{6}, \\quad \\dfrac{15}{6} - \\dfrac{2}{6} = \\dfrac{13}{6}$.\n\nSo $k = \\dfrac{13}{6}$.\n\n**Common Mistakes to Avoid:**\n* Writing $\\sqrt{x} = x^2$ instead of $x^{\\frac{1}{2}}$.\n* Adding the denominator's exponent instead of subtracting it.\n\n**Verification:** $\\dfrac{1}{2} + 2 - \\dfrac{1}{3} = 0.5 + 2 - 0.333 = 2.167 = \\dfrac{13}{6}$ \\checkmark.\n\n**Test Day Takeaway:** Convert all radicals to fractional exponents. Multiply $=$ add exponents; divide $=$ subtract exponents.",
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
// Distribution: 3E / 6M / 13H with band-8 ceiling on Q19, Q22.
// Calibrated to Bluebook Module 2 Hard. Q1-3 are easy openers (CB-authentic ramp);
// Q19, Q22 are Module-2-Hard-ceiling (parameterized vertex, tangent-to-circle).

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "A warehouse receives a steady stream of shipping boxes from a delivery truck. Workers move the boxes onto a storage rack at a constant rate of $8$ boxes per hour. There were $25$ boxes already on the rack when the truck arrived. Which type of function best models the relationship between the number of boxes on the rack and the time since the truck arrived?",
  choices: [
    // distractor: confuses constant rate with multiplicative growth
    { id: "A", text: "Increasing exponential" },
    { id: "B", text: "Increasing linear" },
    // distractor: sign error — boxes are being ADDED
    { id: "C", text: "Decreasing linear" },
    // distractor: combines wrong type with wrong direction
    { id: "D", text: "Decreasing exponential" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Classify Physical Motion Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** \"Constant rate\" + \"moving onto the rack\" $\\Rightarrow$ increasing linear. Each hour adds the same $8$ boxes, so the change per unit time is constant.\n\n**The Full Solution:**\nThe defining feature of a LINEAR function is constant rate of change. \"$8$ boxes per hour\" describes exactly that — same number added each hour. Because boxes are being ADDED (count growing), the slope is positive.\n\nA model would be $B(t) = 25 + 8t$.\n\nVerification: at $t = 0$, $B = 25$; at $t = 1$, $B = 33$; at $t = 2$, $B = 41$. Differences: $+8, +8$ — constant \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong formula\" — exponential growth requires a multiplicative factor each hour (e.g., \"doubles each hour\"), not a constant additive rate.\n* Choice C: \"sign error\" — boxes are being placed ONTO the rack (count increases), so the slope is positive.\n* Choice D: \"wrong direction AND wrong type\" — combines both errors.\n\n**Test Day Takeaway:** \"Constant rate of X per unit\" $\\Rightarrow$ LINEAR. The verb (\"added/moved onto\" vs \"removed\") tells you the sign. Reserve EXPONENTIAL for \"multiplied by\" or \"percent\" language.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "A taxi service charges a flat fee of $\\$3$ plus $\\$2$ per mile. Which equation represents the total cost $C$, in dollars, for a ride of $m$ miles?",
  choices: [
    // distractor: swaps the roles of base fee and per-mile rate
    { id: "A", text: "$C = 3m + 2$" },
    { id: "B", text: "$C = 2m + 3$" },
    // distractor: wrong base - treats per-mile rate as flat addition
    { id: "C", text: "$C = 5 + m$" },
    // distractor: applies inverse op - combines flat and rate as multiplication
    { id: "D", text: "$C = 6m$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Linear Cost Setup**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Cost $=$ (per-mile rate) $\\times$ (miles) $+$ (flat fee) $= 2m + 3$.\n\n**The Full Solution:**\n\"Per mile\" means a rate that scales with miles: $2 \\cdot m = 2m$.\n\"Flat fee\" is a one-time charge: $3$.\nTotal: $C = 2m + 3$.\n\nVerification: a $5$-mile ride costs $C = 2(5) + 3 = 13$ dollars \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — swaps the roles, putting the flat fee on $m$.\n* Choice C: \"stops one step early\" — adds the two values ($3 + 2 = 5$) without applying the rate to $m$.\n* Choice D: \"applies the inverse operation\" — combines the values into a single coefficient.\n\n**Test Day Takeaway:** Linear cost $=$ rate $\\times$ quantity $+$ fixed fee. Identify which value scales (rate) and which is constant (flat fee).",
  skills: ["linear-functions", "word-problems"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A small bakery tracks its flour inventory through a baking day. The function $F(b) = -1.4b + 60$ approximates the amount of flour remaining, in pounds, after baking $b$ batches of bread. Which statement is the best interpretation of the $y$-intercept of the graph of $y = F(b)$ in the $by$-plane in this context?",
  choices: [
    // distractor: confuses slope (rate) with y-intercept (initial value)
    { id: "A", text: "The bakery used approximately $60$ pounds of flour for each batch." },
    // distractor: confuses slope's magnitude with starting amount
    { id: "B", text: "The bakery started with approximately $1.4$ pounds of flour." },
    { id: "C", text: "The bakery started with approximately $60$ pounds of flour." },
    // distractor: combines both confusions
    { id: "D", text: "The bakery used approximately $1.4$ pounds of flour for each batch." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $y$-intercept of $F(b) = -1.4b + 60$ is $F(0) = 60$. At $b = 0$ (no batches yet), flour $\\approx 60$ lb.\n\n**The Full Solution:**\nThe $y$-intercept of a linear function $F(b) = mb + b_0$ is the value at $b = 0$. Here that value is $60$, and $b$ counts batches baked, so $b = 0$ corresponds to BEFORE any baking. The bakery started the day with about $60$ pounds of flour.\n\nVerification: at $b = 0$, $F = 60$ ✓. At $b = 10$, $F = 60 - 14 = 46$ — about $14$ pounds used over $10$ batches, confirming the $1.4$-pound-per-batch slope. The slope is the rate; the $y$-intercept is the initial value \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base AND wrong unit\" — treats the initial total as a per-batch rate. At $60$ pounds per batch the bakery would run out in a single batch.\n* Choice B: \"swaps coefficients\" — uses the slope's magnitude as the starting amount.\n* Choice D: \"correct interpretation of slope, wrong question\" — accurately describes the slope, but the question asks about the $y$-intercept (initial value, not rate).\n\n**Test Day Takeaway:** In $F(b) = mb + b_0$ contextual problems: the constant is the INITIAL value at $b = 0$. The coefficient on $b$ is the per-unit RATE. The question's wording (\"$y$-intercept\" vs \"slope/rate\") tells you which to report.",
  skills: ["function-interpretation", "linear-functions"]
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
  difficulty: "medium",
  band: 5,
  question: "A data set has $10$ values listed in order:\n\n$3, 5, 5, 7, 8, 10, 10, 12, 14, 16$\n\nEach value in the data set is increased by $6$. Which of the following is true about the new data set compared to the original?",
  choices: [
    // distractor: claims SD changes (but adding a constant doesn't change spread)
    { id: "A", text: "The mean increases by $6$ and the standard deviation increases by $6$." },
    { id: "B", text: "The mean increases by $6$ and the standard deviation stays the same." },
    // distractor: claims mean stays same (it definitely changes)
    { id: "C", text: "The mean stays the same and the standard deviation increases by $6$." },
    // distractor: both wrong claims
    { id: "D", text: "The mean stays the same and the standard deviation stays the same." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Adding a constant shifts every value uniformly. The mean shifts by that constant; the spread (standard deviation, range) is unchanged because relative distances are preserved.\n\n**The Full Solution:**\nOriginal mean: $\\dfrac{3+5+5+7+8+10+10+12+14+16}{10} = \\dfrac{90}{10} = 9$.\nNew mean: $9 + 6 = 15$.\nStandard deviation measures spread (deviations from the mean). Adding a constant shifts the mean by the same amount, so each deviation $(x - \\bar{x})$ stays the same. Therefore the standard deviation does not change.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — claims SD changes, but adding a constant does NOT change spread.\n* Choice C: \"wrong base\" — claims the mean stays the same, but it definitely shifts.\n* Choice D: \"off-by-one\" — both claims are wrong.\n\n**Test Day Takeaway:** Adding a constant: mean shifts, SD unchanged. Multiplying by a constant: BOTH change (both scale by the constant for SD; by the constant for mean).",
  skills: ["statistics"]
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
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table shows the preferences of $400$ customers at a coffee shop.\n\n| | Hot | Iced | Total |\n|---|---|---|---|\n| Coffee | $120$ | $100$ | $220$ |\n| Tea | $60$ | $120$ | $180$ |\n| Total | $180$ | $220$ | $400$ |\n\nGiven that a randomly selected customer chose an iced drink, what percentage chose iced tea? (Round to the nearest whole percent.)",
  choices: [
    // distractor: divides 120/400 (uses grand total instead of column total)
    { id: "A", text: "$30\\%$" },
    // distractor: uses tea row total: 120/180
    { id: "B", text: "$67\\%$" },
    { id: "C", text: "$55\\%$" },
    // distractor: gives P(iced coffee | iced) = 100/220 ≈ 45%
    { id: "D", text: "$45\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** \"Given iced\" → restrict to the Iced column: total = $220$. Iced tea = $120$. Percentage $= \\dfrac{120}{220} \\approx 0.5455 \\approx 55\\%$.\n\n**The Full Solution:**\n$P(\\text{tea} \\mid \\text{iced}) = \\dfrac{\\text{iced tea}}{\\text{total iced}} = \\dfrac{120}{220} = \\dfrac{6}{11} \\approx 0.5455$.\nAs a percent: $\\approx 55\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses grand total $400$: $\\dfrac{120}{400} = 30\\%$.\n* Choice B: \"applies the inverse operation\" — uses tea row total: $\\dfrac{120}{180} \\approx 67\\%$.\n* Choice D: \"off-by-one\" — gives $P(\\text{iced coffee} \\mid \\text{iced}) = \\dfrac{100}{220} \\approx 45\\%$, the complement.\n\n**Test Day Takeaway:** \"Given\" = restrict to that row or column. The restricted total becomes your denominator. Convert to percent at the end.",
  skills: ["probability", "two-way-tables", "percents"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A track-and-field coach analyzes a javelin throw. The height of the javelin above the ground, in meters, is modeled by $h(t) = -4.9(t - 1.5)^2 + 12$, where $t$ is the time, in seconds, after the javelin leaves the athlete's hand. Which of the following is the best interpretation of the vertex of the graph of $h(t)$ in the $th$-plane?",
  choices: [
    // distractor: swaps coordinates of the vertex
    { id: "A", text: "The javelin reaches a maximum height of $1.5$ meters, $12$ seconds after release." },
    { id: "B", text: "The javelin reaches a maximum height of $12$ meters, $1.5$ seconds after release." },
    // distractor: wrong direction — calls the max a min
    { id: "C", text: "The javelin reaches a minimum height of $12$ meters, $1.5$ seconds after release." },
    // distractor: wrong base — uses the leading coefficient's magnitude as the time
    { id: "D", text: "The javelin reaches a maximum height of $12$ meters, $4.9$ seconds after release." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Interpret Vertex Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Vertex of $h(t) = -4.9(t - 1.5)^2 + 12$ is $(1.5, 12)$. $a = -4.9 < 0$, so vertex is a MAX. Max height $= 12$ m at $t = 1.5$ s.\n\n**The Full Solution:**\nVertex form $h(t) = a(t - h_0)^2 + k$ has vertex $(h_0, k) = (1.5, 12)$. Because $a = -4.9 < 0$, the parabola opens DOWN and the vertex is the maximum value. The max height of $12$ m is reached at $t = 1.5$ s after release.\n\nVerification: $h(1.5) = 0 + 12 = 12$. $h(0)$ (at release): $h = -4.9(2.25) + 12 \\approx 0.975$ m, so the javelin starts near hand height. $h(3) = -4.9(2.25) + 12 \\approx 0.975$ (symmetric, near ground again) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"swaps coordinates\" — swaps the $t$ (time) and $h$ (height) values of the vertex.\n* Choice C: \"wrong direction\" — since $a < 0$, the vertex is a MAX, not a min. The javelin arcs up then falls.\n* Choice D: \"wrong base\" — uses the leading coefficient's magnitude $4.9$ as the time (it's actually the gravity-related coefficient).\n\n**Test Day Takeaway:** Vertex form $a(t - h_0)^2 + k$: vertex is $(h_0, k)$ — input first, output second. Sign of $a$ tells you max vs min. The $-4.9$ in projectile problems is $-g/2$ (gravity), NOT the time of max.",
  skills: ["function-interpretation", "quadratic-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  question: "A nonprofit's monthly donations grew by $25\\%$ from January to February, then by an additional $20\\%$ from February to March. The March total was $\\$18{,}000$. What were the January donations, in dollars?",
  choices: [
    // distractor: subtracts 45% (sum of percents) from $18,000
    { id: "A", text: "$\\$9{,}900$" },
    // distractor: applies one decrease of 45% (1 - 0.45) instead of inverting both
    { id: "B", text: "$\\$10{,}800$" },
    { id: "C", text: "$\\$12{,}000$" },
    // distractor: divides by only one growth factor (1.25)
    { id: "D", text: "$\\$14{,}400$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Two compound increases: March $= $ Jan $\\cdot 1.25 \\cdot 1.20 = $ Jan $\\cdot 1.5$. So Jan $= \\frac{18{,}000}{1.5} = 12{,}000$.\n\n**The Full Solution:**\nLet $J$ = January total. February $= 1.25J$. March $= 1.20 \\cdot 1.25J = 1.5J$.\nSet $1.5J = 18{,}000$: $J = \\dfrac{18{,}000}{1.5} = 12{,}000$.\n\nVerification: Feb $= 1.25 \\cdot 12{,}000 = 15{,}000$. March $= 1.20 \\cdot 15{,}000 = 18{,}000$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — adds the percents ($25 + 20 = 45$) and subtracts: $18{,}000 \\cdot 0.55 = 9{,}900$.\n* Choice B: \"applies the inverse operation\" — uses a single decrease of $45\\%$ on the wrong direction.\n* Choice D: \"stops one step early\" — divides by $1.25$ only, forgetting the second growth: $\\frac{18{,}000}{1.25} = 14{,}400$.\n\n**Test Day Takeaway:** Compound percent changes MULTIPLY their factors. To reverse, divide by the product of all factors — not by their sum.",
  skills: ["percents", "word-problems"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A rectangle has a perimeter of $58$ inches. The length of the rectangle is $5$ inches more than twice the width. What is the width, in inches?",
  correctAnswer: "8",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~20s):** Let $w$ = width, length $= 2w + 5$. Perimeter $= 2(l + w) = 58$, so $l + w = 29$. Substitute: $(2w + 5) + w = 29 \\Rightarrow 3w = 24 \\Rightarrow w = 8$.\n\n**The Full Solution:**\nLet $w$ = width and $\\ell = 2w + 5$ = length.\nPerimeter: $2\\ell + 2w = 58$, so $\\ell + w = 29$.\nSubstitute: $(2w + 5) + w = 29$.\n$3w + 5 = 29$.\n$3w = 24$.\n$w = 8$.\n\n**Verification:** Width $= 8$, length $= 2(8) + 5 = 21$. Perimeter $= 2(21) + 2(8) = 42 + 16 = 58$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $21$ (the length) instead of $8$ (the width).\n* Setting up $2w + 5 = 58$ (forgetting the perimeter formula).\n\n**Test Day Takeaway:** Define variables explicitly, write the perimeter formula, substitute, solve. Re-read what's asked at the end.",
  skills: ["word-problems", "solving-equations"]
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
  difficulty: "hard",
  band: 7,
  question: "The equation $\\dfrac{a}{3}x + 5 = 2x + b$ has no solution. Which of the following must be true?",
  choices: [
    // distractor: a = 6 and b = 5 gives infinitely many solutions (not no solution)
    { id: "A", text: "$a = 6$ and $b = 5$" },
    { id: "B", text: "$a = 6$ and $b \\neq 5$" },
    // distractor: a ≠ 6 means there IS a solution
    { id: "C", text: "$a \\neq 6$ and $b = 5$" },
    // distractor: a = 3 doesn't make the x-coefficients match
    { id: "D", text: "$a = 3$ and $b \\neq 5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** No solution means coefficient of $x$ matches but constants differ. Match: $\\dfrac{a}{3} = 2 \\Rightarrow a = 6$. Constants differ: $b \\neq 5$.\n\n**The Full Solution:**\nRearrange: $\\dfrac{a}{3}x - 2x = b - 5$, so $\\left(\\dfrac{a-6}{3}\\right)x = b - 5$.\n\nFor NO solution: coefficient of $x$ must be $0$ AND right side must be nonzero.\n* $\\dfrac{a-6}{3} = 0 \\Rightarrow a = 6$.\n* $b - 5 \\neq 0 \\Rightarrow b \\neq 5$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — $a = 6, b = 5$ gives $0 = 0$ (infinitely many solutions, not no solution).\n* Choice C: \"wrong base\" — $a \\neq 6$ means coefficient of $x$ is nonzero, so the equation HAS one solution.\n* Choice D: \"off-by-one\" — $a = 3$ makes $\\dfrac{a-6}{3} = -1 \\neq 0$, so there IS a solution.\n\n**Test Day Takeaway:** No solution $=$ matching $x$-coefficients but DIFFERENT constants. Infinitely many solutions $=$ both match.",
  skills: ["solving-equations", "linear-functions"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A polling organization surveyed a random sample of $1{,}200$ likely voters and found that ${}0.52 \\pm 0.03$ supported a candidate, at a $95\\%$ confidence level. Based on this interval, is it reasonable to conclude that the candidate has majority support (more than $50\\%$)?",
  choices: [
    // distractor: misreads — claims interval is entirely above 50%
    { id: "A", text: "Yes, because the entire interval is above $50\\%$." },
    // distractor: ignores margin of error, focuses on point estimate
    { id: "B", text: "Yes, because $52\\%$ is above $50\\%$." },
    { id: "C", text: "No, because the interval includes values below $50\\%$." },
    // distractor: blames sample size instead of the interval crossing 50%
    { id: "D", text: "No, because the margin of error is only $3\\%$." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The interval is ${}0.52 \\pm 0.03 = (0.49, 0.55)$. Since ${}0.49 < 0.50$, the interval includes values below majority. We cannot conclude majority support.\n\n**The Full Solution:**\nLower bound: ${}0.52 - 0.03 = 0.49 = 49\\%$.\nUpper bound: ${}0.52 + 0.03 = 0.55 = 55\\%$.\nSince the interval $(49\\%, 55\\%)$ INCLUDES values below $50\\%$, it is plausible that fewer than half support the candidate.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — claims the interval is entirely above $50\\%$, but $49\\% < 50\\%$.\n* Choice B: \"stops one step early\" — uses only the point estimate ($52\\%$) and ignores the margin.\n* Choice D: \"applies the inverse operation\" — blames the size of the margin rather than the interval crossing $50\\%$.\n\n**Test Day Takeaway:** To make a definitive conclusion, the entire confidence interval must support it. If the interval straddles the threshold, you cannot conclude.",
  skills: ["margin-of-error", "statistics"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "hard",
  band: 6,
  question: "The value of an investment account is modeled by $V(t) = 20{,}000(1.005)^{12t}$, where $t$ is the number of years since the account was opened. What is the annual percent increase in the value of the account, to the nearest tenth of a percent?",
  correctAnswer: "6.2",
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**The correct answer is $6.2$.**\n\n**The Fast Way (~25s):** Annual factor $= (1.005)^{12}$. Compute: $(1.005)^{12} \\approx 1.0617$. Subtract $1$: $\\approx 0.0617 = 6.2\\%$.\n\n**The Full Solution:**\nThe model $V(t) = 20{,}000(1.005)^{12t}$ compounds monthly at $0.5\\%$ per month. To find the annual rate, evaluate the growth factor over one year ($t = 1$):\nAnnual factor $= (1.005)^{12} \\approx 1.06168$.\nAnnual percent increase $\\approx 6.168\\% \\approx 6.2\\%$.\n\n**Verification:** Using $(1+r)^n \\approx 1 + nr + \\dfrac{n(n-1)}{2}r^2$ for small $r$: $1 + 12(0.005) + 66(0.000025) = 1.06165$. Confirms $\\approx 6.2\\%$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $0.5$ (the monthly rate, not annual).\n* Reporting $6$ (multiplying $0.5\\% \\times 12$, ignoring compounding).\n\n**Test Day Takeaway:** Effective annual rate is the growth factor over one full year minus $1$, expressed as a percent. Compounding adds slightly more than the simple multiple.",
  skills: ["exponential-functions", "percents"]
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
  difficulty: "hard",
  band: 7,
  question: "If $\\sqrt[3]{x^4} \\cdot \\sqrt{x^5} = x^k$ for $x > 0$, what is the value of $k$?",
  choices: [
    // distractor: adds the radicands' indices: 3 + 2 = 5 then divides total
    { id: "A", text: "$\\dfrac{9}{5}$" },
    // distractor: writes \sqrt[3]{x^4} = x^{3/4} (inverts power and index)
    { id: "B", text: "$\\dfrac{17}{6}$" },
    { id: "C", text: "$\\dfrac{23}{6}$" },
    // distractor: multiplies exponents 4/3 \cdot 5/2 instead of adding
    { id: "D", text: "$\\dfrac{10}{3}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $\\sqrt[3]{x^4} = x^{\\frac{4}{3}}$, $\\sqrt{x^5} = x^{\\frac{5}{2}}$. Add exponents: $\\dfrac{4}{3} + \\dfrac{5}{2} = \\dfrac{8}{6} + \\dfrac{15}{6} = \\dfrac{23}{6}$.\n\n**The Full Solution:**\n$\\sqrt[3]{x^4} = x^{\\frac{4}{3}}$\n$\\sqrt{x^5} = x^{\\frac{5}{2}}$\n\nWhen multiplying powers with the same base, add exponents:\n$x^{\\frac{4}{3} + \\frac{5}{2}}$\n\nCommon denominator $6$:\n$\\dfrac{4}{3} = \\dfrac{8}{6}, \\quad \\dfrac{5}{2} = \\dfrac{15}{6}, \\quad \\dfrac{8}{6} + \\dfrac{15}{6} = \\dfrac{23}{6}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — adds the radical indices ($3 + 2 = 5$) and total degrees, giving $\\dfrac{9}{5}$.\n* Choice B: \"applies the inverse operation\" — writes $\\sqrt[3]{x^4} = x^{\\frac{3}{4}}$ (inverts exponent and index), giving $\\dfrac{3}{4} + \\dfrac{5}{2} = \\dfrac{13}{4} \\to \\dfrac{17}{6}$ approximation.\n* Choice D: \"off-by-one\" — multiplies exponents instead of adding: $\\dfrac{4}{3} \\cdot \\dfrac{5}{2} = \\dfrac{10}{3}$.\n\n**Test Day Takeaway:** $\\sqrt[n]{x^m} = x^{\\frac{m}{n}}$. When multiplying same-base powers, ADD the exponents.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f(x) = (x - 6)(x + 14)$ models the profit, in dollars, of selling $x$ items. What is the minimum value of $f(x)$?",
  choices: [
    { id: "A", text: "$-100$" },
    // distractor: gives the y-intercept f(0) = -84, not the minimum
    { id: "B", text: "$-84$" },
    // distractor: gives the x-coordinate of the vertex (-4)
    { id: "C", text: "$-4$" },
    // distractor: gives one of the zeros (x = 6)
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Zeros at $x = 6$ and $x = -14$. Vertex $x$-coordinate $= \\dfrac{6 + (-14)}{2} = -4$. Minimum $= f(-4) = (-4-6)(-4+14) = (-10)(10) = -100$.\n\n**The Full Solution:**\nThe parabola opens upward (positive leading coefficient when expanded), so the vertex is a minimum.\nVertex $x = $ midpoint of zeros $= \\dfrac{6 + (-14)}{2} = -4$.\n$f(-4) = (-4 - 6)(-4 + 14) = (-10)(10) = -100$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — computes $6 \\times (-14) = -84$ (the $y$-intercept $f(0)$, not the minimum).\n* Choice C: \"stops one step early\" — gives the $x$-coordinate of the vertex, not the minimum $y$-value.\n* Choice D: \"applies the inverse operation\" — gives one of the zeros.\n\n**Test Day Takeaway:** For a factored quadratic, the vertex $x$ is the midpoint of the roots. Plug back in to find the min/max value.",
  skills: ["quadratic-equations", "vertex-form", "function-interpretation"]
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
  band: 8,
  question: "The function $f(x) = ax^2 + bx + c$, where $a$, $b$, and $c$ are constants, has zeros at $x = -2$ and $x = 5$, and the maximum value of $f$ is $\\dfrac{49}{4}$. What is the value of $c$?",
  choices: [
    // distractor: takes c = -10 (correct sign of product of roots if a = 1, ignores a = -1)
    { id: "A", text: "$-10$" },
    // distractor: uses the max value directly as c
    { id: "B", text: "$\\dfrac{49}{4}$" },
    { id: "C", text: "$10$" },
    // distractor: gives the vertex x-coordinate squared or off-by-factor
    { id: "D", text: "$\\dfrac{9}{4}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Parameterized Quadratic from Zeros + Vertex**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Factor with leading coefficient $a$: $f(x) = a(x+2)(x-5)$. Vertex at midpoint of zeros: $x = \\dfrac{3}{2}$. Plug in: $f\\left(\\dfrac{3}{2}\\right) = a\\left(\\dfrac{7}{2}\\right)\\left(-\\dfrac{7}{2}\\right) = -\\dfrac{49a}{4}$. Set equal to max $\\dfrac{49}{4}$: $a = -1$. Then $c = f(0) = -1 \\cdot (2)(-5) = 10$.\n\n**The Full Solution:**\nSince the zeros are $-2$ and $5$, write $f(x) = a(x + 2)(x - 5)$ for some constant $a$.\n\nThe parabola has a *maximum* (not minimum), so $a < 0$.\n\nThe vertex $x$-coordinate is the midpoint of the zeros: $x_v = \\dfrac{-2 + 5}{2} = \\dfrac{3}{2}$.\n\nMaximum value:\n$f\\left(\\dfrac{3}{2}\\right) = a\\left(\\dfrac{3}{2} + 2\\right)\\left(\\dfrac{3}{2} - 5\\right) = a \\cdot \\dfrac{7}{2} \\cdot \\left(-\\dfrac{7}{2}\\right) = -\\dfrac{49a}{4}$.\n\nSet equal to $\\dfrac{49}{4}$: $-\\dfrac{49a}{4} = \\dfrac{49}{4} \\Rightarrow a = -1$.\n\nNow $f(x) = -(x + 2)(x - 5) = -(x^2 - 3x - 10) = -x^2 + 3x + 10$. So $c = 10$.\n\n**Verification:** $f(-2) = -4 - 6 + 10 = 0$ \\checkmark. $f(5) = -25 + 15 + 10 = 0$ \\checkmark. $f(3/2) = -9/4 + 9/2 + 10 = 49/4$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — assumes $a = 1$ and gets $c = (2)(-5) = -10$, ignoring that the parabola opens DOWN for a maximum.\n* Choice B: \"reuses the given value\" — copies the max value $\\dfrac{49}{4}$ as $c$.\n* Choice D: \"vertex confusion\" — squares the vertex shift $\\dfrac{3}{2}$ instead of evaluating $f(0)$.\n\n**Test Day Takeaway:** When zeros and a vertex value are given, write $f(x) = a(x - r_1)(x - r_2)$, evaluate at the vertex midpoint, solve for $a$, then evaluate at $x = 0$ for $c$. Sign of $a$ tells you max vs min.",
  skills: ["quadratic-equations", "vertex-form", "function-interpretation"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A research lab has a budget of $\\$1{,}400$ to purchase glass beakers. To qualify for a wholesale discount, the lab must order a minimum of $160$ beakers total. Standard beakers cost $\\$5$ each and graduated beakers cost $\\$9$ each. What is the maximum number of graduated beakers the lab can order while staying within the budget and qualifying for the discount?",
  correctAnswer: "150",
  explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**The correct answer is $150$.**\n\n**The Fast Way (~40s):** Let $s$ = standard, $g$ = graduated. To max $g$, set $s + g = 160$ exactly, $s = 160 - g$. Budget: $5(160 - g) + 9g \\leq 1400 \\Rightarrow 800 + 4g \\leq 1400 \\Rightarrow g \\leq 150$.\n\n**The Full Solution:**\nLet $s$ = standard beakers, $g$ = graduated beakers.\nConstraints:\n* Discount floor: $s + g \\geq 160$.\n* Budget: $5s + 9g \\leq 1{,}400$.\n* Both non-negative integers.\n\nTo MAXIMIZE $g$, fill the rest with the cheaper standard beakers at EXACTLY the floor (any extras waste budget). Set $s = 160 - g$:\n\n$5(160 - g) + 9g \\leq 1{,}400$\n$800 - 5g + 9g \\leq 1{,}400$\n$4g \\leq 600$\n$g \\leq 150$.\n\nMax integer: $g = 150$.\n\n**Verification:** With $g = 150$, $s = 10$. Total: $10 + 150 = 160 \\geq 160$ ✓. Cost: $5(10) + 9(150) = 50 + 1{,}350 = 1{,}400 \\leq 1{,}400$ ✓ (exactly at budget). Try $g = 151$, $s = 9$: $5(9) + 9(151) = 45 + 1{,}359 = 1{,}404 > 1{,}400$ ✗ — exceeds budget \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Answering $155$ (treats $1{,}400/9 \\approx 155$ as the max, ignoring the discount floor; also $s = 0, g = 155$ violates the floor since $0 + 155 = 155 < 160$).\n* Answering $160$ (treats the floor itself as the answer).\n* Answering $151$ (forgets to round DOWN — $151$ exceeds budget).\n* Answering $10$ (reports standard beakers instead of graduated).\n\n**Test Day Takeaway:** Two-constraint optimization (budget + minimum total): To maximize one quantity, fill the remainder with the cheaper option AT EXACTLY the minimum total. Solve the resulting single-variable inequality and take the FLOOR. Always verify the next integer up.",
  skills: ["inequalities", "word-problems", "systems-of-equations"]
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
  type: "fill-in",
  difficulty: "hard",
  band: 8,
  question: "In the $xy$-plane, the line $y = mx + 4$ is tangent to the circle $x^2 + y^2 = 4$, where $m$ is a positive constant. What is the value of $m^2$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: Tangent Line to Circle (Discriminant = 0)**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~45s):** A tangent line meets a circle at exactly one point, so substituting the line into the circle equation gives a quadratic with discriminant zero. Substitute $y = mx + 4$ into $x^2 + y^2 = 4$:\n$x^2 + (mx + 4)^2 = 4$\n$(1 + m^2)x^2 + 8mx + 12 = 0$\nDiscriminant $= 0$: $(8m)^2 - 4(1 + m^2)(12) = 0 \\Rightarrow 64m^2 - 48 - 48m^2 = 0 \\Rightarrow 16m^2 = 48 \\Rightarrow m^2 = 3$.\n\n**The Full Solution:**\nSubstitute the line into the circle:\n$x^2 + (mx + 4)^2 = 4$\n$x^2 + m^2x^2 + 8mx + 16 = 4$\n$(1 + m^2)x^2 + 8mx + 12 = 0$\n\nFor tangency, this quadratic in $x$ has exactly one solution, so the discriminant equals zero:\n$\\Delta = (8m)^2 - 4(1 + m^2)(12) = 64m^2 - 48 - 48m^2 = 16m^2 - 48 = 0$\n$m^2 = 3$.\n\n**Geometric verification:** Circle has center $(0, 0)$ and radius $2$. The line $y = mx + 4$ in standard form: $mx - y + 4 = 0$. Distance from origin: $\\dfrac{|4|}{\\sqrt{m^2 + 1}} = 2 \\Rightarrow \\sqrt{m^2 + 1} = 2 \\Rightarrow m^2 = 3$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Trying to solve for $m$ directly without using the tangency condition.\n* Setting the discriminant *negative* (no intersection) or *positive* (two intersections) instead of zero.\n* Reporting $m = \\sqrt{3}$ instead of $m^2 = 3$.\n\n**Test Day Takeaway:** A line is tangent to a curve when substituting gives a quadratic with discriminant exactly zero. Equivalent geometric shortcut for circles: distance from center to line equals the radius.",
  skills: ["circle-equations", "discriminant", "coordinate-geometry", "tangent-lines"]
},
{
  id: 23,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $P$ is defined by $P(t) = 380(1.05)^{(8/6)t}$ and models the population, in thousands, of a certain city $t$ years after $2005$. According to the model, the population is predicted to increase by $5\\%$ every $n$ months. What is the value of $n$?",
  choices: [
    { id: "A", text: "$9$" },
    { id: "B", text: "$12$" },
    { id: "C", text: "$16$" },
    { id: "D", text: "$72$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Period of Exponential Growth**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The exponent $\\dfrac{8t}{6}$ increases by $1$ when $t$ increases by $\\dfrac{6}{8} = \\dfrac{3}{4}$ year $= 9$ months.\n\n**Why the wrong answers are tempting:**\n* B: uses $1$ year $= 12$ months without the fractional exponent.\n* C/D: misreads $6/8$ as $8/6$.\n\n**Test Day Takeaway:** In $(1+r)^{kt}$, one multiplication by $(1+r)$ happens when $kt$ advances by $1$, i.e., $t$ advances by $1/k$.",
  skills: ["exponential-functions", "function-interpretation"]
}
      ]
    }
  ]
};

export default practiceTest2;
