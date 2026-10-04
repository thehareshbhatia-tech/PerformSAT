// Practice Test 6 — Math Module 2 Easy variant (22 questions)
// v2 freshness rebuild (2026-09-07): every slot re-patterned and re-authored against the seen-corpus gate — docs/TEST_RECREATION_V2_SPEC.md
// For students routed to easier path after Module 1 (~<60% correct).
// Official-calibration recreation (2026-09-01): every item re-authored per
// docs/TEST_RECREATION_SPEC.md with slot metadata (id/type/difficulty/band/
// skills/pattern) frozen. Distribution: 3E / 13M / 6H. Q1-3 easy openers.
// Max-score ceiling: ~650. Figure density lifted: 5 diagram items
// (Q2 rightTriangle, Q7 dotPlot, Q15 rightTriangle, Q21 scatterplot,
// Q22 twoWayTable). Numeric MC choices sorted ascending.

export const practiceTest6M2Easy = {
  id: "module-2-easy",
  title: "Module 2 (Easy)",
  variant: "easy",
  timeLimit: 35,
  questions: [
    {
      id: 1,
      type: "multiple-choice",
      difficulty: "easy",
      band: 2,
      question: "The graph of the linear function $f$ is shown, where $y = f(x)$. Which equation defines $f$?",
      diagram: { type: "linearGraph", params: { slope: -1.5, yIntercept: 12, xRange: [0, 8], yRange: [0, 12], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 12], [8, 0]], label: "y = f(x)" } },
      choices: [
        { id: "A", text: "$f(x) = -1.5x + 12$" },
        // distractor: reads the falling line as rising and keeps the slope positive
        { id: "B", text: "$f(x) = 1.5x + 12$" },
        // distractor: moves the negative sign off the slope and onto the y-intercept, giving a rising line that crosses the y-axis at -12
        { id: "C", text: "$f(x) = 1.5x - 12$" },
        // distractor: swaps the slope and the y-intercept, using 1.5 as the y-intercept and -12 as the slope
        { id: "D", text: "$f(x) = -12x + 1.5$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Slope-Intercept Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The line crosses the $y$-axis at $12$ and the $x$-axis at $8$, so its slope is $\\frac{0 - 12}{8 - 0} = -1.5$. That gives $f(x) = -1.5x + 12$.\n\n**The Full Solution:**\nStep 1: Read the $y$-intercept. The line crosses the $y$-axis at $(0, 12)$, so $b = 12$.\nStep 2: Find the slope from the two marked points $(0, 12)$ and $(8, 0)$: $\\frac{0 - 12}{8 - 0} = \\frac{-12}{8} = -1.5$.\nStep 3: Write slope-intercept form, $f(x) = mx + b$: $f(x) = -1.5x + 12$. Check at $x = 4$: $-1.5(4) + 12 = 6$, and the graph passes through $(4, 6)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($f(x) = 1.5x + 12$): reads the falling line as rising. A positive slope would give $f(8) = 24$, but the graph shows $f(8) = 0$.\n* Choice C ($f(x) = 1.5x - 12$): moves the negative sign off the slope and onto the $y$-intercept. That line rises and crosses the $y$-axis at $-12$.\n* Choice D ($f(x) = -12x + 1.5$): swaps the slope and the $y$-intercept, treating $1.5$ as where the line crosses the $y$-axis.\n\n**Test Day Takeaway:** Read the $y$-intercept off the graph first, then get the slope from two points the line passes through exactly. Those two numbers drop straight into $f(x) = mx + b$.",
      skills: ["slope-intercept-form"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "$x^{2} + y^{2} + 6x - 14y - 42 = 0$\nThe graph of the given equation in the $xy$-plane is a circle. What is the radius of the circle?",
      correctAnswer: "10",
      explanation: "**SAT Pattern: Circle in General Form**\n\n**The correct answer is 10.**\n\n**The Fast Way (~20s):** Half of $6$ is $3$ and half of $-14$ is $-7$, so $r^{2} = 42 + 3^{2} + (-7)^{2} = 42 + 9 + 49 = 100$ and $r = 10$.\n\n**The Full Solution:**\nStep 1: Group the $x$-terms and the $y$-terms and move the constant to the right side: $(x^{2} + 6x) + (y^{2} - 14y) = 42$.\nStep 2: Complete each square. For $x$, half of $6$ is $3$ and $3^{2} = 9$. For $y$, half of $-14$ is $-7$ and $(-7)^{2} = 49$. Adding $9$ and $49$ to both sides gives $(x + 3)^{2} + (y - 7)^{2} = 100$.\nStep 3: The equation is now in standard form with $r^{2} = 100$, so the radius is $\\sqrt{100} = 10$. Check with the point $(7, 7)$, which is $10$ units right of the center $(-3, 7)$: $49 + 49 + 42 - 98 - 42 = 0$ ✓\n\n**Common Mistakes:**\n* $100$: stops at $r^{2}$ and reports it without taking the square root.\n* $\\sqrt{58} \\approx 7.62$: adds $9$ and $49$ to the right side but forgets to move the $-42$ first, so $r^{2}$ comes out as $58$.\n* $7$: reports the $y$-coordinate of the center instead of the radius.\n\n**Test Day Takeaway:** To read a circle in general form, complete the square for $x$ and for $y$, add the same amounts to the right side, and take the square root at the end.",
      skills: ["circle-equation", "completing-square-circles"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "$2x + 5y = 9$\n$8x + 20y = c$\nIn the given system of equations, $c$ is a constant. For what value of $c$ does the system have infinitely many solutions?",
      choices: [
        // distractor: divides 9 by the scale factor 4 instead of multiplying (9/4 = 2.25)
        { id: "A", text: "$2.25$" },
        // distractor: reports the scale factor 4 itself instead of applying it to the constant
        { id: "B", text: "$4$" },
        // distractor: copies the constant 9 unchanged, scaling only the coefficients
        { id: "C", text: "$9$" },
        { id: "D", text: "$36$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The coefficients are multiplied by $4$ ($2 \\to 8$ and $5 \\to 20$), so the constant must be multiplied by $4$ too: $c = 4(9) = 36$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has infinitely many solutions when one equation is a constant multiple of the other, so both equations describe the same line.\nStep 2: Compare the coefficients: $\\frac{8}{2} = 4$ and $\\frac{20}{5} = 4$, so the second equation must be $4$ times the first.\nStep 3: Multiply the constant by the same factor: $c = 4 \\times 9 = 36$. Check: $4(2x + 5y) = 4(9)$ gives $8x + 20y = 36$, the second equation exactly ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2.25$): divides the constant by the factor instead of multiplying, giving $9 \\div 4 = 2.25$.\n* Choice B ($4$): reports the factor itself and never applies it to $9$.\n* Choice C ($9$): copies the constant unchanged. Then $8x + 20y = 9$ is parallel to the first line, and the system has no solution.\n\n**Test Day Takeaway:** Infinitely many solutions means one equation is the other times a single number. Find that number from the coefficients, then multiply the constant by it.",
      skills: ["system-solution-types", "infinite-solutions-condition"]
    },
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "Rain fell at a constant rate of $3$ millimeters per hour for one full day. How many centimeters of rain fell during the day? ($1$ centimeter $= 10$ millimeters)",
      choices: [
        // distractor: divides by 24 instead of multiplying by it (3/24 = 0.125)
        { id: "A", text: "$0.125$" },
        // distractor: converts millimeters to centimeters but reports the hourly amount, not the daily total
        { id: "B", text: "$0.3$" },
        { id: "C", text: "$7.2$" },
        // distractor: finds the daily total in millimeters and does not convert it to centimeters
        { id: "D", text: "$72$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** A day is $24$ hours, so $3 \\times 24 = 72$ millimeters fell, and $72 \\div 10 = 7.2$ centimeters.\n\n**The Full Solution:**\nStep 1: Convert the time. One full day is $24$ hours, so the total is $3 \\, \\frac{\\text{mm}}{\\text{hr}} \\times 24 \\, \\text{hr} = 72$ millimeters.\nStep 2: Convert the length. Since $1$ centimeter $= 10$ millimeters, $72 \\div 10 = 7.2$ centimeters.\nStep 3: Confirm that the units cancel: $\\frac{3 \\text{ mm}}{1 \\text{ hr}} \\times \\frac{24 \\text{ hr}}{1 \\text{ day}} \\times \\frac{1 \\text{ cm}}{10 \\text{ mm}} = 7.2$ centimeters per day ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.125$): divides by $24$ instead of multiplying, giving $3 \\div 24 = 0.125$.\n* Choice B ($0.3$): converts correctly to $3 \\div 10 = 0.3$ centimeters but reports the amount for one hour, not for the day.\n* Choice D ($72$): finds the daily total in millimeters and never converts it to centimeters.\n\n**Test Day Takeaway:** Write the conversion as a chain of fractions and cancel units. If the units that remain are not the ones the question asks for, a factor is upside down or missing.",
      skills: ["unit-conversion"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "$3x + 4y = 47$\n$5x - 2y = 9$\nWhich of the following systems of equations has the same solution as the given system?",
      choices: [
        // distractor: doubles the left side of the second equation but leaves its constant at 9
        { id: "A", text: "$3x + 4y = 47$ and $10x - 4y = 9$" },
        { id: "B", text: "$3x + 4y = 47$ and $10x - 4y = 18$" },
        // distractor: doubles the x-term and the constant of the second equation but leaves the y-term at -2y
        { id: "C", text: "$3x + 4y = 47$ and $10x - 2y = 18$" },
        // distractor: doubles the x-term and the constant of the first equation but leaves 4y unchanged
        { id: "D", text: "$6x + 4y = 94$ and $5x - 2y = 9$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Multiplying every term of an equation by the same nonzero number does not change its solutions. Doubling every term of $5x - 2y = 9$ gives $10x - 4y = 18$, and choice B pairs it with the unchanged first equation.\n\n**The Full Solution:**\nStep 1: A system keeps its solution when one equation is replaced by a nonzero multiple of itself, with every term, including the constant, multiplied.\nStep 2: Multiply the second equation by $2$: $2(5x) - 2(2y) = 2(9)$, which is $10x - 4y = 18$.\nStep 3: Verify with the actual solution. The given system has solution $(5, 8)$, since $3(5) + 4(8) = 47$ and $5(5) - 2(8) = 9$. In choice B, $10(5) - 4(8) = 50 - 32 = 18$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($10x - 4y = 9$): doubles the left side but leaves the constant at $9$. At $(5, 8)$ the left side is $18$, not $9$.\n* Choice C ($10x - 2y = 18$): doubles the $x$-term and the constant but leaves $-2y$ alone. At $(5, 8)$ the left side is $50 - 16 = 34$, not $18$.\n* Choice D ($6x + 4y = 94$): doubles the $x$-term and the constant of the first equation but leaves $4y$ unchanged. At $(5, 8)$ the left side is $30 + 32 = 62$, not $94$.\n\n**Test Day Takeaway:** An equivalent equation multiplies every term by the same factor. Partial scaling is the trap, and substituting the original solution exposes it quickly.",
      skills: ["system-solution-types", "infinite-solutions-condition"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "In the figure shown, triangle $ABC$ is similar to triangle $DEF$, where side $AB$ corresponds to side $DE$. The area of triangle $ABC$ is $56$ square units. What is the area, in square units, of triangle $DEF$?",
      diagram: { type: "similarTriangles", params: { triangle1: { labels: ["A", "B", "C"], sideLabels: ["8", "", ""] }, triangle2: { labels: ["D", "E", "F"], sideLabels: ["20", "", ""] }, figureNote: true } },
      correctAnswer: "350",
      explanation: "**SAT Pattern: Similar Triangles and Area Ratio**\n\n**The correct answer is 350.**\n\n**The Fast Way (~25s):** The scale factor is $\\frac{20}{8} = 2.5$, so the areas are in the ratio $2.5^{2} = 6.25$, and $56 \\times 6.25 = 350$.\n\n**The Full Solution:**\nStep 1: Find the scale factor from the corresponding sides: $\\frac{DE}{AB} = \\frac{20}{8} = \\frac{5}{2}$.\nStep 2: For similar figures, the ratio of the areas is the square of the scale factor: $\\left(\\frac{5}{2}\\right)^{2} = \\frac{25}{4}$.\nStep 3: Multiply the area of triangle $ABC$ by that ratio: $56 \\times \\frac{25}{4} = 14 \\times 25 = 350$ square units. Check in reverse: $350 \\div \\frac{25}{4} = 56$ ✓\n\n**Common Mistakes:**\n* $140$: multiplies the area by the scale factor $2.5$ instead of by its square, giving $56 \\times 2.5 = 140$.\n* $22.4$: divides by the scale factor instead of multiplying, giving $56 \\div 2.5 = 22.4$.\n* $8.96$: squares the scale factor correctly but divides by it, giving $56 \\div 6.25 = 8.96$.\n\n**Test Day Takeaway:** If lengths scale by $k$, areas scale by $k^{2}$. Check that the larger triangle ends up with the larger area.",
      skills: ["similar-triangles"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A survey team caught $850$ fish in a lake, and $36\\%$ of the fish caught were trout. How many of the fish caught were not trout?",
      choices: [
        // distractor: reports the percent 36 as though it were a number of fish
        { id: "A", text: "$36$" },
        // distractor: computes 36% of 850 = 306, which is the number of trout
        { id: "B", text: "$306$" },
        { id: "C", text: "$544$" },
        // distractor: subtracts the percent as a count: 850 - 36 = 814
        { id: "D", text: "$814$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Percent Complement**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** If $36\\%$ of the fish were trout, then $64\\%$ were not, and $0.64 \\times 850 = 544$.\n\n**The Full Solution:**\nStep 1: Every fish caught either was or was not a trout, so the fish that were not trout make up $100\\% - 36\\% = 64\\%$ of the catch.\nStep 2: Convert to a decimal and multiply: $0.64 \\times 850 = 544$.\nStep 3: Check that the parts add to the whole: $0.36 \\times 850 = 306$ trout, and $306 + 544 = 850$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($36$): reports the percent itself as a number of fish. A percent becomes a count only after it is applied to the total.\n* Choice B ($306$): computes $36\\%$ of $850$ correctly, but that is the number of trout, not the number of other fish.\n* Choice D ($814$): subtracts $36$ from $850$, treating the percent as a count.\n\n**Test Day Takeaway:** Decide which group the question asks about before you multiply. Taking the complement first, then multiplying once, avoids answering for the wrong group.",
      skills: ["percent-of-value"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The function $h(t) = -16t^{2} + 64t$ gives the height, in feet, of a ball $t$ seconds after it is kicked. Which of the following is the interval of time during which the ball is at least $48$ feet high?",
      choices: [
        // distractor: uses the time from the kick up to the first crossing t = 1, when the ball is below 48 feet
        { id: "A", text: "$0 \\le t \\le 1$" },
        { id: "B", text: "$1 \\le t \\le 3$" },
        // distractor: keeps the first crossing but ends at the landing time t = 4 instead of the second crossing t = 3
        { id: "C", text: "$1 \\le t \\le 4$" },
        // distractor: uses the time from the second crossing t = 3 to the landing time t = 4, when the ball is below 48 feet
        { id: "D", text: "$3 \\le t \\le 4$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Quadratic Inequality from Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Set $-16t^{2} + 64t = 48$. Dividing by $-16$ gives $t^{2} - 4t + 3 = 0$, so $t = 1$ or $t = 3$. The parabola opens downward, so the ball is at or above $48$ feet between those times.\n\n**The Full Solution:**\nStep 1: Write the condition as an inequality: $-16t^{2} + 64t \\ge 48$.\nStep 2: Subtract $48$ and divide by $-16$, which reverses the inequality: $t^{2} - 4t + 3 \\le 0$. Factoring gives $(t - 1)(t - 3) \\le 0$.\nStep 3: The product is negative or zero only when $t$ is between the roots, so $1 \\le t \\le 3$. Check at $t = 2$: $h(2) = -64 + 128 = 64$, which is at least $48$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0 \\le t \\le 1$): uses the time before the first crossing. At $t = 0.5$, $h(0.5) = -4 + 32 = 28$ feet, which is below $48$.\n* Choice C ($1 \\le t \\le 4$): starts at the right time but ends at the landing time $t = 4$. At $t = 3.5$, $h(3.5) = -196 + 224 = 28$ feet.\n* Choice D ($3 \\le t \\le 4$): uses the time after the ball has dropped back below $48$ feet.\n\n**Test Day Takeaway:** Solve the related equation to find the two crossing times, then test one value to decide whether the interval is between or outside them. A downward-opening parabola is above a level only between its crossings.",
      skills: ["quadratics"]
    },
    {
      id: 9,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "Of the $600$ students at a school, $k$ percent are in the band. If a band member is selected at random, the probability of selecting a brass player is $0.25$. The band has $45$ brass players. What is the value of $k$?",
      correctAnswer: "30",
      explanation: "**SAT Pattern: Conditional Probability with Percent**\n\n**The correct answer is 30.**\n\n**The Fast Way (~30s):** The $45$ brass players are $0.25$ of the band members, so the band has $45 \\div 0.25 = 180$ members, and $\\frac{180}{600} = 0.30$, or $30$ percent.\n\n**The Full Solution:**\nStep 1: The probability is computed among band members only, so (brass players) $= 0.25 \\times$ (band members).\nStep 2: Solve for the number of band members $B$: $45 = 0.25B$, so $B = \\frac{45}{0.25} = 180$.\nStep 3: Write that count as a percent of all students: $\\frac{180}{600} = 0.30$, so $k = 30$. Check: $30\\%$ of $600$ is $180$, and $0.25(180) = 45$ ✓\n\n**Common Mistakes:**\n* $7.5$: divides $45$ by $600$, treating the brass players as the whole band.\n* $180$: finds the number of band members but reports that count instead of the percent.\n* $1.875$: multiplies $45$ by $0.25$ instead of dividing, getting $11.25$ band members and $\\frac{11.25}{600} = 0.01875$.\n\n**Test Day Takeaway:** A conditional probability is a fraction of the group it is conditioned on. Divide by the probability to recover that group, then convert to a percent of the total.",
      skills: ["conditional-probability"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$86 - 4.5d < 50$\nWhat is the least integer value of $d$ that satisfies the given inequality?",
      choices: [
        // distractor: treats the strict inequality d > 8 as d >= 8; at d = 8 the left side equals 50, which is not less than 50
        { id: "A", text: "$8$" },
        { id: "B", text: "$9$" },
        // distractor: divides 50 by 4.5 instead of dividing 86 - 50 = 36 by 4.5, then rounds 11.1 up to 12
        { id: "C", text: "$12$" },
        // distractor: divides 86 by 4.5, ignoring the 50, then rounds 19.1 up to 20
        { id: "D", text: "$20$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Smallest Integer in an Inequality**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Subtracting $86$ gives $-4.5d < -36$, and dividing by $-4.5$ reverses the sign: $d > 8$. The least integer greater than $8$ is $9$.\n\n**The Full Solution:**\nStep 1: Subtract $86$ from both sides: $-4.5d < -36$.\nStep 2: Divide both sides by $-4.5$. Dividing by a negative number reverses the inequality, so $d > 8$.\nStep 3: The inequality is strict, so $d = 8$ does not work; the least integer that does is $9$. Check: $86 - 4.5(9) = 45.5$, which is less than $50$, while $86 - 4.5(8) = 50$ is not ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): treats $d > 8$ as $d \\ge 8$. At $d = 8$ the left side equals $50$, and $50 < 50$ is false.\n* Choice C ($12$): divides $50$ by $4.5$ instead of dividing $86 - 50 = 36$, then rounds $11.1$ up to $12$.\n* Choice D ($20$): divides $86$ by $4.5$ and ignores the $50$, then rounds $19.1$ up to $20$.\n\n**Test Day Takeaway:** Dividing by a negative number flips the inequality sign, and when a strict inequality lands exactly on an integer, the answer is the next integer. Test the boundary value before you commit.",
      skills: ["inequalities"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The scatterplot shows the elevation $x$, in hundreds of meters, and the average number of beetles per trap $y$ at $10$ sites. A line of best fit for the data is also shown, and its equation is $y = 40 - 3x$. What is the residual for the site at $x = 6$?",
      diagram: { type: "scatterplot", params: { points: [[1, 38], [2, 32], [3, 33], [4, 27], [5, 26], [6, 17], [7, 18], [8, 17], [9, 12], [10, 11]], xMin: 0, xMax: 10, yMin: 0, yMax: 44, xGridStep: 1, yGridStep: 4, xLabelStep: 2, yLabelStep: 8, xLabel: "Elevation (hundreds of meters)", yLabel: "Beetles per trap", bestFitLine: { slope: -3, intercept: 40 }, highlightPoint: [6, 17], highlightLabel: "(6, 17)", showResidual: true } },
      choices: [
        { id: "A", text: "$-5$" },
        // distractor: subtracts the actual value from the predicted value (22 - 17) instead of predicted from actual
        { id: "B", text: "$5$" },
        // distractor: reports the actual value 17 rather than its difference from the line
        { id: "C", text: "$17$" },
        // distractor: reports the predicted value 40 - 3(6) = 22 rather than the difference
        { id: "D", text: "$22$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Residual**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The line predicts $40 - 3(6) = 22$, and the data point is at $17$, so the residual is $17 - 22 = -5$.\n\n**The Full Solution:**\nStep 1: Read the actual value from the scatterplot: the site at $x = 6$ has $y = 17$.\nStep 2: Find the predicted value from the line of best fit: $y = 40 - 3(6) = 40 - 18 = 22$.\nStep 3: A residual is the actual value minus the predicted value: $17 - 22 = -5$. The negative sign matches the graph, since the point lies below the line ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): subtracts in the wrong order, $22 - 17$, which loses the sign that shows the point is below the line.\n* Choice C ($17$): reports the actual value instead of its difference from the line.\n* Choice D ($22$): reports the predicted value and never compares it with the data point.\n\n**Test Day Takeaway:** A residual is always actual minus predicted. Points below the line have negative residuals, and points above the line have positive residuals.",
      skills: ["calculate-mean", "slope-intercept-form"]
    },
    {
      id: 12,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "Two lines intersect at a point, forming a pair of vertical angles with measures $(5x - 15)^{\\circ}$ and $65^{\\circ}$. What is the value of $x$?",
      correctAnswer: "16",
      explanation: "**SAT Pattern: Vertical Angles**\n\n**The correct answer is 16.**\n\n**The Fast Way (~15s):** Vertical angles are equal, so $5x - 15 = 65$. Then $5x = 80$ and $x = 16$.\n\n**The Full Solution:**\nStep 1: When two lines intersect, each pair of vertical angles has equal measures.\nStep 2: Set the two measures equal: $5x - 15 = 65$.\nStep 3: Add $15$ to both sides to get $5x = 80$, then divide by $5$: $x = 16$. Check: $5(16) - 15 = 65$ ✓\n\n**Common Mistakes:**\n* $26$: treats the angles as supplementary, solving $5x - 15 = 180 - 65 = 115$.\n* $13$: divides $65$ by $5$ and ignores the $-15$.\n* $10$: subtracts $15$ from $65$ instead of adding it, computing $\\frac{65 - 15}{5}$.\n\n**Test Day Takeaway:** Vertical angles are equal; angles that form a straight line add to $180^{\\circ}$. Decide which relationship applies before you write the equation.",
      skills: ["angles"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The function $f$ is defined by $f(x) = 3.5x - 14$. If $f(a) = 56$, what is the value of $a$?",
      choices: [
        // distractor: subtracts 14 instead of adding it: (56 - 14)/3.5 = 12
        { id: "A", text: "$12$" },
        // distractor: divides 56 by 3.5 and ignores the -14
        { id: "B", text: "$16$" },
        { id: "C", text: "$20$" },
        // distractor: substitutes 56 for x instead of setting f(a) equal to 56: 3.5(56) - 14 = 182
        { id: "D", text: "$182$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Solve $f(a) = c$**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Set $3.5a - 14 = 56$. Adding $14$ gives $3.5a = 70$, so $a = 20$.\n\n**The Full Solution:**\nStep 1: $f(a) = 56$ means the output is $56$, so substitute $a$ for $x$ and set the expression equal to $56$: $3.5a - 14 = 56$.\nStep 2: Add $14$ to both sides: $3.5a = 70$.\nStep 3: Divide by $3.5$: $a = \\frac{70}{3.5} = 20$. Check: $f(20) = 3.5(20) - 14 = 70 - 14 = 56$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): subtracts $14$ instead of adding it, computing $\\frac{56 - 14}{3.5} = 12$. But $f(12) = 28$, not $56$.\n* Choice B ($16$): divides $56$ by $3.5$ and never accounts for the $-14$. But $f(16) = 42$.\n* Choice D ($182$): computes $f(56)$, putting $56$ in for the input instead of the output.\n\n**Test Day Takeaway:** In $f(a) = c$, the output $c$ is known and the input $a$ is not. Set the expression equal to $c$ and undo the operations in reverse order.",
      skills: ["function-notation"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$|2x - 48| = 18$\nWhat is the smaller of the two solutions to the given equation?",
      choices: [
        { id: "A", text: "$15$" },
        // distractor: solves only the case 2x - 48 = 18 and reports the larger solution, 33
        { id: "B", text: "$33$" },
        // distractor: reports the sum of the two solutions, 15 + 33 = 48
        { id: "C", text: "$48$" },
        // distractor: solves 2x = 66 but does not divide by 2
        { id: "D", text: "$66$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $2x - 48 = 18$ or $2x - 48 = -18$, so $2x = 66$ or $2x = 30$. The solutions are $33$ and $15$, and the smaller is $15$.\n\n**The Full Solution:**\nStep 1: An absolute value equals $18$ when the expression inside equals $18$ or $-18$: $2x - 48 = 18$ or $2x - 48 = -18$.\nStep 2: Add $48$ to both sides of each equation: $2x = 66$ or $2x = 30$, so $x = 33$ or $x = 15$.\nStep 3: The smaller solution is $15$. Check: $|2(15) - 48| = |-18| = 18$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($33$): solves only the positive case, which gives the larger solution.\n* Choice C ($48$): reports the sum of the solutions, $15 + 33 = 48$.\n* Choice D ($66$): stops at $2x = 66$ and never divides by $2$.\n\n**Test Day Takeaway:** An absolute value equation splits into two linear equations. Solve both, then reread the question to see which solution it asks for.",
      skills: ["combining-like-terms"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In right triangle $ABC$, angle $C$ is a right angle, $AC = 7k$, and $AB = 25k$, where $k$ is a positive constant. What is the value of $\\tan A$?",
      choices: [
        // distractor: gives cos A, adjacent over hypotenuse
        { id: "A", text: "$\\frac{7}{25}$" },
        // distractor: inverts the tangent, using adjacent over opposite
        { id: "B", text: "$\\frac{7}{24}$" },
        // distractor: gives sin A, opposite over hypotenuse
        { id: "C", text: "$\\frac{24}{25}$" },
        { id: "D", text: "$\\frac{24}{7}$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** $7$, $24$, $25$ is a Pythagorean triple, so $BC = 24k$ and $\\tan A = \\frac{BC}{AC} = \\frac{24k}{7k} = \\frac{24}{7}$.\n\n**The Full Solution:**\nStep 1: Since angle $C$ is the right angle, $AB$ is the hypotenuse, $AC$ is the leg adjacent to angle $A$, and $BC$ is the leg opposite angle $A$. By the Pythagorean theorem, $BC^{2} = (25k)^{2} - (7k)^{2} = 625k^{2} - 49k^{2} = 576k^{2}$.\nStep 2: Take the square root: $BC = 24k$.\nStep 3: Tangent is opposite over adjacent: $\\tan A = \\frac{24k}{7k} = \\frac{24}{7}$; the $k$ cancels. Check the side lengths: $7^{2} + 24^{2} = 49 + 576 = 625 = 25^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{7}{25}$): is adjacent over hypotenuse, which is $\\cos A$.\n* Choice B ($\\frac{7}{24}$): divides adjacent by opposite, which is $\\tan B$, not $\\tan A$.\n* Choice C ($\\frac{24}{25}$): is opposite over hypotenuse, which is $\\sin A$.\n\n**Test Day Takeaway:** A common factor such as $k$ cancels in every trig ratio. Find the missing side first, then identify opposite and adjacent from the angle named in the question.",
      skills: ["soh-cah-toa", "pythagorean-theorem"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The table shows the percent change in the number of wolves at three preserves from $2019$ to $2024$ and the number of wolves at each preserve in $2024$. What was the total number of wolves at the North and Ridge preserves in $2019$?",
      questionTable: { headers: ["Preserve", "Change since 2019", "2024 count"], rows: [["North", "20% decrease", "168"], ["Ridge", "12% increase", "224"], ["Delta", "35% decrease", "195"]] },
      correctAnswer: "410",
      explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**The correct answer is 410.**\n\n**The Fast Way (~35s):** Undo each change by dividing by its multiplier: $168 \\div 0.80 = 210$ and $224 \\div 1.12 = 200$, so the two preserves had $210 + 200 = 410$ wolves in $2019$.\n\n**The Full Solution:**\nStep 1: Read the two rows the question names. North had a $20\\%$ decrease to $168$ wolves, and Ridge had a $12\\%$ increase to $224$ wolves.\nStep 2: Write each change with the unknown $2019$ count. For North, $0.80N = 168$, so $N = \\frac{168}{0.80} = 210$. For Ridge, $1.12R = 224$, so $R = \\frac{224}{1.12} = 200$.\nStep 3: Add the two $2019$ counts: $210 + 200 = 410$. Check: $210 - 0.20(210) = 168$ and $200 + 0.12(200) = 224$ ✓\n\n**Common Mistakes:**\n* $392$: adds the two $2024$ counts, $168 + 224$, without undoing either percent change.\n* $434$: undoes the North decrease but adds Ridge's $2024$ count of $224$ instead of its $2019$ count.\n* $210$: finds the North count and forgets to add the Ridge count.\n\n**Test Day Takeaway:** To reverse a percent change, divide by the multiplier ($0.80$ for a $20\\%$ decrease, $1.12$ for a $12\\%$ increase). Undo each row separately before combining.",
      skills: ["percent-of-value", "percent-word-problems"]
    },
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "$kx + 3y = 11$\n$27x + ky = 4$\nIn the given system of equations, $k$ is a positive constant. If the system has no solution, what is the value of $k$?",
      choices: [
        // distractor: takes the square root of the coefficient ratio 27/3 = 9, reporting 3
        { id: "A", text: "$3$" },
        { id: "B", text: "$9$" },
        // distractor: adds the two known coefficients, 27 + 3 = 30
        { id: "C", text: "$30$" },
        // distractor: solves k squared = 81 but reports k squared instead of k
        { id: "D", text: "$81$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** No solution requires proportional coefficients: $\\frac{k}{27} = \\frac{3}{k}$, so $k^{2} = 81$ and the positive value is $k = 9$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has no solution when the lines are parallel and distinct: the $x$- and $y$-coefficients are in the same ratio, but the constants are not.\nStep 2: Set the coefficient ratios equal: $\\frac{k}{27} = \\frac{3}{k}$. Cross-multiplying gives $k^{2} = 81$, so $k = 9$ or $k = -9$. Since $k$ is positive, $k = 9$.\nStep 3: Check that the lines are distinct. With $k = 9$, the equations are $9x + 3y = 11$ and $27x + 9y = 4$. The second equation's coefficients are $3$ times the first's, but $3(11) = 33 \\ne 4$, so the system has no solution ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): computes $27 \\div 3 = 9$ and then takes its square root. With $k = 3$, the equations $3x + 3y = 11$ and $27x + 3y = 4$ have different slopes, so they intersect at one point.\n* Choice C ($30$): adds the two known coefficients, $27 + 3$, instead of using their ratio.\n* Choice D ($81$): solves $k^{2} = 81$ correctly but reports $k^{2}$ instead of $k$.\n\n**Test Day Takeaway:** When the constant appears in both equations, the proportionality condition becomes a quadratic. Solve it, use the given sign restriction, and confirm the constants are not in the same ratio.",
      skills: ["system-solution-types"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "In the $xy$-plane, triangle $ABC$ has vertices $A(2, 1)$, $B(10, 5)$, and $C(4, t)$, where $t$ is a constant. If the area of triangle $ABC$ is $24$ square units, what is the greatest possible value of $t$?",
      correctAnswer: "8",
      explanation: "**SAT Pattern: Area of Triangle from Coordinates**\n\n**The correct answer is 8.**\n\n**The Fast Way (~45s):** The coordinate area formula simplifies to area $= 4|t - 2|$. Setting $4|t - 2| = 24$ gives $|t - 2| = 6$, so $t = 8$ or $t = -4$, and the greater value is $8$.\n\n**The Full Solution:**\nStep 1: Use the coordinate area formula: area $= \\frac{1}{2}\\left|x_A(y_B - y_C) + x_B(y_C - y_A) + x_C(y_A - y_B)\\right|$.\nStep 2: Substitute the vertices: $\\frac{1}{2}\\left|2(5 - t) + 10(t - 1) + 4(1 - 5)\\right| = \\frac{1}{2}\\left|10 - 2t + 10t - 10 - 16\\right| = \\frac{1}{2}\\left|8t - 16\\right| = 4|t - 2|$.\nStep 3: Solve $4|t - 2| = 24$: $|t - 2| = 6$, so $t = 8$ or $t = -4$. The greatest possible value is $8$. Check with $C(4, 8)$: $\\frac{1}{2}\\left|2(-3) + 10(7) + 4(-4)\\right| = \\frac{1}{2}(48) = 24$ ✓\n\n**Common Mistakes:**\n* $-4$: solves the absolute value equation correctly but reports the lesser value.\n* $5$: drops the $\\frac{1}{2}$ in the area formula and solves $8t - 16 = 24$. With $C(4, 5)$ the area is $12$, not $24$.\n* $6$: reports $|t - 2| = 6$ instead of solving for $t$.\n\n**Test Day Takeaway:** When one vertex has an unknown coordinate, the area formula becomes an absolute value equation with two solutions. Simplify fully, solve both cases, and reread which one the question asks for.",
      skills: ["triangle-area"]
    },
    {
      id: 19,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "The graph of the linear function $f$ in the $xy$-plane passes through the points $(2, 71)$ and $(8, 47)$. For what value of $x$ does $f(x) = 23$?",
      choices: [
        // distractor: measures the change from the point (8, 47): (47 - 23)/4 = 6, and reports that horizontal distance as x
        { id: "A", text: "$6$" },
        // distractor: measures the change from the point (2, 71): (71 - 23)/4 = 12, and forgets to add the starting x-value 2
        { id: "B", text: "$12$" },
        { id: "C", text: "$14$" },
        // distractor: finds the horizontal distance 12 from the point (2, 71) but adds it to 8 instead of 2
        { id: "D", text: "$20$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The slope is $\\frac{47 - 71}{8 - 2} = -4$. From $(2, 71)$, the value must drop $71 - 23 = 48$, which takes $48 \\div 4 = 12$ units, so $x = 2 + 12 = 14$.\n\n**The Full Solution:**\nStep 1: Find the slope: $m = \\frac{47 - 71}{8 - 2} = \\frac{-24}{6} = -4$.\nStep 2: Use the point $(2, 71)$ to write the function: $f(x) = 71 - 4(x - 2)$, which simplifies to $f(x) = -4x + 79$.\nStep 3: Set $f(x) = 23$ and solve: $-4x + 79 = 23$, so $-4x = -56$ and $x = 14$. Check with the other point: $f(8) = -32 + 79 = 47$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): computes $\\frac{47 - 23}{4} = 6$ from the point $(8, 47)$, which is the horizontal distance from $x = 8$, not the value of $x$; $8 + 6 = 14$.\n* Choice B ($12$): computes $\\frac{71 - 23}{4} = 12$ from the point $(2, 71)$ but forgets to add the starting value $x = 2$.\n* Choice D ($20$): finds the same distance of $12$ from $(2, 71)$ but adds it to $8$ instead of $2$.\n\n**Test Day Takeaway:** Two points give the slope; anchor it at one of the points to write the function. A distance along the $x$-axis is not an $x$-value until it is added to the starting point.",
      skills: ["linear-functions", "slope", "coordinate-geometry"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "A swimmer completed $34$ practices that lasted a total of $71$ hours. Each practice lasted either $150$ minutes or $1.5$ hours. How many hours did the swimmer spend in $150$-minute practices?",
      choices: [
        // distractor: reports the number of 1.5-hour practices, 14, instead of the hours spent in 150-minute practices
        { id: "A", text: "$14$" },
        // distractor: reports the number of 150-minute practices, 20, instead of the hours they took
        { id: "B", text: "$20$" },
        // distractor: computes the hours spent in 1.5-hour practices, 1.5 times 14 = 21
        { id: "C", text: "$21$" },
        { id: "D", text: "$50$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice D is correct.**\n\n**The Fast Way (~45s):** $150$ minutes is $2.5$ hours. With $x + y = 34$ and $2.5x + 1.5y = 71$, subtracting $1.5$ times the first equation leaves $x = 71 - 51 = 20$, so the $150$-minute practices took $2.5(20) = 50$ hours.\n\n**The Full Solution:**\nStep 1: Use one unit. Since $150$ minutes $= \\frac{150}{60} = 2.5$ hours, let $x$ be the number of $150$-minute practices and $y$ the number of $1.5$-hour practices: $x + y = 34$ and $2.5x + 1.5y = 71$.\nStep 2: Multiply the first equation by $1.5$ to get $1.5x + 1.5y = 51$, then subtract it from the second: $x = 71 - 51 = 20$, so $y = 14$.\nStep 3: The question asks for hours, not practices: $2.5 \\times 20 = 50$ hours. Check: $50 + 1.5(14) = 50 + 21 = 71$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): reports the number of $1.5$-hour practices.\n* Choice B ($20$): solves the system correctly but reports the number of $150$-minute practices instead of the hours they took.\n* Choice C ($21$): computes the hours for the other group, $1.5 \\times 14 = 21$.\n\n**Test Day Takeaway:** Convert every quantity to one unit before writing the system, and reread the question: a system that solves for counts may ask for a total in hours.",
      skills: ["elimination-method", "setting-up-systems"]
    },
    {
      id: 21,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "The table shows four values of $x$ and their corresponding values of $g(x)$ for the linear function $g$. What is the value of $g(12) - g(4)$?",
      questionTable: { headers: ["$x$", "$g(x)$"], rows: [["$1$", "$19$"], ["$3$", "$13$"], ["$5$", "$7$"], ["$7$", "$1$"]] },
      correctAnswer: "-24",
      explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is -24.**\n\n**The Fast Way (~35s):** The value of $g(x)$ decreases by $6$ each time $x$ increases by $2$, so the slope is $-3$. From $x = 4$ to $x = 12$, $x$ increases by $8$, so $g(x)$ changes by $8(-3) = -24$.\n\n**The Full Solution:**\nStep 1: Find the rule. From $(1, 19)$ to $(3, 13)$ the slope is $\\frac{13 - 19}{3 - 1} = -3$. Using $(1, 19)$: $g(x) = 19 - 3(x - 1) = 22 - 3x$.\nStep 2: Evaluate: $g(4) = 22 - 12 = 10$ and $g(12) = 22 - 36 = -14$.\nStep 3: Subtract: $g(12) - g(4) = -14 - 10 = -24$. Check against the table: $g(7) = 22 - 21 = 1$, which matches the last row ✓\n\n**Common Mistakes:**\n* $24$: subtracts in the opposite order, $g(4) - g(12)$, and loses the negative sign.\n* $-14$: reports $g(12)$ and never subtracts $g(4) = 10$.\n* $-3$: reports the slope, the change for an increase of $1$ in $x$, instead of the change for an increase of $8$.\n\n**Test Day Takeaway:** A table of a linear function gives the slope from any two rows. Write the rule before evaluating at inputs that are not in the table.",
      skills: ["function-evaluation"]
    },
    {
      id: 22,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The area of a glacier decreased by $25\\%$ from $2000$ to $2010$ and then decreased by $20\\%$ from $2010$ to $2020$. The area of the glacier in $2020$ was what percent less than its area in $2000$?",
      choices: [
        { id: "A", text: "$40\\%$" },
        // distractor: adds the two percents, 25 + 20, as if both applied to the 2000 area
        { id: "B", text: "$45\\%$" },
        // distractor: reports the 2020 area as a percent of the 2000 area (60%) instead of the percent decrease
        { id: "C", text: "$60\\%$" },
        // distractor: divides the decrease by the 2020 area instead of the 2000 area: 0.40/0.60, about 66.7%
        { id: "D", text: "$66.7\\%$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Multiply the two multipliers: $0.75 \\times 0.80 = 0.60$. The $2020$ area is $60\\%$ of the $2000$ area, so it is $40\\%$ less.\n\n**The Full Solution:**\nStep 1: Let $A$ be the area in $2000$. A $25\\%$ decrease multiplies by $0.75$, so the $2010$ area is $0.75A$.\nStep 2: A $20\\%$ decrease multiplies by $0.80$, so the $2020$ area is $0.80(0.75A) = 0.60A$.\nStep 3: The decrease is $A - 0.60A = 0.40A$, which is $40\\%$ of the $2000$ area. Check with $A = 100$: $100 \\to 75 \\to 60$, a decrease of $40$ out of $100$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($45\\%$): adds $25\\%$ and $20\\%$. The second decrease is $20\\%$ of the smaller $2010$ area, not of the $2000$ area.\n* Choice C ($60\\%$): is the percent of the $2000$ area that remains in $2020$, not the percent decrease.\n* Choice D ($66.7\\%$): divides the decrease $0.40A$ by the $2020$ area $0.60A$ instead of by the $2000$ area.\n\n**Test Day Takeaway:** Combine successive percent changes by multiplying their multipliers, never by adding the percents, and measure a percent decrease against the starting amount.",
      skills: ["percent-change"]
    }
  ]
};

export default practiceTest6M2Easy;
