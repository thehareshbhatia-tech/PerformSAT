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
      question: "What is the solution to the equation $\\dfrac{x}{6} = 12$?",
      choices: [
        // distractor: applies the inverse operation — divides 12 by 6
        { id: "A", text: "$2$" },
        // distractor: subtracts 6 from 12 instead of multiplying
        { id: "B", text: "$6$" },
        // distractor: adds 6 and 12 instead of multiplying
        { id: "C", text: "$18$" },
        { id: "D", text: "$72$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~3s):** $x$ is divided by $6$, so multiply both sides by $6$: $x = 12 \\cdot 6 = 72$.\n\n**The Full Solution:**\nStep 1: In $\\dfrac{x}{6} = 12$, the variable is divided by $6$. Undo the division by multiplying both sides by $6$.\nStep 2: $x = 12 \\cdot 6 = 72$.\nStep 3: Check: $\\dfrac{72}{6} = 12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): divided $12$ by $6$ — the wrong inverse operation.\n* Choice B ($6$): subtracted $6$ from $12$ instead of multiplying.\n* Choice C ($18$): added $6$ and $12$ instead of multiplying.\n\n**Test Day Takeaway:** To isolate a variable, apply the inverse operation to both sides. Division is undone by multiplication.",
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
      question: "If $p(x) = x^2 - 1$, what is the value of $p(5)$?",
      choices: [
        // distractor: doubles instead of squaring — 2(5) - 1
        { id: "A", text: "$9$" },
        { id: "B", text: "$24$" },
        // distractor: adds 1 instead of subtracting
        { id: "C", text: "$26$" },
        // distractor: evaluates (5 - 1)^2
        { id: "D", text: "$16$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Substitute $x = 5$: $p(5) = 5^2 - 1 = 25 - 1 = 24$.\n\n**The Full Solution:**\nStep 1: $p(x) = x^2 - 1$ means square the input, then subtract $1$.\nStep 2: Square first: $5^2 = 25$.\nStep 3: Subtract: $25 - 1 = 24$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): doubled instead of squaring, $2(5) - 1 = 9$.\n* Choice C ($26$): added $1$ instead of subtracting, $25 + 1 = 26$.\n* Choice D ($16$): subtracted before squaring, $(5 - 1)^2 = 16$.\n\n**Test Day Takeaway:** $x^2$ means $x \\cdot x$, not $2x$. Apply the rule in the written order: square first, then subtract.",
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
      question: "In the $xy$-plane, what is the distance between the points $(1, 2)$ and $(9, 17)$?",
      correctAnswer: "17",
      explanation: "**SAT Pattern: Distance Between Two Points**\n\n**The correct answer is $17$.**\n\n**The Fast Way (~10s):** The horizontal change is $9 - 1 = 8$ and the vertical change is $17 - 2 = 15$. Legs $8$ and $15$ give the $8$-$15$-$17$ triple, so the distance is $17$.\n\n**The Full Solution:**\nStep 1: Distance is the hypotenuse of a right triangle whose legs are the coordinate changes: $\\Delta x = 9 - 1 = 8$ and $\\Delta y = 17 - 2 = 15$.\nStep 2: Apply the Pythagorean theorem: $d^2 = 8^2 + 15^2 = 64 + 225 = 289$.\nStep 3: $d = \\sqrt{289} = 17$.\n\n**Common Mistakes:** Adding the changes without squaring ($8 + 15 = 23$); subtracting the squares instead of adding; or forgetting the square root and reporting $289$.\n\n**Test Day Takeaway:** Distance between points $= \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$ — the Pythagorean theorem applied to the coordinate grid.",
      skills: ["pythagorean-theorem", "distance-formula"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The mean of the $5$ numbers in a list is $16$. When a sixth number is added to the list, the mean of the $6$ numbers is $18$. What is the sixth number?",
      choices: [
        // distractor: takes the difference of the two means
        { id: "A", text: "$2$" },
        // distractor: assumes the added number keeps the mean at 16
        { id: "B", text: "$16$" },
        // distractor: assumes the added number equals the new mean
        { id: "C", text: "$18$" },
        { id: "D", text: "$28$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Work with totals: the new total is $6 \\cdot 18 = 108$ and the old total is $5 \\cdot 16 = 80$. The added number is $108 - 80 = 28$.\n\n**The Full Solution:**\nStep 1: Mean $\\times$ count $=$ total sum. Before: $5 \\cdot 16 = 80$. After: $6 \\cdot 18 = 108$.\nStep 2: The sixth number is whatever the total gained: $108 - 80 = 28$.\nStep 3: Check: $\\dfrac{80 + 28}{6} = \\dfrac{108}{6} = 18$. $\\checkmark$\nIntuition: to pull the mean up from $16$ to $18$, the new number must sit ABOVE the new mean — $28$ is $10$ above $18$, which covers the $2$-point raise for each of the $5$ original numbers.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): takes the difference of the two means — that is the shift per number, not the number added.\n* Choice B ($16$): adding $16$ would keep the mean at $16$, not raise it.\n* Choice C ($18$): adding the new mean itself would leave the mean below $18$, since the original numbers average only $16$.\n\n**Test Day Takeaway:** Means hide totals. Convert every mean to a total (mean $\\times$ count), and the added value is the difference of the totals.",
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
      question: "In right triangle $DEF$, the measure of angle $F$ is $90^{\\circ}$, $DF = 8$, $EF = 15$, and $DE = 17$. What is the value of $\\sin(D)$?",
      choices: [
        // distractor: uses the adjacent side — that is cos(D)
        { id: "A", text: "$\\dfrac{8}{17}$" },
        { id: "B", text: "$\\dfrac{15}{17}$" },
        // distractor: opposite over adjacent — that is tan(D)
        { id: "C", text: "$\\dfrac{15}{8}$" },
        // distractor: adjacent over opposite
        { id: "D", text: "$\\dfrac{8}{15}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: SOH-CAH-TOA from Labeled Sides**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The right angle is at $F$, so the hypotenuse is $DE = 17$. The side opposite angle $D$ is $EF = 15$, so $\\sin(D) = \\dfrac{15}{17}$.\n\n**The Full Solution:**\nStep 1: The hypotenuse is always opposite the right angle: since angle $F$ is $90^{\\circ}$, the hypotenuse is $DE = 17$.\nStep 2: The side opposite angle $D$ is the side that does not touch $D$: that is $EF = 15$. The side $DF = 8$ is adjacent to angle $D$.\nStep 3: $\\sin(D) = \\dfrac{\\text{opposite}}{\\text{hypotenuse}} = \\dfrac{15}{17}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{8}{17}$): uses the adjacent side $DF$ — that is $\\cos(D)$.\n* Choice C ($\\dfrac{15}{8}$): opposite over adjacent — that is $\\tan(D)$.\n* Choice D ($\\dfrac{8}{15}$): adjacent over opposite, an inverted tangent.\n\n**Test Day Takeaway:** Locate the hypotenuse first (opposite the right angle). Then \"opposite\" and \"adjacent\" are named relative to the angle in the question, not the right angle.",
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
      question: "The table gives selected values of the function $f$.\n\n| $x$ | $1$ | $2$ | $3$ | $4$ |\n|---|---|---|---|---|\n| $f(x)$ | $2$ | $5$ | $1$ | $3$ |\n\nWhat is the value of $f(f(1))$?",
      choices: [
        // distractor: stops at the inner evaluation f(1)
        { id: "A", text: "$2$" },
        { id: "B", text: "$5$" },
        // distractor: reads f(3) from the table instead of composing
        { id: "C", text: "$1$" },
        // distractor: multiplies f(1) by f(2)
        { id: "D", text: "$10$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Composed Function Evaluation from a Table**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Work inside out. The table gives $f(1) = 2$, so $f(f(1)) = f(2) = 5$.\n\n**The Full Solution:**\nStep 1: Evaluate the inner function first: from the table, $f(1) = 2$.\nStep 2: The expression becomes $f(2)$.\nStep 3: Read the table again: $f(2) = 5$. So $f(f(1)) = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): stops after the inner step, reporting $f(1)$ itself.\n* Choice C ($1$): reads $f(3)$ from the table instead of feeding $f(1) = 2$ back in.\n* Choice D ($10$): multiplies $f(1) \\cdot f(2)$ instead of composing.\n\n**Test Day Takeaway:** For nested function values, evaluate from the inside out: find the inner output first, then use it as the new input.",
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
