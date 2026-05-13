// Practice Test 10 — Math Module 2 Easy variant (22 questions)
// For students routed to easier path after Module 1 (~<60% correct).
// Distribution: 3E / 13M / 6H. Q1-3 easy openers. Max-score ceiling: ~650.

export const practiceTest10M2Easy = {
  id: "module-2-easy",
  title: "Module 2 (Easy)",
  variant: "easy",
  timeLimit: 35,
  questions: [
    // ============================================================
    // Q1-Q3: Easy openers (band 2-3)
    // ============================================================
    {
      id: 1,
      type: "multiple-choice",
      difficulty: "easy",
      band: 2,
      question: "If $4x - 3 = 17$, what is the value of $x$?",
      choices: [
        // distractor: forgets to divide by 4 — uses 17 + 3 = 20
        { id: "A", text: "$20$" },
        // distractor: applies the inverse operation — subtracts 3 instead of adding
        { id: "B", text: "$\\dfrac{7}{2}$" },
        { id: "C", text: "$5$" },
        // distractor: divides 17 by 4 without first adding 3
        { id: "D", text: "$\\dfrac{17}{4}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Add $3$: $4x = 20$. Divide by $4$: $x = 5$.\n\n**The Full Solution:**\n$4x - 3 = 17$\n$4x = 17 + 3 = 20$\n$x = \\dfrac{20}{4} = 5$.\n\nVerification: $4(5) - 3 = 20 - 3 = 17$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — finds $4x = 20$ but forgets to divide by $4$.\n* Choice B: \"applies the inverse operation\" — subtracts $3$ instead of adding when isolating $4x$.\n* Choice D: \"wrong order\" — divides $17$ by $4$ before handling the $-3$ term.\n\n**Test Day Takeaway:** Undo addition/subtraction first, then multiplication/division. Always verify by substituting back.",
      skills: ["solving-equations", "function-evaluation"]
    },
    {
      id: 2,
      type: "multiple-choice",
      difficulty: "easy",
      band: 2,
      question: "What is $25\\%$ of $80$?",
      choices: [
        // distractor: subtracts the percent — 80 - 25 = 55
        { id: "A", text: "$55$" },
        { id: "B", text: "$20$" },
        // distractor: divides by 25 directly — 80 / 25
        { id: "C", text: "$3.2$" },
        // distractor: uses 25% of 100 instead — gives 25
        { id: "D", text: "$25$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Percent of a Value**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $25\\%$ of $80$ is $\\dfrac{1}{4} \\cdot 80 = 20$.\n\n**The Full Solution:**\nConvert to a decimal: $25\\% = 0.25$.\n$0.25 \\cdot 80 = 20$.\nOr: $25\\% = \\dfrac{1}{4}$, so $\\dfrac{1}{4} \\cdot 80 = 20$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — subtracts $25$ from $80$ instead of taking $25\\%$ of $80$.\n* Choice C: \"wrong base\" — divides $80$ by $25$ instead of multiplying by $0.25$.\n* Choice D: \"wrong base\" — gives the percent as the answer.\n\n**Test Day Takeaway:** $25\\% = \\dfrac{1}{4}$, $50\\% = \\dfrac{1}{2}$, $10\\% = \\dfrac{1}{10}$. Memorize these and divide instead of multiplying decimals.",
      skills: ["percent-of-value", "percent-decimal-conversion"]
    },
    {
      id: 3,
      type: "multiple-choice",
      difficulty: "easy",
      band: 3,
      question: "The function $f$ is defined by $f(x) = 2x + 7$. What is the value of $f(5)$?",
      choices: [
        // distractor: stops at 2 + 5 + 7 — adds instead of multiplying
        { id: "A", text: "$14$" },
        // distractor: uses x = 7 by mistake
        { id: "B", text: "$21$" },
        { id: "C", text: "$17$" },
        // distractor: forgets to add 7 — gives 2(5) only
        { id: "D", text: "$10$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $f(5) = 2(5) + 7 = 10 + 7 = 17$.\n\n**The Full Solution:**\nReplace $x$ with $5$ in $f(x) = 2x + 7$:\n$f(5) = 2(5) + 7 = 10 + 7 = 17$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — adds $2 + 5 + 7$ rather than multiplying $2 \\cdot 5$.\n* Choice B: \"wrong base\" — substitutes $x = 7$ instead of $x = 5$, giving $2(7) + 7 = 21$.\n* Choice D: \"stops one step early\" — computes $2(5) = 10$ but forgets the $+ 7$.\n\n**Test Day Takeaway:** $f(a)$ means substitute $a$ for every $x$. Always finish the arithmetic — don't stop after the multiplication.",
      skills: ["function-evaluation", "function-notation"]
    },
    // ============================================================
    // Q4-Q16: Medium core (band 4-5)
    // ============================================================
    {
      id: 4,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "A line in the $xy$-plane passes through the points $(0, 4)$ and $(3, 13)$. What is the slope of the line?",
      choices: [
        // distractor: stops at rise = 9
        { id: "A", text: "$9$" },
        { id: "B", text: "$3$" },
        // distractor: takes reciprocal
        { id: "C", text: "$\\dfrac{1}{3}$" },
        // distractor: applies inverse — divides x-difference by y-difference, with sign error
        { id: "D", text: "$-3$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Slope $= \\dfrac{13 - 4}{3 - 0} = \\dfrac{9}{3} = 3$.\n\n**The Full Solution:**\nSlope $= \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{13 - 4}{3 - 0} = \\dfrac{9}{3} = 3$.\n\nVerification: line $y = 3x + 4$ passes through $(0, 4)$ \\checkmark and $(3, 13)$ since $3(3) + 4 = 13$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the rise ($9$) without dividing by the run.\n* Choice C: \"applies the inverse operation\" — flips numerator and denominator.\n* Choice D: \"wrong sign\" — sign-flipped slope.\n\n**Test Day Takeaway:** Slope $= \\dfrac{\\Delta y}{\\Delta x}$. Always rise over run, in that order.",
      skills: ["slope-from-points", "slope"]
    },
    {
      id: 5,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "If $\\dfrac{x}{8} = \\dfrac{15}{6}$, what is the value of $x$?",
      correctAnswer: "20",
      explanation: "**SAT Pattern: Proportions**\n\n**Answer: $20$.**\n\n**The Fast Way (~10s):** Cross-multiply: $6x = 8 \\cdot 15 = 120$. So $x = 20$.\n\n**The Full Solution:**\n$\\dfrac{x}{8} = \\dfrac{15}{6}$\n\nCross-multiply: $6 \\cdot x = 8 \\cdot 15$.\n$6x = 120$\n$x = 20$.\n\nVerification: $\\dfrac{20}{8} = 2.5$ and $\\dfrac{15}{6} = 2.5$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Multiplying $8 \\cdot 6 = 48$ and using that as the denominator.\n* Cross-multiplying then forgetting to divide ($120$ instead of $20$).\n* Reading the proportion as $\\dfrac{x}{6} = \\dfrac{15}{8}$.\n\n**Test Day Takeaway:** Cross-multiplication: $\\dfrac{a}{b} = \\dfrac{c}{d} \\Rightarrow ad = bc$. Always solve the resulting linear equation.",
      skills: ["solving-equations", "rate-conversion"]
    },
    {
      id: 6,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A right triangle has legs of length $5$ and $12$. What is the length of the hypotenuse?",
      choices: [
        // distractor: adds the legs — 5 + 12
        { id: "A", text: "$17$" },
        { id: "B", text: "$13$" },
        // distractor: uses sqrt(legs) without squaring
        { id: "C", text: "$\\sqrt{17}$" },
        // distractor: finds hypotenuse-squared without taking square root
        { id: "D", text: "$169$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Pythagorean Theorem (5-12-13)**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Recognize the $5$-$12$-$13$ Pythagorean triple. Hypotenuse $= 13$.\n\n**The Full Solution:**\n$a^2 + b^2 = c^2$\n$5^2 + 12^2 = c^2$\n$25 + 144 = 169 = c^2$\n$c = \\sqrt{169} = 13$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — adds the legs instead of using $a^2 + b^2 = c^2$.\n* Choice C: \"wrong base\" — adds the legs without squaring, then takes a square root.\n* Choice D: \"stops one step early\" — gives $c^2$ instead of $c$.\n\n**Test Day Takeaway:** Memorize the SAT Pythagorean triples: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$.",
      skills: ["pythagorean-theorem", "triangles"]
    },
    {
      id: 7,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "What is the area of a rectangle with length $9$ centimeters and width $4$ centimeters?",
      choices: [
        // distractor: gives the perimeter
        { id: "A", text: "$26\\text{ cm}^2$" },
        { id: "B", text: "$36\\text{ cm}^2$" },
        // distractor: gives semi-perimeter
        { id: "C", text: "$13\\text{ cm}^2$" },
        // distractor: adds length and width
        { id: "D", text: "$13\\text{ cm}$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Area of a Rectangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Area $= \\ell \\cdot w = 9 \\cdot 4 = 36$ cm$^2$.\n\n**The Full Solution:**\nArea of rectangle $= \\text{length} \\times \\text{width} = 9 \\cdot 4 = 36$ cm$^2$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — gives the perimeter $2(9 + 4) = 26$.\n* Choice C: \"wrong base\" — gives the semi-perimeter $9 + 4 = 13$.\n* Choice D: \"applies the inverse operation\" — adds dimensions and uses the wrong unit.\n\n**Test Day Takeaway:** Area uses multiplication and squared units. Perimeter uses addition and linear units.",
      skills: ["triangle-area"]
    },
    {
      id: 8,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A bookstore is having a sale where every book is $30\\%$ off. If the original price of a book is $\\$45$, what is the sale price?",
      choices: [
        // distractor: gives the discount amount only
        { id: "A", text: "$\\$13.50$" },
        { id: "B", text: "$\\$31.50$" },
        // distractor: subtracts 30 directly
        { id: "C", text: "$\\$15$" },
        // distractor: applies 30% as the new price ratio
        { id: "D", text: "$\\$58.50$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Sale price $= 70\\%$ of $\\$45 = 0.70 \\cdot 45 = \\$31.50$.\n\n**The Full Solution:**\nDiscount $= 30\\% \\cdot 45 = 0.30 \\cdot 45 = \\$13.50$.\nSale price $= 45 - 13.50 = \\$31.50$.\nOr directly: pay $100\\% - 30\\% = 70\\%$, so $0.70 \\cdot 45 = \\$31.50$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives the discount instead of the sale price.\n* Choice C: \"wrong base\" — subtracts $30$ as a dollar amount.\n* Choice D: \"applies the inverse operation\" — adds $30\\%$ instead of subtracting.\n\n**Test Day Takeaway:** For a $p\\%$ discount, multiply by $(1 - p/100)$ in one step. Always re-read whether the question asks for sale price or discount amount.",
      skills: ["percent-change", "percent-word-problems"]
    },
    {
      id: 9,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "If $x^2 - 7x + 12 = 0$, what are the solutions for $x$?",
      choices: [
        // distractor: factors but flips signs
        { id: "A", text: "$x = -3$ and $x = -4$" },
        { id: "B", text: "$x = 3$ and $x = 4$" },
        // distractor: picks one root that makes 12 — 1 and 12
        { id: "C", text: "$x = 1$ and $x = 12$" },
        // distractor: 2 and 6 (also multiplies to 12 but doesn't sum to 7)
        { id: "D", text: "$x = 2$ and $x = 6$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Quadratic by Factoring**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Find two numbers that multiply to $12$ and add to $7$: $3$ and $4$. So $(x - 3)(x - 4) = 0$, giving $x = 3, 4$.\n\n**The Full Solution:**\n$x^2 - 7x + 12 = (x - 3)(x - 4) = 0$.\nSetting each factor to $0$: $x = 3$ or $x = 4$.\n\nVerification: $3^2 - 7(3) + 12 = 9 - 21 + 12 = 0$ \\checkmark and $4^2 - 7(4) + 12 = 16 - 28 + 12 = 0$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"sign error\" — factors as $(x + 3)(x + 4)$, ignoring that the middle term is $-7x$, not $+7x$.\n* Choice C: \"wrong base\" — picks factors of $12$ that don't sum to $7$.\n* Choice D: \"wrong base\" — picks $2 \\cdot 6 = 12$ but $2 + 6 = 8 \\neq 7$.\n\n**Test Day Takeaway:** For $x^2 + bx + c$, find two numbers that multiply to $c$ and add to $b$. Match BOTH conditions.",
      skills: ["finding-roots-factoring"]
    },
    {
      id: 10,
      type: "multiple-choice",
      difficulty: "medium",
      band: 4,
      question: "What is the volume, in cubic inches, of a rectangular box with length $5$ inches, width $4$ inches, and height $7$ inches?",
      choices: [
        // distractor: gives the surface area component
        { id: "A", text: "$83$" },
        // distractor: gives the perimeter sum
        { id: "B", text: "$32$" },
        { id: "C", text: "$140$" },
        // distractor: 5 + 4 + 7
        { id: "D", text: "$16$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Volume of a Rectangular Prism**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $V = \\ell \\cdot w \\cdot h = 5 \\cdot 4 \\cdot 7 = 140$.\n\n**The Full Solution:**\nVolume of rectangular prism $= \\text{length} \\times \\text{width} \\times \\text{height}$.\n$V = 5 \\cdot 4 \\cdot 7 = 20 \\cdot 7 = 140$ cubic inches.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — gives part of the surface area.\n* Choice B: \"wrong base\" — gives a sum of edges.\n* Choice D: \"applies the inverse operation\" — adds dimensions instead of multiplying.\n\n**Test Day Takeaway:** Volume of a box $= \\ell \\cdot w \\cdot h$. Cubic units always come from multiplying three lengths.",
      skills: ["volume-prism"]
    },
    {
      id: 11,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The mean of $5$ test scores is $82$. The first $4$ scores are $78, 85, 90,$ and $80$. What is the fifth score?",
      correctAnswer: "77",
      explanation: "**SAT Pattern: Mean from Total**\n\n**Answer: $77$.**\n\n**The Fast Way (~15s):** Total of $5$ scores $= 5 \\cdot 82 = 410$. Sum of first four $= 78 + 85 + 90 + 80 = 333$. Fifth score $= 410 - 333 = 77$.\n\n**The Full Solution:**\nMean of $5$ scores is $82$, so total $= 5 \\cdot 82 = 410$.\nSum of first four scores: $78 + 85 + 90 + 80 = 333$.\nFifth score $= 410 - 333 = 77$.\n\nVerification: $\\dfrac{78 + 85 + 90 + 80 + 77}{5} = \\dfrac{410}{5} = 82$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Adding the four scores and stopping ($333$).\n* Dividing $410$ by $4$ instead of subtracting.\n* Computing $82 - $ (one of the scores).\n\n**Test Day Takeaway:** Mean problems with a missing value: total $= n \\cdot$ mean, then missing $=$ total $-$ sum of given values.",
      skills: ["calculate-mean"]
    },
    {
      id: 12,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "Solve the system of equations.\n\n$x + y = 12$\n$x - y = 4$",
      choices: [
        // distractor: swaps x and y
        { id: "A", text: "$x = 4$, $y = 8$" },
        { id: "B", text: "$x = 8$, $y = 4$" },
        // distractor: divides 12 and 4 by 2 only
        { id: "C", text: "$x = 6$, $y = 2$" },
        // distractor: averages incorrectly
        { id: "D", text: "$x = 12$, $y = 4$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: System by Elimination (Sum/Difference)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Add: $2x = 16$, so $x = 8$. Subtract: $2y = 8$, so $y = 4$.\n\n**The Full Solution:**\nAdd the two equations: $(x + y) + (x - y) = 12 + 4$, giving $2x = 16$, so $x = 8$.\nSubstitute into the first: $8 + y = 12$, so $y = 4$.\n\nVerification: $8 + 4 = 12$ \\checkmark and $8 - 4 = 4$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"swaps variables\" — assigns the smaller number to $x$.\n* Choice C: \"wrong base\" — halves both right-hand sides without combining the equations.\n* Choice D: \"reads off coefficients\" — reads $12$ as $x$ and $4$ as $y$ directly.\n\n**Test Day Takeaway:** When you see $x + y$ and $x - y$, add to get $2x$ and subtract to get $2y$. Fast and clean.",
      skills: ["elimination-method", "substitution-method"]
    },
    {
      id: 13,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "In a right triangle, the side opposite angle $\\theta$ has length $7$ and the hypotenuse has length $25$. What is $\\sin \\theta$?",
      choices: [
        { id: "A", text: "$\\dfrac{7}{25}$" },
        // distractor: gives cos theta
        { id: "B", text: "$\\dfrac{24}{25}$" },
        // distractor: gives tan theta
        { id: "C", text: "$\\dfrac{7}{24}$" },
        // distractor: flips numerator and denominator
        { id: "D", text: "$\\dfrac{25}{7}$" }
      ],
      correctAnswer: "A",
      explanation: "**SAT Pattern: SOH-CAH-TOA**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $\\sin \\theta = \\dfrac{\\text{opposite}}{\\text{hypotenuse}} = \\dfrac{7}{25}$.\n\n**The Full Solution:**\nSOH-CAH-TOA: $\\sin \\theta = \\dfrac{\\text{opposite}}{\\text{hypotenuse}}$.\n$\\sin \\theta = \\dfrac{7}{25}$.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"wrong base\" — gives $\\cos \\theta = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}} = \\dfrac{24}{25}$ (since $7$-$24$-$25$ is a Pythagorean triple).\n* Choice C: \"wrong base\" — gives $\\tan \\theta = \\dfrac{\\text{opposite}}{\\text{adjacent}}$.\n* Choice D: \"applies the inverse operation\" — gives $\\csc \\theta = \\dfrac{\\text{hypotenuse}}{\\text{opposite}}$.\n\n**Test Day Takeaway:** SOH-CAH-TOA tells you exactly which two sides go in numerator and denominator. Sin uses opposite/hypotenuse — never confuse the order.",
      skills: ["soh-cah-toa"]
    },
    {
      id: 14,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The scatterplot below shows the relationship between hours studied ($x$) and test score ($y$) for students. The line of best fit is $y = 6x + 50$. According to this model, what test score is predicted for a student who studies $7$ hours?",
      diagram: { type: "scatterplot", params: {
        points: [[0,52],[1,55],[2,64],[3,66],[4,76],[5,78],[6,88],[7,90],[8,96],[9,108]],
        xMin: 0, xMax: 10, yMin: 40, yMax: 115,
        xGridStep: 1, yGridStep: 5, xLabelStep: 2, yLabelStep: 15,
        xLabel: "Hours studied", yLabel: "Test score",
        bestFitLine: { slope: 6, intercept: 50 },
      } },
      correctAnswer: "92",
      explanation: "**SAT Pattern: Line of Best Fit Prediction**\n\n**Answer: $92$.**\n\n**The Fast Way (~10s):** $y = 6(7) + 50 = 42 + 50 = 92$.\n\n**The Full Solution:**\nSubstitute $x = 7$ into $y = 6x + 50$:\n$y = 6(7) + 50 = 42 + 50 = 92$.\n\n**Common Mistakes to Avoid:**\n* Stopping at $42$ (forgetting the $+ 50$).\n* Adding $6 + 50 + 7 = 63$ instead of multiplying.\n* Dividing instead of multiplying when computing $6 \\cdot 7$.\n\n**Test Day Takeaway:** A line of best fit gives a predicted $y$-value for any $x$. Just plug in $x$ and compute.",
      skills: ["function-evaluation", "slope-intercept-form"]
    },
    {
      id: 15,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "The table shows the favorite type of music preferred by students at a school.\n\n| | Pop | Rock | Hip-Hop | Total |\n|---|---|---|---|---|\n| 9th Grade | $40$ | $30$ | $50$ | $120$ |\n| 10th Grade | $35$ | $25$ | $60$ | $120$ |\n| Total | $75$ | $55$ | $110$ | $240$ |\n\nIf a student is selected at random, what is the probability that the student is in 10th grade and prefers hip-hop?",
      choices: [
        // distractor: probability of just hip-hop
        { id: "A", text: "$\\dfrac{110}{240}$" },
        // distractor: probability of 10th grade given hip-hop
        { id: "B", text: "$\\dfrac{60}{110}$" },
        { id: "C", text: "$\\dfrac{60}{240}$" },
        // distractor: probability of hip-hop given 10th grade
        { id: "D", text: "$\\dfrac{60}{120}$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Two-Way Table — Joint Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Joint probability uses the GRAND total. $\\dfrac{60}{240} = \\dfrac{1}{4}$.\n\n**The Full Solution:**\nThe number of students who are 10th grade AND prefer hip-hop is $60$.\nTotal students: $240$.\n$P(\\text{10th and hip-hop}) = \\dfrac{60}{240} = \\dfrac{1}{4}$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — gives the probability of preferring hip-hop, ignoring the grade.\n* Choice B: \"applies the inverse operation\" — conditional $P(\\text{10th} \\mid \\text{hip-hop})$.\n* Choice D: \"applies the inverse operation\" — conditional $P(\\text{hip-hop} \\mid \\text{10th})$, using row total $120$.\n\n**Test Day Takeaway:** Joint probability \"and\": numerator is the cell, denominator is the GRAND total. Conditional \"given\": denominator is the row or column total of the condition.",
      skills: ["two-way-table", "probability-basics"]
    },
    {
      id: 16,
      type: "multiple-choice",
      difficulty: "medium",
      band: 5,
      question: "A car uses $1$ gallon of gas to travel $32$ miles. At this rate, how many gallons of gas are needed to travel $480$ miles?",
      choices: [
        // distractor: divides 480 by 32 incorrectly — gives 14
        { id: "A", text: "$14$" },
        { id: "B", text: "$15$" },
        // distractor: multiplies 32 by some factor
        { id: "C", text: "$16$" },
        // distractor: 480/30 from rounding
        { id: "D", text: "$13$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Rate Word Problem (Proportions)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Gallons $= \\dfrac{480}{32} = 15$.\n\n**The Full Solution:**\nSet up a proportion: $\\dfrac{1 \\text{ gallon}}{32 \\text{ miles}} = \\dfrac{g}{480 \\text{ miles}}$.\n$32g = 480$\n$g = 15$.\n\nVerification: $15$ gallons $\\times 32$ miles/gallon $= 480$ miles \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"arithmetic slip\" — slight error in the long division.\n* Choice C: \"applies the inverse operation\" — uses $480 \\div 30$ then rounds up.\n* Choice D: \"wrong base\" — rounds $32$ to $30$ before dividing.\n\n**Test Day Takeaway:** Total $\\div$ rate $=$ count. Always identify which quantity is per unit ($32$ miles per $1$ gallon).",
      skills: ["rate-conversion", "unit-conversion"]
    },
    // ============================================================
    // Q17-Q22: Medium-hard ceiling (band 6-7)
    // ============================================================
    {
      id: 17,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "A line in the $xy$-plane is parallel to the line $y = -2x + 5$ and passes through the point $(3, 1)$. What is the equation of the line?",
      choices: [
        // distractor: uses perpendicular slope 1/2
        { id: "A", text: "$y = \\dfrac{1}{2}x - \\dfrac{1}{2}$" },
        { id: "B", text: "$y = -2x + 7$" },
        // distractor: keeps original y-intercept
        { id: "C", text: "$y = -2x + 5$" },
        // distractor: sign-flips slope
        { id: "D", text: "$y = 2x - 5$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: Parallel Line Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Parallel slope $= -2$. Use point-slope: $y - 1 = -2(x - 3) \\Rightarrow y = -2x + 6 + 1 = -2x + 7$.\n\n**The Full Solution:**\nParallel lines have equal slopes, so $m = -2$.\nUse point-slope form with $(3, 1)$: $y - 1 = -2(x - 3)$.\n$y = -2x + 6 + 1$\n$y = -2x + 7$.\n\nVerification: at $x = 3$: $y = -2(3) + 7 = -6 + 7 = 1$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"applies the inverse operation\" — uses perpendicular slope.\n* Choice C: \"stops one step early\" — copies the original line.\n* Choice D: \"sign error\" — sign-flips the slope.\n\n**Test Day Takeaway:** Parallel lines: same slope, different $y$-intercept. Use point-slope to find the new $y$-intercept.",
      skills: ["parallel-line-slope", "writing-parallel-equation"]
    },
    {
      id: 18,
      type: "multiple-choice",
      difficulty: "hard",
      band: 6,
      question: "The function $P$ is defined by $P(t) = 200(1.04)^t$, where $P(t)$ is the population $t$ years after $2020$. According to this model, the population is increasing by what percent each year?",
      choices: [
        // distractor: gives base 1.04 directly
        { id: "A", text: "$1.04\\%$" },
        // distractor: gives 1 - 1.04
        { id: "B", text: "$0.04\\%$" },
        { id: "C", text: "$4\\%$" },
        // distractor: rounds 1.04 to 4 mistakenly, but takes hundred wrong way
        { id: "D", text: "$104\\%$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Exponential Growth Rate**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Growth factor $1.04 = 1 + 0.04$, so the rate is $4\\%$ per year.\n\n**The Full Solution:**\nIn $a \\cdot b^t$ where $b > 1$, the percent growth per period is $(b - 1) \\cdot 100\\%$.\nHere $b = 1.04$, so growth $= 0.04 \\cdot 100\\% = 4\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"wrong base\" — reads off $1.04$ as the percent.\n* Choice B: \"misplaces decimal\" — gives $0.04$ as a percent without converting.\n* Choice D: \"applies the inverse operation\" — gives the entire growth factor as a percent.\n\n**Test Day Takeaway:** For exponential growth $a(1 + r)^t$, the growth rate is $r$ (as a decimal). Subtract $1$ from the base, then multiply by $100$ for the percent.",
      skills: ["exponential-growth-decay"]
    },
    {
      id: 19,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "A circle has center $(0, 0)$ and radius $6$. What is the area of the circle, expressed as a multiple of $\\pi$? Enter your answer as a number times $\\pi$ (i.e., enter only the coefficient).",
      correctAnswer: "36",
      explanation: "**SAT Pattern: Area of a Circle**\n\n**Answer: $36$.**\n\n**The Fast Way (~5s):** $A = \\pi r^2 = \\pi (6)^2 = 36\\pi$. Coefficient: $36$.\n\n**The Full Solution:**\n$A = \\pi r^2 = \\pi \\cdot 6^2 = 36\\pi$ square units.\nThe coefficient of $\\pi$ is $36$.\n\n**Common Mistakes to Avoid:**\n* Computing the circumference $2\\pi r = 12\\pi$ instead.\n* Forgetting to square the radius — gives $6$.\n* Adding instead of multiplying: $\\pi + 36 = 36 + \\pi$.\n\n**Test Day Takeaway:** Area $= \\pi r^2$ (squared units). Circumference $= 2\\pi r$ (linear units). Always square the radius for area.",
      skills: ["circle-area", "circumference"]
    },
    {
      id: 20,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The total cost $C$, in dollars, of a phone plan is given by $C = 25 + 0.10m$, where $m$ is the number of minutes used. If a customer's bill is $\\$58$, how many minutes were used?",
      choices: [
        // distractor: subtracts 25 but forgets to divide
        { id: "A", text: "$33$" },
        // distractor: divides 58 by 0.10 directly
        { id: "B", text: "$580$" },
        { id: "C", text: "$330$" },
        // distractor: 58/25
        { id: "D", text: "$232$" }
      ],
      correctAnswer: "C",
      explanation: "**SAT Pattern: Linear Word Problem with Two-Step Solve**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $58 = 25 + 0.10m \\Rightarrow 0.10m = 33 \\Rightarrow m = 330$.\n\n**The Full Solution:**\n$C = 25 + 0.10m = 58$.\nSubtract $25$: $0.10m = 33$.\nDivide by $0.10$: $m = \\dfrac{33}{0.10} = 330$.\n\nVerification: $25 + 0.10(330) = 25 + 33 = 58$ \\checkmark.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — gives $33$ without dividing by $0.10$.\n* Choice B: \"wrong base\" — divides $58$ by $0.10$ before subtracting the $25$.\n* Choice D: \"applies the inverse operation\" — divides $58$ by $25$.\n\n**Test Day Takeaway:** When solving a two-step linear equation, undo addition/subtraction before division. Dividing by a small decimal like $0.10$ is the same as multiplying by $10$.",
      skills: ["solving-equations", "word-problem-to-equation"]
    },
    {
      id: 21,
      type: "multiple-choice",
      difficulty: "hard",
      band: 7,
      question: "The expression $(3x + 2)(x - 5)$ is equivalent to which of the following?",
      choices: [
        // distractor: forgets cross terms, gets 3x^2 - 10
        { id: "A", text: "$3x^2 - 10$" },
        { id: "B", text: "$3x^2 - 13x - 10$" },
        // distractor: sign flip on middle term
        { id: "C", text: "$3x^2 + 13x - 10$" },
        // distractor: combines outer/inner incorrectly
        { id: "D", text: "$3x^2 - 17x - 10$" }
      ],
      correctAnswer: "B",
      explanation: "**SAT Pattern: FOIL / Distribution**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** FOIL: $3x \\cdot x = 3x^2$. Outer: $3x \\cdot (-5) = -15x$. Inner: $2 \\cdot x = 2x$. Last: $2 \\cdot (-5) = -10$. Combine: $3x^2 - 13x - 10$.\n\n**The Full Solution:**\n$(3x + 2)(x - 5)$\n$= 3x \\cdot x + 3x \\cdot (-5) + 2 \\cdot x + 2 \\cdot (-5)$\n$= 3x^2 - 15x + 2x - 10$\n$= 3x^2 - 13x - 10$.\n\n**Why the wrong answers are tempting:**\n* Choice A: \"stops one step early\" — multiplies first and last terms only.\n* Choice C: \"sign error\" — keeps the middle term positive.\n* Choice D: \"arithmetic slip\" — adds $-15 - 2 = -17$ instead of $-15 + 2 = -13$.\n\n**Test Day Takeaway:** FOIL: First, Outer, Inner, Last. Always combine the middle two terms with attention to signs.",
      skills: ["distributive-property", "combining-like-terms"]
    },
    {
      id: 22,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "A rectangular garden has length $3$ feet greater than its width. If the perimeter of the garden is $34$ feet, what is the width of the garden, in feet?",
      correctAnswer: "7",
      explanation: "**SAT Pattern: Word Problem to Linear Equation**\n\n**Answer: $7$.**\n\n**The Fast Way (~25s):** Width $w$, length $w + 3$. Perimeter $= 2w + 2(w + 3) = 4w + 6 = 34$, so $w = 7$.\n\n**The Full Solution:**\nLet $w =$ width. Then length $= w + 3$.\nPerimeter $= 2 \\cdot \\text{length} + 2 \\cdot \\text{width} = 2(w + 3) + 2w = 2w + 6 + 2w = 4w + 6$.\n$4w + 6 = 34$\n$4w = 28$\n$w = 7$.\n\nVerification: width $= 7$, length $= 10$. Perimeter $= 2(7) + 2(10) = 14 + 20 = 34$ \\checkmark.\n\n**Common Mistakes to Avoid:**\n* Solving for length ($10$) instead of width ($7$).\n* Forgetting to double both dimensions in the perimeter formula.\n* Using $34 \\div 4 = 8.5$ — ignores the $+ 3$ relationship.\n\n**Test Day Takeaway:** Define variables clearly, write expressions for both quantities, plug into the formula, then solve. Always re-read what's asked for.",
      skills: ["solving-equations", "word-problem-to-equation"]
    }
  ]
};

export default practiceTest10M2Easy;
