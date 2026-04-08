// Practice Test 9 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Contexts: music production, wildlife, restaurants, e-commerce

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
        // ===== EASY (Q1-Q5) =====
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A restaurant tracked the number of meals served each day for one week.\n\n| Day | Meals Served |\n|---|---|\n| Monday | $120$ |\n| Tuesday | $145$ |\n| Wednesday | $130$ |\n| Thursday | $155$ |\n| Friday | $200$ |\n\nAccording to the table, on which day were the most meals served?",
          choices: [
            { id: "A", text: "Tuesday" },
            { id: "B", text: "Wednesday" },
            { id: "C", text: "Thursday" },
            { id: "D", text: "Friday" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Reading Data from a Table**\n\n**Choice D is correct.**\n\n**The Fast Way (10 seconds):** Scan the \"Meals Served\" column for the largest value: $200$ on Friday.\n\n**The Full Solution:**\nCompare all values: $120, 145, 130, 155, 200$. The maximum is $200$, which corresponds to Friday.\n\n**Why the wrong answers are tempting:**\n• Choice A (Tuesday): $145$ is the second-smallest, not the largest.\n• Choice B (Wednesday): $130$ is less than Thursday and Friday.\n• Choice C (Thursday): $155$ is large but not the maximum.\n\n**Test Day Takeaway:** For \"which is the greatest/most\" questions, scan the column and compare all values before choosing.",
          skills: ["word-problems", "statistics"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Seven more than $3$ times a number $n$ is $52$. Which equation represents this situation?",
          choices: [
            { id: "A", text: "$7n + 3 = 52$" },
            { id: "B", text: "$3n + 7 = 52$" },
            { id: "C", text: "$3(n + 7) = 52$" },
            { id: "D", text: "$7(n + 3) = 52$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Translating Words to an Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** \"$3$ times a number\" $= 3n$. \"Seven more than that\" $= 3n + 7$. Set equal to $52$: $3n + 7 = 52$.\n\n**The Full Solution:**\nParse the sentence step by step:\n• \"$3$ times a number $n$\" $\\rightarrow 3n$\n• \"Seven more than $3n$\" $\\rightarrow 3n + 7$\n• \"is $52$\" $\\rightarrow = 52$\nEquation: $3n + 7 = 52$\n\n**Why the wrong answers are tempting:**\n• Choice A ($7n + 3 = 52$): Swaps the multiplier and the addend.\n• Choice C ($3(n + 7) = 52$): Adds $7$ inside the multiplication — this means \"$3$ times the quantity $n + 7$.\"\n• Choice D ($7(n + 3) = 52$): Reverses everything.\n\n**Test Day Takeaway:** \"$k$ more than\" means $+ k$ (added after). \"$k$ times\" means $\\times k$ (multiplied first). Build from the inside out.",
          skills: ["word-problems", "linear-equations"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The function $f(t) = 200 + 30t$ models the number of songs in a music producer's library $t$ months after she started collecting. What does the number $30$ represent in this function?",
          choices: [
            { id: "A", text: "The total number of songs after $30$ months" },
            { id: "B", text: "The number of songs she started with" },
            { id: "C", text: "The number of songs added per month" },
            { id: "D", text: "The number of months she has been collecting" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Interpreting Slope in a Linear Function**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** In $f(t) = 200 + 30t$, the coefficient of $t$ is the rate of change: $30$ songs per month.\n\n**The Full Solution:**\nIn a linear function $f(t) = b + mt$:\n• $m$ (the coefficient of $t$) is the slope, or rate of change\n• $b$ is the initial value (the $y$-intercept)\nHere $m = 30$, meaning she adds $30$ songs each month.\n\n**Why the wrong answers are tempting:**\n• Choice A: To find the total at $30$ months, you'd compute $f(30) = 200 + 30(30) = 1{,}100$. The number $30$ itself is not a total.\n• Choice B: The starting number is $200$, not $30$.\n• Choice D: The variable $t$ represents months; $30$ is the rate, not a time.\n\n**Test Day Takeaway:** Slope $=$ rate of change. The $y$-intercept $=$ starting value. Know which is which.",
          skills: ["linear-functions", "function-interpretation"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A wildlife biologist tagged animals in a nature reserve and recorded the results in the table below.\n\n| Animal | Number Tagged |\n|---|---|\n| Deer | $48$ |\n| Foxes | $15$ |\n| Rabbits | $72$ |\n| Owls | $25$ |\n| **Total** | **$160$** |\n\nWhat percentage of the tagged animals were deer?",
          choices: [
            { id: "A", text: "$20\\%$" },
            { id: "B", text: "$25\\%$" },
            { id: "C", text: "$30\\%$" },
            { id: "D", text: "$48\\%$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Percentage from a Data Table**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $\\frac{48}{160} = \\frac{3}{10} = 30\\%$.\n\n**The Full Solution:**\nPercentage of deer $= \\frac{48}{160} \\times 100\\% = 30\\%$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($20\\%$): From $\\frac{48}{240}$ or a mental math error.\n• Choice B ($25\\%$): From $\\frac{48}{192}$ or confusing with $\\frac{1}{4}$.\n• Choice D ($48\\%$): Uses the count $48$ directly as a percentage.\n\n**Test Day Takeaway:** Percentage $= \\frac{\\text{part}}{\\text{total}} \\times 100$. Read the total from the table — don't guess it.",
          skills: ["percents", "statistics"]
        },
        // ===== EASY-MEDIUM (Q5-Q7) =====
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "An online store sells bins for $\\$9$ each. A customer has a $\\$63$ store coupon. After applying the coupon, the customer pays $\\$27$ for an order of bins. How many bins did the customer order?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$7$" },
            { id: "C", text: "$9$" },
            { id: "D", text: "$10$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Two-Step Word Problem**\n\n**Choice D is correct.**\n\n**The Fast Way (15 seconds):** Total before coupon $= 27 + 63 = 90$. Number of bins $= 90 \\div 9 = 10$.\n\n**The Full Solution:**\nLet $n =$ number of bins.\nTotal cost before coupon $= 9n$.\nAfter coupon: $9n - 63 = 27$.\n$9n = 90$.\n$n = 10$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): From $27 \\div 9 = 3$ (using only the amount paid, ignoring the coupon).\n• Choice B ($7$): From $63 \\div 9 = 7$ (dividing the coupon by the price).\n• Choice C ($9$): The price per bin, not the quantity.\n\n**Test Day Takeaway:** Work backward: add the coupon back to find the original total, then divide by the unit price.",
          skills: ["word-problems", "linear-equations"]
        },
        {
          id: 6,
          type: "fill-in",
          difficulty: "medium",
          question: "The equation $k^2 - 53 = 91$ is true for $k > 0$. What is the value of $k$?",
          correctAnswer: "12",
          explanation: "**SAT Pattern: Solving a Quadratic for a Positive Root**\n\n**The correct answer is $12$.**\n\n**The Fast Way (15 seconds):** $k^2 = 91 + 53 = 144$. Since $k > 0$, $k = \\sqrt{144} = 12$.\n\n**The Full Solution:**\n$k^2 - 53 = 91$\n$k^2 = 144$\n$k = \\pm 12$\nSince $k > 0$, $k = 12$.\n\n**Common Mistakes to Avoid:**\n• Getting $k = -12$ (valid algebraically, but the problem specifies $k > 0$).\n• Computing $91 - 53 = 38$ instead of $91 + 53 = 144$ (subtracting instead of adding).\n• Forgetting to take the square root: answering $144$ instead of $12$.\n\n**Verification:** $12^2 - 53 = 144 - 53 = 91$ ✓\n\n**Test Day Takeaway:** Isolate $k^2$ first, then take the square root. Check whether the problem restricts to positive values.",
          skills: ["quadratic-equations", "solving-equations"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is equivalent to $(3x^2 + 2x - 5) + (x^2 + 4x + 3)$?",
          choices: [
            { id: "A", text: "$4x^2 + 6x - 2$" },
            { id: "B", text: "$3x^4 + 6x^2 - 2$" },
            { id: "C", text: "$4x^2 + 2x - 2$" },
            { id: "D", text: "$4x^2 + 6x + 8$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Adding Polynomials**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** Combine like terms: $3x^2 + x^2 = 4x^2$, $2x + 4x = 6x$, $-5 + 3 = -2$. Result: $4x^2 + 6x - 2$.\n\n**The Full Solution:**\n$(3x^2 + 2x - 5) + (x^2 + 4x + 3)$\n$= (3 + 1)x^2 + (2 + 4)x + (-5 + 3)$\n$= 4x^2 + 6x - 2$\n\n**Why the wrong answers are tempting:**\n• Choice B ($3x^4 + 6x^2 - 2$): Multiplies the $x^2$ terms instead of adding their coefficients.\n• Choice C ($4x^2 + 2x - 2$): Forgets to add the $x$-term coefficients ($2x$ instead of $6x$).\n• Choice D ($4x^2 + 6x + 8$): Computes $-5 + 3$ as $+8$ instead of $-2$.\n\n**Test Day Takeaway:** When adding polynomials, add the coefficients of terms with the same degree. Do not multiply exponents.",
          skills: ["polynomial-operations"]
        },

        // ===== MEDIUM (Q8-Q13) =====
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A music streaming service charges a $\\$10$ monthly fee plus $\\$1.50$ per album downloaded. A competing service charges no monthly fee but $\\$3$ per album. For how many albums in a month would the two services cost the same?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$\\ \\frac{20}{3}$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Setting Two Linear Expressions Equal**\n\n**Choice D is correct.**\n\n**The Fast Way (20 seconds):** Set $10 + 1.50a = 3a$. Then $10 = 1.50a$, so $a = \\frac{10}{1.5} = \\frac{20}{3}$.\n\n**The Full Solution:**\nService 1: $10 + 1.50a$\nService 2: $3a$\nSet equal: $10 + 1.50a = 3a$\n$10 = 3a - 1.50a = 1.50a$\n$a = \\frac{10}{1.50} = \\frac{20}{3} \\approx 6.67$\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): Service 1 costs $16$, Service 2 costs $12$ — not equal.\n• Choice B ($5$): Service 1 costs $17.50$, Service 2 costs $15$ — not equal.\n• Choice C ($6$): Service 1 costs $19$, Service 2 costs $18$ — close but not equal.\n\n**Verification:** $10 + 1.5 \\cdot \\frac{20}{3} = 10 + 10 = 20$. $3 \\cdot \\frac{20}{3} = 20$. Both equal $20$ ✓\n\n**Test Day Takeaway:** \"Same cost\" means set the two expressions equal and solve. The answer can be a fraction.",
          skills: ["linear-equations", "systems-of-equations"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table below shows data from a survey of $200$ restaurant customers.\n\n| | Dine-in | Takeout | Total |\n|---|---|---|---|\n| Lunch | $50$ | $70$ | $120$ |\n| Dinner | $60$ | $20$ | $80$ |\n| Total | $110$ | $90$ | $200$ |\n\nWhat fraction of dine-in customers ordered dinner?",
          choices: [
            { id: "A", text: "$\\frac{60}{200}$" },
            { id: "B", text: "$\\frac{60}{110}$" },
            { id: "C", text: "$\\frac{60}{80}$" },
            { id: "D", text: "$\\frac{110}{200}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Conditional Probability from a Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** \"Of dine-in customers\" restricts the denominator to dine-in total $= 110$. Dine-in AND dinner $= 60$. Fraction $= \\frac{60}{110}$.\n\n**The Full Solution:**\n$P(\\text{dinner} \\mid \\text{dine-in}) = \\frac{\\text{dine-in dinner}}{\\text{total dine-in}} = \\frac{60}{110} = \\frac{6}{11}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{60}{200}$): Uses the grand total — this is joint probability, not conditional.\n• Choice C ($\\frac{60}{80}$): Uses total dinner as denominator — this answers \"what fraction of dinner customers dined in.\"\n• Choice D ($\\frac{110}{200}$): Fraction of all customers who dined in, ignoring meal type.\n\n**Test Day Takeaway:** \"Of [group]\" means the denominator is that group's total (conditional probability). \"Of all\" means the denominator is the grand total (joint probability).",
          skills: ["probability", "two-way-tables"]
        },
        {
          id: 10,
          type: "fill-in",
          difficulty: "medium",
          question: "The function $g(x) = 3(x - 14)(x + 5)(x + 4)$ is graphed in the $xy$-plane. What is the $x$-intercept with the greatest $x$-value?",
          correctAnswer: "14",
          explanation: "**SAT Pattern: Finding $x$-intercepts from Factored Form**\n\n**The correct answer is $14$.**\n\n**The Fast Way (10 seconds):** Set each factor to zero: $x - 14 = 0 \\Rightarrow x = 14$, $x + 5 = 0 \\Rightarrow x = -5$, $x + 4 = 0 \\Rightarrow x = -4$. The greatest is $14$.\n\n**The Full Solution:**\n$g(x) = 0$ when any factor is zero:\n$x - 14 = 0 \\Rightarrow x = 14$\n$x + 5 = 0 \\Rightarrow x = -5$\n$x + 4 = 0 \\Rightarrow x = -4$\nThe $x$-intercepts are $-5, -4, 14$. The greatest value is $14$.\n\n**Common Mistakes to Avoid:**\n• Choosing $-4$ because it is the \"largest\" negative number (but $14 > -4$).\n• Setting the leading coefficient $3$ equal to zero.\n• Confusing $x$-intercepts with the $y$-intercept.\n\n**Verification:** $g(14) = 3(0)(19)(18) = 0$ ✓\n\n**Test Day Takeaway:** $x$-intercepts of a factored polynomial come from setting each factor equal to zero.",
          skills: ["polynomial-operations", "factoring"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "A wildlife population was $300$ in $2020$ and $450$ in $2024$. If the population grows linearly, what is the predicted population in $2026$?",
          correctAnswer: "525",
          explanation: "**SAT Pattern: Linear Growth Prediction**\n\n**The correct answer is 525.**\n\n**The Fast Way (15 seconds):** Rate: $\\frac{450 - 300}{2024 - 2020} = \\frac{150}{4} = 37.5$ per year. From $2024$ to $2026$: $450 + 37.5(2) = 450 + 75 = 525$.\n\n**The Full Solution:**\nSlope $= \\frac{450 - 300}{4} = 37.5$ animals/year\n$2026$ population $= 450 + 37.5(2026 - 2024) = 450 + 75 = 525$\n\n**Common Mistakes to Avoid:**\n• Using $\\frac{150}{6} = 25$ — wrong time interval ($2026 - 2020 = 6$, but the rate should be from the two given points).\n• Getting $487.5$ from only adding one year's growth.\n\n**Verification:** $2020$: $300$. $2022$: $375$. $2024$: $450$. $2026$: $525$ ✓ (adding $75$ every $2$ years)\n\n**Test Day Takeaway:** Find the rate from the given data points, then extend to the target year.",
          skills: ["linear-functions", "slope"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is equivalent to $(x + 4)(x - 6)$?",
          choices: [
            { id: "A", text: "$x^2 - 2x - 24$" },
            { id: "B", text: "$x^2 + 2x - 24$" },
            { id: "C", text: "$x^2 - 10x - 24$" },
            { id: "D", text: "$x^2 - 2x + 24$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: FOIL / Expanding Binomials**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** $(x+4)(x-6) = x^2 - 6x + 4x - 24 = x^2 - 2x - 24$.\n\n**The Full Solution:**\nF: $x \\cdot x = x^2$\nO: $x \\cdot (-6) = -6x$\nI: $4 \\cdot x = 4x$\nL: $4 \\cdot (-6) = -24$\nCombine: $x^2 - 6x + 4x - 24 = x^2 - 2x - 24$\n\n**Why the wrong answers are tempting:**\n• Choice B ($x^2 + 2x - 24$): Gets $+2x$ from $6x - 4x$ instead of $-6x + 4x$.\n• Choice C ($x^2 - 10x - 24$): Adds $-6x$ and $-4x$ (wrong sign on $4x$).\n• Choice D ($x^2 - 2x + 24$): Wrong sign on the constant.\n\n**Test Day Takeaway:** FOIL carefully: watch the signs on each term, especially the Outer and Inner products.",
          skills: ["polynomial-operations", "factoring"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "An e-commerce company surveyed $600$ customers with a margin of error of $\\pm 3\\%$. If $42\\%$ said they prefer free shipping over faster shipping, which range most likely contains the true population percentage?",
          choices: [
            { id: "A", text: "$39\\%$ to $45\\%$" },
            { id: "B", text: "$42\\%$ to $45\\%$" },
            { id: "C", text: "$36\\%$ to $48\\%$" },
            { id: "D", text: "$40\\%$ to $44\\%$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Margin of Error — Confidence Interval**\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** $42\\% \\pm 3\\% = [39\\%, 45\\%]$.\n\n**The Full Solution:**\nLower bound: $42\\% - 3\\% = 39\\%$\nUpper bound: $42\\% + 3\\% = 45\\%$\nRange: $39\\%$ to $45\\%$\n\n**Why the wrong answers are tempting:**\n• Choice B ($42\\%$ to $45\\%$): Only adds the margin, forgetting to subtract.\n• Choice C ($36\\%$ to $48\\%$): Uses $\\pm 6\\%$ instead of $\\pm 3\\%$.\n• Choice D ($40\\%$ to $44\\%$): Uses $\\pm 2\\%$ instead of $\\pm 3\\%$.\n\n**Test Day Takeaway:** Margin of error $\\pm m$ creates the interval $[\\text{result} - m, \\text{result} + m]$.",
          skills: ["margin-of-error", "statistics"]
        },
        // ===== HARD (Q14-Q15) =====
        {
          id: 14,
          type: "fill-in",
          difficulty: "hard",
          question: "A system of equations is given:\n\n$3x + 2y = 19$\n$x - y = 3$\n\nWhat is the value of $x + y$?",
          correctAnswer: "7",
          explanation: "**SAT Pattern: System of Equations — Solve Then Compute an Expression**\n\n**The correct answer is $7$.**\n\n**The Fast Way (30 seconds):** From the second equation, $x = y + 3$. Substitute into the first: $3(y + 3) + 2y = 19$, so $3y + 9 + 2y = 19$, $5y = 10$, $y = 2$. Then $x = 2 + 3 = 5$. So $x + y = 5 + 2 = 7$.\n\n**The Full Solution:**\n$x - y = 3 \\Rightarrow x = y + 3$\n$3(y + 3) + 2y = 19$\n$3y + 9 + 2y = 19$\n$5y = 10$\n$y = 2$, $x = 5$\n$x + y = 7$\n\n**Common Mistakes to Avoid:**\n• Reporting just $x = 5$ or $y = 2$ instead of the sum.\n• Substitution error: using $x = y - 3$ instead of $x = y + 3$.\n\n**Verification:** $3(5) + 2(2) = 15 + 4 = 19$ ✓. $5 - 2 = 3$ ✓.\n\n**Test Day Takeaway:** Read what the question asks for. It may ask for an expression like $x + y$ rather than individual values.",
          skills: ["systems-of-equations", "solving-equations"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A music producer invests $\\$5{,}000$ in equipment that depreciates at $15\\%$ per year. Which expression gives the value of the equipment after $t$ years?",
          choices: [
            { id: "A", text: "$5000(0.15)^t$" },
            { id: "B", text: "$5000(0.85)^t$" },
            { id: "C", text: "$5000 - 0.15t$" },
            { id: "D", text: "$5000(1.15)^t$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Exponential Decay Model**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Depreciation of $15\\%$ means $85\\%$ of the value remains each year. Decay factor $= 1 - 0.15 = 0.85$. Model: $5000(0.85)^t$.\n\n**The Full Solution:**\nDecay rate $= 15\\% = 0.15$\nDecay factor $= 1 - 0.15 = 0.85$\nValue after $t$ years $= 5000(0.85)^t$\n\n**Why the wrong answers are tempting:**\n• Choice A ($5000(0.15)^t$): Uses the decay rate as the base. After $1$ year this gives $750$, which is only $15\\%$ of $5000$, not $85\\%$.\n• Choice C ($5000 - 0.15t$): Models linear decay of $\\$0.15$ per year, which is unrealistic and not exponential.\n• Choice D ($5000(1.15)^t$): This is $15\\%$ growth, not depreciation.\n\n**Test Day Takeaway:** For decay, the base is $1 - \\text{rate}$. For growth, the base is $1 + \\text{rate}$.",
          skills: ["exponential-functions"]
        },

        // ===== HARD (Q16-Q22) =====
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "For what value of $k$ does the equation $2x^2 + kx + 8 = 0$ have exactly one real solution?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$16$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Discriminant Equals Zero**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** One real solution: $b^2 - 4ac = 0$. $k^2 - 4(2)(8) = 0$. $k^2 = 64$. $k = 8$ (positive value).\n\n**The Full Solution:**\nDiscriminant $= k^2 - 4(2)(8) = k^2 - 64$\nSet $= 0$: $k^2 = 64$, so $k = \\pm 8$.\nSince $8$ is among the choices, $k = 8$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): From $\\sqrt{64}/2 = 4$.\n• Choice B ($6$): From miscalculating $4 \\times 2 \\times 8$.\n• Choice D ($16$): From $4 \\times 2 \\times 8 \\div 4 = 16$ or from $2 \\times 8 = 16$.\n\n**Test Day Takeaway:** Exactly one solution means discriminant $= 0$: $b^2 = 4ac$.",
          skills: ["discriminant", "quadratic-equations"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A music studio models its monthly revenue as $R(x) = -3x^2 + 120x - 900$, where $x$ is the number of sessions. How many sessions maximize the revenue?",
          choices: [
            { id: "A", text: "$15$" },
            { id: "B", text: "$20$" },
            { id: "C", text: "$30$" },
            { id: "D", text: "$40$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Vertex of a Quadratic (Maximum)**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $x = -\\frac{b}{2a} = -\\frac{120}{2(-3)} = -\\frac{120}{-6} = 20$.\n\n**The Full Solution:**\n$R(x) = -3x^2 + 120x - 900$\n$a = -3$, $b = 120$\n$x = -\\frac{120}{2(-3)} = \\frac{120}{6} = 20$\n\nSince $a < 0$, this gives a maximum.\n\n**Why the wrong answers are tempting:**\n• Choice A ($15$): From an arithmetic error in $120 \\div 6$.\n• Choice C ($30$): From $\\frac{120}{4}$ or $\\frac{-900}{-30}$.\n• Choice D ($40$): From $\\frac{120}{3}$.\n\n**Test Day Takeaway:** Maximum of a downward parabola occurs at $x = -\\frac{b}{2a}$.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "If $x^2 - 10x + 25 = 0$, what is the value of $x$?",
          correctAnswer: "5",
          explanation: "**SAT Pattern: Perfect Square Trinomial**\n\n**The correct answer is 5.**\n\n**The Fast Way (10 seconds):** $x^2 - 10x + 25 = (x-5)^2 = 0$, so $x = 5$.\n\n**The Full Solution:**\nRecognize the pattern: $x^2 - 10x + 25 = (x - 5)^2$\n$(x - 5)^2 = 0$\n$x - 5 = 0$\n$x = 5$\n\n**Common Mistakes to Avoid:**\n• Getting $x = -5$ from a sign error: $(x - 5)^2 = 0$ gives $x = 5$, not $-5$.\n• Using the quadratic formula unnecessarily (it works but is slower).\n\n**Verification:** $5^2 - 10(5) + 25 = 25 - 50 + 25 = 0$ ✓\n\n**Test Day Takeaway:** $a^2 - 2ab + b^2 = (a-b)^2$. Check if the trinomial is a perfect square before using other methods.",
          skills: ["quadratic-equations", "factoring"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation $x^2 + y^2 - 8x + 2y + 8 = 0$ represents a circle in the $xy$-plane. What is the radius of the circle?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$\\sqrt{8}$" },
            { id: "C", text: "$\\sqrt{9}$" },
            { id: "D", text: "$5$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Circle Equation — Complete the Square**\n\n**Choice A is correct.**\n\n**The Fast Way (40 seconds):** $(x^2 - 8x) + (y^2 + 2y) = -8$. Complete: $(x^2 - 8x + 16) + (y^2 + 2y + 1) = -8 + 16 + 1 = 9$. $(x-4)^2 + (y+1)^2 = 9$. Radius $= 3$.\n\n**The Full Solution:**\n$x^2 - 8x + y^2 + 2y = -8$\n$(x^2 - 8x + 16) + (y^2 + 2y + 1) = -8 + 16 + 1$\n$(x - 4)^2 + (y + 1)^2 = 9$\nRadius $= \\sqrt{9} = 3$\n\n**Why the wrong answers are tempting:**\n• Choice B ($\\sqrt{8}$): From using $-8$ as $r^2$ without completing the square.\n• Choice C ($\\sqrt{9}$): Equals $3$, the same as A. A student might think these are different.\n• Choice D ($5$): From $16 + 1 - 8 = 9$, then confusing $r^2 = 9$ with $r^2 = 25$.\n\n**Test Day Takeaway:** Complete the square for $x$ and $y$ separately, then read off the radius.",
          skills: ["circle-equations", "algebraic-manipulation"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A wildlife population decreases by $20\\%$ each year. If there are currently $2{,}000$ animals, which expression gives the population after $t$ years?",
          choices: [
            { id: "A", text: "$2000(0.20)^t$" },
            { id: "B", text: "$2000(0.80)^t$" },
            { id: "C", text: "$2000 - 0.20t$" },
            { id: "D", text: "$2000(1.20)^t$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Exponential Decay Model**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Decrease of $20\\%$ means $80\\%$ remains each year. Decay factor $= 0.80$. Model: $2000(0.80)^t$.\n\n**The Full Solution:**\nDecay rate $= 20\\% = 0.20$\nDecay factor $= 1 - 0.20 = 0.80$\nPopulation $= 2000(0.80)^t$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2000(0.20)^t$): Uses the decay rate instead of the decay factor. After $1$ year this gives $400$, which is only $20\\%$ of $2000$, not $80\\%$.\n• Choice C ($2000 - 0.20t$): Linear decay, not exponential.\n• Choice D ($2000(1.20)^t$): This is $20\\%$ growth, not decay.\n\n**Test Day Takeaway:** Decay $= 1 - \\text{rate}$ as the base. Growth $= 1 + \\text{rate}$ as the base.",
          skills: ["exponential-functions"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "In the $xy$-plane, the line $y = x + 2$ intersects the parabola $y = x^2 - 2x + 2$. What is the sum of the $x$-coordinates of the intersection points?",
          correctAnswer: "3",
          explanation: "**SAT Pattern: Quadratic-Linear System — Sum of Solutions**\n\n**The correct answer is 3.**\n\n**The Fast Way (25 seconds):** Set equal: $x + 2 = x^2 - 2x + 2$, so $x^2 - 3x = 0$, $x(x - 3) = 0$. Solutions: $x = 0$ and $x = 3$. Sum $= 0 + 3 = 3$.\n\nAlternatively, by Vieta's formulas: for $x^2 - 3x = 0$, the sum of roots $= -\\frac{b}{a} = -\\frac{-3}{1} = 3$.\n\n**The Full Solution:**\n$x + 2 = x^2 - 2x + 2$\n$0 = x^2 - 3x$\n$0 = x(x - 3)$\n$x = 0$ or $x = 3$\nSum $= 0 + 3 = 3$\n\n**Common Mistakes to Avoid:**\n• Reporting only one solution ($0$ or $3$).\n• Multiplying instead of adding: $0 \\times 3 = 0$.\n\n**Verification:** At $x = 0$: $y = 2$ and $y = 0 - 0 + 2 = 2$ ✓. At $x = 3$: $y = 5$ and $y = 9 - 6 + 2 = 5$ ✓.\n\n**Test Day Takeaway:** For sum of roots of $ax^2 + bx + c = 0$, use $-b/a$ (Vieta's formula) — no need to solve.",
          skills: ["systems-of-equations", "quadratic-equations"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In a $30°$-$60°$-$90°$ triangle, the side opposite the $30°$ angle has length $7$. What is the length of the hypotenuse?",
          choices: [
            { id: "A", text: "$7\\sqrt{2}$" },
            { id: "B", text: "$7\\sqrt{3}$" },
            { id: "C", text: "$14$" },
            { id: "D", text: "$21$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: 30-60-90 Special Right Triangle**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** In a $30$-$60$-$90$ triangle, the hypotenuse is twice the short leg. Hypotenuse $= 2 \\times 7 = 14$.\n\n**The Full Solution:**\nSide ratios for $30°$-$60°$-$90°$: $1 : \\sqrt{3} : 2$.\nShort leg (opposite $30°$) $= 7$.\nHypotenuse $= 2 \\times 7 = 14$.\nLong leg $= 7\\sqrt{3}$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($7\\sqrt{2}$): Uses the $45$-$45$-$90$ ratio instead.\n• Choice B ($7\\sqrt{3}$): This is the long leg, not the hypotenuse.\n• Choice D ($21$): $7 \\times 3 = 21$, multiplying by $3$ instead of $2$.\n\n**Test Day Takeaway:** $30$-$60$-$90$: short leg $: $ long leg $: $ hypotenuse $= 1 : \\sqrt{3} : 2$.",
          skills: ["special-right-triangles", "triangles"]
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
          question: "An e-commerce site lists a product for $\\$80$. During a sale, the price is reduced by $\\$20$. What is the sale price?",
          choices: [
            { id: "A", text: "$\\$20$" },
            { id: "B", text: "$\\$40$" },
            { id: "C", text: "$\\$60$" },
            { id: "D", text: "$\\$100$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Basic Subtraction**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $80 - 20 = 60$.\n\n**The Full Solution:**\nSale price $= \\$80 - \\$20 = \\$60$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\$20$): This is the discount amount, not the sale price.\n• Choice B ($\\$40$): $80 \\div 2$, as if the price were cut in half.\n• Choice D ($\\$100$): $80 + 20$, adding instead of subtracting.\n\n**Test Day Takeaway:** Sale price $=$ original price $-$ discount.",
          skills: ["word-problems"]
        },
        {
          id: 2,
          type: "fill-in",
          difficulty: "easy",
          question: "If $\\frac{x}{4} = 9$, what is the value of $x$?",
          correctAnswer: "36",
          explanation: "**SAT Pattern: One-Step Equation**\n\n**The correct answer is 36.**\n\n**The Fast Way (5 seconds):** $x = 9 \\times 4 = 36$.\n\n**The Full Solution:**\n$\\frac{x}{4} = 9$\n$x = 9 \\times 4 = 36$\n\n**Common Mistakes to Avoid:**\n• Dividing: $9 \\div 4 = 2.25$.\n\n**Verification:** $\\frac{36}{4} = 9$ ✓\n\n**Test Day Takeaway:** To undo division, multiply both sides by the denominator.",
          skills: ["solving-equations"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A wildlife sanctuary has $24$ mammals and $36$ birds. What is the ratio of mammals to birds in simplest form?",
          choices: [
            { id: "A", text: "$1:2$" },
            { id: "B", text: "$2:3$" },
            { id: "C", text: "$3:4$" },
            { id: "D", text: "$4:6$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Simplifying Ratios**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $24:36 = \\frac{24}{36} = \\frac{2}{3}$, so $2:3$.\n\n**The Full Solution:**\n$\\text{GCF}(24, 36) = 12$\n$\\frac{24}{12} : \\frac{36}{12} = 2:3$\n\n**Why the wrong answers are tempting:**\n• Choice A ($1:2$): Wrong simplification.\n• Choice C ($3:4$): Reversed or wrong simplification.\n• Choice D ($4:6$): Partially simplified (divide by $6$, not $12$).\n\n**Test Day Takeaway:** Divide both parts by their GCF to simplify a ratio.",
          skills: ["ratios-proportions"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A restaurant manager records the number of customers each day for a week: $45, 52, 48, 55, 60, 50, 40$. What is the median number of customers?",
          choices: [
            { id: "A", text: "$48$" },
            { id: "B", text: "$50$" },
            { id: "C", text: "$52$" },
            { id: "D", text: "$55$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Finding the Median**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Order the data: $40, 45, 48, 50, 52, 55, 60$. The middle value (4th of 7) is $50$.\n\n**The Full Solution:**\nSorted: $40, 45, 48, \\mathbf{50}, 52, 55, 60$\n$7$ values, so the median is the $\\frac{7+1}{2} = 4$th value $= 50$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($48$): The 3rd value, not the 4th.\n• Choice C ($52$): The 5th value.\n• Choice D ($55$): The 6th value.\n\n**Test Day Takeaway:** To find the median: sort the data, then find the middle value.",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 5,
          type: "fill-in",
          difficulty: "easy",
          question: "A song is $3$ minutes and $30$ seconds long. How many seconds is the song?",
          correctAnswer: "210",
          explanation: "**SAT Pattern: Unit Conversion**\n\n**The correct answer is 210.**\n\n**The Fast Way (10 seconds):** $3 \\times 60 + 30 = 180 + 30 = 210$.\n\n**The Full Solution:**\n$3$ minutes $= 3 \\times 60 = 180$ seconds\n$180 + 30 = 210$ seconds\n\n**Common Mistakes to Avoid:**\n• Getting $330$ from $3 \\times 100 + 30$.\n• Getting $90$ from $3 \\times 30$.\n\n**Verification:** $210 \\div 60 = 3$ remainder $30$, which is $3$ min $30$ sec ✓\n\n**Test Day Takeaway:** Convert minutes to seconds by multiplying by $60$, then add remaining seconds.",
          skills: ["unit-conversion"]
        },

        // ===== MEDIUM (Q6-Q15) =====
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $5(x - 2) = 3x + 6$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$11$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Multi-Step Equation with Distribution**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** $5x - 10 = 3x + 6$. $2x = 16$. $x = 8$.\n\n**The Full Solution:**\n$5(x - 2) = 3x + 6$\n$5x - 10 = 3x + 6$\n$5x - 3x = 6 + 10$\n$2x = 16$\n$x = 8$\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): From $16 \\div 4$ instead of $16 \\div 2$.\n• Choice B ($6$): From $5x - 10 = 3x + 6$, getting $2x = 12$ (arithmetic error on $6 + 10$).\n• Choice D ($11$): From $5x - 10 = 3x + 6$, getting $2x = 22$ ($-10 + 6 = -4$, then $5x - 3x = 4 + ... $).\n\n**Test Day Takeaway:** Distribute first, collect variable terms on one side, constants on the other.",
          skills: ["solving-equations", "linear-equations"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A music producer mixes $3$ tracks per hour. Another producer mixes $5$ tracks per hour. If they work together, how many hours will it take to mix $24$ tracks?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Combined Rate Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Combined rate $= 3 + 5 = 8$ tracks/hour. Time $= 24 \\div 8 = 3$ hours.\n\n**The Full Solution:**\nRate together $= 3 + 5 = 8$ tracks per hour\nTime $= \\frac{24}{8} = 3$ hours\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): From $24 \\div 12$ or a miscalculation.\n• Choice C ($4$): From $24 \\div 6$.\n• Choice D ($6$): From $24 \\div (5-3+2)$ or similar.\n\n**Test Day Takeaway:** Combined rates add. Time $=$ total work $\\div$ combined rate.",
          skills: ["ratios-proportions", "word-problems"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "If $x^2 + 7x + 12 = 0$, what is the positive difference between the two solutions?",
          correctAnswer: "1",
          explanation: "**SAT Pattern: Factoring a Quadratic**\n\n**The correct answer is 1.**\n\n**The Fast Way (15 seconds):** Factor: $(x+3)(x+4) = 0$, so $x = -3$ or $x = -4$. Positive difference $= |-3 - (-4)| = 1$.\n\n**The Full Solution:**\n$x^2 + 7x + 12 = (x+3)(x+4) = 0$\n$x = -3$ or $x = -4$\nPositive difference $= |-3-(-4)| = |-3+4| = |1| = 1$\n\n**Common Mistakes to Avoid:**\n• Reporting $-3$ or $-4$ instead of the difference.\n• Getting $7$ from $|-3| + |-4| = 3 + 4$.\n\n**Verification:** $(-3)^2 + 7(-3) + 12 = 9 - 21 + 12 = 0$ ✓. $(-4)^2 + 7(-4) + 12 = 16 - 28 + 12 = 0$ ✓.\n\n**Test Day Takeaway:** \"Positive difference\" means the absolute value of the difference between the two solutions.",
          skills: ["quadratic-equations", "factoring"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "An online store's weekly sales data follows a linear trend. In week $2$, sales were $\\$800$, and in week $6$, sales were $\\$1{,}200$. What were the predicted sales in week $10$?",
          choices: [
            { id: "A", text: "$\\$1{,}400$" },
            { id: "B", text: "$\\$1{,}500$" },
            { id: "C", text: "$\\$1{,}600$" },
            { id: "D", text: "$\\$2{,}000$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Linear Growth from Two Data Points**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Rate $= \\frac{1200 - 800}{6 - 2} = \\frac{400}{4} = 100$ per week. From week $6$ to week $10$: $1200 + 100(4) = 1600$.\n\n**The Full Solution:**\nSlope $= \\frac{1200 - 800}{6 - 2} = \\frac{400}{4} = 100$\nWeek $10$: $1200 + 100(10 - 6) = 1200 + 400 = 1600$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\$1{,}400$): Only extends $2$ weeks instead of $4$.\n• Choice B ($\\$1{,}500$): From a rate of $\\frac{400}{3}$ or miscounting weeks.\n• Choice D ($\\$2{,}000$): Doubles $\\$1{,}000$ or adds $\\$800$ to $\\$1{,}200$.\n\n**Test Day Takeaway:** Find the rate, then multiply by the number of additional periods.",
          skills: ["linear-functions", "slope"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is equivalent to $\\frac{x^{10}}{x^4}$?",
          choices: [
            { id: "A", text: "$x^{2.5}$" },
            { id: "B", text: "$x^6$" },
            { id: "C", text: "$x^{14}$" },
            { id: "D", text: "$x^{40}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Exponent Division Rule**\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** $\\frac{x^{10}}{x^4} = x^{10-4} = x^6$.\n\n**The Full Solution:**\n$\\frac{x^{10}}{x^4} = x^{10-4} = x^6$\n\n**Why the wrong answers are tempting:**\n• Choice A ($x^{2.5}$): Divides exponents instead of subtracting.\n• Choice C ($x^{14}$): Adds exponents (multiplication rule).\n• Choice D ($x^{40}$): Multiplies exponents (power rule).\n\n**Test Day Takeaway:** When dividing like bases, subtract the exponents.",
          skills: ["exponent-rules"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A restaurant's daily profit $P$ in dollars is given by $P = 8n - 200$, where $n$ is the number of customers. How many customers are needed for the restaurant to break even ($P = 0$)?",
          choices: [
            { id: "A", text: "$20$" },
            { id: "B", text: "$25$" },
            { id: "C", text: "$30$" },
            { id: "D", text: "$40$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Solving a Linear Equation in Context (Break-Even)**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $8n - 200 = 0$, $8n = 200$, $n = 25$.\n\n**The Full Solution:**\n$P = 0$:\n$8n - 200 = 0$\n$8n = 200$\n$n = 25$\n\n**Why the wrong answers are tempting:**\n• Choice A ($20$): From $200 \\div 10$.\n• Choice C ($30$): From $200 \\div 6.67$.\n• Choice D ($40$): From $200 \\div 5$.\n\n**Test Day Takeaway:** Break-even means profit $= 0$. Set the equation to zero and solve.",
          skills: ["linear-equations", "word-problems"]
        },
        {
          id: 12,
          type: "fill-in",
          difficulty: "medium",
          question: "If $f(x) = 3x^2 - x + 2$, what is $f(-2)$?",
          correctAnswer: "16",
          explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**The correct answer is 16.**\n\n**The Fast Way (15 seconds):** $f(-2) = 3(4) - (-2) + 2 = 12 + 2 + 2 = 16$.\n\n**The Full Solution:**\n$f(-2) = 3(-2)^2 - (-2) + 2$\n$= 3(4) + 2 + 2$\n$= 12 + 2 + 2$\n$= 16$\n\n**Common Mistakes to Avoid:**\n• Computing $(-2)^2 = -4$ instead of $4$.\n• Getting $3(4) - 2 + 2 = 12$ — forgetting that $-(-2) = +2$.\n\n**Verification:** $3(4) - (-2) + 2 = 12 + 2 + 2 = 16$ ✓\n\n**Test Day Takeaway:** $(-2)^2 = 4$ (positive). $-(-2) = +2$. Both signs flip when substituting negatives.",
          skills: ["function-evaluation", "quadratic-functions"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The system of equations below is given.\n\n$x + y = 10$\n$2x - y = 5$\n\nWhat is the value of $y$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$7$" },
            { id: "D", text: "$15$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Add the equations: $3x = 15$, $x = 5$. Then $y = 10 - 5 = 5$.\n\n**The Full Solution:**\n$x + y = 10$\n$2x - y = 5$\nAdd: $3x = 15$, $x = 5$.\n$y = 10 - 5 = 5$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): From a subtraction error.\n• Choice C ($7$): From $x = 3$, then $y = 7$.\n• Choice D ($15$): This is $3x$, not $y$.\n\n**Test Day Takeaway:** When one equation has $+y$ and the other has $-y$, add to eliminate $y$ — or to find $x$ first, then $y$.",
          skills: ["systems-of-equations"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A circular stage has a radius of $10$ feet. What is the area of the stage in square feet?",
          choices: [
            { id: "A", text: "$20\\pi$" },
            { id: "B", text: "$50\\pi$" },
            { id: "C", text: "$100\\pi$" },
            { id: "D", text: "$400\\pi$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Area of a Circle**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $A = \\pi r^2 = \\pi(10)^2 = 100\\pi$.\n\n**The Full Solution:**\n$A = \\pi r^2 = \\pi (10)^2 = 100\\pi$\n\n**Why the wrong answers are tempting:**\n• Choice A ($20\\pi$): Uses $2\\pi r$ (circumference formula) instead of $\\pi r^2$.\n• Choice B ($50\\pi$): From $\\pi(10)(5)$ or a half-area error.\n• Choice D ($400\\pi$): From using diameter ($20$) instead of radius.\n\n**Test Day Takeaway:** Area of a circle $= \\pi r^2$. Circumference $= 2\\pi r$. Don't mix them up.",
          skills: ["circles", "area"]
        },
        {
          id: 15,
          type: "fill-in",
          difficulty: "medium",
          question: "An e-commerce site offers a $15\\%$ discount on a $\\$120$ item. What is the sale price in dollars?",
          correctAnswer: "102",
          explanation: "**SAT Pattern: Percent Discount**\n\n**The correct answer is 102.**\n\n**The Fast Way (15 seconds):** Discount $= 0.15 \\times 120 = 18$. Sale price $= 120 - 18 = 102$.\n\nOr: $120 \\times 0.85 = 102$.\n\n**The Full Solution:**\n$15\\%$ of $120 = 0.15 \\times 120 = 18$\nSale price $= 120 - 18 = 102$\n\n**Common Mistakes to Avoid:**\n• Answering $18$ (the discount, not the sale price).\n• Computing $120 \\times 0.15 = 18$ and stopping.\n\n**Verification:** $\\frac{120 - 102}{120} = \\frac{18}{120} = 0.15 = 15\\%$ ✓\n\n**Test Day Takeaway:** Sale price $=$ original $\\times (1 - \\text{discount rate})$.",
          skills: ["percents", "word-problems"]
        },

        // ===== HARD (Q16-Q22) =====
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $g(x) = -4(x + 1)^2 + 16$ has a maximum value. What is this maximum value?",
          choices: [
            { id: "A", text: "$-4$" },
            { id: "B", text: "$-1$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$16$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Maximum from Vertex Form**\n\n**Choice D is correct.**\n\n**The Fast Way (5 seconds):** In $g(x) = -4(x+1)^2 + 16$, vertex form gives maximum $= k = 16$ (since $a = -4 < 0$).\n\n**The Full Solution:**\n$g(x) = -4(x + 1)^2 + 16$ is in vertex form $a(x-h)^2 + k$.\nVertex: $(-1, 16)$.\nSince $a = -4 < 0$, the parabola opens downward, so the maximum is $y = 16$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($-4$): The coefficient $a$, not the maximum.\n• Choice B ($-1$): The $x$-coordinate of the vertex.\n• Choice C ($4$): From $|-4| = 4$.\n\n**Test Day Takeaway:** In vertex form, the max (if $a < 0$) or min (if $a > 0$) is $k$.",
          skills: ["vertex-form", "quadratic-functions"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $\\sqrt{3x - 2} = 4$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$\\frac{14}{3}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Radical Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Square both sides: $3x - 2 = 16$. $3x = 18$. $x = 6$.\n\n**The Full Solution:**\n$\\sqrt{3x - 2} = 4$\n$3x - 2 = 16$\n$3x = 18$\n$x = 6$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): From $\\sqrt{3(2) - 2} = \\sqrt{4} = 2 \\neq 4$.\n• Choice B ($4$): Uses the right side directly.\n• Choice D ($\\frac{14}{3}$): From $3x - 2 = 4$ instead of $3x - 2 = 16$ (forgetting to square).\n\n**Verification:** $\\sqrt{3(6) - 2} = \\sqrt{16} = 4$ ✓\n\n**Test Day Takeaway:** Square both sides to remove the radical, then solve the linear equation.",
          skills: ["radical-equations", "solving-equations"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "A cone has a radius of $6$ cm and a height of $10$ cm. What is the volume of the cone, in cubic centimeters, divided by $\\pi$? ($V = \\frac{1}{3}\\pi r^2 h$)",
          correctAnswer: "120",
          explanation: "**SAT Pattern: Volume Formula Application**\n\n**The correct answer is 120.**\n\n**The Fast Way (10 seconds):** $V = \\frac{1}{3}\\pi(36)(10) = \\frac{360\\pi}{3} = 120\\pi$. Divided by $\\pi$: $120$.\n\n**The Full Solution:**\n$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(6)^2(10) = \\frac{1}{3}\\pi(360) = 120\\pi$\n$\\frac{V}{\\pi} = 120$\n\n**Common Mistakes to Avoid:**\n• Forgetting $\\frac{1}{3}$: $\\pi(36)(10) = 360\\pi$.\n• Answering $120\\pi$ when the question asks for $V/\\pi$.\n\n**Verification:** $\\frac{1}{3}(36)(10) = \\frac{360}{3} = 120$ ✓\n\n**Test Day Takeaway:** Cone volume $= \\frac{1}{3} \\times$ cylinder volume. Don't forget the $\\frac{1}{3}$.",
          skills: ["volume"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "For what value of $m$ does the system below have no solution?\n\n$3x + 4y = 12$\n$9x + my = 15$",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$8$" },
            { id: "C", text: "$12$" },
            { id: "D", text: "$36$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: No Solution — Parallel Lines**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** No solution means parallel lines. Multiply the first equation by $3$: $9x + 12y = 36$. Compare with $9x + my = 15$. For parallel lines: $m = 12$ (same left side) but $15 \\neq 36$ (different right side).\n\n**The Full Solution:**\nMultiply first equation by $3$: $9x + 12y = 36$\nSecond equation: $9x + my = 15$\n\nFor no solution: $\\frac{9}{9} = \\frac{m}{12} \\neq \\frac{15}{36}$\n$\\frac{m}{12} = 1$\nWait, let me redo: $\\frac{9}{9} = \\frac{4}{m/3}$... \n\nSimpler: for the lines to be parallel, the ratio of coefficients must be equal: $\\frac{9}{3} = \\frac{m}{4}$, so $3 = \\frac{m}{4}$, $m = 12$.\nCheck constants: $\\frac{15}{12} \\neq 3$, so no solution ✓.\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): The original $y$-coefficient.\n• Choice B ($8$): $4 \\times 2$.\n• Choice D ($36$): $12 \\times 3$ or the scaled constant.\n\n**Test Day Takeaway:** No solution: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$.",
          skills: ["systems-of-equations", "linear-equations"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A restaurant's customer base grows by $5\\%$ each month. If it starts with $400$ customers, which expression models the number of customers after $m$ months?",
          choices: [
            { id: "A", text: "$400 + 5m$" },
            { id: "B", text: "$400(0.05)^m$" },
            { id: "C", text: "$400(1.05)^m$" },
            { id: "D", text: "$400(1.5)^m$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $5\\%$ growth means multiply by $1.05$ each month. Model: $400(1.05)^m$.\n\n**The Full Solution:**\nGrowth rate $= 5\\% = 0.05$\nGrowth factor $= 1 + 0.05 = 1.05$\nModel: $400(1.05)^m$\n\n**Why the wrong answers are tempting:**\n• Choice A ($400 + 5m$): Linear growth, not exponential.\n• Choice B ($400(0.05)^m$): Uses the rate instead of $1 +$ rate. After $1$ month: $400(0.05) = 20$.\n• Choice D ($400(1.5)^m$): Uses $50\\%$ growth instead of $5\\%$.\n\n**Test Day Takeaway:** Growth factor $= 1 +$ rate. The initial value goes in front.",
          skills: ["exponential-functions"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "In the $xy$-plane, the parabola $y = x^2 + 4x + c$ passes through the point $(2, 10)$. What is the value of $c$?",
          correctAnswer: "-2",
          explanation: "**SAT Pattern: Finding a Parameter from a Known Point**\n\n**The correct answer is -2.**\n\n**The Fast Way (15 seconds):** Plug in $(2, 10)$: $10 = (2)^2 + 4(2) + c = 4 + 8 + c = 12 + c$. So $c = -2$.\n\n**The Full Solution:**\n$y = x^2 + 4x + c$\nSubstitute $(2, 10)$:\n$10 = 4 + 8 + c$\n$10 = 12 + c$\n$c = -2$\n\n**Common Mistakes to Avoid:**\n• Getting $c = 2$ from $10 - 8 = 2$ (forgetting the $x^2$ term).\n• Getting $c = -6$ from $10 - 16 = -6$ (computing $4(2) = 16$ instead of $4 + 8$).\n\n**Verification:** $y = (2)^2 + 4(2) + (-2) = 4 + 8 - 2 = 10$ ✓\n\n**Test Day Takeaway:** Substitute the given point into the equation and solve for the unknown constant.",
          skills: ["quadratic-functions", "solving-equations"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In triangle $PQR$, $\\angle Q = 90°$, $PQ = 6$, and $QR = 8$. What is $\\cos(R)$?",
          choices: [
            { id: "A", text: "$\\frac{6}{10}$" },
            { id: "B", text: "$\\frac{8}{10}$" },
            { id: "C", text: "$\\frac{6}{8}$" },
            { id: "D", text: "$\\frac{10}{8}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Right Triangle Trigonometry (SOH-CAH-TOA)**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Hypotenuse $PR = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$. $\\cos(R) = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{QR}{PR} = \\frac{8}{10}$.\n\n**The Full Solution:**\n$PR = \\sqrt{PQ^2 + QR^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$\n\nFrom angle $R$:\n- Adjacent side $= QR = 8$\n- Opposite side $= PQ = 6$\n- Hypotenuse $= PR = 10$\n\n$\\cos(R) = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{8}{10} = \\frac{4}{5}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{6}{10}$): This is $\\sin(R)$, not $\\cos(R)$.\n• Choice C ($\\frac{6}{8}$): This is $\\tan(R)$ or a ratio without the hypotenuse.\n• Choice D ($\\frac{10}{8}$): This is $\\sec(R)$, the reciprocal of cosine.\n\n**Test Day Takeaway:** CAH: $\\cos = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$. Identify which sides are adjacent and opposite to the given angle.",
          skills: ["right-triangle-trig", "triangles"]
        }
      ]
    }
  ]
};

export default practiceTest9;
