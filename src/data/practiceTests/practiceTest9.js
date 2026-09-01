// Practice Test 9 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Official-calibration recreation (2026-09-01): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md).
// Slot metadata (id/type/difficulty/band/skills/pattern) frozen from the prior
// blueprint: M1 5E/10M/7H; M2 wavy hard track (easy {1,3,14}, medium
// {2,5,6,8,10,17,19}, hard {4,7,9,11,12,13,15,16,18,20,21,22}).
// Figure density lifted toward official ~20%: M1 carries 5 visual items
// (2 scatterplots, 2 two-way tables, 1 right triangle), M2 carries 4
// (2 data tables, 1 dot plot, 1 triangle). Numeric MC choices sorted ascending.
// Scenario families: granola production, batting cages, street-sweeper routes,
// drone photography, mural coverage, print-shop poster runs, climbing walls,
// observatory dome rotation.

export const practiceTest9 = {
  id: "practice-test-9",
  title: "Practice Test 9",
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
  question: "At a granola bakery, $840$ pouches have been sealed for an order. This number is $60\\%$ of the total number of pouches in the order. What is the total number of pouches in the order?",
  choices: [
    // distractor: applies the percent forward — 840 × 0.60 = 504
    { id: "A", text: "$504$" },
    { id: "B", text: "$1{,}400$" },
    // distractor: divides by the complement 0.40, treating 840 as the unsealed share
    { id: "C", text: "$2{,}100$" },
    // distractor: divides by 0.06 instead of 0.60 — a decimal-place slip
    { id: "D", text: "$14{,}000$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $840$ is $60\\%$ of the total $T$, so divide: $T = \\frac{840}{0.60} = 1{,}400$.\n\n**The Full Solution:**\nStep 1: Translate \"$840$ is $60\\%$ of the total\" into $0.60 \\cdot T = 840$.\nStep 2: Divide both sides by $0.60$: $T = \\frac{840}{0.60} = 1{,}400$.\nStep 3: Check: $0.60 \\cdot 1{,}400 = 840$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($504$): multiplies $840 \\cdot 0.60$ instead of dividing — the inverse operation.\n* Choice C ($2{,}100$): divides by the complement $0.40$, treating $840$ as the pouches NOT yet sealed.\n* Choice D ($14{,}000$): divides by $0.06$ instead of $0.60$ — a decimal-place slip.\n\n**Test Day Takeaway:** When a known amount is a percent of an unknown whole, divide the amount by the percent written as a decimal to recover the whole.",
  skills: ["percents"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "At a batting-cage facility, the baseballs in a storage bin are either practice balls or game balls, in a ratio of $2$ practice balls to $5$ game balls. The bin holds $84$ baseballs in total. How many practice balls are in the bin?",
  choices: [
    // distractor: reports the game-ball ratio number (5) instead of solving
    { id: "A", text: "$5$" },
    // distractor: reports the parts multiplier k = 84/7 instead of a ball count
    { id: "B", text: "$12$" },
    { id: "C", text: "$24$" },
    // distractor: solves for the game balls (5/7 of 84) instead of the practice balls
    { id: "D", text: "$60$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Practice balls are $\\frac{2}{2+5} = \\frac{2}{7}$ of the bin, so practice balls $= \\frac{2}{7} \\cdot 84 = 24$.\n\n**The Full Solution:**\nStep 1: Write the parts as $2k$ practice balls and $5k$ game balls, matching the $2:5$ ratio.\nStep 2: Their sum fills the bin: $2k + 5k = 7k = 84$, so $k = 12$.\nStep 3: Practice balls $= 2k = 2 \\cdot 12 = 24$. Check: game balls $= 60$, and $24 + 60 = 84$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): reports the game-ball part of the ratio instead of solving.\n* Choice B ($12$): reports the multiplier $k = \\frac{84}{7}$, one part, not the practice-ball count.\n* Choice D ($60$): solves for the game balls ($\\frac{5}{7} \\cdot 84$) instead of the practice balls.\n\n**Test Day Takeaway:** When a ratio's parts make up a known total, each part's fraction uses the SUM of the ratio numbers as its denominator.",
  skills: ["word-problems", "solving-equations", "ratios"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The function $f(w) = 12 + 4w$ gives the total number of routes on a climbing wall $w$ weeks after the wall opens. What is the best interpretation of $4$ in this context?",
  choices: [
    // distractor: confuses 4 with the initial value (which is 12)
    { id: "A", text: "The number of routes on the wall when it opens" },
    // distractor: treats 4 as an input value rather than a rate of change
    { id: "B", text: "The number of routes on the wall $4$ weeks after it opens" },
    // distractor: inverts the rate (would be 1/4 week per route)
    { id: "C", text: "The number of weeks needed to add $1$ new route" },
    { id: "D", text: "The number of routes added to the wall each week" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** In $f(w) = 12 + 4w$, the coefficient of $w$ is the rate of change: $4$ routes are added each week.\n\n**The Full Solution:**\nStep 1: The model has the linear form $f(w) = b + mw$ with $b = 12$ and $m = 4$.\nStep 2: The constant $12$ is the number of routes at $w = 0$ (opening day); the coefficient $4$ multiplies $w$, so it is the change per week.\nStep 3: Each additional week adds $4$ routes — that is what $4$ represents.\n\n**Why the wrong answers are tempting:**\n* Choice A: describes the initial value $12$, not the rate $4$.\n* Choice B: treats $4$ as the input $w = 4$ rather than a per-week rate.\n* Choice C: inverts the rate — the wall gains $4$ routes per week, not $1$ route per $4$ weeks.\n\n**Test Day Takeaway:** In $y = b + mx$, the coefficient of the variable is the rate of change per unit; the standalone constant is the starting value.",
  skills: ["function-interpretation", "linear-functions", "slope"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A drone-photography service charges $\\$12$ per aerial photo plus a flat $\\$30$ site fee per job. The total charge for a job with $n$ photos is $\\$114$. What is the total charge, in dollars, for a job with $n + 5$ photos (with one site fee)?",
  choices: [
    // distractor: adds the count 5 as dollars instead of 5 × $12 = $60
    { id: "A", text: "$\\$119$" },
    // distractor: off-by-one count slip — adds 4 × $12 = $48 instead of $60
    { id: "B", text: "$\\$162$" },
    { id: "C", text: "$\\$174$" },
    // distractor: uses the $30 site fee as the per-photo price for the extra photos
    { id: "D", text: "$\\$264$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Five more photos at $\\$12$ each add $\\$60$; the site fee does not change, so the new total is $\\$114 + \\$60 = \\$174$.\n\n**The Full Solution:**\nStep 1: The cost is $12n + 30 = 114$, so $12n = 84$ and $n = 7$.\nStep 2: The new job has $n + 5 = 12$ photos with one site fee: total $= 12(12) + 30 = 144 + 30 = \\$174$.\nStep 3: Or skip finding $n$: adding $5$ photos adds $5 \\cdot \\$12 = \\$60$ and leaves the fee alone, so $\\$114 + \\$60 = \\$174$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$119$): adds the count $5$ as dollars instead of $5 \\cdot \\$12 = \\$60$.\n* Choice B ($\\$162$): adds $4 \\cdot \\$12 = \\$48$ instead of $5 \\cdot \\$12$ — an off-by-one count slip.\n* Choice D ($\\$264$): uses the $\\$30$ site fee as the per-photo price: $\\$114 + 5 \\cdot \\$30$.\n\n**Test Day Takeaway:** Linear cost $=$ rate $\\times$ quantity $+$ fixed fee. Adding items moves only the rate-times-quantity piece; the fixed fee is paid once.",
  skills: ["word-problems", "solving-equations"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $\\dfrac{5w}{12} = \\dfrac{20}{3}$, what is the value of $w - 9$?",
  choices: [
    { id: "A", text: "$7$" },
    // distractor: stops at w = 16 (forgets the "minus 9" final step)
    { id: "B", text: "$16$" },
    // distractor: adds 9 instead of subtracting
    { id: "C", text: "$25$" },
    // distractor: stops at 5w = 80 instead of dividing to get w
    { id: "D", text: "$80$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Cross-multiply: $5w \\cdot 3 = 12 \\cdot 20 \\Rightarrow 15w = 240 \\Rightarrow w = 16$. The question wants $w - 9 = 7$.\n\n**The Full Solution:**\nStep 1: From $\\frac{5w}{12} = \\frac{20}{3}$, cross-multiply: $3 \\cdot 5w = 12 \\cdot 20$, so $15w = 240$.\nStep 2: Divide by $15$: $w = 16$. Check: $\\frac{5(16)}{12} = \\frac{80}{12} = \\frac{20}{3}$. $\\checkmark$\nStep 3: The target is $w - 9$, not $w$: $16 - 9 = 7$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($16$): solves for $w$ correctly but forgets to subtract $9$.\n* Choice C ($25$): adds $9$ instead of subtracting.\n* Choice D ($80$): stops at $5w = 80$ without dividing by $5$.\n\n**Test Day Takeaway:** Re-read the final sentence before answering — the SAT often asks for a shifted quantity like $w - 9$, not the variable itself.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The number of subscribers to a granola-delivery service doubles every $5$ months. The service has $120$ subscribers when tracking begins. Which function $P(t)$ models the number of subscribers $t$ months after tracking begins?",
  choices: [
    // distractor: uses 5t instead of t/5 — would double five times every month
    { id: "A", text: "$P(t) = 120(2)^{5t}$" },
    { id: "B", text: "$P(t) = 120(2)^{\\frac{t}{5}}$" },
    // distractor: swaps the doubling factor (2) and the period (5)
    { id: "C", text: "$P(t) = 120(5)^{\\frac{t}{2}}$" },
    // distractor: starts at 240 (already doubled) with a per-month exponent
    { id: "D", text: "$P(t) = 240(2)^{t}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"Doubles every $5$ months\" means the exponent must equal $1$ when $t = 5$, so it is $\\frac{t}{5}$. With initial value $120$ and base $2$: $P(t) = 120(2)^{\\frac{t}{5}}$.\n\n**The Full Solution:**\nStep 1: The period-multiplier form is $P(t) = P_0 \\cdot k^{\\frac{t}{d}}$, where $P_0$ is the start, $k$ the multiplier, and $d$ the period.\nStep 2: Here $P_0 = 120$, $k = 2$, $d = 5$, giving $P(t) = 120(2)^{\\frac{t}{5}}$.\nStep 3: Check: $P(5) = 120(2)^1 = 240$ (doubled) and $P(10) = 120(2)^2 = 480$ (doubled again). $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: $5t$ in the exponent doubles the count five times each month, not once every $5$ months.\n* Choice C: swaps the base and the period — base $5$, period $2$.\n* Choice D: starts at $240$, building the first doubling into the initial value.\n\n**Test Day Takeaway:** \"Multiplies by $k$ every $d$ units\" $\\Rightarrow P(t) = P_0 \\cdot k^{\\frac{t}{d}}$ — the period goes in the denominator of the exponent.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  question: "The scatterplot shows the length $x$, in kilometers, of each of $9$ street-sweeping routes and the volume $y$, in liters, of water used on that route, along with a line of best fit. According to the line of best fit, a route that uses $60$ liters of water is how many kilometers long?",
  diagram: { type: "scatterplot", params: {
    points: [[2,18],[4,20],[6,28],[8,30],[10,37],[12,40],[14,46],[16,50],[18,55]],
    xMin: 0, xMax: 20, yMin: 0, yMax: 60,
    xGridStep: 2, xLabelStep: 4, yGridStep: 5, yLabelStep: 10,
    bestFitLine: { slope: 2.4, intercept: 12 },
    xLabel: "Route length (km)", yLabel: "Water used (L)",
  } },
  choices: [
    { id: "A", text: "$20$" },
    // distractor: divides 60 by 2.4 without first subtracting the intercept
    { id: "B", text: "$25$" },
    // distractor: adds the intercept instead of subtracting — solves (60 + 12)/2.4
    { id: "C", text: "$30$" },
    // distractor: stops one step early — reports 2.4x = 48
    { id: "D", text: "$48$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The line of best fit is $y = 2.4x + 12$. Set $y = 60$: $2.4x + 12 = 60 \\Rightarrow 2.4x = 48 \\Rightarrow x = 20$.\n\n**The Full Solution:**\nStep 1: The question gives the OUTPUT ($60$ liters) and asks for the input $x$, so set $2.4x + 12 = 60$.\nStep 2: Subtract the intercept: $2.4x = 48$.\nStep 3: Divide by the rate: $x = \\dfrac{48}{2.4} = 20$ kilometers.\nCheck: $2.4(20) + 12 = 48 + 12 = 60$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($25$): divides $60$ by $2.4$ without first subtracting the intercept $12$.\n* Choice C ($30$): adds the intercept instead of subtracting, solving $\\frac{60 + 12}{2.4}$.\n* Choice D ($48$): stops at $2.4x = 48$ and reports it as the answer.\n\n**Test Day Takeaway:** When a model gives the output and asks for the input, undo the equation in reverse order: subtract the constant first, then divide by the rate.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The cylindrical water tank of a street sweeper has an interior base radius of $4$ feet and an interior height of $9$ feet. The interior volume of the tank, in cubic feet, can be written in the form $k\\pi$. What is the value of $k$?",
  correctAnswer: "144",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $144$.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (4)^2(9) = 16 \\cdot 9 \\pi = 144\\pi$, so $k = 144$.\n\n**The Full Solution:**\nStep 1: A right circular cylinder has volume $V = \\pi r^2 h$.\nStep 2: With $r = 4$ and $h = 9$: $V = \\pi (4)^2(9) = \\pi(16)(9) = 144\\pi$ cubic feet.\nStep 3: Written as $k\\pi$, this gives $k = 144$.\n\n**Common Mistakes:** Forgetting to square the radius — $\\pi r h$ gives $36\\pi$ ($k = 36$); or borrowing the cone formula $\\frac{1}{3}\\pi r^2 h$, which gives $k = 48$.\n\n**Test Day Takeaway:** For a cylinder, square the radius first, then multiply by the height. $V = \\pi r^2 h$ is on the Reference Sheet — don't borrow the cone's $\\frac{1}{3}$.",
  skills: ["volume", "geometry"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Two similar triangular sections of a mural have corresponding sides in the ratio $3:5$. The area of the smaller section is $45$ square feet. What is the area of the larger section, in square feet?",
  choices: [
    // distractor: stops one step early — reports the squared-ratio piece 25
    { id: "A", text: "$25$" },
    // distractor: scales by the side ratio 5/3 instead of its square
    { id: "B", text: "$75$" },
    { id: "C", text: "$125$" },
    // distractor: multiplies 45 × 5, ignoring the squaring rule entirely
    { id: "D", text: "$225$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Similar Figures — Area Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Side ratio $3:5$ squares to an area ratio $9:25$, so $\\frac{45}{A} = \\frac{9}{25}$ gives $A = \\frac{45 \\cdot 25}{9} = 125$.\n\n**The Full Solution:**\nStep 1: For similar figures, the area ratio is the square of the side ratio: $\\left(\\frac{3}{5}\\right)^2 = \\frac{9}{25}$.\nStep 2: Set up the proportion with the smaller area on top: $\\frac{45}{A} = \\frac{9}{25}$.\nStep 3: Solve: $A = \\frac{45 \\cdot 25}{9} = \\frac{1125}{9} = 125$ square feet.\n\n**Why the wrong answers are tempting:**\n* Choice A ($25$): reports the squared-ratio piece $25$ without finishing the proportion.\n* Choice B ($75$): scales by the side ratio $\\frac{5}{3}$ instead of its square.\n* Choice D ($225$): multiplies $45 \\cdot 5$, ignoring the squaring rule entirely.\n\n**Test Day Takeaway:** Area scales as the SQUARE of the side ratio (volume as the CUBE). Square first, then set up the proportion.",
  skills: ["similar-triangles", "area", "ratios"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The scatterplot shows the number of practice sessions $x$ completed by each of $10$ members of a batting club and the member's skills-test score $y$, along with a line of best fit. The equation of the line of best fit is $y = 1.5x + 20$. Is the actual score of the member who completed $14$ practice sessions above or below the score predicted by the line, and by how much?",
  diagram: { type: "scatterplot", params: {
    points: [[4,25],[6,31],[8,30],[10,36],[12,39],[14,47],[16,43],[18,49],[20,52],[22,51]],
    xMin: 0, xMax: 24, yMin: 10, yMax: 60,
    xGridStep: 2, xLabelStep: 4, yGridStep: 5, yLabelStep: 10,
    bestFitLine: { slope: 1.5, intercept: 20 },
    highlightPoint: [14, 47], highlightLabel: "(14, 47)", showResidual: true,
    xLabel: "Practice sessions", yLabel: "Skills-test score",
  } },
  choices: [
    { id: "A", text: "Above by $6$" },
    // distractor: uses predicted = 1.5 × 14 = 21 (drops the intercept): 47 − 21 = 26
    { id: "B", text: "Above by $26$" },
    // distractor: reverses the subtraction order to get −6
    { id: "C", text: "Below by $6$" },
    // distractor: combines both errors — dropped intercept and reversed sign
    { id: "D", text: "Below by $26$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Residual**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Predicted $= 1.5(14) + 20 = 41$; actual $= 47$; residual $= 47 - 41 = +6$, so the score is above the line by $6$.\n\n**The Full Solution:**\nStep 1: Predict from the line: $1.5(14) + 20 = 21 + 20 = 41$.\nStep 2: Residual $=$ actual $-$ predicted $= 47 - 41 = 6$.\nStep 3: A positive residual means the actual score sits above the line, by $6$ points.\n\n**Why the wrong answers are tempting:**\n* Choice B (Above by $26$): uses $1.5 \\cdot 14 = 21$ as the prediction, dropping the intercept $20$.\n* Choice C (Below by $6$): reverses the subtraction order to get $-6$.\n* Choice D (Below by $26$): combines both errors — dropped intercept and reversed sign.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted. A positive residual means the point is above the line.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A print shop classified each of the $160$ poster orders it completed last month by order size and finish. The table summarizes the results. If a randomly selected order has a gloss finish, what is the probability that it is a large order?",
  diagram: { type: "twoWayTable", params: {
    headers: ["", "Matte", "Gloss", "Total"],
    rows: [
      ["Small", "46", "26", "72"],
      ["Large", "34", "54", "88"],
      ["Total", "80", "80", "160"]
    ]
  } },
  choices: [
    // distractor: uses the wrong row — small gloss orders over the gloss total
    { id: "A", text: "$\\dfrac{26}{80}$" },
    // distractor: uses the grand total 160 as the denominator
    { id: "B", text: "$\\dfrac{54}{160}$" },
    // distractor: uses the large row total 88 as the denominator
    { id: "C", text: "$\\dfrac{54}{88}$" },
    { id: "D", text: "$\\dfrac{54}{80}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** \"Given gloss\" restricts to the Gloss column (total $80$); large gloss orders $= 54$, so the probability is $\\frac{54}{80}$.\n\n**The Full Solution:**\nStep 1: The condition is a gloss finish, so the denominator is the Gloss column total, $80$.\nStep 2: Of those, the large gloss orders number $54$.\nStep 3: $P(\\text{large} \\mid \\text{gloss}) = \\frac{54}{80}$, which matches Choice D.\n\n**Why the wrong answers are tempting:**\n* Choice A: counts small gloss orders ($26$) in the numerator instead of large.\n* Choice B: divides by the grand total $160$ instead of the gloss total.\n* Choice C: uses the Large row total $88$ as the denominator — the condition is gloss, not large.\n\n**Test Day Takeaway:** \"Given $X$\" makes $X$'s total the denominator — here the Gloss column, not the grand total.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A climbing gym classified each of the $150$ routes on its two walls by wall and difficulty level. The table summarizes the results. To the nearest whole percent, what percentage of the advanced routes are on the north wall?",
  diagram: { type: "twoWayTable", params: {
    headers: ["", "Beginner", "Advanced", "Total"],
    rows: [
      ["North wall", "33", "27", "60"],
      ["South wall", "45", "45", "90"],
      ["Total", "78", "72", "150"]
    ]
  } },
  choices: [
    // distractor: divides 27 by the grand total 150 instead of the advanced total
    { id: "A", text: "$18\\%$" },
    // distractor: reads the count 27 directly as a percent
    { id: "B", text: "$27\\%$" },
    { id: "C", text: "$38\\%$" },
    // distractor: uses the south-wall count 45 in the numerator instead of 27
    { id: "D", text: "$63\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Among advanced routes ($72$ total), $27$ are on the north wall: $\\frac{27}{72} = 0.375 \\approx 38\\%$.\n\n**The Full Solution:**\nStep 1: \"Of the advanced routes\" restricts to the Advanced column total, $72$.\nStep 2: North-wall routes within that column number $27$.\nStep 3: $\\frac{27}{72} = 0.375$, which rounds to $38\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($18\\%$): divides by the grand total $150$ instead of the advanced total: $\\frac{27}{150}$.\n* Choice B ($27\\%$): reads the count $27$ as if it were already a percent.\n* Choice D ($63\\%$): uses the south-wall count $45$ in the numerator instead of the north-wall count.\n\n**Test Day Takeaway:** In conditional percent questions, the denominator is the total of the GIVEN group, not the grand total.",
  skills: ["two-way-tables", "probability", "percents"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, line $m$ has equation $4x + 5y = 7$. Line $n$ is perpendicular to line $m$. What is the slope of line $n$?",
  choices: [
    // distractor: takes the reciprocal but forgets to change the sign
    { id: "A", text: "$-\\dfrac{5}{4}$" },
    // distractor: uses the slope of line m itself (parallel, not perpendicular)
    { id: "B", text: "$-\\dfrac{4}{5}$" },
    // distractor: changes the sign but forgets to take the reciprocal
    { id: "C", text: "$\\dfrac{4}{5}$" },
    { id: "D", text: "$\\dfrac{5}{4}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Solve for $y$: $5y = -4x + 7 \\Rightarrow y = -\\frac{4}{5}x + \\frac{7}{5}$, so line $m$ has slope $-\\frac{4}{5}$. The perpendicular slope is the negative reciprocal: $\\frac{5}{4}$.\n\n**The Full Solution:**\nStep 1: Put line $m$ in slope-intercept form: $4x + 5y = 7 \\Rightarrow 5y = -4x + 7 \\Rightarrow y = -\\dfrac{4}{5}x + \\dfrac{7}{5}$.\nStep 2: Read off the slope of $m$: $-\\dfrac{4}{5}$.\nStep 3: Perpendicular slopes multiply to $-1$, so the slope of $n$ is $\\dfrac{5}{4}$.\nCheck: $\\left(-\\dfrac{4}{5}\\right) \\cdot \\dfrac{5}{4} = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{5}{4}$): flips the fraction but keeps the negative sign.\n* Choice B ($-\\frac{4}{5}$): uses the slope of line $m$ itself — that gives a parallel line.\n* Choice C ($\\frac{4}{5}$): changes the sign but never takes the reciprocal.\n\n**Test Day Takeaway:** From standard form $Ax + By = C$, isolate $y$ to read the slope. A perpendicular line's slope is the negative reciprocal — flip AND switch the sign.",
  skills: ["slope", "linear-functions", "coordinate-geometry"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $(x, y)$ is the solution to the system of equations $y = 3x - 7$ and $2x + 3y = 23$, what is the value of $x + y$?",
  choices: [
    // distractor: sign slip in back-substitution gives y = −5, so x + y = −1
    { id: "A", text: "$-1$" },
    // distractor: stops one step early — reports x instead of x + y
    { id: "B", text: "$4$" },
    { id: "C", text: "$9$" },
    // distractor: computes the product xy instead of the sum
    { id: "D", text: "$20$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The first equation already gives $y$, so substitute: $2x + 3(3x - 7) = 23 \\Rightarrow 11x - 21 = 23 \\Rightarrow x = 4$. Then $y = 3(4) - 7 = 5$, so $x + y = 9$.\n\n**The Full Solution:**\nStep 1: Substitute $y = 3x - 7$ into the second equation: $2x + 3(3x - 7) = 23$.\nStep 2: Distribute and collect: $2x + 9x - 21 = 23 \\Rightarrow 11x = 44 \\Rightarrow x = 4$.\nStep 3: Back-substitute: $y = 3(4) - 7 = 5$.\nStep 4: The question asks for the sum: $x + y = 4 + 5 = 9$.\nCheck: $2(4) + 3(5) = 8 + 15 = 23$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-1$): a sign slip in back-substitution gives $y = -5$, so the sum comes out $-1$.\n* Choice B ($4$): stops at $x = 4$ and never computes the sum.\n* Choice D ($20$): multiplies $x \\cdot y = 4 \\cdot 5$ instead of adding.\n\n**Test Day Takeaway:** When one equation is already solved for a variable, substitute it directly — and read the final ask: the question wants $x + y$, not $x$ or $y$ alone.",
  skills: ["systems-of-equations", "solving-equations"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $4(2q - 7) + 10 = 3q + 12$, what is the value of $q$?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~20s):** Distribute the $4$: $8q - 28 + 10 = 3q + 12 \\Rightarrow 8q - 18 = 3q + 12$. Collect: $5q = 30$, so $q = 6$.\n\n**The Full Solution:**\nStep 1: Distribute: $4(2q - 7) = 8q - 28$, so the left side is $8q - 28 + 10 = 8q - 18$.\nStep 2: Set equal to the right side: $8q - 18 = 3q + 12$.\nStep 3: Move variables left, constants right: $5q = 30$, so $q = 6$.\n\nCheck: left $= 4(2 \\cdot 6 - 7) + 10 = 4(5) + 10 = 30$; right $= 3(6) + 12 = 30$. $\\checkmark$\n\n**Common Mistakes:** Distributing the $4$ to only the first term ($8q - 7$); mis-combining $-28 + 10$ as $-38$ instead of $-18$.\n\n**Test Day Takeaway:** Distribute first, combine like terms second, isolate the variable last — each step is mechanical, so slow down on the signs.",
  skills: ["solving-equations"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, how many points of intersection do the graphs of $y = 2x^2 + 3x + 5$ and $y = 7x + 3$ have?",
  choices: [
    // distractor: takes the discriminant of 2x² + 3x + 5 alone (9 − 40 < 0) without combining
    { id: "A", text: "Zero" },
    { id: "B", text: "Exactly one" },
    // distractor: arithmetic slip combining terms leaves a positive discriminant
    { id: "C", text: "Exactly two" },
    // distractor: misreads the shared y-value as the graphs being identical
    { id: "D", text: "Infinitely many" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Set the right sides equal: $2x^2 + 3x + 5 = 7x + 3 \\Rightarrow 2x^2 - 4x + 2 = 0 \\Rightarrow x^2 - 2x + 1 = 0 \\Rightarrow (x - 1)^2 = 0$. One repeated root, so exactly one intersection point.\n\n**The Full Solution:**\nStep 1: Intersection points satisfy both equations, so set them equal: $2x^2 + 3x + 5 = 7x + 3$.\nStep 2: Bring everything to one side: $2x^2 - 4x + 2 = 0$, and divide by $2$: $x^2 - 2x + 1 = 0$.\nStep 3: Check the discriminant: $(-2)^2 - 4(1)(1) = 4 - 4 = 0$, so there is exactly one solution, $x = 1$.\nStep 4: The single intersection point is $(1, 10)$: parabola $2 + 3 + 5 = 10$ and line $7 + 3 = 10$. $\\checkmark$ The line is tangent to the parabola.\n\n**Why the wrong answers are tempting:**\n* Choice A (Zero): takes the discriminant of $2x^2 + 3x + 5$ by itself ($9 - 40 < 0$) — that counts the parabola's $x$-intercepts, not intersections with the line. Combine the equations first.\n* Choice C (Exactly two): an arithmetic slip while combining terms leaves a positive discriminant.\n* Choice D (Infinitely many): the graphs share a $y$-value at one $x$ only; they are not the same curve.\n\n**Test Day Takeaway:** To count intersections of two graphs, set the equations equal and apply the discriminant to the COMBINED quadratic: positive means two, zero means tangent (one), negative means none.",
  skills: ["quadratic-equations", "systems-of-equations", "discriminant"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the parabola $y = -2x^2 + bx + c$ has its vertex at $(3, 5)$. What is the value of $c$?",
  choices: [
    { id: "A", text: "$-13$" },
    // distractor: sign-flips the vertex y-coordinate
    { id: "B", text: "$-5$" },
    // distractor: reports the vertex y-value as c without expanding
    { id: "C", text: "$5$" },
    // distractor: drops the sign on −18 + 5, landing on +13
    { id: "D", text: "$13$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Write vertex form $y = -2(x - 3)^2 + 5$ and expand: $-2(x^2 - 6x + 9) + 5 = -2x^2 + 12x - 13$. The constant is $c = -13$.\n\n**The Full Solution:**\nStep 1: With vertex $(3, 5)$ and leading coefficient $-2$, the vertex form is $y = -2(x - 3)^2 + 5$.\nStep 2: Expand the square: $y = -2(x^2 - 6x + 9) + 5$.\nStep 3: Distribute and combine: $y = -2x^2 + 12x - 18 + 5 = -2x^2 + 12x - 13$, so $c = -13$.\n\nCheck: vertex $x = -\\frac{b}{2a} = -\\frac{12}{-4} = 3$, and $y(3) = -18 + 36 - 13 = 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-5$): sign-flips the vertex $y$-coordinate.\n* Choice C ($5$): reports the vertex $y$-value as $c$ without expanding.\n* Choice D ($13$): drops the sign on $-18 + 5$, treating it as $+13$.\n\n**Test Day Takeaway:** The constant $c$ in $y = ax^2 + bx + c$ is the $y$-intercept, not the vertex height — expand vertex form fully before reading it off.",
  skills: ["vertex-form", "quadratic-equations", "coordinate-geometry"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Which expression is equivalent to $\\dfrac{4x^2 - 25}{2x^2 + x - 15}$ for all values of $x$ where the expression is defined?",
  choices: [
    { id: "A", text: "$\\dfrac{2x + 5}{x + 3}$" },
    // distractor: cancels the wrong numerator factor, keeping (2x − 5) on top
    { id: "B", text: "$\\dfrac{2x - 5}{x + 3}$" },
    // distractor: sign slip when factoring the denominator — (x − 3) instead of (x + 3)
    { id: "C", text: "$\\dfrac{2x + 5}{x - 3}$" },
    // distractor: cancels the (x + 3) factor that does not appear in the numerator
    { id: "D", text: "$\\dfrac{2x + 5}{2x - 5}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Factor top as a difference of squares $(2x - 5)(2x + 5)$ and bottom as $(2x - 5)(x + 3)$. Cancel $(2x - 5)$ to get $\\frac{2x + 5}{x + 3}$.\n\n**The Full Solution:**\nStep 1: Numerator: $4x^2 - 25 = (2x)^2 - 5^2 = (2x - 5)(2x + 5)$.\nStep 2: Denominator: factor $2x^2 + x - 15$ by grouping (product $2 \\cdot (-15) = -30$, sum $1$, so $6$ and $-5$): $2x^2 + 6x - 5x - 15 = 2x(x + 3) - 5(x + 3) = (2x - 5)(x + 3)$.\nStep 3: Cancel the common $(2x - 5)$: $\\frac{(2x - 5)(2x + 5)}{(2x - 5)(x + 3)} = \\frac{2x + 5}{x + 3}$.\n\nCheck at $x = 3$: original $= \\frac{36 - 25}{18 + 3 - 15} = \\frac{11}{6}$; choice A $= \\frac{11}{6}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{2x - 5}{x + 3}$): cancelled the wrong numerator factor, keeping $(2x - 5)$ on top.\n* Choice C ($\\frac{2x + 5}{x - 3}$): a sign slip while factoring the denominator turns $(x + 3)$ into $(x - 3)$.\n* Choice D ($\\frac{2x + 5}{2x - 5}$): cancelled the $(x + 3)$ factor, which never appears in the numerator.\n\n**Test Day Takeaway:** Factor both the numerator and denominator completely before cancelling — difference of squares ($a^2 - b^2$) is the SAT's favorite hidden factorization.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A circle has the equation $x^2 + y^2 + 10x - 4y - 20 = 0$. What is the radius of the circle?",
  choices: [
    // distractor: takes √25 from the x-completion only
    { id: "A", text: "$5$" },
    { id: "B", text: "$7$" },
    // distractor: uses the constant 20 from the original equation
    { id: "C", text: "$20$" },
    // distractor: stops one step early — gives r² = 49 instead of r = 7
    { id: "D", text: "$49$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Complete the square on each variable: $(x^2 + 10x + 25) + (y^2 - 4y + 4) = 20 + 25 + 4 = 49$, so $(x + 5)^2 + (y - 2)^2 = 49$. Radius $= \\sqrt{49} = 7$.\n\n**The Full Solution:**\nStep 1: Group and move the constant: $(x^2 + 10x) + (y^2 - 4y) = 20$.\nStep 2: Complete the $x$-square with $\\left(\\frac{10}{2}\\right)^2 = 25$ and the $y$-square with $\\left(\\frac{-4}{2}\\right)^2 = 4$, adding both to each side: $(x + 5)^2 + (y - 2)^2 = 20 + 25 + 4 = 49$.\nStep 3: The right side is $r^2 = 49$, so $r = \\sqrt{49} = 7$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): completed only the $x$-square and used $\\sqrt{25}$.\n* Choice C ($20$): used the bare constant from the original equation as the radius.\n* Choice D ($49$): reported $r^2$ instead of taking the square root.\n\n**Test Day Takeaway:** Complete the square for both variables, then remember the right side equals $r^2$ — the radius is its square root.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The right triangle shown has one leg of length $16$ and a hypotenuse of length $34$. What is the area, in square units, of the triangle?",
  diagram: {
    type: "rightTriangle",
    params: {
      sideLabels: ["16", "", "34"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: computes the perimeter (16 + 30 + 34 = 80) instead of the area
    { id: "A", text: "$80$" },
    { id: "B", text: "$240$" },
    // distractor: uses the hypotenuse 34 as the second leg: (1/2)(16)(34) = 272
    { id: "C", text: "$272$" },
    // distractor: forgets the 1/2 factor: 16 × 30 = 480
    { id: "D", text: "$480$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** This is the $8$-$15$-$17$ triple scaled by $2$: $16$-$30$-$34$, so the missing leg is $30$. Area $= \\frac{1}{2}(16)(30) = 240$.\n\n**The Full Solution:**\nStep 1: Let the unknown leg be $b$. Pythagoras: $16^2 + b^2 = 34^2 \\Rightarrow 256 + b^2 = 1156$.\nStep 2: Solve: $b^2 = 900 \\Rightarrow b = 30$.\nStep 3: The legs $16$ and $30$ are perpendicular, so area $= \\frac{1}{2}(16)(30) = 240$ square units.\n\nCheck: $16^2 + 30^2 = 256 + 900 = 1156 = 34^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($80$): added the three sides ($16 + 30 + 34$) — that is the perimeter, not the area.\n* Choice C ($272$): used the hypotenuse $34$ as the second leg, computing $\\frac{1}{2}(16)(34)$.\n* Choice D ($480$): multiplied the two legs but forgot the $\\frac{1}{2}$.\n\n**Test Day Takeaway:** Spot scaled Pythagorean triples ($8$-$15$-$17 \\to 16$-$30$-$34$) to find the missing side instantly, then use the two legs as base and height.",
  skills: ["triangles", "pythagorean", "area"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The polynomial $p(x) = 5x^2 + bx + 45$ has zeros $r$ and $s$ such that $r + s = -6$. What is the value of $rs$?",
  correctAnswer: "9",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~20s):** For $ax^2 + bx + c$ with roots $r, s$, the product is $rs = \\frac{c}{a}$. Here $rs = \\frac{45}{5} = 9$.\n\n**The Full Solution:**\nStep 1: Vieta's formulas for $p(x) = ax^2 + bx + c$ give sum $r + s = -\\frac{b}{a}$ and product $rs = \\frac{c}{a}$.\nStep 2: For $p(x) = 5x^2 + bx + 45$, take $a = 5$ and $c = 45$, so $rs = \\frac{45}{5} = 9$.\n\nThe given $r + s = -6$ fixes $b = 30$ but is not needed for the product.\n\nCheck: $p(x) = 5x^2 + 30x + 45 = 5(x^2 + 6x + 9) = 5(x + 3)^2$; the repeated root $-3$ gives $r + s = -6$ and $rs = 9$. $\\checkmark$\n\n**Common Mistakes:** Using $\\frac{c}{b}$ or $-\\frac{c}{a}$ for the product; dropping the leading coefficient $a$ and reporting $45$.\n\n**Test Day Takeaway:** For any $ax^2 + bx + c$, the product of the zeros is $\\frac{c}{a}$ — no need to actually solve for the roots.",
  skills: ["quadratic-equations", "polynomial-operations"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $\\dfrac{\\sqrt[4]{x^9}}{\\sqrt[6]{x}} = x^k$ for $x > 0$, what is the value of $k$? Express your answer as a fraction.",
  correctAnswer: "25/12",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\frac{25}{12}$.**\n\n**The Fast Way (~20s):** Rewrite as $\\frac{x^{9/4}}{x^{1/6}} = x^{9/4 - 1/6}$. With denominator $12$: $\\frac{27}{12} - \\frac{2}{12} = \\frac{25}{12}$.\n\n**The Full Solution:**\nStep 1: Convert radicals to fractional exponents: $\\sqrt[4]{x^9} = x^{\\frac{9}{4}}$ and $\\sqrt[6]{x} = x^{\\frac{1}{6}}$.\nStep 2: Divide same-base powers by subtracting exponents: $\\frac{x^{9/4}}{x^{1/6}} = x^{\\frac{9}{4} - \\frac{1}{6}}$.\nStep 3: Use the common denominator $12$: $\\frac{9}{4} = \\frac{27}{12}$ and $\\frac{1}{6} = \\frac{2}{12}$, so $\\frac{27}{12} - \\frac{2}{12} = \\frac{25}{12}$. Thus $k = \\frac{25}{12}$.\n\n**Common Mistakes:** Writing $\\sqrt[4]{x^9}$ as $x^{\\frac{4}{9}}$ (the power goes on top, the index on the bottom); adding the exponents instead of subtracting when dividing.\n\n**Test Day Takeaway:** Turn every radical into a fractional exponent first, then subtract exponents when dividing the same base.",
  skills: ["exponent-rules", "radical-expressions"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 9 — Math Module 2 (22 questions, hard track)
// Frozen wavy flow: easy {1(b2),3(b3),14(b3)}, medium {2,5,6,8,10,17,19},
// hard {4,7,9,11,12,13,15,16,18,20,21,22}. Q14 is the designated breather.
// Q1-5 warm-up bar: every opener is 2+ steps or carries a trap (table-read
// linear-vs-exponential, x-intercept anchor, distribute-then-match no-solution,
// tangent-perpendicular, ratio "how many more").
{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "The table gives the volume of water, in liters, in a street sweeper's spray tank at one-minute intervals after spraying begins. Which type of function best models the volume as a function of time?",
  diagram: { type: "dataTable", params: {
    headers: ["Time (minutes)", "Volume (liters)"],
    rows: [
      ["0", "240"],
      ["1", "218"],
      ["2", "196"],
      ["3", "174"]
    ]
  } },
  choices: [
    // distractor: confuses a constant subtracted amount with a constant percent decay
    { id: "A", text: "Increasing exponential" },
    // distractor: reads the constant difference correctly but misses the direction
    { id: "B", text: "Increasing linear" },
    // distractor: right direction, but the values drop by a constant amount, not a constant factor
    { id: "C", text: "Decreasing exponential" },
    { id: "D", text: "Decreasing linear" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Linear Growth Model**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Check consecutive differences: $218 - 240 = -22$, $196 - 218 = -22$, $174 - 196 = -22$. A constant difference means linear, and the values are falling — decreasing linear.\n\n**The Full Solution:**\nStep 1: Test for a constant difference: each minute the volume drops by exactly $22$ liters. Equal steps over equal intervals are the signature of a linear function.\nStep 2: Test the direction: the values run $240 \\to 218 \\to 196 \\to 174$, so the function is decreasing. The model is $V(t) = 240 - 22t$.\nStep 3: Rule out exponential: an exponential would fall by a constant FACTOR, but $\\frac{218}{240} \\approx 0.908$ and $\\frac{196}{218} \\approx 0.899$ are not equal.\n\n**Why the wrong answers are tempting:**\n* Choice A (Increasing exponential): wrong on both counts — the values fall, and by a constant amount.\n* Choice B (Increasing linear): catches the constant $22$-liter step but misses that the volume is dropping.\n* Choice C (Decreasing exponential): right direction, but exponential decay would keep the RATIO constant, not the difference.\n\n**Test Day Takeaway:** From a table, subtract to test for linear and divide to test for exponential — constant differences mean linear, constant ratios mean exponential.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 2,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, line $\\ell$ has a slope of $\\dfrac{5}{12}$ and passes through the point $(-36, 0)$. What is the $y$-coordinate of the point where line $\\ell$ crosses the $y$-axis?",
  correctAnswer: "15",
  explanation: "**SAT Pattern: Slope-Intercept Form**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~20s):** From $(-36, 0)$ in point-slope: $y = \\frac{5}{12}(x + 36)$. At $x = 0$: $y = \\frac{5}{12}(36) = 15$.\n\n**The Full Solution:**\nStep 1: $(-36, 0)$ is the $x$-intercept. Write point-slope with slope $\\frac{5}{12}$: $y - 0 = \\frac{5}{12}(x - (-36)) = \\frac{5}{12}(x + 36)$.\nStep 2: The $y$-intercept is the value at $x = 0$: $y = \\frac{5}{12}(36) = 15$.\n\nCheck: in $y = \\frac{5}{12}x + 15$, setting $y = 0$ gives $\\frac{5}{12}x = -15$, so $x = -36$. $\\checkmark$\n\n**Common Mistakes:** Dropping the sign and computing $\\frac{5}{12}(-36) = -15$; evaluating at the $x$-intercept's $x$-value instead of at $x = 0$.\n\n**Test Day Takeaway:** An $x$-intercept is just a point on the line — feed it and the slope into point-slope form, then evaluate at $x = 0$ to read off the $y$-intercept.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 3,
  type: "fill-in",
  difficulty: "easy",
  band: 3,
  question: "In the equation $c(6x + 10) = 15x - 8$, $c$ is a constant. If the equation has no solution, what is the value of $c$?",
  correctAnswer: "5/2",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $\\dfrac{5}{2}$.**\n\n**The Fast Way (~20s):** Distribute: $6cx + 10c = 15x - 8$. No solution requires equal $x$-coefficients with unequal constants: $6c = 15 \\Rightarrow c = \\dfrac{5}{2}$, and then $10c = 25 \\neq -8$, so the equation truly has no solution.\n\n**The Full Solution:**\nStep 1: Distribute the constant: $c(6x + 10) = 6cx + 10c$.\nStep 2: A linear equation has no solution exactly when the $x$-terms cancel and the leftover constants disagree. Match the coefficients: $6c = 15 \\Rightarrow c = \\dfrac{5}{2}$.\nStep 3: Confirm the constants disagree: $10 \\cdot \\dfrac{5}{2} = 25$ and the right side has $-8$; since $25 \\neq -8$, the equation collapses to $25 = -8$, which is never true. $\\checkmark$\n\n**Common Mistakes:** Confusing \"no solution\" with \"infinitely many\" — infinitely many would also require $10c = -8$, which conflicts with $6c = 15$. Forgetting to distribute $c$ onto the $10$ before reasoning about the constants.\n\n**Test Day Takeaway:** For no solution in a linear equation, set the two $x$-coefficients equal and confirm the constants differ.",
  skills: ["solving-equations", "linear-equations"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A circle in the $xy$-plane has its center at $(-1, 4)$. Line $k$ is tangent to this circle at the point $(3, 7)$. Which of the following points also lies on line $k$?",
  choices: [
    // distractor: near-miss off-line point; line k at x = 0 gives y = 11, not 10
    { id: "A", text: "$(0, 10)$" },
    { id: "B", text: "$(6, 3)$" },
    // distractor: reciprocates without negating (slope 4/3): y = 4/3(x−6)+... gives (6, 11)
    { id: "C", text: "$(6, 11)$" },
    // distractor: negates only (slope −3/4): y = −3/4(x−3)+7 gives (7, 4)
    { id: "D", text: "$(7, 4)$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Circle Tangent Line**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** A tangent is perpendicular to the radius at the contact point. Radius slope from $(-1, 4)$ to $(3, 7)$ is $\\dfrac{7 - 4}{3 - (-1)} = \\dfrac{3}{4}$, so line $k$ has slope $-\\dfrac{4}{3}$: $y = -\\dfrac{4}{3}(x - 3) + 7$. At $x = 6$: $y = -4 + 7 = 3$, giving $(6, 3)$.\n\n**The Full Solution:**\nStep 1: Find the radius slope from center $(-1, 4)$ to tangent point $(3, 7)$: $\\dfrac{7 - 4}{3 - (-1)} = \\dfrac{3}{4}$.\nStep 2: The tangent is perpendicular, so its slope is the negative reciprocal: $-\\dfrac{4}{3}$.\nStep 3: Write line $k$ through $(3, 7)$: $y = -\\dfrac{4}{3}(x - 3) + 7$.\nStep 4: Test $(6, 3)$: $-\\dfrac{4}{3}(3) + 7 = -4 + 7 = 3$. $\\checkmark$ It lies on line $k$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(0, 10)$): looks plausible, but $x = 0$ gives $y = -\\dfrac{4}{3}(-3) + 7 = 11$, not $10$.\n* Choice C ($(6, 11)$): reciprocates the radius slope to $\\dfrac{4}{3}$ but drops the negative sign.\n* Choice D ($(7, 4)$): negates the radius slope to $-\\dfrac{3}{4}$ but forgets to take the reciprocal.\n\n**Test Day Takeaway:** A tangent is perpendicular to the radius at the point of tangency — find the radius slope, take its negative reciprocal, write the line through the contact point, then test each candidate.",
  skills: ["circle-equations", "perpendicular-slopes", "coordinate-geometry"]
},
{
  id: 5,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A granola mix contains rolled oats and almonds, by mass, in a ratio of $9$ to $4$. A batch of the mix has a total mass of $91$ kilograms, all of it oats and almonds. How many more kilograms of oats than almonds does the batch contain?",
  correctAnswer: "35",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**The correct answer is $35$.**\n\n**The Fast Way (~20s):** Total parts $= 9 + 4 = 13$, so each part is $91 \\div 13 = 7$ kg. The difference is $(9 - 4)$ parts $= 5 \\cdot 7 = 35$ kg.\n\n**The Full Solution:**\nStep 1: The ratio $9:4$ splits the batch into $9 + 4 = 13$ equal parts. Let each part be $k$ kilograms, so oats $= 9k$ and almonds $= 4k$.\nStep 2: The parts fill the batch: $9k + 4k = 13k = 91 \\Rightarrow k = 7$.\nStep 3: Oats $= 63$ kg and almonds $= 28$ kg. The question asks how many MORE kilograms of oats: $63 - 28 = 35$.\n\n**Common Mistakes:** Reporting the oats total ($63$) or the almond total ($28$) instead of the difference; dividing $91$ by $9$ or by $4$ instead of by the sum $13$.\n\n**Test Day Takeaway:** Divide the total by the sum of the ratio parts to get one part — then re-read the ask: \"how many more\" wants the DIFFERENCE of the two quantities, not either quantity alone.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The number $b$ is $75\\%$ less than $320$. The number $a$ is $40\\%$ greater than $b$. What is the value of $a$?",
  correctAnswer: "112",
  explanation: "**SAT Pattern: Successive Percent Changes**\n\n**The correct answer is $112$.**\n\n**The Fast Way (~20s):** \"$75\\%$ less than $320$\" keeps $25\\%$: $b = 0.25 \\cdot 320 = 80$. \"$40\\%$ greater than $b$\" multiplies by $1.40$: $a = 1.40 \\cdot 80 = 112$.\n\n**The Full Solution:**\nStep 1: \"$75\\%$ less than $320$\" leaves $100\\% - 75\\% = 25\\%$ of $320$, so $b = 0.25 \\cdot 320 = 80$.\nStep 2: \"$40\\%$ greater than $b$\" means $b$ plus another $40\\%$ of $b$, a multiplier of $1 + 0.40 = 1.40$.\nStep 3: $a = 1.40 \\cdot 80 = 112$.\n\n**Common Mistakes:** Treating \"$75\\%$ less\" as $\\times 0.75$ instead of $\\times 0.25$ (gives $b = 240$). Treating \"$40\\%$ greater\" as $\\times 0.40$ instead of $\\times 1.40$ (gives $32$).\n\n**Test Day Takeaway:** \"$p\\%$ greater\" multiplies by $1 + \\dfrac{p}{100}$; \"$p\\%$ less\" multiplies by $1 - \\dfrac{p}{100}$. Chain the multipliers in order.",
  skills: ["percents", "percent-increase", "percent-decrease"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A savings account compounds interest every two weeks, so its balance is modeled by $B(t) = 5000 \\cdot (1.002)^{26t}$, where $t$ is the number of years since the account opened. Which of the following is closest to the effective annual interest rate?",
  choices: [
    // distractor: reports the per-period (two-week) rate
    { id: "A", text: "$0.2\\%$" },
    // distractor: misreads the base 1.002 as a 2% annual factor
    { id: "B", text: "$2\\%$" },
    // distractor: multiplies 0.2% × 26 for the nominal rate, ignoring compounding
    { id: "C", text: "$5.2\\%$" },
    { id: "D", text: "$5.3\\%$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Compound Interest**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The per-period factor is $1.002$, applied $26$ times per year. The effective annual factor is $(1.002)^{26} \\approx 1.0533$, an annual increase of about $5.3\\%$.\n\n**The Full Solution:**\nStep 1: Regroup the model to expose the yearly factor: $B(t) = 5000\\,(1.002)^{26t} = 5000\\,\\big((1.002)^{26}\\big)^t$.\nStep 2: The effective annual growth factor is $(1.002)^{26} \\approx 1.0533$.\nStep 3: A factor of $1.0533$ means the balance grows about $5.3\\%$ per year, which is closest to Choice D.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.2\\%$): reports the two-week rate instead of the annual rate.\n* Choice B ($2\\%$): misreads the base $1.002$ as a $2\\%$ annual factor.\n* Choice C ($5.2\\%$): multiplies $0.2\\% \\times 26$ for the nominal rate, ignoring compounding.\n\n**Test Day Takeaway:** To turn a per-period compounding model into an effective annual rate, raise the period factor to the number of periods per year, then subtract $1$.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The expression $\\dfrac{24m^9 n^3}{8m^3 n^8}$ is equivalent to which of the following?",
  choices: [
    // distractor: adds exponents instead of subtracting
    { id: "A", text: "$\\dfrac{3m^{12}}{n^{11}}$" },
    // distractor: subtracts the coefficients (24 − 8) instead of dividing
    { id: "B", text: "$\\dfrac{16m^6}{n^5}$" },
    { id: "C", text: "$\\dfrac{3m^6}{n^5}$" },
    // distractor: flips the sign of the n exponent and keeps it in the numerator
    { id: "D", text: "$3m^6 n^5$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $\\dfrac{24}{8} = 3$, $m^{9-3} = m^6$, $n^{3-8} = n^{-5} = \\dfrac{1}{n^5}$. Result: $\\dfrac{3m^6}{n^5}$.\n\n**The Full Solution:**\nStep 1: Divide the coefficients: $\\dfrac{24}{8} = 3$.\nStep 2: Subtract exponents on like bases: $m^{9-3} = m^6$ and $n^{3-8} = n^{-5}$.\nStep 3: A negative exponent moves the factor to the denominator: $3m^6 n^{-5} = \\dfrac{3m^6}{n^5}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{3m^{12}}{n^{11}}$): adds the exponents ($9+3$, $3+8$) instead of subtracting.\n* Choice B ($\\dfrac{16m^6}{n^5}$): subtracts the coefficients ($24 - 8$) instead of dividing them.\n* Choice D ($3m^6 n^5$): flips the sign of the $n$ exponent and leaves it in the numerator.\n\n**Test Day Takeaway:** Dividing powers of the same base means subtracting exponents; a negative result sends the factor to the denominator. Coefficients divide — they never subtract.",
  skills: ["exponent-rules"]
},
{
  id: 9,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A quadratic function $h$ models the height, in meters, of a slow-pitch ball lobbed by a batting-cage machine, where $x$ is the horizontal distance, in meters, from the machine. The model estimates that the ball reaches its maximum height of $6.4$ meters at a horizontal distance of $8$ meters, and that the ball returns to its launch height ($0$ meters) at a horizontal distance of $16$ meters. Based on the model, what is the height of the ball, in meters, at a horizontal distance of $14$ meters?",
  correctAnswer: "2.8",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**The correct answer is $2.8$.**\n\n**The Fast Way (~40s):** The max $6.4$ at $x = 8$ is the vertex: $h(x) = a(x - 8)^2 + 6.4$. The root $h(16) = 0$ gives $64a + 6.4 = 0 \\Rightarrow a = -0.1$. Then $h(14) = -0.1(36) + 6.4 = 2.8$.\n\n**The Full Solution:**\nStep 1: The maximum height $6.4$ at $x = 8$ is the vertex, so $h(x) = a(x - 8)^2 + 6.4$.\nStep 2: The ball returns to launch height at $x = 16$, so $h(16) = 0$: $a(8)^2 + 6.4 = 0 \\Rightarrow 64a = -6.4 \\Rightarrow a = -0.1$.\nStep 3: Evaluate at $x = 14$: $h(14) = -0.1(14 - 8)^2 + 6.4 = -0.1(36) + 6.4 = -3.6 + 6.4 = 2.8$ meters.\n(As a fraction, $\\frac{14}{5}$; either form is accepted.)\n\n**Common Mistakes:** Forgetting the parabola opens downward, so $a$ must be negative. Using $x = 16$ as the axis of symmetry instead of the vertex $x = 8$.\n\n**Test Day Takeaway:** Build the parabola in vertex form from its max, solve for $a$ with a known point (often a root), then substitute the requested input.",
  skills: ["quadratic-functions", "vertex-form", "function-evaluation"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The dot plot shows the number of attempts each of $11$ climbers needed to complete a bouldering route. A twelfth climber completes the route in $15$ attempts, and that value is added to the data set. Which statement about the resulting $12$-value data set is true?",
  diagram: { type: "dotPlot", params: {
    data: [
      { value: 2, count: 1 },
      { value: 3, count: 3 },
      { value: 4, count: 4 },
      { value: 5, count: 2 },
      { value: 6, count: 1 }
    ],
    xLabel: "Number of attempts"
  } },
  choices: [
    { id: "A", text: "The median stays the same and the range increases by $9$." },
    // distractor: assumes adding any value shifts an even-count median by 0.5
    { id: "B", text: "The median decreases by $0.5$ and the range increases by $9$." },
    // distractor: uses the new value 15 itself as the range increase
    { id: "C", text: "The median stays the same and the range increases by $15$." },
    // distractor: treats one added value as unable to change any summary statistic
    { id: "D", text: "The median and the range both stay the same." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Original $11$ values: median $=$ the $6$th value $= 4$, range $= 6 - 2 = 4$. Adding $15$: the sorted $12$ values have median $\\frac{4 + 4}{2} = 4$, and range $= 15 - 2 = 13$. Median unchanged, range up by $9$.\n\n**The Full Solution:**\nStep 1: From the dot plot, the sorted values are $2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 6$. Median $=$ the $6$th value $= 4$; range $= 6 - 2 = 4$.\nStep 2: After adding $15$: $12$ values, median $=$ mean of the $6$th and $7$th values $= \\frac{4 + 4}{2} = 4$; range $= 15 - 2 = 13$.\nStep 3: Median change $= 0$; range change $= 13 - 4 = 9$. That matches Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B: assumes moving to an even count must shift the median by $0.5$ — but both middle values are $4$.\n* Choice C: uses the new value $15$ itself as the range increase instead of $15 - 6 = 9$.\n* Choice D: a single high outlier can't move the median here, but it always stretches the range.\n\n**Test Day Takeaway:** A single extreme value stretches the range but leaves the median unchanged when the middle values don't move.",
  skills: ["statistics"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Line $r$ passes through the points $(2, 3)$ and $(6, 5)$. Line $s$ is perpendicular to line $r$ and passes through the point $(4, 18)$. At what $x$-coordinate does line $s$ cross the $x$-axis?",
  correctAnswer: "13",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~30s):** Slope of $r$: $\\dfrac{5 - 3}{6 - 2} = \\dfrac{1}{2}$. Perpendicular slope: $-2$. Line $s$ through $(4, 18)$: $y = -2x + 26$. Set $y = 0$: $2x = 26 \\Rightarrow x = 13$.\n\n**The Full Solution:**\nStep 1: Slope of line $r$: $m_r = \\dfrac{5 - 3}{6 - 2} = \\dfrac{2}{4} = \\dfrac{1}{2}$.\nStep 2: Line $s$ is perpendicular, so $m_s = -2$ (the negative reciprocal of $\\frac{1}{2}$).\nStep 3: Through $(4, 18)$: $y - 18 = -2(x - 4) \\Rightarrow y = -2x + 26$.\nStep 4: The $x$-intercept is where $y = 0$: $0 = -2x + 26 \\Rightarrow x = 13$.\n\n**Common Mistakes:** Using the parallel slope $\\frac{1}{2}$ instead of the perpendicular slope $-2$. Reporting the $y$-intercept ($26$) instead of the $x$-intercept ($13$). A sign slip when solving $-2x + 26 = 0$.\n\n**Test Day Takeaway:** Flip and negate the slope for a perpendicular line, anchor it at the given point, then set $y = 0$ to find where it crosses the $x$-axis.",
  skills: ["slope", "linear-functions", "coordinate-geometry"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Consider the system of equations:\n\n$5x - 2y = 34$\n$3x + 4y = 10$\n\nWhat is the value of $x + y$?",
  correctAnswer: "4",
  explanation: "**SAT Pattern: Solve for a Combination**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~20s):** Multiply equation 1 by $2$: $10x - 4y = 68$. Add equation 2 ($3x + 4y = 10$): $13x = 78 \\Rightarrow x = 6$. Then $4y = 10 - 18 = -8 \\Rightarrow y = -2$, so $x + y = 4$.\n\n**The Full Solution:**\nStep 1: Scale equation 1 by $2$ so the $y$-terms become $-4y$ and cancel the $+4y$ in equation 2: $10x - 4y = 68$.\nStep 2: Add equation 2: $(10x - 4y) + (3x + 4y) = 68 + 10 \\Rightarrow 13x = 78 \\Rightarrow x = 6$.\nStep 3: Substitute into equation 2: $3(6) + 4y = 10 \\Rightarrow 4y = -8 \\Rightarrow y = -2$.\nStep 4: $x + y = 6 + (-2) = 4$. Check: $5(6) - 2(-2) = 34$ $\\checkmark$ and $3(6) + 4(-2) = 10$ $\\checkmark$.\n\n**Common Mistakes:** Reporting $x - y = 8$ when the question asks for $x + y$. Sign errors when adding the $-8$: $y = -2$, not $2$.\n\n**Test Day Takeaway:** Scale one equation so a variable cancels on addition, solve for the first variable, back-substitute for the second, then form the requested combination.",
  skills: ["systems-of-equations"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $g$ is defined by $g(x) = a\\sqrt{x + b}$, where $a$ and $b$ are constants. In the $xy$-plane, the graph of $y = g(x)$ passes through the point $(-11, 0)$, and $g(-2) < 0$. Which of the following must be true?",
  choices: [
    { id: "A", text: "$a < b$" },
    // distractor: reverses the inequality between a and b
    { id: "B", text: "$a > b$" },
    // distractor: right sign idea, wrong value — g(0) is an irrational negative, not −11
    { id: "C", text: "$g(0) = -11$" },
    // distractor: assumes g(0) equals the magnitude of b and ignores a
    { id: "D", text: "$g(0) = 11$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Radical Function Parameter Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The graph passes through $(-11, 0)$, so the radicand is $0$ there: $-11 + b = 0 \\Rightarrow b = 11$. Then $g(-2) = a\\sqrt{-2 + 11} = 3a < 0 \\Rightarrow a < 0$. So $a < 0 < 11 = b$, giving $a < b$.\n\n**The Full Solution:**\nStep 1: $g(x) = a\\sqrt{x + b}$ equals $0$ only where the radicand is $0$. The point $(-11, 0)$ means $g(-11) = 0$, so $-11 + b = 0 \\Rightarrow b = 11$.\nStep 2: Apply $g(-2) < 0$: $g(-2) = a\\sqrt{-2 + 11} = a\\sqrt{9} = 3a$. Then $3a < 0 \\Rightarrow a < 0$.\nStep 3: With $a$ negative and $b = 11$ positive, $a < b$ must hold.\n\n**Why the wrong answers are tempting:**\n* Choice B ($a > b$): reverses the inequality; $a$ is negative and $b$ is positive.\n* Choice C ($g(0) = -11$): right sign idea, wrong value; $g(0) = a\\sqrt{11}$ is an irrational negative number, not $-11$.\n* Choice D ($g(0) = 11$): assumes $g(0)$ equals the magnitude of $b$ and ignores $a$.\n\n**Test Day Takeaway:** Use a known zero to pin one constant inside the radical, then use a sign condition on an output to pin the other.",
  skills: ["radical-functions", "function-interpretation"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "easy",
  band: 3,
  question: "During a public viewing night at an observatory, $35\\%$ of the $240$ visitors looked through the main telescope. How many of the visitors looked through the main telescope?",
  correctAnswer: "84",
  explanation: "**SAT Pattern: Percent of a Whole**\n\n**The correct answer is $84$.**\n\n**The Fast Way (~10s):** $35\\%$ of $240 = 0.35 \\cdot 240 = 84$.\n\n**The Full Solution:**\nStep 1: \"$p\\%$ of $N$\" is a multiplication: write the percent as a decimal and multiply.\nStep 2: $0.35 \\cdot 240 = 84$ visitors.\n(Check: $10\\%$ of $240$ is $24$, so $35\\%$ is $3.5 \\cdot 24 = 84$ $\\checkmark$.)\n\n**Common Mistakes:** Dividing by $0.35$ (that reverses the problem and gives about $686$). Misplacing the decimal and computing $3.5\\%$ instead of $35\\%$.\n\n**Test Day Takeaway:** \"$p\\%$ of $N$\" is a single multiplication: $\\dfrac{p}{100} \\cdot N$.",
  skills: ["percents"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The expression $5\\sqrt[3]{2^3 x^{12}} \\cdot \\sqrt[4]{3^4 x}$ is equivalent to $ax^b$, where $a$ and $b$ are positive constants and $x > 1$. What is the value of $a + b$? Express your answer as a fraction.",
  correctAnswer: "137/4",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\frac{137}{4}$.**\n\n**The Fast Way (~40s):** Rewrite each radical: $\\sqrt[3]{2^3 x^{12}} = 2x^4$ and $\\sqrt[4]{3^4 x} = 3x^{1/4}$. Multiply everything, including the leading $5$: coefficients give $5 \\cdot 2 \\cdot 3 = 30$ and exponents add to $4 + \\frac{1}{4} = \\frac{17}{4}$. So $a = 30$, $b = \\frac{17}{4}$, and $a + b = \\frac{137}{4}$.\n\n**The Full Solution:**\nStep 1: Convert the first radical. $\\sqrt[3]{2^3 x^{12}} = (2^3 x^{12})^{1/3} = 2^{3/3} x^{12/3} = 2x^4$.\nStep 2: Convert the second radical. $\\sqrt[4]{3^4 x} = (3^4 x)^{1/4} = 3^{4/4} x^{1/4} = 3x^{1/4}$.\nStep 3: Multiply all three factors. $5 \\cdot (2x^4) \\cdot (3x^{1/4}) = (5 \\cdot 2 \\cdot 3)\\, x^{4 + 1/4} = 30\\, x^{17/4}$, since $4 + \\frac{1}{4} = \\frac{17}{4}$.\nStep 4: Match to $ax^b$: $a = 30$, $b = \\frac{17}{4}$. So $a + b = 30 + \\frac{17}{4} = \\frac{120}{4} + \\frac{17}{4} = \\frac{137}{4}$.\n\n**Common Mistakes:** Leaving the coefficient as $2 \\cdot 3 = 6$ and forgetting to multiply by the leading $5$; adding the radical indices ($3$ and $4$) instead of adding the simplified exponents $4$ and $\\frac{1}{4}$.\n\n**Test Day Takeaway:** Turn every radical into a rational exponent first, simplify each factor on its own, then multiply the coefficients and add the exponents.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table shows the estimated number of bacteria cells in a laboratory sample at the end of each of the first $3$ days of an experiment, along with the count when the experiment began. Which equation best models the number of cells $y$ at the end of day $t$?",
  diagram: { type: "dataTable", params: {
    headers: ["Day", "Number of cells"],
    rows: [
      ["0", "40"],
      ["1", "100"],
      ["2", "250"],
      ["3", "625"]
    ]
  } },
  choices: [
    // distractor: builds a linear model from the first difference (100 − 40 = 60)
    { id: "A", text: "$y = 40 + 60t$" },
    // distractor: converts the 150% daily increase to a factor of 1.5, forgetting the +1 base
    { id: "B", text: "$y = 40(1.5)^t$" },
    { id: "C", text: "$y = 40(2.5)^t$" },
    // distractor: uses the day-1 count 100 as the initial value
    { id: "D", text: "$y = 100(2.5)^t$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Test the ratios: $\\frac{100}{40} = 2.5$, $\\frac{250}{100} = 2.5$, $\\frac{625}{250} = 2.5$. A constant factor of $2.5$ per day with initial value $40$ gives $y = 40(2.5)^t$.\n\n**The Full Solution:**\nStep 1: Check for a constant ratio between consecutive counts: each entry is $2.5$ times the previous one, so the model is exponential with base $2.5$.\nStep 2: The count at $t = 0$ is $40$, so the initial value is $40$: $y = 40(2.5)^t$.\nStep 3: Check: $40(2.5)^1 = 100$, $40(2.5)^2 = 250$, $40(2.5)^3 = 625$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = 40 + 60t$): builds a linear model from the first difference ($60$), but the later gaps ($150$, then $375$) rule out a constant rate.\n* Choice B ($y = 40(1.5)^t$): notices each day's count is $150\\%$ larger and writes $1.5$, forgetting the $+1$ base — a $150\\%$ increase is a factor of $2.5$.\n* Choice D ($y = 100(2.5)^t$): uses the day-$1$ count as the initial value instead of the day-$0$ count.\n\n**Test Day Takeaway:** From a table, a constant RATIO means exponential: the base is that ratio, and the initial value is the $t = 0$ entry.",
  skills: ["exponential-functions", "exponential-growth"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A data set of an observatory dome's rotation times has a mean of $62$ seconds and a standard deviation of $8$ seconds. Which of the following values is more than $3$ standard deviations above the mean?",
  choices: [
    // distractor: uses 1 standard deviation above (62 + 8 = 70)
    { id: "A", text: "$70$" },
    // distractor: lands just below the 3-SD boundary of 86
    { id: "B", text: "$85$" },
    // distractor: equals exactly 3 SD above; "more than" excludes equality
    { id: "C", text: "$86$" },
    { id: "D", text: "$87$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Inequality Boundary**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Three standard deviations above the mean is $62 + 3(8) = 86$. \"More than $3$ standard deviations above\" means strictly greater than $86$, and only $87$ qualifies.\n\n**The Full Solution:**\nStep 1: The boundary $3$ standard deviations above the mean is $\\mu + 3\\sigma = 62 + 3(8) = 62 + 24 = 86$.\nStep 2: \"More than $3$ standard deviations above\" means the value lies strictly past that boundary on the high side, so it must satisfy value $> 86$.\nStep 3: Among the choices, only $87 > 86$, so choice D works.\n\n**Why the wrong answers are tempting:**\n* Choice A ($70$): only $1$ standard deviation above ($62 + 8 = 70$).\n* Choice B ($85$): sits just below the boundary $86$, not past it.\n* Choice C ($86$): equals the boundary, but \"more than\" excludes equality.\n\n**Test Day Takeaway:** \"More than $k$ standard deviations above\" means strictly past the boundary $\\mu + k\\sigma$ — equality at the boundary does not count.",
  skills: ["statistics"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$$\\dfrac{x^2}{\\sqrt{x^2 - c^2}} = \\dfrac{c^2}{\\sqrt{x^2 - c^2}} + 24$$\n\nIn the given equation, $c$ is a positive constant. One solution to the equation has the form $x = -\\sqrt{c^2 + p}$, where $p$ is a positive constant. What is the value of $p$?",
  correctAnswer: "576",
  explanation: "**SAT Pattern: Radical Equation — Substitution**\n\n**The correct answer is $576$.**\n\n**The Fast Way (~50s):** Subtract the fractions: $\\frac{x^2 - c^2}{\\sqrt{x^2 - c^2}} = 24$, which simplifies to $\\sqrt{x^2 - c^2} = 24$. Square: $x^2 - c^2 = 576$, so $x = \\pm\\sqrt{c^2 + 576}$, giving $p = 576$.\n\n**The Full Solution:**\nStep 1: Combine the fractions on one side: $\\frac{x^2}{\\sqrt{x^2 - c^2}} - \\frac{c^2}{\\sqrt{x^2 - c^2}} = 24 \\Rightarrow \\frac{x^2 - c^2}{\\sqrt{x^2 - c^2}} = 24$.\nStep 2: The left side simplifies, since $\\frac{w}{\\sqrt{w}} = \\sqrt{w}$ for $w > 0$: $\\sqrt{x^2 - c^2} = 24$.\nStep 3: Square both sides: $x^2 - c^2 = 576$, so $x^2 = c^2 + 576$ and $x = \\pm\\sqrt{c^2 + 576}$.\nStep 4: The negative solution is $x = -\\sqrt{c^2 + 576}$, which matches $x = -\\sqrt{c^2 + p}$. So $p = 576$.\n\n**Common Mistakes:** Forgetting to square $24$ and writing $x^2 - c^2 = 24$; treating $w = 0$ as a solution — it makes the original denominator $\\sqrt{x^2 - c^2}$ zero, so it is extraneous.\n\n**Test Day Takeaway:** When identical radicals appear on both sides, collect them first — $\\frac{w}{\\sqrt{w}} = \\sqrt{w}$ turns the equation into a single radical you can square away.",
  skills: ["radical-equations", "rational-equations"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  question: "An observatory dome must rotate $75$ degrees to align its opening with a target, and it rotates at a constant rate of $2.5$ degrees per second. The function $A(t) = 75 - 2.5t$ gives the number of degrees remaining $t$ seconds after the rotation starts. According to this model, how many degrees remain $14$ seconds after the rotation starts?",
  choices: [
    // distractor: computes only the degrees already rotated, not the remainder
    { id: "A", text: "$35$" },
    { id: "B", text: "$40$" },
    // distractor: subtracts the rate once instead of multiplying by t
    { id: "C", text: "$72.5$" },
    // distractor: adds instead of subtracting
    { id: "D", text: "$110$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Linear Model from Rate and Initial Value**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Substitute $t = 14$: $A(14) = 75 - 2.5(14) = 75 - 35 = 40$ degrees, which is choice B.\n\n**The Full Solution:**\nStep 1: The model is $A(t) = 75 - 2.5t$, so plug in $t = 14$.\nStep 2: $A(14) = 75 - 2.5(14) = 75 - 35 = 40$ degrees remaining.\n\n**Why the wrong answers are tempting:**\n* Choice A ($35$): computes $2.5 \\cdot 14 = 35$, the degrees already rotated, not the degrees remaining.\n* Choice C ($72.5$): subtracts the rate once ($75 - 2.5$) instead of multiplying it by $t$.\n* Choice D ($110$): adds $35$ instead of subtracting it.\n\n**Test Day Takeaway:** In a decreasing linear model $a - rt$, multiply the rate by the time first, then subtract from the starting amount.",
  skills: ["linear-functions", "function-evaluation"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A drone-photography app models the number of processed image tiles with $D(t) = 40 \\cdot 2^{\\frac{t}{6}}$, where $t$ is measured in seconds after an upload begins. By what percent does the number of processed tiles increase over each $18$-second interval?",
  choices: [
    // distractor: uses one 6-second period (factor 2, a 100% increase)
    { id: "A", text: "$100\\%$" },
    // distractor: uses two periods (2² = 4, a 300% increase) instead of three
    { id: "B", text: "$300\\%$" },
    { id: "C", text: "$700\\%$" },
    // distractor: reports the factor 8 as 800% without subtracting the original 1
    { id: "D", text: "$800\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Over $18$ seconds the exponent $\\frac{t}{6}$ rises by $\\frac{18}{6} = 3$, so the count is multiplied by $2^3 = 8$. A factor of $8$ is a $(8 - 1) \\cdot 100\\% = 700\\%$ increase, which is choice C.\n\n**The Full Solution:**\nStep 1: Compare the count $18$ seconds apart: $\\frac{D(t + 18)}{D(t)} = \\frac{40 \\cdot 2^{\\frac{t + 18}{6}}}{40 \\cdot 2^{\\frac{t}{6}}} = 2^{\\frac{18}{6}} = 2^3 = 8$.\nStep 2: So the count is multiplied by $8$ every $18$ seconds.\nStep 3: A growth factor of $8$ is a percent increase of $(8 - 1) \\cdot 100\\% = 700\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($100\\%$): uses just one $6$-second period (factor $2$, a $100\\%$ increase) instead of three.\n* Choice B ($300\\%$): uses two periods ($2^2 = 4$, a $300\\%$ increase) instead of three.\n* Choice D ($800\\%$): reports the factor $8$ as $800\\%$ without subtracting the original $1$.\n\n**Test Day Takeaway:** A growth factor of $k$ is a $(k - 1) \\cdot 100\\%$ increase, not $k \\cdot 100\\%$ — always subtract the starting $1$.",
  skills: ["exponential-functions", "percents"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The right triangle shown has an area of $128\\sqrt{3}$ square units. What is the length, in units, of the hypotenuse of the triangle?",
  diagram: {
    type: "triangleWithAngles",
    params: {
      angleLabels: ["60°", "30°", "90°"]
    }
  },
  correctAnswer: "32",
  explanation: "**SAT Pattern: Special Right Triangle — 30-60-90**\n\n**The correct answer is $32$.**\n\n**The Fast Way (~50s):** In a $30$-$60$-$90$ triangle with short leg $s$, the legs are $s$ and $s\\sqrt{3}$, so the area is $\\frac{1}{2} \\cdot s \\cdot s\\sqrt{3} = \\frac{\\sqrt{3}}{2}s^2$. Set $\\frac{\\sqrt{3}}{2}s^2 = 128\\sqrt{3} \\Rightarrow s^2 = 256 \\Rightarrow s = 16$. The hypotenuse is $2s = 32$.\n\n**The Full Solution:**\nStep 1: The angles $30^\\circ$, $60^\\circ$, $90^\\circ$ make this a $30$-$60$-$90$ triangle, with sides in ratio $1 : \\sqrt{3} : 2$ (short leg : long leg : hypotenuse). Let the short leg be $s$.\nStep 2: The two legs $s$ and $s\\sqrt{3}$ are perpendicular, so the area is $\\frac{1}{2} \\cdot s \\cdot s\\sqrt{3} = \\frac{\\sqrt{3}}{2}s^2$.\nStep 3: Set this equal to the given area: $\\frac{\\sqrt{3}}{2}s^2 = 128\\sqrt{3} \\Rightarrow s^2 = 256 \\Rightarrow s = 16$.\nStep 4: The hypotenuse is twice the short leg: $2s = 2(16) = 32$.\nCheck: legs $16$ and $16\\sqrt{3}$ give area $\\frac{1}{2}(16)(16\\sqrt{3}) = 128\\sqrt{3}$, and hypotenuse $\\sqrt{16^2 + (16\\sqrt{3})^2} = \\sqrt{256 + 768} = \\sqrt{1024} = 32$. $\\checkmark$\n\n**Common Mistakes:** Reporting the short leg $16$ or the long leg $16\\sqrt{3}$ instead of the hypotenuse; using an equilateral-triangle area formula instead of treating the two legs as base and height.\n\n**Test Day Takeaway:** In a $30$-$60$-$90$ triangle the legs are $s$ and $s\\sqrt{3}$, the area is $\\frac{\\sqrt{3}}{2}s^2$, and the hypotenuse is $2s$.",
  skills: ["special-right-triangles", "area"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the graph of the line $y = 4x + k$ and the graph of the parabola $y = x^2 - 2x + 13$ intersect at exactly one point. What is the value of $k$?",
  choices: [
    // distractor: sign error when isolating k — solves 4k = −16
    { id: "A", text: "$-4$" },
    { id: "B", text: "$4$" },
    // distractor: reports the parabola's vertex y-value (12) as k
    { id: "C", text: "$12$" },
    // distractor: grabs the parabola's constant 13 without forming the discriminant
    { id: "D", text: "$13$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Line-Parabola Intersection Count**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Set them equal: $x^2 - 2x + 13 = 4x + k \\Rightarrow x^2 - 6x + (13 - k) = 0$. Exactly one intersection means the discriminant is $0$: $36 - 4(13 - k) = 0 \\Rightarrow 4k = 16 \\Rightarrow k = 4$.\n\n**The Full Solution:**\nStep 1: Set the line equal to the parabola: $x^2 - 2x + 13 = 4x + k$.\nStep 2: Move every term to one side: $x^2 - 6x + (13 - k) = 0$.\nStep 3: A line meets a parabola at exactly one point when this quadratic has exactly one real root, so the discriminant is $0$: $(-6)^2 - 4(1)(13 - k) = 0 \\Rightarrow 36 - 52 + 4k = 0 \\Rightarrow 4k = 16 \\Rightarrow k = 4$.\nCheck: with $k = 4$, $x^2 - 6x + 9 = 0 \\Rightarrow (x - 3)^2 = 0$, a single root $x = 3$, and both graphs pass through $(3, 16)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): sign error — solves $4k = -16$ instead of $4k = 16$.\n* Choice C ($12$): reports the parabola's vertex $y$-value ($12$ at $x = 1$) instead of $k$.\n* Choice D ($13$): grabs the parabola's constant $13$ directly without forming the discriminant.\n\n**Test Day Takeaway:** A line meets a parabola at exactly one point when the combined quadratic has a zero discriminant — set $b^2 - 4ac = 0$ and solve.",
  skills: ["quadratic-equations", "systems-of-equations"]
}
      ]
    }
  ]
};
