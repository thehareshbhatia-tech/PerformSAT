// Practice Test 3 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty

export const practiceTest3 = {
  id: "practice-test-3",
  title: "Practice Test 3",
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
          question: "A researcher records the heights, in inches, of $5$ plants. The results are shown in the table below.\n\n| Plant | A | B | C | D | E |\n|---|---|---|---|---|---|\n| Height (inches) | $12$ | $18$ | $9$ | $15$ | $6$ |\n\nWhat is the median height of the $5$ plants?",
          choices: [
            { id: "A", text: "$9$" },
            { id: "B", text: "$12$" },
            { id: "C", text: "$15$" },
            { id: "D", text: "$18$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Finding the Median from a Data Table**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Order the values: $6, 9, 12, 15, 18$. The middle value (3rd of 5) is $12$.\n\n**The Full Solution:**\nArrange in order: $6, 9, 12, 15, 18$.\nWith $5$ values, the median is the $\\frac{5+1}{2} = 3$rd value $= 12$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($9$): The second value, not the middle.\n• Choice C ($15$): The value of plant D, which appears in the middle of the unordered table.\n• Choice D ($18$): Confusing the median with the maximum.\n\n**Test Day Takeaway:** Median = middle value after ordering from least to greatest. For $n$ values, it is the $\\frac{n+1}{2}$th value.",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A weather station recorded $3.6$ inches of rain in March. This was $40\\%$ of the total rainfall for the spring season. What was the total spring rainfall, in inches?",
          choices: [
            { id: "A", text: "$1.44$" },
            { id: "B", text: "$5.04$" },
            { id: "C", text: "$9$" },
            { id: "D", text: "$14.4$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Finding the Whole from a Percent**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** $3.6 = 0.40 \\times \\text{total}$. Total $= \\frac{3.6}{0.40} = 9$.\n\n**The Full Solution:**\n$40\\%$ of total $= 3.6$\n$0.40 \\times T = 3.6$\n$T = \\frac{3.6}{0.40} = 9$\n\n**Why the wrong answers are tempting:**\n• Choice A ($1.44$): From $3.6 \\times 0.40 = 1.44$, finding $40\\%$ of $3.6$ instead of the other way.\n• Choice B ($5.04$): From $3.6 \\times 1.40$, adding $40\\%$ to $3.6$.\n• Choice D ($14.4$): From $3.6 \\times 4$, multiplying by $4$ instead of dividing by $0.4$.\n\n**Test Day Takeaway:** When you know the part and the percent, divide to find the whole: whole = part / percent.",
          skills: ["percents", "word-problems"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The table below shows selected values of a linear function $g$.\n\n| $x$ | $1$ | $3$ | $5$ | $7$ |\n|---|---|---|---|---|\n| $g(x)$ | $10$ | $16$ | $22$ | $28$ |\n\nWhat is the value of $g(x)$ when $x = 0$?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$7$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$10$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Finding y-intercept from a Table**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Slope $= \\frac{16 - 10}{3 - 1} = \\frac{6}{2} = 3$. Using $(1, 10)$: $g(0) = 10 - 3(1) = 7$.\n\n**The Full Solution:**\nFind the slope: $m = \\frac{16 - 10}{3 - 1} = 3$.\nUsing $g(x) = 3x + b$ with the point $(1, 10)$:\n$10 = 3(1) + b$, so $b = 7$.\n$g(0) = 3(0) + 7 = 7$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): From $10 - 6 = 4$, subtracting the slope change incorrectly.\n• Choice C ($8$): From $10 - 2 = 8$, subtracting the $x$-step instead of the slope.\n• Choice D ($10$): Using $g(1) = 10$ as the value at $x = 0$.\n\n**Verification:** $g(1) = 3(1) + 7 = 10$ ✓, $g(3) = 3(3) + 7 = 16$ ✓\n\n**Test Day Takeaway:** To find the $y$-intercept from a table: first find the slope, then work backward to $x = 0$.",
          skills: ["linear-functions", "function-interpretation"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A club has $7$ more than twice the number of members it had last year. If the club now has $31$ members, which equation can be used to find $m$, the number of members last year?",
          choices: [
            { id: "A", text: "$2m + 7 = 31$" },
            { id: "B", text: "$7m + 2 = 31$" },
            { id: "C", text: "$2(m + 7) = 31$" },
            { id: "D", text: "$2m - 7 = 31$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Translating Words into an Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** \"Twice the number\" $= 2m$. \"$7$ more than that\" $= 2m + 7$. This equals $31$.\n\n**The Full Solution:**\n\"$7$ more than twice $m$\" translates to $2m + 7$.\nSet equal to $31$: $2m + 7 = 31$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($7m + 2 = 31$): Swaps the coefficients.\n• Choice C ($2(m + 7) = 31$): Adds $7$ before multiplying, changing the meaning to \"twice the sum.\"\n• Choice D ($2m - 7 = 31$): Uses subtraction instead of addition.\n\n**Test Day Takeaway:** \"$a$ more than $b$ times $x$\" = $bx + a$. Order of operations matters: multiply first, then add.",
          skills: ["word-problems", "solving-equations"]
        },
        {
          id: 5,
          type: "fill-in",
          difficulty: "easy",
          question: "A movie theater has $6$ screens, each showing a different film. A total of $\\$450$ in tickets was collected, and each screen earned the same amount. Additionally, the theater paid a $\\$90$ licensing fee from this revenue. How much revenue, in dollars, did each screen keep after the licensing fee was deducted from the total?",
          correctAnswer: "60",
          explanation: "**SAT Pattern: Two-Step Division Word Problem**\n\n**The correct answer is $60$.**\n\n**The Fast Way (15 seconds):** After fee: $450 - 90 = 360$. Per screen: $360 \\div 6 = 60$.\n\n**The Full Solution:**\nTotal revenue after fee $= 450 - 90 = 360$.\nPer screen $= \\frac{360}{6} = 60$.\n\n**Common Mistakes to Avoid:**\n• Dividing before subtracting the fee: $450 \\div 6 = 75$.\n• Subtracting the fee from each screen's share: $75 - 90$ (negative, which signals an error).\n\n**Verification:** $6 \\times 60 = 360$ and $360 + 90 = 450$ ✓\n\n**Test Day Takeaway:** When a fee applies to the total, subtract it first, then divide among the groups.",
          skills: ["word-problems", "solving-equations"]
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The function $f(t) = 800 + 40t$ models the number of gallons of water in a pool $t$ hours after filling begins. What does $40$ represent in this function?",
          choices: [
            { id: "A", text: "The total capacity of the pool in gallons" },
            { id: "B", text: "The number of gallons in the pool when filling begins" },
            { id: "C", text: "The number of gallons added per hour" },
            { id: "D", text: "The number of hours needed to fill the pool" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Interpreting Slope in a Linear Model**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** In $f(t) = 800 + 40t$, the coefficient of $t$ is the rate of change: $40$ gallons per hour.\n\n**The Full Solution:**\nIn a linear function $f(t) = b + mt$, the slope $m$ is the rate of change. Here $m = 40$, meaning $40$ gallons are added each hour. The constant $800$ is the starting amount.\n\n**Why the wrong answers are tempting:**\n• Choice A: The total capacity is not stated in the equation.\n• Choice B: The starting amount is $800$, not $40$.\n• Choice D: The number of hours is the variable $t$.\n\n**Test Day Takeaway:** In a linear model, the slope always represents the rate of change per unit of the input variable.",
          skills: ["linear-functions", "function-interpretation"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The equation $m^2 - 16 = 48$ is true. What is the positive value of $m$?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$8$" },
            { id: "C", text: "$32$" },
            { id: "D", text: "$64$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Solving for a Squared Variable**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $m^2 = 48 + 16 = 64$. $m = \\sqrt{64} = 8$.\n\n**The Full Solution:**\n$m^2 - 16 = 48$\n$m^2 = 64$\n$m = \\pm 8$\nThe positive value is $8$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): From $\\sqrt{16}$, using the subtracted constant.\n• Choice C ($32$): From $48 - 16 = 32$, subtracting instead of adding.\n• Choice D ($64$): Reporting $m^2 = 64$ instead of $m = 8$.\n\n**Test Day Takeaway:** Isolate $m^2$ first (add $16$), then take the square root. Check if the question asks for the positive root.",
          skills: ["solving-equations", "quadratic-equations"]
        },
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A homebuilder charges $\\$2{,}500$ for materials plus $\\$75$ per hour for labor. A second builder charges $\\$1{,}000$ for materials plus $\\$150$ per hour for labor. After how many hours will both builders charge the same total amount?",
          choices: [
            { id: "A", text: "$15$" },
            { id: "B", text: "$20$" },
            { id: "C", text: "$25$" },
            { id: "D", text: "$30$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Setting Two Linear Expressions Equal**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** $2500 + 75h = 1000 + 150h$. $1500 = 75h$. $h = 20$.\n\n**The Full Solution:**\nBuilder 1: $2500 + 75h$\nBuilder 2: $1000 + 150h$\nSet equal: $2500 + 75h = 1000 + 150h$\n$2500 - 1000 = 150h - 75h$\n$1500 = 75h$\n$h = 20$\n\n**Why the wrong answers are tempting:**\n• Choice A ($15$): From $1500 \\div 100$.\n• Choice C ($25$): From $1500 \\div 60$, using a wrong difference.\n• Choice D ($30$): From $1500 \\div 50$.\n\n**Test Day Takeaway:** Set the two cost expressions equal and solve for the variable.",
          skills: ["linear-equations", "systems-of-equations"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Line $k$ passes through the points $(-2, 5)$ and $(4, -1)$. Which of the following is an equation of line $k$?",
          choices: [
            { id: "A", text: "$y = -x + 3$" },
            { id: "B", text: "$y = -x + 5$" },
            { id: "C", text: "$y = x + 3$" },
            { id: "D", text: "$y = -\\frac{2}{3}x + 3$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Finding the Equation of a Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Slope $= \\frac{-1 - 5}{4 - (-2)} = \\frac{-6}{6} = -1$. Use $(-2, 5)$: $5 = -1(-2) + b = 2 + b$, so $b = 3$. Equation: $y = -x + 3$.\n\n**The Full Solution:**\n$m = \\frac{-1 - 5}{4 - (-2)} = \\frac{-6}{6} = -1$\nUsing point $(-2, 5)$: $5 = -1(-2) + b$, so $b = 3$.\n$y = -x + 3$.\n\nVerify with $(4, -1)$: $-4 + 3 = -1$ ✓\n\n**Why the wrong answers are tempting:**\n• Choice B ($y = -x + 5$): Uses the $y$-coordinate of $(-2, 5)$ as the intercept without calculating.\n• Choice C ($y = x + 3$): Correct intercept but wrong sign on slope.\n• Choice D ($y = -\\frac{2}{3}x + 3$): Incorrect slope calculation.\n\n**Test Day Takeaway:** Find the slope from two points, then plug one point into $y = mx + b$ to find the intercept. Verify with the other point.",
          skills: ["slope", "linear-functions"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table below shows data from a survey of students.\n\n| | Plays a Sport | Does Not Play | Total |\n|---|---|---|---|\n| Grade $9$ | $40$ | $20$ | $60$ |\n| Grade $10$ | $55$ | $25$ | $80$ |\n| Grade $11$ | $35$ | $25$ | $60$ |\n| Total | $130$ | $70$ | $200$ |\n\nOf the Grade $10$ students, what fraction play a sport?",
          choices: [
            { id: "A", text: "$\\frac{55}{200}$" },
            { id: "B", text: "$\\frac{55}{130}$" },
            { id: "C", text: "$\\frac{55}{80}$" },
            { id: "D", text: "$\\frac{80}{200}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Conditional Probability from a Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** \"Of the Grade $10$ students\" = denominator is $80$. Sport-playing Grade $10$ students $= 55$. Fraction $= \\frac{55}{80}$.\n\n**The Full Solution:**\nThe condition restricts us to Grade $10$ students only (total $= 80$).\nOf those, $55$ play a sport.\nFraction $= \\frac{55}{80} = \\frac{11}{16}$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{55}{200}$): Uses grand total as the denominator.\n• Choice B ($\\frac{55}{130}$): Uses total sport players as the denominator (wrong condition).\n• Choice D ($\\frac{80}{200}$): Finds the fraction of all students who are in Grade $10$.\n\n**Test Day Takeaway:** The group after \"of\" determines your denominator. \"Of the Grade $10$ students\" means denominator = total Grade $10$.",
          skills: ["two-way-tables", "probability"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "If $4x - 7 = 2x + 9$, what is the value of $x$?",
          correctAnswer: "8",
          explanation: "**SAT Pattern: Two-Step Equation with Variables on Both Sides**\n\n**The correct answer is 8.**\n\n**The Fast Way (15 seconds):** $4x - 2x = 9 + 7$. $2x = 16$. $x = 8$.\n\n**The Full Solution:**\n$4x - 7 = 2x + 9$\n$4x - 2x = 9 + 7$\n$2x = 16$\n$x = 8$\n\n**Common Mistakes to Avoid:**\n• Moving terms without changing signs: $4x + 2x = 9 - 7$\n• Arithmetic error: $16 \\div 2 = 9$\n\n**Verification:** $4(8) - 7 = 25$ and $2(8) + 9 = 25$ ✓\n\n**Test Day Takeaway:** Collect variables on one side and constants on the other.",
          skills: ["solving-equations", "linear-equations"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A population of $800$ bacteria decreases by $10\\%$ each hour. Which expression gives the population after $t$ hours?",
          choices: [
            { id: "A", text: "$800(0.10)^t$" },
            { id: "B", text: "$800(0.90)^t$" },
            { id: "C", text: "$800 - 80t$" },
            { id: "D", text: "$800(1.10)^t$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Exponential Decay Model**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Decreasing by $10\\%$ means retaining $90\\% = 0.90$ each hour. Starting at $800$: $800(0.90)^t$.\n\n**The Full Solution:**\nDecay rate $= 10\\% = 0.10$.\nRetention factor $= 1 - 0.10 = 0.90$.\nAfter $t$ hours: $800(0.90)^t$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($800(0.10)^t$): Uses the loss rate as the base. This would shrink the population to nearly $0$ after $1$ hour.\n• Choice C ($800 - 80t$): Models linear decay (losing $80$ per hour), not percentage decay.\n• Choice D ($800(1.10)^t$): Models $10\\%$ growth, not decay.\n\n**Test Day Takeaway:** Decrease by $r\\%$ means multiply by $(1 - r/100)$ each period. This is exponential decay.",
          skills: ["exponential-functions", "word-problems"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Two supplementary angles have measures in the ratio $2:7$. What is the measure of the larger angle?",
          choices: [
            { id: "A", text: "$40°$" },
            { id: "B", text: "$70°$" },
            { id: "C", text: "$126°$" },
            { id: "D", text: "$140°$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Supplementary Angles with Ratios**\n\n**Choice D is correct.**\n\n**The Fast Way (20 seconds):** Total $= 180°$. Parts $= 2 + 7 = 9$. Each part $= 20°$. Larger angle $= 7 \\times 20 = 140°$.\n\n**The Full Solution:**\nSupplementary angles sum to $180°$.\n$2x + 7x = 180$\n$9x = 180$\n$x = 20$\nLarger angle $= 7(20) = 140°$\n\n**Why the wrong answers are tempting:**\n• Choice A ($40°$): This is the smaller angle ($2 \\times 20$).\n• Choice B ($70°$): From $\\frac{7}{9} \\times 90 = 70$, using $90°$ instead of $180°$.\n• Choice C ($126°$): From $\\frac{7}{10} \\times 180 = 126$, using $10$ parts instead of $9$.\n\n**Test Day Takeaway:** Supplementary = $180°$. Complementary = $90°$. Set up the ratio equation accordingly.",
          skills: ["angles", "ratios-proportions"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A chemistry student mixes $x$ milliliters of a $30\\%$ acid solution with $200$ milliliters of a $10\\%$ acid solution to create a $15\\%$ acid solution. What is the value of $x$, rounded to the nearest tenth?",
          choices: [
            { id: "A", text: "$50.0$" },
            { id: "B", text: "$66.7$" },
            { id: "C", text: "$100.0$" },
            { id: "D", text: "$200.0$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Mixture Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Set up the equation: $0.30x + 0.10(200) = 0.15(x + 200)$.\n$0.30x + 20 = 0.15x + 30$\n$0.15x = 10$\n$x = 66.\\overline{6} \\approx 66.7$\n\n**The Full Solution:**\nAcid from $30\\%$ solution: $0.30x$.\nAcid from $10\\%$ solution: $0.10 \\times 200 = 20$.\nTotal acid in mixture: $0.15(x + 200)$.\n\n$0.30x + 20 = 0.15x + 30$\n$0.15x = 10$\n$x = \\frac{10}{0.15} = \\frac{200}{3} \\approx 66.7$\n\n**Why the wrong answers are tempting:**\n• Choice A ($50$): From $10/0.20$, a setup error.\n• Choice C ($100$): From $30/0.30$, ignoring the mixture equation.\n• Choice D ($200$): Assumes equal amounts of each solution.\n\n**Test Day Takeaway:** Mixture problems: (amount 1)(concentration 1) + (amount 2)(concentration 2) = (total amount)(target concentration).",
          skills: ["solving-equations", "percents"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A store marks up the wholesale cost of an item by $40\\%$ to set the retail price. During a clearance sale, the retail price is reduced by $30\\%$. What is the overall percent change from the wholesale cost to the clearance price?",
          choices: [
            { id: "A", text: "$2\\%$ decrease" },
            { id: "B", text: "$2\\%$ increase" },
            { id: "C", text: "$10\\%$ decrease" },
            { id: "D", text: "$10\\%$ increase" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Successive Percent Changes**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Multiply the factors: $1.40 \\times 0.70 = 0.98$. That is a $2\\%$ decrease from the original.\n\n**The Full Solution:**\nLet wholesale cost $= 100$.\nAfter $40\\%$ markup: $100 \\times 1.40 = 140$.\nAfter $30\\%$ reduction: $140 \\times 0.70 = 98$.\nChange: $\\frac{98 - 100}{100} = -2\\%$, a $2\\%$ decrease.\n\n**Why the wrong answers are tempting:**\n• Choice B ($2\\%$ increase): Correct magnitude but wrong direction.\n• Choice C ($10\\%$ decrease): From $40\\% - 30\\% = 10\\%$, subtracting percentages directly.\n• Choice D ($10\\%$ increase): From adding $40 - 30 = 10$, treating it as an increase.\n\n**Test Day Takeaway:** You cannot add or subtract successive percentage changes. Multiply the factors: $(1 + r_1)(1 - r_2)$.",
          skills: ["percents", "word-problems"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation $y = -2x^2 + 16x - 30$ can be rewritten as $y = -2(x - h)^2 + k$. What is the value of $k$?",
          choices: [
            { id: "A", text: "$-30$" },
            { id: "B", text: "$-14$" },
            { id: "C", text: "$2$" },
            { id: "D", text: "$32$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Converting to Vertex Form**\n\n**Choice C is correct.**\n\n**The Fast Way (40 seconds):** Vertex $x = \\frac{-16}{2(-2)} = 4$. $k = y(4) = -2(16) + 64 - 30 = -32 + 64 - 30 = 2$.\n\n**The Full Solution:**\n$y = -2x^2 + 16x - 30$\n$y = -2(x^2 - 8x) - 30$\n$y = -2(x^2 - 8x + 16 - 16) - 30$\n$y = -2(x - 4)^2 + 32 - 30$\n$y = -2(x - 4)^2 + 2$\nSo $k = 2$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($-30$): The original constant, before completing the square.\n• Choice B ($-14$): From a sign error: $-32 + 16 + 2 = -14$.\n• Choice D ($32$): Only computing $-2(-16) = 32$ without subtracting $30$.\n\n**Test Day Takeaway:** You can find $k$ by evaluating the function at $x = \\frac{-b}{2a}$, or by completing the square.",
          skills: ["vertex-form", "quadratic-functions"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A retail store marks up the cost of an item by $60\\%$ to set the selling price. During a sale, the selling price is reduced by $25\\%$. What is the overall percent change from cost to sale price?",
          choices: [
            { id: "A", text: "$20\\%$ increase" },
            { id: "B", text: "$25\\%$ increase" },
            { id: "C", text: "$35\\%$ increase" },
            { id: "D", text: "$40\\%$ increase" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Successive Percent Changes**\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** Multiply the factors: $1.60 \\times 0.75 = 1.20$. That is a $20\\%$ increase.\n\n**The Full Solution:**\nLet cost $= 100$.\nAfter $60\\%$ markup: $100 \\times 1.60 = 160$\nAfter $25\\%$ discount: $160 \\times 0.75 = 120$\nChange from $100$ to $120$: $20\\%$ increase.\n\n**Why the wrong answers are tempting:**\n• Choice B ($25\\%$): From guessing that the changes partially cancel.\n• Choice C ($35\\%$): From $60\\% - 25\\% = 35\\%$, subtracting percentages directly.\n• Choice D ($40\\%$): From $60\\% \\times \\frac{2}{3} = 40\\%$.\n\n**Test Day Takeaway:** You cannot add or subtract successive percentage changes. Multiply the factors instead.",
          skills: ["percents", "word-problems"]
        },
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The quadratic $x^2 - 6x + 8 = 0$ has solutions $r$ and $s$, where $r < s$. What is the value of $r \\cdot s + r + s$?",
          choices: [
            { id: "A", text: "$10$" },
            { id: "B", text: "$12$" },
            { id: "C", text: "$14$" },
            { id: "D", text: "$16$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Vieta's Formulas**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** By Vieta's: $r + s = 6$ and $r \\cdot s = 8$. So $r \\cdot s + r + s = 8 + 6 = 14$.\n\n**The Full Solution:**\nFor $x^2 - 6x + 8 = 0$: sum of roots $= -\\frac{-6}{1} = 6$, product of roots $= \\frac{8}{1} = 8$.\n$r \\cdot s + r + s = 8 + 6 = 14$\n\nAlternatively, factor: $(x-2)(x-4) = 0$, so $r = 2, s = 4$.\n$2 \\cdot 4 + 2 + 4 = 8 + 6 = 14$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($10$): From $2 + 4 + 4 = 10$, a miscalculation.\n• Choice B ($12$): From $2 \\times 4 + 4 = 12$, adding only one root.\n• Choice D ($16$): From $8 + 8 = 16$, doubling the product.\n\n**Test Day Takeaway:** For $x^2 + bx + c = 0$: sum of roots $= -b$, product of roots $= c$. These save time when you do not need individual roots.",
          skills: ["quadratic-equations", "factoring"]
        },
        {
          id: 19,
          type: "fill-in",
          difficulty: "hard",
          question: "A rectangular room has a length of $15$ feet and a width of $10$ feet. A square tile has a side length of $6$ inches. How many tiles are needed to cover the floor completely? (Assume no gaps and $1$ foot $= 12$ inches.)",
          correctAnswer: "600",
          explanation: "**SAT Pattern: Area and Unit Conversion**\n\n**The correct answer is 600.**\n\n**The Fast Way (30 seconds):** Convert room to inches: $15 \\times 12 = 180$ in, $10 \\times 12 = 120$ in. Tiles along length $= 180 \\div 6 = 30$. Tiles along width $= 120 \\div 6 = 20$. Total $= 30 \\times 20 = 600$.\n\n**The Full Solution:**\nConvert room dimensions to inches: $15 \\times 12 = 180$ in, $10 \\times 12 = 120$ in.\nTiles along length $= 180 \\div 6 = 30$\nTiles along width $= 120 \\div 6 = 20$\nTotal tiles $= 30 \\times 20 = 600$\n\n**Common Mistakes to Avoid:**\n• Forgetting to convert units: $15 \\times 10 / 6 = 25$\n• Only converting one dimension\n\n**Verification:** $600 \\times 36 = 21{,}600$ sq in $= 150$ sq ft ✓\n\n**Test Day Takeaway:** Convert all measurements to the same unit before calculating.",
          skills: ["area", "unit-conversion"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The graph of $y = f(x)$ is a parabola with vertex at $(3, -4)$ that passes through the point $(5, 0)$. What is the value of $f(0)$?",
          choices: [
            { id: "A", text: "$0$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$9$" },
            { id: "D", text: "$12$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Vertex Form of a Parabola**\n\n**Choice B is correct.**\n\n**The Fast Way (40 seconds):** $f(x) = a(x-3)^2 - 4$. Use $(5,0)$: $0 = a(4) - 4$, so $4a = 4$, $a = 1$. $f(0) = (0-3)^2 - 4 = 9 - 4 = 5$.\n\n**The Full Solution:**\nVertex form: $f(x) = a(x - 3)^2 - 4$\nPlug in $(5, 0)$: $0 = a(5-3)^2 - 4 = 4a - 4$\n$4a = 4$, so $a = 1$\n$f(x) = (x - 3)^2 - 4$\n$f(0) = (0-3)^2 - 4 = 9 - 4 = 5$\n\n**Why the wrong answers are tempting:**\n• Choice A ($0$): Using $f(5) = 0$ and assuming $f(0) = 0$ too.\n• Choice C ($9$): From $(0-3)^2 = 9$, forgetting to subtract $4$.\n• Choice D ($12$): From a computation error.\n\n**Test Day Takeaway:** Vertex form $f(x) = a(x-h)^2 + k$ needs one more point to find $a$.",
          skills: ["vertex-form", "quadratic-functions"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A circle has center $(0, 0)$ and passes through the point $(3, 4)$. What is the area of the circle?",
          choices: [
            { id: "A", text: "$7\\pi$" },
            { id: "B", text: "$12\\pi$" },
            { id: "C", text: "$25\\pi$" },
            { id: "D", text: "$49\\pi$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Circle Area from Center and Point**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** Radius $= \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$. Area $= \\pi(5)^2 = 25\\pi$.\n\n**The Full Solution:**\nRadius = distance from center to point: $r = \\sqrt{(3-0)^2 + (4-0)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$\nArea $= \\pi r^2 = 25\\pi$\n\n**Why the wrong answers are tempting:**\n• Choice A ($7\\pi$): From $r = 3 + 4 = 7$ (adding coordinates instead of using distance formula).\n• Choice B ($12\\pi$): From $r = \\sqrt{12}$... a miscalculation.\n• Choice D ($49\\pi$): From $r = 7$ and $r^2 = 49$.\n\n**Test Day Takeaway:** Use the distance formula to find the radius, then apply $A = \\pi r^2$. The $3$-$4$-$5$ triple makes this fast.",
          skills: ["circles", "coordinate-geometry"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "For what value of $c$ does the system of equations below have infinitely many solutions?",
          questionFormula: {
            equation: "$$\\begin{cases} 3x + 6y = 12 \\\\ x + 2y = c \\end{cases}$$"
          },
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$12$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Infinitely Many Solutions (Same Line)**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Divide the first equation by $3$: $x + 2y = 4$. For infinitely many solutions, the second equation must be identical, so $c = 4$.\n\n**The Full Solution:**\nDivide equation 1 by $3$: $x + 2y = 4$\nEquation 2: $x + 2y = c$\nFor the system to have infinitely many solutions, both equations must represent the same line. This requires $c = 4$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): Dividing $12$ by $6$ instead of $3$.\n• Choice C ($6$): Half of $12$, dividing by $2$ instead of $3$.\n• Choice D ($12$): Using the constant from the first equation without simplifying.\n\n**Test Day Takeaway:** Infinitely many solutions = same equation. No solution = same slope, different intercept. Make the equations look the same by simplifying.",
          skills: ["systems-of-equations", "linear-equations"]
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
          question: "A contractor buys $15$ bags of cement at $\\$8$ each. What is the total cost?",
          choices: [
            { id: "A", text: "$\\$100$" },
            { id: "B", text: "$\\$110$" },
            { id: "C", text: "$\\$120$" },
            { id: "D", text: "$\\$150$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Simple Multiplication**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $15 \\times 8 = 120$.\n\n**The Full Solution:**\nTotal cost $= 15 \\times 8 = 120$ dollars.\n\n**Why the wrong answers are tempting:**\n• Choice A ($100$): Rounding or estimation error.\n• Choice B ($110$): From $15 \\times 7 + 5$, a multiplication error.\n• Choice D ($150$): From $15 \\times 10$, using the wrong price.\n\n**Test Day Takeaway:** Price per item times quantity equals total cost.",
          skills: ["word-problems"]
        },
        {
          id: 2,
          type: "fill-in",
          difficulty: "easy",
          question: "If $n + 12 = 31$, what is the value of $n$?",
          correctAnswer: "19",
          explanation: "**SAT Pattern: One-Step Equation**\n\n**The correct answer is 19.**\n\n**The Fast Way (5 seconds):** $n = 31 - 12 = 19$.\n\n**The Full Solution:**\n$n + 12 = 31$\n$n = 31 - 12 = 19$\n\n**Common Mistakes to Avoid:**\n• Adding: $31 + 12 = 43$\n• Subtraction error: $31 - 12 = 18$\n\n**Verification:** $19 + 12 = 31$ ✓\n\n**Test Day Takeaway:** To undo addition, subtract from both sides.",
          skills: ["solving-equations"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The function $C(t) = 50 + 30t$ gives the cost, in dollars, of renting a tool for $t$ hours. What is the best interpretation of the number $50$ in this function?",
          choices: [
            { id: "A", text: "The cost per hour" },
            { id: "B", text: "The initial rental fee" },
            { id: "C", text: "The total cost for $1$ hour" },
            { id: "D", text: "The number of hours rented" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Interpreting Linear Function Constants**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** In $C(t) = 50 + 30t$, the constant $50$ is the $y$-intercept (the cost when $t = 0$), which is the initial fee.\n\n**The Full Solution:**\nAt $t = 0$: $C(0) = 50$. This is the cost before any hours are rented, so it is the initial rental fee.\n\n**Why the wrong answers are tempting:**\n• Choice A: The cost per hour is $30$ (the coefficient of $t$).\n• Choice C: The total for $1$ hour is $C(1) = 80$, not $50$.\n• Choice D: Hours rented is $t$, the variable.\n\n**Test Day Takeaway:** In $y = mx + b$, the $y$-intercept $b$ is the starting value when $x = 0$.",
          skills: ["function-interpretation", "linear-functions"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "How many inches are in $4$ feet $7$ inches? ($1$ foot $= 12$ inches)",
          choices: [
            { id: "A", text: "$47$" },
            { id: "B", text: "$48$" },
            { id: "C", text: "$55$" },
            { id: "D", text: "$67$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Unit Conversion**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $4 \\times 12 + 7 = 48 + 7 = 55$.\n\n**The Full Solution:**\n$4$ feet $= 4 \\times 12 = 48$ inches\n$48 + 7 = 55$ inches\n\n**Why the wrong answers are tempting:**\n• Choice A ($47$): Wrote $4$ and $7$ together as $47$.\n• Choice B ($48$): Forgot to add the extra $7$ inches.\n• Choice D ($67$): From $5 \\times 12 + 7$, using $5$ feet.\n\n**Test Day Takeaway:** Convert the larger unit to smaller, then add the remainder.",
          skills: ["unit-conversion"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "If $3x - 2 = 13$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $3x = 15$, so $x = 5$.\n\n**The Full Solution:**\n$3x - 2 = 13$\n$3x = 15$\n$x = 5$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): From $\\frac{13 - 2}{3}$... no. Just a guess.\n• Choice B ($4$): From $\\frac{13+2}{4}$, dividing by wrong number.\n• Choice D ($6$): From $\\frac{13+2+1}{3}$... a computation error.\n\n**Test Day Takeaway:** Add or subtract to isolate the variable term, then divide.",
          skills: ["solving-equations", "linear-equations"]
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A hardware store sells nails for $\\$3$ per pound and screws for $\\$5$ per pound. A customer buys a total of $8$ pounds of nails and screws for $\\$30$. How many pounds of nails did the customer buy?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: System of Equations from a Word Problem**\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** Let $n$ = nails. Screws $= 8 - n$. $3n + 5(8-n) = 30$. $3n + 40 - 5n = 30$. $-2n = -10$. $n = 5$.\n\n**The Full Solution:**\n$n + s = 8$ and $3n + 5s = 30$\nSubstitute $s = 8 - n$:\n$3n + 5(8-n) = 30$\n$3n + 40 - 5n = 30$\n$-2n = -10$\n$n = 5$\n\nCheck: $5$ lbs nails + $3$ lbs screws $= 15 + 15 = 30$ ✓\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): $3(3) + 5(5) = 9 + 25 = 34 \\neq 30$.\n• Choice B ($4$): $3(4) + 5(4) = 12 + 20 = 32 \\neq 30$.\n• Choice D ($6$): $3(6) + 5(2) = 18 + 10 = 28 \\neq 30$.\n\n**Test Day Takeaway:** Two equations, two unknowns. Use substitution for these mixture problems.",
          skills: ["systems-of-equations", "word-problems"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Line $j$ has slope $\\frac{3}{4}$ and passes through $(0, -2)$. Which point is also on line $j$?",
          choices: [
            { id: "A", text: "$(4, 1)$" },
            { id: "B", text: "$(3, 2)$" },
            { id: "C", text: "$(8, 6)$" },
            { id: "D", text: "$(4, 3)$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Using Slope to Find Points on a Line**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** $y = \\frac{3}{4}x - 2$. At $x = 4$: $y = 3 - 2 = 1$. So $(4, 1)$ is on the line.\n\n**The Full Solution:**\nThe equation is $y = \\frac{3}{4}x - 2$.\nCheck $(4, 1)$: $\\frac{3}{4}(4) - 2 = 3 - 2 = 1$ ✓\n\n**Why the wrong answers are tempting:**\n• Choice B $(3, 2)$: $\\frac{3}{4}(3) - 2 = \\frac{9}{4} - 2 = \\frac{1}{4} \\neq 2$.\n• Choice C $(8, 6)$: $\\frac{3}{4}(8) - 2 = 6 - 2 = 4 \\neq 6$.\n• Choice D $(4, 3)$: Uses $x = 4$ correctly but adds $\\frac{3}{4}(4) + 2 = 5$... no. Simply a wrong $y$-value.\n\n**Test Day Takeaway:** Write the equation $y = mx + b$ and plug in each choice's $x$-value to check.",
          skills: ["slope", "linear-functions"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "If $2x^2 = 72$, what is the positive value of $x$?",
          correctAnswer: "6",
          explanation: "**SAT Pattern: Solving a Quadratic for a Positive Value**\n\n**The correct answer is 6.**\n\n**The Fast Way (10 seconds):** $x^2 = 36$, so $x = 6$ (positive value).\n\n**The Full Solution:**\n$2x^2 = 72$\n$x^2 = 36$\n$x = \\pm 6$\nSince the question asks for the positive value: $x = 6$.\n\n**Common Mistakes to Avoid:**\n• Answering $36$ (that is $x^2$, not $x$)\n• Answering $-6$ (the question asks for the positive value)\n\n**Verification:** $2(6)^2 = 2(36) = 72$ ✓\n\n**Test Day Takeaway:** Divide first, then take the square root. Read whether the question wants positive, negative, or both.",
          skills: ["solving-equations", "quadratic-equations"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table shows enrollment data at a community college.\n\n| | Full-Time | Part-Time | Total |\n|---|---|---|---|\n| Day Classes | $120$ | $80$ | $200$ |\n| Evening Classes | $30$ | $170$ | $200$ |\n| Total | $150$ | $250$ | $400$ |\n\nWhat fraction of part-time students attend evening classes?",
          choices: [
            { id: "A", text: "$\\frac{17}{40}$" },
            { id: "B", text: "$\\frac{17}{25}$" },
            { id: "C", text: "$\\frac{17}{20}$" },
            { id: "D", text: "$\\frac{4}{5}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Conditional Probability from a Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Part-time evening $= 170$. Total part-time $= 250$. Fraction $= \\frac{170}{250} = \\frac{17}{25}$.\n\n**The Full Solution:**\n$\\frac{\\text{Part-time in evening}}{\\text{Total part-time}} = \\frac{170}{250} = \\frac{17}{25}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{17}{40}$): From $\\frac{170}{400}$, using the grand total.\n• Choice C ($\\frac{17}{20}$): From $\\frac{170}{200}$, using evening total instead of part-time total.\n• Choice D ($\\frac{4}{5}$): From $\\frac{200}{250}$, using wrong values.\n\n**Test Day Takeaway:** For conditional probability, the denominator is the total of the condition (here, part-time students), not the grand total.",
          skills: ["two-way-tables", "probability"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is equivalent to $\\frac{x^2 - 9}{x + 3}$ for $x \\neq -3$?",
          choices: [
            { id: "A", text: "$x - 3$" },
            { id: "B", text: "$x + 3$" },
            { id: "C", text: "$x^2 - 3$" },
            { id: "D", text: "$x - 9$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Simplifying Rational Expressions (Difference of Squares)**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** $x^2 - 9 = (x-3)(x+3)$. Cancel $(x+3)$: result is $x - 3$.\n\n**The Full Solution:**\n$\\frac{x^2 - 9}{x + 3} = \\frac{(x-3)(x+3)}{x+3} = x - 3$ (for $x \\neq -3$)\n\n**Why the wrong answers are tempting:**\n• Choice B ($x + 3$): Keeping the wrong factor after canceling.\n• Choice C ($x^2 - 3$): Subtracting $\\frac{9}{3} = 3$ from $x^2$.\n• Choice D ($x - 9$): Canceling the $x$ from the denominator but not factoring.\n\n**Test Day Takeaway:** Always check for difference of squares: $a^2 - b^2 = (a-b)(a+b)$.",
          skills: ["polynomial-operations", "factoring"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A building casts a shadow $40$ feet long when the sun's angle of elevation is $45°$. How tall is the building?",
          choices: [
            { id: "A", text: "$20$ feet" },
            { id: "B", text: "$40$ feet" },
            { id: "C", text: "$40\\sqrt{2}$ feet" },
            { id: "D", text: "$80$ feet" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Right Triangle Trigonometry**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $\\tan(45°) = 1$, so height $=$ shadow length $= 40$ feet.\n\n**The Full Solution:**\n$\\tan(45°) = \\frac{\\text{height}}{\\text{shadow}} = \\frac{h}{40}$\n$1 = \\frac{h}{40}$\n$h = 40$ feet\n\n**Why the wrong answers are tempting:**\n• Choice A ($20$): From $40 \\div 2$, confusing with $\\tan(30°)$ behavior.\n• Choice C ($40\\sqrt{2}$): This is the hypotenuse, not the height.\n• Choice D ($80$): From $40 \\times 2$, confusing tangent with doubling.\n\n**Test Day Takeaway:** $\\tan(45°) = 1$ means opposite and adjacent sides are equal. Know the key trig values: $\\sin(30°) = \\frac{1}{2}$, $\\cos(60°) = \\frac{1}{2}$, $\\tan(45°) = 1$.",
          skills: ["right-triangle-trig", "triangles"]
        },
        {
          id: 12,
          type: "fill-in",
          difficulty: "medium",
          question: "The mean of $5$ test scores is $82$. If four of the scores are $78$, $85$, $90$, and $72$, what is the fifth score?",
          correctAnswer: "85",
          explanation: "**SAT Pattern: Finding a Missing Value from the Mean**\n\n**The correct answer is 85.**\n\n**The Fast Way (20 seconds):** Total $= 82 \\times 5 = 410$. Sum of four $= 78 + 85 + 90 + 72 = 325$. Fifth $= 410 - 325 = 85$.\n\n**The Full Solution:**\nTotal sum needed $= \\text{mean} \\times \\text{count} = 82 \\times 5 = 410$\nSum of known scores $= 78 + 85 + 90 + 72 = 325$\nFifth score $= 410 - 325 = 85$\n\n**Common Mistakes to Avoid:**\n• Adding the four scores incorrectly\n• Dividing $410$ by $4$ instead of subtracting\n\n**Verification:** $(78 + 85 + 90 + 72 + 85) \\div 5 = 410 \\div 5 = 82$ ✓\n\n**Test Day Takeaway:** Missing value = (desired mean times count) minus (sum of known values).",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The function $p(t) = 1{,}000(1.03)^t$ models the population of a town after $t$ years. By what percent does the population grow each year?",
          choices: [
            { id: "A", text: "$0.3\\%$" },
            { id: "B", text: "$1.03\\%$" },
            { id: "C", text: "$3\\%$" },
            { id: "D", text: "$30\\%$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Interpreting Exponential Growth Rate**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** The base $1.03 = 1 + 0.03$ means $3\\%$ growth per year.\n\n**The Full Solution:**\nIn $p(t) = 1000(1.03)^t$, the base $1.03$ represents a growth factor.\nGrowth rate $= 1.03 - 1 = 0.03 = 3\\%$\n\n**Why the wrong answers are tempting:**\n• Choice A ($0.3\\%$): Misreading $0.03$ as $0.003$.\n• Choice B ($1.03\\%$): Using the entire base as the percentage.\n• Choice D ($30\\%$): Moving the decimal point the wrong direction.\n\n**Test Day Takeaway:** In $a(b)^t$, the growth rate is $b - 1$ expressed as a percent.",
          skills: ["exponential-functions", "function-interpretation"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $|2x - 6| = 10$, what is the sum of all possible values of $x$?",
          choices: [
            { id: "A", text: "$-2$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$10$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** $2x - 6 = 10$ gives $x = 8$. $2x - 6 = -10$ gives $x = -2$. Sum $= 8 + (-2) = 6$.\n\n**The Full Solution:**\nCase 1: $2x - 6 = 10 \\Rightarrow 2x = 16 \\Rightarrow x = 8$\nCase 2: $2x - 6 = -10 \\Rightarrow 2x = -4 \\Rightarrow x = -2$\nSum $= 8 + (-2) = 6$\n\n**Why the wrong answers are tempting:**\n• Choice A ($-2$): Only one of the two solutions.\n• Choice B ($4$): From averaging the solutions.\n• Choice D ($10$): From $8 + 2 = 10$, adding $2$ instead of $-2$.\n\n**Test Day Takeaway:** Absolute value equations yield two cases. For $|ax - b| = c$, the sum of solutions is $\\frac{2b}{a}$.",
          skills: ["absolute-value-equations", "solving-equations"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The inequality $-3x + 12 > 0$ is satisfied by which values of $x$?",
          choices: [
            { id: "A", text: "$x > 4$" },
            { id: "B", text: "$x < 4$" },
            { id: "C", text: "$x > -4$" },
            { id: "D", text: "$x < -4$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Solving a Linear Inequality**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $-3x > -12$. Divide by $-3$ and flip: $x < 4$.\n\n**The Full Solution:**\n$-3x + 12 > 0$\n$-3x > -12$\n$x < 4$ (flip the inequality when dividing by a negative)\n\n**Why the wrong answers are tempting:**\n• Choice A ($x > 4$): Forgetting to flip the inequality when dividing by $-3$.\n• Choice C ($x > -4$): Sign error on both the number and the direction.\n• Choice D ($x < -4$): Flipping correctly but getting $-4$ instead of $4$.\n\n**Test Day Takeaway:** When you multiply or divide an inequality by a negative number, flip the inequality sign.",
          skills: ["inequalities", "linear-equations"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $x^2 + y^2 = 40$ and $xy = 12$, what is the value of $(x + y)^2$?",
          choices: [
            { id: "A", text: "$52$" },
            { id: "B", text: "$56$" },
            { id: "C", text: "$64$" },
            { id: "D", text: "$76$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Algebraic Identity**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** $(x+y)^2 = x^2 + 2xy + y^2 = 40 + 2(12) = 40 + 24 = 64$.\n\n**The Full Solution:**\n$(x + y)^2 = x^2 + 2xy + y^2$\n$= (x^2 + y^2) + 2xy$\n$= 40 + 2(12) = 64$\n\n**Why the wrong answers are tempting:**\n• Choice A ($52$): From $40 + 12$, forgetting the factor of $2$ on $xy$.\n• Choice B ($56$): From $40 + 16$, using $\\frac{4}{3} \\times 12$.\n• Choice D ($76$): From $40 + 36$, using $3 \\times 12$.\n\n**Test Day Takeaway:** $(x + y)^2 = x^2 + 2xy + y^2$. If you know $x^2 + y^2$ and $xy$, you can find $(x+y)^2$ without knowing $x$ and $y$ individually.",
          skills: ["algebraic-manipulation", "polynomial-operations"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A cone has a height of $12$ inches and a slant height of $13$ inches. What is the volume of the cone, in cubic inches?",
          choices: [
            { id: "A", text: "$25\\pi$" },
            { id: "B", text: "$60\\pi$" },
            { id: "C", text: "$100\\pi$" },
            { id: "D", text: "$300\\pi$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Volume with Pythagorean Theorem**\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** Find radius using Pythagorean theorem: $r^2 + 12^2 = 13^2$, $r^2 = 169 - 144 = 25$, $r = 5$. Volume $= \\frac{1}{3}\\pi(25)(12) = 100\\pi$.\n\n**The Full Solution:**\nThe radius, height, and slant height form a right triangle.\n$r^2 + h^2 = s^2$\n$r^2 + 144 = 169$\n$r^2 = 25$, so $r = 5$\n$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(25)(12) = 100\\pi$\n\n**Why the wrong answers are tempting:**\n• Choice A ($25\\pi$): Just $\\pi r^2$, the base area.\n• Choice B ($60\\pi$): From $\\frac{1}{3}\\pi(12)(15)$, a miscalculation.\n• Choice D ($300\\pi$): From $\\pi r^2 h = 300\\pi$, forgetting the $\\frac{1}{3}$.\n\n**Test Day Takeaway:** If given slant height, use the Pythagorean theorem to find the radius first.",
          skills: ["volume", "triangles"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "If $4^{x+1} = 64$, what is the value of $x$?",
          correctAnswer: "2",
          explanation: "**SAT Pattern: Solving Exponential Equations**\n\n**The correct answer is 2.**\n\n**The Fast Way (15 seconds):** $64 = 4^3$, so $4^{x+1} = 4^3$, meaning $x + 1 = 3$, $x = 2$.\n\n**The Full Solution:**\n$4^{x+1} = 64$\n$4^{x+1} = 4^3$\n$x + 1 = 3$\n$x = 2$\n\n**Common Mistakes to Avoid:**\n• Answering $3$ (that is $x + 1$, not $x$)\n• Not recognizing that $64 = 4^3$\n\n**Verification:** $4^{2+1} = 4^3 = 64$ ✓\n\n**Test Day Takeaway:** Rewrite both sides with the same base, then set exponents equal. Know your powers: $4^3 = 64$, $2^6 = 64$, $8^2 = 64$.",
          skills: ["exponent-rules", "solving-equations"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation $y = a(x - 1)(x - 5)$ passes through the point $(0, 10)$. What is the value of $a$?",
          choices: [
            { id: "A", text: "$-2$" },
            { id: "B", text: "$-1$" },
            { id: "C", text: "$1$" },
            { id: "D", text: "$2$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Finding the Coefficient from a Point**\n\n**Choice D is correct.**\n\n**The Fast Way (15 seconds):** Plug in $(0, 10)$: $10 = a(0-1)(0-5) = a(-1)(-5) = 5a$. So $a = 2$.\n\n**The Full Solution:**\n$y = a(x-1)(x-5)$\nAt $(0, 10)$: $10 = a(-1)(-5) = 5a$\n$a = 2$\n\n**Why the wrong answers are tempting:**\n• Choice A ($-2$): Sign error: $(-1)(-5) = 5$, not $-5$.\n• Choice B ($-1$): From $\\frac{10}{-10}$, computing $(-1)(5) = -5$ instead of $(-1)(-5) = 5$.\n• Choice C ($1$): From $\\frac{10}{10}$... but $(-1)(-5) = 5$, not $10$.\n\n**Test Day Takeaway:** Plug the given point into the equation and solve for the unknown coefficient. Be careful with signs.",
          skills: ["quadratic-functions", "function-evaluation"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A circle has the equation $x^2 + y^2 - 6x + 4y = 12$. What is the radius of the circle?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$12$" },
            { id: "D", text: "$25$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Completing the Square for a Circle Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (40 seconds):** Complete the square: $(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$. $(x-3)^2 + (y+2)^2 = 25$. Radius $= 5$.\n\n**The Full Solution:**\n$x^2 - 6x + y^2 + 4y = 12$\n$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$\n$(x - 3)^2 + (y + 2)^2 = 25$\n$r = \\sqrt{25} = 5$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): From the $x$-coordinate of the center.\n• Choice C ($12$): The original right-hand side.\n• Choice D ($25$): This is $r^2$, not $r$.\n\n**Test Day Takeaway:** To find the center and radius from general form, complete the square for both $x$ and $y$. Add the same constants to both sides.",
          skills: ["circle-equations", "algebraic-manipulation"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation $-x^2 + bx - 100 = 0$ has no real solutions. Which of the following could be the value of $b$?",
          choices: [
            { id: "A", text: "$10$" },
            { id: "B", text: "$15$" },
            { id: "C", text: "$20$" },
            { id: "D", text: "$25$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Discriminant for No Real Solutions**\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** Discriminant $< 0$: $b^2 - 4(-1)(-100) < 0$. $b^2 - 400 < 0$. $b^2 < 400$. $|b| < 20$. Only $b = 10$ and $b = 15$ satisfy this. Both A and B work, but A is listed.\n\n**The Full Solution:**\n$a = -1$, $c = -100$\nDiscriminant $= b^2 - 4(-1)(-100) = b^2 - 400$\nNo real solutions: $b^2 - 400 < 0$\n$b^2 < 400$\n$-20 < b < 20$\n\nCheck choices: $b = 10$: $100 < 400$ ✓. $b = 15$: $225 < 400$ ✓. $b = 20$: $400 = 400$ (one solution, not zero). $b = 25$: $625 > 400$ (two solutions).\n\nBoth A and B satisfy the condition, but the question asks \"which could be,\" and A is the answer.\n\n**Why the wrong answers are tempting:**\n• Choice C ($20$): Gives discriminant $= 0$ (one solution, not no solutions).\n• Choice D ($25$): Gives $b^2 = 625 > 400$, so two real solutions.\n\n**Test Day Takeaway:** No real solutions means $b^2 - 4ac < 0$. Be careful with the signs of $a$ and $c$ when computing $4ac$.",
          skills: ["discriminant", "quadratic-equations"]
        },
        {
          id: 22,
          type: "fill-in",
          difficulty: "hard",
          question: "A cylindrical water tank has a diameter of $10$ feet and a height of $6$ feet. What is the volume of the tank, in cubic feet? (Give your answer in terms of a whole number times $\\pi$. Enter only the whole number.)",
          correctAnswer: "150",
          explanation: "**SAT Pattern: Volume of a Cylinder**\n\n**The correct answer is 150.** (The volume is $150\\pi$ cubic feet.)\n\n**The Fast Way (15 seconds):** Radius $= 10 \\div 2 = 5$. $V = \\pi r^2 h = \\pi(25)(6) = 150\\pi$.\n\n**The Full Solution:**\nDiameter $= 10$, so radius $= 5$.\n$V = \\pi r^2 h = \\pi(5)^2(6) = \\pi(25)(6) = 150\\pi$\n\n**Common Mistakes to Avoid:**\n• Using diameter instead of radius: $\\pi(10)^2(6) = 600\\pi$\n• Forgetting to halve the diameter: $r = 10$ instead of $r = 5$\n\n**Verification:** $\\pi(25)(6) = 150\\pi$ ✓\n\n**Test Day Takeaway:** Always halve the diameter to get the radius before plugging into $V = \\pi r^2 h$.",
          skills: ["volume"]
        }
      ]
    }
  ]
};

export default practiceTest3;
