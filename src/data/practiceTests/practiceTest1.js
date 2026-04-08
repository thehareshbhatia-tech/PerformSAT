// Practice Test 1 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty

export const practiceTest1 = {
  id: "practice-test-1",
  title: "Practice Test 1",
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
          question: "A survey asked $200$ students to name their favorite sport. The results are shown in the table below.\n\n| Sport | Number of Students |\n|---|---|\n| Soccer | $68$ |\n| Basketball | $52$ |\n| Tennis | $44$ |\n| Swimming | $36$ |\n\nAccording to the table, what percentage of the students surveyed chose basketball?",
          choices: [
            { id: "A", text: "$20\\%$" },
            { id: "B", text: "$26\\%$" },
            { id: "C", text: "$34\\%$" },
            { id: "D", text: "$52\\%$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Reading a Table and Calculating a Percentage**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Basketball $= 52$ out of $200$. $\\frac{52}{200} = 0.26 = 26\\%$.\n\n**The Full Solution:**\nPercentage $= \\frac{\\text{part}}{\\text{whole}} \\times 100 = \\frac{52}{200} \\times 100 = 26\\%$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($20\\%$): From $\\frac{40}{200}$, a misread of the table.\n• Choice C ($34\\%$): From $\\frac{68}{200}$, using soccer instead of basketball.\n• Choice D ($52\\%$): Using the count ($52$) as the percentage directly.\n\n**Test Day Takeaway:** Percentage = (part / total) times $100$. Always divide by the total, not a subcategory.",
          skills: ["percents", "statistics"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The equation $\\frac{2x}{5} = 18$ is true for what value of $x$?",
          choices: [
            { id: "A", text: "$7.2$" },
            { id: "B", text: "$36$" },
            { id: "C", text: "$45$" },
            { id: "D", text: "$90$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Solving an Equation with a Fraction**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Multiply both sides by $5$: $2x = 90$. Divide by $2$: $x = 45$.\n\n**The Full Solution:**\n$\\frac{2x}{5} = 18$\n$2x = 18 \\times 5 = 90$\n$x = \\frac{90}{2} = 45$\n\n**Why the wrong answers are tempting:**\n• Choice A ($7.2$): From dividing $18 \\div 2.5$ or $18 \\div 5 \\times 2$.\n• Choice B ($36$): From $18 \\times 2 = 36$, forgetting to multiply by $5$.\n• Choice D ($90$): From $18 \\times 5 = 90$, forgetting to divide by $2$.\n\n**Test Day Takeaway:** Clear the fraction by multiplying both sides by the denominator, then solve the remaining equation.",
          skills: ["solving-equations"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A biologist counts bacteria in a lab sample every hour. The table below shows the results.\n\n| Time (hours) | $0$ | $1$ | $2$ | $3$ | $4$ |\n|---|---|---|---|---|---|\n| Count | $50$ | $100$ | $200$ | $400$ | $800$ |\n\nWhich type of function best models the relationship between time and bacteria count?",
          choices: [
            { id: "A", text: "Linear, because the count increases by a constant amount" },
            { id: "B", text: "Exponential, because the count doubles each hour" },
            { id: "C", text: "Quadratic, because the count increases faster over time" },
            { id: "D", text: "Linear, because the count always increases" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Identifying Growth Type from a Table**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Check the ratios: $100/50 = 2$, $200/100 = 2$, $400/200 = 2$, $800/400 = 2$. Constant ratio = exponential.\n\n**The Full Solution:**\nThe count doubles each hour (multiplied by $2$). A constant multiplicative factor indicates exponential growth.\nDifferences: $50, 100, 200, 400$ — not constant, so not linear.\nRatios: $2, 2, 2, 2$ — constant, so exponential.\n\n**Why the wrong answers are tempting:**\n• Choice A: The differences are NOT constant ($50, 100, 200, 400$), so it is not linear.\n• Choice C: Quadratic growth has constant second differences, not a constant ratio.\n• Choice D: \"Always increases\" does not determine the type — linear, exponential, and quadratic can all increase.\n\n**Test Day Takeaway:** Constant differences = linear. Constant ratios = exponential. Check both to decide.",
          skills: ["exponential-functions", "function-interpretation"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A teacher has $5$ more than $3$ times the number of pens a student has. If the teacher has $23$ pens, which equation can be used to find $p$, the number of pens the student has?",
          choices: [
            { id: "A", text: "$3p + 5 = 23$" },
            { id: "B", text: "$5p + 3 = 23$" },
            { id: "C", text: "$3(p + 5) = 23$" },
            { id: "D", text: "$3p - 5 = 23$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Translating Words into an Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** \"$3$ times the number\" $= 3p$. \"$5$ more than that\" $= 3p + 5$. Set equal to $23$.\n\n**The Full Solution:**\n\"$5$ more than $3$ times $p$\" translates to $3p + 5$.\n$3p + 5 = 23$\n\n**Why the wrong answers are tempting:**\n• Choice B ($5p + 3 = 23$): Swaps the $3$ and $5$.\n• Choice C ($3(p + 5) = 23$): Adds $5$ to $p$ before multiplying, which changes the meaning.\n• Choice D ($3p - 5 = 23$): Uses \"less\" instead of \"more.\"\n\n**Test Day Takeaway:** Read word problems carefully. \"$a$ more than $b$ times $x$\" translates to $bx + a$.",
          skills: ["word-problems", "solving-equations"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The function $f(t) = 200 + 15t$ models the amount of water, in gallons, in a tank $t$ minutes after a pump is turned on. What does the number $15$ represent in this function?",
          choices: [
            { id: "A", text: "The total capacity of the tank" },
            { id: "B", text: "The amount of water in the tank when the pump starts" },
            { id: "C", text: "The number of gallons added per minute" },
            { id: "D", text: "The number of minutes the pump runs" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Interpreting Slope in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** In $f(t) = 200 + 15t$, the coefficient of $t$ is the rate of change: $15$ gallons per minute.\n\n**The Full Solution:**\nIn a linear function $f(t) = b + mt$, the slope $m$ is the rate of change. Here $m = 15$, which means $15$ gallons are added to the tank per minute. The $200$ is the starting amount ($y$-intercept).\n\n**Why the wrong answers are tempting:**\n• Choice A: Total capacity is not represented by the slope.\n• Choice B: The starting amount is $200$, not $15$.\n• Choice D: The number of minutes is the input variable $t$, not a constant.\n\n**Test Day Takeaway:** In a linear model $y = b + mx$, the slope $m$ always represents the rate of change per unit of the input variable.",
          skills: ["linear-functions", "function-interpretation"]
        },
        {
          id: 6,
          type: "fill-in",
          difficulty: "medium",
          question: "A school orders $8$ identical microscopes using a $\\$50$ coupon. After applying the coupon, the school pays $\\$350$ total. What was the original price, in dollars, of each microscope?",
          correctAnswer: "50",
          explanation: "**SAT Pattern: Two-Step Word Problem**\n\n**The correct answer is $50$.**\n\n**The Fast Way (15 seconds):** Total before coupon $= 350 + 50 = 400$. Price per microscope $= 400 \\div 8 = 50$.\n\n**The Full Solution:**\nLet $p$ be the price per microscope.\n$8p - 50 = 350$\n$8p = 400$\n$p = 50$\n\n**Common Mistakes to Avoid:**\n• Forgetting to add back the coupon: $350 \\div 8 = 43.75$.\n• Subtracting the coupon instead of adding: $(350 - 50) \\div 8 = 37.5$.\n\n**Verification:** $8 \\times 50 - 50 = 400 - 50 = 350$ ✓\n\n**Test Day Takeaway:** When a coupon is applied, add it back to the paid amount to find the original total, then divide.",
          skills: ["word-problems", "solving-equations"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The equation $k^2 - 25 = 56$ is true. What is the positive value of $k$?",
          choices: [
            { id: "A", text: "$7$" },
            { id: "B", text: "$9$" },
            { id: "C", text: "$31$" },
            { id: "D", text: "$81$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Solving for a Squared Variable**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $k^2 = 56 + 25 = 81$. $k = \\sqrt{81} = 9$.\n\n**The Full Solution:**\n$k^2 - 25 = 56$\n$k^2 = 81$\n$k = \\pm 9$\nThe positive value is $9$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($7$): From mistakenly computing $\\sqrt{49}$.\n• Choice C ($31$): From adding $25 + 56 = 81$ but forgetting to take the square root.\n• Choice D ($81$): From $k^2 = 81$ but reporting $k^2$ instead of $k$.\n\n**Test Day Takeaway:** Isolate $k^2$ first, then take the square root. Remember to check if the question asks for the positive root only.",
          skills: ["solving-equations", "quadratic-equations"]
        },
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Line $\\ell$ passes through the points $(-1, 3)$ and $(3, 11)$. Which of the following is an equation of line $\\ell$?",
          choices: [
            { id: "A", text: "$y = 2x + 5$" },
            { id: "B", text: "$y = 2x + 3$" },
            { id: "C", text: "$y = 4x + 7$" },
            { id: "D", text: "$y = \\frac{1}{2}x + 5$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Finding the Equation of a Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (25 seconds):** Slope $= \\frac{11 - 3}{3 - (-1)} = \\frac{8}{4} = 2$. Use point $(-1, 3)$: $3 = 2(-1) + b$, so $b = 5$. Equation: $y = 2x + 5$.\n\n**The Full Solution:**\n$m = \\frac{11 - 3}{3 - (-1)} = \\frac{8}{4} = 2$\nUsing point-slope with $(-1, 3)$:\n$y - 3 = 2(x + 1)$\n$y = 2x + 2 + 3 = 2x + 5$\n\n**Why the wrong answers are tempting:**\n• Choice B ($y = 2x + 3$): Correct slope but uses the $y$-coordinate of the first point as the intercept.\n• Choice C ($y = 4x + 7$): Doubles the slope.\n• Choice D ($y = \\frac{1}{2}x + 5$): Uses the reciprocal of the slope (run/rise).\n\n**Test Day Takeaway:** Find slope first (rise/run), then plug one point into $y = mx + b$ to find $b$.",
          skills: ["slope", "linear-functions"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table below shows values of a function $f$.\n\n| $x$ | $0$ | $2$ | $4$ | $6$ |\n|---|---|---|---|---|\n| $f(x)$ | $-3$ | $1$ | $5$ | $9$ |\n\nWhich of the following defines $f(x)$?",
          choices: [
            { id: "A", text: "$f(x) = x - 3$" },
            { id: "B", text: "$f(x) = 2x - 3$" },
            { id: "C", text: "$f(x) = x + 1$" },
            { id: "D", text: "$f(x) = \\frac{1}{2}x - 3$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Finding a Linear Equation from a Table**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** From $x = 0$, $f(0) = -3$, so the $y$-intercept is $-3$. Slope $= \\frac{1 - (-3)}{2 - 0} = \\frac{4}{2} = 2$. So $f(x) = 2x - 3$.\n\n**The Full Solution:**\nThe $y$-intercept is the value when $x = 0$: $f(0) = -3$, so $b = -3$.\nSlope: $\\frac{f(2) - f(0)}{2 - 0} = \\frac{1 - (-3)}{2} = \\frac{4}{2} = 2$.\n$f(x) = 2x - 3$.\n\nVerify: $f(4) = 2(4) - 3 = 5$ ✓ and $f(6) = 2(6) - 3 = 9$ ✓\n\n**Why the wrong answers are tempting:**\n• Choice A ($x - 3$): Correct intercept but slope of $1$ instead of $2$. $f(2) = -1 \\neq 1$.\n• Choice C ($x + 1$): $f(0) = 1 \\neq -3$.\n• Choice D ($\\frac{1}{2}x - 3$): Uses the reciprocal slope. $f(2) = -2 \\neq 1$.\n\n**Test Day Takeaway:** Use the table to find slope (change in $f$ / change in $x$) and $y$-intercept ($f(0)$). Then verify with another point.",
          skills: ["linear-functions", "function-interpretation"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table below shows data from a survey of $250$ students.\n\n| | Prefers In-Person | Prefers Online | Total |\n|---|---|---|---|\n| Grade $10$ | $50$ | $40$ | $90$ |\n| Grade $11$ | $65$ | $35$ | $100$ |\n| Grade $12$ | $45$ | $15$ | $60$ |\n| Total | $160$ | $90$ | $250$ |\n\nOf the students who prefer online classes, what fraction are in Grade $10$?",
          choices: [
            { id: "A", text: "$\\frac{40}{250}$" },
            { id: "B", text: "$\\frac{40}{90}$" },
            { id: "C", text: "$\\frac{90}{250}$" },
            { id: "D", text: "$\\frac{40}{100}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Conditional Probability from a Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** \"Of the students who prefer online\" = denominator is $90$ (online total). Grade $10$ online $= 40$. Fraction $= \\frac{40}{90}$.\n\n**The Full Solution:**\nThe condition restricts us to online-preferring students only (total $= 90$).\nOf those, $40$ are in Grade $10$.\nFraction $= \\frac{40}{90} = \\frac{4}{9}$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{40}{250}$): Uses the grand total as the denominator instead of just online students.\n• Choice C ($\\frac{90}{250}$): Finds the overall fraction who prefer online, ignoring the grade condition.\n• Choice D ($\\frac{40}{100}$): Uses the Grade $11$ total as the denominator (wrong row).\n\n**Test Day Takeaway:** In conditional probability, the group described after \"of\" or \"given\" determines the denominator.",
          skills: ["two-way-tables", "probability"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "If $3x + 7 = 28$, what is the value of $6x + 14$?",
          correctAnswer: "56",
          explanation: "**SAT Pattern: Algebraic Manipulation Shortcut**\n\n**The correct answer is 56.**\n\n**The Fast Way (10 seconds):** $6x + 14 = 2(3x + 7) = 2(28) = 56$.\n\n**The Full Solution:**\nNotice that $6x + 14 = 2(3x + 7)$.\nSince $3x + 7 = 28$:\n$6x + 14 = 2(28) = 56$\n\n**Common Mistakes to Avoid:**\n• Solving for $x$ first (unnecessary extra work): $3x = 21$, $x = 7$, then $6(7) + 14 = 56$. Correct but slower.\n• Not recognizing the factor-of-$2$ relationship.\n\n**Verification:** $x = 7$: $6(7) + 14 = 42 + 14 = 56$ ✓\n\n**Test Day Takeaway:** Before solving for a variable, check if the expression you need is a multiple of what you already have.",
          skills: ["algebraic-manipulation", "solving-equations"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A population of $400$ bacteria increases by $25\\%$ every hour. Which expression gives the population after $t$ hours?",
          choices: [
            { id: "A", text: "$400(0.25)^t$" },
            { id: "B", text: "$400 + 25t$" },
            { id: "C", text: "$400(1.25)^t$" },
            { id: "D", text: "$400(0.75)^t$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Increasing by $25\\%$ means multiplying by $1.25$ each hour. Starting value $400$: $400(1.25)^t$.\n\n**The Full Solution:**\nGrowth rate $= 25\\% = 0.25$.\nGrowth factor $= 1 + 0.25 = 1.25$.\nAfter $t$ hours: $400(1.25)^t$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($400(0.25)^t$): Uses $0.25$ (the rate) as the base. This shrinks rapidly toward $0$.\n• Choice B ($400 + 25t$): Models linear growth (adding $25$ per hour), not percentage growth.\n• Choice D ($400(0.75)^t$): Models a $25\\%$ decrease each hour, not an increase.\n\n**Test Day Takeaway:** Growth by $r\\%$ means multiply by $(1 + r/100)$ each period. Decay by $r\\%$ means multiply by $(1 - r/100)$.",
          skills: ["exponential-functions", "word-problems"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Two parallel lines are cut by a transversal. One of the angles formed measures $65°$. Which of the following could NOT be the measure of another angle formed?",
          choices: [
            { id: "A", text: "$65°$" },
            { id: "B", text: "$115°$" },
            { id: "C", text: "$125°$" },
            { id: "D", text: "$180° - 65°$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Parallel Lines and Transversals**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** When parallel lines are cut by a transversal, all angles are either $65°$ or $180° - 65° = 115°$. $125°$ is neither.\n\n**The Full Solution:**\nParallel lines cut by a transversal create only two distinct angle measures that are supplementary: $65°$ and $115°$.\n• Choice A: $65°$ (corresponding or alternate interior angle) ✓\n• Choice B: $115°$ (supplementary angle) ✓\n• Choice C: $125°$ is not $65°$ or $115°$ ✗\n• Choice D: $180° - 65° = 115°$ ✓\n\n**Why the wrong answers are tempting:**\n• Choice C ($125°$) looks close to $115°$ and could be confused with a supplementary calculation.\n\n**Test Day Takeaway:** Parallel lines + transversal = only two angle measures that add to $180°$.",
          skills: ["angles", "parallel-lines"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A data set has $7$ values with a mean of $12$. An $8$th value of $20$ is added to the set. What is the mean of the new data set?",
          choices: [
            { id: "A", text: "$12.5$" },
            { id: "B", text: "$13$" },
            { id: "C", text: "$14$" },
            { id: "D", text: "$16$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Recalculating the Mean After Adding a Value**\n\n**Choice B is correct.**\n\n**The Fast Way (25 seconds):** Original sum $= 7 \\times 12 = 84$. New sum $= 84 + 20 = 104$. New mean $= \\frac{104}{8} = 13$.\n\n**The Full Solution:**\nMean $= \\frac{\\text{sum}}{\\text{count}}$, so original sum $= 7 \\times 12 = 84$.\nAfter adding $20$: new sum $= 84 + 20 = 104$, new count $= 8$.\nNew mean $= \\frac{104}{8} = 13$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($12.5$): From averaging $12$ and $13$, or from $\\frac{12 + 20}{2.5}$.\n• Choice C ($14$): From computing $(12 + 20) \\div 2 = 16$... no. Possibly from $\\frac{84 + 28}{8}$.\n• Choice D ($16$): From averaging $12$ and $20$ directly: $\\frac{12+20}{2} = 16$, ignoring the other $6$ values.\n\n**Test Day Takeaway:** To find a new mean: compute the original sum (old mean $\\times$ count), add the new value, then divide by the new count.",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A company ships boxes that weigh between $10$ and $50$ pounds. The shipping cost $C$, in dollars, is modeled by $C = 3.50 + 0.75w$, where $w$ is the weight in pounds. For a shipment, the total cost was between $\\$14.00$ and $\\$30.50$. Which inequality represents the possible weights $w$?",
          choices: [
            { id: "A", text: "$10 \\leq w \\leq 50$" },
            { id: "B", text: "$14 \\leq w \\leq 36$" },
            { id: "C", text: "$14.75 \\leq w \\leq 34.25$" },
            { id: "D", text: "$10.50 \\leq w \\leq 27$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Solving a Compound Inequality in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Solve $14 = 3.50 + 0.75w$: $0.75w = 10.50$, $w = 14$. Solve $30.50 = 3.50 + 0.75w$: $0.75w = 27$, $w = 36$.\n\n**The Full Solution:**\n$14.00 \\leq 3.50 + 0.75w \\leq 30.50$\n$14.00 - 3.50 \\leq 0.75w \\leq 30.50 - 3.50$\n$10.50 \\leq 0.75w \\leq 27.00$\n$\\frac{10.50}{0.75} \\leq w \\leq \\frac{27.00}{0.75}$\n$14 \\leq w \\leq 36$\n\n**Why the wrong answers are tempting:**\n• Choice A ($10 \\leq w \\leq 50$): This is the weight range, not derived from the cost constraint.\n• Choice C ($14.75 \\leq w \\leq 34.25$): Arithmetic error in subtraction or division.\n• Choice D ($10.50 \\leq w \\leq 27$): Subtracted $3.50$ but forgot to divide by $0.75$.\n\n**Test Day Takeaway:** Solve compound inequalities by performing the same operations on all three parts. Subtract constants, then divide by the coefficient.",
          skills: ["linear-equations", "word-problems"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation $y = 2x^2 - 12x + 22$ can be rewritten in the form $y = a(x - h)^2 + k$. What is the value of $k$?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$-4$" },
            { id: "C", text: "$22$" },
            { id: "D", text: "$18$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Converting to Vertex Form**\n\n**Choice A is correct.**\n\n**The Fast Way (45 seconds):** Factor out $2$: $y = 2(x^2 - 6x) + 22$. Complete the square: $y = 2(x^2 - 6x + 9 - 9) + 22 = 2(x-3)^2 - 18 + 22 = 2(x-3)^2 + 4$. So $k = 4$.\n\n**The Full Solution:**\n$y = 2x^2 - 12x + 22$\n$y = 2(x^2 - 6x) + 22$\n$y = 2(x^2 - 6x + 9 - 9) + 22$\n$y = 2(x - 3)^2 - 18 + 22$\n$y = 2(x - 3)^2 + 4$\n\nSo $k = 4$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($-4$): Sign error on the last step.\n• Choice C ($22$): Using the original constant term without completing the square.\n• Choice D ($18$): Using $2 \\times 9 = 18$ but forgetting to subtract and add back.\n\n**Test Day Takeaway:** To find the vertex, complete the square. Remember to multiply the adjustment by the leading coefficient when adding it back.",
          skills: ["vertex-form", "quadratic-functions"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A ball is kicked into the air. Its height, in feet, after $t$ seconds is modeled by $h(t) = -16t^2 + 48t$. What is the maximum height the ball reaches?",
          choices: [
            { id: "A", text: "$36$ feet" },
            { id: "B", text: "$48$ feet" },
            { id: "C", text: "$64$ feet" },
            { id: "D", text: "$32$ feet" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Maximum of a Quadratic Function**\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** The vertex is at $t = \\frac{-b}{2a} = \\frac{-48}{2(-16)} = \\frac{-48}{-32} = 1.5$. Then $h(1.5) = -16(2.25) + 48(1.5) = -36 + 72 = 36$.\n\n**The Full Solution:**\n$h(t) = -16t^2 + 48t$\nVertex at $t = \\frac{-48}{2(-16)} = 1.5$\n$h(1.5) = -16(1.5)^2 + 48(1.5) = -16(2.25) + 72 = -36 + 72 = 36$\n\n**Why the wrong answers are tempting:**\n• Choice B ($48$): Using the coefficient of $t$ as the max height.\n• Choice C ($64$): From $-16 \\times 4 + 48 \\times 4$, evaluating at $t = 4$ instead of $t = 1.5$. Actually gives $64$... wait, $h(4)= -256+192 = -64$. Likely from a calculation error.\n• Choice D ($32$): From evaluating at $t = 1$: $-16 + 48 = 32$, close but not the maximum.\n\n**Test Day Takeaway:** Maximum height = plug $t = \\frac{-b}{2a}$ back into the function.",
          skills: ["quadratic-functions", "function-evaluation"]
        },
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $g$ is defined by $g(x) = (x-4)(x+6)$. The graph of $y = g(x)$ in the $xy$-plane has $x$-intercepts at $(a, 0)$ and $(b, 0)$, where $a < b$. What is the value of $b - a$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$8$" },
            { id: "C", text: "$10$" },
            { id: "D", text: "$24$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Distance Between x-intercepts**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** The $x$-intercepts are $x = 4$ and $x = -6$. Distance $= 4 - (-6) = 10$.\n\n**The Full Solution:**\nSet $g(x) = 0$: $(x-4)(x+6) = 0$\n$x = 4$ or $x = -6$\nSince $a < b$: $a = -6$ and $b = 4$\n$b - a = 4 - (-6) = 10$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): From $4 + (-6) = -2$, taking absolute value.\n• Choice B ($8$): From subtracting without the double negative: $4 - 6 = -2$... no. Possibly from a sign confusion.\n• Choice D ($24$): From multiplying $4 \\times 6$.\n\n**Test Day Takeaway:** The $x$-intercepts of $(x - r)(x - s)$ are $r$ and $s$. Watch the signs carefully.",
          skills: ["quadratic-equations", "factoring"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A right triangle has legs of length $5$ and $12$. What is the area of a square whose side length equals the hypotenuse of the triangle?",
          choices: [
            { id: "A", text: "$144$" },
            { id: "B", text: "$169$" },
            { id: "C", text: "$60$" },
            { id: "D", text: "$289$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Pythagorean Theorem + Area**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Hypotenuse $= \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$. Area of square $= 13^2 = 169$.\n\n**The Full Solution:**\nBy the Pythagorean theorem: $c = \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$.\nArea of square $= c^2 = 13^2 = 169$.\n\nAlternatively, the area of the square equals $c^2 = 5^2 + 12^2 = 169$ directly, without finding $c$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($144$): Using only $12^2$.\n• Choice C ($60$): Computing the area of the triangle: $\\frac{1}{2}(5)(12) = 30$... actually $60$ would be $2 \\times 30$, a common error.\n• Choice D ($289$): From $(5+12)^2 = 17^2 = 289$, adding legs instead of using Pythagorean theorem.\n\n**Test Day Takeaway:** Know $5$-$12$-$13$ as a Pythagorean triple. Also, the area of a square with side = hypotenuse is just $a^2 + b^2$.",
          skills: ["triangles", "area"]
        },
        {
          id: 20,
          type: "fill-in",
          difficulty: "hard",
          question: "If $3(x - 4) + 2 = 20$, what is the value of $x$?",
          correctAnswer: "10",
          explanation: "**SAT Pattern: Multi-Step Equation with Distribution**\n\n**The correct answer is 10.**\n\n**The Fast Way (20 seconds):** $3(x-4) + 2 = 20$. $3(x-4) = 18$. $x - 4 = 6$. $x = 10$.\n\n**The Full Solution:**\n$3(x - 4) + 2 = 20$\n$3x - 12 + 2 = 20$\n$3x - 10 = 20$\n$3x = 30$\n$x = 10$\n\n**Common Mistakes to Avoid:**\n• Distributing incorrectly: $3(x-4) = 3x - 4$ instead of $3x - 12$\n• Combining $-12 + 2 = -14$ instead of $-10$\n\n**Verification:** $3(10-4) + 2 = 3(6) + 2 = 18 + 2 = 20$ ✓\n\n**Test Day Takeaway:** Distribute first, combine like terms, then isolate the variable.",
          skills: ["solving-equations", "algebraic-manipulation"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A circle in the $xy$-plane has center $(3, -2)$ and radius $5$. Which of the following is an equation of the circle?",
          choices: [
            { id: "A", text: "$(x+3)^2 + (y-2)^2 = 25$" },
            { id: "B", text: "$(x-3)^2 + (y+2)^2 = 25$" },
            { id: "C", text: "$(x-3)^2 + (y+2)^2 = 5$" },
            { id: "D", text: "$(x+3)^2 + (y-2)^2 = 5$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Equation of a Circle**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Standard form: $(x-h)^2 + (y-k)^2 = r^2$. Center $(3,-2)$: $h=3, k=-2$. Radius $5$: $r^2 = 25$.\n$(x-3)^2 + (y-(-2))^2 = 25$ → $(x-3)^2 + (y+2)^2 = 25$.\n\n**The Full Solution:**\nThe standard equation of a circle with center $(h,k)$ and radius $r$ is $(x-h)^2 + (y-k)^2 = r^2$.\nPlugging in: $(x-3)^2 + (y+2)^2 = 25$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Flips the signs on both $h$ and $k$.\n• Choice C: Uses $r = 5$ instead of $r^2 = 25$.\n• Choice D: Both errors combined.\n\n**Test Day Takeaway:** Circle formula uses subtraction: $(x - h)$. If center has a negative coordinate, you get a plus sign. Radius is squared.",
          skills: ["circle-equations", "coordinate-geometry"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The quadratic equation $x^2 - 10x + c = 0$ has exactly one real solution. What is the value of $c$?",
          choices: [
            { id: "A", text: "$10$" },
            { id: "B", text: "$20$" },
            { id: "C", text: "$25$" },
            { id: "D", text: "$100$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Discriminant Equals Zero**\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** One real solution means discriminant $= 0$: $b^2 - 4ac = 0$. Here $a=1, b=-10$: $100 - 4c = 0$, so $c = 25$.\n\n**The Full Solution:**\nFor exactly one solution, the discriminant must equal zero:\n$b^2 - 4ac = 0$\n$(-10)^2 - 4(1)(c) = 0$\n$100 - 4c = 0$\n$4c = 100$\n$c = 25$\n\n**Why the wrong answers are tempting:**\n• Choice A ($10$): Half of $b$ value, a common guess.\n• Choice B ($20$): From $100 \\div 5$ instead of $100 \\div 4$.\n• Choice D ($100$): Using $b^2$ without dividing by $4a$.\n\n**Test Day Takeaway:** Exactly one solution = discriminant is zero. The formula $b^2 - 4ac = 0$ directly gives you the missing value.",
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
          type: "multiple-choice",
          difficulty: "easy",
          question: "A road trip covers $210$ miles in $3$ hours. What is the average speed in miles per hour?",
          choices: [
            { id: "A", text: "$60$" },
            { id: "B", text: "$65$" },
            { id: "C", text: "$70$" },
            { id: "D", text: "$75$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Average Speed**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $210 \\div 3 = 70$ mph.\n\n**The Full Solution:**\nAverage speed $= \\frac{\\text{distance}}{\\text{time}} = \\frac{210}{3} = 70$ mph.\n\n**Why the wrong answers are tempting:**\n• Choice A ($60$): A common driving speed, but not what the math gives.\n• Choice B ($65$): Halfway between $60$ and $70$, a guess.\n• Choice D ($75$): From a division error.\n\n**Test Day Takeaway:** Speed = distance divided by time.",
          skills: ["word-problems", "unit-conversion"]
        },
        {
          id: 2,
          type: "fill-in",
          difficulty: "easy",
          question: "If $4x = 36$, what is the value of $x$?",
          correctAnswer: "9",
          explanation: "**SAT Pattern: One-Step Equation**\n\n**The correct answer is 9.**\n\n**The Fast Way (5 seconds):** $x = 36 \\div 4 = 9$.\n\n**The Full Solution:**\n$4x = 36$\n$x = \\frac{36}{4} = 9$\n\n**Common Mistakes to Avoid:**\n• Subtracting $4$ instead of dividing: $36 - 4 = 32$\n• Multiplying instead: $36 \\times 4 = 144$\n\n**Verification:** $4(9) = 36$ ✓\n\n**Test Day Takeaway:** To undo multiplication, divide both sides.",
          skills: ["solving-equations"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A hiker walks $3$ miles per hour. The function $d(t) = 3t$ gives the distance walked after $t$ hours. What is the best interpretation of the number $3$ in this function?",
          choices: [
            { id: "A", text: "The total distance in miles" },
            { id: "B", text: "The number of hours hiked" },
            { id: "C", text: "The speed in miles per hour" },
            { id: "D", text: "The number of rest stops" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Interpreting Linear Function Coefficients**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** In $d(t) = 3t$, the coefficient $3$ is the rate of change — miles per hour.\n\n**The Full Solution:**\nIn a linear function $f(t) = mt + b$, the coefficient $m$ represents the rate of change. Here $m = 3$ means the hiker covers $3$ miles each hour.\n\n**Why the wrong answers are tempting:**\n• Choice A: Total distance depends on time, not a fixed number.\n• Choice B: The number of hours is $t$, the input variable.\n• Choice D: Nothing in the function relates to rest stops.\n\n**Test Day Takeaway:** In a linear function, the slope is always the rate of change per unit of the input.",
          skills: ["function-interpretation", "linear-functions"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "How many minutes are equivalent to $3$ hours and $15$ minutes?",
          choices: [
            { id: "A", text: "$180$" },
            { id: "B", text: "$195$" },
            { id: "C", text: "$200$" },
            { id: "D", text: "$315$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $3 \\times 60 + 15 = 180 + 15 = 195$.\n\n**The Full Solution:**\n$3$ hours $= 3 \\times 60 = 180$ minutes\n$180 + 15 = 195$ minutes\n\n**Why the wrong answers are tempting:**\n• Choice A ($180$): Forgot to add the extra $15$ minutes.\n• Choice C ($200$): Rounded $195$ up.\n• Choice D ($315$): Wrote $3$ and $15$ together instead of converting.\n\n**Test Day Takeaway:** Convert hours to minutes by multiplying by $60$, then add remaining minutes.",
          skills: ["unit-conversion"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The equation $5x + 3 = 23$ is true for what value of $x$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $5x = 20$, so $x = 4$.\n\n**The Full Solution:**\n$5x + 3 = 23$\n$5x = 20$\n$x = 4$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): From $23 \\div 5 \\approx 4.6$, rounding down, or guessing.\n• Choice C ($5$): From dividing $25 \\div 5$, not subtracting $3$ first.\n• Choice D ($6$): From $23 - 3 = 20$, then incorrectly dividing $20 \\div 3$.\n\n**Test Day Takeaway:** Subtract first, then divide.",
          skills: ["solving-equations", "linear-equations"]
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The system of equations below has solution $(x, y)$. What is the value of $x$?",
          questionFormula: {
            equation: "$$\\begin{cases} 2x + y = 11 \\\\ x - y = 1 \\end{cases}$$"
          },
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$7$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Solving a System by Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Add the equations: $2x + y + x - y = 11 + 1$ → $3x = 12$ → $x = 4$.\n\n**The Full Solution:**\n$2x + y = 11$\n$x - y = 1$\nAdding: $3x = 12$, so $x = 4$.\nCheck: $y = 11 - 2(4) = 3$. Then $4 - 3 = 1$ ✓\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): This is the $y$-value, not $x$.\n• Choice C ($5$): From adding $11 + 1 = 12$ and dividing by $2$ instead of $3$.\n• Choice D ($7$): From $11 - 1 = 10$... no clear path, likely a guess.\n\n**Test Day Takeaway:** When $y$ terms have opposite signs, add the equations to eliminate $y$.",
          skills: ["systems-of-equations"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A store sells trail mix for $\\$6$ per pound and dried fruit for $\\$9$ per pound. A customer buys a total of $5$ pounds and spends $\\$36$. How many pounds of trail mix did the customer buy?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$5$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: System of Equations from a Word Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Let $t$ = trail mix pounds. Then dried fruit $= 5 - t$. Cost: $6t + 9(5-t) = 36$. $6t + 45 - 9t = 36$. $-3t = -9$. $t = 3$.\n\n**The Full Solution:**\n$t + d = 5$ and $6t + 9d = 36$\nSubstitute $d = 5 - t$:\n$6t + 9(5-t) = 36$\n$6t + 45 - 9t = 36$\n$-3t = -9$\n$t = 3$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): Check: $6(2) + 9(3) = 12 + 27 = 39 \\neq 36$.\n• Choice C ($4$): Check: $6(4) + 9(1) = 24 + 9 = 33 \\neq 36$.\n• Choice D ($5$): All trail mix: $6(5) = 30 \\neq 36$.\n\n**Test Day Takeaway:** For mixture problems, set up two equations (total quantity and total cost) and use substitution.",
          skills: ["systems-of-equations", "word-problems"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "If $f(x) = 2x^2 - 3x + 1$, what is the value of $f(3)$?",
          correctAnswer: "10",
          explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is 10.**\n\n**The Fast Way (15 seconds):** $f(3) = 2(9) - 3(3) + 1 = 18 - 9 + 1 = 10$.\n\n**The Full Solution:**\n$f(3) = 2(3)^2 - 3(3) + 1$\n$= 2(9) - 9 + 1$\n$= 18 - 9 + 1$\n$= 10$\n\n**Common Mistakes to Avoid:**\n• Computing $(2 \\cdot 3)^2 = 36$ instead of $2 \\cdot 3^2 = 18$\n• Sign error: $18 - 9 + 1 = 8$ (subtracting $1$ instead of adding)\n\n**Verification:** $f(3) = 18 - 9 + 1 = 10$ ✓\n\n**Test Day Takeaway:** Replace every $x$ with the input value. Follow order of operations carefully.",
          skills: ["function-evaluation", "quadratic-functions"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table below shows the number of students who play different sports at a school.\n\n| Sport | Boys | Girls |\n|-------|------|-------|\n| Soccer | $30$ | $25$ |\n| Basketball | $20$ | $15$ |\n| Swimming | $10$ | $20$ |\n\nWhat fraction of the students who play swimming are boys?",
          choices: [
            { id: "A", text: "$\\frac{1}{12}$" },
            { id: "B", text: "$\\frac{1}{3}$" },
            { id: "C", text: "$\\frac{1}{2}$" },
            { id: "D", text: "$\\frac{2}{3}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Two-Way Table Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Swimming total $= 10 + 20 = 30$. Boys in swimming $= 10$. Fraction $= \\frac{10}{30} = \\frac{1}{3}$.\n\n**The Full Solution:**\nTotal swimming students: $10 + 20 = 30$\nBoys in swimming: $10$\nFraction $= \\frac{10}{30} = \\frac{1}{3}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{1}{12}$): Dividing $10$ by total students ($120$).\n• Choice C ($\\frac{1}{2}$): Assuming equal split.\n• Choice D ($\\frac{2}{3}$): This is the girls' fraction of swimming.\n\n**Test Day Takeaway:** Read the table carefully. The denominator is the row/column total for the condition, not the grand total.",
          skills: ["two-way-tables", "probability"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A survey estimates that $62\\%$ of voters support a measure, with a margin of error of $\\pm 4\\%$. Which of the following is the best conclusion?",
          choices: [
            { id: "A", text: "Exactly $62\\%$ of all voters support the measure." },
            { id: "B", text: "Between $58\\%$ and $66\\%$ of all voters likely support the measure." },
            { id: "C", text: "At least $66\\%$ of all voters support the measure." },
            { id: "D", text: "Fewer than $58\\%$ of all voters support the measure." }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Margin of Error Interpretation**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $62\\% \\pm 4\\%$ gives the interval $[58\\%, 66\\%]$.\n\n**The Full Solution:**\nA margin of error of $\\pm 4\\%$ means the true proportion is likely between $62 - 4 = 58\\%$ and $62 + 4 = 66\\%$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Surveys give estimates, not exact values.\n• Choice C: $66\\%$ is the upper bound, not a minimum.\n• Choice D: $58\\%$ is the lower bound, not a maximum.\n\n**Test Day Takeaway:** Margin of error creates a confidence interval: estimate $\\pm$ margin.",
          skills: ["margin-of-error", "statistics"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If a line passes through the points $(0, 4)$ and $(6, 16)$, what is the slope of the line?",
          choices: [
            { id: "A", text: "$\\frac{1}{2}$" },
            { id: "B", text: "$2$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Slope $= \\frac{16 - 4}{6 - 0} = \\frac{12}{6} = 2$.\n\n**The Full Solution:**\n$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{16 - 4}{6 - 0} = \\frac{12}{6} = 2$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{1}{2}$): Flipping the fraction (run over rise).\n• Choice C ($3$): Possibly from $\\frac{12}{4}$, a subtraction error.\n• Choice D ($6$): Using just the $x$-distance.\n\n**Test Day Takeaway:** Slope = rise over run = $\\frac{\\Delta y}{\\Delta x}$. Never flip it.",
          skills: ["slope", "linear-functions"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is equivalent to $(3x + 2)(x - 5)$?",
          choices: [
            { id: "A", text: "$3x^2 - 13x - 10$" },
            { id: "B", text: "$3x^2 - 15x + 2$" },
            { id: "C", text: "$3x^2 + 13x - 10$" },
            { id: "D", text: "$3x^2 - 17x - 10$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: FOIL / Expanding Binomials**\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** $(3x+2)(x-5) = 3x^2 - 15x + 2x - 10 = 3x^2 - 13x - 10$.\n\n**The Full Solution:**\nFirst: $3x \\cdot x = 3x^2$\nOuter: $3x \\cdot (-5) = -15x$\nInner: $2 \\cdot x = 2x$\nLast: $2 \\cdot (-5) = -10$\nCombine: $3x^2 - 15x + 2x - 10 = 3x^2 - 13x - 10$\n\n**Why the wrong answers are tempting:**\n• Choice B: Forgot the inner term $2x$.\n• Choice C: Sign error on the middle term ($+13x$ instead of $-13x$).\n• Choice D: Added $-15x - 2x = -17x$ instead of $-15x + 2x = -13x$.\n\n**Test Day Takeaway:** FOIL carefully and watch the signs when multiplying by a negative.",
          skills: ["polynomial-operations", "factoring"]
        },
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "A triangle has angles measuring $x°$, $50°$, and $70°$. What is the value of $x$?",
          correctAnswer: "60",
          explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**The correct answer is 60.**\n\n**The Fast Way (10 seconds):** $x + 50 + 70 = 180$, so $x = 60$.\n\n**The Full Solution:**\nThe sum of angles in a triangle is $180°$.\n$x + 50 + 70 = 180$\n$x + 120 = 180$\n$x = 60$\n\n**Common Mistakes to Avoid:**\n• Using $360°$ instead of $180°$\n• Subtraction error: $180 - 120 = 50$ (getting confused with the other angle)\n\n**Verification:** $60 + 50 + 70 = 180$ ✓\n\n**Test Day Takeaway:** Triangle angles always sum to $180°$.",
          skills: ["triangles", "angles"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A population of bacteria doubles every $3$ hours. If there are $500$ bacteria initially, which function models the population after $t$ hours?",
          choices: [
            { id: "A", text: "$P(t) = 500(2)^{t/3}$" },
            { id: "B", text: "$P(t) = 500(2)^{3t}$" },
            { id: "C", text: "$P(t) = 500 + 2t$" },
            { id: "D", text: "$P(t) = 1000^t$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Doubles every $3$ hours means the base is $2$ and the exponent is $t/3$ (number of doubling periods). Initial value is $500$.\n\n**The Full Solution:**\nGeneral form: $P(t) = P_0 \\cdot b^{t/\\text{period}}$\n$P_0 = 500$, doubles means $b = 2$, period $= 3$ hours.\n$P(t) = 500(2)^{t/3}$\n\nCheck: At $t = 3$: $P(3) = 500 \\cdot 2^1 = 1000$ ✓ (doubled)\n\n**Why the wrong answers are tempting:**\n• Choice B: Uses $3t$ in the exponent, which would mean tripling the rate.\n• Choice C: Models linear growth, not exponential.\n• Choice D: Ignores the initial value and period entirely.\n\n**Test Day Takeaway:** For exponential growth: initial value times growth factor raised to $t$ divided by the period.",
          skills: ["exponential-functions"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $|x - 3| = 7$, what is the sum of all possible values of $x$?",
          choices: [
            { id: "A", text: "$6$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$10$" },
            { id: "D", text: "$14$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** $x - 3 = 7$ gives $x = 10$. $x - 3 = -7$ gives $x = -4$. Sum $= 10 + (-4) = 6$.\n\n**The Full Solution:**\n$|x - 3| = 7$ means $x - 3 = 7$ or $x - 3 = -7$.\nCase 1: $x = 10$\nCase 2: $x = -4$\nSum $= 10 + (-4) = 6$\n\n**Why the wrong answers are tempting:**\n• Choice B ($4$): Only finding $x = -4 + ... $ or confusing the cases.\n• Choice C ($10$): Only using the positive case.\n• Choice D ($14$): Adding $10 + 4$ instead of $10 + (-4)$.\n\n**Test Day Takeaway:** Absolute value equations always give two cases. The sum of solutions for $|x - a| = b$ is always $2a$.",
          skills: ["absolute-value-equations", "solving-equations"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation $y = x^2 - 8x + 12$ is graphed in the $xy$-plane. What is the $x$-coordinate of the vertex?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Vertex of a Parabola**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $x = \\frac{-b}{2a} = \\frac{-(-8)}{2(1)} = \\frac{8}{2} = 4$.\n\n**The Full Solution:**\nFor $y = ax^2 + bx + c$, vertex $x$-coordinate $= \\frac{-b}{2a}$.\n$a = 1, b = -8$: $x = \\frac{8}{2} = 4$.\n\nAlternatively, factor: $y = (x-2)(x-6)$. The vertex is midway between the roots: $\\frac{2+6}{2} = 4$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): One of the $x$-intercepts.\n• Choice C ($6$): The other $x$-intercept.\n• Choice D ($8$): The value of $-b$, not $\\frac{-b}{2a}$.\n\n**Test Day Takeaway:** Vertex $x = \\frac{-b}{2a}$, or average the two roots.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $\\sqrt{3x + 7} = 5$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$\\frac{32}{3}$" },
            { id: "D", text: "$18$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Solving a Radical Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Square both sides: $3x + 7 = 25$. $3x = 18$. $x = 6$.\n\n**The Full Solution:**\n$\\sqrt{3x + 7} = 5$\n$(\\sqrt{3x + 7})^2 = 5^2$\n$3x + 7 = 25$\n$3x = 18$\n$x = 6$\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): Check: $\\sqrt{12 + 7} = \\sqrt{19} \\neq 5$.\n• Choice C ($\\frac{32}{3}$): From $3x = 32$, squaring $5$ as $32$ somehow.\n• Choice D ($18$): Using $3x = 18$ but then not dividing, or squaring again.\n\n**Test Day Takeaway:** Square both sides to remove a square root, then solve the resulting linear equation. Always check by plugging back in.",
          skills: ["radical-equations", "solving-equations"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "The perimeter of a square is $48$ inches. What is the area of the square, in square inches?",
          correctAnswer: "144",
          explanation: "**SAT Pattern: Perimeter to Area**\n\n**The correct answer is 144.**\n\n**The Fast Way (15 seconds):** Side $= 48 \\div 4 = 12$. Area $= 12^2 = 144$.\n\n**The Full Solution:**\nPerimeter of a square $= 4s$, so $4s = 48$ and $s = 12$.\nArea $= s^2 = 12^2 = 144$ square inches.\n\n**Common Mistakes to Avoid:**\n• Using $48^2 = 2304$ (squaring the perimeter, not the side)\n• Dividing by $2$ instead of $4$: side $= 24$, area $= 576$\n\n**Verification:** Perimeter $= 4(12) = 48$ ✓, Area $= 144$ ✓\n\n**Test Day Takeaway:** Find the side length first from the perimeter, then square it for the area.",
          skills: ["area"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A cylinder has a radius of $4$ inches and a height of $10$ inches. What is the volume, in cubic inches, of the cylinder?",
          choices: [
            { id: "A", text: "$40\\pi$" },
            { id: "B", text: "$80\\pi$" },
            { id: "C", text: "$160\\pi$" },
            { id: "D", text: "$640\\pi$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Volume of a Cylinder**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** $V = \\pi r^2 h = \\pi(16)(10) = 160\\pi$.\n\n**The Full Solution:**\n$V = \\pi r^2 h = \\pi (4)^2 (10) = \\pi (16)(10) = 160\\pi$\n\n**Why the wrong answers are tempting:**\n• Choice A ($40\\pi$): From $\\pi(4)(10) = 40\\pi$, forgetting to square the radius.\n• Choice B ($80\\pi$): From $\\pi(8)(10)$, doubling $r$ instead of squaring.\n• Choice D ($640\\pi$): From $\\pi(4)^2(10) \\cdot 4$, an extra multiplication.\n\n**Test Day Takeaway:** Cylinder volume = $\\pi r^2 h$. The radius gets squared, not doubled. This formula is on the reference sheet.",
          skills: ["volume"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $f$ is defined by $f(x) = a \\cdot b^x$, where $a$ and $b$ are constants. If $f(0) = 5$ and $f(2) = 45$, what is the value of $b$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$9$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Finding the Base of an Exponential Function**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** $f(0) = a \\cdot b^0 = a = 5$. Then $f(2) = 5b^2 = 45$, so $b^2 = 9$, $b = 3$.\n\n**The Full Solution:**\nFrom $f(0) = 5$: $a \\cdot b^0 = a = 5$.\nFrom $f(2) = 45$: $5 \\cdot b^2 = 45$, so $b^2 = 9$, $b = 3$ (since $b > 0$ for exponential functions).\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): Guessing. Check: $5(4) = 20 \\neq 45$.\n• Choice C ($5$): Confusing $b$ with $a$.\n• Choice D ($9$): This is $b^2$, not $b$.\n\n**Test Day Takeaway:** Use $f(0)$ to find $a$ (since $b^0 = 1$), then use another point to find $b$.",
          skills: ["exponential-functions", "function-evaluation"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "For what value of $b$ does the equation $x^2 + bx + 9 = 0$ have exactly one real solution?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$9$" },
            { id: "D", text: "$18$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Discriminant for One Solution**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** One solution means $b^2 - 4ac = 0$. Here $a = 1, c = 9$: $b^2 - 36 = 0$, so $b^2 = 36$, $b = 6$ (positive value).\n\n**The Full Solution:**\nDiscriminant $= b^2 - 4(1)(9) = b^2 - 36$.\nFor one solution: $b^2 - 36 = 0$, so $b = \\pm 6$.\nSince $6$ is among the choices, $b = 6$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): This is $\\sqrt{9}$, related to $c$ but not the discriminant.\n• Choice C ($9$): This is the value of $c$.\n• Choice D ($18$): From $2 \\times 9$, not using the discriminant formula.\n\n**Test Day Takeaway:** One real solution means discriminant $= 0$: $b^2 = 4ac$.",
          skills: ["discriminant", "quadratic-equations"]
        },
        {
          id: 22,
          type: "fill-in",
          difficulty: "hard",
          question: "In a right triangle, one leg has length $8$ and the hypotenuse has length $17$. What is the length of the other leg?",
          correctAnswer: "15",
          explanation: "**SAT Pattern: Pythagorean Theorem**\n\n**The correct answer is 15.**\n\n**The Fast Way (20 seconds):** $a^2 + 8^2 = 17^2$. $a^2 = 289 - 64 = 225$. $a = 15$.\n\n**The Full Solution:**\n$a^2 + b^2 = c^2$\n$a^2 + 64 = 289$\n$a^2 = 225$\n$a = 15$\n\nThis is the $8$-$15$-$17$ Pythagorean triple.\n\n**Common Mistakes to Avoid:**\n• Adding instead of subtracting: $289 + 64 = 353$\n• Forgetting to take the square root: answering $225$\n\n**Verification:** $8^2 + 15^2 = 64 + 225 = 289 = 17^2$ ✓\n\n**Test Day Takeaway:** Know common Pythagorean triples: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$.",
          skills: ["triangles", "right-triangle-trig"]
        }
      ]
    }
  ]
};

export default practiceTest1;
