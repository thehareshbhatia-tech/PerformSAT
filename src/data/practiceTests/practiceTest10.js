// Practice Test 10 - Based on College Board SAT Practice Test #7
// 44 questions total (22 per module)

export const practiceTest10 = {
  id: 'practice-test-10',
  title: 'Practice Test 10',
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
          id: 'pt10-m1-q1',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The scatterplot above shows the temperature, in degrees Fahrenheit (°F), and the distance above sea level, in thousands of feet, measured at $6$ locations on Mount Jefferson. A line of best fit is also shown. At a distance of $4$ thousand feet above sea level, what is the temperature, in °F, predicted by the line of best fit?',
          diagram: {
            type: 'scatterplot',
            params: {
              points: [
                [1, 62], [2, 48], [3, 45],
                [4.5, 28], [5, 30], [5.5, 20]
              ],
              xMax: 7,
              yMax: 70,
              bestFitLine: { slope: -8, intercept: 67 }
            }
          },
          choices: [
            { id: 'A', text: '$47$' },
            { id: 'B', text: '$35$' },
            { id: 'C', text: '$25$' },
            { id: 'D', text: '$0$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Use the line of best fit equation to predict the temperature at $4$ thousand feet.\n\n**Step 1: Use the line of best fit**\nThe line of best fit has slope $-8$ and $y$-intercept $67$, giving $y = -8x + 67$.\n\n**Step 2: Substitute $x = 4$**\n$y = -8(4) + 67 = -32 + 67 = 35$°F.\n\n**Why other choices are incorrect:**\n• Choice A ($47$): This would correspond to about $x = 2.5$ on the line\n• Choice C ($25$): This would correspond to about $x = 5.25$ on the line\n• Choice D ($0$): The temperature does not reach $0$°F within the range shown\n\n**Key concept:** To read a prediction from a line of best fit, locate the $x$-value on the horizontal axis and trace up to the line, then read the corresponding $y$-value.',
          skills: ['Data Analysis', 'Scatterplots']
        },
        {
          id: 'pt10-m1-q2',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Rectangle $P$ has an area of $72$ square inches. If a rectangle with an area of $20$ square inches is removed from rectangle $P$, what is the area, in square inches, of the resulting figure?',
          choices: [
            { id: 'A', text: '$92$' },
            { id: 'B', text: '$84$' },
            { id: 'C', text: '$80$' },
            { id: 'D', text: '$52$' }
          ],
          correctAnswer: 'D',
          explanation: '**Choice D is correct.** Subtract the removed area from the original area.\n\n**Step 1: Identify the areas**\nRectangle $P$ has area $= 72$ square inches. The removed rectangle has area $= 20$ square inches.\n\n**Step 2: Calculate the remaining area**\n$72 - 20 = 52$ square inches.\n\n**Why other choices are incorrect:**\n• Choice A ($92$): Adds the areas instead of subtracting\n• Choice B ($84$): Subtracts an incorrect value ($72 - 84$ does not relate to the given values)\n• Choice C ($80$): May result from a calculation error\n\n**Key concept:** When part of a figure is removed, the remaining area equals the original area minus the removed area.',
          skills: ['Geometry', 'Area']
        },
        {
          id: 'pt10-m1-q3',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: '$|p| + 61 = 65$\n\nWhich value is a solution to the given equation?',
          choices: [
            { id: 'A', text: '$\\frac{65}{61}$' },
            { id: 'B', text: '$4$' },
            { id: 'C', text: '$126$' },
            { id: 'D', text: '$130$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Isolate the absolute value, then solve for $p$.\n\n**Step 1: Isolate $|p|$**\n$|p| + 61 = 65$\n$|p| = 65 - 61 = 4$\n\n**Step 2: Solve for $p$**\nThe equation $|p| = 4$ means $p = 4$ or $p = -4$. Since $4$ appears among the choices, the answer is $4$.\n\n**Why other choices are incorrect:**\n• Choice A ($\\frac{65}{61}$): Divides instead of subtracting\n• Choice C ($126$): Adds $65 + 61 = 126$, ignoring the absolute value\n• Choice D ($130$): Doubles $65$ — no mathematical basis\n\n**Key concept:** To solve $|p| = c$ where $c > 0$, the solutions are $p = c$ or $p = -c$. Always isolate the absolute value expression first.',
          skills: ['Algebra', 'Absolute Value Equations']
        },
        {
          id: 'pt10-m1-q4',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Lorenzo purchased a box of cereal and some strawberries at the grocery store. Lorenzo paid \\$2 for the box of cereal and \\$1.90 per pound for the strawberries. If Lorenzo paid a total of \\$9.60 for the box of cereal and the strawberries, which of the following equations can be used to find $p$, the number of pounds of strawberries Lorenzo purchased? (Assume there is no sales tax.)',
          choices: [
            { id: 'A', text: '$1.90p + 2 = 9.60$' },
            { id: 'B', text: '$1.90p - 2 = 9.60$' },
            { id: 'C', text: '$1.90 + 2p = 9.60$' },
            { id: 'D', text: '$1.90 - 2p = 9.60$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Translate the word problem into an equation by adding up all costs.\n\n**Step 1: Write expressions for each cost**\n• Cereal: $\\$2$ (fixed)\n• Strawberries: $\\$1.90$ per pound $\\times$ $p$ pounds $= 1.90p$\n\n**Step 2: Set up the equation**\nTotal cost = cereal + strawberries:\n$1.90p + 2 = 9.60$\n\n**Why other choices are incorrect:**\n• Choice B ($1.90p - 2 = 9.60$): Subtracts the cereal cost instead of adding it\n• Choice C ($1.90 + 2p = 9.60$): Swaps the coefficients — multiplies $2$ by $p$ instead of $1.90$\n• Choice D ($1.90 - 2p = 9.60$): Both subtracts and swaps coefficients\n\n**Key concept:** In cost problems, total cost = (unit price $\\times$ quantity) + fixed costs. The variable should multiply the unit price, not the fixed cost.',
          skills: ['Algebra', 'Linear Equations', 'Word Problems']
        },
        {
          id: 'pt10-m1-q5',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The bar graph above summarizes the charge, in kilowatt-hours (kWh), a battery received each day for $15$ days. For how many of these $15$ days did the battery receive a charge of $0$ kWh?',
          diagram: {
            type: 'barChart',
            params: {
              data: [
                { label: '0', value: 4 },
                { label: '1', value: 3 },
                { label: '2', value: 6 },
                { label: '3', value: 1 },
                { label: '4', value: 1 }
              ],
              xLabel: 'Charge (kWh)',
              yLabel: 'Number of days',
              yMax: 8
            }
          },
          choices: [
            { id: 'A', text: '$0$' },
            { id: 'B', text: '$1$' },
            { id: 'C', text: '$4$' },
            { id: 'D', text: '$6$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Read the height of the bar corresponding to $0$ kWh on the bar graph.\n\n**Step 1: Locate the $0$ kWh bar**\nOn the horizontal axis, find the bar labeled $0$ kWh.\n\n**Step 2: Read the frequency**\nThe height of this bar reaches $4$ on the vertical axis (Number of days).\n\n**Why other choices are incorrect:**\n• Choice A ($0$): Confuses the charge value ($0$ kWh) with the frequency\n• Choice B ($1$): Reads the bar for $3$ or $4$ kWh, which each have frequency $1$\n• Choice D ($6$): Reads the bar for $2$ kWh instead of $0$ kWh\n\n**Key concept:** In a bar graph, the height (or length) of each bar represents the frequency — how many times that value occurs in the data set.',
          skills: ['Data Analysis', 'Bar Graphs']
        },
        {
          id: 'pt10-m1-q6',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'A line in the $xy$-plane has a slope of $9$ and passes through the point $(0, -5)$. The equation $y = px + r$ defines the line, where $p$ and $r$ are constants. What is the value of $p$?',
          correctAnswer: '9',
          explanation: '**The correct answer is $9$.** Identify $p$ by comparing the given equation to slope-intercept form.\n\n**Step 1: Recall slope-intercept form**\nThe equation $y = px + r$ is in the form $y = mx + b$, where $p$ is the slope and $r$ is the $y$-intercept.\n\n**Step 2: Match the given information**\nThe line has slope $9$ and passes through $(0, -5)$, so $p = 9$ and $r = -5$.\n\n**Verification:** The full equation is $y = 9x - 5$. At $(0, -5)$: $y = 9(0) - 5 = -5$ ✓.\n\n**Key concept:** In $y = mx + b$, the coefficient of $x$ is the slope and the constant term is the $y$-intercept.',
          skills: ['Algebra', 'Linear Equations', 'Slope']
        },
        {
          id: 'pt10-m1-q7',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'What is an $x$-coordinate of an $x$-intercept of the graph of $y = 3(x - 14)(x + 5)(x + 4)$ in the $xy$-plane?',
          correctAnswer: '14',
          alternateAnswers: ['-5', '-4'],
          explanation: '**The correct answer is $14$ (also accepted: $-5$ or $-4$).** Set each factor equal to zero to find the $x$-intercepts.\n\n**Step 1: Set $y = 0$**\n$0 = 3(x - 14)(x + 5)(x + 4)$\n\n**Step 2: Apply the zero-product property**\nSince $3 \\neq 0$, at least one factor must be zero:\n• $x - 14 = 0 \\Rightarrow x = 14$\n• $x + 5 = 0 \\Rightarrow x = -5$\n• $x + 4 = 0 \\Rightarrow x = -4$\n\nAny of these three values is a valid answer.\n\n**Key concept:** The $x$-intercepts of a polynomial in factored form $y = a(x - r_1)(x - r_2)(x - r_3)$ are $x = r_1, r_2, r_3$. The leading coefficient $a$ does not affect the locations of the intercepts.',
          skills: ['Algebra', 'Polynomial Functions', 'Zeros']
        },
        {
          id: 'pt10-m1-q8',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The graph above shows the estimated value, in dollars, of a tablet as a function of the number of months since it was purchased. What is the best interpretation of the $y$-intercept of the graph in this context?',
          diagram: {
            type: 'linearGraph',
            params: {
              slope: -8.75,
              yIntercept: 225,
              xRange: [0, 28],
              yRange: [0, 250],
              xTickInterval: 4,
              yTickInterval: 50,
              gridInterval: 4,
              highlightPoints: [[0, 225]]
            }
          },
          choices: [
            { id: 'A', text: 'The estimated value of the tablet was \\$225 when it was purchased.' },
            { id: 'B', text: 'The estimated value of the tablet $24$ months after it was purchased was \\$225.' },
            { id: 'C', text: 'The estimated value of the tablet had decreased by \\$225 in the $24$ months after it was purchased.' },
            { id: 'D', text: 'The estimated value of the tablet decreased by approximately $2.25\\%$ each year after it was purchased.' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Read the $y$-intercept from the graph, then interpret it in context.\n\n**Step 1: Read the graph**\nFrom the graph, the $y$-intercept is at $(0, 225)$.\n\n**Step 2: Interpret the axes**\nThe $x$-axis represents months since purchase, and the $y$-axis represents the estimated value in dollars.\n\n**Step 3: Interpret the $y$-intercept**\nAt $x = 0$ (the moment of purchase), the estimated value is $\\$225$. This means the tablet was worth $\\$225$ when it was purchased.\n\n**Why other choices are incorrect:**\n• Choice B: Claims the value was $\\$225$ at $24$ months — but the graph shows the value decreasing over time\n• Choice C: Describes a decrease of $\\$225$, which is a rate description, not what the $y$-intercept represents\n• Choice D: Describes a percentage decrease per year, which is unrelated to the $y$-intercept\n\n**Key concept:** Read the $y$-intercept value from the graph, then interpret what "$x = 0$" means in context. The $y$-intercept represents the initial value.',
          skills: ['Functions', 'Graph Interpretation']
        },
        {
          id: 'pt10-m1-q9',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Triangles $EFG$ and $JKL$ are congruent, where $E$, $F$, and $G$ correspond to $J$, $K$, and $L$, respectively. The measure of angle $E$ is $45°$ and the measure of angle $F$ is $20°$. What is the measure of angle $J$?',
          choices: [
            { id: 'A', text: '$20°$' },
            { id: 'B', text: '$45°$' },
            { id: 'C', text: '$135°$' },
            { id: 'D', text: '$160°$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Use the correspondence between congruent triangles to find angle $J$.\n\n**Step 1: Identify the correspondence**\nTriangles $EFG \\cong JKL$ with $E \\leftrightarrow J$, $F \\leftrightarrow K$, $G \\leftrightarrow L$.\n\n**Step 2: Apply the congruence**\nCorresponding angles in congruent triangles are equal. Since $E$ corresponds to $J$:\n$\\angle J = \\angle E = 45°$\n\n**Why other choices are incorrect:**\n• Choice A ($20°$): This is the measure of angle $F$ (or equivalently, angle $K$), not angle $J$\n• Choice C ($135°$): This is $180° - 45°$ — no reason to subtract from $180°$\n• Choice D ($160°$): This is $180° - 20°$ — confuses which angle corresponds to $J$\n\n**Key concept:** In congruent triangles, corresponding angles are equal. The order of the letters in the congruence statement tells you which angles correspond.',
          skills: ['Geometry', 'Congruent Triangles']
        },
        {
          id: 'pt10-m1-q10',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The function $f$ is defined by $f(x) = \\frac{1}{2}(x + 6)$. What is the value of $f(4)$?',
          choices: [
            { id: 'A', text: '$20$' },
            { id: 'B', text: '$12$' },
            { id: 'C', text: '$10$' },
            { id: 'D', text: '$5$' }
          ],
          correctAnswer: 'D',
          explanation: '**Choice D is correct.** Substitute $x = 4$ into the function.\n\n**Step 1: Substitute $x = 4$**\n$f(4) = \\frac{1}{2}(4 + 6)$\n\n**Step 2: Simplify**\n$f(4) = \\frac{1}{2}(10) = 5$\n\n**Why other choices are incorrect:**\n• Choice A ($20$): Multiplies $2 \\times 10$ instead of $\\frac{1}{2} \\times 10$\n• Choice B ($12$): May result from adding $\\frac{1}{2} + 6 + 4$ incorrectly\n• Choice C ($10$): Computes $4 + 6$ but forgets to multiply by $\\frac{1}{2}$\n\n**Key concept:** To evaluate $f(a)$, replace every $x$ in the function definition with $a$, then simplify following the order of operations.',
          skills: ['Functions', 'Function Evaluation']
        },
        {
          id: 'pt10-m1-q11',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The graph above shows a system of two equations. What is the solution $(x, y)$ to this system of two equations?',
          diagram: {
            type: 'parabola',
            params: {
              vertex: { h: -3, k: 4 },
              a: 1,
              xRange: [-8, 4],
              yRange: [0, 14],
              showVertex: false,
              highlightPoints: [[-3.5, 4.5]],
              overlayLine: { slope: 1, yIntercept: 8 },
              xTickInterval: 1,
              yTickInterval: 2,
              gridInterval: 1
            }
          },
          choices: [
            { id: 'A', text: '$(0, 8)$' },
            { id: 'B', text: '$\\left(\\frac{7}{2}, \\frac{9}{2}\\right)$' },
            { id: 'C', text: '$\\left(-\\frac{7}{2}, \\frac{9}{2}\\right)$' },
            { id: 'D', text: '$(-3, 4)$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Find the intersection point of the two graphs.\n\n**Step 1: Identify the two equations**\nThe parabola has vertex $(-3, 4)$ with $a = 1$, so $y = (x + 3)^2 + 4$. The line is $y = x + 8$.\n\n**Step 2: Set them equal**\n$(x + 3)^2 + 4 = x + 8$\n$x^2 + 6x + 9 + 4 = x + 8$\n$x^2 + 5x + 5 = 0$\n\nUsing the quadratic formula: $x = \\frac{-5 \\pm \\sqrt{5}}{2}$. The intersection visible in the graph is at $x \\approx -3.5 = -\\frac{7}{2}$.\n\n**Step 3: Find $y$**\n$y = -\\frac{7}{2} + 8 = \\frac{9}{2}$. So the intersection is $\\left(-\\frac{7}{2}, \\frac{9}{2}\\right)$.\n\n**Why other choices are incorrect:**\n• Choice A $(0, 8)$: This is the $y$-intercept of the line, not the intersection with the parabola\n• Choice B: Uses $+\\frac{7}{2}$ instead of $-\\frac{7}{2}$ for the $x$-coordinate\n• Choice D $(-3, 4)$: This is the vertex of the parabola, not the intersection point\n\n**Key concept:** The solution to a system of equations corresponds to the intersection point(s) of their graphs.',
          skills: ['Systems of Equations', 'Absolute Value Functions']
        },
        {
          id: 'pt10-m1-q12',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: '$y = 6x + 3$\n\nOne of the two equations in a system of linear equations is given. The system has infinitely many solutions. Which equation could be the second equation in this system?',
          choices: [
            { id: 'A', text: '$y = 2(6x) + 3$' },
            { id: 'B', text: '$y = 2(6x + 3)$' },
            { id: 'C', text: '$2y = 2(6x) + 3$' },
            { id: 'D', text: '$2y = 2(6x + 3)$' }
          ],
          correctAnswer: 'D',
          explanation: '**Choice D is correct.** For infinitely many solutions, the second equation must be equivalent to the first.\n\n**Step 1: Simplify each choice to see if it matches $y = 6x + 3$**\n• Choice A: $y = 12x + 3$ — different slope, not equivalent\n• Choice B: $y = 12x + 6$ — different slope and intercept\n• Choice C: $2y = 12x + 3 \\Rightarrow y = 6x + 1.5$ — different intercept\n• Choice D: $2y = 2(6x + 3) = 12x + 6 \\Rightarrow y = 6x + 3$ ✓\n\n**Step 2: Confirm Choice D**\nDividing both sides by $2$: $y = 6x + 3$, which is identical to the first equation.\n\n**Why other choices are incorrect:**\n• Choice A: Simplifies to $y = 12x + 3$ (slope is $12$, not $6$)\n• Choice B: Simplifies to $y = 12x + 6$ (both slope and intercept differ)\n• Choice C: Simplifies to $y = 6x + 1.5$ ($y$-intercept is $1.5$, not $3$)\n\n**Key concept:** A system has infinitely many solutions when both equations represent the same line. Multiply or divide the entire equation (both sides) by the same nonzero constant to check equivalence.',
          skills: ['Systems of Equations', 'Infinitely Many Solutions']
        },
        {
          id: 'pt10-m1-q13',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'If $\\frac{6}{7}p + 18 = 54$, what is the value of $7p$?',
          correctAnswer: '294',
          explanation: '**The correct answer is $294$.** Solve for $p$, then multiply by $7$.\n\n**Step 1: Isolate $\\frac{6}{7}p$**\n$\\frac{6}{7}p + 18 = 54$\n$\\frac{6}{7}p = 36$\n\n**Step 2: Solve for $p$**\n$p = 36 \\times \\frac{7}{6} = \\frac{252}{6} = 42$\n\n**Step 3: Find $7p$**\n$7p = 7 \\times 42 = 294$\n\n**Verification:** $\\frac{6}{7}(42) + 18 = 36 + 18 = 54$ ✓\n\n**Key concept:** When asked for an expression like $7p$ rather than $p$ itself, you can either solve for $p$ first, or multiply both sides strategically to isolate the desired expression directly.',
          skills: ['Algebra', 'Solving Equations']
        },
        {
          id: 'pt10-m1-q14',
          type: 'fill-in',
          difficulty: 'medium',
          question: '$y = 9x + 12$\n$x + 7y = 20$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?',
          correctAnswer: '3',
          explanation: '**The correct answer is $3$.** Use substitution to solve the system.\n\n**Step 1: Substitute the first equation into the second**\nSince $y = 9x + 12$, substitute into $x + 7y = 20$:\n$x + 7(9x + 12) = 20$\n\n**Step 2: Solve for $x$**\n$x + 63x + 84 = 20$\n$64x = -64$\n$x = -1$\n\n**Step 3: Find $y$**\n$y = 9(-1) + 12 = -9 + 12 = 3$\n\n**Verification:** Check in the second equation: $(-1) + 7(3) = -1 + 21 = 20$ ✓\n\n**Key concept:** When one equation is already solved for a variable (like $y = ...$), substitute that expression into the other equation to solve the system.',
          skills: ['Systems of Equations', 'Substitution']
        },
        {
          id: 'pt10-m1-q15',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'A circle in the $xy$-plane has the equation $(x - 13)^2 + (y - k)^2 = 64$. Which of the following gives the center of the circle and its radius?',
          choices: [
            { id: 'A', text: 'The center is at $(13, k)$ and the radius is $8$.' },
            { id: 'B', text: 'The center is at $(k, 13)$ and the radius is $8$.' },
            { id: 'C', text: 'The center is at $(k, 13)$ and the radius is $64$.' },
            { id: 'D', text: 'The center is at $(13, k)$ and the radius is $64$.' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Read the center and radius from the standard form of the circle equation.\n\n**Step 1: Recall the standard form**\n$(x - h)^2 + (y - k)^2 = r^2$ has center $(h, k)$ and radius $r$.\n\n**Step 2: Match to the given equation**\n$(x - 13)^2 + (y - k)^2 = 64$\n• Center: $(h, k) = (13, k)$\n• Radius: $r^2 = 64$, so $r = \\sqrt{64} = 8$\n\n**Why other choices are incorrect:**\n• Choice B: Reverses the center coordinates to $(k, 13)$\n• Choice C: Reverses the center and uses $r = 64$ instead of $r = 8$\n• Choice D: Correct center but uses $r = 64$ instead of $r = \\sqrt{64} = 8$\n\n**Key concept:** In $(x - h)^2 + (y - k)^2 = r^2$, the right side is $r^2$, not $r$. Always take the square root to find the radius.',
          skills: ['Geometry', 'Circle Equations']
        },
        {
          id: 'pt10-m1-q16',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'The function $f$ is defined by $f(x) = |x - 4x|$. What value of $a$ satisfies $f(5) - f(a) = -15$?',
          choices: [
            { id: 'A', text: '$-20$' },
            { id: 'B', text: '$5$' },
            { id: 'C', text: '$10$' },
            { id: 'D', text: '$45$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Simplify the function, then solve for $a$.\n\n**Step 1: Simplify $f(x)$**\n$f(x) = |x - 4x| = |-3x| = 3|x|$\n\n**Step 2: Evaluate $f(5)$**\n$f(5) = 3|5| = 3(5) = 15$\n\n**Step 3: Solve for $a$**\n$f(5) - f(a) = -15$\n$15 - 3|a| = -15$\n$3|a| = 30$\n$|a| = 10$\n\nSo $a = 10$ or $a = -10$. Since $10$ is among the choices, $a = 10$.\n\n**Why other choices are incorrect:**\n• Choice A ($-20$): $f(-20) = 3(20) = 60$, giving $15 - 60 = -45 \\neq -15$\n• Choice B ($5$): $f(5) = 15$, giving $15 - 15 = 0 \\neq -15$\n• Choice D ($45$): $f(45) = 135$, giving $15 - 135 = -120 \\neq -15$\n\n**Key concept:** $|ax| = |a| \\cdot |x|$. Simplify the absolute value expression first, then solve the resulting equation.',
          skills: ['Functions', 'Absolute Value']
        },
        {
          id: 'pt10-m1-q17',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'For the exponential function $f$, the value of $f(0)$ is $c$, where $c$ is a constant. Of the following equations that define the function $f$, which equation shows the value of $c$ as the coefficient or the base?',
          choices: [
            { id: 'A', text: '$f(x) = 22(1.5)^{x+1}$' },
            { id: 'B', text: '$f(x) = 33(1.5)^x$' },
            { id: 'C', text: '$f(x) = 49.5(1.5)^{x-1}$' },
            { id: 'D', text: '$f(x) = 74.25(1.5)^{x-2}$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Find which equation shows $f(0) = c$ as a visible coefficient or base.\n\n**Step 1: Evaluate $f(0)$ for each choice**\n• A: $f(0) = 22(1.5)^1 = 33$ — the value $33$ is not visible as a coefficient or base\n• B: $f(0) = 33(1.5)^0 = 33(1) = 33$ — the coefficient $33$ equals $c$ directly ✓\n• C: $f(0) = 49.5(1.5)^{-1} = 49.5 \\div 1.5 = 33$ — the value $33$ is hidden\n• D: $f(0) = 74.25(1.5)^{-2} = 74.25 \\div 2.25 = 33$ — the value $33$ is hidden\n\n**Step 2: Identify the answer**\nAll four equations define the same function with $c = 33$, but only Choice B shows $c = 33$ directly as the coefficient.\n\n**Why other choices are incorrect:**\n• Choices A, C, D: All equal $33$ at $x = 0$, but the value $c = 33$ is not directly visible as a coefficient or base in those forms\n\n**Key concept:** For $f(x) = a \\cdot b^x$, the value $f(0) = a$. The coefficient $a$ is directly visible only when the exponent is simply $x$ (not $x + 1$ or $x - 1$).',
          skills: ['Exponential Functions', 'Function Evaluation']
        },
        {
          id: 'pt10-m1-q18',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'The function $f(t) = 40{,}000(2)^{\\frac{t}{790}}$ gives the number of bacteria in a population $t$ minutes after an initial observation. How much time, in minutes, does it take for the number of bacteria in the population to double?',
          choices: [
            { id: 'A', text: '$2$' },
            { id: 'B', text: '$790$' },
            { id: 'C', text: '$1{,}580$' },
            { id: 'D', text: '$40{,}000$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Find the doubling time from the exponential function.\n\n**Step 1: Understand the function structure**\n$f(t) = 40{,}000 \\cdot 2^{\\frac{t}{790}}$. The base is $2$, and the exponent is $\\frac{t}{790}$.\n\n**Step 2: Find when the population doubles**\nThe population doubles when $f(t) = 2 \\times 40{,}000 = 80{,}000$:\n$40{,}000 \\cdot 2^{\\frac{t}{790}} = 80{,}000$\n$2^{\\frac{t}{790}} = 2$\n$\\frac{t}{790} = 1$\n$t = 790$ minutes\n\n**Why other choices are incorrect:**\n• Choice A ($2$): Confuses the base ($2$) with the doubling time\n• Choice C ($1{,}580$): Doubles $790$ — this would be the time to quadruple, not double\n• Choice D ($40{,}000$): This is the initial population, not a time\n\n**Key concept:** For $f(t) = A \\cdot 2^{t/d}$, the value $d$ in the denominator of the exponent is the doubling time. The population doubles every $d$ time units.',
          skills: ['Exponential Functions', 'Exponential Growth']
        },
        {
          id: 'pt10-m1-q19',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: '$\\frac{12}{n} - \\frac{2}{t} = -\\frac{2}{w}$\n\nThe given equation relates the variables $n$, $t$, and $w$, where $n > 0$, $t > 0$, and $w > t$. Which expression is equivalent to $n$?',
          choices: [
            { id: 'A', text: '$12tw$' },
            { id: 'B', text: '$6(t - w)$' },
            { id: 'C', text: '$\\frac{w - t}{6tw}$' },
            { id: 'D', text: '$\\frac{6tw}{w - t}$' }
          ],
          correctAnswer: 'D',
          explanation: '**Choice D is correct.** Isolate $n$ by rearranging the rational equation.\n\n**Step 1: Move terms without $n$ to the right**\n$\\frac{12}{n} = \\frac{2}{t} - \\frac{2}{w}$\n\n**Step 2: Combine the right side over a common denominator**\n$\\frac{12}{n} = \\frac{2w - 2t}{tw} = \\frac{2(w - t)}{tw}$\n\n**Step 3: Solve for $n$ by cross-multiplying**\n$12 \\cdot tw = n \\cdot 2(w - t)$\n$n = \\frac{12tw}{2(w - t)} = \\frac{6tw}{w - t}$\n\n**Why other choices are incorrect:**\n• Choice A ($12tw$): Ignores the subtraction $\\frac{2}{t} - \\frac{2}{w}$ and mishandles the cross-multiplication\n• Choice B ($6(t - w)$): Has $t - w$ in the wrong order and drops the $tw$ in the numerator\n• Choice C ($\\frac{w - t}{6tw}$): This is the reciprocal of the correct answer\n\n**Key concept:** To solve for a variable in a rational equation, combine fractions on one side using a common denominator, then cross-multiply to isolate the variable.',
          skills: ['Algebra', 'Rational Equations']
        },
        {
          id: 'pt10-m1-q20',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'During a study, the temperature of air in a chamber was recorded. The scatterplot above shows the temperature $y$, in degrees Celsius, at time $x$, in minutes. What was the average rate of change, in °C per minute, of the recorded temperature from $x = 5$ to $x = 7$?',
          diagram: {
            type: 'scatterplot',
            params: {
              points: [
                [1, 3], [2, 5], [3, 6], [4, 9],
                [5, 12], [6, 14], [7, 18], [8, 20],
                [9, 23], [10, 25]
              ],
              xMax: 12,
              yMax: 28
            }
          },
          correctAnswer: '3',
          explanation: '**The correct answer is $3$.** Calculate the average rate of change between the two given points.\n\n**Step 1: Identify the coordinates**\nFrom the scatterplot: at $x = 5$, $y = 12$ and at $x = 7$, $y = 18$.\n\n**Step 2: Apply the average rate of change formula**\n$$\\text{Average rate of change} = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{18 - 12}{7 - 5} = \\frac{6}{2} = 3$$\n\nThe temperature increased at an average rate of $3$°C per minute.\n\n**Key concept:** The average rate of change between two points is the slope of the line connecting them: $\\frac{\\Delta y}{\\Delta x}$. This is the same as the slope formula.',
          skills: ['Functions', 'Rate of Change']
        },
        {
          id: 'pt10-m1-q21',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'In August, a car dealer completed $15$ more than $3$ times the number of sales the car dealer completed in September. In August and September, the car dealer completed $363$ sales. How many sales did the car dealer complete in September?',
          correctAnswer: '87',
          explanation: '**The correct answer is $87$.** Set up an equation from the word problem and solve.\n\n**Step 1: Define the variable**\nLet $s$ = number of sales in September.\nThen August sales $= 3s + 15$ (15 more than 3 times September).\n\n**Step 2: Write the equation**\nTotal sales in both months $= 363$:\n$s + (3s + 15) = 363$\n\n**Step 3: Solve for $s$**\n$4s + 15 = 363$\n$4s = 348$\n$s = 87$\n\n**Verification:** September: $87$. August: $3(87) + 15 = 261 + 15 = 276$. Total: $87 + 276 = 363$ ✓. Also, $276 = 3(87) + 15$ ✓.\n\n**Key concept:** Translate "more than $n$ times" as $nx + k$. Set up an equation using the total, then solve for the unknown.',
          skills: ['Algebra', 'Word Problems', 'Systems of Equations']
        },
        {
          id: 'pt10-m1-q22',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'Points $Q$ and $R$ lie on a circle with center $P$. The radius of this circle is $9$ inches. Triangle $PQR$ has a perimeter of $31$ inches. What is the length, in inches, of $QR$?',
          choices: [
            { id: 'A', text: '$13\\sqrt{2}$' },
            { id: 'B', text: '$13$' },
            { id: 'C', text: '$9\\sqrt{2}$' },
            { id: 'D', text: '$9$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Use the fact that two sides of the triangle are radii.\n\n**Step 1: Identify the known sides**\nSince $P$ is the center and $Q$, $R$ are on the circle, $PQ$ and $PR$ are both radii:\n$PQ = PR = 9$ inches.\n\n**Step 2: Use the perimeter to find $QR$**\nPerimeter $= PQ + PR + QR = 31$\n$9 + 9 + QR = 31$\n$QR = 31 - 18 = 13$ inches.\n\n**Why other choices are incorrect:**\n• Choice A ($13\\sqrt{2}$): Would be the hypotenuse if the triangle were right-isosceles, but no right angle is given\n• Choice C ($9\\sqrt{2}$): Assumes a right-isosceles triangle with legs $= 9$\n• Choice D ($9$): Assumes $QR$ equals the radius, making an equilateral triangle — but $3(9) = 27 \\neq 31$\n\n**Key concept:** Any segment from the center of a circle to a point on the circle is a radius. Use this to identify known side lengths in triangles inscribed with the center.',
          skills: ['Geometry', 'Circles', 'Triangles']
        }
      ]
    },
    {
      id: 'module-2',
      title: 'Module 2',
      timeLimit: 35,
      questions: [
        {
          id: 'pt10-m2-q1',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'There are $250$ trees in a park. Of these trees, $6\\%$ are birch trees. How many birch trees are in the park?',
          choices: [
            { id: 'A', text: '$6$' },
            { id: 'B', text: '$15$' },
            { id: 'C', text: '$75$' },
            { id: 'D', text: '$244$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Calculate $6\\%$ of $250$.\n\n**Step 1: Convert the percentage to a decimal**\n$6\\% = 0.06$\n\n**Step 2: Multiply**\n$0.06 \\times 250 = 15$ birch trees.\n\n**Why other choices are incorrect:**\n• Choice A ($6$): Uses $6$ directly without computing the percentage\n• Choice C ($75$): Computes $30\\%$ of $250$ instead of $6\\%$\n• Choice D ($244$): Subtracts $6$ from $250$ instead of finding $6\\%$\n\n**Key concept:** To find $p\\%$ of a number $N$, compute $\\frac{p}{100} \\times N$.',
          skills: ['Percentages', 'Arithmetic']
        },
        {
          id: 'pt10-m2-q2',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The graph of the quadratic function $y = f(x)$ is shown above. What is the vertex of the graph?',
          diagram: {
            type: 'parabola',
            params: {
              vertex: { h: 0, k: 2 },
              a: 1,
              xRange: [-6, 6],
              yRange: [-2, 10],
              showVertex: false,
              xTickInterval: 2,
              yTickInterval: 2,
              gridInterval: 1,
              label: 'y = f(x)'
            }
          },
          choices: [
            { id: 'A', text: '$(0, -2)$' },
            { id: 'B', text: '$(0, -3)$' },
            { id: 'C', text: '$(0, 2)$' },
            { id: 'D', text: '$(0, 3)$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Identify the vertex from the graph of the parabola.\n\n**Step 1: Locate the vertex**\nThe vertex is the lowest point (minimum) of an upward-opening parabola. From the graph, the parabola reaches its minimum at the point $(0, 2)$.\n\n**Step 2: Confirm the coordinates**\nThe axis of symmetry is the vertical line $x = 0$ (the $y$-axis), and the minimum $y$-value is $2$.\n\n**Why other choices are incorrect:**\n• Choice A $(0, -2)$: Uses $-2$ instead of $2$ — the vertex is above the $x$-axis, not below\n• Choice B $(0, -3)$: Incorrect $y$-coordinate and wrong sign\n• Choice D $(0, 3)$: Close but reads the wrong $y$-value from the graph\n\n**Key concept:** The vertex of a parabola is its highest point (if opening down) or lowest point (if opening up). Read the coordinates carefully from the graph.',
          skills: ['Quadratic Functions', 'Graph Analysis']
        },
        {
          id: 'pt10-m2-q3',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The number of raccoons in a $131$-square-mile area is estimated to be $2{,}358$. What is the estimated population density, in raccoons per square mile, of this area?',
          choices: [
            { id: 'A', text: '$18$' },
            { id: 'B', text: '$131$' },
            { id: 'C', text: '$149$' },
            { id: 'D', text: '$2{,}376$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Divide the total population by the total area.\n\n**Step 1: Apply the population density formula**\n$$\\text{Population density} = \\frac{\\text{Population}}{\\text{Area}} = \\frac{2{,}358}{131} = 18$$\n\nThe estimated density is $18$ raccoons per square mile.\n\n**Why other choices are incorrect:**\n• Choice B ($131$): This is the area, not the density\n• Choice C ($149$): Adds $131 + 18$ instead of dividing\n• Choice D ($2{,}376$): Adds $2{,}358 + 18$ instead of dividing\n\n**Key concept:** Population density $=$ population $\\div$ area. The units are "individuals per unit area."',
          skills: ['Ratios', 'Population Density']
        },
        {
          id: 'pt10-m2-q4',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: '$-11, -9, 26$\n\nA data set of three numbers is shown. If a number from this data set is selected at random, what is the probability of selecting a positive number?',
          choices: [
            { id: 'A', text: '$0$' },
            { id: 'B', text: '$\\frac{1}{3}$' },
            { id: 'C', text: '$\\frac{2}{3}$' },
            { id: 'D', text: '$1$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Count the positive numbers and divide by the total.\n\n**Step 1: Identify positive numbers**\nThe data set is $\\{-11, -9, 26\\}$. Only $26$ is positive.\n\n**Step 2: Calculate the probability**\n$$P(\\text{positive}) = \\frac{\\text{number of positive values}}{\\text{total values}} = \\frac{1}{3}$$\n\n**Why other choices are incorrect:**\n• Choice A ($0$): There IS a positive number ($26$) in the set\n• Choice C ($\\frac{2}{3}$): Counts $2$ of $3$ — perhaps confusing "positive" with "negative"\n• Choice D ($1$): Would mean all numbers are positive, but $-11$ and $-9$ are negative\n\n**Key concept:** Probability $= \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$. A positive number is any number greater than $0$.',
          skills: ['Probability', 'Data Analysis']
        },
        {
          id: 'pt10-m2-q5',
          type: 'fill-in',
          difficulty: 'medium',
          question: '$f(x) = 45x + 600$\n\nThe function $f$ gives the monthly fee $f(x)$, in dollars, a facility charges to keep $x$ crates in storage. What is the monthly fee, in dollars, the facility charges to keep $50$ crates in storage?',
          correctAnswer: '2850',
          explanation: '**The correct answer is $2850$.** Substitute $x = 50$ into the function.\n\n**Step 1: Substitute $x = 50$**\n$f(50) = 45(50) + 600$\n\n**Step 2: Calculate**\n$f(50) = 2{,}250 + 600 = 2{,}850$\n\nThe monthly fee is $\\$2{,}850$.\n\n**Verification:** $45 \\times 50 = 2{,}250$, and $2{,}250 + 600 = 2{,}850$ ✓.\n\n**Key concept:** For a linear function $f(x) = mx + b$, the coefficient $m$ represents the cost per unit ($\\$45$ per crate) and $b$ is the base fee ($\\$600$).',
          skills: ['Functions', 'Function Evaluation']
        },
        {
          id: 'pt10-m2-q6',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'The function $f$ is defined by $f(x) = 5\\left(\\frac{1}{4} - x\\right)^2 + \\frac{11}{4}$. What is the value of $f\\left(\\frac{1}{4}\\right)$?',
          correctAnswer: '2.75',
          alternateAnswers: ['11/4'],
          explanation: '**The correct answer is $2.75$ (or $\\frac{11}{4}$).** Substitute $x = \\frac{1}{4}$ into the function.\n\n**Step 1: Substitute $x = \\frac{1}{4}$**\n$f\\left(\\frac{1}{4}\\right) = 5\\left(\\frac{1}{4} - \\frac{1}{4}\\right)^2 + \\frac{11}{4}$\n\n**Step 2: Simplify the squared term**\n$\\frac{1}{4} - \\frac{1}{4} = 0$, so $(0)^2 = 0$.\n\n**Step 3: Calculate the result**\n$f\\left(\\frac{1}{4}\\right) = 5(0) + \\frac{11}{4} = \\frac{11}{4} = 2.75$\n\n**Key concept:** When the input equals the value being subtracted inside a squared term, the squared part becomes zero — leaving only the constant. This is also the vertex form minimum/maximum.',
          skills: ['Functions', 'Function Evaluation']
        },
        {
          id: 'pt10-m2-q7',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'If $8x = 6$, what is the value of $72x$?',
          choices: [
            { id: 'A', text: '$3$' },
            { id: 'B', text: '$15$' },
            { id: 'C', text: '$54$' },
            { id: 'D', text: '$57$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Use the given equation to find $72x$ without solving for $x$ individually.\n\n**Step 1: Relate $72x$ to $8x$**\n$72x = 9 \\times 8x$\n\n**Step 2: Substitute the known value**\nSince $8x = 6$:\n$72x = 9 \\times 6 = 54$\n\n**Why other choices are incorrect:**\n• Choice A ($3$): May come from dividing $6$ by $2$ with no valid reasoning\n• Choice B ($15$): May result from adding $9 + 6$ instead of multiplying\n• Choice D ($57$): May come from adding $72 - 8 - 6$ or another arithmetic error\n\n**Key concept:** Instead of solving for $x$, look for a multiplier that connects the expression you want ($72x$) to the expression you know ($8x$). Since $72x = 9(8x)$, you can substitute directly.',
          skills: ['Algebra', 'Algebraic Manipulation']
        },
        {
          id: 'pt10-m2-q8',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Which expression is equivalent to $23x^3 + 2x^2 + 9x$?',
          choices: [
            { id: 'A', text: '$23x(x^2 + 2x + 9)$' },
            { id: 'B', text: '$9x(23x^3 + 2x^2 + 1)$' },
            { id: 'C', text: '$x(23x^2 + 2x + 9)$' },
            { id: 'D', text: '$34(x^3 + x^2 + x)$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Factor out the greatest common factor (GCF) from all three terms.\n\n**Step 1: Identify the GCF**\nThe terms are $23x^3$, $2x^2$, and $9x$. The GCF is $x$ (the lowest power of $x$ present in all terms).\n\n**Step 2: Factor out $x$**\n$23x^3 + 2x^2 + 9x = x(23x^2 + 2x + 9)$\n\n**Why other choices are incorrect:**\n• Choice A: $23x(x^2 + 2x + 9) = 23x^3 + 46x^2 + 207x$ — coefficients are wrong\n• Choice B: $9x(23x^3 + 2x^2 + 1) = 207x^4 + 18x^3 + 9x$ — powers are wrong\n• Choice D: $34(x^3 + x^2 + x) = 34x^3 + 34x^2 + 34x$ — all coefficients become $34$\n\n**Key concept:** To factor out the GCF, divide each term by the GCF and write the result as GCF $\\times$ (remaining expression). Verify by distributing back.',
          skills: ['Algebra', 'Factoring', 'Polynomials']
        },
        {
          id: 'pt10-m2-q9',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Which expression is equivalent to $(9x^3 + 5x + 7) + (6x^3 + 5x^2 - 5)$?',
          choices: [
            { id: 'A', text: '$15x^6 + 5x^2 - 5x - 35$' },
            { id: 'B', text: '$15x^3 + 10x^2 + 2$' },
            { id: 'C', text: '$15x^6 + 5x^2 + 5x + 2$' },
            { id: 'D', text: '$15x^3 + 5x^2 + 5x + 2$' }
          ],
          correctAnswer: 'D',
          explanation: '**Choice D is correct.** Add the two polynomials by combining like terms.\n\n**Step 1: Group like terms**\n$(9x^3 + 6x^3) + (5x^2) + (5x) + (7 + (-5))$\n\n**Step 2: Combine**\n• $x^3$ terms: $9x^3 + 6x^3 = 15x^3$\n• $x^2$ terms: $0 + 5x^2 = 5x^2$\n• $x$ terms: $5x + 0 = 5x$\n• Constants: $7 + (-5) = 2$\n\n**Result:** $15x^3 + 5x^2 + 5x + 2$\n\n**Why other choices are incorrect:**\n• Choice A: Multiplies exponents ($x^3 \\cdot x^3 = x^6$) instead of adding like terms\n• Choice B: Incorrectly combines the $x$ and $x^2$ terms ($5x^2 + 5x \\neq 10x^2$)\n• Choice C: Same $x^6$ error as A, with different coefficient errors\n\n**Key concept:** When adding polynomials, only combine terms with the same degree. Add the coefficients; do NOT add the exponents.',
          skills: ['Algebra', 'Polynomial Addition']
        },
        {
          id: 'pt10-m2-q10',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'Which of the following is equivalent to $\\frac{3}{x + 2} + \\frac{5}{x - 4}$?',
          choices: [
            { id: 'A', text: '$\\frac{8x - 2}{(x + 2)(x - 4)}$' },
            { id: 'B', text: '$\\frac{8x + 22}{(x + 2)(x - 4)}$' },
            { id: 'C', text: '$\\frac{8}{(x + 2)(x - 4)}$' },
            { id: 'D', text: '$\\frac{8x - 2}{2x - 2}$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Add the fractions by finding a common denominator.\n\n**Step 1: Find the common denominator**\nThe common denominator is $(x + 2)(x - 4)$.\n\n**Step 2: Rewrite each fraction**\n$$\\frac{3}{x + 2} = \\frac{3(x - 4)}{(x + 2)(x - 4)} = \\frac{3x - 12}{(x + 2)(x - 4)}$$\n$$\\frac{5}{x - 4} = \\frac{5(x + 2)}{(x + 2)(x - 4)} = \\frac{5x + 10}{(x + 2)(x - 4)}$$\n\n**Step 3: Add the numerators**\n$$\\frac{3x - 12 + 5x + 10}{(x + 2)(x - 4)} = \\frac{8x - 2}{(x + 2)(x - 4)}$$\n\n**Why other choices are incorrect:**\n• Choice B: Adds $-12 + 10$ as $+22$ instead of $-2$ — sign error in the cross-multiplication\n• Choice C: Simply adds the numerators $3 + 5 = 8$ without cross-multiplying\n• Choice D: Uses $2x - 2$ as the denominator instead of the product $(x + 2)(x - 4)$\n\n**Key concept:** To add rational expressions with different denominators, multiply each fraction by the other\'s denominator, then combine the numerators over the common denominator.',
          skills: ['Advanced Math', 'Rational Expressions']
        },
        {
          id: 'pt10-m2-q11',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'A line of best fit for the data is shown in the scatterplot above. Which of the following is closest to the slope of the line of best fit shown?',
          diagram: {
            type: 'scatterplot',
            params: {
              points: [
                [0.5, 3], [1, 4], [1.5, 5], [2, 6],
                [2.5, 7], [3, 8], [3.5, 9], [4, 10],
                [4.5, 8], [5, 12], [5.5, 13], [6, 14]
              ],
              xMax: 7,
              yMax: 16,
              bestFitLine: { slope: 2, intercept: 2 }
            }
          },
          choices: [
            { id: 'A', text: '$0$' },
            { id: 'B', text: '$\\frac{1}{2}$' },
            { id: 'C', text: '$1$' },
            { id: 'D', text: '$2$' }
          ],
          correctAnswer: 'D',
          explanation: '**Choice D is correct.** Estimate the slope using two points on the line of best fit.\n\n**Step 1: Pick two points on the line**\nFrom the line of best fit: $(0, 2)$ and $(6, 14)$.\n\n**Step 2: Calculate the slope**\n$$\\text{Slope} = \\frac{14 - 2}{6 - 0} = \\frac{12}{6} = 2$$\n\n**Why other choices are incorrect:**\n• Choice A ($0$): A slope of $0$ means a horizontal line, but the line clearly rises\n• Choice B ($\\frac{1}{2}$): This would be a very gradual rise — the line rises much faster\n• Choice C ($1$): The line rises about $2$ units for every $1$ unit across, not $1$ unit\n\n**Key concept:** The slope of a line $= \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1}$. Pick two clearly readable points on the line (not necessarily data points) for the most accurate estimate.',
          skills: ['Data Analysis', 'Slope', 'Line of Best Fit']
        },
        {
          id: 'pt10-m2-q12',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The function $g$ is defined by $g(x) = \\frac{f(x)}{x + 1}$, where $f$ is a linear function. The table shows two values of $x$ and their corresponding values of $g(x)$. What is the $y$-intercept of the graph of $y = f(x)$ in the $xy$-plane?',
          questionTable: {
            headers: ['x', 'g(x)'],
            rows: [
              ['1', '9'],
              ['2', '7']
            ]
          },
          correctAnswer: 15,
          explanation: '**The correct answer is $15$.** Use the relationship $f(x) = g(x) \\cdot (x + 1)$ to find values of $f$, then determine the linear function.\n\n**Step 1: Find values of $f$**\nSince $g(x) = \\frac{f(x)}{x + 1}$, we have $f(x) = g(x) \\cdot (x + 1)$.\n\n• $f(1) = g(1) \\cdot (1 + 1) = 9 \\cdot 2 = 18$\n• $f(2) = g(2) \\cdot (2 + 1) = 7 \\cdot 3 = 21$\n\n**Step 2: Find the equation of $f$**\nSince $f$ is linear, find the slope:\n$$m = \\frac{21 - 18}{2 - 1} = 3$$\n\nUsing point $(1, 18)$:\n$$f(x) = 3(x - 1) + 18 = 3x + 15$$\n\n**Step 3: Find the $y$-intercept**\n$$f(0) = 3(0) + 15 = 15$$\n\n**Verification:** $g(1) = \\frac{3(1) + 15}{1 + 1} = \\frac{18}{2} = 9$ ✓ and $g(2) = \\frac{3(2) + 15}{2 + 1} = \\frac{21}{3} = 7$ ✓\n\n**Key concept:** When $g(x) = \\frac{f(x)}{\\text{expression}}$, multiply both sides to recover $f(x)$. Two points determine a linear function.',
          skills: ['Advanced Math', 'Functions']
        },
        {
          id: 'pt10-m2-q13',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'In triangles $ABC$ and $ADE$, angles $C$ and $E$ are right angles. Point $C$ is on $\\overline{AE}$ and point $B$ is on $\\overline{AD}$. If $AB = \\sqrt{41}$, $AC = 4$, and $CE = 16$, what is the area of triangle $ADE$?',
          diagram: {
            type: 'nestedRightTriangles',
            params: {
              labels: { A: 'A', B: 'B', C: 'C', D: 'D', E: 'E' },
              sideLabels: { AB: '√41', AC: '4', CE: '16' }
            }
          },
          correctAnswer: 250,
          explanation: '**The correct answer is 250.**\n\nIn right triangle $ABC$ with right angle at $C$:\n• $AC = 4$, $AB = \\sqrt{41}$\n• By the Pythagorean theorem: $BC = \\sqrt{AB^2 - AC^2} = \\sqrt{41 - 16} = \\sqrt{25} = 5$\n\nTriangles $ABC$ and $ADE$ are similar (both have a right angle and share angle $A$).\n\n$AE = AC + CE = 4 + 16 = 20$\n\nThe scale factor from $ABC$ to $ADE$ is:\n$\\frac{AE}{AC} = \\frac{20}{4} = 5$\n\nSo $DE = 5 \\cdot BC = 5 \\cdot 5 = 25$\n\nArea of triangle $ADE = \\frac{1}{2} \\cdot AE \\cdot DE = \\frac{1}{2} \\cdot 20 \\cdot 25 = 250$',
          skills: ['similar-triangles', 'pythagorean-theorem', 'area']
        },
        {
          id: 'pt10-m2-q14',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'In triangle $XYZ$, angle $Y$ is a right angle, point $P$ lies on $\\overline{XZ}$, and point $Q$ lies on $\\overline{YZ}$ such that $\\overline{PQ}$ is parallel to $\\overline{XY}$. If the measure of angle $XZY$ is $63°$, what is the measure, in degrees, of angle $XPQ$?',
          correctAnswer: '117',
          explanation: '**The correct answer is $117$.** Use parallel-line angle relationships to find angle $XPQ$.\n\n**Step 1: Find angle $X$ in triangle $XYZ$**\nAngle $Y = 90°$ and angle $Z = 63°$, so:\n$\\angle X = 180° - 90° - 63° = 27°$\n\n**Step 2: Identify the angle relationship**\nSince $\\overline{PQ} \\parallel \\overline{XY}$ and $\\overline{XP}$ is a transversal, angles $XPQ$ and $PXY$ are co-interior (same-side interior) angles. Co-interior angles are supplementary.\n\n**Step 3: Calculate angle $XPQ$**\n$\\angle XPQ + \\angle PXY = 180°$\n$\\angle XPQ + 27° = 180°$\n$\\angle XPQ = 153°$\n\nAlternatively, using angle $Z$: since $PQ \\parallel XY$, $\\angle XPQ$ and $\\angle XZY$ are co-interior angles along transversal $XZ$:\n$\\angle XPQ = 180° - 63° = 117°$\n\n**Key concept:** When a transversal crosses parallel lines, co-interior (same-side interior) angles are supplementary (sum to $180°$). Alternate interior angles are equal.',
          skills: ['Geometry', 'Parallel Lines', 'Triangle Angles']
        },
        {
          id: 'pt10-m2-q15',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'An investment account was opened with an initial value of $\\$890$. The value of the account doubled every $10$ years. Which equation represents the value of the account $M(t)$, in dollars, $t$ years after the account was opened?',
          choices: [
            { id: 'A', text: '$M(t) = 890\\left(\\frac{1}{2}\\right)^{\\frac{t}{10}}$' },
            { id: 'B', text: '$M(t) = 890\\left(\\frac{1}{10}\\right)^{\\frac{t}{2}}$' },
            { id: 'C', text: '$M(t) = 890(2)^{\\frac{t}{10}}$' },
            { id: 'D', text: '$M(t) = 890(10)^{\\frac{t}{2}}$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Build the exponential model from the given information.\n\n**Step 1: Identify the components**\n• Initial value: $\\$890$\n• Growth factor: $2$ (doubling)\n• Doubling period: $10$ years\n\n**Step 2: Write the equation**\nThe general form for doubling is $M(t) = M_0 \\cdot 2^{t/d}$, where $d$ is the doubling time:\n$M(t) = 890(2)^{\\frac{t}{10}}$\n\n**Step 3: Verify**\nAt $t = 10$: $M(10) = 890(2)^1 = 1{,}780$ (doubled ✓).\nAt $t = 20$: $M(20) = 890(2)^2 = 3{,}560$ (doubled again ✓).\n\n**Why other choices are incorrect:**\n• Choice A: Uses $\\frac{1}{2}$ as the base — this models halving (decay), not doubling\n• Choice B: Uses base $\\frac{1}{10}$ and exponent $\\frac{t}{2}$ — completely wrong structure\n• Choice D: Uses base $10$ — this would multiply by $10$ (not $2$) each period\n\n**Key concept:** For doubling every $d$ time units, use $M(t) = M_0 \\cdot 2^{t/d}$. The base is $2$ (for doubling) and the exponent denominator is the period.',
          skills: ['Exponential Functions', 'Exponential Growth']
        },
        {
          id: 'pt10-m2-q16',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: '$y < x$\n$x < 22$\n\nFor which of the following tables are all the values of $x$ and their corresponding values of $y$ solutions to the given system of inequalities?',
          choices: [
            { id: 'A', text: '$\\begin{array}{|c|c|c|c|}\\hline x & 19 & 20 & 21 \\\\ \\hline y & 18 & 19 & 20 \\\\ \\hline\\end{array}$' },
            { id: 'B', text: '$\\begin{array}{|c|c|c|c|}\\hline x & 19 & 20 & 21 \\\\ \\hline y & 20 & 21 & 22 \\\\ \\hline\\end{array}$' },
            { id: 'C', text: '$\\begin{array}{|c|c|c|c|}\\hline x & 23 & 24 & 25 \\\\ \\hline y & 22 & 23 & 24 \\\\ \\hline\\end{array}$' },
            { id: 'D', text: '$\\begin{array}{|c|c|c|c|}\\hline x & 23 & 24 & 25 \\\\ \\hline y & 24 & 25 & 26 \\\\ \\hline\\end{array}$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Check each table against both inequalities $y < x$ and $x < 22$.\n\n**Step 1: Check Choice A — $x$: $19, 20, 21$; $y$: $18, 19, 20$**\n• $x < 22$: $19 < 22$ ✓, $20 < 22$ ✓, $21 < 22$ ✓\n• $y < x$: $18 < 19$ ✓, $19 < 20$ ✓, $20 < 21$ ✓\nAll conditions satisfied ✓\n\n**Step 2: Check why other choices fail**\n• Choice B: $y$ values are $20, 21, 22$. For $x = 19$, $y = 20$, but $20 < 19$ is false ✗\n• Choice C: $x$ values are $23, 24, 25$. Since $23 < 22$ is false, $x < 22$ fails ✗\n• Choice D: $x$ values are $23, 24, 25$. Same issue — $x < 22$ fails ✗\n\n**Why other choices are incorrect:**\n• Choice B: Violates $y < x$ (all $y$ values exceed their $x$ values)\n• Choice C: Violates $x < 22$ (all $x$ values exceed $22$)\n• Choice D: Violates both $x < 22$ and $y < x$\n\n**Key concept:** To verify a system of inequalities, check EVERY pair $(x, y)$ against EVERY inequality. All pairs must satisfy all conditions.',
          skills: ['Systems of Inequalities', 'Linear Inequalities']
        },
        {
          id: 'pt10-m2-q17',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The equation $x^2 + y^2 + 10x - 4y + c = 0$ defines a circle in the $xy$-plane with radius $6$. What is the value of $c$?',
          correctAnswer: -7,
          explanation: '**The correct answer is $-7$.** Complete the square and match the radius.\n\n**Step 1: Group and complete the square**\n$$(x^2 + 10x) + (y^2 - 4y) = -c$$\n\nFor $x$: $x^2 + 10x + 25 = (x + 5)^2$, add $25$.\nFor $y$: $y^2 - 4y + 4 = (y - 2)^2$, add $4$.\n\n$$(x + 5)^2 + (y - 2)^2 = -c + 25 + 4 = 29 - c$$\n\n**Step 2: Use the radius condition**\nThe standard form $(x - h)^2 + (y - k)^2 = r^2$ has $r^2 = 29 - c$.\n\nSince $r = 6$:\n$$29 - c = 36$$\n$$c = -7$$\n\n**Verification:** $x^2 + y^2 + 10x - 4y - 7 = 0 \\implies (x + 5)^2 + (y - 2)^2 = 36$. Radius $= \\sqrt{36} = 6$ ✓\n\n**Key concept:** To convert the general form $x^2 + y^2 + Dx + Ey + F = 0$ to standard form, complete the square for both $x$ and $y$. The radius equals $\\sqrt{(D/2)^2 + (E/2)^2 - F}$.',
          skills: ['Geometry', 'Circle Equations']
        },
        {
          id: 'pt10-m2-q18',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: '$3y = 4x + 17$\n\n$-3y = 9x - 23$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $39x$?',
          choices: [
            { id: 'A', text: '$-18$' },
            { id: 'B', text: '$-6$' },
            { id: 'C', text: '$6$' },
            { id: 'D', text: '$18$' }
          ],
          correctAnswer: 'D',
          explanation: '**Choice D is correct.** Add the two equations:\n\n$3y + (-3y) = (4x + 17) + (9x - 23)$\n$0 = 13x - 6$\n$13x = 6$, so $x = \\frac{6}{13}$\n\nThen $39x = 39 \\times \\frac{6}{13} = 3 \\times 6 = 18$.',
          skills: ['Systems of Equations', 'Linear Equations']
        },
        {
          id: 'pt10-m2-q19',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: '$h(t) = -16t^2 + b$\n\nThe function $h$ estimates an object\'s height, in feet, above the ground $t$ seconds after the object is dropped, where $b$ is a constant. The function estimates that the object is $3{,}364$ feet above the ground when it is dropped at $t = 0$. Approximately how many seconds after being dropped does the function estimate the object will hit the ground?',
          choices: [
            { id: 'A', text: '$7.25$' },
            { id: 'B', text: '$14.50$' },
            { id: 'C', text: '$105.13$' },
            { id: 'D', text: '$210.25$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Find $b$ from the initial condition, then solve for when the object hits the ground.\n\n**Step 1: Find $b$**\nAt $t = 0$: $h(0) = -16(0)^2 + b = b = 3{,}364$ feet.\n\n**Step 2: Set $h(t) = 0$ (ground level)**\n$-16t^2 + 3{,}364 = 0$\n$16t^2 = 3{,}364$\n$t^2 = 210.25$\n\n**Step 3: Solve for $t$**\n$t = \\sqrt{210.25} = 14.5$ seconds (taking the positive root since $t > 0$).\n\n**Why other choices are incorrect:**\n• Choice A ($7.25$): This is half the correct answer — may result from an error in the square root\n• Choice C ($105.13$): This is $\\frac{3{,}364}{32}$ — divides by $32$ instead of $16$, then takes a square root incorrectly\n• Choice D ($210.25$): This is $t^2$, not $t$ — forgot to take the square root\n\n**Key concept:** For free-fall from height $b$: $h(t) = -16t^2 + b$. The object hits the ground when $h(t) = 0$, giving $t = \\sqrt{\\frac{b}{16}}$.',
          skills: ['Quadratic Functions', 'Physics Applications']
        },
        {
          id: 'pt10-m2-q20',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'Let $f(x) = x^2 - 4x + 3$ and $g(x) = 2x - 1$. What is the sum of all values of $x$ for which $f(g(x)) = 0$?',
          correctAnswer: 3,
          explanation: '**The correct answer is $3$.** Evaluate the composition, then solve.\n\n**Step 1: Substitute $g(x)$ into $f$**\n$$f(g(x)) = f(2x - 1) = (2x - 1)^2 - 4(2x - 1) + 3$$\n\n**Step 2: Expand**\n$$= 4x^2 - 4x + 1 - 8x + 4 + 3$$\n$$= 4x^2 - 12x + 8$$\n\n**Step 3: Factor and solve**\n$$4(x^2 - 3x + 2) = 0$$\n$$4(x - 1)(x - 2) = 0$$\n$$x = 1 \\quad \\text{or} \\quad x = 2$$\n\n**Step 4: Find the sum**\n$$1 + 2 = 3$$\n\n**Verification:**\n• $x = 1$: $g(1) = 1$, $f(1) = 1 - 4 + 3 = 0$ ✓\n• $x = 2$: $g(2) = 3$, $f(3) = 9 - 12 + 3 = 0$ ✓\n\n**Alternative:** By Vieta\'s formulas, the sum of roots of $x^2 - 3x + 2 = 0$ is $-(-3)/1 = 3$.\n\n**Key concept:** For $f(g(x)) = 0$, substitute $g(x)$ into $f$, expand, and solve the resulting equation. The composition creates a new polynomial whose roots are the solutions.',
          skills: ['Advanced Math', 'Function Composition']
        },
        {
          id: 'pt10-m2-q21',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'A line intersects two parallel lines, forming four acute angles and four obtuse angles. The measure of one of the acute angles is $(9x - 560)°$. The sum of the measures of one of the acute angles and three of the obtuse angles is $(-18x + w)°$. What is the value of $w$?',
          correctAnswer: '1660',
          explanation: '**The correct answer is 1660.** When a transversal crosses two parallel lines, all acute angles are equal and all obtuse angles are equal.\n\nLet the acute angle $= (9x - 560)°$. Then the obtuse angle $= 180° - (9x - 560)° = (740 - 9x)°$.\n\nSum of one acute and three obtuse angles:\n$= (9x - 560) + 3(740 - 9x)$\n$= 9x - 560 + 2{,}220 - 27x$\n$= -18x + 1{,}660$\n\nSince the sum is given as $(-18x + w)°$, we have $w = 1{,}660$.',
          skills: ['Geometry', 'Parallel Lines', 'Transversals', 'Angle Relationships']
        },
        {
          id: 'pt10-m2-q22',
          type: 'fill-in',
          difficulty: 'hard',
          question: '$y = -2.5$\n\n$y = x^2 + 8x + k$\n\nIn the given system of equations, $k$ is a positive integer constant. The system has no real solutions. What is the least possible value of $k$?',
          correctAnswer: '14',
          explanation: '**The correct answer is $14$.** For no real solutions, the discriminant of the combined equation must be negative.\n\n**Step 1: Set the equations equal**\n$x^2 + 8x + k = -2.5$\n$x^2 + 8x + (k + 2.5) = 0$\n\n**Step 2: Apply the discriminant condition**\nFor no real solutions, the discriminant must be negative:\n$b^2 - 4ac < 0$\n$8^2 - 4(1)(k + 2.5) < 0$\n$64 - 4k - 10 < 0$\n$54 < 4k$\n$k > 13.5$\n\n**Step 3: Find the least positive integer**\nSince $k$ must be a positive integer and $k > 13.5$, the least possible value is $k = 14$.\n\n**Verification:** With $k = 14$: discriminant $= 64 - 4(16.5) = 64 - 66 = -2 < 0$ ✓ (no real solutions).\nWith $k = 13$: discriminant $= 64 - 4(15.5) = 64 - 62 = 2 > 0$ ✗ (has solutions).\n\n**Key concept:** A system of equations has no real solutions when the resulting single equation has a negative discriminant ($b^2 - 4ac < 0$). The discriminant boundary gives the threshold value.',
          skills: ['Quadratic Equations', 'Systems of Equations', 'Discriminant']
        }
      ]
    }
  ]
};
