// Practice Test 9 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Based on College Board SAT Practice Test #8 style and content

export const practiceTest9 = {
  id: "practice-test-9",
  title: "Practice Test 9",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35, // minutes
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
        // Question 1: Linear equation
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "If $4x - 7 = 21$, what is the value of $12x - 5$?",
          choices: [
            { id: "A", text: "$37$" },
            { id: "B", text: "$79$" },
            { id: "C", text: "$58$" },
            { id: "D", text: "$89$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Solve-Then-Evaluate Linear Equation** -- A common medium-difficulty twist: solve for the variable, then plug into a second expression. Two stages, two chances for errors.\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Solve $4x - 7 = 21$: add $7$ to get $4x = 28$, divide by $4$ to get $x = 7$. Then evaluate $12(7) - 5 = 84 - 5 = 79$. Or type $4x - 7 = 21$ into Desmos, read $x = 7$, and compute.\n\n**Step-by-step solution:**\n$4x - 7 = 21$\n$4x = 28$\n$x = 7$\n\nNow substitute into $12x - 5$:\n$12(7) - 5 = 84 - 5 = 79$\n\n**Why the wrong answers are tempting:**\n- Choice A ($37$): You get this by computing $4(7) + 5 = 33$ or by evaluating $12(3.5) - 5 = 37$, using the trap value $x = 3.5$ (from dividing $21 \\div 4$ directly without first adding $7$). College Board chains the errors: one wrong step feeds into the next.\n- Choice C ($58$): You get this from $12(\\frac{28}{4+1}) - 5$ or similar arithmetic confusion, possibly computing $9x - 5 = 63 - 5 = 58$ by misreading the coefficient as $9$ instead of $12$.\n- Choice D ($89$): You get this by computing $12(7) + 5 = 89$, flipping the subtraction to addition in the final step. Under time pressure, sign errors on the last operation are common.\n\n**Verification:** $x = 7$: $4(7) - 7 = 21$ ✓. Then $12(7) - 5 = 84 - 5 = 79$.\n\n**Test Day Takeaway:** When the question asks for an expression involving the variable (not just the variable itself), you must complete two stages: solve first, then substitute. Do not stop after finding $x$ -- read what the question actually asks for.",
          skills: ["linear-equations"]
        },

        // Question 2: Probability
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A jar contains $15$ red marbles, $10$ blue marbles, and $25$ green marbles. If one marble is selected at random, what is the probability that it is NOT green?",
          choices: [
            { id: "A", text: "$\\frac{1}{2}$" },
            { id: "B", text: "$\\frac{1}{5}$" },
            { id: "C", text: "$\\frac{3}{10}$" },
            { id: "D", text: "$\\frac{2}{5}$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Complement Probability** -- 1-2 per test. The word NOT is the key signal.\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Total marbles $= 15 + 10 + 25 = 50$. Non-green $= 15 + 10 = 25$. So $\\frac{25}{50} = \\frac{1}{2}$. Done.\n\n**Step-by-step solution:**\nTotal marbles $= 15 + 10 + 25 = 50$\nNon-green marbles $= 15 + 10 = 25$\n\n$P(\\text{not green}) = \\frac{25}{50} = \\frac{1}{2}$\n\n**Why the wrong answers are tempting:**\n- Choice B ($\\frac{1}{5}$): This is the probability of drawing a blue marble only ($\\frac{10}{50} = \\frac{1}{5}$). College Board is testing whether you remember that \"not green\" includes BOTH red and blue, not just one color.\n- Choice C ($\\frac{3}{10}$): This is the probability of drawing red only ($\\frac{15}{50} = \\frac{3}{10}$). Same trap -- you only counted one of the two non-green colors.\n- Choice D ($\\frac{2}{5}$): This likely comes from a subtraction or counting error, perhaps miscounting the non-green total as $20$ instead of $25$.\n\n**Verification:** $P(\\text{not green}) = 1 - P(\\text{green}) = 1 - \\frac{25}{50} = 1 - \\frac{1}{2} = \\frac{1}{2}$.\n\n**Test Day Takeaway:** When you see NOT in a probability question, you have two paths -- count what you want directly, or use the complement ($1 - P$). Pick whichever is faster.",
          skills: ["probability"]
        },

        // Question 3: Adding polynomials
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which expression is equivalent to $(3x^2 - 5x + 2) + (2x^2 + 7x - 4)$?",
          choices: [
            { id: "A", text: "$5x^2 + 2x - 2$" },
            { id: "B", text: "$5x^2 - 2x + 6$" },
            { id: "C", text: "$5x^4 + 2x^2 - 2$" },
            { id: "D", text: "$6x^2 + 2x - 2$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Combining Like Terms** -- Shows up every test. Pure execution -- no tricks if you stay organized.\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Plug in $x = 1$. First expression: $3 - 5 + 2 = 0$. Second: $2 + 7 - 4 = 5$. Sum $= 5$. Check choices at $x = 1$: A gives $5 + 2 - 2 = 5$. Match. Quick check at $x = 0$: original gives $2 + (-4) = -2$, and A gives $-2$. Confirmed.\n\n**Step-by-step solution:**\n$(3x^2 - 5x + 2) + (2x^2 + 7x - 4)$\n\n$x^2$ terms: $3x^2 + 2x^2 = 5x^2$\n$x$ terms: $-5x + 7x = 2x$\nconstants: $2 + (-4) = -2$\n\nResult: $5x^2 + 2x - 2$\n\n**Why the wrong answers are tempting:**\n- Choice B ($5x^2 - 2x + 6$): You get this by dropping the negative on $-4$, computing $2 + 4 = 6$ instead of $2 + (-4) = -2$. College Board knows sign errors on constants are the most common polynomial mistake.\n- Choice C ($5x^4 + 2x^2 - 2$): You get this by multiplying exponents ($x^2 \\cdot x^2 = x^4$) instead of adding coefficients. This traps students who confuse adding polynomials with multiplying them.\n- Choice D ($6x^2 + 2x - 2$): Simple arithmetic slip: $3 + 2 = 6$ instead of $5$. Under time pressure, even basic addition can go wrong.\n\n**Verification:** At $x = 1$: $5(1) + 2(1) - 2 = 5$ and $(3 - 5 + 2) + (2 + 7 - 4) = 0 + 5 = 5$.\n\n**Test Day Takeaway:** When adding polynomials, line up like terms vertically on scratch paper. Add COEFFICIENTS only -- never touch the exponents.",
          skills: ["polynomials", "algebraic-expressions"]
        },

        // Question 4: Margin of error interpretation
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A survey of $400$ randomly selected adults in a city found that $68\\%$ support a new public transit proposal, with a margin of error of $4.5$ percentage points. Which of the following is the best interpretation of this result?",
          choices: [
            { id: "A", text: "Between $63.5\\%$ and $72.5\\%$ of all adults in the city support the proposal." },
            { id: "B", text: "Exactly $68\\%$ of all adults in the city support the proposal." },
            { id: "C", text: "Between $63.5\\%$ and $72.5\\%$ of the $400$ surveyed adults support the proposal." },
            { id: "D", text: "If the survey is repeated, $68\\%$ of new respondents will support the proposal." }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Margin of Error Interpretation** -- 1 per test, almost guaranteed. This is a reading comprehension question disguised as math.\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** Three checkboxes: (1) Does it refer to the whole population (\"all adults\")? (2) Does it give a range, not an exact number? (3) Is the range $68\\% \\pm 4.5\\%$? If all three are yes, pick it.\n\n**Step-by-step solution:**\n$68\\% \\pm 4.5\\%$ gives the interval $[63.5\\%, 72.5\\%]$\n\nThis interval estimates the range where the true proportion of ALL adults in the city likely falls.\n\n**Why the wrong answers are tempting:**\n- Choice B: The word \"exactly\" is the giveaway. A sample can never tell you an exact population value -- it always comes with uncertainty. College Board puts this here because students sometimes think surveys give precise answers.\n- Choice C: This is the sneakiest trap. The interval is correct, but it says \"of the $400$ surveyed adults.\" We already KNOW exactly what the $400$ people said. The margin of error tells us about the POPULATION, not the sample.\n- Choice D: Future surveys will give different results due to sampling variability. The margin of error is not a prediction about future surveys.\n\n**Verification:** $68\\% - 4.5\\% = 63.5\\%$ and $68\\% + 4.5\\% = 72.5\\%$, applied to the population.\n\n**Test Day Takeaway:** Margin of error = estimate plus-or-minus applied to the POPULATION. If the answer says \"sample\" or \"exactly\" or \"future surveys,\" it is wrong.",
          skills: ["statistics", "margin-of-error"]
        },

        // Question 5: Similar triangles
        {
          id: 5,
          type: "fill-in",
          difficulty: "easy",
          question: "Triangle $ABC$ is similar to triangle $DEF$. In triangle $ABC$, $AB = 8$ and $BC = 12$. In triangle $DEF$, $DE = 14$. What is the length of $EF$?",
          correctAnswer: '21',
          explanation: "**SAT Pattern: Similar Triangles Proportion** -- 1-2 per test. Set up the ratio carefully -- the order of corresponding sides matters.\n\n**The correct answer is 21.**\n\n**The Fast Way (20 seconds):** Scale factor from ABC to DEF: $\\frac{DE}{AB} = \\frac{14}{8} = \\frac{7}{4}$. So $EF = BC \\times \\frac{7}{4} = 12 \\times \\frac{7}{4} = 21$.\n\n**Step-by-step solution:**\n$AB$ corresponds to $DE$, and $BC$ corresponds to $EF$.\n\nSet up the proportion:\n$\\frac{AB}{DE} = \\frac{BC}{EF}$\n$\\frac{8}{14} = \\frac{12}{EF}$\n\nCross multiply:\n$8 \\times EF = 14 \\times 12$\n$8 \\times EF = 168$\n$EF = \\frac{168}{8} = 21$\n\n**Verification:** $\\frac{8}{14} = \\frac{12}{21}$ -- both simplify to $\\frac{4}{7}$.\n\n**Test Day Takeaway:** For similar triangles, find the scale factor first (one division), then multiply. It is faster than setting up and cross-multiplying a full proportion.",
          skills: ["similar-triangles", "proportions"]
        },

        // Question 6: Parallel lines and transversal
        {
          id: 6,
          type: "fill-in",
          difficulty: "easy",
          question: "Two parallel lines are cut by a transversal as shown. What is the measure, in degrees, of angle $x$?",
          diagram: {
            type: 'parallelLines',
            params: {
              angles: { x: true, y: '125\u00B0' },
              lineLabels: ['m', 'n', 't'],
              showParallelMarks: false
            }
          },
          correctAnswer: '55',
          explanation: "**SAT Pattern: Parallel Lines and Transversals** -- 1 per test. Know your angle pairs and this is a 10-second problem.\n\n**The correct answer is 55.**\n\n**The Fast Way (10 seconds):** Angles $x$ and $125\u00B0$ are supplementary (they form a straight line). So $x = 180\u00B0 - 125\u00B0 = 55\u00B0$.\n\n**Step-by-step solution:**\nSupplementary angles on a straight line sum to $180\u00B0$.\n\n$x + 125\u00B0 = 180\u00B0$\n$x = 180\u00B0 - 125\u00B0 = 55\u00B0$\n\n**Verification:** $55\u00B0 + 125\u00B0 = 180\u00B0$. They form a straight line.\n\n**Test Day Takeaway:** With parallel lines and a transversal, there are really only two angle sizes: the acute one and the obtuse one. They always add to $180\u00B0$. If you know one angle, you know them all.",
          skills: ["parallel-lines", "angles"]
        },

        // Question 7: Exponential growth
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A scientist is studying a bacteria population that doubles every $3$ hours. If the initial population is $500$ bacteria, which function $P(t)$ models the population after $t$ hours?",
          choices: [
            { id: "A", text: "$P(t) = 500(2)^{\\frac{t}{3}}$" },
            { id: "B", text: "$P(t) = 500(2)^{3t}$" },
            { id: "C", text: "$P(t) = 500(3)^{\\frac{t}{2}}$" },
            { id: "D", text: "$P(t) = 500 + 2t$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Exponential Growth Model** -- 1-2 per test. The doubling time goes in the DENOMINATOR of the exponent.\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** At $t = 3$ hours, the population should double to $1000$. Check A: $500(2)^{3/3} = 500(2)^1 = 1000$. Works. Check B: $500(2)^{9} = 256{,}000$. Way too big. A is the answer.\n\n**Step-by-step solution:**\nFor exponential growth where a quantity doubles every $k$ units of time:\n$P(t) = P_0 \\times 2^{\\frac{t}{k}}$\n\nHere: $P_0 = 500$, doubling time $k = 3$ hours.\nSo: $P(t) = 500(2)^{\\frac{t}{3}}$\n\n**Why the wrong answers are tempting:**\n- Choice B ($500(2)^{3t}$): The $3$ ends up in the numerator instead of the denominator. At $t = 1$ you would get $500 \\times 8 = 4000$, which is absurdly fast. College Board designs this because students mix up where the period goes in the exponent.\n- Choice C ($500(3)^{\\frac{t}{2}}$): This swaps the base and exponent denominator. The base should be $2$ (doubling), not $3$. This catches students who scramble the numbers from the problem.\n- Choice D ($500 + 2t$): This is linear growth, adding $2$ bacteria per hour. Doubling is multiplicative, not additive. College Board includes a linear option to test whether you recognize exponential vs. linear growth.\n\n**Verification:** At $t = 3$: $500(2)^1 = 1000$ (doubled). At $t = 6$: $500(2)^2 = 2000$ (doubled again).\n\n**Test Day Takeaway:** For doubling problems, the formula is $P_0 \\cdot 2^{t/k}$ where $k$ is the doubling time. Always test your formula by plugging in $t = k$ -- you should get exactly $2 \\times P_0$.",
          skills: ["exponential-functions", "modeling"]
        },

        // Question 8: System of equations
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The system of equations below has solution $(x, y)$. What is the value of $x$?\n\n$3x + 2y = 19$\n$x - 2y = 5$",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: System of Equations by Elimination** -- 2-3 per test. When you see opposite coefficients, add the equations immediately.\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** The $+2y$ and $-2y$ cancel when you add. $3x + x = 4x$ and $19 + 5 = 24$. So $4x = 24$, meaning $x = 6$. Or type both equations into Desmos and read the intersection point.\n\n**Step-by-step solution:**\n$3x + 2y = 19$\n$x - 2y = 5$\n\nAdd the equations ($+2y$ and $-2y$ cancel):\n$4x = 24$\n$x = 6$\n\n**Why the wrong answers are tempting:**\n- Choice A ($x = 2$): Plugging in gives $6 + 2y = 19$ so $y = 6.5$, but $2 - 13 = -11 \\neq 5$. This fails the second equation. You likely made a division error somewhere.\n- Choice B ($x = 4$): Plugging in gives $12 + 2y = 19$ so $y = 3.5$, but $4 - 7 = -3 \\neq 5$. College Board includes nearby values to catch careless arithmetic.\n- Choice D ($x = 8$): Plugging in gives $24 + 2y = 19$ so $y = -2.5$, but $8 + 5 = 13 \\neq 5$. You may have made an error doubling $x = 6$ or miscombining terms.\n\n**Verification:** $x = 6$: From equation 2, $6 - 2y = 5$ so $y = 0.5$. Check equation 1: $3(6) + 2(0.5) = 18 + 1 = 19$.\n\n**Test Day Takeaway:** Before solving a system, scan the coefficients. If one variable has equal-and-opposite coefficients, just add the equations -- it takes 10 seconds and eliminates that variable instantly.",
          skills: ["systems-of-equations"]
        },

        // Question 9: Radians and degrees
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "An angle has a measure of $\\frac{5\\pi}{6}$ radians. What is the measure of this angle in degrees?",
          choices: [
            { id: "A", text: "$75\u00B0$" },
            { id: "B", text: "$120\u00B0$" },
            { id: "C", text: "$150\u00B0$" },
            { id: "D", text: "$210\u00B0$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Radian-Degree Conversion** -- 1 per test. Memorize that $\\pi = 180\u00B0$ and you can convert anything.\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $\\frac{5\\pi}{6} = \\frac{5}{6}$ of $\\pi = \\frac{5}{6}$ of $180\u00B0 = 150\u00B0$. Just multiply $\\frac{5}{6} \\times 180$.\n\n**Step-by-step solution:**\n$\\frac{5\\pi}{6} \\times \\frac{180\u00B0}{\\pi} = \\frac{5 \\times 180\u00B0}{6} = \\frac{900\u00B0}{6} = 150\u00B0$\n\n**Why the wrong answers are tempting:**\n- Choice A ($75\u00B0$): This would be $\\frac{5\\pi}{12}$ radians. You may have accidentally doubled the denominator, dividing by $12$ instead of $6$.\n- Choice B ($120\u00B0$): This is $\\frac{2\\pi}{3}$ radians. You may have misread the numerator as $4$ instead of $5$, getting $\\frac{4 \\times 180}{6} = 120\u00B0$. Close enough to be tempting under time pressure.\n- Choice D ($210\u00B0$): This is $\\frac{7\\pi}{6}$ radians. You may have used $7$ instead of $5$ in the numerator -- an overshoot error.\n\n**Verification:** $150\u00B0 \\times \\frac{\\pi}{180\u00B0} = \\frac{150\\pi}{180} = \\frac{5\\pi}{6}$. Round trip confirmed.\n\n**Test Day Takeaway:** To convert radians to degrees, replace $\\pi$ with $180\u00B0$ and simplify. That is literally all there is to it.",
          skills: ["radians-degrees", "angle-measures"]
        },

        // Question 10: Quadratic vertex
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $f(x) = -2(x - 4)^2 + 18$ is graphed in the $xy$-plane. Which of the following statements about the graph is true?",
          choices: [
            { id: "A", text: "The graph has a minimum value of $18$." },
            { id: "B", text: "The graph has a maximum value of $18$." },
            { id: "C", text: "The graph has a minimum value of $4$." },
            { id: "D", text: "The graph has a maximum value of $4$." }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Vertex Form Reading** -- 1-2 per test. The sign of $a$ tells you max vs. min, and $k$ is the extreme value.\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** The function is in vertex form $a(x - h)^2 + k$. Negative $a$ means downward parabola, so it has a MAXIMUM. The max value is $k = 18$. Done.\n\n**Step-by-step solution:**\n$f(x) = a(x - h)^2 + k$ where $a = -2$, $h = 4$, $k = 18$.\n\nSince $a = -2 < 0$, the parabola opens downward, so the vertex is a maximum.\nThe vertex is at $(4, 18)$, so the maximum VALUE is $18$.\n\n**Why the wrong answers are tempting:**\n- Choice A: Says minimum instead of maximum. Since $a < 0$, the parabola opens downward and has no minimum (it goes to $-\\infty$). College Board tests whether you connect the sign of $a$ to the direction.\n- Choice C: The $4$ is the $x$-coordinate of the vertex, not the extreme value. The min/max VALUE is always the $y$-coordinate ($k$). This traps students who confuse $h$ with $k$.\n- Choice D: Same confusion -- $4$ is the $x$-coordinate. Even though it says \"maximum,\" which is the right type, the reported number is wrong.\n\n**Verification:** $f(4) = -2(4 - 4)^2 + 18 = -2(0) + 18 = 18$.\n\n**Test Day Takeaway:** In vertex form $a(x-h)^2 + k$: negative $a$ = max at $k$, positive $a$ = min at $k$. The extreme VALUE is always $k$, not $h$.",
          skills: ["quadratic-functions", "vertex-form"]
        },

        // Question 11: Linear programming context
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A bakery makes cakes and pies. Each cake requires $3$ cups of flour and each pie requires $2$ cups of flour. The bakery has $60$ cups of flour available. If $c$ represents the number of cakes and $p$ represents the number of pies, which inequality represents this constraint?",
          choices: [
            { id: "A", text: "$3c + 2p \\leq 60$" },
            { id: "B", text: "$3c + 2p \\geq 60$" },
            { id: "C", text: "$2c + 3p \\leq 60$" },
            { id: "D", text: "$5(c + p) \\leq 60$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Inequality Modeling from Context** -- 1-2 per test. Two decisions: match coefficients to the right variables, and pick the correct inequality direction.\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** Cakes need $3$ cups, so cakes contribute $3c$. Pies need $2$ cups, so pies contribute $2p$. Total flour used is $3c + 2p$. Cannot exceed $60$, so $3c + 2p \\leq 60$.\n\n**Step-by-step solution:**\nFlour for cakes: $3c$ cups\nFlour for pies: $2p$ cups\nTotal flour available: $60$ cups\n\nTotal flour used cannot exceed what is available:\n$3c + 2p \\leq 60$\n\n**Why the wrong answers are tempting:**\n- Choice B ($3c + 2p \\geq 60$): Flips the inequality. This would mean they must use AT LEAST $60$ cups, which is the opposite of a resource constraint. College Board tests whether you distinguish \"at most\" from \"at least.\"\n- Choice C ($2c + 3p \\leq 60$): Swaps the coefficients -- $2$ with cakes, $3$ with pies. This is the classic variable-switching trap. Always re-read which item uses which amount.\n- Choice D ($5(c + p) \\leq 60$): Adds $3 + 2 = 5$ and treats every item as using $5$ cups. This ignores that cakes and pies use different amounts.\n\n**Verification:** If $c = 10$, $p = 15$: $3(10) + 2(15) = 30 + 30 = 60 \\leq 60$. Valid.\n\n**Test Day Takeaway:** For modeling inequalities, translate one piece at a time: coefficient times variable for each item, then choose $\\leq$ for \"at most\" or $\\geq$ for \"at least.\"",
          skills: ["linear-inequalities", "modeling"]
        },

        // Question 12: Mean vs median
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which statement about the mean and median of the data set is correct?",
          questionFormula: {
            equation: "$$\\text{Data set: } 12, 15, 18, 19, 20, 22, 85$$"
          },
          choices: [
            { id: "A", text: "The mean is greater than the median." },
            { id: "B", text: "The median is greater than the mean." },
            { id: "C", text: "The mean and median are equal." },
            { id: "D", text: "The relationship cannot be determined without calculation." }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Mean vs. Median with Outliers** -- 1 per test. Spot the outlier and you can often answer without calculating.\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** Scan the data: $12, 15, 18, 19, 20, 22, 85$. That $85$ is a massive high-end outlier. Outliers pull the mean toward them but leave the median untouched. So mean > median. Pick A without calculating.\n\n**Step-by-step solution:**\nMedian: With $7$ values, the median is the 4th value: $19$.\n\nMean: $(12 + 15 + 18 + 19 + 20 + 22 + 85) \\div 7 = 191 \\div 7 \\approx 27.3$\n\nSince $27.3 > 19$, the mean is greater than the median.\n\n**Why the wrong answers are tempting:**\n- Choice B: Gets the relationship backward. The outlier $85$ pulls the mean UP, not down. Students who are uncertain about which direction outliers push the mean may guess wrong.\n- Choice C: They are not equal -- $27.3 \\neq 19$. This would only be true in a perfectly symmetric data set, which $85$ clearly breaks.\n- Choice D: You CAN determine the relationship, either by calculating or by recognizing the rightward skew. College Board includes this option to test whether you trust your reasoning.\n\n**Verification:** Mean $\\approx 27.3 > 19 =$ median.\n\n**Test Day Takeaway:** High outlier = mean > median. Low outlier = mean < median. You can often answer mean/median comparison questions by just spotting the outlier, no calculation needed.",
          skills: ["statistics", "mean", "median"]
        },

        // Question 13: Factored form equation
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "What is the sum of the solutions to the equation $(x - 3)(x + 7) = 0$?",
          correctAnswer: '-4',
          explanation: "**SAT Pattern: Sum/Product of Roots from Factored Form** -- 1-2 per test. Zero product property makes this fast.\n\n**The correct answer is -4.**\n\n**The Fast Way (10 seconds):** Roots are $3$ and $-7$ (flip the signs from the factors). Sum $= 3 + (-7) = -4$. Or use Vieta's shortcut: for $x^2 + bx + c = 0$, the sum of roots is $-b$. Expanding gives $x^2 + 4x - 21$, so sum $= -4$.\n\n**Step-by-step solution:**\n$(x - 3)(x + 7) = 0$\n\n$x - 3 = 0 \\rightarrow x = 3$\n$x + 7 = 0 \\rightarrow x = -7$\n\nSum of solutions: $3 + (-7) = -4$\n\n**Verification:** Expanding: $x^2 + 4x - 21 = 0$. By Vieta's formula, sum $= \\frac{-b}{a} = \\frac{-4}{1} = -4$.\n\n**Test Day Takeaway:** For $(x - a)(x - b) = 0$, the roots are $a$ and $b$. Watch the signs: $(x + 7)$ is really $(x - (-7))$, so the root is $-7$, not $+7$.",
          skills: ["quadratic-equations", "zero-product-property"]
        },

        // Question 14: Parabola and line intersection
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In the $xy$-plane, the graph of $y = x^2 - 4x + 3$ intersects the line $y = x - 1$ at points $P$ and $Q$. What is the sum of the $x$-coordinate and the $y$-coordinate of the midpoint of $\\overline{PQ}$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$4$" },
            { id: "D", text: "$5$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Intersection Points + Midpoint** -- Combines solving a nonlinear system AND applying the midpoint formula, then computing a derived quantity. Multi-step problems like this appear in the hard section.\n\n**Choice C is correct.**\n\n**The Fast Way (40 seconds):** Graph both in Desmos, read the intersections, and average the coordinates. Or solve algebraically.\n\n**Step-by-step solution:**\n\nStep 1: Find the intersection $x$-values by setting the equations equal.\n$x^2 - 4x + 3 = x - 1$\n$x^2 - 5x + 4 = 0$\n$(x - 1)(x - 4) = 0$\n$x = 1$ or $x = 4$\n\nStep 2: Find the $y$-coordinates using $y = x - 1$.\nAt $x = 1$: $y = 0$, so $P = (1, 0)$.\nAt $x = 4$: $y = 3$, so $Q = (4, 3)$.\n\nStep 3: Find the midpoint of $\\overline{PQ}$.\n$$M = \\left(\\frac{1+4}{2}, \\frac{0+3}{2}\\right) = \\left(\\frac{5}{2}, \\frac{3}{2}\\right)$$\n\nStep 4: Sum the coordinates.\n$$\\frac{5}{2} + \\frac{3}{2} = \\frac{8}{2} = 4$$\n\n**Why the wrong answers are tempting:**\n- Choice A ($2$): You get this if you only average the $y$-coordinates ($\\frac{0+3}{2} = 1.5$) and round, or if you confuse the midpoint $x$-coordinate with $\\frac{4-1}{2} = 1.5$ (using subtraction instead of addition in the midpoint formula).\n- Choice B ($3$): You get this if you compute the sum of the $x$-coordinates of the intersection points divided by $2$: $\\frac{1+4}{2} = 2.5$ and mistakenly add just one $y$-value. Or you compute $\\frac{0+3}{2} + \\frac{4-1}{2} = 1.5 + 1.5 = 3$.\n- Choice D ($5$): You get this by summing the $x$-coordinates of $P$ and $Q$ directly ($1 + 4 = 5$) without taking the midpoint. This skips the averaging step entirely.\n\n**Verification:** $P = (1,0)$, $Q = (4,3)$. Midpoint $= (2.5, 1.5)$. Sum $= 2.5 + 1.5 = 4$. Check on parabola: $1 - 4 + 3 = 0$ ✓ and $16 - 16 + 3 = 3$ ✓.\n\n**Test Day Takeaway:** Multi-step intersection problems require: (1) solve the system for coordinates, (2) apply a formula (midpoint, distance, slope) to the results, (3) compute the final requested quantity. Break it into stages and verify each stage independently.",
          skills: ["quadratic-functions", "systems-of-equations"]
        },

        // Question 15: Equivalent expressions with exponents
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Which expression is equivalent to $\\frac{(2x^3y^2)^3}{4x^{-1}y^4}$?",
          choices: [
            { id: "A", text: "$2x^{10}y^2$" },
            { id: "B", text: "$2x^8y^2$" },
            { id: "C", text: "$2x^{10}y^{10}$" },
            { id: "D", text: "$4x^{10}y^2$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Combining Power-of-a-Product with Division and Negative Exponents** -- Requires chaining multiple exponent rules: power of a product in the numerator, then dividing with a negative exponent in the denominator. Multi-rule problems appear in the hard section.\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** Simplify numerator first: $(2x^3y^2)^3 = 8x^9y^6$. Then divide: $\\frac{8x^9y^6}{4x^{-1}y^4} = 2 \\cdot x^{9-(-1)} \\cdot y^{6-4} = 2x^{10}y^2$.\n\n**Step-by-step solution:**\n\nStep 1: Expand the numerator using the power-of-a-product rule.\n$(2x^3y^2)^3 = 2^3 \\cdot (x^3)^3 \\cdot (y^2)^3 = 8x^9y^6$\n\nStep 2: Divide by the denominator, subtracting exponents.\n$$\\frac{8x^9y^6}{4x^{-1}y^4} = \\frac{8}{4} \\cdot x^{9-(-1)} \\cdot y^{6-4} = 2 \\cdot x^{10} \\cdot y^2$$\n\nThe key step: subtracting a negative exponent means $9 - (-1) = 9 + 1 = 10$.\n\n**Why the wrong answers are tempting:**\n- Choice B ($2x^8y^2$): You computed $9 - 1 = 8$ instead of $9 - (-1) = 10$. Forgetting that subtracting a negative exponent means adding is the single most common exponent error on the SAT.\n- Choice C ($2x^{10}y^{10}$): You correctly handled the $x$ exponents but ADDED the $y$ exponents ($6 + 4 = 10$) instead of subtracting ($6 - 4 = 2$). Division means subtract exponents, not add.\n- Choice D ($4x^{10}y^2$): The exponents are correct but $\\frac{8}{4} = 4$ instead of $2$. Wait -- $\\frac{8}{4}$ IS $2$, so this results from computing $2^3 = 8$ but then not dividing the coefficient at all, or from computing $2 \\times 3 = 6$ then dividing $24/6 = 4$.\n\n**Verification:** Let $x = 1$, $y = 1$: numerator $= 8$, denominator $= 4$. Result $= 2$. Answer gives $2(1)(1) = 2$. ✓\n\n**Test Day Takeaway:** For complex exponent expressions, work in stages: (1) simplify the numerator, (2) simplify the denominator, (3) divide by subtracting exponents. Watch for negative exponents -- subtracting a negative means ADDING.",
          skills: ["exponents", "algebraic-expressions"]
        },

        // Question 16: Percent increase
        {
          id: 16,
          type: "fill-in",
          difficulty: "medium",
          question: "A store increases the price of an item from \\$80 to \\$100. What is the percent increase in the price?",
          correctAnswer: '25',
          explanation: "**SAT Pattern: Percent Change** -- 1-2 per test. The single most common mistake is dividing by the wrong number.\n\n**The correct answer is 25.**\n\n**The Fast Way (10 seconds):** Change $= 100 - 80 = 20$. Divide by ORIGINAL: $\\frac{20}{80} = 0.25 = 25\\%$. Or think: what times $80$ gives $100$? That is $1.25$, so $25\\%$ increase.\n\n**Step-by-step solution:**\nPercent increase $= \\frac{\\text{New} - \\text{Original}}{\\text{Original}} \\times 100$\n\n$= \\frac{100 - 80}{80} \\times 100 = \\frac{20}{80} \\times 100 = 25\\%$\n\n**Verification:** $80 \\times 1.25 = 100$. Confirmed.\n\n**Test Day Takeaway:** Percent change ALWAYS divides by the ORIGINAL value. The classic wrong answer is $\\frac{20}{100} = 20\\%$ (dividing by the new value). Do not fall for it.",
          skills: ["percent-change"]
        },

        // Question 17: Function evaluation
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $f(x) = 2x^2 - 3x + 5$, what is the value of $f(-2)$?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$7$" },
            { id: "C", text: "$15$" },
            { id: "D", text: "$19$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Function Evaluation at a Negative Input** -- 1-2 per test. Parentheses around the negative number are your safety net.\n\n**Choice D is correct.**\n\n**The Fast Way (15 seconds):** Type $f(x) = 2x^2 - 3x + 5$ into Desmos and evaluate $f(-2)$. Or type $2(-2)^2 - 3(-2) + 5$ directly into your calculator.\n\n**Step-by-step solution:**\n$f(-2) = 2(-2)^2 - 3(-2) + 5$\n$= 2(4) - (-6) + 5$\n$= 8 + 6 + 5$\n$= 19$\n\n**Why the wrong answers are tempting:**\n- Choice A ($3$): You likely made multiple sign errors, perhaps computing $2(-2) = -4$ instead of $2(-2)^2 = 2(4) = 8$. Forgetting to square before multiplying is the most common error here.\n- Choice B ($7$): You get this if you compute $-3(-2) = -6$ instead of $+6$, giving $8 - 6 + 5 = 7$. College Board knows the negative-times-negative rule trips students up under time pressure.\n- Choice C ($15$): A different combination of sign or arithmetic errors leads here. For instance, computing $8 + 2 + 5 = 15$ by mishandling the $-3(-2)$ term.\n\n**Verification:** $2(4) - 3(-2) + 5 = 8 + 6 + 5 = 19$.\n\n**Test Day Takeaway:** When plugging a negative number into a function, use PARENTHESES everywhere. Evaluate the exponent first: $(-2)^2 = 4$ (positive). Then remember negative times negative = positive.",
          skills: ["function-evaluation"]
        },

        // Question 18: Equilateral triangle height
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "An equilateral triangle has a perimeter of $360$ centimeters. The height of this triangle can be written as $k\\sqrt{3}$ centimeters, where $k$ is a constant. What is the value of $k$?",
          correctAnswer: '60',
          explanation: "**SAT Pattern: Equilateral Triangle Height (30-60-90 Application)** -- 1 per test in the hard section. Know the formula and this is a 20-second problem.\n\n**The correct answer is $60$.**\n\n**The Fast Way (20 seconds):** Side $= 360 \\div 3 = 120$. Height of equilateral triangle $= \\frac{s\\sqrt{3}}{2} = \\frac{120\\sqrt{3}}{2} = 60\\sqrt{3}$. So $k = 60$.\n\n**Step-by-step solution:**\n\nStep 1: Find the side length.\nEach side $= \\frac{360}{3} = 120$ cm\n\nStep 2: Find the height.\nFor an equilateral triangle with side $s$, the height $= \\frac{s\\sqrt{3}}{2}$.\n$$h = \\frac{120\\sqrt{3}}{2} = 60\\sqrt{3}$$\n\nStep 3: Since $h = k\\sqrt{3}$ and $h = 60\\sqrt{3}$, we get $k = 60$.\n\n**Verification:** The height splits the triangle into two 30-60-90 right triangles with hypotenuse $120$, short leg $60$, and long leg $60\\sqrt{3}$. By Pythagorean theorem: $60^2 + (60\\sqrt{3})^2 = 3600 + 10800 = 14400 = 120^2$.\n\n**Test Day Takeaway:** Equilateral triangle height $= \\frac{s\\sqrt{3}}{2}$. This comes from the 30-60-90 ratio ($1 : \\sqrt{3} : 2$), which is on the SAT reference sheet. Memorize it.",
          skills: ['Geometry', 'Special Right Triangles']
        },

        // Question 19: Perpendicular lines
        {
          id: 19,
          type: "fill-in",
          difficulty: "hard",
          question: "In the $xy$-plane, line $\\ell_1$ has equation $ax + 3y = 12$ and line $\\ell_2$ has equation $6x - 4y = 8$. If the two lines are perpendicular, what is the value of $a$?",
          correctAnswer: '2',
          explanation: "**SAT Pattern: Perpendicular Lines Slope Condition** -- 1 per test. Perpendicular slopes multiply to $-1$.\n\n**The correct answer is $2$.**\n\n**The Fast Way (30 seconds):** Convert both to slope-intercept form. Line 2: $y = \\frac{3}{2}x - 2$, slope $= \\frac{3}{2}$. Perpendicular slope must be $-\\frac{2}{3}$. Line 1: slope $= -\\frac{a}{3}$. Set $-\\frac{a}{3} = -\\frac{2}{3}$, so $a = 2$.\n\n**Step-by-step solution:**\n\nStep 1: Find the slope of $\\ell_2$.\n$6x - 4y = 8 \\rightarrow -4y = -6x + 8 \\rightarrow y = \\frac{3}{2}x - 2$\nSlope of $\\ell_2 = \\frac{3}{2}$\n\nStep 2: Find the slope of $\\ell_1$.\n$ax + 3y = 12 \\rightarrow 3y = -ax + 12 \\rightarrow y = -\\frac{a}{3}x + 4$\nSlope of $\\ell_1 = -\\frac{a}{3}$\n\nStep 3: Apply the perpendicular condition.\n$$\\left(-\\frac{a}{3}\\right) \\cdot \\frac{3}{2} = -1$$\n$$-\\frac{a}{2} = -1$$\n$$a = 2$$\n\n**Verification:** With $a = 2$: slope of $\\ell_1 = -\\frac{2}{3}$. Product: $\\left(-\\frac{2}{3}\\right)\\left(\\frac{3}{2}\\right) = -1$.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals -- their product is always $-1$. Convert to $y = mx + b$ form first to read the slopes clearly.",
          skills: ['Geometry', 'Perpendicular Lines']
        },

        // Question 20: Infinite solutions parametric point
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$7x + 6y = 5$\n$28x + 24y = 20$\n\nFor each real number $r$, which of the following points lies on the graph of each equation in the $xy$-plane?",
          choices: [
            { id: "A", text: "$\\left(r, \\frac{5 - 7r}{6}\\right)$" },
            { id: "B", text: "$\\left(r, \\frac{5 + 7r}{6}\\right)$" },
            { id: "C", text: "$\\left(r, \\frac{5 - 7r}{24}\\right)$" },
            { id: "D", text: "$\\left(r, \\frac{7r - 5}{6}\\right)$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Infinite Solutions / Parametric Representation** -- 1 per test in the hard section. Recognize identical lines, then solve for $y$ in terms of $r$.\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Notice $28x + 24y = 20$ is $4 \\times (7x + 6y = 5)$ -- same line. Set $x = r$ in the simpler equation: $7r + 6y = 5$, so $6y = 5 - 7r$, giving $y = \\frac{5 - 7r}{6}$. Pick A.\n\n**Step-by-step solution:**\n\nStep 1: $28x + 24y = 20$ is exactly $4 \\times (7x + 6y = 5)$. Same line, infinitely many solutions.\n\nStep 2: Substitute $x = r$ into $7x + 6y = 5$:\n$7r + 6y = 5$\n$6y = 5 - 7r$\n$y = \\frac{5 - 7r}{6}$\n\n**Why the wrong answers are tempting:**\n- Choice B ($\\frac{5 + 7r}{6}$): Uses $5 + 7r$ instead of $5 - 7r$. When you move $7r$ to the other side, you subtract it. College Board knows sign errors during rearrangement are extremely common.\n- Choice C ($\\frac{5 - 7r}{24}$): Uses denominator $24$ from the second equation instead of $6$. If you solve from $28r + 24y = 20$ without simplifying first, you might keep $24$ as the denominator without properly adjusting the numerator.\n- Choice D ($\\frac{7r - 5}{6}$): Reverses the subtraction order: $7r - 5$ instead of $5 - 7r$. This is the negative of the correct numerator.\n\n**Verification:** Plug into $7x + 6y = 5$: $7r + 6 \\cdot \\frac{5 - 7r}{6} = 7r + 5 - 7r = 5$.\n\n**Test Day Takeaway:** When two equations are multiples of each other, they represent the same line. Use the simpler equation, substitute $x = r$, and solve for $y$ carefully -- especially the signs.",
          skills: ['Algebra', 'Systems of Equations']
        },

        // Question 21: Parabola tangent to horizontal line
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "In the $xy$-plane, the graph of $y = -x^2 + 12x - 40$ intersects the line $y = c$ at exactly one point. What is the value of $c$?",
          correctAnswer: '-4',
          explanation: "**SAT Pattern: Horizontal Line Tangent to Parabola** -- 1 per test. \"Exactly one point\" with a horizontal line means the line passes through the vertex.\n\n**The correct answer is $-4$.**\n\n**The Fast Way (20 seconds):** Type $y = -x^2 + 12x - 40$ into Desmos and read the vertex. It is at $(6, -4)$. The horizontal line tangent to the parabola is $y = -4$, so $c = -4$.\n\n**Step-by-step solution:**\n\nStep 1: Find the $x$-coordinate of the vertex.\n$$x = -\\frac{b}{2a} = -\\frac{12}{2(-1)} = 6$$\n\nStep 2: Find the $y$-coordinate.\n$$y = -(6)^2 + 12(6) - 40 = -36 + 72 - 40 = -4$$\n\nStep 3: A horizontal line $y = c$ hits a parabola at exactly one point only at the vertex.\n$$c = -4$$\n\n**Verification:** $-4 = -x^2 + 12x - 40$ gives $x^2 - 12x + 36 = 0$, which is $(x - 6)^2 = 0$. Exactly one solution: $x = 6$.\n\n**Test Day Takeaway:** \"Intersects $y = c$ at exactly one point\" is SAT code for \"find the vertex $y$-value.\" Use $x = -\\frac{b}{2a}$, plug back in, and report the $y$-coordinate.",
          skills: ['Advanced Math', 'Quadratic Equations']
        },

        // Question 22: Nonlinear system — exactly one solution
        {
          id: 22,
          type: "fill-in",
          difficulty: "hard",
          question: "$y + k = x + 10$\n$y - k = x^2 - 3x$\n\nIn the given system of equations, $k$ is a constant. The system has exactly one real solution. What is the value of $k$?",
          correctAnswer: '7',
          explanation: "**SAT Pattern: Nonlinear System with Discriminant Condition** -- 1 per test in the hard section. \"Exactly one solution\" = set the discriminant to zero.\n\n**The correct answer is $7$.**\n\n**The Fast Way (45 seconds):** Eliminate $y$ by solving equation 1 for $y$ and substituting into equation 2. You get a quadratic in $x$. Set discriminant $= 0$ and solve for $k$.\n\n**Step-by-step solution:**\n\nStep 1: From equation 1, $y = x + 10 - k$.\n\nStep 2: Substitute into equation 2.\n$(x + 10 - k) - k = x^2 - 3x$\n$x + 10 - 2k = x^2 - 3x$\n\nStep 3: Rearrange.\n$x^2 - 4x + 2k - 10 = 0$\n\nStep 4: For exactly one solution, discriminant $= 0$.\n$$(-4)^2 - 4(1)(2k - 10) = 0$$\n$$16 - 8k + 40 = 0$$\n$$56 - 8k = 0$$\n$$k = 7$$\n\n**Verification:** With $k = 7$: $x^2 - 4x + 4 = 0 \\rightarrow (x - 2)^2 = 0 \\rightarrow x = 2$. Then $y = 2 + 10 - 7 = 5$. Check equation 2: $5 - 7 = -2$ and $4 - 6 = -2$.\n\n**Test Day Takeaway:** Whenever a problem says \"exactly one solution\" and you end up with a quadratic, set $b^2 - 4ac = 0$ and solve for the unknown constant. This pattern appears on every SAT.",
          skills: ['Advanced Math', 'Systems of Equations']
        }
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
        // Question 2: Table data interpretation
        {
          id: 1,
          type: "fill-in",
          difficulty: "medium",
          question: "The table shows the number of books read by students in a class.",
          diagram: {
            type: "table",
            params: {
              headers: ["Books Read", "Number of Students"],
              rows: [
                ["0-2", "4"],
                ["3-5", "8"],
                ["6-8", "6"],
                ["9-11", "2"]
              ]
            }
          },
          questionContinued: "If a student is selected at random, what is the probability that the student read more than $5$ books? (Express your answer as a decimal.)",
          correctAnswer: '0.4',
          explanation: "**SAT Pattern: Probability from a Frequency Table** -- Requires identifying the relevant categories, summing their frequencies, and dividing by the total. An extra reasoning step beyond simply reading the table.\n\n**The correct answer is $0.4$.**\n\n**The Fast Way (15 seconds):** \"More than $5$ books\" means the $6$-$8$ and $9$-$11$ groups. That is $6 + 2 = 8$ students. Total $= 4 + 8 + 6 + 2 = 20$. Probability $= \\frac{8}{20} = 0.4$.\n\n**Step-by-step solution:**\n\nStep 1: Find the total number of students.\n$4 + 8 + 6 + 2 = 20$\n\nStep 2: Identify students who read MORE than $5$ books.\nThe categories $6$-$8$ and $9$-$11$ represent students who read more than $5$.\n$6 + 2 = 8$ students\n\nStep 3: Compute the probability.\n$$P(\\text{more than } 5) = \\frac{8}{20} = \\frac{2}{5} = 0.4$$\n\n**Common wrong answers and why they are tempting:**\n- $0.9$ (or $\\frac{18}{20}$): You included the $3$-$5$ group, interpreting \"more than $5$\" as \"$3$ or more.\" The $3$-$5$ category includes students who read exactly $5$, which is NOT more than $5$.\n- $0.3$ (or $\\frac{6}{20}$): You only counted the $6$-$8$ group and excluded the $9$-$11$ group. \"More than $5$\" includes ALL categories above $5$.\n- $0.1$ (or $\\frac{2}{20}$): You only counted the $9$-$11$ group, perhaps interpreting \"more than $5$\" as \"more than $8$.\"\n\n**Verification:** $\\frac{8}{20} = 0.40$. The $8$ students in categories $6$-$8$ and $9$-$11$ out of $20$ total.\n\n**Test Day Takeaway:** For probability from grouped data: (1) identify which groups satisfy the condition, (2) sum those frequencies, (3) divide by the total. Pay close attention to boundary values -- \"more than $5$\" does NOT include exactly $5$.",
          skills: ["data-analysis", "frequency-tables"]
        },
        // Question 3: Parallel lines angle relationship
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Two parallel lines are cut by a transversal as shown. What is the measure of the corresponding angle $x$?",
          diagram: {
            type: 'parallelLines',
            params: {
              angles: { x: true, y: '72\u00B0' },
              lineLabels: ['l', 'm', 't'],
              showParallelMarks: false
            }
          },
          choices: [
            { id: "A", text: "$18\u00B0$" },
            { id: "B", text: "$72\u00B0$" },
            { id: "C", text: "$108\u00B0$" },
            { id: "D", text: "$288\u00B0$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Corresponding Angles** -- 1 per test. Corresponding angles are EQUAL. That is the whole rule.\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** The problem says \"corresponding angle.\" Corresponding angles formed by parallel lines and a transversal are equal. So $x = 72\u00B0$. Done.\n\n**Step-by-step solution:**\nCorresponding angles formed by a transversal cutting parallel lines are equal.\nSince one angle is $72\u00B0$, its corresponding angle $x = 72\u00B0$.\n\n**Why the wrong answers are tempting:**\n- Choice A ($18\u00B0$): There is no standard angle relationship that gives $18\u00B0$ from $72\u00B0$. You may have divided by $4$ for no valid geometric reason. College Board includes a small number as a decoy.\n- Choice C ($108\u00B0$): This is the supplementary angle ($180\u00B0 - 72\u00B0 = 108\u00B0$). You confused corresponding angles (equal) with co-interior/same-side interior angles (supplementary). This is the most common error on this question type.\n- Choice D ($288\u00B0$): This is $4 \\times 72 = 288$, which exceeds $180\u00B0$ and cannot be an angle formed by a transversal. No valid geometric operation produces this.\n\n**Verification:** Corresponding angles are equal: $x = 72\u00B0$.\n\n**Test Day Takeaway:** Corresponding angles = EQUAL. Alternate interior angles = EQUAL. Co-interior (same-side interior) angles = SUPPLEMENTARY ($180\u00B0$). Know which is which.",
          skills: ["parallel-lines", "angles"]
        },
        // Question 4: Cost equation
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A gym charges a \\$50 registration fee plus \\$25 per month. A second gym charges no registration fee but \\$40 per month. After how many months will the total cost be the same at both gyms?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$\\frac{10}{3}$" },
            { id: "C", text: "$\\frac{25}{6}$" },
            { id: "D", text: "$5$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Comparing Linear Cost Models** -- Requires building two equations AND setting them equal. An extra reasoning step beyond a simple cost model.\n\n**Choice B is correct.**\n\n**The Fast Way (25 seconds):** Gym 1: $C = 25m + 50$. Gym 2: $C = 40m$. Set equal: $25m + 50 = 40m$, so $50 = 15m$, giving $m = \\frac{50}{15} = \\frac{10}{3}$.\n\n**Step-by-step solution:**\nGym 1 total cost: $C_1 = 25m + 50$\nGym 2 total cost: $C_2 = 40m$\n\nSet equal:\n$25m + 50 = 40m$\n$50 = 40m - 25m$\n$50 = 15m$\n$m = \\frac{50}{15} = \\frac{10}{3}$\n\n**Why the wrong answers are tempting:**\n- Choice A ($2$): You get this by computing $\\frac{50}{25} = 2$, dividing the registration fee by Gym 1's monthly rate. This ignores Gym 2 entirely and does not set up a comparison.\n- Choice C ($\\frac{25}{6}$): You get this if you set up the equation as $50m + 25 = 40m$ (swapping the slope and intercept for Gym 1), giving $10m + 25 = 0$ or $25 = -10m$. Alternatively, a sign error when rearranging leads to $\\frac{25}{6}$.\n- Choice D ($5$): You get this by computing $\\frac{50}{10} = 5$ instead of $\\frac{50}{15}$, likely from subtracting $40 - 25 = 15$ but then miswriting $15$ as $10$. Arithmetic slips on the denominator are common under time pressure.\n\n**Verification:** At $m = \\frac{10}{3}$: Gym 1 costs $25(\\frac{10}{3}) + 50 = \\frac{250}{3} + \\frac{150}{3} = \\frac{400}{3}$. Gym 2 costs $40(\\frac{10}{3}) = \\frac{400}{3}$. Equal. ✓\n\n**Test Day Takeaway:** When comparing two cost models, write both equations and set them equal. The break-even point is where the lines cross. Always reduce fractions fully.",
          skills: ["linear-equations", "modeling"]
        },
        // Question 5: Pythagorean theorem
        {
          id: 4,
          type: "fill-in",
          difficulty: "medium",
          question: "A ladder is placed against a wall, forming a right triangle with the ground. The base of the ladder is $6$ feet from the wall, and the ladder reaches $8$ feet up the wall. What is the area, in square feet, of the triangle formed by the ladder, the wall, and the ground?",
          correctAnswer: '24',
          explanation: "**SAT Pattern: Pythagorean Theorem + Area Combination** -- Requires recognizing the right-triangle geometry AND applying the area formula. The extra reasoning step separates this from a basic Pythagorean theorem question.\n\n**The correct answer is $24$.**\n\n**The Fast Way (15 seconds):** The wall and ground are the two legs of the right triangle: $6$ and $8$. Area $= \\frac{1}{2}(6)(8) = 24$. The ladder length ($10$, from the $6$-$8$-$10$ triple) is not needed for the area.\n\n**Step-by-step solution:**\n\nStep 1: Identify the right triangle.\nThe wall (vertical) $= 8$ ft, the ground (horizontal) $= 6$ ft, and the ladder is the hypotenuse.\n\nStep 2: Compute the area.\nThe two legs of the right triangle serve as the base and height:\n$$A = \\frac{1}{2} \\times 6 \\times 8 = 24 \\text{ square feet}$$\n\n**Common wrong answers and why they are tempting:**\n- $48$: You forgot the $\\frac{1}{2}$ and computed $6 \\times 8 = 48$. This is the area of a rectangle, not a triangle.\n- $30$: You used the ladder length ($10$) as the base and one leg as the height: $\\frac{1}{2}(10)(6) = 30$. But $6$ is not the height relative to base $10$ -- in a right triangle, you must use the two legs as base and height.\n- $40$: You used $\\frac{1}{2}(10)(8) = 40$, making the same error with the other leg.\n\n**Verification:** $\\frac{1}{2}(6)(8) = 24$. Alternatively, ladder $= \\sqrt{36 + 64} = 10$. Using Heron's formula with sides $6, 8, 10$: $s = 12$, $A = \\sqrt{12 \\cdot 6 \\cdot 4 \\cdot 2} = \\sqrt{576} = 24$. ✓\n\n**Test Day Takeaway:** In a right triangle, the two legs are automatically the base and height for the area formula. You do NOT need to find the hypotenuse first. Recognizing which dimensions to use is the key reasoning step.",
          skills: ["pythagorean-theorem", "right-triangles"]
        },
        // Question 6: Cubic function zeros
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The function $f(x) = x(x - 2)(x + 5)$ has zeros at which values of $x$?",
          choices: [
            { id: "A", text: "$x = 0$, $x = 2$, and $x = 5$" },
            { id: "B", text: "$x = 0$, $x = 2$, and $x = -5$" },
            { id: "C", text: "$x = 0$, $x = -2$, and $x = 5$" },
            { id: "D", text: "$x = 0$, $x = -2$, and $x = -5$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Zeros from Factored Form** -- 1-2 per test. Set each factor to zero and solve. The sign flip is where the trap lives.\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Set each factor to zero: $x = 0$, $x - 2 = 0$ gives $x = 2$, $x + 5 = 0$ gives $x = -5$. Or graph $y = x(x-2)(x+5)$ in Desmos and read the $x$-intercepts.\n\n**Step-by-step solution:**\n$x(x - 2)(x + 5) = 0$\n\n$x = 0$\n$x - 2 = 0 \\rightarrow x = 2$\n$x + 5 = 0 \\rightarrow x = -5$\n\nThe zeros are $x = 0$, $x = 2$, and $x = -5$.\n\n**Why the wrong answers are tempting:**\n- Choice A ($0, 2, 5$): Changes $-5$ to $+5$. The factor $(x + 5)$ gives $x = -5$, not $+5$. College Board puts this trap here because students often just read the number from the factor without flipping the sign.\n- Choice C ($0, -2, 5$): Flips the sign on $(x - 2)$, getting $x = -2$ instead of $2$. Same sign-confusion trap applied to the other factor.\n- Choice D ($0, -2, -5$): Flips both signs. This is what you get if you think \"the zero is the number in the factor\" without considering the operation.\n\n**Verification:** $f(0) = 0$, $f(2) = 2(0)(7) = 0$, $f(-5) = (-5)(-7)(0) = 0$.\n\n**Test Day Takeaway:** Factor $(x + a)$ gives zero $x = -a$. Factor $(x - a)$ gives zero $x = +a$. The sign ALWAYS flips from what you see in the factor.",
          skills: ["polynomial-functions", "zeros"]
        },
        // Question 7: Y-intercept from function
        {
          id: 6,
          type: "fill-in",
          difficulty: "medium",
          question: "The function $h(x) = x^2 - 6x + 8$ is graphed in the $xy$-plane. What is the $y$-coordinate of the $y$-intercept?",
          correctAnswer: '8',
          explanation: "**SAT Pattern: Finding the Y-Intercept** -- 1-2 per test. Plug in $x = 0$. For a polynomial in standard form, it is just the constant term.\n\n**The correct answer is 8.**\n\n**The Fast Way (5 seconds):** The $y$-intercept is the constant term of the polynomial: $8$. No calculation needed.\n\n**Step-by-step solution:**\nThe $y$-intercept occurs when $x = 0$:\n$h(0) = (0)^2 - 6(0) + 8 = 8$\n\nThe $y$-intercept is at $(0, 8)$, so the $y$-coordinate is $8$.\n\n**Verification:** $h(0) = 0 - 0 + 8 = 8$.\n\n**Test Day Takeaway:** The $y$-intercept is always $f(0)$. For any polynomial $ax^2 + bx + c$, the $y$-intercept equals the constant term $c$. Do not overthink it.",
          skills: ["quadratic-functions", "intercepts"]
        },
        // Question 8: Linear equation from context
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A video streaming service has $3$ million subscribers at the start of the year. Each month, the service gains $150{,}000$ new subscribers. Which equation represents the total number of subscribers $S$, in millions, after $m$ months?",
          choices: [
            { id: "A", text: "$S = 3 + 0.15m$" },
            { id: "B", text: "$S = 3 + 150m$" },
            { id: "C", text: "$S = 3m + 0.15$" },
            { id: "D", text: "$S = 0.15m$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Linear Model with Unit Conversion** -- 1-2 per test. The hidden trap is matching units -- everything must be in millions.\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** $S$ is in millions. Initial: $3$ million. Monthly gain: $150{,}000 = 0.15$ million. So $S = 3 + 0.15m$. Test with $m = 10$: $3 + 1.5 = 4.5$ million. Makes sense.\n\n**Step-by-step solution:**\nInitial subscribers: $3$ million\nMonthly gain: $150{,}000 = 0.15$ million\n\nEquation: $S = 3 + 0.15m$ (all in millions)\n\n**Why the wrong answers are tempting:**\n- Choice B ($S = 3 + 150m$): Uses $150$ instead of $0.15$. Since $S$ is in millions, $150{,}000$ must be converted to $0.15$ million. This traps students who forget to match units.\n- Choice C ($S = 3m + 0.15$): Swaps slope and intercept -- multiplies the initial value by $m$ and adds the rate as a constant. This reverses the entire model structure.\n- Choice D ($S = 0.15m$): Leaves out the initial $3$ million subscribers entirely. At $m = 0$, there should be $3$ million, not $0$.\n\n**Verification:** At $m = 0$: $S = 3 + 0 = 3$ million (matches initial). At $m = 10$: $S = 3 + 1.5 = 4.5$ million.\n\n**Test Day Takeaway:** When the answer is in specific units (millions, thousands, etc.), convert ALL numbers to those units before building the equation. Mismatched units is one of the SAT's favorite traps.",
          skills: ["linear-equations", "modeling"]
        },
        // Question 9: Function transformation
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The graph of $y = f(x)$ passes through the point $(3, 7)$. Through which point must the graph of $y = f(x - 2) + 4$ pass?",
          choices: [
            { id: "A", text: "$(1, 11)$" },
            { id: "B", text: "$(1, 3)$" },
            { id: "C", text: "$(5, 11)$" },
            { id: "D", text: "$(5, 3)$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Function Transformation Shifts** -- 1-2 per test. The direction of the horizontal shift is OPPOSITE to what you'd expect.\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** $f(x - 2)$ shifts RIGHT $2$ (opposite of the minus sign). The $+4$ shifts UP $4$. New point: $(3 + 2, 7 + 4) = (5, 11)$.\n\n**Step-by-step solution:**\nOriginal: $f(3) = 7$, so the point $(3, 7)$ is on the graph.\n\nFor $y = f(x - 2) + 4$:\n- $(x - 2)$ shifts the graph RIGHT $2$ units\n- $+4$ shifts the graph UP $4$ units\n\nNew point: $(3 + 2, 7 + 4) = (5, 11)$\n\n**Why the wrong answers are tempting:**\n- Choice A ($(1, 11)$): Uses $3 - 2 = 1$ instead of $3 + 2 = 5$. You shifted LEFT instead of RIGHT. This is College Board's favorite transformation trap -- $f(x - 2)$ shifts RIGHT, not left. The minus sign is counterintuitive.\n- Choice B ($(1, 3)$): Both coordinates are wrong. You shifted left AND down instead of right and up.\n- Choice D ($(5, 3)$): Correct $x$-shift but wrong $y$-shift. You subtracted $4$ instead of adding it: $7 - 4 = 3$. The $+4$ is OUTSIDE the function, so it shifts UP.\n\n**Verification:** When $x = 5$: $f(5 - 2) + 4 = f(3) + 4 = 7 + 4 = 11$.\n\n**Test Day Takeaway:** For $y = f(x - h) + k$: shift RIGHT by $h$ and UP by $k$. The horizontal direction is opposite the sign you see. The vertical direction matches the sign. New point: $(x + h, y + k)$.",
          skills: ["function-transformations"]
        },
        // Question 10: System of equations
        {
          id: 9,
          type: "fill-in",
          difficulty: "medium",
          question: "If $2x + 3y = 12$ and $4x - 3y = 6$, what is the value of $x + y$?",
          correctAnswer: '5',
          explanation: "**SAT Pattern: System of Equations -- Find an Expression** -- 2-3 per test. Sometimes you can find the requested expression without solving for each variable individually.\n\n**The correct answer is 5.**\n\n**The Fast Way (20 seconds):** Add the equations: $6x = 18$, so $x = 3$. Sub into equation 1: $6 + 3y = 12$, so $y = 2$. Therefore $x + y = 5$. Or type both into Desmos and read the intersection.\n\n**Step-by-step solution:**\nAdd the two equations ($+3y$ and $-3y$ cancel):\n$2x + 3y = 12$\n$4x - 3y = 6$\n\n$6x = 18$\n$x = 3$\n\nSubstitute into the first equation:\n$2(3) + 3y = 12$\n$3y = 6$\n$y = 2$\n\n$x + y = 3 + 2 = 5$\n\n**Verification:** $2(3) + 3(2) = 6 + 6 = 12$. $4(3) - 3(2) = 12 - 6 = 6$. Both check out.\n\n**Test Day Takeaway:** When opposite coefficients appear, add the equations to eliminate a variable instantly. Always double-check by verifying your solution in BOTH original equations.",
          skills: ["systems-of-equations"]
        },
        // Question 11: Multi-variable fraction equation
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$\\frac{15}{a} = \\frac{15}{b} + \\frac{15}{c}$\n\nThe given equation relates the distinct positive numbers $a$, $b$, and $c$, where $c > a$. Which of the following correctly expresses $b$ in terms of $a$ and $c$?",
          choices: [
            { id: "A", text: "$b = \\frac{ac}{c - a}$" },
            { id: "B", text: "$b = \\frac{ac}{a + c}$" },
            { id: "C", text: "$b = \\frac{a + c}{ac}$" },
            { id: "D", text: "$b = a - c$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Solving Reciprocal Equations** -- 1 per test in the hard section. The key move is dividing by the common factor, then working with $\\frac{1}{x}$ terms.\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** Divide everything by $15$: $\\frac{1}{a} = \\frac{1}{b} + \\frac{1}{c}$. Isolate $\\frac{1}{b} = \\frac{1}{a} - \\frac{1}{c} = \\frac{c - a}{ac}$. Flip: $b = \\frac{ac}{c - a}$.\n\n**Step-by-step solution:**\n\nStep 1: Divide both sides by $15$.\n$$\\frac{1}{a} = \\frac{1}{b} + \\frac{1}{c}$$\n\nStep 2: Isolate $\\frac{1}{b}$.\n$$\\frac{1}{b} = \\frac{1}{a} - \\frac{1}{c}$$\n\nStep 3: Combine fractions.\n$$\\frac{1}{b} = \\frac{c - a}{ac}$$\n\nStep 4: Take the reciprocal.\n$$b = \\frac{ac}{c - a}$$\n\n**Why the wrong answers are tempting:**\n- Choice B ($\\frac{ac}{a + c}$): Uses $a + c$ instead of $c - a$. This comes from adding $\\frac{1}{a} + \\frac{1}{c}$ instead of subtracting. College Board tests whether you correctly isolate -- since $\\frac{1}{b}$ equals the LEFT side minus $\\frac{1}{c}$, you subtract.\n- Choice C ($\\frac{a + c}{ac}$): This is $\\frac{1}{b}$ (the reciprocal of the answer), not $b$ itself. You set up the equation correctly but forgot to flip at the end.\n- Choice D ($b = a - c$): Oversimplified. The equation involves reciprocals, not the variables directly. You cannot just subtract $a - c$.\n\n**Verification:** Let $a = 3$, $c = 6$: $b = \\frac{18}{3} = 6$. Check: $\\frac{15}{3} = 5$ and $\\frac{15}{6} + \\frac{15}{6} = 2.5 + 2.5 = 5$.\n\n**Test Day Takeaway:** With reciprocal equations, divide out any common factor first, work with $\\frac{1}{x}$ forms, combine fractions, then take the reciprocal at the very end.",
          skills: ['Advanced Math', 'Rational Equations']
        },
        // Question 12: Area calculation
        {
          id: 11,
          type: "fill-in",
          difficulty: "hard",
          question: "A triangle has vertices at points $(0, 0)$, $(14, 0)$, and $(6, 9)$ in the $xy$-plane. A rectangle is inscribed in the triangle with one side along the $x$-axis. If the rectangle has a height of $3$, what is the area of the rectangle, in square units?",
          correctAnswer: '28',
          explanation: "**SAT Pattern: Inscribed Shape + Coordinate Geometry** -- Combines the triangle area/proportion concept with coordinate geometry reasoning. Multi-step problems requiring two concepts appear in the hard section.\n\n**The correct answer is $28$.**\n\n**The Fast Way (45 seconds):** The triangle has base $14$ on the $x$-axis and height $9$ (from vertex $(6,9)$). At height $y = 3$, the triangle has shrunk by a factor. The cross-section at height $3$ needs the left and right edges of the triangle at $y = 3$.\n\n**Step-by-step solution:**\n\nStep 1: Find the equations of the two non-horizontal sides of the triangle.\nLeft side from $(0,0)$ to $(6,9)$: slope $= \\frac{9}{6} = \\frac{3}{2}$, so $y = \\frac{3}{2}x$, which gives $x = \\frac{2y}{3}$.\nRight side from $(14,0)$ to $(6,9)$: slope $= \\frac{9-0}{6-14} = -\\frac{9}{8}$, so $y = -\\frac{9}{8}(x - 14)$, which gives $x = 14 - \\frac{8y}{9}$.\n\nStep 2: Find the width of the triangle at height $y = 3$.\nLeft edge: $x_L = \\frac{2(3)}{3} = 2$\nRight edge: $x_R = 14 - \\frac{8(3)}{9} = 14 - \\frac{24}{9} = 14 - \\frac{8}{3} = \\frac{42 - 8}{3} = \\frac{34}{3}$\n\nWidth at $y = 3$: $\\frac{34}{3} - 2 = \\frac{34 - 6}{3} = \\frac{28}{3}$\n\nStep 3: Compute the rectangle's area.\nThe rectangle has height $3$ and width $\\frac{28}{3}$:\n$$A = 3 \\times \\frac{28}{3} = 28$$\n\n**Verification:** At $y = 0$ (base), width $= 14 - 0 = 14$. At $y = 9$ (apex), width $= 0$. At $y = 3$ (one-third of the height), the width should be $14 \\times \\frac{9-3}{9} = 14 \\times \\frac{2}{3} = \\frac{28}{3}$. Area $= 3 \\times \\frac{28}{3} = 28$. ✓\n\n**Test Day Takeaway:** For inscribed rectangles in triangles, find the boundary lines and evaluate them at the given height. The width of a triangle cross-section scales linearly with how far you are from the apex. Coordinate geometry makes this systematic.",
          skills: ["area", "triangles"]
        },
        // Question 13: Poll proportion scaling
        {
          id: 12,
          type: "fill-in",
          difficulty: "hard",
          question: "In a random poll of $600$ voters in a town, $420$ said they would support Candidate A. If the town has $45{,}000$ eligible voters, approximately how many of the eligible voters would be expected to support Candidate A based on this poll?",
          correctAnswer: '31500',
          explanation: "**SAT Pattern: Proportion Scaling from Sample to Population** -- 1 per test. Find the sample proportion, then multiply by the population.\n\n**The correct answer is $31{,}500$.**\n\n**The Fast Way (15 seconds):** $\\frac{420}{600} = 0.70$, so $70\\%$ support. $0.70 \\times 45{,}000 = 31{,}500$.\n\n**Step-by-step solution:**\n\nStep 1: Find the proportion from the poll.\n$$\\frac{420}{600} = 0.70 = 70\\%$$\n\nStep 2: Apply to the full population.\n$$0.70 \\times 45{,}000 = 31{,}500$$\n\n**Verification:** $\\frac{420}{600} = \\frac{7}{10}$, and $\\frac{7}{10} \\times 45{,}000 = 31{,}500$.\n\n**Test Day Takeaway:** For poll/survey scaling: sample proportion = $\\frac{\\text{favorable}}{\\text{total sample}}$. Multiply that proportion by the population size. Keep the fraction form if it makes the multiplication cleaner.",
          skills: ['Data Analysis', 'Proportions']
        },
        // Question 14: Combined rates
        {
          id: 13,
          type: "fill-in",
          difficulty: "hard",
          question: "Machine A can complete a job in $6$ hours, and Machine B can complete the same job in $4$ hours. If both machines work together at their respective rates, how many hours will it take to complete the job?",
          correctAnswer: '2.4',
          explanation: "**SAT Pattern: Combined Work/Rate Problem** -- 1 per test. Add RATES, not times. This is the rule that matters.\n\n**The correct answer is $2.4$ hours.**\n\n**The Fast Way (20 seconds):** Rate A $= \\frac{1}{6}$, Rate B $= \\frac{1}{4}$. Combined $= \\frac{1}{6} + \\frac{1}{4} = \\frac{2 + 3}{12} = \\frac{5}{12}$. Time $= \\frac{12}{5} = 2.4$ hours.\n\n**Step-by-step solution:**\n\nStep 1: Find each rate.\nMachine A: $\\frac{1}{6}$ of the job per hour\nMachine B: $\\frac{1}{4}$ of the job per hour\n\nStep 2: Add rates.\n$$\\frac{1}{6} + \\frac{1}{4} = \\frac{2}{12} + \\frac{3}{12} = \\frac{5}{12}$$\n\nStep 3: Time $= \\frac{1}{\\text{combined rate}} = \\frac{12}{5} = 2.4$ hours.\n\n**Verification:** In $2.4$ hours, A completes $\\frac{2.4}{6} = 0.4$ and B completes $\\frac{2.4}{4} = 0.6$. Total: $0.4 + 0.6 = 1$ job.\n\n**Test Day Takeaway:** For combined work: add the RATES ($\\frac{1}{\\text{time}}$), never the times directly. The combined time must always be LESS than the faster individual time. Here, $2.4 < 4$, which makes sense.",
          skills: ['Problem Solving', 'Rates']
        },
        // Question 15: Substitution
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If $a = 3b$ and $2a + b = 35$, what is the value of $b$?",
          choices: [
            { id: "A", text: "$5$" },
            { id: "B", text: "$7$" },
            { id: "C", text: "$15$" },
            { id: "D", text: "$21$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: System by Substitution** -- 1-2 per test. When one equation is already solved for a variable, substitute directly.\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** Plug $a = 3b$ into $2a + b = 35$: $2(3b) + b = 7b = 35$, so $b = 5$. Or back-solve: try $b = 5$, then $a = 15$, and $2(15) + 5 = 35$. Works.\n\n**Step-by-step solution:**\nSubstitute $a = 3b$ into $2a + b = 35$:\n$2(3b) + b = 35$\n$6b + b = 35$\n$7b = 35$\n$b = 5$\n\n**Why the wrong answers are tempting:**\n- Choice B ($b = 7$): You might get this by dividing $35$ by $5$ instead of $7$. The coefficient $7b$ requires dividing by $7$, not $5$.\n- Choice C ($b = 15$): This is the value of $a$, not $b$. Since $a = 3(5) = 15$, you solved correctly but reported the wrong variable. College Board loves this trap -- always re-read what the question asks for.\n- Choice D ($b = 21$): You may have mixed up the substitution, perhaps using $b = 3a$ instead of $a = 3b$, leading to a different calculation entirely.\n\n**Verification:** $b = 5$, $a = 15$. Check: $2(15) + 5 = 30 + 5 = 35$.\n\n**Test Day Takeaway:** After solving, re-read the question to make sure you are reporting the right variable. Answering with $a$ when they asked for $b$ is one of the most common careless errors on the SAT.",
          skills: ["systems-of-equations", "substitution"]
        },
        // Question 16: Linear context interpretation
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The equation $C = 0.08m + 35$ models the monthly cost $C$, in dollars, of a phone plan where $m$ is the number of minutes used over the plan limit. What does $35$ represent in this context?",
          choices: [
            { id: "A", text: "The cost per minute over the limit" },
            { id: "B", text: "The base monthly cost before overage charges" },
            { id: "C", text: "The number of minutes included in the plan" },
            { id: "D", text: "The total cost for $35$ overage minutes" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Interpreting Linear Model Components** -- 1-2 per test. Slope = rate of change, y-intercept = starting/fixed value.\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** In $C = 0.08m + 35$, the $35$ is the constant term (y-intercept). It is the cost when $m = 0$ (no overage minutes). That is the base monthly cost.\n\n**Step-by-step solution:**\nIn $C = 0.08m + 35$:\n- $0.08$ is the slope (cost per additional minute)\n- $35$ is the y-intercept (cost when $m = 0$)\n\nWhen $m = 0$ (no overage), $C = 35$. So $35$ is the base monthly cost.\n\n**Why the wrong answers are tempting:**\n- Choice A: This describes $0.08$, not $35$. The slope ($0.08$) is the cost per minute. College Board tests whether you can tell slope from intercept.\n- Choice C: $35$ has units of dollars, not minutes. It cannot represent a count of minutes. Students who lose track of units fall for this.\n- Choice D: The cost for $35$ overage minutes would be $0.08(35) + 35 = \\$37.80$, not $\\$35$. The constant $35$ does not depend on any minute count.\n\n**Verification:** At $m = 0$: $C = 0.08(0) + 35 = \\$35$. This is the cost with zero overage.\n\n**Test Day Takeaway:** In $y = mx + b$: the slope ($m$) is the rate per unit, and the y-intercept ($b$) is the starting value or fixed cost. Know which is which and match them to the context.",
          skills: ["linear-equations", "function-interpretation"]
        },
        // Question 17: Data table - g(x) = f(x)/(x+2), find y-intercept of f
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The table gives the values of the function $g$ for some values of $x$, where $g(x) = \\frac{f(x)}{x + 2}$ and $f$ is a linear function. What is the $y$-intercept of the graph of $y = f(x)$ in the $xy$-plane?",
          diagram: {
            type: 'dataTable',
            params: {
              headers: ['x', 'g(x)'],
              rows: [
                ['-5', '0'],
                ['0', '5'],
                ['4', '3']
              ]
            }
          },
          choices: [
            { id: "A", text: "$(0, -5)$" },
            { id: "B", text: "$(0, 10)$" },
            { id: "C", text: "$(0, 20)$" },
            { id: "D", text: "$(0, 30)$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Recovering a Function from a Composite Relationship** -- 1 per test in the hard section. Use the given relationship to find $f$ values from $g$ values.\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Since $g(x) = \\frac{f(x)}{x + 2}$, we have $f(x) = g(x)(x + 2)$. At $x = 0$: $f(0) = 5 \\cdot 2 = 10$. The $y$-intercept is $(0, 10)$. Done.\n\n**Step-by-step solution:**\nSince $g(x) = \\frac{f(x)}{x + 2}$, multiply both sides: $f(x) = g(x) \\cdot (x + 2)$.\n\nUsing the table:\n- At $x = -5$: $f(-5) = 0 \\cdot (-3) = 0$\n- At $x = 0$: $f(0) = 5 \\cdot 2 = 10$\n- At $x = 4$: $f(4) = 3 \\cdot 6 = 18$\n\nSince $f$ is linear, verify with slope: $\\frac{10 - 0}{0 - (-5)} = 2$. So $f(x) = 2x + 10$.\nCheck: $f(4) = 8 + 10 = 18$.\n\nThe $y$-intercept is $(0, 10)$.\n\n**Why the wrong answers are tempting:**\n- Choice A ($(0, -5)$): Confuses the $x$-intercept value with the $y$-intercept. Since $f(-5) = 0$, the graph crosses the $x$-axis at $-5$, but that is not the $y$-intercept.\n- Choice C ($(0, 20)$): A computation error, possibly from doubling $f(0) = 10$ or using an incorrect slope.\n- Choice D ($(0, 30)$): Results from a different slope miscalculation.\n\n**Verification:** $f(x) = 2x + 10$: $f(-5) = 0$, $f(0) = 10$, $f(4) = 18$. All match.\n\n**Test Day Takeaway:** When given $g(x) = \\frac{f(x)}{\\text{something}}$, multiply both sides to isolate $f(x)$. Then use the table values to compute $f$ at each point. For the $y$-intercept specifically, just evaluate $f(0)$.",
          skills: ["function-operations", "linear-functions", "tables"]
        },
        // Question 18: Radical exponents
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Which expression is equivalent to $x^{\\frac{2}{3}} \\cdot x^{\\frac{1}{6}}$?",
          choices: [
            { id: "A", text: "$x^{\\frac{1}{9}}$" },
            { id: "B", text: "$x^{\\frac{1}{3}}$" },
            { id: "C", text: "$x^{\\frac{5}{6}}$" },
            { id: "D", text: "$x^{\\frac{2}{9}}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Adding Fractional Exponents** -- 1 per test. Same base multiplied = ADD the exponents. Find a common denominator.\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Same base, so add exponents: $\\frac{2}{3} + \\frac{1}{6} = \\frac{4}{6} + \\frac{1}{6} = \\frac{5}{6}$. Pick C.\n\n**Step-by-step solution:**\n$x^{\\frac{2}{3}} \\cdot x^{\\frac{1}{6}} = x^{\\frac{2}{3} + \\frac{1}{6}}$\n\nCommon denominator: $\\frac{2}{3} = \\frac{4}{6}$\n\n$\\frac{4}{6} + \\frac{1}{6} = \\frac{5}{6}$\n\nResult: $x^{\\frac{5}{6}}$\n\n**Why the wrong answers are tempting:**\n- Choice A ($x^{\\frac{1}{9}}$): You MULTIPLIED the exponents ($\\frac{2}{3} \\times \\frac{1}{6} = \\frac{2}{18} = \\frac{1}{9}$) instead of adding them. You only multiply exponents for $(x^a)^b$, not $x^a \\cdot x^b$.\n- Choice B ($x^{\\frac{1}{3}}$): You may have subtracted instead of adding, or made a fraction arithmetic error. $\\frac{4}{6} + \\frac{1}{6} = \\frac{5}{6}$, not $\\frac{2}{6} = \\frac{1}{3}$.\n- Choice D ($x^{\\frac{2}{9}}$): Another multiplication error -- $\\frac{2}{3} \\times \\frac{1}{3} = \\frac{2}{9}$. College Board designs multiple \"multiplication instead of addition\" traps.\n\n**Verification:** $\\frac{4}{6} + \\frac{1}{6} = \\frac{5}{6}$.\n\n**Test Day Takeaway:** Multiplying same-base terms = ADD exponents. Raising a power to a power = MULTIPLY exponents. These two rules are the source of almost every exponent trap on the SAT.",
          skills: ["exponents", "radicals"]
        },
        // Question 18: Radical equation
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "What is the solution to the equation $\\sqrt{3x + 7} = x - 1$?",
          correctAnswer: '6',
          explanation: "**SAT Pattern: Radical Equation with Extraneous Solution** -- 1 per test. Square both sides, solve, then CHECK both solutions in the original.\n\n**The correct answer is $6$.**\n\n**The Fast Way (30 seconds):** Type $y = \\sqrt{3x + 7}$ and $y = x - 1$ into Desmos. They intersect at $x = 6$. Done.\n\n**Step-by-step solution:**\n\nStep 1: Square both sides.\n$$3x + 7 = (x - 1)^2 = x^2 - 2x + 1$$\n\nStep 2: Rearrange.\n$$x^2 - 5x - 6 = 0$$\n\nStep 3: Factor.\n$$(x - 6)(x + 1) = 0$$\n$$x = 6 \\text{ or } x = -1$$\n\nStep 4: Check for extraneous solutions.\n- $x = 6$: $\\sqrt{18 + 7} = \\sqrt{25} = 5$ and $6 - 1 = 5$. Valid.\n- $x = -1$: $\\sqrt{-3 + 7} = \\sqrt{4} = 2$ and $-1 - 1 = -2$. INVALID ($2 \\neq -2$).\n\nOnly $x = 6$ works.\n\n**Verification:** $\\sqrt{3(6) + 7} = \\sqrt{25} = 5 = 6 - 1$.\n\n**Test Day Takeaway:** When you square both sides of an equation, you can create fake solutions. ALWAYS plug your answers back into the ORIGINAL equation. The square root side must be non-negative, which is why $x = -1$ fails here.",
          skills: ['Advanced Math', 'Radical Equations']
        },
        // Question 19: Quadratic with vertex and point (graph-based)
        {
          id: 19,
          type: "fill-in",
          difficulty: "hard",
          question: "The function $f$ is defined by $f(x) = 2x^2 + bx + c$, where $b$ and $c$ are constants. The graph of $y = f(x)$ in the $xy$-plane is shown. What is the value of $b + c$?",
          diagram: {
            type: "parabola",
            params: {
              vertex: { h: 3, k: -5 },
              a: 2,
              xRange: [-2, 8],
              yRange: [-8, 16],
              xTickInterval: 2,
              yTickInterval: 2,
              gridInterval: 1,
              showVertex: true,
              highlightPoints: [[0, 13]],
              label: "y = f(x)"
            }
          },
          correctAnswer: '1',
          explanation: "**SAT Pattern: Find Coefficients from a Graph** -- 1 per test in the hard section. Read the vertex from the graph, write vertex form, expand, match coefficients.\n\n**The correct answer is $1$.**\n\n**The Fast Way (30 seconds):** Vertex is $(3, -5)$ with $a = 2$. Vertex form: $2(x-3)^2 - 5$. Expand: $2x^2 - 12x + 18 - 5 = 2x^2 - 12x + 13$. So $b = -12$, $c = 13$, and $b + c = 1$.\n\n**Step-by-step solution:**\n\nStep 1: From the graph, vertex $= (3, -5)$ and the curve passes through $(0, 13)$.\n\nStep 2: Vertex form with $a = 2$:\n$f(x) = 2(x - 3)^2 - 5$\n\nStep 3: Expand.\n$f(x) = 2(x^2 - 6x + 9) - 5 = 2x^2 - 12x + 18 - 5 = 2x^2 - 12x + 13$\n\nStep 4: $b = -12$, $c = 13$.\n$b + c = -12 + 13 = 1$\n\n**Verification:** $f(0) = 0 - 0 + 13 = 13$ (matches graph). Vertex: $x = \\frac{12}{4} = 3$, $f(3) = 18 - 36 + 13 = -5$ (matches graph).\n\n**Test Day Takeaway:** When a graph shows a parabola, read the vertex and use vertex form $a(x-h)^2 + k$. Expand to standard form to find $b$ and $c$. Always verify with a second point from the graph.",
          skills: ['Advanced Math', 'Quadratic Equations']
        },
        // Question 20: Parabola-line system — exactly one intersection
        {
          id: 20,
          type: "fill-in",
          difficulty: "hard",
          question: "In the $xy$-plane, the line $y = -2x + k$ is tangent to the parabola $y = x^2 - 6x + 5$. What is the value of $k$?",
          correctAnswer: '1',
          explanation: "**SAT Pattern: Tangent Line to Parabola (Discriminant = 0)** -- 1 per test in the hard section. Tangent means exactly one intersection, which means discriminant equals zero.\n\n**The correct answer is $1$.**\n\n**The Fast Way (30 seconds):** Set equal: $x^2 - 6x + 5 = -2x + k$ gives $x^2 - 4x + (5 - k) = 0$. Discriminant $= 16 - 4(5-k) = 0$ gives $16 - 20 + 4k = 0$, so $k = 1$.\n\n**Step-by-step solution:**\n\nStep 1: Set equal.\n$$x^2 - 6x + 5 = -2x + k$$\n$$x^2 - 4x + 5 - k = 0$$\n\nStep 2: Discriminant $= 0$ for tangency.\n$$(-4)^2 - 4(1)(5 - k) = 0$$\n$$16 - 20 + 4k = 0$$\n$$4k = 4$$\n$$k = 1$$\n\n**Verification:** With $k = 1$: $x^2 - 4x + 4 = 0 \\rightarrow (x-2)^2 = 0 \\rightarrow x = 2$. Parabola: $4 - 12 + 5 = -3$. Line: $-4 + 1 = -3$. One intersection at $(2, -3)$.\n\n**Test Day Takeaway:** \"Tangent\" or \"exactly one intersection\" between a line and a parabola means set them equal, rearrange to a quadratic, and force $b^2 - 4ac = 0$.",
          skills: ['Advanced Math', 'Quadratic Equations']
        },
        // Question 21: Complex radical equation
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In the given equation, $k$ is a positive constant. Which of the following is one of the solutions to the given equation?\n\n$\\frac{x^2}{\\sqrt{x^2 - k^2}} = \\frac{k^2}{\\sqrt{x^2 - k^2}} + 17$",
          choices: [
            { id: "A", text: "$-k$" },
            { id: "B", text: "$\\sqrt{17^2 - k^2}$" },
            { id: "C", text: "$-\\sqrt{k^2 + 17^2}$" },
            { id: "D", text: "$\\sqrt{k^2 - 17^2}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Complex Radical Equation with Substitution** -- Rare (0-1 per test), but appears in the hardest section. Use a clever substitution to simplify.\n\n**Choice C is correct.**\n\n**The Fast Way (60 seconds):** Notice both fractions share the same denominator. Subtract $\\frac{k^2}{\\sqrt{x^2-k^2}}$ from both sides: $\\frac{x^2-k^2}{\\sqrt{x^2-k^2}} = 17$. The left side simplifies to $\\sqrt{x^2-k^2} = 17$. So $x^2 - k^2 = 289$, meaning $x = \\pm\\sqrt{k^2+289}$. Choice C matches the negative root.\n\n**Step-by-step solution:**\n\nStep 1: Subtract $\\frac{k^2}{\\sqrt{x^2 - k^2}}$ from both sides.\n$$\\frac{x^2 - k^2}{\\sqrt{x^2 - k^2}} = 17$$\n\nStep 2: Simplify the left side. Since $\\frac{u^2}{\\sqrt{u^2}} = \\frac{u^2}{|u|} = |u|$ when $u^2 = x^2 - k^2$:\n$$\\sqrt{x^2 - k^2} = 17$$\n\nStep 3: Square both sides.\n$$x^2 - k^2 = 289 = 17^2$$\n$$x^2 = k^2 + 17^2$$\n$$x = \\pm\\sqrt{k^2 + 17^2}$$\n\nChoice C gives $x = -\\sqrt{k^2 + 17^2}$, which is one of the solutions.\n\n**Why the wrong answers are tempting:**\n- Choice A ($-k$): This makes $\\sqrt{x^2 - k^2} = \\sqrt{k^2 - k^2} = 0$, which puts zero in the denominator. The equation is undefined here. College Board tests whether you check for division by zero.\n- Choice B ($\\sqrt{17^2 - k^2}$): Uses subtraction instead of addition under the radical. The correct equation gives $x^2 = k^2 + 17^2$, not $17^2 - k^2$.\n- Choice D ($\\sqrt{k^2 - 17^2}$): Subtracts in the other direction. Also, this is only real when $k > 17$, making it not a general solution.\n\n**Verification:** $x = -\\sqrt{k^2 + 289}$: $x^2 - k^2 = 289$, $\\sqrt{289} = 17$. LHS $= \\frac{k^2 + 289}{17}$, RHS $= \\frac{k^2}{17} + 17 = \\frac{k^2 + 289}{17}$.\n\n**Test Day Takeaway:** When fractions share the same denominator, combine them first. Look for expressions like $\\frac{u^2}{\\sqrt{u^2}}$ that simplify to $\\sqrt{u^2}$. And always check that your answer does not make a denominator zero.",
          skills: ["radical-equations", "algebraic-manipulation", "quadratic-equations"]
        },
        // Question 22: Quadratic modeling - Rocket height
        {
          id: 22,
          type: "fill-in",
          difficulty: "hard",
          question: "A quadratic function $h$ models the height, in feet, above the ground of a model rocket $t$ seconds after launch. The function estimates that the rocket reached its maximum height of $576$ feet $6$ seconds after launch and returned to the ground $12$ seconds after launch. Based on this function, what was the estimated height, in feet, of the rocket $9$ seconds after launch?",
          correctAnswer: '432',
          explanation: "**SAT Pattern: Quadratic Modeling with Vertex Form** -- 1 per test. Given vertex and another point, build the equation and evaluate.\n\n**The correct answer is 432.**\n\n**The Fast Way (30 seconds):** Vertex $= (6, 576)$, so $h(t) = a(t-6)^2 + 576$. Use $(12, 0)$: $0 = a(36) + 576$, so $a = -16$. Then $h(9) = -16(9) + 576 = -144 + 576 = 432$.\n\n**Step-by-step solution:**\n\nStep 1: Vertex form with vertex $(6, 576)$.\n$h(t) = a(t - 6)^2 + 576$\n\nStep 2: Find $a$ using the point $(12, 0)$.\n$0 = a(12 - 6)^2 + 576$\n$0 = 36a + 576$\n$a = -16$\n\nStep 3: $h(t) = -16(t - 6)^2 + 576$\n\nStep 4: Evaluate at $t = 9$.\n$h(9) = -16(9 - 6)^2 + 576 = -16(9) + 576 = -144 + 576 = 432$\n\n**Verification:** By symmetry, $t = 9$ is $3$ seconds after the vertex, and $t = 3$ is $3$ seconds before. $h(3) = -16(3-6)^2 + 576 = -16(9) + 576 = 432$. Both give the same height, confirming the parabola's symmetry.\n\n**Test Day Takeaway:** For projectile problems, use vertex form $a(t-h)^2 + k$ when you know the max height and timing. Find $a$ with one other point (usually where the object hits the ground), then plug in the requested time.",
          skills: ["quadratic-functions", "vertex-form", "modeling", "word-problems"]
        }
      ]
    }
  ]
};
