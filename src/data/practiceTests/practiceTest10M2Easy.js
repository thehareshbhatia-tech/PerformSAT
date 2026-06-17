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
      explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Add $3$ to both sides: $4x = 20$. Divide by $4$: $x = 5$.\n\n**The Full Solution:**\nStep 1: Undo the subtraction. $4x - 3 = 17 \\Rightarrow 4x = 20$.\nStep 2: Undo the multiplication. $x = \\frac{20}{4} = 5$.\nStep 3: Check: $4(5) - 3 = 20 - 3 = 17$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): stops at $4x = 20$ and forgets to divide by $4$.\n* Choice B ($\\frac{7}{2}$): subtracts $3$ instead of adding when isolating $4x$.\n* Choice D ($\\frac{17}{4}$): divides $17$ by $4$ before handling the $-3$.\n\n**Test Day Takeaway:** Undo addition and subtraction first, then multiplication and division. Verify by substituting your answer back in.",
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
      explanation: "**SAT Pattern: Percent of a Value**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** $25\\%$ is $\\frac{1}{4}$, so $25\\%$ of $80$ is $\\frac{1}{4} \\cdot 80 = 20$.\n\n**The Full Solution:**\nStep 1: Convert the percent to a decimal: $25\\% = 0.25$.\nStep 2: Multiply by the base: $0.25 \\cdot 80 = 20$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($55$): subtracts $25$ from $80$ instead of taking $25\\%$ of $80$.\n* Choice C ($3.2$): divides $80$ by $25$ instead of multiplying by $0.25$.\n* Choice D ($25$): reports the percent itself as the answer.\n\n**Test Day Takeaway:** Lock in the easy fractions: $25\\% = \\frac{1}{4}$, $50\\% = \\frac{1}{2}$, $10\\% = \\frac{1}{10}$. Then dividing beats multiplying decimals.",
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
      explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $f(5) = 2(5) + 7 = 10 + 7 = 17$.\n\n**The Full Solution:**\nStep 1: Replace every $x$ in $f(x) = 2x + 7$ with $5$.\nStep 2: $f(5) = 2(5) + 7 = 10 + 7 = 17$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): adds $2 + 5 + 7$ instead of multiplying $2 \\cdot 5$ first.\n* Choice B ($21$): substitutes $x = 7$ instead of $x = 5$, giving $2(7) + 7$.\n* Choice D ($10$): computes $2(5) = 10$ but drops the $+7$.\n\n**Test Day Takeaway:** $f(a)$ means substitute $a$ for every $x$, then finish the arithmetic — don't stop after the multiplication.",
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
      explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Slope $= \\frac{13 - 4}{3 - 0} = \\frac{9}{3} = 3$.\n\n**The Full Solution:**\nStep 1: Use slope $= \\frac{y_2 - y_1}{x_2 - x_1}$ with $(0, 4)$ and $(3, 13)$.\nStep 2: $\\frac{13 - 4}{3 - 0} = \\frac{9}{3} = 3$.\nStep 3: Check: the line $y = 3x + 4$ hits $(0, 4)$ and $3(3) + 4 = 13$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): reports the rise without dividing by the run.\n* Choice C ($\\frac{1}{3}$): flips numerator and denominator (run over rise).\n* Choice D ($-3$): sign-flips the slope.\n\n**Test Day Takeaway:** Slope $= \\frac{\\Delta y}{\\Delta x}$ — rise over run, in that order.",
      skills: ["slope-from-points", "slope"]
    },
    {
      id: 5,
      type: "fill-in",
      difficulty: "medium",
      band: 4,
      question: "If $\\dfrac{x}{8} = \\dfrac{15}{6}$, what is the value of $x$?",
      correctAnswer: "20",
      explanation: "**SAT Pattern: Proportions**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~10s):** Cross-multiply: $6x = 8 \\cdot 15 = 120$, so $x = 20$.\n\n**The Full Solution:**\nStep 1: Start from $\\frac{x}{8} = \\frac{15}{6}$ and cross-multiply: $6 \\cdot x = 8 \\cdot 15$.\nStep 2: $6x = 120$, so $x = \\frac{120}{6} = 20$.\nStep 3: Check: $\\frac{20}{8} = 2.5$ and $\\frac{15}{6} = 2.5$. $\\checkmark$\n\n**Common Mistakes:** Multiplying the two denominators ($8 \\cdot 6 = 48$) and using that; cross-multiplying to $120$ but forgetting to divide by $6$; or reading the proportion as $\\frac{x}{6} = \\frac{15}{8}$.\n\n**Test Day Takeaway:** $\\frac{a}{b} = \\frac{c}{d} \\Rightarrow ad = bc$. Cross-multiply, then solve the linear equation that falls out.",
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
      explanation: "**SAT Pattern: Pythagorean Theorem (5-12-13)**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Recognize the $5$-$12$-$13$ Pythagorean triple. The hypotenuse is $13$.\n\n**The Full Solution:**\nStep 1: Apply $a^2 + b^2 = c^2$ with legs $5$ and $12$.\nStep 2: $5^2 + 12^2 = 25 + 144 = 169 = c^2$.\nStep 3: $c = \\sqrt{169} = 13$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($17$): adds the legs ($5 + 12$) instead of using $a^2 + b^2 = c^2$.\n* Choice C ($\\sqrt{17}$): adds the legs without squaring, then takes the root.\n* Choice D ($169$): gives $c^2$ and forgets to take the square root.\n\n**Test Day Takeaway:** Memorize the SAT triples — $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$ — and skip the arithmetic.",
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
      explanation: "**SAT Pattern: Area of a Rectangle**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Area $= \\ell \\cdot w = 9 \\cdot 4 = 36$ square centimeters.\n\n**The Full Solution:**\nStep 1: Area of a rectangle $= \\text{length} \\times \\text{width}$.\nStep 2: $9 \\cdot 4 = 36$, so the area is $36 \\text{ cm}^2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($26\\text{ cm}^2$): computes the perimeter $2(9 + 4) = 26$.\n* Choice C ($13\\text{ cm}^2$): adds length and width ($9 + 4 = 13$) instead of multiplying.\n* Choice D ($13\\text{ cm}$): adds the dimensions and uses a linear unit.\n\n**Test Day Takeaway:** Area multiplies and reports squared units; perimeter adds and reports linear units. The units in the choices catch this trap.",
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
      explanation: "**SAT Pattern: Percent Decrease**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Pay $100\\% - 30\\% = 70\\%$, so the sale price is $0.70 \\cdot 45 = \\$31.50$.\n\n**The Full Solution:**\nStep 1: The discount is $30\\% \\cdot 45 = 0.30 \\cdot 45 = \\$13.50$.\nStep 2: Sale price $= 45 - 13.50 = \\$31.50$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$13.50$): reports the discount instead of the sale price.\n* Choice C ($\\$15$): subtracts $30$ as a flat dollar amount.\n* Choice D ($\\$58.50$): adds $30\\%$ instead of subtracting it.\n\n**Test Day Takeaway:** For a $p\\%$ discount, multiply by $\\left(1 - \\frac{p}{100}\\right)$ in one step — and re-read whether the question wants the sale price or the discount.",
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
      explanation: "**SAT Pattern: Quadratic by Factoring**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Find two numbers that multiply to $12$ and add to $7$: those are $3$ and $4$, so $(x - 3)(x - 4) = 0$ and $x = 3$ or $x = 4$.\n\n**The Full Solution:**\nStep 1: Factor $x^2 - 7x + 12 = (x - 3)(x - 4) = 0$.\nStep 2: Set each factor to zero: $x = 3$ or $x = 4$.\nStep 3: Check: $3^2 - 7(3) + 12 = 0$ and $4^2 - 7(4) + 12 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = -3$ and $x = -4$): factors as $(x + 3)(x + 4)$, ignoring that the middle term is $-7x$.\n* Choice C ($x = 1$ and $x = 12$): picks factors of $12$ that multiply right but add to $13$, not $7$.\n* Choice D ($x = 2$ and $x = 6$): uses $2 \\cdot 6 = 12$, but $2 + 6 = 8 \\neq 7$.\n\n**Test Day Takeaway:** For $x^2 + bx + c$, find two numbers that multiply to $c$ and add to $b$. Both conditions must hold.",
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
      explanation: "**SAT Pattern: Volume of a Rectangular Prism**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $V = \\ell \\cdot w \\cdot h = 5 \\cdot 4 \\cdot 7 = 140$ cubic inches.\n\n**The Full Solution:**\nStep 1: Volume of a rectangular box $= \\text{length} \\times \\text{width} \\times \\text{height}$.\nStep 2: $5 \\cdot 4 \\cdot 7 = 20 \\cdot 7 = 140$ cubic inches.\n\n**Why the wrong answers are tempting:**\n* Choice A ($83$): a stray surface-area-style combination, not the product of all three.\n* Choice B ($32$): an edge-sum miscount, not a volume.\n* Choice D ($16$): adds the dimensions ($5 + 4 + 7$) instead of multiplying.\n\n**Test Day Takeaway:** Volume of a box $= \\ell \\cdot w \\cdot h$. Three lengths multiplied always give cubic units.",
      skills: ["volume-prism"]
    },
    {
      id: 11,
      type: "fill-in",
      difficulty: "medium",
      band: 5,
      question: "The mean of $5$ test scores is $82$. The first $4$ scores are $78, 85, 90,$ and $80$. What is the fifth score?",
      correctAnswer: "77",
      explanation: "**SAT Pattern: Mean from Total**\n\n**The correct answer is $77$.**\n\n**The Fast Way (~15s):** Total of the $5$ scores $= 5 \\cdot 82 = 410$. The first four sum to $78 + 85 + 90 + 80 = 333$, so the fifth is $410 - 333 = 77$.\n\n**The Full Solution:**\nStep 1: Mean $= 82$ over $5$ scores means total $= 5 \\cdot 82 = 410$.\nStep 2: Sum the four known scores: $78 + 85 + 90 + 80 = 333$.\nStep 3: Fifth score $= 410 - 333 = 77$.\nStep 4: Check: $\\frac{78 + 85 + 90 + 80 + 77}{5} = \\frac{410}{5} = 82$. $\\checkmark$\n\n**Common Mistakes:** Stopping at the sum of the four scores ($333$); dividing $410$ by $4$ instead of subtracting; or computing $82$ minus one of the scores.\n\n**Test Day Takeaway:** For a missing value in a mean: total $= n \\cdot \\text{mean}$, then missing value $= \\text{total} - \\text{sum of the rest}$.",
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
      explanation: "**SAT Pattern: System by Elimination (Sum/Difference)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Add the equations to get $2x = 16 \\Rightarrow x = 8$; subtract to get $2y = 8 \\Rightarrow y = 4$.\n\n**The Full Solution:**\nStep 1: Add: $(x + y) + (x - y) = 12 + 4 \\Rightarrow 2x = 16 \\Rightarrow x = 8$.\nStep 2: Substitute into $x + y = 12$: $8 + y = 12 \\Rightarrow y = 4$.\nStep 3: Check: $8 + 4 = 12$ and $8 - 4 = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = 4$, $y = 8$): swaps the values, assigning the smaller number to $x$.\n* Choice C ($x = 6$, $y = 2$): halves each right-hand side without combining the equations.\n* Choice D ($x = 12$, $y = 4$): reads $12$ and $4$ straight off the right-hand sides.\n\n**Test Day Takeaway:** When you see $x + y$ and $x - y$, add to get $2x$ and subtract to get $2y$ — one clean step each.",
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
      explanation: "**SAT Pattern: SOH-CAH-TOA**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Sine is opposite over hypotenuse: $\\sin \\theta = \\frac{7}{25}$.\n\n**The Full Solution:**\nStep 1: SOH means $\\sin \\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}$.\nStep 2: The opposite side is $7$ and the hypotenuse is $25$, so $\\sin \\theta = \\frac{7}{25}$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{24}{25}$): this is $\\cos \\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$. Since $7$-$24$-$25$ is a Pythagorean triple, the missing leg is $24$.\n* Choice C ($\\frac{7}{24}$): this is $\\tan \\theta = \\frac{\\text{opposite}}{\\text{adjacent}}$.\n* Choice D ($\\frac{25}{7}$): this flips the ratio, giving $\\csc \\theta = \\frac{\\text{hypotenuse}}{\\text{opposite}}$.\n\n**Test Day Takeaway:** SOH-CAH-TOA fixes the order. Sine is opposite over hypotenuse — put the opposite leg on top, the hypotenuse on the bottom.",
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
      explanation: "**SAT Pattern: Line of Best Fit Prediction**\n\n**The correct answer is $92$.**\n\n**The Fast Way (~10s):** Plug $x = 7$ into $y = 6x + 50$: $6(7) + 50 = 42 + 50 = 92$.\n\n**The Full Solution:**\nStep 1: The line of best fit predicts a $y$-value for any $x$. Substitute the given hours, $x = 7$.\nStep 2: $y = 6(7) + 50 = 42 + 50 = 92$.\n\n**Common Mistakes:** Stopping at $42$ and forgetting the $+50$; adding $6 + 50 + 7 = 63$ instead of multiplying the slope by $x$.\n\n**Test Day Takeaway:** A line of best fit is just a linear equation. To predict, substitute the known $x$ and compute — multiply first, then add the intercept.",
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
      explanation: "**SAT Pattern: Two-Way Table — Joint Probability**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Joint probability (\"and\") uses the grand total: $\\frac{60}{240} = \\frac{1}{4}$, which is choice C.\n\n**The Full Solution:**\nStep 1: The 10th-grade-and-hip-hop cell reads $60$ students.\nStep 2: A randomly selected student is drawn from all $240$ students, so the denominator is the grand total.\nStep 3: $P(\\text{10th and hip-hop}) = \\frac{60}{240} = \\frac{1}{4}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{110}{240}$): this is $P(\\text{hip-hop})$ alone, ignoring the grade condition.\n* Choice B ($\\frac{60}{110}$): this is the conditional $P(\\text{10th} \\mid \\text{hip-hop})$, dividing by the hip-hop column total.\n* Choice D ($\\frac{60}{120}$): this is the conditional $P(\\text{hip-hop} \\mid \\text{10th})$, dividing by the 10th-grade row total.\n\n**Test Day Takeaway:** \"And\" means joint probability — the cell count over the grand total. \"Given\" means conditional — divide by the row or column total of the stated condition.",
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
      explanation: "**SAT Pattern: Rate Word Problem (Proportions)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Miles divided by miles-per-gallon: $\\frac{480}{32} = 15$, which is choice B.\n\n**The Full Solution:**\nStep 1: The car goes $32$ miles per gallon. Set up a proportion: $\\frac{1 \\text{ gallon}}{32 \\text{ miles}} = \\frac{g}{480 \\text{ miles}}$.\nStep 2: Cross-multiply: $32g = 480$, so $g = \\frac{480}{32} = 15$.\nStep 3: Check: $15 \\times 32 = 480$ miles. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): an arithmetic slip in the division of $480$ by $32$.\n* Choice C ($16$): rounds $32$ down to $30$ then rounds the quotient up.\n* Choice D ($13$): another arithmetic miss on $\\frac{480}{32}$.\n\n**Test Day Takeaway:** Total $\\div$ rate $=$ count. Identify which quantity is \"per unit\" ($32$ miles per gallon), then divide the total by it.",
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
      explanation: "**SAT Pattern: Parallel Line Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Parallel means same slope, $m = -2$. Through $(3, 1)$: $y - 1 = -2(x - 3) \\Rightarrow y = -2x + 7$, which is choice B.\n\n**The Full Solution:**\nStep 1: Parallel lines share a slope, so the new line has $m = -2$ (matching $y = -2x + 5$).\nStep 2: Apply point-slope with $(3, 1)$: $y - 1 = -2(x - 3)$.\nStep 3: Expand: $y = -2x + 6 + 1 = -2x + 7$.\nStep 4: Check: at $x = 3$, $y = -2(3) + 7 = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = \\frac{1}{2}x - \\frac{1}{2}$): uses the perpendicular slope (negative reciprocal) instead of the parallel slope.\n* Choice C ($y = -2x + 5$): copies the original line; correct slope but wrong intercept, so it does not pass through $(3, 1)$.\n* Choice D ($y = 2x - 5$): sign-flips the slope to $+2$.\n\n**Test Day Takeaway:** Parallel lines have equal slopes but different intercepts. Carry over the slope, then use the given point to lock in the new $y$-intercept.",
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
      explanation: "**SAT Pattern: Exponential Growth Rate**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The base $1.04 = 1 + 0.04$, so the yearly growth rate is $0.04 = 4\\%$, which is choice C.\n\n**The Full Solution:**\nStep 1: In an exponential model $a \\cdot b^t$ with $b > 1$, the percent growth per period is $(b - 1) \\times 100\\%$.\nStep 2: Here $b = 1.04$, so the rate is $(1.04 - 1) \\times 100\\% = 0.04 \\times 100\\% = 4\\%$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.04\\%$): reads the whole base $1.04$ as the percent without subtracting $1$.\n* Choice B ($0.04\\%$): keeps the decimal $0.04$ but forgets to multiply by $100$ to convert to a percent.\n* Choice D ($104\\%$): converts the entire growth factor to a percent instead of just the increase.\n\n**Test Day Takeaway:** For $a(1 + r)^t$, the growth rate is $r$. Subtract $1$ from the base, then multiply by $100$ to get the percent.",
      skills: ["exponential-growth-decay"]
    },
    {
      id: 19,
      type: "fill-in",
      difficulty: "hard",
      band: 6,
      question: "A circle has center $(0, 0)$ and radius $6$. What is the area of the circle, expressed as a multiple of $\\pi$? Enter your answer as a number times $\\pi$ (i.e., enter only the coefficient).",
      correctAnswer: "36",
      explanation: "**SAT Pattern: Area of a Circle**\n\n**The correct answer is $36$.**\n\n**The Fast Way (~5s):** $A = \\pi r^2 = \\pi (6)^2 = 36\\pi$. The coefficient of $\\pi$ is $36$.\n\n**The Full Solution:**\nStep 1: Area of a circle is $A = \\pi r^2$.\nStep 2: With $r = 6$: $A = \\pi \\cdot 6^2 = 36\\pi$ square units.\nStep 3: The question asks only for the coefficient, so the answer is $36$.\n\n**Common Mistakes:** Computing the circumference $2\\pi r = 12\\pi$ (coefficient $12$); forgetting to square the radius and reporting $6$.\n\n**Test Day Takeaway:** Area uses $\\pi r^2$ (square units); circumference uses $2\\pi r$ (linear units). Always square the radius for area.",
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
      explanation: "**SAT Pattern: Linear Word Problem with Two-Step Solve**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Set $C = 58$: $58 = 25 + 0.10m \\Rightarrow 0.10m = 33 \\Rightarrow m = 330$, which is choice C.\n\n**The Full Solution:**\nStep 1: Substitute the bill: $25 + 0.10m = 58$.\nStep 2: Subtract $25$ first: $0.10m = 33$.\nStep 3: Divide by $0.10$: $m = \\frac{33}{0.10} = 330$.\nStep 4: Check: $25 + 0.10(330) = 25 + 33 = 58$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($33$): stops at $0.10m = 33$ and reports $33$ without dividing by $0.10$.\n* Choice B ($580$): divides $58$ by $0.10$ before subtracting the $25$ flat fee.\n* Choice D ($232$): divides $58$ by $0.25$, mixing up the numbers in the equation.\n\n**Test Day Takeaway:** In a two-step linear equation, undo the addition before the multiplication. Dividing by $0.10$ is the same as multiplying by $10$.",
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
      explanation: "**SAT Pattern: FOIL / Distribution**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** FOIL gives $3x^2$, then the middle terms $-15x + 2x = -13x$, then $-10$: $3x^2 - 13x - 10$, which is choice B.\n\n**The Full Solution:**\nStep 1: First: $3x \\cdot x = 3x^2$. Outer: $3x \\cdot (-5) = -15x$. Inner: $2 \\cdot x = 2x$. Last: $2 \\cdot (-5) = -10$.\nStep 2: Combine like terms: $3x^2 - 15x + 2x - 10 = 3x^2 - 13x - 10$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3x^2 - 10$): multiplies only the First and Last terms, dropping the entire middle.\n* Choice C ($3x^2 + 13x - 10$): keeps the middle term positive, missing the negative from $-15x$.\n* Choice D ($3x^2 - 17x - 10$): combines as $-15 - 2 = -17$ instead of $-15 + 2 = -13$.\n\n**Test Day Takeaway:** FOIL — First, Outer, Inner, Last — then combine the two middle terms watching signs carefully.",
      skills: ["distributive-property", "combining-like-terms"]
    },
    {
      id: 22,
      type: "fill-in",
      difficulty: "hard",
      band: 7,
      question: "A rectangular garden has length $3$ feet greater than its width. If the perimeter of the garden is $34$ feet, what is the width of the garden, in feet?",
      correctAnswer: "7",
      explanation: "**SAT Pattern: Word Problem to Linear Equation**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~25s):** Width $w$, length $w + 3$. Perimeter $2w + 2(w + 3) = 4w + 6 = 34$, so $w = 7$.\n\n**The Full Solution:**\nStep 1: Let $w$ be the width. Then the length is $w + 3$.\nStep 2: Perimeter is twice the length plus twice the width: $2(w + 3) + 2w = 4w + 6$.\nStep 3: Set equal to $34$: $4w + 6 = 34 \\Rightarrow 4w = 28 \\Rightarrow w = 7$.\nStep 4: Check: width $7$, length $10$, perimeter $2(7) + 2(10) = 34$. $\\checkmark$\n\n**Common Mistakes:** Solving for the length ($10$) instead of the width; doing $34 \\div 4 = 8.5$, which ignores the $+3$ length relationship.\n\n**Test Day Takeaway:** Name the variable, write each quantity in terms of it, substitute into the formula, then re-read to answer exactly what was asked.",
      skills: ["solving-equations", "word-problem-to-equation"]
    }
  ]
};

export default practiceTest10M2Easy;
