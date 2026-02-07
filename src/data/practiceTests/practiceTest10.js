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
          explanation: 'Reading the line of best fit at $x = 4{,}000$ feet, the $y$-value (temperature) is approximately $35$°F.',
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
          explanation: 'When a rectangle with area $20$ is removed from a rectangle with area $72$, the resulting area is $72 - 20 = 52$ square inches.',
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
          explanation: '$|p| + 61 = 65$ means $|p| = 4$. So $p = 4$ or $p = -4$. The answer $4$ is among the choices.',
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
          explanation: 'The total cost is the cost of cereal (\\$2) plus the cost of strawberries (\\$1.90 per pound $\\times p$ pounds). So $1.90p + 2 = 9.60$.',
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
          explanation: 'Looking at the bar graph, the bar at $0$ kWh shows a frequency of $4$ days.',
          skills: ['Data Analysis', 'Bar Graphs']
        },
        {
          id: 'pt10-m1-q6',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'A line in the $xy$-plane has a slope of $9$ and passes through the point $(0, -5)$. The equation $y = px + r$ defines the line, where $p$ and $r$ are constants. What is the value of $p$?',
          correctAnswer: '9',
          explanation: 'In the equation $y = px + r$, $p$ represents the slope. Since the slope is $9$, $p = 9$.',
          skills: ['Algebra', 'Linear Equations', 'Slope']
        },
        {
          id: 'pt10-m1-q7',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'What is an $x$-coordinate of an $x$-intercept of the graph of $y = 3(x - 14)(x + 5)(x + 4)$ in the $xy$-plane?',
          correctAnswer: '14',
          alternateAnswers: ['-5', '-4'],
          explanation: 'The $x$-intercepts occur when $y = 0$. Setting each factor to zero: $x - 14 = 0$ gives $x = 14$, $x + 5 = 0$ gives $x = -5$, and $x + 4 = 0$ gives $x = -4$. Any of these values is correct.',
          skills: ['Algebra', 'Polynomial Functions', 'Zeros']
        },
        {
          id: 'pt10-m1-q8',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The graph above shows the estimated value, in dollars, of a tablet as a function of the number of months since it was purchased. The $y$-intercept is at $(0, 225)$. What is the best interpretation of the $y$-intercept of the graph in this context?',
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
          explanation: 'The $y$-intercept represents the value when $x = 0$, which means at the time of purchase. So the tablet was worth \\$225 when purchased.',
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
          explanation: 'Since the triangles are congruent and $E$ corresponds to $J$, angle $J$ has the same measure as angle $E$, which is $45°$.',
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
          explanation: '$f(4) = \\frac{1}{2}(4 + 6) = \\frac{1}{2}(10) = 5$',
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
          explanation: 'The intersection point of the absolute value function and the linear function occurs at $\\left(-\\frac{7}{2}, \\frac{9}{2}\\right)$ or $(-3.5, 4.5)$.',
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
          explanation: 'For infinitely many solutions, the second equation must be equivalent to the first. $2y = 2(6x + 3)$ simplifies to $y = 6x + 3$, which is the same as the first equation.',
          skills: ['Systems of Equations', 'Infinitely Many Solutions']
        },
        {
          id: 'pt10-m1-q13',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'If $\\frac{6}{7}p + 18 = 54$, what is the value of $7p$?',
          correctAnswer: '294',
          explanation: '$\\frac{6}{7}p + 18 = 54$\n$\\frac{6}{7}p = 36$\n$p = 36 \\times \\frac{7}{6} = 42$\n$7p = 7 \\times 42 = 294$',
          skills: ['Algebra', 'Solving Equations']
        },
        {
          id: 'pt10-m1-q14',
          type: 'fill-in',
          difficulty: 'medium',
          question: '$y = 9x + 12$\n$x + 7y = 20$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?',
          correctAnswer: '3',
          explanation: 'Substituting $y = 9x + 12$ into $x + 7y = 20$:\n$x + 7(9x + 12) = 20$\n$x + 63x + 84 = 20$\n$64x = -64$\n$x = -1$\n$y = 9(-1) + 12 = 3$',
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
          explanation: 'The standard form of a circle is $(x - h)^2 + (y - k)^2 = r^2$. Here, $h = 13$, the $y$-coordinate of center is $k$, and $r^2 = 64$, so $r = 8$.',
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
          explanation: '$f(x) = |x - 4x| = |-3x| = 3|x|$\n$f(5) = 3(5) = 15$\n$f(5) - f(a) = -15$\n$15 - 3|a| = -15$\n$3|a| = 30$\n$|a| = 10$\n$a = 10$ or $a = -10$. Since $10$ is among the choices, $a = 10$.',
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
          explanation: '$f(0) = c$. For option B: $f(0) = 33(1.5)^0 = 33(1) = 33 = c$. The coefficient $33$ equals $c$ directly.',
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
          explanation: 'The bacteria doubles when $2^{\\frac{t}{790}} = 2$, which means $\\frac{t}{790} = 1$, so $t = 790$ minutes.',
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
          explanation: '$\\frac{12}{n} = \\frac{2}{t} - \\frac{2}{w} = \\frac{2w - 2t}{tw} = \\frac{2(w-t)}{tw}$\n$\\frac{12}{n} = \\frac{2(w-t)}{tw}$\n$n = \\frac{12tw}{2(w-t)} = \\frac{6tw}{w-t}$',
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
          explanation: 'Average rate of change $= \\frac{18 - 12}{7 - 5} = \\frac{6}{2} = 3$°C per minute.',
          skills: ['Functions', 'Rate of Change']
        },
        {
          id: 'pt10-m1-q21',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'In August, a car dealer completed $15$ more than $3$ times the number of sales the car dealer completed in September. In August and September, the car dealer completed $363$ sales. How many sales did the car dealer complete in September?',
          correctAnswer: '87',
          explanation: 'Let $s$ = September sales. August sales $= 3s + 15$.\n$s + (3s + 15) = 363$\n$4s + 15 = 363$\n$4s = 348$\n$s = 87$',
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
          explanation: 'Since $P$ is the center and $Q$, $R$ are on the circle, $PQ = PR = 9$ (radius).\nPerimeter $= PQ + PR + QR = 31$\n$9 + 9 + QR = 31$\n$QR = 13$ inches.',
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
          explanation: '$6\\%$ of $250 = 0.06 \\times 250 = 15$ birch trees.',
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
          explanation: 'The vertex of the parabola is the minimum point, which is at $(0, 2)$.',
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
          explanation: 'Population density $= 2{,}358 \\div 131 = 18$ raccoons per square mile.',
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
          explanation: 'There are $3$ numbers total, and only $1$ is positive ($26$). Probability $= \\frac{1}{3}$.',
          skills: ['Probability', 'Data Analysis']
        },
        {
          id: 'pt10-m2-q5',
          type: 'fill-in',
          difficulty: 'medium',
          question: '$f(x) = 45x + 600$\n\nThe function $f$ gives the monthly fee $f(x)$, in dollars, a facility charges to keep $x$ crates in storage. What is the monthly fee, in dollars, the facility charges to keep $50$ crates in storage?',
          correctAnswer: '2850',
          explanation: '$f(50) = 45(50) + 600 = 2{,}250 + 600 = 2{,}850$ dollars.',
          skills: ['Functions', 'Function Evaluation']
        },
        {
          id: 'pt10-m2-q6',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'The function $f$ is defined by $f(x) = 5\\left(\\frac{1}{4} - x\\right)^2 + \\frac{11}{4}$. What is the value of $f\\left(\\frac{1}{4}\\right)$?',
          correctAnswer: '2.75',
          alternateAnswers: ['11/4'],
          explanation: '$f\\left(\\frac{1}{4}\\right) = 5\\left(\\frac{1}{4} - \\frac{1}{4}\\right)^2 + \\frac{11}{4} = 5(0)^2 + \\frac{11}{4} = 0 + \\frac{11}{4} = 2.75$',
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
          explanation: '$72x = 9 \\times 8x = 9 \\times 6 = 54$',
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
          explanation: 'Factoring out $x$ from each term: $x(23x^2 + 2x + 9)$',
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
          explanation: 'Combining like terms: $(9x^3 + 6x^3) + 5x^2 + 5x + (7 - 5) = 15x^3 + 5x^2 + 5x + 2$',
          skills: ['Algebra', 'Polynomial Addition']
        },
        {
          id: 'pt10-m2-q10',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'At a state fair, attendees can win tokens that are worth a different number of points depending on the shape. One attendee won $S$ square tokens and $C$ circle tokens worth a total of $1{,}120$ points. The equation $80S + 90C = 1{,}120$ represents this situation. How many more points is a circle token worth than a square token?',
          choices: [
            { id: 'A', text: '$950$' },
            { id: 'B', text: '$90$' },
            { id: 'C', text: '$80$' },
            { id: 'D', text: '$10$' }
          ],
          correctAnswer: 'D',
          explanation: 'From the equation, square tokens are worth $80$ points and circle tokens are worth $90$ points. Difference $= 90 - 80 = 10$ points.',
          skills: ['Algebra', 'Linear Equations', 'Word Problems']
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
          explanation: 'Slope $= \\frac{14 - 2}{6 - 0} = \\frac{12}{6} = 2$',
          skills: ['Data Analysis', 'Slope', 'Line of Best Fit']
        },
        {
          id: 'pt10-m2-q12',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'A circle has a radius of $2.1$ inches. The area of the circle is $b\\pi$ square inches, where $b$ is a constant. What is the value of $b$?',
          correctAnswer: '4.41',
          explanation: 'Area $= \\pi r^2 = \\pi(2.1)^2 = \\pi(4.41) = 4.41\\pi$. So $b = 4.41$.',
          skills: ['Geometry', 'Circle Area']
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
          explanation: 'Since $\\overline{PQ} \\parallel \\overline{XY}$, angle $XPQ$ and angle $PXY$ are supplementary (same-side interior angles). Angle $PXY = $ angle $ZXY = 90° - 63° = 27°$. But actually, angle $XPQ = 180° - 63° = 117°$ (co-interior angles with angle $Z$).',
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
          explanation: 'For doubling every $10$ years, the base is $2$ and the exponent is $\\frac{t}{10}$. So $M(t) = 890(2)^{\\frac{t}{10}}$.',
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
          explanation: 'We need $y < x$ and $x < 22$. Option A has all $x < 22$ ($19, 20, 21$) and $y < x$ ($18<19, 19<20, 20<21$). Options C and D have $x > 22$.',
          skills: ['Systems of Inequalities', 'Linear Inequalities']
        },
        {
          id: 'pt10-m2-q17',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'Which expression is equivalent to $\\frac{h^{15}q^7}{h^5q^{21}}$, where $h > 0$ and $q > 0$?',
          choices: [
            { id: 'A', text: '$\\frac{h^{10}}{q^{14}}$' },
            { id: 'B', text: '$\\frac{h^3}{q^3}$' },
            { id: 'C', text: '$h^{10}q^{14}$' },
            { id: 'D', text: '$h^3q^3$' }
          ],
          correctAnswer: 'A',
          explanation: '$\\frac{h^{15}q^7}{h^5q^{21}} = h^{15-5} \\times q^{7-21} = h^{10} \\times q^{-14} = \\frac{h^{10}}{q^{14}}$',
          skills: ['Algebra', 'Exponent Rules']
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
          explanation: 'At $t = 0$, $h(0) = b = 3{,}364$ feet.\nWhen the object hits the ground, $h(t) = 0$:\n$-16t^2 + 3{,}364 = 0$\n$16t^2 = 3{,}364$\n$t^2 = 210.25$\n$t = \\sqrt{210.25} \\approx 14.50$ seconds',
          skills: ['Quadratic Functions', 'Physics Applications']
        },
        {
          id: 'pt10-m2-q20',
          type: 'fill-in',
          difficulty: 'hard',
          question: '$2x^2 - 8x - 7 = 0$\n\nOne solution to the given equation can be written as $\\frac{8 - \\sqrt{k}}{4}$, where $k$ is a constant. What is the value of $k$?',
          correctAnswer: '120',
          explanation: 'Using the quadratic formula: $x = \\frac{8 \\pm \\sqrt{64 + 56}}{4} = \\frac{8 \\pm \\sqrt{120}}{4}$.\nSo $\\frac{8 - \\sqrt{k}}{4}$ corresponds to $x = \\frac{8 - \\sqrt{120}}{4}$, meaning $k = 120$.',
          skills: ['Quadratic Equations', 'Quadratic Formula']
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
          explanation: 'For no real solutions, the parabola $y = x^2 + 8x + k$ must not intersect $y = -2.5$.\nSetting them equal: $x^2 + 8x + k = -2.5$\n$x^2 + 8x + (k + 2.5) = 0$\nFor no real solutions, discriminant $< 0$:\n$b^2 - 4ac < 0$\n$64 - 4(1)(k + 2.5) < 0$\n$64 - 4k - 10 < 0$\n$54 < 4k$\n$k > 13.5$\nSince $k$ must be a positive integer, the least value is $k = 14$.',
          skills: ['Quadratic Equations', 'Systems of Equations', 'Discriminant']
        }
      ]
    }
  ]
};
