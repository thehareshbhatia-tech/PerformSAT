// Practice Test 10 - SAT Math
// 2 Modules, 22 questions each (44 total)
// M1: targeted de-cloning (Q7 algae-tripling refresh, Q10 cylinder carrier
// refresh, easy-block reorder so Q1-5 differs from the canonical sequence).
// M2 (2026-06 flow diversification): wavy difficulty flow — easy at 1,4,20;
// medium at 2,3,6,7,12,15,16; hard at 5,8,9,10,11,13,14,17,18,19,21,22.
// Five transformed pool items infused (Q5 parabola a+b+c, Q6 system
// elimination, Q8 zero-to-parameter, Q9 rational-function shift, Q13 parabola
// bc from graph). All bands integer 1-7; registered pattern names only.

export const practiceTest10 = {
  id: "practice-test-10",
  title: "Practice Test 10",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
// Practice Test 10 — Math Module 1
// 22 questions: Easy (1-5), Medium (6-14), Hard (15-22)

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A taxi service charges a flat pickup fee of $\\$4.50$ plus $\\$2.75$ per mile. The total cost for a ride of $m$ miles is $\\$26.75$. What would be the total cost, in dollars, of a ride that is $4$ miles longer (with one pickup fee)?",
  choices: [
    // distractor: stops one step early — adds $4 directly instead of $4 \\cdot 2.75 = $11
    { id: "A", text: "$\\$30.75$" },
    { id: "B", text: "$\\$37.75$" },
    // distractor: applies inverse op — uses the flat fee as the per-mile rate (${}4.50 \\cdot 4 = $18)
    { id: "C", text: "$\\$44.75$" },
    // distractor: wrong base — uses combined rate (${}4.50 + 2.75 = ${}7.25 per mile)
    { id: "D", text: "$\\$55.75$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $4$ extra miles at $\\$2.75$ each add $4 \\cdot 2.75 = \\$11$ to the original total. New total: $\\$26.75 + \\$11 = \\$37.75$.\n\n**The Full Solution:**\nLet the cost equation be $2.75m + 4.50 = 26.75$, so $2.75m = 22.25$ and $m = 8.09\\overline{09}$.\nFor $m + 4$ miles: total $= 2.75(m + 4) + 4.50 = 2.75m + 11 + 4.50 = 26.75 + 11 = \\$37.75$.\n\nShortcut: you do not need to find $m$. Adding $4$ miles adds $4 \\cdot \\$2.75 = \\$11$, and the pickup fee is unchanged, so the new total is $\\$26.75 + \\$11 = \\$37.75$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — adds $\\$4$ directly instead of $4 \\cdot \\$2.75$.\n* Choice C: \"applies the inverse operation\" — uses the flat fee $\\$4.50$ as the per-mile rate, getting $\\$26.75 + 4 \\cdot \\$4.50 = \\$44.75$.\n* Choice D: \"wrong base\" — adds the two rates ($\\$7.25$) and uses that as the per-mile rate.\n\n**Test Day Takeaway:** Linear cost = (rate $\\times$ quantity) + fixed fee. Adding more units only changes the rate-times-quantity piece — the fixed fee does not change.",
  skills: ["word-problems", "linear-functions"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The function $g(t) = 250 - 15t$ models the gallons of water remaining in a tank after $t$ hours of draining. What does the number $15$ represent in this context?",
  choices: [
    { id: "A", text: "The tank loses $15$ gallons of water each hour." },
    // distractor: wrong base — confuses slope (15) with the y-intercept (250)
    { id: "B", text: "The tank starts with $15$ gallons of water." },
    // distractor: applies inverse op — treats 15 as a time value rather than a rate
    { id: "C", text: "After $15$ hours the tank is completely empty." },
    // distractor: applies inverse op — inverts the rate (1/15 hours per gallon)
    { id: "D", text: "The tank requires $15$ hours to lose $1$ gallon of water." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** In $g(t) = 250 - 15t$, the coefficient of $t$ is the rate of change. With a $-15$ coefficient, the tank loses $15$ gallons per hour.\n\n**The Full Solution:**\nThe function is in the form $g(t) = b + mt$ where $m = -15$ is the slope and $b = 250$ is the $y$-intercept. The slope tells us the rate of change: for each additional hour, the volume decreases by $15$ gallons.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — confuses the slope ($15$) with the initial value, which is $250$.\n* Choice C: \"applies the inverse operation\" — treats $15$ as an input time value instead of a rate.\n* Choice D: \"applies the inverse operation\" — inverts the rate (one gallon per $\\dfrac{1}{15}$ hour).\n\n**Test Day Takeaway:** In $f(x) = b + mx$, the coefficient of the variable is always the rate of change per unit of that variable.",
  skills: ["function-interpretation", "linear-functions", "slope"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $\\dfrac{3x}{14} = \\dfrac{9}{7}$, what is the value of $x + 4$?",
  choices: [
    // distractor: stops one step early — solves for x = 6 and reports it
    { id: "A", text: "$6$" },
    // distractor: wrong sign — subtracts 4 instead of adding
    { id: "B", text: "$2$" },
    { id: "C", text: "$10$" },
    // distractor: off-by-one — leaves the answer at 3x = 18 instead of x
    { id: "D", text: "$18$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Cross-multiply: $3x \\cdot 7 = 14 \\cdot 9$, so $21x = 126$ and $x = 6$. Then $x + 4 = 10$.\n\n**The Full Solution:**\n$\\dfrac{3x}{14} = \\dfrac{9}{7}$\n\nMultiply both sides by $14$: $3x = 14 \\cdot \\dfrac{9}{7} = 2 \\cdot 9 = 18$, so $x = 6$.\n\nThe question asks for $x + 4$, not $x$: $6 + 4 = 10$.\n\nVerification: $\\dfrac{3(6)}{14} = \\dfrac{18}{14} = \\dfrac{9}{7}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — solves for $x = 6$ and forgets the $+ 4$ shift.\n* Choice B: \"wrong sign\" — subtracts $4$ from $x$ instead of adding.\n* Choice D: \"off-by-one\" — keeps $3x = 18$ instead of solving for $x$.\n\n**Test Day Takeaway:** Re-read the last sentence before answering. The question often asks for a related quantity, not the variable itself.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A community center surveyed its members and found that $35\\%$ of them prefer evening classes. If $1{,}050$ members prefer evening classes, how many members were surveyed in total?",
  choices: [
    // distractor: applies inverse op — multiplies $1{,}050 \\cdot 0.35 = 367.5$, rounds to $368$
    { id: "A", text: "$368$" },
    // distractor: wrong base — divides by complement $0.65$ instead of $0.35$
    { id: "B", text: "$1{,}615$" },
    { id: "C", text: "$3{,}000$" },
    // distractor: off-by-one — divides by $0.035$ instead of $0.35$ (decimal slip)
    { id: "D", text: "$30{,}000$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Total $\\times 0.35 = 1{,}050$, so total $= \\frac{1{,}050}{0.35} = 3{,}000$.\n\n**The Full Solution:**\nLet $T$ be the total number of members surveyed. Then ${}0.35 \\cdot T = 1{,}050$.\nDivide both sides by $0.35$: $T = \\dfrac{1{,}050}{0.35} = 3{,}000$.\n\nVerification: $35\\%$ of $3{,}000 = 0.35 \\cdot 3{,}000 = 1{,}050$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — multiplies $1{,}050 \\cdot 0.35 = 367.5$ instead of dividing.\n* Choice B: \"wrong base\" — divides by the complement $0.65$ (treats $1{,}050$ as the count for the other group).\n* Choice D: \"off-by-one\" — divides by $0.035$ instead of $0.35$ (decimal-place slip).\n\n**Test Day Takeaway:** When a percent of an unknown total is given, divide the part by the percent (as a decimal) to recover the whole.",
  skills: ["percents"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The list shows the number of books read by five students during a semester:\n\n$$12, \\; 8, \\; 15, \\; 10, \\; 5$$\n\nIf one additional student is added to the data set with a value of $20$, what is the median of the new data set?",
  choices: [
    // distractor: stops one step early — gives the original median (10) without recomputing
    { id: "A", text: "$10$" },
    { id: "B", text: "$11$" },
    // distractor: applies inverse op — averages min and max instead of two middle values
    { id: "C", text: "$12.5$" },
    // distractor: wrong base — picks the new value as the median
    { id: "D", text: "$20$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Order the new data: $5, 8, 10, 12, 15, 20$. With $6$ values, median is the average of the $3$rd and $4$th: $\\dfrac{10 + 12}{2} = 11$.\n\n**The Full Solution:**\nList all values in order: $5, 8, 10, 12, 15, 20$. With an even number of values $(6)$, the median is the average of the two middle values (the $3$rd and $4$th): $\\dfrac{10 + 12}{2} = 11$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports the original median ($10$) without recomputing.\n* Choice C: \"applies the inverse operation\" — averages min and max ($\\dfrac{5 + 20}{2} = 12.5$) instead of the two middle values.\n* Choice D: \"wrong base\" — picks the newly added value as the median.\n\n**Test Day Takeaway:** Always sort the data first. With an even count, the median is the average of the two middle values.",
  skills: ["statistics"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "\n\n| | Supports Policy | Opposes Policy | No Opinion | Total |\n|---|---|---|---|---|\n| Under $30$ | $85$ | $60$ | $15$ | $160$ |\n| $30$ and Over | $120$ | $95$ | $25$ | $240$ |\n| Total | $205$ | $155$ | $40$ | $400$ |\n\nBased on the table, what fraction of those who oppose the policy are under $30$?",
  choices: [
    // distractor: wrong base — uses 160 (Under 30 row total) as the denominator
    { id: "A", text: "$\\dfrac{60}{160}$" },
    { id: "B", text: "$\\dfrac{60}{155}$" },
    // distractor: wrong base — uses 400 (grand total) as the denominator
    { id: "C", text: "$\\dfrac{60}{400}$" },
    // distractor: off-by-one — uses the 30+ opposers (95) instead of under 30 (60)
    { id: "D", text: "$\\dfrac{95}{155}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"Of those who oppose\" means the denominator is the Opposes column total $= 155$. Under $30$ who oppose $= 60$. Fraction $= \\dfrac{60}{155}$.\n\n**The Full Solution:**\nThe condition is \"of those who oppose the policy,\" so we restrict to the Opposes column (total $155$). Among those, $60$ are under $30$. The fraction is $\\dfrac{60}{155}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses $160$ (the Under $30$ row total) as the denominator.\n* Choice C: \"wrong base\" — uses $400$ (grand total) as the denominator.\n* Choice D: \"off-by-one\" — uses the $30$+ opposers ($95$) instead of under $30$ ($60$).\n\n**Test Day Takeaway:** Read the condition carefully — it determines your denominator.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In a water-treatment tank, an algae colony triples every $4$ hours. If the initial colony size is $200$ cells, which function $A$ models the colony size after $t$ hours?",
  choices: [
    // distractor: applies inverse op — uses 4t instead of t/4 in the exponent
    { id: "A", text: "$A(t) = 200(3)^{4t}$" },
    { id: "B", text: "$A(t) = 200(3)^{\\frac{t}{4}}$" },
    // distractor: wrong base — swaps the tripling factor (3) and the period (4)
    { id: "C", text: "$A(t) = 200(4)^{\\frac{t}{3}}$" },
    // distractor: applies inverse op — uses linear growth instead of exponential
    { id: "D", text: "$A(t) = 200 + 3t$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Triples every $4$ hours means base $3$, and the exponent must equal $1$ when $t = 4$, so the exponent is $\\dfrac{t}{4}$.\n\n**The Full Solution:**\nGeneral form: $A(t) = A_0 \\cdot b^{\\frac{t}{d}}$ where $A_0 = 200$, $b = 3$ (triples), $d = 4$ hours.\nSo $A(t) = 200(3)^{\\frac{t}{4}}$.\n\nCheck: at $t = 4$, $A = 200(3)^1 = 600$ \\checkmark. At $t = 8$, $A = 200(3)^2 = 1800$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses $4t$ instead of $\\dfrac{t}{4}$, growing far too fast.\n* Choice C: \"wrong base\" — swaps the base and the period.\n* Choice D: \"applies the inverse operation\" — uses linear growth instead of exponential.\n\n**Test Day Takeaway:** \"Triples every $d$ periods\" means base $3$, exponent $\\dfrac{t}{d}$.",
  skills: ["exponential-functions"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $f(x) = 2x^2 - 3x + 4$ and $g(x) = x + 1$, what is the value of $f(g(2))$?",
  correctAnswer: "13",
  explanation: "**SAT Pattern: Function Composition**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~15s):** $g(2) = 2 + 1 = 3$. Then $f(3) = 2(9) - 3(3) + 4 = 18 - 9 + 4 = 13$.\n\n**The Full Solution:**\nStep 1: Find $g(2) = 2 + 1 = 3$.\nStep 2: Find $f(3) = 2(3)^2 - 3(3) + 4 = 2(9) - 9 + 4 = 18 - 9 + 4 = 13$.\n\n**Verification:** $g(2) = 3$ and $f(3) = 18 - 9 + 4 = 13$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Computing $f(2)$ first instead of $g(2)$: $f(2) = 8 - 6 + 4 = 6$, then $g(6) = 7$ — wrong order.\n* Evaluating $g(f(2))$ instead of $f(g(2))$.\n\n**Test Day Takeaway:** With composite functions, evaluate the inner function first, then plug that result into the outer function.",
  skills: ["function-interpretation"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the right triangle shown, one acute angle measures $42^{\\circ}$ and the side opposite that angle has length $14$. Which expression gives the length of the hypotenuse?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["42°", "", ""],
      sideLabels: ["", "14", ""],
      rightAngleVertex: 1
    }
  },
  choices: [
    { id: "A", text: "$\\dfrac{14}{\\sin 42^{\\circ}}$" },
    // distractor: wrong base — uses cosine (adjacent/hypotenuse) instead of sine
    { id: "B", text: "$\\dfrac{14}{\\cos 42^{\\circ}}$" },
    // distractor: applies inverse op — multiplies (gives a value < 14, less than the opposite leg)
    { id: "C", text: "$14 \\sin 42^{\\circ}$" },
    // distractor: wrong base + inverse op — both errors combined
    { id: "D", text: "$14 \\cos 42^{\\circ}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $\\sin 42^{\\circ} = \\dfrac{\\text{opposite}}{\\text{hypotenuse}} = \\dfrac{14}{h}$, so $h = \\dfrac{14}{\\sin 42^{\\circ}}$.\n\n**The Full Solution:**\nIn a right triangle, $\\sin(\\theta) = \\dfrac{\\text{opposite}}{\\text{hypotenuse}}$. For the $42^{\\circ}$ angle, the opposite side is $14$ and the hypotenuse is $h$:\n$\\sin 42^{\\circ} = \\dfrac{14}{h} \\Rightarrow h = \\dfrac{14}{\\sin 42^{\\circ}}$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — uses cosine, which relates the adjacent leg, not the opposite.\n* Choice C: \"applies the inverse operation\" — multiplies by sine, but $\\sin 42^{\\circ} < 1$, so the result is less than $14$ — smaller than the opposite leg, which is impossible for a hypotenuse.\n* Choice D: \"applies the inverse operation\" + \"wrong base\" — both mistakes (cosine AND multiplication).\n\n**Test Day Takeaway:** SOH-CAH-TOA: Sine $= \\dfrac{\\text{Opposite}}{\\text{Hypotenuse}}$. To find the hypotenuse from the opposite leg, divide by $\\sin$.",
  skills: ["triangles", "angles"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A cylindrical nutrient reservoir for a hydroponic system has a radius of $4$ inches and a height of $7$ inches. The volume of the reservoir, in cubic inches, can be expressed as $k\\pi$. What is the value of $k$?",
  choices: [
    // distractor: stops one step early — forgets to square the radius (uses r·h)
    { id: "A", text: "$28$" },
    // distractor: off-by-one — squares the height instead of the radius
    { id: "B", text: "$196$" },
    { id: "C", text: "$112$" },
    // distractor: applies inverse op — doubles the radius before squaring (uses diameter)
    { id: "D", text: "$448$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (4)^2 (7) = 16 \\cdot 7 \\pi = 112\\pi$. So $k = 112$.\n\n**The Full Solution:**\nThe volume formula for a right circular cylinder is $V = \\pi r^2 h$.\nWith $r = 4$ in and $h = 7$ in:\n$V = \\pi (4)^2 (7) = \\pi (16)(7) = 112\\pi$ cubic inches.\nSo $k = 112$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — forgets to square the radius, computes $\\pi rh = 28\\pi$.\n* Choice B: \"off-by-one\" — squares the height instead of the radius, computes $\\pi(4)(49) = 196\\pi$.\n* Choice D: \"applies the inverse operation\" — uses the diameter $8$ in place of the radius, computes $\\pi(8)^2(7) = 448\\pi$.\n\n**Test Day Takeaway:** For a cylinder, square the radius first, then multiply by the height. Memorize $V = \\pi r^2 h$ — this is on the Reference Sheet.",
  skills: ["volume", "geometry"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Line $p$ passes through the points $(2, -1)$ and $(6, 7)$. What is the equation of line $p$ in slope-intercept form?",
  choices: [
    { id: "A", text: "$y = 2x - 5$" },
    // distractor: wrong sign — gets +3 instead of -5 for the intercept
    { id: "B", text: "$y = 2x + 3$" },
    // distractor: applies inverse op — uses reciprocal slope 1/2 instead of 2
    { id: "C", text: "$y = \\dfrac{1}{2}x - 2$" },
    // distractor: wrong sign — uses negative slope -2 instead of 2
    { id: "D", text: "$y = -2x + 3$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Slope $= \\dfrac{7 - (-1)}{6 - 2} = \\dfrac{8}{4} = 2$. Use point $(2, -1)$: $-1 = 2(2) + b \\Rightarrow b = -5$. So $y = 2x - 5$.\n\n**The Full Solution:**\nSlope: $m = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{7 - (-1)}{6 - 2} = \\dfrac{8}{4} = 2$.\nUsing point-slope with $(2, -1)$: $y - (-1) = 2(x - 2) \\Rightarrow y + 1 = 2x - 4 \\Rightarrow y = 2x - 5$.\nCheck with $(6, 7)$: $2(6) - 5 = 7$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong sign\" — sign error when computing $b$, getting $+3$ instead of $-5$.\n* Choice C: \"applies the inverse operation\" — uses reciprocal slope $\\dfrac{1}{2}$ instead of $2$.\n* Choice D: \"wrong sign\" — uses negative slope $-2$ instead of $+2$.\n\n**Test Day Takeaway:** Find slope first, then plug one point into $y = mx + b$ to find $b$.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A store sells two types of gift cards. Small gift cards cost $\\$15$ each and large gift cards cost $\\$25$ each. On Monday, the store sold a total of $30$ gift cards for a total of $\\$550$. How many large gift cards were sold?",
  correctAnswer: "10",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~25s):** Let $\\ell$ be large cards. Total cards: $s + \\ell = 30$. Total cost: $15s + 25\\ell = 550$. Substitute $s = 30 - \\ell$: $15(30 - \\ell) + 25\\ell = 550 \\Rightarrow 450 + 10\\ell = 550 \\Rightarrow \\ell = 10$.\n\n**The Full Solution:**\nLet $s$ = number of small gift cards and $\\ell$ = number of large gift cards.\n$s + \\ell = 30$\n$15s + 25\\ell = 550$\n\nFrom the first equation: $s = 30 - \\ell$.\nSubstitute: $15(30 - \\ell) + 25\\ell = 550$\n$450 - 15\\ell + 25\\ell = 550$\n$450 + 10\\ell = 550$\n$\\ell = 10$\n\n**Verification:** $s = 20$, $\\ell = 10$. Total cards: $20 + 10 = 30$ \\checkmark. Total cost: $15(20) + 25(10) = 300 + 250 = 550$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Setting up $25s + 15\\ell = 550$ (swapping prices).\n* Solving for $s$ instead of $\\ell$.\n\n**Test Day Takeaway:** When two equations describe a real-world context, define variables clearly and substitute.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A researcher collected data on hours studied and exam scores for $20$ students. The line of best fit is $y = 5.8x + 42$, where $x$ is hours studied and $y$ is the predicted exam score. One student studied for $6$ hours and scored $82$. What is the residual for this student?",
  diagram: { type: "scatterplot", params: {
    points: [[1,50],[2,52],[3,64],[4,60],[5,72],[7,88],[8,86],[9,92],[10,96],[11,110]],
    xMin: 0, xMax: 12, yMin: 30, yMax: 120,
    xGridStep: 1, xLabelStep: 2, yGridStep: 10, yLabelStep: 20,
    bestFitLine: { slope: 5.8, intercept: 42 },
    highlightPoint: [6, 82], highlightLabel: "(6, 82)", showResidual: true,
    xLabel: "Hours studied", yLabel: "Exam score",
  } },
  choices: [
    // distractor: wrong sign — computes predicted - actual instead of actual - predicted
    { id: "A", text: "$-5.2$" },
    { id: "B", text: "$5.2$" },
    // distractor: off-by-one — uses 5.8 \\cdot 7 = 40.6 by mistake
    { id: "C", text: "$6.8$" },
    // distractor: wrong base — uses x = 6 directly as the predicted value
    { id: "D", text: "$76$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Residual**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Predicted: $5.8(6) + 42 = 34.8 + 42 = 76.8$. Residual = actual $-$ predicted = $82 - 76.8 = 5.2$.\n\n**The Full Solution:**\nStep 1: Find the predicted value at $x = 6$: $y = 5.8(6) + 42 = 34.8 + 42 = 76.8$.\nStep 2: Residual = actual $-$ predicted = $82 - 76.8 = 5.2$.\nA positive residual means the actual score was above the prediction.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — computes predicted $-$ actual (reverses the formula).\n* Choice C: \"off-by-one\" — uses $5.8 \\times 7$ by mistake.\n* Choice D: \"wrong base\" — uses the predicted value $76.8$ rounded as the answer.\n\n**Test Day Takeaway:** Residual = actual $-$ predicted. Positive means above the line.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $4(2x - 1) + 5 = 3x + 16$, what is the value of $x$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~20s):** Distribute and simplify: $8x - 4 + 5 = 3x + 16 \\Rightarrow 8x + 1 = 3x + 16 \\Rightarrow 5x = 15 \\Rightarrow x = 3$.\n\n**The Full Solution:**\n$4(2x - 1) + 5 = 3x + 16$\n$8x - 4 + 5 = 3x + 16$\n$8x + 1 = 3x + 16$\n$5x = 15$\n$x = 3$\n\n**Verification:** LHS $= 4(2(3) - 1) + 5 = 4(5) + 5 = 25$. RHS $= 3(3) + 16 = 9 + 16 = 25$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Distributing $4$ incorrectly as $8x - 1$ instead of $8x - 4$.\n* Sign errors when combining $-4 + 5 = 1$.\n\n**Test Day Takeaway:** Distribute first, combine like terms second, isolate the variable last.",
  skills: ["solving-equations"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The expression $\\dfrac{(3x^2y^3)^2 \\cdot (2xy^{-1})^3}{6x^4y^2}$ is equivalent to which of the following?",
  choices: [
    { id: "A", text: "$12x^3y$" },
    // distractor: wrong sign — adds y exponents as 6 + 3 = 9 instead of 6 + (-3) = 3
    { id: "B", text: "$12x^3y^4$" },
    // distractor: off-by-one — divides 72/6 as 6 instead of 12
    { id: "C", text: "$6x^3y$" },
    // distractor: stops one step early — forgets to subtract the x^4 in the denominator
    { id: "D", text: "$12x^7y$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Numerator: $(3x^2y^3)^2 \\cdot (2xy^{-1})^3 = 9x^4y^6 \\cdot 8x^3y^{-3} = 72x^7y^3$. Divide by $6x^4y^2$: $12x^3y$.\n\n**The Full Solution:**\nNumerator: $(3x^2y^3)^2 = 9x^4y^6$ and $(2xy^{-1})^3 = 8x^3y^{-3}$.\nProduct: $9x^4y^6 \\cdot 8x^3y^{-3} = 72x^7y^3$.\nDivide by $6x^4y^2$: $\\dfrac{72x^7y^3}{6x^4y^2} = 12x^{7-4}y^{3-2} = 12x^3y$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong sign\" — adds $y$ exponents as $6 + 3$ instead of $6 + (-3)$, getting $y^4$.\n* Choice C: \"off-by-one\" — divides $\\frac{72}{6}$ as $6$ instead of $12$.\n* Choice D: \"stops one step early\" — forgets to subtract the $x^4$ in the denominator.\n\n**Test Day Takeaway:** Apply exponent rules step by step: power of a product first, then multiply same bases, then divide.",
  skills: ["exponent-rules"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $2x^2 + bx + 18 = 0$ has exactly one real solution. If $b > 0$, what is the value of $b$?",
  choices: [
    // distractor: applies inverse op — divides 144 by something to get 6
    { id: "A", text: "$6$" },
    // distractor: off-by-one — miscalculates 4(2)(18) as 100
    { id: "B", text: "$10$" },
    { id: "C", text: "$12$" },
    // distractor: wrong base — uses b² = 4(2)(18) + 4(2) or similar
    { id: "D", text: "$14$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** One real solution means discriminant $= 0$. $b^2 - 4(2)(18) = 0 \\Rightarrow b^2 = 144 \\Rightarrow b = 12$ (since $b > 0$).\n\n**The Full Solution:**\nFor $ax^2 + bx + c = 0$ to have exactly one real solution, the discriminant must equal zero:\n$b^2 - 4ac = 0$\n$b^2 - 4(2)(18) = 0$\n$b^2 - 144 = 0$\n$b^2 = 144$\n$b = \\pm 12$\nSince $b > 0$, $b = 12$.\n\nVerification: $2x^2 + 12x + 18 = 0 \\Rightarrow x^2 + 6x + 9 = 0 \\Rightarrow (x + 3)^2 = 0$, so $x = -3$ is the only solution \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — confuses $\\sqrt{4 \\cdot 2 \\cdot 18}$ with $\\sqrt{4 \\cdot \\frac{18}{2}}$.\n* Choice B: \"off-by-one\" — miscalculates $4(2)(18)$ as $100$.\n* Choice D: \"wrong base\" — uses $b^2 = 4(2)(18) + 4(2)$ or similar error.\n\n**Test Day Takeaway:** Exactly one solution means discriminant $b^2 - 4ac = 0$.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, a parabola has vertex $(3, -4)$ and passes through the point $(5, 8)$. What is the $y$-intercept of this parabola?",
  choices: [
    { id: "A", text: "$(0, 23)$" },
    // distractor: stops one step early — forgets to subtract 4, gets just 3(9) = 27
    { id: "B", text: "$(0, 27)$" },
    // distractor: off-by-one — uses a = 2 from a computation error
    { id: "C", text: "$(0, 20)$" },
    // distractor: wrong base — uses (x-3)² evaluated at x = 0 with wrong value of a
    { id: "D", text: "$(0, 32)$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Vertex form: $y = a(x - 3)^2 - 4$. Plug in $(5, 8)$: $8 = 4a - 4 \\Rightarrow a = 3$. At $x = 0$: $y = 3(9) - 4 = 23$.\n\n**The Full Solution:**\nVertex form: $y = a(x - 3)^2 - 4$.\nPlug in $(5, 8)$: $8 = a(5 - 3)^2 - 4 = 4a - 4$, so $4a = 12$, giving $a = 3$.\nEquation: $y = 3(x - 3)^2 - 4$.\n$y$-intercept (set $x = 0$): $y = 3(0 - 3)^2 - 4 = 3(9) - 4 = 27 - 4 = 23$.\n\nSo the $y$-intercept is $(0, 23)$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — forgets to subtract $4$, getting just $3(9) = 27$.\n* Choice C: \"off-by-one\" — uses $a = 2$ from a computation error.\n* Choice D: \"wrong base\" — uses $(x - 3)^2$ evaluated at $x = 0$ as $(-3)^2 = 9$ but multiplies by a wrong value of $a$.\n\n**Test Day Takeaway:** Start with vertex form $y = a(x - h)^2 + k$, use the other point to find $a$, then evaluate at $x = 0$.",
  skills: ["vertex-form", "quadratic-equations", "coordinate-geometry"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A researcher models the concentration of a medication in the bloodstream by $C(t) = 200(0.85)^t$, where $t$ is the number of hours after the medication is taken and $C(t)$ is in milligrams per liter. The medication is effective when the concentration is at least $80$ mg/L. For how many complete hours after taking the medication does it remain effective?",
  choices: [
    // distractor: stops one step early — stops computing too soon at t = 4
    { id: "A", text: "$4$" },
    { id: "B", text: "$5$" },
    // distractor: off-by-one — rounds 5.64 up to 6, but at t = 6 concentration is below 80
    { id: "C", text: "$6$" },
    // distractor: wrong base — miscalculates the decay rate
    { id: "D", text: "$7$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Compute $C(t)$ for successive integer values: $C(5) \\approx 88.7$, $C(6) \\approx 75.4$. At $t = 5$, $C \\geq 80$. At $t = 6$, $C < 80$. So $5$ complete hours.\n\n**The Full Solution:**\nWe need $200(0.85)^t \\geq 80$, so $(0.85)^t \\geq 0.4$.\nTaking logarithms: $t \\leq \\dfrac{\\ln(0.4)}{\\ln(0.85)} = \\dfrac{-0.9163}{-0.1625} \\approx 5.64$.\nThe medication remains effective for $5$ complete hours (at $t = 5$ it is still effective; at $t = 6$ it is not).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — stops computing too early at $t = 4$.\n* Choice C: \"off-by-one\" — rounds $5.64$ up to $6$, but at $t = 6$ the concentration is below $80$.\n* Choice D: \"wrong base\" — miscalculates the decay rate.\n\n**Test Day Takeaway:** For \"complete hours\" questions, test integer values near the boundary and check the inequality.",
  skills: ["exponential-functions", "solving-equations"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For the polynomial $p(x) = 2x^3 - 5x^2 - 14x + 8$, it is known that $(x - 4)$ is a factor. Which of the following gives the complete factorization of $p(x)$?",
  choices: [
    // distractor: stops one step early — correct first step but not fully factored
    { id: "A", text: "$(x - 4)(2x^2 + 3x - 2)$" },
    { id: "B", text: "$(x - 4)(2x - 1)(x + 2)$" },
    // distractor: wrong sign — sign errors in the quadratic factoring
    { id: "C", text: "$(x - 4)(2x + 1)(x - 2)$" },
    // distractor: applies inverse op — incorrect synthetic division (sign flip)
    { id: "D", text: "$(x - 4)(2x^2 - 3x + 2)$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Polynomial Factoring with Given Factor**\n\n**Choice B is correct.**\n\n**The Full Solution:**\nDivide $2x^3 - 5x^2 - 14x + 8$ by $(x - 4)$ using synthetic division with $x = 4$:\n\nCoefficients: $2, -5, -14, 8$.\nBring down $2$. Multiply $2 \\times 4 = 8$. Add: $-5 + 8 = 3$.\nMultiply $3 \\times 4 = 12$. Add: $-14 + 12 = -2$.\nMultiply $-2 \\times 4 = -8$. Add: $8 + (-8) = 0$.\n\nQuotient: $2x^2 + 3x - 2$.\nFactor by grouping: find numbers that multiply to $2 \\cdot (-2) = -4$ and add to $3$: those are $4$ and $-1$.\n$2x^2 + 4x - x - 2 = 2x(x + 2) - 1(x + 2) = (2x - 1)(x + 2)$.\n\nComplete factorization: $(x - 4)(2x - 1)(x + 2)$.\n\nVerification: $p(4) = 128 - 80 - 56 + 8 = 0$ \\checkmark. $p(\\tfrac{1}{2}) = \\tfrac{1}{4} - \\tfrac{5}{4} - 7 + 8 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — correct first step but not fully factored.\n* Choice C: \"wrong sign\" — sign errors in the quadratic factoring.\n* Choice D: \"applies the inverse operation\" — incorrect synthetic division (sign flip).\n\n**Test Day Takeaway:** Use synthetic division to reduce degree, then factor the quotient completely.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The system of equations below has solution $(x, y)$.\n\n$x + y = 3$\n$x^2 - y = 3$\n\nIf $x > 0$, what is the value of $y$?",
  correctAnswer: "1",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $1$.**\n\n**The Fast Way (~30s):** From $y = 3 - x$, substitute into $x^2 - (3 - x) = 3$: $x^2 + x - 6 = 0 \\Rightarrow (x + 3)(x - 2) = 0$. Since $x > 0$, $x = 2$ and $y = 1$.\n\n**The Full Solution:**\nFrom the first equation: $y = 3 - x$.\nSubstitute into the second: $x^2 - (3 - x) = 3$\n$x^2 + x - 3 = 3$\n$x^2 + x - 6 = 0$\n$(x + 3)(x - 2) = 0$\n$x = -3$ or $x = 2$\n\nSince $x > 0$: $x = 2$, so $y = 3 - 2 = 1$.\n\n**Verification:** $x + y = 2 + 1 = 3$ \\checkmark and $x^2 - y = 4 - 1 = 3$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using $x = -3$ and getting $y = 6$.\n* Substitution errors when replacing $y$.\n* Forgetting the condition $x > 0$.\n\n**Test Day Takeaway:** Solve the linear equation for one variable, substitute, and check the constraint.",
  skills: ["systems-of-equations", "quadratic-equations"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, circle $C$ has equation $(x - 3)^2 + (y + 2)^2 = 25$. Line $\\ell$ has equation $y = \\dfrac{3}{4}x + b$ and is tangent to circle $C$. If $b > 0$, what is the value of $b$?",
  correctAnswer: "2",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~45s):** Distance from $(3, -2)$ to $3x - 4y + 4b = 0$ equals radius $5$. $\\dfrac{|9 + 8 + 4b|}{5} = 5 \\Rightarrow |17 + 4b| = 25$. With $b > 0$: $4b = 8$, so $b = 2$.\n\n**The Full Solution:**\nCircle center: $(3, -2)$, radius: $5$.\nA tangent line touches the circle at exactly one point, so the distance from the center to the line equals the radius.\n\nRewrite $y = \\dfrac{3}{4}x + b$ as $3x - 4y + 4b = 0$ (multiply through by $4$).\n\nDistance from $(3, -2)$ to $3x - 4y + 4b = 0$:\n$d = \\dfrac{|3(3) - 4(-2) + 4b|}{\\sqrt{9 + 16}} = \\dfrac{|17 + 4b|}{5}$\n\nSet $d = 5$: $|17 + 4b| = 25$.\n\nCase 1: $17 + 4b = 25 \\Rightarrow b = 2$.\nCase 2: $17 + 4b = -25 \\Rightarrow b = -10.5$.\n\nSince $b > 0$: $b = 2$.\n\n**Common Mistakes to Avoid:**\n* Using the wrong distance formula.\n* Choosing $b = -10.5$ without checking the $b > 0$ condition.\n\n**Test Day Takeaway:** A line is tangent to a circle when the distance from the center to the line equals the radius.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A survey asked $500$ people whether they exercise regularly and whether they follow a specific diet. The results showed:\n\n- $210$ exercise regularly\n- $180$ follow the diet\n- $95$ do both\n\nIf a person is selected at random from those who exercise regularly, what is the probability that this person does NOT follow the diet?",
  choices: [
    { id: "A", text: "$\\dfrac{23}{42}$" },
    // distractor: wrong sign — gives the complement P(diet | exercise) instead
    { id: "B", text: "$\\dfrac{19}{42}$" },
    // distractor: wrong base — uses 500 (grand total) as denominator instead of 210
    { id: "C", text: "$\\dfrac{23}{100}$" },
    // distractor: off-by-one — miscalculates 170/500 or uses incorrect group sizes
    { id: "D", text: "$\\dfrac{17}{50}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Among $210$ exercisers, $210 - 95 = 115$ do NOT follow the diet. Probability $= \\dfrac{115}{210} = \\dfrac{23}{42}$.\n\n**The Full Solution:**\nAmong the $210$ who exercise regularly, $95$ also follow the diet.\nThose who exercise but do NOT follow the diet: $210 - 95 = 115$.\n\nProbability $= \\dfrac{115}{210}$. Simplify by dividing numerator and denominator by $5$: $\\dfrac{23}{42}$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong sign\" — $\\dfrac{19}{42} = \\dfrac{95}{210}$ gives the probability of following the diet given exercise (the complement).\n* Choice C: \"wrong base\" — uses $500$ in the denominator (as $\\dfrac{115}{500}$) instead of restricting to exercisers.\n* Choice D: \"off-by-one\" — miscalculates $\\dfrac{170}{500}$ or uses incorrect group sizes.\n\n**Test Day Takeaway:** Conditional probability restricts the sample space. \"Given exercise\" means the denominator is the number of exercisers.",
  skills: ["probability", "statistics"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 10 — Math Module 2 (22 questions)
// Distribution: 3E / 7M / 12H. Wavy flow: easy at 1,4,20; medium at 2,3,6,7,12,15,16;
// hard at 5,8,9,10,11,13,14,17,18,19,21,22.
// Q14 is a log-product item solved by the common-base/exponent route (pattern
// "Common-Base Exponent Simplification"); it is NOT a pool infusion.
// Pool infusions (re-skinned away from source): a+b+c bound D-p18#26 (Q5),
// price system by elimination E#7 (Q6), g(0) from a stated zero D-p24#21 (Q8),
// rational-function shift D-p13#24 (Q9), parabola bc from graph D-p32#21 (Q13),
// tangent-line discriminant D-p29#26 (Q11), successive percent D-p31#22 (Q18),
// exponential two-condition D-p19#27 (Q19), line-meets-parabola-once D-p8#21 (Q21).
// Q1 (Pythagorean surd) and Q4 (reverse-percent two-step) are fresh openers;
// Q21 was reworked from the over-cloned sloped-line tangency into the unused
// D-p8#21 horizontal-line skeleton (find the parabola constant via discriminant = 0).
// Palette: bare-math triangle, archery, bottle depots, orchestra seating,
// robotics-meet drones, kite-festival supplies, water-treatment tanks.

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "In a right triangle, the two legs have lengths $6$ and $9$. What is the length of the hypotenuse?",
  choices: [
    // distractor: subtracts the squared legs instead of adding them — $\\sqrt{81 - 36} = \\sqrt{45} = 3\\sqrt{5}$
    { id: "A", text: "$3\\sqrt{5}$" },
    { id: "B", text: "$3\\sqrt{13}$" },
    // distractor: adds the legs and square-roots — treats $6 + 9 = 15$ as the value of $h^2$
    { id: "C", text: "$\\sqrt{15}$" },
    // distractor: adds the legs and forgets to take the square root entirely — $6 + 9 = 15$
    { id: "D", text: "$15$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $h^2 = 6^2 + 9^2 = 36 + 81 = 117$, and $\\sqrt{117} = \\sqrt{9 \\cdot 13} = 3\\sqrt{13}$.\n\n**The Full Solution:**\nBy the Pythagorean theorem, $h^2 = a^2 + b^2 = 6^2 + 9^2 = 36 + 81 = 117$.\nFactor out the perfect square: $\\sqrt{117} = \\sqrt{9 \\cdot 13} = 3\\sqrt{13}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — subtracts the squares, $\\sqrt{81 - 36} = \\sqrt{45} = 3\\sqrt{5}$, as if solving for a leg.\n* Choice C: \"stops one step early\" — adds the legs, $6 + 9 = 15$, then takes the root, treating $15$ as $h^2$.\n* Choice D: \"wrong base\" — adds the legs to $15$ and never takes the square root at all.\n\n**Test Day Takeaway:** The hypotenuse is $\\sqrt{a^2 + b^2}$ — square the legs, add, then root; pull out any perfect-square factor to simplify the surd.",
  skills: ["geometry", "right-triangles"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "At an archery club, every member is classified as a beginner or an advanced archer, and each member's last shot is recorded as a bullseye or a miss. The table summarizes the results.\n\n| | Bullseye | Miss | Total |\n|---|---|---|---|\n| Beginner | $40$ | $70$ | $110$ |\n| Advanced | $90$ | $30$ | $120$ |\n| Total | $130$ | $100$ | $230$ |\n\nOf the members whose last shot was a bullseye, what fraction were advanced archers?",
  choices: [
    // distractor: wrong base — uses 120 (the Advanced row total) as the denominator
    { id: "A", text: "$\\dfrac{90}{120}$" },
    { id: "B", text: "$\\dfrac{90}{130}$" },
    // distractor: wrong base — uses 230 (the grand total) as the denominator
    { id: "C", text: "$\\dfrac{90}{230}$" },
    // distractor: off-by-one — uses the beginner bullseyes (40) instead of advanced (90)
    { id: "D", text: "$\\dfrac{40}{130}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"Of the members whose last shot was a bullseye\" fixes the denominator at the Bullseye column total $= 130$. Advanced archers among them $= 90$. Fraction $= \\dfrac{90}{130}$.\n\n**The Full Solution:**\nThe condition restricts attention to the Bullseye column, whose total is $130$. Within that column, $90$ archers are advanced. The conditional fraction is therefore $\\dfrac{90}{130}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses $120$ (the Advanced row total) as the denominator instead of the bullseye total.\n* Choice C: \"wrong base\" — uses $230$ (the grand total), ignoring the condition entirely.\n* Choice D: \"off-by-one\" — keeps the correct denominator but uses the beginner bullseyes ($40$) instead of the advanced ones ($90$).\n\n**Test Day Takeaway:** The phrase after \"of those who...\" sets your denominator. Read the condition first, then find the matching count in the numerator.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A regional study models the number of bottles returned, $y$, at a deposit depot as a function of the number of hours, $x$, the depot has been open, using the line of best fit $\\hat{y} = 2.1x + 6$. One depot reported the data point $(10, 32)$. What is the residual for this data point?",
  diagram: { type: "scatterplot", params: {
    points: [[2,9],[3,13],[4,14],[5,18],[6,17],[7,22],[8,21],[9,26],[11,30],[12,30],[13,35]],
    xMin: 0, xMax: 14, yMin: 0, yMax: 40,
    xGridStep: 1, yGridStep: 5, xLabelStep: 2, yLabelStep: 10,
    bestFitLine: { slope: 2.1, intercept: 6 },
    highlightPoint: [10, 32], highlightLabel: "(10, 32)", showResidual: true,
  } },
  choices: [
    // distractor: wrong sign — computes predicted - actual
    { id: "A", text: "$-5$" },
    { id: "B", text: "$5$" },
    // distractor: stops one step early — uses 2.1 \\cdot 10 = 21 alone and forgets the intercept
    { id: "C", text: "$11$" },
    // distractor: off-by-one — predicts at x = 11 instead of x = 10
    { id: "D", text: "$2.9$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Residual**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Predicted: $2.1(10) + 6 = 21 + 6 = 27$. Residual $=$ actual $-$ predicted $= 32 - 27 = 5$.\n\n**The Full Solution:**\nPredicted value at $x = 10$: $\\hat{y} = 2.1(10) + 6 = 27$.\nResidual $=$ actual $-$ predicted $= 32 - 27 = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — computes predicted $-$ actual $= 27 - 32 = -5$.\n* Choice C: \"stops one step early\" — uses $2.1 \\cdot 10 = 21$ without the intercept, then $32 - 21 = 11$.\n* Choice D: \"off-by-one\" — predicts at $x = 11$: $2.1(11) + 6 = 29.1$, then $32 - 29.1 = 2.9$.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted. A positive residual means the point sits above the line of best fit.",
  skills: ["scatterplots", "statistics", "linear-functions"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Of the drones registered for a robotics meet, $30\\%$ are racing drones. The meet recorded $210$ non-racing drones. How many racing drones were registered?",
  choices: [
    { id: "A", text: "$90$" },
    // distractor: stops one step early — finds the total registered (300) and reports it instead of the racing count
    { id: "B", text: "$300$" },
    // distractor: wrong base — takes 70% of the given 210 non-racing drones (0.70 \\cdot 210)
    { id: "C", text: "$147$" },
    // distractor: wrong base — takes 30% of the given 210 non-racing drones (0.30 \\cdot 210)
    { id: "D", text: "$63$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** If $30\\%$ are racing, then $70\\%$ are non-racing, so $0.70 \\cdot T = 210 \\Rightarrow T = 300$. Racing $= 300 - 210 = 90$.\n\n**The Full Solution:**\nRacing drones are $30\\%$ of the total, so non-racing drones are the complementary $70\\%$.\n$0.70 \\cdot T = 210 \\Rightarrow T = \\dfrac{210}{0.70} = 300$ total drones.\nRacing drones $= T - 210 = 300 - 210 = 90$. (Check: $0.30 \\cdot 300 = 90$ \\checkmark.)\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — finds the total $300$ and reports it instead of the racing count.\n* Choice C: \"wrong base\" — applies $70\\%$ to the given $210$, $0.70 \\cdot 210 = 147$, instead of recovering the total first.\n* Choice D: \"wrong base\" — applies $30\\%$ to the given $210$, $0.30 \\cdot 210 = 63$, treating $210$ as the whole.\n\n**Test Day Takeaway:** When a part is given as a percent of an unknown whole, first divide to recover the whole, then answer exactly what is asked.",
  skills: ["percents", "word-problems"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, a parabola has vertex $(7, -12)$ and crosses the $x$-axis at two distinct points. The equation of the parabola is written as $y = ax^2 + bx + c$, where $a$, $b$, and $c$ are constants. Which of the following could be the value of $a + b + c$?",
  choices: [
    // distractor: wrong base — uses the vertex y-value -12 as a ceiling, not a floor
    { id: "A", text: "$-23$" },
    // distractor: stops one step early — picks a value still below the vertex height
    { id: "B", text: "$-18$" },
    // distractor: off-by-one — uses the vertex y-value -12 itself (excluded boundary)
    { id: "C", text: "$-12$" },
    { id: "D", text: "$-8$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Evaluating Vertex Form at a Specific Input**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** $a + b + c = y(1)$. In vertex form $y = a(x - 7)^2 - 12$, two $x$-intercepts force $a > 0$ (parabola opens up with a vertex below the axis). Then $y(1) = a(1 - 7)^2 - 12 = 36a - 12 > -12$. Only $-8$ exceeds $-12$.\n\n**The Full Solution:**\nNotice that substituting $x = 1$ into $y = ax^2 + bx + c$ gives $a(1) + b(1) + c = a + b + c$. So $a + b + c = y(1)$.\n\nWrite the parabola in vertex form: $y = a(x - 7)^2 - 12$. For the graph to cross the $x$-axis at two points while its vertex sits at $y = -12$ (below the axis), the parabola must open upward, so $a > 0$.\n\nEvaluate at $x = 1$: $y(1) = a(1 - 7)^2 - 12 = 36a - 12$. Since $a > 0$, $36a > 0$, so $y(1) > -12$.\n\nThe only choice greater than $-12$ is $-8$ (which corresponds to $36a - 12 = -8$, i.e., $a = \\tfrac{1}{9} > 0$ \\checkmark).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — picks a value far below $-12$, treating the vertex height as a maximum.\n* Choice B: \"stops one step early\" — still below the vertex height of $-12$, impossible for an upward parabola.\n* Choice C: \"off-by-one\" — uses $-12$ itself, but $y(1)$ is strictly greater than the vertex value (the vertex is at $x = 7$, not $x = 1$).\n\n**Test Day Takeaway:** $a + b + c$ is just $y(1)$. Pair that with the sign of $a$ forced by the intercept condition to bound the possible values.",
  skills: ["quadratic-equations", "vertex-form"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Two vendors bought the same supplies at a kite-festival shop. The first vendor paid $\\$12.00$ for $1$ kite and $2$ spools of string. The second vendor paid $\\$23.50$ for $4$ kites and $1$ spool of string. What is the cost, in dollars, of $1$ spool of string?",
  choices: [
    { id: "A", text: "$3.50$" },
    // distractor: stops one step early — solves for the kite price instead of the spool price
    { id: "B", text: "$5.00$" },
    // distractor: wrong base — averages the two listed totals incorrectly
    { id: "C", text: "$4.25$" },
    // distractor: applies inverse op — sign slip during elimination
    { id: "D", text: "$2.50$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Let $k$ = kite price, $s$ = spool price. $k + 2s = 12.00$ and $4k + s = 23.50$. Multiply the first by $4$: $4k + 8s = 48.00$. Subtract the second: $7s = 24.50$, so $s = 3.50$.\n\n**The Full Solution:**\nLet $k$ be the cost of a kite and $s$ the cost of a spool.\n$k + 2s = 12.00$\n$4k + s = 23.50$\n\nTo eliminate $k$, multiply the first equation by $4$:\n$4k + 8s = 48.00$.\nSubtract the second equation:\n$(4k + 8s) - (4k + s) = 48.00 - 23.50$\n$7s = 24.50$\n$s = 3.50$.\n\nVerification: $s = 3.50 \\Rightarrow k = 12.00 - 2(3.50) = 5.00$. Check the second equation: $4(5.00) + 3.50 = 23.50$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — solves for the kite price $k = 5.00$ instead of the spool price.\n* Choice C: \"wrong base\" — averages the two totals rather than eliminating a variable.\n* Choice D: \"applies the inverse operation\" — a sign slip during subtraction.\n\n**Test Day Takeaway:** Line up the equations, scale one so a variable cancels, and watch which variable the question actually asks for.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $\\dfrac{3}{x - 4} + \\dfrac{2}{x + 2} = \\dfrac{13}{x^2 - 2x - 8}$, how many real solutions does the equation have?",
  choices: [
    // distractor: stops one step early — assumes the denominators conflict and declares no solution
    { id: "A", text: "$0$" },
    { id: "B", text: "$1$" },
    // distractor: wrong base — assumes a quadratic in disguise yields two solutions
    { id: "C", text: "$2$" },
    // distractor: applies inverse op — mistakes the equation for an identity
    { id: "D", text: "Infinitely many" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Rational Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $x^2 - 2x - 8 = (x - 4)(x + 2)$. Multiply through: $3(x + 2) + 2(x - 4) = 13 \\Rightarrow 5x - 2 = 13 \\Rightarrow x = 3$. Valid since $x \\neq 4, -2$. Exactly $1$ solution.\n\n**The Full Solution:**\nFactor the right denominator: $x^2 - 2x - 8 = (x - 4)(x + 2)$.\nMultiply both sides by $(x - 4)(x + 2)$:\n$3(x + 2) + 2(x - 4) = 13$\n$3x + 6 + 2x - 8 = 13$\n$5x - 2 = 13$\n$x = 3$\nSince $x = 3$ makes no denominator zero, it is valid. The equation has exactly $1$ solution.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — assumes the denominators conflict and declares no solution.\n* Choice C: \"wrong base\" — assumes a quadratic in disguise gives two solutions.\n* Choice D: \"applies the inverse operation\" — mistakes the equation for an identity.\n\n**Test Day Takeaway:** Factor every denominator first, clear the fractions, and confirm the solution does not hit an excluded value.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "For some constant $t$, the function $g$ satisfies $g(x) = (x + 18)(t - x)$. The point $(26, 0)$ lies on the graph of $y = g(x)$ in the $xy$-plane. Determine $g(0)$.",
  correctAnswer: "468",
  explanation: "**SAT Pattern: Function Evaluation to Find Parameter**\n\n**The correct answer is $468$.**\n\n**The Fast Way (~30s):** $(26, 0)$ is a zero of $g$. Since $26 + 18 = 44 \\neq 0$, the other factor must vanish: $t - 26 = 0 \\Rightarrow t = 26$. Then $g(0) = (18)(26) = 468$.\n\n**The Full Solution:**\nThe graph passes through $(26, 0)$, so $g(26) = 0$:\n$g(26) = (26 + 18)(t - 26) = 44(t - 26) = 0$.\nBecause $44 \\neq 0$, we need $t - 26 = 0$, giving $t = 26$.\n\nNow evaluate at $x = 0$:\n$g(0) = (0 + 18)(t - 0) = 18 \\cdot t = 18 \\cdot 26 = 468$.\n\n**Common Mistakes to Avoid:**\n* Setting $x + 18 = 0$ at the given point (that factor isn't zero there).\n* Forgetting to find $t$ before evaluating $g(0)$.\n* Reporting $t = 26$ as the final answer instead of $g(0)$.\n\n**Test Day Takeaway:** A point with $y = 0$ is a zero. Set the non-trivial factor equal to zero to solve for the unknown constant, then evaluate.",
  skills: ["quadratic-equations", "function-interpretation"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The rational function $f$ is defined by $f(x) = \\dfrac{a}{x + b}$, where $a$ and $b$ are constants. The partial graph of $y = f(x)$ is shown, with a vertical asymptote at $x = -2$ and points at $(2, 2)$ and $(6, 1)$. If $g(x) = f(x + 3)$, which equation could define the function $g$?",
  diagram: { type: "rationalFunction", params: {
    a: 8, b: 2, c: 0, showPoints: [[2, 2], [6, 1]], label: "y = f(x)"
  } },
  choices: [
    // distractor: applies the shift to the numerator and cancels, losing the function
    { id: "A", text: "$g(x) = \\dfrac{8}{x}$" },
    // distractor: stops one step early — copies f without applying the shift
    { id: "B", text: "$g(x) = \\dfrac{8}{x + 2}$" },
    { id: "C", text: "$g(x) = \\dfrac{8}{x + 5}$" },
    // distractor: wrong sign — shifts the asymptote right instead of left
    { id: "D", text: "$g(x) = \\dfrac{8}{x - 1}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Rational Function Transformation**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The asymptote $x = -2$ gives $b = 2$, and the point $(2, 2)$ gives $a = 8$ (since $\\tfrac{a}{2 + 2} = 2$). So $f(x) = \\tfrac{8}{x + 2}$. Then $g(x) = f(x + 3) = \\tfrac{8}{(x + 3) + 2} = \\tfrac{8}{x + 5}$.\n\n**The Full Solution:**\nRead the constants from the graph. The vertical asymptote is at $x = -b = -2$, so $b = 2$. Using the point $(2, 2)$: $f(2) = \\dfrac{a}{2 + 2} = \\dfrac{a}{4} = 2 \\Rightarrow a = 8$. (Check $(6, 1)$: $\\tfrac{8}{6 + 2} = 1$ \\checkmark.)\n\nSo $f(x) = \\dfrac{8}{x + 2}$.\n\nApply the horizontal shift $g(x) = f(x + 3)$ by replacing every $x$ with $x + 3$:\n$g(x) = \\dfrac{8}{(x + 3) + 2} = \\dfrac{8}{x + 5}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: applies the shift to the numerator and cancels, discarding the function's structure.\n* Choice B: \"stops one step early\" — leaves $f$ unshifted.\n* Choice D: \"wrong sign\" — shifts the asymptote to the right (subtracts) instead of left.\n\n**Test Day Takeaway:** $f(x + c)$ replaces $x$ with $x + c$ everywhere, sliding the graph LEFT by $c$. Read $a$ and $b$ off the graph first, then substitute.",
  skills: ["rational-functions", "function-interpretation"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $9x^2 - bx + 16 = 0$ has no real solutions, where $b$ is a positive integer. What is the greatest possible value of $b$?",
  choices: [
    // distractor: off-by-one — forgets the strict inequality and uses b = 24
    { id: "A", text: "$24$" },
    { id: "B", text: "$23$" },
    // distractor: applies inverse op — returns b² = 576 instead of b
    { id: "C", text: "$576$" },
    // distractor: wrong base — uses 2·12 doubled incorrectly
    { id: "D", text: "$48$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** No real solutions: $b^2 - 4(9)(16) < 0 \\Rightarrow b^2 < 576 \\Rightarrow b < 24$. Greatest positive integer: $b = 23$.\n\n**The Full Solution:**\nNo real solutions means the discriminant is negative:\n$b^2 - 4ac < 0$\n$b^2 - 4(9)(16) < 0$\n$b^2 < 576$\n$|b| < 24$.\n\nSince $b$ is a positive integer with $b < 24$ (strict), the greatest possible value is $b = 23$.\n\nVerification: $b = 23$: $23^2 = 529 < 576$ \\checkmark. $b = 24$: $24^2 = 576 \\not< 576$ (gives one real solution, not zero).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — uses $b = 24$, but $b = 24$ makes the discriminant exactly $0$ (one real solution).\n* Choice C: \"applies the inverse operation\" — returns $b^2 = 576$ instead of $b$.\n* Choice D: \"wrong base\" — doubles $24$ from a misapplied square-root step.\n\n**Test Day Takeaway:** No real solutions means discriminant $< 0$ (strict). When the bound is itself an integer, the greatest valid integer is one less.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A circle in the $xy$-plane has its center at $(-3, 4)$. Line $\\ell$ is tangent to this circle at the point $(5, -1)$. Which of the following points also lies on line $\\ell$?",
  choices: [
    // distractor: uses the tangent point as a y-intercept and reads off the wrong point
    { id: "A", text: "$(0, -1)$" },
    // distractor: swaps the radius and tangent slopes
    { id: "B", text: "$(5, 4)$" },
    { id: "C", text: "$(10, 7)$" },
    // distractor: names the circle's center, which is not on the tangent line
    { id: "D", text: "$(-3, 4)$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Tangent Line to a Circle**\n\n**Choice C is correct.**\n\n**The Fast Way (~50s):** Radius slope $= \\dfrac{-1 - 4}{5 - (-3)} = \\dfrac{-5}{8}$. Tangent slope $= \\dfrac{8}{5}$. Line through $(5, -1)$: $y + 1 = \\tfrac{8}{5}(x - 5)$. At $x = 10$: $y = -1 + \\tfrac{8}{5}(5) = -1 + 8 = 7$, so $(10, 7)$ lies on it.\n\n**The Full Solution:**\nThe radius from $(-3, 4)$ to $(5, -1)$ has slope $\\dfrac{-1 - 4}{5 + 3} = -\\dfrac{5}{8}$.\nThe tangent line is perpendicular to the radius, so its slope is the negative reciprocal: $\\dfrac{8}{5}$.\nUsing point-slope through $(5, -1)$:\n$y + 1 = \\dfrac{8}{5}(x - 5)$.\nTest $(10, 7)$: $7 + 1 = \\dfrac{8}{5}(10 - 5) \\Rightarrow 8 = \\dfrac{8}{5}(5) = 8$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: reads $(0, -1)$ by treating the $y$-value of the tangent point as a $y$-intercept.\n* Choice B: swaps the radius and tangent slopes, landing on a point off the line.\n* Choice D: names the circle's center, which lies on the radius, not the tangent.\n\n**Test Day Takeaway:** A tangent line is perpendicular to the radius at the point of tangency. Take the negative reciprocal of the radius slope, then build the line through the tangent point.",
  skills: ["tangent-lines", "circle-equations"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$320$ is what percent greater than $40$?",
  choices: [
    // distractor: applies inverse op — divides the difference by 320 instead of 40
    { id: "A", text: "$87.5\\%$" },
    // distractor: stops one step early — reports the raw difference 320 - 40 = 280
    { id: "B", text: "$280\\%$" },
    { id: "C", text: "$700\\%$" },
    // distractor: wrong base — computes 320/40 × 100 (percent OF, not percent GREATER)
    { id: "D", text: "$800\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent Greater Than**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Percent greater $= \\dfrac{320 - 40}{40} \\times 100 = \\dfrac{280}{40} \\times 100 = 7 \\times 100 = 700\\%$.\n\n**The Full Solution:**\n\"$A$ is what percent greater than $B$\" means $\\dfrac{A - B}{B} \\times 100$.\n$\\dfrac{320 - 40}{40} \\times 100 = \\dfrac{280}{40} \\times 100 = 7 \\times 100 = 700\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — divides by $320$ instead of $40$, getting $\\dfrac{280}{320} \\times 100 = 87.5\\%$.\n* Choice B: \"stops one step early\" — reports the raw difference $280$ as a percent.\n* Choice D: \"wrong base\" — computes $\\dfrac{320}{40} \\times 100 = 800\\%$, which is \"percent OF,\" not \"percent GREATER.\"\n\n**Test Day Takeaway:** \"Percent greater\" means $\\dfrac{\\text{difference}}{\\text{base}} \\times 100$; the base is the number after \"than.\"",
  skills: ["percents", "word-problems"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The graph of $y = 2x^2 + bx + c$ is shown, where $b$ and $c$ are constants. The parabola has its vertex at $(1, -8)$ and passes through the points $(0, -6)$ and $(2, -6)$. What is the value of $bc$?",
  diagram: { type: "quadraticVertex", params: {
    vertex: [1, -8], a: 2, showPoints: [[0, -6], [2, -6]], showVertex: true
  } },
  correctAnswer: "24",
  explanation: "**SAT Pattern: Quadratic Coefficients from Graph**\n\n**The correct answer is $24$.**\n\n**The Fast Way (~30s):** The $y$-intercept $(0, -6)$ gives $c = -6$. The axis of symmetry is $x = 1$, so $-\\dfrac{b}{2(2)} = 1 \\Rightarrow b = -4$. Then $bc = (-4)(-6) = 24$.\n\n**The Full Solution:**\nThe $y$-intercept is the constant term: at $x = 0$, $y = c = -6$.\nThe axis of symmetry of $y = 2x^2 + bx + c$ is $x = -\\dfrac{b}{2a} = -\\dfrac{b}{4}$. The vertex is at $x = 1$ (and the symmetric points $(0, -6)$ and $(2, -6)$ confirm the axis is $x = 1$), so:\n$-\\dfrac{b}{4} = 1 \\Rightarrow b = -4$.\nTherefore $bc = (-4)(-6) = 24$.\n\nVerification: $y = 2x^2 - 4x - 6$ gives $y(1) = 2 - 4 - 6 = -8$ (vertex) and $y(0) = -6$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reading $c$ from the vertex ($-8$) instead of the $y$-intercept ($-6$).\n* Dropping the sign of $b$ and reporting $bc = -24$.\n* Forgetting the factor of $a = 2$ in the axis-of-symmetry formula.\n\n**Test Day Takeaway:** The $y$-intercept gives $c$ directly; the axis of symmetry $x = -\\tfrac{b}{2a}$ gives $b$. Watch the leading coefficient $a$.",
  skills: ["quadratic-equations", "vertex-form"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $\\log_2(x - 1) + \\log_2(x + 5) = 4$ and $x > 1$, what is the value of $x$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~30s):** $\\log_2[(x - 1)(x + 5)] = 4 \\Rightarrow (x - 1)(x + 5) = 16 \\Rightarrow x^2 + 4x - 21 = 0 \\Rightarrow (x - 3)(x + 7) = 0$. Since $x > 1$: $x = 3$.\n\n**The Full Solution:**\nApply the log product rule: $\\log_2(x - 1) + \\log_2(x + 5) = \\log_2[(x - 1)(x + 5)] = 4$.\nSo $(x - 1)(x + 5) = 2^4 = 16$.\n$x^2 + 5x - x - 5 = 16$\n$x^2 + 4x - 21 = 0$\n$(x + 7)(x - 3) = 0$\n$x = -7$ or $x = 3$.\nSince $x > 1$: $x = 3$.\n\nVerification: $\\log_2(2) + \\log_2(8) = 1 + 3 = 4$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting to combine the logs with the product rule.\n* Accepting $x = -7$, which violates the domain $x > 1$.\n\n**Test Day Takeaway:** $\\log_b(A) + \\log_b(B) = \\log_b(AB)$. Convert to an exponential equation, then discard solutions outside the domain.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "An orchestra hall sells main-floor seats for $\\$45$ each and balcony seats for $\\$25$ each. For one performance, $50$ seats were sold for a total of $\\$1{,}950$. How many balcony seats were sold?",
  choices: [
    { id: "A", text: "$15$" },
    // distractor: stops one step early — reports the main-floor seats instead of balcony
    { id: "B", text: "$35$" },
    // distractor: wrong base — arithmetic slip in the substitution
    { id: "C", text: "$20$" },
    // distractor: applies inverse op — swaps the two seat prices
    { id: "D", text: "$30$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Let $m$ = main-floor, $b$ = balcony. $m + b = 50$ and $45m + 25b = 1950$. Substitute $m = 50 - b$: $45(50 - b) + 25b = 1950 \\Rightarrow 2250 - 20b = 1950 \\Rightarrow b = 15$.\n\n**The Full Solution:**\nLet $m$ = main-floor seats and $b$ = balcony seats.\n$m + b = 50$\n$45m + 25b = 1950$\n\nFrom the first equation: $m = 50 - b$.\nSubstitute:\n$45(50 - b) + 25b = 1950$\n$2250 - 45b + 25b = 1950$\n$2250 - 20b = 1950$\n$-20b = -300$\n$b = 15$.\n\nVerification: $m = 35$. Total seats: $35 + 15 = 50$ \\checkmark. Total revenue: $45(35) + 25(15) = 1575 + 375 = 1950$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — reports $m = 35$ (main-floor) instead of balcony seats.\n* Choice C: \"wrong base\" — an arithmetic slip in the substitution.\n* Choice D: \"applies the inverse operation\" — swaps the two seat prices.\n\n**Test Day Takeaway:** Define variables, substitute the count equation into the money equation, and report the quantity the question names.",
  skills: ["systems-of-equations", "word-problems"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "An operator models the clarity score of a water-treatment tank as $C(d) = -0.4(d - 12)^2 + 90$, where $d$ is the coagulant dosage, in milligrams per liter. Which of the following is the best interpretation of the vertex of the graph of $C(d)$ in the $dC$-plane in this context?",
  choices: [
    // distractor: swaps the coordinates of the vertex
    { id: "A", text: "The maximum clarity score of approximately $12$ occurs at a dosage of $90$ milligrams per liter." },
    { id: "B", text: "The maximum clarity score of approximately $90$ occurs at a dosage of $12$ milligrams per liter." },
    // distractor: wrong direction — calls the maximum a minimum
    { id: "C", text: "The minimum clarity score of approximately $90$ occurs at a dosage of $12$ milligrams per liter." },
    // distractor: wrong base — uses the leading coefficient as the dosage
    { id: "D", text: "The maximum clarity score of approximately $90$ occurs at a dosage of $0.4$ milligrams per liter." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Quadratic Vertex Form Application**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Vertex of $C(d) = -0.4(d - 12)^2 + 90$ is $(12, 90)$. Since $a = -0.4 < 0$, the vertex is a MAXIMUM: clarity score $\\approx 90$ at dosage $12$ mg/L.\n\n**The Full Solution:**\nVertex form $C(d) = a(d - h)^2 + k$ has vertex $(h, k) = (12, 90)$. Because $a = -0.4 < 0$, the parabola opens downward and the vertex is the MAXIMUM. The greatest clarity score, about $90$, is achieved at a dosage of $12$ mg/L.\n\nVerification: $C(12) = 0 + 90 = 90$; $C(8) = -0.4(16) + 90 = 83.6$ (lower); $C(16) = 83.6$ (also lower, symmetric) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"swaps coordinates\" — reverses the dosage and clarity-score values of the vertex.\n* Choice C: \"wrong direction\" — with $a < 0$ the vertex is a max, not a min.\n* Choice D: \"wrong base\" — uses the leading coefficient $0.4$ as the dosage.\n\n**Test Day Takeaway:** In vertex form, $h$ is the optimal input and $k$ the optimal output; the sign of $a$ tells you whether the vertex is a max ($a < 0$) or a min ($a > 0$).",
  skills: ["function-interpretation", "quadratic-equations"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = (x - 3)^2 + 5$. The function $g$ is defined by $g(x) = f(x + 6) - 4$. For what value of $x$ does $g$ attain its minimum?",
  choices: [
    // distractor: wrong sign — shifts in the wrong direction (x = 3 + 6)
    { id: "A", text: "$9$" },
    { id: "B", text: "$-3$" },
    // distractor: stops one step early — gives the vertex of f without applying the shift
    { id: "C", text: "$3$" },
    // distractor: off-by-one — confuses the y-shift -4 with the x-shift
    { id: "D", text: "$-4$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $f$ has its minimum at $x = 3$. $g(x) = f(x + 6) - 4$ shifts $f$ left by $6$, so $g$ has its minimum at $x = 3 - 6 = -3$.\n\n**The Full Solution:**\nThe parabola $f(x) = (x - 3)^2 + 5$ has its minimum at $x = 3$.\nThe transformation $g(x) = f(x + 6) - 4$ shifts $f$ LEFT by $6$ (the $+6$ inside the function) and DOWN by $4$. The horizontal shift moves the minimum from $x = 3$ to $x = 3 - 6 = -3$; the vertical shift does not change the $x$-coordinate.\n\nVerification: $g(x) = ((x + 6) - 3)^2 + 5 - 4 = (x + 3)^2 + 1$, vertex at $x = -3$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — shifts right ($x = 3 + 6 = 9$) instead of left.\n* Choice C: \"stops one step early\" — gives the vertex of $f$ without the shift.\n* Choice D: \"off-by-one\" — confuses the $y$-shift $-4$ with the $x$-shift.\n\n**Test Day Takeaway:** $f(x + c)$ moves the graph LEFT by $c$. Vertical shifts never change the $x$-coordinate of a maximum or minimum.",
  skills: ["function-interpretation", "vertex-form"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In $2018$, Bao's savings were $18\\%$ greater than in $2017$, and in $2019$ Bao's savings were $15\\%$ greater than in $2018$. If Bao's savings in $2019$ were $y$ times the savings in $2017$, what is the value of $y$?",
  choices: [
    { id: "A", text: "$1.3570$" },
    // distractor: adds the two percents (18 + 15 = 33) instead of compounding
    { id: "B", text: "$1.3300$" },
    // distractor: treats the combined growth as a raw decimal sum
    { id: "C", text: "$0.3300$" },
    // distractor: multiplies the percents (0.18 × 0.15) and adds 1
    { id: "D", text: "$1.0270$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Successive Percent Changes**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Each increase is a multiplier: $1.18$ then $1.15$. Total factor $= 1.18 \\times 1.15 = 1.3570$.\n\n**The Full Solution:**\nLet $S$ be the $2017$ savings. A $18\\%$ increase multiplies by $1.18$, giving $1.18S$ in $2018$. A further $15\\%$ increase multiplies by $1.15$:\n$1.15 \\times 1.18S = 1.3570S$.\nSo the $2019$ savings are $1.3570$ times the $2017$ savings, and $y = 1.3570$.\n\n**Why the wrong answers are tempting:**\n* Choice B: adds the percents ($18 + 15 = 33$) to get $1.33$, ignoring compounding.\n* Choice C: reports just the combined percent change as a decimal ($0.33$).\n* Choice D: multiplies the rates ($0.18 \\times 0.15$) and adds $1$.\n\n**Test Day Takeaway:** Successive percent changes MULTIPLY their factors; they do not add. Convert each \"$p\\%$ greater\" to the multiplier $1 + \\tfrac{p}{100}$.",
  skills: ["percents", "successive-percent"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = -a^x + b$, where $a$ and $b$ are constants. In the $xy$-plane, the graph of $y = f(x) - 7$ has a $y$-intercept at $(0, -5)$. The product of $a$ and $b$ is $18$. What is the value of $a$?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Exponential Function with Two Conditions**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~40s):** The $y$-intercept of $y = f(x) - 7$ is at $x = 0$: $f(0) - 7 = -5 \\Rightarrow f(0) = 2$. Since $f(0) = -a^0 + b = -1 + b$, we get $b = 3$. Then $ab = 18 \\Rightarrow a = 6$.\n\n**The Full Solution:**\nThe $y$-intercept occurs at $x = 0$, so $f(0) - 7 = -5$, giving $f(0) = 2$.\nEvaluate $f(0) = -a^0 + b = -1 + b$. Setting this equal to $2$:\n$-1 + b = 2 \\Rightarrow b = 3$.\nUse the product condition $ab = 18$:\n$a \\cdot 3 = 18 \\Rightarrow a = 6$.\n\nVerification: $a = 6$, $b = 3$. Then $f(0) = -6^0 + 3 = -1 + 3 = 2$, and $f(0) - 7 = -5$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting that $a^0 = 1$, which sets up $f(0) = -1 + b$.\n* Solving for $b$ and reporting it instead of $a$.\n\n**Test Day Takeaway:** Evaluate at $x = 0$ to pin one constant (any base to the $0$ power is $1$), then use the product condition to recover the other.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "An archer recorded the following scores on six rounds:\n\n$$42, \\; 38, \\; 50, \\; 45, \\; 33, \\; 47$$\n\nWhat is the range of these scores?",
  choices: [
    // distractor: wrong base — reports the maximum value instead of the range
    { id: "A", text: "$50$" },
    { id: "B", text: "$17$" },
    // distractor: off-by-one — subtracts the first value from the maximum (50 - 42)
    { id: "C", text: "$8$" },
    // distractor: applies inverse op — computes the mean instead of the range
    { id: "D", text: "$42.5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Range $=$ maximum $-$ minimum $= 50 - 33 = 17$.\n\n**The Full Solution:**\nThe range of a data set is the largest value minus the smallest value. Here the maximum is $50$ and the minimum is $33$, so the range is $50 - 33 = 17$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — reports the maximum value ($50$) instead of the spread.\n* Choice C: \"off-by-one\" — subtracts the first value from the maximum ($50 - 42$) rather than the minimum.\n* Choice D: \"applies the inverse operation\" — computes the mean of the scores instead of the range.\n\n**Test Day Takeaway:** Range $=$ max $-$ min. Identify the extreme values first; the order of the list does not matter.",
  skills: ["statistics"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the horizontal line $y = 2$ intersects the parabola $y = x^2 + 5x + a$ at exactly one point, where $a$ is a constant. What is the value of $a$?",
  correctAnswer: "8.25",
  explanation: "**SAT Pattern: Quadratic — Discriminant Test**\n\n**The correct answer is $8.25$.**\n\n**The Fast Way (~30s):** Set $x^2 + 5x + a = 2 \\Rightarrow x^2 + 5x + (a - 2) = 0$. One intersection means discriminant $= 0$: $5^2 - 4(a - 2) = 0 \\Rightarrow 25 = 4(a - 2) \\Rightarrow a = 2 + \\tfrac{25}{4} = 8.25$.\n\n**The Full Solution:**\nThe line and parabola meet where their $y$-values are equal:\n$x^2 + 5x + a = 2$\n$x^2 + 5x + (a - 2) = 0$.\nExactly one intersection means this quadratic has a single (repeated) real root, so its discriminant is $0$:\n$5^2 - 4(1)(a - 2) = 0$\n$25 - 4a + 8 = 0$\n$4a = 33$\n$a = 8.25$.\n\nVerification: with $a = 8.25$, $x^2 + 5x + 6.25 = 0 \\Rightarrow (x + 2.5)^2 = 0$, a single solution at $x = -2.5$, where $y = 2$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting to move the $2$ over, leaving the constant term as $a$ instead of $a - 2$.\n* Setting the discriminant greater than $0$ (two points) or omitting the factor of $4$ in $4ac$.\n* Reporting the repeated root $-2.5$ instead of the requested constant $a$.\n\n**Test Day Takeaway:** A line meets a parabola exactly once when, after setting them equal and collecting into a quadratic, the discriminant equals $0$.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, a parabola has vertex $(3, -5)$ and passes through the point $(5, 7)$. The equation of the parabola is written as $y = ax^2 + bx + c$, where $a$, $b$, and $c$ are constants. What is the value of $c$?",
  correctAnswer: "22",
  explanation: "**SAT Pattern: Vertex Form to Find y-Intercept**\n\n**The correct answer is $22$.**\n\n**The Fast Way (~40s):** Vertex form: $y = a(x - 3)^2 - 5$. Use $(5, 7)$: $7 = a(2)^2 - 5 \\Rightarrow 4a = 12 \\Rightarrow a = 3$. Then $c = y(0) = 3(0 - 3)^2 - 5 = 27 - 5 = 22$.\n\n**The Full Solution:**\nStart from vertex form $y = a(x - 3)^2 - 5$.\nSubstitute the point $(5, 7)$:\n$7 = a(5 - 3)^2 - 5 = 4a - 5 \\Rightarrow 4a = 12 \\Rightarrow a = 3$.\nSo $y = 3(x - 3)^2 - 5$. The constant $c$ equals the $y$-intercept, the value at $x = 0$:\n$c = 3(0 - 3)^2 - 5 = 3(9) - 5 = 27 - 5 = 22$.\n\nVerification (expanded form): $y = 3(x^2 - 6x + 9) - 5 = 3x^2 - 18x + 22$, so $c = 22$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting the vertex $y$-value $-5$ as $c$.\n* Forgetting to square the difference when substituting the point.\n\n**Test Day Takeaway:** Find $a$ from vertex form using the given point, then evaluate at $x = 0$ to get the $y$-intercept $c$.",
  skills: ["quadratic-equations", "vertex-form"]
}
      ]
    }
  ]
};

export default practiceTest10;
