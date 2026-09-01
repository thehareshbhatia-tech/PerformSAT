// Practice Test 7 — Math Module 2 Easy variant (22 questions)
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Domain mix: 7 Algebra / 6 Advanced Math / 5 Problem-Solving / 4 Geometry & Trig.
// Official-calibration recreation (2026-09-01): all content re-authored fresh
// against the CB register; slot metadata and pattern slugs frozen. Figure
// density lifted to 4 diagram items (linearGraph, rightTriangle, scatterplot,
// twoWayTable). Numeric MC choices sorted ascending.

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
      question: "After selling $23$ of his comic books, Mateo has $41$ comic books left. How many comic books did Mateo have at the start?",
      choices: [
        // distractor: subtracts again instead of adding back
        { id: "A", text: "$18$" },
        { id: "B", text: "$64$" },
        // distractor: adds 23 twice
        { id: "C", text: "$87$" },
        // distractor: multiplies the two numbers
        { id: "D", text: "$943$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Working Backward from a Result**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** He ended with $41$ after selling $23$, so he started with $41 + 23 = 64$.\n\n**The Full Solution:**\nStep 1: Let $c$ be the starting number of comic books. Selling $23$ leaves $c - 23$.\nStep 2: Set up the equation: $c - 23 = 41$.\nStep 3: Add $23$ to both sides: $c = 64$.\nStep 4: Check: $64 - 23 = 41$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($18$): subtracts again, $41 - 23$, moving the wrong direction in time.\n* Choice C ($87$): adds the $23$ twice, $41 + 23 + 23$.\n* Choice D ($943$): multiplies $41 \\cdot 23$ — the wrong operation entirely.\n\n**Test Day Takeaway:** To find a starting amount, undo what happened: if something was taken away, add it back. Check by replaying the story forward.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "What is the area, in square centimeters, of a rectangle with length $12$ centimeters and width $7$ centimeters?",
      correctAnswer: "84",
      explanation: "**SAT Pattern: Rectangle Area**\n\n**The correct answer is $84$.**\n\n**The Fast Way (~5s):** Area $= \\ell \\cdot w = 12 \\cdot 7 = 84$ square centimeters.\n\n**The Full Solution:**\nStep 1: The area of a rectangle is length times width.\nStep 2: $\\text{Area} = 12 \\cdot 7 = 84$ square centimeters.\n\n**Common Mistakes:** Computing the perimeter $2(12) + 2(7) = 38$; or adding the dimensions $12 + 7 = 19$.\n\n**Test Day Takeaway:** Rectangle area $= \\ell \\cdot w$; rectangle perimeter $= 2\\ell + 2w$. Read which one the question wants.",
      skills: ["area", "geometry"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "If $f(x) = 3x + 7$, what is the value of $f(5)$?",
      choices: [
        // distractor: subtracts 7 instead of adding — 15 - 7 = 8
        { id: "A", text: "$8$" },
        // distractor: stops one step early — gives 3(5) without adding 7
        { id: "B", text: "$15$" },
        { id: "C", text: "$22$" },
        // distractor: adds 7 twice — 15 + 7 + 7
        { id: "D", text: "$29$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Replace every $x$ with $5$: $f(5) = 3(5) + 7 = 15 + 7 = 22$.\n\n**The Full Solution:**\nStep 1: $f(x) = 3x + 7$ means substitute the input wherever $x$ appears.\nStep 2: $f(5) = 3(5) + 7 = 15 + 7 = 22$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): subtracted $7$ instead of adding — $15 - 7 = 8$.\n* Choice B ($15$): stopped at $3(5) = 15$ without adding $7$.\n* Choice D ($29$): added the $7$ twice — $15 + 7 + 7 = 29$.\n\n**Test Day Takeaway:** $f(a)$ means substitute $a$ for $x$ everywhere in the rule, then evaluate by order of operations.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "A muralist mixes $4$ parts blue paint with $3$ parts white paint. If the muralist uses $20$ liters of blue paint, how many liters of white paint are needed?",
      choices: [
        // distractor: reports the batch multiplier (20 / 4) instead of the white amount
        { id: "A", text: "$5$" },
        { id: "B", text: "$15$" },
        // distractor: copies the blue-paint amount
        { id: "C", text: "$20$" },
        // distractor: flips the ratio, solving 3/4 = 20/w
        { id: "D", text: "$\\dfrac{80}{3}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Proportion / Ratio**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $20$ liters of blue is $5$ batches of the $4$-liter ratio, and each batch uses $3$ liters of white, so $5 \\cdot 3 = 15$ liters.\n\n**The Full Solution:**\nStep 1: Keep matching categories aligned: $\\frac{\\text{blue}}{\\text{white}} = \\frac{4}{3} = \\frac{20}{w}$.\nStep 2: Cross-multiply: $4w = 3 \\cdot 20 = 60$.\nStep 3: Divide by $4$: $w = 15$ liters.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): reported the batch multiplier ($20 \\div 4$) instead of the white-paint amount.\n* Choice C ($20$): just copied the blue-paint amount.\n* Choice D ($\\frac{80}{3}$): flipped the ratio, solving $\\frac{3}{4} = \\frac{20}{w}$.\n\n**Test Day Takeaway:** In a proportion, keep the same category on top of both fractions, then cross-multiply.",
      skills: ["ratios", "proportions"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "The graph of a linear function is shown in the $xy$-plane. What is the $y$-intercept of the graph?",
      diagram: {
        type: "linearGraph",
        params: {
          slope: -2, yIntercept: 4,
          xRange: [-4, 6], yRange: [-6, 8],
          xTickInterval: 2, yTickInterval: 2, gridInterval: 1,
          showPoints: [[0, 4], [2, 0]]
        }
      },
      choices: [
        // distractor: reads the slope of the line as the intercept
        { id: "A", text: "$-2$" },
        // distractor: reports the x-intercept, where the line crosses the x-axis
        { id: "B", text: "$2$" },
        { id: "C", text: "$4$" },
        // distractor: adds the slope magnitude and the intercept (2 + 4)
        { id: "D", text: "$6$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** The $y$-intercept is where the line crosses the $y$-axis. The graph crosses at $(0, 4)$, so the $y$-intercept is $4$.\n\n**The Full Solution:**\nStep 1: The $y$-intercept is the $y$-value at $x = 0$.\nStep 2: The graphed line passes through $(0, 4)$, so the $y$-intercept is $4$.\nStep 3: Check with the slope: from $(0, 4)$ the line drops $2$ for each step right, reaching $(2, 0)$ — consistent with the graph. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): reports the slope of the line instead of the intercept.\n* Choice B ($2$): reports the $x$-intercept, where the line crosses the $x$-axis.\n* Choice D ($6$): adds the slope magnitude and the intercept.\n\n**Test Day Takeaway:** The $y$-intercept lives on the $y$-axis: read the crossing point at $x = 0$, not where the line meets the $x$-axis.",
      skills: ["slope-intercept-form", "linear-functions"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "The right triangle shown has legs of length $9$ and $12$. What is the length of the hypotenuse?",
      diagram: {
        type: "rightTriangle",
        params: {
          sideLabels: ["9", "12", "?"],
          rightAngleVertex: 1
        }
      },
      correctAnswer: "15",
      explanation: "**SAT Pattern: Pythagorean Theorem (3-4-5 Family)**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~5s):** $9$-$12$-$15$ is the $3$-$4$-$5$ triple scaled by $3$, so the hypotenuse is $15$.\n\n**The Full Solution:**\nStep 1: By the Pythagorean theorem, $c^2 = a^2 + b^2 = 9^2 + 12^2 = 81 + 144 = 225$.\nStep 2: $c = \\sqrt{225} = 15$.\n\n**Common Mistakes:** Adding the legs without squaring ($9 + 12 = 21$); forgetting the square root and reporting $225$.\n\n**Test Day Takeaway:** Memorize the common triples $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$ and their multiples (like $9$-$12$-$15$) to skip the arithmetic.",
      skills: ["pythagorean-theorem", "right-triangles"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The mean of five numbers is $18$. Four of the numbers are $12$, $16$, $20$, and $23$. What is the fifth number?",
      choices: [
        // distractor: averages only the four given numbers
        { id: "A", text: "$17.75$" },
        { id: "B", text: "$19$" },
        // distractor: subtracts the mean from the four-number sum
        { id: "C", text: "$53$" },
        // distractor: stops one step early — gives the required total sum
        { id: "D", text: "$90$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Finding a Missing Value Given the Mean**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The five values must total $5 \\cdot 18 = 90$. The four given sum to $71$, so the fifth is $90 - 71 = 19$.\n\n**The Full Solution:**\nStep 1: Mean times count equals the total sum: $5 \\cdot 18 = 90$.\nStep 2: Add the four known values: $12 + 16 + 20 + 23 = 71$.\nStep 3: The fifth value is $90 - 71 = 19$. Check: $\\frac{90}{5} = 18$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($17.75$): averaged only the four given numbers, $\\frac{71}{4}$.\n* Choice C ($53$): subtracted the mean from the four-number sum, $71 - 18$, instead of subtracting from the required total.\n* Choice D ($90$): reported the required total sum instead of the missing value.\n\n**Test Day Takeaway:** Mean $\\times$ count $=$ total sum. To find a missing term, subtract the known sum from that total.",
      skills: ["calculate-mean", "statistics"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the solution to the equation $x^2 - 9x + 18 = 0$?",
      choices: [
        // distractor: uses the factor numbers as roots without flipping their signs
        { id: "A", text: "$x = -6 \\text{ or } x = -3$" },
        // distractor: picks a factor pair of 18 that does not sum to 9
        { id: "B", text: "$x = 2 \\text{ or } x = 9$" },
        { id: "C", text: "$x = 3 \\text{ or } x = 6$" },
        // distractor: confuses the coefficients 9 and 18 with the solutions
        { id: "D", text: "$x = 9 \\text{ or } x = 18$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Find two numbers that multiply to $18$ and add to $-9$: $-3$ and $-6$. So $(x - 3)(x - 6) = 0$, giving $x = 3$ or $x = 6$.\n\n**The Full Solution:**\nStep 1: To factor $x^2 + bx + c$, find two numbers with product $c = 18$ and sum $b = -9$. Those are $-3$ and $-6$.\nStep 2: Factor: $x^2 - 9x + 18 = (x - 3)(x - 6) = 0$.\nStep 3: Set each factor to zero: $x = 3$ or $x = 6$. Check: $3^2 - 9(3) + 18 = 0$ and $6^2 - 9(6) + 18 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = -6$ or $x = -3$): used the factor numbers as roots without flipping their signs.\n* Choice B ($x = 2$ or $x = 9$): a factor pair of $18$, but $2 + 9 = 11 \\neq 9$ — and the signs don't match either.\n* Choice D ($x = 9$ or $x = 18$): confused the coefficients $9$ and $18$ with the solutions.\n\n**Test Day Takeaway:** For $x^2 + bx + c$, find two numbers with product $c$ and sum $b$; the roots are the opposite signs of those numbers.",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    {
      id: 9,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A store buys a backpack for $\\$40$ and sells it for $\\$50$. What is the percent markup?",
      correctAnswer: "25",
      explanation: "**SAT Pattern: Percent Change / Markup**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~10s):** Markup $= 50 - 40 = 10$, and $\\frac{10}{40} \\times 100 = 25\\%$.\n\n**The Full Solution:**\nStep 1: Percent change $= \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$, using the original cost $40$ as the base.\nStep 2: $\\frac{50 - 40}{40} \\times 100 = \\frac{10}{40} \\times 100 = 0.25 \\times 100 = 25\\%$.\n\n**Common Mistakes:** Dividing by the new price ($\\frac{10}{50} = 20\\%$); reporting the dollar markup $10$ instead of the percent.\n\n**Test Day Takeaway:** Percent change always divides by the original value: $\\frac{\\text{change}}{\\text{original}} \\times 100\\%$.",
      skills: ["percent-change", "percents"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the slope of the line passing through the points $(3, 2)$ and $(7, 14)$?",
      choices: [
        // distractor: subtracts in opposite directions in numerator and denominator
        { id: "A", text: "$-3$" },
        // distractor: flips the formula to Δx over Δy
        { id: "B", text: "$\\dfrac{1}{3}$" },
        // distractor: adds coordinates instead of subtracting
        { id: "C", text: "$\\dfrac{8}{5}$" },
        { id: "D", text: "$3$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** $\\text{slope} = \\frac{\\Delta y}{\\Delta x} = \\frac{14 - 2}{7 - 3} = \\frac{12}{4} = 3$.\n\n**The Full Solution:**\nStep 1: Use $m = \\frac{y_2 - y_1}{x_2 - x_1}$ with $(x_1, y_1) = (3, 2)$ and $(x_2, y_2) = (7, 14)$.\nStep 2: $m = \\frac{14 - 2}{7 - 3} = \\frac{12}{4} = 3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): subtracted in opposite directions in the numerator and denominator.\n* Choice B ($\\frac{1}{3}$): flipped the formula to $\\frac{\\Delta x}{\\Delta y}$.\n* Choice C ($\\frac{8}{5}$): added coordinates ($14 + 2$ over $7 + 3$) instead of subtracting.\n\n**Test Day Takeaway:** Slope is rise over run, $\\frac{y_2 - y_1}{x_2 - x_1}$. Subtract the same point's coordinates first in both top and bottom.",
      skills: ["slope-from-points", "slope"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A crate contains $6$ lemons, $9$ limes, and $10$ oranges. If a piece of fruit is selected at random, what is the probability that it is a lime?",
      choices: [
        // distractor: uses the lemon count instead of the lime count
        { id: "A", text: "$\\dfrac{6}{25}$" },
        { id: "B", text: "$\\dfrac{9}{25}$" },
        // distractor: uses the orange count instead of the lime count
        { id: "C", text: "$\\dfrac{10}{25}$" },
        // distractor: divides by the count of OTHER fruit (6 + 10 = 16)
        { id: "D", text: "$\\dfrac{9}{16}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Basic Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Total fruit $= 6 + 9 + 10 = 25$, and $9$ are limes, so $P(\\text{lime}) = \\frac{9}{25}$.\n\n**The Full Solution:**\nStep 1: Probability $= \\frac{\\text{favorable}}{\\text{total}}$.\nStep 2: Favorable limes $= 9$; total $= 6 + 9 + 10 = 25$.\nStep 3: $P(\\text{lime}) = \\frac{9}{25}$, which matches Choice B.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{6}{25}$): used the lemon count in the numerator.\n* Choice C ($\\frac{10}{25}$): used the orange count in the numerator.\n* Choice D ($\\frac{9}{16}$): divided by the non-lime fruit ($6 + 10 = 16$) instead of the total.\n\n**Test Day Takeaway:** The probability denominator is the total of all outcomes — the favorable category is included in that total.",
      skills: ["probability-basics", "statistics"]
    },
    {
      id: 12,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The volume of a rectangular box with length $8$ in., width $3$ in., and height $4$ in. is $V$ cubic inches. What is the value of $V$?",
      correctAnswer: "96",
      explanation: "**SAT Pattern: Volume of Rectangular Prism**\n\n**The correct answer is $96$.**\n\n**The Fast Way (~5s):** $V = \\ell \\cdot w \\cdot h = 8 \\cdot 3 \\cdot 4 = 96$ cubic inches.\n\n**The Full Solution:**\nStep 1: A rectangular box has volume $V = \\ell \\cdot w \\cdot h$.\nStep 2: $V = 8 \\cdot 3 \\cdot 4 = 96$ cubic inches.\n\n**Common Mistakes:** Computing surface area $2(\\ell w + \\ell h + w h) = 136$; adding dimensions ($8 + 3 + 4 = 15$); or multiplying only two of the three dimensions.\n\n**Test Day Takeaway:** Box volume multiplies all three dimensions: $V = \\ell \\cdot w \\cdot h$.",
      skills: ["volume-prism", "volume"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the solution to the system of equations $y = 3x - 2$ and $y = -2x + 13$?",
      choices: [
        // distractor: plugs x = 0 into the second equation only
        { id: "A", text: "$(0, 13)$" },
        // distractor: stops early with x = 2 instead of solving 5x = 15
        { id: "B", text: "$(2, 4)$" },
        { id: "C", text: "$(3, 7)$" },
        // distractor: swaps the x- and y-coordinates
        { id: "D", text: "$(7, 3)$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Both equations equal $y$, so set them equal: $3x - 2 = -2x + 13 \\Rightarrow 5x = 15 \\Rightarrow x = 3$. Then $y = 3(3) - 2 = 7$, giving $(3, 7)$.\n\n**The Full Solution:**\nStep 1: Since both right-hand sides equal $y$, set them equal: $3x - 2 = -2x + 13$.\nStep 2: Solve for $x$: $5x = 15 \\Rightarrow x = 3$.\nStep 3: Back-substitute into either equation: $y = 3(3) - 2 = 7$. Check the second: $y = -2(3) + 13 = 7$. $\\checkmark$ The solution is $(3, 7)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(0, 13)$): plugs $x = 0$ into the second equation instead of solving the system.\n* Choice B ($(2, 4)$): stops early with $x = 2$ instead of finishing $5x = 15$.\n* Choice D ($(7, 3)$): the correct numbers, but the coordinates are swapped — $x = 3$, not $7$.\n\n**Test Day Takeaway:** When two equations are both solved for $y$, set the right-hand sides equal in one step, solve for $x$, then back-substitute for $y$.",
      skills: ["substitution-method", "systems-of-equations"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The number of people who have heard a rumor triples every day. If $4$ people have heard the rumor on day zero, which expression gives the number of people who have heard it after $d$ days?",
      choices: [
        // distractor: linear instead of exponential — adds 3 each day
        { id: "A", text: "$4 + 3d$" },
        // distractor: swaps the roles of the initial value and the growth factor
        { id: "B", text: "$3 \\cdot 4^{d}$" },
        // distractor: triples once, then grows linearly
        { id: "C", text: "$12 + 3d$" },
        { id: "D", text: "$4 \\cdot 3^{d}$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Exponential Growth Model**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Tripling means multiply by $3$ each day, so after $d$ days the count is $4 \\cdot 3^{d}$.\n\n**The Full Solution:**\nStep 1: An exponential model has the form $P = P_0 \\cdot r^{t}$, where $P_0$ is the starting value and $r$ is the growth factor per period.\nStep 2: Here $P_0 = 4$ and \"triples every day\" means $r = 3$ with $t = d$.\nStep 3: So $P = 4 \\cdot 3^{d}$. Check: $d = 1$ gives $12$, $d = 2$ gives $36$ — tripling each day. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4 + 3d$): linear growth — adds $3$ each day instead of multiplying by $3$.\n* Choice B ($3 \\cdot 4^{d}$): swaps the roles of the initial value and the growth factor.\n* Choice C ($12 + 3d$): triples once, then grows linearly.\n\n**Test Day Takeaway:** \"Triples every period\" means multiply by $3^{t}$. The initial value sits OUT FRONT; the growth factor is the BASE of the exponent.",
      skills: ["exponential-growth-decay", "exponent-laws"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In a right triangle, an acute angle $\\theta$ satisfies $\\sin(\\theta) = \\dfrac{4}{5}$. What is the value of $\\cos(\\theta)$?",
      choices: [
        { id: "A", text: "$\\dfrac{3}{5}$" },
        // distractor: forms adjacent/opposite — the reciprocal of tan(θ)
        { id: "B", text: "$\\dfrac{3}{4}$" },
        // distractor: repeats sin(θ) instead of computing cosine
        { id: "C", text: "$\\dfrac{4}{5}$" },
        // distractor: gives sec(θ), the reciprocal of cosine
        { id: "D", text: "$\\dfrac{5}{3}$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: SOH-CAH-TOA in a 3-4-5 Triangle**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $\\sin(\\theta) = \\frac{\\text{opp}}{\\text{hyp}} = \\frac{4}{5}$ is the $3$-$4$-$5$ triangle, so the adjacent side is $3$ and $\\cos(\\theta) = \\frac{3}{5}$.\n\n**The Full Solution:**\nStep 1: $\\sin(\\theta) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{4}{5}$, so opposite $= 4$ and hypotenuse $= 5$.\nStep 2: Find the adjacent side by Pythagoras: $\\text{adj} = \\sqrt{5^2 - 4^2} = \\sqrt{9} = 3$.\nStep 3: $\\cos(\\theta) = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{3}{5}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{3}{4}$): forms $\\frac{\\text{adjacent}}{\\text{opposite}}$, the reciprocal of $\\tan(\\theta)$.\n* Choice C ($\\frac{4}{5}$): just repeats $\\sin(\\theta)$ instead of computing cosine.\n* Choice D ($\\frac{5}{3}$): this is $\\sec(\\theta)$, the reciprocal of cosine.\n\n**Test Day Takeaway:** Given one trig ratio in a right triangle, label the two sides it names, use Pythagoras for the third, then read off the ratio you need. The $3$-$4$-$5$ triangle shows up constantly.",
      skills: ["soh-cah-toa", "right-triangles"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A freight train travels at a constant speed of $48$ miles per hour. How many miles will the train travel in $2$ hours and $45$ minutes?",
      correctAnswer: "132",
      explanation: "**SAT Pattern: Distance = Rate × Time**\n\n**The correct answer is $132$.**\n\n**The Fast Way (~10s):** Convert $45$ minutes to $0.75$ hr, so the time is $2.75$ hr. Distance $= 48 \\times 2.75 = 132$ miles.\n\n**The Full Solution:**\nStep 1: Distance $=$ rate $\\times$ time, so convert the time to a single unit (hours).\nStep 2: $2$ hr $45$ min $= 2 + \\frac{45}{60} = 2.75$ hours.\nStep 3: Distance $= 48 \\cdot 2.75 = 132$ miles.\n\n**Common Mistakes:** Treating $2$ hr $45$ min as $2.45$ hr gives $117.6$; using only $2$ hours gives $96$; adding instead of multiplying gives $50.75$.\n\n**Test Day Takeaway:** Convert every time to one unit before multiplying. $45$ min $= 0.75$ hr, $30$ min $= 0.5$ hr, $15$ min $= 0.25$ hr.",
      skills: ["unit-conversion", "rate-conversion"]
    },
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "If $4(x - 3) + 5x = 9x - 12$, how many solutions does the equation have?",
      choices: [
        { id: "A", text: "Infinitely many" },
        // distractor: this is the count for a contradiction, not an identity
        { id: "B", text: "$0$" },
        // distractor: assumes any linear equation has exactly one solution
        { id: "C", text: "$1$" },
        // distractor: a quadratic-style answer; there is no x^2 term
        { id: "D", text: "$2$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Distribute the left side: $4x - 12 + 5x = 9x - 12$, which matches the right side exactly. A true-for-all-$x$ identity has infinitely many solutions.\n\n**The Full Solution:**\nStep 1: Distribute: $4(x - 3) + 5x = 4x - 12 + 5x = 9x - 12$.\nStep 2: The equation becomes $9x - 12 = 9x - 12$.\nStep 3: Subtract $9x$ from both sides: $-12 = -12$, which is always true. The equation holds for every value of $x$, so there are infinitely many solutions.\n\n**Why the wrong answers are tempting:**\n* Choice B ($0$): this is the count for a contradiction (e.g. $-12 = -11$), not an identity.\n* Choice C ($1$): assumes any linear equation has one solution, ignoring that both sides are identical.\n* Choice D ($2$): a quadratic-style answer; this equation has no $x^2$ term.\n\n**Test Day Takeaway:** Simplify both sides fully. Identical sides mean infinitely many solutions; same variable term but different constants means no solutions; different variable terms mean exactly one solution.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "A circle in the $xy$-plane has equation $(x + 4)^2 + (y - 7)^2 = 81$. What is the radius of the circle?",
      correctAnswer: "9",
      explanation: "**SAT Pattern: Reading the Radius from a Circle Equation**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~5s):** In $(x - h)^2 + (y - k)^2 = r^2$, the right side is $r^2$. Here $r^2 = 81$, so $r = 9$.\n\n**The Full Solution:**\nStep 1: The standard form of a circle is $(x - h)^2 + (y - k)^2 = r^2$ with center $(h, k)$ and radius $r$.\nStep 2: Match the given equation: center $(-4, 7)$ and $r^2 = 81$.\nStep 3: Take the positive square root: $r = \\sqrt{81} = 9$.\n\n**Common Mistakes:** Reporting $81$ (that is $r^2$, not $r$); halving instead of square-rooting ($\\frac{81}{2} = 40.5$); or reading the center's coordinates as if they affected the radius.\n\n**Test Day Takeaway:** In circle standard form, the number on the right is $r^2$ — always square-root it. The center is $(h, k)$ with the SIGNS FLIPPED from what appears inside the parentheses.",
      skills: ["circle-equation", "circles"]
    },
    {
      id: 19,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "If $g(x) = x^2 - 4x + 3$, what is the value of $g(-2)$?",
      choices: [
        // distractor: both sign errors — treats (-2)^2 as -4 and -4(-2) as -8
        { id: "A", text: "$-9$" },
        // distractor: treats -4(-2) as -8, giving 4 - 8 + 3
        { id: "B", text: "$-1$" },
        // distractor: stops one step early — forgets to add the +3
        { id: "C", text: "$12$" },
        { id: "D", text: "$15$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $g(-2) = (-2)^2 - 4(-2) + 3 = 4 + 8 + 3 = 15$.\n\n**The Full Solution:**\nStep 1: Substitute $x = -2$ into $g(x) = x^2 - 4x + 3$.\nStep 2: $g(-2) = (-2)^2 - 4(-2) + 3$. Note $(-2)^2 = 4$ (squaring removes the sign) and $-4(-2) = +8$ (negative times negative is positive).\nStep 3: $g(-2) = 4 + 8 + 3 = 15$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): mistakes $(-2)^2$ for $-4$ AND treats $-4(-2)$ as $-8$: $-4 - 8 + 3 = -9$.\n* Choice B ($-1$): treats $-4(-2)$ as $-8$, giving $4 - 8 + 3 = -1$.\n* Choice C ($12$): computes $4 + 8 = 12$ but forgets to add the $+3$.\n\n**Test Day Takeaway:** $(-a)^2 = a^2 \\ge 0$ and $-4(-a) = +4a$. Wrap negative inputs in parentheses and track every sign.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "The line $\\ell$ has equation $y = 2x - 7$. Which of the following is the equation of a line parallel to $\\ell$ that passes through the point $(0, 4)$?",
      choices: [
        // distractor: uses the perpendicular slope instead of the parallel one
        { id: "A", text: "$y = -\\dfrac{1}{2}x + 4$" },
        // distractor: keeps the original line, which does not pass through (0, 4)
        { id: "B", text: "$y = 2x - 7$" },
        // distractor: flips the sign of the slope
        { id: "C", text: "$y = -2x + 4$" },
        { id: "D", text: "$y = 2x + 4$" }
      ],
      correctAnswer: "D",
      explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Parallel means same slope, $2$. The point $(0, 4)$ is on the $y$-axis, so the intercept is $4$, giving $y = 2x + 4$.\n\n**The Full Solution:**\nStep 1: Parallel lines share a slope, so the new line has slope $m = 2$.\nStep 2: Use $y = mx + b$. Since the point $(0, 4)$ has $x = 0$, it is the $y$-intercept, so $b = 4$.\nStep 3: The equation is $y = 2x + 4$. Check: at $x = 0$, $y = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -\\frac{1}{2}x + 4$): uses the perpendicular slope, not the parallel one.\n* Choice B ($y = 2x - 7$): keeps the original line, which passes through $(0, -7)$, not $(0, 4)$.\n* Choice C ($y = -2x + 4$): flips the sign of the slope to $-2$.\n\n**Test Day Takeaway:** Parallel lines have identical slopes. Perpendicular slopes are negative reciprocals — flip the fraction and change the sign.",
      skills: ["parallel-line-slope", "writing-parallel-equation"]
    },
    {
      id: 21,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "The scatterplot below shows the relationship between the number of weeks of practice $x$ and the typing speed $y$, in words per minute, for each of $9$ students in a keyboarding class. The line of best fit is $\\hat{y} = 3x + 28$. According to the model, by how many words per minute does the predicted typing speed increase for each additional week of practice?",
      diagram: { type: "scatterplot", params: {
        points: [[1,32],[2,33],[3,38],[4,39],[5,44],[6,45],[7,50],[8,51],[9,56]],
        xMin: 0, xMax: 10, yMin: 25, yMax: 60,
        xGridStep: 1, yGridStep: 5, xLabelStep: 2, yLabelStep: 5,
        xLabel: "Weeks of practice", yLabel: "Typing speed (wpm)",
        bestFitLine: { slope: 3, intercept: 28 },
      } },
      correctAnswer: "3",
      explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~5s):** In $\\hat{y} = 3x + 28$, the slope $3$ is the predicted change in $y$ per one-unit increase in $x$ — here, $3$ words per minute per extra week.\n\n**The Full Solution:**\nStep 1: For a linear model $\\hat{y} = mx + b$, the slope $m$ is the predicted change in $y$ for each one-unit increase in $x$.\nStep 2: Here $x$ is weeks of practice and $y$ is typing speed, with $m = 3$.\nStep 3: So each additional week of practice predicts an increase of $3$ words per minute.\n\n**Common Mistakes:** Reporting $28$ (the intercept — the predicted speed at $0$ weeks) or $31$ (the predicted speed after exactly $1$ week, $3(1) + 28$).\n\n**Test Day Takeaway:** In $\\hat{y} = mx + b$, the slope $m$ is the per-unit rate of change and the intercept $b$ is the value when $x = 0$.",
      skills: ["linear-functions", "slope"]
    },
    {
      id: 22,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The table summarizes the ferns and succulents sold at a school plant sale over two days. What fraction of all the ferns sold were sold on Saturday?",
      diagram: {
        type: "twoWayTable",
        params: {
          headers: ["", "Ferns", "Succulents", "Total"],
          rows: [
            ["Friday", "30", "45", "75"],
            ["Saturday", "60", "15", "75"],
            ["Total", "90", "60", "150"]
          ]
        }
      },
      choices: [
        // distractor: Saturday ferns divided by the overall total
        { id: "A", text: "$\\dfrac{60}{150}$" },
        // distractor: total ferns divided by total sales — the marginal fraction
        { id: "B", text: "$\\dfrac{90}{150}$" },
        { id: "C", text: "$\\dfrac{60}{90}$" },
        // distractor: Saturday ferns divided by the Saturday row total
        { id: "D", text: "$\\dfrac{60}{75}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** \"Of all the ferns\" sets the denominator to total ferns, $90$. Saturday ferns $= 60$, so the fraction is $\\frac{60}{90}$.\n\n**The Full Solution:**\nStep 1: \"What fraction of all the ferns\" restricts the sample to ferns only, so the denominator is the fern total.\nStep 2: Total ferns $= 30 + 60 = 90$ (the Ferns-column total).\nStep 3: Saturday ferns $= 60$, so the fraction is $\\frac{60}{90}$, which equals $\\frac{2}{3}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{60}{150}$): uses the grand total instead of just the fern total.\n* Choice B ($\\frac{90}{150}$): the fraction of all sales that were ferns, not of ferns sold on Saturday.\n* Choice D ($\\frac{60}{75}$): the fraction of Saturday sales that were ferns (uses the Saturday row total).\n\n**Test Day Takeaway:** The word \"of\" names the denominator. \"Of all ferns\" means the ferns total goes on the bottom; \"of Saturday sales\" would mean the Saturday total.",
      skills: ["two-way-table", "conditional-probability"]
    }
  ]
};

export default practiceTest7M2Easy;
