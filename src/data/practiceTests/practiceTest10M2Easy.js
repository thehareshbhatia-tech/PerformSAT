// Practice Test 10 — Math Module 2 Easy variant (22 questions)
// v2 freshness rebuild (2026-09-07): every slot re-patterned and re-authored against the seen-corpus gate — docs/TEST_RECREATION_V2_SPEC.md
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Official-calibration recreation (2026-09-01): every item re-authored fresh
// against the CB register (docs/TEST_RECREATION_SPEC.md); slot metadata
// (id/type/difficulty/band/skills/pattern) frozen from the prior build.
// 4 diagram items: Q4 dataTable, Q13 rightTriangle, Q14 scatterplot,
// Q15 twoWayTable. Numeric MC choices sorted ascending.

export const practiceTest10M2Easy = {
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
      question: "The graph of the linear function $f$ is shown, where $y = f(x)$. Which equation defines $f$?",
      diagram: { type: "linearGraph", params: { slope: 2, yIntercept: 4, xRange: [0, 10], yRange: [0, 28], xTickInterval: 2, yTickInterval: 4, gridInterval: 2 } },
      choices: [
        // distractor: swaps the slope and the y-intercept read from the graph
        { id: "A", text: "$f(x) = 4x + 2$" },
        { id: "B", text: "$f(x) = 2x + 4$" },
        // distractor: keeps the slope but flips the sign of the y-intercept
        { id: "C", text: "$f(x) = 2x - 4$" },
        // distractor: divides run by rise instead of rise by run
        { id: "D", text: "$f(x) = \\frac{1}{2}x + 4$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Slope-Intercept Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The line crosses the $y$-axis at $4$, so $b = 4$; it rises from $4$ to $24$ as $x$ goes from $0$ to $10$, so $m = \\frac{20}{10} = 2$.\n\n**The Full Solution:**\nStep 1: In $f(x) = mx + b$, the constant $b$ is the value of $f(x)$ when $x = 0$. The graph passes through $(0, 4)$, so $b = 4$.\nStep 2: The slope is rise over run. Between $(0, 4)$ and $(10, 24)$ the rise is $24 - 4 = 20$ and the run is $10 - 0 = 10$, so $m = \\frac{20}{10} = 2$.\nStep 3: So $f(x) = 2x + 4$. Check another point on the graph: at $x = 6$, $2(6) + 4 = 16$, and the line passes through $(6, 16)$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($f(x) = 4x + 2$): swaps the two numbers, using $4$ as the slope and $2$ as the $y$-intercept. That line would cross the $y$-axis at $2$, not $4$.\n* Choice C ($f(x) = 2x - 4$): reads the slope correctly but flips the sign of the $y$-intercept. That line would cross the $y$-axis below the $x$-axis, which the graph never does.\n* Choice D ($f(x) = \\frac{1}{2}x + 4$): divides the run by the rise, $\\frac{10}{20}$, instead of the rise by the run. That line would rise only $5$ units over the whole window.\n\n**Test Day Takeaway:** Read the $y$-intercept first, where the line crosses the $y$-axis, then find the slope from two points on gridlines. The axes use different scales, so count by the tick labels, not by squares.",
      skills: ["slope-intercept-form"]
    },
    {
      id: 2,
      type: "multiple-choice",
      difficulty: "easy",
      band: 2,
      question: "$11x - 4x = 63$\nWhat value of $x$ is the solution to the given equation?",
      choices: [
        // distractor: adds the coefficients instead of subtracting them, solving 15x = 63 to get 63/15 = 21/5
        { id: "A", text: "$\\frac{21}{5}$" },
        { id: "B", text: "$9$" },
        // distractor: subtracts the combined coefficient 7 from 63 instead of dividing by it
        { id: "C", text: "$56$" },
        // distractor: multiplies 63 by 7 instead of dividing by 7
        { id: "D", text: "$441$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Combining like terms gives $7x = 63$, so $x = 9$.\n\n**The Full Solution:**\nStep 1: Combine the like terms on the left side: $11x - 4x = 7x$.\nStep 2: The equation becomes $7x = 63$.\nStep 3: Divide each side by $7$: $x = 9$. Check: $11(9) - 4(9) = 99 - 36 = 63$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{21}{5}$): adds the coefficients, $11 + 4 = 15$, and solves $15x = 63$. The $4x$ is subtracted, so the coefficients must be subtracted.\n* Choice C ($56$): subtracts $7$ from $63$. The $7$ multiplies $x$, so it is undone by dividing.\n* Choice D ($441$): multiplies $63$ by $7$, which moves in the wrong direction.\n\n**Test Day Takeaway:** Combine like terms first so the equation has one $x$-term, then undo the multiplication by dividing.",
      skills: ["combining-like-terms"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "A gym charges a one-time fee of \\$45 plus \\$30 per month. Lena paid \\$315 in total for $m$ months of membership. Which equation represents this situation?",
      choices: [
        // distractor: swaps the monthly charge with the one-time fee
        { id: "A", text: "$45m + 30 = 315$" },
        // distractor: adds the one-time fee to m before multiplying, charging the fee once per month
        { id: "B", text: "$30(m + 45) = 315$" },
        // distractor: subtracts the one-time fee instead of adding it
        { id: "C", text: "$30m - 45 = 315$" },
        { id: "D", text: "$30m + 45 = 315$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Word-to-Expression Translation**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The monthly charge multiplies the number of months, and the one-time fee is added once: $30m + 45 = 315$.\n\n**The Full Solution:**\nStep 1: Lena pays \\$30 for each of $m$ months, which is $30m$ dollars.\nStep 2: The one-time fee of \\$45 is added once, so her total cost is $30m + 45$ dollars.\nStep 3: Her total was \\$315, so $30m + 45 = 315$. Check: this gives $30m = 270$, so $m = 9$ months, and $30(9) + 45 = 315$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($45m + 30 = 315$): swaps the two dollar amounts, multiplying the number of months by the one-time fee.\n* Choice B ($30(m + 45) = 315$): adds the fee to $m$ before multiplying, which charges \\$30 for each of $45$ extra months instead of charging \\$45 once.\n* Choice C ($30m - 45 = 315$): subtracts the fee, as if it were a discount rather than a charge.\n\n**Test Day Takeaway:** In a \"fee plus rate\" situation, the rate multiplies the variable and the one-time fee stands alone as a constant that is added.",
      skills: ["word-problem-to-equation"]
    },
    // ============================================================
    // Q4-Q16: Medium core (band 4-5)
    // ============================================================
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "$12x + 8y = 60$\n$9x + 6y = 54$\nHow many solutions does the given system of equations have?",
      choices: [
        { id: "A", text: "Zero" },
        // distractor: assumes two different linear equations always intersect at one point
        { id: "B", text: "Exactly one" },
        // distractor: counts one solution per equation rather than solving the system
        { id: "C", text: "Exactly two" },
        // distractor: notices the left sides are proportional but never compares the constants
        { id: "D", text: "Infinitely many" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Dividing the first equation by $4$ and the second by $3$ gives $3x + 2y = 15$ and $3x + 2y = 18$; the same left side cannot equal two different numbers, so there are no solutions.\n\n**The Full Solution:**\nStep 1: Divide each side of the first equation by $4$: $3x + 2y = 15$.\nStep 2: Divide each side of the second equation by $3$: $3x + 2y = 18$.\nStep 3: The expression $3x + 2y$ cannot equal both $15$ and $18$, so no pair $(x, y)$ satisfies both equations. Check with slopes: both lines have slope $-\\frac{3}{2}$, but their $y$-intercepts are $7.5$ and $9$, so the lines are parallel and distinct ✓\n\n**Why the wrong answers are tempting:**\n* Choice B (Exactly one): assumes that two different linear equations always cross. Lines with the same slope never cross unless they are the same line.\n* Choice C (Exactly two): counts one solution for each equation. Two lines can meet at zero points, one point, or infinitely many points, never exactly two.\n* Choice D (Infinitely many): notices that the $x$- and $y$-coefficients are in the ratio $4:3$ but does not check the constants; $60$ and $54$ are not in that ratio.\n\n**Test Day Takeaway:** Scale both equations to the same left side. Different constants mean no solution; the same constants mean infinitely many solutions.",
      skills: ["system-solution-types"]
    },
    {
      id: 5,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "$5x + 3y = 7$\n$20x + cy = 28$\nIn the given system of equations, $c$ is a constant. For what value of $c$ does the system have infinitely many solutions?",
      correctAnswer: "12",
      explanation: "**SAT Pattern: System Equivalence Check**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~15s):** The second equation must be the first multiplied by $4$, since $5(4) = 20$ and $7(4) = 28$, so $c = 3(4) = 12$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has infinitely many solutions only when one equation is a nonzero multiple of the other.\nStep 2: Comparing the $x$-coefficients, $20 = 4(5)$, so the multiplier is $4$; the constants agree, since $4(7) = 28$.\nStep 3: The $y$-coefficient must also be multiplied by $4$: $c = 4(3) = 12$. Check with the pair $(2, -1)$, which satisfies $5(2) + 3(-1) = 7$: the second equation gives $20(2) + 12(-1) = 40 - 12 = 28$ ✓\n\n**Common Mistakes:**\n* $4$: reports the multiplier instead of $4$ times the $y$-coefficient.\n* $3$: leaves the $y$-coefficient unchanged, as if only the $x$-term were scaled.\n* $60$: multiplies $3$ by the coefficient $20$ instead of by the multiplier $4$.\n\n**Test Day Takeaway:** For infinitely many solutions, find the multiplier from one pair of matching terms, then apply that same multiplier to every term.",
      skills: ["system-solution-types", "infinite-solutions-condition"]
    },
    {
      id: 6,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In right triangle $PQR$ shown, $\\tan P = \\frac{8}{15}$. What is the perimeter of triangle $PQR$?",
      diagram: { type: "rightTriangle", params: { vertices: [[0, 0], [15, 0], [0, 8]], labels: ["R", "P", "Q"], sideLabels: ["15", "", ""], rightAngleVertex: 0 } },
      choices: [
        // distractor: adds only the two legs, 15 + 8, and leaves out the hypotenuse
        { id: "A", text: "$23$" },
        // distractor: adds QR and PQ, 8 + 17, but leaves out the given side PR = 15
        { id: "B", text: "$25$" },
        { id: "C", text: "$40$" },
        // distractor: takes the hypotenuse to be the sum of the legs, 15 + 8 = 23, giving 15 + 8 + 23 = 46
        { id: "D", text: "$46$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Right Triangle Trigonometry with Perimeter**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $\\tan P = \\frac{QR}{PR}$, so $QR = \\frac{8}{15}(15) = 8$; the hypotenuse is $\\sqrt{8^{2} + 15^{2}} = 17$, and the perimeter is $15 + 8 + 17 = 40$.\n\n**The Full Solution:**\nStep 1: The right angle is at $R$. For angle $P$, the opposite side is $QR$ and the adjacent side is $PR = 15$, so $\\frac{QR}{15} = \\frac{8}{15}$ and $QR = 8$.\nStep 2: The hypotenuse is $PQ = \\sqrt{15^{2} + 8^{2}} = \\sqrt{289} = 17$.\nStep 3: The perimeter is $15 + 8 + 17 = 40$. Check: $8^{2} + 15^{2} = 64 + 225 = 289 = 17^{2}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($23$): adds only the two legs and leaves out the hypotenuse $PQ = 17$.\n* Choice B ($25$): adds $QR$ and $PQ$ but leaves out the side $PR = 15$ shown in the figure.\n* Choice D ($46$): takes the hypotenuse to be $15 + 8 = 23$ instead of using the Pythagorean theorem.\n\n**Test Day Takeaway:** Tangent is opposite over adjacent; use it to find the missing leg, then the Pythagorean theorem for the hypotenuse.",
      skills: ["soh-cah-toa"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "$y = 3x - 7$\n$5x + 2y = 41$\nWhich equation results from substituting the expression for $y$ from the first equation into the second equation?",
      choices: [
        { id: "A", text: "$5x + 2(3x - 7) = 41$" },
        // distractor: multiplies only the 3x term by 2 and leaves the -7 unmultiplied
        { id: "B", text: "$5x + 6x - 7 = 41$" },
        // distractor: replaces x instead of y in the second equation
        { id: "C", text: "$5(3x - 7) + 2x = 41$" },
        // distractor: changes the sign of the constant, using 3x + 7 in place of 3x - 7
        { id: "D", text: "$5x + 2(3x + 7) = 41$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Replace $y$ in $5x + 2y = 41$ with the whole expression $3x - 7$, keeping it in parentheses: $5x + 2(3x - 7) = 41$.\n\n**The Full Solution:**\nStep 1: The first equation gives $y$ in terms of $x$: $y = 3x - 7$.\nStep 2: In the second equation, $y$ is multiplied by $2$, so the entire expression must be multiplied by $2$: $5x + 2(3x - 7) = 41$.\nStep 3: This equation has only $x$ in it, as substitution requires. Check by solving it: $5x + 6x - 14 = 41$, so $11x = 55$ and $x = 5$; then $y = 3(5) - 7 = 8$, and $5(5) + 2(8) = 41$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($5x + 6x - 7 = 41$): multiplies only the $3x$ by $2$. The $2$ multiplies all of $3x - 7$, so the constant becomes $-14$, not $-7$.\n* Choice C ($5(3x - 7) + 2x = 41$): substitutes for $x$ instead of $y$, putting the expression in the wrong place.\n* Choice D ($5x + 2(3x + 7) = 41$): changes $-7$ to $+7$ while copying the expression.\n\n**Test Day Takeaway:** When you substitute an expression, put it in parentheses so that its coefficient multiplies every term inside.",
      skills: ["substitution-method"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A box contains $18$ red pencils and some blue pencils. If one of these pencils is selected at random, the probability of selecting a red pencil is $0.4$. How many blue pencils are in the box?",
      choices: [
        // distractor: multiplies 18 by 0.4 instead of dividing
        { id: "A", text: "$7.2$" },
        // distractor: divides 18 by 0.6 to get a total of 30, then subtracts 18
        { id: "B", text: "$12$" },
        { id: "C", text: "$27$" },
        // distractor: reports the total number of pencils instead of the number of blue pencils
        { id: "D", text: "$45$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Basic Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Red pencils are $0.4$ of the total, so the total is $\\frac{18}{0.4} = 45$, and $45 - 18 = 27$ pencils are blue.\n\n**The Full Solution:**\nStep 1: Let $t$ be the total number of pencils. The probability of selecting a red pencil is $\\frac{18}{t}$, so $\\frac{18}{t} = 0.4$.\nStep 2: Solve for $t$: $t = \\frac{18}{0.4} = 45$.\nStep 3: The blue pencils are the rest: $45 - 18 = 27$. Check: $\\frac{18}{18 + 27} = \\frac{18}{45} = 0.4$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($7.2$): multiplies $18$ by $0.4$. A number of pencils must be a whole number, which is a sign of the error.\n* Choice B ($12$): divides $18$ by $0.6$, the probability of a blue pencil, giving $30$, then subtracts $18$. The $18$ red pencils go with the red probability, $0.4$.\n* Choice D ($45$): finds the total number of pencils and stops, but the question asks for the blue pencils only.\n\n**Test Day Takeaway:** In a reverse probability question, use the known count and its probability to find the total, then subtract to find the count that was asked for.",
      skills: ["probability-basics"]
    },
    {
      id: 9,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$9^{2x} = 3^{x + 12}$\nWhat is the solution to the given equation?",
      choices: [
        // distractor: rewrites 9 as 3 cubed instead of 3 squared, solving 6x = x + 12
        { id: "A", text: "$\\frac{12}{5}$" },
        { id: "B", text: "$4$" },
        // distractor: treats the base 9 as though it were 3 and keeps the exponent 2x, solving 2x = x + 12
        { id: "C", text: "$12$" },
        // distractor: rewrites the left side correctly but also multiplies the right exponent by 3, solving 4x = 3(x + 12)
        { id: "D", text: "$36$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Exponential Equation with Common Base**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Since $9 = 3^{2}$, the left side is $3^{4x}$, so $4x = x + 12$ and $x = 4$.\n\n**The Full Solution:**\nStep 1: Write $9$ as a power of $3$: $9^{2x} = (3^{2})^{2x} = 3^{4x}$.\nStep 2: The equation is now $3^{4x} = 3^{x + 12}$. Powers of the same base are equal only when the exponents are equal, so $4x = x + 12$.\nStep 3: Subtract $x$ from each side: $3x = 12$, so $x = 4$. Check: $9^{8} = (3^{2})^{8} = 3^{16}$, and $3^{4 + 12} = 3^{16}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{12}{5}$): rewrites $9$ as $3^{3}$, solving $6x = x + 12$. But $3^{3} = 27$, not $9$.\n* Choice C ($12$): sets the exponents equal without changing the base, solving $2x = x + 12$. The exponents can be compared only after both sides have the same base.\n* Choice D ($36$): rewrites the left side as $3^{4x}$ but also multiplies the right exponent by $3$, solving $4x = 3(x + 12)$. The right side already has base $3$ and needs no change.\n\n**Test Day Takeaway:** Rewrite both sides with the same base, multiplying exponents when you raise a power to a power, and then set the exponents equal.",
      skills: ["exponential-functions"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "In the $xy$-plane, line $j$ is perpendicular to the line with equation $4x + 10y = 35$. What is the slope of line $j$?",
      choices: [
        // distractor: takes the reciprocal of the given slope but keeps its negative sign
        { id: "A", text: "$-\\frac{5}{2}$" },
        // distractor: reports the slope of the given line itself
        { id: "B", text: "$-\\frac{2}{5}$" },
        // distractor: changes the sign of the given slope without taking the reciprocal
        { id: "C", text: "$\\frac{2}{5}$" },
        { id: "D", text: "$\\frac{5}{2}$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The given line has slope $-\\frac{4}{10} = -\\frac{2}{5}$, and the negative reciprocal of $-\\frac{2}{5}$ is $\\frac{5}{2}$.\n\n**The Full Solution:**\nStep 1: Solve the given equation for $y$: $10y = -4x + 35$, so $y = -\\frac{2}{5}x + \\frac{7}{2}$.\nStep 2: The slope of the given line is $-\\frac{2}{5}$.\nStep 3: Perpendicular lines have slopes whose product is $-1$, so the slope of line $j$ is the negative reciprocal, $\\frac{5}{2}$. Check: $\\left(-\\frac{2}{5}\\right)\\left(\\frac{5}{2}\\right) = -1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{5}{2}$): takes the reciprocal but keeps the negative sign. The product $\\left(-\\frac{2}{5}\\right)\\left(-\\frac{5}{2}\\right)$ is $1$, not $-1$.\n* Choice B ($-\\frac{2}{5}$): is the slope of the given line, which would make line $j$ parallel to it, not perpendicular.\n* Choice C ($\\frac{2}{5}$): changes the sign but skips the reciprocal.\n\n**Test Day Takeaway:** For a line written as $Ax + By = C$, the slope is $-\\frac{A}{B}$; a perpendicular line has the negative reciprocal of that slope.",
      skills: ["perpendicular-negative-reciprocal"]
    },
    {
      id: 11,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The line shown in the $xy$-plane is parallel to the graph of $3x + ky = 24$, where $k$ is a constant. What is the value of $k$?",
      diagram: { type: "linearGraph", params: { slope: -0.75, yIntercept: 3, xRange: [-2, 8], yRange: [-4, 6], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 3], [4, 0]] } },
      correctAnswer: "4",
      explanation: "**SAT Pattern: Parallel Lines and Standard Form**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~25s):** The line shown passes through $(0, 3)$ and $(4, 0)$, so its slope is $-\\frac{3}{4}$. The graph of $3x + ky = 24$ has slope $-\\frac{3}{k}$, so $k = 4$.\n\n**The Full Solution:**\nStep 1: Read two points on the line shown: $(0, 3)$ and $(4, 0)$. Its slope is $\\frac{0 - 3}{4 - 0} = -\\frac{3}{4}$.\nStep 2: Solve $3x + ky = 24$ for $y$: $y = -\\frac{3}{k}x + \\frac{24}{k}$, so its slope is $-\\frac{3}{k}$.\nStep 3: Parallel lines have equal slopes: $-\\frac{3}{k} = -\\frac{3}{4}$, so $k = 4$. Check: $3x + 4y = 24$ is $y = -\\frac{3}{4}x + 6$, which has slope $-\\frac{3}{4}$ and a different $y$-intercept from the line shown ✓\n\n**Common Mistakes:**\n* $8$: substitutes the point $(0, 3)$ into $3x + ky = 24$, but that point is on the line shown, not on the parallel line.\n* $-4$: drops the negative sign when writing the slope of $3x + ky = 24$, solving $\\frac{3}{k} = -\\frac{3}{4}$.\n* $\\frac{9}{4}$: writes the slope of $3x + ky = 24$ as $-\\frac{k}{3}$ instead of $-\\frac{3}{k}$.\n\n**Test Day Takeaway:** The line $Ax + By = C$ has slope $-\\frac{A}{B}$; parallel lines share that slope, not their points.",
      skills: ["writing-parallel-equation"]
    },
    {
      id: 12,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$\\frac{5w - 3}{6} = \\frac{w + 9}{3}$\nWhich of the following equations has the same solution as the given equation?",
      choices: [
        // distractor: cancels both denominators as if 6 and 3 were the same number
        { id: "A", text: "$5w - 3 = w + 9$" },
        // distractor: multiplies only the w term of the right side by 2 and leaves the 9 alone
        { id: "B", text: "$5w - 3 = 2w + 9$" },
        // distractor: multiplies each side by its own denominator instead of by a common one
        { id: "C", text: "$6(5w - 3) = 3(w + 9)$" },
        { id: "D", text: "$5w - 3 = 2(w + 9)$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Multiplying each side by $6$ clears both fractions: $5w - 3 = 2(w + 9)$.\n\n**The Full Solution:**\nStep 1: The least common denominator of $6$ and $3$ is $6$, so multiply each side of the equation by $6$.\nStep 2: On the left, $6 \\cdot \\frac{5w - 3}{6} = 5w - 3$. On the right, $6 \\cdot \\frac{w + 9}{3} = 2(w + 9)$.\nStep 3: The result is $5w - 3 = 2(w + 9)$. Check by solving both: this equation gives $5w - 3 = 2w + 18$, so $w = 7$, and in the given equation $\\frac{5(7) - 3}{6} = \\frac{32}{6} = \\frac{16}{3}$ and $\\frac{7 + 9}{3} = \\frac{16}{3}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($5w - 3 = w + 9$): drops both denominators, as if $6$ and $3$ were equal. Its solution is $w = 3$.\n* Choice B ($5w - 3 = 2w + 9$): multiplies only the $w$ on the right by $2$. Its solution is $w = 4$.\n* Choice C ($6(5w - 3) = 3(w + 9)$): multiplies each side by its own denominator instead of multiplying both sides by the same number. Its solution is $w = \\frac{5}{3}$.\n\n**Test Day Takeaway:** Clear fractions by multiplying both sides by one common denominator, and distribute to every term of each numerator.",
      skills: ["solving-equations"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "$x^{2} + y^{2} - 10x + 24y + 144 = 0$\nThe graph of the given equation in the $xy$-plane is a circle. What is the length of the circle's radius?",
      choices: [
        { id: "A", text: "$5$" },
        // distractor: reads the 12 inside (y + 12)^2 as the radius
        { id: "B", text: "$12$" },
        // distractor: completes both squares but does not account for the 144 on the left side, giving the square root of 169
        { id: "C", text: "$13$" },
        // distractor: reports r squared instead of r
        { id: "D", text: "$25$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Circle in General Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Completing both squares gives $(x - 5)^{2} + (y + 12)^{2} = 25 + 144 - 144 = 25$, so the radius is $\\sqrt{25} = 5$.\n\n**The Full Solution:**\nStep 1: Group the terms and move the constant: $(x^{2} - 10x) + (y^{2} + 24y) = -144$.\nStep 2: Complete each square. Half of $-10$ is $-5$, and $(-5)^{2} = 25$; half of $24$ is $12$, and $12^{2} = 144$. Add both to each side: $(x - 5)^{2} + (y + 12)^{2} = -144 + 25 + 144 = 25$.\nStep 3: The equation has the form $(x - h)^{2} + (y - k)^{2} = r^{2}$ with $r^{2} = 25$, so $r = 5$. Check with the point $(10, -12)$, which is $5$ units right of the center $(5, -12)$: $100 + 144 - 100 - 288 + 144 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): takes the $12$ from $(y + 12)^{2}$ as the radius. That number is part of the center, $(5, -12)$.\n* Choice C ($13$): adds $25 + 144 = 169$ to the right side but leaves the original $144$ out, so it takes $\\sqrt{169}$ instead of $\\sqrt{25}$.\n* Choice D ($25$): reports $r^{2}$ instead of $r$.\n\n**Test Day Takeaway:** Move the constant to the right side before completing the square, add the same amounts to both sides, and take the square root of the final constant.",
      skills: ["circle-equation", "completing-square-circles"]
    },
    {
      id: 14,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The six numbers in a data set are $9$, $12$, $15$, $20$, $24$, and $k$. The median of the data set is $16$. What is the value of $k$?",
      correctAnswer: "17",
      explanation: "**SAT Pattern: Median Calculation**\n\n**The correct answer is $17$.**\n\n**The Fast Way (~25s):** A median of $16$ lies between $15$ and $20$, so $k$ is one of the two middle values with $15$: $\\frac{15 + k}{2} = 16$, so $k = 17$.\n\n**The Full Solution:**\nStep 1: A data set with six values has a median equal to the mean of its third and fourth values when the values are in order.\nStep 2: Without $k$, the values in order are $9$, $12$, $15$, $20$, $24$. A median of $16$ is greater than $15$ and less than $20$, so $k$ must lie between $15$ and $20$, making the ordered list $9$, $12$, $15$, $k$, $20$, $24$.\nStep 3: Then $\\frac{15 + k}{2} = 16$, so $15 + k = 32$ and $k = 17$. Check: the ordered list is $9$, $12$, $15$, $17$, $20$, $24$, and $\\frac{15 + 17}{2} = 16$ ✓\n\n**Common Mistakes:**\n* $16$: sets the mean of the six numbers equal to $16$, solving $\\frac{80 + k}{6} = 16$, which finds the mean, not the median.\n* $12$: pairs $k$ with $20$ instead of $15$, solving $\\frac{k + 20}{2} = 16$; with $k = 12$, the median would be $13.5$.\n* $32$: stops at $15 + k = 32$ and reports the sum.\n\n**Test Day Takeaway:** For a median with an unknown value, first decide where the unknown must fall in the ordered list, then average the two middle values.",
      skills: ["find-median"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The table shows the number of books in a classroom library, by type and by cover. One of these books will be selected at random. What is the probability of selecting a nonfiction book?",
      questionTable: { headers: ["Type", "Hardcover", "Paperback"], rows: [["Fiction", "$48$", "$27$"], ["Nonfiction", "$42$", "$63$"]] },
      choices: [
        // distractor: counts only the nonfiction paperback cell instead of the whole nonfiction row
        { id: "A", text: "$\\frac{63}{180}$" },
        // distractor: uses the hardcover column total, 48 + 42 = 90, instead of the nonfiction row total
        { id: "B", text: "$\\frac{90}{180}$" },
        { id: "C", text: "$\\frac{105}{180}$" },
        // distractor: divides the nonfiction paperback cell by the nonfiction row total, finding the probability that a nonfiction book is a paperback
        { id: "D", text: "$\\frac{63}{105}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Marginal Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** There are $42 + 63 = 105$ nonfiction books out of $48 + 27 + 42 + 63 = 180$ books, so the probability is $\\frac{105}{180}$.\n\n**The Full Solution:**\nStep 1: Find the total number of books: $48 + 27 + 42 + 63 = 180$.\nStep 2: Find the number of nonfiction books by adding the nonfiction row: $42 + 63 = 105$.\nStep 3: The probability is $\\frac{105}{180}$, which simplifies to $\\frac{7}{12}$. Check: the fiction row has $48 + 27 = 75$ books, and $105 + 75 = 180$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{63}{180}$): counts only the nonfiction paperbacks. Nonfiction hardcovers are nonfiction books too.\n* Choice B ($\\frac{90}{180}$): adds down the hardcover column, $48 + 42 = 90$, instead of across the nonfiction row.\n* Choice D ($\\frac{63}{105}$): divides by the nonfiction total, which is the probability that a book is a paperback given that it is nonfiction. The book is selected from all $180$.\n\n**Test Day Takeaway:** For a probability with no \"given\" condition, the denominator is the grand total; add the whole row or column for the numerator.",
      skills: ["probability-basics"]
    },
    {
      id: 16,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The table shows the density of each of four rock samples. What is the density of the granite sample, in kilograms per cubic meter? ($1$ kilogram $= 1{,}000$ grams and $1$ meter $= 100$ centimeters)",
      questionTable: { headers: ["Sample", "Density (grams per cubic centimeter)"], rows: [["Basalt", "$2.9$"], ["Granite", "$2.7$"], ["Limestone", "$2.4$"], ["Quartzite", "$2.6$"]] },
      choices: [
        // distractor: converts grams to kilograms but leaves the volume in cubic centimeters
        { id: "A", text: "$0.0027$" },
        // distractor: multiplies by 100 once instead of by 100 cubed
        { id: "B", text: "$0.27$" },
        // distractor: squares the length conversion instead of cubing it
        { id: "C", text: "$27$" },
        { id: "D", text: "$2{,}700$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** A cubic meter is $100^{3} = 1{,}000{,}000$ cubic centimeters, so $2.7$ grams per cubic centimeter is $2{,}700{,}000$ grams, or $2{,}700$ kilograms, per cubic meter.\n\n**The Full Solution:**\nStep 1: From the table, the granite sample has a density of $2.7$ grams per cubic centimeter.\nStep 2: Convert the volume. Since $1$ meter $= 100$ centimeters, $1$ cubic meter $= 100^{3} = 1{,}000{,}000$ cubic centimeters, so the density is $2.7(1{,}000{,}000) = 2{,}700{,}000$ grams per cubic meter.\nStep 3: Convert the mass: $\\frac{2{,}700{,}000}{1{,}000} = 2{,}700$ kilograms per cubic meter. Check: $2{,}700$ kilograms is $2{,}700{,}000$ grams, and dividing by $1{,}000{,}000$ cubic centimeters gives $2.7$ grams per cubic centimeter ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.0027$): divides by $1{,}000$ to change grams to kilograms but never converts the cubic centimeters to cubic meters.\n* Choice B ($0.27$): multiplies by $100$ only once. A cubic unit needs the length factor three times.\n* Choice C ($27$): multiplies by $100^{2}$, a square-unit conversion, instead of $100^{3}$.\n\n**Test Day Takeaway:** When converting a volume unit, cube the length conversion factor, and convert the mass and volume units separately.",
      skills: ["unit-conversion"]
    },
    // ============================================================
    // Q17-Q22: Medium-hard ceiling (band 6-7)
    // ============================================================
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "A store spent \\$600 on $p$ boxes of pens and $b$ boxes of markers. The equation $15p + 10b = 600$ represents this situation. Which of the following is the best interpretation of the relationship between $p$ and $b$?",
      choices: [
        // distractor: inverts the ratio, dividing 10 by 15 instead of 15 by 10
        { id: "A", text: "For each additional box of pens, the number of boxes of markers decreases by $\\frac{2}{3}$." },
        { id: "B", text: "For each additional box of pens, the number of boxes of markers decreases by $\\frac{3}{2}$." },
        // distractor: keeps the size of the rate but drops the negative sign built into the fixed total
        { id: "C", text: "For each additional box of pens, the number of boxes of markers increases by $\\frac{3}{2}$." },
        // distractor: swaps the two variables, applying the pen rate to a box of markers
        { id: "D", text: "For each additional box of markers, the number of boxes of pens decreases by $\\frac{3}{2}$." }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Solving for $b$ gives $b = 60 - \\frac{3}{2}p$, so each additional box of pens means $\\frac{3}{2}$ fewer boxes of markers.\n\n**The Full Solution:**\nStep 1: Solve the equation for $b$: $10b = 600 - 15p$, so $b = 60 - \\frac{3}{2}p$.\nStep 2: The slope, $-\\frac{3}{2}$, is the change in $b$ for each increase of $1$ in $p$.\nStep 3: So for each additional box of pens, the number of boxes of markers decreases by $\\frac{3}{2}$. Check with values: $p = 20$ gives $b = 30$, and $p = 22$ gives $b = 27$; two more boxes of pens means $3$ fewer boxes of markers, or $\\frac{3}{2}$ per box ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{2}{3}$): divides $10$ by $15$. The \\$15 spent on one more box of pens is what must be taken from markers at \\$10 each, so the rate is $\\frac{15}{10}$.\n* Choice C (increases by $\\frac{3}{2}$): drops the negative sign. With a fixed total of \\$600, buying more of one item leaves less money for the other.\n* Choice D: swaps the roles of the variables. Each additional box of markers would reduce the boxes of pens by $\\frac{10}{15} = \\frac{2}{3}$, not $\\frac{3}{2}$.\n\n**Test Day Takeaway:** To interpret the relationship in $Ax + By = C$, solve for one variable; the coefficient of the other variable is the change per unit, and its sign shows the direction.",
      skills: ["slope-intercept-form"]
    },
    {
      id: 18,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "$\\frac{y^{4}\\sqrt{y^{n}}}{y} = y^{9}$\nIn the given equation, $n$ is a constant, and the equation is true for all positive values of $y$. What is the value of $n$?",
      choices: [
        // distractor: treats the square root of y to the n as y to the n, skipping the one-half exponent
        { id: "A", text: "$6$" },
        // distractor: ignores the y in the denominator, solving 4 + n/2 = 9
        { id: "B", text: "$10$" },
        { id: "C", text: "$12$" },
        // distractor: treats the square root as a cube root, solving 4 + n/3 - 1 = 9
        { id: "D", text: "$18$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Exponent Rules with Radicals**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The left side is $y^{4 + \\frac{n}{2} - 1}$, so $3 + \\frac{n}{2} = 9$ and $n = 12$.\n\n**The Full Solution:**\nStep 1: Rewrite the radical as a power: $\\sqrt{y^{n}} = y^{\\frac{n}{2}}$.\nStep 2: Multiply and divide by adding and subtracting exponents: $\\frac{y^{4} \\cdot y^{\\frac{n}{2}}}{y^{1}} = y^{4 + \\frac{n}{2} - 1} = y^{3 + \\frac{n}{2}}$.\nStep 3: For the equation to hold for all positive $y$, the exponents must match: $3 + \\frac{n}{2} = 9$, so $\\frac{n}{2} = 6$ and $n = 12$. Check: $\\sqrt{y^{12}} = y^{6}$, and $\\frac{y^{4} \\cdot y^{6}}{y} = y^{9}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): treats $\\sqrt{y^{n}}$ as $y^{n}$, solving $3 + n = 9$.\n* Choice B ($10$): forgets the $y$ in the denominator, solving $4 + \\frac{n}{2} = 9$.\n* Choice D ($18$): treats the square root as a cube root, solving $3 + \\frac{n}{3} = 9$.\n\n**Test Day Takeaway:** Convert every radical to a fractional exponent first; then the whole expression collapses to one power of $y$ by adding and subtracting exponents.",
      skills: ["exponent-rules", "radical-expressions"]
    },
    {
      id: 19,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "Maya paid \\$219 for $4$ shirts and $7$ hats. Leo paid \\$210 for $7$ shirts and $4$ hats. Each shirt has the same price, and each hat has the same price. What is the price, in dollars, of one shirt and one hat combined?",
      correctAnswer: "39",
      explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**The correct answer is $39$.**\n\n**The Fast Way (~30s):** Adding the two purchases gives $11$ shirts and $11$ hats for \\$219 + \\$210 = \\$429, so one shirt and one hat cost $\\frac{429}{11} = 39$ dollars.\n\n**The Full Solution:**\nStep 1: Let $s$ be the price of a shirt and $h$ the price of a hat, in dollars. Then $4s + 7h = 219$ and $7s + 4h = 210$.\nStep 2: Add the two equations: $11s + 11h = 429$.\nStep 3: Divide each side by $11$: $s + h = 39$. Check by solving fully: subtracting the equations gives $3h - 3s = 9$, so $h - s = 3$, which makes $h = 21$ and $s = 18$; then $4(18) + 7(21) = 72 + 147 = 219$ and $7(18) + 4(21) = 126 + 84 = 210$ ✓\n\n**Common Mistakes:**\n* $21$ or $18$: solves for one price and reports it instead of the sum.\n* $3$: subtracts the equations and reports $h - s$ instead of $s + h$.\n* $429$: adds the equations but does not divide by $11$.\n\n**Test Day Takeaway:** When a question asks for a sum like $s + h$, look for a combination of the equations that produces it directly; here adding works because the coefficients are swapped.",
      skills: ["word-problem-to-equation", "setting-up-systems"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "$6x + 10y = 34$\n$9x - 4y = 32$\nIf $(x, y)$ is the solution to the given system of equations, which of the following equations is also true?",
      choices: [
        // distractor: adds the two equations as written and treats 10y - 4y as canceling
        { id: "A", text: "$15x = 66$" },
        // distractor: scales the equations to 18x and subtracts, but subtracts -8y as if it were +8y
        { id: "B", text: "$22y = 38$" },
        // distractor: scales the left sides by 2 and 5 but adds the original constants 34 and 32
        { id: "C", text: "$57x = 66$" },
        { id: "D", text: "$57x = 228$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** Multiply the first equation by $2$ and the second by $5$ so the $y$-terms are $20y$ and $-20y$; adding gives $57x = 68 + 160 = 228$.\n\n**The Full Solution:**\nStep 1: Multiply the first equation by $2$: $12x + 20y = 68$. Multiply the second equation by $5$: $45x - 20y = 160$.\nStep 2: Add the two new equations. The $y$-terms cancel: $57x = 228$.\nStep 3: So $57x = 228$ is true for the solution. Check: $x = \\frac{228}{57} = 4$, then $6(4) + 10y = 34$ gives $y = 1$, and $9(4) - 4(1) = 32$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($15x = 66$): adds the original equations, which gives $15x + 6y = 66$; the $y$-terms do not cancel, because $10y$ and $-4y$ are not opposites.\n* Choice B ($22y = 38$): eliminates $x$ correctly by scaling to $18x + 30y = 102$ and $18x - 8y = 64$, but subtracts $-8y$ as if it were $+8y$. The correct difference is $38y = 38$.\n* Choice C ($57x = 66$): multiplies the left sides by $2$ and $5$ but adds the original constants, $34 + 32$, instead of the scaled constants $68 + 160$.\n\n**Test Day Takeaway:** Multiply every term of an equation, including the constant, and choose multipliers that make one variable's coefficients opposites before you add.",
      skills: ["elimination-method", "setting-up-systems"]
    },
    {
      id: 21,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "For the linear function $f$, the table shows four values of $x$ and their corresponding values of $f(x)$. If $h(x) = f(x) - 9$, what is the value of $h(11)$?",
      questionTable: { headers: ["$x$", "$f(x)$"], rows: [["$1$", "$5$"], ["$3$", "$11$"], ["$5$", "$17$"], ["$7$", "$23$"]] },
      choices: [
        // distractor: uses the rule f(x) = 3x, dropping the constant 2, so h(11) = 33 - 9
        { id: "A", text: "$24$" },
        { id: "B", text: "$26$" },
        // distractor: finds f(11) = 35 but does not subtract 9
        { id: "C", text: "$35$" },
        // distractor: adds 9 to f(11) instead of subtracting it
        { id: "D", text: "$44$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** The outputs rise $6$ for every $2$ of input, so $f(x) = 3x + 2$; then $f(11) = 35$ and $h(11) = 35 - 9 = 26$.\n\n**The Full Solution:**\nStep 1: Find the rule for $f$. From $x = 1$ to $x = 3$, $f(x)$ increases by $11 - 5 = 6$, so the slope is $\\frac{6}{2} = 3$. Since $f(1) = 5$, the constant is $5 - 3 = 2$, so $f(x) = 3x + 2$.\nStep 2: The input $11$ is not in the table, so use the rule: $f(11) = 3(11) + 2 = 35$.\nStep 3: $h(11) = f(11) - 9 = 35 - 9 = 26$. Check the rule with another row: $f(7) = 3(7) + 2 = 23$, which matches the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($24$): uses $f(x) = 3x$, which matches the spacing of the outputs but misses the constant $2$.\n* Choice C ($35$): this is $f(11)$; $h$ is $9$ less than $f$.\n* Choice D ($44$): adds $9$ instead of subtracting it.\n\n**Test Day Takeaway:** When an input is outside the table, write the linear rule from two rows; then apply any change to the output, such as $-9$, last.",
      skills: ["function-evaluation"]
    },
    {
      id: 22,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "$\\frac{3(2x - k)}{4} + 5 = 14$\nIn the given equation, $k$ is a constant. The solution to the given equation is $x = 10$. What is the value of $k$?",
      correctAnswer: "8",
      explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~25s):** Substituting $x = 10$ gives $\\frac{3(20 - k)}{4} = 9$, so $20 - k = 12$ and $k = 8$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 10$: $\\frac{3(20 - k)}{4} + 5 = 14$.\nStep 2: Subtract $5$ from each side, $\\frac{3(20 - k)}{4} = 9$; then multiply each side by $\\frac{4}{3}$: $20 - k = 12$.\nStep 3: Solve: $k = 8$. Check: $\\frac{3(2 \\cdot 10 - 8)}{4} + 5 = \\frac{3(12)}{4} + 5 = 9 + 5 = 14$ ✓\n\n**Common Mistakes:**\n* $17$: forgets to multiply by $4$, solving $3(20 - k) = 9$.\n* $-16$: drops the factor of $3$, solving $\\frac{20 - k}{4} = 9$.\n* $-2$: substitutes $10$ for $2x$ instead of for $x$, solving $\\frac{3(10 - k)}{4} = 9$.\n\n**Test Day Takeaway:** Substitute the known solution first, then undo the operations in reverse order: the added constant, then the division, then the multiplication.",
      skills: ["combining-like-terms"]
    }
  ]
};

export default practiceTest10M2Easy;
