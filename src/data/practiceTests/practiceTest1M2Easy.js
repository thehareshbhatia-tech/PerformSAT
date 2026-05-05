// Practice Test 1 — Math Module 2 Easy variant (22 questions)
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Domain mix: 7 Algebra / 6 Advanced Math / 5 Problem-Solving / 4 Geometry & Trig.

export const practiceTest1M2Easy = {
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
      question: "If $x - 7 = 12$, what is the value of $x$?",
      choices: [
        // distractor: subtracts instead of adds
        { id: "A", text: "$5$" },
        { id: "B", text: "$19$" },
        // distractor: divides by 7
        { id: "C", text: "$\\dfrac{12}{7}$" },
        // distractor: multiplies 7 \cdot 12
        { id: "D", text: "$84$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~3s):** Add $7$ to both sides: $x = 12 + 7 = 19$.\n\n**The Full Solution:**\n$x - 7 = 12$\n$x = 12 + 7 = 19$.\n\nVerification: $19 - 7 = 12$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — subtracts $7$ instead of adding.\n* Choice C: \"wrong operation\" — divides by $7$.\n* Choice D: \"wrong operation\" — multiplies by $7$.\n\n**Test Day Takeaway:** To isolate $x$, undo what was done. Subtraction is undone by ADDITION. Always operate on BOTH sides equally.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "What is $30\\%$ of $50$?",
      correctAnswer: "15",
      explanation: "**SAT Pattern: Percent of a Number**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~5s):** $30\\%$ of $50 = 0.30 \\cdot 50 = 15$.\n\n**The Full Solution:**\nConvert $30\\%$ to decimal: $30\\% = 0.30$.\nMultiply: $0.30 \\cdot 50 = 15$.\n\nAlternative: $\\dfrac{30}{100} \\cdot 50 = \\dfrac{3}{10} \\cdot 50 = 15$.\n\n**Common Mistakes to Avoid:**\n* Forgetting to convert: $30 \\cdot 50 = 1500$.\n* Subtracting: $50 - 30 = 20$.\n\n**Test Day Takeaway:** \"Percent of a number\" $=$ (percent as decimal) $\\times$ number. Move the decimal two places left to convert percent to decimal.",
      skills: ["percent-of-value", "percents"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "If $h(x) = 3x + 2$, what is the value of $h(5)$?",
      choices: [
        // distractor: adds instead of multiplies
        { id: "A", text: "$10$" },
        { id: "B", text: "$17$" },
        // distractor: stops at 3(5) without adding 2
        { id: "C", text: "$15$" },
        // distractor: uses x = 0
        { id: "D", text: "$2$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Substitute $x = 5$: $h(5) = 3(5) + 2 = 15 + 2 = 17$.\n\n**The Full Solution:**\nFunction notation $h(x)$ means \"plug in the input wherever you see $x$.\"\n$h(5) = 3(5) + 2 = 15 + 2 = 17$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong operation\" — adds $3 + 5 + 2 = 10$ instead of multiplying.\n* Choice C: \"stops one step early\" — gives $3(5) = 15$ but forgets to add $2$.\n* Choice D: \"wrong base\" — uses $x = 0$ instead of $x = 5$.\n\n**Test Day Takeaway:** $h(a)$ means substitute $a$ for $x$ everywhere in the rule and evaluate using order of operations.",
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
      question: "A bookstore sells paperbacks for $\\$8$ each and hardcovers for $\\$15$ each. Maria buys $4$ paperbacks and $3$ hardcovers. What is the total cost, in dollars?",
      choices: [
        // distractor: only paperbacks
        { id: "A", text: "$\\$32$" },
        // distractor: only hardcovers
        { id: "B", text: "$\\$45$" },
        { id: "C", text: "$\\$77$" },
        // distractor: swaps quantities — 3 paperbacks + 4 hardcovers
        { id: "D", text: "$\\$84$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Linear Cost Setup**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Total $= 4 \\cdot 8 + 3 \\cdot 15 = 32 + 45 = 77$.\n\n**The Full Solution:**\nPaperbacks: $4 \\cdot 8 = 32$ dollars.\nHardcovers: $3 \\cdot 15 = 45$ dollars.\nTotal: $32 + 45 = 77$ dollars.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives only the paperback subtotal.\n* Choice B: \"stops one step early\" — gives only the hardcover subtotal.\n* Choice D: \"applies the inverse operation\" — swaps the quantities ($3 \\cdot 8 + 4 \\cdot 15 = 84$).\n\n**Test Day Takeaway:** \"Total cost\" $=$ (rate $\\times$ quantity) for EACH item, then SUM. Match each rate with its own quantity.",
      skills: ["linear-functions", "word-problems"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "The graph of the linear function $y = -3x + 9$ is shown in the $xy$-plane. What is the $x$-intercept of the graph?",
      choices: [
        // distractor: gives the y-intercept
        { id: "A", text: "$(0, 9)$" },
        { id: "B", text: "$(3, 0)$" },
        // distractor: flips sign of y-intercept
        { id: "C", text: "$(-9, 0)$" },
        // distractor: uses slope coordinates
        { id: "D", text: "$(-3, 0)$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Finding the x-intercept**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Set $y = 0$: $0 = -3x + 9 \\Rightarrow 3x = 9 \\Rightarrow x = 3$. So $x$-intercept is $(3, 0)$.\n\n**The Full Solution:**\nThe $x$-intercept is the point where $y = 0$:\n$0 = -3x + 9$\n$3x = 9$\n$x = 3$.\n\nThe $x$-intercept is $(3, 0)$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — gives the $y$-intercept (where $x = 0$, not $y = 0$).\n* Choice C: \"wrong sign\" — flips the sign of the $y$-intercept and uses it as $x$.\n* Choice D: \"wrong base\" — uses the slope $-3$ as the $x$-coordinate.\n\n**Test Day Takeaway:** $x$-intercept: set $y = 0$ and solve for $x$. $y$-intercept: set $x = 0$ and solve for $y$.",
      skills: ["x-intercept", "linear-functions"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "A right triangle has legs of length $5$ and $12$. What is the length of the hypotenuse?",
      correctAnswer: "13",
      explanation: "**SAT Pattern: Pythagorean Theorem (5-12-13 Family)**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~5s):** Recognize the $5$-$12$-$13$ Pythagorean triple. Hypotenuse $= 13$.\n\n**The Full Solution:**\nBy the Pythagorean theorem: $c^2 = a^2 + b^2$.\n$c^2 = 5^2 + 12^2 = 25 + 144 = 169$\n$c = \\sqrt{169} = 13$.\n\n**Common Mistakes to Avoid:**\n* Adding without squaring: $5 + 12 = 17$.\n* Forgetting the square root: reporting $169$.\n* Subtracting: $\\sqrt{144 - 25} = \\sqrt{119}$, which only applies if hypotenuse is known.\n\n**Test Day Takeaway:** Memorize Pythagorean triples: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$. They appear constantly on the SAT.",
      skills: ["pythagorean-theorem", "right-triangles"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "If $\\dfrac{x}{6} = \\dfrac{15}{10}$, what is the value of $x$?",
      choices: [
        // distractor: multiplies 15 \cdot 10 / 6
        { id: "A", text: "$25$" },
        { id: "B", text: "$9$" },
        // distractor: cross-multiplies wrong direction
        { id: "C", text: "$4$" },
        // distractor: adds instead of multiplies
        { id: "D", text: "$11$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Solving a Proportion**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Cross-multiply: $10x = 6 \\cdot 15 = 90 \\Rightarrow x = 9$.\n\n**The Full Solution:**\nCross-multiply: $\\dfrac{x}{6} = \\dfrac{15}{10}$.\n$10 \\cdot x = 6 \\cdot 15$\n$10x = 90$\n$x = 9$.\n\nAlternatively: $\\dfrac{15}{10} = 1.5$, so $x = 1.5 \\cdot 6 = 9$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — multiplies $15 \\cdot 10 / 6 = 25$.\n* Choice C: \"applies the inverse operation\" — cross-multiplies in the wrong direction.\n* Choice D: \"wrong operation\" — adds instead of solving the proportion.\n\n**Test Day Takeaway:** To solve $\\dfrac{a}{b} = \\dfrac{c}{d}$, cross-multiply: $a \\cdot d = b \\cdot c$.",
      skills: ["proportions", "ratios"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A line in the $xy$-plane passes through the points $(0, -3)$ and $(4, 5)$. What is the slope of the line?",
      choices: [
        // distractor: flips Δx and Δy
        { id: "A", text: "$\\dfrac{1}{2}$" },
        { id: "B", text: "$2$" },
        // distractor: gets sign wrong
        { id: "C", text: "$-2$" },
        // distractor: writes the slope as a sum of coordinates
        { id: "D", text: "$\\dfrac{1}{4}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Slope $= \\dfrac{\\Delta y}{\\Delta x} = \\dfrac{5 - (-3)}{4 - 0} = \\dfrac{8}{4} = 2$.\n\n**The Full Solution:**\nSlope formula: $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$.\nUsing $(x_1, y_1) = (0, -3)$ and $(x_2, y_2) = (4, 5)$:\n$m = \\dfrac{5 - (-3)}{4 - 0} = \\dfrac{8}{4} = 2$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — flips the formula: $\\frac{\\Delta x}{\\Delta y}$.\n* Choice C: \"wrong sign\" — fails to handle the double negative when subtracting $-3$.\n* Choice D: \"wrong base\" — fraction misread / divides differences.\n\n**Test Day Takeaway:** Slope $=$ rise over run $= \\dfrac{y_2 - y_1}{x_2 - x_1}$. Watch out for double negatives when subtracting a negative $y$-coordinate.",
      skills: ["slope-from-points", "slope"]
    },
    {
      id: 9,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What are the solutions to the equation $x^2 - 9x + 20 = 0$?",
      choices: [
        // distractor: signs flipped
        { id: "A", text: "$x = -4 \\text{ or } x = -5$" },
        { id: "B", text: "$x = 4 \\text{ or } x = 5$" },
        // distractor: gives sum and product
        { id: "C", text: "$x = 9 \\text{ or } x = 20$" },
        // distractor: stops at one root
        { id: "D", text: "$x = 20$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Find two numbers that multiply to $20$ and add to $-9$: $-4$ and $-5$. So $(x - 4)(x - 5) = 0$ giving $x = 4$ or $x = 5$.\n\n**The Full Solution:**\nFactor $x^2 + bx + c$ by finding two numbers whose product is $c$ and sum is $b$. Here $c = 20$, $b = -9$:\nNumbers: $-4$ and $-5$ (since $-4 \\cdot -5 = 20$ and $-4 + -5 = -9$).\n\n$x^2 - 9x + 20 = (x - 4)(x - 5) = 0$\n$x = 4$ or $x = 5$.\n\nVerification: $4^2 - 9(4) + 20 = 16 - 36 + 20 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — flips both signs.\n* Choice C: \"wrong base\" — confuses the coefficients with the roots.\n* Choice D: \"stops one step early\" — uses $c = 20$ as a root.\n\n**Test Day Takeaway:** Factor $x^2 + bx + c$ by finding two numbers with product $c$ and sum $b$. The roots are the OPPOSITES of those numbers.",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    {
      id: 10,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The mean of four numbers is $20$. Three of the numbers are $14$, $22$, and $25$. What is the fourth number?",
      correctAnswer: "19",
      explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**The correct answer is $19$.**\n\n**The Fast Way (~10s):** Total sum needed: $4 \\cdot 20 = 80$. Sum of three given: $14 + 22 + 25 = 61$. Fourth: $80 - 61 = 19$.\n\n**The Full Solution:**\nMean $= \\dfrac{\\text{sum}}{\\text{count}}$, so sum $= $ mean $\\times$ count.\nRequired total sum: $4 \\cdot 20 = 80$.\nSum of three given: $14 + 22 + 25 = 61$.\nMissing value: $80 - 61 = 19$.\n\nVerification: $\\dfrac{14 + 22 + 25 + 19}{4} = \\dfrac{80}{4} = 20$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Averaging only the three given numbers ($\\frac{61}{3} \\approx 20.33$).\n* Reporting the total sum $80$ instead of the missing value.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ total sum. To find a missing value, subtract the known sum from the required total.",
      skills: ["calculate-mean", "statistics"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the solution to the system of equations $y = 3x - 1$ and $y = x + 5$?",
      choices: [
        // distractor: swaps x and y
        { id: "A", text: "$(8, 3)$" },
        { id: "B", text: "$(3, 8)$" },
        // distractor: arithmetic slip
        { id: "C", text: "$(2, 5)$" },
        // distractor: uses x = 0 in both
        { id: "D", text: "$(0, 5)$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Set the right-hand sides equal: $3x - 1 = x + 5 \\Rightarrow 2x = 6 \\Rightarrow x = 3$. Then $y = 3 + 5 = 8$. Solution: $(3, 8)$.\n\n**The Full Solution:**\nBoth equations equal $y$, so set the right-hand sides equal:\n$3x - 1 = x + 5$\n$2x = 6$\n$x = 3$.\n\nSubstitute back: $y = 3 + 5 = 8$ (or $y = 3(3) - 1 = 8$).\n\nSolution: $(x, y) = (3, 8)$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — swaps the $x$ and $y$ coordinates.\n* Choice C: \"wrong base\" — arithmetic slip giving wrong $x$.\n* Choice D: \"stops one step early\" — uses $x = 0$ rather than solving.\n\n**Test Day Takeaway:** When two equations are both solved for $y$, set the right-hand sides equal. Solve for $x$, then back-substitute to find $y$.",
      skills: ["substitution-method", "systems-of-equations"]
    },
    {
      id: 12,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A bag contains $3$ red marbles, $5$ blue marbles, and $7$ green marbles. If a marble is selected at random, what is the probability that it is red?",
      choices: [
        // distractor: uses blue count
        { id: "A", text: "$\\dfrac{5}{15}$" },
        { id: "B", text: "$\\dfrac{3}{15}$" },
        // distractor: uses green count
        { id: "C", text: "$\\dfrac{7}{15}$" },
        // distractor: divides by non-red
        { id: "D", text: "$\\dfrac{3}{12}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Basic Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Total marbles $= 3 + 5 + 7 = 15$. P(red) $= \\dfrac{3}{15}$.\n\n**The Full Solution:**\nProbability $= \\dfrac{\\text{favorable}}{\\text{total}}$.\nFavorable (red): $3$.\nTotal: $3 + 5 + 7 = 15$.\n$P(\\text{red}) = \\dfrac{3}{15} = \\dfrac{1}{5}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses blue count instead of red.\n* Choice C: \"wrong base\" — uses green count instead of red.\n* Choice D: \"applies the inverse operation\" — divides by non-red marbles ($5 + 7 = 12$) instead of total.\n\n**Test Day Takeaway:** Probability denominator $=$ TOTAL outcomes. Always include the favorable category in the total.",
      skills: ["probability-basics", "statistics"]
    },
    {
      id: 13,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A rectangular garden has length $12$ feet and width $8$ feet. What is the area of the garden, in square feet?",
      correctAnswer: "96",
      explanation: "**SAT Pattern: Rectangle Area**\n\n**The correct answer is $96$.**\n\n**The Fast Way (~5s):** Area $= \\ell \\cdot w = 12 \\cdot 8 = 96$.\n\n**The Full Solution:**\nArea of a rectangle $= $ length $\\times$ width:\n$A = 12 \\cdot 8 = 96$ square feet.\n\n**Common Mistakes to Avoid:**\n* Computing perimeter: $2(12) + 2(8) = 40$.\n* Adding dimensions: $12 + 8 = 20$.\n\n**Test Day Takeaway:** Rectangle area $= \\ell \\cdot w$. Rectangle perimeter $= 2\\ell + 2w$. Read carefully which is asked.",
      skills: ["area", "geometry"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A bacterial culture starts with $200$ bacteria and triples every hour. Which expression gives the number of bacteria after $h$ hours?",
      choices: [
        // distractor: linear instead of exponential
        { id: "A", text: "$200 + 3h$" },
        { id: "B", text: "$200 \\cdot 3^{h}$" },
        // distractor: confuses base and coefficient
        { id: "C", text: "$3 \\cdot 200^{h}$" },
        // distractor: triples once
        { id: "D", text: "$600 \\cdot h$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Tripling means multiply by $3$ each hour. After $h$ hours: $200 \\cdot 3^{h}$.\n\n**The Full Solution:**\nGeneral exponential model: $P(t) = P_0 \\cdot r^{t}$, where:\n* $P_0 = $ initial value $= 200$\n* $r = $ growth factor $= 3$\n* $t = $ number of periods $= h$.\n\nSo $P(h) = 200 \\cdot 3^{h}$.\n\nCheck: $h = 0 \\Rightarrow 200$. $h = 1 \\Rightarrow 600$. $h = 2 \\Rightarrow 1800$ (tripling each hour) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — linear ($+3h$) instead of exponential.\n* Choice C: \"applies the inverse operation\" — confuses initial value and growth factor.\n* Choice D: \"stops one step early\" — triples initial value once, then multiplies linearly.\n\n**Test Day Takeaway:** \"Triples every period\" $\\Rightarrow$ multiply by $3^{t}$. Initial value goes OUT FRONT; growth factor is the BASE.",
      skills: ["exponential-growth-decay", "exponent-laws"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In a right triangle, an acute angle $\\theta$ satisfies $\\cos(\\theta) = \\dfrac{5}{13}$. What is the value of $\\sin(\\theta)$?",
      choices: [
        // distractor: gives same fraction
        { id: "A", text: "$\\dfrac{5}{13}$" },
        { id: "B", text: "$\\dfrac{12}{13}$" },
        // distractor: gives tan
        { id: "C", text: "$\\dfrac{12}{5}$" },
        // distractor: reciprocal
        { id: "D", text: "$\\dfrac{13}{5}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: SOH-CAH-TOA in a 5-12-13 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $\\cos(\\theta) = \\dfrac{\\text{adj}}{\\text{hyp}} = \\dfrac{5}{13}$, so adj $= 5$, hyp $= 13$. Pythagoras: opp $= \\sqrt{169 - 25} = 12$. $\\sin(\\theta) = \\dfrac{12}{13}$.\n\n**The Full Solution:**\nFor an acute angle in a right triangle:\n* $\\sin(\\theta) = \\dfrac{\\text{opposite}}{\\text{hypotenuse}}$\n* $\\cos(\\theta) = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}}$\n\nGiven $\\cos(\\theta) = \\frac{5}{13}$: adjacent $= 5$, hypotenuse $= 13$.\nFind opposite by Pythagoras: $\\text{opp}^2 = 13^2 - 5^2 = 169 - 25 = 144 \\Rightarrow \\text{opp} = 12$.\nSo $\\sin(\\theta) = \\dfrac{12}{13}$.\n\nThis is the classic $5$-$12$-$13$ right triangle.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — repeats $\\cos$.\n* Choice C: \"applies the inverse operation\" — gives $\\tan(\\theta) = \\frac{12}{5}$.\n* Choice D: \"applies the inverse operation\" — gives $\\sec(\\theta) = \\frac{13}{5}$.\n\n**Test Day Takeaway:** Given one trig ratio, draw the right triangle, label two sides, use Pythagoras for the third. The $5$-$12$-$13$ triangle appears constantly.",
      skills: ["soh-cah-toa", "right-triangles"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "What is the value of $x$ if $(x - 4)(x + 6) = 0$ and $x > 0$?",
      correctAnswer: "4",
      explanation: "**SAT Pattern: Zero-Product Property**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~5s):** Each factor equals zero: $x - 4 = 0$ or $x + 6 = 0$, giving $x = 4$ or $x = -6$. Since $x > 0$, $x = 4$.\n\n**The Full Solution:**\nIf $(x - 4)(x + 6) = 0$, then by the zero-product property, at least one factor is zero:\n$x - 4 = 0 \\Rightarrow x = 4$, or\n$x + 6 = 0 \\Rightarrow x = -6$.\n\nThe constraint $x > 0$ rules out $-6$, so $x = 4$.\n\n**Common Mistakes to Avoid:**\n* Reporting $-6$ (forgetting the $x > 0$ constraint).\n* Multiplying $4 \\cdot 6 = 24$.\n* Reporting $-4$ or $6$ (sign errors when reading factors).\n\n**Test Day Takeaway:** Zero-product property: if $A \\cdot B = 0$, then $A = 0$ or $B = 0$. The roots of $(x - r)(x - s) = 0$ are $r$ and $s$ (note the SIGN flip from the factor).",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    // ============================================================
    // Q17-Q22: Hard ceiling for Easy variant (band 6-7, NO band 8)
    // ============================================================
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "If $\\dfrac{2}{3}x + 4 = 12$, what is the value of $x$?",
      choices: [
        // distractor: doesn't divide by 2/3
        { id: "A", text: "$8$" },
        { id: "B", text: "$12$" },
        // distractor: subtracts then multiplies wrong
        { id: "C", text: "$\\dfrac{16}{3}$" },
        // distractor: ignores the +4
        { id: "D", text: "$18$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Two-Step Linear Equation with Fraction Coefficient**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Subtract $4$: $\\dfrac{2}{3}x = 8$. Multiply both sides by $\\dfrac{3}{2}$: $x = 8 \\cdot \\dfrac{3}{2} = 12$.\n\n**The Full Solution:**\n$\\dfrac{2}{3}x + 4 = 12$\n$\\dfrac{2}{3}x = 8$\n$x = 8 \\cdot \\dfrac{3}{2} = 12$.\n\nVerification: $\\dfrac{2}{3}(12) + 4 = 8 + 4 = 12$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives $\\frac{2}{3}x = 8$ but solves as $x = 8$.\n* Choice C: \"applies the inverse operation\" — divides $8 / \\frac{3}{2} = \\frac{16}{3}$ instead of multiplying.\n* Choice D: \"wrong base\" — ignores the $+4$.\n\n**Test Day Takeaway:** To undo multiplication by a fraction $\\dfrac{a}{b}$, multiply by its reciprocal $\\dfrac{b}{a}$.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 18,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "If $f(x) = x^2 - 4x + 7$, what is the value of $f(-2)$?",
      choices: [
        // distractor: gives f(2) instead — gets 4 - 8 + 7 = 3
        { id: "A", text: "$3$" },
        { id: "B", text: "$19$" },
        // distractor: stops at 4 + 8 = 12 without adding 7
        { id: "C", text: "$12$" },
        // distractor: forgets the +7 and gets sign wrong on linear term
        { id: "D", text: "$-4$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $f(-2) = (-2)^2 - 4(-2) + 7 = 4 + 8 + 7 = 19$.\n\n**The Full Solution:**\nSubstitute $x = -2$ into $f(x) = x^2 - 4x + 7$:\n$f(-2) = (-2)^2 - 4(-2) + 7$\n$= 4 - (-8) + 7$\n$= 4 + 8 + 7$\n$= 19$.\n\nKey: $(-2)^2 = +4$ (squaring removes the sign), and $-4 \\cdot -2 = +8$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — substitutes $+2$ instead of $-2$, getting $4 - 8 + 7 = 3$.\n* Choice C: \"stops one step early\" — computes $4 + 8 = 12$ but forgets to add $7$.\n* Choice D: \"wrong sign\" — fails to handle the negative input properly.\n\n**Test Day Takeaway:** $(-a)^2 = a^2$ ($\\geq 0$). $-b \\cdot -a = +ba$. Track signs carefully when substituting negatives.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 19,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "If $(x + 5)(x - 3) = x^2 + bx + c$, what is the value of $b$?",
      correctAnswer: "2",
      explanation: "**SAT Pattern: Expanding a Product (FOIL)**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~10s):** Sum of roots' opposites: $5 + (-3) = 2$, so the middle coefficient is $b = 2$.\n\n**The Full Solution:**\nExpand using FOIL:\n$(x + 5)(x - 3) = x^2 - 3x + 5x - 15 = x^2 + 2x - 15$.\n\nMatching with $x^2 + bx + c$: $b = 2$ (and $c = -15$).\n\n**Common Mistakes to Avoid:**\n* Reporting $-15$ (the constant term $c$, not $b$).\n* Reporting $-2$ (sign error: $-3 + 5 = 2$, not $-2$).\n* Multiplying instead of adding: $5 \\cdot (-3) = -15$.\n\n**Test Day Takeaway:** $(x + p)(x + q) = x^2 + (p+q)x + pq$. The middle coefficient is the SUM; the constant is the PRODUCT.",
      skills: ["polynomial-expansion", "quadratic-equations"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "The line $\\ell$ has equation $y = \\dfrac{1}{2}x + 3$. Which of the following is the equation of a line parallel to $\\ell$ that passes through the point $(0, -1)$?",
      choices: [
        // distractor: uses perpendicular slope
        { id: "A", text: "$y = -2x - 1$" },
        { id: "B", text: "$y = \\dfrac{1}{2}x - 1$" },
        // distractor: keeps original line
        { id: "C", text: "$y = \\dfrac{1}{2}x + 3$" },
        // distractor: flips slope sign
        { id: "D", text: "$y = -\\dfrac{1}{2}x - 1$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Parallel lines share slope $= \\dfrac{1}{2}$. The point $(0, -1)$ gives $y$-intercept $= -1$. Equation: $y = \\dfrac{1}{2}x - 1$.\n\n**The Full Solution:**\nParallel lines have the SAME slope. Slope of new line $= \\dfrac{1}{2}$.\nUse $y = mx + b$ with $m = \\dfrac{1}{2}$. Since the line passes through $(0, -1)$, the $y$-intercept is $b = -1$.\n\nEquation: $y = \\dfrac{1}{2}x - 1$.\n\nVerification: at $(0, -1)$, $y = \\dfrac{1}{2}(0) - 1 = -1$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses the perpendicular slope ($-2$) instead of parallel ($\\frac{1}{2}$).\n* Choice C: \"stops one step early\" — keeps the original line (which doesn't pass through $(0, -1)$).\n* Choice D: \"wrong sign\" — flips the slope sign.\n\n**Test Day Takeaway:** Parallel: SAME slope. Perpendicular: NEGATIVE RECIPROCAL slope (flip and change sign).",
      skills: ["parallel-line-slope", "writing-parallel-equation"]
    },
    {
      id: 21,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The table shows the favorite beverage of $200$ students at a school.\n\n| | Coffee | Tea | Total |\n|---|---|---|---|\n| 9th grade | $30$ | $20$ | $50$ |\n| 10th grade | $40$ | $25$ | $65$ |\n| 11th grade | $35$ | $50$ | $85$ |\n| Total | $105$ | $95$ | $200$ |\n\nWhat fraction of all students who prefer tea are in 11th grade?",
      choices: [
        // distractor: 50/200 — uses overall total
        { id: "A", text: "$\\dfrac{50}{200}$" },
        // distractor: 50/85 — uses 11th-grade total
        { id: "B", text: "$\\dfrac{50}{85}$" },
        { id: "C", text: "$\\dfrac{50}{95}$" },
        // distractor: 95/200 — total tea over total
        { id: "D", text: "$\\dfrac{95}{200}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** \"Of all tea\" $\\Rightarrow$ denominator $=$ total tea $= 95$. 11th-grade tea $= 50$. Fraction $= \\dfrac{50}{95}$.\n\n**The Full Solution:**\n\"What fraction of all students who prefer tea\" restricts the sample space to TEA drinkers.\nTotal tea: $20 + 25 + 50 = 95$.\n11th-grade tea: $50$.\nFraction $= \\dfrac{50}{95} = \\dfrac{10}{19}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses the grand total ($200$) instead of just tea drinkers.\n* Choice B: \"applies the inverse operation\" — uses the 11th-grade total ($85$) instead of total tea.\n* Choice D: \"wrong base\" — gives the fraction of all students who prefer tea, not the conditional fraction.\n\n**Test Day Takeaway:** \"Of\" identifies the denominator. \"Of all tea drinkers\" $\\Rightarrow$ tea total in denominator. Read the conditional carefully.",
      skills: ["two-way-table", "conditional-probability"]
    },
    {
      id: 22,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "A right circular cylinder has radius $3$ and height $10$. What is the volume of the cylinder, in terms of $\\pi$? (Enter only the numerical coefficient of $\\pi$.)",
      correctAnswer: "90",
      explanation: "**SAT Pattern: Volume of a Cylinder**\n\n**The correct answer is $90$.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (3)^2 (10) = 90\\pi$. Coefficient $= 90$.\n\n**The Full Solution:**\nVolume of a cylinder: $V = \\pi r^2 h$.\n$V = \\pi (3)^2 (10) = \\pi \\cdot 9 \\cdot 10 = 90\\pi$.\n\nThe coefficient of $\\pi$ is $90$.\n\n**Common Mistakes to Avoid:**\n* Forgetting to square the radius: $\\pi \\cdot 3 \\cdot 10 = 30\\pi$.\n* Doubling instead of squaring: $\\pi \\cdot 6 \\cdot 10 = 60\\pi$.\n* Computing surface area instead of volume.\n\n**Test Day Takeaway:** Cylinder volume $= \\pi r^2 h$ (square the radius, multiply by height). The reference sheet gives this formula — use it.",
      skills: ["volume-cylinder", "volume", "geometry"]
    }
  ]
};

export default practiceTest1M2Easy;
