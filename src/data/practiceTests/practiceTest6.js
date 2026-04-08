// Practice Test 6 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Contexts: art/design, agriculture, medicine, oceanography

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
        // ===== EASY (Q1-Q5) =====
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A survey asked $200$ art students which medium they prefer. The results are shown in the table.\n\n| Medium | Number of Students |\n|---|---|\n| Painting | $72$ |\n| Sculpture | $48$ |\n| Digital Art | $56$ |\n| Photography | $24$ |\n\nAccording to the table, what fraction of the students surveyed prefer sculpture?",
          choices: [
            { id: "A", text: "$\\frac{48}{200}$" },
            { id: "B", text: "$\\frac{48}{72}$" },
            { id: "C", text: "$\\frac{48}{56}$" },
            { id: "D", text: "$\\frac{200}{48}$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Reading a Table — Part-to-Whole Fraction**\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** Students who prefer sculpture $= 48$. Total students $= 200$. Fraction $= \\frac{48}{200}$.\n\n**The Full Solution:**\nThe question asks what fraction of ALL students prefer sculpture.\nNumerator: students who prefer sculpture $= 48$.\nDenominator: total students $= 200$.\nFraction $= \\frac{48}{200} = \\frac{6}{25}$.\n\n**Why the wrong answers are tempting:**\n• Choice B: Uses painting ($72$) as the denominator — wrong group.\n• Choice C: Uses digital art ($56$) as the denominator.\n• Choice D: Inverts the fraction (whole over part).\n\n**Test Day Takeaway:** \"Fraction of all\" means part $\\div$ total. The total goes in the denominator.",
          skills: ["data-interpretation", "ratios-proportions"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A farmer's crop yield $Y$ in bushels is modeled by $Y = 120 + 8w$, where $w$ is the number of weeks after planting. What is the best interpretation of $8$ in this equation?",
          choices: [
            { id: "A", text: "The total yield after $w$ weeks" },
            { id: "B", text: "The yield at the time of planting" },
            { id: "C", text: "The increase in yield per week" },
            { id: "D", text: "The number of weeks after planting" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Interpreting the Slope of a Linear Model**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** In $Y = 120 + 8w$, the coefficient $8$ is multiplied by $w$ (weeks), so it represents the rate of change: $8$ bushels per week.\n\n**The Full Solution:**\nIn $Y = 120 + 8w$:\n- $120$ is the $y$-intercept (yield at $w = 0$, the time of planting)\n- $8$ is the slope (additional bushels per week)\n\n**Why the wrong answers are tempting:**\n• Choice A: $Y$ is the total yield, not $8$.\n• Choice B: The yield at planting is $120$ (when $w = 0$).\n• Choice D: $w$ represents weeks, not $8$.\n\n**Test Day Takeaway:** In $y = b + mx$, the coefficient $m$ is always the rate of change per unit of $x$.",
          skills: ["function-interpretation", "linear-functions"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "$4$ less than $6$ times a number $x$ equals $38$. Which equation represents this statement?",
          choices: [
            { id: "A", text: "$4x - 6 = 38$" },
            { id: "B", text: "$6x - 4 = 38$" },
            { id: "C", text: "$4 - 6x = 38$" },
            { id: "D", text: "$6(x - 4) = 38$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Translating Words to an Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** \"$6$ times $x$\" $= 6x$. \"$4$ less than that\" $= 6x - 4$. \"Equals $38$\" $\\Rightarrow 6x - 4 = 38$.\n\n**The Full Solution:**\n- \"$6$ times a number $x$\": $6x$\n- \"$4$ less than\" that: $6x - 4$\n- \"equals $38$\": $6x - 4 = 38$\n\n**Why the wrong answers are tempting:**\n• Choice A ($4x - 6 = 38$): Swaps the $4$ and $6$.\n• Choice C ($4 - 6x = 38$): Reverses the subtraction order.\n• Choice D ($6(x-4) = 38$): Distributes to $6x - 24$, not $6x - 4$.\n\n**Test Day Takeaway:** \"$A$ less than $B$\" means $B - A$, not $A - B$.",
          skills: ["linear-equations", "word-problems"]
        },
        {
          id: 4,
          type: "fill-in",
          difficulty: "easy",
          question: "A marine biologist records ocean temperatures of $68°F, 72°F, 71°F, 69°F,$ and $70°F$ over $5$ days. What is the mean temperature, in degrees Fahrenheit?",
          correctAnswer: "70",
          explanation: "**SAT Pattern: Computing the Mean**\n\n**The correct answer is $70$.**\n\n**The Fast Way (15 seconds):** Sum $= 68 + 72 + 71 + 69 + 70 = 350$. Mean $= 350 \\div 5 = 70$.\n\n**The Full Solution:**\nMean $= \\frac{68 + 72 + 71 + 69 + 70}{5} = \\frac{350}{5} = 70°F$.\n\n**Common Mistakes to Avoid:**\n• Reporting the median ($70$) — which happens to be the same here, but the process differs.\n• Sum error: double-check $68 + 72 = 140$, $140 + 71 = 211$, $211 + 69 = 280$, $280 + 70 = 350$.\n\n**Verification:** $350 \\div 5 = 70$ ✓\n\n**Test Day Takeaway:** Mean $=$ sum $\\div$ count. Carefully add all values before dividing.",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The equation $P = 12w$ gives the perimeter $P$ of a regular polygon with $w$ sides, where each side has length $12$. What does the number $12$ represent?",
          choices: [
            { id: "A", text: "The number of sides" },
            { id: "B", text: "The perimeter of the polygon" },
            { id: "C", text: "The length of one side" },
            { id: "D", text: "The area of the polygon" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Interpreting a Coefficient in a Linear Model**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** In $P = 12w$, $12$ is multiplied by $w$ (number of sides). Since perimeter $=$ side length $\\times$ number of sides, $12$ must be the side length.\n\n**The Full Solution:**\nPerimeter of a regular polygon $=$ side length $\\times$ number of sides.\n$P = 12w$ matches this form, with side length $= 12$.\n\n**Why the wrong answers are tempting:**\n• Choice A: $w$ is the number of sides, not $12$.\n• Choice B: $P$ is the perimeter.\n• Choice D: Area is not calculated this way.\n\n**Test Day Takeaway:** In $y = kx$, the coefficient $k$ represents the rate (here, length per side).",
          skills: ["function-interpretation", "linear-functions"]
        },

        // ===== EASY-MEDIUM (Q6-Q7) =====
        {
          id: 6,
          type: "fill-in",
          difficulty: "medium",
          question: "A medical clinic charges $\\$35$ per visit. A patient has a $\\$90$ insurance credit that is applied first. If the patient makes $4$ visits, what is the total out-of-pocket cost, in dollars?",
          correctAnswer: "50",
          explanation: "**SAT Pattern: Multi-Step Word Problem**\n\n**The correct answer is $50$.**\n\n**The Fast Way (15 seconds):** Total before credit $= 4 \\times 35 = 140$. After credit: $140 - 90 = 50$.\n\n**The Full Solution:**\nTotal cost $= 4 \\times \\$35 = \\$140$\nAfter insurance credit: $\\$140 - \\$90 = \\$50$\n\n**Common Mistakes to Avoid:**\n• Applying the credit per visit: $35 - 90 < 0$ (the credit covers the entire bill, not per-visit).\n• Forgetting to subtract the credit: answering $140$.\n\n**Verification:** $4 \\times 35 = 140$. $140 - 90 = 50$ ✓\n\n**Test Day Takeaway:** Read carefully whether a credit/discount is applied once to the total or per item.",
          skills: ["word-problems", "solving-equations"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which expression is equivalent to $\\frac{8x^6}{4x^3}$?",
          choices: [
            { id: "A", text: "$2x^2$" },
            { id: "B", text: "$2x^3$" },
            { id: "C", text: "$4x^2$" },
            { id: "D", text: "$4x^3$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Simplifying with Exponent Rules**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $8/4 = 2$ and $x^{6-3} = x^3$. Answer: $2x^3$.\n\n**The Full Solution:**\n$\\frac{8x^6}{4x^3} = \\frac{8}{4} \\cdot x^{6-3} = 2x^3$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2x^2$): Divides the exponent ($6/3 = 2$) instead of subtracting.\n• Choice C ($4x^2$): Subtracts the coefficients ($8 - 4 = 4$) and divides exponents.\n• Choice D ($4x^3$): Subtracts the coefficients instead of dividing.\n\n**Test Day Takeaway:** When dividing: divide coefficients, subtract exponents.",
          skills: ["exponent-rules", "algebraic-manipulation"]
        },

        // ===== MEDIUM (Q8-Q13) =====
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "An artist mixes paint colors. She uses $3$ parts blue to $5$ parts white. If she needs a total of $56$ ounces of the mixture, how many ounces of blue paint does she need?",
          choices: [
            { id: "A", text: "$7$" },
            { id: "B", text: "$21$" },
            { id: "C", text: "$24$" },
            { id: "D", text: "$35$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Ratio Problem — Finding a Part from the Total**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Total parts $= 3 + 5 = 8$. Each part $= 56 \\div 8 = 7$ ounces. Blue $= 3 \\times 7 = 21$.\n\n**The Full Solution:**\nBlue to white ratio is $3:5$, so total parts $= 8$.\nValue of one part $= \\frac{56}{8} = 7$ ounces.\nBlue $= 3 \\times 7 = 21$ ounces.\n\n**Why the wrong answers are tempting:**\n• Choice A ($7$): The value of one part, not the blue amount.\n• Choice C ($24$): From $56 \\times \\frac{3}{7}$ (wrong denominator).\n• Choice D ($35$): The white amount ($5 \\times 7$), not blue.\n\n**Verification:** Blue $= 21$, White $= 35$. Total $= 21 + 35 = 56$ ✓. Ratio $= 21:35 = 3:5$ ✓.\n\n**Test Day Takeaway:** For ratio problems, add the parts to get the total ratio, find the value of one part, then multiply.",
          skills: ["ratios-proportions", "word-problems"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The equation $y = -2x + 10$ represents a line in the $xy$-plane. At what point does this line cross the $x$-axis?",
          choices: [
            { id: "A", text: "$(0, 10)$" },
            { id: "B", text: "$(5, 0)$" },
            { id: "C", text: "$(10, 0)$" },
            { id: "D", text: "$(-5, 0)$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Finding the x-Intercept**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Set $y = 0$: $0 = -2x + 10$, so $2x = 10$ and $x = 5$. The point is $(5, 0)$.\n\n**The Full Solution:**\nThe $x$-intercept is where $y = 0$:\n$0 = -2x + 10$\n$2x = 10$\n$x = 5$\nThe line crosses the $x$-axis at $(5, 0)$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($0, 10$): This is the $y$-intercept, not the $x$-intercept.\n• Choice C ($10, 0$): Uses $b = 10$ as the $x$-intercept directly.\n• Choice D ($-5, 0$): Sign error when solving $-2x = -10$.\n\n**Test Day Takeaway:** $x$-intercept: set $y = 0$ and solve for $x$. $y$-intercept: set $x = 0$ and solve for $y$.",
          skills: ["linear-functions", "coordinate-geometry"]
        },
        {
          id: 10,
          type: "fill-in",
          difficulty: "medium",
          question: "A rectangular garden has a perimeter of $56$ feet. If the length is $18$ feet, what is the width, in feet?",
          correctAnswer: "10",
          explanation: "**SAT Pattern: Perimeter of a Rectangle**\n\n**The correct answer is $10$.**\n\n**The Fast Way (15 seconds):** $P = 2l + 2w$. $56 = 2(18) + 2w = 36 + 2w$. $2w = 20$. $w = 10$.\n\n**The Full Solution:**\n$2l + 2w = 56$\n$2(18) + 2w = 56$\n$36 + 2w = 56$\n$2w = 20$\n$w = 10$\n\n**Common Mistakes to Avoid:**\n• Using $P = l + w$: $56 - 18 = 38$ (forgetting there are two of each side).\n• Dividing perimeter by $4$: $56/4 = 14$ (assumes a square).\n\n**Verification:** $P = 2(18) + 2(10) = 36 + 20 = 56$ ✓\n\n**Test Day Takeaway:** Rectangle perimeter: $P = 2l + 2w$. Subtract $2l$ first, then divide by $2$.",
          skills: ["area", "solving-equations"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A doctor prescribes $250$ milligrams of medicine $3$ times per day. How many milligrams does a patient take in $1$ week?",
          choices: [
            { id: "A", text: "$750$" },
            { id: "B", text: "$1{,}750$" },
            { id: "C", text: "$5{,}250$" },
            { id: "D", text: "$7{,}500$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Multi-Step Rate Problem**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Per day: $250 \\times 3 = 750$ mg. Per week: $750 \\times 7 = 5{,}250$ mg.\n\n**The Full Solution:**\nDaily dose $= 250 \\times 3 = 750$ mg.\nWeekly dose $= 750 \\times 7 = 5{,}250$ mg.\n\n**Why the wrong answers are tempting:**\n• Choice A ($750$): The daily total, not the weekly total.\n• Choice B ($1{,}750$): $250 \\times 7 = 1{,}750$ (forgets the $3$ times per day).\n• Choice D ($7{,}500$): $250 \\times 30 = 7{,}500$ (uses $30$ days instead of $7$).\n\n**Test Day Takeaway:** Chain the rates: dose per time $\\times$ times per day $\\times$ days per week.",
          skills: ["word-problems", "unit-conversion"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table shows the results of a survey of $150$ students.\n\n|  | Prefer Art | Prefer Music | Total |\n|---|---|---|---|\n| Grade 10 | $30$ | $45$ | $75$ |\n| Grade 11 | $40$ | $35$ | $75$ |\n| Total | $70$ | $80$ | $150$ |\n\nWhat fraction of Grade 11 students prefer art?",
          choices: [
            { id: "A", text: "$\\frac{40}{150}$" },
            { id: "B", text: "$\\frac{40}{75}$" },
            { id: "C", text: "$\\frac{40}{70}$" },
            { id: "D", text: "$\\frac{70}{150}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Two-Way Table Conditional Fraction**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** \"Of Grade 11 students\" $=$ denominator is $75$. Art preference in Grade 11 $= 40$. Fraction $= 40/75$.\n\n**The Full Solution:**\nRestrict to Grade 11 students: total $= 75$.\nGrade 11 who prefer art $= 40$.\nFraction $= \\frac{40}{75}$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($40/150$): Uses total students as denominator instead of just Grade 11.\n• Choice C ($40/70$): Uses total art students as denominator (flips the condition).\n• Choice D ($70/150$): Fraction of all students who prefer art (ignores the grade condition).\n\n**Test Day Takeaway:** The group mentioned in the question (\"of Grade 11\") is your denominator.",
          skills: ["two-way-tables", "probability"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The system of equations below has solution $(x, y)$.\n\n$x + 3y = 14$\n$2x - y = 0$\n\nWhat is the value of $x$?",
          choices: [
            { id: "A", text: "$1$" },
            { id: "B", text: "$2$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$7$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (25 seconds):** From $2x - y = 0$, we get $y = 2x$. Substitute into the first: $x + 3(2x) = 14$, so $7x = 14$ and $x = 2$.\n\n**The Full Solution:**\nFrom the second equation: $y = 2x$.\nSubstitute into the first: $x + 3(2x) = 14$.\n$x + 6x = 14$\n$7x = 14$\n$x = 2$\n\n**Why the wrong answers are tempting:**\n• Choice A ($1$): From $14/14$ or an arithmetic slip.\n• Choice C ($4$): The value of $y$ ($y = 2 \\times 2 = 4$).\n• Choice D ($7$): From $14/2$, perhaps solving $2x = 14$ without proper substitution.\n\n**Verification:** $x = 2$, $y = 4$. Check: $2 + 3(4) = 14$ ✓ and $2(2) - 4 = 0$ ✓\n\n**Test Day Takeaway:** If one equation easily gives a variable in terms of the other, use substitution.",
          skills: ["systems-of-equations", "solving-equations"]
        },

        // ===== HARD (Q14-Q22) =====
        {
          id: 14,
          type: "fill-in",
          difficulty: "hard",
          question: "The function $y = 3(x - 14)(x + 5)(x + 4)$ is graphed in the $xy$-plane. What is the greatest $x$-intercept of this graph?",
          correctAnswer: "14",
          explanation: "**SAT Pattern: Finding x-Intercepts from Factored Form**\n\n**The correct answer is $14$.**\n\n**The Fast Way (15 seconds):** Set each factor to $0$: $x - 14 = 0 \\Rightarrow x = 14$; $x + 5 = 0 \\Rightarrow x = -5$; $x + 4 = 0 \\Rightarrow x = -4$. The greatest is $14$.\n\n**The Full Solution:**\n$x$-intercepts occur where $y = 0$:\n$3(x - 14)(x + 5)(x + 4) = 0$\n$x = 14$, $x = -5$, or $x = -4$\nThe greatest $x$-intercept is $14$.\n\n**Common Mistakes to Avoid:**\n• Reporting $-14$ instead of $14$ (sign error from $(x - 14)$).\n• Reporting $-4$ (the greatest of the two negative values, but not the overall greatest).\n\n**Verification:** At $x = 14$: $y = 3(0)(19)(18) = 0$ ✓\n\n**Test Day Takeaway:** To find $x$-intercepts, set each factor equal to zero. The leading coefficient ($3$) does not affect the $x$-intercepts.",
          skills: ["polynomial-operations", "coordinate-geometry"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A medicine loses $10\\%$ of its potency each year. If the initial potency is $P$, which expression gives the potency after $5$ years?",
          choices: [
            { id: "A", text: "$P(0.10)^5$" },
            { id: "B", text: "$P(0.90)^5$" },
            { id: "C", text: "$P - 0.50P$" },
            { id: "D", text: "$P(0.50)$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Exponential Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Loses $10\\%$ per year means $90\\%$ remains each year. After $5$ years: $P(0.90)^5$.\n\n**The Full Solution:**\nAnnual retention rate $= 1 - 0.10 = 0.90$.\nAfter $t$ years: $P(0.90)^t$.\nAfter $5$ years: $P(0.90)^5$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($P(0.10)^5$): Uses the loss rate as the base instead of the retention rate.\n• Choice C ($P - 0.50P = 0.50P$): Assumes $10\\% \\times 5 = 50\\%$ total loss. This is the linear (simple) approach, but exponential decay does not work this way.\n• Choice D ($P(0.50)$): Same error as C, just written differently.\n\n**Test Day Takeaway:** Exponential decay: multiply by the retention rate $(1 - \\text{decay rate})$ raised to the number of periods.",
          skills: ["exponential-functions", "percents"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A parabola in the $xy$-plane has equation $y = x^2 - 6x + 5$. What are the $x$-coordinates of the points where the parabola crosses the $x$-axis?",
          choices: [
            { id: "A", text: "$x = 1$ and $x = 5$" },
            { id: "B", text: "$x = -1$ and $x = -5$" },
            { id: "C", text: "$x = 2$ and $x = 3$" },
            { id: "D", text: "$x = -1$ and $x = 5$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Finding x-Intercepts of a Quadratic**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Set $y = 0$: $x^2 - 6x + 5 = 0$. Factor: $(x - 1)(x - 5) = 0$. So $x = 1$ and $x = 5$.\n\n**The Full Solution:**\n$x^2 - 6x + 5 = 0$\nFind two numbers that multiply to $5$ and add to $-6$: $-1$ and $-5$.\n$(x - 1)(x - 5) = 0$\n$x = 1$ or $x = 5$\n\n**Why the wrong answers are tempting:**\n• Choice B ($-1, -5$): Uses the factors with wrong signs: $(x + 1)(x + 5)$ gives $x^2 + 6x + 5$.\n• Choice C ($2, 3$): Numbers that multiply to $6$ but add to $5$, a mix-up.\n• Choice D ($-1, 5$): Mixes signs from different factoring attempts.\n\n**Verification:** $(1)^2 - 6(1) + 5 = 0$ ✓ and $(5)^2 - 6(5) + 5 = 0$ ✓\n\n**Test Day Takeaway:** To find $x$-intercepts, set $y = 0$ and factor. The solutions of $(x - a)(x - b) = 0$ are $x = a$ and $x = b$.",
          skills: ["quadratic-equations", "factoring"]
        },
        {
          id: 17,
          type: "fill-in",
          difficulty: "hard",
          question: "The vertex of the parabola $y = 2x^2 - 16x + 30$ is at the point $(h, k)$. What is the value of $k$?",
          correctAnswer: "-2",
          explanation: "**SAT Pattern: Finding the Vertex y-Coordinate**\n\n**The correct answer is $-2$.**\n\n**The Fast Way (20 seconds):** $h = -b/(2a) = 16/4 = 4$. Then $k = 2(16) - 16(4) + 30 = 32 - 64 + 30 = -2$.\n\n**The Full Solution:**\n$h = -\\frac{b}{2a} = -\\frac{-16}{2(2)} = \\frac{16}{4} = 4$\n$k = f(4) = 2(4)^2 - 16(4) + 30 = 32 - 64 + 30 = -2$\n\nVertex: $(4, -2)$.\n\n**Common Mistakes to Avoid:**\n• Reporting $h = 4$ instead of $k = -2$.\n• Arithmetic error: $32 - 64 = -32$, then $-32 + 30 = -2$. Watch the signs.\n\n**Verification:** $f(4) = 2(16) - 64 + 30 = 32 - 64 + 30 = -2$ ✓\n\n**Test Day Takeaway:** Find the vertex $x$-value with $h = -b/(2a)$, then plug back in to find $k$.",
          skills: ["vertex-form", "quadratic-functions"]
        },
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "An art gallery has dimensions $20$ feet by $30$ feet. The gallery owner wants to increase each dimension by $x$ feet so that the new area is $800$ square feet. Which equation can be used to find $x$?",
          choices: [
            { id: "A", text: "$(20 + x)(30 + x) = 800$" },
            { id: "B", text: "$20x + 30x = 800$" },
            { id: "C", text: "$(20)(30) + x = 800$" },
            { id: "D", text: "$20x \\cdot 30x = 800$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Setting Up an Area Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** New length $= 20 + x$. New width $= 30 + x$. Area $= (20 + x)(30 + x) = 800$.\n\n**The Full Solution:**\nIncreasing each dimension by $x$:\nNew length $= 20 + x$\nNew width $= 30 + x$\nNew area $= (20 + x)(30 + x) = 800$\n\n**Why the wrong answers are tempting:**\n• Choice B: Adds the \"increases\" instead of multiplying the new dimensions.\n• Choice C: Adds $x$ to the original area instead of increasing each dimension.\n• Choice D: Multiplies $20x$ by $30x$, which gives $600x^2$.\n\n**Test Day Takeaway:** Area $=$ length $\\times$ width. If each dimension increases by $x$, the new area is $(l + x)(w + x)$.",
          skills: ["quadratic-equations", "area"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A medicine loses $10\\%$ of its potency each year. If the initial potency is $P$, which expression gives the potency after $5$ years?",
          choices: [
            { id: "A", text: "$P(0.10)^5$" },
            { id: "B", text: "$P(0.90)^5$" },
            { id: "C", text: "$P - 0.50P$" },
            { id: "D", text: "$P(0.50)$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Exponential Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Loses $10\\%$ per year means $90\\%$ remains. After $5$ years: $P(0.90)^5$.\n\n**The Full Solution:**\nAnnual retention rate $= 1 - 0.10 = 0.90$.\nAfter $t$ years: $P(0.90)^t$.\nAfter $5$ years: $P(0.90)^5$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($P(0.10)^5$): Uses the loss rate as the base instead of the retention rate.\n• Choice C ($P - 0.50P = 0.50P$): Assumes $10\\% \\times 5 = 50\\%$ total loss. This is the linear (simple) approach, but exponential decay does not work this way.\n• Choice D ($P(0.50)$): Same error as C, just written differently.\n\n**Test Day Takeaway:** Exponential decay: multiply by the retention rate $(1 - \\text{decay rate})$ raised to the number of periods.",
          skills: ["exponential-functions", "percents"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In a right triangle, one acute angle measures $35°$. What is the measure of the other acute angle?",
          choices: [
            { id: "A", text: "$35°$" },
            { id: "B", text: "$45°$" },
            { id: "C", text: "$55°$" },
            { id: "D", text: "$145°$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Angles in a Right Triangle**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** The three angles sum to $180°$. One is $90°$, one is $35°$. The third $= 180 - 90 - 35 = 55°$.\n\n**The Full Solution:**\nIn a right triangle, one angle is $90°$.\n$90 + 35 + x = 180$\n$x = 180 - 125 = 55°$\n\n**Why the wrong answers are tempting:**\n• Choice A ($35°$): Assumes the two acute angles are equal (only true for a $45$-$45$-$90$ triangle).\n• Choice B ($45°$): A common angle but not the correct one here.\n• Choice D ($145°$): From $180 - 35 = 145$, forgetting to subtract the right angle.\n\n**Test Day Takeaway:** In a right triangle, the two acute angles sum to $90°$.",
          skills: ["triangles", "angles"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "If $\\sqrt{5x - 1} = 7$, what is the value of $x$?",
          correctAnswer: "10",
          explanation: "**SAT Pattern: Solving a Radical Equation**\n\n**The correct answer is $10$.**\n\n**The Fast Way (15 seconds):** Square both sides: $5x - 1 = 49$. So $5x = 50$ and $x = 10$.\n\n**The Full Solution:**\n$\\sqrt{5x - 1} = 7$\n$(\\sqrt{5x - 1})^2 = 7^2$\n$5x - 1 = 49$\n$5x = 50$\n$x = 10$\n\n**Common Mistakes to Avoid:**\n• Squaring only the left side: $5x - 1 = 7$ gives $x = 8/5$.\n• Forgetting to add $1$: $5x = 49$, $x = 9.8$.\n\n**Verification:** $\\sqrt{5(10) - 1} = \\sqrt{49} = 7$ ✓\n\n**Test Day Takeaway:** To solve $\\sqrt{A} = B$, square both sides to get $A = B^2$, then solve the resulting equation.",
          skills: ["radical-equations", "solving-equations"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation $-3x^2 + bx - 48 = 0$ has exactly one real solution. What is a possible value of $b$?",
          choices: [
            { id: "A", text: "$12$" },
            { id: "B", text: "$18$" },
            { id: "C", text: "$24$" },
            { id: "D", text: "$30$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Discriminant Equals Zero for One Solution**\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** One real solution means $b^2 - 4ac = 0$.\n$a = -3$, $c = -48$.\n$b^2 - 4(-3)(-48) = 0$\n$b^2 - 576 = 0$\n$b^2 = 576$\n$b = \\pm 24$\n\n**The Full Solution:**\nDiscriminant $= b^2 - 4ac = b^2 - 4(-3)(-48) = b^2 - 576$.\nFor exactly one solution: $b^2 - 576 = 0$, so $b = \\pm 24$.\nSince $24$ is a choice, $b = 24$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($12$): $144 - 576 = -432 < 0$ (no real solutions).\n• Choice B ($18$): $324 - 576 = -252 < 0$ (no real solutions).\n• Choice D ($30$): $900 - 576 = 324 > 0$ (two real solutions).\n\n**Test Day Takeaway:** Exactly one solution: $b^2 = 4ac$. Compute $4ac$ carefully — watch the signs.",
          skills: ["discriminant", "quadratic-equations"]
        }
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
        {
          id: 1,
          type: "fill-in",
          difficulty: "easy",
          question: "A designer needs $3$ yards of fabric for each dress. How many yards are needed for $9$ dresses?",
          correctAnswer: "27",
          explanation: "**SAT Pattern: Simple Multiplication**\n\n**The correct answer is $27$.**\n\n**The Fast Way (5 seconds):** $3 \\times 9 = 27$ yards.\n\n**The Full Solution:**\n$9$ dresses $\\times 3$ yards per dress $= 27$ yards.\n\n**Common Mistakes to Avoid:**\n• Dividing: $9 \\div 3 = 3$ (finds how many dresses from $9$ yards).\n\n**Verification:** $27 \\div 3 = 9$ dresses. ✓\n\n**Test Day Takeaway:** Total $=$ quantity $\\times$ rate per unit.",
          skills: ["word-problems", "ratios-proportions"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "If $x - 9 = 15$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$6$" },
            { id: "B", text: "$9$" },
            { id: "C", text: "$15$" },
            { id: "D", text: "$24$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: One-Step Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (5 seconds):** $x = 15 + 9 = 24$.\n\n**The Full Solution:**\n$x - 9 = 15$\n$x = 15 + 9 = 24$\n\n**Why the wrong answers are tempting:**\n• Choice A ($6$): From $15 - 9 = 6$ (subtracting instead of adding).\n• Choice B ($9$): Just the number being subtracted.\n• Choice C ($15$): Just the right side of the equation.\n\n**Test Day Takeaway:** To undo subtraction, add the same number to both sides.",
          skills: ["linear-equations", "solving-equations"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A marine biologist tags $12$ dolphins on Monday, $15$ on Tuesday, and $9$ on Wednesday. What is the median number of dolphins tagged per day?",
          choices: [
            { id: "A", text: "$9$" },
            { id: "B", text: "$12$" },
            { id: "C", text: "$13$" },
            { id: "D", text: "$15$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Median of a Small Data Set**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Order: $9, 12, 15$. The middle value is $12$.\n\n**The Full Solution:**\nData in order: $9, 12, 15$.\nWith $3$ values, the median is the $2$nd value: $12$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($9$): The minimum.\n• Choice C ($13$): An incorrect average.\n• Choice D ($15$): The maximum.\n\n**Test Day Takeaway:** Sort the data first, then pick the middle value. For an even count, average the two middle values.",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A farm has chickens and cows. There are $3$ times as many chickens as cows. If there are $c$ cows, which expression represents the total number of animals?",
          choices: [
            { id: "A", text: "$3c$" },
            { id: "B", text: "$4c$" },
            { id: "C", text: "$c + 3$" },
            { id: "D", text: "$3c + 3$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Translating Relationships to Expressions**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Chickens $= 3c$. Total $= c + 3c = 4c$.\n\n**The Full Solution:**\nCows $= c$.\nChickens $= 3c$ (three times as many).\nTotal $= c + 3c = 4c$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($3c$): Only the chickens, not the total.\n• Choice C ($c + 3$): Adds $3$ instead of multiplying by $3$.\n• Choice D ($3c + 3$): Adds $3$ cows instead of $c$ cows.\n\n**Test Day Takeaway:** \"$k$ times as many\" means multiply by $k$. Total $=$ original $+$ multiplied amount.",
          skills: ["word-problems", "algebraic-manipulation"]
        },
        {
          id: 5,
          type: "fill-in",
          difficulty: "easy",
          question: "What is the value of $\\frac{3}{4} + \\frac{1}{4}$?",
          correctAnswer: "1",
          explanation: "**SAT Pattern: Adding Fractions with Common Denominators**\n\n**The correct answer is $1$.**\n\n**The Fast Way (5 seconds):** $\\frac{3}{4} + \\frac{1}{4} = \\frac{4}{4} = 1$.\n\n**The Full Solution:**\nSame denominator, so add numerators: $\\frac{3 + 1}{4} = \\frac{4}{4} = 1$.\n\n**Common Mistakes to Avoid:**\n• Adding denominators: $\\frac{3}{4} + \\frac{1}{4} \\neq \\frac{4}{8}$.\n\n**Verification:** $\\frac{3}{4} + \\frac{1}{4} = 0.75 + 0.25 = 1.00$ ✓\n\n**Test Day Takeaway:** Same denominator? Add the numerators. Keep the denominator.",
          skills: ["algebraic-manipulation", "solving-equations"]
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "An agricultural scientist models crop yield with $Y = 200 + 15f - 0.1f^2$, where $f$ is the amount of fertilizer in pounds. What is the yield when $f = 50$?",
          choices: [
            { id: "A", text: "$700$" },
            { id: "B", text: "$750$" },
            { id: "C", text: "$950$" },
            { id: "D", text: "$1{,}200$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Evaluating a Function**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** $Y = 200 + 15(50) - 0.1(50)^2 = 200 + 750 - 250 = 700$.\n\n**The Full Solution:**\n$Y = 200 + 15(50) - 0.1(2{,}500)$\n$= 200 + 750 - 250$\n$= 700$\n\n**Why the wrong answers are tempting:**\n• Choice B ($750$): Forgets the $+200$ and the $-0.1f^2$ term: just computes $15(50) = 750$.\n• Choice C ($950$): Forgets to subtract $0.1f^2$: $200 + 750 = 950$.\n• Choice D ($1{,}200$): Adds all terms: $200 + 750 + 250 = 1{,}200$.\n\n**Test Day Takeaway:** Substitute carefully and follow order of operations. Compute exponents before multiplying.",
          skills: ["function-evaluation", "quadratic-functions"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A line passes through the points $(0, -3)$ and $(4, 5)$. What is the equation of this line?",
          choices: [
            { id: "A", text: "$y = 2x - 3$" },
            { id: "B", text: "$y = 2x + 5$" },
            { id: "C", text: "$y = -2x - 3$" },
            { id: "D", text: "$y = \\frac{1}{2}x - 3$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Equation of a Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** Slope $= \\frac{5-(-3)}{4-0} = \\frac{8}{4} = 2$. The $y$-intercept is $-3$ (from the point $(0,-3)$). Equation: $y = 2x - 3$.\n\n**The Full Solution:**\n$m = \\frac{5 - (-3)}{4 - 0} = \\frac{8}{4} = 2$\n$b = -3$ (the line passes through $(0, -3)$)\n$y = 2x - 3$\n\n**Why the wrong answers are tempting:**\n• Choice B ($y = 2x + 5$): Uses $y = 5$ from the second point as the $y$-intercept.\n• Choice C ($y = -2x - 3$): Gets the slope sign wrong.\n• Choice D ($y = \\frac{1}{2}x - 3$): Flips the slope fraction.\n\n**Verification:** At $(4, 5)$: $2(4) - 3 = 5$ ✓. At $(0, -3)$: $2(0) - 3 = -3$ ✓.\n\n**Test Day Takeaway:** If one point is the $y$-intercept $(0, b)$, you already have $b$. Just find the slope.",
          skills: ["linear-functions", "slope"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "The inequality $3x - 5 > 16$ is satisfied by all values of $x$ greater than what number?",
          correctAnswer: "7",
          explanation: "**SAT Pattern: Solving a Linear Inequality**\n\n**The correct answer is $7$.**\n\n**The Fast Way (15 seconds):** $3x - 5 > 16$, so $3x > 21$ and $x > 7$.\n\n**The Full Solution:**\n$3x - 5 > 16$\n$3x > 21$\n$x > 7$\n\nAll values greater than $7$ satisfy the inequality.\n\n**Common Mistakes to Avoid:**\n• Flipping the inequality sign (only needed when multiplying/dividing by a negative).\n• Subtracting $5$ from only one side: $3x > 11$, $x > 3.67$.\n\n**Verification:** At $x = 8$: $3(8) - 5 = 19 > 16$ ✓. At $x = 7$: $3(7) - 5 = 16$, which is NOT $> 16$. So $x > 7$. ✓\n\n**Test Day Takeaway:** Solve inequalities like equations. Only flip the sign when multiplying or dividing by a negative.",
          skills: ["inequalities", "solving-equations"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A circular fountain has a diameter of $14$ feet. What is the area of the fountain, in square feet?",
          choices: [
            { id: "A", text: "$7\\pi$" },
            { id: "B", text: "$14\\pi$" },
            { id: "C", text: "$49\\pi$" },
            { id: "D", text: "$196\\pi$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Area of a Circle from Diameter**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** Diameter $= 14$, so radius $= 7$. Area $= \\pi(7)^2 = 49\\pi$.\n\n**The Full Solution:**\n$r = d/2 = 14/2 = 7$\n$A = \\pi r^2 = \\pi(7)^2 = 49\\pi$ square feet.\n\n**Why the wrong answers are tempting:**\n• Choice A ($7\\pi$): Uses $\\pi r$ instead of $\\pi r^2$.\n• Choice B ($14\\pi$): Uses $\\pi d$ (the circumference formula without the factor).\n• Choice D ($196\\pi$): Uses the diameter instead of the radius: $\\pi(14)^2 = 196\\pi$.\n\n**Test Day Takeaway:** Always convert diameter to radius before using $A = \\pi r^2$. Radius $= \\text{diameter} \\div 2$.",
          skills: ["circles", "area"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The graph of function $g$ in the $xy$-plane is a line that passes through the points $(2, 7)$ and $(5, 16)$. Which equation defines $g$?",
          choices: [
            { id: "A", text: "$g(x) = 3x + 1$" },
            { id: "B", text: "$g(x) = 3x - 1$" },
            { id: "C", text: "$g(x) = 2x + 3$" },
            { id: "D", text: "$g(x) = 4x - 1$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Finding a Linear Equation from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Slope $= \\frac{16 - 7}{5 - 2} = \\frac{9}{3} = 3$. Using point $(2, 7)$: $7 = 3(2) + b$, so $b = 1$. Equation: $g(x) = 3x + 1$.\n\n**The Full Solution:**\n$m = \\frac{16 - 7}{5 - 2} = \\frac{9}{3} = 3$\n$y - 7 = 3(x - 2)$\n$y = 3x - 6 + 7 = 3x + 1$\n\n**Why the wrong answers are tempting:**\n• Choice B ($3x - 1$): Sign error in computing $b$: $7 - 6 = 1$, not $-1$.\n• Choice C ($2x + 3$): Uses $\\frac{7-2}{5-2}$ or a related error for the slope.\n• Choice D ($4x - 1$): $4(2) - 1 = 7$ ✓ but $4(5) - 1 = 19 \\neq 16$. Passes through the first point but not the second.\n\n**Verification:** $g(2) = 6 + 1 = 7$ ✓ and $g(5) = 15 + 1 = 16$ ✓.\n\n**Test Day Takeaway:** Find slope from two points, then use one point to find $b$. Always verify with the second point.",
          skills: ["linear-functions", "slope"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "The function $h(x) = -16x^2 + 48x$ models the height of a ball in feet after $x$ seconds. What is the maximum height of the ball?",
          correctAnswer: "36",
          explanation: "**SAT Pattern: Maximum of a Quadratic Function**\n\n**The correct answer is $36$.**\n\n**The Fast Way (20 seconds):** Maximum at $x = -b/(2a) = -48/(2 \\times -16) = -48/(-32) = 1.5$.\n$h(1.5) = -16(2.25) + 48(1.5) = -36 + 72 = 36$.\n\n**The Full Solution:**\n$x = -\\frac{b}{2a} = -\\frac{48}{2(-16)} = \\frac{48}{32} = 1.5$ seconds.\n$h(1.5) = -16(1.5)^2 + 48(1.5) = -16(2.25) + 72 = -36 + 72 = 36$ feet.\n\n**Common Mistakes to Avoid:**\n• Reporting $x = 1.5$ (the time, not the height).\n• Computing $h(3) = -16(9) + 48(3) = -144 + 144 = 0$ (back to ground level).\n\n**Verification:** $h(1.5) = -36 + 72 = 36$ and $h(1) = -16 + 48 = 32 < 36$, $h(2) = -64 + 96 = 32 < 36$. ✓\n\n**Test Day Takeaway:** Maximum/minimum of $f(x) = ax^2 + bx + c$ is at $x = -b/(2a)$. Plug that back in to find the $y$-value.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "An oceanographer collects $10$ water samples. The salinity readings are:\n$32, 33, 31, 35, 34, 33, 32, 36, 33, 31$.\n\nWhat is the mode of the data?",
          choices: [
            { id: "A", text: "$31$" },
            { id: "B", text: "$32$" },
            { id: "C", text: "$33$" },
            { id: "D", text: "$34$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Finding the Mode**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** Count each value: $31$ appears $2$ times, $32$ appears $2$ times, $33$ appears $3$ times, $34$ appears $1$ time, $35$ appears $1$ time, $36$ appears $1$ time. The most frequent is $33$.\n\n**The Full Solution:**\nFrequencies: $31 \\to 2$, $32 \\to 2$, $33 \\to 3$, $34 \\to 1$, $35 \\to 1$, $36 \\to 1$.\nMode $= 33$ (appears most often).\n\n**Why the wrong answers are tempting:**\n• Choices A and B ($31, 32$): Each appears twice, less than $33$'s three times.\n• Choice D ($34$): Near the middle of the range but only appears once.\n\n**Test Day Takeaway:** The mode is the value that appears most frequently. A data set can have more than one mode.",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In a design studio, $\\frac{2}{5}$ of the employees are graphic designers and $\\frac{1}{4}$ are web developers. What fraction of employees are either graphic designers or web developers?",
          choices: [
            { id: "A", text: "$\\frac{3}{9}$" },
            { id: "B", text: "$\\frac{3}{20}$" },
            { id: "C", text: "$\\frac{13}{20}$" },
            { id: "D", text: "$\\frac{8}{20}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Adding Fractions with Different Denominators**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** $\\frac{2}{5} + \\frac{1}{4} = \\frac{8}{20} + \\frac{5}{20} = \\frac{13}{20}$.\n\n**The Full Solution:**\nLCD of $5$ and $4$ is $20$.\n$\\frac{2}{5} = \\frac{8}{20}$ and $\\frac{1}{4} = \\frac{5}{20}$.\n$\\frac{8}{20} + \\frac{5}{20} = \\frac{13}{20}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{3}{9}$): Adds numerators and denominators separately: $\\frac{2+1}{5+4}$.\n• Choice B ($\\frac{3}{20}$): Adds $2 + 1 = 3$ but uses the correct LCD.\n• Choice D ($\\frac{8}{20}$): Only converts $\\frac{2}{5}$ and forgets to add $\\frac{1}{4}$.\n\n**Test Day Takeaway:** To add fractions, find the LCD, convert both fractions, then add the numerators.",
          skills: ["algebraic-manipulation", "solving-equations"]
        },
        {
          id: 14,
          type: "fill-in",
          difficulty: "medium",
          question: "A line in the $xy$-plane passes through the point $(3, -2)$ and has slope $4$. What is the $y$-intercept of this line?",
          correctAnswer: "-14",
          explanation: "**SAT Pattern: Finding y-Intercept from Slope and a Point**\n\n**The correct answer is $-14$.**\n\n**The Fast Way (15 seconds):** $y = mx + b$. $-2 = 4(3) + b$. $-2 = 12 + b$. $b = -14$.\n\n**The Full Solution:**\nUsing slope-intercept form:\n$y = 4x + b$\nSubstitute $(3, -2)$: $-2 = 4(3) + b = 12 + b$\n$b = -2 - 12 = -14$\n\n**Common Mistakes to Avoid:**\n• Sign error: $-2 - 12 = -14$, not $-10$ or $10$.\n• Computing $-2 + 12 = 10$ instead of $-2 - 12 = -14$.\n\n**Verification:** $y = 4(3) - 14 = 12 - 14 = -2$ ✓\n\n**Test Day Takeaway:** Plug the point and slope into $y = mx + b$ and solve for $b$.",
          skills: ["linear-functions", "slope"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A sample of $300$ patients in a medical study showed that $42\\%$ responded positively to a treatment. The margin of error is $\\pm 5\\%$. Which conclusion is best supported?",
          choices: [
            { id: "A", text: "Exactly $42\\%$ of all patients will respond positively" },
            { id: "B", text: "Between $37\\%$ and $47\\%$ of the population is plausibly in the response range" },
            { id: "C", text: "At least $42\\%$ of patients will respond positively" },
            { id: "D", text: "The treatment works for $42\\%$ of people with certainty" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Interpreting Margin of Error**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $42\\% \\pm 5\\% = [37\\%, 47\\%]$. The confidence interval is $37\\%$ to $47\\%$.\n\n**The Full Solution:**\nSample statistic: $42\\%$.\nMargin of error: $\\pm 5\\%$.\nConfidence interval: $42 - 5 = 37\\%$ to $42 + 5 = 47\\%$.\n\n**Why the wrong answers are tempting:**\n• Choice A: A sample gives an estimate, not an exact population value.\n• Choice C: The interval is two-sided; the true value could be below $42\\%$.\n• Choice D: No study gives certainty — only a plausible range.\n\n**Test Day Takeaway:** Sample statistic $\\pm$ margin of error $=$ confidence interval for the population parameter.",
          skills: ["margin-of-error", "statistics"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $f(x) = x^2 - 2x - 8$ is equivalent to which of the following?",
          choices: [
            { id: "A", text: "$f(x) = (x - 1)^2 - 9$" },
            { id: "B", text: "$f(x) = (x - 1)^2 - 7$" },
            { id: "C", text: "$f(x) = (x - 2)^2 - 12$" },
            { id: "D", text: "$f(x) = (x + 2)^2 - 8$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Completing the Square**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** $x^2 - 2x - 8 = (x^2 - 2x + 1) - 1 - 8 = (x - 1)^2 - 9$.\n\n**The Full Solution:**\nComplete the square:\n$x^2 - 2x - 8$\n$= (x^2 - 2x + 1) - 1 - 8$\n$= (x - 1)^2 - 9$\n\nHalf of $-2$ is $-1$, squared is $1$. Add and subtract $1$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($(x-1)^2 - 7$): Subtracts only $1$ from $-8$ instead of adding $1$ inside and subtracting $1$ outside.\n• Choice C ($(x-2)^2 - 12$): Uses half of $-2$ as $-2$ instead of $-1$.\n• Choice D ($(x+2)^2 - 8$): Wrong sign in the binomial.\n\n**Verification:** $(x-1)^2 - 9 = x^2 - 2x + 1 - 9 = x^2 - 2x - 8$ ✓\n\n**Test Day Takeaway:** To complete the square for $x^2 + bx$: add $(b/2)^2$ inside, subtract it outside.",
          skills: ["vertex-form", "quadratic-functions"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The circle $(x + 2)^2 + (y - 5)^2 = 36$ has center $(h, k)$ and radius $r$. What is the value of $h + k + r$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$7$" },
            { id: "C", text: "$9$" },
            { id: "D", text: "$39$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Reading Circle Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Center: $(-2, 5)$ so $h = -2$, $k = 5$. Radius: $\\sqrt{36} = 6$. Sum: $-2 + 5 + 6 = 9$.\n\n**The Full Solution:**\n$(x + 2)^2 + (y - 5)^2 = 36$\n$(x - (-2))^2 + (y - 5)^2 = 6^2$\nCenter: $(-2, 5)$, so $h = -2$ and $k = 5$.\nRadius: $r = 6$.\n$h + k + r = -2 + 5 + 6 = 9$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): $h + k = -2 + 5 = 3$ (forgets to add $r$).\n• Choice B ($7$): Uses $h = 2$ instead of $h = -2$: $2 + 5 = 7$ (sign error).\n• Choice D ($39$): Uses $r = 36$ instead of $r = 6$ (forgets the square root): $-2 + 5 + 36 = 39$.\n\n**Test Day Takeaway:** $(x - h)^2 + (y - k)^2 = r^2$. Watch the signs: $(x + 2)^2$ means $h = -2$, not $2$.",
          skills: ["circle-equations", "coordinate-geometry"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "If $3^{2x} = 81$, what is the value of $x$?",
          correctAnswer: "2",
          explanation: "**SAT Pattern: Exponential Equation with Same Base**\n\n**The correct answer is $2$.**\n\n**The Fast Way (10 seconds):** $81 = 3^4$. So $3^{2x} = 3^4$ and $2x = 4$, meaning $x = 2$.\n\n**The Full Solution:**\n$3^{2x} = 81$\n$3^{2x} = 3^4$\n$2x = 4$\n$x = 2$\n\n**Common Mistakes to Avoid:**\n• Reporting $2x = 4$ and answering $4$ instead of $x = 2$.\n• Thinking $81 = 3^3$ (actually $3^3 = 27$).\n\n**Verification:** $3^{2(2)} = 3^4 = 81$ ✓\n\n**Test Day Takeaway:** Express both sides with the same base, then set the exponents equal. Know your powers: $3^1=3, 3^2=9, 3^3=27, 3^4=81$.",
          skills: ["exponent-rules", "exponential-functions"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A rectangular painting has an area of $x^2 + 7x + 12$ square inches. Which of the following could be the dimensions of the painting?",
          choices: [
            { id: "A", text: "$(x + 2)$ by $(x + 6)$" },
            { id: "B", text: "$(x + 3)$ by $(x + 4)$" },
            { id: "C", text: "$(x + 1)$ by $(x + 12)$" },
            { id: "D", text: "$(x + 6)$ by $(x + 2)$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Factoring a Quadratic for Dimensions**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Factor $x^2 + 7x + 12$. Find two numbers that multiply to $12$ and add to $7$: $3$ and $4$.\n$x^2 + 7x + 12 = (x + 3)(x + 4)$.\n\n**The Full Solution:**\n$x^2 + 7x + 12$\nWe need two numbers that multiply to $12$ and add to $7$.\n$3 \\times 4 = 12$ ✓ and $3 + 4 = 7$ ✓.\n$(x + 3)(x + 4)$\n\n**Why the wrong answers are tempting:**\n• Choice A ($(x+2)(x+6)$): $2 \\times 6 = 12$ ✓ but $2 + 6 = 8 \\neq 7$.\n• Choice C ($(x+1)(x+12)$): $1 \\times 12 = 12$ ✓ but $1 + 12 = 13 \\neq 7$.\n• Choice D: Same as A with factors reordered.\n\n**Verification:** $(x+3)(x+4) = x^2 + 4x + 3x + 12 = x^2 + 7x + 12$ ✓\n\n**Test Day Takeaway:** To factor $x^2 + bx + c$, find two numbers that multiply to $c$ and add to $b$.",
          skills: ["factoring", "quadratic-equations"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "An ocean wave travels $1{,}500$ meters in $t$ seconds. A second wave travels at $\\frac{2}{3}$ the speed of the first wave. Which expression gives the distance the second wave travels in $t$ seconds?",
          choices: [
            { id: "A", text: "$1{,}000$ meters" },
            { id: "B", text: "$\\frac{2t}{3}$ meters" },
            { id: "C", text: "$\\frac{2{,}250}{t}$ meters" },
            { id: "D", text: "$\\frac{3{,}000}{t}$ meters" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Fraction of a Distance**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** First wave speed $= 1{,}500/t$. Second wave speed $= \\frac{2}{3} \\times \\frac{1{,}500}{t} = \\frac{1{,}000}{t}$.\nDistance in $t$ seconds $= \\frac{1{,}000}{t} \\times t = 1{,}000$ meters.\n\n**The Full Solution:**\nFirst wave: $1{,}500$ meters in $t$ seconds. Speed $= 1{,}500/t$.\nSecond wave speed $= \\frac{2}{3} \\times \\frac{1{,}500}{t} = \\frac{1{,}000}{t}$.\nDistance of second wave in $t$ seconds $= \\frac{1{,}000}{t} \\times t = 1{,}000$ meters.\n\n**Why the wrong answers are tempting:**\n• Choice B ($\\frac{2t}{3}$): Applies $\\frac{2}{3}$ to $t$ instead of the speed.\n• Choice C ($\\frac{2{,}250}{t}$): Multiplies $1{,}500$ by $\\frac{3}{2}$ instead of $\\frac{2}{3}$.\n• Choice D ($\\frac{3{,}000}{t}$): Doubles the first wave distance and divides by $t$.\n\n**Test Day Takeaway:** If the second object moves at a fraction of the first object's speed for the same time, it covers that fraction of the distance.",
          skills: ["ratios-proportions", "word-problems"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "The expression $(3x^2 + 5x - 2) - (x^2 - 3x + 4)$ is equivalent to $ax^2 + bx + c$. What is the value of $b$?",
          correctAnswer: "8",
          explanation: "**SAT Pattern: Subtracting Polynomials**\n\n**The correct answer is $8$.**\n\n**The Fast Way (20 seconds):** Distribute the negative:\n$(3x^2 + 5x - 2) - (x^2 - 3x + 4) = 3x^2 + 5x - 2 - x^2 + 3x - 4 = 2x^2 + 8x - 6$.\nSo $b = 8$.\n\n**The Full Solution:**\n$3x^2 + 5x - 2 - x^2 + 3x - 4$\n$= (3x^2 - x^2) + (5x + 3x) + (-2 - 4)$\n$= 2x^2 + 8x - 6$\n\nSo $a = 2$, $b = 8$, $c = -6$.\n\n**Common Mistakes to Avoid:**\n• Forgetting to distribute the negative: $5x - 3x = 2x$ instead of $5x + 3x = 8x$.\n• Sign error on the constant: $-2 + 4 = 2$ instead of $-2 - 4 = -6$.\n\n**Verification:** $(3x^2 + 5x - 2) - (x^2 - 3x + 4) = 2x^2 + 8x - 6$ ✓\n\n**Test Day Takeaway:** When subtracting polynomials, distribute the negative sign to EVERY term in the second polynomial.",
          skills: ["polynomial-operations", "algebraic-manipulation"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation $5x^2 + bx - 20 = 0$ has solutions $x = 2$ and $x = -2$. What is the value of $b$?",
          choices: [
            { id: "A", text: "$-10$" },
            { id: "B", text: "$0$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$10$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Using a Known Root to Find a Coefficient**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Substitute $x = 2$: $5(4) + 2b - 20 = 0$, so $20 + 2b - 20 = 0$ and $2b = 0$, meaning $b = 0$.\n\n**The Full Solution:**\nSubstitute $x = 2$ into $5x^2 + bx - 20 = 0$:\n$5(4) + b(2) - 20 = 0$\n$20 + 2b - 20 = 0$\n$2b = 0$\n$b = 0$\n\nVerify with $x = -2$: $5(4) + 0(-2) - 20 = 20 - 20 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n• Choice A ($-10$): From $5 \\times (-2) = -10$.\n• Choice C ($5$): The leading coefficient.\n• Choice D ($10$): From $5 \\times 2 = 10$.\n\n**Alternative approach:** The roots are $2$ and $-2$, so the equation factors as $5(x - 2)(x + 2) = 5(x^2 - 4) = 5x^2 - 20$. The $x$-coefficient is $0$, confirming $b = 0$.\n\n**Test Day Takeaway:** If you know a root, substitute it into the equation and solve for the unknown coefficient.",
          skills: ["quadratic-equations", "solving-equations"]
        }
      ]
    }
  ]
};

export default practiceTest6;
