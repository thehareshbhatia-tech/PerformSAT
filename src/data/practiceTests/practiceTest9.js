// Practice Test 9 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// M2 flow-diversification pass (2026-06): unique wavy difficulty flow
// (easy {1,3,14}, medium {2,5,6,8,10,17,19}, hard {4,7,9,11,12,13,15,16,18,20,21,22}),
// six transformed pool items infused, retired-family archetypes replaced, and
// lighthouse/fabric/ski-lift/podcast/greenhouse/go-kart carriers. M1 de-cloned at
// Q8 (cylinder carrier), Q20 (Pythagorean area), Q22 (radical-quotient exponents).

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
  question: "A wildlife reserve has $1{,}840$ migratory birds, and the number of migratory birds is $40\\%$ of the total number of birds in the reserve. How many birds, in total, are in the reserve?",
  choices: [
    // distractor: applies the percent forward — 1840 \times 0.40 = 736
    { id: "A", text: "$736$" },
    // distractor: divides by the complement — 1840 / 0.60 \approx 3067
    { id: "B", text: "$3{,}067$" },
    { id: "C", text: "$4{,}600$" },
    // distractor: divides by 0.04 instead of 0.40 (decimal-place slip)
    { id: "D", text: "$46{,}000$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The $1{,}840$ birds are $40\\%$ of the whole, so divide: $\\frac{1{,}840}{0.40} = 4{,}600$.\n\n**The Full Solution:**\nStep 1: Let $T$ be the total. The given count is a percent of $T$, so $0.40 \\cdot T = 1{,}840$.\nStep 2: Divide both sides by $0.40$: $T = \\frac{1{,}840}{0.40} = 4{,}600$.\nStep 3: Check: $0.40 \\cdot 4{,}600 = 1{,}840$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($736$): multiplies $1{,}840 \\cdot 0.40$ instead of dividing — the wrong direction.\n* Choice B ($3{,}067$): divides by the complement $0.60$, treating $1{,}840$ as the non-migratory share.\n* Choice D ($46{,}000$): divides by $0.04$ instead of $0.40$ — a decimal-place slip.\n\n**Test Day Takeaway:** When a part equals a percent of an unknown whole, divide the part by the percent (as a decimal) to recover the whole.",
  skills: ["percents"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A trail mix recipe uses peanuts and raisins in a ratio of $5$ cups of peanuts to $2$ cups of raisins. If the total amount of peanuts and raisins combined is $63$ cups, how many cups of peanuts does the recipe use?",
  choices: [
    // distractor: picks the raisin ratio number (2) directly
    { id: "A", text: "$2$" },
    // distractor: uses 5/2 of total instead of 5/7 (wrong base)
    { id: "B", text: "$25.2$" },
    { id: "C", text: "$45$" },
    // distractor: solves for raisins instead of peanuts (2/7 of 63 = 18)
    { id: "D", text: "$18$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Peanuts are $\\frac{5}{5+2}=\\frac{5}{7}$ of the mix, so peanuts $=\\frac{5}{7}\\cdot 63 = 45$ cups.\n\n**The Full Solution:**\nStep 1: Write the parts as $5k$ peanuts and $2k$ raisins, matching the $5:2$ ratio.\nStep 2: Their sum is the total: $5k + 2k = 7k = 63$, so $k = 9$.\nStep 3: Peanuts $= 5k = 5 \\cdot 9 = 45$ cups. Check: raisins $= 18$, and $45 + 18 = 63$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reports the raisin part of the ratio instead of solving.\n* Choice B ($25.2$): uses $\\frac{5}{2}$ of the total rather than $\\frac{5}{7}$.\n* Choice D ($18$): solves for raisins ($\\frac{2}{7}\\cdot 63$) instead of peanuts.\n\n**Test Day Takeaway:** When you know the total of both parts, each part's fraction uses the SUM of the ratio numbers as its denominator, not a single part.",
  skills: ["word-problems", "solving-equations", "ratios"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The function $f(t) = 64 + 9t$ models the temperature, in degrees Fahrenheit, of a soup $t$ minutes after a stove burner is turned on. What does the number $9$ represent in this context?",
  choices: [
    // distractor: confuses 9 with the initial value (which is 64)
    { id: "A", text: "The temperature of the soup before the burner is turned on" },
    // distractor: treats 9 as an input value rather than a rate of change
    { id: "B", text: "The temperature of the soup after $9$ minutes" },
    { id: "C", text: "The increase in temperature, in degrees Fahrenheit, each minute" },
    // distractor: inverts the rate (would be 1/9 minutes per degree)
    { id: "D", text: "The number of minutes needed for the temperature to increase by $1$ degree" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** In $f(t) = 64 + 9t$, the coefficient of $t$ is the rate of change: the temperature rises $9$ degrees each minute.\n\n**The Full Solution:**\nStep 1: The model has the linear form $f(t) = b + mt$ with $b = 64$ and $m = 9$.\nStep 2: The constant $64$ is the starting temperature ($t = 0$); the coefficient $9$ multiplies $t$, so it is the change per minute.\nStep 3: Each additional minute adds $9$ degrees Fahrenheit — that is what $9$ represents.\n\n**Why the wrong answers are tempting:**\n* Choice A: that is the initial value $64$, not the rate $9$.\n* Choice B: treats $9$ as the input $t = 9$ rather than the rate.\n* Choice D: inverts the rate — $9$ degrees per minute, not one degree per fraction of a minute.\n\n**Test Day Takeaway:** In $y = b + mx$, the coefficient of the variable is always the rate of change per unit; the standalone constant is the starting value.",
  skills: ["function-interpretation", "linear-functions", "slope"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A music studio rents instruments for a flat $\\$15$ membership fee plus $\\$8$ per instrument per day. The total cost of renting $n$ instruments for one day, including the membership fee, is $\\$71$. What is the total cost, in dollars, of renting $n + 4$ instruments for one day (with one membership fee)?",
  choices: [
    // distractor: stops one step early — adds $4 flat instead of 4 \cdot \$8 = \$32
    { id: "A", text: "$\\$75$" },
    // distractor: uses the membership fee \$15 as the per-instrument rate
    { id: "B", text: "$\\$131$" },
    { id: "C", text: "$\\$103$" },
    // distractor: doubles the original \$71 then rounds — wrong base
    { id: "D", text: "$\\$142$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Each extra instrument costs $\\$8$ and the membership fee stays fixed, so $4$ more add $4 \\cdot \\$8 = \\$32$: new total $= \\$71 + \\$32 = \\$103$.\n\n**The Full Solution:**\nStep 1: The cost is $8n + 15 = 71$, so $8n = 56$ and $n = 7$.\nStep 2: For $n + 4 = 11$ instruments: total $= 8(11) + 15 = 88 + 15 = \\$103$.\nStep 3: Or skip solving for $n$ entirely — only the per-instrument piece grows, by $4 \\cdot \\$8 = \\$32$, giving $\\$71 + \\$32 = \\$103$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$75$): adds the count $4$ as dollars instead of $4 \\cdot \\$8 = \\$32$.\n* Choice B ($\\$131$): uses the $\\$15$ fee as the per-instrument rate: $\\$71 + 4 \\cdot \\$15$.\n* Choice D ($\\$142$): double-counts the fixed fee, as if the new order pays $\\$71$ again.\n\n**Test Day Takeaway:** Linear cost $=$ rate $\\times$ quantity $+$ fixed fee. Adding items changes only the rate-times-quantity piece; the fixed fee is paid once.",
  skills: ["word-problems", "solving-equations"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "If $\\dfrac{3y}{14} = \\dfrac{12}{7}$, what is the value of $y - 5$?",
  choices: [
    { id: "A", text: "$3$" },
    // distractor: stops at y = 8 (forgets the "minus 5" final step)
    { id: "B", text: "$8$" },
    // distractor: adds 5 instead of subtracting
    { id: "C", text: "$13$" },
    // distractor: leaves the answer at 3y = 24 instead of y
    { id: "D", text: "$24$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Cross-multiply: $3y \\cdot 7 = 14 \\cdot 12 \\Rightarrow 21y = 168 \\Rightarrow y = 8$. The question wants $y - 5 = 3$.\n\n**The Full Solution:**\nStep 1: From $\\frac{3y}{14} = \\frac{12}{7}$, cross-multiply: $7 \\cdot 3y = 14 \\cdot 12$, so $21y = 168$.\nStep 2: Divide by $21$: $y = 8$. Check: $\\frac{3(8)}{14} = \\frac{24}{14} = \\frac{12}{7}$. $\\checkmark$\nStep 3: The target is $y - 5$, not $y$: $8 - 5 = 3$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): solves for $y$ correctly but forgets to subtract $5$.\n* Choice C ($13$): adds $5$ instead of subtracting.\n* Choice D ($24$): stops at $3y = 24$ without dividing by $3$.\n\n**Test Day Takeaway:** Always re-read the final line. The question often asks for an expression built from the variable, not the variable itself.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A population of yeast triples every $4$ hours. If the initial population is $200$, which function $P(t)$ models the population after $t$ hours?",
  choices: [
    // distractor: uses 4t instead of t/4 — would quadruple the exponent each hour
    { id: "A", text: "$P(t) = 200(3)^{4t}$" },
    { id: "B", text: "$P(t) = 200(3)^{\\frac{t}{4}}$" },
    // distractor: swaps the base (4) and the tripling factor (3)
    { id: "C", text: "$P(t) = 200(4)^{\\frac{t}{3}}$" },
    // distractor: starts at 600 (already tripled) and uses wrong exponent
    { id: "D", text: "$P(t) = 600(3)^{t}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"Triples every $4$ hours\" means the exponent must equal $1$ when $t = 4$, so it is $\\frac{t}{4}$. With initial value $200$ and base $3$: $P(t) = 200(3)^{\\frac{t}{4}}$.\n\n**The Full Solution:**\nStep 1: The period-multiplier form is $P(t) = P_0 \\cdot k^{\\frac{t}{d}}$, where $P_0$ is the start, $k$ the multiplier, and $d$ the period.\nStep 2: Here $P_0 = 200$, $k = 3$, $d = 4$, giving $P(t) = 200(3)^{\\frac{t}{4}}$.\nStep 3: Check: $P(4) = 200(3)^1 = 600$ (tripled) and $P(8) = 200(3)^2 = 1800$ (tripled again). $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: $4t$ in the exponent would triple every hour to the fourth power, not every $4$ hours.\n* Choice C: swaps the base and the period — base $4$, period $3$.\n* Choice D: starts at $600$ instead of $200$, building the first tripling into the initial value.\n\n**Test Day Takeaway:** \"Multiplies by $k$ every $d$ units\" $\\Rightarrow P(t) = P_0 \\cdot k^{\\frac{t}{d}}$ — put the period in the denominator of the exponent.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  question: "A typing course models a student's typing speed with $w(t) = 3.5t + 14$, where $w(t)$ is the predicted speed, in words per minute, after $t$ weeks of practice. According to the model, after how many weeks of practice is the predicted typing speed $70$ words per minute?",
  choices: [
    { id: "A", text: "$16$" },
    // distractor: divides 70 by 3.5 without subtracting the intercept
    { id: "B", text: "$20$" },
    // distractor: adds the intercept instead of subtracting — solves (70 + 14)/3.5
    { id: "C", text: "$24$" },
    // distractor: stops one step early — reports 3.5t = 56
    { id: "D", text: "$56$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Set the model equal to $70$: $3.5t + 14 = 70 \\Rightarrow 3.5t = 56 \\Rightarrow t = 16$.\n\n**The Full Solution:**\nStep 1: The question gives the OUTPUT ($70$ words per minute) and asks for the input $t$, so set $w(t) = 70$: $3.5t + 14 = 70$.\nStep 2: Subtract the intercept: $3.5t = 56$.\nStep 3: Divide by the rate: $t = \\dfrac{56}{3.5} = 16$ weeks.\nCheck: $3.5(16) + 14 = 56 + 14 = 70$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($20$): divides $70$ by $3.5$ without first subtracting the intercept $14$.\n* Choice C ($24$): adds the intercept instead of subtracting, solving $\\frac{70 + 14}{3.5}$.\n* Choice D ($56$): stops at $3.5t = 56$ and reports it as the answer.\n\n**Test Day Takeaway:** When a model gives the output and asks for the input, undo the equation in reverse order: subtract the constant first, then divide by the rate.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A cylindrical rainwater barrel has an interior base radius of $5$ feet and an interior height of $6$ feet. The interior volume of the barrel, in cubic feet, can be written in the form $k\\pi$. What is the value of $k$?",
  correctAnswer: "150",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $150$.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (5)^2(6) = 25 \\cdot 6 \\pi = 150\\pi$, so $k = 150$.\n\n**The Full Solution:**\nStep 1: A right circular cylinder has volume $V = \\pi r^2 h$.\nStep 2: With $r = 5$ and $h = 6$: $V = \\pi (5)^2(6) = \\pi(25)(6) = 150\\pi$ cubic feet.\nStep 3: Written as $k\\pi$, this gives $k = 150$.\n\n**Common Mistakes:** Forgetting to square the radius — $\\pi r h$ gives $30\\pi$ ($k = 30$); or using the cone formula $\\frac{1}{3}\\pi r^2 h$, which gives $k = 50$.\n\n**Test Day Takeaway:** For a cylinder, square the radius first, then multiply by the height. $V = \\pi r^2 h$ is on the Reference Sheet — read it carefully and don't borrow the cone's $\\frac{1}{3}$.",
  skills: ["volume", "geometry"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Two similar triangles have corresponding sides in the ratio $4:7$. If the area of the smaller triangle is $32$ square inches, what is the area of the larger triangle, in square inches?",
  choices: [
    // distractor: uses the side ratio directly: 32 \times 7/4 = 56
    { id: "A", text: "$56$" },
    { id: "B", text: "$98$" },
    // distractor: multiplies 32 \times 7 = 224 (wrong base — uses one part of ratio)
    { id: "C", text: "$224$" },
    // distractor: stops one step early — gives ratio piece 49 instead of full computation
    { id: "D", text: "$49$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Similar Figures — Area Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Side ratio $4:7$ squares to an area ratio $16:49$, so $\\frac{32}{A} = \\frac{16}{49}$ gives $A = \\frac{32 \\cdot 49}{16} = 98$.\n\n**The Full Solution:**\nStep 1: For similar figures, the area ratio is the square of the side ratio: $\\left(\\frac{4}{7}\\right)^2 = \\frac{16}{49}$.\nStep 2: Set up the proportion with the smaller area on top: $\\frac{32}{A} = \\frac{16}{49}$.\nStep 3: Solve: $A = \\frac{32 \\cdot 49}{16} = \\frac{1568}{16} = 98$ square inches.\n\n**Why the wrong answers are tempting:**\n* Choice A ($56$): scales by the side ratio $\\frac{7}{4}$ instead of its square.\n* Choice C ($224$): multiplies $32 \\cdot 7$, ignoring the squaring rule entirely.\n* Choice D ($49$): reports the squared-ratio piece $49$ without finishing the proportion.\n\n**Test Day Takeaway:** Area scales as the SQUARE of the side ratio (volume as the CUBE). Square first, then set up the proportion.",
  skills: ["similar-triangles", "area", "ratios"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A study of $14$ students produces the line of best fit $y = 0.6x + 22$, where $x$ is hours of study and $y$ is the test score. A student studies $25$ hours and scores $33$. Is this student's actual score above or below the predicted score, and by how much?",
  diagram: { type: "scatterplot", params: {
    points: [[3,22],[6,27],[10,26],[12,28],[15,31],[18,35],[20,32],[24,38],[28,37],[30,42]],
    xMin: 0, xMax: 32, yMin: 10, yMax: 50,
    xGridStep: 2, xLabelStep: 5, yGridStep: 5, yLabelStep: 10,
    bestFitLine: { slope: 0.6, intercept: 22 },
    highlightPoint: [25, 33], highlightLabel: "(25, 33)", showResidual: true,
    xLabel: "Hours of study", yLabel: "Test score",
  } },
  choices: [
    { id: "A", text: "Below by $4$" },
    // distractor: reverses subtraction order
    { id: "B", text: "Above by $4$" },
    // distractor: uses predicted = 0.6 \cdot 25 = 15 (forgets 22 intercept)
    { id: "C", text: "Above by $18$" },
    // distractor: combines errors — uses wrong residual sign and wrong magnitude
    { id: "D", text: "Below by $7$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Residual**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Predicted $= 0.6(25) + 22 = 37$; actual $= 33$; residual $= 33 - 37 = -4$, so the score is below by $4$.\n\n**The Full Solution:**\nStep 1: Predict from the line: $0.6(25) + 22 = 15 + 22 = 37$.\nStep 2: Residual $=$ actual $-$ predicted $= 33 - 37 = -4$.\nStep 3: A negative residual means the actual score sits below the line, by $4$ points.\n\n**Why the wrong answers are tempting:**\n* Choice B (Above by $4$): reverses the subtraction order to get $+4$.\n* Choice C (Above by $18$): uses $0.6 \\cdot 25 = 15$ as the prediction, dropping the intercept.\n* Choice D (Below by $7$): wrong magnitude from a miscomputed prediction.\n\n**Test Day Takeaway:** Residual $=$ actual $-$ predicted. A negative residual means the point is below the line.",
  skills: ["scatterplots", "statistics"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "\n\n| | Morning | Afternoon | Total |\n|---|---|---|---|\n| Weekday | $85$ | $55$ | $140$ |\n| Weekend | $35$ | $75$ | $110$ |\n| Total | $120$ | $130$ | $250$ |\n\nA gym tracked when members visit. If a randomly selected visit occurred in the afternoon, what is the probability it was on a weekend?",
  choices: [
    // distractor: uses grand total 250 as denominator
    { id: "A", text: "$\\dfrac{75}{250}$" },
    // distractor: uses weekend row total 110 as denominator
    { id: "B", text: "$\\dfrac{75}{110}$" },
    { id: "C", text: "$\\dfrac{75}{130}$" },
    // distractor: gives the wrong-row count (weekday afternoon)
    { id: "D", text: "$\\dfrac{55}{130}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** \"Given afternoon\" restricts to the Afternoon column (total $130$); weekend afternoons $= 75$, so the probability is $\\frac{75}{130}$.\n\n**The Full Solution:**\nStep 1: The condition is afternoon, so the denominator is the afternoon column total, $130$.\nStep 2: Of those, the weekend afternoon visits number $75$.\nStep 3: $P(\\text{weekend} \\mid \\text{afternoon}) = \\frac{75}{130}$, which matches Choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A: divides by the grand total $250$ instead of the afternoon total.\n* Choice B: uses the weekend row total $110$ as the denominator.\n* Choice D: counts weekday afternoons ($55$) in the numerator instead of weekend.\n\n**Test Day Takeaway:** \"Given $X$\" makes $X$'s total the denominator — here the afternoon column, not the grand total.",
  skills: ["two-way-tables", "probability"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "\n\n| | Prefer Sushi | Prefer Pasta | Total |\n|---|---|---|---|\n| Adults | $48$ | $72$ | $120$ |\n| Teens | $54$ | $26$ | $80$ |\n| Total | $102$ | $98$ | $200$ |\n\nBased on the table above, what percentage of people who prefer sushi are teens? (Round to the nearest whole number.)",
  choices: [
    // distractor: divides 54 by grand total 200 (wrong base)
    { id: "A", text: "$27\\%$" },
    // distractor: reads 54 directly as a percentage
    { id: "B", text: "$54\\%$" },
    { id: "C", text: "$53\\%$" },
    // distractor: uses 48 (other row) instead of 54
    { id: "D", text: "$47\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Among sushi preferrers ($102$ total), $54$ are teens: $\\frac{54}{102} \\approx 0.529 \\approx 53\\%$.\n\n**The Full Solution:**\nStep 1: \"Of those who prefer sushi\" restricts to the Sushi column total, $102$.\nStep 2: Teens within that column number $54$.\nStep 3: $\\frac{54}{102} \\approx 0.5294$, which rounds to $53\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($27\\%$): divides by the grand total $200$ instead of the sushi total: $\\frac{54}{200}$.\n* Choice B ($54\\%$): reads $54$ as if it were already a percent.\n* Choice D ($47\\%$): uses the adult count $48$ in the numerator instead of the teen count.\n\n**Test Day Takeaway:** In conditional probability, the denominator is the total of the GIVEN group, not the grand total.",
  skills: ["two-way-tables", "probability", "percents"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, line $m$ has equation $6x + 2y = 9$. Line $n$ is perpendicular to line $m$. What is the slope of line $n$?",
  choices: [
    // distractor: uses the slope of line m itself (parallel, not perpendicular)
    { id: "A", text: "$-3$" },
    // distractor: takes the reciprocal but forgets to change the sign
    { id: "B", text: "$-\\dfrac{1}{3}$" },
    { id: "C", text: "$\\dfrac{1}{3}$" },
    // distractor: changes the sign but forgets to take the reciprocal
    { id: "D", text: "$3$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Solve for $y$: $2y = -6x + 9 \\Rightarrow y = -3x + \\frac{9}{2}$, so line $m$ has slope $-3$. The perpendicular slope is the negative reciprocal: $\\frac{1}{3}$.\n\n**The Full Solution:**\nStep 1: Put line $m$ in slope-intercept form: $6x + 2y = 9 \\Rightarrow 2y = -6x + 9 \\Rightarrow y = -3x + \\dfrac{9}{2}$.\nStep 2: Read off the slope of $m$: $-3$.\nStep 3: Perpendicular slopes multiply to $-1$, so the slope of $n$ is $-\\dfrac{1}{-3} = \\dfrac{1}{3}$.\nCheck: $(-3) \\cdot \\dfrac{1}{3} = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): uses the slope of line $m$ itself — that gives a parallel line, not a perpendicular one.\n* Choice B ($-\\frac{1}{3}$): flips the fraction but keeps the negative sign.\n* Choice D ($3$): changes the sign but never takes the reciprocal.\n\n**Test Day Takeaway:** From standard form $Ax + By = C$, isolate $y$ to read the slope. A perpendicular line's slope is the negative reciprocal — flip AND switch the sign.",
  skills: ["slope", "linear-functions", "coordinate-geometry"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $(x, y)$ is the solution to the system of equations $y = 2x - 5$ and $3x + 2y = 18$, what is the value of the product $xy$?",
  choices: [
    // distractor: sign slip when back-substituting — gets y = -3 and xy = -12
    { id: "A", text: "$-12$" },
    // distractor: stops one step early — reports x instead of xy
    { id: "B", text: "$4$" },
    // distractor: computes x + y instead of xy
    { id: "C", text: "$7$" },
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The first equation already gives $y$, so substitute: $3x + 2(2x - 5) = 18 \\Rightarrow 7x - 10 = 18 \\Rightarrow x = 4$. Then $y = 2(4) - 5 = 3$, so $xy = 12$.\n\n**The Full Solution:**\nStep 1: Substitute $y = 2x - 5$ into the second equation: $3x + 2(2x - 5) = 18$.\nStep 2: Distribute and collect: $3x + 4x - 10 = 18 \\Rightarrow 7x = 28 \\Rightarrow x = 4$.\nStep 3: Back-substitute: $y = 2(4) - 5 = 3$.\nStep 4: The question asks for the product: $xy = 4 \\cdot 3 = 12$.\nCheck: $3(4) + 2(3) = 12 + 6 = 18$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): a sign slip in back-substitution gives $y = -3$, so the product comes out negative.\n* Choice B ($4$): stops at $x = 4$ and never computes the product.\n* Choice C ($7$): adds $x + y = 4 + 3$ instead of multiplying.\n\n**Test Day Takeaway:** When one equation is already solved for a variable, substitute it directly — and read the final ask: the question wants $xy$, not $x$ or $y$ alone.",
  skills: ["systems-of-equations", "solving-equations"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $5(3p - 2) - 4 = 6p + 13$, what is the value of $p$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~20s):** Distribute the $5$: $15p - 10 - 4 = 6p + 13 \\Rightarrow 15p - 14 = 6p + 13$. Collect: $9p = 27$, so $p = 3$.\n\n**The Full Solution:**\nStep 1: Distribute: $5(3p - 2) = 15p - 10$, so the left side is $15p - 10 - 4 = 15p - 14$.\nStep 2: Set equal to the right side: $15p - 14 = 6p + 13$.\nStep 3: Move variables left, constants right: $9p = 27$, so $p = 3$.\n\nCheck: left $= 5(3 \\cdot 3 - 2) - 4 = 5(7) - 4 = 31$; right $= 6(3) + 13 = 31$. $\\checkmark$\n\n**Common Mistakes:** Distributing the $5$ to only the first term ($15p - 2$); mis-combining $-10 - 4$ as $-6$ instead of $-14$.\n\n**Test Day Takeaway:** Distribute first, combine like terms second, isolate the variable last — each step is mechanical, so slow down on the signs.",
  skills: ["solving-equations"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, how many points of intersection do the graphs of $y = 3x^2 - 5x + 7$ and $y = 7x - 5$ have?",
  choices: [
    // distractor: takes the discriminant of 3x² - 5x + 7 alone (25 - 84 < 0) without combining
    { id: "A", text: "Zero" },
    { id: "B", text: "Exactly one" },
    // distractor: arithmetic slip combining terms makes the discriminant come out positive
    { id: "C", text: "Exactly two" },
    // distractor: misreads the shared y-values as the graphs being identical
    { id: "D", text: "Infinitely many" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Set the right sides equal: $3x^2 - 5x + 7 = 7x - 5 \\Rightarrow 3x^2 - 12x + 12 = 0 \\Rightarrow x^2 - 4x + 4 = 0 \\Rightarrow (x - 2)^2 = 0$. One repeated root, so exactly one intersection point.\n\n**The Full Solution:**\nStep 1: Intersection points satisfy both equations, so set them equal: $3x^2 - 5x + 7 = 7x - 5$.\nStep 2: Bring everything to one side: $3x^2 - 12x + 12 = 0$, and divide by $3$: $x^2 - 4x + 4 = 0$.\nStep 3: Check the discriminant: $(-4)^2 - 4(1)(4) = 16 - 16 = 0$, so there is exactly one solution, $x = 2$.\nStep 4: The single intersection point is $(2, 9)$: parabola $3(4) - 10 + 7 = 9$ and line $7(2) - 5 = 9$. $\\checkmark$ The line is tangent to the parabola.\n\n**Why the wrong answers are tempting:**\n* Choice A (Zero): takes the discriminant of $3x^2 - 5x + 7$ by itself ($25 - 84 < 0$) — that counts the parabola's $x$-intercepts, not intersections with the line. You must combine the equations first.\n* Choice C (Exactly two): an arithmetic slip while combining terms leaves a positive discriminant.\n* Choice D (Infinitely many): the graphs share $y$-values at one $x$ only; they are not the same curve.\n\n**Test Day Takeaway:** To count intersections of two graphs, set the equations equal and apply the discriminant to the COMBINED quadratic: positive means two, zero means tangent (one), negative means none.",
  skills: ["quadratic-equations", "systems-of-equations", "discriminant"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the parabola $y = -3x^2 + bx + c$ has its vertex at $(2, 7)$. What is the value of $c$?",
  choices: [
    // distractor: confuses with vertex y-coordinate (sign-flipped)
    { id: "A", text: "$-7$" },
    { id: "B", text: "$-5$" },
    // distractor: gives the y-value at vertex (7) instead of constant term
    { id: "C", text: "$7$" },
    // distractor: uses 12 - 7 = 5 (sign error)
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Write vertex form $y = -3(x - 2)^2 + 7$ and expand: $-3(x^2 - 4x + 4) + 7 = -3x^2 + 12x - 5$. The constant is $c = -5$.\n\n**The Full Solution:**\nStep 1: With vertex $(2, 7)$ and leading coefficient $-3$, the vertex form is $y = -3(x - 2)^2 + 7$.\nStep 2: Expand the square: $y = -3(x^2 - 4x + 4) + 7$.\nStep 3: Distribute and combine: $y = -3x^2 + 12x - 12 + 7 = -3x^2 + 12x - 5$, so $c = -5$.\n\nCheck: vertex $x = -\\frac{b}{2a} = -\\frac{12}{-6} = 2$, and $y(2) = -3(4) + 24 - 5 = 7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): sign-flipped the vertex $y$-coordinate.\n* Choice C ($7$): reported the vertex $y$-value as $c$ without expanding.\n* Choice D ($5$): missed the sign on $-12 + 7$, treating it as $+5$.\n\n**Test Day Takeaway:** The constant $c$ in $y = ax^2 + bx + c$ is the $y$-intercept, not the vertex height — expand vertex form fully before reading it off.",
  skills: ["vertex-form", "quadratic-equations", "coordinate-geometry"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Which expression is equivalent to $\\dfrac{9x^2 - 16}{3x^2 - x - 4}$ for all values of $x$ where the expression is defined?",
  choices: [
    // distractor: a guess that doesn't actually factor anything — wrong base
    { id: "A", text: "$\\dfrac{3}{x}$" },
    { id: "B", text: "$\\dfrac{3x + 4}{x + 1}$" },
    // distractor: cancels the wrong factor
    { id: "C", text: "$\\dfrac{3x - 4}{x + 1}$" },
    // distractor: keeps both numerator factors but drops the denominator factor
    { id: "D", text: "$\\dfrac{3x + 4}{3x - 4}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Factor top as a difference of squares $(3x - 4)(3x + 4)$ and bottom as $(3x - 4)(x + 1)$. Cancel $(3x - 4)$ to get $\\frac{3x + 4}{x + 1}$.\n\n**The Full Solution:**\nStep 1: Numerator: $9x^2 - 16 = (3x)^2 - 4^2 = (3x - 4)(3x + 4)$.\nStep 2: Denominator: factor $3x^2 - x - 4$ by grouping (product $3 \\cdot (-4) = -12$, sum $-1$, so $-4$ and $3$): $3x^2 + 3x - 4x - 4 = 3x(x + 1) - 4(x + 1) = (3x - 4)(x + 1)$.\nStep 3: Cancel the common $(3x - 4)$: $\\frac{(3x - 4)(3x + 4)}{(3x - 4)(x + 1)} = \\frac{3x + 4}{x + 1}$.\n\nCheck at $x = 2$: original $= \\frac{36 - 16}{12 - 2 - 4} = \\frac{20}{6} = \\frac{10}{3}$; choice B $= \\frac{10}{3}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{x}$): guessed without factoring — no valid cancellation produces this.\n* Choice C ($\\frac{3x - 4}{x + 1}$): cancelled the wrong factor, keeping $(3x - 4)$ on top.\n* Choice D ($\\frac{3x + 4}{3x - 4}$): cancelled the $(x + 1)$ factor that does not appear in the numerator.\n\n**Test Day Takeaway:** Factor both the numerator and denominator completely before cancelling — difference of squares ($a^2 - b^2$) is the SAT's favorite hidden factorization.",
  skills: ["factoring", "polynomial-operations"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A circle has the equation $x^2 + y^2 - 6x + 8y - 11 = 0$. What is the radius of the circle?",
  choices: [
    // distractor: takes \\sqrt{16} = 4 from the y-completion only
    { id: "A", text: "$4$" },
    { id: "B", text: "$6$" },
    // distractor: uses 11 from the original equation
    { id: "C", text: "$11$" },
    // distractor: stops one step early — gives r^2 = 36 instead of r = 6
    { id: "D", text: "$36$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Complete the square on each variable: $(x^2 - 6x + 9) + (y^2 + 8y + 16) = 11 + 9 + 16 = 36$, so $(x - 3)^2 + (y + 4)^2 = 36$. Radius $= \\sqrt{36} = 6$.\n\n**The Full Solution:**\nStep 1: Group and move the constant: $(x^2 - 6x) + (y^2 + 8y) = 11$.\nStep 2: Complete the $x$-square with $\\left(\\frac{-6}{2}\\right)^2 = 9$ and the $y$-square with $\\left(\\frac{8}{2}\\right)^2 = 16$, adding both to each side: $(x - 3)^2 + (y + 4)^2 = 11 + 9 + 16 = 36$.\nStep 3: The right side is $r^2 = 36$, so $r = \\sqrt{36} = 6$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): completed only the $y$-square and used $\\sqrt{16}$.\n* Choice C ($11$): used the bare constant from the original equation as the radius.\n* Choice D ($36$): reported $r^2$ instead of taking the square root.\n\n**Test Day Takeaway:** Complete the square for both variables, then remember the right side equals $r^2$ — the radius is its square root.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The right triangle shown has one leg of length $24$ and a hypotenuse of length $26$. What is the area, in square units, of the triangle?",
  diagram: {
    type: "rightTriangle",
    params: {
      sideLabels: ["24", "", "26"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: uses the hypotenuse 26 as the second leg: (1/2)(24)(26) = 312
    { id: "A", text: "$312$" },
    // distractor: computes the perimeter (24 + 10 + 26 = 60) instead of area
    { id: "B", text: "$60$" },
    { id: "C", text: "$120$" },
    // distractor: forgets the 1/2 factor: 24 \times 10 = 240
    { id: "D", text: "$240$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** This is the $5$-$12$-$13$ triple scaled by $2$: $10$-$24$-$26$, so the missing leg is $10$. Area $= \\frac{1}{2}(24)(10) = 120$.\n\n**The Full Solution:**\nStep 1: Let the unknown leg be $b$. Pythagoras: $24^2 + b^2 = 26^2 \\Rightarrow 576 + b^2 = 676$.\nStep 2: Solve: $b^2 = 100 \\Rightarrow b = 10$.\nStep 3: The legs $24$ and $10$ are perpendicular, so area $= \\frac{1}{2}(24)(10) = 120$ square units.\n\nCheck: $24^2 + 10^2 = 576 + 100 = 676 = 26^2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($312$): used the hypotenuse $26$ as the second leg, computing $\\frac{1}{2}(24)(26)$.\n* Choice B ($60$): added the three sides ($24 + 10 + 26$) — that is the perimeter, not the area.\n* Choice D ($240$): multiplied the two legs but forgot the $\\frac{1}{2}$.\n\n**Test Day Takeaway:** Spot scaled Pythagorean triples ($5$-$12$-$13 \\to 10$-$24$-$26$) to find the missing side instantly, then use the two legs as base and height.",
  skills: ["triangles", "pythagorean", "area"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The polynomial $p(x) = 3x^2 + bx + 24$ has zeros $r$ and $s$ such that $r + s = -8$. What is the value of $rs$?",
  correctAnswer: "8",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~20s):** For $ax^2 + bx + c$ with roots $r, s$, the product is $rs = \\frac{c}{a}$. Here $rs = \\frac{24}{3} = 8$.\n\n**The Full Solution:**\nStep 1: Vieta's formulas for $p(x) = ax^2 + bx + c$ give sum $r + s = -\\frac{b}{a}$ and product $rs = \\frac{c}{a}$.\nStep 2: For $p(x) = 3x^2 + bx + 24$, take $a = 3$ and $c = 24$, so $rs = \\frac{24}{3} = 8$.\n\nThe given $r + s = -8$ fixes $b = 24$ but is not needed for the product.\n\nCheck: $p(x) = 3x^2 + 24x + 24 = 3(x^2 + 8x + 8)$; roots $-4 \\pm 2\\sqrt{2}$ multiply to $16 - 8 = 8$. $\\checkmark$\n\n**Common Mistakes:** Using $\\frac{c}{b}$ or $-\\frac{c}{a}$ for the product; dropping the leading coefficient $a$ and reporting $24$.\n\n**Test Day Takeaway:** For any $ax^2 + bx + c$, the product of the zeros is $\\frac{c}{a}$ — no need to actually solve for the roots.",
  skills: ["quadratic-equations", "polynomial-operations"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $\\dfrac{\\sqrt[3]{x^8}}{\\sqrt[6]{x^5}} = x^k$ for $x > 0$, what is the value of $k$? Express your answer as a fraction.",
  correctAnswer: "11/6",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\frac{11}{6}$.**\n\n**The Fast Way (~20s):** Rewrite as $\\frac{x^{8/3}}{x^{5/6}} = x^{8/3 - 5/6}$. With denominator $6$: $\\frac{16}{6} - \\frac{5}{6} = \\frac{11}{6}$.\n\n**The Full Solution:**\nStep 1: Convert radicals to fractional exponents: $\\sqrt[3]{x^8} = x^{\\frac{8}{3}}$ and $\\sqrt[6]{x^5} = x^{\\frac{5}{6}}$.\nStep 2: Divide same-base powers by subtracting exponents: $\\frac{x^{8/3}}{x^{5/6}} = x^{\\frac{8}{3} - \\frac{5}{6}}$.\nStep 3: Use the common denominator $6$: $\\frac{8}{3} = \\frac{16}{6}$, so $\\frac{16}{6} - \\frac{5}{6} = \\frac{11}{6}$. Thus $k = \\frac{11}{6}$.\n\n**Common Mistakes:** Writing $\\sqrt[3]{x^8}$ as $x^{\\frac{3}{8}}$ (the power goes on top, the index on the bottom); adding the exponents instead of subtracting when dividing.\n\n**Test Day Takeaway:** Turn every radical into a fractional exponent first, then subtract exponents when dividing the same base.",
  skills: ["exponent-rules", "radical-expressions"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 9 — Math Module 2 (22 questions)
// Distribution: 3E / 7M / 12H. Flow pattern: easy {1(b2),3(b3),14(b3)},
// medium {2,5,6,8,10,17,19}, hard {4,7,9,11,12,13,15,16,18,20,21,22}.
// Designated mid/late breather at Q14 (Percent of a Whole).
// Pool-item infusion: E#10→Q2 NUDGED (slope 2/9, x-int (-27,0) -> y-int 6; new
// numbers + new answer to clear IP margin vs source -5/3,(-6,0),-10),
// D-p29#26→Q4, D-p10#27→Q6, D-p43#27→Q9, D-p16#21→Q15. Former E#6→Q3 range
// breather REPLACED by a fresh non-pool No-Solution Condition opener (find p, b3)
// — the Q3 slot's range item fell below the opener bar and Q14 already serves as
// the module's easy breather. Near-dup cluster Q2/Q6/Q11/Q16: distinct skeletons
// (slope+pt / percent-chain / perpendicular-line / exp-model); Q11 re-angled to
// solve for the x-intercept (was y-coord at x=0) so its deliverable no longer
// mirrors Q2. Carriers from the lighthouse/fabric/ski-lift/podcast/greenhouse/go-kart palette.

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "A ski lift carries skiers up a mountain at a steady pace, gaining $9$ meters of elevation for every minute of travel. Which type of function best models the relationship between a skier's total elevation gained and the number of minutes the skier has been on the lift?",
  choices: [
    // distractor: confuses a constant additive rate with multiplicative growth
    { id: "A", text: "Increasing exponential" },
    { id: "B", text: "Increasing linear" },
    // distractor: sign error — elevation is being GAINED (increasing)
    { id: "C", text: "Decreasing linear" },
    // distractor: combines the wrong type with the wrong direction
    { id: "D", text: "Decreasing exponential" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Linear Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** A steady \"$9$ meters per minute\" is a constant amount added each minute, and elevation is rising — that is increasing linear.\n\n**The Full Solution:**\nStep 1: A constant rate of change ($+9$ meters every minute) is the signature of a linear function, modeled by $E(t) = 9t$.\nStep 2: Because elevation is gained as time passes, the slope is positive, so the function is increasing.\n\nCheck: $E(0) = 0$, $E(1) = 9$, $E(2) = 18$ — equal jumps of $+9$ confirm constant (linear) growth. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (Increasing exponential): exponential growth multiplies by a constant factor each step, not adds a fixed amount.\n* Choice C (Decreasing linear): the rate is constant, but elevation increases, so the slope is positive.\n* Choice D (Decreasing exponential): wrong growth type and wrong direction.\n\n**Test Day Takeaway:** A fixed amount added per unit of time is linear; a fixed factor multiplied per unit is exponential.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 2,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, line $\\ell$ has a slope of $\\dfrac{2}{9}$ and passes through the point $(-27, 0)$. What is the $y$-coordinate of the point where line $\\ell$ crosses the $y$-axis?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Slope-Intercept Form**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~20s):** From $(-27, 0)$ in point-slope: $y = \\frac{2}{9}(x + 27)$. At $x = 0$: $y = \\frac{2}{9}(27) = 6$.\n\n**The Full Solution:**\nStep 1: $(-27, 0)$ is the $x$-intercept. Write point-slope with slope $\\frac{2}{9}$: $y - 0 = \\frac{2}{9}(x - (-27)) = \\frac{2}{9}(x + 27)$.\nStep 2: The $y$-intercept is the value at $x = 0$: $y = \\frac{2}{9}(27) = 6$.\n\nCheck: in $y = \\frac{2}{9}x + 6$, setting $y = 0$ gives $\\frac{2}{9}x = -6$, so $x = -27$. $\\checkmark$\n\n**Common Mistakes:** Dropping the sign and computing $\\frac{2}{9}(-27) = -6$; evaluating at the $x$-intercept's $x$-value instead of at $x = 0$.\n\n**Test Day Takeaway:** An $x$-intercept is just a point on the line — feed it and the slope into point-slope form, then evaluate at $x = 0$ to read off the $y$-intercept.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 3,
  type: "fill-in",
  difficulty: "easy",
  band: 3,
  question: "In the equation $px + 9 = \\dfrac{3}{8}x + 2$, $p$ is a constant. If the equation has no solution, what is the value of $p$?",
  correctAnswer: "3/8",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $\\dfrac{3}{8}$.**\n\n**The Fast Way (~20s):** A linear equation has no solution when both sides carry the same $x$-coefficient but different constants. Match coefficients: $p = \\dfrac{3}{8}$. The constants $9$ and $2$ already disagree, so the equation is truly unsolvable.\n\n**The Full Solution:**\nStep 1: Move the $x$-terms to one side: $px + 9 = \\dfrac{3}{8}x + 2 \\Rightarrow \\left(p - \\dfrac{3}{8}\\right)x = -7$.\nStep 2: No solution requires the $x$-coefficient to vanish while the constant does not, so the statement collapses to $0 = -7$, which is never true.\nStep 3: Set the coefficient to zero: $p - \\dfrac{3}{8} = 0 \\Rightarrow p = \\dfrac{3}{8}$.\n\n**Common Mistakes:** Confusing \"no solution\" with \"infinitely many\" — infinitely many would also need the constants to match ($9 = 2$), which they don't. Trying to solve for $x$ as if a value exists; the question targets the coefficient that erases every solution.\n\n**Test Day Takeaway:** A linear equation has no solution exactly when the variable cancels out and the leftover constants disagree — set the two $x$-coefficients equal.",
  skills: ["solving-equations", "linear-equations"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A circle in the $xy$-plane has its center at $(2, -3)$. Line $k$ is tangent to this circle at the point $(6, 0)$. Which of the following points also lies on line $k$?",
  choices: [
    { id: "A", text: "$(3, 4)$" },
    // distractor: arbitrary off-line point; on line k, x=9 gives y=-4 (not 1), so (9,1) is not on the tangent
    { id: "B", text: "$(9, 1)$" },
    // distractor: negates only (slope -3/4): y = -3/4(x-6) gives (2,3)
    { id: "C", text: "$(2, 3)$" },
    // distractor: reciprocates only without negating (slope 4/3): y = 4/3(x-6) gives (9,4)
    { id: "D", text: "$(9, 4)$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Circle Tangent Line**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** A tangent is perpendicular to the radius at the contact point. Radius slope from $(2,-3)$ to $(6,0)$ is $\\dfrac{0-(-3)}{6-2} = \\dfrac{3}{4}$, so line $k$ has slope $-\\dfrac{4}{3}$: $y = -\\dfrac{4}{3}(x-6)$. At $x = 3$, $y = -\\dfrac{4}{3}(-3) = 4$, giving $(3,4)$.\n\n**The Full Solution:**\nStep 1: Find the radius slope from center $(2,-3)$ to tangent point $(6,0)$: $\\dfrac{0-(-3)}{6-2} = \\dfrac{3}{4}$.\nStep 2: The tangent is perpendicular, so its slope is the negative reciprocal: $-\\dfrac{4}{3}$.\nStep 3: Write line $k$ through $(6,0)$: $y = -\\dfrac{4}{3}(x-6) = -\\dfrac{4}{3}x + 8$.\nStep 4: Test $(3,4)$: $-\\dfrac{4}{3}(3) + 8 = -4 + 8 = 4$. $\\checkmark$ It lies on line $k$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($(9,1)$): looks plausible, but $x=9$ gives $y = -\\dfrac{4}{3}(9) + 8 = -4$, not $1$.\n* Choice C ($(2,3)$): negates the radius slope to $-\\dfrac{3}{4}$ but forgets to take the reciprocal.\n* Choice D ($(9,4)$): reciprocates to $\\dfrac{4}{3}$ but drops the negative sign.\n\n**Test Day Takeaway:** A tangent is perpendicular to the radius at the point of tangency — find the radius slope, take its negative reciprocal, write the line through the contact point, then test each candidate.",
  skills: ["circle-equations", "perpendicular-slopes", "coordinate-geometry"]
},
{
  id: 5,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "At a fabric-dyeing workshop, the bolts of cloth are prepared in a ratio of $7$ indigo bolts to $4$ crimson bolts. If a batch contains $88$ bolts in total and every bolt is either indigo or crimson, how many indigo bolts are in the batch?",
  correctAnswer: "56",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**The correct answer is $56$.**\n\n**The Fast Way (~15s):** Total parts $= 7 + 4 = 11$. Each part $= 88 \\div 11 = 8$ bolts. Indigo $= 7 \\cdot 8 = 56$.\n\n**The Full Solution:**\nStep 1: The ratio $7 : 4$ divides the batch into $7 + 4 = 11$ equal parts. Let each part be $k$ bolts, so indigo $= 7k$ and crimson $= 4k$.\nStep 2: The parts fill the whole batch: $7k + 4k = 11k = 88 \\Rightarrow k = 8$.\nStep 3: Indigo bolts $= 7k = 7 \\cdot 8 = 56$.\n\n**Common Mistakes:** Dividing $88$ by $7$ or by $4$ instead of by the sum $11$. Reporting crimson ($32$) or the part value ($8$) instead of the indigo total. Multiplying $88$ by $\\dfrac{7}{4}$ as if $7:4$ compared indigo to the whole.\n\n**Test Day Takeaway:** When a ratio's parts make up the whole, divide the total by the sum of the parts to get one part, then scale up to the quantity asked for.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The number $b$ is $80\\%$ less than $60$. The number $a$ is $150\\%$ greater than $b$. What is the value of $a$?",
  correctAnswer: "30",
  explanation: "**SAT Pattern: Successive Percent Changes**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~20s):** \"$80\\%$ less than $60$\" keeps $20\\%$: $b = 0.20 \\cdot 60 = 12$. \"$150\\%$ greater than $b$\" multiplies by $2.50$: $a = 2.50 \\cdot 12 = 30$.\n\n**The Full Solution:**\nStep 1: \"$80\\%$ less than $60$\" leaves $100\\% - 80\\% = 20\\%$ of $60$, so $b = 0.20 \\cdot 60 = 12$.\nStep 2: \"$150\\%$ greater than $b$\" means $b$ plus another $150\\%$ of $b$, a multiplier of $1 + 1.50 = 2.50$.\nStep 3: $a = 2.50 \\cdot 12 = 30$.\n\n**Common Mistakes:** Treating \"$150\\%$ greater\" as $\\times 1.50$ instead of $\\times 2.50$ (gives $18$). Treating \"$80\\%$ less\" as $\\times 0.80$ instead of $\\times 0.20$.\n\n**Test Day Takeaway:** \"$p\\%$ greater\" multiplies by $1 + \\dfrac{p}{100}$; \"$p\\%$ less\" multiplies by $1 - \\dfrac{p}{100}$. Chain the multipliers in order.",
  skills: ["percents", "percent-increase", "percent-decrease"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A savings account compounds interest so that its balance is modeled by $B(t) = 3200 \\cdot (1.004)^{12t}$, where $t$ is the number of years since the account opened. Which of the following is closest to the effective annual interest rate?",
  choices: [
    // distractor: gives the monthly rate 0.4%
    { id: "A", text: "$0.4\\%$" },
    // distractor: scales the monthly rate by 12 → nominal 4.8%
    { id: "B", text: "$4.8\\%$" },
    { id: "C", text: "$4.9\\%$" },
    // distractor: misreads the base as a 4% annual factor
    { id: "D", text: "$4\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Compound Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The monthly factor is $1.004$. Group the year's twelve months: the effective annual factor is $(1.004)^{12} \\approx 1.0491$, an annual increase of about $4.9\\%$.\n\n**The Full Solution:**\nStep 1: Regroup the model to expose the yearly factor: $B(t) = 3200\\,(1.004)^{12t} = 3200\\,\\big((1.004)^{12}\\big)^t$.\nStep 2: The effective annual growth factor is $(1.004)^{12} \\approx 1.0491$.\nStep 3: A factor of $1.0491$ means the balance grows about $4.9\\%$ per year, which is closest to Choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.4\\%$): reports the monthly rate instead of the annual rate.\n* Choice B ($4.8\\%$): multiplies $0.4\\% \\times 12$ for the nominal rate, ignoring compounding.\n* Choice D ($4\\%$): rounds away the compounding and misreads the per-month factor.\n\n**Test Day Takeaway:** To turn a monthly-compounding model into an effective annual rate, raise the monthly factor to the $12$th power, then subtract $1$.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The expression $\\dfrac{18a^6 b^2}{6a^2 b^9}$ is equivalent to which of the following?",
  choices: [
    // distractor: adds exponents instead of subtracting
    { id: "A", text: "$\\dfrac{3a^8}{b^{11}}$" },
    { id: "B", text: "$\\dfrac{3a^4}{b^7}$" },
    // distractor: flips the sign of the b exponent
    { id: "C", text: "$3a^4 b^7$" },
    // distractor: divides exponents instead of subtracting
    { id: "D", text: "$\\dfrac{3a^3}{b^{4.5}}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $\\dfrac{18}{6} = 3$, $a^{6-2} = a^4$, $b^{2-9} = b^{-7} = \\dfrac{1}{b^7}$. Result: $\\dfrac{3a^4}{b^7}$.\n\n**The Full Solution:**\nStep 1: Divide the coefficients: $\\dfrac{18}{6} = 3$.\nStep 2: Subtract exponents on like bases: $a^{6-2} = a^4$ and $b^{2-9} = b^{-7}$.\nStep 3: A negative exponent moves the factor to the denominator: $3a^4 b^{-7} = \\dfrac{3a^4}{b^7}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{3a^8}{b^{11}}$): adds the exponents ($6+2$, $2+9$) instead of subtracting.\n* Choice C ($3a^4 b^7$): flips the sign of the $b$ exponent and keeps it in the numerator.\n* Choice D ($\\dfrac{3a^3}{b^{4.5}}$): divides the exponents ($6/2$, $9/2$) instead of subtracting.\n\n**Test Day Takeaway:** Dividing powers of the same base means subtracting exponents; a negative result sends the factor to the denominator.",
  skills: ["exponent-rules"]
},
{
  id: 9,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A quadratic function $h$ models the height, in meters, of a misting nozzle's water arc above a greenhouse bench, where $x$ is the horizontal distance in meters from the nozzle. The model estimates that the arc reaches its maximum height of $4.8$ meters at a horizontal distance of $3$ meters, and that the water returns to bench level ($0$ meters) at a horizontal distance of $6$ meters. Based on the model, what is the height of the arc, in meters, at a horizontal distance of $5$ meters?",
  correctAnswer: "8/3",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**The correct answer is $\\dfrac{8}{3}$.**\n\n**The Fast Way (~40s):** The max $4.8$ at $x = 3$ is the vertex: $h(x) = a(x-3)^2 + 4.8$. The root $h(6) = 0$ gives $9a + 4.8 = 0 \\Rightarrow a = -\\dfrac{8}{15}$. Then $h(5) = -\\dfrac{8}{15}(4) + 4.8 = -\\dfrac{32}{15} + \\dfrac{72}{15} = \\dfrac{8}{3}$.\n\n**The Full Solution:**\nStep 1: The maximum height $4.8$ at $x = 3$ is the vertex, so $h(x) = a(x-3)^2 + 4.8$.\nStep 2: The arc hits bench level at $x = 6$, so $h(6) = 0$: $a(3)^2 + 4.8 = 0 \\Rightarrow 9a = -4.8 \\Rightarrow a = -\\dfrac{8}{15}$.\nStep 3: Evaluate at $x = 5$: $h(5) = -\\dfrac{8}{15}(5-3)^2 + 4.8 = -\\dfrac{8}{15}(4) + 4.8 = -\\dfrac{32}{15} + \\dfrac{72}{15} = \\dfrac{40}{15} = \\dfrac{8}{3}$.\n(As a decimal, about $2.67$ meters; either form is accepted.)\n\n**Common Mistakes:** Forgetting the parabola opens downward, so $a$ must be negative. Using $x = 6$ as the axis of symmetry instead of the vertex $x = 3$.\n\n**Test Day Takeaway:** Build the parabola in vertex form from its max, solve for $a$ with a known point (often a root), then substitute the requested input.",
  skills: ["quadratic-functions", "vertex-form", "function-evaluation"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A podcast's first $10$ episodes earned these listener ratings (out of $10$): $6, 7, 7, 8, 8, 8, 9, 9, 9, 10$. A new episode earns a rating of $3$ and is added to the data set. Which statement about the resulting $11$-value data set is true?",
  choices: [
    // distractor: claims the median drops by 1
    { id: "A", text: "The median decreases by $1$ and the range increases by $3$." },
    // distractor: claims the median drops by 0.5
    { id: "B", text: "The median decreases by $0.5$ and the range increases by $3$." },
    { id: "C", text: "The median stays the same and the range increases by $3$." },
    // distractor: range computed incorrectly
    { id: "D", text: "The median stays the same and the range increases by $1$." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Original $10$ values: median $= \\dfrac{8+8}{2} = 8$, range $= 10 - 6 = 4$. With the new $3$ added, the sorted $11$ values have median equal to the $6$th value, still $8$, and range $= 10 - 3 = 7$. Median unchanged, range up by $3$.\n\n**The Full Solution:**\nStep 1: Original sorted: $6, 7, 7, 8, 8, 8, 9, 9, 9, 10$. Median $= \\dfrac{5\\text{th} + 6\\text{th}}{2} = \\dfrac{8+8}{2} = 8$; range $= 10 - 6 = 4$.\nStep 2: New sorted: $3, 6, 7, 7, 8, 8, 8, 9, 9, 9, 10$. With $11$ values the median is the $6$th value $= 8$; range $= 10 - 3 = 7$.\nStep 3: Median change $= 8 - 8 = 0$; range change $= 7 - 4 = 3$. That matches Choice C.\n\n**Why the wrong answers are tempting:**\n* Choice A: assumes the low value drags the median down by $1$.\n* Choice B: assumes any added value shifts the median by $0.5$.\n* Choice D: undercounts the range jump as $1$ rather than $3$.\n\n**Test Day Takeaway:** A single low outlier widens the range but leaves the median unchanged when the central values don't move.",
  skills: ["statistics"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Line $r$ passes through the points $(1, 4)$ and $(5, 16)$. Line $s$ is perpendicular to line $r$ and passes through the point $(12, 5)$. At what $x$-coordinate does line $s$ cross the $x$-axis?",
  correctAnswer: "27",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**The correct answer is $27$.**\n\n**The Fast Way (~30s):** Slope of $r$: $\\dfrac{16-4}{5-1} = 3$. Perpendicular slope: $-\\dfrac{1}{3}$. Line $s$ through $(12,5)$: $y = -\\dfrac{1}{3}x + 9$. Set $y = 0$: $\\dfrac{1}{3}x = 9 \\Rightarrow x = 27$.\n\n**The Full Solution:**\nStep 1: Slope of line $r$: $m_r = \\dfrac{16-4}{5-1} = \\dfrac{12}{4} = 3$.\nStep 2: Line $s$ is perpendicular, so $m_s = -\\dfrac{1}{3}$.\nStep 3: Through $(12,5)$: $y - 5 = -\\dfrac{1}{3}(x - 12) \\Rightarrow y = -\\dfrac{1}{3}x + 9$.\nStep 4: The $x$-intercept is where $y = 0$: $0 = -\\dfrac{1}{3}x + 9 \\Rightarrow \\dfrac{1}{3}x = 9 \\Rightarrow x = 27$.\n\n**Common Mistakes:** Using the parallel slope $3$ instead of the perpendicular slope $-\\dfrac{1}{3}$. Reporting the $y$-intercept ($9$) instead of the $x$-intercept ($27$). A sign slip when solving $-\\dfrac{1}{3}x + 9 = 0$.\n\n**Test Day Takeaway:** Flip and negate the slope for a perpendicular line, anchor it at the given point, then set $y = 0$ to find where it crosses the $x$-axis.",
  skills: ["slope", "linear-functions", "coordinate-geometry"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Consider the system of equations:\n\n$7x - 3y = 46$\n$2x + 6y = 20$\n\nWhat is the value of $x - y$?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Solve for a Combination**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~20s):** Multiply equation 1 by $2$: $14x - 6y = 92$. Add equation 2 ($2x + 6y = 20$): $16x = 112 \\Rightarrow x = 7$. Then $6y = 20 - 14 = 6 \\Rightarrow y = 1$, so $x - y = 6$.\n\n**The Full Solution:**\nStep 1: Scale equation 1 by $2$ so the $y$-terms become $-6y$ and cancel the $+6y$ in equation 2: $14x - 6y = 92$.\nStep 2: Add equation 2: $(14x - 6y) + (2x + 6y) = 92 + 20 \\Rightarrow 16x = 112 \\Rightarrow x = 7$.\nStep 3: Substitute into equation 2: $2(7) + 6y = 20 \\Rightarrow 6y = 6 \\Rightarrow y = 1$.\nStep 4: $x - y = 7 - 1 = 6$. Check: $7(7) - 3(1) = 46$ $\\checkmark$ and $2(7) + 6(1) = 20$ $\\checkmark$.\n\n**Common Mistakes:** Reporting $x + y = 8$ when the question asks for $x - y$. Sign errors when scaling equation 1 to cancel the $y$-terms.\n\n**Test Day Takeaway:** Scale one equation so a variable cancels on addition, solve for the first variable, back-substitute for the second, then form the requested combination.",
  skills: ["systems-of-equations"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $g$ is defined by $g(x) = a\\sqrt{x + b}$, where $a$ and $b$ are constants. In the $xy$-plane, the graph of $y = g(x)$ passes through the point $(-7, 0)$, and $g(2) < 0$. Which of the following must be true?",
  choices: [
    // distractor: assumes a is the output value at x=0
    { id: "A", text: "$g(0) = 7$" },
    // distractor: sign error on the output at x=0
    { id: "B", text: "$g(0) = -7$" },
    // distractor: reverses the inequality between a and b
    { id: "C", text: "$a > b$" },
    { id: "D", text: "$a < b$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Radical Function Parameter Analysis**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The graph passes through $(-7, 0)$, so the radicand is $0$ there: $-7 + b = 0 \\Rightarrow b = 7$. Then $g(2) = a\\sqrt{2+7} = 3a < 0 \\Rightarrow a < 0$. So $a < 0 < 7 = b$, giving $a < b$.\n\n**The Full Solution:**\nStep 1: $g(x) = a\\sqrt{x+b}$ equals $0$ only where the radicand is $0$. The point $(-7, 0)$ means $g(-7) = 0$, so $-7 + b = 0 \\Rightarrow b = 7$.\nStep 2: Apply $g(2) < 0$: $g(2) = a\\sqrt{2+7} = a\\sqrt{9} = 3a$. Then $3a < 0 \\Rightarrow a < 0$.\nStep 3: With $a$ negative and $b = 7$ positive, $a < b$ must hold.\n\n**Why the wrong answers are tempting:**\n* Choice A ($g(0) = 7$): assumes $g(0)$ equals the magnitude of $b$ and ignores $a$.\n* Choice B ($g(0) = -7$): right sign idea, wrong value; $g(0) = a\\sqrt{7}$ is an irrational negative number, not $-7$.\n* Choice C ($a > b$): reverses the inequality; $a$ is negative and $b$ is positive.\n\n**Test Day Takeaway:** Use a known zero to pin one constant inside the radical, then use a sign condition on an output to pin the other.",
  skills: ["radical-functions", "function-interpretation"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "easy",
  band: 3,
  question: "At a go-kart track, $40\\%$ of the $185$ laps recorded during a session were driven by junior racers. How many of the recorded laps were driven by junior racers?",
  correctAnswer: "74",
  explanation: "**SAT Pattern: Percent of a Whole**\n\n**The correct answer is $74$.**\n\n**The Fast Way (~10s):** $40\\%$ of $185 = 0.40 \\cdot 185 = 74$.\n\n**The Full Solution:**\nStep 1: \"$p\\%$ of $N$\" is a multiplication: write the percent as a decimal and multiply.\nStep 2: $0.40 \\cdot 185 = 74$ laps.\n(Check: $10\\%$ of $185$ is $18.5$, so $40\\%$ is $4 \\cdot 18.5 = 74$ $\\checkmark$.)\n\n**Common Mistakes:** Dividing by $0.40$ (that reverses the problem and gives $462.5$). Misplacing the decimal and computing $4\\%$ instead of $40\\%$.\n\n**Test Day Takeaway:** \"$p\\%$ of $N$\" is a single multiplication: $\\dfrac{p}{100} \\cdot N$.",
  skills: ["percents"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The expression $4\\sqrt[5]{2^5 x^{35}} \\cdot \\sqrt[6]{3^6 x}$ is equivalent to $ax^b$, where $a$ and $b$ are positive constants and $x > 1$. What is the value of $a + b$? Express your answer as a fraction.",
  correctAnswer: "187/6",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\frac{187}{6}$.**\n\n**The Fast Way (~40s):** Rewrite each radical as a rational exponent: $\\sqrt[5]{2^5 x^{35}} = 2x^7$ and $\\sqrt[6]{3^6 x} = 3x^{1/6}$. Multiply everything, including the leading $4$: coefficients give $4 \\cdot 2 \\cdot 3 = 24$ and exponents add to $7 + \\frac{1}{6} = \\frac{43}{6}$. So $a = 24$, $b = \\frac{43}{6}$, and $a + b = \\frac{187}{6}$.\n\n**The Full Solution:**\nStep 1: Convert the first radical. $\\sqrt[5]{2^5 x^{35}} = (2^5 x^{35})^{1/5} = 2^{5/5} x^{35/5} = 2x^7$.\nStep 2: Convert the second radical. $\\sqrt[6]{3^6 x} = (3^6 x)^{1/6} = 3^{6/6} x^{1/6} = 3x^{1/6}$.\nStep 3: Multiply all three factors. $4 \\cdot (2x^7) \\cdot (3x^{1/6}) = (4 \\cdot 2 \\cdot 3)\\, x^{7 + 1/6} = 24\\, x^{43/6}$, since $7 + \\frac{1}{6} = \\frac{42}{6} + \\frac{1}{6} = \\frac{43}{6}$.\nStep 4: Match to $ax^b$: $a = 24$, $b = \\frac{43}{6}$. So $a + b = 24 + \\frac{43}{6} = \\frac{144}{6} + \\frac{43}{6} = \\frac{187}{6}$.\n\n**Common Mistakes:** Leaving the coefficient as $2 \\cdot 3 = 6$ and forgetting to multiply by the leading $4$; adding the radical indices ($5$ and $6$) instead of adding the simplified exponents $7$ and $\\frac{1}{6}$.\n\n**Test Day Takeaway:** Turn every radical into a rational exponent first, simplify each factor on its own, then multiply the coefficients and add the exponents.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "When a livestream first went public, it had $50$ active viewers. An exponential model estimates that at the end of each minute the number of active viewers was $190\\%$ greater than the number at the end of the previous minute. Which equation best represents this model, where $V$ is the number of active viewers $t$ minutes after the stream went public and $t \\le 5$?",
  choices: [
    // distractor: treats 190% greater as a 1.9 factor (forgets the +1 base)
    { id: "A", text: "$V = 50(1.9)^t$" },
    // distractor: reads 190% as the factor 19
    { id: "B", text: "$V = 50(19)^t$" },
    { id: "C", text: "$V = 50(2.9)^t$" },
    // distractor: uses 1.19 (misplaced decimal)
    { id: "D", text: "$V = 50(1.19)^t$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** \"$190\\%$ greater\" means each minute the count becomes $1 + 1.90 = 2.90$ times the previous count. With $50$ starting viewers, $V = 50(2.9)^t$, which is choice C.\n\n**The Full Solution:**\nStep 1: When a quantity grows by $p\\%$ each period, the growth factor is $1 + \\frac{p}{100}$.\nStep 2: Here $p = 190$, so the factor is $1 + \\frac{190}{100} = 1 + 1.90 = 2.90$.\nStep 3: The initial value is $50$, so $V = 50(2.9)^t$.\nCheck: at $t = 1$, $V = 50(2.9) = 145 = 50 + 95$, and $95$ is $190\\%$ of $50$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($V = 50(1.9)^t$): uses $1.9$, forgetting to add the original $100\\%$ to the $190\\%$ increase.\n* Choice B ($V = 50(19)^t$): reads $190\\%$ as the whole-number factor $19$.\n* Choice D ($V = 50(1.19)^t$): a misplaced-decimal version of $19\\%$.\n\n**Test Day Takeaway:** \"$p\\%$ greater\" multiplies by $1 + \\frac{p}{100}$ each period, even when $p$ is larger than $100$.",
  skills: ["exponential-functions", "exponential-growth"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A data set of go-kart lap times has a mean of $48$ seconds and a standard deviation of $6$ seconds. Which of the following values is more than $2$ standard deviations below the mean?",
  choices: [
    { id: "A", text: "$35$" },
    // distractor: uses 1 SD below (48 - 6 = 42)
    { id: "B", text: "$42$" },
    // distractor: equals exactly 2 SD below; \"more than\" excludes equality
    { id: "C", text: "$36$" },
    // distractor: just above the 2-SD boundary, not below it
    { id: "D", text: "$38$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Inequality Boundary**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Two standard deviations below the mean is $48 - 2(6) = 36$. \"More than $2$ standard deviations below\" means strictly less than $36$, and only $35$ qualifies.\n\n**The Full Solution:**\nStep 1: The boundary $2$ standard deviations below the mean is $\\mu - 2\\sigma = 48 - 2(6) = 48 - 12 = 36$.\nStep 2: \"More than $2$ standard deviations below\" means the value lies strictly past that boundary on the low side, so it must satisfy value $< 36$.\nStep 3: Among the choices, only $35 < 36$, so choice A works.\n\n**Why the wrong answers are tempting:**\n* Choice B ($42$): only $1$ standard deviation below ($48 - 6 = 42$).\n* Choice C ($36$): equals the boundary, but \"more than\" excludes equality.\n* Choice D ($38$): $38 > 36$, so it is less than $2$ standard deviations below, not more.\n\n**Test Day Takeaway:** \"More than $k$ standard deviations below\" means strictly past the boundary $\\mu - k\\sigma$ on the low side — equality at the boundary does not count.",
  skills: ["statistics"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$$\\dfrac{x^2}{\\sqrt{x^2 - n^2}} = \\dfrac{n^2}{\\sqrt{x^2 - n^2}} + 30$$\n\nIn the given equation, $n$ is a positive constant. One solution to the equation has the form $x = -\\sqrt{n^2 + p}$, where $p$ is a positive constant. What is the value of $p$?",
  correctAnswer: "900",
  explanation: "**SAT Pattern: Radical Equation — Substitution**\n\n**The correct answer is $900$.**\n\n**The Fast Way (~50s):** Multiply through by $\\sqrt{x^2 - n^2}$: $x^2 - n^2 = 30\\sqrt{x^2 - n^2}$. Let $u = \\sqrt{x^2 - n^2}$, so $u^2 = 30u \\Rightarrow u = 30$. Then $x^2 - n^2 = 900$, so $x = \\pm\\sqrt{n^2 + 900}$, giving $p = 900$.\n\n**The Full Solution:**\nStep 1: Combine the fractions on one side: $\\frac{x^2}{\\sqrt{x^2 - n^2}} - \\frac{n^2}{\\sqrt{x^2 - n^2}} = 30 \\Rightarrow \\frac{x^2 - n^2}{\\sqrt{x^2 - n^2}} = 30$.\nStep 2: The left side simplifies, since $\\frac{w}{\\sqrt{w}} = \\sqrt{w}$ for $w > 0$: $\\sqrt{x^2 - n^2} = 30$.\nStep 3: Square both sides: $x^2 - n^2 = 900$, so $x^2 = n^2 + 900$ and $x = \\pm\\sqrt{n^2 + 900}$.\nStep 4: The negative solution is $x = -\\sqrt{n^2 + 900}$, which matches $x = -\\sqrt{n^2 + p}$. So $p = 900$.\n\n**Common Mistakes:** Keeping $u = 0$ as a solution — it makes the original denominator $\\sqrt{x^2 - n^2}$ zero, so it is extraneous; forgetting to square $30$ and writing $x^2 - n^2 = 30$.\n\n**Test Day Takeaway:** A substitution $u = \\sqrt{\\cdot}$ turns a radical equation into a quadratic in $u$ — solve it, discard any $u \\le 0$, then back-substitute.",
  skills: ["radical-equations", "rational-equations"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  question: "A greenhouse misting system holds $48$ liters of water and dispenses water at a constant rate of $1.5$ liters per minute once it starts. The function $W(t) = 48 - 1.5t$ gives the number of liters remaining $t$ minutes after the system starts. According to this model, how many liters remain $10$ minutes after the system starts?",
  choices: [
    // distractor: computes only the dispensed amount, not the remainder
    { id: "A", text: "$15$" },
    // distractor: subtracts the rate once instead of multiplying by t
    { id: "B", text: "$46.5$" },
    { id: "C", text: "$33$" },
    // distractor: adds instead of subtracting
    { id: "D", text: "$63$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Linear Model from Rate and Initial Value**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Substitute $t = 10$: $W(10) = 48 - 1.5(10) = 48 - 15 = 33$ liters, which is choice C.\n\n**The Full Solution:**\nStep 1: The model is $W(t) = 48 - 1.5t$, so plug in $t = 10$.\nStep 2: $W(10) = 48 - 1.5(10) = 48 - 15 = 33$ liters remaining.\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): computes $1.5 \\cdot 10 = 15$, the amount dispensed, not the amount remaining.\n* Choice B ($46.5$): subtracts the rate once ($48 - 1.5$) instead of multiplying it by $t$.\n* Choice D ($63$): adds $15$ instead of subtracting it.\n\n**Test Day Takeaway:** In a decreasing linear model $a - rt$, multiply the rate by the time first, then subtract from the starting amount.",
  skills: ["linear-functions", "function-evaluation"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A greenhouse misting cycle releases a fine spray whose density is modeled by $D(t) = 90 \\cdot 3^{\\frac{t}{5}}$, where $t$ is measured in seconds after the cycle begins. By what percent does the spray density increase over each $15$-second interval?",
  choices: [
    // distractor: uses 3^1 = 3 → 200% (only one period, t/5 for 5 s)
    { id: "A", text: "$200\\%$" },
    // distractor: treats the factor 3^3 = 27 directly as 27 \times 100% = 2700%
    { id: "B", text: "$2700\\%$" },
    { id: "C", text: "$2600\\%$" },
    // distractor: uses 3^2 = 9 → 800% (only two periods)
    { id: "D", text: "$800\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Over $15$ seconds the exponent $\\frac{t}{5}$ rises by $\\frac{15}{5} = 3$, so the density is multiplied by $3^3 = 27$. A factor of $27$ is a $(27 - 1) \\cdot 100\\% = 2600\\%$ increase, which is choice C.\n\n**The Full Solution:**\nStep 1: Compare the density $15$ seconds apart: $\\frac{D(t+15)}{D(t)} = \\frac{90 \\cdot 3^{\\frac{t+15}{5}}}{90 \\cdot 3^{\\frac{t}{5}}} = 3^{\\frac{t+15}{5} - \\frac{t}{5}} = 3^{\\frac{15}{5}} = 3^3 = 27$.\nStep 2: So the density is multiplied by $27$ every $15$ seconds.\nStep 3: A growth factor of $27$ is a percent increase of $(27 - 1) \\cdot 100\\% = 2600\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($200\\%$): uses just one $5$-second period (factor $3$, a $200\\%$ increase) instead of three.\n* Choice B ($2700\\%$): reports the factor $27$ as $2700\\%$ without subtracting the original $1$.\n* Choice D ($800\\%$): uses two periods ($3^2 = 9$, an $800\\%$ increase) instead of three.\n\n**Test Day Takeaway:** A growth factor of $k$ is a $(k - 1) \\cdot 100\\%$ increase, not $k \\cdot 100\\%$ — always subtract the starting $1$.",
  skills: ["exponential-functions", "percents"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A right triangle has one angle measuring $30^{\\circ}$ and a second angle measuring $60^{\\circ}$. The area of the triangle is $242\\sqrt{3}$ square units. What is the length, in units, of the hypotenuse of the triangle?",
  correctAnswer: "44",
  explanation: "**SAT Pattern: Special Right Triangle — 30-60-90**\n\n**The correct answer is $44$.**\n\n**The Fast Way (~50s):** In a $30$-$60$-$90$ triangle with short leg $s$, the legs are $s$ and $s\\sqrt{3}$, so the area is $\\frac{1}{2} \\cdot s \\cdot s\\sqrt{3} = \\frac{\\sqrt{3}}{2}s^2$. Set $\\frac{\\sqrt{3}}{2}s^2 = 242\\sqrt{3} \\Rightarrow s^2 = 484 \\Rightarrow s = 22$. The hypotenuse is $2s = 44$.\n\n**The Full Solution:**\nStep 1: Angles $30^\\circ$, $60^\\circ$, $90^\\circ$ make this a $30$-$60$-$90$ triangle, with sides in ratio $1 : \\sqrt{3} : 2$ (short leg : long leg : hypotenuse). Let the short leg be $s$.\nStep 2: The two legs $s$ and $s\\sqrt{3}$ are perpendicular, so the area is $\\frac{1}{2} \\cdot s \\cdot s\\sqrt{3} = \\frac{\\sqrt{3}}{2}s^2$.\nStep 3: Set this equal to the given area: $\\frac{\\sqrt{3}}{2}s^2 = 242\\sqrt{3} \\Rightarrow s^2 = 484 \\Rightarrow s = 22$.\nStep 4: The hypotenuse is twice the short leg: $2s = 2(22) = 44$.\nCheck: legs $22$ and $22\\sqrt{3}$ give area $\\frac{1}{2}(22)(22\\sqrt{3}) = 242\\sqrt{3}$, and hypotenuse $\\sqrt{22^2 + (22\\sqrt{3})^2} = \\sqrt{484 + 1452} = \\sqrt{1936} = 44$. $\\checkmark$\n\n**Common Mistakes:** Using an equilateral-triangle area formula instead of treating the two legs as the base and height of a right angle; reporting the short leg $22$ or the long leg $22\\sqrt{3}$ instead of the hypotenuse.\n\n**Test Day Takeaway:** In a $30$-$60$-$90$ triangle the legs are $s$ and $s\\sqrt{3}$, the area is $\\frac{\\sqrt{3}}{2}s^2$, and the hypotenuse is $2s$.",
  skills: ["special-right-triangles", "area"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the graph of the line $y = 2x + k$ and the graph of the parabola $y = x^2 - 6x + 14$ intersect at exactly one point. What is the value of $k$?",
  choices: [
    // distractor: sign error when moving the constant across (uses +2)
    { id: "A", text: "$2$" },
    { id: "B", text: "$-2$" },
    // distractor: forgets to subtract, using c = 14 directly
    { id: "C", text: "$14$" },
    // distractor: takes the vertex y-value (5) as k
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Line-Parabola Intersection Count**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Set them equal: $x^2 - 6x + 14 = 2x + k \\Rightarrow x^2 - 8x + (14 - k) = 0$. Exactly one intersection means the discriminant is $0$: $64 - 4(14 - k) = 0 \\Rightarrow 4k = -8 \\Rightarrow k = -2$, which is choice B.\n\n**The Full Solution:**\nStep 1: Set the line equal to the parabola: $x^2 - 6x + 14 = 2x + k$.\nStep 2: Move every term to one side: $x^2 - 8x + (14 - k) = 0$.\nStep 3: A line meets a parabola at exactly one point when this quadratic has exactly one real root, so the discriminant is $0$: $(-8)^2 - 4(1)(14 - k) = 0 \\Rightarrow 64 - 56 + 4k = 0 \\Rightarrow 8 + 4k = 0 \\Rightarrow k = -2$.\nCheck: with $k = -2$, $x^2 - 8x + 16 = 0 \\Rightarrow (x - 4)^2 = 0$, a single root $x = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): sign error — solves $4k = 8$ instead of $4k = -8$.\n* Choice C ($14$): grabs the parabola's constant $14$ directly without forming the discriminant.\n* Choice D ($5$): reports the parabola's vertex $y$-value ($5$) instead of $k$.\n\n**Test Day Takeaway:** A line meets a parabola at exactly one point when the combined quadratic has a zero discriminant — set $b^2 - 4ac = 0$ and solve.",
  skills: ["quadratic-equations", "systems-of-equations"]
}
      ]
    }
  ]
};
