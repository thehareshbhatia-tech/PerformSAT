// Practice Test 6 - SAT Math
// v2 freshness rebuild (2026-09-07): every slot re-patterned and re-authored against the seen-corpus gate — docs/TEST_RECREATION_V2_SPEC.md
// 2 Modules, 22 questions each (44 total)
// Official-calibration recreation (2026-09-01): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md).
// Slot metadata (id/type/difficulty/band/skills/pattern) FROZEN from the prior
// build: M1 5E/9M/8H; M2 wavy flow — easy at Q1/Q6/Q16, medium at
// Q2/Q3/Q5/Q9/Q12/Q14/Q17, hard at the rest with hard closers Q18-Q22 and the
// band ramp mean(Q1-5)=5.0 < mean(Q18-22)=7.0. All scenarios replaced fresh
// (vineyard / wind-farm / bookbindery / kite-festival / radio-tower /
// freight-yard palette — disjoint from recreated tests 1-5). Figure density
// lifted to official ~20%: M1 carries 4 diagram items (Q7 twoWayTable, Q8
// scatterplot, Q17 nestedRightTriangles, Q22 dotPlot), M2 carries 4 (Q6
// intersectingLines, Q13 dataTable, Q15 circleWithInscribedTriangle, Q16
// barChart). Numeric MC choices sorted ascending (official convention).

export const practiceTest6 = {
  id: "practice-test-6",
  title: "Practice Test 6",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
// Practice Test 6 — Math Module 1 (22 questions)
// Easy block Q1-5 keeps the frozen archetype order: multi-step-linear (Q1),
// percent-of-whole (Q2), shifted-output (Q3), reverse-percent (Q4),
// proportion (Q5). All stems, numbers, and scenarios are new.

// ===== EASY (Q1–Q5) =====

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The table shows the number of unsold seats for a train trip at different numbers of days after tickets went on sale. The relationship between these two quantities is linear. Which statement is the best interpretation of the slope in this context?",
  questionTable: { headers: ["Days after tickets went on sale", "Unsold seats"], rows: [["0", "240"], ["2", "210"], ["4", "180"], ["6", "150"]] },
  choices: [
    { id: "A", text: "The number of unsold seats decreased by $15$ each day." },
    // distractor: reads the 30-seat drop between consecutive table rows as a one-day drop, ignoring that the rows are 2 days apart
    { id: "B", text: "The number of unsold seats decreased by $30$ each day." },
    // distractor: uses the day-0 value 240 as the rate of change instead of as the starting amount
    { id: "C", text: "The number of unsold seats decreased by $240$ each day." },
    // distractor: interprets the slope 15 as the y-intercept, that is, as a starting number of seats
    { id: "D", text: "There were $15$ unsold seats when tickets went on sale." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Every $2$ days the number of unsold seats drops by $30$, so the slope is $\\frac{-30}{2} = -15$: the number of unsold seats decreases by $15$ each day.\n\n**The Full Solution:**\nStep 1: Pick two rows of the table, such as $(0, 240)$ and $(2, 210)$.\nStep 2: Compute the slope: $\\frac{210 - 240}{2 - 0} = \\frac{-30}{2} = -15$ unsold seats per day.\nStep 3: A slope of $-15$ means that for each day after tickets went on sale, the number of unsold seats decreased by $15$. Check with the last two rows: $\\frac{150 - 180}{6 - 4} = -15$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($30$ each day): uses the drop between consecutive rows, but those rows are $2$ days apart, so $30$ seats is a two-day change.\n* Choice C ($240$ each day): $240$ is the number of unsold seats on day $0$, the starting value, not the rate of change.\n* Choice D ($15$ seats at the start): attaches the slope's value to the starting amount; the number of unsold seats when tickets went on sale is the $y$-intercept, $240$.\n\n**Test Day Takeaway:** The slope is the change in the output divided by the change in the input; when a table's inputs skip values, divide by that gap before interpreting the rate.",
  skills: ["slope-intercept-form"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Cotton and linen are mixed in a ratio of $5$ to $3$ by mass. Which expression gives the mass of cotton, in kilograms, in $m$ kilograms of the mixture?",
  choices: [
    // distractor: gives the linen share 3/8 instead of the cotton share
    { id: "A", text: "$\\frac{3}{8}m$" },
    // distractor: uses the part-to-part ratio 3:5 as a fraction of the total
    { id: "B", text: "$\\frac{3}{5}m$" },
    { id: "C", text: "$\\frac{5}{8}m$" },
    // distractor: uses the part-to-part ratio 5:3 directly as a fraction of the total, which exceeds the whole mixture
    { id: "D", text: "$\\frac{5}{3}m$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** A ratio of $5$ to $3$ splits the mixture into $5 + 3 = 8$ equal parts, and cotton is $5$ of them, so the mass of cotton is $\\frac{5}{8}m$.\n\n**The Full Solution:**\nStep 1: For every $5$ kilograms of cotton there are $3$ kilograms of linen, so every $8$ kilograms of mixture contain $5$ kilograms of cotton.\nStep 2: Cotton therefore makes up $\\frac{5}{5 + 3} = \\frac{5}{8}$ of the mixture's mass.\nStep 3: In $m$ kilograms of the mixture, the mass of cotton is $\\frac{5}{8}m$ kilograms. Check with $m = 16$: cotton is $10$ kilograms and linen is $6$ kilograms, and $10 : 6 = 5 : 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{8}m$): this is the mass of linen, the other part of the mixture.\n* Choice B ($\\frac{3}{5}m$): uses the part-to-part ratio of linen to cotton as if it were a fraction of the whole mixture.\n* Choice D ($\\frac{5}{3}m$): uses the part-to-part ratio of cotton to linen as a fraction of the whole, which would give more cotton than the entire mixture.\n\n**Test Day Takeaway:** To turn a part-to-part ratio $a : b$ into a fraction of the whole, divide each part by the sum $a + b$.",
  skills: ["word-problem-to-equation"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$7x = 161$\nWhat is the solution to the given equation?",
  choices: [
    { id: "A", text: "$23$" },
    // distractor: subtracts 7 from 161 instead of dividing, giving 154
    { id: "B", text: "$154$" },
    // distractor: adds 7 to 161 instead of dividing, giving 168
    { id: "C", text: "$168$" },
    // distractor: multiplies 161 by 7 instead of dividing, giving 1,127
    { id: "D", text: "$1{,}127$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Divide both sides by $7$: $x = \\frac{161}{7} = 23$.\n\n**The Full Solution:**\nStep 1: The variable $x$ is multiplied by $7$, so undo the multiplication by dividing.\nStep 2: Divide each side of $7x = 161$ by $7$: $x = \\frac{161}{7}$.\nStep 3: Simplify: $x = 23$. Check: $7(23) = 161$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($154$): subtracts $7$ from $161$, which would solve $x + 7 = 161$, not $7x = 161$.\n* Choice C ($168$): adds $7$ to $161$, which would solve $x - 7 = 161$.\n* Choice D ($1{,}127$): multiplies by $7$ instead of dividing, which would solve $\\frac{x}{7} = 161$.\n\n**Test Day Takeaway:** Undo the operation applied to the variable: multiplication is undone by division, and plugging the answer back in takes only a few seconds.",
  skills: ["combining-like-terms"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A bag has $30$ marbles, and $6$ are red. After one red marble is removed, one of the remaining marbles will be selected at random. What is the probability of selecting a red marble?",
  choices: [
    // distractor: reduces the red count to 5 but leaves the total at 30, forgetting the removed marble leaves the bag
    { id: "A", text: "$\\frac{5}{30}$" },
    { id: "B", text: "$\\frac{5}{29}$" },
    // distractor: ignores the removal entirely and uses the original 6 out of 30
    { id: "C", text: "$\\frac{6}{30}$" },
    // distractor: reduces the total to 29 but leaves the red count at 6, forgetting the removed marble was red
    { id: "D", text: "$\\frac{6}{29}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Probability Without Replacement**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** After one red marble is removed, $5$ red marbles remain out of $29$ marbles, so the probability is $\\frac{5}{29}$.\n\n**The Full Solution:**\nStep 1: Removing one red marble lowers the number of red marbles from $6$ to $5$.\nStep 2: The same removal lowers the total number of marbles from $30$ to $29$.\nStep 3: The probability of selecting a red marble is $\\frac{\\text{red marbles}}{\\text{total marbles}} = \\frac{5}{29}$. Check: the $29$ remaining marbles are $5$ red and $24$ not red, and $5 + 24 = 29$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{5}{30}$): updates the number of red marbles but not the total, even though the removed marble is no longer in the bag.\n* Choice C ($\\frac{6}{30}$): ignores the removal and gives the probability before any marble was taken out.\n* Choice D ($\\frac{6}{29}$): updates the total but not the number of red marbles, even though the marble removed was red.\n\n**Test Day Takeaway:** When an item is removed before a selection, change both the count of the outcome you want and the total.",
  skills: ["probability-basics"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "In the $xy$-plane, line $k$ is parallel to the graph of $3x + y = 7$ and passes through the point $(4, 5)$. Which equation defines line $k$?",
  choices: [
    // distractor: copies the given equation, which has the right slope but does not pass through (4, 5), since 3(4) + 5 = 17, not 7
    { id: "A", text: "$3x + y = 7$" },
    { id: "B", text: "$3x + y = 17$" },
    // distractor: swaps the coordinates of the point, computing 3(5) + 4 = 19 instead of 3(4) + 5
    { id: "C", text: "$3x + y = 19$" },
    // distractor: changes the sign of the y-coefficient; this line passes through (4, 5) but has slope 3, so it is not parallel to the given line
    { id: "D", text: "$3x - y = 7$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Parallel Lines and Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** A parallel line keeps the left side $3x + y$ and changes only the constant; substituting $(4, 5)$ gives $3(4) + 5 = 17$, so line $k$ is $3x + y = 17$.\n\n**The Full Solution:**\nStep 1: Rewrite the given equation as $y = -3x + 7$; its slope is $-3$, so line $k$ also has slope $-3$, and its equation has the form $3x + y = c$ for some constant $c$.\nStep 2: Line $k$ passes through $(4, 5)$, so $c = 3(4) + 5 = 17$.\nStep 3: Line $k$ is defined by $3x + y = 17$. Check: $3(4) + 5 = 17$ ✓, and the slope of $y = -3x + 17$ is $-3$, the same as the given line, with a different $y$-intercept ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3x + y = 7$): this is the given line itself, and $(4, 5)$ is not on it, since $3(4) + 5 = 17$, not $7$.\n* Choice C ($3x + y = 19$): swaps the coordinates, computing $3(5) + 4 = 19$.\n* Choice D ($3x - y = 7$): this line does pass through $(4, 5)$, but it can be written as $y = 3x - 7$, with slope $3$ rather than $-3$, so it is not parallel to the given line.\n\n**Test Day Takeaway:** Parallel lines in standard form share the same $x$- and $y$-coefficients; only the constant changes, and the given point fixes it.",
  skills: ["writing-parallel-equation"]
},

// ===== MEDIUM (Q6–Q14) =====

{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the triangle shown, how many degrees greater is the measure of the largest angle than the measure of the smallest angle?",
  diagram: { type: "triangleWithAngles", params: { angleLabels: ["(4x)°", "(3x)°", "(5x)°"], note: "Note: Figure not drawn to scale." } },
  choices: [
    // distractor: stops at x = 15 and reports the value of the variable instead of a difference of angle measures
    { id: "A", text: "$15$" },
    { id: "B", text: "$30$" },
    // distractor: reports the measure of the smallest angle, 3x = 45, instead of the difference
    { id: "C", text: "$45$" },
    // distractor: reports the measure of the largest angle, 5x = 75, instead of the difference
    { id: "D", text: "$75$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The angles add to $12x = 180$, so $x = 15$; the largest angle minus the smallest is $5x - 3x = 2x = 30$ degrees.\n\n**The Full Solution:**\nStep 1: The measures of the angles of a triangle sum to $180°$: $4x + 3x + 5x = 180$, so $12x = 180$.\nStep 2: Divide: $x = 15$. The angles measure $4(15) = 60°$, $3(15) = 45°$, and $5(15) = 75°$.\nStep 3: The largest angle is $75°$ and the smallest is $45°$, so the difference is $75 - 45 = 30$ degrees. Check: $60 + 45 + 75 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): this is the value of $x$, not a difference of angle measures.\n* Choice C ($45$): this is the measure of the smallest angle.\n* Choice D ($75$): this is the measure of the largest angle.\n\n**Test Day Takeaway:** Use the $180°$ sum to find $x$, then reread the question; the difference of $5x$ and $3x$ is simply $2x$.",
  skills: ["triangle-angle-sum"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table shows the number of travelers on a tour who booked a guided hike and the number who booked a kayak trip. One of these $240$ travelers will be selected at random. What is the probability of selecting a traveler who booked a guided hike?",
  diagram: { type: "twoWayTable", params: { headers: ["", "Kayak trip", "No kayak trip", "Total"], rows: [["Guided hike", "54", "42", "96"], ["No guided hike", "30", "114", "144"], ["Total", "84", "156", "240"]] } },
  choices: [
    // distractor: uses only the guided-hike-and-no-kayak cell, 42, and leaves out the 54 travelers who booked both
    { id: "A", text: "$\\frac{42}{240}$" },
    // distractor: uses the joint cell 54, which counts travelers who booked a guided hike and a kayak trip
    { id: "B", text: "$\\frac{54}{240}$" },
    { id: "C", text: "$\\frac{96}{240}$" },
    // distractor: divides the guided-hike row total 96 by the no-guided-hike row total 144 instead of by the grand total 240
    { id: "D", text: "$\\frac{96}{144}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The guided-hike row total is $96$ and the grand total is $240$, so the probability is $\\frac{96}{240}$.\n\n**The Full Solution:**\nStep 1: Travelers who booked a guided hike appear in the \"Guided hike\" row: $54$ who also booked a kayak trip and $42$ who did not.\nStep 2: Add them: $54 + 42 = 96$ travelers booked a guided hike.\nStep 3: The selection is from all $240$ travelers, so the probability is $\\frac{96}{240}$. Check: $96 + 144 = 240$, the grand total ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{42}{240}$): counts only the travelers who booked a guided hike but not a kayak trip.\n* Choice B ($\\frac{54}{240}$): counts only the travelers who booked both activities.\n* Choice D ($\\frac{96}{144}$): divides by the number of travelers who did not book a guided hike instead of by all $240$ travelers.\n\n**Test Day Takeaway:** For a probability over a whole group, the numerator is the row or column total for the trait and the denominator is the grand total.",
  skills: ["probability-basics"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The population of a town decreased by $12\\%$ from $2010$ to $2020$. The population of the town in $2020$ was $4{,}048$. What was the population of the town in $2010$?",
  correctAnswer: "4600",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**The correct answer is $4600$.**\n\n**The Fast Way (~25s):** A $12\\%$ decrease leaves $88\\%$, so the $2020$ population is $0.88$ times the $2010$ population: $\\frac{4{,}048}{0.88} = 4{,}600$.\n\n**The Full Solution:**\nStep 1: Let $p$ be the population in $2010$. After a $12\\%$ decrease, the population is $p - 0.12p = 0.88p$.\nStep 2: Set this equal to the $2020$ population: $0.88p = 4{,}048$.\nStep 3: Divide: $p = \\frac{4{,}048}{0.88} = 4{,}600$. Check: $12\\%$ of $4{,}600$ is $552$, and $4{,}600 - 552 = 4{,}048$ ✓\n\n**Common Mistakes:**\n* About $4{,}534$: adds $12\\%$ of the $2020$ population, computing $1.12 \\times 4{,}048 = 4{,}533.76$. The $12\\%$ was taken of the $2010$ population, not the $2020$ population.\n* About $3{,}562$: takes $12\\%$ off again, computing $0.88 \\times 4{,}048 = 3{,}562.24$, which moves in the wrong direction.\n* About $3{,}614$: divides by $1.12$ instead of $0.88$, treating the change as an increase.\n\n**Test Day Takeaway:** To undo a percent decrease, divide by the multiplier that remains ($1 - 0.12 = 0.88$); adding the same percent back to the smaller number always falls short.",
  skills: ["percent-word-problems", "percent-of-value"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$\\frac{3}{4}(8x + c) = 6x - 15$\nIn the given equation, $c$ is a constant. If the equation has infinitely many solutions, what is the value of $c$?",
  choices: [
    { id: "A", text: "$-20$" },
    // distractor: reads the constant -15 off the right side without undoing the factor 3/4
    { id: "B", text: "$-15$" },
    // distractor: multiplies -15 by 3/4 instead of dividing by it, reversing the distribution
    { id: "C", text: "$-\\frac{45}{4}$" },
    // distractor: solves (3/4)c = 15, dropping the negative sign on the constant
    { id: "D", text: "$20$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Distributing gives $6x + \\frac{3}{4}c = 6x - 15$; for infinitely many solutions the constants must match, so $\\frac{3}{4}c = -15$ and $c = -20$.\n\n**The Full Solution:**\nStep 1: Distribute on the left side: $\\frac{3}{4}(8x + c) = 6x + \\frac{3}{4}c$.\nStep 2: The equation $6x + \\frac{3}{4}c = 6x - 15$ is true for every value of $x$ exactly when the two sides are identical. The $x$-terms already match, so the constants must match: $\\frac{3}{4}c = -15$.\nStep 3: Multiply both sides by $\\frac{4}{3}$: $c = -20$. Check: $\\frac{3}{4}(8x - 20) = 6x - 15$, the same expression as the right side ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-15$): matches $c$ to $-15$ directly, forgetting that $c$ is multiplied by $\\frac{3}{4}$ when the left side is distributed.\n* Choice C ($-\\frac{45}{4}$): multiplies $-15$ by $\\frac{3}{4}$ instead of dividing by $\\frac{3}{4}$.\n* Choice D ($20$): drops the negative sign, solving $\\frac{3}{4}c = 15$.\n\n**Test Day Takeaway:** A linear equation has infinitely many solutions when both sides are the same expression; distribute first, then match the $x$-coefficients and the constants.",
  skills: ["distributive-property"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The function $h$ is defined by $h(x) = -3x^{2} + 42x + 5$. What is the maximum value of $h(x)$?",
  correctAnswer: "152",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**The correct answer is $152$.**\n\n**The Fast Way (~30s):** The vertex is at $x = -\\frac{42}{2(-3)} = 7$, and $h(7) = -147 + 294 + 5 = 152$.\n\n**The Full Solution:**\nStep 1: The coefficient of $x^{2}$ is negative, so the graph of $y = h(x)$ opens downward and the maximum value of $h(x)$ occurs at the vertex.\nStep 2: Write $h$ in vertex form: $h(x) = -3\\left(x^{2} - 14x\\right) + 5 = -3(x - 7)^{2} + 147 + 5 = -3(x - 7)^{2} + 152$.\nStep 3: The term $-3(x - 7)^{2}$ is never positive, so the greatest value of $h(x)$ is $152$, reached when $x = 7$. Check: $h(7) = -3(49) + 42(7) + 5 = -147 + 294 + 5 = 152$ ✓\n\n**Common Mistakes:**\n* $7$: reports the $x$-coordinate of the vertex, where the maximum occurs, instead of the maximum value itself.\n* $5$: reports $h(0)$, the $y$-intercept, which is not the highest point of a downward-opening parabola.\n* $446$: drops the negative sign when squaring, computing $3(49) + 294 + 5$ instead of $-3(49) + 294 + 5$.\n\n**Test Day Takeaway:** For a downward-opening parabola, the maximum is the $y$-coordinate of the vertex; find $x = -\\frac{b}{2a}$, then substitute it back.",
  skills: ["converting-quadratic-forms"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The graph of $y = -2(x - h)^{2} + k$, where $h$ and $k$ are constants, is shown. This equation can be rewritten as $y = -2x^{2} + bx + c$, where $b$ and $c$ are constants. What is the value of $b$?",
  diagram: { type: "parabola", params: { vertex: { h: 3, k: 20 }, a: -2, xRange: [0, 6], yRange: [0, 22], showVertex: true, gridInterval: 2, xTickInterval: 2, yTickInterval: 4 } },
  correctAnswer: "12",
  explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~30s):** The vertex shown is $(3, 20)$, so $h = 3$; expanding $-2(x - 3)^{2}$ gives an $x$-term of $-2(-6x) = 12x$, so $b = 12$.\n\n**The Full Solution:**\nStep 1: The vertex of the graph is $(3, 20)$, so $h = 3$ and $k = 20$, and the equation is $y = -2(x - 3)^{2} + 20$.\nStep 2: Expand the square: $(x - 3)^{2} = x^{2} - 6x + 9$, so $y = -2x^{2} + 12x - 18 + 20$.\nStep 3: Combine constants: $y = -2x^{2} + 12x + 2$, so $b = 12$ (and $c = 2$). Check: the vertex of $y = -2x^{2} + 12x + 2$ is at $x = -\\frac{12}{2(-2)} = 3$, and $-2(9) + 36 + 2 = 20$ ✓\n\n**Common Mistakes:**\n* $-12$: drops a sign while expanding, writing $-2(x - 3)^{2}$ as $-2x^{2} - 12x + \\ldots$.\n* $6$: uses the $-6x$ from $(x - 3)^{2}$ and forgets to multiply by $-2$, or multiplies by $2$ and loses the sign.\n* $3$: reports $h$, the $x$-coordinate of the vertex, instead of the coefficient $b$.\n\n**Test Day Takeaway:** In $y = a(x - h)^{2} + k$, the $x$-coefficient after expanding is $-2ah$; read $h$ from the vertex, then multiply.",
  skills: ["distributive-property", "converting-quadratic-forms"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A sample of bacteria contained $6{,}000$ cells at the start of an experiment, and the number of cells doubled every $40$ minutes. Which equation gives the number of cells, $N$, in the sample $t$ minutes after the start of the experiment?",
  choices: [
    // distractor: swaps the starting count and the growth factor, using 2 as the initial value and 6,000 as the base
    { id: "A", text: "$N = 2(6{,}000)^{\\frac{t}{40}}$" },
    // distractor: multiplies the time by 40 instead of dividing, so one minute already produces 40 doublings
    { id: "B", text: "$N = 6{,}000(2)^{40t}$" },
    // distractor: swaps the growth factor and the doubling time, using 40 as the base and 2 as the period
    { id: "C", text: "$N = 6{,}000(40)^{\\frac{t}{2}}$" },
    { id: "D", text: "$N = 6{,}000(2)^{\\frac{t}{40}}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Start at $6{,}000$, multiply by $2$ once for every $40$ minutes, and the number of doublings in $t$ minutes is $\\frac{t}{40}$: $N = 6{,}000(2)^{\\frac{t}{40}}$.\n\n**The Full Solution:**\nStep 1: An exponential model has the form $N = a(b)^{\\text{number of periods}}$, where $a$ is the starting amount and $b$ is the factor for one period. Here $a = 6{,}000$ and $b = 2$.\nStep 2: One period is $40$ minutes, so after $t$ minutes the number of periods is $\\frac{t}{40}$.\nStep 3: The model is $N = 6{,}000(2)^{\\frac{t}{40}}$. Check: at $t = 40$, $N = 6{,}000(2)^{1} = 12{,}000$, double the start, and at $t = 0$, $N = 6{,}000$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: swaps the starting amount and the growth factor; at $t = 0$ this gives $N = 2$, not $6{,}000$.\n* Choice B: multiplies $t$ by $40$; after just $1$ minute this model would already show $40$ doublings.\n* Choice C: uses $40$ as the growth factor and $2$ as the period, so the count would multiply by $40$ every $2$ minutes.\n\n**Test Day Takeaway:** Check an exponential model at two easy inputs: $t = 0$ should give the starting amount, and one full period should apply the growth factor exactly once.",
  skills: ["exponential-growth-decay"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A banquet hall charges a fee of \\$192 plus \\$32 per guest for a party. The total charge for one party was \\$1,088. How many guests were at the party?",
  choices: [
    // distractor: divides the fee 192 by the per-guest charge 32, two numbers that are never divided in this situation
    { id: "A", text: "$6$" },
    { id: "B", text: "$28$" },
    // distractor: ignores the fee and divides the whole total: 1,088/32 = 34
    { id: "C", text: "$34$" },
    // distractor: adds the fee to the total instead of subtracting it: (1,088 + 192)/32 = 40
    { id: "D", text: "$40$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Linear Cost Setup**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Remove the fee, then divide by the charge per guest: $\\frac{1{,}088 - 192}{32} = \\frac{896}{32} = 28$.\n\n**The Full Solution:**\nStep 1: Let $g$ be the number of guests. The total charge is the fee plus $32$ dollars per guest: $192 + 32g = 1{,}088$.\nStep 2: Subtract $192$ from each side: $32g = 896$.\nStep 3: Divide by $32$: $g = 28$. Check: $192 + 32(28) = 192 + 896 = 1{,}088$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): divides the fee by the charge per guest, $\\frac{192}{32} = 6$; the fee is charged once and is not related to the number of guests.\n* Choice C ($34$): divides the whole total by $32$, treating all \\$1,088 as per-guest charges and ignoring the fee.\n* Choice D ($40$): adds the fee to the total instead of subtracting it, computing $\\frac{1{,}088 + 192}{32} = 40$.\n\n**Test Day Takeaway:** For a total equal to a one-time fee plus a rate times a count, subtract the fee first, then divide by the rate.",
  skills: ["word-problem-to-equation"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The linear function $f$ has $f(2) = 38$ and $f(8) = 86$. What is the slope of the graph of $y = f(x)$ in the $xy$-plane?",
  choices: [
    // distractor: inverts the ratio, computing run over rise as 6/48 = 0.125
    { id: "A", text: "$0.125$" },
    // distractor: uses the sum of the inputs, 2 + 8 = 10, as the run: 48/10 = 4.8
    { id: "B", text: "$4.8$" },
    // distractor: uses the later input 8 as the run instead of the change in inputs: 48/8 = 6
    { id: "C", text: "$6$" },
    { id: "D", text: "$8$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The graph passes through $(2, 38)$ and $(8, 86)$, so the slope is $\\frac{86 - 38}{8 - 2} = \\frac{48}{6} = 8$.\n\n**The Full Solution:**\nStep 1: The given values mean the graph of $y = f(x)$ contains the points $(2, 38)$ and $(8, 86)$.\nStep 2: The change in $y$ is $86 - 38 = 48$, and the change in $x$ is $8 - 2 = 6$.\nStep 3: The slope is $\\frac{48}{6} = 8$. Check: starting at $f(2) = 38$ and adding $8$ for each of the $6$ steps gives $38 + 48 = 86 = f(8)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.125$): divides the change in $x$ by the change in $y$, $\\frac{6}{48}$, which is the reciprocal of the slope.\n* Choice B ($4.8$): divides by the sum of the inputs, $2 + 8 = 10$, instead of their difference.\n* Choice C ($6$): divides by the input $8$ instead of the change in inputs, $8 - 2 = 6$.\n\n**Test Day Takeaway:** Slope is the change in $y$ over the change in $x$; subtract in the same order on top and bottom.",
  skills: ["slope-from-points"]
},

// ===== HARD (Q15–Q22) =====

{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$2x^{2} + kx + 8 = 0$\nIn the given equation, $k$ is an integer. If the equation has no real solutions, how many possible values of $k$ are there?",
  correctAnswer: "15",
  explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~35s):** No real solutions means the discriminant is negative: $k^{2} - 4(2)(8) < 0$, so $k^{2} < 64$ and $-8 < k < 8$. The integers $-7$ through $7$ number $15$.\n\n**The Full Solution:**\nStep 1: A quadratic equation $ax^{2} + bx + c = 0$ has no real solutions when $b^{2} - 4ac < 0$. Here $a = 2$, $b = k$, and $c = 8$, so the condition is $k^{2} - 64 < 0$.\nStep 2: Solve: $k^{2} < 64$ means $-8 < k < 8$. The endpoints are excluded, because $k = \\pm 8$ makes the discriminant $0$ and gives exactly one real solution.\nStep 3: The integers strictly between $-8$ and $8$ are $-7, -6, \\ldots, 6, 7$, which is $7 + 1 + 7 = 15$ values. Check the edges: $k = 7$ gives $49 - 64 = -15 < 0$ ✓, and $k = 8$ gives $64 - 64 = 0$, which is not negative ✓\n\n**Common Mistakes:**\n* $17$: includes $k = -8$ and $k = 8$, which give a discriminant of $0$ and therefore one real solution.\n* $7$: counts only the positive integers $1$ through $7$, ignoring $0$ and the negative values of $k$.\n* $8$: counts the integers $0$ through $7$ and forgets that $k^{2} < 64$ also allows negative values.\n\n**Test Day Takeaway:** \"No real solutions\" means the discriminant is strictly negative; turn $k^{2} < n$ into $-\\sqrt{n} < k < \\sqrt{n}$ and count both sides of zero.",
  skills: ["discriminant-analysis"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The right triangle shown is one of two congruent right triangles. The two triangles are joined along their longer legs to form a larger triangle. What is the area, in square units, of the larger triangle?",
  diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [13.856, 0], [13.856, 8]], sideLabels: ["", "8", "16"], rightAngleVertex: 1, showRightAngle: true } },
  choices: [
    // distractor: reports the length of the longer leg, 8 times sqrt(3), as if it were an area
    { id: "A", text: "$8\\sqrt{3}$" },
    // distractor: gives the area of one right triangle, 32 times sqrt(3), instead of the larger triangle formed by both
    { id: "B", text: "$32\\sqrt{3}$" },
    { id: "C", text: "$64\\sqrt{3}$" },
    // distractor: omits the factor 1/2 in the triangle area formula: 16 times 8 sqrt(3) = 128 sqrt(3)
    { id: "D", text: "$128\\sqrt{3}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Right Triangle Area with Surds**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The longer leg is $\\sqrt{16^{2} - 8^{2}} = 8\\sqrt{3}$, so each right triangle has area $\\frac{1}{2}(8)(8\\sqrt{3}) = 32\\sqrt{3}$, and the larger triangle is two of them: $64\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: The hypotenuse is $16$ and one leg is $8$, so by the Pythagorean theorem the other leg is $\\sqrt{16^{2} - 8^{2}} = \\sqrt{192} = 8\\sqrt{3}$. Since $8\\sqrt{3} > 8$, this is the longer leg.\nStep 2: The area of one right triangle is $\\frac{1}{2}(8)(8\\sqrt{3}) = 32\\sqrt{3}$ square units.\nStep 3: Joining two congruent triangles along a shared side doubles the area: $2(32\\sqrt{3}) = 64\\sqrt{3}$ square units. Check: the larger triangle has a base of $8 + 8 = 16$ and a height of $8\\sqrt{3}$, and $\\frac{1}{2}(16)(8\\sqrt{3}) = 64\\sqrt{3}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($8\\sqrt{3}$): this is the length of the longer leg, not an area.\n* Choice B ($32\\sqrt{3}$): this is the area of only one of the two right triangles.\n* Choice D ($128\\sqrt{3}$): multiplies the base $16$ by the height $8\\sqrt{3}$ without the factor $\\frac{1}{2}$.\n\n**Test Day Takeaway:** Find the missing leg with the Pythagorean theorem, simplify the radical, and remember that a shape built from congruent pieces has the sum of their areas.",
  skills: ["triangle-area"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The number of visitors to a museum increased by $15\\%$ from $2021$ to $2022$ and by $20\\%$ from $2022$ to $2023$. The number of visitors in $2023$ was $p\\%$ greater than the number of visitors in $2021$. What is the value of $p$?",
  correctAnswer: "38",
  explanation: "**SAT Pattern: Percent Increase**\n\n**The correct answer is $38$.**\n\n**The Fast Way (~30s):** Successive increases multiply: $1.15 \\times 1.20 = 1.38$, so the $2023$ number is $138\\%$ of the $2021$ number, which is $38\\%$ greater, and $p = 38$.\n\n**The Full Solution:**\nStep 1: Let $v$ be the number of visitors in $2021$. A $15\\%$ increase makes the $2022$ number $1.15v$.\nStep 2: The $20\\%$ increase applies to the $2022$ number, so the $2023$ number is $1.20 \\times 1.15v = 1.38v$.\nStep 3: Since $1.38v = v + 0.38v$, the $2023$ number is $38\\%$ greater than the $2021$ number, so $p = 38$. Check with $200$ visitors: $200$ becomes $230$, then $276$, and $\\frac{276 - 200}{200} = 0.38$ ✓\n\n**Common Mistakes:**\n* $35$: adds the two percents. The second increase is taken of the larger $2022$ number, so the increases compound.\n* $138$: reports the $2023$ number as a percent of the $2021$ number; $138\\%$ of the original is $38\\%$ greater than the original.\n* $3$: keeps only the extra growth from compounding, $0.15 \\times 0.20 = 0.03$, instead of the whole increase.\n\n**Test Day Takeaway:** Chain percent changes by multiplying their factors, then subtract $1$ to turn \"percent of\" into \"percent greater than.\"",
  skills: ["percent-of-value", "percent-change"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$x^{2} + y^{2} - 14x + 8y + 40 = 0$\nThe graph of the given equation in the $xy$-plane is a circle. Which equation is equivalent to the given equation?",
  choices: [
    { id: "A", text: "$(x - 7)^{2} + (y + 4)^{2} = 25$" },
    // distractor: completes both squares but never moves the constant 40 across, leaving 49 + 16 = 65 on the right
    { id: "B", text: "$(x - 7)^{2} + (y + 4)^{2} = 65$" },
    // distractor: adds 40 to the right side instead of subtracting it, giving 49 + 16 + 40 = 105
    { id: "C", text: "$(x - 7)^{2} + (y + 4)^{2} = 105$" },
    // distractor: flips the signs inside the parentheses, placing the center at (-7, 4) instead of (7, -4)
    { id: "D", text: "$(x + 7)^{2} + (y - 4)^{2} = 25$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Half of $-14$ is $-7$ and half of $8$ is $4$, so add $49 + 16 = 65$ to both sides of $x^{2} - 14x + y^{2} + 8y = -40$: $(x - 7)^{2} + (y + 4)^{2} = 25$.\n\n**The Full Solution:**\nStep 1: Group the $x$-terms and $y$-terms and move the constant: $x^{2} - 14x + y^{2} + 8y = -40$.\nStep 2: Complete each square. Half of $-14$ is $-7$, and $(-7)^{2} = 49$; half of $8$ is $4$, and $4^{2} = 16$. Adding $49$ and $16$ to both sides gives $(x - 7)^{2} + (y + 4)^{2} = -40 + 49 + 16$.\nStep 3: Simplify the right side: $(x - 7)^{2} + (y + 4)^{2} = 25$, a circle with center $(7, -4)$ and radius $5$. Check by expanding: $x^{2} - 14x + 49 + y^{2} + 8y + 16 = 25$ becomes $x^{2} + y^{2} - 14x + 8y + 40 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($= 65$): adds $49$ and $16$ but leaves the $40$ on the left side instead of moving it, so the right side is $65$ rather than $65 - 40$.\n* Choice C ($= 105$): moves the $40$ with the wrong sign, computing $49 + 16 + 40$.\n* Choice D: reverses the signs inside the parentheses; $(x + 7)^{2}$ expands to $x^{2} + 14x + 49$, which does not match the $-14x$ in the given equation.\n\n**Test Day Takeaway:** After completing the square, the right side is the sum of the added squares minus the constant that started on the left; expand your answer once to confirm the signs.",
  skills: ["circle-equation"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the distance between the points $(1, 5)$ and $(1 + 4t, 5 + 3t)$ is $35$, where $t$ is a positive constant. What is the value of $t$?",
  correctAnswer: "7",
  explanation: "**SAT Pattern: Distance Formula**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~30s):** The horizontal and vertical changes are $4t$ and $3t$, so the distance is $\\sqrt{(4t)^{2} + (3t)^{2}} = 5t$. Then $5t = 35$ and $t = 7$.\n\n**The Full Solution:**\nStep 1: The change in $x$ is $(1 + 4t) - 1 = 4t$, and the change in $y$ is $(5 + 3t) - 5 = 3t$.\nStep 2: By the distance formula, the distance is $\\sqrt{(4t)^{2} + (3t)^{2}} = \\sqrt{25t^{2}} = 5t$, since $t > 0$.\nStep 3: Set $5t = 35$, so $t = 7$. Check: the second point is $(29, 26)$, and $\\sqrt{28^{2} + 21^{2}} = \\sqrt{784 + 441} = \\sqrt{1225} = 35$ ✓\n\n**Common Mistakes:**\n* $5$: adds the changes as if distance were $4t + 3t = 7t$, then solves $7t = 35$.\n* $8.75$: uses only the horizontal change, solving $4t = 35$.\n* About $1.18$: sets $25t^{2} = 35$, forgetting to square the distance on the other side.\n\n**Test Day Takeaway:** When both coordinate changes share a factor of $t$, factor it out of the distance formula; changes of $3t$ and $4t$ give a distance of $5t$.",
  skills: ["coordinate-geometry"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$f(x) = x^{2} - 2x$\n$g(x) = x + 4$\nThe functions $f$ and $g$ are defined by the given equations. If $f(g(a)) = 35$ and $a > 0$, what is the value of $a$?",
  choices: [
    { id: "A", text: "$3$" },
    // distractor: solves f(u) = 35 for u = g(a) = 7 and stops, reporting g(a) instead of a
    { id: "B", text: "$7$" },
    // distractor: takes the other root u = -5, finds a = -9, and drops the negative sign instead of rejecting it
    { id: "C", text: "$9$" },
    // distractor: adds 4 to u = 7 instead of subtracting it, solving a = u + 4 rather than a + 4 = u
    { id: "D", text: "$11$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** Let $u = g(a)$. Then $u^{2} - 2u = 35$, so $(u - 7)(u + 5) = 0$ and $u = 7$ or $u = -5$. Since $a + 4 = u$, $a = 3$ or $a = -9$, and the positive value is $3$.\n\n**The Full Solution:**\nStep 1: Write $f(g(a))$ in terms of $u = g(a) = a + 4$: $f(u) = u^{2} - 2u$, so $u^{2} - 2u = 35$.\nStep 2: Rearrange and factor: $u^{2} - 2u - 35 = 0$, so $(u - 7)(u + 5) = 0$, giving $u = 7$ or $u = -5$.\nStep 3: Solve $a + 4 = u$: $a = 3$ or $a = -9$. Since $a > 0$, $a = 3$. Check: $g(3) = 7$ and $f(7) = 49 - 14 = 35$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($7$): this is $g(a)$, the input to $f$; the question asks for $a$.\n* Choice C ($9$): comes from the root $u = -5$, which gives $a = -9$; that value is negative and is ruled out by $a > 0$, not turned positive.\n* Choice D ($11$): adds $4$ to $7$ instead of subtracting it, reversing $g$.\n\n**Test Day Takeaway:** For $f(g(a))$, solve for the inner output first, then undo $g$ to get $a$, and apply any condition on $a$ at the end.",
  skills: ["function-composition"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table shows five values of $x$ and their corresponding values of $y$, where $y$ is a quadratic function of $x$. What is the distance between the two $x$-intercepts of the graph of this function in the $xy$-plane?",
  questionTable: { headers: ["x", "y"], rows: [["0", "-14"], ["1", "-24"], ["2", "-30"], ["3", "-32"], ["4", "-30"]] },
  choices: [
    // distractor: reports the distance from the vertex to one intercept, 4, which is half the distance between the two intercepts
    { id: "A", text: "$4$" },
    // distractor: reports the sum of the two intercepts, 7 + (-1) = 6, instead of the distance between them
    { id: "B", text: "$6$" },
    { id: "C", text: "$8$" },
    // distractor: stops at (x - 3)^2 = 16 and reports 16, the square of the half-distance
    { id: "D", text: "$16$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** The $y$-values are symmetric about $x = 3$ (both $x = 2$ and $x = 4$ give $-30$), so the vertex is $(3, -32)$. From $x = 0$, $-14 = a(9) - 32$, so $a = 2$; then $2(x - 3)^{2} = 32$ gives $x - 3 = \\pm 4$, and the intercepts are $8$ apart.\n\n**The Full Solution:**\nStep 1: The table is symmetric about $x = 3$, so the vertex is $(3, -32)$ and $y = a(x - 3)^{2} - 32$ for some constant $a$.\nStep 2: Use $(0, -14)$: $-14 = 9a - 32$, so $9a = 18$ and $a = 2$. The function is $y = 2(x - 3)^{2} - 32$.\nStep 3: Set $y = 0$: $(x - 3)^{2} = 16$, so $x = 7$ or $x = -1$, and the distance between the intercepts is $7 - (-1) = 8$. Check with $(1, -24)$: $2(1 - 3)^{2} - 32 = 8 - 32 = -24$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): this is the distance from the axis of symmetry to one intercept, half of the distance asked for.\n* Choice B ($6$): adds the intercepts, $7 + (-1) = 6$, instead of subtracting them.\n* Choice D ($16$): stops at $(x - 3)^{2} = 16$ and reports $16$ without taking the square root.\n\n**Test Day Takeaway:** In a table of a quadratic, matching $y$-values locate the axis of symmetry; find the vertex form, then the intercepts sit equally far on each side of that axis.",
  skills: ["quadratics"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A data set consists of $20$ values. Eleven of the values are $6$, and the other values are $10$, $10$, $12$, $12$, $14$, $14$, $16$, $16$, and $18$. What is the median of the data set?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Median Calculation**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~25s):** With $20$ values, the median is the mean of the $10$th and $11$th values in order. The eleven $6$s fill positions $1$ through $11$, so the median is $6$.\n\n**The Full Solution:**\nStep 1: Order the $20$ values from least to greatest: $6$ appears $11$ times, followed by $10, 10, 12, 12, 14, 14, 16, 16, 18$.\nStep 2: Since there is an even number of values, the median is the mean of the $10$th and $11$th values. Positions $1$ through $11$ are all $6$.\nStep 3: The median is $\\frac{6 + 6}{2} = 6$. Check: $11$ of the $20$ values are $6$, more than half, so the middle of the ordered list must be $6$ ✓\n\n**Common Mistakes:**\n* $14$: finds the median of only the nine values that are not $6$.\n* $10$: averages the median of the $6$s and the median of the other nine values, $\\frac{6 + 14}{2}$.\n* $9.4$: computes the mean, $\\frac{66 + 122}{20}$, instead of the median.\n\n**Test Day Takeaway:** When one value repeats often enough to cover the middle positions, that value is the median; count how far the repeats reach before averaging anything.",
  skills: ["find-median"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 6 — Math Module 2 (22 questions) — hard track
// Frozen wavy flow: easy 3 [1,6,16] / medium 7 [2,3,5,9,12,14,17] /
// hard 12 [4,7,8,10,11,13,15,18,19,20,21,22]. Bands: Q1 band 3 opener,
// band-2 breathers Q6 (vertical angles figure) and Q16 (range bar graph),
// medium band 5-6, hard band 7 with Q9/Q11 at band 6.
// Band ramp holds: mean(Q1-5)=5.0 < mean(Q18-22)=7.0.
// Q1-5 warm-up rule: every opener is 2+ steps or carries a trap
// (ratio-sum probability, no-solution coefficient, percent-of-ORIGINAL
// linear-vs-exponential trap, quadratic-linear greatest root, vertex swap).

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "The scatterplot shows the age $x$, in years, and the height $y$, in feet, of each of $12$ trees. The line of best fit shown has the equation $y = 0.5x + 1.5$. For what value of $x$ does the line of best fit predict a height of $9.5$ feet?",
  diagram: { type: "scatterplot", params: { points: [[2, 2.5], [4, 3.5], [6, 5], [8, 5], [10, 6.5], [12, 7], [14, 9], [16, 10], [18, 11], [20, 11], [22, 13], [23, 12.5]], xMin: 0, xMax: 24, yMin: 0, yMax: 14, xGridStep: 2, yGridStep: 2, xLabelStep: 4, yLabelStep: 4, xLabel: "Age (years)", yLabel: "Height (feet)", bestFitLine: { slope: 0.5, intercept: 1.5 } } },
  choices: [
    // distractor: swaps the slope and the intercept: computes (9.5 - 0.5)/1.5 = 6
    { id: "A", text: "$6$" },
    { id: "B", text: "$16$" },
    // distractor: ignores the intercept and divides 9.5 by the slope: 9.5/0.5 = 19
    { id: "C", text: "$19$" },
    // distractor: adds the intercept instead of subtracting it: (9.5 + 1.5)/0.5 = 22
    { id: "D", text: "$22$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** A predicted height is a $y$-value, so set $0.5x + 1.5 = 9.5$. Subtracting the intercept leaves $0.5x = 8$, so $x = 16$.\n\n**The Full Solution:**\nStep 1: On this scatterplot the age is $x$ and the height is $y$, so a predicted height of $9.5$ feet means $y = 9.5$ on the line of best fit, not at a plotted point.\nStep 2: Substitute into the equation of the line: $9.5 = 0.5x + 1.5$. Subtract $1.5$ from both sides to get $8 = 0.5x$.\nStep 3: Divide by $0.5$: $x = 16$. Check by predicting forward: $0.5(16) + 1.5 = 8 + 1.5 = 9.5$ feet ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): swaps the roles of the slope and the intercept, computing $(9.5 - 0.5) \\div 1.5 = 6$.\n* Choice C ($19$): drops the intercept and divides $9.5$ by $0.5$; the line predicts $0.5(19) + 1.5 = 11$ feet at that age, not $9.5$.\n* Choice D ($22$): adds $1.5$ instead of subtracting it, giving $(9.5 + 1.5) \\div 0.5 = 22$.\n\n**Test Day Takeaway:** Working backward on a line of best fit is the same algebra as working forward: undo the intercept first, then divide by the slope.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, line $p$ is defined by $2x + 5y = 40$. Line $q$ is perpendicular to line $p$ and passes through the point $(10, 5)$. Line $q$ has an x-intercept of $(a, 0)$. What is the value of $a$?",
  choices: [
    // distractor: uses slope 2/5, the reciprocal without the sign change: y = 0.4x + 1 crosses the x-axis at -2.5
    { id: "A", text: "$-2.5$" },
    { id: "B", text: "$8$" },
    // distractor: uses slope -5/2, changing the sign twice: y = -2.5x + 30 crosses the x-axis at 12
    { id: "C", text: "$12$" },
    // distractor: reuses line p's own slope -2/5: y = -0.4x + 9 crosses the x-axis at 22.5
    { id: "D", text: "$22.5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** Line $p$ has slope $-\\frac{2}{5}$, so line $q$ has slope $\\frac{5}{2}$. Through $(10, 5)$ that is $y = \\frac{5}{2}x - 20$, which equals $0$ at $x = 8$.\n\n**The Full Solution:**\nStep 1: Write line $p$ in slope-intercept form: $5y = -2x + 40$, so $y = -\\frac{2}{5}x + 8$ and its slope is $-\\frac{2}{5}$.\nStep 2: A perpendicular line has the negative reciprocal slope, $\\frac{5}{2}$. Using the point $(10, 5)$: $5 = \\frac{5}{2}(10) + b$, so $b = 5 - 25 = -20$ and line $q$ is $y = \\frac{5}{2}x - 20$.\nStep 3: Set $y = 0$: $0 = \\frac{5}{2}x - 20$, so $x = 8$ and $a = 8$. Check: $\\left(-\\frac{2}{5}\\right)\\left(\\frac{5}{2}\\right) = -1$, and $\\frac{5}{2}(10) - 20 = 5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2.5$): uses $\\frac{2}{5}$, the reciprocal with no sign change, giving $y = 0.4x + 1$, which crosses the x-axis at $-2.5$.\n* Choice C ($12$): changes the sign twice and uses $-\\frac{5}{2}$, giving $y = -2.5x + 30$, which crosses at $12$.\n* Choice D ($22.5$): keeps line $p$'s own slope $-\\frac{2}{5}$, which produces a line parallel to $p$, not perpendicular to it.\n\n**Test Day Takeaway:** Perpendicular slopes multiply to $-1$: flip and change the sign, then use the given point to find the intercept before answering what was actually asked.",
  skills: ["perpendicular-negative-reciprocal"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$x = 3y - 10$\n$4x - 7y = 70$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x$?",
  choices: [
    // distractor: solves the system correctly for y = 22 but reports y instead of x
    { id: "A", text: "$22$" },
    // distractor: flips the sign of the constant, using x = 3y + 10: 12y + 40 - 7y = 70 gives y = 6 and x = 28
    { id: "B", text: "$28$" },
    // distractor: multiplies only the 3y by 4 when substituting, writing 4(3y - 10) as 12y - 10: 5y = 80 gives y = 16 and x = 38
    { id: "C", text: "$38$" },
    { id: "D", text: "$56$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** Substitute $3y - 10$ for $x$ in the second equation: $4(3y - 10) - 7y = 70$, so $5y - 40 = 70$ and $y = 22$. Then $x = 3(22) - 10 = 56$.\n\n**The Full Solution:**\nStep 1: The first equation isolates $x$, so substitute it into the second equation: $4(3y - 10) - 7y = 70$.\nStep 2: Distribute the $4$ to both terms and combine like terms: $12y - 40 - 7y = 70$, so $5y - 40 = 70$, $5y = 110$, and $y = 22$.\nStep 3: Substitute $y = 22$ into the first equation: $x = 3(22) - 10 = 56$. Check in the second equation: $4(56) - 7(22) = 224 - 154 = 70$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($22$): this is the value of $y$; the question asks for $x$.\n* Choice B ($28$): uses $x = 3y + 10$, flipping the sign of the constant, so $12y + 40 - 7y = 70$ gives $y = 6$ and $x = 28$.\n* Choice C ($38$): multiplies only the $3y$ by $4$, writing $4(3y - 10)$ as $12y - 10$, so $5y = 80$ gives $y = 16$ and $x = 38$.\n\n**Test Day Takeaway:** When you substitute a binomial, put it in parentheses and distribute the coefficient to every term, then reread the question to see which variable it asks for.",
  skills: ["substitution-method"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$5x^{2} + 12 = 34x$\nWhat is the sum of the solutions to the given equation?",
  choices: [
    // distractor: applies -b/a with b = 34 instead of the rearranged b = -34, giving -34/5
    { id: "A", text: "$-\\frac{34}{5}$" },
    // distractor: inverts the ratio, writing a/b as 5/34
    { id: "B", text: "$\\frac{5}{34}$" },
    // distractor: gives the product of the solutions, c/a = 12/5, instead of the sum
    { id: "C", text: "$\\frac{12}{5}$" },
    { id: "D", text: "$\\frac{34}{5}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** In standard form the equation is $5x^{2} - 34x + 12 = 0$, so the sum of the solutions is $-\\frac{b}{a} = \\frac{34}{5}$.\n\n**The Full Solution:**\nStep 1: Move every term to one side first. Subtract $34x$ from both sides: $5x^{2} - 34x + 12 = 0$, so $a = 5$, $b = -34$, and $c = 12$.\nStep 2: For a quadratic $ax^{2} + bx + c = 0$ with two solutions, their sum is $-\\frac{b}{a}$. Here that is $-\\frac{-34}{5} = \\frac{34}{5}$.\nStep 3: Confirm there are two real solutions: $b^{2} - 4ac = 1156 - 240 = 916 > 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{34}{5}$): uses $-\\frac{b}{a}$ with $b$ read as $+34$ from the unrearranged equation, so the sign comes out wrong.\n* Choice B ($\\frac{5}{34}$): inverts the ratio and reports $\\frac{a}{b}$ without the sign.\n* Choice C ($\\frac{12}{5}$): gives $\\frac{c}{a}$, which is the product of the solutions, not their sum.\n\n**Test Day Takeaway:** The sum and product shortcuts read off standard form only, so move every term to one side before you name $a$, $b$, and $c$.",
  skills: ["quadratic-factoring"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "medium",
  band: 6,
  question: "$y = 2x^{2} + 8x + c$\nIn the given equation, $c$ is a constant. The graph of the equation in the $xy$-plane has no x-intercepts. Which of the following must be true?",
  choices: [
    // distractor: flips the inequality, reading 64 - 8c < 0 as c < 8
    { id: "A", text: "$c < 8$" },
    // distractor: uses the boundary case 64 - 8c = 0, where the graph touches the x-axis exactly once
    { id: "B", text: "$c = 8$" },
    { id: "C", text: "$c > 8$" },
    // distractor: computes the discriminant as b^2 - ac = 64 - 2c, giving c > 32
    { id: "D", text: "$c > 32$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** No x-intercepts means $b^{2} - 4ac < 0$: $64 - 8c < 0$, so $c > 8$.\n\n**The Full Solution:**\nStep 1: The graph meets the x-axis where $2x^{2} + 8x + c = 0$. No x-intercepts means this equation has no real solutions.\nStep 2: A quadratic equation has no real solutions exactly when its discriminant is negative: $8^{2} - 4(2)(c) = 64 - 8c < 0$.\nStep 3: Add $8c$ to both sides and divide by $8$: $64 < 8c$, so $c > 8$. Check: $c = 10$ gives $64 - 80 = -16 < 0$, and $c = 6$ gives $64 - 48 = 16 > 0$, two x-intercepts ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($c < 8$): reverses the inequality; $c = 6$ makes the discriminant positive, so the graph crosses the x-axis twice.\n* Choice B ($c = 8$): is the boundary case, where the discriminant is $0$ and the graph touches the x-axis once.\n* Choice D ($c > 32$): drops the $4$ from $4ac$ and solves $64 - 2c < 0$; it is not a must-be-true statement, since $c = 10$ works but is not greater than $32$.\n\n**Test Day Takeaway:** Translate x-intercepts into the discriminant: none means negative, one means zero, two means positive, and keep the $4$ in $4ac$.",
  skills: ["discriminant-analysis"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In right triangle $DEF$ shown, $\\tan F = \\frac{12}{5}$. The area of triangle $DEF$ is $270$ square units. What is the perimeter, in units, of triangle $DEF$?",
  diagram: { type: "rightTriangle", params: { vertices: [[12, 0], [0, 0], [0, 5]], labels: ["D", "E", "F"], rightAngleVertex: 1, showRightAngle: true } },
  correctAnswer: "90",
  explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**The correct answer is $90$.**\n\n**The Fast Way (~45s):** $\\tan F = \\frac{12}{5}$ makes the legs $12k$ and $5k$, so the area is $30k^{2} = 270$ and $k = 3$. The sides are then $36$, $15$, and $39$, for a perimeter of $90$.\n\n**The Full Solution:**\nStep 1: The right angle is at $E$, so $\\tan F = \\frac{DE}{EF} = \\frac{12}{5}$. Write $DE = 12k$ and $EF = 5k$ for some positive $k$.\nStep 2: The legs are the base and height: $\\frac{1}{2}(12k)(5k) = 30k^{2} = 270$, so $k^{2} = 9$ and $k = 3$. That gives $DE = 36$ and $EF = 15$.\nStep 3: The hypotenuse is $DF = \\sqrt{36^{2} + 15^{2}} = \\sqrt{1296 + 225} = \\sqrt{1521} = 39$, so the perimeter is $36 + 15 + 39 = 90$. Check the area: $\\frac{1}{2}(36)(15) = 270$ ✓\n\n**Common Mistakes:**\n* $30$: treats $12$ and $5$ as the actual leg lengths and adds $5 + 12 + 13$, ignoring the given area.\n* $270$: solves $30k = 270$ instead of $30k^{2} = 270$, getting $k = 9$ and sides $108$, $45$, and $117$.\n* $102$: adds the legs to get the hypotenuse ($36 + 15 = 51$) instead of using the Pythagorean theorem.\n\n**Test Day Takeaway:** A tangent ratio fixes the shape, not the size: introduce a scale factor $k$, and remember that area carries $k^{2}$ while perimeter carries $k$.",
  skills: ["soh-cah-toa"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, line $j$ passes through the points $(1, 3)$ and $(9, -1)$. Line $k$ is perpendicular to line $j$ and is defined by $ax + 12y = 60$, where $a$ is a constant. What is the value of $a$?",
  correctAnswer: "-24",
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $-24$.**\n\n**The Fast Way (~45s):** Line $j$ has slope $\\frac{-1 - 3}{9 - 1} = -\\frac{1}{2}$, so line $k$ must have slope $2$. Since $ax + 12y = 60$ has slope $-\\frac{a}{12}$, $-\\frac{a}{12} = 2$ and $a = -24$.\n\n**The Full Solution:**\nStep 1: Find the slope of line $j$ from its two points: $\\frac{-1 - 3}{9 - 1} = \\frac{-4}{8} = -\\frac{1}{2}$.\nStep 2: A perpendicular line has the negative reciprocal slope, so line $k$ has slope $2$. Solve its equation for $y$: $12y = -ax + 60$, so $y = -\\frac{a}{12}x + 5$ and its slope is $-\\frac{a}{12}$.\nStep 3: Set the slopes equal: $-\\frac{a}{12} = 2$, so $a = -24$. Check: with $a = -24$, line $k$ is $-24x + 12y = 60$, or $y = 2x + 5$, and $\\left(-\\frac{1}{2}\\right)(2) = -1$ ✓\n\n**Common Mistakes:**\n* $24$: reads the slope of $ax + 12y = 60$ as $\\frac{a}{12}$ and solves $\\frac{a}{12} = 2$, dropping the sign that appears when the $ax$ term moves across.\n* $6$: uses line $j$'s own slope, solving $-\\frac{a}{12} = -\\frac{1}{2}$; that makes the lines parallel, not perpendicular.\n* $-6$: changes the sign of the slope without flipping the fraction, solving $-\\frac{a}{12} = \\frac{1}{2}$.\n\n**Test Day Takeaway:** A line written as $Ax + By = C$ has slope $-\\frac{A}{B}$; solve for $y$ before matching slopes, or the sign of the constant comes out backward.",
  skills: ["perpendicular-negative-reciprocal"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In right triangle $ABC$, angle $C$ is a right angle, $AC = 63$, and $BC = 16$. What is the value of $AB - AC$?",
  choices: [
    { id: "A", text: "$2$" },
    // distractor: reports BC, 16, instead of the difference AB - AC
    { id: "B", text: "$16$" },
    // distractor: subtracts the shorter leg from the hypotenuse: AB - BC = 65 - 16 = 49
    { id: "C", text: "$49$" },
    // distractor: reports AB, 65, and never subtracts AC
    { id: "D", text: "$65$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** $AB$ is the hypotenuse, so $AB = \\sqrt{63^{2} + 16^{2}} = 65$, and $AB - AC = 65 - 63 = 2$.\n\n**The Full Solution:**\nStep 1: Angle $C$ is the right angle, so $\\overline{AC}$ and $\\overline{BC}$ are the legs and $\\overline{AB}$ is the hypotenuse.\nStep 2: Apply the Pythagorean theorem: $AB^{2} = 63^{2} + 16^{2} = 3969 + 256 = 4225$, so $AB = \\sqrt{4225} = 65$.\nStep 3: The question asks for a difference, not a length: $AB - AC = 65 - 63 = 2$. Check: $65^{2} = 4225 = 63^{2} + 16^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($16$): repeats the length of $\\overline{BC}$; the hypotenuse is only $2$ longer than $\\overline{AC}$ because $\\overline{BC}$ is short compared with $\\overline{AC}$.\n* Choice C ($49$): subtracts the wrong leg, computing $AB - BC = 65 - 16$.\n* Choice D ($65$): stops at the hypotenuse and never takes the difference.\n\n**Test Day Takeaway:** Finish the Pythagorean theorem, then reread the last line: the question may ask for a difference of lengths, not the hypotenuse itself.",
  skills: ["pythagorean-theorem"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "$4^{3x} = 8^{x + 2}$\nWhich equation has the same solution as the given equation?",
  choices: [
    { id: "A", text: "$6x = 3x + 6$" },
    // distractor: rewrites both sides in base 2 but does not distribute the 3 over x + 2, writing 3x + 2
    { id: "B", text: "$6x = 3x + 2$" },
    // distractor: sets the exponents equal without rewriting the bases, as though 4 and 8 were the same base
    { id: "C", text: "$3x = x + 2$" },
    // distractor: rewrites 4^(3x) as 2^(12x), multiplying the exponent by 4 instead of by 2
    { id: "D", text: "$12x = 3x + 6$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Write both sides in base $2$: $4^{3x} = 2^{6x}$ and $8^{x + 2} = 2^{3x + 6}$. Equal powers of $2$ force $6x = 3x + 6$.\n\n**The Full Solution:**\nStep 1: Both bases are powers of $2$: $4 = 2^{2}$ and $8 = 2^{3}$.\nStep 2: Apply the power-of-a-power rule: $\\left(2^{2}\\right)^{3x} = 2^{6x}$ and $\\left(2^{3}\\right)^{x + 2} = 2^{3(x + 2)} = 2^{3x + 6}$.\nStep 3: With one common base, the exponents must be equal: $6x = 3x + 6$. Check by solving: $x = 2$, and $4^{6} = 4096 = 8^{4}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($6x = 3x + 2$): forgets to distribute the $3$ across $x + 2$.\n* Choice C ($3x = x + 2$): sets the exponents equal while the bases are still $4$ and $8$, which is valid only once the bases match.\n* Choice D ($12x = 3x + 6$): turns $4^{3x}$ into $2^{12x}$ by multiplying by $4$ rather than by the exponent $2$.\n\n**Test Day Takeaway:** Rewrite both sides with the same base first, then set the exponents equal, distributing across every term in each exponent.",
  skills: ["exponential-functions"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$\\sqrt{x + 12} = x$\nWhat are all the solutions to the given equation?",
  choices: [
    // distractor: keeps the candidate -3 and discards 4, but a square root is never negative, so -3 fails the original equation
    { id: "A", text: "$-3$ only" },
    { id: "B", text: "$4$ only" },
    // distractor: solves the squared equation and skips the check, so the extraneous candidate -3 is kept alongside 4
    { id: "C", text: "$-3$ and $4$" },
    // distractor: squares only the left side, reducing the equation to x + 12 = x, and concludes no value works
    { id: "D", text: "There are no solutions." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Radical Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Squaring gives $x + 12 = x^{2}$, so $x^{2} - x - 12 = (x - 4)(x + 3) = 0$. Only $x = 4$ survives the check, because the left side of the original equation is never negative.\n\n**The Full Solution:**\nStep 1: Square both sides: $\\left(\\sqrt{x + 12}\\right)^{2} = x^{2}$, so $x + 12 = x^{2}$.\nStep 2: Set the quadratic equal to $0$ and factor: $x^{2} - x - 12 = 0$, so $(x - 4)(x + 3) = 0$ and the candidates are $x = 4$ and $x = -3$.\nStep 3: Test each candidate in the original equation. For $x = 4$: $\\sqrt{16} = 4$ ✓. For $x = -3$: $\\sqrt{9} = 3$, but the right side is $-3$, so this candidate is extraneous ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$ only): keeps the candidate that fails the check and discards the one that works.\n* Choice C ($-3$ and $4$): trusts the squared equation without testing; squaring can create solutions the original equation does not have.\n* Choice D (no solutions): comes from squaring only the radical side, which collapses the equation to $x + 12 = x$.\n\n**Test Day Takeaway:** After squaring, substitute every candidate back into the original equation; a candidate that makes the non-radical side negative is always extraneous.",
  skills: ["radical-equations"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table shows the mass, in grams, of a substance remaining in a sample $t$ hours after the mass was first measured. Which equation defines $A$, where $A(t)$ is the mass, in grams, $t$ hours after the first measurement?",
  diagram: { type: "dataTable", params: { headers: ["Time (hours)", "Mass (grams)"], rows: [["0", "640"], ["4", "480"], ["8", "360"], ["12", "270"]] } },
  choices: [
    { id: "A", text: "$A(t) = 640(0.75)^{t/4}$" },
    // distractor: inverts the exponent so the factor applies four times per hour: at t = 4 it predicts about 6.4 grams, not 480
    { id: "B", text: "$A(t) = 640(0.75)^{4t}$" },
    // distractor: treats 0.75 as the hourly factor: at t = 4 it predicts 202.5 grams, not 480
    { id: "C", text: "$A(t) = 640(0.75)^{t}$" },
    // distractor: uses the 25 percent lost as the factor: at t = 4 it predicts 160 grams, not 480
    { id: "D", text: "$A(t) = 640(0.25)^{t/4}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Each mass is $0.75$ times the one before, and the measurements are $4$ hours apart, so the exponent counts four-hour intervals: $A(t) = 640(0.75)^{t/4}$.\n\n**The Full Solution:**\nStep 1: Divide consecutive masses: $\\frac{480}{640} = 0.75$, $\\frac{360}{480} = 0.75$, and $\\frac{270}{360} = 0.75$. A constant ratio means an exponential model with initial value $640$.\nStep 2: The factor $0.75$ applies once every $4$ hours, so after $t$ hours it has applied $\\frac{t}{4}$ times, and $A(t) = 640(0.75)^{t/4}$.\nStep 3: Test the model on a row of the table: $A(8) = 640(0.75)^{2} = 640(0.5625) = 360$ grams ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($640(0.75)^{4t}$): flips the exponent, applying the factor four times an hour; at $t = 4$ it predicts about $6.4$ grams instead of $480$.\n* Choice C ($640(0.75)^{t}$): treats $0.75$ as the hourly factor; at $t = 4$ it predicts $202.5$ grams.\n* Choice D ($640(0.25)^{t/4}$): uses the $25\\%$ lost as the factor instead of the $75\\%$ that remains; at $t = 4$ it predicts $160$ grams.\n\n**Test Day Takeaway:** In an exponential model the base is the fraction that remains, and the exponent counts how many intervals have passed, so divide $t$ by the length of the interval.",
  skills: ["exponential-growth-decay"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A store received $250$ lamps: $40\\%$ from supplier A and the rest from supplier B. Of these, $6\\%$ of the lamps from supplier A and $10\\%$ of the lamps from supplier B were defective. One of the defective lamps will be selected at random. What is the probability of selecting a lamp from supplier A?",
  choices: [
    // distractor: gives the probability that a lamp from supplier A is defective, 6 out of 100, reversing the condition
    { id: "A", text: "$\\frac{3}{50}$" },
    // distractor: gives the overall defect rate, 21 defective lamps out of all 250
    { id: "B", text: "$\\frac{21}{250}$" },
    { id: "C", text: "$\\frac{2}{7}$" },
    // distractor: gives the share of all lamps from supplier A, 100 out of 250, ignoring that the lamp is defective
    { id: "D", text: "$\\frac{2}{5}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Basic Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** Supplier A sent $0.06(100) = 6$ defective lamps and supplier B sent $0.10(150) = 15$, so there are $21$ defective lamps and $\\frac{6}{21} = \\frac{2}{7}$ of them came from supplier A.\n\n**The Full Solution:**\nStep 1: Split the shipment: $40\\%$ of $250$ is $100$ lamps from supplier A, leaving $250 - 100 = 150$ from supplier B.\nStep 2: Count the defective lamps: $6\\%$ of $100$ is $6$, and $10\\%$ of $150$ is $15$, for $6 + 15 = 21$ defective lamps in all.\nStep 3: The lamp is selected from the defective lamps only, so the denominator is $21$, not $250$: the probability is $\\frac{6}{21} = \\frac{2}{7}$. Check: $\\frac{6}{21} + \\frac{15}{21} = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{50}$): answers the reversed question, the probability that a lamp from supplier A is defective, $\\frac{6}{100}$.\n* Choice B ($\\frac{21}{250}$): gives the defect rate for the whole shipment, using all $250$ lamps as the denominator.\n* Choice D ($\\frac{2}{5}$): gives supplier A's share of all $250$ lamps, ignoring that the lamp selected is defective.\n\n**Test Day Takeaway:** When the selection is made from a smaller group, that group is the denominator; count the members of that group first, then count how many of them meet the condition.",
  skills: ["probability-basics"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A household's water bills for nine months were \\$38, \\$41, \\$43, \\$44, \\$46, \\$47, \\$49, \\$52, and \\$207. By how many dollars does the mean of these bills exceed the median?",
  choices: [
    // distractor: drops the \$207 bill before averaging (mean 45) and compares that with the median 46
    { id: "A", text: "$1$" },
    // distractor: reads the median as 47, the sixth of the nine bills, giving 63 - 47 = 16
    { id: "B", text: "$16$" },
    { id: "C", text: "$17$" },
    // distractor: uses 45, the median of the eight bills without the \$207 bill, giving 63 - 45 = 18
    { id: "D", text: "$18$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** The nine bills total \\$567, so the mean is \\$63, while the fifth of the nine ordered bills, \\$46, is the median. The mean exceeds the median by $63 - 46 = 17$ dollars.\n\n**The Full Solution:**\nStep 1: Add the bills: $38 + 41 + 43 + 44 + 46 + 47 + 49 + 52 + 207 = 567$, so the mean is $\\frac{567}{9} = 63$ dollars.\nStep 2: The bills are already in order, and with nine values the median is the fifth one, \\$46. The single \\$207 bill pulls the mean far above the middle of the data but does not move the median.\nStep 3: Subtract: $63 - 46 = 17$ dollars. Check the pull of the outlier: without it, the other eight bills have a mean of \\$45, just below the median ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): removes the \\$207 bill first, which the question does not ask for; that mean of \\$45 differs from the median by only $1$.\n* Choice B ($16$): counts to the sixth bill, \\$47, for the median; with nine values the middle position is the fifth.\n* Choice D ($18$): pairs the full mean of \\$63 with \\$45, the median of the other eight bills.\n\n**Test Day Takeaway:** One extreme value moves the mean and leaves the median almost untouched, so compute each from the full data set exactly as given.",
  skills: ["calculate-mean", "find-median"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A scale shows each weight as $25\\%$ greater than the actual weight. The weights shown for $15$ boxes have a mean of $46$ pounds and a range of $18$ pounds. What are the mean and range of the actual weights of the boxes?",
  choices: [
    // distractor: subtracts 25 percent of each weight shown (multiplies by 0.75) instead of dividing by 1.25, giving 34.5 and 13.5
    { id: "A", text: "Mean: $34.5$ pounds; range: $13.5$ pounds" },
    { id: "B", text: "Mean: $36.8$ pounds; range: $14.4$ pounds" },
    // distractor: scales the mean but leaves the range at 18, treating the spread as unaffected
    { id: "C", text: "Mean: $36.8$ pounds; range: $18$ pounds" },
    // distractor: multiplies by 1.25 instead of dividing by it, giving 57.5 and 22.5
    { id: "D", text: "Mean: $57.5$ pounds; range: $22.5$ pounds" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Scaling a Data Set by a Constant**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Each weight shown is $1.25$ times the actual weight, so every actual weight is the weight shown divided by $1.25$. Both the mean and the range scale the same way: $46 \\div 1.25 = 36.8$ and $18 \\div 1.25 = 14.4$.\n\n**The Full Solution:**\nStep 1: \"$25\\%$ greater than the actual weight\" means weight shown $= 1.25 \\times$ actual weight, so actual weight $=$ weight shown $\\div 1.25 = 0.8 \\times$ weight shown.\nStep 2: Multiplying every value in a data set by a constant multiplies the mean by that constant: $0.8(46) = 36.8$ pounds.\nStep 3: The range is a difference of two values, so it is multiplied by the same constant: $0.8(18) = 14.4$ pounds. Check with two weights shown, $55$ and $37$ (range $18$): their actual weights are $44$ and $29.6$, a range of $14.4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (mean $34.5$, range $13.5$): takes $25\\%$ off each weight shown, multiplying by $0.75$; a value $25\\%$ greater than the actual value is undone by dividing by $1.25$, not by subtracting a quarter of it.\n* Choice C (mean $36.8$, range $18$): scales the center but not the spread, though scaling every value also scales the distance between the extremes.\n* Choice D (mean $57.5$, range $22.5$): multiplies by $1.25$, which moves the weights in the wrong direction.\n\n**Test Day Takeaway:** Multiplying every value by a constant multiplies the mean, median, and range by that constant; only adding a constant leaves the range unchanged.",
  skills: ["data-analysis"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "Cylinder A has radius $r$ and height $h$. Cylinder B has radius $1.5r$ and height $0.5h$. The volume of cylinder B is $k$ times the volume of cylinder A. What is the value of $k$?",
  correctAnswer: "1.125",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $1.125$.**\n\n**The Fast Way (~30s):** Volume is $\\pi r^{2}h$, so the radius factor enters squared and the height factor enters once: $k = (1.5)^{2}(0.5) = 2.25(0.5) = 1.125$.\n\n**The Full Solution:**\nStep 1: The volume of cylinder A is $\\pi r^{2}h$.\nStep 2: The volume of cylinder B is $\\pi(1.5r)^{2}(0.5h) = \\pi(2.25r^{2})(0.5h) = 1.125\\pi r^{2}h$.\nStep 3: Divide: $k = \\frac{1.125\\pi r^{2}h}{\\pi r^{2}h} = 1.125$. Check with numbers: $r = 2$ and $h = 10$ give $40\\pi$, while $r = 3$ and $h = 5$ give $45\\pi$, and $\\frac{45}{40} = 1.125$ ✓\n\n**Common Mistakes:**\n* $0.75$: multiplies $1.5$ by $0.5$, forgetting that the radius is squared.\n* $2.25$: squares the radius factor but ignores the halved height.\n* $1.5$: uses only the change in radius and drops the change in height.\n\n**Test Day Takeaway:** In $V = \\pi r^{2}h$ a radius factor enters squared and a height factor enters once; multiply the factors instead of recomputing whole volumes.",
  skills: ["volume-prism"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 6,
  question: "The table shows the number of books read last month by each of $45$ students. If $n$ more students, each of whom read $3$ books, are added to the data, the new data set will have exactly one mode, $3$ books. What is the least possible value of $n$?",
  diagram: { type: "dataTable", params: { headers: ["Number of books", "Number of students"], rows: [["0", "11"], ["1", "14"], ["2", "9"], ["3", "7"], ["4", "4"]] } },
  correctAnswer: "8",
  explanation: "**SAT Pattern: Mode of a Data Set**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~40s):** The largest frequency in the table is $14$ (students who read $1$ book). For $3$ books to be the only mode, its frequency $7 + n$ must be greater than $14$, so $n > 7$ and the least value is $8$.\n\n**The Full Solution:**\nStep 1: Read the frequencies from the table: $11$ students read $0$ books, $14$ read $1$, $9$ read $2$, $7$ read $3$, and $4$ read $4$, which is $45$ students in all.\nStep 2: Adding $n$ students who each read $3$ books changes only that row, to $7 + n$. The value $3$ is the only mode when $7 + n$ is greater than every other frequency, and the largest other frequency is $14$.\nStep 3: Solve $7 + n > 14$: $n > 7$, so the least whole number is $n = 8$. Check: with $n = 8$ the frequencies are $11$, $14$, $9$, $15$, and $4$, and $15$ is the single largest; with $n = 7$ the values $1$ and $3$ would both have frequency $14$ ✓\n\n**Common Mistakes:**\n* $7$: makes the frequency for $3$ books equal to $14$, which ties with $1$ book and gives two modes.\n* $15$: reports the new frequency for $3$ books instead of the number of students added.\n* $5$: compares with the $11$ students who read $0$ books instead of the largest frequency, $14$.\n\n**Test Day Takeaway:** The mode is the value with the greatest frequency; to make a value the only mode, its frequency must be strictly greater than the largest frequency already in the table.",
  skills: ["find-mode"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $6w - 5 = 31$, what is the value of $12w + 4$?",
  choices: [
    // distractor: treats 12w + 4 as (6w - 5) + 9 and adds 9 to 31
    { id: "A", text: "$40$" },
    // distractor: doubles 31 and adds 4, which evaluates 12w - 6 rather than 12w + 4
    { id: "B", text: "$66$" },
    // distractor: finds 12w = 72 correctly but drops the + 4
    { id: "C", text: "$72$" },
    { id: "D", text: "$76$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** $6w - 5 = 31$ gives $6w = 36$, so $12w = 72$ and $12w + 4 = 76$.\n\n**The Full Solution:**\nStep 1: Add $5$ to both sides of $6w - 5 = 31$ to isolate the variable term: $6w = 36$.\nStep 2: The target expression contains $12w$, which is $2(6w)$: $12w = 2(36) = 72$.\nStep 3: Add the constant: $12w + 4 = 72 + 4 = 76$. Check by solving for $w$: $w = 6$, so $6(6) - 5 = 31$ and $12(6) + 4 = 76$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($40$): assumes $12w + 4$ is $(6w - 5) + 9$, which is true only when $6w = 9$.\n* Choice B ($66$): doubles $31$ and adds $4$, which doubles the $-5$ as well and evaluates $12w - 6$.\n* Choice C ($72$): finds $12w = 72$ and stops one step early.\n\n**Test Day Takeaway:** Build the requested expression from the given one: isolate the variable term, scale it, and finish with the constant the question names.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In right triangle $ABC$, angle $B$ is a right angle, $\\sin A = 3k$, and $\\cos A = 4k$, where $k$ is a positive constant. What is the value of $k$?",
  correctAnswer: "0.2",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**The correct answer is $0.2$.**\n\n**The Fast Way (~40s):** Since $\\sin^{2} A + \\cos^{2} A = 1$, $9k^{2} + 16k^{2} = 25k^{2} = 1$, so $k = \\frac{1}{5} = 0.2$.\n\n**The Full Solution:**\nStep 1: With the right angle at $B$, $\\sin A = \\frac{BC}{AC}$ and $\\cos A = \\frac{AB}{AC}$. Squaring and adding gives $\\frac{BC^{2} + AB^{2}}{AC^{2}}$, which equals $1$ by the Pythagorean theorem.\nStep 2: Substitute: $(3k)^{2} + (4k)^{2} = 1$, so $9k^{2} + 16k^{2} = 25k^{2} = 1$ and $k^{2} = \\frac{1}{25}$.\nStep 3: Take the positive root, since $k > 0$: $k = \\frac{1}{5} = 0.2$. Check: $\\sin A = 0.6$ and $\\cos A = 0.8$, and $0.6^{2} + 0.8^{2} = 0.36 + 0.64 = 1$ ✓\n\n**Common Mistakes:**\n* $\\frac{1}{7}$: adds the ratios instead of their squares, solving $3k + 4k = 1$.\n* $0.04$: writes $9k + 16k = 1$, squaring the coefficients but not $k$.\n* $0.75$: reports $\\tan A = \\frac{3k}{4k} = \\frac{3}{4}$ instead of $k$.\n\n**Test Day Takeaway:** The sine and cosine of the same acute angle satisfy $\\sin^{2} A + \\cos^{2} A = 1$; square both expressions and add before doing anything else.",
  skills: ["soh-cah-toa", "pythagorean-theorem"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$3x + ay = 12$\n$6x + 10y = 7$\nIn the given system of equations, $a$ is a constant. If the system has no solution, what is the value of $a$?",
  choices: [
    // distractor: scales by the constant terms instead of the x-coefficients, computing 7(3/6) = 3.5
    { id: "A", text: "$3.5$" },
    { id: "B", text: "$5$" },
    // distractor: makes the y-coefficients equal, a = 10, without matching the x-coefficients
    { id: "C", text: "$10$" },
    // distractor: inverts the ratio, computing 10(6/3) = 20
    { id: "D", text: "$20$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** No solution means the lines are parallel and distinct, so the coefficients are proportional but the constants are not: $\\frac{3}{6} = \\frac{a}{10}$ gives $a = 5$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has no solution when the lines have the same slope and different y-intercepts, which happens when $\\frac{3}{6} = \\frac{a}{10}$ but $\\frac{3}{6} \\neq \\frac{12}{7}$.\nStep 2: Solve the proportion: $6a = 30$, so $a = 5$.\nStep 3: Confirm the constants do not follow the same ratio: $\\frac{12}{7} \\neq \\frac{1}{2}$, so the lines are distinct. Check the slopes with $a = 5$: $3x + 5y = 12$ has slope $-\\frac{3}{5}$, and $6x + 10y = 7$ has slope $-\\frac{6}{10} = -\\frac{3}{5}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3.5$): builds the proportion from the constants $12$ and $7$; with $a = 3.5$ the slopes are $-\\frac{6}{7}$ and $-\\frac{3}{5}$, so the lines intersect.\n* Choice C ($10$): matches the $y$-coefficients without matching the $x$-coefficients; $3x + 10y = 12$ has slope $-0.3$, not $-0.6$.\n* Choice D ($20$): flips the ratio to $\\frac{6}{3}$; with $a = 20$ the first slope is $-0.15$, so the system has exactly one solution.\n\n**Test Day Takeaway:** No solution means proportional coefficients with a non-proportional constant; set up the coefficient ratio first, then confirm the constants break it.",
  skills: ["system-solution-types"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$6x - 5y = 2$\n$5x - 6y = c$\nIn the given system of equations, $c$ is a constant. The solution to the system is $(x, y)$, where $x + y = 15$. What is the value of $c$?",
  correctAnswer: "-13",
  explanation: "**SAT Pattern: Solve for a Combination**\n\n**The correct answer is $-13$.**\n\n**The Fast Way (~40s):** Subtracting the second equation from the first gives $x + y = 2 - c$. Since $x + y = 15$, $c = 2 - 15 = -13$.\n\n**The Full Solution:**\nStep 1: Subtract the second equation from the first: $(6x - 5y) - (5x - 6y) = 2 - c$, and the left side simplifies to $x + y$.\nStep 2: Substitute the given value $x + y = 15$: $15 = 2 - c$.\nStep 3: Solve: $c = 2 - 15 = -13$. Check by finding the solution: $y = 15 - x$ turns $6x - 5y = 2$ into $11x - 75 = 2$, so $x = 7$ and $y = 8$, and $5(7) - 6(8) = 35 - 48 = -13$ ✓\n\n**Common Mistakes:**\n* $13$: solves $15 = 2 - c$ as $c = 15 - 2$, losing the sign.\n* $17$: subtracts in the other order, getting $-x - y = c - 2$, then drops the negative sign and solves $c - 2 = 15$.\n* $-2$: finds $x = 7$ and $y = 8$ but swaps them in the second equation, computing $5(8) - 6(7)$.\n\n**Test Day Takeaway:** When a question gives or asks for $x + y$ rather than $x$ and $y$ separately, add or subtract the equations whole; the combination often appears in one step.",
  skills: ["elimination-method"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The points $(-2, 4)$, $(0, 0)$, and $(6, 3)$ shown in the $xy$-plane are three of the vertices of a rectangle. What is the area, in square units, of the rectangle?",
  diagram: { type: "coordinatePoints", params: { points: [[-2, 4], [0, 0], [6, 3]], xMin: -4, xMax: 8, yMin: -2, yMax: 10 } },
  choices: [
    // distractor: finds the area of the triangle formed by the three given vertices, half of the rectangle: 15
    { id: "A", text: "$15$" },
    { id: "B", text: "$30$" },
    // distractor: squares the longer side, treating the rectangle as a square of side sqrt(45): 45
    { id: "C", text: "$45$" },
    // distractor: uses the box with horizontal and vertical sides that encloses all four vertices, including the fourth vertex (4, 7): 8 by 7 gives 56
    { id: "D", text: "$56$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~50s):** The vertex $(0, 0)$ is the right angle, and its two sides run to $(6, 3)$ and $(-2, 4)$, with lengths $\\sqrt{45}$ and $\\sqrt{20}$. The area is $\\sqrt{45} \\cdot \\sqrt{20} = \\sqrt{900} = 30$.\n\n**The Full Solution:**\nStep 1: Find the vertex where two sides meet. From $(0, 0)$ the segments to $(6, 3)$ and $(-2, 4)$ have slopes $\\frac{3}{6} = \\frac{1}{2}$ and $\\frac{4}{-2} = -2$. These are negative reciprocals, so the sides are perpendicular at $(0, 0)$.\nStep 2: Find the side lengths with the distance formula: $\\sqrt{6^{2} + 3^{2}} = \\sqrt{45}$ and $\\sqrt{(-2)^{2} + 4^{2}} = \\sqrt{20}$.\nStep 3: Multiply length by width: $\\sqrt{45} \\cdot \\sqrt{20} = \\sqrt{900} = 30$ square units. Check the fourth vertex: $(6, 3) + (-2, 4) = (4, 7)$, and the four points form a rectangle ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): finds the area of the triangle formed by the three given vertices, which is half the rectangle.\n* Choice C ($45$): uses $\\sqrt{45}$ for both sides, treating the rectangle as a square.\n* Choice D ($56$): uses the box with horizontal and vertical sides that encloses all four vertices, $8$ units wide by $7$ units tall; that box is larger than the rectangle.\n\n**Test Day Takeaway:** A tilted rectangle still has perpendicular sides; confirm the right angle with slopes, then multiply the two side lengths instead of reading widths off the axes.",
  skills: ["triangle-area"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = a(x - h)^{2} + k$, where $a$, $h$, and $k$ are constants. The graph of $y = f(x)$ in the $xy$-plane has x-intercepts at $(2, 0)$ and $(8, 0)$, and the minimum value of $f$ is $-18$. Which equation defines $f$?",
  choices: [
    { id: "A", text: "$f(x) = 2(x - 5)^{2} - 18$" },
    // distractor: takes a = 1 without using an x-intercept: (2 - 5)^2 - 18 = -9, not 0
    { id: "B", text: "$f(x) = (x - 5)^{2} - 18$" },
    // distractor: uses k = 18 instead of -18, so the minimum is 18 and the graph never reaches the x-axis
    { id: "C", text: "$f(x) = 2(x - 5)^{2} + 18$" },
    // distractor: reads the sign in (x - h) backward, putting the vertex at x = -5
    { id: "D", text: "$f(x) = 2(x + 5)^{2} - 18$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** The vertex is halfway between the x-intercepts, so $h = \\frac{2 + 8}{2} = 5$, and the minimum value gives $k = -18$. Then $f(2) = 0$ forces $9a = 18$, so $a = 2$.\n\n**The Full Solution:**\nStep 1: A parabola is symmetric about the vertical line through its vertex, and the x-intercepts are equally far from that line, so $h = \\frac{2 + 8}{2} = 5$.\nStep 2: The minimum value of $f$ is the $y$-coordinate of the vertex, so $k = -18$ and $f(x) = a(x - 5)^{2} - 18$.\nStep 3: Use an x-intercept to find $a$: $f(2) = a(2 - 5)^{2} - 18 = 9a - 18 = 0$, so $a = 2$. Check the other intercept: $f(8) = 2(3)^{2} - 18 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($a = 1$): has the correct vertex but never uses an intercept; it gives $f(2) = -9$, not $0$.\n* Choice C ($+18$): uses $k = 18$; that parabola has a minimum value of $18$ and never meets the x-axis.\n* Choice D ($x + 5$): flips the sign inside the square, placing the vertex at $x = -5$.\n\n**Test Day Takeaway:** Symmetric x-intercepts give $h$, the minimum gives $k$, and one point on the graph gives $a$; build vertex form in that order instead of expanding.",
  skills: ["vertex-form", "function-evaluation"]
}
      ]
    }
  ]
};

export default practiceTest6;
