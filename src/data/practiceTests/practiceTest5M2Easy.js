// Practice Test 5 — Math Module 2 Easy variant (22 questions)
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Domain mix: 7 Algebra / 6 Advanced Math / 5 Problem-Solving / 4 Geometry & Trig.

export const practiceTest5M2Easy = {
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
      question: "If $5x - 7 = 18$, what is the value of $x$?",
      choices: [
        // distractor: applies inverse — subtracts 7 instead of adding
        { id: "A", text: "$2.2$" },
        { id: "B", text: "$5$" },
        // distractor: stops one step early — skips dividing by 5
        { id: "C", text: "$25$" },
        // distractor: divides 18 by 5 without first adding 7
        { id: "D", text: "$3.6$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Add $7$, then divide by $5$: $5x = 25 \\Rightarrow x = 5$.\n\n**The Full Solution:**\n$5x - 7 = 18$\n$5x = 18 + 7 = 25$\n$x = \\dfrac{25}{5} = 5$.\n\nVerification: $5(5) - 7 = 25 - 7 = 18$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — subtracts $7$ instead of adding ($\\frac{18-7}{5} = 2.2$).\n* Choice C: \"stops one step early\" — gives $5x$ instead of $x$.\n* Choice D: \"wrong order\" — divides $18$ by $5$ before adding the $7$.\n\n**Test Day Takeaway:** Solve linear equations by undoing operations in REVERSE order: undo addition/subtraction first, then multiplication/division.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "What is the perimeter, in centimeters, of a square with side length $7$ centimeters?",
      correctAnswer: "28",
      explanation: "**SAT Pattern: Square Perimeter**\n\n**The correct answer is $28$.**\n\n**The Fast Way (~5s):** Perimeter $= 4s = 4 \\cdot 7 = 28$.\n\n**The Full Solution:**\nA square has $4$ equal sides, so its perimeter equals $4$ times one side length:\nPerimeter $= 4 \\cdot 7 = 28$ cm.\n\n**Common Mistakes to Avoid:**\n* Computing the area: $7^2 = 49$.\n* Adding only two sides: $7 + 7 = 14$.\n\n**Test Day Takeaway:** Square perimeter $= 4s$. Square area $= s^2$. Read carefully which is requested.",
      skills: ["perimeter", "geometry"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "If $f(x) = 6x + 2$, what is the value of $f(4)$?",
      choices: [
        // distractor: uses 4 + 6 + 2 = 12
        { id: "A", text: "$12$" },
        { id: "B", text: "$26$" },
        // distractor: stops one step early — gives 6(4) without adding 2
        { id: "C", text: "$24$" },
        // distractor: applies inverse — subtracts 2 instead of adding
        { id: "D", text: "$22$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Replace $x$ with $4$: $f(4) = 6(4) + 2 = 24 + 2 = 26$.\n\n**The Full Solution:**\nFunction notation $f(x)$ means \"plug in the input wherever you see $x$.\"\n$f(4) = 6(4) + 2 = 24 + 2 = 26$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong operation\" — adds instead of multiplies: $4 + 6 + 2 = 12$.\n* Choice C: \"stops one step early\" — gives $6(4) = 24$ without adding $2$.\n* Choice D: \"applies the inverse operation\" — subtracts $2$ instead of adding.\n\n**Test Day Takeaway:** $f(a)$ means substitute $a$ for $x$ everywhere in the rule, then follow order of operations.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "A bakery uses $2$ cups of flour for every $5$ cookies. How many cups of flour are needed to make $35$ cookies?",
      choices: [
        // distractor: subtracts 35 - 5 = 30, then halves
        { id: "A", text: "$15$" },
        // distractor: adds 35 + 2 = 37
        { id: "B", text: "$37$" },
        { id: "C", text: "$14$" },
        // distractor: switches the ratio backwards
        { id: "D", text: "$87.5$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Proportion / Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $\\dfrac{2}{5} = \\dfrac{f}{35}$. Cross-multiply: $5f = 70 \\Rightarrow f = 14$.\n\n**The Full Solution:**\nSet up the ratio with matching categories:\n$\\dfrac{\\text{flour}}{\\text{cookies}} = \\dfrac{2}{5} = \\dfrac{f}{35}$.\n\nCross-multiply: $5f = 2 \\cdot 35 = 70$, so $f = 14$ cups.\n\nAlternatively: $35$ cookies $= 7$ batches of $5$. Each batch needs $2$ cups, so total $= 7 \\cdot 2 = 14$ cups.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong operation\" — uses subtraction in the setup.\n* Choice B: \"wrong operation\" — adds $35$ and $2$ instead of using a proportion.\n* Choice D: \"applies the inverse operation\" — flips the ratio: $\\frac{5}{2} = \\frac{f}{35}$.\n\n**Test Day Takeaway:** Match categories on both sides of the proportion. Cross-multiply, then solve.",
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
        // distractor: adds slope and intercept
        { id: "D", text: "$5$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** In $y = mx + b$, the slope is $m = -4$.\n\n**The Full Solution:**\nThe equation $y = -4x + 9$ is in slope-intercept form $y = mx + b$:\n* slope $m = -4$\n* $y$-intercept $b = 9$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — gives the $y$-intercept rather than the slope.\n* Choice C: \"wrong sign\" — drops the negative sign.\n* Choice D: \"wrong operation\" — adds the slope and intercept ($-4 + 9 = 5$).\n\n**Test Day Takeaway:** $y = mx + b$: slope is $m$, $y$-intercept is $b$. Watch for negative signs.",
      skills: ["slope-intercept-form", "linear-functions"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "A right triangle has legs of length $5$ and $12$. What is the length of the hypotenuse?",
      correctAnswer: "13",
      explanation: "**SAT Pattern: Pythagorean Theorem (5-12-13 Triple)**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~5s):** $5$-$12$-$13$ is a classic Pythagorean triple, so the hypotenuse is $13$.\n\n**The Full Solution:**\nBy the Pythagorean theorem: $c^2 = a^2 + b^2$.\n$c^2 = 5^2 + 12^2 = 25 + 144 = 169$\n$c = \\sqrt{169} = 13$.\n\n**Common Mistakes to Avoid:**\n* Adding without squaring: $5 + 12 = 17$.\n* Forgetting the square root: reporting $169$.\n\n**Test Day Takeaway:** Memorize Pythagorean triples: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$. They appear repeatedly.",
      skills: ["pythagorean-theorem", "right-triangles"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The mean of six test scores is $82$. Five of the scores are $78$, $85$, $90$, $76$, and $88$. What is the sixth score?",
      choices: [
        // distractor: averages the five given
        { id: "A", text: "$83.4$" },
        // distractor: gives the total sum needed
        { id: "B", text: "$492$" },
        { id: "C", text: "$75$" },
        // distractor: subtracts mean from sum of five
        { id: "D", text: "$335$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Required total: $6 \\cdot 82 = 492$. Sum of five: $78 + 85 + 90 + 76 + 88 = 417$. Sixth: $492 - 417 = 75$.\n\n**The Full Solution:**\nMean $= \\dfrac{\\text{sum of values}}{\\text{number of values}}$.\n$82 = \\dfrac{78 + 85 + 90 + 76 + 88 + x}{6}$\n$492 = 417 + x$\n$x = 75$.\n\nVerification: $\\dfrac{78 + 85 + 90 + 76 + 88 + 75}{6} = \\dfrac{492}{6} = 82$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — averages only the five known scores ($\\frac{417}{5} = 83.4$).\n* Choice B: \"stops one step early\" — gives the required total ($492$) instead of the missing score.\n* Choice D: \"wrong operation\" — subtracts $82$ from $417$.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ total. Subtract the known sum from the required total to find the missing value.",
      skills: ["calculate-mean", "statistics"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What are the solutions to $x^2 - 7x + 10 = 0$?",
      choices: [
        // distractor: signs flipped
        { id: "A", text: "$x = -2 \\text{ or } x = -5$" },
        { id: "B", text: "$x = 2 \\text{ or } x = 5$" },
        // distractor: sum and product mistaken for roots
        { id: "C", text: "$x = 7 \\text{ or } x = 10$" },
        // distractor: drops one root
        { id: "D", text: "$x = 10$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Find two numbers with product $10$ and sum $-7$: $-2$ and $-5$. So $(x - 2)(x - 5) = 0$, giving $x = 2$ or $x = 5$.\n\n**The Full Solution:**\nTo factor $x^2 + bx + c$, find two numbers whose product is $c$ and whose sum is $b$. Here $c = 10$, $b = -7$:\nNumbers: $-2$ and $-5$.\n\n$x^2 - 7x + 10 = (x - 2)(x - 5) = 0$\n$x = 2$ or $x = 5$.\n\nVerification: $2^2 - 7(2) + 10 = 4 - 14 + 10 = 0$ \\checkmark; $5^2 - 7(5) + 10 = 25 - 35 + 10 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — flips signs of both roots.\n* Choice C: \"wrong base\" — confuses sum/product with the roots themselves.\n* Choice D: \"stops one step early\" — gives only one of the two roots.\n\n**Test Day Takeaway:** Roots of $(x - p)(x - q) = 0$ are the OPPOSITES of what's inside the parentheses. $-2$ and $-5$ in factoring become $+2$ and $+5$ as roots.",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    {
      id: 9,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "What is $25\\%$ of $80$?",
      correctAnswer: "20",
      explanation: "**SAT Pattern: Basic Percent of a Number**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~5s):** $25\\% = \\dfrac{1}{4}$, so $25\\%$ of $80 = \\dfrac{80}{4} = 20$.\n\n**The Full Solution:**\nConvert percent to decimal: $25\\% = 0.25$.\n$0.25 \\cdot 80 = 20$.\n\nOr use the fraction equivalent: $\\dfrac{25}{100} = \\dfrac{1}{4}$, so $\\dfrac{1}{4} \\cdot 80 = 20$.\n\n**Common Mistakes to Avoid:**\n* Adding $25 + 80 = 105$.\n* Subtracting $80 - 25 = 55$.\n* Computing $25 \\cdot 80 = 2000$ (forgetting to convert percent to decimal).\n\n**Test Day Takeaway:** Common percent-to-fraction conversions: $25\\% = \\frac{1}{4}$, $50\\% = \\frac{1}{2}$, $75\\% = \\frac{3}{4}$, $20\\% = \\frac{1}{5}$, $10\\% = \\frac{1}{10}$.",
      skills: ["percents", "percent-of-number"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the slope of the line passing through $(1, 3)$ and $(5, 11)$?",
      choices: [
        // distractor: switches Δy and Δx
        { id: "A", text: "$\\dfrac{1}{2}$" },
        { id: "B", text: "$2$" },
        // distractor: adds instead of subtracts
        { id: "C", text: "$\\dfrac{14}{6}$" },
        // distractor: subtracts in wrong direction
        { id: "D", text: "$-2$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Slope $= \\dfrac{\\Delta y}{\\Delta x} = \\dfrac{11 - 3}{5 - 1} = \\dfrac{8}{4} = 2$.\n\n**The Full Solution:**\nSlope formula: $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$.\nUsing $(x_1, y_1) = (1, 3)$ and $(x_2, y_2) = (5, 11)$:\n$m = \\dfrac{11 - 3}{5 - 1} = \\dfrac{8}{4} = 2$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — flips the formula: $\\frac{\\Delta x}{\\Delta y}$.\n* Choice C: \"wrong operation\" — adds the coordinates instead of subtracting.\n* Choice D: \"wrong sign\" — subtracts in the wrong direction.\n\n**Test Day Takeaway:** Slope $=$ rise over run $= \\dfrac{y_2 - y_1}{x_2 - x_1}$. Subtract in the SAME order in numerator and denominator.",
      skills: ["slope-from-points", "slope"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A jar contains $6$ red, $9$ green, and $5$ yellow candies. If one candy is selected at random, what is the probability that it is green?",
      choices: [
        // distractor: uses red count
        { id: "A", text: "$\\dfrac{6}{20}$" },
        { id: "B", text: "$\\dfrac{9}{20}$" },
        // distractor: divides by non-green count
        { id: "C", text: "$\\dfrac{9}{11}$" },
        // distractor: uses yellow count
        { id: "D", text: "$\\dfrac{5}{20}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Basic Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Total candies $= 6 + 9 + 5 = 20$. P(green) $= \\dfrac{9}{20}$.\n\n**The Full Solution:**\nProbability $= \\dfrac{\\text{favorable}}{\\text{total}}$.\nFavorable: $9$ green candies.\nTotal: $6 + 9 + 5 = 20$.\n$P(\\text{green}) = \\dfrac{9}{20}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses red count instead of green.\n* Choice C: \"applies the inverse operation\" — divides by non-green ($6 + 5 = 11$) instead of total.\n* Choice D: \"wrong base\" — uses yellow count.\n\n**Test Day Takeaway:** Probability denominator is the TOTAL, including the favorable category itself.",
      skills: ["probability-basics", "statistics"]
    },
    {
      id: 12,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The volume of a rectangular box with length $6$ in., width $5$ in., and height $4$ in. is $V$ cubic inches. What is the value of $V$?",
      correctAnswer: "120",
      explanation: "**SAT Pattern: Volume of Rectangular Prism**\n\n**The correct answer is $120$.**\n\n**The Fast Way (~5s):** $V = \\ell \\cdot w \\cdot h = 6 \\cdot 5 \\cdot 4 = 120$.\n\n**The Full Solution:**\nVolume of a rectangular prism (box):\n$V = \\ell \\cdot w \\cdot h = 6 \\cdot 5 \\cdot 4 = 120$ cubic inches.\n\n**Common Mistakes to Avoid:**\n* Computing surface area instead of volume.\n* Adding dimensions: $6 + 5 + 4 = 15$.\n* Multiplying only two dimensions: $6 \\cdot 5 = 30$.\n\n**Test Day Takeaway:** Box volume $= \\ell \\cdot w \\cdot h$. Multiply ALL three dimensions.",
      skills: ["volume-prism", "volume"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the solution $(x, y)$ to the system $y = 3x - 2$ and $y = x + 4$?",
      choices: [
        // distractor: swaps coordinates
        { id: "A", text: "$(7, 3)$" },
        { id: "B", text: "$(3, 7)$" },
        // distractor: adds the two right-hand sides
        { id: "C", text: "$(2, 6)$" },
        // distractor: uses x = 0
        { id: "D", text: "$(0, 4)$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Set $y = y$: $3x - 2 = x + 4 \\Rightarrow 2x = 6 \\Rightarrow x = 3$. Then $y = 3 + 4 = 7$. Solution: $(3, 7)$.\n\n**The Full Solution:**\nBoth equations are solved for $y$, so set the right-hand sides equal:\n$3x - 2 = x + 4$\n$2x = 6$\n$x = 3$.\n\nSubstitute back: $y = 3 + 4 = 7$.\nSolution: $(3, 7)$.\n\nVerification: $y = 3(3) - 2 = 7$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — swaps $x$ and $y$ values.\n* Choice C: \"wrong base\" — uses an arbitrary plug-in.\n* Choice D: \"stops one step early\" — uses $x = 0$ before solving.\n\n**Test Day Takeaway:** When two equations are solved for $y$, set them equal and solve for $x$. Then back-substitute to find $y$.",
      skills: ["substitution-method", "systems-of-equations"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A bacteria colony triples every hour. If the population starts at $20$, which expression gives the population after $h$ hours?",
      choices: [
        // distractor: linear instead of exponential
        { id: "A", text: "$20 + 3h$" },
        { id: "B", text: "$20 \\cdot 3^{h}$" },
        // distractor: confuses base and coefficient
        { id: "C", text: "$3 \\cdot 20^{h}$" },
        // distractor: tripled value once and added linearly
        { id: "D", text: "$60 + 20h$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Tripling means multiply by $3$ each hour. After $h$ hours: $20 \\cdot 3^{h}$.\n\n**The Full Solution:**\nGeneral exponential model: $P(t) = P_0 \\cdot r^{t}$, where $P_0$ is initial value and $r$ is the growth factor per period.\nHere $P_0 = 20$, $r = 3$, $t = h$:\n$P(h) = 20 \\cdot 3^{h}$.\n\nCheck: $h = 0 \\Rightarrow 20$. $h = 1 \\Rightarrow 60$. $h = 2 \\Rightarrow 180$ (tripling each hour) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — linear ($+3h$) instead of exponential.\n* Choice C: \"applies the inverse operation\" — flips initial value and growth factor.\n* Choice D: \"stops one step early\" — triples once, then adds linearly.\n\n**Test Day Takeaway:** \"Triples every period\" $\\Rightarrow$ multiply by $3^{t}$. Initial value goes IN FRONT; growth factor is the BASE of the exponent.",
      skills: ["exponential-growth-decay", "exponent-laws"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In a right triangle, an acute angle $\\theta$ satisfies $\\cos(\\theta) = \\dfrac{4}{5}$. What is the value of $\\sin(\\theta)$?",
      choices: [
        // distractor: keeps same fraction
        { id: "A", text: "$\\dfrac{4}{5}$" },
        { id: "B", text: "$\\dfrac{3}{5}$" },
        // distractor: gives tan
        { id: "C", text: "$\\dfrac{3}{4}$" },
        // distractor: reciprocal
        { id: "D", text: "$\\dfrac{5}{4}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: SOH-CAH-TOA in a 3-4-5 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $\\cos(\\theta) = \\dfrac{\\text{adj}}{\\text{hyp}} = \\dfrac{4}{5}$, so adj $= 4$, hyp $= 5$. Pythagoras: opp $= \\sqrt{25 - 16} = 3$. $\\sin(\\theta) = \\dfrac{3}{5}$.\n\n**The Full Solution:**\n* $\\cos(\\theta) = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}}$\n* $\\sin(\\theta) = \\dfrac{\\text{opposite}}{\\text{hypotenuse}}$\n\nGiven $\\cos(\\theta) = \\frac{4}{5}$: adjacent $= 4$, hypotenuse $= 5$.\nFind opposite via Pythagoras: $\\text{opp}^2 = 5^2 - 4^2 = 25 - 16 = 9 \\Rightarrow \\text{opp} = 3$.\nSo $\\sin(\\theta) = \\dfrac{3}{5}$.\n\nThis is the classic $3$-$4$-$5$ right triangle.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — repeats the value of $\\cos$.\n* Choice C: \"applies the inverse operation\" — gives $\\tan(\\theta) = \\frac{3}{4}$.\n* Choice D: \"applies the inverse operation\" — gives $\\sec(\\theta) = \\frac{5}{4}$.\n\n**Test Day Takeaway:** Given one trig ratio in a right triangle, sketch the triangle, label two sides, and use Pythagoras to find the third.",
      skills: ["soh-cah-toa", "right-triangles"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A train travels at a constant speed of $60$ miles per hour. How many miles will it travel in $3$ hours and $15$ minutes?",
      correctAnswer: "195",
      explanation: "**SAT Pattern: Distance = Rate × Time**\n\n**The correct answer is $195$.**\n\n**The Fast Way (~10s):** Convert $15$ min to $0.25$ hr. Time $= 3.25$ hr. Distance $= 60 \\times 3.25 = 195$.\n\n**The Full Solution:**\nDistance $=$ rate $\\times$ time. Convert time to hours:\n$3$ hr $15$ min $= 3 + \\dfrac{15}{60} = 3.25$ hours.\nDistance $= 60 \\cdot 3.25 = 195$ miles.\n\n**Common Mistakes to Avoid:**\n* Treating $3$ hr $15$ min as $3.15$ hr: $60 \\times 3.15 = 189$.\n* Ignoring the $15$ minutes entirely: $60 \\times 3 = 180$.\n\n**Test Day Takeaway:** Convert minutes to a decimal portion of an hour: $15$ min $= 0.25$ hr; $30$ min $= 0.5$ hr; $45$ min $= 0.75$ hr.",
      skills: ["unit-conversion", "rate-conversion"]
    },
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "If $4(x + 2) - 3x = x + 8$, how many solutions does the equation have?",
      choices: [
        { id: "A", text: "Infinitely many" },
        // distractor: confuses identity with no solutions
        { id: "B", text: "$0$" },
        // distractor: assumes one solution
        { id: "C", text: "$1$" },
        // distractor: quadratic-like answer
        { id: "D", text: "$2$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Identifying Identity Equations**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Distribute: $4x + 8 - 3x = x + 8 \\Rightarrow x + 8 = x + 8$. Always true $\\Rightarrow$ infinitely many solutions.\n\n**The Full Solution:**\nDistribute on the left: $4(x + 2) - 3x = 4x + 8 - 3x = x + 8$.\nThe equation becomes $x + 8 = x + 8$.\nSubtract $x$: $8 = 8$. ALWAYS TRUE.\n\nSince every value of $x$ satisfies the equation, there are INFINITELY MANY solutions.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong sign\" — confuses identity with contradiction (which gives $0$ solutions).\n* Choice C: \"applies the inverse operation\" — assumes a generic linear equation has one solution.\n* Choice D: \"wrong base\" — quadratic-style answer.\n\n**Test Day Takeaway:** After simplifying, identical sides $\\Rightarrow$ infinitely many. Same $x$-coefficient but different constants $\\Rightarrow$ no solutions. Different $x$-coefficients $\\Rightarrow$ exactly one solution.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "A circle has center $(0, 0)$ and passes through the point $(8, 6)$. What is the radius of the circle?",
      correctAnswer: "10",
      explanation: "**SAT Pattern: Radius via Distance Formula**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~5s):** Distance from $(0, 0)$ to $(8, 6)$: $\\sqrt{8^2 + 6^2} = \\sqrt{100} = 10$. ($6$-$8$-$10$ triangle, $2 \\times$ the $3$-$4$-$5$ triple.)\n\n**The Full Solution:**\nThe radius is the distance from the center to any point on the circle.\nDistance formula: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.\n$r = \\sqrt{(8 - 0)^2 + (6 - 0)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$.\n\nVerification: equation of circle is $x^2 + y^2 = 100$, and $8^2 + 6^2 = 100$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Adding without squaring: $8 + 6 = 14$.\n* Forgetting the square root: $100$.\n* Reporting diameter ($20$) instead of radius.\n\n**Test Day Takeaway:** Circle equation $x^2 + y^2 = r^2$ encodes the distance formula. Radius $=$ distance from center to any point on the circle.",
      skills: ["circle-equation", "circles"]
    },
    {
      id: 19,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "If $h(x) = x^2 + 4x - 1$, what is the value of $h(-2)$?",
      choices: [
        // distractor: doesn't square the negative correctly
        { id: "A", text: "$-13$" },
        // distractor: forgets sign on linear term
        { id: "B", text: "$11$" },
        { id: "C", text: "$-5$" },
        // distractor: stops at x^2 + 4x
        { id: "D", text: "$-4$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $h(-2) = (-2)^2 + 4(-2) - 1 = 4 - 8 - 1 = -5$.\n\n**The Full Solution:**\nSubstitute $x = -2$ into $h(x) = x^2 + 4x - 1$:\n$h(-2) = (-2)^2 + 4(-2) - 1$\n$= 4 + (-8) - 1$\n$= 4 - 8 - 1$\n$= -5$.\n\nKey: $(-2)^2 = +4$ (squaring removes the sign), and $4 \\cdot (-2) = -8$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — does not square the negative properly: treats $(-2)^2$ as $-4$.\n* Choice B: \"wrong sign\" — forgets that $4(-2) = -8$ (uses $+8$).\n* Choice D: \"stops one step early\" — computes $4 - 8 = -4$ but forgets to subtract $1$.\n\n**Test Day Takeaway:** $(-a)^2 = a^2$ ($\\geq 0$). Track signs carefully when substituting negatives. Use parentheses around the negative input.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "Line $\\ell$ has equation $y = 2x + 1$. Which of the following is the equation of a line parallel to $\\ell$ that passes through the point $(0, 7)$?",
      choices: [
        // distractor: perpendicular slope
        { id: "A", text: "$y = -\\dfrac{1}{2}x + 7$" },
        { id: "B", text: "$y = 2x + 7$" },
        // distractor: keeps original line
        { id: "C", text: "$y = 2x + 1$" },
        // distractor: flips the slope sign
        { id: "D", text: "$y = -2x + 7$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Parallel lines share slope, so slope $= 2$. Line passes through $(0, 7)$, so $y$-intercept $= 7$. Equation: $y = 2x + 7$.\n\n**The Full Solution:**\nParallel lines have IDENTICAL slopes. New slope $= 2$.\nThe point $(0, 7)$ has $x = 0$, so the $y$-intercept is $7$.\nEquation: $y = 2x + 7$.\n\nVerification: at $(0, 7)$, $y = 2(0) + 7 = 7$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses perpendicular slope ($-\\frac{1}{2}$) instead of the parallel slope.\n* Choice C: \"stops one step early\" — keeps the original equation (which doesn't pass through $(0, 7)$).\n* Choice D: \"wrong sign\" — flips the slope sign.\n\n**Test Day Takeaway:** Parallel $\\Rightarrow$ same slope. Perpendicular $\\Rightarrow$ negative reciprocal of the slope (flip the fraction AND change the sign).",
      skills: ["parallel-line-slope", "writing-parallel-equation"]
    },
    {
      id: 21,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "The scatterplot below shows the relationship between minutes exercised per day $x$ and resting heart rate $y$ for $30$ adults. The line of best fit is $\\hat{y} = -0.4x + 78$. According to the model, by how many beats per minute does resting heart rate decrease for each additional minute of daily exercise?",
      diagram: { type: "scatterplot", params: {
        points: [[10,76],[20,72],[30,68],[40,60],[50,60],[60,52],[70,52],[80,44],[90,42]],
        xMin: 0, xMax: 100, yMin: 30, yMax: 90,
        xGridStep: 10, yGridStep: 5, xLabelStep: 20, yLabelStep: 10,
        xLabel: "Daily exercise (min)", yLabel: "Resting heart rate",
        bestFitLine: { slope: -0.4, intercept: 78 },
      } },
      correctAnswer: ".4",
      explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $0.4$.**\n\n**The Fast Way (~10s):** Slope $= -0.4$ means $y$ decreases by $0.4$ for each unit increase in $x$.\n\n**The Full Solution:**\nFor a linear model $\\hat{y} = mx + b$:\n* slope $m$ = predicted change in $y$ per one-unit change in $x$.\n* intercept $b$ = predicted $y$ when $x = 0$.\n\nHere $m = -0.4$: each additional minute of exercise predicts a decrease of $0.4$ beats per minute. The DECREASE is $0.4$ (the magnitude of the slope).\n\n**Common Mistakes to Avoid:**\n* Reporting $-0.4$ — the question asks for the size of the decrease, which is positive.\n* Reporting $78$ (the intercept).\n* Reporting $77.6$ (the predicted heart rate after $1$ minute).\n\n**Test Day Takeaway:** In $\\hat{y} = mx + b$, slope $m$ tells you how much $y$ changes per one-unit change in $x$. Negative slope $\\Rightarrow$ decrease.",
      skills: ["linear-functions", "slope"]
    },
    {
      id: 22,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The table shows the number of items sold by category in two stores.\n\n| | Books | Toys | Total |\n|---|---|---|---|\n| Store A | $30$ | $50$ | $80$ |\n| Store B | $45$ | $35$ | $80$ |\n| Total | $75$ | $85$ | $160$ |\n\nWhat fraction of all the books sold were sold at Store B?",
      choices: [
        // distractor: total books over total sales
        { id: "A", text: "$\\dfrac{75}{160}$" },
        // distractor: Store B books over Store B total
        { id: "B", text: "$\\dfrac{45}{80}$" },
        { id: "C", text: "$\\dfrac{45}{75}$" },
        // distractor: Store B books over overall total
        { id: "D", text: "$\\dfrac{45}{160}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** \"Of all books\" $\\Rightarrow$ denominator $=$ total books $= 75$. Store B books $= 45$. Fraction $= \\dfrac{45}{75} = \\dfrac{3}{5}$.\n\n**The Full Solution:**\n\"What fraction of all the books\" restricts the sample to BOOKS only.\nTotal books: $30 + 45 = 75$.\nStore B books: $45$.\nFraction $= \\dfrac{45}{75} = \\dfrac{3}{5}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — fraction of all sales that were books.\n* Choice B: \"applies the inverse operation\" — fraction of Store B sales that were books.\n* Choice D: \"wrong base\" — uses overall total instead of just books.\n\n**Test Day Takeaway:** \"Of\" identifies the denominator. \"Of all books\" $\\Rightarrow$ books total. \"Of Store B\" $\\Rightarrow$ Store B total.",
      skills: ["two-way-table", "conditional-probability"]
    }
  ]
};

export default practiceTest5M2Easy;
