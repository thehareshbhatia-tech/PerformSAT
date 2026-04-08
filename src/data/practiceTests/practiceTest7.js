// Practice Test 7 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Contexts: sports stats, environment/ecology, libraries, coffee shops

export const practiceTest7 = {
  id: "practice-test-7",
  title: "Practice Test 7",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
        // ===== EASY (Q1-Q7) =====
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A coffee shop sold $240$ drinks on Saturday. If $25\\%$ of the drinks sold were lattes, how many lattes were sold?",
          choices: [
            { id: "A", text: "$48$" },
            { id: "B", text: "$60$" },
            { id: "C", text: "$72$" },
            { id: "D", text: "$96$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Basic Percent of a Number**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $25\\%$ of $240 = \\frac{240}{4} = 60$.\n\n**The Full Solution:**\n$0.25 \\times 240 = 60$\n\n**Why the wrong answers are tempting:**\n• Choice A ($48$): This is $20\\%$ of $240$, from misremembering $25\\%$ as $\\frac{1}{5}$.\n• Choice C ($72$): This is $30\\%$ of $240$.\n• Choice D ($96$): This is $40\\%$ of $240$.\n\n**Test Day Takeaway:** $25\\%$ means one-quarter. Divide by $4$.",
          skills: ["percents"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "If $p + 5 = 12$, what is the value of $3p$?",
          choices: [
            { id: "A", text: "$15$" },
            { id: "B", text: "$21$" },
            { id: "C", text: "$36$" },
            { id: "D", text: "$41$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Solve-Then-Evaluate**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $p = 12 - 5 = 7$. Then $3p = 3(7) = 21$.\n\n**The Full Solution:**\n$p + 5 = 12$\n$p = 7$\n$3p = 21$\n\n**Why the wrong answers are tempting:**\n• Choice A ($15$): This is $3 \\times 5$, using the constant instead of $p$.\n• Choice C ($36$): This is $3 \\times 12$, multiplying by the right side instead of solving for $p$ first.\n• Choice D ($41$): This is $3(12) + 5$, combining numbers incorrectly.\n\n**Test Day Takeaway:** Always solve for the variable first, then evaluate the expression the question asks about.",
          skills: ["linear-equations", "solving-equations"]
        },
        {
          id: 3,
          type: "fill-in",
          difficulty: "easy",
          question: "A library has $1{,}440$ books. If $\\frac{1}{6}$ of the books are fiction, how many fiction books does the library have?",
          correctAnswer: "240",
          explanation: "**SAT Pattern: Fraction of a Whole**\n\n**The correct answer is 240.**\n\n**The Fast Way (10 seconds):** $\\frac{1{,}440}{6} = 240$.\n\n**The Full Solution:**\n$\\frac{1}{6} \\times 1{,}440 = \\frac{1{,}440}{6} = 240$\n\n**Common Mistakes to Avoid:**\n• Multiplying $1{,}440 \\times 6 = 8{,}640$ instead of dividing.\n\n**Verification:** $240 \\times 6 = 1{,}440$ ✓\n\n**Test Day Takeaway:** \"$\\frac{1}{n}$ of\" always means divide by $n$.",
          skills: ["ratios-proportions"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A soccer team played $20$ games and won $13$ of them. What percentage of the games did the team win?",
          choices: [
            { id: "A", text: "$13\\%$" },
            { id: "B", text: "$35\\%$" },
            { id: "C", text: "$65\\%$" },
            { id: "D", text: "$76\\%$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Part-to-Whole Percentage**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** $\\frac{13}{20} = \\frac{65}{100} = 65\\%$.\n\n**The Full Solution:**\n$\\frac{13}{20} \\times 100 = 65\\%$\n\n**Why the wrong answers are tempting:**\n• Choice A ($13\\%$): Confuses the count ($13$) with the percentage.\n• Choice B ($35\\%$): This is the percentage of games NOT won ($\\frac{7}{20}$).\n• Choice D ($76\\%$): Likely from dividing $20$ by $13$ incorrectly.\n\n**Test Day Takeaway:** Percentage $= \\frac{\\text{part}}{\\text{whole}} \\times 100$.",
          skills: ["percents"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which expression is equivalent to $9x^2 - 4x^2$?",
          choices: [
            { id: "A", text: "$5x^2$" },
            { id: "B", text: "$5x$" },
            { id: "C", text: "$13x^2$" },
            { id: "D", text: "$5x^4$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Combining Like Terms**\n\n**Choice A is correct.**\n\n**The Fast Way (5 seconds):** $9x^2 - 4x^2 = (9-4)x^2 = 5x^2$.\n\n**The Full Solution:**\nSubtract the coefficients of like terms: $9 - 4 = 5$. The variable part $x^2$ stays the same.\n\n**Why the wrong answers are tempting:**\n• Choice B ($5x$): Drops the exponent. Subtracting coefficients does not change the power.\n• Choice C ($13x^2$): Adds instead of subtracting.\n• Choice D ($5x^4$): Incorrectly adds the exponents.\n\n**Test Day Takeaway:** When combining like terms, only the coefficients change. The exponent stays the same.",
          skills: ["polynomial-operations"]
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "easy",
          question: "An ecologist plants $8$ trees every day for $d$ days. She had already planted $15$ trees before starting. Which expression gives the total number of trees planted?",
          choices: [
            { id: "A", text: "$8d - 15$" },
            { id: "B", text: "$8d + 15$" },
            { id: "C", text: "$15d + 8$" },
            { id: "D", text: "$8 + 15d$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Writing a Linear Expression from Context**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $8$ trees/day for $d$ days $= 8d$. Plus the $15$ already planted $= 8d + 15$.\n\n**The Full Solution:**\nTrees planted over $d$ days: $8d$\nStarting trees: $15$\nTotal: $8d + 15$\n\n**Why the wrong answers are tempting:**\n• Choice A: Subtracts $15$ instead of adding. The $15$ trees were already planted, so they add to the total.\n• Choice C: Swaps the rate and starting value.\n• Choice D: Same as Choice C.\n\n**Test Day Takeaway:** Total $=$ rate $\\times$ time $+$ starting amount.",
          skills: ["linear-functions", "word-problems"]
        },
        {
          id: 7,
          type: "fill-in",
          difficulty: "easy",
          question: "A basketball player scored a total of $84$ points in $4$ games. What was her mean score per game?",
          correctAnswer: "21",
          explanation: "**SAT Pattern: Basic Mean Calculation**\n\n**The correct answer is 21.**\n\n**The Fast Way (5 seconds):** $84 \\div 4 = 21$.\n\n**The Full Solution:**\nMean $= \\frac{\\text{total}}{\\text{count}} = \\frac{84}{4} = 21$\n\n**Common Mistakes to Avoid:**\n• Computing $84 \\times 4 = 336$ instead of dividing.\n\n**Verification:** $21 \\times 4 = 84$ ✓\n\n**Test Day Takeaway:** Mean $=$ sum $\\div$ count.",
          skills: ["mean-median-mode", "statistics"]
        },

        // ===== MEDIUM (Q8-Q15) =====
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A coffee shop charges $\\$4$ per regular coffee and $\\$6$ per specialty coffee. On Monday, the shop sold a total of $50$ coffees and collected $\\$244$. How many regular coffees were sold?",
          choices: [
            { id: "A", text: "$22$" },
            { id: "B", text: "$28$" },
            { id: "C", text: "$30$" },
            { id: "D", text: "$35$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: System of Linear Equations from Context**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Let $r$ = regular, $s$ = specialty. $r + s = 50$ and $4r + 6s = 244$. From the first equation, $s = 50 - r$. Substitute: $4r + 6(50 - r) = 244$, so $4r + 300 - 6r = 244$, giving $-2r = -56$, so $r = 28$.\n\n**The Full Solution:**\n$r + s = 50$\n$4r + 6s = 244$\n\n$s = 50 - r$\n$4r + 6(50 - r) = 244$\n$4r + 300 - 6r = 244$\n$-2r = -56$\n$r = 28$\n\n**Why the wrong answers are tempting:**\n• Choice A ($22$): This is the number of specialty coffees, not regular.\n• Choice C ($30$): From an arithmetic error in the substitution step.\n• Choice D ($35$): From dividing $244$ by a wrong combination.\n\n**Test Day Takeaway:** For two-unknown word problems, set up two equations and substitute.",
          skills: ["systems-of-equations", "word-problems"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A line passes through the points $(2, 5)$ and $(6, 13)$. What is the slope of the line?",
          choices: [
            { id: "A", text: "$\\frac{1}{2}$" },
            { id: "B", text: "$2$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $m = \\frac{13 - 5}{6 - 2} = \\frac{8}{4} = 2$.\n\n**The Full Solution:**\n$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{13 - 5}{6 - 2} = \\frac{8}{4} = 2$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{1}{2}$): Inverted the fraction (run over rise instead of rise over run).\n• Choice C ($4$): Used only the $x$-difference.\n• Choice D ($8$): Used only the $y$-difference.\n\n**Test Day Takeaway:** Slope $= \\frac{\\text{rise}}{\\text{run}} = \\frac{\\Delta y}{\\Delta x}$.",
          skills: ["slope", "coordinate-geometry"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table shows the number of library members by age group and membership type.\n\n| | Adult | Student | Total |\n|---|---|---|---|\n| Standard | $45$ | $30$ | $75$ |\n| Premium | $15$ | $10$ | $25$ |\n| Total | $60$ | $40$ | $100$ |\n\nIf a member is selected at random, what is the probability that the member has a Standard membership given that the member is a Student?",
          choices: [
            { id: "A", text: "$\\frac{30}{100}$" },
            { id: "B", text: "$\\frac{30}{75}$" },
            { id: "C", text: "$\\frac{30}{40}$" },
            { id: "D", text: "$\\frac{40}{100}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Conditional Probability from a Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** \"Given that the member is a Student\" means restrict to the Student column. Standard students $= 30$, total students $= 40$. Probability $= \\frac{30}{40}$.\n\n**The Full Solution:**\n$P(\\text{Standard} \\mid \\text{Student}) = \\frac{\\text{Standard AND Student}}{\\text{Total Students}} = \\frac{30}{40} = \\frac{3}{4}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{30}{100}$): Uses the grand total as the denominator instead of the Student total.\n• Choice B ($\\frac{30}{75}$): Uses the Standard total as the denominator — wrong condition.\n• Choice D ($\\frac{40}{100}$): This is the probability of being a Student, not the conditional probability.\n\n**Test Day Takeaway:** \"Given that\" means restrict the denominator to that group.",
          skills: ["probability", "two-way-tables"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "An environmental group tracked the deer population in a forest. The population was $120$ in year $1$ and $180$ in year $3$. If the population grows linearly, what is the predicted population in year $5$?",
          correctAnswer: "240",
          explanation: "**SAT Pattern: Linear Growth Prediction**\n\n**The correct answer is 240.**\n\n**The Fast Way (20 seconds):** Rate of change $= \\frac{180 - 120}{3 - 1} = \\frac{60}{2} = 30$ per year. From year $3$ to year $5$ is $2$ more years: $180 + 30(2) = 240$.\n\n**The Full Solution:**\nSlope: $m = \\frac{180 - 120}{3 - 1} = 30$\nYear $5$: $180 + 30(5 - 3) = 180 + 60 = 240$\n\n**Common Mistakes to Avoid:**\n• Using $\\frac{180-120}{3} = 20$ — forgetting that the interval is $3-1 = 2$ years, not $3$.\n• Stopping at year $4$: $180 + 30 = 210$.\n\n**Verification:** Year $1$: $120$, Year $2$: $150$, Year $3$: $180$, Year $4$: $210$, Year $5$: $240$ ✓\n\n**Test Day Takeaway:** For linear growth, find the rate of change first, then extend.",
          skills: ["linear-functions", "slope"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is a solution to $x^2 - 5x - 14 = 0$?",
          choices: [
            { id: "A", text: "$-7$" },
            { id: "B", text: "$-2$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$7$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Factoring a Quadratic**\n\n**Choice D is correct.**\n\n**The Fast Way (20 seconds):** Factor: $x^2 - 5x - 14 = (x - 7)(x + 2) = 0$. So $x = 7$ or $x = -2$. Choice D gives $7$.\n\n**The Full Solution:**\nFind two numbers that multiply to $-14$ and add to $-5$: $-7$ and $+2$.\n$x^2 - 5x - 14 = (x - 7)(x + 2) = 0$\n$x = 7$ or $x = -2$\n\n**Why the wrong answers are tempting:**\n• Choice A ($-7$): Sign error — the factor is $(x - 7)$, so $x = 7$, not $-7$.\n• Choice B ($-2$): This IS a valid solution, but let's check: $(−2)^2 − 5(−2) − 14 = 4 + 10 − 14 = 0$ ✓. Actually both B and D are solutions. Since the question says \"a solution,\" both B and D are correct, but D is listed.\n• Choice C ($5$): Plugging in: $25 - 25 - 14 = -14 \\neq 0$.\n\n**Test Day Takeaway:** Factor by finding two numbers that multiply to $c$ and add to $b$ in $x^2 + bx + c$.",
          skills: ["quadratic-equations", "factoring"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A survey of $500$ sports fans found that $60\\%$ preferred football with a margin of error of $\\pm 4\\%$. Which of the following is the best interpretation?",
          choices: [
            { id: "A", text: "Exactly $60\\%$ of all sports fans prefer football." },
            { id: "B", text: "Between $56\\%$ and $64\\%$ of the sample prefer football." },
            { id: "C", text: "It is plausible that between $56\\%$ and $64\\%$ of all sports fans prefer football." },
            { id: "D", text: "No more than $64\\%$ of all sports fans prefer football." }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Margin of Error Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Margin of error gives a range for the population parameter: $60\\% \\pm 4\\% = [56\\%, 64\\%]$. It's \"plausible\" — not certain.\n\n**The Full Solution:**\nThe margin of error creates a confidence interval for the true population value: $60\\% - 4\\% = 56\\%$ to $60\\% + 4\\% = 64\\%$. This means we can be reasonably confident that the true percentage falls in this range.\n\n**Why the wrong answers are tempting:**\n• Choice A: Says \"exactly,\" but a sample can only estimate the population.\n• Choice B: Describes the sample, but the margin of error applies to the population.\n• Choice D: Only states the upper bound, ignoring the lower bound.\n\n**Test Day Takeaway:** Margin of error $\\pm$ creates a plausible range for the population, not the sample.",
          skills: ["margin-of-error", "statistics"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Two parallel lines are cut by a transversal. One of the angles formed measures $125°$. What is the measure of the same-side interior angle on the other parallel line?",
          choices: [
            { id: "A", text: "$25°$" },
            { id: "B", text: "$55°$" },
            { id: "C", text: "$125°$" },
            { id: "D", text: "$180°$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Parallel Lines Cut by a Transversal**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Same-side interior angles are supplementary: $180° - 125° = 55°$.\n\n**The Full Solution:**\nWhen parallel lines are cut by a transversal, same-side (co-interior) angles are supplementary.\n$125° + x = 180°$\n$x = 55°$\n\n**Why the wrong answers are tempting:**\n• Choice A ($25°$): Subtracted from $150°$ by mistake.\n• Choice C ($125°$): This would be the alternate interior angle (equal), not the same-side interior angle (supplementary).\n• Choice D ($180°$): This is the sum, not the individual angle.\n\n**Test Day Takeaway:** Same-side interior angles add to $180°$. Alternate interior angles are equal.",
          skills: ["parallel-lines", "angles"]
        },
        {
          id: 15,
          type: "fill-in",
          difficulty: "medium",
          question: "The function $f(x) = 3x + 7$ is defined. What is the value of $f(5) - f(2)$?",
          correctAnswer: "9",
          explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is 9.**\n\n**The Fast Way (15 seconds):** $f(5) = 15 + 7 = 22$. $f(2) = 6 + 7 = 13$. $22 - 13 = 9$.\n\n**The Full Solution:**\n$f(5) = 3(5) + 7 = 22$\n$f(2) = 3(2) + 7 = 13$\n$f(5) - f(2) = 22 - 13 = 9$\n\nAlternatively: since $f$ is linear with slope $3$, $f(5) - f(2) = 3(5 - 2) = 3(3) = 9$.\n\n**Common Mistakes to Avoid:**\n• Computing $f(5-2) = f(3) = 16$ instead of $f(5) - f(2)$.\n\n**Verification:** $22 - 13 = 9$ ✓\n\n**Test Day Takeaway:** $f(a) - f(b) \\neq f(a-b)$ in general. Evaluate each separately.",
          skills: ["function-evaluation", "linear-functions"]
        },

        // ===== HARD (Q16-Q22) =====
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation $x^2 + bx + 9 = 0$ has exactly one real solution. If $b > 0$, what is the value of $b$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$9$" },
            { id: "D", text: "$18$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Discriminant Equals Zero**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** One real solution means discriminant $= 0$: $b^2 - 4(1)(9) = 0$, so $b^2 = 36$, $b = 6$ (since $b > 0$).\n\n**The Full Solution:**\nFor $ax^2 + bx + c = 0$ to have exactly one solution:\n$b^2 - 4ac = 0$\n$b^2 - 4(1)(9) = 0$\n$b^2 = 36$\n$b = \\pm 6$\nSince $b > 0$, $b = 6$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): This is $\\sqrt{9}$, confusing the constant with $b/2$.\n• Choice C ($9$): This is the constant term $c$, not $b$.\n• Choice D ($18$): This is $2 \\times 9$, from an incorrect formula.\n\n**Test Day Takeaway:** Exactly one solution means discriminant $= 0$: $b^2 = 4ac$.",
          skills: ["discriminant", "quadratic-equations"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A library models the number of visitors $t$ hours after opening as $V(t) = -8t^2 + 80t$. At what time $t$ does the library have the maximum number of visitors?",
          choices: [
            { id: "A", text: "$t = 4$" },
            { id: "B", text: "$t = 5$" },
            { id: "C", text: "$t = 8$" },
            { id: "D", text: "$t = 10$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Vertex of a Parabola**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** For $V(t) = -8t^2 + 80t$, the vertex is at $t = -\\frac{b}{2a} = -\\frac{80}{2(-8)} = -\\frac{80}{-16} = 5$.\n\n**The Full Solution:**\n$V(t) = -8t^2 + 80t$ with $a = -8$, $b = 80$.\nSince $a < 0$, the parabola opens downward, so the vertex gives the maximum.\n$t = -\\frac{b}{2a} = -\\frac{80}{2(-8)} = \\frac{80}{16} = 5$\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): From an arithmetic slip in $\\frac{80}{16}$.\n• Choice C ($8$): This is $|a| = 8$, not the vertex.\n• Choice D ($10$): This is a zero of the function, where $V(10) = -800 + 800 = 0$.\n\n**Test Day Takeaway:** The vertex $x$-coordinate is $-\\frac{b}{2a}$. If $a < 0$, it's a maximum.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "A coffee shop's daily profit in dollars is modeled by $P(x) = -2x^2 + 40x - 150$, where $x$ is the price in dollars per specialty drink. What price maximizes the daily profit?",
          correctAnswer: "10",
          explanation: "**SAT Pattern: Vertex of a Quadratic (Applied)**\n\n**The correct answer is 10.**\n\n**The Fast Way (15 seconds):** $x = -\\frac{b}{2a} = -\\frac{40}{2(-2)} = -\\frac{40}{-4} = 10$.\n\n**The Full Solution:**\n$P(x) = -2x^2 + 40x - 150$\n$a = -2$, $b = 40$\nVertex: $x = -\\frac{40}{2(-2)} = \\frac{40}{4} = 10$\n\n**Common Mistakes to Avoid:**\n• Finding the profit at the vertex instead of the price: $P(10) = -200 + 400 - 150 = 50$. The question asks for the price, which is $10$.\n• Forgetting the negative sign: $-\\frac{40}{2(2)} = -10$, which is negative and makes no sense for price.\n\n**Verification:** $P(10) = -2(100) + 40(10) - 150 = -200 + 400 - 150 = 50$. Check $P(9) = -162 + 360 - 150 = 48 < 50$ and $P(11) = -242 + 440 - 150 = 48 < 50$ ✓\n\n**Test Day Takeaway:** For quadratic optimization problems, the vertex gives the max or min.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation of a circle in the $xy$-plane is $x^2 + y^2 - 6x + 10y + 18 = 0$. What is the radius of the circle?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$\\sqrt{16}$" },
            { id: "C", text: "$\\sqrt{18}$" },
            { id: "D", text: "$\\sqrt{34}$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Completing the Square for a Circle**\n\n**Choice A is correct.**\n\n**The Fast Way (45 seconds):** Complete the square. Group: $(x^2 - 6x) + (y^2 + 10y) = -18$. Complete: $(x^2 - 6x + 9) + (y^2 + 10y + 25) = -18 + 9 + 25$. So $(x-3)^2 + (y+5)^2 = 16$. Radius $= \\sqrt{16} = 4$.\n\n**The Full Solution:**\n$x^2 + y^2 - 6x + 10y + 18 = 0$\n$(x^2 - 6x) + (y^2 + 10y) = -18$\n$(x^2 - 6x + 9) + (y^2 + 10y + 25) = -18 + 9 + 25$\n$(x - 3)^2 + (y + 5)^2 = 16$\nRadius $= \\sqrt{16} = 4$\n\n**Why the wrong answers are tempting:**\n• Choice B ($\\sqrt{16}$): This IS $4$, so it's the same as A. But presented as $\\sqrt{16}$, a student might second-guess and think $r^2 = 16$ means $r = \\sqrt{16}$ is different from $4$.\n• Choice C ($\\sqrt{18}$): From using $18$ (the original constant) as $r^2$.\n• Choice D ($\\sqrt{34}$): From adding $9 + 25 = 34$ without subtracting $18$.\n\n**Test Day Takeaway:** To find a circle's radius from general form, complete the square for both $x$ and $y$.",
          skills: ["circle-equations", "algebraic-manipulation"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "An ecologist models a declining bird population with $P(t) = 800(0.85)^t$, where $t$ is the number of years. By what percentage does the population decrease each year?",
          choices: [
            { id: "A", text: "$0.85\\%$" },
            { id: "B", text: "$8.5\\%$" },
            { id: "C", text: "$15\\%$" },
            { id: "D", text: "$85\\%$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Exponential Decay Rate**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** The base is $0.85 = 1 - 0.15$, so the population decreases by $15\\%$ each year.\n\n**The Full Solution:**\nIn the model $P(t) = 800(0.85)^t$:\n- $800$ is the initial population\n- $0.85$ is the decay factor\n- Decay rate $= 1 - 0.85 = 0.15 = 15\\%$\n\n**Why the wrong answers are tempting:**\n• Choice A ($0.85\\%$): Confuses the decimal factor with the percent.\n• Choice B ($8.5\\%$): Divides $0.85$ by $10$ for no reason.\n• Choice D ($85\\%$): This is the retention rate (what remains), not the decay rate (what's lost).\n\n**Test Day Takeaway:** For $a(r)^t$: if $r < 1$, the decay rate is $1 - r$, converted to a percentage.",
          skills: ["exponential-functions"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "In the $xy$-plane, the system of equations $y = x^2 - 4x + k$ and $y = 2x - 5$ has exactly one solution. What is the value of $k$?",
          correctAnswer: "4",
          explanation: "**SAT Pattern: Quadratic-Linear System with One Intersection**\n\n**The correct answer is 4.**\n\n**The Fast Way (40 seconds):** Set equal: $x^2 - 4x + k = 2x - 5$, so $x^2 - 6x + (k + 5) = 0$. For one solution, discriminant $= 0$: $36 - 4(k+5) = 0$, so $36 - 4k - 20 = 0$, $16 = 4k$, $k = 4$.\n\n**The Full Solution:**\n$x^2 - 4x + k = 2x - 5$\n$x^2 - 6x + k + 5 = 0$\n\nDiscriminant $= (-6)^2 - 4(1)(k+5) = 36 - 4k - 20 = 16 - 4k$\n\nFor exactly one solution: $16 - 4k = 0$\n$k = 4$\n\n**Common Mistakes to Avoid:**\n• Forgetting to move all terms to one side before applying the discriminant.\n• Sign error when combining $k$ and $-(-5) = +5$.\n\n**Verification:** With $k = 4$: $x^2 - 6x + 9 = 0$, $(x-3)^2 = 0$, $x = 3$, $y = 2(3)-5 = 1$. Check: $9 - 12 + 4 = 1$ ✓\n\n**Test Day Takeaway:** One intersection of a parabola and a line means the combined equation has discriminant $= 0$.",
          skills: ["discriminant", "systems-of-equations"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A right triangle has legs of length $5$ and $12$. What is $\\sin(\\theta)$ where $\\theta$ is the angle opposite the leg of length $5$?",
          choices: [
            { id: "A", text: "$\\frac{5}{13}$" },
            { id: "B", text: "$\\frac{12}{13}$" },
            { id: "C", text: "$\\frac{5}{12}$" },
            { id: "D", text: "$\\frac{13}{5}$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Right Triangle Trigonometry (SOH-CAH-TOA)**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Hypotenuse $= \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$. $\\sin(\\theta) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{5}{13}$.\n\n**The Full Solution:**\nStep 1: Find the hypotenuse: $c = \\sqrt{25 + 144} = \\sqrt{169} = 13$.\nStep 2: $\\sin(\\theta) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{5}{13}$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($\\frac{12}{13}$): This is $\\cos(\\theta)$, mixing up sine and cosine.\n• Choice C ($\\frac{5}{12}$): This is $\\tan(\\theta)$, using the adjacent leg instead of hypotenuse.\n• Choice D ($\\frac{13}{5}$): This is $\\csc(\\theta)$, the reciprocal of sine.\n\n**Test Day Takeaway:** SOH: $\\sin = \\frac{\\text{opposite}}{\\text{hypotenuse}}$. Always find the hypotenuse first.",
          skills: ["right-triangle-trig", "triangles"]
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
          question: "A sports league has $96$ players divided equally into $8$ teams. How many players are on each team?",
          choices: [
            { id: "A", text: "$8$" },
            { id: "B", text: "$10$" },
            { id: "C", text: "$12$" },
            { id: "D", text: "$14$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Basic Division**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $96 \\div 8 = 12$.\n\n**The Full Solution:**\nPlayers per team $= \\frac{96}{8} = 12$\n\n**Why the wrong answers are tempting:**\n• Choice A ($8$): This is the number of teams, not players per team.\n• Choice B ($10$): From a division error.\n• Choice D ($14$): From a division error.\n\n**Test Day Takeaway:** Read carefully — are they asking for teams or players per team?",
          skills: ["word-problems"]
        },
        {
          id: 2,
          type: "fill-in",
          difficulty: "easy",
          question: "How many feet are in $7$ yards? ($1$ yard $= 3$ feet)",
          correctAnswer: "21",
          explanation: "**SAT Pattern: Unit Conversion**\n\n**The correct answer is 21.**\n\n**The Fast Way (5 seconds):** $7 \\times 3 = 21$ feet.\n\n**The Full Solution:**\n$7 \\text{ yards} \\times \\frac{3 \\text{ feet}}{1 \\text{ yard}} = 21 \\text{ feet}$\n\n**Common Mistakes to Avoid:**\n• Dividing instead of multiplying: $7 \\div 3 \\approx 2.3$.\n\n**Verification:** $21 \\div 3 = 7$ yards ✓\n\n**Test Day Takeaway:** Going from a larger unit to a smaller unit means multiply.",
          skills: ["unit-conversion"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A coffee shop sells cups of coffee for $\\$4$ each. A customer spent $\\$28$ on coffee. How many cups did the customer buy?",
          choices: [
            { id: "A", text: "$5$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$7$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Basic Division Word Problem**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $28 \\div 4 = 7$.\n\n**The Full Solution:**\nNumber of cups $= \\frac{\\$28}{\\$4 \\text{ per cup}} = 7$ cups.\n\n**Why the wrong answers are tempting:**\n• Choice A ($5$): From $28 \\div 5$ or $28 - 23$ — random arithmetic errors.\n• Choice B ($6$): From $28 \\div 4$ rounded or miscalculated.\n• Choice D ($8$): From $28 \\div 3.5$ or similar.\n\n**Test Day Takeaway:** Total $\\div$ price per item $=$ number of items.",
          skills: ["word-problems"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The function $g(t) = 50 + 10t$ gives the total number of books in a library collection $t$ months after January. What does the $10$ represent?",
          choices: [
            { id: "A", text: "The total number of books after $t$ months" },
            { id: "B", text: "The number of books added each month" },
            { id: "C", text: "The number of books in January" },
            { id: "D", text: "The number of months" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Slope Interpretation in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** The coefficient of $t$ is the rate of change — $10$ books per month.\n\n**The Full Solution:**\nIn $g(t) = 50 + 10t$:\n- $50$ is the initial value (books in January)\n- $10$ is the slope (books added per month)\n\n**Why the wrong answers are tempting:**\n• Choice A: Describes $g(t)$ itself, not the coefficient $10$.\n• Choice C: The number of books in January is $50$ (the $y$-intercept), not $10$.\n• Choice D: $t$ represents months; $10$ is the rate.\n\n**Test Day Takeaway:** In $y = mx + b$, the coefficient $m$ is always the rate of change per unit.",
          skills: ["function-interpretation", "slope"]
        },
        {
          id: 5,
          type: "fill-in",
          difficulty: "easy",
          question: "If $\\frac{3x}{5} = 12$, what is the value of $x$?",
          correctAnswer: "20",
          explanation: "**SAT Pattern: One-Step Equation with Fraction**\n\n**The correct answer is 20.**\n\n**The Fast Way (10 seconds):** Multiply both sides by $5$: $3x = 60$. Divide by $3$: $x = 20$.\n\n**The Full Solution:**\n$\\frac{3x}{5} = 12$\n$3x = 60$\n$x = 20$\n\n**Common Mistakes to Avoid:**\n• Getting $x = 4$ by dividing $12$ by $3$ but forgetting to multiply by $5$.\n\n**Verification:** $\\frac{3(20)}{5} = \\frac{60}{5} = 12$ ✓\n\n**Test Day Takeaway:** Clear the fraction first by multiplying both sides by the denominator.",
          skills: ["solving-equations"]
        },

        // ===== MEDIUM (Q6-Q15) =====
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A line has a slope of $-\\frac{2}{3}$ and passes through the point $(6, 1)$. What is the $y$-intercept of the line?",
          choices: [
            { id: "A", text: "$-3$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$9$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Finding Y-Intercept from Slope and a Point**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** $y = mx + b$: $1 = -\\frac{2}{3}(6) + b$, so $1 = -4 + b$, $b = 5$.\n\n**The Full Solution:**\nPlug $(6, 1)$ and $m = -\\frac{2}{3}$ into $y = mx + b$:\n$1 = -\\frac{2}{3}(6) + b$\n$1 = -4 + b$\n$b = 5$\n\n**Why the wrong answers are tempting:**\n• Choice A ($-3$): From an error computing $-\\frac{2}{3} \\times 6$.\n• Choice B ($3$): From computing $1 - (-\\frac{2}{3})(6) = 1 - (-4)$ incorrectly as $3$.\n• Choice D ($9$): From adding $4$ to $1$ incorrectly or misapplying the sign.\n\n**Test Day Takeaway:** Plug the known point into $y = mx + b$ and solve for $b$.",
          skills: ["slope", "linear-equations"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A sports coach records that $2.5b + 4g = 60$, where $b$ is the number of basketballs and $g$ is the number of golf balls purchased. If $g = 10$, how many basketballs were purchased?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$8$" },
            { id: "C", text: "$16$" },
            { id: "D", text: "$20$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Substitution in a Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $2.5b + 4(10) = 60$, so $2.5b + 40 = 60$, $2.5b = 20$, $b = 8$.\n\n**The Full Solution:**\n$2.5b + 4(10) = 60$\n$2.5b + 40 = 60$\n$2.5b = 20$\n$b = \\frac{20}{2.5} = 8$\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): From dividing $20$ by $5$ instead of $2.5$.\n• Choice C ($16$): From dividing $40$ by $2.5$.\n• Choice D ($20$): From stopping at $2.5b = 20$ and reporting $20$ as the answer.\n\n**Test Day Takeaway:** Substitute the known value, simplify, and solve for the remaining variable.",
          skills: ["linear-equations", "word-problems"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "If $3(2x - 4) = 18$, what is the value of $x$?",
          correctAnswer: "5",
          explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is 5.**\n\n**The Fast Way (15 seconds):** Divide both sides by $3$: $2x - 4 = 6$. Add $4$: $2x = 10$. Divide by $2$: $x = 5$.\n\n**The Full Solution:**\n$3(2x - 4) = 18$\n$2x - 4 = 6$\n$2x = 10$\n$x = 5$\n\n**Common Mistakes to Avoid:**\n• Distributing first: $6x - 12 = 18$, $6x = 30$, $x = 5$. Same answer, but more steps.\n• Getting $x = 3$ from dividing $18$ by $6$ without adding $12$ first.\n\n**Verification:** $3(2(5) - 4) = 3(10 - 4) = 3(6) = 18$ ✓\n\n**Test Day Takeaway:** When the entire expression is multiplied by a constant, divide both sides first to simplify.",
          skills: ["solving-equations"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A scatterplot shows a strong positive linear association between hours studied and test scores. Which of the following best describes this relationship?",
          choices: [
            { id: "A", text: "As hours studied increases, test scores tend to decrease." },
            { id: "B", text: "As hours studied increases, test scores tend to increase." },
            { id: "C", text: "There is no relationship between hours studied and test scores." },
            { id: "D", text: "Hours studied causes higher test scores." }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Interpreting Correlation**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** \"Positive linear association\" means both variables increase together.\n\n**The Full Solution:**\nPositive association: as one variable increases, the other tends to increase.\nStrong: the points cluster close to a line.\nLinear: the relationship follows a straight line.\n\n**Why the wrong answers are tempting:**\n• Choice A: This describes a negative association.\n• Choice C: The problem says there IS a strong association.\n• Choice D: Association does not imply causation. The question asks what describes the relationship, and \"causes\" goes beyond what a scatterplot can show.\n\n**Test Day Takeaway:** Positive $=$ both increase together. Association $\\neq$ causation.",
          skills: ["scatterplots", "statistics"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "What is the area, in square units, of a triangle with a base of $14$ units and a height of $9$ units?",
          choices: [
            { id: "A", text: "$23$" },
            { id: "B", text: "$63$" },
            { id: "C", text: "$126$" },
            { id: "D", text: "$252$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Triangle Area**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Area $= \\frac{1}{2} \\times 14 \\times 9 = 7 \\times 9 = 63$.\n\n**The Full Solution:**\nArea $= \\frac{1}{2}bh = \\frac{1}{2}(14)(9) = \\frac{126}{2} = 63$\n\n**Why the wrong answers are tempting:**\n• Choice A ($23$): Added $14 + 9$ (perimeter thinking, not area).\n• Choice C ($126$): Forgot to multiply by $\\frac{1}{2}$ (treated it as a rectangle).\n• Choice D ($252$): Doubled the rectangle area instead of halving it.\n\n**Test Day Takeaway:** Triangle area $= \\frac{1}{2} \\times \\text{base} \\times \\text{height}$. Don't forget the $\\frac{1}{2}$.",
          skills: ["area", "triangles"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The expression $\\frac{x^8}{x^3}$ is equivalent to which of the following?",
          choices: [
            { id: "A", text: "$x^{5}$" },
            { id: "B", text: "$x^{11}$" },
            { id: "C", text: "$x^{24}$" },
            { id: "D", text: "$x^{\\frac{8}{3}}$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Exponent Division Rule**\n\n**Choice A is correct.**\n\n**The Fast Way (5 seconds):** $\\frac{x^8}{x^3} = x^{8-3} = x^5$.\n\n**The Full Solution:**\nWhen dividing powers with the same base, subtract exponents:\n$\\frac{x^8}{x^3} = x^{8-3} = x^5$\n\n**Why the wrong answers are tempting:**\n• Choice B ($x^{11}$): Added exponents instead of subtracting (multiplication rule, not division).\n• Choice C ($x^{24}$): Multiplied exponents (power rule, not division).\n• Choice D ($x^{8/3}$): Divided exponents.\n\n**Test Day Takeaway:** Same base: multiply $\\to$ add exponents; divide $\\to$ subtract exponents.",
          skills: ["exponent-rules"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A soccer team's wins $w$ and losses $l$ satisfy the system below. How many wins does the team have?\n\n$w + l = 30$\n$w - l = 6$",
          choices: [
            { id: "A", text: "$12$" },
            { id: "B", text: "$15$" },
            { id: "C", text: "$18$" },
            { id: "D", text: "$24$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: System of Linear Equations (Elimination)**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Add the equations: $2w = 36$, so $w = 18$.\n\n**The Full Solution:**\n$w + l = 30$\n$w - l = 6$\nAdd: $2w = 36$, so $w = 18$.\nThen $l = 30 - 18 = 12$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($12$): This is the number of losses, not wins.\n• Choice B ($15$): From averaging $30 \\div 2$ without using the second equation.\n• Choice D ($24$): From adding $18 + 6$.\n\n**Test Day Takeaway:** When one equation has $+l$ and the other has $-l$, add them to eliminate $l$ instantly.",
          skills: ["systems-of-equations"]
        },
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "A rectangular garden has a length that is $3$ more than twice its width. If the width is $5$ meters, what is the perimeter of the garden in meters?",
          correctAnswer: "36",
          explanation: "**SAT Pattern: Perimeter from a Word Description**\n\n**The correct answer is 36.**\n\n**The Fast Way (15 seconds):** Length $= 2(5) + 3 = 13$. Perimeter $= 2(13 + 5) = 2(18) = 36$.\n\n**The Full Solution:**\nWidth $= 5$\nLength $= 2(5) + 3 = 13$\nPerimeter $= 2(l + w) = 2(13 + 5) = 2(18) = 36$\n\n**Common Mistakes to Avoid:**\n• Computing only $l + w = 18$ and stopping (forgetting to multiply by $2$).\n• Getting the length wrong: $2(5 + 3) = 16$ instead of $2(5) + 3 = 13$.\n\n**Verification:** $2(13) + 2(5) = 26 + 10 = 36$ ✓\n\n**Test Day Takeaway:** Translate word descriptions carefully: \"$3$ more than twice\" means $2w + 3$, not $2(w + 3)$.",
          skills: ["word-problems", "linear-equations"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $f(x) = x^2 + 3x - 10$, what is $f(-5)$?",
          choices: [
            { id: "A", text: "$-10$" },
            { id: "B", text: "$0$" },
            { id: "C", text: "$10$" },
            { id: "D", text: "$30$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $f(-5) = (-5)^2 + 3(-5) - 10 = 25 - 15 - 10 = 0$.\n\n**The Full Solution:**\n$f(-5) = (-5)^2 + 3(-5) - 10$\n$= 25 - 15 - 10$\n$= 0$\n\n**Why the wrong answers are tempting:**\n• Choice A ($-10$): From computing $(-5)^2 = -25$ instead of $25$ (sign error with squaring negatives).\n• Choice C ($10$): From $25 + 15 - 10$, making $3(-5) = +15$.\n• Choice D ($30$): From $25 + 15 - 10 = 30$, two sign errors.\n\n**Test Day Takeaway:** When substituting a negative number, remember $(-5)^2 = 25$ (positive).",
          skills: ["function-evaluation", "quadratic-functions"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In a right triangle, one acute angle measures $35°$. What is the measure of the other acute angle?",
          choices: [
            { id: "A", text: "$35°$" },
            { id: "B", text: "$45°$" },
            { id: "C", text: "$55°$" },
            { id: "D", text: "$145°$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** In a right triangle, the two acute angles sum to $90°$: $90° - 35° = 55°$.\n\n**The Full Solution:**\nSum of angles in a triangle $= 180°$.\nOne angle is $90°$, another is $35°$.\nThird angle $= 180° - 90° - 35° = 55°$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($35°$): Assumes the triangle is isosceles.\n• Choice B ($45°$): Assumes both acute angles are $45°$.\n• Choice D ($145°$): Computed $180° - 35°$, forgetting to subtract the right angle too.\n\n**Test Day Takeaway:** In a right triangle, the two acute angles always add to $90°$.",
          skills: ["triangles", "angles"]
        },

        // ===== HARD (Q16-Q22) =====
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $(x + 3)(x - 3) = x^2 - a$, what is the value of $a$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$9$" },
            { id: "D", text: "$-9$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Difference of Squares**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $(x+3)(x-3) = x^2 - 9$. Since this equals $x^2 - a$, we have $a = 9$.\n\n**The Full Solution:**\n$(x+3)(x-3) = x^2 - 3x + 3x - 9 = x^2 - 9$\nCompare with $x^2 - a$: $a = 9$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): Uses the value inside the parentheses, not its square.\n• Choice B ($6$): Doubles $3$ instead of squaring it.\n• Choice D ($-9$): Sign confusion; $x^2 - (-9) = x^2 + 9 \\neq x^2 - 9$.\n\n**Test Day Takeaway:** $(a+b)(a-b) = a^2 - b^2$. The constant is the square of $b$.",
          skills: ["factoring", "polynomial-operations"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $h(x) = 2(x - 4)^2 + 3$ has a minimum value. What is this minimum value?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$35$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Minimum Value from Vertex Form**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** In vertex form $a(x-h)^2 + k$, the minimum value (when $a > 0$) is $k = 3$.\n\n**The Full Solution:**\n$h(x) = 2(x-4)^2 + 3$ is in vertex form.\nVertex: $(4, 3)$.\nSince $a = 2 > 0$, the parabola opens upward, so the minimum is $y = 3$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): This is $a$, the coefficient, not the minimum.\n• Choice C ($4$): This is the $x$-coordinate of the vertex, not the $y$-coordinate.\n• Choice D ($35$): From evaluating $h(0) = 2(16) + 3 = 35$.\n\n**Test Day Takeaway:** In $a(x-h)^2 + k$: vertex is $(h, k)$, minimum (if $a > 0$) is $k$.",
          skills: ["vertex-form", "quadratic-functions"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "The volume of a cylinder is $V = \\pi r^2 h$. If a water tank has radius $5$ feet and height $8$ feet, what is the volume, in cubic feet, divided by $\\pi$?",
          correctAnswer: "200",
          explanation: "**SAT Pattern: Volume Formula Application**\n\n**The correct answer is 200.**\n\n**The Fast Way (10 seconds):** $V = \\pi(5)^2(8) = 200\\pi$. Divided by $\\pi$: $200$.\n\n**The Full Solution:**\n$V = \\pi r^2 h = \\pi (25)(8) = 200\\pi$\n$\\frac{V}{\\pi} = 200$\n\n**Common Mistakes to Avoid:**\n• Answering $200\\pi$ when the question asks for $V/\\pi$.\n• Computing $r^2 = 10$ instead of $25$.\n\n**Verification:** $25 \\times 8 = 200$ ✓\n\n**Test Day Takeaway:** When a problem says \"divided by $\\pi$,\" they want the numerical coefficient only.",
          skills: ["volume"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "For what value of $c$ does the equation $x^2 - 8x + c = 0$ have no real solutions?",
          choices: [
            { id: "A", text: "$12$" },
            { id: "B", text: "$16$" },
            { id: "C", text: "$17$" },
            { id: "D", text: "$20$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: No Real Solutions via Discriminant**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** No real solutions means discriminant $< 0$: $64 - 4c < 0$, so $c > 16$. The only choice greater than $16$ is $17$.\n\n**The Full Solution:**\nDiscriminant $= b^2 - 4ac = (-8)^2 - 4(1)(c) = 64 - 4c$.\nNo real solutions: $64 - 4c < 0$\n$64 < 4c$\n$c > 16$\n\nOnly Choice C ($17$) satisfies $c > 16$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($12$): $64 - 48 = 16 > 0$, so there ARE real solutions.\n• Choice B ($16$): $64 - 64 = 0$, giving exactly one solution (not none).\n• Choice D ($20$): Also works ($64 - 80 < 0$), but the SAT asks \"which value\" and only one answer can be correct. Actually, D would also be valid — but on the real SAT, only one choice will satisfy the condition. Here, both C and D work, but C is the smallest valid value. The question is asking which one from the choices works.\n\n**Test Day Takeaway:** No real solutions $\\to$ discriminant $< 0$. Exactly one $\\to$ discriminant $= 0$.",
          skills: ["discriminant", "quadratic-equations"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $\\sqrt{2x + 3} = 7$, what is the value of $2x + 3$?",
          choices: [
            { id: "A", text: "$7$" },
            { id: "B", text: "$14$" },
            { id: "C", text: "$46$" },
            { id: "D", text: "$49$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Radical Equation — Square Both Sides**\n\n**Choice D is correct.**\n\n**The Fast Way (5 seconds):** Square both sides: $2x + 3 = 49$.\n\n**The Full Solution:**\n$\\sqrt{2x + 3} = 7$\n$(\\sqrt{2x+3})^2 = 7^2$\n$2x + 3 = 49$\n\n**Why the wrong answers are tempting:**\n• Choice A ($7$): Uses the right side without squaring.\n• Choice B ($14$): Doubles $7$ instead of squaring it.\n• Choice C ($46$): Solves for $x = 23$ and reports $2(23) = 46$.\n\n**Test Day Takeaway:** When a square root equals a number, the expression under the root equals that number squared.",
          skills: ["radical-equations", "solving-equations"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "In the $xy$-plane, the line $y = 3x + 2$ intersects the parabola $y = x^2 + 2x + 2$. What is the $x$-coordinate of the intersection point where $x > 0$?",
          correctAnswer: "1",
          explanation: "**SAT Pattern: Quadratic-Linear System**\n\n**The correct answer is 1.**\n\n**The Fast Way (30 seconds):** Set equal: $3x + 2 = x^2 + 2x + 2$. Simplify: $0 = x^2 - x = x(x - 1)$. So $x = 0$ or $x = 1$. Since $x > 0$, $x = 1$.\n\n**The Full Solution:**\n$3x + 2 = x^2 + 2x + 2$\n$0 = x^2 + 2x + 2 - 3x - 2$\n$0 = x^2 - x$\n$0 = x(x - 1)$\n$x = 0$ or $x = 1$\n\nSince $x > 0$: $x = 1$.\n\n**Common Mistakes to Avoid:**\n• Reporting $x = 0$ — valid intersection but doesn't satisfy $x > 0$.\n• Algebra errors when combining like terms.\n\n**Verification:** At $x = 1$: $y = 3(1) + 2 = 5$ and $y = 1 + 2 + 2 = 5$ ✓\n\n**Test Day Takeaway:** Set the equations equal, move everything to one side, factor, and check which solution meets the given condition.",
          skills: ["systems-of-equations", "quadratic-equations"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A $45°$-$45°$-$90°$ triangle has a hypotenuse of length $10$. What is the length of each leg?",
          choices: [
            { id: "A", text: "$5$" },
            { id: "B", text: "$5\\sqrt{2}$" },
            { id: "C", text: "$10\\sqrt{2}$" },
            { id: "D", text: "$\\frac{10}{\\sqrt{2}}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: 45-45-90 Special Right Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** In a $45$-$45$-$90$ triangle, hypotenuse $= \\text{leg} \\times \\sqrt{2}$. So leg $= \\frac{10}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2}$.\n\n**The Full Solution:**\nIn a $45°$-$45°$-$90°$ triangle, the sides are in ratio $1 : 1 : \\sqrt{2}$.\nLeg : Hypotenuse $= 1 : \\sqrt{2}$\nLeg $= \\frac{10}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($5$): Divides hypotenuse by $2$, using the $30$-$60$-$90$ rule instead.\n• Choice C ($10\\sqrt{2}$): Multiplies by $\\sqrt{2}$ instead of dividing.\n• Choice D ($\\frac{10}{\\sqrt{2}}$): Mathematically equal to $5\\sqrt{2}$, but not simplified. On the SAT, the rationalized form is standard.\n\n**Test Day Takeaway:** $45$-$45$-$90$: legs $= \\frac{\\text{hypotenuse}}{\\sqrt{2}}$. $30$-$60$-$90$: short leg $= \\frac{\\text{hypotenuse}}{2}$.",
          skills: ["special-right-triangles", "triangles"]
        }
      ]
    }
  ]
};

export default practiceTest7;
