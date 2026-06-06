// Practice Test 8 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Round-6 recalibration: M1 lifted to band-3 ceiling on easy items, domain
// rebalanced to 7/6/5/4. M2 hardened to 0E/6M/16H with band-7 ceilings on
// most hard items and concept-fusion items added at the top end.

export const practiceTest8 = {
  id: "practice-test-8",
  title: "Practice Test 8",
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
  question: "During a launch, the function $A(t) = 320 + 45t$ models the altitude, in meters, of a weather balloon $t$ seconds after it is released. What does the number $45$ represent in this context?",
  choices: [
    // distractor: confuses 45 with the initial value (which is 320)
    { id: "A", text: "The altitude of the balloon, in meters, at the moment it is released" },
    { id: "B", text: "The increase in altitude, in meters, each second" },
    // distractor: treats 45 as an input value rather than a rate of change
    { id: "C", text: "The altitude of the balloon, in meters, after $45$ seconds" },
    // distractor: inverts the rate (would be 1/45 second per meter)
    { id: "D", text: "The number of seconds needed for the balloon to rise $1$ meter" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $A(t) = 320 + 45t$, the coefficient of $t$ is the rate of change: $45$ meters per second.\n\n**The Full Solution:**\nThe function is in the form $A(t) = b + mt$, where $m = 45$ is the slope and $b = 320$ is the initial value. The slope tells us the rate of change: for each additional second, the altitude increases by $45$ meters.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — confuses the slope $45$ with the initial value, which is $320$.\n* Choice C: \"applies the inverse operation\" — treats $45$ as an input value $t = 45$ instead of a rate.\n* Choice D: \"applies the inverse operation\" — inverts the rate (one meter per $\\tfrac{1}{45}$ second).\n\n**Test Day Takeaway:** In $y = b + mx$, the coefficient of the variable is always the rate of change per unit of that variable.",
  skills: ["function-interpretation", "linear-functions", "slope"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A salmon ladder is stocked with chinook and coho fingerlings in a ratio of $5$ chinook to $3$ coho. If the ladder holds $40$ fingerlings in total, how many of them are coho?",
  choices: [
    // distractor: stops one step early — picks the coho ratio number directly
    { id: "A", text: "$3$" },
    // distractor: uses 3/5 of total instead of 3/8 ($24$)
    { id: "B", text: "$24$" },
    { id: "C", text: "$15$" },
    // distractor: solves for chinook amount instead of coho (5/8 of 40 = 25)
    { id: "D", text: "$25$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Coho make up $\\dfrac{3}{5 + 3} = \\dfrac{3}{8}$ of the total. So coho $= \\dfrac{3}{8} \\cdot 40 = 15$.\n\n**The Full Solution:**\nLet chinook $= 5k$ and coho $= 3k$ (so the ratio is $5 : 3$).\nTotal: $5k + 3k = 8k = 40$, so $k = 5$.\nCoho $= 3k = 3 \\cdot 5 = 15$.\n\nVerification: chinook $= 5 \\cdot 5 = 25$, total $= 25 + 15 = 40$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports $3$ (the coho part of the ratio) instead of solving the proportion.\n* Choice B: \"wrong base\" — uses $\\dfrac{3}{5}$ of the total instead of $\\dfrac{3}{8}$.\n* Choice D: \"applies the inverse operation\" — solves for chinook ($\\dfrac{5}{8} \\cdot 40 = 25$) instead of coho.\n\n**Test Day Takeaway:** When two parts are given as a ratio and the total of both parts is known, the denominator of each fraction is the SUM of the ratio parts, not just one part.",
  skills: ["ratios", "word-problems"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $7w - 20 = 15$, what is the value of $7w + 20$?",
  choices: [
    { id: "A", text: "$55$" },
    // distractor: stops at solving for w: 7w = 35, so w = 5
    { id: "B", text: "$5$" },
    // distractor: returns 7w itself (= 35) instead of 7w + 20
    { id: "C", text: "$35$" },
    // distractor: subtracts 20 instead of adding (back to original 15)
    { id: "D", text: "$15$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $7w - 20 = 15$ means $7w + 20 = 15 + 40 = 55$. Or: $7w = 35$, so $7w + 20 = 35 + 20 = 55$.\n\n**The Full Solution:**\nFrom $7w - 20 = 15$, add $20$ to both sides: $7w = 35$.\nThe question asks for $7w + 20$, not $w$: $35 + 20 = 55$.\n\nVerification: $w = 5$, so $7(5) - 20 = 35 - 20 = 15$ \\checkmark, and $7(5) + 20 = 35 + 20 = 55$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — reports the value of $w = 5$ instead of $7w + 20$.\n* Choice C: \"wrong base\" — returns $7w = 35$ but forgets the $+20$ tail.\n* Choice D: \"applies the inverse operation\" — subtracts $20$ from $7w$ (returning to the original $15$).\n\n**Test Day Takeaway:** Always re-read the last sentence before answering. The question often asks for a related expression, not the variable itself.",
  skills: ["solving-equations", "word-problems"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "At a regional chess tournament, $1{,}820$ of the entrants are rated players, and the rated players make up $35\\%$ of all entrants. How many entrants are there in all?",
  choices: [
    // distractor: applies the percent forward — $1820 \times 0.35 = 637$
    { id: "A", text: "$637$" },
    // distractor: divides by the complement: $\\frac{1820}{0.65} \approx 2{,}800$
    { id: "B", text: "$2{,}800$" },
    { id: "C", text: "$5{,}200$" },
    // distractor: divides by $0.035$ instead of $0.35$ (decimal-place slip)
    { id: "D", text: "$52{,}000$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Total $\\times 0.35 = 1{,}820$, so total $= \\frac{1{,}820}{0.35} = 5{,}200$.\n\n**The Full Solution:**\nLet $T$ be the total number of entrants. Then ${}0.35 \\cdot T = 1{,}820$.\nDivide both sides by $0.35$: $T = \\dfrac{1{,}820}{0.35} = 5{,}200$.\n\nVerification: $35\\%$ of $5{,}200 = 0.35 \\cdot 5{,}200 = 1{,}820$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — multiplies $1{,}820 \\cdot 0.35 = 637$ instead of dividing.\n* Choice B: \"wrong base\" — divides by the complement $0.65$ (treats $1{,}820$ as the unrated count).\n* Choice D: \"off-by-one / decimal slip\" — divides by $0.035$ instead of $0.35$.\n\n**Test Day Takeaway:** When a percent of an unknown total is given, divide the part by the percent (as a decimal) to recover the whole.",
  skills: ["percents"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A data set has a median of $54$ and a mean of $60$. Which of the following statements must be true based on this information?",
  choices: [
    // distractor: confuses mean with median definition
    { id: "A", text: "Exactly half the values are greater than $60$." },
    { id: "B", text: "The data set is skewed to the right." },
    // distractor: invents range from the difference of given numbers
    { id: "C", text: "The range of the data is $6$." },
    // distractor: mistakes mode for median
    { id: "D", text: "The most frequent value is $54$." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Mean $> $ Median means high values pull the mean up, creating a right-skewed distribution.\n\n**The Full Solution:**\nMedian $= 54$, Mean $= 60$. The mean exceeds the median by $6$.\nWhen the mean is greater than the median, some high values pull the mean above the middle value. This creates a right skew (long tail to the right).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — by definition, half the values are above the MEDIAN ($54$), not the mean.\n* Choice C: \"applies the inverse operation\" — invents a \"range\" from the gap between mean and median; range is max $-$ min, which we don't know.\n* Choice D: \"stops one step early\" — confuses mode (most frequent value) with median.\n\n**Test Day Takeaway:** Mean $>$ median $\\Rightarrow$ right skew. Mean $<$ median $\\Rightarrow$ left skew. Mean $=$ median suggests symmetry.",
  skills: ["statistics"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A data set consists of $8$ positive integers. Seven of these integers are listed below.\n\n$31, 38, 35, 42, 40, 33, 37$\n\nThe mean of the eight integers is $36$. What is the value of the eighth integer?",
  correctAnswer: "32",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $32$.**\n\n**The Fast Way (~15s):** Sum of all $8$ values $= 8 \\cdot 36 = 288$. Sum of the $7$ listed: $31 + 38 + 35 + 42 + 40 + 33 + 37 = 256$. Eighth value $= 288 - 256 = 32$.\n\n**The Full Solution:**\nIf the mean of $8$ values is $36$, the total sum is $8 \\cdot 36 = 288$.\nAdd the seven listed integers: $31 + 38 + 35 + 42 + 40 + 33 + 37 = 256$.\nThe eighth integer $= 288 - 256 = 32$.\n\nVerification: $\\frac{256 + 32}{8} = \\frac{288}{8} = 36$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Dividing $256$ by $7$ instead of using the target total.\n* Computing $36 - 32 = 4$ and reporting that.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ total. Subtract the known sum from the total to find a missing value.",
  skills: ["statistics"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $f(x) = x^2 + 4x + 7$, which of the following is equivalent to $f(x)$ in vertex form?",
  choices: [
    { id: "A", text: "$(x + 2)^2 + 3$" },
    // distractor: uses the coefficient 4 directly instead of halving it
    { id: "B", text: "$(x + 4)^2 + 7$" },
    // distractor: stops one step early — does not subtract the 4 added
    { id: "C", text: "$(x + 2)^2 + 7$" },
    // distractor: wrong sign inside the parentheses
    { id: "D", text: "$(x - 2)^2 + 3$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Quadratic — Completing the Square**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $x^2 + 4x + 7 = (x^2 + 4x + 4) + 3 = (x+2)^2 + 3$.\n\n**The Full Solution:**\nTo complete the square for $x^2 + 4x + 7$:\nTake half of $4$: $2$. Square it: $4$.\nAdd and subtract $4$: $x^2 + 4x + 4 + 7 - 4 = (x + 2)^2 + 3$.\n\nThe vertex form is $(x+2)^2 + 3$, with vertex at $(-2, 3)$.\n\nVerification: expand $(x+2)^2 + 3 = x^2 + 4x + 4 + 3 = x^2 + 4x + 7$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — uses the coefficient $4$ directly instead of halving it.\n* Choice C: \"stops one step early\" — does not subtract the $4$ that was added to complete the square.\n* Choice D: \"applies the inverse operation\" — wrong sign inside: should be $(x + 2)$, not $(x - 2)$.\n\n**Test Day Takeaway:** To complete the square for $x^2 + bx + c$: half $b$, square it, add and subtract that value.",
  skills: ["vertex-form", "quadratic-equations"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "In the figure shown, two parallel lines $\\ell$ and $m$ are cut by a transversal $t$, forming the angles labeled. What is the value of $x$?",
  diagram: {
    type: "parallelLines",
    params: {
      angles: { top: ["(3x+10)°", ""], bottom: ["(5x-30)°", ""] },
      lineLabels: ["ℓ", "m", "t"]
    }
  },
  correctAnswer: "20",
  explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~15s):** Corresponding angles are equal: $3x + 10 = 5x - 30 \\Rightarrow 40 = 2x \\Rightarrow x = 20$.\n\n**The Full Solution:**\nWhen a transversal cuts two parallel lines, corresponding angles are EQUAL:\n$3x + 10 = 5x - 30$\n$10 + 30 = 5x - 3x$\n$40 = 2x$\n$x = 20$\n\nVerification: at $x = 20$, both angles measure $3(20) + 10 = 70^{\\circ}$ and $5(20) - 30 = 70^{\\circ}$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Setting the angles SUPPLEMENTARY (summing to $180^{\\circ}$): would give $8x - 20 = 180$, $x = 25$ (wrong).\n* Confusing corresponding angles with co-interior angles.\n\n**Test Day Takeaway:** With parallel lines cut by a transversal, corresponding angles, alternate interior angles, and alternate exterior angles are EQUAL. Same-side interior angles are SUPPLEMENTARY.",
  skills: ["triangles", "angles"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A line in the $xy$-plane has a slope of $\\dfrac{2}{3}$ and passes through the point $(6, 1)$. At what point does this line cross the $y$-axis?",
  choices: [
    { id: "A", text: "$(0, -3)$" },
    // distractor: applies the inverse operation — adds 4 instead of subtracting
    { id: "B", text: "$(0, 5)$" },
    // distractor: stops one step early — drops the +1 to get -1
    { id: "C", text: "$(0, -1)$" },
    // distractor: wrong base — gets -1 + 4 = 3 by reversing the sign
    { id: "D", text: "$(0, 3)$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Use point-slope: $y - 1 = \\dfrac{2}{3}(x - 6)$. At $x = 0$: $y - 1 = \\dfrac{2}{3}(-6) = -4$, so $y = -3$.\n\n**The Full Solution:**\nUse point-slope form with slope $\\dfrac{2}{3}$ and point $(6, 1)$:\n$y - 1 = \\dfrac{2}{3}(x - 6)$\n$y = \\dfrac{2}{3}x - 4 + 1$\n$y = \\dfrac{2}{3}x - 3$\n\nThe $y$-intercept is $-3$, so the line crosses the $y$-axis at $(0, -3)$.\n\nVerification: at $x = 6$, $y = \\dfrac{2}{3}(6) - 3 = 4 - 3 = 1$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — adds $4$ to $1$ instead of subtracting.\n* Choice C: \"stops one step early\" — computes $\\dfrac{2}{3}(6) = 4$ but drops the $+1$ from the original point.\n* Choice D: \"wrong base\" — reverses the sign on $-3$.\n\n**Test Day Takeaway:** Plug in $x = 0$ to find the $y$-intercept directly from point-slope form.",
  skills: ["slope", "linear-functions", "coordinate-geometry"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $g(x) = 2f(x - 3) + 1$ and $f(4) = 10$, what is the value of $g(7)$?",
  choices: [
    { id: "A", text: "$21$" },
    // distractor: confuses the inner shift with an added constant: 2(10) + 3 = 23
    { id: "B", text: "$23$" },
    // distractor: applies inverse operation — subtracts the +1 instead: 2(10) - 3 = 17
    { id: "C", text: "$17$" },
    // distractor: stops one step early — drops the +1 tail: 2(10) = 20
    { id: "D", text: "$20$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $g(7) = 2f(7-3) + 1 = 2f(4) + 1 = 2(10) + 1 = 21$.\n\n**The Full Solution:**\nSubstitute $x = 7$ into $g(x) = 2f(x-3) + 1$:\n$g(7) = 2f(7-3) + 1 = 2f(4) + 1 = 2(10) + 1 = 21$.\n\nVerification: the inner shift evaluates the function at the matching $x = 4$ where $f(4) = 10$ is known. Multiply by $2$ and add $1$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — confuses the shift inside $f$ with the constant outside, getting $2(10) + 3 = 23$.\n* Choice C: \"applies the inverse operation\" — subtracts $3$ instead of adding $1$ outside: $2(10) - 3 = 17$.\n* Choice D: \"stops one step early\" — forgets the $+1$ tail: $2(10) = 20$.\n\n**Test Day Takeaway:** Work inside-out: first compute the argument of $f$, then apply the outer operations.",
  skills: ["function-interpretation"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table below shows the results of a survey.\n\n| | Owns a Pet | No Pet | Total |\n|---|---|---|---|\n| Apartment | $32$ | $48$ | $80$ |\n| House | $54$ | $16$ | $70$ |\n| Total | $86$ | $64$ | $150$ |\n\nWhat percentage of pet owners live in an apartment? (Round to the nearest whole percent.)",
  choices: [
    // distractor: wrong base — divides by grand total 150
    { id: "A", text: "$21\\%$" },
    { id: "B", text: "$37\\%$" },
    // distractor: wrong base — divides by the apartment row total 80
    { id: "C", text: "$40\\%$" },
    // distractor: applies inverse operation — uses house pet owners over pet owners
    { id: "D", text: "$63\\%$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Pet owners total $= 86$. Apartment pet owners $= 32$. Percentage $= \\dfrac{32}{86} \\approx 0.372 \\approx 37\\%$.\n\n**The Full Solution:**\n\"Of pet owners\" restricts to the \"Owns a Pet\" column, total $= 86$.\nApartment pet owners $= 32$.\nPercentage $= \\dfrac{32}{86} \\times 100 \\approx 37.2\\% \\approx 37\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses total surveyed ($150$) as denominator: $\\frac{32}{150} \\approx 21\\%$.\n* Choice C: \"wrong base\" — uses apartment row total ($80$) as denominator: $\\frac{32}{80} = 40\\%$.\n* Choice D: \"applies the inverse operation\" — computes house pet owners $/$ pet owners: $\\frac{54}{86} \\approx 63\\%$.\n\n**Test Day Takeaway:** \"Of [group]\" means that group's total is the denominator.",
  skills: ["two-way-tables", "percents", "probability"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $\\dfrac{x-2}{3} + \\dfrac{x+4}{5} = 6$, what is the value of $x$?",
  correctAnswer: "11",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~20s):** Multiply through by $15$ (LCM of $3$ and $5$): $5(x-2) + 3(x+4) = 90$. Distribute: $5x - 10 + 3x + 12 = 90$, so $8x + 2 = 90$ and $x = 11$.\n\n**The Full Solution:**\nMultiply every term by $15$:\n$5(x - 2) + 3(x + 4) = 90$\n$5x - 10 + 3x + 12 = 90$\n$8x + 2 = 90$\n$8x = 88$\n$x = 11$\n\nVerification: $\\dfrac{11-2}{3} + \\dfrac{11+4}{5} = \\dfrac{9}{3} + \\dfrac{15}{5} = 3 + 3 = 6$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting to multiply the right side $6$ by $15$ (should become $90$).\n* Using the wrong LCM (e.g., $8$ instead of $15$).\n\n**Test Day Takeaway:** Clear fractions FIRST by multiplying every term by the LCM of the denominators. Distribute carefully to avoid sign slips.",
  skills: ["solving-equations"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the right triangle shown, one of the acute angles has measure $\\theta$ where $\\sin(\\theta) = \\dfrac{8}{17}$. What is the value of $\\cos(\\theta)$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["θ", "", ""],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: returns sin again instead of cos
    { id: "A", text: "$\\dfrac{8}{17}$" },
    { id: "B", text: "$\\dfrac{15}{17}$" },
    // distractor: uses 8/15 (which would be tan, not cos)
    { id: "C", text: "$\\dfrac{8}{15}$" },
    // distractor: subtracts 8 from 17 and reports as the ratio
    { id: "D", text: "$\\dfrac{9}{17}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Recognize the $8$-$15$-$17$ Pythagorean triple. With opposite $= 8$ and hypotenuse $= 17$, the adjacent side is $15$. So $\\cos(\\theta) = \\dfrac{15}{17}$.\n\n**The Full Solution:**\nIn a right triangle, $\\sin(\\theta) = \\dfrac{\\text{opposite}}{\\text{hypotenuse}} = \\dfrac{8}{17}$.\nSo opposite $= 8$ and hypotenuse $= 17$. By the Pythagorean theorem:\n$\\text{adjacent}^2 + 8^2 = 17^2$\n$\\text{adjacent}^2 = 289 - 64 = 225$\n$\\text{adjacent} = 15$.\n\n$\\cos(\\theta) = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}} = \\dfrac{15}{17}$.\n\nVerification: $\\sin^2(\\theta) + \\cos^2(\\theta) = \\left(\\dfrac{8}{17}\\right)^2 + \\left(\\dfrac{15}{17}\\right)^2 = \\dfrac{64 + 225}{289} = \\dfrac{289}{289} = 1$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — returns $\\sin(\\theta)$ instead of $\\cos(\\theta)$.\n* Choice C: \"wrong base\" — uses $\\dfrac{8}{15}$, which is $\\tan(\\theta)$, not $\\cos(\\theta)$.\n* Choice D: \"applies the inverse operation\" — subtracts $8$ from $17$ and uses the difference as the numerator.\n\n**Test Day Takeaway:** Memorize Pythagorean triples ($3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$). Use $\\sin^2 + \\cos^2 = 1$ to cross-check trig answers.",
  skills: ["trigonometry", "right-triangles", "triangles"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The solution to the system of equations $2x - y = 3$ and $x + y = 9$ is $(x, y)$. What is the value of $x + 2y$?",
  choices: [
    // distractor: arithmetic error — uses y = 4 instead of y = 5
    { id: "A", text: "$13$" },
    { id: "B", text: "$14$" },
    // distractor: stops one step early — gives 3x + y = 15
    { id: "C", text: "$15$" },
    // distractor: off-by-one — drops the doubling on y
    { id: "D", text: "$11$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Add the equations: $(2x - y) + (x + y) = 3 + 9 \\Rightarrow 3x = 12 \\Rightarrow x = 4$. Then $4 + y = 9 \\Rightarrow y = 5$. So $x + 2y = 4 + 10 = 14$.\n\n**The Full Solution:**\nAdd the two equations to eliminate $y$:\n$(2x - y) + (x + y) = 3 + 9$\n$3x = 12 \\Rightarrow x = 4$\n\nSubstitute into the second equation:\n$4 + y = 9 \\Rightarrow y = 5$.\n\nSo $x + 2y = 4 + 2(5) = 14$.\n\nVerification: $2(4) - 5 = 3$ \\checkmark and $4 + 5 = 9$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — uses $y = 4.5$ rounded down or arithmetic slip on the substitution.\n* Choice C: \"stops one step early\" — computes $3x + y = 15$ from the eliminated equation but does not finish.\n* Choice D: \"applies the inverse operation\" — drops the doubling on $y$ and reports $4 + 5 + 2 = 11$.\n\n**Test Day Takeaway:** When the coefficients of one variable are opposites, ADD the equations to eliminate it instantly.",
  skills: ["systems-of-equations"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $p(x) = -x^2 + 6x - 5$ models the profit, in thousands of dollars, of selling $x$ hundred units of a product. The function $q(x) = p(x - 2)$ models the profit after a supply chain change. What is the number of hundreds of units that maximizes profit under the new model $q$?",
  choices: [
    // distractor: stops one step early — gives the vertex of p, not q
    { id: "A", text: "$3$" },
    { id: "B", text: "$5$" },
    // distractor: applies inverse op — shifts left instead of right
    { id: "C", text: "$1$" },
    // distractor: wrong base — adds 2 + 6 = 8 from the formula
    { id: "D", text: "$8$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $p(x)$ has vertex at $x = \\dfrac{-6}{2(-1)} = 3$. $q(x) = p(x-2)$ shifts right by $2$. New vertex at $x = 3 + 2 = 5$.\n\n**The Full Solution:**\nFor $p(x) = -x^2 + 6x - 5$: vertex at $x = -\\dfrac{b}{2a} = \\dfrac{6}{2} = 3$. Vertex form: $p(x) = -(x - 3)^2 + 4$.\n\n$q(x) = p(x - 2) = -((x - 2) - 3)^2 + 4 = -(x - 5)^2 + 4$.\nVertex at $x = 5$.\n\nThe new model is maximized at $x = 5$ hundred units.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the vertex of $p$, not $q$.\n* Choice C: \"applies the inverse operation\" — shifts left instead of right (confusing $x - 2$ with $x + 2$).\n* Choice D: \"wrong base\" — sums $2 + 6 = 8$ from the formula.\n\n**Test Day Takeaway:** $f(x - h)$ shifts the graph RIGHT by $h$. The vertex $x$-coordinate increases by $h$.",
  skills: ["function-interpretation", "vertex-form", "word-problems"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $\\sqrt[3]{x^2} = 4$ and $x > 0$, what is the value of $x^{\\frac{1}{3}}$?",
  choices: [
    { id: "A", text: "$2$" },
    // distractor: confuses exponent operations
    { id: "B", text: "$\\sqrt{2}$" },
    // distractor: thinks x^{1/3} equals x^{2/3}
    { id: "C", text: "$4$" },
    // distractor: finds x^{1/2} instead of x^{1/3}
    { id: "D", text: "$2\\sqrt{2}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $\\sqrt[3]{x^2} = x^{\\frac{2}{3}} = 4$. So $x^{\\frac{1}{3}} = (x^{\\frac{2}{3}})^{\\frac{1}{2}} = 4^{\\frac{1}{2}} = 2$.\n\n**The Full Solution:**\n$\\sqrt[3]{x^2} = x^{\\frac{2}{3}} = 4$.\nWe want $x^{\\frac{1}{3}}$. Since $\\dfrac{1}{3} = \\dfrac{1}{2} \\cdot \\dfrac{2}{3}$:\n$x^{\\frac{1}{3}} = (x^{\\frac{2}{3}})^{\\frac{1}{2}} = 4^{\\frac{1}{2}} = 2$.\n\nAlternatively: $x^{\\frac{2}{3}} = 4 \\Rightarrow x = 4^{\\frac{3}{2}} = 8$. Then $x^{\\frac{1}{3}} = 8^{\\frac{1}{3}} = 2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — confuses exponent operations.\n* Choice C: \"stops one step early\" — thinks $x^{\\frac{1}{3}}$ equals $x^{\\frac{2}{3}}$.\n* Choice D: \"wrong base\" — finds $x^{\\frac{1}{2}} = 8^{\\frac{1}{2}} = 2\\sqrt{2}$ instead of $x^{\\frac{1}{3}}$.\n\n**Test Day Takeaway:** Express the target exponent as a fraction of the known exponent, then use power rules.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $f(x) = ax^2 + bx + c$, $f(0) = 5$, $f(1) = 2$, and $f(-1) = 12$, what is the value of $a$?",
  choices: [
    { id: "A", text: "$2$" },
    // distractor: sign error subtracting equations gives a = -1
    { id: "B", text: "$-1$" },
    // distractor: stops one step early — gives a + b = -3 then drops b
    { id: "C", text: "$3$" },
    // distractor: forgets to divide 2a = 4 by 2
    { id: "D", text: "$4$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** $f(0) = c = 5$. $f(1) + f(-1) = 2a + 2c = 14 \\Rightarrow 2a = 4 \\Rightarrow a = 2$.\n\n**The Full Solution:**\nFrom $f(0) = c = 5$.\nFrom $f(1) = a + b + c = 2$: $a + b + 5 = 2$, so $a + b = -3$ ... (i)\nFrom $f(-1) = a - b + c = 12$: $a - b + 5 = 12$, so $a - b = 7$ ... (ii)\n\nAdd (i) and (ii) to eliminate $b$: $2a = 4$, so $a = 2$.\nThen $b = -3 - 2 = -5$.\n\nVerify: $f(x) = 2x^2 - 5x + 5$. $f(1) = 2 - 5 + 5 = 2$ \\checkmark, $f(-1) = 2 + 5 + 5 = 12$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — sign error when subtracting the equations.\n* Choice C: \"stops one step early\" — gives $a + b = -3$ result before solving for $a$ alone.\n* Choice D: \"off-by-one\" — forgets to divide $2a = 4$ by $2$.\n\n**Test Day Takeaway:** When evaluating $f$ at symmetric inputs like $1$ and $-1$, $f(1) + f(-1) = 2a + 2c$ kills the linear term. Use $f(0) = c$ to isolate $a$.",
  skills: ["quadratic-equations", "systems-of-equations"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A circle in the $xy$-plane has equation $(x - 3)^2 + (y + 4)^2 = 25$. Which of the following points lies on the circle?",
  choices: [
    // distractor: wrong base — point uses the center's x-coordinate but ignores radius
    { id: "A", text: "$(3, 2)$" },
    // distractor: applies inverse operation — components 9 + 25 add to 34, not 25
    { id: "B", text: "$(6, 1)$" },
    { id: "C", text: "$(0, 0)$" },
    // distractor: stops one step early — checks 16 + 4 = 20 instead of 25
    { id: "D", text: "$(7, -2)$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Plug each point into $(x-3)^2 + (y+4)^2$ and check whether it equals $25$. $(0,0)$: $9 + 16 = 25$ \\checkmark.\n\n**The Full Solution:**\nThe circle has center $(3, -4)$ and radius $5$. A point lies on the circle if and only if $(x-3)^2 + (y+4)^2 = 25$.\n* A: $(3-3)^2 + (2+4)^2 = 0 + 36 = 36 \\neq 25$.\n* B: $(6-3)^2 + (1+4)^2 = 9 + 25 = 34 \\neq 25$.\n* C: $(0-3)^2 + (0+4)^2 = 9 + 16 = 25$ \\checkmark.\n* D: $(7-3)^2 + (-2+4)^2 = 16 + 4 = 20 \\neq 25$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses the center's $x$-coordinate but ignores the radius constraint.\n* Choice B: \"applies the inverse operation\" — components $9 + 25$ sum to $34$, mistakenly looking like a near-match.\n* Choice D: \"stops one step early\" — sums $16 + 4 = 20$, close but not equal to $25$.\n\n**Test Day Takeaway:** A point is on the circle iff its squared-distance to the center equals $r^2$. Plug and check.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A bracing strut for a suspension-bridge tower forms right triangle $PQR$ shown, with the right angle at vertex $Q$. The vertical leg $PQ$ has length $a$ meters, the horizontal leg $QR$ has length $a + 31$ meters, and the diagonal $PR$ has length $41$ meters. What is the perimeter, in meters, of triangle $PQR$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["P", "Q", "R"],
      sideLabels: ["a", "a + 31", "41"],
      rightAngleVertex: 1
    }
  },
  correctAnswer: "90",
  explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**The correct answer is $90$.**\n\n**The Fast Way (~30s):** Recognize the $9$-$40$-$41$ Pythagorean triple. So $a = 9$, $a + 31 = 40$. Perimeter $= 9 + 40 + 41 = 90$.\n\n**The Full Solution:**\nApply the Pythagorean theorem: $a^2 + (a + 31)^2 = 41^2$.\n$a^2 + a^2 + 62a + 961 = 1681$\n$2a^2 + 62a - 720 = 0$\n$a^2 + 31a - 360 = 0$\n$(a + 40)(a - 9) = 0$\n\nSo $a = 9$ (rejecting the negative root). Then $a + 31 = 40$.\nPerimeter $= 9 + 40 + 41 = 90$.\n\nVerification: $9^2 + 40^2 = 81 + 1600 = 1681 = 41^2$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting only the legs ($9 + 40 = 49$) and forgetting the diagonal.\n* Sign error in the quadratic and using the negative root.\n\n**Test Day Takeaway:** Memorize Pythagorean triples ($3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $9$-$40$-$41$). When the hypotenuse is $41$, the legs are usually $9$ and $40$.",
  skills: ["triangles", "right-triangles", "area"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "For the quadratic equation $2x^2 + bx + 18 = 0$ to have exactly one real solution, $b$ must be positive. What is the value of $b$?",
  correctAnswer: "12",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~15s):** Discriminant $= 0$: $b^2 - 4(2)(18) = 0 \\Rightarrow b^2 = 144 \\Rightarrow b = \\pm 12$. Positive: $b = 12$.\n\n**The Full Solution:**\nFor exactly one real solution, the discriminant equals $0$:\n$b^2 - 4(2)(18) = 0$\n$b^2 - 144 = 0$\n$b^2 = 144$\n$b = \\pm 12$.\n\nSince $b$ must be positive: $b = 12$.\n\nVerification: $2x^2 + 12x + 18 = 0 \\Rightarrow x^2 + 6x + 9 = 0 \\Rightarrow (x+3)^2 = 0 \\Rightarrow x = -3$ (one repeated solution) \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting the leading coefficient: $4ac = 4(2)(18) = 144$, not $4(18) = 72$.\n* Forgetting that $b$ could be negative without the positivity constraint.\n\n**Test Day Takeaway:** Exactly one solution $\\iff$ discriminant $= 0$. Two solutions: $> 0$. No solutions: $< 0$.",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $f(x) = 2x^2 - 8x + 3$ and $g(x) = f(x + 1)$, what is the minimum value of $g(x)$?",
  choices: [
    // distractor: applies inverse operation — subtracts the shift
    { id: "A", text: "$-7$" },
    { id: "B", text: "$-5$" },
    // distractor: stops one step early — computes f(1) instead of finding the min
    { id: "C", text: "$-3$" },
    // distractor: errors in completing the square
    { id: "D", text: "$-9$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $g(x) = f(x+1)$ is just a horizontal shift of $f$. The minimum value of $g$ equals the minimum value of $f$. Min of $f$: vertex at $x = \\dfrac{8}{4} = 2$, with $f(2) = 8 - 16 + 3 = -5$.\n\n**The Full Solution:**\n$f(x) = 2x^2 - 8x + 3 = 2(x^2 - 4x) + 3 = 2(x - 2)^2 - 8 + 3 = 2(x - 2)^2 - 5$.\nMinimum of $f$ is $-5$ at $x = 2$.\n\n$g(x) = f(x + 1) = 2((x+1) - 2)^2 - 5 = 2(x - 1)^2 - 5$.\nMinimum of $g$ is $-5$ at $x = 1$.\n\nThe horizontal shift moved the vertex from $x = 2$ to $x = 1$, but the minimum VALUE is unchanged at $-5$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — subtracts the shift value from the minimum.\n* Choice C: \"stops one step early\" — computes $f(1) = 2 - 8 + 3 = -3$ instead of finding the true minimum.\n* Choice D: \"off-by-one\" — errors in completing the square produce $-9$.\n\n**Test Day Takeaway:** $f(x + h)$ shifts the graph horizontally but does NOT change the minimum or maximum value.",
  skills: ["function-interpretation", "vertex-form", "quadratic-equations"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For what value of $k$ does the system $y = 3x + 2$ and $y = kx^2 + 5x + 5$ have exactly one solution?",
  choices: [
    // distractor: arithmetic error in the discriminant
    { id: "A", text: "$\\dfrac{3}{4}$" },
    // distractor: applies inverse operation — inverts the fraction
    { id: "B", text: "$\\dfrac{4}{3}$" },
    // distractor: wrong sign from rearranging
    { id: "C", text: "$-\\dfrac{1}{3}$" },
    { id: "D", text: "$\\dfrac{1}{3}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Set equal: $3x + 2 = kx^2 + 5x + 5$. Rearrange: $kx^2 + 2x + 3 = 0$. For exactly one solution, discriminant $= 0$: $4 - 12k = 0$, so $k = \\dfrac{1}{3}$.\n\n**The Full Solution:**\nSet the two expressions for $y$ equal:\n$kx^2 + 5x + 5 = 3x + 2$\n$kx^2 + 2x + 3 = 0$\n\nFor exactly one solution, the discriminant must equal zero:\n$\\Delta = 2^2 - 4(k)(3) = 0$\n$4 - 12k = 0$\n$k = \\dfrac{1}{3}$\n\nVerification: $\\dfrac{1}{3}x^2 + 2x + 3 = 0 \\Rightarrow x^2 + 6x + 9 = 0 \\Rightarrow (x+3)^2 = 0 \\Rightarrow x = -3$. One solution: $(-3, -7)$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — arithmetic error in computing the discriminant.\n* Choice B: \"applies the inverse operation\" — inverts the fraction.\n* Choice C: \"wrong sign\" — sign error from rearranging $5x - 3x = 2x$.\n\n**Test Day Takeaway:** Tangency $\\iff$ exactly one intersection. Set the curves equal, move everything to one side, and use discriminant $= 0$.",
  skills: ["systems-of-equations", "quadratic-equations", "discriminant"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 8 — Math Module 2 (22 questions)
// Flow (2026-06 diversification): easies at Q1, Q2, Q18 (breather);
// mediums at Q3, Q5, Q6, Q9, Q12, Q13, Q16; hards at Q4, Q7, Q8, Q10, Q11,
// Q14, Q15, Q17, Q19, Q20, Q21, Q22. 3E / 7M / 12H with a band ramp from a
// warm-up opener up to figure/parameter-heavy hard closers.
// Pool infusions: Q4 fractional-substitution system, Q14 squared-unit rate
// conversion, Q17 isosceles-right-triangle perimeter, Q19 cubic table after a
// vertical shift, Q21 electric-flux area-ratio (science-defined quantity).

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A maple-syrup producer boils sap in an open pan. The function $V(m) = 180 - 7m$ models the volume, in liters, of sap remaining in the pan $m$ minutes after boiling begins. What does the number $7$ represent in this context?",
  choices: [
    // distractor: confuses the rate 7 with the initial volume (which is 180)
    { id: "A", text: "The volume of sap, in liters, in the pan when boiling begins" },
    { id: "B", text: "The number of liters of sap that boils away each minute" },
    // distractor: treats 7 as an input value rather than a rate of change
    { id: "C", text: "The volume of sap, in liters, remaining after $7$ minutes" },
    // distractor: inverts the rate (would be 1/7 minute per liter)
    { id: "D", text: "The number of minutes needed for the volume to drop by $1$ liter" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $V(m) = 180 - 7m$, the coefficient of $m$ is the rate of change: the volume drops by $7$ liters each minute.\n\n**The Full Solution:**\nThe function has the form $V(m) = b + km$, where $b = 180$ is the initial volume and $k = -7$ is the rate of change. The magnitude $7$ tells us that for each additional minute of boiling, the sap volume decreases by $7$ liters.\n\nVerification: at $m = 0$, $V = 180$; at $m = 1$, $V = 173$ — exactly $7$ liters less \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — confuses the rate $7$ with the initial volume, which is $180$.\n* Choice C: \"applies the inverse operation\" — treats $7$ as an input value $m = 7$ instead of a rate.\n* Choice D: \"applies the inverse operation\" — inverts the rate (one liter per $\\tfrac{1}{7}$ minute).\n\n**Test Day Takeaway:** In $y = b + kx$, the coefficient of the variable is always the rate of change per unit of that variable.",
  skills: ["function-interpretation", "linear-functions", "slope"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "In a textile mill, $$108$$ of the looms are configured for wide fabric, and these wide-fabric looms make up $$45\\%$$ of all the looms in the mill. How many looms does the mill have in total?",
  choices: [
    // distractor: applies the percent forward — 108 * 0.45 = 48.6 rounded
    { id: "A", text: "$$49$$" },
    // distractor: divides by the complement 0.55 instead of 0.45
    { id: "B", text: "$$196$$" },
    { id: "C", text: "$$240$$" },
    // distractor: divides by 0.045 instead of 0.45 (decimal slip)
    { id: "D", text: "$$2{,}400$$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Total $\\times 0.45 = 108$, so total $= \\dfrac{108}{0.45} = 240$.\n\n**The Full Solution:**\nLet $T$ be the total number of looms. Then $0.45 \\cdot T = 108$.\nDivide both sides by $0.45$: $T = \\dfrac{108}{0.45} = 240$.\n\nVerification: $45\\%$ of $240 = 0.45 \\cdot 240 = 108$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — multiplies $108 \\cdot 0.45 \\approx 49$ instead of dividing.\n* Choice B: \"wrong base\" — divides by the complement $0.55$ (treats $108$ as the narrow-fabric count).\n* Choice D: \"off-by-one / decimal slip\" — divides by $0.045$ instead of $0.45$.\n\n**Test Day Takeaway:** When a percent of an unknown total is given, divide the part by the percent (as a decimal) to recover the whole.",
  skills: ["percents"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  question: "A meteorologist released $20$ weather balloons and recorded, for each, the surface temperature $x$ (in degrees Celsius) at launch and the burst altitude $y$ (in kilometers). The line of best fit for the data is $\\hat{y} = 0.6x + 29$. Which of the following best describes the meaning of the slope $0.6$ in this context?",
  diagram: { type: "scatterplot", params: {
    points: [[1,29.5],[2,30.4],[3,31.2],[5,31.8],[6,32.9],[8,33.5],[10,35.1],[12,36.4],[14,37.2],[16,38.9]],
    xMin: 0, xMax: 18, yMin: 28, yMax: 42,
    xGridStep: 2, xLabelStep: 4, yGridStep: 2, yLabelStep: 4,
    bestFitLine: { slope: 0.6, intercept: 29 },
    xLabel: "Surface temp (°C)", yLabel: "Burst altitude (km)",
  } },
  choices: [
    // distractor: confuses slope with intercept (29 is the value at x = 0)
    { id: "A", text: "The predicted burst altitude, in kilometers, when the surface temperature is $0$ degrees Celsius." },
    { id: "B", text: "The predicted increase in burst altitude, in kilometers, for each additional degree Celsius of surface temperature." },
    // distractor: treats slope as a proportion/percentage
    { id: "C", text: "The fraction of balloons whose burst altitude rises as temperature rises." },
    // distractor: confuses slope (a rate) with an average
    { id: "D", text: "The average burst altitude, in kilometers, across all $20$ balloons." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $\\hat{y} = mx + b$, the slope $m$ is the predicted change in $y$ for each one-unit increase in $x$.\n\n**The Full Solution:**\nThe line of best fit $\\hat{y} = 0.6x + 29$ has slope $0.6$.\nFor each additional degree Celsius of surface temperature ($\\Delta x = 1$), the predicted burst altitude increases by $0.6$ kilometers ($\\Delta \\hat{y} = 0.6$).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — confuses slope with intercept; $29$ is the predicted altitude at $x = 0$.\n* Choice C: \"applies the inverse operation\" — treats the slope as a proportion of the data points.\n* Choice D: \"stops one step early\" — confuses the slope (a rate) with an overall average.\n\n**Test Day Takeaway:** In $\\hat{y} = mx + b$, slope $m$ is the predicted change in $y$ per unit increase in $x$. Intercept $b$ is the predicted $y$ when $x = 0$.",
  skills: ["scatterplots", "statistics", "linear-functions"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$$y - 4x = 5$$\n$$7x = 3y$$\n\nWhat is the solution $(x, y)$ to the given system of equations?",
  choices: [
    // distractor: swaps the coordinate order of the correct point
    { id: "A", text: "$(-7, -3)$" },
    // distractor: uses the positive roots (sign error in the substitution)
    { id: "B", text: "$(3, 7)$" },
    { id: "C", text: "$(-3, -7)$" },
    // distractor: scales 7x = 3y to (15, 35) but ignores the first equation
    { id: "D", text: "$(15, 35)$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** From $7x = 3y$, $y = \\dfrac{7x}{3}$. Substitute into $y - 4x = 5$: $\\dfrac{7x}{3} - 4x = 5 \\Rightarrow \\dfrac{7x - 12x}{3} = 5 \\Rightarrow -5x = 15 \\Rightarrow x = -3$, $y = -7$.\n\n**The Full Solution:**\nSolve the second equation for $y$: $7x = 3y \\Rightarrow y = \\dfrac{7x}{3}$.\nSubstitute into the first equation:\n$\\dfrac{7x}{3} - 4x = 5$\nMultiply through by $3$: $7x - 12x = 15$, so $-5x = 15$ and $x = -3$.\nThen $y = \\dfrac{7(-3)}{3} = -7$.\n\nVerification: $y - 4x = -7 - 4(-3) = -7 + 12 = 5$ \\checkmark and $7(-3) = -21 = 3(-7)$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — swaps the coordinate order, listing $(y, x)$ instead of $(x, y)$.\n* Choice B: \"wrong base\" — uses the positive values $(3, 7)$ from a sign slip on $-5x = 15$.\n* Choice D: \"applies the inverse operation\" — scales $7x = 3y$ to $(15, 35)$ but never checks the first equation.\n\n**Test Day Takeaway:** When one equation gives a clean $y = \\tfrac{ax}{b}$, substitute it in and clear the denominator immediately — and always confirm the final point satisfies BOTH equations.",
  skills: ["systems-of-equations", "substitution"]
},
{
  id: 5,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A loom shop ran two batches of fabric. In the morning batch, $4\\%$ of the bolts had a flaw; in the afternoon batch, $6\\%$ of the bolts had a flaw. The morning batch contained $450$ bolts and the afternoon batch contained $300$ bolts. What percent of all the bolts produced that day had a flaw? Round to the nearest tenth.",
  correctAnswer: "4.8",
  explanation: "**SAT Pattern: Percent of a Whole**\n\n**The correct answer is $4.8$.**\n\n**The Fast Way (~20s):** Flawed $= 0.04(450) + 0.06(300) = 18 + 18 = 36$. Total $= 750$. Percent $= \\dfrac{36}{750} \\times 100 = 4.8\\%$.\n\n**The Full Solution:**\nMorning flawed: $4\\%$ of $450 = 18$ bolts.\nAfternoon flawed: $6\\%$ of $300 = 18$ bolts.\nTotal flawed $= 18 + 18 = 36$.\nTotal bolts $= 450 + 300 = 750$.\n\nFlaw rate $= \\dfrac{36}{750} = 0.048 = 4.8\\%$.\n\n**Common Mistakes to Avoid:**\n* Averaging the percentages directly: $\\dfrac{4 + 6}{2} = 5\\%$ (ignores the different batch sizes).\n* Using only one batch's data.\n\n**Test Day Takeaway:** Never average percentages directly when groups have different sizes. Always compute total favorable $/$ total count.",
  skills: ["percents", "statistics"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A circle in the $xy$-plane has equation $x^2 + y^2 - 10x + 24y = 0$. What is the radius of the circle?",
  choices: [
    // distractor: stops at r^2 = 169 instead of r
    { id: "A", text: "$169$" },
    { id: "B", text: "$13$" },
    // distractor: only completes the square on x: r^2 = 25
    { id: "C", text: "$5$" },
    // distractor: combines -10 + 24 = 14 without completing the square
    { id: "D", text: "$\\sqrt{14}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Complete the square: $(x - 5)^2 + (y + 12)^2 = 25 + 144 = 169$. Radius $= \\sqrt{169} = 13$.\n\n**The Full Solution:**\n$x^2 - 10x + y^2 + 24y = 0$.\nComplete the square for $x$: half of $-10$ is $-5$, squared is $25$.\nComplete the square for $y$: half of $24$ is $12$, squared is $144$.\nAdd $25$ and $144$ to BOTH sides:\n$(x - 5)^2 + (y + 12)^2 = 169$.\n\nThis is a circle with center $(5, -12)$ and radius $r = \\sqrt{169} = 13$.\n\nVerification: expand $(x - 5)^2 + (y + 12)^2 = x^2 - 10x + 25 + y^2 + 24y + 144 = 169$, so $x^2 + y^2 - 10x + 24y = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives $r^2 = 169$ instead of $r$.\n* Choice C: \"wrong base\" — only completes the square on $x$ and reports $\\sqrt{25} = 5$.\n* Choice D: \"applies the inverse operation\" — adds $-10 + 24 = 14$ blindly.\n\n**Test Day Takeaway:** Complete the square SYMMETRICALLY for both variables. Add the squared half-coefficients to BOTH sides.",
  skills: ["circle-equations", "solving-equations"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $x > 0$, the expression $\\sqrt[4]{x^5} \\cdot \\sqrt{x^3}$ is equivalent to $x^{\\frac{p}{q}}$ where $\\dfrac{p}{q}$ is in lowest terms. What is the value of $p + q$?",
  choices: [
    // distractor: stops at the numerator p alone (= 11)
    { id: "A", text: "$11$" },
    // distractor: sums radical exponents and indices ignoring fractional add
    { id: "B", text: "$8$" },
    { id: "C", text: "$15$" },
    // distractor: wrong base — sums all integers in the expression
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** $\\sqrt[4]{x^5} = x^{\\frac{5}{4}}$, $\\sqrt{x^3} = x^{\\frac{3}{2}}$. Sum: $\\dfrac{5}{4} + \\dfrac{3}{2} = \\dfrac{5}{4} + \\dfrac{6}{4} = \\dfrac{11}{4}$. So $p + q = 11 + 4 = 15$.\n\n**The Full Solution:**\nConvert each radical to a fractional exponent:\n$\\sqrt[4]{x^5} = x^{\\frac{5}{4}}, \\quad \\sqrt{x^3} = x^{\\frac{3}{2}}$\n\nMultiply same bases (add exponents):\n$x^{\\frac{5}{4}} \\cdot x^{\\frac{3}{2}} = x^{\\frac{5}{4} + \\frac{6}{4}} = x^{\\frac{11}{4}}$\n\n$\\gcd(11, 4) = 1$, so $\\dfrac{11}{4}$ is already in lowest terms. Then $p = 11$, $q = 4$, and $p + q = 15$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives just the numerator $p = 11$, forgetting to add $q$.\n* Choice B: \"applies the inverse operation\" — sums radical exponents and indices ($5 + 3 = 8$) instead of converting to fractions.\n* Choice D: \"wrong base\" — sums all the integers in the expression ($5 + 4 + 3 = 12$).\n\n**Test Day Takeaway:** $\\sqrt[n]{x^m} = x^{\\frac{m}{n}}$. Add fractional exponents when multiplying same bases; report $p + q$ once the fraction is in lowest terms.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Two rectangular crates are stacked and bolted together along one shared face to form a single shipping unit. Crate A measures $4 \\text{ ft} \\times 7 \\text{ ft} \\times 9 \\text{ ft}$, and Crate B measures $4 \\text{ ft} \\times 7 \\text{ ft} \\times 6 \\text{ ft}$. The shared face measures $4 \\text{ ft} \\times 7 \\text{ ft}$. What is the total surface area of the combined unit, in square feet?",
  choices: [
    // distractor: subtracts only one face (442 - 28 = 414)
    { id: "A", text: "$414$" },
    { id: "B", text: "$386$" },
    // distractor: subtracts wrong face area (4 * 9 = 36 instead of 4 * 7 = 28)
    { id: "C", text: "$370$" },
    // distractor: doesn't subtract shared faces at all
    { id: "D", text: "$442$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Composite Solid Surface Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Surface area of A: $2(28 + 36 + 63) = 254$. Surface area of B: $2(28 + 24 + 42) = 188$. Sum: $442$. Subtract the shared face from BOTH solids: $442 - 2 \\cdot 28 = 386$.\n\n**The Full Solution:**\nSurface area of Crate A ($4 \\times 7 \\times 9$): $2(4 \\cdot 7 + 4 \\cdot 9 + 7 \\cdot 9) = 2(28 + 36 + 63) = 2(127) = 254 \\text{ ft}^2$.\n\nSurface area of Crate B ($4 \\times 7 \\times 6$): $2(4 \\cdot 7 + 4 \\cdot 6 + 7 \\cdot 6) = 2(28 + 24 + 42) = 2(94) = 188 \\text{ ft}^2$.\n\nTotal before bolting: $254 + 188 = 442 \\text{ ft}^2$.\nThe shared face ($4 \\times 7 = 28 \\text{ ft}^2$) is hidden on BOTH crates; subtract $2 \\times 28 = 56 \\text{ ft}^2$.\nTotal surface area: $442 - 56 = 386 \\text{ ft}^2$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — subtracts only one of the two shared faces.\n* Choice C: \"wrong base\" — uses the wrong face area ($4 \\times 9 = 36$ instead of $4 \\times 7 = 28$).\n* Choice D: \"applies the inverse operation\" — does not subtract the shared face at all.\n\n**Test Day Takeaway:** When two solids are joined along a face, that face is hidden on BOTH solids. Subtract twice the contact area from the simple sum.",
  skills: ["surface-area", "volume"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the figure, two parallel lines $\\ell$ and $m$ are crossed by a transversal $t$. The two labeled angles are alternate interior angles. What is the value of $y$?",
  diagram: {
    type: "parallelLines",
    params: {
      angles: { top: ["", "(7y-10)°"], bottom: ["(3y+50)°", ""] },
      lineLabels: ["ℓ", "m", "t"]
    }
  },
  choices: [
    // distractor: stops at solving 7y = 60 forgetting -10
    { id: "A", text: "$\\dfrac{60}{7}$" },
    { id: "B", text: "$15$" },
    // distractor: sets the angles supplementary instead of equal
    { id: "C", text: "$14$" },
    // distractor: sign slip — subtracts 10 from the right side instead of adding it (4y = 40)
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Alternate interior angles are equal: $7y - 10 = 3y + 50 \\Rightarrow 4y = 60 \\Rightarrow y = 15$.\n\n**The Full Solution:**\nWhen a transversal cuts two parallel lines, alternate interior angles are EQUAL:\n$7y - 10 = 3y + 50$\n$4y = 60$\n$y = 15$\n\nVerification: at $y = 15$, both angles measure $7(15) - 10 = 95^{\\circ}$ and $3(15) + 50 = 95^{\\circ}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — solves $7y = 60$ ignoring the $-10$.\n* Choice C: \"applies the inverse operation\" — sets the angles supplementary: $7y - 10 + 3y + 50 = 180 \\Rightarrow 10y = 140 \\Rightarrow y = 14$.\n* Choice D: \"sign slip\" — moves the $-10$ across as a subtraction instead of an addition, solving $7y = 3y + 50 - 10 \\Rightarrow 4y = 40 \\Rightarrow y = 10$.\n\n**Test Day Takeaway:** Alternate interior angles, corresponding angles, and alternate exterior angles are EQUAL when lines are parallel. Same-side interior (co-interior) angles are SUPPLEMENTARY.",
  skills: ["triangles", "angles"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In right triangle $RST$ shown, the right angle is at vertex $T$, $RS = 65$, and $ST = 16$. What is the value of $\\cos(R)$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["R", "T", "S"],
      sideLabels: ["", "16", "65"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: uses ST (opposite to R) instead of adjacent — this is sin(R)
    { id: "A", text: "$\\dfrac{16}{65}$" },
    { id: "B", text: "$\\dfrac{63}{65}$" },
    // distractor: uses ST/RT (= tan R) instead of cos R
    { id: "C", text: "$\\dfrac{16}{63}$" },
    // distractor: gives reciprocal of tan = cot
    { id: "D", text: "$\\dfrac{63}{16}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Since $T$ is the right angle, $RS = 65$ is the hypotenuse. Find $RT$: $RT = \\sqrt{65^2 - 16^2} = \\sqrt{4225 - 256} = \\sqrt{3969} = 63$. ($16$-$63$-$65$ is a Pythagorean triple.) For angle $R$: adjacent $= RT = 63$, hypotenuse $= 65$. $\\cos(R) = \\dfrac{63}{65}$.\n\n**The Full Solution:**\nBy the Pythagorean theorem: $RT^2 + ST^2 = RS^2$.\n$RT^2 = 65^2 - 16^2 = 4225 - 256 = 3969 \\Rightarrow RT = 63$.\nVerification: $63^2 + 16^2 = 3969 + 256 = 4225 = 65^2$ \\checkmark.\n\nFor angle $R$: $\\cos(R) = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}} = \\dfrac{RT}{RS} = \\dfrac{63}{65}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses $ST$ (opposite to $R$); this is $\\sin(R)$, not $\\cos(R)$.\n* Choice C: \"wrong base\" — uses $\\dfrac{ST}{RT}$, which is $\\tan(R)$.\n* Choice D: \"applies the inverse operation\" — gives the reciprocal of $\\tan(R) = \\cot(R)$.\n\n**Test Day Takeaway:** Always identify the hypotenuse first. Adjacent and opposite swap based on which acute angle you reference.",
  skills: ["trigonometry", "right-triangles", "triangles"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The expression $\\dfrac{x^2 - 16}{x^2 + 7x + 12} \\cdot \\dfrac{x^2 + 6x + 9}{x^2 - x - 12}$ is equivalent to which of the following for all values of $x$ where it is defined?",
  choices: [
    // distractor: partial cancellation leaving (x+3)/(x+3)
    { id: "A", text: "$\\dfrac{x + 3}{x + 3}$" },
    // distractor: incomplete cancellation leaves stray factors
    { id: "B", text: "$\\dfrac{(x-4)(x+3)}{(x+4)(x-4)}$" },
    { id: "C", text: "$1$" },
    // distractor: cancels incorrectly leaving extra factors
    { id: "D", text: "$\\dfrac{x+3}{x-4}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Factor everything, then cancel.\n\n**The Full Solution:**\nFactor each piece:\n* $x^2 - 16 = (x-4)(x+4)$\n* $x^2 + 7x + 12 = (x+3)(x+4)$\n* $x^2 + 6x + 9 = (x+3)^2$\n* $x^2 - x - 12 = (x-4)(x+3)$\n\nSubstitute:\n$\\dfrac{(x-4)(x+4)}{(x+3)(x+4)} \\cdot \\dfrac{(x+3)^2}{(x-4)(x+3)} = \\dfrac{(x-4)(x+4)(x+3)^2}{(x+3)(x+4)(x-4)(x+3)} = 1$\n\n(for $x \\neq 4, -4, -3$)\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — partial cancellation leaves $\\dfrac{x+3}{x+3}$, which equals $1$ but isn't fully simplified.\n* Choice B: \"applies the inverse operation\" — incomplete cancellation leaves stray factors.\n* Choice D: \"wrong base\" — cancels incorrectly, leaving extra factors.\n\n**Test Day Takeaway:** Factor every quadratic FIRST. Then cancel common factors across the entire expression.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A weather-balloon festival sells two kinds of entry passes: full-day passes at $\\$12$ each and afternoon passes at $\\$8$ each. On Saturday, $250$ passes were sold for a total of $\\$2{,}680$. How many full-day passes were sold?",
  choices: [
    // distractor: stops one step early — number of afternoon passes
    { id: "A", text: "$80$" },
    // distractor: wrong base — uses average price ($10.72) ignoring system constraints
    { id: "B", text: "$120$" },
    { id: "C", text: "$170$" },
    // distractor: applies the inverse operation — reports total passes instead of full-day passes
    { id: "D", text: "$250$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Let $f$ = full-day passes, $a$ = afternoon passes. Then $f + a = 250$ and $12f + 8a = 2680$. Substitute $a = 250 - f$: $12f + 8(250 - f) = 2680 \\Rightarrow 4f = 680 \\Rightarrow f = 170$.\n\n**The Full Solution:**\nLet $f$ be the number of full-day passes and $a$ be the number of afternoon passes.\n\nTotal passes: $f + a = 250$.\nTotal revenue: $12f + 8a = 2680$.\n\nSolve by substitution. From the first equation: $a = 250 - f$. Substitute into the second:\n$12f + 8(250 - f) = 2680$\n$12f + 2000 - 8f = 2680$\n$4f = 680$\n$f = 170$.\n\nThen $a = 250 - 170 = 80$.\n\nVerification: $170 + 80 = 250$ passes \\checkmark; $12(170) + 8(80) = 2040 + 640 = 2680$ dollars \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the number of afternoon passes ($80$) instead of full-day passes ($170$).\n* Choice B: \"wrong base\" — comes from dividing $2680$ by an average price guess.\n* Choice D: \"applies the inverse operation\" — reports total passes sold ($250$) rather than just full-day passes.\n\n**Test Day Takeaway:** SAT word-problem systems usually have one count equation and one value (revenue/total dollars) equation. Define each variable explicitly, write both equations, and solve.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The equation $2x^2 - 14x + 20 = 0$ has two solutions, $r$ and $s$. What is the value of $r + s$?",
  correctAnswer: "7",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~15s):** For $ax^2 + bx + c = 0$, the sum of the roots is $-\\dfrac{b}{a} = -\\dfrac{-14}{2} = 7$.\n\n**The Full Solution:**\nVieta's formulas give the sum of the roots of $ax^2 + bx + c = 0$ as $r + s = -\\dfrac{b}{a}$.\nHere $a = 2$, $b = -14$, so $r + s = -\\dfrac{-14}{2} = 7$.\n\nVerification: $2x^2 - 14x + 20 = 2(x^2 - 7x + 10) = 2(x - 2)(x - 5)$, so the roots are $2$ and $5$, and $2 + 5 = 7$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting the leading coefficient: using $-b = 14$ without dividing by $a = 2$.\n* Reporting the product $\\dfrac{c}{a} = 10$ instead of the sum.\n\n**Test Day Takeaway:** The sum of the roots is $-\\dfrac{b}{a}$ and the product is $\\dfrac{c}{a}$ — you never have to actually factor to find either.",
  skills: ["quadratic-equations", "factoring"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "During a launch, a weather balloon's ascent rate is increasing at $8.6$ meters per second squared. Expressed in \\textbf{miles per minute squared} and rounded to the nearest tenth, what is this rate? (Use $1$ mile $= 1{,}609$ meters.)",
  choices: [
    // distractor: applies the seconds-to-minutes factor only once (× 60) instead of squaring it
    { id: "A", text: "$0.3$" },
    { id: "B", text: "$19.2$" },
    // distractor: inverts both conversions (× 1609 and ÷ 3600)
    { id: "C", text: "$3.8$" },
    // distractor: multiplies by 1609 and divides by 60 (both directions wrong, time once)
    { id: "D", text: "$230.6$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Unit Conversion — Squared Units**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Distance: $\\div 1{,}609$ (meters $\\to$ miles). Time: the seconds-to-minutes factor of $60$ is applied TWICE because the time unit is squared: $\\times 60^2 = \\times 3{,}600$. So $\\dfrac{8.6 \\times 3{,}600}{1{,}609} \\approx 19.2$.\n\n**The Full Solution:**\nStart with $8.6 \\dfrac{\\text{m}}{\\text{s}^2}$.\nConvert meters to miles (divide by $1{,}609$):\n$8.6 \\dfrac{\\text{m}}{\\text{s}^2} \\times \\dfrac{1 \\text{ mi}}{1{,}609 \\text{ m}}$.\nConvert per second-squared to per minute-squared. Since $1 \\text{ min} = 60 \\text{ s}$, we have $1 \\text{ s} = \\dfrac{1}{60} \\text{ min}$, so $\\dfrac{1}{\\text{s}^2} = \\dfrac{1}{(1/60\\ \\text{min})^2} = 60^2 \\dfrac{1}{\\text{min}^2} = 3{,}600 \\dfrac{1}{\\text{min}^2}$.\n\n$\\dfrac{8.6 \\times 3{,}600}{1{,}609} = \\dfrac{30{,}960}{1{,}609} \\approx 19.24 \\approx 19.2 \\dfrac{\\text{mi}}{\\text{min}^2}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — multiplies by $60$ only once ($\\approx 0.3$), forgetting that the squared time unit needs $60^2$.\n* Choice C: \"applies the inverse operation\" — inverts both conversions ($\\times 1609$, $\\div 3600$).\n* Choice D: \"wrong base\" — multiplies by $1609$ and applies the time factor only once.\n\n**Test Day Takeaway:** When a unit is SQUARED, every conversion factor for that unit must be applied TWICE. The length factor here is applied once; the time factor twice.",
  skills: ["unit-conversion", "rates"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The graph of $y = 3x^2 + bx + c$ in the $xy$-plane has its vertex at $(-2, -10)$, where $b$ and $c$ are constants. What is the value of $bc$?",
  correctAnswer: "24",
  explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**The correct answer is $24$.**\n\n**The Fast Way (~30s):** Vertex form: $y = 3(x + 2)^2 - 10$. Expand: $3(x^2 + 4x + 4) - 10 = 3x^2 + 12x + 2$. So $b = 12$, $c = 2$, and $bc = 12 \\times 2 = 24$.\n\n**The Full Solution:**\nWith a vertex at $(-2, -10)$ and leading coefficient $3$, the vertex form is:\n$y = 3(x - (-2))^2 + (-10) = 3(x + 2)^2 - 10$.\nExpand to standard form:\n$y = 3(x^2 + 4x + 4) - 10 = 3x^2 + 12x + 12 - 10 = 3x^2 + 12x + 2$.\nMatching $y = 3x^2 + bx + c$: $b = 12$ and $c = 2$.\nTherefore $bc = 12 \\times 2 = 24$.\n\nVerification: the vertex of $y = 3x^2 + 12x + 2$ is at $x = -\\dfrac{12}{2 \\cdot 3} = -2$, and $y(-2) = 3(4) + 12(-2) + 2 = 12 - 24 + 2 = -10$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting to distribute the leading $3$ across the squared binomial.\n* Reporting $b + c = 14$ instead of the product $bc = 24$.\n\n**Test Day Takeaway:** Start from vertex form $a(x - h)^2 + k$, expand carefully, then read off the standard-form coefficients.",
  skills: ["quadratic-equations", "vertex-form"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The function $f$ is defined by $f(x) = x^2$. The function $g$ is defined by $g(x) = f(x + 4) - 5$. What is the value of $g(-4)$?",
  choices: [
    // distractor: applies the inside shift the wrong way: f(-8) - 5 = 59
    { id: "A", text: "$59$" },
    // distractor: ignores the inside shift entirely: f(-4) - 5 = 11
    { id: "B", text: "$11$" },
    { id: "C", text: "$-5$" },
    // distractor: flips the sign of the outside shift: f(0) + 5 = 5
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $g(-4) = f(-4 + 4) - 5 = f(0) - 5 = 0 - 5 = -5$.\n\n**The Full Solution:**\nSubstitute $x = -4$ into $g(x) = f(x + 4) - 5$:\n$g(-4) = f(-4 + 4) - 5 = f(0) - 5$.\nSince $f(x) = x^2$, $f(0) = 0^2 = 0$.\nTherefore $g(-4) = 0 - 5 = -5$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — shifts the input the wrong way, evaluating $f(-8) - 5 = 64 - 5 = 59$.\n* Choice B: \"stops one step early\" — ignores the inside shift and computes $f(-4) - 5 = 16 - 5 = 11$.\n* Choice D: \"applies the inverse operation\" — flips the sign of the outside shift to $f(0) + 5 = 5$.\n\n**Test Day Takeaway:** Evaluate composed transformations from the inside out: handle the input shift FIRST, then apply the outside shift.",
  skills: ["function-transformation", "function-evaluation"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A right-angle bracing gusset is cut as an isosceles right triangle whose perimeter measures $58 + 58\\sqrt{2}$ centimeters. What is the length, in centimeters, of one of the two equal legs?",
  choices: [
    // distractor: halves the rational part of the perimeter, dropping the radical
    { id: "A", text: "$29$" },
    { id: "B", text: "$29\\sqrt{2}$" },
    // distractor: takes the full rational coefficient as the leg
    { id: "C", text: "$58$" },
    // distractor: takes the full perimeter coefficient with the radical
    { id: "D", text: "$58\\sqrt{2}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Special Right Triangle — 45-45-90**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** For an isosceles right triangle with leg $L$, the hypotenuse is $L\\sqrt{2}$, so the perimeter is $2L + L\\sqrt{2} = L(2 + \\sqrt{2})$. Set $L(2 + \\sqrt{2}) = 58 + 58\\sqrt{2}$ and solve: $L = 29\\sqrt{2}$.\n\n**The Full Solution:**\nA 45-45-90 triangle with leg $L$ has hypotenuse $L\\sqrt{2}$. The perimeter is:\n$P = L + L + L\\sqrt{2} = L(2 + \\sqrt{2})$.\nSet equal to the given perimeter:\n$L(2 + \\sqrt{2}) = 58 + 58\\sqrt{2} = 58(1 + \\sqrt{2})$.\n$L = \\dfrac{58(1 + \\sqrt{2})}{2 + \\sqrt{2}}$.\nRationalize by multiplying by $\\dfrac{2 - \\sqrt{2}}{2 - \\sqrt{2}}$ (denominator becomes $4 - 2 = 2$):\n$L = \\dfrac{58(1 + \\sqrt{2})(2 - \\sqrt{2})}{2} = \\dfrac{58\\sqrt{2}}{2} = 29\\sqrt{2}$.\n\nVerification: with $L = 29\\sqrt{2}$, the perimeter is $29\\sqrt{2}(2 + \\sqrt{2}) = 58\\sqrt{2} + 29 \\cdot 2 = 58 + 58\\sqrt{2}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — halves the rational coefficient ($58/2 = 29$) but drops the radical.\n* Choice C: \"stops one step early\" — reads the rational coefficient $58$ directly as the leg.\n* Choice D: \"applies the inverse operation\" — reads the radical coefficient $58$ directly with the $\\sqrt{2}$.\n\n**Test Day Takeaway:** Express the perimeter of a 45-45-90 triangle as $L(2 + \\sqrt{2})$, then divide and rationalize. The leg is rarely a plain integer.",
  skills: ["triangles", "right-triangles", "special-right-triangles"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "easy",
  band: 3,
  question: "For the function $f$, $f(x) = 6x - 5$. What is the value of $f(4)$?",
  correctAnswer: "19",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $19$.**\n\n**The Fast Way (~10s):** Substitute $x = 4$: $f(4) = 6(4) - 5 = 24 - 5 = 19$.\n\n**The Full Solution:**\nReplace every $x$ in $f(x) = 6x - 5$ with $4$:\n$f(4) = 6(4) - 5 = 24 - 5 = 19$.\n\n**Common Mistakes to Avoid:**\n* Subtracting before multiplying: $6(4 - 5) = -6$ ignores order of operations.\n* Forgetting the $-5$ and reporting $24$.\n\n**Test Day Takeaway:** To evaluate a function, substitute the input for every occurrence of the variable and follow the order of operations.",
  skills: ["function-evaluation", "linear-functions"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$$f(x) = (x + 8)(x + 3)(x - 7)$$\nConsider the function $g(x) = f(x) - 4$. Which table gives the value of $g(x)$ at $x = -8$, $x = -3$, and $x = 7$?",
  choices: [
    { id: "A", text: "$g(-8) = -4,\\ g(-3) = -4,\\ g(7) = -4$" },
    // distractor: evaluates f at its own zeros but forgets the -4 shift
    { id: "B", text: "$g(-8) = 0,\\ g(-3) = 0,\\ g(7) = 0$" },
    // distractor: adds 4 instead of subtracting
    { id: "C", text: "$g(-8) = 4,\\ g(-3) = 4,\\ g(7) = 4$" },
    // distractor: copies the input x-values as the outputs
    { id: "D", text: "$g(-8) = -8,\\ g(-3) = -3,\\ g(7) = 7$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The inputs $-8$, $-3$, and $7$ are exactly the zeros of $f$, so $f = 0$ at each. Then $g = f - 4 = 0 - 4 = -4$ at all three.\n\n**The Full Solution:**\n$f(x) = (x + 8)(x + 3)(x - 7)$ has zeros where each factor is $0$: $x = -8$, $x = -3$, and $x = 7$. At each of those inputs, $f(x) = 0$.\n\nThe transformed function $g(x) = f(x) - 4$ shifts every output down by $4$:\n$g(-8) = 0 - 4 = -4$, $g(-3) = 0 - 4 = -4$, $g(7) = 0 - 4 = -4$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — finds $f = 0$ at the zeros but forgets to apply the $-4$ vertical shift.\n* Choice C: \"applies the inverse operation\" — shifts up by $4$ instead of down.\n* Choice D: \"wrong base\" — copies the input $x$-values as if they were the outputs.\n\n**Test Day Takeaway:** Recognize when given inputs are the zeros of a factored polynomial — the function is $0$ there, so a vertical shift $f(x) + k$ makes every one of those outputs equal $k$.",
  skills: ["polynomial-functions", "function-transformation", "factoring"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the line $y = 6x + k$, where $k$ is a constant, is tangent to the graph of the parabola $y = x^2 + 2x + 11$. What is the value of $k$?",
  choices: [
    // distractor: sign error when isolating k from 4k = 28
    { id: "A", text: "$-7$" },
    // distractor: stops at the discriminant's linear coefficient (-4)
    { id: "B", text: "$4$" },
    { id: "C", text: "$7$" },
    // distractor: reports the parabola's constant term
    { id: "D", text: "$11$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Set the curves equal: $x^2 + 2x + 11 = 6x + k \\Rightarrow x^2 - 4x + (11 - k) = 0$. Tangency means one solution, so discriminant $= 0$: $(-4)^2 - 4(11 - k) = 0 \\Rightarrow 16 - 44 + 4k = 0 \\Rightarrow k = 7$.\n\n**The Full Solution:**\nA line is tangent to a parabola when they meet at exactly one point. Set them equal:\n$x^2 + 2x + 11 = 6x + k$\n$x^2 - 4x + (11 - k) = 0$.\nFor a single solution, the discriminant must be zero:\n$b^2 - 4ac = (-4)^2 - 4(1)(11 - k) = 16 - 44 + 4k = 0$.\nSolve: $4k = 28$, so $k = 7$.\n\nVerification: with $k = 7$, $x^2 - 4x + 4 = 0 \\Rightarrow (x - 2)^2 = 0$, a single root at $x = 2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — sign slip when solving $4k = 28$.\n* Choice B: \"stops one step early\" — reports the linear coefficient $-4$'s magnitude from the merged equation.\n* Choice D: \"wrong base\" — reports the parabola's constant term $11$.\n\n**Test Day Takeaway:** Tangent $\\Rightarrow$ exactly one intersection $\\Rightarrow$ set the discriminant of the combined equation to zero.",
  skills: ["quadratic-equations", "discriminant", "tangent-lines"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "For an electric field passing straight through a flat surface, the electric flux through that surface equals the field strength multiplied by the surface's area. A flat panel is built from two side-by-side squares: the side length of the larger square is $4$ times the side length of the smaller square. A uniform electric field of strength $32.00$ volts per meter passes perpendicularly through the panel, producing a total electric flux of $6{,}800$ volt-meters across the whole panel. What is the electric flux, in volt-meters, through just the larger square?",
  correctAnswer: "6400",
  explanation: "**SAT Pattern: Area Ratio to Side Ratio in Similar Figures**\n\n**The correct answer is $6400$.**\n\n**The Fast Way (~40s):** Flux is proportional to area. If the larger side is $4\\times$ the smaller, its area is $4^2 = 16\\times$ as large, so the two squares split the total flux in a $16 : 1$ ratio. The larger square gets $\\dfrac{16}{17}$ of $6{,}800 = 6{,}400$ volt-meters. (The strength $32.00$ is not needed.)\n\n**The Full Solution:**\nLet the smaller square have side $s$ and the larger have side $4s$.\nAreas: smaller $= s^2$, larger $= (4s)^2 = 16s^2$.\nBecause the same uniform field passes through both, flux is proportional to area, so the fluxes are in the ratio $16 : 1$.\nTotal parts $= 16 + 1 = 17$.\nFlux through the larger square $= \\dfrac{16}{17} \\times 6{,}800 = \\dfrac{108{,}800}{17} = 6{,}400$ volt-meters.\n\nVerification: smaller square flux $= \\dfrac{1}{17} \\times 6{,}800 = 400$, and $6{,}400 + 400 = 6{,}800$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Splitting the flux in the SIDE ratio $4 : 1$ (giving $5{,}440$) instead of the AREA ratio $16 : 1$.\n* Trying to use the field strength $32.00$ — it cancels out and is a distractor.\n\n**Test Day Takeaway:** When a quantity scales with area, the side-length ratio must be SQUARED before splitting a total. A given \"strength\" or \"rate\" factor that applies equally to both parts is often an unneeded distractor.",
  skills: ["geometry", "ratios", "area"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = ax^2 + bx + c$, where $a$, $b$, and $c$ are constants. The graph of $y = f(x)$ in the $xy$-plane has its vertex at $(4, -7)$ and passes through the point $(2, 5)$. What is the value of $a + b + c$?",
  choices: [
    // distractor: stops one step early — gives c (the y-intercept = 41)
    { id: "A", text: "$41$" },
    // distractor: applies inverse op — uses a alone (= 3)
    { id: "B", text: "$3$" },
    { id: "C", text: "$20$" },
    // distractor: confuses h + k from vertex form: 4 + (-7) = -3
    { id: "D", text: "$-3$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** $a + b + c = f(1)$. Vertex form $f(x) = a(x-4)^2 - 7$ with $f(2) = 5$ gives $4a - 7 = 5$, so $a = 3$. Then $f(1) = 3(1-4)^2 - 7 = 27 - 7 = 20$.\n\n**The Full Solution:**\nVertex form: $f(x) = a(x - 4)^2 - 7$.\nUse $(2, 5)$: $5 = a(2 - 4)^2 - 7 = 4a - 7$, so $4a = 12$ and $a = 3$.\nThus $f(x) = 3(x - 4)^2 - 7$.\n\nExpand to standard form: $f(x) = 3(x^2 - 8x + 16) - 7 = 3x^2 - 24x + 48 - 7 = 3x^2 - 24x + 41$.\nSo $a = 3$, $b = -24$, $c = 41$. $a + b + c = 3 - 24 + 41 = 20$.\n\nShortcut: $a + b + c = f(1) = 3(1-4)^2 - 7 = 27 - 7 = 20$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the constant term $c = 41$ alone.\n* Choice B: \"wrong base\" — uses the leading coefficient $a = 3$ alone.\n* Choice D: \"applies the inverse operation\" — confuses $h + k = 4 + (-7) = -3$ from vertex form with $a + b + c$ from standard form.\n\n**Test Day Takeaway:** $a + b + c = f(1)$. To find $f$, use vertex form first, then plug in a second point to solve for $a$.",
  skills: ["vertex-form", "function-interpretation", "quadratic-equations"]
}
      ]
    }
  ]
};

export default practiceTest8;
