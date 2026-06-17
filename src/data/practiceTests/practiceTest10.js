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
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Each extra mile adds $\\$2.75$, and the pickup fee stays. So $4$ more miles adds $4 \\cdot \\$2.75 = \\$11$: new total $= \\$26.75 + \\$11 = \\$37.75$.\n\n**The Full Solution:**\nStep 1: The total for the original ride is $\\$26.75$. The pickup fee is charged once and does not change for a longer ride.\nStep 2: Only the per-mile part grows. Four more miles cost $4 \\times \\$2.75 = \\$11$.\nStep 3: Add that to the original total: $\\$26.75 + \\$11 = \\$37.75$.\n\nYou never need to find $m$ — the shift only touches the per-mile term.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$30.75$): adds $\\$4$ directly, as if each extra mile cost $\\$1$ instead of $\\$2.75$.\n* Choice C ($\\$44.75$): uses the flat fee $\\$4.50$ as the per-mile rate, giving $\\$26.75 + 4 \\cdot \\$4.50 = \\$44.75$.\n* Choice D ($\\$55.75$): adds the two rates ($\\$2.75 + \\$4.50 = \\$7.25$) and uses that as the per-mile rate.\n\n**Test Day Takeaway:** In a linear cost = (rate $\\times$ quantity) + fixed fee, changing the quantity moves only the rate-times-quantity term. The fixed fee never shifts.",
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
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** In $g(t) = 250 - 15t$, the coefficient of $t$ is the rate of change. The $-15$ means $15$ gallons leave each hour.\n\n**The Full Solution:**\nStep 1: The model has the form $g(t) = b + mt$ with intercept $b = 250$ and slope $m = -15$.\nStep 2: The slope is the change in volume per hour. Since it is negative, the tank loses $15$ gallons every hour.\n\n**Why the wrong answers are tempting:**\n* Choice B: confuses the slope with the starting amount — the initial value is the $250$, not the $15$.\n* Choice C: treats $15$ as a time when the tank empties; the tank actually drains in $\\frac{250}{15} \\approx 16.7$ hours.\n* Choice D: inverts the rate, reading $15$ as \"hours per gallon\" instead of \"gallons per hour.\"\n\n**Test Day Takeaway:** In $f(x) = b + mx$, the coefficient of the variable is the rate of change per unit; the constant is the starting value.",
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
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Cross-multiply: $21x = 126$, so $x = 6$. The question wants $x + 4 = 10$.\n\n**The Full Solution:**\nStep 1: From $\\dfrac{3x}{14} = \\dfrac{9}{7}$, multiply both sides by $14$: $3x = 14 \\cdot \\dfrac{9}{7} = 2 \\cdot 9 = 18$.\nStep 2: Divide by $3$: $x = 6$.\nStep 3: The question asks for $x + 4$, not $x$: $6 + 4 = 10$.\nCheck: $\\dfrac{3(6)}{14} = \\dfrac{18}{14} = \\dfrac{9}{7}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): solves for $x$ but forgets the $+4$ the question asks for.\n* Choice B ($2$): subtracts $4$ from $x$ instead of adding.\n* Choice D ($18$): stops at $3x = 18$ without dividing by $3$.\n\n**Test Day Takeaway:** Re-read the final clause before bubbling in. The question often wants a value built from the variable, not the variable itself.",
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
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $0.35 \\times \\text{total} = 1{,}050$, so total $= \\dfrac{1{,}050}{0.35} = 3{,}000$.\n\n**The Full Solution:**\nStep 1: Let $T$ be the total surveyed. Then $0.35 \\cdot T = 1{,}050$.\nStep 2: Divide both sides by $0.35$: $T = \\dfrac{1{,}050}{0.35} = 3{,}000$.\nCheck: $35\\%$ of $3{,}000 = 0.35 \\cdot 3{,}000 = 1{,}050$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($368$): multiplies $1{,}050 \\cdot 0.35 = 367.5$ instead of dividing.\n* Choice B ($1{,}615$): divides by the complement $0.65$, as if $1{,}050$ were the other group.\n* Choice D ($30{,}000$): divides by $0.035$ instead of $0.35$ — a decimal-place slip.\n\n**Test Day Takeaway:** When a percent of an unknown whole is given, divide the part by the percent as a decimal to recover the whole.",
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
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Sort the six values: $5, 8, 10, 12, 15, 20$. With an even count, the median is the average of the two middle values: $\\dfrac{10 + 12}{2} = 11$.\n\n**The Full Solution:**\nStep 1: Adding $20$ gives the data set $12, 8, 15, 10, 5, 20$.\nStep 2: Order it: $5, 8, 10, 12, 15, 20$.\nStep 3: Six values, so the median is the average of the $3$rd and $4$th: $\\dfrac{10 + 12}{2} = 11$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): reports the original median without recomputing after the new value was added.\n* Choice C ($12.5$): averages the minimum and maximum, $\\dfrac{5 + 20}{2}$, instead of the two middle values.\n* Choice D ($20$): mistakes the newly added value for the median.\n\n**Test Day Takeaway:** Always sort first. For an even count, the median is the average of the two central values.",
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
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"Of those who oppose\" sets the denominator to the Opposes total, $155$. Under $30$ who oppose is $60$. Fraction $= \\dfrac{60}{155}$.\n\n**The Full Solution:**\nStep 1: The phrase \"of those who oppose the policy\" restricts the group to the Opposes column, whose total is $155$.\nStep 2: Within that column, the under-$30$ count is $60$.\nStep 3: The fraction is $\\dfrac{60}{155}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: uses $160$, the Under-$30$ row total, as the denominator — that conditions on age, not on opposing.\n* Choice C: uses $400$, the grand total, ignoring the \"of those who oppose\" condition.\n* Choice D: keeps the right denominator but uses $95$, the $30$-and-over opposers, instead of $60$.\n\n**Test Day Takeaway:** In conditional probability, the words after \"of those who\" fix your denominator — pull only that group's total.",
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
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"Triples\" means base $3$; \"every $4$ hours\" means the exponent equals $1$ at $t = 4$, so it is $\\dfrac{t}{4}$: $A(t) = 200(3)^{\\frac{t}{4}}$.\n\n**The Full Solution:**\nStep 1: The general model is $A(t) = A_0 \\cdot b^{\\frac{t}{d}}$, with starting size $A_0 = 200$, multiplier $b = 3$, and period $d = 4$ hours.\nStep 2: Substitute: $A(t) = 200(3)^{\\frac{t}{4}}$.\nCheck: at $t = 4$, $A = 200(3)^1 = 600$; at $t = 8$, $A = 200(3)^2 = 1800$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: uses exponent $4t$ instead of $\\dfrac{t}{4}$ — this triples every quarter-hour, far too fast.\n* Choice C: swaps base and period, putting $4$ as the multiplier and $3$ in the denominator.\n* Choice D: models linear growth, $200 + 3t$, when the situation multiplies.\n\n**Test Day Takeaway:** \"Multiplies by $b$ every $d$ periods\" gives $A_0 \\cdot b^{t/d}$ — the period goes in the denominator of the exponent.",
  skills: ["exponential-functions"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $f(x) = 2x^2 - 3x + 4$ and $g(x) = x + 1$, what is the value of $f(g(2))$?",
  correctAnswer: "13",
  explanation: "**SAT Pattern: Function Composition**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~15s):** Inner first: $g(2) = 2 + 1 = 3$. Then $f(3) = 2(9) - 9 + 4 = 13$.\n\n**The Full Solution:**\nStep 1: Evaluate the inner function: $g(2) = 2 + 1 = 3$.\nStep 2: Feed that into the outer function: $f(3) = 2(3)^2 - 3(3) + 4 = 18 - 9 + 4 = 13$.\n\n**Common Mistakes:** Evaluating $f(2) = 6$ first and then $g(6) = 7$ reverses the order. Computing $g(f(2))$ instead of $f(g(2))$ gives the same reversal trap.\n\n**Test Day Takeaway:** For $f(g(x))$, work the inside out — evaluate $g$ first, then substitute its result into $f$.",
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
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $\\sin 42^\\circ = \\dfrac{\\text{opposite}}{\\text{hypotenuse}} = \\dfrac{14}{h}$, so $h = \\dfrac{14}{\\sin 42^\\circ}$.\n\n**The Full Solution:**\nStep 1: For the $42^\\circ$ angle, the given side ($14$) is opposite and $h$ is the hypotenuse.\nStep 2: Sine ties opposite to hypotenuse: $\\sin 42^\\circ = \\dfrac{14}{h}$.\nStep 3: Solve for $h$: $h = \\dfrac{14}{\\sin 42^\\circ}$.\n\n**Why the wrong answers are tempting:**\n* Choice B: uses cosine, which relates the adjacent leg, not the side opposite the $42^\\circ$ angle.\n* Choice C: multiplies by $\\sin 42^\\circ$; since $\\sin 42^\\circ < 1$, this gives less than $14$ — impossible, because the hypotenuse must exceed any leg.\n* Choice D: doubles the error — cosine and multiplication instead of sine and division.\n\n**Test Day Takeaway:** SOH: $\\sin = \\dfrac{\\text{Opposite}}{\\text{Hypotenuse}}$. To get the hypotenuse from the opposite leg, divide that leg by $\\sin$.",
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
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (4)^2 (7) = 112\\pi$, so $k = 112$.\n\n**The Full Solution:**\nStep 1: A right circular cylinder has volume $V = \\pi r^2 h$.\nStep 2: Substitute $r = 4$ and $h = 7$: $V = \\pi (4)^2 (7) = \\pi (16)(7) = 112\\pi$.\nStep 3: Matching $V = k\\pi$ gives $k = 112$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($28$): forgets to square the radius, computing $\\pi r h = 28\\pi$.\n* Choice B ($196$): squares the height instead of the radius, $\\pi (4)(49) = 196\\pi$.\n* Choice D ($448$): uses the diameter $8$ as the radius, $\\pi (8)^2 (7) = 448\\pi$.\n\n**Test Day Takeaway:** For a cylinder, square the radius first, then multiply by the height: $V = \\pi r^2 h$ is on the Reference Sheet.",
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
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Slope $= \\dfrac{7 - (-1)}{6 - 2} = \\dfrac{8}{4} = 2$. Plug in $(2, -1)$: $-1 = 2(2) + b \\Rightarrow b = -5$, so $y = 2x - 5$.\n\n**The Full Solution:**\nStep 1: Slope $m = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{7 - (-1)}{6 - 2} = \\dfrac{8}{4} = 2$.\nStep 2: Use point-slope at $(2, -1)$: $y + 1 = 2(x - 2) \\Rightarrow y + 1 = 2x - 4 \\Rightarrow y = 2x - 5$.\nCheck with $(6, 7)$: $2(6) - 5 = 7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: a sign error on the intercept gives $+3$ instead of $-5$.\n* Choice C: uses the reciprocal $\\dfrac{1}{2}$ as the slope instead of $2$.\n* Choice D: flips the slope sign to $-2$ instead of $+2$.\n\n**Test Day Takeaway:** Find the slope first, then substitute one point into $y = mx + b$ to solve for $b$.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A store sells two types of gift cards. Small gift cards cost $\\$15$ each and large gift cards cost $\\$25$ each. On Monday, the store sold a total of $30$ gift cards for a total of $\\$550$. How many large gift cards were sold?",
  correctAnswer: "10",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~25s):** Let $\\ell$ be large cards. Then $s + \\ell = 30$ and $15s + 25\\ell = 550$. Substitute $s = 30 - \\ell$: $15(30 - \\ell) + 25\\ell = 550 \\Rightarrow 450 + 10\\ell = 550 \\Rightarrow \\ell = 10$.\n\n**The Full Solution:**\nStep 1: Let $s$ be small cards and $\\ell$ be large cards: $s + \\ell = 30$ and $15s + 25\\ell = 550$.\nStep 2: From the count equation, $s = 30 - \\ell$.\nStep 3: Substitute: $15(30 - \\ell) + 25\\ell = 450 - 15\\ell + 25\\ell = 450 + 10\\ell = 550$.\nStep 4: So $10\\ell = 100$ and $\\ell = 10$.\nCheck: $s = 20$, $\\ell = 10$. Count $20 + 10 = 30$; cost $15(20) + 25(10) = 300 + 250 = 550$. $\\checkmark$\n\n**Common Mistakes:** Swapping the prices to $25s + 15\\ell = 550$. Solving for $s = 20$ and reporting it when the question asks for the large cards.\n\n**Test Day Takeaway:** Label variables explicitly, write one equation for the count and one for the total cost, then substitute to isolate the variable the question names.",
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
  explanation: "**SAT Pattern: Residual**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Predicted at $x=6$ is $5.8(6)+42=76.8$. Residual $=$ actual $-$ predicted $=82-76.8=5.2$, which is choice B.\n\n**The Full Solution:**\nStep 1: Plug $x=6$ into the line of best fit: $y=5.8(6)+42=34.8+42=76.8$.\nStep 2: Residual $=$ actual $-$ predicted $=82-76.8=5.2$.\nA positive residual means the student scored above what the line predicted.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5.2$): reverses the formula as predicted $-$ actual, flipping the sign.\n* Choice C ($6.8$): uses $5.8(7)+42$ by sliding the hour count to $7$.\n* Choice D ($76$): reports the predicted value (rounded from $76.8$) instead of the residual.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted. A positive residual means the point sits above the line.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $4(2x - 1) + 5 = 3x + 16$, what is the value of $x$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~20s):** Distribute the $4$, combine constants, and collect: $8x-4+5=3x+16 \\Rightarrow 8x+1=3x+16 \\Rightarrow 5x=15 \\Rightarrow x=3$.\n\n**The Full Solution:**\nStep 1: Distribute: $4(2x-1)+5=8x-4+5$.\nStep 2: Combine constants on the left: $8x+1=3x+16$.\nStep 3: Subtract $3x$ and $1$: $5x=15$, so $x=3$.\n\n**Verification:** Left side $=4(2(3)-1)+5=4(5)+5=25$. Right side $=3(3)+16=25$. $\\checkmark$\n\n**Common Mistakes:** Distributing as $8x-1$ instead of $8x-4$; mishandling $-4+5=1$ as $-1$.\n\n**Test Day Takeaway:** Distribute first, combine like terms second, isolate the variable last.",
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
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Raise each factor: $(3x^2y^3)^2=9x^4y^6$ and $(2xy^{-1})^3=8x^3y^{-3}$. Multiply for $72x^7y^3$, then divide by $6x^4y^2$ to get $12x^3y$, which is choice A.\n\n**The Full Solution:**\nStep 1: Power of a product on each factor: $(3x^2y^3)^2=9x^4y^6$ and $(2xy^{-1})^3=8x^3y^{-3}$.\nStep 2: Multiply the numerator factors: $9x^4y^6 \\cdot 8x^3y^{-3}=72x^7y^3$ (add exponents: $4+3=7$, $6+(-3)=3$).\nStep 3: Divide by $6x^4y^2$: $\\frac{72x^7y^3}{6x^4y^2}=12x^{7-4}y^{3-2}=12x^3y$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($12x^3y^4$): adds the $y$ exponents as $6+3$ instead of $6+(-3)$, dropping the negative.\n* Choice C ($6x^3y$): divides $\\frac{72}{6}$ as $6$ instead of $12$.\n* Choice D ($12x^7y$): forgets to subtract the $x^4$ in the denominator.\n\n**Test Day Takeaway:** Apply the power to each factor first, then add exponents when multiplying same bases and subtract when dividing.",
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
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Exactly one real solution means the discriminant is $0$: $b^2-4(2)(18)=0 \\Rightarrow b^2=144 \\Rightarrow b=12$ since $b>0$. That is choice C.\n\n**The Full Solution:**\nStep 1: For $ax^2+bx+c=0$, one real solution requires $b^2-4ac=0$.\nStep 2: Substitute $a=2$, $c=18$: $b^2-4(2)(18)=b^2-144=0$.\nStep 3: Solve: $b^2=144$, so $b=\\pm 12$. Since $b>0$, $b=12$.\n\n**Verification:** $2x^2+12x+18=0 \\Rightarrow x^2+6x+9=0 \\Rightarrow (x+3)^2=0$, a single root at $x=-3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): solves $b^2=4 \\cdot \\frac{18}{2}=36$ by mishandling the $4ac$ term.\n* Choice B ($10$): miscomputes $4(2)(18)$ as $100$.\n* Choice D ($14$): adds an extra term to $b^2=144$, overshooting $12$.\n\n**Test Day Takeaway:** Exactly one real solution means the discriminant $b^2-4ac=0$ — set it to zero and solve.",
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
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Vertex form $y=a(x-3)^2-4$. Plug in $(5,8)$: $8=4a-4 \\Rightarrow a=3$. At $x=0$: $y=3(9)-4=23$, so the intercept is $(0,23)$, choice A.\n\n**The Full Solution:**\nStep 1: With vertex $(3,-4)$, write $y=a(x-3)^2-4$.\nStep 2: Use the point $(5,8)$: $8=a(5-3)^2-4=4a-4$, so $4a=12$ and $a=3$.\nStep 3: Set $x=0$: $y=3(0-3)^2-4=3(9)-4=27-4=23$. The $y$-intercept is $(0,23)$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($(0,27)$): stops at $3(9)=27$ and forgets to subtract $4$.\n* Choice C ($(0,20)$): slips on the value of $a$, landing just short of $23$.\n* Choice D ($(0,32)$): inflates $a$ or mishandles the $-4$, overshooting $23$.\n\n**Test Day Takeaway:** Start from vertex form $y=a(x-h)^2+k$, use the second point to solve for $a$, then evaluate at $x=0$.",
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
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Test integer hours near the boundary: $C(5)=200(0.85)^5 \\approx 88.7 \\ge 80$, but $C(6) \\approx 75.4 < 80$. So it stays effective through $5$ complete hours, choice B.\n\n**The Full Solution:**\nStep 1: Set up the requirement $200(0.85)^t \\ge 80$, i.e. $(0.85)^t \\ge 0.4$.\nStep 2: Solve for the boundary: $t \\le \\frac{\\ln(0.4)}{\\ln(0.85)}=\\frac{-0.9163}{-0.1625} \\approx 5.64$.\nStep 3: The last whole hour at which $C \\ge 80$ is $t=5$; at $t=6$ the concentration drops below $80$. So $5$ complete hours.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): stops checking one integer too soon, before reaching $t=5$.\n* Choice C ($6$): rounds $5.64$ up, but $C(6) \\approx 75.4$ is already below $80$.\n* Choice D ($7$): treats the decay as far slower than $0.85$ per hour.\n\n**Test Day Takeaway:** For \"complete hours\" questions, evaluate integer inputs around the boundary and keep the largest one that still satisfies the inequality.",
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
  explanation: "**SAT Pattern: Polynomial Factoring with Given Factor**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Synthetic-divide by $x=4$ to get the quotient $2x^2+3x-2$, which factors as $(2x-1)(x+2)$. The complete factorization is $(x-4)(2x-1)(x+2)$, choice B.\n\n**The Full Solution:**\nStep 1: Synthetic division on coefficients $2,-5,-14,8$ with $x=4$: bring down $2$; $2 \\cdot 4=8$, $-5+8=3$; $3 \\cdot 4=12$, $-14+12=-2$; $-2 \\cdot 4=-8$, $8-8=0$. Quotient $2x^2+3x-2$, remainder $0$.\nStep 2: Factor $2x^2+3x-2$ by grouping. Find factors of $2 \\cdot (-2)=-4$ that add to $3$: those are $4$ and $-1$.\nStep 3: $2x^2+4x-x-2=2x(x+2)-1(x+2)=(2x-1)(x+2)$.\nStep 4: Combine: $(x-4)(2x-1)(x+2)$.\n\n**Verification:** $p(4)=128-80-56+8=0$ and $p(\\frac{1}{2})=\\frac{1}{4}-\\frac{5}{4}-7+8=0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x-4)(2x^2+3x-2)$): correct quotient, but the quadratic is left unfactored.\n* Choice C ($(x-4)(2x+1)(x-2)$): sign errors flip both binomial signs.\n* Choice D ($(x-4)(2x^2-3x+2)$): a sign slip in the synthetic division gives the wrong quotient.\n\n**Test Day Takeaway:** Use synthetic division to drop the degree by the known factor, then fully factor the quotient.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The system of equations below has solution $(x, y)$.\n\n$x + y = 3$\n$x^2 - y = 3$\n\nIf $x > 0$, what is the value of $y$?",
  correctAnswer: "1",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $1$.**\n\n**The Fast Way (~30s):** Solve the line for $y=3-x$, substitute into $x^2-(3-x)=3$: $x^2+x-6=0 \\Rightarrow (x+3)(x-2)=0$. Since $x>0$, $x=2$ and $y=3-2=1$.\n\n**The Full Solution:**\nStep 1: From $x+y=3$, $y=3-x$.\nStep 2: Substitute into $x^2-y=3$: $x^2-(3-x)=3 \\Rightarrow x^2+x-3=3 \\Rightarrow x^2+x-6=0$.\nStep 3: Factor: $(x+3)(x-2)=0$, so $x=-3$ or $x=2$. The constraint $x>0$ forces $x=2$.\nStep 4: Then $y=3-2=1$.\n\n**Verification:** $x+y=2+1=3$ and $x^2-y=4-1=3$. $\\checkmark$\n\n**Common Mistakes:** Taking $x=-3$ (which gives $y=6$) and ignoring $x>0$; sign slips when substituting $-(3-x)$.\n\n**Test Day Takeaway:** Solve the linear equation for one variable, substitute into the quadratic, then apply the given constraint to pick the valid root.",
  skills: ["systems-of-equations", "quadratic-equations"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, circle $C$ has equation $(x - 3)^2 + (y + 2)^2 = 25$. Line $\\ell$ has equation $y = \\dfrac{3}{4}x + b$ and is tangent to circle $C$. If $b > 0$, what is the value of $b$?",
  correctAnswer: "2",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~45s):** A tangent line sits exactly one radius from the center. Distance from $(3,-2)$ to $3x-4y+4b=0$ equals $5$: $\\frac{|9+8+4b|}{5}=5 \\Rightarrow |17+4b|=25$. With $b>0$, $4b=8$, so $b=2$.\n\n**The Full Solution:**\nStep 1: The circle has center $(3,-2)$ and radius $5$. Tangency means the center-to-line distance equals $5$.\nStep 2: Rewrite the line in standard form: $y=\\frac{3}{4}x+b$ becomes $3x-4y+4b=0$.\nStep 3: Distance $=\\frac{|3(3)-4(-2)+4b|}{\\sqrt{9+16}}=\\frac{|17+4b|}{5}$. Set equal to $5$: $|17+4b|=25$.\nStep 4: $17+4b=25$ gives $b=2$; $17+4b=-25$ gives $b=-10.5$. Since $b>0$, $b=2$.\n\n**Common Mistakes:** Forgetting the $\\sqrt{9+16}=5$ in the denominator; keeping the negative root $b=-10.5$ despite $b>0$.\n\n**Test Day Takeaway:** A line is tangent to a circle exactly when the distance from the center to the line equals the radius.",
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
  explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** \"Given exercises\" makes the denominator the $210$ exercisers. Of those, $210-95=115$ do not follow the diet, so the probability is $\\frac{115}{210}=\\frac{23}{42}$, choice A.\n\n**The Full Solution:**\nStep 1: Restrict to the $210$ people who exercise regularly — that is the sample space.\nStep 2: Among them, $95$ follow the diet, so $210-95=115$ do not.\nStep 3: Probability $=\\frac{115}{210}$. Divide top and bottom by $5$: $\\frac{23}{42}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{19}{42}$): equals $\\frac{95}{210}$, the chance of following the diet given exercise — the complement of what is asked.\n* Choice C ($\\frac{23}{100}$): uses the full $500$ in the denominator ($\\frac{115}{500}$) instead of restricting to exercisers.\n* Choice D ($\\frac{17}{50}$): comes from incorrect group counts, not the $115$-out-of-$210$ split.\n\n**Test Day Takeaway:** \"Given\" fixes the denominator. \"Given exercise\" means divide by the number of exercisers, not the grand total.",
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
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $h^2=6^2+9^2=36+81=117$, and $\\sqrt{117}=\\sqrt{9 \\cdot 13}=3\\sqrt{13}$, which is choice B.\n\n**The Full Solution:**\nStep 1: By the Pythagorean theorem, $h^2=a^2+b^2=6^2+9^2=36+81=117$.\nStep 2: Simplify the radical by pulling out the perfect square: $\\sqrt{117}=\\sqrt{9 \\cdot 13}=3\\sqrt{13}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3\\sqrt{5}$): subtracts the squares, $\\sqrt{81-36}=\\sqrt{45}=3\\sqrt{5}$, as if solving for a missing leg.\n* Choice C ($\\sqrt{15}$): adds the legs to $15$ and treats that as $h^2$.\n* Choice D ($15$): adds the legs and never takes the square root.\n\n**Test Day Takeaway:** The hypotenuse is $\\sqrt{a^2+b^2}$ — square the legs, add, then root, and pull out any perfect-square factor.",
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
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"Of the members whose last shot was a bullseye\" fixes the denominator at the Bullseye total, $130$. Advanced bullseyes $=90$, so the fraction is $\\frac{90}{130}$, choice B.\n\n**The Full Solution:**\nStep 1: The condition restricts attention to the Bullseye column, whose total is $130$.\nStep 2: Within that column, $90$ archers are advanced.\nStep 3: The conditional fraction is $\\frac{90}{130}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{90}{120}$): uses $120$, the Advanced row total, instead of the bullseye total.\n* Choice C ($\\frac{90}{230}$): uses the grand total $230$, ignoring the condition.\n* Choice D ($\\frac{40}{130}$): keeps the right denominator but counts beginner bullseyes ($40$) instead of advanced.\n\n**Test Day Takeaway:** The phrase after \"of those who...\" sets your denominator. Read the condition first, then match the numerator to it.",
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
  explanation: "**SAT Pattern: Residual**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Plug $x=10$ into the line: $2.1(10)+6=27$. Residual $=$ actual $-$ predicted $=32-27=5$.\n\n**The Full Solution:**\nStep 1: Find the predicted value at $x=10$ from $\\hat{y}=2.1x+6$: $\\hat{y}=2.1(10)+6=21+6=27$.\nStep 2: Residual $=$ actual $-$ predicted $=32-27=5$. A positive residual means the point sits above the line.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): computed predicted $-$ actual $=27-32=-5$, reversing the order.\n* Choice C ($11$): used $2.1\\cdot 10=21$ and dropped the $+6$ intercept, then $32-21=11$.\n* Choice D ($2.9$): evaluated at $x=11$ instead of $x=10$, giving $32-29.1=2.9$.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted. Always plug the point's $x$ into the full line equation, intercept included.",
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
  explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** If $30\\%$ race, then $70\\%$ don't, so $0.70\\,T=210 \\Rightarrow T=300$. Racing $=300-210=90$.\n\n**The Full Solution:**\nStep 1: Racing drones are $30\\%$ of the total, so non-racing drones are the other $70\\%$.\nStep 2: $0.70\\,T=210 \\Rightarrow T=\\dfrac{210}{0.70}=300$ total drones.\nStep 3: Racing $=T-210=300-210=90$. Check: $0.30\\cdot 300=90$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($300$): stopped at the total and reported it instead of the racing count.\n* Choice C ($147$): applied $70\\%$ to the given $210$, $0.70\\cdot 210=147$, instead of recovering the total first.\n* Choice D ($63$): applied $30\\%$ to the given $210$, $0.30\\cdot 210=63$, treating $210$ as the whole.\n\n**Test Day Takeaway:** When a part is a percent of an unknown whole, divide to recover the whole first, then answer exactly what is asked.",
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
  explanation: "**SAT Pattern: Evaluating Vertex Form at a Specific Input**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** $a+b+c=y(1)$. In vertex form $y=a(x-7)^2-12$, two $x$-intercepts force the parabola to open up ($a>0$), since its vertex sits below the axis. Then $y(1)=a(1-7)^2-12=36a-12>-12$. Only $-8$ exceeds $-12$.\n\n**The Full Solution:**\nStep 1: Substituting $x=1$ into $y=ax^2+bx+c$ gives $a+b+c=y(1)$.\nStep 2: Write vertex form: $y=a(x-7)^2-12$. The vertex $(7,-12)$ lies below the $x$-axis, so to cross the axis twice the parabola must open upward: $a>0$.\nStep 3: Evaluate at $x=1$: $y(1)=a(1-7)^2-12=36a-12$. Since $a>0$, $36a>0$, so $y(1)>-12$.\nStep 4: The only choice greater than $-12$ is $-8$. (It needs $36a-12=-8$, i.e. $a=\\frac{1}{9}>0$. $\\checkmark$)\n\n**Why the wrong answers are tempting:**\n* Choice A ($-23$): far below $-12$, which would require $a<0$ (a downward parabola that never crosses twice from below).\n* Choice B ($-18$): still below the vertex height $-12$, impossible for an upward parabola.\n* Choice C ($-12$): uses the vertex value itself, but $y(1)$ is strictly greater since $x=1$ is not the vertex's $x=7$.\n\n**Test Day Takeaway:** $a+b+c$ is just $y(1)$. Pair that with the sign of $a$ forced by the intercept condition to bound the value.",
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
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Let $k$ be the kite price and $s$ the spool price. $k+2s=12.00$ and $4k+s=23.50$. Scale the first by $4$: $4k+8s=48.00$. Subtract the second: $7s=24.50$, so $s=3.50$.\n\n**The Full Solution:**\nStep 1: Set up the system. $k+2s=12.00$ and $4k+s=23.50$.\nStep 2: To eliminate $k$, multiply the first equation by $4$: $4k+8s=48.00$.\nStep 3: Subtract the second: $(4k+8s)-(4k+s)=48.00-23.50 \\Rightarrow 7s=24.50 \\Rightarrow s=3.50$.\nStep 4: Check: $k=12.00-2(3.50)=5.00$, and $4(5.00)+3.50=23.50$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($5.00$): solved for the kite price $k$ instead of the spool price the question asks for.\n* Choice C ($4.25$): averaged the two totals rather than eliminating a variable.\n* Choice D ($2.50$): a sign slip during the subtraction step.\n\n**Test Day Takeaway:** Line up the equations, scale one so a variable cancels, and confirm which variable the question actually wants.",
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
  explanation: "**SAT Pattern: Rational Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The right denominator factors as $x^2-2x-8=(x-4)(x+2)$. Clear fractions: $3(x+2)+2(x-4)=13 \\Rightarrow 5x-2=13 \\Rightarrow x=3$. It clears the excluded values $x=4,-2$, so there is exactly $1$ solution.\n\n**The Full Solution:**\nStep 1: Factor the right denominator: $x^2-2x-8=(x-4)(x+2)$.\nStep 2: Multiply both sides by $(x-4)(x+2)$: $3(x+2)+2(x-4)=13$.\nStep 3: Expand and combine: $3x+6+2x-8=13 \\Rightarrow 5x-2=13 \\Rightarrow x=3$.\nStep 4: $x=3$ makes no denominator zero, so it is valid. The equation has exactly $1$ solution.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): assumes the solution is excluded, but $x=3$ is not $4$ or $-2$.\n* Choice C ($2$): expects a quadratic to yield two roots, but the $x^2$ terms cancel when fractions clear, leaving a linear equation.\n* Choice D (Infinitely many): mistakes the equation for an identity.\n\n**Test Day Takeaway:** Factor every denominator first, clear the fractions, then check the solution against the excluded values.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "For some constant $t$, the function $g$ satisfies $g(x) = (x + 18)(t - x)$. The point $(26, 0)$ lies on the graph of $y = g(x)$ in the $xy$-plane. Determine $g(0)$.",
  correctAnswer: "468",
  explanation: "**SAT Pattern: Function Evaluation to Find Parameter**\n\n**The correct answer is $468$.**\n\n**The Fast Way (~30s):** $(26,0)$ is a zero of $g$. Since $26+18=44\\neq 0$, the other factor must vanish: $t-26=0 \\Rightarrow t=26$. Then $g(0)=(18)(26)=468$.\n\n**The Full Solution:**\nStep 1: The graph passes through $(26,0)$, so $g(26)=0$: $g(26)=(26+18)(t-26)=44(t-26)=0$.\nStep 2: Since $44\\neq 0$, the factor $t-26=0$, giving $t=26$.\nStep 3: Evaluate at $x=0$: $g(0)=(0+18)(t-0)=18\\cdot t=18\\cdot 26=468$.\n\n**Common Mistakes:** Setting $x+18=0$ at the given point (that factor isn't zero there); reporting $t=26$ instead of evaluating $g(0)$.\n\n**Test Day Takeaway:** A point with $y=0$ is a zero. Set the non-zero factor's partner equal to zero to solve for the constant, then evaluate.",
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
  explanation: "**SAT Pattern: Rational Function Transformation**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The asymptote $x=-2$ gives $b=2$, and $(2,2)$ gives $\\frac{a}{2+2}=2 \\Rightarrow a=8$. So $f(x)=\\frac{8}{x+2}$, and $g(x)=f(x+3)=\\frac{8}{(x+3)+2}=\\frac{8}{x+5}$.\n\n**The Full Solution:**\nStep 1: The vertical asymptote is where the denominator is zero: $x+b=0 \\Rightarrow x=-b=-2$, so $b=2$.\nStep 2: Use the point $(2,2)$: $f(2)=\\dfrac{a}{2+2}=\\dfrac{a}{4}=2 \\Rightarrow a=8$. Check $(6,1)$: $\\dfrac{8}{6+2}=1$. $\\checkmark$\nStep 3: So $f(x)=\\dfrac{8}{x+2}$.\nStep 4: Apply $g(x)=f(x+3)$ by replacing $x$ with $x+3$: $g(x)=\\dfrac{8}{(x+3)+2}=\\dfrac{8}{x+5}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{8}{x}$): applied the shift to the numerator and cancelled, discarding the function's structure.\n* Choice B ($\\frac{8}{x+2}$): left $f$ unshifted, forgetting to substitute $x+3$.\n* Choice D ($\\frac{8}{x-1}$): shifted the asymptote right by subtracting instead of adding inside.\n\n**Test Day Takeaway:** $f(x+c)$ replaces $x$ with $x+c$ everywhere, sliding the graph left by $c$. Read $a$ and $b$ off the graph first, then substitute.",
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
  explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** No real solutions means the discriminant is negative: $b^2-4(9)(16)<0 \\Rightarrow b^2<576 \\Rightarrow b<24$. The greatest positive integer is $b=23$.\n\n**The Full Solution:**\nStep 1: No real solutions requires $b^2-4ac<0$.\nStep 2: $b^2-4(9)(16)<0 \\Rightarrow b^2-576<0 \\Rightarrow b^2<576 \\Rightarrow |b|<24$.\nStep 3: Since $b$ is a positive integer with $b<24$ (strict), the greatest value is $b=23$.\nStep 4: Check: $23^2=529<576$. $\\checkmark$ And $24^2=576$ is not less than $576$, so $b=24$ gives exactly one real solution.\n\n**Why the wrong answers are tempting:**\n* Choice A ($24$): makes the discriminant exactly $0$, which is one real solution, not zero.\n* Choice C ($576$): reports $b^2$ instead of $b$.\n* Choice D ($48$): doubles $24$ from a misapplied square-root step.\n\n**Test Day Takeaway:** No real solutions means discriminant $<0$ (strict). When the boundary is itself an integer, the greatest valid integer is one less.",
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
  explanation: "**SAT Pattern: Tangent Line to a Circle**\n\n**Choice C is correct.**\n\n**The Fast Way (~50s):** Radius slope $=\\dfrac{-1-4}{5-(-3)}=-\\dfrac{5}{8}$, so the tangent slope is the negative reciprocal $\\dfrac{8}{5}$. From $(5,-1)$, at $x=10$: $y=-1+\\frac{8}{5}(5)=7$, so $(10,7)$ lies on the line.\n\n**The Full Solution:**\nStep 1: Find the radius slope from center $(-3,4)$ to the tangent point $(5,-1)$: $\\dfrac{-1-4}{5-(-3)}=\\dfrac{-5}{8}$.\nStep 2: A tangent is perpendicular to the radius, so its slope is the negative reciprocal: $\\dfrac{8}{5}$.\nStep 3: Point-slope through $(5,-1)$: $y+1=\\dfrac{8}{5}(x-5)$.\nStep 4: Test $(10,7)$: $7+1=\\dfrac{8}{5}(10-5) \\Rightarrow 8=\\dfrac{8}{5}(5)=8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(0,-1)$): treats the tangent point's $y$-value as a $y$-intercept.\n* Choice B ($(5,4)$): uses the radius slope instead of the tangent slope.\n* Choice D ($(-3,4)$): names the circle's center, which lies on the radius, not the tangent.\n\n**Test Day Takeaway:** A tangent is perpendicular to the radius at the point of tangency. Take the negative reciprocal of the radius slope, then build the line through the tangent point.",
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
  explanation: "**SAT Pattern: Percent Greater Than**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Percent greater $=\\dfrac{320-40}{40}\\times 100=\\dfrac{280}{40}\\times 100=7\\times 100=700\\%$.\n\n**The Full Solution:**\nStep 1: \"$A$ is what percent greater than $B$\" means $\\dfrac{A-B}{B}\\times 100$, with $B$ as the base.\nStep 2: $\\dfrac{320-40}{40}\\times 100=\\dfrac{280}{40}\\times 100=7\\times 100=700\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($87.5\\%$): divides by $320$ instead of $40$, giving $\\dfrac{280}{320}\\times 100$.\n* Choice B ($280\\%$): reports the raw difference $280$ as the percent.\n* Choice D ($800\\%$): computes $\\dfrac{320}{40}\\times 100$, which is \"percent OF,\" not \"percent GREATER.\"\n\n**Test Day Takeaway:** \"Percent greater\" is $\\dfrac{\\text{difference}}{\\text{base}}\\times 100$; the base is the number after \"than.\"",
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
  explanation: "**SAT Pattern: Quadratic Coefficients from Graph**\n\n**The correct answer is $24$.**\n\n**The Fast Way (~30s):** The $y$-intercept $(0,-6)$ gives $c=-6$. The axis of symmetry is $x=1$, so $-\\dfrac{b}{2(2)}=1 \\Rightarrow b=-4$. Then $bc=(-4)(-6)=24$.\n\n**The Full Solution:**\nStep 1: At $x=0$, $y=c$, and the curve passes through $(0,-6)$, so $c=-6$.\nStep 2: The axis of symmetry of $y=2x^2+bx+c$ is $x=-\\dfrac{b}{2a}=-\\dfrac{b}{4}$. The vertex (and the symmetric points $(0,-6)$, $(2,-6)$) put the axis at $x=1$.\nStep 3: $-\\dfrac{b}{4}=1 \\Rightarrow b=-4$. So $bc=(-4)(-6)=24$.\nStep 4: Check: $y=2x^2-4x-6$ gives $y(1)=2-4-6=-8$ (the vertex) and $y(0)=-6$. $\\checkmark$\n\n**Common Mistakes:** Reading $c$ from the vertex value $-8$ instead of the $y$-intercept $-6$; dropping the sign of $b$ and getting $bc=-24$; forgetting the factor $a=2$ in $-\\frac{b}{2a}$.\n\n**Test Day Takeaway:** The $y$-intercept gives $c$ directly; the axis of symmetry $x=-\\frac{b}{2a}$ gives $b$. Watch the leading coefficient $a$.",
  skills: ["quadratic-equations", "vertex-form"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $\\log_2(x - 1) + \\log_2(x + 5) = 4$ and $x > 1$, what is the value of $x$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~30s):** Combine the logs: $\\log_2[(x-1)(x+5)]=4 \\Rightarrow (x-1)(x+5)=16 \\Rightarrow x^2+4x-21=0 \\Rightarrow (x-3)(x+7)=0$. Since $x>1$, $x=3$.\n\n**The Full Solution:**\nStep 1: Apply the product rule: $\\log_2(x-1)+\\log_2(x+5)=\\log_2[(x-1)(x+5)]=4$.\nStep 2: Rewrite in exponential form: $(x-1)(x+5)=2^4=16$.\nStep 3: Expand: $x^2+4x-5=16 \\Rightarrow x^2+4x-21=0 \\Rightarrow (x+7)(x-3)=0$, so $x=-7$ or $x=3$.\nStep 4: The domain requires $x>1$, so discard $x=-7$. Thus $x=3$.\nStep 5: Check: $\\log_2(2)+\\log_2(8)=1+3=4$. $\\checkmark$\n\n**Common Mistakes:** Skipping the product rule before solving; accepting $x=-7$, which violates $x>1$.\n\n**Test Day Takeaway:** $\\log_b(A)+\\log_b(B)=\\log_b(AB)$. Convert to an exponential equation, then discard solutions outside the domain.",
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
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** If all $50$ seats were balcony at $\\$25$, revenue would be $\\$1{,}250$. The actual $\\$1{,}950$ is $\\$700$ more, and each main-floor swap adds $\\$45-\\$25=\\$20$. So $\\frac{700}{20}=35$ main-floor seats, leaving $50-35=15$ balcony seats.\n\n**The Full Solution:**\nStep 1: Let $m$ = main-floor seats and $b$ = balcony seats. The count gives $m+b=50$; the revenue gives $45m+25b=1950$.\nStep 2: Solve the count equation for $m$: $m=50-b$.\nStep 3: Substitute: $45(50-b)+25b=1950 \\Rightarrow 2250-20b=1950$.\nStep 4: $-20b=-300 \\Rightarrow b=15$.\nStep 5: Check: $m=35$, so $45(35)+25(15)=1575+375=1950$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($35$): the number of main-floor seats — solved for $m$ instead of the balcony count the question asks for.\n* Choice C ($20$): an arithmetic slip in the substitution that lands on the wrong root.\n* Choice D ($30$): comes from swapping the two seat prices before solving.\n\n**Test Day Takeaway:** Name your variables, substitute the count equation into the money equation, and report the exact quantity the question asks for.",
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
  explanation: "**SAT Pattern: Quadratic Vertex Form Application**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Vertex form $C(d)=-0.4(d-12)^2+90$ has vertex $(12,90)$. Since $a=-0.4<0$ the parabola opens down, so the vertex is a maximum: clarity $\\approx 90$ at dosage $12$ mg/L.\n\n**The Full Solution:**\nStep 1: Read off the vertex. In $C(d)=a(d-h)^2+k$, the vertex is $(h,k)=(12,90)$.\nStep 2: Check the sign of $a$. Here $a=-0.4<0$, so the parabola opens downward and the vertex is the highest point.\nStep 3: Interpret in context. The dosage $d=12$ mg/L produces the maximum clarity score, about $90$.\n\n**Why the wrong answers are tempting:**\n* Choice A: swaps the coordinates, reporting the dosage as the score and the score as the dosage.\n* Choice C: calls the vertex a minimum, but $a<0$ makes it a maximum.\n* Choice D: uses the leading coefficient $0.4$ as the dosage instead of the vertex input $12$.\n\n**Test Day Takeaway:** In vertex form $a(d-h)^2+k$, $h$ is the optimal input and $k$ the optimal output; $a<0$ makes the vertex a maximum, $a>0$ a minimum.",
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
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $f(x)=(x-3)^2+5$ has its minimum at $x=3$. The rule $g(x)=f(x+6)-4$ shifts the graph left by $6$, so the minimum moves to $x=3-6=-3$.\n\n**The Full Solution:**\nStep 1: Locate $f$'s minimum. The vertex of $(x-3)^2+5$ sits at $x=3$.\nStep 2: Apply the horizontal shift. Replacing $x$ with $x+6$ moves the graph left by $6$, so the minimum input drops from $3$ to $-3$. The $-4$ only lowers the graph and does not change the $x$-coordinate.\nStep 3: Confirm directly: $g(x)=((x+6)-3)^2+5-4=(x+3)^2+1$, with vertex at $x=-3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): shifts right instead of left, using $3+6$.\n* Choice C ($3$): reports $f$'s vertex without applying the shift at all.\n* Choice D ($-4$): mistakes the vertical shift $-4$ for the answer.\n\n**Test Day Takeaway:** $f(x+c)$ shifts the graph LEFT by $c$; vertical shifts never move the $x$-coordinate of a max or min.",
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
  explanation: "**SAT Pattern: Successive Percent Changes**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Turn each increase into a multiplier and multiply: $1.18\\times 1.15=1.3570$. So $y=1.3570$.\n\n**The Full Solution:**\nStep 1: Let $S$ be the $2017$ savings. An $18\\%$ increase multiplies by $1.18$, giving $1.18S$ in $2018$.\nStep 2: A further $15\\%$ increase multiplies by $1.15$: $1.15\\cdot 1.18S=1.3570S$ in $2019$.\nStep 3: Since the $2019$ savings equal $1.3570$ times the $2017$ savings, $y=1.3570$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($1.3300$): adds the percents ($18+15=33$) instead of compounding the multipliers.\n* Choice C ($0.3300$): reports the added percent change as a decimal, missing the base $1$.\n* Choice D ($1.0270$): multiplies the rates $0.18\\times 0.15$ and adds $1$.\n\n**Test Day Takeaway:** Successive percent changes MULTIPLY their factors; each \"$p\\%$ greater\" becomes the multiplier $1+\\frac{p}{100}$.",
  skills: ["percents", "successive-percent"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = -a^x + b$, where $a$ and $b$ are constants. In the $xy$-plane, the graph of $y = f(x) - 7$ has a $y$-intercept at $(0, -5)$. The product of $a$ and $b$ is $18$. What is the value of $a$?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Exponential Function with Two Conditions**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~40s):** At $x=0$ the shifted graph gives $f(0)-7=-5$, so $f(0)=2$. Since $f(0)=-a^0+b=-1+b$, we get $b=3$. Then $ab=18 \\Rightarrow a=6$.\n\n**The Full Solution:**\nStep 1: The $y$-intercept of $y=f(x)-7$ is at $x=0$, so $f(0)-7=-5$, giving $f(0)=2$.\nStep 2: Evaluate $f(0)=-a^0+b$. Any nonzero base to the $0$ power is $1$, so $f(0)=-1+b$.\nStep 3: Set equal to $2$: $-1+b=2 \\Rightarrow b=3$.\nStep 4: Use the product condition $ab=18$: $a\\cdot 3=18 \\Rightarrow a=6$.\nStep 5: Check: $f(0)=-6^0+3=-1+3=2$, and $f(0)-7=-5$. $\\checkmark$\n\n**Common Mistakes:** Forgetting that $a^0=1$, which fixes $f(0)=-1+b$; solving correctly but reporting $b=3$ instead of the requested $a$.\n\n**Test Day Takeaway:** Evaluate at $x=0$ to pin one constant (any base to the $0$ power is $1$), then use the product condition to recover the other.",
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
  explanation: "**SAT Pattern: Range of a Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Range $=$ max $-$ min $=50-33=17$.\n\n**The Full Solution:**\nStep 1: Find the extremes. The largest score is $50$ and the smallest is $33$.\nStep 2: Subtract: $50-33=17$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($50$): reports the maximum value alone instead of the spread.\n* Choice C ($8$): subtracts the first listed score ($50-42$) rather than the minimum.\n* Choice D ($42.5$): computes the mean of the scores instead of the range.\n\n**Test Day Takeaway:** Range $=$ max $-$ min. Find the extreme values first; the order of the list does not matter.",
  skills: ["statistics"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the horizontal line $y = 2$ intersects the parabola $y = x^2 + 5x + a$ at exactly one point, where $a$ is a constant. What is the value of $a$?",
  correctAnswer: "8.25",
  explanation: "**SAT Pattern: Quadratic — Discriminant Test**\n\n**The correct answer is $8.25$.**\n\n**The Fast Way (~30s):** Set the curves equal: $x^2+5x+a=2 \\Rightarrow x^2+5x+(a-2)=0$. One intersection means discriminant $=0$: $5^2-4(a-2)=0 \\Rightarrow 25=4(a-2) \\Rightarrow a=2+\\frac{25}{4}=8.25$.\n\n**The Full Solution:**\nStep 1: The line and parabola meet where their $y$-values match: $x^2+5x+a=2$.\nStep 2: Collect into standard form: $x^2+5x+(a-2)=0$.\nStep 3: Exactly one intersection means one repeated real root, so the discriminant is $0$: $5^2-4(1)(a-2)=0$.\nStep 4: $25-4a+8=0 \\Rightarrow 4a=33 \\Rightarrow a=8.25$.\nStep 5: Check: with $a=8.25$, $x^2+5x+6.25=(x+2.5)^2=0$, one solution at $x=-2.5$, where $y=2$. $\\checkmark$\n\n**Common Mistakes:** Forgetting to move the $2$ over and leaving the constant as $a$ instead of $a-2$; using discriminant $>0$ (two points); reporting the repeated root $-2.5$ instead of the requested constant $a$.\n\n**Test Day Takeaway:** A line meets a parabola exactly once when, after setting them equal and collecting into a quadratic, the discriminant equals $0$.",
  skills: ["quadratic-equations", "discriminant"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, a parabola has vertex $(3, -5)$ and passes through the point $(5, 7)$. The equation of the parabola is written as $y = ax^2 + bx + c$, where $a$, $b$, and $c$ are constants. What is the value of $c$?",
  correctAnswer: "22",
  explanation: "**SAT Pattern: Vertex Form to Find y-Intercept**\n\n**The correct answer is $22$.**\n\n**The Fast Way (~40s):** Write vertex form $y=a(x-3)^2-5$. Plug in $(5,7)$: $7=a(2)^2-5 \\Rightarrow 4a=12 \\Rightarrow a=3$. Then $c=y(0)=3(0-3)^2-5=27-5=22$.\n\n**The Full Solution:**\nStep 1: Use the vertex $(3,-5)$ to write $y=a(x-3)^2-5$.\nStep 2: Substitute the point $(5,7)$: $7=a(5-3)^2-5=4a-5 \\Rightarrow 4a=12 \\Rightarrow a=3$.\nStep 3: The constant $c$ is the $y$-intercept, the value at $x=0$: $c=3(0-3)^2-5=3(9)-5=27-5=22$.\nStep 4: Check by expanding: $y=3(x^2-6x+9)-5=3x^2-18x+22$, so $c=22$. $\\checkmark$\n\n**Common Mistakes:** Reporting the vertex $y$-value $-5$ as $c$; forgetting to square the difference $(0-3)$ when evaluating at $x=0$.\n\n**Test Day Takeaway:** Find $a$ from vertex form using the given point, then evaluate at $x=0$ to read off the $y$-intercept $c$.",
  skills: ["quadratic-equations", "vertex-form"]
}
      ]
    }
  ]
};

export default practiceTest10;
