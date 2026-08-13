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
      question: "After giving away $15$ of her stickers, Lena has $27$ stickers left. How many stickers did Lena have at the start?",
      choices: [
        // distractor: subtracts instead of adding back
        { id: "A", text: "$12$" },
        { id: "B", text: "$42$" },
        // distractor: adds 15 twice
        { id: "C", text: "$57$" },
        // distractor: multiplies the two numbers
        { id: "D", text: "$405$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Working Backward from a Result**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** She ended with $27$ after losing $15$, so she started with $27 + 15 = 42$.\n\n**The Full Solution:**\nStep 1: Let $s$ be the starting number of stickers. Giving away $15$ leaves $s - 15$.\nStep 2: Set up the equation: $s - 15 = 27$.\nStep 3: Add $15$ to both sides: $s = 42$.\nStep 4: Check: $42 - 15 = 27$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): subtracts again, $27 - 15$, moving the wrong direction in time.\n* Choice C ($57$): adds the $15$ twice, $27 + 15 + 15$.\n* Choice D ($405$): multiplies $27 \\cdot 15$ — the wrong operation entirely.\n\n**Test Day Takeaway:** To find a starting amount, undo what happened: if something was taken away, add it back. Check by replaying the story forward.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "What is the area, in square inches, of a rectangle with length $9$ inches and width $4$ inches?",
      correctAnswer: "36",
      explanation: "**SAT Pattern: Rectangle Area**\n\n**The correct answer is $36$.**\n\n**The Fast Way (~5s):** Area $= \\ell \\cdot w = 9 \\cdot 4 = 36$ square inches.\n\n**The Full Solution:**\nStep 1: The area of a rectangle is length times width.\nStep 2: $\\text{Area} = 9 \\cdot 4 = 36$ square inches.\n\n**Common Mistakes:** Computing the perimeter $2(9) + 2(4) = 26$; or adding the dimensions $9 + 4 = 13$.\n\n**Test Day Takeaway:** Rectangle area $= \\ell \\cdot w$; rectangle perimeter $= 2\\ell + 2w$. Read which one the question wants.",
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
      explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Replace every $x$ with $3$: $f(3) = 4(3) - 5 = 12 - 5 = 7$.\n\n**The Full Solution:**\nStep 1: $f(x) = 4x - 5$ means substitute the input wherever $x$ appears.\nStep 2: $f(3) = 4(3) - 5 = 12 - 5 = 7$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): added instead of multiplied — $3 + 4 - 5 = 2$.\n* Choice C ($12$): stopped at $4(3) = 12$ without subtracting $5$.\n* Choice D ($17$): added $5$ instead of subtracting — $12 + 5 = 17$.\n\n**Test Day Takeaway:** $f(a)$ means substitute $a$ for $x$ everywhere in the rule, then evaluate by order of operations.",
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
      explanation: "**SAT Pattern: Proportion / Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $15$ cups of orange is $5$ batches of the $3$-cup ratio, and each batch uses $2$ cups of pineapple, so $5 \\cdot 2 = 10$ cups.\n\n**The Full Solution:**\nStep 1: Keep matching categories aligned: $\\frac{\\text{orange}}{\\text{pineapple}} = \\frac{3}{2} = \\frac{15}{p}$.\nStep 2: Cross-multiply: $3p = 2 \\cdot 15 = 30$.\nStep 3: Divide by $3$: $p = 10$ cups.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): reported the batch multiplier ($15 \\div 3$) instead of the pineapple amount.\n* Choice B ($15$): just copied the orange-juice amount.\n* Choice D ($22.5$): flipped the ratio, solving $\\frac{2}{3} = \\frac{15}{p}$.\n\n**Test Day Takeaway:** In a proportion, keep the same category on top of both fractions, then cross-multiply.",
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
      explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** In $y = mx + b$, the $y$-intercept is the constant $b$, so it is $5$.\n\n**The Full Solution:**\nStep 1: $y = 2x + 5$ is in slope-intercept form $y = mx + b$, with $m = 2$ and $b = 5$.\nStep 2: The $y$-intercept is the value of $y$ when $x = 0$: $y = 2(0) + 5 = 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reported the slope $m$ instead of the $y$-intercept.\n* Choice C ($-2.5$): found the $x$-intercept, solving $0 = 2x + 5 \\Rightarrow x = -\\frac{5}{2}$.\n* Choice D ($7$): added slope and intercept ($2 + 5$).\n\n**Test Day Takeaway:** In $y = mx + b$, $m$ is the slope and $b$ is the $y$-intercept — the $y$-value when $x = 0$.",
      skills: ["slope-intercept-form", "linear-functions"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "A right triangle has legs of length $6$ and $8$. What is the length of the hypotenuse?",
      correctAnswer: "10",
      explanation: "**SAT Pattern: Pythagorean Theorem (3-4-5 Family)**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~5s):** $6$-$8$-$10$ is the $3$-$4$-$5$ triple scaled by $2$, so the hypotenuse is $10$.\n\n**The Full Solution:**\nStep 1: By the Pythagorean theorem, $c^2 = a^2 + b^2 = 6^2 + 8^2 = 36 + 64 = 100$.\nStep 2: $c = \\sqrt{100} = 10$.\n\n**Common Mistakes:** Adding the legs without squaring ($6 + 8 = 14$); forgetting the square root and reporting $100$.\n\n**Test Day Takeaway:** Memorize the common triples $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$ and their multiples (like $6$-$8$-$10$) to skip the arithmetic.",
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
      explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The five values must total $5 \\cdot 14 = 70$. The four given sum to $54$, so the fifth is $70 - 54 = 16$.\n\n**The Full Solution:**\nStep 1: Mean times count equals the total sum: $5 \\cdot 14 = 70$.\nStep 2: Add the four known values: $10 + 12 + 15 + 17 = 54$.\nStep 3: The fifth value is $70 - 54 = 16$. Check: $\\frac{70}{5} = 14$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($13.5$): averaged only the four given numbers, $\\frac{54}{4}$.\n* Choice B ($40$): subtracted the mean from the four-number sum, $54 - 14$, instead of subtracting from the required total.\n* Choice D ($70$): reported the required total sum instead of the missing value.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ total sum. To find a missing term, subtract the known sum from that total.",
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
      explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Find two numbers that multiply to $6$ and add to $-5$: $-2$ and $-3$. So $(x - 2)(x - 3) = 0$, giving $x = 2$ or $x = 3$.\n\n**The Full Solution:**\nStep 1: To factor $x^2 + bx + c$, find two numbers with product $c = 6$ and sum $b = -5$. Those are $-2$ and $-3$.\nStep 2: Factor: $x^2 - 5x + 6 = (x - 2)(x - 3) = 0$.\nStep 3: Set each factor to zero: $x = 2$ or $x = 3$. Check: $2^2 - 5(2) + 6 = 0$ and $3^2 - 5(3) + 6 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = -2$ or $x = -3$): used the factor numbers as roots without flipping their signs.\n* Choice C ($x = 6$): mistook the constant $c$ for a root.\n* Choice D ($x = 5$ or $x = 6$): confused the coefficients $5$ and $6$ with the solutions.\n\n**Test Day Takeaway:** For $x^2 + bx + c$, find two numbers with product $c$ and sum $b$; the roots are the opposite signs of those numbers.",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    {
      id: 9,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A store buys a pair of shoes for $\\$60$ and sells it for $\\$84$. What is the percent markup?",
      correctAnswer: "40",
      explanation: "**SAT Pattern: Percent Change / Markup**\n\n**The correct answer is $40$.**\n\n**The Fast Way (~10s):** Markup $= 84 - 60 = 24$, and $\\frac{24}{60} \\times 100 = 40\\%$.\n\n**The Full Solution:**\nStep 1: Percent change $= \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$, using the original cost $60$ as the base.\nStep 2: $\\frac{84 - 60}{60} \\times 100 = \\frac{24}{60} \\times 100 = 0.4 \\times 100 = 40\\%$.\n\n**Common Mistakes:** Dividing by the new price ($\\frac{24}{84} \\approx 28.6\\%$); reporting the dollar markup $24$ instead of the percent.\n\n**Test Day Takeaway:** Percent change always divides by the original value: $\\frac{\\text{change}}{\\text{original}} \\times 100\\%$.",
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
      explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $\\text{slope} = \\frac{\\Delta y}{\\Delta x} = \\frac{9 - 1}{6 - 2} = \\frac{8}{4} = 2$.\n\n**The Full Solution:**\nStep 1: Use $m = \\frac{y_2 - y_1}{x_2 - x_1}$ with $(x_1, y_1) = (2, 1)$ and $(x_2, y_2) = (6, 9)$.\nStep 2: $m = \\frac{9 - 1}{6 - 2} = \\frac{8}{4} = 2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{2}$): flipped the formula to $\\frac{\\Delta x}{\\Delta y}$.\n* Choice C ($\\frac{10}{8}$): added coordinates ($9 + 1$ over $6 + 2$) instead of subtracting.\n* Choice D ($-2$): subtracted in opposite directions in numerator and denominator.\n\n**Test Day Takeaway:** Slope is rise over run, $\\frac{y_2 - y_1}{x_2 - x_1}$. Subtract the same point's coordinates first in both top and bottom.",
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
      explanation: "**SAT Pattern: Basic Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Total marbles $= 4 + 5 + 11 = 20$, and $5$ are blue, so $P(\\text{blue}) = \\frac{5}{20}$.\n\n**The Full Solution:**\nStep 1: Probability $= \\frac{\\text{favorable}}{\\text{total}}$.\nStep 2: Favorable blue $= 5$; total $= 4 + 5 + 11 = 20$.\nStep 3: $P(\\text{blue}) = \\frac{5}{20}$, which matches Choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{4}{20}$): used the red count in the numerator.\n* Choice C ($\\frac{11}{20}$): used the green count in the numerator.\n* Choice D ($\\frac{5}{15}$): divided by the non-blue marbles ($4 + 11 = 15$) instead of the total.\n\n**Test Day Takeaway:** The probability denominator is the total of all outcomes — the favorable category is included in that total.",
      skills: ["probability-basics", "statistics"]
    },
    {
      id: 12,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The volume of a rectangular box with length $5$ in., width $4$ in., and height $3$ in. is $V$ cubic inches. What is the value of $V$?",
      correctAnswer: "60",
      explanation: "**SAT Pattern: Volume of Rectangular Prism**\n\n**The correct answer is $60$.**\n\n**The Fast Way (~5s):** $V = \\ell \\cdot w \\cdot h = 5 \\cdot 4 \\cdot 3 = 60$ cubic inches.\n\n**The Full Solution:**\nStep 1: A rectangular box has volume $V = \\ell \\cdot w \\cdot h$.\nStep 2: $V = 5 \\cdot 4 \\cdot 3 = 60$ cubic inches.\n\n**Common Mistakes:** Computing surface area $2(\\ell w + \\ell h + w h) = 94$; adding dimensions ($5 + 4 + 3 = 12$); or multiplying only two of the three dimensions.\n\n**Test Day Takeaway:** Box volume multiplies all three dimensions: $V = \\ell \\cdot w \\cdot h$.",
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
      explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Both equations equal $y$, so set them equal: $2x + 1 = -x + 7 \\Rightarrow 3x = 6 \\Rightarrow x = 2$. Then $y = 2(2) + 1 = 5$, giving $(2, 5)$.\n\n**The Full Solution:**\nStep 1: Since both right-hand sides equal $y$, set them equal: $2x + 1 = -x + 7$.\nStep 2: Solve for $x$: $3x = 6 \\Rightarrow x = 2$.\nStep 3: Back-substitute into either equation: $y = 2(2) + 1 = 5$. Check the second: $y = -(2) + 7 = 5$. $\\checkmark$ The solution is $(2, 5)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(5, 2)$): the correct numbers, but the coordinates are swapped — $x = 2$, not $5$.\n* Choice C ($(3, 7)$): a point on neither line; $7$ is the second line's intercept, not the intersection.\n* Choice D ($(1, 7)$): stops early using $x = 1$ instead of solving $3x = 6$.\n\n**Test Day Takeaway:** When two equations are both solved for $y$, set the right-hand sides equal in one step, solve for $x$, then back-substitute for $y$.",
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
      explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Doubling means multiply by $2$ each week, so after $w$ weeks the population is $50 \\cdot 2^{w}$.\n\n**The Full Solution:**\nStep 1: An exponential model has the form $P = P_0 \\cdot r^{t}$, where $P_0$ is the starting value and $r$ is the growth factor per period.\nStep 2: Here $P_0 = 50$ and \"doubles every week\" means $r = 2$ with $t = w$.\nStep 3: So $P = 50 \\cdot 2^{w}$. Check: $w = 1$ gives $100$, $w = 2$ gives $200$ — doubling each week. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($50 + 2w$): linear growth — adds $2$ each week instead of multiplying by $2$.\n* Choice C ($2 \\cdot 50^{w}$): swaps the roles of the initial value and the growth factor.\n* Choice D ($100 + 50w$): doubles once, then grows linearly.\n\n**Test Day Takeaway:** \"Doubles every period\" means multiply by $2^{t}$. The initial value sits OUT FRONT; the growth factor is the BASE of the exponent.",
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
      explanation: "**SAT Pattern: SOH-CAH-TOA in a 3-4-5 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $\\sin(\\theta) = \\frac{\\text{opp}}{\\text{hyp}} = \\frac{3}{5}$ is the $3$-$4$-$5$ triangle, so the adjacent side is $4$ and $\\cos(\\theta) = \\frac{4}{5}$.\n\n**The Full Solution:**\nStep 1: $\\sin(\\theta) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{3}{5}$, so opposite $= 3$ and hypotenuse $= 5$.\nStep 2: Find the adjacent side by Pythagoras: $\\text{adj} = \\sqrt{5^2 - 3^2} = \\sqrt{16} = 4$.\nStep 3: $\\cos(\\theta) = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{4}{5}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{5}$): just repeats $\\sin(\\theta)$ instead of computing cosine.\n* Choice C ($\\frac{3}{4}$): this is $\\tan(\\theta) = \\frac{\\text{opp}}{\\text{adj}}$, not cosine.\n* Choice D ($\\frac{5}{3}$): this is $\\csc(\\theta)$, the reciprocal of sine.\n\n**Test Day Takeaway:** Given one trig ratio in a right triangle, label the two sides it names, use Pythagoras for the third, then read off the ratio you need. The $3$-$4$-$5$ triangle shows up constantly.",
      skills: ["soh-cah-toa", "right-triangles"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A car travels at a constant speed of $55$ miles per hour. How many miles will the car travel in $4$ hours and $30$ minutes?",
      correctAnswer: "247.5",
      explanation: "**SAT Pattern: Distance = Rate × Time**\n\n**The correct answer is $247.5$.**\n\n**The Fast Way (~10s):** Convert $30$ minutes to $0.5$ hr, so the time is $4.5$ hr. Distance $= 55 \\times 4.5 = 247.5$ miles.\n\n**The Full Solution:**\nStep 1: Distance $=$ rate $\\times$ time, so convert the time to a single unit (hours).\nStep 2: $4$ hr $30$ min $= 4 + \\frac{30}{60} = 4.5$ hours.\nStep 3: Distance $= 55 \\cdot 4.5 = 247.5$ miles.\n\n**Common Mistakes:** Treating $4$ hr $30$ min as $4.3$ hr gives $236.5$; using only $4$ hours gives $220$; adding instead of multiplying gives $59.5$.\n\n**Test Day Takeaway:** Convert every time to one unit before multiplying. $30$ min $= 0.5$ hr, $15$ min $= 0.25$ hr, $45$ min $= 0.75$ hr.",
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
      explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Distribute the left side: $3x - 12 + 2x = 5x - 12$, which matches the right side exactly. A true-for-all-$x$ identity has infinitely many solutions.\n\n**The Full Solution:**\nStep 1: Distribute: $3(x - 4) + 2x = 3x - 12 + 2x = 5x - 12$.\nStep 2: The equation becomes $5x - 12 = 5x - 12$.\nStep 3: Subtract $5x$ from both sides: $-12 = -12$, which is always true. The equation holds for every value of $x$, so there are infinitely many solutions.\n\n**Why the wrong answers are tempting:**\n* Choice B ($0$): this is the count for a contradiction (e.g. $-12 = -11$), not an identity.\n* Choice C ($1$): assumes any linear equation has one solution, ignoring that both sides are identical.\n* Choice D ($2$): a quadratic-style answer; this equation has no $x^2$ term.\n\n**Test Day Takeaway:** Simplify both sides fully. Identical sides mean infinitely many solutions; same variable term but different constants means no solutions; different variable terms mean exactly one solution.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "A circle in the $xy$-plane has equation $(x - 3)^2 + (y + 2)^2 = 36$. What is the radius of the circle?",
      correctAnswer: "6",
      explanation: "**SAT Pattern: Reading the Radius from a Circle Equation**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~5s):** In $(x - h)^2 + (y - k)^2 = r^2$, the right side is $r^2$. Here $r^2 = 36$, so $r = 6$.\n\n**The Full Solution:**\nStep 1: The standard form of a circle is $(x - h)^2 + (y - k)^2 = r^2$ with center $(h, k)$ and radius $r$.\nStep 2: Match the given equation: center $(3, -2)$ and $r^2 = 36$.\nStep 3: Take the positive square root: $r = \\sqrt{36} = 6$.\n\n**Common Mistakes:** Reporting $36$ (that is $r^2$, not $r$); halving instead of square-rooting ($\\frac{36}{2} = 18$); or reading the center's coordinates as if they affected the radius.\n\n**Test Day Takeaway:** In circle standard form, the number on the right is $r^2$ — always square-root it. The center is $(h, k)$ with the SIGNS FLIPPED from what appears inside the parentheses.",
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
      explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $g(-3) = (-3)^2 - 2(-3) + 5 = 9 + 6 + 5 = 20$.\n\n**The Full Solution:**\nStep 1: Substitute $x = -3$ into $g(x) = x^2 - 2x + 5$.\nStep 2: $g(-3) = (-3)^2 - 2(-3) + 5$. Note $(-3)^2 = 9$ (squaring removes the sign) and $-2(-3) = +6$ (negative times negative is positive).\nStep 3: $g(-3) = 9 + 6 + 5 = 20$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): treats $-2(-3)$ as $-6$, giving $9 - 6 + 5 = 8$.\n* Choice C ($-10$): mistakes $(-3)^2$ for $-9$ and mishandles the middle term's sign.\n* Choice D ($15$): computes $9 + 6 = 15$ but forgets to add the $+5$.\n\n**Test Day Takeaway:** $(-a)^2 = a^2 \\ge 0$ and $-2(-a) = +2a$. Wrap negative inputs in parentheses and track every sign.",
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
      explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Parallel means same slope, $-3$. The point $(0, -5)$ is on the $y$-axis, so the intercept is $-5$, giving $y = -3x - 5$.\n\n**The Full Solution:**\nStep 1: Parallel lines share a slope, so the new line has slope $m = -3$.\nStep 2: Use $y = mx + b$. Since the point $(0, -5)$ has $x = 0$, it is the $y$-intercept, so $b = -5$.\nStep 3: The equation is $y = -3x - 5$. Check: at $x = 0$, $y = -5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = \\frac{1}{3}x - 5$): uses the perpendicular slope, not the parallel one.\n* Choice C ($y = -3x + 2$): keeps the original line, which does not pass through $(0, -5)$.\n* Choice D ($y = 3x - 5$): flips the sign of the slope to $+3$.\n\n**Test Day Takeaway:** Parallel lines have identical slopes. Perpendicular slopes are negative reciprocals — flip the fraction and change the sign.",
      skills: ["parallel-line-slope", "writing-parallel-equation"]
    },
    {
      id: 21,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "The scatterplot below shows the relationship between hours studied $x$ and exam score $y$ for $25$ students. The line of best fit is $\\hat{y} = 5x + 50$. According to the model, how many points does the predicted score increase for each additional hour of studying?",
      diagram: { type: "scatterplot", params: {
        points: [[1,52],[2,58],[3,68],[4,66],[5,78],[6,76],[7,88],[8,86],[9,98]],
        xMin: 0, xMax: 10, yMin: 40, yMax: 105,
        xGridStep: 1, yGridStep: 5, xLabelStep: 2, yLabelStep: 10,
        xLabel: "Hours studied", yLabel: "Exam score",
        bestFitLine: { slope: 5, intercept: 50 },
      } },
      correctAnswer: "5",
      explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~5s):** In $\\hat{y} = 5x + 50$, the slope $5$ is the predicted change in $y$ per one-unit increase in $x$ — here, $5$ points per extra hour.\n\n**The Full Solution:**\nStep 1: For a linear model $\\hat{y} = mx + b$, the slope $m$ is the predicted change in $y$ for each one-unit increase in $x$.\nStep 2: Here $x$ is hours studied and $y$ is exam score, with $m = 5$.\nStep 3: So each additional hour studied predicts an increase of $5$ points.\n\n**Common Mistakes:** Reporting $50$ (the intercept — the predicted score at $0$ hours) or $55$ (the predicted score after exactly $1$ hour, $5(1) + 50$).\n\n**Test Day Takeaway:** In $\\hat{y} = mx + b$, the slope $m$ is the per-unit rate of change and the intercept $b$ is the value when $x = 0$.",
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
      explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** \"Of all trucks\" sets the denominator to total trucks, $75$. April trucks $= 50$, so the fraction is $\\frac{50}{75}$.\n\n**The Full Solution:**\nStep 1: \"What fraction of all the trucks\" restricts the sample to trucks only, so the denominator is the truck total.\nStep 2: Total trucks $= 25 + 50 = 75$ (the Trucks-column total).\nStep 3: April trucks $= 50$, so the fraction is $\\frac{50}{75}$, which equals $\\frac{2}{3}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{75}{150}$): the fraction of all sales that were trucks, not of trucks sold in April.\n* Choice B ($\\frac{50}{85}$): the fraction of April sales that were trucks (uses the April row total).\n* Choice D ($\\frac{50}{150}$): uses the grand total instead of just the trucks total.\n\n**Test Day Takeaway:** The word \"of\" names the denominator. \"Of all trucks\" means the trucks total goes on the bottom; \"of April sales\" would mean the April total.",
      skills: ["two-way-table", "conditional-probability"]
    }
  ]
};

export default practiceTest7M2Easy;
