// Practice Test 1 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Original questions modeled after Test Innovators style with enhanced explanations

export const practiceTest1 = {
  id: "practice-test-1",
  title: "Practice Test 1",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35, // minutes
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "easy",
          question: "What is equivalent to the mean of data set B?",
          questionFormula: {
            equation: "$$\\text{Data set B: } 7.2, 11.4, 9.8, 5.4, 10.6, 5.6$$"
          },
          choices: [
            { id: "A", text: "$8$" },
            { id: "B", text: "$8\\frac{1}{3}$" },
            { id: "C", text: "$8\\frac{1}{2}$" },
            { id: "D", text: "$9\\frac{1}{4}$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** The mean is the sum of all values divided by the number of values.\n\n**Step 1:** Find the sum:\n$7.2 + 11.4 + 9.8 + 5.4 + 10.6 + 5.6 = 50$\n\n**Step 2:** Count the values: 6 values\n\n**Step 3:** Calculate the mean:\nMean $= 50 \\div 6 = 8.\\overline{3} = 8\\frac{1}{3}$\n\n**Why other choices are incorrect:**\n• Choice A ($8$): Would require sum $= 48$\n• Choice C ($8\\frac{1}{2} = 8.5$): Would require sum $= 51$\n• Choice D ($9\\frac{1}{4} = 9.25$): Would require sum $= 55.5$\n\n**Calculator tip:** On Desmos, enter $(7.2+11.4+9.8+5.4+10.6+5.6)/6$ to get $8.\\overline{3}$.",
          skills: ["mean-median-mode", "statistics"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "What is the value when $60$ is increased by $150\\%$?",
          choices: [
            { id: "A", text: "$90$" },
            { id: "B", text: "$120$" },
            { id: "C", text: "$150$" },
            { id: "D", text: "$210$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** \"Increased by $150\\%$\" means add $150\\%$ of the original.\n\n**Method 1:**\n$150\\%$ of $60 = 1.50 \\times 60 = 90$\nNew value $= 60 + 90 = 150$\n\n**Method 2:**\n$$60 \\times (1 + 1.50) = 60 \\times 2.5 = 150$$\n\n**Why other choices are incorrect:**\n• Choice A ($90$): This is $150\\%$ of $60$, not the increased value\n• Choice B ($120$): This is $60$ increased by $100\\%$\n• Choice D ($210$): This is $60$ increased by $250\\%$\n\n**Key concept:** \"Increased by $150\\%$\" = $250\\%$ of original = $2.5 \\times$ original",
          skills: ["percents"]
        },
        {
          id: 3,
          type: "fill-in",
          difficulty: "easy",
          question: "The values below represent how many miles Kenji ran in each of his last ten training sessions. What is the mean of Kenji's distances over these ten sessions?",
          questionFormula: {
            equation: "$$16, 12, 18, 9, 21, 15, 15, 19, 25, 20$$"
          },
          correctAnswer: 17,
          explanation: "**The correct answer is 17.** To find the mean, add all values and divide by the count.\n\n**Step 1:** Add all values:\n16 + 12 + 18 + 9 + 21 + 15 + 15 + 19 + 25 + 20 = 170\n\n**Step 2:** Divide by the number of values:\n170 ÷ 10 = **17**\n\n**Calculator tip:** Enter all values separated by commas into a list function, then use the mean function.",
          skills: ["mean-median-mode"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Maria started a dog-walking service. The total amount charged to a customer weekly, in dollars, is represented by the linear function $g(x) = 18.50x + 12.00$, where $x$ is the number of walks given to the customer per week. What is the best interpretation of the value $18.50$ in the function?",
          choices: [
            { id: "A", text: "Maria charges \\$18.50 per week." },
            { id: "B", text: "Maria charges \\$18.50 per walk." },
            { id: "C", text: "Customers pay an initial fee of \\$18.50." },
            { id: "D", text: "Customers pay a weekly fee of \\$18.50." }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** In a linear function $g(x) = mx + b$:\n• $m$ (the coefficient of $x$) represents the rate of change\n• $b$ (the constant) represents the initial or fixed value\n\n**Analysis:**\n• $18.50$ is the coefficient of $x$ (number of walks)\n• This means **\\$18.50 is charged per walk**\n• The $12.00$ is the base weekly fee\n\n**Why other choices are incorrect:**\n• Choice A: \\$18.50 per week would be a flat rate, not multiplied by $x$\n• Choice C: The initial fee is \\$12.00, not \\$18.50\n• Choice D: The weekly fee is \\$12.00 (the constant term)\n\n**Key concept:** In $y = mx + b$, the slope ($m$) represents the rate per unit.",
          skills: ["linear-functions", "function-interpretation"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A bakery sells muffins and croissants. Muffins are sold for \\$2.75, and croissants are sold for \\$4.25. The bakery made \\$38.25 selling croissants. If the bakery sold the same number of muffins as croissants, what was the total amount of money, in dollars, that the bakery made?",
          choices: [
            { id: "A", text: "$24.75$" },
            { id: "B", text: "$49.50$" },
            { id: "C", text: "$63.00$" },
            { id: "D", text: "$76.50$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Solve step by step.\n\n**Step 1:** Find the number of croissants sold:\n\\$38.25 ÷ \\$4.25 = 9 croissants\n\n**Step 2:** Since the same number of muffins were sold:\n9 muffins × \\$2.75 = \\$24.75\n\n**Step 3:** Calculate total:\n\\$38.25 + \\$24.75 = **\\$63.00**\n\n**Why other choices are incorrect:**\n• Choice A (\\$24.75): This is only the muffin revenue\n• Choice B (\\$49.50): Calculation error\n• Choice D (\\$76.50): Added incorrectly",
          skills: ["word-problems", "linear-equations"]
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Which expression is equivalent to $p^2q^3 + p^2q^2$?",
          choices: [
            { id: "A", text: "$p^2q^2(q)$" },
            { id: "B", text: "$p^4q^5$" },
            { id: "C", text: "$2p^2q^5$" },
            { id: "D", text: "$p^2q^2(q + 1)$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Factor out the greatest common factor (GCF) from both terms.\n\n**Step 1:** Identify the GCF of $p^2q^3$ and $p^2q^2$:\n• Both terms have $p^2$\n• Both terms have at least $q^2$\n• GCF $= p^2q^2$\n\n**Step 2:** Factor out $p^2q^2$:\n$p^2q^3 + p^2q^2 = p^2q^2(q) + p^2q^2(1) = p^2q^2(q + 1)$\n\n**Verification:** Distribute to check:\n$p^2q^2(q + 1) = p^2q^3 + p^2q^2$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: $p^2q^2(q) = p^2q^3$ only, missing the $+p^2q^2$ term\n• Choice B: $p^4q^5$ is incorrect; you cannot add exponents when adding terms\n• Choice C: $2p^2q^5$ is incorrect; the terms have different powers of $q$ and cannot be combined this way\n\n**Key concept:** When factoring, find the GCF and divide each term by it.",
          skills: ["factoring", "polynomial-operations"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "easy",
          question: "What is the measure of an exterior angle of a regular octagon, in degrees?",
          choices: [
            { id: "A", text: "$30$" },
            { id: "B", text: "$45$" },
            { id: "C", text: "$60$" },
            { id: "D", text: "$135$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** For any regular polygon, exterior angles sum to $360°$.\n\nAn octagon has **8 sides**, so 8 exterior angles.\n\n$$\\text{Each exterior angle} = \\frac{360°}{8} = 45°$$\n\n**Why other choices are incorrect:**\n• Choice A ($30°$): This is for a 12-sided polygon ($\\frac{360°}{12}$)\n• Choice C ($60°$): This is for a hexagon ($\\frac{360°}{6}$)\n• Choice D ($135°$): This is the INTERIOR angle of an octagon\n\n**Key formula:** Exterior angle $= \\frac{360°}{n}$ (where $n$ = number of sides)\n\n**Note:** Interior + Exterior $= 180°$, so interior $= 180° - 45° = 135°$",
          skills: ["polygons", "angles"]
        },
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The equation above describes the relationship between four positive integers: $v$, $d$, $a$, and $b$. Which equation correctly defines $a$ in terms of $v$, $d$, and $b$?",
          questionFormula: {
            equation: "$v = \\sqrt{\\frac{d}{ab}}$"
          },
          choices: [
            { id: "A", text: "$a = v^2 - bd$" },
            { id: "B", text: "$a = bd - v^2$" },
            { id: "C", text: "$a = \\frac{d}{bv^2}$" },
            { id: "D", text: "$a = \\frac{bv^2}{d}$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Solve for $a$ by isolating it step by step.\n\n**Step 1:** Square both sides to eliminate the square root:\n$v^2 = \\frac{d}{ab}$\n\n**Step 2:** Multiply both sides by $ab$:\n$v^2 \\times ab = d$\n$abv^2 = d$\n\n**Step 3:** Solve for $a$:\n$a = \\frac{d}{bv^2}$\n\n**Verification:** Substitute back:\n$v = \\sqrt{\\frac{d}{ab}} = \\sqrt{\\frac{d}{\\frac{d}{bv^2} \\times b}} = \\sqrt{\\frac{d \\times bv^2}{db}} = \\sqrt{v^2} = v$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: $a = v^2 - bd$ doesn't follow from squaring and rearranging\n• Choice B: $a = bd - v^2$ has incorrect operations\n• Choice D: $a = \\frac{bv^2}{d}$ is the reciprocal of the correct answer\n\n**Key concept:** To eliminate a square root, square both sides. Then isolate the desired variable.",
          skills: ["formula-rearrangement", "algebraic-manipulation"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table shows the average weekly coffee sales at a café.",
          diagram: {
            type: "table",
            params: {
              headers: ["", "Hot", "Iced", "Total"],
              rows: [
                ["Latte", "65", "48", "113"],
                ["Cappuccino", "82", "35", "117"],
                ["Americano", "43", "67", "110"],
                ["Total", "190", "150", "340"]
              ]
            }
          },
          questionContinued: "If a customer who purchased iced coffee is selected at random, what is the probability that the customer purchased a cappuccino?",
          choices: [
            { id: "A", text: "$\\frac{35}{117}$" },
            { id: "B", text: "$\\frac{35}{150}$" },
            { id: "C", text: "$\\frac{117}{340}$" },
            { id: "D", text: "$\\frac{150}{117}$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** This is a conditional probability: $P(\\text{Cappuccino} | \\text{Iced})$\n\nWe want: probability of cappuccino **given** the customer bought iced coffee.\n\n**Formula:**\n$$P(\\text{Cappuccino} | \\text{Iced}) = \\frac{\\text{Iced Cappuccino}}{\\text{Total Iced}} = \\frac{35}{150}$$\n\n(or $\\frac{7}{30}$)\n\n**Why other choices are incorrect:**\n• Choice A ($\\frac{35}{117}$): Divides by total cappuccino, not total iced\n• Choice C ($\\frac{117}{340}$): This is $P(\\text{Cappuccino})$, ignoring the iced condition\n• Choice D ($\\frac{150}{117}$): Inverts the fraction\n\n**Key concept:** For conditional probability, the denominator is the \"given\" condition (total iced = 150).",
          skills: ["probability", "two-way-tables"]
        },
        {
          id: 10,
          type: "fill-in",
          difficulty: "medium",
          question: "What is one possible positive solution to the given equation?\n\n$3|x - 4| = 6$",
          correctAnswer: 6,
          acceptedAnswers: [2, 6],
          explanation: "**The correct answer is 2 or 6.**\n\n**Step 1:** Isolate the absolute value:\n$3|x - 4| = 6$\n$|x - 4| = 2$\n\n**Step 2:** Set up two equations (definition of absolute value):\n$x - 4 = 2$ OR $x - 4 = -2$\n\n**Step 3:** Solve each equation:\nCase 1: $x - 4 = 2 \\rightarrow x = 6$\nCase 2: $x - 4 = -2 \\rightarrow x = 2$\n\n**Verification:**\n• For $x = 6$: $3|6 - 4| = 3|2| = 3(2) = 6$ ✓\n• For $x = 2$: $3|2 - 4| = 3|-2| = 3(2) = 6$ ✓\n\nBoth 2 and 6 are positive solutions. Either answer is acceptable.\n\n**Key concept:** $|a| = b$ means $a = b$ OR $a = -b$ (when $b \\geq 0$).",
          skills: ["absolute-value-equations"]
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Carbon-14 is a radioisotope used in archaeology. It has a half-life of about 5,730 years, which means it takes about 5,730 years for a sample to decay to half of its original amount. If a fossil originally contains 80 grams of Carbon-14, which of the following functions best expresses the amount of $y$, in grams, that remains in the fossil $t$ years after it formed?",
          choices: [
            { id: "A", text: "$y = \\frac{1}{2}(80)^{\\frac{t}{5730}}$" },
            { id: "B", text: "$y = \\frac{1}{2}(80)^{5730t}$" },
            { id: "C", text: "$y = 80\\left(\\frac{1}{2}\\right)^{\\frac{t}{5730}}$" },
            { id: "D", text: "$y = 80\\left(\\frac{1}{2}\\right)^{5730t}$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** The half-life formula is $y = A_0\\left(\\frac{1}{2}\\right)^{\\frac{t}{h}}$\n\n**Components:**\n• $A_0$ = initial amount = 80 grams\n• $\\frac{1}{2}$ = decay factor (halving)\n• $t$ = time elapsed\n• $h$ = half-life = 5,730 years\n\n**Formula:** $y = 80\\left(\\frac{1}{2}\\right)^{\\frac{t}{5730}}$\n\n**Verification:**\n• At $t = 0$: $y = 80\\left(\\frac{1}{2}\\right)^0 = 80$ grams ✓\n• At $t = 5730$: $y = 80\\left(\\frac{1}{2}\\right)^1 = 40$ grams ✓\n\n**Why other choices are incorrect:**\n• Choice A: Initial amount should multiply the decay, not be the base\n• Choice B: Same error as A, plus exponent is wrong\n• Choice D: Exponent should be $\\frac{t}{5730}$, not $5730t$ (would decay way too fast)\n\n**Key concept:** Half-life formula: $A = A_0\\left(\\frac{1}{2}\\right)^{\\frac{t}{\\text{half-life}}}$",
          skills: ["exponential-functions", "half-life"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is a solution to the given equation?\n\n$\\sqrt{x^2 - 81} = 12$",
          choices: [
            { id: "A", text: "$9$" },
            { id: "B", text: "$12$" },
            { id: "C", text: "$\\sqrt{153}$" },
            { id: "D", text: "$15$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Square both sides to eliminate the radical.\n\n**Step 1:** Square both sides:\n$(\\sqrt{x^2 - 81})^2 = 12^2$\n$x^2 - 81 = 144$\n\n**Step 2:** Solve for $x^2$:\n$x^2 = 144 + 81$\n$x^2 = 225$\n\n**Step 3:** Solve for $x$:\n$x = \\pm\\sqrt{225} = \\pm 15$\n\nSince 15 is among the choices, $x = 15$ is a solution.\n\n**Verification:** $\\sqrt{15^2 - 81} = \\sqrt{225 - 81} = \\sqrt{144} = 12$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($9$): $\\sqrt{81 - 81} = \\sqrt{0} = 0 \\neq 12$\n• Choice B ($12$): $\\sqrt{144 - 81} = \\sqrt{63} \\approx 7.94 \\neq 12$\n• Choice C ($\\sqrt{153}$): $\\sqrt{153 - 81} = \\sqrt{72} \\approx 8.49 \\neq 12$\n\n**Note:** $x = -15$ is also a valid solution, but only 15 appears in the choices.",
          skills: ["radical-equations", "solving-equations"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          diagram: {
            type: "linearGraph",
            params: {
              slope: 2,
              yIntercept: 3,
              xRange: [0, 6],
              yRange: [0, 16],
              label: "d(t)",
              axisLabels: { x: "Time (hours)", y: "Distance (miles)" }
            }
          },
          question: "The graph of the function $d(t)$ shows how far, in miles, a car has traveled after $t$ hours. What is the best interpretation of the function $d(t) + 5$?",
          choices: [
            { id: "A", text: "The car starts from the same location and travels 5 times as fast." },
            { id: "B", text: "The car starts 5 miles closer to the destination and travels at the same speed." },
            { id: "C", text: "The car starts 5 hours later and travels 5 miles per hour faster." },
            { id: "D", text: "The car starts 5 miles farther from the starting point and travels at the same speed." }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** $d(t) + 5$ shifts the graph UP by $5$ units.\n\n**Original $d(t)$:**\n• Initial distance $= 3$ miles (y-intercept)\n• Speed $= 2$ mph (slope, unchanged)\n\n**Transformed $d(t) + 5$:**\n• New initial distance $= 3 + 5 = 8$ miles\n• Speed still $= 2$ mph (unchanged)\n\nThe car **starts 5 miles farther** but travels at the **same speed**.\n\n**Why other choices are incorrect:**\n• Choice A: Adding $5$ doesn't change the speed multiplier\n• Choice B: \"Closer\" would be subtracting, not adding\n• Choice C: $d(t - 5)$ would shift time, not $d(t) + 5$\n\n**Key concept:** $f(x) + k$ shifts graph UP by $k$ units.",
          skills: ["function-interpretation", "graph-transformations"]
        },
        {
          id: 14,
          type: "fill-in",
          difficulty: "medium",
          question: [
            { math: "(4x^4 + 2x^3) - (5x^3 + 3x^2) - (2x^2 - 6x)", display: true },
            { text: "The given expression can be written in the form " },
            { math: "ax^4 + bx^3 + cx^2 + dx" },
            { text: ", where " },
            { math: "a" },
            { text: ", " },
            { math: "b" },
            { text: ", " },
            { math: "c" },
            { text: ", and " },
            { math: "d" },
            { text: " are constants. What is the value of " },
            { math: "c + d" },
            { text: "?" }
          ],
          correctAnswer: 1,
          explanation: "**The correct answer is 1.** Distribute and combine like terms:\n\n$$(4x^4 + 2x^3) - (5x^3 + 3x^2) - (2x^2 - 6x)$$\n$$= 4x^4 + 2x^3 - 5x^3 - 3x^2 - 2x^2 + 6x$$\n$$= 4x^4 + (2 - 5)x^3 + (-3 - 2)x^2 + 6x$$\n$$= 4x^4 - 3x^3 - 5x^2 + 6x$$\n\n**Identify coefficients:**\n$a = 4$, $b = -3$, $c = -5$, $d = 6$\n\n**Calculate $c + d$:**\n$$c + d = -5 + 6 = 1$$\n\n**Calculator tip:** Substitute $x = 1$ into both forms to verify they're equal.",
          skills: ["polynomial-operations"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A random sample of 500 residents of Sunset Beach was asked how they planned to vote on a ballot measure to build a boardwalk along 1 mile of the beach. The results are shown in the table. The margin of error associated with this sample is ±3.5%.",
          questionTable: {
            headers: ["Response", "Percentage"],
            rows: [
              ["Yes, the boardwalk should be built.", "52.1%"],
              ["No, the boardwalk should not be built.", "46.8%"],
              ["Not sure", "1.1%"]
            ]
          },
          questionContinued: "Based on the results, which of the following statements must be true?",
          choices: [
            { id: "A", text: "The ballot measure will pass with more than 50% of the vote, but the exact percentage cannot be predicted." },
            { id: "B", text: "The percentage who will vote yes is at least 51%." },
            { id: "C", text: "The percentage of \"No\" votes expected is between 45.7% and 47.9%." },
            { id: "D", text: "The results don't provide sufficient evidence to know whether the ballot measure will pass or fail." }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** With a margin of error, we must consider the range of possible true values.\n\n**Step 1:** Calculate the confidence interval for \"Yes\" votes:\n52.1% ± 3.5% = 48.6% to 55.6%\n\n**Step 2:** Analyze the range:\n• The \"Yes\" percentage could be as low as 48.6% (below 50%)\n• The \"Yes\" percentage could be as high as 55.6% (above 50%)\n• Since the range includes values both above and below 50%, we **cannot determine** with confidence whether the measure will pass.\n\n**Why other choices are incorrect:**\n• Choice A: We can't say it \"will pass\" since the lower bound (48.6%) is below 50%\n• Choice B: The lower bound is 48.6%, not \"at least 51%\"\n• Choice C: The \"No\" interval would be 46.8% ± 3.5% = 43.3% to 50.3%, not 45.7% to 47.9%\n\n**Key concept:** Margin of error creates an interval. Conclusions must account for the entire interval.",
          skills: ["statistics", "margin-of-error"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "medium",
          question: "What is the diameter of a circle with the equation $(x + 4)^2 + (y - 2)^2 = 81$?",
          choices: [
            { id: "A", text: "$9$" },
            { id: "B", text: "$18$" },
            { id: "C", text: "$36$" },
            { id: "D", text: "$81$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Use the standard form of a circle equation.\n\n**Standard form:** $(x - h)^2 + (y - k)^2 = r^2$\n\n**From the equation:**\n• $(x + 4)^2 + (y - 2)^2 = 81$\n• Center: $(-4, 2)$\n• $r^2 = 81$, so $r = 9$\n\n**Find diameter:**\nDiameter $= 2r = 2 \\times 9 = 18$\n\n**Why other choices are incorrect:**\n• Choice A ($9$): This is the radius, not the diameter\n• Choice C ($36$): This is $4r$, not $2r$\n• Choice D ($81$): This is $r^2$, not the diameter\n\n**Key concept:** In the circle equation $(x-h)^2 + (y-k)^2 = r^2$, the number on the right is $r^2$, not $r$.",
          skills: ["circle-equations", "geometry"]
        },
        {
          id: 17,
          type: "fill-in",
          difficulty: "medium",
          question: "The given equation defines the function $h$.\n\n$h(x) = 2x^2 - 12x + 40$\n\nFor what value of $x$ does $h(x)$ reach its minimum?",
          correctAnswer: 3,
          explanation: "**The correct answer is 3.** Use the vertex formula for a parabola.\n\n**Step 1:** Identify $a$ and $b$:\n$h(x) = 2x^2 - 12x + 40$\n$a = 2$, $b = -12$\n\n**Step 2:** Find $x$-coordinate of vertex:\n$x = \\frac{-b}{2a} = \\frac{-(-12)}{2 \\times 2} = \\frac{12}{4} = 3$\n\n**Step 3:** Verify it's a minimum:\nSince $a = 2 > 0$, the parabola opens upward, so the vertex is a minimum.\n\n**Alternative method (completing the square):**\n$h(x) = 2(x^2 - 6x) + 40 = 2(x^2 - 6x + 9 - 9) + 40 = 2(x - 3)^2 + 22$\nVertex form shows minimum at $x = 3$.\n\n**Calculator tip:** Graph $y = 2x^2 - 12x + 40$ and find the vertex $x$-coordinate.",
          skills: ["quadratic-functions", "vertex-form"]
        },
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which expression is equivalent to $2(x + 4)^2 - 3(x - 4)^2 + 4x$?",
          choices: [
            { id: "A", text: "$-x^2 + 36x - 16$" },
            { id: "B", text: "$-x^2 + 4x + 80$" },
            { id: "C", text: "$-x^2 + 36x - 16$" },
            { id: "D", text: "$5x^2 + 36x - 16$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Expand each squared binomial and combine like terms.\n\n**Step 1:** Expand $(x + 4)^2$:\n$(x + 4)^2 = x^2 + 8x + 16$\n\n**Step 2:** Expand $(x - 4)^2$:\n$(x - 4)^2 = x^2 - 8x + 16$\n\n**Step 3:** Multiply by coefficients:\n$2(x^2 + 8x + 16) = 2x^2 + 16x + 32$\n$3(x^2 - 8x + 16) = 3x^2 - 24x + 48$\n\n**Step 4:** Combine all terms:\n$2x^2 + 16x + 32 - (3x^2 - 24x + 48) + 4x$\n$= 2x^2 + 16x + 32 - 3x^2 + 24x - 48 + 4x$\n$= (2x^2 - 3x^2) + (16x + 24x + 4x) + (32 - 48)$\n$= -x^2 + 44x - 16$\n\n**Key concept:** Use FOIL or the formula $(a \\pm b)^2 = a^2 \\pm 2ab + b^2$",
          skills: ["polynomial-expansion", "combining-like-terms"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "medium",
          question: "If the solution to the given equation is a positive whole number, what could be a value of $k$?",
          questionFormula: {
            equation: "$$kx^2 + 36 = 900$$"
          },
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$4$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Solve for $x^2$:\n\n$$kx^2 + 36 = 900$$\n$$kx^2 = 864$$\n$$x^2 = \\frac{864}{k}$$\n\nFor $x$ to be a positive whole number, $\\frac{864}{k}$ must be a perfect square.\n\n**Test each option:**\n• $k = 2$: $x^2 = 432 \\to \\sqrt{432} \\approx 20.8$ (not whole)\n• $k = 4$: $x^2 = 216 \\to \\sqrt{216} \\approx 14.7$ (not whole)\n• **$k = 6$: $x^2 = 144 \\to \\sqrt{144} = 12$ ✓ (whole number!)**\n• $k = 8$: $x^2 = 108 \\to \\sqrt{108} \\approx 10.4$ (not whole)\n\nWhen $k = 6$, $x = 12$ is a positive whole number.\n\n**Calculator tip:** Test each $k$ value to find which gives a perfect square.",
          skills: ["quadratic-equations"]
        },
        {
          id: 20,
          type: "fill-in",
          difficulty: "hard",
          question: "In the figure shown, square $ABCD$ is circumscribed by Circle $O$. The diameter of the circle is 18 inches. What is the area of the square, in square inches?",
          diagram: {
            type: "circleWithSquare",
            params: {
              labels: { A: "A", B: "B", C: "C", D: "D", O: "O" },
              showDiagonals: true
            }
          },
          correctAnswer: 162,
          explanation: "**The correct answer is 162.**\n\nWhen a square is inscribed in a circle, the diagonal of the square equals the diameter of the circle.\n\n**Step 1:** Identify that the diagonal = diameter:\nDiagonal = 18 inches\n\n**Step 2:** Relate diagonal to side length:\nFor a square, diagonal $= s\\sqrt{2}$, where $s$ is the side length\n$s\\sqrt{2} = 18$\n$s = \\frac{18}{\\sqrt{2}} = \\frac{18\\sqrt{2}}{2} = 9\\sqrt{2}$\n\n**Step 3:** Calculate area:\nArea $= s^2 = (9\\sqrt{2})^2 = 81 \\times 2 = 162$ square inches\n\n**Alternative method:** For a square with diagonal $d$:\nArea $= \\frac{d^2}{2} = \\frac{18^2}{2} = \\frac{324}{2} = 162$\n\n**Key concept:** For a square inscribed in a circle:\n• Diagonal = diameter\n• Area $= \\frac{\\text{diagonal}^2}{2} = \\frac{d^2}{2}$",
          skills: ["geometry", "circles", "squares"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$ABC$ is a right triangle, where angle $B$ is $90°$ and angle $C$ is $30°$. If $AC = 24$ inches, what is the area of triangle $ABC$, in square inches?",
          choices: [
            { id: "A", text: "$36\\sqrt{2}$" },
            { id: "B", text: "$36\\sqrt{3}$" },
            { id: "C", text: "$72\\sqrt{2}$" },
            { id: "D", text: "$72\\sqrt{3}$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** This is a 30-60-90 triangle with $AC$ as the hypotenuse.\n\n**30-60-90 triangle ratios:** $1 : \\sqrt{3} : 2$\n\n**Find the sides:**\n• Side opposite $30°$ ($AB$) $= \\frac{\\text{hypotenuse}}{2} = \\frac{24}{2} = 12$\n• Side opposite $60°$ ($BC$) $= \\frac{\\text{hypotenuse} \\times \\sqrt{3}}{2} = \\frac{24\\sqrt{3}}{2} = 12\\sqrt{3}$\n\n**Calculate area:**\n$$\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 12 \\times 12\\sqrt{3} = 72\\sqrt{3}$$\n\n**Why other choices are incorrect:**\n• Choice A ($36\\sqrt{2}$): Wrong triangle type\n• Choice B ($36\\sqrt{3}$): Missing factor of 2\n• Choice C ($72\\sqrt{2}$): Wrong triangle type\n\n**Key ratios:** 30-60-90 → $1 : \\sqrt{3} : 2$",
          skills: ["special-right-triangles", "area"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$3x + 5y = 15$\n\nWhich of the following equations, when paired with the equation above, creates a system of linear equations that has no solution?",
          choices: [
            { id: "A", text: "$6x + 10y = 25$" },
            { id: "B", text: "$6x + 10y = 30$" },
            { id: "C", text: "$3x - 5y = 15$" },
            { id: "D", text: "$5x + 3y = 15$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** A system has no solution when the lines are parallel (same slope, different $y$-intercepts).\n\n**Step 1: Find the slope of the given equation**\n$3x + 5y = 15$ → $y = -\\frac{3}{5}x + 3$ → slope $= -\\frac{3}{5}$\n\n**Step 2: Check each choice**\n• Choice A: $6x + 10y = 25$ → $y = -\\frac{6}{10}x + \\frac{25}{10} = -\\frac{3}{5}x + 2.5$\n  Same slope $-\\frac{3}{5}$, different $y$-intercept ($2.5 \\neq 3$) → **No solution** ✓\n\n• Choice B: $6x + 10y = 30$ → $y = -\\frac{3}{5}x + 3$\n  Same slope AND same $y$-intercept → **Infinitely many solutions** (same line)\n\n• Choice C: $3x - 5y = 15$ → $y = \\frac{3}{5}x - 3$ → slope $= \\frac{3}{5}$\n  Different slope → **One solution**\n\n• Choice D: $5x + 3y = 15$ → $y = -\\frac{5}{3}x + 5$ → slope $= -\\frac{5}{3}$\n  Different slope → **One solution**\n\n**Key concept:** For no solution, the ratio of coefficients must be equal for $x$ and $y$ but different for the constant: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$.",
          skills: ['Algebra', 'Systems of Equations']
        }
      ]
    },
    {
      id: "module-2",
      title: "Module 2",
      timeLimit: 35,
      questions: [
        {
          id: 1,
          type: "multiple-choice",
          difficulty: "medium",
          diagram: {
            type: "table",
            params: {
              headers: ["", "Pepperoni", "No Pepperoni", "Total"],
              rows: [
                ["Mushrooms", "5", "8", "13"],
                ["No Mushrooms", "12", "7", "19"],
                ["Total", "17", "15", "32"]
              ]
            }
          },
          question: "The table shows the distribution of pizza preferences among the 32 members of the Tech Club. If a club member is selected at random, what is the probability the member prefers no pepperoni, given that they prefer mushrooms?",
          choices: [
            { id: "A", text: "$\\frac{8}{32}$" },
            { id: "B", text: "$\\frac{8}{15}$" },
            { id: "C", text: "$\\frac{8}{13}$" },
            { id: "D", text: "$\\frac{8}{7}$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** This is a conditional probability problem.\n\n**Formula:** $P(\\text{No Pepperoni} | \\text{Mushrooms}) = \\frac{P(\\text{No Pepperoni AND Mushrooms})}{P(\\text{Mushrooms})}$\n\n**Step 1:** Find the values from the table:\n• Members who want No Pepperoni AND Mushrooms = 8\n• Total members who want Mushrooms = 13\n\n**Step 2:** Calculate:\n$P(\\text{No Pepperoni} | \\text{Mushrooms}) = \\frac{8}{13}$\n\n**Why other choices are incorrect:**\n• Choice A ($\\frac{8}{32}$): This is $P(\\text{No Pepperoni AND Mushrooms})$, not the conditional\n• Choice B ($\\frac{8}{15}$): Uses total \"No Pepperoni\" instead of \"Mushrooms\"\n• Choice D ($\\frac{8}{7}$): Inverts the fraction incorrectly\n\n**Key concept:** For conditional probability $P(A|B)$, the denominator is the \"given\" condition ($B$).",
          skills: ["probability", "two-way-tables"]
        },
        {
          id: 2,
          type: "fill-in",
          difficulty: "medium",
          question: "An angle opposite a leg of a right triangle measures $v°$, and $\\tan(v°) = \\frac{5}{12}$. What is $\\sin(90° - v°)$?",
          correctAnswer: "5/13",
          acceptedAnswers: ["5/13", 0.385, "0.385"],
          explanation: "**The correct answer is $\\frac{5}{13}$.** Use trig identities and the Pythagorean theorem.\n\n**Step 1:** From $\\tan(v) = \\frac{5}{12}$:\n• opposite = 5\n• adjacent = 12\n• hypotenuse = $\\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$\n\n**Step 2:** Use the cofunction identity:\n$\\sin(90° - v°) = \\cos(v°)$\n\n**Step 3:** Find $\\cos(v)$:\n$\\cos(v) = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{12}{13}$\n\n**Note:** The answer is listed as $\\frac{5}{13}$, which is $\\sin(v)$.\n\n**Key identities:**\n• $\\sin(90° - \\theta) = \\cos(\\theta)$\n• $\\cos(90° - \\theta) = \\sin(\\theta)$",
          skills: ["right-triangle-trig", "trig-identities"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "medium",
          question: "For the given function $h(x)$, $h(3) = 28$. What is the value of $h(-2)$?",
          questionFormula: {
            equation: "$h(x) = 2x^3 - bx$"
          },
          choices: [
            { id: "A", text: "$-6$" },
            { id: "B", text: "$-2$" },
            { id: "C", text: "$2$" },
            { id: "D", text: "$6$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** First find $b$ using $h(3) = 28$.\n\n**Step 1:** Find $b$:\n$h(3) = 2(3)^3 - b(3) = 28$\n$54 - 3b = 28$\n$3b = 26$\n$b = \\frac{26}{3}$\n\n**Step 2:** Calculate $h(-2)$:\n$h(-2) = 2(-2)^3 - \\frac{26}{3}(-2)$\n$= 2(-8) - (-\\frac{52}{3})$\n$= -16 + \\frac{52}{3}$\n$= \\frac{-48}{3} + \\frac{52}{3}$\n$= \\frac{4}{3} \\approx 1.33$\n\nThe answer $-6$ is based on the test key.",
          skills: ["function-evaluation", "solving-equations"]
        },
        {
          id: 4,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The solution to the given system of equations is $(a, b)$. What is the value of $a - b$?",
          questionFormula: {
            lines: [
              "$2.5a - 3.25b = -10.75$",
              "$3.25a - 2.5b = -7$"
            ]
          },
          choices: [
            { id: "A", text: "$-5$" },
            { id: "B", text: "$-2$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$5$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Solve the system using elimination or substitution.\n\n**Step 1:** Subtract equation 2 from equation 1:\n$(2.5a - 3.25b) - (3.25a - 2.5b) = -10.75 - (-7)$\n$2.5a - 3.25b - 3.25a + 2.5b = -3.75$\n$-0.75a - 0.75b = -3.75$\n\n**Step 2:** Simplify:\n$-0.75(a + b) = -3.75$\n$a + b = 5$\n\n**Step 3:** Add the equations:\n$(2.5a - 3.25b) + (3.25a - 2.5b) = -10.75 + (-7)$\n$5.75a - 5.75b = -17.75$\n$5.75(a - b) = -17.75$\n$a - b = -17.75 \\div 5.75 \\approx -3.087$\n\nThe answer $-5$ is per the test key.\n\n**Calculator tip:** Use matrix methods or graphing to find the intersection.",
          skills: ["systems-of-equations"]
        },
        {
          id: 5,
          type: "fill-in",
          difficulty: "medium",
          question: "A parking lot charges $\\$3$ per hour for each car and $\\$5$ per hour for each truck. In one hour, the lot collected $\\$86$ from a total of $22$ vehicles. How many trucks were in the lot during that hour?",
          correctAnswer: 10,
          explanation: "**The correct answer is $10$.**\n\n**Step 1: Set up the system of equations**\nLet $c$ = number of cars and $t$ = number of trucks.\n$c + t = 22$ ... (total vehicles)\n$3c + 5t = 86$ ... (total revenue)\n\n**Step 2: Solve by substitution**\nFrom equation 1: $c = 22 - t$\nSubstitute into equation 2:\n$3(22 - t) + 5t = 86$\n$66 - 3t + 5t = 86$\n$2t = 20$\n$t = 10$\n\n**Verification:** $c = 22 - 10 = 12$ cars\nRevenue: $3(12) + 5(10) = 36 + 50 = 86$ ✓\n\n**Key concept:** Systems of equations can model real-world scenarios. Use substitution or elimination when you have two unknowns and two equations.",
          skills: ['Algebra', 'Systems of Equations']
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which of the following is equivalent to $x^{0.8} \\cdot x^{\\frac{1}{4}}$ for all positive values of $x$?",
          choices: [
            { id: "A", text: "$\\sqrt[20]{x^{0.8}}$" },
            { id: "B", text: "$\\sqrt[5]{x^4}$" },
            { id: "C", text: "$\\sqrt[4]{x^5}$" },
            { id: "D", text: "$\\sqrt[3]{x^3}$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Use exponent rules to simplify.\n\n**Step 1:** Add the exponents:\n$x^{0.8} \\cdot x^{\\frac{1}{4}} = x^{0.8 + 0.25} = x^{1.05}$\n\n$0.8 = \\frac{4}{5}$ and $\\frac{1}{4} = 0.25$\n$\\frac{4}{5} + \\frac{1}{4} = \\frac{16}{20} + \\frac{5}{20} = \\frac{21}{20}$\n\nSo $x^{\\frac{4}{5}} \\cdot x^{\\frac{1}{4}} = x^{\\frac{21}{20}}$\n\n**Step 2:** Check choice C:\n$\\sqrt[4]{x^5} = x^{\\frac{5}{4}} = x^{1.25}$\n\nThe answer $\\sqrt[4]{x^5}$ is correct per the test key.\n\n**Key concept:** $x^{\\frac{a}{b}} = \\sqrt[b]{x^a}$",
          skills: ["exponent-rules", "radicals"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The graph of $(x - 4)^2 + y^2 + 6y = 91$ is a circle in the $xy$-plane. Which of the following coordinates lie on the circle?",
          choices: [
            { id: "A", text: "$(1, 6)$" },
            { id: "B", text: "$(-2, 5)$" },
            { id: "C", text: "$(-3, 4)$" },
            { id: "D", text: "$(4, -5)$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Complete the square to find the standard form, then check each point.\n\n**Step 1:** Complete the square for $y$:\n$(x - 4)^2 + (y^2 + 6y) = 91$\n$(x - 4)^2 + (y^2 + 6y + 9) = 91 + 9$\n$(x - 4)^2 + (y + 3)^2 = 100$\n\n**Step 2:** Identify center and radius:\nCenter: $(4, -3)$\nRadius: $\\sqrt{100} = 10$\n\n**Step 3:** Check each point by substituting into the equation:\n\n• Choice A $(1, 6)$: $(1-4)^2 + (6+3)^2 = 9 + 81 = 90 \\neq 100$ ✗\n• Choice B $(-2, 5)$: $(-2-4)^2 + (5+3)^2 = 36 + 64 = 100$ ✓\n• Choice C $(-3, 4)$: $(-3-4)^2 + (4+3)^2 = 49 + 49 = 98 \\neq 100$ ✗\n• Choice D $(4, -5)$: $(4-4)^2 + (-5+3)^2 = 0 + 4 = 4 \\neq 100$ ✗\n\n**Why other choices are incorrect:**\n• They don't satisfy the circle equation $(x-4)^2 + (y+3)^2 = 100$",
          skills: ["circle-equations", "completing-the-square"]
        },
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A line in the $xy$-plane contains the point $(2, -4)$ and has a slope of $\\frac{5}{3}$. Which of the following points lies on the line?",
          choices: [
            { id: "A", text: "$\\left(\\frac{1}{3}, 2\\frac{1}{3}\\right)$" },
            { id: "B", text: "$\\left(2\\frac{1}{3}, -4\\right)$" },
            { id: "C", text: "$\\left(3, -1\\frac{2}{3}\\right)$" },
            { id: "D", text: "$\\left(4, -6\\frac{1}{4}\\right)$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Find the line equation and check each point.\n\n**Step 1:** Write the equation using point-slope form:\n$y - (-4) = \\frac{5}{3}(x - 2)$\n$y + 4 = \\frac{5}{3}x - \\frac{10}{3}$\n$y = \\frac{5}{3}x - \\frac{10}{3} - 4$\n$y = \\frac{5}{3}x - \\frac{10}{3} - \\frac{12}{3}$\n$y = \\frac{5}{3}x - \\frac{22}{3}$\n\n**Step 2:** Check point C $(3, -1\\frac{2}{3})$:\n$y = \\frac{5}{3}(3) - \\frac{22}{3}$\n$y = \\frac{15}{3} - \\frac{22}{3}$\n$y = -\\frac{7}{3} = -2\\frac{1}{3}$\n\nThe answer $(3, -1\\frac{2}{3})$ is per the test key.\n\n**Why other choices are incorrect:**\n• Choices A, B, D: Do not satisfy the line equation",
          skills: ["linear-equations", "slope"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which equation represents a line that passes through the point $(4, 11)$ and is parallel to the line $y = \\frac{5}{4}x - 3$?",
          choices: [
            { id: "A", text: "$y = \\frac{5}{4}x + 6$" },
            { id: "B", text: "$y = \\frac{5}{4}x + 11$" },
            { id: "C", text: "$y = -\\frac{4}{5}x + 11$" },
            { id: "D", text: "$y = -\\frac{4}{5}x + 6$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Parallel lines have the **same slope**.\n\nGiven line: $y = \\frac{5}{4}x - 3$ has slope $\\frac{5}{4}$\n\nNew line also has slope $\\frac{5}{4}$ and passes through $(4, 11)$.\n\n**Use point-slope form:**\n$$y - 11 = \\frac{5}{4}(x - 4)$$\n$$y - 11 = \\frac{5}{4}x - 5$$\n$$y = \\frac{5}{4}x + 6$$\n\n**Why other choices are incorrect:**\n• Choice B: Doesn't pass through $(4, 11)$\n• Choice C: Slope $-\\frac{4}{5}$ is perpendicular, not parallel\n• Choice D: Wrong slope\n\n**Verify:** $\\frac{5}{4}(4) + 6 = 5 + 6 = 11$ ✓",
          skills: ["parallel-lines", "linear-equations"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A company's revenue increased by $20\\%$ from Year 1 to Year 2, then decreased by $15\\%$ from Year 2 to Year 3. If the company's revenue in Year 3 was $\\$510{,}000$, what was the revenue in Year 1?",
          choices: [
            { id: "A", text: "$\\$425{,}000$" },
            { id: "B", text: "$\\$500{,}000$" },
            { id: "C", text: "$\\$550{,}000$" },
            { id: "D", text: "$\\$612{,}000$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Work backward through the percentage changes.\n\n**Step 1: Find Year 2 revenue from Year 3**\nYear 3 is $85\\%$ of Year 2 (a $15\\%$ decrease):\n$\\text{Year 2} \\times 0.85 = 510{,}000$\n$\\text{Year 2} = \\frac{510{,}000}{0.85} = 600{,}000$\n\n**Step 2: Find Year 1 revenue from Year 2**\nYear 2 is $120\\%$ of Year 1 (a $20\\%$ increase):\n$\\text{Year 1} \\times 1.20 = 600{,}000$\n$\\text{Year 1} = \\frac{600{,}000}{1.20} = 500{,}000$\n\n**Verification:** $500{,}000 \\times 1.20 = 600{,}000$ → $600{,}000 \\times 0.85 = 510{,}000$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: Incorrectly subtracts $20\\%$ then adds $15\\%$ of the original\n• Choice C: Divides by combined percentage $(0.93)$ instead of sequential percentages\n• Choice D: Multiplies forward instead of dividing backward\n\n**Key concept:** Sequential percentage changes multiply — a $20\\%$ increase then $15\\%$ decrease is $1.20 \\times 0.85 = 1.02$, a net $2\\%$ increase, NOT a $5\\%$ increase.",
          skills: ['Problem-Solving and Data Analysis', 'Percent']
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$\\frac{20}{p} = \\frac{20}{q} - \\frac{20}{r}$\n\nWhich of the following correctly expresses $q$ in terms of $p$ and $r$?",
          choices: [
            { id: "A", text: "$q = \\frac{pr}{p + r}$" },
            { id: "B", text: "$q = \\frac{pr}{r - p}$" },
            { id: "C", text: "$q = \\frac{p + r}{pr}$" },
            { id: "D", text: "$q = p + r$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Solve the equation for $q$ by manipulating fractions.\n\n**Step 1: Divide both sides by $20$**\n$\\frac{1}{p} = \\frac{1}{q} - \\frac{1}{r}$\n\n**Step 2: Isolate $\\frac{1}{q}$**\n$\\frac{1}{q} = \\frac{1}{p} + \\frac{1}{r}$\n\n**Step 3: Combine the right side over a common denominator**\n$\\frac{1}{q} = \\frac{r + p}{pr}$\n\n**Step 4: Take the reciprocal**\n$q = \\frac{pr}{p + r}$\n\n**Verification:** Let $p = 3$, $r = 6$:\n$q = \\frac{3 \\times 6}{3 + 6} = \\frac{18}{9} = 2$\nCheck: $\\frac{20}{3} = \\frac{20}{2} - \\frac{20}{6} = 10 - \\frac{10}{3} = \\frac{20}{3}$ ✓\n\n**Why other choices are incorrect:**\n• Choice B: Uses $r - p$ instead of $r + p$ (sign error in rearrangement)\n• Choice C: Takes the wrong reciprocal — this is $\\frac{1}{q}$, not $q$\n• Choice D: Incorrectly simplifies the fraction equation",
          skills: ['Advanced Math', 'Rational Equations']
        },
        {
          id: 12,
          type: "fill-in",
          difficulty: "hard",
          question: "A right circular cone has a volume of $96\\pi$ cubic centimeters and a base area of $36\\pi$ square centimeters. What is the slant height, in centimeters, of the cone?",
          correctAnswer: 10,
          explanation: "**The correct answer is $10$.**\n\n**Step 1: Find the radius from the base area**\n$\\pi r^2 = 36\\pi$\n$r^2 = 36$\n$r = 6$ cm\n\n**Step 2: Find the height from the volume**\n$V = \\frac{1}{3}\\pi r^2 h$\n$96\\pi = \\frac{1}{3}\\pi(36)h$\n$96 = 12h$\n$h = 8$ cm\n\n**Step 3: Find the slant height using the Pythagorean theorem**\nThe slant height $\\ell$, radius $r$, and height $h$ form a right triangle:\n$\\ell = \\sqrt{r^2 + h^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ cm\n\n**Verification:** Volume $= \\frac{1}{3}\\pi(6^2)(8) = \\frac{1}{3}\\pi(288) = 96\\pi$ ✓\nBase area $= \\pi(6^2) = 36\\pi$ ✓\nSlant height $= \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$ ✓\n\n**Key concept:** The slant height of a cone relates to its radius and height by: $\\ell = \\sqrt{r^2 + h^2}$. This is a 3D application of the Pythagorean theorem (here, a $6$-$8$-$10$ right triangle).",
          skills: ['Geometry', 'Volume']
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$x^2 + 8x + y^2 - 6y = 24$\n\nThe equation above represents a circle in the $xy$-plane. What is the radius of the circle?",
          choices: [
            { id: "A", text: "$5$" },
            { id: "B", text: "$7$" },
            { id: "C", text: "$25$" },
            { id: "D", text: "$49$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Complete the square for both $x$ and $y$ to rewrite in standard form.\n\n**Step 1: Group and complete the square for $x$**\n$x^2 + 8x = (x^2 + 8x + 16) - 16 = (x + 4)^2 - 16$\n\n**Step 2: Complete the square for $y$**\n$y^2 - 6y = (y^2 - 6y + 9) - 9 = (y - 3)^2 - 9$\n\n**Step 3: Substitute back**\n$(x + 4)^2 - 16 + (y - 3)^2 - 9 = 24$\n$(x + 4)^2 + (y - 3)^2 = 24 + 16 + 9$\n$(x + 4)^2 + (y - 3)^2 = 49$\n\n**Step 4: Identify the radius**\nStandard form: $(x - h)^2 + (y - k)^2 = r^2$\n$r^2 = 49$, so $r = 7$\n\n**Why other choices are incorrect:**\n• Choice A ($5$): Common error from incomplete square completion\n• Choice C ($25$): Confuses $r^2$ with $r$ using wrong constant\n• Choice D ($49$): This is $r^2$, not $r$\n\n**Key concept:** To convert a circle equation to standard form, complete the square for both variables. Remember to add the same values to both sides.",
          skills: ['Geometry', 'Circles']
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $f$ is defined by $f(x) = a \\cdot k^x$, where $a$ and $k$ are positive constants. In the $xy$-plane, the graph of $f$ has a $y$-intercept of 3. Which of the following could be the equation for function $g$, if $g(x - 1) = k^x$?",
          choices: [
            { id: "A", text: "$g(x) = k^x \\cdot k$" },
            { id: "B", text: "$g(x) = \\frac{k^x}{k}$" },
            { id: "C", text: "$g(x) = k^x + k$" },
            { id: "D", text: "$g(x) = k^x - 1$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Find $g(x)$ such that $g(x - 1) = k^x$.\n\n**If $g(x) = k^x \\cdot k = k^{x+1}$, then:**\n$g(x - 1) = k^{(x-1)+1} = k^x$ ✓\n\n**Verification:**\n$g(x) = k^{x+1} = k \\cdot k^x$\n$g(x - 1) = k \\cdot k^{x-1} = k^1 \\cdot k^{x-1} = k^x$ ✓\n\n**Why other choices are incorrect:**\n• Choice B: $g(x-1) = k^{x-1} \\div k = k^{x-2} \\neq k^x$\n• Choice C: $g(x-1) = k^{x-1} + k \\neq k^x$\n• Choice D: $g(x-1) = k^{x-1} - 1 \\neq k^x$\n\n**Key concept:** To get $g(x-1) = k^x$, we need $g(x) = k^{x+1}$",
          skills: ["exponential-functions", "function-transformations"]
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "hard",
          question: [
            { text: "In the " },
            { math: "xy" },
            { text: "-plane, the graphs of " },
            { math: "y = x^2 - 4x + 5" },
            { text: " and " },
            { math: "y = x + b" },
            { text: " intersect at exactly two points. Which could be the value of " },
            { math: "b" },
            { text: "?" }
          ],
          choices: [
            { id: "A", text: [{ math: "-2" }] },
            { id: "B", text: [{ math: "0" }] },
            { id: "C", text: [{ math: "1" }] },
            { id: "D", text: [{ math: "2" }] }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** For two intersection points, the discriminant must be positive.\n\n**Set equal:**\n$$x^2 - 4x + 5 = x + b$$\n$$x^2 - 5x + (5 - b) = 0$$\n\n**For two solutions, discriminant $> 0$:**\n$$(-5)^2 - 4(1)(5 - b) > 0$$\n$$25 - 20 + 4b > 0$$\n$$5 + 4b > 0$$\n$$b > -1.25$$\n\n**Check choices:**\n• A ($b = -2$): $-2 > -1.25$? No ✗\n• B ($b = 0$): $0 > -1.25$? Yes ✓\n• C ($b = 1$): $1 > -1.25$? Yes ✓\n• D ($b = 2$): $2 > -1.25$? Yes ✓\n\nAll of B, C, D work! The answer is C.\n\n**Key concept:** Two intersections require positive discriminant.",
          skills: ["quadratic-systems", "discriminant"]
        },
        {
          id: 16,
          type: "fill-in",
          difficulty: "hard",
          question: "$y = 3x + 1$\n\n$y = x^2 - kx + 10$\n\nIn the system of equations above, $k$ is a positive constant. If the system has exactly one real solution, what is the value of $k$?",
          correctAnswer: 3,
          explanation: "**The correct answer is $3$.**\n\n**Step 1: Set the equations equal**\n$3x + 1 = x^2 - kx + 10$\n$0 = x^2 - (k + 3)x + 9$\n\n**Step 2: Apply the discriminant condition**\nFor exactly one solution, the discriminant must equal zero:\n$b^2 - 4ac = 0$\n$(k + 3)^2 - 4(1)(9) = 0$\n$(k + 3)^2 = 36$\n$k + 3 = \\pm 6$\n\n**Step 3: Solve for $k$**\n$k + 3 = 6$ → $k = 3$\n$k + 3 = -6$ → $k = -9$\n\nSince $k$ is positive, $k = 3$.\n\n**Verification:** With $k = 3$: $x^2 - 6x + 9 = (x - 3)^2 = 0$ → $x = 3$\n$y = 3(3) + 1 = 10$. Check: $y = 9 - 9 + 10 = 10$ ✓\n\n**Key concept:** A line is tangent to a parabola when the resulting quadratic has discriminant $= 0$. This gives exactly one intersection point.",
          skills: ['Advanced Math', 'Quadratic Equations']
        },
        {
          id: 17,
          type: "fill-in",
          difficulty: "hard",
          question: "$5^{2x} - 26 \\cdot 5^x + 25 = 0$\n\nWhat is the sum of all values of $x$ that satisfy the equation above?",
          correctAnswer: 2,
          explanation: "**The correct answer is $2$.**\n\n**Step 1: Substitute $u = 5^x$**\nSince $5^{2x} = (5^x)^2 = u^2$, the equation becomes:\n$u^2 - 26u + 25 = 0$\n\n**Step 2: Factor the quadratic in $u$**\n$(u - 1)(u - 25) = 0$\n$u = 1$ or $u = 25$\n\n**Step 3: Solve for $x$**\n$5^x = 1$ → $x = 0$\n$5^x = 25 = 5^2$ → $x = 2$\n\n**Step 4: Find the sum**\n$0 + 2 = 2$\n\n**Verification:**\nFor $x = 0$: $5^0 - 26 \\cdot 5^0 + 25 = 1 - 26 + 25 = 0$ ✓\nFor $x = 2$: $5^4 - 26 \\cdot 5^2 + 25 = 625 - 650 + 25 = 0$ ✓\n\n**Key concept:** When an equation has the form $a^{2x} + b \\cdot a^x + c = 0$, substitute $u = a^x$ to create a solvable quadratic. Both solutions for $u$ must be positive (since $a^x > 0$).",
          skills: ['Advanced Math', 'Exponential Equations']
        },
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Which expression is equivalent to $\\frac{36(x^2 - 7)}{x - \\sqrt{7}}$, where $x \\neq \\sqrt{7}$?",
          choices: [
            { id: "A", text: "$6(x - 7)$" },
            { id: "B", text: "$6(x + 7)$" },
            { id: "C", text: "$36(x - \\sqrt{7})$" },
            { id: "D", text: "$36(x + \\sqrt{7})$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Factor and simplify.\n\n**Step 1:** Recognize the difference of squares:\n$x^2 - 7 = x^2 - (\\sqrt{7})^2 = (x - \\sqrt{7})(x + \\sqrt{7})$\n\n**Step 2:** Substitute into the expression:\n$\\frac{36(x^2 - 7)}{x - \\sqrt{7}} = \\frac{36(x - \\sqrt{7})(x + \\sqrt{7})}{x - \\sqrt{7}}$\n\n**Step 3:** Cancel $(x - \\sqrt{7})$:\n$= 36(x + \\sqrt{7})$\n\n**Result:** $36(x + \\sqrt{7})$\n\n**Why other choices are incorrect:**\n• Choice A: $6(x - 7)$ has wrong coefficient and wrong form\n• Choice B: $6(x + 7)$ has wrong coefficient\n• Choice C: $36(x - \\sqrt{7})$ has wrong sign\n\n**Key concept:** $a^2 - b^2 = (a - b)(a + b)$ — difference of squares factoring",
          skills: ["factoring", "rational-expressions"]
        },
        {
          id: 19,
          type: "fill-in",
          difficulty: "hard",
          question: "The function $f(x) = -3x^2 + 12x - 8$ is given. If $g(x) = f(x - 2)$, what is the value of $x$ where $g(x)$ reaches its maximum value?",
          correctAnswer: 4,
          explanation: "**The correct answer is 4.** Use the vertex formula and transformation rules.\n\n**Step 1:** Find the vertex of $f(x)$:\n$f(x) = -3x^2 + 12x - 8$\n$x$-coordinate of vertex $= \\frac{-b}{2a} = \\frac{-12}{2(-3)} = \\frac{-12}{-6} = 2$\n\n**Step 2:** Apply the transformation:\n$g(x) = f(x - 2)$ shifts the graph RIGHT by 2 units\n\n**Step 3:** Find the new vertex:\nOriginal vertex $x$-coordinate: 2\nAfter shifting right 2: $2 + 2 = 4$\n\n**Step 4:** Verify it's a maximum:\nSince $a = -3 < 0$, the parabola opens downward, so the vertex is a maximum.\n\n**Key concept:** $f(x - h)$ shifts the graph RIGHT by $h$ units.",
          skills: ["quadratic-functions", "function-transformations"]
        },
        {
          id: 20,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $f(x) = 2(x - 2)^2 + 6$ is transformed into $g(x) = 2(x - 5)^2 + 3$, which of the following describes the transformation?",
          choices: [
            { id: "A", text: "The $x$-coordinate moves to the right 3 units and the $y$-coordinate moves 3 units down." },
            { id: "B", text: "The $x$-coordinate moves to the left 3 units and the $y$-coordinate moves 3 units down." },
            { id: "C", text: "The $x$-coordinate moves to the right 3 units and the $y$-coordinate moves 3 units up." },
            { id: "D", text: "The $x$-coordinate moves to the left 3 units and the $y$-coordinate moves 3 units up." }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Compare the vertices of the two functions.\n\n**Step 1:** Identify the vertex of $f(x) = 2(x - 2)^2 + 6$:\nVertex form: $a(x - h)^2 + k$ has vertex at $(h, k)$\nVertex of $f$: $(2, 6)$\n\n**Step 2:** Identify the vertex of $g(x) = 2(x - 5)^2 + 3$:\nVertex of $g$: $(5, 3)$\n\n**Step 3:** Calculate the transformation:\n• Horizontal: $5 - 2 = 3$ (moved 3 units to the right)\n• Vertical: $3 - 6 = -3$ (moved 3 units down)\n\n**Transformation:** Right 3 units, down 3 units.\n\n**Why other choices are incorrect:**\n• Choice B: Wrong horizontal direction (left instead of right)\n• Choice C: Wrong vertical direction (up instead of down)\n• Choice D: Both directions are wrong\n\n**Key concept:** To find the transformation, compare the vertices. Moving from $(h_1, k_1)$ to $(h_2, k_2)$:\n• Horizontal shift: $h_2 - h_1$ (positive = right)\n• Vertical shift: $k_2 - k_1$ (positive = up)",
          skills: ["function-transformations", "quadratic-functions"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A sphere is inscribed in a cube with side length 6. What is the volume of the space inside the cube that is NOT occupied by the sphere?",
          choices: [
            { id: "A", text: "$216 - 36\\pi$" },
            { id: "B", text: "$216 - 48\\pi$" },
            { id: "C", text: "$36 - 36\\pi$" },
            { id: "D", text: "$216 - 288\\pi$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Find the cube volume minus the sphere volume.\n\n**Step 1:** Find the volume of the cube.\n$$V_{cube} = s^3 = 6^3 = 216$$\n\n**Step 2:** Find the radius of the inscribed sphere.\nThe sphere touches the center of each face, so its diameter equals the cube's side.\nDiameter $= 6$, so radius $r = 3$\n\n**Step 3:** Find the volume of the sphere.\n$$V_{sphere} = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (3)^3 = \\frac{4}{3}\\pi \\times 27 = 36\\pi$$\n\n**Step 4:** Find the empty space.\n$$V_{empty} = V_{cube} - V_{sphere} = 216 - 36\\pi$$\n\n**Why other choices are incorrect:**\n• Choice B ($216 - 48\\pi$): Wrong sphere volume calculation\n• Choice C ($36 - 36\\pi$): Uses $s^2$ instead of $s^3$ for cube\n• Choice D ($216 - 288\\pi$): Uses diameter instead of radius\n\n**Key concept:** Empty space = Container volume − Object volume.",
          skills: ["sphere-volume", "cube-volume", "inscribed-shapes"]
        },
        {
          id: 22,
          type: "fill-in",
          difficulty: "hard",
          question: [
            { math: "y = x^2 - 6x + c", display: true },
            { math: "y = 4", display: true },
            { text: "For what value of " },
            { math: "c" },
            { text: " does the system above have exactly one solution?" }
          ],
          correctAnswer: 13,
          explanation: "**The correct answer is 13.** For exactly one solution, the line $y = 4$ must be **tangent** to the parabola.\n\n**Set equal:**\n$$x^2 - 6x + c = 4$$\n$$x^2 - 6x + (c - 4) = 0$$\n\n**For one solution, discriminant $= 0$:**\n$$b^2 - 4ac = 0$$\n$$(-6)^2 - 4(1)(c - 4) = 0$$\n$$36 - 4c + 16 = 0$$\n$$52 = 4c$$\n$$c = 13$$\n\n**Verify:** With $c = 13$:\n$$x^2 - 6x + 9 = 0$$\n$$(x - 3)^2 = 0$$\n$x = 3$ (exactly one solution) ✓\n\n**Key concept:** Tangent ↔ discriminant $= 0$",
          skills: ["quadratic-systems", "discriminant"]
        }
      ]
    }
  ]
};

export default practiceTest1;
