// Practice Test 11
// 44 questions total (22 per module)

export const practiceTest11 = {
  id: 'practice-test-11',
  title: 'Practice Test 11',
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
          id: 'pt11-m1-q1',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The scatterplot above shows the number of hours studied and the corresponding test score for $8$ students. A line of best fit is also shown. According to the line of best fit, what test score is predicted for a student who studied $5$ hours?',
          diagram: {
            type: 'scatterplot',
            params: {
              points: [
                [1, 55], [2, 60], [3, 68], [3.5, 72],
                [4, 74], [5, 82], [6, 85], [7, 92]
              ],
              xMax: 8,
              yMax: 100,
              bestFitLine: { slope: 6, intercept: 50 }
            }
          },
          choices: [
            { id: 'A', text: '$68$' },
            { id: 'B', text: '$74$' },
            { id: 'C', text: '$80$' },
            { id: 'D', text: '$86$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Line of Best Fit / Scatterplot Reading** -- Shows up every test, usually 1-2 questions.\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Look at the graph, find $x = 5$ on the horizontal axis, go straight up to the line of best fit, then read across to the $y$-axis. You land at $80$. Done. Alternatively, if you can read the equation from the graph, just plug in: $y = 6(5) + 50 = 80$.\n\n**Step 1: Use the line of best fit equation**\nThe line has slope $6$ and $y$-intercept $50$, giving $y = 6x + 50$.\n\n**Step 2: Substitute $x = 5$**\n$y = 6(5) + 50 = 30 + 50 = 80$.\n\n**Why the wrong answers are tempting:**\n- Choice A ($68$) corresponds to roughly $x = 3$ on the line. College Board puts this here because the actual data point at $x = 3$ is $68$, and they want you to confuse a real data point with the line of best fit prediction. Many students read the dot instead of the line.\n- Choice B ($74$) corresponds to $x = 4$ on the line. This catches students who miscount tick marks and read one grid line to the left of $5$. Under time pressure, off-by-one graph reading errors are extremely common.\n- Choice D ($86$) corresponds to $x = 6$ on the line. Same off-by-one trap in the other direction -- one grid line to the right. The SAT designs these pairs of adjacent-value traps to catch both directions of the mistake.\n\n**Verification:** $y = 6(5) + 50 = 80$, and visually the line passes through $y = 80$ at $x = 5$.\n\n**Test Day Takeaway:** On scatterplot questions, always trace your finger to the LINE of best fit, never to the actual data points -- and count tick marks carefully.',
          skills: ['Data Analysis', 'Scatterplots']
        },
        {
          id: 'pt11-m1-q2',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: '$5x - 7 = 28$\n\nWhat is the value of $x$?',
          choices: [
            { id: 'A', text: '$4.2$' },
            { id: 'B', text: '$5$' },
            { id: 'C', text: '$7$' },
            { id: 'D', text: '$21$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: One-Step / Two-Step Linear Equation** -- Shows up every test, 1-2 per test. Free points if you avoid careless errors.\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** Type $5x - 7 = 28$ into Desmos and read $x = 7$. Or just do it mentally: $5x = 35$, so $x = 7$.\n\n**Step 1: Add $7$ to both sides**\n$5x - 7 = 28$\n$5x = 35$\n\n**Step 2: Divide both sides by $5$**\n$x = 7$\n\n**Why the wrong answers are tempting:**\n- Choice A ($4.2$) comes from computing $(28 - 7) \\div 5 = 21 \\div 5 = 4.2$. The student subtracts $7$ from $28$ instead of adding $7$ to both sides. College Board knows that students mix up "subtract $7$" (what the equation shows) with "add $7$" (what you should do to isolate $x$).\n- Choice B ($5$) comes from dividing $28 \\div 5 \\approx 5.6 \\approx 5$, skipping the step of adding $7$ entirely. This traps students who rush and only see "divide by $5$" without isolating the variable first.\n- Choice D ($21$) comes from $28 - 7 = 21$ but then forgetting to divide by $5$. This is the classic "stopped one step too early" trap -- College Board loves answers that represent incomplete work.\n\n**Verification:** $5(7) - 7 = 35 - 7 = 28$.\n\n**Test Day Takeaway:** On simple equations, always plug your answer back in before moving on -- it takes 5 seconds and catches careless errors that cost easy points.',
          skills: ['Algebra', 'Linear Equations']
        },
        {
          id: 'pt11-m1-q3',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'A phone plan charges a flat fee of \\$15 per month plus \\$0.10 per text message. Which function gives the total monthly cost $C(t)$, in dollars, for sending $t$ text messages?',
          choices: [
            { id: 'A', text: '$C(t) = 15t + 0.10$' },
            { id: 'B', text: '$C(t) = 0.10t + 15$' },
            { id: 'C', text: '$C(t) = 15.10t$' },
            { id: 'D', text: '$C(t) = 15 - 0.10t$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Linear Model from Word Problem** -- Shows up every test, 1-2 per test. The SAT loves "flat fee plus per-unit cost" setups.\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Ask yourself: "What changes and what stays the same?" The flat fee ($15) stays the same no matter how many texts you send -- that is the constant. The $0.10 per text changes with $t$ -- that is the slope. So the equation is $C(t) = 0.10t + 15$. Pick B.\n\n**Step 1: Identify the components**\n- Flat fee: $\\$15$ per month (constant, the $y$-intercept)\n- Per-text cost: $\\$0.10$ per message $\\times$ $t$ messages $= 0.10t$ (the slope term)\n\n**Step 2: Write the total cost**\n$C(t) = 0.10t + 15$\n\n**Why the wrong answers are tempting:**\n- Choice A swaps the rate and the constant, multiplying $15$ by $t$. College Board designs this because the flat fee ($15$) is the bigger number, and students instinctively want to put the bigger number next to the variable. But the flat fee does NOT depend on texts.\n- Choice C combines $15$ and $0.10$ into a single coefficient $15.10$. This traps students who think "just add the two numbers together." It eliminates the fixed-cost structure entirely.\n- Choice D subtracts instead of adding. This would mean more texts = lower cost, which makes no real-world sense. College Board includes sign-error traps because students under pressure sometimes confuse addition and subtraction.\n\n**Verification:** For $t = 10$ texts: $C(10) = 0.10(10) + 15 = 1 + 15 = \\$16$. That makes sense -- flat fee plus 10 dimes.\n\n**Test Day Takeaway:** In "flat fee plus rate" problems, the flat fee is always the constant (added, not multiplied by the variable), and the per-unit rate is always the slope.',
          skills: ['Algebra', 'Linear Equations', 'Word Problems']
        },
        {
          id: 'pt11-m1-q4',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The bar graph above shows the number of books read by each of $20$ students during the summer. How many students read exactly $3$ books?',
          diagram: {
            type: 'barChart',
            params: {
              data: [
                { label: '0', value: 2 },
                { label: '1', value: 3 },
                { label: '2', value: 5 },
                { label: '3', value: 6 },
                { label: '4', value: 3 },
                { label: '5', value: 1 }
              ],
              xAxisLabel: 'Number of books',
              yAxisLabel: 'Number of students',
              yMax: 8
            }
          },
          choices: [
            { id: 'A', text: '$3$' },
            { id: 'B', text: '$5$' },
            { id: 'C', text: '$6$' },
            { id: 'D', text: '$8$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Reading a Bar Graph / Frequency Chart** -- Shows up every test. Pure graph-reading -- no calculation needed.\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** Find "$3$" on the horizontal axis (Number of books). Look at the height of that bar. It reaches $6$ on the vertical axis. The answer is $6$.\n\n**Step 1: Locate the bar for $3$ books**\nOn the horizontal axis, find the bar labeled $3$.\n\n**Step 2: Read the height**\nThe bar reaches $6$ on the vertical axis, meaning $6$ students read exactly $3$ books.\n\n**Why the wrong answers are tempting:**\n- Choice A ($3$) is the number of books, not the number of students. College Board is testing whether you confuse the $x$-axis label with the $y$-axis value. This "axis swap" trap is devastatingly effective because the number $3$ appears right there in the question.\n- Choice B ($5$) is the height of the bar for $2$ books, not $3$ books. Students who read the adjacent bar to the left fall for this. Under time pressure, it is easy to land on the wrong bar.\n- Choice D ($8$) might come from adding bars together ($5 + 3$ or similar). This traps students who overthink a simple reading question and start combining values.\n\n**Verification:** The bar for $3$ books clearly reaches $6$, and all bars sum to $2 + 3 + 5 + 6 + 3 + 1 = 20$ total students, matching the problem statement.\n\n**Test Day Takeaway:** On bar graph questions, slow down for 3 seconds to confirm you are reading the right bar and the right axis. The most common mistake is reading the wrong bar or swapping axes.',
          skills: ['Data Analysis', 'Bar Graphs']
        },
        {
          id: 'pt11-m1-q5',
          type: 'fill-in',
          difficulty: 'easy',
          question: 'A store originally has $400$ items in stock. If $35\\%$ of the items are sold during a sale, how many items were sold?',
          correctAnswer: '140',
          explanation: '**SAT Pattern: Basic Percent Calculation** -- Shows up every test, 1-2 per test.\n\n**The correct answer is $140$.**\n\n**The Fast Way (10 seconds):** $35\\%$ of $400$. Think: $10\\%$ of $400 = 40$, so $30\\% = 120$ and $5\\% = 20$. Total: $120 + 20 = 140$. Or just type $0.35 \\times 400$ into your calculator.\n\n**Step 1: Convert the percentage to a decimal**\n$35\\% = 0.35$\n\n**Step 2: Multiply**\n$0.35 \\times 400 = 140$ items sold.\n\n**Verification:** $\\frac{140}{400} = 0.35 = 35\\%$.\n\n**Test Day Takeaway:** For percent-of problems, just multiply the decimal form by the total. If you want a mental math shortcut, break the percent into 10% chunks.',
          skills: ['Percentages', 'Arithmetic']
        },
        {
          id: 'pt11-m1-q6',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The table above shows the number of students who selected different lunch options on a given day. If a student who selected a hot lunch is chosen at random, what is the probability that the student is in grade $10$?',
          diagram: {
            type: 'table',
            params: {
              headers: ['', 'Hot Lunch', 'Cold Lunch', 'Total'],
              rows: [
                ['Grade 9', '45', '30', '75'],
                ['Grade 10', '35', '40', '75'],
                ['Total', '80', '70', '150']
              ]
            }
          },
          choices: [
            { id: 'A', text: '$\\frac{35}{150}$' },
            { id: 'B', text: '$\\frac{35}{80}$' },
            { id: 'C', text: '$\\frac{35}{75}$' },
            { id: 'D', text: '$\\frac{45}{80}$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Two-Way Table / Conditional Probability** -- Shows up every single test, usually 1-2 questions. The #1 tested skill in Data Analysis.\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** The magic words are "a student who selected a hot lunch." That tells you your denominator is the Hot Lunch column total: $80$. Now find Grade 10 in the Hot Lunch column: $35$. Answer: $\\frac{35}{80}$. Done.\n\n**Step 1: Identify the relevant group**\nThe condition is "selected a hot lunch," so the total is $80$ students (not all $150$).\n\n**Step 2: Count the favorable outcomes**\nOf the $80$ hot lunch students, $35$ are in grade $10$.\n\n**Step 3: Calculate the probability**\n$P(\\text{Grade 10} \\mid \\text{Hot lunch}) = \\frac{35}{80}$\n\n**Why the wrong answers are tempting:**\n- Choice A ($\\frac{35}{150}$) uses the grand total $150$ as the denominator instead of the hot lunch total $80$. This is the most common mistake on two-way table problems -- ignoring the "given that" condition. College Board knows most students default to using the overall total.\n- Choice C ($\\frac{35}{75}$) uses the Grade 10 row total ($75$) as the denominator. The student grabbed the wrong total -- they used the row total for Grade 10 instead of the column total for Hot Lunch. This mixes up which direction to read the table.\n- Choice D ($\\frac{45}{80}$) has the right denominator ($80$) but reads Grade 9 instead of Grade 10 from the Hot Lunch column. College Board puts this here to catch students who read the wrong row.\n\n**Verification:** $\\frac{35}{80} = 0.4375$, meaning about $43.75\\%$ of hot lunch students are in Grade 10. Reasonable.\n\n**Test Day Takeaway:** On two-way table probability, circle the "given that" phrase first -- that phrase tells you which row or column total to use as your denominator. Everything else follows.',
          skills: ['Probability', 'Data Analysis']
        },
        {
          id: 'pt11-m1-q7',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: '$3x + 2y = 19$\n$x - 2y = -3$\n\nWhat is the solution $(x, y)$ to the given system of equations?',
          choices: [
            { id: 'A', text: '$(4, 3.5)$' },
            { id: 'B', text: '$(5, 2)$' },
            { id: 'C', text: '$(3, 5)$' },
            { id: 'D', text: '$(2, 6.5)$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: System of Linear Equations** -- Shows up every test, 1-3 per test.\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** In Desmos, type both equations: $3x + 2y = 19$ and $x - 2y = -3$. Click the intersection point. It reads $(4, 3.5)$. Pick A. Alternatively, notice the $+2y$ and $-2y$ cancel perfectly -- just add the equations.\n\n**Step 1: Add the equations (elimination)**\n$(3x + 2y) + (x - 2y) = 19 + (-3)$\n$4x = 16$\n$x = 4$\n\n**Step 2: Substitute $x = 4$ into the second equation**\n$4 - 2y = -3$\n$-2y = -7$\n$y = 3.5$\n\n**Why the wrong answers are tempting:**\n- Choice B $(5, 2)$: Satisfies the first equation ($3(5) + 2(2) = 19$) but NOT the second ($5 - 2(2) = 1 \\neq -3$). College Board designs all the wrong answers to satisfy the first equation. This exploits students who only check one equation and assume they are done.\n- Choice C $(3, 5)$: Also satisfies only the first equation ($3(3) + 2(5) = 19$, but $3 - 2(5) = -7 \\neq -3$). Same trap.\n- Choice D $(2, 6.5)$: Same pattern ($3(2) + 2(6.5) = 19$, but $2 - 2(6.5) = -11 \\neq -3$). College Board found all integer/half-integer pairs that solve the first equation and made them the wrong answers.\n\n**Verification:** $3(4) + 2(3.5) = 12 + 7 = 19$ and $4 - 2(3.5) = 4 - 7 = -3$. Both equations check out.\n\n**Test Day Takeaway:** When the coefficients of one variable are already opposites (like $+2y$ and $-2y$), add the equations immediately -- do not waste time with substitution. And always verify in BOTH equations.',
          skills: ['Algebra', 'Systems of Equations']
        },
        {
          id: 'pt11-m1-q8',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The graph above shows the estimated number of gallons of water remaining in a tank as a function of the number of hours since the tank began draining. What is the best interpretation of the $y$-intercept in this context?',
          diagram: {
            type: 'linearGraph',
            params: {
              slope: -25,
              yIntercept: 500,
              xRange: [0, 20],
              yRange: [0, 550],
              xTickInterval: 4,
              yTickInterval: 100,
              gridInterval: 4,
              highlightPoints: [[0, 500]]
            }
          },
          choices: [
            { id: 'A', text: 'The tank drains at a rate of $500$ gallons per hour.' },
            { id: 'B', text: 'The tank contained $500$ gallons of water when it began draining.' },
            { id: 'C', text: 'The tank is completely empty after $500$ hours.' },
            { id: 'D', text: 'The tank loses $25$ gallons every $500$ hours.' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Interpret Slope / Intercept in Context** -- Shows up every test, 1-2 per test. College Board tests whether you know slope vs. intercept.\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** The question asks about the $y$-intercept. The $y$-intercept means "$x = 0$," which in context means "when the tank BEGAN draining." The $y$-value at that point is $500$ gallons. So: "The tank contained 500 gallons when it began draining." Pick B.\n\n**Step 1: Read the $y$-intercept**\nFrom the graph, the $y$-intercept is at $(0, 500)$.\n\n**Step 2: Interpret in context**\nAt $x = 0$ hours (when draining began), the tank had $y = 500$ gallons remaining.\n\n**Why the wrong answers are tempting:**\n- Choice A calls $500$ a rate ("gallons per hour"). The rate is the slope ($-25$ gallons/hour), not the intercept. College Board knows students confuse slope and intercept -- this is the single most tested concept swap on the SAT.\n- Choice C says "empty after $500$ hours." This flips $500$ from a $y$-value (gallons) to an $x$-value (hours). Students who do not carefully match numbers to their axis fall for this.\n- Choice D mixes up the numbers $25$ and $500$ in a rate description that does not match either the slope or the intercept. It is designed to look plausible if you are not paying close attention to units.\n\n**Verification:** The equation is $y = -25x + 500$. At $x = 0$: $y = 500$. The tank starts with $500$ gallons.\n\n**Test Day Takeaway:** When asked about the $y$-intercept, always think "what does $x = 0$ mean in context?" When asked about slope, think "what changes per unit of $x$?" Never mix them up.',
          skills: ['Functions', 'Graph Interpretation']
        },
        {
          id: 'pt11-m1-q9',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'The function $g$ is defined by $g(x) = 3x^2 - 5x + 2$. What is the value of $g(-2)$?',
          correctAnswer: '24',
          explanation: '**SAT Pattern: Function Evaluation** -- Shows up every test, 1-2 per test.\n\n**The correct answer is $24$.**\n\n**The Fast Way (15 seconds):** Type $3(-2)^2 - 5(-2) + 2$ into your calculator. You get $24$. Or in Desmos, type $f(x) = 3x^2 - 5x + 2$, then type $f(-2)$ and read the answer.\n\n**Step 1: Substitute $x = -2$**\n$g(-2) = 3(-2)^2 - 5(-2) + 2$\n\n**Step 2: Simplify carefully**\n$(-2)^2 = 4$ (not $-4$ -- the square of a negative is positive)\n$g(-2) = 3(4) - 5(-2) + 2 = 12 + 10 + 2 = 24$\n\n**Verification:** $3(4) = 12$, $-5(-2) = +10$, and $12 + 10 + 2 = 24$.\n\n**Test Day Takeaway:** When plugging a negative number into a function, put parentheses around it everywhere. The most common mistake is computing $-2^2 = -4$ instead of $(-2)^2 = 4$.',
          skills: ['Functions', 'Function Evaluation']
        },
        {
          id: 'pt11-m1-q10',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Two parallel lines are cut by a transversal, as shown in the figure. One of the angles formed measures $132°$. Which of the following could be the measure of another angle formed by the transversal?',
          diagram: {
            type: 'parallelLines',
            params: {
              angles: { x: '132°', y: 'x°' },
              lineLabels: { m: 'l₁', n: 'l₂', t: 't' },
              showParallelMarks: false
            }
          },
          choices: [
            { id: 'A', text: '$42°$' },
            { id: 'B', text: '$52°$' },
            { id: 'C', text: '$58°$' },
            { id: 'D', text: '$132°$' }
          ],
          correctAnswer: 'D',
          explanation: '**SAT Pattern: Parallel Lines and Transversals** -- Shows up 1-2 per test. The key rule is "two angle sizes only."\n\n**Choice D is correct.**\n\n**The Fast Way (10 seconds):** When a transversal cuts parallel lines, only TWO angle measures exist: the given angle and its supplement. Here that means $132°$ and $180° - 132° = 48°$. Scan the choices: only $132°$ (Choice D) matches either value. Done.\n\n**Step 1: Identify the two possible angle measures**\nA transversal crossing two parallel lines creates $8$ angles, but only two distinct measures:\n- $132°$ (corresponding, alternate interior/exterior, and vertical angles)\n- $180° - 132° = 48°$ (co-interior and linear pair angles)\n\n**Step 2: Check the choices**\nOnly $132°$ and $48°$ are valid. Among the choices, only $132°$ (Choice D) appears.\n\n**Why the wrong answers are tempting:**\n- Choice A ($42°$) is close to the supplement $48°$, but off by $6°$. A student who computes $132° - 90° = 42°$ (thinking "complementary" instead of "supplementary") would pick this. College Board knows students confuse complement ($90°$) with supplement ($180°$).\n- Choice B ($52°$) does not correspond to any valid angle relationship. It might come from $132° - 80°$ or some other miscalculation.\n- Choice C ($58°$) might come from computing $90° - 32°$ or another incorrect operation. None of these are $48°$ or $132°$, so they cannot be angles in this figure.\n\n**Verification:** Corresponding angles are equal, so $132°$ appears at both intersections. $180° - 132° = 48°$ for supplementary angles.\n\n**Test Day Takeaway:** Parallel lines + transversal = only two angle sizes. One is the given angle, the other is $180°$ minus the given angle. That is the entire rule.',
          skills: ['Geometry', 'Parallel Lines', 'Angle Relationships']
        },
        {
          id: 'pt11-m1-q11',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'A population of bacteria starts at $200$ and triples every $4$ hours. Which function models the population $P(t)$ after $t$ hours?',
          choices: [
            { id: 'A', text: '$P(t) = 200(3)^{4t}$' },
            { id: 'B', text: '$P(t) = 200(3)^{\\frac{t}{4}}$' },
            { id: 'C', text: '$P(t) = 200(4)^{\\frac{t}{3}}$' },
            { id: 'D', text: '$P(t) = 600(3)^t$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Exponential Growth Model** -- Shows up 1-2 per test. The exponent fraction is the key detail.\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** Ask: "After $4$ hours, should the population be $200 \\times 3 = 600$?" Test each choice at $t = 4$:\n- A: $200(3)^{16}$ = astronomically huge. No.\n- B: $200(3)^1 = 600$. Yes!\n- C: $200(4)^{4/3}$ -- not $600$. No.\n- D: $600(3)^4 = 48{,}600$. No.\nPick B.\n\n**Step 1: Identify the components**\n- Initial population: $200$\n- Growth factor: $3$ (triples)\n- Tripling period: $4$ hours\n\n**Step 2: Write the equation**\nThe general form is $P(t) = P_0 \\cdot r^{t/d}$, where $r$ is the growth factor and $d$ is the period:\n$P(t) = 200(3)^{\\frac{t}{4}}$\n\n**Why the wrong answers are tempting:**\n- Choice A uses $3^{4t}$ instead of $3^{t/4}$. This is the "multiply vs. divide" exponent trap. Students remember that $4$ and $t$ go together in the exponent but put $4t$ instead of $t/4$. This makes the population explode impossibly fast.\n- Choice C swaps the growth factor and the period: base $4$ with denominator $3$ instead of base $3$ with denominator $4$. College Board knows students mix up which number is the base and which goes in the exponent.\n- Choice D pre-multiplies $200 \\times 3 = 600$ for the initial value, which means the population starts at $600$ (wrong) and triples every $1$ hour instead of every $4$ hours.\n\n**Verification:** At $t = 4$: $P(4) = 200(3)^1 = 600$ (tripled). At $t = 8$: $P(8) = 200(3)^2 = 1{,}800$ (tripled again).\n\n**Test Day Takeaway:** For "grows by factor $r$ every $d$ time units," the model is $P_0 \\cdot r^{t/d}$. The period $d$ always goes in the DENOMINATOR of the exponent.',
          skills: ['Exponential Functions', 'Exponential Growth']
        },
        {
          id: 'pt11-m1-q12',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Which of the following is equivalent to $x^2 + 5x - 24$?',
          choices: [
            { id: 'A', text: '$(x + 8)(x - 3)$' },
            { id: 'B', text: '$(x - 8)(x + 3)$' },
            { id: 'C', text: '$(x + 6)(x - 4)$' },
            { id: 'D', text: '$(x + 12)(x - 2)$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Factoring a Quadratic Trinomial** -- Shows up every test, 1-2 per test.\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** You need two numbers that multiply to $-24$ and add to $+5$. Think of factor pairs of $24$: $1 \\times 24$, $2 \\times 12$, $3 \\times 8$, $4 \\times 6$. Which pair has a difference of $5$? That is $8$ and $3$. Since the product is negative and the sum is positive, it is $+8$ and $-3$. Answer: $(x + 8)(x - 3)$.\n\n**Step 1: Find the factor pair**\nWe need two numbers whose product is $-24$ and sum is $5$:\n$8 \\times (-3) = -24$ and $8 + (-3) = 5$.\n\n**Step 2: Write the factored form**\n$x^2 + 5x - 24 = (x + 8)(x - 3)$\n\n**Why the wrong answers are tempting:**\n- Choice B $(x - 8)(x + 3)$ gives $x^2 - 5x - 24$. The middle term is $-5x$ instead of $+5x$. College Board flips the signs to catch students who get the right numbers but assign the signs backwards. If you second-guess yourself, you might pick the wrong sign arrangement.\n- Choice C $(x + 6)(x - 4)$ gives $x^2 + 2x - 24$. The product $6 \\times (-4) = -24$ is correct, but the sum is $2$, not $5$. This traps students who grab the first factor pair of $24$ that "looks right" without checking the sum.\n- Choice D $(x + 12)(x - 2)$ gives $x^2 + 10x - 24$. Again, the product is right ($12 \\times -2 = -24$) but the sum is $10$, not $5$.\n\n**Verification:** $(x + 8)(x - 3) = x^2 - 3x + 8x - 24 = x^2 + 5x - 24$.\n\n**Test Day Takeaway:** When factoring $x^2 + bx + c$, list factor pairs of $|c|$ and find the pair whose sum (or difference, depending on the sign of $c$) equals $b$. Always FOIL your answer to verify.',
          skills: ['Algebra', 'Factoring', 'Polynomials']
        },
        {
          id: 'pt11-m1-q13',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'The data set below shows the ages (in years) of $7$ members of a team.\n\n$22, 25, 27, 28, 30, 31, 39$\n\nWhat is the median age, in years, of the team members?',
          correctAnswer: '28',
          explanation: '**SAT Pattern: Finding the Median** -- Shows up 1-2 per test.\n\n**The correct answer is $28$.**\n\n**The Fast Way (10 seconds):** The data is already sorted. There are $7$ values, so the median is the middle one -- the 4th value. Count: $22, 25, 27, \\boxed{28}, 30, 31, 39$. It is $28$.\n\n**Step 1: Confirm the data is ordered**\n$22, 25, 27, 28, 30, 31, 39$ -- already in ascending order.\n\n**Step 2: Find the median**\nWith $7$ values, the median is the $\\frac{7+1}{2} = 4$th value.\nCounting: $22, 25, 27, \\boxed{28}, 30, 31, 39$\n\nThe median age is $28$ years.\n\n**Verification:** There are $3$ values below $28$ and $3$ values above $28$, confirming it is the middle value.\n\n**Test Day Takeaway:** For an odd number of data values, the median is simply the middle value. For $n$ values, it is the $\\frac{n+1}{2}$th value. For an even number, average the two middle values.',
          skills: ['Statistics', 'Median']
        },
        {
          id: 'pt11-m1-q14',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'In triangle $DEF$, the measure of angle $D$ is $52°$ and the measure of angle $E$ is $73°$. What is the measure, in degrees, of angle $F$?',
          choices: [
            { id: 'A', text: '$35°$' },
            { id: 'B', text: '$45°$' },
            { id: 'C', text: '$55°$' },
            { id: 'D', text: '$65°$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Triangle Angle Sum** -- Shows up 1-2 per test. The easiest geometry points on the SAT.\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** Angles in a triangle add to $180°$. So $\\angle F = 180° - 52° - 73° = 55°$. Done.\n\n**Step 1: Apply the angle sum**\n$\\angle D + \\angle E + \\angle F = 180°$\n$52° + 73° + \\angle F = 180°$\n\n**Step 2: Solve**\n$\\angle F = 180° - 52° - 73° = 55°$\n\n**Why the wrong answers are tempting:**\n- Choice A ($35°$) comes from a subtraction error, perhaps computing $180 - 52 - 73$ incorrectly as $180 - 52 = 128$, then $128 - 73 = 55$... wait, that is correct. But a student might get $180 - 72 - 73 = 35$ by misreading $52°$ as $72°$. College Board loves answers that result from misreading one digit.\n- Choice B ($45°$) could come from subtracting from $170°$ instead of $180°$: $170 - 52 - 73 = 45$. This traps students who misremember the triangle angle sum.\n- Choice D ($65°$) could come from $180 - 73 - 42 = 65$, misreading $52°$ as $42°$. Another digit-swap trap.\n\n**Verification:** $52° + 73° + 55° = 180°$.\n\n**Test Day Takeaway:** Triangle angles always sum to $180°$. Do the subtraction carefully and verify by adding all three angles back together.',
          skills: ['Geometry', 'Triangles']
        },
        {
          id: 'pt11-m1-q15',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'What are the solutions to the equation $x^2 - 9x + 20 = 0$?',
          choices: [
            { id: 'A', text: '$x = 2$ and $x = 10$' },
            { id: 'B', text: '$x = -4$ and $x = -5$' },
            { id: 'C', text: '$x = 4$ and $x = 5$' },
            { id: 'D', text: '$x = -4$ and $x = 5$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Solving a Quadratic by Factoring** -- Shows up every test, 1-2 per test.\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Type $x^2 - 9x + 20 = 0$ into Desmos. The graph crosses the $x$-axis at $x = 4$ and $x = 5$. Pick C. Alternatively, back-solve: try each answer choice and see which pair makes both factors zero.\n\n**Step 1: Factor**\nFind two numbers that multiply to $20$ and add to $-9$: $(-4)(-5) = 20$ and $-4 + (-5) = -9$.\n$x^2 - 9x + 20 = (x - 4)(x - 5) = 0$\n\n**Step 2: Solve**\n$x - 4 = 0 \\Rightarrow x = 4$\n$x - 5 = 0 \\Rightarrow x = 5$\n\n**Why the wrong answers are tempting:**\n- Choice A ($x = 2, x = 10$): $2 \\times 10 = 20$ (correct product) but $2 + 10 = 12 \\neq 9$. College Board picks factor pairs that have the right product but wrong sum. Students who do not check the sum get tricked.\n- Choice B ($x = -4, x = -5$): The numbers $-4$ and $-5$ have sum $-9$ (correct!), but if the roots are $-4$ and $-5$, the factored form is $(x + 4)(x + 5) = x^2 + 9x + 20$. The middle term becomes $+9x$ instead of $-9x$. This traps students who confuse "the numbers that go in the factors" with "the actual roots."\n- Choice D ($x = -4, x = 5$): The product is $(-4)(5) = -20 \\neq 20$. The constant term must be $+20$, which requires both roots to have the same sign.\n\n**Verification:** $(4)^2 - 9(4) + 20 = 16 - 36 + 20 = 0$ and $(5)^2 - 9(5) + 20 = 25 - 45 + 20 = 0$.\n\n**Test Day Takeaway:** When factoring $x^2 + bx + c = 0$, the roots have product $c$ and sum $-b$ (note the negative). If you get confused by signs, just plug your answers back into the original equation.',
          skills: ['Algebra', 'Quadratic Equations']
        },
        {
          id: 'pt11-m1-q16',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: '$\\frac{3}{x - 2} + \\frac{5}{x + 1} = \\frac{17}{(x - 2)(x + 1)}$\n\nWhat is the solution to the given equation?',
          choices: [
            { id: 'A', text: '$x = -1$' },
            { id: 'B', text: '$x = 0$' },
            { id: 'C', text: '$x = 2$' },
            { id: 'D', text: '$x = 3$' }
          ],
          correctAnswer: 'D',
          explanation: '**SAT Pattern: Rational Equation with Excluded Values** -- Shows up 1 per test. The trap is always an excluded value.\n\n**Choice D is correct.**\n\n**The Fast Way (20 seconds):** Before doing any algebra, notice that $x = 2$ and $x = -1$ make denominators zero, so they are automatically excluded. That eliminates Choices A and C right away. Now test $x = 3$: $\\frac{3}{1} + \\frac{5}{4} = 3 + 1.25 = 4.25$, and $\\frac{17}{(1)(4)} = 4.25$. They match. Pick D.\n\n**Step 1: Multiply both sides by $(x - 2)(x + 1)$**\n$3(x + 1) + 5(x - 2) = 17$\n\n**Step 2: Expand and simplify**\n$3x + 3 + 5x - 10 = 17$\n$8x - 7 = 17$\n$8x = 24$\n$x = 3$\n\n**Step 3: Check that $x = 3$ is not excluded**\n$x - 2 = 1 \\neq 0$ and $x + 1 = 4 \\neq 0$. Valid.\n\n**Why the wrong answers are tempting:**\n- Choice A ($x = -1$) makes the denominator $(x + 1) = 0$, so it is undefined. College Board puts excluded values as answer choices because students solve the numerator equation correctly but forget to check whether their answer makes a denominator zero. This is a psychology trap: $x = -1$ "feels" like it could be a root.\n- Choice B ($x = 0$) does not make any denominator zero, but it does not satisfy the equation either: $\\frac{3}{-2} + \\frac{5}{1} = -1.5 + 5 = 3.5 \\neq \\frac{17}{-2} = -8.5$.\n- Choice C ($x = 2$) makes the denominator $(x - 2) = 0$, so it is undefined. Same excluded-value trap as Choice A. Having TWO excluded values as answer choices is a classic College Board move.\n\n**Verification:** $\\frac{3}{3-2} + \\frac{5}{3+1} = \\frac{3}{1} + \\frac{5}{4} = 3 + 1.25 = 4.25 = \\frac{17}{4}$.\n\n**Test Day Takeaway:** On rational equations, FIRST identify excluded values (where denominators = 0) and eliminate any answer choices that match. Then solve.',
          skills: ['Algebra', 'Rational Equations']
        },
        {
          id: 'pt11-m1-q17',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'A bakery sells cupcakes for \\$3 each and cookies for \\$2 each. On a given day, the bakery sold a total of $85$ items and collected \\$210. How many cupcakes did the bakery sell?',
          correctAnswer: '40',
          explanation: '**SAT Pattern: System of Equations Word Problem** -- Shows up 1-2 per test. "Total items + total cost" is the classic two-equation setup.\n\n**The correct answer is $40$.**\n\n**The Fast Way (30 seconds):** In Desmos, type $c + k = 85$ and $3c + 2k = 210$. Find the intersection: $c = 40$, $k = 45$. The answer is $40$.\n\n**Step 1: Define variables**\nLet $c$ = number of cupcakes and $k$ = number of cookies.\n\n**Step 2: Write the system**\n$c + k = 85$ (total items)\n$3c + 2k = 210$ (total revenue)\n\n**Step 3: Solve by substitution**\nFrom the first equation: $k = 85 - c$.\nSubstitute into the second:\n$3c + 2(85 - c) = 210$\n$3c + 170 - 2c = 210$\n$c = 40$\n\n**Verification:** $c = 40$, $k = 45$. Revenue: $3(40) + 2(45) = 120 + 90 = 210$. Items: $40 + 45 = 85$. Both check out.\n\n**Test Day Takeaway:** When a word problem gives you two pieces of information about two unknowns (total count and total value), set up two equations and solve. Always verify both conditions at the end.',
          skills: ['Algebra', 'Systems of Equations', 'Word Problems']
        },
        {
          id: 'pt11-m1-q18',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'The first equation in a system of linear equations is $5x - 3y = 7$. The system has no solution. Which of the following could be the second equation in the system?',
          choices: [
            { id: 'A', text: '$10x - 6y = 20$' },
            { id: 'B', text: '$10x - 6y = 14$' },
            { id: 'C', text: '$5x + 3y = 7$' },
            { id: 'D', text: '$3x - 5y = 7$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: No Solution / Infinite Solutions in Systems** -- Shows up 1-2 per test. You MUST know what "no solution" means algebraically.\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** "No solution" means parallel lines: same slope, different intercept. Multiply the first equation by $2$: $10x - 6y = 14$. Any equation with $10x - 6y$ on the left but a number OTHER THAN $14$ on the right will be parallel. Choice A has $10x - 6y = 20$. That is parallel. Pick A.\n\n**Step 1: Find the slope of the first equation**\n$5x - 3y = 7 \\implies y = \\frac{5}{3}x - \\frac{7}{3}$ (slope $= \\frac{5}{3}$)\n\n**Step 2: Check each choice**\n- Choice A: $10x - 6y = 20 \\implies y = \\frac{5}{3}x - \\frac{10}{3}$. Same slope, different intercept. Parallel -- no solution.\n- Choice B: $10x - 6y = 14 \\implies y = \\frac{5}{3}x - \\frac{7}{3}$. Same slope AND same intercept -- this is the same line (infinitely many solutions).\n- Choice C: $5x + 3y = 7 \\implies y = -\\frac{5}{3}x + \\frac{7}{3}$. Different slope -- one solution.\n- Choice D: $3x - 5y = 7 \\implies y = \\frac{3}{5}x - \\frac{7}{5}$. Different slope -- one solution.\n\n**Why the wrong answers are tempting:**\n- Choice B is the sneakiest trap. It is the first equation multiplied by $2$, so it is the SAME line, giving infinitely many solutions. Students who think "same coefficients = no solution" without checking the constant fall for this. College Board tests the distinction between "no solution" (parallel, different intercept) and "infinitely many" (same line).\n- Choice C has the same coefficients $5$ and $3$ but with a $+$ instead of $-$, giving a completely different slope. Students who only look at the numbers without checking signs get fooled.\n- Choice D swaps the coefficients ($3x - 5y$ instead of $5x - 3y$), giving a different slope. Students who think swapped coefficients = same slope fall for this.\n\n**Verification:** $10x - 6y = 20$ has slope $\\frac{5}{3}$ and intercept $-\\frac{10}{3} \\neq -\\frac{7}{3}$. Parallel lines, no intersection.\n\n**Test Day Takeaway:** No solution = same slope, different y-intercept. Infinitely many solutions = same slope, same y-intercept (identical line). One solution = different slopes.',
          skills: ['Algebra', 'Systems of Equations']
        },
        {
          id: 'pt11-m1-q19',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'A circle has a diameter of $16$ centimeters. A sector of the circle has a central angle of $90°$. The area of the sector can be written as $b\\pi$ square centimeters. What is the value of $b$?',
          correctAnswer: '16',
          alternateAnswers: ['16.0'],
          explanation: '**SAT Pattern: Sector Area** -- Shows up 1 per test.\n\n**The correct answer is $16$.**\n\n**The Fast Way (15 seconds):** Diameter $= 16$, so radius $= 8$. A $90°$ sector is $\\frac{1}{4}$ of the circle. Full circle area $= \\pi(8)^2 = 64\\pi$. Quarter of that: $\\frac{64\\pi}{4} = 16\\pi$. So $b = 16$.\n\n**Step 1: Find the radius**\nDiameter $= 16$, so radius $= 8$ cm.\n\n**Step 2: Apply the sector area formula**\nSector area $= \\frac{\\theta}{360°} \\times \\pi r^2 = \\frac{90°}{360°} \\times \\pi (8)^2 = \\frac{1}{4} \\times 64\\pi = 16\\pi$\n\nSo $b = 16$.\n\n**Verification:** Full circle area $= 64\\pi$. A quarter of $64\\pi$ is $16\\pi$.\n\n**Test Day Takeaway:** A $90°$ sector is exactly $\\frac{1}{4}$ of the circle. Always convert diameter to radius first -- using the diameter in the area formula is the most common mistake on circle problems.',
          skills: ['Geometry', 'Circles', 'Area']
        },
        {
          id: 'pt11-m1-q20',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'A catering company charges \\$8 per adult meal and \\$5 per child meal. An event requires at least $10$ adult meals and at least $15$ child meals, and the total food budget is \\$200. What is the maximum total number of meals that can be ordered within the budget?',
          choices: [
            { id: 'A', text: '$25$' },
            { id: 'B', text: '$30$' },
            { id: 'C', text: '$34$' },
            { id: 'D', text: '$40$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Linear Inequality / Budget Optimization** -- Shows up 1 per test. Think "maximize quantity under a budget constraint."\n\n**Choice C is correct.**\n\n**The Fast Way (25 seconds):** To maximize the total number of meals, buy the MINIMUM of the expensive item (adult meals) and spend the rest on the cheap item (child meals). Use $10$ adult meals: $8(10) = \\$80$. Remaining budget: $200 - 80 = \\$120$. Child meals: $120 \\div 5 = 24$. Total: $10 + 24 = 34$.\n\n**Step 1: Define variables and constraints**\n$a \\geq 10$, $c \\geq 15$, $8a + 5c \\leq 200$. Maximize $a + c$.\n\n**Step 2: Optimize**\nSince child meals are cheaper ($\\$5$ vs $\\$8$), minimize adult meals ($a = 10$) and maximize child meals:\n$$8(10) + 5c \\leq 200 \\implies 80 + 5c \\leq 200 \\implies 5c \\leq 120 \\implies c \\leq 24$$\nMaximum total $= 10 + 24 = 34$.\n\n**Why the wrong answers are tempting:**\n- Choice A ($25$) is just $10 + 15$, the minimums for each type. Students who stop at the minimum requirements without using the remaining budget pick this. College Board wants to see if you recognize there is budget left over.\n- Choice B ($30$) comes from not fully maximizing child meals. You might get this if you allocate the budget unevenly or make an arithmetic error in the division.\n- Choice D ($40$) would require $8(10) + 5(30) = 80 + 150 = \\$230 > \\$200$. This exceeds the budget. College Board includes answers that "feel right" but violate the constraint.\n\n**Verification:** $10$ adult + $24$ child meals: $8(10) + 5(24) = 80 + 120 = \\$200$. Exactly on budget. $10 \\geq 10$ and $24 \\geq 15$.\n\n**Test Day Takeaway:** In budget optimization, always minimize the expensive item and maximize the cheap item. Then verify that all constraints are satisfied.',
          skills: ['Algebra', 'Linear Inequalities']
        },
        {
          id: 'pt11-m1-q21',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The table above gives the values of a function $f$ at selected values of $x$. What is the average rate of change of $f$ over the interval $2 \\leq x \\leq 11$?',
          diagram: {
            type: 'table',
            params: {
              headers: ['x', 'f(x)'],
              rows: [
                ['2', '10'],
                ['5', '22'],
                ['8', '34'],
                ['11', '46']
              ]
            }
          },
          correctAnswer: '4',
          explanation: '**SAT Pattern: Average Rate of Change** -- Shows up 1-2 per test.\n\n**The correct answer is $4$.**\n\n**The Fast Way (10 seconds):** Average rate of change = slope between endpoints. Use the first and last rows of the table: $\\frac{46 - 10}{11 - 2} = \\frac{36}{9} = 4$. Ignore the middle rows entirely.\n\n**Step 1: Identify the endpoint values**\nAt $x = 2$: $f(2) = 10$\nAt $x = 11$: $f(11) = 46$\n\n**Step 2: Apply the formula**\n$$\\text{Average rate of change} = \\frac{f(11) - f(2)}{11 - 2} = \\frac{46 - 10}{9} = \\frac{36}{9} = 4$$\n\n**Verification:** The function increases by $12$ for each increase of $3$ in $x$ (from $x = 2$ to $x = 5$: $22 - 10 = 12$ over $3$ units). Rate: $\\frac{12}{3} = 4$. Consistent across all intervals.\n\n**Test Day Takeaway:** Average rate of change only uses the ENDPOINTS of the interval. It equals $\\frac{f(b) - f(a)}{b - a}$ -- the same formula as slope. Do not get distracted by intermediate values in the table.',
          skills: ['Functions', 'Rate of Change']
        },
        {
          id: 'pt11-m1-q22',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: '$x^2 + y^2 - 6x + 10y + 18 = 0$\n\nThe equation above defines a circle in the $xy$-plane. What are the center and radius of this circle?',
          choices: [
            { id: 'A', text: 'Center: $(3, -5)$\nRadius: $4$' },
            { id: 'B', text: 'Center: $(-3, 5)$\nRadius: $4$' },
            { id: 'C', text: 'Center: $(3, -5)$\nRadius: $16$' },
            { id: 'D', text: 'Center: $(-3, 5)$\nRadius: $16$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Circle Equation (Completing the Square)** -- Shows up 1 per test. One of the hardest algebra questions, but very formulaic.\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** In Desmos, type $x^2 + y^2 - 6x + 10y + 18 = 0$. Desmos graphs the circle, and you can identify the center at $(3, -5)$ and measure the radius as $4$. Pick A.\n\n**Step 1: Group the $x$ and $y$ terms**\n$(x^2 - 6x) + (y^2 + 10y) = -18$\n\n**Step 2: Complete the square**\nFor $x$: half of $-6$ is $-3$, squared is $9$. Add $9$ to both sides.\nFor $y$: half of $10$ is $5$, squared is $25$. Add $25$ to both sides.\n$(x - 3)^2 + (y + 5)^2 = -18 + 9 + 25 = 16$\n\n**Step 3: Read the center and radius**\nCenter: $(3, -5)$, Radius: $\\sqrt{16} = 4$.\n\n**Why the wrong answers are tempting:**\n- Choice B has the center signs flipped to $(-3, 5)$. This is the most common mistake on completing-the-square problems. In $(x - 3)^2$, the center $x$-coordinate is $+3$, not $-3$. College Board knows that students see the "$-6x$" and reflexively write $-3$ for the center, forgetting that $(x - h)^2$ means $h$ is positive when the sign in the equation is negative.\n- Choice C has the correct center but lists the radius as $16$ instead of $4$. This comes from forgetting to take the square root: $r^2 = 16$, so $r = 4$, not $16$. College Board regularly puts $r^2$ as an answer choice to catch this.\n- Choice D combines both errors -- wrong center signs AND forgetting the square root.\n\n**Verification:** Plug the center $(3, -5)$ into the original: $(3)^2 + (-5)^2 - 6(3) + 10(-5) + 18 = 9 + 25 - 18 - 50 + 18 = -16$. Wait -- that equals $-16$, not $0$. But that is because the center is NOT on the circle; the center is $r = 4$ units away from every point on the circle. Check: $(x - 3)^2 + (y + 5)^2 = 16$ is correct.\n\n**Test Day Takeaway:** When completing the square for a circle, remember two things: (1) the signs of the center are OPPOSITE to what appears in the squared terms, and (2) the radius is the SQUARE ROOT of the number on the right side.',
          skills: ['Geometry', 'Circle Equations']
        }
      ]
    },
    {
      id: 'module-2',
      title: 'Module 2',
      timeLimit: 35,
      questions: [
        {
          id: 'pt11-m2-q1',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'A store sells $120$ shirts. If $75\\%$ of the shirts are blue, how many blue shirts does the store sell?',
          choices: [
            { id: 'A', text: '$45$' },
            { id: 'B', text: '$75$' },
            { id: 'C', text: '$90$' },
            { id: 'D', text: '$100$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Basic Percent Calculation** -- Shows up every test, 1-2 per test.\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** $75\\%$ is $\\frac{3}{4}$. So $\\frac{3}{4} \\times 120 = 90$. Done. No calculator needed.\n\n**Step 1: Convert the percentage**\n$75\\% = 0.75 = \\frac{3}{4}$\n\n**Step 2: Multiply**\n$0.75 \\times 120 = 90$ blue shirts.\n\n**Why the wrong answers are tempting:**\n- Choice A ($45$) comes from computing $120 - 75 = 45$. The student subtracted the percent value from the total instead of multiplying. College Board knows that under pressure, students sometimes do the first arithmetic operation that comes to mind.\n- Choice B ($75$) uses the percentage number directly as the count. "75% means 75 shirts," thinks the student. This traps anyone who confuses percent with quantity -- a surprisingly common error.\n- Choice D ($100$) might come from a rounding or estimation error, or from thinking $75\\%$ of $120$ is "about $100$."\n\n**Verification:** $\\frac{90}{120} = 0.75 = 75\\%$.\n\n**Test Day Takeaway:** $75\\%$ = $\\frac{3}{4}$. Know your common percent-to-fraction conversions cold: $25\\% = \\frac{1}{4}$, $50\\% = \\frac{1}{2}$, $75\\% = \\frac{3}{4}$, $20\\% = \\frac{1}{5}$.',
          skills: ['Percentages', 'Arithmetic']
        },
        {
          id: 'pt11-m2-q2',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The function $h$ is defined by $h(x) = 4x - 9$. What is the value of $h(3)$?',
          choices: [
            { id: 'A', text: '$-5$' },
            { id: 'B', text: '$3$' },
            { id: 'C', text: '$7$' },
            { id: 'D', text: '$12$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Function Evaluation (Linear)** -- Shows up every test. Free points.\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** $h(3) = 4(3) - 9 = 12 - 9 = 3$. Done.\n\n**Step 1: Substitute $x = 3$**\n$h(3) = 4(3) - 9 = 12 - 9 = 3$\n\n**Why the wrong answers are tempting:**\n- Choice A ($-5$) comes from computing $4 - 9 = -5$, forgetting to multiply $4 \\times 3$ first. The student used the coefficient $4$ without the input value. College Board puts this here because students sometimes see "$4x$" and just use "$4$" instead of "$4 \\times 3$."\n- Choice C ($7$) might come from $4(3) - 5 = 7$, misremembering the constant as $5$ instead of $9$. Or from another arithmetic slip.\n- Choice D ($12$) is just $4 \\times 3$, forgetting to subtract $9$. This is the classic "stopped one step early" trap.\n\n**Verification:** $h(3) = 4(3) - 9 = 12 - 9 = 3$.\n\n**Test Day Takeaway:** Function evaluation means "plug in and simplify." On easy questions like this, the biggest risk is a careless error, so double-check your arithmetic before moving on.',
          skills: ['Functions', 'Function Evaluation']
        },
        {
          id: 'pt11-m2-q3',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'A car rental company charges a flat fee of \\$50 plus \\$0.25 per mile driven. If a customer drove $m$ miles, which equation gives the total cost $C$ in dollars?',
          choices: [
            { id: 'A', text: '$C = 50m + 0.25$' },
            { id: 'B', text: '$C = 0.25m + 50$' },
            { id: 'C', text: '$C = 50.25m$' },
            { id: 'D', text: '$C = 50 - 0.25m$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Linear Model from Word Problem** -- Shows up every test. Same structure as the phone plan question.\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Flat fee = constant = $50$. Per-mile rate = slope = $0.25$. Equation: $C = 0.25m + 50$. The rate multiplies the variable, the flat fee gets added.\n\n**Step 1: Identify the components**\n- Flat fee: $\\$50$ (constant, does not change with miles)\n- Per-mile cost: $\\$0.25 \\times m$ miles $= 0.25m$ (variable term)\n\n**Step 2: Write the total**\n$C = 0.25m + 50$\n\n**Why the wrong answers are tempting:**\n- Choice A swaps the rate and constant, multiplying $50$ by $m$. College Board puts the bigger number next to the variable because students instinctively associate "the bigger number" with "the important coefficient." But $50$ is fixed, not per-mile.\n- Choice C combines everything into one term: $50.25m$. This eliminates the flat fee as a separate component. A cost model with no constant means "0 miles = $0 cost," but the flat fee means you pay $50 even for zero miles.\n- Choice D subtracts the mileage cost. This would mean driving more costs LESS, which defies common sense. College Board includes sign-error answers because students do make sign mistakes under pressure.\n\n**Verification:** For $m = 100$ miles: $C = 0.25(100) + 50 = 25 + 50 = \\$75$. For $m = 0$ miles: $C = 50$. Both make sense.\n\n**Test Day Takeaway:** Flat fee = constant (the $b$ in $y = mx + b$). Per-unit rate = slope (the $m$). The variable always multiplies the rate, never the flat fee.',
          skills: ['Algebra', 'Linear Equations', 'Word Problems']
        },
        {
          id: 'pt11-m2-q4',
          type: 'fill-in',
          difficulty: 'easy',
          question: 'A recipe calls for $3$ cups of flour for every $2$ cups of sugar. If a baker uses $12$ cups of flour, how many cups of sugar are needed?',
          correctAnswer: '8',
          explanation: '**SAT Pattern: Basic Proportion** -- Shows up 1-2 per test.\n\n**The correct answer is $8$.**\n\n**The Fast Way (10 seconds):** $3$ cups flour goes with $2$ cups sugar. $12$ cups flour is $4$ times as much flour ($12 \\div 3 = 4$). So you need $4$ times as much sugar: $2 \\times 4 = 8$.\n\n**Step 1: Write the proportion**\n$\\frac{3 \\text{ flour}}{2 \\text{ sugar}} = \\frac{12 \\text{ flour}}{s \\text{ sugar}}$\n\n**Step 2: Cross-multiply and solve**\n$3s = 24$\n$s = 8$\n\n**Verification:** $\\frac{3}{2} = \\frac{12}{8} = 1.5$. The ratios match.\n\n**Test Day Takeaway:** For proportions, find the scale factor first (how many times bigger is the known quantity?), then multiply the other quantity by the same factor. It is faster than cross-multiplying.',
          skills: ['Ratios', 'Proportions']
        },
        {
          id: 'pt11-m2-q5',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The function $f(x) = -(x - 2)^2 + 5$ is defined for all real numbers. What is the maximum value of $f(x)$?',
          choices: [
            { id: 'A', text: '$-2$' },
            { id: 'B', text: '$2$' },
            { id: 'C', text: '$5$' },
            { id: 'D', text: '$7$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Vertex Form -- Max/Min Value** -- Shows up 1-2 per test. If you know vertex form, this is a 5-second question.\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** The function is in vertex form $f(x) = a(x - h)^2 + k$. The vertex is $(2, 5)$. Since $a = -1 < 0$, the parabola opens downward, so $k = 5$ is the maximum value.\n\n**Step 1: Identify the vertex**\n$f(x) = -(x - 2)^2 + 5$ has vertex $(h, k) = (2, 5)$.\n\n**Step 2: Determine max vs. min**\nSince $a = -1 < 0$, the parabola opens downward. The vertex is the highest point, so the maximum value is $k = 5$.\n\n**Why the wrong answers are tempting:**\n- Choice A ($-2$) is the negation of the $x$-coordinate. Students might see the negative sign out front and think the answer is $-2$, confusing the leading coefficient with the vertex location.\n- Choice B ($2$) is the $x$-coordinate of the vertex, not the maximum $y$-value. The question asks for the maximum VALUE of $f(x)$, which is the $y$-coordinate. College Board loves this swap -- students who do not read carefully give $h$ instead of $k$.\n- Choice D ($7$) comes from adding $2 + 5 = 7$. There is no mathematical reason to add the coordinates of the vertex, but it "feels" like a reasonable operation, which is why College Board puts it there.\n\n**Verification:** $f(2) = -(2-2)^2 + 5 = -0 + 5 = 5$. Any other input gives less: e.g., $f(0) = -(0-2)^2 + 5 = -4 + 5 = 1 < 5$.\n\n**Test Day Takeaway:** In vertex form $a(x - h)^2 + k$: the max/min value is always $k$, and it is a max when $a < 0$, a min when $a > 0$. The question asks for the VALUE, which is $k$, not $h$.',
          skills: ['Quadratic Functions', 'Graph Analysis']
        },
        {
          id: 'pt11-m2-q6',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'If $12x = 8$, what is the value of $36x$?',
          correctAnswer: '24',
          explanation: '**SAT Pattern: Algebraic Manipulation (Scaling)** -- Shows up 1-2 per test. The SAT wants you to find a shortcut, not solve for $x$.\n\n**The correct answer is $24$.**\n\n**The Fast Way (5 seconds):** Notice that $36x = 3 \\times 12x$. Since $12x = 8$, just multiply: $36x = 3 \\times 8 = 24$. No need to solve for $x$.\n\n**Step 1: Relate the expressions**\n$36x = 3 \\times 12x$\n\n**Step 2: Substitute**\n$36x = 3 \\times 8 = 24$\n\n**Verification:** From $12x = 8$, $x = \\frac{2}{3}$. Then $36 \\times \\frac{2}{3} = 24$.\n\n**Test Day Takeaway:** When the SAT gives you one expression and asks for a multiple of it, do NOT solve for the variable. Just find the multiplier. Ask: "How do I get from what I know to what I need?"',
          skills: ['Algebra', 'Algebraic Manipulation']
        },
        {
          id: 'pt11-m2-q7',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Which expression is equivalent to $(7x^2 + 3x - 4) + (2x^2 - 5x + 8)$?',
          choices: [
            { id: 'A', text: '$9x^2 - 2x + 4$' },
            { id: 'B', text: '$9x^4 - 2x^2 + 4$' },
            { id: 'C', text: '$9x^2 + 8x + 4$' },
            { id: 'D', text: '$5x^2 + 8x - 12$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Adding Polynomials / Combining Like Terms** -- Shows up 1-2 per test.\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** Just combine like terms column by column:\n- $x^2$: $7 + 2 = 9$\n- $x$: $3 + (-5) = -2$\n- constant: $-4 + 8 = 4$\nAnswer: $9x^2 - 2x + 4$.\n\n**Step 1: Group like terms**\n$(7x^2 + 2x^2) + (3x + (-5x)) + (-4 + 8)$\n\n**Step 2: Combine**\n$9x^2 + (-2x) + 4 = 9x^2 - 2x + 4$\n\n**Why the wrong answers are tempting:**\n- Choice B has $x^4$ instead of $x^2$. This comes from adding the exponents ($x^2 + x^2 = x^4$) instead of adding the coefficients ($7x^2 + 2x^2 = 9x^2$). College Board preys on the confusion between "adding like terms" and "multiplying powers."\n- Choice C gets the $x$ term wrong: $3x + 5x = 8x$ instead of $3x + (-5x) = -2x$. The student dropped the negative sign on $-5x$. Sign errors on like terms are one of the most common algebra mistakes.\n- Choice D subtracts instead of adding: $7 - 2 = 5$ and $-4 - 8 = -12$. The student performed subtraction on the polynomials even though the problem says addition.\n\n**Verification:** At $x = 1$: $(7 + 3 - 4) + (2 - 5 + 8) = 6 + 5 = 11$, and $9 - 2 + 4 = 11$.\n\n**Test Day Takeaway:** When adding polynomials, add COEFFICIENTS of like terms. Never add exponents. And watch for sign errors on negative terms.',
          skills: ['Algebra', 'Polynomial Addition']
        },
        {
          id: 'pt11-m2-q8',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'A bag contains $5$ red marbles, $3$ blue marbles, and $2$ green marbles. If one marble is selected at random, what is the probability that it is NOT red?',
          choices: [
            { id: 'A', text: '$\\frac{1}{10}$' },
            { id: 'B', text: '$\\frac{1}{2}$' },
            { id: 'C', text: '$\\frac{3}{5}$' },
            { id: 'D', text: '$\\frac{4}{5}$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Basic Probability (Complement)** -- Shows up every test.\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Total marbles: $5 + 3 + 2 = 10$. Non-red: $3 + 2 = 5$. Probability: $\\frac{5}{10} = \\frac{1}{2}$. Or use the complement: $P(\\text{not red}) = 1 - \\frac{5}{10} = \\frac{1}{2}$.\n\n**Step 1: Find the total**\n$5 + 3 + 2 = 10$ marbles.\n\n**Step 2: Count non-red marbles**\n$3 \\text{ blue} + 2 \\text{ green} = 5$ non-red.\n\n**Step 3: Calculate**\n$P(\\text{not red}) = \\frac{5}{10} = \\frac{1}{2}$\n\n**Why the wrong answers are tempting:**\n- Choice A ($\\frac{1}{10}$) is the probability of picking one SPECIFIC marble, not all non-red marbles. A student might think "1 out of 10" without actually counting favorable outcomes.\n- Choice C ($\\frac{3}{5}$) might come from counting only blue marbles ($3$) as "not red" and ignoring the green ones, then simplifying $\\frac{3}{10}$... no, $\\frac{3}{5}$ does not come from that. More likely from $\\frac{6}{10}$ through a miscount.\n- Choice D ($\\frac{4}{5}$) might come from thinking there are $8$ non-red marbles (perhaps miscounting green as $4$ instead of $2$). This traps students who rush the addition.\n\n**Verification:** $P(\\text{not red}) = 1 - P(\\text{red}) = 1 - \\frac{5}{10} = 1 - \\frac{1}{2} = \\frac{1}{2}$.\n\n**Test Day Takeaway:** For "NOT" probability, either count the non-target outcomes directly or use $P(\\text{not A}) = 1 - P(A)$. Both should give the same answer -- use whichever is faster.',
          skills: ['Probability', 'Data Analysis']
        },
        {
          id: 'pt11-m2-q9',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'The function $p$ is defined by $p(x) = 2(3)^x$. What is the value of $p(4)$?',
          correctAnswer: '162',
          explanation: '**SAT Pattern: Evaluating an Exponential Function** -- Shows up 1 per test.\n\n**The correct answer is $162$.**\n\n**The Fast Way (10 seconds):** Type $2 \\times 3^4$ into your calculator: $2 \\times 81 = 162$. Or in Desmos, type $p(x) = 2(3)^x$ then evaluate $p(4)$.\n\n**Step 1: Substitute $x = 4$**\n$p(4) = 2(3)^4$\n\n**Step 2: Calculate**\n$3^4 = 81$\n$p(4) = 2 \\times 81 = 162$\n\n**Verification:** $3^1 = 3$, $3^2 = 9$, $3^3 = 27$, $3^4 = 81$. Then $2 \\times 81 = 162$.\n\n**Test Day Takeaway:** For exponential functions, compute the power FIRST, then multiply by the coefficient. A common error is computing $2 \\times 3 = 6$ first and then raising to the 4th power, which gives $(6)^4 = 1296$ -- way too big.',
          skills: ['Functions', 'Exponential Functions']
        },
        {
          id: 'pt11-m2-q10',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: '$y \\geq 2x - 1$\n$y \\leq -x + 5$\n\nWhich of the following points $(x, y)$ satisfies BOTH inequalities?',
          choices: [
            { id: 'A', text: '$(0, -2)$' },
            { id: 'B', text: '$(4, 1)$' },
            { id: 'C', text: '$(1, 3)$' },
            { id: 'D', text: '$(3, 5)$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: System of Inequalities -- Testing Points** -- Shows up 1-2 per test.\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** Plug each point into BOTH inequalities until one works.\n- $(0, -2)$: $-2 \\geq 2(0) - 1 = -1$? No, $-2 < -1$. Fails. Move on.\n- $(1, 3)$: $3 \\geq 2(1) - 1 = 1$? Yes. $3 \\leq -(1) + 5 = 4$? Yes. Both work. Pick C.\nYou can stop here -- no need to check D.\n\n**Check $(1, 3)$:**\n- $y \\geq 2x - 1$: $3 \\geq 2(1) - 1 = 1$. True.\n- $y \\leq -x + 5$: $3 \\leq -(1) + 5 = 4$. True.\n\n**Why the wrong answers are tempting:**\n- Choice A $(0, -2)$: Fails the first inequality ($-2 < -1$). College Board includes points that fail just one inequality to catch students who only check one condition.\n- Choice B $(4, 1)$: Fails the first inequality by a lot ($1 < 7$). This point is well outside the feasible region.\n- Choice D $(3, 5)$: Passes the first inequality ($5 \\geq 5$, barely) but fails the second ($5 > 2$). This is the sneakiest trap -- it satisfies one inequality and JUST barely fails the other, making students who do not check carefully think it works.\n\n**Verification:** $(1, 3)$: $3 \\geq 1$ and $3 \\leq 4$. Both true.\n\n**Test Day Takeaway:** For "which point satisfies" questions, just plug and check. Start with the easiest-looking point. And always check BOTH inequalities -- College Board designs traps that satisfy only one.',
          skills: ['Systems of Inequalities', 'Linear Inequalities']
        },
        {
          id: 'pt11-m2-q11',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The table below shows the score distributions for two classes on the same quiz. What is the positive difference between the mean score of Class Y and the mean score of Class X?',
          questionTable: {
            headers: ['Score', 'Class X', 'Class Y'],
            rows: [
              ['60', '3', '1'],
              ['70', '5', '3'],
              ['80', '8', '6'],
              ['90', '3', '7'],
              ['100', '1', '3']
            ]
          },
          correctAnswer: 7,
          explanation: '**SAT Pattern: Weighted Mean from Frequency Table** -- Shows up 1 per test. Tedious but mechanical.\n\n**The correct answer is $7$.**\n\n**The Fast Way (45 seconds):** Use your calculator for the weighted sums. Class X: $3(60) + 5(70) + 8(80) + 3(90) + 1(100) = 180 + 350 + 640 + 270 + 100 = 1540$. Mean X: $1540 \\div 20 = 77$. Class Y: $1(60) + 3(70) + 6(80) + 7(90) + 3(100) = 60 + 210 + 480 + 630 + 300 = 1680$. Mean Y: $1680 \\div 20 = 84$. Difference: $84 - 77 = 7$.\n\n**Step 1: Mean of Class X**\nTotal students $= 3 + 5 + 8 + 3 + 1 = 20$\n$$\\text{Sum} = 3(60) + 5(70) + 8(80) + 3(90) + 1(100) = 180 + 350 + 640 + 270 + 100 = 1{,}540$$\n$$\\text{Mean}_X = \\frac{1{,}540}{20} = 77$$\n\n**Step 2: Mean of Class Y**\nTotal students $= 1 + 3 + 6 + 7 + 3 = 20$\n$$\\text{Sum} = 1(60) + 3(70) + 6(80) + 7(90) + 3(100) = 60 + 210 + 480 + 630 + 300 = 1{,}680$$\n$$\\text{Mean}_Y = \\frac{1{,}680}{20} = 84$$\n\n**Step 3: Positive difference**\n$84 - 77 = 7$\n\n**Verification:** Class Y has more students at $90$ and $100$ than Class X, so its mean should be higher. $84 - 77 = 7$.\n\n**Test Day Takeaway:** For frequency tables, mean $= \\frac{\\sum(\\text{value} \\times \\text{frequency})}{\\text{total frequency}}$. Double-check your arithmetic by confirming the total frequencies first.',
          skills: ['Problem-Solving and Data Analysis', 'Statistics']
        },
        {
          id: 'pt11-m2-q12',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'A line in the $xy$-plane passes through the points $(k, 14)$ and $(k + 6, -10)$. The $y$-intercept of this line is at the point $(k - 3, b)$. What is the value of $b$?',
          correctAnswer: 26,
          explanation: '**SAT Pattern: Slope and Point-Slope with Parameters** -- Shows up 1 per test. Do not let the variable $k$ intimidate you -- it cancels out.\n\n**The correct answer is $26$.**\n\n**The Fast Way (20 seconds):** The slope is $\\frac{-10 - 14}{(k+6) - k} = \\frac{-24}{6} = -4$. Notice $k$ cancels. Now from the point $(k, 14)$, moving $3$ units LEFT (to $x = k - 3$) means the $y$-value goes UP by $(-4)(-3) = 12$. So $b = 14 + 12 = 26$.\n\n**Step 1: Calculate the slope**\n$$m = \\frac{-10 - 14}{(k + 6) - k} = \\frac{-24}{6} = -4$$\n\n**Step 2: Find $b$ using point-slope**\nUsing the point $(k, 14)$ and slope $-4$:\n$$y - 14 = -4(x - k)$$\nAt $x = k - 3$:\n$$b - 14 = -4((k - 3) - k) = -4(-3) = 12$$\n$$b = 26$$\n\n**Verification:** From $(k - 3, 26)$ to $(k, 14)$: slope $= \\frac{14 - 26}{k - (k-3)} = \\frac{-12}{3} = -4$. Matches.\n\n**Test Day Takeaway:** When a problem uses a parameter like $k$, it usually cancels out. Do not try to find $k$ -- just work with the differences between coordinates.',
          skills: ['Algebra', 'Linear Equations']
        },
        {
          id: 'pt11-m2-q13',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'In triangle $ABC$, the angle measures are $\\angle A = (3k + 5)°$, $\\angle B = (5k - 3)°$, and $\\angle C$ is unknown. Triangle $ABC$ is dilated by a scale factor of $4$ centered at the origin to produce triangle $A\'B\'C\'$. If $\\angle C\' = 82°$, what is the value of $k$?',
          choices: [
            { id: 'A', text: '$8$' },
            { id: 'B', text: '$10$' },
            { id: 'C', text: '$12$' },
            { id: 'D', text: '$15$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Dilation Preserves Angles + Triangle Angle Sum** -- Shows up 1 per test. Two concepts combined.\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** Dilation does NOT change angles. So $\\angle C = \\angle C\' = 82°$. Now use triangle angle sum: $(3k + 5) + (5k - 3) + 82 = 180$. Simplify: $8k + 84 = 180$, so $8k = 96$, $k = 12$.\n\n**Step 1: Recognize that dilation preserves angles**\n$\\angle C\' = \\angle C = 82°$\n\n**Step 2: Apply triangle angle sum**\n$(3k + 5) + (5k - 3) + 82 = 180$\n$8k + 84 = 180$\n$8k = 96$\n$k = 12$\n\n**Why the wrong answers are tempting:**\n- Choice A ($k = 8$): Gives angles $29° + 37° + 82° = 148°$. Does not sum to $180°$. Students might get this by dividing $96$ by $12$ instead of $8$.\n- Choice B ($k = 10$): Gives angles $35° + 47° + 82° = 164°$. Close to $180°$ but not quite. Might come from a setup error.\n- Choice D ($k = 15$): Gives angles $50° + 72° + 82° = 204°$, which exceeds $180°$. Impossible for a triangle. This might come from students who think dilation changes the angle by the scale factor (multiplying $82° \\div 4$) and then solve with a wrong $\\angle C$ value.\n\n**Verification:** $\\angle A = 3(12) + 5 = 41°$, $\\angle B = 5(12) - 3 = 57°$, $\\angle C = 82°$. Sum: $41 + 57 + 82 = 180°$.\n\n**Test Day Takeaway:** Dilations change SIZE but not SHAPE. Angles are ALWAYS preserved under dilation. If you see "dilation" and "angle" in the same problem, the angles stay exactly the same.',
          skills: ['Geometry', 'Transformations']
        },
        {
          id: 'pt11-m2-q14',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'Triangle $ABC$ is similar to triangle $DEF$, where $A$ corresponds to $D$ and $C$ corresponds to $F$. The lengths of the sides of triangle $ABC$ are $6$, $8$, and $10$, and the length of the longest side of triangle $DEF$ is $25$. What is the length of the shortest side of triangle $DEF$?',
          choices: [
            { id: 'A', text: '$12$' },
            { id: 'B', text: '$15$' },
            { id: 'C', text: '$20$' },
            { id: 'D', text: '$21$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Similar Triangles / Scale Factor** -- Shows up 1-2 per test.\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Longest side of ABC is $10$. Longest side of DEF is $25$. Scale factor: $\\frac{25}{10} = 2.5$. Shortest side of ABC is $6$. Shortest side of DEF: $6 \\times 2.5 = 15$.\n\n**Step 1: Find the scale factor**\nLongest side of $ABC$: $10$. Longest side of $DEF$: $25$.\nScale factor $= \\frac{25}{10} = 2.5$\n\n**Step 2: Find the shortest side of DEF**\nShortest side of $ABC$: $6$.\nShortest side of $DEF$ $= 6 \\times 2.5 = 15$\n\n**Why the wrong answers are tempting:**\n- Choice A ($12$) uses a scale factor of $2$ instead of $2.5$. Students might round $\\frac{25}{10}$ to $2$ or compute $\\frac{24}{12}$ by mistake.\n- Choice C ($20$) applies the scale factor to the MIDDLE side ($8 \\times 2.5 = 20$) instead of the shortest. The question specifically asks for the shortest side, but students who do not match sides carefully pick the wrong one.\n- Choice D ($21$) uses an incorrect scale factor entirely, possibly from $\\frac{25}{10} \\approx 2.33$ and then $6 \\times 3.5 = 21$ or some other miscalculation.\n\n**Verification:** All sides of DEF: $6 \\times 2.5 = 15$, $8 \\times 2.5 = 20$, $10 \\times 2.5 = 25$. The triangle $15, 20, 25$ is proportional to $6, 8, 10$ (both are $3{-}4{-}5$ scaled triangles).\n\n**Test Day Takeaway:** For similar triangles, find the scale factor using corresponding sides (longest to longest or shortest to shortest), then multiply the side you need by that scale factor.',
          skills: ['Geometry', 'Similar Triangles']
        },
        {
          id: 'pt11-m2-q15',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'The system of equations below has exactly one solution.\n\n$y = x^2 - 3x + 3$\n$y = x - 1$\n\nWhat is the $x$-coordinate of the solution?',
          choices: [
            { id: 'A', text: '$x = 1$' },
            { id: 'B', text: '$x = 2$' },
            { id: 'C', text: '$x = 3$' },
            { id: 'D', text: '$x = 4$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Line Tangent to Parabola (Quadratic-Linear System)** -- Shows up 1 per test.\n\n**Choice B is correct.**\n\n**The Fast Way (20 seconds):** In Desmos, graph $y = x^2 - 3x + 3$ and $y = x - 1$. You will see the line touches the parabola at exactly one point. Click the intersection: $x = 2$. Or, back-solve by testing each choice in both equations.\n\n**Step 1: Set the equations equal**\n$x^2 - 3x + 3 = x - 1$\n$x^2 - 4x + 4 = 0$\n\n**Step 2: Factor**\n$(x - 2)^2 = 0$\n$x = 2$\n\n**Step 3: Verify**\nAt $x = 2$: $y = 2 - 1 = 1$ and $y = 4 - 6 + 3 = 1$. Both give $y = 1$.\n\n**Why the wrong answers are tempting:**\n- Choice A ($x = 1$): At $x = 1$, the parabola gives $1 - 3 + 3 = 1$ and the line gives $0$. Close but not equal. College Board puts adjacent integer values as traps because students often guess "one off."\n- Choice C ($x = 3$): At $x = 3$, the parabola gives $9 - 9 + 3 = 3$ and the line gives $2$. Again, close but not equal.\n- Choice D ($x = 4$): At $x = 4$, the parabola gives $16 - 12 + 3 = 7$ and the line gives $3$. The gap widens.\n\n**Verification:** $(x-2)^2 = 0$ has discriminant $0$, confirming exactly one solution. The line is tangent to the parabola at $(2, 1)$.\n\n**Test Day Takeaway:** "Exactly one solution" for a quadratic-linear system means the discriminant is $0$ (the line is tangent to the curve). Set the equations equal, rearrange to standard form, and look for a perfect square.',
          skills: ['Systems of Equations', 'Quadratic Equations']
        },
        {
          id: 'pt11-m2-q16',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The function $f(x) = 2x^2 - 20x + 53$ has a minimum value. What is this minimum value?',
          correctAnswer: 3,
          explanation: '**SAT Pattern: Minimum Value via Completing the Square** -- Shows up 1 per test.\n\n**The correct answer is $3$.**\n\n**The Fast Way (15 seconds):** In Desmos, type $f(x) = 2x^2 - 20x + 53$ and find the vertex. Or use the vertex formula: $x = \\frac{-b}{2a} = \\frac{20}{4} = 5$. Then $f(5) = 2(25) - 100 + 53 = 50 - 100 + 53 = 3$.\n\n**Step 1: Factor out the leading coefficient**\n$$f(x) = 2(x^2 - 10x) + 53$$\n\n**Step 2: Complete the square**\n$$f(x) = 2(x^2 - 10x + 25 - 25) + 53 = 2(x - 5)^2 - 50 + 53 = 2(x - 5)^2 + 3$$\n\n**Step 3: Read the minimum**\nSince $(x - 5)^2 \\geq 0$, the minimum occurs when $(x - 5)^2 = 0$, giving $f(5) = 3$.\n\n**Verification:** $f(5) = 2(25) - 20(5) + 53 = 50 - 100 + 53 = 3$.\n\n**Test Day Takeaway:** The vertex formula $x = -\\frac{b}{2a}$ is faster than completing the square. Find the $x$-value, then plug it back in to get the min/max $y$-value.',
          skills: ['Advanced Math', 'Quadratic Equations']
        },
        {
          id: 'pt11-m2-q17',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'The dot plot above shows the distribution of the number of goals scored by a soccer team in $15$ games. If the team scores $2$ goals in the next game, which measure of the data will change?',
          diagram: {
            type: 'dotPlot',
            params: {
              title: 'Goals Scored per Game',
              data: [
                { value: 0, count: 2 },
                { value: 1, count: 3 },
                { value: 2, count: 4 },
                { value: 3, count: 3 },
                { value: 4, count: 2 },
                { value: 5, count: 1 }
              ],
              xMin: 0,
              xMax: 5
            }
          },
          choices: [
            { id: 'A', text: 'Median only' },
            { id: 'B', text: 'Mode only' },
            { id: 'C', text: 'Range only' },
            { id: 'D', text: 'Mean only' }
          ],
          correctAnswer: 'D',
          explanation: '**SAT Pattern: Effect of Adding a Data Point on Mean/Median/Mode/Range** -- Shows up 1 per test. Requires checking each measure individually.\n\n**Choice D is correct.**\n\n**The Fast Way (30 seconds):** Think about each measure:\n- Range: min stays $0$, max stays $5$. No change.\n- Mode: was $2$ (appeared $4$ times). Adding another $2$ makes it $5$ times, but it is still the mode. No change.\n- Median: with $15$ values, median is the 8th ($= 2$). With $16$ values, median is average of 8th and 9th (both $2$). Still $2$. No change.\n- Mean: old mean $= \\frac{33}{15} = 2.2$. New mean $= \\frac{35}{16} = 2.1875$. Changed!\nOnly the mean changes.\n\n**Current data (15 games):**\nOrdered: $0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5$\n- Median (8th value): $2$\n- Mode: $2$ (frequency $4$)\n- Range: $5 - 0 = 5$\n- Mean: $\\frac{33}{15} = 2.2$\n\n**After adding $2$ (16 games):**\n- Median: average of 8th and 9th values $= \\frac{2+2}{2} = 2$. Unchanged.\n- Mode: $2$ (now frequency $5$, still highest). Unchanged.\n- Range: $5 - 0 = 5$. Unchanged.\n- Mean: $\\frac{35}{16} = 2.1875 \\neq 2.2$. Changed.\n\n**Why the wrong answers are tempting:**\n- Choice A (Median): Students might think adding a value always shifts the median. But adding a value equal to the current median keeps it the same. You have to actually trace through the position shift.\n- Choice B (Mode): Students might think "adding another 2 changes the mode." But the mode was already $2$ -- adding more just strengthens it. The mode only changes if a different value overtakes it in frequency.\n- Choice C (Range): The range only changes if the new value is below the min or above the max. Since $2$ is between $0$ and $5$, the range is unaffected.\n\n**Verification:** Old mean $2.2$ vs. new mean $2.1875$. Different.\n\n**Test Day Takeaway:** The mean is the most sensitive measure -- it changes with almost every new data point. The median, mode, and range are more resistant to change. When in doubt on these questions, the mean is usually the answer.',
          skills: ['Statistics', 'Data Analysis']
        },
        {
          id: 'pt11-m2-q18',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The system of equations $y = x^2 - 2x + 3$ and $y = kx - 1$ has exactly one solution. If $k > 0$, what is the value of $k$?',
          correctAnswer: 2,
          explanation: '**SAT Pattern: Discriminant = 0 for Tangent Line** -- Shows up 1 per test. Same concept as the earlier tangent-line question, but now you solve for the unknown slope.\n\n**The correct answer is $2$.**\n\n**The Fast Way (25 seconds):** Set equal: $x^2 - 2x + 3 = kx - 1$, so $x^2 - (2+k)x + 4 = 0$. For exactly one solution, discriminant $= 0$: $(2+k)^2 - 16 = 0$, so $(2+k)^2 = 16$, giving $2 + k = \\pm 4$. Since $k > 0$: $k = 2$.\n\n**Step 1: Set the equations equal**\n$$x^2 - 2x + 3 = kx - 1$$\n$$x^2 - (2 + k)x + 4 = 0$$\n\n**Step 2: Apply the discriminant condition**\nFor exactly one solution: $b^2 - 4ac = 0$\n$$(2 + k)^2 - 4(1)(4) = 0$$\n$$(2 + k)^2 = 16$$\n$$2 + k = \\pm 4$$\n\n**Step 3: Solve for $k$**\n$k = 4 - 2 = 2$ or $k = -4 - 2 = -6$.\nSince $k > 0$, we have $k = 2$.\n\n**Verification:** With $k = 2$: $x^2 - 4x + 4 = (x-2)^2 = 0$, so $x = 2$. Then $y = 2(2) - 1 = 3$ and $y = 4 - 4 + 3 = 3$. Both match.\n\n**Test Day Takeaway:** "Exactly one solution" in a quadratic-linear system means discriminant $= 0$. Set the equations equal, rearrange into standard form $ax^2 + bx + c = 0$, and solve $b^2 - 4ac = 0$ for the unknown.',
          skills: ['Advanced Math', 'Systems of Equations']
        },
        {
          id: 'pt11-m2-q19',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'A movie theater sold adult tickets for \\$12 each and child tickets for \\$8 each. On one evening, the theater sold a total of $200$ tickets and collected \\$2,000. How many adult tickets were sold?',
          correctAnswer: '100',
          explanation: '**SAT Pattern: System of Equations Word Problem (Tickets/Prices)** -- Shows up 1-2 per test. Classic "total count + total value" setup.\n\n**The correct answer is $100$.**\n\n**The Fast Way (25 seconds):** Let $a$ = adult, $c$ = child. $a + c = 200$ and $12a + 8c = 2000$. From the first: $c = 200 - a$. Substitute: $12a + 8(200 - a) = 2000 \\implies 12a + 1600 - 8a = 2000 \\implies 4a = 400 \\implies a = 100$.\n\n**Step 1: Set up the system**\n$a + c = 200$ (total tickets)\n$12a + 8c = 2{,}000$ (total revenue)\n\n**Step 2: Solve by substitution**\n$c = 200 - a$\n$12a + 8(200 - a) = 2{,}000$\n$12a + 1{,}600 - 8a = 2{,}000$\n$4a = 400$\n$a = 100$\n\n**Verification:** $a = 100$, $c = 100$. Revenue: $12(100) + 8(100) = 1{,}200 + 800 = 2{,}000$. Total tickets: $100 + 100 = 200$.\n\n**Test Day Takeaway:** When you see "total count" and "total value" with two types of items at different prices, set up two equations immediately. Substitution is usually the fastest approach.',
          skills: ['Algebra', 'Systems of Equations', 'Word Problems']
        },
        {
          id: 'pt11-m2-q20',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: '$y = x^2 + 6x + k$\n\nIn the equation above, $k$ is a constant. If the equation has exactly one real solution, what is the value of $k$?',
          choices: [
            { id: 'A', text: '$-9$' },
            { id: 'B', text: '$0$' },
            { id: 'C', text: '$6$' },
            { id: 'D', text: '$9$' }
          ],
          correctAnswer: 'D',
          explanation: '**SAT Pattern: Discriminant = 0 for Exactly One Solution** -- Shows up 1-2 per test.\n\n**Choice D is correct.**\n\n**The Fast Way (15 seconds):** "Exactly one real solution" means the discriminant equals $0$. For $x^2 + 6x + k = 0$: $b^2 - 4ac = 36 - 4k = 0$, so $k = 9$. Pick D. Or recognize that $x^2 + 6x + 9 = (x + 3)^2$, a perfect square.\n\n**Step 1: Set the discriminant to zero**\n$b^2 - 4ac = 0$\n$6^2 - 4(1)(k) = 0$\n$36 - 4k = 0$\n$k = 9$\n\n**Step 2: Verify**\n$x^2 + 6x + 9 = (x + 3)^2 = 0$ gives exactly one solution: $x = -3$.\n\n**Why the wrong answers are tempting:**\n- Choice A ($k = -9$): Students might get a sign error, computing $k = -9$ instead of $k = 9$. Discriminant would be $36 + 36 = 72 > 0$ (two solutions). College Board knows sign errors are the most common algebra mistake.\n- Choice B ($k = 0$): Students might just set $k = 0$ to "simplify" the equation, thinking that removes the constant. But $x^2 + 6x = 0$ has TWO solutions ($x = 0$ and $x = -6$).\n- Choice C ($k = 6$): Might come from confusing $k$ with $b$. The coefficient of $x$ is $6$, so students might think $k = 6$. But the discriminant would be $36 - 24 = 12 > 0$ (two solutions).\n\n**Verification:** $(x+3)^2 = 0$ has exactly one root, $x = -3$.\n\n**Test Day Takeaway:** "Exactly one solution" for a quadratic $= 0$ always means discriminant $= 0$. Set $b^2 - 4ac = 0$ and solve. It is the fastest approach every time.',
          skills: ['Quadratic Equations', 'Discriminant']
        },
        {
          id: 'pt11-m2-q21',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'In a right triangle, one of the acute angles measures $\\theta$. If $\\sin(\\theta) = \\frac{8}{17}$, what is the value of $\\cos(\\theta)$? Express your answer as a fraction.',
          correctAnswer: '15/17',
          alternateAnswers: ['0.882'],
          explanation: '**SAT Pattern: Pythagorean Identity / Right Triangle Trig** -- Shows up 1 per test.\n\n**The correct answer is $\\frac{15}{17}$.**\n\n**The Fast Way (15 seconds):** Recognize the Pythagorean triple. If $\\sin(\\theta) = \\frac{8}{17}$, then opposite $= 8$ and hypotenuse $= 17$. The adjacent side is $\\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15$. So $\\cos(\\theta) = \\frac{15}{17}$.\n\n**Step 1: Use the Pythagorean identity**\n$\\sin^2(\\theta) + \\cos^2(\\theta) = 1$\n$\\left(\\frac{8}{17}\\right)^2 + \\cos^2(\\theta) = 1$\n$\\frac{64}{289} + \\cos^2(\\theta) = 1$\n$\\cos^2(\\theta) = \\frac{225}{289}$\n$\\cos(\\theta) = \\frac{15}{17}$ (positive since $\\theta$ is acute)\n\n**Verification:** $\\left(\\frac{8}{17}\\right)^2 + \\left(\\frac{15}{17}\\right)^2 = \\frac{64 + 225}{289} = \\frac{289}{289} = 1$.\n\n**Test Day Takeaway:** Memorize the common Pythagorean triples: $3{-}4{-}5$, $5{-}12{-}13$, $8{-}15{-}17$, $7{-}24{-}25$. When the SAT gives you a sin or cos value, check if it matches a triple -- it almost always does.',
          skills: ['Trigonometry', 'Right Triangles']
        },
        {
          id: 'pt11-m2-q22',
          type: 'fill-in',
          difficulty: 'hard',
          question: '$3x^2 - 12x - 5 = 0$\n\nOne solution to the given equation can be written as $\\frac{12 + \\sqrt{k}}{6}$, where $k$ is a constant. What is the value of $k$?',
          correctAnswer: '204',
          explanation: '**SAT Pattern: Quadratic Formula -- Identifying the Discriminant** -- Shows up 1 per test.\n\n**The correct answer is $204$.**\n\n**The Fast Way (20 seconds):** The question is really just asking for the discriminant $b^2 - 4ac$. For $3x^2 - 12x - 5 = 0$: $a = 3$, $b = -12$, $c = -5$. Discriminant: $(-12)^2 - 4(3)(-5) = 144 + 60 = 204$. That is $k$.\n\n**Step 1: Identify $a$, $b$, $c$**\n$a = 3$, $b = -12$, $c = -5$\n\n**Step 2: Apply the quadratic formula**\n$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} = \\frac{12 \\pm \\sqrt{144 - 4(3)(-5)}}{6}$$\n\n**Step 3: Compute the discriminant**\n$b^2 - 4ac = 144 - (-60) = 144 + 60 = 204$\n\nSo $x = \\frac{12 \\pm \\sqrt{204}}{6}$, meaning $k = 204$.\n\n**Verification:** $(-12)^2 = 144$. $4(3)(5) = 60$ (note: $c = -5$, so $-4ac = -4(3)(-5) = +60$). Total: $144 + 60 = 204$.\n\n**Test Day Takeaway:** When the SAT gives you a solution in the form $\\frac{\\text{something} + \\sqrt{k}}{\\text{something}}$, they are asking for the discriminant $b^2 - 4ac$. Be extra careful with signs -- when $c$ is negative, $-4ac$ becomes positive.',
          skills: ['Quadratic Equations', 'Quadratic Formula']
        }
      ]
    }
  ]
};
