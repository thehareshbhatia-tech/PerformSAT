// Practice Test 5 - SAT Math
// v2 freshness rebuild (2026-09-07): every slot re-patterned and re-authored against the seen-corpus gate — docs/TEST_RECREATION_V2_SPEC.md
// 2 Modules, 22 questions each (44 total)
// Official-calibration recreation (2026-09-01): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md).
// Slot metadata (id/type/difficulty/band/skills/pattern) frozen from the
// 2026-06 blueprint: M1 5E/9M/8H; M2 keeps its wavy flow
// E M M E M H H M H H M H E H H M H H H M H H (3E/7M/12H, band-7 ceiling).
// Figure density lifted toward the official ~20%: M1 carries 4 diagram items
// (Q4 triangle, Q10 scatterplot, Q15 two-way table, Q21 right triangle),
// M2 carries 4 (Q1 right triangle, Q12 two-way table, Q13 data table,
// Q17 scatterplot). Numeric MC choices sorted ascending (official convention).
// Scenario palette (fresh; disjoint from recreated tests 1-3 and from this
// test's previous edition): creamery, mountain weather stations, harbor
// ferry, soil-sampling lab, community theater / box office, streetlight
// maintenance, aquatic-center pools, plant nursery.

export const practiceTest5 = {
  id: "practice-test-5",
  title: "Practice Test 5",
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
  question: "The table shows the sale prices of four items at a store. The sale price of the lamp is $60\\%$ of its original price. What was the original price, in dollars, of the lamp?",
  diagram: { type: "dataTable", params: { headers: ["Item", "Sale price (dollars)"], rows: [["Lamp", "27.00"], ["Rug", "18.00"], ["Chair", "32.50"], ["Mug", "4.75"]] } },
  choices: [
    // distractor: takes 60% of the sale price (0.60 x 27 = 16.20) instead of treating 27 as 60% of the original price
    { id: "A", text: "$16.20$" },
    // distractor: adds 60% of the sale price to the sale price (27 + 16.20 = 43.20)
    { id: "B", text: "$43.20$" },
    { id: "C", text: "$45.00$" },
    // distractor: divides by the complement 0.40 instead of 0.60 (27 / 0.40 = 67.50)
    { id: "D", text: "$67.50$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The table shows that the lamp's sale price is $27$ dollars, which is $60\\%$ of the original price, so the original price is $27 \\div 0.60 = 45$ dollars.\n\n**The Full Solution:**\nStep 1: Let $p$ be the original price, in dollars, of the lamp. The table shows that the sale price of the lamp is $27.00$ dollars.\nStep 2: The sale price is $60\\%$ of the original price, so $0.60p = 27$.\nStep 3: Divide both sides by $0.60$: $p = \\frac{27}{0.60} = 45$. Check: $0.60(45) = 27$, the lamp's sale price in the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($16.20$): takes $60\\%$ of the sale price, $0.60(27) = 16.20$. The $27$ dollars is already the $60\\%$; the original price is the whole.\n* Choice B ($43.20$): adds $60\\%$ of the sale price back onto the sale price, $27 + 0.60(27) = 43.20$. That increases $27$ by $60\\%$, which is not the same as undoing \"is $60\\%$ of.\"\n* Choice D ($67.50$): divides by $0.40$ instead of $0.60$, $\\frac{27}{0.40} = 67.50$, treating $60\\%$ as the discount rather than the part of the price that remains.\n\n**Test Day Takeaway:** When a known amount is a given percent of an unknown original, write $(\\text{percent})(\\text{original}) = \\text{known}$ and divide; never multiply the known amount by the percent.",
  skills: ["percent-word-problems", "percent-of-value"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$4x + 9y = 140$\n$9x + 4y = 120$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x + y$?",
  choices: [
    // distractor: adds the coefficients 13 + 13 = 26 and divides 260 by 26, treating 13x + 13y as 26(x + y)
    { id: "A", text: "$10$" },
    { id: "B", text: "$20$" },
    // distractor: divides the summed right side by 2, the number of equations (260 / 2 = 130)
    { id: "C", text: "$130$" },
    // distractor: adds the two equations but never divides by 13, reporting the right side of 13x + 13y = 260
    { id: "D", text: "$260$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Adding the two equations gives $13x + 13y = 260$, and dividing both sides by $13$ gives $x + y = 20$.\n\n**The Full Solution:**\nStep 1: Add the left sides and the right sides of the two equations: $(4x + 9y) + (9x + 4y) = 140 + 120$, so $13x + 13y = 260$.\nStep 2: Every term on the left side has a factor of $13$, so divide both sides by $13$: $x + y = 20$.\nStep 3: Check by solving the system. Subtracting the first equation from the second gives $5x - 5y = -20$, so $x - y = -4$. With $x + y = 20$, this gives $x = 8$ and $y = 12$, and $4(8) + 9(12) = 140$ and $9(8) + 4(12) = 120$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): treats $13x + 13y$ as $26(x + y)$ by adding the two coefficients, then divides $260$ by $26$.\n* Choice C ($130$): divides $260$ by $2$, the number of equations, instead of by the common coefficient $13$.\n* Choice D ($260$): adds the equations correctly but stops at $13x + 13y = 260$, reporting the right side without dividing by $13$.\n\n**Test Day Takeaway:** When a question asks for a combination such as $x + y$, look for a way to add or subtract the equations so the coefficients match; you may never need $x$ and $y$ separately.",
  skills: ["elimination-method"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$4(3x + 7) = 12x + c$\nIn the given equation, $c$ is a constant. If the equation has infinitely many solutions, what is the value of $c$?",
  choices: [
    // distractor: uses the constant 7 inside the parentheses without multiplying it by 4
    { id: "A", text: "$7$" },
    // distractor: adds 4 and 7 instead of multiplying them when distributing
    { id: "B", text: "$11$" },
    { id: "C", text: "$28$" },
    // distractor: multiplies 7 by 12, the coefficient of x on the right side, instead of by 4
    { id: "D", text: "$84$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Distributing gives $12x + 28 = 12x + c$, and the two sides are identical only when $c = 28$.\n\n**The Full Solution:**\nStep 1: Distribute the $4$ on the left side: $4(3x + 7) = 12x + 28$, so the equation is $12x + 28 = 12x + c$.\nStep 2: Subtract $12x$ from both sides: $28 = c$. For any other value of $c$, this statement is false and the equation has no solution.\nStep 3: So $c = 28$. Check: the equation becomes $12x + 28 = 12x + 28$, which is true for every $x$; at $x = 1$, $4(10) = 40$ and $12 + 28 = 40$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): copies the constant inside the parentheses without multiplying it by $4$. With $c = 7$, the equation becomes $12x + 28 = 12x + 7$, which has no solution.\n* Choice B ($11$): adds $4$ and $7$ instead of multiplying them when distributing.\n* Choice D ($84$): multiplies $7$ by $12$, the coefficient of $x$ on the right side, instead of by the $4$ outside the parentheses.\n\n**Test Day Takeaway:** A linear equation has infinitely many solutions when both sides simplify to the same expression; match the $x$-coefficients and the constants.",
  skills: ["distributive-property"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A right triangle has legs with lengths $a\\sqrt{3}$ and $10\\sqrt{3}$, where $a$ is a positive constant. Which expression represents the area of the triangle?",
  choices: [
    // distractor: multiplies only the coefficients and drops both radical factors: (1/2)(a)(10) = 5a
    { id: "A", text: "$5a$" },
    { id: "B", text: "$15a$" },
    // distractor: computes the product of the legs, 30a, and omits the factor 1/2
    { id: "C", text: "$30a$" },
    // distractor: replaces each sqrt(3) with 3, giving (1/2)(3a)(30) = 45a
    { id: "D", text: "$45a$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle Area with Surds**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The legs are the base and height, so the area is $\\frac{1}{2}(a\\sqrt{3})(10\\sqrt{3}) = \\frac{1}{2}(30a) = 15a$.\n\n**The Full Solution:**\nStep 1: In a right triangle, the two legs are perpendicular, so they serve as the base and the height: $A = \\frac{1}{2}(a\\sqrt{3})(10\\sqrt{3})$.\nStep 2: Multiply the radicals: $\\sqrt{3} \\cdot \\sqrt{3} = 3$, so $(a\\sqrt{3})(10\\sqrt{3}) = 10a \\cdot 3 = 30a$.\nStep 3: Take half: $A = \\frac{1}{2}(30a) = 15a$. Check with $a = 2$: the legs are $2\\sqrt{3} \\approx 3.464$ and $10\\sqrt{3} \\approx 17.321$, and $\\frac{1}{2}(3.464)(17.321) \\approx 30 = 15(2)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5a$): drops both radicals and computes $\\frac{1}{2}(a)(10) = 5a$, losing the factor $\\sqrt{3} \\cdot \\sqrt{3} = 3$.\n* Choice C ($30a$): finds the product of the legs, $30a$, but forgets the $\\frac{1}{2}$ in the area formula.\n* Choice D ($45a$): replaces each $\\sqrt{3}$ with $3$, computing $\\frac{1}{2}(3a)(30) = 45a$; the product of the two radicals is $3$, not $9$.\n\n**Test Day Takeaway:** For a right triangle, use the legs as base and height, and simplify $\\sqrt{n} \\cdot \\sqrt{n} = n$ before taking half.",
  skills: ["triangle-area"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Line $k$ is defined by $y = \\frac{3}{4}x - 2$. Line $j$ is perpendicular to line $k$ in the $xy$-plane and passes through the point $(6, -1)$. Which equation defines line $j$?",
  choices: [
    { id: "A", text: "$y = -\\frac{4}{3}x + 7$" },
    // distractor: negates the slope but does not take the reciprocal, using -3/4 through (6, -1)
    { id: "B", text: "$y = -\\frac{3}{4}x + \\frac{7}{2}$" },
    // distractor: reuses line k's slope 3/4, which gives a line parallel to k, not perpendicular
    { id: "C", text: "$y = \\frac{3}{4}x - \\frac{11}{2}$" },
    // distractor: takes the reciprocal but does not negate, using 4/3 through (6, -1)
    { id: "D", text: "$y = \\frac{4}{3}x - 9$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Line $k$ has slope $\\frac{3}{4}$, so line $j$ has slope $-\\frac{4}{3}$. Substituting $(6, -1)$ into $y = -\\frac{4}{3}x + b$ gives $-1 = -8 + b$, so $b = 7$.\n\n**The Full Solution:**\nStep 1: Line $k$ is in slope-intercept form, so its slope is $\\frac{3}{4}$. The slope of a perpendicular line is the negative reciprocal, $-\\frac{4}{3}$.\nStep 2: Write line $j$ as $y = -\\frac{4}{3}x + b$ and substitute the point $(6, -1)$: $-1 = -\\frac{4}{3}(6) + b = -8 + b$, so $b = 7$.\nStep 3: Line $j$ is $y = -\\frac{4}{3}x + 7$. Check: $-\\frac{4}{3}(6) + 7 = -1$, and $\\frac{3}{4} \\cdot \\left(-\\frac{4}{3}\\right) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: changes the sign of the slope but keeps $\\frac{3}{4}$ instead of flipping it. The line passes through $(6, -1)$, but $\\frac{3}{4} \\cdot \\left(-\\frac{3}{4}\\right) \\neq -1$.\n* Choice C: keeps the slope $\\frac{3}{4}$, which makes line $j$ parallel to line $k$.\n* Choice D: flips the slope to $\\frac{4}{3}$ but forgets to change its sign.\n\n**Test Day Takeaway:** Perpendicular slopes multiply to $-1$: flip the fraction and change the sign, then use the given point to find the $y$-intercept.",
  skills: ["perpendicular-negative-reciprocal"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table shows values of the functions $f$ and $g$ for selected values of $x$. What is the value of $f(g(2))$?",
  questionTable: { headers: ["$x$", "$f(x)$", "$g(x)$"], rows: [["1", "8", "2"], ["2", "5", "4"], ["3", "9", "5"], ["4", "3", "1"], ["5", "6", "6"]] },
  choices: [
    { id: "A", text: "$3$" },
    // distractor: stops after evaluating the inner function, reporting g(2) = 4
    { id: "B", text: "$4$" },
    // distractor: evaluates the outer function at 2 instead of at g(2), reporting f(2) = 5
    { id: "C", text: "$5$" },
    // distractor: applies the functions in the reverse order, computing g(f(2)) = g(5) = 6
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** From the table, $g(2) = 4$, and then $f(4) = 3$, so $f(g(2)) = 3$.\n\n**The Full Solution:**\nStep 1: Work from the inside out. In the row where $x = 2$, the table shows $g(2) = 4$.\nStep 2: Use that output as the new input for $f$. In the row where $x = 4$, the table shows $f(4) = 3$.\nStep 3: So $f(g(2)) = f(4) = 3$. Check: the inner value $4$ appears in the $x$ column, and its $f(x)$ entry is $3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): stops after the inner step and reports $g(2) = 4$ without applying $f$.\n* Choice C ($5$): reads $f(2) = 5$, evaluating $f$ at $2$ instead of at $g(2)$.\n* Choice D ($6$): applies the functions in the wrong order, finding $f(2) = 5$ and then $g(5) = 6$, which is $g(f(2))$.\n\n**Test Day Takeaway:** For $f(g(a))$, find $g(a)$ first, then look up $f$ of that output; the function written on the outside is applied last.",
  skills: ["function-composition"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A bakery sold $5{,}500$ loaves of bread in 2025, which was $25\\%$ more than the number of loaves it sold in 2024. How many loaves of bread did the bakery sell in 2024?",
  choices: [
    // distractor: computes 25% of 5,500 (0.25 x 5,500 = 1,375) instead of reversing the increase
    { id: "A", text: "$1{,}375$" },
    // distractor: subtracts 25% of the 2025 number: 5,500 - 1,375 = 4,125
    { id: "B", text: "$4{,}125$" },
    { id: "C", text: "$4{,}400$" },
    // distractor: increases 5,500 by 25% instead of undoing the increase: 1.25 x 5,500 = 6,875
    { id: "D", text: "$6{,}875$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent Increase**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The 2025 number is $125\\%$ of the 2024 number, so the 2024 number is $5{,}500 \\div 1.25 = 4{,}400$.\n\n**The Full Solution:**\nStep 1: Let $n$ be the number of loaves sold in 2024. \"$25\\%$ more than $n$\" means $n + 0.25n = 1.25n$.\nStep 2: Set this equal to the 2025 number: $1.25n = 5{,}500$.\nStep 3: Divide both sides by $1.25$: $n = \\frac{5{,}500}{1.25} = 4{,}400$. Check: $25\\%$ of $4{,}400$ is $1{,}100$, and $4{,}400 + 1{,}100 = 5{,}500$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1{,}375$): finds $25\\%$ of $5{,}500$, which is neither year's number.\n* Choice B ($4{,}125$): subtracts $25\\%$ of $5{,}500$. The $25\\%$ was taken of the 2024 number, not the 2025 number, so subtracting it from $5{,}500$ removes too much: $4{,}125 \\times 1.25 \\approx 5{,}156$, not $5{,}500$.\n* Choice D ($6{,}875$): increases $5{,}500$ by another $25\\%$ instead of working backward to 2024.\n\n**Test Day Takeaway:** When a number is a given percent more than an unknown earlier value, divide by $1 + \\text{rate}$; subtracting the percent of the later number undoes the wrong amount.",
  skills: ["percent-of-value", "percent-change"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The function $f$ is defined by $f(x) = 540 - 24x$. What is the value of $x$ for which $f(x) = 156$?",
  correctAnswer: "16",
  explanation: "**SAT Pattern: Solve $f(a) = c$**\n\n**The correct answer is $16$.**\n\n**The Fast Way (~15s):** Set $540 - 24x = 156$; then $24x = 384$, so $x = 16$.\n\n**The Full Solution:**\nStep 1: The question gives an output of $f$, not an input, so set the expression for $f(x)$ equal to $156$: $540 - 24x = 156$.\nStep 2: Subtract $540$ from both sides: $-24x = -384$.\nStep 3: Divide both sides by $-24$: $x = 16$. Check: $f(16) = 540 - 24(16) = 540 - 384 = 156$ ✓\n\n**Common Mistakes:**\n* $29$: adds $156$ to $540$ instead of subtracting, solving $24x = 696$.\n* $6.5$: divides $156$ by $24$, ignoring the constant term $540$.\n* $22.5$: divides $540$ by $24$, which is the value of $x$ for which $f(x) = 0$, not $f(x) = 156$.\n\n**Test Day Takeaway:** \"For which $f(x) = c$\" means the output is known: set the rule equal to $c$ and solve for $x$; do not substitute $c$ in for $x$.",
  skills: ["function-notation"]
},
{
  id: 9,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "At a store, $4$ small pots and $3$ large pots cost $\\$73$, and $2$ small pots and $5$ large pots cost $\\$89$. What is the price, in dollars, of one large pot?",
  correctAnswer: "15",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~30s):** Doubling the second purchase gives $4s + 10\\ell = 178$; subtracting $4s + 3\\ell = 73$ leaves $7\\ell = 105$, so $\\ell = 15$.\n\n**The Full Solution:**\nStep 1: Let $s$ be the price, in dollars, of one small pot and $\\ell$ the price of one large pot. Then $4s + 3\\ell = 73$ and $2s + 5\\ell = 89$.\nStep 2: Multiply the second equation by $2$ to match the $s$-coefficients: $4s + 10\\ell = 178$. Subtract the first equation: $7\\ell = 105$.\nStep 3: Divide by $7$: $\\ell = 15$. Then $4s + 45 = 73$, so $s = 7$. Check: $2(7) + 5(15) = 14 + 75 = 89$ ✓\n\n**Common Mistakes:**\n* $7$: reports the price of one small pot instead of one large pot.\n* $22$: reports the combined price of one small pot and one large pot, $7 + 15$.\n* $105$: stops at $7\\ell = 105$ without dividing by $7$.\n\n**Test Day Takeaway:** Scale one equation so a variable has the same coefficient in both, subtract, and then make sure you report the variable the question asks for.",
  skills: ["elimination-method", "setting-up-systems"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Of the $n$ students at a college, $18\\%$ take an evening class, and $40\\%$ of those students also take a lab course. Which expression represents the number of students who take both an evening class and a lab course?",
  choices: [
    { id: "A", text: "$0.072n$" },
    // distractor: subtracts the percents (0.40 - 0.18 = 0.22) instead of multiplying them
    { id: "B", text: "$0.22n$" },
    // distractor: applies the 40% to all n students rather than to the 18% who take an evening class
    { id: "C", text: "$0.40n$" },
    // distractor: adds the percents (0.18 + 0.40 = 0.58) instead of multiplying them
    { id: "D", text: "$0.58n$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The students who take both are $40\\%$ of $18\\%$ of $n$: $(0.40)(0.18)n = 0.072n$.\n\n**The Full Solution:**\nStep 1: The number of students who take an evening class is $18\\%$ of $n$, or $0.18n$.\nStep 2: The $40\\%$ applies to those evening students, not to all $n$ students, so the number who also take a lab course is $0.40(0.18n)$.\nStep 3: Multiply: $(0.40)(0.18) = 0.072$, so the expression is $0.072n$. Check with $n = 1{,}000$: $180$ students take an evening class, and $40\\%$ of $180$ is $72 = 0.072(1{,}000)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($0.22n$): subtracts the percents, $40\\% - 18\\% = 22\\%$, but a percent of a percent is found by multiplying.\n* Choice C ($0.40n$): takes $40\\%$ of all $n$ students instead of $40\\%$ of the evening students.\n* Choice D ($0.58n$): adds the percents, $18\\% + 40\\% = 58\\%$, which would count students in either group rather than students in both.\n\n**Test Day Takeaway:** \"$p\\%$ of those\" means the second percent acts on the group the first percent created; multiply the decimals.",
  skills: ["percent-of-value"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "In the right triangle shown, $AC = 58$ and $\\tan A = \\frac{20}{21}$. What is the length of $\\overline{BC}$?",
  diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [42, 0], [42, 40]], labels: ["A", "B", "C"], sideLabels: ["", "", "58"], rightAngleVertex: 1 } },
  correctAnswer: "40",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**The correct answer is $40$.**\n\n**The Fast Way (~30s):** $\\tan A = \\frac{20}{21}$ makes the sides a multiple of the $20$-$21$-$29$ triangle, and $58 = 2(29)$, so $BC = 2(20) = 40$.\n\n**The Full Solution:**\nStep 1: The right angle is at $B$, so the hypotenuse is $\\overline{AC}$. For angle $A$, the opposite side is $\\overline{BC}$ and the adjacent side is $\\overline{AB}$, so $\\frac{BC}{AB} = \\frac{20}{21}$. Let $BC = 20k$ and $AB = 21k$.\nStep 2: By the Pythagorean theorem, $AC = \\sqrt{(20k)^{2} + (21k)^{2}} = \\sqrt{841k^{2}} = 29k$. Since $AC = 58$, $k = 2$.\nStep 3: So $BC = 20(2) = 40$. Check: $AB = 42$, $\\frac{40}{42} = \\frac{20}{21}$, and $40^{2} + 42^{2} = 1{,}600 + 1{,}764 = 3{,}364 = 58^{2}$ ✓\n\n**Common Mistakes:**\n* $42$: finds $AB$, the side adjacent to angle $A$, instead of the side opposite it.\n* $20$: uses the numerator of $\\tan A$ as the length without scaling by $k = 2$.\n* $29$: reports the hypotenuse of the basic $20$-$21$-$29$ triangle instead of using it to find the scale factor.\n\n**Test Day Takeaway:** A trig ratio gives the shape of a right triangle, not its size; find the third side of the ratio triangle, then scale to match the given length.",
  skills: ["soh-cah-toa", "pythagorean-theorem"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, line $p$ passes through the points $(-4, 1)$ and $(4, 13)$. Line $q$ is parallel to line $p$ and passes through the point $(-2, 7)$. Which of the following equations represents line $q$?",
  choices: [
    // distractor: uses the perpendicular slope -2/3 instead of the parallel slope 3/2, through (-2, 7)
    { id: "A", text: "$2x + 3y = 17$" },
    { id: "B", text: "$3x - 2y = -20$" },
    // distractor: uses the correct slope but substitutes the point with its coordinates reversed, as (7, -2)
    { id: "C", text: "$3x - 2y = 25$" },
    // distractor: uses slope -3/2, a sign error on the parallel slope, through (-2, 7)
    { id: "D", text: "$3x + 2y = 8$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Parallel Lines and Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Line $p$ has slope $\\frac{13 - 1}{4 - (-4)} = \\frac{3}{2}$. Every line with slope $\\frac{3}{2}$ can be written $3x - 2y = C$, and $(-2, 7)$ gives $C = -6 - 14 = -20$.\n\n**The Full Solution:**\nStep 1: The slope of line $p$ is $\\frac{13 - 1}{4 - (-4)} = \\frac{12}{8} = \\frac{3}{2}$. Parallel lines have equal slopes, so line $q$ also has slope $\\frac{3}{2}$.\nStep 2: Use point-slope form with $(-2, 7)$: $y - 7 = \\frac{3}{2}(x + 2)$. Multiply both sides by $2$: $2y - 14 = 3x + 6$.\nStep 3: Rearrange: $3x - 2y = -20$. Check: $3(-2) - 2(7) = -6 - 14 = -20$, and solving for $y$ gives $y = \\frac{3}{2}x + 10$, slope $\\frac{3}{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2x + 3y = 17$): has slope $-\\frac{2}{3}$, the negative reciprocal, which gives a line perpendicular to line $p$.\n* Choice C ($3x - 2y = 25$): has the right slope but passes through $(7, -2)$, the given point with its coordinates swapped.\n* Choice D ($3x + 2y = 8$): passes through $(-2, 7)$ but has slope $-\\frac{3}{2}$, a sign error.\n\n**Test Day Takeaway:** For a line in standard form $Ax + By = C$, the slope is $-\\frac{A}{B}$; check both the slope and the given point before choosing.",
  skills: ["writing-parallel-equation"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A shelf holds only $45$ mystery novels and $k$ biographies. If one of these books is selected at random, the probability of selecting a biography is $\\frac{2}{5}$. What is the value of $k$?",
  correctAnswer: "30",
  explanation: "**SAT Pattern: Basic Probability**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~20s):** If biographies are $\\frac{2}{5}$ of the books, the $45$ mystery novels are $\\frac{3}{5}$, so there are $75$ books in all and $k = 75 - 45 = 30$.\n\n**The Full Solution:**\nStep 1: The shelf holds $45 + k$ books, and $k$ of them are biographies, so the probability of selecting a biography is $\\frac{k}{45 + k}$.\nStep 2: Set this equal to $\\frac{2}{5}$ and cross multiply: $5k = 2(45 + k) = 90 + 2k$.\nStep 3: Subtract $2k$ from both sides: $3k = 90$, so $k = 30$. Check: $\\frac{30}{45 + 30} = \\frac{30}{75} = \\frac{2}{5}$ ✓\n\n**Common Mistakes:**\n* $18$: divides by $45$ instead of by the total number of books, solving $\\frac{k}{45} = \\frac{2}{5}$.\n* $75$: finds the total number of books, $45 + 30$, instead of the number of biographies.\n* $67.5$: treats the $45$ mystery novels as $\\frac{2}{5}$ of the books, giving a total of $112.5$ and $k = 67.5$.\n\n**Test Day Takeaway:** A probability's denominator is the whole group; when the unknown is part of the group, it appears in both the numerator and the denominator.",
  skills: ["probability-basics"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$y = 2x^{2} + 50$\n$y = -bx$\nIn the given system of equations, $b$ is a positive integer. If the system has exactly two distinct real solutions, what is the least possible value of $b$?",
  choices: [
    // distractor: drops the factor 4 from the discriminant, using b^2 - (2)(50) > 0, so b > 10 and the least integer is 11
    { id: "A", text: "$11$" },
    // distractor: drops the leading coefficient 2, using b^2 - 4(50) > 0, so b > 14.14 and the least integer is 15
    { id: "B", text: "$15$" },
    // distractor: lets the discriminant equal 0, which gives exactly one solution, not two
    { id: "C", text: "$20$" },
    { id: "D", text: "$21$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Substituting gives $2x^{2} + bx + 50 = 0$; two distinct real solutions need $b^{2} - 4(2)(50) > 0$, so $b^{2} > 400$ and $b > 20$. The least integer is $21$.\n\n**The Full Solution:**\nStep 1: Set the two expressions for $y$ equal: $2x^{2} + 50 = -bx$, or $2x^{2} + bx + 50 = 0$. Each real solution of this equation gives one solution of the system.\nStep 2: A quadratic has two distinct real solutions when its discriminant is positive: $b^{2} - 4(2)(50) > 0$, so $b^{2} > 400$. Since $b$ is positive, $b > 20$.\nStep 3: The least integer greater than $20$ is $21$. Check: with $b = 21$, the discriminant is $441 - 400 = 41 > 0$; with $b = 20$, it is $0$, which gives only one solution ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($11$): leaves out the $4$ in $b^{2} - 4ac$, solving $b^{2} > 100$.\n* Choice B ($15$): leaves out $a = 2$, solving $b^{2} > 200$, or $b > 14.14$.\n* Choice C ($20$): makes the discriminant equal to $0$; then the line just touches the parabola, and the system has exactly one solution.\n\n**Test Day Takeaway:** To count solutions of a line-and-parabola system, combine them into one quadratic and use the discriminant: positive for two, zero for one, negative for none.",
  skills: ["discriminant-analysis"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A library selected $180$ visits at random and recorded the number of books borrowed on each visit. The mean number of books borrowed for these visits was $4.2$, with an associated margin of error of $0.35$. Which of the following is the most appropriate conclusion?",
  choices: [
    { id: "A", text: "It is plausible that the mean number of books borrowed per visit for all visits to this library is between $3.85$ and $4.55$." },
    // distractor: applies the interval to the 180 sampled visits, whose mean is already known exactly to be 4.2
    { id: "B", text: "It is plausible that the mean number of books borrowed per visit for the $180$ selected visits is between $3.85$ and $4.55$." },
    // distractor: adds the margin of error on one side only, giving 4.2 to 4.55 instead of 3.85 to 4.55
    { id: "C", text: "It is plausible that the mean number of books borrowed per visit for all visits to this library is between $4.2$ and $4.55$." },
    // distractor: doubles the margin of error, giving 4.2 plus or minus 0.7, which is 3.5 to 4.9
    { id: "D", text: "It is plausible that the mean number of books borrowed per visit for all visits to this library is between $3.5$ and $4.9$." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The sample mean plus or minus the margin of error gives $4.2 - 0.35 = 3.85$ to $4.2 + 0.35 = 4.55$, and that interval estimates the mean for all visits, not the sample.\n\n**The Full Solution:**\nStep 1: The plausible interval is the sample mean minus and plus the margin of error: $4.2 - 0.35 = 3.85$ and $4.2 + 0.35 = 4.55$.\nStep 2: A margin of error describes uncertainty about the population, here all visits to this library, because the sample mean is known exactly.\nStep 3: So it is plausible that the mean for all visits is between $3.85$ and $4.55$. Check: $3.85$ and $4.55$ are each $0.35$ from $4.2$, the center of the interval ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: uses the right interval but applies it to the $180$ selected visits. Their mean is exactly $4.2$, so there is nothing to estimate.\n* Choice C: adds the margin of error above $4.2$ but does not subtract it below.\n* Choice D: doubles the margin of error, using $4.2$ plus or minus $0.7$.\n\n**Test Day Takeaway:** A margin of error builds an interval centered on the sample statistic, and the conclusion is always about the whole population the sample was drawn from.",
  skills: ["margin-of-error"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "For the quadratic function $f$, the table shows three values of $x$ and their corresponding values of $f(x)$. What is the minimum value of $f(x)$?",
  questionTable: { headers: ["$x$", "$f(x)$"], rows: [["3", "62"], ["5", "30"], ["13", "62"]] },
  correctAnswer: "12",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~45s):** Since $f(3) = f(13)$, the vertex is at $x = 8$. Writing $f(x) = a(x - 8)^{2} + k$ and using the points $(3, 62)$ and $(5, 30)$ gives $16a = 32$, so $a = 2$ and $k = 12$.\n\n**The Full Solution:**\nStep 1: The table shows $f(3) = f(13) = 62$. A quadratic has equal outputs at inputs the same distance from its axis of symmetry, so the axis is $x = \\frac{3 + 13}{2} = 8$, and $f(x) = a(x - 8)^{2} + k$.\nStep 2: Substitute two points. From $(3, 62)$: $25a + k = 62$. From $(5, 30)$: $9a + k = 30$. Subtracting gives $16a = 32$, so $a = 2$.\nStep 3: Then $9(2) + k = 30$, so $k = 12$. Since $a > 0$, the parabola opens upward and $k = 12$ is the minimum value. Check: $f(13) = 2(13 - 8)^{2} + 12 = 50 + 12 = 62$ ✓\n\n**Common Mistakes:**\n* $8$: reports the $x$-coordinate of the vertex instead of the minimum value of $f(x)$.\n* $30$: takes the least output in the table as the minimum. The vertex is at $x = 8$, which is not in the table.\n* $2$: reports the leading coefficient $a$ instead of $k$.\n\n**Test Day Takeaway:** Two equal outputs give the axis of symmetry: average their inputs. Then one more point turns vertex form into two equations for $a$ and $k$.",
  skills: ["vertex-form", "function-evaluation"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$f(t) = A(2)^{\\frac{t}{k}}$\nIn the given function, $A$ and $k$ are positive constants. If $f(5) = 640$ and $f(20) = 5{,}120$, what is the value of $k$?",
  correctAnswer: "5",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~30s):** From $t = 5$ to $t = 20$, the output is multiplied by $\\frac{5{,}120}{640} = 8 = 2^{3}$, so $15$ units of $t$ contain $3$ doublings, and each doubling takes $k = \\frac{15}{3} = 5$.\n\n**The Full Solution:**\nStep 1: Divide the two outputs so that $A$ cancels: $\\frac{f(20)}{f(5)} = \\frac{A(2)^{\\frac{20}{k}}}{A(2)^{\\frac{5}{k}}} = 2^{\\frac{15}{k}}$.\nStep 2: The ratio of the given values is $\\frac{5{,}120}{640} = 8 = 2^{3}$, so $2^{\\frac{15}{k}} = 2^{3}$ and $\\frac{15}{k} = 3$.\nStep 3: Solve: $k = 5$. Check: then $A = \\frac{640}{2^{1}} = 320$, and $f(20) = 320(2)^{4} = 320(16) = 5{,}120$ ✓\n\n**Common Mistakes:**\n* $3$: reports the number of doublings between $t = 5$ and $t = 20$ instead of the time each doubling takes.\n* $8$: reports the growth factor $\\frac{5{,}120}{640}$.\n* $15$: assumes the output doubled once between $t = 5$ and $t = 20$, setting $\\frac{15}{k} = 1$.\n\n**Test Day Takeaway:** In $A(2)^{\\frac{t}{k}}$, $k$ is the doubling time; divide two outputs to cancel $A$, count the doublings, and divide the elapsed time by that count.",
  skills: ["exponential-growth-decay"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The value of a car decreases by $12\\%$ each year. The function $V$ gives the value, in dollars, of the car $m$ months after it was purchased, where $V(m) = 21{,}000b^{m}$ and $b$ is a constant. What is the value of $b$?",
  choices: [
    // distractor: uses the percent removed, 0.12, as the yearly factor instead of the retained fraction 0.88
    { id: "A", text: "$(0.12)^{\\frac{1}{12}}$" },
    // distractor: raises the yearly factor to the 12th power, which is the factor for 12 years, not one month
    { id: "B", text: "$(0.88)^{12}$" },
    { id: "C", text: "$(0.88)^{\\frac{1}{12}}$" },
    // distractor: treats a 12% decrease as a 12% increase, using 1.12 in place of 0.88
    { id: "D", text: "$(1.12)^{\\frac{1}{12}}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Each year the value is multiplied by $0.88$, and a year is $12$ months, so $b^{12} = 0.88$ and $b = (0.88)^{\\frac{1}{12}}$.\n\n**The Full Solution:**\nStep 1: A $12\\%$ decrease leaves $100\\% - 12\\% = 88\\%$ of the value, so each year the value is multiplied by $0.88$.\nStep 2: One year is $12$ months, so in the model the value is multiplied by $b^{12}$ each year. Therefore $b^{12} = 0.88$.\nStep 3: Take the twelfth root of both sides: $b = (0.88)^{\\frac{1}{12}}$. Check: after $m = 12$ months, $V(12) = 21{,}000\\left((0.88)^{\\frac{1}{12}}\\right)^{12} = 21{,}000(0.88) = 18{,}480$, which is $12\\%$ less than $21{,}000$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: uses $0.12$, the fraction lost each year, instead of $0.88$, the fraction kept.\n* Choice B: raises $0.88$ to the $12$th power, which is the factor for $12$ years, not for one month.\n* Choice D: uses $1.12$, which models a $12\\%$ increase each year.\n\n**Test Day Takeaway:** Convert a yearly percent decrease to the factor $1 - r$; if the model counts months, the monthly factor is the $12$th root of the yearly factor.",
  skills: ["exponential-growth-decay"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, line $r$ is defined by $4x + 6y = 51$. Line $s$ is perpendicular to line $r$ and passes through the points $(3, -5)$ and $(c, 7)$. What is the value of $c$?",
  correctAnswer: "11",
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~40s):** Line $r$ has slope $-\\frac{4}{6} = -\\frac{2}{3}$, so line $s$ has slope $\\frac{3}{2}$. A rise of $7 - (-5) = 12$ needs a run of $8$, so $c = 3 + 8 = 11$.\n\n**The Full Solution:**\nStep 1: Solve $4x + 6y = 51$ for $y$: $y = -\\frac{2}{3}x + \\frac{17}{2}$, so line $r$ has slope $-\\frac{2}{3}$. The slope of a perpendicular line is the negative reciprocal, $\\frac{3}{2}$.\nStep 2: The slope of line $s$ through $(3, -5)$ and $(c, 7)$ is $\\frac{7 - (-5)}{c - 3} = \\frac{12}{c - 3}$. Set $\\frac{12}{c - 3} = \\frac{3}{2}$.\nStep 3: Cross multiply: $3(c - 3) = 24$, so $c - 3 = 8$ and $c = 11$. Check: the slope through $(3, -5)$ and $(11, 7)$ is $\\frac{12}{8} = \\frac{3}{2}$, and $\\frac{3}{2} \\cdot \\left(-\\frac{2}{3}\\right) = -1$ ✓\n\n**Common Mistakes:**\n* $-15$: uses the slope of line $r$, $-\\frac{2}{3}$, for line $s$, solving $\\frac{12}{c - 3} = -\\frac{2}{3}$.\n* $21$: reads the slope of line $r$ as $\\frac{4}{6} = \\frac{2}{3}$ and uses it for line $s$, solving $\\frac{12}{c - 3} = \\frac{2}{3}$.\n* $-5$: takes the reciprocal of $-\\frac{2}{3}$ but keeps its sign, solving $\\frac{12}{c - 3} = -\\frac{3}{2}$.\n\n**Test Day Takeaway:** For $Ax + By = C$, the slope is $-\\frac{A}{B}$; flip it and change its sign for the perpendicular line, then set the slope formula equal to that value.",
  skills: ["perpendicular-negative-reciprocal"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$\\frac{x^{2} + 2x - 15}{x + 5} = -8$\nHow many distinct real solutions does the given equation have?",
  choices: [
    // distractor: simplifies to x - 3 = -8 and accepts x = -5 without checking that it makes the denominator zero
    { id: "A", text: "Exactly one" },
    // distractor: sets the numerator equal to zero, giving x = -5 and x = 3, and ignores the right side
    { id: "B", text: "Exactly two" },
    // distractor: treats the cancellation of the factor x + 5 as making the equation true for every x
    { id: "C", text: "Infinitely many" },
    { id: "D", text: "Zero" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Rational Equation with No Solution**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The left side factors to $\\frac{(x + 5)(x - 3)}{x + 5} = x - 3$ for $x \\neq -5$, and $x - 3 = -8$ gives $x = -5$, the one value that is not allowed. So there are no solutions.\n\n**The Full Solution:**\nStep 1: Factor the numerator: $x^{2} + 2x - 15 = (x + 5)(x - 3)$. The denominator is $0$ when $x = -5$, so $x = -5$ cannot be a solution.\nStep 2: For $x \\neq -5$, the left side simplifies to $x - 3$, so the equation becomes $x - 3 = -8$, which gives $x = -5$.\nStep 3: The only candidate, $x = -5$, is excluded, so the equation has zero real solutions. Check: substituting $x = -5$ gives $\\frac{25 - 10 - 15}{0} = \\frac{0}{0}$, which is undefined, not $-8$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (Exactly one): solves $x - 3 = -8$ and accepts $x = -5$ without checking it in the original denominator.\n* Choice B (Exactly two): sets the numerator equal to $0$, finding $x = -5$ and $x = 3$, which solves a different equation.\n* Choice C (Infinitely many): treats canceling the factor $x + 5$ as if it made the two sides identical, but $x - 3 = -8$ is true for only one value of $x$.\n\n**Test Day Takeaway:** After simplifying a rational equation, test every candidate in the original denominator; a candidate that makes it zero is extraneous.",
  skills: ["rational-expressions"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the triangle shown, what is the difference, in degrees, between the measure of the largest angle and the measure of the smallest angle?",
  diagram: { type: "triangleWithAngles", params: { angleLabels: ["(3x + 10)°", "(2x - 5)°", "(x + 55)°"], note: "Note: Figure not drawn to scale." } },
  choices: [
    // distractor: subtracts the two largest angles, 75 - 70 = 5, instead of the largest and the smallest
    { id: "A", text: "$5$" },
    // distractor: reports the value of x rather than a difference of angle measures
    { id: "B", text: "$20$" },
    // distractor: reports the smallest angle measure, 35 degrees, without subtracting
    { id: "C", text: "$35$" },
    { id: "D", text: "$40$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** The angles sum to $6x + 60 = 180$, so $x = 20$. The angles are $70^{\\circ}$, $35^{\\circ}$, and $75^{\\circ}$, and $75 - 35 = 40$.\n\n**The Full Solution:**\nStep 1: The interior angles of a triangle sum to $180^{\\circ}$: $(3x + 10) + (2x - 5) + (x + 55) = 180$, so $6x + 60 = 180$.\nStep 2: Solve: $6x = 120$, so $x = 20$. The angle measures are $3(20) + 10 = 70$, $2(20) - 5 = 35$, and $20 + 55 = 75$ degrees.\nStep 3: The largest angle is $75^{\\circ}$ and the smallest is $35^{\\circ}$, so the difference is $75 - 35 = 40$ degrees. Check: $70 + 35 + 75 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): subtracts the two largest angles, $75 - 70$, instead of the largest and the smallest.\n* Choice B ($20$): reports the value of $x$, which is only the first step.\n* Choice C ($35$): reports the smallest angle without subtracting it from the largest.\n\n**Test Day Takeaway:** When angle measures are given as expressions, solve for $x$ first, then substitute into every expression before comparing; the figure is not drawn to scale, so do not judge sizes by eye.",
  skills: ["triangle-angle-sum"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A rectangle has side lengths $m - 4$ and $m + 4$, where $m > 4$. Which expression represents the length of a diagonal of the rectangle?",
  choices: [
    // distractor: squares each binomial term by term as m^2 - 16 and m^2 + 16, so the constants cancel and only 2m^2 is left
    { id: "A", text: "$\\sqrt{2m^{2}}$" },
    // distractor: includes only one of the two 16s, using 16 instead of 16 + 16 = 32
    { id: "B", text: "$\\sqrt{2m^{2} + 16}$" },
    { id: "C", text: "$\\sqrt{2m^{2} + 32}$" },
    // distractor: treats both middle terms as positive, giving +16m where -8m and +8m should cancel
    { id: "D", text: "$\\sqrt{2m^{2} + 16m + 32}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** A diagonal is the hypotenuse of a right triangle with legs $m - 4$ and $m + 4$: $(m - 4)^{2} + (m + 4)^{2} = 2m^{2} + 32$, so the diagonal is $\\sqrt{2m^{2} + 32}$.\n\n**The Full Solution:**\nStep 1: A diagonal splits the rectangle into two right triangles whose legs are the sides, so $d^{2} = (m - 4)^{2} + (m + 4)^{2}$.\nStep 2: Expand: $(m - 4)^{2} = m^{2} - 8m + 16$ and $(m + 4)^{2} = m^{2} + 8m + 16$. Adding, the $-8m$ and $+8m$ cancel: $d^{2} = 2m^{2} + 32$.\nStep 3: So $d = \\sqrt{2m^{2} + 32}$. Check with $m = 7$: the sides are $3$ and $11$, $3^{2} + 11^{2} = 9 + 121 = 130$, and $2(49) + 32 = 130$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: squares each binomial as $m^{2} - 16$ and $m^{2} + 16$, so the constants cancel; $(m \\pm 4)^{2}$ always has $+16$.\n* Choice B: includes only one $16$, though each squared binomial contributes $+16$.\n* Choice D: makes both middle terms $+8m$, but $(m - 4)^{2}$ has $-8m$, which cancels the $+8m$.\n\n**Test Day Takeaway:** Square a binomial as $(a \\pm b)^{2} = a^{2} \\pm 2ab + b^{2}$; when you add $(m - 4)^{2}$ and $(m + 4)^{2}$, the middle terms cancel and the constants double.",
  skills: ["pythagorean-theorem"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 5 — Math Module 2 (22 questions)
// Wavy flow (frozen): E M M E M H H M H H M H E H H M H H H M H H
// Distribution: 3 E (Q1/Q4/Q13), 7 M (Q2/Q3/Q5/Q8/Q11/Q16/Q20), 12 H (rest), band-7 ceiling.
// Warm-ups Q1-5 are never trivial: Q1 scaled-triple right triangle (recognize
// 5x = hypotenuse, then answer the requested quantity — NOT the tests-1-3
// missing-leg/hypotenuse-radical trap family), Q4 rate with a
// minutes-to-hours conversion, Q2/Q3/Q5 each carry a named trap.
// Q13 breather = pure range read from a data table.
// Slot archetypes carried from the 2026-06 blueprint with fresh content:
// Q6 parametric dependent system, Q7 tangent-line discriminant, Q9 circle
// x-extent, Q10 quadratic-formula discriminant form, Q14 exponential period
// years-to-months, Q17 scatterplot best-fit scaling, Q21 survey scale-up
// margin, Q22 vertex/two-intercept a+b+c bound.
// Diagrams: Q1 right triangle, Q12 two-way table, Q13 data table, Q17 scatterplot.

{
  id: 1,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the figure shown, lines $m$ and $n$ intersect at a point. What is the value of $y$?",
  diagram: { type: "intersectingLines", params: { angles: ["(7x + 5)°", "y°", "(3x + 25)°", ""], lineLabels: ["m", "n"], figureNote: true, angle0Measure: 40 } },
  choices: [
    // distractor: stops at x = 5 and reports the solution of the equation instead of the angle measure y
    { id: "A", text: "$5$" },
    // distractor: reports 40, the measure of the two labeled vertical angles, instead of the supplementary angle y
    { id: "B", text: "$40$" },
    // distractor: sets the two labeled angles supplementary (7x + 5 + 3x + 25 = 180), gets x = 15 and 110 degrees, then takes 180 - 110 = 70
    { id: "C", text: "$70$" },
    { id: "D", text: "$140$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Vertical Angles**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The two labeled expressions are vertical angles, so $7x+5=3x+25$ gives $x=5$ and a $40^\\circ$ angle. The angle labeled $y^\\circ$ is its supplement: $180-40=140$.\n\n**The Full Solution:**\nStep 1: The angles measuring $(7x+5)^\\circ$ and $(3x+25)^\\circ$ are opposite each other at the intersection, so they are vertical angles and have equal measure: $7x+5=3x+25$.\nStep 2: Subtracting $3x$ and $5$ from both sides gives $4x=20$, so $x=5$. Each of those two angles measures $7(5)+5=40$ degrees.\nStep 3: The angle labeled $y^\\circ$ and a $40^\\circ$ angle together form a straight angle along one of the lines, so $y=180-40=140$. Check: the four angles measure $40$, $140$, $40$, and $140$ degrees, and $40+140+40+140=360$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): stops at $x=5$. That is the value of $x$, not an angle measure.\n* Choice B ($40$): finds the measure of the two labeled vertical angles but reports it instead of $y$, which belongs to the other pair.\n* Choice C ($70$): treats the labeled angles as supplementary rather than vertical, solving $7x+5+3x+25=180$ to get $x=15$ and an angle of $110^\\circ$, then computing $180-110=70$.\n\n**Test Day Takeaway:** Two intersecting lines form only two distinct angle measures, and they add to $180$. Solve for $x$, build the angle the expression describes, then check which of the two measures the question names.",
  skills: ["angles"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The function $f$ is defined by $f(x)=\\frac{7}{2}x-12$. For what value of $x$ does $f(x)=30$?",
  choices: [
    // distractor: reaches (7/2)x = 42 but divides 42 by 7 instead of by 7/2
    { id: "A", text: "$6$" },
    { id: "B", text: "$12$" },
    // distractor: stops at (7/2)x = 42 and reports 42 without solving for x
    { id: "C", text: "$42$" },
    // distractor: evaluates f(30) = (7/2)(30) - 12 = 93 instead of solving f(x) = 30
    { id: "D", text: "$93$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Set $\\frac{7}{2}x-12=30$: then $\\frac{7}{2}x=42$, and $x=42\\cdot\\frac{2}{7}=12$.\n\n**The Full Solution:**\nStep 1: The statement $f(x)=30$ says the output is $30$, so replace $f(x)$ with $30$: $\\frac{7}{2}x-12=30$.\nStep 2: Add $12$ to both sides: $\\frac{7}{2}x=42$.\nStep 3: Multiply both sides by $\\frac{2}{7}$: $x=12$. Check: $f(12)=\\frac{7}{2}(12)-12=42-12=30$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): reaches $\\frac{7}{2}x=42$ but divides $42$ by $7$ instead of by $\\frac{7}{2}$.\n* Choice C ($42$): reaches $\\frac{7}{2}x=42$ and reports $42$ without solving for $x$.\n* Choice D ($93$): evaluates $f(30)$, treating $30$ as the input. Here $30$ is the output, so the task is to solve for the input.\n\n**Test Day Takeaway:** Decide whether a given number is the input or the output before computing. When the output is given, set the expression equal to it and solve; to undo a coefficient of $\\frac{7}{2}$, multiply by $\\frac{2}{7}$.",
  skills: ["function-evaluation"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$\\frac{2x+7}{3}=x-4$\nWhat is the solution to the given equation?",
  choices: [
    // distractor: multiplies only the left side by 3, solving 2x + 7 = x - 12 and getting x = -19
    { id: "A", text: "$-19$" },
    // distractor: distributes the 3 with the wrong sign, writing 3(x - 4) as 3x + 12 and getting x = -5
    { id: "B", text: "$-5$" },
    // distractor: multiplies x by 3 but not the 4, writing 2x + 7 = 3x - 4 and getting x = 11
    { id: "C", text: "$11$" },
    { id: "D", text: "$19$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Multiply both sides by $3$: $2x+7=3x-12$, so $x=19$.\n\n**The Full Solution:**\nStep 1: Clear the fraction by multiplying both sides by $3$: $2x+7=3(x-4)$.\nStep 2: Distribute on the right: $2x+7=3x-12$.\nStep 3: Subtract $2x$ and add $12$ to both sides: $19=x$. Check: $\\frac{2(19)+7}{3}=\\frac{45}{3}=15$ and $19-4=15$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-19$): multiplies only the left side by $3$, solving $2x+7=x-12$.\n* Choice B ($-5$): distributes the $3$ with the wrong sign, writing $3(x-4)$ as $3x+12$.\n* Choice C ($11$): multiplies $x$ by $3$ but not the $4$, solving $2x+7=3x-4$.\n\n**Test Day Takeaway:** When you multiply to clear a fraction, the multiplier reaches every term on the other side. Substitute your answer into the original equation; both sides must match.",
  skills: ["solving-equations"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A data set consists of the values $14$, $9$, $22$, $9$, $31$, $18$, and $k$. The mean of the data set is $17$. What is the value of $k$?",
  choices: [
    // distractor: multiplies the mean by 6, the number of listed values, instead of 7, giving 102 - 103 = -1
    { id: "A", text: "$-1$" },
    { id: "B", text: "$16$" },
    // distractor: counts the repeated 9 only once, so the known values sum to 94 and k = 119 - 94 = 25
    { id: "C", text: "$25$" },
    // distractor: finds the total of all seven values, 7(17) = 119, and reports it as k without subtracting the six known values
    { id: "D", text: "$119$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Mean from List**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Seven values with mean $17$ total $7(17)=119$. The six known values total $103$, so $k=119-103=16$.\n\n**The Full Solution:**\nStep 1: The mean is the sum divided by the number of values. The data set has $7$ values, so their sum is $7(17)=119$.\nStep 2: Add the six known values: $14+9+22+9+31+18=103$.\nStep 3: The remaining value is $k=119-103=16$. Check: $\\frac{103+16}{7}=\\frac{119}{7}=17$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-1$): multiplies the mean by $6$, the number of values written as numbers, instead of $7$, giving $102-103=-1$.\n* Choice C ($25$): counts the repeated $9$ only once, so the known values seem to total $94$, and $119-94=25$.\n* Choice D ($119$): finds the total of all seven values and stops before subtracting the six known values.\n\n**Test Day Takeaway:** Turn a given mean into a total first (mean times count), then subtract the known values. A repeated value counts every time it appears, and the unknown value counts toward the total number of values.",
  skills: ["calculate-mean"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Of the $480$ students at a school, $35\\%$ walk to school and $126$ ride a bus to school. The rest of the students are driven to school. How many students are driven to school?",
  choices: [
    // distractor: finds the number of students who walk, 0.35(480) = 168, and stops
    { id: "A", text: "$168$" },
    { id: "B", text: "$186$" },
    // distractor: finds the students who walk or ride a bus, 168 + 126 = 294, instead of the students left over
    { id: "C", text: "$294$" },
    // distractor: removes the walkers, 0.65(480) = 312, but forgets to subtract the 126 bus riders
    { id: "D", text: "$312$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Percent Complement**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $35\\%$ of $480$ is $168$ walkers. Then $480-168-126=186$ students are driven.\n\n**The Full Solution:**\nStep 1: Convert the percent to a number of students: $0.35(480)=168$ students walk.\nStep 2: Add the students who walk and the students who ride a bus: $168+126=294$.\nStep 3: The rest are driven: $480-294=186$. Check: $168+126+186=480$, the whole school ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($168$): computes the number of walkers correctly and stops there.\n* Choice C ($294$): finds the students who walk or ride a bus, which is the group the question excludes.\n* Choice D ($312$): finds the $65\\%$ who do not walk, $0.65(480)=312$, but never removes the $126$ bus riders.\n\n**Test Day Takeaway:** When a total is split into a percent part, a count part, and the rest, convert the percent to a count first, then subtract both known parts from the total.",
  skills: ["percent-of-value"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table shows the weight and the volume of each small box and each large box in a shipment. The shipment contains only these boxes, with $21$ more small boxes than large boxes, and the boxes have a total weight of $861$ pounds. What is the total volume, in cubic feet, of the boxes in the shipment?",
  questionTable: { headers: ["Box type", "Weight (pounds)", "Volume (cubic feet)"], rows: [["Small", "$6$", "$2$"], ["Large", "$15$", "$7$"]] },
  choices: [
    { id: "A", text: "$357$" },
    // distractor: reverses the comparison, writing y = x + 21, which gives x = 26 and y = 47 and a volume of 2(26) + 7(47) = 381
    { id: "B", text: "$381$" },
    // distractor: multiplies only y by 6 when substituting, writing 6y + 21 + 15y = 861, which gives y = 40, x = 61, and a volume of 402
    { id: "C", text: "$402$" },
    // distractor: solves the system correctly but swaps the counts, using 35 small boxes and 56 large boxes: 2(35) + 7(56) = 462
    { id: "D", text: "$462$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~50s):** With $x$ small and $y$ large boxes, $x=y+21$, and substituting into $6x+15y=861$ gives $21y+126=861$, so $y=35$ and $x=56$. The total volume is $2(56)+7(35)=357$ cubic feet.\n\n**The Full Solution:**\nStep 1: Let $x$ be the number of small boxes and $y$ the number of large boxes. There are $21$ more small boxes than large boxes, so $x=y+21$. Using the weights in the table, $6x+15y=861$.\nStep 2: Substitute $y+21$ for $x$: $6(y+21)+15y=861$, so $21y+126=861$. Then $21y=735$, so $y=35$ and $x=35+21=56$.\nStep 3: Using the volumes in the table, the total volume is $2(56)+7(35)=112+245=357$ cubic feet. Check: $56-35=21$ and $6(56)+15(35)=336+525=861$ pounds ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($381$): writes $y=x+21$, which gives $21$ more large boxes than small boxes. That leads to $x=26$ and $y=47$, and $2(26)+7(47)=381$.\n* Choice C ($402$): multiplies only $y$ by $6$ when substituting, writing $6y+21$ instead of $6y+126$. That gives $y=40$ and $x=61$, and $2(61)+7(40)=402$.\n* Choice D ($462$): finds $35$ and $56$ but matches them to the wrong box types, computing $2(35)+7(56)=462$.\n\n**Test Day Takeaway:** Translate \"$21$ more small boxes than large boxes\" as $x=y+21$, substitute it into the other equation, and then use the values you found to answer the question actually asked.",
  skills: ["substitution-method"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Which expression is equivalent to $\\frac{4x^{2}-49}{2x^{2}+13x+21}$, where $x>0$?",
  choices: [
    // distractor: factors the denominator as (2x + 7)(x - 3), a sign slip that gives 2x^2 + x - 21 instead of 2x^2 + 13x + 21
    { id: "A", text: "$\\frac{2x-7}{x-3}$" },
    // distractor: cancels the wrong factor of the difference of squares, keeping 2x + 7 in the numerator instead of 2x - 7
    { id: "B", text: "$\\frac{2x+7}{x+3}$" },
    { id: "C", text: "$\\frac{2x-7}{x+3}$" },
    // distractor: writes 4x^2 - 49 as (4x - 7)(4x + 7), forgetting that the square root of 4x^2 is 2x, not 4x
    { id: "D", text: "$\\frac{4x-7}{x+3}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** The numerator is $(2x-7)(2x+7)$ and the denominator is $(2x+7)(x+3)$. Dividing out the common factor $(2x+7)$ leaves $\\frac{2x-7}{x+3}$.\n\n**The Full Solution:**\nStep 1: Factor the numerator as a difference of squares. Since $4x^{2}=(2x)^{2}$ and $49=7^{2}$, $4x^{2}-49=(2x-7)(2x+7)$.\nStep 2: Factor the denominator. Look for $(2x+m)(x+n)$ with $mn=21$ and $m+2n=13$: $m=7$ and $n=3$ work, since $(2x+7)(x+3)=2x^{2}+6x+7x+21=2x^{2}+13x+21$.\nStep 3: Divide out $(2x+7)$, which is positive because $x>0$. The result is $\\frac{2x-7}{x+3}$. Check at $x=1$: the original is $\\frac{4-49}{2+13+21}=\\frac{-45}{36}=-\\frac{5}{4}$, and $\\frac{2-7}{1+3}=-\\frac{5}{4}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{2x-7}{x-3}$): factors the denominator as $(2x+7)(x-3)$, which expands to $2x^{2}+x-21$, not the given denominator.\n* Choice B ($\\frac{2x+7}{x+3}$): divides out the wrong factor. The factor shared with the denominator is $(2x+7)$, so $(2x-7)$ is what remains.\n* Choice D ($\\frac{4x-7}{x+3}$): writes $4x^{2}-49$ as $(4x-7)(4x+7)$, but that product is $16x^{2}-49$; the square root of $4x^{2}$ is $2x$.\n\n**Test Day Takeaway:** Factor the numerator and denominator completely before dividing out anything. With a difference of squares on top, the factor that matches the denominator cancels and the other factor becomes the new numerator.",
  skills: ["simplifying-rational-expressions", "difference-of-squares"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "$10x+24y=46$\n$15x+by=69$\nIn the given system of equations, $b$ is a constant. The system has infinitely many solutions. What is the value of $b$?",
  correctAnswer: "36",
  explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**The correct answer is $36$.**\n\n**The Fast Way (~30s):** The $x$-coefficients and the constants both scale by $\\frac{3}{2}$ ($10\\to 15$ and $46\\to 69$), so $b=\\frac{3}{2}(24)=36$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has infinitely many solutions when one equation is a constant multiple of the other. So there is a number $r$ with $15=10r$, $b=24r$, and $69=46r$.\nStep 2: From $15=10r$, $r=\\frac{3}{2}$. The constants agree: $\\frac{69}{46}=\\frac{3}{2}$, so such an $r$ exists.\nStep 3: Apply $r$ to the $y$-coefficient: $b=24\\left(\\frac{3}{2}\\right)=36$. Check: multiplying $10x+24y=46$ by $\\frac{3}{2}$ gives $15x+36y=69$, the second equation exactly ✓\n\n**Common Mistakes:**\n* $24$: assuming the two equations must have identical coefficients, so $b$ copies the first equation's $y$-coefficient. The equations only need to be proportional.\n* $16$: applying the ratio upside down, computing $24\\left(\\frac{2}{3}\\right)=16$. The second equation's coefficients are $\\frac{3}{2}$ times the first equation's.\n* $69$: scaling the first equation correctly to $15x+36y=69$ but reporting the constant term instead of the coefficient of $y$.\n\n**Test Day Takeaway:** Infinitely many solutions means one equation is a multiple of the other. Find the multiplier from a pair of coefficients with no unknown, confirm it on the constants, then apply it to the unknown coefficient.",
  skills: ["system-solution-types", "infinite-solutions-condition"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "For the linear function $f$, $f(3)=47$ and $f(11)=15$. Which equation defines $f$?",
  choices: [
    // distractor: uses the change in output, -32, as the slope without dividing by the change in input, 8
    { id: "A", text: "$f(x)=-32x+143$" },
    { id: "B", text: "$f(x)=-4x+59$" },
    // distractor: finds the slope correctly but uses the output 47 as the y-intercept instead of solving for it
    { id: "C", text: "$f(x)=-4x+47$" },
    // distractor: drops the negative on the slope, computing (47 - 15)/(11 - 3) = 4 instead of (15 - 47)/(11 - 3) = -4
    { id: "D", text: "$f(x)=4x+35$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The output drops $32$ as $x$ increases by $8$, so the slope is $-4$. Going back $3$ units from $x=3$ to $x=0$ adds $12$, so the $y$-intercept is $59$.\n\n**The Full Solution:**\nStep 1: The given values correspond to the points $(3,47)$ and $(11,15)$. The slope is $m=\\frac{15-47}{11-3}=\\frac{-32}{8}=-4$.\nStep 2: Write $f(x)=-4x+b$ and substitute $(3,47)$: $47=-4(3)+b$, so $47=-12+b$ and $b=59$.\nStep 3: The function is $f(x)=-4x+59$. Check the other point: $f(11)=-4(11)+59=-44+59=15$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($f(x)=-32x+143$): uses the change in output, $-32$, as the slope without dividing by the change in input, $8$. It gives $f(11)=-209$.\n* Choice C ($f(x)=-4x+47$): finds the slope but uses $47$ as the $y$-intercept. That output belongs to $x=3$, not $x=0$; this equation gives $f(3)=35$.\n* Choice D ($f(x)=4x+35$): subtracts the outputs and the inputs in opposite orders, producing a positive slope.\n\n**Test Day Takeaway:** Slope is the change in output divided by the change in input, with the subtraction in the same order on top and bottom. Substitute one point to find the intercept, then verify with the other point.",
  skills: ["linear-functions", "slope", "coordinate-geometry"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The function $C(t)=480(0.84)^{t}$ models the concentration, in parts per million, of a chemical in a pond $t$ days after the chemical was added. According to the model, the concentration decreases by $p\\%$ every $7$ days. To the nearest whole number, what is the value of $p$?",
  correctAnswer: "70",
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**The correct answer is $70$.**\n\n**The Fast Way (~40s):** Every $7$ days the concentration is multiplied by $(0.84)^{7}\\approx 0.295$, so about $29.5\\%$ remains and about $70\\%$ is lost.\n\n**The Full Solution:**\nStep 1: In $C(t)=480(0.84)^{t}$, the concentration is multiplied by $0.84$ each day. Over $7$ days it is multiplied by $(0.84)^{7}$.\nStep 2: Evaluate: $(0.84)^{7}\\approx 0.2951$, so about $29.51\\%$ of the concentration remains after $7$ days.\nStep 3: The percent decrease is $100-29.51=70.49$, so $p\\approx 70$. Check: $C(0)=480$ and $C(7)=480(0.2951)\\approx 141.6$, and $\\frac{480-141.6}{480}\\approx 0.705$ ✓\n\n**Common Mistakes:**\n* $16$: reporting the daily decrease, $1-0.84=0.16$, as the decrease every $7$ days.\n* $112$: multiplying the daily $16\\%$ by $7$. Percent decreases compound rather than add, and a decrease of more than $100\\%$ is impossible.\n* $30$: finding the $7$-day factor $0.295$ correctly but reporting the percent that remains instead of the percent lost.\n\n**Test Day Takeaway:** The base of an exponential model belongs to the time unit in the exponent. For a longer period, raise the base to the number of units in that period, then decide whether the question asks for the part that remains or the part that is lost.",
  skills: ["exponential-growth-decay"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Line $\\ell$ is shown in the $xy$-plane. In a system of two linear equations, the graph of one equation is line $\\ell$ and the other equation is $6x+ky=72$, where $k$ is a constant. If the system has no solution, what is the value of $k$?",
  diagram: { type: "linearGraph", params: { slope: -0.75, yIntercept: 12, xRange: [0, 16], yRange: [0, 16], xTickInterval: 4, yTickInterval: 4, gridInterval: 2, showPoints: [[0, 12], [8, 6]], label: "ℓ" } },
  choices: [
    // distractor: makes the slopes opposites instead of equal, solving -6/k = 3/4 to get k = -8
    { id: "A", text: "$-8$" },
    // distractor: copies the y-coefficient 4 straight from 3x + 4y = 48, ignoring that the x-coefficient was doubled from 3 to 6
    { id: "B", text: "$4$" },
    // distractor: scales by the ratio of the constant terms, 72/48 = 1.5, giving 1.5 times 4 = 6 instead of using the x-coefficient ratio 2
    { id: "C", text: "$6$" },
    { id: "D", text: "$8$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** Line $\\ell$ is $3x+4y=48$. Doubling the $x$-coefficient from $3$ to $6$ requires doubling the $y$-coefficient too, so $k=8$; the constants, $96$ and $72$, then differ, so the lines are parallel and distinct.\n\n**The Full Solution:**\nStep 1: Line $\\ell$ passes through $(0,12)$ and $(8,6)$, so its slope is $\\frac{6-12}{8-0}=-\\frac{3}{4}$ and its equation is $y=-\\frac{3}{4}x+12$, or $3x+4y=48$.\nStep 2: A system of two linear equations has no solution when the lines are parallel and distinct: the coefficients of $x$ and $y$ are proportional but the constants are not. Comparing $6x+ky=72$ with $3x+4y=48$, the $x$-coefficients have ratio $\\frac{6}{3}=2$, so $k=2(4)=8$.\nStep 3: Confirm the lines are distinct. Multiplying $3x+4y=48$ by $2$ gives $6x+8y=96$, and $96\\neq 72$. Check: $6x+8y=72$ is equivalent to $3x+4y=36$, which has the same slope as line $\\ell$ and a different $y$-intercept, $9$ instead of $12$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): makes the slopes opposites rather than equal. With $k=-8$ the second line has slope $\\frac{3}{4}$, so it intersects line $\\ell$.\n* Choice B ($4$): copies the $4$ from $3x+4y=48$ without scaling. With $k=4$ the second line has slope $-\\frac{3}{2}$, so it intersects line $\\ell$.\n* Choice C ($6$): scales by the ratio of the constants, $\\frac{72}{48}=1.5$. With $k=6$ the second line has slope $-1$, so it intersects line $\\ell$.\n\n**Test Day Takeaway:** No solution means parallel and distinct lines. Use the $x$-coefficients to find the scale factor, apply it to the $y$-coefficient, then confirm the constants do not follow the same scale; if they did, the system would have infinitely many solutions.",
  skills: ["system-solution-types"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The number of visitors to a museum increased by $35\\%$ from 2023 to 2024 and then decreased by $12\\%$ from 2024 to 2025. There were $2{,}376$ visitors in 2025. Which expression represents the number of visitors in 2023?",
  choices: [
    // distractor: treats the 12 percent decrease as a 12 percent increase, using 1.12 in place of 0.88
    { id: "A", text: "$\\dfrac{2{,}376}{(1.35)(1.12)}$" },
    // distractor: combines the two percent changes as 35 - 12 = 23 percent instead of multiplying the two factors
    { id: "B", text: "$\\dfrac{2{,}376}{1.23}$" },
    { id: "C", text: "$\\dfrac{2{,}376}{(1.35)(0.88)}$" },
    // distractor: swaps which change was an increase and which was a decrease, using 1 - 0.35 = 0.65 and 1 + 0.12 = 1.12
    { id: "D", text: "$\\dfrac{2{,}376}{(0.65)(1.12)}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** If $n$ is the number of visitors in 2023, then $n(1.35)(0.88)=2{,}376$, so $n=\\frac{2{,}376}{(1.35)(0.88)}$.\n\n**The Full Solution:**\nStep 1: Write each percent change as a multiplier. A $35\\%$ increase multiplies by $1.35$, and a $12\\%$ decrease multiplies by $0.88$.\nStep 2: Let $n$ be the number of visitors in 2023. There were $1.35n$ visitors in 2024 and $0.88(1.35n)$ visitors in 2025, so $(1.35)(0.88)n=2{,}376$.\nStep 3: Divide both sides by $(1.35)(0.88)$: $n=\\frac{2{,}376}{(1.35)(0.88)}$. Check: $(1.35)(0.88)=1.188$ and $\\frac{2{,}376}{1.188}=2{,}000$; then $2{,}000(1.35)=2{,}700$ and $2{,}700(0.88)=2{,}376$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: treats the $12\\%$ decrease as an increase. This expression is about $1{,}571$, and a $35\\%$ increase followed by a $12\\%$ decrease takes $1{,}571$ to only about $1{,}867$.\n* Choice B: combines the changes into a single $23\\%$ increase. Percent changes multiply rather than add; this expression is about $1{,}932$.\n* Choice D: swaps the two changes, using $0.65$ for the increase and $1.12$ for the decrease. This expression is about $3{,}264$.\n\n**Test Day Takeaway:** Write every percent change as a multiplier, multiply the multipliers in order, and divide by that product to recover the starting value. Never add or subtract the percents.",
  skills: ["percent-of-value", "percent-word-problems"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$3, 5, 4, 5, 6, 4, 5, 7, 4, 5, 8$\nWhich statement about the data set shown is true?",
  choices: [
    // distractor: miscounts the frequencies and calls 4 the mode; 4 appears three times but 5 appears four times
    { id: "A", text: "The mode is less than the median." },
    { id: "B", text: "The mode is equal to the median." },
    // distractor: leaves the greatest value, 8, out of the sum, producing a mean of 4.8 that the mode would exceed
    { id: "C", text: "The mode is greater than the mean." },
    // distractor: adds the eleven values as 55 instead of 56, making the mean come out exactly 5
    { id: "D", text: "The mode is equal to the mean." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Mode of a Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The value $5$ appears four times, more than any other value, so the mode is $5$. In order, the sixth of the eleven values is also $5$, so the mode equals the median.\n\n**The Full Solution:**\nStep 1: Count each value: $3$ appears once, $4$ three times, $5$ four times, and $6$, $7$, and $8$ once each. The mode is $5$.\nStep 2: In order, the values are $3$, $4$, $4$, $4$, $5$, $5$, $5$, $5$, $6$, $7$, $8$. With $11$ values, the median is the sixth value, $5$. So the mode equals the median.\nStep 3: Check the comparisons with the mean. The sum is $56$, so the mean is $\\frac{56}{11}\\approx 5.09$, which is greater than the mode. Only the statement in choice B is true ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: takes $4$ as the mode. The value $4$ appears three times, but $5$ appears four times.\n* Choice C: leaves the greatest value, $8$, out of the sum, giving a mean of $\\frac{48}{10}=4.8$, which is less than the mode.\n* Choice D: adds the values as $55$ instead of $56$, which would make the mean exactly $5$. The actual mean, $\\frac{56}{11}$, is not an integer.\n\n**Test Day Takeaway:** Put the values in order first. One ordered list gives the mode by counting repeats and the median by position, and it makes the sum easier to check.",
  skills: ["find-mode"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$y=2x^{2}+bx+5$\n$y=3x+1$\nIn the given system of equations, $b$ is a positive constant. The graphs of the equations in the $xy$-plane intersect at exactly one point. What is the value of $b$?",
  choices: [
    // distractor: adds 3x to the left side instead of subtracting it, giving (b + 3)^2 = 32 and b = -3 + 4 sqrt(2)
    { id: "A", text: "$-3+4\\sqrt{2}$" },
    // distractor: drops the 3x term when combining the equations, using 2x^2 + bx + 4 = 0 and getting b^2 = 32
    { id: "B", text: "$4\\sqrt{2}$" },
    // distractor: uses a = 1 instead of a = 2 in 4ac, giving (b - 3)^2 = 16 and b = 7
    { id: "C", text: "$7$" },
    { id: "D", text: "$3+4\\sqrt{2}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice D is correct.**\n\n**The Fast Way (~45s):** Setting the expressions equal gives $2x^{2}+(b-3)x+4=0$. One intersection point means this equation has exactly one solution, so its discriminant is $0$: $(b-3)^{2}=32$, so $b=3+4\\sqrt{2}$ for positive $b$.\n\n**The Full Solution:**\nStep 1: The graphs intersect where both equations hold. Substitute $3x+1$ for $y$ in the first equation: $3x+1=2x^{2}+bx+5$. Rearranging gives $2x^{2}+(b-3)x+4=0$.\nStep 2: This quadratic has exactly one real solution when its discriminant is $0$: $(b-3)^{2}-4(2)(4)=0$, so $(b-3)^{2}=32$.\nStep 3: Then $b-3=\\pm\\sqrt{32}=\\pm 4\\sqrt{2}$, so $b=3+4\\sqrt{2}$ or $b=3-4\\sqrt{2}$. Since $3-4\\sqrt{2}\\approx -2.66$ is negative, $b=3+4\\sqrt{2}$. Check: with $b=3+4\\sqrt{2}$, the quadratic is $2x^{2}+4\\sqrt{2}x+4=0$, whose discriminant is $32-32=0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3+4\\sqrt{2}$): adds $3x$ instead of subtracting it when combining the equations, which leads to $(b+3)^{2}=32$.\n* Choice B ($4\\sqrt{2}$): drops the $3x$ term entirely, using $2x^{2}+bx+4=0$ and solving $b^{2}=32$.\n* Choice C ($7$): uses $1$ instead of $2$ as the leading coefficient, solving $(b-3)^{2}=16$.\n\n**Test Day Takeaway:** For a line and a parabola with exactly one intersection point, combine the equations into one quadratic, then set its discriminant equal to $0$. Read $a$, $b$, and $c$ from the combined quadratic, not from the original equation.",
  skills: ["tangent-lines", "discriminant-analysis"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "easy",
  band: 3,
  question: "$f(x)=(x-4)^{2}+3$\nThe function $g$ is defined by $g(x)=f(x-6)$. For what value of $x$ does $g(x)$ reach its minimum?",
  correctAnswer: "10",
  explanation: "**SAT Pattern: Function Transformation**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~20s):** $f$ reaches its minimum at $x=4$, and $g(x)=f(x-6)$ shifts the graph of $f$ $6$ units to the right, so $g$ reaches its minimum at $4+6=10$.\n\n**The Full Solution:**\nStep 1: In the form $(x-h)^{2}+k$, the minimum occurs at $x=h$, so $f$ reaches its minimum at $x=4$, where $f(4)=3$.\nStep 2: Substitute $x-6$ for $x$ in $f$: $g(x)=\\big((x-6)-4\\big)^{2}+3=(x-10)^{2}+3$.\nStep 3: This is in the same form with $h=10$, so $g$ reaches its minimum at $x=10$. Check: $g(10)=(10-10)^{2}+3=3$, the same minimum value as $f$ ✓\n\n**Common Mistakes:**\n* $-2$: subtracting the shift from the vertex, $4-6$. Replacing $x$ with $x-6$ moves the graph to the right, not the left.\n* $6$: reporting the size of the shift instead of the location of the minimum.\n* $4$: reporting where $f$ reaches its minimum instead of where $g$ does.\n\n**Test Day Takeaway:** Replacing $x$ with $x-c$ shifts a graph $c$ units to the right, and every point, including the vertex, moves with it. When unsure, substitute and rewrite in vertex form.",
  skills: ["function-transformations", "vertex-form"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The dot plot shows the number of books each of $12$ students read during the summer. A $13$th student, who read $4$ books, is added to the data. Which statement describes how the mean and the median of the $13$ values compare with those of the original $12$ values?",
  diagram: { type: "dotPlot", params: { data: [{ value: 18, count: 1 }, { value: 19, count: 2 }, { value: 20, count: 3 }, { value: 21, count: 2 }, { value: 22, count: 2 }, { value: 23, count: 1 }, { value: 24, count: 1 }], xMin: 16, xMax: 26, xLabel: "Number of books" } },
  choices: [
    { id: "A", text: "Both the mean and the median decrease, and the mean decreases by more." },
    // distractor: assumes the median is dragged as far as the mean by a distant value; the median falls only 0.5, the mean about 1.29
    { id: "B", text: "Both the mean and the median decrease, and the median decreases by more." },
    // distractor: assumes an added value outside the range can never move the median, missing that the middle position shifts from between the 6th and 7th values to the 7th
    { id: "C", text: "The mean decreases, and the median stays the same." },
    // distractor: reverses which measure resists an outlier, treating the median as the sensitive one and the mean as the stable one
    { id: "D", text: "The median decreases, and the mean stays the same." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice A is correct.**\n\n**The Fast Way (~50s):** The new value is far below all the others, so it pulls the mean down from $20.75$ to about $19.46$, while the median moves only from $20.5$ to $20$.\n\n**The Full Solution:**\nStep 1: From the dot plot, the $12$ values are $18$, $19$, $19$, $20$, $20$, $20$, $21$, $21$, $22$, $22$, $23$, $24$. Their sum is $249$, so the mean is $\\frac{249}{12}=20.75$. The median is the average of the sixth and seventh values, $\\frac{20+21}{2}=20.5$.\nStep 2: With the value $4$ added, the sum is $253$ and there are $13$ values, so the new mean is $\\frac{253}{13}\\approx 19.46$, a decrease of about $1.29$.\nStep 3: With $13$ values, the median is the seventh value. In order, the list begins $4$, $18$, $19$, $19$, $20$, $20$, $20$, so the new median is $20$, a decrease of $0.5$. Since $1.29>0.5$, both measures decrease and the mean decreases by more ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: assumes the median moves as much as the mean. The median depends only on position, so it moves just from $20.5$ to $20$.\n* Choice C: assumes a value below all the others cannot change the median. Adding a value changes which position is the middle, and here that lowers the median.\n* Choice D: reverses the roles. The mean uses the size of every value, so it is the measure an extreme value changes most.\n\n**Test Day Takeaway:** An extreme value shifts the mean by its distance from the mean divided by the new count, but shifts the median by at most one position. When choices compare the two changes, compute both.",
  skills: ["calculate-mean", "find-median"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A data set of $30$ values has mean $m$ and standard deviation $s$. A new data set is created by multiplying each value by $\\frac{3}{4}$ and then subtracting $6$ from each product. Which statement about the new data set is true?",
  choices: [
    // distractor: applies the multiplier to the mean but never subtracts the 6, leaving the mean 6 too high
    { id: "A", text: "The mean is $\\dfrac{3}{4}m$ and the standard deviation is $\\dfrac{3}{4}s$." },
    // distractor: assumes multiplying every value leaves the spread unchanged, so the standard deviation stays s instead of becoming three-fourths of s
    { id: "B", text: "The mean is $\\dfrac{3}{4}m-6$ and the standard deviation is $s$." },
    // distractor: subtracts the 6 from the standard deviation as well; subtracting a constant from every value leaves the spread unchanged
    { id: "C", text: "The mean is $\\dfrac{3}{4}m-6$ and the standard deviation is $\\dfrac{3}{4}s-6$." },
    { id: "D", text: "The mean is $\\dfrac{3}{4}m-6$ and the standard deviation is $\\dfrac{3}{4}s$." }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Scaling a Data Set by a Constant**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** Multiplying every value by $\\frac{3}{4}$ multiplies both the mean and the standard deviation by $\\frac{3}{4}$; subtracting $6$ lowers the mean by $6$ and leaves the standard deviation unchanged.\n\n**The Full Solution:**\nStep 1: Multiplying every value by $\\frac{3}{4}$ multiplies the sum by $\\frac{3}{4}$, so the mean becomes $\\frac{3}{4}m$. It also multiplies every distance between values by $\\frac{3}{4}$, so the standard deviation becomes $\\frac{3}{4}s$.\nStep 2: Subtracting $6$ from every value lowers the mean by $6$, to $\\frac{3}{4}m-6$. The distances between values do not change, so the standard deviation stays $\\frac{3}{4}s$.\nStep 3: The new data set has mean $\\frac{3}{4}m-6$ and standard deviation $\\frac{3}{4}s$. Check with two values: $\\{8,12\\}$ has mean $10$, and each value is $2$ from the mean; the new values are $\\{0,3\\}$, with mean $1.5=\\frac{3}{4}(10)-6$, and each is $1.5=\\frac{3}{4}(2)$ from the mean ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: multiplies both measures by $\\frac{3}{4}$ but forgets to subtract $6$ from the mean.\n* Choice B: treats the standard deviation as unaffected by the multiplication. Multiplying every value by $\\frac{3}{4}$ multiplies the spread by $\\frac{3}{4}$.\n* Choice C: subtracts $6$ from the standard deviation too. Subtracting the same number from every value moves the whole data set without changing its spread.\n\n**Test Day Takeaway:** Multiplying every value changes both the center and the spread; adding or subtracting a constant changes only the center. Apply the two rules one step at a time.",
  skills: ["data-analysis"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$\\frac{\\sqrt[3]{x^{8}}\\cdot\\sqrt{x}}{x^{2}}$\nFor $x>0$, the given expression is equivalent to $x^{k}$, where $k$ is a constant. What is the value of $k$?",
  correctAnswer: "7/6",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**The correct answer is $\\frac{7}{6}$.**\n\n**The Fast Way (~40s):** Write the radicals as the exponents $\\frac{8}{3}$ and $\\frac{1}{2}$, then combine: $\\frac{8}{3}+\\frac{1}{2}-2=\\frac{16+3-12}{6}=\\frac{7}{6}$.\n\n**The Full Solution:**\nStep 1: Rewrite each radical with a rational exponent: $\\sqrt[3]{x^{8}}=x^{8/3}$ and $\\sqrt{x}=x^{1/2}$.\nStep 2: Multiply in the numerator by adding exponents: $x^{8/3}\\cdot x^{1/2}=x^{8/3+1/2}=x^{19/6}$.\nStep 3: Divide by $x^{2}$ by subtracting exponents: $x^{19/6-12/6}=x^{7/6}$, so $k=\\frac{7}{6}$. Check at $x=64$: $\\sqrt[3]{64^{8}}=2^{16}$, $\\sqrt{64}=8=2^{3}$, and $64^{2}=2^{12}$, so the expression is $2^{16+3-12}=2^{7}=128$; also $64^{7/6}=2^{7}=128$ ✓\n\n**Common Mistakes:**\n* $\\frac{19}{6}$: combining the numerator correctly but never dividing by $x^{2}$.\n* $\\frac{31}{6}$: adding the denominator's exponent instead of subtracting it.\n* $\\frac{8}{3}$: reading $\\sqrt{x}$ as $x^{2}$, so it cancels the $x^{2}$ in the denominator and leaves only the cube root's exponent.\n\n**Test Day Takeaway:** Rewrite every radical as a rational exponent first. Then multiplication adds exponents and division subtracts them, and the problem becomes one sum of fractions.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$p(x)=3x^{3}+19x^{2}+22x-24$\nThe polynomial $p(x)$ has a factor of $x+4$. Which of the following is also a factor of $p(x)$?",
  choices: [
    { id: "A", text: "$3x-2$" },
    // distractor: flips the sign of the quotient's root, reading the factor of 3x^2 + 7x - 6 as 3x + 2 (root -2/3) instead of 3x - 2 (root 2/3)
    { id: "B", text: "$3x+2$" },
    // distractor: flips the sign of the other quotient factor; the quotient contains x + 3, whose root is -3, not +3
    { id: "C", text: "$x-3$" },
    // distractor: guesses a factor straight from the constant term by pairing -24 as (4)(-6), without performing the division
    { id: "D", text: "$x-6$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Polynomial Factoring with Given Factor**\n\n**Choice A is correct.**\n\n**The Fast Way (~55s):** Dividing $p(x)$ by $x+4$ gives $3x^{2}+7x-6$, which factors as $(3x-2)(x+3)$. So $3x-2$ is a factor.\n\n**The Full Solution:**\nStep 1: Divide $p(x)$ by $x+4$ using synthetic division with $-4$ on the coefficients $3$, $19$, $22$, $-24$: bring down $3$; $19+3(-4)=7$; $22+7(-4)=-6$; $-24+(-6)(-4)=0$. The remainder is $0$, and the quotient is $3x^{2}+7x-6$.\nStep 2: Factor the quotient. Two numbers with product $3(-6)=-18$ and sum $7$ are $9$ and $-2$, so $3x^{2}+9x-2x-6=3x(x+3)-2(x+3)=(3x-2)(x+3)$.\nStep 3: So $p(x)=(x+4)(3x-2)(x+3)$, and the factor among the choices is $3x-2$. Check: $(3x-2)(x+3)=3x^{2}+7x-6$, and $(x+4)(3x^{2}+7x-6)=3x^{3}+19x^{2}+22x-24$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($3x+2$): has the wrong sign. Its zero is $-\\frac{2}{3}$, and $p\\left(-\\frac{2}{3}\\right)=-\\frac{280}{9}\\neq 0$.\n* Choice C ($x-3$): has the wrong sign. The quotient contains $x+3$, and $p(3)=294\\neq 0$.\n* Choice D ($x-6$): pairs $-24$ as $(4)(-6)$ and guesses a matching factor without dividing; $p(6)=1{,}440\\neq 0$.\n\n**Test Day Takeaway:** When one factor is given, divide it out. The quotient is a quadratic you can factor, and a remainder of $0$ confirms the division.",
  skills: ["finding-roots-factoring"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$\\frac{3x+2c}{4}=\\frac{4x-c}{6}$\nIn the given equation, $c$ is a constant. Which of the following is the solution to the given equation?",
  choices: [
    { id: "A", text: "$-8c$" },
    // distractor: multiplies both sides by 12 but distributes the 2 over 4x - c as 8x + 2c, getting 9x + 6c = 8x + 2c and x = -4c
    { id: "B", text: "$-4c$" },
    // distractor: multiplies both sides by 12 but applies the factors 3 and 2 only to the x-terms, getting 9x + 2c = 8x - c and x = -3c
    { id: "C", text: "$-3c$" },
    // distractor: drops both denominators instead of multiplying by their least common multiple, solving 3x + 2c = 4x - c to get x = 3c
    { id: "D", text: "$3c$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Multiply both sides by $12$: $3(3x+2c)=2(4x-c)$, so $9x+6c=8x-2c$ and $x=-8c$.\n\n**The Full Solution:**\nStep 1: The least common multiple of $4$ and $6$ is $12$. Multiplying both sides by $12$ gives $3(3x+2c)=2(4x-c)$.\nStep 2: Distribute to every term: $9x+6c=8x-2c$.\nStep 3: Subtract $8x$ and $6c$ from both sides: $x=-8c$. Check with $c=1$, so $x=-8$: the left side is $\\frac{3(-8)+2}{4}=\\frac{-22}{4}=-5.5$, and the right side is $\\frac{4(-8)-1}{6}=\\frac{-33}{6}=-5.5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-4c$): distributes the $2$ over $4x-c$ as $8x+2c$, losing the negative sign, and solves $9x+6c=8x+2c$.\n* Choice C ($-3c$): multiplies only the $x$-terms by $3$ and $2$, solving $9x+2c=8x-c$.\n* Choice D ($3c$): drops both denominators, solving $3x+2c=4x-c$, which changes the equation.\n\n**Test Day Takeaway:** When an equation contains a constant such as $c$, solve it exactly as you would with numbers: clear the fractions with the least common multiple, distribute to every term, then isolate $x$. Substitute a convenient value of $c$ to check.",
  skills: ["combining-like-terms"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A computer downloads a file at a constant rate of $1{,}536$ kilobits per second. The table shows several unit conversions. At this rate, how many megabytes of data does the computer download in $5$ minutes?",
  questionTable: { headers: ["Quantity", "Equivalent"], rows: [["$1$ kilobit", "$1{,}000$ bits"], ["$1$ byte", "$8$ bits"], ["$1$ megabyte", "$1{,}000{,}000$ bytes"], ["$1$ minute", "$60$ seconds"]] },
  choices: [
    // distractor: divides by 8 a second time after the bits-to-bytes step is already done, turning 57.6 into 7.2
    { id: "A", text: "$7.2$" },
    { id: "B", text: "$57.6$" },
    // distractor: reports 460,800,000 bits as 460.8 megabytes, skipping the division by 8 that converts bits to bytes
    { id: "C", text: "$460.8$" },
    // distractor: multiplies by 8 instead of dividing when converting bits to bytes, giving 3,686,400,000 bytes
    { id: "D", text: "$3{,}686.4$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (~50s):** $1{,}536$ kilobits per second is $1{,}536{,}000$ bits per second. In $300$ seconds that is $460{,}800{,}000$ bits, which is $57{,}600{,}000$ bytes, or $57.6$ megabytes.\n\n**The Full Solution:**\nStep 1: Convert the rate to bits per second: $1{,}536\\times 1{,}000=1{,}536{,}000$ bits per second.\nStep 2: Convert the time to seconds and multiply: $5$ minutes is $5\\times 60=300$ seconds, so the computer downloads $1{,}536{,}000\\times 300=460{,}800{,}000$ bits.\nStep 3: Convert bits to megabytes: $460{,}800{,}000\\div 8=57{,}600{,}000$ bytes, and $57{,}600{,}000\\div 1{,}000{,}000=57.6$ megabytes. Check: $57.6\\times 1{,}000{,}000\\times 8=460{,}800{,}000$ bits, and $460{,}800{,}000\\div 300=1{,}536{,}000$ bits per second ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7.2$): divides by $8$ a second time after the count is already in bytes.\n* Choice C ($460.8$): skips the division by $8$, treating $460{,}800{,}000$ bits as if they were bytes.\n* Choice D ($3{,}686.4$): multiplies by $8$ instead of dividing when converting bits to bytes. A byte is larger than a bit, so there must be fewer bytes than bits.\n\n**Test Day Takeaway:** Write out the chain of conversions so the units cancel one at a time. Before each step, ask whether the number should get larger or smaller.",
  skills: ["unit-conversion"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The height, in feet, of an arch above the ground is modeled by $h(x)=-0.05x^{2}+2x$, where $x$ is the horizontal distance, in feet, from one end of the arch and $0\\le x\\le 40$. For which values of $x$ is the height of the arch at least $15$ feet?",
  choices: [
    // distractor: reverses the inequality and takes the interval before the height first reaches 15 feet, where the arch is lower than 15 feet
    { id: "A", text: "$0\\le x\\le 10$" },
    // distractor: stops at the vertex x = 20, the highest point, as if the height dropped below 15 feet right after the maximum
    { id: "B", text: "$10\\le x\\le 20$" },
    { id: "C", text: "$10\\le x\\le 30$" },
    // distractor: takes the interval after the second crossing at x = 30, where the height has already fallen below 15 feet
    { id: "D", text: "$30\\le x\\le 40$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~50s):** Solve $-0.05x^{2}+2x=15$: multiplying by $-20$ gives $x^{2}-40x+300=0$, so $x=10$ or $x=30$. The parabola opens downward, so the height is at least $15$ feet between those values.\n\n**The Full Solution:**\nStep 1: Write the condition as an inequality: $-0.05x^{2}+2x\\ge 15$. Multiply both sides by $-20$ and reverse the inequality sign: $x^{2}-40x\\le -300$, or $x^{2}-40x+300\\le 0$.\nStep 2: Factor: $x^{2}-40x+300=(x-10)(x-30)$, so the boundary values are $x=10$ and $x=30$.\nStep 3: The expression $(x-10)(x-30)$ is less than or equal to $0$ only between its zeros, so $10\\le x\\le 30$, which lies within $0\\le x\\le 40$. Check: $h(20)=-0.05(400)+40=20$, which is at least $15$, and $h(5)=-1.25+10=8.75$, which is not ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0\\le x\\le 10$): keeps the wrong side of the first boundary. At $x=5$, the height is only $8.75$ feet.\n* Choice B ($10\\le x\\le 20$): stops at the vertex, $x=20$. That is where the arch is highest; the height stays at least $15$ feet until $x=30$.\n* Choice D ($30\\le x\\le 40$): takes the interval after the second boundary. At $x=35$, the height is $8.75$ feet.\n\n**Test Day Takeaway:** Solve the related equation to find the boundary values, then use the direction the parabola opens to choose the interval. Test one value inside the interval to confirm.",
  skills: ["quadratics"]
}
      ]
    }
  ]
};

export default practiceTest5;
