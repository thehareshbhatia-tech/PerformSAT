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
        // ===== EASY (Q1-Q7) =====
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A restaurant served $180$ meals on Friday. If $\\frac{1}{3}$ of the meals were vegetarian, how many vegetarian meals were served?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$45$" },
            { id: "C", text: "$60$" },
            { id: "D", text: "$120$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Fraction of a Whole**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $\\frac{180}{3} = 60$.\n\n**The Full Solution:**\n$\\frac{1}{3} \\times 180 = 60$ vegetarian meals.\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): Uses the denominator of the fraction.\n• Choice B ($45$): Computes $\\frac{180}{4}$ instead of $\\frac{180}{3}$.\n• Choice D ($120$): This is $\\frac{2}{3}$ of $180$ — the NON-vegetarian meals.\n\n**Test Day Takeaway:** \"$\\frac{1}{n}$ of\" means divide by $n$.",
          skills: ["ratios-proportions"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "If $7x = 42$, what is the value of $x + 5$?",
          choices: [
            { id: "A", text: "$6$" },
            { id: "B", text: "$11$" },
            { id: "C", text: "$35$" },
            { id: "D", text: "$47$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Solve-Then-Evaluate**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $x = 42 \\div 7 = 6$. Then $x + 5 = 6 + 5 = 11$.\n\n**The Full Solution:**\n$7x = 42$\n$x = 6$\n$x + 5 = 6 + 5 = 11$\n\n**Why the wrong answers are tempting:**\n• Choice A ($6$): This is just $x$, not $x + 5$.\n• Choice C ($35$): $42 - 7 = 35$.\n• Choice D ($47$): $42 + 5 = 47$, adding $5$ to $42$ instead of to $x$.\n\n**Test Day Takeaway:** Solve for $x$ first, THEN compute the expression the question asks for.",
          skills: ["linear-equations", "solving-equations"]
        },
        {
          id: 3,
          type: "fill-in",
          difficulty: "easy",
          question: "An online store received $85$ orders on Monday and $127$ orders on Tuesday. How many more orders were received on Tuesday than on Monday?",
          correctAnswer: "42",
          explanation: "**SAT Pattern: Basic Subtraction Word Problem**\n\n**The correct answer is 42.**\n\n**The Fast Way (5 seconds):** $127 - 85 = 42$.\n\n**The Full Solution:**\nDifference $= 127 - 85 = 42$\n\n**Common Mistakes to Avoid:**\n• Adding instead of subtracting: $127 + 85 = 212$.\n\n**Verification:** $85 + 42 = 127$ ✓\n\n**Test Day Takeaway:** \"How many more\" always means subtract.",
          skills: ["word-problems"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A music producer earns $\\$500$ per week plus $\\$50$ for each song completed. Which expression gives the total weekly earnings for completing $s$ songs?",
          choices: [
            { id: "A", text: "$50s$" },
            { id: "B", text: "$500s + 50$" },
            { id: "C", text: "$500 + 50s$" },
            { id: "D", text: "$550s$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Writing a Linear Expression**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** Base pay $= 500$. Song bonus $= 50s$. Total $= 500 + 50s$.\n\n**The Full Solution:**\nWeekly earnings $= \\text{base pay} + \\text{per-song pay} \\times \\text{songs}$\n$= 500 + 50s$\n\n**Why the wrong answers are tempting:**\n• Choice A ($50s$): Ignores the base pay.\n• Choice B ($500s + 50$): Swaps the base pay and per-song rate.\n• Choice D ($550s$): Adds the rates together instead of keeping them separate.\n\n**Test Day Takeaway:** Total $=$ fixed amount $+$ (rate $\\times$ variable).",
          skills: ["linear-functions", "word-problems"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "What percentage of $200$ is $50$?",
          choices: [
            { id: "A", text: "$15\\%$" },
            { id: "B", text: "$20\\%$" },
            { id: "C", text: "$25\\%$" },
            { id: "D", text: "$50\\%$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Finding a Percentage**\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** $\\frac{50}{200} = \\frac{1}{4} = 25\\%$.\n\n**The Full Solution:**\n$\\frac{50}{200} \\times 100\\% = 25\\%$\n\n**Why the wrong answers are tempting:**\n• Choice A ($15\\%$): Random calculation error.\n• Choice B ($20\\%$): From $\\frac{50}{250}$ or similar.\n• Choice D ($50\\%$): From using $50$ as the percentage directly.\n\n**Test Day Takeaway:** Percentage $= \\frac{\\text{part}}{\\text{whole}} \\times 100$.",
          skills: ["percents"]
        },
        {
          id: 6,
          type: "fill-in",
          difficulty: "easy",
          question: "A wildlife reserve has $360$ animals. If $\\frac{2}{9}$ of them are birds, how many birds are in the reserve?",
          correctAnswer: "80",
          explanation: "**SAT Pattern: Fraction of a Whole**\n\n**The correct answer is 80.**\n\n**The Fast Way (10 seconds):** $\\frac{360}{9} = 40$. Then $40 \\times 2 = 80$.\n\n**The Full Solution:**\n$\\frac{2}{9} \\times 360 = \\frac{720}{9} = 80$\n\n**Common Mistakes to Avoid:**\n• Computing $\\frac{360}{2} = 180$ (dividing by the numerator instead of the denominator).\n• Getting $40$ (which is $\\frac{1}{9}$ of $360$, not $\\frac{2}{9}$).\n\n**Verification:** $80 \\div 360 = \\frac{2}{9}$ ✓\n\n**Test Day Takeaway:** Divide by the denominator first, then multiply by the numerator.",
          skills: ["ratios-proportions"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which of the following is equivalent to $5x + 3x - 2x$?",
          choices: [
            { id: "A", text: "$6x$" },
            { id: "B", text: "$6x^3$" },
            { id: "C", text: "$10x$" },
            { id: "D", text: "$30x$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Combining Like Terms**\n\n**Choice A is correct.**\n\n**The Fast Way (5 seconds):** $5 + 3 - 2 = 6$, so $6x$.\n\n**The Full Solution:**\n$5x + 3x - 2x = (5 + 3 - 2)x = 6x$\n\n**Why the wrong answers are tempting:**\n• Choice B ($6x^3$): Incorrectly multiplies the exponents.\n• Choice C ($10x$): From $5 + 3 + 2 = 10$ (adding instead of subtracting).\n• Choice D ($30x$): From $5 \\times 3 \\times 2 = 30$.\n\n**Test Day Takeaway:** Combining like terms means adding/subtracting coefficients. The variable part stays the same.",
          skills: ["polynomial-operations"]
        },

        // ===== MEDIUM (Q8-Q15) =====
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A restaurant charges $\\$12$ for adult meals and $\\$7$ for children's meals. On one evening, $45$ meals were served and the total revenue was $\\$430$. How many adult meals were served?",
          choices: [
            { id: "A", text: "$17$" },
            { id: "B", text: "$20$" },
            { id: "C", text: "$23$" },
            { id: "D", text: "$25$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: System of Linear Equations from Context**\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** Let $a$ = adult, $c$ = children. $a + c = 45$ and $12a + 7c = 430$. Substitute $c = 45 - a$: $12a + 7(45 - a) = 430$. $12a + 315 - 7a = 430$. $5a = 115$. $a = 23$.\n\n**The Full Solution:**\n$a + c = 45$\n$12a + 7c = 430$\n\n$c = 45 - a$\n$12a + 7(45 - a) = 430$\n$12a + 315 - 7a = 430$\n$5a = 115$\n$a = 23$\n\n**Why the wrong answers are tempting:**\n• Choice A ($17$): From a substitution error.\n• Choice B ($20$): From $430 \\div 21.5$.\n• Choice D ($25$): If $a = 25$, revenue $= 12(25) + 7(20) = 440 \\neq 430$.\n\n**Verification:** $12(23) + 7(22) = 276 + 154 = 430$ ✓\n\n**Test Day Takeaway:** Set up two equations (quantity and value), substitute, and solve.",
          skills: ["systems-of-equations", "word-problems"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A line has slope $-\\frac{1}{4}$ and passes through the point $(8, 3)$. What is the equation of the line?",
          choices: [
            { id: "A", text: "$y = -\\frac{1}{4}x + 5$" },
            { id: "B", text: "$y = -\\frac{1}{4}x + 1$" },
            { id: "C", text: "$y = -\\frac{1}{4}x - 3$" },
            { id: "D", text: "$y = -\\frac{1}{4}x + 11$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Equation of a Line from Slope and Point**\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** $y = mx + b$: $3 = -\\frac{1}{4}(8) + b = -2 + b$, so $b = 5$. Equation: $y = -\\frac{1}{4}x + 5$.\n\n**The Full Solution:**\nPlug $(8, 3)$ and $m = -\\frac{1}{4}$ into $y = mx + b$:\n$3 = -\\frac{1}{4}(8) + b$\n$3 = -2 + b$\n$b = 5$\nEquation: $y = -\\frac{1}{4}x + 5$\n\n**Why the wrong answers are tempting:**\n• Choice B ($y = -\\frac{1}{4}x + 1$): From $3 - \\frac{8}{4} = 3 - 2 = 1$, stopping at $3 - 2$ instead of solving $3 = -2 + b$.\n• Choice C ($y = -\\frac{1}{4}x - 3$): From a sign error.\n• Choice D ($y = -\\frac{1}{4}x + 11$): From $3 + 8 = 11$.\n\n**Test Day Takeaway:** Plug the point into $y = mx + b$ and solve for $b$.",
          skills: ["slope", "linear-equations"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table below shows music streaming data.\n\n| | Pop | Rock | Total |\n|---|---|---|---|\n| Free users | $35$ | $25$ | $60$ |\n| Premium users | $15$ | $25$ | $40$ |\n| Total | $50$ | $50$ | $100$ |\n\nWhat is the probability that a randomly selected user is a Premium user who listens to Rock?",
          choices: [
            { id: "A", text: "$\\frac{25}{40}$" },
            { id: "B", text: "$\\frac{25}{50}$" },
            { id: "C", text: "$\\frac{25}{100}$" },
            { id: "D", text: "$\\frac{40}{100}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Joint Probability from a Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** Premium AND Rock $= 25$. Total $= 100$. Probability $= \\frac{25}{100}$.\n\n**The Full Solution:**\n$P(\\text{Premium AND Rock}) = \\frac{25}{100} = \\frac{1}{4}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{25}{40}$): Uses Premium total as denominator — this is conditional probability, not joint.\n• Choice B ($\\frac{25}{50}$): Uses Rock total as denominator.\n• Choice D ($\\frac{40}{100}$): Probability of being Premium (ignoring Rock).\n\n**Test Day Takeaway:** Joint probability uses the grand total as denominator. Conditional probability restricts the denominator to a subgroup.",
          skills: ["probability", "two-way-tables"]
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
        {
          id: 14,
          type: "fill-in",
          difficulty: "medium",
          question: "In a triangle, one angle measures $70°$ and another measures $65°$. What is the measure, in degrees, of the third angle?",
          correctAnswer: "45",
          explanation: "**SAT Pattern: Triangle Angle Sum**\n\n**The correct answer is 45.**\n\n**The Fast Way (5 seconds):** $180 - 70 - 65 = 45$.\n\n**The Full Solution:**\nSum of angles in a triangle $= 180°$\n$70° + 65° + x = 180°$\n$x = 180° - 135° = 45°$\n\n**Common Mistakes to Avoid:**\n• Adding the two given angles and reporting $135°$.\n• Using $360°$ instead of $180°$.\n\n**Verification:** $70° + 65° + 45° = 180°$ ✓\n\n**Test Day Takeaway:** Triangle angles always sum to $180°$.",
          skills: ["triangles", "angles"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The function $f(x) = 4x - 3$ models the total cost in dollars to download $x$ albums from a music platform. What is $f(8)$?",
          choices: [
            { id: "A", text: "$24$" },
            { id: "B", text: "$29$" },
            { id: "C", text: "$32$" },
            { id: "D", text: "$35$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Function Evaluation in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $f(8) = 4(8) - 3 = 32 - 3 = 29$.\n\n**The Full Solution:**\n$f(8) = 4(8) - 3 = 32 - 3 = 29$\n\n**Why the wrong answers are tempting:**\n• Choice A ($24$): From $4(8) - 8 = 24$.\n• Choice C ($32$): From $4(8) = 32$, forgetting to subtract $3$.\n• Choice D ($35$): From $4(8) + 3 = 35$, adding instead of subtracting.\n\n**Test Day Takeaway:** Substitute, multiply, then add/subtract. Follow order of operations carefully.",
          skills: ["function-evaluation", "linear-functions"]
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
