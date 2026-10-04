// Practice Test 11 - SAT Math
// v2 freshness rebuild (2026-09-07): every slot re-patterned and re-authored against the seen-corpus gate — docs/TEST_RECREATION_V2_SPEC.md
// 2 Modules, 22 questions each (44 total)
// Official-calibration recreation (2026-09-01): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md).
// Slot metadata (id/type/difficulty/band/skills/pattern) frozen from the
// 2026-06 blueprint: M1 5E/9M/8H; M2 wavy T11-unique flow 3E/7M/12H
// (easy [2,5,10] / medium [1,3,4,7,9,13,18] / hard elsewhere).
// Figure density at official ~20%: M1 carries 4 diagram items, M2 carries 4.
// Numeric MC choices sorted ascending (official convention).
// Scenario palette (test-11 exclusive): ropes courses, bike-share docks,
// seed-drill calibration, ice-rink resurfacing, hotel linen laundry,
// elevator load limits, camera-equipment rental, vending machines,
// water-park slides, community-orchestra ticketing.

export const practiceTest11 = {
  id: "practice-test-11",
  title: "Practice Test 11",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
// Practice Test 11 — Math Module 1
// 22 questions: Easy (1-5), Medium (6-14), Hard (15-22)

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Each ordered pair $(x, y)$ in the table is a solution to both equations in a system of two linear equations. How many solutions does the system have?",
  questionTable: { headers: ["$x$", "$y$"], rows: [["$2$", "$9$"], ["$4$", "$5$"], ["$5$", "$3$"]] },
  choices: [
    // distractor: treats a system whose graphs coincide as having no solution
    { id: "A", text: "Zero" },
    // distractor: assumes every system of two linear equations has exactly one solution
    { id: "B", text: "Exactly one" },
    // distractor: counts only the three ordered pairs shown in the table
    { id: "C", text: "Exactly three" },
    { id: "D", text: "Infinitely many" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Exactly one line passes through two distinct points, so two lines that share the three points in the table are the same line. Every point on that line is a solution to both equations, so the system has infinitely many solutions.\n\n**The Full Solution:**\nStep 1: Each equation in the system is linear, so the graph of each equation is a line, and all three pairs $(2, 9)$, $(4, 5)$, and $(5, 3)$ lie on both lines.\nStep 2: Both lines contain the two distinct points $(2, 9)$ and $(4, 5)$, and only one line passes through two distinct points, so the two lines are the same line. The table agrees: the slope from $(2, 9)$ to $(4, 5)$ is $\\frac{5 - 9}{4 - 2} = -2$, and the slope from $(4, 5)$ to $(5, 3)$ is $\\frac{3 - 5}{5 - 4} = -2$.\nStep 3: Two equations whose graphs are the same line share every point of that line, so the system has infinitely many solutions. Check with the shared line $y = -2x + 13$: $-2(2) + 13 = 9$, $-2(4) + 13 = 5$, and $-2(5) + 13 = 3$, matching all three rows ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (Zero): a system of two linear equations has no solution only when its lines are parallel and distinct, and these lines share three points.\n* Choice B (Exactly one): this is the usual case, but two distinct lines can intersect at most once, and these graphs share three different points.\n* Choice C (Exactly three): this counts only the pairs shown in the table; every other point on the shared line is also a solution.\n\n**Test Day Takeaway:** If two linear equations share two or more solutions, their graphs are the same line, so the system has infinitely many solutions, not just the ones listed.",
  skills: ["system-solution-types", "infinite-solutions-condition"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Data set A consists of the nine values $14$, $15$, $17$, $18$, $18$, $20$, $22$, $23$, and $91$. Data set B is created by removing $91$ from data set A. Which of the following correctly compares the means and the medians of the two data sets?",
  choices: [
    { id: "A", text: "The mean of data set B is less than the mean of data set A, and the medians are equal." },
    // distractor: reverses the roles: says the outlier moves the median rather than the mean
    { id: "B", text: "The mean of data set B is equal to the mean of data set A, and the median of data set B is less." },
    // distractor: assumes removing any value must move the median as well as the mean
    { id: "C", text: "The mean and the median of data set B are both less than those of data set A." },
    // distractor: assumes one value out of nine cannot change either measure
    { id: "D", text: "The means of data sets A and B are equal, and the medians are equal." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Outlier Effect**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The mean uses every value, so removing the far-out value $91$ lowers it. The median depends only on the middle of the ordered list, and the middle values are $18$ in both data sets.\n\n**The Full Solution:**\nStep 1: Data set A has $9$ values with sum $238$, so its mean is $\\frac{238}{9} \\approx 26.4$; its median is the $5$th value, $18$.\nStep 2: Data set B has $8$ values with sum $238 - 91 = 147$, so its mean is $\\frac{147}{8} \\approx 18.4$, which is less than the mean of data set A.\nStep 3: The median of data set B is the average of its $4$th and $5$th values, $\\frac{18 + 18}{2} = 18$, the same as the median of data set A. Check: $18.4 < 26.4$ and $18 = 18$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: this reverses the roles of the two measures; an extreme value pulls the mean, not the median.\n* Choice C: this assumes removing a value must also shift the median, but the two middle values of data set B are both $18$.\n* Choice D: this assumes one value out of nine is too few to matter, but $91$ is far from the other values and pulls the mean up by about $8$.\n\n**Test Day Takeaway:** Removing an outlier moves the mean toward the rest of the data; the median moves little or not at all, so check the middle values directly.",
  skills: ["calculate-mean", "find-median"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Renting a kayak costs \\$15 plus \\$9 per hour. The total cost of renting a kayak for $h$ hours is \\$69. Which equation represents this situation?",
  choices: [
    // distractor: swaps the one-time charge with the hourly rate
    { id: "A", text: "$15h + 9 = 69$" },
    // distractor: adds the one-time charge into the hourly rate and charges it every hour
    { id: "B", text: "$24h = 69$" },
    // distractor: subtracts the one-time charge instead of adding it
    { id: "C", text: "$9h - 15 = 69$" },
    { id: "D", text: "$9h + 15 = 69$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Linear Cost Setup**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The charge that repeats each hour multiplies $h$, and the one-time charge stands alone, so $9h + 15 = 69$.\n\n**The Full Solution:**\nStep 1: The kayak costs \\$9 for each hour, so $h$ hours cost $9h$ dollars.\nStep 2: The \\$15 charge is paid once, no matter how many hours, so the total cost is $9h + 15$ dollars.\nStep 3: The total cost is \\$69, so $9h + 15 = 69$. Check: this gives $9h = 54$, or $h = 6$, and $9(6) + 15 = 69$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($15h + 9 = 69$): swaps the two charges, multiplying the one-time \\$15 by the number of hours.\n* Choice B ($24h = 69$): adds the one-time charge to the hourly rate, which charges the \\$15 every hour.\n* Choice C ($9h - 15 = 69$): subtracts the one-time charge instead of adding it to the total.\n\n**Test Day Takeaway:** In a cost equation, the per-unit rate is the coefficient of the variable and the one-time charge is the constant term.",
  skills: ["word-problem-to-equation"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$|2x - 7| = 11$\nWhat is the positive solution to the given equation?",
  choices: [
    // distractor: reports the negative solution, from the branch 2x - 7 = -11
    { id: "A", text: "$-2$" },
    // distractor: subtracts 7 instead of adding it, solving 2x = 11 - 7 = 4
    { id: "B", text: "$2$" },
    { id: "C", text: "$9$" },
    // distractor: stops at 2x = 18 and reports 2x instead of x
    { id: "D", text: "$18$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The expression inside the absolute value equals $11$ or $-11$, so $2x = 18$ or $2x = -4$, giving $x = 9$ or $x = -2$. The positive solution is $9$.\n\n**The Full Solution:**\nStep 1: An absolute value equals $11$ when the expression inside equals $11$ or $-11$: $2x - 7 = 11$ or $2x - 7 = -11$.\nStep 2: Add $7$ to both sides of each equation: $2x = 18$ or $2x = -4$, so $x = 9$ or $x = -2$.\nStep 3: The positive solution is $9$. Check: $|2(9) - 7| = |11| = 11$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): this is the other solution of the equation, which is negative.\n* Choice B ($2$): subtracts $7$ instead of adding it, solving $2x = 11 - 7 = 4$.\n* Choice D ($18$): stops at $2x = 18$ and reports the value of $2x$ instead of $x$.\n\n**Test Day Takeaway:** Split an absolute value equation into two linear equations, solve both, and then pick the solution the question asks for.",
  skills: ["combining-like-terms"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "In the $xy$-plane, line $k$ is parallel to the line $5x - 2y = 18$ and passes through the point $(4, 5)$. What is the $y$-coordinate of the $y$-intercept of line $k$?",
  choices: [
    // distractor: keeps the given line's constant 18 and reports that line's y-intercept
    { id: "A", text: "$-9$" },
    { id: "B", text: "$-5$" },
    // distractor: divides 10 by -2 but keeps the result positive
    { id: "C", text: "$5$" },
    // distractor: reports the constant term of the new equation instead of the y-coordinate
    { id: "D", text: "$10$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Parallel Lines and Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** A line parallel to $5x - 2y = 18$ can be written as $5x - 2y = c$, and $(4, 5)$ gives $c = 5(4) - 2(5) = 10$. Setting $x = 0$ gives $-2y = 10$, so $y = -5$.\n\n**The Full Solution:**\nStep 1: Parallel lines have the same slope, so line $k$ has the same $x$- and $y$-coefficients as $5x - 2y = 18$ and differs only in the constant: $5x - 2y = c$.\nStep 2: Line $k$ passes through $(4, 5)$, so $c = 5(4) - 2(5) = 20 - 10 = 10$, and line $k$ is $5x - 2y = 10$.\nStep 3: The $y$-intercept has $x = 0$: $-2y = 10$, so $y = -5$. Check: in slope-intercept form, line $k$ is $y = \\frac{5}{2}x - 5$, which has slope $\\frac{5}{2}$ like the given line, and $\\frac{5}{2}(4) - 5 = 5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): keeps the constant $18$ and gives the $y$-intercept of the given line, $-2y = 18$, instead of line $k$.\n* Choice C ($5$): divides $10$ by $-2$ but drops the negative sign.\n* Choice D ($10$): reports the constant $c$ in $5x - 2y = 10$ instead of solving for $y$ when $x = 0$.\n\n**Test Day Takeaway:** For a line parallel to $Ax + By = C$, keep $A$ and $B$, find the new constant from the given point, and then solve for the intercept you need.",
  skills: ["writing-parallel-equation"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The table shows the storage capacity, in terabytes, of each of three types of hard drives. A computer system has $12$ type A drives, $8$ type B drives, and $n$ type C drives, with a total capacity of $232$ terabytes. What is the value of $n$?",
  questionTable: { headers: ["Type of drive", "Capacity (terabytes)"], rows: [["A", "$4$"], ["B", "$10$"], ["C", "$8$"]] },
  correctAnswer: "13",
  explanation: "**SAT Pattern: Word-to-Expression Translation**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~30s):** The type A and type B drives hold $12(4) + 8(10) = 128$ terabytes, which leaves $232 - 128 = 104$ terabytes for the type C drives at $8$ terabytes each, so $n = \\frac{104}{8} = 13$.\n\n**The Full Solution:**\nStep 1: Read each capacity from the table: type A is $4$ terabytes, type B is $10$ terabytes, and type C is $8$ terabytes. The $12$ type A drives hold $12(4) = 48$ terabytes, and the $8$ type B drives hold $8(10) = 80$ terabytes.\nStep 2: The $n$ type C drives hold $8n$ terabytes, so $48 + 80 + 8n = 232$, which gives $8n = 104$.\nStep 3: Divide: $n = \\frac{104}{8} = 13$. Check: $48 + 80 + 8(13) = 48 + 80 + 104 = 232$ ✓\n\n**Common Mistakes:**\n* $26$: divides the remaining $104$ terabytes by type A's capacity, $4$, instead of type C's capacity, $8$.\n* $10.4$: divides the remaining $104$ terabytes by type B's capacity, $10$; a number of drives must be a whole number.\n* $23$: leaves out the type B drives, computing $\\frac{232 - 48}{8} = 23$.\n\n**Test Day Takeaway:** Turn each row of the table into count times capacity, subtract the known totals, and divide what is left by the unknown type's capacity.",
  skills: ["word-problem-to-equation"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "medium",
  band: 4,
  question: "Data set B is created by multiplying each value in data set A by $3$. Which of the following correctly compares the means and the standard deviations of the two data sets?",
  choices: [
    { id: "A", text: "The mean and the standard deviation of data set B are both $3$ times those of data set A." },
    // distractor: treats spread as unaffected by a multiplier (that is what adding a constant does)
    { id: "B", text: "The mean of data set B is $3$ times the mean of data set A, and the standard deviations are equal." },
    // distractor: swaps the two measures, leaving the mean alone instead of the spread
    { id: "C", text: "The standard deviation of data set B is $3$ times that of data set A, and the means are equal." },
    // distractor: assumes a common factor has no effect on either summary measure
    { id: "D", text: "The means of the two data sets are equal, and the standard deviations are equal." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Scaling a Data Set by a Constant**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Multiplying every value by $3$ multiplies the mean by $3$ and also multiplies every distance from the mean by $3$, so both the mean and the standard deviation are $3$ times as large.\n\n**The Full Solution:**\nStep 1: If data set A has values $a_{1}, a_{2}, \\ldots, a_{n}$ with mean $m$, then data set B has values $3a_{1}, 3a_{2}, \\ldots, 3a_{n}$, and its mean is $\\frac{3a_{1} + 3a_{2} + \\cdots + 3a_{n}}{n} = 3m$.\nStep 2: Each value of data set B is $3a_{i} - 3m = 3(a_{i} - m)$ from the mean of B, so every distance from the mean is $3$ times the corresponding distance in data set A. The standard deviation measures the typical distance from the mean, so it is also multiplied by $3$.\nStep 3: Both measures of data set B are $3$ times those of data set A. Check with the values $1$, $2$, $3$: the mean is $2$ and the distances from the mean are $1$, $0$, $1$; after multiplying by $3$, the values $3$, $6$, $9$ have mean $6$ and distances $3$, $0$, $3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: treats the standard deviation as unaffected, which is what happens when the same number is added to every value, not when every value is multiplied.\n* Choice C: switches the two effects, leaving the mean unchanged even though every value is $3$ times as large.\n* Choice D: assumes a common factor has no effect on either measure.\n\n**Test Day Takeaway:** Multiplying every value by $k$ multiplies both the mean and the standard deviation by $k$; adding $k$ to every value changes the mean but not the standard deviation.",
  skills: ["data-analysis"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$2x^{2} - 12x + c = 0$\nIn the given equation, $c$ is an integer. What is the least possible value of $c$ for which the equation has no real solutions?",
  choices: [
    // distractor: reverses the inequality and gives the greatest c with two real solutions
    { id: "A", text: "$17$" },
    // distractor: uses discriminant <= 0, allowing the one-solution case c = 18
    { id: "B", text: "$18$" },
    { id: "C", text: "$19$" },
    // distractor: omits the leading coefficient a = 2, solving 144 - 4c < 0
    { id: "D", text: "$37$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** No real solutions means the discriminant is negative: $(-12)^{2} - 4(2)(c) < 0$, so $144 < 8c$ and $c > 18$. The least integer greater than $18$ is $19$.\n\n**The Full Solution:**\nStep 1: A quadratic equation $ax^{2} + bx + c = 0$ has no real solutions exactly when $b^{2} - 4ac < 0$. Here $a = 2$, $b = -12$, and the constant term is $c$.\nStep 2: Write the condition: $(-12)^{2} - 4(2)(c) < 0$, so $144 - 8c < 0$, or $c > 18$.\nStep 3: The least integer greater than $18$ is $19$. Check: $c = 19$ gives $144 - 152 = -8 < 0$, so there are no real solutions, while $c = 18$ gives $144 - 144 = 0$, which yields the solution $x = 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($17$): reverses the inequality; $17$ is the greatest integer for which the equation has two distinct real solutions.\n* Choice B ($18$): allows the discriminant to equal $0$, but then the equation has one real solution, $x = 3$.\n* Choice D ($37$): leaves out the leading coefficient $2$, solving $144 - 4c < 0$ to get $c > 36$.\n\n**Test Day Takeaway:** Translate \"no real solutions\" into a strict inequality on the discriminant, and include the leading coefficient in $4ac$; the boundary value itself gives one solution, not zero.",
  skills: ["discriminant-analysis"]
},
{
  id: 9,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "Of the $n$ students at a school, $45\\%$ are in the band. If a band member is selected at random, the probability of selecting a student who plays a brass instrument is $0.2$. There are $27$ band members who play a brass instrument. What is the value of $n$?",
  correctAnswer: "300",
  explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**The correct answer is $300$.**\n\n**The Fast Way (~35s):** The brass players are $0.2$ of the $0.45n$ band members, so $0.2(0.45n) = 0.09n = 27$ and $n = \\frac{27}{0.09} = 300$.\n\n**The Full Solution:**\nStep 1: Since $45\\%$ of the $n$ students are in the band, the band has $0.45n$ members.\nStep 2: The probability $0.2$ is taken among band members only, so the number of band members who play a brass instrument is $0.2(0.45n) = 0.09n$.\nStep 3: Set this equal to $27$: $0.09n = 27$, so $n = 300$. Check: the band has $0.45(300) = 135$ members, and $\\frac{27}{135} = 0.2$ ✓\n\n**Common Mistakes:**\n* $135$: stops at $\\frac{27}{0.2} = 135$, which is the number of band members, not the number of students at the school.\n* $60$: divides $27$ by $0.45$ and never uses the probability $0.2$.\n\n**Test Day Takeaway:** A conditional probability applies only to its group; find the group's size first, multiply by the probability, and then set the result equal to the given count.",
  skills: ["conditional-probability"]
},
{
  id: 10,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A rectangle has a length of $40$ units. If its width is increased by $w$ units, its area increases from $1{,}120$ to $1{,}400$ square units. What is the value of $w$?",
  correctAnswer: "7",
  explanation: "**SAT Pattern: Rectangle Area**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~25s):** The length stays $40$, so the extra area is $40w$: $40w = 1{,}400 - 1{,}120 = 280$, and $w = 7$.\n\n**The Full Solution:**\nStep 1: The area of a rectangle is length times width, so the original width is $\\frac{1{,}120}{40} = 28$ units.\nStep 2: The new width is $\\frac{1{,}400}{40} = 35$ units.\nStep 3: The width increased by $w = 35 - 28 = 7$ units. Check: $40(28 + 7) = 40(35) = 1{,}400$ ✓\n\n**Common Mistakes:**\n* $35$: reports the new width instead of the increase in width.\n* $280$: reports the increase in area, $1{,}400 - 1{,}120$, without dividing by the length.\n\n**Test Day Takeaway:** When one dimension of a rectangle is fixed, a change in area divided by that dimension gives the change in the other dimension.",
  skills: ["triangle-area"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The graph of line $\\ell$ is shown. A system of two linear equations consists of the equation of line $\\ell$ and the equation $6x + py = 21$, where $p$ is a constant. If the system has no solution, what is the value of $p$?",
  diagram: { type: "linearGraph", params: { slope: -2, yIntercept: 3, xRange: [-2, 6], yRange: [-9, 7], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 3], [2, -1]], label: "ℓ" } },
  choices: [
    // distractor: sets -6/p equal to positive 2, flipping the sign of the slope
    { id: "A", text: "$-3$" },
    // distractor: copies the y-coefficient of line l instead of scaling it
    { id: "B", text: "$1$" },
    { id: "C", text: "$3$" },
    // distractor: multiplies 6 by the slope's magnitude 2 instead of dividing
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Line $\\ell$ passes through $(0, 3)$ and $(2, -1)$, so its slope is $-2$. No solution means the lines are parallel and distinct, so $-\\frac{6}{p} = -2$ and $p = 3$.\n\n**The Full Solution:**\nStep 1: Read two points on line $\\ell$: $(0, 3)$ and $(2, -1)$. The slope is $\\frac{-1 - 3}{2 - 0} = -2$, so line $\\ell$ is $y = -2x + 3$, or $2x + y = 3$.\nStep 2: Solving $6x + py = 21$ for $y$ gives $y = -\\frac{6}{p}x + \\frac{21}{p}$, so its slope is $-\\frac{6}{p}$. A system of two linear equations has no solution when the lines are parallel and distinct, so $-\\frac{6}{p} = -2$ and $p = 3$.\nStep 3: With $p = 3$, the second equation is $6x + 3y = 21$, or $2x + y = 7$. Check: $2x + y$ equals $3$ on line $\\ell$ and $7$ on the second line, so no point is on both lines, and the system has no solution ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): sets $-\\frac{6}{p}$ equal to $2$ instead of $-2$; the line $6x - 3y = 21$ has slope $2$ and intersects line $\\ell$.\n* Choice B ($1$): copies the $y$-coefficient of $2x + y = 3$ without scaling it; the line $6x + y = 21$ has slope $-6$ and intersects line $\\ell$.\n* Choice D ($12$): multiplies $6$ by $2$ instead of dividing; the line $6x + 12y = 21$ has slope $-\\frac{1}{2}$ and intersects line $\\ell$.\n\n**Test Day Takeaway:** No solution means equal slopes and different intercepts: match the slopes to find the constant, then confirm the lines are not the same line.",
  skills: ["system-solution-types"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$f(x) = (x + 3)^{2} - 5$\nThe graph of $y = g(x)$ is the graph of $y = f(x)$ translated right $4$ units and up $2$ units in the $xy$-plane. Which equation defines $g$?",
  choices: [
    // distractor: shifts right correctly but subtracts 2 instead of adding it
    { id: "A", text: "$g(x) = (x - 1)^{2} - 7$" },
    { id: "B", text: "$g(x) = (x - 1)^{2} - 3$" },
    // distractor: moves the vertex to x = 4 instead of 4 units right of x = -3
    { id: "C", text: "$g(x) = (x - 4)^{2} - 3$" },
    // distractor: uses f(x + 4), translating left instead of right
    { id: "D", text: "$g(x) = (x + 7)^{2} - 3$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Translating right $4$ and up $2$ gives $g(x) = f(x - 4) + 2 = (x - 4 + 3)^{2} - 5 + 2 = (x - 1)^{2} - 3$.\n\n**The Full Solution:**\nStep 1: A translation right $4$ units replaces $x$ with $x - 4$, and a translation up $2$ units adds $2$ to the output, so $g(x) = f(x - 4) + 2$.\nStep 2: Substitute: $f(x - 4) = ((x - 4) + 3)^{2} - 5 = (x - 1)^{2} - 5$.\nStep 3: Add $2$: $g(x) = (x - 1)^{2} - 3$. Check with the vertex: the vertex of $f$ is $(-3, -5)$, and moving it right $4$ and up $2$ gives $(1, -3)$, the vertex of $g$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x - 1)^{2} - 7$): shifts the graph right correctly but subtracts $2$ instead of adding it, which moves the graph down.\n* Choice C ($(x - 4)^{2} - 3$): puts the vertex at $x = 4$ instead of moving it $4$ units right from $x = -3$.\n* Choice D ($(x + 7)^{2} - 3$): uses $f(x + 4)$, which translates the graph left $4$ units instead of right.\n\n**Test Day Takeaway:** For $f(x - h) + k$, a positive $h$ moves the graph right and a positive $k$ moves it up; track the vertex to check.",
  skills: ["function-transformations", "vertex-form"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The table shows the results of planting $180$ seeds of two types. One of the seeds that did not sprout will be selected at random. What is the probability of selecting a type A seed?",
  questionTable: { headers: ["Seed type", "Sprouted", "Did not sprout", "Total"], rows: [["Type A", "$72$", "$18$", "$90$"], ["Type B", "$54$", "$36$", "$90$"], ["Total", "$126$", "$54$", "$180$"]] },
  choices: [
    // distractor: divides by all 180 seeds instead of the 54 that did not sprout
    { id: "A", text: "$\\frac{18}{180}$" },
    // distractor: divides by the 90 type A seeds, which reverses the condition
    { id: "B", text: "$\\frac{18}{90}$" },
    // distractor: gives the probability that a seed did not sprout, ignoring the seed type
    { id: "C", text: "$\\frac{54}{180}$" },
    { id: "D", text: "$\\frac{18}{54}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** The selection is made only from the $54$ seeds that did not sprout, and $18$ of them are type A, so the probability is $\\frac{18}{54}$.\n\n**The Full Solution:**\nStep 1: The seed is selected from those that did not sprout, so the \"Did not sprout\" column total, $54$, is the denominator.\nStep 2: The type A row of that column shows $18$ seeds, so $18$ is the numerator.\nStep 3: The probability is $\\frac{18}{54}$, which equals $\\frac{1}{3}$. Check: the column entries $18$ and $36$ add to the column total $54$, and $\\frac{18}{54} + \\frac{36}{54} = 1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{18}{180}$): divides by all $180$ seeds instead of only the $54$ that did not sprout.\n* Choice B ($\\frac{18}{90}$): divides by the $90$ type A seeds, which gives the probability that a type A seed did not sprout.\n* Choice C ($\\frac{54}{180}$): gives the probability that a seed did not sprout, ignoring the seed type.\n\n**Test Day Takeaway:** In a two-way table, the group the selection is made from supplies the denominator; find that row or column total first.",
  skills: ["conditional-probability", "two-way-table"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$5x + 3y = 84$\n$3x + 5y = 76$\nThe solution to the given system of equations is $(x, y)$. What is the value of $x + y$?",
  choices: [
    // distractor: subtracts the equations, producing x - y instead of x + y
    { id: "A", text: "$4$" },
    { id: "B", text: "$20$" },
    // distractor: divides the combined total 160 by 4 instead of by 8
    { id: "C", text: "$40$" },
    // distractor: adds the equations and stops, reporting 8(x + y) instead of x + y
    { id: "D", text: "$160$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Adding the equations gives $8x + 8y = 160$, so $x + y = \\frac{160}{8} = 20$.\n\n**The Full Solution:**\nStep 1: The coefficients of $x$ and $y$ trade places between the equations, so adding them makes the coefficients equal: $(5x + 3y) + (3x + 5y) = 84 + 76$.\nStep 2: Combine like terms: $8x + 8y = 160$.\nStep 3: Divide both sides by $8$: $x + y = 20$. Check: subtracting the equations gives $2x - 2y = 8$, so $x - y = 4$; then $x = 12$ and $y = 8$, and $5(12) + 3(8) = 84$ and $3(12) + 5(8) = 76$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): subtracts the equations, which gives $x - y$, not $x + y$.\n* Choice C ($40$): divides $160$ by $4$ instead of by $8$.\n* Choice D ($160$): adds the equations and stops at the sum of the constants, which equals $8(x + y)$.\n\n**Test Day Takeaway:** When a question asks for a combination like $x + y$, look for a way to add or subtract the equations that produces it directly.",
  skills: ["elimination-method"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "A right circular cylinder has a diameter that is $\\frac{2}{3}$ of its height. The volume of the cylinder is $192\\pi$ cubic centimeters. What is the height, in centimeters, of the cylinder?",
  correctAnswer: "12",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~45s):** A diameter of $\\frac{2}{3}h$ makes the radius $\\frac{h}{3}$, so $\\pi\\left(\\frac{h}{3}\\right)^{2}h = \\frac{\\pi h^{3}}{9} = 192\\pi$. Then $h^{3} = 1{,}728$, and $h = 12$.\n\n**The Full Solution:**\nStep 1: Let $h$ be the height. The diameter is $\\frac{2}{3}h$, so the radius is half of that, $\\frac{1}{3}h$.\nStep 2: The volume of a cylinder is $\\pi r^{2}h$, so $\\pi\\left(\\frac{h}{3}\\right)^{2}h = \\frac{\\pi h^{3}}{9} = 192\\pi$, which gives $h^{3} = 9(192) = 1{,}728$.\nStep 3: Take the cube root: $h = 12$. Check: the radius is $4$, and $\\pi(4)^{2}(12) = 192\\pi$ ✓\n\n**Common Mistakes:**\n* $1728$: stops at $h^{3} = 1{,}728$ without taking the cube root.\n* About $7.56$: uses the diameter $\\frac{2}{3}h$ as the radius, which gives $\\frac{4\\pi h^{3}}{9} = 192\\pi$ and $h^{3} = 432$.\n\n**Test Day Takeaway:** When one dimension is given as a multiple of another, write the radius in terms of the height before substituting into $V = \\pi r^{2}h$, and halve a diameter first.",
  skills: ["volume-prism"]
},
{
  id: 16,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The bar graph shows the amount of storage, in gigabytes, used by four types of files on a computer. If $40\\%$ of the storage used by videos is deleted and nothing else changes, what percent of the remaining storage is used by photos?",
  diagram: { type: "barChart", params: { data: [{ label: "Videos", value: 300 }, { label: "Photos", value: 120 }, { label: "Music", value: 60 }, { label: "Documents", value: 120 }], xAxisLabel: "Type of file", yAxisLabel: "Storage used (gigabytes)", yMax: 360, yStep: 60 } },
  correctAnswer: "25",
  explanation: "**SAT Pattern: Percent of a Whole**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~40s):** Deleting $40\\%$ of the $300$ gigabytes of videos removes $120$ gigabytes, so $600 - 120 = 480$ gigabytes remain. Photos still use $120$ gigabytes, and $\\frac{120}{480} = 25\\%$.\n\n**The Full Solution:**\nStep 1: Read the bars: videos $300$ gigabytes, photos $120$ gigabytes, music $60$ gigabytes, and documents $120$ gigabytes, for a total of $600$ gigabytes.\nStep 2: Deleting $40\\%$ of the videos removes $0.40(300) = 120$ gigabytes, leaving $180$ gigabytes of videos and a new total of $180 + 120 + 60 + 120 = 480$ gigabytes.\nStep 3: Photos are unchanged at $120$ gigabytes, so they use $\\frac{120}{480} = 0.25$, or $25\\%$, of the remaining storage. Check: the four new shares are $37.5\\%$, $25\\%$, $12.5\\%$, and $25\\%$, which add to $100\\%$ ✓\n\n**Common Mistakes:**\n* $20$: uses the original total, $\\frac{120}{600}$, and ignores that the total decreased.\n* $37.5$: computes the share used by videos, $\\frac{180}{480}$, instead of photos.\n* About $21.4$: deletes $40$ gigabytes instead of $40\\%$ of $300$ gigabytes, giving $\\frac{120}{560}$.\n\n**Test Day Takeaway:** When part of a whole is removed, find the new total before computing a percent; the denominator changes even when the part you want does not.",
  skills: ["percent-of-value"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$\\frac{4x^{2} - 49}{2x^{2} - x - 28}$\nWhich expression is equivalent to the given expression for $x > 4$?",
  choices: [
    { id: "A", text: "$\\frac{2x - 7}{x - 4}$" },
    // distractor: cancels the factor 2x - 7 instead of the shared factor 2x + 7
    { id: "B", text: "$\\frac{2x + 7}{x - 4}$" },
    // distractor: factors the denominator as (2x + 7)(x + 4), which expands to 2x^2 + 15x + 28
    { id: "C", text: "$\\frac{2x - 7}{x + 4}$" },
    // distractor: factors the denominator as (2x + 7)(2x - 8), which is twice the given denominator
    { id: "D", text: "$\\frac{2x - 7}{2x - 8}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** The numerator is a difference of squares, $(2x - 7)(2x + 7)$, and the denominator factors as $(2x + 7)(x - 4)$. Dividing out the common factor $2x + 7$ leaves $\\frac{2x - 7}{x - 4}$.\n\n**The Full Solution:**\nStep 1: Factor the numerator as a difference of squares: $4x^{2} - 49 = (2x)^{2} - 7^{2} = (2x - 7)(2x + 7)$.\nStep 2: Factor the denominator: two numbers with product $2(-28) = -56$ and sum $-1$ are $-8$ and $7$, so $2x^{2} - x - 28 = 2x^{2} - 8x + 7x - 28 = (2x + 7)(x - 4)$.\nStep 3: For $x > 4$, the factor $2x + 7$ is not zero, so it divides out: $\\frac{(2x - 7)(2x + 7)}{(2x + 7)(x - 4)} = \\frac{2x - 7}{x - 4}$. Check with $x = 5$: the given expression is $\\frac{100 - 49}{50 - 5 - 28} = \\frac{51}{17} = 3$, and $\\frac{10 - 7}{5 - 4} = 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{2x + 7}{x - 4}$): divides out $2x - 7$, which is not a factor of the denominator.\n* Choice C ($\\frac{2x - 7}{x + 4}$): factors the denominator as $(2x + 7)(x + 4)$, which expands to $2x^{2} + 15x + 28$.\n* Choice D ($\\frac{2x - 7}{2x - 8}$): factors the denominator as $(2x + 7)(2x - 8)$, which is twice the given denominator.\n\n**Test Day Takeaway:** Factor the numerator and denominator completely, divide out only a common factor, and test one value of $x$ to confirm.",
  skills: ["simplifying-rational-expressions", "difference-of-squares"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Which expression is equivalent to $2x^{2} - 28x + 117$?",
  choices: [
    // distractor: takes half of 28 instead of half of 14 after factoring out 2, expanding to 2x^2 - 56x + 117
    { id: "A", text: "$2(x - 14)^{2} - 275$" },
    { id: "B", text: "$2(x - 7)^{2} + 19$" },
    // distractor: subtracts 49 instead of 2(49) = 98, expanding to 2x^2 - 28x + 166
    { id: "C", text: "$2(x - 7)^{2} + 68$" },
    // distractor: reverses the sign inside the square, expanding to 2x^2 + 28x + 117
    { id: "D", text: "$2(x + 7)^{2} + 19$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Quadratic — Completing the Square**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Factor $2$ out of the $x$-terms and complete the square: $2(x^{2} - 14x) + 117 = 2(x - 7)^{2} - 98 + 117 = 2(x - 7)^{2} + 19$.\n\n**The Full Solution:**\nStep 1: Factor $2$ out of the first two terms: $2x^{2} - 28x + 117 = 2(x^{2} - 14x) + 117$.\nStep 2: Half of $-14$ is $-7$, and $(-7)^{2} = 49$, so $x^{2} - 14x = (x - 7)^{2} - 49$. Then $2(x^{2} - 14x) = 2(x - 7)^{2} - 98$.\nStep 3: Add the constant: $2(x - 7)^{2} - 98 + 117 = 2(x - 7)^{2} + 19$. Check by expanding: $2(x^{2} - 14x + 49) + 19 = 2x^{2} - 28x + 98 + 19 = 2x^{2} - 28x + 117$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2(x - 14)^{2} - 275$): halves $28$ before factoring out the $2$; this expands to $2x^{2} - 56x + 117$.\n* Choice C ($2(x - 7)^{2} + 68$): subtracts $49$ instead of $2(49) = 98$ to balance the square; this expands to $2x^{2} - 28x + 166$.\n* Choice D ($2(x + 7)^{2} + 19$): uses the wrong sign inside the square; this expands to $2x^{2} + 28x + 117$.\n\n**Test Day Takeaway:** When the leading coefficient is not $1$, factor it out of the $x$-terms first, and remember that the number you add inside the parentheses is multiplied by that coefficient.",
  skills: ["quadratics"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$x^{2} + y^{2} - 14x - 6y + c = 0$\nIn the $xy$-plane, the graph of the given equation, where $c$ is a constant, is a circle that intersects the $x$-axis at exactly one point. What is the value of $c$?",
  correctAnswer: "49",
  explanation: "**SAT Pattern: Circle in Standard Form**\n\n**The correct answer is $49$.**\n\n**The Fast Way (~45s):** Completing both squares gives $(x - 7)^{2} + (y - 3)^{2} = 58 - c$, so the center is $(7, 3)$. A circle that meets the $x$-axis at exactly one point has radius equal to the center's distance from the $x$-axis, $3$, so $58 - c = 9$ and $c = 49$.\n\n**The Full Solution:**\nStep 1: Group the terms and complete each square: $(x^{2} - 14x + 49) + (y^{2} - 6y + 9) = -c + 49 + 9$, so $(x - 7)^{2} + (y - 3)^{2} = 58 - c$.\nStep 2: The center is $(7, 3)$, which is $3$ units above the $x$-axis. The circle intersects the $x$-axis at exactly one point when its radius equals that distance, so $r = 3$ and $r^{2} = 9$.\nStep 3: Set $58 - c = 9$, so $c = 49$. Check: substituting $y = 0$ and $c = 49$ gives $x^{2} - 14x + 49 = 0$, or $(x - 7)^{2} = 0$, which has exactly one solution, $x = 7$ ✓\n\n**Common Mistakes:**\n* $9$: uses the distance from the center to the $y$-axis, $7$, as the radius, solving $58 - c = 49$.\n* $55$: sets $58 - c$ equal to the radius, $3$, instead of the radius squared, $9$.\n* $58$: sets $58 - c = 0$, which gives a single point, not a circle.\n\n**Test Day Takeaway:** Complete the square to find the center and $r^{2}$; a circle touches a horizontal axis at exactly one point when its radius equals the center's vertical distance from that axis.",
  skills: ["circle-equation"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A right triangle has a hypotenuse of length $29$ units, and one leg is $1$ unit longer than the other leg. What is the area, in square units, of the triangle?",
  choices: [
    { id: "A", text: "$210$" },
    // distractor: uses the hypotenuse 29 instead of the leg 21 as the height
    { id: "B", text: "$290$" },
    // distractor: omits the factor 1/2 in the triangle area formula
    { id: "C", text: "$420$" },
    // distractor: reports 29^2, the sum of the squared legs, instead of the area
    { id: "D", text: "$841$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** With legs $a$ and $a + 1$, $a^{2} + (a + 1)^{2} = 29^{2}$ gives $a = 20$, so the legs are $20$ and $21$ and the area is $\\frac{1}{2}(20)(21) = 210$.\n\n**The Full Solution:**\nStep 1: Let the shorter leg be $a$, so the longer leg is $a + 1$. By the Pythagorean theorem, $a^{2} + (a + 1)^{2} = 841$, so $2a^{2} + 2a + 1 = 841$, or $a^{2} + a - 420 = 0$.\nStep 2: Factor: $(a + 21)(a - 20) = 0$. A length is positive, so $a = 20$, and the legs are $20$ and $21$.\nStep 3: The legs of a right triangle are a base and its height, so the area is $\\frac{1}{2}(20)(21) = 210$ square units. Check: $20^{2} + 21^{2} = 400 + 441 = 841 = 29^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($290$): uses the hypotenuse as the height, computing $\\frac{1}{2}(20)(29)$; the height to a leg is the other leg, not the hypotenuse.\n* Choice C ($420$): leaves out the $\\frac{1}{2}$ in the area formula, computing $20(21)$.\n* Choice D ($841$): reports $29^{2}$, the sum of the squares of the legs, instead of finding the legs.\n\n**Test Day Takeaway:** When the legs are described in terms of each other, write them with one variable, solve the Pythagorean equation, and then use the two legs as base and height.",
  skills: ["pythagorean-theorem"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "For the quadratic function $f$, the table shows four values of $x$ and their corresponding values of $f(x)$. What is the maximum value of $f(x)$?",
  questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$0$", "$5$"], ["$1$", "$20$"], ["$5$", "$20$"], ["$6$", "$5$"]] },
  choices: [
    // distractor: reports the x-value x = 3 at which the maximum occurs instead of f(3)
    { id: "A", text: "$3$" },
    // distractor: solves 5a = 15 instead of 5a = -15, getting a = 3 and k = 20 - 12 = 8
    { id: "B", text: "$8$" },
    // distractor: reads the largest value listed in the table as the maximum of f
    { id: "C", text: "$20$" },
    { id: "D", text: "$32$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Vertex Form Maximum**\n\n**Choice D is correct.**\n\n**The Fast Way (~45s):** Equal outputs at $x = 1$ and $x = 5$ put the vertex at $x = 3$, so $f(x) = a(x - 3)^{2} + k$. From $4a + k = 20$ and $9a + k = 5$, $a = -3$ and $k = 32$.\n\n**The Full Solution:**\nStep 1: A quadratic function has equal outputs at inputs the same distance from its axis of symmetry. Since $f(1) = f(5) = 20$, the axis is $x = \\frac{1 + 5}{2} = 3$, so $f(x) = a(x - 3)^{2} + k$, and the maximum or minimum value is $k$.\nStep 2: Substitute two rows: $f(1) = a(1 - 3)^{2} + k = 4a + k = 20$, and $f(0) = a(0 - 3)^{2} + k = 9a + k = 5$. Subtracting the first equation from the second gives $5a = -15$, so $a = -3$.\nStep 3: Then $k = 20 - 4(-3) = 32$. Since $a < 0$, the graph opens downward, so $32$ is the maximum value, at $x = 3$. Check the last row: $f(6) = -3(6 - 3)^{2} + 32 = -27 + 32 = 5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): this is the value of $x$ at which the maximum occurs, not the maximum value of $f(x)$.\n* Choice B ($8$): solves $5a = 15$ instead of $5a = -15$, which gives $a = 3$ and $k = 20 - 12 = 8$.\n* Choice C ($20$): this is the greatest value in the table, but the table does not include $x = 3$, where $f(x)$ is greater.\n\n**Test Day Takeaway:** Two equal outputs locate the axis of symmetry halfway between their inputs; two more rows then determine the vertex form.",
  skills: ["converting-quadratic-forms"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$f(x) = 2x - 5$\n$g(x) = x^{2} + 3$\nThe functions $f$ and $g$ are defined by the given equations. Which expression is equivalent to $g(f(x)) - f(g(x))$?",
  choices: [
    { id: "A", text: "$2x^{2} - 20x + 27$" },
    // distractor: subtracts in the reverse order, computing f(g(x)) - g(f(x))
    { id: "B", text: "$-2x^{2} + 20x - 27$" },
    // distractor: expands (2x - 5)^2 as 4x^2 + 25, dropping the -20x middle term
    { id: "C", text: "$2x^{2} + 27$" },
    // distractor: stops after computing g(f(x)) and never subtracts f(g(x))
    { id: "D", text: "$4x^{2} - 20x + 28$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Composition**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** $g(f(x)) = (2x - 5)^{2} + 3 = 4x^{2} - 20x + 28$ and $f(g(x)) = 2(x^{2} + 3) - 5 = 2x^{2} + 1$, so the difference is $2x^{2} - 20x + 27$.\n\n**The Full Solution:**\nStep 1: Substitute $f(x)$ into $g$: $g(f(x)) = (2x - 5)^{2} + 3 = 4x^{2} - 20x + 25 + 3 = 4x^{2} - 20x + 28$.\nStep 2: Substitute $g(x)$ into $f$: $f(g(x)) = 2(x^{2} + 3) - 5 = 2x^{2} + 6 - 5 = 2x^{2} + 1$.\nStep 3: Subtract: $(4x^{2} - 20x + 28) - (2x^{2} + 1) = 2x^{2} - 20x + 27$. Check with $x = 1$: $f(1) = -3$ and $g(-3) = 12$; $g(1) = 4$ and $f(4) = 3$; $12 - 3 = 9$, and $2 - 20 + 27 = 9$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-2x^{2} + 20x - 27$): subtracts in the reverse order, computing $f(g(x)) - g(f(x))$.\n* Choice C ($2x^{2} + 27$): expands $(2x - 5)^{2}$ as $4x^{2} + 25$, dropping the middle term $-20x$.\n* Choice D ($4x^{2} - 20x + 28$): stops after finding $g(f(x))$ and never subtracts $f(g(x))$.\n\n**Test Day Takeaway:** Work from the inside out for each composition, keep the two results separate, and subtract in the order written.",
  skills: ["function-composition"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 11 — Math Module 2 (22 questions)
// Flow (wavy, T11-unique): easy at [2,5,10]; medium at [1,3,4,7,9,13,18];
// hard at [6,8,11,12,14,15,16,17,19,20,21,22].
// Distribution: 3 easy / 7 medium / 12 hard = 22.
// Official-calibration recreation (2026-09-01): all content re-authored;
// slot metadata and flow shape frozen. Q1-5 warm-ups each carry 2+ steps
// or a trap (successive-percent, add-squares missing leg, shifted ask,
// retain-vs-lose, first-value-as-intercept).
// Palette: bike-share docks, camera-equipment rental, ice-rink resurfacing,
// ropes courses, water-park slides, seed-drill calibration,
// community-orchestra ticketing.

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 2,
  question: "The function $V$ gives the value, in dollars, of a savings account $t$ years after it was opened. The table shows three values of $t$ and their corresponding values of $V(t)$. Which equation defines $V$?",
  questionTable: { headers: ["$t$", "$V(t)$"], rows: [["$0$", "$2{,}500$"], ["$1$", "$2{,}600$"], ["$2$", "$2{,}704$"]] },
  choices: [
    // distractor: treats the first year's 100-dollar rise as a fixed yearly amount, giving a linear model that predicts 2,700 at t = 2 instead of 2,704
    { id: "A", text: "$V(t) = 2{,}500 + 100t$" },
    // distractor: uses the rate 0.04 as the growth factor instead of 1 + 0.04, predicting a value of 100 dollars at t = 1
    { id: "B", text: "$V(t) = 2{,}500(0.04)^{t}$" },
    { id: "C", text: "$V(t) = 2{,}500(1.04)^{t}$" },
    // distractor: misplaces the decimal in the growth factor, writing 1.4 for 1.04 and predicting 3,500 dollars at t = 1
    { id: "D", text: "$V(t) = 2{,}500(1.4)^{t}$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Compound Interest**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Divide consecutive values: $\\frac{2{,}600}{2{,}500} = 1.04$ and $\\frac{2{,}704}{2{,}600} = 1.04$. A constant ratio with starting value $2{,}500$ gives $V(t) = 2{,}500(1.04)^{t}$.\n\n**The Full Solution:**\nStep 1: The row $t = 0$ gives the starting value, so any exponential model $V(t) = a \\cdot b^{t}$ has $a = 2{,}500$.\nStep 2: Find the yearly factor. From $t = 0$ to $t = 1$, $\\frac{2{,}600}{2{,}500} = 1.04$; from $t = 1$ to $t = 2$, $\\frac{2{,}704}{2{,}600} = 1.04$. The same factor applies each year, so $b = 1.04$.\nStep 3: Check the last row: $2{,}500(1.04)^{2} = 2{,}500(1.0816) = 2{,}704$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($V(t) = 2{,}500 + 100t$): the value does rise by $\\$100$ in the first year, but a fixed yearly amount predicts $2{,}500 + 100(2) = 2{,}700$ at $t = 2$, not $2{,}704$.\n* Choice B ($V(t) = 2{,}500(0.04)^{t}$): uses the rate $0.04$ as the multiplier and predicts $2{,}500(0.04) = 100$ at $t = 1$.\n* Choice D ($V(t) = 2{,}500(1.4)^{t}$): a decimal slip turns a $4\\%$ increase into a $40\\%$ increase and predicts $2{,}500(1.4) = 3{,}500$ at $t = 1$.\n\n**Test Day Takeaway:** When a table grows by a constant ratio rather than a constant amount, the model is exponential; divide neighboring values to get the factor, which is $1 + r$, never $r$ alone.",
  skills: ["exponential-functions"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In right triangle $ABC$, angle $C$ is a right angle, $AB = 41$, and $BC = 9$. What is the value of $\\tan B$?",
  choices: [
    // distractor: reports cos B = BC/AB = 9/41 instead of the tangent
    { id: "A", text: "$\\dfrac{9}{41}$" },
    // distractor: inverts the ratio, giving adjacent over opposite, which is tan A = 9/40
    { id: "B", text: "$\\dfrac{9}{40}$" },
    // distractor: reports sin B = AC/AB = 40/41, dividing by the hypotenuse instead of the adjacent leg
    { id: "C", text: "$\\dfrac{40}{41}$" },
    { id: "D", text: "$\\dfrac{40}{9}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The missing leg is $AC = \\sqrt{41^{2} - 9^{2}} = 40$. From angle $B$, $AC$ is opposite and $BC$ is adjacent, so $\\tan B = \\frac{40}{9}$.\n\n**The Full Solution:**\nStep 1: Since angle $C$ is the right angle, $AB = 41$ is the hypotenuse and $BC = 9$ and $AC$ are the legs.\nStep 2: Use the Pythagorean theorem: $AC^{2} = 41^{2} - 9^{2} = 1{,}681 - 81 = 1{,}600$, so $AC = 40$.\nStep 3: From angle $B$, the opposite leg is $AC = 40$ and the adjacent leg is $BC = 9$, so $\\tan B = \\frac{40}{9}$. Check: $9^{2} + 40^{2} = 81 + 1{,}600 = 1{,}681 = 41^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{9}{41}$): this is $\\cos B$, adjacent over hypotenuse.\n* Choice B ($\\frac{9}{40}$): this is adjacent over opposite, which is $\\tan A$, the tangent of the other acute angle.\n* Choice C ($\\frac{40}{41}$): this is $\\sin B$, opposite over hypotenuse; tangent does not use the hypotenuse.\n\n**Test Day Takeaway:** Find the missing side first, then label opposite and adjacent from the angle named in the question; tangent never involves the hypotenuse.",
  skills: ["soh-cah-toa", "pythagorean-theorem"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Ana has \\$120 in savings and adds \\$35 to her savings each week. What is the least number of weeks after which Ana's savings will be greater than \\$700?",
  choices: [
    // distractor: rounds 16.57 down to 16, but after 16 weeks the savings are 120 + 35(16) = 680 dollars, which is less than 700
    { id: "A", text: "$16$" },
    { id: "B", text: "$17$" },
    // distractor: ignores the 120 dollars already saved and solves 35w > 700, giving w > 20 and reporting 20
    { id: "C", text: "$20$" },
    // distractor: adds the 120 dollars instead of subtracting it, solving 35w > 820 and rounding 23.43 up to 24
    { id: "D", text: "$24$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Smallest Integer in an Inequality**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Solve $120 + 35w > 700$: $35w > 580$, so $w > 16.57$. The least whole number of weeks is $17$.\n\n**The Full Solution:**\nStep 1: After $w$ weeks, Ana's savings are $120 + 35w$ dollars, so the condition is $120 + 35w > 700$.\nStep 2: Subtract $120$ from both sides and divide by $35$: $35w > 580$, so $w > \\frac{580}{35} \\approx 16.57$.\nStep 3: The number of weeks is a whole number, so the least value is $17$. Check: $120 + 35(17) = 715 > 700$, while $120 + 35(16) = 680 < 700$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($16$): rounds $16.57$ down. After $16$ weeks the savings are only $\\$680$.\n* Choice C ($20$): ignores the $\\$120$ Ana starts with and solves $35w > 700$, which gives $w > 20$; this also fails the strict inequality at $w = 20$.\n* Choice D ($24$): adds the $\\$120$ to the goal instead of subtracting it, solving $35w > 820$ and rounding $23.43$ up.\n\n**Test Day Takeaway:** For a \"least whole number\" question, solve the inequality, then round in the direction the inequality points, and test the integer on each side.",
  skills: ["inequalities"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $P$ gives a bakery's daily profit, in dollars, from selling $x$ cakes, where $P(x) = -3x^{2} + 165x - 1{,}800$. For which values of $x$ is the daily profit positive?",
  choices: [
    { id: "A", text: "$15 < x < 40$" },
    // distractor: reads the zeros from the factors (x - 15)(x - 40) with the wrong signs, giving -15 and -40
    { id: "B", text: "$-40 < x < -15$" },
    // distractor: chooses the intervals outside the zeros, where the downward-opening parabola is below the x-axis and the profit is negative
    { id: "C", text: "$x < 15$ or $x > 40$" },
    // distractor: keeps only the lower boundary and ignores that the profit becomes negative again after x = 40
    { id: "D", text: "$x > 15$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** $P(x) = -3(x^{2} - 55x + 600) = -3(x - 15)(x - 40)$. The parabola opens downward, so $P(x) > 0$ between the zeros: $15 < x < 40$.\n\n**The Full Solution:**\nStep 1: Factor out $-3$: $P(x) = -3\\left(x^{2} - 55x + 600\\right)$. The numbers $15$ and $40$ have product $600$ and sum $55$, so $P(x) = -3(x - 15)(x - 40)$.\nStep 2: The zeros are $x = 15$ and $x = 40$. Because the leading coefficient $-3$ is negative, the graph opens downward and is above the x-axis only between its zeros.\nStep 3: So the daily profit is positive for $15 < x < 40$. Check $x = 20$: $P(20) = -3(400) + 165(20) - 1{,}800 = -1{,}200 + 3{,}300 - 1{,}800 = 300 > 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-40 < x < -15$): flips the signs when reading zeros from $(x - 15)(x - 40)$; the zeros are $15$ and $40$, not $-15$ and $-40$.\n* Choice C ($x < 15$ or $x > 40$): these are the values where a downward-opening parabola is below the x-axis, so the profit is negative there.\n* Choice D ($x > 15$): uses only the first zero; for example, $P(50) = -3(35)(10) = -1{,}050$, so the profit is negative again beyond $40$.\n\n**Test Day Takeaway:** For a quadratic inequality, find the zeros, then use the sign of the leading coefficient: a downward-opening parabola is positive between its zeros and negative outside them.",
  skills: ["quadratics"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $f$ is defined by $f(x) = 32 - \\frac{2}{5}x$. If $f(3a - 4) = 12$, what is the value of $a$?",
  choices: [
    // distractor: solves (2/5)u = 20 by multiplying 20 by 2/5 instead of by 5/2, getting u = 8 and then 3a - 4 = 8, a = 4
    { id: "A", text: "$4$" },
    // distractor: finds 3a - 4 = 50 correctly but subtracts 4 instead of adding it, getting 3a = 46
    { id: "B", text: "$\\dfrac{46}{3}$" },
    { id: "C", text: "$18$" },
    // distractor: finds the input 3a - 4 = 50 and reports it instead of solving for a
    { id: "D", text: "$50$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Solve $f(a) = c$**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** $32 - \\frac{2}{5}(3a - 4) = 12$ gives $\\frac{2}{5}(3a - 4) = 20$, so $3a - 4 = 50$ and $a = 18$.\n\n**The Full Solution:**\nStep 1: Substitute $3a - 4$ for $x$: $f(3a - 4) = 32 - \\frac{2}{5}(3a - 4)$, so $32 - \\frac{2}{5}(3a - 4) = 12$.\nStep 2: Subtract $32$ and multiply both sides by $-\\frac{5}{2}$: $\\frac{2}{5}(3a - 4) = 20$, so $3a - 4 = 50$.\nStep 3: Add $4$ and divide by $3$: $3a = 54$, so $a = 18$. Check: $3(18) - 4 = 50$ and $f(50) = 32 - \\frac{2}{5}(50) = 32 - 20 = 12$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): multiplies $20$ by $\\frac{2}{5}$ instead of by $\\frac{5}{2}$, getting $3a - 4 = 8$.\n* Choice B ($\\frac{46}{3}$): reaches $3a - 4 = 50$ but subtracts $4$ instead of adding it, getting $3a = 46$.\n* Choice D ($50$): this is the input $3a - 4$, not $a$.\n\n**Test Day Takeaway:** When the input is an expression, solve for the whole input first, then solve that expression for the variable the question asks about.",
  skills: ["function-notation"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table shows three values of $x$ and their corresponding values of $f(x)$, where $f$ is a quadratic function. The graph of $y = f(x)$ in the $xy$-plane has two $x$-intercepts. What is the distance between the $x$-intercepts?",
  questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$0$", "$-12$"], ["$2$", "$-24$"], ["$4$", "$-20$"]] },
  choices: [
    // distractor: divides the square root of the discriminant by 2a = 4, which gives the distance from the axis of symmetry to one intercept, not the distance between the intercepts
    { id: "A", text: "$3.5$" },
    // distractor: adds the intercepts, -1 + 6 = 5, instead of subtracting them
    { id: "B", text: "$5$" },
    { id: "C", text: "$7$" },
    // distractor: takes the square root of the discriminant, 14, and forgets to divide by the leading coefficient 2
    { id: "D", text: "$14$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice C is correct.**\n\n**The Fast Way (~60s):** With $f(x) = ax^{2} + bx - 12$, the rows give $4a + 2b = -12$ and $16a + 4b = -8$, so $a = 2$ and $b = -10$. Then $f(x) = 2(x + 1)(x - 6)$, and the intercepts $-1$ and $6$ are $7$ apart.\n\n**The Full Solution:**\nStep 1: The row $x = 0$ gives the constant term, so $f(x) = ax^{2} + bx - 12$. The row $x = 2$ gives $4a + 2b - 12 = -24$, or $4a + 2b = -12$; the row $x = 4$ gives $16a + 4b - 12 = -20$, or $16a + 4b = -8$.\nStep 2: Double the first equation, $8a + 4b = -24$, and subtract it from the second: $8a = 16$, so $a = 2$ and $b = -10$. Then $f(x) = 2x^{2} - 10x - 12 = 2(x^{2} - 5x - 6) = 2(x + 1)(x - 6)$.\nStep 3: The $x$-intercepts are at $x = -1$ and $x = 6$, so the distance between them is $6 - (-1) = 7$. Check the row $x = 4$: $2(5)(-2) = -20$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3.5$): computes $\\frac{\\sqrt{196}}{2(2)} = 3.5$, the distance from the axis of symmetry $x = 2.5$ to one intercept.\n* Choice B ($5$): adds the intercepts, $-1 + 6 = 5$, instead of finding their difference.\n* Choice D ($14$): the discriminant is $(-10)^{2} - 4(2)(-12) = 196$, and $\\sqrt{196} = 14$; the distance between the roots is $\\frac{14}{2} = 7$, so this forgets to divide by $a$.\n\n**Test Day Takeaway:** Three points pin down a quadratic: use $f(0)$ for the constant, solve for $a$ and $b$, then factor; the distance between intercepts is the larger root minus the smaller.",
  skills: ["quadratics"]
},
{
  id: 7,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$3x^{2} + 29 = 18x$\nHow many distinct real solutions does the given equation have?",
  choices: [
    { id: "A", text: "Zero" },
    // distractor: assumes that an equation in one variable has exactly one solution, without checking the discriminant
    { id: "B", text: "Exactly one" },
    // distractor: moves 29 to the other side with the wrong sign, writing 3x^2 - 18x - 29 = 0, whose discriminant 324 + 348 = 672 is positive
    { id: "C", text: "Exactly two" },
    // distractor: reads a negative discriminant as meaning every real number is a solution rather than none
    { id: "D", text: "Infinitely many" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Discriminant Analysis**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** In standard form, $3x^{2} - 18x + 29 = 0$, and $b^{2} - 4ac = 324 - 348 = -24 < 0$, so there are no real solutions.\n\n**The Full Solution:**\nStep 1: Subtract $18x$ from both sides to get standard form: $3x^{2} - 18x + 29 = 0$, so $a = 3$, $b = -18$, and $c = 29$.\nStep 2: Compute the discriminant: $b^{2} - 4ac = (-18)^{2} - 4(3)(29) = 324 - 348 = -24$.\nStep 3: A negative discriminant means the equation has no real solutions. Check by completing the square: $3x^{2} - 18x + 29 = 3(x - 3)^{2} + 2$, which is at least $2$ for every $x$, so it never equals $0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B (Exactly one): a quadratic has exactly one real solution only when the discriminant is $0$; here it is $-24$.\n* Choice C (Exactly two): moving $29$ with the wrong sign gives $3x^{2} - 18x - 29 = 0$, whose discriminant $324 + 348 = 672$ is positive.\n* Choice D (Infinitely many): a negative discriminant means no real number works, not that every number works.\n\n**Test Day Takeaway:** Put the equation in $ax^{2} + bx + c = 0$ form before reading $a$, $b$, and $c$; then the sign of $b^{2} - 4ac$ gives the number of real solutions: positive, two; zero, one; negative, none.",
  skills: ["discriminant-analysis"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$\\dfrac{9^{2x} \\cdot 3^{x - 4}}{27^{x + 1}}$\nWhich expression is equivalent to the given expression?",
  choices: [
    { id: "A", text: "$3^{2x - 7}$" },
    // distractor: rewrites 27^(x + 1) as 3^(3x + 1), multiplying only the x by 3 and leaving the 1 alone
    { id: "B", text: "$3^{2x - 5}$" },
    // distractor: rewrites 3^(x - 4) as 3^(x + 4), flipping the sign of the -4
    { id: "C", text: "$3^{2x + 1}$" },
    // distractor: adds the exponent of the denominator instead of subtracting it: 4x + (x - 4) + (3x + 3) = 8x - 1
    { id: "D", text: "$3^{8x - 1}$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Common-Base Exponent Simplification**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Write every base as a power of $3$: $\\frac{3^{4x} \\cdot 3^{x - 4}}{3^{3x + 3}} = 3^{4x + x - 4 - 3x - 3} = 3^{2x - 7}$.\n\n**The Full Solution:**\nStep 1: Rewrite each base as a power of $3$: $9^{2x} = (3^{2})^{2x} = 3^{4x}$ and $27^{x + 1} = (3^{3})^{x + 1} = 3^{3x + 3}$.\nStep 2: Multiply in the numerator by adding exponents: $3^{4x} \\cdot 3^{x - 4} = 3^{5x - 4}$.\nStep 3: Divide by subtracting exponents: $3^{(5x - 4) - (3x + 3)} = 3^{2x - 7}$. Check at $x = 4$: the original is $\\frac{9^{8} \\cdot 3^{0}}{27^{5}} = \\frac{3^{16}}{3^{15}} = 3$, and $3^{2(4) - 7} = 3^{1} = 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($3^{2x - 5}$): writes $27^{x + 1}$ as $3^{3x + 1}$; the factor $3$ multiplies the whole exponent $x + 1$.\n* Choice C ($3^{2x + 1}$): changes $3^{x - 4}$ to $3^{x + 4}$, a sign slip.\n* Choice D ($3^{8x - 1}$): adds the denominator's exponent instead of subtracting it.\n\n**Test Day Takeaway:** Convert to a common base first; a power of a power multiplies the entire exponent, and dividing powers subtracts the entire exponent, so keep parentheses around $x + 1$.",
  skills: ["exponent-laws"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "Which expression is equivalent to $\\left(\\sqrt[5]{32x^{15}}\\right)^{2}$?",
  choices: [
    // distractor: takes the fifth root, 2x^3, but squares only the variable part, leaving the coefficient 2
    { id: "A", text: "$2x^{6}$" },
    { id: "B", text: "$4x^{6}$" },
    // distractor: squares x^15 to get x^30 and never applies the fifth root to the exponent
    { id: "C", text: "$4x^{30}$" },
    // distractor: squares 32 to get 1,024 and never takes its fifth root
    { id: "D", text: "$1{,}024x^{6}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $\\sqrt[5]{32x^{15}} = 2x^{3}$, and $(2x^{3})^{2} = 4x^{6}$.\n\n**The Full Solution:**\nStep 1: Take the fifth root of each factor: $\\sqrt[5]{32} = 2$, because $2^{5} = 32$, and $\\sqrt[5]{x^{15}} = x^{\\frac{15}{5}} = x^{3}$.\nStep 2: So $\\sqrt[5]{32x^{15}} = 2x^{3}$.\nStep 3: Square the result: $(2x^{3})^{2} = 2^{2} \\cdot x^{6} = 4x^{6}$. Check at $x = 1$: $\\left(\\sqrt[5]{32}\\right)^{2} = 2^{2} = 4$, and $4(1)^{6} = 4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2x^{6}$): squares $x^{3}$ but not the coefficient $2$.\n* Choice C ($4x^{30}$): squares $x^{15}$ to get $x^{30}$ without dividing the exponent by $5$.\n* Choice D ($1{,}024x^{6}$): squares $32$ but never takes its fifth root.\n\n**Test Day Takeaway:** A root and a power both act on every factor inside: apply the fifth root to the coefficient and divide the exponent by $5$, then square both parts.",
  skills: ["exponent-rules", "radical-expressions"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$5, 3, 12, 2, 3, 7, 4, 3, 9, 2, 5$\nThe list shows the number of nights each of $11$ guests stayed at a hotel. Which statement about these data is true?",
  choices: [
    { id: "A", text: "The mode is $3$ and the median is $4$." },
    // distractor: swaps the two measures: 3 is the most frequent value and 4 is the middle value, not the reverse
    { id: "B", text: "The mode is $4$ and the median is $3$." },
    // distractor: reports the mean, 55/11 = 5, as the median
    { id: "C", text: "The mode is $3$ and the median is $5$." },
    // distractor: takes the middle entry of the unsorted list, the 6th value 7, as the median
    { id: "D", text: "The mode is $3$ and the median is $7$." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Mode of a Data Set**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Sorted, the list is $2, 2, 3, 3, 3, 4, 5, 5, 7, 9, 12$. The value $3$ appears most often, and the $6$th value is $4$.\n\n**The Full Solution:**\nStep 1: Order the $11$ values from least to greatest: $2, 2, 3, 3, 3, 4, 5, 5, 7, 9, 12$.\nStep 2: The mode is the most frequent value. The value $3$ appears $3$ times, more than any other value, so the mode is $3$.\nStep 3: With $11$ values, the median is the $6$th value in order, which is $4$. Check: there are $5$ values below it ($2, 2, 3, 3, 3$) and $5$ above it ($5, 5, 7, 9, 12$) ✓\n\n**Why the wrong answers are tempting:**\n* Choice B: swaps the two measures; $4$ appears only once.\n* Choice C: $5$ is the mean, $\\frac{55}{11} = 5$, not the median.\n* Choice D: $7$ is the $6$th entry of the list as written, but the median must be found after the values are put in order.\n\n**Test Day Takeaway:** Sort the data before finding a median; the mode is the value that repeats most, and the mean is a separate measure.",
  skills: ["find-mode"]
},
{
  id: 11,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$p(x) = x^{3} + ax^{2} + bx + 30$\nIn the given function, $a$ and $b$ are constants. The table shows four values of $x$ and their corresponding values of $p(x)$. What is the greatest zero of $p$?",
  questionTable: { headers: ["$x$", "$p(x)$"], rows: [["$-2$", "$0$"], ["$1$", "$24$"], ["$2$", "$12$"], ["$3$", "$0$"]] },
  correctAnswer: "5",
  explanation: "**SAT Pattern: Polynomial Factoring with Given Factor**\n\n**The correct answer is 5.**\n\n**The Fast Way (~45s):** The table shows $p(-2) = 0$ and $p(3) = 0$, so $p(x) = (x + 2)(x - 3)(x - r)$. The constant term is $(2)(-3)(-r) = 6r = 30$, so $r = 5$, which is greater than $3$.\n\n**The Full Solution:**\nStep 1: A zero of $p$ is an input with output $0$, so the table gives the zeros $-2$ and $3$. Since the leading coefficient is $1$, $p(x) = (x + 2)(x - 3)(x - r)$ for some third zero $r$.\nStep 2: Match constant terms: at $x = 0$, $(2)(-3)(-r) = 6r$, and $p(0) = 30$. So $6r = 30$ and $r = 5$.\nStep 3: The zeros are $-2$, $3$, and $5$, so the greatest zero is $5$. Check the row $x = 1$: $(3)(-2)(-4) = 24$ ✓\n\n**Common Mistakes:**\n* $3$: the greatest zero visible in the table; the third zero is not listed.\n* $-5$: writes the constant term as $-6r$ and solves $-6r = 30$, a sign slip in $(2)(-3)(-r)$.\n* $15$: divides out only the factor $x + 2$ and reports the constant term of the quotient, which is the product of the other two zeros, $3 \\cdot 5 = 15$.\n\n**Test Day Takeaway:** Each row with output $0$ gives a factor; once all but one factor is known, the constant term of the polynomial gives the last zero in one step.",
  skills: ["finding-roots-factoring"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The function $f(t) = 8{,}400(0.7)^{\\frac{t}{5}}$ gives the estimated number of fish in a lake $t$ years after $2020$. The estimated number of fish decreases by $p\\%$ every $10$ years. What is the value of $p$?",
  correctAnswer: "51",
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**The correct answer is 51.**\n\n**The Fast Way (~35s):** Every $10$ years the exponent $\\frac{t}{5}$ grows by $2$, so the number of fish is multiplied by $0.7^{2} = 0.49$, a decrease of $51\\%$.\n\n**The Full Solution:**\nStep 1: When $t$ increases by $10$, the exponent $\\frac{t}{5}$ increases by $\\frac{10}{5} = 2$.\nStep 2: So $f(t + 10) = 8{,}400(0.7)^{\\frac{t}{5} + 2} = f(t) \\cdot (0.7)^{2} = 0.49f(t)$.\nStep 3: Keeping $49\\%$ of the fish means a decrease of $100\\% - 49\\% = 51\\%$, so $p = 51$. Check: $f(0) = 8{,}400$ and $f(10) = 8{,}400(0.49) = 4{,}116$, and $\\frac{8{,}400 - 4{,}116}{8{,}400} = 0.51$ ✓\n\n**Common Mistakes:**\n* $30$: the decrease for one $5$-year period, $1 - 0.7 = 0.30$.\n* $60$: doubles the $5$-year decrease, but percent decreases compound by multiplying, not adding.\n* $49$: the percent that remains after $10$ years, not the percent decrease.\n\n**Test Day Takeaway:** To find the change over a different time span, raise the growth factor to the number of periods in that span, then subtract from $1$ for a decrease.",
  skills: ["exponential-growth-decay"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$21x + 15y = 90$\n$kx + 10y = 60$\nIn the given system of equations, $k$ is a constant. If the system has infinitely many solutions, what is the value of $k$?",
  choices: [
    // distractor: copies the y-coefficient 10 of the second equation into k
    { id: "A", text: "$10$" },
    { id: "B", text: "$14$" },
    // distractor: assumes the x-coefficient 21 stays the same, even though the other coefficients are scaled by 2/3
    { id: "C", text: "$21$" },
    // distractor: uses the reciprocal scale factor 3/2 instead of 2/3, giving 21(3/2) = 31.5
    { id: "D", text: "$31.5$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The second equation must be a multiple of the first. Since $\\frac{10}{15} = \\frac{60}{90} = \\frac{2}{3}$, $k = \\frac{2}{3}(21) = 14$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has infinitely many solutions when one equation is a constant multiple of the other.\nStep 2: Compare the terms that are known: $\\frac{10}{15} = \\frac{2}{3}$ and $\\frac{60}{90} = \\frac{2}{3}$, so the second equation is $\\frac{2}{3}$ times the first.\nStep 3: Then $k = \\frac{2}{3}(21) = 14$. Check: $\\frac{2}{3}(21x + 15y) = \\frac{2}{3}(90)$ gives $14x + 10y = 60$, the second equation ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): copies the $y$-coefficient; the coefficients in one equation do not have to match each other.\n* Choice C ($21$): leaves the $x$-coefficient unscaled, which would make the lines intersect at one point.\n* Choice D ($31.5$): multiplies by $\\frac{3}{2}$, the factor that turns the second equation into the first, instead of $\\frac{2}{3}$.\n\n**Test Day Takeaway:** Infinitely many solutions means the two equations are the same line; find the scale factor from the terms you know and apply it to the unknown coefficient.",
  skills: ["system-solution-types", "infinite-solutions-condition"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In triangle $ABC$, side $\\overline{BC}$ is extended through $C$ to point $D$. The measures of angles $A$, $B$, and $ACD$ are $(x + 30)^{\\circ}$, $(2x - 4)^{\\circ}$, and $(4x + 6)^{\\circ}$, respectively. What is the measure, in degrees, of angle $ACB$?",
  choices: [
    // distractor: reports x = 20 instead of substituting it into an angle measure
    { id: "A", text: "$20$" },
    // distractor: reports the measure of angle A, 20 + 30 = 50 degrees
    { id: "B", text: "$50$" },
    // distractor: reports the measure of angle ACD, 4(20) + 6 = 86 degrees, instead of its supplement
    { id: "C", text: "$86$" },
    { id: "D", text: "$94$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** An exterior angle equals the sum of the two remote interior angles: $4x + 6 = (x + 30) + (2x - 4)$, so $x = 20$. Then angle $ACD = 86^{\\circ}$ and angle $ACB = 180^{\\circ} - 86^{\\circ} = 94^{\\circ}$.\n\n**The Full Solution:**\nStep 1: Angle $ACD$ is an exterior angle of triangle $ABC$ at $C$, so its measure equals the sum of the measures of angles $A$ and $B$: $4x + 6 = (x + 30) + (2x - 4)$.\nStep 2: Simplify: $4x + 6 = 3x + 26$, so $x = 20$, and angle $ACD$ measures $4(20) + 6 = 86^{\\circ}$.\nStep 3: Angles $ACB$ and $ACD$ form a straight angle, so angle $ACB$ measures $180^{\\circ} - 86^{\\circ} = 94^{\\circ}$. Check: angles $A$ and $B$ measure $50^{\\circ}$ and $36^{\\circ}$, and $50 + 36 + 94 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): this is the value of $x$, not an angle measure.\n* Choice B ($50$): this is the measure of angle $A$.\n* Choice C ($86$): this is the exterior angle $ACD$; the interior angle at $C$ is its supplement.\n\n**Test Day Takeaway:** An exterior angle equals the sum of the two interior angles that are not next to it, and it is supplementary to the interior angle that is.",
  skills: ["triangle-angle-sum"]
},
{
  id: 15,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "$y = x^{2} - 8x + 21$\n$y = 2x + b$\nIn the given system of equations, $b$ is a constant. For what value of $b$ does the system have exactly one distinct real solution?",
  correctAnswer: "-4",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is -4.**\n\n**The Fast Way (~40s):** Setting the equations equal gives $x^{2} - 10x + (21 - b) = 0$. One solution means $100 - 4(21 - b) = 0$, so $21 - b = 25$ and $b = -4$.\n\n**The Full Solution:**\nStep 1: Substitute $2x + b$ for $y$ in the first equation: $2x + b = x^{2} - 8x + 21$, which becomes $x^{2} - 10x + (21 - b) = 0$.\nStep 2: The system has exactly one solution when this quadratic has exactly one real root, so its discriminant is $0$: $(-10)^{2} - 4(1)(21 - b) = 0$.\nStep 3: Then $100 = 84 - 4b$, so $4b = -16$ and $b = -4$. Check: $x^{2} - 10x + 25 = (x - 5)^{2}$ has the single root $x = 5$, and both equations give $y = 6$ there ✓\n\n**Common Mistakes:**\n* $4$: a sign slip, solving $21 + b = 25$ instead of $21 - b = 25$.\n* $5$: forgets to subtract $2x$, using $x^{2} - 8x + (21 - b) = 0$, so $64 - 4(21 - b) = 0$ and $b = 5$.\n* $6$: reports the $y$-coordinate of the single solution, $(5, 6)$, instead of $b$.\n\n**Test Day Takeaway:** A line meets a parabola exactly once when the quadratic you get by setting them equal has discriminant $0$; collect every $x$-term before reading $a$, $b$, and $c$.",
  skills: ["tangent-lines", "discriminant-analysis"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Line $\\ell$ is shown in the $xy$-plane. Line $m$ is the graph of $y = (n^{2} - 2n)x + 4n - 4$, where $n$ is a constant. If lines $\\ell$ and $m$ have no point of intersection, what is the value of $n$?",
  diagram: { type: "linearGraph", params: { slope: 3, yIntercept: 8, xRange: [-2, 6], yRange: [0, 26], xTickInterval: 2, yTickInterval: 4, gridInterval: 2, showPoints: [[0, 8], [4, 20]] } },
  choices: [
    // distractor: finds n = -1 but reports line m's y-intercept, 4(-1) - 4 = -8, instead of n
    { id: "A", text: "$-8$" },
    { id: "B", text: "$-1$" },
    // distractor: uses the other root of n^2 - 2n = 3; at n = 3 the y-intercept 4n - 4 is 8, so line m is line l and the lines share every point
    { id: "C", text: "$3$" },
    // distractor: sets n^2 - 2n equal to line l's y-intercept 8 instead of its slope 3 and takes the positive root
    { id: "D", text: "$4$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** Line $\\ell$ is $y = 3x + 8$. Parallel lines need $n^{2} - 2n = 3$, so $n = 3$ or $n = -1$; $n = 3$ gives the same line, so $n = -1$.\n\n**The Full Solution:**\nStep 1: Line $\\ell$ passes through $(0, 8)$ and $(4, 20)$, so its slope is $\\frac{20 - 8}{4 - 0} = 3$ and its $y$-intercept is $8$: $y = 3x + 8$.\nStep 2: Two lines have no point of intersection when they have equal slopes and different $y$-intercepts. Equal slopes require $n^{2} - 2n = 3$, so $(n - 3)(n + 1) = 0$ and $n = 3$ or $n = -1$.\nStep 3: At $n = 3$, the $y$-intercept of line $m$ is $4(3) - 4 = 8$, so line $m$ is line $\\ell$. At $n = -1$, line $m$ is $y = 3x - 8$. Check: $3x + 8 = 3x - 8$ gives $8 = -8$, which is false for every $x$, so the lines never meet ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): this is line $m$'s $y$-intercept when $n = -1$, not the value of $n$.\n* Choice C ($3$): gives equal slopes but also the same $y$-intercept, $8$, so the lines coincide and share every point.\n* Choice D ($4$): sets $n^{2} - 2n$ equal to the $y$-intercept $8$ instead of the slope $3$; line $y = 8x + 12$ crosses line $\\ell$.\n\n**Test Day Takeaway:** No intersection means equal slopes and unequal intercepts; when the slope condition gives two values of the constant, test each one against the intercept.",
  skills: ["system-solution-types"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$\\sqrt{2x + 3} = x - 6$\nWhat is the sum of all real solutions to the given equation?",
  choices: [
    // distractor: squares x - 6 as x^2 - 36, getting x^2 - 2x - 39 = 0 and reporting the sum of its roots, 2
    { id: "A", text: "$2$" },
    // distractor: keeps the candidate 3, for which the right side is -3, and discards 11, the candidate that works
    { id: "B", text: "$3$" },
    { id: "C", text: "$11$" },
    // distractor: squares both sides and adds both roots of x^2 - 14x + 33 = 0 without checking them in the original equation
    { id: "D", text: "$14$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Radical Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~45s):** Squaring gives $2x + 3 = x^{2} - 12x + 36$, so $(x - 3)(x - 11) = 0$. Only $x = 11$ checks ($\\sqrt{25} = 5$), so the sum is $11$.\n\n**The Full Solution:**\nStep 1: Square both sides: $2x + 3 = (x - 6)^{2} = x^{2} - 12x + 36$, so $x^{2} - 14x + 33 = 0$.\nStep 2: Factor: $(x - 3)(x - 11) = 0$, so the candidates are $x = 3$ and $x = 11$.\nStep 3: Check each in the original equation. At $x = 3$: $\\sqrt{9} = 3$, but $3 - 6 = -3$, so $3$ is not a solution. At $x = 11$: $\\sqrt{25} = 5$ and $11 - 6 = 5$ ✓. The only real solution is $11$, so the sum is $11$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): squares $x - 6$ as $x^{2} - 36$, dropping the middle term, and then uses the sum of the roots of $x^{2} - 2x - 39 = 0$.\n* Choice B ($3$): keeps the extraneous candidate; a square root cannot equal $-3$.\n* Choice D ($14$): adds both candidates without checking them; squaring can introduce a solution that does not satisfy the original equation.\n\n**Test Day Takeaway:** After squaring a radical equation, substitute every candidate into the original equation; a square root is never negative, so a candidate that makes the other side negative is extraneous.",
  skills: ["radical-equations"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A box contains only black pens and blue pens in a ratio of $5$ to $3$. There are $96$ more black pens than blue pens in the box. How many pens are in the box?",
  correctAnswer: "384",
  explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**The correct answer is 384.**\n\n**The Fast Way (~30s):** The ratio $5 : 3$ means the difference is $2$ parts, so one part is $\\frac{96}{2} = 48$ pens, and the box holds $8(48) = 384$ pens.\n\n**The Full Solution:**\nStep 1: Let one part be $n$ pens, so there are $5n$ black pens, $3n$ blue pens, and $8n$ pens in all.\nStep 2: The difference is $5n - 3n = 2n = 96$, so $n = 48$.\nStep 3: The total is $8n = 8(48) = 384$. Check: $240$ black pens and $144$ blue pens give $240 - 144 = 96$ and $\\frac{240}{144} = \\frac{5}{3}$ ✓\n\n**Common Mistakes:**\n* $48$: the size of one part, not the total.\n* $240$: the number of black pens only.\n* $768$: treats $96$ as one part and multiplies by $8$, but $96$ is the difference of $2$ parts.\n\n**Test Day Takeaway:** In a ratio problem, a difference or a total corresponds to a number of parts; find the size of one part, then multiply by the parts the question asks for.",
  skills: ["word-problem-to-equation"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A store increased the price of a jacket by $20\\%$. Later, the store decreased the new price by $15\\%$, to $p$ dollars. Which expression represents the original price of the jacket, in dollars?",
  choices: [
    // distractor: undoes only the 15 percent decrease and never undoes the 20 percent increase
    { id: "A", text: "$\\dfrac{p}{0.85}$" },
    { id: "B", text: "$\\dfrac{p}{1.02}$" },
    // distractor: combines the two changes into a single 5 percent increase by subtracting 15 from 20
    { id: "C", text: "$\\dfrac{p}{1.05}$" },
    // distractor: finds the combined multiplier 1.02 but multiplies p by it instead of dividing
    { id: "D", text: "$1.02p$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The original price times $1.20$ and then $0.85$ equals $p$, and $(1.20)(0.85) = 1.02$, so the original price is $\\frac{p}{1.02}$.\n\n**The Full Solution:**\nStep 1: Let $x$ be the original price. A $20\\%$ increase multiplies it by $1.20$, giving $1.20x$.\nStep 2: A $15\\%$ decrease of the new price multiplies by $0.85$: $p = 0.85(1.20x) = 1.02x$.\nStep 3: Solve for $x$: $x = \\frac{p}{1.02}$. Check with $x = 100$: $100 \\to 120 \\to 0.85(120) = 102$, and $\\frac{102}{1.02} = 100$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{p}{0.85}$): reverses only the decrease, which gives the raised price, not the original price.\n* Choice C ($\\frac{p}{1.05}$): treats $+20\\%$ then $-15\\%$ as $+5\\%$; the $15\\%$ is taken of a larger price, so the changes do not simply add.\n* Choice D ($1.02p$): uses the correct multiplier but in the wrong direction; going back to the original price means dividing.\n\n**Test Day Takeaway:** Successive percent changes multiply: write each as a factor, multiply the factors, and divide by the product to work backward.",
  skills: ["percent-of-value", "percent-word-problems"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Triangle $ABC$ has side lengths $8$, $15$, and $17$. Triangle $DEF$ is similar to triangle $ABC$ and has a perimeter of $100$. What is the area, in square units, of triangle $DEF$?",
  choices: [
    // distractor: multiplies the area of triangle ABC, 60, by the length scale factor 2.5 instead of its square
    { id: "A", text: "$150$" },
    // distractor: multiplies the area 60 by twice the scale factor, 2(2.5) = 5, instead of squaring it
    { id: "B", text: "$300$" },
    { id: "C", text: "$375$" },
    // distractor: uses 8 x 15 = 120 as the area of triangle ABC, forgetting the 1/2, and then multiplies by 6.25
    { id: "D", text: "$750$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Similar Triangles and Area Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Triangle $ABC$ is a right triangle with area $\\frac{1}{2}(8)(15) = 60$ and perimeter $40$. The scale factor is $\\frac{100}{40} = 2.5$, so the area of $DEF$ is $60(2.5)^{2} = 375$.\n\n**The Full Solution:**\nStep 1: Since $8^{2} + 15^{2} = 64 + 225 = 289 = 17^{2}$, triangle $ABC$ is a right triangle with legs $8$ and $15$, so its area is $\\frac{1}{2}(8)(15) = 60$.\nStep 2: The perimeter of triangle $ABC$ is $8 + 15 + 17 = 40$, so the scale factor from $ABC$ to $DEF$ is $\\frac{100}{40} = 2.5$.\nStep 3: Areas of similar figures scale by the square of the scale factor: $60(2.5)^{2} = 60(6.25) = 375$. Check: the sides of $DEF$ are $20$, $37.5$, and $42.5$, with perimeter $100$ and area $\\frac{1}{2}(20)(37.5) = 375$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($150$): scales the area by $2.5$, the factor for lengths, not areas.\n* Choice B ($300$): multiplies by $2 \\times 2.5 = 5$ instead of $2.5^{2} = 6.25$.\n* Choice D ($750$): uses $8 \\times 15 = 120$ for the original area, leaving out the $\\frac{1}{2}$.\n\n**Test Day Takeaway:** Perimeters of similar figures scale by the scale factor $k$, but areas scale by $k^{2}$; find $k$ from the lengths first.",
  skills: ["similar-triangles"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The graph of $y = f(x)$ is shown, where $f$ is a quadratic function. The graph passes through the point $(0, 22)$. What is the value of $f(8)$?",
  diagram: { type: "parabola", params: { vertex: { h: 3, k: 4 }, a: 2, xRange: [0, 6], yRange: [-2, 24], xTickInterval: 1, yTickInterval: 4, gridInterval: 2, showVertex: true } },
  choices: [
    // distractor: computes 2(8 - 3) + 4 = 14, forgetting to square the difference
    { id: "A", text: "$14$" },
    // distractor: assumes a leading coefficient of 1, computing (8 - 3)^2 + 4 = 29 and never using the point (0, 22)
    { id: "B", text: "$29$" },
    // distractor: drops the + 4 from vertex form, computing 2(8 - 3)^2 = 50
    { id: "C", text: "$50$" },
    { id: "D", text: "$54$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** The vertex $(3, 4)$ gives $f(x) = a(x - 3)^{2} + 4$, and $(0, 22)$ gives $9a + 4 = 22$, so $a = 2$. Then $f(8) = 2(25) + 4 = 54$.\n\n**The Full Solution:**\nStep 1: The graph shows the vertex at $(3, 4)$, so $f(x) = a(x - 3)^{2} + 4$ for some constant $a$.\nStep 2: Substitute the point $(0, 22)$: $a(0 - 3)^{2} + 4 = 22$, so $9a = 18$ and $a = 2$. Thus $f(x) = 2(x - 3)^{2} + 4$.\nStep 3: Evaluate: $f(8) = 2(8 - 3)^{2} + 4 = 2(25) + 4 = 54$. Check against the graph: $f(6) = 2(9) + 4 = 22$, the same height as at $x = 0$, as symmetry about $x = 3$ requires ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): computes $2(8 - 3) + 4$ without squaring.\n* Choice B ($29$): assumes $a = 1$; that parabola would pass through $(0, 13)$, not $(0, 22)$.\n* Choice C ($50$): leaves off the $+4$ from vertex form.\n\n**Test Day Takeaway:** A vertex and one more point determine a parabola: write $a(x - h)^{2} + k$, substitute the point to find $a$, then evaluate.",
  skills: ["vertex-form", "function-evaluation"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In right triangle $ABC$, angle $C$ is a right angle and $\\tan A = \\frac{5}{12}$. The perimeter of triangle $ABC$ is $k$ times the length of $\\overline{BC}$. What is the value of $k$?",
  choices: [
    // distractor: divides the perimeter by the adjacent leg AC, 30/12 = 2.5, instead of by BC
    { id: "A", text: "$2.5$" },
    // distractor: leaves the hypotenuse out of the perimeter, computing (5 + 12)/5 = 3.4
    { id: "B", text: "$3.4$" },
    { id: "C", text: "$6$" },
    // distractor: takes the hypotenuse to be the sum of the legs, 17, giving (5 + 12 + 17)/5 = 6.8
    { id: "D", text: "$6.8$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** With $BC = 5s$ and $AC = 12s$, the hypotenuse is $13s$, so the perimeter is $30s$ and $k = \\frac{30s}{5s} = 6$.\n\n**The Full Solution:**\nStep 1: From angle $A$, $\\overline{BC}$ is the opposite leg and $\\overline{AC}$ is the adjacent leg, so $\\tan A = \\frac{BC}{AC} = \\frac{5}{12}$. Let $BC = 5s$ and $AC = 12s$ for some $s > 0$.\nStep 2: By the Pythagorean theorem, $AB = \\sqrt{(5s)^{2} + (12s)^{2}} = \\sqrt{169s^{2}} = 13s$, so the perimeter is $5s + 12s + 13s = 30s$.\nStep 3: Then $k = \\frac{30s}{5s} = 6$. Check with $s = 1$: the sides are $5$, $12$, and $13$, the perimeter is $30$, and $30 = 6 \\times 5$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2.5$): divides the perimeter by $AC$, the leg adjacent to angle $A$.\n* Choice B ($3.4$): adds only the two legs, $\\frac{5 + 12}{5} = 3.4$, leaving out the hypotenuse.\n* Choice D ($6.8$): uses $5 + 12 = 17$ as the hypotenuse; the hypotenuse is $\\sqrt{5^{2} + 12^{2}} = 13$.\n\n**Test Day Takeaway:** A trig ratio fixes the shape of a right triangle, not its size; scale the sides by $s$, find the third side, and the $s$ cancels in any ratio of lengths.",
  skills: ["soh-cah-toa"]
}
      ]
    }
  ]
};

export default practiceTest11;
