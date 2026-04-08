// Practice Test 4 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Contexts: astronomy, chemistry, transportation, finance

export const practiceTest4 = {
  id: "practice-test-4",
  title: "Practice Test 4",
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
          question: "A telescope store records the number of telescopes sold each month. The table below shows the data.\n\n| Month | Jan | Feb | Mar | Apr | May |\n|---|---|---|---|---|---|\n| Telescopes Sold | $15$ | $22$ | $18$ | $30$ | $25$ |\n\nIn which month were the most telescopes sold?",
          choices: [
            { id: "A", text: "February" },
            { id: "B", text: "March" },
            { id: "C", text: "April" },
            { id: "D", text: "May" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Reading a Data Table**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** Scan the values: $15, 22, 18, 30, 25$. The largest is $30$, which is April.\n\n**The Full Solution:**\nCompare all values:\nJan: $15$, Feb: $22$, Mar: $18$, Apr: $30$, May: $25$.\nThe maximum is $30$ in April.\n\n**Why the wrong answers are tempting:**\n• Choice A (February): $22$ is the second month but not the highest.\n• Choice B (March): $18$ is less than April's $30$.\n• Choice D (May): $25$ is the second-highest but still less than $30$.\n\n**Test Day Takeaway:** When asked to identify a maximum or minimum from a table, compare all values carefully.",
          skills: ["statistics", "word-problems"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "What percentage of $300$ is $75$?",
          choices: [
            { id: "A", text: "$4\\%$" },
            { id: "B", text: "$22.5\\%$" },
            { id: "C", text: "$25\\%$" },
            { id: "D", text: "$75\\%$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Finding What Percent One Number Is of Another**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $\\frac{75}{300} = 0.25 = 25\\%$.\n\n**The Full Solution:**\n\"What percentage of $300$ is $75$\" means $\\frac{75}{300} \\times 100\\%$.\n$\\frac{75}{300} = 0.25 = 25\\%$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($4\\%$): From $\\frac{300}{75} = 4$, dividing in the wrong direction.\n• Choice B ($22.5\\%$): From $\\frac{75}{333}$ or a calculation error.\n• Choice D ($75\\%$): Using the number $75$ as the percentage directly.\n\n**Test Day Takeaway:** \"What percent of $A$ is $B$\" = $\\frac{B}{A} \\times 100$. The number after \"of\" is always the denominator.",
          skills: ["percents"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The equation $y = 15{,}000 - 1{,}200x$ models the value $y$, in dollars, of a car $x$ years after purchase. What does the number $1{,}200$ represent in this equation?",
          choices: [
            { id: "A", text: "The initial value of the car" },
            { id: "B", text: "The value of the car after $1$ year" },
            { id: "C", text: "The decrease in value per year" },
            { id: "D", text: "The number of years until the car has no value" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Interpreting Linear Models**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** In $y = mx + b$ form, the coefficient of $x$ is the rate of change. Here $-1{,}200$ is the slope, meaning the car loses $\\$1{,}200$ per year.\n\n**The Full Solution:**\n$y = 15{,}000 - 1{,}200x$ is in slope-intercept form $y = b + mx$ where $b = 15{,}000$ (initial value) and $m = -1{,}200$ (rate of change per year). Since it is negative, the value decreases by $\\$1{,}200$ each year.\n\n**Why the wrong answers are tempting:**\n• Choice A: $15{,}000$ is the initial value, not $1{,}200$.\n• Choice B: After $1$ year, $y = 15{,}000 - 1{,}200 = 13{,}800$.\n• Choice D: The car reaches $\\$0$ when $15{,}000 - 1{,}200x = 0$, so $x = 12.5$ years.\n\n**Test Day Takeaway:** In $y = b + mx$, the coefficient of $x$ is the rate of change per unit. The constant is the starting value.",
          skills: ["function-interpretation", "linear-functions"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A shuttle service charges $\\$5$ per ride plus $\\$2$ for each additional stop. Maria took a ride with $4$ additional stops. Which equation gives the total cost $C$ for a ride with $s$ additional stops?",
          choices: [
            { id: "A", text: "$C = 2s + 5$" },
            { id: "B", text: "$C = 5s + 2$" },
            { id: "C", text: "$C = 7s$" },
            { id: "D", text: "$C = 2s - 5$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Translating a Word Problem into a Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** Base cost $= \\$5$ (flat fee). Per-stop cost $= \\$2$. Total: $C = 2s + 5$.\n\n**The Full Solution:**\nThe $\\$5$ is a one-time charge (y-intercept), and $\\$2$ per stop is the rate (slope).\n$C = 2s + 5$.\n\nVerification with Maria's ride ($s = 4$): $C = 2(4) + 5 = 13$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($5s + 2$): Swaps the per-stop rate and flat fee.\n• Choice C ($7s$): Adds $5 + 2 = 7$ and treats it as a single rate.\n• Choice D ($2s - 5$): Subtracts the flat fee.\n\n**Test Day Takeaway:** The repeated cost is the slope and the one-time cost is the $y$-intercept. $C = (\\text{rate})(\\text{variable}) + \\text{flat fee}$.",
          skills: ["linear-functions", "word-problems"]
        },
        {
          id: 5,
          type: "fill-in",
          difficulty: "easy",
          question: "A group of $9$ friends buys concert tickets using a $\\$63$ group coupon. After applying the coupon, the group pays $\\$27$ total. What was the original price, in dollars, of each ticket?",
          correctAnswer: "10",
          explanation: "**SAT Pattern: Two-Step Word Problem**\n\n**The correct answer is $10$.**\n\n**The Fast Way (15 seconds):** Total before coupon $= 27 + 63 = 90$. Price per ticket $= 90 \\div 9 = 10$.\n\n**The Full Solution:**\nLet $p$ be the original price per ticket.\n$9p - 63 = 27$\n$9p = 90$\n$p = 10$\n\n**Common Mistakes to Avoid:**\n• Forgetting to add back the coupon: $27 \\div 9 = 3$.\n• Subtracting the coupon instead of adding: $(27 - 63) \\div 9$ gives a negative number.\n\n**Verification:** $9 \\times 10 - 63 = 90 - 63 = 27$ ✓\n\n**Test Day Takeaway:** When a coupon is applied, add it back to the amount paid to find the original total, then divide.",
          skills: ["word-problems", "solving-equations"]
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table below shows values for a function $h$.\n\n| $x$ | $0$ | $1$ | $2$ | $3$ |\n|---|---|---|---|---|\n| $h(x)$ | $5$ | $10$ | $20$ | $40$ |\n\nWhich type of function best models the data in the table?",
          choices: [
            { id: "A", text: "Linear, because the differences are constant" },
            { id: "B", text: "Quadratic, because the values increase" },
            { id: "C", text: "Exponential, because the ratios are constant" },
            { id: "D", text: "Linear, because $h(x)$ is always positive" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Identifying Function Type from a Table**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Check ratios: $10/5 = 2$, $20/10 = 2$, $40/20 = 2$. Constant ratio $= 2$, so exponential.\n\n**The Full Solution:**\nDifferences: $5, 10, 20$ — not constant, so not linear.\nRatios: $2, 2, 2$ — constant, so exponential.\nThe function doubles each time $x$ increases by $1$: $h(x) = 5 \\cdot 2^x$.\n\n**Why the wrong answers are tempting:**\n• Choice A: The differences ($5, 10, 20$) are NOT constant.\n• Choice B: Quadratic growth would have constant second differences, not constant ratios.\n• Choice D: Being positive does not determine the function type.\n\n**Test Day Takeaway:** Constant differences = linear. Constant ratios = exponential.",
          skills: ["exponential-functions", "function-interpretation"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The equation $n^2 - 53 = 91$ is true. What is the positive value of $n$?",
          choices: [
            { id: "A", text: "$6$" },
            { id: "B", text: "$12$" },
            { id: "C", text: "$38$" },
            { id: "D", text: "$144$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Solving for a Squared Variable**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $n^2 = 91 + 53 = 144$. $n = \\sqrt{144} = 12$.\n\n**The Full Solution:**\n$n^2 - 53 = 91$\n$n^2 = 144$\n$n = \\pm 12$\nThe positive value is $12$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($6$): From $\\sqrt{36}$, a common perfect square but wrong.\n• Choice C ($38$): From $91 - 53 = 38$, subtracting instead of adding.\n• Choice D ($144$): Reporting $n^2$ instead of $n$.\n\n**Test Day Takeaway:** Isolate $n^2$ first, then take the square root. Remember to check whether the question asks for the positive solution.",
          skills: ["solving-equations", "quadratic-equations"]
        },
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A train traveled $240$ miles at a constant speed. If the train had traveled $20$ miles per hour faster, the trip would have taken $1$ hour less. What was the train's actual speed, in miles per hour?",
          choices: [
            { id: "A", text: "$40$" },
            { id: "B", text: "$60$" },
            { id: "C", text: "$80$" },
            { id: "D", text: "$100$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Distance-Rate-Time with Two Scenarios**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Try each answer. At $60$ mph: time $= 240/60 = 4$ hours. At $80$ mph: time $= 240/80 = 3$ hours. Difference is $1$ hour. Correct.\n\n**The Full Solution:**\nLet $r$ be the speed. Then:\n$\\frac{240}{r} - \\frac{240}{r+20} = 1$\n\nTesting $r = 60$: $\\frac{240}{60} - \\frac{240}{80} = 4 - 3 = 1$ ✓\n\n**Why the wrong answers are tempting:**\n• Choice A ($40$): $240/40 = 6$ hours vs $240/60 = 4$ hours. Difference is $2$ hours, not $1$.\n• Choice C ($80$): $240/80 = 3$ hours vs $240/100 = 2.4$ hours. Difference is $0.6$ hours.\n• Choice D ($100$): $240/100 = 2.4$ hours vs $240/120 = 2$ hours. Difference is $0.4$ hours.\n\n**Test Day Takeaway:** On the SAT with multiple-choice answers, plug in each choice and check. It is often faster than setting up the algebra.",
          skills: ["word-problems", "solving-equations"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Line $j$ passes through the points $(1, 3)$ and $(4, 12)$. Which of the following is an equation of line $j$?",
          choices: [
            { id: "A", text: "$y = 3x$" },
            { id: "B", text: "$y = 3x + 3$" },
            { id: "C", text: "$y = 4x - 1$" },
            { id: "D", text: "$y = \\frac{1}{3}x + 3$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Finding the Equation of a Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Slope $= \\frac{12 - 3}{4 - 1} = \\frac{9}{3} = 3$. Use $(1, 3)$: $3 = 3(1) + b$, so $b = 0$. Equation: $y = 3x$.\n\n**The Full Solution:**\n$m = \\frac{12 - 3}{4 - 1} = \\frac{9}{3} = 3$\nUsing point $(1, 3)$: $3 = 3(1) + b$, so $b = 0$.\n$y = 3x$.\n\nVerify with $(4, 12)$: $3(4) = 12$ ✓\n\n**Why the wrong answers are tempting:**\n• Choice B ($y = 3x + 3$): Correct slope but uses $y$-coordinate as the intercept instead of computing $b$.\n• Choice C ($y = 4x - 1$): Incorrect slope and intercept.\n• Choice D ($y = \\frac{1}{3}x + 3$): Uses the reciprocal of the slope.\n\n**Test Day Takeaway:** Find slope from two points, plug one point into $y = mx + b$ to find $b$, and verify with the other point.",
          skills: ["slope", "linear-functions"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table below shows the number of passengers on different bus routes during morning and evening.\n\n|  | Route A | Route B | Route C | Total |\n|---|---|---|---|---|\n| Morning | $42$ | $35$ | $23$ | $100$ |\n| Evening | $28$ | $40$ | $32$ | $100$ |\n| Total | $70$ | $75$ | $55$ | $200$ |\n\nOf the passengers who rode Route B, what fraction rode in the evening?",
          choices: [
            { id: "A", text: "$\\frac{40}{200}$" },
            { id: "B", text: "$\\frac{40}{100}$" },
            { id: "C", text: "$\\frac{40}{75}$" },
            { id: "D", text: "$\\frac{75}{200}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Conditional Probability from a Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** \"Of the passengers who rode Route B\" = denominator is $75$ (total Route B). Evening Route B $= 40$. Fraction $= \\frac{40}{75}$.\n\n**The Full Solution:**\nThe condition restricts us to Route B passengers (total $= 75$).\nOf those, $40$ rode in the evening.\nFraction $= \\frac{40}{75} = \\frac{8}{15}$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{40}{200}$): Uses the grand total as the denominator.\n• Choice B ($\\frac{40}{100}$): Uses the evening total as the denominator (this answers a different question).\n• Choice D ($\\frac{75}{200}$): Finds the fraction of all passengers on Route B.\n\n**Test Day Takeaway:** The group after \"of\" determines the denominator. \"Of Route B passengers\" means denominator = total Route B.",
          skills: ["probability", "two-way-tables"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A chemistry student mixes $x$ milliliters of a $30\\%$ acid solution with $200$ milliliters of a $10\\%$ acid solution to create a $15\\%$ acid solution. What is the value of $x$, rounded to the nearest tenth?",
          choices: [
            { id: "A", text: "$50.0$" },
            { id: "B", text: "$66.7$" },
            { id: "C", text: "$100.0$" },
            { id: "D", text: "$200.0$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Mixture Problems**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Set up the equation: $0.30x + 0.10(200) = 0.15(x + 200)$.\n$0.30x + 20 = 0.15x + 30$\n$0.15x = 10$\n$x = 66.\\overline{6} \\approx 66.7$\n\n**The Full Solution:**\nAcid from $30\\%$ solution: $0.30x$\nAcid from $10\\%$ solution: $0.10 \\times 200 = 20$\nTotal acid in mixture: $0.15(x + 200)$\n\n$0.30x + 20 = 0.15x + 30$\n$0.15x = 10$\n$x = \\frac{10}{0.15} = \\frac{200}{3} \\approx 66.7$\n\n**Why the wrong answers are tempting:**\n• Choice A ($50$): Comes from $10/0.20$, a setup error.\n• Choice C ($100$): Comes from dividing $30/0.30$, ignoring the mixture equation.\n• Choice D ($200$): Assumes equal amounts of each solution.\n\n**Test Day Takeaway:** For mixture problems: (amount 1)(concentration 1) + (amount 2)(concentration 2) = (total amount)(target concentration).",
          skills: ["solving-equations", "percents"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The system of equations below has solution $(x, y)$.\n\n$3x + 2y = 19$\n$x - 2y = -3$\n\nWhat is the value of $x$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Add the two equations to eliminate $y$:\n$(3x + 2y) + (x - 2y) = 19 + (-3)$\n$4x = 16$\n$x = 4$\n\n**The Full Solution:**\nSince the $y$-coefficients are $+2y$ and $-2y$, adding eliminates $y$:\n$3x + x + 2y - 2y = 19 - 3$\n$4x = 16$\n$x = 4$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): From subtracting the equations instead of adding.\n• Choice C ($5$): The value of $y$ (substituting $x = 4$: $4 - 2y = -3$, so $y = 3.5$; this is not $5$).\n• Choice D ($8$): From $19 - 3 = 16$ but forgetting to divide by $4$.\n\n**Verification:** $x = 4$: $3(4) + 2y = 19 \\Rightarrow y = 3.5$. Check: $4 - 2(3.5) = 4 - 7 = -3$ ✓\n\n**Test Day Takeaway:** When the coefficients of one variable are opposites, add the equations to eliminate that variable.",
          skills: ["systems-of-equations", "solving-equations"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A sample of a chemical compound decays so that the amount remaining, in grams, after $t$ hours is modeled by $A(t) = 500(0.85)^t$. What does $0.85$ represent in this model?",
          choices: [
            { id: "A", text: "The compound decays by $85\\%$ each hour" },
            { id: "B", text: "The compound retains $85\\%$ of its amount each hour" },
            { id: "C", text: "The initial amount is $85$ grams" },
            { id: "D", text: "After $1$ hour, $85$ grams remain" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Interpreting Exponential Decay**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** The base $0.85$ means $85\\%$ remains each hour, so $15\\%$ decays each hour.\n\n**The Full Solution:**\nIn $A(t) = A_0 \\cdot r^t$, the base $r = 0.85$ means that each hour, the amount is multiplied by $0.85$. Since $1 - 0.85 = 0.15 = 15\\%$, the compound loses $15\\%$ of its amount each hour.\n\n**Why the wrong answers are tempting:**\n• Choice A: Confuses $85\\%$ remaining with $85\\%$ decaying. If $85\\%$ decayed, only $15\\%$ would remain.\n• Choice C: $500$ is the initial amount, not $85$.\n• Choice D: After $1$ hour, $A(1) = 500(0.85) = 425$ grams, not $85$.\n\n**Test Day Takeaway:** In exponential decay $f(t) = a \\cdot r^t$, the base $r$ is the retention rate. The decay rate is $1 - r$.",
          skills: ["exponential-functions", "function-interpretation"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A taxi company charges a flat fee of $\\$3.00$ plus $\\$2.50$ per mile. A rideshare service charges no flat fee but $\\$4.00$ per mile. For what number of miles will the two services charge the same amount?",
          choices: [
            { id: "A", text: "$1$" },
            { id: "B", text: "$2$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$4$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Setting Two Linear Expressions Equal**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Taxi: $3 + 2.50m$. Rideshare: $4m$. Set equal: $3 + 2.50m = 4m$, so $3 = 1.50m$, $m = 2$.\n\n**The Full Solution:**\nTaxi cost: $C_1 = 3.00 + 2.50m$\nRideshare cost: $C_2 = 4.00m$\nSet equal: $3.00 + 2.50m = 4.00m$\n$3.00 = 4.00m - 2.50m$\n$3.00 = 1.50m$\n$m = 2$\n\nVerify: Taxi $= 3 + 2.50(2) = 8$. Rideshare $= 4(2) = 8$ ✓\n\n**Why the wrong answers are tempting:**\n• Choice A ($1$): Taxi $= 5.50$, Rideshare $= 4.00$. Not equal.\n• Choice C ($3$): Taxi $= 10.50$, Rideshare $= 12.00$. Not equal.\n• Choice D ($4$): Taxi $= 13.00$, Rideshare $= 16.00$. Not equal.\n\n**Test Day Takeaway:** Set two cost expressions equal and solve. The break-even point tells you when one becomes cheaper than the other.",
          skills: ["linear-equations", "systems-of-equations"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A survey of $300$ voters found that $\\frac{45}{300}$ support a new policy. The mean estimate is $15\\%$ with a margin of error of $\\pm 4\\%$. Another pollster claims that exactly $12\\%$ of voters support the policy. Which statement is best supported by the survey data?",
          choices: [
            { id: "A", text: "The other pollster's claim is definitely incorrect." },
            { id: "B", text: "The other pollster's claim is plausible because $12\\%$ is within the margin of error." },
            { id: "C", text: "The survey proves that exactly $15\\%$ of all voters support the policy." },
            { id: "D", text: "The margin of error is too large to draw any conclusion." }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Margin of Error Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Survey estimate: $15\\%$. Margin of error $\\pm 4\\%$ gives interval $[11\\%, 19\\%]$. Since $12\\%$ is within $[11\\%, 19\\%]$, the other pollster's claim is plausible.\n\n**The Full Solution:**\nThe confidence interval is $15\\% - 4\\% = 11\\%$ to $15\\% + 4\\% = 19\\%$.\nThe other pollster's claim of $12\\%$ falls within this interval, so it is a plausible value.\n\n**Why the wrong answers are tempting:**\n• Choice A: $12\\%$ is within the margin of error, so it cannot be ruled out.\n• Choice C: Surveys produce estimates, not exact values.\n• Choice D: A margin of error of $\\pm 4\\%$ still allows meaningful conclusions.\n\n**Test Day Takeaway:** The margin of error creates a plausible range around the estimate. Any value within this range is consistent with the survey data.",
          skills: ["margin-of-error", "statistics"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $f(x) = 2x^2 - 12x + 22$ can be rewritten as $f(x) = 2(x - h)^2 + k$. What is the value of $k$?",
          choices: [
            { id: "A", text: "$-14$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$10$" },
            { id: "D", text: "$22$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Converting to Vertex Form**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Factor out $2$ from the first two terms: $2(x^2 - 6x) + 22$. Complete the square: $2(x^2 - 6x + 9 - 9) + 22 = 2(x - 3)^2 - 18 + 22 = 2(x - 3)^2 + 4$. So $k = 4$.\n\n**The Full Solution:**\n$f(x) = 2x^2 - 12x + 22$\n$= 2(x^2 - 6x) + 22$\n$= 2(x^2 - 6x + 9 - 9) + 22$\n$= 2(x - 3)^2 - 18 + 22$\n$= 2(x - 3)^2 + 4$\n\nSo $h = 3$ and $k = 4$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($-14$): From subtracting $36$ instead of $18$ (forgetting to distribute the $2$).\n• Choice C ($10$): From $22 - 12 = 10$ (subtracting the coefficient of $x$).\n• Choice D ($22$): The constant term before completing the square.\n\n**Test Day Takeaway:** When completing the square with a leading coefficient, factor it out first, then add and subtract $(b/2)^2$ inside the parentheses.",
          skills: ["vertex-form", "quadratic-functions"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A circle in the $xy$-plane has equation $(x - 3)^2 + (y - 2)^2 = 16$. What is the radius of the circle?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$16$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Reading a Circle Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** The equation is $(x - h)^2 + (y - k)^2 = r^2$. Here $r^2 = 16$, so $r = 4$.\n\n**The Full Solution:**\nThe standard form of a circle is $(x - h)^2 + (y - k)^2 = r^2$, where $(h, k)$ is the center and $r$ is the radius.\nHere, $r^2 = 16$, so $r = \\sqrt{16} = 4$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): From $\\sqrt[4]{16}$ or halving $4$.\n• Choice C ($8$): From $16/2$ (halving instead of taking the square root).\n• Choice D ($16$): Confuses $r^2$ with $r$.\n\n**Test Day Takeaway:** The number on the right side of a circle equation is $r^2$, not $r$. Always take the square root.",
          skills: ["circle-equations", "coordinate-geometry"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "The equation $x^2 - 10x + 21 = 0$ has two solutions. What is the larger of the two solutions?",
          correctAnswer: "7",
          explanation: "**SAT Pattern: Solving Quadratics by Factoring**\n\n**The correct answer is $7$.**\n\n**The Fast Way (20 seconds):** Factor: $x^2 - 10x + 21 = (x - 3)(x - 7) = 0$. Solutions: $x = 3$ or $x = 7$. The larger solution is $7$.\n\n**The Full Solution:**\nFind two numbers that multiply to $21$ and add to $-10$: $-3$ and $-7$.\n$x^2 - 10x + 21 = (x - 3)(x - 7) = 0$\n$x = 3$ or $x = 7$\nThe larger solution is $7$.\n\n**Common Mistakes to Avoid:**\n• Reporting $3$ (the smaller solution) instead of $7$.\n• Sign errors: $(x + 3)(x + 7) = 0$ gives $x = -3, -7$, which do not satisfy the original equation.\n\n**Verification:** $7^2 - 10(7) + 21 = 49 - 70 + 21 = 0$ ✓\n\n**Test Day Takeaway:** Read carefully whether the question asks for the larger or smaller solution.",
          skills: ["quadratic-equations", "factoring"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A spacecraft's distance from Earth, in thousands of miles, is modeled by $d(t) = 3t^2 - 12t + 15$, where $t$ is time in hours. At what time $t$ is the spacecraft closest to Earth?",
          choices: [
            { id: "A", text: "$t = 1$" },
            { id: "B", text: "$t = 2$" },
            { id: "C", text: "$t = 3$" },
            { id: "D", text: "$t = 4$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Finding the Vertex of a Parabola**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** The minimum of $d(t) = 3t^2 - 12t + 15$ occurs at $t = -\\frac{b}{2a} = -\\frac{-12}{2(3)} = \\frac{12}{6} = 2$.\n\n**The Full Solution:**\nSince the coefficient of $t^2$ is positive ($a = 3 > 0$), the parabola opens upward, so the vertex is a minimum.\n$t = -\\frac{b}{2a} = -\\frac{-12}{2 \\cdot 3} = \\frac{12}{6} = 2$\n\nThe spacecraft is closest to Earth at $t = 2$ hours.\n\n**Why the wrong answers are tempting:**\n• Choice A ($t = 1$): $d(1) = 3 - 12 + 15 = 6$, which is not the minimum.\n• Choice C ($t = 3$): $d(3) = 27 - 36 + 15 = 6$, same as $d(1)$ but not the minimum.\n• Choice D ($t = 4$): $d(4) = 48 - 48 + 15 = 15$.\n\n**Verification:** $d(2) = 3(4) - 12(2) + 15 = 12 - 24 + 15 = 3$, which is less than $d(1) = 6$ and $d(3) = 6$. ✓\n\n**Test Day Takeaway:** The vertex of $ax^2 + bx + c$ is at $x = -\\frac{b}{2a}$. This gives the minimum when $a > 0$ and the maximum when $a < 0$.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In right triangle $PQR$, angle $Q$ is the right angle. If $PQ = 5$ and $QR = 12$, what is $\\sin(R)$?",
          choices: [
            { id: "A", text: "$\\frac{5}{13}$" },
            { id: "B", text: "$\\frac{5}{12}$" },
            { id: "C", text: "$\\frac{12}{13}$" },
            { id: "D", text: "$\\frac{13}{12}$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Right Triangle Trigonometry**\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** First find $PR$ (the hypotenuse): $PR = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$.\n$\\sin(R) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{PQ}{PR} = \\frac{5}{13}$.\n\n**The Full Solution:**\nIn right triangle $PQR$ with right angle at $Q$:\n• The side opposite angle $R$ is $PQ = 5$\n• The hypotenuse is $PR = \\sqrt{5^2 + 12^2} = 13$\n• $\\sin(R) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{5}{13}$\n\n**Why the wrong answers are tempting:**\n• Choice B ($\\frac{5}{12}$): Uses $QR$ as the hypotenuse instead of $PR$. This is $\\tan(R)$.\n• Choice C ($\\frac{12}{13}$): This is $\\cos(R)$, not $\\sin(R)$.\n• Choice D ($\\frac{13}{12}$): The hypotenuse over the adjacent side, which is not a standard trig ratio.\n\n**Test Day Takeaway:** SOH-CAH-TOA. Always identify which side is opposite, adjacent, and hypotenuse relative to the angle in question.",
          skills: ["right-triangle-trig", "triangles"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "If $\\frac{x}{3} + \\frac{x}{6} = 5$, what is the value of $x$?",
          correctAnswer: "10",
          explanation: "**SAT Pattern: Solving Equations with Fractions**\n\n**The correct answer is $10$.**\n\n**The Fast Way (20 seconds):** Multiply both sides by $6$: $2x + x = 30$, so $3x = 30$ and $x = 10$.\n\n**The Full Solution:**\nThe LCD of $3$ and $6$ is $6$. Multiply every term by $6$:\n$6 \\cdot \\frac{x}{3} + 6 \\cdot \\frac{x}{6} = 6 \\cdot 5$\n$2x + x = 30$\n$3x = 30$\n$x = 10$\n\n**Common Mistakes to Avoid:**\n• Only multiplying one fraction by the LCD: $\\frac{6x}{3} + \\frac{x}{6} = 30$ leads to an incorrect equation.\n• Adding the denominators: $\\frac{x}{3} + \\frac{x}{6} \\neq \\frac{2x}{9}$.\n\n**Verification:** $\\frac{10}{3} + \\frac{10}{6} = \\frac{20}{6} + \\frac{10}{6} = \\frac{30}{6} = 5$ ✓\n\n**Test Day Takeaway:** To clear fractions, multiply every term by the LCD. This turns the equation into a simple linear equation.",
          skills: ["solving-equations", "algebraic-manipulation"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation $-2x^2 + bx - 18 = 0$ has exactly one real solution. What is a possible value of $b$?",
          choices: [
            { id: "A", text: "$6$" },
            { id: "B", text: "$8$" },
            { id: "C", text: "$10$" },
            { id: "D", text: "$12$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Discriminant Equals Zero**\n\n**Choice D is correct.**\n\n**The Fast Way (30 seconds):** One real solution means discriminant $= 0$.\n$b^2 - 4ac = 0$ where $a = -2$, $c = -18$.\n$b^2 - 4(-2)(-18) = 0$\n$b^2 - 144 = 0$\n$b^2 = 144$\n$b = \\pm 12$\n\n**The Full Solution:**\nFor exactly one real solution, the discriminant must equal zero:\n$b^2 - 4ac = 0$\n$b^2 - 4(-2)(-18) = 0$\n$b^2 - 144 = 0$\n$b = \\pm 12$\n\nSince $12$ is among the choices, $b = 12$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($6$): $36 - 144 = -108 < 0$, which means no real solutions.\n• Choice B ($8$): $64 - 144 = -80 < 0$, no real solutions.\n• Choice C ($10$): $100 - 144 = -44 < 0$, no real solutions.\n\n**Test Day Takeaway:** One real solution means $b^2 - 4ac = 0$. Two real solutions: $b^2 - 4ac > 0$. No real solutions: $b^2 - 4ac < 0$.",
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
          question: "A parking garage charges $\\$4$ per hour. If a driver pays $\\$28$, how many hours did the driver park?",
          correctAnswer: "7",
          explanation: "**SAT Pattern: One-Step Division**\n\n**The correct answer is $7$.**\n\n**The Fast Way (10 seconds):** $28 \\div 4 = 7$ hours.\n\n**The Full Solution:**\nTotal cost $\\div$ cost per hour $= 28 \\div 4 = 7$ hours.\n\n**Common Mistakes to Avoid:**\n• Multiplying: $28 \\times 4 = 112$.\n\n**Verification:** $7 \\times 4 = 28$. ✓\n\n**Test Day Takeaway:** When given a total and a unit rate, divide to find the number of units.",
          skills: ["word-problems", "solving-equations"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "If $3n - 7 = 14$, what is the value of $n$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$7$" },
            { id: "D", text: "$9$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $3n = 21$, so $n = 7$.\n\n**The Full Solution:**\n$3n - 7 = 14$\n$3n = 14 + 7 = 21$\n$n = 21 \\div 3 = 7$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): $3(3) - 7 = 2$, not $14$.\n• Choice B ($5$): $3(5) - 7 = 8$, not $14$.\n• Choice D ($9$): $3(9) - 7 = 20$, not $14$. May come from adding $14 + 7 = 21$ then solving $21/3 = 7$ but picking $9$ by accident.\n\n**Test Day Takeaway:** Add or subtract the constant first, then divide by the coefficient.",
          skills: ["linear-equations", "solving-equations"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A financial adviser invested $\\$5{,}000$ for a client. The investment gained $6\\%$ in its first year. What was the value of the investment at the end of the first year?",
          choices: [
            { id: "A", text: "$\\$300$" },
            { id: "B", text: "$\\$5{,}006$" },
            { id: "C", text: "$\\$5{,}060$" },
            { id: "D", text: "$\\$5{,}300$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Percent Increase**\n\n**Choice D is correct.**\n\n**The Fast Way (15 seconds):** $6\\%$ of $5{,}000 = 0.06 \\times 5{,}000 = 300$. Total: $5{,}000 + 300 = 5{,}300$.\n\n**The Full Solution:**\n$5{,}000 \\times 1.06 = 5{,}300$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\$300$) is the gain, not the total value.\n• Choice B ($\\$5{,}006$) adds $6$ instead of $6\\%$.\n• Choice C ($\\$5{,}060$) uses $0.6\\%$ instead of $6\\%$ (decimal error: $0.006$ instead of $0.06$).\n\n**Test Day Takeaway:** To find the value after a percent increase, multiply by $(1 + \\text{rate})$ or add the percent of the original.",
          skills: ["percents", "word-problems"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which of the following is equivalent to $\\frac{6x^8}{2x^2}$?",
          choices: [
            { id: "A", text: "$3x^4$" },
            { id: "B", text: "$3x^6$" },
            { id: "C", text: "$4x^6$" },
            { id: "D", text: "$4x^4$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Exponent Rules — Division**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $\\frac{6}{2} = 3$ and $x^{8-2} = x^6$. Answer: $3x^6$.\n\n**The Full Solution:**\n$\\frac{6x^8}{2x^2} = \\frac{6}{2} \\cdot \\frac{x^8}{x^2} = 3 \\cdot x^{8-2} = 3x^6$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3x^4$): Divides the exponent ($8/2 = 4$) instead of subtracting.\n• Choice C ($4x^6$): Uses $6 - 2 = 4$ for the coefficient instead of $6/2 = 3$.\n• Choice D ($4x^4$): Makes both errors above.\n\n**Test Day Takeaway:** When dividing powers with the same base, subtract the exponents: $x^a / x^b = x^{a-b}$.",
          skills: ["exponent-rules", "algebraic-manipulation"]
        },
        {
          id: 5,
          type: "fill-in",
          difficulty: "easy",
          question: "A delivery truck travels $195$ miles in $3$ hours at a constant speed. What is the truck's speed, in miles per hour?",
          correctAnswer: "65",
          explanation: "**SAT Pattern: Finding Rate**\n\n**The correct answer is $65$.**\n\n**The Fast Way (10 seconds):** Speed $= 195 \\div 3 = 65$ mph.\n\n**The Full Solution:**\nSpeed $= \\frac{\\text{distance}}{\\text{time}} = \\frac{195}{3} = 65$ miles per hour.\n\n**Common Mistakes to Avoid:**\n• Multiplying: $195 \\times 3 = 585$.\n\n**Verification:** $65 \\times 3 = 195$ miles. ✓\n\n**Test Day Takeaway:** Rate $=$ distance $\\div$ time.",
          skills: ["word-problems", "unit-conversion"]
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A line passes through the origin and the point $(4, -6)$. Which equation represents this line?",
          choices: [
            { id: "A", text: "$y = -\\frac{3}{2}x$" },
            { id: "B", text: "$y = -\\frac{2}{3}x$" },
            { id: "C", text: "$y = \\frac{3}{2}x$" },
            { id: "D", text: "$y = \\frac{2}{3}x$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Line Through the Origin**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** Passes through origin so $y$-intercept $= 0$. Slope $= \\frac{-6 - 0}{4 - 0} = -\\frac{6}{4} = -\\frac{3}{2}$. Equation: $y = -\\frac{3}{2}x$.\n\n**The Full Solution:**\n$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{-6}{4} = -\\frac{3}{2}$\nSince the line passes through the origin, $b = 0$.\n$y = -\\frac{3}{2}x$\n\n**Why the wrong answers are tempting:**\n• Choice B ($-\\frac{2}{3}x$): Flips the fraction (run over rise).\n• Choice C ($\\frac{3}{2}x$): Drops the negative sign.\n• Choice D ($\\frac{2}{3}x$): Both errors combined.\n\n**Test Day Takeaway:** Slope $= \\frac{\\text{rise}}{\\text{run}}$. A line through the origin has equation $y = mx$ (no constant term).",
          skills: ["slope", "linear-functions"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A bank account has a balance of $\\$1{,}200$. Each month, $\\$150$ is deposited and $\\$80$ is withdrawn. Which expression represents the account balance after $m$ months?",
          choices: [
            { id: "A", text: "$1{,}200 + 230m$" },
            { id: "B", text: "$1{,}200 + 70m$" },
            { id: "C", text: "$1{,}200 - 70m$" },
            { id: "D", text: "$1{,}200 + 150m - 80$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Net Change Linear Model**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Net monthly change $= 150 - 80 = 70$. Balance $= 1{,}200 + 70m$.\n\n**The Full Solution:**\nEach month: deposit $\\$150$, withdraw $\\$80$.\nNet change per month $= 150 - 80 = +70$.\nAfter $m$ months: $1{,}200 + 70m$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($1{,}200 + 230m$): Adds deposit and withdrawal ($150 + 80 = 230$) instead of finding the net.\n• Choice C ($1{,}200 - 70m$): Uses the correct net amount but subtracts it (balance would decrease).\n• Choice D ($1{,}200 + 150m - 80$): Subtracts the withdrawal once instead of each month.\n\n**Test Day Takeaway:** When both deposits and withdrawals happen regularly, find the net change per period first.",
          skills: ["linear-functions", "word-problems"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "The function $g(x) = 3x^2 - 5x + 2$. What is the value of $g(3)$?",
          correctAnswer: "14",
          explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $14$.**\n\n**The Fast Way (20 seconds):** $g(3) = 3(9) - 5(3) + 2 = 27 - 15 + 2 = 14$.\n\n**The Full Solution:**\n$g(3) = 3(3)^2 - 5(3) + 2$\n$= 3(9) - 15 + 2$\n$= 27 - 15 + 2$\n$= 14$\n\n**Common Mistakes to Avoid:**\n• Computing $3(3)^2$ as $(3 \\cdot 3)^2 = 81$ instead of $3 \\cdot 9 = 27$.\n• Sign error: $27 - 15 + 2 \\neq 10$ (forgetting to add $2$).\n\n**Verification:** $27 - 15 = 12$, $12 + 2 = 14$. ✓\n\n**Test Day Takeaway:** Substitute carefully and follow order of operations: exponent first, then multiply, then add/subtract.",
          skills: ["function-evaluation", "quadratic-functions"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "An astronomer recorded the brightness of $5$ stars as $2.1, 3.4, 2.8, 4.2, 2.5$ (in magnitude units). What is the median brightness?",
          choices: [
            { id: "A", text: "$2.5$" },
            { id: "B", text: "$2.8$" },
            { id: "C", text: "$3.0$" },
            { id: "D", text: "$3.4$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Finding the Median**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Order the data: $2.1, 2.5, 2.8, 3.4, 4.2$. The middle value (3rd of 5) is $2.8$.\n\n**The Full Solution:**\nStep 1: Arrange in order: $2.1, 2.5, 2.8, 3.4, 4.2$\nStep 2: With $5$ values, the median is the $\\frac{5+1}{2} = 3\\text{rd}$ value.\nStep 3: The 3rd value is $2.8$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($2.5$): The 2nd value, not the middle.\n• Choice C ($3.0$): The mean ($15.0 \\div 5 = 3.0$), not the median.\n• Choice D ($3.4$): The 4th value.\n\n**Test Day Takeaway:** Always sort the data first. The median is the middle value for an odd count.",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $f(x) = 4x + 7$ and $f(a) = 23$, what is the value of $a$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Solving Through Function Notation**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $4a + 7 = 23$, so $4a = 16$ and $a = 4$.\n\n**The Full Solution:**\n$f(a) = 23$ means $4a + 7 = 23$.\n$4a = 23 - 7 = 16$\n$a = 4$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): $f(3) = 12 + 7 = 19 \\neq 23$.\n• Choice C ($5$): $f(5) = 20 + 7 = 27 \\neq 23$.\n• Choice D ($6$): $f(6) = 24 + 7 = 31 \\neq 23$.\n\n**Test Day Takeaway:** $f(a) = c$ means: substitute $a$ for $x$, set the expression equal to $c$, and solve.",
          skills: ["function-evaluation", "linear-functions"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Angles $A$ and $B$ are supplementary. If angle $A$ measures $47°$, what is the measure of angle $B$?",
          choices: [
            { id: "A", text: "$43°$" },
            { id: "B", text: "$47°$" },
            { id: "C", text: "$133°$" },
            { id: "D", text: "$143°$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Supplementary Angles**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** Supplementary means they add to $180°$. $B = 180 - 47 = 133°$.\n\n**The Full Solution:**\nSupplementary angles sum to $180°$.\n$A + B = 180°$\n$47 + B = 180$\n$B = 133°$\n\n**Why the wrong answers are tempting:**\n• Choice A ($43°$): Confuses supplementary ($180°$) with complementary ($90°$): $90 - 47 = 43$.\n• Choice B ($47°$): Assumes supplementary means equal.\n• Choice D ($143°$): Arithmetic error: $180 - 47 = 133$, not $143$.\n\n**Test Day Takeaway:** Supplementary $= 180°$. Complementary $= 90°$. Write both on your scratch paper.",
          skills: ["angles", "triangles"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A survey of $400$ commuters found that $45\\%$ use public transportation. The margin of error is $\\pm 4\\%$. Which of the following is a valid conclusion?",
          choices: [
            { id: "A", text: "Exactly $45\\%$ of all commuters use public transportation" },
            { id: "B", text: "Between $41\\%$ and $49\\%$ of the surveyed commuters use public transportation" },
            { id: "C", text: "The proportion of all commuters who use public transportation is plausibly between $0.41$ and $0.49$" },
            { id: "D", text: "At most $49\\%$ of all commuters use public transportation" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Interpreting Margin of Error**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** $45\\% \\pm 4\\%$ gives the interval $41\\%$ to $49\\%$. This is a confidence interval for the population proportion.\n\n**The Full Solution:**\nThe margin of error creates a confidence interval: $45\\% - 4\\% = 41\\%$ to $45\\% + 4\\% = 49\\%$.\nThis means we are confident the true population proportion lies between $0.41$ and $0.49$.\n\n**Why the wrong answers are tempting:**\n• Choice A: A sample gives an estimate, not an exact value for the population.\n• Choice B: The $45\\%$ is exact for the sample. The margin of error applies to the population estimate.\n• Choice D: The interval is two-sided; the true proportion could be above $49\\%$ (unlikely but possible).\n\n**Test Day Takeaway:** Margin of error gives an interval estimate for the population, not the sample.",
          skills: ["margin-of-error", "statistics"]
        },
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "The sum of $3$ consecutive integers is $72$. What is the largest of the three integers?",
          correctAnswer: "25",
          explanation: "**SAT Pattern: Consecutive Integers**\n\n**The correct answer is $25$.**\n\n**The Fast Way (15 seconds):** Middle integer $= 72 \\div 3 = 24$. The largest is $24 + 1 = 25$.\n\n**The Full Solution:**\nLet the integers be $n - 1$, $n$, $n + 1$.\n$(n - 1) + n + (n + 1) = 72$\n$3n = 72$\n$n = 24$\nLargest $= 24 + 1 = 25$.\n\n**Common Mistakes to Avoid:**\n• Reporting the middle value ($24$) instead of the largest ($25$).\n• Using $n, n+1, n+2$: gives $n = 23$, largest $= 25$. Same answer, just a different setup.\n\n**Verification:** $23 + 24 + 25 = 72$ ✓\n\n**Test Day Takeaway:** For $k$ consecutive integers summing to $S$, the middle value is $S/k$.",
          skills: ["solving-equations", "word-problems"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A scatterplot of data shows a strong negative linear association. Which correlation coefficient $r$ is most likely?",
          choices: [
            { id: "A", text: "$r = -0.92$" },
            { id: "B", text: "$r = -0.15$" },
            { id: "C", text: "$r = 0.08$" },
            { id: "D", text: "$r = 0.89$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Interpreting Correlation Coefficients**\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** Strong $=$ close to $\\pm 1$. Negative $=$ negative sign. Only $-0.92$ is both strong and negative.\n\n**The Full Solution:**\n• Strong: $|r|$ close to $1$. This rules out $-0.15$ and $0.08$.\n• Negative: $r < 0$. This rules out $0.89$.\n• $r = -0.92$ is the only choice that is both strong and negative.\n\n**Why the wrong answers are tempting:**\n• Choice B ($-0.15$): Negative but weak (close to $0$).\n• Choice C ($0.08$): Very weak, essentially no correlation.\n• Choice D ($0.89$): Strong but positive, not negative.\n\n**Test Day Takeaway:** The sign of $r$ tells direction; $|r|$ close to $1$ means strong.",
          skills: ["scatterplots", "statistics"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In the $xy$-plane, line $j$ has a slope of $4$ and passes through the point $(1, 3)$. Which equation defines line $j$?",
          choices: [
            { id: "A", text: "$y = 4x + 3$" },
            { id: "B", text: "$y = 4x - 1$" },
            { id: "C", text: "$y = 4x + 1$" },
            { id: "D", text: "$y = 3x + 4$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Equation of a Line from Slope and Point**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Using point-slope: $y - 3 = 4(x - 1)$, so $y = 4x - 4 + 3 = 4x - 1$.\n\n**The Full Solution:**\n$y - y_1 = m(x - x_1)$\n$y - 3 = 4(x - 1)$\n$y = 4x - 4 + 3$\n$y = 4x - 1$\n\n**Why the wrong answers are tempting:**\n• Choice A ($y = 4x + 3$): Uses $(1, 3)$ and puts $3$ as the $y$-intercept.\n• Choice C ($y = 4x + 1$): Adds $4$ and $-3$ incorrectly.\n• Choice D ($y = 3x + 4$): Swaps the slope and the $y$-coordinate.\n\n**Verification:** At $x = 1$: $y = 4(1) - 1 = 3$ ✓\n\n**Test Day Takeaway:** Use point-slope form $y - y_1 = m(x - x_1)$ and then simplify to slope-intercept form.",
          skills: ["linear-functions", "slope"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The quadratic equation $3x^2 - kx + 12 = 0$ has two equal real roots. What is the positive value of $k$?",
          choices: [
            { id: "A", text: "$6$" },
            { id: "B", text: "$12$" },
            { id: "C", text: "$6\\sqrt{2}$" },
            { id: "D", text: "$18$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Discriminant for Equal Roots**\n\n**Choice B is correct.**\n\n**The Fast Way (25 seconds):** Equal roots means discriminant $= 0$.\n$k^2 - 4(3)(12) = 0$\n$k^2 = 144$\n$k = 12$ (taking the positive value)\n\n**The Full Solution:**\nFor $ax^2 + bx + c = 0$ with $a = 3$, $b = -k$, $c = 12$:\nDiscriminant $= (-k)^2 - 4(3)(12) = k^2 - 144 = 0$\n$k^2 = 144$\n$k = \\pm 12$\nThe positive value is $k = 12$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($6$): From $\\sqrt{36}$ — perhaps computing $4 \\times 3 \\times 3$ instead of $4 \\times 3 \\times 12$.\n• Choice C ($6\\sqrt{2}$): A common error involving square root manipulation.\n• Choice D ($18$): From $\\sqrt{4 \\times 3 \\times 27}$ or a miscalculation.\n\n**Test Day Takeaway:** Two equal roots (one repeated root) means the discriminant $b^2 - 4ac = 0$.",
          skills: ["discriminant", "quadratic-equations"]
        },
        {
          id: 17,
          type: "fill-in",
          difficulty: "hard",
          question: "A rectangular box has length $10$ inches, width $6$ inches, and height $h$ inches. The volume of the box is $420$ cubic inches. What is the value of $h$?",
          correctAnswer: "7",
          explanation: "**SAT Pattern: Volume of a Rectangular Prism**\n\n**The correct answer is $7$.**\n\n**The Fast Way (15 seconds):** $V = lwh$, so $420 = 10 \\times 6 \\times h = 60h$. Then $h = 7$.\n\n**The Full Solution:**\n$V = l \\times w \\times h$\n$420 = 10 \\times 6 \\times h$\n$420 = 60h$\n$h = \\frac{420}{60} = 7$\n\n**Common Mistakes to Avoid:**\n• Using the wrong formula (e.g., surface area instead of volume).\n• Dividing by only one dimension: $420 \\div 10 = 42$ (not the height).\n\n**Verification:** $10 \\times 6 \\times 7 = 420$ ✓\n\n**Test Day Takeaway:** Volume of a box $= l \\times w \\times h$. Divide the volume by the product of the known dimensions.",
          skills: ["volume", "solving-equations"]
        },
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In the $xy$-plane, the graph of $y = (x - 3)(x + 5)$ crosses the $x$-axis at points $A$ and $B$. What is the length of $\\overline{AB}$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$15$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Distance Between x-Intercepts**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** The $x$-intercepts are where $y = 0$: $x = 3$ and $x = -5$. Distance $= 3 - (-5) = 8$.\n\n**The Full Solution:**\n$(x - 3)(x + 5) = 0$\n$x = 3$ or $x = -5$\nDistance $= |3 - (-5)| = |3 + 5| = 8$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): Difference of the constants $5 - 3 = 2$ without considering the signs.\n• Choice B ($5$): Just the absolute value of one intercept.\n• Choice D ($15$): Product of the constants $3 \\times 5 = 15$.\n\n**Test Day Takeaway:** The $x$-intercepts of $y = (x - a)(x - b)$ are at $x = a$ and $x = b$. The distance between them is $|a - b|$.",
          skills: ["quadratic-functions", "coordinate-geometry"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $\\sqrt{3x + 7} = 5$, what is the value of $3x + 7$?",
          choices: [
            { id: "A", text: "$5$" },
            { id: "B", text: "$10$" },
            { id: "C", text: "$25$" },
            { id: "D", text: "$32$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Squaring Both Sides**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** If $\\sqrt{\\text{something}} = 5$, then that something $= 25$.\n\n**The Full Solution:**\n$\\sqrt{3x + 7} = 5$\nSquare both sides: $3x + 7 = 25$.\n\nNote: The question asks for $3x + 7$, not $x$. So the answer is $25$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($5$): The value of $\\sqrt{3x+7}$, not $3x + 7$ itself.\n• Choice B ($10$): Doubling $5$ instead of squaring.\n• Choice D ($32$): From $5^2 + 7 = 32$, a misapplication of order of operations.\n\n**Verification:** $\\sqrt{25} = 5$ ✓\n\n**Test Day Takeaway:** If $\\sqrt{A} = B$, then $A = B^2$. Read the question carefully to see what is actually being asked for.",
          skills: ["radical-equations", "solving-equations"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A company's revenue $R$, in thousands of dollars, is modeled by $R(x) = -2x^2 + 40x - 150$, where $x$ is the price in dollars. What price maximizes revenue?",
          choices: [
            { id: "A", text: "$\\$5$" },
            { id: "B", text: "$\\$10$" },
            { id: "C", text: "$\\$15$" },
            { id: "D", text: "$\\$20$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Maximum of a Downward Parabola**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Maximum occurs at $x = -\\frac{b}{2a} = -\\frac{40}{2(-2)} = -\\frac{40}{-4} = 10$.\n\n**The Full Solution:**\nSince $a = -2 < 0$, the parabola opens downward, so the vertex is a maximum.\n$x = -\\frac{b}{2a} = -\\frac{40}{2(-2)} = \\frac{40}{4} = 10$\n\nThe price that maximizes revenue is $\\$10$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\$5$): $R(5) = -50 + 200 - 150 = 0$. Revenue is $0$.\n• Choice C ($\\$15$): $R(15) = -450 + 600 - 150 = 0$. Revenue is also $0$ here (this is the other $x$-intercept).\n• Choice D ($\\$20$): $R(20) = -800 + 800 - 150 = -150$. Revenue is negative.\n\n**Verification:** $R(10) = -200 + 400 - 150 = 50$ thousand dollars. ✓\n\n**Test Day Takeaway:** The vertex formula $x = -b/(2a)$ gives the max or min. Max when $a < 0$, min when $a > 0$.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "A circle has a circumference of $20\\pi$ inches. What is the area of the circle, in square inches? (Give your answer in terms of $\\pi$ as a number, e.g., if the area is $50\\pi$, enter $50$.)",
          correctAnswer: "100",
          explanation: "**SAT Pattern: Circle — Circumference to Area**\n\n**The correct answer is $100$ (the area is $100\\pi$).**\n\n**The Fast Way (20 seconds):** $C = 2\\pi r = 20\\pi$, so $r = 10$. Area $= \\pi r^2 = \\pi(100) = 100\\pi$.\n\n**The Full Solution:**\n$C = 2\\pi r$\n$20\\pi = 2\\pi r$\n$r = 10$\n\n$A = \\pi r^2 = \\pi (10)^2 = 100\\pi$\n\n**Common Mistakes to Avoid:**\n• Using diameter instead of radius: if $d = 20$, then $A = \\pi(20)^2 = 400\\pi$.\n• Forgetting to square: $A = \\pi(10) = 10\\pi$.\n\n**Verification:** $C = 2\\pi(10) = 20\\pi$ ✓. $A = \\pi(10)^2 = 100\\pi$ ✓.\n\n**Test Day Takeaway:** Find the radius from circumference ($r = C/(2\\pi)$), then use $A = \\pi r^2$.",
          skills: ["circles", "area"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $h$ is defined by $h(x) = 3(2)^x$. For what value of $x$ does $h(x) = 96$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Solving Exponential Equations**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** $3 \\cdot 2^x = 96$, so $2^x = 32 = 2^5$, meaning $x = 5$.\n\n**The Full Solution:**\n$h(x) = 96$\n$3(2)^x = 96$\n$2^x = 32$\n$2^x = 2^5$\n$x = 5$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): $h(3) = 3 \\cdot 8 = 24 \\neq 96$.\n• Choice B ($4$): $h(4) = 3 \\cdot 16 = 48 \\neq 96$.\n• Choice D ($6$): $h(6) = 3 \\cdot 64 = 192 \\neq 96$.\n\n**Test Day Takeaway:** Isolate the exponential term, then express both sides with the same base to solve for the exponent.",
          skills: ["exponential-functions", "exponent-rules"]
        }
      ]
    }
  ]
};

export default practiceTest4;
