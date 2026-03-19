// Practice Test 4 - SAT Math
// 2 Modules, 22 questions each (44 total)
// Original questions modeled after College Board SAT Practice Test #3 with enhanced explanations

export const practiceTest4 = {
  id: "practice-test-4",
  title: "Practice Test 4",
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
          type: "fill-in",
          difficulty: "easy",
          question: "A gym membership has a one-time signup fee and a monthly charge. The equation $C = 400 + 320t$ gives the total amount paid $C$, in dollars, after $t$ months. A second gym charges no signup fee but a higher monthly rate. The total cost at the second gym after $t$ months is given by $C = 360t$. After how many months will the total cost at the two gyms be equal?",
          correctAnswer: '10',
          explanation: "**SAT Pattern: Comparing Two Linear Cost Models** -- The SAT frequently asks you to set two linear equations equal and solve. This requires recognizing which terms to isolate.\n\n**The correct answer is 10.**\n\n**The Fast Way (20 seconds):** Set the two cost equations equal: $400 + 320t = 360t$. Subtract $320t$: $400 = 40t$, so $t = 10$.\n\n**Solution Steps:**\n• First gym: $C_1 = 400 + 320t$\n• Second gym: $C_2 = 360t$\n• Set equal: $400 + 320t = 360t$\n• $400 = 360t - 320t = 40t$\n• $t = 400 \\div 40 = 10$\n\nThe first gym has a higher upfront cost ($\\$400$ signup fee) but a lower monthly rate ($\\$320$ vs. $\\$360$). The break-even point is when the savings on monthly fees offset the signup fee.\n\n**Verification:** First gym at $t = 10$: $400 + 3{,}200 = 3{,}600$. Second gym at $t = 10$: $360 \\times 10 = 3{,}600$. Both equal $\\$3{,}600$.\n\n**Test Day Takeaway:** When comparing two linear models, set them equal and solve. The signup fee divided by the difference in monthly rates gives the break-even point: $400 \\div (360 - 320) = 400 \\div 40 = 10$.",
          skills: ["linear-equations", "word-problems"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "$5$ less than $6$ times a number $y$ is equal to $49$. When the value of $y$ that satisfies this condition is substituted into the expression $3y + 2$, what is the result?",
          choices: [
            { id: "A", text: "$20$" },
            { id: "B", text: "$29$" },
            { id: "C", text: "$47$" },
            { id: "D", text: "$56$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Translate, Solve, Then Evaluate** -- A two-step problem that requires translating a word phrase into an equation, solving for the variable, and then evaluating a separate expression. The SAT uses this to test both translation accuracy and follow-through.\n\n**Choice B is correct.** The result is $29$.\n\n**The Fast Way (20 seconds):** Translate: $6y - 5 = 49$, so $6y = 54$, giving $y = 9$. Then $3(9) + 2 = 29$. Pick B.\n\n**Solution Steps:**\n• \"$5$ less than $6$ times $y$\" translates to $6y - 5$\n• Set equal to $49$: $6y - 5 = 49$\n• Solve: $6y = 54$, so $y = 9$\n• Evaluate: $3(9) + 2 = 27 + 2 = 29$\n\n**Why the wrong answers are tempting:**\n• Choice A ($20$) comes from using $y = 6$ (solving $5y - 6 = 49$ by swapping the coefficients) and then computing $3(6) + 2 = 20$. The phrase \"5 less than 6 times y\" means $6y - 5$, not $5y - 6$.\n• Choice C ($47$) results from computing $6y - 5 = 49$ correctly to get $y = 9$, but then evaluating $6(9) - 5 = 49$ — re-evaluating the original expression instead of $3y + 2$.\n• Choice D ($56$) comes from computing $6y + 2 = 6(9) + 2 = 56$, using $6y$ instead of $3y$ in the final expression.\n\n**Verification:** $6(9) - 5 = 54 - 5 = 49$. Then $3(9) + 2 = 29$.\n\n**Test Day Takeaway:** Read the full question before solving. Multi-step problems often ask you to solve for a variable and then plug it into a different expression — not just find the variable itself.",
          skills: ["Algebra", "Translating word problems"]
        },
        {
          id: 3,
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'For a heat wave in a certain city, the minimum temperature recorded was $85°F$, and the maximum temperature recorded was $108°F$. Which inequality is true for all values of $t$, where $t$ represents a temperature, in $°F$, recorded during this heat wave?',
          choices: [
            { id: 'A', text: '$t \\geq 108$' },
            { id: 'B', text: '$t \\geq 85$' },
            { id: 'C', text: '$0 \\leq t \\leq 85$' },
            { id: 'D', text: '$85 \\leq t \\leq 108$' }
          ],
          correctAnswer: 'D',
          explanation: '**SAT Pattern: Compound Inequality from Context** -- The SAT regularly tests whether you can express a real-world range as a double inequality. Expect 1-2 per test.\n\n**Choice D is correct.** Every temperature $t$ recorded during the heat wave satisfies $85 \\leq t \\leq 108$.\n\n**The Fast Way (10 seconds):** The minimum is $85$ and the maximum is $108$. Every recorded temperature sits between those two values, inclusive. Only Choice D captures both bounds: $85 \\leq t \\leq 108$.\n\n**Solution Steps:**\n• Minimum temperature: $85°F$ (so $t \\geq 85$)\n• Maximum temperature: $108°F$ (so $t \\leq 108$)\n• Combined: $85 \\leq t \\leq 108$\n\n**Why the wrong answers are tempting:**\n• Choice A says $t \\geq 108$, which only includes the maximum and above. Students sometimes latch onto the biggest number and write the inequality in the wrong direction, missing everything below $108$.\n• Choice B says $t \\geq 85$, which correctly sets the floor but has no ceiling. This would allow temperatures of $200°F$ or higher, which were never recorded.\n• Choice C says $0 \\leq t \\leq 85$, which caps at the minimum instead of starting there. It treats $85$ as the upper bound rather than the lower one.\n\n**Verification:** At the boundaries: $85 \\leq 85 \\leq 108$ and $85 \\leq 108 \\leq 108$. Both check out.\n\n**Test Day Takeaway:** When a problem gives you a min and max, the answer is almost always a compound inequality: min $\\leq$ variable $\\leq$ max.',
          skills: ["linear-equations"]
        },
        {
          id: 4,
          type: "fill-in",
          difficulty: "easy",
          question: "A baker spent \\$42 on flour at \\$6 per bag and \\$28 on sugar at \\$4 per bag. How many total bags of ingredients did the baker purchase?",
          correctAnswer: "14",
          explanation: "**SAT Pattern: Multiple Unit Rates Combined** -- The SAT often requires you to compute two separate quantities and combine them. Read carefully to avoid mixing up which total goes with which rate.\n\n**The correct answer is $14$.**\n\n**The Fast Way (15 seconds):** Flour bags: $42 \\div 6 = 7$. Sugar bags: $28 \\div 4 = 7$. Total: $7 + 7 = 14$.\n\n**Solution Steps:**\n• Flour: $\\$42 \\div \\$6/\\text{bag} = 7$ bags\n• Sugar: $\\$28 \\div \\$4/\\text{bag} = 7$ bags\n• Total bags $= 7 + 7 = 14$\n\n**Common Mistakes:**\n• Dividing total spending ($42 + 28 = 70$) by one of the unit prices (e.g., $70 \\div 6 \\approx 11.7$). You cannot combine the dollar amounts first because the items have different prices.\n• Swapping the prices: dividing $\\$42$ by $\\$4$ and $\\$28$ by $\\$6$, which gives non-integer results — a signal that something is wrong on the SAT.\n\n**Verification:** $7 \\times 6 = 42$ and $7 \\times 4 = 28$. Total: $7 + 7 = 14$ bags.\n\n**Test Day Takeaway:** When a problem involves two different unit rates, compute each quantity separately before combining. Pooling the totals and dividing by a single rate is a common trap.",
          skills: ["Problem-Solving and Data Analysis", "Unit rates"]
        },
        {
          id: 5,
          type: 'fill-in',
          difficulty: 'medium',
          question: '$18, 24, 24, 31, 35, 38, 56$\n\nA teacher curves the $7$ test scores shown by adding $12$ points to each score. What is the median of the curved scores?',
          correctAnswer: '43',
          explanation: '**SAT Pattern: Effect of a Constant Shift on Statistics** -- The SAT tests whether you understand how adding a constant to every data value affects measures of center and spread.\n\n**The correct answer is $43$.**\n\n**The Fast Way (15 seconds):** The data is already sorted. The median of the original $7$ values is the $4$th value: $31$. Adding $12$ to every score shifts the median by $12$: $31 + 12 = 43$.\n\n**Solution Steps:**\n• Original data in order: $18, 24, 24, 31, 35, 38, 56$\n• Median of $7$ values $=$ middle value $=$ $4$th value $= 31$\n• Curving adds $12$ to every score, so the median also increases by $12$\n• Curved median $= 31 + 12 = 43$\n\n**Common Mistakes:**\n• Computing the range ($56 - 18 = 38$) instead of the median. Range and median are different statistics — read the question carefully.\n• Forgetting to add the curve: reporting $31$ instead of $43$.\n• Computing the mean instead of the median: the mean of the original data is about $32.3$, which would give $44.3$ after the curve — not the same as $43$.\n\n**Verification:** Curved scores: $30, 36, 36, 43, 47, 50, 68$. Middle value: $43$.\n\n**Test Day Takeaway:** Adding a constant $c$ to every value shifts the mean and median by $c$ but does not change the range, IQR, or standard deviation. The SAT frequently tests this distinction.',
          skills: ["range-calculation"]
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The equation $T = 72 - 2h$ models the temperature $T$, in degrees Fahrenheit, of a room $h$ hours after the air conditioning is turned on. What does the number $2$ represent in this equation?",
          choices: [
            { id: "A", text: "The initial temperature of the room" },
            { id: "B", text: "The temperature after 2 hours" },
            { id: "C", text: "The decrease in temperature per hour" },
            { id: "D", text: "The number of hours until the room reaches its minimum temperature" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Interpreting Slope in Context** -- The SAT loves asking what the slope or y-intercept means in a real-world equation. Expect 1-3 of these per test.\n\n**Choice C is correct.** The number $2$ represents the decrease in temperature per hour.\n\n**The Fast Way (10 seconds):** In $T = 72 - 2h$, the coefficient of $h$ is $-2$. That is the slope, which means the rate of change. The temperature drops $2°F$ every hour. Choice C.\n\n**Solution Steps:**\n• $72$ is the y-intercept (initial temperature when $h = 0$)\n• $-2$ is the slope (rate of change per hour)\n• The negative sign means temperature is decreasing\n• The magnitude $2$ means it drops by $2°F$ each hour\n\n**Why the wrong answers are tempting:**\n• Choice A says $2$ is the initial temperature. That is actually $72$, not $2$. Students sometimes confuse the slope with the y-intercept, especially when the slope is a small number.\n• Choice B says $2$ is the temperature after $2$ hours. But the temperature after $2$ hours is $72 - 2(2) = 68°F$. This answer confuses the coefficient itself with a plugged-in result.\n• Choice D says $2$ is the number of hours to reach a minimum. But this linear model has no built-in minimum -- it just keeps decreasing. The number $2$ describes the rate, not a time.\n\n**Verification:** At $h = 1$: $T = 70$. At $h = 2$: $T = 68$. The drop is $2°F$ per hour.\n\n**Test Day Takeaway:** In $y = mx + b$, the slope $m$ always describes the rate of change per unit. When they ask \"what does this number represent,\" look at whether it is the slope or the intercept.",
          skills: ["slope-interpretation", "linear-models"]
        },
        {
          id: 7,
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The equation $x + y = 1{,}320$ represents the number of minutes of daylight (between sunrise and sunset), $x$, and the number of minutes of non-daylight, $y$, on a particular day in Portland, Oregon. If this day has $580$ minutes of daylight, how many minutes of non-daylight does it have?',
          choices: [
            { id: 'A', text: '$580$' },
            { id: 'B', text: '$740$' },
            { id: 'C', text: '$1{,}253$' },
            { id: 'D', text: '$1{,}320$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Substitution into a Linear Equation** -- A bread-and-butter algebra question. Appears frequently in Module 1.\n\n**Choice B is correct.** There are $740$ minutes of non-daylight.\n\n**The Fast Way (10 seconds):** $y = 1{,}320 - 580 = 740$. Pick B.\n\n**Solution Steps:**\n• Substitute $x = 580$ into $x + y = 1{,}320$\n• $580 + y = 1{,}320$\n• $y = 1{,}320 - 580 = 740$\n\n**Why the wrong answers are tempting:**\n• Choice A ($580$) is the number of daylight minutes that was given to you in the problem. Under time pressure, students sometimes re-select the input value instead of solving for the unknown.\n• Choice C ($1{,}253$) has no mathematical basis -- it likely results from a subtraction or digit-transposition error. It is there to catch careless arithmetic.\n• Choice D ($1{,}320$) is the total minutes in the day. Students who identify the total but forget to subtract the daylight portion end up here.\n\n**Verification:** $580 + 740 = 1{,}320$.\n\n**Test Day Takeaway:** When one variable is given, plug it in and solve for the other. Do not accidentally re-select the value you were given.',
          skills: ["substitution-method", "setting-up-systems"]
        },
        {
          id: 8,
          type: 'fill-in',
          difficulty: 'medium',
          question: 'In a right triangle, one leg has length $9$ and the hypotenuse has length $41$. What is the value of $\\cos(x°)$, where $x°$ is the angle opposite the leg of length $9$? Express your answer as a fraction.',
          correctAnswer: '40/41',
          explanation: '**SAT Pattern: SOH-CAH-TOA with Pythagorean Theorem** -- Trig ratios in right triangles appear on nearly every SAT. Know your Pythagorean triples to save time.\n\n**The correct answer is $\\frac{40}{41}$.**\n\n**The Fast Way (20 seconds):** Recognize the 9-40-41 Pythagorean triple (a multiple-friendly cousin of 3-4-5). The missing leg is $40$. Cosine = adjacent/hypotenuse = $40/41$.\n\n**Solution Steps:**\n• Find the missing leg: $9^2 + b^2 = 41^2$, so $b^2 = 1681 - 81 = 1600$, giving $b = 40$\n• Angle $x°$ is opposite the leg of length $9$, so the adjacent leg is $40$ and the hypotenuse is $41$\n• $\\cos(x°) = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{40}{41}$\n\n**Verification:** $9^2 + 40^2 = 81 + 1600 = 1681 = 41^2$. The triple checks out.\n\n**Test Day Takeaway:** SOH-CAH-TOA -- Cosine = Adjacent over Hypotenuse. The most common mistake is confusing the opposite and adjacent sides. The side opposite an angle is the one across from it; the adjacent side is the one that touches the angle (and is not the hypotenuse).',
          skills: ["soh-cah-toa", "pythagorean-theorem"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Tank A contains $240$ gallons and drains at $15$ gallons per minute. Tank B contains $100$ gallons and is being filled at $5$ gallons per minute. After how many minutes will the two tanks contain the same amount of water?",
          choices: [
            { id: "A", text: "$5$" },
            { id: "B", text: "$7$" },
            { id: "C", text: "$8$" },
            { id: "D", text: "$10$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Setting Two Linear Models Equal** -- This combines building two linear models (one decreasing, one increasing) and solving for their intersection. A multi-step problem that tests rate modeling and equation solving.\n\n**Choice B is correct.** The tanks contain the same amount after $7$ minutes.\n\n**The Fast Way (25 seconds):** Tank A: $240 - 15m$. Tank B: $100 + 5m$. Set equal: $240 - 15m = 100 + 5m$. So $140 = 20m$, giving $m = 7$.\n\n**Solution Steps:**\n• Tank A after $m$ minutes: $W_A = 240 - 15m$\n• Tank B after $m$ minutes: $W_B = 100 + 5m$\n• Set equal: $240 - 15m = 100 + 5m$\n• $240 - 100 = 15m + 5m$\n• $140 = 20m$, so $m = 7$\n\n**Why the wrong answers are tempting:**\n• Choice A ($5$) comes from dividing $100 \\div 20 = 5$, using the wrong starting difference. The gap is $240 - 100 = 140$, not $100$.\n• Choice C ($8$) results from computing $240 \\div (15 + 5) = 12$... no, more likely from an arithmetic slip like $140 \\div 17.5 = 8$. Under time pressure, mis-adding the rates ($15 + 5 = 17.5$?) can happen.\n• Choice D ($10$) comes from $240 \\div (15 + 5 + \\text{error}) = 10$ or from confusing Tank A's drain time ($240 \\div 15 = 16$) with the intersection time.\n\n**Verification:** At $m = 7$: Tank A $= 240 - 105 = 135$. Tank B $= 100 + 35 = 135$. Both equal $135$ gallons.\n\n**Test Day Takeaway:** When two quantities change at different rates, model each one separately and set the expressions equal. The closing rate is the sum of the individual rates when one is increasing and the other decreasing.",
          skills: ["linear-models", "rate-problems"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The table shows some values of a function. Based on the pattern, which type of function could represent the data?",
          questionTable: {
            headers: ["$x$", "$f(x)$"],
            rows: [
              ["$0$", "$3$"],
              ["$1$", "$6$"],
              ["$2$", "$12$"],
              ["$3$", "$24$"],
              ["$4$", "$48$"]
            ]
          },
          choices: [
            { id: "A", text: "Linear" },
            { id: "B", text: "Quadratic" },
            { id: "C", text: "Exponential" },
            { id: "D", text: "Absolute value" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Identifying Function Type from a Table** -- The SAT tests this regularly. The trick is knowing what to check: constant differences = linear, constant ratios = exponential.\n\n**Choice C is correct.** The data represents an exponential function.\n\n**The Fast Way (15 seconds):** Divide consecutive outputs: $6/3 = 2$, $12/6 = 2$, $24/12 = 2$, $48/24 = 2$. The ratio is constant at $2$. Constant ratio = exponential. Pick C.\n\n**Solution Steps:**\n• Check for constant difference (linear): $6-3=3$, $12-6=6$, $24-12=12$, $48-24=24$. Not constant -- so not linear.\n• Check for constant ratio (exponential): $6/3=2$, $12/6=2$, $24/12=2$, $48/24=2$. Constant ratio of $2$ -- exponential.\n• The function is $f(x) = 3(2)^x$.\n\n**Why the wrong answers are tempting:**\n• Choice A (Linear) is what students pick when they only glance at the first difference ($6 - 3 = 3$) and assume the pattern continues. But the differences grow ($3, 6, 12, 24$), so this is not linear.\n• Choice B (Quadratic) would require constant second differences. The second differences here are $3, 6, 12$ -- still not constant. Quadratic growth is much slower than what this table shows.\n• Choice D (Absolute value) would create a V-shaped pattern with a turning point. This data only increases and has no symmetry.\n\n**Verification:** $f(x) = 3(2)^x$: $f(0)=3$, $f(1)=6$, $f(2)=12$, $f(3)=24$, $f(4)=48$. All match.\n\n**Test Day Takeaway:** Constant differences between outputs means linear. Constant ratios between outputs means exponential. Always check ratios first -- it is faster.",
          skills: ["function-identification", "exponential-functions"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "hard",
          question: "$18x + y = 36$\n$5x + y = 62$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $x^2 + y$?",
          correctAnswer: "76",
          explanation: "**SAT Pattern: System of Equations with Expression Evaluation** -- The SAT often asks for a combined expression rather than a single variable, requiring you to solve the full system and then compute an additional step.\n\n**The correct answer is $76$.**\n\n**The Fast Way (30 seconds):** Subtract the equations to eliminate $y$: $(18x + y) - (5x + y) = 36 - 62$, giving $13x = -26$, so $x = -2$. Back-substitute: $5(-2) + y = 62$, so $y = 72$. Then $x^2 + y = 4 + 72 = 76$.\n\n**Solution Steps:**\n• Subtract equation 2 from equation 1: $13x = -26$, so $x = -2$\n• Substitute into equation 2: $-10 + y = 62$, so $y = 72$\n• Compute: $x^2 + y = (-2)^2 + 72 = 4 + 72 = 76$\n\n**Common Mistakes:**\n• Reporting $y = 72$ without computing the requested expression $x^2 + y$. Always re-read what the question asks for.\n• Computing $x + y = -2 + 72 = 70$ instead of $x^2 + y$. The exponent on $x$ matters — missing it costs you the point.\n• Sign error: using $x^2 = -4$ instead of $(-2)^2 = 4$. Squaring a negative number always gives a positive result.\n\n**Verification:**\n• Equation 1: $18(-2) + 72 = -36 + 72 = 36$ ✓\n• Equation 2: $5(-2) + 72 = -10 + 72 = 62$ ✓\n• $x^2 + y = 4 + 72 = 76$ ✓\n\n**Test Day Takeaway:** When the SAT asks for an expression like $x^2 + y$ rather than just $x$ or $y$, solve the system completely first, then substitute into the expression. Watch for sign errors when squaring negative values.",
          skills: ["Algebra", "Systems of equations"]
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Marcus saves money each week to buy a new gaming console. The function $f(t) = 75 + 40t$ gives the amount, in dollars, Marcus has saved after $t$ weeks of saving. What is the best interpretation of $40$ in this context?",
          choices: [
            { id: "A", text: "With each week of saving, Marcus's total savings increased by \\$40." },
            { id: "B", text: "Before Marcus started saving, he had \\$40." },
            { id: "C", text: "After 1 week of saving, Marcus had \\$40." },
            { id: "D", text: "Marcus saved for a total of 40 weeks." }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Interpreting Slope in a Linear Function** -- This is one of the College Board's favorite question types. They give you a linear model and ask what a specific number means in context. Expect 1-3 per test.\n\n**Choice A is correct.** The $40$ means Marcus's total savings increase by \\$40 each week.\n\n**The Fast Way (10 seconds):** In $f(t) = 75 + 40t$, the $40$ is the coefficient of $t$, which is the slope. Slope = rate of change = how much savings grow per week. That matches Choice A.\n\n**Solution Steps:**\n• The slope is $40$, meaning each additional week adds \\$40 to the total\n• The y-intercept is $75$, meaning Marcus started with \\$75 before he began saving weekly\n\n**Why the wrong answers are tempting:**\n• Choice B says Marcus started with \\$40, but the starting amount is actually $f(0) = 75$. Students who confuse the slope with the y-intercept land here.\n• Choice C says Marcus had \\$40 after 1 week, but $f(1) = 75 + 40 = 115$. The $40$ is the weekly increase, not the total after any particular week.\n• Choice D says Marcus saved for 40 weeks total. But $40$ is a dollar amount per week (a rate), not a number of weeks. The variable $t$ tracks weeks, not the coefficient.\n\n**Verification:** $f(0) = 75$, $f(1) = 115$, $f(2) = 155$. Each week adds exactly \\$40.\n\n**Test Day Takeaway:** Slope = rate of change. Y-intercept = starting value. The SAT always has trap answers that swap these two roles.",
          skills: ["Algebra", "Linear function interpretation"]
        },
        {
          id: 13,
          type: "multiple-choice",
          difficulty: "medium",
          question: "For the linear function $g$, the table shows three values of $x$ and their corresponding values of $g(x)$. Which equation defines $g(x)$?",
          diagram: {
            type: "table",
            params: {
              xHeader: "x",
              yHeader: "g(x)",
              rows: [
                [0, 17],
                [1, 21],
                [2, 25]
              ]
            }
          },
          choices: [
            { id: "A", text: "$g(x) = 4x + 17$" },
            { id: "B", text: "$g(x) = 17x + 21$" },
            { id: "C", text: "$g(x) = 25x + 17$" },
            { id: "D", text: "$g(x) = 21x + 25$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Finding a Linear Equation from a Table** -- A classic Module 1 question. When the table includes $x = 0$, the y-intercept is handed to you for free.\n\n**Choice A is correct.** The equation is $g(x) = 4x + 17$.\n\n**The Fast Way (15 seconds):** The table gives $g(0) = 17$, so the y-intercept is $17$. The slope is $21 - 17 = 4$ (the change from $x = 0$ to $x = 1$). So $g(x) = 4x + 17$. Pick A.\n\n**Solution Steps:**\n• Slope $= \\frac{21 - 17}{1 - 0} = 4$\n• Y-intercept: when $x = 0$, $g(x) = 17$\n• Equation: $g(x) = 4x + 17$\n\n**Why the wrong answers are tempting:**\n• Choice B ($17x + 21$) uses the output values from the table as slope and intercept, but in the wrong roles. The $17$ is a function value at $x = 0$ (the intercept, not the slope), and $21$ is a function value at $x = 1$ (not the intercept).\n• Choice C ($25x + 17$) grabs $25$ from the table (the value at $x = 2$) and uses it as the slope. But the slope is the change between consecutive outputs, not a single output value.\n• Choice D ($21x + 25$) similarly misuses table values as slope and intercept. A quick check shows $g(0) = 21(0) + 25 = 25$, which does not match the table.\n\n**Verification:** $g(0) = 17$, $g(1) = 21$, $g(2) = 25$. All match the table.\n\n**Test Day Takeaway:** When a table includes $x = 0$, read the y-intercept directly. Then find the slope from the difference between consecutive outputs. Plug both into $y = mx + b$.",
          skills: ["Algebra", "Linear functions"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Line $p$ in the $xy$-plane has a slope of $-\\frac{1}{4}$ and passes through the point $(8, 5)$. Which equation defines line $p$?",
          choices: [
            { id: "A", text: "$y = 8x - \\frac{1}{4}$" },
            { id: "B", text: "$y = 5x + 8$" },
            { id: "C", text: "$y = -\\frac{x}{4} + 5$" },
            { id: "D", text: "$y = -\\frac{x}{4} + 7$" }
          ],
          correctAnswer: "D",
          explanation: "**SAT Pattern: Writing a Line Equation from Slope and a Point** -- This exact setup appears on almost every SAT. Point-slope form is your best friend here.\n\n**Choice D is correct.** The equation of line $p$ is $y = -\\frac{x}{4} + 7$.\n\n**The Fast Way (20 seconds):** Plug the point $(8, 5)$ into each answer choice. Only Choice D works: $-\\frac{8}{4} + 7 = -2 + 7 = 5$. Done. No algebra needed.\n\n**Solution Steps (algebraic approach):**\n• Point-slope form: $y - 5 = -\\frac{1}{4}(x - 8)$\n• Distribute: $y - 5 = -\\frac{x}{4} + 2$\n• Add $5$: $y = -\\frac{x}{4} + 7$\n\n**Why the wrong answers are tempting:**\n• Choice A uses $8$ as the slope and $-\\frac{1}{4}$ as the intercept, completely swapping the given slope with a coordinate. When you see multiple numbers in a problem, it is easy to grab the wrong one.\n• Choice B uses the point coordinates ($5$ and $8$) as the slope and intercept. This happens when students skip the algebra and just plug numbers into $y = mx + b$ by feel.\n• Choice C has the correct slope $(-\\frac{1}{4})$ but the wrong y-intercept. It looks right at first glance, but plugging in the point reveals it: $-\\frac{8}{4} + 5 = 3$, not $5$. The error comes from skipping the point-slope step.\n\n**Verification:** At $x = 8$: $y = -\\frac{8}{4} + 7 = -2 + 7 = 5$. The line passes through $(8, 5)$ with slope $-\\frac{1}{4}$.\n\n**Test Day Takeaway:** When you have a slope and a point, you can either use point-slope form or just plug the point into each answer choice. Plugging in is often faster on multiple-choice questions.",
          skills: ["Algebra", "Linear equations"]
        },
        {
          id: 15,
          type: 'fill-in',
          difficulty: 'hard',
          question: '$y = 5x$\n$y = x^2 - 6$\n\nA solution to the given system of equations is $(x, y)$, where $x > 0$. What is the value of $x$?',
          correctAnswer: '6',
          explanation: '**SAT Pattern: Linear-Quadratic System** -- When one equation is linear and the other is quadratic, set them equal and solve the resulting quadratic. The SAT tests this 1-2 times per exam.\n\n**The correct answer is $6$.**\n\n**The Fast Way (20 seconds):** Type both equations into Desmos ($y = 5x$ and $y = x^2 - 6$) and read the intersection point where $x > 0$. You will see $x = 6$.\n\n**Solution Steps:**\n• Set the $y$-expressions equal: $5x = x^2 - 6$\n• Rearrange to standard form: $x^2 - 5x - 6 = 0$\n• Factor: $(x - 6)(x + 1) = 0$\n• Solutions: $x = 6$ or $x = -1$\n• Since $x > 0$, the answer is $x = 6$\n\n**Verification:** When $x = 6$: $y = 5(6) = 30$ and $y = 6^2 - 6 = 36 - 6 = 30$. Both equations give the same $y$-value.\n\n**Test Day Takeaway:** When a problem says $x > 0$, that is a hint that you will get two solutions and need to discard one. Always re-read the constraint before entering your answer.',
          skills: ["substitution-method", "identify-quadratic"]
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $f(x) = 315(1.028)^x$ models the value, in dollars, of a savings bond by the end of each year from 1985 through 2000, where $x$ is the number of years after 1985. Which of the following is the best interpretation of \"$f(4)$ is approximately equal to $352$\" in this context?",
          choices: [
            { id: "A", text: "The value of the savings bond is estimated to be approximately $4$ dollars greater in 1989 than in 1985." },
            { id: "B", text: "The value of the savings bond is estimated to be approximately \\$352 in 1989." },
            { id: "C", text: "The value, in dollars, of the savings bond is estimated to be approximately $4$ times greater in 1989 than in 1985." },
            { id: "D", text: "The value of the savings bond is estimated to increase by approximately \\$352 every 4 years between 1985 and 2000." }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Interpreting Function Notation in Context** -- The SAT loves giving you $f(a) = b$ and asking what it means. The key is mapping the input to its real-world meaning and the output to its real-world meaning.\n\n**Choice B is correct.** The savings bond is estimated to be worth approximately \\$352 in 1989.\n\n**The Fast Way (10 seconds):** $f(4) \\approx 352$ means: when the input is $4$ (i.e., $4$ years after 1985 = 1989), the output is $352$ (i.e., the bond is worth \\$352). That is exactly Choice B.\n\n**Solution Steps:**\n• $x = 4$ means $4$ years after 1985, which is 1989\n• $f(4)$ gives the value of the bond at that time\n• $f(4) \\approx 352$ means the bond is worth about \\$352 in 1989\n\n**Why the wrong answers are tempting:**\n• Choice A says the bond increased by \\$4 between 1985 and 1989. This confuses the input ($4$ years) with a dollar amount. The $4$ is a time value, not a money value.\n• Choice C says the bond is $4$ times greater. The growth factor in the function is $1.028$, not $4$. Students sometimes grab the input value and misinterpret it as a multiplier.\n• Choice D says the bond increases by \\$352 every $4$ years. But exponential growth does not produce a constant dollar increase -- the increase gets larger each period. This interpretation would only work for a linear function.\n\n**Verification:** $f(4) = 315(1.028)^4 \\approx 315 \\times 1.117 \\approx 351.8 \\approx 352$.\n\n**Test Day Takeaway:** In $f(a) = b$, the input $a$ and output $b$ each have real-world meanings. Read the function definition to know what the input and output represent, then match to the answer choices.",
          skills: ["Algebra", "Exponential functions"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A rectangular garden has a length-to-width ratio of $3:1$. If the perimeter of the garden is $96$ feet, and the gardener increases the width by $4$ feet while maintaining the $3:1$ ratio, what is the area, in square feet, of the new garden?",
          choices: [
            { id: "A", text: "$432$" },
            { id: "B", text: "$588$" },
            { id: "C", text: "$768$" },
            { id: "D", text: "$867$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Ratio + Perimeter + Area (Multi-Concept)** -- This problem chains three concepts: using a ratio to express dimensions, solving via perimeter, and computing area after a change. Each step builds on the previous one.\n\n**Choice C is correct.** The area of the new garden is $768$ square feet.\n\n**The Fast Way (35 seconds):** Ratio $3:1$ means $l = 3w$. Perimeter: $2(3w + w) = 96$, so $8w = 96$, giving $w = 12$ and $l = 36$. After the increase: $w = 16$, $l = 3 \\times 16 = 48$. New area $= 48 \\times 16 = 768$.\n\n**Solution Steps:**\n• Ratio $3:1$ means $l = 3w$\n• Perimeter: $2(l + w) = 96$, so $2(3w + w) = 96$, giving $8w = 96$ and $w = 12$, $l = 36$\n• Width increases by $4$: new $w = 16$, new $l = 3 \\times 16 = 48$\n• New area $= 48 \\times 16 = 768$ sq ft\n\n**Why the wrong answers are tempting:**\n• Choice A ($432$) is the original area $36 \\times 12 = 432$. Students who find the dimensions correctly but forget to apply the increase end up here.\n• Choice B ($588$) comes from increasing only the width ($16$) but keeping the original length ($36$): $36 \\times 16 = 576$... close to $588$. This reflects the mistake of not updating the length to maintain the ratio.\n• Choice D ($867$) comes from increasing the width by $5$ instead of $4$: $w = 17$, $l = 51$, area $= 51 \\times 17 = 867$. A careless misread of the increase amount.\n\n**Verification:** $2(48 + 16) = 128$ (new perimeter). $48/16 = 3$ (ratio maintained). $48 \\times 16 = 768$.\n\n**Test Day Takeaway:** Multi-concept problems require chaining steps: ratio → dimensions → perimeter → change → area. Write down each intermediate value to avoid losing track.",
          skills: ["Problem-Solving and Data Analysis", "Ratios"]
        },
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The scatterplot shows the relationship between two variables, $x$ and $y$. Which of the following equations is the most appropriate linear model for the data shown?",
          diagram: {
            type: "scatterplot",
            params: {
              points: [
                [1, 8], [1, 9], [2, 9], [2, 10], [3, 10],
                [3, 11], [4, 12], [4, 13], [5, 14], [5, 15],
                [6, 15], [6, 16], [7, 17], [7, 18], [8, 19]
              ],
              xLabel: "$x$",
              yLabel: "$y$",
              xMax: 10,
              yMax: 20
            }
          },
          choices: [
            { id: "A", text: "$y = 1.5 + 7.2x$" },
            { id: "B", text: "$y = 1.5 - 7.2x$" },
            { id: "C", text: "$y = 7.2 + 1.5x$" },
            { id: "D", text: "$y = 7.2 - 1.5x$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Line of Best Fit from a Scatterplot** -- The SAT often gives you a scatterplot and asks you to pick the equation. Use direction first (positive or negative slope) to eliminate half the choices.\n\n**Choice C is correct.** The equation $y = 7.2 + 1.5x$ is the most appropriate linear model.\n\n**The Fast Way (15 seconds):** The data goes up as $x$ increases, so the slope must be positive. That eliminates Choices B and D (both have negative slopes). Between A and C, Choice A has a slope of $7.2$, which is way too steep. Choice C has a slope of $1.5$, which matches the gentle upward trend.\n\n**Solution Steps:**\n• The scatterplot shows a positive trend, so slope must be positive (eliminates B and D)\n• Estimate the slope: from $x = 1$ ($y \\approx 8.5$) to $x = 8$ ($y \\approx 19$), rise $\\approx 10.5$ over run $= 7$, so slope $\\approx 1.5$\n• The y-intercept should be around $7$-$8$ (extrapolating back to $x = 0$)\n• Choice C: $y = 7.2 + 1.5x$ fits both criteria\n\n**Why the wrong answers are tempting:**\n• Choice A ($y = 1.5 + 7.2x$) has the slope and intercept swapped. A slope of $7.2$ would mean $y$ jumps by more than $7$ for every unit increase in $x$, but the data only rises by about $1.5$ per unit. Students who do not carefully check which number is the slope get caught here.\n• Choice B ($y = 1.5 - 7.2x$) has a steep negative slope. The data clearly trends upward, not downward.\n• Choice D ($y = 7.2 - 1.5x$) has a gentle negative slope. Again, the data trends upward, so the slope must be positive.\n\n**Verification:** At $x = 1$: $y = 7.2 + 1.5 = 8.7$ (data shows $8$-$9$). At $x = 8$: $y = 7.2 + 12 = 19.2$ (data shows $19$). Both match well.\n\n**Test Day Takeaway:** On scatterplot questions, check the direction of the trend first (positive or negative slope) to immediately eliminate half the choices.",
          skills: ["Problem-Solving and Data Analysis", "Linear models"]
        },
        {
          id: 19,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A line in the $xy$-plane passes through the origin and has a slope of $3$. What is an equation of this line?",
          choices: [
            { id: "A", text: "$y = -3x$" },
            { id: "B", text: "$y = x + 3$" },
            { id: "C", text: "$y = 3x$" },
            { id: "D", text: "$y = x - 3$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Line Through the Origin** -- When a line passes through the origin, its equation simplifies to $y = mx$ (no $b$ term). This is a quick-win question.\n\n**Choice C is correct.** The equation of the line is $y = 3x$.\n\n**The Fast Way (5 seconds):** Origin means $b = 0$. Slope is $3$. So $y = 3x$. Pick C.\n\n**Solution Steps:**\n• Slope $m = 3$\n• Passes through the origin, so the y-intercept $b = 0$\n• Equation: $y = 3x$\n\n**Why the wrong answers are tempting:**\n• Choice A ($y = -3x$) has the right magnitude but the wrong sign. A slope of $3$ is positive, not negative. Students rushing through sometimes miss the sign.\n• Choice B ($y = x + 3$) places the $3$ as the y-intercept instead of the slope. This is the classic \"slope vs. intercept\" swap. A line through the origin has $b = 0$, not $b = 3$.\n• Choice D ($y = x - 3$) also has slope $1$ and a nonzero intercept. It does not pass through the origin since $y = 0 - 3 = -3$ when $x = 0$.\n\n**Verification:** At $x = 0$: $y = 0$ (passes through origin). Slope $= 3$ (matches the given slope).\n\n**Test Day Takeaway:** A line through the origin always has the form $y = mx$. If the y-intercept is not zero, the line does not pass through the origin.",
          skills: ["Algebra", "Linear equations"]
        },
        {
          id: 20,
          type: "fill-in",
          difficulty: "hard",
          question: "The function $f(x) = \\frac{x + 5}{x - 3}$ is defined for all real numbers except $x = a$. What is the value of $f(a + 4)$?",
          correctAnswer: '3',
          explanation: "**SAT Pattern: Domain Restriction Combined with Function Evaluation** -- This problem chains two skills: identifying where a rational function is undefined and then using that value in a follow-up computation.\n\n**The correct answer is $3$.**\n\n**The Fast Way (25 seconds):** The function is undefined when $x - 3 = 0$, so $a = 3$. Then $f(a + 4) = f(7) = \\frac{7 + 5}{7 - 3} = \\frac{12}{4} = 3$.\n\n**Solution Steps:**\n• $f(x)$ is undefined when the denominator equals zero: $x - 3 = 0$, so $a = 3$\n• Compute $a + 4 = 3 + 4 = 7$\n• $f(7) = \\frac{7 + 5}{7 - 3} = \\frac{12}{4} = 3$\n\n**Common Mistakes:**\n• Setting the numerator equal to zero instead of the denominator, giving $a = -5$. Then $f(-1) = \\frac{4}{-4} = -1$, which is wrong.\n• Forgetting to add $4$ to $a$: computing $f(3)$ directly, which is undefined. The question asks for $f(a + 4)$, not $f(a)$.\n• Confusing $a + 4 = 7$ with $a \\times 4 = 12$, leading to $f(12) = \\frac{17}{9}$.\n\n**Verification:** $a = 3$ (since $f(3) = \\frac{8}{0}$ is undefined). $f(7) = \\frac{12}{4} = 3$ ✓.\n\n**Test Day Takeaway:** When a problem defines a value through a domain restriction, find that value first, then use it in the next step. Chain the skills: domain → evaluate.",
          skills: ["rational-functions", "domain"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "$x(kx - 30) = -9$\n\nIn the given equation, $k$ is a positive integer constant. The equation has no real solution. What is the least possible value of $k$?",
          correctAnswer: '26',
          explanation: "**SAT Pattern: Discriminant and No Real Solutions** -- The SAT tests discriminant conditions regularly, especially with \"no real solution\" or \"exactly one solution\" phrasing. Know the three cases cold.\n\n**The correct answer is $26$.**\n\n**The Fast Way (30 seconds):** Expand to standard form $kx^2 - 30x + 9 = 0$. For no real solutions, the discriminant must be strictly negative: $(-30)^2 - 4(k)(9) < 0$, which gives $900 - 36k < 0$, so $k > 25$. The smallest integer greater than $25$ is $26$.\n\n**Solution Steps:**\n• Rewrite: $kx^2 - 30x + 9 = 0$\n• Discriminant condition for no real solutions: $b^2 - 4ac < 0$\n• $900 - 36k < 0$\n• $k > 25$\n• Since $k$ is a positive integer, the least value is $k = 26$\n\n**Verification:** With $k = 26$: discriminant $= 900 - 936 = -36 < 0$ (no real solutions). With $k = 25$: discriminant $= 900 - 900 = 0$ (one real solution, which does not satisfy \"no real solution\").\n\n**Test Day Takeaway:** Discriminant $> 0$ means two solutions. Discriminant $= 0$ means exactly one. Discriminant $< 0$ means none. When the problem says \"no real solution,\" use strict inequality ($< 0$), not $\\leq 0$.",
          skills: ['Advanced Math', 'Discriminant']
        },
        {
          id: 22,
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The function $g$ is defined by $g(x) = (x + 12)(t - x)$, where $t$ is a constant. In the $xy$-plane, the graph of $y = g(x)$ passes through the point $(20, 0)$. What is the value of $g(0)$?',
          correctAnswer: '240',
          explanation: '**SAT Pattern: Using a Point to Find an Unknown Constant** -- The SAT loves giving you a function with an unknown constant and one point on its graph. Use the point to pin down the constant, then answer whatever they ask.\n\n**The correct answer is $240$.**\n\n**The Fast Way (25 seconds):** The graph passes through $(20, 0)$, so $g(20) = 0$. Plug in: $(20 + 12)(t - 20) = 0$, meaning $32(t - 20) = 0$, so $t = 20$. Now $g(0) = (0 + 12)(20 - 0) = 12 \\times 20 = 240$.\n\n**Solution Steps:**\n• Use $g(20) = 0$: $(20 + 12)(t - 20) = 0$, giving $32(t - 20) = 0$\n• Since $32 \\neq 0$, we get $t = 20$\n• The function is $g(x) = (x + 12)(20 - x)$\n• Evaluate: $g(0) = (12)(20) = 240$\n\n**Verification:** $g(20) = (32)(0) = 0$, confirming the graph passes through $(20, 0)$.\n\n**Test Day Takeaway:** When a graph passes through $(a, 0)$, that means $f(a) = 0$. Substitute $x = a$ and the output $= 0$ to solve for the unknown constant. This is one of the most efficient ways to crack these problems.',
          skills: ["finding-function-from-conditions", "function-evaluation"]
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
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Helium is placed inside a container with a constant volume. The graph shows the estimated pressure $y$, in kilopascals (kPa), of the helium when its temperature is $x$ kelvins. According to the model, by how many kPa does the estimated pressure increase when the temperature rises from $200$ kelvins to $500$ kelvins?',
          diagram: {
            type: "linearGraph",
            params: {
              slope: 0.2,
              yIntercept: 0,
              xRange: [0, 600],
              yRange: [0, 120],
              xTickInterval: 100,
              yTickInterval: 20,
              gridInterval: 20,
              highlightPoints: [[0, 0], [400, 80]]
            }
          },
          choices: [
            { id: 'A', text: '$40$' },
            { id: 'B', text: '$60$' },
            { id: 'C', text: '$100$' },
            { id: 'D', text: '$300$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Using a Linear Graph to Find a Change** -- The SAT asks not just for a single value from a graph, but for the difference between two values. This requires finding the equation and evaluating at two points.\n\n**Choice B is correct.** The pressure increases by $60$ kPa.\n\n**The Fast Way (20 seconds):** The line passes through $(0, 0)$ and $(400, 80)$, so $y = 0.2x$. At $x = 500$: $y = 100$. At $x = 200$: $y = 40$. Increase $= 100 - 40 = 60$. Pick B.\n\n**Solution Steps:**\n• Slope $= 80/400 = 0.2$ kPa per kelvin, and the line passes through the origin\n• Equation: $y = 0.2x$\n• Pressure at $500$ K: $0.2(500) = 100$ kPa\n• Pressure at $200$ K: $0.2(200) = 40$ kPa\n• Increase $= 100 - 40 = 60$ kPa\n\n**Why the wrong answers are tempting:**\n• Choice A ($40$) is the pressure at $200$ K, not the change. Students who correctly compute $y = 40$ at $x = 200$ but forget to subtract from $y = 100$ at $x = 500$ land here.\n• Choice C ($100$) is the pressure at $500$ K. Students who compute only the endpoint without subtracting the starting pressure pick this.\n• Choice D ($300$) is the change in temperature ($500 - 200$), not the change in pressure. Confusing the $x$-axis quantity with the $y$-axis quantity is a common graph-reading error.\n\n**Verification:** $0.2(500) - 0.2(200) = 100 - 40 = 60$ kPa. Alternatively: $0.2 \\times (500 - 200) = 0.2 \\times 300 = 60$.\n\n**Test Day Takeaway:** When asked for a change, you need two values. Find the equation, evaluate at both points, and subtract. A shortcut: change in $y$ = slope $\\times$ change in $x$.',
          skills: ["slope-intercept-form", "function-evaluation"]
        },
        {
          id: 2,
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The kinetic energy, in joules, of an object with mass $8$ kilograms traveling at a speed of $v$ meters per second is given by the function $K$, where $K(v) = 4v^2$. If the speed of the object is doubled from $v$ to $2v$, the kinetic energy is multiplied by what factor?',
          choices: [
            { id: 'A', text: '$2$' },
            { id: 'B', text: '$4$' },
            { id: 'C', text: '$8$' },
            { id: 'D', text: '$16$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Effect of Input Scaling on a Quadratic Function** -- The SAT tests whether you understand how scaling the input of $f(x) = ax^2$ affects the output. Doubling the input of a squared function quadruples the output.\n\n**Choice B is correct.** The kinetic energy is multiplied by $4$.\n\n**The Fast Way (15 seconds):** $K(2v) = 4(2v)^2 = 4 \\cdot 4v^2 = 16v^2$. Original: $K(v) = 4v^2$. Ratio: $16v^2 / 4v^2 = 4$. Pick B.\n\n**Solution Steps:**\n• Original energy: $K(v) = 4v^2$\n• New energy: $K(2v) = 4(2v)^2 = 4 \\cdot 4v^2 = 16v^2$\n• Factor $= \\frac{K(2v)}{K(v)} = \\frac{16v^2}{4v^2} = 4$\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$) assumes energy scales linearly with speed. Since the speed doubled, students assume the energy also doubles. But $K$ depends on $v^2$, not $v$, so the factor is $2^2 = 4$, not $2$.\n• Choice C ($8$) might come from multiplying the mass ($8$ kg) by the scaling factor, or from confusing a cubic relationship with a quadratic one.\n• Choice D ($16$) comes from computing $K(2v) = 16v^2$ and mistaking the coefficient for the factor, without dividing by the original $K(v) = 4v^2$.\n\n**Verification:** Try specific values. $K(5) = 4(25) = 100$. $K(10) = 4(100) = 400$. Factor $= 400/100 = 4$.\n\n**Test Day Takeaway:** For any function $f(x) = ax^n$, scaling the input by factor $k$ scales the output by $k^n$. Doubling the input of a squared function multiplies the output by $2^2 = 4$.',
          skills: ["function-notation", "function-evaluation"]
        },
        {
          id: 3,
          type: "multiple-choice",
          difficulty: "easy",
          question: "A hiker walked a distance of 7,920 feet. How far did the hiker walk, in miles? (1 mile = 5,280 feet)",
          choices: [
            { id: "A", text: "0.67" },
            { id: "B", text: "1.5" },
            { id: "C", text: "2,640" },
            { id: "D", text: "13,200" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Unit Conversion** -- Simple unit conversion questions are free points. The SAT always provides the conversion factor. Just make sure you divide or multiply in the right direction.\n\n**Choice B is correct.** The hiker walked $1.5$ miles.\n\n**The Fast Way (10 seconds):** $7{,}920 \\div 5{,}280 = 1.5$. Done. On your calculator, just punch it in.\n\n**Solution Steps:**\n• Distance: $7{,}920$ feet\n• Conversion factor: $1$ mile $= 5{,}280$ feet\n• Miles $= 7{,}920 \\div 5{,}280 = 1.5$\n\n**Why the wrong answers are tempting:**\n• Choice A ($0.67$) comes from dividing the wrong way: $5{,}280 \\div 7{,}920 \\approx 0.67$. When converting from a smaller unit to a larger one, you divide the measurement by the conversion factor, not the other way around.\n• Choice C ($2{,}640$) comes from subtracting: $7{,}920 - 5{,}280 = 2{,}640$. Subtraction does not perform a unit conversion.\n• Choice D ($13{,}200$) comes from adding: $7{,}920 + 5{,}280 = 13{,}200$. Addition also does not convert units.\n\n**Verification:** $1.5 \\times 5{,}280 = 7{,}920$ feet.\n\n**Test Day Takeaway:** Converting to a bigger unit means a smaller number (divide). Converting to a smaller unit means a bigger number (multiply). If your answer does not make intuitive sense, you probably went the wrong direction.",
          skills: ["Problem-Solving and Data Analysis", "Unit conversion"]
        },
        {
          id: 4,
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'A school has $360$ students. If $25\\%$ of the students play a sport and $\\frac{1}{3}$ of the athletes also participate in a school club, how many athletes participate in a school club?',
          choices: [
            { id: 'A', text: '$30$' },
            { id: 'B', text: '$40$' },
            { id: 'C', text: '$90$' },
            { id: 'D', text: '$120$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Sequential Percent and Fraction of a Subset** -- The SAT tests whether you can apply percent and fraction calculations in sequence, working with a subset of the original group rather than the whole.\n\n**Choice A is correct.** $30$ athletes participate in a school club.\n\n**The Fast Way (15 seconds):** Athletes $= 25\\%$ of $360 = 90$. Club athletes $= \\frac{1}{3}$ of $90 = 30$. Pick A.\n\n**Solution Steps:**\n• Number of athletes: $0.25 \\times 360 = 90$\n• Athletes in a club: $\\frac{1}{3} \\times 90 = 30$\n\n**Why the wrong answers are tempting:**\n• Choice B ($40$) could come from computing $\\frac{1}{3}$ of $120$ (if a student mistakenly used $\\frac{1}{3}$ of $360 = 120$ first and then took a fraction of that) or from an arithmetic error.\n• Choice C ($90$) is the number of athletes, not the number who also participate in a club. Students who stop after the first step — finding $25\\%$ of $360$ — without applying the $\\frac{1}{3}$ condition land here.\n• Choice D ($120$) is $\\frac{1}{3}$ of $360$, applying the fraction to the entire school instead of just the athletes. The $\\frac{1}{3}$ applies only to the $90$ athletes, not all $360$ students.\n\n**Verification:** $360 \\times 0.25 = 90$ athletes. $90 \\times \\frac{1}{3} = 30$ athletes in a club.\n\n**Test Day Takeaway:** In multi-step percent problems, pay attention to which group each operation applies to. The second operation often applies to a subset, not the original total.',
          skills: ["percent-of-value"]
        },
        {
          id: 5,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A scatterplot shows a negative linear association between two variables. Which could be the equation of the line of best fit?",
          diagram: {
            type: "scatterplot",
            params: {
              points: [
                [1, 14], [1, 12], [2, 12], [2, 10], [3, 10],
                [3, 8], [4, 8], [4, 6], [5, 6], [5, 4],
                [6, 4], [6, 2], [7, 2], [7, 1]
              ],
              xLabel: "$x$",
              yLabel: "$y$",
              xMax: 8,
              yMax: 16
            }
          },
          choices: [
            { id: "A", text: "$y = 3x + 10$" },
            { id: "B", text: "$y = -2x + 15$" },
            { id: "C", text: "$y = x^2 - 4$" },
            { id: "D", text: "$y = 5$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Negative Linear Association** -- The SAT often combines scatterplot interpretation with equation identification. The fastest route is to check the sign of the slope and the type of function.\n\n**Choice B is correct.** The equation $y = -2x + 15$ has a negative slope and is linear, matching the scatterplot.\n\n**The Fast Way (10 seconds):** The data trends downward, so the slope must be negative. Only Choice B has a negative slope and is linear. Pick B.\n\n**Solution Steps:**\n• Negative association means the slope must be negative\n• The question specifies a linear model, so the equation must be of the form $y = mx + b$\n• Only $y = -2x + 15$ has a negative slope and is linear\n\n**Why the wrong answers are tempting:**\n• Choice A ($y = 3x + 10$) has a positive slope, which would show an upward trend. Students who focus only on whether an equation \"looks right\" without checking the sign of the slope might pick this.\n• Choice C ($y = x^2 - 4$) is a quadratic, not a linear equation. Even though it might vaguely fit some data, the question specifically asks for a linear model. Always read what type of function the question demands.\n• Choice D ($y = 5$) is a horizontal line with a slope of zero. This represents no association at all, not a negative association.\n\n**Verification:** At $x = 1$: $y = -2 + 15 = 13$ (data shows $12$-$14$). At $x = 7$: $y = -14 + 15 = 1$ (data shows $1$-$2$). Both match.\n\n**Test Day Takeaway:** Negative association = negative slope. Positive association = positive slope. Check the sign first, then check whether the equation is the right type (linear, quadratic, etc.).",
          skills: ["scatterplots", "linear-regression"]
        },
        {
          id: 6,
          type: "multiple-choice",
          difficulty: "hard",
          question: "An elevator can carry passengers and cargo if the combined weight is no more than $2{,}400$ pounds. Adults weigh $200$ pounds each and children weigh $60$ pounds each. If the elevator is carrying $300$ pounds of cargo and at least $3$ adults must be present, what is the maximum number of children that can also ride?",
          choices: [
            { id: "A", text: "$24$" },
            { id: "B", text: "$25$" },
            { id: "C", text: "$27$" },
            { id: "D", text: "$30$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Optimization with Multiple Constraints** -- This problem requires handling a weight-limit inequality while satisfying a minimum-count condition. Maximize one variable by minimizing the other at its required minimum.\n\n**Choice B is correct.** The maximum number of children is $25$.\n\n**The Fast Way (30 seconds):** To maximize children, minimize adults at the required minimum of $3$. Weight used: $300 + 3(200) = 900$. Remaining: $2{,}400 - 900 = 1{,}500$. Children: $1{,}500 \\div 60 = 25$.\n\n**Solution Steps:**\n• To maximize children, use the minimum number of adults: $3$\n• Weight of cargo + adults: $300 + 3(200) = 900$ pounds\n• Remaining capacity: $2{,}400 - 900 = 1{,}500$ pounds\n• Maximum children: $1{,}500 \\div 60 = 25$\n\n**Why the wrong answers are tempting:**\n• Choice A ($24$) comes from using $4$ adults instead of the minimum $3$. The extra adult consumes $200$ pounds, reducing child capacity from $25$ to about $21.7$, which rounds to $21$. Students who misread \"at least $3$\" as \"at least $4$\" or who add a safety margin end up slightly off.\n• Choice C ($27$) comes from forgetting to include the cargo: $(2{,}400 - 600) \\div 60 = 30$. That is not $27$ either, so this answer likely results from a different arithmetic error such as miscomputing $3(200) = 500$.\n• Choice D ($30$) comes from ignoring the adults entirely: $(2{,}400 - 300) \\div 60 = 35$. Not even $30$. More likely from subtracting cargo but forgetting adults and making a rounding error.\n\n**Verification:** $300 + 3(200) + 25(60) = 300 + 600 + 1{,}500 = 2{,}400$. Exactly at the limit.\n\n**Test Day Takeaway:** To maximize one quantity under constraints, minimize everything else at their required minimums. Subtract fixed and required weights first, then divide the remainder by the per-unit weight.",
          skills: ["Algebra", "Linear inequalities"]
        },
        {
          id: 7,
          type: "fill-in",
          difficulty: "medium",
          question: "$|x - 7| = 12$\n\nWhat is one possible solution to the given equation?",
          correctAnswer: "19",
          explanation: "**SAT Pattern: Absolute Value Equation** -- Absolute value equations always produce two cases. The SAT usually asks for \"one possible solution,\" so either answer works.\n\n**The correct answer is $19$ (or $-5$).**\n\n**The Fast Way (10 seconds):** Split into two cases: $x - 7 = 12$ gives $x = 19$. $x - 7 = -12$ gives $x = -5$. Enter either one.\n\n**Solution Steps:**\n• Case 1: $x - 7 = 12$, so $x = 19$\n• Case 2: $x - 7 = -12$, so $x = -5$\n• Both are valid; enter either one\n\n**Verification:**\n• $|19 - 7| = |12| = 12$\n• $|-5 - 7| = |-12| = 12$\n\n**Test Day Takeaway:** $|A| = B$ always splits into $A = B$ or $A = -B$. When the question says \"one possible solution,\" pick whichever is easier to compute and move on.",
          skills: ["Algebra", "Absolute value equations"]
        },
        {
          id: 8,
          type: 'fill-in',
          difficulty: 'hard',
          question: 'What is the slope of the graph of $y = \\frac{1}{4}(24x + 8) + 2\\left(\\frac{3}{2}\\left(x + \\frac{2}{3}\\right)\\right)$ in the $xy$-plane?',
          correctAnswer: '9',
          explanation: '**SAT Pattern: Nested Distribution to Slope-Intercept Form** -- This problem requires distributing through multiple nested parentheses before combining like terms. Each layer is straightforward, but the chain of operations tests algebraic precision.\n\n**The correct answer is $9$.**\n\n**The Fast Way (30 seconds):** Work inside out. Innermost: $\\frac{3}{2}(x + \\frac{2}{3}) = \\frac{3x}{2} + 1$. Then $2(\\frac{3x}{2} + 1) = 3x + 2$. First part: $\\frac{1}{4}(24x + 8) = 6x + 2$. Total: $y = 6x + 2 + 3x + 2 = 9x + 4$. Slope $= 9$.\n\n**Solution Steps:**\n• Distribute $\\frac{1}{4}$: $\\frac{1}{4}(24x + 8) = 6x + 2$\n• Innermost: $\\frac{3}{2}(x + \\frac{2}{3}) = \\frac{3x}{2} + 1$\n• Outer factor: $2(\\frac{3x}{2} + 1) = 3x + 2$\n• Combine: $y = 6x + 2 + 3x + 2 = 9x + 4$\n• Slope $= 9$\n\n**Common Mistakes:**\n• Forgetting to distribute the outer $2$ after simplifying the inner fraction, leaving $\\frac{3x}{2} + 1$ as the second term. This gives slope $= 6 + 1.5 = 7.5$.\n• Distributing $\\frac{3}{2}$ only to $x$ and forgetting $\\frac{2}{3}$, giving $\\frac{3x}{2}$ instead of $\\frac{3x}{2} + 1$. This drops the constant but does not affect the slope.\n• Treating $\\frac{1}{4}(24x + 8)$ as $\\frac{1}{4}(24x) + 8 = 6x + 8$ instead of $6x + 2$, by forgetting to distribute $\\frac{1}{4}$ to the $8$.\n\n**Verification:** At $x = 0$: $y = 4$. At $x = 1$: $y = 13$. Slope $= (13 - 4)/(1 - 0) = 9$.\n\n**Test Day Takeaway:** Nested expressions look intimidating but follow the same rules. Work from the innermost parentheses outward, distributing carefully at each layer. Then combine like terms to reach $y = mx + b$ form.',
          skills: ["slope-intercept-form", "equivalent-expressions"]
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In the figure, lines $m$ and $n$ are parallel and are cut by transversal $t$. If $x = 5k + 8$ and $y = 7k - 20$, what is the value of $z$?",
          diagram: {
            type: "parallelLines",
            params: {
              angles: { x: true, y: true, z: true },
              lineLabels: { m: "m", n: "n", t: "t" }
            }
          },
          choices: [
            { id: "A", text: "$14$" },
            { id: "B", text: "$28$" },
            { id: "C", text: "$78$" },
            { id: "D", text: "$102$" }
          ],
          correctAnswer: "C",
          explanation: "**SAT Pattern: Parallel Lines Cut by a Transversal** -- Geometry questions about parallel lines and angle relationships appear on most SATs. Know corresponding, alternate interior, and vertical angle rules.\n\n**Choice C is correct.** The value of $z$ is $78$.\n\n**The Fast Way (25 seconds):** Corresponding angles are equal when lines are parallel, so set $x = y$: $5k + 8 = 7k - 20$. Solve to get $k = 14$. Plug back in: $x = 5(14) + 8 = 78$. Since $z$ and $y$ are vertical angles, $z = 78$.\n\n**Solution Steps:**\n• Corresponding angles: $x = y$, so $5k + 8 = 7k - 20$\n• $28 = 2k$, so $k = 14$\n• $x = 5(14) + 8 = 78$\n• Vertical angles: $z = y = 78$\n\n**Why the wrong answers are tempting:**\n• Choice A ($14$) is the value of $k$, not the angle. This is the most common trap on these problems -- the SAT knows students will solve for $k$ and then forget to substitute back to find the actual angle measure.\n• Choice B ($28$) is $2k$, an intermediate step in the algebra. Students who stop one step too early land here.\n• Choice D ($102$) is the supplementary angle: $180 - 78 = 102$. This would be the answer if $z$ were a same-side interior angle rather than a corresponding or vertical angle. Always check which angle relationship applies.\n\n**Verification:** $x = 5(14) + 8 = 78$. $y = 7(14) - 20 = 78$. Both match, and $z = 78$.\n\n**Test Day Takeaway:** On parallel line problems, finding $k$ is only half the battle. The SAT always puts $k$ itself as a wrong answer choice. Substitute back to get the actual angle measure.",
          skills: ["Geometry", "Parallel lines"]
        },
        {
          id: 10,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Which of the following equations represents a circle in the $xy$-plane that intersects the $x$-axis at exactly one point?",
          choices: [
            { id: "A", text: "$(x - 3)^2 + (y - 4)^2 = 16$" },
            { id: "B", text: "$(x - 2)^2 + (y - 5)^2 = 16$" },
            { id: "C", text: "$(x + 1)^2 + (y - 3)^2 = 16$" },
            { id: "D", text: "$(x - 4)^2 + (y + 2)^2 = 16$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Circle Tangent to an Axis** -- The SAT tests circles in the coordinate plane regularly. \"Intersects the x-axis at exactly one point\" is code for \"tangent to the x-axis,\" which means the distance from the center to the axis equals the radius.\n\n**Choice A is correct.** The circle $(x - 3)^2 + (y - 4)^2 = 16$ is tangent to the $x$-axis.\n\n**The Fast Way (20 seconds):** All four circles have radius $r = 4$ (since $r^2 = 16$). A circle touches the $x$-axis at exactly one point when $|k| = r$. Check each center's $y$-coordinate: A has $|4| = 4 = r$. That is the only match. Pick A.\n\n**Solution Steps:**\n• The condition for tangency to the $x$-axis: $|k| = r$\n• All circles have $r = 4$\n• A: Center $(3, 4)$, $|k| = 4 = r$ -- tangent (exactly one intersection)\n• B: Center $(2, 5)$, $|k| = 5 > 4$ -- does not reach the $x$-axis at all\n• C: Center $(-1, 3)$, $|k| = 3 < 4$ -- crosses the $x$-axis at two points\n• D: Center $(4, -2)$, $|k| = 2 < 4$ -- crosses the $x$-axis at two points\n\n**Why the wrong answers are tempting:**\n• Choice B has its center $5$ units above the $x$-axis but only has a radius of $4$. It falls $1$ unit short and never touches the axis at all. Students who do not compare $|k|$ to $r$ might assume any nearby circle works.\n• Choice C has its center only $3$ units from the $x$-axis with a radius of $4$, so it pokes through the axis at two points. The question asks for exactly one point, not two.\n• Choice D has the same issue as C -- center is $2$ units from the axis with radius $4$, so it crosses twice.\n\n**Verification:** Center $(3, 4)$, radius $4$: distance to $x$-axis $= 4 = r$. Tangent at exactly one point.\n\n**Test Day Takeaway:** Circle tangent to $x$-axis means $|k| = r$. Circle tangent to $y$-axis means $|h| = r$. If $|k| < r$, the circle crosses at two points. If $|k| > r$, the circle misses entirely.",
          skills: ['Geometry', 'Circles']
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "hard",
          question: "A student buys pens and notebooks for a class. Pens cost $\\$2$ each and notebooks cost $\\$5$ each. The student needs at least $15$ items total and has a budget of $\\$50$. What is the maximum number of notebooks the student can buy?",
          correctAnswer: '6',
          explanation: "**SAT Pattern: Optimization with Two Constraints** -- The SAT occasionally gives you two inequalities and asks for the maximum or minimum of one variable. Set up both constraints, then substitute one into the other.\n\n**The correct answer is $6$.**\n\n**The Fast Way (30 seconds):** To maximize notebooks, minimize pens. The student needs at least $15$ items, so use $p = 15 - n$ (the minimum pens). Plug into the budget: $2(15 - n) + 5n \\leq 50$, giving $30 + 3n \\leq 50$, so $n \\leq 6.67$. Round down to $n = 6$.\n\n**Solution Steps:**\n• Let $p$ = pens, $n$ = notebooks\n• Budget: $2p + 5n \\leq 50$\n• Minimum items: $p + n \\geq 15$, so $p \\geq 15 - n$\n• Substitute $p = 15 - n$ into the budget: $2(15 - n) + 5n \\leq 50$\n• $30 - 2n + 5n \\leq 50$\n• $3n \\leq 20$, so $n \\leq 6.67$\n• Since $n$ must be a whole number: $n = 6$\n\n**Verification:** With $n = 6$: $p = 9$, cost $= 2(9) + 5(6) = 18 + 30 = 48 \\leq 50$. With $n = 7$: $p = 8$, cost $= 16 + 35 = 51 > 50$ (over budget).\n\n**Test Day Takeaway:** To maximize the expensive item, minimize the cheap item. Substitute the binding constraint (the one with equality) into the other inequality and solve.",
          skills: ['Problem Solving', 'Linear Inequalities']
        },
        {
          id: 12,
          type: "multiple-choice",
          difficulty: "hard",
          question: "The function $g(x) = \\sqrt{3x - 12} + \\frac{1}{x - 6}$ is defined for a range of values of $x$. What is the least integer value of $x$ for which $g(x)$ is defined?",
          choices: [
            { id: "A", text: "$4$" },
            { id: "B", text: "$5$" },
            { id: "C", text: "$6$" },
            { id: "D", text: "$7$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Combined Domain Restrictions (Radical + Rational)** -- This problem combines two domain rules: the expression under a square root must be $\\geq 0$, and a denominator cannot be $0$. You must satisfy both conditions simultaneously.\n\n**Choice A is correct.** The least integer value of $x$ for which $g(x)$ is defined is $4$.\n\n**The Fast Way (25 seconds):** Square root requires $3x - 12 \\geq 0$, so $x \\geq 4$. Denominator requires $x \\neq 6$. The least integer satisfying both is $x = 4$ (since $4 \\geq 4$ and $4 \\neq 6$).\n\n**Solution Steps:**\n• Square root condition: $3x - 12 \\geq 0 \\Rightarrow x \\geq 4$\n• Rational condition: $x - 6 \\neq 0 \\Rightarrow x \\neq 6$\n• Domain: $x \\geq 4$ and $x \\neq 6$\n• Least integer: $x = 4$\n\n**Why the wrong answers are tempting:**\n• Choice B ($5$) might be chosen by students who incorrectly solve $3x - 12 > 0$ (strict inequality) and round up, or who confuse the boundary. The square root of $0$ is defined, so $x = 4$ works.\n• Choice C ($6$) is excluded from the domain because it makes the denominator zero. Students who only check the square root condition without checking the rational part might pick $6$ as a clean answer.\n• Choice D ($7$) is the least integer greater than the excluded value $6$. Students who think $x = 6$ is the lower bound (instead of $x = 4$) and skip to the next integer arrive here.\n\n**Verification:** $g(4) = \\sqrt{0} + \\frac{1}{-2} = 0 - 0.5 = -0.5$. Defined. $g(6) = \\sqrt{6} + \\frac{1}{0}$: undefined (division by zero).\n\n**Test Day Takeaway:** When a function has multiple components, find each restriction separately and combine them. The domain is the intersection of all individual domains.",
          skills: ["function-domain", "radical-functions"]
        },
        {
          id: 13,
          type: 'fill-in',
          difficulty: 'hard',
          question: '$y + k = 3x + 5$\n\n$y - k = x^2 - 7x$\n\nIn the given system of equations, $k$ is a positive constant. The system has exactly one distinct real solution. What is the value of $k$?',
          correctAnswer: '15',
          explanation: '**SAT Pattern: Discriminant Equals Zero for Exactly One Solution** -- When a system with a linear and quadratic equation has exactly one solution, the resulting quadratic must have discriminant $= 0$. This is a harder SAT pattern but very predictable once you know it.\n\n**The correct answer is $15$.**\n\n**The Fast Way (40 seconds):** Solve both equations for $y$ and set them equal: $3x + 5 - k = x^2 - 7x + k$. Rearrange: $x^2 - 10x + (2k - 5) = 0$. For exactly one solution, discriminant $= 0$: $100 - 4(2k - 5) = 0$, giving $120 = 8k$, so $k = 15$.\n\n**Solution Steps:**\n• From equation 1: $y = 3x + 5 - k$\n• From equation 2: $y = x^2 - 7x + k$\n• Set equal: $3x + 5 - k = x^2 - 7x + k$\n• Rearrange: $x^2 - 10x + 2k - 5 = 0$\n• Discriminant $= 0$: $(-10)^2 - 4(1)(2k - 5) = 0$\n• $100 - 8k + 20 = 0$\n• $120 = 8k$, so $k = 15$\n\n**Verification:** With $k = 15$: $x^2 - 10x + 25 = (x - 5)^2 = 0$, so $x = 5$. Then $y = 3(5) + 5 - 15 = 5$. Check equation 2: $5 - 15 = -10$ and $25 - 35 = -10$. Both sides match.\n\n**Test Day Takeaway:** \"Exactly one solution\" for a linear-quadratic system means the discriminant of the resulting quadratic equals zero. Eliminate the shared variable, put it in standard form, and set $b^2 - 4ac = 0$.',
          skills: ['Advanced Math', 'Systems of Equations']
        },
        {
          id: 14,
          type: "fill-in",
          difficulty: "hard",
          question: "A store sells a jacket at a regular price of $\\$250$. During a clearance event, the jacket is first discounted by $20\\%$, and then an additional $10\\%$ is taken off the discounted price. If the final sale price is $25\\%$ above the store's cost, what is the store's cost, in dollars?",
          correctAnswer: '144',
          explanation: "**SAT Pattern: Sequential Percent Changes** -- The SAT loves multi-step percent problems because students often add percentages instead of multiplying. This is a high-value pattern to master.\n\n**The correct answer is $144$.**\n\n**The Fast Way (25 seconds):** $250 \\times 0.80 = 200$. Then $200 \\times 0.90 = 180$. The sale price (\\$180) is $125\\%$ of cost, so cost $= 180 / 1.25 = 144$.\n\n**Solution Steps:**\n• After $20\\%$ off: $250 \\times 0.80 = \\$200$\n• After additional $10\\%$ off: $200 \\times 0.90 = \\$180$\n• The final price is $25\\%$ above cost: Cost $\\times 1.25 = 180$\n• Cost $= 180 \\div 1.25 = 144$\n\n**Verification:** Cost $\\$144$ with $25\\%$ markup $= 144 \\times 1.25 = \\$180$. And $\\$250 \\to \\$200 \\to \\$180$ confirms the discount chain.\n\n**Test Day Takeaway:** Sequential percent changes multiply -- they do not add. A $20\\%$ discount followed by a $10\\%$ discount is $0.80 \\times 0.90 = 0.72$, which is a $28\\%$ total discount, not $30\\%$. Also, \"$25\\%$ above cost\" means you multiply cost by $1.25$, so to find cost, divide by $1.25$.",
          skills: ['Algebra', 'Percent']
        },
        {
          id: 15,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The function $f(x) = \\frac{1}{4}(x - 5)^2 + 2$ gives the height of a pendulum above the ground $f(x)$, in inches, $x$ seconds after it was released, where $0 \\leq x \\leq 10$. Which of the following is the best interpretation of the vertex of the graph of $y = f(x)$ in the $xy$-plane?",
          choices: [
            { id: "A", text: "The pendulum's minimum height was $2$ inches above the ground." },
            { id: "B", text: "The pendulum's minimum height was $5$ inches above the ground." },
            { id: "C", text: "The pendulum's height was $2$ inches above the ground when it was released." },
            { id: "D", text: "The pendulum's height was $5$ inches above the ground when it was released." }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Interpreting the Vertex of a Quadratic** -- Vertex form questions appear on almost every SAT. The vertex gives you the min or max, depending on whether $a$ is positive or negative.\n\n**Choice A is correct.** The pendulum's minimum height was $2$ inches above the ground.\n\n**The Fast Way (10 seconds):** The function is in vertex form $a(x - h)^2 + k$ with $a = 1/4 > 0$ (opens up). Vertex is $(5, 2)$. Since the parabola opens upward, the vertex is the minimum. The minimum height is the $y$-value: $2$ inches. Pick A.\n\n**Solution Steps:**\n• Vertex form: $f(x) = \\frac{1}{4}(x - 5)^2 + 2$, so vertex $= (5, 2)$\n• $a = \\frac{1}{4} > 0$ means the parabola opens upward (vertex is a minimum)\n• The minimum height is $k = 2$ inches\n\n**Why the wrong answers are tempting:**\n• Choice B says the minimum height is $5$ inches. But $5$ is the $x$-coordinate of the vertex (the time at which the minimum occurs), not the height. Confusing the $h$ and $k$ values in vertex form is one of the SAT's favorite traps.\n• Choice C says the height was $2$ inches at release. But $f(0) = \\frac{1}{4}(25) + 2 = 8.25$ inches. The vertex tells you about the minimum, not the starting point.\n• Choice D says the height was $5$ inches at release. Again, $f(0) = 8.25$, not $5$. And $5$ is a time value, not a height value.\n\n**Verification:** $f(5) = \\frac{1}{4}(0)^2 + 2 = 2$ inches. That is the minimum.\n\n**Test Day Takeaway:** In $a(x - h)^2 + k$, the vertex is $(h, k)$. If $a > 0$, $k$ is the minimum output. If $a < 0$, $k$ is the maximum output. The SAT always puts $h$ as a wrong answer to see if you confuse the coordinates.",
          skills: ["Algebra", "Quadratic functions"]
        },
        {
          id: 16,
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'If $3^a \\cdot 9^b = 3^{10}$ and $3^{2a} \\cdot 27^b = 3^{16}$, what is the value of $a - b$?',
          choices: [
            { id: 'A', text: '$-2$' },
            { id: 'B', text: '$2$' },
            { id: 'C', text: '$4$' },
            { id: 'D', text: '$6$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Exponential Equations Converted to a System** -- When you see different powers of the same base, rewrite everything with that base and equate exponents. This turns a scary-looking exponential problem into a straightforward system of linear equations.\n\n**Choice A is correct.** The value of $a - b$ is $-2$.\n\n**The Fast Way (35 seconds):** Rewrite: $9 = 3^2$ and $27 = 3^3$. Equation 1 becomes $a + 2b = 10$. Equation 2 becomes $2a + 3b = 16$. Solve the system: $a = 2$, $b = 4$. So $a - b = 2 - 4 = -2$.\n\n**Solution Steps:**\n• Rewrite with base $3$: $3^a \\cdot 3^{2b} = 3^{10}$ gives $a + 2b = 10$\n• $3^{2a} \\cdot 3^{3b} = 3^{16}$ gives $2a + 3b = 16$\n• From equation 1: $a = 10 - 2b$. Substitute: $2(10 - 2b) + 3b = 16$\n• $20 - 4b + 3b = 16$, so $b = 4$ and $a = 2$\n• $a - b = 2 - 4 = -2$\n\n**Why the wrong answers are tempting:**\n• Choice B ($2$) comes from computing $b - a$ instead of $a - b$. Reversing the subtraction order is an easy mistake when you are rushing. Always re-read whether the problem asks for $a - b$ or $b - a$.\n• Choice C ($4$) is just the value of $b$ by itself. Students who find $b = 4$ and stop there without completing the final subtraction end up here.\n• Choice D ($6$) is $a + b = 2 + 4$. This happens when students confuse subtraction with addition in the final step.\n\n**Verification:** $3^2 \\cdot 9^4 = 9 \\cdot 6{,}561 = 59{,}049 = 3^{10}$. $3^4 \\cdot 27^4 = 81 \\cdot 531{,}441 = 43{,}046{,}721 = 3^{16}$.\n\n**Test Day Takeaway:** When you see $9$, $27$, $81$, etc., rewrite them as powers of $3$. When bases match, exponents must be equal. This converts the problem into simple algebra.',
          skills: ['Advanced Math', 'Exponents']
        },
        {
          id: 17,
          type: "fill-in",
          difficulty: "hard",
          question: "$\\frac{5}{4}y - \\frac{3}{4}x = \\frac{2}{7} - \\frac{5}{4}y$\n\n$\\frac{3}{2}x + \\frac{3}{4} = py + \\frac{7}{4}$\n\nIn the given system of equations, $p$ is a constant. If the system has no solution, what is the value of $p$?",
          correctAnswer: '5',
          explanation: "**SAT Pattern: No-Solution System (Parallel Lines)** -- The SAT tests the no-solution condition for systems of linear equations on nearly every exam. Two lines have no solution when they are parallel: same slopes, different intercepts.\n\n**The correct answer is $5$.**\n\n**The Fast Way (45 seconds):** Simplify both equations into $ax + by = c$ form. If the $x$ and $y$ coefficients are proportional but the constants are not, the system has no solution. Match the ratios to find $p$.\n\n**Solution Steps:**\n• Simplify equation 1: move $\\frac{5}{4}y$ terms together and rearrange to get $3x - 10y = -\\frac{8}{7}$\n• Simplify equation 2: $\\frac{3}{2}x - py = 1$. Multiply by 2: $3x - 2py = 2$\n• For no solution, the coefficients must be proportional: the $x$-coefficients are both $3$, so the $y$-coefficients must match too: $2p = 10$, giving $p = 5$\n• Check constants: $-\\frac{8}{7} \\neq 2$, confirming the lines are parallel (not the same line)\n\n**Verification:** With $p = 5$, equation 2 becomes $3x - 10y = 2$. Equation 1 is $3x - 10y = -\\frac{8}{7}$. Same left side, different right side. Parallel lines with no intersection.\n\n**Test Day Takeaway:** No solution means parallel lines. Same ratio of $x$ and $y$ coefficients, different constant. Simplify both equations to standard form first, then match the coefficients.",
          skills: ["systems-of-equations", "no-solution"]
        },
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$43x^2 + (43b + a)x + ab = 0$\n\nIn the given equation, $a$ and $b$ are positive constants. The product of the solutions to the given equation is $kab$, where $k$ is a constant. What is the value of $k$?",
          choices: [
            { id: "A", text: "$\\frac{1}{43}$" },
            { id: "B", text: "$\\frac{1}{21}$" },
            { id: "C", text: "$1$" },
            { id: "D", text: "$43$" }
          ],
          correctAnswer: "A",
          explanation: "**SAT Pattern: Vieta's Formulas (Product of Solutions)** -- Vieta's formulas let you find the product or sum of solutions without actually solving the quadratic. This is a high-value shortcut for harder SAT questions.\n\n**Choice A is correct.** The value of $k$ is $\\frac{1}{43}$.\n\n**The Fast Way (15 seconds):** By Vieta's formulas, the product of solutions of $Ax^2 + Bx + C = 0$ is $\\frac{C}{A}$. Here $A = 43$ and $C = ab$, so the product is $\\frac{ab}{43} = \\frac{1}{43} \\cdot ab$. Therefore $k = \\frac{1}{43}$.\n\n**Solution Steps:**\n• The quadratic is $43x^2 + (43b + a)x + ab = 0$\n• Product of solutions $= \\frac{C}{A} = \\frac{ab}{43}$\n• This equals $kab$, so $k = \\frac{1}{43}$\n\n**Why the wrong answers are tempting:**\n• Choice B ($\\frac{1}{21}$) is a plausible-looking fraction that results from a mental arithmetic error. Students might confuse $43$ with another number or try to simplify when there is nothing to simplify.\n• Choice C ($1$) would be correct if the leading coefficient were $1$, but it is $43$. Students who forget to divide by $A$ (the leading coefficient) get this.\n• Choice D ($43$) is $\\frac{A}{C}$, the reciprocal of the correct formula. Vieta's gives $\\frac{C}{A}$, not $\\frac{A}{C}$. Getting the fraction upside down is a very common error.\n\n**Verification:** Factor: $(43x + a)(x + b) = 0$. Solutions: $x = -\\frac{a}{43}$ and $x = -b$. Product: $(-\\frac{a}{43})(-b) = \\frac{ab}{43}$.\n\n**Test Day Takeaway:** For $Ax^2 + Bx + C = 0$: product of solutions $= \\frac{C}{A}$, sum of solutions $= \\frac{-B}{A}$. Memorize these -- they save you from solving the quadratic entirely.",
          skills: ["quadratic-equations", "vietas-formulas"]
        },
        {
          id: 19,
          type: "fill-in",
          difficulty: "hard",
          question: "A cube has a surface area of $150$ square centimeters. What is the volume, in cubic centimeters, of the cube?",
          correctAnswer: '125',
          explanation: "**SAT Pattern: Surface Area to Volume Conversion** -- Geometry questions that connect surface area and volume require you to find the side length as an intermediate step. A cube makes this straightforward.\n\n**The correct answer is $125$.**\n\n**The Fast Way (15 seconds):** Surface area $= 6s^2 = 150$, so $s^2 = 25$, so $s = 5$. Volume $= s^3 = 125$.\n\n**Solution Steps:**\n• Surface area of a cube: $SA = 6s^2$\n• $150 = 6s^2$, so $s^2 = 25$, so $s = 5$ cm\n• Volume $= s^3 = 5^3 = 125$ cubic cm\n\n**Verification:** $6(5)^2 = 6 \\times 25 = 150$ (surface area checks out). $5^3 = 125$ (volume checks out).\n\n**Test Day Takeaway:** For cubes, surface area $= 6s^2$ and volume $= s^3$. To go from surface area to volume, first find $s$ from the surface area formula, then cube it. Do not try to shortcut directly from SA to volume -- always find the side length first.",
          skills: ["volume", "surface-area", "geometry"]
        },
        {
          id: 20,
          type: 'fill-in',
          difficulty: 'hard',
          question: 'A flat surface consists of two adjacent squares, where the side length, in meters, of the larger square is $4$ times the side length of the smaller square. A uniform field with strength $18.00$ units per square meter passes through this surface perpendicular to it. The total flux through both squares together is $4{,}590$ units. What is the flux, in units, through the larger square only?',
          correctAnswer: '4320',
          explanation: '**SAT Pattern: Area Ratios and Proportional Reasoning** -- This problem tests whether you understand that scaling a side length by $k$ scales the area by $k^2$. A classic SAT trap involves confusing the linear scale factor with the area scale factor.\n\n**The correct answer is $4{,}320$.**\n\n**The Fast Way (30 seconds):** Let the small square have area $s^2$. The large square has area $(4s)^2 = 16s^2$. Total area $= 17s^2$. Total flux $= 18 \\times 17s^2 = 4{,}590$, so $s^2 = 15$. Flux through the larger square $= 18 \\times 16(15) = 18 \\times 240 = 4{,}320$.\n\n**Solution Steps:**\n• Small square area $= s^2$, large square area $= 16s^2$, total area $= 17s^2$\n• $18 \\times 17s^2 = 4{,}590$, so $s^2 = 15$\n• Flux through the larger square $= 18 \\times 16 \\times 15 = 4{,}320$\n\n**Verification:** Flux through smaller square $= 18 \\times 15 = 270$. Total $= 4{,}320 + 270 = 4{,}590$.\n\n**Test Day Takeaway:** When a side length is scaled by a factor of $k$, the area scales by $k^2$. A side that is $4$ times longer creates an area that is $16$ times larger, not $4$ times.',
          skills: ["word-problem-to-equation", "dimensional-analysis"]
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "$\\frac{x}{x - 2} - \\frac{3}{x + 4} = \\frac{18}{(x - 2)(x + 4)}$\n\nWhat is the solution to the given equation?",
          correctAnswer: '3',
          explanation: "**SAT Pattern: Rational Equation with Extraneous Solutions** -- Rational equations are a harder SAT topic. The critical step most students miss is checking for extraneous solutions -- values that make a denominator zero.\n\n**The correct answer is $3$.**\n\n**The Fast Way (35 seconds):** Multiply everything by $(x - 2)(x + 4)$ to clear fractions: $x(x + 4) - 3(x - 2) = 18$. Expand: $x^2 + x - 12 = 0$. Factor: $(x + 4)(x - 3) = 0$. Reject $x = -4$ (makes a denominator zero). Answer: $x = 3$.\n\n**Solution Steps:**\n• Multiply both sides by $(x - 2)(x + 4)$, noting $x \\neq 2$ and $x \\neq -4$\n• $x(x + 4) - 3(x - 2) = 18$\n• $x^2 + 4x - 3x + 6 = 18$\n• $x^2 + x - 12 = 0$\n• $(x + 4)(x - 3) = 0$, so $x = -4$ or $x = 3$\n• $x = -4$ makes $(x + 4) = 0$, so it is extraneous. Reject it.\n• The only valid solution is $x = 3$\n\n**Verification:** $\\frac{3}{1} - \\frac{3}{7} = \\frac{21 - 3}{7} = \\frac{18}{7}$. RHS: $\\frac{18}{(1)(7)} = \\frac{18}{7}$. Both sides match.\n\n**Test Day Takeaway:** After solving a rational equation, always plug your solutions back into the original denominators. If a solution makes any denominator zero, throw it out. The SAT specifically designs these problems so that one solution is extraneous.",
          skills: ['Advanced Math', 'Rational Equations']
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "$3^{x+2} - 3^x = 72$\n\nWhat is the value of $x$?",
          choices: [
            { id: "A", text: "$1$" },
            { id: "B", text: "$2$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$4$" }
          ],
          correctAnswer: "B",
          explanation: "**SAT Pattern: Exponential Equation with Factoring** — Appears 1-2 times per test. The SAT tests whether you can factor out a common exponential base.\n\n**Choice B is correct.** $x = 2$.\n\n**The Fast Way (20 seconds):** Just test each answer choice. $x = 2$: $3^4 - 3^2 = 81 - 9 = 72$ ✓. Done.\n\n**The Algebraic Way:**\n\n**Step 1:** Rewrite $3^{x+2}$ using exponent rules: $3^{x+2} = 3^x \\cdot 3^2 = 9 \\cdot 3^x$\n\n**Step 2:** Factor: $9 \\cdot 3^x - 3^x = 72 \\implies 3^x(9 - 1) = 72 \\implies 3^x \\cdot 8 = 72 \\implies 3^x = 9$\n\n**Step 3:** Solve: $3^x = 3^2 \\implies x = 2$\n\n**Why the wrong answers are tempting:**\n• Choice A ($x = 1$) is the neighbor of the correct answer and gives $3^3 - 3^1 = 27 - 3 = 24$. When you are not confident in your algebra, $x = 1$ feels safe because it is a simple value, but the check shows it is too small.\n• Choice C ($x = 3$) is the other neighbor and gives $3^5 - 3^3 = 243 - 27 = 216$. If your factoring went slightly wrong and you got $3^x = 27$ instead of $3^x = 9$, you would land here.\n• Choice D ($x = 4$) gives $3^6 - 3^4 = 729 - 81 = 648$, which is way too large. Students who confuse the exponent rules and try to solve by guessing high numbers end up here.\n\n**Verification:** $3^{4} - 3^{2} = 81 - 9 = 72$ ✓\n\n**Test Day Takeaway:** When you see $a^{m+n} - a^m$, factor out $a^m$ to get $a^m(a^n - 1)$. But on the SAT, plugging in the answer choices is often faster than algebra.",
          skills: ['Advanced Math', 'Exponents']
        }
      ]
    }
  ]
};
