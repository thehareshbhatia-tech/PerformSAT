// Practice Test 2 — Math Module 2 Easy variant (22 questions)
// v2 freshness rebuild (2026-09-07): every slot re-patterned and re-authored against the seen-corpus gate — docs/TEST_RECREATION_V2_SPEC.md
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Domain mix: 7 Algebra / 6 Advanced Math / 5 Problem-Solving / 4 Geometry & Trig.
// Official-calibration recreation (2026-08-31): fresh scenarios throughout,
// accessible official register; diagrams at Q8 (bar chart), Q20 (parallel
// lines), Q21 (scatterplot), Q22 (two-way table).

export const practiceTest2M2Easy = {
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
      question: "The table shows four values of $x$ and their corresponding values of $y$ for line $p$ and line $q$ in the $xy$-plane. How many solutions does the system of equations of these two lines have?",
      questionTable: { headers: ["$x$", "$y$ for line $p$", "$y$ for line $q$"], rows: [["$0$", "$5$", "$12$"], ["$1$", "$9$", "$16$"], ["$2$", "$13$", "$20$"], ["$3$", "$17$", "$24$"]] },
      choices: [
        { id: "A", text: "Zero" },
        // distractor: assumes any two different lines must cross at one point, ignoring that both slopes are 4
        { id: "B", text: "Exactly one" },
        // distractor: treats the pair of lines like a line and a parabola, which can meet twice
        { id: "C", text: "Exactly two" },
        // distractor: sees the equal slopes of 4 and concludes the lines are the same line, ignoring the different y-intercepts 5 and 12
        { id: "D", text: "Infinitely many" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Both columns rise by $4$ each time $x$ rises by $1$, but at $x = 0$ line $p$ is at $5$ and line $q$ is at $12$. Same slope, different $y$-intercepts: the lines are parallel, so the system has zero solutions.\n\n**The Full Solution:**\nStep 1: Find the slope of each line. For line $p$, $y$ goes $5, 9, 13, 17$, a change of $4$ per unit of $x$. For line $q$, $y$ goes $12, 16, 20, 24$, also a change of $4$.\nStep 2: Read the $y$-intercepts from the row $x = 0$: line $p$ is $y = 4x + 5$ and line $q$ is $y = 4x + 12$.\nStep 3: Setting $4x + 5 = 4x + 12$ gives $5 = 12$, which is false for every $x$, so the lines never meet. Check: in every row of the table, line $q$'s value is exactly $7$ more than line $p$'s, so the gap never closes ✓\n\n**Why the wrong answers are tempting:**\n* Choice B (Exactly one): assumes two different lines must cross somewhere. That is true only when their slopes differ; here both slopes are $4$.\n* Choice C (Exactly two): treats the system like a line and a parabola. Two distinct lines can meet at most once.\n* Choice D (Infinitely many): notices the equal slopes and stops. Equal slopes give the same line only when the $y$-intercepts also match, and $5 \\ne 12$.\n\n**Test Day Takeaway:** For two linear equations, compare slopes first. Different slopes give one solution; equal slopes with different intercepts give zero; equal slopes and equal intercepts give infinitely many.",
      skills: ["system-solution-types"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "$y - 8x = 35$\n$3y - 24x = m$\nThe given system of equations has infinitely many solutions, and $m$ is a constant. What is the value of $m$?",
      correctAnswer: "105",
      explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**The correct answer is $105$.**\n\n**The Fast Way (~20s):** The left side of the second equation is $3$ times the left side of the first, so the constant must be $3$ times as large too: $m = 3(35) = 105$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has infinitely many solutions when one equation is a nonzero multiple of the other, so both equations describe the same line.\nStep 2: Compare the variable terms. Going from $y - 8x$ to $3y - 24x$ multiplies each term by $3$, since $3(1) = 3$ and $3(-8) = -24$.\nStep 3: The constant must be multiplied by the same factor, so $m = 3(35) = 105$. Check: dividing $3y - 24x = 105$ by $3$ gives $y - 8x = 35$, the first equation ✓\n\n**Common Mistakes:**\n* $35$: scales the variable terms but leaves the constant alone. With $m = 35$ the lines are parallel and the system has no solution.\n* $38$: adds the factor $3$ to the constant instead of multiplying, $35 + 3 = 38$.\n* $11.67$: divides by $3$ instead of multiplying, $35 \\div 3 \\approx 11.67$.\n\n**Test Day Takeaway:** Infinitely many solutions means every coefficient and the constant scale by the same factor. Find the factor from the variable terms, then apply it to the constant.",
      skills: ["system-solution-types", "infinite-solutions-condition"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "$6x + 10y = 84$\nThe given equation and a second linear equation form a system with infinitely many solutions. Which of the following could be the second equation?",
      choices: [
        { id: "A", text: "$3x + 5y = 42$" },
        // distractor: halves the coefficients but leaves the constant at 84, which gives a parallel line and no solution
        { id: "B", text: "$3x + 5y = 84$" },
        // distractor: halves the constant to 42 but leaves the coefficients unchanged, again a parallel line
        { id: "C", text: "$6x + 10y = 42$" },
        // distractor: doubles the coefficients but leaves the constant at 84 instead of doubling it to 168
        { id: "D", text: "$12x + 20y = 84$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Dividing every term of $6x + 10y = 84$ by $2$ gives $3x + 5y = 42$, the same line, so the system would have infinitely many solutions.\n\n**The Full Solution:**\nStep 1: A system has infinitely many solutions when the second equation is the first multiplied by a nonzero constant, with the constant term included.\nStep 2: Test each choice for a single factor. In choice A, $\\frac{3}{6} = \\frac{5}{10} = \\frac{42}{84} = \\frac{1}{2}$, so every term is multiplied by $\\frac{1}{2}$.\nStep 3: The other choices fail: in B the constant ratio is $\\frac{84}{84} = 1$, in C the coefficient ratio is $1$ but the constant ratio is $\\frac{1}{2}$, and in D the coefficient ratio is $2$ but the constant ratio is $1$. Check: the point $(14, 0)$ satisfies $6(14) + 10(0) = 84$ and $3(14) + 5(0) = 42$, and so does $(4, 6)$: $24 + 60 = 84$ and $12 + 30 = 42$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($3x + 5y = 84$): halves the coefficients but not the constant. The lines have the same slope and different intercepts, so the system has no solution.\n* Choice C ($6x + 10y = 42$): changes only the constant. Again the lines are parallel and the system has no solution.\n* Choice D ($12x + 20y = 84$): doubles the coefficients but leaves the constant at $84$; the matching equation would be $12x + 20y = 168$.\n\n**Test Day Takeaway:** For infinitely many solutions, the coefficient of $x$, the coefficient of $y$, and the constant must all change by the same factor. Check all three ratios, not just two.",
      skills: ["system-solution-types", "infinite-solutions-condition"]
    },
    // ============================================================
    // Q4-Q16: Medium core (band 4-5)
    // ============================================================
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "The list gives the length, in seconds, of each of the $8$ songs on an album.\n$205$, $142$, $236$, $191$, $310$, $168$, $219$, $177$\nWhat is the median length, in seconds, of these songs?",
      choices: [
        // distractor: takes the lower of the two middle values, 191, instead of the mean of the two middle values
        { id: "A", text: "$191$" },
        { id: "B", text: "$198$" },
        // distractor: computes the mean, 1,648 divided by 8, instead of the median
        { id: "C", text: "$206$" },
        // distractor: averages the 4th and 5th entries of the unsorted list, 191 and 310, without ordering the values first
        { id: "D", text: "$250.5$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Median Calculation**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** In order, the lengths are $142, 168, 177, 191, 205, 219, 236, 310$. With $8$ values the median is the mean of the 4th and 5th: $\\frac{191 + 205}{2} = 198$.\n\n**The Full Solution:**\nStep 1: Put the values in increasing order: $142, 168, 177, 191, 205, 219, 236, 310$.\nStep 2: There is an even number of values, so the median is the mean of the two middle values, the 4th and 5th: $191$ and $205$.\nStep 3: The median is $\\frac{191 + 205}{2} = \\frac{396}{2} = 198$ seconds. Check: four values ($142, 168, 177, 191$) are below $198$ and four ($205, 219, 236, 310$) are above it ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($191$): picks the lower middle value. With an even count, the median is the mean of both middle values.\n* Choice C ($206$): computes the mean, $\\frac{1{,}648}{8} = 206$. The long song of $310$ seconds pulls the mean above the median.\n* Choice D ($250.5$): averages the 4th and 5th numbers as listed, $191$ and $310$, without sorting first.\n\n**Test Day Takeaway:** Always sort before finding a median. With an even number of values, average the two middle ones.",
      skills: ["find-median"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "Which expression is equivalent to $-3(x - 4)^{2} + 61$?",
      choices: [
        { id: "A", text: "$-3x^{2} + 24x + 13$" },
        // distractor: expands the square but does not multiply the 16 by -3, adding 16 + 61 = 77 instead of -48 + 61 = 13
        { id: "B", text: "$-3x^{2} + 24x + 77$" },
        // distractor: loses a sign on the middle term, using -3 times -8x = -24x instead of +24x
        { id: "C", text: "$-3x^{2} - 24x + 13$" },
        // distractor: squares term by term, treating (x - 4)^2 as x^2 + 16, which drops the middle term
        { id: "D", text: "$-3x^{2} + 13$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** $(x - 4)^{2} = x^{2} - 8x + 16$, so $-3(x - 4)^{2} = -3x^{2} + 24x - 48$, and adding $61$ gives $-3x^{2} + 24x + 13$.\n\n**The Full Solution:**\nStep 1: Expand the square: $(x - 4)^{2} = x^{2} - 8x + 16$.\nStep 2: Distribute $-3$ to every term: $-3x^{2} + 24x - 48$.\nStep 3: Add $61$: $-3x^{2} + 24x - 48 + 61 = -3x^{2} + 24x + 13$. Check at $x = 0$: the original expression is $-3(16) + 61 = 13$ and choice A gives $13$; at $x = 1$: $-3(9) + 61 = 34$ and $-3 + 24 + 13 = 34$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-3x^{2} + 24x + 77$): multiplies only the first two terms by $-3$ and adds $16 + 61 = 77$; the constant should be $-48 + 61 = 13$.\n* Choice C ($-3x^{2} - 24x + 13$): drops a negative sign, computing $-3(-8x)$ as $-24x$.\n* Choice D ($-3x^{2} + 13$): treats $(x - 4)^{2}$ as $x^{2} + 16$, which loses the middle term $-8x$.\n\n**Test Day Takeaway:** Expand the square completely before distributing, then multiply every term, including the constant, by the leading coefficient. Plugging in $x = 0$ is a fast check on the constant.",
      skills: ["distributive-property", "converting-quadratic-forms"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "In the right triangle shown, what is the value of $\\cos A$?",
      diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [24, 0], [24, 45]], labels: ["A", "B", "C"], sideLabels: ["24", "45", ""], rightAngleVertex: 1, figureNote: true } },
      correctAnswer: "8/17",
      explanation: "**SAT Pattern: Right Triangle — Trig Ratios**\n\n**The correct answer is $\\frac{8}{17}$.** Equivalent answers such as $.4705$ and $.4706$ are also accepted.\n\n**The Fast Way (~30s):** The legs $24$ and $45$ give a hypotenuse of $\\sqrt{24^{2} + 45^{2}} = 51$, so $\\cos A = \\frac{24}{51} = \\frac{8}{17}$.\n\n**The Full Solution:**\nStep 1: The hypotenuse $AC$ is not labeled, so use the Pythagorean theorem: $AC^{2} = 24^{2} + 45^{2} = 576 + 2{,}025 = 2{,}601$, and $AC = 51$.\nStep 2: Cosine is adjacent over hypotenuse. The side adjacent to angle $A$ is $AB = 24$, and the hypotenuse is $AC = 51$.\nStep 3: $\\cos A = \\frac{24}{51} = \\frac{8}{17}$. Check: $\\sin A = \\frac{45}{51} = \\frac{15}{17}$, and $\\left(\\frac{8}{17}\\right)^{2} + \\left(\\frac{15}{17}\\right)^{2} = \\frac{64 + 225}{289} = 1$ ✓\n\n**Common Mistakes:**\n* $\\frac{15}{17}$: computes $\\sin A$, using the opposite side $45$ instead of the adjacent side $24$.\n* $\\frac{8}{15}$: divides adjacent by opposite, $\\frac{24}{45}$, which uses the other leg in place of the hypotenuse.\n* $\\frac{8}{23}$: adds the legs, $24 + 45 = 69$, and uses $69$ as the hypotenuse, giving $\\frac{24}{69} = \\frac{8}{23}$.\n\n**Test Day Takeaway:** Before writing a trig ratio, label opposite, adjacent, and hypotenuse from the named angle. If the hypotenuse is missing, find it first with the Pythagorean theorem.",
      skills: ["soh-cah-toa", "pythagorean-theorem"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A shop sold $2{,}760$ bicycles this year, which is $15\\%$ more than it sold last year. Of the bicycles the shop sold last year, $35\\%$ were mountain bikes. How many mountain bikes did the shop sell last year?",
      choices: [
        // distractor: takes 15% of last year's total instead of 35%, computing 0.15 times 2,400 = 360
        { id: "A", text: "$360$" },
        { id: "B", text: "$840$" },
        // distractor: applies the 35% to this year's 2,760 instead of last year's total, giving 966
        { id: "C", text: "$966$" },
        // distractor: finds last year's total correctly, 2,400, but stops before taking 35%
        { id: "D", text: "$2{,}400$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Reverse-Percent Multi-Step**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Last year's total is $\\frac{2{,}760}{1.15} = 2{,}400$ bicycles, and $35\\%$ of that is $0.35(2{,}400) = 840$.\n\n**The Full Solution:**\nStep 1: Let $n$ be the number of bicycles sold last year. This year's total is $15\\%$ more, so $1.15n = 2{,}760$.\nStep 2: Divide: $n = \\frac{2{,}760}{1.15} = 2{,}400$.\nStep 3: The mountain bikes were $35\\%$ of last year's total: $0.35(2{,}400) = 840$. Check: $2{,}400 + 0.15(2{,}400) = 2{,}400 + 360 = 2{,}760$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($360$): takes $15\\%$ of $2{,}400$, which is the increase from last year to this year, not the number of mountain bikes.\n* Choice C ($966$): applies $35\\%$ to this year's total, $0.35(2{,}760) = 966$, but the $35\\%$ describes last year's bicycles.\n* Choice D ($2{,}400$): correctly finds last year's total but stops one step short.\n\n**Test Day Takeaway:** When a number is \"$p\\%$ more than\" an unknown, divide by $1 + \\frac{p}{100}$ to recover the original. Then apply any second percent to the total it describes.",
      skills: ["percent-of-value", "percent-word-problems"]
    },
    {
      id: 8,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The $15$ values in a data set have a mean of $2.6$ and a standard deviation of $0.8$. Each value is multiplied by $5$, and then $3$ is added to each result. What is the mean of the new values?",
      correctAnswer: "16",
      explanation: "**SAT Pattern: Scaling a Data Set by a Constant**\n\n**The correct answer is $16$.**\n\n**The Fast Way (~20s):** Whatever is done to every value is done to the mean, so the new mean is $5(2.6) + 3 = 16$.\n\n**The Full Solution:**\nStep 1: Write the rule. A value $v$ in the original data set becomes $5v + 3$.\nStep 2: Multiplying every value by $5$ multiplies the sum, and therefore the mean, by $5$: $5(2.6) = 13$.\nStep 3: Adding $3$ to every value adds $3$ to the mean: $13 + 3 = 16$. Check: the original sum is $15(2.6) = 39$; the new sum is $5(39) + 15(3) = 195 + 45 = 240$, and $\\frac{240}{15} = 16$ ✓\n\n**Common Mistakes:**\n* $13$: multiplies the mean by $5$ but forgets to add the $3$.\n* $28$: adds $3$ before multiplying, computing $5(2.6 + 3) = 28$, which reverses the order of the operations.\n* $4$: transforms the standard deviation, $5(0.8) = 4$, instead of the mean.\n\n**Test Day Takeaway:** A rule of the form $av + b$ applied to every value sends the mean to $a(\\text{mean}) + b$. The standard deviation is only multiplied by $|a|$; the added constant does not affect it.",
      skills: ["data-analysis"]
    },
    {
      id: 9,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$y = 0.5x^{2} - 7x + 20$\nThe graph of the given equation intersects the $x$-axis at two points. What is the distance between the two points?",
      choices: [
        // distractor: reports the smaller x-intercept, 4, instead of the distance between the two intercepts
        { id: "A", text: "$4$" },
        { id: "B", text: "$6$" },
        // distractor: reports the larger x-intercept, 10, instead of the distance between the two intercepts
        { id: "C", text: "$10$" },
        // distractor: adds the two intercepts, 4 + 10, instead of subtracting them
        { id: "D", text: "$14$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Multiply by $2$ to get $x^{2} - 14x + 40 = 0$, which factors as $(x - 4)(x - 10) = 0$. The intercepts are at $x = 4$ and $x = 10$, which are $10 - 4 = 6$ apart.\n\n**The Full Solution:**\nStep 1: The graph meets the $x$-axis where $y = 0$: $0.5x^{2} - 7x + 20 = 0$. Multiplying both sides by $2$ gives $x^{2} - 14x + 40 = 0$.\nStep 2: Factor: $(x - 4)(x - 10) = 0$, so $x = 4$ or $x = 10$. The points are $(4, 0)$ and $(10, 0)$.\nStep 3: Both points are on the $x$-axis, so the distance between them is $10 - 4 = 6$. Check: $0.5(4)^{2} - 7(4) + 20 = 8 - 28 + 20 = 0$ and $0.5(10)^{2} - 7(10) + 20 = 50 - 70 + 20 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): is the smaller $x$-intercept, not the distance between the intercepts.\n* Choice C ($10$): is the larger $x$-intercept, not the distance between the intercepts.\n* Choice D ($14$): adds the intercepts, $4 + 10$, which gives the sum of the solutions rather than the distance.\n\n**Test Day Takeaway:** For the distance between $x$-intercepts, find both zeros and subtract the smaller from the larger. Clearing a decimal coefficient first makes factoring easier.",
      skills: ["quadratics"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$4(px + 5) - 3x = 17x + 20$\nIn the given equation, $p$ is a constant. The equation has infinitely many solutions. What is the value of $p$?",
      choices: [
        // distractor: subtracts the 3 instead of adding it back, solving 4p = 17 - 3 to get 3.5
        { id: "A", text: "$3.5$" },
        // distractor: ignores the -3x term, solving 4p = 17 to get 4.25
        { id: "B", text: "$4.25$" },
        { id: "C", text: "$5$" },
        // distractor: reaches 4p = 20 but reports 20 without dividing by 4
        { id: "D", text: "$20$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The left side simplifies to $(4p - 3)x + 20$. For infinitely many solutions it must match $17x + 20$, so $4p - 3 = 17$ and $p = 5$.\n\n**The Full Solution:**\nStep 1: Distribute on the left: $4(px + 5) - 3x = 4px + 20 - 3x = (4p - 3)x + 20$.\nStep 2: The constants already match ($20 = 20$). The equation is true for every $x$ only if the $x$-coefficients also match: $4p - 3 = 17$.\nStep 3: Solve: $4p = 20$, so $p = 5$. Check: with $p = 5$ the left side is $4(5x + 5) - 3x = 20x + 20 - 3x = 17x + 20$, identical to the right side ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3.5$): moves the $-3$ the wrong way, solving $4p = 17 - 3 = 14$.\n* Choice B ($4.25$): forgets the $-3x$ term and sets $4p = 17$.\n* Choice D ($20$): correctly reaches $4p = 20$ but does not divide by $4$.\n\n**Test Day Takeaway:** An equation has infinitely many solutions when both sides simplify to the same expression. Collect the $x$-terms on each side, then set the coefficients equal.",
      skills: ["distributive-property"]
    },
    {
      id: 11,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "$f(x) = x^{2} - 18x + 88$\nFour values of the given function $f$ are shown in the table. What is the minimum value of $f$?",
      questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$2$", "$56$"], ["$5$", "$23$"], ["$8$", "$8$"], ["$11$", "$11$"]] },
      correctAnswer: "7",
      explanation: "**SAT Pattern: Quadratic — Completing the Square**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~30s):** Half of $-18$ is $-9$, and $(-9)^{2} = 81$, so $f(x) = (x - 9)^{2} + 7$. A square is never negative, so the minimum value is $7$, at $x = 9$.\n\n**The Full Solution:**\nStep 1: Complete the square. Take half of the $x$-coefficient, $\\frac{-18}{2} = -9$, and square it: $81$. Then $x^{2} - 18x + 88 = (x^{2} - 18x + 81) + 7$.\nStep 2: Rewrite: $f(x) = (x - 9)^{2} + 7$.\nStep 3: Since $(x - 9)^{2} \\ge 0$ for every $x$, the least value of $f(x)$ is $0 + 7 = 7$, reached when $x = 9$. Check: $f(9) = 81 - 162 + 88 = 7$, and $f(8) = 8$ and $f(10) = 8$ are both larger ✓\n\n**Common Mistakes:**\n* $8$: takes the smallest value in the table. The table skips $x = 9$, where the minimum occurs.\n* $9$: reports the $x$-value of the vertex instead of the minimum value of the function.\n* $169$: adds $81$ instead of subtracting it when completing the square, $88 + 81 = 169$.\n\n**Test Day Takeaway:** A table shows only selected points, and the vertex may fall between them. Complete the square, $(x - h)^{2} + k$, and read the minimum value $k$ directly.",
      skills: ["quadratics"]
    },
    {
      id: 12,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$f(x) = a(x - 6)^{2} + 11$\nIn the given function, $a$ is a constant. If $f(0) = 2$, what is the value of $f(2)$?",
      choices: [
        // distractor: evaluates with (x + 6)^2 = 64 instead of (x - 6)^2 = 16, giving -0.25 times 64 plus 11 = -5
        { id: "A", text: "$-5$" },
        { id: "B", text: "$7$" },
        // distractor: multiplies a by (x - 6) = -4 without squaring, giving -0.25 times -4 plus 11 = 12
        { id: "C", text: "$12$" },
        // distractor: solves 36a = -9 as a = 0.25, dropping the negative sign, giving 0.25 times 16 plus 11 = 15
        { id: "D", text: "$15$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Vertex Form from Two Conditions**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $f(0) = 36a + 11 = 2$ gives $a = -\\frac{1}{4}$. Then $f(2) = -\\frac{1}{4}(2 - 6)^{2} + 11 = -4 + 11 = 7$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 0$: $f(0) = a(0 - 6)^{2} + 11 = 36a + 11$.\nStep 2: Set this equal to $2$: $36a + 11 = 2$, so $36a = -9$ and $a = -\\frac{1}{4}$.\nStep 3: Evaluate at $x = 2$: $f(2) = -\\frac{1}{4}(2 - 6)^{2} + 11 = -\\frac{1}{4}(16) + 11 = 7$. Check: $f(0) = -\\frac{1}{4}(36) + 11 = -9 + 11 = 2$, matching the given condition ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): uses $(2 + 6)^{2} = 64$ instead of $(2 - 6)^{2} = 16$, giving $-\\frac{1}{4}(64) + 11 = -5$.\n* Choice C ($12$): forgets to square, computing $-\\frac{1}{4}(-4) + 11 = 12$.\n* Choice D ($15$): drops the negative sign on $a$, using $a = \\frac{1}{4}$ to get $\\frac{1}{4}(16) + 11 = 15$.\n\n**Test Day Takeaway:** When a function has one unknown constant, use the given point to find it first, then evaluate. In vertex form, square $(x - h)$ before multiplying by $a$.",
      skills: ["vertex-form", "function-evaluation"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$x + y = 450$\n$90x + 180y = 63{,}000$\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
      choices: [
        // distractor: solves the system correctly but reports x = 200 instead of y
        { id: "A", text: "$200$" },
        // distractor: splits 450 evenly between x and y, ignoring the second equation
        { id: "B", text: "$225$" },
        { id: "C", text: "$250$" },
        // distractor: divides 63,000 by 180 as if x were 0, ignoring the first equation
        { id: "D", text: "$350$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Dividing the second equation by $90$ gives $x + 2y = 700$. Subtracting $x + y = 450$ leaves $y = 250$.\n\n**The Full Solution:**\nStep 1: Simplify the second equation by dividing every term by $90$: $x + 2y = 700$.\nStep 2: Subtract the first equation from this one to eliminate $x$: $(x + 2y) - (x + y) = 700 - 450$, so $y = 250$.\nStep 3: Substitute back to find $x$: $x = 450 - 250 = 200$. Check: $200 + 250 = 450$ and $90(200) + 180(250) = 18{,}000 + 45{,}000 = 63{,}000$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($200$): is the value of $x$, not $y$. Both values come out of the same work, so reread what is asked.\n* Choice B ($225$): splits $450$ in half, which would be right only if $x$ and $y$ had equal coefficients in the second equation.\n* Choice D ($350$): computes $\\frac{63{,}000}{180}$, which assumes $x = 0$ and ignores the first equation.\n\n**Test Day Takeaway:** Divide out a common factor before eliminating; it keeps the numbers small. Then answer for the variable the question names.",
      skills: ["elimination-method", "setting-up-systems"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$y = \\frac{2}{5}x + 3$\n$8x - ky = 12$\nIn the given system of equations, $k$ is a constant. If the system has no solution, what is the value of $k$?",
      choices: [
        // distractor: multiplies instead of dividing, computing 8 times 2/5 = 3.2
        { id: "A", text: "$3.2$" },
        // distractor: copies the denominator of the slope 2/5 as k without using the coefficient 8
        { id: "B", text: "$5$" },
        { id: "C", text: "$20$" },
        // distractor: reaches 2k = 40 and reports 40 without dividing by 2
        { id: "D", text: "$40$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The second line has slope $\\frac{8}{k}$. No solution means equal slopes with different intercepts, so $\\frac{8}{k} = \\frac{2}{5}$ and $k = 20$.\n\n**The Full Solution:**\nStep 1: Solve the second equation for $y$: $-ky = -8x + 12$, so $y = \\frac{8}{k}x - \\frac{12}{k}$.\nStep 2: A system of two linear equations has no solution when the lines are parallel: same slope, different $y$-intercepts. Setting the slopes equal gives $\\frac{8}{k} = \\frac{2}{5}$, so $2k = 40$ and $k = 20$.\nStep 3: Confirm the intercepts differ. With $k = 20$, the second line is $y = \\frac{2}{5}x - \\frac{3}{5}$, whose $y$-intercept is $-\\frac{3}{5}$, not $3$. Check: setting $\\frac{2}{5}x + 3 = \\frac{2}{5}x - \\frac{3}{5}$ gives $3 = -\\frac{3}{5}$, which is false, so there is no solution ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3.2$): multiplies $8$ by $\\frac{2}{5}$ instead of solving $\\frac{8}{k} = \\frac{2}{5}$.\n* Choice B ($5$): matches only the denominator of $\\frac{2}{5}$, ignoring the coefficient $8$.\n* Choice D ($40$): cross-multiplies to $2k = 40$ and stops before dividing by $2$.\n\n**Test Day Takeaway:** For \"no solution,\" write both lines in slope-intercept form and set the slopes equal, then confirm the intercepts differ.",
      skills: ["system-solution-types"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In the $xy$-plane, a circle has center $(5, -7)$ and passes through the point $(9, -4)$. Which equation represents this circle?",
      choices: [
        // distractor: puts the radius 5 on the right side instead of the radius squared, 25
        { id: "A", text: "$(x - 5)^{2} + (y + 7)^{2} = 5$" },
        { id: "B", text: "$(x - 5)^{2} + (y + 7)^{2} = 25$" },
        // distractor: flips both center signs, placing the center at (-5, 7) instead of (5, -7)
        { id: "C", text: "$(x + 5)^{2} + (y - 7)^{2} = 25$" },
        // distractor: uses the given point on the circle, (9, -4), as the center
        { id: "D", text: "$(x - 9)^{2} + (y + 4)^{2} = 25$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Circle in Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The radius is the distance from the center to the point, $\\sqrt{(9 - 5)^{2} + (-4 + 7)^{2}} = \\sqrt{16 + 9} = 5$. So the equation is $(x - 5)^{2} + (y + 7)^{2} = 25$.\n\n**The Full Solution:**\nStep 1: The radius is the distance from the center $(5, -7)$ to the point $(9, -4)$ on the circle. The differences are $9 - 5 = 4$ and $-4 - (-7) = 3$, so $r^{2} = 4^{2} + 3^{2} = 25$ and $r = 5$.\nStep 2: A circle with center $(h, k)$ and radius $r$ has equation $(x - h)^{2} + (y - k)^{2} = r^{2}$. Substituting $h = 5$ and $k = -7$ gives $(x - 5)^{2} + (y - (-7))^{2} = (x - 5)^{2} + (y + 7)^{2}$ on the left side.\nStep 3: The right side is $r^{2} = 25$, so the equation is $(x - 5)^{2} + (y + 7)^{2} = 25$. Check: the point $(9, -4)$ gives $(9 - 5)^{2} + (-4 + 7)^{2} = 16 + 9 = 25$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($(x - 5)^{2} + (y + 7)^{2} = 5$): puts the radius on the right side. The standard form needs the radius squared, $25$.\n* Choice C ($(x + 5)^{2} + (y - 7)^{2} = 25$): reverses both signs, which describes a circle centered at $(-5, 7)$.\n* Choice D ($(x - 9)^{2} + (y + 4)^{2} = 25$): uses the point on the circle as the center. The center is $(5, -7)$; the point $(9, -4)$ only fixes the radius.\n\n**Test Day Takeaway:** The right side of a circle's equation is the radius squared, and a point on the circle supplies it directly: $r^{2}$ is the squared distance from the center to that point.",
      skills: ["circle-equation"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "For the exponential function $f$, the table shows four values of $x$ and their corresponding values of $f(x)$. What is the value of $f(4)$?",
      questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$0$", "$16$"], ["$1$", "$24$"], ["$2$", "$36$"], ["$3$", "$54$"]] },
      correctAnswer: "81",
      explanation: "**SAT Pattern: Exponential Growth/Decay**\n\n**The correct answer is $81$.**\n\n**The Fast Way (~20s):** Each value is $\\frac{3}{2}$ times the one before ($\\frac{24}{16} = 1.5$), so $f(4) = 54(1.5) = 81$.\n\n**The Full Solution:**\nStep 1: An exponential function multiplies by the same factor each time $x$ increases by $1$. Find it: $\\frac{24}{16} = \\frac{36}{24} = \\frac{54}{36} = 1.5$.\nStep 2: So $f(x) = 16(1.5)^{x}$.\nStep 3: Then $f(4) = 16(1.5)^{4} = 16(5.0625) = 81$, which is also $54(1.5) = 81$. Check: $\\frac{81}{54} = 1.5$, the same factor as every other step ✓\n\n**Common Mistakes:**\n* $72$: adds the last difference, $54 + 18$, treating the function as linear.\n* $121.5$: multiplies $54$ by $1.5^{2} = 2.25$, taking two steps instead of one.\n* $54$: reports $f(3)$ instead of $f(4)$.\n\n**Test Day Takeaway:** For an exponential table, divide consecutive outputs to find the growth factor; for a linear table, subtract. Then take exactly as many steps as the question asks.",
      skills: ["exponential-growth-decay"]
    },
    // ============================================================
    // Q17-Q22: Hard ceiling for Easy variant (band 6-7, NO band 8)
    // ============================================================
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "In the $xy$-plane, point $P$ has coordinates $(-6, 3)$ and point $Q$ has coordinates $(2a, a + 4)$, where $a$ is a constant. The midpoint of $\\overline{PQ}$ has an $x$-coordinate of $5$. What is the $y$-coordinate of the midpoint of $\\overline{PQ}$?",
      choices: [
        // distractor: averages the constant a = 8 with the y-coordinate 3, giving 5.5, instead of averaging the two y-coordinates
        { id: "A", text: "$5.5$" },
        // distractor: drops the division by 2 in the x-equation, solving -6 + 2a = 5 to get a = 5.5, so Q has y-coordinate 9.5 and the midpoint y-coordinate becomes 6.25
        { id: "B", text: "$6.25$" },
        { id: "C", text: "$7.5$" },
        // distractor: reports Q's y-coordinate, 12, instead of the midpoint's
        { id: "D", text: "$12$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Midpoint Formula**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** From $\\frac{-6 + 2a}{2} = 5$, $a = 8$, so $Q = (16, 12)$. The midpoint's $y$-coordinate is $\\frac{3 + 12}{2} = 7.5$.\n\n**The Full Solution:**\nStep 1: The midpoint's $x$-coordinate is the mean of the endpoints' $x$-coordinates: $\\frac{-6 + 2a}{2} = 5$.\nStep 2: Solve: $-6 + 2a = 10$, so $2a = 16$ and $a = 8$. Then $Q = (2(8), 8 + 4) = (16, 12)$.\nStep 3: The midpoint's $y$-coordinate is $\\frac{3 + 12}{2} = 7.5$. Check: the midpoint is $(5, 7.5)$, and moving from $P(-6, 3)$ to $(5, 7.5)$ is a change of $(11, 4.5)$, which lands exactly on $(16, 12)$ when repeated ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5.5$): averages $a = 8$ with $3$, using the constant in place of $Q$'s $y$-coordinate, $a + 4 = 12$.\n* Choice B ($6.25$): forgets to multiply by $2$, solving $-6 + 2a = 5$ to get $a = 5.5$; then $Q$'s $y$-coordinate is $9.5$ and $\\frac{3 + 9.5}{2} = 6.25$.\n* Choice D ($12$): is the $y$-coordinate of $Q$, an endpoint, not of the midpoint.\n\n**Test Day Takeaway:** Use the coordinate you know to find the constant, then substitute it into the other coordinate and average again. Keep the endpoint and the midpoint separate.",
      skills: ["coordinate-geometry"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "In triangle $ABC$, point $D$ lies on $\\overline{AB}$ and point $E$ lies on $\\overline{AC}$, and $\\overline{DE}$ is parallel to $\\overline{BC}$. If $DE = 36$, $BC = 63$, and $AD = 24$, what is the length of $\\overline{DB}$?",
      correctAnswer: "18",
      explanation: "**SAT Pattern: Similar Triangles Proportion**\n\n**The correct answer is $18$.**\n\n**The Fast Way (~40s):** Triangle $ADE$ is similar to triangle $ABC$ with ratio $\\frac{36}{63} = \\frac{4}{7}$, so $AB = \\frac{7}{4}(24) = 42$ and $DB = 42 - 24 = 18$.\n\n**The Full Solution:**\nStep 1: Since $\\overline{DE} \\parallel \\overline{BC}$, angle $ADE$ equals angle $ABC$ and angle $AED$ equals angle $ACB$ (corresponding angles), and the triangles share angle $A$. So triangle $ADE$ is similar to triangle $ABC$.\nStep 2: Corresponding sides are proportional: $\\frac{AD}{AB} = \\frac{DE}{BC}$, so $\\frac{24}{AB} = \\frac{36}{63}$, which gives $AB = \\frac{24 \\cdot 63}{36} = 42$.\nStep 3: $D$ lies on $\\overline{AB}$, so $DB = AB - AD = 42 - 24 = 18$. Check: $\\frac{24}{42} = \\frac{4}{7}$ and $\\frac{36}{63} = \\frac{4}{7}$ ✓\n\n**Common Mistakes:**\n* $42$: reports the whole side $AB$ instead of the piece $DB$.\n* $13.71$: sets up the proportion upside down, $\\frac{24}{x} = \\frac{63}{36}$, giving $x = \\frac{24 \\cdot 36}{63} \\approx 13.71$.\n* $27$: subtracts the parallel sides, $63 - 36$, as if $DB$ were the difference between them.\n\n**Test Day Takeaway:** A segment parallel to one side of a triangle cuts off a smaller similar triangle. Match small to large in every ratio, then subtract to get the leftover piece.",
      skills: ["similar-triangles"]
    },
    {
      id: 19,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "$|x - 9| = 2x - 6$\nWhat value of $x$ is the solution to the given equation?",
      choices: [
        // distractor: solves x - 9 = 2x - 6 and keeps x = -3 without checking it; there the left side is 12 but the right side is -12
        { id: "A", text: "$-3$" },
        // distractor: writes the second case as 9 - x = 2x + 6, changing the sign of the -6 as well, to get x = 1
        { id: "B", text: "$1$" },
        // distractor: drops the -6 from the right side, solving 9 - x = 2x to get x = 3
        { id: "C", text: "$3$" },
        { id: "D", text: "$5$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** The two cases give $x = -3$ and $x = 5$, but the right side must be nonnegative. At $x = -3$, $2x - 6 = -12 < 0$, so only $x = 5$ works.\n\n**The Full Solution:**\nStep 1: Case 1, $x - 9 = 2x - 6$: subtracting $x$ and adding $6$ gives $-3 = x$.\nStep 2: Case 2, $x - 9 = -(2x - 6)$: this is $x - 9 = -2x + 6$, so $3x = 15$ and $x = 5$.\nStep 3: An absolute value can't be negative, so test each candidate. At $x = -3$: $|-3 - 9| = 12$ but $2(-3) - 6 = -12$, so it is extraneous. Check: at $x = 5$, $|5 - 9| = 4$ and $2(5) - 6 = 4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): comes from the first case but is extraneous; it makes the right side negative.\n* Choice B ($1$): mishandles the second case, writing $9 - x = 2x + 6$; flipping the left side already accounts for the negative, so the $-6$ should not change sign too.\n* Choice C ($3$): loses the $-6$, solving $9 - x = 2x$.\n\n**Test Day Takeaway:** When a variable appears outside the absolute value, solve both cases and then check every candidate in the original equation; any value that makes the non-absolute side negative is extraneous.",
      skills: ["combining-like-terms"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "A solid right circular cylinder has a radius of $0.6$ meter and a height of $3$ meters. A cylindrical hole with a radius of $0.2$ meter is drilled through its center from top to bottom. What is the volume, in cubic meters, of the remaining solid?",
      choices: [
        // distractor: computes the volume of the hole alone, pi times 0.2 squared times 3
        { id: "A", text: "$0.12\\pi$" },
        // distractor: subtracts the radii before squaring, using pi times (0.6 - 0.2) squared times 3 = 0.48 pi
        { id: "B", text: "$0.48\\pi$" },
        { id: "C", text: "$0.96\\pi$" },
        // distractor: ignores the hole and reports the volume of the solid cylinder, pi times 0.6 squared times 3
        { id: "D", text: "$1.08\\pi$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Cylinder Volume**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Subtract the hole from the cylinder: $\\pi(0.6)^{2}(3) - \\pi(0.2)^{2}(3) = 1.08\\pi - 0.12\\pi = 0.96\\pi$.\n\n**The Full Solution:**\nStep 1: The volume of a cylinder is $\\pi r^{2}h$. The full cylinder has volume $\\pi(0.6)^{2}(3) = \\pi(0.36)(3) = 1.08\\pi$ cubic meters.\nStep 2: The hole is a cylinder with the same height: $\\pi(0.2)^{2}(3) = \\pi(0.04)(3) = 0.12\\pi$ cubic meters.\nStep 3: The remaining solid has volume $1.08\\pi - 0.12\\pi = 0.96\\pi$ cubic meters. Check: factoring gives $3\\pi(0.6^{2} - 0.2^{2}) = 3\\pi(0.36 - 0.04) = 3\\pi(0.32) = 0.96\\pi$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.12\\pi$): is the volume of the hole, the part that was removed.\n* Choice B ($0.48\\pi$): subtracts the radii first, $\\pi(0.6 - 0.2)^{2}(3) = 0.48\\pi$. Areas must be subtracted, not radii.\n* Choice D ($1.08\\pi$): is the volume of the cylinder before the hole is drilled.\n\n**Test Day Takeaway:** For a solid with a hole, compute the outer volume and the hole's volume separately and subtract. Never subtract radii before squaring.",
      skills: ["volume-prism"]
    },
    {
      id: 21,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "For the linear function $f$, the table shows four values of $x$ and their corresponding values of $f(x)$. If $f(2a) = 3$, what is the value of $a$?",
      questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$2$", "$43$"], ["$5$", "$31$"], ["$8$", "$19$"], ["$11$", "$7$"]] },
      correctAnswer: "6",
      explanation: "**SAT Pattern: Solve $f(a) = c$**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~40s):** The slope is $\\frac{31 - 43}{5 - 2} = -4$, so $f(x) = -4x + 51$. Then $f(x) = 3$ when $x = 12$, so $2a = 12$ and $a = 6$.\n\n**The Full Solution:**\nStep 1: Find the slope from two rows: $\\frac{31 - 43}{5 - 2} = \\frac{-12}{3} = -4$. Using $(2, 43)$: $43 = -4(2) + b$, so $b = 51$ and $f(x) = -4x + 51$.\nStep 2: Set $f(2a) = 3$: $-4(2a) + 51 = 3$, so $-8a = -48$.\nStep 3: Divide: $a = 6$. Check: $f(12) = -4(12) + 51 = 3$, and continuing the table, $f(11) = 7$ drops by $4$ to $f(12) = 3$ ✓\n\n**Common Mistakes:**\n* $12$: solves $f(x) = 3$ for $x$ and reports $x = 12$, forgetting that the input is $2a$, not $a$.\n* $24$: multiplies by $2$ instead of dividing, writing $a = 2(12)$.\n* $-4$: uses a slope of $+4$, giving $f(x) = 4x + 35$ and $8a + 35 = 3$.\n\n**Test Day Takeaway:** When the input is an expression like $2a$, first find which input gives the target output, then solve the expression for the variable.",
      skills: ["function-notation"]
    },
    {
      id: 22,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "Three numbers, $a$, $b$, and $c$, have a sum of $480$. The value of $b$ is $\\frac{9}{4}$ times the value of $a$, and the value of $c$ is $\\frac{11}{9}$ times the value of $b$. What is the value of $c - a$?",
      choices: [
        // distractor: reports one part, 480 divided by 24 = 20, instead of the difference it produces
        { id: "A", text: "$20$" },
        // distractor: reports the value of a, 80, rather than c - a
        { id: "B", text: "$80$" },
        // distractor: computes b - a, 180 - 80, instead of c - a
        { id: "C", text: "$100$" },
        { id: "D", text: "$140$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Sum of Parts Ratio**\n\n**Choice D is correct.**\n\n**The Fast Way (~40s):** If $a = 4u$, then $b = 9u$ and $c = 11u$. The sum is $24u = 480$, so $u = 20$, and $c - a = 7u = 140$.\n\n**The Full Solution:**\nStep 1: Write $b$ and $c$ in terms of $a$: $b = \\frac{9}{4}a$ and $c = \\frac{11}{9}\\left(\\frac{9}{4}a\\right) = \\frac{11}{4}a$.\nStep 2: Use the sum: $a + \\frac{9}{4}a + \\frac{11}{4}a = \\frac{24}{4}a = 6a = 480$, so $a = 80$.\nStep 3: Then $c = \\frac{11}{4}(80) = 220$, and $c - a = 220 - 80 = 140$. Check: $b = \\frac{9}{4}(80) = 180$, $\\frac{11}{9}(180) = 220$, and $80 + 180 + 220 = 480$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): is the size of one part in the ratio $4 : 9 : 11$, not the difference between $c$ and $a$.\n* Choice B ($80$): is the value of $a$; the question asks how much greater $c$ is.\n* Choice C ($100$): computes $b - a = 180 - 80$ instead of $c - a$.\n\n**Test Day Takeaway:** Chain the multipliers into one ratio ($4 : 9 : 11$), divide the total by the sum of the parts, and then answer exactly the combination the question asks for.",
      skills: ["word-problem-to-equation"]
    }
  ]
};

export default practiceTest2M2Easy;
