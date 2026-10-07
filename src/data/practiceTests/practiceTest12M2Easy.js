// Practice Test 12 — Math Module 2 Easy variant (22 questions)
// v2 freshness rebuild (2026-09-07): every slot re-patterned and re-authored against the seen-corpus gate — docs/TEST_RECREATION_V2_SPEC.md
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Official-calibration recreation (2026-09-01): all content re-authored
// fresh against the CB register (docs/TEST_RECREATION_SPEC.md); slot
// metadata and SAT Pattern headers frozen. Figure density lifted to 4
// diagram items (Q9 barChart, Q12 rightTriangle, Q16 scatterplot, Q21 table).
// Scenario families: airport shuttle vans, minigolf, escape rooms, riverboat.

export const practiceTest12M2Easy = {
  id: "module-2-easy",
  title: "Module 2 (Easy)",
  variant: "easy",
  timeLimit: 35,
  questions: [
    // ============================================================
    // Q1-Q3: Easy openers (band 2-3)
    // ============================================================
    {
      id: 1,
      type: "multiple-choice",
      difficulty: "easy",
      band: 2,
      question: "The table shows three values of $x$ and their corresponding values of $y$ for each of two linear equations. How many solutions does the system of these two equations have?",
      questionTable: { headers: ["$x$", "$y$ (first equation)", "$y$ (second equation)"], rows: [["$0$", "$4$", "$-1$"], ["$1$", "$7$", "$2$"], ["$2$", "$10$", "$5$"]] },
      choices: [
        { id: "A", text: "Zero" },
        // distractor: assumes any two different lines must cross once, ignoring that both y-values rise by the same 3 for each increase of 1 in x
        { id: "B", text: "Exactly one" },
        // distractor: treats the equations as curves that could meet twice; two distinct lines meet at most once
        { id: "C", text: "Exactly two" },
        // distractor: reads the constant gap of 5 between the y-values as the two equations describing the same line
        { id: "D", text: "Infinitely many" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Both $y$-columns increase by $3$ each time $x$ increases by $1$, so the lines have the same slope, but at $x = 0$ they start at different values. Parallel, distinct lines never meet.\n\n**The Full Solution:**\nStep 1: Find each slope from the table. First equation: $7 - 4 = 3$ and $10 - 7 = 3$. Second equation: $2 - (-1) = 3$ and $5 - 2 = 3$. Both slopes are $3$.\nStep 2: Read each $y$-intercept from the row $x = 0$: the first line is $y = 3x + 4$ and the second is $y = 3x - 1$.\nStep 3: Set them equal: $3x + 4 = 3x - 1$ gives $4 = -1$, which is false for every $x$, so the system has no solution. Check: in every row the first $y$-value is exactly $5$ more than the second ($4 - (-1)$, $7 - 2$, $10 - 5$), so the gap never closes ✓\n\n**Why the wrong answers are tempting:**\n* Choice B (Exactly one): two lines usually cross once, but only when their slopes differ. Here both slopes are $3$.\n* Choice C (Exactly two): two different lines can share at most one point, so a system of two linear equations never has exactly two solutions.\n* Choice D (Infinitely many): that would require the two $y$-values to be equal in every row, but each row shows a difference of $5$.\n\n**Test Day Takeaway:** Equal slopes with different $y$-intercepts means parallel lines and zero solutions; equal slopes with equal intercepts means the same line and infinitely many.",
      skills: ["system-solution-types"]
    },
    {
      id: 2,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "In the $xy$-plane, the graph of $2x - 5y = 30$ passes through the point $(a, -4)$. What is the value of $a$?",
      choices: [
        // distractor: substitutes -4 for x instead of y and solves 2(-4) - 5a = 30
        { id: "A", text: "$-7.6$" },
        { id: "B", text: "$5$" },
        // distractor: ignores the y-term and solves 2a = 30
        { id: "C", text: "$15$" },
        // distractor: treats -5(-4) as -20 and solves 2a - 20 = 30
        { id: "D", text: "$25$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Point on a Line**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Substitute $x = a$ and $y = -4$: $2a + 20 = 30$, so $a = 5$.\n\n**The Full Solution:**\nStep 1: A point on the graph satisfies the equation, so substitute $x = a$ and $y = -4$: $2a - 5(-4) = 30$.\nStep 2: Simplify: $2a + 20 = 30$, so $2a = 10$.\nStep 3: Divide by $2$: $a = 5$. Check: $2(5) - 5(-4) = 10 + 20 = 30$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7.6$): puts $-4$ in for $x$ instead of $y$, solving $-8 - 5a = 30$.\n* Choice C ($15$): drops the $y$-term and solves $2a = 30$.\n* Choice D ($25$): makes a sign error, writing $-5(-4)$ as $-20$ and solving $2a - 20 = 30$.\n\n**Test Day Takeaway:** A point lies on a graph exactly when its coordinates make the equation true; substitute the $x$- and $y$-coordinates in the right places.",
      skills: ["coordinate-geometry"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "$6x + 11 \\ge 50$\nWhat is the least integer value of $x$ that satisfies the given inequality?",
      choices: [
        // distractor: rounds 6.5 down to 6, which does not satisfy the inequality
        { id: "A", text: "$6$" },
        { id: "B", text: "$7$" },
        // distractor: divides 50 by 6 without first subtracting 11, then rounds 8.33 up to 9
        { id: "C", text: "$9$" },
        // distractor: adds 11 to both sides instead of subtracting it, solving 6x >= 61 and rounding 10.17 up to 11
        { id: "D", text: "$11$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Smallest Integer in an Inequality**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $6x \\ge 39$ gives $x \\ge 6.5$, and the least integer that is at least $6.5$ is $7$.\n\n**The Full Solution:**\nStep 1: Subtract $11$ from both sides: $6x \\ge 39$.\nStep 2: Divide both sides by $6$: $x \\ge \\frac{39}{6} = 6.5$.\nStep 3: The least integer greater than or equal to $6.5$ is $7$. Check: $6(7) + 11 = 53 \\ge 50$, while $6(6) + 11 = 47$ is less than $50$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): rounds $6.5$ down. Testing it fails: $6(6) + 11 = 47$, which is less than $50$.\n* Choice C ($9$): divides $50$ by $6$ before removing the $11$, getting $8.33$ and rounding up.\n* Choice D ($11$): adds $11$ to both sides instead of subtracting it, solving $6x \\ge 61$ and rounding $10.17$ up.\n\n**Test Day Takeaway:** Isolate $x$ first, then round in the direction the inequality points: for $x \\ge$ a non-integer, round up, and test the integer you choose in the original inequality.",
      skills: ["inequalities"]
    },
    // ============================================================
    // Q4-Q16: Medium core (band 4-5)
    // ============================================================
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "$3(2x + k) - 12 = 5x + 21$\nIn the given equation, $k$ is a constant. If $x = 9$ is the solution to the given equation, what is the value of $k$?",
      choices: [
        // distractor: subtracts 12 from the right side instead of adding it, leaving 54 + 3k = 54
        { id: "A", text: "$0$" },
        // distractor: drops the -12 term entirely and solves 54 + 3k = 66
        { id: "B", text: "$4$" },
        { id: "C", text: "$8$" },
        // distractor: distributes the 3 onto 2x only, solving 54 + k - 12 = 66
        { id: "D", text: "$24$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** At $x = 9$ the right side is $66$, so $3(18 + k) - 12 = 66$, giving $3(18 + k) = 78$, $18 + k = 26$, and $k = 8$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 9$ into both sides: the left side becomes $3(18 + k) - 12$ and the right side becomes $5(9) + 21 = 66$.\nStep 2: Distribute and combine: $54 + 3k - 12 = 66$, so $3k + 42 = 66$.\nStep 3: Subtract $42$ and divide by $3$: $3k = 24$, so $k = 8$. Check: $3(2 \\cdot 9 + 8) - 12 = 78 - 12 = 66$, which matches the right side ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): moves the $-12$ to the right side as a subtraction, solving $54 + 3k = 66 - 12 = 54$. Undoing $-12$ requires adding $12$.\n* Choice B ($4$): ignores the $-12$ and solves $54 + 3k = 66$, giving $3k = 12$.\n* Choice D ($24$): multiplies only the $2x$ by $3$, writing $54 + k - 12 = 66$, which loses the factor of $3$ on $k$.\n\n**Test Day Takeaway:** Substitute the given solution, then distribute the outside factor to every term in the parentheses, constants included, before solving for the parameter.",
      skills: ["solving-equations"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Lines $j$ and $k$ are perpendicular in the $xy$-plane. Line $j$ is defined by $ax + 15y = 60$, where $a$ is a constant, and line $k$ is defined by $y = \\frac{5}{3}x - 7$. What is the value of $a$?",
      choices: [
        // distractor: sets line j's slope equal to 5/3, the slope of line k itself, instead of its negative reciprocal
        { id: "A", text: "$-25$" },
        // distractor: flips 5/3 to 3/5 but keeps the slope positive
        { id: "B", text: "$-9$" },
        { id: "C", text: "$9$" },
        // distractor: negates 5/3 without flipping it
        { id: "D", text: "$25$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Line $j$ must have slope $-\\frac{3}{5}$. Its slope is $-\\frac{a}{15}$, so $-\\frac{a}{15} = -\\frac{3}{5}$ and $a = 9$.\n\n**The Full Solution:**\nStep 1: Line $k$ has slope $\\frac{5}{3}$, so a line perpendicular to it has slope $-\\frac{3}{5}$, the negative reciprocal.\nStep 2: Solve line $j$'s equation for $y$: $15y = -ax + 60$, so $y = -\\frac{a}{15}x + 4$, and its slope is $-\\frac{a}{15}$.\nStep 3: Set the slopes equal: $-\\frac{a}{15} = -\\frac{3}{5}$, so $a = \\frac{3}{5}(15) = 9$. Check: with $a = 9$, line $j$ is $y = -\\frac{3}{5}x + 4$, and $\\left(-\\frac{3}{5}\\right)\\left(\\frac{5}{3}\\right) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-25$): sets $-\\frac{a}{15} = \\frac{5}{3}$, using line $k$'s own slope, which would make the lines parallel.\n* Choice B ($-9$): sets $-\\frac{a}{15} = \\frac{3}{5}$, flipping the fraction but leaving out the negative sign.\n* Choice D ($25$): sets $-\\frac{a}{15} = -\\frac{5}{3}$, negating the slope without flipping it; the product of the slopes would be $-\\frac{25}{9}$, not $-1$.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals: flip and negate. Solve an equation in $Ax + By = C$ form for $y$ before reading its slope.",
      skills: ["perpendicular-negative-reciprocal"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The graph of the linear function $f$ passes through the two points shown in the $xy$-plane. If $f(a) = -22$, what is the value of $a$?",
      diagram: { type: "coordinatePoints", params: { points: [[-2, 6], [2, -2]], xMin: -6, xMax: 6, yMin: -4, yMax: 8 } },
      correctAnswer: "12",
      explanation: "**SAT Pattern: Line from Two Points**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~30s):** The points $(-2, 6)$ and $(2, -2)$ give slope $-2$ and $f(x) = -2x + 2$. Setting $-2a + 2 = -22$ gives $a = 12$.\n\n**The Full Solution:**\nStep 1: Read the points from the graph: $(-2, 6)$ and $(2, -2)$. The slope is $\\frac{-2 - 6}{2 - (-2)} = \\frac{-8}{4} = -2$.\nStep 2: Find the $y$-intercept using $(2, -2)$: $-2 = -2(2) + b$, so $b = 2$ and $f(x) = -2x + 2$.\nStep 3: Set $f(a) = -22$: $-2a + 2 = -22$, so $-2a = -24$ and $a = 12$. Check: $f(12) = -2(12) + 2 = -22$ ✓\n\n**Common Mistakes:**\n* $-12$: divides $-24$ by $2$ instead of by $-2$.\n* $11$: takes the $y$-intercept to be $0$, as if the line passed through the origin, and solves $-2a = -22$.\n* $-24$: stops at $-2a = -24$ and reports that value instead of dividing by $-2$.\n\n**Test Day Takeaway:** Two points give the slope and then the intercept; write the function once, then set it equal to the given output and solve for the input.",
      skills: ["linear-functions", "slope", "coordinate-geometry"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The function $f$ is defined by $f(x) = 3x + c$, where $c$ is a constant. If $f(2) = 17$, what is the value of $f(6)$?",
      choices: [
        // distractor: uses the input 2 as the constant, computing 3(6) + 2
        { id: "A", text: "$20$" },
        { id: "B", text: "$29$" },
        // distractor: finds c = 17 - 2 = 15 by subtracting the input instead of 3 times the input
        { id: "C", text: "$33$" },
        // distractor: triples f(2) because the input tripled, treating f as proportional
        { id: "D", text: "$51$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $f(2) = 6 + c = 17$ gives $c = 11$, so $f(6) = 18 + 11 = 29$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 2$: $f(2) = 3(2) + c = 6 + c$.\nStep 2: Set it equal to $17$: $6 + c = 17$, so $c = 11$ and $f(x) = 3x + 11$.\nStep 3: Evaluate at $x = 6$: $f(6) = 3(6) + 11 = 29$. Check: $f(2) = 3(2) + 11 = 17$, as given ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): puts the input $2$ in place of the constant, computing $3(6) + 2$.\n* Choice C ($33$): finds $c = 17 - 2 = 15$ by subtracting the input rather than $3(2) = 6$, then computes $18 + 15$.\n* Choice D ($51$): multiplies $f(2)$ by $3$ because the input tripled. With a nonzero constant term, $f$ is not proportional.\n\n**Test Day Takeaway:** Use the given input-output pair to find the constant first, then evaluate. Outputs scale with inputs only when the constant term is $0$.",
      skills: ["function-evaluation"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Line $k$ in the $xy$-plane is parallel to the graph of $x + 2y = 14$ and passes through the origin. The point $(6, d)$ lies on line $k$. What is the value of $d$?",
      choices: [
        // distractor: uses -2, the reciprocal of the slope, as the slope: -2(6) = -12
        { id: "A", text: "$-12$" },
        { id: "B", text: "$-3$" },
        // distractor: finds the y-value at x = 6 on the given line x + 2y = 14 instead of on line k
        { id: "C", text: "$4$" },
        // distractor: uses 2, the perpendicular slope, as the slope: 2(6) = 12
        { id: "D", text: "$12$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The given line is $y = -\\frac{1}{2}x + 7$, so line $k$ is $y = -\\frac{1}{2}x$, and $d = -\\frac{1}{2}(6) = -3$.\n\n**The Full Solution:**\nStep 1: Solve $x + 2y = 14$ for $y$: $y = -\\frac{1}{2}x + 7$. Its slope is $-\\frac{1}{2}$, so line $k$ also has slope $-\\frac{1}{2}$.\nStep 2: Line $k$ passes through the origin, so its $y$-intercept is $0$ and line $k$ is $y = -\\frac{1}{2}x$.\nStep 3: Substitute $x = 6$: $d = -\\frac{1}{2}(6) = -3$. Check: the slope from $(0, 0)$ to $(6, -3)$ is $\\frac{-3 - 0}{6 - 0} = -\\frac{1}{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): uses $-2$ as the slope, flipping $-\\frac{1}{2}$ by mistake.\n* Choice C ($4$): substitutes $x = 6$ into $x + 2y = 14$, which gives a point on the given line, not on line $k$.\n* Choice D ($12$): uses $2$, the slope of a perpendicular line.\n\n**Test Day Takeaway:** A line parallel to a given line has the same slope; if it passes through the origin, its equation is $y = mx$.",
      skills: ["writing-parallel-equation"]
    },
    {
      id: 9,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Data set A has a mean of $38$ and a range of $20$. Data set B is created by adding $9$ to each value in data set A. What are the mean and the range of data set B?",
      choices: [
        // distractor: assumes adding the same number to every value changes neither measure
        { id: "A", text: "The mean is $38$ and the range is $20$." },
        // distractor: shifts the range by 9 but leaves the mean unchanged, the reverse of what happens
        { id: "B", text: "The mean is $38$ and the range is $29$." },
        { id: "C", text: "The mean is $47$ and the range is $20$." },
        // distractor: adds 9 to the range as well as to the mean
        { id: "D", text: "The mean is $47$ and the range is $29$." }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Scaling a Data Set by a Constant**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Adding $9$ to every value adds $9$ to the mean, $38 + 9 = 47$, but the greatest and least values both go up by $9$, so the range stays $20$.\n\n**The Full Solution:**\nStep 1: If the values of data set A add to $S$ for $n$ values, the values of data set B add to $S + 9n$, so the mean of B is $\\frac{S + 9n}{n} = \\frac{S}{n} + 9 = 38 + 9 = 47$.\nStep 2: If the greatest and least values of A are $M$ and $L$, with $M - L = 20$, then the greatest and least values of B are $M + 9$ and $L + 9$.\nStep 3: The range of B is $(M + 9) - (L + 9) = M - L = 20$. Check with the values $28$, $38$, $48$ (mean $38$, range $20$): adding $9$ gives $37$, $47$, $57$, with mean $47$ and range $57 - 37 = 20$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A: the range is unchanged, but every value, and so the mean, is $9$ greater.\n* Choice B: switches the two effects; the center moves and the spread stays the same.\n* Choice D: adds $9$ to the range, but the distance between the greatest and least values does not change.\n\n**Test Day Takeaway:** Adding the same number to every value shifts the mean and the median by that number and leaves the range and the standard deviation unchanged.",
      skills: ["data-analysis"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The function $g$ is defined by $g(x) = 96 - 3x$. For what value of $x$ does $g(x) = 42$?",
      choices: [
        // distractor: divides the output 42 by 3 and ignores the 96
        { id: "A", text: "$14$" },
        { id: "B", text: "$18$" },
        // distractor: adds 96 and 42 before dividing by 3 instead of subtracting
        { id: "C", text: "$46$" },
        // distractor: stops at 3x = 54 without dividing by 3
        { id: "D", text: "$54$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Solve $f(a) = c$**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $96 - 3x = 42$ gives $3x = 54$, so $x = 18$.\n\n**The Full Solution:**\nStep 1: Set the function equal to the given output: $96 - 3x = 42$.\nStep 2: Add $3x$ to both sides and subtract $42$: $54 = 3x$.\nStep 3: Divide by $3$: $x = 18$. Check: $g(18) = 96 - 3(18) = 96 - 54 = 42$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): computes $\\frac{42}{3}$, ignoring the $96$ in the function.\n* Choice C ($46$): computes $\\frac{96 + 42}{3}$, adding where the equation requires subtracting.\n* Choice D ($54$): stops at $3x = 54$ and reports $54$ without dividing by $3$.\n\n**Test Day Takeaway:** $g(x) = 42$ gives the OUTPUT; set the rule equal to it and solve for the input, then evaluate $g$ at your answer to confirm.",
      skills: ["function-notation"]
    },
    {
      id: 11,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The table shows the amount of fiber in each kilogram of two types of flour. A $40$-kilogram blend contains $x$ kilograms of oat flour and the rest barley flour. The total amount of fiber in the blend, in grams, can be written as $ax + b$, where $a$ and $b$ are constants. What is the value of $a$?",
      questionTable: { headers: ["Flour", "Fiber per kilogram (grams)"], rows: [["Oat", "$96$"], ["Barley", "$132$"]] },
      correctAnswer: "-36",
      explanation: "**SAT Pattern: Matching Coefficients**\n\n**The correct answer is $-36$.**\n\n**The Fast Way (~30s):** The fiber is $96x + 132(40 - x) = -36x + 5{,}280$, so $a = -36$.\n\n**The Full Solution:**\nStep 1: The blend has $x$ kilograms of oat flour and $40 - x$ kilograms of barley flour.\nStep 2: The total fiber, in grams, is $96x + 132(40 - x) = 96x + 5{,}280 - 132x$.\nStep 3: Combine like terms: $-36x + 5{,}280$. Matching this to $ax + b$ gives $a = -36$ (and $b = 5{,}280$). Check with $x = 40$ (all oat flour): $-36(40) + 5{,}280 = 3{,}840 = 96(40)$ ✓\n\n**Common Mistakes:**\n* $96$: uses the oat flour's fiber per kilogram without accounting for the barley flour that the oat flour replaces.\n* $36$: subtracts in the wrong order, $132 - 96$, losing the negative sign.\n* $5{,}280$: gives $b$, the constant term, instead of the coefficient of $x$.\n\n**Test Day Takeaway:** Write the whole expression, expand, and combine like terms before matching coefficients; each kilogram of oat flour replaces a kilogram of barley flour.",
      skills: ["distributive-property"]
    },
    {
      id: 12,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A right triangle has a leg of length $5\\sqrt{2}$ centimeters and an area of $60$ square centimeters. What is the length, in centimeters, of the other leg of the triangle?",
      choices: [
        // distractor: omits the factor of 1/2 in the area formula, dividing 60 rather than 120 by 5 root 2
        { id: "A", text: "$6\\sqrt{2}$" },
        { id: "B", text: "$12\\sqrt{2}$" },
        // distractor: drops the radical and divides 120 by 5
        { id: "C", text: "$24$" },
        // distractor: multiplies 24 by root 2 instead of dividing by it
        { id: "D", text: "$24\\sqrt{2}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Right Triangle Area with Surds**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $\\frac{1}{2}(5\\sqrt{2})h = 60$ gives $h = \\frac{120}{5\\sqrt{2}} = \\frac{24}{\\sqrt{2}} = 12\\sqrt{2}$.\n\n**The Full Solution:**\nStep 1: The legs of a right triangle are its base and height, so $\\frac{1}{2}(5\\sqrt{2})h = 60$, where $h$ is the other leg.\nStep 2: Multiply both sides by $2$ and divide by $5\\sqrt{2}$: $h = \\frac{120}{5\\sqrt{2}} = \\frac{24}{\\sqrt{2}}$.\nStep 3: Rationalize: $\\frac{24}{\\sqrt{2}} \\cdot \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{24\\sqrt{2}}{2} = 12\\sqrt{2}$. Check: $\\frac{1}{2}(5\\sqrt{2})(12\\sqrt{2}) = \\frac{1}{2}(60 \\cdot 2) = 60$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6\\sqrt{2}$): divides $60$ by $5\\sqrt{2}$ without first doubling the area; that triangle's area would be $30$.\n* Choice C ($24$): treats the leg as $5$ and computes $\\frac{120}{5}$, dropping the radical.\n* Choice D ($24\\sqrt{2}$): multiplies $24$ by $\\sqrt{2}$ instead of dividing by it, giving twice the correct length.\n\n**Test Day Takeaway:** For a right triangle, double the area and divide by the known leg; if a radical ends up in the denominator, rationalize before comparing with the choices.",
      skills: ["triangle-area"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A random sample of $240$ vans was selected from all the vans owned by a delivery service. The mean odometer reading of the vans in the sample was $47.6$ thousand kilometers, with an associated margin of error of $2.3$ thousand kilometers. Which of the following is the most appropriate conclusion about the mean odometer reading of all the vans owned by the delivery service?",
      choices: [
        // distractor: doubles the margin of error before building the interval, giving 47.6 plus or minus 4.6
        { id: "A", text: "It is plausible that the mean is between $43.0$ and $52.2$ thousand kilometers." },
        // distractor: subtracts the margin but keeps the sample mean itself as the upper bound
        { id: "B", text: "It is plausible that the mean is between $45.3$ and $47.6$ thousand kilometers." },
        // distractor: treats the sample mean as the exact population mean, ignoring the margin of error
        { id: "C", text: "The mean is exactly $47.6$ thousand kilometers." },
        { id: "D", text: "It is plausible that the mean is between $45.3$ and $49.9$ thousand kilometers." }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Margin of Error**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The plausible values are the sample mean plus or minus the margin of error: $47.6 - 2.3 = 45.3$ and $47.6 + 2.3 = 49.9$.\n\n**The Full Solution:**\nStep 1: A margin of error is applied to the sample estimate in both directions to give plausible values for the population.\nStep 2: Lower bound: $47.6 - 2.3 = 45.3$ thousand kilometers. Upper bound: $47.6 + 2.3 = 49.9$ thousand kilometers.\nStep 3: So it is plausible that the mean odometer reading of all the vans is between $45.3$ and $49.9$ thousand kilometers. Check: the interval's width is $49.9 - 45.3 = 4.6$, twice the margin of error, with $47.6$ at its center ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($43.0$ to $52.2$): applies $\\pm 4.6$, doubling the margin of error before using it.\n* Choice B ($45.3$ to $47.6$): subtracts the margin but leaves the sample mean as the upper bound; the interval extends above the estimate as well.\n* Choice C (exactly $47.6$): treats the sample mean as the population mean. A sample gives an estimate, which is why a margin of error is reported.\n\n**Test Day Takeaway:** Estimate $\\pm$ margin of error gives the plausible values for the whole population, never a single exact value.",
      skills: ["margin-of-error"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$6x - 8y = 5$\n$kx + 12y = 7$\nIn the given system of equations, $k$ is a constant. If the system has no solution, what is the value of $k$?",
      choices: [
        // distractor: uses 4/3, the reciprocal of the first line's slope 3/4
        { id: "A", text: "$-16$" },
        { id: "B", text: "$-9$" },
        // distractor: matches the slopes but drops the minus sign that solving for y introduces
        { id: "C", text: "$9$" },
        // distractor: inverts the slope to 4/3 and also drops the minus sign
        { id: "D", text: "$16$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** No solution means equal slopes. The first line has slope $\\frac{3}{4}$ and the second has slope $-\\frac{k}{12}$, so $-\\frac{k}{12} = \\frac{3}{4}$ and $k = -9$.\n\n**The Full Solution:**\nStep 1: Solve each equation for $y$. From $6x - 8y = 5$: $y = \\frac{3}{4}x - \\frac{5}{8}$. From $kx + 12y = 7$: $y = -\\frac{k}{12}x + \\frac{7}{12}$.\nStep 2: A system of two linear equations has no solution when the slopes are equal and the $y$-intercepts differ: $-\\frac{k}{12} = \\frac{3}{4}$.\nStep 3: Solve: $k = -12 \\cdot \\frac{3}{4} = -9$. Check: the intercepts $-\\frac{5}{8}$ and $\\frac{7}{12}$ are different, so the lines are parallel and distinct ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-16$): sets $-\\frac{k}{12} = \\frac{4}{3}$, reading the first slope as $\\frac{8}{6}$ instead of $\\frac{6}{8}$.\n* Choice C ($9$): sets $\\frac{k}{12} = \\frac{3}{4}$, forgetting that moving $kx$ to the other side makes the slope $-\\frac{k}{12}$.\n* Choice D ($16$): combines both slips, inverting the slope and dropping the sign.\n\n**Test Day Takeaway:** Put both equations in slope-intercept form before comparing. No solution requires equal slopes AND different intercepts; equal intercepts too would mean infinitely many solutions.",
      skills: ["system-solution-types"]
    },
    {
      id: 15,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "$4x + 10y = 26$\n$6x + cy = 39$\nIn the given system of equations, $c$ is a constant. For what value of $c$ does the system have infinitely many solutions?",
      correctAnswer: "15",
      explanation: "**SAT Pattern: System Equivalence Check**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~25s):** The constants scale by $\\frac{39}{26} = \\frac{3}{2}$, and $\\frac{6}{4} = \\frac{3}{2}$ confirms it, so $c = \\frac{3}{2}(10) = 15$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has infinitely many solutions when one equation is a constant multiple of the other, so all three pairs of matching parts share one scale factor.\nStep 2: Find the factor from the known parts: $\\frac{6}{4} = \\frac{3}{2}$ for the $x$-coefficients and $\\frac{39}{26} = \\frac{3}{2}$ for the constants.\nStep 3: Apply it to the $y$-coefficient: $c = \\frac{3}{2}(10) = 15$. Check: multiplying $4x + 10y = 26$ by $\\frac{3}{2}$ gives $6x + 15y = 39$, the second equation exactly ✓\n\n**Common Mistakes:**\n* $10$: copies the $y$-coefficient from the first equation, as if only the other parts changed.\n* $6.666$: scales by $\\frac{26}{39} = \\frac{2}{3}$, the reciprocal of the correct factor.\n* $12$: adds the difference $6 - 4 = 2$ to $10$; equivalent equations are multiples, not shifts.\n\n**Test Day Takeaway:** For infinitely many solutions, find the scale factor from one pair of matching terms, confirm it on a second pair, then apply it to the unknown coefficient.",
      skills: ["system-solution-types", "infinite-solutions-condition"]
    },
    {
      id: 16,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The dot plot shows the number of meteors an observer counted during each of $10$ one-hour sessions. What is the mean number of meteors counted per session?",
      diagram: { type: "dotPlot", params: { data: [{ value: 3, count: 1 }, { value: 4, count: 2 }, { value: 6, count: 1 }, { value: 7, count: 1 }, { value: 8, count: 3 }, { value: 10, count: 1 }, { value: 12, count: 1 }], xMin: 2, xMax: 13, xLabel: "Meteors per session" } },
      choices: [
        { id: "A", text: "$7$" },
        // distractor: reports the median, the average of the 5th and 6th dots
        { id: "B", text: "$7.5$" },
        // distractor: reports the mode, the value under the tallest stack
        { id: "C", text: "$8$" },
        // distractor: reports the range, 12 minus 3
        { id: "D", text: "$9$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Mean from List**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The ten values sum to $70$, and $\\frac{70}{10} = 7$.\n\n**The Full Solution:**\nStep 1: List one value per dot: $3, 4, 4, 6, 7, 8, 8, 8, 10, 12$. That is $10$ values, one for each session.\nStep 2: Add them: $3 + 2(4) + 6 + 7 + 3(8) + 10 + 12 = 3 + 8 + 6 + 7 + 24 + 10 + 12 = 70$.\nStep 3: Divide by the number of sessions: $\\frac{70}{10} = 7$. Check: $10 \\times 7 = 70$, the total number of meteors counted ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($7.5$): averages the $5$th and $6$th ordered values, $7$ and $8$; that is the median.\n* Choice C ($8$): reads the tallest stack, the mode.\n* Choice D ($9$): computes $12 - 3$, the range, which measures spread rather than center.\n\n**Test Day Takeaway:** Each dot is one value, so multiply each value by the number of dots above it, add, and divide by the total number of dots.",
      skills: ["calculate-mean"]
    },
    // ============================================================
    // Q17-Q22: Medium-hard ceiling (band 6-7)
    // ============================================================
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "$a(x - 4)^{2} - 9$\nIn the given expression, $a$ is a constant. The expression is equivalent to $ax^{2} + bx + 23$, where $b$ is a constant. What is the value of $b$?",
      choices: [
        { id: "A", text: "$-16$" },
        // distractor: expands the square but never multiplies the middle term by a, reporting -2 times 4
        { id: "B", text: "$-8$" },
        // distractor: solves 16a - 9 = 23 as 16a = 14, getting a = 0.875 and then b = -7
        { id: "C", text: "$-7$" },
        // distractor: finds a = 2 but writes the middle term of (x - 4)^2 as +8x, giving b = 16
        { id: "D", text: "$16$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** The constant term of $a(x - 4)^{2} - 9$ is $16a - 9$, so $16a - 9 = 23$ and $a = 2$. The middle term is $-8ax = -16x$, so $b = -16$.\n\n**The Full Solution:**\nStep 1: Expand: $a(x - 4)^{2} - 9 = a(x^{2} - 8x + 16) - 9 = ax^{2} - 8ax + 16a - 9$.\nStep 2: Match the constant terms: $16a - 9 = 23$, so $16a = 32$ and $a = 2$.\nStep 3: Match the $x$-terms: $b = -8a = -8(2) = -16$. Check: $2(x - 4)^{2} - 9 = 2x^{2} - 16x + 32 - 9 = 2x^{2} - 16x + 23$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-8$): copies the $-8$ from $x^{2} - 8x + 16$ without multiplying it by $a = 2$.\n* Choice C ($-7$): solves $16a - 9 = 23$ by subtracting $9$, getting $16a = 14$ and $a = 0.875$, then $b = -8(0.875) = -7$.\n* Choice D ($16$): finds $a = 2$ but expands $(x - 4)^{2}$ with a middle term of $+8x$; squaring a difference gives a negative middle term.\n\n**Test Day Takeaway:** Expand the vertex form completely, then match coefficients term by term; in $a(x - h)^{2} + k$, the $x$-coefficient is $-2ah$ and the constant is $ah^{2} + k$.",
      skills: ["distributive-property", "converting-quadratic-forms"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "The function $f$ is defined by $f(x) = 3x^{2} - 5$. If $f(a - 2) = 43$, what is the greatest possible value of $a$?",
      correctAnswer: "6",
      explanation: "**SAT Pattern: Horizontal Shift**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~35s):** $3(a - 2)^{2} - 5 = 43$ gives $(a - 2)^{2} = 16$, so $a - 2 = \\pm 4$ and $a = 6$ or $a = -2$. The greatest value is $6$.\n\n**The Full Solution:**\nStep 1: Replace $x$ with $a - 2$: $f(a - 2) = 3(a - 2)^{2} - 5$, so $3(a - 2)^{2} - 5 = 43$.\nStep 2: Add $5$ and divide by $3$: $(a - 2)^{2} = 16$.\nStep 3: Take square roots: $a - 2 = 4$ or $a - 2 = -4$, so $a = 6$ or $a = -2$. The greatest possible value is $6$. Check: $f(4) = 3(16) - 5 = 43$ ✓\n\n**Common Mistakes:**\n* $4$: solves for $a - 2$ and stops, reporting $4$ instead of $a$.\n* $-2$: takes the negative square root, which gives the least value of $a$, not the greatest.\n* $18$: forgets the square root and sets $a - 2 = 16$.\n\n**Test Day Takeaway:** Substitute the whole input $a - 2$ for $x$, isolate the square, and remember that a square has two square roots; then choose the one the question asks for.",
      skills: ["function-transformations"]
    },
    {
      id: 19,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "$\\frac{25n^{2} - 4}{5n^{2} + 8n - 4}$\nWhich of the following is equivalent to the given expression for $n > 1$?",
      choices: [
        // distractor: inverts the simplified expression, writing the denominator's remaining factor on top
        { id: "A", text: "$\\frac{n + 2}{5n + 2}$" },
        // distractor: keeps 5n - 2 in the numerator and cancels 5n + 2, which is not a factor of the denominator
        { id: "B", text: "$\\frac{5n - 2}{n + 2}$" },
        // distractor: factors the denominator as (5n + 2)(n - 2), which expands to 5n^2 - 8n - 4 instead
        { id: "C", text: "$\\frac{5n + 2}{n - 2}$" },
        { id: "D", text: "$\\frac{5n + 2}{n + 2}$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Rational Expression Simplification**\n\n**Choice D is correct.**\n\n**The Fast Way (~45s):** The numerator is a difference of squares, $(5n - 2)(5n + 2)$, and the denominator factors as $(5n - 2)(n + 2)$. Dividing out $5n - 2$ leaves $\\frac{5n + 2}{n + 2}$.\n\n**The Full Solution:**\nStep 1: Factor the numerator: $25n^{2} - 4 = (5n)^{2} - 2^{2} = (5n - 2)(5n + 2)$.\nStep 2: Factor the denominator: $(5n - 2)(n + 2) = 5n^{2} + 10n - 2n - 4 = 5n^{2} + 8n - 4$.\nStep 3: Divide out the common factor $5n - 2$, which is not zero for $n > 1$: $\\frac{(5n - 2)(5n + 2)}{(5n - 2)(n + 2)} = \\frac{5n + 2}{n + 2}$. Check at $n = 2$: the original is $\\frac{96}{32} = 3$, and $\\frac{5(2) + 2}{2 + 2} = \\frac{12}{4} = 3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{n + 2}{5n + 2}$): the correct result turned upside down; at $n = 2$ it equals $\\frac{1}{3}$, not $3$.\n* Choice B ($\\frac{5n - 2}{n + 2}$): cancels the wrong factor of the numerator; at $n = 2$ it equals $2$.\n* Choice C ($\\frac{5n + 2}{n - 2}$): factors the denominator as $(5n + 2)(n - 2)$, which expands to $5n^{2} - 8n - 4$, the wrong sign on the middle term.\n\n**Test Day Takeaway:** Factor the numerator and denominator completely before cancelling, and check the result at one allowed value of the variable.",
      skills: ["simplifying-rational-expressions", "difference-of-squares"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "A courier charges \\$15 to deliver a package, plus \\$2.50 for each pound of the package's weight over $30$ pounds. The courier charged \\$75 to deliver one package. What is the weight, in pounds, of that package?",
      choices: [
        // distractor: divides the 60-dollar overage by 2.50 but never adds the 30-pound allowance back
        { id: "A", text: "$24$" },
        // distractor: treats the 15-dollar charge as a 15-pound allowance, solving 15 + 2.50(w - 15) = 75
        { id: "B", text: "$39$" },
        { id: "C", text: "$54$" },
        // distractor: divides the full 75-dollar charge by 2.50 before removing the 15-dollar charge, then adds 30
        { id: "D", text: "$60$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Word-to-Expression Translation**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The charge beyond the \\$15 is $75 - 15 = 60$ dollars, which pays for $\\frac{60}{2.50} = 24$ pounds over $30$, so the package weighs $54$ pounds.\n\n**The Full Solution:**\nStep 1: Translate: for a package weighing $w$ pounds, only the weight over $30$ pounds is charged per pound, so the charge is $15 + 2.50(w - 30)$ dollars.\nStep 2: Set the charge equal to $75$: $15 + 2.50(w - 30) = 75$, so $2.50(w - 30) = 60$.\nStep 3: Divide by $2.50$ and add $30$: $w - 30 = 24$, so $w = 54$. Check: $15 + 2.50(54 - 30) = 15 + 60 = 75$ dollars ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($24$): finds the $24$ pounds over $30$ and reports that as the weight, leaving out the first $30$ pounds.\n* Choice B ($39$): uses $15$ as the weight allowance, solving $15 + 2.50(w - 15) = 75$; the $15$ is dollars and the allowance is $30$ pounds.\n* Choice D ($60$): divides the whole \\$75 by $2.50$ to get $30$ and adds $30$, without first subtracting the \\$15.\n\n**Test Day Takeaway:** When a rate applies only above a threshold, write it as rate $\\times$ (amount $-$ threshold); subtract the flat charge first, divide by the rate, then add the threshold back.",
      skills: ["word-problem-to-equation"]
    },
    {
      id: 21,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "A weather balloon rises at a constant rate after it is released. The table shows the balloon's altitude above sea level at two times after its release. At what rate, in meters per second, does the balloon's altitude increase?",
      questionTable: { headers: ["Time after release (minutes)", "Altitude (meters)"], rows: [["$6$", "$3{,}000$"], ["$16$", "$6{,}000$"]] },
      choices: [
        { id: "A", text: "$5$" },
        // distractor: divides the later altitude by the later time in seconds, treating the altitude at release as 0
        { id: "B", text: "$6.25$" },
        // distractor: divides the 3,000-meter rise by 60 instead of by the 600-second interval
        { id: "C", text: "$50$" },
        // distractor: computes meters per minute and never converts to meters per second
        { id: "D", text: "$300$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** The balloon rises $6{,}000 - 3{,}000 = 3{,}000$ meters in $16 - 6 = 10$ minutes, or $600$ seconds, so the rate is $\\frac{3{,}000}{600} = 5$ meters per second.\n\n**The Full Solution:**\nStep 1: Use the two rows as points: the change in altitude is $6{,}000 - 3{,}000 = 3{,}000$ meters, and the change in time is $16 - 6 = 10$ minutes.\nStep 2: Convert the time to seconds: $10 \\times 60 = 600$ seconds.\nStep 3: Divide: $\\frac{3{,}000}{600} = 5$ meters per second. Check: at $5$ meters per second, the balloon gains $5(600) = 3{,}000$ meters between the two times, matching the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($6.25$): computes $\\frac{6{,}000}{960}$, assuming the balloon started at altitude $0$; the line through the table values gives $3{,}000 - 5(360) = 1{,}200$ meters at release.\n* Choice C ($50$): divides $3{,}000$ by $60$, as though the interval were $1$ minute rather than $10$.\n* Choice D ($300$): finds $\\frac{3{,}000}{10} = 300$ meters per minute and does not convert to seconds.\n\n**Test Day Takeaway:** A rate of change is the change in output divided by the change in input, not one endpoint divided by another; convert units before you divide.",
      skills: ["slope-from-points"]
    },
    {
      id: 22,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "Data set A consists of $11$ values and has a mean of $46$. Data set B consists of the values in data set A and one additional value, $x$. The mean of data set B is $6$ greater than that of data set A. What is the value of $x$?",
      correctAnswer: "118",
      explanation: "**SAT Pattern: Outlier Effect**\n\n**The correct answer is $118$.**\n\n**The Fast Way (~35s):** Data set B has mean $46 + 6 = 52$, so $x = 12(52) - 11(46) = 624 - 506 = 118$.\n\n**The Full Solution:**\nStep 1: The values in data set A total $11 \\times 46 = 506$.\nStep 2: Data set B has $12$ values and a mean of $52$, so its values total $12 \\times 52 = 624$.\nStep 3: The added value is the difference: $x = 624 - 506 = 118$. Check: $\\frac{506 + 118}{12} = \\frac{624}{12} = 52$, which is $6$ more than $46$ ✓\n\n**Common Mistakes:**\n* $52$: reports the new mean instead of the added value; adding $52$ would raise the mean only to $\\frac{558}{12} = 46.5$.\n* $66$: computes $11(52) - 11(46)$, using $11$ values for data set B instead of $12$.\n* $72$: computes $12 \\times 6$, the amount by which $x$ must exceed $46$, and forgets to add the $46$.\n\n**Test Day Takeaway:** Means do not combine directly, but totals do: convert each mean to a total (mean $\\times$ count), subtract, and the added value appears. A single extreme value moves the mean much more than the median.",
      skills: ["calculate-mean", "find-median"]
    }
  ]
};

export default practiceTest12M2Easy;
