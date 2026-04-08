// Practice Test 2 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty

export const practiceTest2 = {
  id: "practice-test-2",
  title: "Practice Test 2",
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
          question: "A factory inspects $500$ light bulbs and finds that $29$ out of every $100$ bulbs have a minor defect. Based on this rate, what is the probability that a randomly selected bulb from this factory has a minor defect?",
          choices: [
            { id: "A", text: "$\\frac{29}{500}$" },
            { id: "B", text: "$\\frac{29}{100}$" },
            { id: "C", text: "$\\frac{100}{29}$" },
            { id: "D", text: "$\\frac{29}{1{,}000}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Probability from a Rate**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** \"$29$ out of every $100$\" directly gives the probability as $\\frac{29}{100}$.\n\n**The Full Solution:**\nThe rate is $29$ per $100$, so the probability $= \\frac{29}{100} = 0.29$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{29}{500}$): Uses the total inspected as the denominator, but the rate is given per $100$.\n• Choice C ($\\frac{100}{29}$): Flips the fraction.\n• Choice D ($\\frac{29}{1{,}000}$): Arbitrarily increases the denominator.\n\n**Test Day Takeaway:** When a rate is given as \"$X$ out of every $Y$,\" the probability is simply $\\frac{X}{Y}$.",
          skills: ["probability", "word-problems"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which expression is equivalent to $(3x^2 + 2x - 5) + (x^2 + 4x + 1)$?",
          choices: [
            { id: "A", text: "$4x^2 + 6x - 4$" },
            { id: "B", text: "$3x^4 + 6x - 4$" },
            { id: "C", text: "$4x^2 + 2x - 4$" },
            { id: "D", text: "$4x^2 + 6x - 6$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Adding Polynomials**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Combine like terms: $3x^2 + x^2 = 4x^2$, $2x + 4x = 6x$, $-5 + 1 = -4$. Result: $4x^2 + 6x - 4$.\n\n**The Full Solution:**\n$(3x^2 + 2x - 5) + (x^2 + 4x + 1)$\n$= (3+1)x^2 + (2+4)x + (-5+1)$\n$= 4x^2 + 6x - 4$\n\n**Why the wrong answers are tempting:**\n• Choice B ($3x^4$): Multiplies the $x^2$ terms instead of adding: $3 \\cdot 1 = 3$ and $x^2 \\cdot x^2 = x^4$.\n• Choice C ($4x^2 + 2x - 4$): Adds $x^2$ terms correctly but misses $4x$ from the second polynomial.\n• Choice D ($4x^2 + 6x - 6$): Subtracts constants incorrectly: $-5 + 1 = -4$, not $-6$.\n\n**Test Day Takeaway:** When adding polynomials, combine like terms (same variable, same exponent). Do not multiply exponents.",
          skills: ["polynomial-operations"]
        },
        {
          id: 3,
          type: "fill-in",
          difficulty: "easy",
          question: "A tablet costs $\\$240$ and is on sale for $\\$180$. What is the percent discount?",
          correctAnswer: "25",
          explanation: "**SAT Pattern: Percent Decrease**\n\n**The correct answer is 25.**\n\n**The Fast Way (15 seconds):** Discount $= 240 - 180 = 60$. Percent $= \\frac{60}{240} \\times 100 = 25\\%$.\n\n**The Full Solution:**\nDiscount amount $= 240 - 180 = 60$\nPercent discount $= \\frac{60}{240} \\times 100 = 25\\%$\n\n**Common Mistakes to Avoid:**\n• Dividing by $180$ instead of $240$: $\\frac{60}{180} = 33.\\overline{3}\\%$\n• Forgetting to multiply by $100$: answering $0.25$\n\n**Verification:** $240 \\times 0.25 = 60$, and $240 - 60 = 180$ ✓\n\n**Test Day Takeaway:** Percent change = (change / original) times 100. Always divide by the ORIGINAL value.",
          skills: ["percents"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Lorenzo buys a box of cereal for $\\$2$ and strawberries at $\\$1.90$ per pound. His total bill is $\\$9.60$. Which equation can be used to find $p$, the number of pounds of strawberries Lorenzo bought?",
          choices: [
            { id: "A", text: "$1.90p + 2 = 9.60$" },
            { id: "B", text: "$2p + 1.90 = 9.60$" },
            { id: "C", text: "$1.90(p + 2) = 9.60$" },
            { id: "D", text: "$1.90p = 9.60$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Translating a Word Problem into an Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** Total $=$ cereal $+$ strawberries $= 2 + 1.90p$. Set equal to $9.60$.\n\n**The Full Solution:**\nCereal cost: $\\$2$ (fixed).\nStrawberry cost: $\\$1.90 \\times p$ pounds.\nTotal: $2 + 1.90p = 9.60$, which is the same as $1.90p + 2 = 9.60$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($2p + 1.90 = 9.60$): Swaps the cost per unit and the fixed cost.\n• Choice C ($1.90(p + 2) = 9.60$): Applies the $\\$1.90$ rate to both the pounds and the cereal.\n• Choice D ($1.90p = 9.60$): Forgets the $\\$2$ cereal cost entirely.\n\n**Test Day Takeaway:** Fixed costs are added as constants. Variable costs multiply the quantity. Total = fixed + (rate)(quantity).",
          skills: ["word-problems", "linear-equations"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The function $g(x) = 500(0.80)^x$ models the value in dollars of a smartphone after $x$ years. What does $0.80$ represent in this context?",
          choices: [
            { id: "A", text: "The phone loses $80\\%$ of its value each year." },
            { id: "B", text: "The phone retains $80\\%$ of its value each year." },
            { id: "C", text: "The phone was purchased for $\\$80$." },
            { id: "D", text: "The phone loses $\\$0.80$ each year." }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Interpreting Exponential Functions**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** In $a \\cdot b^x$, the base $b = 0.80$ means $80\\%$ of the value remains each year (a $20\\%$ loss per year).\n\n**The Full Solution:**\nIn the exponential model $g(x) = 500(0.80)^x$:\n- $500$ is the initial value\n- $0.80$ is the decay factor, meaning the phone retains $80\\%$ of its value each year\n\n**Why the wrong answers are tempting:**\n• Choice A: Confuses losing $80\\%$ with retaining $80\\%$. The phone loses $20\\%$.\n• Choice C: $500$ is the purchase price, not $80$.\n• Choice D: This would be linear decay, not exponential.\n\n**Test Day Takeaway:** A base of $0.80$ means retaining $80\\%$ (losing $20\\%$). The base is the retention rate.",
          skills: ["exponential-functions", "function-interpretation"]
        },
        {
          id: 6,
          type: "fill-in",
          difficulty: "medium",
          question: "A school fundraiser sells $12$ identical gift baskets using a $\\$36$ discount code. After applying the discount, the total paid is $\\$180$. What was the original price, in dollars, of each gift basket?",
          correctAnswer: "18",
          explanation: "**SAT Pattern: Two-Step Word Problem with Coupon**\n\n**The correct answer is $18$.**\n\n**The Fast Way (15 seconds):** Total before discount $= 180 + 36 = 216$. Price per basket $= 216 \\div 12 = 18$.\n\n**The Full Solution:**\nLet $p$ be the original price per basket.\n$12p - 36 = 180$\n$12p = 216$\n$p = 18$\n\n**Common Mistakes to Avoid:**\n• Forgetting to add back the discount: $180 \\div 12 = 15$.\n• Subtracting the discount instead of adding: $(180 - 36) \\div 12 = 12$.\n\n**Verification:** $12 \\times 18 - 36 = 216 - 36 = 180$ ✓\n\n**Test Day Takeaway:** When a discount is applied to the total, add it back to find the pre-discount amount, then divide by the number of items.",
          skills: ["word-problems", "solving-equations"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The function $y = 3(x - 14)(x + 5)(x + 4)$ is graphed in the $xy$-plane. What is one of the $x$-intercepts of the graph?",
          choices: [
            { id: "A", text: "$(3, 0)$" },
            { id: "B", text: "$(14, 0)$" },
            { id: "C", text: "$(-14, 0)$" },
            { id: "D", text: "$(5, 0)$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Finding x-intercepts from Factored Form**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Set each factor to $0$: $x - 14 = 0 \\Rightarrow x = 14$; $x + 5 = 0 \\Rightarrow x = -5$; $x + 4 = 0 \\Rightarrow x = -4$. The $x$-intercept $(14, 0)$ matches choice B.\n\n**The Full Solution:**\nThe $x$-intercepts occur where $y = 0$. Setting each factor equal to zero:\n$x - 14 = 0 \\Rightarrow x = 14$\n$x + 5 = 0 \\Rightarrow x = -5$\n$x + 4 = 0 \\Rightarrow x = -4$\nThe $x$-intercepts are $(14, 0)$, $(-5, 0)$, and $(-4, 0)$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($(3, 0)$): Uses the leading coefficient $3$ as an $x$-intercept.\n• Choice C ($(-14, 0)$): Flips the sign from $(x - 14) = 0$.\n• Choice D ($(5, 0)$): Flips the sign from $(x + 5) = 0$.\n\n**Test Day Takeaway:** To find $x$-intercepts, set each factor equal to zero and solve. Watch the signs: $(x - a) = 0$ gives $x = a$, and $(x + a) = 0$ gives $x = -a$.",
          skills: ["quadratic-equations", "factoring"]
        },
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A tech company has $120$ employees. The company plans to increase its workforce by $15\\%$ each year. Which expression represents the number of employees after $t$ years?",
          choices: [
            { id: "A", text: "$120(0.15)^t$" },
            { id: "B", text: "$120(1.15)^t$" },
            { id: "C", text: "$120 + 15t$" },
            { id: "D", text: "$120(0.85)^t$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Increasing by $15\\%$ means multiplying by $1.15$ each year. Starting at $120$: $120(1.15)^t$.\n\n**The Full Solution:**\nGrowth rate $= 15\\% = 0.15$\nGrowth factor $= 1 + 0.15 = 1.15$\nAfter $t$ years: $120(1.15)^t$\n\n**Why the wrong answers are tempting:**\n• Choice A: Uses $0.15$ as the base, which would make the population shrink toward $0$.\n• Choice C: Models linear growth ($15$ employees per year), not percentage growth.\n• Choice D: Uses $0.85$, which models a $15\\%$ decrease each year.\n\n**Test Day Takeaway:** Growth by $r\\%$ means multiply by $(1 + r/100)$ each period.",
          skills: ["exponential-functions", "word-problems"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Line $n$ passes through the points $(1, -2)$ and $(5, 6)$. Which of the following is an equation of line $n$?",
          choices: [
            { id: "A", text: "$y = 2x - 4$" },
            { id: "B", text: "$y = 2x + 4$" },
            { id: "C", text: "$y = \\frac{1}{2}x - 4$" },
            { id: "D", text: "$y = -2x + 4$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Finding Equation of a Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Slope $= \\frac{6 - (-2)}{5 - 1} = \\frac{8}{4} = 2$. Use $(1, -2)$: $-2 = 2(1) + b$, so $b = -4$. Equation: $y = 2x - 4$.\n\n**The Full Solution:**\n$m = \\frac{6 - (-2)}{5 - 1} = \\frac{8}{4} = 2$\nUsing point $(1, -2)$:\n$y - (-2) = 2(x - 1)$\n$y + 2 = 2x - 2$\n$y = 2x - 4$\n\n**Why the wrong answers are tempting:**\n• Choice B ($y = 2x + 4$): Correct slope but wrong sign on the intercept.\n• Choice C ($y = \\frac{1}{2}x - 4$): Uses the reciprocal of the slope (run over rise).\n• Choice D ($y = -2x + 4$): Negates the slope.\n\n**Test Day Takeaway:** Find slope first ($\\frac{\\Delta y}{\\Delta x}$), then plug a point into $y = mx + b$ to find $b$. Verify with the other point.",
          skills: ["slope", "linear-functions"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table below shows the number of animals at a shelter.\n\n| | Adopted | Not Adopted | Total |\n|---|---|---|---|\n| Dogs | $35$ | $15$ | $50$ |\n| Cats | $25$ | $25$ | $50$ |\n| Total | $60$ | $40$ | $100$ |\n\nOf the dogs at the shelter, what fraction were adopted?",
          choices: [
            { id: "A", text: "$\\frac{35}{100}$" },
            { id: "B", text: "$\\frac{35}{60}$" },
            { id: "C", text: "$\\frac{35}{50}$" },
            { id: "D", text: "$\\frac{50}{100}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Conditional Probability from a Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** \"Of the dogs\" = denominator is $50$ (total dogs). Adopted dogs $= 35$. Fraction $= \\frac{35}{50}$.\n\n**The Full Solution:**\nThe condition restricts us to dogs only (total $= 50$).\nOf those, $35$ were adopted.\nFraction $= \\frac{35}{50} = \\frac{7}{10}$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{35}{100}$): Uses the grand total as the denominator. This would be the probability a random animal is an adopted dog.\n• Choice B ($\\frac{35}{60}$): Uses total adopted as the denominator. This would be the probability an adopted animal is a dog.\n• Choice D ($\\frac{50}{100}$): Finds the fraction that are dogs overall.\n\n**Test Day Takeaway:** In conditional probability, the group described after \"of\" determines the denominator. \"Of the dogs\" means denominator = total dogs.",
          skills: ["two-way-tables", "probability"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "If $5(x - 3) = 2x + 6$, what is the value of $x$?",
          correctAnswer: "7",
          explanation: "**SAT Pattern: Multi-Step Equation with Distribution**\n\n**The correct answer is 7.**\n\n**The Fast Way (20 seconds):** $5x - 15 = 2x + 6$. $3x = 21$. $x = 7$.\n\n**The Full Solution:**\n$5(x - 3) = 2x + 6$\n$5x - 15 = 2x + 6$\n$5x - 2x = 6 + 15$\n$3x = 21$\n$x = 7$\n\n**Common Mistakes to Avoid:**\n• Distributing incorrectly: $5(x-3) = 5x - 3$ instead of $5x - 15$\n• Moving terms to the wrong side without changing signs\n\n**Verification:** $5(7-3) = 5(4) = 20$ and $2(7) + 6 = 20$ ✓\n\n**Test Day Takeaway:** Distribute first, collect variable terms on one side, constants on the other.",
          skills: ["solving-equations", "linear-equations"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A savings account earns simple interest. The balance after $t$ years is given by $B(t) = 3{,}000 + 120t$. What is the annual interest rate?",
          choices: [
            { id: "A", text: "$0.4\\%$" },
            { id: "B", text: "$4\\%$" },
            { id: "C", text: "$12\\%$" },
            { id: "D", text: "$40\\%$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Interpreting a Linear Model as Simple Interest**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** The principal is $\\$3{,}000$ and the annual interest is $\\$120$. Rate $= \\frac{120}{3{,}000} = 0.04 = 4\\%$.\n\n**The Full Solution:**\nSimple interest formula: $B = P + Prt = P(1 + rt)$, or equivalently $B = P + (Pr)t$.\nHere $P = 3{,}000$ and $Pr = 120$, so $r = \\frac{120}{3{,}000} = 0.04 = 4\\%$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($0.4\\%$): Divides by $30{,}000$ instead of $3{,}000$.\n• Choice C ($12\\%$): Uses $\\frac{120}{1{,}000}$ (wrong principal).\n• Choice D ($40\\%$): Uses $\\frac{120}{300}$ (wrong decimal place).\n\n**Test Day Takeaway:** Interest rate = annual interest / principal. Identify the principal ($y$-intercept) and interest per year (slope) from the equation.",
          skills: ["function-interpretation", "percents"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In the figure, lines $p$ and $q$ are parallel, and a transversal crosses both lines. If one angle formed at line $p$ measures $72°$, what is the measure of its corresponding angle at line $q$?",
          choices: [
            { id: "A", text: "$18°$" },
            { id: "B", text: "$72°$" },
            { id: "C", text: "$108°$" },
            { id: "D", text: "$144°$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Corresponding Angles with Parallel Lines**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Corresponding angles formed by parallel lines and a transversal are equal. So the angle is $72°$.\n\n**The Full Solution:**\nWhen two parallel lines are cut by a transversal, corresponding angles are congruent. Therefore the corresponding angle at line $q$ also measures $72°$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($18°$): From $90 - 72 = 18$, using a complementary angle relationship.\n• Choice C ($108°$): This is the supplementary angle ($180 - 72$). Supplementary angles are co-interior (same-side interior), not corresponding.\n• Choice D ($144°$): From $2 \\times 72 = 144$.\n\n**Test Day Takeaway:** Corresponding angles are equal. Alternate interior and alternate exterior angles are also equal. Supplementary angles are co-interior angles.",
          skills: ["parallel-lines", "angles"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The system of equations below has solution $(x, y)$.\n\n$x + 3y = 13$\n$2x - y = 5$\n\nWhat is the value of $x + y$?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$7$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice D is correct.**\n\n**The Fast Way (30 seconds):** From the second equation, $y = 2x - 5$. Substitute into the first: $x + 3(2x - 5) = 13$, so $7x - 15 = 13$, $7x = 28$, $x = 4$. Then $y = 2(4) - 5 = 3$. So $x + y = 7$.\n\n**The Full Solution:**\n$x + 3y = 13$ ... (1)\n$2x - y = 5$ ... (2)\nFrom (2): $y = 2x - 5$.\nSubstitute into (1): $x + 3(2x - 5) = 13$\n$x + 6x - 15 = 13$\n$7x = 28$\n$x = 4$, $y = 2(4) - 5 = 3$\n$x + y = 4 + 3 = 7$\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): This is the value of $x$ alone.\n• Choice B ($5$): From $\\frac{13 - 5}{2} + 1$, an incorrect shortcut.\n• Choice C ($6$): From $13 - 7$, a calculation error.\n\n**Verification:** $4 + 3(3) = 4 + 9 = 13$ ✓ and $2(4) - 3 = 5$ ✓\n\n**Test Day Takeaway:** Use substitution when one equation is easy to solve for a variable. Always check both equations.",
          skills: ["systems-of-equations", "solving-equations"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A survey of $400$ students found that $60\\%$ plan to attend a school event. The margin of error is $\\pm 4\\%$. A second survey of $1{,}600$ students from the same school found that $58\\%$ plan to attend. Which of the following is the best conclusion?",
          choices: [
            { id: "A", text: "The first survey overestimated, so it is unreliable." },
            { id: "B", text: "The second survey's result is within the first survey's margin of error, so both surveys are consistent." },
            { id: "C", text: "The second survey proves that exactly $58\\%$ of students will attend." },
            { id: "D", text: "Neither survey is accurate because they give different results." }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Margin of Error and Survey Comparison**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** First survey: $60\\% \\pm 4\\%$ gives the interval $[56\\%, 64\\%]$. Second survey result of $58\\%$ falls within this interval, so the results are consistent.\n\n**The Full Solution:**\nThe first survey's confidence interval is $60\\% - 4\\% = 56\\%$ to $60\\% + 4\\% = 64\\%$.\nThe second survey found $58\\%$, which is between $56\\%$ and $64\\%$.\nSince $58\\%$ is within the first survey's margin of error, the two surveys are consistent.\n\n**Why the wrong answers are tempting:**\n• Choice A: A result within the margin of error does not mean the survey overestimated.\n• Choice C: Surveys provide estimates, never exact values.\n• Choice D: Different point estimates do not mean inaccuracy — margins of error account for this variation.\n\n**Test Day Takeaway:** A margin of error creates a plausible range. If another result falls within that range, the results are consistent.",
          skills: ["margin-of-error", "statistics"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $h$ is defined by $h(x) = 2(x - 3)^2 - 8$. What are the $x$-intercepts of the graph of $y = h(x)$?",
          choices: [
            { id: "A", text: "$x = 1$ and $x = 5$" },
            { id: "B", text: "$x = -1$ and $x = 7$" },
            { id: "C", text: "$x = 3$ and $x = -8$" },
            { id: "D", text: "$x = -3$ and $x = 8$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Finding x-intercepts from Vertex Form**\n\n**Choice A is correct.**\n\n**The Fast Way (40 seconds):** Set $h(x) = 0$: $2(x-3)^2 = 8$, $(x-3)^2 = 4$, $x - 3 = \\pm 2$, so $x = 5$ or $x = 1$.\n\n**The Full Solution:**\n$2(x - 3)^2 - 8 = 0$\n$2(x - 3)^2 = 8$\n$(x - 3)^2 = 4$\n$x - 3 = \\pm 2$\n$x = 3 + 2 = 5$ or $x = 3 - 2 = 1$\n\n**Why the wrong answers are tempting:**\n• Choice B: From $x - 3 = \\pm 4$ instead of $\\pm 2$, forgetting to divide by $2$.\n• Choice C: Using the vertex $x$-coordinate ($3$) and the constant ($-8$) as intercepts.\n• Choice D: Sign errors on both values.\n\n**Test Day Takeaway:** To find $x$-intercepts from vertex form, set $y = 0$ and solve step by step. Do not forget to take the square root.",
          skills: ["vertex-form", "quadratic-equations"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $f(x) = x^2 + 4x + c$ and the equation $f(x) = 0$ has exactly one real solution, what is the value of $c$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$16$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Discriminant Equals Zero**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** One solution means $b^2 - 4ac = 0$: $16 - 4c = 0$, so $c = 4$.\n\n**The Full Solution:**\nFor $x^2 + 4x + c = 0$ to have exactly one real solution:\n$b^2 - 4ac = 0$\n$(4)^2 - 4(1)(c) = 0$\n$16 - 4c = 0$\n$c = 4$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): From $\\frac{4}{2}$, a guess.\n• Choice C ($8$): From $\\frac{16}{2}$, dividing by $2$ instead of $4$.\n• Choice D ($16$): Using $b^2$ without dividing by $4a$.\n\n**Test Day Takeaway:** Exactly one real solution means discriminant $= 0$. Use $b^2 - 4ac = 0$ to find the missing value.",
          skills: ["discriminant", "quadratic-equations"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "A circle in the $xy$-plane has the equation $(x-2)^2 + (y+3)^2 = 36$. What is the radius of the circle?",
          correctAnswer: "6",
          explanation: "**SAT Pattern: Reading a Circle Equation**\n\n**The correct answer is 6.**\n\n**The Fast Way (10 seconds):** $(x-h)^2 + (y-k)^2 = r^2$, so $r^2 = 36$ and $r = 6$.\n\n**The Full Solution:**\nThe standard form of a circle equation is $(x-h)^2 + (y-k)^2 = r^2$.\nHere $r^2 = 36$, so $r = \\sqrt{36} = 6$.\n\n**Common Mistakes to Avoid:**\n• Answering $36$ (that is $r^2$, not $r$)\n• Answering $18$ (from $36/2$)\n\n**Verification:** $r^2 = 6^2 = 36$ ✓\n\n**Test Day Takeaway:** The number on the right side of the circle equation is $r^2$, not $r$. Always take the square root.",
          skills: ["circle-equations"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A population of $800$ bacteria decreases by $10\\%$ each hour. Which expression gives the population after $5$ hours?",
          choices: [
            { id: "A", text: "$800(0.10)^5$" },
            { id: "B", text: "$800(0.90)^5$" },
            { id: "C", text: "$800 - 0.10(5)$" },
            { id: "D", text: "$800(1.10)^5$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Exponential Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Decreasing by $10\\%$ means retaining $90\\% = 0.90$ each hour. After $5$ hours: $800(0.90)^5$.\n\n**The Full Solution:**\nDecay factor $= 1 - 0.10 = 0.90$\nAfter $5$ hours: $800(0.90)^5$\n\n**Why the wrong answers are tempting:**\n• Choice A: Uses $0.10$ (the loss rate) instead of $0.90$ (the retention rate).\n• Choice C: Models linear decrease, not exponential.\n• Choice D: Uses $1.10$, which models growth, not decay.\n\n**Test Day Takeaway:** Decrease by $r\\%$ means multiply by $(1 - r/100)$ each period.",
          skills: ["exponential-functions"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $f$ is defined by $f(x) = 3x^2 - 12x + 7$. What is the minimum value of $f(x)$?",
          choices: [
            { id: "A", text: "$-5$" },
            { id: "B", text: "$-4$" },
            { id: "C", text: "$2$" },
            { id: "D", text: "$7$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Minimum Value of a Quadratic**\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** Vertex at $x = \\frac{-(-12)}{2(3)} = 2$. $f(2) = 3(4) - 12(2) + 7 = 12 - 24 + 7 = -5$.\n\n**The Full Solution:**\nSince $a = 3 > 0$, the parabola opens upward and the vertex gives the minimum.\nVertex $x$-coordinate: $x = \\frac{-b}{2a} = \\frac{12}{6} = 2$\n$f(2) = 3(2)^2 - 12(2) + 7 = 12 - 24 + 7 = -5$\n\n**Why the wrong answers are tempting:**\n• Choice B ($-4$): Arithmetic error: $12 - 24 + 7 = -5$, not $-4$.\n• Choice C ($2$): This is the $x$-coordinate of the vertex, not the minimum value.\n• Choice D ($7$): This is the constant term (the $y$-intercept), not the minimum.\n\n**Test Day Takeaway:** For $f(x) = ax^2 + bx + c$ with $a > 0$, the minimum is $f\\left(\\frac{-b}{2a}\\right)$.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A rectangular garden has a length that is $3$ meters more than twice its width. If the perimeter of the garden is $42$ meters, what is the width?",
          choices: [
            { id: "A", text: "$5$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$7$" },
            { id: "D", text: "$9$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Perimeter with Variable Dimensions**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Width $= w$, length $= 2w + 3$. Perimeter: $2(w + 2w + 3) = 42$, so $2(3w + 3) = 42$, $3w + 3 = 21$, $3w = 18$, $w = 6$.\n\n**The Full Solution:**\nLet $w$ = width. Length $= 2w + 3$.\nPerimeter $= 2(w + 2w + 3) = 42$\n$2(3w + 3) = 42$\n$6w + 6 = 42$\n$6w = 36$\n$w = 6$\n\nCheck: width $= 6$, length $= 15$. Perimeter $= 2(6 + 15) = 42$ ✓\n\n**Why the wrong answers are tempting:**\n• Choice A ($5$): Length $= 13$, perimeter $= 36 \\neq 42$.\n• Choice C ($7$): Length $= 17$, perimeter $= 48 \\neq 42$.\n• Choice D ($9$): Length $= 21$, perimeter $= 60 \\neq 42$.\n\n**Test Day Takeaway:** Translate words to equations, then solve. Check your answer with the original conditions.",
          skills: ["linear-equations", "word-problems"]
        },
        {
          id: 22,
          type: "fill-in",
          difficulty: "hard",
          question: "If $\\sqrt{2x + 1} = 7$, what is the value of $x$?",
          correctAnswer: "24",
          explanation: "**SAT Pattern: Solving a Radical Equation**\n\n**The correct answer is 24.**\n\n**The Fast Way (15 seconds):** Square both sides: $2x + 1 = 49$. $2x = 48$. $x = 24$.\n\n**The Full Solution:**\n$\\sqrt{2x + 1} = 7$\n$(\\sqrt{2x + 1})^2 = 7^2$\n$2x + 1 = 49$\n$2x = 48$\n$x = 24$\n\n**Common Mistakes to Avoid:**\n• Forgetting to square both sides and trying to subtract: $2x = 6$\n• Squaring only one side: $2x + 1 = 7$\n\n**Verification:** $\\sqrt{2(24) + 1} = \\sqrt{49} = 7$ ✓\n\n**Test Day Takeaway:** Square both sides to eliminate a square root. Always verify the solution to make sure it works.",
          skills: ["radical-equations", "solving-equations"]
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
          type: "multiple-choice",
          difficulty: "easy",
          question: "A playlist has $80$ songs. If $20$ of the songs are by a single artist, what fraction of the playlist is by that artist?",
          choices: [
            { id: "A", text: "$\\frac{1}{5}$" },
            { id: "B", text: "$\\frac{1}{4}$" },
            { id: "C", text: "$\\frac{1}{3}$" },
            { id: "D", text: "$\\frac{2}{5}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Basic Fraction**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $\\frac{20}{80} = \\frac{1}{4}$.\n\n**The Full Solution:**\nFraction $= \\frac{20}{80} = \\frac{1}{4}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{1}{5}$): From $\\frac{20}{100}$, using a wrong total.\n• Choice C ($\\frac{1}{3}$): Estimation error.\n• Choice D ($\\frac{2}{5}$): From $\\frac{20}{50}$.\n\n**Test Day Takeaway:** Simplify fractions by dividing numerator and denominator by the GCF.",
          skills: ["ratios-proportions"]
        },
        {
          id: 2,
          type: "fill-in",
          difficulty: "easy",
          question: "If $x - 8 = 14$, what is the value of $x$?",
          correctAnswer: "22",
          explanation: "**SAT Pattern: One-Step Equation**\n\n**The correct answer is 22.**\n\n**The Fast Way (5 seconds):** $x = 14 + 8 = 22$.\n\n**The Full Solution:**\n$x - 8 = 14$\n$x = 14 + 8 = 22$\n\n**Common Mistakes to Avoid:**\n• Subtracting: $14 - 8 = 6$\n• Adding wrong: $14 + 8 = 21$\n\n**Verification:** $22 - 8 = 14$ ✓\n\n**Test Day Takeaway:** To undo subtraction, add to both sides.",
          skills: ["solving-equations"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A website gets $3{,}500$ visits per day. At this rate, how many visits will it get in $4$ weeks?",
          choices: [
            { id: "A", text: "$14{,}000$" },
            { id: "B", text: "$24{,}500$" },
            { id: "C", text: "$49{,}000$" },
            { id: "D", text: "$98{,}000$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Unit Rate with Conversion**\n\n**Choice D is correct.**\n\n**The Fast Way (15 seconds):** $4$ weeks $= 28$ days. $3{,}500 \\times 28 = 98{,}000$.\n\n**The Full Solution:**\n$4$ weeks $\\times 7$ days/week $= 28$ days\n$3{,}500$ visits/day $\\times 28$ days $= 98{,}000$ visits\n\n**Why the wrong answers are tempting:**\n• Choice A ($14{,}000$): $3{,}500 \\times 4$, forgetting to convert weeks to days.\n• Choice B ($24{,}500$): $3{,}500 \\times 7$, using $1$ week instead of $4$.\n• Choice C ($49{,}000$): $3{,}500 \\times 14$, using $2$ weeks.\n\n**Test Day Takeaway:** Convert units first (weeks to days), then multiply.",
          skills: ["word-problems", "unit-conversion"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A phone battery is at $85\\%$ and loses $5\\%$ every hour. What percent of battery remains after $3$ hours?",
          choices: [
            { id: "A", text: "$65\\%$" },
            { id: "B", text: "$70\\%$" },
            { id: "C", text: "$75\\%$" },
            { id: "D", text: "$80\\%$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Repeated Subtraction**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $85 - 3(5) = 85 - 15 = 70\\%$.\n\n**The Full Solution:**\nBattery lost in $3$ hours $= 3 \\times 5 = 15\\%$\nRemaining $= 85 - 15 = 70\\%$\n\n**Why the wrong answers are tempting:**\n• Choice A ($65\\%$): Subtracting $4 \\times 5 = 20\\%$ instead of $3 \\times 5$.\n• Choice C ($75\\%$): Subtracting $2 \\times 5 = 10\\%$.\n• Choice D ($80\\%$): Subtracting only $1 \\times 5 = 5\\%$.\n\n**Test Day Takeaway:** For constant-rate decrease, multiply the rate by time and subtract from the starting value.",
          skills: ["word-problems", "percents"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "If $2(x + 4) = 18$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$7$" },
            { id: "D", text: "$9$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Two-Step Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $x + 4 = 9$, so $x = 5$.\n\n**The Full Solution:**\n$2(x + 4) = 18$\n$x + 4 = 9$\n$x = 5$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): From $18 \\div 2 = 9$, then $9 - 4 = 5$... actually that gives $5$. Check: from a different error path.\n• Choice C ($7$): From $18 - 4 = 14$, then $14 \\div 2 = 7$ (wrong order of operations).\n• Choice D ($9$): From $18 \\div 2 = 9$ and stopping there.\n\n**Test Day Takeaway:** Divide first to undo the multiplication, then subtract to undo the addition.",
          skills: ["solving-equations", "linear-equations"]
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The system of equations below has solution $(x, y)$. What is the value of $y$?",
          questionFormula: {
            equation: "$$\\begin{cases} x + 3y = 19 \\\\ x - y = 3 \\end{cases}$$"
          },
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$7$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Solving a System by Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Subtract the second from the first: $(x+3y) - (x-y) = 19 - 3$, so $4y = 16$, $y = 4$.\n\n**The Full Solution:**\n$x + 3y = 19$\n$x - y = 3$\nSubtract: $4y = 16$, so $y = 4$.\nCheck: $x = 3 + y = 7$. Then $7 + 12 = 19$ ✓\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): This is $19 - 16$, a stray calculation.\n• Choice C ($5$): From $\\frac{19-3}{3+1}$... no. Possibly dividing $20 \\div 4$.\n• Choice D ($7$): This is the $x$-value, not $y$.\n\n**Test Day Takeaway:** When both equations have the same coefficient on one variable, subtract to eliminate it.",
          skills: ["systems-of-equations"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A data set contains the values $12, 15, 18, 20, 22, 25, 28$. What is the median?",
          choices: [
            { id: "A", text: "$18$" },
            { id: "B", text: "$20$" },
            { id: "C", text: "$22$" },
            { id: "D", text: "$21$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Finding the Median**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** There are $7$ values already in order. The middle value (4th) is $20$.\n\n**The Full Solution:**\n$n = 7$ values. The median is the $\\frac{7+1}{2} = 4$th value.\nOrdered: $12, 15, 18, \\mathbf{20}, 22, 25, 28$\nMedian $= 20$\n\n**Why the wrong answers are tempting:**\n• Choice A ($18$): The 3rd value, one position before the median.\n• Choice C ($22$): The 5th value, one position after the median.\n• Choice D ($21$): Averaging the 4th and 5th values, which is for even-sized data sets.\n\n**Test Day Takeaway:** For an odd number of values, the median is the middle value. For $n$ values, it is the $\\frac{n+1}{2}$th value.",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "If $g(x) = -3x + 20$, for what value of $x$ does $g(x) = 2$?",
          correctAnswer: "6",
          explanation: "**SAT Pattern: Solving a Function Equation**\n\n**The correct answer is 6.**\n\n**The Fast Way (15 seconds):** $-3x + 20 = 2$. $-3x = -18$. $x = 6$.\n\n**The Full Solution:**\n$g(x) = 2$\n$-3x + 20 = 2$\n$-3x = 2 - 20 = -18$\n$x = \\frac{-18}{-3} = 6$\n\n**Common Mistakes to Avoid:**\n• Sign error: $-3x = -18$ gives $x = 6$, not $-6$\n• Dividing $-18 \\div 3 = -6$ and keeping the negative\n\n**Verification:** $g(6) = -3(6) + 20 = -18 + 20 = 2$ ✓\n\n**Test Day Takeaway:** Set the function expression equal to the output value and solve for $x$.",
          skills: ["function-evaluation", "linear-functions"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "An online store sells headphones for $\\$45$ each and earbuds for $\\$20$ each. In one day, the store sold $30$ items for a total of $\\$1{,}050$. How many headphones were sold?",
          choices: [
            { id: "A", text: "$12$" },
            { id: "B", text: "$15$" },
            { id: "C", text: "$18$" },
            { id: "D", text: "$20$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: System of Equations from a Word Problem**\n\n**Choice C is correct.**\n\n**The Fast Way (40 seconds):** Let $h$ = headphones. Earbuds $= 30 - h$. $45h + 20(30-h) = 1050$. $45h + 600 - 20h = 1050$. $25h = 450$. $h = 18$.\n\n**The Full Solution:**\n$h + e = 30$ and $45h + 20e = 1050$\nSubstitute $e = 30 - h$:\n$45h + 20(30-h) = 1050$\n$45h + 600 - 20h = 1050$\n$25h = 450$\n$h = 18$\n\n**Why the wrong answers are tempting:**\n• Choice A ($12$): Check: $45(12) + 20(18) = 540 + 360 = 900 \\neq 1050$.\n• Choice B ($15$): Check: $45(15) + 20(15) = 675 + 300 = 975 \\neq 1050$.\n• Choice D ($20$): Check: $45(20) + 20(10) = 900 + 200 = 1100 \\neq 1050$.\n\n**Test Day Takeaway:** Mixture problems need two equations: one for quantity, one for total value.",
          skills: ["systems-of-equations", "word-problems"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The scatterplot shows the relationship between hours of practice and test scores for $10$ students. The line of best fit has the equation $y = 5x + 60$. What does the slope $5$ represent?",
          choices: [
            { id: "A", text: "Each student practiced $5$ hours." },
            { id: "B", text: "For each additional hour of practice, the predicted score increases by $5$ points." },
            { id: "C", text: "The minimum test score is $5$." },
            { id: "D", text: "There are $5$ students who scored above $60$." }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Interpreting Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Slope = rate of change = predicted increase in $y$ per unit increase in $x$.\n\n**The Full Solution:**\nIn $y = 5x + 60$, the slope $5$ means that for each additional hour of practice, the predicted test score increases by $5$ points.\n\n**Why the wrong answers are tempting:**\n• Choice A: The slope is a rate, not a fixed number of hours.\n• Choice C: The $y$-intercept ($60$) is the predicted score with $0$ practice, not $5$.\n• Choice D: The slope has nothing to do with counting students.\n\n**Test Day Takeaway:** Slope in context always means \"for each one-unit increase in $x$, $y$ changes by [slope] units.\"",
          skills: ["scatterplots", "function-interpretation"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $3^{2x} = 81$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Solving Exponential Equations by Matching Bases**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** $81 = 3^4$, so $3^{2x} = 3^4$, meaning $2x = 4$, $x = 2$.\n\n**The Full Solution:**\n$3^{2x} = 81$\n$3^{2x} = 3^4$\nSince the bases are equal: $2x = 4$\n$x = 2$\n\n**Why the wrong answers are tempting:**\n• Choice B ($3$): From $81 \\div 27 = 3$, or thinking $3^3 = 81$ (it is $27$).\n• Choice C ($4$): This is the exponent $2x$, not $x$.\n• Choice D ($6$): From multiplying instead of dividing.\n\n**Test Day Takeaway:** Rewrite both sides with the same base, then set the exponents equal.",
          skills: ["exponent-rules", "solving-equations"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A right triangle has one leg of length $6$ and a hypotenuse of length $10$. What is the length of the other leg?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$7$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$\\sqrt{136}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Pythagorean Theorem**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** $a^2 + 6^2 = 10^2$. $a^2 = 100 - 36 = 64$. $a = 8$.\n\n**The Full Solution:**\n$a^2 + b^2 = c^2$\n$a^2 + 36 = 100$\n$a^2 = 64$\n$a = 8$\n\nThis is the $6$-$8$-$10$ triple (a multiple of $3$-$4$-$5$).\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): From $10 - 6 = 4$, subtracting instead of using the theorem.\n• Choice B ($7$): A guess between $4$ and $8$.\n• Choice D ($\\sqrt{136}$): From $6^2 + 10^2 = 136$, adding instead of subtracting.\n\n**Test Day Takeaway:** Know common Pythagorean triples: $3$-$4$-$5$, $6$-$8$-$10$, $5$-$12$-$13$.",
          skills: ["triangles", "right-triangle-trig"]
        },
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "The area of a rectangle is $108$ square inches and its length is $12$ inches. What is the width, in inches?",
          correctAnswer: "9",
          explanation: "**SAT Pattern: Area of a Rectangle**\n\n**The correct answer is 9.**\n\n**The Fast Way (10 seconds):** Width $= \\frac{108}{12} = 9$.\n\n**The Full Solution:**\nArea $= \\text{length} \\times \\text{width}$\n$108 = 12 \\times w$\n$w = \\frac{108}{12} = 9$\n\n**Common Mistakes to Avoid:**\n• Dividing incorrectly: $108 \\div 12 = 8$\n• Subtracting: $108 - 12 = 96$\n\n**Verification:** $12 \\times 9 = 108$ ✓\n\n**Test Day Takeaway:** Area = length times width. To find a missing dimension, divide the area by the known dimension.",
          skills: ["area", "word-problems"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The function $f(x) = 200(1.05)^x$ models the balance in dollars of a bank account after $x$ years. What is the meaning of $f(3) \\approx 231.53$?",
          choices: [
            { id: "A", text: "After $3$ years, the account balance is approximately $\\$231.53$." },
            { id: "B", text: "The account earns $\\$231.53$ in interest each year." },
            { id: "C", text: "The initial deposit was $\\$231.53$." },
            { id: "D", text: "After $231.53$ years, the balance is $\\$3$." }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Interpreting Function Values in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** $f(3) \\approx 231.53$ means that when $x = 3$ (after $3$ years), the balance is approximately $\\$231.53$.\n\n**The Full Solution:**\nIn $f(x) = 200(1.05)^x$, $x$ represents years and $f(x)$ represents the balance. So $f(3) \\approx 231.53$ means after $3$ years, the balance is about $\\$231.53$.\n\n**Why the wrong answers are tempting:**\n• Choice B: $231.53$ is the total balance, not annual interest.\n• Choice C: The initial deposit is $f(0) = 200$.\n• Choice D: Swaps the input and output of the function.\n\n**Test Day Takeaway:** $f(a) = b$ means \"when the input is $a$, the output is $b$.\" Translate using the context.",
          skills: ["function-interpretation", "exponential-functions"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $y = 3x - 7$ and $y = -x + 9$, what is the value of $x$ at the point of intersection?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Finding the Intersection of Two Lines**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Set equal: $3x - 7 = -x + 9$. $4x = 16$. $x = 4$.\n\n**The Full Solution:**\n$3x - 7 = -x + 9$\n$3x + x = 9 + 7$\n$4x = 16$\n$x = 4$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): Check: $3(2) - 7 = -1$ and $-2 + 9 = 7$. Not equal.\n• Choice C ($5$): Check: $3(5) - 7 = 8$ and $-5 + 9 = 4$. Not equal.\n• Choice D ($8$): From $16 \\div 2 = 8$, dividing by $2$ instead of $4$.\n\n**Test Day Takeaway:** At the intersection point, both equations give the same $y$-value. Set them equal and solve for $x$.",
          skills: ["systems-of-equations", "linear-equations"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Which of the following is equivalent to $(2x - 3)^2$?",
          choices: [
            { id: "A", text: "$4x^2 - 9$" },
            { id: "B", text: "$4x^2 + 9$" },
            { id: "C", text: "$4x^2 - 6x + 9$" },
            { id: "D", text: "$4x^2 - 12x + 9$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Squaring a Binomial**\n\n**Choice D is correct.**\n\n**The Fast Way (20 seconds):** $(2x-3)^2 = (2x)^2 - 2(2x)(3) + 3^2 = 4x^2 - 12x + 9$.\n\n**The Full Solution:**\n$(2x - 3)^2 = (2x - 3)(2x - 3)$\n$= 4x^2 - 6x - 6x + 9$\n$= 4x^2 - 12x + 9$\n\n**Why the wrong answers are tempting:**\n• Choice A ($4x^2 - 9$): This is $(2x-3)(2x+3)$, a difference of squares, not a perfect square.\n• Choice B ($4x^2 + 9$): Squares each term but drops the middle term entirely.\n• Choice C ($4x^2 - 6x + 9$): Only multiplies $2x$ and $-3$ once instead of twice for the middle term.\n\n**Test Day Takeaway:** $(a-b)^2 = a^2 - 2ab + b^2$. The middle term is TWICE the product.",
          skills: ["polynomial-operations", "algebraic-manipulation"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation $2x^2 - 8x + k = 0$ has no real solutions. Which of the following could be the value of $k$?",
          choices: [
            { id: "A", text: "$6$" },
            { id: "B", text: "$8$" },
            { id: "C", text: "$10$" },
            { id: "D", text: "$12$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Discriminant for No Real Solutions**\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** No real solutions: $b^2 - 4ac < 0$. $64 - 8k < 0$. $k > 8$. The smallest choice greater than $8$ is $10$.\n\n**The Full Solution:**\nDiscriminant $= b^2 - 4ac = (-8)^2 - 4(2)(k) = 64 - 8k$\nNo real solutions: $64 - 8k < 0$\n$64 < 8k$\n$k > 8$\n\nAmong the choices, $k = 10$ and $k = 12$ both work, but $10$ is a valid answer.\n\n**Why the wrong answers are tempting:**\n• Choice A ($6$): $64 - 48 = 16 > 0$, so two real solutions.\n• Choice B ($8$): $64 - 64 = 0$, so exactly one real solution.\n\n**Test Day Takeaway:** No real solutions = discriminant $< 0$. One solution = discriminant $= 0$. Two solutions = discriminant $> 0$.",
          skills: ["discriminant", "quadratic-equations"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "The volume of a cone is $48\\pi$ cubic centimeters and its height is $9$ centimeters. What is the radius, in centimeters, of the base of the cone?",
          correctAnswer: "4",
          explanation: "**SAT Pattern: Volume of a Cone**\n\n**The correct answer is 4.**\n\n**The Fast Way (30 seconds):** $V = \\frac{1}{3}\\pi r^2 h$. $48\\pi = \\frac{1}{3}\\pi r^2(9) = 3\\pi r^2$. $r^2 = 16$. $r = 4$.\n\n**The Full Solution:**\n$V = \\frac{1}{3}\\pi r^2 h$\n$48\\pi = \\frac{1}{3}\\pi r^2 (9)$\n$48\\pi = 3\\pi r^2$\n$48 = 3r^2$\n$r^2 = 16$\n$r = 4$\n\n**Common Mistakes to Avoid:**\n• Forgetting the $\\frac{1}{3}$: using $V = \\pi r^2 h$ gives $r^2 = \\frac{48}{9}$\n• Answering $16$ instead of taking the square root\n\n**Verification:** $V = \\frac{1}{3}\\pi(16)(9) = \\frac{144\\pi}{3} = 48\\pi$ ✓\n\n**Test Day Takeaway:** The cone volume formula ($\\frac{1}{3}\\pi r^2 h$) is on the reference sheet. Plug in and solve for the missing variable.",
          skills: ["volume"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The graph of $y = f(x)$ passes through the point $(2, 5)$. If $g(x) = f(x) + 3$, which point must be on the graph of $y = g(x)$?",
          choices: [
            { id: "A", text: "$(2, 8)$" },
            { id: "B", text: "$(5, 5)$" },
            { id: "C", text: "$(2, 2)$" },
            { id: "D", text: "$(5, 8)$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Function Transformations — Vertical Shift**\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** $g(x) = f(x) + 3$ shifts the graph up $3$. Point $(2, 5)$ becomes $(2, 5 + 3) = (2, 8)$.\n\n**The Full Solution:**\n$g(2) = f(2) + 3 = 5 + 3 = 8$\nSo the point $(2, 8)$ is on $y = g(x)$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($5, 5$): Shifts horizontally instead of vertically.\n• Choice C ($2, 2$): Subtracts $3$ instead of adding.\n• Choice D ($5, 8$): Shifts both $x$ and $y$ by $3$.\n\n**Test Day Takeaway:** $f(x) + k$ shifts the graph up by $k$. Only the $y$-coordinate changes.",
          skills: ["function-transformations"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation of a parabola is $y = -(x - 5)^2 + 16$. What is the area of the rectangle formed by the $x$-intercepts and the vertex of the parabola?",
          choices: [
            { id: "A", text: "$32$" },
            { id: "B", text: "$64$" },
            { id: "C", text: "$128$" },
            { id: "D", text: "$144$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Parabola Properties and Area**\n\n**Choice C is correct.**\n\n**The Fast Way (45 seconds):** Vertex is $(5, 16)$. Find $x$-intercepts: $0 = -(x-5)^2 + 16$, $(x-5)^2 = 16$, $x = 5 \\pm 4$, so $x = 1$ and $x = 9$. Width of rectangle $= 9 - 1 = 8$. Height $= 16$. Area $= 8 \\times 16 = 128$.\n\n**The Full Solution:**\nVertex: $(5, 16)$\n$x$-intercepts: $-(x-5)^2 + 16 = 0$ → $(x-5)^2 = 16$ → $x = 1$ or $x = 9$\nRectangle width $= 9 - 1 = 8$, height $= 16$\nArea $= 8 \\times 16 = 128$\n\n**Why the wrong answers are tempting:**\n• Choice A ($32$): From $\\frac{128}{4}$, perhaps computing a triangle area.\n• Choice B ($64$): From $8 \\times 8$, using wrong height or $4 \\times 16$.\n• Choice D ($144$): From $12 \\times 12$, a different calculation error.\n\n**Test Day Takeaway:** Read the vertex from vertex form. Find $x$-intercepts by setting $y = 0$.",
          skills: ["quadratic-functions", "area"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $x > 0$ and $x^2 - 6x = 16$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$16$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Solving a Quadratic Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** $x^2 - 6x - 16 = 0$. Factor: $(x - 8)(x + 2) = 0$. $x = 8$ or $x = -2$. Since $x > 0$, $x = 8$.\n\n**The Full Solution:**\n$x^2 - 6x - 16 = 0$\nFind two numbers that multiply to $-16$ and add to $-6$: $-8$ and $+2$.\n$(x - 8)(x + 2) = 0$\n$x = 8$ or $x = -2$\nSince $x > 0$: $x = 8$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): The positive factor, but $x = -2$ not $2$. Sign confusion.\n• Choice B ($4$): Check: $16 - 24 = -8 \\neq 16$.\n• Choice D ($16$): This is the constant in the equation, not a solution.\n\n**Test Day Takeaway:** When the problem says $x > 0$, both solutions exist but you pick the positive one.",
          skills: ["quadratic-equations", "factoring"]
        },
        {
          id: 22,
          type: "fill-in",
          difficulty: "hard",
          question: "A sphere has a volume of $288\\pi$ cubic inches. What is the radius of the sphere, in inches?",
          correctAnswer: "6",
          explanation: "**SAT Pattern: Volume of a Sphere**\n\n**The correct answer is 6.**\n\n**The Fast Way (30 seconds):** $V = \\frac{4}{3}\\pi r^3$. $288\\pi = \\frac{4}{3}\\pi r^3$. $r^3 = 288 \\times \\frac{3}{4} = 216$. $r = 6$.\n\n**The Full Solution:**\n$\\frac{4}{3}\\pi r^3 = 288\\pi$\n$\\frac{4}{3}r^3 = 288$\n$r^3 = 288 \\times \\frac{3}{4} = 216$\n$r = \\sqrt[3]{216} = 6$\n\n**Common Mistakes to Avoid:**\n• Forgetting to multiply by $\\frac{3}{4}$: $r^3 = 288$\n• Not taking the cube root: answering $216$\n\n**Verification:** $V = \\frac{4}{3}\\pi(6)^3 = \\frac{4}{3}\\pi(216) = 288\\pi$ ✓\n\n**Test Day Takeaway:** The sphere volume formula is on the reference sheet. Solve for $r$ step by step.",
          skills: ["volume"]
        }
      ]
    }
  ]
};

export default practiceTest2;
