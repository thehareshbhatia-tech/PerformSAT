// Practice Test 10 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Contexts: aviation, marine biology, bakeries, movie theaters

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
        // ===== EASY (Q1-Q5) =====
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A bakery surveyed $240$ customers about their favorite muffin flavor. The results are shown in the table.\n\n| Flavor | Number of Customers |\n|---|---|\n| Blueberry | $84$ |\n| Chocolate | $60$ |\n| Lemon | $48$ |\n| Banana | $48$ |\n| **Total** | **$240$** |\n\nWhat fraction of the customers chose blueberry?",
          choices: [
            { id: "A", text: "$\\frac{1}{4}$" },
            { id: "B", text: "$\\frac{7}{20}$" },
            { id: "C", text: "$\\frac{1}{3}$" },
            { id: "D", text: "$\\frac{2}{5}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Reading a Data Table to Compute a Fraction**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $\\frac{84}{240}$. Simplify: $\\frac{84}{240} = \\frac{42}{120} = \\frac{21}{60} = \\frac{7}{20}$.\n\n**The Full Solution:**\nBlueberry $= 84$. Total $= 240$.\n$\\frac{84}{240} = \\frac{7}{20}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{1}{4} = \\frac{60}{240}$): This is the fraction for chocolate.\n• Choice C ($\\frac{1}{3} = \\frac{80}{240}$): Close to $84$ but not exact.\n• Choice D ($\\frac{2}{5} = \\frac{96}{240}$): Overestimates the blueberry count.\n\n**Test Day Takeaway:** Read the exact value from the table, then simplify the fraction. Don't estimate.",
          skills: ["ratios-proportions", "statistics"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A marine biologist recorded $f(t) = 200 + 15t$, where $f(t)$ is the number of fish in a coral reef $t$ months after the study began. What does the $200$ represent in this function?",
          choices: [
            { id: "A", text: "The increase in fish per month" },
            { id: "B", text: "The number of fish at the start of the study" },
            { id: "C", text: "The number of months in the study" },
            { id: "D", text: "The total number of fish after $200$ months" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Interpreting the $y$-intercept in a Linear Function**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** In $f(t) = 200 + 15t$, when $t = 0$, $f(0) = 200$. This is the starting value.\n\n**The Full Solution:**\nIn a linear function $f(t) = b + mt$:\n• $b$ is the $y$-intercept (the value when $t = 0$, i.e., the initial value)\n• $m$ is the slope (rate of change)\nHere $b = 200$, which represents the number of fish at $t = 0$, the start of the study.\n\n**Why the wrong answers are tempting:**\n• Choice A: The increase per month is $15$, not $200$.\n• Choice C: $t$ represents months; $200$ is a fish count, not a time.\n• Choice D: To find fish after $200$ months, compute $f(200) = 200 + 15(200) = 3{,}200$.\n\n**Test Day Takeaway:** The constant term in $f(t) = b + mt$ is the initial value (when $t = 0$). The coefficient of $t$ is the rate.",
          skills: ["linear-functions", "function-interpretation"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A pilot earns $8$ more than $5$ times the number of flight hours completed in a week. If the pilot completed $h$ flight hours, which expression represents the pilot's weekly pay in hundreds of dollars?",
          choices: [
            { id: "A", text: "$8h + 5$" },
            { id: "B", text: "$5h + 8$" },
            { id: "C", text: "$5(h + 8)$" },
            { id: "D", text: "$8(h + 5)$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Translating Words to an Algebraic Expression**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** \"$5$ times $h$\" $= 5h$. \"$8$ more than that\" $= 5h + 8$.\n\n**The Full Solution:**\nParse step by step:\n• \"$5$ times the number of flight hours\" $\\rightarrow 5h$\n• \"$8$ more than $5h$\" $\\rightarrow 5h + 8$\n\n**Why the wrong answers are tempting:**\n• Choice A ($8h + 5$): Swaps the multiplier and the addend.\n• Choice C ($5(h + 8)$): Puts the $8$ inside the multiplication, giving $5h + 40$ instead of $5h + 8$.\n• Choice D ($8(h + 5)$): Reverses everything.\n\n**Test Day Takeaway:** \"$k$ more than\" means $+ k$ (added after). \"$k$ times\" means $\\times k$ (multiplied first).",
          skills: ["word-problems", "linear-equations"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A movie theater tracked daily ticket sales for $5$ days. The results are shown below.\n\n| Day | Tickets Sold |\n|---|---|\n| Monday | $85$ |\n| Tuesday | $120$ |\n| Wednesday | $95$ |\n| Thursday | $110$ |\n| Friday | $190$ |\n\nHow many more tickets were sold on Friday than on Tuesday?",
          choices: [
            { id: "A", text: "$30$" },
            { id: "B", text: "$70$" },
            { id: "C", text: "$80$" },
            { id: "D", text: "$105$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Reading and Comparing Data from a Table**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Friday $= 190$, Tuesday $= 120$. Difference $= 190 - 120 = 70$.\n\n**The Full Solution:**\nFrom the table: Friday tickets $= 190$, Tuesday tickets $= 120$.\nDifference $= 190 - 120 = 70$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($30$): Difference between Thursday and Wednesday ($110 - 95 = 15$) or another pair.\n• Choice C ($80$): Difference between Friday and Thursday ($190 - 110 = 80$) — wrong pair.\n• Choice D ($105$): Difference between Friday and Monday ($190 - 85 = 105$) — wrong pair.\n\n**Test Day Takeaway:** Read the correct values from the table before computing. Misreading the row is the most common error.",
          skills: ["word-problems", "statistics"]
        },
        // ===== EASY-MEDIUM (Q5-Q7) =====
        {
          id: 5,
          type: "fill-in",
          difficulty: "easy",
          question: "A bakery sells $6$ cupcakes per box at $\\$4$ per cupcake. A customer buys $5$ boxes and uses a $\\$15$ coupon. What is the total amount paid, in dollars?",
          correctAnswer: "105",
          explanation: "**SAT Pattern: Multi-Step Arithmetic Word Problem**\n\n**The correct answer is $105$.**\n\n**The Fast Way (15 seconds):** Total before coupon: $5 \\times 6 \\times 4 = 120$. After coupon: $120 - 15 = 105$.\n\n**The Full Solution:**\nCupcakes per box $= 6$. Boxes $= 5$. Total cupcakes $= 30$.\nCost $= 30 \\times 4 = 120$.\nAfter coupon: $120 - 15 = 105$.\n\n**Common Mistakes to Avoid:**\n• Forgetting the coupon: answering $120$.\n• Computing $5 \\times 4 = 20$ (forgetting the $6$ cupcakes per box).\n• Subtracting incorrectly: $120 - 15 = 115$.\n\n**Verification:** $5$ boxes $\\times$ $6$ cupcakes $= 30$ cupcakes. $30 \\times \\$4 = \\$120$. $\\$120 - \\$15 = \\$105$ ✓\n\n**Test Day Takeaway:** Break multi-step problems into clear stages: find the total, then apply adjustments.",
          skills: ["word-problems"]
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The function $g(x) = 2(x - 7)(x + 3)(x + 1)$ is graphed in the $xy$-plane. Which of the following is an $x$-intercept of the graph?",
          choices: [
            { id: "A", text: "$(2, 0)$" },
            { id: "B", text: "$(7, 0)$" },
            { id: "C", text: "$(-7, 0)$" },
            { id: "D", text: "$(3, 0)$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: $x$-intercepts from Factored Form**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Set each factor to zero: $x - 7 = 0 \\Rightarrow x = 7$, $x + 3 = 0 \\Rightarrow x = -3$, $x + 1 = 0 \\Rightarrow x = -1$. The $x$-intercepts are $(7, 0)$, $(-3, 0)$, $(-1, 0)$. Only $(7, 0)$ is a choice.\n\n**The Full Solution:**\n$g(x) = 0$ when any factor equals zero:\n$x - 7 = 0 \\Rightarrow x = 7$\n$x + 3 = 0 \\Rightarrow x = -3$\n$x + 1 = 0 \\Rightarrow x = -1$\nThe point $(7, 0)$ matches Choice B.\n\n**Why the wrong answers are tempting:**\n• Choice A ($(2, 0)$): The leading coefficient $2$ is not a root.\n• Choice C ($(-7, 0)$): Sign error — the factor is $(x - 7)$, giving $x = 7$, not $x = -7$.\n• Choice D ($(3, 0)$): Sign error — the factor is $(x + 3)$, giving $x = -3$, not $x = 3$.\n\n**Test Day Takeaway:** For $(x - a)$, the root is $x = a$ (positive). For $(x + a)$, the root is $x = -a$ (negative). Watch the signs.",
          skills: ["polynomial-operations", "factoring"]
        },
        {
          id: 7,
          type: "fill-in",
          difficulty: "medium",
          question: "The equation $m^2 - 17 = 64$ is true for $m > 0$. What is the value of $m$?",
          correctAnswer: "9",
          explanation: "**SAT Pattern: Solving a Quadratic for a Positive Root**\n\n**The correct answer is $9$.**\n\n**The Fast Way (10 seconds):** $m^2 = 64 + 17 = 81$. Since $m > 0$, $m = \\sqrt{81} = 9$.\n\n**The Full Solution:**\n$m^2 - 17 = 64$\n$m^2 = 81$\n$m = \\pm 9$\nSince $m > 0$, $m = 9$.\n\n**Common Mistakes to Avoid:**\n• Computing $64 - 17 = 47$ instead of $64 + 17 = 81$.\n• Answering $81$ (that is $m^2$, not $m$).\n• Answering $-9$ (violates $m > 0$).\n\n**Verification:** $9^2 - 17 = 81 - 17 = 64$ ✓\n\n**Test Day Takeaway:** Isolate the squared term first, then take the square root. Check whether the problem restricts to positive values.",
          skills: ["quadratic-equations", "solving-equations"]
        },

        // ===== MEDIUM (Q8-Q13) =====
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A bakery sells cupcakes for $\\$3.50$ each and cookies for $\\$2$ each. A customer buys a total of $12$ items and spends $\\$33$. How many cupcakes did the customer buy?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$10$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: System of Linear Equations**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Let $c$ be cupcakes. Then cookies $= 12 - c$. So $3.50c + 2(12 - c) = 33$. That gives $3.50c + 24 - 2c = 33$, so $1.50c = 9$, and $c = 6$.\n\n**The Full Solution:**\nLet $c =$ cupcakes, $k =$ cookies.\n$c + k = 12$\n$3.50c + 2k = 33$\nFrom the first equation: $k = 12 - c$.\nSubstitute: $3.50c + 2(12 - c) = 33$\n$3.50c + 24 - 2c = 33$\n$1.50c = 9$\n$c = 6$\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): $3.50(4) + 2(8) = 14 + 16 = 30 \\neq 33$.\n• Choice C ($8$): $3.50(8) + 2(4) = 28 + 8 = 36 \\neq 33$.\n• Choice D ($10$): $3.50(10) + 2(2) = 35 + 4 = 39 \\neq 33$.\n\n**Test Day Takeaway:** For \"total items\" and \"total cost\" problems, set up two equations and substitute.",
          skills: ["systems-of-equations", "word-problems"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A line has slope $-\\frac{2}{3}$ and passes through the point $(6, 1)$. What is the equation of this line in slope-intercept form?",
          choices: [
            { id: "A", text: "$y = -\\frac{2}{3}x - 3$" },
            { id: "B", text: "$y = -\\frac{2}{3}x + 5$" },
            { id: "C", text: "$y = -\\frac{2}{3}x + 7$" },
            { id: "D", text: "$y = -\\frac{2}{3}x + 1$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Equation of a Line from Slope and Point**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** $y = mx + b$: $1 = -\\frac{2}{3}(6) + b = -4 + b$, so $b = 5$. Equation: $y = -\\frac{2}{3}x + 5$.\n\n**The Full Solution:**\nPlug $(6, 1)$ and $m = -\\frac{2}{3}$ into $y = mx + b$:\n$1 = -\\frac{2}{3}(6) + b$\n$1 = -4 + b$\n$b = 5$\nEquation: $y = -\\frac{2}{3}x + 5$\n\n**Why the wrong answers are tempting:**\n• Choice A ($y = -\\frac{2}{3}x - 3$): From $1 - \\frac{2}{3}(6) = 1 - 4 = -3$, computing the wrong expression.\n• Choice C ($y = -\\frac{2}{3}x + 7$): From $1 + 6 = 7$.\n• Choice D ($y = -\\frac{2}{3}x + 1$): Uses the $y$-coordinate directly as the intercept.\n\n**Test Day Takeaway:** Plug the point into $y = mx + b$ and solve for $b$. Don't confuse the $y$-coordinate of a point with the $y$-intercept.",
          skills: ["slope", "linear-equations"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "At a movie theater, $120$ people were surveyed about their snack preference. The results are shown in the table.\n\n| | Popcorn | Candy | Total |\n|---|---|---|---|\n| Adults | $35$ | $25$ | $60$ |\n| Children | $40$ | $20$ | $60$ |\n| Total | $75$ | $45$ | $120$ |\n\nOf the children surveyed, what fraction preferred candy?",
          choices: [
            { id: "A", text: "$\\frac{20}{120}$" },
            { id: "B", text: "$\\frac{20}{45}$" },
            { id: "C", text: "$\\frac{20}{60}$" },
            { id: "D", text: "$\\frac{60}{120}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Conditional Probability from a Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** \"Of the children\" restricts the denominator to total children $= 60$. Children who prefer candy $= 20$. Fraction $= \\frac{20}{60} = \\frac{1}{3}$.\n\n**The Full Solution:**\n$P(\\text{candy} | \\text{child}) = \\frac{20}{60} = \\frac{1}{3}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{20}{120}$): Uses the grand total as denominator — this is joint probability, not conditional.\n• Choice B ($\\frac{20}{45}$): Uses the candy column total as denominator — this answers \"of candy lovers, what fraction are children.\"\n• Choice D ($\\frac{60}{120}$): Fraction of all respondents who are children, ignoring snack preference.\n\n**Test Day Takeaway:** \"Of [group]\" means the denominator is that group's row or column total, not the grand total.",
          skills: ["probability", "two-way-tables"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "The equation $2(3x - 4) = 5x + 6$ is true for what value of $x$?",
          correctAnswer: "14",
          explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**The correct answer is $14$.**\n\n**The Fast Way (15 seconds):** $6x - 8 = 5x + 6$, so $x = 14$.\n\n**The Full Solution:**\n$2(3x - 4) = 5x + 6$\n$6x - 8 = 5x + 6$\n$6x - 5x = 6 + 8$\n$x = 14$\n\n**Common Mistakes to Avoid:**\n• Distributing incorrectly: $2(3x - 4) = 6x - 4$ (forgetting to multiply the $-4$ by $2$).\n\n**Verification:** $2(3(14) - 4) = 2(42 - 4) = 2(38) = 76$. $5(14) + 6 = 70 + 6 = 76$. Both sides equal $76$.\n\n**Test Day Takeaway:** Distribute first, then collect variable terms on one side and constants on the other.",
          skills: ["linear-equations", "solving-equations"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A survey of $500$ airline passengers found that $68\\%$ preferred aisle seats, with a margin of error of $4\\%$. Which of the following is the best interpretation of this result?",
          choices: [
            { id: "A", text: "Exactly $68\\%$ of all airline passengers prefer aisle seats." },
            { id: "B", text: "Between $64\\%$ and $72\\%$ of the surveyed passengers prefer aisle seats." },
            { id: "C", text: "It is plausible that between $64\\%$ and $72\\%$ of all airline passengers prefer aisle seats." },
            { id: "D", text: "At most $72\\%$ of all airline passengers prefer aisle seats." }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Margin of Error Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Margin of error creates a confidence interval: $68\\% \\pm 4\\% = [64\\%, 72\\%]$. This estimates the population parameter, not the sample.\n\n**The Full Solution:**\nThe margin of error means the true population percentage is plausibly between $64\\%$ and $72\\%$. It applies to the entire population, not just the sample.\n\n**Why the wrong answers are tempting:**\n• Choice A: \"Exactly\" is too precise; statistics gives a range.\n• Choice B: The margin of error applies to the population, not the sample (the sample is already measured).\n• Choice D: The interval is two-sided, not just an upper bound.\n\n**Test Day Takeaway:** Margin of error gives a range for the population percentage, not the sample.",
          skills: ["margin-of-error", "statistics"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is equivalent to $(2x + 5)(x - 3)$?",
          choices: [
            { id: "A", text: "$2x^2 - x - 15$" },
            { id: "B", text: "$2x^2 + x - 15$" },
            { id: "C", text: "$2x^2 - 11x - 15$" },
            { id: "D", text: "$2x^2 - x + 15$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: FOIL / Expanding Binomials**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** $(2x+5)(x-3) = 2x^2 - 6x + 5x - 15 = 2x^2 - x - 15$.\n\n**The Full Solution:**\nF: $2x \\cdot x = 2x^2$\nO: $2x \\cdot (-3) = -6x$\nI: $5 \\cdot x = 5x$\nL: $5 \\cdot (-3) = -15$\nCombine: $2x^2 - 6x + 5x - 15 = 2x^2 - x - 15$\n\n**Why the wrong answers are tempting:**\n• Choice B ($2x^2 + x - 15$): Gets $+x$ from $6x - 5x$ instead of $-6x + 5x$.\n• Choice C ($2x^2 - 11x - 15$): Adds $-6x$ and $-5x$ (wrong sign on $5x$).\n• Choice D ($2x^2 - x + 15$): Wrong sign on the constant.\n\n**Test Day Takeaway:** FOIL carefully: watch the signs, especially when the leading coefficient is not $1$.",
          skills: ["polynomial-operations", "factoring"]
        },
        // ===== HARD (Q14-Q15) =====
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Two parallel lines are cut by a transversal. One of the angles formed measures $(3x + 10)°$ and a co-interior angle measures $(5x - 30)°$. What is the value of $x$?",
          choices: [
            { id: "A", text: "$20$" },
            { id: "B", text: "$25$" },
            { id: "C", text: "$30$" },
            { id: "D", text: "$35$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Parallel Lines with Algebraic Angle Measures**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Co-interior angles (same-side interior) are supplementary: $(3x + 10) + (5x - 30) = 180$. So $8x - 20 = 180$, $8x = 200$, $x = 25$.\n\n**The Full Solution:**\nCo-interior angles sum to $180°$:\n$(3x + 10) + (5x - 30) = 180$\n$8x - 20 = 180$\n$8x = 200$\n$x = 25$\n\n**Why the wrong answers are tempting:**\n• Choice A ($20$): From $8x = 160$ (using $180 - 20 = 160$ erroneously).\n• Choice C ($30$): From setting the angles equal instead of supplementary.\n• Choice D ($35$): From $8x + 20 = 300$ or another setup error.\n\n**Verification:** $(3(25) + 10)° = 85°$ and $(5(25) - 30)° = 95°$. $85° + 95° = 180°$ ✓\n\n**Test Day Takeaway:** Co-interior (same-side interior) angles sum to $180°$. Alternate interior angles are equal. Know which relationship to use.",
          skills: ["parallel-lines", "angles", "linear-equations"]
        },
        {
          id: 15,
          type: "fill-in",
          difficulty: "hard",
          question: "The function $f$ is defined by $f(x) = 3x^2 - 12x + 7$. What is the minimum value of $f(x)$?",
          correctAnswer: "-5",
          explanation: "**SAT Pattern: Minimum Value of a Quadratic**\n\n**The correct answer is $-5$.**\n\n**The Fast Way (20 seconds):** $x = \\frac{-b}{2a} = \\frac{12}{6} = 2$. $f(2) = 3(4) - 12(2) + 7 = 12 - 24 + 7 = -5$.\n\n**The Full Solution:**\nSince $a = 3 > 0$, the parabola opens upward, so the vertex is a minimum.\nVertex $x$-coordinate: $x = \\frac{-(-12)}{2(3)} = \\frac{12}{6} = 2$\nMinimum value: $f(2) = 3(2)^2 - 12(2) + 7 = 12 - 24 + 7 = -5$\n\n**Common Mistakes to Avoid:**\n• Reporting $x = 2$ instead of $f(2) = -5$ — the question asks for the minimum value of $f(x)$, not the $x$ where it occurs.\n• Computing $f(2) = 12 - 24 + 7 = -19$ from an arithmetic error.\n\n**Verification:** $f(1) = 3 - 12 + 7 = -2$. $f(3) = 27 - 36 + 7 = -2$. Both neighbors are $-2 > -5$, confirming $-5$ is the minimum ✓\n\n**Test Day Takeaway:** For a quadratic $ax^2 + bx + c$ with $a > 0$, the minimum value is $f\\left(\\frac{-b}{2a}\\right)$.",
          skills: ["quadratic-functions", "vertex-form"]
        },

        // ===== HARD (Q16-Q22) =====
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation $x^2 - 6x + k = 0$ has exactly one real solution. What is the value of $k$?",
          choices: [
            { id: "A", text: "$-9$" },
            { id: "B", text: "$0$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$9$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Discriminant = 0 for One Solution**\n\n**Choice D is correct.**\n\n**The Fast Way (20 seconds):** For exactly one solution, the discriminant $= 0$: $b^2 - 4ac = 0$. Here $(-6)^2 - 4(1)(k) = 0$, so $36 - 4k = 0$, giving $k = 9$.\n\n**The Full Solution:**\nFor $ax^2 + bx + c = 0$ with $a = 1$, $b = -6$, $c = k$:\n$\\Delta = b^2 - 4ac = 36 - 4k$\nFor one solution: $36 - 4k = 0$\n$4k = 36$\n$k = 9$\n\n**Why the wrong answers are tempting:**\n• Choice A ($-9$): Uses the wrong sign.\n• Choice B ($0$): Assumes the constant must be $0$.\n• Choice C ($6$): Confuses $k$ with $b$.\n\n**Test Day Takeaway:** Exactly one real solution means discriminant $= 0$: $b^2 - 4ac = 0$.",
          skills: ["discriminant", "quadratic-equations"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $f(x) = (x - 3)^2 - 16$ can be written as $f(x) = (x - a)(x - b)$, where $a < b$. What is the value of $b$?",
          choices: [
            { id: "A", text: "$-1$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$7$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Vertex Form to Factored Form**\n\n**Choice D is correct.**\n\n**The Fast Way (30 seconds):** Set $f(x) = 0$: $(x-3)^2 = 16$, so $x - 3 = \\pm 4$. Thus $x = -1$ or $x = 7$. Since $a < b$, $b = 7$.\n\n**The Full Solution:**\n$(x - 3)^2 - 16 = 0$\n$(x - 3)^2 = 16$\n$x - 3 = \\pm 4$\n$x = 3 + 4 = 7$ or $x = 3 - 4 = -1$\nSo $f(x) = (x - (-1))(x - 7) = (x + 1)(x - 7)$. Since $a < b$: $a = -1$, $b = 7$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($-1$): This is $a$, not $b$.\n• Choice B ($3$): This is the $x$-coordinate of the vertex.\n• Choice C ($4$): This is the value added/subtracted from $3$, not a root.\n\n**Test Day Takeaway:** To factor from vertex form, set equal to zero and take the square root of both sides.",
          skills: ["vertex-form", "factoring", "quadratic-functions"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "A marine biologist tracks a population of sea turtles. The population is modeled by $P(t) = 800(0.95)^t$, where $t$ is the number of years after $2020$. By what percent does the population decrease each year?",
          correctAnswer: "5",
          explanation: "**SAT Pattern: Exponential Decay Rate**\n\n**The correct answer is $5$.**\n\n**The Fast Way (10 seconds):** The base is $0.95 = 1 - 0.05$, so the decay rate is $5\\%$ per year.\n\n**The Full Solution:**\nIn $P(t) = 800(0.95)^t$, the base $0.95$ represents the fraction remaining each year.\nDecay rate $= 1 - 0.95 = 0.05 = 5\\%$.\n\n**Common Mistakes to Avoid:**\n• Answering $95$ (the percent remaining, not the percent lost).\n• Answering $0.05$ (the decimal, but the question asks for the percent).\n\n**Verification:** After $1$ year: $800(0.95) = 760$. Decrease $= 800 - 760 = 40$. $\\frac{40}{800} = 0.05 = 5\\%$.\n\n**Test Day Takeaway:** For $a(r)^t$, the percent change is $|1 - r| \\times 100$.",
          skills: ["exponential-functions", "percents"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation of a circle in the $xy$-plane is $x^2 + y^2 - 8x + 6y = 0$. What is the radius of the circle?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$10$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Completing the Square for Circles**\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** Complete the square: $(x^2 - 8x + 16) + (y^2 + 6y + 9) = 16 + 9 = 25$. So $(x-4)^2 + (y+3)^2 = 25$, and $r = \\sqrt{25} = 5$.\n\n**The Full Solution:**\n$x^2 - 8x + y^2 + 6y = 0$\n$(x^2 - 8x + 16) + (y^2 + 6y + 9) = 0 + 16 + 9$\n$(x - 4)^2 + (y + 3)^2 = 25$\n$r = 5$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): Half of the coefficient of $y$, but not the radius.\n• Choice B ($4$): Half of the coefficient of $x$.\n• Choice D ($10$): Uses $r^2 = 100$ or confuses coefficients.\n\n**Test Day Takeaway:** To find the radius from general form, complete the square for both $x$ and $y$.",
          skills: ["circle-equations", "circles"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "For what value of $c$ does the system of equations $y = 2x + 5$ and $y = x^2 + c$ have exactly one solution?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$7$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Linear-Quadratic System with One Intersection**\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** Set equal: $x^2 + c = 2x + 5$, so $x^2 - 2x + (c - 5) = 0$. For one solution: discriminant $= 0$. $(-2)^2 - 4(1)(c-5) = 0$, so $4 - 4c + 20 = 0$, giving $4c = 24$ and $c = 6$.\n\n**The Full Solution:**\n$x^2 + c = 2x + 5$\n$x^2 - 2x + (c - 5) = 0$\nDiscriminant: $b^2 - 4ac = 4 - 4(c - 5) = 4 - 4c + 20 = 24 - 4c$\nSet $= 0$: $24 - 4c = 0 \\Rightarrow c = 6$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): Discriminant $= 24 - 16 = 8 > 0$, which gives two solutions.\n• Choice B ($5$): Discriminant $= 24 - 20 = 4 > 0$, two solutions.\n• Choice D ($7$): Discriminant $= 24 - 28 = -4 < 0$, no solution.\n\n**Test Day Takeaway:** For a linear-quadratic system, set equal, rearrange to standard form, and use the discriminant.",
          skills: ["systems-of-equations", "discriminant", "quadratic-equations"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "A movie theater has $r$ rows of seats. Each row has $3$ more seats than the row in front of it. If the first row has $10$ seats and the last row has $40$ seats, how many rows are in the theater?",
          correctAnswer: "11",
          explanation: "**SAT Pattern: Arithmetic Sequence**\n\n**The correct answer is $11$.**\n\n**The Fast Way (15 seconds):** First term $= 10$, last term $= 40$, common difference $= 3$. Number of terms $= \\frac{40 - 10}{3} + 1 = \\frac{30}{3} + 1 = 10 + 1 = 11$.\n\n**The Full Solution:**\nThis is an arithmetic sequence: $a_n = a_1 + (n-1)d$\n$40 = 10 + (n-1)(3)$\n$30 = 3(n - 1)$\n$10 = n - 1$\n$n = 11$\n\n**Common Mistakes to Avoid:**\n• Getting $10$ by forgetting the $+1$ (the \"fencepost\" error).\n\n**Verification:** Row $11$: $10 + (11-1)(3) = 10 + 30 = 40$. Correct.\n\n**Test Day Takeaway:** Number of terms $= \\frac{\\text{last} - \\text{first}}{\\text{difference}} + 1$.",
          skills: ["word-problems", "algebraic-manipulation"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A right triangle has legs of lengths $a$ and $b$ and hypotenuse of length $c$. If $a = 5$ and $c = 13$, what is the area of the triangle?",
          choices: [
            { id: "A", text: "$24$" },
            { id: "B", text: "$30$" },
            { id: "C", text: "$32.5$" },
            { id: "D", text: "$60$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Pythagorean Theorem + Area**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** $b = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$. Area $= \\frac{1}{2}(5)(12) = 30$.\n\n**The Full Solution:**\n$a^2 + b^2 = c^2$\n$25 + b^2 = 169$\n$b^2 = 144$\n$b = 12$\nArea $= \\frac{1}{2}ab = \\frac{1}{2}(5)(12) = 30$\n\n**Why the wrong answers are tempting:**\n• Choice A ($24$): Computes $\\frac{1}{2}(5)(\\sqrt{169-25})$ incorrectly, perhaps using $b = \\sqrt{119}$ or a rounding error.\n• Choice C ($32.5$): Computes $\\frac{1}{2}(5)(13)$, using the hypotenuse instead of the missing leg.\n• Choice D ($60$): Forgets the $\\frac{1}{2}$ factor: $5 \\times 12 = 60$.\n\n**Test Day Takeaway:** The $5$-$12$-$13$ triple is a classic Pythagorean triple. Memorize common triples: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$.",
          skills: ["right-triangle-trig", "area", "triangles"]
        }
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
        // ===== EASY (Q1-Q5) =====
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "What is $20\\%$ of $150$?",
          choices: [
            { id: "A", text: "$20$" },
            { id: "B", text: "$30$" },
            { id: "C", text: "$35$" },
            { id: "D", text: "$75$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Basic Percentage**\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** $20\\%$ of $150 = \\frac{150}{5} = 30$.\n\n**The Full Solution:**\n$0.20 \\times 150 = 30$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($20$): Uses the percentage number itself.\n• Choice C ($35$): Confuses with a different calculation.\n• Choice D ($75$): Computes $50\\%$ of $150$.\n\n**Test Day Takeaway:** $20\\% = \\frac{1}{5}$, so divide by $5$.",
          skills: ["percents"]
        },
        {
          id: 2,
          type: "fill-in",
          difficulty: "easy",
          question: "$\\frac{3x}{15} = 12$. What is the value of $x$?",
          correctAnswer: "60",
          explanation: "**SAT Pattern: One-Variable Equation with Fraction**\n\n**The correct answer is $60$.**\n\n**The Fast Way (10 seconds):** $\\frac{3x}{15} = \\frac{x}{5} = 12$, so $x = 60$.\n\n**The Full Solution:**\n$\\frac{3x}{15} = 12$\nMultiply both sides by $15$: $3x = 180$\n$x = 60$\n\n**Common Mistakes to Avoid:**\n• Getting $x = 180$ by forgetting to divide by $3$.\n\n**Verification:** $\\frac{3(60)}{15} = \\frac{180}{15} = 12$. Correct.\n\n**Test Day Takeaway:** Multiply both sides by the denominator first, then solve.",
          skills: ["linear-equations", "solving-equations"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A bakery uses $4$ cups of flour for each batch of bread. How many cups of flour are needed for $9$ batches?",
          choices: [
            { id: "A", text: "$13$" },
            { id: "B", text: "$32$" },
            { id: "C", text: "$36$" },
            { id: "D", text: "$45$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Multiplication Word Problem**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $4 \\times 9 = 36$.\n\n**The Full Solution:**\nFlour needed $= 4 \\text{ cups/batch} \\times 9 \\text{ batches} = 36$ cups.\n\n**Why the wrong answers are tempting:**\n• Choice A ($13$): Adds $4 + 9$ instead of multiplying.\n• Choice B ($32$): Computes $4 \\times 8$.\n• Choice D ($45$): Computes $5 \\times 9$.\n\n**Test Day Takeaway:** Rate $\\times$ quantity $=$ total.",
          skills: ["word-problems", "ratios-proportions"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "$5$ more than $3$ times a number $n$ is equal to $26$. Which equation represents this situation?",
          choices: [
            { id: "A", text: "$5n + 3 = 26$" },
            { id: "B", text: "$3n + 5 = 26$" },
            { id: "C", text: "$3(n + 5) = 26$" },
            { id: "D", text: "$5(n + 3) = 26$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Translating Words to Equations**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** \"$3$ times a number\" $= 3n$. \"$5$ more than that\" $= 3n + 5$. Set equal to $26$: $3n + 5 = 26$.\n\n**The Full Solution:**\nParse the sentence: \"$5$ more than ($3$ times $n$)\" $= 3n + 5 = 26$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Swaps the coefficients, making it \"$3$ more than $5$ times $n$.\"\n• Choice C: Groups incorrectly, making it \"$3$ times ($n + 5$).\"\n• Choice D: Groups incorrectly with wrong coefficient.\n\n**Test Day Takeaway:** \"$k$ more than\" means $+ k$. \"$k$ times\" means $\\times k$. Build from the inside out.",
          skills: ["word-problems", "linear-equations"]
        },
        {
          id: 5,
          type: "fill-in",
          difficulty: "easy",
          question: "How many feet are in $8$ yards? ($1$ yard $= 3$ feet)",
          correctAnswer: "24",
          explanation: "**SAT Pattern: Unit Conversion**\n\n**The correct answer is $24$.**\n\n**The Fast Way (5 seconds):** $8 \\times 3 = 24$ feet.\n\n**The Full Solution:**\n$8 \\text{ yards} \\times \\frac{3 \\text{ feet}}{1 \\text{ yard}} = 24$ feet.\n\n**Common Mistakes to Avoid:**\n• Dividing instead of multiplying: $8 \\div 3 \\approx 2.67$.\n\n**Verification:** $24 \\div 3 = 8$ yards. Correct.\n\n**Test Day Takeaway:** When converting to a smaller unit, multiply.",
          skills: ["unit-conversion"]
        },

        // ===== MEDIUM (Q6-Q15) =====
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The mean of $5$ numbers is $18$. If one of the numbers is removed, the mean of the remaining $4$ numbers is $16$. What is the number that was removed?",
          choices: [
            { id: "A", text: "$20$" },
            { id: "B", text: "$22$" },
            { id: "C", text: "$26$" },
            { id: "D", text: "$34$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Mean and Total**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Sum of $5$ numbers $= 5 \\times 18 = 90$. Sum of remaining $4 = 4 \\times 16 = 64$. Removed number $= 90 - 64 = 26$.\n\n**The Full Solution:**\nTotal sum $= 5 \\times 18 = 90$\nSum after removal $= 4 \\times 16 = 64$\nRemoved number $= 90 - 64 = 26$\n\n**Why the wrong answers are tempting:**\n• Choice A ($20$): Guess based on being close to the mean.\n• Choice B ($22$): May add $18 + 4$ or make an arithmetic error.\n• Choice D ($34$): May compute $18 + 16 = 34$.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ total sum. Use this to find missing values.",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The equation of a line is $3x + 4y = 24$. What is the $x$-intercept of this line?",
          choices: [
            { id: "A", text: "$(6, 0)$" },
            { id: "B", text: "$(8, 0)$" },
            { id: "C", text: "$(0, 6)$" },
            { id: "D", text: "$(0, 8)$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Finding Intercepts**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Set $y = 0$: $3x = 24$, so $x = 8$. The $x$-intercept is $(8, 0)$.\n\n**The Full Solution:**\nThe $x$-intercept occurs where $y = 0$:\n$3x + 4(0) = 24$\n$3x = 24$\n$x = 8$\nSo the $x$-intercept is $(8, 0)$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($(6, 0)$): Divides $24$ by $4$ instead of $3$.\n• Choice C ($(0, 6)$): This is the $y$-intercept.\n• Choice D ($(0, 8)$): Confuses $x$- and $y$-intercepts and uses wrong coefficient.\n\n**Test Day Takeaway:** For the $x$-intercept, set $y = 0$. For the $y$-intercept, set $x = 0$.",
          skills: ["linear-equations", "coordinate-geometry"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "A movie theater sold adult tickets for $\\$12$ and child tickets for $\\$8$. If $45$ adult tickets and $30$ child tickets were sold, what was the total revenue, in dollars?",
          correctAnswer: "780",
          explanation: "**SAT Pattern: Total Revenue Calculation**\n\n**The correct answer is $780$.**\n\n**The Fast Way (15 seconds):** $12 \\times 45 + 8 \\times 30 = 540 + 240 = 780$.\n\n**The Full Solution:**\nAdult revenue $= 12 \\times 45 = 540$\nChild revenue $= 8 \\times 30 = 240$\nTotal $= 540 + 240 = 780$\n\n**Common Mistakes to Avoid:**\n• Confusing the prices with the quantities.\n• Adding only one part of the revenue.\n\n**Verification:** $\\$780 \\div 75$ total tickets $= \\$10.40$ average ticket price, which is between $\\$8$ and $\\$12$. Reasonable.\n\n**Test Day Takeaway:** Total revenue $=$ sum of (price $\\times$ quantity) for each item.",
          skills: ["word-problems"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $f(x) = x^2 - 4x + 3$, what are the solutions to $f(x) = 0$?",
          choices: [
            { id: "A", text: "$x = 1$ and $x = 3$" },
            { id: "B", text: "$x = -1$ and $x = -3$" },
            { id: "C", text: "$x = 1$ and $x = -3$" },
            { id: "D", text: "$x = 2$ and $x = 3$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Factoring Quadratics**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** $x^2 - 4x + 3 = (x - 1)(x - 3) = 0$, so $x = 1$ or $x = 3$.\n\n**The Full Solution:**\nFind two numbers that multiply to $3$ and add to $-4$: $-1$ and $-3$.\n$x^2 - 4x + 3 = (x - 1)(x - 3) = 0$\n$x = 1$ or $x = 3$\n\n**Why the wrong answers are tempting:**\n• Choice B: Sign errors; the factors are $(x-1)(x-3)$, not $(x+1)(x+3)$.\n• Choice C: Mixed signs from a factoring error.\n• Choice D: $2 \\times 3 = 6 \\neq 3$.\n\n**Test Day Takeaway:** For $x^2 + bx + c$, find two numbers that multiply to $c$ and add to $b$.",
          skills: ["factoring", "quadratic-equations"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In an aviation study, aircraft speed $s$ (in knots) is related to fuel burn rate $r$ (in gallons per hour) by the equation $r = 0.02s + 5$. What is the fuel burn rate when the speed is $250$ knots?",
          choices: [
            { id: "A", text: "$7.5$ gallons per hour" },
            { id: "B", text: "$10$ gallons per hour" },
            { id: "C", text: "$12.5$ gallons per hour" },
            { id: "D", text: "$55$ gallons per hour" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Evaluating a Linear Model**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $r = 0.02(250) + 5 = 5 + 5 = 10$.\n\n**The Full Solution:**\n$r = 0.02s + 5$\n$r = 0.02(250) + 5$\n$r = 5 + 5 = 10$ gallons per hour\n\n**Why the wrong answers are tempting:**\n• Choice A ($7.5$): Computes $0.01(250) + 5$.\n• Choice C ($12.5$): Computes $0.03(250) + 5$.\n• Choice D ($55$): Computes $0.2(250) + 5$, misplacing the decimal.\n\n**Test Day Takeaway:** Substitute the given value carefully and watch decimal placement.",
          skills: ["linear-functions", "function-evaluation"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A scatterplot shows a strong negative linear association between the number of hours of TV watched per day and test scores. Which of the following best describes this relationship?",
          choices: [
            { id: "A", text: "As hours of TV increase, test scores tend to increase." },
            { id: "B", text: "As hours of TV increase, test scores tend to decrease." },
            { id: "C", text: "Watching TV causes lower test scores." },
            { id: "D", text: "Test scores cause changes in TV watching habits." }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Interpreting Association vs. Causation**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** \"Negative linear association\" means as one variable increases, the other decreases. No causation can be inferred.\n\n**The Full Solution:**\nA negative association means the variables move in opposite directions. Choices C and D claim causation, which cannot be concluded from a scatterplot alone.\n\n**Why the wrong answers are tempting:**\n• Choice A: Describes a positive association, not negative.\n• Choice C: Confuses association with causation.\n• Choice D: Also confuses association with causation, and reverses the direction.\n\n**Test Day Takeaway:** Association $\\neq$ causation. Scatterplots show trends, not causes.",
          skills: ["scatterplots", "statistics"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $\\frac{x}{3} + \\frac{x}{6} = 5$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$6$" },
            { id: "B", text: "$10$" },
            { id: "C", text: "$15$" },
            { id: "D", text: "$30$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Equation with Fractions**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Multiply everything by $6$: $2x + x = 30$, so $3x = 30$, and $x = 10$.\n\n**The Full Solution:**\n$\\frac{x}{3} + \\frac{x}{6} = 5$\nMultiply by LCD $= 6$:\n$2x + x = 30$\n$3x = 30$\n$x = 10$\n\n**Why the wrong answers are tempting:**\n• Choice A ($6$): The LCD, not the solution.\n• Choice C ($15$): Computes $5 \\times 3$ incorrectly.\n• Choice D ($30$): Stops after clearing the fractions but forgets to divide by $3$.\n\n**Test Day Takeaway:** Clear fractions by multiplying by the LCD, then solve the simpler equation.",
          skills: ["solving-equations", "algebraic-manipulation"]
        },
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "In triangle $ABC$, angle $A$ measures $55°$ and angle $B$ measures $70°$. What is the measure, in degrees, of angle $C$?",
          correctAnswer: "55",
          explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**The correct answer is $55$.**\n\n**The Fast Way (5 seconds):** $180 - 55 - 70 = 55$.\n\n**The Full Solution:**\nThe sum of angles in a triangle is $180°$.\n$A + B + C = 180°$\n$55° + 70° + C = 180°$\n$C = 180° - 125° = 55°$\n\n**Common Mistakes to Avoid:**\n• Adding instead of subtracting: $55 + 70 = 125$ is the sum of the other two angles, not the answer.\n\n**Verification:** $55 + 70 + 55 = 180°$. Correct.\n\n**Test Day Takeaway:** Angles in a triangle always sum to $180°$.",
          skills: ["triangles", "angles"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is equivalent to $\\frac{4x^6}{2x^2}$?",
          choices: [
            { id: "A", text: "$2x^3$" },
            { id: "B", text: "$2x^4$" },
            { id: "C", text: "$4x^4$" },
            { id: "D", text: "$2x^8$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Exponent Rules with Division**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $\\frac{4}{2} = 2$ and $x^{6-2} = x^4$. So the answer is $2x^4$.\n\n**The Full Solution:**\n$\\frac{4x^6}{2x^2} = \\frac{4}{2} \\cdot \\frac{x^6}{x^2} = 2 \\cdot x^{6-2} = 2x^4$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2x^3$): Divides the exponent by $2$ instead of subtracting.\n• Choice C ($4x^4$): Forgets to divide the coefficients.\n• Choice D ($2x^8$): Adds exponents instead of subtracting.\n\n**Test Day Takeaway:** When dividing like bases, subtract the exponents: $\\frac{x^a}{x^b} = x^{a-b}$.",
          skills: ["exponent-rules"]
        },
        {
          id: 15,
          type: "fill-in",
          difficulty: "medium",
          question: "A marine biologist counts fish in two sections of a reef. Section A has $24$ fish and section B has $36$ fish. What is the ratio of fish in section A to section B, expressed as a decimal?",
          correctAnswer: "0.67",
          explanation: "**SAT Pattern: Ratio as a Decimal**\n\n**The correct answer is $0.67$ (or $\\frac{2}{3}$).**\n\n**The Fast Way (10 seconds):** $\\frac{24}{36} = \\frac{2}{3} \\approx 0.67$.\n\n**The Full Solution:**\nRatio $= \\frac{24}{36} = \\frac{2}{3} = 0.\\overline{6} \\approx 0.67$.\n\n**Common Mistakes to Avoid:**\n• Flipping the ratio: $\\frac{36}{24} = 1.5$.\n• Not simplifying: The fraction $\\frac{24}{36}$ simplifies to $\\frac{2}{3}$.\n\n**Verification:** $0.67 \\times 36 \\approx 24$. Correct.\n\n**Test Day Takeaway:** Ratio of A to B means $\\frac{A}{B}$. Be careful about order.",
          skills: ["ratios-proportions"]
        },

        // ===== HARD (Q16-Q22) =====
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $f(x) = 2x^2 - 12x + 22$, what is the minimum value of $f(x)$?",
          choices: [
            { id: "A", text: "$-4$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$22$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Minimum Value of a Quadratic**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** The vertex $x$-coordinate is $x = \\frac{-b}{2a} = \\frac{12}{4} = 3$. Then $f(3) = 2(9) - 12(3) + 22 = 18 - 36 + 22 = 4$.\n\n**The Full Solution:**\n$f(x) = 2x^2 - 12x + 22$\n$x_{\\text{vertex}} = \\frac{-(-12)}{2(2)} = \\frac{12}{4} = 3$\n$f(3) = 2(9) - 36 + 22 = 18 - 36 + 22 = 4$\n\nAlternatively, complete the square: $f(x) = 2(x^2 - 6x) + 22 = 2(x^2 - 6x + 9 - 9) + 22 = 2(x-3)^2 - 18 + 22 = 2(x-3)^2 + 4$.\nMinimum is $4$ when $x = 3$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($-4$): Sign error in the calculation.\n• Choice B ($3$): This is the $x$-value of the vertex, not the minimum $y$-value.\n• Choice D ($22$): This is $f(0)$, the $y$-intercept.\n\n**Test Day Takeaway:** For a quadratic with $a > 0$, the minimum value occurs at the vertex: $x = \\frac{-b}{2a}$.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $g(x) = 3(2)^x$ models a bacterial population. Which of the following describes how the population changes?",
          choices: [
            { id: "A", text: "The population increases by $2$ every hour." },
            { id: "B", text: "The population doubles every unit of time." },
            { id: "C", text: "The population triples every unit of time." },
            { id: "D", text: "The population increases by $200\\%$ every unit of time." }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Interpreting Exponential Functions**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** The base is $2$, which means the quantity is multiplied by $2$ each time period. That is doubling.\n\n**The Full Solution:**\n$g(x) = 3(2)^x$. The initial value is $3$ and the growth factor is $2$.\n$g(0) = 3$, $g(1) = 6$, $g(2) = 12$. Each value is double the previous.\n\n**Why the wrong answers are tempting:**\n• Choice A: This would be linear growth ($3 + 2x$), not exponential.\n• Choice C: Tripling would require a base of $3$.\n• Choice D: $200\\%$ increase means tripling (original $+$ $200\\%$ of original $= 3\\times$ original).\n\n**Test Day Takeaway:** In $f(x) = a \\cdot b^x$, the base $b$ is the growth factor. $b = 2$ means doubling.",
          skills: ["exponential-functions", "function-interpretation"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "In the $xy$-plane, the graph of $y = x^2 - 8x + 12$ crosses the $x$-axis at two points. What is the distance between these two points?",
          correctAnswer: "4",
          explanation: "**SAT Pattern: Distance Between Roots**\n\n**The correct answer is $4$.**\n\n**The Fast Way (15 seconds):** Factor: $x^2 - 8x + 12 = (x-2)(x-6) = 0$. Roots: $x = 2$ and $x = 6$. Distance $= 6 - 2 = 4$.\n\n**The Full Solution:**\n$x^2 - 8x + 12 = 0$\n$(x - 2)(x - 6) = 0$\n$x = 2$ or $x = 6$\nThe two $x$-intercepts are $(2, 0)$ and $(6, 0)$.\nDistance $= |6 - 2| = 4$.\n\n**Common Mistakes to Avoid:**\n• Finding the roots but not subtracting to get the distance.\n• Multiplying the roots instead of finding their difference.\n\n**Verification:** $2^2 - 8(2) + 12 = 4 - 16 + 12 = 0$. $6^2 - 8(6) + 12 = 36 - 48 + 12 = 0$. Both are correct roots.\n\n**Test Day Takeaway:** The $x$-intercepts are the solutions to the quadratic. Distance between them is $|x_2 - x_1|$.",
          skills: ["factoring", "quadratic-equations", "coordinate-geometry"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A cylinder has a radius of $4$ and a height of $10$. What is the volume of the cylinder? (Volume of a cylinder: $V = \\pi r^2 h$)",
          choices: [
            { id: "A", text: "$40\\pi$" },
            { id: "B", text: "$80\\pi$" },
            { id: "C", text: "$160\\pi$" },
            { id: "D", text: "$640\\pi$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Volume Formula Application**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $V = \\pi(4)^2(10) = \\pi(16)(10) = 160\\pi$.\n\n**The Full Solution:**\n$V = \\pi r^2 h$\n$V = \\pi (4)^2 (10)$\n$V = \\pi (16)(10)$\n$V = 160\\pi$\n\n**Why the wrong answers are tempting:**\n• Choice A ($40\\pi$): Uses $r$ instead of $r^2$: $\\pi(4)(10) = 40\\pi$.\n• Choice B ($80\\pi$): Uses $2r$ instead of $r^2$: $\\pi(8)(10) = 80\\pi$.\n• Choice D ($640\\pi$): Uses $r^2 = 4^2 = 16$, then $16^2 \\times 10 \\div 4$, an incorrect calculation.\n\n**Test Day Takeaway:** Remember to square the radius, not just multiply it.",
          skills: ["volume"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $\\sqrt{3x + 7} = 5$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$-\\frac{2}{3}$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$\\frac{32}{3}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Solving Radical Equations**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Square both sides: $3x + 7 = 25$. Then $3x = 18$, so $x = 6$.\n\n**The Full Solution:**\n$\\sqrt{3x + 7} = 5$\n$(\\sqrt{3x + 7})^2 = 5^2$\n$3x + 7 = 25$\n$3x = 18$\n$x = 6$\n\n**Why the wrong answers are tempting:**\n• Choice A ($-\\frac{2}{3}$): Subtracts $7$ from $5$ instead of $25$.\n• Choice B ($4$): Uses $5^2 = 25$ but then computes $\\frac{25-7}{5}$ incorrectly.\n• Choice D ($\\frac{32}{3}$): Adds $7$ to $25$ instead of subtracting.\n\n**Test Day Takeaway:** Square both sides of a radical equation, then solve the resulting linear equation. Check your answer in the original.",
          skills: ["radical-equations", "solving-equations"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "The function $f(x) = -x^2 + 10x - 21$ can be written as $f(x) = -(x - a)(x - b)$ where $a < b$. What is the value of $a + b$?",
          correctAnswer: "10",
          explanation: "**SAT Pattern: Sum of Roots (Vieta's Formulas)**\n\n**The correct answer is $10$.**\n\n**The Fast Way (15 seconds):** For $-x^2 + 10x - 21$, factor out $-1$: $-(x^2 - 10x + 21) = -(x-3)(x-7)$. So $a = 3$, $b = 7$, and $a + b = 10$.\n\n**The Full Solution:**\n$f(x) = -x^2 + 10x - 21$\n$= -(x^2 - 10x + 21)$\n$= -(x - 3)(x - 7)$\nSo $a = 3$ and $b = 7$.\n$a + b = 3 + 7 = 10$\n\n**Common Mistakes to Avoid:**\n• Factoring without the negative sign and getting wrong roots.\n• By Vieta's formulas, $a + b = -\\frac{b}{a} = -\\frac{10}{-1} = 10$. This shortcut is faster.\n\n**Verification:** $-(3-3)(3-7) = 0$ and $-(7-3)(7-7) = 0$. Both roots check out. Also, $-(x-3)(x-7) = -(x^2 - 10x + 21) = -x^2 + 10x - 21$.\n\n**Test Day Takeaway:** For $ax^2 + bx + c$, the sum of roots $= -\\frac{b}{a}$.",
          skills: ["factoring", "quadratic-equations"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In right triangle $DEF$, angle $F = 90°$. If $\\sin(D) = \\frac{5}{13}$, what is $\\cos(D)$?",
          choices: [
            { id: "A", text: "$\\frac{5}{13}$" },
            { id: "B", text: "$\\frac{8}{13}$" },
            { id: "C", text: "$\\frac{12}{13}$" },
            { id: "D", text: "$\\frac{5}{12}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Pythagorean Identity / Right Triangle Trig**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** $\\sin(D) = \\frac{5}{13}$, so opposite $= 5$, hypotenuse $= 13$. Adjacent $= \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$. $\\cos(D) = \\frac{12}{13}$.\n\n**The Full Solution:**\nIn right triangle with $\\sin(D) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{5}{13}$:\nAdjacent $= \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$\n$\\cos(D) = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{12}{13}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{5}{13}$): Confuses sine and cosine.\n• Choice B ($\\frac{8}{13}$): Uses $13 - 5 = 8$ instead of the Pythagorean theorem.\n• Choice D ($\\frac{5}{12}$): This is $\\tan(D)$, not $\\cos(D)$.\n\n**Test Day Takeaway:** The $5$-$12$-$13$ right triangle is a standard Pythagorean triple. Know SOH-CAH-TOA.",
          skills: ["right-triangle-trig", "triangles"]
        }
      ]
    }
  ]
};

export default practiceTest10;
