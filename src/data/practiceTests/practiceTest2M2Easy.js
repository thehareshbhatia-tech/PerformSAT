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
      explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~3s):** Divide both sides by $5$: $x = \\dfrac{35}{5} = 7$.\n\n**The Full Solution:**\n$5x = 35$\n$x = \\dfrac{35}{5} = 7$.\n\nVerification: $5 \\cdot 7 = 35$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong operation\" — subtracts $5$ from $35$.\n* Choice B: \"wrong operation\" — adds $5$ to $35$.\n* Choice D: \"wrong base\" — uses the coefficient as the answer.\n\n**Test Day Takeaway:** To undo multiplication by $k$, divide both sides by $k$.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "If $4x + 2 = 18$, what is the value of $x$?",
      correctAnswer: "4",
      explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~5s):** Subtract $2$, then divide by $4$: $4x = 16 \\Rightarrow x = 4$.\n\n**The Full Solution:**\n$4x + 2 = 18$\n$4x = 18 - 2 = 16$\n$x = \\dfrac{16}{4} = 4$.\n\nVerification: $4(4) + 2 = 16 + 2 = 18$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Dividing $18$ by $4$ first without subtracting: $\\frac{18}{4} = 4.5$.\n* Adding instead of subtracting the $2$: $4x = 20 \\Rightarrow x = 5$.\n\n**Test Day Takeaway:** Solve linear equations by reversing order of operations: undo addition/subtraction first, then undo multiplication/division.",
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
      explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $g(4) = 6 - 2(4) = 6 - 8 = -2$.\n\n**The Full Solution:**\nSubstitute $x = 4$ into $g(x) = 6 - 2x$:\n$g(4) = 6 - 2(4) = 6 - 8 = -2$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — substitutes incorrectly: $6 - 4 = 2$ (uses $x$ instead of $2x$).\n* Choice B: \"applies the inverse operation\" — drops the constant: $-2(4) = -8$.\n* Choice D: \"wrong sign\" — adds instead of subtracts: $6 + 2(4) = 14$.\n\n**Test Day Takeaway:** $g(a)$ means substitute $a$ for $x$ everywhere AND respect the order of operations: multiplication before subtraction.",
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
      explanation: "**SAT Pattern: Proportion / Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $\\dfrac{5}{2} = \\dfrac{20}{s}$. Cross-multiply: $5s = 40 \\Rightarrow s = 8$.\n\n**The Full Solution:**\nSet up the ratio with corresponding parts in matching positions:\n$\\dfrac{\\text{flour}}{\\text{sugar}} = \\dfrac{5}{2} = \\dfrac{20}{s}$.\n\nCross-multiply: $5s = 2 \\cdot 20 = 40$, so $s = 8$ cups.\n\nAlternatively: $20$ cups of flour $= 4$ batches of the $5$-cup ratio. Each batch needs $2$ cups of sugar, so total $= 4 \\cdot 2 = 8$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — reuses the ratio numerator.\n* Choice B: \"wrong operation\" — subtracts numbers from the ratio.\n* Choice D: \"applies the inverse operation\" — flips the ratio: $\\frac{2}{5} = \\frac{20}{s}$ gives $s = 50$.\n\n**Test Day Takeaway:** Set up proportions with categories in matching positions on both sides. Cross-multiply to solve.",
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
      explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~3s):** In $y = mx + b$, the slope is $m = 5$.\n\n**The Full Solution:**\nThe equation $y = 5x - 7$ is in slope-intercept form $y = mx + b$:\n* slope $m = 5$\n* $y$-intercept $b = -7$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — gives the $y$-intercept instead of slope.\n* Choice C: \"applies the inverse operation\" — gives the $x$-intercept ($y = 0 \\Rightarrow x = \\frac{7}{5}$).\n* Choice D: \"wrong operation\" — adds slope and intercept ($5 - 7 = -2$).\n\n**Test Day Takeaway:** $y = mx + b$: slope is $m$ (coefficient of $x$); $y$-intercept is $b$ (constant term).",
      skills: ["slope-intercept-form", "linear-functions"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "A right triangle has legs of length $9$ and $12$. What is the length of the hypotenuse?",
      correctAnswer: "15",
      explanation: "**SAT Pattern: Pythagorean Theorem (Multiple of 3-4-5)**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~5s):** $9$-$12$-$15$ is $3 \\times$ the $3$-$4$-$5$ Pythagorean triple. Hypotenuse $= 15$.\n\n**The Full Solution:**\nBy the Pythagorean theorem: $c^2 = a^2 + b^2$.\n$c^2 = 9^2 + 12^2 = 81 + 144 = 225$\n$c = \\sqrt{225} = 15$.\n\n**Common Mistakes to Avoid:**\n* Adding without squaring: $9 + 12 = 21$.\n* Forgetting the square root: reporting $225$.\n\n**Test Day Takeaway:** Common Pythagorean triples and their multiples appear constantly: $3$-$4$-$5$ (and $6$-$8$-$10$, $9$-$12$-$15$), $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$.",
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
      explanation: "**SAT Pattern: Percent Change / Decrease**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Decrease $= 80 - 60 = 20$. Percent $= \\dfrac{20}{80} \\times 100 = 25\\%$.\n\n**The Full Solution:**\nPercent change $= \\dfrac{|\\text{new} - \\text{old}|}{\\text{old}} \\times 100\\%$.\nHere old $= 80$, new $= 60$:\n$\\dfrac{80 - 60}{80} \\times 100 = \\dfrac{20}{80} \\times 100 = 25\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"misreads units\" — uses the dollar amount of change ($20$) as the percent.\n* Choice C: \"applies the inverse operation\" — uses the new price as denominator: $\\frac{20}{60} \\approx 33\\%$.\n* Choice D: \"wrong base\" — gives the new-to-old ratio: $\\frac{60}{80} = 75\\%$.\n\n**Test Day Takeaway:** Percent change always uses the ORIGINAL value as the denominator: $\\dfrac{\\text{change}}{\\text{original}} \\times 100\\%$.",
      skills: ["percent-change", "percents"]
    },
    {
      id: 8,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The mean of six numbers is $12$. Five of the numbers are $8$, $10$, $11$, $14$, and $16$. What is the sixth number?",
      correctAnswer: "13",
      explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~10s):** Total sum needed: $6 \\cdot 12 = 72$. Sum of five given: $8 + 10 + 11 + 14 + 16 = 59$. Sixth: $72 - 59 = 13$.\n\n**The Full Solution:**\nMean $= \\dfrac{\\text{sum}}{\\text{count}}$, so sum $= $ mean $\\times$ count $= 6 \\cdot 12 = 72$.\nSum of five given: $8 + 10 + 11 + 14 + 16 = 59$.\nMissing value: $72 - 59 = 13$.\n\nVerification: $\\dfrac{8 + 10 + 11 + 14 + 16 + 13}{6} = \\dfrac{72}{6} = 12$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Averaging only the five given numbers ($\\frac{59}{5} = 11.8$).\n* Reporting $72$ (the total) instead of the missing value.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ total sum. To find a missing value, subtract the known sum from the required total.",
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
      explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Find two numbers that multiply to $12$ and add to $7$: $3$ and $4$. So $(x + 3)(x + 4) = 0$ giving $x = -3$ or $x = -4$.\n\n**The Full Solution:**\nFactor $x^2 + bx + c$ by finding two numbers whose product is $c$ and sum is $b$. Here $c = 12$, $b = 7$:\nNumbers: $3$ and $4$ (since $3 \\cdot 4 = 12$ and $3 + 4 = 7$).\n\n$x^2 + 7x + 12 = (x + 3)(x + 4) = 0$\n$x = -3$ or $x = -4$.\n\nVerification: $(-3)^2 + 7(-3) + 12 = 9 - 21 + 12 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — gives the factor numbers themselves rather than their opposites.\n* Choice C: \"wrong base\" — confuses the coefficients with the roots.\n* Choice D: \"stops one step early\" — uses $c = 12$ as a root.\n\n**Test Day Takeaway:** Factor $x^2 + bx + c$: find two numbers with product $c$ and sum $b$. The roots are the OPPOSITES of those numbers.",
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
      explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Slope $= \\dfrac{\\Delta y}{\\Delta x} = \\dfrac{15 - 3}{7 - 1} = \\dfrac{12}{6} = 2$.\n\n**The Full Solution:**\nSlope formula: $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$.\nUsing $(x_1, y_1) = (1, 3)$ and $(x_2, y_2) = (7, 15)$:\n$m = \\dfrac{15 - 3}{7 - 1} = \\dfrac{12}{6} = 2$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — flips the formula: $\\frac{\\Delta x}{\\Delta y}$.\n* Choice C: \"wrong operation\" — adds the coordinates instead of subtracting.\n* Choice D: \"wrong sign\" — subtracts in the wrong direction.\n\n**Test Day Takeaway:** Slope $=$ rise over run. Pick a consistent order: same point's coordinates first in both numerator and denominator.",
      skills: ["slope-from-points", "slope"]
    },
    {
      id: 11,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "What is the positive solution to $x^2 = 49$?",
      correctAnswer: "7",
      explanation: "**SAT Pattern: Square Root Solutions**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~3s):** $\\sqrt{49} = 7$. Since the question asks for the positive solution, $x = 7$.\n\n**The Full Solution:**\n$x^2 = 49$ has TWO solutions: $x = \\pm 7$ (because $7^2 = 49$ and $(-7)^2 = 49$).\nThe positive solution is $x = 7$.\n\n**Common Mistakes to Avoid:**\n* Reporting $-7$ (the question asks for the POSITIVE solution).\n* Dividing $49$ by $2$ ($24.5$) instead of taking the square root.\n* Reporting $49$ (forgetting to take the square root).\n\n**Test Day Takeaway:** $x^2 = k$ for positive $k$ has solutions $x = \\pm \\sqrt{k}$. Always check whether the question wants both, only positive, or only negative.",
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
      explanation: "**SAT Pattern: Expanding a Product (FOIL)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Sum of constants: $3 + (-7) = -4$, so middle coefficient $b = -4$.\n\n**The Full Solution:**\nExpand using FOIL:\n$(x + 3)(x - 7) = x^2 - 7x + 3x - 21 = x^2 - 4x - 21$.\n\nMatching $x^2 + bx - 21$: $b = -4$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — adds magnitudes ($3 + 7 = 10$) without considering signs.\n* Choice C: \"wrong sign\" — drops the sign on $-4$, reporting positive.\n* Choice D: \"wrong base\" — gives the constant term magnitude ($3 \\cdot 7 = 21$) instead of the linear coefficient.\n\n**Test Day Takeaway:** $(x + p)(x + q) = x^2 + (p + q)x + pq$. Middle coefficient is the SUM of constants (with signs); constant term is their PRODUCT.",
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
      explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Substitute $y = x + 2$ into $2x + y = 11$: $2x + (x + 2) = 11 \\Rightarrow 3x = 9 \\Rightarrow x = 3$. Then $y = 3 + 2 = 5$.\n\n**The Full Solution:**\nSubstitute the second equation into the first:\n$2x + (x + 2) = 11$\n$3x + 2 = 11$\n$3x = 9$\n$x = 3$.\n\nThen $y = 3 + 2 = 5$.\n\nSolution: $(3, 5)$.\n\nVerification: $2(3) + 5 = 11$ \\checkmark; $5 = 3 + 2$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — swaps the $x$ and $y$ coordinates.\n* Choice C: \"wrong base\" — arithmetic slip on the substitution.\n* Choice D: \"stops one step early\" — uses $x = 0$ in the first equation.\n\n**Test Day Takeaway:** When one equation is solved for a variable, substitute that expression into the other equation.",
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
      explanation: "**SAT Pattern: Simple Interest (Linear Growth)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Yearly interest $= 0.04 \\cdot 500 = 20$. Total $= 500 + 20t$.\n\n**The Full Solution:**\nSimple interest adds a fixed amount each year (linear growth, not exponential).\nAnnual interest $= 4\\%$ of $\\$500 = 0.04 \\cdot 500 = \\$20$ per year.\nValue after $t$ years $= $ principal $+ $ (interest per year) $\\cdot t = 500 + 20t$.\n\nCheck: $t = 0 \\Rightarrow \\$500$; $t = 1 \\Rightarrow \\$520$; $t = 5 \\Rightarrow \\$600$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses an exponential model with a decay-like base $< 1$.\n* Choice C: \"misses unit conversion\" — uses $4$ dollars instead of $4\\%$ of $500$.\n* Choice D: \"applies the inverse operation\" — uses compound (exponential) interest formula.\n\n**Test Day Takeaway:** Simple interest is LINEAR: principal $+$ (annual interest) $\\cdot t$. Compound interest is EXPONENTIAL: principal $\\cdot (1 + r)^{t}$.",
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
      explanation: "**SAT Pattern: SOH-CAH-TOA in a 3-4-5 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $\\tan(\\theta) = \\dfrac{\\text{opp}}{\\text{adj}} = \\dfrac{3}{4}$, so opp $= 3$, adj $= 4$. Hypotenuse $= \\sqrt{9 + 16} = 5$. $\\sin(\\theta) = \\dfrac{\\text{opp}}{\\text{hyp}} = \\dfrac{3}{5}$.\n\n**The Full Solution:**\nFor an acute angle in a right triangle:\n* $\\tan(\\theta) = \\dfrac{\\text{opposite}}{\\text{adjacent}}$\n* $\\sin(\\theta) = \\dfrac{\\text{opposite}}{\\text{hypotenuse}}$\n\nGiven $\\tan(\\theta) = \\dfrac{3}{4}$: opposite $= 3$, adjacent $= 4$.\nHypotenuse: $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.\nSo $\\sin(\\theta) = \\dfrac{3}{5}$.\n\nThis is the classic $3$-$4$-$5$ right triangle.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — repeats $\\tan$.\n* Choice C: \"applies the inverse operation\" — gives $\\cos(\\theta) = \\dfrac{4}{5}$.\n* Choice D: \"applies the inverse operation\" — gives $\\csc(\\theta) = \\dfrac{5}{3}$.\n\n**Test Day Takeaway:** When given one trig ratio, draw the right triangle, label the two given sides, find the third with Pythagoras. The $3$-$4$-$5$ triangle appears constantly.",
      skills: ["soh-cah-toa", "right-triangles"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "What is the value of $2^5 \\cdot 2^3$? Express your answer as a single integer.",
      correctAnswer: "256",
      explanation: "**SAT Pattern: Exponent Rules — Same Base Multiplication**\n\n**The correct answer is $256$.**\n\n**The Fast Way (~5s):** Same base, multiply: ADD exponents. $2^5 \\cdot 2^3 = 2^{5+3} = 2^8 = 256$.\n\n**The Full Solution:**\nWhen multiplying powers with the same base, add the exponents:\n$2^5 \\cdot 2^3 = 2^{5 + 3} = 2^{8}$.\n\nCompute $2^8 = 256$.\n\nVerification: $2^5 = 32$, $2^3 = 8$. $32 \\cdot 8 = 256$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Multiplying the exponents instead of adding: $2^{15}$.\n* Adding the bases too: $4^8$.\n* Reporting just the new exponent ($8$) instead of the value ($256$).\n\n**Test Day Takeaway:** Same base, multiply $\\Rightarrow$ ADD exponents: $a^m \\cdot a^n = a^{m+n}$. Same base, divide $\\Rightarrow$ SUBTRACT exponents.",
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
      explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Distribute: $4x + 8 = 5x - 1$. Subtract $4x$: $8 = x - 1$. Add $1$: $x = 9$.\n\n**The Full Solution:**\n$4(x + 2) = 5x - 1$\n$4x + 8 = 5x - 1$ (distribute)\n$8 + 1 = 5x - 4x$ (collect like terms)\n$9 = x$.\n\nVerification: $4(9 + 2) = 4(11) = 44$, and $5(9) - 1 = 44$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"off-by-one\" — arithmetic slip giving $7$.\n* Choice C: \"applies the inverse operation\" — fails to distribute, treating $4(x+2)$ as $4x + 2$.\n* Choice D: \"wrong sign\" — subtracts in the wrong direction.\n\n**Test Day Takeaway:** Distribute first, then collect variables on one side and constants on the other.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "A circle in the $xy$-plane has center $(0, 0)$ and passes through the point $(6, 8)$. What is the radius of the circle?",
      correctAnswer: "10",
      explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~5s):** Distance from $(0,0)$ to $(6,8)$: $\\sqrt{36 + 64} = \\sqrt{100} = 10$. ($6$-$8$-$10$ is a multiple of $3$-$4$-$5$.)\n\n**The Full Solution:**\nThe radius equals the distance from the center to any point on the circle.\nDistance: $r = \\sqrt{(6 - 0)^2 + (8 - 0)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.\n\nVerification: equation of the circle is $x^2 + y^2 = 100$, and $6^2 + 8^2 = 100$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Adding without squaring: $6 + 8 = 14$.\n* Forgetting the square root: $100$.\n* Reporting the diameter ($20$) instead of the radius.\n\n**Test Day Takeaway:** A circle's equation $x^2 + y^2 = r^2$ encodes the distance formula. The radius is the distance from the center to any point on the circle.",
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
      explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $h(-2) = 2(-2)^2 + 3(-2) - 1 = 2(4) - 6 - 1 = 8 - 6 - 1 = 1$.\n\n**The Full Solution:**\nSubstitute $x = -2$:\n$h(-2) = 2(-2)^2 + 3(-2) - 1$\n$= 2(4) + (-6) - 1$\n$= 8 - 6 - 1$\n$= 1$.\n\nKey: $(-2)^2 = +4$, then multiply by $2$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — drops the $+8$ in computation, getting $-6 - 1 = -7$.\n* Choice C: \"stops one step early\" — gives only $2x^2 = 8$.\n* Choice D: \"wrong sign\" — adds $6$ instead of subtracting: $8 + 6 - 1 = 13$.\n\n**Test Day Takeaway:** $(-a)^2 = +a^2$. Multiplication BEFORE addition. Track signs through every step.",
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
      explanation: "**SAT Pattern: Corresponding Angles (Parallel Lines)**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Corresponding angles are EQUAL: $3x + 10 = 5x - 30 \\Rightarrow 40 = 2x \\Rightarrow x = 20$.\n\n**The Full Solution:**\nWhen two parallel lines are cut by a transversal, corresponding angles are CONGRUENT (equal). Set the two expressions equal:\n$3x + 10 = 5x - 30$\n$10 + 30 = 5x - 3x$\n$40 = 2x$\n$x = 20$.\n\nVerification: $3(20) + 10 = 70$ and $5(20) - 30 = 70$ \\checkmark (both angles measure $70^{\\circ}$).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses supplementary ($+ = 180$): $3x + 10 + 5x - 30 = 180 \\Rightarrow 8x = 200 \\Rightarrow x = 25$.\n* Choice C: \"off-by-one\" — arithmetic slip giving $10$.\n* Choice D: \"wrong sign\" — collects in the wrong direction.\n\n**Test Day Takeaway:** Parallel lines cut by a transversal: corresponding angles are EQUAL; same-side interior angles are SUPPLEMENTARY (sum to $180^{\\circ}$). Read the diagram label to know which.",
      skills: ["parallel-lines", "angles", "geometry"]
    },
    {
      id: 21,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "A scatterplot shows the relationship between weight $x$ (in pounds) and miles per gallon $y$ for several cars. The line of best fit is $\\hat{y} = -0.005x + 50$. According to the model, by how many miles per gallon does the predicted gas mileage decrease for each additional pound of weight? Express your answer as a decimal.",
      correctAnswer: "0.005",
      explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $0.005$.**\n\n**The Fast Way (~5s):** In $\\hat{y} = -0.005x + 50$, the slope $-0.005$ means $y$ decreases by $0.005$ per unit increase in $x$.\n\n**The Full Solution:**\nFor a linear model $\\hat{y} = mx + b$:\n* slope $m$ = predicted change in $y$ per one-unit change in $x$.\n\nHere $m = -0.005$. The negative sign means $y$ DECREASES; the magnitude $0.005$ is the size of the decrease.\n\n\"By how much does it decrease\" asks for the magnitude, so the answer is $0.005$ miles per gallon per pound.\n\n**Common Mistakes to Avoid:**\n* Reporting $-0.005$ — the question asks for the AMOUNT of decrease (positive).\n* Reporting $50$ (the intercept) — that's the predicted MPG when weight is $0$.\n\n**Test Day Takeaway:** In $\\hat{y} = mx + b$, the slope $m$ is the predicted change in $y$ per unit change in $x$. Negative slope means decrease; report the magnitude when asked \"by how much does it decrease\".",
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
      explanation: "**SAT Pattern: Joint Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** \"AND\" without \"given\" $\\Rightarrow$ joint probability. Numerator $=$ both conditions $= 20$ (11th-grade salad). Denominator $=$ ALL students $= 120$. P $= \\dfrac{20}{120} = \\dfrac{1}{6}$.\n\n**The Full Solution:**\nJoint probability: $P(\\text{11th AND salad}) = \\dfrac{\\text{both conditions}}{\\text{total}}$.\n11th-grade salad: $20$.\nTotal students: $120$.\n$P = \\dfrac{20}{120} = \\dfrac{1}{6}$.\n\nNote: this is different from a CONDITIONAL probability (\"given\" 11th grade or \"given\" salad).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses total salad ($45$) as denominator (this would be $P(\\text{11th} \\mid \\text{salad})$).\n* Choice B: \"wrong base\" — uses 11th-grade total ($40$) as denominator (this would be $P(\\text{salad} \\mid \\text{11th})$).\n* Choice D: \"wrong base\" — gives $P(\\text{salad})$, the marginal probability of salad.\n\n**Test Day Takeaway:** \"AND\" (without \"given\") = joint probability = both conditions / GRAND TOTAL. \"Given\" restricts the denominator to the conditioning category.",
      skills: ["two-way-table", "probability"]
    }
  ]
};

export default practiceTest2M2Easy;
