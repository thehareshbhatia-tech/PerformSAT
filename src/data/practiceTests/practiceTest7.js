// Practice Test 7 - SAT Math
// v2 freshness rebuild (2026-09-07): every slot re-patterned and re-authored against the seen-corpus gate — docs/TEST_RECREATION_V2_SPEC.md
// 2 Modules, 22 questions each (44 total)
// Official-calibration recreation (2026-09-01): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md).
// Slot metadata (id/type/difficulty/band/skills/pattern) frozen from the
// prior blueprint: M1 5E/9M/8H, domains 7/6/5/4. M2 3E/7M/12H wavy flow.
// Figure density lifted to official ~20%: M1 carries 4 diagram items,
// M2 carries 4. Numeric MC choices sorted ascending (official convention).

export const practiceTest7 = {
  id: "practice-test-7",
  title: "Practice Test 7",
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
  question: "A theater sold $240$ tickets for a concert for a total of \\$6,240. The table shows the price of each of the two types of tickets sold. How many orchestra tickets were sold?",
  diagram: { type: "dataTable", params: { headers: ["Ticket type", "Price (dollars)"], rows: [["Balcony", "18"], ["Orchestra", "30"]] } },
  choices: [
    // distractor: solves the system correctly but reports the number of balcony tickets instead of orchestra tickets
    { id: "A", text: "$80$" },
    // distractor: splits the 240 tickets evenly between the two types instead of using the total sales
    { id: "B", text: "$120$" },
    { id: "C", text: "$160$" },
    // distractor: divides the full \$6,240 by the \$30 orchestra price, ignoring the balcony sales
    { id: "D", text: "$208$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** If all $240$ tickets were balcony tickets, sales would be $18(240) = 4320$ dollars, and each orchestra ticket adds $30 - 18 = 12$ dollars. Since $6240 - 4320 = 1920$ and $1920 \\div 12 = 160$, the theater sold $160$ orchestra tickets.\n\n**The Full Solution:**\nStep 1: Let $b$ be the number of balcony tickets and $r$ the number of orchestra tickets. The ticket count gives $b + r = 240$, and the prices in the table give $18b + 30r = 6240$.\nStep 2: Substitute $b = 240 - r$ into the second equation: $18(240 - r) + 30r = 6240$, so $4320 + 12r = 6240$ and $12r = 1920$.\nStep 3: Divide by $12$: $r = 160$, so $b = 80$. Check both equations: $80 + 160 = 240$ and $18(80) + 30(160) = 1440 + 4800 = 6240$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($80$): this is $b$, the number of balcony tickets. The system is solved correctly and then the wrong variable is reported.\n* Choice B ($120$): this is half of $240$, which would be right only if the two prices were equal; it never uses the \\$6,240 total.\n* Choice D ($208$): this is $6240 \\div 30$, the number of tickets if every dollar came from orchestra tickets. The balcony tickets also brought in money, so this overcounts.\n\n**Test Day Takeaway:** A total built from two prices gives two equations: one that counts items and one that counts dollars. Write both, solve, and check which variable the question asks for.",
  skills: ["word-problem-to-equation", "setting-up-systems"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A printer starts with $384$ sheets of paper and uses $12$ sheets each minute. After how many minutes will the printer have $156$ sheets left?",
  choices: [
    // distractor: divides the 156 sheets left by 12, treating the sheets left as the sheets used
    { id: "A", text: "$13$" },
    { id: "B", text: "$19$" },
    // distractor: divides 384 by 12, finding when the printer runs out of paper instead of when 156 sheets are left
    { id: "C", text: "$32$" },
    // distractor: adds 384 and 156 instead of subtracting, then divides 540 by 12
    { id: "D", text: "$45$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The printer has to use $384 - 156 = 228$ sheets, and it uses $12$ sheets each minute, so it takes $228 \\div 12 = 19$ minutes.\n\n**The Full Solution:**\nStep 1: After $m$ minutes the printer has $384 - 12m$ sheets left, so the condition is $384 - 12m = 156$.\nStep 2: Subtract $384$ from both sides: $-12m = -228$.\nStep 3: Divide both sides by $-12$: $m = 19$. Check: $384 - 12(19) = 384 - 228 = 156$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($13$): this is $156 \\div 12$, which treats the $156$ sheets left as the number of sheets used. Only the $228$ sheets used are divided by the rate.\n* Choice C ($32$): this is $384 \\div 12$, the number of minutes until the printer has $0$ sheets, not $156$.\n* Choice D ($45$): this is $(384 + 156) \\div 12$. The amount left is subtracted from the starting amount, not added to it.\n\n**Test Day Takeaway:** In a starting amount minus a rate times time, isolate the variable term first. The number you divide by the rate is the amount used, not the amount left.",
  skills: ["combining-like-terms"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$12, 5, 17, 9, 11, 7, 14, 9, 6$\nWhat is the median of the data shown?",
  choices: [
    { id: "A", text: "$9$" },
    // distractor: reports the mean, 90 divided by 9, instead of the median
    { id: "B", text: "$10$" },
    // distractor: takes the middle entry of the list as written without ordering the values first
    { id: "C", text: "$11$" },
    // distractor: reports the range, 17 minus 5
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Median Calculation**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** There are $9$ values, so the median is the $5$th value in order. Sorted, the data are $5, 6, 7, 9, 9, 11, 12, 14, 17$, and the $5$th value is $9$.\n\n**The Full Solution:**\nStep 1: Order the values from least to greatest: $5, 6, 7, 9, 9, 11, 12, 14, 17$.\nStep 2: With an odd number of values, $9$, the median is in position $\\frac{9 + 1}{2} = 5$.\nStep 3: The $5$th ordered value is $9$. Check: four values ($5, 6, 7, 9$) are at or below it and four ($11, 12, 14, 17$) are above it ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($10$): this is the mean, $90 \\div 9$. The mean and the median are different measures of center.\n* Choice C ($11$): this is the $5$th number in the list as printed. The median is the middle of the ordered list, so the values must be sorted first.\n* Choice D ($12$): this is the range, $17 - 5$, which measures spread rather than center.\n\n**Test Day Takeaway:** Sort first, then count to the middle. For an odd number $n$ of values, the median is the $\\frac{n+1}{2}$th ordered value, never the middle entry of the list as printed.",
  skills: ["find-median"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$6(x - 4) = 2x + 8$\nWhat is the solution to the given equation?",
  choices: [
    // distractor: multiplies only the x by 6, solving 6x - 4 = 2x + 8
    { id: "A", text: "$3$" },
    // distractor: adds 2x to the left side instead of subtracting it, solving 8x - 24 = 8
    { id: "B", text: "$4$" },
    { id: "C", text: "$8$" },
    // distractor: divides 32 by 2 instead of by the coefficient 4 left after combining like terms
    { id: "D", text: "$16$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Distributing gives $6x - 24 = 2x + 8$, so $4x = 32$ and $x = 8$.\n\n**The Full Solution:**\nStep 1: Distribute the $6$ on the left side: $6x - 24 = 2x + 8$.\nStep 2: Subtract $2x$ from both sides and add $24$ to both sides: $4x = 32$.\nStep 3: Divide both sides by $4$: $x = 8$. Check: $6(8 - 4) = 24$ and $2(8) + 8 = 24$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): this comes from $6x - 4 = 2x + 8$, where the $6$ multiplied only the $x$. A factor outside parentheses multiplies every term inside, so the constant is $-24$.\n* Choice B ($4$): this comes from $8x - 24 = 8$, adding $2x$ to the left side instead of subtracting it.\n* Choice D ($16$): this divides $32$ by $2$. After like terms are combined, the coefficient of $x$ is $6 - 2 = 4$.\n\n**Test Day Takeaway:** Distribute before you collect terms, and divide by the coefficient that is left after combining, not by a coefficient from the original equation.",
  skills: ["solving-equations"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Ava has saved \\$26. She plans to save \\$18 each week from now on. What is the least number of weeks it will take Ava to have saved a total of at least \\$200?",
  choices: [
    // distractor: rounds 174 divided by 18, about 9.67, down to 9 instead of up
    { id: "A", text: "$9$" },
    { id: "B", text: "$10$" },
    // distractor: ignores the 26 dollars already saved and rounds 200 divided by 18 up
    { id: "C", text: "$12$" },
    // distractor: adds the 26 dollars to 200 instead of subtracting it, then rounds 226 divided by 18 up
    { id: "D", text: "$13$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Smallest Integer in an Inequality**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Ava still needs $200 - 26 = 174$ dollars, and $174 \\div 18 \\approx 9.67$. Nine weeks is not enough, so she needs $10$ weeks.\n\n**The Full Solution:**\nStep 1: After $w$ weeks Ava has $26 + 18w$ dollars, so the condition is $26 + 18w \\geq 200$.\nStep 2: Subtract $26$ from both sides: $18w \\geq 174$, so $w \\geq \\frac{174}{18} \\approx 9.67$.\nStep 3: The least whole number of weeks that is at least $9.67$ is $10$. Check: after $9$ weeks she has $26 + 162 = 188$ dollars, which is less than $200$; after $10$ weeks she has $26 + 180 = 206$ dollars ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): this rounds $9.67$ down. After $9$ weeks Ava has only \\$188, which does not meet the goal.\n* Choice C ($12$): this is $200 \\div 18 \\approx 11.1$ rounded up, which ignores the \\$26 Ava has already saved.\n* Choice D ($13$): this is $226 \\div 18 \\approx 12.6$ rounded up. The amount already saved is subtracted from the goal, not added to it.\n\n**Test Day Takeaway:** For an 'at least' goal, write the inequality, solve it, and round up to the next whole number. Check the whole number just below your answer to confirm it falls short.",
  skills: ["inequalities"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table shows the amount of water, in liters, in a tank at different times after the tank began to drain. The relationship between time and the amount of water is linear. Which statement is the best interpretation of the slope of the graph of this relationship?",
  diagram: { type: "dataTable", params: { headers: ["Time (minutes)", "Amount of water (liters)"], rows: [["2", "88"], ["4", "76"], ["6", "64"], ["8", "52"]] } },
  choices: [
    // distractor: keeps the size of the slope but drops its negative sign
    { id: "A", text: "The amount of water in the tank increases by $6$ liters each minute." },
    // distractor: uses the 12-liter drop between consecutive rows without dividing by the 2-minute step
    { id: "B", text: "The amount of water in the tank decreases by $12$ liters each minute." },
    // distractor: interprets the intercept, 100 liters at time 0, rather than the slope
    { id: "C", text: "The tank contained $100$ liters of water when it began to drain." },
    { id: "D", text: "The amount of water in the tank decreases by $6$ liters each minute." }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The amount of water falls $12$ liters every $2$ minutes, and $-12 \\div 2 = -6$, so the tank loses $6$ liters each minute.\n\n**The Full Solution:**\nStep 1: Use two rows, $(2, 88)$ and $(4, 76)$. The slope is $\\frac{76 - 88}{4 - 2} = \\frac{-12}{2} = -6$.\nStep 2: The slope's units are liters per minute, and the negative sign means the amount of water decreases as time increases.\nStep 3: Confirm with two other rows: $(6, 64)$ and $(8, 52)$ give $\\frac{52 - 64}{8 - 6} = -6$ as well ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: the size, $6$, is right, but the amount of water is falling, so the slope is negative.\n* Choice B: $12$ is the drop between consecutive rows, which are $2$ minutes apart. A slope is the change in the amount of water divided by the change in time, so $12$ must be divided by $2$.\n* Choice C: this describes the vertical intercept. Working back from $2$ minutes gives $88 + 2(6) = 100$ liters at time $0$, which is true, but the question asks about the slope.\n\n**Test Day Takeaway:** A slope read from a table is the change in the output column divided by the change in the input column. Check the step size in the input column, and carry the sign into the interpretation.",
  skills: ["slope-intercept-form"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "$5x + 3y = 63$\n$2x - 3y = k$\nIn the given system of equations, $k$ is a constant. The solution to the system is $(x, y)$, where $x = 12$. What is the value of $k$?",
  correctAnswer: "21",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**The correct answer is $21$.**\n\n**The Fast Way (~20s):** Adding the equations eliminates $y$: $7x = 63 + k$. With $x = 12$, $84 = 63 + k$, so $k = 21$.\n\n**The Full Solution:**\nStep 1: The $y$-terms are opposites, so adding the equations gives $(5x + 2x) + (3y - 3y) = 63 + k$, or $7x = 63 + k$.\nStep 2: Substitute $x = 12$: $7(12) = 63 + k$, so $84 = 63 + k$ and $k = 21$.\nStep 3: Check by finding $y$ from the first equation: $5(12) + 3y = 63$ gives $3y = 3$, so $y = 1$. Then $2(12) - 3(1) = 24 - 3 = 21$ ✓\n\n**Common Mistakes:**\n* $27$: computing $2(12) + 3(1)$, adding $3y$ instead of subtracting it in the second equation.\n* $84$: stopping at $7x = 84$ and reporting that value instead of solving $84 = 63 + k$.\n* $1$: reporting $y$, which is found along the way, instead of the constant $k$.\n\n**Test Day Takeaway:** When a system contains an unknown constant, add or subtract the equations first. Eliminating one variable leaves an equation in the given variable and the constant.",
  skills: ["elimination-method", "setting-up-systems"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Which expression is equivalent to $\\frac{2^{3x} \\cdot 4^{x+1}}{8^{x-1}}$?",
  choices: [
    // distractor: rewrites 4^(x+1) as 2^(x+1), forgetting to double the exponent when changing base 4 to base 2
    { id: "A", text: "$2^{x+4}$" },
    // distractor: rewrites 8^(x-1) as 2^(3x-1), failing to multiply the 3 through the -1
    { id: "B", text: "$2^{2x+3}$" },
    { id: "C", text: "$2^{2x+5}$" },
    // distractor: adds the denominator's exponent instead of subtracting it
    { id: "D", text: "$2^{8x-1}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** In base $2$ the numerator is $2^{3x} \\cdot 2^{2x+2} = 2^{5x+2}$ and the denominator is $2^{3x-3}$. Subtracting exponents gives $2^{(5x+2)-(3x-3)} = 2^{2x+5}$.\n\n**The Full Solution:**\nStep 1: Rewrite each factor in base $2$: $4^{x+1} = (2^2)^{x+1} = 2^{2x+2}$ and $8^{x-1} = (2^3)^{x-1} = 2^{3x-3}$.\nStep 2: Multiply in the numerator by adding exponents: $2^{3x} \\cdot 2^{2x+2} = 2^{5x+2}$.\nStep 3: Divide by subtracting exponents: $2^{5x+2-(3x-3)} = 2^{2x+5}$. Check with $x = 1$: the original expression is $\\frac{8 \\cdot 16}{1} = 128$, and $2^{2(1)+5} = 2^7 = 128$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2^{x+4}$): this treats $4^{x+1}$ as $2^{x+1}$. Changing base $4$ to base $2$ doubles the exponent, so the factor is $2^{2x+2}$.\n* Choice B ($2^{2x+3}$): this treats $8^{x-1}$ as $2^{3x-1}$. The $3$ multiplies the whole exponent, giving $3x - 3$.\n* Choice D ($2^{8x-1}$): this adds the denominator's exponent $3x - 3$ instead of subtracting it.\n\n**Test Day Takeaway:** Convert every base to the smallest common base, then apply one rule at a time: multiply exponents for a power of a power, add to multiply, subtract to divide. Testing $x = 1$ catches a slipped sign quickly.",
  skills: ["exponent-laws"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "For the linear function $f$, $f(2) = 17$ and $f(6) = 5$. Which equation defines $f$?",
  choices: [
    // distractor: back-solves the y-intercept with the wrong sign, computing 5 - 3(6) = -13 instead of 5 + 3(6) = 23
    { id: "A", text: "$f(x) = -3x - 13$" },
    // distractor: uses f(2) = 17 as the y-intercept, as if 17 were the value at x = 0
    { id: "B", text: "$f(x) = -3x + 17$" },
    { id: "C", text: "$f(x) = -3x + 23$" },
    // distractor: uses the total drop of 12 as the slope instead of dividing it by the change in x, 4, so the intercept becomes 17 + 12(2) = 41
    { id: "D", text: "$f(x) = -12x + 41$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Slope-Intercept Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The output drops $12$ while $x$ increases by $4$, so the slope is $-3$. Going back $2$ units from $(2, 17)$ adds $6$, so the $y$-intercept is $23$ and $f(x) = -3x + 23$.\n\n**The Full Solution:**\nStep 1: The points $(2, 17)$ and $(6, 5)$ are on the graph of $f$. The slope is $\\frac{5 - 17}{6 - 2} = \\frac{-12}{4} = -3$.\nStep 2: Write $f(x) = -3x + b$ and substitute $(2, 17)$: $17 = -3(2) + b$, so $b = 17 + 6 = 23$.\nStep 3: The function is $f(x) = -3x + 23$. Check the other point: $f(6) = -18 + 23 = 5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($f(x) = -3x - 13$): this uses $5 - 3(6) = -13$ for the intercept. Since $f(6) = -3(6) + b$, the $18$ must be added to $5$, not subtracted.\n* Choice B ($f(x) = -3x + 17$): this treats $17$ as the $y$-intercept, but $17$ is the value at $x = 2$, not at $x = 0$. Then $f(6) = -1$, not $5$.\n* Choice D ($f(x) = -12x + 41$): this uses the total change, $-12$, as the slope without dividing by the change in $x$, $4$.\n\n**Test Day Takeaway:** Two points give the slope first, then the intercept. Never assume a given value is the $y$-intercept unless it is the value at $x = 0$; substitute a point and solve for $b$.",
  skills: ["slope-intercept-form"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$\\frac{6x + 42}{x} = 6$\nHow many solutions does the given equation have?",
  choices: [
    // distractor: drops the 6x term and solves 42/x = 6, getting x = 7
    { id: "A", text: "Exactly one" },
    // distractor: multiplies the right side by x twice, turning the equation into 6x + 42 = 6x^2 and counting its two roots
    { id: "B", text: "Exactly two" },
    // distractor: cancels the 6x against the 6 and concludes the equation is true for every x
    { id: "C", text: "Infinitely many" },
    { id: "D", text: "Zero" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Rational Equation with No Solution**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Split the left side: $\\frac{6x + 42}{x} = 6 + \\frac{42}{x}$. Since $\\frac{42}{x}$ is never $0$, the left side never equals $6$.\n\n**The Full Solution:**\nStep 1: Multiply both sides by $x$ (which cannot be $0$): $6x + 42 = 6x$.\nStep 2: Subtract $6x$ from both sides: $42 = 0$.\nStep 3: This statement is false, so no value of $x$ satisfies the equation, and the equation has zero solutions. Check the structure: $6 + \\frac{42}{x} = 6$ would require $\\frac{42}{x} = 0$, which is impossible ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (Exactly one): dropping the $6x$ leaves $\\frac{42}{x} = 6$ and $x = 7$. Substituting $x = 7$ into the original equation gives $\\frac{84}{7} = 12$, not $6$.\n* Choice B (Exactly two): multiplying the right side by $x$ a second time gives $6x + 42 = 6x^{2}$, a quadratic with two roots, but that is not the given equation.\n* Choice C (Infinitely many): the $6x$ in the numerator cannot cancel with the $6$ on the right; only common factors of the whole numerator and denominator cancel.\n\n**Test Day Takeaway:** When every variable term cancels and a false statement such as $42 = 0$ is left, the equation has no solution. If a true statement such as $0 = 0$ is left, it has infinitely many.",
  skills: ["rational-expressions"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The scatterplot shows the high temperature, in degrees Celsius, and the number of cups of lemonade sold at a stand on each of $10$ days. A line of best fit is also shown. Based on the line of best fit, how many cups of lemonade are predicted to be sold on a day with a high temperature of $30$ degrees Celsius?",
  diagram: { type: "scatterplot", params: { points: [[17, 6], [18, 20], [20, 19], [22, 38], [23, 40], [25, 39], [26, 53], [28, 60], [30, 56], [31, 68]], xMin: 16, xMax: 32, yMin: 0, yMax: 80, xGridStep: 2, yGridStep: 8, xLabelStep: 4, yLabelStep: 16, xLabel: "High temperature (°C)", yLabel: "Cups of lemonade sold", bestFitLine: { slope: 4, intercept: -56 } } },
  choices: [
    // distractor: reads the y-axis as 4 per gridline instead of 8, halving the reading
    { id: "A", text: "$32$" },
    // distractor: reads the line at 26 degrees by counting the labeled ticks (every 4 degrees) as if they were gridlines (every 2 degrees)
    { id: "B", text: "$48$" },
    // distractor: reads the data point at 30 degrees instead of the line of best fit
    { id: "C", text: "$56$" },
    { id: "D", text: "$64$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Follow the gridline at $30$ degrees up to the line of best fit; the line crosses it at $64$ cups.\n\n**The Full Solution:**\nStep 1: Read two points where the line of best fit crosses gridline intersections: $(20, 24)$ and $(30, 64)$.\nStep 2: The slope is $\\frac{64 - 24}{30 - 20} = 4$ cups per degree, so the line is $y = 4x - 56$.\nStep 3: At $x = 30$, $y = 4(30) - 56 = 64$. Check a neighboring gridline: at $x = 28$ the line gives $56$, and it rises $8$ over the next $2$ degrees ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($32$): this treats each horizontal gridline as $4$ cups instead of $8$. Read the axis labels before counting gridlines.\n* Choice B ($48$): this is the height of the line at $26$ degrees, which results from counting labeled ticks (every $4$ degrees) as if they were gridlines (every $2$ degrees).\n* Choice C ($56$): this is the data point at $30$ degrees. A prediction from the line of best fit is the height of the line, not of the data point.\n\n**Test Day Takeaway:** \"Based on the line of best fit\" means read the line, not a data point. Confirm both axis scales first, then go up from the given $x$-value to the line.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "At a school, $44$ of the $160$ students in the 10th grade and $56$ of the $240$ students in the 11th grade play a sport. One of these $400$ students will be selected at random. What is the probability of selecting a student who plays a sport?",
  choices: [
    // distractor: counts only the 44 10th graders who play a sport, over all 400 students
    { id: "A", text: "$\\frac{11}{100}$" },
    // distractor: counts only the 56 11th graders who play a sport, over all 400 students
    { id: "B", text: "$\\frac{7}{50}$" },
    { id: "C", text: "$\\frac{1}{4}$" },
    // distractor: computes the probability for 10th graders only, 44 over 160
    { id: "D", text: "$\\frac{11}{40}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The students who play a sport total $44 + 56 = 100$ out of $400$, so the probability is $\\frac{100}{400} = \\frac{1}{4}$.\n\n**The Full Solution:**\nStep 1: Count every student who plays a sport, from both grades: $44 + 56 = 100$.\nStep 2: The student is selected from all $160 + 240 = 400$ students, so $400$ is the denominator.\nStep 3: The probability is $\\frac{100}{400} = \\frac{1}{4}$. Check the complement: $300$ of the $400$ students do not play a sport, and $\\frac{1}{4} + \\frac{300}{400} = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{11}{100}$): this is $\\frac{44}{400}$, which counts only the 10th graders who play a sport.\n* Choice B ($\\frac{7}{50}$): this is $\\frac{56}{400}$, which counts only the 11th graders who play a sport.\n* Choice D ($\\frac{11}{40}$): this is $\\frac{44}{160}$, the probability that a 10th grader plays a sport. The question selects from all $400$ students, not from one grade.\n\n**Test Day Takeaway:** When a student is selected from the whole group, the numerator counts every qualifying case in every group and the denominator is the whole group. A smaller denominator means a conditional probability has been computed instead.",
  skills: ["probability-basics"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "medium",
  band: 4,
  question: "Based on a random sample of $150$ patients at a clinic, the mean wait time for all patients at the clinic is estimated to be $34$ minutes, with an associated margin of error of $m$ minutes. It is plausible that the mean wait time for all patients at the clinic is between $30.6$ and $37.4$ minutes. What is the value of $m$?",
  correctAnswer: "3.4",
  explanation: "**SAT Pattern: Margin of Error**\n\n**The correct answer is $3.4$.**\n\n**The Fast Way (~15s):** The interval extends the same distance on each side of the estimate, so $m = 37.4 - 34 = 3.4$.\n\n**The Full Solution:**\nStep 1: The plausible values run from the estimate minus the margin of error to the estimate plus the margin of error: $34 - m$ to $34 + m$.\nStep 2: Match the endpoints: $34 + m = 37.4$ gives $m = 3.4$, and $34 - m = 30.6$ gives the same value.\nStep 3: Equivalently, halve the width of the interval: $\\frac{37.4 - 30.6}{2} = \\frac{6.8}{2} = 3.4$. Check: $34 - 3.4 = 30.6$ and $34 + 3.4 = 37.4$ ✓\n\n**Common Mistakes:**\n* $6.8$: reporting the full width of the interval. The margin of error is the distance from the estimate to one endpoint, which is half the width.\n* $1.7$: halving $6.8$ twice. One division by $2$ turns the width into the margin of error.\n* $34$: reporting the estimate, which is the center of the interval, not the margin of error.\n\n**Test Day Takeaway:** The estimate is the center of the interval of plausible values. Subtract the estimate from an endpoint, or halve the width once.",
  skills: ["margin-of-error"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In triangle $ABC$, the measures of angles $A$, $B$, and $C$ are $(2k + 10)^\\circ$, $(3k - 5)^\\circ$, and $(k + 19)^\\circ$, respectively. What is the measure, in degrees, of the largest angle of triangle $ABC$?",
  choices: [
    { id: "A", text: "$73$" },
    // distractor: drops the constant terms and solves 6k = 180, getting k = 30, so the largest angle is 3(30) - 5 = 85
    { id: "B", text: "$85$" },
    // distractor: adds the combined constant 24 to 180 instead of subtracting it, getting k = 34 and 3(34) - 5 = 97
    { id: "C", text: "$97$" },
    // distractor: uses 360 degrees for the sum of the angles of a triangle, getting k = 56 and 3(56) - 5 = 163
    { id: "D", text: "$163$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The three measures add to $6k + 24 = 180$, so $k = 26$. The angles are $62^\\circ$, $73^\\circ$, and $45^\\circ$, so the largest is $73^\\circ$.\n\n**The Full Solution:**\nStep 1: The angle measures of a triangle sum to $180^\\circ$: $(2k + 10) + (3k - 5) + (k + 19) = 180$.\nStep 2: Combine like terms: $6k + 24 = 180$, so $6k = 156$ and $k = 26$.\nStep 3: Substitute: angle $A$ is $2(26) + 10 = 62$, angle $B$ is $3(26) - 5 = 73$, and angle $C$ is $26 + 19 = 45$, so the largest is $73$. Check: $62 + 73 + 45 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($85$): this comes from $6k = 180$, ignoring the constants $10$, $-5$, and $19$, which combine to $24$.\n* Choice C ($97$): this comes from $6k = 180 + 24 = 204$, adding the constant to $180$ instead of subtracting it.\n* Choice D ($163$): this uses $360^\\circ$, the angle sum of a quadrilateral. The angles of a triangle sum to $180^\\circ$.\n\n**Test Day Takeaway:** Set the sum of the angle expressions equal to $180$, solve for the variable, and substitute back. The question usually asks for an angle, not the variable.",
  skills: ["triangle-angle-sum"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$2x^{2} - 26x + 60 = 0$\nThe solutions to the given equation are $r$ and $s$, where $r > s$. What is the value of $r - s$?",
  choices: [
    { id: "A", text: "$7$" },
    // distractor: reports the sum of the solutions, 26 divided by 2, instead of their difference
    { id: "B", text: "$13$" },
    // distractor: computes the square root of the discriminant, 14, but does not divide by the leading coefficient 2
    { id: "C", text: "$14$" },
    // distractor: reports the product of the solutions, 60 divided by 2
    { id: "D", text: "$30$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The solutions have sum $\\frac{26}{2} = 13$ and product $\\frac{60}{2} = 30$. The two numbers with sum $13$ and product $30$ are $10$ and $3$, so $r - s = 7$.\n\n**The Full Solution:**\nStep 1: For $ax^{2} + bx + c = 0$, the solutions satisfy $r + s = -\\frac{b}{a} = \\frac{26}{2} = 13$ and $rs = \\frac{c}{a} = \\frac{60}{2} = 30$.\nStep 2: Then $(r - s)^{2} = (r + s)^{2} - 4rs = 169 - 120 = 49$. Since $r > s$, $r - s = 7$.\nStep 3: Confirm by factoring: $2x^{2} - 26x + 60 = 2(x - 3)(x - 10)$, so $r = 10$ and $s = 3$, and $10 - 3 = 7$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($13$): this is $r + s$, the sum of the solutions, not their difference.\n* Choice C ($14$): this is $\\sqrt{b^{2} - 4ac} = \\sqrt{676 - 480} = \\sqrt{196}$. That value equals $a(r - s)$, so it must still be divided by $a = 2$.\n* Choice D ($30$): this is $rs$, the product of the solutions.\n\n**Test Day Takeaway:** The sum and product of the solutions come straight from the coefficients: $-\\frac{b}{a}$ and $\\frac{c}{a}$. The difference of the solutions is $\\sqrt{(r + s)^{2} - 4rs}$.",
  skills: ["quadratic-factoring"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The table shows the number of students in each of two classes who own a pet and who do not own a pet. Two different students will be selected at random from these $40$ students. What is the probability that both students selected own a pet? (Express your answer as a decimal or fraction, not as a percent.)",
  questionTable: { headers: ["", "Owns a pet", "Does not own a pet", "Total"], rows: [["Class A", "9", "13", "22"], ["Class B", "7", "11", "18"], ["Total", "16", "24", "40"]] },
  correctAnswer: "2/13",
  explanation: "**SAT Pattern: Probability Without Replacement**\n\n**The correct answer is $\\frac{2}{13}$.**\n\n**The Fast Way (~30s):** There are $16$ pet owners among the $40$ students. Multiply the two selections: $\\frac{16}{40} \\cdot \\frac{15}{39} = \\frac{2}{5} \\cdot \\frac{5}{13} = \\frac{2}{13}$.\n\n**The Full Solution:**\nStep 1: From the table, $9 + 7 = 16$ of the $40$ students own a pet, so the probability that the first student selected owns a pet is $\\frac{16}{40} = \\frac{2}{5}$.\nStep 2: The first student cannot be selected again, so $39$ students remain and $15$ of them own a pet. The probability that the second student owns a pet is $\\frac{15}{39} = \\frac{5}{13}$.\nStep 3: Multiply: $\\frac{2}{5} \\cdot \\frac{5}{13} = \\frac{2}{13}$. Check as a decimal: $0.4 \\times 0.3846 \\approx 0.1538$, and $\\frac{2}{13} \\approx 0.1538$ ✓\n\n**Common Mistakes:**\n* $\\frac{4}{25}$: using $\\frac{16}{40} \\cdot \\frac{16}{40}$, as if the same student could be selected twice.\n* $\\frac{3}{20}$: using $\\frac{16}{40} \\cdot \\frac{15}{40}$, reducing the number of pet owners for the second selection but leaving the total at $40$.\n* $\\frac{2}{5}$: reporting only the probability for the first selection.\n\n**Test Day Takeaway:** \"Two different\" means both the numerator and the denominator of the second fraction drop by one. Write both fractions before multiplying.",
  skills: ["probability-basics"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$x^{2} - 12x + c = 0$\nIn the given equation, $c$ is an integer. If the equation has no real solutions, what is the least possible value of $c$?",
  choices: [
    // distractor: completes the square by subtracting 12 rather than 6 squared, concluding c > 12
    { id: "A", text: "$13$" },
    // distractor: sets the discriminant equal to zero, the case with exactly one real solution
    { id: "B", text: "$36$" },
    { id: "C", text: "$37$" },
    // distractor: stops at b squared equals 144 and never divides by 4a
    { id: "D", text: "$144$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** No real solutions means the discriminant is negative: $(-12)^{2} - 4(1)(c) < 0$, so $144 - 4c < 0$ and $c > 36$. The least integer greater than $36$ is $37$.\n\n**The Full Solution:**\nStep 1: A quadratic equation has no real solutions exactly when $b^{2} - 4ac < 0$. Here $a = 1$, $b = -12$, and the constant term is $c$.\nStep 2: Substitute: $144 - 4c < 0$, so $4c > 144$ and $c > 36$.\nStep 3: The least integer greater than $36$ is $37$. Check by completing the square: $x^{2} - 12x + 37 = (x - 6)^{2} + 1$, which is at least $1$ for every $x$, so it never equals $0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($13$): this comes from writing $x^{2} - 12x + c = (x - 6)^{2} + (c - 12)$. Half of $12$ is $6$, and $6^{2} = 36$ is the amount subtracted, not $12$.\n* Choice B ($36$): when $c = 36$, the discriminant is exactly $0$ and the equation $(x - 6)^{2} = 0$ has one real solution, $x = 6$.\n* Choice D ($144$): this is $b^{2}$ alone. The discriminant is $b^{2} - 4ac$, and the inequality must then be solved for $c$.\n\n**Test Day Takeaway:** \"No real solutions\" means $b^{2} - 4ac < 0$. Solve the inequality, then check whether the boundary value itself is allowed; a strict inequality pushes the answer past it.",
  skills: ["discriminant-analysis"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$\\frac{27^{x+1}}{3^{k}} = 9^{x-3} \\cdot 3^{x}$\nThe given equation is true for all values of $x$, where $k$ is a constant. What is the value of $k$?",
  correctAnswer: "9",
  explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~30s):** In base $3$ the left side is $3^{3x + 3 - k}$ and the right side is $3^{3x - 6}$. Matching the constants gives $3 - k = -6$, so $k = 9$.\n\n**The Full Solution:**\nStep 1: Rewrite the left side: $27^{x+1} = 3^{3(x+1)} = 3^{3x+3}$, so $\\frac{27^{x+1}}{3^{k}} = 3^{3x + 3 - k}$.\nStep 2: Rewrite the right side: $9^{x-3} = 3^{2(x-3)} = 3^{2x-6}$, so $9^{x-3} \\cdot 3^{x} = 3^{2x - 6 + x} = 3^{3x-6}$.\nStep 3: The two powers of $3$ are equal for all $x$, so the exponents are identical: $3x + 3 - k = 3x - 6$, which gives $3 - k = -6$ and $k = 9$. Check at $x = 3$: the left side is $\\frac{27^{4}}{3^{9}} = \\frac{3^{12}}{3^{9}} = 27$, and the right side is $9^{0} \\cdot 3^{3} = 27$ ✓\n\n**Common Mistakes:**\n* $-3$: writing $k - 3 = -6$ instead of $3 - k = -6$. The $k$ is subtracted in the exponent.\n* $7$: rewriting $27^{x+1}$ as $3^{3x+1}$, multiplying only the $x$ by $3$.\n* $6$: rewriting $9^{x-3}$ as $3^{x-3}$, forgetting that changing base $9$ to base $3$ doubles the exponent.\n\n**Test Day Takeaway:** Convert every base to the smallest common base and collect each side into a single power. When the equation holds for all $x$, the $x$-terms match and the constant terms determine the unknown.",
  skills: ["exponential-functions"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$3x^{2} - 24x + 59$\nThe given expression can be written in the form $a(x - h)^{2} + k$, where $a$, $h$, and $k$ are constants. What is the value of $k$?",
  choices: [
    { id: "A", text: "$11$" },
    // distractor: subtracts 16 rather than 3 times 16 when moving the completed square outside the parentheses, giving 59 - 16
    { id: "B", text: "$43$" },
    // distractor: adds 16 instead of subtracting 3 times 16, giving 59 + 16
    { id: "C", text: "$75$" },
    // distractor: adds 3 times 16 instead of subtracting it, giving 59 + 48
    { id: "D", text: "$107$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Quadratic — Completing the Square**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Factor $3$ from the $x$-terms and complete the square: $3(x^{2} - 8x) + 59 = 3(x - 4)^{2} - 48 + 59 = 3(x - 4)^{2} + 11$, so $k = 11$.\n\n**The Full Solution:**\nStep 1: Factor $3$ from the $x$-terms: $3x^{2} - 24x + 59 = 3(x^{2} - 8x) + 59$.\nStep 2: Half of $-8$ is $-4$ and $(-4)^{2} = 16$, so $x^{2} - 8x = (x - 4)^{2} - 16$. Multiplying by $3$ gives $3(x - 4)^{2} - 48$, so the expression is $3(x - 4)^{2} - 48 + 59 = 3(x - 4)^{2} + 11$.\nStep 3: Therefore $a = 3$, $h = 4$, and $k = 11$. Check by expanding: $3(x^{2} - 8x + 16) + 11 = 3x^{2} - 24x + 48 + 11 = 3x^{2} - 24x + 59$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($43$): this is $59 - 16$. The $16$ is inside the parentheses, so it is multiplied by the factored-out $3$ before it is combined with $59$.\n* Choice C ($75$): this is $59 + 16$, which adds the completing term instead of subtracting it and also skips the factor of $3$.\n* Choice D ($107$): this is $59 + 48$. Since $3(x - 4)^{2}$ is $48$ more than $3x^{2} - 24x$, the $48$ must be subtracted.\n\n**Test Day Takeaway:** When the leading coefficient is not $1$, factor it out of the $x$-terms first; the number you complete the square with is then multiplied by that coefficient. Expanding your answer is a quick check.",
  skills: ["quadratics"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A right triangle has a hypotenuse of length $3k$ and a leg of length $k\\sqrt{5}$, where $k$ is a positive constant. Which expression represents the area of the triangle?",
  choices: [
    // distractor: takes the missing leg as k rather than 2k
    { id: "A", text: "$\\frac{k^{2}\\sqrt{5}}{2}$" },
    { id: "B", text: "$k^{2}\\sqrt{5}$" },
    // distractor: uses the hypotenuse 3k as the second leg instead of the missing leg 2k
    { id: "C", text: "$\\frac{3k^{2}\\sqrt{5}}{2}$" },
    // distractor: multiplies the two legs but forgets the one-half in the area formula
    { id: "D", text: "$2k^{2}\\sqrt{5}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle Area with Surds**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The missing leg is $\\sqrt{9k^{2} - 5k^{2}} = 2k$, so the area is $\\frac{1}{2}(2k)(k\\sqrt{5}) = k^{2}\\sqrt{5}$.\n\n**The Full Solution:**\nStep 1: By the Pythagorean theorem, $(k\\sqrt{5})^{2} + (\\text{leg})^{2} = (3k)^{2}$, so $5k^{2} + (\\text{leg})^{2} = 9k^{2}$.\nStep 2: Then $(\\text{leg})^{2} = 4k^{2}$, and since $k > 0$, the missing leg has length $2k$.\nStep 3: The legs are perpendicular, so the area is $\\frac{1}{2}(2k)(k\\sqrt{5}) = k^{2}\\sqrt{5}$. Check with $k = 2$: the sides are $2\\sqrt{5}$, $4$, and $6$, and $\\frac{1}{2}(4)(2\\sqrt{5}) = 4\\sqrt{5} = 2^{2}\\sqrt{5}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{k^{2}\\sqrt{5}}{2}$): this uses $k$ as the missing leg. The square root of $4k^{2}$ is $2k$, not $k$.\n* Choice C ($\\frac{3k^{2}\\sqrt{5}}{2}$): this multiplies the given leg by the hypotenuse. The area of a right triangle uses the two legs.\n* Choice D ($2k^{2}\\sqrt{5}$): this is the product of the legs without the $\\frac{1}{2}$.\n\n**Test Day Takeaway:** Square a radical side before using the Pythagorean theorem, since $(k\\sqrt{5})^{2} = 5k^{2}$, and use the two legs, not the hypotenuse, in the area formula.",
  skills: ["triangle-area"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In the figure shown, triangle $ABC$ is similar to triangle $DEF$, where $A$, $B$, and $C$ correspond to $D$, $E$, and $F$, respectively. What is the perimeter of triangle $DEF$?",
  diagram: { type: "similarTriangles", params: { triangle1: { labels: ["A", "B", "C"], sideLabels: ["8", "12", "10"] }, triangle2: { labels: ["D", "E", "F"], sideLabels: ["", "18", ""] }, figureNote: true } },
  choices: [
    // distractor: scales only the two unmarked sides, 1.5 times 8 plus 1.5 times 10, and leaves out the side of length 18
    { id: "A", text: "$27$" },
    { id: "B", text: "$45$" },
    // distractor: adds the difference 18 minus 12 to each side of ABC instead of multiplying by the scale factor
    { id: "C", text: "$48$" },
    // distractor: pairs the 18 with side CA of length 10, using a scale factor of 1.8
    { id: "D", text: "$54$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Side $EF$ corresponds to side $BC$, so the scale factor is $\\frac{18}{12} = 1.5$. Perimeters scale by the same factor: $1.5(8 + 12 + 10) = 1.5(30) = 45$.\n\n**The Full Solution:**\nStep 1: The correspondence $A \\to D$, $B \\to E$, $C \\to F$ matches $EF$ with $BC$, so the scale factor is $\\frac{EF}{BC} = \\frac{18}{12} = \\frac{3}{2}$.\nStep 2: Each side of triangle $DEF$ is $\\frac{3}{2}$ times the corresponding side of triangle $ABC$: $DE = \\frac{3}{2}(8) = 12$, $EF = \\frac{3}{2}(12) = 18$, and $FD = \\frac{3}{2}(10) = 15$.\nStep 3: The perimeter of triangle $DEF$ is $12 + 18 + 15 = 45$. Check: the perimeter of triangle $ABC$ is $30$, and $\\frac{3}{2}(30) = 45$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($27$): this scales $8$ and $10$ but leaves out the third side, $EF = 18$.\n* Choice C ($48$): this adds $6$ to each side of triangle $ABC$. Corresponding sides of similar triangles have a constant ratio, not a constant difference.\n* Choice D ($54$): this pairs $18$ with $CA = 10$ for a factor of $1.8$. The stated correspondence matches $EF$ with $BC$.\n\n**Test Day Takeaway:** Use the stated correspondence to pair sides before writing a ratio. Perimeters of similar triangles scale by the same factor as the sides.",
  skills: ["similar-triangles"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The function $f(t) = 25{,}000(1 + r)^{t}$ gives the balance, in dollars, in a savings account $t$ years after the account was opened, where $r$ is a constant. If $f(2) = 28{,}090$, what is the value of $r$?",
  correctAnswer: "0.06",
  explanation: "**SAT Pattern: Compound Interest**\n\n**The correct answer is $0.06$.**\n\n**The Fast Way (~30s):** Two years of growth multiply the balance by $\\frac{28{,}090}{25{,}000} = 1.1236$, and $\\sqrt{1.1236} = 1.06$, so $r = 0.06$.\n\n**The Full Solution:**\nStep 1: Substitute $t = 2$: $25{,}000(1 + r)^{2} = 28{,}090$.\nStep 2: Divide both sides by $25{,}000$: $(1 + r)^{2} = 1.1236$. Since $1 + r$ is positive, $1 + r = \\sqrt{1.1236} = 1.06$.\nStep 3: Subtract $1$: $r = 0.06$. Check: $25{,}000(1.06)^{2} = 25{,}000(1.1236) = 28{,}090$ ✓\n\n**Common Mistakes:**\n* $0.1236$: using the total two-year increase, $\\frac{28{,}090 - 25{,}000}{25{,}000}$, as $r$. That growth happened over two years, not one.\n* $0.0618$: halving the two-year increase. The growth compounds, so the yearly factor is the square root of the two-year factor.\n* $1.06$: reporting the growth factor $1 + r$ instead of $r$.\n\n**Test Day Takeaway:** Divide the later value by the initial value to isolate the growth factor, then take the $t$th root. Do not divide the total percent increase by the number of years.",
  skills: ["exponential-functions"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 7 — Math Module 2 (22 questions)
// Wavy flow (frozen): M[1] E[2,3] M[4,5] H[6,7] M[8] H[9] M[10] E[11] H[12,13,14] M[15] H[16,17,18] M[19] H[20,21,22].
// Distribution: E=3 (q2,q3,q11) / M=7 (q1,q4,q5,q8,q10,q15,q19) / H=12 (q6,q7,q9,q12,q13,q14,q16,q17,q18,q20,q21,q22).
// Official-calibration recreation (2026-09-01): all content re-authored fresh;
// slot metadata and pattern slugs frozen. Q1-5 warm-ups each carry 2+ steps or
// a trap (scale-the-difference, intercept-vs-slope, equal-constants decoy,
// f(a)-f(b) != f(a-b), rational-zero denominator check).

{
  id: 1,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table shows the number of books of each type sold at two locations of a bookstore on one day. What percent of the books sold at Location B were mysteries?",
  questionTable: { headers: ["Type of book", "Location A", "Location B"], rows: [["Mystery", "84", "63"], ["Biography", "56", "42"], ["Science fiction", "42", "57"], ["Poetry", "28", "48"]] },
  choices: [
    // distractor: divides the 63 mysteries sold at Location B by the 420 books sold at both locations instead of the 210 sold at Location B
    { id: "A", text: "$15\\%$" },
    { id: "B", text: "$30\\%$" },
    // distractor: uses the 147 mysteries sold at both locations over the 420 books sold at both locations
    { id: "C", text: "$35\\%$" },
    // distractor: reads the Location A column instead of Location B, computing 84 out of 210
    { id: "D", text: "$40\\%$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Percent of a Whole**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Location B sold $63 + 42 + 57 + 48 = 210$ books, and $\\frac{63}{210} = 0.30$, so $30\\%$ of them were mysteries.\n\n**The Full Solution:**\nStep 1: Identify the whole. The question asks only about Location B, so the whole is the Location B column: $63 + 42 + 57 + 48 = 210$ books.\nStep 2: Identify the part. Location B sold $63$ mysteries; the $84$ in the Location A column belongs to a different whole.\nStep 3: Divide and convert to a percent: $\\frac{63}{210} = \\frac{3}{10} = 0.30 = 30\\%$. Check: $30\\%$ of $210$ is $0.30(210) = 63$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($15\\%$): divides $63$ by $420$, the number of books sold at both locations, instead of by the $210$ books sold at Location B.\n* Choice C ($35\\%$): adds the mysteries from both locations, $84 + 63 = 147$, and divides by $420$. That is the percent for the two locations combined, not for Location B.\n* Choice D ($40\\%$): reads the wrong column, computing $\\frac{84}{210} = 40\\%$ for Location A.\n\n**Test Day Takeaway:** In a percent-of-a-whole question, the division is easy; the work is choosing the right whole. Find the phrase that restricts the group (\"sold at Location B\") before you add anything from the table.",
  skills: ["percent-of-value"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$y = c(x - 3)^{2} - 45$\nThe given equation can be written in the form $y = cx^{2} - 42x + n$, where $c$ and $n$ are constants. What is the value of $n$?",
  choices: [
    // distractor: assumes c = 1 instead of solving -6c = -42, giving 9(1) - 45 = -36
    { id: "A", text: "$-36$" },
    { id: "B", text: "$18$" },
    // distractor: finds c = 7 correctly but reports 9c = 63 and drops the constant -45
    { id: "C", text: "$63$" },
    // distractor: expands (x - 3)^2 as x^2 - 3x + 9, so -3c = -42 gives c = 14 and 9(14) - 45 = 81
    { id: "D", text: "$81$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Expanding gives the $x$-term $-6cx$, so $-6c = -42$ and $c = 7$; the constant term is $9c - 45 = 63 - 45 = 18$.\n\n**The Full Solution:**\nStep 1: Expand the given form: $c(x - 3)^{2} - 45 = c(x^{2} - 6x + 9) - 45 = cx^{2} - 6cx + (9c - 45)$.\nStep 2: Match the $x$-terms. Comparing with $cx^{2} - 42x + n$ gives $-6c = -42$, so $c = 7$.\nStep 3: Match the constant terms: $n = 9c - 45 = 9(7) - 45 = 63 - 45 = 18$. Check: $7(x - 3)^{2} - 45 = 7x^{2} - 42x + 63 - 45 = 7x^{2} - 42x + 18$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-36$): assumes $c = 1$ without using the $-42x$ term, giving $9(1) - 45 = -36$.\n* Choice C ($63$): finds $c = 7$ but reports only the $9c$ piece, $63$, leaving out the $-45$ that is also part of the constant term.\n* Choice D ($81$): expands $(x - 3)^{2}$ as $x^{2} - 3x + 9$, so the $x$-term becomes $-3cx$; then $-3c = -42$ gives $c = 14$ and $9(14) - 45 = 81$.\n\n**Test Day Takeaway:** Expanding $a(x - h)^{2} + k$ gives $ax^{2} - 2ahx + (ah^{2} + k)$. Use the $x$-term to find $a$, and remember that the constant term carries both $ah^{2}$ and $k$.",
  skills: ["distributive-property", "converting-quadratic-forms"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$8x + 20y = 12$\n$rx + sy = 21$\nIn the given system of equations, $r$ and $s$ are constants. The system has infinitely many solutions. What is the value of $r - s$?",
  choices: [
    { id: "A", text: "$-21$" },
    // distractor: sets r = 8 and s = 20, assuming the coefficients must be identical rather than proportional
    { id: "B", text: "$-12$" },
    // distractor: scales the x-coefficient by 7/4 to get r = 14 but leaves s = 20 unscaled
    { id: "C", text: "$-6$" },
    // distractor: computes s - r = 35 - 14 instead of r - s
    { id: "D", text: "$21$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The constants scale by $\\frac{21}{12} = \\frac{7}{4}$, so $r = 8\\left(\\frac{7}{4}\\right) = 14$ and $s = 20\\left(\\frac{7}{4}\\right) = 35$; $r - s = -21$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has infinitely many solutions when the two equations describe the same line, so the second equation is a constant multiple of the first.\nStep 2: Find the multiplier from the constants. The constant $12$ becomes $21$, so every term is multiplied by $\\frac{21}{12} = \\frac{7}{4}$.\nStep 3: Apply it to both coefficients: $r = \\frac{7}{4}(8) = 14$ and $s = \\frac{7}{4}(20) = 35$, so $r - s = 14 - 35 = -21$. Check: dividing $14x + 35y = 21$ by $\\frac{7}{4}$ gives $8x + 20y = 12$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-12$): sets $r = 8$ and $s = 20$, as if the coefficients had to be identical; then the constants $12$ and $21$ disagree and the lines are parallel, not the same.\n* Choice C ($-6$): scales only the $x$-coefficient, using $r = 14$ with $s = 20$, giving $14 - 20 = -6$. One multiplier must apply to every term.\n* Choice D ($21$): computes $s - r = 35 - 14$, the right numbers subtracted in the wrong order.\n\n**Test Day Takeaway:** Infinitely many solutions means one equation is a multiple of the other. Get the multiplier from the pair of numbers you know completely, here the constants, then apply it to every other term.",
  skills: ["system-solution-types", "infinite-solutions-condition"]
},
{
  id: 4,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$y = 2x^{2} + 7$\n$y = bx - 11$\nIn the given system of equations, $b$ is an integer. If the system has no real solutions, what is the greatest possible value of $b$?",
  correctAnswer: "11",
  explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**The correct answer is 11.**\n\n**The Fast Way (~35s):** Setting the two expressions for $y$ equal gives $2x^{2} - bx + 18 = 0$. No real solutions means $b^{2} - 4(2)(18) < 0$, so $b^{2} < 144$ and $-12 < b < 12$; the greatest integer is $11$.\n\n**The Full Solution:**\nStep 1: A solution to the system is a point on both graphs, so set the expressions for $y$ equal: $2x^{2} + 7 = bx - 11$, which rearranges to $2x^{2} - bx + 18 = 0$.\nStep 2: The system has no real solutions exactly when this quadratic equation has none, that is, when its discriminant is negative: $(-b)^{2} - 4(2)(18) = b^{2} - 144 < 0$.\nStep 3: $b^{2} < 144$ means $-12 < b < 12$, so the greatest integer value is $b = 11$. Check: with $b = 11$, the discriminant is $121 - 144 = -23 < 0$ ✓\n\n**Common Mistakes:**\n* $12$: uses $b^{2} - 144 \\le 0$ instead of $< 0$. At $b = 12$ the discriminant is exactly $0$, so the line touches the parabola at one point.\n* $8$: uses $4(18) = 72$ for $4ac$, leaving out the leading coefficient $2$; then $b^{2} < 72$ and the greatest integer is $8$.\n* $7$: rearranges to $2x^{2} - bx + 7 = 0$, leaving out the $-11$ from the second equation; then $b^{2} < 56$ and the greatest integer is $7$.\n\n**Test Day Takeaway:** To count the intersections of a line and a parabola, set the expressions for $y$ equal and examine the discriminant of the resulting quadratic. \"No real solutions\" is a strict inequality, so the boundary value itself is the trap.",
  skills: ["discriminant-analysis"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$6x - 9y = 15$\nOne of the equations in a system of two linear equations is given. The system has no solution. Which equation could be the second equation in this system?",
  choices: [
    // distractor: is the same line as 6x - 9y = 15 (multiply by 3), so the system would have infinitely many solutions
    { id: "A", text: "$2x - 3y = 5$" },
    // distractor: flips the sign of the y-coefficient, giving slope -2/3, so the lines intersect at one point
    { id: "B", text: "$2x + 3y = 11$" },
    // distractor: swaps the coefficients, giving slope 3/2, so the lines intersect at one point
    { id: "C", text: "$3x - 2y = 11$" },
    { id: "D", text: "$2x - 3y = 11$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Dividing the given equation by $3$ gives $2x - 3y = 5$. No solution means the same left side with a different constant, so $2x - 3y = 11$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has no solution when the lines are parallel and distinct: equal slopes, different intercepts.\nStep 2: Divide the given equation by $3$: $2x - 3y = 5$. Any line parallel to it has the form $2x - 3y = k$.\nStep 3: The constant must differ from $5$, or the two equations would describe the same line. Of the choices, only $2x - 3y = 11$ has the same left side and a different constant. Check: both lines have slope $\\frac{2}{3}$, and their $y$-intercepts, $-\\frac{5}{3}$ and $-\\frac{11}{3}$, are different ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2x - 3y = 5$): multiplying it by $3$ gives $6x - 9y = 15$ exactly, so it is the same line and the system has infinitely many solutions.\n* Choice B ($2x + 3y = 11$): the sign change makes the slope $-\\frac{2}{3}$, so this line intersects the given line at one point.\n* Choice C ($3x - 2y = 11$): swapping $2$ and $3$ gives slope $\\frac{3}{2}$, again one point of intersection.\n\n**Test Day Takeaway:** For \"no solution,\" reduce the given equation first. The second equation must match the reduced left side exactly and change only the constant; the same constant gives the same line.",
  skills: ["system-solution-types"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The graph of the quadratic function $f$ is shown. Which equation defines $f$?",
  diagram: { type: "parabola", params: { vertex: { h: 4, k: 12 }, a: -3, xRange: [0, 8], yRange: [-16, 16], xTickInterval: 2, yTickInterval: 4, gridInterval: 2, showVertex: false } },
  choices: [
    // distractor: reads the vertex correctly but assumes a = -1, so the graph would cross the x-axis near x = 0.5 and x = 7.5, not at 2 and 6
    { id: "A", text: "$f(x) = -(x - 4)^{2} + 12$" },
    // distractor: flips the sign inside the parentheses, placing the vertex at (-4, 12) instead of (4, 12)
    { id: "B", text: "$f(x) = -3(x + 4)^{2} + 12$" },
    { id: "C", text: "$f(x) = -3(x - 4)^{2} + 12$" },
    // distractor: flips the sign of k, placing the vertex at (4, -12), so the downward-opening graph would never reach the x-axis
    { id: "D", text: "$f(x) = -3(x - 4)^{2} - 12$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The vertex is $(4, 12)$, so $f(x) = a(x - 4)^{2} + 12$; the graph passes through $(6, 0)$, giving $0 = 4a + 12$ and $a = -3$.\n\n**The Full Solution:**\nStep 1: Read the vertex from the graph. The highest point is $(4, 12)$, so $f(x) = a(x - 4)^{2} + 12$ for some constant $a$.\nStep 2: Read a second point. The graph crosses the $x$-axis at $x = 2$ and $x = 6$, so $(6, 0)$ is on the graph.\nStep 3: Solve for $a$: $0 = a(6 - 4)^{2} + 12 = 4a + 12$, so $a = -3$ and $f(x) = -3(x - 4)^{2} + 12$. Check: $f(2) = -3(4) + 12 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($f(x) = -(x - 4)^{2} + 12$): has the correct vertex but takes $a = -1$ without using a second point; that graph would cross the $x$-axis at $x = 4 \\pm 2\\sqrt{3}$, about $0.5$ and $7.5$, not at $2$ and $6$.\n* Choice B ($f(x) = -3(x + 4)^{2} + 12$): reads the vertex's $x$-coordinate as $-4$; $(x + 4)^{2}$ puts the vertex to the left of the $y$-axis.\n* Choice D ($f(x) = -3(x - 4)^{2} - 12$): reads the vertex's $y$-coordinate as $-12$; that parabola opens downward from below the $x$-axis and never crosses it.\n\n**Test Day Takeaway:** Matching a parabola to vertex form takes two readings from the graph: the vertex gives $h$ and $k$, and one more point gives $a$. Skipping the second reading is what makes $a = \\pm 1$ tempting.",
  skills: ["vertex-form", "function-evaluation"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "$y = 2x^{2} - 20x + k$\nIn the given equation, $k$ is a constant. The graph of the equation in the xy-plane has two x-intercepts that are $6$ units apart. What is the value of $k$?",
  correctAnswer: "32",
  explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**The correct answer is 32.**\n\n**The Fast Way (~35s):** The $x$-intercepts are centered at $x = \\frac{20}{2(2)} = 5$ and are $6$ units apart, so they are $x = 2$ and $x = 8$; then $k = 2(2)(8) = 32$.\n\n**The Full Solution:**\nStep 1: The $x$-intercepts are symmetric about the axis of symmetry, $x = -\\frac{-20}{2(2)} = 5$.\nStep 2: Being $6$ units apart, they are each $3$ units from $x = 5$, so they are at $x = 2$ and $x = 8$.\nStep 3: Rebuild the equation from its zeros: $y = 2(x - 2)(x - 8) = 2(x^{2} - 10x + 16) = 2x^{2} - 20x + 32$, so $k = 32$. Check: the discriminant is $400 - 8(32) = 144$, and the distance between the intercepts is $\\frac{\\sqrt{144}}{2} = 6$ ✓\n\n**Common Mistakes:**\n* $16$: finds the intercepts $2$ and $8$ and multiplies them, forgetting that the leading coefficient $2$ also multiplies the constant term.\n* $8$: reports the larger $x$-intercept instead of the value of $k$.\n* $45.5$: sets the squared distance equal to the discriminant without dividing by $a^{2}$, solving $36 = 400 - 8k$; the correct relation is $36 = \\frac{400 - 8k}{4}$.\n\n**Test Day Takeaway:** The $x$-intercepts of a parabola sit symmetrically about $x = -\\frac{b}{2a}$. When you know how far apart they are, find them directly, then rebuild the equation, keeping the leading coefficient.",
  skills: ["quadratics"]
},
{
  id: 8,
  type: "fill-in",
  difficulty: "easy",
  band: 3,
  question: "$\\sqrt{5x - 11} = 8$\nWhat is the solution to the given equation?",
  correctAnswer: "15",
  explanation: "**SAT Pattern: Radical Equation**\n\n**The correct answer is 15.**\n\n**The Fast Way (~20s):** Square both sides: $5x - 11 = 64$, so $5x = 75$ and $x = 15$.\n\n**The Full Solution:**\nStep 1: Square both sides of $\\sqrt{5x - 11} = 8$: $5x - 11 = 64$.\nStep 2: Add $11$ to both sides: $5x = 75$.\nStep 3: Divide by $5$: $x = 15$. Check: $\\sqrt{5(15) - 11} = \\sqrt{64} = 8$ ✓\n\n**Common Mistakes:**\n* $75$: reaches $5x = 75$ and stops without dividing by $5$.\n* $3.8$: never squares, solving $5x - 11 = 8$ to get $5x = 19$.\n* $10.6$: squares correctly but subtracts $11$ instead of adding it, solving $5x = 53$.\n\n**Test Day Takeaway:** Square first, then solve the linear equation that remains, and substitute your answer into the original equation, since squaring can introduce solutions that do not work.",
  skills: ["radical-equations"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$5x - 2y = 22$\n$3x + 4y = 34$\nThe ordered pair $(x, y)$ is the solution to the given system of equations, and $k$ is a constant. If $kx - 3y = 30$, what is the value of $k$?",
  choices: [
    // distractor: adds 3y instead of subtracting it, solving 6k + 12 = 30 to get k = 3
    { id: "A", text: "$3$" },
    // distractor: drops the -3y term, solving 6k = 30 to get k = 5
    { id: "B", text: "$5$" },
    { id: "C", text: "$7$" },
    // distractor: swaps the coordinates, substituting x = 4 and y = 6 to solve 4k - 18 = 30
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** The solution to the system is $(6, 4)$; substituting into $kx - 3y = 30$ gives $6k - 12 = 30$, so $k = 7$.\n\n**The Full Solution:**\nStep 1: Multiply $5x - 2y = 22$ by $2$ to get $10x - 4y = 44$, then add $3x + 4y = 34$: $13x = 78$, so $x = 6$.\nStep 2: Substitute $x = 6$ into $3x + 4y = 34$: $18 + 4y = 34$, so $y = 4$. The solution is $(6, 4)$.\nStep 3: Substitute into $kx - 3y = 30$: $6k - 12 = 30$, so $6k = 42$ and $k = 7$. Check: $7(6) - 3(4) = 42 - 12 = 30$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): mishandles the sign of the $-3y$ term, solving $6k + 12 = 30$.\n* Choice B ($5$): substitutes only the $x$-value, solving $6k = 30$ and ignoring the $-3(4)$.\n* Choice D ($12$): reverses the ordered pair, using $x = 4$ and $y = 6$ to solve $4k - 18 = 30$.\n\n**Test Day Takeaway:** When a third equation must hold at a system's solution, solve the system first. Write the ordered pair down in order before substituting; reversed coordinates are the costliest slip here.",
  skills: ["system-solution-types", "infinite-solutions-condition"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$\\frac{6x^{2} - x - 35}{3x + 7}$\nFor $x > 0$, the given expression is equivalent to $ax + b$, where $a$ and $b$ are constants. What is the value of $ab$?",
  correctAnswer: "-10",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**The correct answer is -10.**\n\n**The Fast Way (~35s):** $6x^{2} - x - 35 = (3x + 7)(2x - 5)$, so the expression equals $2x - 5$; then $a = 2$, $b = -5$, and $ab = -10$.\n\n**The Full Solution:**\nStep 1: Factor the numerator using the denominator as one factor: $6x^{2} - x - 35 = (3x + 7)(2x + p)$. Matching constant terms gives $7p = -35$, so $p = -5$, and the $x$-terms check: $-15x + 14x = -x$.\nStep 2: Cancel the common factor: $\\frac{(3x + 7)(2x - 5)}{3x + 7} = 2x - 5$, since $3x + 7 \\neq 0$ for $x > 0$.\nStep 3: Comparing $2x - 5$ with $ax + b$ gives $a = 2$ and $b = -5$, so $ab = 2(-5) = -10$. Check at $x = 4$: $\\frac{96 - 4 - 35}{19} = \\frac{57}{19} = 3$ and $2(4) - 5 = 3$ ✓\n\n**Common Mistakes:**\n* $10$: factors correctly but reads the remaining factor as $2x + 5$, so $b = 5$.\n* $-3$: finds $a = 2$ and $b = -5$ but adds them instead of multiplying.\n* $2$: simplifies correctly and reports only $a$.\n\n**Test Day Takeaway:** A quadratic over a linear expression that simplifies to a line is a factoring question: the denominator is one of the numerator's factors, so build the other factor from the constant term. Then reread which combination of constants is asked for.",
  skills: ["simplifying-rational-expressions", "difference-of-squares"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The dot plot shows the number of books each of $9$ students read over the summer. When the number of books read by a $10$th student is included, the mean number of books read increases by $1$. How many books did the $10$th student read?",
  diagram: { type: "dotPlot", params: { data: [{ value: 3, count: 1 }, { value: 5, count: 1 }, { value: 6, count: 1 }, { value: 7, count: 2 }, { value: 8, count: 2 }, { value: 9, count: 1 }, { value: 10, count: 1 }], xMin: 2, xMax: 12, xLabel: "Number of books read" } },
  correctAnswer: "17",
  explanation: "**SAT Pattern: Mean from List**\n\n**The correct answer is 17.**\n\n**The Fast Way (~40s):** The $9$ students read $63$ books, a mean of $7$. The new mean is $8$, so the $10$ students read $80$ books in all, and the $10$th student read $80 - 63 = 17$.\n\n**The Full Solution:**\nStep 1: Total the dot plot. The values are $3, 5, 6, 7, 7, 8, 8, 9, 10$; their sum is $63$, so the mean for the $9$ students is $\\frac{63}{9} = 7$.\nStep 2: The mean increases by $1$, to $8$, so the $10$ values sum to $8 \\times 10 = 80$.\nStep 3: Subtract: the $10$th student read $80 - 63 = 17$ books. Check: $\\frac{63 + 17}{10} = \\frac{80}{10} = 8$, which is $1$ more than $7$ ✓\n\n**Common Mistakes:**\n* $8$: assumes the new value equals the new mean. A value equal to the mean of the other values leaves that mean unchanged; to raise the mean of $10$ values by $1$, the new value must be $10$ more than the old mean.\n* $9$: multiplies the new mean by the old count, computing $8 \\times 9 = 72$ and $72 - 63 = 9$. The new mean applies to all $10$ students.\n* $80$: reports the total for the $10$ students instead of the one missing value.\n\n**Test Day Takeaway:** Mean questions are questions about totals. Convert each mean to a sum (mean times count), and make sure the new mean is multiplied by the new number of values.",
  skills: ["calculate-mean"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$5x + 2y = 26$\n$2x + 5y = 23$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x - y$?",
  choices: [
    { id: "A", text: "$1$" },
    // distractor: subtracts the equations to reach 3x - 3y = 3 but reports 3 without dividing by 3
    { id: "B", text: "$3$" },
    // distractor: solves the system and reports x = 4 instead of x - y
    { id: "C", text: "$4$" },
    // distractor: adds the equations instead of subtracting, getting 7x + 7y = 49 and reporting x + y = 7
    { id: "D", text: "$7$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Subtracting the second equation from the first gives $3x - 3y = 3$, so $x - y = 1$.\n\n**The Full Solution:**\nStep 1: The coefficients $5$ and $2$ are swapped between the two equations, so subtracting the equations produces a multiple of $x - y$ directly.\nStep 2: Subtract: $(5x + 2y) - (2x + 5y) = 26 - 23$, which gives $3x - 3y = 3$.\nStep 3: Divide by $3$: $x - y = 1$. Check: solving fully gives $x = 4$ and $y = 3$, and $4 - 3 = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): reaches $3x - 3y = 3$ and reports the $3$ on the right side without dividing by $3$.\n* Choice C ($4$): solves the whole system and reports $x = 4$ instead of $x - y$.\n* Choice D ($7$): adds the equations, getting $7x + 7y = 49$ and $x + y = 7$, which is the wrong combination.\n\n**Test Day Takeaway:** When the coefficients are swapped between two equations, adding gives a multiple of $x + y$ and subtracting gives a multiple of $x - y$. Check which combination is asked for before choosing the operation.",
  skills: ["elimination-method"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the xy-plane, the distance between the points $(3, k)$ and $(11, 1)$ is $10$ units. If $k > 1$, what is the value of $k$?",
  choices: [
    // distractor: takes the negative square root, k - 1 = -6, ignoring the condition k > 1
    { id: "A", text: "$-5$" },
    // distractor: adds the coordinate differences instead of their squares, solving 8 + (k - 1) = 10
    { id: "B", text: "$3$" },
    // distractor: solves (k - 1)^2 = 36 to get k - 1 = 6 and reports 6 instead of adding 1
    { id: "C", text: "$6$" },
    { id: "D", text: "$7$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Distance Formula**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The horizontal distance is $11 - 3 = 8$, so $8^{2} + (k - 1)^{2} = 10^{2}$; then $(k - 1)^{2} = 36$ and, since $k > 1$, $k = 7$.\n\n**The Full Solution:**\nStep 1: Apply the distance formula: $\\sqrt{(11 - 3)^{2} + (1 - k)^{2}} = 10$, so $64 + (1 - k)^{2} = 100$.\nStep 2: Isolate the squared term: $(1 - k)^{2} = 36$, so $1 - k = 6$ or $1 - k = -6$, which gives $k = -5$ or $k = 7$.\nStep 3: Only $k = 7$ satisfies $k > 1$. Check: the distance between $(3, 7)$ and $(11, 1)$ is $\\sqrt{8^{2} + 6^{2}} = \\sqrt{100} = 10$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): comes from the other root, $1 - k = 6$; it satisfies the distance equation but not the condition $k > 1$.\n* Choice B ($3$): adds the coordinate differences instead of their squares, solving $8 + (k - 1) = 10$.\n* Choice C ($6$): solves $(k - 1)^{2} = 36$ and reports $k - 1 = 6$ rather than $k$.\n\n**Test Day Takeaway:** A distance equation with an unknown coordinate has two roots. The condition in the question is there to choose between them, so apply it last.",
  skills: ["coordinate-geometry"]
},
{
  id: 14,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A right circular cylinder has a volume of $324\\pi$ cubic centimeters. The circumference of the base of the cylinder is $12\\pi$ centimeters. What is the height, in centimeters, of the cylinder?",
  correctAnswer: "9",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is 9.**\n\n**The Fast Way (~35s):** $2\\pi r = 12\\pi$ gives $r = 6$, so the base area is $36\\pi$; then $\\frac{324\\pi}{36\\pi} = 9$.\n\n**The Full Solution:**\nStep 1: Find the radius from the circumference: $2\\pi r = 12\\pi$, so $r = 6$ centimeters.\nStep 2: Find the area of the base: $\\pi r^{2} = \\pi(6)^{2} = 36\\pi$ square centimeters.\nStep 3: Use $V = \\pi r^{2}h$: $324\\pi = 36\\pi h$, so $h = 9$ centimeters. Check: $\\pi(6)^{2}(9) = 324\\pi$ ✓\n\n**Common Mistakes:**\n* $27$: divides the volume by the circumference, $\\frac{324\\pi}{12\\pi}$, using the distance around the base in place of its area.\n* $54$: finds $r = 6$ but uses $V = \\pi rh$ instead of $\\pi r^{2}h$, solving $324\\pi = 6\\pi h$.\n* $2.25$: treats the circumference as $\\pi r$ instead of $2\\pi r$, so $r = 12$ and the base area becomes $144\\pi$.\n\n**Test Day Takeaway:** The volume of a cylinder is the base area times the height, so a circumference must be turned into a radius and then squared before you can use it. Keep track of whether you hold $r$, $2\\pi r$, or $\\pi r^{2}$.",
  skills: ["volume-prism"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = a(x - 4) + 9$, where $a$ is a constant. If $f(10) = 33$, what is the value of $x$ for which $f(x) = -3$?",
  choices: [
    // distractor: evaluates f(-3) = 4(-3 - 4) + 9 instead of solving f(x) = -3
    { id: "A", text: "$-19$" },
    // distractor: treats the output -3 as the input, reporting the number already given
    { id: "B", text: "$-3$" },
    { id: "C", text: "$1$" },
    // distractor: mishandles the sign in 4(x - 4) = -12, solving x - 4 = 3 to get x = 7
    { id: "D", text: "$7$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Solve $f(a) = c$**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** $f(10) = 6a + 9 = 33$ gives $a = 4$; then $4(x - 4) + 9 = -3$ gives $x - 4 = -3$, so $x = 1$.\n\n**The Full Solution:**\nStep 1: Find the constant: $f(10) = a(10 - 4) + 9 = 6a + 9$. Setting $6a + 9 = 33$ gives $6a = 24$, so $a = 4$.\nStep 2: Write the equation the question asks about: $f(x) = -3$ means $4(x - 4) + 9 = -3$.\nStep 3: Subtract $9$: $4(x - 4) = -12$, so $x - 4 = -3$ and $x = 1$. Check: $f(1) = 4(1 - 4) + 9 = -12 + 9 = -3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-19$): substitutes $-3$ for $x$ and evaluates, $4(-3 - 4) + 9 = -19$. That is $f(-3)$, the reverse of what is asked.\n* Choice B ($-3$): reports the given output as the input; $-3$ is the value of $f(x)$, not of $x$.\n* Choice D ($7$): loses the negative sign in $4(x - 4) = -12$, solving $x - 4 = 3$.\n\n**Test Day Takeaway:** Find the constant first, then solve. Before answering, check whether the given number is an input or an output; the wrong choices are built from swapping the two.",
  skills: ["function-notation"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table shows the number of identical printers used, the number of pages printed, and the time taken for three print jobs. All of the printers print at the same constant rate. How many minutes would it take $9$ of these printers to print $1{,}620$ pages?",
  questionTable: { headers: ["Job", "Printers used", "Pages printed", "Time (minutes)"], rows: [["1", "4", "480", "4"], ["2", "6", "720", "4"], ["3", "5", "900", "6"]] },
  choices: [
    // distractor: treats 720 / 6 = 120 as pages per printer per minute, ignoring that job 2 took 4 minutes
    { id: "A", text: "$1.5$" },
    { id: "B", text: "$6$" },
    // distractor: uses job 2's combined rate of 180 pages per minute without adjusting from 6 printers to 9
    { id: "C", text: "$9$" },
    // distractor: uses job 1's combined rate of 120 pages per minute without adjusting from 4 printers to 9
    { id: "D", text: "$13.5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice B is correct.**\n\n**The Fast Way (~50s):** Each printer prints $\\frac{480}{4 \\cdot 4} = 30$ pages per minute, so $9$ printers print $270$ pages per minute, and $\\frac{1{,}620}{270} = 6$ minutes.\n\n**The Full Solution:**\nStep 1: Reduce each job to pages per printer per minute: job 1 gives $\\frac{480}{(4)(4)} = 30$, job 2 gives $\\frac{720}{(6)(4)} = 30$, and job 3 gives $\\frac{900}{(5)(6)} = 30$.\nStep 2: Nine printers print $9 \\times 30 = 270$ pages per minute.\nStep 3: Divide: $\\frac{1{,}620}{270} = 6$ minutes. Check: $9$ printers $\\times$ $6$ minutes $\\times$ $30$ pages $= 1{,}620$ pages ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.5$): computes $\\frac{720}{6} = 120$ and treats it as pages per printer per minute, ignoring the $4$ minutes job 2 took; that rate is four times too large and gives $\\frac{1{,}620}{9(120)} = 1.5$.\n* Choice C ($9$): uses job 2's combined rate, $\\frac{720}{4} = 180$ pages per minute, without adjusting from $6$ printers to $9$.\n* Choice D ($13.5$): uses job 1's combined rate, $\\frac{480}{4} = 120$ pages per minute, again without adjusting the number of printers.\n\n**Test Day Takeaway:** When two quantities vary in a table, reduce it to a rate per unit of both, here pages per printer per minute. A rate that accounts for only one of them cannot be applied to a different number of printers.",
  skills: ["unit-conversion"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$7(2x - 5) + c = 14x + 9$\nIn the given equation, $c$ is a constant. If the equation has infinitely many solutions, what is the value of $c$?",
  choices: [
    // distractor: solves -35 + c = 9 but reports the negative, writing c = -(9 + 35)
    { id: "A", text: "$-44$" },
    // distractor: combines -35 and 9 to get -26 instead of solving -35 + c = 9 for c
    { id: "B", text: "$-26$" },
    // distractor: sets c equal to the constant on the right side without accounting for the -35 from distributing
    { id: "C", text: "$9$" },
    { id: "D", text: "$44$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Distributing gives $14x - 35 + c = 14x + 9$; for infinitely many solutions the constants must match, so $-35 + c = 9$ and $c = 44$.\n\n**The Full Solution:**\nStep 1: Distribute on the left side: $7(2x - 5) + c = 14x - 35 + c$.\nStep 2: A linear equation has infinitely many solutions when both sides are the same expression. The $x$-terms already match ($14x$ on each side), so the constants must match: $-35 + c = 9$.\nStep 3: Add $35$ to both sides: $c = 44$. Check: $7(2x - 5) + 44 = 14x - 35 + 44 = 14x + 9$, the right side exactly ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-44$): does the arithmetic correctly but flips the sign at the end.\n* Choice B ($-26$): computes $-35 + 9$, combining the two constants instead of solving $-35 + c = 9$.\n* Choice C ($9$): sets $c$ equal to the constant on the right side, forgetting the $-35$ that distributing $7$ adds to the left side.\n\n**Test Day Takeaway:** Infinitely many solutions means the two sides are identical: match $x$-terms to $x$-terms and constants to constants. Distribute completely first, because the constant hidden in the parentheses decides the answer.",
  skills: ["combining-like-terms"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A mixture of nuts contains peanuts, almonds, and cashews in the ratio $7:4:3$ by weight. The mixture contains $240$ grams more peanuts than cashews. What is the total weight, in grams, of the mixture?",
  correctAnswer: "840",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**The correct answer is 840.**\n\n**The Fast Way (~30s):** Peanuts exceed cashews by $7 - 3 = 4$ parts, so one part is $\\frac{240}{4} = 60$ grams, and the $14$ parts weigh $840$ grams.\n\n**The Full Solution:**\nStep 1: The mixture has $7$ parts peanuts and $3$ parts cashews, a difference of $4$ parts.\nStep 2: Those $4$ parts weigh $240$ grams, so one part weighs $\\frac{240}{4} = 60$ grams.\nStep 3: The mixture has $7 + 4 + 3 = 14$ parts, so it weighs $14(60) = 840$ grams. Check: peanuts weigh $7(60) = 420$ grams and cashews weigh $3(60) = 180$ grams, and $420 - 180 = 240$ ✓\n\n**Common Mistakes:**\n* $60$: finds the weight of one part and stops.\n* $420$: reports the weight of the peanuts, $7(60)$, instead of the whole mixture.\n* $3{,}360$: treats the $240$-gram difference as one part, computing $14(240)$ instead of first dividing by the $4$-part difference.\n\n**Test Day Takeaway:** In a parts-ratio question, turn every given quantity into parts first. A difference between two ingredients is a difference of parts, not the size of one part.",
  skills: ["word-problem-to-equation"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "A school has $240$ students: $156$ walk to school, $36$ ride a bike, and the rest take a bus. One of these students will be selected at random. What is the probability of selecting a student who takes a bus?",
  choices: [
    // distractor: uses the students who ride a bike, 36/240, instead of those who take a bus
    { id: "A", text: "$\\frac{3}{20}$" },
    { id: "B", text: "$\\frac{1}{5}$" },
    // distractor: uses the students who walk, 156/240, instead of those who take a bus
    { id: "C", text: "$\\frac{13}{20}$" },
    // distractor: finds the complement, 192/240, the probability that the student does NOT take a bus
    { id: "D", text: "$\\frac{4}{5}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Basic Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** $240 - 156 - 36 = 48$ students take a bus, and $\\frac{48}{240} = \\frac{1}{5}$.\n\n**The Full Solution:**\nStep 1: Find the number of students who take a bus. \"The rest\" means everyone not already counted: $240 - 156 - 36 = 48$.\nStep 2: The student is selected from all $240$ students, so the denominator is $240$.\nStep 3: Form and reduce the ratio: $\\frac{48}{240} = \\frac{1}{5}$. Check: $\\frac{156}{240} + \\frac{36}{240} + \\frac{48}{240} = \\frac{240}{240} = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{20}$): uses the $36$ students who ride a bike, $\\frac{36}{240}$.\n* Choice C ($\\frac{13}{20}$): uses the $156$ students who walk, $\\frac{156}{240}$.\n* Choice D ($\\frac{4}{5}$): computes $\\frac{156 + 36}{240} = \\frac{192}{240}$, the probability that the student does not take a bus.\n\n**Test Day Takeaway:** When a question names some groups and then says \"the rest,\" the count you need comes from subtraction, not from a number printed in the question. Find it, then check that the groups add back to the total.",
  skills: ["probability-basics"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $N$ defined by $N(t) = 96(2)^{\\frac{t}{8}}$ models the number of bacteria in a sample $t$ hours after the sample was collected. According to the model, the number of bacteria increases by what percent every $24$ hours?",
  choices: [
    // distractor: treats the 100% increase every 8 hours as additive, adding it three times to get 300%
    { id: "A", text: "$300\\%$" },
    // distractor: multiplies the base 2 by the 3 eight-hour periods to get a growth factor of 6, which is a 500% increase
    { id: "B", text: "$500\\%$" },
    { id: "C", text: "$700\\%$" },
    // distractor: finds the growth factor 8 but reports it as 800% without subtracting the original 100%
    { id: "D", text: "$800\\%$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** $24$ hours is three $8$-hour periods, so the number of bacteria is multiplied by $2^{3} = 8$; becoming $8$ times as large is a $700\\%$ increase.\n\n**The Full Solution:**\nStep 1: Because the exponent is $\\frac{t}{8}$, it increases by $1$ every $8$ hours, so the number of bacteria doubles every $8$ hours.\nStep 2: Over $24$ hours the exponent increases by $\\frac{24}{8} = 3$, so the number of bacteria is multiplied by $2^{3} = 8$.\nStep 3: A quantity that becomes $8$ times as large increases by $8 - 1 = 7$ times its original value, which is $700\\%$. Check: $N(0) = 96$ and $N(24) = 96(2)^{3} = 768$, and $\\frac{768 - 96}{96} = 7$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($300\\%$): adds the $100\\%$ increase for each of the three periods. Percent increases compound; they do not add.\n* Choice B ($500\\%$): multiplies the base $2$ by the $3$ periods to get a factor of $6$. The number of periods belongs in the exponent.\n* Choice D ($800\\%$): finds the correct factor, $8$, but reports it as the percent increase without subtracting the original $100\\%$.\n\n**Test Day Takeaway:** In $a(b)^{\\frac{t}{k}}$, the quantity is multiplied by $b$ every $k$ units of time, so over $n$ periods the factor is $b^{n}$. A growth factor of $F$ is an increase of $(F - 1) \\times 100\\%$.",
  skills: ["exponential-growth-decay"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  question: "In the right triangle shown, what is the perimeter of the triangle?",
  diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [15, 0], [15, 8]], sideLabels: ["x + 7", "x", "17"], rightAngleVertex: 1 } },
  choices: [
    // distractor: finds x = 8 but adds x, 7, and 17 instead of x, x + 7, and 17
    { id: "A", text: "$32$" },
    // distractor: assumes the two legs add to the hypotenuse, solving x + (x + 7) = 17 for x = 5 and adding 5 + 12 + 17
    { id: "B", text: "$34$" },
    { id: "C", text: "$40$" },
    // distractor: uses the magnitude of the rejected root x = -15, adding 15 + 22 + 17
    { id: "D", text: "$54$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice C is correct.**\n\n**The Fast Way (~50s):** $x^{2} + (x + 7)^{2} = 17^{2}$ simplifies to $x^{2} + 7x - 120 = 0$, so $x = 8$; the sides are $8$, $15$, and $17$, and the perimeter is $40$.\n\n**The Full Solution:**\nStep 1: Apply the Pythagorean theorem to the legs $x$ and $x + 7$ and the hypotenuse $17$: $x^{2} + (x + 7)^{2} = 289$, so $2x^{2} + 14x + 49 = 289$, or $2x^{2} + 14x - 240 = 0$.\nStep 2: Divide by $2$: $x^{2} + 7x - 120 = 0$, which factors as $(x + 15)(x - 8) = 0$. A length must be positive, so $x = 8$.\nStep 3: The legs are $8$ and $8 + 7 = 15$, and the hypotenuse is $17$, so the perimeter is $8 + 15 + 17 = 40$. Check: $8^{2} + 15^{2} = 64 + 225 = 289 = 17^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($32$): finds $x = 8$ but adds $8 + 7 + 17$, treating the $7$ as a side instead of part of the leg $x + 7$.\n* Choice B ($34$): assumes the legs add to the hypotenuse, solving $x + (x + 7) = 17$ for $x = 5$ and adding $5 + 12 + 17$. Only the squares of the legs add to the square of the hypotenuse.\n* Choice D ($54$): uses the rejected root as a length, taking $x = 15$ and $x + 7 = 22$ to get $15 + 22 + 17$.\n\n**Test Day Takeaway:** When a right triangle's sides are expressions in one variable, the Pythagorean theorem gives a quadratic; discard the negative root, then reread what the question asks for, since the value of $x$ is rarely the answer.",
  skills: ["pythagorean-theorem"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$x^{2} + y^{2} - 10x + 12y = c$\nIn the xy-plane, the graph of the given equation is a circle with radius $8$, where $c$ is a constant. What is the value of $c$?",
  choices: [
    // distractor: uses the radius 8 where r^2 belongs, solving c + 61 = 8
    { id: "A", text: "$-53$" },
    { id: "B", text: "$3$" },
    // distractor: subtracts 36 instead of adding it when completing the square on the y-terms, solving c + 25 - 36 = 64
    { id: "C", text: "$75$" },
    // distractor: adds 61 to 64 instead of subtracting, giving c = 64 + 61
    { id: "D", text: "$125$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** Completing both squares adds $25$ and $36$ to each side, so $c + 61 = 8^{2} = 64$ and $c = 3$.\n\n**The Full Solution:**\nStep 1: Complete the square in $x$: half of $-10$ is $-5$, and $(-5)^{2} = 25$, so $x^{2} - 10x = (x - 5)^{2} - 25$.\nStep 2: Complete the square in $y$: half of $12$ is $6$, and $6^{2} = 36$, so $y^{2} + 12y = (y + 6)^{2} - 36$.\nStep 3: The equation becomes $(x - 5)^{2} + (y + 6)^{2} = c + 25 + 36 = c + 61$. The right side equals $r^{2} = 64$, so $c = 64 - 61 = 3$. Check: $(x - 5)^{2} + (y + 6)^{2} = 64$ expands to $x^{2} + y^{2} - 10x + 12y + 61 = 64$, or $x^{2} + y^{2} - 10x + 12y = 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-53$): uses the radius itself where $r^{2}$ belongs, solving $c + 61 = 8$.\n* Choice C ($75$): subtracts $36$ instead of adding it for the $y$-terms, solving $c + 25 - 36 = 64$.\n* Choice D ($125$): moves the $61$ the wrong way, computing $64 + 61$ instead of $64 - 61$.\n\n**Test Day Takeaway:** Completing the square adds $\\left(\\frac{b}{2}\\right)^{2}$ for each variable to both sides, so the constant in the general form equals $r^{2}$ minus those additions. Square the radius before you compare.",
  skills: ["circle-equation"]
}
      ]
    }
  ]
};

export default practiceTest7;
