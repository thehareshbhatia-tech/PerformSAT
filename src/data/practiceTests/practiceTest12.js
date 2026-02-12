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
          explanation: '**Choice C is correct.** Read the bar corresponding to $7$ hours.\n\n**Step 1: Locate the bar**\nOn the horizontal axis, find the bar labeled $7$.\n\n**Step 2: Read the height**\nThe bar reaches $7$ on the vertical axis, so $7$ students reported exactly $7$ hours of sleep.\n\n**Why other choices are incorrect:**\n• Choice A ($3$): Reads the bar for $8$ hours instead of $7$ hours\n• Choice B ($4$): Reads the bar for $6$ hours instead of $7$ hours\n• Choice D ($8$): Confuses the $y$-axis maximum with the bar height\n\n**Key concept:** In a bar graph, the height of each bar shows the frequency of that category.',
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
          explanation: '**Choice B is correct.** Solve the linear equation.\n\n**Step 1: Subtract $3$ from both sides**\n$7x = 49$\n\n**Step 2: Divide both sides by $7$**\n$x = 7$\n\n**Why other choices are incorrect:**\n• Choice A ($5$): May come from $52 \\div 10$ or another error\n• Choice C ($8$): May come from $\\frac{52 - 3}{7} \\approx 7$ rounded up, or $\\frac{52}{7}$ rounded\n• Choice D ($49$): Computes $52 - 3$ but forgets to divide by $7$\n\n**Key concept:** To solve $ax + b = c$, subtract $b$ from both sides, then divide by $a$.',
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
          explanation: '**Choice B is correct.** Build the cost function from the given rates.\n\n**Step 1: Identify the components**\n• Monthly cost: $\\$30 \\times m$ months $= 30m$\n• One-time fee: $\\$75$ (constant)\n\n**Step 2: Write the total cost**\n$C(m) = 30m + 75$\n\n**Why other choices are incorrect:**\n• Choice A: Multiplies the enrollment fee by $m$ — it\'s a one-time cost, not monthly\n• Choice C: Adds $30 + 75 = 105$ into a single per-month rate\n• Choice D: Subtracts the enrollment fee instead of adding it\n\n**Key concept:** A linear cost function has the form $C = mx + b$, where $m$ is the recurring cost per period and $b$ is the one-time fixed cost.',
          skills: ['Algebra', 'Linear Equations', 'Word Problems']
        },
        {
          id: 'pt12-m1-q4',
          type: 'fill-in',
          difficulty: 'easy',
          question: 'A survey of $600$ people found that $45\\%$ preferred brand A. How many people preferred brand A?',
          correctAnswer: '270',
          explanation: '**The correct answer is $270$.** Calculate $45\\%$ of $600$.\n\n**Step 1: Convert to a decimal**\n$45\\% = 0.45$\n\n**Step 2: Multiply**\n$0.45 \\times 600 = 270$\n\n**Verification:** $\\frac{270}{600} = 0.45 = 45\\%$ ✓\n\n**Key concept:** To find $p\\%$ of a number $N$, compute $\\frac{p}{100} \\times N$.',
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
          explanation: '**Choice B is correct.** Set up a proportion using the given ratio.\n\n**Step 1: Write the proportion**\n$\\frac{\\text{cats}}{\\text{dogs}} = \\frac{3}{5} = \\frac{c}{40}$\n\n**Step 2: Solve for $c$**\n$5c = 3 \\times 40 = 120$\n$c = 24$\n\n**Why other choices are incorrect:**\n• Choice A ($15$): Computes $\\frac{3}{8} \\times 40$, using the total ratio parts incorrectly\n• Choice C ($32$): Computes $\\frac{4}{5} \\times 40$ — uses an incorrect ratio\n• Choice D ($67$): Adds $40 + 27$ with no valid basis\n\n**Key concept:** In a ratio $a:b$, if one quantity is known, set up $\\frac{a}{b} = \\frac{x}{\\text{known}}$ and cross-multiply.',
          skills: ['Ratios', 'Proportions']
        },
        {
          id: 'pt12-m1-q6',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The graph above shows the estimated revenue, in thousands of dollars, for a new business as a function of the number of months since it opened. The $y$-intercept is $(0, 5)$ and the line passes through $(12, 41)$. What does the slope of the line represent in this context?',
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
          explanation: '**Choice A is correct.** The slope represents the rate of change of revenue over time.\n\n**Step 1: Calculate the slope**\n$\\text{Slope} = \\frac{41 - 5}{12 - 0} = \\frac{36}{12} = 3$ (thousands of dollars per month)\n\n**Step 2: Interpret in context**\nSince $y$ is in thousands of dollars and $x$ is in months, a slope of $3$ means the revenue increases by $3$ thousand dollars ($\\$3{,}000$) per month.\n\n**Why other choices are incorrect:**\n• Choice B: Confuses the $y$-intercept ($5$) with the slope\n• Choice C: Describes the $y$-intercept, not the slope\n• Choice D: Describes a specific point on the line, not what the slope represents\n\n**Key concept:** The slope of a linear model represents the rate of change — how much $y$ changes per unit increase in $x$.',
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
          explanation: '**Choice B is correct.** Use the line of best fit to predict the race time.\n\n**Step 1: Use the equation**\nThe line has slope $-2$ and $y$-intercept $34$: $y = -2x + 34$.\n\n**Step 2: Substitute $x = 8$**\n$y = -2(8) + 34 = -16 + 34 = 18$ minutes.\n\n**Why other choices are incorrect:**\n• Choice A ($14$): Corresponds to $x = 10$ on the line\n• Choice C ($22$): Corresponds to $x = 6$ on the line\n• Choice D ($26$): Corresponds to $x = 4$ on the line\n\n**Key concept:** A negative slope indicates an inverse relationship — as practice hours increase, race times decrease.',
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
          explanation: '**Choice B is correct.** This is a conditional probability question.\n\n**Step 1: Identify the condition**\nWe\'re told the selected student prefers fiction, so we restrict to the $90$ fiction students.\n\n**Step 2: Find the favorable outcomes**\nOf the $90$ fiction students, $48$ are in grade $11$.\n\n**Step 3: Calculate**\n$P(\\text{Grade 11} \\mid \\text{Fiction}) = \\frac{48}{90}$\n\n**Why other choices are incorrect:**\n• Choice A ($\\frac{48}{160}$): Uses the total of all students, not just fiction readers\n• Choice C ($\\frac{48}{80}$): Uses the grade $11$ total as the denominator\n• Choice D ($\\frac{42}{90}$): Gives the probability that a fiction reader is in grade $12$\n\n**Key concept:** For conditional probability, restrict the total to only those meeting the given condition.',
          skills: ['Probability', 'Data Analysis']
        },
        {
          id: 'pt12-m1-q9',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'The function $f$ is defined by $f(x) = -2x^2 + 8x - 3$. What is the value of $f(3)$?',
          correctAnswer: '3',
          explanation: '**The correct answer is $3$.** Substitute $x = 3$ into the function.\n\n**Step 1: Substitute**\n$f(3) = -2(3)^2 + 8(3) - 3$\n\n**Step 2: Simplify**\n$f(3) = -2(9) + 24 - 3 = -18 + 24 - 3 = 3$\n\n**Verification:** $-18 + 24 = 6$, and $6 - 3 = 3$ ✓.\n\n**Key concept:** Carefully apply order of operations: exponents first, then multiplication, then addition/subtraction.',
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
          explanation: '**Choice A is correct.** For infinitely many solutions, the second equation must be a multiple of the first.\n\n**Step 1: Compare the coefficients**\nMultiply the first equation by $-2$:\n$-2(4x - 3y) = -2(12)$\n$-8x + 6y = -24$\n\n**Step 2: Match to the second equation**\nThe second equation is $-8x + 6y = k$. For this to be identical to $-8x + 6y = -24$, we need $k = -24$.\n\n**Why other choices are incorrect:**\n• Choice B ($-12$): The original right side, but the second equation has coefficients doubled\n• Choice C ($12$): Same magnitude as the original right side but wrong sign\n• Choice D ($24$): Correct magnitude but wrong sign — this would give no solutions\n\n**Key concept:** A system has infinitely many solutions when the equations are scalar multiples of each other: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$.',
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
          explanation: '**Choice B is correct.** Model compound interest with an exponential function.\n\n**Step 1: Identify the growth factor**\nA $5\\%$ annual increase means the value is multiplied by $1 + 0.05 = 1.05$ each year.\n\n**Step 2: Write the function**\n$V(t) = 1{,}000(1.05)^t$\n\n**Step 3: Verify**\nAt $t = 1$: $V(1) = 1{,}000(1.05) = 1{,}050$ (initial plus $5\\%$) ✓.\n\n**Why other choices are incorrect:**\n• Choice A: Uses $0.05$ as the base — this decays to $0$ rapidly\n• Choice C: Models simple (linear) interest, not compound interest\n• Choice D: Raises $1{,}050$ to the power $t$ — incorrect structure\n\n**Key concept:** For compound interest: $V(t) = P(1 + r)^t$, where $P$ is principal and $r$ is the annual rate as a decimal.',
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
          explanation: '**Choice C is correct.** Use the exterior angle theorem.\n\n**Step 1: Apply the exterior angle theorem**\nAn exterior angle of a triangle equals the sum of the two non-adjacent interior angles:\n$\\text{Exterior angle at } R = \\angle P + \\angle Q$\n$130° = 55° + \\angle Q$\n\n**Step 2: Solve**\n$\\angle Q = 130° - 55° = 75°$\n\n**Why other choices are incorrect:**\n• Choice A ($50°$): May compute $180° - 130°$ incorrectly\n• Choice B ($55°$): Assumes $\\angle Q = \\angle P$\n• Choice D ($125°$): Computes $180° - 55°$ — this would be the sum of angles $Q$ and $R$, not just $Q$\n\n**Key concept:** The exterior angle theorem states that an exterior angle of a triangle equals the sum of the two remote interior angles.',
          skills: ['Geometry', 'Triangles', 'Angle Relationships']
        },
        {
          id: 'pt12-m1-q13',
          type: 'fill-in',
          difficulty: 'medium',
          question: '$\\frac{2x}{3} + \\frac{x}{6} = 10$\n\nWhat is the value of $x$?',
          correctAnswer: '12',
          explanation: '**The correct answer is $12$.** Solve the equation by finding a common denominator.\n\n**Step 1: Find the LCD**\nThe LCD of $3$ and $6$ is $6$.\n\n**Step 2: Rewrite with the LCD**\n$\\frac{4x}{6} + \\frac{x}{6} = 10$\n\n**Step 3: Combine and solve**\n$\\frac{5x}{6} = 10$\n$5x = 60$\n$x = 12$\n\n**Verification:** $\\frac{2(12)}{3} + \\frac{12}{6} = 8 + 2 = 10$ ✓\n\n**Key concept:** To solve equations with fractions, find the least common denominator to combine the terms, then solve normally.',
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
          explanation: '**Choice B is correct.** Identify the transformations from the vertex form.\n\n**Step 1: Compare to vertex form**\n$g(x) = (x - 3)^2 + 1$ has the form $(x - h)^2 + k$ with $h = 3$ and $k = 1$.\n\n**Step 2: Interpret the transformations**\n• $h = 3$: Shifts the graph $3$ units to the right\n• $k = 1$: Shifts the graph $1$ unit up\n\n**Why other choices are incorrect:**\n• Choice A: $(x - 3)$ shifts right, not left. $(x + 3)$ would shift left.\n• Choice C: The $+1$ shifts up, not down\n• Choice D: Swaps the shift amounts\n\n**Key concept:** For $f(x - h) + k$: $h > 0$ shifts right, $h < 0$ shifts left; $k > 0$ shifts up, $k < 0$ shifts down.',
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
          explanation: '**Choice C is correct.** Apply the Pythagorean theorem.\n\n**Step 1: Set up the equation**\n$a^2 + b^2 = c^2$\n$5^2 + b^2 = 13^2$\n$25 + b^2 = 169$\n\n**Step 2: Solve for $b$**\n$b^2 = 144$\n$b = 12$\n\n**Why other choices are incorrect:**\n• Choice A ($8$): $5^2 + 8^2 = 89 \\neq 169$\n• Choice B ($10$): $5^2 + 10^2 = 125 \\neq 169$\n• Choice D ($18$): $5^2 + 18^2 = 349 \\neq 169$\n\n**Key concept:** The Pythagorean theorem states $a^2 + b^2 = c^2$ for a right triangle with hypotenuse $c$. The triple $5, 12, 13$ is a common Pythagorean triple.',
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
          explanation: '**Choice A is correct.** Factor the numerator and denominator, then simplify.\n\n**Step 1: Factor the numerator**\n$x^2 - 9 = (x - 3)(x + 3)$ (difference of squares)\n\n**Step 2: Factor the denominator**\n$x^2 + 5x + 6 = (x + 2)(x + 3)$\n\n**Step 3: Simplify**\n$\\frac{(x - 3)(x + 3)}{(x + 2)(x + 3)} = \\frac{x - 3}{x + 2}$ (cancel the common factor $x + 3$)\n\n**Why other choices are incorrect:**\n• Choice B: Does not cancel the $(x + 3)$ factor\n• Choice C: Cancels $(x + 2)$ from the denominator, which is incorrect\n• Choice D: Has a factoring error in the denominator\n\n**Key concept:** To simplify a rational expression, factor both the numerator and denominator completely, then cancel common factors.',
          skills: ['Algebra', 'Rational Expressions', 'Factoring']
        },
        {
          id: 'pt12-m1-q17',
          type: 'fill-in',
          difficulty: 'hard',
          question: '$-3 \\leq 2x + 1 \\leq 9$\n\nHow many integer values of $x$ satisfy the compound inequality above?',
          correctAnswer: '7',
          explanation: '**The correct answer is $7$.** Solve the compound inequality and count the integers.\n\n**Step 1: Solve all parts**\nSubtract $1$: $-4 \\leq 2x \\leq 8$\nDivide by $2$: $-2 \\leq x \\leq 4$\n\n**Step 2: Count the integers**\nThe integers satisfying $-2 \\leq x \\leq 4$ are: $-2, -1, 0, 1, 2, 3, 4$.\nThat\'s $7$ integers.\n\n**Key concept:** For a compound inequality $a \\leq x \\leq b$, the number of integers is $b - a + 1$ (when $a$ and $b$ are integers).',
          skills: ['Algebra', 'Inequalities']
        },
        {
          id: 'pt12-m1-q18',
          type: 'fill-in',
          difficulty: 'hard',
          question: '$$x(kx - 40) = -16$$\n\nIn the given equation, $k$ is a positive integer constant. The equation has no real solution. What is the least possible value of $k$?',
          correctAnswer: 26,
          explanation: '**The correct answer is $26$.** Rewrite in standard form and analyze the discriminant.\n\n**Step 1: Expand and rewrite**\n$$kx^2 - 40x = -16$$\n$$kx^2 - 40x + 16 = 0$$\n\n**Step 2: Apply the discriminant condition**\nFor no real solution, the discriminant must be negative:\n$$b^2 - 4ac < 0$$\n$$(-40)^2 - 4(k)(16) < 0$$\n$$1{,}600 - 64k < 0$$\n$$64k > 1{,}600$$\n$$k > 25$$\n\n**Step 3: Find the least integer**\nSince $k > 25$ and $k$ must be a positive integer, the least possible value is $k = 26$.\n\n**Verification:**\n• $k = 25$: discriminant $= 1{,}600 - 1{,}600 = 0$ (one real solution, not "no real solution")\n• $k = 26$: discriminant $= 1{,}600 - 1{,}664 = -64 < 0$ (no real solution ✓)\n\n**Key concept:** A quadratic $ax^2 + bx + c = 0$ has no real solutions when $b^2 - 4ac < 0$. To find the least $k$, solve the boundary case $b^2 - 4ac = 0$ and take the next integer.',
          skills: ['Advanced Math', 'Discriminant']
        },
        {
          id: 'pt12-m1-q19',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'A store buys an item at cost, marks it up by $60\\%$, and then offers a $25\\%$ discount during a sale. If the sale price is \\$96, what was the cost, in dollars, of the item?',
          correctAnswer: 80,
          explanation: '**The correct answer is $80$.** Work through the percentage chain.\n\n**Step 1: Set up the equation**\nLet $c$ = cost.\n• After $60\\%$ markup: price $= c \\times 1.60$\n• After $25\\%$ discount: sale price $= c \\times 1.60 \\times 0.75$\n\n**Step 2: Solve**\n$$c \\times 1.60 \\times 0.75 = 96$$\n$$c \\times 1.20 = 96$$\n$$c = \\frac{96}{1.20} = 80$$\n\n**Verification:** Cost $= \\$80$. After $60\\%$ markup: $80 \\times 1.60 = \\$128$. After $25\\%$ discount: $128 \\times 0.75 = \\$96$ ✓\n\n**Key concept:** Percentage increases and decreases multiply. A $60\\%$ increase followed by a $25\\%$ decrease is NOT a net $35\\%$ increase — it is $1.60 \\times 0.75 = 1.20$, a net $20\\%$ increase.',
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
          explanation: '**Choice C is correct.** When edge lengths are scaled by a factor, volume scales by the cube of that factor.\n\n**Step 1: Find the original edge length**\n$V = s^3 = 64$, so $s = 4$ inches.\n\n**Step 2: Find the new edge length**\nNew edge $= 3 \\times 4 = 12$ inches.\n\n**Step 3: Find the new volume**\n$V_{\\text{new}} = 12^3 = 1{,}728$ cubic inches.\n\n**Alternative:** Volume scales by $3^3 = 27$. So $V_{\\text{new}} = 27 \\times 64 = 1{,}728$.\n\n**Why other choices are incorrect:**\n• Choice A ($192$): Multiplies $64 \\times 3$ — scales linearly instead of cubically\n• Choice B ($576$): Multiplies $64 \\times 9 = 64 \\times 3^2$ — scales by the square instead of the cube\n• Choice D ($4{,}096$): Computes $64^2 / 1$ or another unrelated calculation\n\n**Key concept:** When all linear dimensions are scaled by factor $k$, the volume scales by $k^3$.',
          skills: ['Geometry', 'Volume']
        },
        {
          id: 'pt12-m1-q21',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'If $(x - 3)$ is a factor of $x^3 - 7x^2 + 15x - 9$, what is one of the other zeros of the polynomial? Enter one value.',
          correctAnswer: '1',
          alternateAnswers: ['3'],
          explanation: '**The correct answer is $1$ (also accepted: $3$).** Use polynomial division to find the other factors.\n\n**Step 1: Divide by $(x - 3)$**\nUsing synthetic division with $x = 3$:\n$x^3 - 7x^2 + 15x - 9 = (x - 3)(x^2 - 4x + 3)$\n\n**Step 2: Factor the quotient**\n$x^2 - 4x + 3 = (x - 1)(x - 3)$\n\n**Step 3: Identify all zeros**\nThe polynomial factors as $(x - 3)^2(x - 1)$.\nThe zeros are $x = 3$ (double root) and $x = 1$.\n\n**Verification:** $f(1) = 1 - 7 + 15 - 9 = 0$ ✓. $f(3) = 27 - 63 + 45 - 9 = 0$ ✓.\n\n**Key concept:** Once you know one factor of a polynomial, divide to find the remaining factors.',
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
          explanation: '**Choice A is correct.** Complete the square.\n\n**Step 1: Factor out the leading coefficient from the first two terms**\n$2x^2 + 12x + 23 = 2(x^2 + 6x) + 23$\n\n**Step 2: Complete the square inside the parentheses**\n$x^2 + 6x = (x + 3)^2 - 9$\n\n**Step 3: Substitute back**\n$2[(x + 3)^2 - 9] + 23 = 2(x + 3)^2 - 18 + 23 = 2(x + 3)^2 + 5$\n\n**Why other choices are incorrect:**\n• Choice B: Doesn\'t subtract the $18$ generated by completing the square\n• Choice C: Uses $(x + 6)^2$ — the half-coefficient of $6x$ is $3$, not $6$\n• Choice D: Subtracts $9$ instead of $18$ (forgets to multiply by $2$)\n\n**Key concept:** To complete the square for $ax^2 + bx + c$: factor out $a$ from the first two terms, complete the square inside, then distribute $a$ and simplify.',
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
          explanation: '**Choice B is correct.** Substitute the values and evaluate.\n\n**Step 1: Substitute**\n$2(5) + 3(-3) = 10 + (-9) = 10 - 9 = 1$\n\n**Why other choices are incorrect:**\n• Choice A ($-4$): May compute $2(5) + 3(3) - 19$ or another error with signs\n• Choice C ($4$): May compute $2(5) - 3(2)$ or similar\n• Choice D ($19$): Computes $2(5) + 3(3) = 19$, ignoring the negative sign on $b$\n\n**Key concept:** When substituting negative values, be careful with signs: $3(-3) = -9$, not $+9$.',
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
          explanation: '**Choice C is correct.** A rational function is undefined where the denominator is zero.\n\n**Step 1: Set the denominator equal to zero**\n$x - 2 = 0$\n$x = 2$\n\n**Why other choices are incorrect:**\n• Choice A ($x = -4$): This makes the numerator $0$ ($f(-4) = 0$), but the function is still defined\n• Choice B ($x = -2$): $f(-2) = \\frac{2}{-4} = -\\frac{1}{2}$ — perfectly defined\n• Choice D ($x = 4$): $f(4) = \\frac{8}{2} = 4$ — perfectly defined\n\n**Key concept:** A function $\\frac{p(x)}{q(x)}$ is undefined where $q(x) = 0$. The numerator being zero simply means the function equals zero — it is still defined.',
          skills: ['Functions', 'Rational Functions']
        },
        {
          id: 'pt12-m2-q3',
          type: 'fill-in',
          difficulty: 'easy',
          question: 'A factory produces $360$ widgets in $8$ hours. At this rate, how many widgets does the factory produce per hour?',
          correctAnswer: '45',
          explanation: '**The correct answer is $45$.** Divide total production by total time.\n\n**Step 1: Calculate the rate**\n$\\frac{360 \\text{ widgets}}{8 \\text{ hours}} = 45$ widgets per hour.\n\n**Key concept:** Rate $=$ total quantity $\\div$ total time.',
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
          explanation: '**Choice A is correct.** Model the total cost as flat fee plus per-mile cost.\n\n**Step 1: Write the cost equation**\nTotal cost $=$ per-mile charge $+$ flat fee:\n$2.25m + 3.50 = 21.50$\n\n**Why other choices are incorrect:**\n• Choice B: Multiplies the flat fee by miles and uses the per-mile rate as the constant\n• Choice C: Subtracts the flat fee instead of adding\n• Choice D: Adds the two rates into one coefficient\n\n**Key concept:** Total cost $=$ (unit rate $\\times$ quantity) $+$ fixed cost.',
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
          explanation: '**Choice C is correct.** Use the relationship between angles formed by parallel lines and a transversal.\n\n**Step 1: Identify the angle types**\nWhen a transversal crosses parallel lines, corresponding angles are equal ($65°$) and co-interior angles are supplementary.\n\n**Step 2: Find the obtuse angle**\nThe acute angles are $65°$ and the obtuse angles are $180° - 65° = 115°$.\n\n**Why other choices are incorrect:**\n• Choice A ($25°$): Not formed by the transversal and parallel lines\n• Choice B ($65°$): This is an acute angle, not an obtuse angle\n• Choice D ($155°$): Not a valid angle in this configuration\n\n**Key concept:** When parallel lines are cut by a transversal, angles come in two groups: acute angles (all equal) and obtuse angles (all equal). Each acute angle plus each obtuse angle $= 180°$.',
          skills: ['Geometry', 'Parallel Lines', 'Angle Relationships']
        },
        {
          id: 'pt12-m2-q6',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'What is the positive solution to $x^2 - 7x + 10 = 0$?\n\nEnter the larger solution.',
          correctAnswer: '5',
          explanation: '**The correct answer is $5$.** Factor the quadratic.\n\n**Step 1: Factor**\nFind two numbers that multiply to $10$ and add to $-7$: $(-2)(-5) = 10$ and $-2 + (-5) = -7$.\n$x^2 - 7x + 10 = (x - 2)(x - 5) = 0$\n\n**Step 2: Solve**\n$x = 2$ or $x = 5$\n\nThe larger solution is $5$.\n\n**Key concept:** Factor $x^2 + bx + c$ by finding numbers that multiply to $c$ and add to $b$.',
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
          explanation: '**Choice C is correct.** Solve the inequality.\n\n**Step 1: Add $3$ to both sides**\n$5x > 20$\n\n**Step 2: Divide by $5$**\n$x > 4$\n\n**Why other choices are incorrect:**\n• Choice A ($x > 2$): While true for solutions, it\'s not the tightest bound\n• Choice B ($x > 3$): Also not the tightest bound\n• Choice D ($x < 4$): Reverses the inequality direction\n\nThe most specific correct answer is $x > 4$.\n\n**Key concept:** Solve linear inequalities just like equations, but remember to flip the sign when multiplying or dividing by a negative number.',
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
          explanation: '**Choice B is correct.** A random sample from the entire population is most representative.\n\n**Why other choices are incorrect:**\n• Choice A: Biased — employees arriving early may have shorter commutes\n• Choice C: Biased — volunteers may differ systematically from non-volunteers (self-selection bias)\n• Choice D: Biased — one department may not represent the whole company\n\n**Key concept:** A random sample gives every member of the population an equal chance of being selected, minimizing bias and producing the most representative results.',
          skills: ['Statistics', 'Sampling']
        },
        {
          id: 'pt12-m2-q9',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'A school is buying notebooks and pens for students. Notebooks cost \\$4 each and pens cost \\$1 each. The school has a budget of \\$100 and needs to buy a total of $40$ items. How many notebooks can the school buy?',
          correctAnswer: '20',
          explanation: '**The correct answer is $20$.** Set up and solve a system.\n\n**Step 1: Define variables**\nLet $n$ = notebooks and $p$ = pens.\n\n**Step 2: Write the system**\n$n + p = 40$ (total items)\n$4n + p = 100$ (total cost)\n\n**Step 3: Solve**\nSubtract the first equation from the second:\n$(4n + p) - (n + p) = 100 - 40$\n$3n = 60$\n$n = 20$\n\n**Verification:** $n = 20$, $p = 20$. Cost: $4(20) + 1(20) = 80 + 20 = 100$ ✓.\n\n**Key concept:** When two conditions relate the same unknowns, set up a system of equations.',
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
          explanation: '**Choice A is correct.** Solve by considering two cases.\n\n**Case 1: $x = 31$**\nLHS: $31 - 31 = 0$\nRHS: $(31 - a)(31 - 31) = (31 - a)(0) = 0$\nSo $x = 31$ is a solution ✓\n\n**Case 2: $x \\neq 31$**\nSince $x - 31 \\neq 0$, divide both sides by $(x - 31)$:\n$$1 = x - a$$\n$$x = a + 1$$\n\nThe solutions are $x = 31$ and $x = a + 1$.\n\n**Verification for $x = a + 1$:**\nLHS: $(a + 1) - 31 = a - 30$\nRHS: $((a + 1) - a)((a + 1) - 31) = (1)(a - 30) = a - 30$ ✓\n\n**Why other choices are incorrect:**\n• Choice B: Uses $a - 1$ instead of $a + 1$ — sign error when dividing\n• Choice C: Uses $a$ instead of $a + 1$ — doesn\'t solve $1 = x - a$ correctly\n• Choice D: Misses $x = 31$ as a solution\n\n**Key concept:** When both sides share a common factor, test whether it gives a solution (it does if both sides become $0$), then divide to find additional solutions.',
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
          explanation: '**Choice B is correct.** Standard deviation measures the spread of data around the mean.\n\n**Step 1: Verify equal means**\nMean of $X$: $\\frac{10+12+14+16+18}{5} = \\frac{70}{5} = 14$\nMean of $Y$: $\\frac{2+8+14+20+26}{5} = \\frac{70}{5} = 14$ ✓\n\n**Step 2: Compare the spread**\nData set $X$: Values range from $10$ to $18$ (range $= 8$), clustered near the mean.\nData set $Y$: Values range from $2$ to $26$ (range $= 24$), much more spread out.\n\nSince $Y$ is more spread out, the standard deviation of $Y$ is greater.\n\n**Why other choices are incorrect:**\n• Choice A: $X$ is less spread out than $Y$\n• Choice C: The spreads are clearly different\n• Choice D: We have all the data, so we can compare\n\n**Key concept:** Standard deviation measures how far data values typically are from the mean. Greater spread $\\Rightarrow$ greater standard deviation.',
          skills: ['Statistics', 'Standard Deviation']
        },
        {
          id: 'pt12-m2-q12',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'In right triangle $RST$, angle $T$ is a right angle. If $RS = 17$ and $RT = 8$, what is the value of $\\sin(R)$? Express your answer as a fraction.',
          correctAnswer: '15/17',
          alternateAnswers: ['0.882'],
          explanation: '**The correct answer is $\\frac{15}{17}$ (approximately $0.882$).** Use the Pythagorean theorem and trigonometric ratios.\n\n**Step 1: Find the missing side**\n$RS$ is the hypotenuse (opposite the right angle $T$), $RT = 8$.\n$ST = \\sqrt{RS^2 - RT^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15$\n\n**Step 2: Find $\\sin(R)$**\n$\\sin(R) = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{ST}{RS} = \\frac{15}{17}$\n\n**Key concept:** In a right triangle, $\\sin(\\theta) = \\frac{\\text{opposite side}}{\\text{hypotenuse}}$. The triple $8, 15, 17$ is a Pythagorean triple.',
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
          explanation: '**Choice B is correct.** Evaluate the composition from the inside out.\n\n**Step 1: Evaluate $g(2)$**\n$g(2) = (2)^2 - 3 = 4 - 3 = 1$\n\n**Step 2: Evaluate $f(g(2)) = f(1)$**\n$f(1) = 2(1) + 1 = 3$\n\n**Why other choices are incorrect:**\n• Choice A ($1$): This is $g(2)$, not $f(g(2))$ — stopped after the first step\n• Choice C ($7$): May compute $f(3)$ or use wrong substitution order\n• Choice D ($22$): May compute $g(f(2)) = g(5) = 22$ — wrong order of composition\n\n**Key concept:** For $f(g(x))$, evaluate the inner function $g(x)$ first, then use that result as the input for $f$.',
          skills: ['Functions', 'Function Composition']
        },
        {
          id: 'pt12-m2-q14',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'A cone has a volume of $100\\pi$ cubic centimeters and a base area of $25\\pi$ square centimeters. What is the slant height, in centimeters, of the cone?',
          correctAnswer: 13,
          explanation: '**The correct answer is $13$.** Find the radius and height, then use the Pythagorean theorem.\n\n**Step 1: Find the radius**\nBase area $= \\pi r^2 = 25\\pi$, so $r^2 = 25$ and $r = 5$.\n\n**Step 2: Find the height**\n$$V = \\frac{1}{3}\\pi r^2 h$$\n$$100\\pi = \\frac{1}{3}(25\\pi)h$$\n$$100 = \\frac{25h}{3}$$\n$$h = 12$$\n\n**Step 3: Find the slant height**\nThe slant height $\\ell$ forms a right triangle with the radius and height:\n$$\\ell = \\sqrt{r^2 + h^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$$\n\n**Verification:** $V = \\frac{1}{3}\\pi(5)^2(12) = \\frac{1}{3}(300\\pi) = 100\\pi$ ✓\n\n**Key concept:** The slant height of a cone is the hypotenuse of the right triangle formed by the radius and the height: $\\ell = \\sqrt{r^2 + h^2}$. The triple $5, 12, 13$ is a Pythagorean triple.',
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
          explanation: '**Choice B is correct.** Analyze how adding a score of $5$ affects the data.\n\n**Current data (12 students):**\nScores: $3, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 8$\n• Mode: $5$ and $6$ (both appear $3$ times — bimodal)\n• Median: average of 6th and 7th values $= \\frac{5+6}{2} = 5.5$\n• Range: $8 - 3 = 5$\n\n**After adding a $5$ (13 students):**\nScores: $3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 7, 8$\n• Mode: $5$ (appears $4$ times, $6$ still appears $3$ times) — now unimodal\n• Median: 7th value $= 5$ (decreased from $5.5$)\n• Range: still $5$\n\n**Why other choices are incorrect:**\n• Choice A: The mode doesn\'t increase in value — it changes from bimodal to the single value $5$\n• Choice C: The median actually decreases from $5.5$ to $5$\n• Choice D: The range stays $5$ since the new score is within the existing range\n\n**Key concept:** Adding a data point equal to one of the modes in a bimodal distribution makes it unimodal.',
          skills: ['Statistics', 'Data Analysis']
        },
        {
          id: 'pt12-m2-q16',
          type: 'fill-in',
          difficulty: 'hard',
          question: '$x^2 + y^2 + 8x - 14y + 40 = 0$\n\nThe equation above defines a circle in the $xy$-plane. What is the radius of the circle?',
          correctAnswer: '5',
          explanation: '**The correct answer is $5$.** Complete the square for both variables.\n\n**Step 1: Group terms**\n$(x^2 + 8x) + (y^2 - 14y) = -40$\n\n**Step 2: Complete the square**\nFor $x$: $x^2 + 8x + 16 = (x + 4)^2$, add $16$ to both sides.\nFor $y$: $y^2 - 14y + 49 = (y - 7)^2$, add $49$ to both sides.\n\n$(x + 4)^2 + (y - 7)^2 = -40 + 16 + 49 = 25$\n\n**Step 3: Read the radius**\n$r^2 = 25$, so $r = 5$.\n\n**Key concept:** To find the radius from $x^2 + y^2 + Dx + Ey + F = 0$, complete the square to get $(x - h)^2 + (y - k)^2 = r^2$, then $r = \\sqrt{r^2}$.',
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
          explanation: '**Choice C is correct.** Use the condition for perpendicular lines.\n\n**Step 1: Find the slope of each line**\n• Line 1: $2x + 5y = 10 \\implies y = -\\frac{2}{5}x + 2$, slope $= -\\frac{2}{5}$\n• Line 2: $bx - 4y = 7 \\implies y = \\frac{b}{4}x - \\frac{7}{4}$, slope $= \\frac{b}{4}$\n\n**Step 2: Apply the perpendicular condition**\nPerpendicular lines have slopes whose product is $-1$:\n$$\\left(-\\frac{2}{5}\\right)\\left(\\frac{b}{4}\\right) = -1$$\n$$-\\frac{2b}{20} = -1$$\n$$\\frac{b}{10} = 1$$\n$$b = 10$$\n\n**Verification:** Slopes are $-\\frac{2}{5}$ and $\\frac{10}{4} = \\frac{5}{2}$. Product: $-\\frac{2}{5} \\times \\frac{5}{2} = -1$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($b = 4$): Gives slope $1$, product $= -\\frac{2}{5} \\neq -1$\n• Choice B ($b = 8$): Gives slope $2$, product $= -\\frac{4}{5} \\neq -1$\n• Choice D ($b = 20$): Gives slope $5$, product $= -2 \\neq -1$\n\n**Key concept:** Two lines are perpendicular when $m_1 \\times m_2 = -1$. The slopes are negative reciprocals of each other.',
          skills: ['Algebra', 'Linear Equations']
        },
        {
          id: 'pt12-m2-q18',
          type: 'fill-in',
          difficulty: 'hard',
          question: '$$\\sqrt{2x + 7} - x = 2$$\n\nWhat is the solution to the given equation?',
          correctAnswer: 1,
          explanation: '**The correct answer is $1$.** Isolate the radical, square both sides, and check for extraneous solutions.\n\n**Step 1: Isolate the radical**\n$$\\sqrt{2x + 7} = x + 2$$\n\n**Step 2: Square both sides**\n$$2x + 7 = (x + 2)^2 = x^2 + 4x + 4$$\n\n**Step 3: Solve the quadratic**\n$$0 = x^2 + 2x - 3$$\n$$0 = (x + 3)(x - 1)$$\n$$x = -3 \\quad \\text{or} \\quad x = 1$$\n\n**Step 4: Check for extraneous solutions**\n• $x = -3$: $\\sqrt{2(-3) + 7} - (-3) = \\sqrt{1} + 3 = 1 + 3 = 4 \\neq 2$ ✗ (extraneous)\n• $x = 1$: $\\sqrt{2(1) + 7} - 1 = \\sqrt{9} - 1 = 3 - 1 = 2$ ✓\n\nThe only solution is $x = 1$.\n\n**Key concept:** When solving radical equations by squaring, always check solutions in the original equation. Squaring can introduce extraneous solutions that don\'t satisfy the original equation.',
          skills: ['Advanced Math', 'Radical Equations']
        },
        {
          id: 'pt12-m2-q19',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'In the $xy$-plane, the circle $x^2 + y^2 = 25$ and the line $y = x + 1$ intersect at two points. What is the sum of the $x$-coordinates of these two points?',
          correctAnswer: -1,
          explanation: '**The correct answer is $-1$.** Substitute the linear equation into the circle equation.\n\n**Step 1: Substitute $y = x + 1$**\n$$x^2 + (x + 1)^2 = 25$$\n$$x^2 + x^2 + 2x + 1 = 25$$\n$$2x^2 + 2x - 24 = 0$$\n$$x^2 + x - 12 = 0$$\n\n**Step 2: Solve**\n$$(x + 4)(x - 3) = 0$$\n$$x = -4 \\quad \\text{or} \\quad x = 3$$\n\n**Step 3: Find the sum**\n$$-4 + 3 = -1$$\n\n**Verification:**\n• $(x, y) = (-4, -3)$: $(-4)^2 + (-3)^2 = 16 + 9 = 25$ ✓ and $-3 = -4 + 1$ ✓\n• $(x, y) = (3, 4)$: $3^2 + 4^2 = 9 + 16 = 25$ ✓ and $4 = 3 + 1$ ✓\n\n**Alternative:** By Vieta\'s formulas, the sum of roots of $x^2 + x - 12 = 0$ is $-\\frac{b}{a} = -\\frac{1}{1} = -1$.\n\n**Key concept:** To find intersection points of a circle and a line, substitute one equation into the other and solve the resulting quadratic.',
          skills: ['Advanced Math', 'Systems of Equations']
        },
        {
          id: 'pt12-m2-q20',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'If $3^a = 5$ and $3^b = 45$, what is the value of $b - a$?',
          correctAnswer: 2,
          explanation: '**The correct answer is $2$.** Use exponent properties to relate $3^b$ and $3^a$.\n\n**Step 1: Express $3^{b-a}$ using the quotient rule**\n$$3^{b-a} = \\frac{3^b}{3^a}$$\n\n**Step 2: Substitute the given values**\n$$3^{b-a} = \\frac{45}{5} = 9$$\n\n**Step 3: Solve for $b - a$**\n$$3^{b-a} = 9 = 3^2$$\n$$b - a = 2$$\n\n**Verification:** If $3^a = 5$ and $b - a = 2$, then $3^b = 3^{a+2} = 3^a \\cdot 3^2 = 5 \\cdot 9 = 45$ ✓\n\n**Key concept:** The quotient rule $\\frac{a^m}{a^n} = a^{m-n}$ allows you to find the difference of exponents without solving for each individually. This is especially useful when the exact values of $a$ and $b$ are irrational.',
          skills: ['Advanced Math', 'Exponential Equations']
        },
        {
          id: 'pt12-m2-q21',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The price of an item was increased by $20\\%$, and then the new price was decreased by $25\\%$. What is the overall percent change from the original price? Enter your answer as a negative number if the price decreased.',
          correctAnswer: '-10',
          explanation: '**The correct answer is $-10$ (a $10\\%$ decrease).** Track the price through both changes.\n\n**Step 1: Increase by $20\\%$**\nLet the original price be $100$.\nAfter $20\\%$ increase: $100 \\times 1.20 = 120$.\n\n**Step 2: Decrease by $25\\%$**\nAfter $25\\%$ decrease: $120 \\times 0.75 = 90$.\n\n**Step 3: Calculate the overall change**\nOverall change: $\\frac{90 - 100}{100} \\times 100\\% = -10\\%$\n\nThe price decreased by $10\\%$.\n\n**Key concept:** Successive percentage changes are multiplicative, not additive. A $20\\%$ increase followed by a $25\\%$ decrease is NOT a $5\\%$ decrease — it\'s $1.20 \\times 0.75 = 0.90$, which is a $10\\%$ decrease.',
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
          explanation: '**Choice C is correct.** For no real solutions, the discriminant of the combined equation must be negative.\n\n**Step 1: Set the equations equal**\n$x^2 - 4x + k = 3$\n$x^2 - 4x + (k - 3) = 0$\n\n**Step 2: Apply the discriminant condition**\n$b^2 - 4ac < 0$\n$(-4)^2 - 4(1)(k - 3) < 0$\n$16 - 4k + 12 < 0$\n$28 < 4k$\n$k > 7$\n\n**Step 3: Find the least integer**\nSince $k > 7$ and $k$ must be a positive integer, the least value is $k = 8$.\n\n**Verification:** $k = 8$: discriminant $= 16 - 4(5) = -4 < 0$ ✓ (no real solutions).\n$k = 7$: discriminant $= 16 - 4(4) = 0$ (exactly one solution, not "no solutions").\n\n**Key concept:** For no real solutions, the discriminant $b^2 - 4ac$ must be strictly negative. When $b^2 - 4ac = 0$, there is exactly one solution.',
          skills: ['Quadratic Equations', 'Systems of Equations', 'Discriminant']
        }
      ]
    }
  ]
};
