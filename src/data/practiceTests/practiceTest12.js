// Practice Test 12 - SAT Math
// v2 freshness rebuild (2026-09-07): every slot re-patterned and re-authored against the seen-corpus gate — docs/TEST_RECREATION_V2_SPEC.md
// 2 Modules, 22 questions each (44 total)
// Official-calibration recreation (2026-09-01): every item re-authored against
// the CB Educator Question Bank register (docs/TEST_RECREATION_SPEC.md).
// Slot metadata (id/type/difficulty/band/skills/pattern) frozen from the
// round-6 blueprint: M1 5E/9M/8H, domains 7/6/5/4. M2 3E/7M/12H wavy flow.
// Figure density lifted to official ~20%: M1 carries 4 diagram items
// (Q7 coordinatePoints, Q11 similarTriangles, Q12 scatterplot, Q13 twoWayTable),
// M2 carries 4 (Q1 rightTriangle, Q8 dotPlot, Q10 quadraticVertex, Q12 linearGraph).
// Numeric MC choices sorted ascending (official convention).
// Scenario families (test-12 exclusive): birding festival, quarry aggregate,
// wallpaper hanging, violin-shop repairs, cheese-shop wheels (M1);
// sign-shop vinyl, riverboat cruises, escape rooms, minigolf (M2).

export const practiceTest12 = {
  id: "practice-test-12",
  title: "Practice Test 12",
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
  question: "The table shows the peak wind speed, in meters per second, recorded at four weather stations during a storm. What was the peak wind speed at Station B, in kilometers per hour? ($1$ meter per second $= 3.6$ kilometers per hour)",
  questionTable: { headers: ["Station", "Peak wind speed (meters per second)"], rows: [["A", "18"], ["B", "25"], ["C", "12"], ["D", "30"]] },
  choices: [
    // distractor: divides by the conversion factor instead of multiplying: 25 / 3.6 = 6.9
    { id: "A", text: "$6.9$" },
    // distractor: converts Station A's 18 meters per second instead of Station B's 25: 18 x 3.6 = 64.8
    { id: "B", text: "$64.8$" },
    { id: "C", text: "$90$" },
    // distractor: converts Station D's 30 meters per second instead of Station B's 25: 30 x 3.6 = 108
    { id: "D", text: "$108$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Proportion Solving**\n\n**Choice C is correct.** The table shows a peak wind speed of $25$ meters per second at Station B, and each meter per second is $3.6$ kilometers per hour, so the speed is $25 \\times 3.6 = 90$ kilometers per hour.\n\n**The Fast Way (~15s):** Read $25$ from the Station B row and multiply by $3.6$ to get $90$.\n\n**The Full Solution:**\nStep 1: Find Station B in the table. Its peak wind speed is $25$ meters per second.\nStep 2: Write the conversion as a rate whose bottom unit is the unit being replaced: $\\frac{3.6 \\text{ km/h}}{1 \\text{ m/s}}$.\nStep 3: $25 \\text{ m/s} \\times \\frac{3.6 \\text{ km/h}}{1 \\text{ m/s}} = 90 \\text{ km/h}$. Check by converting back: $90 \\div 3.6 = 25$ meters per second, the table value ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6.9$): divides by the conversion factor instead of multiplying, giving $25 \\div 3.6 \\approx 6.9$. One meter per second is worth several kilometers per hour, so the number has to grow.\n* Choice B ($64.8$): converts the wrong row, Station A's $18$ meters per second, giving $18 \\times 3.6 = 64.8$.\n* Choice D ($108$): converts the wrong row, Station D's $30$ meters per second, giving $30 \\times 3.6 = 108$.\n\n**Test Day Takeaway:** Set a conversion up as a fraction whose denominator carries the unit you are leaving; the units cancel and the multiply-or-divide decision is made for you.",
  skills: ["unit-conversion"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "This year, a wetland has $1{,}240$ swans, which is $20\\%$ fewer than it had last year. How many swans did the wetland have last year?",
  choices: [
    // distractor: applies the 20% decrease to this year's count instead of reversing it: 1240 x 0.80 = 992
    { id: "A", text: "$992$" },
    // distractor: adds 20 swans rather than reversing a 20 percent decrease: 1240 + 20 = 1260
    { id: "B", text: "$1{,}260$" },
    // distractor: increases this year's count by 20% instead of dividing by 0.80: 1240 x 1.20 = 1488
    { id: "C", text: "$1{,}488$" },
    { id: "D", text: "$1{,}550$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Reverse-Percent**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** This year's count is $80\\%$ of last year's count, so last year's count is $1{,}240 \\div 0.80 = 1{,}550$.\n\n**The Full Solution:**\nStep 1: Let $p$ be last year's count. A count that is $20\\%$ fewer is $100\\% - 20\\% = 80\\%$ of $p$, or $0.80p$.\nStep 2: Set up the equation $0.80p = 1{,}240$.\nStep 3: Divide: $p = \\frac{1{,}240}{0.80} = 1{,}550$. Check: $20\\%$ of $1{,}550$ is $310$, and $1{,}550 - 310 = 1{,}240$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($992$): takes $20\\%$ off this year's count, $1{,}240 \\times 0.80$, instead of reversing the decrease.\n* Choice B ($1{,}260$): adds $20$ swans, treating $20\\%$ as a count.\n* Choice C ($1{,}488$): adds $20\\%$ of this year's count, $1{,}240 \\times 1.20$; the $20\\%$ is a percent of last year's count, not this year's.\n\n**Test Day Takeaway:** When the new amount is given, divide by the multiplier ($0.80$ for a $20\\%$ decrease) instead of applying the percent to the new amount.",
  skills: ["percent-word-problems", "percent-of-value"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$9, 4, 10, 2, 9, 6, 10, 3, 9, 5, 10$\nWhat is the median of the data shown?",
  choices: [
    // distractor: takes the middle (6th) value of the list as written, without first putting the values in order
    { id: "A", text: "$6$" },
    // distractor: reports the mean, 77 / 11 = 7, instead of the median
    { id: "B", text: "$7$" },
    // distractor: reports the range, 10 - 2 = 8, instead of the median
    { id: "C", text: "$8$" },
    { id: "D", text: "$9$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Median Calculation**\n\n**Choice D is correct.** In order, the eleven values are $2, 3, 4, 5, 6, 9, 9, 9, 10, 10, 10$. With $11$ values, the median is the $6$th value in the ordered list, which is $9$.\n\n**The Fast Way (~20s):** Sort the list; with eleven values the median is the $6$th: $2, 3, 4, 5, 6, 9$, so the median is $9$.\n\n**The Full Solution:**\nStep 1: Put the values in order from least to greatest: $2, 3, 4, 5, 6, 9, 9, 9, 10, 10, 10$.\nStep 2: There are $n = 11$ values, an odd number, so the median is the value in position $\\frac{n + 1}{2} = 6$.\nStep 3: The $6$th value in the ordered list is $9$. Check: five values ($2, 3, 4, 5, 6$) come before it and five values ($9, 9, 10, 10, 10$) come after it ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): is the $6$th value of the list as it is written. The median is the middle of the ordered list, so the values must be sorted first.\n* Choice B ($7$): is the mean, $\\frac{77}{11} = 7$. The four small values pull the mean below the middle value.\n* Choice C ($8$): is the range, $10 - 2 = 8$, a measure of spread rather than of center.\n\n**Test Day Takeaway:** Always sort before you look for the middle; the median is position $\\frac{n + 1}{2}$ of the ordered list, so a median question is a counting task, not an arithmetic one.",
  skills: ["find-median"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$2x + (3x - 4) + (x + 10) = 66$\nWhat value of $x$ is the solution to the given equation?",
  choices: [
    { id: "A", text: "$10$" },
    // distractor: drops the constant terms -4 and +10 and solves 6x = 66
    { id: "B", text: "$11$" },
    // distractor: adds the net constant instead of subtracting it, solving 6x = 66 + 6
    { id: "C", text: "$12$" },
    // distractor: stops at 6x = 60 and reports the value of 6x instead of x
    { id: "D", text: "$60$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice A is correct.** Combining like terms on the left side gives $6x + 6 = 66$, so $6x = 60$ and $x = 10$.\n\n**The Fast Way (~20s):** The $x$ terms add to $6x$ and the constants add to $+6$, so $6x = 60$ and $x = 10$.\n\n**The Full Solution:**\nStep 1: Combine like terms: $2x + 3x + x = 6x$, and $-4 + 10 = 6$, so the left side is $6x + 6$.\nStep 2: The equation becomes $6x + 6 = 66$. Subtract $6$ from both sides to get $6x = 60$.\nStep 3: Divide by $6$ to get $x = 10$. Check: $2(10) + (3(10) - 4) + (10 + 10) = 20 + 26 + 20 = 66$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($11$): combines only the variable terms and solves $6x = 66$. The constants $-4$ and $+10$ are part of the left side and cannot be dropped.\n* Choice C ($12$): moves the $+6$ to the right side by adding, solving $6x = 72$. Undoing $+6$ requires subtracting it.\n* Choice D ($60$): stops at $6x = 60$ and reports the value of $6x$, not $x$.\n\n**Test Day Takeaway:** Collect the variable terms and the constants separately before you touch the equals sign, then finish by solving for $x$ itself, not a multiple of it.",
  skills: ["combining-like-terms"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The function $h(t) = 0.35t + 1.4$ gives the estimated height, in meters, of a tree $t$ years after it was planted. What is the best interpretation of $0.35$ in this context?",
  choices: [
    { id: "A", text: "The estimated height of the tree increases by $0.35$ meter each year." },
    // distractor: flips the sign of the slope, reading an increasing model as a decreasing one
    { id: "B", text: "The estimated height of the tree decreases by $0.35$ meter each year." },
    // distractor: swaps the input and output, reading 0.35 as years per meter instead of meters per year
    { id: "C", text: "The estimated time for the tree to grow $1$ meter is $0.35$ year." },
    // distractor: reads 0.35 as the starting value of the model instead of its rate of change; the starting value is 1.4
    { id: "D", text: "The estimated height of the tree when it was planted is $0.35$ meter." }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice A is correct.** In $h(t) = 0.35t + 1.4$, the coefficient of $t$ is $0.35$, so each additional year after planting increases the estimated height by $0.35$ meter.\n\n**The Fast Way (~15s):** The number multiplied by $t$ is the change per year, and it is positive, so the height increases by $0.35$ meter each year.\n\n**The Full Solution:**\nStep 1: Match the function to slope-intercept form: $0.35$ is the slope and $1.4$ is the value at $t = 0$.\nStep 2: The slope is output units per input unit, here meters per year, so the estimated height changes by $0.35$ meter each year.\nStep 3: The slope is positive, so the change is an increase. Check: $h(0) = 1.4$ and $h(4) = 0.35(4) + 1.4 = 2.8$, a gain of $1.4$ meters over $4$ years, which is $0.35$ meter per year ✓\n\n**Why the wrong answers are tempting:**\n* Choice B (a decrease of $0.35$ meter each year): keeps the size of the slope but reverses its sign. The term $+0.35t$ makes the height larger as $t$ increases.\n* Choice C ($0.35$ year per meter): inverts the rate, giving years per meter rather than meters per year. The slope is always output per input.\n* Choice D ($0.35$ meter at planting): describes the starting value, which is $h(0) = 1.4$ meters, not $0.35$.\n\n**Test Day Takeaway:** Read the coefficient of the input as \"output units per one input unit,\" and carry its sign into the sentence before you compare choices.",
  skills: ["slope-intercept-form"]
},
{
  id: 6,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "Line $\\ell$ is shown in the $xy$-plane. Line $t$ is parallel to line $\\ell$ and passes through the point $(0, 0)$. Which equation defines line $t$?",
  diagram: { type: "linearGraph", params: { slope: 1.5, yIntercept: -3, xRange: [-6, 6], yRange: [-12, 6], gridInterval: 1, xTickInterval: 2, yTickInterval: 3, label: "ℓ" } },
  choices: [
    // distractor: uses the reciprocal of the slope, 2/3 instead of 3/2
    { id: "A", text: "$2x - 3y = 0$" },
    { id: "B", text: "$3x - 2y = 0$" },
    // distractor: uses the opposite of the slope, -3/2 instead of 3/2
    { id: "C", text: "$3x + 2y = 0$" },
    // distractor: gives line l itself, which has the right slope but does not pass through (0, 0)
    { id: "D", text: "$3x - 2y = 6$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Parallel Lines and Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Line $\\ell$ rises $3$ units for every $2$ units to the right, so its slope is $\\frac{3}{2}$. The line through the origin with that slope is $y = \\frac{3}{2}x$, or $3x - 2y = 0$.\n\n**The Full Solution:**\nStep 1: Read two points off the graph of line $\\ell$, $(0, -3)$ and $(2, 0)$. Its slope is $\\frac{0 - (-3)}{2 - 0} = \\frac{3}{2}$.\nStep 2: Line $t$ is parallel to line $\\ell$, so it also has slope $\\frac{3}{2}$. It passes through $(0, 0)$, so its $y$-intercept is $0$ and $y = \\frac{3}{2}x$.\nStep 3: Multiply by $2$ and rearrange: $2y = 3x$, so $3x - 2y = 0$. Check: $(0, 0)$ satisfies $3(0) - 2(0) = 0$, and solving for $y$ gives slope $\\frac{3}{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2x - 3y = 0$): passes through the origin, but its slope is $\\frac{2}{3}$; reading the run over the rise gives this line.\n* Choice C ($3x + 2y = 0$): passes through the origin, but its slope is $-\\frac{3}{2}$, so it falls from left to right.\n* Choice D ($3x - 2y = 6$): is line $\\ell$ itself. It has the right slope, but $3(0) - 2(0) = 0 \\neq 6$, so it does not pass through $(0, 0)$.\n\n**Test Day Takeaway:** Parallel lines in standard form share their $x$- and $y$-coefficients; the point the line passes through fixes the constant.",
  skills: ["writing-parallel-equation"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "In a right triangle, the measures of the two acute angles are $(4x - 6)^\\circ$ and $(x + 21)^\\circ$. What is the value of $x$?",
  correctAnswer: "15",
  explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**The correct answer is $15$.** The angles of a triangle sum to $180^\\circ$, and one angle is the $90^\\circ$ right angle, so the two acute angles sum to $90^\\circ$: $(4x - 6) + (x + 21) = 90$.\n\n**The Fast Way (~25s):** The acute angles of a right triangle add to $90$, so $5x + 15 = 90$ and $x = 15$.\n\n**The Full Solution:**\nStep 1: The angles of any triangle sum to $180^\\circ$. One angle measures $90^\\circ$, so the other two sum to $180 - 90 = 90$ degrees.\nStep 2: Combine the two expressions: $(4x - 6) + (x + 21) = 5x + 15$, and set that equal to $90$.\nStep 3: Solve: $5x = 75$, so $x = 15$. Check: the acute angles measure $4(15) - 6 = 54$ degrees and $15 + 21 = 36$ degrees, and $54 + 36 + 90 = 180$ ✓\n\n**Common Mistakes:**\n* $33$: sets the sum of the two acute angles equal to $180$ instead of $90$, forgetting that the right angle already uses $90^\\circ$ of the total.\n* $21$: solves $5x - 15 = 90$, mishandling the sign of the constant $+15$.\n* $18$: drops the constants $-6$ and $+21$ and solves $5x = 90$.\n\n**Test Day Takeaway:** In a right triangle the two acute angles are complementary; subtract the $90^\\circ$ before you set up the equation and the arithmetic stays small.",
  skills: ["triangle-angle-sum"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$x + y = k$\n$x - y = 14$\nThe solution to the given system of equations is $(x, y)$, where $k$ is a constant. If $x = 48$, what is the value of $k$?",
  choices: [
    // distractor: reports y = 34 instead of k = x + y
    { id: "A", text: "$34$" },
    // distractor: adds the difference 14 to x = 48 and reports 62 as k
    { id: "B", text: "$62$" },
    { id: "C", text: "$82$" },
    // distractor: solves x - y = 14 as y = 48 + 14 = 62, then reports k = 48 + 62 = 110
    { id: "D", text: "$110$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice C is correct.** Adding the two equations eliminates $y$: $2x = k + 14$. With $x = 48$, this gives $96 = k + 14$, so $k = 82$.\n\n**The Fast Way (~25s):** Add the equations: $2x = k + 14$, so $k = 2(48) - 14 = 82$.\n\n**The Full Solution:**\nStep 1: Add the two equations so the $y$ terms cancel: $(x + y) + (x - y) = k + 14$, which gives $2x = k + 14$.\nStep 2: Substitute $x = 48$: $2(48) = k + 14$, so $96 = k + 14$.\nStep 3: Subtract $14$ from both sides: $k = 82$. Check: from $x - y = 14$, $y = 48 - 14 = 34$, and $x + y = 48 + 34 = 82 = k$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($34$): is the value of $y$. The question asks for $k$, which equals $x + y$.\n* Choice B ($62$): adds the difference $14$ to $x$ and calls the result $k$. The sum $x + y$ and the difference $x - y$ are different quantities.\n* Choice D ($110$): solves $x - y = 14$ as $y = 48 + 14 = 62$, a sign error, and then computes $48 + 62 = 110$. Since $x - y$ is positive, $y$ must be less than $48$.\n\n**Test Day Takeaway:** When a system pairs a sum with a difference, adding the equations isolates one variable at once; then re-read the question to see which quantity it actually wants.",
  skills: ["elimination-method", "setting-up-systems"]
},
{
  id: 9,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "$ax^{2} - 24x + 18 = 0$\nThe given equation, where $a$ is a constant, has two real solutions whose sum is $4$. What is the value of $a$?",
  correctAnswer: "6",
  explanation: "**SAT Pattern: Quadratic — Vieta's Sum/Product**\n\n**The correct answer is $6$.** For $ax^2 + bx + c = 0$, the solutions sum to $-\\frac{b}{a}$. Here $b = -24$, so the sum is $\\frac{24}{a}$, and $\\frac{24}{a} = 4$ gives $a = 6$.\n\n**The Fast Way (~25s):** The sum of the solutions is $-\\frac{-24}{a} = \\frac{24}{a}$, so $\\frac{24}{a} = 4$ and $a = 6$.\n\n**The Full Solution:**\nStep 1: For any quadratic equation $ax^2 + bx + c = 0$, the sum of the solutions is $-\\frac{b}{a}$. In the given equation, $b = -24$.\nStep 2: Set the sum equal to $4$: $-\\frac{-24}{a} = 4$, that is, $\\frac{24}{a} = 4$.\nStep 3: Multiply both sides by $a$ and divide by $4$: $a = 6$. Check: $6x^2 - 24x + 18 = 6(x - 1)(x - 3)$, whose solutions are $1$ and $3$, and $1 + 3 = 4$ ✓\n\n**Common Mistakes:**\n* $-6$: uses $\\frac{b}{a}$ rather than $-\\frac{b}{a}$, so the equation becomes $\\frac{-24}{a} = 4$.\n* $4.5$: uses the product of the solutions, $\\frac{c}{a}$, instead of the sum, solving $\\frac{18}{a} = 4$.\n* $96$: multiplies instead of dividing, computing $a = 24 \\times 4$.\n\n**Test Day Takeaway:** The sum of the solutions is $-\\frac{b}{a}$ and the product is $\\frac{c}{a}$; when a question gives you the sum, solve one small equation instead of factoring.",
  skills: ["quadratic-factoring"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$4x + 3y = 9$\n$ax + 6y = 18$\nIn the given system of equations, $a$ is a constant. For what value of $a$ does the system have infinitely many solutions?",
  choices: [
    // distractor: reports the scale factor 2 that links the two equations rather than the coefficient 4 x 2 = 8
    { id: "A", text: "$2$" },
    // distractor: copies the x-coefficient 4 from the first equation without scaling it
    { id: "B", text: "$4$" },
    { id: "C", text: "$8$" },
    // distractor: scales the wrong coefficient, doubling the 6 that multiplies y to get 12
    { id: "D", text: "$12$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**Choice C is correct.** A system of two linear equations has infinitely many solutions when the equations describe the same line. Since $18 \\div 9 = 2$ and $6 \\div 3 = 2$, the second equation must be $2$ times the first: $8x + 6y = 18$, so $a = 8$.\n\n**The Fast Way (~25s):** The constants go from $9$ to $18$, a factor of $2$, and $6 \\div 3 = 2$ agrees, so $a = 4 \\times 2 = 8$.\n\n**The Full Solution:**\nStep 1: For infinitely many solutions, the two equations must have the same graph, so one equation is a constant multiple of the other.\nStep 2: Find the multiplier from the terms you know. The $y$ terms give $6 \\div 3 = 2$, and the constants agree: $18 \\div 9 = 2$.\nStep 3: Apply the same multiplier to the $x$ term: $a = 2 \\times 4 = 8$. Check: $2(4x + 3y) = 8x + 6y$ and $2(9) = 18$, so the second equation is exactly twice the first ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): stops at the multiplier itself. The multiplier tells you how to scale the coefficient, but $a$ is the scaled coefficient.\n* Choice B ($4$): copies $4$ straight from the first equation. That makes the second line $4x + 6y = 18$, which has a different slope, so the system would have exactly one solution.\n* Choice D ($12$): applies the multiplier to the wrong coefficient, doubling $6$ instead of $4$.\n\n**Test Day Takeaway:** Infinitely many solutions means every coefficient and the constant share one multiplier; find it from the terms you already know, then apply it to the unknown.",
  skills: ["system-solution-types", "infinite-solutions-condition"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the figure, two lines intersect at a point. What is the value of $y$?",
  diagram: { type: "intersectingLines", params: { angles: ["(4x - 12)°", "y°", "(2x + 24)°", ""], lineLabels: ["", ""], angle0Measure: 60 } },
  choices: [
    // distractor: reports x = 18 rather than the angle measure the question asks for
    { id: "A", text: "$18$" },
    // distractor: reports the measure of the labeled angle, 60 degrees, instead of its supplement y
    { id: "B", text: "$60$" },
    // distractor: treats the two labeled angles as supplementary rather than equal, getting x = 28 and y = 80
    { id: "C", text: "$80$" },
    { id: "D", text: "$120$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Vertical Angles**\n\n**Choice D is correct.** The angles labeled $(4x - 12)^\\circ$ and $(2x + 24)^\\circ$ are vertical angles, so $4x - 12 = 2x + 24$, which gives $x = 18$ and an angle measure of $60^\\circ$. The angle labeled $y^\\circ$ is adjacent to a $60^\\circ$ angle along a line, so $y = 180 - 60 = 120$.\n\n**The Fast Way (~30s):** Set the vertical angles equal: $4x - 12 = 2x + 24$, so $x = 18$ and each measures $60^\\circ$. Then $y = 180 - 60 = 120$.\n\n**The Full Solution:**\nStep 1: The angles labeled $(4x - 12)^\\circ$ and $(2x + 24)^\\circ$ are opposite each other at the intersection, so they are vertical angles and have equal measures: $4x - 12 = 2x + 24$.\nStep 2: Solve: $2x = 36$, so $x = 18$. Each of these angles measures $4(18) - 12 = 60$ degrees, and $2(18) + 24 = 60$ degrees confirms it.\nStep 3: The angle labeled $y^\\circ$ and a $60^\\circ$ angle together form a straight angle, so $y = 180 - 60 = 120$. Check: the four angles measure $60$, $120$, $60$, and $120$ degrees, which total $360$ degrees ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($18$): is the value of $x$, not the value of $y$.\n* Choice B ($60$): is the measure of each labeled vertical angle. The angle labeled $y^\\circ$ is adjacent to those angles, not opposite them.\n* Choice C ($80$): treats $4x - 12$ and $2x + 24$ as supplementary instead of equal, giving $x = 28$, an angle of $100^\\circ$, and $y = 80$. Vertical angles are equal; adjacent angles are supplementary.\n\n**Test Day Takeaway:** At an intersection, name each pair of angles as vertical (equal) or adjacent (summing to $180^\\circ$) before writing any equation, then check which value the question asks for.",
  skills: ["angles"]
},
{
  id: 12,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A weather station recorded $204$ centimeters of snowfall in 2024, which was $15\\%$ less than in 2023. The snowfall in 2023 was $20\\%$ more than in 2022. How many centimeters of snowfall did the station record in 2022?",
  correctAnswer: "200",
  explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**The correct answer is $200$.** If $s$ is the 2022 snowfall, then the 2023 snowfall is $1.20s$ and the 2024 snowfall is $0.85(1.20s) = 1.02s$. So $1.02s = 204$ and $s = 200$.\n\n**The Fast Way (~30s):** The two changes multiply: $1.20 \\times 0.85 = 1.02$, so $s = 204 \\div 1.02 = 200$.\n\n**The Full Solution:**\nStep 1: Let $s$ be the 2022 snowfall, in centimeters. A $20\\%$ increase makes the 2023 snowfall $1.20s$.\nStep 2: A $15\\%$ decrease from 2023 leaves $85\\%$ of that amount, so the 2024 snowfall is $0.85 \\times 1.20s = 1.02s$.\nStep 3: Solve $1.02s = 204$ to get $s = 200$. Check: $200 \\times 1.20 = 240$ centimeters in 2023, and $240 - 0.15(240) = 240 - 36 = 204$ centimeters in 2024 ✓\n\n**Common Mistakes:**\n* $240$: undoes only the $15\\%$ decrease, $204 \\div 0.85 = 240$, which is the 2023 snowfall, not the 2022 snowfall.\n* $170$: undoes only the $20\\%$ increase, $204 \\div 1.20 = 170$, skipping the decrease.\n* $194.3$: treats the two changes as a net $5\\%$ increase and computes $204 \\div 1.05$. Percent changes combine by multiplying, not by adding.\n\n**Test Day Takeaway:** Chain percent changes as a product of multipliers, then divide the final amount by that single product to work all the way back.",
  skills: ["percent-of-value", "percent-word-problems"]
},
{
  id: 13,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "The scatterplot shows the weekly running distance $x$, in kilometers, and the time $y$, in seconds, that each of $12$ runners took to run $1$ mile. An equation of the line of best fit shown is $y = 452 - 0.8x$. Which statement is the best interpretation of the slope of the line of best fit?",
  diagram: { type: "scatterplot", params: { points: [[22, 440], [28, 424], [32, 430], [38, 418], [42, 423], [46, 411], [52, 414], [58, 400], [62, 406], [68, 393], [72, 398], [78, 386]], xMin: 20, xMax: 80, yMin: 380, yMax: 450, xGridStep: 5, yGridStep: 10, xLabelStep: 10, yLabelStep: 20, xLabel: "Weekly running distance (km)", yLabel: "Time to run 1 mile (s)", bestFitLine: { slope: -0.8, intercept: 452 } } },
  choices: [
    // distractor: swaps the input and the output, reading the slope as kilometers per second instead of seconds per kilometer
    { id: "A", text: "For each additional second of time to run $1$ mile, the predicted weekly running distance decreases by $0.8$ kilometer." },
    { id: "B", text: "For each additional kilometer of weekly running distance, the predicted time to run $1$ mile decreases by $0.8$ second." },
    // distractor: ignores the negative sign of the slope, turning a decreasing model into an increasing one
    { id: "C", text: "For each additional kilometer of weekly running distance, the predicted time to run $1$ mile increases by $0.8$ second." },
    // distractor: reads 0.8 as the value at x = 0; that value is the y-intercept, 452 seconds
    { id: "D", text: "For a runner whose weekly running distance is $0$ kilometers, the predicted time to run $1$ mile is $0.8$ second." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Scatterplot Line of Best Fit**\n\n**Choice B is correct.** In $y = 452 - 0.8x$, the slope is $-0.8$, so each additional kilometer of weekly running distance is associated with a predicted time to run $1$ mile that is $0.8$ second less.\n\n**The Fast Way (~20s):** The slope is the change in predicted $y$ per one unit of $x$. It is $-0.8$, so the predicted time decreases by $0.8$ second per kilometer.\n\n**The Full Solution:**\nStep 1: Identify the variables: $x$ is weekly running distance, in kilometers, and $y$ is the time to run $1$ mile, in seconds.\nStep 2: The slope of a line of best fit is the predicted change in $y$ for each increase of $1$ in $x$, so its units here are seconds per kilometer.\nStep 3: The slope is $-0.8$, a predicted decrease of $0.8$ second for each additional kilometer. Check: at $x = 40$ the line gives $452 - 32 = 420$ seconds, and at $x = 50$ it gives $452 - 40 = 412$ seconds, a decrease of $8$ seconds over $10$ kilometers, or $0.8$ second per kilometer ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.8$ kilometer per second): reverses the roles of the variables. Weekly distance is $x$, so the slope is seconds per kilometer, not kilometers per second.\n* Choice C (an increase of $0.8$ second): keeps the size of the slope but drops the negative sign, which reverses the trend in the data.\n* Choice D ($0.8$ second at $0$ kilometers): describes the predicted value when $x = 0$, which is the y-intercept, $452$ seconds, not $0.8$.\n\n**Test Day Takeaway:** State the slope with its units attached, \"seconds per kilometer,\" before comparing statements; the wrong choices usually break the units or the sign.",
  skills: ["scatterplots", "linear-functions"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$x^{2} + y^{2} - 12x + 8y = c$\nIn the $xy$-plane, the graph of the given equation is a circle with circumference $20\\pi$, where $c$ is a constant. What is the value of $c$?",
  choices: [
    // distractor: completes the square without halving the linear coefficients, subtracting 144 and 64 to get 100 - 208 = -108
    { id: "A", text: "$-108$" },
    // distractor: uses the radius 10 in place of the radius squared, computing 10 - 52 = -42
    { id: "B", text: "$-42$" },
    { id: "C", text: "$48$" },
    // distractor: adds the completing-the-square constants instead of subtracting them: 100 + 52 = 152
    { id: "D", text: "$152$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice C is correct.** A circumference of $20\\pi$ means the radius is $10$. Completing the square gives $(x - 6)^2 + (y + 4)^2 = c + 52$, so $c + 52 = 10^2 = 100$ and $c = 48$.\n\n**The Fast Way (~35s):** Radius $10$ means the right side of the standard form is $100$; completing the square adds $36 + 16 = 52$ to the left side, so $c = 100 - 52 = 48$.\n\n**The Full Solution:**\nStep 1: The circumference of a circle is $2\\pi r$. From $2\\pi r = 20\\pi$, the radius is $r = 10$.\nStep 2: Complete the square in each variable. Half of $-12$ is $-6$, and $(-6)^2 = 36$; half of $8$ is $4$, and $4^2 = 16$. Adding $36$ and $16$ to both sides gives $(x - 6)^2 + (y + 4)^2 = c + 52$.\nStep 3: In standard form the right side equals $r^2 = 100$, so $c + 52 = 100$ and $c = 48$. Check: $(x - 6)^2 + (y + 4)^2 = 100$ expands to $x^2 + y^2 - 12x + 8y + 52 = 100$, that is, $x^2 + y^2 - 12x + 8y = 48$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-108$): squares the whole coefficients instead of half of them, adding $144$ and $64$ and getting $100 - 208 = -108$.\n* Choice B ($-42$): uses the radius $10$ on the right side instead of $r^2 = 100$, giving $10 - 52 = -42$. Standard form uses the square of the radius.\n* Choice D ($152$): adds $52$ to $100$ instead of subtracting it. The constants were added to the left side, so $c$ is $52$ less than $100$.\n\n**Test Day Takeaway:** Convert a given circumference or area to $r^2$ first, then complete the square and match the right sides.",
  skills: ["circle-equation"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A lake had $250$ turtles in 2015, and the number of turtles has increased by $8\\%$ every $5$ years since then. The function $p$ gives the estimated number of turtles in the lake $t$ years after 2015. Which equation defines $p$?",
  choices: [
    // distractor: uses 0.08 as the growth factor instead of 1.08, which models a 92% drop every five years
    { id: "A", text: "$p(t) = 250(0.08)^{t/5}$" },
    // distractor: multiplies t by 5 instead of dividing, applying the 8% increase five times per year
    { id: "B", text: "$p(t) = 250(1.08)^{5t}$" },
    // distractor: converts 8% per five years into 40% per year by multiplying, treating compound growth as linear
    { id: "C", text: "$p(t) = 250(1.4)^{t}$" },
    { id: "D", text: "$p(t) = 250(1.08)^{t/5}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice D is correct.** An $8\\%$ increase multiplies the number of turtles by $1.08$, and one such increase happens every $5$ years. In $t$ years there are $\\frac{t}{5}$ increases, so $p(t) = 250(1.08)^{t/5}$.\n\n**The Fast Way (~30s):** Growth factor $1.08$, applied once per $5$ years, so the exponent is $\\frac{t}{5}$.\n\n**The Full Solution:**\nStep 1: The 2015 value, $250$ turtles, is the coefficient, since $t = 0$ in 2015.\nStep 2: An increase of $8\\%$ multiplies the previous amount by $1 + 0.08 = 1.08$, so $1.08$ is the growth factor.\nStep 3: The factor applies once per $5$-year period, and $t$ years contain $\\frac{t}{5}$ periods, so $p(t) = 250(1.08)^{t/5}$. Check: $p(5) = 250(1.08)^{1} = 270$, which is $8\\%$ more than $250$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (base $0.08$): uses $0.08$ rather than $1.08$. Then $p(5) = 250(0.08) = 20$, a $92\\%$ decrease instead of an $8\\%$ increase.\n* Choice B (exponent $5t$): applies the increase five times each year instead of once every five years. Then $p(5) = 250(1.08)^{25} \\approx 1{,}712$.\n* Choice C (base $1.4$): turns \"$8\\%$ every $5$ years\" into \"$40\\%$ every year\" by multiplying $8\\%$ by $5$. Even the yearly growth factor would be $1.08^{1/5} \\approx 1.0155$, not $1.4$.\n\n**Test Day Takeaway:** Put the percent in the base and the timing in the exponent; if one increase takes $n$ years, the exponent is $\\frac{t}{n}$, never $nt$.",
  skills: ["exponential-growth-decay"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table shows the total cost, in dollars, to rent a picnic shelter for different numbers of guests. The total cost is a linear function of the number of guests. If the total cost can be at most $\\$600$, what is the greatest number of guests possible?",
  questionTable: { headers: ["Number of guests", "Total cost (dollars)"], rows: [["4", "117"], ["6", "153"], ["9", "207"], ["12", "261"]] },
  choices: [
    { id: "A", text: "$30$" },
    // distractor: rounds 30.83 up instead of down, so the cost is 603 dollars, over the 600-dollar limit
    { id: "B", text: "$31$" },
    // distractor: ignores the 45-dollar fixed cost and computes 600 / 18 = 33.3, rounded down to 33
    { id: "C", text: "$33$" },
    // distractor: adds the 45-dollar fixed cost instead of subtracting it, computing (600 + 45) / 18 = 35.8, rounded down to 35
    { id: "D", text: "$35$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Linear Cost Setup**\n\n**Choice A is correct.** The table gives a rate of $\\$18$ per guest and a fixed cost of $\\$45$, so the total cost is $45 + 18n$. Solving $45 + 18n \\leq 600$ gives $n \\leq 30.8\\overline{3}$, so the greatest number of guests is $30$.\n\n**The Fast Way (~40s):** The cost per guest is $\\frac{153 - 117}{6 - 4} = 18$, and the fixed cost is $117 - 4(18) = 45$, so $n \\leq \\frac{600 - 45}{18} \\approx 30.8$, which gives $30$ guests.\n\n**The Full Solution:**\nStep 1: Find the cost per guest from two rows of the table: $\\frac{153 - 117}{6 - 4} = \\frac{36}{2} = 18$ dollars per guest.\nStep 2: Find the fixed cost by working back to $0$ guests: $117 - 4(18) = 45$ dollars. So the total cost is $C = 45 + 18n$, and the last row confirms it: $45 + 18(12) = 261$.\nStep 3: Solve $45 + 18n \\leq 600$: $18n \\leq 555$, so $n \\leq 30.8\\overline{3}$. Since $n$ is a whole number, the greatest value is $30$. Check: $45 + 18(30) = 585 \\leq 600$, while $31$ guests would cost $45 + 18(31) = 603$, which is more than $600$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($31$): rounds $30.8$ up. Rounding up a \"greatest number\" answer breaks the limit, here by $\\$3$.\n* Choice C ($33$): leaves out the fixed $\\$45$ and divides the whole $\\$600$ by $18$. The fixed cost is charged once no matter how many guests there are.\n* Choice D ($35$): adds the fixed cost to $600$ instead of subtracting it, computing $\\frac{645}{18} \\approx 35.8$.\n\n**Test Day Takeaway:** Get the rate from two rows and the fixed cost from one row, then round a \"greatest number\" answer down, even when the decimal is close to the next whole number.",
  skills: ["word-problem-to-equation"]
},
{
  id: 17,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$2x^{2} + bx + 18 = 0$\nIn the given equation, $b$ is an integer. If the equation has no real solutions, what is the greatest possible value of $b$?",
  choices: [
    // distractor: omits the factor 4 in b^2 - 4ac, solving b^2 < 36 instead of b^2 < 144
    { id: "A", text: "$5$" },
    { id: "B", text: "$11$" },
    // distractor: includes b = 12, where the discriminant is 0 and the equation has exactly one real solution
    { id: "C", text: "$12$" },
    // distractor: reports the bound on b^2, 144, instead of the bound on b
    { id: "D", text: "$144$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Discriminant with Integer Bound**\n\n**Choice B is correct.** A quadratic equation has no real solutions when its discriminant is negative: $b^2 - 4(2)(18) < 0$, so $b^2 < 144$ and $-12 < b < 12$. The greatest integer in that interval is $11$.\n\n**The Fast Way (~30s):** $b^2 < 4(2)(18) = 144$ gives $-12 < b < 12$, so the greatest integer value is $11$.\n\n**The Full Solution:**\nStep 1: The equation $ax^2 + bx + c = 0$ has no real solutions when $b^2 - 4ac < 0$. Here $a = 2$ and $c = 18$.\nStep 2: Compute: $b^2 - 4(2)(18) = b^2 - 144$, so the condition is $b^2 < 144$, which means $-12 < b < 12$.\nStep 3: The inequality is strict, so $b = 12$ is not allowed, and the greatest integer value is $11$. Check: $b = 11$ gives $121 - 144 = -23 < 0$, no real solutions, while $b = 12$ gives $144 - 144 = 0$, one real solution ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): leaves out the $4$ in $b^2 - 4ac$ and solves $b^2 < 2(18) = 36$, which caps $b$ at $5$ instead of $11$.\n* Choice C ($12$): keeps the boundary value. At $b = 12$ the discriminant is exactly $0$, so the equation has one real solution, $x = -3$.\n* Choice D ($144$): is the bound on $b^2$, not on $b$. The value of $b$ must satisfy $b^2 < 144$, so $b$ is less than $12$.\n\n**Test Day Takeaway:** Translate \"no real solutions\" into $b^2 - 4ac < 0$, solve for the boundary, and then let the word \"integer\" and the strict inequality decide whether the boundary value counts.",
  skills: ["discriminant-analysis"]
},
{
  id: 18,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "Triangles $RST$ and $XYZ$ are similar, where $R$, $S$, and $T$ correspond to $X$, $Y$, and $Z$, respectively. Angle $T$ is a right angle, $RT = 64$, and $ST = 120$. What is the value of $\\sin X$?",
  correctAnswer: "15/17",
  explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**The correct answer is $\\frac{15}{17}$.** Corresponding angles of similar triangles are congruent, so $\\sin X = \\sin R$. In right triangle $RST$, the hypotenuse is $RS = \\sqrt{64^2 + 120^2} = 136$, and the side opposite angle $R$ is $ST = 120$, so $\\sin R = \\frac{120}{136} = \\frac{15}{17}$.\n\n**The Fast Way (~40s):** $X$ corresponds to $R$, so find $\\sin R$. The legs $64$ and $120$ are $8$ times $8$ and $15$, so the hypotenuse is $8 \\times 17 = 136$, and $\\sin R = \\frac{120}{136} = \\frac{15}{17}$.\n\n**The Full Solution:**\nStep 1: Since $R$ corresponds to $X$, angle $X$ is congruent to angle $R$, so $\\sin X = \\sin R$.\nStep 2: Angle $T$ is the right angle, so $RS$ is the hypotenuse: $RS^2 = 64^2 + 120^2 = 4{,}096 + 14{,}400 = 18{,}496$, and $RS = 136$.\nStep 3: The side opposite angle $R$ is $ST = 120$, so $\\sin R = \\frac{120}{136} = \\frac{15}{17}$. Check: $\\sin S = \\frac{RT}{RS} = \\frac{64}{136} = \\frac{8}{17}$, and $\\left(\\frac{15}{17}\\right)^2 + \\left(\\frac{8}{17}\\right)^2 = \\frac{225 + 64}{289} = 1$ ✓\n\n**Common Mistakes:**\n* $8/17$: uses the side adjacent to angle $R$, $RT = 64$, giving $\\sin S$ instead of $\\sin R$.\n* $15/8$: divides the two legs, $\\frac{120}{64}$, which is $\\tan R$, not $\\sin R$.\n* $8/15$: divides the legs the other way, $\\frac{64}{120}$, which is $\\tan S$.\n\n**Test Day Takeaway:** Similar triangles have congruent corresponding angles, so a trig ratio in one triangle equals the same ratio at the corresponding angle in the other; find the side opposite that angle before you divide.",
  skills: ["soh-cah-toa", "pythagorean-theorem"]
},
{
  id: 19,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$\\left(7^{x}\\right)^{3} = \\sqrt{7^{2x + 16}}$\nWhat value of $x$ is the solution to the given equation?",
  correctAnswer: "4",
  explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~30s):** The left side is $7^{3x}$, and the square root halves the exponent on the right: $7^{x + 8}$. So $3x = x + 8$, and $x = 4$.\n\n**The Full Solution:**\nStep 1: A power of a power multiplies the exponents: $\\left(7^{x}\\right)^{3} = 7^{3x}$.\nStep 2: A square root is the $\\frac{1}{2}$ power: $\\sqrt{7^{2x + 16}} = 7^{\\frac{2x + 16}{2}} = 7^{x + 8}$.\nStep 3: Both sides have base $7$, so the exponents are equal: $3x = x + 8$, which gives $2x = 8$ and $x = 4$. Check: the left side is $7^{12}$, and the right side is $\\sqrt{7^{24}} = 7^{12}$ ✓\n\n**Common Mistakes:**\n* $8$: halves only the $16$ in the exponent and solves $3x = 2x + 8$.\n* $16$: ignores the square root and solves $3x = 2x + 16$.\n* $-32$: doubles the exponent instead of halving it, solving $3x = 4x + 32$.\n\n**Test Day Takeaway:** Rewrite both sides as powers of the same base (a root is a fractional power), then set the exponents equal.",
  skills: ["exponential-functions"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "Ana deposited \\$8,000 into a savings account. The value of the account increases by $6\\%$ each year. Which equation gives the value $V$, in dollars, of the account $m$ months after Ana made the deposit?",
  choices: [
    // distractor: uses the rate 0.06 as the growth factor instead of 1 + 0.06 = 1.06
    { id: "A", text: "$V = 8{,}000(0.06)^{\\frac{m}{12}}$" },
    // distractor: splits 6% into 0.5% each month, but (1.005)^12 is about 1.0617, more than a 6% increase per year
    { id: "B", text: "$V = 8{,}000(1.005)^{m}$" },
    // distractor: multiplies the number of months by 12 instead of dividing by 12 to get years
    { id: "C", text: "$V = 8{,}000(1.06)^{12m}$" },
    { id: "D", text: "$V = 8{,}000(1.06)^{\\frac{m}{12}}$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Compound Interest**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** A $6\\%$ increase each year is a factor of $1.06$ per year, and $m$ months is $\\frac{m}{12}$ years, so $V = 8{,}000(1.06)^{\\frac{m}{12}}$.\n\n**The Full Solution:**\nStep 1: Increasing by $6\\%$ multiplies the value by $1 + 0.06 = 1.06$ each year, so after $t$ years the value is $8{,}000(1.06)^{t}$.\nStep 2: There are $12$ months in a year, so $m$ months is $t = \\frac{m}{12}$ years.\nStep 3: Substitute: $V = 8{,}000(1.06)^{\\frac{m}{12}}$. Check: after $m = 12$ months, $V = 8{,}000(1.06)^{1} = 8{,}480$, which is $6\\%$ more than $8{,}000$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: uses $0.06$ as the base; a base less than $1$ would make the value shrink each year.\n* Choice B: divides $6\\%$ evenly among $12$ months, but after $12$ months this gives $8{,}000(1.005)^{12} \\approx 8{,}494$, an increase of about $6.2\\%$, not $6\\%$.\n* Choice C: after $12$ months the exponent would be $144$, as though $144$ years had passed.\n\n**Test Day Takeaway:** Write the growth factor per year first, then convert the time variable into years (here $\\frac{m}{12}$) in the exponent.",
  skills: ["exponential-functions"]
},
{
  id: 21,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The function $N(t) = 32(1.5)^{t/3}$ models the number of deer in a forest $t$ years after a study began. The table shows the number of deer counted in the forest in four years of the study. Which of the following is the best interpretation of $1.5$ in this context?",
  questionTable: { headers: ["Years after the study began", "Number of deer counted"], rows: [["0", "32"], ["4", "55"], ["8", "94"], ["12", "162"]] },
  choices: [
    // distractor: reads the growth factor 1.5 as an amount added each year, describing linear rather than exponential growth
    { id: "A", text: "The estimated number of deer increases by $1.5$ each year." },
    { id: "B", text: "The estimated number of deer increases by $50\\%$ every $3$ years." },
    // distractor: ignores the division by 3 in the exponent, applying the factor once per year instead of once every 3 years
    { id: "C", text: "The estimated number of deer increases by $50\\%$ each year." },
    // distractor: reads the factor 1.5 as a 1.5% increase, when a factor of 1.5 means a 50% increase
    { id: "D", text: "The estimated number of deer increases by $1.5\\%$ every $3$ years." }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth Interpretation**\n\n**Choice B is correct.** In $N(t) = 32(1.5)^{t/3}$, the base $1.5$ is applied once for every $3$ years, and multiplying by $1.5$ is the same as increasing by $50\\%$. So the estimated number of deer increases by $50\\%$ every $3$ years.\n\n**The Fast Way (~30s):** The base $1.5$ means a $50\\%$ increase, and the $3$ dividing $t$ means one increase every $3$ years.\n\n**The Full Solution:**\nStep 1: In a model of the form $a(b)^{t/n}$, $a$ is the starting value, $b$ is the factor applied once per period, and $n$ is the length of the period. Here $a = 32$, $b = 1.5$, and $n = 3$ years.\nStep 2: Increasing $t$ by $3$ increases the exponent by $1$, which multiplies the number of deer by $1.5$. Multiplying by $1.5 = 1 + 0.5$ is an increase of $50\\%$.\nStep 3: So the estimated number of deer increases by $50\\%$ every $3$ years. Check against the table: $12$ years contain four $3$-year periods, so the model predicts $32(1.5)^{4} = 32(5.0625) = 162$ deer, matching the year-$12$ count ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (an increase of $1.5$ deer each year): treats $1.5$ as an amount added each year. The table shows increases of $23$, $39$, and $68$ deer over equal $4$-year spans, so the growth is not linear.\n* Choice C (an increase of $50\\%$ each year): ignores the $3$ in the exponent. A $50\\%$ yearly increase would give $32(1.5)^{4} = 162$ deer by year $4$, but the table shows $55$.\n* Choice D (an increase of $1.5\\%$ every $3$ years): reads the factor $1.5$ as $1.5\\%$. A factor of $1.5$ is a $50\\%$ increase; a $1.5\\%$ increase would be a factor of $1.015$.\n\n**Test Day Takeaway:** Read an exponential model as three facts: the coefficient is the starting value, the base is the multiplier, and the number dividing $t$ is how long one multiplication takes.",
  skills: ["exponential-growth-decay"]
},
{
  id: 22,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "In a game, a player earns $5$ points for each red token and $3$ points for each blue token. Leo earned $254$ points. The number of blue tokens he earned was $2$ less than half the number of red tokens he earned. How many blue tokens did Leo earn?",
  choices: [
    { id: "A", text: "$18$" },
    // distractor: reports the 40 red tokens instead of the blue tokens the question asks for
    { id: "B", text: "$40$" },
    // distractor: reverses the relationship, making the number of red tokens 2 less than half the number of blue tokens, which gives 48 blue tokens
    { id: "C", text: "$48$" },
    // distractor: reports the total number of tokens, 40 + 18 = 58
    { id: "D", text: "$58$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice A is correct.** With $r$ red tokens and $b$ blue tokens, $5r + 3b = 254$ and $b = \\frac{r}{2} - 2$. Substituting gives $6.5r - 6 = 254$, so $r = 40$ and $b = 18$.\n\n**The Fast Way (~50s):** Replace $b$ with $\\frac{r}{2} - 2$: $5r + 1.5r - 6 = 254$, so $6.5r = 260$, $r = 40$, and $b = 20 - 2 = 18$.\n\n**The Full Solution:**\nStep 1: Let $r$ be the number of red tokens and $b$ the number of blue tokens. The points give $5r + 3b = 254$.\nStep 2: \"$2$ less than half the number of red tokens\" is $\\frac{r}{2} - 2$, so $b = \\frac{r}{2} - 2$. Substitute into the first equation: $5r + 3\\left(\\frac{r}{2} - 2\\right) = 254$, which becomes $5r + 1.5r - 6 = 254$.\nStep 3: Solve: $6.5r = 260$, so $r = 40$, and then $b = \\frac{40}{2} - 2 = 18$. Check: $5(40) + 3(18) = 200 + 54 = 254$ points, and $18$ is $2$ less than half of $40$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($40$): is the number of red tokens. It comes out of the algebra first, which makes it easy to stop there.\n* Choice C ($48$): reverses the relationship to $r = \\frac{b}{2} - 2$, which gives $11r = 242$, $r = 22$, and $b = 48$. The sentence describes the blue tokens in terms of the red tokens, not the other way around.\n* Choice D ($58$): adds the two counts, $40 + 18$, giving the total number of tokens rather than the number of blue tokens.\n\n**Test Day Takeaway:** Write a comparison sentence as an equation in the order it is stated, then circle the quantity the question asks for before you start solving.",
  skills: ["substitution-method"]
}
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
// Practice Test 12 — Math Module 2 (22 questions)
// Distribution: 3E / 7M / 12H. Wavy flow: easies at Q1/Q2/Q8 (Q8 breather),
// mediums at Q3/Q4/Q5/Q10/Q11/Q14/Q19, hards elsewhere; Q21-22 closers.
// Warm-ups Q1-5 each carry 2+ steps or a trap (missing-leg + shifted ask,
// intercept-vs-slope, excluded-value reasoning, negative-reciprocal chain,
// direction-flipped successive percents). All content re-authored fresh
// 2026-09-01; slot metadata and SAT Pattern headers frozen.

{
  id: 1,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "The table shows the width and the perimeter of each of two rectangles. What is the area, in square meters, of rectangle A?",
  questionTable: { headers: ["Rectangle", "Width (meters)", "Perimeter (meters)"], rows: [["A", "$18$", "$96$"], ["B", "$12$", "$76$"]] },
  choices: [
    // distractor: uses rectangle B's measurements: length 38 - 12 = 26, area 26 x 12 = 312
    { id: "A", text: "$312$" },
    { id: "B", text: "$540$" },
    // distractor: uses half the perimeter, 48, as the length without subtracting the width: 48 x 18 = 864
    { id: "C", text: "$864$" },
    // distractor: multiplies the whole perimeter by the width: 96 x 18 = 1,728
    { id: "D", text: "$1{,}728$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Rectangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Half of rectangle A's perimeter, $48$, is its length plus its width, so the length is $48 - 18 = 30$ meters and the area is $30 \\times 18 = 540$ square meters.\n\n**The Full Solution:**\nStep 1: The perimeter of a rectangle is $2(\\ell + w)$, so for rectangle A, $2(\\ell + 18) = 96$.\nStep 2: Divide both sides by $2$: $\\ell + 18 = 48$, so $\\ell = 30$ meters.\nStep 3: The area is $\\ell w = 30 \\times 18 = 540$ square meters. Check: $2(30 + 18) = 2(48) = 96$, the perimeter in the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($312$): uses rectangle B's row instead. Its length is $38 - 12 = 26$ meters, and $26 \\times 12 = 312$.\n* Choice C ($864$): treats half the perimeter, $48$, as the length without subtracting the width: $48 \\times 18 = 864$.\n* Choice D ($1{,}728$): multiplies the whole perimeter by the width: $96 \\times 18 = 1{,}728$.\n\n**Test Day Takeaway:** Half of a rectangle's perimeter is length plus width; subtract the known side before you multiply, and make sure you are reading the row the question asks about.",
  skills: ["triangle-area"]
},
{
  id: 2,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "So far, $900$ of the $3{,}600$ posters in an order have been printed. Each of $c$ printers prints $r$ posters per hour, and each printer runs $h$ hours per day. Which expression represents the number of additional days needed to print the rest of the order?",
  choices: [
    // distractor: divides the 900 posters already printed instead of the 2,700 that remain
    { id: "A", text: "$\\frac{900}{crh}$" },
    { id: "B", text: "$\\frac{2700}{crh}$" },
    // distractor: multiplies by the hours per day instead of dividing by them, so h ends up in the numerator
    { id: "C", text: "$\\frac{2700h}{cr}$" },
    // distractor: uses the full order of 3,600 posters instead of the 2,700 that remain
    { id: "D", text: "$\\frac{3600}{crh}$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Word-to-Expression Translation**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Days needed is the remaining work divided by the work done per day: $3{,}600 - 900 = 2{,}700$ posters remain, and the printers print $crh$ posters per day, so it needs $\\frac{2700}{crh}$ days.\n\n**The Full Solution:**\nStep 1: Find the work left: $3{,}600 - 900 = 2{,}700$ posters.\nStep 2: Find the daily output. One printer prints $r$ posters per hour for $h$ hours, or $rh$ posters per day, so $c$ printers print $crh$ posters per day.\nStep 3: If $d$ is the number of additional days, then $crh \\cdot d = 2{,}700$, so $d = \\frac{2700}{crh}$. Check with $c = 3$, $r = 25$, $h = 4$: the printers print $300$ posters per day, and $\\frac{2700}{300} = 9$ days, which matches $\\frac{2700}{3 \\cdot 25 \\cdot 4} = 9$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{900}{crh}$): divides the number of posters already printed. The question asks how long the remaining $2{,}700$ posters will take.\n* Choice C ($\\frac{2700h}{cr}$): multiplies by $h$ instead of dividing by it. Running more hours each day should shorten the job, so $h$ belongs in the denominator.\n* Choice D ($\\frac{3600}{crh}$): uses the whole order, ignoring the $900$ posters that are already finished.\n\n**Test Day Takeaway:** For a \"how many more days\" expression, subtract what is done first, then divide by the total rate per day; plugging in easy numbers confirms which variables belong in the denominator.",
  skills: ["word-problem-to-equation"]
},
{
  id: 3,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "A van traveled $240$ miles, driving at $30$ miles per hour for $c$ hours and at $60$ miles per hour for $h$ hours. The equation $30c + 60h = 240$ represents this situation. If $h = 3$, what is the value of $c$?",
  choices: [
    { id: "A", text: "$2$" },
    // distractor: substitutes 3 for c instead of h: 30(3) + 60h = 240 gives 2.5
    { id: "B", text: "$2.5$" },
    // distractor: substitutes 3 for h but drops the 60: 30c + 60 = 240 gives c = 6
    { id: "C", text: "$6$" },
    // distractor: ignores the miles driven at 60 miles per hour: 240/30 = 8
    { id: "D", text: "$8$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Linear Equation in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Substitute $h = 3$: $30c + 180 = 240$, so $30c = 60$ and $c = 2$.\n\n**The Full Solution:**\nStep 1: Substitute $h = 3$ into the equation: $30c + 60(3) = 240$.\nStep 2: Simplify: $30c + 180 = 240$, so $30c = 60$.\nStep 3: Divide by $30$: $c = 2$. Check: $30(2) + 60(3) = 60 + 180 = 240$ miles ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($2.5$): substitutes $3$ for $c$ instead of $h$ and solves $90 + 60h = 240$.\n* Choice C ($6$): replaces $60h$ with $60$ instead of $60(3)$, solving $30c + 60 = 240$.\n* Choice D ($8$): divides the whole $240$ miles by $30$, ignoring the $180$ miles driven at $60$ miles per hour.\n\n**Test Day Takeaway:** Match each variable to its meaning before substituting; each term of $30c + 60h$ is a distance in miles.",
  skills: ["coordinate-geometry"]
},
{
  id: 4,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$6x = k$\nIn the given equation, $k$ is a constant. If the solution to the equation is $x = k - 20$, what is the value of $k$?",
  choices: [
    // distractor: solves 6x = k as x = 6k, then solves 6k = k - 20 to get k = -4
    { id: "A", text: "$-4$" },
    // distractor: reports the solution x = 4 instead of the value of k
    { id: "B", text: "$4$" },
    { id: "C", text: "$24$" },
    // distractor: stops at 5k = 120 without dividing by 5
    { id: "D", text: "$120$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The solution of $6x = k$ is $x = \\frac{k}{6}$. Setting $\\frac{k}{6} = k - 20$ and multiplying by $6$ gives $k = 6k - 120$, so $5k = 120$ and $k = 24$.\n\n**The Full Solution:**\nStep 1: Solve the given equation for $x$ in one step by dividing both sides by $6$: $x = \\frac{k}{6}$.\nStep 2: The solution is also $k - 20$, so $\\frac{k}{6} = k - 20$. Multiply both sides by $6$: $k = 6k - 120$.\nStep 3: Subtract $6k$ from both sides: $-5k = -120$, so $k = 24$. Check: with $k = 24$, the equation $6x = 24$ has solution $x = 4$, and $k - 20 = 24 - 20 = 4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): multiplies instead of dividing in the first step, writing $x = 6k$, then solves $6k = k - 20$.\n* Choice B ($4$): is the solution $x$, not the value of $k$ the question asks for.\n* Choice D ($120$): stops at $5k = 120$ without dividing by $5$.\n\n**Test Day Takeaway:** When a constant appears in both the equation and its solution, solve for $x$ first, set the two expressions for $x$ equal, and answer the variable the question names.",
  skills: ["combining-like-terms"]
},
{
  id: 5,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The population of a town is modeled by $P = 34{,}600 - 1{,}200t$, where $t$ is the number of years after $2018$. Which of the following equations represents the population of the town in terms of $w$, the number of years after $2023$?",
  choices: [
    { id: "A", text: "$P = 28{,}600 - 1{,}200w$" },
    // distractor: finds the new starting value correctly but reverses the sign of the yearly change
    { id: "B", text: "$P = 28{,}600 + 1{,}200w$" },
    // distractor: keeps the 2018 starting value of 34,600 and only renames the variable
    { id: "C", text: "$P = 34{,}600 - 1{,}200w$" },
    // distractor: adds 5(1,200) = 6,000 to the starting value instead of subtracting it
    { id: "D", text: "$P = 40{,}600 - 1{,}200w$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Slope-Intercept Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The rate stays $-1{,}200$ per year; only the starting value moves. In $2023$, $t = 5$, so $P = 34{,}600 - 1{,}200(5) = 28{,}600$, and the new model is $P = 28{,}600 - 1{,}200w$.\n\n**The Full Solution:**\nStep 1: The year $2023$ is $5$ years after $2018$, so $t = w + 5$.\nStep 2: Substitute: $P = 34{,}600 - 1{,}200(w + 5) = 34{,}600 - 1{,}200w - 6{,}000$.\nStep 3: Combine the constants: $P = 28{,}600 - 1{,}200w$. Check the year $2025$: the original model with $t = 7$ gives $34{,}600 - 8{,}400 = 26{,}200$, and the new model with $w = 2$ gives $28{,}600 - 2{,}400 = 26{,}200$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($P = 28{,}600 + 1{,}200w$): has the correct starting value but makes the population grow instead of shrink.\n* Choice C ($P = 34{,}600 - 1{,}200w$): only renames $t$ as $w$; it still gives the $2018$ population when $w = 0$.\n* Choice D ($P = 40{,}600 - 1{,}200w$): adds the $6{,}000$ that five years of decline removes.\n\n**Test Day Takeaway:** Shifting the starting year changes the intercept, not the slope; evaluate the original model at the new starting year to get the new intercept.",
  skills: ["slope-intercept-form"]
},
{
  id: 6,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "The quadratic function $f$ is graphed in the $xy$-plane as shown. If $f(x) = ax^{2} + bx + c$, where $a$, $b$, and $c$ are constants, what is the value of $b$?",
  diagram: { type: "parabola", params: { vertex: { h: 3, k: -2 }, a: 0.5, xRange: [0, 6], yRange: [-3, 3], xTickInterval: 1, yTickInterval: 1, gridInterval: 1, showVertex: false } },
  correctAnswer: "-3",
  explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**The correct answer is $-3$.**\n\n**The Fast Way (~35s):** The vertex is $(3, -2)$ and the graph passes through $(1, 0)$, so $f(x) = a(x - 3)^{2} - 2$ with $4a - 2 = 0$, giving $a = \\frac{1}{2}$. Expanding gives $\\frac{1}{2}x^{2} - 3x + \\frac{5}{2}$, so $b = -3$.\n\n**The Full Solution:**\nStep 1: Read the vertex from the graph: the lowest point is $(3, -2)$, so $f(x) = a(x - 3)^{2} - 2$.\nStep 2: Use another point on the graph to find $a$. The graph passes through $(1, 0)$, so $0 = a(1 - 3)^{2} - 2 = 4a - 2$, which gives $a = \\frac{1}{2}$.\nStep 3: Expand: $\\frac{1}{2}(x^{2} - 6x + 9) - 2 = \\frac{1}{2}x^{2} - 3x + \\frac{5}{2}$, so $b = -3$. Check the other $x$-intercept: $\\frac{1}{2}(25) - 3(5) + \\frac{5}{2} = 12.5 - 15 + 2.5 = 0$, matching the point $(5, 0)$ on the graph ✓\n\n**Common Mistakes:**\n* $-6$: assumes $a = 1$ and expands $(x - 3)^{2} - 2 = x^{2} - 6x + 7$; that parabola would not pass through $(1, 0)$.\n* $3$: writes the vertex form with $(x + 3)$, flipping the sign of the vertex's $x$-coordinate.\n* $2.5$: reports $c$, the $y$-intercept, instead of the coefficient $b$.\n\n**Test Day Takeaway:** Read the vertex, then use one more point on the graph to find $a$ before expanding; $b$ depends on both $a$ and the vertex.",
  skills: ["distributive-property", "converting-quadratic-forms"]
},
{
  id: 7,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$|3x - 40| = 5x + 8$\nWhat is the solution to the given equation?",
  correctAnswer: "4",
  explanation: "**SAT Pattern: Absolute Value Equation**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~40s):** An absolute value is never negative, so $5x + 8 \\ge 0$. The two cases give $x = -24$ and $x = 4$, and only $x = 4$ keeps $5x + 8$ non-negative.\n\n**The Full Solution:**\nStep 1: Case 1: $3x - 40 = 5x + 8$, so $-2x = 48$ and $x = -24$.\nStep 2: Case 2: $3x - 40 = -(5x + 8)$, so $3x - 40 = -5x - 8$, $8x = 32$, and $x = 4$.\nStep 3: Test both in the original equation. For $x = -24$: $|{-72} - 40| = 112$, but $5(-24) + 8 = -112$, so it fails. For $x = 4$: $|12 - 40| = 28$ and $5(4) + 8 = 28$ ✓\n\n**Common Mistakes:**\n* $-24$: comes from the first case but is extraneous; it makes the right side negative, which an absolute value can never equal.\n* $-6$: in the second case, negates only the $3x$, solving $-3x - 40 = 5x + 8$ to get $8x = -48$; checking $x = -6$ gives $|{-58}| = 58$ on the left but $-22$ on the right.\n\n**Test Day Takeaway:** When a variable appears outside the absolute value bars, solve both cases and check each result in the original equation; one of them is often extraneous.",
  skills: ["combining-like-terms"]
},
{
  id: 8,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "A clinic has $900$ patients: $540$ adults and $360$ children. Last year, $30\\%$ of the adults and $15\\%$ of the children received a flu shot. One of these patients will be selected at random. What is the probability of selecting a patient who received a flu shot last year?",
  choices: [
    // distractor: reports the children's rate alone, ignoring the 540 adults
    { id: "A", text: "$0.15$" },
    // distractor: averages the two rates, (0.30 + 0.15)/2, instead of weighting them by group size
    { id: "B", text: "$0.225$" },
    { id: "C", text: "$0.24$" },
    // distractor: reports the adults' rate alone, ignoring the 360 children
    { id: "D", text: "$0.30$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~35s):** $0.30(540) = 162$ adults and $0.15(360) = 54$ children received a flu shot, so the probability is $\\frac{162 + 54}{900} = \\frac{216}{900} = 0.24$.\n\n**The Full Solution:**\nStep 1: Adults who received a flu shot: $0.30(540) = 162$.\nStep 2: Children who received a flu shot: $0.15(360) = 54$. In all, $162 + 54 = 216$ patients received a flu shot.\nStep 3: The probability is $\\frac{216}{900} = 0.24$. Check with weighted rates: adults are $\\frac{540}{900} = 0.6$ of the patients, so $0.6(0.30) + 0.4(0.15) = 0.18 + 0.06 = 0.24$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.15$): uses only the children's rate, leaving out the $540$ adults.\n* Choice B ($0.225$): averages $30\\%$ and $15\\%$ as if the groups were the same size; there are more adults, so the overall rate is pulled toward $30\\%$.\n* Choice D ($0.30$): uses only the adults' rate, leaving out the $360$ children.\n\n**Test Day Takeaway:** To combine rates from groups of different sizes, convert each rate to a count, add the counts, and divide by the total.",
  skills: ["probability-basics"]
},
{
  id: 9,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$5x + 4y = k$\n$4x + 5y = k - 10$\nIn the given system of equations, $k$ is a constant. If $x + y = 14$, what is the value of $k$?",
  choices: [
    // distractor: reports k - 10, the right side of the second equation, instead of k
    { id: "A", text: "$58$" },
    // distractor: drops the -10 when adding the equations and solves 2k = 126
    { id: "B", text: "$63$" },
    { id: "C", text: "$68$" },
    // distractor: reports 9(x + y) = 126 without solving for k
    { id: "D", text: "$126$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Adding the equations gives $9x + 9y = 2k - 10$, or $9(x + y) = 2k - 10$. With $x + y = 14$, $126 = 2k - 10$, so $k = 68$.\n\n**The Full Solution:**\nStep 1: Add the two equations: $(5x + 4y) + (4x + 5y) = k + (k - 10)$, which gives $9x + 9y = 2k - 10$.\nStep 2: Factor the left side and substitute: $9(x + y) = 9(14) = 126$, so $126 = 2k - 10$.\nStep 3: Solve: $2k = 136$, so $k = 68$. Check: subtracting the equations gives $x - y = 10$; with $x + y = 14$, $x = 12$ and $y = 2$. Then $5(12) + 4(2) = 68$ and $4(12) + 5(2) = 58 = 68 - 10$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($58$): is $k - 10$, the right side of the second equation.\n* Choice B ($63$): drops the $-10$ when adding the equations and solves $2k = 126$.\n* Choice D ($126$): is the value of $9(x + y)$, which equals $2k - 10$, not $k$.\n\n**Test Day Takeaway:** When a question gives you $x + y$, look for a way to combine the equations so the coefficients of $x$ and $y$ match; then you never have to solve for $x$ and $y$ separately.",
  skills: ["elimination-method"]
},
{
  id: 10,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "$8\\sqrt{x + 5} = 56$\nWhat value of $x$ is the solution to the given equation?",
  choices: [
    // distractor: divides 56 by 8 to get 7 and subtracts 5 without squaring
    { id: "A", text: "$2$" },
    // distractor: stops at the value of the radical, 56/8 = 7
    { id: "B", text: "$7$" },
    { id: "C", text: "$44$" },
    // distractor: squares 7 but forgets to subtract the 5 under the radical
    { id: "D", text: "$49$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Radical Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Divide by $8$, square, subtract $5$: $\\sqrt{x + 5} = 7$, so $x + 5 = 49$ and $x = 44$.\n\n**The Full Solution:**\nStep 1: Divide both sides by $8$: $\\sqrt{x + 5} = 7$.\nStep 2: Square both sides: $x + 5 = 49$.\nStep 3: Subtract $5$: $x = 44$. Check: $8\\sqrt{44 + 5} = 8\\sqrt{49} = 8(7) = 56$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): subtracts $5$ from $7$ without squaring first; the radical has to be removed before the $5$ can be moved.\n* Choice B ($7$): is the value of $\\sqrt{x + 5}$, not of $x$.\n* Choice D ($49$): is the value of $x + 5$; the $5$ still has to be subtracted.\n\n**Test Day Takeaway:** Isolate the radical, square both sides, finish solving, and then substitute back to check, since squaring can introduce a value that does not work.",
  skills: ["radical-equations"]
},
{
  id: 11,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The table shows the price of a ticket in each of two sections of a theater. For one show, the theater sold $280$ tickets in these sections for a total of \\$8,200. How many more balcony tickets than orchestra tickets were sold?",
  questionTable: { headers: ["Section", "Ticket price (dollars)"], rows: [["Balcony", "$25$"], ["Orchestra", "$40$"]] },
  choices: [
    // distractor: gives the number of orchestra tickets, 80, instead of the difference
    { id: "A", text: "$80$" },
    { id: "B", text: "$120$" },
    // distractor: gives the number of balcony tickets, 200, instead of the difference
    { id: "C", text: "$200$" },
    // distractor: gives the total number of tickets sold
    { id: "D", text: "$280$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** If all $280$ tickets were balcony tickets, the total would be $25(280) = 7{,}000$ dollars. Each orchestra ticket adds $15$ dollars, and $8{,}200 - 7{,}000 = 1{,}200 = 15(80)$, so $80$ orchestra and $200$ balcony tickets were sold; $200 - 80 = 120$.\n\n**The Full Solution:**\nStep 1: Let $b$ and $r$ be the numbers of balcony and orchestra tickets. Then $b + r = 280$ and $25b + 40r = 8{,}200$.\nStep 2: Substitute $b = 280 - r$: $25(280 - r) + 40r = 8{,}200$, so $7{,}000 + 15r = 8{,}200$, $15r = 1{,}200$, and $r = 80$. Then $b = 200$.\nStep 3: The difference is $200 - 80 = 120$. Check: $200 + 80 = 280$ tickets and $25(200) + 40(80) = 5{,}000 + 3{,}200 = 8{,}200$ dollars ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($80$): this is the number of orchestra tickets, one of the two unknowns.\n* Choice C ($200$): this is the number of balcony tickets, the other unknown.\n* Choice D ($280$): this is the total number of tickets given in the question.\n\n**Test Day Takeaway:** Solve for both unknowns, then reread the question: it asks for the difference between them.",
  skills: ["word-problem-to-equation", "setting-up-systems"]
},
{
  id: 12,
  type: "multiple-choice",
  difficulty: "hard",
  band: 6,
  question: "$\\frac{2x + 9}{5} = k$\nIn the given equation, $k$ is a constant. Which expression is equivalent to $\\frac{2x + 29}{5}$?",
  choices: [
    { id: "A", text: "$k + 4$" },
    // distractor: adds 29/5 to k without accounting for the 9/5 already included in k
    { id: "B", text: "$k + \\frac{29}{5}$" },
    // distractor: adds the difference in the numerators, 20, without dividing it by 5
    { id: "C", text: "$k + 20$" },
    // distractor: multiplies the given equation by 5 to get 2x + 9 = 5k, adds 20, and forgets to divide by 5 again
    { id: "D", text: "$5k + 20$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The numerator grows from $2x + 9$ to $2x + 29$, an increase of $20$, so the fraction grows by $\\frac{20}{5} = 4$: the result is $k + 4$.\n\n**The Full Solution:**\nStep 1: Rewrite the new numerator using the old one: $2x + 29 = (2x + 9) + 20$.\nStep 2: Split the fraction: $\\frac{(2x + 9) + 20}{5} = \\frac{2x + 9}{5} + \\frac{20}{5}$.\nStep 3: Substitute $k$: $\\frac{2x + 29}{5} = k + 4$. Check with $x = 3$: $\\frac{2(3) + 9}{5} = 3 = k$, and $\\frac{2(3) + 29}{5} = \\frac{35}{5} = 7 = 3 + 4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($k + \\frac{29}{5}$): adds $\\frac{29}{5}$ to $k$, but $k$ already includes $\\frac{9}{5}$, so only the extra $\\frac{20}{5}$ should be added.\n* Choice C ($k + 20$): adds the increase in the numerator without dividing it by the denominator $5$.\n* Choice D ($5k + 20$): this equals $2x + 29$, the numerator alone; it still has to be divided by $5$.\n\n**Test Day Takeaway:** When a new expression differs from a given one by a constant, rewrite it as the given expression plus that constant instead of solving for the variable.",
  skills: ["solving-equations", "ratios"]
},
{
  id: 13,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "A cylindrical tank with a base radius of $6$ inches holds $864\\pi$ cubic inches of water when it is $80\\%$ full. What is the height, in inches, of the tank?",
  correctAnswer: "30",
  explanation: "**SAT Pattern: Cylinder Volume**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~35s):** The full tank holds $\\frac{864\\pi}{0.8} = 1{,}080\\pi$ cubic inches, and $\\pi(6)^{2}h = 36\\pi h$, so $h = \\frac{1080}{36} = 30$.\n\n**The Full Solution:**\nStep 1: The water fills $80\\%$ of the tank, so the tank's full volume $V$ satisfies $0.8V = 864\\pi$, giving $V = 1{,}080\\pi$ cubic inches.\nStep 2: The volume of a cylinder is $V = \\pi r^{2}h$, so $\\pi(6)^{2}h = 1{,}080\\pi$, or $36\\pi h = 1{,}080\\pi$.\nStep 3: Divide by $36\\pi$: $h = 30$ inches. Check: $\\pi(36)(30) = 1{,}080\\pi$, and $0.8(1{,}080\\pi) = 864\\pi$ ✓\n\n**Common Mistakes:**\n* $24$: treats $864\\pi$ as the full volume, solving $36\\pi h = 864\\pi$; that is the height of the water, not of the tank.\n* $19.2$: multiplies by $0.8$ instead of dividing, using $0.8(864\\pi) = 691.2\\pi$ as the full volume.\n* $7.5$: uses the diameter $12$ in place of the radius, solving $144\\pi h = 1{,}080\\pi$.\n\n**Test Day Takeaway:** When a container is partly full, first find the full volume by dividing by the fraction, then use $V = \\pi r^{2}h$.",
  skills: ["volume-prism"]
},
{
  id: 14,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, a line with slope $-\\frac{3}{2}$ passes through the points $(-3, 8)$ and $(k, -4)$. What is the value of $k$?",
  choices: [
    // distractor: sets k + 3 = -8, putting a second negative sign on the run
    { id: "A", text: "$-11$" },
    { id: "B", text: "$5$" },
    // distractor: solves k + 3 = 8 correctly but reports 8 without subtracting 3
    { id: "C", text: "$8$" },
    // distractor: inverts the slope, solving (k + 3)/(-12) = -3/2 to get k + 3 = 18
    { id: "D", text: "$15$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The rise is $-4 - 8 = -12$. A slope of $-\\frac{3}{2}$ with a rise of $-12$ needs a run of $8$, so $k + 3 = 8$ and $k = 5$.\n\n**The Full Solution:**\nStep 1: Write the slope: $\\frac{-4 - 8}{k - (-3)} = \\frac{-12}{k + 3}$.\nStep 2: Set it equal to the given slope: $\\frac{-12}{k + 3} = -\\frac{3}{2}$. Cross-multiplying gives $-24 = -3(k + 3)$, so $k + 3 = 8$.\nStep 3: Subtract $3$: $k = 5$. Check: $\\frac{-4 - 8}{5 - (-3)} = \\frac{-12}{8} = -\\frac{3}{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-11$): sets $k + 3 = -8$; the rise of $-12$ already carries the negative sign, so the run must be positive.\n* Choice C ($8$): is the value of $k + 3$; it still needs $3$ subtracted.\n* Choice D ($15$): writes the slope as run over rise, solving $\\frac{k + 3}{-12} = -\\frac{3}{2}$.\n\n**Test Day Takeaway:** Slope is rise over run, $\\frac{y_2 - y_1}{x_2 - x_1}$; keep the subtraction order the same in the numerator and denominator, then check the slope with your answer.",
  skills: ["slope-from-points"]
},
{
  id: 15,
  type: "multiple-choice",
  difficulty: "medium",
  band: 5,
  question: "In triangle $ABC$, angle $C$ is a right angle, $AC = 9$, and $AB = 41$. What is the length of $\\overline{BC}$?",
  choices: [
    // distractor: subtracts the side lengths, 41 - 9, instead of their squares
    { id: "A", text: "$32$" },
    { id: "B", text: "$40$" },
    // distractor: adds the side lengths, 9 + 41, as though BC were the longest side
    { id: "C", text: "$50$" },
    // distractor: stops at BC squared, 1,600, without taking the square root
    { id: "D", text: "$1{,}600$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Right Triangle — Pythagorean**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Side $\\overline{AB}$ is opposite the right angle at $C$, so it is the hypotenuse: $BC = \\sqrt{41^{2} - 9^{2}} = \\sqrt{1{,}600} = 40$.\n\n**The Full Solution:**\nStep 1: The right angle is at $C$, so the hypotenuse is the side opposite $C$, which is $\\overline{AB}$; the legs are $\\overline{AC}$ and $\\overline{BC}$.\nStep 2: By the Pythagorean theorem, $AC^{2} + BC^{2} = AB^{2}$, so $81 + BC^{2} = 1{,}681$ and $BC^{2} = 1{,}600$.\nStep 3: Take the positive square root: $BC = 40$. Check: $9^{2} + 40^{2} = 81 + 1{,}600 = 1{,}681 = 41^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($32$): subtracts the lengths, $41 - 9$, instead of their squares.\n* Choice C ($50$): adds the two given lengths, $9 + 41$, as though $\\overline{BC}$ were the longest side.\n* Choice D ($1{,}600$): is $BC^{2}$; the square root still has to be taken.\n\n**Test Day Takeaway:** Find the hypotenuse first: it is always the side opposite the right angle. Then subtract squares to find a missing leg.",
  skills: ["pythagorean-theorem"]
},
{
  id: 16,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The graph of $y = f(x)$ is shown in the $xy$-plane. The function $g$ is defined by $g(x) = f(x + 3) + 5$. For what value of $x$ does $g(x)$ reach its minimum?",
  diagram: { type: "parabola", params: { vertex: { h: 2, k: -4 }, a: 1, xRange: [-2, 6], yRange: [-6, 10], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showVertex: false } },
  choices: [
    { id: "A", text: "$-1$" },
    // distractor: gives the minimum value of g, -4 + 5 = 1, instead of the x-value where it occurs
    { id: "B", text: "$1$" },
    // distractor: gives the x-value where f reaches its minimum, ignoring the shift
    { id: "C", text: "$2$" },
    // distractor: shifts the graph right 3 units instead of left: 2 + 3 = 5
    { id: "D", text: "$5$" }
  ],
  correctAnswer: "A",
  explanation: "**SAT Pattern: Function Transformation**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The graph of $f$ has its lowest point at $x = 2$. The function $g$ reaches its minimum when the input to $f$ is $2$: $x + 3 = 2$, so $x = -1$.\n\n**The Full Solution:**\nStep 1: Read the vertex of the graph of $f$: the lowest point is $(2, -4)$, so $f(x)$ reaches its minimum, $-4$, when $x = 2$.\nStep 2: $g(x) = f(x + 3) + 5$ is smallest when $f(x + 3)$ is smallest, which happens when $x + 3 = 2$.\nStep 3: Solve: $x = -1$. Check: the graph of $g$ is the graph of $f$ shifted left $3$ units and up $5$ units, so its vertex is $(2 - 3, -4 + 5) = (-1, 1)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): is the minimum value of $g$, $-4 + 5$, not the $x$-value where it occurs.\n* Choice C ($2$): is where $f$ reaches its minimum; the $+3$ inside the parentheses moves that point.\n* Choice D ($5$): shifts right instead of left; $f(x + 3)$ moves the graph $3$ units to the left.\n\n**Test Day Takeaway:** For $g(x) = f(x + h) + k$, the vertex moves left $h$ units and up $k$ units; set the inside expression equal to the old $x$-value to find the new one.",
  skills: ["function-transformations", "vertex-form"]
},
{
  id: 17,
  type: "fill-in",
  difficulty: "medium",
  band: 5,
  question: "In the $xy$-plane, a triangle has vertices at $(-4, 1)$, $(8, 1)$, and $(2, 10)$. What is the area, in square units, of the triangle?",
  correctAnswer: "54",
  explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**The correct answer is $54$.**\n\n**The Fast Way (~25s):** The vertices $(-4, 1)$ and $(8, 1)$ lie on the horizontal line $y = 1$, giving a base of $12$. The third vertex is $10 - 1 = 9$ units above that line, so the area is $\\frac{1}{2}(12)(9) = 54$.\n\n**The Full Solution:**\nStep 1: Choose the base along $y = 1$: its length is $8 - (-4) = 12$.\nStep 2: The height is the vertical distance from $(2, 10)$ to the line $y = 1$: $10 - 1 = 9$.\nStep 3: Area $= \\frac{1}{2}bh = \\frac{1}{2}(12)(9) = 54$. Check with the shoelace formula: $\\frac{1}{2}\\left|(-4)(1 - 10) + 8(10 - 1) + 2(1 - 1)\\right| = \\frac{1}{2}|36 + 72 + 0| = 54$ ✓\n\n**Common Mistakes:**\n* $108$: multiplies base by height and forgets the $\\frac{1}{2}$.\n* $60$: uses the $y$-coordinate $10$ as the height instead of the distance $10 - 1 = 9$.\n* $18$: drops the sign of $-4$ and uses a base of $8 - 4 = 4$, computing $\\frac{1}{2}(4)(9) = 18$.\n\n**Test Day Takeaway:** Look for two vertices that share a coordinate; that side is an easy base, and the height is the distance from the third vertex to that line, not its coordinate.",
  skills: ["triangle-area"]
},
{
  id: 18,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "The number of bacteria in a sample was $180$ at the start of an experiment and $1{,}440$ after $9$ hours. If the number of bacteria grew exponentially, how many bacteria were in the sample after $6$ hours?",
  choices: [
    // distractor: applies the 3-hour doubling only once instead of twice
    { id: "A", text: "$360$" },
    { id: "B", text: "$720$" },
    // distractor: averages the two counts, (180 + 1,440)/2, treating hour 6 as the halfway point of linear growth
    { id: "C", text: "$810$" },
    // distractor: assumes linear growth: 180 + (6/9)(1,440 - 180) = 1,020
    { id: "D", text: "$1{,}020$" }
  ],
  correctAnswer: "B",
  explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Over $9$ hours the count is multiplied by $\\frac{1440}{180} = 8 = 2^{3}$, so it doubles every $3$ hours. After $6$ hours it has doubled twice: $180(4) = 720$.\n\n**The Full Solution:**\nStep 1: Model the count as $N = 180b^{t}$, where $t$ is the number of hours. At $t = 9$, $180b^{9} = 1{,}440$, so $b^{9} = 8$.\nStep 2: Since $8 = 2^{3}$, $b^{3} = 2$: the count doubles every $3$ hours.\nStep 3: At $t = 6$, $N = 180b^{6} = 180(b^{3})^{2} = 180(4) = 720$. Check: doubling once more for hours $6$ to $9$ gives $720(2) = 1{,}440$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($360$): doubles only once; $6$ hours is two $3$-hour periods.\n* Choice C ($810$): averages the two counts, which treats the growth as linear and hour $6$ as the midpoint.\n* Choice D ($1{,}020$): adds $\\frac{6}{9}$ of the total increase, which is linear growth, not exponential growth.\n\n**Test Day Takeaway:** For exponential growth, find the growth factor over a convenient interval (here, doubling every $3$ hours) and multiply; never interpolate linearly.",
  skills: ["exponential-growth-decay"]
},
{
  id: 19,
  type: "multiple-choice",
  difficulty: "easy",
  band: 3,
  question: "$x^{2} - 18x + 74$\nWhich of the following is equivalent to the given expression?",
  choices: [
    // distractor: keeps the original constant 74 and never subtracts the 81 the square adds; it expands to x^2 - 18x + 155
    { id: "A", text: "$(x - 9)^{2} + 74$" },
    // distractor: subtracts in the wrong order, 81 - 74 = 7 instead of 74 - 81 = -7; it expands to x^2 - 18x + 88
    { id: "B", text: "$(x - 9)^{2} + 7$" },
    // distractor: uses +9 inside the square, which expands to x^2 + 18x + 74 and reverses the sign of the middle term
    { id: "C", text: "$(x + 9)^{2} - 7$" },
    { id: "D", text: "$(x - 9)^{2} - 7$" }
  ],
  correctAnswer: "D",
  explanation: "**SAT Pattern: Quadratic — Completing the Square**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Half of $-18$ is $-9$, and $(x - 9)^{2} = x^{2} - 18x + 81$. The given expression has $74$, which is $7$ less than $81$, so it equals $(x - 9)^{2} - 7$.\n\n**The Full Solution:**\nStep 1: Take half the coefficient of $x$: $\\frac{-18}{2} = -9$, so the square is $(x - 9)^{2} = x^{2} - 18x + 81$.\nStep 2: Rewrite the expression: $x^{2} - 18x + 74 = (x^{2} - 18x + 81) - 81 + 74$.\nStep 3: Combine constants: $(x - 9)^{2} - 7$. Check at $x = 0$: $0 - 0 + 74 = 74$ and $(0 - 9)^{2} - 7 = 81 - 7 = 74$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: keeps the $74$ and never removes the $81$ that the square adds; it expands to $x^{2} - 18x + 155$.\n* Choice B: subtracts in the wrong order, $81 - 74 = 7$; it expands to $x^{2} - 18x + 88$.\n* Choice C: puts $+9$ inside the square, which expands to $x^{2} + 18x + 74$ and flips the sign of the middle term.\n\n**Test Day Takeaway:** After completing the square, check the result by plugging in $x = 0$; the constant terms must match.",
  skills: ["quadratics"]
},
{
  id: 20,
  type: "multiple-choice",
  difficulty: "hard",
  band: 7,
  question: "$\\frac{6x + 7}{2x - 3} = c$\nIn the given equation, $c$ is a constant. For what value of $c$ does the equation have no solution?",
  choices: [
    // distractor: gives the value of x that makes the denominator zero, 3/2, instead of a value of c
    { id: "A", text: "$\\frac{3}{2}$" },
    // distractor: uses the coefficient of x in the denominator, 2, as the value of c
    { id: "B", text: "$2$" },
    { id: "C", text: "$3$" },
    // distractor: uses the coefficient of x in the numerator, 6, as the value of c
    { id: "D", text: "$6$" }
  ],
  correctAnswer: "C",
  explanation: "**SAT Pattern: Rational Equation with No Solution**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Clearing the denominator gives $6x + 7 = 2cx - 3c$, or $(6 - 2c)x = -3c - 7$. When $c = 3$, the left side is $0$ for every $x$ while the right side is $-16$, so there is no solution.\n\n**The Full Solution:**\nStep 1: Multiply both sides by $2x - 3$: $6x + 7 = c(2x - 3) = 2cx - 3c$, so $(6 - 2c)x = -3c - 7$.\nStep 2: If $c = 3$, this becomes $0 \\cdot x = -16$, which is false for every $x$, so the equation has no solution.\nStep 3: If $c \\ne 3$, then $x = \\frac{-3c - 7}{6 - 2c}$, and this value never equals $\\frac{3}{2}$ (setting them equal leads to $-7 = 9$), so the equation has a solution. Check $c = 3$ directly: $\\frac{6x + 7}{2x - 3} = 3$ gives $6x + 7 = 6x - 9$, or $7 = -9$, which is impossible ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{2}$): is the value of $x$ that makes the denominator $0$, not a value of $c$. With $c = \\frac{3}{2}$, the equation has the solution $x = -\\frac{23}{6}$.\n* Choice B ($2$): uses the coefficient of $x$ in the denominator. With $c = 2$, the equation has the solution $x = -6.5$.\n* Choice D ($6$): uses the coefficient of $x$ in the numerator. With $c = 6$, the equation has the solution $x = \\frac{25}{6}$.\n\n**Test Day Takeaway:** For a \"no solution\" constant, clear the denominator and collect the $x$-terms; the equation has no solution when the coefficient of $x$ becomes $0$ but the constant side does not.",
  skills: ["rational-expressions"]
},
{
  id: 21,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "The graph of $y = x^{2} - 6x + 14$ is shown. In the $xy$-plane, the line $y = mx - 2$, where $m$ is a positive constant, intersects the graph at exactly one point. What is the value of $m$?",
  diagram: { type: "parabola", params: { vertex: { h: 3, k: 5 }, a: 1, xRange: [-1, 7], yRange: [0, 16], xTickInterval: 1, yTickInterval: 2, gridInterval: 1, showVertex: false } },
  correctAnswer: "2",
  explanation: "**SAT Pattern: Tangent Line and Discriminant**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~45s):** Setting the expressions equal gives $x^{2} - (6 + m)x + 16 = 0$. Exactly one intersection point means the discriminant is $0$: $(6 + m)^{2} = 64$, so $6 + m = \\pm 8$ and $m = 2$ or $m = -14$; since $m > 0$, $m = 2$.\n\n**The Full Solution:**\nStep 1: Set the equations equal: $x^{2} - 6x + 14 = mx - 2$, so $x^{2} - (6 + m)x + 16 = 0$.\nStep 2: The line meets the graph at exactly one point when this quadratic has exactly one real solution, so its discriminant is $0$: $(6 + m)^{2} - 4(1)(16) = 0$, or $(6 + m)^{2} = 64$.\nStep 3: Then $6 + m = 8$ or $6 + m = -8$, so $m = 2$ or $m = -14$; the positive value is $m = 2$. Check: with $m = 2$, the quadratic is $x^{2} - 8x + 16 = (x - 4)^{2}$, with the single solution $x = 4$, and both equations give $y = 6$ at $x = 4$ ✓\n\n**Common Mistakes:**\n* $-14$: is the other root of $(6 + m)^{2} = 64$, but $m$ must be positive.\n* $8$: drops the $-6x$ when combining terms, solving $m^{2} = 64$.\n\n**Test Day Takeaway:** \"Intersects at exactly one point\" for a line and a parabola means the combined quadratic has a discriminant of $0$; solve for the constant and use the stated condition to choose between the two roots.",
  skills: ["tangent-lines", "discriminant-analysis"]
},
{
  id: 22,
  type: "fill-in",
  difficulty: "hard",
  band: 7,
  question: "$x^{2} + y^{2} - 14x + 8y - 16 = 0$\nThe graph of the given equation in the $xy$-plane is a circle. The point $(a, -4)$ lies on the circle, where $a$ is a positive constant. What is the value of $a$?",
  correctAnswer: "16",
  explanation: "**SAT Pattern: Circle in General Form**\n\n**The correct answer is $16$.**\n\n**The Fast Way (~45s):** Completing the square gives $(x - 7)^{2} + (y + 4)^{2} = 81$, a circle with center $(7, -4)$ and radius $9$. The points on the circle with $y = -4$ are $9$ units left and right of the center, at $x = -2$ and $x = 16$, so the positive value is $a = 16$.\n\n**The Full Solution:**\nStep 1: Group and complete the square: $(x^{2} - 14x + 49) + (y^{2} + 8y + 16) = 16 + 49 + 16$, so $(x - 7)^{2} + (y + 4)^{2} = 81$.\nStep 2: Substitute $y = -4$: $(a - 7)^{2} + 0 = 81$, so $a - 7 = 9$ or $a - 7 = -9$.\nStep 3: Then $a = 16$ or $a = -2$, and since $a$ is positive, $a = 16$. Check in the original equation: $256 + 16 - 224 - 32 - 16 = 0$ ✓\n\n**Common Mistakes:**\n* $-2$: is the other point on the circle with $y = -4$, but $a$ must be positive.\n* $11$: forgets to add $49$ and $16$ to the right side, using a radius of $\\sqrt{16} = 4$.\n\n**Test Day Takeaway:** Rewrite a general-form circle by completing the square for $x$ and $y$, adding the same amounts to both sides; then read the center and radius.",
  skills: ["circle-equation", "completing-square-circles"]
}
      ]
    }
  ]
};

export default practiceTest12;
