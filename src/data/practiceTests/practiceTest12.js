// Practice Test 12
// 44 questions total (22 per module)

export const practiceTest12 = {
  id: 'practice-test-12',
  title: 'Practice Test 12',
  description: 'Full-length SAT Math practice test with 44 questions across two modules.',
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: 'module-1',
      title: 'Module 1',
      timeLimit: 35,
      questions: [
        {
          id: 'pt12-m1-q1',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The bar graph above shows the number of hours of sleep reported by each of $18$ college students on a weeknight. How many students reported getting exactly $7$ hours of sleep?',
          diagram: {
            type: 'barChart',
            params: {
              data: [
                { label: '5', value: 2 },
                { label: '6', value: 4 },
                { label: '7', value: 7 },
                { label: '8', value: 3 },
                { label: '9', value: 2 }
              ],
              xAxisLabel: 'Hours of sleep',
              yAxisLabel: 'Number of students',
              yMax: 8
            }
          },
          choices: [
            { id: 'A', text: '$3$' },
            { id: 'B', text: '$4$' },
            { id: 'C', text: '$7$' },
            { id: 'D', text: '$8$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Bar Graph Reading** -- Shows up on nearly every test. Free points if you read carefully.\n\n**Choice C is correct.** The bar for $7$ hours reaches a height of $7$ on the vertical axis, so $7$ students reported exactly $7$ hours of sleep.\n\n**The Fast Way (10 seconds):** Go straight to the bar labeled $7$ on the horizontal axis. Read its height on the vertical axis. Done.\n\n**Step 1: Locate the bar**\nOn the horizontal axis, find the bar labeled $7$.\n\n**Step 2: Read the height**\nThe bar reaches $7$ on the vertical axis, so $7$ students reported exactly $7$ hours of sleep.\n\n**Why the wrong answers are tempting:**\n- Choice A ($3$) is the height of the bar for $8$ hours, one bar to the right. On test day, it is easy to glance at the wrong bar when you are moving fast.\n- Choice B ($4$) is the height of the bar for $6$ hours, one bar to the left. Same misread, opposite direction.\n- Choice D ($8$) is the maximum value on the $y$-axis, not the height of any bar. If you confuse the axis scale with the data, you land here.\n\n**Verification:** $2 + 4 + 7 + 3 + 2 = 18$ total students, matching the stated total.\n\n**Test Day Takeaway:** On bar graph questions, point your finger at the exact bar before reading -- one bar off means a wrong answer.',
          skills: ['Data Analysis', 'Bar Graphs']
        },
        {
          id: 'pt12-m1-q2',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: '$7x + 3 = 52$\n\nWhat is the value of $x$?',
          choices: [
            { id: 'A', text: '$5$' },
            { id: 'B', text: '$7$' },
            { id: 'C', text: '$8$' },
            { id: 'D', text: '$49$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: One-Variable Linear Equation** -- The most fundamental algebra question on the SAT. You will see several of these.\n\n**Choice B is correct.** Solving $7x + 3 = 52$ gives $x = 7$.\n\n**The Fast Way (15 seconds):** Subtract $3$, divide by $7$. Or just try each answer choice -- $7(7) + 3 = 52$. Done.\n\n**Step 1: Subtract $3$ from both sides**\n$7x = 49$\n\n**Step 2: Divide both sides by $7$**\n$x = 7$\n\n**Why the wrong answers are tempting:**\n- Choice A ($5$) might come from a mental math slip like $52 \\div 10$. When you are rushing, dividing by the wrong number is surprisingly common.\n- Choice C ($8$) happens if you divide $52$ by $7$ directly without subtracting $3$ first. Order of operations matters -- isolate the variable term before dividing.\n- Choice D ($49$) is the classic "stopped one step early" mistake. You correctly compute $52 - 3 = 49$ but forget the final division by $7$. The SAT loves planting partial answers in the choices.\n\n**Verification:** $7(7) + 3 = 49 + 3 = 52$.\n\n**Test Day Takeaway:** When you see your intermediate calculation sitting in the answer choices, that is a signal to keep going -- you are not done yet.',
          skills: ['Algebra', 'Linear Equations']
        },
        {
          id: 'pt12-m1-q3',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'A gym membership costs \\$30 per month plus a one-time enrollment fee of \\$75. Which function gives the total cost $C(m)$, in dollars, for $m$ months of membership?',
          choices: [
            { id: 'A', text: '$C(m) = 75m + 30$' },
            { id: 'B', text: '$C(m) = 30m + 75$' },
            { id: 'C', text: '$C(m) = 105m$' },
            { id: 'D', text: '$C(m) = 30m - 75$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Linear Cost Model** -- Appears frequently in word problem form. Know the structure: total = rate x quantity + fixed cost.\n\n**Choice B is correct.** The total cost is $C(m) = 30m + 75$, where $30m$ is the monthly charge and $75$ is the one-time enrollment fee.\n\n**The Fast Way (15 seconds):** Ask yourself: what repeats and what happens once? $30$ repeats every month (so multiply by $m$), and $75$ happens once (so just add it). That gives $30m + 75$.\n\n**Step 1: Identify the components**\n- Monthly cost: $\\$30 \\times m$ months $= 30m$\n- One-time fee: $\\$75$ (constant, does not depend on $m$)\n\n**Step 2: Write the total cost**\n$C(m) = 30m + 75$\n\n**Why the wrong answers are tempting:**\n- Choice A swaps the slope and intercept, multiplying the one-time fee ($75$) by $m$ and making the monthly rate ($30$) the constant. This is the most common mistake -- mixing up which number repeats and which is fixed.\n- Choice C lumps both numbers into a single rate: $30 + 75 = 105$ per month. That treats the enrollment fee as if you pay it every month, which does not match the problem.\n- Choice D subtracts the enrollment fee instead of adding it. Fees add to your cost, they do not reduce it.\n\n**Verification:** For $m = 6$ months: $C(6) = 30(6) + 75 = 180 + 75 = \\$255$. That is six months of dues plus the enrollment fee.\n\n**Test Day Takeaway:** In any cost model, the number that repeats gets multiplied by the variable, and the one-time charge is the constant.',
          skills: ['Algebra', 'Linear Equations', 'Word Problems']
        },
        {
          id: 'pt12-m1-q4',
          type: 'fill-in',
          difficulty: 'easy',
          question: 'A survey of $600$ people found that $45\\%$ preferred brand A. How many people preferred brand A?',
          correctAnswer: '270',
          explanation: '**SAT Pattern: Percent of a Number** -- A bread-and-butter SAT skill. Quick arithmetic, but careless errors are common.\n\n**The correct answer is $270$.** $45\\%$ of $600$ is $270$.\n\n**The Fast Way (10 seconds):** Type $0.45 \\times 600$ into Desmos or your calculator. Or mentally: $45\\%$ of $600 = \\frac{45}{100} \\times 600 = 45 \\times 6 = 270$.\n\n**Step 1: Convert to a decimal**\n$45\\% = 0.45$\n\n**Step 2: Multiply**\n$0.45 \\times 600 = 270$\n\n**Verification:** $\\frac{270}{600} = 0.45 = 45\\%$.\n\n**Test Day Takeaway:** For percent-of-a-number problems, convert the percent to a decimal and multiply -- then reverse-check by dividing your answer by the total.',
          skills: ['Percentages', 'Arithmetic']
        },
        {
          id: 'pt12-m1-q5',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The ratio of cats to dogs at an animal shelter is $3:5$. If there are $40$ dogs, how many cats are there?',
          choices: [
            { id: 'A', text: '$15$' },
            { id: 'B', text: '$24$' },
            { id: 'C', text: '$32$' },
            { id: 'D', text: '$67$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Ratio and Proportion** -- A staple of the Problem-Solving section. The key is knowing which number goes with which part of the ratio.\n\n**Choice B is correct.** With a $3:5$ ratio of cats to dogs and $40$ dogs, there are $24$ cats.\n\n**The Fast Way (15 seconds):** The ratio says $3$ cats for every $5$ dogs. Since there are $40$ dogs, the scale factor is $40 \\div 5 = 8$. So cats $= 3 \\times 8 = 24$.\n\n**Step 1: Write the proportion**\n$\\frac{\\text{cats}}{\\text{dogs}} = \\frac{3}{5} = \\frac{c}{40}$\n\n**Step 2: Solve for $c$**\n$5c = 3 \\times 40 = 120$\n$c = 24$\n\n**Why the wrong answers are tempting:**\n- Choice A ($15$) comes from using the total ratio parts ($3 + 5 = 8$) as the denominator: $\\frac{3}{8} \\times 40 = 15$. This would give the number of cats out of the total animals, but the $40$ represents dogs only, not total animals.\n- Choice C ($32$) uses the wrong ratio ($4:5$ instead of $3:5$). A small misread of the ratio leads to a significantly different answer.\n- Choice D ($67$) does not follow from any valid proportion setup and likely involves adding numbers that should not be added.\n\n**Verification:** $\\frac{24}{40} = \\frac{3}{5}$.\n\n**Test Day Takeaway:** In ratio problems, always match the right number to the right part of the ratio before setting up the proportion.',
          skills: ['Ratios', 'Proportions']
        },
        {
          id: 'pt12-m1-q6',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The graph above shows the estimated revenue, in thousands of dollars, for a new business as a function of the number of months since it opened. What does the slope of the line represent in this context?',
          diagram: {
            type: 'linearGraph',
            params: {
              slope: 3,
              yIntercept: 5,
              xRange: [0, 16],
              yRange: [0, 50],
              xTickInterval: 2,
              yTickInterval: 10,
              gridInterval: 2,
              highlightPoints: [[0, 5], [12, 41]]
            }
          },
          choices: [
            { id: 'A', text: 'The business earns \\$3,000 per month in additional revenue.' },
            { id: 'B', text: 'The business earns \\$5,000 per month in additional revenue.' },
            { id: 'C', text: 'The business started with \\$3,000 in revenue.' },
            { id: 'D', text: 'The business will earn \\$41,000 after $12$ months.' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Slope Interpretation in Context** -- The SAT loves asking what the slope "means." The answer is always about rate of change per unit of $x$.\n\n**Choice A is correct.** The slope is $3$ thousand dollars per month, meaning the business earns $\\$3{,}000$ in additional revenue each month.\n\n**The Fast Way (20 seconds):** Pick two clear points from the graph, compute rise over run, and attach the units. The units of slope are always "units of $y$-axis per unit of $x$-axis."\n\n**Step 1: Read the graph**\nFrom the graph, the line passes through $(0, 5)$ and $(12, 41)$.\n\n**Step 2: Calculate the slope**\n$\\text{Slope} = \\frac{41 - 5}{12 - 0} = \\frac{36}{12} = 3$ (thousands of dollars per month)\n\n**Step 3: Interpret in context**\nSince $y$ is in thousands of dollars and $x$ is in months, a slope of $3$ means the revenue increases by $\\$3{,}000$ per month.\n\n**Why the wrong answers are tempting:**\n- Choice B confuses the $y$-intercept ($5$) with the slope. The $y$-intercept tells you where the business started, not how fast it is growing. These two concepts often get mixed up because both are numbers you can read from the graph.\n- Choice C describes the starting revenue ($\\$5{,}000$), which is the $y$-intercept, not the slope. The question specifically asks about the slope.\n- Choice D describes a specific data point on the line ($\\$41{,}000$ after $12$ months). That is a value at one moment in time, not a rate of change.\n\n**Verification:** Slope $= \\frac{41 - 5}{12 - 0} = \\frac{36}{12} = 3$ thousand dollars per month.\n\n**Test Day Takeaway:** Slope interpretation = "For every additional [x-unit], the [y-quantity] changes by [slope amount]." Memorize that sentence template.',
          skills: ['Functions', 'Graph Interpretation', 'Slope']
        },
        {
          id: 'pt12-m1-q7',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The scatterplot above shows the relationship between the number of practice hours and race times for $10$ runners. A line of best fit is also shown. According to the line of best fit, a runner who practices $8$ hours per week is predicted to have a race time of approximately how many minutes?',
          diagram: {
            type: 'scatterplot',
            params: {
              points: [
                [2, 32], [3, 28], [4, 27], [5, 24],
                [6, 22], [7, 20], [8, 18], [9, 16],
                [10, 15], [11, 13]
              ],
              xMax: 12,
              yMax: 35,
              bestFitLine: { slope: -2, intercept: 34 }
            }
          },
          choices: [
            { id: 'A', text: '$14$' },
            { id: 'B', text: '$18$' },
            { id: 'C', text: '$22$' },
            { id: 'D', text: '$26$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Line of Best Fit / Scatterplot Prediction** -- Very common. The SAT wants you to use the trend line, not individual data points.\n\n**Choice B is correct.** Using the line of best fit, a runner who practices $8$ hours per week has a predicted race time of $18$ minutes.\n\n**The Fast Way (15 seconds):** Plug $x = 8$ into the line equation $y = -2x + 34$. Or on the graph, go to $x = 8$ and read where the best-fit line crosses that vertical.\n\n**Step 1: Use the equation**\nThe line has slope $-2$ and $y$-intercept $34$: $y = -2x + 34$.\n\n**Step 2: Substitute $x = 8$**\n$y = -2(8) + 34 = -16 + 34 = 18$ minutes.\n\n**Why the wrong answers are tempting:**\n- Choice A ($14$) is the predicted time at $x = 10$, not $x = 8$. If you miscount the grid lines and go two units too far right, you land here.\n- Choice C ($22$) is the predicted time at $x = 6$, two units too far left. Misreading the horizontal axis in the other direction gives this answer.\n- Choice D ($26$) corresponds to about $x = 4$ on the line. This likely comes from a misread of the graph or a substitution error.\n\n**Verification:** $y = -2(8) + 34 = -16 + 34 = 18$.\n\n**Test Day Takeaway:** Always use the line of best fit for predictions, not individual dots. And double-check that you are reading the correct $x$-value on the horizontal axis.',
          skills: ['Data Analysis', 'Scatterplots', 'Line of Best Fit']
        },
        {
          id: 'pt12-m1-q8',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The table below shows the results of a survey asking students whether they prefer reading fiction or nonfiction, categorized by grade level. If a student who prefers fiction is selected at random, what is the probability that the student is in grade $11$?',
          diagram: {
            type: 'table',
            params: {
              headers: ['', 'Fiction', 'Nonfiction', 'Total'],
              rows: [
                ['Grade 11', '48', '32', '80'],
                ['Grade 12', '42', '38', '80'],
                ['Total', '90', '70', '160']
              ]
            }
          },
          choices: [
            { id: 'A', text: '$\\frac{48}{160}$' },
            { id: 'B', text: '$\\frac{48}{90}$' },
            { id: 'C', text: '$\\frac{48}{80}$' },
            { id: 'D', text: '$\\frac{42}{90}$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Conditional Probability from a Two-Way Table** -- Appears on almost every SAT. The trick is always picking the right denominator.\n\n**Choice B is correct.** Given that the student prefers fiction, the probability of being in grade $11$ is $\\frac{48}{90}$.\n\n**The Fast Way (15 seconds):** The phrase "a student who prefers fiction is selected" tells you the denominator is the fiction column total ($90$). The numerator is the grade $11$ fiction cell ($48$). Answer: $\\frac{48}{90}$.\n\n**Step 1: Identify the condition**\nWe are told the selected student prefers fiction, so we restrict to the $90$ fiction students.\n\n**Step 2: Find the favorable outcomes**\nOf the $90$ fiction students, $48$ are in grade $11$.\n\n**Step 3: Calculate**\n$P(\\text{Grade 11} \\mid \\text{Fiction}) = \\frac{48}{90}$\n\n**Why the wrong answers are tempting:**\n- Choice A uses $160$ (all students) as the denominator instead of $90$ (fiction students only). This ignores the condition entirely -- you are told the student already prefers fiction, so nonfiction students are out of the picture.\n- Choice C uses $80$ (the grade $11$ total) as the denominator instead of $90$ (the fiction total). This is a very natural mistake because your eye might follow the wrong row or column total in the table.\n- Choice D has the right denominator ($90$) but the wrong numerator ($42$ instead of $48$). This gives the probability of being in grade $12$, not grade $11$. A simple row mix-up.\n\n**Verification:** $\\frac{48}{90} = \\frac{8}{15} \\approx 0.533$, and $48$ out of $90$ fiction readers are in grade $11$.\n\n**Test Day Takeaway:** For conditional probability, the word "given" or "if...is selected" tells you the denominator. Circle that number first, then find the numerator.',
          skills: ['Probability', 'Data Analysis']
        },
        {
          id: 'pt12-m1-q9',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'The function $f$ is defined by $f(x) = -2x^2 + 8x - 3$. What is the value of $f(3)$?',
          correctAnswer: '3',
          explanation: '**SAT Pattern: Function Evaluation** -- Direct substitution. Fast and mechanical, but sign errors are the main danger.\n\n**The correct answer is $3$.** Substituting $x = 3$ into $f(x) = -2x^2 + 8x - 3$ gives $f(3) = 3$.\n\n**The Fast Way (15 seconds):** Type the expression directly into Desmos: $-2(3)^2 + 8(3) - 3$. Or compute step by step: $-2(9) + 24 - 3 = -18 + 24 - 3 = 3$.\n\n**Step 1: Substitute**\n$f(3) = -2(3)^2 + 8(3) - 3$\n\n**Step 2: Simplify**\n$f(3) = -2(9) + 24 - 3 = -18 + 24 - 3 = 3$\n\n**Verification:** $-18 + 24 = 6$, and $6 - 3 = 3$.\n\n**Test Day Takeaway:** On function evaluation, square first, then multiply by the coefficient (including its sign). The leading negative is the most commonly dropped detail.',
          skills: ['Functions', 'Function Evaluation']
        },
        {
          id: 'pt12-m1-q10',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: '$4x - 3y = 12$\n$-8x + 6y = k$\n\nFor what value of $k$ does the system of equations above have infinitely many solutions?',
          choices: [
            { id: 'A', text: '$-24$' },
            { id: 'B', text: '$-12$' },
            { id: 'C', text: '$12$' },
            { id: 'D', text: '$24$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Infinitely Many Solutions (Identical Lines)** -- The SAT tests this concept regularly. The key idea: identical equations = infinitely many solutions.\n\n**Choice A is correct.** The system has infinitely many solutions when $k = -24$, because the second equation becomes a scalar multiple of the first.\n\n**The Fast Way (20 seconds):** Compare the $x$-coefficients: $-8 \\div 4 = -2$. So the second equation is $-2$ times the first. Apply that multiplier to the right side: $-2 \\times 12 = -24$. Done.\n\n**Step 1: Compare the coefficients**\nMultiply the first equation by $-2$:\n$-2(4x - 3y) = -2(12)$\n$-8x + 6y = -24$\n\n**Step 2: Match to the second equation**\nThe second equation is $-8x + 6y = k$. For this to be identical to $-8x + 6y = -24$, we need $k = -24$.\n\n**Why the wrong answers are tempting:**\n- Choice B ($-12$) just negates the original right side without applying the full multiplier. The coefficients were multiplied by $-2$, so the constant must be too: $-2 \\times 12 = -24$, not $-12$.\n- Choice C ($12$) keeps the original constant unchanged. But if you multiply the left side by $-2$, you must do the same to the right side.\n- Choice D ($24$) gets the magnitude right ($2 \\times 12$) but misses the negative sign. This would actually give parallel lines (no solutions at all), which is the opposite of what the question asks.\n\n**Verification:** $-2 \\times (4x - 3y = 12)$ gives $-8x + 6y = -24$, which matches the second equation when $k = -24$.\n\n**Test Day Takeaway:** For infinitely many solutions, every coefficient and constant must share the same multiplier. Find that multiplier from the coefficients, then apply it to the constant.',
          skills: ['Systems of Equations', 'Linear Equations']
        },
        {
          id: 'pt12-m1-q11',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'An investment of \\$1,000 earns $5\\%$ interest compounded annually. Which function models the value $V(t)$ of the investment after $t$ years?',
          choices: [
            { id: 'A', text: '$V(t) = 1{,}000(0.05)^t$' },
            { id: 'B', text: '$V(t) = 1{,}000(1.05)^t$' },
            { id: 'C', text: '$V(t) = 1{,}000 + 50t$' },
            { id: 'D', text: '$V(t) = 1{,}050^t$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Exponential Growth / Compound Interest** -- The SAT tests the compound interest formula in various disguises. Know the template cold.\n\n**Choice B is correct.** The compound interest model is $V(t) = 1{,}000(1.05)^t$.\n\n**The Fast Way (15 seconds):** The formula is $V = P(1 + r)^t$. Plug in $P = 1{,}000$ and $r = 0.05$. That gives $1{,}000(1.05)^t$. Match to Choice B.\n\n**Step 1: Identify the growth factor**\nA $5\\%$ annual increase means the value is multiplied by $1 + 0.05 = 1.05$ each year.\n\n**Step 2: Write the function**\n$V(t) = 1{,}000(1.05)^t$\n\n**Why the wrong answers are tempting:**\n- Choice A uses $0.05$ as the base instead of $1.05$. This is the single most common mistake with exponential growth -- the growth factor is $1 + r$, not $r$ alone. Using $0.05^t$ would make the investment shrink to nearly zero, which makes no sense for earning interest.\n- Choice C models simple (linear) interest: $1{,}000 + 50t$. Simple interest adds the same flat dollar amount every year, while compound interest multiplies by the same factor. The word "compounded" is your signal to use an exponential, not a linear model.\n- Choice D raises $1{,}050$ to the power $t$, which does not separate the principal from the growth factor. The principal ($1{,}000$) is a coefficient out front, and only the growth factor ($1.05$) gets raised to $t$.\n\n**Verification:** At $t = 1$: $V(1) = 1{,}000(1.05) = 1{,}050$ (initial investment plus $5\\%$ interest).\n\n**Test Day Takeaway:** Compound interest = $P(1 + r)^t$. The base must be greater than $1$ for growth. If you see just the rate without the $1+$, that is the trap.',
          skills: ['Exponential Functions', 'Exponential Growth']
        },
        {
          id: 'pt12-m1-q12',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'In triangle $PQR$, the measure of the exterior angle at vertex $R$ is $130°$. If the measure of angle $P$ is $55°$, what is the measure of angle $Q$?',
          choices: [
            { id: 'A', text: '$50°$' },
            { id: 'B', text: '$55°$' },
            { id: 'C', text: '$75°$' },
            { id: 'D', text: '$125°$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Exterior Angle Theorem** -- A geometry shortcut the SAT loves. Faster than using the triangle angle sum if you know it.\n\n**Choice C is correct.** The exterior angle at $R$ equals the sum of the two remote interior angles, so $\\angle Q = 130° - 55° = 75°$.\n\n**The Fast Way (10 seconds):** Exterior angle = sum of the two non-adjacent interior angles. So $130° = 55° + \\angle Q$, giving $\\angle Q = 75°$.\n\n**Step 1: Apply the exterior angle theorem**\nAn exterior angle of a triangle equals the sum of the two non-adjacent interior angles:\n$\\text{Exterior angle at } R = \\angle P + \\angle Q$\n$130° = 55° + \\angle Q$\n\n**Step 2: Solve**\n$\\angle Q = 130° - 55° = 75°$\n\n**Why the wrong answers are tempting:**\n- Choice A ($50°$) comes from computing $180° - 130° = 50°$, which gives the interior angle at $R$, not $\\angle Q$. It is easy to find the supplement of the exterior angle and mistakenly think that is the answer.\n- Choice B ($55°$) assumes the two remote interior angles are equal. Just because $\\angle P = 55°$ does not mean $\\angle Q = 55°$ -- that would only be true in a special triangle, and nothing here says the triangle is isosceles.\n- Choice D ($125°$) comes from $180° - 55° = 125°$, which is the sum of $\\angle Q + \\angle R$, not $\\angle Q$ alone. This approach ignores the exterior angle information entirely.\n\n**Verification:** $\\angle P + \\angle Q = 55° + 75° = 130°$ = exterior angle at $R$. Also $\\angle R = 180° - 130° = 50°$, and $55° + 75° + 50° = 180°$.\n\n**Test Day Takeaway:** The exterior angle theorem is a one-step shortcut -- exterior angle equals the sum of the two remote interior angles. Use it whenever you see an exterior angle in the problem.',
          skills: ['Geometry', 'Triangles', 'Angle Relationships']
        },
        {
          id: 'pt12-m1-q13',
          type: 'fill-in',
          difficulty: 'medium',
          question: '$\\frac{2x}{3} + \\frac{x}{6} = 10$\n\nWhat is the value of $x$?',
          correctAnswer: '12',
          explanation: '**SAT Pattern: Linear Equation with Fractions** -- Fractions make easy algebra look hard. Clear them out and the problem becomes simple.\n\n**The correct answer is $12$.** Solving $\\frac{2x}{3} + \\frac{x}{6} = 10$ gives $x = 12$.\n\n**The Fast Way (15 seconds):** Multiply everything by the LCD ($6$) to kill the fractions immediately: $6 \\cdot \\frac{2x}{3} + 6 \\cdot \\frac{x}{6} = 6 \\cdot 10$ gives $4x + x = 60$, so $5x = 60$ and $x = 12$.\n\n**Step 1: Find the LCD**\nThe LCD of $3$ and $6$ is $6$.\n\n**Step 2: Rewrite with the LCD**\n$\\frac{4x}{6} + \\frac{x}{6} = 10$\n\n**Step 3: Combine and solve**\n$\\frac{5x}{6} = 10$\n$5x = 60$\n$x = 12$\n\n**Verification:** $\\frac{2(12)}{3} + \\frac{12}{6} = 8 + 2 = 10$.\n\n**Test Day Takeaway:** When you see fractions in an equation, multiply every term by the LCD right away. This turns a fraction problem into a whole-number problem instantly.',
          skills: ['Algebra', 'Solving Equations']
        },
        {
          id: 'pt12-m1-q14',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The graph of $g(x) = (x - 3)^2 + 1$ is a transformation of the graph of $f(x) = x^2$. Which statement best describes the transformation?',
          choices: [
            { id: 'A', text: 'The graph of $f$ is shifted $3$ units left and $1$ unit up.' },
            { id: 'B', text: 'The graph of $f$ is shifted $3$ units right and $1$ unit up.' },
            { id: 'C', text: 'The graph of $f$ is shifted $3$ units right and $1$ unit down.' },
            { id: 'D', text: 'The graph of $f$ is shifted $1$ unit right and $3$ units up.' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Graph Transformations (Vertex Form)** -- The SAT tests this concept frequently. The minus sign inside the parentheses is the #1 source of confusion.\n\n**Choice B is correct.** $g(x) = (x - 3)^2 + 1$ shifts the parent function $f(x) = x^2$ three units right and one unit up.\n\n**The Fast Way (10 seconds):** Read the vertex directly: $(x - 3)^2 + 1$ has vertex $(3, 1)$. The original vertex was $(0, 0)$. So the graph moved $3$ right and $1$ up.\n\n**Step 1: Compare to vertex form**\n$g(x) = (x - 3)^2 + 1$ has the form $(x - h)^2 + k$ with $h = 3$ and $k = 1$.\n\n**Step 2: Interpret the transformations**\n- $h = 3$: Shifts the graph $3$ units to the right\n- $k = 1$: Shifts the graph $1$ unit up\n\n**Why the wrong answers are tempting:**\n- Choice A says $3$ units left instead of right. The minus sign in $(x - 3)$ is counterintuitive -- it actually means a shift to the right. Think of it this way: the vertex is at $x = 3$, which is to the right of $x = 0$. If it were $(x + 3)$, the vertex would be at $x = -3$ (left).\n- Choice C gets the horizontal shift correct but says $1$ unit down instead of up. The $+1$ outside the squared term lifts the entire graph up by $1$.\n- Choice D swaps the shift amounts, saying $1$ right and $3$ up. The horizontal shift comes from what is inside the parentheses, and the vertical shift comes from what is outside.\n\n**Verification:** The vertex of $f(x) = x^2$ is at $(0, 0)$, and the vertex of $g(x) = (x-3)^2 + 1$ is at $(3, 1)$ -- shifted $3$ right and $1$ up.\n\n**Test Day Takeaway:** In $(x - h)^2 + k$, the vertex is at $(h, k)$. The sign inside the parentheses is opposite to what you might expect: minus means right, plus means left.',
          skills: ['Functions', 'Transformations', 'Quadratic Functions']
        },
        {
          id: 'pt12-m1-q15',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'In a right triangle, one leg has length $5$ and the hypotenuse has length $13$. What is the length of the other leg?',
          choices: [
            { id: 'A', text: '$8$' },
            { id: 'B', text: '$10$' },
            { id: 'C', text: '$12$' },
            { id: 'D', text: '$18$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Pythagorean Theorem / Common Triples** -- Knowing the common Pythagorean triples ($3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$) saves serious time.\n\n**Choice C is correct.** The other leg is $12$, completing the $5$-$12$-$13$ Pythagorean triple.\n\n**The Fast Way (5 seconds):** Recognize the $5$-$12$-$13$ triple instantly. If you know the common triples, this is a free answer with no calculation.\n\n**Step 1: Set up the equation**\n$a^2 + b^2 = c^2$\n$5^2 + b^2 = 13^2$\n$25 + b^2 = 169$\n\n**Step 2: Solve for $b$**\n$b^2 = 144$\n$b = 12$\n\n**Why the wrong answers are tempting:**\n- Choice A ($8$) likely comes from subtracting $13 - 5 = 8$. In a right triangle, you cannot just subtract side lengths -- you need to work with squares. Check: $5^2 + 8^2 = 89 \\neq 169$.\n- Choice B ($10$) feels reasonable because it is a round number between $5$ and $13$, but $5^2 + 10^2 = 125 \\neq 169$. Close is not good enough in math.\n- Choice D ($18$) comes from adding $5 + 13 = 18$. Adding the sides directly ignores the Pythagorean relationship entirely. Check: $5^2 + 18^2 = 349 \\neq 169$.\n\n**Verification:** $5^2 + 12^2 = 25 + 144 = 169 = 13^2$.\n\n**Test Day Takeaway:** Memorize the common Pythagorean triples: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$. They appear constantly on the SAT and save you from computing square roots under pressure.',
          skills: ['Geometry', 'Pythagorean Theorem']
        },
        {
          id: 'pt12-m1-q16',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'Which expression is equivalent to $\\frac{x^2 - 9}{x^2 + 5x + 6}$?',
          choices: [
            { id: 'A', text: '$\\frac{x - 3}{x + 2}$' },
            { id: 'B', text: '$\\frac{x + 3}{x + 2}$' },
            { id: 'C', text: '$\\frac{x - 3}{x + 3}$' },
            { id: 'D', text: '$\\frac{x + 3}{x - 2}$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Simplifying Rational Expressions** -- Factor, cancel, done. The SAT always makes sure the common factor is there to find.\n\n**Choice A is correct.** $\\frac{x^2 - 9}{x^2 + 5x + 6} = \\frac{(x-3)(x+3)}{(x+2)(x+3)} = \\frac{x-3}{x+2}$.\n\n**The Fast Way (20 seconds):** Recognize $x^2 - 9$ as a difference of squares. Factor both, cancel the common $(x+3)$, and you are done. Alternatively, plug $x = 1$ into the original and each answer choice to find the match.\n\n**Step 1: Factor the numerator**\n$x^2 - 9 = (x - 3)(x + 3)$ (difference of squares)\n\n**Step 2: Factor the denominator**\n$x^2 + 5x + 6 = (x + 2)(x + 3)$\n\n**Step 3: Simplify**\n$\\frac{(x - 3)(x + 3)}{(x + 2)(x + 3)} = \\frac{x - 3}{x + 2}$ (cancel the common factor $x + 3$)\n\n**Why the wrong answers are tempting:**\n- Choice B keeps $(x + 3)$ in the numerator instead of canceling it. This happens if you factor correctly but then forget to actually cancel the common factor -- you did the hard work and stopped right before the finish line.\n- Choice C shows $\\frac{x-3}{x+3}$, which would require canceling $(x+2)$ from the denominator. But $(x+2)$ is not a factor of the numerator, so you cannot cancel it. You can only cancel factors that appear in both.\n- Choice D has $(x-2)$ in the denominator instead of $(x+2)$. This is a sign error in factoring: $x^2 + 5x + 6 = (x+2)(x+3)$, not $(x-2)(x+3)$. Since $5 = 2 + 3$ and $6 = 2 \\times 3$, both factors must be positive.\n\n**Verification:** At $x = 0$: $\\frac{0 - 9}{0 + 0 + 6} = \\frac{-9}{6} = -\\frac{3}{2}$, and $\\frac{0 - 3}{0 + 2} = \\frac{-3}{2}$.\n\n**Test Day Takeaway:** When simplifying rational expressions, always factor completely before canceling. And when in doubt, plug in a simple number like $x = 0$ or $x = 1$ to verify your answer.',
          skills: ['Algebra', 'Rational Expressions', 'Factoring']
        },
        {
          id: 'pt12-m1-q17',
          type: 'fill-in',
          difficulty: 'hard',
          question: '$-3 \\leq 2x + 1 \\leq 9$\n\nHow many integer values of $x$ satisfy the compound inequality above?',
          correctAnswer: '7',
          explanation: '**SAT Pattern: Compound Inequality / Counting Integers** -- Two skills in one: solving the inequality AND counting correctly with the fence-post formula.\n\n**The correct answer is $7$.** The inequality simplifies to $-2 \\leq x \\leq 4$, which contains $7$ integers.\n\n**The Fast Way (20 seconds):** Solve the compound inequality in one shot by subtracting $1$ then dividing by $2$ across all three parts. Then use the formula: number of integers from $a$ to $b$ inclusive $= b - a + 1 = 4 - (-2) + 1 = 7$.\n\n**Step 1: Solve all parts**\nSubtract $1$: $-4 \\leq 2x \\leq 8$\nDivide by $2$: $-2 \\leq x \\leq 4$\n\n**Step 2: Count the integers**\nThe integers satisfying $-2 \\leq x \\leq 4$ are: $-2, -1, 0, 1, 2, 3, 4$.\nThat is $7$ integers.\n\n**Verification:** $4 - (-2) + 1 = 7$. Check endpoints: $2(-2) + 1 = -3$ and $2(4) + 1 = 9$.\n\n**Test Day Takeaway:** When counting integers from $a$ to $b$ inclusive, the answer is $b - a + 1$. The classic off-by-one error is forgetting the $+1$ -- always count the endpoints.',
          skills: ['Algebra', 'Inequalities']
        },
        {
          id: 'pt12-m1-q18',
          type: 'fill-in',
          difficulty: 'hard',
          question: '$$x(kx - 40) = -16$$\n\nIn the given equation, $k$ is a positive integer constant. The equation has no real solution. What is the least possible value of $k$?',
          correctAnswer: 26,
          explanation: '**SAT Pattern: Discriminant and No Real Solutions** -- A harder SAT question, but the method is always the same: set up $b^2 - 4ac < 0$ and solve for the unknown.\n\n**The correct answer is $26$.** The least positive integer $k$ that makes $kx^2 - 40x + 16 = 0$ have no real solutions is $26$.\n\n**The Fast Way (30 seconds):** Rewrite in standard form, identify $a = k$, $b = -40$, $c = 16$. Set $b^2 - 4ac < 0$: $1600 - 64k < 0$, so $k > 25$. The smallest integer greater than $25$ is $26$.\n\n**Step 1: Expand and rewrite**\n$$kx^2 - 40x = -16$$\n$$kx^2 - 40x + 16 = 0$$\n\n**Step 2: Apply the discriminant condition**\nFor no real solution, the discriminant must be negative:\n$$b^2 - 4ac < 0$$\n$$(-40)^2 - 4(k)(16) < 0$$\n$$1{,}600 - 64k < 0$$\n$$64k > 1{,}600$$\n$$k > 25$$\n\n**Step 3: Find the least integer**\nSince $k > 25$ and $k$ must be a positive integer, the least possible value is $k = 26$.\n\n**Verification:**\n- $k = 25$: discriminant $= 1{,}600 - 1{,}600 = 0$ (one real solution, not "no real solution")\n- $k = 26$: discriminant $= 1{,}600 - 1{,}664 = -64 < 0$ (no real solution)\n\n**Test Day Takeaway:** "No real solutions" always means $b^2 - 4ac < 0$. Solve the boundary ($b^2 - 4ac = 0$) first, then decide whether you need the next integer above or below based on the strict inequality.',
          skills: ['Advanced Math', 'Discriminant']
        },
        {
          id: 'pt12-m1-q19',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'A store buys an item at cost, marks it up by $60\\%$, and then offers a $25\\%$ discount during a sale. If the sale price is \\$96, what was the cost, in dollars, of the item?',
          correctAnswer: 80,
          explanation: '**SAT Pattern: Successive Percent Changes** -- One of the most commonly missed concepts. Percent changes multiply -- they do not add or subtract.\n\n**The correct answer is $80$.** The original cost was $\\$80$.\n\n**The Fast Way (20 seconds):** Multiply the percent multipliers: $1.60 \\times 0.75 = 1.20$. So the sale price is $1.20$ times the cost. Solve: $1.20c = 96$, giving $c = 80$.\n\n**Step 1: Set up the equation**\nLet $c$ = cost.\n- After $60\\%$ markup: price $= c \\times 1.60$\n- After $25\\%$ discount: sale price $= c \\times 1.60 \\times 0.75$\n\n**Step 2: Solve**\n$$c \\times 1.60 \\times 0.75 = 96$$\n$$c \\times 1.20 = 96$$\n$$c = \\frac{96}{1.20} = 80$$\n\n**Verification:** Cost $= \\$80$. After $60\\%$ markup: $80 \\times 1.60 = \\$128$. After $25\\%$ discount: $128 \\times 0.75 = \\$96$.\n\n**Test Day Takeaway:** A $60\\%$ increase followed by a $25\\%$ decrease is NOT a net $35\\%$ increase -- it is $1.60 \\times 0.75 = 1.20$, which is only a $20\\%$ net increase. Percent changes always multiply, never add.',
          skills: ['Problem-Solving and Data Analysis', 'Percentages']
        },
        {
          id: 'pt12-m1-q20',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'A cube has a volume of $64$ cubic inches. If each edge length is tripled, what is the volume, in cubic inches, of the new cube?',
          choices: [
            { id: 'A', text: '$192$' },
            { id: 'B', text: '$576$' },
            { id: 'C', text: '$1{,}728$' },
            { id: 'D', text: '$4{,}096$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Volume Scaling** -- When dimensions scale by $k$, volume scales by $k^3$. The SAT always puts $k$ and $k^2$ as trap answers.\n\n**Choice C is correct.** Tripling the edge length gives a new volume of $1{,}728$ cubic inches.\n\n**The Fast Way (15 seconds):** Volume scales by $k^3 = 3^3 = 27$. So $V_{\\text{new}} = 27 \\times 64 = 1{,}728$. No need to find the original edge length.\n\n**Step 1: Find the original edge length**\n$V = s^3 = 64$, so $s = 4$ inches.\n\n**Step 2: Find the new edge length**\nNew edge $= 3 \\times 4 = 12$ inches.\n\n**Step 3: Find the new volume**\n$V_{\\text{new}} = 12^3 = 1{,}728$ cubic inches.\n\n**Why the wrong answers are tempting:**\n- Choice A ($192$) multiplies $64 \\times 3 = 192$, scaling the volume linearly. This is the most natural instinct -- "triple the edge, triple the volume" -- but volume is three-dimensional, so it scales by $3^3 = 27$, not $3$.\n- Choice B ($576$) multiplies $64 \\times 9 = 576$, scaling by $3^2$ instead of $3^3$. This is the surface area scaling, not the volume scaling. It is easy to mix up squares and cubes here.\n- Choice D ($4{,}096$) is $64^2$, which has no geometric meaning in this context. It likely comes from squaring the original volume instead of applying the scaling rule.\n\n**Verification:** New edge $= 12$, and $12^3 = 1{,}728$. Also $27 \\times 64 = 1{,}728$.\n\n**Test Day Takeaway:** Scaling rule: lengths scale by $k$, areas scale by $k^2$, volumes scale by $k^3$. The SAT will always put the $k$ and $k^2$ answers in the choices to tempt you.',
          skills: ['Geometry', 'Volume']
        },
        {
          id: 'pt12-m1-q21',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'If $(x - 3)$ is a factor of $x^3 - 7x^2 + 15x - 9$, what is one of the other zeros of the polynomial? Enter one value.',
          correctAnswer: '1',
          alternateAnswers: ['3'],
          explanation: '**SAT Pattern: Polynomial Zeros / Synthetic Division** -- When the SAT gives you one factor, divide it out to find the rest.\n\n**The correct answer is $1$ (also accepted: $3$).** The polynomial factors as $(x - 3)^2(x - 1)$, so the other zeros are $x = 1$ and $x = 3$.\n\n**The Fast Way (30 seconds):** Use synthetic division with $x = 3$. Bring down the coefficients $1, -7, 15, -9$ and divide. The quotient is $x^2 - 4x + 3 = (x-1)(x-3)$. Zeros: $1$ and $3$.\n\n**Step 1: Divide by $(x - 3)$**\nUsing synthetic division with $x = 3$:\n$x^3 - 7x^2 + 15x - 9 = (x - 3)(x^2 - 4x + 3)$\n\n**Step 2: Factor the quotient**\n$x^2 - 4x + 3 = (x - 1)(x - 3)$\n\n**Step 3: Identify all zeros**\nThe polynomial factors as $(x - 3)^2(x - 1)$.\nThe zeros are $x = 3$ (double root) and $x = 1$.\n\n**Verification:** $f(1) = 1 - 7 + 15 - 9 = 0$. $f(3) = 27 - 63 + 45 - 9 = 0$.\n\n**Test Day Takeaway:** When you are given one factor of a polynomial, synthetic division is your fastest path to finding the remaining zeros. Practice it until it is automatic.',
          skills: ['Algebra', 'Polynomial Functions', 'Zeros']
        },
        {
          id: 'pt12-m1-q22',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'Which of the following is equivalent to $2x^2 + 12x + 23$?',
          choices: [
            { id: 'A', text: '$2(x + 3)^2 + 5$' },
            { id: 'B', text: '$2(x + 3)^2 + 23$' },
            { id: 'C', text: '$2(x + 6)^2 - 49$' },
            { id: 'D', text: '$2(x + 3)^2 + 14$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Completing the Square** -- A must-know technique. The SAT specifically designs wrong answers around the most common completing-the-square mistakes.\n\n**Choice A is correct.** $2x^2 + 12x + 23 = 2(x + 3)^2 + 5$.\n\n**The Fast Way (20 seconds):** Expand each answer choice and see which equals $2x^2 + 12x + 23$. Choice A: $2(x+3)^2 + 5 = 2(x^2 + 6x + 9) + 5 = 2x^2 + 12x + 18 + 5 = 2x^2 + 12x + 23$. Match.\n\n**Step 1: Factor out the leading coefficient from the first two terms**\n$2x^2 + 12x + 23 = 2(x^2 + 6x) + 23$\n\n**Step 2: Complete the square inside the parentheses**\n$x^2 + 6x = (x + 3)^2 - 9$\n\n**Step 3: Substitute back**\n$2[(x + 3)^2 - 9] + 23 = 2(x + 3)^2 - 18 + 23 = 2(x + 3)^2 + 5$\n\n**Why the wrong answers are tempting:**\n- Choice B keeps the constant as $23$ instead of adjusting it. When you add $9$ inside the parentheses to complete the square, you must subtract $2 \\times 9 = 18$ outside (because of the leading $2$). Forgetting this adjustment is the most common completing-the-square mistake.\n- Choice C uses $(x + 6)^2$ instead of $(x + 3)^2$. When completing the square for $x^2 + 6x$, you halve the coefficient of $x$: half of $6$ is $3$, not $6$. It is tempting to just use the coefficient as-is.\n- Choice D subtracts $9$ instead of $18$, forgetting to account for the leading coefficient $2$. Inside the parentheses you added $9$, but since those parentheses are multiplied by $2$, you actually added $2 \\times 9 = 18$ to the expression.\n\n**Verification:** $2(x+3)^2 + 5 = 2(x^2 + 6x + 9) + 5 = 2x^2 + 12x + 18 + 5 = 2x^2 + 12x + 23$.\n\n**Test Day Takeaway:** When completing the square with a leading coefficient, factor it out first. And remember: whatever you add inside the parentheses gets multiplied by that leading coefficient, so subtract accordingly.',
          skills: ['Algebra', 'Completing the Square', 'Quadratic Functions']
        }
      ]
    },
    {
      id: 'module-2',
      title: 'Module 2',
      timeLimit: 35,
      questions: [
        {
          id: 'pt12-m2-q1',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'If $a = 5$ and $b = -3$, what is the value of $2a + 3b$?',
          choices: [
            { id: 'A', text: '$-4$' },
            { id: 'B', text: '$1$' },
            { id: 'C', text: '$4$' },
            { id: 'D', text: '$19$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Expression Evaluation with Substitution** -- Simple algebra, but negative signs cause more errors than you would expect.\n\n**Choice B is correct.** Substituting $a = 5$ and $b = -3$ gives $2(5) + 3(-3) = 10 - 9 = 1$.\n\n**The Fast Way (10 seconds):** Substitute directly: $2(5) + 3(-3) = 10 - 9 = 1$. The only thing to watch is the negative sign on $b$.\n\n**Step 1: Substitute**\n$2(5) + 3(-3) = 10 + (-9) = 10 - 9 = 1$\n\n**Why the wrong answers are tempting:**\n- Choice A ($-4$) likely results from a sign or arithmetic error in combining the terms. Under time pressure, it is easy to miscalculate $10 - 9$ or mishandle a sign somewhere in the chain.\n- Choice C ($4$) might come from substituting incorrect values, such as mixing up which coefficient goes with which variable.\n- Choice D ($19$) comes from treating $b$ as $+3$ instead of $-3$: $2(5) + 3(3) = 10 + 9 = 19$. Dropping the negative sign on a given value is one of the most common careless errors on the SAT.\n\n**Verification:** $2(5) + 3(-3) = 10 - 9 = 1$.\n\n**Test Day Takeaway:** When substituting negative values, write the parentheses: $3(-3)$, not $3 \\cdot 3$. The parentheses force you to keep the negative sign visible.',
          skills: ['Algebra', 'Evaluating Expressions']
        },
        {
          id: 'pt12-m2-q2',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The function $f$ is defined by $f(x) = \\frac{x + 4}{x - 2}$. For which value of $x$ is $f(x)$ undefined?',
          choices: [
            { id: 'A', text: '$-4$' },
            { id: 'B', text: '$-2$' },
            { id: 'C', text: '$2$' },
            { id: 'D', text: '$4$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Domain of a Rational Function** -- Shows up regularly. The rule is simple: undefined means the denominator equals zero.\n\n**Choice C is correct.** The function is undefined when the denominator equals zero, which happens at $x = 2$.\n\n**The Fast Way (10 seconds):** Set the denominator equal to zero: $x - 2 = 0$, so $x = 2$. Done.\n\n**Step 1: Set the denominator equal to zero**\n$x - 2 = 0$\n$x = 2$\n\n**Why the wrong answers are tempting:**\n- Choice A ($x = -4$) makes the numerator zero: $f(-4) = \\frac{0}{-6} = 0$. The function equals zero there, but it is still perfectly defined. Students sometimes confuse "the function equals zero" with "the function is undefined" -- these are completely different things.\n- Choice B ($x = -2$) is a sign mix-up. The denominator is $x - 2$, not $x + 2$, so the critical value is $+2$, not $-2$.\n- Choice D ($x = 4$) gives $f(4) = \\frac{8}{2} = 4$, which is defined with no issues. The denominator is $4 - 2 = 2$, which is not zero.\n\n**Verification:** At $x = 2$: denominator $= 2 - 2 = 0$, so $f(2)$ is undefined.\n\n**Test Day Takeaway:** "Undefined" for a fraction always means denominator equals zero. Ignore the numerator entirely -- it has nothing to do with whether the function is defined.',
          skills: ['Functions', 'Rational Functions']
        },
        {
          id: 'pt12-m2-q3',
          type: 'fill-in',
          difficulty: 'easy',
          question: 'A factory produces $360$ widgets in $8$ hours. At this rate, how many widgets does the factory produce per hour?',
          correctAnswer: '45',
          explanation: '**SAT Pattern: Unit Rate Calculation** -- Straightforward division, but make sure you divide in the right direction.\n\n**The correct answer is $45$.** The factory produces $45$ widgets per hour.\n\n**The Fast Way (5 seconds):** $360 \\div 8 = 45$. Done.\n\n**Step 1: Calculate the rate**\n$\\frac{360 \\text{ widgets}}{8 \\text{ hours}} = 45$ widgets per hour.\n\n**Verification:** $45 \\times 8 = 360$ widgets.\n\n**Test Day Takeaway:** Rate = total quantity divided by total time. If the answer does not come out to a whole number on a fill-in question, double-check your setup.',
          skills: ['Ratios', 'Unit Rate']
        },
        {
          id: 'pt12-m2-q4',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'A taxi ride costs \\$3.50 plus \\$2.25 per mile. Which equation can be used to find $m$, the number of miles for a ride that costs \\$21.50?',
          choices: [
            { id: 'A', text: '$2.25m + 3.50 = 21.50$' },
            { id: 'B', text: '$3.50m + 2.25 = 21.50$' },
            { id: 'C', text: '$2.25m - 3.50 = 21.50$' },
            { id: 'D', text: '$5.75m = 21.50$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Setting Up a Linear Equation from a Word Problem** -- Identify what repeats (per-mile cost) and what is fixed (flat fee), then build the equation.\n\n**Choice A is correct.** The equation is $2.25m + 3.50 = 21.50$, where $2.25m$ is the per-mile cost and $3.50$ is the flat fee.\n\n**The Fast Way (15 seconds):** The per-mile charge ($2.25$) gets multiplied by $m$, the flat fee ($3.50$) gets added, and the total is $21.50$. Write it: $2.25m + 3.50 = 21.50$.\n\n**Step 1: Write the cost equation**\nTotal cost $=$ per-mile charge $+$ flat fee:\n$2.25m + 3.50 = 21.50$\n\n**Why the wrong answers are tempting:**\n- Choice B swaps the two numbers: it multiplies the flat fee ($3.50$) by $m$ and uses the per-mile rate ($2.25$) as the constant. This is the mirror image of the correct setup, and it is the most common mistake when students do not pause to think about which quantity repeats.\n- Choice C subtracts the flat fee instead of adding it. The flat fee is an extra charge on top of the mileage cost, so it adds to the total. Subtracting would only make sense if you had a discount.\n- Choice D combines $2.25 + 3.50 = 5.75$ into a single per-mile rate. This eliminates the distinction between the repeating cost and the fixed cost, which changes the problem entirely.\n\n**Verification:** Solving: $2.25m = 18$, so $m = 8$ miles. Check: $2.25(8) + 3.50 = 18 + 3.50 = 21.50$.\n\n**Test Day Takeaway:** In cost problems, the number that changes with quantity gets multiplied by the variable. The fixed charge is just added on.',
          skills: ['Algebra', 'Linear Equations', 'Word Problems']
        },
        {
          id: 'pt12-m2-q5',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Lines $m$ and $n$ are parallel and are cut by transversal $k$. If one of the angles formed by line $m$ and transversal $k$ measures $65°$, which of the following is the measure of an obtuse angle formed by line $n$ and transversal $k$?',
          diagram: {
            type: 'parallelLines',
            params: {
              angles: { x: '65°', y: 'x°' },
              lineLabels: { m: 'm', n: 'n', t: 'k' },
              showParallelMarks: false
            }
          },
          choices: [
            { id: 'A', text: '$25°$' },
            { id: 'B', text: '$65°$' },
            { id: 'C', text: '$115°$' },
            { id: 'D', text: '$155°$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Parallel Lines and Transversal Angles** -- A geometry classic. All the angles come in just two sizes that add up to $180°$.\n\n**Choice C is correct.** The obtuse angle formed is $180° - 65° = 115°$.\n\n**The Fast Way (10 seconds):** With parallel lines and a transversal, there are only two angle measures. If the acute one is $65°$, the obtuse one is $180° - 65° = 115°$.\n\n**Step 1: Identify the angle types**\nWhen a transversal crosses parallel lines, corresponding angles are equal ($65°$) and co-interior (same-side interior) angles are supplementary.\n\n**Step 2: Find the obtuse angle**\nThe acute angles are $65°$ and the obtuse angles are $180° - 65° = 115°$.\n\n**Why the wrong answers are tempting:**\n- Choice A ($25°$) comes from computing the complement: $90° - 65° = 25°$. But complementary angles only apply when there is a right angle, and nothing in this problem involves $90°$. The correct operation is $180° - 65°$.\n- Choice B ($65°$) is the corresponding angle, which is acute. The question specifically asks for the obtuse angle, so you need the supplement.\n- Choice D ($155°$) might come from $90° + 65° = 155°$, which has no geometric basis here. The supplement of $65°$ is $180° - 65° = 115°$, not $155°$.\n\n**Verification:** $65° + 115° = 180°$ (supplementary, as expected).\n\n**Test Day Takeaway:** Parallel lines cut by a transversal create exactly two angle sizes. Find one, and the other is its supplement ($180°$ minus the first).',
          skills: ['Geometry', 'Parallel Lines', 'Angle Relationships']
        },
        {
          id: 'pt12-m2-q6',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'What is the positive solution to $x^2 - 7x + 10 = 0$?\n\nEnter the larger solution.',
          correctAnswer: '5',
          explanation: '**SAT Pattern: Solving a Quadratic by Factoring** -- The fastest method when the quadratic factors cleanly. Always check if factoring works before reaching for the quadratic formula.\n\n**The correct answer is $5$.** The quadratic factors as $(x - 2)(x - 5) = 0$, giving $x = 2$ and $x = 5$. The larger solution is $5$.\n\n**The Fast Way (15 seconds):** Factor: find two numbers that multiply to $10$ and add to $-7$. That is $-2$ and $-5$. So $(x-2)(x-5) = 0$, and the larger root is $5$. Or type $x^2 - 7x + 10 = 0$ into Desmos and read the $x$-intercepts.\n\n**Step 1: Factor**\nFind two numbers that multiply to $10$ and add to $-7$: $(-2)(-5) = 10$ and $-2 + (-5) = -7$.\n$x^2 - 7x + 10 = (x - 2)(x - 5) = 0$\n\n**Step 2: Solve**\n$x = 2$ or $x = 5$\n\nThe larger solution is $5$.\n\n**Verification:** $(5)^2 - 7(5) + 10 = 25 - 35 + 10 = 0$ and $(2)^2 - 7(2) + 10 = 4 - 14 + 10 = 0$.\n\n**Test Day Takeaway:** To factor $x^2 + bx + c$, find two numbers that multiply to $c$ and add to $b$. If no such integers exist, switch to the quadratic formula.',
          skills: ['Algebra', 'Quadratic Equations', 'Factoring']
        },
        {
          id: 'pt12-m2-q7',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'If $5x - 3 > 17$, which of the following must be true?',
          choices: [
            { id: 'A', text: '$x > 2$' },
            { id: 'B', text: '$x > 3$' },
            { id: 'C', text: '$x > 4$' },
            { id: 'D', text: '$x < 4$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Solving a Linear Inequality** -- Treat it like an equation, but watch the direction of the inequality sign.\n\n**Choice C is correct.** Solving $5x - 3 > 17$ gives $x > 4$.\n\n**The Fast Way (10 seconds):** Add $3$: $5x > 20$. Divide by $5$: $x > 4$. Since we divided by a positive number, the inequality direction stays the same.\n\n**Step 1: Add $3$ to both sides**\n$5x > 20$\n\n**Step 2: Divide by $5$**\n$x > 4$\n\n**Why the wrong answers are tempting:**\n- Choice A ($x > 2$) is technically true for all solutions (since $x > 4$ does imply $x > 2$), but it is not the tightest bound. The SAT wants the most precise answer, and $x > 2$ includes values like $x = 3$ that do not satisfy the original inequality.\n- Choice B ($x > 3$) might come from dividing $17$ by $5$ to get $3.4$ and rounding down, or from a subtraction slip. Again, it is not tight enough -- $x = 3.5$ does not satisfy $5(3.5) - 3 = 14.5 > 17$.\n- Choice D ($x < 4$) flips the inequality direction. Nothing in the solving process requires a flip (you only flip when multiplying or dividing by a negative), so the direction stays $>$.\n\n**Verification:** Test $x = 5$: $5(5) - 3 = 22 > 17$. Test $x = 4$: $5(4) - 3 = 17$, which is not $> 17$ (boundary excluded).\n\n**Test Day Takeaway:** Solve linear inequalities exactly like equations. Only flip the inequality sign when you multiply or divide by a negative number.',
          skills: ['Algebra', 'Linear Inequalities']
        },
        {
          id: 'pt12-m2-q8',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'A researcher wants to estimate the average commute time of employees at a large company with $5{,}000$ employees. Which of the following sampling methods is most likely to produce a representative sample?',
          choices: [
            { id: 'A', text: 'Survey all employees who arrive before $8$ AM' },
            { id: 'B', text: 'Survey $200$ employees selected at random from the company roster' },
            { id: 'C', text: 'Survey the first $100$ employees who volunteer to participate' },
            { id: 'D', text: 'Survey all employees in one department' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Representative Sampling** -- The SAT tests whether you can spot bias in a sampling method. The answer is almost always "random sample from the whole population."\n\n**Choice B is correct.** A random sample of $200$ employees from the entire company roster is most likely to produce a representative sample.\n\n**The Fast Way (10 seconds):** Scan for the word "random" combined with "from the company roster" (the entire population). That is Choice B.\n\n**Why the wrong answers are tempting:**\n- Choice A surveys only early arrivals. This sounds thorough, but employees who arrive before $8$ AM may have systematically shorter commutes or different schedules. This is convenience sampling, and it introduces bias toward one type of commuter.\n- Choice C relies on volunteers. Self-selection bias is a real problem: people who feel strongly about their commute (very long or very short) may be more or less likely to volunteer, skewing the results.\n- Choice D surveys one department. Even if that department is large, its employees may share a common location or schedule that does not represent the whole company. This is cluster sampling without any randomization.\n\n**Verification:** A random sample of $200$ from $5{,}000$ employees gives every employee an equal chance of selection, producing an unbiased estimate.\n\n**Test Day Takeaway:** On sampling questions, look for two things: (1) selection is random, and (2) the sample is drawn from the entire population of interest. If either is missing, the method is biased.',
          skills: ['Statistics', 'Sampling']
        },
        {
          id: 'pt12-m2-q9',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'A school is buying notebooks and pens for students. Notebooks cost \\$4 each and pens cost \\$1 each. The school has a budget of \\$100 and needs to buy a total of $40$ items. How many notebooks can the school buy?',
          correctAnswer: '20',
          explanation: '**SAT Pattern: System of Equations from a Word Problem** -- Two unknowns, two conditions. Set up the system and subtract to eliminate.\n\n**The correct answer is $20$.** The school can buy $20$ notebooks.\n\n**The Fast Way (20 seconds):** Set up: $n + p = 40$ and $4n + p = 100$. Subtract the first from the second: $3n = 60$, so $n = 20$.\n\n**Step 1: Define variables**\nLet $n$ = notebooks and $p$ = pens.\n\n**Step 2: Write the system**\n$n + p = 40$ (total items)\n$4n + p = 100$ (total cost)\n\n**Step 3: Solve**\nSubtract the first equation from the second:\n$(4n + p) - (n + p) = 100 - 40$\n$3n = 60$\n$n = 20$\n\n**Verification:** $n = 20$, $p = 20$. Total items: $20 + 20 = 40$. Total cost: $4(20) + 1(20) = 80 + 20 = 100$.\n\n**Test Day Takeaway:** When a word problem gives you two conditions about two unknowns, write two equations and use elimination. Subtraction is usually the fastest route.',
          skills: ['Algebra', 'Systems of Equations', 'Word Problems']
        },
        {
          id: 'pt12-m2-q10',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: '$$x - 31 = (x - a)(x - 31)$$\n\nIn the given equation, $a$ is a constant where $a > 32$. Which of the following are solutions to the equation?',
          choices: [
            { id: 'A', text: '$31$ and $a + 1$' },
            { id: 'B', text: '$31$ and $a - 1$' },
            { id: 'C', text: '$a$ and $31$' },
            { id: 'D', text: '$a + 1$ only' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Equation with a Common Factor on Both Sides** -- A tricky algebraic structure. You must handle two cases: when the common factor is zero and when it is not.\n\n**Choice A is correct.** The solutions are $x = 31$ and $x = a + 1$.\n\n**The Fast Way (30 seconds):** Test $x = 31$: both sides become $0$, so it works. For $x \\neq 31$, divide both sides by $(x - 31)$ to get $1 = x - a$, so $x = a + 1$. The answer pair is $31$ and $a + 1$.\n\n**Case 1: $x = 31$**\nLHS: $31 - 31 = 0$\nRHS: $(31 - a)(31 - 31) = (31 - a)(0) = 0$\nSo $x = 31$ is a solution.\n\n**Case 2: $x \\neq 31$**\nSince $x - 31 \\neq 0$, divide both sides by $(x - 31)$:\n$$1 = x - a$$\n$$x = a + 1$$\n\n**Why the wrong answers are tempting:**\n- Choice B says $a - 1$ instead of $a + 1$. This is a sign error when solving $1 = x - a$. Adding $a$ to both sides gives $x = a + 1$, not $a - 1$. Under pressure, it is easy to subtract instead of add.\n- Choice C says $a$ instead of $a + 1$. This comes from forgetting to add the $1$ when isolating $x$ from $1 = x - a$. You stopped one step short.\n- Choice D only lists $a + 1$ and misses $x = 31$. When $x = 31$, both sides equal $0$, which is a perfectly valid equation. You cannot discard a solution just because it makes both sides zero.\n\n**Verification for $x = a + 1$:**\nLHS: $(a + 1) - 31 = a - 30$\nRHS: $((a + 1) - a)((a + 1) - 31) = (1)(a - 30) = a - 30$.\n\n**Test Day Takeaway:** When an equation has a common factor on both sides, do not just divide it away. First check whether that factor being zero gives a valid solution, then divide to find the rest.',
          skills: ['Advanced Math', 'Quadratic Equations']
        },
        {
          id: 'pt12-m2-q11',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'Both data sets shown above have the same mean. Which of the following correctly compares the standard deviations of the two data sets?',
          questionFormula: {
            equation: '$$\\text{Data set } X: \\quad 10, \\; 12, \\; 14, \\; 16, \\; 18$$\n$$\\text{Data set } Y: \\quad 2, \\; 8, \\; 14, \\; 20, \\; 26$$'
          },
          choices: [
            { id: 'A', text: 'The standard deviation of $X$ is greater than the standard deviation of $Y$.' },
            { id: 'B', text: 'The standard deviation of $Y$ is greater than the standard deviation of $X$.' },
            { id: 'C', text: 'The standard deviations of $X$ and $Y$ are equal.' },
            { id: 'D', text: 'There is not enough information to compare the standard deviations.' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Comparing Standard Deviations** -- You rarely need to calculate standard deviation on the SAT. Just compare how spread out the data sets are.\n\n**Choice B is correct.** Data set $Y$ is more spread out than $X$, so its standard deviation is greater.\n\n**The Fast Way (15 seconds):** Both data sets have the same mean ($14$). Compare the ranges: $X$ spans from $10$ to $18$ (range $8$), while $Y$ spans from $2$ to $26$ (range $24$). $Y$ is clearly more spread out, so its standard deviation is larger.\n\n**Step 1: Verify equal means**\nMean of $X$: $\\frac{10+12+14+16+18}{5} = \\frac{70}{5} = 14$\nMean of $Y$: $\\frac{2+8+14+20+26}{5} = \\frac{70}{5} = 14$\n\n**Step 2: Compare the spread**\nData set $X$: Values range from $10$ to $18$ (range $= 8$), tightly clustered near the mean.\nData set $Y$: Values range from $2$ to $26$ (range $= 24$), much more spread out.\n\n**Why the wrong answers are tempting:**\n- Choice A reverses the comparison. $X$ has the smaller range ($8$ vs $24$), so $X$ has the smaller standard deviation. It is easy to mix up which set is which when you are comparing two things at once.\n- Choice C assumes equal means implies equal standard deviations. This is a common misconception. The mean tells you the center; the standard deviation tells you the spread. Two data sets can have the same center but very different spreads.\n- Choice D claims there is not enough information, but we have every single data point in both sets. We can absolutely compare their standard deviations -- we do not even need to compute them exactly.\n\n**Verification:** Range of $X = 8$, range of $Y = 24$. With the same mean, the data set with the larger range has the greater standard deviation.\n\n**Test Day Takeaway:** To compare standard deviations, look at how far the data values are from the mean. You almost never need to actually calculate standard deviation on the SAT -- just compare the spread visually.',
          skills: ['Statistics', 'Standard Deviation']
        },
        {
          id: 'pt12-m2-q12',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'In right triangle $RST$, angle $T$ is a right angle. If $RS = 17$ and $RT = 8$, what is the value of $\\sin(R)$? Express your answer as a fraction.',
          correctAnswer: '15/17',
          alternateAnswers: ['0.882'],
          explanation: '**SAT Pattern: Right Triangle Trigonometry (SOH-CAH-TOA)** -- Find the missing side with the Pythagorean theorem, then apply the trig ratio.\n\n**The correct answer is $\\frac{15}{17}$ (approximately $0.882$).** In the right triangle, $\\sin(R) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{15}{17}$.\n\n**The Fast Way (20 seconds):** Recognize the $8$-$15$-$17$ Pythagorean triple. The side opposite angle $R$ is $ST = 15$, and the hypotenuse is $RS = 17$. So $\\sin(R) = \\frac{15}{17}$.\n\n**Step 1: Find the missing side**\n$RS$ is the hypotenuse (opposite the right angle $T$), $RT = 8$.\n$ST = \\sqrt{RS^2 - RT^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15$\n\n**Step 2: Find $\\sin(R)$**\n$\\sin(R) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{ST}{RS} = \\frac{15}{17}$\n\n**Verification:** $8^2 + 15^2 = 64 + 225 = 289 = 17^2$, and $\\frac{15}{17} \\approx 0.882$.\n\n**Test Day Takeaway:** SOH-CAH-TOA: Sine = Opposite / Hypotenuse. Always identify which side is opposite the angle in question and which is the hypotenuse before writing the ratio.',
          skills: ['Trigonometry', 'Right Triangles']
        },
        {
          id: 'pt12-m2-q13',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'If $f(x) = 2x + 1$ and $g(x) = x^2 - 3$, what is the value of $f(g(2))$?',
          choices: [
            { id: 'A', text: '$1$' },
            { id: 'B', text: '$3$' },
            { id: 'C', text: '$7$' },
            { id: 'D', text: '$22$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Function Composition** -- Always work from the inside out. The #1 mistake is applying the functions in the wrong order.\n\n**Choice B is correct.** $f(g(2)) = f(1) = 3$.\n\n**The Fast Way (15 seconds):** Inside out: $g(2) = 4 - 3 = 1$. Then $f(1) = 2(1) + 1 = 3$. Done.\n\n**Step 1: Evaluate $g(2)$**\n$g(2) = (2)^2 - 3 = 4 - 3 = 1$\n\n**Step 2: Evaluate $f(g(2)) = f(1)$**\n$f(1) = 2(1) + 1 = 3$\n\n**Why the wrong answers are tempting:**\n- Choice A ($1$) is $g(2) = 1$, the result of the inner function only. If you stop after computing $g(2)$ and forget to feed that result into $f$, you land here. The SAT loves putting intermediate results in the answer choices.\n- Choice C ($7$) comes from computing $f(3) = 2(3) + 1 = 7$, using $x = 3$ (which is not $g(2)$) as the input to $f$. This might happen if you confuse the input value with the function output.\n- Choice D ($22$) is $g(f(2)) = g(5) = 25 - 3 = 22$, which applies the functions in the reverse order. $f(g(2))$ means "$f$ of $g$ of $2$" -- $g$ first, then $f$. Swapping the order gives a completely different result.\n\n**Verification:** $g(2) = 1$, $f(1) = 3$, so $f(g(2)) = 3$.\n\n**Test Day Takeaway:** $f(g(x))$ means "start with $g$, end with $f$." Always evaluate the inner function first. If you see an intermediate answer in the choices, keep going.',
          skills: ['Functions', 'Function Composition']
        },
        {
          id: 'pt12-m2-q14',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'A cone has a volume of $100\\pi$ cubic centimeters and a base area of $25\\pi$ square centimeters. What is the slant height, in centimeters, of the cone?',
          correctAnswer: 13,
          explanation: '**SAT Pattern: Cone Geometry (Volume + Slant Height)** -- A multi-step problem that combines volume, area, and the Pythagorean theorem. Take it one step at a time.\n\n**The correct answer is $13$.** The slant height of the cone is $13$ cm.\n\n**The Fast Way (30 seconds):** From the base area, $r = 5$. From the volume formula, $h = 12$. Slant height $= \\sqrt{5^2 + 12^2} = 13$ (recognize the $5$-$12$-$13$ triple).\n\n**Step 1: Find the radius**\nBase area $= \\pi r^2 = 25\\pi$, so $r^2 = 25$ and $r = 5$.\n\n**Step 2: Find the height**\n$$V = \\frac{1}{3}\\pi r^2 h$$\n$$100\\pi = \\frac{1}{3}(25\\pi)h$$\n$$100 = \\frac{25h}{3}$$\n$$h = 12$$\n\n**Step 3: Find the slant height**\nThe slant height $\\ell$ forms a right triangle with the radius and height:\n$$\\ell = \\sqrt{r^2 + h^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$$\n\n**Verification:** $V = \\frac{1}{3}\\pi(5)^2(12) = \\frac{1}{3}(300\\pi) = 100\\pi$.\n\n**Test Day Takeaway:** The slant height of a cone is the hypotenuse of the right triangle formed by the radius and the height. Whenever you see a cone problem, draw that right triangle inside the cone -- it unlocks most cone questions.',
          skills: ['Geometry', 'Volume']
        },
        {
          id: 'pt12-m2-q15',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'The dot plot above shows the distribution of quiz scores for $12$ students. If one more student takes the quiz and scores $5$, which of the following statements about the data set is true?',
          diagram: {
            type: 'dotPlot',
            params: {
              title: 'Quiz Scores',
              data: [
                { value: 3, count: 1 },
                { value: 4, count: 2 },
                { value: 5, count: 3 },
                { value: 6, count: 3 },
                { value: 7, count: 2 },
                { value: 8, count: 1 }
              ],
              xMin: 3,
              xMax: 8
            }
          },
          choices: [
            { id: 'A', text: 'The mode increases.' },
            { id: 'B', text: 'The mode changes from $5$ and $6$ to $5$ only.' },
            { id: 'C', text: 'The median increases.' },
            { id: 'D', text: 'The range increases.' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Effect of Adding a Data Point on Statistics** -- The SAT often asks how one new value changes the mean, median, mode, or range.\n\n**Choice B is correct.** Adding a score of $5$ changes the mode from bimodal ($5$ and $6$) to unimodal ($5$ only).\n\n**The Fast Way (20 seconds):** Before adding: $5$ and $6$ each appear $3$ times (bimodal). After adding a $5$: now $5$ appears $4$ times and $6$ still appears $3$ times. So $5$ becomes the sole mode.\n\n**Current data (12 students):**\nScores: $3, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 8$\n- Mode: $5$ and $6$ (both appear $3$ times -- bimodal)\n- Median: average of 6th and 7th values $= \\frac{5+6}{2} = 5.5$\n- Range: $8 - 3 = 5$\n\n**After adding a $5$ (13 students):**\nScores: $3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 7, 8$\n- Mode: $5$ only (appears $4$ times) -- now unimodal\n- Median: 7th value $= 5$ (decreased from $5.5$)\n- Range: still $5$\n\n**Why the wrong answers are tempting:**\n- Choice A says "the mode increases," which is ambiguous but misleading. The mode does not increase in value -- it was $5$ (and $6$) before, and now it is $5$ alone. The mode value did not go up; the distribution just stopped being bimodal.\n- Choice C says the median increases, but it actually decreases from $5.5$ to $5$. Adding a value of $5$, which is below the old median of $5.5$, pulls the median downward.\n- Choice D says the range increases, but the new score ($5$) falls within the existing range of $3$ to $8$. The range only changes if you add a value outside the current minimum and maximum.\n\n**Verification:** After adding a $5$: mode changes from $\\{5, 6\\}$ to $\\{5\\}$ only.\n\n**Test Day Takeaway:** Adding a data point only changes the range if it falls outside the current min-max. It only changes the mode if it tips the frequency count. Think through each statistic separately.',
          skills: ['Statistics', 'Data Analysis']
        },
        {
          id: 'pt12-m2-q16',
          type: 'fill-in',
          difficulty: 'hard',
          question: '$x^2 + y^2 + 8x - 14y + 40 = 0$\n\nThe equation above defines a circle in the $xy$-plane. What is the radius of the circle?',
          correctAnswer: '5',
          explanation: '**SAT Pattern: Circle Equation (General to Standard Form)** -- Complete the square for both $x$ and $y$ to convert to standard form and read the radius.\n\n**The correct answer is $5$.** The radius of the circle is $5$.\n\n**The Fast Way (30 seconds):** Group $x$ and $y$ terms, complete the square for each, and read $r^2$ from the right side. Shortcut: $r^2 = (\\frac{8}{2})^2 + (\\frac{-14}{2})^2 - 40 = 16 + 49 - 40 = 25$, so $r = 5$.\n\n**Step 1: Group terms**\n$(x^2 + 8x) + (y^2 - 14y) = -40$\n\n**Step 2: Complete the square**\nFor $x$: $x^2 + 8x + 16 = (x + 4)^2$, add $16$ to both sides.\nFor $y$: $y^2 - 14y + 49 = (y - 7)^2$, add $49$ to both sides.\n\n$(x + 4)^2 + (y - 7)^2 = -40 + 16 + 49 = 25$\n\n**Step 3: Read the radius**\n$r^2 = 25$, so $r = 5$.\n\n**Verification:** Center $= (-4, 7)$. Check: $(-4)^2 + 7^2 + 8(-4) - 14(7) + 40 = 16 + 49 - 32 - 98 + 40 = -25$. The equation equals $0$ when the point is on the circle, confirming $r = 5$.\n\n**Test Day Takeaway:** For the general circle equation $x^2 + y^2 + Dx + Ey + F = 0$, complete the square for both variables. The number on the right side of the standard form is $r^2$, not $r$ -- do not forget the square root.',
          skills: ['Geometry', 'Circle Equations']
        },
        {
          id: 'pt12-m2-q17',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'Lines $2x + 5y = 10$ and $bx - 4y = 7$ are perpendicular. What is the value of $b$?',
          choices: [
            { id: 'A', text: '$4$' },
            { id: 'B', text: '$8$' },
            { id: 'C', text: '$10$' },
            { id: 'D', text: '$20$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Perpendicular Lines (Negative Reciprocal Slopes)** -- The product of perpendicular slopes is $-1$. Set up that equation and solve.\n\n**Choice C is correct.** The value of $b$ is $10$.\n\n**The Fast Way (25 seconds):** Find both slopes: $m_1 = -\\frac{2}{5}$ and $m_2 = \\frac{b}{4}$. Set their product equal to $-1$: $-\\frac{2}{5} \\cdot \\frac{b}{4} = -1$. Solve: $\\frac{2b}{20} = 1$, so $b = 10$.\n\n**Step 1: Find the slope of each line**\n- Line 1: $2x + 5y = 10 \\implies y = -\\frac{2}{5}x + 2$, slope $= -\\frac{2}{5}$\n- Line 2: $bx - 4y = 7 \\implies y = \\frac{b}{4}x - \\frac{7}{4}$, slope $= \\frac{b}{4}$\n\n**Step 2: Apply the perpendicular condition**\nPerpendicular lines have slopes whose product is $-1$:\n$$\\left(-\\frac{2}{5}\\right)\\left(\\frac{b}{4}\\right) = -1$$\n$$-\\frac{2b}{20} = -1$$\n$$\\frac{b}{10} = 1$$\n$$b = 10$$\n\n**Why the wrong answers are tempting:**\n- Choice A ($b = 4$) gives slope $\\frac{4}{4} = 1$, and $-\\frac{2}{5} \\times 1 = -\\frac{2}{5}$, which is not $-1$. You might land here if you assume the slope should be $1$ without checking the perpendicular condition.\n- Choice B ($b = 8$) gives slope $2$, and $-\\frac{2}{5} \\times 2 = -\\frac{4}{5}$, which is close to $-1$ but not quite. Arithmetic slips in fraction multiplication can lead here.\n- Choice D ($b = 20$) gives slope $5$, and $-\\frac{2}{5} \\times 5 = -2$, which overshoots $-1$. This might come from a cross-multiplication error.\n\n**Verification:** Slopes are $-\\frac{2}{5}$ and $\\frac{10}{4} = \\frac{5}{2}$. Product: $-\\frac{2}{5} \\times \\frac{5}{2} = -1$.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals -- flip the fraction and change the sign. If one slope is $-\\frac{2}{5}$, the perpendicular slope must be $\\frac{5}{2}$.',
          skills: ['Algebra', 'Linear Equations']
        },
        {
          id: 'pt12-m2-q18',
          type: 'fill-in',
          difficulty: 'hard',
          question: '$$\\sqrt{2x + 7} - x = 2$$\n\nWhat is the solution to the given equation?',
          correctAnswer: 1,
          explanation: '**SAT Pattern: Radical Equation (Squaring and Checking)** -- You must check for extraneous solutions. Squaring both sides can create "phantom" answers that do not actually work.\n\n**The correct answer is $1$.** After solving, only $x = 1$ satisfies the original equation.\n\n**The Fast Way (30 seconds):** Isolate the radical: $\\sqrt{2x + 7} = x + 2$. Square: $2x + 7 = x^2 + 4x + 4$, giving $x^2 + 2x - 3 = 0$, so $(x+3)(x-1) = 0$. Check both: $x = -3$ fails, $x = 1$ works.\n\n**Step 1: Isolate the radical**\n$$\\sqrt{2x + 7} = x + 2$$\n\n**Step 2: Square both sides**\n$$2x + 7 = (x + 2)^2 = x^2 + 4x + 4$$\n\n**Step 3: Solve the quadratic**\n$$0 = x^2 + 2x - 3$$\n$$0 = (x + 3)(x - 1)$$\n$$x = -3 \\quad \\text{or} \\quad x = 1$$\n\n**Step 4: Check for extraneous solutions**\n- $x = -3$: $\\sqrt{2(-3) + 7} - (-3) = \\sqrt{1} + 3 = 1 + 3 = 4 \\neq 2$ (extraneous)\n- $x = 1$: $\\sqrt{2(1) + 7} - 1 = \\sqrt{9} - 1 = 3 - 1 = 2$ (valid)\n\nThe only solution is $x = 1$.\n\n**Verification:** $\\sqrt{2(1) + 7} - 1 = \\sqrt{9} - 1 = 3 - 1 = 2$.\n\n**Test Day Takeaway:** Squaring both sides of an equation can introduce extraneous solutions. Always plug your answers back into the original equation. If a solution does not check out, discard it -- it is not real.',
          skills: ['Advanced Math', 'Radical Equations']
        },
        {
          id: 'pt12-m2-q19',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'In the $xy$-plane, the circle $x^2 + y^2 = 25$ and the line $y = x + 1$ intersect at two points. What is the sum of the $x$-coordinates of these two points?',
          correctAnswer: -1,
          explanation: '**SAT Pattern: Circle-Line Intersection** -- Substitute the line into the circle equation and solve the resulting quadratic.\n\n**The correct answer is $-1$.** The sum of the $x$-coordinates of the two intersection points is $-1$.\n\n**The Fast Way (25 seconds):** Substitute $y = x + 1$ into $x^2 + y^2 = 25$ to get $x^2 + x - 12 = 0$. By Vieta\'s formulas, the sum of the roots is $-\\frac{b}{a} = -\\frac{1}{1} = -1$. You do not even need to find the individual roots.\n\n**Step 1: Substitute $y = x + 1$**\n$$x^2 + (x + 1)^2 = 25$$\n$$x^2 + x^2 + 2x + 1 = 25$$\n$$2x^2 + 2x - 24 = 0$$\n$$x^2 + x - 12 = 0$$\n\n**Step 2: Solve**\n$$(x + 4)(x - 3) = 0$$\n$$x = -4 \\quad \\text{or} \\quad x = 3$$\n\n**Step 3: Find the sum**\n$$-4 + 3 = -1$$\n\n**Verification:**\n- $(x, y) = (-4, -3)$: $(-4)^2 + (-3)^2 = 16 + 9 = 25$ and $-3 = -4 + 1$.\n- $(x, y) = (3, 4)$: $3^2 + 4^2 = 9 + 16 = 25$ and $4 = 3 + 1$.\n\n**Test Day Takeaway:** When a problem asks for the sum (or product) of roots, think Vieta\'s formulas first. For $ax^2 + bx + c = 0$, the sum of roots is $-b/a$ and the product is $c/a$. This can save you from solving the quadratic entirely.',
          skills: ['Advanced Math', 'Systems of Equations']
        },
        {
          id: 'pt12-m2-q20',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'If $3^a = 5$ and $3^b = 45$, what is the value of $b - a$?',
          correctAnswer: 2,
          explanation: '**SAT Pattern: Exponent Properties (Quotient Rule)** -- The SAT loves problems where you do not need to find $a$ and $b$ individually -- just their difference.\n\n**The correct answer is $2$.** $b - a = 2$.\n\n**The Fast Way (15 seconds):** $3^{b-a} = \\frac{3^b}{3^a} = \\frac{45}{5} = 9 = 3^2$. So $b - a = 2$. Done -- no logs, no calculators needed.\n\n**Step 1: Express $3^{b-a}$ using the quotient rule**\n$$3^{b-a} = \\frac{3^b}{3^a}$$\n\n**Step 2: Substitute the given values**\n$$3^{b-a} = \\frac{45}{5} = 9$$\n\n**Step 3: Solve for $b - a$**\n$$3^{b-a} = 9 = 3^2$$\n$$b - a = 2$$\n\n**Verification:** If $3^a = 5$ and $b - a = 2$, then $3^b = 3^{a+2} = 3^a \\cdot 3^2 = 5 \\cdot 9 = 45$.\n\n**Test Day Takeaway:** When you see $a^m$ and $a^n$ with the same base, think quotient rule: $\\frac{a^m}{a^n} = a^{m-n}$. This lets you find the difference of exponents without solving for each one -- especially powerful when the individual values are irrational.',
          skills: ['Advanced Math', 'Exponential Equations']
        },
        {
          id: 'pt12-m2-q21',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The price of an item was increased by $20\\%$, and then the new price was decreased by $25\\%$. What is the overall percent change from the original price? Enter your answer as a negative number if the price decreased.',
          correctAnswer: '-10',
          explanation: '**SAT Pattern: Successive Percent Changes** -- The SAT tests this because most people instinctively add percents ($+20\\% - 25\\% = -5\\%$), which is wrong.\n\n**The correct answer is $-10$ (a $10\\%$ decrease).** The overall effect is a $10\\%$ decrease, not a $5\\%$ decrease.\n\n**The Fast Way (15 seconds):** Multiply the multipliers: $1.20 \\times 0.75 = 0.90$. That is a $10\\%$ decrease. Enter $-10$.\n\n**Step 1: Increase by $20\\%$**\nLet the original price be $100$.\nAfter $20\\%$ increase: $100 \\times 1.20 = 120$.\n\n**Step 2: Decrease by $25\\%$**\nAfter $25\\%$ decrease: $120 \\times 0.75 = 90$.\n\n**Step 3: Calculate the overall change**\nOverall change: $\\frac{90 - 100}{100} \\times 100\\% = -10\\%$\n\n**Verification:** $1.20 \\times 0.75 = 0.90$, which represents a $10\\%$ decrease from the original.\n\n**Test Day Takeaway:** Percent changes multiply, they do not add. A $20\\%$ increase followed by a $25\\%$ decrease is $1.20 \\times 0.75 = 0.90$, not $1.00 - 0.05 = 0.95$. Always convert to multipliers and multiply.',
          skills: ['Percentages', 'Arithmetic']
        },
        {
          id: 'pt12-m2-q22',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: '$y = 3$\n\n$y = x^2 - 4x + k$\n\nIn the given system of equations, $k$ is a positive constant. The system has no real solutions. What is the least integer value of $k$?',
          choices: [
            { id: 'A', text: '$6$' },
            { id: 'B', text: '$7$' },
            { id: 'C', text: '$8$' },
            { id: 'D', text: '$9$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: System with No Real Solutions (Discriminant)** -- Combine the equations, then use $b^2 - 4ac < 0$. Watch the boundary carefully -- "no solutions" requires strictly negative.\n\n**Choice C is correct.** The least integer value of $k$ is $8$.\n\n**The Fast Way (25 seconds):** Set equal: $x^2 - 4x + (k-3) = 0$. For no real solutions: $16 - 4(k-3) < 0$, so $28 - 4k < 0$, giving $k > 7$. Least integer: $k = 8$.\n\n**Step 1: Set the equations equal**\n$x^2 - 4x + k = 3$\n$x^2 - 4x + (k - 3) = 0$\n\n**Step 2: Apply the discriminant condition**\n$b^2 - 4ac < 0$\n$(-4)^2 - 4(1)(k - 3) < 0$\n$16 - 4k + 12 < 0$\n$28 < 4k$\n$k > 7$\n\n**Step 3: Find the least integer**\nSince $k > 7$ and $k$ must be a positive integer, the least value is $k = 8$.\n\n**Why the wrong answers are tempting:**\n- Choice A ($k = 6$) gives discriminant $= 16 - 4(3) = 4 > 0$, which means two real solutions. This is well below the threshold, but students who make arithmetic errors in the discriminant calculation might land here.\n- Choice B ($k = 7$) is the boundary case: discriminant $= 16 - 4(4) = 0$, which gives exactly one solution. "No solutions" requires the discriminant to be strictly negative, not zero. This is the classic off-by-one trap -- the inequality is strict ($<$), not $\\leq$.\n- Choice D ($k = 9$) does work (discriminant is negative), but it is not the least integer that works. The question asks for the minimum, so you need the first integer past the boundary.\n\n**Verification:** $k = 8$: discriminant $= 16 - 4(5) = -4 < 0$ (no real solutions). $k = 7$: discriminant $= 0$ (one solution, not zero solutions).\n\n**Test Day Takeaway:** "No real solutions" means $b^2 - 4ac < 0$ (strictly). "At most one solution" means $b^2 - 4ac \\leq 0$. The difference between $<$ and $\\leq$ is often worth one point on the SAT.',
          skills: ['Quadratic Equations', 'Systems of Equations', 'Discriminant']
        }
      ]
    }
  ]
};
