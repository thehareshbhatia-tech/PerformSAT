// Practice Test 7 — Math Module 2 Easy variant (22 questions)
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Domain mix: 7 Algebra / 6 Advanced Math / 5 Problem-Solving / 4 Geometry & Trig.

export const practiceTest7M2Easy = {
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
      question: "If $2x + 3 = 11$, what is the value of $x$?",
      choices: [
        // distractor: applies the inverse operation — adds 3 instead of subtracting
        { id: "A", text: "$7$" },
        { id: "B", text: "$4$" },
        // distractor: stops one step early — divides 11 by 2 forgetting the 3
        { id: "C", text: "$5.5$" },
        // distractor: off-by-one — subtracts but doesn't divide
        { id: "D", text: "$8$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Subtract $3$, then divide by $2$: $2x = 8 \\Rightarrow x = 4$.\n\n**The Full Solution:**\n$2x + 3 = 11$\n$2x = 11 - 3 = 8$\n$x = \\dfrac{8}{2} = 4$.\n\nVerification: $2(4) + 3 = 8 + 3 = 11$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — adds $3$ instead of subtracting.\n* Choice C: \"stops one step early\" — divides $11$ by $2$ without subtracting first.\n* Choice D: \"off-by-one\" — subtracts but forgets to divide by $2$.\n\n**Test Day Takeaway:** Solve linear equations by reversing the order of operations: undo addition/subtraction FIRST, then undo multiplication/division.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "What is the area, in square inches, of a rectangle with length $9$ inches and width $4$ inches?",
      correctAnswer: "36",
      explanation: "**SAT Pattern: Rectangle Area**\n\n**The correct answer is $36$.**\n\n**The Fast Way (~5s):** Area $= \\ell \\cdot w = 9 \\cdot 4 = 36$.\n\n**The Full Solution:**\nThe area of a rectangle equals length times width:\nArea $= 9 \\cdot 4 = 36$ square inches.\n\n**Common Mistakes to Avoid:**\n* Computing the perimeter $2(9) + 2(4) = 26$ instead of the area.\n* Adding the dimensions: $9 + 4 = 13$.\n\n**Test Day Takeaway:** Rectangle area $= \\ell \\cdot w$. Rectangle perimeter $= 2\\ell + 2w$. Read carefully which is requested.",
      skills: ["area", "geometry"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "If $f(x) = 4x - 5$, what is the value of $f(3)$?",
      choices: [
        // distractor: substitutes incorrectly — uses 3 + 4 - 5 = 2
        { id: "A", text: "$2$" },
        { id: "B", text: "$7$" },
        // distractor: stops one step early — gives 4(3) without subtracting
        { id: "C", text: "$12$" },
        // distractor: applies inverse op — adds 5 instead of subtracting
        { id: "D", text: "$17$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Replace $x$ with $3$: $f(3) = 4(3) - 5 = 12 - 5 = 7$.\n\n**The Full Solution:**\nFunction notation $f(x)$ means \"plug in $x$ wherever you see $x$ in the rule.\"\n$f(3) = 4(3) - 5 = 12 - 5 = 7$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong operation\" — adds instead of multiplies: $3 + 4 - 5 = 2$.\n* Choice C: \"stops one step early\" — gives $4(3) = 12$ without subtracting.\n* Choice D: \"applies the inverse operation\" — adds $5$ instead of subtracting.\n\n**Test Day Takeaway:** $f(a)$ means substitute $a$ for $x$ everywhere in the rule, then evaluate using order of operations.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "A juice bar uses a recipe with $3$ cups of orange juice for every $2$ cups of pineapple juice. If the bar uses $15$ cups of orange juice, how many cups of pineapple juice are needed?",
      choices: [
        // distractor: subtracts 3 - 2 = 1 then divides
        { id: "A", text: "$5$" },
        // distractor: keeps the same number as orange juice
        { id: "B", text: "$15$" },
        { id: "C", text: "$10$" },
        // distractor: switches the ratio — uses 3:2 backwards
        { id: "D", text: "$22.5$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Proportion / Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $\\dfrac{3}{2} = \\dfrac{15}{p}$. Cross-multiply: $3p = 30 \\Rightarrow p = 10$.\n\n**The Full Solution:**\nSet up the ratio with corresponding parts in matching positions:\n$\\dfrac{\\text{orange}}{\\text{pineapple}} = \\dfrac{3}{2} = \\dfrac{15}{p}$.\n\nCross-multiply: $3p = 2 \\cdot 15 = 30$, so $p = 10$ cups.\n\nAlternatively: $15$ cups of orange juice is $5$ batches of the $3$-cup ratio. Each batch needs $2$ cups of pineapple juice, so total $= 5 \\cdot 2 = 10$ cups.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — divides $15$ by $3$ but reports just the multiplier.\n* Choice B: \"applies the inverse operation\" — keeps the same value as orange juice.\n* Choice D: \"applies the inverse operation\" — flips the ratio: $\\frac{2}{3} = \\frac{15}{p}$.\n\n**Test Day Takeaway:** When setting up a proportion, keep the categories in matching positions on both sides. Cross-multiply to solve.",
      skills: ["ratios", "proportions"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "The graph of the linear function $y = 2x + 5$ is shown in the $xy$-plane. What is the $y$-intercept of the graph?",
      choices: [
        // distractor: gives the slope
        { id: "A", text: "$2$" },
        { id: "B", text: "$5$" },
        // distractor: gives the x-intercept (where y = 0)
        { id: "C", text: "$-2.5$" },
        // distractor: adds slope and intercept
        { id: "D", text: "$7$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** In $y = mx + b$, the $y$-intercept is $b = 5$.\n\n**The Full Solution:**\nThe equation $y = 2x + 5$ is in slope-intercept form $y = mx + b$:\n* slope $m = 2$\n* $y$-intercept $b = 5$ (the value of $y$ when $x = 0$).\n\nVerification: at $x = 0$, $y = 2(0) + 5 = 5$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — gives the slope instead of the $y$-intercept.\n* Choice C: \"applies the inverse operation\" — gives the $x$-intercept where $y = 0$: $0 = 2x + 5 \\Rightarrow x = -\\frac{5}{2}$.\n* Choice D: \"off-by-one\" — adds slope and intercept ($2 + 5 = 7$).\n\n**Test Day Takeaway:** $y = mx + b$: slope is $m$, $y$-intercept is $b$. The $y$-intercept is the $y$-value when $x = 0$.",
      skills: ["slope-intercept-form", "linear-functions"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "A right triangle has legs of length $6$ and $8$. What is the length of the hypotenuse?",
      correctAnswer: "10",
      explanation: "**SAT Pattern: Pythagorean Theorem (3-4-5 Family)**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~5s):** $6$-$8$-$10$ is $2 \\times$ the $3$-$4$-$5$ Pythagorean triple, so the hypotenuse is $10$.\n\n**The Full Solution:**\nBy the Pythagorean theorem: $c^2 = a^2 + b^2$.\n$c^2 = 6^2 + 8^2 = 36 + 64 = 100$\n$c = \\sqrt{100} = 10$.\n\n**Common Mistakes to Avoid:**\n* Adding without squaring: $6 + 8 = 14$.\n* Forgetting the square root: reporting $100$.\n* Subtracting: $\\sqrt{8^2 - 6^2} = \\sqrt{28}$, which would only apply if the hypotenuse were known.\n\n**Test Day Takeaway:** Common Pythagorean triples to memorize: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$. Multiples of these (like $6$-$8$-$10$) appear constantly.",
      skills: ["pythagorean-theorem", "right-triangles"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The mean of five numbers is $14$. Four of the numbers are $10$, $12$, $15$, and $17$. What is the fifth number?",
      choices: [
        // distractor: averages the four given numbers
        { id: "A", text: "$13.5$" },
        // distractor: subtracts mean from sum of four
        { id: "B", text: "$40$" },
        { id: "C", text: "$16$" },
        // distractor: stops one step early — gives the total sum
        { id: "D", text: "$70$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Total sum needed: $5 \\cdot 14 = 70$. Sum of four given: $10 + 12 + 15 + 17 = 54$. Fifth number: $70 - 54 = 16$.\n\n**The Full Solution:**\nMean $= \\dfrac{\\text{sum of all values}}{\\text{number of values}}$.\n$14 = \\dfrac{10 + 12 + 15 + 17 + x}{5}$\n$70 = 54 + x$\n$x = 16$.\n\nVerification: $\\dfrac{10 + 12 + 15 + 17 + 16}{5} = \\dfrac{70}{5} = 14$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — averages only the four given numbers ($\\frac{54}{4} = 13.5$).\n* Choice B: \"wrong operation\" — subtracts the mean from the four-number sum.\n* Choice D: \"stops one step early\" — gives the total required sum ($70$) instead of the missing value.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ total sum. To find a missing value, subtract the known sum from the required total.",
      skills: ["calculate-mean", "statistics"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the solution to the equation $x^2 - 5x + 6 = 0$?",
      choices: [
        // distractor: signs flipped — uses -2 and -3
        { id: "A", text: "$x = -2 \\text{ or } x = -3$" },
        { id: "B", text: "$x = 2 \\text{ or } x = 3$" },
        // distractor: stops at finding only one root
        { id: "C", text: "$x = 6$" },
        // distractor: confuses sum and product (5, 6)
        { id: "D", text: "$x = 5 \\text{ or } x = 6$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Find two numbers that multiply to $6$ and add to $-5$: $-2$ and $-3$. So $(x - 2)(x - 3) = 0$, giving $x = 2$ or $x = 3$.\n\n**The Full Solution:**\nTo factor $x^2 + bx + c$, find two numbers whose product is $c$ and whose sum is $b$. Here $c = 6$, $b = -5$:\nNumbers: $-2$ and $-3$ (since $-2 \\cdot -3 = 6$ and $-2 + -3 = -5$).\n\n$x^2 - 5x + 6 = (x - 2)(x - 3) = 0$\n$x = 2$ or $x = 3$.\n\nVerification: $2^2 - 5(2) + 6 = 4 - 10 + 6 = 0$ \\checkmark; $3^2 - 5(3) + 6 = 9 - 15 + 6 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — flips the signs of both roots.\n* Choice C: \"stops one step early\" — uses $c = 6$ as a root.\n* Choice D: \"wrong base\" — confuses sum and product with the roots themselves.\n\n**Test Day Takeaway:** When factoring $x^2 + bx + c$, look for two numbers with product $c$ and sum $b$. The roots are the OPPOSITES of those numbers.",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    {
      id: 9,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A store buys a pair of shoes for $\\$60$ and sells it for $\\$84$. What is the percent markup?",
      correctAnswer: "40",
      explanation: "**SAT Pattern: Percent Change / Markup**\n\n**The correct answer is $40$.**\n\n**The Fast Way (~10s):** Markup $= 84 - 60 = 24$. Percent $= \\dfrac{24}{60} \\times 100 = 40\\%$.\n\n**The Full Solution:**\nPercent change $= \\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$.\nHere old (cost) $= 60$, new (selling price) $= 84$:\n$\\dfrac{84 - 60}{60} \\times 100 = \\dfrac{24}{60} \\times 100 = 0.4 \\times 100 = 40\\%$.\n\n**Common Mistakes to Avoid:**\n* Using the new price as the denominator: $\\frac{24}{84} \\approx 28.57\\%$.\n* Reporting the dollar amount of markup ($24$) instead of the percent.\n\n**Test Day Takeaway:** Percent change always uses the ORIGINAL value as the denominator: $\\dfrac{\\text{change}}{\\text{original}} \\times 100\\%$.",
      skills: ["percent-change", "percents"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the slope of the line passing through the points $(2, 1)$ and $(6, 9)$?",
      choices: [
        // distractor: switches Δx and Δy
        { id: "A", text: "$\\dfrac{1}{2}$" },
        { id: "B", text: "$2$" },
        // distractor: adds instead of subtracts
        { id: "C", text: "$\\dfrac{10}{8}$" },
        // distractor: subtracts the wrong way
        { id: "D", text: "$-2$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Slope $= \\dfrac{\\Delta y}{\\Delta x} = \\dfrac{9 - 1}{6 - 2} = \\dfrac{8}{4} = 2$.\n\n**The Full Solution:**\nSlope formula: $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$.\nUsing $(x_1, y_1) = (2, 1)$ and $(x_2, y_2) = (6, 9)$:\n$m = \\dfrac{9 - 1}{6 - 2} = \\dfrac{8}{4} = 2$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — flips the formula: $\\frac{\\Delta x}{\\Delta y}$.\n* Choice C: \"wrong operation\" — adds the coordinates instead of subtracting.\n* Choice D: \"wrong sign\" — subtracts in the wrong direction.\n\n**Test Day Takeaway:** Slope $=$ rise over run $= \\dfrac{y_2 - y_1}{x_2 - x_1}$. Pick a consistent order: subtract the same point's coordinates first in both numerator and denominator.",
      skills: ["slope-from-points", "slope"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A bag contains $4$ red marbles, $5$ blue marbles, and $11$ green marbles. If a marble is selected at random, what is the probability that it is blue?",
      choices: [
        // distractor: uses red count instead of blue
        { id: "A", text: "$\\dfrac{4}{20}$" },
        { id: "B", text: "$\\dfrac{5}{20}$" },
        // distractor: uses green count instead of blue
        { id: "C", text: "$\\dfrac{11}{20}$" },
        // distractor: divides by the count of OTHER marbles
        { id: "D", text: "$\\dfrac{5}{15}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Basic Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Total marbles $= 4 + 5 + 11 = 20$. P(blue) $= \\dfrac{5}{20}$.\n\n**The Full Solution:**\nProbability $= \\dfrac{\\text{favorable outcomes}}{\\text{total outcomes}}$.\nFavorable: blue marbles $= 5$.\nTotal: $4 + 5 + 11 = 20$ marbles.\n$P(\\text{blue}) = \\dfrac{5}{20} = \\dfrac{1}{4}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses the red count instead of blue.\n* Choice C: \"wrong base\" — uses the green count instead of blue.\n* Choice D: \"applies the inverse operation\" — divides by NON-blue marbles ($4 + 11 = 15$) rather than total.\n\n**Test Day Takeaway:** Probability denominator $=$ TOTAL outcomes (always include the favorable category in the total).",
      skills: ["probability-basics", "statistics"]
    },
    {
      id: 12,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The volume of a rectangular box with length $5$ in., width $4$ in., and height $3$ in. is $V$ cubic inches. What is the value of $V$?",
      correctAnswer: "60",
      explanation: "**SAT Pattern: Volume of Rectangular Prism**\n\n**The correct answer is $60$.**\n\n**The Fast Way (~5s):** $V = \\ell \\cdot w \\cdot h = 5 \\cdot 4 \\cdot 3 = 60$.\n\n**The Full Solution:**\nVolume of a rectangular prism (box):\n$V = \\ell \\cdot w \\cdot h = 5 \\cdot 4 \\cdot 3 = 60$ cubic inches.\n\n**Common Mistakes to Avoid:**\n* Computing surface area: $2(\\ell w + \\ell h + w h) = 2(20 + 15 + 12) = 94$.\n* Adding dimensions: $5 + 4 + 3 = 12$.\n* Forgetting one dimension: $5 \\cdot 4 = 20$ or $4 \\cdot 3 = 12$.\n\n**Test Day Takeaway:** Box volume $= \\ell \\cdot w \\cdot h$. Always multiply ALL THREE dimensions.",
      skills: ["volume-prism", "volume"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the solution to the system of equations $y = 2x + 1$ and $y = -x + 7$?",
      choices: [
        // distractor: swaps x and y
        { id: "A", text: "$(5, 2)$" },
        { id: "B", text: "$(2, 5)$" },
        // distractor: uses sum instead of solving
        { id: "C", text: "$(3, 7)$" },
        // distractor: uses x = 0 in both
        { id: "D", text: "$(1, 7)$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Set $y = y$: $2x + 1 = -x + 7 \\Rightarrow 3x = 6 \\Rightarrow x = 2$. Then $y = 2(2) + 1 = 5$. Solution: $(2, 5)$.\n\n**The Full Solution:**\nSince both equations equal $y$, set the right-hand sides equal:\n$2x + 1 = -x + 7$\n$3x = 6$\n$x = 2$.\n\nSubstitute back: $y = 2(2) + 1 = 5$.\n\nVerification: in second equation, $y = -2 + 7 = 5$ \\checkmark.\nSolution: $(x, y) = (2, 5)$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — swaps the $x$ and $y$ coordinates.\n* Choice C: \"wrong base\" — adds the constant terms.\n* Choice D: \"stops one step early\" — substitutes $x = 0$ rather than solving.\n\n**Test Day Takeaway:** When two equations are both solved for $y$, set them equal. Solve for $x$, then back-substitute to find $y$.",
      skills: ["substitution-method", "systems-of-equations"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A scientist measures the population of a colony of insects. The population doubles every week. If the population starts at $50$, which expression gives the population after $w$ weeks?",
      choices: [
        // distractor: linear instead of exponential
        { id: "A", text: "$50 + 2w$" },
        { id: "B", text: "$50 \\cdot 2^{w}$" },
        // distractor: confuses base and coefficient
        { id: "C", text: "$2 \\cdot 50^{w}$" },
        // distractor: doubles the starting value once
        { id: "D", text: "$100 + 50w$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Doubling means multiply by $2$ each week. After $w$ weeks: $50 \\cdot 2^{w}$.\n\n**The Full Solution:**\nGeneral exponential model: $P(t) = P_0 \\cdot r^{t}$, where:\n* $P_0 = $ initial value $= 50$\n* $r = $ growth factor (per period) $= 2$ (since population doubles)\n* $t = $ number of periods $= w$.\n\nSo $P(w) = 50 \\cdot 2^{w}$.\n\nCheck: $w = 0 \\Rightarrow P = 50$. $w = 1 \\Rightarrow P = 100$. $w = 2 \\Rightarrow P = 200$ (doubling each week) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — linear ($+2w$) instead of exponential.\n* Choice C: \"applies the inverse operation\" — confuses initial value and growth factor.\n* Choice D: \"stops one step early\" — doubles initial value once, then adds linearly.\n\n**Test Day Takeaway:** \"Doubles every period\" $\\Rightarrow$ multiply by $2^{t}$. \"Triples\" $\\Rightarrow 3^{t}$. \"Halves\" $\\Rightarrow (\\frac{1}{2})^{t}$. Initial value goes OUT FRONT, growth factor is the BASE.",
      skills: ["exponential-growth-decay", "exponent-laws"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In a right triangle, an acute angle $\\theta$ satisfies $\\sin(\\theta) = \\dfrac{3}{5}$. What is the value of $\\cos(\\theta)$?",
      choices: [
        // distractor: gives same fraction
        { id: "A", text: "$\\dfrac{3}{5}$" },
        { id: "B", text: "$\\dfrac{4}{5}$" },
        // distractor: gives tan instead of cos
        { id: "C", text: "$\\dfrac{3}{4}$" },
        // distractor: reciprocal
        { id: "D", text: "$\\dfrac{5}{3}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: SOH-CAH-TOA in a 3-4-5 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $\\sin(\\theta) = \\dfrac{\\text{opp}}{\\text{hyp}} = \\dfrac{3}{5}$, so opp $= 3$, hyp $= 5$. Pythagoras: adjacent $= \\sqrt{25 - 9} = 4$. $\\cos(\\theta) = \\dfrac{\\text{adj}}{\\text{hyp}} = \\dfrac{4}{5}$.\n\n**The Full Solution:**\nFor an acute angle in a right triangle:\n* $\\sin(\\theta) = \\dfrac{\\text{opposite}}{\\text{hypotenuse}}$\n* $\\cos(\\theta) = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}}$\n\nGiven $\\sin(\\theta) = \\frac{3}{5}$: opposite $= 3$, hypotenuse $= 5$.\nFind adjacent via Pythagoras: $\\text{adj}^2 = 5^2 - 3^2 = 25 - 9 = 16 \\Rightarrow \\text{adj} = 4$.\nSo $\\cos(\\theta) = \\dfrac{4}{5}$.\n\nThis is the classic $3$-$4$-$5$ right triangle.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — repeats $\\sin$.\n* Choice C: \"applies the inverse operation\" — gives $\\tan(\\theta) = \\frac{3}{4}$.\n* Choice D: \"applies the inverse operation\" — gives $\\csc(\\theta) = \\frac{5}{3}$.\n\n**Test Day Takeaway:** When you know one trig ratio, draw the right triangle, label two sides, and use Pythagoras to find the third. The $3$-$4$-$5$ triangle appears constantly.",
      skills: ["soh-cah-toa", "right-triangles"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A car travels at a constant speed of $55$ miles per hour. How many miles will the car travel in $4$ hours and $30$ minutes?",
      correctAnswer: "247.5",
      explanation: "**SAT Pattern: Distance = Rate × Time**\n\n**The correct answer is $247.5$.**\n\n**The Fast Way (~10s):** Convert $30$ min to $0.5$ hr. Time $= 4.5$ hr. Distance $= 55 \\times 4.5 = 247.5$ miles.\n\n**The Full Solution:**\nDistance $=$ rate $\\times$ time. Convert time to hours:\n$4$ hr $30$ min $= 4 + \\dfrac{30}{60} = 4.5$ hours.\nDistance $= 55 \\cdot 4.5 = 247.5$ miles.\n\n**Common Mistakes to Avoid:**\n* Treating $4$ hr $30$ min as $4.30$ hr (mixing up time notation): $55 \\times 4.3 = 236.5$.\n* Forgetting to convert the $30$ minutes — using just $4$ hours: $55 \\times 4 = 220$.\n* Adding instead of multiplying: $55 + 4.5 = 59.5$.\n\n**Test Day Takeaway:** Convert all times to a single unit (usually hours) before multiplying. $30$ min $= 0.5$ hr; $15$ min $= 0.25$ hr; $45$ min $= 0.75$ hr.",
      skills: ["unit-conversion", "rate-conversion"]
    },
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "If $3(x - 4) + 2x = 5x - 12$, how many solutions does the equation have?",
      choices: [
        { id: "A", text: "Infinitely many" },
        // distractor: stops one step early
        { id: "B", text: "$0$" },
        // distractor: assumes always 1 solution
        { id: "C", text: "$1$" },
        // distractor: wrong base
        { id: "D", text: "$2$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Distribute: $3x - 12 + 2x = 5x - 12 \\Rightarrow 5x - 12 = 5x - 12$. True for all $x$ $\\Rightarrow$ infinitely many solutions.\n\n**The Full Solution:**\nDistribute on the left: $3(x - 4) + 2x = 3x - 12 + 2x = 5x - 12$.\nThe equation becomes: $5x - 12 = 5x - 12$.\nSubtract $5x$: $-12 = -12$. ALWAYS TRUE.\n\nSince the equation is true for every value of $x$, it has INFINITELY MANY solutions.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong sign\" — confuses identity ($-12 = -12$) with contradiction (would give $0$ solutions).\n* Choice C: \"applies the inverse operation\" — assumes a generic linear equation has exactly one solution.\n* Choice D: \"wrong base\" — quadratic answer.\n\n**Test Day Takeaway:** Simplify both sides fully. Identical sides $\\Rightarrow$ infinitely many solutions. Same variable terms but different constants $\\Rightarrow$ no solutions. Different variable terms $\\Rightarrow$ exactly one solution.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "A circle has center $(0, 0)$ and passes through the point $(3, 4)$. What is the radius of the circle?",
      correctAnswer: "5",
      explanation: "**SAT Pattern: Distance from Center as Radius**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~5s):** Distance from $(0,0)$ to $(3,4)$: $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$. ($3$-$4$-$5$ triple.)\n\n**The Full Solution:**\nThe radius equals the distance from the center to any point on the circle.\nDistance formula: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.\n\n$r = \\sqrt{(3 - 0)^2 + (4 - 0)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.\n\nVerification: equation of the circle is $x^2 + y^2 = 25$, and $3^2 + 4^2 = 25$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Adding without squaring: $3 + 4 = 7$.\n* Forgetting the square root: $25$.\n* Reporting the diameter ($10$) instead of the radius.\n\n**Test Day Takeaway:** A circle's equation $x^2 + y^2 = r^2$ encodes the distance formula. The radius is the distance from the center to any point on the circle.",
      skills: ["circle-equation", "circles"]
    },
    {
      id: 19,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "If $g(x) = x^2 - 2x + 5$, what is the value of $g(-3)$?",
      choices: [
        // distractor: forgets the negative on the linear term
        { id: "A", text: "$8$" },
        { id: "B", text: "$20$" },
        // distractor: doesn't square the negative
        { id: "C", text: "$-10$" },
        // distractor: stops one step early at x^2 - 2x
        { id: "D", text: "$15$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $g(-3) = (-3)^2 - 2(-3) + 5 = 9 + 6 + 5 = 20$.\n\n**The Full Solution:**\nSubstitute $x = -3$ into $g(x) = x^2 - 2x + 5$:\n$g(-3) = (-3)^2 - 2(-3) + 5$\n$= 9 - (-6) + 5$\n$= 9 + 6 + 5$\n$= 20$.\n\nKey: $(-3)^2 = +9$ (squaring removes the sign), and $-2 \\cdot -3 = +6$ (negative times negative is positive).\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — forgets that $-2(-3) = +6$ (uses $-6$ instead).\n* Choice C: \"wrong sign\" — does not square the negative correctly: $(-3)^2 \\neq -9$.\n* Choice D: \"stops one step early\" — computes $9 + 6 = 15$ but forgets to add $5$.\n\n**Test Day Takeaway:** $(-a)^2 = a^2$ ($\\geq 0$). $-2(-a) = +2a$. Track signs carefully when substituting negatives.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "The line $\\ell$ has equation $y = -3x + 2$. Which of the following is the equation of a line parallel to $\\ell$ that passes through the point $(0, -5)$?",
      choices: [
        // distractor: uses perpendicular slope
        { id: "A", text: "$y = \\dfrac{1}{3}x - 5$" },
        { id: "B", text: "$y = -3x - 5$" },
        // distractor: keeps both slope and intercept of original
        { id: "C", text: "$y = -3x + 2$" },
        // distractor: flips the slope sign
        { id: "D", text: "$y = 3x - 5$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Parallel lines have the same slope. Slope $= -3$. The line passes through $(0, -5)$, so $y$-intercept $= -5$. Equation: $y = -3x - 5$.\n\n**The Full Solution:**\nParallel lines share the same slope, so the new line has slope $-3$.\nUse slope-intercept form $y = mx + b$ with $m = -3$ and the point $(0, -5)$.\nSince the point has $x = 0$, the $y$-intercept is $b = -5$.\n\nEquation: $y = -3x - 5$.\n\nVerification: at $(0, -5)$, $y = -3(0) - 5 = -5$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses the perpendicular slope ($\\frac{1}{3}$) instead of the parallel slope.\n* Choice C: \"stops one step early\" — keeps the original line (which doesn't go through $(0, -5)$).\n* Choice D: \"wrong sign\" — flips the sign of the slope to $+3$.\n\n**Test Day Takeaway:** Parallel lines have IDENTICAL slopes. Perpendicular slopes are NEGATIVE RECIPROCALS (flip the fraction AND change the sign).",
      skills: ["parallel-line-slope", "writing-parallel-equation"]
    },
    {
      id: 21,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "A scatterplot shows the relationship between hours studied $x$ and exam score $y$ for $25$ students. The line of best fit is $\\hat{y} = 5x + 50$. According to the model, how many points does the predicted score increase for each additional hour of studying?",
      correctAnswer: "5",
      explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~5s):** In $\\hat{y} = 5x + 50$, the slope $5$ is the predicted increase in $y$ per unit increase in $x$.\n\n**The Full Solution:**\nFor a linear model $\\hat{y} = mx + b$:\n* slope $m$ = predicted change in $y$ per one-unit change in $x$.\n* intercept $b$ = predicted $y$ when $x = 0$.\n\nHere $m = 5$: each additional hour studied predicts an increase of $5$ points.\n\n**Common Mistakes to Avoke:**\n* Reporting $50$ (the intercept — predicted score with $0$ hours studied).\n* Reporting $55$ (the predicted score after $1$ hour: $5(1) + 50$).\n\n**Test Day Takeaway:** In $\\hat{y} = mx + b$, slope $m$ tells you how much $y$ changes per one-unit change in $x$. Intercept $b$ tells you the value of $y$ when $x = 0$.",
      skills: ["linear-functions", "slope"]
    },
    {
      id: 22,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The table shows the number of cars and trucks sold by a dealership over two months.\n\n| | Cars | Trucks | Total |\n|---|---|---|---|\n| March | $40$ | $25$ | $65$ |\n| April | $35$ | $50$ | $85$ |\n| Total | $75$ | $75$ | $150$ |\n\nWhat fraction of all the trucks sold were sold in April?",
      choices: [
        // distractor: total trucks divided by total sales
        { id: "A", text: "$\\dfrac{75}{150}$" },
        // distractor: April trucks divided by April total
        { id: "B", text: "$\\dfrac{50}{85}$" },
        { id: "C", text: "$\\dfrac{50}{75}$" },
        // distractor: April trucks divided by overall total
        { id: "D", text: "$\\dfrac{50}{150}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** \"Of all trucks\" $\\Rightarrow$ denominator $=$ total trucks $= 75$. April trucks $= 50$. Fraction $= \\dfrac{50}{75} = \\dfrac{2}{3}$.\n\n**The Full Solution:**\n\"What fraction of all the trucks\" restricts the sample space to TRUCKS only.\nTotal trucks: $25 + 50 = 75$.\nApril trucks: $50$.\nFraction $= \\dfrac{50}{75} = \\dfrac{2}{3}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — gives the fraction of all sales that were trucks ($\\frac{75}{150}$).\n* Choice B: \"applies the inverse operation\" — gives the fraction of April sales that were trucks.\n* Choice D: \"wrong base\" — uses overall total in the denominator instead of just trucks.\n\n**Test Day Takeaway:** \"Of\" identifies the denominator. \"Of all trucks\" $\\Rightarrow$ trucks total in denominator. \"Of April sales\" $\\Rightarrow$ April total in denominator.",
      skills: ["two-way-table", "conditional-probability"]
    }
  ]
};

export default practiceTest7M2Easy;
