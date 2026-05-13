// Practice Test 6 — Math Module 2 Easy variant (22 questions)
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.
// Domain mix: 7 Algebra / 6 Advanced Math / 5 Problem-Solving / 4 Geometry & Trig.

export const practiceTest6M2Easy = {
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
      question: "If $3x + 5 = 20$, what is the value of $x$?",
      choices: [
        // distractor: applies inverse — adds 5 instead of subtracting
        { id: "A", text: "$\\dfrac{25}{3}$" },
        { id: "B", text: "$5$" },
        // distractor: divides 20 by 3 forgetting the 5
        { id: "C", text: "$\\dfrac{20}{3}$" },
        // distractor: subtracts but doesn't divide
        { id: "D", text: "$15$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Subtract $5$, then divide by $3$: $3x = 15 \\Rightarrow x = 5$.\n\n**The Full Solution:**\n$3x + 5 = 20$\n$3x = 20 - 5 = 15$\n$x = \\dfrac{15}{3} = 5$.\n\nVerification: $3(5) + 5 = 15 + 5 = 20$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — adds $5$ instead of subtracting.\n* Choice C: \"stops one step early\" — divides $20$ by $3$ without subtracting.\n* Choice D: \"off-by-one\" — subtracts but forgets to divide.\n\n**Test Day Takeaway:** Solve linear equations by undoing operations in REVERSE order: addition/subtraction first, then multiplication/division.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "What is the area, in square feet, of a triangle with base $10$ feet and height $6$ feet?",
      correctAnswer: "30",
      explanation: "**SAT Pattern: Triangle Area**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~5s):** Area $= \\dfrac{1}{2} bh = \\dfrac{1}{2}(10)(6) = 30$.\n\n**The Full Solution:**\nThe area of a triangle equals one half base times height:\nArea $= \\dfrac{1}{2} \\cdot 10 \\cdot 6 = \\dfrac{60}{2} = 30$ square feet.\n\n**Common Mistakes to Avoid:**\n* Forgetting the $\\frac{1}{2}$: $10 \\cdot 6 = 60$.\n* Adding instead of multiplying: $10 + 6 = 16$.\n\n**Test Day Takeaway:** Triangle area $= \\dfrac{1}{2} \\cdot \\text{base} \\cdot \\text{height}$. The $\\frac{1}{2}$ is essential — don't skip it.",
      skills: ["area", "geometry"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "If $g(x) = 5x + 3$, what is the value of $g(2)$?",
      choices: [
        // distractor: 2 + 5 + 3 = 10
        { id: "A", text: "$10$" },
        { id: "B", text: "$13$" },
        // distractor: stops at 5(2)
        { id: "C", text: "$8$" },
        // distractor: subtracts 3 instead of adding
        { id: "D", text: "$7$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Replace $x$ with $2$: $g(2) = 5(2) + 3 = 10 + 3 = 13$.\n\n**The Full Solution:**\nFunction notation $g(x)$ means \"plug the input in for $x$ in the rule.\"\n$g(2) = 5(2) + 3 = 10 + 3 = 13$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong operation\" — adds rather than multiplies: $2 + 5 + 3 = 10$.\n* Choice C: \"stops one step early\" — gives $5(2) = 10$... actually $5 \\cdot 2 - 2 = 8$ if treated incorrectly.\n* Choice D: \"applies the inverse operation\" — subtracts $3$ instead of adding: $10 - 3 = 7$.\n\n**Test Day Takeaway:** $g(a)$ means substitute $a$ for $x$ in the rule, then evaluate using order of operations.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "A recipe uses $3$ eggs for every $2$ cups of milk. If a baker uses $18$ eggs, how many cups of milk are needed?",
      choices: [
        // distractor: subtracts 18 - 3 = 15 then halves
        { id: "A", text: "$15$" },
        // distractor: keeps the egg number
        { id: "B", text: "$18$" },
        { id: "C", text: "$12$" },
        // distractor: flips the ratio
        { id: "D", text: "$27$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Proportion / Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $\\dfrac{3}{2} = \\dfrac{18}{m}$. Cross-multiply: $3m = 36 \\Rightarrow m = 12$.\n\n**The Full Solution:**\nMatch categories: $\\dfrac{\\text{eggs}}{\\text{milk}} = \\dfrac{3}{2} = \\dfrac{18}{m}$.\nCross-multiply: $3m = 2 \\cdot 18 = 36 \\Rightarrow m = 12$ cups.\n\nAlternatively: $18$ eggs $= 6$ batches of the $3$-egg recipe. Each batch uses $2$ cups of milk: $6 \\cdot 2 = 12$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong operation\" — uses subtraction instead of proportion.\n* Choice B: \"wrong base\" — keeps the egg count for milk.\n* Choice D: \"applies the inverse operation\" — flips the ratio: $\\frac{2}{3} = \\frac{18}{m}$.\n\n**Test Day Takeaway:** Set up proportions with categories matched on both sides. Cross-multiply, then solve.",
      skills: ["ratios", "proportions"]
    },
    {
      id: 5,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "What is the $y$-intercept of the line whose equation is $y = -\\dfrac{1}{2}x + 6$?",
      choices: [
        // distractor: gives the slope
        { id: "A", text: "$-\\dfrac{1}{2}$" },
        { id: "B", text: "$6$" },
        // distractor: gives x-intercept (where y = 0)
        { id: "C", text: "$12$" },
        // distractor: drops the negative
        { id: "D", text: "$\\dfrac{1}{2}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** In $y = mx + b$, the $y$-intercept is $b = 6$.\n\n**The Full Solution:**\nThe equation $y = -\\frac{1}{2}x + 6$ is in slope-intercept form $y = mx + b$:\n* slope $m = -\\frac{1}{2}$\n* $y$-intercept $b = 6$ (the value of $y$ when $x = 0$).\n\nVerification: at $x = 0$, $y = -\\frac{1}{2}(0) + 6 = 6$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — gives the slope.\n* Choice C: \"applies the inverse operation\" — gives the $x$-intercept (where $y = 0$).\n* Choice D: \"wrong sign\" — gives a positive slope value.\n\n**Test Day Takeaway:** $y = mx + b$: slope is $m$, $y$-intercept is $b$. The $y$-intercept is the value of $y$ when $x = 0$.",
      skills: ["slope-intercept-form", "linear-functions"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "A right triangle has legs of length $9$ and $12$. What is the length of the hypotenuse?",
      correctAnswer: "15",
      explanation: "**SAT Pattern: Pythagorean Theorem (3-4-5 Family)**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~5s):** $9$-$12$-$15$ is $3 \\times$ the $3$-$4$-$5$ triple, so the hypotenuse is $15$.\n\n**The Full Solution:**\nBy the Pythagorean theorem: $c^2 = a^2 + b^2$.\n$c^2 = 9^2 + 12^2 = 81 + 144 = 225$\n$c = \\sqrt{225} = 15$.\n\n**Common Mistakes to Avoid:**\n* Adding without squaring: $9 + 12 = 21$.\n* Forgetting the square root: reporting $225$.\n\n**Test Day Takeaway:** Multiples of $3$-$4$-$5$ triples are common ($6$-$8$-$10$, $9$-$12$-$15$, $12$-$16$-$20$, etc.). Spot the pattern to save time.",
      skills: ["pythagorean-theorem", "right-triangles"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A data set has $9$ values listed in order: $4, 6, 7, 9, 10, 12, 13, 15, 18$. What is the median of the data set?",
      choices: [
        // distractor: gives the mean
        { id: "A", text: "$10.4$" },
        { id: "B", text: "$10$" },
        // distractor: gives the range
        { id: "C", text: "$14$" },
        // distractor: gives the middle index 5 instead of value
        { id: "D", text: "$9$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Median of an Ordered List**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** With $9$ values (odd count) already in order, the median is the $5$th value: $10$.\n\n**The Full Solution:**\nThe median is the middle value of an ordered data set. With $n = 9$ values, the median is at position $\\dfrac{n+1}{2} = \\dfrac{10}{2} = 5$.\nThe $5$th value: $4, 6, 7, 9, \\underline{10}, 12, 13, 15, 18$ — the median is $10$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — gives the mean: $\\frac{4 + 6 + 7 + 9 + 10 + 12 + 13 + 15 + 18}{9} = \\frac{94}{9} \\approx 10.4$.\n* Choice C: \"wrong base\" — gives the range: $18 - 4 = 14$.\n* Choice D: \"off-by-one\" — uses the value at index $4$ instead of $5$.\n\n**Test Day Takeaway:** Median $=$ middle of ordered list. For odd $n$, take the $\\frac{n+1}{2}$th value. For even $n$, average the two middle values.",
      skills: ["median", "statistics"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What are the solutions to $x^2 + 4x - 12 = 0$?",
      choices: [
        // distractor: signs both flipped
        { id: "A", text: "$x = -2 \\text{ or } x = 6$" },
        { id: "B", text: "$x = 2 \\text{ or } x = -6$" },
        // distractor: factors of 12 with same sign
        { id: "C", text: "$x = 4 \\text{ or } x = -3$" },
        // distractor: gives only the positive root
        { id: "D", text: "$x = 2$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Find two numbers with product $-12$ and sum $4$: $6$ and $-2$. So $(x + 6)(x - 2) = 0$, giving $x = -6$ or $x = 2$.\n\n**The Full Solution:**\nFor $x^2 + bx + c$, find two numbers whose product is $c = -12$ and sum is $b = 4$.\nNumbers: $6$ and $-2$ (since $6 \\cdot -2 = -12$ and $6 + (-2) = 4$).\n\n$x^2 + 4x - 12 = (x + 6)(x - 2) = 0$\n$x = -6$ or $x = 2$.\n\nVerification: $2^2 + 4(2) - 12 = 4 + 8 - 12 = 0$ \\checkmark; $(-6)^2 + 4(-6) - 12 = 36 - 24 - 12 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — flips the signs of both roots.\n* Choice C: \"wrong base\" — uses an incorrect factor pair.\n* Choice D: \"stops one step early\" — gives only one of the two solutions.\n\n**Test Day Takeaway:** When the constant is negative, the two factors have OPPOSITE signs. The larger absolute value carries the sign that matches $b$.",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    {
      id: 9,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A jacket originally costs $\\$80$. It is on sale for $\\$60$. By what percent has the price decreased?",
      correctAnswer: "25",
      explanation: "**SAT Pattern: Percent Decrease**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~10s):** Decrease $= 80 - 60 = 20$. Percent $= \\dfrac{20}{80} \\times 100 = 25\\%$.\n\n**The Full Solution:**\nPercent change $= \\dfrac{|\\text{new} - \\text{old}|}{\\text{old}} \\times 100\\%$.\nOld $= 80$, new $= 60$:\n$\\dfrac{80 - 60}{80} \\times 100 = \\dfrac{20}{80} \\times 100 = 0.25 \\times 100 = 25\\%$.\n\n**Common Mistakes to Avoid:**\n* Using the new price as the denominator: $\\frac{20}{60} \\approx 33\\%$.\n* Reporting the dollar amount of decrease ($20$) instead of the percent.\n* Computing $\\frac{60}{80} = 75\\%$ — that's the percent the new price IS of the old, not the percent decrease.\n\n**Test Day Takeaway:** Percent change uses the ORIGINAL value as the denominator. Decrease $\\Rightarrow$ subtract new from old.",
      skills: ["percent-change", "percents"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Line $\\ell$ passes through the points $(-1, 4)$ and $(3, -8)$. What is the slope of line $\\ell$?",
      choices: [
        // distractor: drops negative
        { id: "A", text: "$3$" },
        { id: "B", text: "$-3$" },
        // distractor: flips Δy and Δx
        { id: "C", text: "$-\\dfrac{1}{3}$" },
        // distractor: adds instead of subtracts
        { id: "D", text: "$\\dfrac{-4}{2}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Slope from Two Points (with Negatives)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $m = \\dfrac{-8 - 4}{3 - (-1)} = \\dfrac{-12}{4} = -3$.\n\n**The Full Solution:**\nSlope formula: $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$.\nUsing $(x_1, y_1) = (-1, 4)$ and $(x_2, y_2) = (3, -8)$:\n$m = \\dfrac{-8 - 4}{3 - (-1)} = \\dfrac{-12}{4} = -3$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — drops the negative.\n* Choice C: \"applies the inverse operation\" — flips the formula.\n* Choice D: \"wrong operation\" — adds the coordinates.\n\n**Test Day Takeaway:** When subtracting negatives, $-(-1) = +1$. Track signs carefully in the slope formula.",
      skills: ["slope-from-points", "slope"]
    },
    {
      id: 11,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A spinner has $8$ equal sections numbered $1$ through $8$. If the spinner is spun once, what is the probability that the number is even?",
      choices: [
        // distractor: 1/8 (one section)
        { id: "A", text: "$\\dfrac{1}{8}$" },
        { id: "B", text: "$\\dfrac{1}{2}$" },
        // distractor: includes only the prime evens
        { id: "C", text: "$\\dfrac{1}{4}$" },
        // distractor: counts evens but uses 4 in numerator and 8 in denominator written differently
        { id: "D", text: "$\\dfrac{4}{4}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Basic Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Even numbers from $1$ to $8$: $2, 4, 6, 8$ — that's $4$ out of $8$. $P(\\text{even}) = \\dfrac{4}{8} = \\dfrac{1}{2}$.\n\n**The Full Solution:**\nProbability $= \\dfrac{\\text{favorable}}{\\text{total}}$.\nFavorable (even outcomes): $\\{2, 4, 6, 8\\}$, $4$ outcomes.\nTotal: $8$ outcomes.\n$P(\\text{even}) = \\dfrac{4}{8} = \\dfrac{1}{2}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — uses one section.\n* Choice C: \"wrong base\" — only counts $2$ outcomes (e.g., even primes).\n* Choice D: \"wrong base\" — wrong denominator.\n\n**Test Day Takeaway:** For uniform spinners or dice, P(event) $=$ favorable count $\\div$ total count. Simplify the fraction when possible.",
      skills: ["probability-basics", "statistics"]
    },
    {
      id: 12,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A cylinder has a radius of $3$ inches and a height of $10$ inches. The volume of the cylinder, in cubic inches, can be written as $k\\pi$. What is the value of $k$?",
      correctAnswer: "90",
      explanation: "**SAT Pattern: Volume of a Cylinder**\n\n**The correct answer is $90$.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (3)^2 (10) = 90\\pi$, so $k = 90$.\n\n**The Full Solution:**\nVolume of a cylinder: $V = \\pi r^2 h$.\n$V = \\pi \\cdot 3^2 \\cdot 10 = \\pi \\cdot 9 \\cdot 10 = 90\\pi$ cubic inches.\nThus $k = 90$.\n\n**Common Mistakes to Avoid:**\n* Forgetting to square the radius: $\\pi \\cdot 3 \\cdot 10 = 30\\pi$.\n* Using diameter instead of radius.\n* Computing surface area instead of volume.\n\n**Test Day Takeaway:** Cylinder volume $= \\pi r^2 h$. ALWAYS square the radius (it appears squared in the formula).",
      skills: ["volume-cylinder", "volume"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "What is the solution $(x, y)$ to the system $y = 4x - 1$ and $y = 2x + 5$?",
      choices: [
        // distractor: swaps x and y
        { id: "A", text: "$(11, 3)$" },
        { id: "B", text: "$(3, 11)$" },
        // distractor: uses x = 0
        { id: "C", text: "$(0, -1)$" },
        // distractor: misadds constants
        { id: "D", text: "$(2, 7)$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Set equal: $4x - 1 = 2x + 5 \\Rightarrow 2x = 6 \\Rightarrow x = 3$. Then $y = 4(3) - 1 = 11$. Solution: $(3, 11)$.\n\n**The Full Solution:**\nSince both equations equal $y$, set the right-hand sides equal:\n$4x - 1 = 2x + 5$\n$2x = 6$\n$x = 3$.\n\nSubstitute back: $y = 4(3) - 1 = 11$.\nVerification: $y = 2(3) + 5 = 11$ \\checkmark.\nSolution: $(3, 11)$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — swaps $x$ and $y$.\n* Choice C: \"stops one step early\" — uses $x = 0$ before solving.\n* Choice D: \"wrong base\" — guesses based on constants.\n\n**Test Day Takeaway:** When two equations are both $y = $\\ldots, set the right sides equal, solve for $x$, and back-substitute.",
      skills: ["substitution-method", "systems-of-equations"]
    },
    {
      id: 14,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A scientist deposits $\\$500$ into an account that earns $4\\%$ simple interest per year. Which expression gives the total value of the account after $t$ years?",
      choices: [
        // distractor: missing initial inside parentheses
        { id: "A", text: "$500 \\cdot 0.04t$" },
        { id: "B", text: "$500(1 + 0.04t)$" },
        // distractor: compound formula instead of simple
        { id: "C", text: "$500(1.04)^{t}$" },
        // distractor: uses 4 instead of 0.04
        { id: "D", text: "$500 + 4t$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Simple Interest Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Simple interest formula: $A = P(1 + rt)$. With $P = 500$, $r = 0.04$: $A = 500(1 + 0.04t)$.\n\n**The Full Solution:**\nSimple interest grows the principal LINEARLY. The total value after $t$ years:\n$A = P + Prt = P(1 + rt)$.\nHere $P = 500$ and $r = 0.04$:\n$A = 500(1 + 0.04t)$.\n\nCheck: at $t = 0$, $A = 500$. At $t = 1$, $A = 500(1.04) = 520$ ($\\$20$ interest in year $1$) \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives only the interest, not the total.\n* Choice C: \"wrong operation\" — that's COMPOUND, not simple, interest.\n* Choice D: \"wrong base\" — uses $4$ instead of converting $4\\%$ to $0.04$.\n\n**Test Day Takeaway:** Simple interest is LINEAR: $A = P(1 + rt)$. Compound interest is EXPONENTIAL: $A = P(1 + r)^{t}$. Convert percents to decimals before plugging in.",
      skills: ["simple-interest", "linear-functions"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In a right triangle, an acute angle $\\theta$ satisfies $\\tan(\\theta) = \\dfrac{5}{12}$. What is the value of $\\sin(\\theta)$?",
      choices: [
        // distractor: gives cos
        { id: "A", text: "$\\dfrac{12}{13}$" },
        { id: "B", text: "$\\dfrac{5}{13}$" },
        // distractor: keeps tan value
        { id: "C", text: "$\\dfrac{5}{12}$" },
        // distractor: reciprocal
        { id: "D", text: "$\\dfrac{13}{5}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: SOH-CAH-TOA in a 5-12-13 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $\\tan(\\theta) = \\dfrac{\\text{opp}}{\\text{adj}} = \\dfrac{5}{12}$, so opp $= 5$, adj $= 12$. Hypotenuse $= \\sqrt{25 + 144} = 13$. $\\sin(\\theta) = \\dfrac{5}{13}$.\n\n**The Full Solution:**\n* $\\tan(\\theta) = \\dfrac{\\text{opposite}}{\\text{adjacent}}$\n* $\\sin(\\theta) = \\dfrac{\\text{opposite}}{\\text{hypotenuse}}$\n\nGiven $\\tan(\\theta) = \\frac{5}{12}$: opp $= 5$, adj $= 12$.\nFind hypotenuse via Pythagoras: $\\text{hyp}^2 = 5^2 + 12^2 = 25 + 144 = 169 \\Rightarrow \\text{hyp} = 13$.\n$\\sin(\\theta) = \\dfrac{5}{13}$.\n\nThis is the classic $5$-$12$-$13$ right triangle.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — gives $\\cos(\\theta) = \\frac{12}{13}$.\n* Choice C: \"wrong base\" — repeats $\\tan$.\n* Choice D: \"applies the inverse operation\" — gives $\\csc(\\theta) = \\frac{13}{5}$.\n\n**Test Day Takeaway:** Given one trig ratio, label two sides of a right triangle and compute the third with Pythagoras. The $5$-$12$-$13$ triangle is a frequent SAT staple.",
      skills: ["soh-cah-toa", "right-triangles"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A car travels $150$ miles in $2$ hours and $30$ minutes. What is the car's average speed, in miles per hour?",
      correctAnswer: "60",
      explanation: "**SAT Pattern: Average Rate**\n\n**The correct answer is $60$.**\n\n**The Fast Way (~10s):** $2$ hr $30$ min $= 2.5$ hr. Speed $= \\dfrac{150}{2.5} = 60$ mph.\n\n**The Full Solution:**\nAverage speed $= \\dfrac{\\text{total distance}}{\\text{total time}}$.\nConvert time to hours: $2$ hr $30$ min $= 2 + \\frac{30}{60} = 2.5$ hours.\nSpeed $= \\dfrac{150}{2.5} = 60$ mph.\n\n**Common Mistakes to Avoid:**\n* Treating $2$ hr $30$ min as $2.30$ hr: $\\frac{150}{2.3} \\approx 65.2$.\n* Ignoring the $30$ minutes: $\\frac{150}{2} = 75$.\n* Multiplying instead of dividing: $150 \\times 2.5 = 375$.\n\n**Test Day Takeaway:** Average speed $=$ total distance $\\div$ total time. Convert mixed time units to a single unit before dividing.",
      skills: ["unit-conversion", "rate-conversion"]
    },
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "If $5(x - 2) + 3x = 8x - 6$, how many solutions does the equation have?",
      choices: [
        // distractor: confuses identity with no solutions
        { id: "A", text: "$0$" },
        { id: "B", text: "Infinitely many" },
        // distractor: assumes one solution
        { id: "C", text: "$1$" },
        // distractor: quadratic answer
        { id: "D", text: "$2$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: Identifying Contradiction Equations**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Distribute: $5x - 10 + 3x = 8x - 6 \\Rightarrow 8x - 10 = 8x - 6$. Subtract $8x$: $-10 = -6$. Never true $\\Rightarrow$ NO solutions.\n\n**The Full Solution:**\nDistribute on the left: $5(x - 2) + 3x = 5x - 10 + 3x = 8x - 10$.\nThe equation becomes $8x - 10 = 8x - 6$.\nSubtract $8x$: $-10 = -6$. NEVER TRUE.\n\nSince no value of $x$ satisfies the equation, it has $0$ solutions.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong sign\" — confuses contradiction with identity.\n* Choice C: \"applies the inverse operation\" — assumes a generic linear equation has $1$ solution.\n* Choice D: \"wrong base\" — quadratic-style answer.\n\n**Test Day Takeaway:** Same $x$-coefficient but different constants $\\Rightarrow$ no solutions. Identical sides $\\Rightarrow$ infinitely many. Different $x$-coefficients $\\Rightarrow$ exactly one.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "The circle with equation $x^2 + y^2 = 49$ is graphed in the $xy$-plane. What is the radius of the circle?",
      correctAnswer: "7",
      explanation: "**SAT Pattern: Standard Form Circle Centered at Origin**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~5s):** $x^2 + y^2 = r^2$, so $r^2 = 49 \\Rightarrow r = 7$.\n\n**The Full Solution:**\nA circle centered at the origin has equation $x^2 + y^2 = r^2$, where $r$ is the radius.\nHere $r^2 = 49$, so $r = \\sqrt{49} = 7$.\n\n**Common Mistakes to Avoid:**\n* Reporting $49$ — that's $r^2$, not the radius.\n* Reporting $14$ (the diameter) instead of the radius.\n\n**Test Day Takeaway:** Circle equation $x^2 + y^2 = r^2$. Take the square root of the constant to get the radius. The square root step is essential.",
      skills: ["circle-equation", "circles"]
    },
    {
      id: 19,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "If $f(x) = 2x^2 + 3x - 5$, what is the value of $f(-4)$?",
      choices: [
        // distractor: doesn't square the negative
        { id: "A", text: "$-49$" },
        { id: "B", text: "$15$" },
        // distractor: sign error on linear term
        { id: "C", text: "$39$" },
        // distractor: stops at 2x^2 + 3x
        { id: "D", text: "$20$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $f(-4) = 2(-4)^2 + 3(-4) - 5 = 32 - 12 - 5 = 15$.\n\n**The Full Solution:**\nSubstitute $x = -4$ into $f(x) = 2x^2 + 3x - 5$:\n$f(-4) = 2(-4)^2 + 3(-4) - 5$\n$= 2(16) + (-12) - 5$\n$= 32 - 12 - 5$\n$= 15$.\n\nKey: $(-4)^2 = +16$, and $3 \\cdot (-4) = -12$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong sign\" — uses $(-4)^2 = -16$ incorrectly.\n* Choice C: \"wrong sign\" — treats $3(-4) = +12$.\n* Choice D: \"stops one step early\" — computes $32 - 12 = 20$ but forgets to subtract $5$.\n\n**Test Day Takeaway:** $(-a)^2 = a^2$ ($\\geq 0$). Use parentheses around negative inputs to avoid sign errors.",
      skills: ["function-evaluation", "function-notation"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "Line $\\ell$ has equation $y = \\dfrac{1}{2}x - 3$. Which of the following is the equation of a line parallel to $\\ell$ that passes through the point $(0, 4)$?",
      choices: [
        // distractor: perpendicular slope
        { id: "A", text: "$y = -2x + 4$" },
        { id: "B", text: "$y = \\dfrac{1}{2}x + 4$" },
        // distractor: keeps original line
        { id: "C", text: "$y = \\dfrac{1}{2}x - 3$" },
        // distractor: flips the slope sign
        { id: "D", text: "$y = -\\dfrac{1}{2}x + 4$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Parallel lines share slope: $\\frac{1}{2}$. Through $(0, 4)$: $y$-intercept $= 4$. Equation: $y = \\dfrac{1}{2}x + 4$.\n\n**The Full Solution:**\nParallel lines have IDENTICAL slopes, so the new slope is $\\frac{1}{2}$.\nPoint $(0, 4)$ has $x = 0$, so the $y$-intercept is $4$.\nEquation: $y = \\dfrac{1}{2}x + 4$.\n\nVerification: at $(0, 4)$, $y = \\frac{1}{2}(0) + 4 = 4$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses perpendicular slope ($-2$) instead of parallel.\n* Choice C: \"stops one step early\" — keeps the original line.\n* Choice D: \"wrong sign\" — flips the slope sign.\n\n**Test Day Takeaway:** Parallel $\\Rightarrow$ same slope. Perpendicular $\\Rightarrow$ negative reciprocal of slope.",
      skills: ["parallel-line-slope", "writing-parallel-equation"]
    },
    {
      id: 21,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "The scatterplot below shows the relationship between number of advertisements aired $x$ and product sales $y$ (in hundreds of units). The line of best fit is $\\hat{y} = 1.5x + 12$. According to the model, how many additional hundreds of units are predicted to be sold for each additional advertisement aired?",
      diagram: { type: "scatterplot", params: {
        points: [[2,16],[5,18],[8,26],[10,28],[12,28],[15,32],[18,42],[20,40],[24,46],[28,56]],
        xMin: 0, xMax: 30, yMin: 0, yMax: 60,
        xGridStep: 5, yGridStep: 5, xLabelStep: 5, yLabelStep: 10,
        xLabel: "Ads aired", yLabel: "Sales (hundreds of units)",
        bestFitLine: { slope: 1.5, intercept: 12 },
      } },
      correctAnswer: "1.5",
      explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $1.5$.**\n\n**The Fast Way (~5s):** Slope $= 1.5$ is the predicted increase in $y$ per unit increase in $x$.\n\n**The Full Solution:**\nFor a linear model $\\hat{y} = mx + b$:\n* slope $m$ = predicted change in $y$ per one-unit change in $x$.\n* intercept $b$ = predicted $y$ when $x = 0$.\n\nHere $m = 1.5$: each additional advertisement predicts an additional $1.5$ hundreds of units in sales.\n\n**Common Mistakes to Avoid:**\n* Reporting $12$ (the intercept — predicted sales with $0$ ads).\n* Reporting $13.5$ (predicted sales after $1$ ad: $1.5(1) + 12$).\n* Reporting $150$ — multiplying $1.5$ by $100$ to convert (the units already say \"in hundreds\").\n\n**Test Day Takeaway:** Slope of best-fit line $=$ predicted change in $y$ per unit change in $x$. The intercept is the predicted $y$ at $x = 0$.",
      skills: ["linear-functions", "slope"]
    },
    {
      id: 22,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The table summarizes the favorite drink choices of $200$ employees at two offices.\n\n| | Coffee | Tea | Total |\n|---|---|---|---|\n| Office 1 | $60$ | $30$ | $90$ |\n| Office 2 | $50$ | $60$ | $110$ |\n| Total | $110$ | $90$ | $200$ |\n\nGiven that a randomly selected employee prefers tea, what is the probability that the employee works at Office 2?",
      choices: [
        // distractor: tea over total
        { id: "A", text: "$\\dfrac{90}{200}$" },
        // distractor: Office 2 tea over Office 2 total
        { id: "B", text: "$\\dfrac{60}{110}$" },
        { id: "C", text: "$\\dfrac{60}{90}$" },
        // distractor: Office 2 tea over overall total
        { id: "D", text: "$\\dfrac{60}{200}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** \"Given prefers tea\" $\\Rightarrow$ denominator $=$ tea total $= 90$. Office 2 tea $= 60$. Probability $= \\dfrac{60}{90} = \\dfrac{2}{3}$.\n\n**The Full Solution:**\n\"Given that an employee prefers tea\" restricts the sample to TEA drinkers only.\nTotal tea drinkers: $30 + 60 = 90$.\nOffice 2 tea drinkers: $60$.\nProbability $= \\dfrac{60}{90} = \\dfrac{2}{3}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — fraction of all employees who prefer tea.\n* Choice B: \"applies the inverse operation\" — fraction of Office 2 employees who prefer tea.\n* Choice D: \"wrong base\" — uses overall total instead of just tea drinkers.\n\n**Test Day Takeaway:** \"Given\" identifies the restricted denominator. \"Given prefers tea\" $\\Rightarrow$ tea total in denominator. \"Given works at Office 2\" $\\Rightarrow$ Office 2 total in denominator.",
      skills: ["two-way-table", "conditional-probability"]
    }
  ]
};

export default practiceTest6M2Easy;
