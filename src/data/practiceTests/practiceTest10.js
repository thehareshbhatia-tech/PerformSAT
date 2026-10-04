// Practice Test 10 - SAT Math
// v2 freshness rebuild (2026-09-07): every slot re-patterned and re-authored against the seen-corpus gate — docs/TEST_RECREATION_V2_SPEC.md
// 2 Modules, 22 questions each (44 total)
// Official-calibration recreation (2026-09-01): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md).
// Slot metadata (id/type/difficulty/band/skills/pattern) FROZEN from the prior
// build: M1 5E/9M/8H; M2 wavy flow — easy at 1,4,20; medium at 2,3,6,7,12,15,16;
// hard at 5,8,9,10,11,13,14,17,18,19,21,22 (3E/7M/12H, band-6/7 ceilings).
// Figure density at official ~20%: M1 carries 4 diagram items (Q5 dotPlot,
// Q6 twoWayTable, Q9 rightTriangle, Q13 scatterplot), M2 carries 4 (Q2
// twoWayTable, Q3 scatterplot, Q9 rationalFunction, Q13 quadraticVertex).
// Numeric MC choices sorted ascending (official convention). Scenario palette:
// commercial bakery ovens, county road-salt supplies, movie-theater concessions,
// hardware-fastener inventory, laser-tag arenas, wheelchair/loading ramps,
// soccer-field irrigation, campus shuttle routes, cider pressing,
// plant-nursery seedling trays.

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
  question: "The graph of line $t$ is shown in the $xy$-plane. Line $k$ is perpendicular to line $t$ and passes through the point $(4, 9)$. Which equation defines line $k$?",
  diagram: { type: "linearGraph", params: { slope: 2, yIntercept: 1, xRange: [-5, 5], yRange: [-9, 11], xTickInterval: 1, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 1], [4, 9]], label: "t" } },
  choices: [
    // distractor: negates the slope of line t but does not take the reciprocal, giving slope -2
    { id: "A", text: "$y = -2x + 17$" },
    { id: "B", text: "$y = -\\frac{1}{2}x + 11$" },
    // distractor: takes the reciprocal of 2 but keeps the sign positive, giving slope 1/2
    { id: "C", text: "$y = \\frac{1}{2}x + 7$" },
    // distractor: uses the slope of line t itself, which is the equation of line t, a line parallel to (not perpendicular to) line t
    { id: "D", text: "$y = 2x + 1$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Line $t$ has slope $2$, so line $k$ has slope $-\\frac{1}{2}$. Of the two choices with that slope, only $y = -\\frac{1}{2}x + 11$ passes through $(4, 9)$.\n\n**The Full Solution:**\nStep 1: Read two points on line $t$ from the graph, $(0, 1)$ and $(4, 9)$. The slope of line $t$ is $\\frac{9 - 1}{4 - 0} = 2$.\nStep 2: The slopes of perpendicular lines multiply to $-1$, so line $k$ has slope $-\\frac{1}{2}$ and can be written as $y = -\\frac{1}{2}x + b$.\nStep 3: Substitute $(4, 9)$: $9 = -\\frac{1}{2}(4) + b = -2 + b$, so $b = 11$ and line $k$ is $y = -\\frac{1}{2}x + 11$. Check: $-\\frac{1}{2}(4) + 11 = 9$, and $\\left(-\\frac{1}{2}\\right)(2) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -2x + 17$): negates the slope of line $t$ but does not take the reciprocal; $(-2)(2) = -4$, not $-1$.\n* Choice C ($y = \\frac{1}{2}x + 7$): takes the reciprocal but keeps it positive; $\\left(\\frac{1}{2}\\right)(2) = 1$, not $-1$.\n* Choice D ($y = 2x + 1$): this is line $t$ itself. A line with the same slope is parallel to line $t$, not perpendicular to it.\n\n**Test Day Takeaway:** A perpendicular slope is the negative reciprocal: flip the fraction and change the sign. Then substitute the given point into $y = mx + b$ to find $b$.",
  skills: ["perpendicular-negative-reciprocal"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$5x + 3y = 28$\n$3x + 5y = 36$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x + y$?",
  choices: [
    // distractor: subtracts the equations instead of adding, finding x - y = -4
    { id: "A", text: "$-4$" },
    // distractor: solves the system and gives the value of x instead of x + y
    { id: "B", text: "$2$" },
    // distractor: solves the system and gives the value of y instead of x + y
    { id: "C", text: "$6$" },
    { id: "D", text: "$8$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Adding the equations gives $8x + 8y = 64$, so $x + y = \\frac{64}{8} = 8$.\n\n**The Full Solution:**\nStep 1: Add the two equations: $(5x + 3x) + (3y + 5y) = 28 + 36$, which gives $8x + 8y = 64$.\nStep 2: Factor out $8$: $8(x + y) = 64$.\nStep 3: Divide both sides by $8$: $x + y = 8$. Check: subtracting the equations gives $2x - 2y = -8$, so $x - y = -4$; then $x = 2$ and $y = 6$, and $5(2) + 3(6) = 28$ and $3(2) + 5(6) = 36$, with $2 + 6 = 8$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): subtracts the second equation from the first instead of adding them, getting $2x - 2y = -8$, which gives $x - y = -4$, not $x + y$.\n* Choice B ($2$): this is the value of $x$ alone, not $x + y$.\n* Choice C ($6$): this is the value of $y$ alone, not $x + y$.\n\n**Test Day Takeaway:** When the question asks for a combination such as $x + y$, look for a way to add or subtract the equations that produces it directly, instead of solving for each variable.",
  skills: ["elimination-method"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$3(4x - 7) = ax + b$\nIn the given equation, $a$ and $b$ are constants. If the equation has infinitely many solutions, what is the value of $b$?",
  choices: [
    { id: "A", text: "$-21$" },
    // distractor: copies -7 from inside the parentheses without multiplying it by 3
    { id: "B", text: "$-7$" },
    // distractor: gives the value of a, the coefficient of x, instead of b
    { id: "C", text: "$12$" },
    // distractor: multiplies 3 by 7 but drops the negative sign
    { id: "D", text: "$21$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Distribute: $3(4x - 7) = 12x - 21$. Infinitely many solutions means both sides are the same expression, so $b = -21$.\n\n**The Full Solution:**\nStep 1: Distribute the $3$ on the left side: $3(4x) - 3(7) = 12x - 21$.\nStep 2: A linear equation has infinitely many solutions only when both sides are identical, so $12x - 21$ must equal $ax + b$ term by term.\nStep 3: Match the terms: $a = 12$ and $b = -21$. Check: with these values the equation reads $12x - 21 = 12x - 21$, which is true for every $x$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-7$): copies the $-7$ from inside the parentheses without multiplying it by $3$.\n* Choice C ($12$): this is the value of $a$, the coefficient of $x$, not the constant $b$.\n* Choice D ($21$): multiplies $3$ by $7$ but loses the negative sign.\n\n**Test Day Takeaway:** Infinitely many solutions means the two sides are the same expression. Simplify each side fully, then match the $x$-coefficients and the constants.",
  skills: ["distributive-property"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$4$, $8$, $9$, $9$, $13$, $16$, $18$, $18$, $18$, $20$, $21$\nWhat is the mode of the data shown?",
  choices: [
    // distractor: gives the mean, 154 divided by 11, which is 14
    { id: "A", text: "$14$" },
    // distractor: gives the median, the 6th of the 11 ordered values, which is 16
    { id: "B", text: "$16$" },
    // distractor: gives the range, 21 minus 4, which is 17
    { id: "C", text: "$17$" },
    { id: "D", text: "$18$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Mode of a Data Set**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** The mode is the value that appears most often. The value $18$ appears three times, more than any other value.\n\n**The Full Solution:**\nStep 1: Count how often each value appears: $18$ appears three times, $9$ appears twice, and every other value appears once.\nStep 2: The mode is the value with the greatest frequency.\nStep 3: So the mode is $18$. Check: no other value appears three or more times; $9$ appears only twice ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): this is the mean, since the values add to $154$ and $\\frac{154}{11} = 14$.\n* Choice B ($16$): this is the median, the $6$th of the $11$ ordered values.\n* Choice C ($17$): this is the range, $21 - 4 = 17$.\n\n**Test Day Takeaway:** Mode means most frequent, median means middle, and mean means average. Read which one the question asks for before you calculate anything.",
  skills: ["find-mode"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Maya and Leo split \\$4,800 so that the ratio of Maya's share to Leo's share is $3$ to $5$. How much money, in dollars, does Maya receive?",
  choices: [
    // distractor: finds the value of one part, 4,800 divided by 8, without multiplying by 3
    { id: "A", text: "$600$" },
    { id: "B", text: "$1{,}800$" },
    // distractor: splits the money evenly, 4,800 divided by 2, ignoring the ratio
    { id: "C", text: "$2{,}400$" },
    // distractor: gives Leo's share, 5 parts, instead of Maya's 3 parts
    { id: "D", text: "$3{,}000$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The ratio has $3 + 5 = 8$ equal parts, so each part is $\\frac{4{,}800}{8} = 600$ dollars. Maya receives $3(600) = 1{,}800$ dollars.\n\n**The Full Solution:**\nStep 1: The ratio $3$ to $5$ divides the money into $3 + 5 = 8$ equal parts.\nStep 2: Each part is worth $\\frac{4{,}800}{8} = 600$ dollars.\nStep 3: Maya receives $3$ parts: $3(600) = 1{,}800$ dollars. Check: Leo receives $5(600) = 3{,}000$ dollars, $1{,}800 + 3{,}000 = 4{,}800$, and $\\frac{1{,}800}{3{,}000} = \\frac{3}{5}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($600$): this is the value of one part; Maya receives $3$ parts.\n* Choice C ($2{,}400$): splits the money evenly, $\\frac{4{,}800}{2}$, which ignores the ratio.\n* Choice D ($3{,}000$): this is Leo's share of $5$ parts, not Maya's.\n\n**Test Day Takeaway:** For a part-to-part ratio, add the parts to get the total number of shares, find the value of one share, then multiply by the part you need.",
  skills: ["word-problem-to-equation"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table shows the number of tickets sold at each of four booths at a school fair. What percent of the tickets sold at the four booths were sold at Booth D?",
  questionTable: { headers: ["Booth", "Tickets sold"], rows: [["A", "78"], ["B", "90"], ["C", "72"], ["D", "60"]] },
  choices: [
    { id: "A", text: "$20\\%$" },
    // distractor: divides Booth D's 60 by the other three booths' 240 instead of by the 300 total
    { id: "B", text: "$25\\%$" },
    // distractor: uses Booth B's 90 tickets over the 300 total
    { id: "C", text: "$30\\%$" },
    // distractor: gives the percent sold at the other three booths, 240 out of 300
    { id: "D", text: "$80\\%$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The total is $78 + 90 + 72 + 60 = 300$ tickets, and $\\frac{60}{300} = 0.20$, or $20\\%$.\n\n**The Full Solution:**\nStep 1: Add the four counts to find the whole: $78 + 90 + 72 + 60 = 300$ tickets.\nStep 2: Booth D sold $60$ of them, so the fraction sold at Booth D is $\\frac{60}{300} = 0.20$.\nStep 3: Convert to a percent: $0.20 = 20\\%$. Check: $20\\%$ of $300$ is $0.20(300) = 60$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($25\\%$): divides $60$ by $240$, the tickets sold at the other three booths, instead of by the total of $300$.\n* Choice C ($30\\%$): uses Booth B's $90$ tickets, $\\frac{90}{300} = 30\\%$.\n* Choice D ($80\\%$): gives the share of the other three booths, $\\frac{240}{300} = 80\\%$.\n\n**Test Day Takeaway:** A percent of a whole is part over whole. Add every row of the table to get the whole before you divide.",
  skills: ["percent-of-value"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$2x^{2} + 12x + 13 = 2(x + 3)^{2} + k$\nThe given equation is true for all values of $x$, where $k$ is a constant. What is the value of $k$?",
  choices: [
    { id: "A", text: "$-5$" },
    // distractor: expands (x + 3)^2 to get 9 but does not multiply the 9 by 2, solving 9 + k = 13
    { id: "B", text: "$4$" },
    // distractor: copies the constant term 13 from the left side as k
    { id: "C", text: "$13$" },
    // distractor: adds 18 to 13 instead of subtracting it
    { id: "D", text: "$31$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Quadratic — Completing the Square**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Expanding $2(x + 3)^{2}$ gives a constant term of $2(9) = 18$, so $18 + k = 13$ and $k = -5$.\n\n**The Full Solution:**\nStep 1: Expand the right side: $2(x + 3)^{2} = 2(x^{2} + 6x + 9) = 2x^{2} + 12x + 18$, so the right side is $2x^{2} + 12x + 18 + k$.\nStep 2: The equation is true for all values of $x$, so the constant terms on the two sides must be equal: $18 + k = 13$.\nStep 3: Solve: $k = 13 - 18 = -5$. Check at $x = 0$: the left side is $13$ and the right side is $2(3)^{2} - 5 = 18 - 5 = 13$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): uses $9$ as the constant from $(x + 3)^{2}$ but forgets to multiply it by $2$, so $9 + k = 13$.\n* Choice C ($13$): copies the constant term of the left side as $k$.\n* Choice D ($31$): adds $18$ to $13$ instead of subtracting it.\n\n**Test Day Takeaway:** When two forms of a quadratic are equal for all $x$, expand the factored form and match the constant terms. Remember that the leading coefficient multiplies the squared constant too.",
  skills: ["quadratics"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "$4(x - 3)^{2} + 11$\nThe given expression can be written in the form $ax^{2} + bx + c$, where $a$, $b$, and $c$ are constants. What is the value of $b + c$?",
  correctAnswer: "23",
  explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**The correct answer is 23.**\n\n**The Fast Way (~25s):** $4(x - 3)^{2} + 11 = 4x^{2} - 24x + 36 + 11 = 4x^{2} - 24x + 47$, so $b + c = -24 + 47 = 23$.\n\n**The Full Solution:**\nStep 1: Square the binomial: $(x - 3)^{2} = x^{2} - 6x + 9$.\nStep 2: Multiply by $4$ and add $11$: $4x^{2} - 24x + 36 + 11 = 4x^{2} - 24x + 47$. So $a = 4$, $b = -24$, and $c = 47$.\nStep 3: Add: $b + c = -24 + 47 = 23$. Check at $x = 1$: $4(1 - 3)^{2} + 11 = 27$, and $4 - 24 + 47 = 27$ ✓\n\n**Common Mistakes:**\n* $71$: drops the negative sign on the $x$-term, using $b = 24$.\n* $-4$: multiplies only the $x^{2}$ and $x$ terms by $4$, leaving the constant as $9 + 11 = 20$.\n* $47$: expands $(x - 3)^{2}$ as $x^{2} + 9$, which leaves out the middle term, so $b = 0$.\n\n**Test Day Takeaway:** To convert vertex form to standard form, square the binomial completely, including its middle term, then multiply every term by the leading coefficient before adding the constant.",
  skills: ["distributive-property", "converting-quadratic-forms"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Triangle $ABC$ is similar to triangle $DEF$, where $A$, $B$, and $C$ correspond to $D$, $E$, and $F$, respectively. The length of $\\overline{AB}$ is $30$, the length of $\\overline{DE}$ is $50$, and the area of triangle $ABC$ is $225$ square units. What is the area, in square units, of triangle $DEF$?",
  choices: [
    // distractor: squares the side ratio but uses it upside down, multiplying 225 by 9/25
    { id: "A", text: "$81$" },
    // distractor: uses the side ratio upside down and does not square it, multiplying 225 by 3/5
    { id: "B", text: "$135$" },
    // distractor: uses the side ratio 5/3 without squaring it, multiplying 225 by 5/3
    { id: "C", text: "$375$" },
    { id: "D", text: "$625$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Similar Triangles and Area Ratio**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The scale factor from triangle $ABC$ to triangle $DEF$ is $\\frac{50}{30} = \\frac{5}{3}$, so the area scales by $\\left(\\frac{5}{3}\\right)^{2} = \\frac{25}{9}$, and $225 \\cdot \\frac{25}{9} = 625$.\n\n**The Full Solution:**\nStep 1: Corresponding sides $\\overline{AB}$ and $\\overline{DE}$ give the scale factor from triangle $ABC$ to triangle $DEF$: $\\frac{50}{30} = \\frac{5}{3}$.\nStep 2: Areas of similar figures scale by the square of the scale factor: $\\left(\\frac{5}{3}\\right)^{2} = \\frac{25}{9}$.\nStep 3: Multiply: $225 \\cdot \\frac{25}{9} = 625$ square units. Check: $\\frac{625}{225} = \\frac{25}{9}$, and $\\sqrt{\\frac{25}{9}} = \\frac{5}{3} = \\frac{50}{30}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($81$): squares the ratio but inverts it, computing $225 \\cdot \\frac{9}{25}$, which gives an area smaller than that of the smaller triangle.\n* Choice B ($135$): inverts the ratio and does not square it, computing $225 \\cdot \\frac{3}{5}$.\n* Choice C ($375$): uses the correct ratio $\\frac{5}{3}$ but does not square it, computing $225 \\cdot \\frac{5}{3}$.\n\n**Test Day Takeaway:** Lengths scale by $k$ and areas scale by $k^{2}$. Write the ratio as larger figure over smaller figure when the area you want belongs to the larger figure.",
  skills: ["similar-triangles"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A right triangle has a hypotenuse of length $24$ units and a leg of length $12$ units. What is the area, in square units, of the triangle?",
  choices: [
    // distractor: finds the other leg as 12 divided by the square root of 3, which is 4 times the square root of 3, instead of 12 times the square root of 3
    { id: "A", text: "$24\\sqrt{3}$" },
    { id: "B", text: "$72\\sqrt{3}$" },
    // distractor: adds the squares instead of subtracting, taking the other leg as the square root of 720
    { id: "C", text: "$72\\sqrt{5}$" },
    // distractor: multiplies the two legs but omits the factor of 1/2
    { id: "D", text: "$144\\sqrt{3}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle Area with Surds**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The other leg is $\\sqrt{24^{2} - 12^{2}} = \\sqrt{432} = 12\\sqrt{3}$, so the area is $\\frac{1}{2}(12)(12\\sqrt{3}) = 72\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: Use the Pythagorean theorem to find the other leg $b$: $12^{2} + b^{2} = 24^{2}$, so $b^{2} = 576 - 144 = 432$.\nStep 2: Simplify: $b = \\sqrt{432} = \\sqrt{144 \\cdot 3} = 12\\sqrt{3}$.\nStep 3: The legs are the base and height: area $= \\frac{1}{2}(12)(12\\sqrt{3}) = 72\\sqrt{3}$. Check: $12^{2} + (12\\sqrt{3})^{2} = 144 + 432 = 576 = 24^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($24\\sqrt{3}$): uses $\\frac{12}{\\sqrt{3}} = 4\\sqrt{3}$ for the other leg instead of $12\\sqrt{3}$, which gives $\\frac{1}{2}(12)(4\\sqrt{3})$.\n* Choice C ($72\\sqrt{5}$): adds the squares, $144 + 576 = 720$, as though $24$ were a leg, so the other side is $\\sqrt{720} = 12\\sqrt{5}$.\n* Choice D ($144\\sqrt{3}$): multiplies the legs, $12 \\cdot 12\\sqrt{3}$, but leaves out the factor of $\\frac{1}{2}$.\n\n**Test Day Takeaway:** The area of a right triangle uses the two legs, never the hypotenuse. When only one leg is given, find the other with $a^{2} + b^{2} = c^{2}$ first.",
  skills: ["triangle-area"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table shows the distance $d$, in miles, that a train has left to travel $t$ hours after leaving a station. The relationship between $t$ and $d$ is linear. What is the slope of the line that represents this relationship in the $td$-plane?",
  questionTable: { headers: ["$t$ (hours)", "$d$ (miles)"], rows: [["2", "318"], ["4", "246"], ["7", "138"]] },
  choices: [
    // distractor: finds the change in d from t = 2 to t = 7, 138 - 318, but does not divide by the change in t
    { id: "A", text: "$-180$" },
    { id: "B", text: "$-36$" },
    // distractor: divides the change in d, -180, by 7 + 2 = 9 instead of 7 - 2 = 5
    { id: "C", text: "$-20$" },
    // distractor: subtracts the d-values in one order and the t-values in the other, which flips the sign
    { id: "D", text: "$36$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Using the first two rows, the slope is $\\frac{246 - 318}{4 - 2} = \\frac{-72}{2} = -36$.\n\n**The Full Solution:**\nStep 1: The slope of a line is the change in $d$ divided by the change in $t$.\nStep 2: Use the rows $(2, 318)$ and $(4, 246)$: $\\frac{246 - 318}{4 - 2} = \\frac{-72}{2} = -36$.\nStep 3: The slope is $-36$; the distance left to travel decreases by $36$ miles each hour. Check with the rows $(2, 318)$ and $(7, 138)$: $\\frac{138 - 318}{7 - 2} = \\frac{-180}{5} = -36$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-180$): finds the change in $d$ from $t = 2$ to $t = 7$ but does not divide by the change in $t$, which is $5$.\n* Choice C ($-20$): divides $-180$ by $7 + 2 = 9$ instead of by $7 - 2 = 5$.\n* Choice D ($36$): subtracts the $d$-values in one order and the $t$-values in the other. The distance left to travel decreases over time, so the slope must be negative.\n\n**Test Day Takeaway:** Slope is change in output over change in input, with both differences taken in the same order. A quantity that decreases over time has a negative slope.",
  skills: ["slope-from-points"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The function $f$ is defined by $f(x) = 5x + k$, where $k$ is a constant, and $f(6) = 41$. For what value of $x$ does $f(x) = 86$?",
  correctAnswer: "15",
  explanation: "**SAT Pattern: Solve $f(a) = c$**\n\n**The correct answer is 15.**\n\n**The Fast Way (~20s):** From $5(6) + k = 41$, $k = 11$. Then $5x + 11 = 86$ gives $x = 15$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 6$ and $f(6) = 41$: $5(6) + k = 41$, so $30 + k = 41$.\nStep 2: Solve for the constant: $k = 11$, so $f(x) = 5x + 11$.\nStep 3: Set $f(x) = 86$: $5x + 11 = 86$, so $5x = 75$ and $x = 15$. Check: $f(15) = 5(15) + 11 = 86$ ✓\n\n**Common Mistakes:**\n* $9$: treats $41$ as the value of $k$, solving $5x + 41 = 86$.\n* $10.2$: subtracts $6$ instead of $5(6) = 30$, getting $k = 35$, then solves $5x + 35 = 86$.\n* $17.2$: ignores $k$ and solves $5x = 86$.\n\n**Test Day Takeaway:** Use the given input-output pair to find the constant first. Then set the function equal to the new output and solve for $x$.",
  skills: ["function-notation"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$22$, $25$, $27$, $30$, $30$, $31$, $33$, $35$, $79$\nThe value $79$ is removed from the data set shown. Which statement best describes how the mean and the median change?",
  choices: [
    // distractor: assumes removing the greatest value lowers the median too, overlooking that the two middle values of the remaining eight are both 30
    { id: "A", text: "The mean and the median both decrease." },
    // distractor: reverses the two effects, treating the mean as resistant to the extreme value and the median as sensitive to it
    { id: "B", text: "The mean does not change, and the median decreases." },
    { id: "C", text: "The mean decreases, and the median does not change." },
    // distractor: assumes removing one value from nine changes neither measure, but the mean drops from about 34.7 to about 29.1
    { id: "D", text: "Neither the mean nor the median changes." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The value $79$ is far above the rest, so removing it lowers the mean. The median stays $30$, because the two middle values of the remaining eight numbers are both $30$.\n\n**The Full Solution:**\nStep 1: The nine values add to $312$, so the mean is $\\frac{312}{9} \\approx 34.7$, and the median is the $5$th value, $30$.\nStep 2: Without $79$, the eight values add to $312 - 79 = 233$, so the new mean is $\\frac{233}{8} \\approx 29.1$, which is less than $34.7$.\nStep 3: The new median is the mean of the $4$th and $5$th of the eight values: $\\frac{30 + 30}{2} = 30$, the same as before. So the mean decreases and the median does not change. Check: $29.1 < 34.7$ and $30 = 30$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: assumes removing the greatest value pulls the median down too. The $4$th and $5$th of the remaining values are both $30$, so the median stays $30$.\n* Choice B: reverses the two effects. The mean uses every value, so an extreme value like $79$ moves it; the median depends only on the middle of the ordered list.\n* Choice D: assumes one value out of nine is too few to matter, but the mean drops from about $34.7$ to about $29.1$.\n\n**Test Day Takeaway:** An extreme value pulls the mean toward it, while the median depends only on the middle of the ordered list. Removing an outlier changes the mean much more than the median.",
  skills: ["calculate-mean", "find-median"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, the midpoint of the line segment with endpoints $(-5, 8)$ and $(a, -2)$ is $(4, 3)$. What is the value of $a$?",
  correctAnswer: "13",
  explanation: "**SAT Pattern: Midpoint Formula**\n\n**The correct answer is 13.**\n\n**The Fast Way (~15s):** The $x$-coordinate of the midpoint is the average of the endpoint $x$-coordinates: $\\frac{-5 + a}{2} = 4$, so $a = 13$.\n\n**The Full Solution:**\nStep 1: The midpoint's $x$-coordinate is the average of the endpoints' $x$-coordinates: $\\frac{-5 + a}{2} = 4$.\nStep 2: Multiply both sides by $2$: $-5 + a = 8$.\nStep 3: Add $5$: $a = 13$. Check: $\\frac{-5 + 13}{2} = 4$ and $\\frac{8 + (-2)}{2} = 3$, so the midpoint is $(4, 3)$ ✓\n\n**Common Mistakes:**\n* $3$: solves $-5 + a = 8$ as $a = 8 - 5$, subtracting $5$ instead of adding it.\n* $9$: forgets to double the midpoint coordinate, solving $-5 + a = 4$.\n* $-0.5$: averages $-5$ and $4$ instead of treating $4$ as the average.\n\n**Test Day Takeaway:** For a missing endpoint, double the midpoint coordinate and subtract the known endpoint coordinate: $a = 2(4) - (-5) = 13$.",
  skills: ["coordinate-geometry"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$3x^{2} - kx + 24 = 0$\nIn the given equation, $k$ is a constant. The equation has two positive solutions, and one solution is twice the other. What is the value of $k$?",
  choices: [
    // distractor: uses -b/a with b = k instead of b = -k, which flips the sign of k
    { id: "A", text: "$-18$" },
    // distractor: finds the sum of the solutions, 6, but does not multiply it by 3
    { id: "B", text: "$6$" },
    { id: "C", text: "$18$" },
    // distractor: treats the product of the solutions, 24/3 = 8, as their sum and computes 3 times 8
    { id: "D", text: "$24$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Call the solutions $r$ and $2r$. Their product is $\\frac{24}{3} = 8$, so $2r^{2} = 8$ and $r = 2$; their sum, $6$, equals $\\frac{k}{3}$, so $k = 18$.\n\n**The Full Solution:**\nStep 1: For $ax^{2} + bx + c = 0$, the solutions have product $\\frac{c}{a}$ and sum $-\\frac{b}{a}$. Here the product is $\\frac{24}{3} = 8$ and the sum is $\\frac{k}{3}$.\nStep 2: Let the solutions be $r$ and $2r$ with $r > 0$. Then $r(2r) = 8$, so $r^{2} = 4$ and $r = 2$; the solutions are $2$ and $4$.\nStep 3: The sum is $2 + 4 = 6$, so $\\frac{k}{3} = 6$ and $k = 18$. Check: $3x^{2} - 18x + 24 = 3(x^{2} - 6x + 8) = 3(x - 2)(x - 4)$, with solutions $2$ and $4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-18$): takes the coefficient of $x$ to be $k$ rather than $-k$, so the sum $-\\frac{b}{a}$ comes out as $-\\frac{k}{3}$ and the sign of $k$ flips.\n* Choice B ($6$): finds the sum of the solutions, $6$, but forgets that the sum equals $\\frac{k}{3}$, not $k$.\n* Choice D ($24$): treats $\\frac{24}{3} = 8$ as the sum of the solutions instead of their product, then computes $3(8)$.\n\n**Test Day Takeaway:** Sum $= -\\frac{b}{a}$ and product $= \\frac{c}{a}$. When one solution is a multiple of the other, use the product to find them and the sum to find the constant.",
  skills: ["quadratic-factoring"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = -3x^{2} + bx + c$, where $b$ and $c$ are constants. The table shows three values of $x$ and their corresponding values of $f(x)$. What is the maximum value of $f(x)$?",
  questionTable: { headers: ["$x$", "$f(x)$"], rows: [["2", "49"], ["6", "49"], ["8", "13"]] },
  choices: [
    // distractor: gives the x-value at which the maximum occurs, 4, instead of the maximum value
    { id: "A", text: "$4$" },
    // distractor: gives c = 13, which is f(0), instead of the maximum value
    { id: "B", text: "$13$" },
    // distractor: picks the greatest value in the table instead of the function's maximum
    { id: "C", text: "$49$" },
    { id: "D", text: "$61$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice D is correct.**\n\n**The Fast Way (~45s):** Since $f(2) = f(6)$, the vertex is at $x = 4$, so $b = -2(-3)(4) = 24$. Then $f(2) = -12 + 48 + c = 49$ gives $c = 13$, and $f(4) = -48 + 96 + 13 = 61$.\n\n**The Full Solution:**\nStep 1: A parabola is symmetric about its vertex. Because $f(2) = f(6) = 49$, the vertex lies halfway between, at $x = \\frac{2 + 6}{2} = 4$.\nStep 2: The vertex of $f(x) = ax^{2} + bx + c$ is at $x = -\\frac{b}{2a}$, so $-\\frac{b}{2(-3)} = 4$ and $b = 24$. Then $f(2) = -3(4) + 24(2) + c = 36 + c = 49$, so $c = 13$.\nStep 3: The leading coefficient is negative, so the vertex gives the maximum: $f(4) = -3(16) + 24(4) + 13 = 61$. Check with the third row: $f(8) = -192 + 192 + 13 = 13$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): this is the $x$-value where the maximum occurs, not the maximum value of $f(x)$.\n* Choice B ($13$): this is the constant $c$, the value of $f(0)$.\n* Choice C ($49$): this is the greatest value in the table, but the vertex at $x = 4$ lies between the listed $x$-values and is higher.\n\n**Test Day Takeaway:** Two inputs with the same output sit symmetrically around the vertex, so the vertex's $x$-value is their average. Find the constants, then evaluate the function at the vertex.",
  skills: ["converting-quadratic-forms"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$\\sqrt{3x + a} = x - 5$\nIn the given equation, $a$ is a constant. The equation has two solutions, and one of them is $x = 7$. What is the other solution?",
  choices: [
    // distractor: gives the value of the constant a instead of the other solution
    { id: "A", text: "$-17$" },
    { id: "B", text: "$6$" },
    // distractor: gives 13, the sum of the two solutions of the squared equation, x^2 - 13x + 42 = 0
    { id: "C", text: "$13$" },
    // distractor: gives 42, the product of the two solutions of the squared equation
    { id: "D", text: "$42$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Radical Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** Substituting $x = 7$ gives $\\sqrt{21 + a} = 2$, so $a = -17$. Squaring $\\sqrt{3x - 17} = x - 5$ gives $x^{2} - 13x + 42 = 0$, or $(x - 6)(x - 7) = 0$, so the other solution is $6$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 7$: $\\sqrt{3(7) + a} = 7 - 5 = 2$, so $21 + a = 4$ and $a = -17$.\nStep 2: Square both sides of $\\sqrt{3x - 17} = x - 5$: $3x - 17 = x^{2} - 10x + 25$, which rearranges to $x^{2} - 13x + 42 = 0$, or $(x - 6)(x - 7) = 0$.\nStep 3: The candidates are $x = 6$ and $x = 7$. Check $x = 6$ in the original equation: $\\sqrt{18 - 17} = 1$ and $6 - 5 = 1$, so $6$ is a solution, not an extraneous one ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-17$): this is the value of the constant $a$, not a solution.\n* Choice C ($13$): this is the sum of the two solutions of $x^{2} - 13x + 42 = 0$.\n* Choice D ($42$): this is the product of the two solutions of $x^{2} - 13x + 42 = 0$.\n\n**Test Day Takeaway:** Use the known solution to find the constant, square to clear the radical, and then check every candidate in the original equation, since squaring can introduce extraneous solutions.",
  skills: ["radical-equations"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the $xy$-plane, the graph of $y = f(x)$ is a parabola with vertex $(a, b)$. The graph of $y = f(x + 6) - 4$ is a parabola with vertex $(-4, -9)$. What is the value of $a - b$?",
  choices: [
    // distractor: undoes the vertical shift correctly but moves the x-coordinate 6 more units left, using the vertex (-10, -5)
    { id: "A", text: "$-5$" },
    // distractor: moves both coordinates the wrong way, using the vertex (-10, -13)
    { id: "B", text: "$3$" },
    { id: "C", text: "$7$" },
    // distractor: undoes the horizontal shift correctly but subtracts 4 again instead of adding it, using the vertex (2, -13)
    { id: "D", text: "$15$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** The graph of $y = f(x + 6) - 4$ is the graph of $f$ moved $6$ units left and $4$ units down, so the vertex of $f$ is $(-4 + 6, -9 + 4) = (2, -5)$ and $a - b = 2 - (-5) = 7$.\n\n**The Full Solution:**\nStep 1: Replacing $x$ with $x + 6$ moves a graph $6$ units left, and subtracting $4$ moves it $4$ units down. So the vertex $(a, b)$ of $f$ moves to $(a - 6, b - 4)$.\nStep 2: Set this equal to the given vertex: $a - 6 = -4$ and $b - 4 = -9$, so $a = 2$ and $b = -5$.\nStep 3: Compute: $a - b = 2 - (-5) = 7$. Check: at $x = -4$, $f(x + 6) - 4 = f(2) - 4 = -5 - 4 = -9$, which matches the vertex $(-4, -9)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): finds $b = -5$ correctly but subtracts $6$ from $-4$, using the vertex $(-10, -5)$; $-10 - (-5) = -5$.\n* Choice B ($3$): moves both coordinates the wrong way, using the vertex $(-10, -13)$; $-10 - (-13) = 3$.\n* Choice D ($15$): finds $a = 2$ correctly but subtracts $4$ from $-9$, using the vertex $(2, -13)$; $2 - (-13) = 15$.\n\n**Test Day Takeaway:** $f(x + h)$ moves a graph left by $h$ and $f(x) - k$ moves it down by $k$. To recover the original vertex, reverse both moves.",
  skills: ["function-transformations", "vertex-form"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$f(x) = x^{2} - 3$\n$g(x) = 2x + k$\nThe functions $f$ and $g$ are defined as shown, where $k$ is a negative constant. If $f(g(1)) = 46$, what is the value of $k$?",
  choices: [
    { id: "A", text: "$-9$" },
    // distractor: solves (2 + k)^2 = 49 and reports 2 + k = -7 instead of k
    { id: "B", text: "$-7$" },
    // distractor: takes only the positive square root, 2 + k = 7, ignoring that k is negative
    { id: "C", text: "$5$" },
    // distractor: composes the functions in the wrong order, solving g(f(1)) = 46
    { id: "D", text: "$50$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** $g(1) = 2 + k$, so $(2 + k)^{2} - 3 = 46$ and $(2 + k)^{2} = 49$. Since $k < 0$, $2 + k = -7$ and $k = -9$.\n\n**The Full Solution:**\nStep 1: Evaluate the inner function first: $g(1) = 2(1) + k = 2 + k$.\nStep 2: Apply $f$: $f(2 + k) = (2 + k)^{2} - 3 = 46$, so $(2 + k)^{2} = 49$ and $2 + k = 7$ or $2 + k = -7$.\nStep 3: These give $k = 5$ or $k = -9$. Because $k$ is negative, $k = -9$. Check: $g(1) = 2 - 9 = -7$ and $f(-7) = 49 - 3 = 46$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-7$): this is the value of $g(1) = 2 + k$, not $k$.\n* Choice C ($5$): uses only the positive square root, $2 + k = 7$, but $k$ must be negative.\n* Choice D ($50$): reverses the order, computing $g(f(1)) = 2(-2) + k = -4 + k = 46$.\n\n**Test Day Takeaway:** In $f(g(x))$, evaluate $g$ first. When you take a square root, keep both signs, then use the given condition to choose.",
  skills: ["function-composition"]
},
{
  id: 20,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The quadratic function $f$ has a minimum value of $5$ at $x = 12$, and $f(4) = 21$. What is the value of $f(18)$?",
  correctAnswer: "14",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**The correct answer is 14.**\n\n**The Fast Way (~40s):** Write $f(x) = a(x - 12)^{2} + 5$. Then $f(4) = 64a + 5 = 21$ gives $a = \\frac{1}{4}$, and $f(18) = \\frac{1}{4}(36) + 5 = 14$.\n\n**The Full Solution:**\nStep 1: The minimum value $5$ occurs at $x = 12$, so the vertex is $(12, 5)$ and $f(x) = a(x - 12)^{2} + 5$ for some constant $a > 0$.\nStep 2: Use $f(4) = 21$: $a(4 - 12)^{2} + 5 = 21$, so $64a = 16$ and $a = \\frac{1}{4}$.\nStep 3: Evaluate: $f(18) = \\frac{1}{4}(18 - 12)^{2} + 5 = \\frac{1}{4}(36) + 5 = 9 + 5 = 14$. Check: $f(4) = \\frac{1}{4}(64) + 5 = 21$ ✓\n\n**Common Mistakes:**\n* $9$: computes $\\frac{1}{4}(36)$ but forgets to add the minimum value $5$.\n* $17$: assumes $f$ changes at a constant rate, adding $\\frac{6}{8}$ of the rise of $16$ to $5$.\n* $61.25$: writes the vertex form with $(x + 12)^{2}$, getting $a = \\frac{1}{16}$ and $f(18) = \\frac{900}{16} + 5$.\n\n**Test Day Takeaway:** A minimum or maximum at a given point fixes the vertex. Write $f(x) = a(x - h)^{2} + k$, use the other point to find $a$, then evaluate.",
  skills: ["vertex-form", "function-evaluation"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The right triangle shown is formed by two sides and a diagonal of a rectangle. The perimeter of the rectangle is $170$ inches. What is the area, in square inches, of the rectangle?",
  diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [60, 0], [60, 25]], sideLabels: ["", "", "65 in"], rightAngleVertex: 1, figureNote: true } },
  correctAnswer: "1500",
  explanation: "**SAT Pattern: Rectangle Area**\n\n**The correct answer is 1500.**\n\n**The Fast Way (~45s):** With sides $\\ell$ and $w$, $\\ell + w = 85$ and $\\ell^{2} + w^{2} = 65^{2}$, so $2\\ell w = 85^{2} - 65^{2} = 3{,}000$ and $\\ell w = 1{,}500$.\n\n**The Full Solution:**\nStep 1: Let the rectangle's sides be $\\ell$ and $w$. The perimeter is $2(\\ell + w) = 170$, so $\\ell + w = 85$.\nStep 2: The diagonal is the hypotenuse of the right triangle shown, so $\\ell^{2} + w^{2} = 65^{2} = 4{,}225$.\nStep 3: Square the sum: $(\\ell + w)^{2} = \\ell^{2} + w^{2} + 2\\ell w$, so $7{,}225 = 4{,}225 + 2\\ell w$, $2\\ell w = 3{,}000$, and the area is $\\ell w = 1{,}500$ square inches. Check: the sides are $60$ and $25$, since $60 + 25 = 85$ and $60^{2} + 25^{2} = 3{,}600 + 625 = 4{,}225$; $60 \\cdot 25 = 1{,}500$ ✓\n\n**Common Mistakes:**\n* $3000$: stops at $2\\ell w$ without dividing by $2$.\n* $85$: reports the half-perimeter $\\ell + w$ instead of the product $\\ell w$.\n* $5525$: multiplies the half-perimeter by the diagonal, $85 \\cdot 65$, as though those were the side lengths.\n\n**Test Day Takeaway:** Given a sum and a sum of squares, expand $(\\ell + w)^{2}$: the cross term $2\\ell w$ is twice the area, so you never need the individual sides.",
  skills: ["triangle-area"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The price of a television was decreased by $25\\%$, and then the decreased price was increased by $20\\%$. The final price was \\$630. What was the original price, in dollars, of the television?",
  choices: [
    // distractor: undoes only the 20% increase, computing 630 / 1.2
    { id: "A", text: "$525$" },
    // distractor: multiplies 630 by the combined factor 0.9 instead of dividing by it
    { id: "B", text: "$567$" },
    { id: "C", text: "$700$" },
    // distractor: undoes only the 25% decrease, computing 630 / 0.75
    { id: "D", text: "$840$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The two changes multiply the price by $(0.75)(1.20) = 0.9$, so the original price is $\\frac{630}{0.9} = 700$ dollars.\n\n**The Full Solution:**\nStep 1: Let $p$ be the original price. A $25\\%$ decrease multiplies it by $0.75$, and a $20\\%$ increase then multiplies the result by $1.20$.\nStep 2: So the final price is $p(0.75)(1.20) = 0.9p$, and $0.9p = 630$.\nStep 3: Divide: $p = \\frac{630}{0.9} = 700$ dollars. Check: $0.75(700) = 525$ and $1.20(525) = 630$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($525$): undoes only the $20\\%$ increase, $\\frac{630}{1.2} = 525$, which is the price after the decrease.\n* Choice B ($567$): multiplies $630$ by $0.9$ instead of dividing by $0.9$.\n* Choice D ($840$): undoes only the $25\\%$ decrease, $\\frac{630}{0.75} = 840$, and ignores the increase.\n\n**Test Day Takeaway:** Successive percent changes multiply. To find an original amount, divide the final amount by the product of all the multipliers.",
  skills: ["percent-word-problems", "percent-of-value"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 10 — Math Module 2 (22 questions)
// Distribution: 3E / 7M / 12H (frozen). Wavy flow: easy at 1,4,20; medium at
// 2,3,6,7,12,15,16; hard at 5,8,9,10,11,13,14,17,18,19,21,22.
// Recreation notes (2026-09-01): Q1-5 warm-ups all carry 2+ steps or a trap
// under their frozen patterns — Q1 missing-LEG with the add-squares trap plus
// radical simplification (never hypotenuse-from-legs), Q4 difference-driven
// reverse percent, Q5 vertex-sign bound on a+b+c with a DOWNWARD orientation,
// Q7 rational equation whose lone root is EXCLUDED (0 solutions).
// Palette: loading ramp, laser-tag arenas, cider pressing, seedling trays,
// movie-theater concessions, soccer-field irrigation.

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Triangle $ABC$ is similar to triangle $DEF$, where $A$, $B$, and $C$ correspond to $D$, $E$, and $F$, respectively. What is the perimeter, in inches, of triangle $DEF$?",
  diagram: { type: "similarTriangles", params: { triangle1: { vertices: [[0, 0], [15, 0], [0, 8]], labels: ["A", "B", "C"], sideLabels: ["15 in", "17 in", "8 in"] }, triangle2: { vertices: [[0, 0], [45, 0], [0, 24]], labels: ["D", "E", "F"], sideLabels: ["45 in", "", ""] }, figureNote: true } },
  choices: [
    // distractor: replaces only AB with 45 and keeps the other two sides at 17 and 8, giving 45 + 17 + 8 = 70
    { id: "A", text: "$70$" },
    // distractor: scales the two legs by 3 but leaves the hypotenuse at 17, giving 45 + 24 + 17 = 86
    { id: "B", text: "$86$" },
    { id: "C", text: "$120$" },
    // distractor: pairs the 45-inch side with the 8-inch side, so the scale factor becomes 45/8 = 5.625 and the perimeter 40 x 5.625 = 225
    { id: "D", text: "$225$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Side $DE$ corresponds to side $AB$, so the scale factor is $45 \\div 15 = 3$. Perimeters scale by the same factor, so the perimeter of triangle $DEF$ is $3(15 + 17 + 8) = 120$ inches.\n\n**The Full Solution:**\nStep 1: Since $A$, $B$, and $C$ correspond to $D$, $E$, and $F$, side $AB$ corresponds to side $DE$. The figure gives $AB = 15$ inches and $DE = 45$ inches, so every length in triangle $DEF$ is $\\frac{45}{15} = 3$ times the corresponding length in triangle $ABC$.\nStep 2: The perimeter of triangle $ABC$ is $15 + 17 + 8 = 40$ inches, and the perimeter is multiplied by the same factor as each side.\nStep 3: The perimeter of triangle $DEF$ is $3(40) = 120$ inches. Check: the sides of triangle $DEF$ are $3(15) = 45$, $3(17) = 51$, and $3(8) = 24$, and $45 + 51 + 24 = 120$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($70$): replaces only side $AB$ with $45$ and keeps the other two sides at $17$ and $8$, giving $45 + 17 + 8 = 70$. Every side of the larger triangle is $3$ times as long, not just one.\n* Choice B ($86$): scales the two legs to $45$ and $24$ but leaves the third side at $17$, giving $45 + 24 + 17 = 86$.\n* Choice D ($225$): pairs the $45$-inch side with the $8$-inch side, giving a scale factor of $\\frac{45}{8} = 5.625$ and a perimeter of $40 \\times 5.625 = 225$. Correspondence follows the order of the letters, not the position in the picture.\n\n**Test Day Takeaway:** Once you have the scale factor between similar triangles, apply it to the whole perimeter at once, and read the corresponding sides off the letter order in the similarity statement.",
  skills: ["similar-triangles"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Based on data from $15$ libraries, the equation $y = 16x + 120$ models the number of weekday visitors, $y$, at a library with $x$ study tables. According to the model, what is the number of study tables at a library with $440$ weekday visitors?",
  choices: [
    { id: "A", text: "$20$" },
    // distractor: ignores the constant 120 and divides 440 by the slope: 440/16 = 27.5
    { id: "B", text: "$27.5$" },
    // distractor: adds 120 instead of subtracting it before dividing: (440 + 120)/16 = 35
    { id: "C", text: "$35$" },
    // distractor: substitutes 440 for x instead of y: 16(440) + 120 = 7,160
    { id: "D", text: "$7{,}160$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Set $y = 440$: $16x + 120 = 440$, so $16x = 320$ and $x = 20$.\n\n**The Full Solution:**\nStep 1: In the model, $y$ is the number of weekday visitors and $x$ is the number of study tables. A library with $440$ weekday visitors has $y = 440$, so $440 = 16x + 120$.\nStep 2: Subtract $120$ from both sides: $16x = 320$.\nStep 3: Divide both sides by $16$: $x = 20$. Check: $16(20) + 120 = 320 + 120 = 440$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($27.5$): divides $440$ by the slope without first subtracting the constant $120$, $\\frac{440}{16} = 27.5$.\n* Choice C ($35$): adds $120$ instead of subtracting it, $\\frac{440 + 120}{16} = 35$.\n* Choice D ($7{,}160$): substitutes $440$ for $x$ instead of $y$, giving $16(440) + 120 = 7{,}160$ visitors, which answers a different question.\n\n**Test Day Takeaway:** Before substituting into a linear model, match the given number to the right variable; when the output is given, solve backward for the input.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A library has $4{,}200$ books, and $r$ percent of the books are fiction. Of the books that are not fiction, $40\\%$ are hardcover. Which expression represents the number of books in the library that are neither fiction nor hardcover?",
  choices: [
    // distractor: uses the r percent that are fiction and the 40% that are hardcover, giving 4200(r/100)(0.40) = 16.8r
    { id: "A", text: "$16.8r$" },
    // distractor: keeps the correct 100 - r but counts the 40% that are hardcover instead of the 60% that are not, giving 16.8(100 - r)
    { id: "B", text: "$16.8(100 - r)$" },
    // distractor: uses the correct 60% but applies it to the r percent that are fiction, giving 25.2r
    { id: "C", text: "$25.2r$" },
    { id: "D", text: "$25.2(100 - r)$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Percent Complement**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** $(100 - r)$ percent of the books are not fiction, and $60\\%$ of those are not hardcover, so the count is $4{,}200 \\cdot \\frac{100 - r}{100} \\cdot 0.60 = 25.2(100 - r)$.\n\n**The Full Solution:**\nStep 1: If $r$ percent of the books are fiction, then $100 - r$ percent are not. The number of books that are not fiction is $4{,}200 \\cdot \\frac{100 - r}{100} = 42(100 - r)$.\nStep 2: Of these books, $40\\%$ are hardcover, so $100\\% - 40\\% = 60\\%$ are not. Take $60\\%$ of the Step 1 count: $0.60 \\cdot 42(100 - r) = 25.2(100 - r)$.\nStep 3: The expression is $25.2(100 - r)$. Check with $r = 30$: $70\\%$ of $4{,}200$ is $2{,}940$ books that are not fiction, and $60\\%$ of $2{,}940$ is $1{,}764$; the expression gives $25.2(70) = 1{,}764$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($16.8r$): takes $r$ percent of $4{,}200$ and then $40\\%$ of that, $4{,}200 \\cdot \\frac{r}{100} \\cdot 0.40 = 16.8r$. Both percents describe the books the question leaves out.\n* Choice B ($16.8(100 - r)$): starts correctly with the books that are not fiction but then takes the $40\\%$ that are hardcover, $42(100 - r)(0.40) = 16.8(100 - r)$.\n* Choice C ($25.2r$): takes $60\\%$ of the fiction books, $4{,}200 \\cdot \\frac{r}{100} \\cdot 0.60 = 25.2r$. The $40\\%$ applies only to the books that are not fiction.\n\n**Test Day Takeaway:** When a percent problem chains two groups, write each step as a decimal multiplier and check which side of each \"not\" you are on before you multiply.",
  skills: ["percent-of-value"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The equation $y = 34x + 96$ estimates the number of students, $y$, enrolled in a school's coding course $x$ years after $2016$. In $2022$, $312$ students were enrolled in the course. How many more students were enrolled in $2022$ than the equation estimates?",
  choices: [
    { id: "A", text: "$12$" },
    // distractor: reports the slope, 34, the estimated increase per year, instead of the difference between actual and estimated
    { id: "B", text: "$34$" },
    // distractor: drops the constant 96, estimating 34(6) = 204 and reporting 312 - 204 = 108
    { id: "C", text: "$108$" },
    // distractor: reports the estimate for 2022, 34(6) + 96 = 300, instead of the difference
    { id: "D", text: "$300$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Residual**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $2022$ is $6$ years after $2016$, so the estimate is $34(6) + 96 = 300$, and $312 - 300 = 12$.\n\n**The Full Solution:**\nStep 1: Since $x$ is the number of years after $2016$, the year $2022$ corresponds to $x = 2022 - 2016 = 6$.\nStep 2: Evaluate the equation at $x = 6$: $y = 34(6) + 96 = 204 + 96 = 300$ students.\nStep 3: The actual enrollment exceeds the estimate by $312 - 300 = 12$ students. Check: $300 + 12 = 312$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($34$): reports the slope, which is the estimated increase in enrollment each year, not the gap between the actual and estimated enrollment.\n* Choice C ($108$): uses only $34(6) = 204$ and forgets the constant $96$, giving $312 - 204 = 108$.\n* Choice D ($300$): stops at the estimate for $2022$ and never subtracts it from the actual enrollment.\n\n**Test Day Takeaway:** With a \"years after\" model, first turn the calendar year into $x$, then subtract the estimated value from the actual value.",
  skills: ["calculate-mean", "slope-intercept-form"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$\\frac{c - 36x^{2}}{11 - 6x} = 6x + 11$\nIn the given equation, $c$ is a constant. The equation is true for all values of $x$ except $x = \\frac{11}{6}$. What is the value of $c$?",
  choices: [
    // distractor: reports the constant 11 from the denominator instead of its square
    { id: "A", text: "$11$" },
    { id: "B", text: "$121$" },
    // distractor: multiplies the coefficient 36 by 11 instead of squaring 11, giving 396
    { id: "C", text: "$396$" },
    // distractor: squares the coefficient 36 instead of the constant 11, giving 1296
    { id: "D", text: "$1{,}296$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The numerator must equal $(11 - 6x)(11 + 6x) = 121 - 36x^{2}$, so $c = 121$.\n\n**The Full Solution:**\nStep 1: Multiply both sides of the equation by $11 - 6x$, which is not zero for $x \\neq \\frac{11}{6}$: $c - 36x^{2} = (11 - 6x)(6x + 11)$.\nStep 2: The right side is a difference of squares: $(11 - 6x)(11 + 6x) = 11^{2} - (6x)^{2} = 121 - 36x^{2}$.\nStep 3: Matching $c - 36x^{2}$ with $121 - 36x^{2}$ gives $c = 121$. Check at $x = 3$: the left side is $\\frac{121 - 324}{11 - 18} = \\frac{-203}{-7} = 29$, and the right side is $6(3) + 11 = 29$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($11$): copies the constant from the denominator. The numerator needs $11^{2}$, not $11$.\n* Choice C ($396$): multiplies the two visible numbers, $36 \\times 11 = 396$, instead of squaring $11$.\n* Choice D ($1{,}296$): squares the wrong number, $36^{2} = 1{,}296$. The $36$ is already $6^{2}$ from the $x^{2}$ term.\n\n**Test Day Takeaway:** When a rational expression equals a binomial, the numerator is the denominator times that binomial, and a sum times a difference is a difference of squares.",
  skills: ["simplifying-rational-expressions", "difference-of-squares"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table shows three values of $x$ and their corresponding values of $y$. There is a linear relationship between $x$ and $y$. One equation in a system of two linear equations is $cx - 4y = 30$, where $c$ is a constant, and the other equation represents the relationship shown in the table. If the system has no solution, what is the value of $c$?",
  questionTable: { headers: ["$x$", "$y$"], rows: [["$2$", "$34$"], ["$5$", "$55$"], ["$8$", "$76$"]] },
  choices: [
    // distractor: forms the proportion as 7/c = -1/4 instead of -1/-4, giving c = -28
    { id: "A", text: "$-28$" },
    // distractor: divides the x-coefficient 7 by 4 instead of multiplying, giving 1.75
    { id: "B", text: "$1.75$" },
    // distractor: copies the x-coefficient 7 from the table line and never accounts for the -4y term
    { id: "C", text: "$7$" },
    { id: "D", text: "$28$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** The table gives a slope of $7$, so the line is $7x - y = -20$. No solution needs proportional coefficients, $\\frac{c}{7} = \\frac{-4}{-1}$, so $c = 28$.\n\n**The Full Solution:**\nStep 1: Find the equation from the table. The slope is $\\frac{55 - 34}{5 - 2} = \\frac{21}{3} = 7$, and $34 = 7(2) + b$ gives $b = 20$, so $y = 7x + 20$, or $7x - y = -20$. The third row checks: $7(8) + 20 = 76$.\nStep 2: A system of two linear equations has no solution when the coefficients of $x$ and $y$ are proportional but the constants are not. Here $\\frac{c}{7} = \\frac{-4}{-1} = 4$, so $c = 28$.\nStep 3: Confirm the lines are distinct. Multiplying $7x - y = -20$ by $4$ gives $28x - 4y = -80$, while the other equation is $28x - 4y = 30$. The left sides match and the right sides do not, so the system has no solution ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-28$): sets up the proportion as $\\frac{c}{7} = \\frac{-4}{1}$, losing the negative sign on the $-y$ term. With $c = -28$ the line has slope $-7$ and crosses the line from the table.\n* Choice B ($1.75$): divides $7$ by $4$ instead of multiplying. The $y$-coefficient is multiplied by $4$, so the $x$-coefficient must be multiplied by $4$ as well.\n* Choice C ($7$): copies the $x$-coefficient from the table's equation. Then $7x - 4y = 30$ has slope $1.75$, not $7$, and the lines intersect.\n\n**Test Day Takeaway:** No solution means parallel and distinct lines: match the coefficient ratios, then check that the constants do not match, or the two equations describe the same line.",
  skills: ["system-solution-types"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$y = -x^{2} + 26x - k$\nIn the given equation, $k$ is a positive constant. The graph of the equation in the $xy$-plane has two $x$-intercepts that are $10$ units apart. What is the value of $k$?",
  choices: [
    // distractor: places each x-intercept 10 units from x = 13 instead of 5 units, giving (13 - 10)(13 + 10) = 69
    { id: "A", text: "$69$" },
    { id: "B", text: "$144$" },
    // distractor: uses 13^2 = 169 as the product of the x-intercepts and never subtracts 5^2
    { id: "C", text: "$169$" },
    // distractor: squares the sum of the x-intercepts, 26^2 = 676, instead of multiplying the x-intercepts
    { id: "D", text: "$676$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice B is correct.**\n\n**The Fast Way (~35s):** The $x$-intercepts are symmetric about $x = \\frac{26}{2} = 13$ and are $10$ units apart, so they are $8$ and $18$, and $k = 8 \\times 18 = 144$.\n\n**The Full Solution:**\nStep 1: The $x$-intercepts are the solutions of $-x^{2} + 26x - k = 0$, or $x^{2} - 26x + k = 0$. The two solutions have a sum of $26$ and a product of $k$.\nStep 2: Two numbers with a sum of $26$ can be written as $13 - d$ and $13 + d$. They are $2d = 10$ units apart, so $d = 5$, and the $x$-intercepts are at $x = 8$ and $x = 18$.\nStep 3: The product of the solutions is $k = 8 \\times 18 = 144$. Check: $-x^{2} + 26x - 144 = -(x - 8)(x - 18)$, which is $0$ at $x = 8$ and $x = 18$, and $18 - 8 = 10$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($69$): places each intercept $10$ units from $x = 13$, giving $x = 3$ and $x = 23$ and a product of $69$. Those intercepts are $20$ units apart; each one is half of $10$, or $5$ units, from $13$.\n* Choice C ($169$): uses $13^{2} = 169$, which would be the product only if both intercepts were at $13$. Here $(13 - 5)(13 + 5) = 169 - 25 = 144$.\n* Choice D ($676$): squares $26$, which is the sum of the intercepts, not their product.\n\n**Test Day Takeaway:** Two $x$-intercepts a fixed distance apart sit half that distance on either side of the axis of symmetry; multiply them with the difference-of-squares shortcut.",
  skills: ["quadratics"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The function $f(t) = 512(1.44)^{\\frac{t}{2}}$ gives the number of e-books in a library's collection $t$ years after $2020$. The number of e-books increases by $p\\%$ each year. What is the value of $p$?",
  correctAnswer: "20",
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**The correct answer is 20.**\n\n**The Fast Way (~35s):** $1.44$ is the growth factor for two years, so the growth factor for one year is $\\sqrt{1.44} = 1.2$, an increase of $20\\%$.\n\n**The Full Solution:**\nStep 1: Rewrite the function so the exponent is $t$. Since $b^{\\frac{t}{2}} = \\left(b^{\\frac{1}{2}}\\right)^{t}$, the function is $f(t) = 512\\left(1.44^{\\frac{1}{2}}\\right)^{t}$.\nStep 2: Evaluate the yearly factor: $1.44^{\\frac{1}{2}} = \\sqrt{1.44} = 1.2$, so $f(t) = 512(1.2)^{t}$.\nStep 3: A yearly factor of $1.2$ means each year's number is $120\\%$ of the previous year's, an increase of $20\\%$, so $p = 20$. Check: $512(1.2)^{2} = 512(1.44) = 737.28$, which matches $f(2) = 512(1.44)^{1}$ ✓\n\n**Common Mistakes:**\n* $44$: reads $1.44$ as the yearly increase. That $44\\%$ is the growth over two years, because the exponent is $\\frac{t}{2}$.\n* $22$: halves the $44$, as if percent growth added like linear growth. A two-year factor is split into yearly factors with a square root, not by halving.\n* $1.2$: reports the yearly growth factor instead of the percent increase, which is $(1.2 - 1) \\times 100 = 20$.\n\n**Test Day Takeaway:** A divided exponent hides the real time period; rewrite $b^{\\frac{t}{n}}$ as $\\left(b^{\\frac{1}{n}}\\right)^{t}$ before reading a yearly rate off the base.",
  skills: ["exponential-growth-decay"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The total cost, in dollars, of a cooking class attended by $n$ people is $60 + 4.5n$. The average cost per person for the class was less than \\$7.20. Which of the following must be true?",
  choices: [
    // distractor: solves n > 22.2 correctly but rounds down to 22; at n = 22 the average cost is about $7.23, which is not less than $7.20
    { id: "A", text: "The least possible value of $n$ is $22$." },
    { id: "B", text: "The least possible value of $n$ is $23$." },
    // distractor: reverses the inequality to n < 22.2 and reports 22 as a maximum
    { id: "C", text: "The greatest possible value of $n$ is $22$." },
    // distractor: reverses the inequality and then rounds up, reporting 23 as a maximum
    { id: "D", text: "The greatest possible value of $n$ is $23$." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Smallest Integer in an Inequality**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** $\\frac{60 + 4.5n}{n} < 7.2$ becomes $60 < 2.7n$, so $n > 22.\\overline{2}$, and the least whole number of people is $23$.\n\n**The Full Solution:**\nStep 1: The average cost per person is the total cost divided by the number of people, so the condition is $\\frac{60 + 4.5n}{n} < 7.2$.\nStep 2: Since $n$ is positive, multiplying both sides by $n$ keeps the direction: $60 + 4.5n < 7.2n$. Subtracting $4.5n$ gives $60 < 2.7n$, and dividing by $2.7$ gives $n > 22.\\overline{2}$.\nStep 3: The least integer greater than $22.\\overline{2}$ is $23$, and there is no greatest value, since more people spread the $\\$60$ further. Check: at $n = 23$ the average is $\\frac{60 + 103.5}{23} \\approx 7.11$, which is less than $7.20$, and at $n = 22$ it is $\\frac{159}{22} \\approx 7.23$, which is not ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($22$ as the least value): rounds $22.\\overline{2}$ down. At $n = 22$ the average cost is about $\\$7.23$, which is more than $\\$7.20$.\n* Choice C ($22$ as the greatest value): reads the inequality as $n < 22.\\overline{2}$. Multiplying by a positive $n$ never reverses the inequality.\n* Choice D ($23$ as the greatest value): reverses the inequality and then rounds up. Adding people lowers the average cost, so there is no maximum.\n\n**Test Day Takeaway:** After isolating the variable, read the inequality before rounding: \"greater than $22.\\overline{2}$\" rounds up to $23$, and only multiplying or dividing by a negative number reverses the sign.",
  skills: ["inequalities"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$\\frac{x^{2} - 19x + 84}{x - 12} = k$\nIn the given equation, $k$ is a constant. For which of the following values of $k$ does the equation have no solution?",
  choices: [
    { id: "A", text: "$5$" },
    // distractor: reports the zero of the remaining factor x - 7 instead of the value of the left side at the excluded x = 12; k = 7 gives x = 14
    { id: "B", text: "$7$" },
    // distractor: reports the excluded value of x itself rather than the value of k it would produce; k = 12 gives x = 19
    { id: "C", text: "$12$" },
    // distractor: reports the constant term 84 from the numerator; k = 84 gives x = 91
    { id: "D", text: "$84$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Rational Equation with No Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** The numerator factors as $(x - 12)(x - 7)$, so the left side equals $x - 7$ for every $x \\neq 12$. The only value it never reaches is the one at $x = 12$, namely $12 - 7 = 5$.\n\n**The Full Solution:**\nStep 1: Factor the numerator. Two numbers with a product of $84$ and a sum of $-19$ are $-12$ and $-7$, so $x^{2} - 19x + 84 = (x - 12)(x - 7)$.\nStep 2: For $x \\neq 12$, the left side simplifies to $\\frac{(x - 12)(x - 7)}{x - 12} = x - 7$, so the equation becomes $x - 7 = k$, with $x = 12$ not allowed.\nStep 3: The equation $x - 7 = k$ has the solution $x = k + 7$, which fails only when $k + 7 = 12$, or $k = 5$. Check: $k = 5$ requires $x = 12$, where the denominator is $0$, so the equation has no solution ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($7$): takes the $7$ from the factor $x - 7$. That is a value of $x$ that makes the left side $0$; for $k = 7$, the solution is $x = 14$.\n* Choice C ($12$): reports the excluded value of $x$ rather than the value of $k$ it would produce. For $k = 12$, the solution is $x = 19$.\n* Choice D ($84$): copies the constant term of the numerator. For $k = 84$, the solution is $x = 91$.\n\n**Test Day Takeaway:** After a factor cancels, the simplified equation is still missing one input; the value it can never equal is what the simplified form gives at the excluded input.",
  skills: ["rational-expressions"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the figure shown, two lines intersect. What is the value of $x + y$?",
  diagram: { type: "intersectingLines", params: { angles: ["(4x + 5)°", "(2y + 7)°", "(6x - 15)°", ""], figureNote: true, angle0Measure: 45 } },
  choices: [
    // distractor: solves x = 10 correctly but treats (2y + 7) as equal to the 45-degree angle, getting y = 19, for 10 + 19 = 29
    { id: "A", text: "$29$" },
    // distractor: makes both slips: treats the vertical pair as supplementary (x = 19) and the supplementary pair as equal (y = 19), for 19 + 19 = 38
    { id: "B", text: "$38$" },
    { id: "C", text: "$74$" },
    // distractor: treats (4x + 5) and (6x - 15) as supplementary instead of equal, getting 10x - 10 = 180 and x = 19, for 19 + 64 = 83
    { id: "D", text: "$83$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Vertical Angles**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** Vertical angles are equal, so $4x + 5 = 6x - 15$ gives $x = 10$ and an angle of $45^\\circ$; the adjacent angle is $135^\\circ$, so $2y + 7 = 135$ and $y = 64$. The sum is $74$.\n\n**The Full Solution:**\nStep 1: The $(4x + 5)^\\circ$ and $(6x - 15)^\\circ$ angles are opposite each other, so they are vertical angles and are equal: $4x + 5 = 6x - 15$. Then $20 = 2x$, so $x = 10$, and each of these angles measures $4(10) + 5 = 45^\\circ$.\nStep 2: The $(2y + 7)^\\circ$ angle and the $45^\\circ$ angle together form a straight angle, so they are supplementary: $2y + 7 = 180 - 45 = 135$, which gives $2y = 128$ and $y = 64$.\nStep 3: The sum is $x + y = 10 + 64 = 74$. Check: the four angles measure $45^\\circ$, $135^\\circ$, $45^\\circ$, and $135^\\circ$, which total $360^\\circ$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($29$): finds $x = 10$ but then sets $2y + 7$ equal to $45$, giving $y = 19$ and $10 + 19 = 29$. Adjacent angles along a line add to $180^\\circ$; only opposite angles are equal.\n* Choice B ($38$): switches both relationships, solving $(4x + 5) + (6x - 15) = 180$ for $x = 19$ and $2y + 7 = 45$ for $y = 19$.\n* Choice D ($83$): treats the opposite pair as supplementary, $10x - 10 = 180$, so $x = 19$, and then uses the correct $y = 64$ for $19 + 64 = 83$.\n\n**Test Day Takeaway:** Where two lines cross, opposite angles are equal and adjacent angles add to $180^\\circ$; decide which pair you have before writing the equation.",
  skills: ["angles"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A random sample of $180$ students at a college were asked how many minutes they spent in the language lab last week. The sample mean was $47$ minutes, with a margin of error of $6$ minutes. Which of the following is the most plausible statement about the mean time for all students at the college?",
  choices: [
    // distractor: subtracts the margin of error but never adds it, giving 41 to 47
    { id: "A", text: "It is between $41$ and $47$ minutes." },
    { id: "B", text: "It is between $41$ and $53$ minutes." },
    // distractor: uses half the margin of error, 3, on each side, giving 44 to 50
    { id: "C", text: "It is between $44$ and $50$ minutes." },
    // distractor: adds the margin of error but never subtracts it, giving 47 to 53
    { id: "D", text: "It is between $47$ and $53$ minutes." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Plausible values run from $47 - 6$ to $47 + 6$, that is, from $41$ to $53$ minutes.\n\n**The Full Solution:**\nStep 1: A margin of error extends on both sides of the sample mean, so the plausible values of the population mean run from (sample mean) $-$ (margin) to (sample mean) $+$ (margin).\nStep 2: The sample mean is $47$ minutes and the margin of error is $6$ minutes, so the lower bound is $47 - 6 = 41$ and the upper bound is $47 + 6 = 53$.\nStep 3: The mean time for all students is plausibly between $41$ and $53$ minutes. Check: the interval is centered at $47$ and is $12$ minutes wide, twice the margin of error ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($41$ to $47$): subtracts the margin of error but stops at the sample mean, keeping only half the interval.\n* Choice C ($44$ to $50$): uses $3$ minutes on each side, as if the margin of error were split in half. The margin applies in full to each side.\n* Choice D ($47$ to $53$): adds the margin of error but never subtracts it, again keeping only half the interval.\n\n**Test Day Takeaway:** A margin of error is applied once in each direction, so the interval is always centered on the sample statistic.",
  skills: ["margin-of-error"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A savings account was opened with a deposit of \\$8,000 and earns $5\\%$ interest compounded annually. No other deposits or withdrawals are made. How much interest, in dollars, does the account earn during the third year?",
  correctAnswer: "441",
  explanation: "**SAT Pattern: Compound Interest**\n\n**The correct answer is 441.**\n\n**The Fast Way (~35s):** After two years the balance is $8{,}000(1.05)^{2} = 8{,}820$ dollars, and the third year adds $5\\%$ of that: $0.05(8{,}820) = 441$.\n\n**The Full Solution:**\nStep 1: Interest of $5\\%$ compounded annually multiplies the balance by $1.05$ each year, so the balance after $t$ years is $8{,}000(1.05)^{t}$ dollars.\nStep 2: The third year runs from $t = 2$ to $t = 3$. After $2$ years the balance is $8{,}000(1.1025) = 8{,}820$ dollars, and after $3$ years it is $8{,}000(1.157625) = 9{,}261$ dollars.\nStep 3: The interest earned during the third year is $9{,}261 - 8{,}820 = 441$ dollars. Check: the third year's interest is $5\\%$ of the balance at the start of that year, and $0.05(8{,}820) = 441$ ✓\n\n**Common Mistakes:**\n* $400$: takes $5\\%$ of the original $\\$8{,}000$. That is the interest for the first year; each later year earns interest on a larger balance.\n* $1{,}261$: reports the total interest for all three years, $9{,}261 - 8{,}000$, instead of the interest for the third year alone.\n* $420$: takes $5\\%$ of the balance after one year, $\\$8{,}400$, which is the interest for the second year.\n\n**Test Day Takeaway:** With compound interest, the interest for a single year is the rate times the balance at the start of that year, so count the exponent carefully before you multiply.",
  skills: ["exponential-functions"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A store sold $160$ bicycles in $2019$ and $810$ bicycles in $2023$. The number of bicycles the store sold increased by the same percentage each year from $2019$ to $2023$. How many bicycles did the store sell in $2021$?",
  correctAnswer: "360",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**The correct answer is 360.**\n\n**The Fast Way (~40s):** Over four years the number is multiplied by $\\frac{810}{160} = 5.0625$, so over two years it is multiplied by $\\sqrt{5.0625} = 2.25$, and $160(2.25) = 360$.\n\n**The Full Solution:**\nStep 1: A constant percent increase multiplies the yearly number by the same factor each year. Let $R$ be the factor for two years. From $2019$ to $2023$ is two such periods, so $160R^{2} = 810$.\nStep 2: Then $R^{2} = \\frac{810}{160} = 5.0625$, so $R = \\sqrt{5.0625} = 2.25$.\nStep 3: $2021$ is two years after $2019$, so the store sold $160(2.25) = 360$ bicycles. Check: $360(2.25) = 810$, the number sold in $2023$ ✓\n\n**Common Mistakes:**\n* $485$: averages the two numbers, $\\frac{160 + 810}{2}$. A constant percent increase spaces the values by multiplication, not by addition.\n* $405$: halves the $2023$ number, as if the number doubled every two years. The two-year factor here is $2.25$, not $2$.\n* $240$: finds the yearly factor $\\sqrt{2.25} = 1.5$ but applies it only once, which gives the number sold in $2020$.\n\n**Test Day Takeaway:** To find the middle value of an exponential pattern, take the square root of the overall factor; averaging the two values is linear thinking and lands too high.",
  skills: ["exponential-growth-decay"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "If $\\frac{4t + 9}{5} = 7$, what is the value of $8t + 18$?",
  choices: [
    // distractor: solves for t = 6.5 and stops instead of evaluating 8t + 18
    { id: "A", text: "$6.5$" },
    // distractor: doubles 7 and forgets that 4t + 9 is 5 times 7, giving 14
    { id: "B", text: "$14$" },
    // distractor: finds 4t + 9 = 35 but then adds 9 instead of doubling, giving 35 + 9 = 44
    { id: "C", text: "$44$" },
    { id: "D", text: "$70$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Multiplying by $5$ gives $4t + 9 = 35$, and $8t + 18 = 2(4t + 9) = 2(35) = 70$.\n\n**The Full Solution:**\nStep 1: Multiply both sides of the equation by $5$: $4t + 9 = 35$.\nStep 2: Notice that $8t + 18$ is twice $4t + 9$: $8t + 18 = 2(4t + 9)$.\nStep 3: Substitute: $8t + 18 = 2(35) = 70$. Check by solving for $t$: $4t = 26$, so $t = 6.5$, and $8(6.5) + 18 = 52 + 18 = 70$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6.5$): solves for $t$ correctly but reports $t$ instead of the value of $8t + 18$.\n* Choice B ($14$): doubles $7$, treating $4t + 9$ as if it equaled $7$. It is $\\frac{4t + 9}{5}$ that equals $7$, so $4t + 9 = 35$.\n* Choice C ($44$): finds $4t + 9 = 35$ but then adds $9$ to get $44$, as if $8t + 18$ came from adding to $4t + 9$ rather than doubling it.\n\n**Test Day Takeaway:** Before solving for the variable, check whether the target expression is a multiple of an expression you already know; here one doubling replaces several lines of algebra.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "For the quadratic function $p$, the table shows four values of $x$ and their corresponding values of $p(x)$. The leading coefficient of $p(x)$ is $2$. Which of the following is a factor of $p(x)$?",
  questionTable: { headers: ["$x$", "$p(x)$"], rows: [["$0$", "$24$"], ["$1$", "$10$"], ["$2$", "$0$"], ["$4$", "$-8$"]] },
  choices: [
    // distractor: reads the table value p(0) = 24 as a zero of p and writes x - 24
    { id: "A", text: "$x - 24$" },
    // distractor: solves (0 - 2)(0 - r) = 24 without the leading coefficient 2, getting r = 12
    { id: "B", text: "$x - 12$" },
    { id: "C", text: "$x - 6$" },
    // distractor: finds the zero r = 6 but writes the factor with the wrong sign, x + 6
    { id: "D", text: "$x + 6$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Polynomial Factoring with Given Factor**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** The table shows $p(2) = 0$, so $x - 2$ is a factor and $p(x) = 2(x - 2)(x - r)$. Then $p(0) = 2(-2)(-r) = 4r = 24$, so $r = 6$ and $x - 6$ is a factor.\n\n**The Full Solution:**\nStep 1: The table shows $p(2) = 0$, so $x - 2$ is a factor of $p(x)$. With a leading coefficient of $2$, the function can be written as $p(x) = 2(x - 2)(x - r)$, where $r$ is the other zero.\nStep 2: Use the table value $p(0) = 24$: $2(0 - 2)(0 - r) = 24$, which is $4r = 24$, so $r = 6$.\nStep 3: The other factor is $x - 6$. Check the rest of the table with $p(x) = 2(x - 2)(x - 6) = 2x^{2} - 16x + 24$: $p(1) = 2 - 16 + 24 = 10$ and $p(4) = 32 - 64 + 24 = -8$, both matching ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($x - 24$): treats the output $24$ as a zero. The table shows $p(0) = 24$, which means the graph passes through $(0, 24)$, not that $p(24) = 0$.\n* Choice B ($x - 12$): leaves out the leading coefficient and solves $(0 - 2)(0 - r) = 24$ to get $r = 12$. Then $2(0 - 2)(0 - 12) = 48$, not $24$.\n* Choice D ($x + 6$): finds the zero $x = 6$ but flips the sign. The factor $x + 6$ would make $x = -6$ a zero.\n\n**Test Day Takeaway:** A zero in the table gives one factor; write the factored form with the leading coefficient in front, then substitute the easiest remaining table value.",
  skills: ["finding-roots-factoring"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $V(m) = 74(0.8)^{\\frac{m}{5}}$ models the amount of water, in millions of gallons, in a reservoir $m$ months after a drought began. Which statement best describes how the amount of water changes?",
  choices: [
    { id: "A", text: "Every $5$ months, the amount of water is $80\\%$ of the amount $5$ months earlier." },
    // distractor: reads the base 0.8 as the fraction lost rather than the fraction kept; an 80% decrease would need a base of 0.2
    { id: "B", text: "Every $5$ months, the amount of water decreases by $80\\%$." },
    // distractor: ignores the division by 5 in the exponent and applies the factor 0.8 every month
    { id: "C", text: "Each month, the amount of water is $80\\%$ of the amount the previous month." },
    // distractor: reads the 5 in the exponent as a percent decrease per month
    { id: "D", text: "Each month, the amount of water decreases by $5\\%$." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The exponent $\\frac{m}{5}$ increases by $1$ every $5$ months, and each time the amount is multiplied by $0.8$, so it becomes $80\\%$ of the amount $5$ months earlier.\n\n**The Full Solution:**\nStep 1: In a function of the form $a(b)^{\\frac{m}{n}}$, the factor $b$ is applied once every $n$ units of $m$. Here $b = 0.8$ and $n = 5$, so the factor $0.8$ is applied once every $5$ months.\nStep 2: Multiplying by $0.8$ makes the new amount $80\\%$ of the old amount, which is a $20\\%$ decrease, not an $80\\%$ decrease.\nStep 3: So every $5$ months, the amount of water is $80\\%$ of the amount $5$ months earlier. Check: $V(0) = 74$ and $V(5) = 74(0.8)^{1} = 59.2$, and $\\frac{59.2}{74} = 0.8$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B (decreases by $80\\%$ every $5$ months): mistakes the factor kept for the amount lost. An $80\\%$ decrease would leave $20\\%$, a base of $0.2$; here $V(5) = 59.2$, a $20\\%$ decrease.\n* Choice C ($80\\%$ each month): ignores the $5$ in the exponent. That would give $V(5) = 74(0.8)^{5} \\approx 24.2$, not $59.2$.\n* Choice D (decreases by $5\\%$ each month): reads the $5$ in the exponent as a percent. The $5$ is a number of months, not a rate.\n\n**Test Day Takeaway:** In $a(b)^{\\frac{m}{n}}$, the base is the fraction that remains and $n$ is how long it takes; \"is $80\\%$ of\" and \"decreases by $80\\%$\" are very different statements.",
  skills: ["exponential-growth-decay"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table shows the number of eleventh graders and twelfth graders enrolled in two electives at a high school. A student enrolled in debate will be selected at random. The probability that this student is an eleventh grader is $0.6$. What is the value of $n$?",
  questionTable: { headers: ["", "Photography", "Debate"], rows: [["Eleventh grade", "$44$", "$n$"], ["Twelfth grade", "$35$", "$48$"]] },
  choices: [
    // distractor: uses the complement 0.4 in place of 0.6, solving n/(n + 48) = 0.4 to get 32
    { id: "A", text: "$32$" },
    // distractor: computes the probability that an eleventh grader is enrolled in debate, solving n/(44 + n) = 0.6 to get 66
    { id: "B", text: "$66$" },
    { id: "C", text: "$72$" },
    // distractor: solves n = 0.6n + 48, forgetting to multiply the 48 by 0.6, and gets 120
    { id: "D", text: "$120$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Only the debate column matters, so $\\frac{n}{n + 48} = 0.6$; cross-multiplying gives $0.4n = 28.8$ and $n = 72$.\n\n**The Full Solution:**\nStep 1: The student is selected only from those enrolled in debate, so the debate column is the whole sample space. That column has $n$ eleventh graders and $48$ twelfth graders, so it has $n + 48$ students. The photography column plays no part.\nStep 2: The probability that the chosen debate student is an eleventh grader is $\\frac{n}{n + 48}$, and this probability is $0.6$. Multiplying both sides by $n + 48$ gives $n = 0.6n + 28.8$.\nStep 3: Subtracting $0.6n$ leaves $0.4n = 28.8$, so $n = 72$. Check: the debate column would then hold $72 + 48 = 120$ students, and $\\frac{72}{120} = 0.6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($32$): solves with $0.4$, the probability of the twelfth-grade outcome, giving $\\frac{n}{n + 48} = 0.4$ and $n = 32$. Then $\\frac{32}{80} = 0.4$, the complement of what was asked.\n* Choice B ($66$): reverses the condition and asks what fraction of eleventh graders chose debate, solving $\\frac{n}{44 + n} = 0.6$ for $n = 66$. That uses the eleventh-grade **row**, not the debate column.\n* Choice D ($120$): multiplies $0.6$ by $n$ but not by $48$, solving $n = 0.6n + 48$ for $n = 120$. That value is the size of the whole debate column, not the eleventh-grade part of it.\n\n**Test Day Takeaway:** A conditional probability lives entirely inside one row or one column; circle that line of the table first, and the numbers outside it stop being distractions.",
  skills: ["conditional-probability", "two-way-table"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$3x^{2} + 27 = kx$\nIn the given equation, $k$ is a positive constant. The equation has exactly one real solution. What is the value of $k$?",
  correctAnswer: "18",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**The correct answer is 18.**\n\n**The Fast Way (~35s):** Rewrite as $3x^{2} - kx + 27 = 0$. Exactly one real solution means $k^{2} - 4(3)(27) = 0$, so $k^{2} = 324$ and, since $k$ is positive, $k = 18$.\n\n**The Full Solution:**\nStep 1: Subtract $kx$ from both sides to get $3x^{2} - kx + 27 = 0$, so $a = 3$, $b = -k$, and $c = 27$.\nStep 2: A quadratic equation has exactly one real solution when its discriminant $b^{2} - 4ac$ equals $0$: $(-k)^{2} - 4(3)(27) = k^{2} - 324 = 0$, so $k^{2} = 324$ and $k = \\pm 18$.\nStep 3: Since $k$ is positive, $k = 18$. Check: $3x^{2} - 18x + 27 = 3(x^{2} - 6x + 9) = 3(x - 3)^{2}$, which is $0$ only at $x = 3$ ✓\n\n**Common Mistakes:**\n* $324$: stops at $k^{2} = 324$ and reports the square instead of its square root.\n* $9$: leaves the $4$ out of $b^{2} - 4ac$, solving $k^{2} = 3 \\times 27 = 81$. With $k = 9$ the discriminant is $81 - 324 = -243$, so the equation has no real solutions.\n* $6$: divides the equation by $3$ to get $x^{2} - \\frac{k}{3}x + 9 = 0$, finds $\\frac{k}{3} = 6$, and reports $6$ instead of $k = 18$.\n\n**Test Day Takeaway:** \"Exactly one real solution\" means the discriminant is $0$; put the equation in standard form first, then let any sign condition choose between the two square roots.",
  skills: ["discriminant-analysis"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A store increased the price of a skillet by $22\\%$ to \\$67.10. What was the price, in dollars, before the increase?",
  choices: [
    // distractor: treats a 22% increase as multiplying by 2.2 and divides 67.10 by 2.2, getting 30.50
    { id: "A", text: "$30.50$" },
    // distractor: subtracts $22 instead of 22 percent, giving 67.10 - 22 = 45.10
    { id: "B", text: "$45.10$" },
    // distractor: takes 78% of 67.10 instead of dividing by 1.22, giving 52.34
    { id: "C", text: "$52.34$" },
    { id: "D", text: "$55.00$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Percent Increase**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The new price is $122\\%$ of the old price, so divide: $\\frac{67.10}{1.22} = 55.00$.\n\n**The Full Solution:**\nStep 1: Let $P$ be the price before the increase. A $22\\%$ increase multiplies $P$ by $1 + 0.22 = 1.22$, so $1.22P = 67.10$.\nStep 2: Divide both sides by $1.22$: $P = \\frac{67.10}{1.22} = 55.00$.\nStep 3: The price before the increase was $\\$55.00$. Check: $22\\%$ of $55$ is $12.10$, and $55.00 + 12.10 = 67.10$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($30.50$): treats a $22\\%$ increase as multiplying by $2.2$. A $22\\%$ increase is a factor of $1.22$; a factor of $2.2$ would be a $120\\%$ increase.\n* Choice B ($45.10$): subtracts $\\$22$ instead of $22\\%$. The percent is taken of the original price, not a fixed number of dollars.\n* Choice C ($52.34$): takes $78\\%$ of the new price. The $22\\%$ was taken of the smaller original price, so it must be undone by dividing by $1.22$; increasing $52.34$ by $22\\%$ gives about $\\$63.85$, not $\\$67.10$.\n\n**Test Day Takeaway:** To undo a percent increase, divide by the growth factor; subtracting the same percent from the new amount always gives too small an answer.",
  skills: ["percent-of-value", "percent-change"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The graph of $y = x^{2} - 8x + 24$ is shown. In the $xy$-plane, the graph of $y = 2x + c$, where $c$ is a constant, intersects the graph of $y = x^{2} - 8x + 24$ at exactly one point. What is the value of $c$?",
  diagram: { type: "parabola", params: { vertex: { h: 4, k: 8 }, a: 1, xRange: [-1, 9], yRange: [0, 28], showVertex: false, gridInterval: 2, xTickInterval: 2, yTickInterval: 4 } },
  correctAnswer: "-1",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is -1.**\n\n**The Fast Way (~40s):** Setting the expressions equal gives $x^{2} - 10x + (24 - c) = 0$; exactly one intersection point means the discriminant is $0$, so $100 - 4(24 - c) = 0$ and $c = -1$.\n\n**The Full Solution:**\nStep 1: The graphs intersect where $x^{2} - 8x + 24 = 2x + c$. Subtracting $2x + c$ from both sides gives $x^{2} - 10x + (24 - c) = 0$.\nStep 2: The graphs intersect at exactly one point when this equation has exactly one real solution, so its discriminant is $0$: $(-10)^{2} - 4(1)(24 - c) = 0$, or $100 - 96 + 4c = 0$.\nStep 3: Then $4 + 4c = 0$, so $c = -1$. Check: with $c = -1$ the equation becomes $x^{2} - 10x + 25 = (x - 5)^{2} = 0$, with the single solution $x = 5$; both equations give $y = 9$ there, since $25 - 40 + 24 = 9$ and $2(5) - 1 = 9$ ✓\n\n**Common Mistakes:**\n* $1$: reaches $4c = -4$ but drops the negative sign.\n* $9$: reports the $y$-coordinate of the intersection point $(5, 9)$ instead of the value of $c$.\n* $24$: copies the constant term of the quadratic, which is the $y$-intercept of the parabola, not of the line.\n\n**Test Day Takeaway:** A line that meets a parabola at exactly one point turns into a quadratic equation with a discriminant of $0$; set the expressions equal, collect terms, and solve $b^{2} - 4ac = 0$ for the constant.",
  skills: ["tangent-lines", "discriminant-analysis"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$\\frac{4^{x+3}}{8^{x-1}} \\cdot 2^{x} = 2^{m}$\nIn the given equation, $m$ is a constant. The equation is true for all values of $x$. What is the value of $m$?",
  correctAnswer: "9",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**The correct answer is 9.**\n\n**The Fast Way (~40s):** Rewrite everything in base $2$: $\\frac{2^{2x+6}}{2^{3x-3}} \\cdot 2^{x} = 2^{(2x+6)-(3x-3)+x} = 2^{9}$.\n\n**The Full Solution:**\nStep 1: Convert each power to base $2$. Since $4 = 2^{2}$, $4^{x+3} = 2^{2x+6}$. Since $8 = 2^{3}$, $8^{x-1} = 2^{3x-3}$.\nStep 2: Dividing powers with the same base subtracts exponents and multiplying adds them, so the left side is $2^{(2x+6) - (3x-3) + x}$.\nStep 3: Simplify the exponent: $2x + 6 - 3x + 3 + x = 9$, so the left side is $2^{9}$ for every $x$, and $m = 9$. Check at $x = 1$: $\\frac{4^{4}}{8^{0}} \\cdot 2^{1} = 256 \\cdot 2 = 512 = 2^{9}$ ✓\n\n**Common Mistakes:**\n* $3$: subtracts $3x - 3$ as $3x + 3$, getting an exponent of $(2x + 6) - (3x + 3) + x = 3$. Subtracting a difference changes both signs.\n* $6$: writes $4^{x+3}$ as $2^{2x+3}$, multiplying only the $x$ by $2$, which gives an exponent of $6$.\n* $7$: writes $8^{x-1}$ as $2^{3x-1}$, multiplying only the $x$ by $3$, which gives an exponent of $7$.\n\n**Test Day Takeaway:** Put every power over the same base before working with the exponents, and distribute carefully; if the $x$ terms cancel, the expression is constant.",
  skills: ["exponent-laws"]
}
      ]
    }
  ]
};

export default practiceTest10;
