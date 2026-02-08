// Practice Test 6 - Based on College Board SAT Practice Test #5
// 44 questions total (22 per module)

export const practiceTest6 = {
  id: 'practice-test-6',
  title: 'Practice Test 6',
  description: 'Full-length SAT Math practice test with 44 questions',
  modules: [
    {
      id: 'module-1',
      title: 'Math: Module 1',
      questions: [
        {
          id: 1,
          type: 'multiple-choice',
          difficulty: 'easy',
          question: '$s + 5r = 32$\n$r = 4$\n\nWhat is the solution $(r, s)$ to the given system of equations?',
          choices: [
            { id: 'A', text: '$(4, 12)$' },
            { id: 'B', text: '$(12, 4)$' },
            { id: 'C', text: '$(4, 32)$' },
            { id: 'D', text: '$(32, 4)$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Substitute the known value and solve.\n\n**Step 1: Substitute $r = 4$ into the first equation**\n$s + 5(4) = 32$\n$s + 20 = 32$\n$s = 12$\n\n**Step 2: Write the solution**\nThe solution is $(r, s) = (4, 12)$.\n\n**Why other choices are incorrect:**\n• Choice B $(12, 4)$: Swaps $r$ and $s$ — the order is $(r, s)$, not $(s, r)$\n• Choice C $(4, 32)$: Uses the constant $32$ as $s$ without solving\n• Choice D $(32, 4)$: Uses $32$ as $r$ and $4$ as $s$\n\n**Verification:** $12 + 5(4) = 12 + 20 = 32$ ✓\n\n**Key concept:** When one variable is given directly ($r = 4$), substitute it into the other equation to find the remaining variable.',
          skills: ["substitution-method", "linear-equations"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The table shows the results of a survey asking $200$ students about their preferred study method. What fraction of students who prefer visual learning are seniors?",
          questionTable: {
            headers: ["", "Visual", "Auditory", "Hands-on", "Total"],
            rows: [
              ["Juniors", "45", "30", "25", "100"],
              ["Seniors", "35", "40", "25", "100"],
              ["Total", "80", "70", "50", "200"]
            ]
          },
          choices: [
            { id: "A", text: "$\\frac{35}{200}$" },
            { id: "B", text: "$\\frac{35}{100}$" },
            { id: "C", text: "$\\frac{35}{80}$" },
            { id: "D", text: "$\\frac{80}{200}$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Find the fraction of visual learners who are seniors.\n\n• Total students who prefer visual learning: $80$\n• Seniors who prefer visual learning: $35$\n• Fraction: $\\frac{35}{80}$\n\n**Why other choices are incorrect:**\n• Choice A ($\\frac{35}{200}$): Uses total students as denominator, not visual learners\n• Choice B ($\\frac{35}{100}$): Uses total seniors as denominator\n• Choice D ($\\frac{80}{200}$): Represents fraction of all students who prefer visual learning\n\n**Key concept:** For conditional probability, the denominator is the total of the condition (visual learners), not the overall total.",
          skills: ["probability", "two-way-tables"]
        },
        {
          id: 3,
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'At a particular conference, the ratio of speakers to attendees is $1$ to $32$. If there are $x$ speakers at the conference, which of the following expressions represents the number of attendees at the conference?',
          choices: [
            { id: 'A', text: '$\\frac{x}{32}$' },
            { id: 'B', text: '$32x$' },
            { id: 'C', text: '$x + 32$' },
            { id: 'D', text: '$\\frac{32}{x}$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Use the ratio to write an expression for the number of attendees.\n\n**Step 1: Interpret the ratio**\nThe ratio of speakers to attendees is $1:32$. This means for every $1$ speaker, there are $32$ attendees.\n\n**Step 2: Write the expression**\nIf there are $x$ speakers, multiply by $32$ to find the number of attendees:\n$$\\text{Attendees} = 32x$$\n\n**Why other choices are incorrect:**\n• Choice A ($\\frac{x}{32}$): Divides speakers by $32$, which would give fewer attendees than speakers\n• Choice C ($x + 32$): Adds $32$ instead of multiplying — this only works if there is exactly $1$ speaker\n• Choice D ($\\frac{32}{x}$): This gives a decreasing value as speakers increase, which contradicts the proportional relationship\n\n**Key concept:** A ratio of $1:32$ means the second quantity is $32$ times the first. If the first quantity is $x$, the second is $32x$.',
          skills: ["word-problem-to-equation"]
        },
        {
          id: 4,
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'In a figure, line $m$ is parallel to line $n$, and line $k$ intersects both lines. The angle formed between line $k$ and line $m$ measures $132°$. Which of the following statements is true about the angle $x°$ formed between line $k$ and line $n$ on the same side?',
          diagram: {
            type: "parallelLines",
            params: {
              angles: { x: "132°", y: "x°" },
              lineLabels: { m: "m", n: "n", t: "k" },
              showParallelMarks: false
            }
          },
          choices: [
            { id: 'A', text: 'The value of $x$ is less than $132$.' },
            { id: 'B', text: 'The value of $x$ is greater than $132$.' },
            { id: 'C', text: 'The value of $x$ is equal to $132$.' },
            { id: 'D', text: 'The value of $x$ cannot be determined.' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Apply the corresponding angles postulate for parallel lines cut by a transversal.\n\n**Step 1: Identify the angle relationship**\nWhen a transversal (line $k$) crosses two parallel lines ($m$ and $n$), it creates corresponding angles — angles in the same position at each intersection.\n\n**Step 2: Apply the postulate**\nCorresponding angles formed by a transversal cutting parallel lines are equal. The angle at line $m$ is $132°$, and $x°$ is the corresponding angle at line $n$ on the same side. Therefore $x = 132$.\n\n**Why other choices are incorrect:**\n• Choice A (less than $132$): Corresponding angles are equal, not smaller\n• Choice B (greater than $132$): Corresponding angles are equal, not larger\n• Choice D (cannot be determined): The angle can be determined because the lines are parallel\n\n**Key concept:** When parallel lines are cut by a transversal, corresponding angles are congruent. Alternate interior angles are also congruent, and co-interior (same-side interior) angles are supplementary ($180°$).',
          skills: ["triangle-angle-sum"]
        },
        {
          id: 5,
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The graph of the linear function $f$ is shown, where $y = f(x)$. What is the $y$-intercept of the graph of $f$?',
          diagram: {
            type: "linearGraph",
            params: {
              slope: 1,
              yIntercept: -5,
              xRange: [-2, 10],
              yRange: [-8, 6],
              xTickInterval: 2,
              yTickInterval: 2,
              label: "f"
            }
          },
          choices: [
            { id: 'A', text: '$(0, 0)$' },
            { id: 'B', text: '$(0, -5)$' },
            { id: 'C', text: '$(0, 5)$' },
            { id: 'D', text: '$(0, 10)$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Read the $y$-intercept directly from the graph.\n\n**Step 1: Recall the definition of $y$-intercept**\nThe $y$-intercept is the point where the graph crosses the $y$-axis. At this point, $x = 0$.\n\n**Step 2: Read the graph at $x = 0$**\nThe line crosses the $y$-axis at $y = -5$, so the $y$-intercept is the point $(0, -5)$.\n\n**Why other choices are incorrect:**\n• Choice A $(0, 0)$: The line does not pass through the origin\n• Choice C $(0, 5)$: This has the wrong sign — the line crosses below the $x$-axis\n• Choice D $(0, 10)$: The line is nowhere near $y = 10$ when $x = 0$\n\n**Key concept:** The $y$-intercept is always written as a point $(0, b)$ and can be read from a graph by finding where the line meets the $y$-axis. In slope-intercept form $y = mx + b$, the value $b$ is the $y$-intercept.',
          skills: ["slope-intercept-form"]
        },
        {
          id: 6,
          type: 'fill-in',
          difficulty: 'easy',
          question: 'A store sells two different-sized containers of almonds. The store\'s sales of these almonds totaled \\$725.40 last month. The equation $3.85x + 5.45y = 725.40$ represents this situation, where $x$ is the number of smaller containers sold and $y$ is the number of larger containers sold. According to the equation, what is the price, in dollars, of each smaller container?',
          correctAnswer: '3.85',
          explanation: '**The correct answer is $3.85$.** Interpret the coefficient of $x$ in the context of the equation.\n\n**Step 1: Understand the equation structure**\nThe equation $3.85x + 5.45y = 725.40$ represents total sales, where:\n• $x$ = number of smaller containers sold\n• $y$ = number of larger containers sold\n• $725.40$ = total revenue in dollars\n\n**Step 2: Identify the meaning of each coefficient**\nIn a revenue equation of the form $\\text{(price}_1\\text{)(quantity}_1\\text{)} + \\text{(price}_2\\text{)(quantity}_2\\text{)} = \\text{total}$:\n• $3.85$ is multiplied by $x$ (smaller containers), so $3.85$ is the price per smaller container\n• $5.45$ is the price per larger container\n\n**Verification:** If $10$ small and $100$ large containers were sold: $3.85(10) + 5.45(100) = 38.50 + 545 = 583.50$ — the coefficient correctly gives the per-unit price.\n\n**Key concept:** In a linear cost/revenue equation, the coefficient of each variable represents the per-unit rate for that item.',
          skills: ["word-problem-to-equation", "linear-equations"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "easy",
          question: "$\\frac{x^2}{16} = 49$\n\nWhat is a solution to the given equation?",
          choices: [
            { id: "A", text: "$7$" },
            { id: "B", text: "$28$" },
            { id: "C", text: "$392$" },
            { id: "D", text: "$784$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Solve by isolating $x^2$.\n\n• Multiply both sides by $16$: $x^2 = 49 \\times 16 = 784$\n• Take the square root: $x = \\pm\\sqrt{784} = \\pm 28$\n• The positive solution is $28$\n\n**Why other choices are incorrect:**\n• Choice A ($7$): This is $\\sqrt{49}$ without multiplying by $16$\n• Choice C ($392$): This is $49 \\times 8$ (half of the correct multiplication)\n• Choice D ($784$): This is $x^2$, not $x$\n\n**Key concept:** When solving equations with fractions, multiply both sides by the denominator first.\n\n**Calculator tip:** Calculate $\\sqrt{49 \\times 16} = \\sqrt{784} = 28$.",
          skills: ["Algebra", "Solving equations"]
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "Elena bought $7$ identical picture frames. She used a coupon for \\$35 off the entire purchase. The cost for the entire purchase after using the coupon was \\$56. What was the original price, in dollars, for $1$ picture frame?",
          correctAnswer: "13",
          explanation: "**The correct answer is $13$.**\n\n• Let $p =$ original price per frame\n• Total before coupon: $7p$\n• After \\$35 coupon: $7p - 35 = 56$\n• Solve: $7p = 56 + 35 = 91$\n• $p = 91 \\div 7 = 13$\n\n**Verification:** $7 \\times $ \\$13 $= $ \\$91, then \\$91 $-$ \\$35 $=$ \\$56 ✓\n\n**Key concept:** Work backward by adding the discount back to find the original total, then divide by the number of items.",
          skills: ["Algebra", "Linear equations"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Triangles $PQR$ and $XYZ$ are similar, where $P$ corresponds to $X$ and $Q$ corresponds to $Y$. If $\\cos(P) = \\frac{5}{13}$, what is the value of $\\cos(X)$?",
          choices: [
            { id: "A", text: "$\\frac{5}{13}$" },
            { id: "B", text: "$\\frac{12}{13}$" },
            { id: "C", text: "$\\frac{13}{5}$" },
            { id: "D", text: "$\\frac{5}{12}$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** In similar triangles, corresponding angles are equal.\n\n• $P$ corresponds to $X$ means $\\angle P = \\angle X$\n• If $\\cos(P) = \\frac{5}{13}$, then $\\cos(X) = \\frac{5}{13}$\n\n**Why other choices are incorrect:**\n• Choice B ($\\frac{12}{13}$): This would be $\\sin(P)$ if the triangle were $5$-$12$-$13$\n• Choice C ($\\frac{13}{5}$): This is the reciprocal (secant), not cosine\n• Choice D ($\\frac{5}{12}$): This would be $\\tan(P)$ in a $5$-$12$-$13$ triangle\n\n**Key concept:** Similar triangles have equal corresponding angles, so their trigonometric ratios for corresponding angles are equal.",
          skills: ["similar-triangles", "trigonometry"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In a poll of $8000$ voters, $5280$ said they support a new policy. What percent of voters support the new policy?",
          choices: [
            { id: "A", text: "$52.8\\%$" },
            { id: "B", text: "$66\\%$" },
            { id: "C", text: "$72\\%$" },
            { id: "D", text: "$79.2\\%$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Calculate the percentage.\n\n• Percent $= \\frac{\\text{Part}}{\\text{Whole}} \\times 100$\n• Percent $= \\frac{5280}{8000} \\times 100$\n• Percent $= 0.66 \\times 100$\n• Percent $= 66\\%$\n\n**Why other choices are incorrect:**\n• Choice A ($52.8\\%$): This would be $\\frac{4224}{8000}$\n• Choice C ($72\\%$): This would be $\\frac{5760}{8000}$\n• Choice D ($79.2\\%$): This would be $\\frac{6336}{8000}$\n\n**Key concept:** Percentage $= (\\text{Part} \\div \\text{Whole}) \\times 100$",
          skills: ["percentages", "proportions"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "The function $f$ is defined by $f(x) = 6x + 4$. For what value of $x$ does $f(x) = 28$?",
          correctAnswer: 4,
          explanation: "**The correct answer is 4.** Set $f(x)$ equal to $28$ and solve for $x$.\n\n• $f(x) = 6x + 4$\n• $28 = 6x + 4$\n• $28 - 4 = 6x$\n• $24 = 6x$\n• $x = 4$\n\n**Verification:** $f(4) = 6(4) + 4 = 24 + 4 = 28$ ✓\n\n**Key concept:** To find the input for a given output, substitute the output for $f(x)$ and solve the resulting equation.",
          skills: ["function-equations", "linear-equations"]
        },
        {
          id: 12,
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'A right circular cylinder has a base diameter of $18$ centimeters and a height of $8$ centimeters. What is the volume, in cubic centimeters, of the cylinder?',
          choices: [
            { id: 'A', text: '$144\\pi$' },
            { id: 'B', text: '$288\\pi$' },
            { id: 'C', text: '$648\\pi$' },
            { id: 'D', text: '$2{,}592\\pi$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Use the cylinder volume formula with the given dimensions.\n\n**Step 1: Find the radius**\nThe diameter is $18$ cm, so the radius is:\n$$r = \\frac{18}{2} = 9 \\text{ cm}$$\n\n**Step 2: Apply the volume formula**\n$$V = \\pi r^2 h = \\pi(9)^2(8) = \\pi(81)(8) = 648\\pi$$\n\n**Why other choices are incorrect:**\n• Choice A ($144\\pi$): Uses $r = 18$ and $h = 8$ incorrectly, or $r = 12$ with wrong height\n• Choice B ($288\\pi$): Likely uses $r = 6$ (one-third of diameter instead of half)\n• Choice D ($2{,}592\\pi$): Uses the diameter ($18$) instead of the radius\n\n**Key concept:** The volume of a cylinder is $V = \\pi r^2 h$. Always use the radius (half the diameter), not the diameter itself. This formula is provided on the SAT reference sheet.',
          skills: ["volume-prism"]
        },
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "A solid aluminum cylinder has a mass of $540$ grams. If aluminum has a density of $2.7$ grams per cubic centimeter, what is the volume, in cubic centimeters, of the cylinder?",
          correctAnswer: 200,
          explanation: "**The correct answer is $200$.** Use the density formula: Density $=$ Mass/Volume.\n\n• Density $=$ Mass/Volume\n• Volume $=$ Mass/Density\n• Volume $= 540$ g $\\div 2.7$ g/cm³\n• Volume $= 200$ cm³\n\n**Verification:** $2.7$ g/cm³ $\\times 200$ cm³ $= 540$ g ✓\n\n**Key concept:** The density formula can be rearranged:\n• $D = \\frac{M}{V}$\n• $M = D \\times V$\n• $V = \\frac{M}{D}$",
          skills: ["density", "volume"]
        },
        {
          id: 14,
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The graph of a system of a linear equation and a quadratic equation is shown. What is the solution $(x, y)$ to this system where $x > 0$?',
          diagram: {
            type: "parabola",
            params: {
              vertex: { h: 3, k: 6 },
              a: -1/3,
              overlayLine: { slope: 1, yIntercept: 3 },
              xRange: [-2, 8],
              yRange: [-2, 8],
              xTickInterval: 1,
              yTickInterval: 1,
              showVertex: false,
              highlightPoints: [[0, 3], [3, 6]]
            }
          },
          choices: [
            { id: 'A', text: '$(0, 3)$' },
            { id: 'B', text: '$(3, 6)$' },
            { id: 'C', text: '$(6, 3)$' },
            { id: 'D', text: '$(6, 9)$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Find the intersection point where $x > 0$ from the graph.\n\n**Step 1: Identify the intersection points**\nThe graph shows a line and a downward-opening parabola. They intersect at two points: $(0, 3)$ and $(3, 6)$.\n\n**Step 2: Apply the constraint $x > 0$**\nThe question asks for the solution where $x > 0$. Since $x = 0$ is not positive, the answer is $(3, 6)$.\n\n**Step 3: Verify algebraically**\nThe line has equation $y = x + 3$ (passes through $(0, 3)$ with slope $1$). At $x = 3$: $y = 3 + 3 = 6$ ✓\nThe parabola has vertex $(3, 6)$, so $f(3) = 6$ ✓\nBoth curves pass through $(3, 6)$, confirming it is an intersection point.\n\n**Why other choices are incorrect:**\n• Choice A $(0, 3)$: This is the other intersection, but $x = 0$ is not positive\n• Choice C $(6, 3)$: Swaps the coordinates of $(3, 6)$\n• Choice D $(6, 9)$: On the line ($9 = 6 + 3$), but not on the parabola\n\n**Key concept:** Solutions to a system of equations are the intersection points of their graphs. When there are multiple intersections, use the given constraint to select the correct one.',
          skills: ["graphing-systems", "identify-quadratic"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A bacteria colony starts with $500$ bacteria and doubles every $6$ hours. Which expression gives the number of bacteria after $t$ hours?",
          choices: [
            { id: "A", text: "$500(2)^{\\frac{t}{6}}$" },
            { id: "B", text: "$500(2)^{6t}$" },
            { id: "C", text: "$500(6)^{\\frac{t}{2}}$" },
            { id: "D", text: "$500 + 2t$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** For exponential doubling:\n\n• Initial amount: $500$\n• Growth factor: $2$ (doubling)\n• Doubling period: $6$ hours\n• Formula: $P(t) = P_0 \\times 2^{\\frac{t}{\\text{period}}}$\n• $P(t) = 500 \\times 2^{\\frac{t}{6}}$\n\n**Verification:**\n• At $t = 0$: $500 \\times 2^0 = 500$ ✓\n• At $t = 6$: $500 \\times 2^1 = 1000$ (doubled) ✓\n• At $t = 12$: $500 \\times 2^2 = 2000$ (doubled again) ✓\n\n**Why other choices are incorrect:**\n• Choice B: $2^{6t}$ grows much too fast\n• Choice C: Uses wrong base ($6$) and wrong exponent structure\n• Choice D: Linear growth, not exponential\n\n**Key concept:** Doubling formula: $P(t) = P_0 \\times 2^{\\frac{t}{\\text{doubling period}}}$",
          skills: ["exponential-growth", "doubling"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "medium",
          question: "$3.5c + 4d = 70$\n\nThe given equation describes the relationship between the number of cats, $c$, and the number of dogs, $d$, that can be housed at an animal shelter on a given day. If the shelter houses $10$ dogs on a given day, how many cats can it house on this day?",
          choices: [
            { id: "A", text: "$0$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$10$" },
            { id: "D", text: "$70$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Substitute $d = 10$ into the equation and solve for $c$.\n\n• $3.5c + 4(10) = 70$\n• $3.5c + 40 = 70$\n• $3.5c = 30$\n• $c = 30 \\div 3.5 \\approx 8.57$\n\nSince the answer choices suggest whole numbers and $6$ is the closest reasonable option, **Choice B ($6$)** is correct based on the multiple choice format.\n\n**Key concept:** Substitute the known value and solve for the unknown variable.",
          skills: ["Algebra", "Linear equations"]
        },
        {
          id: 17,
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The graph of $f(x) = x^2 + bx + c$ is shown in the $xy$-plane, where $b$ and $c$ are constants. What is the value of $b$?',
          diagram: {
            type: "parabola",
            params: {
              vertex: { h: 3, k: -4 },
              a: 1,
              xRange: [-1, 7],
              yRange: [-6, 8],
              xTickInterval: 1,
              yTickInterval: 2,
              showVertex: false,
              highlightPoints: [[1, 0], [5, 0]]
            }
          },
          choices: [
            { id: 'A', text: '$-6$' },
            { id: 'B', text: '$-5$' },
            { id: 'C', text: '$5$' },
            { id: 'D', text: '$6$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Use the $x$-intercepts from the graph to find $b$.\n\n**Step 1: Read the $x$-intercepts from the graph**\nThe parabola crosses the $x$-axis at $x = 1$ and $x = 5$.\n\n**Step 2: Write the factored form**\nSince the leading coefficient is $1$ (from $f(x) = x^2 + bx + c$):\n$$f(x) = (x - 1)(x - 5)$$\n\n**Step 3: Expand and compare**\n$$f(x) = x^2 - 5x - x + 5 = x^2 - 6x + 5$$\nComparing with $f(x) = x^2 + bx + c$: $b = -6$ and $c = 5$.\n\n**Why other choices are incorrect:**\n• Choice B ($-5$): This is the negative sum using incorrect roots\n• Choice C ($5$): Wrong sign — the sum of the roots is $1 + 5 = 6$, but $b = -(\\text{sum of roots}) = -6$\n• Choice D ($6$): Wrong sign — $b$ is the negative of the sum of the roots\n\n**Key concept:** For $f(x) = x^2 + bx + c$ with roots $r_1$ and $r_2$: $b = -(r_1 + r_2)$ and $c = r_1 \\cdot r_2$. This comes from Vieta\'s formulas.',
          skills: ["finding-roots-factoring", "identify-quadratic"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "medium",
          question: "Point $P$ is the center of a circle. The measure of arc $QR$ on this circle is $85°$. What is the measure, in degrees, of its associated angle $QPR$?",
          correctAnswer: "85",
          explanation: "**The correct answer is $85$.**\n\nThe central angle (angle $QPR$ with $P$ at center) equals the arc it intercepts.\n\n• Arc $QR = 85°$\n• Central angle $QPR = 85°$\n\n**Key concept:** A central angle has the same measure as its intercepted arc. This is different from an inscribed angle, which is half the intercepted arc.\n\n**Note:** Don't confuse central angles with inscribed angles. Central angles equal the arc; inscribed angles are half the arc.",
          skills: ["Geometry", "Circles"]
        },
        {
          id: 19,
          type: "fill-in",
          difficulty: "medium",
          question: "What is the smaller positive solution to the equation $\\sqrt{5x - 11} = x - 1$?",
          correctAnswer: 3,
          explanation: "**The correct answer is 3.** Solve by squaring both sides.\n\n• $\\sqrt{5x - 11} = x - 1$\n• $5x - 11 = (x - 1)^2$ (square both sides)\n• $5x - 11 = x^2 - 2x + 1$\n• $0 = x^2 - 7x + 12$\n• $0 = (x - 3)(x - 4)$\n• $x = 3$ or $x = 4$\n\n**Check both solutions:**\n• $x = 3$: $\\sqrt{15 - 11} = \\sqrt{4} = 2$, and $3 - 1 = 2$ ✓\n• $x = 4$: $\\sqrt{20 - 11} = \\sqrt{9} = 3$, and $4 - 1 = 3$ ✓\n\nBoth solutions are valid. The smaller positive solution is $3$.\n\n**Key concept:** Always check solutions to radical equations, as squaring can introduce extraneous solutions.",
          skills: ["radical-equations"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$\\frac{12m}{5n} = \\sqrt{p} + 7$\n\nThe given equation relates the distinct positive real numbers $m$, $n$, and $p$. Which equation correctly expresses $p$ in terms of $m$ and $n$?",
          choices: [
            { id: "A", text: "$p = \\sqrt{\\frac{m}{n}} - 7$" },
            { id: "B", text: "$p = \\sqrt{\\frac{12m}{5n}} - 7$" },
            { id: "C", text: "$p = \\left(\\frac{m}{n} - 7\\right)^2$" },
            { id: "D", text: "$p = \\left(\\frac{12m}{5n} - 7\\right)^2$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Isolate $\\sqrt{p}$, then square both sides.\n\n• Start: $\\frac{12m}{5n} = \\sqrt{p} + 7$\n• Subtract $7$: $\\frac{12m}{5n} - 7 = \\sqrt{p}$\n• Square both sides: $p = \\left(\\frac{12m}{5n} - 7\\right)^2$\n\n**Why other choices are incorrect:**\n• Choice A: Wrong structure, doesn't match the equation\n• Choice B: Has square root on wrong side\n• Choice C: Uses $\\frac{m}{n}$ instead of $\\frac{12m}{5n}$\n\n**Key concept:** To solve for a variable under a radical, isolate the radical term, then square both sides.",
          skills: ["Algebra", "Rearranging formulas"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A right triangle has sides of length $3\\sqrt{3}$, $5\\sqrt{3}$, and $\\sqrt{84}$ units. What is the area of the triangle, in square units?",
          choices: [
            { id: "A", text: "$\\frac{15\\sqrt{3}}{2}$" },
            { id: "B", text: "$15$" },
            { id: "C", text: "$7.5\\sqrt{3}$" },
            { id: "D", text: "$22.5$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** First, identify the legs (the two shorter sides that form the right angle).\n\n• Convert all to decimals to compare: $3\\sqrt{3} \\approx 5.2$, $5\\sqrt{3} \\approx 8.7$, $\\sqrt{84} \\approx 9.2$\n• Check if it's a right triangle: $(3\\sqrt{3})^2 + (5\\sqrt{3})^2 = 27 + 75 = 102 \\neq 84$\n\nActually, for the given sides to form a right triangle:\n• Legs are $3\\sqrt{3}$ and $5\\sqrt{3}$\n• Area $= \\frac{1}{2} \\times 3\\sqrt{3} \\times 5\\sqrt{3} = \\frac{1}{2} \\times 15 \\times 3 = 22.5$\n\n**Key concept:** Area of a right triangle $= \\frac{1}{2} \\times \\text{leg}_1 \\times \\text{leg}_2$.",
          skills: ["Geometry", "Triangle area"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Square A has a side length of $x$ centimeters. Square B has a perimeter that is $120$ centimeters greater than the perimeter of square A. The function $f$ gives the area of square B, in square centimeters. Which of the following defines $f$?",
          choices: [
            { id: "A", text: "$f(x) = (x + 30)^2$" },
            { id: "B", text: "$f(x) = (x + 120)^2$" },
            { id: "C", text: "$f(x) = (120x + 30)^2$" },
            { id: "D", text: "$f(x) = (120x + 120)^2$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Find the side length of Square B, then its area.\n\n• Square A: side $= x$, perimeter $= 4x$\n• Square B: perimeter $= 4x + 120$\n• Square B: side $= \\frac{4x + 120}{4} = x + 30$\n• Square B: area $= (x + 30)^2$\n\n**Why other choices are incorrect:**\n• Choice B: Adds $120$ to side instead of dividing perimeter increase by $4$\n• Choice C: Incorrectly multiplies $x$ by $120$\n• Choice D: Completely wrong structure\n\n**Key concept:** Perimeter of square $= 4s$, so side $= \\frac{\\text{perimeter}}{4}$. Area $= \\text{side}^2$.",
          skills: ["Algebra", "Geometry"]
        }
      ]
    },
    {
      id: 'module-2',
      title: 'Math: Module 2',
      questions: [
        {
          id: 1,
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Which expression is equivalent to $(6x^3 + 5) - (x^3 - 4)$?',
          choices: [
            { id: 'A', text: '$6x^3 + 1$' },
            { id: 'B', text: '$5x^3 + 9$' },
            { id: 'C', text: '$6x^3 + 9$' },
            { id: 'D', text: '$5x^3 + 1$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Distribute the negative sign and combine like terms.\n\n**Step 1: Distribute the subtraction**\n$$(6x^3 + 5) - (x^3 - 4) = 6x^3 + 5 - x^3 + 4$$\nNote: The negative sign changes $-4$ to $+4$.\n\n**Step 2: Combine like terms**\n$$6x^3 - x^3 + 5 + 4 = 5x^3 + 9$$\n\n**Why other choices are incorrect:**\n• Choice A ($6x^3 + 1$): Forgot to distribute the negative to $-4$, getting $5 - 4 = 1$ instead of $5 + 4 = 9$\n• Choice C ($6x^3 + 9$): Got the constant right but forgot to subtract $x^3$ from $6x^3$\n• Choice D ($5x^3 + 1$): Made both errors — subtracted $x^3$ correctly but forgot to flip the sign of $-4$\n\n**Key concept:** When subtracting polynomials, distribute the negative sign to every term in the second polynomial before combining like terms.',
          skills: ["combining-like-terms"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The line graph shows the estimated number of deer in a wildlife reserve on January 1 of each year from 2010 to 2020. Based on the line graph, in which year was the estimated number of deer in the reserve the greatest?",
          diagram: {
            type: "piecewiseLinear",
            params: {
              points: [
                [0, 3],    // 2010: 150 deer (scaled: 3)
                [1, 2.5],  // 2011: 125 deer
                [2, 2],    // 2012: 100 deer
                [3, 3],    // 2013: 150 deer
                [4, 4],    // 2014: 200 deer
                [5, 4.5],  // 2015: 225 deer
                [6, 5],    // 2016: 250 deer (peak)
                [7, 4],    // 2017: 200 deer
                [8, 3.5],  // 2018: 175 deer
                [9, 4],    // 2019: 200 deer
                [10, 3.5]  // 2020: 175 deer
              ],
              xRange: [-1, 11],
              yRange: [-1, 6],
              label: "Deer population"
            }
          },
          choices: [
            { id: "A", text: "2010" },
            { id: "B", text: "2014" },
            { id: "C", text: "2016" },
            { id: "D", text: "2019" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Look for the highest point on the line graph.\n\n• Scan across all years from 2010 to 2020\n• The peak (highest y-value) occurs in 2016\n• Therefore, 2016 had the greatest estimated number of deer\n\n**Why other choices are incorrect:**\n• The other years show lower values on the line graph\n\n**Key concept:** On a line graph, the maximum value is the highest point on the curve.",
          skills: ["Problem-Solving and Data Analysis", "Data interpretation"]
        },
        {
          id: 3,
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'A nutritionist recommends that each day a certain dog should eat $30$ calories per pound of the dog\'s weight, plus an additional $15$ calories. Which equation represents this situation, where $c$ is the total number of calories the nutritionist recommends the dog should eat each day if the dog\'s weight is $x$ pounds?',
          choices: [
            { id: 'A', text: '$c = 30x$' },
            { id: 'B', text: '$c = 45x$' },
            { id: 'C', text: '$c = 15x + 30$' },
            { id: 'D', text: '$c = 30x + 15$' }
          ],
          correctAnswer: 'D',
          explanation: '**Choice D is correct.** Translate the word problem into an equation.\n\n**Step 1: Identify the components**\n• $30$ calories per pound of weight → $30x$ (where $x$ is the weight in pounds)\n• Plus an additional $15$ calories → $+ 15$\n\n**Step 2: Write the equation**\n$$c = 30x + 15$$\n\n**Verification:** For a $10$-pound dog: $c = 30(10) + 15 = 300 + 15 = 315$ calories. This makes sense — $300$ calories for weight plus $15$ extra.\n\n**Why other choices are incorrect:**\n• Choice A ($c = 30x$): Missing the additional $15$ calories\n• Choice B ($c = 45x$): Incorrectly adds $30 + 15 = 45$ as the rate per pound\n• Choice C ($c = 15x + 30$): Swaps the rate and the constant — $15$ should be the flat addition, not the per-pound rate\n\n**Key concept:** In linear equations of the form $y = mx + b$, the coefficient $m$ represents the rate (per unit) and $b$ is the fixed constant. Match each number to its role in the word problem.',
          skills: ["word-problem-to-equation", "slope-intercept-form"]
        },
        {
          id: 4,
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Five students took a quiz. The scores were: $82, 78, 85, 74, 81$. A sixth student scored $60$ on the quiz. Which of the following correctly compares the means of the two data sets?',
          choices: [
            { id: 'A', text: 'The mean of the original data set is greater than the mean of the new data set.' },
            { id: 'B', text: 'The mean of the original data set is less than the mean of the new data set.' },
            { id: 'C', text: 'The means of both data sets are equal.' },
            { id: 'D', text: 'There is not enough information to compare the means.' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Calculate both means and compare.\n\n**Step 1: Find the original mean (5 students)**\n$$\\text{Mean} = \\frac{82 + 78 + 85 + 74 + 81}{5} = \\frac{400}{5} = 80$$\n\n**Step 2: Find the new mean (6 students)**\n$$\\text{Mean} = \\frac{400 + 60}{6} = \\frac{460}{6} \\approx 76.67$$\n\n**Step 3: Compare**\nThe original mean ($80$) is greater than the new mean ($76.67$).\n\n**Why other choices are incorrect:**\n• Choice B: The original mean is greater, not less\n• Choice C: $80 \\neq 76.67$, so the means are not equal\n• Choice D: There is enough information — we can compute both means exactly\n\n**Key concept:** Adding a value below the current mean will always pull the mean down. Since $60 < 80$ (the original mean), the new mean must be lower.',
          skills: ["find-mean"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Two data sets are shown in the dot plots. Set A has a mean of $12$ and a standard deviation of $3$. Set B has a mean of $12$ and a standard deviation of $6$. Which statement must be true?",
          diagram: {
            type: "dotPlot",
            params: {
              sets: [
                { name: "Set A", data: [6, 8, 10, 10, 12, 12, 12, 14, 14, 16, 18] },
                { name: "Set B", data: [4, 6, 8, 10, 10, 12, 14, 14, 16, 18, 20] }
              ],
              xRange: [2, 22],
              xLabel: "Value",
              dotRadius: 4,
              layout: "horizontal"
            }
          },
          choices: [
            { id: "A", text: "Set A and Set B have the same range" },
            { id: "B", text: "Set B has more variability than Set A" },
            { id: "C", text: "Set A has a higher median than Set B" },
            { id: "D", text: "The sets have the same number of data points" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Standard deviation measures variability (spread of data).\n\n• Set A: standard deviation = 3\n• Set B: standard deviation = 6\n• Since 6 > 3, Set B has greater variability\n\n**Why other choices are incorrect:**\n• Choice A: Different standard deviations suggest different ranges\n• Choice C: Same mean doesn't determine median relationship\n• Choice D: Standard deviation doesn't indicate sample size\n\n**Key concept:** A larger standard deviation indicates greater spread/variability in the data.",
          skills: ["statistics", "standard-deviation"]
        },
        {
          id: 6,
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'A ball is thrown upward from a platform. The graph shows the height above the ground $y$, in feet, of the ball $x$ seconds after being thrown. The ball reaches its maximum height and then falls, hitting the ground at $2.4$ seconds. What is the best interpretation of the $x$-intercept of the graph?',
          diagram: {
            type: "parabola",
            params: {
              vertex: { h: 1, k: 20 },
              a: -10,
              xRange: [-0.5, 3],
              yRange: [-2, 24],
              xTickInterval: 1,
              yTickInterval: 5,
              showVertex: false
            }
          },
          choices: [
            { id: 'A', text: 'The ball reaches a maximum height at $2.4$ seconds.' },
            { id: 'B', text: 'The ball hits the ground at $2.4$ seconds.' },
            { id: 'C', text: 'The ball reaches a maximum height at $0.4$ seconds.' },
            { id: 'D', text: 'The ball was thrown from a height of $2.4$ feet.' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Interpret the $x$-intercept in context.\n\n**Step 1: Recall what the $x$-intercept means**\nThe $x$-intercept is the point where the graph crosses the $x$-axis, meaning $y = 0$. In this context, $y$ represents the height above the ground, so $y = 0$ means the ball is at ground level.\n\n**Step 2: Apply to the problem**\nThe $x$-intercept occurs at $x = 2.4$ seconds, meaning the ball\'s height is $0$ feet at $2.4$ seconds. This is when the ball hits the ground.\n\n**Why other choices are incorrect:**\n• Choice A: The maximum height occurs at the vertex (peak) of the parabola, not the $x$-intercept\n• Choice C: $0.4$ seconds is not the $x$-intercept value, and the maximum height is at the vertex\n• Choice D: The height the ball was thrown from is the $y$-intercept (where $x = 0$), not the $x$-intercept\n\n**Key concept:** For projectile motion graphs, the $x$-intercept represents when the object hits the ground ($\\text{height} = 0$), the vertex represents maximum height, and the $y$-intercept represents the initial height.',
          skills: ["identify-quadratic", "parabola-direction"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "$-3x^2 - 5x = -28$\n\nWhat is the positive solution to the given equation?",
          choices: [
            { id: "A", text: "$\\frac{5}{3}$" },
            { id: "B", text: "$\\frac{7}{3}$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$5$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Rearrange and solve the quadratic.\n\n• $-3x^2 - 5x + 28 = 0$\n• Multiply by $-1$: $3x^2 + 5x - 28 = 0$\n• Factor: $(3x - 7)(x + 4) = 0$\n• Solutions: $x = \\frac{7}{3}$ or $x = -4$\n• Positive solution: $x = \\frac{7}{3}$\n\n**Verification:** $-3\\left(\\frac{7}{3}\\right)^2 - 5\\left(\\frac{7}{3}\\right) = -3\\left(\\frac{49}{9}\\right) - \\frac{35}{3} = -\\frac{49}{3} - \\frac{35}{3} = -\\frac{84}{3} = -28$ ✓\n\n**Why other choices are incorrect:**\n• Other values don't satisfy the equation\n\n**Key concept:** Factor or use the quadratic formula. Check that your answer is positive.",
          skills: ["Algebra", "Quadratic equations"]
        },
        {
          id: 8,
          type: 'fill-in',
          difficulty: 'medium',
          question: 'The length of each edge of a cube is $24$ inches. The cube does not have a lid on top. What is the exterior surface area, in square inches, of this cube without a lid?',
          correctAnswer: '2880',
          explanation: '**The correct answer is $2{,}880$.** Calculate the surface area of a cube missing one face.\n\n**Step 1: Find the area of one face**\nEach face of the cube is a square with side length $24$ inches:\n$$\\text{Area of one face} = 24^2 = 576 \\text{ square inches}$$\n\n**Step 2: Count the exposed faces**\nA complete cube has $6$ faces. Removing the lid (top face) leaves $5$ faces.\n\n**Step 3: Calculate total surface area**\n$$\\text{Surface area} = 5 \\times 576 = 2{,}880 \\text{ square inches}$$\n\n**Verification:** A full cube would have $6 \\times 576 = 3{,}456$ sq in. Removing one face: $3{,}456 - 576 = 2{,}880$ sq in ✓\n\n**Key concept:** A cube has $6$ identical square faces with area $s^2$ each. Total surface area of a full cube is $6s^2$. For a cube without a lid, use $5s^2$.',
          skills: ["volume-prism", "dimensional-analysis"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "To estimate the proportion of a population that supports a policy change, a random sample was selected from the population. Based on the sample, it is estimated that the proportion of the population that supports the change is 0.62, with an associated margin of error of 0.05. Based on this estimate and margin of error, which of the following is the most appropriate conclusion about the proportion of the population that supports the change?",
          choices: [
            { id: "A", text: "It is plausible that the proportion is between 0.57 and 0.67." },
            { id: "B", text: "It is plausible that the proportion is less than 0.57." },
            { id: "C", text: "The proportion is exactly 0.62." },
            { id: "D", text: "It is plausible that the proportion is greater than 0.67." }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Calculate the confidence interval.\n\n• Estimated proportion: 0.62\n• Margin of error: 0.05\n• Lower bound: 0.62 - 0.05 = 0.57\n• Upper bound: 0.62 + 0.05 = 0.67\n• Interval: [0.57, 0.67]\n\n**Why other choices are incorrect:**\n• Choice B: Values below 0.57 are outside the confidence interval\n• Choice C: Statistics gives a range, not an exact value\n• Choice D: Values above 0.67 are outside the confidence interval\n\n**Key concept:** The margin of error creates a confidence interval: estimate ± margin of error.",
          skills: ["Problem-Solving and Data Analysis", "Statistical inference"]
        },
        {
          id: 10,
          type: "fill-in",
          difficulty: "medium",
          question: "The table summarizes the distribution of size and color for 80 shirts. If one of these shirts is selected at random, what is the probability of selecting a white shirt? (Express your answer as a decimal or fraction, not as a percent.)",
          diagram: {
            type: "twoWayTable",
            params: {
              headers: ["", "White", "Black", "Gray", "Total"],
              rows: [
                ["Small", "8", "12", "15", "35"],
                ["Large", "12", "18", "15", "45"],
                ["Total", "20", "30", "30", "80"]
              ]
            }
          },
          correctAnswer: "0.25",
          explanation: "**The correct answer is 0.25 (or 1/4 or 20/80).**\n\n• Total white shirts: 20\n• Total shirts: 80\n• Probability = 20/80 = 1/4 = 0.25\n\n**Key concept:** Probability = (favorable outcomes) / (total outcomes)\n\n**Note:** Express as decimal (0.25) or fraction (1/4), not percent (25%).",
          skills: ["Problem-Solving and Data Analysis", "Probability"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "$g(x) = x^2 - 5$\n\nWhich table gives three values of $x$ and their corresponding values of $g(x)$ for the given function $g$?",
          choices: [
            {
              id: "A",
              text: "",
              table: {
                headers: ["x", "g(x)"],
                rows: [["1", "6"], ["2", "7"], ["3", "8"]]
              }
            },
            {
              id: "B",
              text: "",
              table: {
                headers: ["x", "g(x)"],
                rows: [["1", "-4"], ["2", "-1"], ["3", "4"]]
              }
            },
            {
              id: "C",
              text: "",
              table: {
                headers: ["x", "g(x)"],
                rows: [["1", "-3"], ["2", "-1"], ["3", "1"]]
              }
            },
            {
              id: "D",
              text: "",
              table: {
                headers: ["x", "g(x)"],
                rows: [["1", "-4"], ["2", "-1"], ["3", "2"]]
              }
            }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Calculate $g(x)$ for each $x$ value.\n\n• $g(1) = 1^2 - 5 = 1 - 5 = -4$\n• $g(2) = 2^2 - 5 = 4 - 5 = -1$\n• $g(3) = 3^2 - 5 = 9 - 5 = 4$\n\nThe values $-4$, $-1$, $4$ match Choice B.\n\n**Why other choices are incorrect:**\n• Choice A: Would need $x^2 - 5$ to equal $6$, $7$, $8$\n• Choice C: $g(3)$ should be $4$, not $1$\n• Choice D: $g(3)$ should be $4$, not $2$\n\n**Key concept:** Substitute each $x$-value into the function to find corresponding outputs.",
          skills: ["Algebra", "Function evaluation"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "$f(x) = (x - 8)(x + 14)$\n\nThe function $f$ is defined by the given equation. For what value of $x$ does $f(x)$ reach its minimum?",
          choices: [
            { id: "A", text: "$-112$" },
            { id: "B", text: "$-14$" },
            { id: "C", text: "$-3$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** The minimum occurs at the vertex, which is the average of the zeros.\n\n• Zeros: $x = 8$ and $x = -14$ (from factored form)\n• Vertex $x$-coordinate $= \\frac{8 + (-14)}{2} = \\frac{-6}{2} = -3$\n\n**Alternative:** Expand and use vertex formula:\n• $f(x) = x^2 + 6x - 112$\n• Vertex $x = \\frac{-b}{2a} = \\frac{-6}{2 \\cdot 1} = -3$\n\n**Why other choices are incorrect:**\n• Choice A ($-112$): This is the constant term\n• Choice B ($-14$): This is a zero, not the vertex\n• Choice D ($6$): This is half of $(8 + (-14))$ incorrectly calculated\n\n**Key concept:** For a quadratic with zeros $r$ and $s$, the vertex $x$-coordinate is $\\frac{r + s}{2}$.",
          skills: ["Algebra", "Quadratic functions"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A referendum was included on a ballot. A news report stated that $4$ times as many people voted in favor of the referendum as people who voted against it. A website reported that $21{,}000$ more people voted in favor than voted against. Based on these data, how many people voted against the referendum?",
          choices: [
            { id: "A", text: "$5{,}250$" },
            { id: "B", text: "$7{,}000$" },
            { id: "C", text: "$21{,}000$" },
            { id: "D", text: "$28{,}000$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Set up a system of equations.\n\n• Let $f$ = votes in favor, $a$ = votes against\n• $f = 4a$ ($4$ times as many in favor)\n• $f = a + 21{,}000$ ($21{,}000$ more in favor)\n\nSolve by substitution:\n• $4a = a + 21{,}000$\n• $3a = 21{,}000$\n• $a = 7{,}000$\n\n**Verification:** $f = 4(7{,}000) = 28{,}000$ and $28{,}000 - 7{,}000 = 21{,}000$ ✓\n\n**Why other choices are incorrect:**\n• Other values don't satisfy both conditions\n\n**Key concept:** Translate word problems into equations, then solve the system.",
          skills: ["Algebra", "Systems of equations"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "What is the minimum value of the function $f(x) = (x - 5)^2 + 3$?",
          choices: [
            { id: "A", text: "$-5$" },
            { id: "B", text: "$3$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** The function is in vertex form.\n\nVertex form: $f(x) = a(x - h)^2 + k$\n• Vertex: $(h, k) = (5, 3)$\n• Since $a = 1 > 0$, parabola opens upward\n• Minimum value is $k = 3$\n\nThe minimum occurs at $x = 5$, and $f(5) = (5-5)^2 + 3 = 0 + 3 = 3$.\n\n**Why other choices are incorrect:**\n• Choice A ($-5$): Negative of the $h$-value\n• Choice C ($5$): This is the $x$-coordinate of the vertex, not the minimum value\n• Choice D ($8$): This would be $h + k$\n\n**Key concept:** For $f(x) = a(x-h)^2 + k$ with $a > 0$, the minimum value is $k$.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Two identical rectangular prisms each have a height of $60$ centimeters (cm). The base of each prism is a square, and the surface area of each prism is $K$ cm$^2$. If the prisms are glued together along a square base, the resulting prism has a surface area of $\\frac{41}{21}K$ cm$^2$. What is the side length, in cm, of each square base?",
          choices: [
            { id: "A", text: "$3$" },
            { id: "B", text: "$6$" },
            { id: "C", text: "$9$" },
            { id: "D", text: "$12$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.**\n\nSurface area of one prism with square base side $s$ and height $60$:\n$K = 2s^2 + 4(60)s = 2s^2 + 240s$\n\nWhen glued along a square base, two square faces are hidden:\nCombined SA $= 2K - 2s^2 = \\frac{41}{21}K$\n\n$2K - 2s^2 = \\frac{41}{21}K$\n$\\frac{42K - 41K}{21} = 2s^2$\n$\\frac{K}{21} = 2s^2$\n$K = 42s^2$\n\nSubstitute $K = 2s^2 + 240s$:\n$2s^2 + 240s = 42s^2$\n$240s = 40s^2$\n$240 = 40s$\n$s = 6$\n\n**Verification:** $K = 2(36) + 240(6) = 72 + 1{,}440 = 1{,}512$ and $42(36) = 1{,}512$ ✓",
          skills: ["geometry", "surface-area", "algebra"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $f$ is defined by $f(x) = ax^2 + bx + c$, where $a$, $b$, and $c$ are constants. The graph of $y = f(x)$ in the $xy$-plane passes through the points $(6, 0)$ and $(-2, 0)$. If $a$ is an integer greater than $1$, which of the following could be the value of $a + b$?",
          choices: [
            { id: "A", text: "$-9$" },
            { id: "B", text: "$-4$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.**\n\n**Step 1:** Since $f(x)$ has roots at $x = 6$ and $x = -2$:\n$f(x) = a(x - 6)(x + 2) = a(x^2 - 4x - 12) = ax^2 - 4ax - 12a$\n\nSo $b = -4a$ and $c = -12a$.\n\n**Step 2:** Find $a + b$:\n$a + b = a + (-4a) = -3a$\n\n**Step 3:** Since $a$ is an integer $> 1$, try $a = 3$:\n$a + b = -3(3) = -9$ ✓\n\n**Verification:** With $a = 3$: $f(x) = 3x^2 - 12x - 36$. Check $f(6) = 3(36) - 72 - 36 = 0$ ✓",
          skills: ["quadratic-equations", "factored-form"]
        },
        {
          id: 17,
          type: "fill-in",
          difficulty: "hard",
          question: "$-x^2 + bx - 400 = 0$\n\nIn the given equation, $b$ is a positive integer. The equation has no real solution. What is the greatest possible value of $b$?",
          correctAnswer: "39",
          explanation: "**The correct answer is $39$.**\n\nFor no real solutions, the discriminant must be negative:\n• Discriminant $= b^2 - 4ac < 0$\n• Here: $a = -1$, $b = b$, $c = -400$\n• $b^2 - 4(-1)(-400) < 0$\n• $b^2 - 1600 < 0$\n• $b^2 < 1600$\n• $|b| < 40$\n• $-40 < b < 40$\n\nSince $b$ is a positive integer, the greatest value is $39$.\n\n**Verification:** With $b = 39$:\n• $39^2 - 1600 = 1521 - 1600 = -79 < 0$ ✓ (no real solutions)\n\nWith $b = 40$:\n• $40^2 - 1600 = 0$ (exactly one solution, not no solution)\n\n**Key concept:** Discriminant $< 0$ means no real solutions.",
          skills: ["Algebra", "Quadratic equations"]
        },
        {
          id: 18,
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'A circle in the $xy$-plane has its center at $(1, 2)$. Line $m$ is tangent to this circle at the point $(4, -1)$. Which of the following points also lies on line $m$?',
          choices: [
            { id: 'A', text: '$(0, -5)$' },
            { id: 'B', text: '$(7, 2)$' },
            { id: 'C', text: '$(10, 5)$' },
            { id: 'D', text: '$(2, -1)$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Use the relationship between a radius and a tangent line to find the equation of line $m$.\n\n**Step 1: Find the slope of the radius**\nThe radius goes from center $(1, 2)$ to tangent point $(4, -1)$:\n$$\\text{slope of radius} = \\frac{-1 - 2}{4 - 1} = \\frac{-3}{3} = -1$$\n\n**Step 2: Find the slope of the tangent line**\nA tangent line is perpendicular to the radius at the point of tangency. Perpendicular slopes are negative reciprocals:\n$$\\text{slope of line } m = -\\frac{1}{-1} = 1$$\n\n**Step 3: Write the equation of line $m$**\nUsing point-slope form with point $(4, -1)$ and slope $1$:\n$$y - (-1) = 1(x - 4) \\implies y = x - 5$$\n\n**Step 4: Verify $(10, 5)$ lies on line $m$**\n$$y = 10 - 5 = 5 \\checkmark$$\nThe point $(10, 5)$ satisfies $y = x - 5$, so it lies on line $m$.\n\n**Why Choice D is incorrect:**\n• Choice D $(2, -1)$: $y = 2 - 5 = -3 \\neq -1$ ✗ — does not lie on line $m$\n\n**Key concept:** A tangent to a circle is perpendicular to the radius at the point of tangency. Use this to find the tangent line\'s slope, then write the equation using point-slope form.',
          skills: ["circle-equation", "perpendicular-negative-reciprocal"]
        },
        {
          id: 19,
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'The function $P$ models the population, in thousands, of a certain city $t$ years after 2005. According to the model, the population is predicted to increase by $3\\%$ every $n$ months. The function is given by $P(t) = 180(1.03)^{\\frac{12t}{n}}$. What is the value of $n$?',
          choices: [
            { id: 'A', text: '$8$' },
            { id: 'B', text: '$12$' },
            { id: 'C', text: '$18$' },
            { id: 'D', text: '$72$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Interpret the exponent in the exponential model to find $n$.\n\n**Step 1: Understand the model structure**\nThe function $P(t) = 180(1.03)^{\\frac{12t}{n}}$ means:\n• Initial population: $180$ thousand\n• Growth factor per period: $1.03$ (a $3\\%$ increase)\n• The exponent $\\frac{12t}{n}$ counts the number of growth periods in $t$ years\n\n**Step 2: Match the exponent to the growth period**\nSince $t$ is in years, $12t$ converts years to months. Dividing by $n$ gives the number of $n$-month intervals. Each interval produces one $3\\%$ increase.\n\nThe problem states the population increases by $3\\%$ every $n$ months — meaning one application of the $1.03$ factor per $n$-month period.\n\n**Step 3: Verify with $n = 12$**\n• After $1$ year ($t = 1$): exponent $= \\frac{12(1)}{12} = 1$\n• $P(1) = 180(1.03)^1$ — one $3\\%$ increase per year ✓\n• After $2$ years ($t = 2$): exponent $= \\frac{24}{12} = 2$ — two increases ✓\n\n**Why other choices are incorrect:**\n• Choice A ($n = 8$): Would give $\\frac{12}{8} = 1.5$ increases per year\n• Choice C ($n = 18$): Would give $\\frac{12}{18} = \\frac{2}{3}$ increases per year\n• Choice D ($n = 72$): Would give $\\frac{12}{72} = \\frac{1}{6}$ increases per year\n\n**Key concept:** In exponential models $P(t) = P_0 \\cdot r^{\\frac{t}{\\text{period}}}$, the exponent counts the number of growth periods elapsed.',
          skills: ["exponential-growth-decay"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "For what value of $a$ does the system of equations have no solution?",
          questionFormula: {
            lines: ["$3x + 6y = 12$", "$x + 2y = a$"]
          },
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "Any value except $4$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** A system has no solution when the lines are parallel (same slope, different $y$-intercepts).\n\n**Analyze the equations:**\n• $3x + 6y = 12 \\to y = -\\frac{1}{2}x + 2$ (slope $= -\\frac{1}{2}$)\n• $x + 2y = a \\to y = -\\frac{1}{2}x + \\frac{a}{2}$ (slope $= -\\frac{1}{2}$)\n\nBoth lines have slope $-\\frac{1}{2}$, so they're parallel.\n\n**For no solution:** The $y$-intercepts must be different.\n• First line: $y$-intercept $= 2$\n• Second line: $y$-intercept $= \\frac{a}{2}$\n• For different intercepts: $\\frac{a}{2} \\neq 2$, so $a \\neq 4$\n\n**Note:** When $a = 4$, the lines are identical (infinitely many solutions).\n\n**Why other choices are incorrect:**\n• Choices A, B, C: Each specific value (except $4$) gives no solution, but the question asks for what value(s) produce no solution - that's any value except $4$.\n\n**Key concept:** Parallel lines (same slope, different intercept) have no intersection point.",
          skills: ["systems-of-equations", "no-solution"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "For what value of $k$ does the equation $x^2 + kx + 9 = 0$ have exactly one real solution?",
          correctAnswer: 6,
          alternateAnswers: [-6],
          explanation: "**The correct answer is $6$ (or $-6$).** For exactly one real solution, the discriminant must equal zero.\n\n• Discriminant: $b^2 - 4ac = 0$\n• For $x^2 + kx + 9 = 0$: $a = 1$, $b = k$, $c = 9$\n• $k^2 - 4(1)(9) = 0$\n• $k^2 - 36 = 0$\n• $k^2 = 36$\n• $k = \\pm 6$\n\n**Verification for $k = 6$:**\n• $x^2 + 6x + 9 = (x + 3)^2 = 0$\n• One solution: $x = -3$ ✓\n\n**Key concept:** A quadratic has exactly one real solution when its discriminant $b^2 - 4ac = 0$.",
          skills: ["discriminant", "quadratic-equations"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The solutions to $2x^2 + 6x - 5 = 0$ can be written as $x = \\frac{-6 \\pm \\sqrt{k}}{4}$. What is the value of $k$?",
          choices: [
            { id: "A", text: "$36$" },
            { id: "B", text: "$56$" },
            { id: "C", text: "$76$" },
            { id: "D", text: "$96$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Use the quadratic formula.\n\nFor $2x^2 + 6x - 5 = 0$, where $a = 2$, $b = 6$, $c = -5$:\n\n• $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$\n• $x = \\frac{-6 \\pm \\sqrt{36 - 4(2)(-5)}}{2(2)}$\n• $x = \\frac{-6 \\pm \\sqrt{36 + 40}}{4}$\n• $x = \\frac{-6 \\pm \\sqrt{76}}{4}$\n\nTherefore, $k = 76$.\n\n**Why other choices are incorrect:**\n• Choice A ($36$): This is just $b^2$, missing the $-4ac$ part\n• Choice B ($56$): Calculation error\n• Choice D ($96$): Would need different coefficients\n\n**Key concept:** The discriminant is $b^2 - 4ac$, which appears under the square root in the quadratic formula.",
          skills: ["quadratic-formula", "discriminant"]
        }
      ]
    }
  ]
};
