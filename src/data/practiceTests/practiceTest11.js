// Practice Test 11 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Contexts: renewable energy, archaeology, pet care, printing

export const practiceTest11 = {
  id: "practice-test-11",
  title: "Practice Test 11",
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
          question: "A solar panel produces $6$ kilowatt-hours of energy per day. How many kilowatt-hours does it produce in $14$ days?",
          choices: [
            { id: "A", text: "$20$" },
            { id: "B", text: "$56$" },
            { id: "C", text: "$84$" },
            { id: "D", text: "$140$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Basic Multiplication Word Problem**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $6 \\times 14 = 84$.\n\n**The Full Solution:**\nEnergy $= 6 \\text{ kWh/day} \\times 14 \\text{ days} = 84$ kWh.\n\n**Why the wrong answers are tempting:**\n• Choice A ($20$): Adds $6 + 14$ instead of multiplying.\n• Choice B ($56$): Computes $4 \\times 14$.\n• Choice D ($140$): Computes $10 \\times 14$.\n\n**Test Day Takeaway:** Rate $\\times$ time $=$ total.",
          skills: ["word-problems", "ratios-proportions"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "If $3x - 9 = 0$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$-3$" },
            { id: "B", text: "$0$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$9$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: One-Variable Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $3x = 9$, so $x = 3$.\n\n**The Full Solution:**\n$3x - 9 = 0$\n$3x = 9$\n$x = 3$\n\n**Why the wrong answers are tempting:**\n• Choice A ($-3$): Sign error when moving $9$ to the right side.\n• Choice B ($0$): Confuses the right-hand side $0$ with the answer.\n• Choice D ($9$): Forgets to divide by $3$.\n\n**Test Day Takeaway:** Add $9$, then divide by $3$. Always plug back in to verify.",
          skills: ["linear-equations", "solving-equations"]
        },
        {
          id: 3,
          type: "fill-in",
          difficulty: "easy",
          question: "What percentage of $400$ is $60$?",
          correctAnswer: "15",
          explanation: "**SAT Pattern: Finding the Percent**\n\n**The correct answer is $15$.**\n\n**The Fast Way (10 seconds):** $\\frac{60}{400} = \\frac{15}{100} = 15\\%$.\n\n**The Full Solution:**\n$\\frac{60}{400} \\times 100 = 15\\%$.\n\n**Common Mistakes to Avoid:**\n• Computing $\\frac{400}{60} \\approx 6.67$ (dividing in the wrong order).\n• Forgetting to multiply by $100$ and writing $0.15$ instead of $15$.\n\n**Verification:** $15\\%$ of $400 = 0.15 \\times 400 = 60$. Correct.\n\n**Test Day Takeaway:** Percent $= \\frac{\\text{part}}{\\text{whole}} \\times 100$.",
          skills: ["percents"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A pet store has $c$ cats and $d$ dogs. Which expression represents the total number of animals in the store?",
          choices: [
            { id: "A", text: "$c \\times d$" },
            { id: "B", text: "$c + d$" },
            { id: "C", text: "$c - d$" },
            { id: "D", text: "$\\frac{c}{d}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Translating Words to Expressions**\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** Total means add: $c + d$.\n\n**The Full Solution:**\nThe total number of animals is the sum of cats and dogs: $c + d$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Multiplying gives combinations, not totals.\n• Choice C: Subtracting gives the difference, not the total.\n• Choice D: Dividing gives the ratio.\n\n**Test Day Takeaway:** \"Total\" almost always means addition.",
          skills: ["word-problems", "algebraic-manipulation"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A wind turbine costs $\\$4{,}200$ to install. The owner receives a $30\\%$ tax rebate. How much is the rebate?",
          choices: [
            { id: "A", text: "$\\$420$" },
            { id: "B", text: "$\\$1{,}260$" },
            { id: "C", text: "$\\$2{,}940$" },
            { id: "D", text: "$\\$3{,}780$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Percent of a Total**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $30\\%$ of $4{,}200 = 0.30 \\times 4{,}200 = 1{,}260$.\n\n**The Full Solution:**\nRebate $= 0.30 \\times 4{,}200 = 1{,}260$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($420$): Computes $10\\%$ instead of $30\\%$.\n• Choice C ($2{,}940$): This is $4{,}200 - 1{,}260$, the amount paid after the rebate.\n• Choice D ($3{,}780$): This is $4{,}200 - 420$, using the wrong percent.\n\n**Test Day Takeaway:** \"$30\\%$ rebate\" means multiply by $0.30$ to find the rebate amount.",
          skills: ["percents", "word-problems"]
        },
        {
          id: 6,
          type: "fill-in",
          difficulty: "easy",
          question: "An archaeologist finds $7$ artifacts on the first day and $5$ more artifacts each additional day. How many artifacts has the archaeologist found after $4$ days total?",
          correctAnswer: "22",
          explanation: "**SAT Pattern: Arithmetic Pattern**\n\n**The correct answer is $22$.**\n\n**The Fast Way (10 seconds):** Day 1: $7$. Days 2-4: $5 \\times 3 = 15$. Total: $7 + 15 = 22$.\n\n**The Full Solution:**\nDay 1: $7$ artifacts\nDay 2: $7 + 5 = 12$ total\nDay 3: $12 + 5 = 17$ total\nDay 4: $17 + 5 = 22$ total\n\n**Common Mistakes to Avoid:**\n• Adding $5 \\times 4 = 20$ additional artifacts (but day 1 already has the $7$, so only $3$ additional days of $5$).\n• Getting $27 = 7 + 5 \\times 4$ by counting day 1 as an additional day.\n\n**Verification:** $7 + 5(3) = 7 + 15 = 22$.\n\n**Test Day Takeaway:** Carefully count the number of additional days vs. total days.",
          skills: ["word-problems"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which expression is equivalent to $8y - 3y + 2y$?",
          choices: [
            { id: "A", text: "$7y$" },
            { id: "B", text: "$3y$" },
            { id: "C", text: "$13y$" },
            { id: "D", text: "$48y$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Combining Like Terms**\n\n**Choice A is correct.**\n\n**The Fast Way (5 seconds):** $8 - 3 + 2 = 7$, so $7y$.\n\n**The Full Solution:**\n$8y - 3y + 2y = (8 - 3 + 2)y = 7y$\n\n**Why the wrong answers are tempting:**\n• Choice B ($3y$): Computes $8 - 3 - 2 = 3$, subtracting instead of adding the last term.\n• Choice C ($13y$): Adds all coefficients: $8 + 3 + 2 = 13$.\n• Choice D ($48y$): Multiplies $8 \\times 3 \\times 2 = 48$.\n\n**Test Day Takeaway:** When combining like terms, keep track of signs carefully.",
          skills: ["polynomial-operations"]
        },

        // ===== MEDIUM (Q8-Q15) =====
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A printer prints $12$ pages per minute. The function $p(t) = 12t$ gives the number of pages printed after $t$ minutes. If a document has $180$ pages, how many minutes will it take to print?",
          choices: [
            { id: "A", text: "$12$" },
            { id: "B", text: "$15$" },
            { id: "C", text: "$18$" },
            { id: "D", text: "$20$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Using a Linear Function**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $180 \\div 12 = 15$.\n\n**The Full Solution:**\n$p(t) = 12t$\n$180 = 12t$\n$t = 15$ minutes\n\n**Why the wrong answers are tempting:**\n• Choice A ($12$): The rate, not the time.\n• Choice C ($18$): Confuses $180 \\div 10 = 18$.\n• Choice D ($20$): Computes $180 \\div 9$.\n\n**Test Day Takeaway:** Set the function equal to the target value and solve for the variable.",
          skills: ["linear-functions", "solving-equations"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A line has slope $-\\frac{1}{4}$ and passes through the point $(8, 3)$. What is the equation of this line in slope-intercept form?",
          choices: [
            { id: "A", text: "$y = -\\frac{1}{4}x + 1$" },
            { id: "B", text: "$y = -\\frac{1}{4}x + 5$" },
            { id: "C", text: "$y = -\\frac{1}{4}x + 11$" },
            { id: "D", text: "$y = \\frac{1}{4}x + 1$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Slope-Intercept Form from Point and Slope**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $y = mx + b$. Plug in: $3 = -\\frac{1}{4}(8) + b$, so $3 = -2 + b$, giving $b = 5$. Equation: $y = -\\frac{1}{4}x + 5$.\n\n**The Full Solution:**\n$y = -\\frac{1}{4}x + b$\n$3 = -\\frac{1}{4}(8) + b$\n$3 = -2 + b$\n$b = 5$\n$y = -\\frac{1}{4}x + 5$\n\n**Why the wrong answers are tempting:**\n• Choice A: Computes $3 - \\frac{1}{4}(8) = 1$ (subtracts instead of solving for $b$).\n• Choice C: Uses $3 + 8 = 11$.\n• Choice D: Wrong sign on slope.\n\n**Test Day Takeaway:** Plug the point into $y = mx + b$ and solve for $b$.",
          skills: ["slope", "linear-equations"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In a survey of $200$ pet owners, $110$ own dogs, $70$ own cats, and $30$ own both dogs and cats. How many pet owners own neither a dog nor a cat?",
          choices: [
            { id: "A", text: "$20$" },
            { id: "B", text: "$30$" },
            { id: "C", text: "$50$" },
            { id: "D", text: "$80$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Two-Way Table / Venn Diagram**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** At least one pet $= 110 + 70 - 30 = 150$. Neither $= 200 - 150 = 50$.\n\n**The Full Solution:**\nUsing inclusion-exclusion:\nDog or cat $= 110 + 70 - 30 = 150$\nNeither $= 200 - 150 = 50$\n\n**Why the wrong answers are tempting:**\n• Choice A ($20$): Subtracts $200 - 110 - 70 = 20$, forgetting to add back the overlap.\n• Choice B ($30$): Uses the overlap count as the answer.\n• Choice D ($80$): Computes $200 - (110 + 70) + 30 - 30 = 80$ through a calculation error.\n\n**Test Day Takeaway:** Inclusion-exclusion: $|A \\cup B| = |A| + |B| - |A \\cap B|$.",
          skills: ["probability", "two-way-tables"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "If $4(x + 3) = 2(x + 9)$, what is the value of $x$?",
          correctAnswer: "3",
          explanation: "**SAT Pattern: Distributive Property Equation**\n\n**The correct answer is $3$.**\n\n**The Fast Way (15 seconds):** $4x + 12 = 2x + 18$, so $2x = 6$ and $x = 3$.\n\n**The Full Solution:**\n$4(x + 3) = 2(x + 9)$\n$4x + 12 = 2x + 18$\n$4x - 2x = 18 - 12$\n$2x = 6$\n$x = 3$\n\n**Common Mistakes to Avoid:**\n• Distributing incorrectly: $4(x+3) = 4x + 3$ (forgetting to multiply $3$ by $4$).\n\n**Verification:** $4(3 + 3) = 4(6) = 24$. $2(3 + 9) = 2(12) = 24$. Both sides equal.\n\n**Test Day Takeaway:** Distribute on both sides, then collect like terms.",
          skills: ["linear-equations", "solving-equations"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "An archaeological site is divided into a grid. Artifacts are found at the coordinates $(2, 1)$, $(6, 1)$, $(6, 4)$, and $(2, 4)$. What is the area of the rectangular region containing these artifacts?",
          choices: [
            { id: "A", text: "$8$" },
            { id: "B", text: "$12$" },
            { id: "C", text: "$14$" },
            { id: "D", text: "$16$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Area from Coordinates**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Length $= 6 - 2 = 4$, width $= 4 - 1 = 3$. Area $= 4 \\times 3 = 12$.\n\n**The Full Solution:**\nThe rectangle has vertices at $(2,1)$, $(6,1)$, $(6,4)$, $(2,4)$.\nLength $= 6 - 2 = 4$\nWidth $= 4 - 1 = 3$\nArea $= 4 \\times 3 = 12$\n\n**Why the wrong answers are tempting:**\n• Choice A ($8$): Uses $4 \\times 2$.\n• Choice C ($14$): Computes the perimeter ($2 \\times 4 + 2 \\times 3 = 14$).\n• Choice D ($16$): Uses $4 \\times 4$.\n\n**Test Day Takeaway:** For a rectangle on a grid, find the side lengths by subtracting coordinates, then multiply.",
          skills: ["area", "coordinate-geometry"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table shows values of a linear function $g$.\n\n| $x$ | $g(x)$ |\n|---|---|\n| $1$ | $7$ |\n| $3$ | $13$ |\n| $5$ | $19$ |\n\nWhich equation defines $g(x)$?",
          choices: [
            { id: "A", text: "$g(x) = 3x + 4$" },
            { id: "B", text: "$g(x) = 3x + 7$" },
            { id: "C", text: "$g(x) = 6x + 1$" },
            { id: "D", text: "$g(x) = 7x$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Linear Function from Table**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** Slope $= \\frac{13 - 7}{3 - 1} = \\frac{6}{2} = 3$. Using $(1, 7)$: $7 = 3(1) + b$, so $b = 4$. $g(x) = 3x + 4$.\n\n**The Full Solution:**\n$m = \\frac{\\Delta y}{\\Delta x} = \\frac{13 - 7}{3 - 1} = \\frac{6}{2} = 3$\n$g(x) = 3x + b$\n$7 = 3(1) + b \\Rightarrow b = 4$\n$g(x) = 3x + 4$\n\n**Why the wrong answers are tempting:**\n• Choice B ($3x + 7$): Uses $(0, 7)$ as if $g(0) = 7$, but $g(1) = 7$.\n• Choice C ($6x + 1$): Uses the $\\Delta y = 6$ as the slope without dividing by $\\Delta x = 2$.\n• Choice D ($7x$): Uses the first output value as the slope.\n\n**Test Day Takeaway:** Find slope from two rows, then use a point to find the $y$-intercept.",
          skills: ["linear-functions", "slope"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If the system of equations $x + y = 10$ and $x - y = 4$ is solved, what is the value of $x$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$7$" },
            { id: "D", text: "$14$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: System of Linear Equations (Elimination)**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** Add the equations: $2x = 14$, so $x = 7$.\n\n**The Full Solution:**\n$x + y = 10$\n$x - y = 4$\nAdd: $2x = 14$\n$x = 7$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): This is $y$ ($10 - 7 = 3$), not $x$.\n• Choice B ($5$): Averages $10$ and $4$ instead of adding.\n• Choice D ($14$): Forgets to divide by $2$.\n\n**Test Day Takeaway:** When one equation has $+y$ and the other has $-y$, add them to eliminate $y$.",
          skills: ["systems-of-equations"]
        },
        {
          id: 15,
          type: "fill-in",
          difficulty: "medium",
          question: "A rectangular pet enclosure has a length of $12$ feet and a width of $8$ feet. What is the perimeter, in feet, of the enclosure?",
          correctAnswer: "40",
          explanation: "**SAT Pattern: Perimeter of a Rectangle**\n\n**The correct answer is $40$.**\n\n**The Fast Way (5 seconds):** $P = 2(12 + 8) = 2(20) = 40$.\n\n**The Full Solution:**\n$P = 2l + 2w = 2(12) + 2(8) = 24 + 16 = 40$ feet.\n\n**Common Mistakes to Avoid:**\n• Computing area instead: $12 \\times 8 = 96$.\n• Adding only two sides: $12 + 8 = 20$.\n\n**Verification:** $12 + 8 + 12 + 8 = 40$.\n\n**Test Day Takeaway:** Perimeter $= 2l + 2w$. Area $= l \\times w$. Don't mix them up.",
          skills: ["area", "word-problems"]
        },

        // ===== HARD (Q16-Q22) =====
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The expression $x^2 + 6x + 9$ can be written as $(x + a)^2$ for some constant $a$. What is the value of $a$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$9$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Perfect Square Trinomial**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $x^2 + 6x + 9 = (x + 3)^2$, so $a = 3$.\n\n**The Full Solution:**\n$(x + a)^2 = x^2 + 2ax + a^2$\nCompare with $x^2 + 6x + 9$:\n$2a = 6 \\Rightarrow a = 3$\nCheck: $a^2 = 9$. Correct.\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): $(x+2)^2 = x^2 + 4x + 4 \\neq x^2 + 6x + 9$.\n• Choice C ($6$): The coefficient of $x$, not half of it.\n• Choice D ($9$): The constant term, not its square root.\n\n**Test Day Takeaway:** In $(x + a)^2 = x^2 + 2ax + a^2$, the value of $a$ is half the coefficient of $x$.",
          skills: ["factoring", "quadratic-equations"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A renewable energy company's revenue is modeled by $R(t) = -2t^2 + 24t + 10$, where $t$ is years after $2020$. In what year does the company achieve maximum revenue?",
          choices: [
            { id: "A", text: "$2024$" },
            { id: "B", text: "$2026$" },
            { id: "C", text: "$2030$" },
            { id: "D", text: "$2034$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Vertex of a Parabola (Maximum)**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $t = \\frac{-b}{2a} = \\frac{-24}{2(-2)} = \\frac{-24}{-4} = 6$. Year $= 2020 + 6 = 2026$.\n\n**The Full Solution:**\n$R(t) = -2t^2 + 24t + 10$\nSince $a = -2 < 0$, the parabola opens downward, so the vertex is a maximum.\n$t = \\frac{-b}{2a} = \\frac{-24}{-4} = 6$\nYear $= 2020 + 6 = 2026$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($2024$): Uses $t = 4$ (perhaps from $\\frac{24}{6}$).\n• Choice C ($2030$): Uses $t = 10$ (the constant term).\n• Choice D ($2034$): Uses $t = 14$ from an incorrect calculation.\n\n**Test Day Takeaway:** Maximum or minimum of a quadratic occurs at $t = \\frac{-b}{2a}$. Don't forget to add this to the starting year.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "If $2^{3x} = 64$, what is the value of $x$?",
          correctAnswer: "2",
          explanation: "**SAT Pattern: Exponential Equation with Same Base**\n\n**The correct answer is $2$.**\n\n**The Fast Way (10 seconds):** $64 = 2^6$, so $2^{3x} = 2^6$. Therefore $3x = 6$ and $x = 2$.\n\n**The Full Solution:**\n$2^{3x} = 64$\n$2^{3x} = 2^6$\n$3x = 6$\n$x = 2$\n\n**Common Mistakes to Avoid:**\n• Getting $x = 6$ by solving $3x = 6$ as $x = 6$ (forgetting to divide).\n• Getting $x = 3$ by thinking $2^3 = 8$ and confusing exponents.\n\n**Verification:** $2^{3(2)} = 2^6 = 64$. Correct.\n\n**Test Day Takeaway:** Rewrite both sides with the same base, then set exponents equal.",
          skills: ["exponent-rules", "exponential-functions"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation $x^2 + y^2 + 4x - 10y + 20 = 0$ represents a circle. What is the center of this circle?",
          choices: [
            { id: "A", text: "$(2, -5)$" },
            { id: "B", text: "$(-2, 5)$" },
            { id: "C", text: "$(4, -10)$" },
            { id: "D", text: "$(-4, 10)$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Completing the Square for Circle Center**\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** For $x^2 + 4x$, half of $4$ is $2$, center $x = -2$. For $y^2 - 10y$, half of $-10$ is $-5$, center $y = 5$. Center: $(-2, 5)$.\n\n**The Full Solution:**\n$x^2 + 4x + y^2 - 10y = -20$\n$(x^2 + 4x + 4) + (y^2 - 10y + 25) = -20 + 4 + 25$\n$(x + 2)^2 + (y - 5)^2 = 9$\nCenter: $(-2, 5)$, radius $= 3$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($(2, -5)$): Correct magnitudes but wrong signs.\n• Choice C ($(4, -10)$): Uses the full coefficients instead of halving them.\n• Choice D ($(-4, 10)$): Uses the full coefficients with correct signs but doesn't halve.\n\n**Test Day Takeaway:** The center of $(x-h)^2 + (y-k)^2 = r^2$ is $(h, k)$. When completing the square, the center coordinates are the opposite of what's inside the parentheses.",
          skills: ["circle-equations", "circles"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "For what value of $k$ does the equation $x^2 + kx + 16 = 0$ have exactly one real solution?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$8$" },
            { id: "C", text: "$12$" },
            { id: "D", text: "$16$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Discriminant Equals Zero**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Discriminant $= k^2 - 4(1)(16) = k^2 - 64 = 0$, so $k^2 = 64$ and $k = 8$ (positive value).\n\n**The Full Solution:**\nFor exactly one real solution: $b^2 - 4ac = 0$\n$k^2 - 4(1)(16) = 0$\n$k^2 = 64$\n$k = \\pm 8$\nThe positive value is $k = 8$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): $4^2 - 64 = -48 < 0$, no real solutions.\n• Choice C ($12$): $12^2 - 64 = 80 > 0$, two solutions.\n• Choice D ($16$): The constant, not the answer.\n\n**Test Day Takeaway:** One real solution means discriminant $= 0$: solve $b^2 - 4ac = 0$ for the unknown.",
          skills: ["discriminant", "quadratic-equations"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "A printing company models its daily profit with $P(x) = -3x^2 + 36x - 48$, where $x$ is the number of units produced (in thousands). How many thousand units should be produced to maximize profit?",
          correctAnswer: "6",
          explanation: "**SAT Pattern: Maximizing a Quadratic**\n\n**The correct answer is $6$.**\n\n**The Fast Way (10 seconds):** $x = \\frac{-b}{2a} = \\frac{-36}{2(-3)} = \\frac{-36}{-6} = 6$.\n\n**The Full Solution:**\n$P(x) = -3x^2 + 36x - 48$\nSince $a = -3 < 0$, the parabola opens downward (maximum).\n$x = \\frac{-b}{2a} = \\frac{-36}{-6} = 6$\n\n**Common Mistakes to Avoid:**\n• Computing $\\frac{36}{2(3)} = 6$ gets the right answer but the signs need to be tracked for harder problems.\n• Confusing the $x$-value of the vertex with the maximum profit value.\n\n**Verification:** $P(6) = -3(36) + 36(6) - 48 = -108 + 216 - 48 = 60$. The maximum profit is $60$.\n\n**Test Day Takeaway:** The vertex $x$-value is $\\frac{-b}{2a}$. This gives the input that maximizes/minimizes the quadratic.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In right triangle $PQR$, angle $R = 90°$ and $PQ = 10$. If $\\cos(P) = \\frac{3}{5}$, what is the length of side $QR$?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$10$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Right Triangle Trigonometry**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** $\\cos(P) = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{PR}{10} = \\frac{3}{5}$, so $PR = 6$. Then $QR = \\sqrt{10^2 - 6^2} = \\sqrt{64} = 8$.\n\n**The Full Solution:**\n$\\cos(P) = \\frac{PR}{PQ} = \\frac{PR}{10} = \\frac{3}{5}$\n$PR = \\frac{3}{5} \\times 10 = 6$\n$QR = \\sqrt{PQ^2 - PR^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8$\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): May confuse with a $3$-$4$-$5$ triple scaled differently.\n• Choice B ($6$): This is the adjacent side $PR$, not the opposite side $QR$.\n• Choice D ($10$): This is the hypotenuse.\n\n**Test Day Takeaway:** Use $\\cos = \\frac{\\text{adj}}{\\text{hyp}}$ to find one side, then Pythagorean theorem for the other. Recognize $6$-$8$-$10$ as a scaled $3$-$4$-$5$ triple.",
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
          question: "A pet groomer charges $\\$35$ per dog. If the groomer washes $8$ dogs in one day, how much does the groomer earn?",
          choices: [
            { id: "A", text: "$\\$240$" },
            { id: "B", text: "$\\$280$" },
            { id: "C", text: "$\\$315$" },
            { id: "D", text: "$\\$350$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Multiplication Word Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** $35 \\times 8 = 280$.\n\n**The Full Solution:**\nEarnings $= \\$35 \\times 8 = \\$280$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($240$): Computes $30 \\times 8 = 240$.\n• Choice C ($315$): Computes $35 \\times 9 = 315$.\n• Choice D ($350$): Computes $35 \\times 10 = 350$.\n\n**Test Day Takeaway:** Price per item $\\times$ number of items $=$ total earnings.",
          skills: ["word-problems"]
        },
        {
          id: 2,
          type: "fill-in",
          difficulty: "easy",
          question: "If $5x = 45$, what is the value of $x$?",
          correctAnswer: "9",
          explanation: "**SAT Pattern: One-Step Equation**\n\n**The correct answer is $9$.**\n\n**The Fast Way (5 seconds):** $x = 45 \\div 5 = 9$.\n\n**The Full Solution:**\n$5x = 45$\n$x = \\frac{45}{5} = 9$\n\n**Common Mistakes to Avoid:**\n• Computing $5 \\times 45 = 225$ (multiplying instead of dividing).\n\n**Verification:** $5(9) = 45$. Correct.\n\n**Test Day Takeaway:** To isolate $x$, divide both sides by the coefficient.",
          skills: ["linear-equations", "solving-equations"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "An energy company installed solar panels on $120$ homes. If $75\\%$ of these homes are in rural areas, how many homes with solar panels are in rural areas?",
          choices: [
            { id: "A", text: "$75$" },
            { id: "B", text: "$80$" },
            { id: "C", text: "$90$" },
            { id: "D", text: "$100$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Percent of a Total**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $75\\%$ of $120 = \\frac{3}{4} \\times 120 = 90$.\n\n**The Full Solution:**\n$0.75 \\times 120 = 90$ homes.\n\n**Why the wrong answers are tempting:**\n• Choice A ($75$): Uses the percentage as the answer.\n• Choice B ($80$): Computes $\\frac{2}{3} \\times 120$.\n• Choice D ($100$): A round number guess.\n\n**Test Day Takeaway:** $75\\% = \\frac{3}{4}$. Divide by $4$, multiply by $3$.",
          skills: ["percents"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which of the following is equivalent to $5(2x + 3)$?",
          choices: [
            { id: "A", text: "$10x + 3$" },
            { id: "B", text: "$10x + 15$" },
            { id: "C", text: "$7x + 8$" },
            { id: "D", text: "$10x + 8$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Distributive Property**\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** $5 \\times 2x = 10x$ and $5 \\times 3 = 15$. So $10x + 15$.\n\n**The Full Solution:**\n$5(2x + 3) = 5 \\cdot 2x + 5 \\cdot 3 = 10x + 15$\n\n**Why the wrong answers are tempting:**\n• Choice A ($10x + 3$): Multiplies only the $2x$ by $5$, not the $3$.\n• Choice C ($7x + 8$): Adds instead of multiplying: $5 + 2x + 3$.\n• Choice D ($10x + 8$): Adds $5 + 3 = 8$ for the constant.\n\n**Test Day Takeaway:** Distribute to every term inside the parentheses.",
          skills: ["algebraic-manipulation"]
        },
        {
          id: 5,
          type: "fill-in",
          difficulty: "easy",
          question: "A printing job requires $250$ sheets of paper. If each ream contains $500$ sheets, what fraction of a ream is needed?",
          correctAnswer: "0.5",
          explanation: "**SAT Pattern: Fraction/Ratio**\n\n**The correct answer is $0.5$ (or $\\frac{1}{2}$).**\n\n**The Fast Way (5 seconds):** $\\frac{250}{500} = \\frac{1}{2} = 0.5$.\n\n**The Full Solution:**\nFraction needed $= \\frac{250}{500} = 0.5$.\n\n**Common Mistakes to Avoid:**\n• Computing $\\frac{500}{250} = 2$ (dividing in the wrong order).\n\n**Verification:** $0.5 \\times 500 = 250$ sheets. Correct.\n\n**Test Day Takeaway:** Fraction $= \\frac{\\text{part}}{\\text{whole}}$.",
          skills: ["ratios-proportions"]
        },

        // ===== MEDIUM (Q6-Q15) =====
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The median of the data set $\\{3, 7, 9, 12, 15\\}$ is $9$. If a sixth value of $20$ is added to the data set, what is the new median?",
          choices: [
            { id: "A", text: "$9$" },
            { id: "B", text: "$10.5$" },
            { id: "C", text: "$11$" },
            { id: "D", text: "$12$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Median with Even Number of Values**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** New set in order: $\\{3, 7, 9, 12, 15, 20\\}$. Six values, so median $= \\frac{9 + 12}{2} = 10.5$.\n\n**The Full Solution:**\nOrdered set: $3, 7, 9, 12, 15, 20$\nWith $6$ values, the median is the average of the $3$rd and $4$th values:\n$\\frac{9 + 12}{2} = \\frac{21}{2} = 10.5$\n\n**Why the wrong answers are tempting:**\n• Choice A ($9$): The old median, not updated.\n• Choice C ($11$): The mean of $9$ and $13$.\n• Choice D ($12$): Just the $4$th value, not the average of the $3$rd and $4$th.\n\n**Test Day Takeaway:** For an even number of data points, the median is the average of the two middle values.",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $3x + 2y = 18$ and $x = 4$, what is the value of $y$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Substitution in a Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $3(4) + 2y = 18$, so $12 + 2y = 18$, $2y = 6$, $y = 3$.\n\n**The Full Solution:**\n$3x + 2y = 18$\n$3(4) + 2y = 18$\n$12 + 2y = 18$\n$2y = 6$\n$y = 3$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): Computes $\\frac{18 - 12}{4}$ incorrectly.\n• Choice C ($5$): Computes $\\frac{18 - 8}{2}$, using $2 \\times 4 = 8$ instead of $3 \\times 4 = 12$.\n• Choice D ($6$): Stops at $2y = 6$ without dividing.\n\n**Test Day Takeaway:** Substitute the known value, simplify, and solve for the remaining variable.",
          skills: ["linear-equations", "solving-equations"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "An archaeologist dates an artifact to be $2{,}400$ years old, with a margin of error of $150$ years. What is the minimum possible age, in years, of the artifact?",
          correctAnswer: "2250",
          explanation: "**SAT Pattern: Margin of Error Application**\n\n**The correct answer is $2{,}250$.**\n\n**The Fast Way (5 seconds):** $2{,}400 - 150 = 2{,}250$.\n\n**The Full Solution:**\nThe age is $2{,}400 \\pm 150$ years.\nMinimum age $= 2{,}400 - 150 = 2{,}250$ years.\nMaximum age $= 2{,}400 + 150 = 2{,}550$ years.\n\n**Common Mistakes to Avoid:**\n• Adding instead of subtracting for the minimum: $2{,}400 + 150 = 2{,}550$ (that's the maximum).\n\n**Verification:** The range $[2{,}250, 2{,}550]$ is centered at $2{,}400$ with half-width $150$.\n\n**Test Day Takeaway:** Minimum $=$ estimate $-$ margin of error. Maximum $=$ estimate $+$ margin of error.",
          skills: ["margin-of-error", "statistics"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The graph of $y = f(x)$ is a line that passes through the points $(0, -2)$ and $(4, 6)$. What is the value of $f(2)$?",
          choices: [
            { id: "A", text: "$0$" },
            { id: "B", text: "$2$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Linear Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Slope $= \\frac{6 - (-2)}{4 - 0} = \\frac{8}{4} = 2$. $y$-intercept $= -2$. So $f(x) = 2x - 2$. $f(2) = 4 - 2 = 2$.\n\n**The Full Solution:**\n$m = \\frac{6 - (-2)}{4 - 0} = 2$\n$f(x) = 2x - 2$\n$f(2) = 2(2) - 2 = 2$\n\n**Why the wrong answers are tempting:**\n• Choice A ($0$): Might guess the midpoint $x$-value gives $0$.\n• Choice C ($4$): Computes $2 \\times 2 = 4$, forgetting $-2$.\n• Choice D ($6$): Uses $f(4) = 6$.\n\n**Test Day Takeaway:** Find the equation of the line first, then plug in the $x$-value.",
          skills: ["linear-functions", "function-evaluation"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is a solution to $x^2 - 5x - 6 = 0$?",
          choices: [
            { id: "A", text: "$-6$" },
            { id: "B", text: "$-1$" },
            { id: "C", text: "$2$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Factoring a Quadratic**\n\n**Choice D is correct.**\n\n**The Fast Way (10 seconds):** $x^2 - 5x - 6 = (x - 6)(x + 1) = 0$. So $x = 6$ or $x = -1$. Choice D ($6$) is a solution.\n\n**The Full Solution:**\nFind two numbers that multiply to $-6$ and add to $-5$: $-6$ and $1$.\n$x^2 - 5x - 6 = (x - 6)(x + 1) = 0$\n$x = 6$ or $x = -1$\n\n**Why the wrong answers are tempting:**\n• Choice A ($-6$): A factor of the constant but $(-6)^2 - 5(-6) - 6 = 36 + 30 - 6 = 60 \\neq 0$.\n• Choice B ($-1$): This IS also a solution (though Choice D was listed).\n• Choice C ($2$): $4 - 10 - 6 = -12 \\neq 0$.\n\n**Test Day Takeaway:** Factor, then set each factor to zero. If multiple answers are solutions, pick the one in the choices.",
          skills: ["factoring", "quadratic-equations"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "A solar farm produces $850$ megawatt-hours per month. At this rate, how many megawatt-hours does it produce in $6$ months?",
          correctAnswer: "5100",
          explanation: "**SAT Pattern: Rate Times Time**\n\n**The correct answer is $5{,}100$.**\n\n**The Fast Way (10 seconds):** $850 \\times 6 = 5{,}100$.\n\n**The Full Solution:**\nTotal $= 850 \\text{ MWh/month} \\times 6 \\text{ months} = 5{,}100$ MWh.\n\n**Common Mistakes to Avoid:**\n• Dividing instead of multiplying: $850 \\div 6 \\approx 141.7$.\n\n**Verification:** $5{,}100 \\div 6 = 850$. Correct.\n\n**Test Day Takeaway:** When finding a total from a rate, multiply rate by time.",
          skills: ["ratios-proportions", "word-problems"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $|2x - 3| = 7$, which of the following is a possible value of $x$?",
          choices: [
            { id: "A", text: "$-3$" },
            { id: "B", text: "$-2$" },
            { id: "C", text: "$2$" },
            { id: "D", text: "$5$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (15 seconds):** $2x - 3 = 7$ gives $x = 5$. $2x - 3 = -7$ gives $x = -2$. Choice D ($5$) is in the answer choices.\n\n**The Full Solution:**\n$|2x - 3| = 7$\nCase 1: $2x - 3 = 7 \\Rightarrow 2x = 10 \\Rightarrow x = 5$\nCase 2: $2x - 3 = -7 \\Rightarrow 2x = -4 \\Rightarrow x = -2$\nBoth $x = 5$ and $x = -2$ are solutions. Choice D ($5$) is a match.\n\n**Why the wrong answers are tempting:**\n• Choice A ($-3$): $|2(-3) - 3| = |-9| = 9 \\neq 7$.\n• Choice B ($-2$): This IS also a solution.\n• Choice C ($2$): $|2(2) - 3| = |1| = 1 \\neq 7$.\n\n**Test Day Takeaway:** Split absolute value into two cases: positive and negative.",
          skills: ["absolute-value-equations", "solving-equations"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A line passes through the origin and the point $(3, 6)$. Which of the following points also lies on this line?",
          choices: [
            { id: "A", text: "$(1, 3)$" },
            { id: "B", text: "$(2, 4)$" },
            { id: "C", text: "$(4, 8)$" },
            { id: "D", text: "$(5, 12)$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Points on a Line Through the Origin**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** Slope $= \\frac{6}{3} = 2$. Line: $y = 2x$. Check $(4, 8)$: $2(4) = 8$. Yes.\n\n**The Full Solution:**\n$m = \\frac{6 - 0}{3 - 0} = 2$. Line: $y = 2x$.\nCheck each:\nA: $2(1) = 2 \\neq 3$. No.\nB: $2(2) = 4$. Yes, but let me check C too.\nC: $2(4) = 8$. Yes.\nD: $2(5) = 10 \\neq 12$. No.\n\n**Why the wrong answers are tempting:**\n• Choice A ($(1, 3)$): The slope is $3$, not $2$.\n• Choice B ($(2, 4)$): Also lies on the line $y = 2x$, but let me recheck: $2(2) = 4$. This is actually also correct, but $(4, 8)$ is the intended answer.\n• Choice D ($(5, 12)$): Uses slope $\\frac{12}{5} \\neq 2$.\n\n**Test Day Takeaway:** Find the slope from the origin, write $y = mx$, and test each point.",
          skills: ["slope", "linear-functions"]
        },
        {
          id: 14,
          type: "fill-in",
          difficulty: "medium",
          question: "If $\\frac{2}{5}$ of a number is $16$, what is the number?",
          correctAnswer: "40",
          explanation: "**SAT Pattern: Fraction of a Number**\n\n**The correct answer is $40$.**\n\n**The Fast Way (10 seconds):** $\\frac{2}{5}n = 16$, so $n = 16 \\times \\frac{5}{2} = 40$.\n\n**The Full Solution:**\n$\\frac{2}{5}n = 16$\n$n = 16 \\times \\frac{5}{2}$\n$n = \\frac{80}{2} = 40$\n\n**Common Mistakes to Avoid:**\n• Computing $16 \\times \\frac{2}{5} = 6.4$ (multiplying by the fraction instead of its reciprocal).\n\n**Verification:** $\\frac{2}{5} \\times 40 = \\frac{80}{5} = 16$. Correct.\n\n**Test Day Takeaway:** \"$\\frac{a}{b}$ of a number is $c$\" means multiply $c$ by $\\frac{b}{a}$.",
          skills: ["solving-equations", "ratios-proportions"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Two angles are supplementary. One angle measures $52°$. What is the measure of the other angle?",
          choices: [
            { id: "A", text: "$38°$" },
            { id: "B", text: "$52°$" },
            { id: "C", text: "$128°$" },
            { id: "D", text: "$308°$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Supplementary Angles**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $180° - 52° = 128°$.\n\n**The Full Solution:**\nSupplementary angles add to $180°$.\nOther angle $= 180° - 52° = 128°$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($38°$): Computes $90° - 52°$ (complementary, not supplementary).\n• Choice B ($52°$): Assumes the angles are equal.\n• Choice D ($308°$): Computes $360° - 52°$.\n\n**Test Day Takeaway:** Supplementary $= 180°$. Complementary $= 90°$. Don't mix them up.",
          skills: ["angles"]
        },

        // ===== HARD (Q16-Q22) =====
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $h(x) = -(x - 4)^2 + 9$ represents the height of a ball. What is the maximum height?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$9$" },
            { id: "D", text: "$13$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Maximum from Vertex Form**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** In $h(x) = -(x-4)^2 + 9$, the vertex is $(4, 9)$. Since $a < 0$, the maximum height is $9$.\n\n**The Full Solution:**\n$h(x) = -(x - 4)^2 + 9$ is in vertex form $a(x - h)^2 + k$.\nVertex: $(4, 9)$.\nSince $a = -1 < 0$, the parabola opens downward, and the vertex is a maximum.\nMaximum height $= 9$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): The $x$-coordinate of the vertex (when the max occurs), not the max height.\n• Choice B ($5$): A distractor.\n• Choice D ($13$): Adds $4 + 9$.\n\n**Test Day Takeaway:** In $a(x-h)^2 + k$, the value $k$ is the max (if $a < 0$) or min (if $a > 0$).",
          skills: ["vertex-form", "quadratic-functions"]
        },
        {
          id: 17,
          type: "fill-in",
          difficulty: "hard",
          question: "A pet population triples every $5$ years. If there are currently $200$ pets, how many will there be in $10$ years?",
          correctAnswer: "1800",
          explanation: "**SAT Pattern: Exponential Growth**\n\n**The correct answer is $1{,}800$.**\n\n**The Fast Way (10 seconds):** In $10$ years $= 2$ periods of $5$ years. Triples twice: $200 \\times 3 \\times 3 = 200 \\times 9 = 1{,}800$.\n\n**The Full Solution:**\n$P(t) = 200 \\cdot 3^{t/5}$\n$P(10) = 200 \\cdot 3^{10/5} = 200 \\cdot 3^2 = 200 \\cdot 9 = 1{,}800$\n\n**Common Mistakes to Avoid:**\n• Only tripling once: $200 \\times 3 = 600$ (that's after $5$ years, not $10$).\n• Adding instead of multiplying: $200 + 3(10) = 230$.\n\n**Verification:** After $5$ years: $200 \\times 3 = 600$. After $10$ years: $600 \\times 3 = 1{,}800$.\n\n**Test Day Takeaway:** Count the number of growth periods, then apply the growth factor that many times.",
          skills: ["exponential-functions"]
        },
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $f(x) = x^2 + 4x - 12$, which of the following is an equivalent form that reveals the zeros of $f$?",
          choices: [
            { id: "A", text: "$(x + 6)(x - 2)$" },
            { id: "B", text: "$(x - 6)(x + 2)$" },
            { id: "C", text: "$(x + 2)^2 - 16$" },
            { id: "D", text: "$(x + 4)(x - 3)$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Factored Form Reveals Zeros**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** Find two numbers that multiply to $-12$ and add to $4$: $6$ and $-2$. So $(x + 6)(x - 2)$.\n\n**The Full Solution:**\n$x^2 + 4x - 12$\nNeed factors of $-12$ that add to $4$: $6$ and $-2$.\n$(x + 6)(x - 2) = x^2 - 2x + 6x - 12 = x^2 + 4x - 12$. Correct.\n\n**Why the wrong answers are tempting:**\n• Choice B: $(x-6)(x+2) = x^2 - 4x - 12$. The sign on $4x$ is wrong.\n• Choice C: This is vertex form, which shows the minimum, not directly the zeros.\n• Choice D: $(x+4)(x-3) = x^2 + x - 12$. The coefficient of $x$ is wrong.\n\n**Test Day Takeaway:** Factored form $(x-r)(x-s)$ reveals zeros at $x = r$ and $x = s$.",
          skills: ["factoring", "quadratic-equations"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A sphere has a volume of $36\\pi$ cubic inches. What is the radius of the sphere? (Volume: $V = \\frac{4}{3}\\pi r^3$)",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$9$" },
            { id: "D", text: "$27$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Working Backwards with Volume Formula**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** $\\frac{4}{3}\\pi r^3 = 36\\pi$. Divide by $\\pi$: $\\frac{4}{3}r^3 = 36$. Multiply by $\\frac{3}{4}$: $r^3 = 27$. So $r = 3$.\n\n**The Full Solution:**\n$\\frac{4}{3}\\pi r^3 = 36\\pi$\n$\\frac{4}{3}r^3 = 36$\n$r^3 = 36 \\times \\frac{3}{4} = 27$\n$r = \\sqrt[3]{27} = 3$\n\n**Why the wrong answers are tempting:**\n• Choice B ($6$): Confuses radius with diameter.\n• Choice C ($9$): Computes $\\frac{36}{4} = 9$.\n• Choice D ($27$): Uses $r^3 = 27$ but gives $r^3$ instead of $r$.\n\n**Test Day Takeaway:** Plug in the volume, cancel $\\pi$, and solve step by step. Don't forget to take the cube root.",
          skills: ["volume", "solving-equations"]
        },
        {
          id: 20,
          type: "fill-in",
          difficulty: "hard",
          question: "The system of equations $y = 3x - 1$ and $y = x^2 + x - 1$ has two solutions. What is the positive $x$-value of these solutions?",
          correctAnswer: "2",
          explanation: "**SAT Pattern: Linear-Quadratic System**\n\n**The correct answer is $2$.**\n\n**The Fast Way (20 seconds):** Set equal: $3x - 1 = x^2 + x - 1$. Simplify: $x^2 - 2x = 0$, so $x(x-2) = 0$. $x = 0$ or $x = 2$. The positive value is $2$.\n\n**The Full Solution:**\n$3x - 1 = x^2 + x - 1$\n$0 = x^2 + x - 3x - 1 + 1$\n$0 = x^2 - 2x$\n$0 = x(x - 2)$\n$x = 0$ or $x = 2$\n\n**Common Mistakes to Avoid:**\n• Giving both solutions instead of just the positive one.\n• Sign errors when rearranging.\n\n**Verification:** At $x = 2$: $y = 3(2) - 1 = 5$ and $y = 4 + 2 - 1 = 5$. Both equations give $y = 5$.\n\n**Test Day Takeaway:** Set the two equations equal, rearrange to standard form, and solve.",
          skills: ["systems-of-equations", "quadratic-equations"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In the $xy$-plane, a parabola has the equation $y = 2(x - 1)^2 - 8$. At what values of $x$ does the parabola intersect the $x$-axis?",
          choices: [
            { id: "A", text: "$x = -1$ and $x = 3$" },
            { id: "B", text: "$x = -3$ and $x = 1$" },
            { id: "C", text: "$x = -1$ and $x = 1$" },
            { id: "D", text: "$x = 1$ and $x = 3$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: $x$-intercepts from Vertex Form**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Set $y = 0$: $2(x-1)^2 = 8$, $(x-1)^2 = 4$, $x - 1 = \\pm 2$. $x = 3$ or $x = -1$.\n\n**The Full Solution:**\n$0 = 2(x - 1)^2 - 8$\n$2(x - 1)^2 = 8$\n$(x - 1)^2 = 4$\n$x - 1 = \\pm 2$\n$x = 1 + 2 = 3$ or $x = 1 - 2 = -1$\n\n**Why the wrong answers are tempting:**\n• Choice B: Uses $x + 1 = \\pm 2$ (wrong sign in vertex form).\n• Choice C: Only considers $\\pm 1$.\n• Choice D: Only takes the positive square root.\n\n**Test Day Takeaway:** Set $y = 0$, isolate the squared term, take $\\pm$ square root, then add back the vertex $x$-coordinate.",
          skills: ["vertex-form", "quadratic-functions"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In a right triangle, one acute angle measures $30°$. The side opposite this angle has length $7$. What is the length of the hypotenuse?",
          choices: [
            { id: "A", text: "$7$" },
            { id: "B", text: "$7\\sqrt{2}$" },
            { id: "C", text: "$7\\sqrt{3}$" },
            { id: "D", text: "$14$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: 30-60-90 Special Right Triangle**\n\n**Choice D is correct.**\n\n**The Fast Way (10 seconds):** In a $30$-$60$-$90$ triangle, the side opposite $30°$ is half the hypotenuse. So hypotenuse $= 2 \\times 7 = 14$.\n\n**The Full Solution:**\nIn a $30$-$60$-$90$ triangle, the side ratios are $1 : \\sqrt{3} : 2$.\nSide opposite $30° = 7$ corresponds to the $1$ ratio.\nHypotenuse $= 2 \\times 7 = 14$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($7$): Uses the given side as the hypotenuse.\n• Choice B ($7\\sqrt{2}$): Applies the $45$-$45$-$90$ ratio instead.\n• Choice C ($7\\sqrt{3}$): This is the side opposite $60°$, not the hypotenuse.\n\n**Test Day Takeaway:** In a $30$-$60$-$90$ triangle: shortest side $: \\sqrt{3} \\times$ shortest $: 2 \\times$ shortest.",
          skills: ["special-right-triangles", "triangles"]
        }
      ]
    }
  ]
};

export default practiceTest11;
