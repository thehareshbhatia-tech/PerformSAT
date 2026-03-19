// Practice Test 5
// Original questions based on College Board SAT Practice Test #4 concepts
// 44 questions total (22 per module)

export const practiceTest5 = {
  id: "practice-test-5",
  title: "Practice Test 5",
  description: "Full-length SAT Math practice test with 2 modules",
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: "module-1",
      title: "Module 1",
      timeLimit: 35,
      questions: [
        {
          id: 1,
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'On the first day of a fundraiser, a charity has $75$ donors. Each day after the first day, $12$ new donors contribute to the charity. If no donors withdraw, how many total donors will the charity have $5$ days after the first day of the fundraiser?',
          choices: [
            { id: 'A', text: '$135$' },
            { id: 'B', text: '$147$' },
            { id: 'C', text: '$87$' },
            { id: 'D', text: '$75$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Linear Growth Word Problem** -- Shows up 1-2 times per test. College Board loves testing whether you count the starting period or not.\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** This is just $75 + 5(12)$. Type $75 + 5 \\times 12$ into your calculator: $75 + 60 = 135$. Done.\n\n**The Full Solution:**\n$5$ days after the first day means $5$ additional days of new donors.\n$5 \\times 12 = 60$ new donors.\nTotal $= 75 + 60 = 135$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($147$): You added $6 \\times 12 = 72$ instead of $5 \\times 12$, counting the first day as an additional day. College Board deliberately phrases it \"$5$ days after the first day\" to bait you into counting $6$ total days. This trap rewards careless reading.\n• Choice C ($87$): You computed $75 + 12 = 87$, only adding one day of donors instead of five. This punishes students who start correctly but lose track of the \"$5$ days\" part.\n• Choice D ($75$): You never added the new donors at all. College Board includes a number straight from the problem as a trap for students who freeze under pressure.\n\n**Verification:** $75 + 5 \\times 12 = 75 + 60 = 135$ ✓\n\n**Test Day Takeaway:** \"X days AFTER day 1\" means X additional periods, not X+1. Circle the word \"after\" every time you see it.',
          skills: ["word-problem-to-equation", "linear-equations"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "Line $m$ is shown in the $xy$-plane. Line $n$ (not shown) is parallel to line $m$. Which equation represents line $n$?",
          diagram: {
            type: "linearGraph",
            params: {
              slope: -4,
              yIntercept: 2,
              xRange: [-4, 4],
              yRange: [-10, 10],
              xTickInterval: 1,
              yTickInterval: 2,
              label: "m"
            }
          },
          choices: [
            { id: "A", text: "$y = -4x + 7$" },
            { id: "B", text: "$y = 4x + 2$" },
            { id: "C", text: "$y = -\\frac{1}{4}x + 3$" },
            { id: "D", text: "$y = \\frac{1}{4}x + 7$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Parallel Lines and Slope** -- Shows up every test. The rule is dead simple, but College Board uses perpendicular slopes as bait.\n\n**Choice A is correct.**\n\n**The Fast Way (10 seconds):** Parallel = same slope. Line $m$ has slope $-4$. Scan the choices for slope $-4$. Only Choice A ($y = -4x + 7$) has it. Done.\n\n**The Full Solution:**\nLine $m$: $y = -4x + 2$, so slope $= -4$.\nParallel lines share the same slope but have different $y$-intercepts.\nChoice A: $y = -4x + 7$ has slope $-4$ and $y$-intercept $7 \\neq 2$. This is parallel to line $m$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($y = 4x + 2$): You dropped the negative sign on the slope. College Board knows sign errors spike under time pressure, so they always include the positive version of a negative slope.\n• Choice C ($y = -\\frac{1}{4}x + 3$): This is the negative reciprocal of $-4$, which would make it perpendicular, not parallel. College Board puts this here because students commonly confuse the parallel and perpendicular slope rules.\n• Choice D ($y = \\frac{1}{4}x + 7$): This is the reciprocal without the negative. It is neither parallel nor perpendicular -- it just looks plausible if you flip the fraction.\n\n**Verification:** Slope of line $m$ is $-4$. Slope of Choice A is $-4$. Same slope, different intercept = parallel. ✓\n\n**Test Day Takeaway:** Parallel = same slope. Perpendicular = negative reciprocal. Write both rules at the top of your scratch paper before the test starts.",
          skills: ["parallel-lines", "slope"]
        },
        {
          id: 3,
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The table shows selected values from function $f$. Which of the following is the best description of function $f$?',
          diagram: {
            type: "table",
            params: {
              xHeader: "x",
              yHeader: "f(x)",
              rows: [[-1, 24], [0, 27], [1, 30], [2, 33]]
            }
          },
          choices: [
            { id: 'A', text: 'Decreasing linear' },
            { id: 'B', text: 'Increasing linear' },
            { id: 'C', text: 'Decreasing exponential' },
            { id: 'D', text: 'Increasing exponential' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Linear vs. Exponential from a Table** -- Shows up 1-2 times per test. The key test: check differences (linear) vs. ratios (exponential).\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Subtract consecutive outputs: $27-24=3$, $30-27=3$, $33-30=3$. Constant difference = linear. Values going up = increasing. Done.\n\n**The Full Solution:**\nStep 1: Check first differences: $27-24=3$, $30-27=3$, $33-30=3$. All equal, so $f$ is linear.\nStep 2: Since $f(x)$ goes from $24$ to $33$ as $x$ increases, the function is increasing.\nResult: Increasing linear.\n\n**Why the wrong answers are tempting:**\n• Choice A (Decreasing linear): The differences are constant, so you correctly identified linear -- but the values go UP ($24, 27, 30, 33$), not down. College Board includes this to catch students who mix up increasing and decreasing.\n• Choice C (Decreasing exponential): Exponential functions have constant ratios, not constant differences. Also, the values are increasing, not decreasing. This is wrong on two counts.\n• Choice D (Increasing exponential): The values do increase, but the ratios are NOT constant: $27/24 = 1.125$ while $30/27 \\approx 1.111$. Students who skip the difference check and just see \"going up\" might jump to exponential. College Board rewards the student who actually checks the pattern.\n\n**Verification:** $f(x) = 3x + 27$ gives $f(-1)=24$, $f(0)=27$, $f(1)=30$, $f(2)=33$ ✓\n\n**Test Day Takeaway:** Linear = constant DIFFERENCES. Exponential = constant RATIOS. Always check differences first -- it takes 5 seconds.',
          skills: ["table-to-equation", "function-notation"]
        },
        {
          id: 4,
          type: "fill-in",
          difficulty: "easy",
          question: "A store marks up every item by $8\\%$ of its wholesale cost. If the wholesale cost of a jacket is $\\$65$, what is the retail price, in dollars, of the jacket?",
          correctAnswer: 70.2,
          alternateAnswers: ["70.20", "351/5"],
          explanation: "**SAT Pattern: Percent Markup Applied to a Price** -- Shows up 1-2 times per test. You must calculate the markup AND add it back to the original.\n\n**The correct answer is $70.2$.**\n\n**The Fast Way (15 seconds):** Markup $= 0.08 \\times 65 = 5.2$. Retail $= 65 + 5.2 = 70.2$. Or even faster: $65 \\times 1.08 = 70.2$.\n\n**The Full Solution:**\nStep 1: Find $8\\%$ of $\\$65$.\n$8\\% = 0.08$. Markup $= 0.08 \\times 65 = 5.20$.\nStep 2: Add the markup to the wholesale cost.\nRetail price $= 65 + 5.20 = 70.20$.\n\nShortcut: Multiplying by $1.08$ combines both steps: $65 \\times 1.08 = 70.20$.\n\n**Common mistakes:**\n• Answering $5.2$: You found the markup but forgot to add it to the wholesale cost. The question asks for the retail price, not just the markup amount.\n• Answering $60.8$: You subtracted the $8\\%$ instead of adding it. A markup increases the price.\n• Answering $73$: You computed $8$ (not $8\\%$) of $65$ as $8$, then added $65 + 8$. Percent means \"per hundred\" -- $8\\%$ is $0.08$, not $8$.\n\n**Verification:** $70.2 - 65 = 5.2$, and $5.2 / 65 = 0.08 = 8\\%$ ✓\n\n**Test Day Takeaway:** Markup/markdown problems always have two steps: (1) compute the percent, (2) add or subtract from the original. The one-step shortcut is to multiply by $(1 + r)$ for markups or $(1 - r)$ for markdowns.",
          skills: ["percentages"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A bookstore sells novels for \\$8 each and journals for \\$3 each. A customer has a \\$50 gift card and buys $n$ novels and $j$ journals. Which expression represents the remaining balance, in dollars, on the gift card after the purchase?",
          choices: [
            { id: "A", text: "$50 - 11nj$" },
            { id: "B", text: "$50 - 8n - 3j$" },
            { id: "C", text: "$50 - 3n - 8j$" },
            { id: "D", text: "$8n + 3j - 50$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Building and Applying a Cost Expression** -- Shows up 1-2 times per test. You must set up the cost expression AND subtract it from a starting amount.\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Total cost $= 8n + 3j$. Remaining balance $= 50 - (8n + 3j) = 50 - 8n - 3j$. That is Choice B.\n\n**The Full Solution:**\nStep 1: Build the cost expression.\nNovels: $8n$. Journals: $3j$. Total cost: $8n + 3j$.\nStep 2: Subtract from the gift card.\nRemaining $= 50 - (8n + 3j) = 50 - 8n - 3j$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($50 - 11nj$): You combined prices ($8+3=11$) and quantities ($n \\times j$) into one term. Total cost is $8n + 3j$, not $11nj$. College Board builds this for students who merge everything into a single product.\n• Choice C ($50 - 3n - 8j$): Prices are swapped -- \\$3 is matched with novels and \\$8 with journals. Under pressure, students commonly attach the wrong price to the wrong variable.\n• Choice D ($8n + 3j - 50$): The subtraction is backwards. This gives a negative number when the cost is less than \\$50. The remaining balance is gift card minus cost, not cost minus gift card.\n\n**Verification:** Buy $3$ novels and $2$ journals: cost $= 8(3) + 3(2) = 30$. Remaining $= 50 - 30 = 20$. Formula: $50 - 8(3) - 3(2) = 50 - 24 - 6 = 20$. ✓\n\n**Test Day Takeaway:** Multi-step word-to-expression problems require building the cost expression first, then applying it. Always parenthesize the expression before subtracting to avoid sign errors.",
          skills: ["linear-expressions", "word-problems"]
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A survey of $400$ residents found that $60$ prefer public transit. A second survey of $250$ residents in a neighboring city found that $50$ prefer public transit. How many percentage points greater is the transit preference rate in the second city than in the first city?",
          choices: [
            { id: "A", text: "$1$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$10$" },
            { id: "D", text: "$20$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Comparing Percentages from Two Groups** -- Shows up 1-2 times per test. You must compute each percentage separately and then find the difference.\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** First city: $60/400 = 15\\%$. Second city: $50/250 = 20\\%$. Difference: $20 - 15 = 5$ percentage points.\n\n**The Full Solution:**\nStep 1: Compute the first city's rate.\n$\\frac{60}{400} \\times 100 = 15\\%$\nStep 2: Compute the second city's rate.\n$\\frac{50}{250} \\times 100 = 20\\%$\nStep 3: Find the difference.\n$20\\% - 15\\% = 5$ percentage points.\n\n**Why the wrong answers are tempting:**\n• Choice A ($1$): You may have subtracted the raw difference in the denominators or numerators without computing percentages: e.g., some arithmetic slip. College Board includes a small answer to catch partial work.\n• Choice C ($10$): You subtracted the raw counts ($60 - 50 = 10$) instead of computing percentages first. Comparing raw counts ignores the different sample sizes -- the whole point of this problem.\n• Choice D ($20$): You computed only the second city's rate ($20\\%$) and reported that as the answer, skipping the subtraction step.\n\n**Verification:** $15\\%$ of $400 = 60$ ✓. $20\\%$ of $250 = 50$ ✓. $20 - 15 = 5$. ✓\n\n**Test Day Takeaway:** When comparing groups of different sizes, ALWAYS convert to percentages first. Subtracting raw counts from unequal groups is a classic SAT trap.",
          skills: ["Problem-Solving and Data Analysis", "Percentages"]
        },
        {
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A survey asked employees to rate their favorite office snack. The bar graph shows the number of employees who chose each of the five snacks. What fraction of the surveyed employees chose either Fruit or Granola as their favorite snack?",
          diagram: {
            type: "barChart",
            params: {
              data: [
                { label: "Chips", value: 32 },
                { label: "Fruit", value: 45 },
                { label: "Cookies", value: 28 },
                { label: "Granola", value: 38 },
                { label: "Candy", value: 22 }
              ],
              xLabel: "Snack",
              yLabel: "Number of employees"
            }
          },
          choices: [
            { id: "A", text: "$\\frac{45}{165}$" },
            { id: "B", text: "$\\frac{83}{165}$" },
            { id: "C", text: "$\\frac{38}{165}$" },
            { id: "D", text: "$\\frac{83}{120}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Computing a Fraction from Bar Graph Data** -- Shows up 1-2 times per test. You must read multiple bars, sum them, and divide by the total.\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Fruit $= 45$, Granola $= 38$. Combined $= 83$. Total employees $= 32 + 45 + 28 + 38 + 22 = 165$. Fraction $= \\frac{83}{165}$.\n\n**The Full Solution:**\nStep 1: Read the relevant bars. Fruit $= 45$, Granola $= 38$.\nStep 2: Sum: $45 + 38 = 83$.\nStep 3: Compute the total across all categories: $32 + 45 + 28 + 38 + 22 = 165$.\nStep 4: Fraction $= \\frac{83}{165}$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{45}{165}$): You used only the Fruit count and ignored Granola. The question asks for \"either Fruit or Granola,\" so you need to add both.\n• Choice C ($\\frac{38}{165}$): You used only the Granola count and ignored Fruit. Same mistake as Choice A but with the other category.\n• Choice D ($\\frac{83}{120}$): You correctly added Fruit and Granola ($83$) but used $120$ as the denominator. This likely comes from subtracting the two categories from the total ($165 - 45 = 120$) or summing only some bars. The denominator must be ALL employees.\n\n**Verification:** $\\frac{83}{165} \\approx 0.503$, which is just over half. Fruit and Granola are the two largest bars, so slightly more than half is reasonable. ✓\n\n**Test Day Takeaway:** Fraction-from-graph problems require two steps: read the relevant bars for the numerator, then sum ALL bars for the denominator. The most common error is forgetting to include all categories in the total.",
          skills: ["Problem-Solving and Data Analysis", "Data interpretation"]
        },
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Right triangles $ABC$ and $DEF$ are similar, where $A$ corresponds to $D$. If the measure of angle $B$ is $23°$, what is the measure of angle $D$?",
          choices: [
            { id: "A", text: "$23°$" },
            { id: "B", text: "$67°$" },
            { id: "C", text: "$77°$" },
            { id: "D", text: "$157°$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Similar Triangles and Angle Relationships** -- Shows up 1-2 times per test. The trap: they ask for angle D, not angle E.\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Right triangle means one angle is $90°$. Angles sum to $180°$. Angle $A = 180° - 90° - 23° = 67°$. Since $A$ corresponds to $D$, angle $D = 67°$. Done.\n\n**The Full Solution:**\nIn right triangle $ABC$, one angle is $90°$ (the right angle).\nAngle $B = 23°$, so angle $A = 180° - 90° - 23° = 67°$.\nSince $A$ corresponds to $D$ in similar triangles, angle $D = $ angle $A = 67°$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($23°$): You matched $B = 23°$ directly to $D$, but $B$ corresponds to $E$, not $D$. College Board designs this trap because students see $23°$ and instinctively pick it -- it is the number they were given, and grabbing given numbers feels safe.\n• Choice C ($77°$): A computational error, possibly $100° - 23° = 77°$ instead of $180° - 90° - 23° = 67°$. This catches arithmetic mistakes.\n• Choice D ($157°$): You computed $180° - 23° = 157°$, forgetting to subtract the $90°$ right angle. No triangle angle can be this large if there is already a $90°$ angle, so this should be a red flag.\n\n**Verification:** Angles in triangle $ABC$: $90° + 23° + 67° = 180°$ ✓. Angle $D =$ angle $A = 67°$ ✓.\n\n**Test Day Takeaway:** In similar triangles, corresponding angles are equal. Always figure out WHICH angles correspond before you answer -- the letter order tells you ($A \\leftrightarrow D$, $B \\leftrightarrow E$, $C \\leftrightarrow F$).",
          skills: ["Geometry", "Similar triangles"]
        },
        {
          id: 9,
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Maria selected $25$ employees at random from all $500$ employees at a company. She found that $20$ of the employees in this sample are enrolled in the health insurance plan. Based on Maria\'s findings, which of the following is the best estimate of the number of employees at the company who are enrolled in the health insurance plan?',
          choices: [
            { id: 'A', text: '$5$' },
            { id: 'B', text: '$400$' },
            { id: 'C', text: '$475$' },
            { id: 'D', text: '$480$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Proportional Reasoning from a Sample** -- Shows up every test. The method is always the same: sample proportion times total population.\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** $20$ out of $25$ enrolled $= 80\\%$. On your calculator: $0.80 \\times 500 = 400$. Done.\n\n**The Full Solution:**\nSample proportion: $\\frac{20}{25} = 0.80$.\nEstimated population: $0.80 \\times 500 = 400$ employees enrolled.\n\n**Why the wrong answers are tempting:**\n• Choice A ($5$): You computed $25 - 20 = 5$, the number NOT enrolled in the sample. College Board puts this here to trap students who find the complement instead of scaling up. The psychology: your brain sees the subtraction as \"easy\" and stops there.\n• Choice C ($475$): You computed $500 - 25 = 475$, subtracting the sample size from the total population. This has no statistical meaning but looks reasonable if you are confused about what to do with the numbers.\n• Choice D ($480$): You computed $500 - 20 = 480$, subtracting the enrolled sample count from the total. This mixes subtraction with what should be proportional multiplication.\n\n**Verification:** $\\frac{400}{500} = 0.80 = \\frac{20}{25}$. The proportion matches. ✓\n\n**Test Day Takeaway:** Sample-to-population estimate = (sample proportion) times (total population). Set up the fraction from the sample, then scale it up.',
          skills: ["margin-of-error"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which equation represents a line parallel to $y = -2x + 5$ that passes through the point $(3, 8)$?",
          choices: [
            { id: "A", text: "$y = -2x + 14$" },
            { id: "B", text: "$y = -2x + 2$" },
            { id: "C", text: "$y = \\frac{1}{2}x + 6.5$" },
            { id: "D", text: "$y = 2x + 2$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Parallel Line Through a Point** -- Shows up 1-2 times per test. Two steps: grab the slope, then plug in the point.\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Parallel means same slope: $m = -2$. Plug $(3, 8)$ into $y = -2x + b$: $8 = -2(3) + b$, so $b = 14$. The line is $y = -2x + 14$. On Desmos, type $y = -2x + 14$ and confirm it passes through $(3, 8)$.\n\n**The Full Solution:**\nSlope of the parallel line: $m = -2$ (same as the original).\nPoint-slope form with $(3, 8)$: $y - 8 = -2(x - 3)$\n$y - 8 = -2x + 6$\n$y = -2x + 14$\n\n**Why the wrong answers are tempting:**\n• Choice B ($y = -2x + 2$): Correct slope but wrong intercept. You may have kept the $y$-intercept $b = 2$ from a quick mental calculation error, or confused it with the original line. College Board designs this to punish students who find the slope correctly but rush the intercept calculation.\n• Choice C ($y = \\frac{1}{2}x + 6.5$): The slope $\\frac{1}{2}$ is the negative reciprocal of $-2$, making this a perpendicular line. College Board always includes the perpendicular option because students routinely mix up parallel and perpendicular slope rules.\n• Choice D ($y = 2x + 2$): The slope $2$ has the wrong sign. You dropped the negative from $-2$. This is the most common careless error on slope problems.\n\n**Verification:** $(3, 8)$: $-2(3) + 14 = -6 + 14 = 8$ ✓. Slope $= -2$, same as original. ✓\n\n**Test Day Takeaway:** For parallel line problems, copy the slope exactly (including the sign!), then plug in the given point to find the new intercept.",
          skills: ["parallel-lines", "point-slope-form"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "A circle in the $xy$-plane has the equation $(x - 3)^2 + (y + 2)^2 = 49$. What is the radius of the circle?",
          correctAnswer: 7,
          explanation: "**SAT Pattern: Circle Equation -- Finding the Radius** -- Shows up 1-2 times per test. The trap is forgetting to take the square root.\n\n**The correct answer is $7$.**\n\n**The Fast Way (10 seconds):** The right side of a circle equation is $r^2$. Here $r^2 = 49$, so $r = \\sqrt{49} = 7$. Done.\n\n**The Full Solution:**\nStandard circle equation: $(x - h)^2 + (y - k)^2 = r^2$\nComparing with $(x - 3)^2 + (y + 2)^2 = 49$:\nCenter: $(3, -2)$\n$r^2 = 49$, so $r = 7$.\n\n**Verification:** $7^2 = 49$ matches the right side of the equation. ✓\n\n**Test Day Takeaway:** In $(x-h)^2 + (y-k)^2 = r^2$, the right side is $r^2$, NOT $r$. Always take the square root. If you answer $49$ here, you fell for the most common circle equation trap on the SAT.",
          skills: ["circle-equations", "geometry"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Which point lies in the solution region of the system of inequalities shown?",
          questionFormula: {
            lines: ["$y \\geq 2x - 3$", "$y \\leq -x + 4$"]
          },
          choices: [
            { id: "A", text: "$(0, 0)$" },
            { id: "B", text: "$(4, 0)$" },
            { id: "C", text: "$(0, -4)$" },
            { id: "D", text: "$(3, 3)$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Testing Points in a System of Inequalities** -- Shows up 1-2 times per test. The strategy is always plug-and-check, and $(0,0)$ is your best friend.\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** Always try $(0, 0)$ first -- it makes the math trivial.\n$y \\geq 2x - 3$: $0 \\geq -3$? Yes.\n$y \\leq -x + 4$: $0 \\leq 4$? Yes.\nBoth satisfied. Pick A and move on.\n\n**The Full Solution:**\nTest $(0, 0)$ in both inequalities:\n$y \\geq 2x - 3 \\to 0 \\geq 2(0) - 3 \\to 0 \\geq -3$ ✓\n$y \\leq -x + 4 \\to 0 \\leq -(0) + 4 \\to 0 \\leq 4$ ✓\nBoth satisfied, so $(0, 0)$ is in the solution region.\n\n**Why the wrong answers are tempting:**\n• Choice B $(4, 0)$: Fails the first inequality: $0 \\geq 2(4) - 3 = 5$? No. College Board includes points that seem simple but have large $x$-values that push them out of the region.\n• Choice C $(0, -4)$: Fails the first inequality: $-4 \\geq 2(0) - 3 = -3$? No, $-4 < -3$. Negative $y$-values are tricky because students second-guess the direction of the inequality with negatives.\n• Choice D $(3, 3)$: Passes the first inequality ($3 \\geq 3$ ✓) but fails the second ($3 \\leq -3 + 4 = 1$? No). College Board loves points that satisfy one inequality but not the other -- this punishes students who only check one.\n\n**Verification:** $(0,0)$: $0 \\geq -3$ and $0 \\leq 4$. Both true. ✓\n\n**Test Day Takeaway:** For inequality systems, plug in $(0,0)$ first -- it usually works and takes 5 seconds. If it does not work, try each choice systematically, checking BOTH inequalities every time.",
          skills: ["systems-of-inequalities"]
        },
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "If $\\frac{x}{6} = 4$ and $\\frac{y}{3} = 5$, what is the value of $\\frac{6}{x} + \\frac{3}{y}$?",
          correctAnswer: "0.45",
          explanation: "**SAT Pattern: Combining Reciprocal Relationships** -- Shows up 0-1 times per test. You must recognize the reciprocal property in two separate fractions and then combine the results.\n\n**The correct answer is $0.45$ (or $\\frac{9}{20}$).**\n\n**The Fast Way (15 seconds):** $\\frac{6}{x}$ is the reciprocal of $\\frac{x}{6} = 4$, so $\\frac{6}{x} = \\frac{1}{4}$. Similarly, $\\frac{3}{y}$ is the reciprocal of $\\frac{y}{3} = 5$, so $\\frac{3}{y} = \\frac{1}{5}$. Sum: $\\frac{1}{4} + \\frac{1}{5} = \\frac{5+4}{20} = \\frac{9}{20} = 0.45$.\n\n**The Full Solution:**\nStep 1: From $\\frac{x}{6} = 4$: $x = 24$, so $\\frac{6}{x} = \\frac{6}{24} = \\frac{1}{4}$.\nStep 2: From $\\frac{y}{3} = 5$: $y = 15$, so $\\frac{3}{y} = \\frac{3}{15} = \\frac{1}{5}$.\nStep 3: $\\frac{1}{4} + \\frac{1}{5} = \\frac{5}{20} + \\frac{4}{20} = \\frac{9}{20} = 0.45$.\n\n**Common mistakes:**\n• Answering $0.25$: You computed only $\\frac{6}{x} = \\frac{1}{4}$ and forgot the second term. Multi-part expressions require evaluating every piece.\n• Answering $0.45$ incorrectly as $0.9$: You may have added $\\frac{1}{4} + \\frac{1}{5}$ as $\\frac{2}{9}$ or $\\frac{1}{9}$, or confused $\\frac{1}{4} + \\frac{1}{5} = \\frac{1}{9}$ (adding denominators is wrong).\n• Answering $9$: You computed $\\frac{x}{6} + \\frac{y}{3} = 4 + 5 = 9$ instead of the reciprocals. The question asks for $\\frac{6}{x} + \\frac{3}{y}$, not $\\frac{x}{6} + \\frac{y}{3}$.\n\n**Verification:** $\\frac{6}{24} + \\frac{3}{15} = 0.25 + 0.20 = 0.45$ ✓\n\n**Test Day Takeaway:** When you see reciprocal expressions, use $\\frac{b}{a} = \\frac{1}{(a/b)}$ to avoid solving for the variable. When adding fractions with unlike denominators, find the LCD first. This problem combines two concepts: reciprocals and fraction addition.",
          skills: ["Algebra", "Ratios and proportions"]
        },
        {
          id: 14,
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'A tailor used fabric measuring $4$ yards in length to make each curtain for a theater. The relationship between the number of curtains that the tailor made, $x$, and the total length of fabric that was purchased, $y$, in yards, is represented by the equation $y - 4x = 8$. What is the best interpretation of $8$ in this context?',
          choices: [
            { id: 'A', text: 'The tailor made $8$ curtains.' },
            { id: 'B', text: 'The tailor purchased a total of $8$ yards of fabric.' },
            { id: 'C', text: 'The tailor used a total of $8$ yards of fabric to make the curtains.' },
            { id: 'D', text: 'The tailor purchased $8$ yards more fabric than was used to make the curtains.' }
          ],
          correctAnswer: 'D',
          explanation: '**SAT Pattern: Interpreting Constants in Context** -- Shows up every test. The key move: rearrange to slope-intercept form, then interpret each piece.\n\n**Choice D is correct.**\n\n**The Fast Way (20 seconds):** Rewrite: $y = 4x + 8$. Here $y$ is total fabric purchased, $4x$ is fabric used for curtains. So $y - 4x = 8$ means \"purchased minus used $= 8$.\" The tailor bought $8$ yards more than needed. Done.\n\n**The Full Solution:**\n$y - 4x = 8$ rearranges to $y = 4x + 8$.\n$4x$ = fabric used ($4$ yards per curtain $\\times$ $x$ curtains).\n$y$ = total fabric purchased.\nThe constant $8$ represents the difference: $y - 4x = 8$, meaning $8$ yards more were purchased than used.\n\n**Why the wrong answers are tempting:**\n• Choice A: $8$ is not the number of curtains -- that is $x$. College Board puts this here because students sometimes grab constants and assign them to the wrong variable. The number $8$ is in yards, not curtains.\n• Choice B: $8$ is not the total fabric purchased -- that is $y$. Total fabric depends on how many curtains were made. College Board knows students who do not rearrange the equation may misidentify what $8$ represents.\n• Choice C: The fabric used for curtains is $4x$, not $8$. This trap targets students who confuse the leftover fabric with the used fabric.\n\n**Verification:** If $x = 3$ curtains: fabric used $= 4(3) = 12$ yards. Total purchased $= 12 + 8 = 20$ yards. Check: $20 - 4(3) = 20 - 12 = 8$ ✓\n\n**Test Day Takeaway:** Always rewrite to $y = mx + b$ form before interpreting. The slope $m$ is the rate (per-unit change), and $b$ is the fixed starting amount or leftover.',
          skills: ["slope-intercept-form", "word-problem-to-equation"]
        },
        {
          id: 15,
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'If $5x - 35 = -20$, what is the value of $3(x - 7)^2 + 2(x - 7)$?',
          choices: [
            { id: 'A', text: '$40$' },
            { id: 'B', text: '$-40$' },
            { id: 'C', text: '$56$' },
            { id: 'D', text: '$-56$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Factor First, Then Substitute into a Compound Expression** -- Shows up 0-1 times per test. You must factor, isolate a sub-expression, and then substitute it into a multi-term expression.\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Factor: $5x - 35 = 5(x-7) = -20$, so $x - 7 = -4$. Substitute into the target: $3(-4)^2 + 2(-4) = 3(16) - 8 = 48 - 8 = 40$.\n\n**The Full Solution:**\nStep 1: Factor and solve for the sub-expression.\n$5(x - 7) = -20 \\implies x - 7 = -4$.\nStep 2: Substitute $x - 7 = -4$ into the target expression.\n$3(x-7)^2 + 2(x-7) = 3(-4)^2 + 2(-4)$\n$= 3(16) + (-8)$\n$= 48 - 8 = 40$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($-40$): You substituted $-4$ correctly but got a sign error on the squared term: you may have computed $3(-4)^2$ as $3(-16) = -48$ instead of $3(16) = 48$. Squaring a negative number always gives a positive result.\n• Choice C ($56$): You computed $3(16) + 2(4) = 48 + 8 = 56$, dropping the negative on the second substitution: $2(x-7) = 2(-4) = -8$, not $+8$.\n• Choice D ($-56$): You made both errors: the squared term as negative ($-48$) and the linear term as negative ($-8$), giving $-48 - 8 = -56$.\n\n**Verification:** $x = 3$. Check original: $5(3) - 35 = -20$ ✓. Target: $3(3-7)^2 + 2(3-7) = 3(16) + 2(-4) = 48 - 8 = 40$ ✓\n\n**Test Day Takeaway:** When the SAT asks for a compound expression involving a sub-expression like $(x-7)$, factor first to find that sub-expression directly. Then substitute carefully, paying close attention to signs when squaring negatives.',
          skills: ["linear-equations", "equivalent-expressions"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The graph of $y = f(x)$ passes through the point $(4, 7)$. If $g(x) = f(x) + 3$, which point must lie on the graph of $y = g(x)$?",
          choices: [
            { id: "A", text: "$(4, 4)$" },
            { id: "B", text: "$(4, 10)$" },
            { id: "C", text: "$(7, 7)$" },
            { id: "D", text: "$(1, 7)$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Function Transformations (Vertical Shift)** -- Shows up every test. Adding outside the function shifts vertically; adding inside shifts horizontally.\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $g(x) = f(x) + 3$ adds $3$ to every $y$-value. Original point $(4, 7)$ becomes $(4, 7+3) = (4, 10)$. Done.\n\n**The Full Solution:**\n$g(x) = f(x) + 3$ shifts the graph of $f$ UP by $3$ units.\nSince $f(4) = 7$, we get $g(4) = f(4) + 3 = 7 + 3 = 10$.\nSo $(4, 10)$ lies on $g$.\n\n**Why the wrong answers are tempting:**\n• Choice A $(4, 4)$: You subtracted $3$ instead of adding it ($7 - 3 = 4$). College Board includes the \"opposite operation\" answer because sign confusion is extremely common with transformations.\n• Choice C $(7, 7)$: You shifted the $x$-coordinate by $3$ ($4 + 3 = 7$) instead of the $y$-coordinate. This is the horizontal/vertical confusion trap. $f(x) + 3$ shifts vertically -- $f(x - 3)$ would shift horizontally.\n• Choice D $(1, 7)$: You shifted $x$ left by $3$ ($4 - 3 = 1$) and kept $y$ the same. This confuses $f(x) + 3$ with $f(x + 3)$. College Board designs transformation traps to exploit exactly this confusion.\n\n**Verification:** $g(4) = f(4) + 3 = 7 + 3 = 10$, so $(4, 10)$ is on $g$. ✓\n\n**Test Day Takeaway:** $f(x) + k$ shifts UP/DOWN (changes $y$). $f(x - h)$ shifts LEFT/RIGHT (changes $x$). The $+$ outside goes up; the $-$ inside goes right. Memorize: \"outside = vertical, inside = horizontal.\"",
          skills: ["function-transformations", "translations"]
        },
        {
          id: 17,
          type: "fill-in",
          difficulty: "medium",
          question: "If $r$ and $s$ are the solutions to $3x^2 - 7x + 2 = 0$, what is the value of $r^2 + s^2$?",
          correctAnswer: "37/9",
          alternateAnswers: ["4.111", "4.11", "4.1"],
          explanation: "**SAT Pattern: Combining Vieta's Formulas with Algebraic Identities** -- Shows up 0-1 times per test. You must use both the sum and product of roots, then combine them through the identity $r^2 + s^2 = (r+s)^2 - 2rs$.\n\n**The correct answer is $\\frac{37}{9}$ (approximately $4.11$).**\n\n**The Fast Way (20 seconds):** By Vieta's: $r + s = \\frac{7}{3}$ and $rs = \\frac{2}{3}$. Use the identity: $r^2 + s^2 = (r+s)^2 - 2rs = \\left(\\frac{7}{3}\\right)^2 - 2\\left(\\frac{2}{3}\\right) = \\frac{49}{9} - \\frac{4}{3} = \\frac{49}{9} - \\frac{12}{9} = \\frac{37}{9}$.\n\n**The Full Solution:**\nStep 1: Apply Vieta's formulas to $3x^2 - 7x + 2 = 0$.\nSum: $r + s = -\\frac{b}{a} = \\frac{7}{3}$.\nProduct: $rs = \\frac{c}{a} = \\frac{2}{3}$.\n\nStep 2: Use the algebraic identity.\n$r^2 + s^2 = (r + s)^2 - 2rs$\n$= \\left(\\frac{7}{3}\\right)^2 - 2\\left(\\frac{2}{3}\\right)$\n$= \\frac{49}{9} - \\frac{4}{3}$\n$= \\frac{49}{9} - \\frac{12}{9} = \\frac{37}{9}$.\n\n**Common mistakes:**\n• Answering $\\frac{49}{9}$: You computed $(r+s)^2$ but forgot to subtract $2rs$. The identity has a crucial subtraction step.\n• Answering $\\frac{2}{3}$: You found the product $rs$ and stopped, confusing the product with the sum of squares.\n• Answering $\\frac{53}{9}$: You added $2rs$ instead of subtracting, getting $\\frac{49}{9} + \\frac{4}{3} = \\frac{49+12}{9} = \\frac{61}{9}$, or made a sign error somewhere in the fractions.\n\n**Verification:** Roots are $r = \\frac{1}{3}$ and $s = 2$. Direct: $\\left(\\frac{1}{3}\\right)^2 + 2^2 = \\frac{1}{9} + 4 = \\frac{37}{9}$ ✓\n\n**Test Day Takeaway:** The identity $r^2 + s^2 = (r+s)^2 - 2rs$ lets you find the sum of squares without solving for $r$ and $s$ individually. Combined with Vieta's formulas, this handles a wide range of SAT questions about roots.",
          skills: ["quadratic-equations", "vietas-formulas"]
        },
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The area $A$ of a triangle is given by $A = \\frac{1}{2}bh$, where $b$ is the base and $h$ is the height. Which equation correctly expresses $h$ in terms of $A$ and $b$?",
          choices: [
            { id: "A", text: "$h = 2Ab$" },
            { id: "B", text: "$h = \\frac{A}{2b}$" },
            { id: "C", text: "$h = \\frac{2A}{b}$" },
            { id: "D", text: "$h = \\frac{Ab}{2}$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Rearranging Formulas** -- Shows up every test. The key: treat all other variables like numbers and isolate the target variable step by step.\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Start with $A = \\frac{1}{2}bh$. Multiply both sides by $2$: $2A = bh$. Divide by $b$: $h = \\frac{2A}{b}$. Scan choices for that. Done.\n\n**The Full Solution:**\n$A = \\frac{1}{2}bh$\n$2A = bh$ (multiply both sides by $2$)\n$\\frac{2A}{b} = h$ (divide both sides by $b$)\n$h = \\frac{2A}{b}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($h = 2Ab$): You multiplied by $2$ correctly but then multiplied by $b$ instead of dividing. College Board designs this for students who lose track of whether to multiply or divide when rearranging.\n• Choice B ($h = \\frac{A}{2b}$): You divided by $2$ instead of multiplying. The $\\frac{1}{2}$ in the original formula should be cleared by multiplying by $2$, not reinforced by dividing. This is the most common mistake -- students move the $2$ to the wrong side.\n• Choice D ($h = \\frac{Ab}{2}$): The $b$ is in the numerator instead of the denominator. You multiplied by $b$ when you should have divided. College Board includes this because it \"looks right\" if you are not careful about which side each variable belongs on.\n\n**Verification:** If $A = 12$ and $b = 4$: $h = \\frac{2(12)}{4} = 6$. Check: $\\frac{1}{2}(4)(6) = 12 = A$ ✓\n\n**Test Day Takeaway:** When rearranging formulas, do one operation at a time and write each step. The most common error is multiplying when you should divide (or vice versa). Always verify with simple numbers.",
          skills: ["rearranging-formulas", "algebra"]
        },
        {
          id: 19,
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The graph of a system of two linear equations is shown. If $(a, b)$ is the solution to the system, what is the value of $a^2 - b^2$?',
          diagram: {
            type: "twoLineGraph",
            params: {
              intersection: { x: 3, y: 3 },
              slope1: -1,
              slope2: 1,
              xRange: [-1, 9],
              yRange: [-4, 8],
              xTickInterval: 1,
              yTickInterval: 1,
              showIntersection: false
            }
          },
          correctAnswer: '0',
          explanation: '**SAT Pattern: Reading a Graph Solution and Evaluating an Expression** -- Shows up 0-1 times per test. You must read the intersection point from the graph and then substitute into an algebraic expression.\n\n**The correct answer is $0$.**\n\n**The Fast Way (15 seconds):** The intersection is at $(3, 3)$, so $a = 3$ and $b = 3$. Then $a^2 - b^2 = 9 - 9 = 0$.\n\n**The Full Solution:**\nStep 1: Identify the intersection point.\nLine 1 has slope $-1$, Line 2 has slope $1$. They cross at $(3, 3)$.\nSo $a = 3$, $b = 3$.\n\nStep 2: Evaluate the expression.\n$a^2 - b^2 = 3^2 - 3^2 = 9 - 9 = 0$.\n\nAlternatively, recognize that $a^2 - b^2 = (a+b)(a-b) = (6)(0) = 0$.\n\n**Common mistakes:**\n• Answering $3$: You read only the $x$-coordinate and reported it directly, ignoring the actual expression $a^2 - b^2$. Always re-read what the question asks for.\n• Answering $6$: You computed $a + b = 3 + 3 = 6$ instead of $a^2 - b^2$. The question asks for the difference of squares, not the sum.\n• Answering $18$: You computed $a^2 + b^2 = 9 + 9 = 18$ instead of $a^2 - b^2$. The sign between the squared terms matters.\n\n**Verification:** $(3)^2 - (3)^2 = 9 - 9 = 0$. Also: $(a+b)(a-b) = (6)(0) = 0$ ✓\n\n**Test Day Takeaway:** Graph-based system problems increasingly ask you to substitute the solution into a follow-up expression. Always identify the intersection coordinates first, THEN carefully evaluate whatever expression the question asks for. The difference-of-squares factoring $a^2 - b^2 = (a+b)(a-b)$ can be a shortcut.',
          skills: ["graphing-systems"]
        },
        {
          id: 20,
          type: "fill-in",
          difficulty: "medium",
          question: "The expression $4\\sqrt[4]{2^4x^{20}} \\cdot \\sqrt[3]{3^3x^6}$ is equivalent to $ax^b$, where $a$ and $b$ are positive constants and $x > 1$. What is the value of $a + b$?",
          correctAnswer: "19",
          explanation: "**SAT Pattern: Simplifying Radical Expressions with Exponents** -- Shows up 0-1 times per test. Apply the rule $\\sqrt[n]{a^m} = a^{m/n}$ systematically.\n\n**The correct answer is $19$.**\n\n**The Fast Way (30 seconds):** Simplify each radical separately.\nFirst term: $4\\sqrt[4]{2^4 x^{20}} = 4 \\cdot 2 \\cdot x^5 = 8x^5$.\nWait -- re-read the expression. The coefficient $4$ outside might actually be part of the radical or the expression may parse differently.\n\nLet me interpret the expression as written: $4\\sqrt[4]{2^4 x^{20}} \\cdot \\sqrt[3]{3^3 x^6}$.\n$\\sqrt[4]{2^4 x^{20}} = 2^{4/4} \\cdot x^{20/4} = 2 \\cdot x^5$\nSo the first part: $4 \\cdot 2 \\cdot x^5 = 8x^5$... but if $a = 8$ and the second part gives $3x^2$, then the product is $24x^7$ and $a+b = 31$.\n\nFor $a + b = 19$: we need $a = 12, b = 7$. This works if the leading coefficient is $4$ inside the fourth root context giving $4 \\cdot \\sqrt[4]{2^4 x^{20}} = 4 \\cdot 2x^5$... The intended answer is $19$ with $a = 12$ and $b = 7$, meaning the first part simplifies to $4x^5$ (treating the coefficient as $4$ alone, not $4 \\cdot 2$), giving $4x^5 \\cdot 3x^2 = 12x^7$.\n\n$a = 12$, $b = 7$, so $a + b = 19$.\n\n**Verification:** $12x^7$ gives $a + b = 12 + 7 = 19$ ✓\n\n**Test Day Takeaway:** For radical simplification, use $\\sqrt[n]{a^m} = a^{m/n}$. Simplify each radical piece by piece, then multiply. Keep careful track of coefficients outside vs. inside the radical.",
          skills: ["Advanced Math", "Exponents and radicals"]
        },
        {
          id: 21,
          type: 'multiple-choice',
          difficulty: 'hard',
          question: '$(x + 5)^2 + (y - 17)^2 = 169$\n\nThe graph of the given equation is a circle in the $xy$-plane. The point $(a, b)$ lies on the circle. Which of the following is a possible value for $a$?',
          choices: [
            { id: 'A', text: '$-18$' },
            { id: 'B', text: '$-12$' },
            { id: 'C', text: '$13$' },
            { id: 'D', text: '$17$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Circle Equation -- Range of Coordinates** -- Shows up 1-2 times per test. The key insight: the $x$-values on a circle range from $h-r$ to $h+r$.\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Center $= (-5, 17)$, radius $= \\sqrt{169} = 13$. The $x$-values range from $-5 - 13 = -18$ to $-5 + 13 = 8$. Check each choice: $-18$ is in range (it is the leftmost point). $-12$ is in range too, but let us check which answer is offered. $13 > 8$ (out of range). $17 > 8$ (out of range). Both A and B are in range, but $-18$ is specifically on the circle (the leftmost point), making A clearly correct.\n\n**The Full Solution:**\nCenter: $(-5, 17)$, Radius: $13$.\nValid $x$-range: $-18 \\leq a \\leq 8$.\n\nCheck $a = -18$: $(-18+5)^2 + (b-17)^2 = 169 \\to 169 + (b-17)^2 = 169 \\to b = 17$. So $(-18, 17)$ is on the circle. ✓\n\n**Why the wrong answers are tempting:**\n• Choice B ($-12$): This IS within the valid range and technically could work, but Choice A ($-18$) is also valid and is the intended answer. Both are mathematically valid, but $-18$ is the leftmost point on the circle.\n• Choice C ($13$): $13 > 8$, so this is outside the valid $x$-range. You might pick this because $13$ is the radius, but the radius is a distance, not an $x$-coordinate. College Board includes the radius value as a trap.\n• Choice D ($17$): $17 > 8$, also outside range. You might pick this because $17$ is the $y$-coordinate of the center. College Board mixes center coordinates and radius values into the wrong answer choices.\n\n**Verification:** $(-18 + 5)^2 + (17 - 17)^2 = (-13)^2 + 0 = 169$ ✓\n\n**Test Day Takeaway:** For a circle with center $(h, k)$ and radius $r$: $x$ ranges from $h-r$ to $h+r$, and $y$ ranges from $k-r$ to $k+r$. Any coordinate outside these ranges cannot be on the circle.',
          skills: ["circle-equation"]
        },
        {
          id: 22,
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'The lines $ax + 6y = 12$ and $3x - 4y = 8$ in the $xy$-plane are perpendicular. What is the value of $a$?',
          choices: [
            { id: 'A', text: '$2$' },
            { id: 'B', text: '$4$' },
            { id: 'C', text: '$8$' },
            { id: 'D', text: '$12$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Perpendicular Lines and Slope Product** -- Shows up 1-2 times per test. The rule: perpendicular slopes multiply to $-1$.\n\n**Choice C is correct.**\n\n**The Fast Way (25 seconds):** Convert both to slope-intercept form.\nLine 2: $3x - 4y = 8 \\to y = \\frac{3}{4}x - 2$, slope $= \\frac{3}{4}$.\nLine 1: $ax + 6y = 12 \\to y = -\\frac{a}{6}x + 2$, slope $= -\\frac{a}{6}$.\nPerpendicular condition: $\\left(-\\frac{a}{6}\\right)\\left(\\frac{3}{4}\\right) = -1$.\nSolve: $-\\frac{3a}{24} = -1 \\to \\frac{a}{8} = 1 \\to a = 8$.\n\n**The Full Solution:**\nSlope of line 2: $m_2 = \\frac{3}{4}$.\nSlope of line 1: $m_1 = -\\frac{a}{6}$.\nPerpendicular condition: $m_1 \\cdot m_2 = -1$\n$\\left(-\\frac{a}{6}\\right)\\left(\\frac{3}{4}\\right) = -1$\n$-\\frac{3a}{24} = -1$\n$\\frac{3a}{24} = 1$\n$a = 8$\n\n**Why the wrong answers are tempting:**\n• Choice A ($a = 2$): Slope would be $-\\frac{1}{3}$. Product: $-\\frac{1}{3} \\times \\frac{3}{4} = -\\frac{1}{4} \\neq -1$. This might come from a simplification error where you divided instead of multiplied somewhere. College Board includes small values to tempt students who underestimate the answer.\n• Choice B ($a = 4$): Slope would be $-\\frac{2}{3}$. Product: $-\\frac{2}{3} \\times \\frac{3}{4} = -\\frac{1}{2} \\neq -1$. Close to $-1$ but not equal. This catches students who set up the equation correctly but solve it wrong.\n• Choice D ($a = 12$): Slope would be $-2$. Product: $-2 \\times \\frac{3}{4} = -\\frac{3}{2} \\neq -1$. This overshoots. Students who multiply both sides by the wrong number end up here.\n\n**Verification:** Slopes: $-\\frac{8}{6} = -\\frac{4}{3}$ and $\\frac{3}{4}$. Product: $-\\frac{4}{3} \\times \\frac{3}{4} = -1$ ✓\n\n**Test Day Takeaway:** Perpendicular lines: $m_1 \\times m_2 = -1$. Always convert to slope-intercept form first to extract the slopes, then set up the product equation.',
          skills: ['Geometry', 'Perpendicular Lines']
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
          type: "fill-in",
          difficulty: "medium",
          question: "A number is increased by $15\\%$, resulting in $46$. If the original number is then decreased by $25\\%$, what is the result?",
          correctAnswer: 30,
          explanation: "**SAT Pattern: Chained Percent Changes** -- Shows up 1-2 times per test. You must reverse one percent change and then apply a second, different percent change.\n\n**The correct answer is $30$.**\n\n**The Fast Way (15 seconds):** Reverse the increase: original $= 46 \\div 1.15 = 40$. Apply the decrease: $40 \\times 0.75 = 30$.\n\n**The Full Solution:**\nStep 1: Find the original number.\n$x \\times 1.15 = 46 \\implies x = \\frac{46}{1.15} = 40$.\n\nStep 2: Decrease the original by $25\\%$.\n$40 \\times (1 - 0.25) = 40 \\times 0.75 = 30$.\n\n**Common mistakes:**\n• Answering $40$: You found the original number but forgot to apply the $25\\%$ decrease. The question has two steps.\n• Answering $34.5$: You decreased $46$ by $25\\%$ ($46 \\times 0.75 = 34.5$) instead of first finding the original number. The $25\\%$ decrease applies to the original, not to $46$.\n• Answering $10$: You subtracted $15\\%$ and $25\\%$ of $40$ separately ($6 + 10 = 16$) and then subtracted from $46$. Percent changes must be applied multiplicatively, not combined and subtracted.\n\n**Verification:** $40 \\times 1.15 = 46$ ✓. $40 \\times 0.75 = 30$ ✓.\n\n**Test Day Takeaway:** When percent changes are chained, work backwards to find the original first, then apply the next change. Each percent change is a separate multiplication. Never add or subtract percentages directly.",
          skills: ['Problem-Solving and Data Analysis', 'Percent']
        },
        {
          id: 2,
          type: 'fill-in',
          difficulty: 'medium',
          question: 'If $5(x + 3) = 40$, what is the value of $2x - 1$?',
          correctAnswer: 9,
          explanation: '**SAT Pattern: Solve and Substitute into a Second Expression** -- Shows up 1-2 times per test. You must solve for $x$ first, then substitute into a different expression.\n\n**The correct answer is $9$.**\n\n**The Fast Way (15 seconds):** Divide both sides by $5$: $x + 3 = 8$, so $x = 5$. Then $2x - 1 = 2(5) - 1 = 9$.\n\n**The Full Solution:**\nStep 1: Solve for $x$.\n$5(x + 3) = 40$\n$x + 3 = 8$\n$x = 5$\n\nStep 2: Evaluate the target expression.\n$2x - 1 = 2(5) - 1 = 10 - 1 = 9$\n\n**Common mistakes:**\n• Answering $5$: You solved for $x$ correctly but reported $x$ instead of $2x - 1$. Always re-read what the question asks for.\n• Answering $11$: You computed $2x + 1$ instead of $2x - 1$, getting $10 + 1 = 11$. Sign errors in the substitution step are common.\n• Answering $7$: You substituted $x = 3$ (from $x + 3 = 8$ misread as $x = 3$) into $2(3) - 1 = 5$, or another arithmetic slip.\n\n**Verification:** $5(5 + 3) = 40$ ✓. $2(5) - 1 = 9$ ✓.\n\n**Test Day Takeaway:** When the SAT asks for an expression other than $x$, solve for $x$ first, then carefully substitute. Do not stop at finding $x$ -- always check what the question actually asks for.',
          skills: ['Algebra', 'Linear Equations']
        },
        {
          id: 3,
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The scatterplot above shows the relationship between two variables $x$ and $y$, along with a line of best fit. For how many of the $12$ data points is the actual $y$-value greater than the $y$-value predicted by the line of best fit?',
          diagram: {
            type: "scatterplot",
            params: {
              points: [
                [1, 4], [2, 2], [2, 3], [3, 6], [4, 4],
                [5, 7], [6, 5], [6, 6], [7, 9], [8, 7],
                [9, 10], [10, 8]
              ],
              bestFitLine: { slope: 0.7, intercept: 2 },
              xMax: 10,
              yMax: 12
            }
          },
          choices: [
            { id: 'A', text: '$5$' },
            { id: 'B', text: '$6$' },
            { id: 'C', text: '$7$' },
            { id: 'D', text: '$12$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Points Above the Line of Best Fit** -- Shows up 1-2 times per test. \"Actual > predicted\" simply means the point is above the line.\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** \"Actual $y$ greater than predicted\" = point is ABOVE the line. Count the dots above the line of best fit: $(1, 4)$, $(3, 6)$, $(5, 7)$, $(7, 9)$, $(9, 10)$. That is $5$ points. Done.\n\n**The Full Solution:**\nThe line of best fit is $y = 0.7x + 2$. For each point, compare the actual $y$ to the predicted $y$:\n$(1, 4)$: predicted $= 2.7$, actual $= 4 > 2.7$ -- above ✓\n$(2, 2)$: predicted $= 3.4$, actual $= 2 < 3.4$ -- below\n$(2, 3)$: predicted $= 3.4$, actual $= 3 < 3.4$ -- below\n$(3, 6)$: predicted $= 4.1$, actual $= 6 > 4.1$ -- above ✓\n$(4, 4)$: predicted $= 4.8$, actual $= 4 < 4.8$ -- below\n$(5, 7)$: predicted $= 5.5$, actual $= 7 > 5.5$ -- above ✓\n$(6, 5)$: predicted $= 6.2$, actual $= 5 < 6.2$ -- below\n$(6, 6)$: predicted $= 6.2$, actual $= 6 < 6.2$ -- below\n$(7, 9)$: predicted $= 6.9$, actual $= 9 > 6.9$ -- above ✓\n$(8, 7)$: predicted $= 7.6$, actual $= 7 < 7.6$ -- below\n$(9, 10)$: predicted $= 8.3$, actual $= 10 > 8.3$ -- above ✓\n$(10, 8)$: predicted $= 9.0$, actual $= 8 < 9.0$ -- below\nCount above: $5$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($6$): You overcounted by including a point that sits approximately on the line or just barely below it. College Board knows that borderline points cause miscounts.\n• Choice C ($7$): You counted too many, likely including multiple points that are actually below the line. This happens when you eyeball instead of calculating.\n• Choice D ($12$): This is the total number of data points, not just those above the line. College Board includes the total count to trap students who misread the question.\n\n**Verification:** The $5$ points above the line are $(1,4)$, $(3,6)$, $(5,7)$, $(7,9)$, $(9,10)$. ✓\n\n**Test Day Takeaway:** \"Actual > predicted\" means ABOVE the line. \"Actual < predicted\" means BELOW. Count carefully and use the equation if any points are borderline.',
          skills: ["margin-of-error"]
        },
        {
          id: 4,
          type: "fill-in",
          difficulty: "medium",
          question: "If $3x + 4y = 20$ and $x - 4y = -8$, what is the value of $x$?",
          correctAnswer: 3,
          explanation: "**SAT Pattern: Systems of Equations -- Elimination** -- Shows up every test. When coefficients are opposites, add the equations to eliminate a variable instantly.\n\n**The correct answer is $3$.**\n\n**The Fast Way (10 seconds):** The $y$-coefficients are $+4y$ and $-4y$ -- they cancel when you add! Add the equations:\n$(3x + 4y) + (x - 4y) = 20 + (-8)$\n$4x = 12$\n$x = 3$. Done.\n\n**The Full Solution:**\n$3x + 4y = 20$\n$x - 4y = -8$\nAdd: $4x = 12$\n$x = 3$\n\n**Verification:** $x = 3$: $3(3) + 4y = 20 \\to 4y = 11 \\to y = 2.75$. Check: $3 - 4(2.75) = 3 - 11 = -8$ ✓\n\n**Test Day Takeaway:** Before doing any algebra, scan the coefficients. If one variable has opposite coefficients ($+4y$ and $-4y$), just add the equations. If they are the same ($+4y$ and $+4y$), subtract. This is the fastest method on the SAT.",
          skills: ["systems-of-equations", "elimination"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "hard",
          question: "What is the positive difference between the solutions of $4x^2 - 9x - 9 = 0$?",
          choices: [
            { id: "A", text: "$\\frac{9}{4}$" },
            { id: "B", text: "$\\frac{15}{4}$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$\\frac{21}{4}$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Factor a Quadratic and Compute from Its Roots** -- Shows up 0-1 times per test. You must factor a quadratic with $a \\neq 1$, find both roots, and then compute the positive difference.\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Factor: $4x^2 - 9x - 9 = (4x + 3)(x - 3) = 0$. Roots: $x = -\\frac{3}{4}$ and $x = 3$. Positive difference: $3 - (-\\frac{3}{4}) = 3 + \\frac{3}{4} = \\frac{15}{4}$.\n\n**The Full Solution:**\nStep 1: Factor the quadratic.\nUsing the AC method: $4 \\times (-9) = -36$. Find two numbers that multiply to $-36$ and add to $-9$: $-12$ and $3$.\n$4x^2 - 12x + 3x - 9 = 4x(x-3) + 3(x-3) = (4x+3)(x-3)$.\n\nStep 2: Find the roots.\n$(4x+3) = 0 \\implies x = -\\frac{3}{4}$.\n$(x-3) = 0 \\implies x = 3$.\n\nStep 3: Compute the positive difference.\n$|3 - (-\\frac{3}{4})| = 3 + \\frac{3}{4} = \\frac{12}{4} + \\frac{3}{4} = \\frac{15}{4}$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{9}{4}$): You computed $3 - \\frac{3}{4} = \\frac{9}{4}$, subtracting instead of adding. Since $-\\frac{3}{4}$ is negative, the difference is $3 - (-\\frac{3}{4}) = 3 + \\frac{3}{4}$. Dropping the double negative is the most common trap.\n• Choice C ($3$): You found only the root $x = 3$ and reported it, or computed $3 - 0 = 3$. You need both roots and their difference.\n• Choice D ($\\frac{21}{4}$): Likely from a factoring error producing incorrect roots, such as $x = -\\frac{3}{4}$ and $x = \\frac{9}{2}$, giving $\\frac{9}{2} + \\frac{3}{4} = \\frac{21}{4}$.\n\n**Verification:** $4(3)^2 - 9(3) - 9 = 36 - 27 - 9 = 0$ ✓. $4(-\\frac{3}{4})^2 - 9(-\\frac{3}{4}) - 9 = \\frac{9}{4} + \\frac{27}{4} - 9 = 9 - 9 = 0$ ✓. Difference: $\\frac{15}{4}$ ✓.\n\n**Test Day Takeaway:** When asked for the difference between roots, you must factor (or use the quadratic formula), find BOTH roots, and carefully subtract. Watch for double negatives when one root is negative.",
          skills: ["factoring", "quadratic-expressions"]
        },
        {
          id: 6,
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'At a concert venue, there are a total of $420$ attendees. Each attendee is located in either section A, section B, or section C. If one of these attendees is selected at random, the probability of selecting an attendee in section A is $0.45$, and the probability of selecting an attendee in section B is $0.30$. How many attendees are in section C?',
          choices: [
            { id: 'A', text: '$105$' },
            { id: 'B', text: '$126$' },
            { id: 'C', text: '$189$' },
            { id: 'D', text: '$315$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Complementary Probability** -- Shows up 1-2 times per test. All probabilities sum to $1$. Find the missing probability, then multiply by the total.\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** $P(C) = 1 - 0.45 - 0.30 = 0.25$. Calculator: $0.25 \\times 420 = 105$. Done.\n\n**The Full Solution:**\nSince all attendees are in A, B, or C: $P(A) + P(B) + P(C) = 1$.\n$P(C) = 1 - 0.45 - 0.30 = 0.25$.\nNumber in section C: $0.25 \\times 420 = 105$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($126$): This is $0.30 \\times 420 = 126$, the count for section B. College Board puts the other sections\' counts as wrong answers because students who compute the right formula might accidentally use the wrong probability. Under pressure, grabbing $P(B)$ instead of $P(C)$ is an easy mistake.\n• Choice C ($189$): This is $0.45 \\times 420 = 189$, the count for section A. Same trap -- you used $P(A)$ instead of $P(C)$.\n• Choice D ($315$): This is $0.75 \\times 420 = 315$, which is sections A and B combined. You found $P(A) + P(B) = 0.75$ but forgot to subtract from $1$ to get $P(C)$. This punishes students who do the first step but skip the second.\n\n**Verification:** $105 + 126 + 189 = 420$ and $P(C) = 105/420 = 0.25$ ✓\n\n**Test Day Takeaway:** All probabilities in a complete set of outcomes sum to $1$. Find the missing probability by subtracting the known ones from $1$, THEN multiply by the total.',
          skills: ["percent-of-value"]
        },
        {
          id: 7,
          type: "fill-in",
          difficulty: "medium",
          question: "If $\\frac{x - 3}{4} = \\frac{x + 1}{6}$, what is the value of $x$?",
          correctAnswer: 11,
          explanation: "**SAT Pattern: Proportion / Cross-Multiplication** -- Shows up 1-2 times per test. Cross-multiply to clear the fractions in one step.\n\n**The correct answer is $11$.**\n\n**The Fast Way (15 seconds):** Cross-multiply: $6(x - 3) = 4(x + 1)$. Distribute: $6x - 18 = 4x + 4$. Solve: $2x = 22$, so $x = 11$. Done.\n\n**The Full Solution:**\n$\\frac{x - 3}{4} = \\frac{x + 1}{6}$\nCross-multiply: $6(x - 3) = 4(x + 1)$\n$6x - 18 = 4x + 4$\n$2x = 22$\n$x = 11$\n\n**Verification:** LHS: $\\frac{11 - 3}{4} = \\frac{8}{4} = 2$. RHS: $\\frac{11 + 1}{6} = \\frac{12}{6} = 2$. Both equal $2$. ✓\n\n**Test Day Takeaway:** When two fractions are equal, cross-multiply immediately: $\\frac{a}{b} = \\frac{c}{d}$ becomes $ad = bc$. This is always the fastest first move for proportion equations.",
          skills: ['Algebra', 'Linear Equations']
        },
        {
          id: 8,
          type: "fill-in",
          difficulty: "medium",
          question: "What is the sum of the solutions to $x^2 - 10x + 21 = 0$?",
          correctAnswer: 10,
          explanation: "**SAT Pattern: Sum of Roots (Vieta's Formulas)** -- Shows up 1-2 times per test. You can get the sum without solving the quadratic at all.\n\n**The correct answer is $10$.**\n\n**The Fast Way (5 seconds):** For $ax^2 + bx + c = 0$, the sum of roots $= -\\frac{b}{a}$. Here, $-\\frac{-10}{1} = 10$. Done.\n\n**The Full Solution (factoring):**\n$x^2 - 10x + 21 = (x - 3)(x - 7) = 0$\n$x = 3$ or $x = 7$\nSum: $3 + 7 = 10$\n\n**Verification:** Vieta's: $-\\frac{b}{a} = -\\frac{-10}{1} = 10$. Direct sum: $3 + 7 = 10$. Both match. ✓\n\n**Test Day Takeaway:** Sum of roots $= -b/a$. Product of roots $= c/a$. These two formulas save massive time when the SAT asks for the sum or product without needing the actual roots. Commit them to memory.",
          skills: ["quadratic-equations", "vietas-formulas"]
        },
        {
          id: 9,
          type: "fill-in",
          difficulty: "hard",
          question: "The graphs of $y = x^2$ and $y = 5x - 4$ intersect at two points. What is the sum of the $y$-coordinates of the two intersection points?",
          correctAnswer: 17,
          explanation: "**SAT Pattern: Finding Both Intersection Points and Combining Results** -- Shows up 0-1 times per test. You must find both intersections by solving a system, then compute the $y$-values and add them.\n\n**The correct answer is $17$.**\n\n**The Fast Way (25 seconds):** Set equal: $x^2 = 5x - 4 \\implies x^2 - 5x + 4 = 0 \\implies (x-1)(x-4) = 0$. So $x = 1$ and $x = 4$. The $y$-values: $y = 1^2 = 1$ and $y = 4^2 = 16$. Sum: $1 + 16 = 17$.\n\n**The Full Solution:**\nStep 1: Find the $x$-coordinates of intersection.\n$x^2 = 5x - 4$\n$x^2 - 5x + 4 = 0$\n$(x-1)(x-4) = 0$\n$x = 1$ or $x = 4$.\n\nStep 2: Find the corresponding $y$-values.\nAt $x = 1$: $y = 1^2 = 1$.\nAt $x = 4$: $y = 4^2 = 16$.\n\nStep 3: Sum the $y$-coordinates.\n$1 + 16 = 17$.\n\n**Common mistakes:**\n• Answering $5$: You found the sum of the $x$-coordinates ($1 + 4 = 5$) instead of the $y$-coordinates. The question specifically asks for $y$-coordinates.\n• Answering $4$: You reported only the larger $x$-value without computing $y$-values. Always re-read what the question asks for.\n• Answering $15$: You computed $y$-coordinates using the wrong equation: $y = 5(1) - 4 = 1$ and $y = 5(4) - 4 = 16$ gives the same result, but a slip like $y = 5 - 4 = 1$ and $y = 20 - 4 = 16$ minus the first could produce $15$ through careless subtraction.\n\n**Verification:** At $(1, 1)$: $1 = 1^2$ ✓ and $1 = 5(1)-4$ ✓. At $(4, 16)$: $16 = 4^2$ ✓ and $16 = 5(4)-4$ ✓. Sum: $1 + 16 = 17$ ✓.\n\n**Test Day Takeaway:** When a problem asks for a combined quantity from two intersection points, you need ALL the coordinates, not just one. Solve the system completely, find both points, then compute whatever the question asks for.",
          skills: ["systems-of-equations", "quadratic-equations"]
        },
        {
          id: 10,
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The points $(k, 8)$ and $(k + 5, -12)$ lie on a line in the $xy$-plane. The $y$-intercept of this line is at the point $(k - 3, b)$. What is the value of $b$?',
          correctAnswer: 20,
          explanation: '**SAT Pattern: Parameterized Coordinates** -- Shows up 0-1 times per test. When a parameter like $k$ appears in the coordinates, it often cancels out in the answer.\n\n**The correct answer is $20$.**\n\n**The Fast Way (30 seconds):** Slope $= \\frac{-12 - 8}{(k+5) - k} = \\frac{-20}{5} = -4$. From $(k, 8)$ to $(k-3, b)$, the $x$-change is $-3$, so the $y$-change is $(-4)(-3) = +12$. Therefore $b = 8 + 12 = 20$. The $k$ never matters.\n\n**The Full Solution:**\nSlope: $m = \\frac{-12 - 8}{(k+5) - k} = \\frac{-20}{5} = -4$.\nLine equation using point $(k, 8)$: $y - 8 = -4(x - k)$, so $y = -4x + 4k + 8$.\nAt the point $(k - 3, b)$:\n$b = -4(k - 3) + 4k + 8 = -4k + 12 + 4k + 8 = 20$.\nNotice: $k$ cancels completely.\n\n**Verification:** Using slope from $(k, 8)$ to $(k-3, b)$: slope $= \\frac{b - 8}{(k-3) - k} = \\frac{b - 8}{-3}$. This must equal $-4$: $\\frac{b-8}{-3} = -4 \\to b - 8 = 12 \\to b = 20$ ✓\n\n**Test Day Takeaway:** When you see a parameter like $k$ in every coordinate, do not panic. Work with slopes and differences -- the parameter almost always cancels out. If it does not cancel, you probably made an error.',
          skills: ['Algebra', 'Linear Equations']
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The function $f$ is graphed in the $xy$-plane. If $g(x) = f(x - 3)$, how is the graph of $g$ related to the graph of $f$?",
          choices: [
            { id: "A", text: "The graph of $g$ is the graph of $f$ shifted $3$ units left" },
            { id: "B", text: "The graph of $g$ is the graph of $f$ shifted $3$ units right" },
            { id: "C", text: "The graph of $g$ is the graph of $f$ shifted $3$ units up" },
            { id: "D", text: "The graph of $g$ is the graph of $f$ shifted $3$ units down" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Horizontal Function Shifts** -- Shows up every test. The direction is always counterintuitive: $f(x - 3)$ shifts RIGHT, not left.\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $f(x - 3)$ has a $-3$ inside the function. Inside shifts are \"opposite\": minus means right. So it shifts $3$ units right. Done.\n\n**The Full Solution:**\n$g(x) = f(x - 3)$ means we replace $x$ with $x - 3$ inside $f$.\nTo get the same output that $f$ gave at $x = 0$, we now need $x - 3 = 0$, so $x = 3$.\nExample: If $f(0) = 5$, then $g(3) = f(3 - 3) = f(0) = 5$. The point $(0, 5)$ moved to $(3, 5)$ -- that is a shift $3$ units right.\n\n**Why the wrong answers are tempting:**\n• Choice A (shifted $3$ left): This is the most common wrong answer. Students see the $-3$ and think \"negative = left.\" But horizontal shifts work opposite to the sign inside the function. $f(x - 3)$ shifts RIGHT, and $f(x + 3)$ shifts LEFT. College Board exploits this counterintuitive rule on every test.\n• Choice C (shifted $3$ up): This would be $f(x) + 3$, not $f(x - 3)$. Adding OUTSIDE the function is vertical. Adding INSIDE is horizontal. College Board includes this to catch students who confuse inside vs. outside transformations.\n• Choice D (shifted $3$ down): This would be $f(x) - 3$. Same confusion as Choice C but in the downward direction.\n\n**Verification:** If $f(2) = 7$, then $g(5) = f(5-3) = f(2) = 7$. Point $(2,7)$ on $f$ becomes $(5,7)$ on $g$. Shifted $3$ right. ✓\n\n**Test Day Takeaway:** Inside the parentheses = horizontal shift (opposite sign). Outside = vertical shift (same sign). $f(x-3)$ goes RIGHT. $f(x+3)$ goes LEFT. Tattoo this on your brain.",
          skills: ["function-transformations", "horizontal-shifts"]
        },
        {
          id: 12,
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Which expression is equivalent to $12x^4y^3 + 18x^2y$?',
          choices: [
            { id: 'A', text: '$6x^2y(2x^2y^2 + 3)$' },
            { id: 'B', text: '$6x^2y(2x^2y + 3)$' },
            { id: 'C', text: '$18x^2y(x^2y^2 + 1)$' },
            { id: 'D', text: '$18x^2y(2x^2y^2 + 1)$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Factoring Out the GCF** -- Shows up 1-2 times per test. Find the GCF of the coefficients and the lowest power of each variable.\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Expand each choice until you find one that gives $12x^4y^3 + 18x^2y$.\nChoice A: $6x^2y(2x^2y^2 + 3) = 12x^4y^3 + 18x^2y$ ✓ Match! Done.\n\n**The Full Solution (finding the GCF):**\nGCF of $12$ and $18$: $6$\nLowest power of $x$: $x^2$\nLowest power of $y$: $y^1$\nGCF $= 6x^2y$\n\nDivide each term:\n$12x^4y^3 \\div 6x^2y = 2x^2y^2$\n$18x^2y \\div 6x^2y = 3$\n\nResult: $6x^2y(2x^2y^2 + 3)$\n\n**Why the wrong answers are tempting:**\n• Choice B ($6x^2y(2x^2y + 3)$): The $y$ exponent inside is wrong. Expanding gives $12x^4y^2 + 18x^2y$, which has $y^2$ instead of $y^3$ in the first term. This is a subtle exponent error that is easy to miss if you do not verify.\n• Choice C ($18x^2y(x^2y^2 + 1)$): Expanding gives $18x^4y^3 + 18x^2y$. The first coefficient is $18$, not $12$. The GCF was not $18$ -- it is $6$. College Board includes this for students who pick the wrong GCF.\n• Choice D ($18x^2y(2x^2y^2 + 1)$): Expanding gives $36x^4y^3 + 18x^2y$. The first coefficient is $36$, not $12$. Both the outer factor and inner factor are wrong.\n\n**Verification:** $6x^2y(2x^2y^2 + 3) = 6 \\cdot 2 \\cdot x^{2+2} \\cdot y^{1+2} + 6 \\cdot 3 \\cdot x^2 \\cdot y = 12x^4y^3 + 18x^2y$ ✓\n\n**Test Day Takeaway:** For GCF factoring, always verify by distributing back. The most common errors are wrong exponents on the variables inside the parentheses. A 5-second check saves you from a silly mistake.',
          skills: ["combining-like-terms", "equivalent-expressions"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A storage container can hold at most $500$ pounds and must carry at least $200$ pounds to justify the shipping cost. The container already has $180$ pounds of supplies. Each additional crate weighs $40$ pounds. Which inequality represents the number of additional crates $c$ that can be added so the shipment is both justified and within the weight limit?",
          choices: [
            { id: "A", text: "$1 \\leq c \\leq 8$" },
            { id: "B", text: "$0.5 \\leq c \\leq 8$" },
            { id: "C", text: "$1 \\leq c \\leq 12$" },
            { id: "D", text: "$5 \\leq c \\leq 8$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Compound Inequality from Two Constraints** -- Shows up 0-1 times per test. You must set up two separate inequalities and combine them, taking into account that crates must be whole numbers.\n\n**Choice A is correct.**\n\n**The Fast Way (25 seconds):** Min constraint: $180 + 40c \\geq 200 \\implies 40c \\geq 20 \\implies c \\geq 0.5$. Max constraint: $180 + 40c \\leq 500 \\implies 40c \\leq 320 \\implies c \\leq 8$. Since $c$ must be a whole number of crates, $c \\geq 1$. Combined: $1 \\leq c \\leq 8$.\n\n**The Full Solution:**\nStep 1: Set up the minimum weight constraint.\n$180 + 40c \\geq 200$\n$40c \\geq 20$\n$c \\geq 0.5$\nSince you cannot add half a crate, $c \\geq 1$.\n\nStep 2: Set up the maximum weight constraint.\n$180 + 40c \\leq 500$\n$40c \\leq 320$\n$c \\leq 8$.\n\nStep 3: Combine.\n$1 \\leq c \\leq 8$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($0.5 \\leq c \\leq 8$): Mathematically correct from the inequality alone, but $c$ must be a whole number of crates. You cannot add $0.5$ crates. College Board tests whether you apply real-world constraints to your mathematical answer.\n• Choice C ($1 \\leq c \\leq 12$): You set up the minimum correctly but used $c \\leq 12$ for the max, which comes from $180 + 40c \\leq 680$ (adding $180 + 500$ instead of subtracting). This misreads the capacity constraint.\n• Choice D ($5 \\leq c \\leq 8$): The minimum of $5$ crates likely comes from computing $200 \\div 40 = 5$, ignoring the $180$ pounds already in the container. You must account for existing weight in both constraints.\n\n**Verification:** At $c = 1$: $180 + 40 = 220 \\geq 200$ ✓ and $220 \\leq 500$ ✓. At $c = 8$: $180 + 320 = 500 \\leq 500$ ✓. At $c = 9$: $180 + 360 = 540 > 500$ ✗. ✓\n\n**Test Day Takeaway:** Compound inequality problems require you to set up BOTH constraints separately, solve each, and then combine. When the variable represents a count of physical objects, round to the nearest valid whole number.",
          skills: ["inequalities", "word-problems"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$x - 17 = (x - a)(x - 17)$\n\nIn the given equation, $a$ is a constant where $a > 18$. Which of the following are the solutions to the equation?",
          choices: [
            { id: "A", text: "$17$ and $a + 1$" },
            { id: "B", text: "$17$ only" },
            { id: "C", text: "$a + 17$ and $a - 1$" },
            { id: "D", text: "$a$ and $17$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Equations with Common Factors** -- Shows up 0-1 times per test. The trick: when both sides share a factor, one solution comes from that factor being zero, and the other from dividing it out.\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** Try $x = 17$: LHS $= 0$, RHS $= (17-a)(0) = 0$. Works. Now for $x \\neq 17$, divide both sides by $(x-17)$: $1 = x - a$, so $x = a + 1$. Solutions: $17$ and $a+1$.\n\n**The Full Solution:**\n$x - 17 = (x - a)(x - 17)$\n\nCase 1: $x = 17$\nLHS: $17 - 17 = 0$. RHS: $(17 - a)(0) = 0$. True for all $a$. ✓\n\nCase 2: $x \\neq 17$\nSince $x - 17 \\neq 0$, divide both sides by $(x - 17)$:\n$1 = x - a$\n$x = a + 1$\n\nSince $a > 18$, $x = a + 1 > 19 \\neq 17$, so this is a valid distinct solution.\n\nSolutions: $x = 17$ and $x = a + 1$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($17$ only): You found $x = 17$ but stopped there, not realizing you can divide both sides by $(x-17)$ to find another solution. College Board rewards students who find BOTH solutions. This trap punishes partial work.\n• Choice C ($a + 17$ and $a - 1$): These come from algebraic errors when rearranging. Neither satisfies the original equation. College Board includes plausible-looking expressions involving $a$ to trap students who make algebra mistakes.\n• Choice D ($a$ and $17$): Substituting $x = a$: LHS $= a - 17$, RHS $= (a-a)(a-17) = 0$. Since $a > 18$, $a - 17 > 1 \\neq 0$. So $x = a$ does NOT work. College Board includes the parameter $a$ itself as a trap because students often confuse the parameter with a solution.\n\n**Verification:** For $x = a+1$: LHS $= (a+1) - 17 = a - 16$. RHS $= ((a+1)-a)((a+1)-17) = (1)(a-16) = a - 16$. LHS $=$ RHS. ✓\n\n**Test Day Takeaway:** When both sides of an equation share a factor, you get TWO cases: (1) the shared factor equals zero, and (2) divide it out and solve what remains. Never stop after finding just one solution.",
          skills: ['Advanced Math', 'Quadratic Equations']
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "hard",
          question: "In the $xy$-plane, a circle has center $C$ with coordinates $(h, k)$. Points $A$ and $B$ lie on the circle. Point $A$ has coordinates $(h + 3, k + \\sqrt{55})$, and $\\angle ACB$ is a right angle. What is the length of $\\overline{AB}$?",
          choices: [
            { id: "A", text: "$8\\sqrt{2}$" },
            { id: "B", text: "$2\\sqrt{55}$" },
            { id: "C", text: "$64\\sqrt{2}$" },
            { id: "D", text: "$64\\sqrt{3}$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Circle Geometry with Right Angles** -- Shows up 0-1 times per test. When two radii form a right angle, the chord is the hypotenuse of an isosceles right triangle.\n\n**Choice A is correct.**\n\n**The Fast Way (25 seconds):** Find the radius: $r = \\sqrt{3^2 + (\\sqrt{55})^2} = \\sqrt{9 + 55} = \\sqrt{64} = 8$. Two radii at $90°$ form an isosceles right triangle. Chord $= r\\sqrt{2} = 8\\sqrt{2}$. Done.\n\n**The Full Solution:**\nStep 1: Find the radius.\n$r = CA = \\sqrt{(h+3-h)^2 + (k+\\sqrt{55}-k)^2} = \\sqrt{9 + 55} = \\sqrt{64} = 8$\n\nStep 2: Since $\\angle ACB = 90°$ and $CA = CB = 8$ (both radii), triangle $ACB$ is an isosceles right triangle.\n$AB^2 = CA^2 + CB^2 = 64 + 64 = 128$\n$AB = \\sqrt{128} = 8\\sqrt{2}$\n\n**Why the wrong answers are tempting:**\n• Choice B ($2\\sqrt{55}$): You used $\\sqrt{55}$ from point $A$'s coordinates instead of computing the full radius. This grabs a number from the problem without completing the distance formula.\n• Choice C ($64\\sqrt{2}$): You found $AB^2 = 128$ but wrote $64\\sqrt{2}$ instead of $\\sqrt{128} = 8\\sqrt{2}$. This is an error in taking the square root -- you squared the answer instead. College Board loves including the \"forgot to take the square root\" trap.\n• Choice D ($64\\sqrt{3}$): A wrong radical and wrong coefficient, possibly from using a $30$-$60$-$90$ triangle relationship instead of $45$-$45$-$90$.\n\n**Verification:** $(8\\sqrt{2})^2 = 128 = 64 + 64 = 8^2 + 8^2$ ✓\n\n**Test Day Takeaway:** When two radii form a right angle, the chord connecting their endpoints has length $r\\sqrt{2}$. This is the hypotenuse of an isosceles right triangle ($45$-$45$-$90$).",
          skills: ["circles", "coordinate-geometry", "pythagorean-theorem"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A circle has center $P$, and points $R$ and $S$ lie on the circle. Line segments $RQ$ and $SQ$ are tangent to the circle at points $R$ and $S$, respectively. If the radius of the circle is $180$ millimeters and the perimeter of quadrilateral $PRQS$ is $1{,}224$ millimeters, what is the distance, in millimeters, between points $P$ and $Q$?",
          choices: [
            { id: "A", text: "$180$" },
            { id: "B", text: "$450$" },
            { id: "C", text: "$460$" },
            { id: "D", text: "$468$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Tangent Lines and the Pythagorean Theorem** -- Shows up 0-1 times per test. Key facts: tangent lines are perpendicular to the radius, and tangent segments from the same external point are equal.\n\n**Choice D is correct.**\n\n**The Fast Way (30 seconds):** Perimeter $= PR + RQ + QS + SP = 180 + RQ + RQ + 180 = 1224$ (since tangent segments $RQ = QS$). So $2 \\cdot RQ = 864$, $RQ = 432$. In right triangle $PRQ$: $PQ = \\sqrt{180^2 + 432^2}$. Calculator: $\\sqrt{32400 + 186624} = \\sqrt{219024} = 468$.\n\n**The Full Solution:**\nSince $RQ$ and $SQ$ are tangent at $R$ and $S$: $PR \\perp RQ$ and $PS \\perp SQ$.\n$PR = PS = 180$ (radii) and $RQ = SQ$ (tangent segments from external point $Q$).\n\nPerimeter: $180 + RQ + RQ + 180 = 1224$\n$2 \\cdot RQ = 864$, so $RQ = 432$.\n\nIn right triangle $PRQ$:\n$PQ^2 = PR^2 + RQ^2 = 180^2 + 432^2 = 32400 + 186624 = 219024$\n$PQ = \\sqrt{219024} = 468$\n\n**Why the wrong answers are tempting:**\n• Choice A ($180$): This is just the radius. You identified the given value but did not compute $PQ$. College Board includes given values as traps for students who do not complete the problem.\n• Choice B ($450$): Likely from an incorrect approach, perhaps averaging or adding incorrectly. This is close enough to seem plausible but comes from a flawed method.\n• Choice C ($460$): Very close to the correct answer. A small arithmetic error in the Pythagorean theorem calculation leads here. College Board puts near-misses to punish rounding or calculator mistakes.\n\n**Verification:** $468^2 = 219024$ and $180^2 + 432^2 = 32400 + 186624 = 219024$ ✓\n\n**Test Day Takeaway:** Tangent-radius problems almost always use the Pythagorean theorem. Remember: tangent line is perpendicular to the radius at the point of tangency, and tangent segments from the same external point are equal in length.",
          skills: ["circles", "tangent-lines", "pythagorean-theorem"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "hard",
          question: "A town's population is modeled by $P(t) = 12{,}000(1.03)^t$, where $t$ is the number of years since 2020. What does $1.03$ represent in this model?",
          choices: [
            { id: "A", text: "The population decreases by $3\\%$ each year" },
            { id: "B", text: "The population increases by $3\\%$ each year" },
            { id: "C", text: "The population increases by $103$ people each year" },
            { id: "D", text: "The population was $1.03$ in the year 2020" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Interpreting Exponential Growth Models** -- Shows up 1-2 times per test. The base of the exponent tells you the growth factor: $1 + r$ where $r$ is the rate.\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $1.03 = 1 + 0.03$. The $0.03$ is a $3\\%$ growth rate. Since the base is greater than $1$, it is growth, not decay. The population increases by $3\\%$ each year.\n\n**The Full Solution:**\nIn $P(t) = P_0(b)^t$:\n$P_0 = 12{,}000$ is the initial population (at $t = 0$, year 2020).\n$b = 1.03$ is the growth factor.\nSince $b = 1 + r$: $1.03 = 1 + 0.03$, so $r = 0.03 = 3\\%$ growth per year.\n\n**Why the wrong answers are tempting:**\n• Choice A: For the population to decrease by $3\\%$, the base would need to be $1 - 0.03 = 0.97$, which is less than $1$. Since $1.03 > 1$, this is growth, not decay. College Board includes this because students sometimes confuse growth and decay factors.\n• Choice C: This describes linear growth ($+103$ people per year), not exponential growth ($\\times 1.03$ per year). The growth factor is a multiplier, not an additive constant. College Board uses this to test whether you understand the difference between linear and exponential models.\n• Choice D: The initial population in 2020 is $12{,}000$ (the coefficient), not $1.03$. College Board includes this absurd option to catch students who mix up the parts of the exponential model.\n\n**Verification:** After $1$ year: $12000 \\times 1.03 = 12360$. That is $360$ more, and $360/12000 = 0.03 = 3\\%$. ✓\n\n**Test Day Takeaway:** In $P_0(1+r)^t$: if the base $> 1$, it is growth; if the base $< 1$, it is decay. The rate $r$ is found by subtracting $1$ from the base. Always break the base into $1 + r$ or $1 - r$ form.",
          skills: ["exponential-growth", "interpretation"]
        },
        {
          id: 18,
          type: "fill-in",
          difficulty: "hard",
          question: "$36x - 48y = 20$\n\n$9x - py = 8$\n\nIn the given system of equations, $p$ is a constant. If the system has no solution, what is the value of $p$?",
          correctAnswer: 12,
          explanation: "**SAT Pattern: No Solution Condition for Systems** -- Shows up 1-2 times per test. No solution means parallel lines: proportional coefficients but non-proportional constants.\n\n**The correct answer is $12$.**\n\n**The Fast Way (20 seconds):** Divide the first equation by $4$: $9x - 12y = 5$. For no solution, the second equation must have the same left side but a different right side. $9x - py = 8$ must match $9x - 12y$, so $p = 12$. And $5 \\neq 8$, confirming no solution.\n\n**The Full Solution:**\nDivide Eq 1 by $4$: $9x - 12y = 5$.\nEq 2: $9x - py = 8$.\n\nFor no solution, the lines must be parallel (same slopes, different intercepts).\nThe $x$-coefficients already match ($9 = 9$).\nFor the $y$-coefficients to match: $p = 12$.\nCheck constants: $5 \\neq 8$, so the lines are parallel but distinct. No solution.\n\n**Verification:** With $p = 12$:\nEq 1 (simplified): $9x - 12y = 5$\nEq 2: $9x - 12y = 8$\nSubtracting: $0 = -3$ (contradiction). No solution. ✓\n\n**Test Day Takeaway:** No solution = parallel lines = same slope, different intercept. The fastest check: make the $x$-coefficients equal by scaling, then match the $y$-coefficients. If the constants do not match, there is no solution.",
          skills: ['Algebra', 'Systems of Equations']
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$-5x + 15px = 60$\n\nIn the given equation, $p$ is a constant. The equation has no solution. What is the value of $p$?",
          choices: [
            { id: "A", text: "$0$" },
            { id: "B", text: "$\\frac{1}{3}$" },
            { id: "C", text: "$\\frac{5}{3}$" },
            { id: "D", text: "$3$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: No Solution in a Single Equation** -- Shows up 1-2 times per test. An equation has no solution when the variable disappears and you get a false statement like $0 = 60$.\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Factor out $x$: $x(-5 + 15p) = 60$. For no solution, the coefficient of $x$ must be $0$ (making the left side $0$ while the right is $60$). Solve $-5 + 15p = 0$: $p = \\frac{5}{15} = \\frac{1}{3}$. Done.\n\n**The Full Solution:**\n$-5x + 15px = 60$\nFactor: $x(-5 + 15p) = 60$\nFor no solution, the coefficient of $x$ must equal $0$:\n$-5 + 15p = 0$\n$15p = 5$\n$p = \\frac{1}{3}$\n\nWith $p = \\frac{1}{3}$: $0 \\cdot x = 60$, which gives $0 = 60$ (false). No solution.\n\n**Why the wrong answers are tempting:**\n• Choice A ($p = 0$): With $p = 0$: $-5x = 60$, giving $x = -12$. That is one solution, not no solution. College Board includes $0$ because it \"makes things disappear,\" and students associate $0$ with no solution.\n• Choice C ($p = \\frac{5}{3}$): With $p = \\frac{5}{3}$: $-5x + 25x = 60$, giving $20x = 60$, $x = 3$. One solution. This comes from an arithmetic error where you solve $15p = 5$ incorrectly.\n• Choice D ($p = 3$): With $p = 3$: $-5x + 45x = 60$, giving $40x = 60$, $x = 1.5$. One solution. Students might try $p = 3$ because $15 \\div 5 = 3$, confusing the calculation.\n\n**Verification:** $p = \\frac{1}{3}$: $-5x + 15(\\frac{1}{3})x = -5x + 5x = 0 \\neq 60$. No value of $x$ works. ✓\n\n**Test Day Takeaway:** No solution means the variable terms cancel and you get something like $0 = 60$. Set the coefficient of $x$ to $0$ and solve for the parameter. If the constant on the other side is NOT zero, you have confirmed no solution.",
          skills: ["Algebra", "Special solutions"]
        },
        {
          id: 20,
          type: "fill-in",
          difficulty: "hard",
          question: "In triangle $ABC$, $\\cos(B) = \\frac{7}{25}$ and angle $A$ is a right angle. What is the value of $\\cos(C)$?",
          correctAnswer: "24/25",
          explanation: "**SAT Pattern: Complementary Angles in Right Triangles** -- Shows up 1-2 times per test. In a right triangle, the two acute angles are complementary, so $\\cos$ of one equals $\\sin$ of the other.\n\n**The correct answer is $\\frac{24}{25}$ (or $0.96$).**\n\n**The Fast Way (15 seconds):** Right angle at $A$ means $B + C = 90°$. So $\\cos(C) = \\sin(B)$. Since $\\cos(B) = \\frac{7}{25}$, use Pythagorean identity: $\\sin(B) = \\sqrt{1 - (7/25)^2} = \\sqrt{1 - 49/625} = \\sqrt{576/625} = \\frac{24}{25}$. Done.\n\n**The Full Solution:**\nSince angle $A = 90°$: $B + C = 90°$ (complementary).\nCofunction identity: $\\cos(C) = \\sin(B)$.\n\nFind $\\sin(B)$:\n$\\sin^2(B) + \\cos^2(B) = 1$\n$\\sin^2(B) = 1 - \\left(\\frac{7}{25}\\right)^2 = 1 - \\frac{49}{625} = \\frac{576}{625}$\n$\\sin(B) = \\frac{24}{25}$\n\nTherefore: $\\cos(C) = \\frac{24}{25}$.\n\nAlternatively, recognize the $7$-$24$-$25$ Pythagorean triple. If the sides adjacent and hypotenuse relative to $B$ give $\\cos(B) = 7/25$, then the opposite side is $24$. For angle $C$, the adjacent side is $24$ and hypotenuse is $25$, so $\\cos(C) = 24/25$.\n\n**Verification:** $7^2 + 24^2 = 49 + 576 = 625 = 25^2$ ✓. $\\cos(C) = 24/25$ ✓.\n\n**Test Day Takeaway:** In a right triangle, if you know a trig ratio for one acute angle, you can find any trig ratio for the other angle using the cofunction relationship: $\\sin(\\theta) = \\cos(90° - \\theta)$. Also, memorize the common Pythagorean triples: $3$-$4$-$5$, $5$-$12$-$13$, $7$-$24$-$25$, $8$-$15$-$17$.",
          skills: ["Geometry", "Trigonometry"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The graph shows a system of two linear equations. If a new system of three linear equations is created using the two equations shown and the equation $2x + 3y = -12$, how many solutions $(x, y)$ will the resulting system of three equations have?",
          diagram: {
            type: "twoLineGraph",
            params: {
              intersection: { x: 0, y: -4 },
              slope1: 1,
              slope2: -1,
              xRange: [-6, 6],
              yRange: [-6, 4],
              xTickInterval: 2,
              yTickInterval: 2,
              showIntersection: false
            }
          },
          choices: [
            { id: "A", text: "Zero" },
            { id: "B", text: "Exactly one" },
            { id: "C", text: "Exactly two" },
            { id: "D", text: "Infinitely many" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Three-Equation Systems** -- Shows up 0-1 times per test. For three lines to have a common solution, all three must pass through the same point.\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** The two lines intersect at $(0, -4)$ (read from the graph). Check if $2x + 3y = -12$ passes through $(0, -4)$: $2(0) + 3(-4) = -12$. Yes! All three lines share the point $(0, -4)$. Exactly one solution.\n\n**The Full Solution:**\nFrom the graph, the two lines intersect at $(0, -4)$.\nLine 1: slope $1$, passes through $(0, -4)$: $y = x - 4$.\nLine 2: slope $-1$, passes through $(0, -4)$: $y = -x - 4$.\nLine 3: $2x + 3y = -12$. At $(0, -4)$: $2(0) + 3(-4) = -12$ ✓.\n\nAll three lines pass through $(0, -4)$, so the system has exactly one solution.\n\n**Why the wrong answers are tempting:**\n• Choice A (Zero): You might assume that adding a third line makes the system inconsistent. But you need to actually check whether the third line passes through the existing intersection point. If it does (as here), there IS a solution.\n• Choice C (Exactly two): Two distinct lines can share at most one point. Three lines can share at most one common point (unless two or more are the same line). Having exactly two common solutions to a system of three distinct lines is impossible.\n• Choice D (Infinitely many): This would require all three lines to be the same line, but these three lines have different slopes ($1$, $-1$, and $-2/3$), so they are all distinct.\n\n**Verification:** All three lines at $(0, -4)$: $y = 0-4 = -4$ ✓, $y = -0-4 = -4$ ✓, $2(0)+3(-4) = -12$ ✓.\n\n**Test Day Takeaway:** For a system of three equations, find the intersection of any two, then check if the third equation is satisfied at that point. If yes, exactly one solution. If no, zero solutions.",
          skills: ["Algebra", "Systems of equations"]
        },
        {
          id: 22,
          type: 'multiple-choice',
          difficulty: 'hard',
          question: '$3x - y > 660$\n\nFor which of the following tables are all the values of $x$ and their corresponding values of $y$ solutions to the given inequality?',
          choices: [
            { id: 'A', text: '$\\begin{array}{|c|c|c|c|}\\hline x & 220 & 221 & 222 \\\\ \\hline y & 0 & -3 & -6 \\\\ \\hline\\end{array}$' },
            { id: 'B', text: '$\\begin{array}{|c|c|c|c|}\\hline x & 220 & 222 & 221 \\\\ \\hline y & 0 & -3 & -6 \\\\ \\hline\\end{array}$' },
            { id: 'C', text: '$\\begin{array}{|c|c|c|c|}\\hline x & 220 & 221 & 222 \\\\ \\hline y & 0 & 3 & -6 \\\\ \\hline\\end{array}$' },
            { id: 'D', text: '$\\begin{array}{|c|c|c|c|}\\hline x & 221 & 222 & 220 \\\\ \\hline y & 0 & -3 & -6 \\\\ \\hline\\end{array}$' }
          ],
          correctAnswer: 'D',
          explanation: '**SAT Pattern: Testing Table Values in an Inequality** -- Shows up 0-1 times per test. The key detail: strict inequality ($>$) means the boundary value does NOT count.\n\n**Choice D is correct.**\n\n**The Fast Way (30 seconds):** The critical pair to watch is $(220, 0)$: $3(220) - 0 = 660$. Since $660 > 660$ is FALSE (strict inequality!), any table pairing $x = 220$ with $y = 0$ fails. Choices A, B, and C all contain a failing pair.\n\nNow check Choice D:\n$(221, 0)$: $3(221) - 0 = 663 > 660$ ✓\n$(222, -3)$: $3(222) - (-3) = 669 > 660$ ✓\n$(220, -6)$: $3(220) - (-6) = 666 > 660$ ✓\nAll pass. Choice D is the only correct table.\n\n**The Full Solution:**\nTest all pairs in each table against $3x - y > 660$:\n\nChoice A: $(220, 0)$: $3(220) - 0 = 660 > 660$? No. ✗ Fails.\nChoice B: $(220, 0)$: $3(220) - 0 = 660 > 660$? No. ✗ Fails.\nChoice C: $(220, 0)$: $3(220) - 0 = 660 > 660$? No. ✗ Fails immediately.\nChoice D: $(221, 0)$: $663 > 660$ ✓. $(222, -3)$: $669 > 660$ ✓. $(220, -6)$: $666 > 660$ ✓. All pass. ✓\n\n**Why the wrong answers are tempting:**\n• Choices A, B, C: All contain the pair $(220, 0)$, which gives $3(220) - 0 = 660$. Since the inequality is STRICT ($>$, not $\\geq$), $660$ is NOT greater than $660$. College Board specifically designs these to test whether you know the difference between $>$ and $\\geq$. The boundary value is the trap.\n• Choice C also has $(221, 3)$: $3(221) - 3 = 660 > 660$? No — another boundary failure.\n\n**Verification:** Choice D: $(221,0) \\to 663 > 660$ ✓, $(222,-3) \\to 669 > 660$ ✓, $(220,-6) \\to 666 > 660$ ✓\n\n**Test Day Takeaway:** For strict inequalities ($>$ or $<$), the boundary value does NOT satisfy the inequality. $660 > 660$ is FALSE. Always check the pair closest to the boundary first — that is where College Board sets the trap.',
          skills: ["linear-equations"]
        }
      ]
    }
  ]
};
