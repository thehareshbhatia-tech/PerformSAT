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
      explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Undo the $-7$ first, then the $\\times 5$: $5x = 25 \\Rightarrow x = 5$.\n\n**The Full Solution:**\nStep 1: Add $7$ to both sides: $5x - 7 = 18 \\Rightarrow 5x = 25$.\nStep 2: Divide by $5$: $x = \\frac{25}{5} = 5$.\nStep 3: Check: $5(5) - 7 = 25 - 7 = 18$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2.2$): subtracted $7$ instead of adding it, then divided: $\\frac{18 - 7}{5} = 2.2$.\n* Choice C ($25$): stopped at $5x = 25$ and forgot to divide by $5$.\n* Choice D ($3.6$): divided $18$ by $5$ before dealing with the $-7$.\n\n**Test Day Takeaway:** Undo a linear equation in reverse order: clear the added or subtracted constant first, then divide by the coefficient.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "What is the perimeter, in centimeters, of a square with side length $7$ centimeters?",
      correctAnswer: "28",
      explanation: "**SAT Pattern: Square Perimeter**\n\n**The correct answer is $28$.**\n\n**The Fast Way (~5s):** A square's perimeter is $4s = 4 \\cdot 7 = 28$ cm.\n\n**The Full Solution:**\nStep 1: A square has $4$ equal sides, so its perimeter is $4$ times one side.\nStep 2: $4 \\cdot 7 = 28$ centimeters.\n\n**Common Mistakes:** Computing the area $7^2 = 49$; adding only two sides for $7 + 7 = 14$.\n\n**Test Day Takeaway:** Square perimeter $= 4s$; square area $= s^2$. Read which one the question asks for.",
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
      explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Substitute $x = 4$: $f(4) = 6(4) + 2 = 26$.\n\n**The Full Solution:**\nStep 1: $f(x) = 6x + 2$ means replace every $x$ with the input.\nStep 2: $f(4) = 6(4) + 2 = 24 + 2 = 26$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): added instead of multiplying, $4 + 6 + 2 = 12$.\n* Choice C ($24$): stopped at $6(4) = 24$ and forgot to add $2$.\n* Choice D ($22$): subtracted $2$ instead of adding it.\n\n**Test Day Takeaway:** $f(a)$ means substitute $a$ for $x$ everywhere, then follow order of operations.",
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
      explanation: "**SAT Pattern: Proportion / Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $35$ cookies is $7$ batches of $5$, and each batch needs $2$ cups, so $7 \\cdot 2 = 14$ cups.\n\n**The Full Solution:**\nStep 1: Set up matching categories: $\\frac{\\text{flour}}{\\text{cookies}} = \\frac{2}{5} = \\frac{f}{35}$.\nStep 2: Cross-multiply: $5f = 2 \\cdot 35 = 70$.\nStep 3: Divide: $f = \\frac{70}{5} = 14$ cups.\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): mis-set the proportion using subtraction.\n* Choice B ($37$): added $35 + 2$ instead of scaling the ratio.\n* Choice D ($87.5$): flipped the ratio to $\\frac{5}{2} = \\frac{f}{35}$, giving $f = 87.5$.\n\n**Test Day Takeaway:** Keep the same category on top in both fractions, then cross-multiply and solve.",
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
      explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** In $y = mx + b$, the coefficient of $x$ is the slope: $m = -4$.\n\n**The Full Solution:**\nStep 1: $y = -4x + 9$ is already in slope-intercept form $y = mx + b$.\nStep 2: Match terms: slope $m = -4$, $y$-intercept $b = 9$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): read the $y$-intercept $b$ instead of the slope.\n* Choice C ($4$): dropped the negative sign on the coefficient.\n* Choice D ($5$): added slope and intercept, $-4 + 9 = 5$.\n\n**Test Day Takeaway:** In $y = mx + b$, the slope is the number multiplying $x$ — sign included.",
      skills: ["slope-intercept-form", "linear-functions"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "A right triangle has legs of length $5$ and $12$. What is the length of the hypotenuse?",
      correctAnswer: "13",
      explanation: "**SAT Pattern: Pythagorean Theorem (5-12-13 Triple)**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~5s):** $5$-$12$-$13$ is a classic Pythagorean triple, so the hypotenuse is $13$.\n\n**The Full Solution:**\nStep 1: Apply $c^2 = a^2 + b^2$ with legs $5$ and $12$.\nStep 2: $c^2 = 5^2 + 12^2 = 25 + 144 = 169$.\nStep 3: $c = \\sqrt{169} = 13$.\n\n**Common Mistakes:** Adding without squaring for $5 + 12 = 17$; stopping at $c^2 = 169$ and forgetting the square root.\n\n**Test Day Takeaway:** Memorize the common triples — $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$ — to skip the arithmetic.",
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
      explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Required total is $6 \\cdot 82 = 492$; the five known scores sum to $417$, so the sixth is $492 - 417 = 75$.\n\n**The Full Solution:**\nStep 1: Mean $\\times$ count $=$ total, so the six scores must sum to $6 \\cdot 82 = 492$.\nStep 2: Add the five known scores: $78 + 85 + 90 + 76 + 88 = 417$.\nStep 3: Subtract: sixth score $= 492 - 417 = 75$.\nStep 4: Check: $\\frac{492}{6} = 82$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($83.4$): averaged only the five known scores, $\\frac{417}{5} = 83.4$.\n* Choice B ($492$): reported the required total instead of the missing score.\n* Choice D ($335$): subtracted in the wrong direction, $417 - 82 = 335$.\n\n**Test Day Takeaway:** Mean $\\times$ count gives the total; subtract the known sum to recover a missing value.",
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
      explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Find two numbers with product $10$ and sum $-7$: that's $-2$ and $-5$, so $(x - 2)(x - 5) = 0$ and $x = 2$ or $x = 5$.\n\n**The Full Solution:**\nStep 1: For $x^2 + bx + c$, find two numbers whose product is $c = 10$ and whose sum is $b = -7$.\nStep 2: Those numbers are $-2$ and $-5$, so $x^2 - 7x + 10 = (x - 2)(x - 5)$.\nStep 3: Set each factor to $0$: $x = 2$ or $x = 5$.\nStep 4: Check: $2^2 - 7(2) + 10 = 0$ and $5^2 - 7(5) + 10 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = -2$ or $x = -5$): used the factor numbers as roots without flipping their signs.\n* Choice C ($x = 7$ or $x = 10$): mistook $b$ and $c$ for the roots.\n* Choice D ($x = 10$): solved only part of the equation and reported one wrong value.\n\n**Test Day Takeaway:** The roots of $(x - p)(x - q) = 0$ are $+p$ and $+q$ — the opposite sign of what sits inside each factor.",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    {
      id: 9,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "What is $25\\%$ of $80$?",
      correctAnswer: "20",
      explanation: "**SAT Pattern: Basic Percent of a Number**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~5s):** $25\\% = \\frac{1}{4}$, so $25\\%$ of $80$ is $\\frac{80}{4} = 20$.\n\n**The Full Solution:**\nStep 1: Convert: $25\\% = 0.25$ (or $\\frac{1}{4}$).\nStep 2: Multiply by the whole: $0.25 \\cdot 80 = 20$.\n\n**Common Mistakes:** Adding $25 + 80 = 105$; subtracting $80 - 25 = 55$; computing $25 \\cdot 80 = 2000$ without converting the percent.\n\n**Test Day Takeaway:** \"Percent of\" means multiply by the decimal or fraction form: $25\\% = \\frac{1}{4}$, $50\\% = \\frac{1}{2}$, $20\\% = \\frac{1}{5}$.",
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
      explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Slope $= \\frac{\\Delta y}{\\Delta x} = \\frac{11 - 3}{5 - 1} = \\frac{8}{4} = 2$.\n\n**The Full Solution:**\nStep 1: Use $m = \\frac{y_2 - y_1}{x_2 - x_1}$ with $(1, 3)$ and $(5, 11)$.\nStep 2: $m = \\frac{11 - 3}{5 - 1} = \\frac{8}{4} = 2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{2}$): inverted the formula to $\\frac{\\Delta x}{\\Delta y}$.\n* Choice C ($\\frac{14}{6}$): added coordinates instead of subtracting, $\\frac{11 + 3}{5 + 1}$.\n* Choice D ($-2$): subtracted in opposite orders top and bottom, flipping the sign.\n\n**Test Day Takeaway:** Slope is rise over run, $\\frac{y_2 - y_1}{x_2 - x_1}$ — subtract in the same order in both the numerator and denominator.",
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
      explanation: "**SAT Pattern: Basic Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Total candies $= 6 + 9 + 5 = 20$, and $9$ are green, so $P(\\text{green}) = \\frac{9}{20}$.\n\n**The Full Solution:**\nStep 1: Probability $= \\frac{\\text{favorable}}{\\text{total}}$.\nStep 2: Favorable (green) $= 9$; total $= 6 + 9 + 5 = 20$.\nStep 3: $P(\\text{green}) = \\frac{9}{20}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{6}{20}$): used the red count in the numerator.\n* Choice C ($\\frac{9}{11}$): divided by the non-green count $6 + 5 = 11$ instead of the total.\n* Choice D ($\\frac{5}{20}$): used the yellow count in the numerator.\n\n**Test Day Takeaway:** The probability denominator is the full total, including the favorable group itself.",
      skills: ["probability-basics", "statistics"]
    },
    {
      id: 12,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The volume of a rectangular box with length $6$ in., width $5$ in., and height $4$ in. is $V$ cubic inches. What is the value of $V$?",
      correctAnswer: "120",
      explanation: "**SAT Pattern: Volume of Rectangular Prism**\n\n**The correct answer is $120$.**\n\n**The Fast Way (~5s):** Multiply all three dimensions: $6 \\cdot 5 \\cdot 4 = 120$ cubic inches.\n\n**The Full Solution:**\nStep 1: A box's volume is $V = \\ell \\cdot w \\cdot h$.\nStep 2: $V = 6 \\cdot 5 \\cdot 4 = 120$ cubic inches.\n\n**Common Mistakes:** Adding dimensions for $6 + 5 + 4 = 15$; multiplying only two for $6 \\cdot 5 = 30$; computing surface area instead of volume.\n\n**Test Day Takeaway:** Rectangular-box volume is length $\\times$ width $\\times$ height — multiply all three dimensions.",
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
      explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Both equations are solved for $y$, so set them equal: $3x - 2 = x + 4 \\Rightarrow 2x = 6 \\Rightarrow x = 3$. Then $y = 3 + 4 = 7$, giving $(3, 7)$.\n\n**The Full Solution:**\nStep 1: Both right-hand sides equal $y$, so they equal each other: $3x - 2 = x + 4$.\nStep 2: Subtract $x$ from both sides: $2x - 2 = 4$, then add $2$: $2x = 6$, so $x = 3$.\nStep 3: Substitute into the simpler equation: $y = x + 4 = 3 + 4 = 7$.\nStep 4: Check the other equation: $y = 3(3) - 2 = 7$. $\\checkmark$ The solution is $(3, 7)$.\n\n**Why the wrong answers are tempting:**\n* Choice A $(7, 3)$: swaps the $x$- and $y$-values — $7$ is $y$, not $x$.\n* Choice C $(2, 6)$: an arbitrary point that satisfies neither equation.\n* Choice D $(0, 4)$: stops at the $y$-intercept of the second line instead of solving the system.\n\n**Test Day Takeaway:** When both equations are already solved for the same variable, set the expressions equal, solve for the other variable, then back-substitute.",
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
      explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** \"Triples every hour\" means multiply by $3$ each hour, starting from $20$. After $h$ hours: $20 \\cdot 3^{h}$.\n\n**The Full Solution:**\nStep 1: An exponential model has the form $P(h) = P_0 \\cdot r^{h}$, where $P_0$ is the starting amount and $r$ is the per-hour growth factor.\nStep 2: Here $P_0 = 20$ and tripling gives $r = 3$, so $P(h) = 20 \\cdot 3^{h}$.\nStep 3: Sanity-check: $h = 0$ gives $20$; $h = 1$ gives $60$; $h = 2$ gives $180$ — each hour is $3$ times the last. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A $20 + 3h$: linear growth — adds $3$ each hour instead of multiplying.\n* Choice C $3 \\cdot 20^{h}$: swaps the roles — uses $20$ as the base and $3$ as the starting amount.\n* Choice D $60 + 20h$: triples once for the first hour, then grows linearly after.\n\n**Test Day Takeaway:** \"Triples/doubles/halves every period\" signals exponential. The starting value sits in front; the growth factor is the base raised to the time variable.",
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
      explanation: "**SAT Pattern: SOH-CAH-TOA in a 3-4-5 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $\\cos(\\theta) = \\frac{\\text{adj}}{\\text{hyp}} = \\frac{4}{5}$ means adjacent $= 4$, hypotenuse $= 5$. That is the $3$-$4$-$5$ triangle, so opposite $= 3$ and $\\sin(\\theta) = \\frac{3}{5}$.\n\n**The Full Solution:**\nStep 1: $\\cos(\\theta) = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$, so adjacent $= 4$ and hypotenuse $= 5$.\nStep 2: Find the opposite side with Pythagoras: $\\text{opp}^2 = 5^2 - 4^2 = 25 - 16 = 9$, so opposite $= 3$.\nStep 3: $\\sin(\\theta) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{3}{5}$.\n\n**Why the wrong answers are tempting:**\n* Choice A $\\frac{4}{5}$: just repeats the value of $\\cos(\\theta)$.\n* Choice C $\\frac{3}{4}$: this is $\\tan(\\theta) = \\frac{\\text{opp}}{\\text{adj}}$, not $\\sin$.\n* Choice D $\\frac{5}{4}$: this is $\\sec(\\theta) = \\frac{1}{\\cos(\\theta)}$, the reciprocal of cosine.\n\n**Test Day Takeaway:** Given one ratio in a right triangle, label the two named sides, use Pythagoras for the third, then read off the ratio you need. Spot $3$-$4$-$5$ to skip the arithmetic.",
      skills: ["soh-cah-toa", "right-triangles"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A train travels at a constant speed of $60$ miles per hour. How many miles will it travel in $3$ hours and $15$ minutes?",
      correctAnswer: "195",
      explanation: "**SAT Pattern: Distance = Rate × Time**\n\n**The correct answer is $195$.**\n\n**The Fast Way (~10s):** $15$ minutes is $0.25$ hour, so the time is $3.25$ hours. Distance $= 60 \\times 3.25 = 195$ miles.\n\n**The Full Solution:**\nStep 1: Convert the time to hours: $3$ hr $15$ min $= 3 + \\frac{15}{60} = 3.25$ hours.\nStep 2: Apply distance $=$ rate $\\times$ time: $60 \\cdot 3.25 = 195$ miles.\n\n**Common Mistakes:** Writing the time as $3.15$ hours gives $60 \\times 3.15 = 189$; ignoring the extra $15$ minutes gives $60 \\times 3 = 180$.\n\n**Test Day Takeaway:** Convert minutes to a decimal fraction of an hour before multiplying: $15$ min $= 0.25$ hr, $30$ min $= 0.5$ hr, $45$ min $= 0.75$ hr.",
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
      explanation: "**SAT Pattern: Identifying Identity Equations**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Distribute the left side: $4x + 8 - 3x = x + 8$, which is exactly the right side. Identical sides $\\Rightarrow$ infinitely many solutions.\n\n**The Full Solution:**\nStep 1: Expand the left side: $4(x + 2) - 3x = 4x + 8 - 3x = x + 8$.\nStep 2: The equation is now $x + 8 = x + 8$.\nStep 3: Subtract $x$ from both sides: $8 = 8$, which is true for every value of $x$.\nStep 4: Since any $x$ works, there are infinitely many solutions.\n\n**Why the wrong answers are tempting:**\n* Choice B $0$: that is the count for a contradiction (like $8 = 9$), not an identity.\n* Choice C $1$: assumes a generic linear equation, but here both sides are identical.\n* Choice D $2$: a quadratic-style count; this equation is linear.\n\n**Test Day Takeaway:** After simplifying both sides, identical sides $\\Rightarrow$ infinitely many solutions; same $x$-coefficient but different constants $\\Rightarrow$ no solution; different $x$-coefficients $\\Rightarrow$ exactly one solution.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "A circle has center $(0, 0)$ and passes through the point $(8, 6)$. What is the radius of the circle?",
      correctAnswer: "10",
      explanation: "**SAT Pattern: Radius via Distance Formula**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~5s):** The radius is the distance from $(0, 0)$ to $(8, 6)$: $\\sqrt{8^2 + 6^2} = \\sqrt{100} = 10$. This is a $6$-$8$-$10$ triangle, twice the $3$-$4$-$5$.\n\n**The Full Solution:**\nStep 1: The radius equals the distance from the center to any point on the circle.\nStep 2: Apply the distance formula: $r = \\sqrt{(8 - 0)^2 + (6 - 0)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$.\nStep 3: Check with the circle equation $x^2 + y^2 = r^2$: $8^2 + 6^2 = 64 + 36 = 100 = 10^2$. $\\checkmark$\n\n**Common Mistakes:** Adding without squaring gives $8 + 6 = 14$; forgetting the square root leaves $100$; reporting the diameter $20$ instead of the radius.\n\n**Test Day Takeaway:** The equation $x^2 + y^2 = r^2$ is the distance formula in disguise — the radius is the distance from the center to any point on the circle.",
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
      explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $h(-2) = (-2)^2 + 4(-2) - 1 = 4 - 8 - 1 = -5$.\n\n**The Full Solution:**\nStep 1: Substitute $x = -2$ into $h(x) = x^2 + 4x - 1$, using parentheses around the negative.\nStep 2: $(-2)^2 = 4$ (squaring removes the sign) and $4(-2) = -8$.\nStep 3: Combine: $h(-2) = 4 - 8 - 1 = -5$.\n\n**Why the wrong answers are tempting:**\n* Choice A $-13$: treats $(-2)^2$ as $-4$, giving $-4 - 8 - 1$.\n* Choice B $11$: uses $+8$ for $4(-2)$ instead of $-8$, giving $4 + 8 - 1$.\n* Choice D $-4$: stops at $4 - 8 = -4$ and forgets to subtract the final $1$.\n\n**Test Day Takeaway:** $(-a)^2 = a^2 \\ge 0$. Wrap a negative input in parentheses before substituting so the square and the products keep the right signs.",
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
      explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Parallel lines share a slope, so the slope is $2$. The line passes through $(0, 7)$, so the $y$-intercept is $7$: $y = 2x + 7$.\n\n**The Full Solution:**\nStep 1: Parallel lines have identical slopes, so the new line has slope $2$.\nStep 2: The point $(0, 7)$ has $x = 0$, which is the $y$-intercept, so $b = 7$.\nStep 3: Write the equation: $y = 2x + 7$. Check: $2(0) + 7 = 7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A $y = -\\frac{1}{2}x + 7$: uses the perpendicular slope $-\\frac{1}{2}$ instead of the parallel slope $2$.\n* Choice C $y = 2x + 1$: the original line — it has the right slope but does not pass through $(0, 7)$.\n* Choice D $y = -2x + 7$: flips the sign of the slope to $-2$, so the line is no longer parallel.\n\n**Test Day Takeaway:** Parallel means same slope. Perpendicular means the negative reciprocal — flip the fraction and change the sign.",
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
      explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $0.4$.**\n\n**The Fast Way (~10s):** The slope $-0.4$ means $y$ falls by $0.4$ for each one-minute increase in $x$, so the decrease is $0.4$ beats per minute.\n\n**The Full Solution:**\nStep 1: In $\\hat{y} = mx + b$, the slope $m$ is the predicted change in $y$ per one-unit change in $x$.\nStep 2: Here $m = -0.4$, so each extra minute of exercise predicts a change of $-0.4$ beats per minute.\nStep 3: The question asks how much heart rate decreases, which is the size of that change: $0.4$.\n\n**Common Mistakes:** Answering $-0.4$ (the question wants the magnitude of the decrease, a positive number); reporting $78$ (the intercept) or $77.6$ (the predicted heart rate at $x = 1$).\n\n**Test Day Takeaway:** In $\\hat{y} = mx + b$, the slope is the per-unit rate of change. A negative slope means a decrease, and \"how much does it decrease\" asks for the magnitude.",
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
      explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** \"Of all the books\" sets the denominator to total books $= 75$. Store B sold $45$ books, so the fraction is $\\frac{45}{75}$.\n\n**The Full Solution:**\nStep 1: \"What fraction of all the books\" restricts the group to books only, so the denominator is the books total: $30 + 45 = 75$.\nStep 2: The numerator is the books sold at Store B: $45$.\nStep 3: The fraction is $\\frac{45}{75}$, which reduces to $\\frac{3}{5}$.\n\n**Why the wrong answers are tempting:**\n* Choice A $\\frac{75}{160}$: fraction of all sales that were books, not the requested group.\n* Choice B $\\frac{45}{80}$: fraction of Store B's sales that were books (denominator is Store B's total).\n* Choice D $\\frac{45}{160}$: uses the grand total $160$ instead of just the books.\n\n**Test Day Takeaway:** The word \"of\" names the denominator. \"Of all the books\" $\\Rightarrow$ books total; \"of Store B\" $\\Rightarrow$ Store B total.",
      skills: ["two-way-table", "conditional-probability"]
    }
  ]
};

export default practiceTest5M2Easy;
