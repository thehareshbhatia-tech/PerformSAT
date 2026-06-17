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
      explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Undo the $+5$, then the $\\times 3$: $3x = 15 \\Rightarrow x = 5$.\n\n**The Full Solution:**\nStep 1: Subtract $5$ from both sides: $3x = 20 - 5 = 15$.\nStep 2: Divide both sides by $3$: $x = \\frac{15}{3} = 5$.\nStep 3: Check: $3(5) + 5 = 15 + 5 = 20$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{25}{3}$): added $5$ instead of subtracting, then divided $25$ by $3$.\n* Choice C ($\\frac{20}{3}$): divided $20$ by $3$ without first subtracting the $5$.\n* Choice D ($15$): subtracted to get $3x = 15$ but forgot to divide by $3$.\n\n**Test Day Takeaway:** Solve linear equations by undoing operations in reverse order: clear the addition or subtraction first, then the multiplication or division.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 2,
      type: "fill-in",
      difficulty: "easy",
      band: 2,
      question: "What is the area, in square feet, of a triangle with base $10$ feet and height $6$ feet?",
      correctAnswer: "30",
      explanation: "**SAT Pattern: Triangle Area**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~5s):** Area $= \\frac{1}{2}bh = \\frac{1}{2}(10)(6) = 30$.\n\n**The Full Solution:**\nStep 1: The area of a triangle is one half the base times the height: Area $= \\frac{1}{2}bh$.\nStep 2: Substitute $b = 10$ and $h = 6$: Area $= \\frac{1}{2}(10)(6) = \\frac{60}{2} = 30$ square feet.\n\n**Common Mistakes:** Skipping the $\\frac{1}{2}$ and reporting $10 \\cdot 6 = 60$; adding the dimensions to get $10 + 6 = 16$.\n\n**Test Day Takeaway:** Triangle area $= \\frac{1}{2} \\cdot \\text{base} \\cdot \\text{height}$. The factor of $\\frac{1}{2}$ is part of the formula, not optional.",
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
      explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Substitute $x = 2$: $g(2) = 5(2) + 3 = 13$.\n\n**The Full Solution:**\nStep 1: $g(x) = 5x + 3$ means replace every $x$ with the input.\nStep 2: $g(2) = 5(2) + 3 = 10 + 3 = 13$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): stopped at $5(2) = 10$ and forgot to add $3$.\n* Choice C ($8$): added the input to the slope, $5 + 2 + 1$, instead of multiplying.\n* Choice D ($7$): subtracted $3$ instead of adding: $10 - 3 = 7$.\n\n**Test Day Takeaway:** $g(a)$ means substitute $a$ for $x$ in the rule, then evaluate with order of operations: multiply before you add.",
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
      explanation: "**SAT Pattern: Proportion / Ratio**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $18$ eggs is $6$ times the $3$-egg recipe, so the milk is $6 \\times 2 = 12$ cups.\n\n**The Full Solution:**\nStep 1: Set up the proportion with matched categories: $\\frac{\\text{eggs}}{\\text{milk}} = \\frac{3}{2} = \\frac{18}{m}$.\nStep 2: Cross-multiply: $3m = 2 \\cdot 18 = 36$.\nStep 3: Divide by $3$: $m = 12$ cups.\n\n**Why the wrong answers are tempting:**\n* Choice A ($15$): used subtraction logic ($18 - 3$) instead of scaling proportionally.\n* Choice B ($18$): copied the egg count straight across as the milk amount.\n* Choice D ($27$): flipped the ratio to $\\frac{2}{3} = \\frac{18}{m}$, scaling the wrong way.\n\n**Test Day Takeaway:** Match the same category on top of both fractions, then cross-multiply and solve.",
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
      explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** In $y = mx + b$, the $y$-intercept is the constant $b$, so it is $6$.\n\n**The Full Solution:**\nStep 1: The line $y = -\\frac{1}{2}x + 6$ is already in the form $y = mx + b$.\nStep 2: Match terms: slope $m = -\\frac{1}{2}$, $y$-intercept $b = 6$.\nStep 3: Confirm at $x = 0$: $y = -\\frac{1}{2}(0) + 6 = 6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{1}{2}$): reported the slope instead of the $y$-intercept.\n* Choice C ($12$): doubled the constant, perhaps reaching for the $x$-intercept.\n* Choice D ($\\frac{1}{2}$): gave the slope with the sign dropped.\n\n**Test Day Takeaway:** In $y = mx + b$, $m$ is the slope and $b$ is the $y$-intercept, the $y$-value when $x = 0$.",
      skills: ["slope-intercept-form", "linear-functions"]
    },
    {
      id: 6,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "A right triangle has legs of length $9$ and $12$. What is the length of the hypotenuse?",
      correctAnswer: "15",
      explanation: "**SAT Pattern: Pythagorean Theorem (3-4-5 Family)**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~5s):** $9$-$12$-$15$ is the $3$-$4$-$5$ triple scaled by $3$, so the hypotenuse is $15$.\n\n**The Full Solution:**\nStep 1: Apply $c^2 = a^2 + b^2$ with legs $9$ and $12$.\nStep 2: $c^2 = 9^2 + 12^2 = 81 + 144 = 225$.\nStep 3: $c = \\sqrt{225} = 15$.\n\n**Common Mistakes:** Adding the legs without squaring to get $21$; stopping at $c^2 = 225$ and reporting $225$.\n\n**Test Day Takeaway:** Memorize the $3$-$4$-$5$ triple and its multiples ($6$-$8$-$10$, $9$-$12$-$15$, $12$-$16$-$20$) to skip the arithmetic on sight.",
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
      explanation: "**SAT Pattern: Median of an Ordered List**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** With $9$ ordered values, the median is the middle (5th) one: $10$.\n\n**The Full Solution:**\nStep 1: The median is the middle value of an ordered list. With $n = 9$, the middle position is $\\frac{n+1}{2} = \\frac{10}{2} = 5$.\nStep 2: Count to the 5th value: $4, 6, 7, 9, \\underline{10}, 12, 13, 15, 18$. The median is $10$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($10.4$): computed the mean, $\\frac{94}{9} \\approx 10.4$.\n* Choice C ($14$): computed the range, $18 - 4 = 14$.\n* Choice D ($9$): took the value at position $4$ instead of position $5$.\n\n**Test Day Takeaway:** Median is the middle of the ordered list. For odd $n$, take the $\\frac{n+1}{2}$th value; for even $n$, average the two middle values.",
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
      explanation: "**SAT Pattern: Quadratic via Factoring**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Find two numbers with product $-12$ and sum $4$: $6$ and $-2$. So $(x + 6)(x - 2) = 0$, giving $x = -6$ or $x = 2$.\n\n**The Full Solution:**\nStep 1: For $x^2 + bx + c$, find two numbers whose product is $c = -12$ and sum is $b = 4$. Those are $6$ and $-2$.\nStep 2: Factor: $x^2 + 4x - 12 = (x + 6)(x - 2) = 0$.\nStep 3: Set each factor to zero: $x = -6$ or $x = 2$.\nStep 4: Check: $2^2 + 4(2) - 12 = 0$ and $(-6)^2 + 4(-6) - 12 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = -2$ or $x = 6$): flipped the sign on both roots.\n* Choice C ($x = 4$ or $x = -3$): used a factor pair that multiplies to $-12$ but sums to $1$, not $4$.\n* Choice D ($x = 2$): found only one root and dropped $x = -6$.\n\n**Test Day Takeaway:** When the constant is negative, the two factors carry opposite signs, and the number with the larger absolute value takes the sign of $b$.",
      skills: ["finding-roots-factoring", "quadratic-equations"]
    },
    {
      id: 9,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A jacket originally costs $\\$80$. It is on sale for $\\$60$. By what percent has the price decreased?",
      correctAnswer: "25",
      explanation: "**SAT Pattern: Percent Decrease**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~10s):** The price dropped $\\$80 - \\$60 = \\$20$, and $\\frac{20}{80} = 25\\%$.\n\n**The Full Solution:**\nStep 1: Percent decrease $= \\frac{\\text{old} - \\text{new}}{\\text{old}} \\times 100\\%$.\nStep 2: Substitute old $= 80$, new $= 60$: $\\frac{80 - 60}{80} \\times 100\\% = \\frac{20}{80} \\times 100\\%$.\nStep 3: $\\frac{20}{80} = 0.25$, so the decrease is $25\\%$.\n\n**Common Mistakes:** Dividing by the new price, $\\frac{20}{60} \\approx 33\\%$; reporting the $\\$20$ drop instead of the percent; computing $\\frac{60}{80} = 75\\%$, which is what the price IS of the original, not the decrease.\n\n**Test Day Takeaway:** Percent change always divides by the original value: $\\frac{\\text{change}}{\\text{original}} \\times 100\\%$.",
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
      explanation: "**SAT Pattern: Slope from Two Points (with Negatives)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $m = \\frac{-8 - 4}{3 - (-1)} = \\frac{-12}{4} = -3$.\n\n**The Full Solution:**\nStep 1: Use $m = \\frac{y_2 - y_1}{x_2 - x_1}$ with $(x_1, y_1) = (-1, 4)$ and $(x_2, y_2) = (3, -8)$.\nStep 2: Numerator: $-8 - 4 = -12$.\nStep 3: Denominator: $3 - (-1) = 3 + 1 = 4$.\nStep 4: $m = \\frac{-12}{4} = -3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): dropped the negative sign on the slope.\n* Choice C ($-\\frac{1}{3}$): inverted the formula, putting $\\Delta x$ over $\\Delta y$.\n* Choice D ($\\frac{-4}{2}$): mismatched the coordinate differences (this equals $-2$, not the correct slope).\n\n**Test Day Takeaway:** Subtracting a negative adds: $3 - (-1) = 4$. Keep the $y$'s on top and the $x$'s on the bottom in the same order.",
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
      explanation: "**SAT Pattern: Basic Probability**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Half the numbers $1$ through $8$ are even, so $P(\\text{even}) = \\frac{1}{2}$.\n\n**The Full Solution:**\nStep 1: Probability $= \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$.\nStep 2: Even sections are $\\{2, 4, 6, 8\\}$, which is $4$ favorable outcomes out of $8$ total.\nStep 3: $P(\\text{even}) = \\frac{4}{8} = \\frac{1}{2}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{1}{8}$): counted only one section as favorable.\n* Choice C ($\\frac{1}{4}$): counted only $2$ favorable outcomes out of $8$.\n* Choice D ($\\frac{4}{4}$): put the favorable count over itself instead of over the total $8$.\n\n**Test Day Takeaway:** For equally likely outcomes, probability is favorable count divided by total count, then simplify.",
      skills: ["probability-basics", "statistics"]
    },
    {
      id: 12,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A cylinder has a radius of $3$ inches and a height of $10$ inches. The volume of the cylinder, in cubic inches, can be written as $k\\pi$. What is the value of $k$?",
      correctAnswer: "90",
      explanation: "**SAT Pattern: Volume of a Cylinder**\n\n**The correct answer is $90$.**\n\n**The Fast Way (~10s):** $V = \\pi r^2 h = \\pi (3)^2 (10) = 90\\pi$, so $k = 90$.\n\n**The Full Solution:**\nStep 1: Cylinder volume is $V = \\pi r^2 h$.\nStep 2: Substitute $r = 3$ and $h = 10$: $V = \\pi (3)^2 (10) = \\pi \\cdot 9 \\cdot 10 = 90\\pi$.\nStep 3: Since $V = k\\pi$, matching gives $k = 90$.\n\n**Common Mistakes:** Forgetting to square the radius and getting $\\pi \\cdot 3 \\cdot 10 = 30\\pi$; using the diameter in place of the radius.\n\n**Test Day Takeaway:** Cylinder volume is $\\pi r^2 h$ — the radius is squared, so square it before multiplying by the height.",
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
      explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Both equations equal $y$, so set them equal: $4x-1=2x+5 \\Rightarrow 2x=6 \\Rightarrow x=3$. Then $y=4(3)-1=11$, giving $(3,11)$.\n\n**The Full Solution:**\nStep 1: Since $y=4x-1$ and $y=2x+5$, the right-hand sides are equal: $4x-1=2x+5$.\nStep 2: Subtract $2x$ and add $1$: $2x=6 \\Rightarrow x=3$.\nStep 3: Back-substitute into either equation: $y=4(3)-1=11$. Check the other: $y=2(3)+5=11$. $\\checkmark$ The solution is $(3,11)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(11,3)$): correct numbers, but the coordinates are swapped — $x=3$, not $11$.\n* Choice C ($(0,-1)$): reads off the $y$-intercept of the first line instead of solving the system.\n* Choice D ($(2,7)$): a near-miss guess that satisfies neither equation ($4(2)-1=7$ but $2(2)+5=9$).\n\n**Test Day Takeaway:** When both equations are solved for $y$, set the right sides equal, solve for $x$, then substitute back to get $y$ — and report the pair in $(x,y)$ order.",
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
      explanation: "**SAT Pattern: Simple Interest Model**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Simple interest is linear: $A=P(1+rt)$. With $P=500$ and $r=0.04$, that is $500(1+0.04t)$.\n\n**The Full Solution:**\nStep 1: Simple interest pays $Prt$ on top of the principal, so the total value is $A=P+Prt=P(1+rt)$.\nStep 2: Substitute $P=500$ and $r=0.04$: $A=500(1+0.04t)$.\nStep 3: Sanity check: at $t=0$, $A=500$; at $t=1$, $A=500(1.04)=520$, which is exactly $\\$20$ of interest in one year. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($500\\cdot 0.04t$): gives only the interest earned, not the total account value — it leaves out the original $\\$500$.\n* Choice C ($500(1.04)^{t}$): this is the compound-interest formula, where interest earns interest; the problem says simple interest.\n* Choice D ($500+4t$): uses $4$ instead of converting $4\\%$ to the decimal $0.04$.\n\n**Test Day Takeaway:** Simple interest is linear, $A=P(1+rt)$; compound interest is exponential, $A=P(1+r)^{t}$. Always convert the percent rate to a decimal before plugging in.",
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
      explanation: "**SAT Pattern: SOH-CAH-TOA in a 5-12-13 Triangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $\\tan(\\theta)=\\dfrac{\\text{opp}}{\\text{adj}}=\\dfrac{5}{12}$, so opposite $=5$, adjacent $=12$, hypotenuse $=\\sqrt{5^2+12^2}=13$. Then $\\sin(\\theta)=\\dfrac{5}{13}$.\n\n**The Full Solution:**\nStep 1: $\\tan(\\theta)=\\dfrac{\\text{opposite}}{\\text{adjacent}}=\\dfrac{5}{12}$, so the legs are opposite $=5$ and adjacent $=12$.\nStep 2: Find the hypotenuse by the Pythagorean theorem: $\\text{hyp}^2=5^2+12^2=25+144=169 \\Rightarrow \\text{hyp}=13$. This is the classic $5$-$12$-$13$ right triangle.\nStep 3: $\\sin(\\theta)=\\dfrac{\\text{opposite}}{\\text{hypotenuse}}=\\dfrac{5}{13}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{12}{13}$): that is $\\cos(\\theta)=\\dfrac{\\text{adjacent}}{\\text{hypotenuse}}$, not the sine.\n* Choice C ($\\frac{5}{12}$): repeats the given $\\tan(\\theta)$ instead of computing the sine.\n* Choice D ($\\frac{13}{5}$): that is $\\csc(\\theta)$, the reciprocal of $\\sin(\\theta)$.\n\n**Test Day Takeaway:** From one trig ratio, label two sides of the right triangle, find the third with the Pythagorean theorem, then read off whatever ratio you need. Memorize the $5$-$12$-$13$ triple to skip the arithmetic.",
      skills: ["soh-cah-toa", "right-triangles"]
    },
    {
      id: 16,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "A car travels $150$ miles in $2$ hours and $30$ minutes. What is the car's average speed, in miles per hour?",
      correctAnswer: "60",
      explanation: "**SAT Pattern: Average Rate**\n\n**The correct answer is $60$.**\n\n**The Fast Way (~10s):** $2$ hr $30$ min $=2.5$ hr, so speed $=\\dfrac{150}{2.5}=60$ miles per hour.\n\n**The Full Solution:**\nStep 1: Average speed $=\\dfrac{\\text{total distance}}{\\text{total time}}$.\nStep 2: Convert the time to a single unit: $2$ hr $30$ min $=2+\\dfrac{30}{60}=2.5$ hours.\nStep 3: Divide: $\\dfrac{150}{2.5}=60$ miles per hour.\n\n**Common Mistakes:** Writing the time as $2.30$ hours gives $\\dfrac{150}{2.3}\\approx 65.2$; dropping the $30$ minutes gives $\\dfrac{150}{2}=75$; multiplying instead of dividing gives $150\\times 2.5=375$.\n\n**Test Day Takeaway:** Average speed is total distance divided by total time. Convert mixed time units to one unit ($30$ min $=0.5$ hr, not $0.30$ hr) before dividing.",
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
      explanation: "**SAT Pattern: Identifying Contradiction Equations**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Distribute: $5x-10+3x=8x-6 \\Rightarrow 8x-10=8x-6$. Subtract $8x$ to get $-10=-6$, which is never true, so there are $0$ solutions.\n\n**The Full Solution:**\nStep 1: Expand the left side: $5(x-2)+3x=5x-10+3x=8x-10$.\nStep 2: The equation is now $8x-10=8x-6$.\nStep 3: Subtract $8x$ from both sides: $-10=-6$. This is a false statement, so no value of $x$ can satisfy the equation — it has $0$ solutions.\n\n**Why the wrong answers are tempting:**\n* Choice B (Infinitely many): that happens when the two sides are identical (e.g. $-10=-10$); here the constants differ.\n* Choice C ($1$): assumes any linear equation has exactly one solution, but that only holds when the $x$-coefficients differ.\n* Choice D ($2$): a quadratic-style answer; this equation is linear, not quadratic.\n\n**Test Day Takeaway:** After simplifying, equal $x$-coefficients with different constants means no solution; identical sides means infinitely many; different $x$-coefficients means exactly one.",
      skills: ["solving-equations", "linear-equations"]
    },
    {
      id: 18,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "The circle with equation $x^2 + y^2 = 49$ is graphed in the $xy$-plane. What is the radius of the circle?",
      correctAnswer: "7",
      explanation: "**SAT Pattern: Standard Form Circle Centered at Origin**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~5s):** A circle at the origin is $x^2+y^2=r^2$, so $r^2=49 \\Rightarrow r=7$.\n\n**The Full Solution:**\nStep 1: The equation $x^2+y^2=r^2$ describes a circle centered at the origin with radius $r$.\nStep 2: Match the constant: $r^2=49$.\nStep 3: Take the square root: $r=\\sqrt{49}=7$.\n\n**Common Mistakes:** Reporting $49$ (that is $r^2$, not the radius) or $14$ (the diameter, $2r$).\n\n**Test Day Takeaway:** In $x^2+y^2=r^2$, the constant on the right is $r^2$ — take its square root to get the radius.",
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
      explanation: "**SAT Pattern: Function Evaluation with Negative Input**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $f(-4)=2(-4)^2+3(-4)-5=2(16)-12-5=32-12-5=15$.\n\n**The Full Solution:**\nStep 1: Substitute $x=-4$ into $f(x)=2x^2+3x-5$: $f(-4)=2(-4)^2+3(-4)-5$.\nStep 2: Square first: $(-4)^2=16$, so $2(16)=32$. The middle term is $3(-4)=-12$.\nStep 3: Combine: $32-12-5=15$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-49$): treats $(-4)^2$ as $-16$, breaking the sign rule for squaring a negative.\n* Choice C ($39$): treats $3(-4)$ as $+12$, dropping the negative on the middle term.\n* Choice D ($20$): computes $32-12=20$ but forgets to subtract the constant $5$.\n\n**Test Day Takeaway:** A negative input squared is positive: $(-a)^2=a^2$. Wrap negative substitutions in parentheses so the sign rides through every term.",
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
      explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Parallel lines share the slope $\\frac{1}{2}$, and the point $(0,4)$ is the $y$-intercept, so $y=\\dfrac{1}{2}x+4$.\n\n**The Full Solution:**\nStep 1: Parallel lines have identical slopes, so the new line has slope $\\dfrac{1}{2}$.\nStep 2: The point $(0,4)$ has $x=0$, which makes it the $y$-intercept: $b=4$.\nStep 3: Assemble slope-intercept form: $y=\\dfrac{1}{2}x+4$. Check: at $x=0$, $y=\\dfrac{1}{2}(0)+4=4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y=-2x+4$): uses the perpendicular slope $-2$ (the negative reciprocal) instead of the parallel slope.\n* Choice C ($y=\\frac{1}{2}x-3$): this is the original line $\\ell$, which does not pass through $(0,4)$.\n* Choice D ($y=-\\frac{1}{2}x+4$): flips the sign of the slope; parallel means the slope stays positive $\\frac{1}{2}$.\n\n**Test Day Takeaway:** Parallel means same slope; perpendicular means negative reciprocal. A point of the form $(0,b)$ hands you the $y$-intercept directly.",
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
      explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $1.5$.**\n\n**The Fast Way (~5s):** In $\\hat{y}=1.5x+12$, the slope $1.5$ is the predicted change in $y$ per one-unit increase in $x$ — here, per additional advertisement.\n\n**The Full Solution:**\nStep 1: For a linear model $\\hat{y}=mx+b$, the slope $m$ is the predicted change in $y$ for each one-unit increase in $x$, and the intercept $b$ is the predicted $y$ when $x=0$.\nStep 2: The question asks for the additional hundreds of units per additional advertisement — that is exactly the slope.\nStep 3: The slope is $m=1.5$, so each additional advertisement predicts $1.5$ more hundreds of units sold.\n\n**Common Mistakes:** Reporting $12$ (the intercept — sales with $0$ ads), $13.5$ (the prediction after $1$ ad, $1.5(1)+12$), or $150$ (multiplying $1.5$ by $100$, when the units are already counted in hundreds).\n\n**Test Day Takeaway:** The slope of a best-fit line is the predicted change in $y$ per one-unit change in $x$; the intercept is the predicted $y$ at $x=0$.",
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
      explanation: "**SAT Pattern: Conditional Probability from Two-Way Table**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** \"Given prefers tea\" sets the denominator to the tea total, $90$. Office 2 contributes $60$ tea drinkers, so the probability is $\\dfrac{60}{90}=\\dfrac{2}{3}$.\n\n**The Full Solution:**\nStep 1: \"Given that the employee prefers tea\" restricts the sample to tea drinkers only.\nStep 2: Total tea drinkers $=30+60=90$ (the Tea column total).\nStep 3: Of those, Office 2 has $60$, so the probability is $\\dfrac{60}{90}=\\dfrac{2}{3}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{90}{200}$): the fraction of all $200$ employees who prefer tea, ignoring the \"given\" condition.\n* Choice B ($\\frac{60}{110}$): reverses the condition — this is the fraction of Office 2 employees ($110$) who prefer tea, i.e. \"given Office 2,\" not \"given tea.\"\n* Choice D ($\\frac{60}{200}$): divides by the overall total of $200$ instead of just the tea drinkers.\n\n**Test Day Takeaway:** The word \"given\" sets the denominator: \"given prefers tea\" means the Tea total goes on the bottom, and the matching cell goes on top.",
      skills: ["two-way-table", "conditional-probability"]
    }
  ]
};

export default practiceTest6M2Easy;
