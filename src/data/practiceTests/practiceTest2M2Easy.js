// Practice Test 2 — Math Module 2 Easy variant (22 questions)
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Domain mix: 7 Algebra / 6 Advanced Math / 5 Problem-Solving / 4 Geometry & Trig.
// Official-calibration recreation (2026-08-31): fresh scenarios throughout,
// accessible official register; diagrams at Q8 (bar chart), Q20 (parallel
// lines), Q21 (scatterplot), Q22 (two-way table).

export const practiceTest2M2Easy = {
  id: "module-2-easy",
  title: "Module 2 (Easy)",
  variant: "easy",
  timeLimit: 35,
  questions: [
    // ============================================================
    // Q1-Q3: Easy openers (band 2-3)
    // ============================================================
    {
      id: 1,
      type: "multiple-choice",
      difficulty: "easy",
      band: 2,
      question: "If $6x = 54$, what is the value of $x$?",
      choices: [
        // distractor: reports the coefficient instead of solving
        { id: "A", text: "$6$" },
        { id: "B", text: "$9$" },
        // distractor: subtracts 6 from 54 instead of dividing
        { id: "C", text: "$48$" },
        // distractor: adds 6 to 54 instead of dividing
        { id: "D", text: "$60$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~3s):** Divide both sides by $6$: $x = \\frac{54}{6} = 9$.\n\n**The Full Solution:**\nStep 1: The variable is multiplied by $6$, so undo that by dividing both sides by $6$.\nStep 2: $x = \\frac{54}{6} = 9$.\nStep 3: Check: $6 \\cdot 9 = 54$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): reports the coefficient instead of solving for $x$.\n* Choice C ($48$): subtracts $6$ from $54$ instead of dividing.\n* Choice D ($60$): adds $6$ to $54$ instead of dividing.\n\n**Test Day Takeaway:** To undo multiplication by $k$, divide both sides by $k$.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "The sum of a number and $14$ is $52$. What is the number?",
      correctAnswer: "38",
      explanation: "**SAT Pattern: Translating Words into an Equation**\n\n**The correct answer is $38$.**\n\n**The Fast Way (~5s):** \"The sum ... is $52$\" means $n + 14 = 52$, so $n = 52 - 14 = 38$.\n\n**The Full Solution:**\nStep 1: Let $n$ be the number. \"The sum of a number and $14$\" translates to $n + 14$.\nStep 2: \"Is\" means equals: $n + 14 = 52$.\nStep 3: Subtract $14$ from both sides: $n = 38$.\nStep 4: Check: $38 + 14 = 52$. $\\checkmark$\n\n**Common Mistakes:** Adding instead of undoing the addition ($52 + 14 = 66$); misreading \"sum\" as a product and dividing $52$ by $14$.\n\n**Test Day Takeaway:** Translate word-by-word — \"sum\" means add, \"is\" means equals — then undo the operation to isolate the unknown.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "If $f(x) = 9 - 3x$, what is the value of $f(5)$?",
      choices: [
        // distractor: drops the constant 9 and reports only -3(5)
        { id: "A", text: "$-15$" },
        { id: "B", text: "$-6$" },
        // distractor: treats the term as 9 - 5, ignoring the coefficient 3
        { id: "C", text: "$4$" },
        // distractor: adds instead of subtracts: 9 + 15
        { id: "D", text: "$24$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $f(5) = 9 - 3(5) = 9 - 15 = -6$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 5$ everywhere in $f(x) = 9 - 3x$.\nStep 2: $f(5) = 9 - 3(5)$. Multiply first: $3(5) = 15$.\nStep 3: $f(5) = 9 - 15 = -6$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-15$): drops the constant $9$ and reports only $-3(5)$.\n* Choice C ($4$): treats the term as $9 - 5$, ignoring the coefficient $3$.\n* Choice D ($24$): adds instead of subtracts: $9 + 15$.\n\n**Test Day Takeaway:** $f(a)$ means substitute $a$ for $x$ everywhere, then follow the order of operations: multiplication before subtraction.",
      skills: ["function-evaluation", "function-notation"]
    },
    // ============================================================
    // Q4-Q16: Medium core (band 4-5)
    // ============================================================
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "A paint mixture uses $3$ cups of blue paint for every $8$ cups of white paint. If a painter uses $24$ cups of white paint, how many cups of blue paint are needed?",
      choices: [
        // distractor: reuses the ratio number 3
        { id: "A", text: "$3$" },
        // distractor: subtracts the ratio numbers, 8 - 3
        { id: "B", text: "$5$" },
        { id: "C", text: "$9$" },
        // distractor: flips the ratio, solving 8/3 = b/24
        { id: "D", text: "$64$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Proportion / Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $\\frac{3}{8} = \\frac{b}{24}$. Cross-multiply: $8b = 72 \\Rightarrow b = 9$.\n\n**The Full Solution:**\nStep 1: Match parts to positions: $\\frac{\\text{blue}}{\\text{white}} = \\frac{3}{8} = \\frac{b}{24}$.\nStep 2: Cross-multiply: $8b = 3 \\cdot 24 = 72$.\nStep 3: Solve: $b = 9$ cups.\nFaster check: $24$ cups of white is $3$ batches of the $8$-cup ratio, and each batch needs $3$ cups of blue, so $3 \\cdot 3 = 9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reuses the blue number from the ratio without scaling.\n* Choice B ($5$): subtracts the ratio numbers rather than scaling them.\n* Choice D ($64$): flips the ratio, solving $\\frac{8}{3} = \\frac{b}{24}$.\n\n**Test Day Takeaway:** Set up proportions with the same category in matching positions on both sides, then cross-multiply.",
      skills: ["ratios", "proportions"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "What is the slope of the graph of $y = 7x - 2$ in the $xy$-plane?",
      choices: [
        // distractor: gives the y-intercept
        { id: "A", text: "$-2$" },
        // distractor: solves 0 = 7x - 2 for the x-intercept
        { id: "B", text: "$\\dfrac{2}{7}$" },
        // distractor: combines slope and intercept: 7 - 2
        { id: "C", text: "$5$" },
        { id: "D", text: "$7$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice D is correct.**\n\n**The Fast Way (~3s):** In $y = mx + b$, the slope is the coefficient of $x$, so $m = 7$.\n\n**The Full Solution:**\nStep 1: The equation $y = 7x - 2$ is already in slope-intercept form $y = mx + b$.\nStep 2: Read off the coefficient of $x$: the slope is $m = 7$ (and the $y$-intercept is $b = -2$).\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): reports the $y$-intercept instead of the slope.\n* Choice B ($\\frac{2}{7}$): solves $0 = 7x - 2$ — that is the $x$-intercept, not the slope.\n* Choice C ($5$): combines the slope and intercept: $7 - 2$.\n\n**Test Day Takeaway:** In $y = mx + b$, the slope is $m$ (coefficient of $x$) and the $y$-intercept is $b$ (constant term).",
      skills: ["slope-intercept-form", "linear-functions"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "A straight loading ramp is $26$ feet long and runs from the ground to the edge of a dock. The bottom of the ramp rests on the ground $24$ feet from the base of the dock. How many feet above the ground is the edge of the dock?",
      correctAnswer: "10",
      explanation: "**SAT Pattern: Pythagorean Theorem in Context**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~10s):** The ramp is the hypotenuse, and $10$-$24$-$26$ is the $5$-$12$-$13$ triple doubled, so the dock edge is $10$ feet up.\n\n**The Full Solution:**\nStep 1: The dock, the ground, and the ramp form a right triangle: hypotenuse $26$ (the ramp) and one leg $24$ (the distance along the ground).\nStep 2: Apply $a^2 + b^2 = c^2$ and solve for the unknown leg: $h^2 = 26^2 - 24^2 = 676 - 576 = 100$.\nStep 3: $h = \\sqrt{100} = 10$ feet.\n\n**Common Mistakes:** Adding the squares ($676 + 576$) even though the hypotenuse is already known; subtracting the lengths themselves ($26 - 24 = 2$) without squaring.\n\n**Test Day Takeaway:** The hypotenuse is the side opposite the right angle — here, the ramp itself. When the hypotenuse is known, subtract squares to find a leg.",
      skills: ["pythagorean-theorem", "right-triangles"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "On weekdays, a city bus route averaged $150$ riders per day last month and $120$ riders per day this month. What is the percent decrease in the average number of riders per day?",
      choices: [
        { id: "A", text: "$20\\%$" },
        // distractor: divides the change by the new value: 30/120
        { id: "B", text: "$25\\%$" },
        // distractor: reports the raw drop of 30 riders as a percent
        { id: "C", text: "$30\\%$" },
        // distractor: reports the new-to-old ratio: 120/150
        { id: "D", text: "$80\\%$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Percent Change / Decrease**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Drop is $150 - 120 = 30$. Percent decrease $= \\frac{30}{150} \\times 100 = 20\\%$.\n\n**The Full Solution:**\nStep 1: Find the change: $150 - 120 = 30$ riders.\nStep 2: Divide by the ORIGINAL value: $\\frac{30}{150} = \\frac{1}{5}$.\nStep 3: Convert to a percent: $\\frac{1}{5} \\times 100 = 20\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($25\\%$): divides the change by the NEW value: $\\frac{30}{120}$.\n* Choice C ($30\\%$): reports the raw drop of $30$ riders as if it were the percent.\n* Choice D ($80\\%$): reports the new-to-old ratio $\\frac{120}{150}$ — what remains, not what was lost.\n\n**Test Day Takeaway:** Percent change always divides by the ORIGINAL value: $\\frac{\\text{change}}{\\text{original}} \\times 100\\%$.",
      skills: ["percent-change", "percents"]
    },
    {
      id: 8,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The bar graph shows the number of points a basketball player scored in each of her first $5$ games this season. The player's goal is to average $12$ points per game over her first $6$ games. How many points must she score in game $6$ to reach this goal exactly?",
      diagram: {
        type: "barChart",
        params: {
          data: [
            { label: "1", value: 14 },
            { label: "2", value: 9 },
            { label: "3", value: 17 },
            { label: "4", value: 12 },
            { label: "5", value: 13 }
          ],
          xAxisLabel: "Game",
          yAxisLabel: "Points scored",
          yMax: 20,
          yStep: 5
        }
      },
      correctAnswer: "7",
      explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~15s):** Required total $= 6 \\cdot 12 = 72$. The bars show $14 + 9 + 17 + 12 + 13 = 65$. Game $6$ must be $72 - 65 = 7$.\n\n**The Full Solution:**\nStep 1: Mean $= \\frac{\\text{sum}}{\\text{count}}$, so a mean of $12$ over $6$ games needs a total of $6 \\cdot 12 = 72$ points.\nStep 2: Read the five bars and add: $14 + 9 + 17 + 12 + 13 = 65$.\nStep 3: The missing game must supply $72 - 65 = 7$ points.\nCheck: $\\frac{65 + 7}{6} = \\frac{72}{6} = 12$. $\\checkmark$\n\n**Common Mistakes:** Averaging only the five plotted games ($\\frac{65}{5} = 13$); reporting $72$, the required total, instead of the missing game's points.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ total. Read every bar, sum them, then subtract from the required total.",
      skills: ["calculate-mean", "statistics"]
    },
    {
      id: 9,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What are the solutions to the equation $x^2 + 9x + 18 = 0$?",
      choices: [
        // distractor: reports the factor numbers without flipping their signs
        { id: "A", text: "$x = 3 \\text{ or } x = 6$" },
        { id: "B", text: "$x = -6 \\text{ or } x = -3$" },
        // distractor: confuses the coefficients b and c with the roots
        { id: "C", text: "$x = 9 \\text{ or } x = 18$" },
        // distractor: uses the constant term as a single root
        { id: "D", text: "$x = -18$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Find two numbers that multiply to $18$ and add to $9$: that's $3$ and $6$, so $(x + 3)(x + 6) = 0$ gives $x = -3$ or $x = -6$.\n\n**The Full Solution:**\nStep 1: For $x^2 + bx + c$, find two numbers with product $c = 18$ and sum $b = 9$. They are $3$ and $6$.\nStep 2: Factor: $x^2 + 9x + 18 = (x + 3)(x + 6)$.\nStep 3: Set each factor to $0$: $x = -3$ or $x = -6$.\nCheck: $(-6)^2 + 9(-6) + 18 = 36 - 54 + 18 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = 3$ or $x = 6$): reports the factor numbers instead of their opposites.\n* Choice C ($x = 9$ or $x = 18$): confuses the coefficients $b$ and $c$ with the roots.\n* Choice D ($x = -18$): uses the constant term directly as a single root.\n\n**Test Day Takeaway:** To factor $x^2 + bx + c$, find two numbers with product $c$ and sum $b$. The roots are the OPPOSITES of those numbers.",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A line passes through the points $(2, 5)$ and $(6, 17)$. What is the slope of the line?",
      choices: [
        // distractor: subtracts in opposite directions in numerator and denominator
        { id: "A", text: "$-3$" },
        // distractor: flips rise and run: Δx/Δy
        { id: "B", text: "$\\dfrac{1}{3}$" },
        // distractor: adds the coordinates instead of subtracting: 22/8
        { id: "C", text: "$\\dfrac{11}{4}$" },
        { id: "D", text: "$3$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** Slope $= \\frac{\\Delta y}{\\Delta x} = \\frac{17 - 5}{6 - 2} = \\frac{12}{4} = 3$.\n\n**The Full Solution:**\nStep 1: Use $m = \\frac{y_2 - y_1}{x_2 - x_1}$ with $(2, 5)$ and $(6, 17)$.\nStep 2: $m = \\frac{17 - 5}{6 - 2} = \\frac{12}{4}$.\nStep 3: Simplify: $m = 3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): subtracts in opposite directions in the numerator and denominator.\n* Choice B ($\\frac{1}{3}$): flips the formula to $\\frac{\\Delta x}{\\Delta y} = \\frac{4}{12}$.\n* Choice C ($\\frac{11}{4}$): adds the coordinates instead of subtracting: $\\frac{17 + 5}{6 + 2}$.\n\n**Test Day Takeaway:** Slope is rise over run. Keep a consistent order: the same point's coordinates go first in both the numerator and the denominator.",
      skills: ["slope-from-points", "slope"]
    },
    {
      id: 11,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "What is the positive solution to $x^2 = 121$?",
      correctAnswer: "11",
      explanation: "**SAT Pattern: Square Root Solutions**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~3s):** $\\sqrt{121} = 11$, and the question asks for the positive solution, so $x = 11$.\n\n**The Full Solution:**\nStep 1: $x^2 = 121$ has two solutions, $x = \\pm 11$, since $11^2 = 121$ and $(-11)^2 = 121$.\nStep 2: The question asks for the positive solution, so $x = 11$.\n\n**Common Mistakes:** Reporting $-11$ when the question wants the positive root; dividing $121$ by $2$ ($60.5$) instead of taking the square root; reporting $121$ and forgetting to take the root at all.\n\n**Test Day Takeaway:** $x^2 = k$ for positive $k$ has solutions $x = \\pm\\sqrt{k}$. Always check whether the question wants both, only the positive, or only the negative.",
      skills: ["square-root-solutions", "quadratic-equations"]
    },
    {
      id: 12,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "If $(x + 5)(x - 8) = x^2 + bx - 40$, what is the value of $b$?",
      choices: [
        { id: "A", text: "$-3$" },
        // distractor: finds the right magnitude but drops the negative sign
        { id: "B", text: "$3$" },
        // distractor: adds the magnitudes 5 + 8, ignoring the sign on -8
        { id: "C", text: "$13$" },
        // distractor: reports the constant-term magnitude 5 * 8
        { id: "D", text: "$40$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Expanding a Product (FOIL)**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The middle coefficient is the sum of the constants: $5 + (-8) = -3$, so $b = -3$.\n\n**The Full Solution:**\nStep 1: Expand with FOIL: $(x + 5)(x - 8) = x^2 - 8x + 5x - 40$.\nStep 2: Combine the middle terms: $-8x + 5x = -3x$, so the product is $x^2 - 3x - 40$.\nStep 3: Match $x^2 + bx - 40$: $b = -3$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): finds the right magnitude but drops the negative sign.\n* Choice C ($13$): adds the magnitudes $5 + 8$, ignoring the sign on the $-8$.\n* Choice D ($40$): reports the constant-term magnitude $5 \\cdot 8$ instead of the linear coefficient.\n\n**Test Day Takeaway:** For $(x + p)(x + q) = x^2 + (p + q)x + pq$, the middle coefficient is the SUM of the constants (with signs) and the constant term is their PRODUCT.",
      skills: ["polynomial-expansion", "quadratic-equations"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the solution to the system of equations $3x + y = 24$ and $y = x - 4$?",
      choices: [
        // distractor: uses x = 0 and reads y off the first equation, ignoring the second
        { id: "A", text: "$(0, 24)$" },
        // distractor: swaps the coordinates
        { id: "B", text: "$(3, 7)$" },
        // distractor: arithmetic slip in the substitution step
        { id: "C", text: "$(6, 2)$" },
        { id: "D", text: "$(7, 3)$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The second equation already gives $y$, so drop it into the first: $3x + (x - 4) = 24 \\Rightarrow 4x = 28 \\Rightarrow x = 7$, and $y = 7 - 4 = 3$, giving $(7, 3)$.\n\n**The Full Solution:**\nStep 1: Substitute $y = x - 4$ into $3x + y = 24$: $3x + (x - 4) = 24$.\nStep 2: Combine: $4x - 4 = 24 \\Rightarrow 4x = 28 \\Rightarrow x = 7$.\nStep 3: Back-substitute: $y = 7 - 4 = 3$. The solution is $(7, 3)$.\nCheck: $3(7) + 3 = 24$ $\\checkmark$ and $3 = 7 - 4$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(0, 24)$): sets $x = 0$ and reads $y$ off the first equation, ignoring $y = x - 4$.\n* Choice B ($(3, 7)$): correct numbers with the coordinates swapped.\n* Choice C ($(6, 2)$): an arithmetic slip in the substitution step.\n\n**Test Day Takeaway:** When one equation is already solved for a variable, substitute that expression into the other equation — then label which value is $x$ and which is $y$.",
      skills: ["substitution-method", "systems-of-equations"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Peyton deposits $\\$800$ into a savings account that earns simple interest at $5\\%$ per year. Which expression gives the value, in dollars, of the account after $t$ years?",
      choices: [
        // distractor: exponential form with a base below 1 — decays toward 0
        { id: "A", text: "$800 \\cdot 0.05^{t}$" },
        // distractor: uses $5 per year instead of 5% of $800
        { id: "B", text: "$800 + 5t$" },
        { id: "C", text: "$800 + 40t$" },
        // distractor: the compound-interest (exponential) formula, not simple interest
        { id: "D", text: "$800 \\cdot (1.05)^{t}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Simple Interest (Linear Growth)**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Simple interest adds the same dollar amount each year: $5\\%$ of $\\$800$ is $\\$40$, so the value is $800 + 40t$.\n\n**The Full Solution:**\nStep 1: Simple interest grows linearly — a fixed amount is added each year, not a percentage of the running balance.\nStep 2: Annual interest $= 0.05 \\times 800 = \\$40$.\nStep 3: Value after $t$ years $=$ principal $+$ (yearly interest)$\\times t = 800 + 40t$.\nCheck: $t = 0 \\Rightarrow \\$800$; $t = 5 \\Rightarrow \\$1{,}000$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($800 \\cdot 0.05^{t}$): an exponential with a base below $1$ — that decays toward $0$, not grows.\n* Choice B ($800 + 5t$): uses $\\$5$ per year instead of $5\\%$ of $\\$800$.\n* Choice D ($800 \\cdot (1.05)^{t}$): the compound-interest (exponential) formula, not simple interest.\n\n**Test Day Takeaway:** Simple interest is LINEAR — principal $+$ (annual interest)$\\times t$. Compound interest is EXPONENTIAL — principal $\\times (1+r)^{t}$.",
      skills: ["linear-functions", "percents", "word-problems"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In a right triangle, an acute angle $\\theta$ satisfies $\\cos(\\theta) = \\dfrac{3}{5}$. What is the value of $\\tan(\\theta)$?",
      choices: [
        // distractor: repeats cos(θ) instead of computing tan(θ)
        { id: "A", text: "$\\dfrac{3}{5}$" },
        // distractor: inverts the tangent, giving adjacent/opposite
        { id: "B", text: "$\\dfrac{3}{4}$" },
        // distractor: gives sin(θ) instead of tan(θ)
        { id: "C", text: "$\\dfrac{4}{5}$" },
        { id: "D", text: "$\\dfrac{4}{3}$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: SOH-CAH-TOA in a 3-4-5 Triangle**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $\\cos(\\theta) = \\frac{\\text{adj}}{\\text{hyp}} = \\frac{3}{5}$ sets up a $3$-$4$-$5$ triangle, so the opposite leg is $4$ and $\\tan(\\theta) = \\frac{4}{3}$.\n\n**The Full Solution:**\nStep 1: $\\cos(\\theta) = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{3}{5}$, so adjacent $= 3$ and hypotenuse $= 5$.\nStep 2: Find the opposite leg: $\\sqrt{5^2 - 3^2} = \\sqrt{16} = 4$.\nStep 3: $\\tan(\\theta) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{4}{3}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{5}$): repeats $\\cos(\\theta)$ instead of computing $\\tan(\\theta)$.\n* Choice B ($\\frac{3}{4}$): inverts the tangent, giving $\\frac{\\text{adjacent}}{\\text{opposite}}$.\n* Choice C ($\\frac{4}{5}$): this is $\\sin(\\theta)$ — opposite over hypotenuse, not over adjacent.\n\n**Test Day Takeaway:** Given one trig ratio, label the two sides it names, find the third with the Pythagorean theorem, then read off the ratio asked for. The $3$-$4$-$5$ triangle shows up constantly.",
      skills: ["soh-cah-toa", "right-triangles"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "What is the value of $3^4 \\cdot 3^2$? Express your answer as a single integer.",
      correctAnswer: "729",
      explanation: "**SAT Pattern: Exponent Rules — Same Base Multiplication**\n\n**The correct answer is $729$.**\n\n**The Fast Way (~5s):** Same base multiplied means ADD the exponents: $3^4 \\cdot 3^2 = 3^{4+2} = 3^6 = 729$.\n\n**The Full Solution:**\nStep 1: When multiplying powers with the same base, add the exponents: $3^4 \\cdot 3^2 = 3^{4+2} = 3^6$.\nStep 2: Evaluate: $3^6 = 729$.\nCheck: $3^4 = 81$ and $3^2 = 9$, and $81 \\times 9 = 729$. $\\checkmark$\n\n**Common Mistakes:** Multiplying the exponents to get $3^{8}$; changing the base to get $9^6$; stopping at the exponent $6$ instead of computing the value $729$.\n\n**Test Day Takeaway:** Same base, multiply $\\Rightarrow$ ADD exponents: $a^m \\cdot a^n = a^{m+n}$. Same base, divide $\\Rightarrow$ SUBTRACT.",
      skills: ["exponent-rules", "exponents"]
    },
    // ============================================================
    // Q17-Q22: Hard ceiling for Easy variant (band 6-7, NO band 8)
    // ============================================================
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "If $7(x - 2) = 5x + 10$, what is the value of $x$?",
      choices: [
        // distractor: moves terms in the wrong direction and flips the sign
        { id: "A", text: "$-12$" },
        // distractor: fails to distribute, treating 7(x - 2) as 7x - 2
        { id: "B", text: "$6$" },
        // distractor: arithmetic slip while collecting terms
        { id: "C", text: "$10$" },
        { id: "D", text: "$12$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Distribute the left side: $7x - 14 = 5x + 10$. Subtract $5x$ and add $14$: $2x = 24$, so $x = 12$.\n\n**The Full Solution:**\nStep 1: Distribute: $7(x - 2) = 7x - 14$, so $7x - 14 = 5x + 10$.\nStep 2: Collect variables on one side and constants on the other: $7x - 5x = 10 + 14$.\nStep 3: Simplify: $2x = 24$, so $x = 12$.\nCheck: $7(12 - 2) = 70$ and $5(12) + 10 = 70$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-12$): moves terms in the wrong direction and flips the sign.\n* Choice B ($6$): fails to distribute, treating $7(x - 2)$ as $7x - 2$.\n* Choice C ($10$): an arithmetic slip while collecting the constants.\n\n**Test Day Takeaway:** Distribute first, then gather variables on one side and constants on the other before dividing.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "A circle in the $xy$-plane has center $(0, 0)$ and passes through the point $(5, 12)$. What is the radius of the circle?",
      correctAnswer: "13",
      explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~5s):** The radius is the distance from $(0, 0)$ to $(5, 12)$: $\\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$ — the $5$-$12$-$13$ triple.\n\n**The Full Solution:**\nStep 1: The radius equals the distance from the center to any point on the circle.\nStep 2: $r = \\sqrt{(5 - 0)^2 + (12 - 0)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$.\nCheck: the circle is $x^2 + y^2 = 169$, and $5^2 + 12^2 = 169$. $\\checkmark$\n\n**Common Mistakes:** Adding without squaring to get $5 + 12 = 17$; forgetting the square root and reporting $169$; giving the diameter $26$ instead of the radius.\n\n**Test Day Takeaway:** A circle centered at the origin is $x^2 + y^2 = r^2$ — the radius is the distance from the center to any point on the circle.",
      skills: ["circle-equation", "circles"]
    },
    {
      id: 19,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "If $p(x) = 3x^2 - 4x + 2$, what is the value of $p(-3)$?",
      choices: [
        // distractor: sign slip on the -4x term: 27 - 12 + 2
        { id: "A", text: "$17$" },
        // distractor: stops after the squared term 3(-3)^2
        { id: "B", text: "$27$" },
        { id: "C", text: "$41$" },
        // distractor: squares 3x instead of x: (-9)^2 + 12 + 2
        { id: "D", text: "$95$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $p(-3) = 3(-3)^2 - 4(-3) + 2 = 3(9) + 12 + 2 = 27 + 12 + 2 = 41$.\n\n**The Full Solution:**\nStep 1: Substitute $x = -3$: $p(-3) = 3(-3)^2 - 4(-3) + 2$.\nStep 2: Square first: $(-3)^2 = 9$, so the first term is $3(9) = 27$. The middle term is $-4(-3) = +12$.\nStep 3: Combine: $27 + 12 + 2 = 41$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($17$): treats $-4(-3)$ as $-12$, computing $27 - 12 + 2$.\n* Choice B ($27$): stops after the squared term $3(-3)^2$.\n* Choice D ($95$): squares $3x$ instead of $x$, computing $(-9)^2 + 12 + 2$.\n\n**Test Day Takeaway:** $(-a)^2 = +a^2$, squaring happens before multiplying by the coefficient, and a negative times a negative is positive. Track every sign.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "In the figure, lines $\\ell$ and $m$ are parallel and are crossed by a transversal $t$. The two marked angles are corresponding angles. What is the value of $x$?",
      diagram: {
        type: "parallelLines",
        params: {
          angles: { top: ["(7x−5)°", ""], bottom: ["(5x+35)°", ""] },
          lineLabels: ["ℓ", "m", "t"]
        }
      },
      choices: [
        // distractor: collects terms in the wrong direction, flipping the sign
        { id: "A", text: "$-20$" },
        // distractor: treats the angles as supplementary, solving 12x + 30 = 180
        { id: "B", text: "$12.5$" },
        { id: "C", text: "$20$" },
        // distractor: arithmetic slip in the collect step (2x = 60)
        { id: "D", text: "$30$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Corresponding Angles (Parallel Lines)**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Corresponding angles on parallel lines are EQUAL: $7x - 5 = 5x + 35 \\Rightarrow 2x = 40 \\Rightarrow x = 20$.\n\n**The Full Solution:**\nStep 1: When parallel lines are cut by a transversal, corresponding angles are congruent — set the expressions equal: $7x - 5 = 5x + 35$.\nStep 2: Collect: $7x - 5x = 35 + 5 \\Rightarrow 2x = 40$.\nStep 3: Solve: $x = 20$.\nCheck: $7(20) - 5 = 135$ and $5(20) + 35 = 135$ — both angles measure $135^\\circ$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-20$): collects terms in the wrong direction, flipping the sign.\n* Choice B ($12.5$): treats the angles as supplementary, solving $12x + 30 = 180$.\n* Choice D ($30$): an arithmetic slip in the collect step, landing on $2x = 60$.\n\n**Test Day Takeaway:** Parallel lines with a transversal — corresponding angles are EQUAL; only same-side interior angles are supplementary. Identify the relationship before writing the equation.",
      skills: ["parallel-lines", "angles", "geometry"]
    },
    {
      id: 21,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "The scatterplot shows the outdoor temperature $x$, in degrees Celsius, and the number of hot drinks $y$ sold at a ski-lodge cafe on each of $8$ days, along with a line of best fit. The equation of the line of best fit is $\\hat{y} = -3.5x + 210$. According to the model, by how many drinks does predicted daily hot-drink sales decrease for each increase of $1$ degree Celsius in temperature? Express your answer as a decimal.",
      diagram: { type: "scatterplot", params: {
        points: [[2, 200], [4, 198], [6, 187], [8, 183], [10, 178], [12, 165], [14, 163], [16, 152]],
        xMin: 0, xMax: 20, yMin: 140, yMax: 220,
        xGridStep: 2, yGridStep: 10, xLabelStep: 4, yLabelStep: 20,
        xLabel: "Temperature (°C)", yLabel: "Hot drinks sold",
        bestFitLine: { slope: -3.5, intercept: 210 },
      } },
      correctAnswer: "3.5",
      explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $3.5$.**\n\n**The Fast Way (~5s):** In $\\hat{y} = -3.5x + 210$, the slope $-3.5$ is the change in $y$ per one-degree increase in $x$; the decrease is its magnitude, $3.5$.\n\n**The Full Solution:**\nStep 1: For a linear model $\\hat{y} = mx + b$, the slope $m$ is the predicted change in $y$ per one-unit change in $x$.\nStep 2: Here $m = -3.5$ — the negative sign means sales go DOWN as the temperature goes up.\nStep 3: The question asks \"by how many drinks does it decrease,\" which is the size of the drop: $3.5$ drinks per degree.\n\n**Common Mistakes:** Reporting $-3.5$ when the question asks for the amount of the decrease (a positive number); reporting the intercept $210$, which is the predicted sales at $0$ degrees.\n\n**Test Day Takeaway:** In $\\hat{y} = mx + b$, the slope is the rate of change. When asked \"by how much does it decrease,\" give the magnitude of a negative slope.",
      skills: ["linear-functions", "scatterplots", "slope"]
    },
    {
      id: 22,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The table summarizes the $90$ members of a school's after-school clubs by grade and by club. If one of these members is selected at random, what is the probability that the member is in $10$th grade AND is in the photography club?",
      diagram: { type: "twoWayTable", params: {
        headers: ["", "Photography", "Robotics", "Total"],
        rows: [
          ["9th grade", "20", "10", "30"],
          ["10th grade", "12", "18", "30"],
          ["11th grade", "16", "14", "30"],
          ["Total", "48", "42", "90"]
        ]
      } },
      choices: [
        { id: "A", text: "$\\dfrac{12}{90}$" },
        // distractor: divides by the photography column total — a conditional probability
        { id: "B", text: "$\\dfrac{12}{48}$" },
        // distractor: divides by the 10th-grade row total — the other conditional
        { id: "C", text: "$\\dfrac{12}{30}$" },
        // distractor: the marginal probability of photography alone
        { id: "D", text: "$\\dfrac{48}{90}$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Joint Probability from Two-Way Table**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** \"AND\" with no \"given\" means joint probability: the cell meeting both conditions over the grand total. The $10$th-grade photography cell is $12$ and the total is $90$, so $\\frac{12}{90}$.\n\n**The Full Solution:**\nStep 1: $P(\\text{10th AND photography}) = \\frac{\\text{members who are both}}{\\text{all members}}$.\nStep 2: From the table, $10$th graders in photography $= 12$.\nStep 3: Total members $= 90$, so $P = \\frac{12}{90}$ (which reduces to $\\frac{2}{15}$).\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{12}{48}$): divides by the photography total $48$ — that is $P(\\text{10th} \\mid \\text{photography})$, a conditional probability.\n* Choice C ($\\frac{12}{30}$): divides by the $10$th-grade total $30$ — that is $P(\\text{photography} \\mid \\text{10th})$.\n* Choice D ($\\frac{48}{90}$): the marginal probability of photography alone, ignoring the grade condition.\n\n**Test Day Takeaway:** \"AND\" without \"given\" is a joint probability — both conditions over the GRAND TOTAL. The word \"given\" is what shrinks the denominator to one row or column.",
      skills: ["two-way-table", "probability"]
    }
  ]
};

export default practiceTest2M2Easy;
