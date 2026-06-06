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
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Total $\\times 0.40 = 1{,}840$, so total $= \\frac{1{,}840}{0.40} = 4{,}600$.\n\n**The Full Solution:**\nLet $T$ be the total number of birds. Then ${}0.40 \\cdot T = 1{,}840$.\nDivide both sides by $0.40$: $T = \\dfrac{1{,}840}{0.40} = 4{,}600$.\n\nVerification: $40\\%$ of $4{,}600 = 0.40 \\cdot 4{,}600 = 1{,}840$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — multiplies $1{,}840 \\cdot 0.40 = 736$ instead of dividing.\n* Choice B: \"wrong base\" — divides by the complement $0.60$ (treats $1{,}840$ as the non-migratory count).\n* Choice D: \"off-by-one\" — divides by $0.04$ instead of $0.40$ (decimal-place slip).\n\n**Test Day Takeaway:** When a percent of an unknown total is given, divide the part by the percent (as a decimal) to recover the whole.",
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
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Peanuts make up $\\dfrac{5}{5 + 2} = \\dfrac{5}{7}$ of the total. So peanuts $= \\dfrac{5}{7} \\cdot 63 = 45$ cups.\n\n**The Full Solution:**\nLet peanuts $= 5k$ and raisins $= 2k$ (so the ratio is $5 : 2$).\nTotal: $5k + 2k = 7k = 63$, so $k = 9$.\nPeanuts $= 5k = 5 \\cdot 9 = 45$ cups.\n\nVerification: raisins $= 2 \\cdot 9 = 18$, total $= 45 + 18 = 63$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports $2$ (the raisin part of the ratio) instead of solving the proportion.\n* Choice B: \"wrong base\" — uses $\\dfrac{5}{2}$ of the total instead of $\\dfrac{5}{7}$.\n* Choice D: \"applies the inverse operation\" — solves for raisins ($\\dfrac{2}{7} \\cdot 63 = 18$) instead of peanuts.\n\n**Test Day Takeaway:** When two parts are given as a ratio and the total of both parts is known, the denominator of each fraction is the SUM of the ratio parts, not just one part.",
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
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** In $f(t) = 64 + 9t$, the coefficient of $t$ is the rate of change: $9$ degrees per minute.\n\n**The Full Solution:**\nThe function is in the form $f(t) = b + mt$, where $m = 9$ is the slope and $b = 64$ is the $y$-intercept. The slope tells us the rate of change: for each additional minute, the temperature increases by $9$ degrees Fahrenheit.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — confuses the slope $9$ with the initial value, which is $64$.\n* Choice B: \"applies the inverse operation\" — treats $9$ as an input value $t = 9$ instead of a rate.\n* Choice D: \"applies the inverse operation\" — inverts the rate (one degree per $\\tfrac{1}{9}$ minute).\n\n**Test Day Takeaway:** In $y = b + mx$, the coefficient of the variable is always the rate of change per unit of that variable.",
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
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $4$ extra instruments at $\\$8$ each add $\\$32$ to the original total. New total: $\\$71 + \\$32 = \\$103$.\n\n**The Full Solution:**\nLet the cost equation be $8n + 15 = 71$, so $8n = 56$ and $n = 7$.\nFor $n + 4 = 11$ instruments: total $= 8(11) + 15 = 88 + 15 = \\$103$.\n\nShortcut: you do not need to find $n$. Adding $4$ instruments adds $4 \\cdot \\$8 = \\$32$, and the membership fee is unchanged, so the new total is $\\$71 + \\$32 = \\$103$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — adds the count $4$ as dollars instead of $4 \\cdot \\$8 = \\$32$.\n* Choice B: \"wrong base\" — uses the fee ($\\$15$) as the per-instrument rate, getting $\\$71 + 4 \\cdot \\$15 = \\$131$.\n* Choice D: \"off-by-one\" — double-counts the original $\\$71$ as if every order pays it twice.\n\n**Test Day Takeaway:** Linear cost = (rate $\\times$ quantity) + fixed fee. Adding more items only changes the rate-times-quantity piece — the fixed fee does not change.",
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
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Cross-multiply: $3y \\cdot 7 = 14 \\cdot 12$, so $21y = 168$ and $y = 8$. Then $y - 5 = 3$.\n\n**The Full Solution:**\n$\\dfrac{3y}{14} = \\dfrac{12}{7}$\n\nCross-multiply: $7 \\cdot 3y = 14 \\cdot 12 \\Rightarrow 21y = 168 \\Rightarrow y = 8$.\n\nThe question asks for $y - 5$, not $y$: $8 - 5 = 3$.\n\nVerification: $\\dfrac{3(8)}{14} = \\dfrac{24}{14} = \\dfrac{12}{7}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — solves for $y$ correctly but forgets to subtract $5$.\n* Choice C: \"applies the inverse operation\" — adds $5$ to $y$ instead of subtracting.\n* Choice D: \"wrong base\" — keeps $3y$ instead of solving for $y$.\n\n**Test Day Takeaway:** Always re-read the last sentence before answering. The question often asks for a related quantity, not the variable itself.",
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
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"Triples every $4$ hours\" means the exponent must equal $1$ when $t = 4$: $\\dfrac{t}{4}$ gives $\\dfrac{4}{4} = 1$. Initial value is $200$, base is $3$.\n\n**The Full Solution:**\nThe general period-multiplier model is $P(t) = P_0 \\cdot k^{\\frac{t}{d}}$, where $P_0 = 200$, $k = 3$, and $d = 4$.\nSo $P(t) = 200(3)^{\\frac{t}{4}}$.\n\nCheck: $P(4) = 200(3)^1 = 600$ (tripled) \\checkmark, $P(8) = 200(3)^2 = 1800$ (tripled again) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses $4t$ in the exponent instead of $\\dfrac{t}{4}$, which would multiply by $3^4 = 81$ every hour.\n* Choice C: \"wrong base\" — swaps the base and the period.\n* Choice D: \"off-by-one\" — starts the exponent off-by-tripling (initial value $600$ instead of $200$).\n\n**Test Day Takeaway:** \"Multiplies by $k$ every $d$ units\" $\\Rightarrow P(t) = P_0 \\cdot k^{\\frac{t}{d}}$.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  question: "A data set is modeled by the linear equation $y = 2.4x + 9.8$. According to this model, what is the predicted value of $y$ when $x = 12$?",
  choices: [
    // distractor: stops at 2.4 \times 12 = 28.8 — forgets to add 9.8
    { id: "A", text: "$28.8$" },
    // distractor: adds only part of the intercept (uses 5)
    { id: "B", text: "$33.8$" },
    { id: "C", text: "$38.6$" },
    // distractor: rounds 2.4 to 3 and 9.8 to 10 — wrong base
    { id: "D", text: "$46.0$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $y = 2.4(12) + 9.8 = 28.8 + 9.8 = 38.6$.\n\n**The Full Solution:**\nSubstitute $x = 12$ into the equation:\n$y = 2.4(12) + 9.8 = 28.8 + 9.8 = 38.6$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — computes $2.4 \\times 12 = 28.8$ but forgets to add the intercept $9.8$.\n* Choice B: \"off-by-one\" — adds only part of the intercept (e.g., $5$ instead of $9.8$).\n* Choice D: \"wrong base\" — rounds $2.4 \\to 3$ and $9.8 \\to 10$, getting $3(12) + 10 = 46$.\n\n**Test Day Takeaway:** When you plug a value into $y = mx + b$, do not forget the constant term. Decimal multiplication is easy to slip on under time pressure.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A cylindrical rainwater barrel has an interior base radius of $5$ feet and an interior height of $6$ feet. The interior volume of the barrel, in cubic feet, can be written in the form $k\\pi$. What is the value of $k$?",
  correctAnswer: "150",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $150$.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (5)^2 (6) = 25 \\cdot 6 \\pi = 150\\pi$. So $k = 150$.\n\n**The Full Solution:**\nThe volume formula for a right circular cylinder is $V = \\pi r^2 h$.\nWith $r = 5$ ft and $h = 6$ ft:\n$V = \\pi (5)^2 (6) = \\pi (25)(6) = 150\\pi$ cubic feet.\nSo $k = 150$.\n\n**Common Mistakes to Avoid:**\n* Forgetting to square the radius — using $\\pi r h$ would give $30\\pi$, so $k = 30$.\n* Confusing the cylinder formula with the cone formula $V = \\dfrac{1}{3}\\pi r^2 h$, which gives $50$.\n\n**Verification:** $\\pi (25)(6) = 150\\pi$ \\checkmark, and the answer $k = 150$ is unitless because we factored out $\\pi$.\n\n**Test Day Takeaway:** For a cylinder, square the radius first, then multiply by the height. Memorize $V = \\pi r^2 h$ — this is a Reference Sheet formula.",
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
  explanation: "**SAT Pattern: Similar Figures — Area Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Side ratio $4:7$ gives area ratio $4^2 : 7^2 = 16 : 49$. So $\\dfrac{32}{A} = \\dfrac{16}{49}$, giving $A = \\dfrac{32 \\cdot 49}{16} = 98$.\n\n**The Full Solution:**\nFor similar figures, the ratio of areas equals the square of the ratio of corresponding sides.\nSide ratio $= \\dfrac{4}{7}$, so area ratio $= \\left(\\dfrac{4}{7}\\right)^2 = \\dfrac{16}{49}$.\n$\\dfrac{\\text{small area}}{\\text{large area}} = \\dfrac{16}{49}$\n$\\dfrac{32}{\\text{large area}} = \\dfrac{16}{49}$\nLarge area $= \\dfrac{32 \\cdot 49}{16} = \\dfrac{1568}{16} = 98$ square inches.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses the side ratio directly: $32 \\cdot \\dfrac{7}{4} = 56$.\n* Choice C: \"wrong base\" — multiplies $32 \\cdot 7 = 224$, ignoring the squaring rule.\n* Choice D: \"stops one step early\" — reports $49$ (the squared ratio piece) instead of completing the proportion.\n\n**Test Day Takeaway:** Area scales as the SQUARE of the side ratio. Volume scales as the CUBE.",
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
  explanation: "**SAT Pattern: Residual**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Predicted: $0.6(25) + 22 = 15 + 22 = 37$. Actual $= 33$. Residual $= 33 - 37 = -4$. So below by $4$.\n\n**The Full Solution:**\nPredicted score $= 0.6(25) + 22 = 15 + 22 = 37$.\nActual score $= 33$.\nResidual $= \\text{actual} - \\text{predicted} = 33 - 37 = -4$.\nThe negative residual means the student scored $4$ points below the predicted value.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — reverses the subtraction order to get $+4$.\n* Choice C: \"stops one step early\" — uses $0.6 \\cdot 25 = 15$ as the predicted value (forgets the intercept).\n* Choice D: \"wrong base\" — combines a wrong residual sign with a wrong magnitude.\n\n**Test Day Takeaway:** Residual = actual $-$ predicted. Negative = below the line.",
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
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Given afternoon (column total $= 130$). Weekend afternoons $= 75$. Probability $= \\dfrac{75}{130} = \\dfrac{15}{26}$.\n\n**The Full Solution:**\nThe condition is \"afternoon,\" so restrict to the Afternoon column (total $= 130$).\nWeekend afternoon visits $= 75$.\n$P(\\text{weekend} \\mid \\text{afternoon}) = \\dfrac{75}{130} = \\dfrac{15}{26}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses the grand total $250$ instead of the afternoon total.\n* Choice B: \"applies the inverse operation\" — uses the weekend row total $110$ as the denominator.\n* Choice D: \"stops one step early\" — gives the probability of a weekday afternoon visit given afternoon.\n\n**Test Day Takeaway:** \"Given $X$\" means $X$'s total becomes the denominator.",
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
  explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Sushi preferrers who are teens: $54$. Total sushi preferrers: $102$. Percentage: $\\dfrac{54}{102} \\approx 0.529 \\approx 53\\%$.\n\n**The Full Solution:**\nThe question asks: of those who prefer sushi, what percentage are teens? This is a conditional probability.\n$\\dfrac{\\text{Teens and Sushi}}{\\text{Total Sushi}} = \\dfrac{54}{102} \\approx 0.5294 \\approx 53\\%$\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — divides by the grand total ($200$) instead of the sushi column total ($102$): $\\dfrac{54}{200} = 27\\%$.\n* Choice B: \"stops one step early\" — reads $54$ directly as if the table were already in percent.\n* Choice D: \"off-by-one\" — uses the wrong row ($48$ from adults) and divides by $102$ to get $\\approx 47\\%$.\n\n**Test Day Takeaway:** In conditional probability, the denominator is the total of the GIVEN condition, not the grand total.",
  skills: ["two-way-tables", "probability", "percents"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Line $p$ has a slope of $-\\dfrac{3}{4}$. Line $q$ is perpendicular to line $p$ and passes through the point $(3, -3)$. What is the $y$-intercept of line $q$?",
  choices: [
    { id: "A", text: "$-7$" },
    // distractor: uses the same slope (parallel) instead of perpendicular
    { id: "B", text: "$-\\dfrac{3}{4}$" },
    // distractor: forgets to flip the sign — uses -4/3 instead of 4/3
    { id: "C", text: "$1$" },
    // distractor: drops the negative sign on the reciprocal — uses 4/3 with sign error
    { id: "D", text: "$7$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Perpendicular slope is $\\dfrac{4}{3}$. Using $(3, -3)$: $-3 = \\dfrac{4}{3}(3) + b$, so $-3 = 4 + b$ and $b = -7$.\n\n**The Full Solution:**\nPerpendicular slopes are negative reciprocals.\nSlope of $p$: $-\\dfrac{3}{4}$. Slope of $q$: $\\dfrac{4}{3}$.\nUsing $(3, -3)$: $-3 = \\dfrac{4}{3}(3) + b \\Rightarrow -3 = 4 + b \\Rightarrow b = -7$.\n\nVerification: at $(3, -3)$: $\\dfrac{4}{3}(3) - 7 = 4 - 7 = -3$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — uses the same slope as $p$ (parallel, not perpendicular).\n* Choice C: \"wrong base\" — uses slope $-\\dfrac{4}{3}$ (wrong sign) and gets $b = 1$.\n* Choice D: \"off-by-one\" — sign error in the final arithmetic step.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals: flip the fraction AND change the sign.",
  skills: ["slope", "linear-functions", "coordinate-geometry"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The system of equations below has the solution $(x, y)$.\n\n$5x - 4y = 22$\n$3x + 4y = 26$\n\nWhat is the value of $y$?",
  choices: [
    // distractor: stops one step early — gives x instead of y
    { id: "A", text: "$6$" },
    { id: "B", text: "$2$" },
    // distractor: arithmetic error — divides 6 by 6 to get 1
    { id: "C", text: "$1$" },
    // distractor: wrong base — picks one of the system coefficients
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Add the two equations to eliminate $y$: $8x = 48$, so $x = 6$. Substitute: $3(6) + 4y = 26$, so $4y = 8$ and $y = 2$.\n\n**The Full Solution:**\nAdding the equations:\n$(5x - 4y) + (3x + 4y) = 22 + 26$\n$8x = 48 \\Rightarrow x = 6$\n\nSubstitute $x = 6$ into $3x + 4y = 26$:\n$18 + 4y = 26 \\Rightarrow 4y = 8 \\Rightarrow y = 2$.\n\nVerification: $5(6) - 4(2) = 30 - 8 = 22$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports the value of $x$ instead of $y$.\n* Choice C: \"off-by-one\" — divides $4$ by $4$ instead of $8$ by $4$ in the final step.\n* Choice D: \"wrong base\" — picks a coefficient from the system as the answer.\n\n**Test Day Takeaway:** When the coefficients of one variable are opposites, ADD the equations to eliminate it instantly.",
  skills: ["systems-of-equations", "solving-equations"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "If $5(3p - 2) - 4 = 6p + 13$, what is the value of $p$?",
  correctAnswer: "3",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~20s):** Expand: $15p - 10 - 4 = 6p + 13$, so $15p - 14 = 6p + 13$, then $9p = 27$, giving $p = 3$.\n\n**The Full Solution:**\n$5(3p - 2) - 4 = 6p + 13$\n$15p - 10 - 4 = 6p + 13$\n$15p - 14 = 6p + 13$\n$9p = 27$\n$p = 3$\n\n**Common Mistakes to Avoid:**\n* Forgetting to distribute the $5$ to BOTH terms inside the parentheses.\n* Sign errors when combining $-10 - 4 = -14$ (some students write $-6$).\n\n**Verification:** Left $= 5(3 \\cdot 3 - 2) - 4 = 5(7) - 4 = 31$. Right $= 6(3) + 13 = 18 + 13 = 31$ \\checkmark.\n\n**Test Day Takeaway:** Distribute first, combine like terms second, isolate the variable last. Each step is mechanical — slow down to avoid sign slips.",
  skills: ["solving-equations"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For what value of $c$ does the system of equations below have exactly one solution?\n\n$y = 3x^2 + 13x + 1$\n$y = 5x + c$",
  choices: [
    { id: "A", text: "$c = -\\dfrac{13}{3}$" },
    // distractor: sign error in the discriminant simplification
    { id: "B", text: "$c = \\dfrac{13}{3}$" },
    // distractor: sets 1 - c = 0 instead of using the discriminant
    { id: "C", text: "$c = 1$" },
    // distractor: uses (b/2a) directly without applying discriminant
    { id: "D", text: "$c = -\\dfrac{8}{3}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Set equal: $3x^2 + 13x + 1 = 5x + c$, so $3x^2 + 8x + (1 - c) = 0$. For exactly one solution, discriminant $= 0$: $8^2 - 4(3)(1 - c) = 0 \\Rightarrow 64 - 12 + 12c = 0 \\Rightarrow 12c = -52 \\Rightarrow c = -\\dfrac{13}{3}$.\n\n**The Full Solution:**\nSet equations equal:\n$3x^2 + 13x + 1 = 5x + c$\n$3x^2 + 8x + (1 - c) = 0$\n\nFor exactly one (real) solution, the discriminant must equal zero:\n$b^2 - 4ac = 0 \\Rightarrow 8^2 - 4(3)(1 - c) = 0$\n$64 - 12(1 - c) = 0$\n$64 - 12 + 12c = 0$\n$52 + 12c = 0$\n$c = -\\dfrac{52}{12} = -\\dfrac{13}{3}$\n\nVerification: with $c = -\\tfrac{13}{3}$, constant term is $1 - (-\\tfrac{13}{3}) = \\tfrac{16}{3}$. Discriminant $= 64 - 4(3)(\\tfrac{16}{3}) = 64 - 64 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — sign error when distributing $-12(1 - c)$.\n* Choice C: \"wrong base\" — sets $1 - c = 0$ (the constant, not the discriminant).\n* Choice D: \"stops one step early\" — uses $-\\tfrac{b}{2a}$ instead of applying the discriminant.\n\n**Test Day Takeaway:** A line is tangent to a parabola when the combined equation's discriminant equals zero. Always set the equations equal first, THEN apply the discriminant.",
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
  explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Vertex form: $y = -3(x - 2)^2 + 7$. Expand: $-3(x^2 - 4x + 4) + 7 = -3x^2 + 12x - 12 + 7 = -3x^2 + 12x - 5$. So $c = -5$.\n\n**The Full Solution:**\nWith vertex $(2, 7)$ and leading coefficient $a = -3$:\n$y = -3(x - 2)^2 + 7$\n\nExpand:\n$y = -3(x^2 - 4x + 4) + 7$\n$y = -3x^2 + 12x - 12 + 7$\n$y = -3x^2 + 12x - 5$\n\nSo $b = 12$ and $c = -5$.\n\nVerification: vertex $x$-coordinate $= -\\dfrac{b}{2a} = -\\dfrac{12}{-6} = 2$ \\checkmark, and $y(2) = -3(4) + 24 - 5 = 7$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — sign-flips the vertex $y$-coordinate.\n* Choice C: \"stops one step early\" — reports the vertex $y$-value as $c$.\n* Choice D: \"applies the inverse operation\" — sign error: $-12 + 7$ misread as $+5$.\n\n**Test Day Takeaway:** Write vertex form first, then expand to standard form. The constant term $c$ is the $y$-intercept, NOT the vertex $y$-coordinate.",
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
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Factor numerator as a difference of squares: $(3x-4)(3x+4)$. Factor denominator: $(3x-4)(x+1)$. Cancel $(3x-4)$: $\\dfrac{3x+4}{x+1}$.\n\n**The Full Solution:**\nNumerator: $9x^2 - 16 = (3x)^2 - 4^2 = (3x - 4)(3x + 4)$.\n\nDenominator: $3x^2 - x - 4$. Factor by grouping — find numbers multiplying to $3 \\cdot (-4) = -12$ and adding to $-1$: those are $-4$ and $3$.\n$3x^2 + 3x - 4x - 4 = 3x(x + 1) - 4(x + 1) = (3x - 4)(x + 1)$.\n\nSimplify: $\\dfrac{(3x-4)(3x+4)}{(3x-4)(x+1)} = \\dfrac{3x+4}{x+1}$ for $x \\neq \\tfrac{4}{3}$.\n\nVerification at $x = 2$: original $= \\dfrac{36 - 16}{12 - 2 - 4} = \\dfrac{20}{6} = \\dfrac{10}{3}$. Choice B at $x = 2$: $\\dfrac{6+4}{2+1} = \\dfrac{10}{3}$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — guesses without factoring; no path to this answer.\n* Choice C: \"applies the inverse operation\" — keeps $(3x-4)$ in the numerator instead of cancelling it.\n* Choice D: \"off-by-one\" — keeps both numerator factors but drops the $(x+1)$ in the denominator.\n\n**Test Day Takeaway:** Factor BOTH numerator and denominator completely before cancelling. Difference of squares ($a^2 - b^2$) is the most common SAT factoring trap.",
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
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Complete the square: $(x^2 - 6x + 9) + (y^2 + 8y + 16) = 11 + 9 + 16 = 36$. So $(x-3)^2 + (y+4)^2 = 36$. Radius $= \\sqrt{36} = 6$.\n\n**The Full Solution:**\n$x^2 + y^2 - 6x + 8y - 11 = 0$\n$(x^2 - 6x) + (y^2 + 8y) = 11$\n\nComplete the square for $x$: $(x^2 - 6x + 9) = (x-3)^2$, add $9$ to both sides.\nComplete the square for $y$: $(y^2 + 8y + 16) = (y+4)^2$, add $16$ to both sides.\n$(x-3)^2 + (y+4)^2 = 11 + 9 + 16 = 36$\n\nRadius $= \\sqrt{36} = 6$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — completes only the $y$-square correctly and uses $\\sqrt{16} = 4$.\n* Choice C: \"wrong base\" — uses $11$ from the original equation as the radius.\n* Choice D: \"stops one step early\" — reports $r^2 = 36$ as the radius instead of $r = 6$.\n\n**Test Day Takeaway:** Complete the square for BOTH variables. The radius is $\\sqrt{r^2}$, not $r^2$ itself.",
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
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Recognize the $5$-$12$-$13$ triple scaled by $2$: $10$-$24$-$26$. The missing leg is $10$. Area $= \\dfrac{1}{2}(24)(10) = 120$.\n\n**The Full Solution:**\nLet the unknown leg be $b$. By the Pythagorean theorem:\n$24^2 + b^2 = 26^2$\n$576 + b^2 = 676$\n$b^2 = 100 \\Rightarrow b = 10$.\nThe two legs ($24$ and $10$) are perpendicular, so the area is\n$\\dfrac{1}{2}(24)(10) = 120$ square units.\n\nVerification: $24^2 + 10^2 = 576 + 100 = 676 = 26^2$ \\checkmark. This is the $5$-$12$-$13$ triple scaled by $2$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses the hypotenuse $26$ as a leg, computing $\\dfrac{1}{2}(24)(26) = 312$.\n* Choice B: \"applies the inverse operation\" — computes the perimeter $24 + 10 + 26 = 60$ instead of the area.\n* Choice D: \"stops one step early\" — multiplies the legs $24 \\cdot 10 = 240$ but forgets the $\\dfrac{1}{2}$ factor.\n\n**Test Day Takeaway:** Recognize scaled Pythagorean triples ($5$-$12$-$13 \\to 10$-$24$-$26$) to find a missing side fast, then remember a right triangle's two legs are its base and height.",
  skills: ["triangles", "pythagorean", "area"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The polynomial $p(x) = 3x^2 + bx + 24$ has zeros $r$ and $s$ such that $r + s = -8$. What is the value of $rs$?",
  correctAnswer: "8",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~20s):** For $ax^2 + bx + c$ with roots $r, s$: sum $r + s = -\\dfrac{b}{a}$, product $rs = \\dfrac{c}{a}$. So $rs = \\dfrac{24}{3} = 8$.\n\n**The Full Solution:**\nVieta's formulas for $p(x) = ax^2 + bx + c$ with zeros $r$ and $s$:\n$r + s = -\\dfrac{b}{a}, \\quad rs = \\dfrac{c}{a}$\n\nHere $a = 3$ and $c = 24$, so $rs = \\dfrac{24}{3} = 8$.\n\nVerification: from $r + s = -8 = -\\dfrac{b}{3}$, we get $b = 24$. So $p(x) = 3x^2 + 24x + 24 = 3(x^2 + 8x + 8)$. Zeros: $x = \\dfrac{-8 \\pm \\sqrt{64 - 32}}{2} = -4 \\pm 2\\sqrt{2}$. Product: $(-4 + 2\\sqrt{2})(-4 - 2\\sqrt{2}) = 16 - 8 = 8$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using $\\dfrac{c}{b}$ or $-\\dfrac{c}{a}$ instead of $\\dfrac{c}{a}$ for product.\n* Forgetting the leading coefficient $a$ when applying Vieta's formulas.\n\n**Test Day Takeaway:** For a quadratic $ax^2 + bx + c$, the product of zeros is always $\\dfrac{c}{a}$ — no need to find the zeros explicitly.",
  skills: ["quadratic-equations", "polynomial-operations"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $\\dfrac{\\sqrt[3]{x^8}}{\\sqrt[6]{x^5}} = x^k$ for $x > 0$, what is the value of $k$? Express your answer as a fraction.",
  correctAnswer: "11/6",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\dfrac{11}{6}$.**\n\n**The Fast Way (~20s):** Convert to exponents: $\\dfrac{x^{8/3}}{x^{5/6}} = x^{8/3 - 5/6}$. Common denominator $6$: $\\dfrac{16}{6} - \\dfrac{5}{6} = \\dfrac{11}{6}$.\n\n**The Full Solution:**\n$\\sqrt[3]{x^8} = x^{\\frac{8}{3}}$\n$\\sqrt[6]{x^5} = x^{\\frac{5}{6}}$\n\nWhen dividing powers with the same base, subtract exponents:\n$\\dfrac{x^{\\frac{8}{3}}}{x^{\\frac{5}{6}}} = x^{\\frac{8}{3} - \\frac{5}{6}}$.\n\nCommon denominator $6$:\n$\\dfrac{8}{3} = \\dfrac{16}{6}, \\quad \\dfrac{16}{6} - \\dfrac{5}{6} = \\dfrac{11}{6}$.\n\nSo $k = \\dfrac{11}{6}$.\n\n**Common Mistakes to Avoid:**\n* Writing $\\sqrt[3]{x^8} = x^{\\frac{3}{8}}$ instead of $x^{\\frac{8}{3}}$. The power goes in the numerator; the index goes in the denominator.\n* Adding the exponents instead of subtracting when dividing same bases.\n\n**Verification:** $\\dfrac{8}{3} - \\dfrac{5}{6} = \\dfrac{16}{6} - \\dfrac{5}{6} = \\dfrac{11}{6} \\approx 1.83$ \\checkmark.\n\n**Test Day Takeaway:** Convert radicals to fractional exponents, then SUBTRACT exponents when dividing the same base.",
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
  explanation: "**SAT Pattern: Linear Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** A steady \"$9$ meters per minute\" is a constant rate of change, and elevation is being gained, so the model is increasing linear.\n\n**The Full Solution:**\nThe signature of a LINEAR function is a constant rate of change. \"Gains $9$ meters for every minute\" adds the same $9$ meters each minute — a constant additive rate, not a multiplying factor. Because elevation is increasing, the slope is positive, so the relationship is increasing linear: $E(t) = 9t$.\n\nVerification: at $t = 0$, $E = 0$; at $t = 1$, $E = 9$; at $t = 2$, $E = 18$. Differences: $+9, +9$ — constant \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong type\" — exponential growth needs a constant multiplier per step, not a constant addition.\n* Choice C: \"sign error\" — elevation gained INCREASES as the lift climbs.\n* Choice D: \"wrong type and wrong direction\" — combines both errors.\n\n**Test Day Takeaway:** A fixed amount added per unit of time means LINEAR; a fixed factor multiplied per unit means EXPONENTIAL.",
  skills: ["function-interpretation", "linear-functions"]
},
{
  id: 2,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, line $\\ell$ has a slope of $\\dfrac{2}{9}$ and passes through the point $(-27, 0)$. What is the $y$-coordinate of the point where line $\\ell$ crosses the $y$-axis?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Slope-Intercept Form**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~20s):** Point-slope from $(-27, 0)$: $y - 0 = \\dfrac{2}{9}(x + 27)$. At $x = 0$: $y = \\dfrac{2}{9}(27) = 6$.\n\n**The Full Solution:**\nThe point $(-27, 0)$ is where line $\\ell$ crosses the $x$-axis. Write the line in point-slope form using slope $\\dfrac{2}{9}$:\n$y - 0 = \\dfrac{2}{9}\\big(x - (-27)\\big) = \\dfrac{2}{9}(x + 27)$.\nThe $y$-intercept is the value when $x = 0$:\n$y = \\dfrac{2}{9}(0 + 27) = \\dfrac{2}{9} \\cdot 27 = 6$.\n\nVerification: in $y = \\dfrac{2}{9}x + 6$, setting $y = 0$ gives $\\dfrac{2}{9}x = -6$, so $x = -27$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Dropping the sign of the $x$-intercept and computing $\\dfrac{2}{9}(-27) = -6$ instead of $+6$.\n* Plugging the $x$-intercept's $x$-value back in instead of $x = 0$.\n\n**Test Day Takeaway:** An $x$-intercept gives you a point on the line; combine it with the slope in point-slope form, then evaluate at $x = 0$ for the $y$-intercept.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 3,
  type: "fill-in",
  difficulty: "easy",
  band: 3,
  question: "In the equation $px + 9 = \\dfrac{3}{8}x + 2$, $p$ is a constant. If the equation has no solution, what is the value of $p$?",
  correctAnswer: "3/8",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $\\dfrac{3}{8}$.**\n\n**The Fast Way (~25s):** A linear equation has no solution when the two sides have equal $x$-coefficients but unequal constants. Match coefficients: $p = \\dfrac{3}{8}$ (and $9 \\ne 2$, so there is truly no solution).\n\n**The Full Solution:**\nCollect the $x$-terms on one side:\n$px + 9 = \\dfrac{3}{8}x + 2 \\Rightarrow \\left(p - \\dfrac{3}{8}\\right)x = 2 - 9 = -7$.\nFor this to have NO solution, the $x$-coefficient must be $0$ while the right side is nonzero (so the statement becomes $0 = -7$, which is never true):\n$p - \\dfrac{3}{8} = 0 \\Rightarrow p = \\dfrac{3}{8}$.\nWith $p = \\dfrac{3}{8}$ the equation reduces to $0 = -7$ — impossible — so there is no solution.\n\nVerification: any other $p$ leaves a nonzero coefficient on $x$, giving exactly one solution $x = \\dfrac{-7}{p - 3/8}$, not zero solutions \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Confusing \"no solution\" with \"infinitely many solutions\" — infinitely many would also require the constants to match ($9 = 2$), which they do not.\n* Trying to solve for $x$ as if a value exists; the question is about the coefficient that removes all solutions.\n\n**Test Day Takeaway:** A linear equation has no solution exactly when the variable cancels out and the leftover constants disagree — set the $x$-coefficients equal.",
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
  explanation: "**SAT Pattern: Circle Tangent Line**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Radius slope from $(2,-3)$ to $(6,0)$ is $\\dfrac{0-(-3)}{6-2} = \\dfrac{3}{4}$. The tangent is perpendicular, so its slope is $-\\dfrac{4}{3}$. Line $k$: $y = -\\dfrac{4}{3}(x - 6)$. At $x = 3$: $y = -\\dfrac{4}{3}(-3) = 4$, giving $(3, 4)$.\n\n**The Full Solution:**\nThe tangent line at a point is perpendicular to the radius drawn to that point.\nRadius slope (center $(2,-3)$ to tangent point $(6,0)$): $\\dfrac{0 - (-3)}{6 - 2} = \\dfrac{3}{4}$.\nTangent slope (negative reciprocal of $\\tfrac{3}{4}$): $-\\dfrac{4}{3}$.\nLine $k$ through $(6, 0)$: $y - 0 = -\\dfrac{4}{3}(x - 6)$, i.e. $y = -\\dfrac{4}{3}x + 8$.\nTest $(3, 4)$: $-\\dfrac{4}{3}(3) + 8 = -4 + 8 = 4$ \\checkmark — it lies on line $k$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"plausible off-line point\" — $(9,1)$ looks reasonable, but plugging $x = 9$ into line $k$ gives $y = -\\tfrac{4}{3}(9) + 8 = -4$, not $1$, so it is not on the tangent.\n* Choice C: \"stops one step early\" — negates the radius slope to $-\\tfrac{3}{4}$ but forgets to reciprocate, landing on the radius line's reflection.\n* Choice D: \"applies the inverse operation\" — reciprocates to $\\tfrac{4}{3}$ but forgets the negative sign.\n\n**Test Day Takeaway:** A tangent is perpendicular to the radius at the point of tangency — find the radius slope, take its negative reciprocal, write the line through the tangent point, then test each candidate.",
  skills: ["circle-equations", "perpendicular-slopes", "coordinate-geometry"]
},
{
  id: 5,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "At a fabric-dyeing workshop, the bolts of cloth are prepared in a ratio of $7$ indigo bolts to $4$ crimson bolts. If a batch contains $88$ bolts in total and every bolt is either indigo or crimson, how many indigo bolts are in the batch?",
  correctAnswer: "56",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**The correct answer is $56$.**\n\n**The Fast Way (~15s):** Total parts $= 7 + 4 = 11$. Each part $= 88 \\div 11 = 8$ bolts. Indigo $= 7 \\cdot 8 = 56$.\n\n**The Full Solution:**\nThe ratio $7 : 4$ splits the batch into $7 + 4 = 11$ equal parts. Let each part be $k$ bolts, so indigo $= 7k$ and crimson $= 4k$.\nThe parts together make up the whole batch:\n$7k + 4k = 11k = 88 \\Rightarrow k = \\dfrac{88}{11} = 8$.\nIndigo bolts $= 7k = 7 \\cdot 8 = 56$.\n\nVerification: crimson $= 4 \\cdot 8 = 32$, and $56 + 32 = 88$ \\checkmark, with $\\dfrac{56}{32} = \\dfrac{7}{4}$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Dividing $88$ by $7$ or by $4$ instead of by the SUM $11$ (that ignores the crimson parts and gives a non-integer).\n* Reporting the number of crimson bolts ($32$) or the part value ($8$) instead of the indigo total ($56$).\n* Multiplying $88$ by $\\dfrac{7}{4}$ as if $7:4$ compared indigo to the whole rather than to crimson.\n\n**Test Day Takeaway:** When a ratio's parts together make up the whole, divide the total by the SUM of the ratio parts to get the value of one part, then scale up.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The number $b$ is $80\\%$ less than $60$. The number $a$ is $150\\%$ greater than $b$. What is the value of $a$?",
  correctAnswer: "30",
  explanation: "**SAT Pattern: Successive Percent Changes**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~25s):** \"$80\\%$ less than $60$\": $b = 60(0.20) = 12$. \"$150\\%$ greater than $b$\": $a = 12(2.50) = 30$.\n\n**The Full Solution:**\nFirst find $b$. \"$80\\%$ less than $60$\" keeps $100\\% - 80\\% = 20\\%$ of $60$:\n$b = 0.20 \\cdot 60 = 12$.\nNow find $a$. \"$150\\%$ greater than $b$\" means $b$ plus another $150\\%$ of $b$, i.e. a multiplier of $1 + 1.50 = 2.50$:\n$a = 2.50 \\cdot 12 = 30$.\n\nVerification: $30$ is $12 + 18$, and $18$ is $150\\%$ of $12$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Treating \"$150\\%$ greater\" as multiplying by $1.50$ instead of $2.50$ (that would give $18$).\n* Treating \"$80\\%$ less\" as multiplying by $0.80$ instead of $0.20$.\n\n**Test Day Takeaway:** \"$p\\%$ greater\" multiplies by $1 + \\dfrac{p}{100}$; \"$p\\%$ less\" multiplies by $1 - \\dfrac{p}{100}$. Chain them in order.",
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
  explanation: "**SAT Pattern: Compound Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Monthly rate is $0.4\\%$. Effective annual multiplier is $(1.004)^{12} \\approx 1.0491$, so the annual rate is about $4.9\\%$.\n\n**The Full Solution:**\nRewrite the model by grouping the yearly factor:\n$B(t) = 3200\\,(1.004)^{12t} = 3200\\,\\big((1.004)^{12}\\big)^t$.\nThe effective annual growth factor is $(1.004)^{12}$:\n$(1.004)^{12} \\approx 1.04907$.\nA factor of about $1.0491$ corresponds to an annual increase of about $4.9\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — reports the monthly rate $0.4\\%$ rather than the annual rate.\n* Choice B: \"applies the inverse operation\" — multiplies $0.4\\% \\times 12 = 4.8\\%$ (the nominal rate), ignoring compounding.\n* Choice D: \"wrong base\" — misreads the per-month factor as a $4\\%$ annual factor.\n\n**Test Day Takeaway:** To convert a monthly-compounding model to an effective annual rate, raise the monthly factor to the $12$th power, then subtract $1$.",
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
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $\\dfrac{18}{6} = 3$, $a^{6-2} = a^4$, $b^{2-9} = b^{-7} = \\dfrac{1}{b^7}$. Result: $\\dfrac{3a^4}{b^7}$.\n\n**The Full Solution:**\nWhen dividing like bases, subtract the exponents:\n$\\dfrac{18a^6 b^2}{6a^2 b^9} = \\dfrac{18}{6} \\cdot a^{6-2} \\cdot b^{2-9} = 3a^4 b^{-7} = \\dfrac{3a^4}{b^7}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — adds the exponents ($6+2$, $2+9$) instead of subtracting.\n* Choice C: \"wrong sign\" — flips the sign of the $b$ exponent and writes $b^7$ in the numerator.\n* Choice D: \"applies the inverse operation\" — divides exponents ($6/2$, $9/2$) instead of subtracting.\n\n**Test Day Takeaway:** Dividing powers of the same base means subtracting exponents; a negative result moves the factor to the denominator.",
  skills: ["exponent-rules"]
},
{
  id: 9,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A quadratic function $h$ models the height, in meters, of a misting nozzle's water arc above a greenhouse bench, where $x$ is the horizontal distance in meters from the nozzle. The model estimates that the arc reaches its maximum height of $4.8$ meters at a horizontal distance of $3$ meters, and that the water returns to bench level ($0$ meters) at a horizontal distance of $6$ meters. Based on the model, what is the height of the arc, in meters, at a horizontal distance of $5$ meters?",
  correctAnswer: "8/3",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**The correct answer is $\\dfrac{8}{3}$.**\n\n**The Fast Way (~45s):** Vertex $(3, 4.8)$ gives $h(x) = a(x-3)^2 + 4.8$. Use the root $h(6) = 0$: $9a + 4.8 = 0 \\Rightarrow a = -\\dfrac{8}{15}$. Then $h(5) = -\\dfrac{8}{15}(4) + 4.8 = -\\dfrac{32}{15} + \\dfrac{72}{15} = \\dfrac{40}{15} = \\dfrac{8}{3}$.\n\n**The Full Solution:**\nThe maximum height $4.8$ at $x = 3$ is the vertex, so write\n$h(x) = a(x - 3)^2 + 4.8$.\nThe arc returns to bench level at $x = 6$, so $h(6) = 0$:\n$a(6 - 3)^2 + 4.8 = 0 \\Rightarrow 9a + 4.8 = 0 \\Rightarrow a = -\\dfrac{4.8}{9} = -\\dfrac{8}{15}$.\nNow evaluate at $x = 5$:\n$h(5) = -\\dfrac{8}{15}(5 - 3)^2 + 4.8 = -\\dfrac{8}{15}(4) + 4.8 = -\\dfrac{32}{15} + \\dfrac{72}{15} = \\dfrac{40}{15} = \\dfrac{8}{3}$.\n(As a decimal this is about $2.67$ meters; either form is accepted.)\n\nVerification by symmetry: $x = 5$ is $2$ units from the vertex's axis $x = 3$, the same distance as $x = 1$; and $x = 0$ (the other root by symmetry about $x = 3$) checks out since $h(0) = -\\dfrac{8}{15}(9) + 4.8 = -4.8 + 4.8 = 0$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Forgetting the parabola opens downward, so $a$ is negative.\n* Using $x = 6$ as the axis of symmetry instead of the vertex $x = 3$.\n\n**Test Day Takeaway:** Build the parabola from its vertex in vertex form, solve for $a$ using a known point (often a root), then evaluate at the requested input.",
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
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Original ($10$ values): median $= \\dfrac{8+8}{2} = 8$, range $= 10 - 6 = 4$. New ($11$ values, sorted with the $3$): median is the $6$th value $= 8$, range $= 10 - 3 = 7$. Median unchanged; range up by $3$.\n\n**The Full Solution:**\nOriginal (sorted): $6, 7, 7, 8, 8, 8, 9, 9, 9, 10$.\nMedian of $10$ values $= \\dfrac{5\\text{th} + 6\\text{th}}{2} = \\dfrac{8 + 8}{2} = 8$. Range $= 10 - 6 = 4$.\n\nNew (sorted): $3, 6, 7, 7, 8, 8, 8, 9, 9, 9, 10$.\nMedian of $11$ values $=$ the $6$th value $= 8$. Range $= 10 - 3 = 7$.\n\nMedian change: $8 - 8 = 0$. Range change: $7 - 4 = 3$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — assumes the new low value drags the median down by $1$.\n* Choice B: \"off-by-one\" — assumes every added value shifts the median.\n* Choice D: \"wrong base\" — the range rises by $3$ ($7$ vs. $4$), not by $1$.\n\n**Test Day Takeaway:** A single low outlier widens the range but often leaves the median unchanged when the central values do not move.",
  skills: ["statistics"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Line $r$ passes through the points $(1, 4)$ and $(5, 16)$. Line $s$ is perpendicular to line $r$ and passes through the point $(12, 5)$. At what $x$-coordinate does line $s$ cross the $x$-axis?",
  correctAnswer: "27",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**The correct answer is $27$.**\n\n**The Fast Way (~30s):** Slope of $r$: $\\dfrac{16 - 4}{5 - 1} = 3$. Perpendicular slope: $-\\dfrac{1}{3}$. Line $s$: $y = -\\dfrac{1}{3}x + 9$. Set $y = 0$: $\\dfrac{1}{3}x = 9 \\Rightarrow x = 27$.\n\n**The Full Solution:**\nSlope of line $r$: $m_r = \\dfrac{16 - 4}{5 - 1} = \\dfrac{12}{4} = 3$.\nLine $s$ is perpendicular, so $m_s = -\\dfrac{1}{3}$.\nThrough $(12, 5)$: $y - 5 = -\\dfrac{1}{3}(x - 12)$, so $y = -\\dfrac{1}{3}x + 4 + 5 = -\\dfrac{1}{3}x + 9$.\nThe $x$-intercept is where $y = 0$:\n$0 = -\\dfrac{1}{3}x + 9 \\Rightarrow \\dfrac{1}{3}x = 9 \\Rightarrow x = 27$.\n\nVerification: at $x = 27$, $y = -\\dfrac{1}{3}(27) + 9 = -9 + 9 = 0$ \\checkmark; and the line does pass through $(12, 5)$: $-\\dfrac{1}{3}(12) + 9 = -4 + 9 = 5$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using the parallel slope $3$ instead of the perpendicular slope $-\\tfrac{1}{3}$.\n* Finding the $y$-intercept ($9$) and reporting it instead of the $x$-intercept ($27$).\n* A sign slip when solving $-\\tfrac{1}{3}x + 9 = 0$.\n\n**Test Day Takeaway:** Flip and negate the slope for a perpendicular line, anchor it at the given point, then set $y = 0$ to find where it crosses the $x$-axis.",
  skills: ["slope", "linear-functions", "coordinate-geometry"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Consider the system of equations:\n\n$7x - 3y = 46$\n$2x + 6y = 20$\n\nWhat is the value of $x - y$?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Solve for a Combination**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~20s):** Multiply equation 1 by $2$: $14x - 6y = 92$. Add equation 2 ($2x + 6y = 20$): $16x = 112 \\Rightarrow x = 7$. From equation 2: $6y = 20 - 14 = 6 \\Rightarrow y = 1$. So $x - y = 7 - 1 = 6$.\n\n**The Full Solution:**\nMultiply equation 1 by $2$ so the $y$-terms become $-6y$ and cancel with the $+6y$ in equation 2:\n$14x - 6y = 92$.\nAdd equation 2: $(14x - 6y) + (2x + 6y) = 92 + 20 \\Rightarrow 16x = 112 \\Rightarrow x = 7$.\nSubstitute $x = 7$ into equation 2: $2(7) + 6y = 20 \\Rightarrow 6y = 6 \\Rightarrow y = 1$.\n\nVerification: equation 1: $7(7) - 3(1) = 49 - 3 = 46$ \\checkmark; equation 2: $2(7) + 6(1) = 20$ \\checkmark.\nSo $x - y = 7 - 1 = 6$.\n\n**Common Mistakes to Avoid:**\n* Reporting $x + y = 8$ when the question asks for $x - y$.\n* Sign errors when scaling equation 1 to cancel the $y$-terms.\n\n**Test Day Takeaway:** Scale one equation so a variable cancels on addition, solve for the first variable, then back-substitute for the second.",
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
  explanation: "**SAT Pattern: Radical Function Parameter Analysis**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The graph passes through $(-7, 0)$, so the radicand is $0$ there: $-7 + b = 0 \\Rightarrow b = 7$. Then $g(2) = a\\sqrt{2 + 7} = 3a < 0 \\Rightarrow a < 0$. So $a < 0 < 7 = b$, giving $a < b$.\n\n**The Full Solution:**\nA zero of $g(x) = a\\sqrt{x + b}$ occurs where the radicand is $0$. The point $(-7, 0)$ means $g(-7) = 0$, so $-7 + b = 0$ and $b = 7$.\nNow use $g(2) < 0$: $g(2) = a\\sqrt{2 + 7} = a\\sqrt{9} = 3a$. For $3a < 0$, we need $a < 0$.\nTherefore $a$ is negative and $b = 7$ is positive, so $a < b$ must be true.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — assumes $g(0)$ equals the magnitude of $b$ without using $a$.\n* Choice B: \"stops one step early\" — uses the right sign idea but the wrong value; $g(0) = a\\sqrt{7}$ is an irrational negative number, not $-7$.\n* Choice C: \"applies the inverse operation\" — reverses the inequality; $a$ is negative and $b$ is positive, so $a < b$, not $a > b$.\n\n**Test Day Takeaway:** Use a known zero to pin one constant from the radicand, then use a sign condition on an output to pin the other.",
  skills: ["radical-functions", "function-interpretation"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "easy",
  band: 3,
  question: "At a go-kart track, $40\\%$ of the $185$ laps recorded during a session were driven by junior racers. How many of the recorded laps were driven by junior racers?",
  correctAnswer: "74",
  explanation: "**SAT Pattern: Percent of a Whole**\n\n**The correct answer is $74$.**\n\n**The Fast Way (~10s):** $40\\%$ of $185 = 0.40 \\cdot 185 = 74$.\n\n**The Full Solution:**\nTo find a percent of a quantity, multiply the quantity by the percent written as a decimal:\n$0.40 \\cdot 185 = 74$ laps.\n\nVerification: $10\\%$ of $185$ is $18.5$, so $40\\%$ is $4 \\cdot 18.5 = 74$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Dividing by $0.40$ (that solves the reverse problem and gives $462.5$).\n* Misplacing the decimal and computing $4\\%$ instead of $40\\%$.\n\n**Test Day Takeaway:** \"$p\\%$ of $N$\" is a single multiplication: $\\dfrac{p}{100} \\cdot N$.",
  skills: ["percents"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The expression $4\\sqrt[5]{2^5 x^{35}} \\cdot \\sqrt[6]{3^6 x}$ is equivalent to $ax^b$, where $a$ and $b$ are positive constants and $x > 1$. What is the value of $a + b$? Express your answer as a fraction.",
  correctAnswer: "187/6",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\dfrac{187}{6}$ (approximately $31.17$).**\n\n**The Fast Way (~50s):** $\\sqrt[5]{2^5 x^{35}} = 2x^7$ and $\\sqrt[6]{3^6 x} = 3x^{1/6}$. Combine: $4 \\cdot 2 \\cdot 3 = 24$ and $x^{7 + 1/6} = x^{43/6}$. So $a = 24$, $b = \\dfrac{43}{6}$, and $a + b = 24 + \\dfrac{43}{6} = \\dfrac{144 + 43}{6} = \\dfrac{187}{6}$.\n\n**The Full Solution:**\nConvert each nested radical using rational exponents.\nFirst radical: $\\sqrt[5]{2^5 x^{35}} = (2^5 x^{35})^{1/5} = 2^{5/5} x^{35/5} = 2x^7$.\nSecond radical: $\\sqrt[6]{3^6 x} = (3^6 x)^{1/6} = 3^{6/6} x^{1/6} = 3x^{1/6}$.\nNow multiply, including the leading $4$:\n$4 \\cdot (2x^7) \\cdot (3x^{1/6}) = (4 \\cdot 2 \\cdot 3)\\, x^{7 + 1/6} = 24\\, x^{43/6}$.\nSo $a = 24$ and $b = \\dfrac{43}{6}$, giving\n$a + b = 24 + \\dfrac{43}{6} = \\dfrac{144}{6} + \\dfrac{43}{6} = \\dfrac{187}{6} \\approx 31.17$.\n\nVerification: $7 + \\dfrac{1}{6} = \\dfrac{42}{6} + \\dfrac{1}{6} = \\dfrac{43}{6}$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Leaving the coefficient as $2 \\cdot 3 = 6$ and forgetting to multiply by the leading $4$.\n* Adding the radical indices instead of adding the simplified exponents $7$ and $\\tfrac{1}{6}$.\n\n**Test Day Takeaway:** Turn every radical into a rational exponent, simplify each factor, then multiply coefficients and add exponents.",
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
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** \"$190\\%$ greater\" means each minute the count becomes $1 + 1.90 = 2.90$ times the previous count. With $V_0 = 50$: $V = 50(2.9)^t$.\n\n**The Full Solution:**\nIf a quantity is \"$p\\%$ greater\" each period, the growth factor is $1 + \\dfrac{p}{100}$. Here $p = 190$, so the factor is $1 + 1.90 = 2.90$.\nWith an initial value of $50$ viewers, the model is $V = 50(2.9)^t$.\n\nCheck: at $t = 1$, $V = 50(2.9) = 145$, which is $50 + 95$, and $95$ is $190\\%$ of $50$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — uses $1.9$ as the factor, forgetting to add the original $100\\%$.\n* Choice B: \"wrong base\" — reads $190\\%$ as the whole-number factor $19$.\n* Choice D: \"off-by-one\" — uses $1.19$, a misplaced-decimal version of $19\\%$.\n\n**Test Day Takeaway:** \"$p\\%$ greater\" multiplies by $1 + \\dfrac{p}{100}$, even when $p$ exceeds $100$.",
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
  explanation: "**SAT Pattern: Inequality Boundary**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Two standard deviations below the mean is $48 - 2(6) = 36$. \"More than $2$ standard deviations below\" means strictly less than $36$, so $35$.\n\n**The Full Solution:**\nThe boundary $2$ standard deviations below the mean is $\\mu - 2\\sigma = 48 - 12 = 36$. A value more than $2$ standard deviations below must be strictly less than $36$. Only $35 < 36$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"stops one step early\" — uses $1$ standard deviation below ($48 - 6 = 42$).\n* Choice C: \"applies the inverse operation\" — $36$ equals the boundary, but \"more than\" excludes equality.\n* Choice D: \"off-by-one\" — $38 > 36$, so it is less than $2$ standard deviations below, not more.\n\n**Test Day Takeaway:** \"More than $k$ standard deviations below\" means strictly past the boundary $\\mu - k\\sigma$ on the low side.",
  skills: ["statistics"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$$\\dfrac{x^2}{\\sqrt{x^2 - n^2}} = \\dfrac{n^2}{\\sqrt{x^2 - n^2}} + 30$$\n\nIn the given equation, $n$ is a positive constant. One solution to the equation has the form $x = -\\sqrt{n^2 + p}$, where $p$ is a positive constant. What is the value of $p$?",
  correctAnswer: "900",
  explanation: "**SAT Pattern: Radical Equation — Substitution**\n\n**The correct answer is $900$.**\n\n**The Fast Way (~50s):** Multiply through by $\\sqrt{x^2 - n^2}$: $x^2 - n^2 = 30\\sqrt{x^2 - n^2}$. Let $u = \\sqrt{x^2 - n^2}$, so $u^2 = 30u \\Rightarrow u = 30$. Then $x^2 - n^2 = 900$, so $x = \\pm\\sqrt{n^2 + 900}$, giving $p = 900$.\n\n**The Full Solution:**\nMove the fractions to one side: $\\dfrac{x^2 - n^2}{\\sqrt{x^2 - n^2}} = 30$. The left side simplifies to $\\sqrt{x^2 - n^2}$ (since $\\dfrac{w}{\\sqrt{w}} = \\sqrt{w}$ for $w > 0$).\nSo $\\sqrt{x^2 - n^2} = 30$.\nSquare both sides: $x^2 - n^2 = 900$, hence $x^2 = n^2 + 900$ and $x = \\pm\\sqrt{n^2 + 900}$.\nThe negative solution is $x = -\\sqrt{n^2 + 900}$, so $p = 900$.\n\nVerification: with $u = \\sqrt{x^2 - n^2} = 30 > 0$, the substitution $u^2 = 30u$ gives $u = 30$ (rejecting $u = 0$, which would make the original denominators zero) \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Keeping $u = 0$ as a solution — it makes the original denominator $\\sqrt{x^2 - n^2}$ zero, so it is extraneous.\n* Forgetting to square $30$ when solving $u = 30$ for $x^2 - n^2$.\n\n**Test Day Takeaway:** A substitution $u = \\sqrt{\\cdot}$ turns a radical equation into a quadratic in $u$; solve, discard $u \\le 0$, then back-substitute.",
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
  explanation: "**SAT Pattern: Linear Model from Rate and Initial Value**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $W(10) = 48 - 1.5(10) = 48 - 15 = 33$ liters.\n\n**The Full Solution:**\nSubstitute $t = 10$ into the model:\n$W(10) = 48 - 1.5(10) = 48 - 15 = 33$ liters remaining.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — computes $1.5 \\cdot 10 = 15$, the amount dispensed, not the amount remaining.\n* Choice B: \"wrong base\" — subtracts the rate once ($48 - 1.5$) instead of multiplying by $t$.\n* Choice D: \"applies the inverse operation\" — adds $15$ instead of subtracting it.\n\n**Test Day Takeaway:** In a decreasing linear model $a - rt$, multiply the rate by the time first, then subtract from the starting amount.",
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
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Over $15$ seconds the exponent rises by $\\dfrac{15}{5} = 3$, so density is multiplied by $3^3 = 27$. A factor of $27$ is a $(27 - 1) \\cdot 100\\% = 2600\\%$ increase.\n\n**The Full Solution:**\nCompare $D(t + 15)$ to $D(t)$:\n$\\dfrac{D(t+15)}{D(t)} = \\dfrac{90 \\cdot 3^{\\frac{t+15}{5}}}{90 \\cdot 3^{\\frac{t}{5}}} = 3^{\\frac{15}{5}} = 3^3 = 27$.\nDensity is multiplied by $27$ every $15$ seconds. A growth factor of $27$ is an increase of $(27 - 1) \\cdot 100\\% = 2600\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — uses one period ($t/5$ over $5$ s), giving a factor of $3$ and a $200\\%$ increase.\n* Choice B: \"off-by-one\" — uses the full factor $27$ as $2700\\%$ instead of subtracting $1$.\n* Choice D: \"wrong base\" — uses two periods ($3^2 = 9$, an $800\\%$ increase) instead of three.\n\n**Test Day Takeaway:** A growth factor of $k$ corresponds to a $(k - 1) \\cdot 100\\%$ increase, not $k \\cdot 100\\%$.",
  skills: ["exponential-functions", "percents"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A right triangle has one angle measuring $30^{\\circ}$ and a second angle measuring $60^{\\circ}$. The area of the triangle is $242\\sqrt{3}$ square units. What is the length, in units, of the hypotenuse of the triangle?",
  correctAnswer: "44",
  explanation: "**SAT Pattern: Special Right Triangle — 30-60-90**\n\n**The correct answer is $44$.**\n\n**The Fast Way (~50s):** In a $30$-$60$-$90$ triangle with short leg $s$, the legs are $s$ and $s\\sqrt{3}$, so area $= \\dfrac{\\sqrt{3}}{2}s^2$. Set $\\dfrac{\\sqrt{3}}{2}s^2 = 242\\sqrt{3} \\Rightarrow s^2 = 484 \\Rightarrow s = 22$. Hypotenuse $= 2s = 44$.\n\n**The Full Solution:**\nAngles $30^{\\circ}$, $60^{\\circ}$, and $90^{\\circ}$ make this a $30$-$60$-$90$ right triangle, with sides in ratio $1 : \\sqrt{3} : 2$ (short leg : long leg : hypotenuse). Let the short leg (opposite $30^{\\circ}$) be $s$. The two legs are perpendicular, so the area is\narea $= \\dfrac{1}{2} \\cdot s \\cdot s\\sqrt{3} = \\dfrac{\\sqrt{3}}{2}s^2$.\nSet this equal to the given area:\n$\\dfrac{\\sqrt{3}}{2}s^2 = 242\\sqrt{3} \\Rightarrow s^2 = 484 \\Rightarrow s = 22$.\nThe hypotenuse is twice the short leg: $2s = 2(22) = 44$.\n\nVerification: legs $22$ and $22\\sqrt{3}$ give area $\\dfrac{1}{2}(22)(22\\sqrt{3}) = 242\\sqrt{3}$ \\checkmark, and hypotenuse $= \\sqrt{22^2 + (22\\sqrt{3})^2} = \\sqrt{484 + 1452} = \\sqrt{1936} = 44$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Using the equilateral-triangle area formula instead of treating the two legs as a right angle.\n* Reporting the short leg $s = 22$ or the long leg $22\\sqrt{3}$ instead of the hypotenuse.\n\n**Test Day Takeaway:** In a $30$-$60$-$90$ triangle the legs are $s$ and $s\\sqrt{3}$, area is $\\dfrac{\\sqrt{3}}{2}s^2$, and the hypotenuse is $2s$.",
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
  explanation: "**SAT Pattern: Line-Parabola Intersection Count**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Set equal: $x^2 - 6x + 14 = 2x + k \\Rightarrow x^2 - 8x + (14 - k) = 0$. Exactly one intersection means discriminant $= 0$: $64 - 4(14 - k) = 0 \\Rightarrow 64 - 56 + 4k = 0 \\Rightarrow 4k = -8 \\Rightarrow k = -2$.\n\n**The Full Solution:**\nSet the line equal to the parabola:\n$x^2 - 6x + 14 = 2x + k$.\nMove all terms to one side:\n$x^2 - 6x + 14 - 2x - k = 0 \\Rightarrow x^2 - 8x + (14 - k) = 0$.\nA line and a parabola meet at exactly one point when this quadratic has exactly one real solution, i.e. discriminant $= 0$:\n$(-8)^2 - 4(1)(14 - k) = 0$\n$64 - 56 + 4k = 0$\n$8 + 4k = 0 \\Rightarrow k = -2$.\n\nVerification: with $k = -2$, $x^2 - 8x + 16 = 0 \\Rightarrow (x-4)^2 = 0$, a single root $x = 4$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"sign error\" — solves $4k = 8$ instead of $4k = -8$.\n* Choice C: \"wrong base\" — uses the parabola's constant $14$ directly without forming the discriminant.\n* Choice D: \"stops one step early\" — reports the parabola's vertex $y$-value ($5$) instead of $k$.\n\n**Test Day Takeaway:** A line meets a parabola at exactly one point when the combined quadratic has a zero discriminant — set $b^2 - 4ac = 0$ and solve.",
  skills: ["quadratic-equations", "systems-of-equations"]
}
      ]
    }
  ]
};
