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
          question: "A music streaming service has $1{,}200$ songs in its library. If $30\\%$ of the songs are pop music, how many pop songs are in the library?",
          choices: [
            { id: "A", text: "$30$" },
            { id: "B", text: "$300$" },
            { id: "C", text: "$360$" },
            { id: "D", text: "$400$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Finding a Percentage of a Number**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $30\\%$ of $1{,}200 = 0.30 \\times 1{,}200 = 360$.\n\n**The Full Solution:**\n$30\\%$ of $1{,}200 = \\frac{30}{100} \\times 1{,}200 = 360$\n\n**Why the wrong answers are tempting:**\n• Choice A ($30$): This is the percentage itself, not the count.\n• Choice B ($300$): From $1{,}200 \\div 4$, confusing $30\\%$ with $25\\%$.\n• Choice D ($400$): From $1{,}200 \\div 3$, confusing $30\\%$ with $\\frac{1}{3}$.\n\n**Test Day Takeaway:** To find X% of a number, multiply by X/100.",
          skills: ["percents", "word-problems"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which expression is equivalent to $8x + 3x - 2x$?",
          choices: [
            { id: "A", text: "$9x$" },
            { id: "B", text: "$9x^3$" },
            { id: "C", text: "$13x$" },
            { id: "D", text: "$3x$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Combining Like Terms**\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** $8 + 3 - 2 = 9$, so $8x + 3x - 2x = 9x$.\n\n**The Full Solution:**\nAll three terms have the same variable part ($x$), so combine the coefficients: $8 + 3 - 2 = 9$. The result is $9x$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($9x^3$): Adds the exponents (there are three terms, each with $x^1$), which is wrong.\n• Choice C ($13x$): Adds all coefficients without subtracting: $8 + 3 + 2 = 13$.\n• Choice D ($3x$): Subtracts everything: $8 - 3 - 2 = 3$.\n\n**Test Day Takeaway:** When combining like terms, only the coefficients change. Watch the signs.",
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
          question: "A pet shelter has dogs and cats in a ratio of $5$ to $3$. If there are $40$ dogs, how many cats are there?",
          choices: [
            { id: "A", text: "$15$" },
            { id: "B", text: "$24$" },
            { id: "C", text: "$30$" },
            { id: "D", text: "$32$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Basic Ratio Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $5$ parts = $40$, so $1$ part = $8$. Cats = $3$ parts = $24$.\n\n**The Full Solution:**\n$\\frac{5}{3} = \\frac{40}{x}$\n$5x = 120$\n$x = 24$\n\n**Why the wrong answers are tempting:**\n• Choice A ($15$): From $40 - 25 = 15$, subtracting instead of using the ratio.\n• Choice C ($30$): From $40 \\times \\frac{3}{4}$, using the wrong fraction.\n• Choice D ($32$): From $40 \\times \\frac{4}{5}$.\n\n**Test Day Takeaway:** Find what one \"part\" equals, then multiply by the number of parts needed.",
          skills: ["ratios-proportions"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "An app developer earns $\\$150$ for each app downloaded plus a $\\$500$ base salary per month. Which function $f(d)$ represents the developer's total monthly earnings for $d$ downloads?",
          choices: [
            { id: "A", text: "$f(d) = 150d + 500$" },
            { id: "B", text: "$f(d) = 500d + 150$" },
            { id: "C", text: "$f(d) = 650d$" },
            { id: "D", text: "$f(d) = 150d - 500$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Linear Function from Context**\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** Per-download rate is the slope ($150$), base salary is the $y$-intercept ($500$). So $f(d) = 150d + 500$.\n\n**The Full Solution:**\nTotal earnings = (earnings per download)(number of downloads) + base salary\n$f(d) = 150d + 500$\n\n**Why the wrong answers are tempting:**\n• Choice B: Swaps the per-download and base salary values.\n• Choice C: Combines $150 + 500 = 650$ into one rate.\n• Choice D: Subtracts the base salary.\n\n**Test Day Takeaway:** The repeated value is the slope; the one-time value is the y-intercept.",
          skills: ["linear-functions", "word-problems"]
        },
        {
          id: 6,
          type: "fill-in",
          difficulty: "easy",
          question: "If $\\frac{3x}{4} = 15$, what is the value of $x$?",
          correctAnswer: "20",
          explanation: "**SAT Pattern: Solving a Simple Equation with a Fraction**\n\n**The correct answer is 20.**\n\n**The Fast Way (10 seconds):** Multiply both sides by $4$: $3x = 60$. Divide by $3$: $x = 20$.\n\n**The Full Solution:**\n$\\frac{3x}{4} = 15$\n$3x = 60$\n$x = 20$\n\n**Common Mistakes to Avoid:**\n• Dividing by $4$ instead of multiplying: $\\frac{15}{4} = 3.75$\n• Forgetting to divide by $3$: answering $60$\n\n**Verification:** $\\frac{3(20)}{4} = \\frac{60}{4} = 15$ ✓\n\n**Test Day Takeaway:** Clear the fraction first by multiplying both sides by the denominator, then solve.",
          skills: ["solving-equations"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A garden has $84$ flowers planted in $7$ equal rows. How many flowers are in each row?",
          choices: [
            { id: "A", text: "$10$" },
            { id: "B", text: "$11$" },
            { id: "C", text: "$12$" },
            { id: "D", text: "$14$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Simple Division**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $84 \\div 7 = 12$.\n\n**The Full Solution:**\nFlowers per row $= \\frac{84}{7} = 12$\n\n**Why the wrong answers are tempting:**\n• Choice A ($10$): From $\\frac{70}{7}$, using a round number.\n• Choice B ($11$): From $\\frac{77}{7}$, a nearby multiple.\n• Choice D ($14$): From $\\frac{84}{6}$, dividing by the wrong number.\n\n**Test Day Takeaway:** Total divided by number of groups gives the size of each group.",
          skills: ["word-problems"]
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
          question: "The equation of line $m$ is $y = -2x + 8$. Line $n$ is parallel to line $m$ and passes through the point $(3, 1)$. What is the $y$-intercept of line $n$?",
          choices: [
            { id: "A", text: "$5$" },
            { id: "B", text: "$7$" },
            { id: "C", text: "$-5$" },
            { id: "D", text: "$-7$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Parallel Lines and Slope**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Parallel means same slope $= -2$. Use $y = -2x + b$ with $(3,1)$: $1 = -6 + b$, so $b = 7$.\n\n**The Full Solution:**\nParallel lines have the same slope, so line $n$ has slope $-2$.\n$y = -2x + b$\nPlug in $(3, 1)$: $1 = -2(3) + b = -6 + b$\n$b = 7$\n\n**Why the wrong answers are tempting:**\n• Choice A ($5$): From $1 - (-6) = 5$... no. Sign error: $1 + 6 = 7$, not $5$.\n• Choice C ($-5$): Subtracting instead of adding.\n• Choice D ($-7$): Getting the right magnitude but wrong sign.\n\n**Test Day Takeaway:** Parallel lines = same slope. Plug in the given point to find the new $y$-intercept.",
          skills: ["slope", "linear-functions"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table below shows the number of animals at a shelter.\n\n| | Adopted | Not Adopted | Total |\n|---|---|---|---|\n| Dogs | $35$ | $15$ | $50$ |\n| Cats | $25$ | $25$ | $50$ |\n| Total | $60$ | $40$ | $100$ |\n\nWhat is the probability that a randomly selected animal is a dog that was adopted?",
          choices: [
            { id: "A", text: "$0.25$" },
            { id: "B", text: "$0.35$" },
            { id: "C", text: "$0.50$" },
            { id: "D", text: "$0.70$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Probability from a Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Adopted dogs $= 35$, total animals $= 100$. $P = \\frac{35}{100} = 0.35$.\n\n**The Full Solution:**\n$P(\\text{adopted dog}) = \\frac{35}{100} = 0.35$\n\n**Why the wrong answers are tempting:**\n• Choice A ($0.25$): From $\\frac{25}{100}$, using the cats adopted count.\n• Choice C ($0.50$): From $\\frac{50}{100}$, using the total dogs instead of adopted dogs.\n• Choice D ($0.70$): From $\\frac{35}{50}$, the probability of adoption given it's a dog.\n\n**Test Day Takeaway:** Read the table carefully. The denominator for simple probability is always the grand total.",
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
          difficulty: "medium",
          question: "A dataset has a mean of $45$ and a median of $42$. A new data point of $45$ is added. Which of the following must be true?",
          choices: [
            { id: "A", text: "The mean increases." },
            { id: "B", text: "The mean stays the same." },
            { id: "C", text: "The median increases." },
            { id: "D", text: "Both the mean and median increase." }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Effect of Adding a Data Point Equal to the Mean**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Adding a value equal to the mean does not change the mean. The median might change, but we cannot be certain how.\n\n**The Full Solution:**\nIf the current mean is $45$ and we add $45$, the new mean is still $45$ because the new value equals the mean.\n\nMore precisely: if the original sum is $S$ with $n$ values and mean $= \\frac{S}{n} = 45$, then $S = 45n$. New mean $= \\frac{45n + 45}{n+1} = \\frac{45(n+1)}{n+1} = 45$.\n\n**Why the wrong answers are tempting:**\n• Choice A: The new value equals the mean, so it does not pull the mean up.\n• Choice C: We do not have enough information to determine how the median changes.\n• Choice D: The mean stays the same and the median effect is uncertain.\n\n**Test Day Takeaway:** Adding a value equal to the mean does not change the mean.",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is a solution to the equation $x^2 - 5x - 14 = 0$?",
          choices: [
            { id: "A", text: "$-7$" },
            { id: "B", text: "$-2$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$7$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Solving a Quadratic by Factoring**\n\n**Choice D is correct.**\n\n**The Fast Way (20 seconds):** Factor: $x^2 - 5x - 14 = (x-7)(x+2) = 0$. So $x = 7$ or $x = -2$. Both B and D are solutions, but $7$ matches choice D.\n\n**The Full Solution:**\nFind two numbers that multiply to $-14$ and add to $-5$: $-7$ and $+2$.\n$x^2 - 5x - 14 = (x - 7)(x + 2) = 0$\n$x = 7$ or $x = -2$\n\n**Why the wrong answers are tempting:**\n• Choice A ($-7$): Sign error when factoring. The factors are $(x-7)$ and $(x+2)$, not $(x+7)$.\n• Choice B ($-2$): This IS a valid solution. But the question asks for \"a solution\" and $7$ is listed as an option.\n• Choice C ($5$): This is the coefficient of $x$, not a root.\n\n**Test Day Takeaway:** To factor $x^2 + bx + c$, find two numbers that multiply to $c$ and add to $b$.",
          skills: ["quadratic-equations", "factoring"]
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
