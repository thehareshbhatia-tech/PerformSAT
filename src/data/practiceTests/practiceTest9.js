// Practice Test 9 - SAT Math
// v2 freshness rebuild (2026-09-07): every slot re-patterned and re-authored against the seen-corpus gate — docs/TEST_RECREATION_V2_SPEC.md
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
  question: "A bakery sold $250$ muffins on Saturday. The table shows the number of muffins of each flavor that the bakery sold. What percent of the muffins sold on Saturday were banana muffins?",
  questionTable: { headers: ["Flavor", "Number of muffins"], rows: [["Blueberry", "150"], ["Chocolate chip", "55"], ["Banana", "30"], ["Bran", "15"]] },
  choices: [
    { id: "A", text: "$12\\%$" },
    // distractor: divides the banana count by the blueberry count (30/150) instead of by the 250-muffin total
    { id: "B", text: "$20\\%$" },
    // distractor: reads the chocolate chip row instead of the banana row (55/250)
    { id: "C", text: "$22\\%$" },
    // distractor: copies the banana count, 30, straight into a percent
    { id: "D", text: "$30\\%$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Banana muffins are $30$ of the $250$ muffins, and $\\frac{30}{250} = \\frac{12}{100}$, so they are $12\\%$ of the muffins sold.\n\n**The Full Solution:**\nStep 1: The part is the banana row of the table, $30$ muffins. The whole is all the muffins sold on Saturday, $250$.\nStep 2: Divide the part by the whole: $\\frac{30}{250} = 0.12$.\nStep 3: Write the decimal as a percent: $0.12 = 12\\%$. Check: $150 + 55 + 30 + 15 = 250$, so the table covers every muffin sold, and $12\\%$ of $250$ is $0.12(250) = 30$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($20\\%$): divides by the blueberry count, $\\frac{30}{150} = 0.20$. The question asks for a percent of all the muffins, so the denominator is $250$.\n* Choice C ($22\\%$): reads the chocolate chip row, $\\frac{55}{250} = 0.22$, instead of the banana row.\n* Choice D ($30\\%$): writes the count $30$ as a percent. That works only when the whole is $100$; here it is $250$.\n\n**Test Day Takeaway:** Percent of a whole is part over whole, times $100$. Find the whole first (here the stem gives it), and make sure the part comes from the row the question names.",
  skills: ["percent-of-value"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$7x + 2y = 75$\n$7x + 6y = 99$\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
  choices: [
    // distractor: divides the difference 24 by 8, the sum of the y-coefficients, instead of by their difference 4
    { id: "A", text: "$3$" },
    // distractor: divides the difference 24 by 6, the y-coefficient in the second equation, instead of by 6 - 2 = 4
    { id: "B", text: "$4$" },
    { id: "C", text: "$6$" },
    // distractor: solves for the wrong variable and gives the value of x
    { id: "D", text: "$9$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Both equations contain $7x$, so subtracting the first from the second leaves $4y = 24$, and $y = 6$.\n\n**The Full Solution:**\nStep 1: The $x$-terms match, so subtract the first equation from the second: $(7x + 6y) - (7x + 2y) = 99 - 75$.\nStep 2: Simplify: $4y = 24$.\nStep 3: Divide by $4$: $y = 6$. Check: the first equation gives $7x + 12 = 75$, so $x = 9$, and the second gives $7(9) + 6(6) = 63 + 36 = 99$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): divides $24$ by $2 + 6 = 8$. Subtracting the equations subtracts the $y$-coefficients too, so the divisor is $6 - 2 = 4$.\n* Choice B ($4$): divides $24$ by $6$, the $y$-coefficient of the second equation alone, instead of by the difference $4$.\n* Choice D ($9$): this is the value of $x$. The question asks for $y$.\n\n**Test Day Takeaway:** When one variable has the same coefficient in both equations, subtract the equations to eliminate it, and subtract every term on both sides.",
  skills: ["elimination-method", "setting-up-systems"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$4x + 6y = 30$\n$10x + 15y = c$\nIn the given system of equations, $c$ is a constant. The system has infinitely many solutions. What is the value of $c$?",
  choices: [
    // distractor: divides 30 by the multiplier 2.5 instead of multiplying
    { id: "A", text: "$12$" },
    // distractor: keeps the constant 30 unchanged, as if only the variable terms needed to match
    { id: "B", text: "$30$" },
    // distractor: adds the difference of the x-coefficients (10 - 4 = 6) to 30 instead of scaling
    { id: "C", text: "$36$" },
    { id: "D", text: "$75$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** $10x + 15y$ is $2.5$ times $4x + 6y$, so the constant must be scaled the same way: $c = 2.5(30) = 75$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has infinitely many solutions only when one equation is a constant multiple of the other.\nStep 2: Compare coefficients: $\\frac{10}{4} = 2.5$ and $\\frac{15}{6} = 2.5$, so the second equation must be $2.5$ times the first.\nStep 3: Scale the constant too: $c = 2.5(30) = 75$. Check: $2.5(4x + 6y) = 10x + 15y$ and $2.5(30) = 75$, so the two equations describe the same line ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): divides $30$ by $2.5$. The second equation has the larger coefficients, so its constant must be larger, not smaller.\n* Choice B ($30$): keeps the same constant. With $c = 30$ the lines are parallel and distinct, so the system has no solution.\n* Choice C ($36$): adds $10 - 4 = 6$ to $30$. Equivalent equations differ by a factor, not by a fixed amount.\n\n**Test Day Takeaway:** Infinitely many solutions means the equations are multiples of each other; find the multiplier from one pair of coefficients and apply it to every term, including the constant.",
  skills: ["system-solution-types", "infinite-solutions-condition"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "In the $xy$-plane, the graph of the linear function $f$ passes through the points $(4, 50)$ and $(12, 2)$. What is the slope of the graph of $f$?",
  choices: [
    { id: "A", text: "$-6$" },
    // distractor: divides the change in y, -48, by the second x-coordinate 12 instead of by the change in x, 8
    { id: "B", text: "$-4$" },
    // distractor: divides by the second x-coordinate 12 and also drops the negative sign
    { id: "C", text: "$4$" },
    // distractor: subtracts the y-values and the x-values in opposite orders, which flips the sign
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The $y$-value falls $48$ while $x$ rises $8$, so the slope is $\\frac{-48}{8} = -6$.\n\n**The Full Solution:**\nStep 1: Slope is the change in $y$ divided by the change in $x$: $m = \\frac{y_2 - y_1}{x_2 - x_1}$.\nStep 2: Substitute in the same order: $m = \\frac{2 - 50}{12 - 4} = \\frac{-48}{8}$.\nStep 3: Simplify: $m = -6$. Check: starting at $(4, 50)$ and moving $8$ units right at slope $-6$ lowers $y$ by $48$, to $50 - 48 = 2$, which is the point $(12, 2)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-4$): divides $-48$ by $12$, the second $x$-coordinate, instead of by the change in $x$, $12 - 4 = 8$.\n* Choice C ($4$): divides by $12$ instead of $8$ and also loses the sign. The $y$-values decrease as $x$ increases, so the slope is negative.\n* Choice D ($6$): computes $\\frac{50 - 2}{12 - 4}$, subtracting the $y$-values in one order and the $x$-values in the other.\n\n**Test Day Takeaway:** Subtract the coordinates in the same order on the top and the bottom, and check the sign: if $y$ goes down as $x$ goes up, the slope is negative.",
  skills: ["slope-from-points"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "In the $xy$-plane, line $j$ passes through the point $(0, 2)$ and is parallel to the graph of $y = 4x - 7$. Which equation defines line $j$?",
  choices: [
    // distractor: changes the sign of the slope; a parallel line keeps the same slope, 4
    { id: "A", text: "$y = -4x + 2$" },
    // distractor: swaps the roles of the numbers, using 2 as the slope and 4 as the y-intercept
    { id: "B", text: "$y = 2x + 4$" },
    // distractor: copies the given line, which has the right slope but crosses the y-axis at (0, -7), not (0, 2)
    { id: "C", text: "$y = 4x - 7$" },
    { id: "D", text: "$y = 4x + 2$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Parallel lines have the same slope, so line $j$ has slope $4$, and the point $(0, 2)$ makes its $y$-intercept $2$: $y = 4x + 2$.\n\n**The Full Solution:**\nStep 1: The graph of $y = 4x - 7$ has slope $4$.\nStep 2: Parallel lines have equal slopes, so line $j$ can be written as $y = 4x + b$.\nStep 3: Line $j$ passes through $(0, 2)$, a point on the $y$-axis, so $b = 2$ and line $j$ is $y = 4x + 2$. Check: $4(0) + 2 = 2$, and both lines have slope $4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -4x + 2$): passes through $(0, 2)$, but its slope is $-4$; a parallel line keeps the slope $4$.\n* Choice B ($y = 2x + 4$): swaps the slope and the $y$-intercept.\n* Choice C ($y = 4x - 7$): this is the given line itself; it has the right slope but passes through $(0, -7)$, not $(0, 2)$.\n\n**Test Day Takeaway:** A parallel line keeps the slope; a point of the form $(0, b)$ gives the $y$-intercept directly.",
  skills: ["writing-parallel-equation"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table shows three values of $x$ and their corresponding values of $y$ for the equation $y = f(x) + 7$, where $f$ is a quadratic function. What is the maximum value of $f(x)$?",
  questionTable: { headers: ["$x$", "$y$"], rows: [["$0$", "$11$"], ["$2$", "$15$"], ["$4$", "$11$"]] },
  choices: [
    // distractor: gives the x-coordinate of the vertex, 2, instead of the maximum value
    { id: "A", text: "$2$" },
    { id: "B", text: "$8$" },
    // distractor: gives the maximum value of y = f(x) + 7 without subtracting 7
    { id: "C", text: "$15$" },
    // distractor: adds 7 to the greatest y-value instead of subtracting it
    { id: "D", text: "$22$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertical Shift**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The $y$-values at $x = 0$ and $x = 4$ are equal, so the vertex is at $x = 2$, where $y = 15$; then $f(2) = 15 - 7 = 8$.\n\n**The Full Solution:**\nStep 1: A parabola is symmetric about its vertex. Since $y = 11$ at both $x = 0$ and $x = 4$, the vertex is at $x = \\frac{0 + 4}{2} = 2$.\nStep 2: At $x = 2$, $y = 15$, which is greater than $11$, so the parabola opens downward and $15$ is the maximum value of $y$.\nStep 3: Since $y = f(x) + 7$, $f(x) = y - 7$, so the maximum value of $f(x)$ is $15 - 7 = 8$. Check: $f(0) = 11 - 7 = 4 < 8$ and $f(4) = 4 < 8$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): this is the $x$-coordinate of the vertex, not the maximum value of $f(x)$.\n* Choice C ($15$): this is the maximum value of $y = f(x) + 7$; the $7$ still has to be subtracted.\n* Choice D ($22$): adds $7$ to $15$ instead of subtracting it.\n\n**Test Day Takeaway:** Equal outputs mark points symmetric about the vertex; when the table gives $f(x) + c$, subtract $c$ to get $f(x)$.",
  skills: ["function-transformations"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  question: "Data set A: $6, 8, 10, 12, 14$\nData set B: $18, 24, 30, 36, 42$\nThe lists give the values in data sets A and B. Which statement best compares the standard deviations of the two data sets?",
  choices: [
    { id: "A", text: "The standard deviation of data set A is less than the standard deviation of data set B." },
    // distractor: sees that both lists have five evenly spaced values and assumes the spreads are the same, ignoring that B's values are 6 apart instead of 2
    { id: "B", text: "The standard deviation of data set A is equal to the standard deviation of data set B." },
    // distractor: reverses the comparison
    { id: "C", text: "The standard deviation of data set A is greater than the standard deviation of data set B." },
    // distractor: thinks a standard deviation must be calculated exactly before two data sets can be compared
    { id: "D", text: "There is not enough information to compare the standard deviations." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Scaling a Data Set by a Constant**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Each value in data set B is $3$ times the matching value in data set A, so B's values are spread $3$ times as far from their mean; B has the greater standard deviation.\n\n**The Full Solution:**\nStep 1: Find each mean. Data set A is centered at $10$, and data set B is centered at $30$.\nStep 2: Compare distances from the mean. In A the values are $4$, $2$, $0$, $2$, and $4$ away from $10$; in B they are $12$, $6$, $0$, $6$, and $12$ away from $30$.\nStep 3: Every distance in B is $3$ times the matching distance in A, so the values in B are more spread out and the standard deviation of A is less than that of B. Check: the range of A is $14 - 6 = 8$ and the range of B is $42 - 18 = 24$, three times as large ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: both lists have five evenly spaced values, so they can look equally spread out, but B's values are $6$ apart while A's are only $2$ apart.\n* Choice C: reverses the comparison; the larger distances from the mean belong to data set B.\n* Choice D: the standard deviation does not need to be computed; comparing the distances from the mean is enough.\n\n**Test Day Takeaway:** Standard deviation measures how far values sit from the mean, so compare the spread of the lists, not the size of the values.",
  skills: ["data-analysis"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "In triangles $ABC$ and $DEF$, angle $A$ is congruent to angle $D$, and angle $B$ is congruent to angle $E$. The lengths of $\\overline{AB}$, $\\overline{BC}$, and $\\overline{DE}$ are $12$, $18$, and $30$, respectively. What is the length of $\\overline{EF}$?",
  correctAnswer: "45",
  explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**The correct answer is 45.**\n\n**The Fast Way (~25s):** Two pairs of congruent angles make the triangles similar, and $DE$ is $\\frac{30}{12} = 2.5$ times $AB$, so $EF = 2.5(18) = 45$.\n\n**The Full Solution:**\nStep 1: Angle $A$ is congruent to angle $D$ and angle $B$ is congruent to angle $E$, so triangle $ABC$ is similar to triangle $DEF$, with $A \\to D$, $B \\to E$, and $C \\to F$. That pairs $\\overline{AB}$ with $\\overline{DE}$ and $\\overline{BC}$ with $\\overline{EF}$.\nStep 2: Corresponding sides are proportional: $\\frac{DE}{AB} = \\frac{EF}{BC}$, so $\\frac{30}{12} = \\frac{EF}{18}$.\nStep 3: Solve: $EF = \\frac{30 \\cdot 18}{12} = \\frac{540}{12} = 45$. Check: $\\frac{12}{30} = 0.4$ and $\\frac{18}{45} = 0.4$, so the side ratios match ✓\n\n**Common Mistakes:**\n* $7.2$: inverts one ratio, writing $\\frac{12}{30} = \\frac{EF}{18}$ or $EF = \\frac{12 \\cdot 18}{30}$. Triangle $DEF$ is the larger triangle, so $EF$ must be longer than $18$.\n* $36$: adds instead of scaling, using $EF = 18 + (30 - 12) = 36$. Similar triangles share a ratio, not a difference.\n* $20$: pairs the wrong sides, matching $\\overline{BC}$ with $\\overline{DE}$ to get $\\frac{18}{30} = \\frac{12}{EF}$, so $EF = 20$.\n\n**Test Day Takeaway:** Write the vertex correspondence from the angle statement first, then set up the proportion with corresponding sides in the same order.",
  skills: ["similar-triangles"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$x^{2} + y^{2} - 14x + 8y + 16 = 0$\nThe graph of the given equation in the $xy$-plane is a circle. What is the radius of the circle?",
  choices: [
    // distractor: completes the square for x but forgets to add 16 to the right side for the y-terms, so r^2 = 49 - 16 = 33
    { id: "A", text: "$\\sqrt{33}$" },
    { id: "B", text: "$7$" },
    // distractor: moves the constant 16 to the right side as +16 instead of -16, so r^2 = 49 + 16 + 16 = 81
    { id: "C", text: "$9$" },
    // distractor: finds r^2 = 49 and reports it as the radius without taking the square root
    { id: "D", text: "$49$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Half of $-14$ is $-7$ and half of $8$ is $4$, so $r^{2} = (-7)^{2} + 4^{2} - 16 = 49$ and $r = 7$.\n\n**The Full Solution:**\nStep 1: Group the $x$-terms and the $y$-terms and move the constant: $(x^{2} - 14x) + (y^{2} + 8y) = -16$.\nStep 2: Complete each square by adding $49$ and $16$ to both sides: $(x^{2} - 14x + 49) + (y^{2} + 8y + 16) = -16 + 49 + 16$, which is $(x - 7)^{2} + (y + 4)^{2} = 49$.\nStep 3: The right side is $r^{2}$, so $r = \\sqrt{49} = 7$. Check: the point $(14, -4)$ is $7$ units from the center $(7, -4)$, and $14^{2} + (-4)^{2} - 14(14) + 8(-4) + 16 = 196 + 16 - 196 - 32 + 16 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\sqrt{33}$): adds $49$ for the $x$-terms but nothing for the $y$-terms, so the right side becomes $-16 + 49 = 33$.\n* Choice C ($9$): moves the $16$ to the right side without changing its sign, getting $16 + 49 + 16 = 81$.\n* Choice D ($49$): this is $r^{2}$. The radius is its square root.\n\n**Test Day Takeaway:** To read a circle written in expanded form, complete the square in $x$ and in $y$, add the same amounts to the right side, and take the square root of what remains.",
  skills: ["circle-equation"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Water flows into a tank at a constant rate of $45$ milliliters per minute. How many hours will it take for $32.4$ liters of water to flow into the tank?",
  choices: [
    // distractor: divides by 60 twice, converting minutes to hours a second time
    { id: "A", text: "$0.2$" },
    // distractor: uses 1 liter = 100 milliliters, so 3,240 milliliters instead of 32,400
    { id: "B", text: "$1.2$" },
    { id: "C", text: "$12$" },
    // distractor: stops at 720 minutes and reports the minutes as hours
    { id: "D", text: "$720$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $32.4$ liters is $32{,}400$ milliliters, and $\\frac{32{,}400}{45} = 720$ minutes, which is $\\frac{720}{60} = 12$ hours.\n\n**The Full Solution:**\nStep 1: Put the amount and the rate in the same unit: $32.4$ liters $= 32.4(1{,}000) = 32{,}400$ milliliters.\nStep 2: Divide by the rate to get the time in minutes: $\\frac{32{,}400}{45} = 720$ minutes.\nStep 3: Convert to hours: $\\frac{720}{60} = 12$ hours. Check: $45$ milliliters per minute is $45(60) = 2{,}700$ milliliters per hour, and $2{,}700(12) = 32{,}400$ milliliters, or $32.4$ liters ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.2$): divides $720$ by $3{,}600$, converting from minutes to hours twice.\n* Choice B ($1.2$): uses $1$ liter $= 100$ milliliters, which makes the amount $3{,}240$ milliliters, ten times too small.\n* Choice D ($720$): this is the time in minutes. The question asks for hours.\n\n**Test Day Takeaway:** Before dividing an amount by a rate, write both in the same unit; then convert the answer to the unit the question asks for.",
  skills: ["unit-conversion"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table shows the cost of electricity for a household in each of four months. What was the percent decrease in the cost of electricity from March to June?",
  questionTable: { headers: ["Month", "Cost (dollars)"], rows: [["March", "184"], ["April", "161"], ["May", "150"], ["June", "138"]] },
  choices: [
    // distractor: measures the decrease from April instead of March: 23/161
    { id: "A", text: "$14.3\\%$" },
    { id: "B", text: "$25\\%$" },
    // distractor: divides the 46-dollar drop by the new cost 138 instead of the original 184
    { id: "C", text: "$33.3\\%$" },
    // distractor: reports the ratio 138/184 of the new cost to the old, not the percent decrease
    { id: "D", text: "$75\\%$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The cost dropped $184 - 138 = 46$ dollars from an original $184$, and $\\frac{46}{184} = \\frac{1}{4}$, so the decrease is $25\\%$.\n\n**The Full Solution:**\nStep 1: Read the two months the question names: the cost was $184$ dollars in March and $138$ dollars in June.\nStep 2: Find the decrease: $184 - 138 = 46$ dollars.\nStep 3: Divide by the original (March) cost: $\\frac{46}{184} = 0.25 = 25\\%$. Check: a $25\\%$ decrease from $184$ gives $184(0.75) = 138$, the June cost ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($14.3\\%$): starts from April, $\\frac{161 - 138}{161} \\approx 0.143$. The question asks about the change from March.\n* Choice C ($33.3\\%$): divides the drop by the June cost, $\\frac{46}{138} \\approx 0.333$. Percent change is measured against the original value.\n* Choice D ($75\\%$): computes $\\frac{138}{184} = 0.75$, the June cost as a percent of the March cost. The decrease is $100\\% - 75\\% = 25\\%$.\n\n**Test Day Takeaway:** Percent decrease is the amount of decrease divided by the original value; check by multiplying the original by $1$ minus the rate.",
  skills: ["percent-change"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A bag contains $5$ red marbles and $n$ blue marbles. After one red marble is removed, one of the remaining marbles will be selected at random. The probability of selecting a red marble is $\\frac{1}{3}$. What is the value of $n$?",
  choices: [
    { id: "A", text: "$8$" },
    // distractor: ignores the removed marble and solves 5/(5 + n) = 1/3
    { id: "B", text: "$10$" },
    // distractor: removes the marble from the total but not from the red count, solving 5/(4 + n) = 1/3
    { id: "C", text: "$11$" },
    // distractor: reports the number of marbles left in the bag, 4 + n = 12, rather than the number of blue marbles
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Probability Without Replacement**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** After the removal there are $4$ red marbles out of $4 + n$, so $\\frac{4}{4 + n} = \\frac{1}{3}$, which gives $4 + n = 12$ and $n = 8$.\n\n**The Full Solution:**\nStep 1: Removing one red marble leaves $4$ red marbles and $n$ blue marbles, or $4 + n$ marbles in all.\nStep 2: The probability of selecting a red marble is $\\frac{4}{4 + n}$, so $\\frac{4}{4 + n} = \\frac{1}{3}$.\nStep 3: Cross-multiply: $12 = 4 + n$, so $n = 8$. Check: with $4$ red and $8$ blue marbles, the probability of red is $\\frac{4}{12} = \\frac{1}{3}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($10$): ignores the removed marble and solves $\\frac{5}{5 + n} = \\frac{1}{3}$.\n* Choice C ($11$): subtracts the removed marble from the total but still counts $5$ red marbles, solving $\\frac{5}{4 + n} = \\frac{1}{3}$.\n* Choice D ($12$): reports the number of marbles left in the bag, $4 + n$, instead of the number of blue marbles.\n\n**Test Day Takeaway:** When an item is removed before the selection, update both the favorable count and the total before writing the probability.",
  skills: ["probability-basics"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$a(2x + 5) - 3(x - 4) = 7x + b$\nIn the given equation, $a$ and $b$ are constants. If the equation has infinitely many solutions, what is the value of $b$?",
  choices: [
    // distractor: stops after finding a = 5 and reports a instead of b
    { id: "A", text: "$5$" },
    // distractor: distributes -3(x - 4) as -3x - 12, so the constant becomes 25 - 12 = 13
    { id: "B", text: "$13$" },
    { id: "C", text: "$37$" },
    // distractor: reports a + b = 5 + 37 instead of b alone
    { id: "D", text: "$42$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** The left side expands to $(2a - 3)x + (5a + 12)$, so $2a - 3 = 7$ gives $a = 5$, and then $b = 5(5) + 12 = 37$.\n\n**The Full Solution:**\nStep 1: Expand the left side: $a(2x + 5) - 3(x - 4) = 2ax + 5a - 3x + 12$, which groups as $(2a - 3)x + (5a + 12)$.\nStep 2: An equation of this form has infinitely many solutions only when both sides are the same expression, so the $x$-coefficients match, $2a - 3 = 7$, giving $a = 5$.\nStep 3: The constants must also match: $b = 5a + 12 = 5(5) + 12 = 37$. Check with $x = 0$: the left side is $5(5) - 3(-4) = 25 + 12 = 37$ and the right side is $7(0) + 37 = 37$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): this is the value of $a$, an intermediate result. The question asks for $b$.\n* Choice B ($13$): distributes $-3(x - 4)$ as $-3x - 12$. The product of $-3$ and $-4$ is $+12$.\n* Choice D ($42$): adds the two constants, $5 + 37$, instead of reporting $b$ alone.\n\n**Test Day Takeaway:** A linear equation has infinitely many solutions when both sides are identical; expand, then match the $x$-coefficients and the constants separately.",
  skills: ["distributive-property"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Renting a bike costs \\$36 plus \\$12 for each hour the bike is rented. Mia paid \\$228 to rent a bike. For how many hours did Mia rent the bike?",
  choices: [
    // distractor: swaps the roles of the fixed charge and the hourly rate, computing (228 - 12)/36
    { id: "A", text: "$6$" },
    { id: "B", text: "$16$" },
    // distractor: ignores the 36-dollar fixed charge and divides 228 by 12
    { id: "C", text: "$19$" },
    // distractor: adds the fixed charge instead of subtracting it, computing (228 + 36)/12
    { id: "D", text: "$22$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Word-to-Expression Translation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Remove the fixed charge first: $228 - 36 = 192$, and $\\frac{192}{12} = 16$ hours.\n\n**The Full Solution:**\nStep 1: Let $h$ be the number of hours. The total cost is the fixed charge plus $12$ dollars per hour: $36 + 12h = 228$.\nStep 2: Subtract the fixed charge from both sides: $12h = 192$.\nStep 3: Divide by $12$: $h = 16$. Check: $36 + 12(16) = 36 + 192 = 228$ dollars ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): uses $12$ as the fixed charge and $36$ as the hourly rate, computing $\\frac{228 - 12}{36} = 6$.\n* Choice C ($19$): divides the whole total by the hourly rate, $\\frac{228}{12} = 19$, as if there were no fixed charge.\n* Choice D ($22$): adds the fixed charge, $\\frac{228 + 36}{12} = 22$. The fixed charge is part of the $228$ dollars, so it must be subtracted.\n\n**Test Day Takeaway:** For a fixed charge plus a per-unit rate, subtract the fixed charge from the total before dividing by the rate.",
  skills: ["word-problem-to-equation"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A school sold $520$ tickets to a play. Each student ticket cost \\$6, each adult ticket cost \\$9, and the total from all ticket sales was \\$3,780. How many adult tickets did the school sell?",
  correctAnswer: "220",
  explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**The correct answer is 220.**\n\n**The Fast Way (~35s):** If all $520$ tickets were student tickets, the total would be $6(520) = 3{,}120$ dollars; each adult ticket adds $3$ more, and $\\frac{3{,}780 - 3{,}120}{3} = 220$.\n\n**The Full Solution:**\nStep 1: Let $s$ be the number of student tickets and $a$ the number of adult tickets. Then $s + a = 520$ and $6s + 9a = 3{,}780$.\nStep 2: Multiply the first equation by $6$, $6s + 6a = 3{,}120$, and subtract it from the second: $3a = 660$.\nStep 3: Divide by $3$: $a = 220$, so $s = 520 - 220 = 300$. Check: $6(300) + 9(220) = 1{,}800 + 1{,}980 = 3{,}780$ dollars ✓\n\n**Common Mistakes:**\n* $300$: solves the system correctly but reports the number of student tickets, or swaps the two prices. The question asks for adult tickets.\n* $420$: divides the total by the adult price, $\\frac{3{,}780}{9} = 420$, as if every ticket were an adult ticket; that ignores the $520$-ticket total.\n* $630$: divides the total by the student price, $\\frac{3{,}780}{6} = 630$, which is more tickets than the school sold.\n\n**Test Day Takeaway:** Write one equation for the count and one for the money; eliminating the variable you do not want leaves the one the question asks for.",
  skills: ["word-problem-to-equation", "setting-up-systems"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table shows four values of $x$ and their corresponding values of $f(x)$. The function $h$ is defined by $h(x) = f(x - c)$, where $c$ is a constant. If $h(9) = 12$, what is the value of $c$?",
  questionTable: { headers: ["$x$", "$f(x)$"], rows: [["1", "12"], ["4", "3"], ["7", "9"], ["10", "5"]] },
  choices: [
    // distractor: shifts the wrong way, solving 9 + c = 1
    { id: "A", text: "$-8$" },
    // distractor: sets the input 9 - c equal to the output 12 rather than to the input 1
    { id: "B", text: "$-3$" },
    // distractor: matches the output 9 in the table instead of the output 12, solving 9 - c = 7
    { id: "C", text: "$2$" },
    { id: "D", text: "$8$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** $h(9) = f(9 - c)$, and the only input with output $12$ is $x = 1$, so $9 - c = 1$ and $c = 8$.\n\n**The Full Solution:**\nStep 1: By the definition of $h$, $h(9) = f(9 - c)$, so $f(9 - c) = 12$.\nStep 2: In the table, the only value of $x$ with $f(x) = 12$ is $x = 1$, so the input $9 - c$ must equal $1$.\nStep 3: Solve $9 - c = 1$: $c = 8$. Check: $h(9) = f(9 - 8) = f(1) = 12$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): solves $9 + c = 1$, adding $c$ to the input instead of subtracting it.\n* Choice B ($-3$): solves $9 - c = 12$, setting the input equal to the output. The $12$ is a value of $f$, so it identifies the input $1$.\n* Choice C ($2$): solves $9 - c = 7$, using the row whose output is $9$; the $9$ in $h(9)$ is an input, and the required output is $12$.\n\n**Test Day Takeaway:** For $h(x) = f(x - c)$, an output of $h$ at one input is an output of $f$ at a shifted input; find that input in the table, then solve for the shift.",
  skills: ["function-transformations", "vertex-form"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$3x^{2} + kx + 12 = 0$\nIn the given equation, $k$ is a positive integer. If the equation has no real solution, how many possible values of $k$ are there?",
  choices: [
    // distractor: drops the 4 from the discriminant, solving k^2 - 36 < 0 to get k = 1 through 5
    { id: "A", text: "$5$" },
    // distractor: drops the 4 from the discriminant and also allows k^2 - 36 = 0, counting k = 1 through 6
    { id: "B", text: "$6$" },
    { id: "C", text: "$11$" },
    // distractor: allows the discriminant to equal 0 and counts k = 12, which gives exactly one real solution
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** No real solution means $k^{2} - 4(3)(12) < 0$, so $k^{2} < 144$ and $k < 12$; the positive integers $1$ through $11$ work, which is $11$ values.\n\n**The Full Solution:**\nStep 1: A quadratic equation $ax^{2} + bx + c = 0$ has no real solution when its discriminant $b^{2} - 4ac$ is negative. Here $a = 3$, $b = k$, and $c = 12$.\nStep 2: Set up the inequality: $k^{2} - 4(3)(12) < 0$, or $k^{2} < 144$.\nStep 3: Since $k$ is a positive integer, $k < 12$, so $k$ can be $1, 2, 3, \\ldots, 11$, which is $11$ values. Check: $11^{2} - 144 = -23 < 0$, while $12^{2} - 144 = 0$, which gives one real solution ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): forgets the $4$ in the discriminant and solves $k^{2} - 3(12) < 0$, which allows only $k = 1$ through $5$.\n* Choice B ($6$): forgets the $4$ and also lets the discriminant equal $0$, counting $k = 1$ through $6$.\n* Choice D ($12$): counts $k = 12$, but that makes the discriminant exactly $0$, which gives one real solution, not zero.\n\n**Test Day Takeaway:** \"No real solution\" means the discriminant is strictly less than $0$; a discriminant of $0$ still gives one solution.",
  skills: ["discriminant-analysis"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$4x^{2} - 40x + 118 = 4(x - h)^{2} + k$\nIn the given equation, $h$ and $k$ are constants, and the equation is true for all values of $x$. What is the value of $h + k$?",
  choices: [
    // distractor: takes h = -5, reading the sign of the -40x term straight into h
    { id: "A", text: "$13$" },
    // distractor: finds k = 18 correctly but reports k alone instead of h + k
    { id: "B", text: "$18$" },
    { id: "C", text: "$23$" },
    // distractor: subtracts 25 rather than 4(25) = 100, so k comes out as 93
    { id: "D", text: "$98$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Quadratic — Completing the Square**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Factor $4$ out of the $x$-terms: $4(x^{2} - 10x) + 118 = 4(x - 5)^{2} - 100 + 118 = 4(x - 5)^{2} + 18$, so $h + k = 5 + 18 = 23$.\n\n**The Full Solution:**\nStep 1: Factor $4$ from the $x$-terms only: $4x^{2} - 40x + 118 = 4(x^{2} - 10x) + 118$.\nStep 2: Complete the square inside the parentheses: $x^{2} - 10x = (x - 5)^{2} - 25$, so the expression is $4(x - 5)^{2} - 4(25) + 118 = 4(x - 5)^{2} + 18$.\nStep 3: Match the forms: $h = 5$ and $k = 18$, so $h + k = 23$. Check: $4(x - 5)^{2} + 18 = 4x^{2} - 40x + 100 + 18 = 4x^{2} - 40x + 118$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($13$): uses $h = -5$. In $4(x - h)^{2}$, the factor $(x - 5)^{2}$ means $h = 5$, not $-5$.\n* Choice B ($18$): this is $k$ alone. The question asks for $h + k$.\n* Choice D ($98$): subtracts $25$ instead of $4(25) = 100$, getting $k = 93$. The $25$ sits inside parentheses multiplied by $4$.\n\n**Test Day Takeaway:** When the leading coefficient is not $1$, factor it out of the $x$-terms first, and remember that the number you add inside the parentheses is multiplied by that coefficient.",
  skills: ["quadratics"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A right triangle has angles measuring $30^{\\circ}$, $60^{\\circ}$, and $90^{\\circ}$. The side opposite the $60^{\\circ}$ angle has a length of $12\\sqrt{3}$ units. What is the area, in square units, of the triangle?",
  choices: [
    // distractor: treats the given side as the hypotenuse, making the legs 6 root 3 and 18
    { id: "A", text: "$54\\sqrt{3}$" },
    { id: "B", text: "$72\\sqrt{3}$" },
    // distractor: multiplies the two legs but omits the factor of one half
    { id: "C", text: "$144\\sqrt{3}$" },
    // distractor: treats the given side as the side opposite the 30 degree angle, making the other leg 36
    { id: "D", text: "$216\\sqrt{3}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle Area with Surds**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** The side opposite $60^{\\circ}$ is $\\sqrt{3}$ times the side opposite $30^{\\circ}$, so the shorter leg is $12$ and the area is $\\frac{1}{2}(12)(12\\sqrt{3}) = 72\\sqrt{3}$.\n\n**The Full Solution:**\nStep 1: In a $30^{\\circ}$-$60^{\\circ}$-$90^{\\circ}$ triangle the sides are in the ratio $1 : \\sqrt{3} : 2$, opposite the $30^{\\circ}$, $60^{\\circ}$, and $90^{\\circ}$ angles.\nStep 2: The side opposite $60^{\\circ}$ is $12\\sqrt{3}$, so the side opposite $30^{\\circ}$ is $\\frac{12\\sqrt{3}}{\\sqrt{3}} = 12$. These two sides are the legs.\nStep 3: Area $= \\frac{1}{2}(12)(12\\sqrt{3}) = 72\\sqrt{3}$ square units. Check: the hypotenuse is $2(12) = 24$, and $12^{2} + (12\\sqrt{3})^{2} = 144 + 432 = 576 = 24^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($54\\sqrt{3}$): treats $12\\sqrt{3}$ as the hypotenuse, giving legs $6\\sqrt{3}$ and $18$ and area $\\frac{1}{2}(6\\sqrt{3})(18)$. The hypotenuse is opposite the $90^{\\circ}$ angle, not the $60^{\\circ}$ angle.\n* Choice C ($144\\sqrt{3}$): multiplies the legs, $12 \\cdot 12\\sqrt{3}$, and forgets the $\\frac{1}{2}$ in the area formula.\n* Choice D ($216\\sqrt{3}$): treats $12\\sqrt{3}$ as the shorter leg, which makes the other leg $12\\sqrt{3} \\cdot \\sqrt{3} = 36$.\n\n**Test Day Takeaway:** Match each side to the angle it is opposite before using the $1 : \\sqrt{3} : 2$ ratio; in a right triangle the two legs are the base and the height.",
  skills: ["triangle-area"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In right triangle $JKL$, angle $K$ is the right angle and $\\tan J = \\frac{2}{5}$. What is the value of $\\cos L$?",
  choices: [
    { id: "A", text: "$\\frac{2}{\\sqrt{29}}$" },
    // distractor: gives sin L: uses the leg opposite angle L instead of the leg adjacent to it
    { id: "B", text: "$\\frac{5}{\\sqrt{29}}$" },
    // distractor: gives tan L, the ratio of the two legs, rather than a cosine
    { id: "C", text: "$\\frac{5}{2}$" },
    // distractor: inverts the cosine, writing hypotenuse over the adjacent leg
    { id: "D", text: "$\\frac{\\sqrt{29}}{2}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** $\\tan J = \\frac{2}{5}$ makes the legs $2$ and $5$ and the hypotenuse $\\sqrt{29}$; the leg adjacent to angle $L$ is the one opposite angle $J$, so $\\cos L = \\frac{2}{\\sqrt{29}}$.\n\n**The Full Solution:**\nStep 1: The right angle is at $K$, so $\\overline{JL}$ is the hypotenuse. $\\tan J = \\frac{KL}{JK} = \\frac{2}{5}$, so take $KL = 2$ and $JK = 5$.\nStep 2: Find the hypotenuse: $JL = \\sqrt{2^{2} + 5^{2}} = \\sqrt{29}$.\nStep 3: For angle $L$, the adjacent leg is $KL = 2$, so $\\cos L = \\frac{KL}{JL} = \\frac{2}{\\sqrt{29}}$. Check: $\\sin J = \\frac{KL}{JL} = \\frac{2}{\\sqrt{29}}$ too, as it must, since $J$ and $L$ are complementary ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{5}{\\sqrt{29}}$): uses $JK = 5$, the leg opposite angle $L$. That ratio is $\\sin L$.\n* Choice C ($\\frac{5}{2}$): this is $\\tan L$, a ratio of the two legs; a cosine uses the hypotenuse.\n* Choice D ($\\frac{\\sqrt{29}}{2}$): puts the hypotenuse on top. A cosine of an acute angle is less than $1$.\n\n**Test Day Takeaway:** Label the sides from the given ratio, find the hypotenuse, then read the new ratio from the other acute angle's point of view; the sine of one acute angle equals the cosine of the other.",
  skills: ["soh-cah-toa", "pythagorean-theorem"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The table shows three values of $x$ and their corresponding values of $f(x)$, where $f$ is a quadratic function. The equation $f(x) = k$, where $k$ is a constant, has exactly one real solution. What is the value of $k$?",
  questionTable: { headers: ["$x$", "$f(x)$"], rows: [["0", "25"], ["1", "15"], ["5", "15"]] },
  correctAnswer: "7",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**The correct answer is 7.**\n\n**The Fast Way (~45s):** $f(1) = f(5)$ puts the vertex at $x = 3$, and fitting the table gives $f(x) = 2(x - 3)^{2} + 7$, so only $k = 7$ gives one solution.\n\n**The Full Solution:**\nStep 1: The graph of $f$ is a parabola, and $f(1) = f(5) = 15$, so the axis of symmetry is halfway between, at $x = 3$. Write $f(x) = a(x - 3)^{2} + m$.\nStep 2: Use the table: $f(1) = 4a + m = 15$ and $f(0) = 9a + m = 25$. Subtracting gives $5a = 10$, so $a = 2$ and $m = 15 - 8 = 7$.\nStep 3: The equation $f(x) = k$ has exactly one solution only when the horizontal line $y = k$ touches the parabola at its vertex, so $k = 7$. Check: $2x^{2} - 12x + 25 = 7$ becomes $2(x - 3)^{2} = 0$, whose only solution is $x = 3$ ✓\n\n**Common Mistakes:**\n* $15$: uses the repeated table value; $f(x) = 15$ has two solutions, $x = 1$ and $x = 5$.\n* $3$: reports the $x$-coordinate of the vertex instead of the $y$-coordinate.\n* $25$: uses the $y$-intercept $f(0)$; the line $y = 25$ meets the parabola at $x = 0$ and $x = 6$.\n\n**Test Day Takeaway:** Equal outputs in a table of a quadratic locate its axis of symmetry; $f(x) = k$ has exactly one solution only at the vertex value.",
  skills: ["discriminant-analysis"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$6x^{2} + kx - 20$\nIn the given expression, $k$ is a constant. If $2x - 5$ is a factor of the expression, what is the value of $k$?",
  correctAnswer: "-7",
  explanation: "**SAT Pattern: Polynomial Factoring with Given Factor**\n\n**The correct answer is $-7$.**\n\n**The Fast Way (~30s):** Since $2x - 5$ is a factor, the expression equals $0$ when $x = \\frac{5}{2}$: $6\\left(\\frac{25}{4}\\right) + \\frac{5}{2}k - 20 = 0$, so $\\frac{5}{2}k = -\\frac{35}{2}$ and $k = -7$.\n\n**The Full Solution:**\nStep 1: If $2x - 5$ is a factor, the expression is $0$ when $2x - 5 = 0$, that is, when $x = \\frac{5}{2}$.\nStep 2: Substitute: $6\\left(\\frac{5}{2}\\right)^{2} + k\\left(\\frac{5}{2}\\right) - 20 = 0$, or $\\frac{75}{2} + \\frac{5}{2}k - 20 = 0$, which simplifies to $\\frac{5}{2}k = -\\frac{35}{2}$.\nStep 3: Multiply both sides by $\\frac{2}{5}$: $k = -7$. Check: $(2x - 5)(3x + 4) = 6x^{2} + 8x - 15x - 20 = 6x^{2} - 7x - 20$ ✓\n\n**Common Mistakes:**\n* $7$: substitutes $x = -\\frac{5}{2}$, the value that makes $2x + 5$ equal to $0$.\n* $-26$: substitutes $x = 5$, treating $2x - 5$ as if it were $x - 5$.\n* $-\\frac{35}{2}$: reaches $\\frac{5}{2}k = -\\frac{35}{2}$ but reports the right side without dividing by $\\frac{5}{2}$.\n\n**Test Day Takeaway:** If $ax - b$ is a factor of an expression, the expression equals $0$ at $x = \\frac{b}{a}$; substitute that value to find a missing constant.",
  skills: ["finding-roots-factoring"]
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
  question: "The table shows four values of $x$ and their corresponding values of $f(x)$ for the linear function $f$. For what value of $x$ does $f(x) = 52$?",
  diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["0", "100"], ["3", "94"], ["6", "88"], ["9", "82"]] } },
  choices: [
    // distractor: divides the 48-unit drop by 6, the change between consecutive rows (per 3 units of x), getting 8
    { id: "A", text: "$8$" },
    // distractor: measures from the last row only, (82 - 52)/2 = 15, forgetting that row is already at x = 9
    { id: "B", text: "$15$" },
    { id: "C", text: "$24$" },
    // distractor: divides 52 by the rate 2, ignoring the starting value 100, getting 26
    { id: "D", text: "$26$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Solve $f(a) = c$**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Each increase of $3$ in $x$ lowers $f(x)$ by $6$, so $f(x) = 100 - 2x$. Setting $100 - 2x = 52$ gives $x = 24$.\n\n**The Full Solution:**\nStep 1: Find the rate of change from the table: from $x = 0$ to $x = 3$, $f(x)$ drops from $100$ to $94$, so the slope is $\\frac{94 - 100}{3 - 0} = -2$.\nStep 2: The table shows $f(0) = 100$, so the $y$-intercept is $100$ and $f(x) = 100 - 2x$.\nStep 3: Solve $100 - 2x = 52$: $2x = 48$, so $x = 24$. Check: $f(24) = 100 - 2(24) = 52$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): divides the $48$-unit drop by $6$, the change between consecutive rows, which is the change per $3$ units of $x$, not per unit.\n* Choice B ($15$): measures from the last row, $\\frac{82 - 52}{2} = 15$, but forgets that this row already sits at $x = 9$.\n* Choice D ($26$): divides $52$ by the rate $2$ and ignores the starting value of $100$.\n\n**Test Day Takeaway:** Build the function from the table first (slope from two rows, intercept from $x = 0$), then set it equal to the target value and solve.",
  skills: ["function-notation"]
},
{
  id: 2,
  type: "fill-in",
  difficulty: "easy",
  band: 3,
  question: "$3x + 5y = 210$\n$9x + ky = 400$\nIn the given system of equations, $k$ is a constant. If the system has no solution, what is the value of $k$?",
  correctAnswer: "15",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**The correct answer is 15.**\n\n**The Fast Way (~25s):** The $x$-coefficient triples from $3$ to $9$, so for parallel lines the $y$-coefficient must triple too: $k = 3(5) = 15$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has no solution when the coefficients of $x$ and $y$ are in the same ratio but the constants are not.\nStep 2: The ratio of the $x$-coefficients is $\\frac{9}{3} = 3$, so $\\frac{k}{5} = 3$.\nStep 3: Solve: $k = 15$. Check: tripling the first equation gives $9x + 15y = 630$, which has the same left side as $9x + 15y = 400$ but a different constant, so no pair $(x, y)$ satisfies both ✓\n\n**Common Mistakes:**\n* $5$: copies the coefficient of $y$ from the first equation without applying the factor of $3$.\n* $45$: multiplies $5$ by $9$ instead of by the factor $\\frac{9}{3} = 3$.\n* $\\frac{5}{3}$: divides $5$ by $3$, inverting the factor.\n\n**Test Day Takeaway:** No solution means the left sides are proportional and the constants are not. Find the factor from the coefficients you can see, then apply it to the unknown one.",
  skills: ["system-solution-types"]
},
{
  id: 3,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "If $124 - \\frac{4}{3}r = 52$, what is the value of $124 - \\frac{4}{3}(r - 12)$?",
  correctAnswer: "68",
  explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**The correct answer is 68.**\n\n**The Fast Way (~25s):** Replacing $r$ with $r - 12$ adds $\\frac{4}{3}(12) = 16$ to the expression, so the value is $52 + 16 = 68$.\n\n**The Full Solution:**\nStep 1: Solve the first equation: subtract $124$ from each side to get $-\\frac{4}{3}r = -72$, so $r = 54$.\nStep 2: Substitute into the expression: $r - 12 = 42$, so $124 - \\frac{4}{3}(42) = 124 - 56$.\nStep 3: Simplify: $124 - 56 = 68$. Check with the shortcut: $124 - \\frac{4}{3}(r - 12) = \\left(124 - \\frac{4}{3}r\\right) + 16 = 52 + 16 = 68$ ✓\n\n**Common Mistakes:**\n* $36$: finds the change of $16$ but subtracts it, missing that $-\\frac{4}{3}(-12) = +16$.\n* $40$: subtracts $12$ from $52$, as if the expression changed by the same amount as $r$.\n* $54$: stops after solving for $r$ and reports $r$ instead of the value of the expression.\n\n**Test Day Takeaway:** When an expression differs from a given one by a shift in the variable, distribute and compare: the difference is the coefficient times the shift, and solving for the variable is optional.",
  skills: ["combining-like-terms"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$x^{2} + y^{2} - 10x + 24y + 120 = 0$\nThe graph of the given equation in the $xy$-plane is a circle. Which of the following gives the center and the radius of the circle?",
  choices: [
    { id: "A", text: "Center $(5, -12)$, radius $7$" },
    // distractor: adds the constant 120 instead of subtracting it, getting 25 + 144 + 120 = 289 and radius 17
    { id: "B", text: "Center $(5, -12)$, radius $17$" },
    // distractor: reports r squared, 49, as the radius
    { id: "C", text: "Center $(5, -12)$, radius $49$" },
    // distractor: reads the center off the signs printed in the equation, giving (-5, 12)
    { id: "D", text: "Center $(-5, 12)$, radius $7$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Completing both squares gives $(x - 5)^{2} + (y + 12)^{2} = 25 + 144 - 120 = 49$, so the center is $(5, -12)$ and the radius is $7$.\n\n**The Full Solution:**\nStep 1: Group the terms: $\\left(x^{2} - 10x\\right) + \\left(y^{2} + 24y\\right) = -120$.\nStep 2: Complete each square by adding $25$ and $144$ to both sides: $(x - 5)^{2} + (y + 12)^{2} = -120 + 25 + 144 = 49$.\nStep 3: In $(x - h)^{2} + (y - k)^{2} = r^{2}$ form, the center is $(5, -12)$ and $r = \\sqrt{49} = 7$. Check: the point $(12, -12)$ is $7$ units right of the center, and $144 + 144 - 120 + 24(-12) + 120 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B (radius $17$): adds $120$ instead of subtracting it, getting $25 + 144 + 120 = 289$.\n* Choice C (radius $49$): completes the squares correctly but reports $r^{2}$ as the radius.\n* Choice D (center $(-5, 12)$): copies the signs of $-10x$ and $+24y$ into the center instead of reversing them.\n\n**Test Day Takeaway:** Move the constant to the right before completing the square, then take the square root of the final right side; the center's coordinates have the opposite signs of the numbers inside the parentheses.",
  skills: ["circle-equation", "completing-square-circles"]
},
{
  id: 5,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Line $p$ in the $xy$-plane passes through the points $(-4, 9)$ and $(6, -3)$. The graph of $kx + 30y = 17$, where $k$ is a constant, is parallel to line $p$. What is the value of $k$?",
  correctAnswer: "36",
  explanation: "**SAT Pattern: Parallel Lines and Standard Form**\n\n**The correct answer is 36.**\n\n**The Fast Way (~35s):** Line $p$ has slope $\\frac{-3 - 9}{6 - (-4)} = -\\frac{6}{5}$, and $kx + 30y = 17$ has slope $-\\frac{k}{30}$. Setting $-\\frac{k}{30} = -\\frac{6}{5}$ gives $k = 36$.\n\n**The Full Solution:**\nStep 1: Slope of line $p$: $\\frac{-3 - 9}{6 - (-4)} = \\frac{-12}{10} = -\\frac{6}{5}$.\nStep 2: Solve $kx + 30y = 17$ for $y$: $y = -\\frac{k}{30}x + \\frac{17}{30}$, so its slope is $-\\frac{k}{30}$.\nStep 3: Parallel lines have equal slopes: $-\\frac{k}{30} = -\\frac{6}{5}$, so $k = 36$. Check: $36x + 30y = 17$ has slope $-\\frac{36}{30} = -\\frac{6}{5}$, and $(-4, 9)$ gives $-144 + 270 = 126 \\ne 17$, so the lines are parallel, not the same line ✓\n\n**Common Mistakes:**\n* $-36$: drops the negative sign when solving for $y$ and matches $\\frac{k}{30}$ to $-\\frac{6}{5}$.\n* $25$: inverts the slope to $-\\frac{5}{6}$ by dividing the run by the rise, then solves $\\frac{k}{30} = \\frac{5}{6}$.\n* $6$: multiplies the slope $\\frac{6}{5}$ by $5$ rather than by the coefficient $30$ on $y$.\n\n**Test Day Takeaway:** For $Ax + By = C$ the slope is $-\\frac{A}{B}$. Find the slope from the two points, match it, and confirm the given points are not on the second line so the lines are parallel rather than identical.",
  skills: ["writing-parallel-equation"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "medium",
  band: 4,
  question: "The table shows the number of birds of each of three species counted at a wetland in $2026$ and the percent change in that number from $2021$ to $2026$. How many herons were counted at the wetland in $2021$?",
  diagram: { type: "dataTable", params: { headers: ["Species", "2026 count", "Change from 2021 to 2026"], rows: [["Mallard", "900", "25% increase"], ["Heron", "432", "28% decrease"], ["Canada goose", "286", "45% decrease"]] } },
  correctAnswer: "600",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**The correct answer is 600.**\n\n**The Fast Way (~25s):** A $28\\%$ decrease leaves $72\\%$, so the $2021$ count is $\\frac{432}{0.72} = 600$.\n\n**The Full Solution:**\nStep 1: Let $s$ be the $2021$ count of herons. A $28\\%$ decrease means the $2026$ count is $s - 0.28s = 0.72s$.\nStep 2: The table shows $432$ herons in $2026$, so $0.72s = 432$.\nStep 3: Divide: $s = \\frac{432}{0.72} = 600$. Check: $28\\%$ of $600$ is $168$, and $600 - 168 = 432$ ✓\n\n**Common Mistakes:**\n* $311.04$: applies the decrease to $432$, computing $432(0.72)$, which runs the change forward instead of backward.\n* $552.96$: adds $28\\%$ to $432$, computing $432(1.28)$; the $28\\%$ was a percent of the larger $2021$ count, not of $432$.\n* $1{,}542.86$: divides by $0.28$, the part that was lost, instead of by the $0.72$ that remains.\n\n**Test Day Takeaway:** To reverse a percent change, divide by the multiplier that produced it; a $28\\%$ decrease is the multiplier $0.72$.",
  skills: ["percent-word-problems", "percent-of-value"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$f(x) = -0.75x^{2} + 6x + c$\nIn the given function, $c$ is a constant. The maximum value of $f(x)$ is $79$. What is the value of $c$?",
  choices: [
    // distractor: reports -0.75(4)^2 + 6(4) = 12, the non-constant part at the vertex, instead of solving 12 + c = 79
    { id: "A", text: "$12$" },
    { id: "B", text: "$67$" },
    // distractor: treats the constant term as the maximum value, which holds only if the vertex is on the y-axis
    { id: "C", text: "$79$" },
    // distractor: adds 12 to 79 instead of subtracting it
    { id: "D", text: "$91$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The maximum occurs at $x = -\\frac{6}{2(-0.75)} = 4$, where $f(4) = -12 + 24 + c = 12 + c$. Setting $12 + c = 79$ gives $c = 67$.\n\n**The Full Solution:**\nStep 1: The parabola opens downward, so its maximum is at the vertex, $x = -\\frac{b}{2a} = -\\frac{6}{2(-0.75)} = 4$.\nStep 2: Evaluate at the vertex: $f(4) = -0.75(16) + 6(4) + c = -12 + 24 + c = 12 + c$.\nStep 3: Set the maximum equal to $79$: $12 + c = 79$, so $c = 67$. Check: $f(x) = -0.75(x - 4)^{2} + 79$ expands to $-0.75x^{2} + 6x - 12 + 79 = -0.75x^{2} + 6x + 67$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): reports the value of $-0.75x^{2} + 6x$ at the vertex instead of solving $12 + c = 79$.\n* Choice C ($79$): treats the constant term as the maximum, which is true only when the vertex is on the $y$-axis.\n* Choice D ($91$): adds $12$ to $79$ instead of subtracting it.\n\n**Test Day Takeaway:** The constant term is the $y$-intercept, not the maximum. Locate the vertex with $-\\frac{b}{2a}$, evaluate there, and set that value equal to the given maximum.",
  skills: ["converting-quadratic-forms"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$\\frac{12x^{2} + kx - 35}{2x + 5} = ax + b$\nThe given equation is true for all $x > 0$, where $a$, $b$, and $k$ are constants. What is the value of $k$?",
  choices: [
    // distractor: computes 2(-7) - 5(6) = -44, subtracting the outer product instead of adding it
    { id: "A", text: "$-44$" },
    // distractor: factors as (2x - 5)(6x + 7), flipping both signs inside the factors, which gives 14 - 30 = -16
    { id: "B", text: "$-16$" },
    // distractor: keeps only the product 2(-7) = -14 and drops the 5(6) term
    { id: "C", text: "$-14$" },
    { id: "D", text: "$16$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** The numerator must equal $(2x + 5)(ax + b)$, so $a = 6$ and $b = -7$ from the first and last terms. The middle term is $2(-7)x + 5(6)x = 16x$, so $k = 16$.\n\n**The Full Solution:**\nStep 1: Multiply both sides by $2x + 5$: $12x^{2} + kx - 35 = (2x + 5)(ax + b)$ for all $x > 0$, so the two polynomials have equal coefficients.\nStep 2: Match the outer terms: $2a = 12$, so $a = 6$, and $5b = -35$, so $b = -7$.\nStep 3: Expand: $(2x + 5)(6x - 7) = 12x^{2} - 14x + 30x - 35 = 12x^{2} + 16x - 35$, so $k = 16$. Check at $x = 1$: $\\frac{12 + 16 - 35}{7} = -1$, and $6(1) - 7 = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-44$): subtracts the product $5(6)$ from $2(-7)$ instead of adding it.\n* Choice B ($-16$): uses the factors $(2x - 5)(6x + 7)$, flipping both signs, which gives $14 - 30 = -16$.\n* Choice C ($-14$): keeps only the product $2(-7)$ and drops the $5(6)$ term.\n\n**Test Day Takeaway:** If a quotient is a polynomial, the denominator is a factor of the numerator. Match the leading and constant terms first, then the middle coefficient follows from expanding.",
  skills: ["simplifying-rational-expressions", "difference-of-squares"]
},
{
  id: 9,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$y = 2x^{2} - 12x + c$\n$y = 4x - 19$\nIn the given system of equations, $c$ is a constant. The graphs of the equations in the $xy$-plane intersect at exactly one point. What is the value of $c$?",
  correctAnswer: "13",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is 13.**\n\n**The Fast Way (~40s):** Setting the right sides equal gives $2x^{2} - 16x + (c + 19) = 0$. One intersection point means $(-16)^{2} - 4(2)(c + 19) = 0$, so $c + 19 = 32$ and $c = 13$.\n\n**The Full Solution:**\nStep 1: Substitute $4x - 19$ for $y$: $2x^{2} - 12x + c = 4x - 19$, which becomes $2x^{2} - 16x + (c + 19) = 0$.\nStep 2: The graphs intersect at exactly one point when this quadratic has exactly one real root, so its discriminant is $0$: $256 - 8(c + 19) = 0$.\nStep 3: Solve: $c + 19 = 32$, so $c = 13$. Check: $2x^{2} - 16x + 32 = 2(x - 4)^{2}$, which has the single root $x = 4$, and both equations give $y = -3$ there ✓\n\n**Common Mistakes:**\n* $-1$: never moves $4x$ to the left, so it uses $-12$ as the middle coefficient and solves $144 = 8(c + 19)$.\n* $45$: divides $256$ by $4$ rather than by $4a = 8$, getting $c + 19 = 64$.\n* $51$: reaches $c + 19 = 32$ but adds $19$ instead of subtracting it.\n\n**Test Day Takeaway:** One intersection means one solution: combine the equations into a single quadratic first, then set $b^{2} - 4ac = 0$ using the combined coefficients.",
  skills: ["tangent-lines", "discriminant-analysis"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Each of the $n$ animals at a shelter is a dog, a cat, or a rabbit. The ratio of dogs to cats is $3$ to $2$, and the ratio of cats to rabbits is $8$ to $5$. Which expression represents how many more dogs than rabbits are at the shelter?",
  choices: [
    // distractor: uses the unscaled parts 3, 2, and 5 out of a total of 10, giving a difference of 2n/10 = n/5
    { id: "A", text: "$\\frac{n}{5}$" },
    { id: "B", text: "$\\frac{7n}{25}$" },
    // distractor: divides the 7-part difference by 12 + 5 = 17, the two named groups, instead of the 25-part total
    { id: "C", text: "$\\frac{7n}{17}$" },
    // distractor: reports the number of dogs, 12n/25, rather than the difference
    { id: "D", text: "$\\frac{12n}{25}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Scaling $3:2$ to $12:8$ links the ratios as dogs : cats : rabbits $= 12:8:5$, a total of $25$ parts. Dogs exceed rabbits by $12 - 5 = 7$ parts, or $\\frac{7n}{25}$.\n\n**The Full Solution:**\nStep 1: Make the cats' parts match: $3:2 = 12:8$, so dogs : cats : rabbits $= 12:8:5$.\nStep 2: The total is $12 + 8 + 5 = 25$ parts, so there are $\\frac{12n}{25}$ dogs and $\\frac{5n}{25}$ rabbits.\nStep 3: The difference is $\\frac{12n}{25} - \\frac{5n}{25} = \\frac{7n}{25}$. Check with $n = 50$: $24$ dogs, $16$ cats, and $10$ rabbits, which fit $3:2$ and $8:5$, and $24 - 10 = 14 = \\frac{7(50)}{25}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{n}{5}$): combines the unscaled parts $3$, $2$, and $5$ into a total of $10$, so the difference is $\\frac{2n}{10}$.\n* Choice C ($\\frac{7n}{17}$): divides the $7$-part difference by $12 + 5 = 17$, leaving out the cats.\n* Choice D ($\\frac{12n}{25}$): gives the number of dogs instead of the difference.\n\n**Test Day Takeaway:** Before combining two ratios, rescale so the shared quantity has the same number of parts in both; then every group is a fraction of the total parts.",
  skills: ["word-problem-to-equation"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "easy",
  band: 3,
  question: "The graph of the linear function $f$ is shown, where $y = f(x)$. What is the value of $f(95)$?",
  diagram: { type: "linearGraph", params: { slope: 2, yIntercept: 40, xRange: [0, 90], yRange: [0, 240], xTickInterval: 20, yTickInterval: 40, gridInterval: 20, showPoints: [[60, 160], [80, 200]], label: "y = f(x)" } },
  correctAnswer: "230",
  explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is 230.**\n\n**The Fast Way (~30s):** The points $(60, 160)$ and $(80, 200)$ give a slope of $\\frac{40}{20} = 2$. From $(80, 200)$, $15$ more units of $x$ add $30$, so $f(95) = 230$.\n\n**The Full Solution:**\nStep 1: Read two points on the line: $(60, 160)$ and $(80, 200)$. The slope is $\\frac{200 - 160}{80 - 60} = 2$.\nStep 2: Find the $y$-intercept: $160 = 2(60) + b$, so $b = 40$ and $f(x) = 2x + 40$.\nStep 3: Evaluate: $f(95) = 2(95) + 40 = 230$. Check: $f(80) = 2(80) + 40 = 200$, which matches the graph ✓\n\n**Common Mistakes:**\n* $190$: applies the rate $2$ to the $15$-unit gap but starts from $160$, the value at the first point, instead of $200$.\n* $240$: adds a full $40$, the rise across $20$ units, for a gap of only $15$ units.\n* $270$: pairs $x = 60$ with $f(x) = 200$ when solving for the intercept, getting $b = 80$.\n\n**Test Day Takeaway:** Read two clear points off the line, turn them into a slope, and extend from the nearest point; the graph only needs to supply the rule, not the answer.",
  skills: ["function-evaluation"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$3(x - 8)^{2} + 45$\nThe given expression is equivalent to $3x^{2} + bx + c$, where $b$ and $c$ are constants. What is the value of $b + c$?",
  correctAnswer: "189",
  explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**The correct answer is 189.**\n\n**The Fast Way (~30s):** $3(x^{2} - 16x + 64) + 45 = 3x^{2} - 48x + 237$, so $b + c = -48 + 237 = 189$.\n\n**The Full Solution:**\nStep 1: Expand the square: $(x - 8)^{2} = x^{2} - 16x + 64$.\nStep 2: Distribute the $3$ and add $45$: $3x^{2} - 48x + 192 + 45 = 3x^{2} - 48x + 237$, so $b = -48$ and $c = 237$.\nStep 3: Add: $b + c = -48 + 237 = 189$. Check at $x = 1$: $3(-7)^{2} + 45 = 192$, and $3 - 48 + 237 = 192$ ✓\n\n**Common Mistakes:**\n* $237$: reports the constant $c$ alone and never adds $b$.\n* $-48$: reports the coefficient $b$ alone.\n* $61$: distributes the $3$ to $x^{2}$ and $-16x$ but not to $64$, giving $c = 109$ and $b + c = 61$.\n\n**Test Day Takeaway:** Expand the square before distributing; the outside factor multiplies all three terms, including the constant. Plugging in $x = 1$ gives $3 + b + c$ directly as a check.",
  skills: ["distributive-property", "converting-quadratic-forms"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$4(x - a) + 7x = 3(x + 12)$\nIn the given equation, $a$ is a constant. The solution to the given equation is $x = 5$. What is the value of $a$?",
  choices: [
    // distractor: moves 4a across with the wrong sign, solving 55 + 4a = 51
    { id: "A", text: "$-1$" },
    { id: "B", text: "$1$" },
    // distractor: distributes the 4 only to x, solving 20 - a + 35 = 51
    { id: "C", text: "$4$" },
    // distractor: distributes the 3 only to x, solving 55 - 4a = 15 + 12 = 27
    { id: "D", text: "$7$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Substituting $x = 5$ gives $4(5 - a) + 35 = 51$, so $55 - 4a = 51$ and $a = 1$.\n\n**The Full Solution:**\nStep 1: Substitute $5$ for $x$: $4(5 - a) + 7(5) = 3(5 + 12)$.\nStep 2: Simplify each side: $20 - 4a + 35 = 51$, so $55 - 4a = 51$.\nStep 3: Solve: $4a = 4$, so $a = 1$. Check: $4(x - 1) + 7x = 3x + 36$ gives $11x - 4 = 3x + 36$, so $8x = 40$ and $x = 5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-1$): moves $4a$ across with the wrong sign, solving $55 + 4a = 51$.\n* Choice C ($4$): distributes the $4$ only to $x$, solving $20 - a + 35 = 51$.\n* Choice D ($7$): distributes the $3$ only to $x$, solving $55 - 4a = 15 + 12$.\n\n**Test Day Takeaway:** When the solution is given, substitute it immediately; the equation becomes a one-variable equation in the constant.",
  skills: ["solving-equations"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Each of the $240$ birdhouses in a park is on an oak tree or a pine tree. Of the $150$ birdhouses on oak trees, $102$ are occupied, and $54$ of the birdhouses on pine trees are empty. One of the birdhouses will be selected at random. What is the probability of selecting a birdhouse that is occupied? (Express your answer as a decimal or fraction, not as a percent.)",
  correctAnswer: "0.575",
  explanation: "**SAT Pattern: Marginal Probability**\n\n**The correct answer is $0.575$.**\n\n**The Fast Way (~35s):** There are $240 - 150 = 90$ birdhouses on pine trees, and $90 - 54 = 36$ of them are occupied, so $102 + 36 = 138$ are occupied and the probability is $\\frac{138}{240} = 0.575$.\n\n**The Full Solution:**\nStep 1: Birdhouses on pine trees: $240 - 150 = 90$.\nStep 2: Occupied birdhouses on pine trees: $90 - 54 = 36$, so the number occupied overall is $102 + 36 = 138$.\nStep 3: Probability: $\\frac{138}{240} = \\frac{23}{40} = 0.575$. Check: the empty birdhouses number $48$ on oak trees and $54$ on pine trees, and $138 + 48 + 54 = 240$ ✓\n\n**Common Mistakes:**\n* $0.425$: counts only the $102$ occupied birdhouses on oak trees, $\\frac{102}{240}$, and leaves out the $36$ occupied ones on pine trees.\n* $0.4$: computes $\\frac{36}{90}$, using only the birdhouses on pine trees.\n* $0.68$: computes $\\frac{102}{150}$, using only the birdhouses on oak trees.\n\n**Test Day Takeaway:** A probability for one item chosen from the whole group divides by the whole group; fill in the missing counts first, then add every occupied birdhouse.",
  skills: ["probability-basics"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The function $N(t) = a(1.2)^{t}$, where $a$ is a constant, models the number of fish in a lake $t$ months after a study began. If $N(3) = 8{,}640$, what is the value of $a$?",
  correctAnswer: "5000",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**The correct answer is 5000.**\n\n**The Fast Way (~25s):** $(1.2)^{3} = 1.728$, so $a = \\frac{8{,}640}{1.728} = 5{,}000$.\n\n**The Full Solution:**\nStep 1: Substitute $t = 3$ and $N(3) = 8{,}640$: $8{,}640 = a(1.2)^{3}$.\nStep 2: Evaluate the power: $(1.2)^{3} = 1.728$, so $1.728a = 8{,}640$.\nStep 3: Divide: $a = \\frac{8{,}640}{1.728} = 5{,}000$. Check: $5{,}000(1.2) = 6{,}000$, then $7{,}200$, then $8{,}640$ ✓\n\n**Common Mistakes:**\n* $7{,}200$: divides by $1.2$ once, undoing only one month of growth.\n* $2{,}400$: divides by $1.2 \\cdot 3 = 3.6$ instead of by $(1.2)^{3}$.\n* $14{,}929.92$: multiplies by $1.728$ instead of dividing.\n\n**Test Day Takeaway:** In $a(b)^{t}$, the constant $a$ is the value at $t = 0$; a later value is undone by dividing by $b^{t}$, and the exponent never multiplies the base.",
  skills: ["exponential-growth-decay"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The graph shown models the number of tadpoles $N(w)$, in hundreds, in a pond $w$ weeks after May $1$, where $N(w) = -w^{2} + 14w + 15$. What is the least value of $w$ for which $N(w) = 55$?",
  diagram: { type: "parabola", params: { vertex: { h: 7, k: 64 }, a: -1, xRange: [0, 15], yRange: [0, 70], xTickInterval: 5, yTickInterval: 20, gridInterval: 5, showVertex: false, label: "N(w)" } },
  choices: [
    { id: "A", text: "$4$" },
    // distractor: gives the w-coordinate of the vertex, where the model reaches its greatest value
    { id: "B", text: "$7$" },
    // distractor: gives the greater of the two solutions to N(w) = 55 instead of the lesser
    { id: "C", text: "$10$" },
    // distractor: gives the positive solution to N(w) = 0, where the model reaches 0 tadpoles
    { id: "D", text: "$15$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** $-w^{2} + 14w + 15 = 55$ becomes $w^{2} - 14w + 40 = 0$, or $(w - 4)(w - 10) = 0$; the lesser solution is $4$.\n\n**The Full Solution:**\nStep 1: Set the function equal to $55$: $-w^{2} + 14w + 15 = 55$.\nStep 2: Rearrange: $w^{2} - 14w + 40 = 0$, which factors as $(w - 4)(w - 10) = 0$.\nStep 3: The solutions are $w = 4$ and $w = 10$, so the least value is $4$. Check: $N(4) = -16 + 56 + 15 = 55$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($7$): the vertex of the graph is at $w = 7$, where the model is greatest, $N(7) = 64$, not $55$.\n* Choice C ($10$): $N(10) = 55$ as well, but $10$ is the greater solution.\n* Choice D ($15$): $N(15) = 0$; this is where the graph meets the $x$-axis, not where $N(w) = 55$.\n\n**Test Day Takeaway:** To find when a quadratic model reaches a value, set it equal to that value, move everything to one side, and factor.",
  skills: ["finding-roots-factoring"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A soccer goalkeeper faced $s$ shots during a season. She saved $80\\%$ of these shots, and each of the other $24$ shots was a goal. What is the value of $s$?",
  choices: [
    // distractor: inverts the ratio of saves to goals, computing 24 times 20/80 = 6
    { id: "A", text: "$6$" },
    // distractor: divides by 0.80, the save rate, instead of by the 0.20 that were goals
    { id: "B", text: "$30$" },
    // distractor: finds the number of shots saved, 24 times 80/20 = 96, rather than the total faced
    { id: "C", text: "$96$" },
    { id: "D", text: "$120$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Percent Complement**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The $24$ goals are the other $20\\%$ of the shots, so the total is $\\frac{24}{0.20} = 120$.\n\n**The Full Solution:**\nStep 1: Every shot was either saved or a goal, so goals make up $100\\% - 80\\% = 20\\%$ of the shots she faced.\nStep 2: So $20\\%$ of the $s$ shots equals $24$: $0.20s = 24$.\nStep 3: Divide: $s = \\frac{24}{0.20} = 120$. Check: $80\\%$ of $120$ is $96$ saves, and $120 - 96 = 24$ goals ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): computes $24 \\cdot \\frac{20}{80} = 6$, scaling down instead of up.\n* Choice B ($30$): divides $24$ by $0.80$, matching the goals to the save percent instead of the $20\\%$ they represent.\n* Choice C ($96$): computes $24 \\cdot \\frac{80}{20} = 96$, the number of saves, and stops before adding the $24$ goals.\n\n**Test Day Takeaway:** When a count belongs to the part not described by the given percent, switch to the complementary percent first, then divide.",
  skills: ["percent-of-value"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$\\frac{1}{3}x + \\frac{1}{8}y = 12$\nIn the $xy$-plane, line $n$ is perpendicular to the graph of the given equation. What is the slope of line $n$?",
  correctAnswer: "3/8",
  explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $\\frac{3}{8}$.**\n\n**The Fast Way (~25s):** Multiply by $24$: $8x + 3y = 288$, so the given line has slope $-\\frac{8}{3}$ and line $n$ has slope $\\frac{3}{8}$.\n\n**The Full Solution:**\nStep 1: Clear the fractions by multiplying each side by $24$: $8x + 3y = 288$.\nStep 2: Solve for $y$: $y = -\\frac{8}{3}x + 96$, so the given line has slope $-\\frac{8}{3}$.\nStep 3: Slopes of perpendicular lines multiply to $-1$, so the slope of line $n$ is $\\frac{3}{8}$. Check: $\\left(-\\frac{8}{3}\\right)\\left(\\frac{3}{8}\\right) = -1$ ✓\n\n**Common Mistakes:**\n* $-\\frac{8}{3}$: gives the slope of the given line instead of the perpendicular slope.\n* $-\\frac{3}{8}$: takes the reciprocal of $-\\frac{8}{3}$ but keeps the negative sign.\n* $\\frac{8}{3}$: changes the sign of the given line's slope but does not take the reciprocal.\n\n**Test Day Takeaway:** For $Ax + By = C$ the slope is $-\\frac{A}{B}$, even when $A$ and $B$ are fractions; then flip and change the sign for a perpendicular line.",
  skills: ["perpendicular-negative-reciprocal"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The equation $D = 136 - 0.36t$ gives the depth $D$, in centimeters, of the water in a pool $t$ minutes after the pool began draining. What is the best interpretation of $0.36$ in this context?",
  choices: [
    // distractor: confuses the slope with the y-intercept; the starting depth is the constant term, 136 centimeters
    { id: "A", text: "The depth of the water when the pool began draining was $0.36$ centimeters." },
    // distractor: reads the size of the rate correctly but ignores the minus sign in front of 0.36t
    { id: "B", text: "The depth of the water increases by $0.36$ centimeters each minute." },
    { id: "C", text: "The depth of the water decreases by $0.36$ centimeters each minute." },
    // distractor: treats 0.36 as a time; it multiplies t, so it is a change in depth per minute, not a number of minutes
    { id: "D", text: "The pool drains completely in $0.36$ minutes." }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** $0.36$ is the coefficient of $t$ with a minus sign in front, so each added minute lowers $D$ by $0.36$ centimeters.\n\n**The Full Solution:**\nStep 1: The equation has the form $D = 136 + (-0.36)t$, a linear function of $t$ with slope $-0.36$ and $D$-intercept $136$.\nStep 2: The slope is the change in $D$ for each increase of $1$ in $t$. Here $D$ is in centimeters and $t$ is in minutes, so the depth changes by $-0.36$ centimeters per minute.\nStep 3: A change of $-0.36$ is a decrease, so the depth of the water decreases by $0.36$ centimeters each minute. Check: at $t = 0$, $D = 136$, and at $t = 1$, $D = 136 - 0.36 = 135.64$, which is $0.36$ centimeters less ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: describes the starting depth, which is the constant term $136$, not $0.36$. At $t = 0$ the depth is $136$ centimeters.\n* Choice B: gets the size of the rate right but ignores the minus sign; as $t$ increases, $136 - 0.36t$ gets smaller.\n* Choice D: treats $0.36$ as a time. It multiplies $t$, so it is a change in depth per minute; the pool is empty when $136 - 0.36t = 0$, at about $378$ minutes.\n\n**Test Day Takeaway:** In a linear model, the coefficient of the input variable is the change in the output per one unit of input, and its sign tells you increase or decrease; the constant term is the starting value.",
  skills: ["slope-intercept-form"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$\\sqrt[3]{x^{7}} \\cdot \\sqrt{x^{5}} \\cdot x^{-2}$\nFor $x > 0$, the given expression is equivalent to $\\sqrt[6]{x^{n}}$, where $n$ is a constant. What is the value of $n$?",
  choices: [
    { id: "A", text: "$17$" },
    // distractor: multiplies the fractional exponents, 7/3 times 5/2 = 35/6, then subtracts 2 to get 23/6
    { id: "B", text: "$23$" },
    // distractor: adds 7/3 and 5/2 correctly but drops the x^-2 factor, leaving 29/6
    { id: "C", text: "$29$" },
    // distractor: treats x^-2 as x^2 and adds it, giving 29/6 + 2 = 41/6
    { id: "D", text: "$41$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Over a denominator of $6$, the exponents are $\\frac{14}{6}$, $\\frac{15}{6}$, and $-\\frac{12}{6}$, which add to $\\frac{17}{6}$, so $n = 17$.\n\n**The Full Solution:**\nStep 1: Rewrite each radical as a power: $\\sqrt[3]{x^{7}} = x^{\\frac{7}{3}}$ and $\\sqrt{x^{5}} = x^{\\frac{5}{2}}$.\nStep 2: Multiplying powers of the same base adds the exponents: $\\frac{7}{3} + \\frac{5}{2} - 2 = \\frac{14}{6} + \\frac{15}{6} - \\frac{12}{6} = \\frac{17}{6}$.\nStep 3: So the expression is $x^{\\frac{17}{6}} = \\sqrt[6]{x^{17}}$ and $n = 17$. Check at $x = 64$: $\\sqrt[3]{64^{7}} = 4^{7}$, $\\sqrt{64^{5}} = 8^{5}$, and $64^{-2} = 2^{-12}$, so the product is $2^{14 + 15 - 12} = 2^{17}$, while $\\sqrt[6]{64^{17}} = 2^{17}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($23$): multiplies $\\frac{7}{3}$ by $\\frac{5}{2}$ instead of adding, then subtracts $2$ to get $\\frac{23}{6}$.\n* Choice C ($29$): adds the two radical exponents correctly but drops the factor $x^{-2}$, stopping at $\\frac{29}{6}$.\n* Choice D ($41$): reads $x^{-2}$ as $x^{2}$ and adds $2$, getting $\\frac{29}{6} + \\frac{12}{6} = \\frac{41}{6}$.\n\n**Test Day Takeaway:** Convert every radical to a fractional exponent, write all the exponents over the index of the target radical, then add.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "In the figure shown, triangle $ABC$ is similar to triangle $DEF$, where side $AB$ corresponds to side $DE$. The area of triangle $DEF$ is $112$ square units greater than the area of triangle $ABC$. What is the area, in square units, of triangle $ABC$?",
  diagram: { type: "similarTriangles", params: { triangle1: { labels: ["A", "B", "C"], sideLabels: ["15", "", ""] }, triangle2: { labels: ["D", "E", "F"], sideLabels: ["25", "", ""] }, figureNote: true } },
  correctAnswer: "63",
  explanation: "**SAT Pattern: Similar Triangles and Area Ratio**\n\n**The correct answer is 63.**\n\n**The Fast Way (~35s):** The sides are in the ratio $15 : 25 = 3 : 5$, so the areas are in the ratio $9 : 25$, a difference of $16$ parts. Each part is $\\frac{112}{16} = 7$, so the area of $ABC$ is $9(7) = 63$.\n\n**The Full Solution:**\nStep 1: The ratio of corresponding sides is $\\frac{AB}{DE} = \\frac{15}{25} = \\frac{3}{5}$, so the ratio of the areas is $\\left(\\frac{3}{5}\\right)^{2} = \\frac{9}{25}$.\nStep 2: Let the areas be $9k$ and $25k$. Then $25k - 9k = 16k = 112$, so $k = 7$.\nStep 3: The area of triangle $ABC$ is $9(7) = 63$. Check: the area of triangle $DEF$ is $25(7) = 175$, $175 - 63 = 112$, and $\\frac{63}{175} = \\frac{9}{25}$ ✓\n\n**Common Mistakes:**\n* $168$: scales the area by the side ratio $\\frac{5}{3}$ instead of its square, solving $\\frac{5}{3}A - A = 112$.\n* $175$: finds both areas correctly but reports the area of triangle $DEF$.\n* $7$: stops at the size of one part, $k$, without multiplying by $9$.\n\n**Test Day Takeaway:** Lengths scale by $r$ and areas by $r^{2}$. Write the areas as parts of the squared ratio, let the given difference fix one part, then build the requested area.",
  skills: ["similar-triangles"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$25^{2x + 1} = 125^{x - c}$\nThe given equation is true when $x = 7$, where $c$ is a constant. What is the value of $c$?",
  choices: [
    // distractor: rewrites only the left side in base 5, solving 4x + 2 = x - c at x = 7
    { id: "A", text: "$-23$" },
    // distractor: equates the printed exponents without rewriting either side in base 5, solving 2x + 1 = x - c
    { id: "B", text: "$-8$" },
    { id: "C", text: "$-3$" },
    // distractor: drops the negative when isolating c in 30 = 21 - 3c
    { id: "D", text: "$3$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** In base $5$ the equation is $5^{4x + 2} = 5^{3x - 3c}$, so $4x + 2 = 3x - 3c$. At $x = 7$, $30 = 21 - 3c$, so $c = -3$.\n\n**The Full Solution:**\nStep 1: Since $25 = 5^{2}$ and $125 = 5^{3}$, the equation becomes $5^{2(2x + 1)} = 5^{3(x - c)}$, or $5^{4x + 2} = 5^{3x - 3c}$.\nStep 2: Equal powers of the same base have equal exponents: $4x + 2 = 3x - 3c$.\nStep 3: Substitute $x = 7$: $30 = 21 - 3c$, so $-3c = 9$ and $c = -3$. Check: $25^{15} = 5^{30}$ and $125^{7 + 3} = 125^{10} = 5^{30}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-23$): rewrites only $25$ in base $5$, solving $4x + 2 = x - c$, which gives $30 = 7 - c$.\n* Choice B ($-8$): sets the printed exponents equal without changing the bases, solving $2x + 1 = x - c$, which gives $15 = 7 - c$.\n* Choice D ($3$): reaches $30 = 21 - 3c$ but loses the negative sign when dividing $9$ by $-3$.\n\n**Test Day Takeaway:** Rewrite both sides with the same base before comparing exponents, and multiply the outer exponent through every term in the parentheses, including the constant.",
  skills: ["exponential-functions"]
}
      ]
    }
  ]
};
