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
  question: "If $5n - 12 = 18$, what is the value of $5n + 12$?",
  choices: [
    { id: "A", text: "$42$" },
    // distractor: stops at solving for n: 5n = 30, so n = 6
    { id: "B", text: "$6$" },
    // distractor: returns 5n itself (= 30) instead of 5n + 12
    { id: "C", text: "$30$" },
    // distractor: subtracts 12 instead of adding (back to original 18)
    { id: "D", text: "$18$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $5n - 12 = 18$ means $5n + 12 = 18 + 24 = 42$. Or: $5n = 30$, so $5n + 12 = 30 + 12 = 42$.\n\n**The Full Solution:**\nFrom $5n - 12 = 18$, add $12$ to both sides: $5n = 30$.\nThe question asks for $5n + 12$, not $n$: $30 + 12 = 42$.\n\nVerification: $n = 6$, so $5(6) - 12 = 30 - 12 = 18$ \\checkmark, and $5(6) + 12 = 30 + 12 = 42$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — reports the value of $n = 6$ instead of $5n + 12$.\n* Choice C: \"wrong base\" — returns $5n = 30$ but forgets the $+12$ tail.\n* Choice D: \"applies the inverse operation\" — subtracts $12$ from $5n$ (returning to the original $18$).\n\n**Test Day Takeaway:** Always re-read the last sentence before answering. The question often asks for a related expression, not the variable itself.",
  skills: ["solving-equations", "word-problems"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The function $C(t) = 65 + 18t$ models the temperature, in degrees Fahrenheit, of a chemical solution $t$ minutes after a heating element is turned on. What does the number $18$ represent in this context?",
  choices: [
    // distractor: confuses 18 with the initial value (which is 65)
    { id: "A", text: "The temperature of the solution before heating begins" },
    // distractor: treats 18 as an input value rather than a rate of change
    { id: "B", text: "The temperature of the solution after $18$ minutes" },
    { id: "C", text: "The increase in temperature, in degrees Fahrenheit, each minute" },
    // distractor: inverts the rate (would be 1/18 minutes per degree)
    { id: "D", text: "The number of minutes needed for the temperature to increase by $1$ degree" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** In $C(t) = 65 + 18t$, the coefficient of $t$ is the rate of change: $18$ degrees per minute.\n\n**The Full Solution:**\nThe function is in the form $C(t) = b + mt$, where $m = 18$ is the slope and $b = 65$ is the $y$-intercept. The slope tells us the rate of change: for each additional minute, the temperature increases by $18$ degrees Fahrenheit.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — confuses the slope $18$ with the initial value, which is $65$.\n* Choice B: \"applies the inverse operation\" — treats $18$ as an input value $t = 18$ instead of a rate.\n* Choice D: \"applies the inverse operation\" — inverts the rate (one degree per $\\tfrac{1}{18}$ minute).\n\n**Test Day Takeaway:** In $y = b + mx$, the coefficient of the variable is always the rate of change per unit of that variable.",
  skills: ["function-interpretation", "linear-functions", "slope"]
},
{
  id: 3,
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
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A bookstore has $1{,}820$ paperback books, and the number of paperback books is $35\\%$ of the total number of books in the store. How many books, in total, are in the store?",
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
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Total $\\times 0.35 = 1{,}820$, so total $= \\frac{1{,}820}{0.35} = 5{,}200$.\n\n**The Full Solution:**\nLet $T$ be the total number of books. Then ${}0.35 \\cdot T = 1{,}820$.\nDivide both sides by $0.35$: $T = \\dfrac{1{,}820}{0.35} = 5{,}200$.\n\nVerification: $35\\%$ of $5{,}200 = 0.35 \\cdot 5{,}200 = 1{,}820$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — multiplies $1{,}820 \\cdot 0.35 = 637$ instead of dividing.\n* Choice B: \"wrong base\" — divides by the complement $0.65$ (treats $1{,}820$ as the non-paperback count).\n* Choice D: \"off-by-one / decimal slip\" — divides by $0.035$ instead of $0.35$.\n\n**Test Day Takeaway:** When a percent of an unknown total is given, divide the part by the percent (as a decimal) to recover the whole.",
  skills: ["percents"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A trail mix is made with cashews and raisins in a ratio of $5$ cups of cashews to $3$ cups of raisins. If the total amount of trail mix is $40$ cups, how many cups of raisins are in the mix?",
  choices: [
    // distractor: stops one step early — picks the raisin ratio number directly
    { id: "A", text: "$3$" },
    // distractor: uses 3/5 of total instead of 3/8 ($24$)
    { id: "B", text: "$24$" },
    { id: "C", text: "$15$" },
    // distractor: solves for cashew amount instead of raisin (5/8 of 40 = 25)
    { id: "D", text: "$25$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Raisins make up $\\dfrac{3}{5 + 3} = \\dfrac{3}{8}$ of the total. So raisins $= \\dfrac{3}{8} \\cdot 40 = 15$ cups.\n\n**The Full Solution:**\nLet cashews $= 5k$ and raisins $= 3k$ (so the ratio is $5 : 3$).\nTotal: $5k + 3k = 8k = 40$, so $k = 5$.\nRaisins $= 3k = 3 \\cdot 5 = 15$ cups.\n\nVerification: cashews $= 5 \\cdot 5 = 25$, total $= 25 + 15 = 40$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports $3$ (the raisin part of the ratio) instead of solving the proportion.\n* Choice B: \"wrong base\" — uses $\\dfrac{3}{5}$ of the total instead of $\\dfrac{3}{8}$.\n* Choice D: \"applies the inverse operation\" — solves for cashews ($\\dfrac{5}{8} \\cdot 40 = 25$) instead of raisins.\n\n**Test Day Takeaway:** When two parts are given as a ratio and the total of both parts is known, the denominator of each fraction is the SUM of the ratio parts, not just one part.",
  skills: ["ratios", "word-problems"]
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
  question: "If $\\dfrac{x+3}{4} - \\dfrac{x-1}{6} = 2$, what is the value of $x$?",
  correctAnswer: "13",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~20s):** Multiply through by $12$ (LCM of $4$ and $6$): $3(x+3) - 2(x-1) = 24$. Distribute: $3x + 9 - 2x + 2 = 24$, so $x + 11 = 24$ and $x = 13$.\n\n**The Full Solution:**\nMultiply every term by $12$:\n$3(x + 3) - 2(x - 1) = 24$\n$3x + 9 - 2x + 2 = 24$\n$x + 11 = 24$\n$x = 13$\n\nVerification: $\\dfrac{13+3}{4} - \\dfrac{13-1}{6} = \\dfrac{16}{4} - \\dfrac{12}{6} = 4 - 2 = 2$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting to distribute the negative: $-2(x-1) = -2x + 2$, not $-2x - 2$.\n* Using the wrong LCM (e.g., $24$ instead of $12$).\n\n**Test Day Takeaway:** Clear fractions FIRST by multiplying every term by the LCM of the denominators. Distribute carefully to avoid sign slips.",
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
  question: "In right triangle $XYZ$ shown, the right angle is at vertex $Y$. The leg $XY$ has length $a$, and the leg $YZ$ has length $a + 17$. The hypotenuse $XZ$ has length $25$. What is the perimeter of triangle $XYZ$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["X", "Y", "Z"],
      sideLabels: ["a", "a + 17", "25"],
      rightAngleVertex: 1
    }
  },
  correctAnswer: "56",
  explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**The correct answer is $56$.**\n\n**The Fast Way (~30s):** Recognize the $7$-$24$-$25$ Pythagorean triple. So $a = 7$, $a + 17 = 24$. Perimeter $= 7 + 24 + 25 = 56$.\n\n**The Full Solution:**\nApply the Pythagorean theorem: $a^2 + (a + 17)^2 = 25^2$.\n$a^2 + a^2 + 34a + 289 = 625$\n$2a^2 + 34a - 336 = 0$\n$a^2 + 17a - 168 = 0$\n$(a + 24)(a - 7) = 0$\n\nSo $a = 7$ (rejecting the negative root). Then $a + 17 = 24$.\nPerimeter $= 7 + 24 + 25 = 56$.\n\nVerification: $7^2 + 24^2 = 49 + 576 = 625 = 25^2$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting only the legs ($7 + 24 = 31$) and forgetting the hypotenuse.\n* Sign error in the quadratic and using the negative root.\n\n**Test Day Takeaway:** Memorize Pythagorean triples ($3$-$4$-$5$, $5$-$12$-$13$, $7$-$24$-$25$, $8$-$15$-$17$). When the hypotenuse is $25$, the legs are usually $7$ and $24$.",
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
// Distribution: 3E / 6M / 13H with band-8 ceiling on Q20, Q21.
// Calibrated to Bluebook Module 2 Hard (Q20 absolute-value-equation sum, Q21 chord-distance circle).
// Note: removed Q21 duplicate of Q19 (both were system no-solution).

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "A college club tracks attendance at its weekly meetings. Each week, the number of attendees is approximately $5\\%$ higher than the previous week's attendance, as word-of-mouth spreads. Which type of function best models the number of attendees as a function of the number of weeks since the club began?",
  choices: [
    // distractor: linear — same NUMBER more each week (wrong; \"5%\" is multiplicative)
    { id: "A", text: "Increasing linear" },
    { id: "B", text: "Increasing exponential" },
    // distractor: wrong direction — \"higher\" is growth, not decay
    { id: "C", text: "Decreasing exponential" },
    // distractor: wrong type — quadratic has constant second difference
    { id: "D", text: "Quadratic" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Classify Physical Motion Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** \"$5\\%$ higher than the previous week\" = multiplied by $1.05$ each week (a fixed factor) $\\Rightarrow$ exponential growth.\n\n**The Full Solution:**\n\"$5\\%$ higher than the previous week's attendance\" describes a percent of the CURRENT week's attendees, not a fixed number. Each week's attendance is $1.05$ times the previous week's — a multiplicative factor applied at fixed intervals. That's the definition of exponential growth.\n\nA model would be $A(w) = A_0 \\cdot (1.05)^w$ where $w$ is weeks.\n\nVerification: at $w = 0$, $A = A_0$; at $w = 1$, $A = 1.05 A_0$; at $w = 2$, $A = 1.1025 A_0$. The NUMBER added each week (in attendees) grows over time, the signature of exponential growth vs the constant number added in linear growth \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong formula\" — linear would mean the same NUMBER of new attendees each week (e.g., $+10$). \"$5\\%$\" is a percent of the current value, which is multiplicative.\n* Choice C: \"wrong direction\" — \"higher\" means growth, not decay.\n* Choice D: \"wrong formula\" — quadratic relationships have constant SECOND differences, not constant multiplicative factors.\n\n**Test Day Takeaway:** \"Higher / grows / increases by X percent each [period]\" $\\Rightarrow$ EXPONENTIAL growth. \"Higher by X each [period]\" $\\Rightarrow$ LINEAR.",
  skills: ["function-interpretation", "exponential-growth-decay"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "A high-school marching band uses a particular brand of candle for a fundraiser. The function $C(h) = -16h + 240$ approximates the height of a candle, in millimeters, after $h$ hours of continuous burning. Which statement is the best interpretation of the $y$-intercept of the graph of $y = C(h)$ in the $hy$-plane in this context?",
  choices: [
    // distractor: confuses slope with intercept
    { id: "A", text: "The candle burns down at approximately $240$ millimeters per hour." },
    // distractor: swaps coefficients
    { id: "B", text: "The candle was approximately $16$ millimeters tall before it was lit." },
    { id: "C", text: "The candle was approximately $240$ millimeters tall before it was lit." },
    // distractor: combines both confusions
    { id: "D", text: "The candle burns down at approximately $16$ millimeters per hour." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Interpret Initial Value in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $y$-intercept of $C(h) = -16h + 240$ is $C(0) = 240$. At $h = 0$ (before burning), height $\\approx 240$ mm.\n\n**The Full Solution:**\nThe $y$-intercept of a linear function $C(h) = mh + b$ is $b$, the value at $h = 0$. Here $b = 240$, and $h$ counts hours of burning, so $h = 0$ is BEFORE the candle was lit. The candle was about $240$ millimeters tall to start.\n\nVerification: at $h = 0$, $C = 240$ ✓. At $h = 1$, $C = 224$ — about $16$ mm burned in one hour, confirming the slope. The slope is the burn rate; the $y$-intercept is the initial height \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base AND wrong unit\" — treats the initial height as a per-hour burn rate. At $240$ mm/hour the candle would vanish in the first hour.\n* Choice B: \"swaps coefficients\" — uses the slope's magnitude as the starting height.\n* Choice D: \"correct interpretation of slope, wrong question\" — accurately describes the slope, but the question asks about the $y$-intercept.\n\n**Test Day Takeaway:** $y$-intercept = value at input $0$ = the starting amount. Slope = rate of change per unit. The question's wording tells you which to report.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The table shows three values of $x$ and the corresponding values of a linear function $f(x)$.\n\n| $x$ | $f(x)$ |\n|-----|--------|\n| $1$ | $3$ |\n| $3$ | $11$ |\n| $5$ | $?$ |\n\nWhat value goes in the table for $f(5)$?",
  choices: [
    // distractor: stops one step early - adds slope only once
    { id: "A", text: "$15$" },
    { id: "B", text: "$19$" },
    // distractor: wrong base - doubles f(3)
    { id: "C", text: "$22$" },
    // distractor: applies inverse op - returns f(1)
    { id: "D", text: "$3$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Linear Function Extrapolation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Slope $= \\dfrac{11 - 3}{3 - 1} = 4$. From $x = 3$ to $x = 5$, $x$ increases by $2$, so $f$ increases by $2 \\cdot 4 = 8$. $f(5) = 11 + 8 = 19$.\n\n**The Full Solution:**\nFor a linear function, the rate of change (slope) is constant.\nSlope $= \\dfrac{f(3) - f(1)}{3 - 1} = \\dfrac{11 - 3}{2} = 4$.\n\nFrom $x = 3$ to $x = 5$ ($\\Delta x = 2$): $\\Delta f = 4 \\cdot 2 = 8$.\n$f(5) = f(3) + 8 = 11 + 8 = 19$.\n\nVerification: $f(x) = 4x - 1$. $f(5) = 4(5) - 1 = 19$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — adds slope only once: $11 + 4 = 15$.\n* Choice C: \"wrong base\" — doubles $f(3)$ instead of adding $\\Delta x \\cdot$ slope.\n* Choice D: \"applies the inverse operation\" — gives $f(1)$ instead of $f(5)$.\n\n**Test Day Takeaway:** For a linear function, $\\Delta f = \\text{slope} \\cdot \\Delta x$. Compute the slope from any two points, then extrapolate.",
  skills: ["linear-functions", "function-interpretation", "slope"]
},
{
  id: 4,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A taxi company charges a $\\$3.50$ base fare plus $\\$2.25$ per mile. A particular ride costs a total of $\\$21.50$. How many miles long was the ride?",
  correctAnswer: "8",
  explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~15s):** ${}3.50 + 2.25m = 21.50 \\Rightarrow 2.25m = 18 \\Rightarrow m = 8$.\n\n**The Full Solution:**\nTotal cost $=$ base fare $+$ rate $\\times$ miles.\n${}21.50 = 3.50 + 2.25m$\n${}21.50 - 3.50 = 2.25m$\n$18 = 2.25m$\n$m = \\dfrac{18}{2.25} = 8$ miles.\n\nVerification: ${}3.50 + 2.25(8) = 3.50 + 18 = 21.50$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Dividing $21.50$ by $2.25$ without first subtracting the base fare ($\\approx 9.56$).\n* Forgetting the base fare entirely.\n\n**Test Day Takeaway:** In rate problems with a fixed startup cost, subtract the fixed cost FIRST, then divide by the per-unit rate.",
  skills: ["linear-functions", "word-problems"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A study collected data on study hours $x$ and exam score $y$ for $20$ students. The line of best fit has equation $\\hat{y} = 4.5x + 38$. Which of the following best describes the meaning of the slope $4.5$ in this context?",
  diagram: { type: "scatterplot", params: {
    points: [[1,40],[2,48],[3,50],[4,58],[5,58],[6,62],[7,67],[8,78],[9,78],[10,82]],
    xMin: 0, xMax: 11, yMin: 30, yMax: 100,
    xGridStep: 1, xLabelStep: 2, yGridStep: 10, yLabelStep: 20,
    bestFitLine: { slope: 4.5, intercept: 38 },
    xLabel: "Study hours", yLabel: "Exam score",
  } },
  choices: [
    // distractor: confuses slope with intercept
    { id: "A", text: "The predicted exam score for a student who studies $0$ hours." },
    { id: "B", text: "The predicted increase in exam score for each additional hour of studying." },
    // distractor: treats slope as a probability
    { id: "C", text: "The percent of students whose score increases when they study more." },
    // distractor: confuses slope (rate) with average
    { id: "D", text: "The average exam score across all $20$ students." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $\\hat{y} = mx + b$, the slope $m$ is the predicted change in $y$ for each one-unit increase in $x$.\n\n**The Full Solution:**\nThe line of best fit $\\hat{y} = 4.5x + 38$ has slope $4.5$.\nFor each additional hour of studying ($\\Delta x = 1$), the predicted exam score increases by $4.5$ points ($\\Delta \\hat{y} = 4.5$).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — confuses slope with intercept; $38$ is the score at $x = 0$.\n* Choice C: \"applies the inverse operation\" — treats slope as a probability or proportion.\n* Choice D: \"stops one step early\" — confuses slope (a rate) with the average.\n\n**Test Day Takeaway:** In $\\hat{y} = mx + b$, slope $m$ is the predicted change in $y$ per unit increase in $x$. Intercept $b$ is the predicted $y$ when $x = 0$.",
  skills: ["scatterplots", "statistics", "linear-functions"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A factory produces widgets. On Monday, $2\\%$ of widgets were defective. On Tuesday, $3\\%$ of widgets were defective. Monday's production was $500$ widgets and Tuesday's production was $300$ widgets. What percentage of the total two-day production was defective? Round to the nearest tenth.",
  correctAnswer: "2.4",
  explanation: "**SAT Pattern: Percent of a Whole**\n\n**The correct answer is $2.4$.**\n\n**The Fast Way (~20s):** Total defective $= 0.02(500) + 0.03(300) = 10 + 9 = 19$. Total produced $= 800$. Percent $= \\dfrac{19}{800} \\times 100 \\approx 2.375 \\approx 2.4\\%$.\n\n**The Full Solution:**\nMonday defective: $2\\%$ of $500 = 10$ widgets.\nTuesday defective: $3\\%$ of $300 = 9$ widgets.\nTotal defective $= 10 + 9 = 19$.\nTotal production $= 500 + 300 = 800$.\n\nDefective rate $= \\dfrac{19}{800} = 0.02375 = 2.375\\% \\approx 2.4\\%$.\n\n**Common Mistakes to Avoid:**\n* Averaging the percentages directly: $\\dfrac{2 + 3}{2} = 2.5\\%$ (ignores different production volumes).\n* Using only one day's data.\n\n**Test Day Takeaway:** Never average percentages directly when groups have different sizes. Always compute total favorable $/$ total count.",
  skills: ["percents", "statistics"]
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
  difficulty: "medium",
  band: 5,
  question: "A circle in the $xy$-plane has equation $x^2 + y^2 - 6x + 8y = 0$. What is the radius of the circle?",
  choices: [
    // distractor: stops at r^2 = 25 instead of r
    { id: "A", text: "$25$" },
    { id: "B", text: "$5$" },
    // distractor: only completes the square on x: r^2 = 9
    { id: "C", text: "$3$" },
    // distractor: takes -6 + 8 = 2 as a clue without completing the square
    { id: "D", text: "$\\sqrt{2}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Complete the square: $(x - 3)^2 + (y + 4)^2 = 9 + 16 = 25$. Radius $= \\sqrt{25} = 5$.\n\n**The Full Solution:**\n$x^2 - 6x + y^2 + 8y = 0$.\nComplete the square for $x$: half of $-6$ is $-3$, squared is $9$.\nComplete the square for $y$: half of $8$ is $4$, squared is $16$.\nAdd $9$ and $16$ to BOTH sides:\n$(x - 3)^2 + (y + 4)^2 = 25$.\n\nThis is a circle with center $(3, -4)$ and radius $r = \\sqrt{25} = 5$.\n\nVerification: expand $(x - 3)^2 + (y + 4)^2 = x^2 - 6x + 9 + y^2 + 8y + 16 = 25$, so $x^2 + y^2 - 6x + 8y = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives $r^2 = 25$ instead of $r$.\n* Choice C: \"wrong base\" — only completes the square on $x$ and reports $\\sqrt{9} = 3$.\n* Choice D: \"applies the inverse operation\" — adds $-6 + 8 = 2$ blindly.\n\n**Test Day Takeaway:** Complete the square SYMMETRICALLY for both variables. Add the squared half-coefficients to BOTH sides.",
  skills: ["circle-equations", "solving-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  question: "Line $j$ passes through the points $(2, 9)$ and $(6, 1)$. Line $k$ is perpendicular to line $j$ and passes through the point $(2, 9)$. Which of the following is an equation of line $k$?",
  choices: [
    // distractor: gives slope of j (parallel, not perpendicular)
    { id: "A", text: "$y = -2x + 13$" },
    { id: "B", text: "$y = \\dfrac{1}{2}x + 8$" },
    // distractor: takes reciprocal but keeps the negative sign
    { id: "C", text: "$y = -\\dfrac{1}{2}x + 10$" },
    // distractor: uses absolute value of slope without reciprocating
    { id: "D", text: "$y = 2x + 5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Slope of $j$: $\\dfrac{1 - 9}{6 - 2} = \\dfrac{-8}{4} = -2$. Perpendicular slope: $\\dfrac{1}{2}$. Line $k$: $y - 9 = \\dfrac{1}{2}(x - 2) \\Rightarrow y = \\dfrac{1}{2}x + 8$.\n\n**The Full Solution:**\nSlope of $j$: $m_j = \\dfrac{1 - 9}{6 - 2} = \\dfrac{-8}{4} = -2$.\nPerpendicular slopes are negative reciprocals: $m_k = \\dfrac{1}{2}$.\nLine $k$ through $(2, 9)$: $y - 9 = \\dfrac{1}{2}(x - 2)$, so $y = \\dfrac{1}{2}x - 1 + 9 = \\dfrac{1}{2}x + 8$.\n\nVerification: $m_j \\cdot m_k = -2 \\cdot \\dfrac{1}{2} = -1$ \\checkmark; line $k$ passes through $(2, 9)$: $\\dfrac{1}{2}(2) + 8 = 9$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives slope of $j$ itself (parallel, not perpendicular).\n* Choice C: \"applies the inverse operation\" — takes reciprocal but keeps the negative sign.\n* Choice D: \"wrong base\" — uses absolute value of $m_j = 2$ without reciprocating.\n\n**Test Day Takeaway:** Perpendicular slopes: flip the fraction AND change the sign. The product of perpendicular slopes is $-1$.",
  skills: ["slope", "linear-functions", "coordinate-geometry"]
},
{
  id: 10,
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
    // distractor: applies inverse op — adds the two expressions and divides
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Alternate interior angles are equal: $7y - 10 = 3y + 50 \\Rightarrow 4y = 60 \\Rightarrow y = 15$.\n\n**The Full Solution:**\nWhen a transversal cuts two parallel lines, alternate interior angles are EQUAL:\n$7y - 10 = 3y + 50$\n$4y = 60$\n$y = 15$\n\nVerification: at $y = 15$, both angles measure $7(15) - 10 = 95^{\\circ}$ and $3(15) + 50 = 95^{\\circ}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — solves $7y = 60$ ignoring the $-10$.\n* Choice C: \"applies the inverse operation\" — sets the angles supplementary: $7y - 10 + 3y + 50 = 180 \\Rightarrow 10y = 140 \\Rightarrow y = 14$.\n* Choice D: \"wrong base\" — averages the constants somehow.\n\n**Test Day Takeaway:** Alternate interior angles, corresponding angles, and alternate exterior angles are EQUAL when lines are parallel. Same-side interior (co-interior) angles are SUPPLEMENTARY.",
  skills: ["triangles", "angles"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Two rectangular prisms are glued together along one face to form a single solid. Prism A has dimensions $4 \\text{ cm} \\times 7 \\text{ cm} \\times 9 \\text{ cm}$, and Prism B has dimensions $4 \\text{ cm} \\times 7 \\text{ cm} \\times 6 \\text{ cm}$. The glued face has dimensions $4 \\text{ cm} \\times 7 \\text{ cm}$. What is the total surface area of the resulting solid, in square centimeters?",
  choices: [
    // distractor: subtracts only one face (442 - 28 = 414)
    { id: "A", text: "$414$" },
    { id: "B", text: "$386$" },
    // distractor: subtracts wrong face area (4 * 9 = 36 instead of 4 * 7 = 28)
    { id: "C", text: "$370$" },
    // distractor: doesn't subtract glued faces at all
    { id: "D", text: "$442$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Composite Solid Surface Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Surface area of A: $2(28 + 36 + 63) = 254$. Surface area of B: $2(28 + 24 + 42) = 188$. Sum: $442$. Subtract the glued face from BOTH solids: $442 - 2 \\cdot 28 = 386$.\n\n**The Full Solution:**\nSurface area of Prism A ($4 \\times 7 \\times 9$): $2(4 \\cdot 7 + 4 \\cdot 9 + 7 \\cdot 9) = 2(28 + 36 + 63) = 2(127) = 254 \\text{ cm}^2$.\n\nSurface area of Prism B ($4 \\times 7 \\times 6$): $2(4 \\cdot 7 + 4 \\cdot 6 + 7 \\cdot 6) = 2(28 + 24 + 42) = 2(94) = 188 \\text{ cm}^2$.\n\nTotal before gluing: $254 + 188 = 442 \\text{ cm}^2$.\nThe glued face ($4 \\times 7 = 28 \\text{ cm}^2$) is hidden on BOTH prisms; subtract $2 \\times 28 = 56 \\text{ cm}^2$.\nTotal surface area: $442 - 56 = 386 \\text{ cm}^2$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — subtracts only one of the two glued faces.\n* Choice C: \"wrong base\" — uses the wrong face area ($4 \\times 9 = 36$ instead of $4 \\times 7 = 28$).\n* Choice D: \"applies the inverse operation\" — does not subtract the glued face at all.\n\n**Test Day Takeaway:** When two solids are glued along a face, that face is hidden on BOTH solids. Subtract twice the contact area from the simple sum.",
  skills: ["surface-area", "volume"]
},
{
  id: 12,
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
  id: 13,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The table below shows the results of a survey of $250$ employees about their commute method and department.\n\n| | Car | Public Transit | Bike | Total |\n|---|---|---|---|---|\n| Marketing | $40$ | $25$ | $10$ | $75$ |\n| Engineering | $30$ | $45$ | $25$ | $100$ |\n| Sales | $50$ | $15$ | $10$ | $75$ |\n| Total | $120$ | $85$ | $45$ | $250$ |\n\nIf one employee who uses public transit OR bikes is selected at random, what is the probability that the employee works in Engineering? Round to the nearest hundredth.",
  correctAnswer: "0.54",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**The correct answer is $0.54$.**\n\n**The Fast Way (~25s):** Public transit OR bike total $= 85 + 45 = 130$. Engineering employees in those columns $= 45 + 25 = 70$. Probability $= \\dfrac{70}{130} \\approx 0.538 \\approx 0.54$.\n\n**The Full Solution:**\nGiven: an employee uses public transit OR bikes. Restrict the sample space to those columns.\nTotal in restricted set: $85 + 45 = 130$.\nFavorable (Engineering AND in restricted set): $45 + 25 = 70$.\nProbability $= \\dfrac{70}{130} = \\dfrac{7}{13} \\approx 0.5385 \\approx 0.54$.\n\n**Common Mistakes to Avoid:**\n* Using $250$ as the denominator: gives $\\frac{70}{250} = 0.28$.\n* Using only one column (e.g., only public transit): gives $\\frac{45}{85} \\approx 0.53$, very close numerically.\n\n**Test Day Takeaway:** \"Given X OR Y\" means restrict the denominator to the union of those subsets. The numerator is the favorable count within that union.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A theater sells two types of tickets to a show: adult tickets at $\\$12$ each and child tickets at $\\$8$ each. On a particular evening, $250$ tickets were sold for a total of $\\$2{,}680$. How many adult tickets were sold?",
  choices: [
    // distractor: stops one step early — number of child tickets
    { id: "A", text: "$80$" },
    // distractor: wrong base — uses average price (\\$10.72) ignoring system constraints
    { id: "B", text: "$120$" },
    { id: "C", text: "$170$" },
    // distractor: applies the inverse operation — reports total tickets instead of adult tickets
    { id: "D", text: "$250$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Let $a$ = adult tickets, $c$ = child tickets. Then $a + c = 250$ and $12a + 8c = 2680$. Substitute $c = 250 - a$: $12a + 8(250 - a) = 2680 \\Rightarrow 4a = 680 \\Rightarrow a = 170$.\n\n**The Full Solution:**\nLet $a$ be the number of adult tickets and $c$ be the number of child tickets.\n\nTotal tickets: $a + c = 250$.\nTotal revenue: $12a + 8c = 2680$.\n\nSolve by substitution. From the first equation: $c = 250 - a$. Substitute into the second:\n$12a + 8(250 - a) = 2680$\n$12a + 2000 - 8a = 2680$\n$4a = 680$\n$a = 170$.\n\nThen $c = 250 - 170 = 80$.\n\nVerification: $170 + 80 = 250$ tickets \\checkmark; $12(170) + 8(80) = 2040 + 640 = 2680$ dollars \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the number of child tickets ($80$) instead of adult tickets ($170$).\n* Choice B: \"wrong base\" — comes from dividing $2680$ by an average price guess.\n* Choice D: \"applies the inverse operation\" — reports total tickets sold ($250$) rather than just adult tickets.\n\n**Test Day Takeaway:** SAT word-problem systems usually have one count equation and one value (revenue/total dollars) equation. Define each variable explicitly, write both equations, and solve.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 6,
  question: "A researcher surveyed $625$ randomly selected adults and found that $375$ support a new policy. The researcher uses the quick estimate margin of error $\\approx \\dfrac{1}{\\sqrt{n}}$ for a $95\\%$ confidence interval. What is the approximate margin of error, expressed as a percentage? Round to the nearest whole number.",
  correctAnswer: "4",
  explanation: "**SAT Pattern: Margin of Error**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~10s):** $\\dfrac{1}{\\sqrt{625}} = \\dfrac{1}{25} = 0.04 = 4\\%$.\n\n**The Full Solution:**\nThe quick-estimate $95\\%$ margin of error formula is $\\dfrac{1}{\\sqrt{n}}$, where $n$ is the SAMPLE SIZE (not the count of favorable outcomes).\n\n$\\dfrac{1}{\\sqrt{625}} = \\dfrac{1}{25} = 0.04 = 4\\%$.\n\nThe sample proportion is $\\dfrac{375}{625} = 60\\%$, so the $95\\%$ confidence interval is approximately $[56\\%, 64\\%]$.\n\n**Common Mistakes to Avoid:**\n* Using $n = 375$ (the favorable count) instead of $n = 625$ (sample size): gives $\\dfrac{1}{\\sqrt{375}} \\approx 5.16\\%$.\n* Forgetting to convert to a percentage.\n\n**Test Day Takeaway:** The margin of error formula uses the total sample size $n$, not the count of favorable responses.",
  skills: ["margin-of-error", "statistics"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A hospital food-service manager has a budget of $\\$880$ to purchase reusable meal trays. To qualify for a hospital-supply discount, the manager must order a minimum of $120$ trays total. Standard trays cost $\\$5.50$ each and insulated trays cost $\\$9.20$ each. What is the maximum number of insulated trays the manager can order while staying within the budget and qualifying for the discount?",
  correctAnswer: "59",
  explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**The correct answer is $59$.**\n\n**The Fast Way (~45s):** Let $s$ = standard, $i$ = insulated. To max $i$, set $s + i = 120$ exactly, $s = 120 - i$. Budget: $5.50(120 - i) + 9.20i \\leq 880 \\Rightarrow 660 + 3.70i \\leq 880 \\Rightarrow i \\leq 59.46$. Floor: $i = 59$.\n\n**The Full Solution:**\nLet $s$ = standard trays, $i$ = insulated trays.\nConstraints:\n* Discount floor: $s + i \\geq 120$.\n* Budget: $5.50s + 9.20i \\leq 880$.\n* Both non-negative integers.\n\nTo MAXIMIZE $i$, fill the rest with the cheaper standard trays at EXACTLY the floor (any extras waste budget). Set $s = 120 - i$:\n\n$5.50(120 - i) + 9.20i \\leq 880$\n$660 - 5.50i + 9.20i \\leq 880$\n$3.70i \\leq 220$\n$i \\leq 59.459...$.\n\nMax integer: $i = 59$.\n\n**Verification:** With $i = 59$, $s = 61$. Total: $61 + 59 = 120 \\geq 120$ ✓. Cost: $5.50(61) + 9.20(59) = 335.50 + 542.80 = 878.30 \\leq 880$ ✓. Try $i = 60$, $s = 60$: $5.50(60) + 9.20(60) = 330 + 552 = 882 > 880$ ✗ — exceeds budget \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $95$ (treats $880/9.20 \\approx 95$ as the max, ignoring the discount floor — also $s = 0, i = 95$ violates the floor since $0 + 95 = 95 < 120$).\n* Reporting $120$ (treats the floor as the answer).\n* Reporting $60$ (forgets to round DOWN — $60$ exceeds budget).\n* Reporting $61$ (reports standard trays instead of insulated).\n\n**Test Day Takeaway:** Two-constraint optimization (budget + minimum total): To maximize one quantity, fill the remainder with the cheaper option AT EXACTLY the minimum total. Solve the resulting single-variable inequality and take the FLOOR.",
  skills: ["inequalities", "word-problems", "systems-of-equations"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The graph of $y = 3x^2 + bx + c$ has a vertex at $(-2, -10)$, where $b$ and $c$ are constants. What is the value of $bc$?",
  correctAnswer: "24",
  explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**The correct answer is $24$.**\n\n**The Fast Way (~40s):** $y = 3(x+2)^2 - 10 = 3x^2 + 12x + 2$. $bc = 12 \\times 2 = 24$.\n\n**Test Day Takeaway:** Expand, distribute, add $k$.",
  skills: ["quadratic-equations", "vertex-form"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The expression $\\dfrac{x^2 - 9}{x^2 + 5x + 6} \\cdot \\dfrac{x^2 + 4x + 4}{x^2 - x - 6}$ simplifies to which of the following?",
  choices: [
    // distractor: partial cancellation leaving (x+2)/(x+2)
    { id: "A", text: "$\\dfrac{x + 2}{x + 2}$" },
    // distractor: incomplete cancellation
    { id: "B", text: "$\\dfrac{(x-3)(x+2)}{(x+3)(x-3)}$" },
    { id: "C", text: "$1$" },
    // distractor: cancels incorrectly leaving extra factors
    { id: "D", text: "$\\dfrac{x+2}{x-3}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Factor everything, then cancel.\n\n**The Full Solution:**\nFactor each piece:\n* $x^2 - 9 = (x-3)(x+3)$\n* $x^2 + 5x + 6 = (x+2)(x+3)$\n* $x^2 + 4x + 4 = (x+2)^2$\n* $x^2 - x - 6 = (x-3)(x+2)$\n\nSubstitute:\n$\\dfrac{(x-3)(x+3)}{(x+2)(x+3)} \\cdot \\dfrac{(x+2)^2}{(x-3)(x+2)} = \\dfrac{(x-3)(x+3)(x+2)^2}{(x+2)(x+3)(x-3)(x+2)} = 1$\n\n(for $x \\neq 3, -3, -2$)\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — partial cancellation leaves $\\dfrac{x+2}{x+2}$, which equals $1$ but isn't fully simplified.\n* Choice B: \"applies the inverse operation\" — incomplete cancellation.\n* Choice D: \"wrong base\" — cancels incorrectly, leaving extra factors.\n\n**Test Day Takeaway:** Factor every quadratic FIRST. Then cancel common factors across the entire expression.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The function $g$ is defined by $g(x) = (x + 10)(t - x)$, where $t$ is a constant. In the $xy$-plane, the graph of $y = g(x)$ passes through the point $(30, 0)$. What is the value of $g(0)$?",
  correctAnswer: "300",
  explanation: "**SAT Pattern: Recover Parameter, Then Evaluate**\n\n**The correct answer is $300$.**\n\n**The Fast Way (~25s):** $g(30) = 0 \\Rightarrow t = 30$. $g(0) = 10 \\cdot 30 = 300$.\n\n**Test Day Takeaway:** Use the known root to pin the constant.",
  skills: ["function-evaluation", "polynomial-functions"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Five turtle nests contain $158$, $152$, $161$, $145$, and $149$ eggs. A sixth nest with $128$ eggs is added to create a new data set. Which of the following correctly compares the means of the two data sets?",
  choices: [
    { id: "A", text: "The mean of the original data set is greater than the mean of the new data set." },
    { id: "B", text: "The mean of the original data set is less than the mean of the new data set." },
    { id: "C", text: "The means of both data sets are equal." },
    { id: "D", text: "There is not enough information to compare the means." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Mean After Appending a Value**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Original mean $= 765/5 = 153$. New value $128 < 153$, so adding lowers the mean.\n\n**Test Day Takeaway:** Adding below mean lowers; above raises.",
  skills: ["statistics", "mean"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$$4x + 5y = 9$$\n$$12x + 15y = 27$$\n\nFor each real number $r$, which of the following points lies on the graph of each equation in the $xy$-plane for the given system?",
  choices: [
    { id: "A", text: "$\\left(\\dfrac{r}{5} + 9,\\,-\\dfrac{r}{5} + 27\\right)$" },
    { id: "B", text: "$\\left(-\\dfrac{5r}{4} + \\dfrac{9}{4},\\,r\\right)$" },
    { id: "C", text: "$\\left(r,\\,\\dfrac{4r}{5} + \\dfrac{9}{5}\\right)$" },
    { id: "D", text: "$\\left(r,\\,-\\dfrac{4r}{5} + \\dfrac{9}{5}\\right)$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Same Line — Infinitely Many Solutions (Parametric)**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Second equation is $3 \\times$ the first; same line. Solve for $y$: $y = -4x/5 + 9/5$. Set $x = r$: $(r, -4r/5 + 9/5)$.\n\n**Test Day Takeaway:** Collapsed system $\\Rightarrow$ every point on the line solves it.",
  skills: ["systems-of-equations", "linear-functions"]
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
