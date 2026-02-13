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
          explanation: '**Choice C is correct.** Use the line of best fit to predict the test score at $x = 5$ hours.\n\n**Step 1: Use the line of best fit**\nThe line has slope $6$ and $y$-intercept $50$, giving $y = 6x + 50$.\n\n**Step 2: Substitute $x = 5$**\n$y = 6(5) + 50 = 30 + 50 = 80$.\n\n**Why other choices are incorrect:**\n• Choice A ($68$): This would correspond to about $x = 3$ on the line\n• Choice B ($74$): This would correspond to about $x = 4$ on the line\n• Choice D ($86$): This would correspond to about $x = 6$ on the line\n\n**Key concept:** To predict a value from a line of best fit, substitute the $x$-value into the equation of the line and solve for $y$.',
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
          explanation: '**Choice C is correct.** Solve the linear equation for $x$.\n\n**Step 1: Add $7$ to both sides**\n$5x - 7 = 28$\n$5x = 35$\n\n**Step 2: Divide both sides by $5$**\n$x = 7$\n\n**Why other choices are incorrect:**\n• Choice A ($4.2$): Divides $28 - 7 = 21$ by $5$ — subtracts before isolating\n• Choice B ($5$): Divides $28$ by $5$ without adding $7$ first\n• Choice D ($21$): Computes $28 - 7$ but forgets to divide by $5$\n\n**Key concept:** To solve $ax + b = c$, subtract $b$ from both sides, then divide by $a$.',
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
          explanation: '**Choice B is correct.** Build the cost function from the given rates.\n\n**Step 1: Identify the components**\n• Flat fee: $\\$15$ per month (constant)\n• Per-text cost: $\\$0.10$ per message $\\times$ $t$ messages $= 0.10t$\n\n**Step 2: Write the total cost**\n$C(t) = 0.10t + 15$\n\n**Why other choices are incorrect:**\n• Choice A: Multiplies $15$ by $t$ — the flat fee does not depend on the number of texts\n• Choice C: Combines the two rates into a single coefficient, which incorrectly models the cost\n• Choice D: Subtracts the text cost instead of adding it\n\n**Key concept:** A linear cost model has the form $C = mx + b$, where $m$ is the cost per unit and $b$ is the fixed cost.',
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
          explanation: '**Choice C is correct.** Read the bar corresponding to $3$ books.\n\n**Step 1: Locate the bar for $3$ books**\nOn the horizontal axis, find the bar labeled $3$.\n\n**Step 2: Read the height**\nThe bar reaches $6$ on the vertical axis, meaning $6$ students read exactly $3$ books.\n\n**Why other choices are incorrect:**\n• Choice A ($3$): This is the number of books, not the number of students who read $3$ books\n• Choice B ($5$): Reads the bar for $2$ books instead of $3$ books\n• Choice D ($8$): May result from adding $5 + 3$ or other bars incorrectly\n\n**Key concept:** In a bar graph, the height of each bar represents the frequency — how many times that value occurs.',
          skills: ['Data Analysis', 'Bar Graphs']
        },
        {
          id: 'pt11-m1-q5',
          type: 'fill-in',
          difficulty: 'easy',
          question: 'A store originally has $400$ items in stock. If $35\\%$ of the items are sold during a sale, how many items were sold?',
          correctAnswer: '140',
          explanation: '**The correct answer is $140$.** Calculate $35\\%$ of $400$.\n\n**Step 1: Convert the percentage to a decimal**\n$35\\% = 0.35$\n\n**Step 2: Multiply**\n$0.35 \\times 400 = 140$ items sold.\n\n**Verification:** $\\frac{140}{400} = 0.35 = 35\\%$ ✓\n\n**Key concept:** To find $p\\%$ of a number $N$, compute $\\frac{p}{100} \\times N$.',
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
          explanation: '**Choice B is correct.** Use conditional probability: given the student selected a hot lunch, find the probability of being in grade $10$.\n\n**Step 1: Identify the relevant group**\nThe condition is "selected a hot lunch," so the total is $80$ students.\n\n**Step 2: Count the favorable outcomes**\nOf the $80$ hot lunch students, $35$ are in grade $10$.\n\n**Step 3: Calculate the probability**\n$P(\\text{Grade 10} \\mid \\text{Hot lunch}) = \\frac{35}{80}$\n\n**Why other choices are incorrect:**\n• Choice A ($\\frac{35}{150}$): Uses the total number of all students, not just hot lunch students\n• Choice C ($\\frac{35}{75}$): Uses the grade $10$ total as the denominator instead of the hot lunch total\n• Choice D ($\\frac{45}{80}$): Gives the probability of grade $9$ given hot lunch, not grade $10$\n\n**Key concept:** For conditional probability, restrict the denominator to the given condition. $P(A \\mid B) = \\frac{\\text{count of A and B}}{\\text{count of B}}$.',
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
          explanation: '**Choice A is correct.** Add the two equations to eliminate $y$.\n\n**Step 1: Add the equations**\n$(3x + 2y) + (x - 2y) = 19 + (-3)$\n$4x = 16$\n$x = 4$\n\n**Step 2: Substitute $x = 4$ into the second equation**\n$4 - 2y = -3$\n$-2y = -7$\n$y = 3.5$\n\n**Verification:** $3(4) + 2(3.5) = 12 + 7 = 19$ ✓ and $4 - 2(3.5) = 4 - 7 = -3$ ✓\n\n**Why other choices are incorrect:**\n• Choice B: $3(5) + 2(2) = 19$ ✓ but $5 - 2(2) = 1 \\neq -3$ ✗\n• Choice C: $3(3) + 2(5) = 19$ ✓ but $3 - 2(5) = -7 \\neq -3$ ✗\n• Choice D: $3(2) + 2(6.5) = 19$ ✓ but $2 - 2(6.5) = -11 \\neq -3$ ✗\n\n**Key concept:** When the coefficients of a variable are opposites, add the equations to eliminate that variable.',
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
          explanation: '**Choice B is correct.** Read the $y$-intercept from the graph, then interpret it in context.\n\n**Step 1: Read the graph**\nFrom the graph, the $y$-intercept is at $(0, 500)$.\n\n**Step 2: Interpret the axes**\nThe $x$-axis represents hours since draining began, and the $y$-axis represents gallons remaining.\n\n**Step 3: Interpret the $y$-intercept**\nAt $x = 0$ (when draining began), the tank had $500$ gallons.\n\n**Why other choices are incorrect:**\n• Choice A: Describes a rate, not a starting value — the rate is the slope, not the $y$-intercept\n• Choice C: $500$ is the initial amount, not the time to drain completely\n• Choice D: Confuses the $y$-intercept value with a rate description\n\n**Key concept:** Read the $y$-intercept from the graph, then interpret what "$x = 0$" means in context. The $y$-intercept represents the initial value.',
          skills: ['Functions', 'Graph Interpretation']
        },
        {
          id: 'pt11-m1-q9',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'The function $g$ is defined by $g(x) = 3x^2 - 5x + 2$. What is the value of $g(-2)$?',
          correctAnswer: '24',
          explanation: '**The correct answer is $24$.** Substitute $x = -2$ into the function.\n\n**Step 1: Substitute $x = -2$**\n$g(-2) = 3(-2)^2 - 5(-2) + 2$\n\n**Step 2: Simplify**\n$g(-2) = 3(4) + 10 + 2 = 12 + 10 + 2 = 24$\n\n**Verification:** $3(4) = 12$, $-5(-2) = 10$, and $12 + 10 + 2 = 24$ ✓\n\n**Key concept:** To evaluate $g(a)$, replace every $x$ with $a$ in the function definition. Be careful with signs when squaring negative numbers: $(-2)^2 = 4$, not $-4$.',
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
          explanation: '**Choice D is correct.** When a transversal crosses parallel lines, angles are either equal or supplementary.\n\n**Step 1: Identify possible angle measures**\nA transversal crossing two parallel lines creates $8$ angles. These angles come in two groups:\n• $132°$ (the given angle and all angles equal to it — corresponding, alternate interior/exterior, and vertical angles)\n• $180° - 132° = 48°$ (all supplementary angles — co-interior and linear pairs)\n\n**Step 2: Check the choices**\nThe only values that could appear are $132°$ and $48°$. Among the choices, only $132°$ (Choice D) is one of these values.\n\n**Why other choices are incorrect:**\n• Choice A ($42°$): Not a valid angle in this configuration\n• Choice B ($52°$): Not a valid angle in this configuration\n• Choice C ($58°$): Not a valid angle in this configuration\n\n**Key concept:** When parallel lines are cut by a transversal, all acute angles are equal, all obtuse angles are equal, and any acute angle plus any obtuse angle equals $180°$.',
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
          explanation: '**Choice B is correct.** Build the exponential model from the given information.\n\n**Step 1: Identify the components**\n• Initial population: $200$\n• Growth factor: $3$ (triples)\n• Tripling period: $4$ hours\n\n**Step 2: Write the equation**\nThe general form is $P(t) = P_0 \\cdot r^{t/d}$, where $r$ is the growth factor and $d$ is the period:\n$P(t) = 200(3)^{\\frac{t}{4}}$\n\n**Step 3: Verify**\nAt $t = 4$: $P(4) = 200(3)^1 = 600$ (tripled ✓).\nAt $t = 8$: $P(8) = 200(3)^2 = 1{,}800$ (tripled again ✓).\n\n**Why other choices are incorrect:**\n• Choice A: $P(4) = 200(3)^{16}$ — grows way too fast; the exponent should be $1$ at $t = 4$\n• Choice C: Uses base $4$ — the population triples (factor of $3$), not quadruples\n• Choice D: $P(0) = 600$ — wrong initial value, and triples every hour instead of every $4$ hours\n\n**Key concept:** For exponential growth with factor $r$ every $d$ time units: $P(t) = P_0 \\cdot r^{t/d}$.',
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
          explanation: '**Choice A is correct.** Factor the quadratic by finding two numbers that multiply to $-24$ and add to $5$.\n\n**Step 1: Find the factor pair**\nWe need two numbers whose product is $-24$ and sum is $5$:\n$8 \\times (-3) = -24$ and $8 + (-3) = 5$ ✓\n\n**Step 2: Write the factored form**\n$x^2 + 5x - 24 = (x + 8)(x - 3)$\n\n**Why other choices are incorrect:**\n• Choice B: $(x - 8)(x + 3) = x^2 - 5x - 24$ — the middle term has the wrong sign\n• Choice C: $(x + 6)(x - 4) = x^2 + 2x - 24$ — the middle coefficient is $2$, not $5$\n• Choice D: $(x + 12)(x - 2) = x^2 + 10x - 24$ — the middle coefficient is $10$, not $5$\n\n**Key concept:** To factor $x^2 + bx + c$, find two numbers $p$ and $q$ such that $pq = c$ and $p + q = b$. Then $x^2 + bx + c = (x + p)(x + q)$.',
          skills: ['Algebra', 'Factoring', 'Polynomials']
        },
        {
          id: 'pt11-m1-q13',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'The data set below shows the ages (in years) of $7$ members of a team.\n\n$22, 25, 27, 28, 30, 31, 39$\n\nWhat is the median age, in years, of the team members?',
          correctAnswer: '28',
          explanation: '**The correct answer is $28$.** Find the middle value of the ordered data set.\n\n**Step 1: Confirm the data is ordered**\n$22, 25, 27, 28, 30, 31, 39$ — already in ascending order.\n\n**Step 2: Find the median**\nWith $7$ values, the median is the $\\frac{7+1}{2} = 4$th value.\nCounting: $22, 25, 27, \\boxed{28}, 30, 31, 39$\n\nThe median age is $28$ years.\n\n**Key concept:** For an odd number of data values, the median is the middle value. For $n$ ordered values, the median is the $\\frac{n+1}{2}$th value.',
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
          explanation: '**Choice C is correct.** Use the triangle angle sum property.\n\n**Step 1: Apply the angle sum**\nThe sum of angles in a triangle is $180°$:\n$\\angle D + \\angle E + \\angle F = 180°$\n$52° + 73° + \\angle F = 180°$\n\n**Step 2: Solve for $\\angle F$**\n$\\angle F = 180° - 52° - 73° = 55°$\n\n**Why other choices are incorrect:**\n• Choice A ($35°$): Uses $180° - 52° - 73° - 20°$ or another error\n• Choice B ($45°$): May subtract from $170°$ instead of $180°$\n• Choice D ($65°$): May subtract only angle $E$ from $180°$ and divide\n\n**Key concept:** The three interior angles of a triangle always sum to $180°$.',
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
          explanation: '**Choice C is correct.** Factor the quadratic and apply the zero-product property.\n\n**Step 1: Factor**\nFind two numbers that multiply to $20$ and add to $-9$: $(-4)(-5) = 20$ and $-4 + (-5) = -9$.\n$x^2 - 9x + 20 = (x - 4)(x - 5) = 0$\n\n**Step 2: Solve**\n$x - 4 = 0 \\Rightarrow x = 4$\n$x - 5 = 0 \\Rightarrow x = 5$\n\n**Why other choices are incorrect:**\n• Choice A: $2 \\times 10 = 20$ but $2 + 10 = 12 \\neq -9$\n• Choice B: $(-4)(-5) = 20$ but the factors would give $(x + 4)(x + 5) = x^2 + 9x + 20$\n• Choice D: $(-4)(5) = -20 \\neq 20$\n\n**Key concept:** To solve $x^2 + bx + c = 0$ by factoring, find $p$ and $q$ such that $pq = c$ and $p + q = b$, then $(x - p)(x - q) = 0$.',
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
          explanation: '**Choice D is correct.** Multiply both sides by the common denominator and solve.\n\n**Step 1: Multiply both sides by $(x - 2)(x + 1)$**\n$3(x + 1) + 5(x - 2) = 17$\n\n**Step 2: Expand and simplify**\n$3x + 3 + 5x - 10 = 17$\n$8x - 7 = 17$\n$8x = 24$\n$x = 3$\n\n**Step 3: Check that $x = 3$ doesn\'t make any denominator zero**\n$x - 2 = 1 \\neq 0$ ✓ and $x + 1 = 4 \\neq 0$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($x = -1$): Makes the denominator $(x + 1) = 0$ — undefined\n• Choice B ($x = 0$): $\\frac{3}{-2} + \\frac{5}{1} = -1.5 + 5 = 3.5$ but $\\frac{17}{-2} = -8.5$ — not equal\n• Choice C ($x = 2$): Makes the denominator $(x - 2) = 0$ — undefined\n\n**Key concept:** To solve a rational equation, multiply all terms by the LCD to clear denominators. Always check that the solution does not make any denominator zero.',
          skills: ['Algebra', 'Rational Equations']
        },
        {
          id: 'pt11-m1-q17',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'A bakery sells cupcakes for \\$3 each and cookies for \\$2 each. On a given day, the bakery sold a total of $85$ items and collected \\$210. How many cupcakes did the bakery sell?',
          correctAnswer: '40',
          explanation: '**The correct answer is $40$.** Set up a system of equations and solve.\n\n**Step 1: Define variables**\nLet $c$ = number of cupcakes and $k$ = number of cookies.\n\n**Step 2: Write the system**\n$c + k = 85$ (total items)\n$3c + 2k = 210$ (total revenue)\n\n**Step 3: Solve by substitution**\nFrom the first equation: $k = 85 - c$.\nSubstitute into the second:\n$3c + 2(85 - c) = 210$\n$3c + 170 - 2c = 210$\n$c = 40$\n\n**Verification:** $c = 40$, $k = 45$. Revenue: $3(40) + 2(45) = 120 + 90 = 210$ ✓. Items: $40 + 45 = 85$ ✓.\n\n**Key concept:** Word problems with two unknowns and two conditions lead to a system of two equations. Use substitution or elimination to solve.',
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
          explanation: '**Choice A is correct.** A system has no solution when the lines are parallel — same slope but different $y$-intercepts.\n\n**Step 1: Find the slope of the first equation**\n$5x - 3y = 7 \\implies y = \\frac{5}{3}x - \\frac{7}{3}$ (slope $= \\frac{5}{3}$)\n\n**Step 2: Check each choice**\n• Choice A: $10x - 6y = 20 \\implies y = \\frac{5}{3}x - \\frac{10}{3}$. Slope $= \\frac{5}{3}$ ✓, intercept $= -\\frac{10}{3} \\neq -\\frac{7}{3}$ ✓ → **Parallel, no solution**\n• Choice B: $10x - 6y = 14 \\implies y = \\frac{5}{3}x - \\frac{7}{3}$. Same slope AND same intercept → infinitely many solutions\n• Choice C: $5x + 3y = 7 \\implies y = -\\frac{5}{3}x + \\frac{7}{3}$. Different slope → one solution\n• Choice D: $3x - 5y = 7 \\implies y = \\frac{3}{5}x - \\frac{7}{5}$. Different slope → one solution\n\n**Key concept:** For no solution, the second equation must be a non-identical scalar multiple of the first — same left-side ratio but different right-side ratio.',
          skills: ['Algebra', 'Systems of Equations']
        },
        {
          id: 'pt11-m1-q19',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'A circle has a diameter of $16$ centimeters. A sector of the circle has a central angle of $90°$. The area of the sector can be written as $b\\pi$ square centimeters. What is the value of $b$?',
          correctAnswer: '16',
          alternateAnswers: ['16.0'],
          explanation: '**The correct answer is $16$.** Use the sector area formula.\n\n**Step 1: Find the radius**\nDiameter $= 16$, so radius $= 8$ cm.\n\n**Step 2: Recall the sector area formula**\nSector area $= \\frac{\\theta}{360°} \\times \\pi r^2$\n\n**Step 3: Substitute**\n$= \\frac{90°}{360°} \\times \\pi (8)^2 = \\frac{1}{4} \\times 64\\pi = 16\\pi$\n\nSo $b = 16$.\n\n**Key concept:** A sector with central angle $\\theta$ has area $\\frac{\\theta}{360°} \\times \\pi r^2$. A $90°$ sector is exactly $\\frac{1}{4}$ of the full circle.',
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
          explanation: '**Choice C is correct.** Set up the constraints and maximize the total.\n\n**Step 1: Define variables and constraints**\nLet $a$ = adult meals ($a \\geq 10$), $c$ = child meals ($c \\geq 15$).\nBudget: $8a + 5c \\leq 200$.\nMaximize: $a + c$.\n\n**Step 2: Optimize**\nSince child meals are cheaper (\\$5 vs \\$8), to maximize the total number of meals, use the minimum number of adult meals:\n$$a = 10: \\quad 8(10) + 5c \\leq 200$$\n$$80 + 5c \\leq 200$$\n$$5c \\leq 120$$\n$$c \\leq 24$$\n\nMaximum total $= 10 + 24 = 34$.\n\n**Step 3: Verify no other combination beats 34**\nIf $a = 11$: $88 + 5c \\leq 200 \\implies c \\leq 22$, total $= 33$.\nIf $a = 12$: $96 + 5c \\leq 200 \\implies c \\leq 20$, total $= 32$.\nEach additional adult meal reduces the total.\n\n**Why other choices are incorrect:**\n• Choice A ($25$): This is just $10 + 15$, the minimums\n• Choice B ($30$): Does not maximize child meals\n• Choice D ($40$): Would cost $8(10) + 5(30) = 230 > 200$, exceeds budget\n\n**Key concept:** In budget optimization with different unit costs, maximize the cheaper item while meeting all minimum constraints.',
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
          explanation: '**The correct answer is $4$.** Calculate the average rate of change between the endpoints.\n\n**Step 1: Identify the endpoint values**\nAt $x = 2$: $f(2) = 10$\nAt $x = 11$: $f(11) = 46$\n\n**Step 2: Apply the formula**\n$$\\text{Average rate of change} = \\frac{f(11) - f(2)}{11 - 2} = \\frac{46 - 10}{9} = \\frac{36}{9} = 4$$\n\n**Verification:** The function increases by $12$ for each increase of $3$ in $x$ (e.g., from $x = 2$ to $x = 5$: $22 - 10 = 12$, and $5 - 2 = 3$). So the rate is $\\frac{12}{3} = 4$ ✓.\n\n**Key concept:** The average rate of change of $f$ over $[a, b]$ is $\\frac{f(b) - f(a)}{b - a}$, which equals the slope of the secant line connecting $(a, f(a))$ and $(b, f(b))$.',
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
          explanation: '**Choice A is correct.** Complete the square for both $x$ and $y$ to rewrite in standard form.\n\n**Step 1: Group the $x$ and $y$ terms**\n$(x^2 - 6x) + (y^2 + 10y) = -18$\n\n**Step 2: Complete the square**\nFor $x$: $x^2 - 6x + 9 = (x - 3)^2$, add $9$ to both sides.\nFor $y$: $y^2 + 10y + 25 = (y + 5)^2$, add $25$ to both sides.\n\n$(x - 3)^2 + (y + 5)^2 = -18 + 9 + 25 = 16$\n\n**Step 3: Read the center and radius**\n$(x - 3)^2 + (y + 5)^2 = 16$\nCenter: $(3, -5)$, Radius: $\\sqrt{16} = 4$.\n\n**Why other choices are incorrect:**\n• Choice B: Signs of the center are reversed\n• Choice C: Correct center but uses $r^2 = 16$ as the radius instead of $r = 4$\n• Choice D: Both errors — reversed center signs and $r = 16$\n\n**Key concept:** To convert $x^2 + y^2 + Dx + Ey + F = 0$ to standard form $(x - h)^2 + (y - k)^2 = r^2$, complete the square for $x$ and $y$ separately.',
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
          explanation: '**Choice C is correct.** Calculate $75\\%$ of $120$.\n\n**Step 1: Convert the percentage to a decimal**\n$75\\% = 0.75$\n\n**Step 2: Multiply**\n$0.75 \\times 120 = 90$ blue shirts.\n\n**Why other choices are incorrect:**\n• Choice A ($45$): Computes $120 - 75 = 45$ instead of $75\\%$ of $120$\n• Choice B ($75$): Uses the percentage value directly as the count\n• Choice D ($100$): May result from a calculation error\n\n**Key concept:** To find $p\\%$ of a number, multiply the number by $\\frac{p}{100}$.',
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
          explanation: '**Choice B is correct.** Substitute $x = 3$ into the function.\n\n**Step 1: Substitute**\n$h(3) = 4(3) - 9 = 12 - 9 = 3$\n\n**Why other choices are incorrect:**\n• Choice A ($-5$): May come from $4 - 9 = -5$, forgetting to multiply\n• Choice C ($7$): May come from $4(3) - 5 = 7$ or another error\n• Choice D ($12$): Computes $4(3)$ but forgets to subtract $9$\n\n**Key concept:** To evaluate a function at a value, replace the variable with that value and simplify.',
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
          explanation: '**Choice B is correct.** Build the cost equation from the given rate structure.\n\n**Step 1: Identify the components**\n• Flat fee: $\\$50$ (constant, does not depend on miles)\n• Per-mile cost: $\\$0.25 \\times m$ miles $= 0.25m$\n\n**Step 2: Write the total**\n$C = 0.25m + 50$\n\n**Why other choices are incorrect:**\n• Choice A: Multiplies $50$ by $m$ — the flat fee is constant\n• Choice C: Combines the two rates incorrectly into a single coefficient\n• Choice D: Subtracts the mileage cost instead of adding it\n\n**Key concept:** Total cost $=$ (rate per unit $\\times$ quantity) $+$ fixed cost.',
          skills: ['Algebra', 'Linear Equations', 'Word Problems']
        },
        {
          id: 'pt11-m2-q4',
          type: 'fill-in',
          difficulty: 'easy',
          question: 'A recipe calls for $3$ cups of flour for every $2$ cups of sugar. If a baker uses $12$ cups of flour, how many cups of sugar are needed?',
          correctAnswer: '8',
          explanation: '**The correct answer is $8$.** Set up a proportion and solve.\n\n**Step 1: Write the proportion**\n$\\frac{3 \\text{ flour}}{2 \\text{ sugar}} = \\frac{12 \\text{ flour}}{s \\text{ sugar}}$\n\n**Step 2: Cross-multiply and solve**\n$3s = 24$\n$s = 8$\n\n**Verification:** $\\frac{3}{2} = \\frac{12}{8} = 1.5$ ✓\n\n**Key concept:** In a proportion $\\frac{a}{b} = \\frac{c}{d}$, cross-multiply to get $ad = bc$.',
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
          explanation: '**Choice C is correct.** The maximum value occurs at the vertex of a downward-opening parabola.\n\n**Step 1: Identify the vertex**\nThe function $f(x) = -(x - 2)^2 + 5$ is in vertex form $f(x) = a(x - h)^2 + k$ with $h = 2$ and $k = 5$.\n\n**Step 2: Determine the maximum**\nSince $a = -1 < 0$, the parabola opens downward, so the vertex $(2, 5)$ is the maximum point. The maximum value of $f(x)$ is $5$.\n\n**Why other choices are incorrect:**\n• Choice A ($-2$): This is the left boundary of the visible graph, not the maximum\n• Choice B ($2$): This is the $x$-coordinate of the vertex, not the $y$-value\n• Choice D ($7$): May result from adding the vertex coordinates $2 + 5 = 7$\n\n**Key concept:** For $f(x) = a(x - h)^2 + k$, the vertex is $(h, k)$. If $a < 0$, the parabola opens downward and $k$ is the maximum value.',
          skills: ['Quadratic Functions', 'Graph Analysis']
        },
        {
          id: 'pt11-m2-q6',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'If $12x = 8$, what is the value of $36x$?',
          correctAnswer: '24',
          explanation: '**The correct answer is $24$.** Relate $36x$ to $12x$ using multiplication.\n\n**Step 1: Relate the expressions**\n$36x = 3 \\times 12x$\n\n**Step 2: Substitute**\nSince $12x = 8$:\n$36x = 3 \\times 8 = 24$\n\n**Verification:** From $12x = 8$, $x = \\frac{2}{3}$. Then $36 \\times \\frac{2}{3} = 24$ ✓.\n\n**Key concept:** Instead of solving for $x$, look for a multiplier connecting what you want ($36x$) to what you know ($12x$). Since $36x = 3(12x)$, substitute directly.',
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
          explanation: '**Choice A is correct.** Add the polynomials by combining like terms.\n\n**Step 1: Group like terms**\n$(7x^2 + 2x^2) + (3x + (-5x)) + (-4 + 8)$\n\n**Step 2: Combine**\n• $x^2$ terms: $7x^2 + 2x^2 = 9x^2$\n• $x$ terms: $3x - 5x = -2x$\n• Constants: $-4 + 8 = 4$\n\n**Result:** $9x^2 - 2x + 4$\n\n**Why other choices are incorrect:**\n• Choice B: Adds the exponents ($x^2 + x^2 = x^4$) instead of the coefficients\n• Choice C: Adds $3x + 5x = 8x$ instead of $3x - 5x = -2x$\n• Choice D: Subtracts the $x^2$ terms instead of adding them\n\n**Key concept:** When adding polynomials, combine terms with the same degree by adding their coefficients. Do not add or multiply exponents.',
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
          explanation: '**Choice B is correct.** Calculate the probability of NOT selecting a red marble.\n\n**Step 1: Find the total number of marbles**\n$5 + 3 + 2 = 10$ marbles total.\n\n**Step 2: Find the number of non-red marbles**\n$3 + 2 = 5$ non-red marbles.\n\n**Step 3: Calculate the probability**\n$P(\\text{not red}) = \\frac{5}{10} = \\frac{1}{2}$\n\n**Why other choices are incorrect:**\n• Choice A ($\\frac{1}{10}$): This is the probability of selecting one specific marble\n• Choice C ($\\frac{3}{5}$): May exclude only green marbles instead of red\n• Choice D ($\\frac{4}{5}$): May count incorrectly\n\n**Key concept:** $P(\\text{not A}) = 1 - P(A) = \\frac{\\text{non-A outcomes}}{\\text{total outcomes}}$.',
          skills: ['Probability', 'Data Analysis']
        },
        {
          id: 'pt11-m2-q9',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'The function $p$ is defined by $p(x) = 2(3)^x$. What is the value of $p(4)$?',
          correctAnswer: '162',
          explanation: '**The correct answer is $162$.** Substitute $x = 4$ into the function.\n\n**Step 1: Substitute**\n$p(4) = 2(3)^4$\n\n**Step 2: Calculate**\n$3^4 = 81$\n$p(4) = 2 \\times 81 = 162$\n\n**Verification:** $3^1 = 3$, $3^2 = 9$, $3^3 = 27$, $3^4 = 81$, and $2 \\times 81 = 162$ ✓.\n\n**Key concept:** For $f(x) = a \\cdot b^x$, substitute the value of $x$ and compute the power before multiplying by $a$.',
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
          explanation: '**Choice C is correct.** Check each point against both inequalities.\n\n**Check $(1, 3)$:**\n• $y \\geq 2x - 1$: $3 \\geq 2(1) - 1 = 1$ ✓\n• $y \\leq -x + 5$: $3 \\leq -(1) + 5 = 4$ ✓\n\n**Why other choices are incorrect:**\n• Choice A $(0, -2)$: $-2 \\geq 2(0) - 1 = -1$? No, $-2 < -1$ ✗\n• Choice B $(4, 1)$: $1 \\geq 2(4) - 1 = 7$? No, $1 < 7$ ✗\n• Choice D $(3, 5)$: $5 \\leq -(3) + 5 = 2$? No, $5 > 2$ ✗\n\n**Key concept:** A point satisfies a system of inequalities only if it satisfies ALL inequalities simultaneously. Substitute the coordinates into each inequality to check.',
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
          explanation: '**The correct answer is $7$.** Calculate the mean for each class using frequency-weighted sums.\n\n**Step 1: Calculate the mean for Class X**\nTotal students $= 3 + 5 + 8 + 3 + 1 = 20$\n$$\\text{Sum} = 3(60) + 5(70) + 8(80) + 3(90) + 1(100)$$\n$$= 180 + 350 + 640 + 270 + 100 = 1{,}540$$\n$$\\text{Mean}_X = \\frac{1{,}540}{20} = 77$$\n\n**Step 2: Calculate the mean for Class Y**\nTotal students $= 1 + 3 + 6 + 7 + 3 = 20$\n$$\\text{Sum} = 1(60) + 3(70) + 6(80) + 7(90) + 3(100)$$\n$$= 60 + 210 + 480 + 630 + 300 = 1{,}680$$\n$$\\text{Mean}_Y = \\frac{1{,}680}{20} = 84$$\n\n**Step 3: Find the positive difference**\n$$84 - 77 = 7$$\n\n**Key concept:** The mean of grouped data $= \\frac{\\sum(\\text{value} \\times \\text{frequency})}{\\text{total frequency}}$. Compare means to quantify how the distributions differ.',
          skills: ['Problem-Solving and Data Analysis', 'Statistics']
        },
        {
          id: 'pt11-m2-q12',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'A line in the $xy$-plane passes through the points $(k, 14)$ and $(k + 6, -10)$. The $y$-intercept of this line is at the point $(k - 3, b)$. What is the value of $b$?',
          correctAnswer: 26,
          explanation: '**The correct answer is $26$.** Find the slope, then use it to find $b$.\n\n**Step 1: Calculate the slope**\n$$m = \\frac{-10 - 14}{(k + 6) - k} = \\frac{-24}{6} = -4$$\n\n**Step 2: Use point-slope form to find $b$**\nUsing the point $(k, 14)$ and slope $-4$:\n$$y - 14 = -4(x - k)$$\n\nAt the $y$-intercept, $x = k - 3$:\n$$b - 14 = -4((k - 3) - k) = -4(-3) = 12$$\n$$b = 26$$\n\n**Verification:** Check with the other point $(k + 6, -10)$:\n$-10 - 14 = -4((k + 6) - k) = -4(6) = -24$ ✓\n\nFrom $(k - 3, 26)$ to $(k, 14)$: slope $= \\frac{14 - 26}{k - (k-3)} = \\frac{-12}{3} = -4$ ✓\n\n**Key concept:** The slope depends only on the difference of coordinates, so the parameter $k$ cancels. Once you know the slope, use point-slope form to find any other point on the line.',
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
          explanation: '**Choice C is correct.** Use the fact that dilation preserves angle measures, then apply the triangle angle sum.\n\n**Step 1: Recognize that dilation preserves angles**\nDilation changes side lengths but NOT angle measures. Therefore:\n$$\\angle C\' = \\angle C = 82°$$\n\n**Step 2: Apply the triangle angle sum**\n$$\\angle A + \\angle B + \\angle C = 180°$$\n$$(3k + 5) + (5k - 3) + 82 = 180$$\n$$8k + 84 = 180$$\n$$8k = 96$$\n$$k = 12$$\n\n**Verification:** $\\angle A = 3(12) + 5 = 41°$, $\\angle B = 5(12) - 3 = 57°$, $\\angle C = 82°$.\nSum: $41 + 57 + 82 = 180°$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($k = 8$): Gives angles $29° + 37° + 82° = 148° \\neq 180°$\n• Choice B ($k = 10$): Gives angles $35° + 47° + 82° = 164° \\neq 180°$\n• Choice D ($k = 15$): Gives angles $50° + 72° + 82° = 204° > 180°$\n\n**Key concept:** Dilations (and all similarity transformations) preserve angle measures. Only side lengths change by the scale factor.',
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
          explanation: '**Choice B is correct.** Use the scale factor between similar triangles.\n\n**Step 1: Find the scale factor**\nThe longest side of $ABC$ is $10$, and the longest side of $DEF$ is $25$.\nScale factor $= \\frac{25}{10} = 2.5$.\n\n**Step 2: Find the shortest side of $DEF$**\nThe shortest side of $ABC$ is $6$.\nShortest side of $DEF$ $= 6 \\times 2.5 = 15$.\n\n**Why other choices are incorrect:**\n• Choice A ($12$): Multiplies the shortest side by $2$ instead of $2.5$\n• Choice C ($20$): Multiplies the middle side ($8$) by $2.5$\n• Choice D ($21$): Uses an incorrect scale factor\n\n**Key concept:** In similar triangles, all corresponding sides are proportional. The scale factor $= \\frac{\\text{side of larger}}{\\text{corresponding side of smaller}}$. Apply this ratio to find any unknown side.',
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
          explanation: '**Choice B is correct.** Set the two equations equal and solve.\n\n**Step 1: Set equal**\n$x^2 - 3x + 3 = x - 1$\n$x^2 - 4x + 4 = 0$\n\n**Step 2: Factor**\n$(x - 2)^2 = 0$\n$x = 2$\n\n**Step 3: Verify**\nAt $x = 2$: $y = 2 - 1 = 1$, and $y = 4 - 6 + 3 = 1$ ✓\n\nThe discriminant is $0$, confirming exactly one solution. The line $y = x - 1$ is tangent to the parabola $y = x^2 - 3x + 3$ at the point $(2, 1)$.\n\n**Why other choices are incorrect:**\n• Choice A ($x = 1$): At $x = 1$: parabola gives $1 - 3 + 3 = 1$, but line gives $0$. Not equal.\n• Choice C ($x = 3$): At $x = 3$: parabola gives $9 - 9 + 3 = 3$, but line gives $2$. Not equal.\n• Choice D ($x = 4$): At $x = 4$: parabola gives $16 - 12 + 3 = 7$, but line gives $3$. Not equal.\n\n**Key concept:** A line is tangent to a parabola when the resulting quadratic has discriminant $= 0$ (exactly one solution).',
          skills: ['Systems of Equations', 'Quadratic Equations']
        },
        {
          id: 'pt11-m2-q16',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The function $f(x) = 2x^2 - 20x + 53$ has a minimum value. What is this minimum value?',
          correctAnswer: 3,
          explanation: '**The correct answer is $3$.** Complete the square to find the vertex.\n\n**Step 1: Factor out the leading coefficient from the $x$ terms**\n$$f(x) = 2(x^2 - 10x) + 53$$\n\n**Step 2: Complete the square inside the parentheses**\n$$f(x) = 2(x^2 - 10x + 25 - 25) + 53$$\n$$f(x) = 2(x - 5)^2 - 50 + 53$$\n$$f(x) = 2(x - 5)^2 + 3$$\n\n**Step 3: Identify the minimum**\nSince $(x - 5)^2 \\geq 0$ for all real $x$, the minimum occurs when $(x - 5)^2 = 0$, i.e., at $x = 5$.\n$$f(5) = 2(0) + 3 = 3$$\n\n**Verification:** $f(5) = 2(25) - 20(5) + 53 = 50 - 100 + 53 = 3$ ✓\n\n**Key concept:** For $f(x) = a(x - h)^2 + k$ with $a > 0$, the minimum value is $k$, occurring at $x = h$. When the leading coefficient is not $1$, factor it out before completing the square.',
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
          explanation: '**Choice D is correct.** Analyze how adding a data point of $2$ affects each measure.\n\n**Current data (15 games):**\nOrdered: $0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5$\n• Median (8th value): $2$\n• Mode: $2$ (appears $4$ times)\n• Range: $5 - 0 = 5$\n• Mean: $\\frac{0(2)+1(3)+2(4)+3(3)+4(2)+5(1)}{15} = \\frac{33}{15} = 2.2$\n\n**After adding a score of $2$ (16 games):**\n• Median (average of 8th and 9th values): $\\frac{2+2}{2} = 2$ — unchanged\n• Mode: $2$ (now appears $5$ times, still the highest) — unchanged\n• Range: $5 - 0 = 5$ — unchanged\n• Mean: $\\frac{35}{16} = 2.1875$ — changed from $2.2$\n\nOnly the mean changes.\n\n**Key concept:** Adding a value equal to the mode or median often doesn\'t change those measures, but the mean almost always changes when a new data point is added.',
          skills: ['Statistics', 'Data Analysis']
        },
        {
          id: 'pt11-m2-q18',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The system of equations $y = x^2 - 2x + 3$ and $y = kx - 1$ has exactly one solution. If $k > 0$, what is the value of $k$?',
          correctAnswer: 2,
          explanation: '**The correct answer is $2$.** Set the equations equal and use the discriminant condition.\n\n**Step 1: Set the equations equal**\n$$x^2 - 2x + 3 = kx - 1$$\n$$x^2 - (2 + k)x + 4 = 0$$\n\n**Step 2: Apply the discriminant condition**\nFor exactly one solution, the discriminant must equal zero:\n$$b^2 - 4ac = 0$$\n$$(2 + k)^2 - 4(1)(4) = 0$$\n$$(2 + k)^2 = 16$$\n$$2 + k = \\pm 4$$\n\n**Step 3: Solve for $k$**\n$$k = 4 - 2 = 2 \\quad \\text{or} \\quad k = -4 - 2 = -6$$\n\nSince $k > 0$, we have $k = 2$.\n\n**Verification:** With $k = 2$: $x^2 - 4x + 4 = 0 \\implies (x - 2)^2 = 0 \\implies x = 2$.\nThen $y = 2(2) - 1 = 3$, and $y = 4 - 4 + 3 = 3$ ✓. The line is tangent to the parabola at $(2, 3)$.\n\n**Key concept:** A line is tangent to a parabola when the resulting quadratic equation has discriminant $= 0$ (exactly one intersection point).',
          skills: ['Advanced Math', 'Systems of Equations']
        },
        {
          id: 'pt11-m2-q19',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'A movie theater sold adult tickets for \\$12 each and child tickets for \\$8 each. On one evening, the theater sold a total of $200$ tickets and collected \\$2,000. How many adult tickets were sold?',
          correctAnswer: '100',
          explanation: '**The correct answer is $100$.** Set up and solve a system of equations.\n\n**Step 1: Define variables**\nLet $a$ = adult tickets and $c$ = child tickets.\n\n**Step 2: Write the system**\n$a + c = 200$ (total tickets)\n$12a + 8c = 2{,}000$ (total revenue)\n\n**Step 3: Solve**\nFrom the first equation: $c = 200 - a$.\nSubstitute: $12a + 8(200 - a) = 2{,}000$\n$12a + 1{,}600 - 8a = 2{,}000$\n$4a = 400$\n$a = 100$\n\n**Verification:** $a = 100$, $c = 100$. Revenue: $12(100) + 8(100) = 1{,}200 + 800 = 2{,}000$ ✓.\n\n**Key concept:** Two unknowns with two conditions (total count and total value) lead to a system of two linear equations.',
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
          explanation: '**Choice D is correct.** For exactly one real solution, the discriminant must equal $0$.\n\n**Step 1: Set the equation equal to zero**\n$x^2 + 6x + k = 0$\n\n**Step 2: Apply the discriminant condition**\n$b^2 - 4ac = 0$\n$6^2 - 4(1)(k) = 0$\n$36 - 4k = 0$\n$k = 9$\n\n**Why other choices are incorrect:**\n• Choice A ($k = -9$): Discriminant $= 36 + 36 = 72 > 0$ (two solutions)\n• Choice B ($k = 0$): Discriminant $= 36 > 0$ (two solutions)\n• Choice C ($k = 6$): Discriminant $= 36 - 24 = 12 > 0$ (two solutions)\n\n**Key concept:** The equation $ax^2 + bx + c = 0$ has exactly one real solution when the discriminant $b^2 - 4ac = 0$.',
          skills: ['Quadratic Equations', 'Discriminant']
        },
        {
          id: 'pt11-m2-q21',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'In a right triangle, one of the acute angles measures $\\theta$. If $\\sin(\\theta) = \\frac{8}{17}$, what is the value of $\\cos(\\theta)$? Express your answer as a fraction.',
          correctAnswer: '15/17',
          alternateAnswers: ['0.882'],
          explanation: '**The correct answer is $\\frac{15}{17}$ (or approximately $0.882$).** Use the Pythagorean identity or right triangle relationships.\n\n**Step 1: Use the Pythagorean identity**\n$\\sin^2(\\theta) + \\cos^2(\\theta) = 1$\n$\\left(\\frac{8}{17}\\right)^2 + \\cos^2(\\theta) = 1$\n$\\frac{64}{289} + \\cos^2(\\theta) = 1$\n$\\cos^2(\\theta) = \\frac{225}{289}$\n$\\cos(\\theta) = \\frac{15}{17}$ (positive since $\\theta$ is acute)\n\n**Alternative approach:** In the right triangle, if the opposite side is $8$ and hypotenuse is $17$, the adjacent side is $\\sqrt{17^2 - 8^2} = \\sqrt{225} = 15$. So $\\cos(\\theta) = \\frac{15}{17}$.\n\n**Key concept:** $\\sin^2(\\theta) + \\cos^2(\\theta) = 1$. If the sides of a right triangle form a Pythagorean triple ($8, 15, 17$), use the definitions: $\\sin = \\frac{\\text{opposite}}{\\text{hypotenuse}}$, $\\cos = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$.',
          skills: ['Trigonometry', 'Right Triangles']
        },
        {
          id: 'pt11-m2-q22',
          type: 'fill-in',
          difficulty: 'hard',
          question: '$3x^2 - 12x - 5 = 0$\n\nOne solution to the given equation can be written as $\\frac{12 + \\sqrt{k}}{6}$, where $k$ is a constant. What is the value of $k$?',
          correctAnswer: '204',
          explanation: '**The correct answer is $204$.** Apply the quadratic formula and match to the given form.\n\n**Step 1: Identify $a$, $b$, $c$**\nFor $3x^2 - 12x - 5 = 0$: $a = 3$, $b = -12$, $c = -5$.\n\n**Step 2: Apply the quadratic formula**\n$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} = \\frac{12 \\pm \\sqrt{144 - 4(3)(-5)}}{6}$$\n\n**Step 3: Simplify the discriminant**\n$b^2 - 4ac = 144 + 60 = 204$\n\nSo $x = \\frac{12 \\pm \\sqrt{204}}{6}$.\n\n**Step 4: Match to the given form**\nComparing $\\frac{12 + \\sqrt{k}}{6}$ with $\\frac{12 + \\sqrt{204}}{6}$, we get $k = 204$.\n\n**Key concept:** The quadratic formula gives $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. The value under the square root is the discriminant $b^2 - 4ac$.',
          skills: ['Quadratic Equations', 'Quadratic Formula']
        }
      ]
    }
  ]
};
