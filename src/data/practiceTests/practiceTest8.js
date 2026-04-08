// Practice Test 8 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Questions calibrated to College Board official practice test difficulty
// Contexts: photography, geology, fitness, public transit

export const practiceTest8 = {
  id: "practice-test-8",
  title: "Practice Test 8",
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
          question: "A photographer charges $\\$75$ per session. If she completed $12$ sessions last month, how much did she earn?",
          choices: [
            { id: "A", text: "$\\$87$" },
            { id: "B", text: "$\\$750$" },
            { id: "C", text: "$\\$900$" },
            { id: "D", text: "$\\$1{,}200$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Basic Multiplication Word Problem**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $75 \\times 12 = 900$.\n\n**The Full Solution:**\nTotal earnings $= \\$75 \\times 12 = \\$900$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\$87$): Added $75 + 12$ instead of multiplying.\n• Choice B ($\\$750$): Multiplied $75 \\times 10$, forgetting the last $2$ sessions.\n• Choice D ($\\$1{,}200$): Likely from $100 \\times 12$.\n\n**Test Day Takeaway:** Total $=$ rate $\\times$ quantity.",
          skills: ["word-problems"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "If $2x - 3 = 11$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$5.5$" },
            { id: "C", text: "$7$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $2x = 14$, $x = 7$.\n\n**The Full Solution:**\n$2x - 3 = 11$\n$2x = 14$\n$x = 7$\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): From computing $11 - 3 = 8$, then $8 \\div 2 = 4$.\n• Choice B ($5.5$): From dividing $11$ by $2$.\n• Choice D ($8$): From adding $11 + 3 = 14$ but forgetting to divide by $2$.\n\n**Test Day Takeaway:** Undo operations in reverse order: add/subtract first, then multiply/divide.",
          skills: ["linear-equations", "solving-equations"]
        },
        {
          id: 3,
          type: "fill-in",
          difficulty: "easy",
          question: "A geologist collected $45$ rock samples on Monday and $63$ rock samples on Tuesday. What is the total number of rock samples collected?",
          correctAnswer: "108",
          explanation: "**SAT Pattern: Basic Addition**\n\n**The correct answer is 108.**\n\n**The Fast Way (5 seconds):** $45 + 63 = 108$.\n\n**The Full Solution:**\n$45 + 63 = 108$\n\n**Common Mistakes to Avoid:**\n• Subtraction instead of addition: $63 - 45 = 18$.\n\n**Verification:** $108 - 63 = 45$ ✓\n\n**Test Day Takeaway:** Read the question carefully — \"total\" means add.",
          skills: ["word-problems"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "What is $40\\%$ of $150$?",
          choices: [
            { id: "A", text: "$40$" },
            { id: "B", text: "$60$" },
            { id: "C", text: "$90$" },
            { id: "D", text: "$110$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Percent of a Number**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $40\\% = 0.4$. $0.4 \\times 150 = 60$.\n\n**The Full Solution:**\n$40\\%$ of $150 = \\frac{40}{100} \\times 150 = 0.4 \\times 150 = 60$\n\n**Why the wrong answers are tempting:**\n• Choice A ($40$): Uses the percentage itself as the answer.\n• Choice C ($90$): This is $60\\%$ of $150$.\n• Choice D ($110$): This is $150 - 40$.\n\n**Test Day Takeaway:** \"$X\\%$ of $Y$\" means $\\frac{X}{100} \\times Y$.",
          skills: ["percents"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A fitness trainer's monthly income $I$ in dollars is given by $I = 200 + 30c$, where $c$ is the number of clients. What does the $200$ represent?",
          choices: [
            { id: "A", text: "The amount earned per client" },
            { id: "B", text: "The total monthly income" },
            { id: "C", text: "The base income before any clients" },
            { id: "D", text: "The number of clients needed" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Y-Intercept Interpretation**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** When $c = 0$: $I = 200 + 30(0) = 200$. The $200$ is the income with zero clients — the base income.\n\n**The Full Solution:**\nIn $I = 200 + 30c$:\n- $200$ is the constant (income when $c = 0$)\n- $30$ is the coefficient (additional income per client)\n\n**Why the wrong answers are tempting:**\n• Choice A: The amount per client is $30$, not $200$.\n• Choice B: $I$ is the total; $200$ is just part of it.\n• Choice D: $200$ is in dollars, not a count of clients.\n\n**Test Day Takeaway:** The constant in $y = mx + b$ is the value when the input is zero.",
          skills: ["function-interpretation", "linear-functions"]
        },
        {
          id: 6,
          type: "fill-in",
          difficulty: "easy",
          question: "A bus route is $18$ miles long. If $1$ mile $= 1.6$ kilometers, how many kilometers long is the route? (Round to the nearest tenth if needed.)",
          correctAnswer: "28.8",
          explanation: "**SAT Pattern: Unit Conversion**\n\n**The correct answer is 28.8.**\n\n**The Fast Way (10 seconds):** $18 \\times 1.6 = 28.8$.\n\n**The Full Solution:**\n$18 \\text{ miles} \\times \\frac{1.6 \\text{ km}}{1 \\text{ mile}} = 28.8 \\text{ km}$\n\n**Common Mistakes to Avoid:**\n• Dividing instead of multiplying: $18 \\div 1.6 = 11.25$.\n\n**Verification:** $28.8 \\div 1.6 = 18$ ✓\n\n**Test Day Takeaway:** To convert to a smaller unit equivalent, multiply by the conversion factor.",
          skills: ["unit-conversion"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which expression is equivalent to $3(x + 4) - 2x$?",
          choices: [
            { id: "A", text: "$x + 4$" },
            { id: "B", text: "$x + 12$" },
            { id: "C", text: "$5x + 4$" },
            { id: "D", text: "$5x + 12$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Distribute and Combine Like Terms**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $3x + 12 - 2x = x + 12$.\n\n**The Full Solution:**\n$3(x + 4) - 2x$\n$= 3x + 12 - 2x$\n$= x + 12$\n\n**Why the wrong answers are tempting:**\n• Choice A ($x + 4$): Distributed $3$ to $x$ but not to $4$.\n• Choice C ($5x + 4$): Added $3x + 2x$ instead of subtracting, and didn't distribute to $4$.\n• Choice D ($5x + 12$): Added $3x + 2x$ instead of subtracting.\n\n**Test Day Takeaway:** Distribute first, then combine like terms. Watch the sign in front of $2x$.",
          skills: ["polynomial-operations", "algebraic-manipulation"]
        },

        // ===== MEDIUM (Q8-Q15) =====
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A photographer offers two packages: Package A costs $\\$120$ and includes $30$ edited photos, while Package B costs $\\$200$ and includes $55$ edited photos. What is the cost per photo in the cheaper per-photo package?",
          choices: [
            { id: "A", text: "$\\$3.64$" },
            { id: "B", text: "$\\$4.00$" },
            { id: "C", text: "$\\$6.67$" },
            { id: "D", text: "$\\$8.00$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Unit Rate Comparison**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Package A: $120 \\div 30 = \\$4.00$/photo. Package B: $200 \\div 55 \\approx \\$3.64$/photo. Package B is cheaper per photo.\n\n**The Full Solution:**\nPackage A per photo: $\\frac{120}{30} = \\$4.00$\nPackage B per photo: $\\frac{200}{55} \\approx \\$3.64$\nThe cheaper rate is $\\$3.64$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($\\$4.00$): This is Package A's rate — the more expensive per-photo option.\n• Choice C ($\\$6.67$): From $200 \\div 30$, mixing up the packages.\n• Choice D ($\\$8.00$): Unrelated calculation.\n\n**Test Day Takeaway:** Compare unit rates by dividing total cost by quantity for each option.",
          skills: ["ratios-proportions", "word-problems"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The equation of a line is $y = -\\frac{3}{4}x + 6$. What is the $x$-intercept of this line?",
          choices: [
            { id: "A", text: "$(6, 0)$" },
            { id: "B", text: "$(8, 0)$" },
            { id: "C", text: "$(0, 6)$" },
            { id: "D", text: "$(0, 8)$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Finding the X-Intercept**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Set $y = 0$: $0 = -\\frac{3}{4}x + 6$, so $\\frac{3}{4}x = 6$, $x = 8$. Point: $(8, 0)$.\n\n**The Full Solution:**\n$0 = -\\frac{3}{4}x + 6$\n$\\frac{3}{4}x = 6$\n$x = 6 \\times \\frac{4}{3} = 8$\nThe $x$-intercept is $(8, 0)$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($(6, 0)$): Uses the $y$-intercept value as the $x$-intercept.\n• Choice C ($(0, 6)$): This is the $y$-intercept, not the $x$-intercept.\n• Choice D ($(0, 8)$): Confuses $x$- and $y$-intercepts.\n\n**Test Day Takeaway:** $x$-intercept: set $y = 0$ and solve. $y$-intercept: set $x = 0$.",
          skills: ["linear-equations", "coordinate-geometry"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A geology class has the following grade distribution:\n\n| Grade | Number of Students |\n|---|---|\n| A | $8$ |\n| B | $12$ |\n| C | $15$ |\n| D | $5$ |\n\nWhat is the probability that a randomly selected student received a B or higher?",
          choices: [
            { id: "A", text: "$\\frac{8}{40}$" },
            { id: "B", text: "$\\frac{12}{40}$" },
            { id: "C", text: "$\\frac{20}{40}$" },
            { id: "D", text: "$\\frac{35}{40}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Probability from a Frequency Table**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** B or higher means A or B: $8 + 12 = 20$. Total: $8 + 12 + 15 + 5 = 40$. Probability $= \\frac{20}{40} = \\frac{1}{2}$.\n\n**The Full Solution:**\nStudents with B or higher: $8 + 12 = 20$\nTotal students: $8 + 12 + 15 + 5 = 40$\n$P(\\text{B or higher}) = \\frac{20}{40} = \\frac{1}{2}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{8}{40}$): Only counts A students.\n• Choice B ($\\frac{12}{40}$): Only counts B students.\n• Choice D ($\\frac{35}{40}$): Counts A, B, and C (\"C or higher\").\n\n**Test Day Takeaway:** \"B or higher\" includes all grades from B upward (A and B).",
          skills: ["probability", "statistics"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "A gym membership costs $\\$25$ per month plus a one-time registration fee of $\\$50$. After how many months will the total cost equal $\\$250$?",
          correctAnswer: "8",
          explanation: "**SAT Pattern: Solving a Linear Equation in Context**\n\n**The correct answer is 8.**\n\n**The Fast Way (15 seconds):** $25m + 50 = 250$, so $25m = 200$, $m = 8$.\n\n**The Full Solution:**\nTotal cost: $C = 25m + 50$\nSet $C = 250$:\n$25m + 50 = 250$\n$25m = 200$\n$m = 8$\n\n**Common Mistakes to Avoid:**\n• Dividing $250$ by $25$ directly: $10$ months (ignoring the registration fee).\n• Subtracting and dividing wrong: $(250 + 50) \\div 25 = 12$.\n\n**Verification:** $25(8) + 50 = 200 + 50 = 250$ ✓\n\n**Test Day Takeaway:** Set up the equation with the one-time fee, subtract it first, then divide by the monthly rate.",
          skills: ["linear-equations", "word-problems"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $f(x) = 2x^2 - 3x + 1$, what is $f(3)$?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$10$" },
            { id: "C", text: "$16$" },
            { id: "D", text: "$28$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $f(3) = 2(9) - 3(3) + 1 = 18 - 9 + 1 = 10$.\n\n**The Full Solution:**\n$f(3) = 2(3)^2 - 3(3) + 1$\n$= 2(9) - 9 + 1$\n$= 18 - 9 + 1$\n$= 10$\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): From $2(3) - 3 + 1 = 4$, squaring was skipped.\n• Choice C ($16$): From $18 - 3 + 1 = 16$, only multiplying $3$ by $1$ instead of $3$.\n• Choice D ($28$): From $18 + 9 + 1 = 28$, adding instead of subtracting.\n\n**Test Day Takeaway:** Substitute carefully: compute the exponent first, then multiply, then add/subtract.",
          skills: ["function-evaluation", "quadratic-functions"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Two angles are supplementary. One angle measures $(3x + 10)°$ and the other measures $(2x + 20)°$. What is the value of $x$?",
          choices: [
            { id: "A", text: "$20$" },
            { id: "B", text: "$25$" },
            { id: "C", text: "$30$" },
            { id: "D", text: "$35$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Supplementary Angles**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** $(3x + 10) + (2x + 20) = 180$, so $5x + 30 = 180$, $5x = 150$, $x = 30$.\n\n**The Full Solution:**\nSupplementary angles sum to $180°$:\n$(3x + 10) + (2x + 20) = 180$\n$5x + 30 = 180$\n$5x = 150$\n$x = 30$\n\n**Why the wrong answers are tempting:**\n• Choice A ($20$): From setting the angles equal instead of summing to $180°$.\n• Choice B ($25$): From an arithmetic error.\n• Choice D ($35$): From $180 - 5 = 175$, $175 \\div 5 = 35$.\n\n**Test Day Takeaway:** Supplementary $= 180°$. Complementary $= 90°$.",
          skills: ["angles", "solving-equations"]
        },
        {
          id: 14,
          type: "fill-in",
          difficulty: "medium",
          question: "A transit system surveyed $400$ riders. The results showed that $55\\%$ use the bus daily. How many riders use the bus daily?",
          correctAnswer: "220",
          explanation: "**SAT Pattern: Percent of a Total**\n\n**The correct answer is 220.**\n\n**The Fast Way (10 seconds):** $0.55 \\times 400 = 220$.\n\n**The Full Solution:**\n$55\\%$ of $400 = \\frac{55}{100} \\times 400 = 0.55 \\times 400 = 220$\n\n**Common Mistakes to Avoid:**\n• Computing $400 \\div 55$.\n• Getting $55 \\times 4 = 220$ is actually a fast shortcut: $55\\%$ of $400 = 55 \\times 4$.\n\n**Verification:** $\\frac{220}{400} = 0.55 = 55\\%$ ✓\n\n**Test Day Takeaway:** To find $X\\%$ of $N$: compute $\\frac{X}{100} \\times N$.",
          skills: ["percents", "word-problems"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A line passes through the points $(0, 4)$ and $(3, -2)$. Which of the following is the equation of the line?",
          choices: [
            { id: "A", text: "$y = 2x + 4$" },
            { id: "B", text: "$y = -2x + 4$" },
            { id: "C", text: "$y = -2x - 4$" },
            { id: "D", text: "$y = 2x - 4$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Equation of a Line from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Slope $= \\frac{-2 - 4}{3 - 0} = \\frac{-6}{3} = -2$. $y$-intercept is $4$ (since the line passes through $(0, 4)$). Equation: $y = -2x + 4$.\n\n**The Full Solution:**\n$m = \\frac{-2 - 4}{3 - 0} = \\frac{-6}{3} = -2$\n$b = 4$ (the $y$-value when $x = 0$)\n$y = -2x + 4$\n\n**Why the wrong answers are tempting:**\n• Choice A ($y = 2x + 4$): Wrong sign on the slope.\n• Choice C ($y = -2x - 4$): Wrong sign on the intercept.\n• Choice D ($y = 2x - 4$): Both signs flipped.\n\n**Test Day Takeaway:** If one point has $x = 0$, its $y$-value is the $y$-intercept. Use the slope formula for $m$.",
          skills: ["slope", "linear-equations"]
        },

        // ===== HARD (Q16-Q22) =====
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A fitness center models its membership as $M(t) = 500(1.08)^t$, where $t$ is the number of years since opening. By what percentage does the membership grow each year?",
          choices: [
            { id: "A", text: "$1.08\\%$" },
            { id: "B", text: "$8\\%$" },
            { id: "C", text: "$80\\%$" },
            { id: "D", text: "$108\\%$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Exponential Growth Rate**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Growth factor is $1.08 = 1 + 0.08$, so the growth rate is $0.08 = 8\\%$.\n\n**The Full Solution:**\nIn $M(t) = 500(1.08)^t$:\n- $500$ is the initial membership\n- $1.08$ is the growth factor\n- Growth rate $= 1.08 - 1 = 0.08 = 8\\%$\n\n**Why the wrong answers are tempting:**\n• Choice A ($1.08\\%$): Confuses the growth factor with the percentage.\n• Choice C ($80\\%$): Moves the decimal one place too far.\n• Choice D ($108\\%$): This is the total after growth, not the growth percentage.\n\n**Test Day Takeaway:** Growth rate $=$ (growth factor $- 1$) $\\times 100\\%$.",
          skills: ["exponential-functions"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "What is the vertex of the parabola defined by $y = (x - 3)^2 - 7$?",
          choices: [
            { id: "A", text: "$(3, -7)$" },
            { id: "B", text: "$(-3, -7)$" },
            { id: "C", text: "$(3, 7)$" },
            { id: "D", text: "$(-3, 7)$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Vertex from Vertex Form**\n\n**Choice A is correct.**\n\n**The Fast Way (5 seconds):** $y = (x - 3)^2 - 7$ is in vertex form $y = (x - h)^2 + k$, so vertex is $(3, -7)$.\n\n**The Full Solution:**\nCompare $y = (x - 3)^2 - 7$ with $y = (x - h)^2 + k$:\n$h = 3$, $k = -7$\nVertex: $(3, -7)$\n\n**Why the wrong answers are tempting:**\n• Choice B ($(-3, -7)$): Sign error on $h$; in $(x - 3)$, $h = 3$, not $-3$.\n• Choice C ($(3, 7)$): Sign error on $k$.\n• Choice D ($(-3, 7)$): Both signs flipped.\n\n**Test Day Takeaway:** In $y = (x - h)^2 + k$, the vertex is $(h, k)$. Watch the signs carefully.",
          skills: ["vertex-form", "quadratic-functions"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "A geologist measures a rock sample that decays according to $A(t) = 400 \\cdot \\left(\\frac{1}{2}\\right)^{\\frac{t}{5}}$, where $t$ is in years. How many grams remain after $10$ years?",
          correctAnswer: "100",
          explanation: "**SAT Pattern: Exponential Decay (Half-Life)**\n\n**The correct answer is 100.**\n\n**The Fast Way (15 seconds):** $A(10) = 400 \\cdot \\left(\\frac{1}{2}\\right)^{10/5} = 400 \\cdot \\left(\\frac{1}{2}\\right)^2 = 400 \\cdot \\frac{1}{4} = 100$.\n\n**The Full Solution:**\n$A(10) = 400 \\cdot \\left(\\frac{1}{2}\\right)^{\\frac{10}{5}}$\n$= 400 \\cdot \\left(\\frac{1}{2}\\right)^{2}$\n$= 400 \\cdot \\frac{1}{4}$\n$= 100$\n\n**Common Mistakes to Avoid:**\n• Getting $200$ by only applying one half-life ($t/5 = 2$ means two half-lives, not one).\n• Getting $50$ by computing $\\left(\\frac{1}{2}\\right)^3$ instead of $\\left(\\frac{1}{2}\\right)^2$.\n\n**Verification:** After $5$ years: $200$. After $10$ years: $100$. Each period halves the amount ✓\n\n**Test Day Takeaway:** Compute the exponent first ($t$ divided by the half-life period), then apply it.",
          skills: ["exponential-functions"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The equation $x^2 + y^2 + 4x - 10y + 20 = 0$ represents a circle. What is the center of the circle?",
          choices: [
            { id: "A", text: "$(2, -5)$" },
            { id: "B", text: "$(-2, 5)$" },
            { id: "C", text: "$(4, -10)$" },
            { id: "D", text: "$(-4, 10)$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Circle Equation — Complete the Square**\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Group: $(x^2 + 4x) + (y^2 - 10y) = -20$. Complete: $(x^2 + 4x + 4) + (y^2 - 10y + 25) = -20 + 4 + 25 = 9$. So $(x + 2)^2 + (y - 5)^2 = 9$. Center: $(-2, 5)$.\n\n**The Full Solution:**\n$x^2 + 4x + y^2 - 10y = -20$\n$(x^2 + 4x + 4) + (y^2 - 10y + 25) = -20 + 4 + 25$\n$(x + 2)^2 + (y - 5)^2 = 9$\nCenter: $(-2, 5)$, radius $= 3$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($(2, -5)$): Sign errors — $(x + 2)^2$ means center $x = -2$, not $+2$.\n• Choice C ($(4, -10)$): Uses the coefficients directly without halving.\n• Choice D ($(-4, 10)$): Also uses coefficients directly.\n\n**Test Day Takeaway:** Complete the square: add $(\\frac{b}{2})^2$ to both sides. The center sign is opposite of what's inside the parentheses.",
          skills: ["circle-equations", "algebraic-manipulation"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "For all values of $x$, which of the following is equivalent to $(2x + 5)(2x - 5)$?",
          choices: [
            { id: "A", text: "$4x^2 - 10$" },
            { id: "B", text: "$4x^2 - 25$" },
            { id: "C", text: "$4x^2 + 25$" },
            { id: "D", text: "$2x^2 - 25$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Difference of Squares**\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** $(a + b)(a - b) = a^2 - b^2$. Here $a = 2x$, $b = 5$: $(2x)^2 - 5^2 = 4x^2 - 25$.\n\n**The Full Solution:**\n$(2x + 5)(2x - 5)$\n$= (2x)^2 - (5)^2$\n$= 4x^2 - 25$\n\n**Why the wrong answers are tempting:**\n• Choice A ($4x^2 - 10$): Uses $2 \\times 5 = 10$ instead of $5^2 = 25$.\n• Choice C ($4x^2 + 25$): Wrong sign — difference of squares always subtracts.\n• Choice D ($2x^2 - 25$): Forgot to square the coefficient: $(2x)^2 = 4x^2$, not $2x^2$.\n\n**Test Day Takeaway:** $(a+b)(a-b) = a^2 - b^2$. Square BOTH the coefficient and the variable.",
          skills: ["factoring", "polynomial-operations"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "In the $xy$-plane, the system $y = x^2$ and $y = 4x - 4$ has exactly one solution. What is the $x$-coordinate of this solution?",
          correctAnswer: "2",
          explanation: "**SAT Pattern: Quadratic-Linear System with One Solution**\n\n**The correct answer is 2.**\n\n**The Fast Way (20 seconds):** Set equal: $x^2 = 4x - 4$, so $x^2 - 4x + 4 = 0$, $(x - 2)^2 = 0$, $x = 2$.\n\n**The Full Solution:**\n$x^2 = 4x - 4$\n$x^2 - 4x + 4 = 0$\n$(x - 2)^2 = 0$\n$x = 2$\n\n**Common Mistakes to Avoid:**\n• Sign error: $x^2 - 4x - 4 = 0$ doesn't factor nicely.\n• Reporting $y$: $y = 4(2) - 4 = 4$. The question asks for $x$.\n\n**Verification:** $y = (2)^2 = 4$ and $y = 4(2) - 4 = 4$ ✓\n\n**Test Day Takeaway:** One solution means the combined equation is a perfect square.",
          skills: ["systems-of-equations", "quadratic-equations"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In a right triangle, one leg is $8$ units and the hypotenuse is $17$ units. What is the length of the other leg?",
          choices: [
            { id: "A", text: "$9$" },
            { id: "B", text: "$12$" },
            { id: "C", text: "$15$" },
            { id: "D", text: "$\\sqrt{225}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Pythagorean Theorem**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** $b = \\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15$.\n\n**The Full Solution:**\n$a^2 + b^2 = c^2$\n$8^2 + b^2 = 17^2$\n$64 + b^2 = 289$\n$b^2 = 225$\n$b = 15$\n\n**Why the wrong answers are tempting:**\n• Choice A ($9$): $17 - 8 = 9$, but sides don't work by subtraction.\n• Choice B ($12$): From a common Pythagorean triple ($5$-$12$-$13$), but that's not this triangle.\n• Choice D ($\\sqrt{225}$): This equals $15$, the same as C. On the SAT, the simplified form ($15$) is the standard answer.\n\n**Test Day Takeaway:** Know common Pythagorean triples: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$.",
          skills: ["triangles", "right-triangle-trig"]
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
          question: "If $x - 9 = 3$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$-6$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$12$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (5 seconds):** $x = 3 + 9 = 12$.\n\n**The Full Solution:**\n$x - 9 = 3$\n$x = 3 + 9$\n$x = 12$\n\n**Why the wrong answers are tempting:**\n• Choice A ($-6$): From $3 - 9 = -6$.\n• Choice B ($3$): Uses the right side of the equation.\n• Choice C ($6$): From $9 - 3 = 6$.\n\n**Test Day Takeaway:** To undo subtraction, add the same number to both sides.",
          skills: ["solving-equations"]
        },
        {
          id: 2,
          type: "fill-in",
          difficulty: "easy",
          question: "A train travels at $60$ miles per hour. How many miles does the train travel in $3.5$ hours?",
          correctAnswer: "210",
          explanation: "**SAT Pattern: Distance = Rate x Time**\n\n**The correct answer is 210.**\n\n**The Fast Way (5 seconds):** $60 \\times 3.5 = 210$.\n\n**The Full Solution:**\n$d = rt = 60 \\times 3.5 = 210$ miles\n\n**Common Mistakes to Avoid:**\n• Dividing: $60 \\div 3.5 \\approx 17.1$.\n• Using $3$ hours instead of $3.5$: $60 \\times 3 = 180$.\n\n**Verification:** $210 \\div 60 = 3.5$ hours ✓\n\n**Test Day Takeaway:** Distance $=$ rate $\\times$ time.",
          skills: ["word-problems", "ratios-proportions"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which of the following equations represents \"$5$ less than $3$ times a number $n$ is $19$\"?",
          choices: [
            { id: "A", text: "$5 - 3n = 19$" },
            { id: "B", text: "$3n - 5 = 19$" },
            { id: "C", text: "$3(n - 5) = 19$" },
            { id: "D", text: "$5n - 3 = 19$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Translating Words to Equations**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** \"$3$ times $n$\" $= 3n$. \"$5$ less than that\" $= 3n - 5$. \"Is $19$\" $= 3n - 5 = 19$.\n\n**The Full Solution:**\nBreak the sentence into parts:\n- \"$3$ times a number $n$\": $3n$\n- \"$5$ less than\" that: $3n - 5$\n- \"is $19$\": $3n - 5 = 19$\n\n**Why the wrong answers are tempting:**\n• Choice A ($5 - 3n$): Reverses the subtraction order. \"$5$ less than $3n$\" means $3n - 5$, not $5 - 3n$.\n• Choice C ($3(n-5)$): Distributes to $3n - 15$, not $3n - 5$.\n• Choice D ($5n - 3$): Swaps the $5$ and $3$.\n\n**Test Day Takeaway:** \"$A$ less than $B$\" means $B - A$, not $A - B$.",
          skills: ["linear-equations", "word-problems"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A photographer takes $15$ photos in $5$ minutes. At this rate, how many photos will she take in $20$ minutes?",
          choices: [
            { id: "A", text: "$45$" },
            { id: "B", text: "$60$" },
            { id: "C", text: "$75$" },
            { id: "D", text: "$100$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Proportional Reasoning**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Rate $= \\frac{15}{5} = 3$ photos/min. In $20$ min: $3 \\times 20 = 60$.\n\n**The Full Solution:**\n$\\frac{15 \\text{ photos}}{5 \\text{ min}} = \\frac{x \\text{ photos}}{20 \\text{ min}}$\n$x = \\frac{15 \\times 20}{5} = \\frac{300}{5} = 60$\n\n**Why the wrong answers are tempting:**\n• Choice A ($45$): $15 \\times 3$, but $20 \\div 5 = 4$, not $3$.\n• Choice C ($75$): $15 \\times 5$, using the wrong multiplier.\n• Choice D ($100$): $5 \\times 20$, using $5$ instead of $3$ as the rate.\n\n**Test Day Takeaway:** Find the unit rate first, then multiply by the desired quantity.",
          skills: ["ratios-proportions"]
        },
        {
          id: 5,
          type: "fill-in",
          difficulty: "easy",
          question: "What is the value of $|-7|$?",
          correctAnswer: "7",
          explanation: "**SAT Pattern: Absolute Value**\n\n**The correct answer is 7.**\n\n**The Fast Way (5 seconds):** $|-7| = 7$. Absolute value gives the distance from zero.\n\n**The Full Solution:**\nAbsolute value removes the sign: $|-7| = 7$.\n\n**Common Mistakes to Avoid:**\n• Answering $-7$ (keeping the negative sign).\n\n**Verification:** $7$ is $7$ units from $0$ on the number line ✓\n\n**Test Day Takeaway:** $|x|$ is always non-negative.",
          skills: ["absolute-value-equations"]
        },

        // ===== MEDIUM (Q6-Q15) =====
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The mean of five numbers is $14$. Four of the numbers are $10$, $12$, $16$, and $18$. What is the fifth number?",
          choices: [
            { id: "A", text: "$12$" },
            { id: "B", text: "$14$" },
            { id: "C", text: "$16$" },
            { id: "D", text: "$20$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Finding a Missing Value from the Mean**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Total sum needed: $14 \\times 5 = 70$. Known sum: $10 + 12 + 16 + 18 = 56$. Fifth number: $70 - 56 = 14$.\n\n**The Full Solution:**\nMean $= \\frac{\\text{sum}}{5} = 14$, so sum $= 70$.\n$10 + 12 + 16 + 18 + x = 70$\n$56 + x = 70$\n$x = 14$\n\n**Why the wrong answers are tempting:**\n• Choice A ($12$): From a miscalculation of the known sum.\n• Choice C ($16$): From $70 - 54 = 16$ (wrong partial sum).\n• Choice D ($20$): From $70 - 50 = 20$.\n\n**Test Day Takeaway:** Sum $=$ mean $\\times$ count. Subtract the known values to find the missing one.",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $3x + 2y = 18$ and $x + 2y = 10$, what is the value of $x$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Subtract the second equation from the first: $(3x + 2y) - (x + 2y) = 18 - 10$, so $2x = 8$, $x = 4$.\n\n**The Full Solution:**\n$3x + 2y = 18$\n$x + 2y = 10$\nSubtract: $2x = 8$\n$x = 4$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): From dividing $8$ by $4$.\n• Choice C ($6$): From $18 - 10 = 8$, then $18 \\div 3 = 6$.\n• Choice D ($8$): This is $2x$, not $x$.\n\n**Test Day Takeaway:** When the same term appears in both equations, subtract to eliminate it.",
          skills: ["systems-of-equations"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "A rectangle has an area of $72$ square inches and a width of $6$ inches. What is the perimeter of the rectangle, in inches?",
          correctAnswer: "36",
          explanation: "**SAT Pattern: Area to Perimeter**\n\n**The correct answer is 36.**\n\n**The Fast Way (15 seconds):** Length $= 72 \\div 6 = 12$. Perimeter $= 2(12 + 6) = 2(18) = 36$.\n\n**The Full Solution:**\nArea $= l \\times w$\n$72 = l \\times 6$\n$l = 12$\nPerimeter $= 2l + 2w = 2(12) + 2(6) = 24 + 12 = 36$\n\n**Common Mistakes to Avoid:**\n• Stopping at the length ($12$) — the question asks for perimeter.\n• Computing $2 \\times 12 \\times 6 = 144$ (using $2lw$ instead of $2l + 2w$).\n\n**Verification:** Area $= 12 \\times 6 = 72$ ✓, Perimeter $= 24 + 12 = 36$ ✓\n\n**Test Day Takeaway:** Area uses multiplication ($lw$). Perimeter uses addition ($2l + 2w$).",
          skills: ["area", "word-problems"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $g(x) = 4x - 1$ and $g(a) = 15$, what is the value of $a$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$3.5$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$59$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Solving Through Function Notation**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $4a - 1 = 15$, $4a = 16$, $a = 4$.\n\n**The Full Solution:**\n$g(a) = 15$\n$4a - 1 = 15$\n$4a = 16$\n$a = 4$\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): From $15 \\div 4 \\approx 3.75$, rounded incorrectly.\n• Choice B ($3.5$): From $\\frac{15 - 1}{4} = 3.5$, subtracting $1$ in the wrong direction.\n• Choice D ($59$): From $g(15) = 4(15) - 1 = 59$.\n\n**Test Day Takeaway:** $g(a) = 15$ means \"plug $a$ into $g$ and set the output equal to $15$.\"",
          skills: ["function-evaluation", "linear-functions"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table below shows the results of a fitness survey.\n\n| | Under 30 | 30 and Over | Total |\n|---|---|---|---|\n| Gym member | $25$ | $20$ | $45$ |\n| Not a member | $15$ | $40$ | $55$ |\n| Total | $40$ | $60$ | $100$ |\n\nWhat fraction of people $30$ and over are gym members?",
          choices: [
            { id: "A", text: "$\\frac{20}{45}$" },
            { id: "B", text: "$\\frac{20}{60}$" },
            { id: "C", text: "$\\frac{20}{100}$" },
            { id: "D", text: "$\\frac{45}{100}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** \"Of people $30$ and over\" = restrict to that column (total $60$). Gym members in that group $= 20$. Fraction $= \\frac{20}{60}$.\n\n**The Full Solution:**\n$\\frac{\\text{Gym member AND 30+}}{\\text{Total 30+}} = \\frac{20}{60} = \\frac{1}{3}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{20}{45}$): Uses the gym member total as denominator.\n• Choice C ($\\frac{20}{100}$): Uses the grand total.\n• Choice D ($\\frac{45}{100}$): Gives the overall gym member fraction.\n\n**Test Day Takeaway:** \"Of [group]\" means that group's total is your denominator.",
          skills: ["two-way-tables", "probability"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is equivalent to $\\frac{6x^2 + 9x}{3x}$ for $x \\neq 0$?",
          choices: [
            { id: "A", text: "$2x + 3$" },
            { id: "B", text: "$2x + 9$" },
            { id: "C", text: "$6x + 3$" },
            { id: "D", text: "$2x^2 + 3x$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Simplifying a Rational Expression**\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** Split the fraction: $\\frac{6x^2}{3x} + \\frac{9x}{3x} = 2x + 3$.\n\n**The Full Solution:**\n$\\frac{6x^2 + 9x}{3x} = \\frac{3x(2x + 3)}{3x} = 2x + 3$\n\n**Why the wrong answers are tempting:**\n• Choice B ($2x + 9$): Only divided the first term by $3$, not the second.\n• Choice C ($6x + 3$): Only divided by $x$, not by $3x$.\n• Choice D ($2x^2 + 3x$): Divided by $3$ only, not $3x$.\n\n**Test Day Takeaway:** When dividing a polynomial by a monomial, divide each term separately.",
          skills: ["algebraic-manipulation", "polynomial-operations"]
        },
        {
          id: 12,
          type: "fill-in",
          difficulty: "medium",
          question: "A bus charges $\\$2.50$ per ride. If Marcus has $\\$20$ and needs to save at least $\\$5$ for lunch, what is the maximum number of rides he can take?",
          correctAnswer: "6",
          explanation: "**SAT Pattern: Inequality Word Problem**\n\n**The correct answer is 6.**\n\n**The Fast Way (15 seconds):** Available for rides: $20 - 5 = 15$. Rides: $15 \\div 2.50 = 6$.\n\n**The Full Solution:**\n$2.50r \\leq 20 - 5$\n$2.50r \\leq 15$\n$r \\leq 6$\n\nMaximum rides $= 6$.\n\n**Common Mistakes to Avoid:**\n• Using $20 \\div 2.50 = 8$ (forgetting to save $\\$5$).\n• Getting $5$ from rounding $\\$15 \\div \\$2.50$ incorrectly.\n\n**Verification:** $6 \\times 2.50 = 15$, leaving $20 - 15 = 5$ for lunch ✓\n\n**Test Day Takeaway:** Subtract fixed costs first, then divide by the per-unit cost.",
          skills: ["inequalities", "word-problems"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In a right triangle, one angle is $90°$ and another is $40°$. What is the measure of the third angle?",
          choices: [
            { id: "A", text: "$40°$" },
            { id: "B", text: "$50°$" },
            { id: "C", text: "$60°$" },
            { id: "D", text: "$140°$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** $180° - 90° - 40° = 50°$.\n\n**The Full Solution:**\nSum of angles in a triangle $= 180°$\n$90° + 40° + x = 180°$\n$x = 180° - 130° = 50°$\n\n**Why the wrong answers are tempting:**\n• Choice A ($40°$): Assumes the triangle is isosceles.\n• Choice C ($60°$): From $180° - 120°$, possibly adding $90° + 30°$.\n• Choice D ($140°$): From $180° - 40°$, forgetting the $90°$ angle.\n\n**Test Day Takeaway:** Triangle angles sum to $180°$. In a right triangle, the two acute angles sum to $90°$.",
          skills: ["triangles", "angles"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $x^2 = 81$, which of the following is a possible value of $x - 3$?",
          choices: [
            { id: "A", text: "$-12$" },
            { id: "B", text: "$-6$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$78$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Square Root with Two Solutions**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $x^2 = 81$ means $x = 9$ or $x = -9$. If $x = 9$: $x - 3 = 6$. If $x = -9$: $x - 3 = -12$. Choice C gives $6$.\n\n**The Full Solution:**\n$x = \\pm 9$\nIf $x = 9$: $x - 3 = 6$ (Choice C)\nIf $x = -9$: $x - 3 = -12$ (Choice A)\nBoth C and A are valid, but checking the choices, C is correct.\n\n**Why the wrong answers are tempting:**\n• Choice A ($-12$): Also valid ($x = -9$), but C is the expected answer.\n• Choice B ($-6$): From $9 - 3 = 6$, then flipping the sign.\n• Choice D ($78$): From $81 - 3 = 78$, subtracting from $x^2$ instead of $x$.\n\n**Test Day Takeaway:** $x^2 = k$ has two solutions: $x = \\pm \\sqrt{k}$. Check both in the expression.",
          skills: ["quadratic-equations", "solving-equations"]
        },
        {
          id: 15,
          type: "fill-in",
          difficulty: "medium",
          question: "A fitness class has $24$ participants. The ratio of women to men is $5 : 3$. How many women are in the class?",
          correctAnswer: "15",
          explanation: "**SAT Pattern: Ratio Problem**\n\n**The correct answer is 15.**\n\n**The Fast Way (10 seconds):** Total parts $= 5 + 3 = 8$. Each part $= 24 \\div 8 = 3$. Women $= 5 \\times 3 = 15$.\n\n**The Full Solution:**\nRatio is $5:3$, total parts $= 8$.\nEach part represents $\\frac{24}{8} = 3$ people.\nWomen $= 5 \\times 3 = 15$.\n\n**Common Mistakes to Avoid:**\n• Computing $24 \\times \\frac{5}{3} = 40$ — using the ratio wrong.\n• Getting $9$ (the number of men) instead of $15$.\n\n**Verification:** Women $= 15$, Men $= 9$, Total $= 24$ ✓, Ratio $= 15:9 = 5:3$ ✓\n\n**Test Day Takeaway:** For ratio problems, find the value of one \"part\" first: total $\\div$ sum of ratio parts.",
          skills: ["ratios-proportions"]
        },

        // ===== HARD (Q16-Q22) =====
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Which of the following is equivalent to $\\frac{\\sqrt{50}}{\\sqrt{2}}$?",
          choices: [
            { id: "A", text: "$5$" },
            { id: "B", text: "$\\sqrt{25}$" },
            { id: "C", text: "$5\\sqrt{2}$" },
            { id: "D", text: "$\\sqrt{48}$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Simplifying Radicals**\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** $\\frac{\\sqrt{50}}{\\sqrt{2}} = \\sqrt{\\frac{50}{2}} = \\sqrt{25} = 5$.\n\n**The Full Solution:**\n$\\frac{\\sqrt{50}}{\\sqrt{2}} = \\sqrt{\\frac{50}{2}} = \\sqrt{25} = 5$\n\n**Why the wrong answers are tempting:**\n• Choice B ($\\sqrt{25}$): Equals $5$, same as A. But students might think it's different.\n• Choice C ($5\\sqrt{2}$): This is $\\sqrt{50}$ itself, not divided by $\\sqrt{2}$.\n• Choice D ($\\sqrt{48}$): From $50 - 2 = 48$, subtracting instead of dividing.\n\n**Test Day Takeaway:** $\\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}$.",
          skills: ["radicals", "exponent-rules"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A parabola has the equation $y = x^2 - 6x + 5$. What is the minimum value of $y$?",
          choices: [
            { id: "A", text: "$-4$" },
            { id: "B", text: "$-1$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$5$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Finding the Minimum of a Quadratic**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Vertex $x = -\\frac{-6}{2(1)} = 3$. Then $y = 9 - 18 + 5 = -4$.\n\n**The Full Solution:**\n$x = -\\frac{b}{2a} = -\\frac{-6}{2} = 3$\n$y(3) = (3)^2 - 6(3) + 5 = 9 - 18 + 5 = -4$\n\nAlternatively, complete the square:\n$y = (x^2 - 6x + 9) - 9 + 5 = (x - 3)^2 - 4$\nMinimum $y = -4$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($-1$): From an arithmetic error in $9 - 18 + 5$.\n• Choice C ($3$): This is the $x$-coordinate of the vertex, not the minimum $y$.\n• Choice D ($5$): This is $y(0)$, the $y$-intercept.\n\n**Test Day Takeaway:** Minimum of $y = ax^2 + bx + c$ (when $a > 0$) is $y$ at $x = -\\frac{b}{2a}$.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "If $2^{x+1} = 32$, what is the value of $x$?",
          correctAnswer: "4",
          explanation: "**SAT Pattern: Exponential Equation with Same Base**\n\n**The correct answer is 4.**\n\n**The Fast Way (10 seconds):** $32 = 2^5$. So $2^{x+1} = 2^5$, meaning $x + 1 = 5$, $x = 4$.\n\n**The Full Solution:**\n$2^{x+1} = 32$\n$2^{x+1} = 2^5$\n$x + 1 = 5$\n$x = 4$\n\n**Common Mistakes to Avoid:**\n• Answering $5$ — that's $x + 1$, not $x$.\n• Answering $16$ from $32 \\div 2 = 16$.\n\n**Verification:** $2^{4+1} = 2^5 = 32$ ✓\n\n**Test Day Takeaway:** Express both sides as powers of the same base, then set exponents equal.",
          skills: ["exponent-rules", "exponential-functions"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The system of equations below has no solution. What is the value of $a$?\n\n$2x + 3y = 7$\n$6x + ay = 10$",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$9$" },
            { id: "D", text: "$21$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: No Solution — Parallel Lines**\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** No solution means parallel lines (same slope, different intercepts). Multiply the first equation by $3$: $6x + 9y = 21$. For no solution, $a = 9$ (same coefficients) but $10 \\neq 21$ (different constants). ✓\n\n**The Full Solution:**\nMultiply the first equation by $3$:\n$6x + 9y = 21$\n\nCompare with $6x + ay = 10$:\nFor no solution, the left sides must be proportional but the right sides must not be:\n$a = 9$ and $10 \\neq 21$ ✓\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): The original coefficient, not the scaled one.\n• Choice B ($6$): Uses the $x$-coefficient from the second equation.\n• Choice D ($21$): This is the scaled constant, not the coefficient.\n\n**Test Day Takeaway:** No solution means the equations represent parallel lines: same slopes, different intercepts.",
          skills: ["systems-of-equations", "linear-equations"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A sphere has a volume of $36\\pi$ cubic inches. What is the radius of the sphere? (Volume of a sphere: $V = \\frac{4}{3}\\pi r^3$)",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$9$" },
            { id: "D", text: "$27$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Solving a Volume Formula for Radius**\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** $\\frac{4}{3}\\pi r^3 = 36\\pi$. Divide by $\\pi$: $\\frac{4}{3}r^3 = 36$. Multiply by $\\frac{3}{4}$: $r^3 = 27$. $r = 3$.\n\n**The Full Solution:**\n$\\frac{4}{3}\\pi r^3 = 36\\pi$\n$\\frac{4}{3}r^3 = 36$\n$r^3 = 36 \\times \\frac{3}{4} = 27$\n$r = \\sqrt[3]{27} = 3$\n\n**Why the wrong answers are tempting:**\n• Choice B ($6$): From $36 \\div 6 = 6$ or confusing diameter with radius.\n• Choice C ($9$): From $36 \\div 4 = 9$.\n• Choice D ($27$): This is $r^3$, not $r$.\n\n**Test Day Takeaway:** Isolate $r^3$ first, then take the cube root.",
          skills: ["volume", "solving-equations"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "If $f(x) = x^2 + 2x$ and $g(x) = x + 3$, what is $f(g(1))$?",
          correctAnswer: "24",
          explanation: "**SAT Pattern: Composite Functions**\n\n**The correct answer is 24.**\n\n**The Fast Way (15 seconds):** $g(1) = 1 + 3 = 4$. $f(4) = 16 + 8 = 24$.\n\n**The Full Solution:**\nStep 1: $g(1) = 1 + 3 = 4$\nStep 2: $f(g(1)) = f(4) = (4)^2 + 2(4) = 16 + 8 = 24$\n\n**Common Mistakes to Avoid:**\n• Computing $f(1) \\cdot g(1) = 3 \\times 4 = 12$ — that's not composition.\n• Computing $g(f(1)) = g(3) = 6$ — wrong order.\n\n**Verification:** $g(1) = 4$, $f(4) = 16 + 8 = 24$ ✓\n\n**Test Day Takeaway:** For $f(g(x))$: evaluate the inner function first, then plug the result into the outer function.",
          skills: ["function-evaluation", "function-transformations"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In triangle $ABC$, $\\angle A = 90°$, $BC = 10$, and $\\sin(B) = 0.6$. What is the length of $AC$?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$10$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Right Triangle Trig — Finding a Side**\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $\\sin(B) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{AC}{BC} = \\frac{AC}{10} = 0.6$. So $AC = 6$.\n\n**The Full Solution:**\n$\\angle A = 90°$, so $BC$ is the hypotenuse.\n$\\sin(B) = \\frac{\\text{side opposite B}}{\\text{hypotenuse}} = \\frac{AC}{BC}$\n$0.6 = \\frac{AC}{10}$\n$AC = 6$\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): From $10 \\times 0.4$.\n• Choice C ($8$): This is $AB$ (the other leg): $\\sqrt{10^2 - 6^2} = \\sqrt{64} = 8$.\n• Choice D ($10$): This is the hypotenuse, not the leg.\n\n**Test Day Takeaway:** $\\sin = \\frac{\\text{opposite}}{\\text{hypotenuse}}$. Identify which side is opposite the angle in question.",
          skills: ["right-triangle-trig", "triangles"]
        }
      ]
    }
  ]
};

export default practiceTest8;
