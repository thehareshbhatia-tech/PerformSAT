// Practice Test 12 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Contexts: camping/hiking, astronomy, event planning, cycling

export const practiceTest12 = {
  id: "practice-test-12",
  title: "Practice Test 12",
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
          question: "A campsite rents tents for $\\$15$ per night. If a family rents a tent for $6$ nights, what is the total cost?",
          choices: [
            { id: "A", text: "$\\$21$" },
            { id: "B", text: "$\\$60$" },
            { id: "C", text: "$\\$90$" },
            { id: "D", text: "$\\$150$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Multiplication Word Problem**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $15 \\times 6 = 90$.\n\n**The Full Solution:**\nTotal cost $= \\$15 \\times 6 = \\$90$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($21$): Adds $15 + 6$ instead of multiplying.\n• Choice B ($60$): Computes $10 \\times 6$.\n• Choice D ($150$): Computes $15 \\times 10$.\n\n**Test Day Takeaway:** Price per night $\\times$ number of nights $=$ total cost.",
          skills: ["word-problems"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "If $2x + 5 = 19$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$5$" },
            { id: "B", text: "$7$" },
            { id: "C", text: "$12$" },
            { id: "D", text: "$14$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $2x = 19 - 5 = 14$, so $x = 7$.\n\n**The Full Solution:**\n$2x + 5 = 19$\n$2x = 14$\n$x = 7$\n\n**Why the wrong answers are tempting:**\n• Choice A ($5$): The constant being subtracted, not the solution.\n• Choice C ($12$): Computes $\\frac{19 + 5}{2}$.\n• Choice D ($14$): Stops after subtracting $5$ but forgets to divide by $2$.\n\n**Test Day Takeaway:** Subtract the constant, then divide by the coefficient.",
          skills: ["linear-equations", "solving-equations"]
        },
        {
          id: 3,
          type: "fill-in",
          difficulty: "easy",
          question: "A telescope costs $\\$800$. During a sale, the price is reduced by $15\\%$. How much money, in dollars, is saved with the discount?",
          correctAnswer: "120",
          explanation: "**SAT Pattern: Finding the Discount Amount**\n\n**The correct answer is $120$.**\n\n**The Fast Way (10 seconds):** $15\\%$ of $800 = 0.15 \\times 800 = 120$.\n\n**The Full Solution:**\nDiscount $= 0.15 \\times 800 = 120$.\n\n**Common Mistakes to Avoid:**\n• Computing the sale price ($800 - 120 = 680$) instead of the discount amount.\n• Moving the decimal incorrectly: $0.015 \\times 800 = 12$.\n\n**Verification:** $\\frac{120}{800} = 0.15 = 15\\%$. Correct.\n\n**Test Day Takeaway:** Discount amount $=$ percent $\\times$ original price.",
          skills: ["percents"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A cyclist rides $f(t) = 12t$ miles in $t$ hours. What does the $12$ represent?",
          choices: [
            { id: "A", text: "The total distance traveled" },
            { id: "B", text: "The number of hours cycled" },
            { id: "C", text: "The speed in miles per hour" },
            { id: "D", text: "The number of stops made" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Interpreting a Linear Function**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** In $f(t) = 12t$, the coefficient $12$ is the rate of change -- miles per hour.\n\n**The Full Solution:**\nIn $f(t) = 12t$, the coefficient of $t$ gives the rate: $12$ miles per hour. This is the speed.\n\n**Why the wrong answers are tempting:**\n• Choice A: Total distance depends on $t$; it's not a fixed number.\n• Choice B: The number of hours is $t$, not $12$.\n• Choice D: Nothing in the function refers to stops.\n\n**Test Day Takeaway:** The coefficient of the variable in a linear function is the rate of change.",
          skills: ["function-interpretation", "linear-functions"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which expression is equivalent to $6a + 3a - 2a$?",
          choices: [
            { id: "A", text: "$7a$" },
            { id: "B", text: "$5a$" },
            { id: "C", text: "$11a$" },
            { id: "D", text: "$a$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Combining Like Terms**\n\n**Choice A is correct.**\n\n**The Fast Way (5 seconds):** $6 + 3 - 2 = 7$, so $7a$.\n\n**The Full Solution:**\n$6a + 3a - 2a = (6 + 3 - 2)a = 7a$\n\n**Why the wrong answers are tempting:**\n• Choice B ($5a$): Computes $6 - 3 + 2 = 5$ or $6 + 3 - 4 = 5$.\n• Choice C ($11a$): Adds all coefficients: $6 + 3 + 2 = 11$.\n• Choice D ($a$): Subtracts everything: $6 - 3 - 2 = 1$.\n\n**Test Day Takeaway:** Add and subtract the coefficients, keeping the variable part the same.",
          skills: ["polynomial-operations"]
        },
        {
          id: 6,
          type: "fill-in",
          difficulty: "easy",
          question: "An event planner orders $8$ tables with $6$ chairs each. How many chairs are ordered in total?",
          correctAnswer: "48",
          explanation: "**SAT Pattern: Basic Multiplication**\n\n**The correct answer is $48$.**\n\n**The Fast Way (5 seconds):** $8 \\times 6 = 48$.\n\n**The Full Solution:**\nTotal chairs $= 8 \\text{ tables} \\times 6 \\text{ chairs/table} = 48$ chairs.\n\n**Common Mistakes to Avoid:**\n• Adding: $8 + 6 = 14$.\n\n**Verification:** $48 \\div 8 = 6$ chairs per table. Correct.\n\n**Test Day Takeaway:** When each group has the same number, multiply groups $\\times$ items per group.",
          skills: ["word-problems"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "easy",
          question: "If $m - 4 = 11$, what is the value of $m$?",
          choices: [
            { id: "A", text: "$7$" },
            { id: "B", text: "$15$" },
            { id: "C", text: "$44$" },
            { id: "D", text: "$-7$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: One-Step Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** $m = 11 + 4 = 15$.\n\n**The Full Solution:**\n$m - 4 = 11$\n$m = 11 + 4 = 15$\n\n**Why the wrong answers are tempting:**\n• Choice A ($7$): Subtracts $11 - 4 = 7$ instead of adding.\n• Choice C ($44$): Multiplies $11 \\times 4$.\n• Choice D ($-7$): Gets the sign wrong.\n\n**Test Day Takeaway:** To undo subtraction, add to both sides.",
          skills: ["linear-equations", "solving-equations"]
        },

        // ===== MEDIUM (Q8-Q15) =====
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A hiking trail is $3.6$ miles long. A hiker has completed $\\frac{2}{3}$ of the trail. How many miles has the hiker walked?",
          choices: [
            { id: "A", text: "$1.2$" },
            { id: "B", text: "$1.8$" },
            { id: "C", text: "$2.4$" },
            { id: "D", text: "$3.0$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Fraction of a Quantity**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $\\frac{2}{3} \\times 3.6 = \\frac{7.2}{3} = 2.4$.\n\n**The Full Solution:**\nDistance walked $= \\frac{2}{3} \\times 3.6 = 2.4$ miles.\n\n**Why the wrong answers are tempting:**\n• Choice A ($1.2$): Computes $\\frac{1}{3} \\times 3.6$.\n• Choice B ($1.8$): Computes $\\frac{1}{2} \\times 3.6$.\n• Choice D ($3.0$): Subtracts $3.6 - 0.6$.\n\n**Test Day Takeaway:** \"$\\frac{a}{b}$ of a number\" means multiply the number by $\\frac{a}{b}$.",
          skills: ["ratios-proportions", "word-problems"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A line passes through the points $(-1, 4)$ and $(3, -8)$. What is the slope of the line?",
          choices: [
            { id: "A", text: "$-3$" },
            { id: "B", text: "$-\\frac{1}{3}$" },
            { id: "C", text: "$\\frac{1}{3}$" },
            { id: "D", text: "$3$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** $m = \\frac{-8 - 4}{3 - (-1)} = \\frac{-12}{4} = -3$.\n\n**The Full Solution:**\n$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{-8 - 4}{3 - (-1)} = \\frac{-12}{4} = -3$\n\n**Why the wrong answers are tempting:**\n• Choice B ($-\\frac{1}{3}$): Flips the fraction (run over rise).\n• Choice C ($\\frac{1}{3}$): Flips and drops the negative sign.\n• Choice D ($3$): Correct magnitude but missing the negative sign.\n\n**Test Day Takeaway:** Slope $= \\frac{\\Delta y}{\\Delta x}$. Be careful with negative signs.",
          skills: ["slope", "linear-functions"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "An astronomer records the brightness of $5$ stars as $2.1$, $3.4$, $2.8$, $3.0$, and $3.7$ magnitudes. What is the mean brightness?",
          choices: [
            { id: "A", text: "$2.8$" },
            { id: "B", text: "$3.0$" },
            { id: "C", text: "$3.2$" },
            { id: "D", text: "$3.4$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Calculating the Mean**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Sum $= 2.1 + 3.4 + 2.8 + 3.0 + 3.7 = 15.0$. Mean $= \\frac{15.0}{5} = 3.0$.\n\n**The Full Solution:**\nMean $= \\frac{2.1 + 3.4 + 2.8 + 3.0 + 3.7}{5} = \\frac{15.0}{5} = 3.0$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2.8$): The median value, not the mean.\n• Choice C ($3.2$): An arithmetic error in the sum.\n• Choice D ($3.4$): The second-largest value.\n\n**Test Day Takeaway:** Mean $= \\frac{\\text{sum of all values}}{\\text{number of values}}$.",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "If $3(2x - 5) = 4x + 1$, what is the value of $x$?",
          correctAnswer: "8",
          explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**The correct answer is $8$.**\n\n**The Fast Way (15 seconds):** $6x - 15 = 4x + 1$, so $2x = 16$ and $x = 8$.\n\n**The Full Solution:**\n$3(2x - 5) = 4x + 1$\n$6x - 15 = 4x + 1$\n$6x - 4x = 1 + 15$\n$2x = 16$\n$x = 8$\n\n**Common Mistakes to Avoid:**\n• Distributing incorrectly: $3(2x - 5) = 6x - 5$ (forgetting to multiply $-5$ by $3$).\n\n**Verification:** $3(2(8) - 5) = 3(16 - 5) = 3(11) = 33$. $4(8) + 1 = 32 + 1 = 33$. Both sides equal.\n\n**Test Day Takeaway:** Distribute first, then collect variable terms on one side.",
          skills: ["linear-equations", "solving-equations"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "At a camping event, $80$ people were surveyed about their preferred activity. The results are shown.\n\n| | Hiking | Fishing | Total |\n|---|---|---|---|\n| Adults | $25$ | $15$ | $40$ |\n| Teens | $20$ | $20$ | $40$ |\n| Total | $45$ | $35$ | $80$ |\n\nWhat fraction of adults prefer hiking?",
          choices: [
            { id: "A", text: "$\\frac{5}{16}$" },
            { id: "B", text: "$\\frac{1}{2}$" },
            { id: "C", text: "$\\frac{5}{8}$" },
            { id: "D", text: "$\\frac{5}{9}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Two-Way Table Conditional Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** Adults who hike $= 25$. Total adults $= 40$. Fraction $= \\frac{25}{40} = \\frac{5}{8}$.\n\n**The Full Solution:**\n$P(\\text{hiking} | \\text{adult}) = \\frac{25}{40} = \\frac{5}{8}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{5}{16}$): Divides $25$ by $80$ (total, not just adults).\n• Choice B ($\\frac{1}{2}$): Uses $\\frac{40}{80}$ (all adults out of total).\n• Choice D ($\\frac{5}{9}$): Uses $\\frac{25}{45}$ (adults who hike out of all hikers).\n\n**Test Day Takeaway:** \"Fraction of adults\" means the denominator is total adults, not the grand total.",
          skills: ["two-way-tables", "probability"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The equation $2x - 3y = 12$ is graphed in the $xy$-plane. What is the $y$-intercept of this line?",
          choices: [
            { id: "A", text: "$(0, -4)$" },
            { id: "B", text: "$(0, 4)$" },
            { id: "C", text: "$(6, 0)$" },
            { id: "D", text: "$(0, -6)$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Finding the $y$-intercept**\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** Set $x = 0$: $-3y = 12$, so $y = -4$. The $y$-intercept is $(0, -4)$.\n\n**The Full Solution:**\n$2(0) - 3y = 12$\n$-3y = 12$\n$y = -4$\n$y$-intercept: $(0, -4)$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($(0, 4)$): Divides $12$ by $3$ but drops the negative.\n• Choice C ($(6, 0)$): This is the $x$-intercept.\n• Choice D ($(0, -6)$): Divides $12$ by $-2$ instead of $-3$.\n\n**Test Day Takeaway:** $y$-intercept: set $x = 0$ and solve for $y$.",
          skills: ["linear-equations", "coordinate-geometry"]
        },
        {
          id: 14,
          type: "fill-in",
          difficulty: "medium",
          question: "An event planner charges a $\\$200$ flat fee plus $\\$25$ per guest. If the total cost is $\\$700$, how many guests attended?",
          correctAnswer: "20",
          explanation: "**SAT Pattern: Linear Equation Word Problem**\n\n**The correct answer is $20$.**\n\n**The Fast Way (10 seconds):** $200 + 25g = 700$, so $25g = 500$ and $g = 20$.\n\n**The Full Solution:**\n$200 + 25g = 700$\n$25g = 500$\n$g = 20$\n\n**Common Mistakes to Avoid:**\n• Dividing $700$ by $25 = 28$ (forgetting to subtract the flat fee).\n\n**Verification:** $200 + 25(20) = 200 + 500 = 700$. Correct.\n\n**Test Day Takeaway:** Subtract the fixed cost first, then divide by the per-unit rate.",
          skills: ["linear-equations", "word-problems"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is equivalent to $\\frac{3x^8}{x^2}$?",
          choices: [
            { id: "A", text: "$3x^4$" },
            { id: "B", text: "$3x^6$" },
            { id: "C", text: "$3x^{10}$" },
            { id: "D", text: "$x^6$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Exponent Rules - Division**\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** $\\frac{x^8}{x^2} = x^{8-2} = x^6$. Keep the coefficient: $3x^6$.\n\n**The Full Solution:**\n$\\frac{3x^8}{x^2} = 3 \\cdot x^{8-2} = 3x^6$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3x^4$): Divides the exponent by $2$ instead of subtracting.\n• Choice C ($3x^{10}$): Adds exponents instead of subtracting.\n• Choice D ($x^6$): Drops the coefficient $3$.\n\n**Test Day Takeaway:** $\\frac{x^a}{x^b} = x^{a-b}$. The coefficient stays the same.",
          skills: ["exponent-rules"]
        },

        // ===== HARD (Q16-Q22) =====
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $f(x) = x^2 - 10x + 21$ can be rewritten as $f(x) = (x - h)^2 + k$. What is the value of $k$?",
          choices: [
            { id: "A", text: "$-4$" },
            { id: "B", text: "$-3$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$21$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Converting to Vertex Form**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** $h = \\frac{10}{2} = 5$. $k = f(5) = 25 - 50 + 21 = -4$.\n\n**The Full Solution:**\n$f(x) = x^2 - 10x + 21$\n$= (x^2 - 10x + 25) - 25 + 21$\n$= (x - 5)^2 - 4$\nSo $k = -4$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($-3$): May come from factoring roots: $(x-3)(x-7)$ and confusing a root with $k$.\n• Choice C ($4$): Wrong sign.\n• Choice D ($21$): Uses the original constant without completing the square.\n\n**Test Day Takeaway:** To find $k$ in vertex form, complete the square or use $k = f\\left(\\frac{-b}{2a}\\right)$.",
          skills: ["vertex-form", "quadratic-functions"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A cyclist's distance from home is modeled by $d(t) = -2t^2 + 16t$, where $t$ is in hours. At what time $t$ is the cyclist farthest from home?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$16$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Vertex of a Parabola (Maximum)**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $t = \\frac{-b}{2a} = \\frac{-16}{2(-2)} = \\frac{-16}{-4} = 4$.\n\n**The Full Solution:**\n$d(t) = -2t^2 + 16t$\nSince $a = -2 < 0$, the parabola opens downward (maximum).\n$t = \\frac{-16}{-4} = 4$ hours\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): Half of $4$, perhaps from $\\frac{16}{8}$.\n• Choice C ($8$): The time when the cyclist returns home ($d(8) = -128 + 128 = 0$).\n• Choice D ($16$): The coefficient of $t$, not the vertex.\n\n**Test Day Takeaway:** The maximum of $at^2 + bt$ (with $a < 0$) occurs at $t = \\frac{-b}{2a}$.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "The number of visible stars decreases by $10\\%$ each hour after sunset due to light pollution. If $300$ stars are visible at sunset, how many are visible $2$ hours later?",
          correctAnswer: "243",
          explanation: "**SAT Pattern: Exponential Decay**\n\n**The correct answer is $243$.**\n\n**The Fast Way (15 seconds):** After $1$ hour: $300 \\times 0.9 = 270$. After $2$ hours: $270 \\times 0.9 = 243$.\n\n**The Full Solution:**\n$S(t) = 300(0.9)^t$\n$S(2) = 300(0.9)^2 = 300(0.81) = 243$\n\n**Common Mistakes to Avoid:**\n• Subtracting $10\\%$ of the original each time: $300 - 30 - 30 = 240$ (linear instead of exponential).\n• Using $0.10$ instead of $0.90$ as the base.\n\n**Verification:** $300 \\to 270 \\to 243$. Each step is $90\\%$ of the previous. Correct.\n\n**Test Day Takeaway:** A $10\\%$ decrease means multiply by $0.90$ each period, not subtract a fixed amount.",
          skills: ["exponential-functions", "percents"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation $x^2 + y^2 - 6x + 2y = 6$ represents a circle. What is the radius?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$16$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Completing the Square for Circle Radius**\n\n**Choice B is correct.**\n\n**The Fast Way (25 seconds):** Complete the square: $(x^2 - 6x + 9) + (y^2 + 2y + 1) = 6 + 9 + 1 = 16$. So $r^2 = 16$ and $r = 4$.\n\n**The Full Solution:**\n$x^2 - 6x + y^2 + 2y = 6$\n$(x^2 - 6x + 9) + (y^2 + 2y + 1) = 6 + 9 + 1$\n$(x - 3)^2 + (y + 1)^2 = 16$\n$r = \\sqrt{16} = 4$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): Half the coefficient of $x$.\n• Choice C ($6$): The original right-hand side.\n• Choice D ($16$): This is $r^2$, not $r$.\n\n**Test Day Takeaway:** Complete the square for $x$ and $y$, add the same values to both sides, then take the square root of the right side.",
          skills: ["circle-equations", "circles"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "For what value of $b$ does the equation $x^2 + bx + 9 = 0$ have exactly one real solution where $b > 0$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$9$" },
            { id: "D", text: "$18$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Discriminant = 0**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** For one solution: $b^2 - 4ac = 0$. $b^2 - 4(1)(9) = 0$, so $b^2 = 36$ and $b = 6$ (since $b > 0$).\n\n**The Full Solution:**\n$b^2 - 4(1)(9) = 0$\n$b^2 - 36 = 0$\n$b^2 = 36$\n$b = \\pm 6$\nSince $b > 0$, $b = 6$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): $9 - 36 = -27 < 0$, no real solutions.\n• Choice C ($9$): $81 - 36 = 45 > 0$, two solutions.\n• Choice D ($18$): $324 - 36 = 288 > 0$, two solutions.\n\n**Test Day Takeaway:** Exactly one solution means $b^2 - 4ac = 0$. Solve for the unknown parameter.",
          skills: ["discriminant", "quadratic-equations"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "An event planner arranges chairs in rows. The first row has $8$ chairs and each subsequent row has $4$ more chairs than the previous row. If the last row has $32$ chairs, how many rows are there?",
          correctAnswer: "7",
          explanation: "**SAT Pattern: Arithmetic Sequence**\n\n**The correct answer is $7$.**\n\n**The Fast Way (10 seconds):** $a_n = a_1 + (n-1)d$. $32 = 8 + (n-1)(4)$. $24 = 4(n-1)$. $n - 1 = 6$. $n = 7$.\n\n**The Full Solution:**\n$a_n = 8 + (n-1) \\times 4$\n$32 = 8 + 4(n-1)$\n$24 = 4(n - 1)$\n$6 = n - 1$\n$n = 7$\n\n**Common Mistakes to Avoid:**\n• Getting $n = 6$ by forgetting the $+1$ (fencepost error).\n• Using $\\frac{32}{4} = 8$ or $\\frac{32 - 8}{4} = 6$.\n\n**Verification:** Row $7$: $8 + (7-1)(4) = 8 + 24 = 32$. Correct.\n\n**Test Day Takeaway:** In an arithmetic sequence, $n = \\frac{\\text{last} - \\text{first}}{\\text{difference}} + 1$.",
          skills: ["word-problems", "algebraic-manipulation"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A right triangle has one leg of length $8$ and a hypotenuse of length $17$. What is the length of the other leg?",
          choices: [
            { id: "A", text: "$9$" },
            { id: "B", text: "$12$" },
            { id: "C", text: "$15$" },
            { id: "D", text: "$\\sqrt{225}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Pythagorean Theorem**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** $b = \\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15$.\n\n**The Full Solution:**\n$a^2 + b^2 = c^2$\n$64 + b^2 = 289$\n$b^2 = 225$\n$b = 15$\n\n**Why the wrong answers are tempting:**\n• Choice A ($9$): Computes $17 - 8$.\n• Choice B ($12$): A common Pythagorean triple leg, but $8^2 + 12^2 = 64 + 144 = 208 \\neq 289$.\n• Choice D ($\\sqrt{225}$): This equals $15$, so it's the same as C. The SAT would not list both, but the point is to recognize $\\sqrt{225} = 15$.\n\n**Test Day Takeaway:** $8$-$15$-$17$ is a Pythagorean triple. Know the common ones: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$.",
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
          question: "A campground has $45$ campsites. If $\\frac{1}{3}$ of the campsites are occupied, how many are occupied?",
          choices: [
            { id: "A", text: "$12$" },
            { id: "B", text: "$15$" },
            { id: "C", text: "$30$" },
            { id: "D", text: "$42$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Fraction of a Whole**\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** $\\frac{45}{3} = 15$.\n\n**The Full Solution:**\n$\\frac{1}{3} \\times 45 = 15$ campsites.\n\n**Why the wrong answers are tempting:**\n• Choice A ($12$): Incorrect division.\n• Choice C ($30$): Computes $\\frac{2}{3}$ of $45$.\n• Choice D ($42$): Computes $45 - 3$.\n\n**Test Day Takeaway:** $\\frac{1}{3}$ of a number means divide by $3$.",
          skills: ["ratios-proportions"]
        },
        {
          id: 2,
          type: "fill-in",
          difficulty: "easy",
          question: "If $6y = 54$, what is the value of $y$?",
          correctAnswer: "9",
          explanation: "**SAT Pattern: One-Step Equation**\n\n**The correct answer is $9$.**\n\n**The Fast Way (5 seconds):** $y = 54 \\div 6 = 9$.\n\n**The Full Solution:**\n$6y = 54$\n$y = \\frac{54}{6} = 9$\n\n**Common Mistakes to Avoid:**\n• Multiplying: $6 \\times 54 = 324$.\n\n**Verification:** $6(9) = 54$. Correct.\n\n**Test Day Takeaway:** Divide both sides by the coefficient.",
          skills: ["linear-equations", "solving-equations"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A planet is $4.2 \\times 10^8$ miles from its star. Which of the following represents this distance in standard notation?",
          choices: [
            { id: "A", text: "$42{,}000{,}000$" },
            { id: "B", text: "$420{,}000{,}000$" },
            { id: "C", text: "$4{,}200{,}000{,}000$" },
            { id: "D", text: "$42{,}000{,}000{,}000$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Scientific Notation**\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** $4.2 \\times 10^8 = 420{,}000{,}000$ (move the decimal $8$ places right).\n\n**The Full Solution:**\n$4.2 \\times 10^8 = 420{,}000{,}000$.\n\n**Why the wrong answers are tempting:**\n• Choice A: Moves decimal only $7$ places ($4.2 \\times 10^7$).\n• Choice C: Moves decimal $9$ places ($4.2 \\times 10^9$).\n• Choice D: Moves decimal $10$ places ($4.2 \\times 10^{10}$).\n\n**Test Day Takeaway:** $10^n$ means move the decimal point $n$ places to the right.",
          skills: ["exponent-rules"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "An event has $180$ attendees. If $60$ are children, what fraction of the attendees are children?",
          choices: [
            { id: "A", text: "$\\frac{1}{6}$" },
            { id: "B", text: "$\\frac{1}{4}$" },
            { id: "C", text: "$\\frac{1}{3}$" },
            { id: "D", text: "$\\frac{2}{3}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Part-to-Whole Fraction**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $\\frac{60}{180} = \\frac{1}{3}$.\n\n**The Full Solution:**\n$\\frac{60}{180} = \\frac{60 \\div 60}{180 \\div 60} = \\frac{1}{3}$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{1}{6}$): Divides $180$ by $60$ then flips.\n• Choice B ($\\frac{1}{4}$): Incorrect simplification.\n• Choice D ($\\frac{2}{3}$): The fraction of adults, not children.\n\n**Test Day Takeaway:** Fraction $= \\frac{\\text{part}}{\\text{whole}}$. Always simplify.",
          skills: ["ratios-proportions", "percents"]
        },
        {
          id: 5,
          type: "fill-in",
          difficulty: "easy",
          question: "How many minutes are in $3.5$ hours?",
          correctAnswer: "210",
          explanation: "**SAT Pattern: Unit Conversion**\n\n**The correct answer is $210$.**\n\n**The Fast Way (5 seconds):** $3.5 \\times 60 = 210$.\n\n**The Full Solution:**\n$3.5 \\text{ hours} \\times 60 \\text{ minutes/hour} = 210$ minutes.\n\n**Common Mistakes to Avoid:**\n• Using $3.5 \\times 100 = 350$ (wrong conversion factor).\n\n**Verification:** $210 \\div 60 = 3.5$ hours. Correct.\n\n**Test Day Takeaway:** $1$ hour $= 60$ minutes. Multiply hours by $60$.",
          skills: ["unit-conversion"]
        },

        // ===== MEDIUM (Q6-Q15) =====
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A cyclist travels at $18$ miles per hour for $2$ hours and then at $12$ miles per hour for $3$ hours. What is the total distance traveled?",
          choices: [
            { id: "A", text: "$66$ miles" },
            { id: "B", text: "$72$ miles" },
            { id: "C", text: "$78$ miles" },
            { id: "D", text: "$90$ miles" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Two-Part Distance Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $18(2) + 12(3) = 36 + 36 = 72$.\n\n**The Full Solution:**\nDistance $= 18 \\times 2 + 12 \\times 3 = 36 + 36 = 72$ miles.\n\n**Why the wrong answers are tempting:**\n• Choice A ($66$): Computes $18(2) + 12(2.5) = 36 + 30$.\n• Choice C ($78$): Computes $18(3) + 12(2) = 54 + 24$, swapping the times.\n• Choice D ($90$): Computes $(18 + 12) \\times 3 = 90$.\n\n**Test Day Takeaway:** Total distance $=$ sum of (rate $\\times$ time) for each segment.",
          skills: ["word-problems", "ratios-proportions"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $\\frac{x + 3}{2} = 7$, what is the value of $x + 3$?",
          choices: [
            { id: "A", text: "$3.5$" },
            { id: "B", text: "$7$" },
            { id: "C", text: "$11$" },
            { id: "D", text: "$14$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Equation with Fraction - Finding an Expression**\n\n**Choice D is correct.**\n\n**The Fast Way (5 seconds):** Multiply both sides by $2$: $x + 3 = 14$.\n\n**The Full Solution:**\n$\\frac{x + 3}{2} = 7$\n$x + 3 = 14$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3.5$): Divides $7$ by $2$ instead of multiplying.\n• Choice B ($7$): Uses the right-hand side as the answer.\n• Choice C ($11$): Computes $x = 14 - 3 = 11$ (which is $x$, not $x + 3$).\n\n**Test Day Takeaway:** Read carefully: the question asks for $x + 3$, not $x$. Multiply both sides to clear the fraction.",
          skills: ["solving-equations", "algebraic-manipulation"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "The function $g(x) = 5x + 20$ gives the cost, in dollars, of renting a kayak for $x$ hours. What is the cost of renting a kayak for $4$ hours?",
          correctAnswer: "40",
          explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $40$.**\n\n**The Fast Way (5 seconds):** $g(4) = 5(4) + 20 = 20 + 20 = 40$.\n\n**The Full Solution:**\n$g(4) = 5(4) + 20 = 20 + 20 = 40$ dollars.\n\n**Common Mistakes to Avoid:**\n• Computing $5 + 20 = 25$ and then $25 \\times 4 = 100$.\n\n**Verification:** $g(4) = 40$. $40 - 20 = 20$, and $20 \\div 4 = 5$ per hour rate. Correct.\n\n**Test Day Takeaway:** Substitute the input into the function and simplify.",
          skills: ["function-evaluation", "linear-functions"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following systems of equations has no solution?\n\n(I) $y = 2x + 3$ and $y = 2x - 1$\n(II) $y = 2x + 3$ and $y = -2x + 3$\n(III) $y = 2x + 3$ and $y = 2x + 3$",
          choices: [
            { id: "A", text: "I only" },
            { id: "B", text: "II only" },
            { id: "C", text: "III only" },
            { id: "D", text: "I and II" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Number of Solutions in a System**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** Same slope, different $y$-intercepts $=$ parallel lines $=$ no solution. System I has slope $2$ for both but different intercepts ($3$ vs $-1$).\n\n**The Full Solution:**\nSystem I: Both lines have slope $2$ but different intercepts ($3$ and $-1$). Parallel lines, no intersection, no solution.\nSystem II: Slopes are $2$ and $-2$ (different). They intersect once.\nSystem III: Same line. Infinitely many solutions.\n\n**Why the wrong answers are tempting:**\n• Choice B: System II has different slopes, so they do intersect.\n• Choice C: System III is the same equation twice -- infinitely many solutions, not none.\n• Choice D: Only System I has no solution.\n\n**Test Day Takeaway:** No solution $=$ same slope, different intercept (parallel lines).",
          skills: ["systems-of-equations", "slope"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A sample of $400$ hikers found that $52\\%$ prefer mountain trails, with a margin of error of $3\\%$. Which is the best conclusion?",
          choices: [
            { id: "A", text: "Exactly $52\\%$ of all hikers prefer mountain trails." },
            { id: "B", text: "Between $49\\%$ and $55\\%$ of the sampled hikers prefer mountain trails." },
            { id: "C", text: "It is plausible that between $49\\%$ and $55\\%$ of all hikers prefer mountain trails." },
            { id: "D", text: "At least $49\\%$ of all hikers prefer mountain trails." }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Margin of Error Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $52\\% \\pm 3\\% = [49\\%, 55\\%]$. This is an estimate for the population, not the sample.\n\n**The Full Solution:**\nThe confidence interval is $52\\% \\pm 3\\% = [49\\%, 55\\%]$. This interval estimates the true population proportion.\n\n**Why the wrong answers are tempting:**\n• Choice A: \"Exactly\" is too precise for a statistical estimate.\n• Choice B: The interval applies to the population, not the sample (the sample percentage is already known exactly).\n• Choice D: The interval is two-sided; we can't claim \"at least.\"\n\n**Test Day Takeaway:** Margin of error creates a range for the population parameter.",
          skills: ["margin-of-error", "statistics"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "If $x^2 - 9 = 0$, what is the positive value of $x$?",
          correctAnswer: "3",
          explanation: "**SAT Pattern: Difference of Squares**\n\n**The correct answer is $3$.**\n\n**The Fast Way (5 seconds):** $x^2 = 9$, so $x = \\pm 3$. The positive value is $3$.\n\n**The Full Solution:**\n$x^2 - 9 = 0$\n$(x - 3)(x + 3) = 0$\n$x = 3$ or $x = -3$\nPositive value: $x = 3$.\n\n**Common Mistakes to Avoid:**\n• Giving $-3$ (the negative solution).\n• Giving $9$ ($x^2$, not $x$).\n\n**Verification:** $3^2 - 9 = 9 - 9 = 0$. Correct.\n\n**Test Day Takeaway:** $x^2 = c$ gives $x = \\pm\\sqrt{c}$. Read whether the question asks for positive, negative, or both.",
          skills: ["factoring", "quadratic-equations"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A triangle has angles measuring $x°$, $2x°$, and $3x°$. What is the value of $x$?",
          choices: [
            { id: "A", text: "$20$" },
            { id: "B", text: "$30$" },
            { id: "C", text: "$45$" },
            { id: "D", text: "$60$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $x + 2x + 3x = 180$, so $6x = 180$ and $x = 30$.\n\n**The Full Solution:**\nAngles of a triangle sum to $180°$:\n$x + 2x + 3x = 180$\n$6x = 180$\n$x = 30$\n\n**Why the wrong answers are tempting:**\n• Choice A ($20$): Uses $x + 2x + 3x = 120$ or makes an arithmetic error.\n• Choice C ($45$): May think two angles sum to $90°$.\n• Choice D ($60$): Divides $180$ by $3$ instead of $6$.\n\n**Test Day Takeaway:** Always use the triangle angle sum: $180°$. Combine like terms and solve.",
          skills: ["triangles", "angles"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $f(x) = 2x^2 - 3x + 1$, what is $f(-1)$?",
          choices: [
            { id: "A", text: "$0$" },
            { id: "B", text: "$2$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Evaluating a Quadratic Function**\n\n**Choice D is correct.**\n\n**The Fast Way (10 seconds):** $f(-1) = 2(1) - 3(-1) + 1 = 2 + 3 + 1 = 6$.\n\n**The Full Solution:**\n$f(-1) = 2(-1)^2 - 3(-1) + 1$\n$= 2(1) + 3 + 1$\n$= 2 + 3 + 1 = 6$\n\n**Why the wrong answers are tempting:**\n• Choice A ($0$): Computes $2 - 3 + 1 = 0$ (using $x = 1$ instead of $x = -1$).\n• Choice B ($2$): Computes $2(1) - 3(1) + 1 + 2 = 2$.\n• Choice C ($4$): Mishandles the signs: $2 + 3 - 1 = 4$.\n\n**Test Day Takeaway:** When substituting a negative value, be careful with signs: $(-1)^2 = 1$ and $-3(-1) = +3$.",
          skills: ["function-evaluation", "quadratic-functions"]
        },
        {
          id: 14,
          type: "fill-in",
          difficulty: "medium",
          question: "A proportion states $\\frac{3}{8} = \\frac{x}{24}$. What is the value of $x$?",
          correctAnswer: "9",
          explanation: "**SAT Pattern: Solving a Proportion**\n\n**The correct answer is $9$.**\n\n**The Fast Way (5 seconds):** $24 \\div 8 = 3$, so $x = 3 \\times 3 = 9$.\n\n**The Full Solution:**\n$\\frac{3}{8} = \\frac{x}{24}$\nCross-multiply: $3 \\times 24 = 8x$\n$72 = 8x$\n$x = 9$\n\n**Common Mistakes to Avoid:**\n• Cross-multiplying incorrectly: $3x = 8 \\times 24$.\n\n**Verification:** $\\frac{9}{24} = \\frac{3}{8}$. Correct.\n\n**Test Day Takeaway:** Cross-multiply or find the scale factor to solve proportions.",
          skills: ["ratios-proportions", "solving-equations"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The inequality $3x - 7 > 14$ is satisfied by which of the following values of $x$?",
          choices: [
            { id: "A", text: "$5$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$7$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Solving a Linear Inequality**\n\n**Choice D is correct.**\n\n**The Fast Way (10 seconds):** $3x > 21$, so $x > 7$. The only choice greater than $7$ is $8$.\n\n**The Full Solution:**\n$3x - 7 > 14$\n$3x > 21$\n$x > 7$\nOnly $x = 8$ satisfies this.\n\n**Why the wrong answers are tempting:**\n• Choice A ($5$): $3(5) - 7 = 8 \\not> 14$.\n• Choice B ($6$): $3(6) - 7 = 11 \\not> 14$.\n• Choice C ($7$): $3(7) - 7 = 14 \\not> 14$ (not strictly greater).\n\n**Test Day Takeaway:** Solve inequalities like equations. Remember: $>$ means strictly greater than, not $\\geq$.",
          skills: ["inequalities", "solving-equations"]
        },

        // ===== HARD (Q16-Q22) =====
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $f(x) = 3x^2 - 18x + 30$ has a minimum value. What is this minimum value?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$12$" },
            { id: "D", text: "$30$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Minimum of a Quadratic**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** $x = \\frac{18}{6} = 3$. $f(3) = 3(9) - 18(3) + 30 = 27 - 54 + 30 = 3$.\n\n**The Full Solution:**\n$x_{\\text{vertex}} = \\frac{-b}{2a} = \\frac{18}{6} = 3$\n$f(3) = 3(9) - 54 + 30 = 27 - 54 + 30 = 3$\n\nAlternatively: $f(x) = 3(x^2 - 6x) + 30 = 3(x^2 - 6x + 9 - 9) + 30 = 3(x-3)^2 - 27 + 30 = 3(x-3)^2 + 3$.\nMinimum $= 3$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($6$): Half of $-b = 18$ divided by $a = 3$... various miscalculations.\n• Choice C ($12$): May compute $f(2) = 12 - 36 + 30 = 6$ or another value.\n• Choice D ($30$): The $y$-intercept, $f(0)$.\n\n**Test Day Takeaway:** Find the vertex $x$-coordinate with $\\frac{-b}{2a}$, then plug back in to find the minimum $y$-value.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 17,
          type: "fill-in",
          difficulty: "hard",
          question: "The expression $\\frac{x^2 - 16}{x - 4}$ is equivalent to what expression for all $x \\neq 4$?",
          correctAnswer: "x + 4",
          explanation: "**SAT Pattern: Simplifying Rational Expressions**\n\n**The correct answer is $x + 4$.**\n\n**The Fast Way (10 seconds):** $x^2 - 16 = (x-4)(x+4)$. Divide by $(x-4)$: $x + 4$.\n\n**The Full Solution:**\n$\\frac{x^2 - 16}{x - 4} = \\frac{(x-4)(x+4)}{x-4} = x + 4$ for $x \\neq 4$.\n\n**Common Mistakes to Avoid:**\n• Canceling incorrectly to get $x - 4$ or just $4$.\n• Not recognizing $x^2 - 16$ as a difference of squares.\n\n**Verification:** Let $x = 5$: $\\frac{25 - 16}{5 - 4} = \\frac{9}{1} = 9$ and $5 + 4 = 9$. Correct.\n\n**Test Day Takeaway:** Factor the numerator using difference of squares: $a^2 - b^2 = (a-b)(a+b)$.",
          skills: ["factoring", "algebraic-manipulation"]
        },
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A spaceship travels a distance $d$ that varies directly with the square of its speed $s$. If $d = 100$ when $s = 5$, what is $d$ when $s = 10$?",
          choices: [
            { id: "A", text: "$200$" },
            { id: "B", text: "$400$" },
            { id: "C", text: "$500$" },
            { id: "D", text: "$1{,}000$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Direct Variation with Square**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $d = ks^2$. $100 = k(25)$, so $k = 4$. $d = 4(100) = 400$.\n\n**The Full Solution:**\n$d = ks^2$\n$100 = k(5)^2 = 25k$\n$k = 4$\n$d = 4(10)^2 = 4(100) = 400$\n\n**Why the wrong answers are tempting:**\n• Choice A ($200$): Assumes $d$ varies directly with $s$ (linear): $100 \\times 2 = 200$.\n• Choice C ($500$): Computes $100 \\times 5$.\n• Choice D ($1{,}000$): Computes $100 \\times 10$.\n\n**Test Day Takeaway:** \"Varies directly with the square\" means $d = ks^2$. Find $k$ first, then use it.",
          skills: ["ratios-proportions", "quadratic-functions"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $\\sqrt{2x + 5} = 7$, what is the value of $2x + 5$?",
          choices: [
            { id: "A", text: "$7$" },
            { id: "B", text: "$14$" },
            { id: "C", text: "$44$" },
            { id: "D", text: "$49$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Radical Equation Shortcut**\n\n**Choice D is correct.**\n\n**The Fast Way (5 seconds):** If $\\sqrt{\\text{something}} = 7$, then something $= 49$. So $2x + 5 = 49$.\n\n**The Full Solution:**\n$\\sqrt{2x + 5} = 7$\nSquare both sides: $2x + 5 = 49$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($7$): Uses the right-hand side without squaring.\n• Choice B ($14$): Computes $7 \\times 2$.\n• Choice C ($44$): Solves for $x$ ($x = 22$) and computes $2(22) = 44$.\n\n**Test Day Takeaway:** Read what the question asks. It asks for $2x + 5$, not $x$. Square both sides: done.",
          skills: ["radical-equations", "solving-equations"]
        },
        {
          id: 20,
          type: "fill-in",
          difficulty: "hard",
          question: "A cone has a radius of $3$ and a height of $12$. What is the volume of the cone? (Volume of a cone: $V = \\frac{1}{3}\\pi r^2 h$). Give your answer in terms of $\\pi$. (Enter the coefficient of $\\pi$.)",
          correctAnswer: "36",
          explanation: "**SAT Pattern: Volume Formula Application**\n\n**The correct answer is $36$ (the volume is $36\\pi$).**\n\n**The Fast Way (10 seconds):** $V = \\frac{1}{3}\\pi(3)^2(12) = \\frac{1}{3}\\pi(9)(12) = \\frac{108\\pi}{3} = 36\\pi$.\n\n**The Full Solution:**\n$V = \\frac{1}{3}\\pi r^2 h$\n$= \\frac{1}{3}\\pi(9)(12)$\n$= \\frac{108\\pi}{3}$\n$= 36\\pi$\n\n**Common Mistakes to Avoid:**\n• Forgetting the $\\frac{1}{3}$: $\\pi(9)(12) = 108\\pi$.\n• Using $2r$ instead of $r^2$.\n\n**Verification:** $\\frac{1}{3}(9)(12) = \\frac{108}{3} = 36$.\n\n**Test Day Takeaway:** The cone volume is $\\frac{1}{3}$ of the cylinder volume with the same base and height.",
          skills: ["volume"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In the $xy$-plane, the parabola $y = (x - 2)(x - 8)$ has a vertex at $(h, k)$. What is the value of $k$?",
          choices: [
            { id: "A", text: "$-9$" },
            { id: "B", text: "$-5$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$16$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Vertex from Factored Form**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** The roots are $x = 2$ and $x = 8$. Vertex $x = \\frac{2+8}{2} = 5$. $k = (5-2)(5-8) = (3)(-3) = -9$.\n\n**The Full Solution:**\n$y = (x-2)(x-8)$\nRoots: $x = 2$ and $x = 8$.\nVertex $x$-coordinate $= \\frac{2+8}{2} = 5$.\n$k = f(5) = (5-2)(5-8) = (3)(-3) = -9$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($-5$): Confuses the vertex $x$-coordinate ($5$) with $k$, with a sign flip.\n• Choice C ($5$): This is $h$, the $x$-coordinate.\n• Choice D ($16$): Computes $2 \\times 8 = 16$ (the product of the roots).\n\n**Test Day Takeaway:** From factored form, the vertex $x$ is the midpoint of the roots. Plug back in to find $k$.",
          skills: ["quadratic-functions", "factoring"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In a $45$-$45$-$90$ triangle, the hypotenuse has length $10\\sqrt{2}$. What is the length of each leg?",
          choices: [
            { id: "A", text: "$5$" },
            { id: "B", text: "$5\\sqrt{2}$" },
            { id: "C", text: "$10$" },
            { id: "D", text: "$10\\sqrt{2}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: 45-45-90 Special Right Triangle**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** In a $45$-$45$-$90$ triangle, hypotenuse $= \\text{leg} \\times \\sqrt{2}$. So leg $= \\frac{10\\sqrt{2}}{\\sqrt{2}} = 10$.\n\n**The Full Solution:**\nIn a $45$-$45$-$90$ triangle, the sides are in the ratio $1 : 1 : \\sqrt{2}$.\n$\\text{leg} \\times \\sqrt{2} = 10\\sqrt{2}$\n$\\text{leg} = 10$\n\n**Why the wrong answers are tempting:**\n• Choice A ($5$): Divides the hypotenuse by $2\\sqrt{2}$ or by $2$.\n• Choice B ($5\\sqrt{2}$): Divides $10\\sqrt{2}$ by $2$, treating it like a $30$-$60$-$90$ triangle.\n• Choice D ($10\\sqrt{2}$): Uses the hypotenuse as the leg.\n\n**Test Day Takeaway:** $45$-$45$-$90$ sides: $s$, $s$, $s\\sqrt{2}$. Divide the hypotenuse by $\\sqrt{2}$ to get each leg.",
          skills: ["special-right-triangles", "triangles"]
        }
      ]
    }
  ]
};

export default practiceTest12;
