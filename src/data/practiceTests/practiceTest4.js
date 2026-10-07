// Practice Test 4 - SAT Math
// v2 freshness rebuild (2026-09-07): every slot re-patterned and re-authored against the seen-corpus gate — docs/TEST_RECREATION_V2_SPEC.md
// 2 Modules, 22 questions each (44 total)
// Official-calibration recreation (2026-09-01): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md).
// Slot metadata (id/type/difficulty/band/skills/pattern) frozen from the prior
// blueprint: M1 5E/9M/8H, domains 7/6/5/4. M2 3E/6M/13H with the wavy flow —
// easies at Q2/Q6/Q15 (Q15 the mid-module breather), mediums at
// Q1/Q3/Q4/Q8/Q9/Q13, hards at Q5/Q7/Q10-12/Q14/Q16-22.
// Figure density lifted to official ~20%: M1 carries 4 diagram items
// (Q8 scatterplot, Q12/Q22 two-way tables, Q14 data table); M2 carries 4
// (Q1 table of values, Q15 dot plot, Q16 histogram, Q17 right triangle).
// Numeric MC choices sorted ascending (official convention).

export const practiceTest4 = {
  id: "practice-test-4",
  title: "Practice Test 4",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
// Practice Test 4 — Math Module 1 (22 questions)
// Domain mix: 7 Algebra / 6 AdvMath / 5 PSDA / 4 Geo-Trig.

// ===== EASY (Q1–Q5) =====

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The table shows the total rainfall, in centimeters, at a weather station during a storm in which rain fell at a constant rate. At this rate, what was the total rainfall, in centimeters, after $12$ hours?",
  diagram: { type: "dataTable", params: { headers: ["Time (hours)", "Total rainfall (centimeters)"], rows: [["2", "1.4"], ["5", "3.5"], ["8", "5.6"]] } },
  choices: [
    { id: "A", text: "$8.4$" },
    // distractor: adds the 4 extra hours to the 8-hour total of 5.6 centimeters, as if each hour added 1 centimeter
    { id: "B", text: "$9.6$" },
    // distractor: treats 1.4 centimeters, the rainfall in 2 hours, as the rainfall per hour, giving 1.4(12)
    { id: "C", text: "$16.8$" },
    // distractor: multiplies the 8-hour total, 5.6 centimeters, by 12 hours
    { id: "D", text: "$67.2$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The rain fell at $\\frac{1.4}{2} = 0.7$ centimeter per hour, so after $12$ hours the total was $0.7(12) = 8.4$ centimeters.\n\n**The Full Solution:**\nStep 1: Find the rate from any row of the table: $\\frac{1.4}{2} = 0.7$ centimeter per hour. The other rows agree: $\\frac{3.5}{5} = 0.7$ and $\\frac{5.6}{8} = 0.7$.\nStep 2: The total rainfall is the rate times the time, so after $12$ hours it is $0.7(12)$ centimeters.\nStep 3: Multiply: $0.7(12) = 8.4$ centimeters. Check: $12$ hours is $1.5$ times $8$ hours, and $1.5(5.6) = 8.4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($9.6$): adds $4$ to the 8-hour total of $5.6$, as if each extra hour added $1$ centimeter. The rate is $0.7$ centimeter per hour.\n* Choice C ($16.8$): treats $1.4$ centimeters as the rainfall per hour, but $1.4$ centimeters fell in $2$ hours.\n* Choice D ($67.2$): multiplies the 8-hour total by $12$; the table entries are totals, not hourly amounts.\n\n**Test Day Takeaway:** Find the unit rate first, then scale it to the requested time; a second row of the table is a free check on the rate.",
  skills: ["unit-conversion"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "For the linear function $f$, $f(5) = 3.2$ and $f(13) = 9.6$. What is the slope of the graph of $y = f(x)$ in the $xy$-plane?",
  choices: [
    // distractor: subtracts the outputs in one order and the inputs in the other, (3.2 - 9.6)/(13 - 5) = -0.8
    { id: "A", text: "$-0.8$" },
    { id: "B", text: "$0.8$" },
    // distractor: divides the change in x by the change in y, 8/6.4 = 1.25
    { id: "C", text: "$1.25$" },
    // distractor: reports the change in the outputs, 9.6 - 3.2 = 6.4, without dividing by the change in x
    { id: "D", text: "$6.4$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The graph passes through $(5, 3.2)$ and $(13, 9.6)$, so the slope is $\\frac{9.6 - 3.2}{13 - 5} = \\frac{6.4}{8} = 0.8$.\n\n**The Full Solution:**\nStep 1: Write the given values as points on the graph: $(5, 3.2)$ and $(13, 9.6)$.\nStep 2: Find the change in $y$ and the change in $x$: $9.6 - 3.2 = 6.4$ and $13 - 5 = 8$.\nStep 3: Divide: slope $= \\frac{6.4}{8} = 0.8$. Check: starting at $f(5) = 3.2$ and adding $0.8$ for each of the $8$ steps gives $3.2 + 8(0.8) = 9.6 = f(13)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-0.8$): subtracts the $y$-values in one order and the $x$-values in the other, which flips the sign.\n* Choice C ($1.25$): divides the change in $x$ by the change in $y$; slope is rise over run.\n* Choice D ($6.4$): gives the change in $y$ alone and never divides by the change in $x$.\n\n**Test Day Takeaway:** Slope is $\\frac{y_{2} - y_{1}}{x_{2} - x_{1}}$ with both differences taken in the same order; since $f$ increases from $3.2$ to $9.6$, the slope must be positive.",
  skills: ["slope-from-points"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A community garden had $40$ members in 2019. The number of members in 2024 was $15\\%$ greater than the number in 2019. How many members did the community garden have in 2024?",
  choices: [
    // distractor: finds the increase, 15% of 40, and stops before adding it to 40
    { id: "A", text: "$6$" },
    // distractor: subtracts the 6-member increase from 40 instead of adding it
    { id: "B", text: "$34$" },
    { id: "C", text: "$46$" },
    // distractor: adds 15 members to 40 instead of 15% of 40
    { id: "D", text: "$55$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Percent Increase**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** A $15\\%$ increase multiplies the original by $1.15$: $40(1.15) = 46$.\n\n**The Full Solution:**\nStep 1: Find $15\\%$ of the 2019 count: $0.15(40) = 6$.\nStep 2: The 2024 count is greater by this amount, so add it to the 2019 count.\nStep 3: $40 + 6 = 46$ members. Check: $\\frac{46 - 40}{40} = \\frac{6}{40} = 0.15$, which is $15\\%$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): this is the increase, $15\\%$ of $40$, not the number of members in 2024.\n* Choice B ($34$): subtracts the increase; the 2024 count is greater than the 2019 count.\n* Choice D ($55$): adds $15$ members instead of $15\\%$ of $40$.\n\n**Test Day Takeaway:** \"$p\\%$ greater than\" means multiply by $1 + \\frac{p}{100}$; a quick check is that the new value minus the old, divided by the old, gives back the percent.",
  skills: ["percent-of-value", "percent-change"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$D = 185w + 640$\nThe given equation models the total distance $D$, in kilometers, a cyclist has ridden $w$ weeks after starting a training plan. How many kilometers had the cyclist ridden when the plan started?",
  choices: [
    // distractor: gives the slope, the distance added each week, instead of the value at w = 0
    { id: "A", text: "$185$" },
    // distractor: subtracts the weekly distance from the constant, 640 - 185 = 455, as if the plan started one week earlier
    { id: "B", text: "$455$" },
    { id: "C", text: "$640$" },
    // distractor: substitutes w = 1, giving the total after one week, 185 + 640 = 825
    { id: "D", text: "$825$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Slope-Intercept Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The plan starts at $w = 0$, and $D = 185(0) + 640 = 640$ kilometers.\n\n**The Full Solution:**\nStep 1: The start of the plan corresponds to $w = 0$ weeks.\nStep 2: Substitute $w = 0$ into the equation: $D = 185(0) + 640$.\nStep 3: Simplify: $D = 640$ kilometers. Check: $640$ is the constant term, the $D$-intercept of the model, which is the value before any weeks have passed ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($185$): this is the slope, the number of kilometers added each week, not the starting total.\n* Choice B ($455$): subtracts one week of riding from $640$, which would be the total one week before the plan started.\n* Choice D ($825$): substitutes $w = 1$; this is the total after the first week.\n\n**Test Day Takeaway:** In a linear model $y = mx + b$, the value when $x = 0$ is the constant $b$; the slope $m$ is the change for each one-unit increase in $x$.",
  skills: ["slope-intercept-form"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Which expression is equivalent to $(x - 6)^{2} + 5$?",
  choices: [
    // distractor: squares each term inside the parentheses, writing (x - 6)^2 as x^2 + 36 and leaving out the middle term
    { id: "A", text: "$x^{2} + 41$" },
    // distractor: forgets to double the middle term, writing -6x instead of -12x
    { id: "B", text: "$x^{2} - 6x + 41$" },
    // distractor: writes the constant term of (x - 6)^2 as -36 instead of +36
    { id: "C", text: "$x^{2} - 12x - 31$" },
    { id: "D", text: "$x^{2} - 12x + 41$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** $(x - 6)^{2} = x^{2} - 12x + 36$, so $(x - 6)^{2} + 5 = x^{2} - 12x + 41$.\n\n**The Full Solution:**\nStep 1: Write the square as a product: $(x - 6)^{2} = (x - 6)(x - 6)$.\nStep 2: Multiply: $x^{2} - 6x - 6x + 36 = x^{2} - 12x + 36$.\nStep 3: Add $5$: $x^{2} - 12x + 36 + 5 = x^{2} - 12x + 41$. Check at $x = 1$: the original gives $(-5)^{2} + 5 = 30$, and the answer gives $1 - 12 + 41 = 30$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^{2} + 41$): squares each term separately. $(x - 6)^{2}$ also has the middle term $-12x$.\n* Choice B ($x^{2} - 6x + 41$): finds only one of the two $-6x$ terms; the middle term is $2(-6x) = -12x$.\n* Choice C ($x^{2} - 12x - 31$): uses $-36$ for the last term, but $(-6)(-6) = +36$.\n\n**Test Day Takeaway:** $(x - a)^{2} = x^{2} - 2ax + a^{2}$: the middle term is doubled and the last term is always positive. Test your answer at an easy value such as $x = 1$.",
  skills: ["distributive-property", "converting-quadratic-forms"]
},

// ===== MEDIUM (Q6–Q14) =====

{
  id: 6,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "In the right triangle shown, what is the area, in square units, of the triangle?",
  diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [3, 0], [3, 6]], sideLabels: ["3√2", "", "3√10"], rightAngleVertex: 1 } },
  correctAnswer: "18",
  explanation: "**SAT Pattern: Right Triangle Area with Surds**\n\n**The correct answer is $18$.**\n\n**The Fast Way (~40s):** The missing leg is $\\sqrt{(3\\sqrt{10})^{2} - (3\\sqrt{2})^{2}} = \\sqrt{90 - 18} = \\sqrt{72} = 6\\sqrt{2}$, so the area is $\\frac{1}{2}(3\\sqrt{2})(6\\sqrt{2}) = 18$.\n\n**The Full Solution:**\nStep 1: The side labeled $3\\sqrt{10}$ is opposite the right angle, so it is the hypotenuse; the side labeled $3\\sqrt{2}$ is a leg.\nStep 2: Find the other leg with the Pythagorean theorem: $(3\\sqrt{2})^{2} + b^{2} = (3\\sqrt{10})^{2}$, so $18 + b^{2} = 90$, $b^{2} = 72$, and $b = 6\\sqrt{2}$.\nStep 3: The legs are the base and height: area $= \\frac{1}{2}(3\\sqrt{2})(6\\sqrt{2}) = \\frac{1}{2}(18)(2) = 18$ square units. Check: $18 + 72 = 90$, so the sides $3\\sqrt{2}$, $6\\sqrt{2}$, and $3\\sqrt{10}$ form a right triangle ✓\n\n**Common Mistakes:**\n* $36$: multiplies the two legs but forgets the factor of $\\frac{1}{2}$.\n* $9\\sqrt{5} \\approx 20.12$: uses the hypotenuse as the height, $\\frac{1}{2}(3\\sqrt{2})(3\\sqrt{10})$; the height must be the leg perpendicular to the base.\n* $9\\sqrt{6} \\approx 22.05$: adds the squares instead of subtracting, getting a third side of $\\sqrt{108} = 6\\sqrt{3}$.\n\n**Test Day Takeaway:** For a right triangle's area, the base and height are the two legs; when the hypotenuse is given, subtract squares to find the missing leg.",
  skills: ["triangle-area"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The mean of $6$ numbers is $44$. Five of the numbers are $41$, $45$, $38$, $47$, and $44$. What is the sixth number?",
  choices: [
    // distractor: assumes the sixth number must equal the mean of 44
    { id: "A", text: "$44$" },
    // distractor: finds that the five numbers average 43, 1 below 44, and adds that 1 to 44 only once
    { id: "B", text: "$45$" },
    { id: "C", text: "$49$" },
    // distractor: adds 1 for each of the six numbers, 44 + 6 = 50, instead of for the five given numbers
    { id: "D", text: "$50$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Mean from List**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Six numbers with mean $44$ total $6(44) = 264$; the five given numbers total $215$, so the sixth is $264 - 215 = 49$.\n\n**The Full Solution:**\nStep 1: Use the mean to find the total of all six numbers: $6(44) = 264$.\nStep 2: Add the five given numbers: $41 + 45 + 38 + 47 + 44 = 215$.\nStep 3: Subtract: the sixth number is $264 - 215 = 49$. Check: $\\frac{215 + 49}{6} = \\frac{264}{6} = 44$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($44$): assumes the missing number equals the mean, but the five given numbers average only $43$; a sixth number of $44$ gives a mean of $\\frac{259}{6} \\approx 43.2$, not $44$.\n* Choice B ($45$): notices that the five numbers average $43$, which is $1$ below $44$, but makes up that $1$ only once instead of once for each of the five numbers.\n* Choice D ($50$): makes up the shortfall of $1$ six times; only the five given numbers fall short.\n\n**Test Day Takeaway:** Convert a target mean into a target total, then subtract what you already have; the difference is the missing value.",
  skills: ["calculate-mean"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A club has $150$ juniors and $100$ seniors. Of the juniors, $32$ play an instrument. If one of the $250$ members is selected at random, the probability of selecting a member who plays an instrument is $0.28$. How many seniors play an instrument?",
  choices: [
    // distractor: applies the probability 0.28 to the 100 seniors alone, 0.28(100) = 28
    { id: "A", text: "$28$" },
    { id: "B", text: "$38$" },
    // distractor: applies the probability 0.28 to the 150 juniors, 0.28(150) = 42
    { id: "C", text: "$42$" },
    // distractor: finds the total number of members who play an instrument, 0.28(250) = 70, and does not subtract the 32 juniors
    { id: "D", text: "$70$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $0.28(250) = 70$ members play an instrument, and $32$ of them are juniors, so $70 - 32 = 38$ are seniors.\n\n**The Full Solution:**\nStep 1: The probability $0.28$ refers to all $250$ members, so the number who play an instrument is $0.28(250) = 70$.\nStep 2: Of these $70$ members, $32$ are juniors.\nStep 3: The rest are seniors: $70 - 32 = 38$. Check: $\\frac{32 + 38}{250} = \\frac{70}{250} = 0.28$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($28$): applies $0.28$ to the $100$ seniors, but the probability is for a member selected from all $250$.\n* Choice C ($42$): applies $0.28$ to the $150$ juniors, a group whose count of $32$ is already given.\n* Choice D ($70$): this is the number of all members who play an instrument; $32$ of them are juniors.\n\n**Test Day Takeaway:** A probability times the size of the group it was taken from gives a count; check which group the probability refers to before multiplying.",
  skills: ["probability-basics"]
},
{
  id: 9,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "Line $k$ is defined by $ax + 6y = 18$, where $a$ is a constant. In the $xy$-plane, line $k$ is perpendicular to a line with slope $\\frac{3}{4}$. What is the value of $a$?",
  correctAnswer: "8",
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~25s):** Line $k$ has slope $-\\frac{a}{6}$, and a line perpendicular to slope $\\frac{3}{4}$ has slope $-\\frac{4}{3}$, so $-\\frac{a}{6} = -\\frac{4}{3}$ and $a = 8$.\n\n**The Full Solution:**\nStep 1: Solve $ax + 6y = 18$ for $y$: $y = -\\frac{a}{6}x + 3$, so line $k$ has slope $-\\frac{a}{6}$.\nStep 2: Perpendicular lines have slopes that are negative reciprocals. The negative reciprocal of $\\frac{3}{4}$ is $-\\frac{4}{3}$.\nStep 3: Set $-\\frac{a}{6} = -\\frac{4}{3}$, so $a = 6\\left(\\frac{4}{3}\\right) = 8$. Check: $8x + 6y = 18$ has slope $-\\frac{8}{6} = -\\frac{4}{3}$, and $\\left(-\\frac{4}{3}\\right)\\left(\\frac{3}{4}\\right) = -1$ ✓\n\n**Common Mistakes:**\n* $-8$: reads the slope of line $k$ as $\\frac{a}{6}$ instead of $-\\frac{a}{6}$.\n* $-4.5$: sets the slopes equal, $-\\frac{a}{6} = \\frac{3}{4}$, which makes the lines parallel.\n* $4.5$: takes the opposite of $\\frac{3}{4}$ without inverting, solving $-\\frac{a}{6} = -\\frac{3}{4}$.\n\n**Test Day Takeaway:** Rewrite a standard-form line in slope-intercept form before comparing slopes; perpendicular slopes multiply to $-1$.",
  skills: ["perpendicular-negative-reciprocal"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "$9x - 4x + c = 45$\nIn the given equation, $c$ is a constant. If $x = 7$ is the solution to the given equation, what is the value of $c$?",
  correctAnswer: "10",
  explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~15s):** Combine like terms to get $5x + c = 45$; with $x = 7$, $35 + c = 45$, so $c = 10$.\n\n**The Full Solution:**\nStep 1: Combine like terms on the left: $9x - 4x = 5x$, so the equation is $5x + c = 45$.\nStep 2: Substitute the solution $x = 7$: $5(7) + c = 45$, or $35 + c = 45$.\nStep 3: Subtract $35$ from each side: $c = 10$. Check: $9(7) - 4(7) + 10 = 63 - 28 + 10 = 45$ ✓\n\n**Common Mistakes:**\n* $-46$: adds the $x$-terms instead of subtracting, $13x$, giving $91 + c = 45$.\n* $-18$: ignores the $-4x$ term, giving $63 + c = 45$.\n* $80$: adds $35$ to $45$ instead of subtracting it.\n\n**Test Day Takeaway:** Simplify each side before substituting a known solution; then the constant is whatever is left to make the two sides equal.",
  skills: ["combining-like-terms"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In a trivia game, a player earns the number of points shown in the table for each question answered correctly. A player answered $24$ questions correctly and earned a total of $100$ points. How many hard questions did the player answer correctly?",
  questionTable: { headers: ["Question type", "Points per correct answer"], rows: [["Easy", "$3$"], ["Hard", "$5$"]] },
  choices: [
    // distractor: solves the system correctly but reports the 10 easy questions instead of the hard questions
    { id: "A", text: "$10$" },
    { id: "B", text: "$14$" },
    // distractor: divides all 100 points by 5, as if every correct answer were a hard question
    { id: "C", text: "$20$" },
    // distractor: subtracts 3(24) = 72 from 100 and reports the remainder 28 without dividing by the 2-point difference
    { id: "D", text: "$28$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** If all $24$ answers were easy, the player would have $3(24) = 72$ points; each hard answer adds $2$ more, so there were $\\frac{100 - 72}{2} = 14$ hard answers.\n\n**The Full Solution:**\nStep 1: Let $e$ be the number of easy questions and $h$ the number of hard questions answered correctly. Then $e + h = 24$ and $3e + 5h = 100$.\nStep 2: Substitute $e = 24 - h$ into the second equation: $3(24 - h) + 5h = 100$, so $72 + 2h = 100$.\nStep 3: Solve: $2h = 28$, so $h = 14$ (and $e = 10$). Check: $14 + 10 = 24$ and $5(14) + 3(10) = 70 + 30 = 100$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): this is the number of easy questions, the other variable in the system.\n* Choice C ($20$): divides all $100$ points by $5$, as if every correct answer were worth $5$ points.\n* Choice D ($28$): finds the $28$ extra points but does not divide by the $2$ extra points each hard question is worth.\n\n**Test Day Takeaway:** For a count-and-total problem, write one equation for the count and one for the total, substitute, and answer for the variable the question names.",
  skills: ["substitution-method"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The numbers of red, blue, and green marbles in a bag are in the ratio $5 : 3 : k$. The bag contains $448$ marbles, and $160$ of them are red. What is the value of $k$?",
  choices: [
    // distractor: copies the blue term of the ratio instead of solving for the green term
    { id: "A", text: "$3$" },
    { id: "B", text: "$6$" },
    // distractor: computes (448 - 160)/32 = 9, the blue and green parts together, and forgets to remove the 3 blue parts
    { id: "C", text: "$9$" },
    // distractor: reports the total number of parts, 448/32 = 14, instead of the green part k
    { id: "D", text: "$14$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Each part is $\\frac{160}{5} = 32$ marbles, so the bag holds $\\frac{448}{32} = 14$ parts, and $k = 14 - 5 - 3 = 6$.\n\n**The Full Solution:**\nStep 1: The $160$ red marbles are $5$ parts of the ratio, so one part is $\\frac{160}{5} = 32$ marbles.\nStep 2: The total of $448$ marbles is $\\frac{448}{32} = 14$ parts.\nStep 3: Red and blue use $5 + 3 = 8$ parts, so green uses $k = 14 - 8 = 6$ parts. Check: $32(5) + 32(3) + 32(6) = 160 + 96 + 192 = 448$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): copies the blue term of the ratio rather than solving for $k$.\n* Choice C ($9$): counts the $288$ non-red marbles as $9$ parts but forgets that $3$ of those parts are blue.\n* Choice D ($14$): this is the total number of parts in the ratio, $5 + 3 + k$, not $k$ alone.\n\n**Test Day Takeaway:** Use the known category to find the size of one part, then convert the total into parts; the unknown term is what remains.",
  skills: ["word-problem-to-equation"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$x^{2} + y^{2} - 12x + 10y + c = 0$\nIn the given equation, $c$ is a constant. The graph of the equation in the $xy$-plane is a circle with area $64\\pi$. What is the value of $c$?",
  choices: [
    { id: "A", text: "$-3$" },
    // distractor: solves 61 - c = 64 but reports the opposite sign, 3 instead of -3
    { id: "B", text: "$3$" },
    // distractor: sets 61 - c equal to the radius 8 instead of the squared radius 64
    { id: "C", text: "$53$" },
    // distractor: rearranges 61 - c = 64 as c = 61 + 64 = 125 instead of c = 61 - 64
    { id: "D", text: "$125$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** Completing the square gives $(x - 6)^{2} + (y + 5)^{2} = 61 - c$; an area of $64\\pi$ means $r^{2} = 64$, so $61 - c = 64$ and $c = -3$.\n\n**The Full Solution:**\nStep 1: Group and complete the square: $x^{2} - 12x + 36 + y^{2} + 10y + 25 = -c + 36 + 25$, so $(x - 6)^{2} + (y + 5)^{2} = 61 - c$.\nStep 2: The area of a circle is $\\pi r^{2}$, so $\\pi r^{2} = 64\\pi$ gives $r^{2} = 64$.\nStep 3: Set $61 - c = 64$, so $c = -3$. Check: with $c = -3$ the equation becomes $(x - 6)^{2} + (y + 5)^{2} = 64$, a circle of radius $8$ and area $64\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): solves $61 - c = 64$ but drops the negative sign.\n* Choice C ($53$): sets $61 - c$ equal to the radius $8$; the right side of the standard form is $r^{2}$.\n* Choice D ($125$): rearranges $61 - c = 64$ as $c = 61 + 64$ instead of $c = 61 - 64$.\n\n**Test Day Takeaway:** Complete the square to reach $(x - h)^{2} + (y - k)^{2} = r^{2}$; the number on the right is the radius squared, which is also the area divided by $\\pi$.",
  skills: ["circle-equation", "completing-square-circles"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$2x^{2} + bx + 50 = 0$\nIn the given equation, $b$ is a positive constant. If the equation has exactly one real solution, what is the value of $b$?",
  choices: [
    // distractor: reports the size of the repeated solution, x = -5, instead of b
    { id: "A", text: "$5$" },
    // distractor: leaves out the factor of 4 in the discriminant, solving b^2 = 2(50) = 100
    { id: "B", text: "$10$" },
    { id: "C", text: "$20$" },
    // distractor: finds b^2 = 400 and does not take the square root
    { id: "D", text: "$400$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Exactly one real solution means the discriminant is $0$: $b^{2} - 4(2)(50) = 0$, so $b^{2} = 400$ and, since $b$ is positive, $b = 20$.\n\n**The Full Solution:**\nStep 1: A quadratic equation has exactly one real solution when its discriminant, $b^{2} - 4ac$, equals $0$.\nStep 2: Here $a = 2$ and $c = 50$, so $b^{2} - 4(2)(50) = 0$, or $b^{2} = 400$.\nStep 3: Since $b$ is positive, $b = 20$. Check: $2x^{2} + 20x + 50 = 2(x^{2} + 10x + 25) = 2(x + 5)^{2}$, which equals $0$ only when $x = -5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): this is the size of the one solution, $x = -5$, not the value of $b$.\n* Choice B ($10$): leaves out the $4$ in $b^{2} - 4ac$, solving $b^{2} = 100$.\n* Choice D ($400$): this is $b^{2}$; the square root still has to be taken.\n\n**Test Day Takeaway:** Exactly one real solution means $b^{2} - 4ac = 0$; solve for the constant, then use the sign condition in the stem to choose the root.",
  skills: ["discriminant-analysis"]
},

// ===== HARD (Q15–Q22) =====

{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The graph of $y = 2x^{2} - 12x + c$, where $c$ is a constant, has $x$-intercepts at $(r, 0)$ and $(s, 0)$ in the $xy$-plane. If $r - s = 4$, what is the value of $c$?",
  correctAnswer: "10",
  explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~40s):** The sum of the zeros is $\\frac{12}{2} = 6$; with $r - s = 4$, the zeros are $5$ and $1$, and $c = 2(5)(1) = 10$.\n\n**The Full Solution:**\nStep 1: The $x$-intercepts are the solutions of $2x^{2} - 12x + c = 0$. The sum of the solutions is $-\\frac{-12}{2} = 6$, so $r + s = 6$.\nStep 2: Solve $r + s = 6$ and $r - s = 4$: adding gives $2r = 10$, so $r = 5$ and $s = 1$.\nStep 3: The product of the solutions is $\\frac{c}{2}$, so $\\frac{c}{2} = 5(1) = 5$ and $c = 10$. Check: $2x^{2} - 12x + 10 = 2(x - 1)(x - 5)$, whose zeros $5$ and $1$ differ by $4$ ✓\n\n**Common Mistakes:**\n* $5$: finds the product of the zeros, $rs = 5$, but forgets that the product equals $\\frac{c}{2}$, not $c$.\n* $64$: takes the sum of the zeros as $12$ instead of $\\frac{12}{2} = 6$, getting zeros $8$ and $4$ and $c = 2(32) = 64$.\n* $-10$: gives the product of the zeros the sign of the sum formula, $rs = -\\frac{c}{2}$, so $c = -10$.\n\n**Test Day Takeaway:** For $ax^{2} + bx + c$, the zeros have sum $-\\frac{b}{a}$ and product $\\frac{c}{a}$; a difference of zeros plus the sum pins down both zeros.",
  skills: ["quadratics"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For the function $f$, the table shows three values of $x$ and their corresponding values of $f(x)$. The function is defined by $f(x) = 6x^{2} + bx + c$, where $b$ and $c$ are constants. Which expression is equivalent to $f(x)$?",
  questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$0$", "$102$"], ["$1$", "$60$"], ["$2$", "$30$"]] },
  choices: [
    // distractor: uses the wrong sign inside the square, writing x + 4 for a vertex at x = 4
    { id: "A", text: "$6(x + 4)^{2} + 6$" },
    { id: "B", text: "$6(x - 4)^{2} + 6$" },
    // distractor: takes the least value in the table, f(2) = 30, as the constant k instead of completing the square
    { id: "C", text: "$6(x - 4)^{2} + 30$" },
    // distractor: subtracts 16 rather than 6(16) = 96 when completing the square, getting 102 - 16 = 86
    { id: "D", text: "$6(x - 4)^{2} + 86$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Quadratic — Completing the Square**\n\n**Choice B is correct.**\n\n**The Fast Way (~50s):** $f(0) = 102$ gives $c = 102$, and $f(1) = 6 + b + 102 = 60$ gives $b = -48$; then $6x^{2} - 48x + 102 = 6(x - 4)^{2} - 96 + 102 = 6(x - 4)^{2} + 6$.\n\n**The Full Solution:**\nStep 1: Use the table to find the constants. $f(0) = c = 102$. Then $f(1) = 6 + b + 102 = 60$, so $b = -48$ and $f(x) = 6x^{2} - 48x + 102$.\nStep 2: Factor $6$ from the variable terms and complete the square: $6(x^{2} - 8x) + 102 = 6\\left[(x - 4)^{2} - 16\\right] + 102$.\nStep 3: Simplify: $6(x - 4)^{2} - 96 + 102 = 6(x - 4)^{2} + 6$. Check with the table: at $x = 2$, $6(2 - 4)^{2} + 6 = 24 + 6 = 30$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6(x + 4)^{2} + 6$): has the wrong sign inside the square; at $x = 0$ it gives $102$, but at $x = 1$ it gives $156$, not $60$.\n* Choice C ($6(x - 4)^{2} + 30$): uses the least value in the table, $30$, as the minimum, but the table stops at $x = 2$ and the minimum occurs at $x = 4$.\n* Choice D ($6(x - 4)^{2} + 86$): subtracts $16$ instead of $6(16) = 96$; the $16$ inside the brackets is multiplied by $6$ on the way out.\n\n**Test Day Takeaway:** Find the constants from the table first ($f(0)$ is always $c$), then complete the square; test the finished form against a table row you did not use.",
  skills: ["quadratics"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$y = -(x - 5)^{2} + 12$\nThe graph of the given equation in the $xy$-plane is shifted $a$ units to the left and $3$ units down to produce the graph of $y = g(x)$. The vertex of the graph of $g$ lies on the line $y = x + 13$. What is the value of $a$?",
  correctAnswer: "9",
  explanation: "**SAT Pattern: Function Transformation**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~35s):** The vertex moves from $(5, 12)$ to $(5 - a, 9)$, and $9 = (5 - a) + 13$ gives $a = 9$.\n\n**The Full Solution:**\nStep 1: The vertex of $y = -(x - 5)^{2} + 12$ is $(5, 12)$.\nStep 2: Shifting left $a$ units subtracts $a$ from the $x$-coordinate, and shifting down $3$ units subtracts $3$ from the $y$-coordinate, so the vertex of the graph of $g$ is $(5 - a, 9)$.\nStep 3: This point lies on $y = x + 13$, so $9 = (5 - a) + 13$, which gives $a = 9$. Check: the vertex is $(-4, 9)$, and $-4 + 13 = 9$ ✓\n\n**Common Mistakes:**\n* $6$: forgets the downward shift and uses the $y$-coordinate $12$, solving $12 = (5 - a) + 13$.\n* $-9$: shifts the vertex to the right, using $(5 + a, 9)$.\n* $3$: shifts the graph up instead of down, using a vertex $y$-coordinate of $15$ and solving $15 = (5 - a) + 13$.\n\n**Test Day Takeaway:** Track the vertex through a translation: left and right change $x$, up and down change $y$; then substitute the new vertex into the given condition.",
  skills: ["function-transformations", "vertex-form"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The perimeter of a right triangle is $90$ inches, and the sine of its smallest angle is $\\frac{5}{13}$. What is the length, in inches, of the shortest side of the triangle?",
  choices: [
    { id: "A", text: "$15$" },
    // distractor: divides the perimeter by 5 + 13 = 18, leaving out the other leg, and gets 5(5) = 25
    { id: "B", text: "$25$" },
    // distractor: finds the scale factor 3 but reports the longer leg, 12(3) = 36
    { id: "C", text: "$36$" },
    // distractor: finds the scale factor 3 but reports the hypotenuse, 13(3) = 39
    { id: "D", text: "$39$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** The sides are in the ratio $5 : 12 : 13$, which sums to $30$; since $\\frac{90}{30} = 3$, the shortest side is $5(3) = 15$ inches.\n\n**The Full Solution:**\nStep 1: The sine of the smallest angle is $\\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{5}{13}$, so the opposite side and the hypotenuse are $5k$ and $13k$ for some $k > 0$.\nStep 2: The other leg is $\\sqrt{(13k)^{2} - (5k)^{2}} = \\sqrt{144k^{2}} = 12k$. The perimeter is $5k + 12k + 13k = 30k = 90$, so $k = 3$.\nStep 3: The shortest side is opposite the smallest angle: $5k = 5(3) = 15$ inches. Check: the sides $15$, $36$, and $39$ total $90$, and $15^{2} + 36^{2} = 225 + 1{,}296 = 1{,}521 = 39^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($25$): divides $90$ by $5 + 13 = 18$, leaving the third side out of the perimeter.\n* Choice C ($36$): finds $k = 3$ but reports the longer leg; the shortest side is opposite the smallest angle.\n* Choice D ($39$): finds $k = 3$ but reports the hypotenuse, the longest side.\n\n**Test Day Takeaway:** A trig ratio fixes the shape of a right triangle; write the sides as multiples of one $k$, and a perimeter or area then finds $k$.",
  skills: ["soh-cah-toa"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Triangle $PQR$ has a right angle at $R$, and $\\tan P = \\frac{7}{24}$. The area of the triangle is $756$ square units. What is the length of $\\overline{PQ}$?",
  choices: [
    // distractor: finds the scale factor 3 but reports the shorter leg, QR = 7(3) = 21
    { id: "A", text: "$21$" },
    // distractor: uses the 7-24-25 ratio without scaling, reporting the hypotenuse 25 for a triangle of area 84
    { id: "B", text: "$25$" },
    // distractor: finds the scale factor 3 but reports the longer leg, PR = 24(3) = 72
    { id: "C", text: "$72$" },
    { id: "D", text: "$75$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** The legs are $7k$ and $24k$, so the area is $\\frac{1}{2}(7k)(24k) = 84k^{2} = 756$; then $k = 3$ and $PQ = 25(3) = 75$.\n\n**The Full Solution:**\nStep 1: Since $\\tan P = \\frac{QR}{PR} = \\frac{7}{24}$, let $QR = 7k$ and $PR = 24k$. The hypotenuse is $PQ = \\sqrt{(7k)^{2} + (24k)^{2}} = 25k$.\nStep 2: The legs meet at the right angle, so the area is $\\frac{1}{2}(7k)(24k) = 84k^{2}$. Setting $84k^{2} = 756$ gives $k^{2} = 9$, so $k = 3$.\nStep 3: $PQ = 25(3) = 75$. Check: the legs are $21$ and $72$, $\\frac{1}{2}(21)(72) = 756$, and $\\frac{21}{72} = \\frac{7}{24}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($21$): this is $QR$, the leg opposite angle $P$.\n* Choice B ($25$): uses the ratio's hypotenuse without scaling; a $7$-$24$-$25$ triangle has area $84$, not $756$.\n* Choice C ($72$): this is $PR$, the leg adjacent to angle $P$; $\\overline{PQ}$ is opposite the right angle.\n\n**Test Day Takeaway:** From a tangent ratio, write the legs as $ak$ and $bk$; the area $\\frac{1}{2}abk^{2}$ gives $k$, and the side opposite the right angle is the hypotenuse.",
  skills: ["soh-cah-toa", "pythagorean-theorem"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The cost to rent a tent is a one-time fee plus a charge for each day. Renting the tent for $12$ days costs \\$1,320, and renting it for $30$ days costs \\$2,940. What is the one-time fee, in dollars?",
  correctAnswer: "240",
  explanation: "**SAT Pattern: Linear Cost Setup**\n\n**The correct answer is $240$.**\n\n**The Fast Way (~40s):** The extra $18$ days cost $\\$2{,}940 - \\$1{,}320 = \\$1{,}620$, or $\\$90$ per day; the fee is $\\$1{,}320 - 12(\\$90) = \\$240$.\n\n**The Full Solution:**\nStep 1: Let $f$ be the one-time fee and $d$ the charge per day. Then $f + 12d = 1{,}320$ and $f + 30d = 2{,}940$.\nStep 2: Subtract the first equation from the second: $18d = 1{,}620$, so $d = 90$.\nStep 3: Substitute into the first equation: $f + 12(90) = 1{,}320$, so $f = 1{,}320 - 1{,}080 = 240$. Check: $240 + 30(90) = 240 + 2{,}700 = 2{,}940$ ✓\n\n**Common Mistakes:**\n* $90$: reports the daily charge instead of the one-time fee.\n* $110$: divides $\\$1{,}320$ by $12$, as if there were no one-time fee.\n* $1{,}620$: stops at the cost of the extra $18$ days.\n\n**Test Day Takeaway:** When two totals share the same fixed fee, subtracting them removes the fee and leaves only the per-unit charge; then substitute back to recover the fee.",
  skills: ["word-problem-to-equation"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $S(d) = -2d^{2} + 44d - 150$ models the depth of snow, in centimeters, on day $d$ of a ski season. The table shows four values of $d$ and their corresponding values of $S(d)$. According to the model, on what day is the depth of snow first $90$ centimeters?",
  diagram: { type: "dataTable", params: { headers: ["d", "S(d)"], rows: [["5", "20"], ["8", "74"], ["14", "74"], ["17", "20"]] } },
  choices: [
    { id: "A", text: "$10$" },
    // distractor: reports the day of greatest depth, d = 11, the axis of symmetry the table suggests, where the model gives 92 centimeters
    { id: "B", text: "$11$" },
    // distractor: reports the later of the two solutions to S(d) = 90 instead of the first
    { id: "C", text: "$12$" },
    // distractor: adds the two solutions, 10 + 12, instead of choosing the smaller one
    { id: "D", text: "$22$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Set $-2d^{2} + 44d - 150 = 90$. This simplifies to $d^{2} - 22d + 120 = 0$, or $(d - 10)(d - 12) = 0$, so the depth is $90$ centimeters on days $10$ and $12$. The first of these is day $10$.\n\n**The Full Solution:**\nStep 1: Set the model equal to $90$: $-2d^{2} + 44d - 150 = 90$, so $-2d^{2} + 44d - 240 = 0$.\nStep 2: Divide each side by $-2$: $d^{2} - 22d + 120 = 0$, which factors as $(d - 10)(d - 12) = 0$. So $d = 10$ or $d = 12$.\nStep 3: The first day on which the depth is $90$ centimeters is day $10$. Check: $S(10) = -200 + 440 - 150 = 90$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($11$): the table is symmetric about $d = 11$, the day of greatest depth. The model gives $S(11) = 92$ centimeters, not $90$.\n* Choice C ($12$): this is the second solution. The depth is also $90$ centimeters on day $12$, but on the way down, after day $10$.\n* Choice D ($22$): this is the sum of the two solutions, $10 + 12$, not a day on which the depth is $90$.\n\n**Test Day Takeaway:** To find when a quadratic model reaches a value, set the model equal to that value, move everything to one side, and factor; a \"first\" question asks for the smaller solution.",
  skills: ["finding-roots-factoring"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A swimmer swam a race at a constant pace of $1$ minute $15$ seconds per $100$ meters. What was the swimmer's speed, in kilometers per hour?",
  choices: [
    { id: "A", text: "$4.8$" },
    // distractor: treats 100 meters as 1 kilometer when converting, which makes the answer 10 times too large
    { id: "B", text: "$48$" },
    // distractor: gives the speed in meters per minute, 100/1.25 = 80, without converting to kilometers per hour
    { id: "C", text: "$80$" },
    // distractor: gives the speed in meters per hour, 80(60) = 4,800, without converting meters to kilometers
    { id: "D", text: "$4{,}800$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** $1$ minute $15$ seconds is $1.25$ minutes, so the swimmer covers $\\frac{100}{1.25} = 80$ meters per minute, or $80(60) = 4{,}800$ meters per hour, which is $4.8$ kilometers per hour.\n\n**The Full Solution:**\nStep 1: Write the time in minutes: $1$ minute $15$ seconds is $1.25$ minutes, so the speed is $\\frac{100}{1.25} = 80$ meters per minute.\nStep 2: Convert to meters per hour: $80(60) = 4{,}800$ meters per hour.\nStep 3: Convert to kilometers: $\\frac{4{,}800}{1{,}000} = 4.8$ kilometers per hour. Check: $1$ kilometer is ten $100$-meter lengths, which take $10(1.25) = 12.5$ minutes, and $\\frac{60}{12.5} = 4.8$ kilometers per hour ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($48$): treats $100$ meters as one kilometer instead of one-tenth of a kilometer, so the result is $10$ times too large.\n* Choice C ($80$): this is the speed in meters per minute; it still has to be converted to kilometers per hour.\n* Choice D ($4{,}800$): this is the speed in meters per hour; dividing by $1{,}000$ gives kilometers.\n\n**Test Day Takeaway:** Turn a pace (time per distance) into a speed (distance per time), then convert one unit at a time; a swimmer's speed of a few kilometers per hour is a good sense check.",
  skills: ["unit-conversion"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 4 — Math Module 2 (22 questions)
// Distribution: 3E / 6M / 13H. Calibrated to Bluebook Module 2 Hard.
//   Easy (band 3):   Q2 (margin of error), Q6 (percent of a total), Q15 (range breather).
//   Medium (band 4-5): Q1, Q3, Q4, Q8, Q9, Q13.
//   Hard (band 6-7): Q5, Q7, Q10, Q11, Q12, Q14, Q16, Q17, Q18, Q19, Q20, Q21, Q22.
// Q1-5 warm-up bar: every opener needs 2+ steps or a trap (no one-formula plug-ins,
// no Pythagorean-variant traps — tests 1 and 3 own those).
// Diagrams: Q1 (table of values), Q15 (dot plot), Q16 (histogram), Q17 (right triangle).

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The table shows the two solutions to the equation $|x - c| = d$, where $c$ and $d$ are positive constants. What is the value of $c$?",
  questionTable: { headers: ["Solution", "Value of $x$"], rows: [["Smaller solution", "$3$"], ["Larger solution", "$11$"]] },
  choices: [
    // distractor: finds d, the distance from c to each solution, instead of c
    { id: "A", text: "$4$" },
    { id: "B", text: "$7$" },
    // distractor: finds the distance between the two solutions, 11 - 3, instead of the value halfway between them
    { id: "C", text: "$8$" },
    // distractor: adds the two solutions, 3 + 11, without dividing by 2
    { id: "D", text: "$14$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The solutions of $|x - c| = d$ are the two numbers $d$ units from $c$, so $c$ is halfway between $3$ and $11$: $c = \\frac{3 + 11}{2} = 7$.\n\n**The Full Solution:**\nStep 1: The equation $|x - c| = d$ means $x - c = d$ or $x - c = -d$, so the solutions are $c + d$ and $c - d$.\nStep 2: The table gives $c + d = 11$ and $c - d = 3$. Adding these equations gives $2c = 14$.\nStep 3: So $c = 7$. Check: with $c = 7$, $d = 4$, and $|3 - 7| = 4$ and $|11 - 7| = 4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): this is $d$, the distance from $c$ to each solution.\n* Choice C ($8$): this is the distance between the two solutions, $11 - 3$, which equals $2d$.\n* Choice D ($14$): this is the sum of the two solutions, $2c$, before dividing by $2$.\n\n**Test Day Takeaway:** For $|x - c| = d$, the constant $c$ is the midpoint of the two solutions and $d$ is half the distance between them.",
  skills: ["combining-like-terms"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A town's population decreased by $20\\%$ from 2022 to 2023 and by $25\\%$ from 2023 to 2024. The population in 2024 was $21{,}000$. What was the population in 2022?",
  choices: [
    // distractor: divides 21,000 by 0.80 only, reversing the 20% decrease and ignoring the 25% decrease
    { id: "A", text: "$26{,}250$" },
    // distractor: divides 21,000 by 0.75 only, which gives the 2023 population rather than the 2022 population
    { id: "B", text: "$28{,}000$" },
    // distractor: adds the two percents to get 45% and increases 21,000 by 45%, computing 1.45(21,000) = 30,450
    { id: "C", text: "$30{,}450$" },
    { id: "D", text: "$35{,}000$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The two decreases multiply: $0.80(0.75) = 0.60$. So the 2022 population is $\\frac{21{,}000}{0.60} = 35{,}000$.\n\n**The Full Solution:**\nStep 1: A $20\\%$ decrease multiplies by $0.80$, and a $25\\%$ decrease multiplies by $0.75$.\nStep 2: If $p$ is the 2022 population, then $0.75(0.80p) = 21{,}000$, which is $0.60p = 21{,}000$.\nStep 3: $p = \\frac{21{,}000}{0.60} = 35{,}000$. Check: $0.80(35{,}000) = 28{,}000$ in 2023, and $0.75(28{,}000) = 21{,}000$ in 2024 ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($26{,}250$): this is $\\frac{21{,}000}{0.80}$, which reverses only the $20\\%$ decrease.\n* Choice B ($28{,}000$): this is $\\frac{21{,}000}{0.75}$, the 2023 population. It reverses the second decrease but not the first.\n* Choice C ($30{,}450$): this adds the percents to $45\\%$ and computes $1.45(21{,}000)$. Percent changes multiply, and increasing by $45\\%$ does not undo a $45\\%$ decrease anyway.\n\n**Test Day Takeaway:** Successive percent changes multiply their factors; to work backward, divide by the product of the factors.",
  skills: ["percent-change"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A taxi ride of $m$ miles costs $C$ dollars, where $C = 2m + 5$. A certain ride costs \\$18 more than a $10$-mile ride. How many miles long is this ride?",
  choices: [
    // distractor: solves 2m + 5 = 18, treating the extra 18 dollars as the whole cost of the ride
    { id: "A", text: "$6.5$" },
    { id: "B", text: "$19$" },
    // distractor: adds 18 to the 10 miles instead of to the cost of the 10-mile ride
    { id: "C", text: "$28$" },
    // distractor: reports the cost of the ride, 43 dollars, instead of its length in miles
    { id: "D", text: "$43$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** A $10$-mile ride costs $2(10) + 5 = 25$ dollars, so this ride costs $43$ dollars. Then $2m + 5 = 43$ gives $m = 19$.\n\n**The Full Solution:**\nStep 1: Find the cost of a $10$-mile ride: $C = 2(10) + 5 = 25$ dollars.\nStep 2: The ride in question costs \\$18 more, so its cost is $25 + 18 = 43$ dollars.\nStep 3: Solve $2m + 5 = 43$: $2m = 38$, so $m = 19$. Check: $2(19) + 5 = 43$, and $43 - 25 = 18$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6.5$): this solves $2m + 5 = 18$, using \\$18 as the cost of the ride instead of the amount more than the $10$-mile ride costs.\n* Choice C ($28$): this adds $18$ to the $10$ miles. The \\$18 is an increase in cost, not in distance.\n* Choice D ($43$): this is the cost of the ride in dollars, not the number of miles.\n\n**Test Day Takeaway:** \"More than\" a value of the output shifts the output. Evaluate the reference input first, add the shift, then solve for the input.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$y = 2x^{2} - 5x + k$\n$y = 7x - 13$\nIn the given system of equations, $k$ is a constant. The system has exactly one real solution. What is the value of $k$?",
  choices: [
    // distractor: adds 4ac instead of subtracting it, solving 144 + 8(k + 13) = 0 to get k = -31
    { id: "A", text: "$-31$" },
    { id: "B", text: "$5$" },
    // distractor: leaves the -13 out when combining the equations, setting the discriminant of 2x^2 - 12x + k equal to 0 to get k = 18
    { id: "C", text: "$18$" },
    // distractor: drops the leading coefficient 2 from 4ac, solving 144 - 4(k + 13) = 0 to get k = 23
    { id: "D", text: "$23$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** Setting the right sides equal gives $2x^{2} - 12x + (k + 13) = 0$. One real solution means the discriminant is $0$: $144 - 8(k + 13) = 0$, so $k = 5$.\n\n**The Full Solution:**\nStep 1: Substitute $7x - 13$ for $y$ in the first equation: $2x^{2} - 5x + k = 7x - 13$.\nStep 2: Collect every term on one side: $2x^{2} - 12x + (k + 13) = 0$, where $a = 2$, $b = -12$, and the constant term is $k + 13$.\nStep 3: Exactly one real solution means $b^{2} - 4ac = 0$: $(-12)^{2} - 4(2)(k + 13) = 0$, so $144 - 8k - 104 = 0$ and $k = 5$. Check: with $k = 5$ the equation is $2x^{2} - 12x + 18 = 2(x - 3)^{2} = 0$, whose only solution is $x = 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-31$): this solves $144 + 8(k + 13) = 0$. The discriminant subtracts $4ac$.\n* Choice C ($18$): this sets the discriminant of $2x^{2} - 12x + k$ equal to $0$, leaving out the $-13$ that moves over from the second equation.\n* Choice D ($23$): this solves $144 - 4(k + 13) = 0$, dropping the leading coefficient $2$ from $4ac$.\n\n**Test Day Takeaway:** For a line and a parabola, \"exactly one solution\" means the combined quadratic has discriminant $0$; collect every term on one side before reading off $a$, $b$, and $c$.",
  skills: ["tangent-lines", "discriminant-analysis"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$ax^{2} + bx + 24 = 0$\nIn the given equation, $a$ and $b$ are constants. The sum of the solutions to the equation is $5$, and the product of the solutions is $4$. What is the value of $b$?",
  choices: [
    { id: "A", text: "$-30$" },
    // distractor: uses sum = -b, ignoring the leading coefficient a, and reports -5
    { id: "B", text: "$-5$" },
    // distractor: reports a = 6, found from the product, instead of b
    { id: "C", text: "$6$" },
    // distractor: drops the negative sign in sum = -b/a, giving b/6 = 5 and b = 30
    { id: "D", text: "$30$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** The product of the solutions is $\\frac{24}{a} = 4$, so $a = 6$. The sum is $-\\frac{b}{6} = 5$, so $b = -30$.\n\n**The Full Solution:**\nStep 1: For $ax^{2} + bx + c = 0$, the sum of the solutions is $-\\frac{b}{a}$ and the product is $\\frac{c}{a}$. Here $c = 24$.\nStep 2: The product involves only $a$: $\\frac{24}{a} = 4$, so $a = 6$.\nStep 3: The sum gives $-\\frac{b}{6} = 5$, so $b = -30$. Check: $6x^{2} - 30x + 24 = 6(x - 1)(x - 4)$, whose solutions $1$ and $4$ have sum $5$ and product $4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-5$): this uses $-b$ as the sum, which is true only when $a = 1$. Here $a = 6$.\n* Choice C ($6$): this is the value of $a$, found in the second step, reported in place of $b$.\n* Choice D ($30$): this drops the negative sign, solving $\\frac{b}{6} = 5$.\n\n**Test Day Takeaway:** When the leading coefficient is unknown, use the product $\\frac{c}{a}$ first to find $a$, then use the sum $-\\frac{b}{a}$.",
  skills: ["quadratic-factoring"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The scatterplot shows the relationship between two variables, $x$ and $y$, for $12$ data points. A line of best fit for the data is also shown. How many of the data points have an actual $y$-value less than the $y$-value predicted by the line of best fit?",
  diagram: { type: "scatterplot", params: { points: [[1, 48], [2, 38], [4, 44], [5, 32], [7, 38], [8, 27], [10, 28], [11, 30], [13, 18], [14, 25], [16, 22], [18, 9]], xMin: 0, xMax: 20, yMin: 0, yMax: 50, xGridStep: 2, yGridStep: 5, xLabelStep: 4, yLabelStep: 10, xLabel: "x", yLabel: "y", bestFitLine: { slope: -1.8, intercept: 46 } } },
  choices: [
    { id: "A", text: "$5$" },
    // distractor: counts the 6 points above the line, where the actual y-value is greater than the predicted value
    { id: "B", text: "$6$" },
    // distractor: counts the 6 points above the line and also the point that lies on the line
    { id: "C", text: "$7$" },
    // distractor: counts every point that is not on the line, ignoring whether it is above or below the line
    { id: "D", text: "$11$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Residual**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** A data point whose actual $y$-value is less than the predicted value lies below the line of best fit. Five points lie below the line.\n\n**The Full Solution:**\nStep 1: For each data point, the predicted $y$-value is the $y$-value of the line at the same $x$-value. The actual $y$-value is less than the predicted value exactly when the point lies below the line.\nStep 2: Count the points below the line: the points at $x = 2$, $x = 5$, $x = 8$, $x = 13$, and $x = 18$. That is $5$ points.\nStep 3: The other $7$ points are $6$ above the line and $1$, $(10, 28)$, on the line. Check: $5 + 6 + 1 = 12$, the number of data points ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): counts the points above the line, where the actual value is greater than the predicted value.\n* Choice C ($7$): counts the points above the line plus the point on the line.\n* Choice D ($11$): counts every point off the line without checking whether it is above or below.\n\n**Test Day Takeaway:** Actual less than predicted means the point is below the line; actual greater than predicted means it is above. A point on the line counts as neither.",
  skills: ["calculate-mean", "slope-intercept-form"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$ax - 4y = 12$\nIn the given equation, $a$ is a constant. In the $xy$-plane, the graph of the given equation is parallel to the line that passes through the points $(2, -7)$ and $(10, 3)$. What is the value of $a$?",
  choices: [
    // distractor: writes the slope of ax - 4y = 12 as -a/4 instead of a/4
    { id: "A", text: "$-5$" },
    // distractor: reports the common slope, 5/4, instead of the value of a
    { id: "B", text: "$\\frac{5}{4}$" },
    // distractor: finds the slope as run over rise, 8/10 = 4/5, and solves a/4 = 4/5
    { id: "C", text: "$\\frac{16}{5}$" },
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Parallel Lines and Standard Form**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** The line through the two points has slope $\\frac{3 - (-7)}{10 - 2} = \\frac{5}{4}$. The graph of $ax - 4y = 12$ is $y = \\frac{a}{4}x - 3$, with slope $\\frac{a}{4}$. Parallel lines have equal slopes, so $\\frac{a}{4} = \\frac{5}{4}$ and $a = 5$.\n\n**The Full Solution:**\nStep 1: Find the slope of the line through $(2, -7)$ and $(10, 3)$: $\\frac{3 - (-7)}{10 - 2} = \\frac{10}{8} = \\frac{5}{4}$.\nStep 2: Solve the given equation for $y$: $-4y = -ax + 12$, so $y = \\frac{a}{4}x - 3$. Its slope is $\\frac{a}{4}$.\nStep 3: Parallel lines have equal slopes: $\\frac{a}{4} = \\frac{5}{4}$, so $a = 5$. Check: the graph of $5x - 4y = 12$ is $y = \\frac{5}{4}x - 3$, with slope $\\frac{5}{4}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): writes the slope of $ax - 4y = 12$ as $-\\frac{a}{4}$. Solving for $y$ divides $-ax$ by $-4$, which gives $+\\frac{a}{4}x$.\n* Choice B ($\\frac{5}{4}$): this is the slope the two lines share, not the value of $a$.\n* Choice C ($\\frac{16}{5}$): computes the slope as run over rise, $\\frac{8}{10} = \\frac{4}{5}$, and then solves $\\frac{a}{4} = \\frac{4}{5}$.\n\n**Test Day Takeaway:** For a line in the form $Ax + By = C$, the slope is $-\\frac{A}{B}$; set it equal to the slope of the parallel line and solve for the constant.",
  skills: ["writing-parallel-equation"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$x + y = 50$\n$2x + 8y = 232$\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
  choices: [
    { id: "A", text: "$22$" },
    // distractor: solves the system correctly but reports x = 28 instead of y
    { id: "B", text: "$28$" },
    // distractor: divides 232 by 8, ignoring the 2x term in the second equation
    { id: "C", text: "$29$" },
    // distractor: stops at 6y = 132 after eliminating x and never divides by 6
    { id: "D", text: "$132$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Multiply the first equation by $2$ and subtract it from the second: $6y = 232 - 100 = 132$, so $y = 22$.\n\n**The Full Solution:**\nStep 1: Multiply the first equation by $2$ so the $x$-terms match: $2x + 2y = 100$.\nStep 2: Subtract this from the second equation: $(2x + 8y) - (2x + 2y) = 232 - 100$, so $6y = 132$.\nStep 3: Divide by $6$: $y = 22$, and then $x = 50 - 22 = 28$. Check: $28 + 22 = 50$ and $2(28) + 8(22) = 56 + 176 = 232$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($28$): this is the value of $x$. Both values come out of the same system, so check which one the question asks for.\n* Choice C ($29$): this is $\\frac{232}{8}$, which ignores the $2x$ term in the second equation.\n* Choice D ($132$): this is the value of $6y$, one division short of $y$.\n\n**Test Day Takeaway:** Scale one equation so a variable cancels, subtract, and finish the division; then confirm you are reporting the variable the question names.",
  skills: ["elimination-method", "setting-up-systems"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  question: "$\\frac{x^{5}\\sqrt[3]{x^{4}}}{\\sqrt{x^{6}}}$\nFor $x > 0$, the given expression is equivalent to $x^{m}$, where $m$ is a constant. What is the value of $m$?",
  choices: [
    // distractor: treats the square root of x^6 as x^6 rather than x^3, giving 5 + 4/3 - 6 = 1/3
    { id: "A", text: "$\\frac{1}{3}$" },
    // distractor: reads the cube root of x^4 as x^(3/4) instead of x^(4/3), giving 5 + 3/4 - 3 = 11/4
    { id: "B", text: "$\\frac{11}{4}$" },
    { id: "C", text: "$\\frac{10}{3}$" },
    // distractor: adds the denominator's exponent instead of subtracting it, giving 5 + 4/3 + 3 = 28/3
    { id: "D", text: "$\\frac{28}{3}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** Write each radical as a power: $\\frac{x^{5} \\cdot x^{4/3}}{x^{3}} = x^{5 + \\frac{4}{3} - 3} = x^{10/3}$.\n\n**The Full Solution:**\nStep 1: $\\sqrt[3]{x^{4}} = x^{4/3}$, because the index of the root divides the exponent.\nStep 2: $\\sqrt{x^{6}} = x^{6/2} = x^{3}$.\nStep 3: Multiplying adds exponents and dividing subtracts them: $5 + \\frac{4}{3} - 3 = \\frac{15 + 4 - 9}{3} = \\frac{10}{3}$. Check at $x = 8$: $\\frac{8^{5} \\cdot 16}{512} = 1{,}024$, and $8^{10/3} = 2^{10} = 1{,}024$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{3}$): this leaves $\\sqrt{x^{6}}$ as $x^{6}$, computing $5 + \\frac{4}{3} - 6$.\n* Choice B ($\\frac{11}{4}$): this reads $\\sqrt[3]{x^{4}}$ as $x^{3/4}$. The index of the root goes in the denominator.\n* Choice D ($\\frac{28}{3}$): this adds the exponent $3$ from the denominator instead of subtracting it.\n\n**Test Day Takeaway:** Convert every radical to a fractional exponent (index in the denominator) before combining, and subtract the exponent of anything in the denominator.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $g(t) = 9{,}400 - kt$ gives the number of gallons of water in a tank $t$ minutes after the tank begins to drain, where $k$ is a constant. The tank holds $7{,}000$ gallons $5$ hours after it begins to drain. What is the value of $k$?",
  choices: [
    { id: "A", text: "$8$" },
    // distractor: divides the 2,400-gallon decrease by 60 instead of by the 300 minutes that pass
    { id: "B", text: "$40$" },
    // distractor: finds the rate per hour, 2,400/5 = 480, and never converts to gallons per minute
    { id: "C", text: "$480$" },
    // distractor: reports the total decrease, 2,400 gallons, instead of the rate
    { id: "D", text: "$2{,}400$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** The tank loses $9{,}400 - 7{,}000 = 2{,}400$ gallons in $300$ minutes, so $k = \\frac{2{,}400}{300} = 8$.\n\n**The Full Solution:**\nStep 1: The amount of water decreases from $9{,}400$ gallons to $7{,}000$ gallons, a decrease of $2{,}400$ gallons.\nStep 2: In the function, $t$ is measured in minutes, so convert the time: $5$ hours is $5(60) = 300$ minutes.\nStep 3: Substitute into the function: $7{,}000 = 9{,}400 - 300k$, so $300k = 2{,}400$ and $k = 8$. Check: $g(300) = 9{,}400 - 8(300) = 7{,}000$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($40$): this divides $2{,}400$ by $60$, the conversion factor, instead of by the $300$ minutes that pass.\n* Choice C ($480$): this is the rate in gallons per hour. The function's $t$ is in minutes, so $k$ must be in gallons per minute.\n* Choice D ($2{,}400$): this is the total decrease over $5$ hours, not the decrease per minute.\n\n**Test Day Takeaway:** A rate in a function carries the units of the function's input; convert the given time to those units before solving.",
  skills: ["slope-intercept-form"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The table shows the frequency of each value in data set A and in data set B. Data set C consists of all $60$ values from data sets A and B. What is the median of data set C?",
  questionTable: { headers: ["Value", "Frequency in data set A", "Frequency in data set B"], rows: [["$1$", "$9$", "$3$"], ["$2$", "$8$", "$5$"], ["$3$", "$7$", "$10$"], ["$4$", "$6$", "$12$"]] },
  correctAnswer: "3",
  explanation: "**SAT Pattern: Median Calculation**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~40s):** Add each row: data set C has $12$ ones, $13$ twos, $17$ threes, and $18$ fours. The median of $60$ values is the average of the $30$th and $31$st values, and both are $3$.\n\n**The Full Solution:**\nStep 1: Add the two frequencies for each value: $1$ occurs $9 + 3 = 12$ times, $2$ occurs $8 + 5 = 13$ times, $3$ occurs $7 + 10 = 17$ times, and $4$ occurs $6 + 12 = 18$ times. The total is $12 + 13 + 17 + 18 = 60$.\nStep 2: With $60$ values in order, the median is the average of the $30$th and $31$st values.\nStep 3: The first $12$ values are $1$ and the next $13$ are $2$, which accounts for the first $25$ values. The $26$th through $42$nd values are $3$, so the $30$th and $31$st values are both $3$, and the median is $3$. Check: $25$ values are less than $3$ and $18$ values are greater than $3$, so $3$ is in the middle ✓\n\n**Common Mistakes:**\n* $2.5$: averages the median of data set A, $2$, and the median of data set B, $3$. The medians of the parts do not combine this way; the frequencies must be added first.\n* $2$: the median of data set A alone.\n* $17$: the frequency of the value $3$ in data set C rather than the median itself.\n\n**Test Day Takeaway:** For combined data sets, add the frequencies first, then count to the middle position; the median of the combination is not the average of the two medians.",
  skills: ["find-median"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Triangle $ABC$ is similar to triangle $DEF$. The area of triangle $DEF$ is $\\frac{4}{9}$ the area of triangle $ABC$, and the perimeter of triangle $DEF$ is $p$. Which expression represents the perimeter of triangle $ABC$?",
  choices: [
    // distractor: applies the area ratio 4/9 directly to the perimeter and in the wrong direction
    { id: "A", text: "$\\frac{4}{9}p$" },
    // distractor: takes the square root correctly but keeps the DEF-to-ABC direction, making ABC smaller than DEF
    { id: "B", text: "$\\frac{2}{3}p$" },
    { id: "C", text: "$\\frac{3}{2}p$" },
    // distractor: inverts the area ratio to 9/4 but never takes the square root
    { id: "D", text: "$\\frac{9}{4}p$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Similar Triangles and Area Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** Areas of similar figures scale by the square of the length ratio, so each length of triangle $DEF$ is $\\sqrt{\\frac{4}{9}} = \\frac{2}{3}$ of the corresponding length of triangle $ABC$. The perimeter of triangle $ABC$ is therefore $\\frac{3}{2}p$.\n\n**The Full Solution:**\nStep 1: If corresponding lengths have ratio $r$, the areas have ratio $r^{2}$. Here $r^{2} = \\frac{4}{9}$.\nStep 2: So $r = \\frac{2}{3}$: every length of triangle $DEF$, including its perimeter, is $\\frac{2}{3}$ of the corresponding length of triangle $ABC$.\nStep 3: If $P$ is the perimeter of triangle $ABC$, then $p = \\frac{2}{3}P$, so $P = \\frac{3}{2}p$. Check: if $P = 30$, then $p = 20$, and $\\frac{3}{2}(20) = 30$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{4}{9}p$): this uses the area ratio as if it were a length ratio, and in the wrong direction.\n* Choice B ($\\frac{2}{3}p$): this is the correct ratio pointed the wrong way. Triangle $ABC$ has the greater area, so its perimeter must be greater than $p$.\n* Choice D ($\\frac{9}{4}p$): this flips the ratio but never takes the square root, scaling a length by an area factor.\n\n**Test Day Takeaway:** Length ratio $r$, area ratio $r^{2}$. Take the square root before scaling any length, then check which figure should be larger.",
  skills: ["similar-triangles"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$3x - 5y = 7$\nIn the $xy$-plane, line $\\ell$ is parallel to the graph of the given equation. Line $\\ell$ passes through the points $(0, 0)$ and $(10, d)$. What is the value of $d$?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Parallel Lines and Standard Form**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~30s):** The graph of $3x - 5y = 7$ has slope $\\frac{3}{5}$, so line $\\ell$ is $y = \\frac{3}{5}x$, and $d = \\frac{3}{5}(10) = 6$.\n\n**The Full Solution:**\nStep 1: Solve the given equation for $y$: $-5y = -3x + 7$, so $y = \\frac{3}{5}x - \\frac{7}{5}$. Its slope is $\\frac{3}{5}$.\nStep 2: Line $\\ell$ is parallel to this graph, so it also has slope $\\frac{3}{5}$. It passes through $(0, 0)$, so its equation is $y = \\frac{3}{5}x$.\nStep 3: Substitute $x = 10$: $d = \\frac{3}{5}(10) = 6$. Check: the slope from $(0, 0)$ to $(10, 6)$ is $\\frac{6}{10} = \\frac{3}{5}$ ✓\n\n**Common Mistakes:**\n* $-6$: writes the slope of $3x - 5y = 7$ as $-\\frac{3}{5}$. Dividing $-3x$ by $-5$ gives a positive slope.\n* $4.6$: substitutes $(10, d)$ into the given equation, $3(10) - 5d = 7$. Line $\\ell$ is a different line through the origin.\n* $\\frac{50}{3}$: uses the reciprocal slope, $\\frac{5}{3}$.\n\n**Test Day Takeaway:** Put the given equation in slope-intercept form to read its slope; a parallel line through the origin is $y = mx$ with that same slope.",
  skills: ["writing-parallel-equation"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The function $g$ is defined by $g(x) = 2x^{2} - 12x + k$, where $k$ is a constant. The minimum value of $g(x)$ is $-7$. What is the value of $k$?",
  choices: [
    // distractor: computes k = -7 - 18 instead of k = -7 + 18 when solving k - 18 = -7
    { id: "A", text: "$-25$" },
    // distractor: uses x = -b/2 = 6 for the vertex instead of -b/(2a) = 3; since g(6) = k, the minimum -7 is reported as k
    { id: "B", text: "$-7$" },
    // distractor: completes the square as 2(x - 3)^2 - 9 + k, forgetting to multiply the 9 by the leading coefficient 2
    { id: "C", text: "$2$" },
    { id: "D", text: "$11$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The vertex is at $x = \\frac{12}{2(2)} = 3$, and $g(3) = 18 - 36 + k = k - 18$. Setting $k - 18 = -7$ gives $k = 11$.\n\n**The Full Solution:**\nStep 1: The leading coefficient $2$ is positive, so the minimum occurs at the vertex, $x = -\\frac{b}{2a} = \\frac{12}{4} = 3$.\nStep 2: Evaluate $g$ there: $g(3) = 2(9) - 12(3) + k = k - 18$.\nStep 3: The minimum value is $-7$, so $k - 18 = -7$ and $k = 11$. Check: $2x^{2} - 12x + 11 = 2(x - 3)^{2} - 7$, whose minimum value is $-7$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-25$): this solves $k - 18 = -7$ by subtracting $18$ instead of adding it.\n* Choice B ($-7$): this uses $x = -\\frac{b}{2} = 6$ for the vertex. Since $g(6) = 72 - 72 + k = k$, the minimum is copied directly into $k$.\n* Choice C ($2$): this writes $2(x - 3)^{2} - 9 + k$, forgetting that the $9$ is multiplied by the leading coefficient $2$.\n\n**Test Day Takeaway:** The minimum of a parabola that opens upward is the $y$-value of its vertex: find $x = -\\frac{b}{2a}$, evaluate, and set the result equal to the given minimum.",
  skills: ["converting-quadratic-forms"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  question: "At a high school, $60\\%$ of the students take a bus to school. Of the students who do not take a bus, $45\\%$ walk to school. If $216$ students walk to school, how many students attend the high school?",
  choices: [
    // distractor: divides 216 by 0.60, treating the walkers as 60% of all students
    { id: "A", text: "$360$" },
    // distractor: divides 216 by 0.45 only, which gives the number of students who do not take a bus
    { id: "B", text: "$480$" },
    // distractor: divides 216 by 0.40, using the students who do not take a bus but never applying the 45%
    { id: "C", text: "$540$" },
    { id: "D", text: "$1{,}200$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Percent Complement**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** Students who do not take a bus are $40\\%$ of the total, and walkers are $45\\%$ of those: $0.40(0.45) = 0.18$. So $0.18n = 216$ and $n = 1{,}200$.\n\n**The Full Solution:**\nStep 1: If $60\\%$ of the students take a bus, then $100\\% - 60\\% = 40\\%$ do not.\nStep 2: The $45\\%$ applies to that $40\\%$, so the walkers are $0.45(0.40) = 0.18$ of all students.\nStep 3: If $n$ is the number of students, $0.18n = 216$, so $n = \\frac{216}{0.18} = 1{,}200$. Check: $40\\%$ of $1{,}200$ is $480$, and $45\\%$ of $480$ is $216$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($360$): this is $\\frac{216}{0.60}$, applying the bus percentage to students who do not take a bus.\n* Choice B ($480$): this is $\\frac{216}{0.45}$, the number of students who do not take a bus, not the whole school.\n* Choice C ($540$): this is $\\frac{216}{0.40}$, which uses the complement but never applies the $45\\%$.\n\n**Test Day Takeaway:** \"Of the students who do not …\" makes the complement the new base; multiply the two shares to get one share of the whole, then divide once.",
  skills: ["percent-of-value"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The dot plot shows the $11$ values in data set A. Data set B consists of the $10$ values in data set A other than $34$. The mean of data set A is how much greater than the mean of data set B?",
  diagram: { type: "dotPlot", params: { data: [{ value: 6, count: 1 }, { value: 9, count: 2 }, { value: 12, count: 4 }, { value: 15, count: 2 }, { value: 18, count: 1 }, { value: 34, count: 1 }], xMin: 0, xMax: 36, xLabel: "Value" } },
  correctAnswer: "2",
  explanation: "**SAT Pattern: Outlier Effect**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~40s):** The $10$ values in data set B sum to $120$, so their mean is $12$. Adding $34$ gives a sum of $154$ for $11$ values, a mean of $14$. The difference is $2$.\n\n**The Full Solution:**\nStep 1: Read the dot plot without the $34$: $6, 9, 9, 12, 12, 12, 12, 15, 15, 18$. Their sum is $120$, so the mean of data set B is $\\frac{120}{10} = 12$.\nStep 2: Data set A also includes $34$, so its sum is $120 + 34 = 154$ and its mean is $\\frac{154}{11} = 14$.\nStep 3: The difference is $14 - 12 = 2$. Check: $34$ is $22$ more than $12$, and spreading that $22$ over $11$ values raises the mean by $\\frac{22}{11} = 2$ ✓\n\n**Common Mistakes:**\n* $14$ or $12$: one of the two means rather than the difference between them.\n* $22$: the distance of $34$ above the mean of data set B, never divided among the $11$ values.\n* $3.4$: divides $154$ by $10$ instead of $11$, getting $15.4$, and subtracts $12$.\n\n**Test Day Takeaway:** Adding one value changes the mean by that value's distance from the old mean divided by the new number of values.",
  skills: ["calculate-mean", "find-median"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A tank in the shape of a right circular cylinder has a height of $40$ feet. The tank contains $21{,}600\\pi$ cubic feet of water, and the water is $24$ feet deep. How many more cubic feet of water are needed to fill the tank?",
  choices: [
    // distractor: scales the given volume by 16/40 instead of 16/24, giving 8,640 pi
    { id: "A", text: "$8{,}640\\pi$" },
    { id: "B", text: "$14{,}400\\pi$" },
    // distractor: reports the volume of water already in the tank rather than the amount still needed
    { id: "C", text: "$21{,}600\\pi$" },
    // distractor: reports the volume of the full tank, forgetting to subtract the water already in it
    { id: "D", text: "$36{,}000\\pi$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** $\\pi r^{2}(24) = 21{,}600\\pi$ gives $r^{2} = 900$. The remaining $16$ feet of the tank hold $900\\pi(16) = 14{,}400\\pi$ cubic feet.\n\n**The Full Solution:**\nStep 1: Use $V = \\pi r^{2}h$ for the water: $\\pi r^{2}(24) = 21{,}600\\pi$, so $r^{2} = \\frac{21{,}600}{24} = 900$.\nStep 2: The water must rise from $24$ feet to $40$ feet, an increase of $16$ feet.\nStep 3: The additional volume is $\\pi(900)(16) = 14{,}400\\pi$ cubic feet. Check: the full tank holds $900\\pi(40) = 36{,}000\\pi$ cubic feet, and $36{,}000\\pi - 21{,}600\\pi = 14{,}400\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($8{,}640\\pi$): this computes $\\frac{16}{40}(21{,}600\\pi)$. The given volume corresponds to a depth of $24$ feet, not $40$ feet, so the factor should be $\\frac{16}{24}$.\n* Choice C ($21{,}600\\pi$): this is the water already in the tank, not the amount still needed.\n* Choice D ($36{,}000\\pi$): this is the volume of the full tank, with the water already in it never subtracted.\n\n**Test Day Takeaway:** In a cylinder, volume is proportional to depth; find $r^{2}$ from the given volume, then multiply by the height the question asks about.",
  skills: ["volume-prism"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$\\frac{2x + c}{5} - \\frac{x - 3}{2} = 4$\nThe given equation, where $c$ is a constant, has the solution $x = 7$. What is the value of $c$?",
  correctAnswer: "16",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $16$.**\n\n**The Fast Way (~40s):** At $x = 7$ the second fraction is $\\frac{4}{2} = 2$, so $\\frac{14 + c}{5} = 6$, which gives $14 + c = 30$ and $c = 16$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 7$: $\\frac{2(7) + c}{5} - \\frac{7 - 3}{2} = 4$, which is $\\frac{14 + c}{5} - 2 = 4$.\nStep 2: Add $2$ to both sides: $\\frac{14 + c}{5} = 6$.\nStep 3: Multiply both sides by $5$: $14 + c = 30$, so $c = 16$. Check: $\\frac{14 + 16}{5} - \\frac{4}{2} = 6 - 2 = 4$ ✓\n\n**Common Mistakes:**\n* $6$: drops the second fraction and solves $\\frac{14 + c}{5} = 4$.\n* $-4$: subtracts $2$ instead of adding it, solving $\\frac{14 + c}{5} = 2$.\n* $30$: the value of the numerator $14 + c$, not the constant $c$.\n\n**Test Day Takeaway:** When the solution is given, substitute it first; every term without the constant becomes a number, and the equation becomes a short solve.",
  skills: ["solving-equations"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$6x - 4y = 14$\n$ax + 10y = b$\nIn the given system of equations, $a$ and $b$ are constants. If the system has no solution, which of the following must be true?",
  choices: [
    // distractor: b = -35 makes the two equations describe the same line, so the system has infinitely many solutions
    { id: "A", text: "$a = -15$ and $b = -35$" },
    { id: "B", text: "$a = -15$ and $b \\neq -35$" },
    // distractor: matches the slopes with the wrong sign, setting a/10 = 3/2 instead of -a/10 = 3/2 to get a = 15
    { id: "C", text: "$a = 15$ and $b \\neq -35$" },
    // distractor: omits the restriction on b, which allows b = -35, the value that makes the lines coincide
    { id: "D", text: "$a = -15$, and $b$ can be any constant" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** No solution means the coefficients of $x$ and $y$ are proportional but the constants are not: $\\frac{a}{6} = \\frac{10}{-4}$ gives $a = -15$, and $\\frac{b}{14} \\neq \\frac{10}{-4}$ gives $b \\neq -35$.\n\n**The Full Solution:**\nStep 1: Solve the first equation for $y$: $y = \\frac{3}{2}x - \\frac{7}{2}$. Solve the second for $y$: $y = -\\frac{a}{10}x + \\frac{b}{10}$.\nStep 2: A system of two linear equations has no solution when the lines are parallel and distinct. Equal slopes require $-\\frac{a}{10} = \\frac{3}{2}$, so $a = -15$.\nStep 3: Distinct lines require different $y$-intercepts: $\\frac{b}{10} \\neq -\\frac{7}{2}$, so $b \\neq -35$. Check: with $a = -15$ and $b = 0$, the second line is $y = \\frac{3}{2}x$, parallel to $y = \\frac{3}{2}x - \\frac{7}{2}$ and never meeting it ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($a = -15$ and $b = -35$): with $b = -35$ the second equation is $-\\frac{5}{2}$ times the first, so the lines coincide and the system has infinitely many solutions.\n* Choice C ($a = 15$ and $b \\neq -35$): this matches the slope with the wrong sign. The slope of $ax + 10y = b$ is $-\\frac{a}{10}$.\n* Choice D ($a = -15$, and $b$ can be any constant): this gets the slope condition right but allows $b = -35$, the one value that gives infinitely many solutions.\n\n**Test Day Takeaway:** No solution requires two conditions: equal slopes and different intercepts. A choice that drops the second condition allows the same-line case.",
  skills: ["system-solution-types"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$16^{3x - 4} = 4^{ax + k}$\nThe given equation is true for all real values of $x$, where $a$ and $k$ are constants. What is the value of $a + k$?",
  correctAnswer: "-2",
  explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**The correct answer is $-2$.**\n\n**The Fast Way (~45s):** Since $16 = 4^{2}$, the left side is $4^{2(3x - 4)} = 4^{6x - 8}$. Matching exponents gives $a = 6$ and $k = -8$, so $a + k = -2$.\n\n**The Full Solution:**\nStep 1: Rewrite the left side with base $4$: $16^{3x - 4} = (4^{2})^{3x - 4} = 4^{6x - 8}$.\nStep 2: The equation $4^{6x - 8} = 4^{ax + k}$ is true for all real values of $x$ only if the exponents are the same expression: $6x - 8 = ax + k$ for all $x$.\nStep 3: Matching coefficients gives $a = 6$ and $k = -8$, so $a + k = -2$. Check: $4^{6x - 8} = (4^{2})^{3x - 4} = 16^{3x - 4}$ ✓\n\n**Common Mistakes:**\n* $-1$: sets $3x - 4 = ax + k$ without rewriting the bases, getting $a = 3$ and $k = -4$.\n* $-4$: rewrites both sides with base $2$ but forgets the factor of $2$ in the right side's exponent, setting $12x - 16 = ax + k$.\n* $6$ or $-8$: one of the two constants rather than their sum.\n\n**Test Day Takeaway:** For an exponential equation that is true for all $x$, rewrite both sides with a common base, then match the coefficient of $x$ and the constant term separately.",
  skills: ["exponential-functions"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the figure shown, two lines intersect at a point. What is the value of $y$?",
  diagram: { type: "intersectingLines", params: { angles: ["(6x - 43)°", "(4x + 3)°", "y°", ""], figureNote: true, angle0Measure: 89 } },
  choices: [
    // distractor: reports x = 22, found in the middle of the problem, instead of an angle measure
    { id: "A", text: "$22$" },
    { id: "B", text: "$89$" },
    // distractor: reports 91, the measure of the (4x + 3) degree angle, which is adjacent to the y degree angle rather than vertical to it
    { id: "C", text: "$91$" },
    // distractor: sets the two labeled expressions equal as if they were vertical angles, getting x = 23 and 6(23) - 43 = 95
    { id: "D", text: "$95$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertical Angles**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The two labeled angles form a linear pair: $(6x - 43) + (4x + 3) = 180$ gives $x = 22$. The $y^\\circ$ angle is vertical to the $(6x - 43)^\\circ$ angle, so $y = 6(22) - 43 = 89$.\n\n**The Full Solution:**\nStep 1: The $(6x - 43)^\\circ$ and $(4x + 3)^\\circ$ angles are adjacent along one line, so their measures sum to $180^\\circ$.\nStep 2: $10x - 40 = 180$, so $10x = 220$ and $x = 22$.\nStep 3: The $y^\\circ$ angle is opposite the $(6x - 43)^\\circ$ angle, so the two are vertical angles and have equal measures: $y = 6(22) - 43 = 89$. Check: the four angles measure $89^\\circ$, $91^\\circ$, $89^\\circ$, and $91^\\circ$, which sum to $360^\\circ$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($22$): this is the value of $x$, not an angle measure.\n* Choice C ($91$): this is the measure of the $(4x + 3)^\\circ$ angle, which is adjacent to the $y^\\circ$ angle. Adjacent angles here are supplementary, not equal.\n* Choice D ($95$): this sets $6x - 43 = 4x + 3$, treating the two labeled angles as vertical angles. They are adjacent, so they are supplementary.\n\n**Test Day Takeaway:** When two lines intersect, each angle is either equal to a given angle (vertical) or its supplement (adjacent); decide which before computing.",
  skills: ["angles"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$\\sqrt{cx - 3} + 3 = x$\nIn the given equation, $c$ is a positive constant. The only solution to the equation is $x = 12$. What is the value of $c$?",
  correctAnswer: "7",
  explanation: "**SAT Pattern: Radical Equation**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~40s):** At $x = 12$ the radical must equal $12 - 3 = 9$, so $12c - 3 = 81$ and $c = 7$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 12$: $\\sqrt{12c - 3} + 3 = 12$.\nStep 2: Isolate the radical before squaring: $\\sqrt{12c - 3} = 9$, so $12c - 3 = 81$.\nStep 3: $12c = 84$, so $c = 7$. Check: with $c = 7$, $\\sqrt{7x - 3} = x - 3$ squares to $x^{2} - 13x + 12 = 0$, with roots $1$ and $12$. At $x = 1$ the left side is $\\sqrt{4} = 2$ but $x - 3 = -2$, so $1$ is extraneous and $12$ is the only solution ✓\n\n**Common Mistakes:**\n* $11.5$: squares each term before isolating the radical, writing $12c - 3 + 9 = 144$.\n* $9$: the value of the radical, not the constant $c$.\n* $84$: the value of $12c$, one division short.\n\n**Test Day Takeaway:** Isolate the radical before squaring, even when the solution is given; squaring a sum term by term is the error this question is built to catch.",
  skills: ["radical-equations"]
}
      ]
    }
  ]
};

export default practiceTest4;
