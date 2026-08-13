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
      explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Add $7$ to both sides: $x = 12 + 7 = 19$.\n\n**The Full Solution:**\nStep 1: The $7$ is subtracted from $x$, so undo it by adding $7$ to both sides.\nStep 2: $x - 7 + 7 = 12 + 7 \\Rightarrow x = 19$.\nStep 3: Check: $19 - 7 = 12$ $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): subtracted $7$ instead of adding it.\n* Choice C ($\\frac{12}{7}$): divided by $7$ — wrong inverse operation.\n* Choice D ($84$): multiplied by $7$ — wrong inverse operation.\n\n**Test Day Takeaway:** To isolate a variable, undo the operation on it: subtraction is undone by addition. Do the same thing to both sides.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "What is $30\\%$ of $50$?",
      correctAnswer: "15",
      explanation: "**SAT Pattern: Percent of a Number**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~5s):** $30\\%$ of $50$ is $0.30 \\cdot 50 = 15$.\n\n**The Full Solution:**\nStep 1: Convert the percent to a decimal: $30\\% = 0.30$.\nStep 2: Multiply by the number: $0.30 \\cdot 50 = 15$.\n\nA clean alternative: $\\frac{30}{100} \\cdot 50 = \\frac{3}{10} \\cdot 50 = 15$.\n\n**Common Mistakes:** Skipping the conversion and computing $30 \\cdot 50 = 1500$; or subtracting to get $50 - 30 = 20$.\n\n**Test Day Takeaway:** \"Percent of a number\" means (percent as a decimal) $\\times$ number. Shift the decimal two places left to convert.",
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
      explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Substitute $x = 5$: $h(5) = 3(5) + 2 = 17$.\n\n**The Full Solution:**\nStep 1: $h(x)$ means replace every $x$ in the rule with the input.\nStep 2: $h(5) = 3(5) + 2 = 15 + 2 = 17$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): added $3 + 5 + 2$ instead of multiplying $3$ by $5$.\n* Choice C ($15$): stopped at $3(5) = 15$ and forgot to add $2$.\n* Choice D ($2$): used $x = 0$, giving only the constant term.\n\n**Test Day Takeaway:** $h(a)$ means substitute $a$ for $x$ everywhere in the rule, then evaluate with order of operations.",
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
      explanation: "**SAT Pattern: Linear Cost Setup**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Total $= 4 \\cdot 8 + 3 \\cdot 15 = 32 + 45 = 77$ dollars.\n\n**The Full Solution:**\nStep 1: Paperbacks cost $4 \\cdot \\$8 = \\$32$.\nStep 2: Hardcovers cost $3 \\cdot \\$15 = \\$45$.\nStep 3: Add the subtotals: $\\$32 + \\$45 = \\$77$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$32$): the paperback subtotal only.\n* Choice B ($\\$45$): the hardcover subtotal only.\n* Choice D ($\\$84$): swapped the quantities ($3 \\cdot 8 + 4 \\cdot 15 = 84$).\n\n**Test Day Takeaway:** Total cost $=$ (price $\\times$ quantity) for each item, then sum. Pair each price with its own quantity.",
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
      explanation: "**SAT Pattern: Finding the x-intercept**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Set $y = 0$: $0 = -3x + 9 \\Rightarrow x = 3$, so the $x$-intercept is $(3, 0)$.\n\n**The Full Solution:**\nStep 1: The $x$-intercept is where the graph crosses the $x$-axis, so $y = 0$.\nStep 2: $0 = -3x + 9 \\Rightarrow 3x = 9 \\Rightarrow x = 3$.\nStep 3: The point is $(3, 0)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(0, 9)$): the $y$-intercept (set $x = 0$), not the $x$-intercept.\n* Choice C ($(-9, 0)$): used the constant $9$ with a flipped sign as the $x$-coordinate.\n* Choice D ($(-3, 0)$): used the slope $-3$ as the $x$-coordinate.\n\n**Test Day Takeaway:** For the $x$-intercept set $y = 0$ and solve for $x$; for the $y$-intercept set $x = 0$ and solve for $y$.",
      skills: ["x-intercept", "linear-functions"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "A right triangle has legs of length $5$ and $12$. What is the length of the hypotenuse?",
      correctAnswer: "13",
      explanation: "**SAT Pattern: Pythagorean Theorem (5-12-13 Family)**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~5s):** Legs $5$ and $12$ are the $5$-$12$-$13$ triple, so the hypotenuse is $13$.\n\n**The Full Solution:**\nStep 1: Apply $c^2 = a^2 + b^2$ with $a = 5$, $b = 12$.\nStep 2: $c^2 = 5^2 + 12^2 = 25 + 144 = 169$.\nStep 3: $c = \\sqrt{169} = 13$.\n\n**Common Mistakes:** Adding without squaring to get $5 + 12 = 17$; forgetting the square root and reporting $169$; or subtracting the squares, which applies only when the hypotenuse is already known.\n\n**Test Day Takeaway:** Memorize the common triples — $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$ — to skip the arithmetic.",
      skills: ["pythagorean-theorem", "right-triangles"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "What value of $x$ makes the proportion $\\dfrac{x}{6} = \\dfrac{15}{10}$ true?",
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
      explanation: "**SAT Pattern: Solving a Proportion**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Cross-multiply: $10x = 6 \\cdot 15 = 90 \\Rightarrow x = 9$.\n\n**The Full Solution:**\nStep 1: Cross-multiply $\\frac{x}{6} = \\frac{15}{10}$: $10 \\cdot x = 6 \\cdot 15$.\nStep 2: $10x = 90 \\Rightarrow x = 9$.\n\nA clean alternative: $\\frac{15}{10} = 1.5$, so $x = 1.5 \\cdot 6 = 9$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($25$): computed $\\frac{15 \\cdot 10}{6}$ — paired the wrong numbers.\n* Choice C ($4$): cross-multiplied in the wrong direction.\n* Choice D ($11$): added across instead of solving the proportion.\n\n**Test Day Takeaway:** To solve $\\frac{a}{b} = \\frac{c}{d}$, cross-multiply: $a \\cdot d = b \\cdot c$.",
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
      explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Slope $= \\frac{\\Delta y}{\\Delta x} = \\frac{5 - (-3)}{4 - 0} = \\frac{8}{4} = 2$.\n\n**The Full Solution:**\nStep 1: Apply $m = \\frac{y_2 - y_1}{x_2 - x_1}$ with $(0, -3)$ and $(4, 5)$.\nStep 2: $m = \\frac{5 - (-3)}{4 - 0} = \\frac{8}{4} = 2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{2}$): flipped the formula to $\\frac{\\Delta x}{\\Delta y}$.\n* Choice C ($-2$): mishandled the double negative when subtracting $-3$.\n* Choice D ($\\frac{1}{4}$): used the wrong rise over the run.\n\n**Test Day Takeaway:** Slope is rise over run, $\\frac{y_2 - y_1}{x_2 - x_1}$. Subtracting a negative $y$-value adds — watch the double negative.",
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
      explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Find two numbers with product $20$ and sum $-9$: $-4$ and $-5$. So $(x - 4)(x - 5) = 0$, giving $x = 4$ or $x = 5$.\n\n**The Full Solution:**\nStep 1: For $x^2 + bx + c$, find two numbers whose product is $c = 20$ and sum is $b = -9$.\nStep 2: Those numbers are $-4$ and $-5$ (since $(-4)(-5) = 20$ and $-4 + (-5) = -9$).\nStep 3: $x^2 - 9x + 20 = (x - 4)(x - 5) = 0 \\Rightarrow x = 4$ or $x = 5$.\nStep 4: Check: $4^2 - 9(4) + 20 = 16 - 36 + 20 = 0$ $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = -4$ or $x = -5$): used the factor numbers as roots without flipping their signs.\n* Choice C ($x = 9$ or $x = 20$): mistook the coefficients $b$ and $c$ for the roots.\n* Choice D ($x = 20$): used $c = 20$ directly as a single root.\n\n**Test Day Takeaway:** Factor $x^2 + bx + c$ by finding two numbers with product $c$ and sum $b$. The roots are the opposites of those numbers.",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    {
      id: 10,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The mean of four numbers is $20$. Three of the numbers are $14$, $22$, and $25$. What is the fourth number?",
      correctAnswer: "19",
      explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**The correct answer is $19$.**\n\n**The Fast Way (~10s):** Required total is $4 \\cdot 20 = 80$; the three given sum to $14 + 22 + 25 = 61$; the fourth is $80 - 61 = 19$.\n\n**The Full Solution:**\nStep 1: Sum $=$ mean $\\times$ count, so the four numbers must total $4 \\cdot 20 = 80$.\nStep 2: The three given numbers sum to $14 + 22 + 25 = 61$.\nStep 3: The missing number is $80 - 61 = 19$.\nStep 4: Check: $\\frac{14 + 22 + 25 + 19}{4} = \\frac{80}{4} = 20$ $\\checkmark$\n\n**Common Mistakes:** Averaging just the three given numbers ($\\frac{61}{3} \\approx 20.33$); or reporting the total $80$ instead of the missing value.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ total sum. For a missing value, subtract the known sum from the required total.",
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
      explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Both equal $y$, so set them equal: $3x - 1 = x + 5 \\Rightarrow x = 3$, then $y = 3 + 5 = 8$. Solution $(3, 8)$.\n\n**The Full Solution:**\nStep 1: Since both equations are solved for $y$, set the right sides equal: $3x - 1 = x + 5$.\nStep 2: $2x = 6 \\Rightarrow x = 3$.\nStep 3: Back-substitute: $y = 3 + 5 = 8$ (check: $3(3) - 1 = 8$ $\\checkmark$). Solution $(3, 8)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(8, 3)$): swapped the $x$- and $y$-coordinates.\n* Choice C ($(2, 5)$): an arithmetic slip giving the wrong $x$.\n* Choice D ($(0, 5)$): used $x = 0$ instead of solving for $x$.\n\n**Test Day Takeaway:** When both equations equal $y$, set the right sides equal, solve for $x$, then substitute back for $y$.",
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
      explanation: "**SAT Pattern: Basic Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Total marbles $= 3 + 5 + 7 = 15$, so $P(\\text{red}) = \\frac{3}{15}$.\n\n**The Full Solution:**\nStep 1: Probability $= \\frac{\\text{favorable}}{\\text{total}}$.\nStep 2: Favorable (red) $= 3$; total $= 3 + 5 + 7 = 15$.\nStep 3: $P(\\text{red}) = \\frac{3}{15}$ (which reduces to $\\frac{1}{5}$).\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{5}{15}$): used the blue count in the numerator.\n* Choice C ($\\frac{7}{15}$): used the green count in the numerator.\n* Choice D ($\\frac{3}{12}$): divided by the non-red marbles ($5 + 7$) instead of the total.\n\n**Test Day Takeaway:** The probability denominator is the total number of outcomes — include the favorable category in that total.",
      skills: ["probability-basics", "statistics"]
    },
    {
      id: 13,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A rectangular garden has length $12$ feet and width $8$ feet. What is the area of the garden, in square feet?",
      correctAnswer: "96",
      explanation: "**SAT Pattern: Rectangle Area**\n\n**The correct answer is $96$.**\n\n**The Fast Way (~5s):** Area $= \\ell \\cdot w = 12 \\cdot 8 = 96$ square feet.\n\n**The Full Solution:**\nStep 1: A rectangle's area is length times width: $A = \\ell \\cdot w$.\nStep 2: Substitute the given dimensions: $A = 12 \\cdot 8 = 96$ square feet.\n\n**Common Mistakes:** Computing the perimeter instead, $2(12) + 2(8) = 40$; adding the dimensions, $12 + 8 = 20$.\n\n**Test Day Takeaway:** Rectangle area $= \\ell \\cdot w$; perimeter $= 2\\ell + 2w$. Read which one the question asks for.",
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
      explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** \"Triples every hour\" means multiply by $3$ each hour, so after $h$ hours the count is $200 \\cdot 3^{h}$ — choice B.\n\n**The Full Solution:**\nStep 1: An exponential model has the form $P = P_0 \\cdot r^{t}$, with $P_0$ the starting amount and $r$ the per-period multiplier.\nStep 2: Here $P_0 = 200$ and $r = 3$ (tripling), so $P = 200 \\cdot 3^{h}$.\nStep 3: Check: $h = 0 \\Rightarrow 200$; $h = 1 \\Rightarrow 600$; $h = 2 \\Rightarrow 1800$. Each step triples. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($200 + 3h$): linear growth — adds $3$ per hour instead of multiplying.\n* Choice C ($3 \\cdot 200^{h}$): swaps the roles of initial value and growth factor.\n* Choice D ($600 \\cdot h$): triples once, then grows linearly.\n\n**Test Day Takeaway:** \"Triples every period\" $\\Rightarrow$ multiply by $3^{t}$. The initial value sits out front; the growth factor is the base of the exponent.",
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
      explanation: "**SAT Pattern: SOH-CAH-TOA in a 5-12-13 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $\\cos(\\theta) = \\dfrac{\\text{adj}}{\\text{hyp}} = \\dfrac{5}{13}$, so adjacent $= 5$ and hypotenuse $= 13$. The opposite side is $12$ (the $5$-$12$-$13$ triangle), giving $\\sin(\\theta) = \\dfrac{12}{13}$ — choice B.\n\n**The Full Solution:**\nStep 1: In a right triangle, $\\cos(\\theta) = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}}$ and $\\sin(\\theta) = \\dfrac{\\text{opposite}}{\\text{hypotenuse}}$.\nStep 2: From $\\cos(\\theta) = \\dfrac{5}{13}$, the adjacent side is $5$ and the hypotenuse is $13$.\nStep 3: Find the opposite side by the Pythagorean theorem: $\\text{opp}^2 = 13^2 - 5^2 = 169 - 25 = 144$, so $\\text{opp} = 12$.\nStep 4: Therefore $\\sin(\\theta) = \\dfrac{12}{13}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{5}{13}$): just repeats $\\cos(\\theta)$.\n* Choice C ($\\dfrac{12}{5}$): that is $\\tan(\\theta) = \\dfrac{\\text{opp}}{\\text{adj}}$, not sine.\n* Choice D ($\\dfrac{13}{5}$): that is $\\sec(\\theta)$, the reciprocal of cosine.\n\n**Test Day Takeaway:** Given one trig ratio, sketch the right triangle, label two sides, and use the Pythagorean theorem for the third. The $5$-$12$-$13$ triangle shows up constantly.",
      skills: ["soh-cah-toa", "right-triangles"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "What is the value of $x$ if $(x - 4)(x + 6) = 0$ and $x > 0$?",
      correctAnswer: "4",
      explanation: "**SAT Pattern: Zero-Product Property**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~5s):** Set each factor to zero: $x = 4$ or $x = -6$. The condition $x > 0$ keeps $x = 4$.\n\n**The Full Solution:**\nStep 1: By the zero-product property, $(x - 4)(x + 6) = 0$ means $x - 4 = 0$ or $x + 6 = 0$.\nStep 2: These give $x = 4$ and $x = -6$.\nStep 3: The constraint $x > 0$ eliminates $-6$, so $x = 4$.\n\n**Common Mistakes:** Reporting $-6$ and ignoring $x > 0$; reading the factors with flipped signs and reporting $-4$ or $6$; multiplying $4 \\cdot 6 = 24$.\n\n**Test Day Takeaway:** If $A \\cdot B = 0$, then $A = 0$ or $B = 0$. The roots of $(x - r)(x - s) = 0$ are $r$ and $s$ — note the sign flips from the factors.",
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
      question: "What value of $x$ satisfies the equation $\\dfrac{x}{2} + \\dfrac{x}{3} = 10$?",
      choices: [
        // distractor: solves x/2 = 10 alone, ignoring the x/3 term
        { id: "A", text: "$20$" },
        { id: "B", text: "$12$" },
        // distractor: adds numerators and denominators to get 2x/5
        { id: "C", text: "$25$" },
        // distractor: clears denominators but stops at 5x = 60
        { id: "D", text: "$60$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Linear Equation with Fractional Terms**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Multiply every term by $6$: $3x + 2x = 60 \\Rightarrow 5x = 60 \\Rightarrow x = 12$.\n\n**The Full Solution:**\nStep 1: The denominators are $2$ and $3$, so multiply both sides of $\\dfrac{x}{2} + \\dfrac{x}{3} = 10$ by the common denominator $6$.\nStep 2: $6 \\cdot \\dfrac{x}{2} + 6 \\cdot \\dfrac{x}{3} = 6 \\cdot 10 \\Rightarrow 3x + 2x = 60$.\nStep 3: Combine like terms: $5x = 60 \\Rightarrow x = 12$.\nStep 4: Check: $\\dfrac{12}{2} + \\dfrac{12}{3} = 6 + 4 = 10$ $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): solves $\\dfrac{x}{2} = 10$ alone and ignores the $\\dfrac{x}{3}$ term.\n* Choice C ($25$): adds numerators and denominators, treating the left side as $\\dfrac{2x}{5}$.\n* Choice D ($60$): clears the denominators correctly but stops at $5x = 60$ without dividing.\n\n**Test Day Takeaway:** To clear fractions from an equation, multiply every term by the least common denominator, then combine like terms.",
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
      explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $f(-2) = (-2)^2 - 4(-2) + 7 = 4 + 8 + 7 = 19$ — choice B.\n\n**The Full Solution:**\nStep 1: Substitute $x = -2$ into $f(x) = x^2 - 4x + 7$: $f(-2) = (-2)^2 - 4(-2) + 7$.\nStep 2: Handle the signs: $(-2)^2 = 4$ and $-4(-2) = +8$.\nStep 3: Add: $4 + 8 + 7 = 19$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): plugs in $+2$ instead of $-2$, giving $4 - 8 + 7 = 3$.\n* Choice C ($12$): computes $4 + 8 = 12$ but drops the $+7$.\n* Choice D ($-4$): mishandles the negative input, losing the sign flips.\n\n**Test Day Takeaway:** $(-a)^2 = a^2 \\ge 0$, and a negative times a negative is positive. Track every sign when substituting a negative value.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 19,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "If $(x + 5)(x - 3) = x^2 + bx + c$, what is the value of $b$?",
      correctAnswer: "2",
      explanation: "**SAT Pattern: Expanding a Product (FOIL)**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~10s):** The middle coefficient is the sum of the constants: $5 + (-3) = 2$, so $b = 2$.\n\n**The Full Solution:**\nStep 1: Expand $(x + 5)(x - 3)$ with FOIL: $x^2 - 3x + 5x - 15$.\nStep 2: Combine the middle terms: $x^2 + 2x - 15$.\nStep 3: Match to $x^2 + bx + c$: $b = 2$ (and $c = -15$).\n\n**Common Mistakes:** Reporting $-15$ (that is the constant $c$, not $b$); reporting $-2$ from a sign slip ($-3 + 5 = 2$, not $-2$); multiplying instead of adding, $5 \\cdot (-3) = -15$.\n\n**Test Day Takeaway:** $(x + p)(x + q) = x^2 + (p + q)x + pq$. The middle coefficient is the sum of $p$ and $q$; the constant is their product.",
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
      explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Parallel means the slope stays $\\dfrac{1}{2}$. The point $(0, -1)$ is the $y$-intercept, so $b = -1$ and the line is $y = \\dfrac{1}{2}x - 1$ — choice B.\n\n**The Full Solution:**\nStep 1: Parallel lines share the same slope, so the new line has slope $\\dfrac{1}{2}$.\nStep 2: Write $y = \\dfrac{1}{2}x + b$. The line passes through $(0, -1)$, and $x = 0$ at a $y$-intercept, so $b = -1$.\nStep 3: The equation is $y = \\dfrac{1}{2}x - 1$. Check: at $x = 0$, $y = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -2x - 1$): uses the perpendicular slope $-2$ instead of the parallel slope $\\dfrac{1}{2}$.\n* Choice C ($y = \\dfrac{1}{2}x + 3$): keeps the original line, which does not pass through $(0, -1)$.\n* Choice D ($y = -\\dfrac{1}{2}x - 1$): flips the sign of the slope.\n\n**Test Day Takeaway:** Parallel lines have the same slope; perpendicular lines have negative-reciprocal slopes (flip and change sign).",
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
      explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** \"Of all students who prefer tea\" sets the denominator to the tea total, $95$. The 11th-grade tea count is $50$, so the fraction is $\\dfrac{50}{95}$ — choice C.\n\n**The Full Solution:**\nStep 1: The phrase \"of all students who prefer tea\" restricts the group to tea drinkers only.\nStep 2: Total tea drinkers: $20 + 25 + 50 = 95$ (the Tea column total).\nStep 3: Of those, the 11th graders number $50$, so the fraction is $\\dfrac{50}{95}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{50}{200}$): uses the grand total $200$ instead of the tea total.\n* Choice B ($\\dfrac{50}{85}$): uses the 11th-grade row total $85$ instead of the tea total.\n* Choice D ($\\dfrac{95}{200}$): gives the share of all students who prefer tea, not the conditional fraction.\n\n**Test Day Takeaway:** The word \"of\" names the denominator. \"Of all tea drinkers\" puts the tea total on the bottom.",
      skills: ["two-way-table", "conditional-probability"]
    },
    {
      id: 22,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "A right circular cylinder has radius $3$ and height $10$. What is the volume of the cylinder, in terms of $\\pi$? (Enter only the numerical coefficient of $\\pi$.)",
      correctAnswer: "90",
      explanation: "**SAT Pattern: Volume of a Cylinder**\n\n**The correct answer is $90$.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (3)^2 (10) = 90\\pi$, so the coefficient of $\\pi$ is $90$.\n\n**The Full Solution:**\nStep 1: The volume of a right circular cylinder is $V = \\pi r^2 h$.\nStep 2: Substitute $r = 3$ and $h = 10$: $V = \\pi (3)^2 (10) = \\pi \\cdot 9 \\cdot 10 = 90\\pi$.\nStep 3: The numerical coefficient of $\\pi$ is $90$.\n\n**Common Mistakes:** Forgetting to square the radius, $\\pi \\cdot 3 \\cdot 10 = 30\\pi$; doubling instead of squaring, $\\pi \\cdot 6 \\cdot 10 = 60\\pi$.\n\n**Test Day Takeaway:** Cylinder volume $= \\pi r^2 h$ — square the radius, then multiply by the height. This formula is on the reference sheet.",
      skills: ["volume-cylinder", "volume", "geometry"]
    }
  ]
};

export default practiceTest1M2Easy;
