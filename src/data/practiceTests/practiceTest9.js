// Practice Test 9 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Round-6 recalibration: M1 lifted to band-3 ceiling on easy items, domain
// rebalanced to 7/6/5/4. M2 hardened to 0E/6M/16H with band-7 ceilings on
// most hard items and concept-fusion items added at the top end.

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
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Total $\\times 0.40 = 1{,}840$, so total $= \\frac{1{,}840}{0.40} = 4{,}600$.\n\n**The Full Solution:**\nLet $T$ be the total number of birds. Then $0.40 \\cdot T = 1{,}840$.\nDivide both sides by $0.40$: $T = \\dfrac{1{,}840}{0.40} = 4{,}600$.\n\nVerification: $40\\%$ of $4{,}600 = 0.40 \\cdot 4{,}600 = 1{,}840$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — multiplies $1{,}840 \\cdot 0.40 = 736$ instead of dividing.\n* Choice B: \"wrong base\" — divides by the complement $0.60$ (treats $1{,}840$ as the non-migratory count).\n* Choice D: \"off-by-one\" — divides by $0.04$ instead of $0.40$ (decimal-place slip).\n\n**Test Day Takeaway:** When a percent of an unknown total is given, divide the part by the percent (as a decimal) to recover the whole.",
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
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** \"Triples every $4$ hours\" means the exponent must equal $1$ when $t = 4$: $\\dfrac{t}{4}$ gives $\\dfrac{4}{4} = 1$. Initial value is $200$, base is $3$.\n\n**The Full Solution:**\nThe general period-multiplier model is $P(t) = P_0 \\cdot k^{\\frac{t}{d}}$, where $P_0 = 200$, $k = 3$, and $d = 4$.\nSo $P(t) = 200(3)^{\\frac{t}{4}}$.\n\nCheck: $P(4) = 200(3)^1 = 600$ (tripled) \\checkmark, $P(8) = 200(3)^2 = 1800$ (tripled again) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses $4t$ in the exponent instead of $\\dfrac{t}{4}$, which would multiply by $3^4 = 81$ every hour.\n* Choice C: \"wrong base\" — swaps the base and the period.\n* Choice D: \"off-by-one\" — starts the exponent off-by-tripling (initial value $600$ instead of $200$).\n\n**Test Day Takeaway:** \"Multiplies by $k$ every $d$ units\" $\\Rightarrow P(t) = P_0 \\cdot k^{\\frac{t}{d}}$.",
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
  question: "A solid right circular cylinder has a radius of $4$ inches and a height of $9$ inches. The volume of the cylinder, in cubic inches, can be expressed as $k\\pi$. What is the value of $k$?",
  correctAnswer: "144",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $144$.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (4)^2 (9) = 16 \\cdot 9 \\pi = 144\\pi$. So $k = 144$.\n\n**The Full Solution:**\nThe volume formula for a right circular cylinder is $V = \\pi r^2 h$.\nWith $r = 4$ in and $h = 9$ in:\n$V = \\pi (4)^2 (9) = \\pi (16)(9) = 144\\pi$ cubic inches.\nSo $k = 144$.\n\n**Common Mistakes to Avoid:**\n* Forgetting to square the radius — using $\\pi r h$ would give $36\\pi$, so $k = 36$.\n* Confusing the cylinder formula with the cone formula $V = \\dfrac{1}{3}\\pi r^2 h$, which gives $48$.\n\n**Verification:** $\\pi (16)(9) = 144\\pi$ \\checkmark, and the answer $k = 144$ is unitless because we factored out $\\pi$.\n\n**Test Day Takeaway:** For a cylinder, square the radius first, then multiply by the height. Memorize $V = \\pi r^2 h$ — this is a Reference Sheet formula.",
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
  question: "The right triangle shown has legs of length $a$ and $a + 17$ and hypotenuse of length $25$. What is the perimeter of the triangle?",
  diagram: {
    type: "rightTriangle",
    params: {
      sideLabels: ["a", "a + 17", "25"],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: stops one step early — sums only the two legs (7 + 24 = 31)
    { id: "A", text: "$31$" },
    // distractor: uses a + 17 = 17 (off-by-one) and gets 7 + 17 + 25 = 49
    { id: "B", text: "$49$" },
    { id: "C", text: "$56$" },
    // distractor: forgets to subtract one leg — adds 7 + 24 + 25 + 7 (wrong base, double-counts a)
    { id: "D", text: "$63$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Recognize the $7$-$24$-$25$ Pythagorean triple. So $a = 7$ and $a + 17 = 24$. Perimeter $= 7 + 24 + 25 = 56$.\n\n**The Full Solution:**\nApply the Pythagorean theorem: $a^2 + (a + 17)^2 = 25^2$.\n$a^2 + a^2 + 34a + 289 = 625$\n$2a^2 + 34a - 336 = 0$\n$a^2 + 17a - 168 = 0$\n$(a + 24)(a - 7) = 0$\n\nSo $a = 7$ (rejecting the negative root). Then $a + 17 = 24$.\n\nPerimeter $= 7 + 24 + 25 = 56$.\n\nVerification: $7^2 + 24^2 = 49 + 576 = 625 = 25^2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — adds only the two legs ($7 + 24 = 31$) and forgets the hypotenuse.\n* Choice B: \"off-by-one\" — uses $a + 17 = 17$ instead of $24$, getting $7 + 17 + 25 = 49$.\n* Choice D: \"wrong base\" — double-counts the leg $a = 7$, computing $7 + 24 + 25 + 7 = 63$.\n\n**Test Day Takeaway:** Memorize the common Pythagorean triples ($3$-$4$-$5$, $5$-$12$-$13$, $7$-$24$-$25$, $8$-$15$-$17$). When the hypotenuse is $25$, the legs are usually $7$ and $24$.",
  skills: ["triangles", "pythagorean", "perimeter"]
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
  question: "If $\\sqrt[4]{x^7} \\cdot \\sqrt{x^5} = x^k$ for $x > 0$, what is the value of $k$? Express your answer as a fraction.",
  correctAnswer: "17/4",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\dfrac{17}{4}$.**\n\n**The Fast Way (~20s):** Convert to exponents: $x^{\\frac{7}{4}} \\cdot x^{\\frac{5}{2}} = x^{\\frac{7}{4} + \\frac{5}{2}}$. Common denominator: $\\dfrac{7}{4} + \\dfrac{10}{4} = \\dfrac{17}{4}$.\n\n**The Full Solution:**\n$\\sqrt[4]{x^7} = x^{\\frac{7}{4}}$\n$\\sqrt{x^5} = x^{\\frac{5}{2}}$\n\nWhen multiplying powers with the same base, add exponents:\n$x^{\\frac{7}{4}} \\cdot x^{\\frac{5}{2}} = x^{\\frac{7}{4} + \\frac{5}{2}}$\n\nCommon denominator $4$:\n$\\dfrac{7}{4} = \\dfrac{7}{4}, \\quad \\dfrac{5}{2} = \\dfrac{10}{4}, \\quad \\dfrac{7}{4} + \\dfrac{10}{4} = \\dfrac{17}{4}$.\n\nSo $k = \\dfrac{17}{4}$.\n\n**Common Mistakes to Avoid:**\n* Writing $\\sqrt[4]{x^7} = x^{\\frac{4}{7}}$ instead of $x^{\\frac{7}{4}}$. The power goes in the numerator; the index goes in the denominator.\n* Multiplying exponents instead of adding when bases are multiplied.\n\n**Verification:** $\\dfrac{7}{4} + \\dfrac{5}{2} = 1.75 + 2.50 = 4.25 = \\dfrac{17}{4}$ \\checkmark.\n\n**Test Day Takeaway:** Convert radicals to fractional exponents, THEN add when multiplying same bases.",
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
// Distribution: 3E / 6M / 13H. Q1-3 are easy openers (CB-authentic ramp).

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "A rectangle has a length of $12$ cm and a width of $5$ cm. What is the area, in square centimeters, of the rectangle?",
  choices: [
    // distractor: stops one step early - adds length and width
    { id: "A", text: "$17$" },
    // distractor: gives the perimeter instead of the area
    { id: "B", text: "$34$" },
    { id: "C", text: "$60$" },
    // distractor: wrong base - squares the length
    { id: "D", text: "$144$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Area $= l \\cdot w = 12 \\cdot 5 = 60$.\n\n**The Full Solution:**\nArea of a rectangle: $A = l \\cdot w = 12 \\cdot 5 = 60$ cm$^2$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — adds $l + w = 17$ instead of multiplying.\n* Choice B: \"applies the inverse operation\" — gives the perimeter $2(l + w) = 34$.\n* Choice D: \"wrong base\" — squares the length ($12^2 = 144$).\n\n**Test Day Takeaway:** Rectangle area $= l \\cdot w$ (multiply). Perimeter $= 2(l + w)$ (add then double).",
  skills: ["geometry", "area"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "If $x^2 = 49$ and $x > 0$, what is the value of $x$?",
  choices: [
    // distractor: off by one - close to sqrt(49) but wrong
    { id: "A", text: "$6$" },
    { id: "B", text: "$7$" },
    // distractor: applies inverse op - divides by 2 instead of taking square root
    { id: "C", text: "$24.5$" },
    // distractor: wrong base - squares 49 instead of taking root
    { id: "D", text: "$2401$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Solve $x^2 = c$**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $x = \\sqrt{49} = 7$ (positive root since $x > 0$).\n\n**The Full Solution:**\n$x^2 = 49$\n$x = \\pm 7$.\nThe constraint $x > 0$ selects the positive root: $x = 7$.\n\nVerification: $7^2 = 49$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — close to $\\sqrt{49}$ but wrong.\n* Choice C: \"applies the inverse operation\" — divides $49$ by $2$ instead of taking the square root.\n* Choice D: \"wrong base\" — squares $49$ instead of taking its square root.\n\n**Test Day Takeaway:** $\\sqrt{x^2} = |x|$. The constraint ($x > 0$ or $x < 0$) tells you which root to take.",
  skills: ["solving-equations", "radical-expressions"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "What is the mode of the data set $\\{4, 11, 4, 8, 4, 6, 13\\}$?",
  choices: [
    { id: "A", text: "$4$" },
    // distractor: gives the median instead of the mode
    { id: "B", text: "$6$" },
    // distractor: gives the (rounded) mean instead of the mode
    { id: "C", text: "$7$" },
    // distractor: gives the maximum
    { id: "D", text: "$13$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Mode of a Data Set**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Count frequencies: $4$ appears $3$ times, others $1$ time each. Most frequent value is the mode: $4$.\n\n**The Full Solution:**\nMode $=$ value that appears most often.\nFrequencies: $4 \\to 3$, $11 \\to 1$, $8 \\to 1$, $6 \\to 1$, $13 \\to 1$.\nMost frequent: $4$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — gives the median (sorted: $4, 4, 4, 6, 8, 11, 13$, middle $= 6$).\n* Choice C: \"wrong base\" — gives the rounded mean ($\\dfrac{50}{7} \\approx 7.14$).\n* Choice D: \"wrong base\" — gives the maximum value.\n\n**Test Day Takeaway:** Mode $=$ most frequent. Median $=$ middle (when sorted). Mean $=$ sum$/n$. They are different — read the question carefully.",
  skills: ["statistics", "mode"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A data set has a mean of $52$ and a standard deviation of $7$. Which of the following values is more than $2$ standard deviations above the mean?",
  choices: [
    // distractor: uses 1 SD instead of 2 SD
    { id: "A", text: "$59$" },
    // distractor: less than 2 SD
    { id: "B", text: "$65$" },
    // distractor: equals 2 SD exactly (\"more than\" excludes equality)
    { id: "C", text: "$66$" },
    { id: "D", text: "$68$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Inequality Boundary**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Two standard deviations above the mean is $52 + 2(7) = 66$. We need a value strictly greater than $66$, so $68$.\n\n**The Full Solution:**\nThe boundary for $2$ standard deviations above the mean is $\\mu + 2\\sigma = 52 + 14 = 66$. A value \"more than\" $2$ standard deviations above must exceed $66$. Only $68 > 66$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — uses $1$ standard deviation above ($52 + 7 = 59$).\n* Choice B: \"off-by-one\" — $65$ is less than $2$ standard deviations above.\n* Choice C: \"applies the inverse operation\" — $66$ equals $2$ standard deviations above, but \"more than\" excludes equality.\n\n**Test Day Takeaway:** \"More than\" means strictly greater than the boundary — read inequality language carefully.",
  skills: ["statistics"]
},
{
  id: 5,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "In a bag, the ratio of red marbles to blue marbles is $5:3$. If there are $40$ marbles in the bag total and all marbles are either red or blue, how many red marbles are there?",
  correctAnswer: "25",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~10s):** Total parts $= 5 + 3 = 8$. Each part $= 40 \\div 8 = 5$. Red marbles $= 5 \\cdot 5 = 25$.\n\n**The Full Solution:**\nThe ratio $5:3$ means for every $8$ marbles, $5$ are red and $3$ are blue. With $40$ total marbles: $\\dfrac{5}{8} \\cdot 40 = 25$ red marbles.\n\nVerification: $25$ red $+ 15$ blue $= 40$, and $\\dfrac{25}{15} = \\dfrac{5}{3}$ \\checkmark.\n\n**Test Day Takeaway:** Add ratio parts to get the total ratio, then scale to the actual total.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A researcher surveys a random sample of $400$ voters in a city and finds that $62\\%$ support a new policy, with a margin of error of $3$ percentage points at a $95\\%$ confidence level. Which of the following is the best interpretation?",
  choices: [
    // distractor: claims exact population value
    { id: "A", text: "Exactly $62\\%$ of all voters in the city support the policy." },
    // distractor: applies interval to the sample, not the population
    { id: "B", text: "Between $59\\%$ and $65\\%$ of the sample support the policy." },
    { id: "C", text: "It is plausible that between $59\\%$ and $65\\%$ of all voters in the city support the policy." },
    // distractor: misinterprets 95% as a count of respondents
    { id: "D", text: "If the survey were repeated, $95\\%$ of respondents would say they support the policy." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The margin of error creates a confidence interval for the population parameter: $62\\% \\pm 3\\%$ = between $59\\%$ and $65\\%$. This applies to the whole population, not just the sample.\n\n**The Full Solution:**\nA margin of error of $3\\%$ at $95\\%$ confidence means we are $95\\%$ confident that the true population proportion falls between $62\\% - 3\\% = 59\\%$ and $62\\% + 3\\% = 65\\%$. The interval estimates the population value, not the sample value.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — a sample statistic estimates but does not determine the exact population value.\n* Choice B: \"wrong base\" — we already know the sample result; the margin of error applies to the population.\n* Choice D: \"applies the inverse operation\" — the $95\\%$ refers to confidence in the interval, not the percentage of supporters.\n\n**Test Day Takeaway:** Margin of error gives an interval for the population parameter, not the sample statistic.",
  skills: ["margin-of-error", "statistics"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The equation $-2x^2 + bx - 50 = 0$ has no real solutions. What is the greatest integer value of $b$?",
  choices: [
    { id: "A", text: "$19$" },
    // distractor: at b = 20, discriminant = 0 (one solution, not none)
    { id: "B", text: "$20$" },
    // distractor: at b = 21, two real solutions
    { id: "C", text: "$21$" },
    // distractor: a valid lower value but not the greatest
    { id: "D", text: "$14$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** No real solutions when $b^2 - 4ac < 0$. Here $a = -2$, $c = -50$: $b^2 - 4(-2)(-50) < 0$, so $b^2 - 400 < 0$, meaning $|b| < 20$. The greatest integer is $19$.\n\n**The Full Solution:**\nFor $-2x^2 + bx - 50 = 0$, the discriminant is:\n$\\Delta = b^2 - 4(-2)(-50) = b^2 - 400$\nFor no real solutions: $\\Delta < 0$\n$b^2 - 400 < 0$\n$b^2 < 400$\n$|b| < 20$\n$-20 < b < 20$\nThe greatest integer value of $b$ is $19$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"applies the inverse operation\" — at $b = 20$, $\\Delta = 0$, so there is exactly one real solution, not none.\n* Choice C: \"off-by-one\" — at $b = 21$, $\\Delta = 41 > 0$, so there are two real solutions.\n* Choice D: \"stops one step early\" — a valid value but not the greatest.\n\n**Test Day Takeaway:** For \"no real solutions,\" set the discriminant strictly less than zero and find the boundary.",
  skills: ["discriminant", "quadratic-equations"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The expression $\\dfrac{12x^5 y^3}{4x^2 y^7}$ is equivalent to which of the following?",
  choices: [
    // distractor: adds exponents instead of subtracting
    { id: "A", text: "$\\dfrac{3x^7}{y^{10}}$" },
    { id: "B", text: "$\\dfrac{3x^3}{y^4}$" },
    // distractor: flips sign on the y exponent
    { id: "C", text: "$3x^3 y^4$" },
    // distractor: divides exponents instead of subtracting
    { id: "D", text: "$\\dfrac{3x^{\\frac{5}{2}}}{y^{\\frac{7}{3}}}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $\\dfrac{12}{4} = 3$, $x^{5-2} = x^3$, $y^{3-7} = y^{-4} = \\dfrac{1}{y^4}$. Result: $\\dfrac{3x^3}{y^4}$.\n\n**The Full Solution:**\nWhen dividing like bases, subtract exponents: $\\dfrac{12x^5 y^3}{4x^2 y^7} = \\dfrac{12}{4} \\cdot x^{5-2} \\cdot y^{3-7} = 3x^3 y^{-4} = \\dfrac{3x^3}{y^4}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — adds exponents instead of subtracting.\n* Choice C: \"wrong sign\" — flips the sign on the $y$ exponent (uses $7 - 3 = 4$ in the wrong direction).\n* Choice D: \"applies the inverse operation\" — divides exponents instead of subtracting.\n\n**Test Day Takeaway:** When dividing powers with the same base, subtract the exponents. The SAT typically expects positive exponents in the answer.",
  skills: ["exponent-rules"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A savings account earns interest so that the balance is modeled by $B(t) = 2400 \\cdot (1.005)^{12t}$, where $t$ is the number of years. Which of the following is closest to the effective annual interest rate?",
  choices: [
    // distractor: monthly rate 0.5%
    { id: "A", text: "$0.5\\%$" },
    // distractor: 0.5% \times 10 = 5%
    { id: "B", text: "$5\\%$" },
    // distractor: nominal annual rate 0.5% \times 12 = 6%
    { id: "C", text: "$6\\%$" },
    { id: "D", text: "$6.17\\%$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Compound Interest**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The monthly rate is $0.5\\%$. The effective annual multiplier is $(1.005)^{12} \\approx 1.0617$, so the annual rate is about $6.17\\%$.\n\n**The Full Solution:**\nThe model $B(t) = 2400(1.005)^{12t}$ can be rewritten as $B(t) = 2400 \\left((1.005)^{12}\\right)^t$. Computing $(1.005)^{12}$:\n$(1.005)^{12} \\approx 1.06168$\nSo the effective annual growth factor is about $1.0617$, which means an annual rate of approximately $6.17\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the monthly rate, not the annual rate.\n* Choice B: \"wrong base\" — $0.5\\% \\times 10$ is an incorrect scaling.\n* Choice C: \"applies the inverse operation\" — gives the nominal rate $0.5\\% \\times 12 = 6\\%$, not the effective annual rate.\n\n**Test Day Takeaway:** To find the effective annual rate from a monthly compounding model, raise the monthly factor to the 12th power.",
  skills: ["exponential-functions", "function-interpretation"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The following data set shows a class of $10$ students' quiz scores: $5, 6, 6, 7, 7, 7, 8, 8, 9, 10$. If a score of $2$ is added to the data set, which of the following statements is true?",
  choices: [
    // distractor: claims median decreases by 1
    { id: "A", text: "The median decreases by $1$ and the range increases by $3$." },
    // distractor: claims median decreases by 0.5
    { id: "B", text: "The median decreases by $0.5$ and the range increases by $3$." },
    { id: "C", text: "The median stays the same and the range increases by $3$." },
    // distractor: range error
    { id: "D", text: "The median decreases by $0.5$ and the range increases by $5$." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Original: $10$ values, median $= \\dfrac{7+7}{2} = 7$, range $= 10 - 5 = 5$. New: $11$ values $\\{2, 5, 6, 6, 7, 7, 7, 8, 8, 9, 10\\}$, median $=$ 6th value $= 7$, range $= 10 - 2 = 8$. Median unchanged, range increased by $3$.\n\n**The Full Solution:**\nOriginal data (sorted): $5, 6, 6, 7, 7, 7, 8, 8, 9, 10$.\nMedian ($10$ values) $= \\dfrac{7+7}{2} = 7$. Range $= 10 - 5 = 5$.\n\nNew data (sorted): $2, 5, 6, 6, 7, 7, 7, 8, 8, 9, 10$.\nMedian ($11$ values) $=$ 6th value $= 7$. Range $= 10 - 2 = 8$.\n\nMedian change: $7 - 7 = 0$ (unchanged).\nRange change: $8 - 5 = 3$ (increased by $3$).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — assumes the median decreases by $1$.\n* Choice B: \"off-by-one\" — assumes the median always shifts when a value is added.\n* Choice D: \"wrong base\" — the range increases by $3$ ($10-2=8$ vs. $10-5=5$), not by $5$.\n\n**Test Day Takeaway:** Adding a low outlier extends the range but may not change the median if the middle values are unaffected.",
  skills: ["statistics"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Line $p$ passes through the points $(2, 5)$ and $(6, 17)$. Line $q$ is perpendicular to line $p$ and passes through the point $(9, 4)$. What is the $y$-coordinate of the point on line $q$ where $x = 0$?",
  correctAnswer: "7",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~25s):** Slope of $p$: $\\dfrac{17 - 5}{6 - 2} = 3$. Perpendicular slope: $-\\dfrac{1}{3}$. Line $q$: $y - 4 = -\\dfrac{1}{3}(x - 9)$. At $x = 0$: $y = 4 + \\dfrac{9}{3} = 4 + 3 = 7$.\n\n**The Full Solution:**\nThe slope of line $p$ is $m_p = \\dfrac{17 - 5}{6 - 2} = \\dfrac{12}{4} = 3$.\nSince line $q$ is perpendicular to line $p$, its slope is the negative reciprocal: $m_q = -\\dfrac{1}{3}$.\nUsing the point $(9, 4)$: $y - 4 = -\\dfrac{1}{3}(x - 9)$, so $y = 4 - \\dfrac{1}{3}(x - 9)$.\nAt $x = 0$: $y = 4 - \\dfrac{1}{3}(0 - 9) = 4 - \\dfrac{1}{3}(-9) = 4 + 3 = 7$.\n\n**Common Mistakes to Avoid:**\n* Using parallel slope ($m = 3$) instead of perpendicular ($-\\tfrac{1}{3}$).\n* Sign error in $-\\tfrac{1}{3}(0 - 9)$.\n\n**Test Day Takeaway:** Perpendicular lines: flip the slope and change its sign. Then plug in the given point.",
  skills: ["slope", "linear-functions", "coordinate-geometry"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Consider the system of equations:\n\n$5x - 2y = 19$\n$3x + 4y = 27$\n\nWhat is the value of $x - y$?",
  correctAnswer: "2",
  explanation: "**SAT Pattern: Solve for a Combination**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~20s):** Multiply equation 1 by $2$ to match the $y$-coefficient magnitude: $10x - 4y = 38$. Add equation 2: $13x = 65 \\Rightarrow x = 5$. From equation 2: $4y = 27 - 15 = 12 \\Rightarrow y = 3$. So $x - y = 5 - 3 = 2$.\n\n**The Full Solution:**\nMultiply equation 1 by $2$: $10x - 4y = 38$.\nAdd equation 2: $(10x - 4y) + (3x + 4y) = 38 + 27 \\Rightarrow 13x = 65 \\Rightarrow x = 5$.\n\nSubstitute $x = 5$ into equation 2: $3(5) + 4y = 27 \\Rightarrow 4y = 12 \\Rightarrow y = 3$.\n\nVerification: equation 1: $5(5) - 2(3) = 25 - 6 = 19$ \\checkmark; equation 2: $3(5) + 4(3) = 15 + 12 = 27$ \\checkmark.\n\nSo $x - y = 5 - 3 = 2$.\n\n**Common Mistakes to Avoid:**\n* Reporting $x + y = 8$ when the question asks for $x - y$.\n* Solving for $y$ first and making sign errors — solving for $x$ first usually keeps the arithmetic cleaner here.\n\n**Test Day Takeaway:** When the $y$-coefficients have opposite signs, scale one equation so they cancel on addition. Then back-substitute for the second variable.",
  skills: ["systems-of-equations"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In right triangle $XYZ$ shown, the right angle is at $Z$, $\\sin X = \\dfrac{8}{17}$, and $YZ = 16$. What is the perimeter of triangle $XYZ$?",
  diagram: {
    type: "rightTriangle",
    params: {
      labels: ["X", "Z", "Y"],
      sideLabels: ["", "16", ""],
      rightAngleVertex: 1
    }
  },
  choices: [
    // distractor: gives only the two legs (16 + 30 = 46)
    { id: "A", text: "$46$" },
    { id: "B", text: "$80$" },
    // distractor: uses unscaled triple (8 + 15 + 17 = 40)
    { id: "C", text: "$40$" },
    // distractor: uses 16 + 17 + 8 (mixes scaled and unscaled values)
    { id: "D", text: "$41$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $\\sin X = \\dfrac{\\text{opposite}}{\\text{hypotenuse}} = \\dfrac{YZ}{XY} = \\dfrac{8}{17}$. Since $YZ = 16 = 8 \\cdot 2$, the scale factor is $2$. So $XY = 17 \\cdot 2 = 34$ and the other leg $XZ = 15 \\cdot 2 = 30$. Perimeter $= 16 + 30 + 34 = 80$.\n\n**The Full Solution:**\nIn right triangle $XYZ$ with right angle at $Z$:\n$\\sin X = \\dfrac{\\text{side opposite } X}{\\text{hypotenuse}} = \\dfrac{YZ}{XY} = \\dfrac{8}{17}$.\nGiven $YZ = 16$: $\\dfrac{16}{XY} = \\dfrac{8}{17}$, so $XY = 34$.\nUsing the Pythagorean theorem: $XZ = \\sqrt{34^2 - 16^2} = \\sqrt{1156 - 256} = \\sqrt{900} = 30$.\nPerimeter $= 16 + 30 + 34 = 80$.\n\nThis is the $8$-$15$-$17$ triple scaled by $2$: sides $16$-$30$-$34$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives only the two legs $16 + 30 = 46$ (forgets hypotenuse).\n* Choice C: \"wrong base\" — uses the unscaled $8$-$15$-$17$ triple instead of the actual sides.\n* Choice D: \"off-by-one\" — mixes $16$ (scaled) with $17$ and $8$ (unscaled).\n\n**Test Day Takeaway:** Memorize the $8$-$15$-$17$ triple. Always determine the scale factor from one corresponding side before computing the others.",
  skills: ["trigonometry", "triangles"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A biologist models a bacteria population with $P(t) = 800 \\cdot 2^{\\frac{t}{3}}$, where $t$ is measured in hours. By what percent does the population increase every $9$ hours?",
  choices: [
    // distractor: 100% (one doubling, ignores 9h)
    { id: "A", text: "$100\\%$" },
    // distractor: 200% (treats multiplier 2^3 = 8 as 200%)
    { id: "B", text: "$200\\%$" },
    { id: "C", text: "$700\\%$" },
    // distractor: 800% (treats 2^3 = 8 as 800%, off-by-one)
    { id: "D", text: "$800\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** When $t$ increases by $9$, the exponent increases by $3$, so the population is multiplied by $2^3 = 8$. Going from $P$ to $8P$ is a $700\\%$ increase.\n\n**The Full Solution:**\nCompare $P(t+9)$ to $P(t)$:\n$\\dfrac{P(t+9)}{P(t)} = \\dfrac{800 \\cdot 2^{\\frac{t+9}{3}}}{800 \\cdot 2^{\\frac{t}{3}}} = 2^{\\frac{9}{3}} = 2^3 = 8$.\nThe population is multiplied by $8$ every $9$ hours.\nA factor of $8$ is a $(8 - 1) \\cdot 100\\% = 700\\%$ increase.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — uses one doubling (every $3$ hours) instead of three.\n* Choice B: \"applies the inverse operation\" — treats $2^3 = 8$ multiplier as a $200\\%$ increase.\n* Choice D: \"off-by-one\" — uses $8 \\cdot 100\\% = 800\\%$ instead of $(8-1) \\cdot 100\\% = 700\\%$.\n\n**Test Day Takeaway:** A growth factor of $k$ means a $(k-1) \\cdot 100\\%$ increase, not $k \\cdot 100\\%$.",
  skills: ["exponential-functions", "percents"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A printing shop produces three sizes of poster: large, medium, and small. During one shift, the number of large posters produced is $4$ times the number $n$ of medium posters, and the number of small posters is $35$ more than the number of medium posters. The shop produces a total of $617$ posters that shift. How many medium posters does the shop produce that shift?",
  choices: [
    // distractor: divides total by 6 ignoring the +35 offset
    { id: "A", text: "$103$" },
    { id: "B", text: "$97$" },
    // distractor: applies inverse — uses (617 - 35)/4 = 145.5
    { id: "C", text: "$146$" },
    // distractor: stops one step early — divides 617/4 ignoring the offset and 6n
    { id: "D", text: "$154$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Total $= 4n + n + (n + 35) = 6n + 35 = 617$. So $6n = 582$ and $n = 97$.\n\n**The Full Solution:**\nLet $n$ be the number of medium posters.\nNumber of large posters: $4n$.\nNumber of small posters: $n + 35$.\n\nTotal: $4n + n + (n + 35) = 6n + 35 = 617$.\n$6n = 582 \\Rightarrow n = 97$.\n\nVerification: $4(97) + 97 + (97 + 35) = 388 + 97 + 132 = 617$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — divides $617$ by $6$ ignoring the offset.\n* Choice C: \"applies the inverse operation\" — uses $\\frac{617 - 35}{4} = 145.5 \\approx 146$ instead of dividing by $6$.\n* Choice D: \"stops one step early\" — divides $\\frac{617}{4}$ ignoring both the offset and the additional medium and small counts.\n\n**Test Day Takeaway:** When three quantities share a common variable, write each in terms of that variable, then sum and equate to the total. Always include any offsets like \"$35$ more than\".",
  skills: ["word-problems", "ratios"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A survey of $200$ students asked about their preferred study method. Of the $120$ students who preferred group study, $78$ were upperclassmen. Of the $80$ students who preferred solo study, $32$ were upperclassmen. What fraction of upperclassmen preferred solo study?",
  choices: [
    // distractor: divides by all solo-study students (80)
    { id: "A", text: "$\\dfrac{32}{80}$" },
    { id: "B", text: "$\\dfrac{32}{110}$" },
    // distractor: divides by all students (200)
    { id: "C", text: "$\\dfrac{32}{200}$" },
    // distractor: gives the fraction of upperclassmen who preferred GROUP study
    { id: "D", text: "$\\dfrac{78}{110}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Total upperclassmen $= 78 + 32 = 110$. Of these, $32$ preferred solo study: $\\dfrac{32}{110}$.\n\n**The Full Solution:**\nThe question asks for the fraction of upperclassmen (not all students) who preferred solo study. First find the total number of upperclassmen: $78 + 32 = 110$. The fraction who preferred solo study is $\\dfrac{32}{110}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — divides by all solo-study students ($80$), not all upperclassmen.\n* Choice C: \"wrong base\" — divides by all students ($200$).\n* Choice D: \"applies the inverse operation\" — gives the fraction of upperclassmen who preferred group study.\n\n**Test Day Takeaway:** In conditional probability, the denominator is the total of the given condition (here, \"of upperclassmen\").",
  skills: ["two-way-tables", "probability"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Two similar triangles have a ratio of corresponding sides of $3:5$. If the area of the smaller triangle is $27$ square centimeters, what is the area of the larger triangle, in square centimeters?",
  choices: [
    // distractor: uses the linear ratio (27 \times 5/3 = 45)
    { id: "A", text: "$45$" },
    { id: "B", text: "$75$" },
    // distractor: 27 \times 5 = 135 (skips the squaring)
    { id: "C", text: "$135$" },
    // distractor: squares the entire ratio incorrectly
    { id: "D", text: "$225$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Similar Figures — Area Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Area ratio $=$ (side ratio)$^2 = \\left(\\dfrac{5}{3}\\right)^2 = \\dfrac{25}{9}$. Larger area $= 27 \\cdot \\dfrac{25}{9} = 75$.\n\n**The Full Solution:**\nFor similar figures, if the ratio of corresponding sides is $k$, the ratio of areas is $k^2$. The side ratio (larger to smaller) is $\\dfrac{5}{3}$, so the area ratio is $\\left(\\dfrac{5}{3}\\right)^2 = \\dfrac{25}{9}$.\nArea of larger triangle $= 27 \\cdot \\dfrac{25}{9} = 3 \\cdot 25 = 75$ square centimeters.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses the linear ratio ($27 \\cdot \\dfrac{5}{3} = 45$) instead of squaring it.\n* Choice C: \"wrong base\" — uses $27 \\cdot 5 = 135$ without the proper squaring.\n* Choice D: \"off-by-one\" — squares the entire ratio incorrectly.\n\n**Test Day Takeaway:** Side ratio $k$ gives area ratio $k^2$ and volume ratio $k^3$.",
  skills: ["similar-triangles", "area"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The graph of $x^2 + 3x + y^2 + y = \\dfrac{45}{2}$ in the $xy$-plane is a circle. What is the length of the circle's radius?",
  choices: [
    { id: "A", text: "$5$" },
    // distractor: takes constant 45/2 directly without completing the square
    { id: "B", text: "$\\sqrt{\\dfrac{45}{2}}$" },
    // distractor: gives r^2 = 25 instead of r = 5
    { id: "C", text: "$25$" },
    // distractor: subtracts the half-coefficient-squared instead of adding
    { id: "D", text: "$\\sqrt{\\dfrac{45}{2} - \\dfrac{5}{2}}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Complete the Square — Non-Square Radius**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Half of $3$ is $\\dfrac{3}{2}$; squared, $\\dfrac{9}{4}$. Half of $1$ is $\\dfrac{1}{2}$; squared, $\\dfrac{1}{4}$. Add both to RHS: $\\left(x + \\dfrac{3}{2}\\right)^2 + \\left(y + \\dfrac{1}{2}\\right)^2 = \\dfrac{45}{2} + \\dfrac{9}{4} + \\dfrac{1}{4} = \\dfrac{90 + 10}{4} = 25$. Radius $= \\sqrt{25} = 5$.\n\n**The Full Solution:**\nGroup terms and complete the square for each variable:\n$x^2 + 3x + y^2 + y = \\dfrac{45}{2}$\n$\\left(x^2 + 3x + \\dfrac{9}{4}\\right) + \\left(y^2 + y + \\dfrac{1}{4}\\right) = \\dfrac{45}{2} + \\dfrac{9}{4} + \\dfrac{1}{4}$\n$\\left(x + \\dfrac{3}{2}\\right)^2 + \\left(y + \\dfrac{1}{2}\\right)^2 = \\dfrac{90}{4} + \\dfrac{10}{4} = \\dfrac{100}{4} = 25$\n\nSo $r^2 = 25$ and $r = 5$.\n\nVerification: the circle has center $\\left(-\\dfrac{3}{2}, -\\dfrac{1}{2}\\right)$ and radius $5$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — uses $\\dfrac{45}{2}$ directly without completing the square.\n* Choice C: \"stops one step early\" — gives $r^2 = 25$ instead of $r = 5$.\n* Choice D: \"applies the inverse operation\" — subtracts the half-coefficient-squared instead of adding.\n\n**Test Day Takeaway:** Complete the square SYMMETRICALLY for both variables. \"Half the coefficient, squared\" gets added to BOTH sides — once for $x$, once for $y$.",
  skills: ["circle-equations", "coordinate-geometry"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The positive number $a$ is $180\\%$ of the sum of the positive numbers $b$ and $c$, and $b$ is $30\\%$ of $c$. What percent of $b$ is $a$?",
  choices: [
    // distractor: adds the percents: 180 + 30 = 210
    { id: "A", text: "$210\\%$" },
    // distractor: uses (1 + 0.30) * 180 = 234%
    { id: "B", text: "$234\\%$" },
    { id: "C", text: "$780\\%$" },
    // distractor: divides 180 by 0.30 = 600%
    { id: "D", text: "$600\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Set $c = 100$. Then $b = 30\\% \\cdot 100 = 30$. Sum $b + c = 130$. So $a = 1.8 \\cdot 130 = 234$. Percent of $b$ that $a$ is: $\\dfrac{234}{30} \\cdot 100 = 780\\%$.\n\n**The Full Solution:**\nLet $c = 100$ (any positive choice works since percents are scale-invariant).\nThen $b = 0.30 \\cdot 100 = 30$.\nSum: $b + c = 30 + 100 = 130$.\n$a = 1.80 \\cdot 130 = 234$.\nPercent of $b$ that $a$ is: $\\dfrac{a}{b} \\cdot 100\\% = \\dfrac{234}{30} \\cdot 100\\% = 780\\%$.\n\nVerification (algebraic): $a = 1.8(b + c)$ and $b = 0.3c$, so $c = \\tfrac{10}{3}b$. Then $a = 1.8(b + \\tfrac{10}{3}b) = 1.8 \\cdot \\tfrac{13}{3}b = 7.8b$, giving $\\dfrac{a}{b} = 7.8 = 780\\%$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — adds the two percents ($180 + 30 = 210$).\n* Choice B: \"stops one step early\" — computes $a$ but reports it as a raw percent of $c$ instead of $b$.\n* Choice D: \"wrong base\" — divides $180$ by $0.3$ ignoring the sum structure.\n\n**Test Day Takeaway:** When two percents stack, pick a clean numerical value (e.g., $c = 100$) and compute through. \"Percent of $b$\" means divide by $b$, not by $c$.",
  skills: ["percents"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The equation $5(2x - 6) + 18 = 10x + k$ has infinitely many solutions. What is the value of $k$?",
  correctAnswer: "-12",
  explanation: "**SAT Pattern: System Equivalence Check**\n\n**The correct answer is $-12$.**\n\n**The Fast Way (~20s):** Expand: $10x - 30 + 18 = 10x - 12$. For infinitely many solutions, $10x - 12 = 10x + k$ must hold for ALL $x$, so $k = -12$.\n\n**The Full Solution:**\nLeft side: $5(2x - 6) + 18 = 10x - 30 + 18 = 10x - 12$.\nFor the equation $10x - 12 = 10x + k$ to hold for ALL $x$, the constants must match: $k = -12$.\n\nVerification: with $k = -12$, both sides become $10x - 12$, true for any $x$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Writing $k = 12$ (sign error).\n* Computing $-30 + 18 = -48$ instead of $-12$.\n\n**Test Day Takeaway:** Infinitely many solutions $\\iff$ both sides identical after simplification. Match constant terms AND coefficients on each variable.",
  skills: ["solving-equations", "linear-functions"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = (x - 5)^2 - 9$. If the function $g$ is defined by $g(x) = f(x + 7)$, what is the minimum value of $g$?",
  choices: [
    // distractor: gives x at minimum (x = -2)
    { id: "A", text: "$-2$" },
    { id: "B", text: "$-9$" },
    // distractor: forgets the -9 vertical shift
    { id: "C", text: "$0$" },
    // distractor: applies +7 shift in wrong direction
    { id: "D", text: "$-16$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $f$ has minimum value $-9$ (at $x = 5$). $g(x) = f(x + 7)$ shifts $f$ horizontally; horizontal shifts do NOT change the minimum value. So $g$ has minimum value $-9$.\n\n**The Full Solution:**\n$g(x) = f(x + 7) = ((x + 7) - 5)^2 - 9 = (x + 2)^2 - 9$\n\nThis is vertex form with vertex $(-2, -9)$. The minimum value is $-9$, attained at $x = -2$.\n\nVerification: $(x + 2)^2 \\geq 0$ for all real $x$, so $g(x) \\geq -9$ with equality at $x = -2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the $x$-coordinate of the minimum ($-2$) instead of $g(x) = -9$.\n* Choice C: \"off-by-one\" — forgets the constant $-9$ in the original function.\n* Choice D: \"applies the inverse operation\" — combines $-9$ and $-7$ into $-16$ via incorrect shift direction.\n\n**Test Day Takeaway:** Horizontal shifts (replacing $x$ with $x \\pm h$) do NOT change the minimum/maximum value of a function. Only vertical shifts ($+k$ outside) do.",
  skills: ["function-interpretation", "vertex-form", "quadratic-equations"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "If $\\dfrac{x}{6} = \\dfrac{5}{12}$, what is the value of $4x - 1$?",
  choices: [
    // distractor: stops at x = 5/2 (forgets the 4x and -1)
    { id: "A", text: "$\\dfrac{5}{2}$" },
    { id: "B", text: "$9$" },
    // distractor: forgets the -1
    { id: "C", text: "$10$" },
    // distractor: adds 1 instead of subtracting
    { id: "D", text: "$11$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Cross-multiply: $12x = 30$, so $x = \\dfrac{5}{2}$. Then $4x - 1 = 10 - 1 = 9$.\n\n**The Full Solution:**\nFrom $\\dfrac{x}{6} = \\dfrac{5}{12}$, multiply both sides by $6$: $x = \\dfrac{30}{12} = \\dfrac{5}{2}$. Therefore $4x - 1 = 4 \\cdot \\dfrac{5}{2} - 1 = 10 - 1 = 9$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives $x$ instead of $4x - 1$.\n* Choice C: \"off-by-one\" — forgets the $-1$ and reports $4x = 10$.\n* Choice D: \"applies the inverse operation\" — adds $1$ instead of subtracting.\n\n**Test Day Takeaway:** Always check what the question asks for — here it is $4x - 1$, not $x$ alone.",
  skills: ["solving-equations", "ratios"]
}
      ]
    }
  ]
};
