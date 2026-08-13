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
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $A(t) = 320 + 45t$, the coefficient on $t$ is the rate of change: the altitude climbs $45$ meters every second.\n\n**The Full Solution:**\nStep 1: The function has the form $A(t) = b + mt$, with $b = 320$ the starting altitude and $m = 45$ the slope.\nStep 2: Slope is change in output per unit of input. Each extra second of $t$ adds $45$ meters of altitude. That is exactly choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A: that is the initial value $b = 320$ (altitude at $t = 0$), not the coefficient $45$.\n* Choice C: this treats $45$ as an input ($t = 45$), but $45$ is a rate, not a time.\n* Choice D: this inverts the rate; rising $1$ meter takes $\\frac{1}{45}$ of a second, not the other way around.\n\n**Test Day Takeaway:** In $y = b + mx$, the coefficient on the variable is always the rate of change per unit of that variable.",
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
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Coho are $\\frac{3}{5+3} = \\frac{3}{8}$ of the total, so coho $= \\frac{3}{8} \\cdot 40 = 15$.\n\n**The Full Solution:**\nStep 1: Write the parts as $5k$ chinook and $3k$ coho, preserving the $5 : 3$ ratio.\nStep 2: The total is $5k + 3k = 8k = 40$, so $k = 5$.\nStep 3: Coho $= 3k = 3 \\cdot 5 = 15$. Check: chinook $= 25$, and $25 + 15 = 40$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports the bare ratio part instead of scaling it to the total.\n* Choice B ($24$): uses $\\frac{3}{5}$ of the total instead of $\\frac{3}{8}$.\n* Choice D ($25$): solves for chinook ($\\frac{5}{8} \\cdot 40 = 25$) rather than coho.\n\n**Test Day Takeaway:** When two parts are given as a ratio and you know the combined total, each fraction's denominator is the SUM of the ratio parts, not a single part.",
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
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $7w + 20$ is just $7w - 20$ bumped up by $40$, so $7w + 20 = 15 + 40 = 55$.\n\n**The Full Solution:**\nStep 1: From $7w - 20 = 15$, add $20$ to both sides: $7w = 35$.\nStep 2: The question asks for $7w + 20$, not $w$: $35 + 20 = 55$. Check: $w = 5$, so $7(5) + 20 = 55$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): reports the value of $w$ instead of the requested expression.\n* Choice C ($35$): stops at $7w = 35$ and forgets the $+20$.\n* Choice D ($15$): subtracts $20$ from $7w$, landing back on the original left-hand value.\n\n**Test Day Takeaway:** Re-read the last line before answering. The SAT often asks for an expression built from the variable, not the variable itself.",
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
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $0.35 \\times \\text{total} = 1{,}820$, so total $= \\frac{1{,}820}{0.35} = 5{,}200$.\n\n**The Full Solution:**\nStep 1: Let $T$ be the total entrants. The rated players are $35\\%$ of $T$, so $0.35 \\cdot T = 1{,}820$.\nStep 2: Divide both sides by $0.35$: $T = \\frac{1{,}820}{0.35} = 5{,}200$. Check: $0.35 \\cdot 5{,}200 = 1{,}820$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($637$): multiplies $1{,}820 \\cdot 0.35$ instead of dividing.\n* Choice B ($2{,}800$): divides by the complement $0.65$, treating $1{,}820$ as the unrated count.\n* Choice D ($52{,}000$): divides by $0.035$ instead of $0.35$, a decimal slip.\n\n**Test Day Takeaway:** When a percent of an unknown whole is given, divide the part by the percent (as a decimal) to recover the whole.",
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
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Mean $> $ median means large values are pulling the mean upward, which is the signature of a right skew.\n\n**The Full Solution:**\nStep 1: Here mean $= 60$ exceeds median $= 54$.\nStep 2: When the mean sits above the median, high outliers stretch the upper tail, dragging the average past the middle value. That long tail to the right is a right-skewed distribution, so choice B must be true.\n\n**Why the wrong answers are tempting:**\n* Choice A: half the values fall above the median ($54$), not above the mean.\n* Choice C: the gap of $6$ between mean and median is not the range; range is $\\text{max} - \\text{min}$, which is unknown.\n* Choice D: the most frequent value is the mode, which the data does not pin down.\n\n**Test Day Takeaway:** Mean $>$ median $\\Rightarrow$ right skew; mean $<$ median $\\Rightarrow$ left skew; mean $=$ median suggests symmetry.",
  skills: ["statistics"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A data set consists of $8$ positive integers. Seven of these integers are listed below.\n\n$31, 38, 35, 42, 40, 33, 37$\n\nThe mean of the eight integers is $36$. What is the value of the eighth integer?",
  correctAnswer: "32",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is $32$.**\n\n**The Fast Way (~15s):** Total of all $8$ values $= 8 \\cdot 36 = 288$. The seven listed sum to $256$, so the eighth $= 288 - 256 = 32$.\n\n**The Full Solution:**\nStep 1: Mean times count gives the total: $8 \\cdot 36 = 288$.\nStep 2: Add the seven given integers: $31 + 38 + 35 + 42 + 40 + 33 + 37 = 256$.\nStep 3: The missing value is $288 - 256 = 32$. Check: $\\frac{256 + 32}{8} = \\frac{288}{8} = 36$. $\\checkmark$\n\n**Common Mistakes:** Dividing $256$ by $7$ instead of using the target total of $288$; or subtracting $36 - 32 = 4$ and reporting that.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ total. Subtract the known sum from that total to recover any missing value.",
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
  explanation: "**SAT Pattern: Quadratic — Completing the Square**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $x^2 + 4x + 7 = (x^2 + 4x + 4) + 3 = (x+2)^2 + 3$.\n\n**The Full Solution:**\nStep 1: Take half the $x$-coefficient: $\\frac{4}{2} = 2$, then square it: $2^2 = 4$.\nStep 2: Add and subtract that $4$: $x^2 + 4x + 4 + 7 - 4 = (x+2)^2 + 3$. Check: expanding $(x+2)^2 + 3 = x^2 + 4x + 4 + 3 = x^2 + 4x + 7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: uses the full coefficient $4$ inside the square instead of halving to $2$, and never adjusts the constant.\n* Choice C: keeps the original $+7$, forgetting to subtract the $4$ that was added.\n* Choice D: flips the sign inside; half of $+4$ is $+2$, so it must be $(x+2)$, not $(x-2)$.\n\n**Test Day Takeaway:** To complete the square for $x^2 + bx + c$, take half of $b$, square it, then add and subtract that value.",
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
  explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~15s):** Corresponding angles are equal: $3x + 10 = 5x - 30 \\Rightarrow 40 = 2x \\Rightarrow x = 20$.\n\n**The Full Solution:**\nStep 1: A transversal cutting two parallel lines makes corresponding angles equal, so $3x + 10 = 5x - 30$.\nStep 2: Collect terms: $10 + 30 = 5x - 3x$, giving $40 = 2x$.\nStep 3: So $x = 20$. Check: $3(20) + 10 = 70^\\circ$ and $5(20) - 30 = 70^\\circ$. $\\checkmark$\n\n**Common Mistakes:** Treating the angles as supplementary ($8x - 20 = 180$ gives $x = 25$); confusing corresponding angles with same-side interior angles.\n\n**Test Day Takeaway:** With parallel lines cut by a transversal, corresponding, alternate interior, and alternate exterior angles are EQUAL; same-side interior angles are SUPPLEMENTARY.",
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
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Point-slope: $y - 1 = \\frac{2}{3}(x - 6)$. At $x = 0$, $y - 1 = \\frac{2}{3}(-6) = -4$, so $y = -3$, giving $(0, -3)$.\n\n**The Full Solution:**\nStep 1: Start from $y - 1 = \\frac{2}{3}(x - 6)$ using slope $\\frac{2}{3}$ and the point $(6, 1)$.\nStep 2: Solve for $y$: $y = \\frac{2}{3}x - 4 + 1 = \\frac{2}{3}x - 3$.\nStep 3: The $y$-intercept is $-3$, so the line crosses the $y$-axis at $(0, -3)$. Check at $x = 6$: $\\frac{2}{3}(6) - 3 = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($(0,5)$): adds $4$ to $1$ instead of computing $-4 + 1$.\n* Choice C ($(0,-1)$): finds $\\frac{2}{3}(6) = 4$ but drops the original $+1$ adjustment.\n* Choice D ($(0,3)$): reverses the sign of the intercept $-3$.\n\n**Test Day Takeaway:** To find a $y$-intercept, set $x = 0$ in the line's equation and read off $y$.",
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
  explanation: "**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $g(7) = 2f(7-3) + 1 = 2f(4) + 1 = 2(10) + 1 = 21$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 7$ into $g(x) = 2f(x-3) + 1$, so the inner argument is $7 - 3 = 4$.\nStep 2: Use the given $f(4) = 10$: $g(7) = 2(10) + 1 = 21$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($23$): adds $3$ outside instead of $1$, mixing up the inner shift with the outer constant.\n* Choice C ($17$): subtracts $3$ outside ($2(10) - 3$) instead of adding $1$.\n* Choice D ($20$): computes $2(10)$ but forgets the $+1$.\n\n**Test Day Takeaway:** Evaluate composed functions inside-out: simplify the argument of $f$ first, then apply the outer multiply-and-add.",
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
  explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"Of pet owners\" sets the denominator to the pet-owner total $86$; $\\frac{32}{86} \\approx 0.372 \\approx 37\\%$.\n\n**The Full Solution:**\nStep 1: \"Of pet owners\" restricts to the Owns a Pet column, whose total is $86$.\nStep 2: Apartment pet owners number $32$, so the share is $\\frac{32}{86} \\times 100 \\approx 37.2\\%$, which rounds to $37\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($21\\%$): divides by the full surveyed total $150$ instead of the pet-owner total.\n* Choice C ($40\\%$): divides by the apartment row total $80$ ($\\frac{32}{80}$) rather than the pet-owner column.\n* Choice D ($63\\%$): uses house pet owners over pet owners ($\\frac{54}{86}$), the complement of the asked group.\n\n**Test Day Takeaway:** \"Of [group]\" makes that group's total the denominator. Pick the conditioning total before you divide.",
  skills: ["two-way-tables", "percents", "probability"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $\\dfrac{x-2}{3} + \\dfrac{x+4}{5} = 6$, what is the value of $x$?",
  correctAnswer: "11",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~20s):** Multiply through by $15$: $5(x-2) + 3(x+4) = 90 \\Rightarrow 8x + 2 = 90 \\Rightarrow x = 11$.\n\n**The Full Solution:**\nStep 1: Multiply every term by $15$, the LCM of $3$ and $5$: $5(x-2) + 3(x+4) = 90$.\nStep 2: Distribute: $5x - 10 + 3x + 12 = 90$, so $8x + 2 = 90$.\nStep 3: Then $8x = 88$ and $x = 11$. Check: $\\frac{11-2}{3} + \\frac{11+4}{5} = \\frac{9}{3} + \\frac{15}{5} = 3 + 3 = 6$. $\\checkmark$\n\n**Common Mistakes:** Forgetting to multiply the right side $6$ by $15$ (it must become $90$); or using a wrong common multiple instead of $15$.\n\n**Test Day Takeaway:** Clear fractions first by multiplying every term by the LCM of the denominators, then distribute carefully to avoid sign slips.",
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
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Spot the $8$-$15$-$17$ Pythagorean triple. With opposite $=8$ and hypotenuse $=17$, the adjacent leg is $15$, so $\\cos(\\theta)=\\dfrac{15}{17}$.\n\n**The Full Solution:**\nStep 1: $\\sin(\\theta)=\\dfrac{\\text{opposite}}{\\text{hypotenuse}}=\\dfrac{8}{17}$, so the opposite leg is $8$ and the hypotenuse is $17$.\nStep 2: Find the adjacent leg with the Pythagorean theorem: $\\text{adjacent}^2+8^2=17^2 \\Rightarrow \\text{adjacent}^2=289-64=225 \\Rightarrow \\text{adjacent}=15$.\nStep 3: $\\cos(\\theta)=\\dfrac{\\text{adjacent}}{\\text{hypotenuse}}=\\dfrac{15}{17}$. Check: $\\left(\\dfrac{8}{17}\\right)^2+\\left(\\dfrac{15}{17}\\right)^2=\\dfrac{64+225}{289}=1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{8}{17}$): just repeats $\\sin(\\theta)$ instead of computing $\\cos(\\theta)$.\n* Choice C ($\\frac{8}{15}$): that is $\\tan(\\theta)=\\dfrac{\\text{opposite}}{\\text{adjacent}}$, not cosine.\n* Choice D ($\\frac{9}{17}$): subtracts $8$ from $17$ to get $9$ instead of using the Pythagorean theorem.\n\n**Test Day Takeaway:** Memorize the common triples ($3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $9$-$40$-$41$). When $\\sin$ gives two sides of a triple, the third side is fixed.",
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
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Add the equations: $(2x-y)+(x+y)=3+9 \\Rightarrow 3x=12 \\Rightarrow x=4$. Then $4+y=9 \\Rightarrow y=5$, so $x+2y=4+10=14$.\n\n**The Full Solution:**\nStep 1: The $y$ terms are opposites, so adding eliminates $y$: $(2x-y)+(x+y)=3+9 \\Rightarrow 3x=12 \\Rightarrow x=4$.\nStep 2: Substitute into $x+y=9$: $4+y=9 \\Rightarrow y=5$.\nStep 3: Compute the target: $x+2y=4+2(5)=14$. Check: $2(4)-5=3$ and $4+5=9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($13$): an arithmetic slip on the substitution that lands one short of $14$.\n* Choice C ($15$): reads off the eliminated equation $3x=12$ and adds $y$ without finishing the substitution.\n* Choice D ($11$): computes $x+y+2=11$, doubling the wrong piece instead of $y$.\n\n**Test Day Takeaway:** When the coefficients of one variable are opposites, add the equations to eliminate it in one step — then watch what the question actually asks for.",
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
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The vertex of $p$ sits at $x=\\dfrac{-6}{2(-1)}=3$. Since $q(x)=p(x-2)$ shifts the graph right by $2$, the new max is at $x=3+2=5$.\n\n**The Full Solution:**\nStep 1: For $p(x)=-x^2+6x-5$, the vertex is at $x=-\\dfrac{b}{2a}=\\dfrac{6}{2}=3$, giving $p(x)=-(x-3)^2+4$.\nStep 2: Replace $x$ with $x-2$: $q(x)=p(x-2)=-((x-2)-3)^2+4=-(x-5)^2+4$.\nStep 3: The vertex of $q$ is at $x=5$, so profit is maximized at $5$ hundred units.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): the vertex of the original $p$, before the shift is applied.\n* Choice C ($1$): shifts left instead of right, reading $p(x-2)$ as moving the vertex to $3-2$.\n* Choice D ($8$): adds the loose numbers $2+6$ from the formula instead of shifting the vertex.\n\n**Test Day Takeaway:** $f(x-h)$ shifts the graph right by $h$, so the vertex's $x$-coordinate increases by $h$.",
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
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $\\sqrt[3]{x^2}=x^{\\frac{2}{3}}=4$. Since $\\dfrac{1}{3}=\\dfrac{1}{2}\\cdot\\dfrac{2}{3}$, $x^{\\frac{1}{3}}=\\left(x^{\\frac{2}{3}}\\right)^{\\frac{1}{2}}=4^{\\frac{1}{2}}=2$.\n\n**The Full Solution:**\nStep 1: Rewrite the radical as a fractional exponent: $\\sqrt[3]{x^2}=x^{\\frac{2}{3}}=4$.\nStep 2: Solve for $x$: raise both sides to the $\\dfrac{3}{2}$ power, $x=4^{\\frac{3}{2}}=8$.\nStep 3: Evaluate the target: $x^{\\frac{1}{3}}=8^{\\frac{1}{3}}=2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\sqrt{2}$): mishandles the fractional exponents and undershoots the cube root.\n* Choice C ($4$): assumes $x^{\\frac{1}{3}}$ equals the given $x^{\\frac{2}{3}}=4$.\n* Choice D ($2\\sqrt{2}$): computes $x^{\\frac{1}{2}}=8^{\\frac{1}{2}}=2\\sqrt{2}$ instead of $x^{\\frac{1}{3}}$.\n\n**Test Day Takeaway:** Turn radicals into fractional exponents, solve for the base, then evaluate the exponent the question actually asks for.",
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
  explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $f(0)=c=5$. Adding $f(1)+f(-1)=2a+2c=14 \\Rightarrow 2a+10=14 \\Rightarrow a=2$.\n\n**The Full Solution:**\nStep 1: $f(0)=c=5$.\nStep 2: $f(1)=a+b+c=2 \\Rightarrow a+b=-3$, and $f(-1)=a-b+c=12 \\Rightarrow a-b=7$.\nStep 3: Add the two: $2a=4 \\Rightarrow a=2$. (Then $b=-5$.) Check $f(x)=2x^2-5x+5$: $f(1)=2$ and $f(-1)=12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-1$): a sign error when combining the $f(1)$ and $f(-1)$ equations.\n* Choice C ($3$): stops at the symmetric-sum step without isolating $a$.\n* Choice D ($4$): forgets to divide $2a=4$ by $2$.\n\n**Test Day Takeaway:** For symmetric inputs, $f(1)+f(-1)=2a+2c$ cancels the linear term — combine that with $f(0)=c$ to pin down $a$ fast.",
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
  explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** A point is on the circle only if $(x-3)^2+(y+4)^2=25$. Test $(0,0)$: $(-3)^2+4^2=9+16=25$. $\\checkmark$\n\n**The Full Solution:**\nStep 1: The equation is in standard form with center $(3,-4)$ and radius $5$, so a point lies on the circle exactly when $(x-3)^2+(y+4)^2=25$.\nStep 2: Plug in each candidate:\nA: $(3-3)^2+(2+4)^2=0+36=36\\neq25$.\nB: $(6-3)^2+(1+4)^2=9+25=34\\neq25$.\nC: $(0-3)^2+(0+4)^2=9+16=25$. $\\checkmark$\nD: $(7-3)^2+(-2+4)^2=16+4=20\\neq25$.\nStep 3: Only $(0,0)$ satisfies the equation.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(3,2)$): borrows the center's $x$-coordinate but lands $36$, off the circle.\n* Choice B ($(6,1)$): gives $34$, a near-miss that looks close to $25$.\n* Choice D ($(7,-2)$): gives $20$, close but not equal to $25$.\n\n**Test Day Takeaway:** A point lies on a circle iff its squared distance to the center equals $r^2$ — plug into $(x-h)^2+(y-k)^2$ and check.",
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
  explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**The correct answer is $90$.**\n\n**The Fast Way (~30s):** With hypotenuse $41$, recognize the $9$-$40$-$41$ triple. So $a=9$ and $a+31=40$, giving perimeter $9+40+41=90$.\n\n**The Full Solution:**\nStep 1: Apply the Pythagorean theorem to legs $a$ and $a+31$ with hypotenuse $41$: $a^2+(a+31)^2=41^2$.\nStep 2: Expand: $2a^2+62a+961=1681 \\Rightarrow a^2+31a-360=0 \\Rightarrow (a+40)(a-9)=0$.\nStep 3: Take the positive root $a=9$, so the legs are $9$ and $40$. Perimeter $=9+40+41=90$. Check: $9^2+40^2=81+1600=1681=41^2$. $\\checkmark$\n\n**Common Mistakes:** Adding only the two legs ($9+40=49$) and forgetting the hypotenuse; taking the negative root $a=-40$ instead of $a=9$.\n\n**Test Day Takeaway:** Know your triples — when the hypotenuse is $41$, the legs are $9$ and $40$. The perimeter still needs all three sides.",
  skills: ["triangles", "right-triangles", "area"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the equation $3x^2 - 18x + c = 0$, where $c$ is a constant, the equation has exactly one real solution. What is the value of $c$?",
  correctAnswer: "27",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**The correct answer is $27$.**\n\n**The Fast Way (~15s):** One real solution means the discriminant is $0$: $(-18)^2-4(3)c=0 \\Rightarrow 324=12c \\Rightarrow c=27$.\n\n**The Full Solution:**\nStep 1: For exactly one real solution, set the discriminant $b^2-4ac=0$ with $a=3$, $b=-18$.\nStep 2: $(-18)^2-4(3)c=0 \\Rightarrow 324-12c=0 \\Rightarrow 12c=324 \\Rightarrow c=27$.\nStep 3: Check: $3x^2-18x+27=3(x^2-6x+9)=3(x-3)^2=0$, one repeated root at $x=3$. $\\checkmark$\n\n**Common Mistakes:** Dropping the leading coefficient and solving $324-4c=0$ to get $c=81$; squaring $-18$ as $-324$ and concluding no positive $c$ works.\n\n**Test Day Takeaway:** Exactly one real solution $\\iff$ discriminant $=0$. The unknown can sit in any slot of $b^2-4ac$ — plug in what you know and solve for the rest.",
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
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $g(x)=f(x+1)$ only slides $f$ horizontally, so the minimum value is unchanged. The min of $f$ is at $x=\\dfrac{8}{4}=2$, where $f(2)=8-16+3=-5$.\n\n**The Full Solution:**\nStep 1: Complete the square on $f$: $f(x)=2(x^2-4x)+3=2(x-2)^2-5$, so its minimum value is $-5$.\nStep 2: $g(x)=f(x+1)=2((x+1)-2)^2-5=2(x-1)^2-5$.\nStep 3: The vertex moved from $x=2$ to $x=1$, but the minimum value is still $-5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): subtracts the shift amount from the minimum, but a horizontal shift never changes the value.\n* Choice C ($-3$): evaluates $f(1)=2-8+3=-3$ instead of finding the true minimum.\n* Choice D ($-9$): a slip while completing the square.\n\n**Test Day Takeaway:** $f(x+h)$ shifts the graph left or right but does not change its minimum or maximum value.",
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
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Set the curves equal: $3x+2=kx^2+5x+5 \\Rightarrow kx^2+2x+3=0$. One solution means discriminant $=0$: $2^2-4(k)(3)=0 \\Rightarrow 4-12k=0 \\Rightarrow k=\\dfrac{1}{3}$.\n\n**The Full Solution:**\nStep 1: Substitute to one equation: $kx^2+5x+5=3x+2$, so $kx^2+2x+3=0$.\nStep 2: Exactly one intersection means the discriminant is $0$: $2^2-4(k)(3)=4-12k=0$.\nStep 3: Solve: $12k=4 \\Rightarrow k=\\dfrac{1}{3}$. Check: $\\dfrac{1}{3}x^2+2x+3=0 \\Rightarrow (x+3)^2=0$, one solution at $(-3,-7)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{4}$): an arithmetic error in the discriminant calculation.\n* Choice B ($\\frac{4}{3}$): inverts the fraction $\\dfrac{1}{3}$.\n* Choice C ($-\\frac{1}{3}$): a sign error when combining $5x-3x=2x$.\n\n**Test Day Takeaway:** A line is tangent to a parabola when they meet exactly once — set them equal, collect to one side, and force the discriminant to $0$.",
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
// Pool infusions: Q4 fractional-substitution system (~E#5), Q19 cubic table
// after a vertical shift (~D-p9#22).
// IP-distance reskins (2026-06, audit T8): Q14 squared-unit rate now cm/s^2 ->
// m/min^2 (conveyor; was m/s^2 -> mi/min^2, off D-p40#26); Q17 45-45-90 now
// area-given -> hypotenuse 6*sqrt10 (breaks the P+P*sqrt2 perimeter signature
// off D-p15#25); Q21 area-ratio reskinned to paint-through-two-stencils with a
// 5:1 side ratio -> 25/26 share (was electric-flux 4:1 off E#21==D-p30#27).

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
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $V(m)=180-7m$, the coefficient of $m$ is the rate of change. The volume drops by $7$ liters each minute.\n\n**The Full Solution:**\nStep 1: The function has the form $V(m)=b+km$ with $b=180$ (initial volume) and $k=-7$ (rate).\nStep 2: The magnitude $7$ means each extra minute of boiling removes $7$ liters. Check: $V(0)=180$ and $V(1)=173$, exactly $7$ liters less. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: confuses the rate $7$ with the initial volume, which is $180$.\n* Choice C: treats $7$ as the input $m=7$ rather than the per-minute rate.\n* Choice D: inverts the rate, describing $\\dfrac{1}{7}$ minute per liter.\n\n**Test Day Takeaway:** In $y=b+kx$, the coefficient of the variable is always the rate of change per unit — the constant term is the starting value.",
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
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $45\\%$ of the total is $108$, so total $=\\dfrac{108}{0.45}=240$.\n\n**The Full Solution:**\nStep 1: Let $T$ be the total number of looms. The wide-fabric looms are $45\\%$ of the total: $0.45\\cdot T=108$.\nStep 2: Divide by $0.45$: $T=\\dfrac{108}{0.45}=240$. Check: $0.45\\cdot240=108$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($49$): multiplies $108\\cdot0.45$ instead of dividing.\n* Choice B ($196$): divides by the complement $0.55$, as if $108$ were the non-wide count.\n* Choice D ($2{,}400$): divides by $0.045$, a decimal-place slip.\n\n**Test Day Takeaway:** When you know the part and its percent of an unknown whole, divide the part by the percent written as a decimal.",
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
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** In $\\hat{y} = mx + b$, the slope $m$ is the predicted change in $y$ for each one-unit increase in $x$. Here $x$ is temperature and $y$ is burst altitude, so $0.6$ is the altitude gain per extra degree.\n\n**The Full Solution:**\nStep 1: The model is $\\hat{y} = 0.6x + 29$, with $x =$ surface temperature in $^\\circ$C and $y =$ burst altitude in km.\nStep 2: Slope is rise over run, $\\frac{\\Delta \\hat{y}}{\\Delta x}$. When $x$ goes up by $1$ degree, $\\hat{y}$ goes up by $0.6$ km. That is exactly choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A: describes the intercept $29$ (the predicted altitude at $x = 0$), not the slope.\n* Choice C: treats $0.6$ as a fraction of the $20$ balloons; slope is a rate, not a count or proportion.\n* Choice D: confuses the slope with an overall average altitude, which the model does not give.\n\n**Test Day Takeaway:** In $\\hat{y} = mx + b$, the slope $m$ is the predicted change in $y$ per one-unit increase in $x$; the intercept $b$ is the predicted $y$ when $x = 0$.",
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
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Solve $7x = 3y$ for $y = \\frac{7x}{3}$, drop it into $y - 4x = 5$, clear the denominator: $7x - 12x = 15 \\Rightarrow x = -3$, then $y = -7$. The solution is $(-3, -7)$.\n\n**The Full Solution:**\nStep 1: From $7x = 3y$, isolate $y$: $y = \\frac{7x}{3}$.\nStep 2: Substitute into $y - 4x = 5$: $\\frac{7x}{3} - 4x = 5$.\nStep 3: Multiply through by $3$: $7x - 12x = 15$, so $-5x = 15$ and $x = -3$.\nStep 4: Back-substitute: $y = \\frac{7(-3)}{3} = -7$. The point is $(-3, -7)$.\nCheck: $-7 - 4(-3) = -7 + 12 = 5$ $\\checkmark$ and $7(-3) = -21 = 3(-7)$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-7, -3)$): the right numbers, but the coordinates are swapped — answer must be $(x, y)$.\n* Choice B ($(3, 7)$): a sign slip on $-5x = 15$ flips both values positive.\n* Choice D ($(15, 35)$): a multiple of $7x = 3y$ that never gets checked against $y - 4x = 5$.\n\n**Test Day Takeaway:** When one equation gives a clean $y$ in terms of $x$, substitute and clear the denominator immediately — then confirm the point satisfies BOTH equations before reading off $(x, y)$ in order.",
  skills: ["systems-of-equations", "substitution"]
},
{
  id: 5,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A loom shop ran two batches of fabric. In the morning batch, $4\\%$ of the bolts had a flaw; in the afternoon batch, $6\\%$ of the bolts had a flaw. The morning batch contained $450$ bolts and the afternoon batch contained $300$ bolts. What percent of all the bolts produced that day had a flaw? Round to the nearest tenth.",
  correctAnswer: "4.8",
  explanation: "**SAT Pattern: Percent of a Whole**\n\n**The correct answer is $4.8$.**\n\n**The Fast Way (~20s):** Count flawed bolts, not percents: $0.04(450) + 0.06(300) = 18 + 18 = 36$ out of $750$ total. $\\frac{36}{750} = 0.048 = 4.8\\%$.\n\n**The Full Solution:**\nStep 1: Morning flawed: $4\\%$ of $450 = 18$ bolts.\nStep 2: Afternoon flawed: $6\\%$ of $300 = 18$ bolts.\nStep 3: Total flawed $= 18 + 18 = 36$; total bolts $= 450 + 300 = 750$.\nStep 4: Flaw rate $= \\frac{36}{750} = 0.048 = 4.8\\%$.\n\n**Common Mistakes:** Averaging the two rates as $\\frac{4 + 6}{2} = 5$ ignores the unequal batch sizes; using only one batch's data lands well off $4.8$.\n\n**Test Day Takeaway:** Never average percentages when the groups differ in size. Convert each percent to a raw count, then divide total favorable by total count.",
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
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Complete the square both ways: $(x - 5)^2 + (y + 12)^2 = 25 + 144 = 169$, so $r = \\sqrt{169} = 13$.\n\n**The Full Solution:**\nStep 1: Group: $x^2 - 10x + y^2 + 24y = 0$.\nStep 2: For $x$, half of $-10$ is $-5$, squared is $25$. For $y$, half of $24$ is $12$, squared is $144$.\nStep 3: Add $25$ and $144$ to both sides: $(x - 5)^2 + (y + 12)^2 = 169$.\nStep 4: This is center $(5, -12)$, radius $r = \\sqrt{169} = 13$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($169$): that is $r^2$, not the radius — take the square root.\n* Choice C ($5$): completes the square only on $x$ and reports $\\sqrt{25}$.\n* Choice D ($\\sqrt{14}$): adds the bare coefficients $-10 + 24 = 14$ instead of completing the square.\n\n**Test Day Takeaway:** To get the radius from general form, complete the square for BOTH variables, then take the square root of the right-hand constant — $r^2$ is not $r$.",
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
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Rewrite as fractional exponents: $\\sqrt[4]{x^5} = x^{\\frac{5}{4}}$ and $\\sqrt{x^3} = x^{\\frac{3}{2}}$. Add: $\\frac{5}{4} + \\frac{6}{4} = \\frac{11}{4}$. So $p + q = 11 + 4 = 15$.\n\n**The Full Solution:**\nStep 1: Convert each radical: $\\sqrt[4]{x^5} = x^{\\frac{5}{4}}$ and $\\sqrt{x^3} = x^{\\frac{3}{2}}$.\nStep 2: Multiplying same bases adds exponents: $x^{\\frac{5}{4}} \\cdot x^{\\frac{3}{2}} = x^{\\frac{5}{4} + \\frac{6}{4}} = x^{\\frac{11}{4}}$.\nStep 3: $\\gcd(11, 4) = 1$, so $\\frac{11}{4}$ is in lowest terms. Then $p = 11$, $q = 4$, and $p + q = 15$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($11$): stops at the numerator $p$ and forgets to add $q = 4$.\n* Choice B ($8$): adds the radicands' exponents $5 + 3$ instead of converting to fractional powers.\n* Choice D ($12$): sums all the integers in the expression, $5 + 4 + 3$, with no exponent rule.\n\n**Test Day Takeaway:** $\\sqrt[n]{x^m} = x^{\\frac{m}{n}}$. Convert every radical to a fractional exponent, add exponents for same-base products, then report $p + q$ once the fraction is reduced.",
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
  explanation: "**SAT Pattern: Composite Solid Surface Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Add the two crate surface areas, then remove the shared face from each: SA$(A) = 254$, SA$(B) = 188$, sum $= 442$. The $4 \\times 7 = 28$ face is hidden on both, so subtract $2 \\times 28 = 56$: $442 - 56 = 386$.\n\n**The Full Solution:**\nStep 1: Crate A ($4 \\times 7 \\times 9$): $2(4 \\cdot 7 + 4 \\cdot 9 + 7 \\cdot 9) = 2(28 + 36 + 63) = 254$ ft$^2$.\nStep 2: Crate B ($4 \\times 7 \\times 6$): $2(4 \\cdot 7 + 4 \\cdot 6 + 7 \\cdot 6) = 2(28 + 24 + 42) = 188$ ft$^2$.\nStep 3: Before bolting, total $= 254 + 188 = 442$ ft$^2$.\nStep 4: The shared $4 \\times 7 = 28$ ft$^2$ face vanishes from BOTH crates, so subtract $2 \\times 28 = 56$: $442 - 56 = 386$ ft$^2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($414$): subtracts only one copy of the shared face ($442 - 28$) instead of two.\n* Choice C ($370$): uses the wrong contact face, subtracting $2 \\times 36$ from a miscount.\n* Choice D ($442$): forgets the join entirely and reports the raw sum.\n\n**Test Day Takeaway:** When two solids are glued along a face, that face disappears from both. Subtract twice the contact area from the sum of the separate surface areas.",
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
  explanation: "**SAT Pattern: Angles with Parallel Lines and Transversals**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Alternate interior angles between parallel lines are equal: $7y - 10 = 3y + 50 \\Rightarrow 4y = 60 \\Rightarrow y = 15$.\n\n**The Full Solution:**\nStep 1: A transversal cutting parallel lines makes alternate interior angles equal, so set the expressions equal: $7y - 10 = 3y + 50$.\nStep 2: Subtract $3y$ and add $10$: $4y = 60$.\nStep 3: Divide by $4$: $y = 15$.\nCheck: both angles measure $7(15) - 10 = 95^\\circ$ and $3(15) + 50 = 95^\\circ$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{60}{7}$): solves $7y = 60$, dropping the $-10$.\n* Choice C ($14$): treats the angles as supplementary ($10y = 140$) instead of equal.\n* Choice D ($10$): a sign slip on the $-10$ gives $4y = 40$.\n\n**Test Day Takeaway:** With parallel lines, alternate interior, corresponding, and alternate exterior angles are EQUAL; same-side interior angles are SUPPLEMENTARY. Match the relationship to the position before you write the equation.",
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
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The right angle is at $T$, so $RS = 65$ is the hypotenuse and $ST = 16$, $RT = 63$ are the legs ($16$-$63$-$65$ triple). For angle $R$, the adjacent leg is $RT = 63$, so $\\cos(R) = \\frac{63}{65}$.\n\n**The Full Solution:**\nStep 1: With the right angle at $T$, $RS$ is the hypotenuse. Find $RT$ from $RT^2 + ST^2 = RS^2$: $RT^2 = 65^2 - 16^2 = 4225 - 256 = 3969$, so $RT = 63$.\nStep 2: For angle $R$, $RT$ is the adjacent leg and $RS$ is the hypotenuse.\nStep 3: $\\cos(R) = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{RT}{RS} = \\frac{63}{65}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{16}{65}$): uses $ST$, the leg opposite $R$ — that is $\\sin(R)$, not $\\cos(R)$.\n* Choice C ($\\frac{16}{63}$): $\\frac{\\text{opposite}}{\\text{adjacent}} = \\tan(R)$.\n* Choice D ($\\frac{63}{16}$): the reciprocal of $\\tan(R)$, which is $\\cot(R)$.\n\n**Test Day Takeaway:** Identify the hypotenuse first (opposite the right angle), then label adjacent and opposite relative to the named angle. Cosine uses adjacent over hypotenuse.",
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
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Factor all four quadratics; every factor in the numerator has a twin in the denominator, so the product collapses to $1$.\n\n**The Full Solution:**\nStep 1: Factor each piece:\n* $x^2 - 16 = (x - 4)(x + 4)$\n* $x^2 + 7x + 12 = (x + 3)(x + 4)$\n* $x^2 + 6x + 9 = (x + 3)^2$\n* $x^2 - x - 12 = (x - 4)(x + 3)$\nStep 2: Substitute: $\\frac{(x - 4)(x + 4)}{(x + 3)(x + 4)} \\cdot \\frac{(x + 3)^2}{(x - 4)(x + 3)}$.\nStep 3: The numerator has $(x - 4)(x + 4)(x + 3)^2$ and the denominator has $(x + 3)(x + 4)(x - 4)(x + 3)$ — identical sets of factors — so the result is $1$ (for $x \\neq 4, -4, -3$).\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{x + 3}{x + 3}$): equals $1$ but is left unsimplified; the SAT wants the fully reduced form.\n* Choice B: incomplete cancellation leaves stray factors instead of finishing the reduction.\n* Choice D ($\\frac{x + 3}{x - 4}$): cancels mismatched factors, dropping one $(x + 3)$ too many or too few.\n\n**Test Day Takeaway:** Factor every quadratic first, then cancel across the whole product. If every factor pairs off, the answer is simply $1$.",
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
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Let $f$ = full-day, $a$ = afternoon. From $f + a = 250$ and $12f + 8a = 2680$, substitute $a = 250 - f$: $12f + 8(250 - f) = 2680 \\Rightarrow 4f = 680 \\Rightarrow f = 170$.\n\n**The Full Solution:**\nStep 1: Define $f$ = full-day passes, $a$ = afternoon passes. Count: $f + a = 250$. Value: $12f + 8a = 2680$.\nStep 2: From the count equation, $a = 250 - f$.\nStep 3: Substitute: $12f + 8(250 - f) = 2680 \\Rightarrow 12f + 2000 - 8f = 2680 \\Rightarrow 4f = 680$.\nStep 4: $f = 170$ full-day passes (and $a = 80$).\nCheck: $170 + 80 = 250$ $\\checkmark$; $12(170) + 8(80) = 2040 + 640 = 2680$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($80$): the afternoon-pass count, not the full-day count the question asks for.\n* Choice B ($120$): comes from dividing $2680$ by an average price guess rather than solving the system.\n* Choice D ($250$): the total passes sold, not just the full-day subset.\n\n**Test Day Takeaway:** Two-item word problems give one count equation and one dollar equation. Define both variables, solve, then re-read to report the exact quantity requested.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The equation $2x^2 - 14x + 20 = 0$ has two solutions, $r$ and $s$. What is the value of $r + s$?",
  correctAnswer: "7",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~15s):** For $ax^2 + bx + c = 0$, the sum of the roots is $-\\frac{b}{a} = -\\frac{-14}{2} = 7$. No factoring needed.\n\n**The Full Solution:**\nStep 1: Identify $a = 2$, $b = -14$, $c = 20$.\nStep 2: Vieta's sum of roots is $r + s = -\\frac{b}{a} = -\\frac{-14}{2} = 7$.\nCheck: $2x^2 - 14x + 20 = 2(x - 2)(x - 5)$, so the roots are $2$ and $5$, and $2 + 5 = 7$ $\\checkmark$.\n\n**Common Mistakes:** Using $-b = 14$ without dividing by $a = 2$; reporting the product $\\frac{c}{a} = 10$ instead of the sum.\n\n**Test Day Takeaway:** The sum of the roots is $-\\frac{b}{a}$ and the product is $\\frac{c}{a}$ — read them straight off the coefficients without ever factoring.",
  skills: ["quadratic-equations", "factoring"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A conveyor belt is accelerating at $12.7$ centimeters per second squared. Expressed in meters per minute squared and rounded to the nearest tenth, what is this acceleration? (Use $1$ meter $= 100$ centimeters.)",
  choices: [
    // distractor: applies the seconds-to-minutes factor only once (× 60) instead of squaring it
    { id: "A", text: "$7.6$" },
    { id: "B", text: "$457.2$" },
    // distractor: inverts both conversions (× 100 and ÷ 3600)
    { id: "C", text: "$0.4$" },
    // distractor: multiplies by 100 and divides by 60 (length wrong direction, time once)
    { id: "D", text: "$21.2$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Unit Conversion — Squared Units**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Length: divide by $100$ (cm to m). Time: the seconds-to-minutes factor of $60$ applies TWICE because time is squared, so multiply by $60^2 = 3{,}600$. Result: $\\frac{12.7 \\times 3{,}600}{100} = 457.2$.\n\n**The Full Solution:**\nStep 1: Start with $12.7 \\frac{\\text{cm}}{\\text{s}^2}$.\nStep 2: Convert cm to m by dividing by $100$.\nStep 3: Convert per second-squared to per minute-squared. Since $1$ min $= 60$ s, $\\frac{1}{\\text{s}^2}$ becomes $60^2 = 3{,}600$ times $\\frac{1}{\\text{min}^2}$.\nStep 4: $\\frac{12.7 \\times 3{,}600}{100} = \\frac{45{,}720}{100} = 457.2 \\frac{\\text{m}}{\\text{min}^2}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($7.6$): applies the time factor of $60$ only once instead of $60^2$.\n* Choice C ($0.4$): inverts both conversions, multiplying by $100$ and dividing by $3{,}600$.\n* Choice D ($21.2$): multiplies the length by $100$ the wrong way and uses the time factor only once.\n\n**Test Day Takeaway:** When a unit is SQUARED, every conversion factor for that unit is applied TWICE. Here the length factor is used once; the time factor, being squared, is used twice.",
  skills: ["unit-conversion", "rates"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The graph of $y = 3x^2 + bx + c$ in the $xy$-plane has its vertex at $(-2, -10)$, where $b$ and $c$ are constants. What is the value of $bc$?",
  correctAnswer: "24",
  explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**The correct answer is $24$.**\n\n**The Fast Way (~30s):** Write vertex form with $a=3$: $y = 3(x+2)^2 - 10$. Expand to $3x^2 + 12x + 2$, so $b=12$, $c=2$, and $bc = 12 \\times 2 = 24$.\n\n**The Full Solution:**\nStep 1: The vertex is $(-2, -10)$ and the leading coefficient is $3$, so the vertex form is $y = 3(x-(-2))^2 + (-10) = 3(x+2)^2 - 10$.\nStep 2: Expand: $3(x^2 + 4x + 4) - 10 = 3x^2 + 12x + 12 - 10 = 3x^2 + 12x + 2$.\nStep 3: Match to $y = 3x^2 + bx + c$: $b = 12$ and $c = 2$, so $bc = 12 \\times 2 = 24$.\n\nVerification: the vertex of $y = 3x^2 + 12x + 2$ sits at $x = -\\frac{12}{2 \\cdot 3} = -2$, and $y(-2) = 12 - 24 + 2 = -10$. $\\checkmark$\n\n**Common Mistakes:** Forgetting to distribute the leading $3$ across the squared binomial; reporting the sum $b + c = 14$ instead of the product $bc = 24$.\n\n**Test Day Takeaway:** Start from vertex form $a(x-h)^2 + k$, distribute the $a$ fully, then read $b$ and $c$ straight off the expanded standard form.",
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
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $g(-4) = f(-4+4) - 5 = f(0) - 5 = 0 - 5 = -5$.\n\n**The Full Solution:**\nStep 1: Substitute $x = -4$ into $g(x) = f(x+4) - 5$: $g(-4) = f(-4+4) - 5 = f(0) - 5$.\nStep 2: Since $f(x) = x^2$, $f(0) = 0^2 = 0$.\nStep 3: So $g(-4) = 0 - 5 = -5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($59$): shifts the input the wrong way, evaluating $f(-8) - 5 = 64 - 5$.\n* Choice B ($11$): ignores the inside shift and computes $f(-4) - 5 = 16 - 5$.\n* Choice D ($5$): flips the sign of the outside shift, getting $f(0) + 5$.\n\n**Test Day Takeaway:** Evaluate composed transformations from the inside out: resolve the input shift first, then apply the outside shift.",
  skills: ["function-transformation", "function-evaluation"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A right-angle bracing gusset is cut as an isosceles right triangle with an area of $90$ square centimeters. What is the length, in centimeters, of the hypotenuse?",
  choices: [
    // distractor: forgets the 1/2 in the area formula (uses Area = L^2), so L = sqrt(90) = 3*sqrt(10)
    { id: "A", text: "$3\\sqrt{10}$" },
    // distractor: solves for the leg correctly but reports it instead of the hypotenuse
    { id: "B", text: "$6\\sqrt{5}$" },
    { id: "C", text: "$6\\sqrt{10}$" },
    // distractor: multiplies the leg by 2 instead of by sqrt(2) to get the hypotenuse
    { id: "D", text: "$12\\sqrt{5}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Special Right Triangle — 45-45-90**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** In an isosceles right triangle the two equal legs are the base and height, so area $= \\frac{1}{2}L^2 = 90 \\Rightarrow L^2 = 180 \\Rightarrow L = 6\\sqrt{5}$. The hypotenuse is $L\\sqrt{2} = 6\\sqrt{5} \\cdot \\sqrt{2} = 6\\sqrt{10}$.\n\n**The Full Solution:**\nStep 1: A 45-45-90 triangle has two equal legs $L$ meeting at the right angle, so area $= \\frac{1}{2}L \\cdot L = \\frac{1}{2}L^2$.\nStep 2: Set equal to $90$: $\\frac{1}{2}L^2 = 90 \\Rightarrow L^2 = 180 \\Rightarrow L = \\sqrt{180} = 6\\sqrt{5}$.\nStep 3: The hypotenuse is $L\\sqrt{2} = 6\\sqrt{5} \\cdot \\sqrt{2} = 6\\sqrt{10}$.\n\nVerification: $(6\\sqrt{10})^2 = 360$, and $L^2 + L^2 = 180 + 180 = 360$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3\\sqrt{10}$): drops the $\\frac{1}{2}$ and solves $L^2 = 90$, then reports that leg.\n* Choice B ($6\\sqrt{5}$): finds the leg correctly but never multiplies by $\\sqrt{2}$ for the hypotenuse.\n* Choice D ($12\\sqrt{5}$): multiplies the leg by $2$ instead of $\\sqrt{2}$.\n\n**Test Day Takeaway:** For a 45-45-90 triangle the legs are the base and height, so area $= \\frac{1}{2}L^2$. Solve for the leg first, then scale it by $\\sqrt{2}$ to get the hypotenuse.",
  skills: ["triangles", "right-triangles", "special-right-triangles"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "easy",
  band: 3,
  question: "For the function $f$, $f(x) = 6x - 5$. What is the value of $f(4)$?",
  correctAnswer: "19",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $19$.**\n\n**The Fast Way (~10s):** Substitute $x = 4$: $f(4) = 6(4) - 5 = 24 - 5 = 19$.\n\n**The Full Solution:**\nStep 1: Replace every $x$ in $f(x) = 6x - 5$ with $4$: $f(4) = 6(4) - 5$.\nStep 2: Multiply first, then subtract: $24 - 5 = 19$.\n\n**Common Mistakes:** Subtracting before multiplying, $6(4-5) = -6$, which ignores order of operations; dropping the $-5$ and reporting $24$.\n\n**Test Day Takeaway:** To evaluate a function, substitute the input for every $x$ and follow order of operations: multiply before you subtract.",
  skills: ["function-evaluation", "linear-functions"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$$f(x) = (x + 8)(x + 3)(x - 7)$$\nConsider the function $g(x) = f(x) - 4$. What are the values of $g(x)$ at $x = -8$, $x = -3$, and $x = 7$?",
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
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The inputs $-8$, $-3$, and $7$ are exactly the zeros of $f$, so $f = 0$ at each. Then $g = f - 4 = 0 - 4 = -4$ at all three.\n\n**The Full Solution:**\nStep 1: $f(x) = (x+8)(x+3)(x-7)$ equals $0$ wherever a factor is $0$, namely $x = -8$, $x = -3$, and $x = 7$.\nStep 2: $g(x) = f(x) - 4$ shifts every output down by $4$.\nStep 3: $g(-8) = 0 - 4 = -4$, $g(-3) = 0 - 4 = -4$, $g(7) = 0 - 4 = -4$.\n\n**Why the wrong answers are tempting:**\n* Choice B: finds $f = 0$ at the zeros but forgets to apply the $-4$ shift.\n* Choice C: shifts up by $4$ instead of down.\n* Choice D: copies the input $x$-values as if they were the outputs.\n\n**Test Day Takeaway:** When the given inputs are the zeros of a factored polynomial, $f$ is $0$ there, so a vertical shift $f(x) + k$ makes every one of those outputs equal $k$.",
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
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Set the curves equal: $x^2 + 2x + 11 = 6x + k \\Rightarrow x^2 - 4x + (11-k) = 0$. Tangency means one solution, so the discriminant is $0$: $(-4)^2 - 4(11-k) = 0 \\Rightarrow 16 - 44 + 4k = 0 \\Rightarrow k = 7$.\n\n**The Full Solution:**\nStep 1: A line is tangent to a parabola when they meet at exactly one point. Set them equal: $x^2 + 2x + 11 = 6x + k$, which rearranges to $x^2 - 4x + (11-k) = 0$.\nStep 2: One solution means the discriminant is zero: $b^2 - 4ac = (-4)^2 - 4(1)(11-k) = 16 - 44 + 4k = 0$.\nStep 3: Solve: $4k = 28$, so $k = 7$.\n\nVerification: with $k = 7$, $x^2 - 4x + 4 = (x-2)^2 = 0$, a single root at $x = 2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): a sign slip when solving $4k = 28$.\n* Choice B ($4$): reports the magnitude of the linear coefficient from the merged equation.\n* Choice D ($11$): reports the parabola's constant term instead of solving for $k$.\n\n**Test Day Takeaway:** Tangent $\\Rightarrow$ exactly one intersection $\\Rightarrow$ set the discriminant of the combined equation to zero.",
  skills: ["quadratic-equations", "discriminant", "tangent-lines"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A spray painter coats a wall through a stencil cut as two side-by-side square openings, where the amount of paint deposited on an opening equals the coverage rate multiplied by that opening's area. The side length of the larger square opening is $5$ times the side length of the smaller one. Applying paint at a uniform coverage rate of $0.85$ milliliters per square centimeter deposits a total of $5{,}200$ milliliters across both openings. How many milliliters of paint are deposited through just the larger opening?",
  correctAnswer: "5000",
  explanation: "**SAT Pattern: Area Ratio to Side Ratio in Similar Figures**\n\n**The correct answer is $5000$.**\n\n**The Fast Way (~40s):** Paint deposited is proportional to area. The larger side is $5\\times$ the smaller, so its area is $5^2 = 25\\times$ as large, and the two openings split the total in a $25:1$ ratio. The larger opening gets $\\frac{25}{26}$ of $5{,}200 = 5{,}000$ milliliters. The coverage rate $0.85$ is not needed.\n\n**The Full Solution:**\nStep 1: Let the smaller square have side $s$ and the larger have side $5s$. Areas: $s^2$ and $(5s)^2 = 25s^2$.\nStep 2: The same coverage rate applies to both, so paint is proportional to area, putting the amounts in the ratio $25:1$ over $25 + 1 = 26$ total parts.\nStep 3: Paint through the larger opening $= \\frac{25}{26} \\times 5{,}200 = \\frac{130{,}000}{26} = 5{,}000$ milliliters.\n\nVerification: the smaller opening gets $\\frac{1}{26} \\times 5{,}200 = 200$, and $5{,}000 + 200 = 5{,}200$. $\\checkmark$\n\n**Common Mistakes:** Splitting in the side ratio $5:1$ (about $4{,}333$) instead of the area ratio $25:1$; trying to use the coverage rate $0.85$, which applies equally to both openings and cancels out.\n\n**Test Day Takeaway:** When a quantity scales with area, square the side-length ratio before splitting a total. A rate that applies equally to both parts is usually a distractor.",
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
  explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** $a + b + c = f(1)$. Vertex form $f(x) = a(x-4)^2 - 7$ with $f(2) = 5$ gives $4a - 7 = 5$, so $a = 3$. Then $f(1) = 3(1-4)^2 - 7 = 27 - 7 = 20$.\n\n**The Full Solution:**\nStep 1: Write vertex form: $f(x) = a(x-4)^2 - 7$.\nStep 2: Use the point $(2, 5)$: $5 = a(2-4)^2 - 7 = 4a - 7$, so $4a = 12$ and $a = 3$.\nStep 3: Either expand $f(x) = 3(x-4)^2 - 7 = 3x^2 - 24x + 41$ to read $a = 3$, $b = -24$, $c = 41$ for $a + b + c = 20$, or use the shortcut $a + b + c = f(1) = 3(1-4)^2 - 7 = 27 - 7 = 20$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($41$): reports the constant term $c$ alone.\n* Choice B ($3$): reports the leading coefficient $a$ alone.\n* Choice D ($-3$): confuses $h + k = 4 + (-7)$ from vertex form with $a + b + c$ from standard form.\n\n**Test Day Takeaway:** $a + b + c = f(1)$. Build $f$ from vertex form, plug in the second point to solve for $a$, then evaluate at $x = 1$.",
  skills: ["vertex-form", "function-interpretation", "quadratic-equations"]
}
      ]
    }
  ]
};

export default practiceTest8;
