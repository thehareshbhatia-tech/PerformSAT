// Practice Test 2 — Math Module 2 Easy variant (22 questions)
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Domain mix: 7 Algebra / 6 Advanced Math / 5 Problem-Solving / 4 Geometry & Trig.

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
      question: "If $5x = 35$, what is the value of $x$?",
      choices: [
        // distractor: subtracts instead of divides
        { id: "A", text: "$30$" },
        // distractor: adds instead
        { id: "B", text: "$40$" },
        { id: "C", text: "$7$" },
        // distractor: divides by wrong number
        { id: "D", text: "$5$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~3s):** Divide both sides by $5$: $x = \\frac{35}{5} = 7$.\n\n**The Full Solution:**\nStep 1: The variable is multiplied by $5$, so undo that by dividing both sides by $5$.\nStep 2: $x = \\frac{35}{5} = 7$.\nStep 3: Check: $5 \\cdot 7 = 35$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($30$): subtracts $5$ from $35$ instead of dividing.\n* Choice B ($40$): adds $5$ to $35$ instead of dividing.\n* Choice D ($5$): reports the coefficient instead of solving for $x$.\n\n**Test Day Takeaway:** To undo multiplication by $k$, divide both sides by $k$.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "The sum of a number and $9$ is $31$. What is the number?",
      correctAnswer: "22",
      explanation: "**SAT Pattern: Translating Words into an Equation**\n\n**The correct answer is $22$.**\n\n**The Fast Way (~5s):** \"The sum ... is $31$\" means $n + 9 = 31$, so $n = 31 - 9 = 22$.\n\n**The Full Solution:**\nStep 1: Let $n$ be the number. \"The sum of a number and $9$\" translates to $n + 9$.\nStep 2: \"Is\" means equals: $n + 9 = 31$.\nStep 3: Subtract $9$ from both sides: $n = 22$.\nStep 4: Check: $22 + 9 = 31$. $\\checkmark$\n\n**Common Mistakes:** Adding instead of undoing the addition ($31 + 9 = 40$); or misreading \"sum\" as a product and dividing $31$ by $9$.\n\n**Test Day Takeaway:** Translate word-by-word — \"sum\" means add, \"is\" means equals — then undo the operation to isolate the unknown.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "If $g(x) = 6 - 2x$, what is the value of $g(4)$?",
      choices: [
        // distractor: stops at 6 - 4
        { id: "A", text: "$2$" },
        // distractor: forgets the 6
        { id: "B", text: "$-8$" },
        { id: "C", text: "$-2$" },
        // distractor: adds instead of subtracts
        { id: "D", text: "$14$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $g(4) = 6 - 2(4) = 6 - 8 = -2$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 4$ everywhere in $g(x) = 6 - 2x$.\nStep 2: $g(4) = 6 - 2(4)$. Multiply first: $2(4) = 8$.\nStep 3: $g(4) = 6 - 8 = -2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): treats the term as $6 - 4$, ignoring the coefficient $2$.\n* Choice B ($-8$): drops the constant $6$ and reports only $-2(4)$.\n* Choice D ($14$): adds instead of subtracts: $6 + 2(4) = 14$.\n\n**Test Day Takeaway:** $g(a)$ means substitute $a$ for $x$ everywhere, then follow the order of operations: multiplication before subtraction.",
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
      question: "A recipe calls for $5$ cups of flour for every $2$ cups of sugar. If a baker uses $20$ cups of flour, how many cups of sugar are needed?",
      choices: [
        // distractor: reuses 5
        { id: "A", text: "$5$" },
        // distractor: subtracts 5 - 2 = 3
        { id: "B", text: "$3$" },
        { id: "C", text: "$8$" },
        // distractor: flips ratio
        { id: "D", text: "$50$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Proportion / Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $\\frac{5}{2} = \\frac{20}{s}$. Cross-multiply: $5s = 40 \\Rightarrow s = 8$.\n\n**The Full Solution:**\nStep 1: Match parts to positions: $\\frac{\\text{flour}}{\\text{sugar}} = \\frac{5}{2} = \\frac{20}{s}$.\nStep 2: Cross-multiply: $5s = 2 \\cdot 20 = 40$.\nStep 3: Solve: $s = 8$ cups.\nFaster check: $20$ cups of flour is $4$ batches of the $5$-cup ratio, and each batch needs $2$ cups of sugar, so $4 \\cdot 2 = 8$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): reuses the flour number from the ratio.\n* Choice B ($3$): subtracts the ratio numbers rather than scaling.\n* Choice D ($50$): flips the ratio, solving $\\frac{2}{5} = \\frac{20}{s}$.\n\n**Test Day Takeaway:** Set up proportions with the same category in matching positions on both sides, then cross-multiply.",
      skills: ["ratios", "proportions"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "The graph of the linear function $y = 5x - 7$ is shown in the $xy$-plane. What is the slope of the graph?",
      choices: [
        // distractor: gives y-intercept
        { id: "A", text: "$-7$" },
        { id: "B", text: "$5$" },
        // distractor: gives x-intercept
        { id: "C", text: "$\\dfrac{7}{5}$" },
        // distractor: combines slope and intercept
        { id: "D", text: "$-2$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~3s):** In $y = mx + b$, the slope is the coefficient of $x$, so $m = 5$.\n\n**The Full Solution:**\nStep 1: The equation $y = 5x - 7$ is already in slope-intercept form $y = mx + b$.\nStep 2: Read off the coefficient of $x$: the slope is $m = 5$ (and the $y$-intercept is $b = -7$).\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): reports the $y$-intercept instead of the slope.\n* Choice C ($\\frac{7}{5}$): solves $0 = 5x - 7$ for the $x$-intercept.\n* Choice D ($-2$): adds the slope and intercept: $5 - 7 = -2$.\n\n**Test Day Takeaway:** In $y = mx + b$, the slope is $m$ (coefficient of $x$) and the $y$-intercept is $b$ (constant term).",
      skills: ["slope-intercept-form", "linear-functions"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "A $25$-foot ladder leans against a vertical wall. The base of the ladder rests on the ground $7$ feet from the wall. How many feet up the wall does the top of the ladder reach?",
      correctAnswer: "24",
      explanation: "**SAT Pattern: Pythagorean Theorem in Context**\n\n**The correct answer is $24$.**\n\n**The Fast Way (~10s):** The ladder is the hypotenuse, and $7$-$24$-$25$ is a Pythagorean triple, so the ladder reaches $24$ feet up the wall.\n\n**The Full Solution:**\nStep 1: The wall, the ground, and the ladder form a right triangle: hypotenuse $25$ (the ladder) and one leg $7$ (the distance from the wall).\nStep 2: Apply $a^2 + b^2 = c^2$ and solve for the unknown leg: $h^2 = 25^2 - 7^2 = 625 - 49 = 576$.\nStep 3: $h = \\sqrt{576} = 24$ feet.\n\n**Common Mistakes:** Adding the squares ($625 + 49$) even though the hypotenuse is already known; or subtracting the lengths themselves ($25 - 7 = 18$) without squaring.\n\n**Test Day Takeaway:** The hypotenuse is the side opposite the right angle — here, the ladder itself. When the hypotenuse is known, subtract squares to find a leg.",
      skills: ["pythagorean-theorem", "right-triangles"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A store buys a coat for $\\$80$ and sells it for $\\$60$. What is the percent decrease?",
      choices: [
        // distractor: gives the dollar amount of decrease as percent
        { id: "A", text: "$20\\%$" },
        { id: "B", text: "$25\\%$" },
        // distractor: uses sale price as denominator
        { id: "C", text: "$33\\%$" },
        // distractor: uses ratio of new to old
        { id: "D", text: "$75\\%$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Percent Change / Decrease**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Drop is $80 - 60 = 20$. Percent decrease $= \\frac{20}{80} \\times 100 = 25\\%$.\n\n**The Full Solution:**\nStep 1: Find the change: $80 - 60 = 20$.\nStep 2: Divide by the ORIGINAL value: $\\frac{20}{80} = \\frac{1}{4}$.\nStep 3: Convert to percent: $\\frac{1}{4} \\times 100 = 25\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($20\\%$): uses the dollar amount of the change ($20$) as the percent.\n* Choice C ($33\\%$): divides by the new price: $\\frac{20}{60} \\approx 33\\%$.\n* Choice D ($75\\%$): reports the new-to-old ratio: $\\frac{60}{80} = 75\\%$.\n\n**Test Day Takeaway:** Percent change always divides by the ORIGINAL value: $\\frac{\\text{change}}{\\text{original}} \\times 100\\%$.",
      skills: ["percent-change", "percents"]
    },
    {
      id: 8,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The mean of six numbers is $12$. Five of the numbers are $8$, $10$, $11$, $14$, and $16$. What is the sixth number?",
      correctAnswer: "13",
      explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~10s):** Required total $= 6 \\cdot 12 = 72$. Sum of the five given $= 59$. Sixth number $= 72 - 59 = 13$.\n\n**The Full Solution:**\nStep 1: Mean $= \\frac{\\text{sum}}{\\text{count}}$, so sum $= \\text{mean} \\times \\text{count} = 6 \\cdot 12 = 72$.\nStep 2: Add the five known numbers: $8 + 10 + 11 + 14 + 16 = 59$.\nStep 3: The missing number is $72 - 59 = 13$.\nCheck: $\\frac{59 + 13}{6} = \\frac{72}{6} = 12$. $\\checkmark$\n\n**Common Mistakes:** Averaging only the five given numbers ($\\frac{59}{5} = 11.8$); reporting $72$, the total sum, instead of the missing value.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ total sum. To find a missing value, subtract the known sum from the required total.",
      skills: ["calculate-mean", "statistics"]
    },
    {
      id: 9,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What are the solutions to the equation $x^2 + 7x + 12 = 0$?",
      choices: [
        // distractor: signs flipped
        { id: "A", text: "$x = 3 \\text{ or } x = 4$" },
        { id: "B", text: "$x = -3 \\text{ or } x = -4$" },
        // distractor: confuses sum and product
        { id: "C", text: "$x = 7 \\text{ or } x = 12$" },
        // distractor: stops at one root
        { id: "D", text: "$x = -12$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Find two numbers that multiply to $12$ and add to $7$: that's $3$ and $4$, so $(x + 3)(x + 4) = 0$ gives $x = -3$ or $x = -4$.\n\n**The Full Solution:**\nStep 1: For $x^2 + bx + c$, find two numbers with product $c = 12$ and sum $b = 7$. They are $3$ and $4$.\nStep 2: Factor: $x^2 + 7x + 12 = (x + 3)(x + 4)$.\nStep 3: Set each factor to $0$: $x = -3$ or $x = -4$.\nCheck: $(-3)^2 + 7(-3) + 12 = 9 - 21 + 12 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = 3$ or $x = 4$): reports the factor numbers instead of their opposites.\n* Choice C ($x = 7$ or $x = 12$): confuses the coefficients $b$ and $c$ with the roots.\n* Choice D ($x = -12$): uses the constant $c = 12$ directly as a root.\n\n**Test Day Takeaway:** To factor $x^2 + bx + c$, find two numbers with product $c$ and sum $b$. The roots are the OPPOSITES of those numbers.",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A line passes through the points $(1, 3)$ and $(7, 15)$. What is the slope of the line?",
      choices: [
        // distractor: flips Δx and Δy
        { id: "A", text: "$\\dfrac{1}{2}$" },
        { id: "B", text: "$2$" },
        // distractor: adds instead of subtracts
        { id: "C", text: "$\\dfrac{18}{8}$" },
        // distractor: subtracts wrong direction
        { id: "D", text: "$-2$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Slope $= \\frac{\\Delta y}{\\Delta x} = \\frac{15 - 3}{7 - 1} = \\frac{12}{6} = 2$.\n\n**The Full Solution:**\nStep 1: Use $m = \\frac{y_2 - y_1}{x_2 - x_1}$ with $(1, 3)$ and $(7, 15)$.\nStep 2: $m = \\frac{15 - 3}{7 - 1} = \\frac{12}{6}$.\nStep 3: Simplify: $m = 2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{2}$): flips the formula to $\\frac{\\Delta x}{\\Delta y} = \\frac{6}{12}$.\n* Choice C ($\\frac{18}{8}$): adds the coordinates instead of subtracting: $\\frac{15 + 3}{7 + 1}$.\n* Choice D ($-2$): subtracts in opposite directions in the numerator and denominator.\n\n**Test Day Takeaway:** Slope is rise over run. Keep a consistent order: the same point's coordinates go first in both the numerator and the denominator.",
      skills: ["slope-from-points", "slope"]
    },
    {
      id: 11,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "What is the positive solution to $x^2 = 49$?",
      correctAnswer: "7",
      explanation: "**SAT Pattern: Square Root Solutions**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~3s):** $\\sqrt{49} = 7$, and the question asks for the positive solution, so $x = 7$.\n\n**The Full Solution:**\nStep 1: $x^2 = 49$ has two solutions, $x = \\pm 7$, since $7^2 = 49$ and $(-7)^2 = 49$.\nStep 2: The question asks for the positive solution, so $x = 7$.\n\n**Common Mistakes:** Reporting $-7$ when the question wants the positive root; dividing $49$ by $2$ ($24.5$) instead of taking the square root; reporting $49$ and forgetting to take the root at all.\n\n**Test Day Takeaway:** $x^2 = k$ for positive $k$ has solutions $x = \\pm\\sqrt{k}$. Always check whether the question wants both, only the positive, or only the negative.",
      skills: ["square-root-solutions", "quadratic-equations"]
    },
    {
      id: 12,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "If $(x + 3)(x - 7) = x^2 + bx - 21$, what is the value of $b$?",
      choices: [
        // distractor: gives sum of roots without sign flip
        { id: "A", text: "$10$" },
        { id: "B", text: "$-4$" },
        // distractor: gives 3 - 7 = -4 but reports positive
        { id: "C", text: "$4$" },
        // distractor: multiplies 3 \cdot 7
        { id: "D", text: "$21$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Expanding a Product (FOIL)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The middle coefficient is the sum of the constants: $3 + (-7) = -4$, so $b = -4$.\n\n**The Full Solution:**\nStep 1: Expand with FOIL: $(x + 3)(x - 7) = x^2 - 7x + 3x - 21$.\nStep 2: Combine the middle terms: $-7x + 3x = -4x$, so the product is $x^2 - 4x - 21$.\nStep 3: Match $x^2 + bx - 21$: $b = -4$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): adds the magnitudes $3 + 7 = 10$, ignoring the negative sign on the $-7$.\n* Choice C ($4$): finds the right magnitude but drops the negative sign.\n* Choice D ($21$): reports the constant-term magnitude $3 \\cdot 7 = 21$ instead of the linear coefficient.\n\n**Test Day Takeaway:** For $(x + p)(x + q) = x^2 + (p + q)x + pq$, the middle coefficient is the SUM of the constants (with signs) and the constant term is their PRODUCT.",
      skills: ["polynomial-expansion", "quadratic-equations"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the solution to the system of equations $2x + y = 11$ and $y = x + 2$?",
      choices: [
        // distractor: swaps coordinates
        { id: "A", text: "$(5, 3)$" },
        { id: "B", text: "$(3, 5)$" },
        // distractor: arithmetic slip
        { id: "C", text: "$(2, 4)$" },
        // distractor: uses x = 0
        { id: "D", text: "$(0, 11)$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The second equation already gives $y$, so drop it into the first: $2x + (x+2) = 11 \\Rightarrow 3x = 9 \\Rightarrow x = 3$, and $y = 3+2 = 5$, giving $(3,5)$.\n\n**The Full Solution:**\nStep 1: Substitute $y = x+2$ into $2x + y = 11$: $2x + (x+2) = 11$.\nStep 2: Combine: $3x + 2 = 11 \\Rightarrow 3x = 9 \\Rightarrow x = 3$.\nStep 3: Back-substitute: $y = 3 + 2 = 5$. The solution is $(3,5)$.\nCheck: $2(3) + 5 = 11$ $\\checkmark$ and $5 = 3 + 2$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(5,3)$): correct numbers but the coordinates are swapped — $x$ and $y$ reversed.\n* Choice C ($(2,4)$): an arithmetic slip in the substitution step.\n* Choice D ($(0,11)$): used $x=0$ and read $y$ straight off $2x+y=11$ without enforcing $y=x+2$.\n\n**Test Day Takeaway:** When one equation is already solved for a variable, substitute that expression into the other equation — never guess-and-check.",
      skills: ["substitution-method", "systems-of-equations"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "An investment of $\\$500$ earns simple interest at $4\\%$ per year. Which expression gives the value of the investment after $t$ years?",
      choices: [
        // distractor: exponential model with wrong base
        { id: "A", text: "$500 \\cdot 0.04^{t}$" },
        { id: "B", text: "$500 + 20t$" },
        // distractor: forgets to convert percent
        { id: "C", text: "$500 + 4t$" },
        // distractor: replaces simple with exponential growth
        { id: "D", text: "$500 \\cdot (1.04)^{t}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Simple Interest (Linear Growth)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Simple interest adds the same dollar amount each year: $4\\%$ of $\\$500$ is $\\$20$, so the value is $500 + 20t$.\n\n**The Full Solution:**\nStep 1: Simple interest grows linearly — a fixed amount is added per year, not a percentage of the running balance.\nStep 2: Annual interest $= 0.04 \\times 500 = \\$20$.\nStep 3: Value after $t$ years $=$ principal $+$ (yearly interest)$\\times t = 500 + 20t$.\nCheck: $t=0 \\Rightarrow \\$500$; $t=5 \\Rightarrow \\$600$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($500 \\cdot 0.04^{t}$): an exponential model with a base below $1$ — that decays toward $0$, not grows.\n* Choice C ($500 + 4t$): used $\\$4$ per year instead of $4\\%$ of $\\$500$.\n* Choice D ($500 \\cdot (1.04)^{t}$): the compound-interest (exponential) formula, not simple interest.\n\n**Test Day Takeaway:** Simple interest is LINEAR — principal $+$ (annual interest)$\\times t$. Compound interest is EXPONENTIAL — principal $\\times (1+r)^{t}$.",
      skills: ["linear-functions", "percents", "word-problems"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In a right triangle, an acute angle $\\theta$ satisfies $\\tan(\\theta) = \\dfrac{3}{4}$. What is the value of $\\sin(\\theta)$?",
      choices: [
        // distractor: same as tan
        { id: "A", text: "$\\dfrac{3}{4}$" },
        { id: "B", text: "$\\dfrac{3}{5}$" },
        // distractor: cos instead of sin
        { id: "C", text: "$\\dfrac{4}{5}$" },
        // distractor: reciprocal
        { id: "D", text: "$\\dfrac{5}{3}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: SOH-CAH-TOA in a 3-4-5 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $\\tan(\\theta) = \\frac{\\text{opp}}{\\text{adj}} = \\frac{3}{4}$ sets up a $3$-$4$-$5$ triangle, so the hypotenuse is $5$ and $\\sin(\\theta) = \\frac{3}{5}$.\n\n**The Full Solution:**\nStep 1: $\\tan(\\theta) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{3}{4}$, so opposite $= 3$ and adjacent $= 4$.\nStep 2: Find the hypotenuse: $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.\nStep 3: $\\sin(\\theta) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{3}{5}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{4}$): repeats $\\tan(\\theta)$ instead of computing $\\sin(\\theta)$.\n* Choice C ($\\frac{4}{5}$): this is $\\cos(\\theta)$ — used the adjacent side over the hypotenuse.\n* Choice D ($\\frac{5}{3}$): this is $\\csc(\\theta)$, the reciprocal of $\\sin(\\theta)$.\n\n**Test Day Takeaway:** Given one trig ratio, label the two sides it names, find the third with the Pythagorean theorem, then read off the ratio asked for. The $3$-$4$-$5$ triangle shows up constantly.",
      skills: ["soh-cah-toa", "right-triangles"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "What is the value of $2^5 \\cdot 2^3$? Express your answer as a single integer.",
      correctAnswer: "256",
      explanation: "**SAT Pattern: Exponent Rules — Same Base Multiplication**\n\n**The correct answer is $256$.**\n\n**The Fast Way (~5s):** Same base multiplied means ADD the exponents: $2^5 \\cdot 2^3 = 2^{5+3} = 2^8 = 256$.\n\n**The Full Solution:**\nStep 1: When multiplying powers with the same base, add the exponents: $2^5 \\cdot 2^3 = 2^{5+3} = 2^8$.\nStep 2: Evaluate: $2^8 = 256$.\nCheck: $2^5 = 32$ and $2^3 = 8$, and $32 \\times 8 = 256$ $\\checkmark$.\n\n**Common Mistakes:** Multiplying the exponents to get $2^{15}$; changing the base to get $4^8$; or stopping at the exponent $8$ instead of computing the value $256$.\n\n**Test Day Takeaway:** Same base, multiply $\\Rightarrow$ ADD exponents: $a^m \\cdot a^n = a^{m+n}$. Same base, divide $\\Rightarrow$ SUBTRACT.",
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
      question: "If $4(x + 2) = 5x - 1$, what is the value of $x$?",
      choices: [
        // distractor: arithmetic slip
        { id: "A", text: "$7$" },
        { id: "B", text: "$9$" },
        // distractor: forgets to distribute
        { id: "C", text: "$1$" },
        // distractor: subtracts wrong direction
        { id: "D", text: "$-9$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Distribute the left side: $4x + 8 = 5x - 1$. Subtract $4x$: $8 = x - 1$, so $x = 9$.\n\n**The Full Solution:**\nStep 1: Distribute: $4(x+2) = 4x + 8$, so $4x + 8 = 5x - 1$.\nStep 2: Collect variables on one side and constants on the other: $8 + 1 = 5x - 4x$.\nStep 3: Simplify: $9 = x$.\nCheck: $4(9+2) = 44$ and $5(9) - 1 = 44$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): an arithmetic slip while collecting terms.\n* Choice C ($1$): failed to distribute, treating $4(x+2)$ as $4x + 2$.\n* Choice D ($-9$): moved terms in the wrong direction and flipped the sign.\n\n**Test Day Takeaway:** Distribute first, then gather variables on one side and constants on the other before dividing.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "A circle in the $xy$-plane has center $(0, 0)$ and passes through the point $(6, 8)$. What is the radius of the circle?",
      correctAnswer: "10",
      explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~5s):** The radius is the distance from $(0,0)$ to $(6,8)$: $\\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$. ($6$-$8$-$10$ is just $3$-$4$-$5$ doubled.)\n\n**The Full Solution:**\nStep 1: The radius equals the distance from the center to any point on the circle.\nStep 2: $r = \\sqrt{(6-0)^2 + (8-0)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.\nCheck: the circle is $x^2 + y^2 = 100$, and $6^2 + 8^2 = 100$ $\\checkmark$.\n\n**Common Mistakes:** Adding without squaring to get $6 + 8 = 14$; forgetting the square root and reporting $100$; or giving the diameter $20$ instead of the radius.\n\n**Test Day Takeaway:** A circle centered at the origin is $x^2 + y^2 = r^2$ — the radius is the distance from the center to any point on the circle.",
      skills: ["circle-equation", "circles"]
    },
    {
      id: 19,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "If $h(x) = 2x^2 + 3x - 1$, what is the value of $h(-2)$?",
      choices: [
        // distractor: forgets the +1 of constant term and gets sign wrong
        { id: "A", text: "$-7$" },
        { id: "B", text: "$1$" },
        // distractor: stops at 2x^2 = 8 without the rest
        { id: "C", text: "$8$" },
        // distractor: adds 6 instead of subtracting
        { id: "D", text: "$13$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $h(-2) = 2(-2)^2 + 3(-2) - 1 = 2(4) - 6 - 1 = 8 - 6 - 1 = 1$.\n\n**The Full Solution:**\nStep 1: Substitute $x = -2$: $h(-2) = 2(-2)^2 + 3(-2) - 1$.\nStep 2: Square first: $(-2)^2 = 4$, so $2(4) = 8$. The middle term is $3(-2) = -6$.\nStep 3: Combine: $8 - 6 - 1 = 1$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): dropped the $+8$ term, leaving $-6 - 1$.\n* Choice C ($8$): stopped after the first term $2x^2 = 8$.\n* Choice D ($13$): added $6$ instead of subtracting, getting $8 + 6 - 1$.\n\n**Test Day Takeaway:** $(-a)^2 = +a^2$, and squaring happens before multiplying. Track every sign as you substitute.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "Two parallel lines in the $xy$-plane are crossed by a transversal. One pair of corresponding angles is given by $(3x + 10)^{\\circ}$ and $(5x - 30)^{\\circ}$. What is the value of $x$?",
      choices: [
        // distractor: sets sum to 180 (supplementary)
        { id: "A", text: "$25$" },
        { id: "B", text: "$20$" },
        // distractor: arithmetic slip
        { id: "C", text: "$10$" },
        // distractor: subtracts wrong direction
        { id: "D", text: "$-20$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Corresponding Angles (Parallel Lines)**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Corresponding angles between parallel lines are EQUAL: $3x + 10 = 5x - 30 \\Rightarrow 40 = 2x \\Rightarrow x = 20$.\n\n**The Full Solution:**\nStep 1: When parallel lines are cut by a transversal, corresponding angles are congruent — set the expressions equal: $3x + 10 = 5x - 30$.\nStep 2: Collect: $10 + 30 = 5x - 3x \\Rightarrow 40 = 2x$.\nStep 3: Solve: $x = 20$.\nCheck: $3(20) + 10 = 70$ and $5(20) - 30 = 70$ $\\checkmark$ (both angles are $70^\\circ$).\n\n**Why the wrong answers are tempting:**\n* Choice A ($25$): treated the angles as supplementary, solving $3x+10+5x-30 = 180$.\n* Choice C ($10$): an arithmetic slip in the collect step.\n* Choice D ($-20$): collected terms in the wrong direction, flipping the sign.\n\n**Test Day Takeaway:** Parallel lines with a transversal — corresponding angles are EQUAL; same-side interior angles are SUPPLEMENTARY (sum to $180^\\circ$). Identify which relationship applies before writing the equation.",
      skills: ["parallel-lines", "angles", "geometry"]
    },
    {
      id: 21,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "The scatterplot below shows the relationship between weight $x$ (in pounds) and miles per gallon $y$ for several cars. The line of best fit is $\\hat{y} = -0.005x + 50$. According to the model, by how many miles per gallon does the predicted gas mileage decrease for each additional pound of weight? Express your answer as a decimal.",
      diagram: { type: "scatterplot", params: {
        points: [[1500,44],[2000,38],[2500,40],[3000,33],[3500,34],[4000,28],[4500,29],[5000,23]],
        xMin: 1000, xMax: 5500, yMin: 20, yMax: 50,
        xGridStep: 500, yGridStep: 5, xLabelStep: 1000, yLabelStep: 5,
        xLabel: "Weight (lb)", yLabel: "Miles per gallon",
        bestFitLine: { slope: -0.005, intercept: 50 },
      } },
      correctAnswer: "0.005",
      explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $0.005$.**\n\n**The Fast Way (~5s):** In $\\hat{y} = -0.005x + 50$, the slope $-0.005$ is the change in $y$ per one-pound increase in $x$; the decrease is its magnitude, $0.005$.\n\n**The Full Solution:**\nStep 1: For a linear model $\\hat{y} = mx + b$, the slope $m$ is the predicted change in $y$ per one-unit change in $x$.\nStep 2: Here $m = -0.005$ — the negative sign means mileage goes DOWN as weight goes up.\nStep 3: The question asks \"by how much does it decrease,\" which is the size of the drop: $0.005$ miles per gallon per pound.\n\n**Common Mistakes:** Reporting $-0.005$ when the question asks for the amount of the decrease (a positive number); or reporting the intercept $50$, which is the predicted mileage at zero weight.\n\n**Test Day Takeaway:** In $\\hat{y} = mx + b$, the slope is the rate of change. When asked \"by how much does it decrease,\" give the magnitude of a negative slope.",
      skills: ["linear-functions", "scatterplots", "slope"]
    },
    {
      id: 22,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The table shows the number of students in each grade who chose pizza or salad for lunch.\n\n| | Pizza | Salad | Total |\n|---|---|---|---|\n| 9th | $30$ | $10$ | $40$ |\n| 10th | $25$ | $15$ | $40$ |\n| 11th | $20$ | $20$ | $40$ |\n| Total | $75$ | $45$ | $120$ |\n\nIf a student is selected at random from all students surveyed, what is the probability that the student is in 11th grade AND chose salad?",
      choices: [
        // distractor: 20/45 — uses salad total
        { id: "A", text: "$\\dfrac{20}{45}$" },
        // distractor: 20/40 — uses 11th-grade total
        { id: "B", text: "$\\dfrac{20}{40}$" },
        { id: "C", text: "$\\dfrac{20}{120}$" },
        // distractor: 45/120 — total salad over total
        { id: "D", text: "$\\dfrac{45}{120}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Joint Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** \"AND\" with no \"given\" means joint probability: count both conditions over the grand total. 11th-grade salad is $20$, total students is $120$, so $\\frac{20}{120}$.\n\n**The Full Solution:**\nStep 1: $P(\\text{11th AND salad}) = \\frac{\\text{students who are both}}{\\text{all students}}$.\nStep 2: From the table, 11th graders who chose salad $= 20$.\nStep 3: Total surveyed $= 120$, so $P = \\frac{20}{120}$ (which reduces to $\\frac{1}{6}$).\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{20}{45}$): divided by the salad total $45$ — that is $P(\\text{11th} \\mid \\text{salad})$, a conditional probability.\n* Choice B ($\\frac{20}{40}$): divided by the 11th-grade total $40$ — that is $P(\\text{salad} \\mid \\text{11th})$.\n* Choice D ($\\frac{45}{120}$): the marginal probability of salad alone, ignoring the grade condition.\n\n**Test Day Takeaway:** \"AND\" without \"given\" is a joint probability — both conditions over the GRAND TOTAL. The word \"given\" is what shrinks the denominator to one row or column.",
      skills: ["two-way-table", "probability"]
    }
  ]
};

export default practiceTest2M2Easy;
