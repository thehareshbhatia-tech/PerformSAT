// Practice Test 3 — Math Module 2 Easy variant (22 questions)
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Domain mix: 7 Algebra / 6 Advanced Math / 5 Problem-Solving / 4 Geometry & Trig.

export const practiceTest3M2Easy = {
  id: "module-2-easy",
  title: "Module 2 (Easy)",
  variant: "easy",
  timeLimit: 35,
  questions: [
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
        // distractor: stops one step early — leaves as 12
        { id: "C", text: "$12$" },
        // distractor: applies the inverse operation — divides
        { id: "D", text: "$\\dfrac{12}{7}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~3s):** The $-7$ is subtracted from $x$, so add $7$ to both sides: $x = 12 + 7 = 19$.\n\n**The Full Solution:**\nStep 1: Start from $x - 7 = 12$. To isolate $x$, undo the subtraction by adding $7$ to both sides.\nStep 2: $x = 12 + 7 = 19$.\nStep 3: Check: $19 - 7 = 12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): subtracted $7$ instead of adding, $12 - 7 = 5$.\n* Choice C ($12$): copied the right-hand side without undoing the $-7$.\n* Choice D ($\\frac{12}{7}$): divided by $7$ instead of adding.\n\n**Test Day Takeaway:** To isolate a variable, apply the inverse operation to both sides. Subtraction is undone by addition.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "What is the perimeter, in inches, of a square with side length $7$ inches?",
      correctAnswer: "28",
      explanation: "**SAT Pattern: Square Perimeter**\n\n**The correct answer is $28$.**\n\n**The Fast Way (~3s):** Perimeter $= 4s = 4 \\cdot 7 = 28$ inches.\n\n**The Full Solution:**\nStep 1: A square has $4$ equal sides, so its perimeter is $4s$.\nStep 2: With $s = 7$: $P = 4 \\cdot 7 = 28$ inches.\n\n**Common Mistakes:** Computing area instead, $7^2 = 49$; adding only two sides, $7 + 7 = 14$.\n\n**Test Day Takeaway:** Square perimeter is $4s$; square area is $s^2$. Read which one the question asks for.",
      skills: ["perimeter", "geometry"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "If $g(x) = 3x + 8$, what is the value of $g(2)$?",
      choices: [
        // distractor: uses 2 + 3 + 8 = 13 (wrong operation)
        { id: "A", text: "$13$" },
        { id: "B", text: "$14$" },
        // distractor: stops one step early — gives 3(2) without adding
        { id: "C", text: "$6$" },
        // distractor: subtracts instead of adds
        { id: "D", text: "$-2$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Substitute $x = 2$: $g(2) = 3(2) + 8 = 14$.\n\n**The Full Solution:**\nStep 1: $g(x) = 3x + 8$ means replace every $x$ with the input value.\nStep 2: $g(2) = 3(2) + 8$.\nStep 3: Multiply first, then add: $6 + 8 = 14$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($13$): added everything, $2 + 3 + 8 = 13$, instead of multiplying first.\n* Choice C ($6$): stopped at $3(2) = 6$ and forgot the $+8$.\n* Choice D ($-2$): subtracted $8$ instead of adding, $6 - 8 = -2$.\n\n**Test Day Takeaway:** $g(a)$ means substitute $a$ for $x$ everywhere, then follow order of operations: multiply before you add.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "A bag of trail mix contains nuts and dried fruit in a $5 : 3$ ratio by weight. If the bag contains $24$ ounces of dried fruit, how many ounces of nuts does it contain?",
      choices: [
        // distractor: subtracts the parts of the ratio
        { id: "A", text: "$16$" },
        { id: "B", text: "$40$" },
        // distractor: adds the ratio parts
        { id: "C", text: "$8$" },
        // distractor: flips the ratio
        { id: "D", text: "$\\dfrac{72}{5}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Proportion / Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $24$ ounces of fruit is $8$ groups of $3$; each group carries $5$ ounces of nuts, so $8 \\cdot 5 = 40$.\n\n**The Full Solution:**\nStep 1: Match categories: $\\dfrac{\\text{nuts}}{\\text{fruit}} = \\dfrac{5}{3} = \\dfrac{n}{24}$.\nStep 2: Cross-multiply: $3n = 5 \\cdot 24 = 120$.\nStep 3: Divide: $n = 40$ ounces.\n\n**Why the wrong answers are tempting:**\n* Choice A ($16$): computed $24 - (5 + 3) = 16$, mixing units with ratio parts.\n* Choice C ($8$): added the ratio parts, $5 + 3 = 8$.\n* Choice D ($\\frac{72}{5}$): flipped the ratio, solving $\\dfrac{3}{5} = \\dfrac{n}{24}$.\n\n**Test Day Takeaway:** Set up proportions with matching categories aligned, then cross-multiply. Nuts is the larger part here, so the answer must exceed $24$.",
      skills: ["ratios", "proportions"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "What is the slope of the line whose equation is $y = -4x + 9$?",
      choices: [
        // distractor: gives the y-intercept
        { id: "A", text: "$9$" },
        { id: "B", text: "$-4$" },
        // distractor: drops the negative
        { id: "C", text: "$4$" },
        // distractor: gives x-intercept (where y = 0)
        { id: "D", text: "$\\dfrac{9}{4}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~3s):** In $y = mx + b$, the slope is the coefficient of $x$, so $m = -4$.\n\n**The Full Solution:**\nStep 1: $y = -4x + 9$ is already in slope-intercept form $y = mx + b$.\nStep 2: Read off $m = -4$ (the coefficient of $x$, with its sign) and $b = 9$ (the $y$-intercept).\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): reported the $y$-intercept $b$ instead of the slope.\n* Choice C ($4$): dropped the negative sign.\n* Choice D ($\\frac{9}{4}$): computed the $x$-intercept by setting $y = 0$.\n\n**Test Day Takeaway:** In $y = mx + b$, the slope is the number multiplying $x$, sign included. The constant term is the $y$-intercept.",
      skills: ["slope-intercept-form", "linear-functions"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "A right triangle has legs of length $9$ and $12$. What is the length of the hypotenuse?",
      correctAnswer: "15",
      explanation: "**SAT Pattern: Pythagorean Theorem (3-4-5 Family)**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~5s):** $9$-$12$-$15$ is $3 \\times$ the $3$-$4$-$5$ triple, so the hypotenuse is $15$.\n\n**The Full Solution:**\nStep 1: Use $c^2 = a^2 + b^2$ with legs $9$ and $12$.\nStep 2: $c^2 = 9^2 + 12^2 = 81 + 144 = 225$.\nStep 3: $c = \\sqrt{225} = 15$.\n\n**Common Mistakes:** Adding without squaring, $9 + 12 = 21$; forgetting the square root and reporting $225$.\n\n**Test Day Takeaway:** Memorize the common triples $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$ and their multiples. $9$-$12$-$15$ is just $3 \\times 3$-$4$-$5$.",
      skills: ["pythagorean-theorem", "right-triangles"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The mean of four numbers is $11$. Three of the numbers are $8$, $10$, and $14$. What is the fourth number?",
      choices: [
        // distractor: gives the total sum required
        { id: "A", text: "$44$" },
        // distractor: averages the three given
        { id: "B", text: "$\\dfrac{32}{3}$" },
        { id: "C", text: "$12$" },
        // distractor: subtracts the mean from the sum of three
        { id: "D", text: "$21$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The four numbers must total $4 \\cdot 11 = 44$. The three given sum to $32$, so the fourth is $44 - 32 = 12$.\n\n**The Full Solution:**\nStep 1: Mean $= \\dfrac{\\text{sum}}{\\text{count}}$, so the total sum is mean $\\times$ count $= 4 \\cdot 11 = 44$.\nStep 2: $8 + 10 + 14 = 32$.\nStep 3: The missing number is $44 - 32 = 12$.\nStep 4: Check: $\\dfrac{8 + 10 + 14 + 12}{4} = \\dfrac{44}{4} = 11$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($44$): stopped at the required total sum instead of the missing value.\n* Choice B ($\\frac{32}{3}$): averaged only the three given numbers.\n* Choice D ($21$): subtracted the mean from the known sum, $32 - 11 = 21$.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ total sum. To find a missing value, subtract the known sum from that total.",
      skills: ["calculate-mean", "statistics"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What are the solutions to the equation $x^2 + 7x + 10 = 0$?",
      choices: [
        // distractor: signs flipped — uses 2 and 5 instead
        { id: "A", text: "$x = 2 \\text{ or } x = 5$" },
        { id: "B", text: "$x = -2 \\text{ or } x = -5$" },
        // distractor: stops at one root only
        { id: "C", text: "$x = -10$" },
        // distractor: confuses sum and product (7, 10)
        { id: "D", text: "$x = -7 \\text{ or } x = -10$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Find two numbers with product $10$ and sum $7$: $2$ and $5$. So $(x + 2)(x + 5) = 0$, giving $x = -2$ or $x = -5$.\n\n**The Full Solution:**\nStep 1: To factor $x^2 + bx + c$, find two numbers whose product is $c = 10$ and whose sum is $b = 7$. Those are $2$ and $5$.\nStep 2: $x^2 + 7x + 10 = (x + 2)(x + 5) = 0$.\nStep 3: Set each factor to $0$: $x = -2$ or $x = -5$.\nStep 4: Check: $(-2)^2 + 7(-2) + 10 = 4 - 14 + 10 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = 2$ or $x = 5$): kept the factor numbers as the roots; the roots are their opposites.\n* Choice C ($x = -10$): treated $c = 10$ as a single root.\n* Choice D ($x = -7$ or $x = -10$): used the sum and product themselves as roots.\n\n**Test Day Takeaway:** Factor $x^2 + bx + c$ into numbers with product $c$ and sum $b$; the roots are the negatives of those numbers.",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    {
      id: 9,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A jacket originally cost $\\$80$ and is now on sale for $\\$60$. What is the percent decrease in price?",
      correctAnswer: "25",
      explanation: "**SAT Pattern: Percent Change / Decrease**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~10s):** Drop is $80 - 60 = 20$; over the original $80$ that is $\\dfrac{20}{80} = 25\\%$.\n\n**The Full Solution:**\nStep 1: Percent decrease $= \\dfrac{\\text{old} - \\text{new}}{\\text{old}} \\times 100\\%$.\nStep 2: With old $= 80$, new $= 60$: $\\dfrac{80 - 60}{80} \\times 100 = \\dfrac{20}{80} \\times 100$.\nStep 3: $0.25 \\times 100 = 25\\%$.\n\n**Common Mistakes:** Dividing by the new price, $\\frac{20}{60} \\approx 33.3\\%$; reporting the dollar drop $20$ instead of the percent.\n\n**Test Day Takeaway:** Percent change always divides by the ORIGINAL value: $\\dfrac{\\text{change}}{\\text{original}} \\times 100\\%$.",
      skills: ["percent-change", "percents"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the slope of the line passing through the points $(-1, 4)$ and $(3, -8)$?",
      choices: [
        // distractor: drops the negative
        { id: "A", text: "$3$" },
        { id: "B", text: "$-3$" },
        // distractor: switches Δx and Δy
        { id: "C", text: "$-\\dfrac{1}{3}$" },
        // distractor: subtracts in wrong direction
        { id: "D", text: "$\\dfrac{1}{3}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Slope $= \\dfrac{\\Delta y}{\\Delta x} = \\dfrac{-8 - 4}{3 - (-1)} = \\dfrac{-12}{4} = -3$.\n\n**The Full Solution:**\nStep 1: Use $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$ with $(x_1, y_1) = (-1, 4)$ and $(x_2, y_2) = (3, -8)$.\nStep 2: Numerator: $-8 - 4 = -12$. Denominator: $3 - (-1) = 4$.\nStep 3: $m = \\dfrac{-12}{4} = -3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): dropped the negative sign.\n* Choice C ($-\\frac{1}{3}$): flipped the formula, using $\\frac{\\Delta x}{\\Delta y}$.\n* Choice D ($\\frac{1}{3}$): both flipped and dropped the sign.\n\n**Test Day Takeaway:** Slope is rise over run, $\\dfrac{y_2 - y_1}{x_2 - x_1}$. Subtract the points in the same order top and bottom.",
      skills: ["slope-from-points", "slope"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A spinner has $8$ equal sectors numbered $1$ through $8$. What is the probability that a single spin lands on a number greater than $5$?",
      choices: [
        // distractor: uses 5/8 instead of 3/8
        { id: "A", text: "$\\dfrac{5}{8}$" },
        { id: "B", text: "$\\dfrac{3}{8}$" },
        // distractor: uses 6/8 (≥ 5 instead of > 5)
        { id: "C", text: "$\\dfrac{4}{8}$" },
        // distractor: gives just the count of favorable outcomes
        { id: "D", text: "$3$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Basic Probability with Constraint**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Numbers greater than $5$ are $6, 7, 8$ — three of the eight sectors, so $P = \\dfrac{3}{8}$.\n\n**The Full Solution:**\nStep 1: Probability $= \\dfrac{\\text{favorable}}{\\text{total}}$.\nStep 2: Favorable outcomes are strictly greater than $5$: $\\{6, 7, 8\\}$, a count of $3$.\nStep 3: Total sectors $= 8$, so $P = \\dfrac{3}{8}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{5}{8}$): counted the numbers $5$ or less instead.\n* Choice C ($\\frac{4}{8}$): included $5$ by reading \"$\\ge 5$\" rather than \"$> 5$\".\n* Choice D ($3$): gave the count of favorable outcomes, not the probability fraction.\n\n**Test Day Takeaway:** Watch the inequality: \"greater than\" excludes the boundary. Probability is favorable over total, a fraction, not a count.",
      skills: ["probability-basics", "statistics"]
    },
    {
      id: 12,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The volume of a cube is $125$ cubic centimeters. What is the side length of the cube, in centimeters?",
      correctAnswer: "5",
      explanation: "**SAT Pattern: Volume of a Cube — Reverse**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~5s):** $V = s^3$, so $s = \\sqrt[3]{125} = 5$.\n\n**The Full Solution:**\nStep 1: A cube's volume is $V = s^3$, so $s^3 = 125$.\nStep 2: Take the cube root: $s = \\sqrt[3]{125} = 5$.\nStep 3: Check: $5^3 = 125$. $\\checkmark$\n\n**Common Mistakes:** Taking a square root, $\\sqrt{125} \\approx 11.18$ (that undoes an area, not a volume); dividing by $3$, $\\frac{125}{3} \\approx 41.67$.\n\n**Test Day Takeaway:** Cube volume is $s^3$. To recover the side from the volume, take the CUBE root, not the square root.",
      skills: ["volume-cube", "volume"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the solution to the system of equations $x + y = 11$ and $x - y = 3$?",
      choices: [
        // distractor: swaps x and y
        { id: "A", text: "$(4, 7)$" },
        { id: "B", text: "$(7, 4)$" },
        // distractor: uses sum and difference directly
        { id: "C", text: "$(11, 3)$" },
        // distractor: averages oddly
        { id: "D", text: "$(8, 3)$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Linear System by Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The $y$ terms are $+y$ and $-y$, so add the equations: $2x = 14 \\Rightarrow x = 7$. Then $y = 11 - 7 = 4$, giving $(7, 4)$.\n\n**The Full Solution:**\nStep 1: Add the equations to cancel $y$: $(x + y) + (x - y) = 11 + 3 \\Rightarrow 2x = 14 \\Rightarrow x = 7$.\nStep 2: Back-substitute into $x + y = 11$: $7 + y = 11 \\Rightarrow y = 4$.\nStep 3: Check the second equation: $7 - 4 = 3$. $\\checkmark$ The solution is $(7, 4)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(4, 7)$): swaps the $x$ and $y$ values.\n* Choice C ($(11, 3)$): copies the right-hand sides as coordinates instead of solving.\n* Choice D ($(8, 3)$): arithmetic slip that never actually solves the system.\n\n**Test Day Takeaway:** When one equation has $+y$ and the other has $-y$, add them to eliminate $y$ in one step; then back-substitute to finish.",
      skills: ["elimination-method", "systems-of-equations"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "An investment of $\\$2{,}000$ earns interest such that the value triples every $10$ years. Which expression gives the value of the investment after $t$ years?",
      choices: [
        // distractor: linear instead of exponential
        { id: "A", text: "$2{,}000 + 3t$" },
        { id: "B", text: "$2{,}000 \\cdot 3^{\\frac{t}{10}}$" },
        // distractor: confuses base and exponent
        { id: "C", text: "$2{,}000 \\cdot t^3$" },
        // distractor: triples once and adds linearly
        { id: "D", text: "$6{,}000 + 200t$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Exponential Growth Model with Period**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Tripling means multiply by $3$ once per $10$-year period, and $t$ years is $\\frac{t}{10}$ periods: $2{,}000 \\cdot 3^{\\frac{t}{10}}$.\n\n**The Full Solution:**\nStep 1: An exponential model has the form $V(t) = V_0 \\cdot r^{\\frac{t}{d}}$, where $V_0$ is the start, $r$ is the per-period factor, and $d$ is the period length.\nStep 2: Here $V_0 = 2{,}000$, $r = 3$ (tripling), and $d = 10$ years, so $V(t) = 2{,}000 \\cdot 3^{\\frac{t}{10}}$.\nStep 3: Check: $t = 0 \\Rightarrow 2{,}000$; $t = 10 \\Rightarrow 2{,}000 \\cdot 3 = 6{,}000$; $t = 20 \\Rightarrow 18{,}000$. Tripling each decade. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2{,}000 + 3t$): models linear growth of $\\$3$ per year, not multiplicative tripling.\n* Choice C ($2{,}000 \\cdot t^3$): swaps the base and exponent, raising time to a power.\n* Choice D ($6{,}000 + 200t$): triples once up front, then adds linearly.\n\n**Test Day Takeaway:** \"Triples every $d$ years\" means multiply by $3^{\\frac{t}{d}}$: the initial value sits out front, the growth factor is the base, and the exponent is $\\frac{t}{\\text{period}}$.",
      skills: ["exponential-growth-decay", "exponent-laws"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In a right triangle, an acute angle $\\theta$ satisfies $\\cos(\\theta) = \\dfrac{8}{17}$. What is the value of $\\sin(\\theta)$?",
      choices: [
        // distractor: gives the same fraction
        { id: "A", text: "$\\dfrac{8}{17}$" },
        { id: "B", text: "$\\dfrac{15}{17}$" },
        // distractor: gives tan instead of sin
        { id: "C", text: "$\\dfrac{15}{8}$" },
        // distractor: reciprocal
        { id: "D", text: "$\\dfrac{17}{8}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: SOH-CAH-TOA in an 8-15-17 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $\\cos(\\theta) = \\frac{\\text{adj}}{\\text{hyp}} = \\frac{8}{17}$ means adjacent $= 8$, hypotenuse $= 17$, so the opposite is $\\sqrt{17^2 - 8^2} = \\sqrt{225} = 15$ and $\\sin(\\theta) = \\frac{15}{17}$.\n\n**The Full Solution:**\nStep 1: From $\\cos(\\theta) = \\frac{8}{17}$, label adjacent $= 8$ and hypotenuse $= 17$.\nStep 2: Find the opposite side with the Pythagorean theorem: $\\text{opp}^2 = 17^2 - 8^2 = 289 - 64 = 225 \\Rightarrow \\text{opp} = 15$.\nStep 3: $\\sin(\\theta) = \\frac{\\text{opp}}{\\text{hyp}} = \\frac{15}{17}$. This is the $8$-$15$-$17$ right triangle.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{8}{17}$): just repeats $\\cos(\\theta)$.\n* Choice C ($\\frac{15}{8}$): that is $\\tan(\\theta) = \\frac{\\text{opp}}{\\text{adj}}$, not the sine.\n* Choice D ($\\frac{17}{8}$): that is $\\sec(\\theta)$, the reciprocal of cosine.\n\n**Test Day Takeaway:** Given one trig ratio, sketch the right triangle, label two sides, and use the Pythagorean theorem for the third. Memorize the triples $3$-$4$-$5$, $5$-$12$-$13$, and $8$-$15$-$17$.",
      skills: ["soh-cah-toa", "right-triangles"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A factory produces $360$ widgets every $4$ hours. At this rate, how many widgets does the factory produce in $6$ hours?",
      correctAnswer: "540",
      explanation: "**SAT Pattern: Unit Rate / Direct Proportion**\n\n**The correct answer is $540$.**\n\n**The Fast Way (~10s):** Rate $= \\frac{360}{4} = 90$ widgets per hour, so in $6$ hours the factory makes $90 \\cdot 6 = 540$.\n\n**The Full Solution:**\nStep 1: Find the unit rate: $\\frac{360 \\text{ widgets}}{4 \\text{ hr}} = 90$ widgets per hour.\nStep 2: Multiply by the new time: $90 \\cdot 6 = 540$ widgets.\nStep 3 (alternative): Set up a proportion $\\frac{360}{4} = \\frac{w}{6}$, so $w = \\frac{360 \\cdot 6}{4} = 540$.\n\n**Common Mistakes:** Adding instead of scaling ($360 + 6 = 366$); using the time difference as a multiplier ($360 \\cdot 2 = 720$ from $6 - 4 = 2$); or dividing ($\\frac{360}{6} = 60$).\n\n**Test Day Takeaway:** For rate problems, reduce to a per-unit rate first, then multiply by the new quantity.",
      skills: ["unit-rate", "proportions"]
    },
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "If $5(2x - 1) - 4x = 6x - 5$, how many solutions does the equation have?",
      choices: [
        { id: "A", text: "Infinitely many" },
        // distractor: confuses identity with contradiction
        { id: "B", text: "$0$" },
        // distractor: assumes always 1 solution
        { id: "C", text: "$1$" },
        // distractor: wrong base — quadratic answer
        { id: "D", text: "$2$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Distribute the left side: $10x - 5 - 4x = 6x - 5$, which equals the right side $6x - 5$. The equation is true for every $x$, so there are infinitely many solutions.\n\n**The Full Solution:**\nStep 1: Distribute and combine: $5(2x - 1) - 4x = 10x - 5 - 4x = 6x - 5$.\nStep 2: The equation is now $6x - 5 = 6x - 5$.\nStep 3: Subtract $6x$ from both sides: $-5 = -5$, always true. Every value of $x$ works, so there are infinitely many solutions.\n\n**Why the wrong answers are tempting:**\n* Choice B ($0$): confuses an identity ($-5 = -5$) with a contradiction (which would be something like $-5 = 3$).\n* Choice C ($1$): assumes a generic linear equation always has exactly one solution.\n* Choice D ($2$): treats it like a quadratic, expecting two roots.\n\n**Test Day Takeaway:** Simplify both sides fully. Identical sides mean infinitely many solutions; matching variable terms but different constants mean no solutions; different variable terms mean exactly one solution.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "The area of a circle is $36\\pi$ square inches. What is the radius of the circle, in inches?",
      correctAnswer: "6",
      explanation: "**SAT Pattern: Reverse Area of a Circle**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~5s):** $\\pi r^2 = 36\\pi \\Rightarrow r^2 = 36 \\Rightarrow r = 6$.\n\n**The Full Solution:**\nStep 1: Use the area formula $A = \\pi r^2$ and set it equal to $36\\pi$: $\\pi r^2 = 36\\pi$.\nStep 2: Divide both sides by $\\pi$: $r^2 = 36$.\nStep 3: Take the positive square root (radius is positive): $r = 6$. Check: $\\pi (6)^2 = 36\\pi$. $\\checkmark$\n\n**Common Mistakes:** Stopping at $r^2 = 36$ and reporting $36$; dividing by $\\pi$ but forgetting it cancels, leaving $\\frac{36}{\\pi}$; or giving the diameter $12$ instead of the radius.\n\n**Test Day Takeaway:** To go from area back to radius, divide by $\\pi$, then take the square root.",
      skills: ["area-circle", "circles"]
    },
    {
      id: 19,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "If $h(x) = -2x^2 + 5x - 1$, what is the value of $h(-2)$?",
      choices: [
        // distractor: doesn't square the negative correctly
        { id: "A", text: "$-3$" },
        { id: "B", text: "$-19$" },
        // distractor: forgets the negative on the linear term
        { id: "C", text: "$1$" },
        // distractor: stops one step early — gives -8 + 10 - 1 = 1 (sign mistake)
        { id: "D", text: "$-9$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $h(-2) = -2(-2)^2 + 5(-2) - 1 = -2(4) - 10 - 1 = -8 - 10 - 1 = -19$.\n\n**The Full Solution:**\nStep 1: Substitute $x = -2$: $h(-2) = -2(-2)^2 + 5(-2) - 1$.\nStep 2: Square first: $(-2)^2 = 4$, so the first term is $-2(4) = -8$.\nStep 3: Finish: $-8 + (-10) - 1 = -19$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): mishandles the sign of the squared term.\n* Choice C ($1$): drops the negative on $5(-2) = -10$.\n* Choice D ($-9$): a sign slip somewhere in the arithmetic chain.\n\n**Test Day Takeaway:** Square before multiplying: $(-2)^2 = 4$ is positive, but a negative leading coefficient turns it negative. Write each step to keep signs straight.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "The line $\\ell$ has equation $y = \\dfrac{1}{2}x + 3$. Which of the following is the equation of a line perpendicular to $\\ell$ that passes through the point $(0, 1)$?",
      choices: [
        // distractor: uses parallel slope
        { id: "A", text: "$y = \\dfrac{1}{2}x + 1$" },
        { id: "B", text: "$y = -2x + 1$" },
        // distractor: flips slope to 2 (no sign change)
        { id: "C", text: "$y = 2x + 1$" },
        // distractor: uses negative reciprocal but wrong intercept
        { id: "D", text: "$y = -2x + 3$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Perpendicular Line Through a Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The perpendicular slope is the negative reciprocal of $\\frac{1}{2}$, which is $-2$. Since the line passes through $(0, 1)$, the $y$-intercept is $1$: $y = -2x + 1$.\n\n**The Full Solution:**\nStep 1: Perpendicular slopes are negative reciprocals. The reciprocal of $\\frac{1}{2}$ is $2$, and flipping the sign gives $-2$.\nStep 2: The point $(0, 1)$ is on the $y$-axis, so the $y$-intercept is $b = 1$.\nStep 3: Write the line: $y = -2x + 1$. Check perpendicularity: $-2 \\cdot \\frac{1}{2} = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = \\frac{1}{2}x + 1$): uses the original (parallel) slope instead of the perpendicular one.\n* Choice C ($y = 2x + 1$): flips the fraction but keeps the positive sign, forgetting the negative.\n* Choice D ($y = -2x + 3$): right slope, but uses the original line's intercept instead of the given point.\n\n**Test Day Takeaway:** Perpendicular slope means flip the fraction and change the sign. A line through $(0, b)$ has $y$-intercept $b$.",
      skills: ["perpendicular-line-slope", "writing-perpendicular-equation"]
    },
    {
      id: 21,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "The scatterplot below shows the relationship between the number of customers $x$ at a coffee shop and daily revenue $y$ in dollars. The line of best fit is $\\hat{y} = 4.5x + 80$. According to the model, what is the predicted daily revenue, in dollars, when there are $40$ customers?",
      diagram: { type: "scatterplot", params: {
        points: [[5,90],[10,140],[15,140],[20,180],[25,180],[30,220],[35,250],[40,260],[45,275]],
        xMin: 0, xMax: 50, yMin: 0, yMax: 320,
        xGridStep: 5, yGridStep: 40, xLabelStep: 10, yLabelStep: 80,
        xLabel: "Customers", yLabel: "Daily revenue ($)",
        bestFitLine: { slope: 4.5, intercept: 80 },
      } },
      correctAnswer: "260",
      explanation: "**SAT Pattern: Predicting from a Line of Best Fit**\n\n**The correct answer is $260$.**\n\n**The Fast Way (~10s):** Plug $x = 40$ into $\\hat{y} = 4.5x + 80$: $4.5(40) + 80 = 180 + 80 = 260$.\n\n**The Full Solution:**\nStep 1: The line of best fit predicts $\\hat{y}$ for a given $x$. Substitute $x = 40$.\nStep 2: $\\hat{y} = 4.5(40) + 80 = 180 + 80 = 260$ dollars.\n\n**Common Mistakes:** Reporting $80$ (the intercept — revenue at $0$ customers); reporting $4.5$ (the slope — revenue per customer); or forgetting the intercept and stopping at $4.5 \\cdot 40 = 180$.\n\n**Test Day Takeaway:** To predict from a line of best fit, substitute the given $x$ and compute. The slope is the change per unit; the intercept is the value at $x = 0$.",
      skills: ["scatterplots", "linear-functions"]
    },
    {
      id: 22,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The table shows the number of laptops and tablets sold by an electronics store across two weekends.\n\n| | Laptops | Tablets | Total |\n|---|---|---|---|\n| Weekend 1 | $30$ | $45$ | $75$ |\n| Weekend 2 | $50$ | $25$ | $75$ |\n| Total | $80$ | $70$ | $150$ |\n\nWhat fraction of all the laptops sold were sold on Weekend 2?",
      choices: [
        // distractor: total laptops divided by total sales
        { id: "A", text: "$\\dfrac{80}{150}$" },
        // distractor: weekend 2 laptops divided by weekend 2 total
        { id: "B", text: "$\\dfrac{50}{75}$" },
        { id: "C", text: "$\\dfrac{50}{80}$" },
        // distractor: weekend 2 laptops divided by overall total
        { id: "D", text: "$\\dfrac{50}{150}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** \"Of all laptops\" makes the denominator the total laptops, $80$. Weekend 2 laptops are $50$, so the fraction is $\\frac{50}{80}$.\n\n**The Full Solution:**\nStep 1: The phrase \"what fraction of all the laptops\" restricts the group to laptops only, so the denominator is the laptop total: $30 + 50 = 80$.\nStep 2: The numerator is the laptops sold on Weekend 2: $50$.\nStep 3: The fraction is $\\frac{50}{80}$, which reduces to $\\frac{5}{8}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{80}{150}$): the fraction of all sales that were laptops, not what was asked.\n* Choice B ($\\frac{50}{75}$): the fraction of Weekend 2 sales that were laptops (wrong group in the denominator).\n* Choice D ($\\frac{50}{150}$): uses the grand total instead of just the laptop total.\n\n**Test Day Takeaway:** The word \"of\" sets the denominator. \"Of all laptops\" puts the laptop total on the bottom; \"of Weekend 2 sales\" would put the Weekend 2 total on the bottom.",
      skills: ["two-way-table", "conditional-probability"]
    }
  ]
};

export default practiceTest3M2Easy;
