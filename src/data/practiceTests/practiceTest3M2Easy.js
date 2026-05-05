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
      explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~3s):** Add $7$ to both sides: $x = 12 + 7 = 19$.\n\n**The Full Solution:**\n$x - 7 = 12$\n$x = 12 + 7 = 19$.\n\nVerification: $19 - 7 = 12$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — subtracts $7$ instead of adding.\n* Choice C: \"stops one step early\" — leaves the right side untouched.\n* Choice D: \"wrong operation\" — divides instead of adding.\n\n**Test Day Takeaway:** To undo subtraction, ADD; to undo addition, SUBTRACT. Always operate on BOTH sides equally.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "What is the perimeter, in inches, of a square with side length $7$ inches?",
      correctAnswer: "28",
      explanation: "**SAT Pattern: Square Perimeter**\n\n**The correct answer is $28$.**\n\n**The Fast Way (~3s):** Perimeter $= 4 \\cdot s = 4 \\cdot 7 = 28$.\n\n**The Full Solution:**\nA square has $4$ equal sides. Perimeter $=$ sum of all four sides $= 4s$.\n$P = 4 \\cdot 7 = 28$ inches.\n\n**Common Mistakes to Avoid:**\n* Computing the area: $7^2 = 49$ instead of the perimeter.\n* Adding only two sides: $7 + 7 = 14$.\n\n**Test Day Takeaway:** Square perimeter $= 4s$. Square area $= s^2$. Read carefully which is requested.",
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
      explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Substitute $x = 2$: $g(2) = 3(2) + 8 = 6 + 8 = 14$.\n\n**The Full Solution:**\nFunction notation $g(x)$ means \"plug in $x$ wherever you see $x$ in the rule.\"\n$g(2) = 3(2) + 8 = 6 + 8 = 14$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong operation\" — adds $2 + 3 + 8 = 13$ instead of multiplying first.\n* Choice C: \"stops one step early\" — gives $3(2) = 6$ without adding $8$.\n* Choice D: \"applies the inverse operation\" — subtracts $8$ instead of adding.\n\n**Test Day Takeaway:** $g(a)$ means substitute $a$ for $x$ everywhere in the rule, then evaluate using order of operations (multiply before adding).",
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
      explanation: "**SAT Pattern: Proportion / Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $\\dfrac{5}{3} = \\dfrac{n}{24}$. Cross-multiply: $3n = 120 \\Rightarrow n = 40$.\n\n**The Full Solution:**\nSet up the ratio with corresponding parts in matching positions:\n$\\dfrac{\\text{nuts}}{\\text{fruit}} = \\dfrac{5}{3} = \\dfrac{n}{24}$.\n\nCross-multiply: $3n = 5 \\cdot 24 = 120$, so $n = 40$ ounces.\n\nAlternatively: $24$ ounces of fruit equals $8$ groups of $3$ ounces. Each group has $5$ ounces of nuts: $8 \\cdot 5 = 40$ ounces of nuts.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong operation\" — subtracts $24 - (5 + 3) = 16$.\n* Choice C: \"wrong base\" — adds the ratio parts ($5 + 3 = 8$).\n* Choice D: \"applies the inverse operation\" — flips the ratio: $\\frac{3}{5} = \\frac{n}{24}$.\n\n**Test Day Takeaway:** Set up proportions with matching categories on top of each other. Cross-multiply to solve.",
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
      explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~3s):** In $y = mx + b$, slope $m = -4$.\n\n**The Full Solution:**\nThe equation $y = -4x + 9$ is in slope-intercept form $y = mx + b$:\n* slope $m = -4$\n* $y$-intercept $b = 9$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — gives the $y$-intercept instead of the slope.\n* Choice C: \"wrong sign\" — drops the negative.\n* Choice D: \"applies the inverse operation\" — computes the $x$-intercept ($\\frac{9}{4}$).\n\n**Test Day Takeaway:** $y = mx + b$: slope is the coefficient of $x$ (with its sign), $y$-intercept is the constant term.",
      skills: ["slope-intercept-form", "linear-functions"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "A right triangle has legs of length $9$ and $12$. What is the length of the hypotenuse?",
      correctAnswer: "15",
      explanation: "**SAT Pattern: Pythagorean Theorem (3-4-5 Family)**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~5s):** $9$-$12$-$15$ is $3 \\times$ the $3$-$4$-$5$ Pythagorean triple, so the hypotenuse is $15$.\n\n**The Full Solution:**\nBy the Pythagorean theorem: $c^2 = a^2 + b^2$.\n$c^2 = 9^2 + 12^2 = 81 + 144 = 225$\n$c = \\sqrt{225} = 15$.\n\n**Common Mistakes to Avoid:**\n* Adding without squaring: $9 + 12 = 21$.\n* Forgetting the square root: reporting $225$.\n* Confusing with the $5$-$12$-$13$ triple (different leg).\n\n**Test Day Takeaway:** Common Pythagorean triples: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$. Multiples of $3$-$4$-$5$ ($6$-$8$-$10$, $9$-$12$-$15$) appear constantly.",
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
      explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Total sum needed: $4 \\cdot 11 = 44$. Sum of three given: $8 + 10 + 14 = 32$. Fourth number: $44 - 32 = 12$.\n\n**The Full Solution:**\nMean $= \\dfrac{\\text{sum of all values}}{\\text{number of values}}$.\n$11 = \\dfrac{8 + 10 + 14 + x}{4}$\n$44 = 32 + x$\n$x = 12$.\n\nVerification: $\\dfrac{8 + 10 + 14 + 12}{4} = \\dfrac{44}{4} = 11$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the total required sum ($44$) instead of the missing value.\n* Choice B: \"wrong base\" — averages only the three given numbers.\n* Choice D: \"wrong operation\" — subtracts the mean from the three-number sum.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ total sum. To find a missing value, subtract the known sum from the required total.",
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
      explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Find two numbers that multiply to $10$ and add to $7$: $2$ and $5$. So $(x + 2)(x + 5) = 0$, giving $x = -2$ or $x = -5$.\n\n**The Full Solution:**\nTo factor $x^2 + bx + c$, find two numbers whose product is $c$ and whose sum is $b$. Here $c = 10$, $b = 7$:\nNumbers: $2$ and $5$ (since $2 \\cdot 5 = 10$ and $2 + 5 = 7$).\n\n$x^2 + 7x + 10 = (x + 2)(x + 5) = 0$\n$x = -2$ or $x = -5$.\n\nVerification: $(-2)^2 + 7(-2) + 10 = 4 - 14 + 10 = 0$ \\checkmark; $(-5)^2 + 7(-5) + 10 = 25 - 35 + 10 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — flips both signs. Roots are the OPPOSITES of the factor numbers.\n* Choice C: \"stops one step early\" — uses $c = 10$ as a single root.\n* Choice D: \"wrong base\" — confuses the sum $b$ and product $c$ with the roots themselves.\n\n**Test Day Takeaway:** When factoring $x^2 + bx + c$, look for two numbers with product $c$ and sum $b$. The roots are the OPPOSITES (negatives) of those numbers.",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    {
      id: 9,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A jacket originally cost $\\$80$ and is now on sale for $\\$60$. What is the percent decrease in price?",
      correctAnswer: "25",
      explanation: "**SAT Pattern: Percent Change / Decrease**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~10s):** Decrease $= 80 - 60 = 20$. Percent $= \\dfrac{20}{80} \\times 100 = 25\\%$.\n\n**The Full Solution:**\nPercent decrease $= \\dfrac{\\text{old} - \\text{new}}{\\text{old}} \\times 100\\%$.\nHere old $= 80$, new $= 60$:\n$\\dfrac{80 - 60}{80} \\times 100 = \\dfrac{20}{80} \\times 100 = 0.25 \\times 100 = 25\\%$.\n\n**Common Mistakes to Avoid:**\n* Using the new price as the denominator: $\\frac{20}{60} \\approx 33.3\\%$.\n* Reporting the dollar amount of decrease ($20$) instead of the percent.\n\n**Test Day Takeaway:** Percent change always uses the ORIGINAL value as the denominator: $\\dfrac{\\text{change}}{\\text{original}} \\times 100\\%$.",
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
      explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Slope $= \\dfrac{\\Delta y}{\\Delta x} = \\dfrac{-8 - 4}{3 - (-1)} = \\dfrac{-12}{4} = -3$.\n\n**The Full Solution:**\nSlope formula: $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$.\nUsing $(x_1, y_1) = (-1, 4)$ and $(x_2, y_2) = (3, -8)$:\n$m = \\dfrac{-8 - 4}{3 - (-1)} = \\dfrac{-12}{4} = -3$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — drops the negative on the slope.\n* Choice C: \"applies the inverse operation\" — flips the slope formula ($\\frac{\\Delta x}{\\Delta y}$).\n* Choice D: \"wrong sign\" — subtracts in the wrong direction in BOTH numerator and denominator.\n\n**Test Day Takeaway:** Slope $=$ rise over run $= \\dfrac{y_2 - y_1}{x_2 - x_1}$. Pick a consistent order: subtract the same point's coordinates first in both numerator and denominator.",
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
      explanation: "**SAT Pattern: Basic Probability with Constraint**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Numbers greater than $5$ in $\\{1, \\ldots, 8\\}$: $6, 7, 8$ — that's $3$ values. Probability $= \\dfrac{3}{8}$.\n\n**The Full Solution:**\nProbability $= \\dfrac{\\text{favorable outcomes}}{\\text{total outcomes}}$.\nFavorable: numbers strictly greater than $5$: $\\{6, 7, 8\\}$, count $= 3$.\nTotal: $8$ sectors.\n$P = \\dfrac{3}{8}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses $5/8$ from the wrong direction (less than or equal to $5$).\n* Choice C: \"off-by-one\" — uses $\\geq 5$ instead of $> 5$, including $5$ as favorable.\n* Choice D: \"stops one step early\" — gives the count of favorable outcomes, not the probability.\n\n**Test Day Takeaway:** Watch the inequality direction. \"Greater than\" excludes the boundary; \"at least\" includes it. Probability is a fraction (favorable/total), not just a count.",
      skills: ["probability-basics", "statistics"]
    },
    {
      id: 12,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The volume of a cube is $125$ cubic centimeters. What is the side length of the cube, in centimeters?",
      correctAnswer: "5",
      explanation: "**SAT Pattern: Volume of a Cube — Reverse**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~5s):** Cube volume $= s^3$. So $s = \\sqrt[3]{125} = 5$.\n\n**The Full Solution:**\nVolume of a cube: $V = s^3$.\n$s^3 = 125$\n$s = \\sqrt[3]{125} = 5$.\n\nVerification: $5^3 = 5 \\cdot 5 \\cdot 5 = 125$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Taking a square root: $\\sqrt{125} \\approx 11.18$ (this would apply to area, not volume).\n* Dividing by $3$: $\\frac{125}{3} \\approx 41.67$.\n\n**Test Day Takeaway:** Cube volume $= s^3$. To go from volume back to side length, take the CUBE root, not the square root.",
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
      explanation: "**SAT Pattern: Linear System by Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Add the two equations to eliminate $y$: $2x = 14 \\Rightarrow x = 7$. Then $y = 11 - 7 = 4$.\n\n**The Full Solution:**\nAdd the two equations:\n$(x + y) + (x - y) = 11 + 3$\n$2x = 14$\n$x = 7$.\n\nSubstitute back into the first equation: $7 + y = 11 \\Rightarrow y = 4$.\n\nVerification: $7 - 4 = 3$ \\checkmark.\nSolution: $(x, y) = (7, 4)$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — swaps $x$ and $y$ in the answer.\n* Choice C: \"wrong base\" — uses the right-hand sides as the coordinates.\n* Choice D: \"off-by-one\" — uses unstructured arithmetic.\n\n**Test Day Takeaway:** When one equation has $+y$ and the other has $-y$, ADD them to eliminate $y$ and solve for $x$.",
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
      explanation: "**SAT Pattern: Exponential Growth Model with Period**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Tripling means multiply by $3$ each $10$-year period. After $t$ years, that's $\\dfrac{t}{10}$ periods: $2{,}000 \\cdot 3^{\\frac{t}{10}}$.\n\n**The Full Solution:**\nGeneral exponential model: $V(t) = V_0 \\cdot r^{\\frac{t}{d}}$, where:\n* $V_0 = $ initial value $= 2{,}000$\n* $r = $ growth factor per period $= 3$ (tripling)\n* $d = $ length of one period $= 10$ years.\n\nSo $V(t) = 2{,}000 \\cdot 3^{\\frac{t}{10}}$.\n\nCheck: $t = 0 \\Rightarrow V = 2{,}000$. $t = 10 \\Rightarrow V = 6{,}000$ (tripled). $t = 20 \\Rightarrow V = 18{,}000$ (tripled again) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — linear $+3t$ instead of multiplicative growth.\n* Choice C: \"applies the inverse operation\" — confuses base and exponent.\n* Choice D: \"stops one step early\" — triples the start once, then adds linearly.\n\n**Test Day Takeaway:** \"Triples every $d$ years\" $\\Rightarrow$ multiply by $3^{t/d}$. Initial value goes OUT FRONT; growth factor is the BASE; the exponent is $\\frac{t}{\\text{period length}}$.",
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
      explanation: "**SAT Pattern: SOH-CAH-TOA in an 8-15-17 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $\\cos(\\theta) = \\dfrac{\\text{adj}}{\\text{hyp}} = \\dfrac{8}{17}$, so adj $= 8$, hyp $= 17$. Pythagoras: opp $= \\sqrt{289 - 64} = \\sqrt{225} = 15$. $\\sin(\\theta) = \\dfrac{\\text{opp}}{\\text{hyp}} = \\dfrac{15}{17}$.\n\n**The Full Solution:**\nFor an acute angle in a right triangle:\n* $\\sin(\\theta) = \\dfrac{\\text{opposite}}{\\text{hypotenuse}}$\n* $\\cos(\\theta) = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}}$\n\nGiven $\\cos(\\theta) = \\frac{8}{17}$: adjacent $= 8$, hypotenuse $= 17$.\nFind opposite via Pythagoras: $\\text{opp}^2 = 17^2 - 8^2 = 289 - 64 = 225 \\Rightarrow \\text{opp} = 15$.\nSo $\\sin(\\theta) = \\dfrac{15}{17}$.\n\nThis is the $8$-$15$-$17$ Pythagorean triple.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — repeats $\\cos$.\n* Choice C: \"applies the inverse operation\" — gives $\\tan(\\theta) = \\frac{\\text{opp}}{\\text{adj}} = \\frac{15}{8}$.\n* Choice D: \"applies the inverse operation\" — gives $\\sec(\\theta) = \\frac{17}{8}$.\n\n**Test Day Takeaway:** Given one trig ratio, draw the right triangle, label two sides, use Pythagoras for the third. Common triples to memorize: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$.",
      skills: ["soh-cah-toa", "right-triangles"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A factory produces $360$ widgets every $4$ hours. At this rate, how many widgets does the factory produce in $6$ hours?",
      correctAnswer: "540",
      explanation: "**SAT Pattern: Unit Rate / Direct Proportion**\n\n**The correct answer is $540$.**\n\n**The Fast Way (~10s):** Rate $= 360 / 4 = 90$ widgets/hour. In $6$ hours: $90 \\cdot 6 = 540$.\n\n**The Full Solution:**\nFind the unit rate: $\\dfrac{360 \\text{ widgets}}{4 \\text{ hr}} = 90$ widgets per hour.\nMultiply by $6$ hours: $90 \\cdot 6 = 540$ widgets.\n\nAlternative: set up a proportion: $\\dfrac{360}{4} = \\dfrac{w}{6}$, so $w = \\dfrac{360 \\cdot 6}{4} = 540$.\n\n**Common Mistakes to Avoid:**\n* Adding hours: $360 + 6 = 366$.\n* Multiplying by hours difference: $360 \\cdot 2 = 720$ (treats $6 - 4 = 2$ as the multiplier).\n* Dividing instead of multiplying: $360 / 6 = 60$.\n\n**Test Day Takeaway:** For rate problems, find the per-unit rate (per hour, per item), then multiply by the new quantity.",
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
      explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Distribute: $10x - 5 - 4x = 6x - 5 \\Rightarrow 6x - 5 = 6x - 5$. True for all $x$ $\\Rightarrow$ infinitely many solutions.\n\n**The Full Solution:**\nDistribute on the left: $5(2x - 1) - 4x = 10x - 5 - 4x = 6x - 5$.\nThe equation becomes: $6x - 5 = 6x - 5$.\nSubtract $6x$: $-5 = -5$. ALWAYS TRUE.\n\nSince the equation is true for every value of $x$, it has INFINITELY MANY solutions.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong sign\" — confuses identity ($-5 = -5$) with contradiction (which would give $0$ solutions).\n* Choice C: \"applies the inverse operation\" — assumes a generic linear equation has exactly one solution.\n* Choice D: \"wrong base\" — quadratic-flavored answer.\n\n**Test Day Takeaway:** Simplify both sides fully. Identical sides $\\Rightarrow$ infinitely many solutions. Same variable terms but different constants $\\Rightarrow$ no solutions. Different variable terms $\\Rightarrow$ exactly one solution.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "The area of a circle is $36\\pi$ square inches. What is the radius of the circle, in inches?",
      correctAnswer: "6",
      explanation: "**SAT Pattern: Reverse Area of a Circle**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~5s):** $\\pi r^2 = 36\\pi \\Rightarrow r^2 = 36 \\Rightarrow r = 6$.\n\n**The Full Solution:**\nArea of a circle: $A = \\pi r^2$.\n$\\pi r^2 = 36\\pi$\n$r^2 = 36$\n$r = 6$ (positive root, since radius is positive).\n\nVerification: $\\pi (6)^2 = 36\\pi$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Reporting $r^2 = 36$ as the answer instead of $r = 6$.\n* Dividing by $\\pi$ twice: $\\frac{36}{\\pi}$.\n* Reporting the diameter ($12$) instead of the radius.\n\n**Test Day Takeaway:** Area of a circle $A = \\pi r^2$. To go from area to radius, divide both sides by $\\pi$, then take the SQUARE root.",
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
      explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $h(-2) = -2(-2)^2 + 5(-2) - 1 = -2(4) - 10 - 1 = -8 - 10 - 1 = -19$.\n\n**The Full Solution:**\nSubstitute $x = -2$ into $h(x) = -2x^2 + 5x - 1$:\n$h(-2) = -2(-2)^2 + 5(-2) - 1$\n$= -2(4) + (-10) - 1$\n$= -8 - 10 - 1$\n$= -19$.\n\nKey: $(-2)^2 = +4$ (squaring removes the sign), then $-2 \\cdot 4 = -8$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — mishandles the sign of the squared term.\n* Choice C: \"wrong sign\" — drops the negative on $5(-2) = -10$.\n* Choice D: \"off-by-one\" — sign-error chain in the arithmetic.\n\n**Test Day Takeaway:** $(-a)^2 = a^2$ ($\\geq 0$). Multiplying that by a negative leading coefficient gives a NEGATIVE term. Track signs carefully; write each step.",
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
      explanation: "**SAT Pattern: Perpendicular Line Through a Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Perpendicular slope is the negative reciprocal of $\\frac{1}{2}$: $-2$. Through $(0, 1)$: $y$-intercept $= 1$. Equation: $y = -2x + 1$.\n\n**The Full Solution:**\nPerpendicular slopes are NEGATIVE RECIPROCALS:\nOriginal slope $\\dfrac{1}{2}$ $\\Rightarrow$ perpendicular slope $-\\dfrac{1}{1/2} = -2$.\n\nThe new line passes through $(0, 1)$, so the $y$-intercept is $b = 1$.\n\nEquation: $y = -2x + 1$.\n\nVerification: at $x = 0$, $y = 1$ \\checkmark. Slope $-2 \\cdot \\frac{1}{2} = -1$ confirms perpendicular.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses parallel slope ($\\frac{1}{2}$) instead of perpendicular.\n* Choice C: \"wrong sign\" — flips the fraction but keeps the positive sign (forgot the negative).\n* Choice D: \"wrong base\" — correct slope but uses original $y$-intercept instead of point's $y$-value.\n\n**Test Day Takeaway:** Perpendicular slope $=$ NEGATIVE RECIPROCAL (flip the fraction AND change the sign). For a line through $(0, b)$, the $y$-intercept is $b$.",
      skills: ["perpendicular-line-slope", "writing-perpendicular-equation"]
    },
    {
      id: 21,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "A scatterplot shows the relationship between the number of customers $x$ at a coffee shop and daily revenue $y$ in dollars. The line of best fit is $\\hat{y} = 4.5x + 80$. According to the model, what is the predicted daily revenue, in dollars, when there are $40$ customers?",
      correctAnswer: "260",
      explanation: "**SAT Pattern: Predicting from a Line of Best Fit**\n\n**The correct answer is $260$.**\n\n**The Fast Way (~10s):** Plug $x = 40$ into $\\hat{y} = 4.5x + 80$: $\\hat{y} = 4.5(40) + 80 = 180 + 80 = 260$.\n\n**The Full Solution:**\nThe line of best fit predicts $\\hat{y}$ for a given $x$. Substitute $x = 40$:\n$\\hat{y} = 4.5(40) + 80 = 180 + 80 = 260$ dollars.\n\n**Common Mistakes to Avoid:**\n* Reporting $80$ (the $y$-intercept — predicted revenue with $0$ customers).\n* Reporting $4.5$ (the slope — change in revenue per customer).\n* Forgetting to add the intercept: $4.5 \\cdot 40 = 180$.\n\n**Test Day Takeaway:** To predict from a line of best fit, plug the given $x$-value in and compute. Slope tells you change PER unit; intercept is the value at $x = 0$.",
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
      explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** \"Of all laptops\" $\\Rightarrow$ denominator $=$ total laptops $= 80$. Weekend 2 laptops $= 50$. Fraction $= \\dfrac{50}{80} = \\dfrac{5}{8}$.\n\n**The Full Solution:**\n\"What fraction of all the laptops\" restricts the sample space to LAPTOPS only.\nTotal laptops: $30 + 50 = 80$.\nWeekend 2 laptops: $50$.\nFraction $= \\dfrac{50}{80} = \\dfrac{5}{8}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — gives the fraction of all sales that were laptops ($\\frac{80}{150}$).\n* Choice B: \"applies the inverse operation\" — gives the fraction of Weekend 2 sales that were laptops.\n* Choice D: \"wrong base\" — uses overall total in the denominator instead of just laptops.\n\n**Test Day Takeaway:** \"Of\" identifies the denominator. \"Of all laptops\" $\\Rightarrow$ laptops total in denominator. \"Of Weekend 2 sales\" $\\Rightarrow$ Weekend 2 total in denominator.",
      skills: ["two-way-table", "conditional-probability"]
    }
  ]
};

export default practiceTest3M2Easy;
