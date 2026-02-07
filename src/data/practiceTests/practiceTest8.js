// Practice Test 8 - Based on College Board SAT Practice Test #10
// 44 original questions inspired by official SAT format

export const practiceTest8 = {
  id: 'practice-test-8',
  title: 'Practice Test 8',
  description: 'Full-length SAT Math practice test with 44 questions across two modules.',
  modules: [
    {
      id: 'module-1',
      title: 'Module 1',
      questions: [
        {
          id: 'pt8-m1-q1',
          type: 'multiple-choice',
          question: 'The bar graph shows the percentage of laptops for sale at a store by year of manufacture. For which year is the percentage of laptops for sale the lowest?',
          diagram: {
            type: 'barChart',
            params: {
              title: 'Laptops for Sale by Year',
              data: [
                { label: '2019', value: 8 },
                { label: '2020', value: 12 },
                { label: '2021', value: 5 },
                { label: '2022', value: 15 }
              ],
              xAxisLabel: 'Year of manufacture',
              yAxisLabel: 'Percentage',
              yMax: 20,
              yStep: 5
            }
          },
          choices: [
            { id: 'A', text: '2019' },
            { id: 'B', text: '2020' },
            { id: 'C', text: '2021' },
            { id: 'D', text: '2022' }
          ],
          correctAnswer: 'C',
          explanation: 'The year 2021 has the lowest percentage at $5\\%$.'
        },
        {
          id: 'pt8-m1-q2',
          type: 'multiple-choice',
          question: 'Two lines intersect at the point $(-3, 4)$. What is the solution $(x, y)$ to this system of equations?',
          choices: [
            { id: 'A', text: '$(4, -3)$' },
            { id: 'B', text: '$(0, 4)$' },
            { id: 'C', text: '$(-3, 4)$' },
            { id: 'D', text: '$(3, -4)$' }
          ],
          correctAnswer: 'C',
          explanation: 'The solution to a system of linear equations is the point where the lines intersect. The lines intersect at $(-3, 4)$.'
        },
        {
          id: 'pt8-m1-q3',
          type: 'multiple-choice',
          question: 'The total cost, in dollars, to rent a kayak consists of a \\$30 service fee and a \\$15 per hour rental fee. A person rents a kayak for $h$ hours and intends to spend a maximum of \\$90. Which inequality represents this situation?',
          choices: [
            { id: 'A', text: '$15h \\leq 90$' },
            { id: 'B', text: '$15 + 30h \\leq 90$' },
            { id: 'C', text: '$30h \\leq 90$' },
            { id: 'D', text: '$30 + 15h \\leq 90$' }
          ],
          correctAnswer: 'D',
          explanation: 'Total cost = service fee + hourly rate × hours $= 30 + 15h$. This must be at most $90$, so $30 + 15h \\leq 90$.'
        },
        {
          id: 'pt8-m1-q4',
          type: 'multiple-choice',
          question: 'If a parabola with vertex at $(0, -4)$ is translated up $5$ units, what is the $y$-coordinate of the new vertex?',
          choices: [
            { id: 'A', text: '$-9$' },
            { id: 'B', text: '$-4$' },
            { id: 'C', text: '$1$' },
            { id: 'D', text: '$5$' }
          ],
          correctAnswer: 'C',
          explanation: 'Translating up $5$ units adds $5$ to the $y$-coordinate: $-4 + 5 = 1$.'
        },
        {
          id: 'pt8-m1-q5',
          type: 'multiple-choice',
          question: 'The equation $v = 25 + 4t$ gives the speed $v$, in meters per second, of a certain object $t$ seconds after it began to accelerate. What is the speed, in meters per second, of the object $6$ seconds after it began to accelerate?',
          choices: [
            { id: 'A', text: '$25$' },
            { id: 'B', text: '$29$' },
            { id: 'C', text: '$49$' },
            { id: 'D', text: '$54$' }
          ],
          correctAnswer: 'C',
          explanation: 'Substituting $t = 6$: $v = 25 + 4(6) = 25 + 24 = 49$ meters per second.'
        },
        {
          id: 'pt8-m1-q6',
          type: 'fill-in',
          question: 'The function $f$ is defined by $f(x) = x^2 + 2x + 35$. What is the value of $f(3)$?',
          correctAnswer: '50',
          explanation: '$f(3) = (3)^2 + 2(3) + 35 = 9 + 6 + 35 = 50$.'
        },
        {
          id: 'pt8-m1-q7',
          type: 'fill-in',
          question: 'A catering company charges a one-time fee of \\$50 to book an event and \\$12.50 per guest. The company has a budget limit of \\$400 for one event. What is the greatest number of guests possible without exceeding the budget?',
          correctAnswer: '28',
          explanation: 'Total cost $= 50 + 12.50g \\leq 400$. So $12.50g \\leq 350$, giving $g \\leq 28$. The greatest number of guests is $28$.'
        },
        {
          id: 'pt8-m1-q8',
          type: 'multiple-choice',
          question: 'The table shows the distribution of votes for class president by grade level. If a student is selected at random, what is the probability that the student voted for Candidate A?',
          questionTable: {
            headers: ['', 'Candidate A', 'Candidate B', 'Total'],
            rows: [
              ['Grade 9', '8', '12', '20'],
              ['Grade 10', '7', '18', '25'],
              ['Grade 11', '5', '20', '25'],
              ['Grade 12', '5', '25', '30'],
              ['Total', '25', '75', '100']
            ]
          },
          choices: [
            { id: 'A', text: '$\\frac{1}{10}$' },
            { id: 'B', text: '$\\frac{1}{5}$' },
            { id: 'C', text: '$\\frac{1}{4}$' },
            { id: 'D', text: '$\\frac{1}{2}$' }
          ],
          correctAnswer: 'C',
          explanation: 'Probability $= \\frac{\\text{favorable outcomes}}{\\text{total outcomes}} = \\frac{25}{100} = \\frac{1}{4}$.'
        },
        {
          id: 'pt8-m1-q9',
          type: 'multiple-choice',
          question: 'Triangles $PQR$ and $STU$ are congruent, where $P$ corresponds to $S$, and $Q$ and $T$ are right angles. The measure of angle $P$ is $25°$. What is the measure of angle $U$?',
          choices: [
            { id: 'A', text: '$25°$' },
            { id: 'B', text: '$65°$' },
            { id: 'C', text: '$90°$' },
            { id: 'D', text: '$155°$' }
          ],
          correctAnswer: 'B',
          explanation: 'In triangle $PQR$: angle $P = 25°$, angle $Q = 90°$, so angle $R = 180° - 25° - 90° = 65°$. Since $R$ corresponds to $U$ in congruent triangles, angle $U = 65°$.'
        },
        {
          id: 'pt8-m1-q10',
          type: 'multiple-choice',
          question: 'If $3x + 4 = 16$, what is the value of $12x + 16$?',
          choices: [
            { id: 'A', text: '$48$' },
            { id: 'B', text: '$52$' },
            { id: 'C', text: '$64$' },
            { id: 'D', text: '$68$' }
          ],
          correctAnswer: 'C',
          explanation: 'Notice that $12x + 16 = 4(3x + 4)$. Since $3x + 4 = 16$, we have $12x + 16 = 4(16) = 64$.'
        },
        {
          id: 'pt8-m1-q11',
          type: 'multiple-choice',
          question: 'Which expression is equivalent to $(a^3b^2c^{-1})(a^2b^3c^4)$, where $a$, $b$, and $c$ are positive?',
          choices: [
            { id: 'A', text: '$a^5b^5c^3$' },
            { id: 'B', text: '$a^6b^6c^4$' },
            { id: 'C', text: '$a^5b^5c^{-4}$' },
            { id: 'D', text: '$a^6b^5c^{-5}$' }
          ],
          correctAnswer: 'A',
          explanation: 'Multiply by adding exponents: $a^{3+2} \\times b^{2+3} \\times c^{-1+4} = a^5b^5c^3$.'
        },
        {
          id: 'pt8-m1-q12',
          type: 'multiple-choice',
          question: 'A car travels from an altitude of $8{,}000$ feet to $2{,}000$ feet at a constant rate of $500$ feet per minute. What type of function best models the relationship between the car\'s altitude and time?',
          choices: [
            { id: 'A', text: 'Decreasing exponential' },
            { id: 'B', text: 'Decreasing linear' },
            { id: 'C', text: 'Increasing exponential' },
            { id: 'D', text: 'Increasing linear' }
          ],
          correctAnswer: 'B',
          explanation: 'A constant rate of change indicates a linear function. Since altitude is decreasing, it is a decreasing linear function.'
        },
        {
          id: 'pt8-m1-q13',
          type: 'fill-in',
          question: '$2x + 5y = 8$\n$2x + 3y = 4$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?',
          correctAnswer: '2',
          explanation: 'Subtracting the second equation from the first: $(2x + 5y) - (2x + 3y) = 8 - 4$, so $2y = 4$, giving $y = 2$.'
        },
        {
          id: 'pt8-m1-q14',
          type: 'fill-in',
          question: 'The function $f$ is defined by $f(x) = (x - 4)(x - 1)(x + 5)$. In the $xy$-plane, the graph of $y = g(x)$ is the result of translating the graph of $y = f(x)$ up $3$ units. What is the value of $g(0)$?',
          correctAnswer: '23',
          explanation: '$f(0) = (0 - 4)(0 - 1)(0 + 5) = (-4)(-1)(5) = 20$. Since $g(x) = f(x) + 3$, we have $g(0) = 20 + 3 = 23$.'
        },
        {
          id: 'pt8-m1-q15',
          type: 'multiple-choice',
          question: 'The function $f(w) = 5w^2$ gives the area of a rectangle, in square meters, if its width is $w$ meters and its length is $5$ times its width. Which of the following is the best interpretation of $f(8) = 320$?',
          choices: [
            { id: 'A', text: 'If the width of the rectangle is $8$ m, then the area of the rectangle is $320$ m².' },
            { id: 'B', text: 'If the width of the rectangle is $8$ m, then the length of the rectangle is $320$ m.' },
            { id: 'C', text: 'If the width of the rectangle is $320$ m, then the length of the rectangle is $8$ m.' },
            { id: 'D', text: 'If the width of the rectangle is $320$ m, then the area of the rectangle is $8$ m².' }
          ],
          correctAnswer: 'A',
          explanation: '$f(w)$ gives the area when width is $w$. So $f(8) = 320$ means when width is $8$ m, area is $320$ m².'
        },
        {
          id: 'pt8-m1-q16',
          type: 'multiple-choice',
          question: 'The population of bacteria in a culture triples every day. There are $5{,}000$ bacteria at the start of an observation. Which of the following represents the number of bacteria, $y$, in the culture $t$ days after the start of the observation?',
          choices: [
            { id: 'A', text: '$y = \\frac{1}{3}(5{,}000)^t$' },
            { id: 'B', text: '$y = 3(5{,}000)^t$' },
            { id: 'C', text: '$y = 5{,}000\\left(\\frac{1}{3}\\right)^t$' },
            { id: 'D', text: '$y = 5{,}000(3)^t$' }
          ],
          correctAnswer: 'D',
          explanation: 'For exponential growth that triples, $y = \\text{initial} \\times 3^t = 5{,}000(3)^t$.'
        },
        {
          id: 'pt8-m1-q17',
          type: 'multiple-choice',
          question: 'The table shows the exponential relationship between $x$, the number of years since starting a business, and $h(x)$, the revenue in thousands of dollars. Which function best represents this relationship?',
          questionTable: {
            headers: ['$x$', '$h(x)$'],
            rows: [
              ['$0$', '$50$'],
              ['$1$', '$60$'],
              ['$2$', '$72$']
            ]
          },
          choices: [
            { id: 'A', text: '$h(x) = 50(0.2)^x$' },
            { id: 'B', text: '$h(x) = 50(1.2)^x$' },
            { id: 'C', text: '$h(x) = 60(0.2)^x$' },
            { id: 'D', text: '$h(x) = 60(1.2)^x$' }
          ],
          correctAnswer: 'B',
          explanation: 'The initial value is $50$ (when $x = 0$). The ratio $\\frac{60}{50} = 1.2$, and $\\frac{72}{60} = 1.2$. So $h(x) = 50(1.2)^x$.'
        },
        {
          id: 'pt8-m1-q18',
          type: 'multiple-choice',
          question: 'The function $h$ is defined by $h(x) = 3x + 15$. The graph of $y = h(x)$ in the $xy$-plane has an $x$-intercept at $(a, 0)$ and a $y$-intercept at $(0, b)$, where $a$ and $b$ are constants. What is the value of $a + b$?',
          choices: [
            { id: 'A', text: '$10$' },
            { id: 'B', text: '$15$' },
            { id: 'C', text: '$18$' },
            { id: 'D', text: '$20$' }
          ],
          correctAnswer: 'A',
          explanation: 'For $x$-intercept, set $h(x) = 0$: $3x + 15 = 0$, so $x = -5$. Thus $a = -5$. For $y$-intercept, $h(0) = 15$, so $b = 15$. Therefore $a + b = -5 + 15 = 10$.'
        },
        {
          id: 'pt8-m1-q19',
          type: 'multiple-choice',
          question: '$y < 4x + 5$\n\nFor which of the following tables are all the values of $x$ and their corresponding values of $y$ solutions to the given inequality?',
          choices: [
            { id: 'A', table: { headers: ['x', 'y'], rows: [['2', '15'], ['3', '19'], ['4', '23']] } },
            { id: 'B', table: { headers: ['x', 'y'], rows: [['2', '12'], ['3', '16'], ['4', '20']] } },
            { id: 'C', table: { headers: ['x', 'y'], rows: [['2', '10'], ['3', '14'], ['4', '18']] } },
            { id: 'D', table: { headers: ['x', 'y'], rows: [['2', '8'], ['3', '12'], ['4', '16']] } }
          ],
          correctAnswer: 'D',
          explanation: 'Check D: For $x = 2$, $4(2) + 5 = 13$, and $8 < 13$ ✓. For $x = 3$, $4(3) + 5 = 17$, and $12 < 17$ ✓. For $x = 4$, $4(4) + 5 = 21$, and $16 < 21$ ✓. All values in D satisfy $y < 4x + 5$.'
        },
        {
          id: 'pt8-m1-q20',
          type: 'fill-in',
          question: '$y = 2x + 1$\n$2y = 6x - 2$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $x - y$?',
          correctAnswer: '-3',
          explanation: 'Substitute $y = 2x + 1$ into $2y = 6x - 2$: $2(2x + 1) = 6x - 2$, so $4x + 2 = 6x - 2$. Then $-2x = -4$, giving $x = 2$. So $y = 2(2) + 1 = 5$. Therefore $x - y = 2 - 5 = -3$.'
        },
        {
          id: 'pt8-m1-q21',
          type: 'fill-in',
          question: 'A right triangle has legs with lengths of $15$ centimeters and $20$ centimeters. What is the length of this triangle\'s hypotenuse, in centimeters?',
          correctAnswer: '25',
          explanation: 'Using the Pythagorean theorem: $c^2 = 15^2 + 20^2 = 225 + 400 = 625$. So $c = \\sqrt{625} = 25$ centimeters.'
        },
        {
          id: 'pt8-m1-q22',
          type: 'multiple-choice',
          question: 'The floor of a conference room has an area of $800$ square meters. An architect creates a scale model where the length of each side is $\\frac{1}{20}$ times the length of the corresponding side of the actual floor. What is the area, in square meters, of the scale model?',
          choices: [
            { id: 'A', text: '$2$' },
            { id: 'B', text: '$8$' },
            { id: 'C', text: '$40$' },
            { id: 'D', text: '$200$' }
          ],
          correctAnswer: 'A',
          explanation: 'When linear dimensions are scaled by factor $k$, area is scaled by $k^2$. Here $k = \\frac{1}{20}$, so area scales by $\\left(\\frac{1}{20}\\right)^2 = \\frac{1}{400}$. Area of model $= \\frac{800}{400} = 2$ square meters.'
        }
      ]
    },
    {
      id: 'module-2',
      title: 'Module 2',
      questions: [
        {
          id: 'pt8-m2-q1',
          type: 'multiple-choice',
          question: 'An object\'s speed is $48$ feet per second. What is the object\'s speed, in yards per second? ($1$ yard $= 3$ feet)',
          choices: [
            { id: 'A', text: '$16$' },
            { id: 'B', text: '$45$' },
            { id: 'C', text: '$51$' },
            { id: 'D', text: '$144$' }
          ],
          correctAnswer: 'A',
          explanation: '$48$ feet $\\div 3$ feet/yard $= 16$ yards per second.'
        },
        {
          id: 'pt8-m2-q2',
          type: 'multiple-choice',
          question: 'The scatterplot shows the relationship between $x$ and $y$. The line of best fit passes through the origin. Which equation best represents the line of best fit?',
          diagram: {
            type: 'scatterplot',
            params: {
              points: [[1, 2], [2, 2.5], [2, 3.5], [3, 4], [3, 5], [4, 5.5], [4, 6.5], [5, 7], [5, 8], [6, 9], [6, 10], [7, 10], [7, 11]],
              xMax: 8,
              yMax: 12,
              bestFitLine: { slope: 1.5, intercept: 0 }
            }
          },
          choices: [
            { id: 'A', text: '$y = x + 1.5$' },
            { id: 'B', text: '$y = x - 1.5$' },
            { id: 'C', text: '$y = 1.5x$' },
            { id: 'D', text: '$y = -1.5x$' }
          ],
          correctAnswer: 'C',
          explanation: 'A line through the origin has $y$-intercept $0$. With slope $1.5$, the equation is $y = 1.5x$.'
        },
        {
          id: 'pt8-m2-q3',
          type: 'multiple-choice',
          question: 'The graph of a linear relationship is shown. Which table gives three values of $x$ and their corresponding values of $y$ for this relationship?',
          diagram: {
            type: 'linearGraph',
            params: {
              slope: 2,
              yIntercept: -4,
              xRange: [-6, 6],
              yRange: [-6, 6],
              xTickInterval: 2,
              yTickInterval: 2,
              highlightPoints: [[0, -4], [2, 0]]
            }
          },
          choices: [
            { id: 'A', table: { headers: ['x', 'y'], rows: [['0', '0'], ['1', '-2'], ['2', '-4']] } },
            { id: 'B', table: { headers: ['x', 'y'], rows: [['0', '-4'], ['1', '-2'], ['2', '0']] } },
            { id: 'C', table: { headers: ['x', 'y'], rows: [['0', '-4'], ['1', '-6'], ['2', '-8']] } },
            { id: 'D', table: { headers: ['x', 'y'], rows: [['0', '4'], ['1', '2'], ['2', '0']] } }
          ],
          correctAnswer: 'B',
          explanation: 'The line passes through $(0, -4)$ and $(2, 0)$. Slope $= \\frac{0 - (-4)}{2 - 0} = \\frac{4}{2} = 2$. Equation: $y = 2x - 4$. Check: $x = 0$, $y = -4$ ✓; $x = 1$, $y = -2$ ✓; $x = 2$, $y = 0$ ✓.'
        },
        {
          id: 'pt8-m2-q4',
          type: 'multiple-choice',
          question: 'What is the perimeter, in centimeters, of a rectangle with a length of $7$ centimeters and a width of $5$ centimeters?',
          choices: [
            { id: 'A', text: '$12$' },
            { id: 'B', text: '$24$' },
            { id: 'C', text: '$35$' },
            { id: 'D', text: '$70$' }
          ],
          correctAnswer: 'B',
          explanation: 'Perimeter $= 2(\\text{length} + \\text{width}) = 2(7 + 5) = 2(12) = 24$ centimeters.'
        },
        {
          id: 'pt8-m2-q5',
          type: 'multiple-choice',
          question: '$5m = 3(n + p)$\n\nThe given equation relates the positive numbers $m$, $n$, and $p$. Which equation correctly gives $m$ in terms of $n$ and $p$?',
          choices: [
            { id: 'A', text: '$m = \\frac{3(n + p)}{5}$' },
            { id: 'B', text: '$m = 3(n + p)$' },
            { id: 'C', text: '$m = 3(n + p) - 5$' },
            { id: 'D', text: '$m = 3 - n - p - 5$' }
          ],
          correctAnswer: 'A',
          explanation: 'From $5m = 3(n + p)$, divide both sides by $5$: $m = \\frac{3(n + p)}{5}$.'
        },
        {
          id: 'pt8-m2-q6',
          type: 'fill-in',
          question: '$45, 52, 58, 63, 67, 72, 78, 85, 92$\n\nWhat is the median of the data shown?',
          correctAnswer: '67',
          explanation: 'There are $9$ values. The median is the middle value, which is the 5th value: $67$.'
        },
        {
          id: 'pt8-m2-q7',
          type: 'fill-in',
          question: 'The function $f$ is defined by $f(x) = 5x$. For what value of $x$ does $f(x) = 35$?',
          correctAnswer: '7',
          explanation: 'Set $5x = 35$. Dividing by $5$: $x = 7$.'
        },
        {
          id: 'pt8-m2-q8',
          type: 'multiple-choice',
          question: 'Of $250$ marbles, $175$ are blue. What percentage of the marbles are blue?',
          choices: [
            { id: 'A', text: '$30\\%$' },
            { id: 'B', text: '$43\\%$' },
            { id: 'C', text: '$70\\%$' },
            { id: 'D', text: '$75\\%$' }
          ],
          correctAnswer: 'C',
          explanation: '$\\frac{175}{250} \\times 100 = 0.70 \\times 100 = 70\\%$.'
        },
        {
          id: 'pt8-m2-q9',
          type: 'multiple-choice',
          question: '$f(x) = 6x + 10$\n\nThe function $f$ gives the estimated distance, in miles, a hiker travels $x$ hours after starting a trail. Which statement is the best interpretation of $10$ in this context?',
          choices: [
            { id: 'A', text: 'The hiker will walk for $10$ hours.' },
            { id: 'B', text: 'The hiker is estimated to travel a maximum of $10$ miles.' },
            { id: 'C', text: 'The estimated distance increases by $10$ miles each hour.' },
            { id: 'D', text: 'The hiker had already traveled $10$ miles when timing started.' }
          ],
          correctAnswer: 'D',
          explanation: 'In $f(x) = 6x + 10$, the constant $10$ is the $y$-intercept, representing the distance when $x = 0$ (when timing started).'
        },
        {
          id: 'pt8-m2-q10',
          type: 'multiple-choice',
          question: '$y = 49$\n$y = x^2 - 15$\n\nThe graphs of the given equations in the $xy$-plane intersect at the point $(x, y)$. What is a possible value of $x$?',
          choices: [
            { id: 'A', text: '$-64$' },
            { id: 'B', text: '$-8$' },
            { id: 'C', text: '$7$' },
            { id: 'D', text: '$49$' }
          ],
          correctAnswer: 'B',
          explanation: 'Set $49 = x^2 - 15$. Then $x^2 = 64$, so $x = \\pm 8$. Choice B ($-8$) is a valid answer.'
        },
        {
          id: 'pt8-m2-q11',
          type: 'multiple-choice',
          question: 'Each side of equilateral triangle $A$ is multiplied by a scale factor of $k$ to create equilateral triangle $B$. The length of each side of triangle $B$ is greater than the length of each side of triangle $A$. Which could be the value of $k$?',
          choices: [
            { id: 'A', text: '$\\frac{5}{4}$' },
            { id: 'B', text: '$1$' },
            { id: 'C', text: '$\\frac{4}{5}$' },
            { id: 'D', text: '$0$' }
          ],
          correctAnswer: 'A',
          explanation: 'For triangle $B$ to have larger sides than triangle $A$, the scale factor $k$ must be greater than $1$. Only $\\frac{5}{4} = 1.25 > 1$.'
        },
        {
          id: 'pt8-m2-q12',
          type: 'multiple-choice',
          question: '$42x = 42x$\n\nHow many solutions does the given equation have?',
          choices: [
            { id: 'A', text: 'Exactly one' },
            { id: 'B', text: 'Exactly two' },
            { id: 'C', text: 'Infinitely many' },
            { id: 'D', text: 'Zero' }
          ],
          correctAnswer: 'C',
          explanation: 'The equation $42x = 42x$ is true for all values of $x$, so it has infinitely many solutions.'
        },
        {
          id: 'pt8-m2-q13',
          type: 'fill-in',
          question: 'Marcus bought notebooks and pens for \\$54. Each notebook cost \\$4, and each pen cost \\$2. If Marcus bought $8$ notebooks, how many pens did he buy?',
          correctAnswer: '11',
          explanation: 'Cost of notebooks $= 8 \\times \\$4 = \\$32$. Remaining for pens $= \\$54 - \\$32 = \\$22$. Number of pens $= \\$22 \\div \\$2 = 11$.'
        },
        {
          id: 'pt8-m2-q14',
          type: 'fill-in',
          question: 'The exponential function $g$ is defined by $g(x) = 12 \\cdot a^x$, where $a$ is a positive constant. If $g(2) = 300$, what is the value of $g(3)$?',
          correctAnswer: '1500',
          explanation: '$g(2) = 12 \\cdot a^2 = 300$, so $a^2 = 25$, giving $a = 5$. Then $g(3) = 12 \\cdot 5^3 = 12 \\cdot 125 = 1{,}500$.'
        },
        {
          id: 'pt8-m2-q15',
          type: 'multiple-choice',
          question: 'In right triangle $ABC$, the sum of the measures of angle $A$ and angle $B$ is $90$ degrees. The value of $\\sin(A)$ is $\\frac{3}{5}$. What is the value of $\\cos(B)$?',
          choices: [
            { id: 'A', text: '$\\frac{3}{5}$' },
            { id: 'B', text: '$\\frac{4}{5}$' },
            { id: 'C', text: '$\\frac{5}{4}$' },
            { id: 'D', text: '$\\frac{5}{3}$' }
          ],
          correctAnswer: 'A',
          explanation: 'Since $A + B = 90°$, we have $B = 90° - A$. Therefore $\\cos(B) = \\cos(90° - A) = \\sin(A) = \\frac{3}{5}$.'
        },
        {
          id: 'pt8-m2-q16',
          type: 'multiple-choice',
          question: 'The graph shows the relationship between shares of stock from Company $X$ and Company $Y$. Which equation represents this relationship?',
          diagram: {
            type: 'linearGraph',
            params: {
              slope: -1.5,
              yIntercept: 60,
              xRange: [-5, 50],
              yRange: [-5, 70],
              xTickInterval: 10,
              yTickInterval: 10,
              highlightPoints: [[0, 60], [40, 0]]
            }
          },
          choices: [
            { id: 'A', text: '$y = 60x + 40$' },
            { id: 'B', text: '$3x + 2y = 120$' },
            { id: 'C', text: '$y = 40x + 60$' },
            { id: 'D', text: '$2x + 3y = 120$' }
          ],
          correctAnswer: 'B',
          explanation: 'Check B with points: At $(0, 60)$: $3(0) + 2(60) = 120$ ✓. At $(40, 0)$: $3(40) + 2(0) = 120$ ✓.'
        },
        {
          id: 'pt8-m2-q17',
          type: 'multiple-choice',
          question: 'Which expression is equivalent to $\\frac{6x(x - 5) - 2(x - 5)}{3x - 15}$, where $x > 5$?',
          choices: [
            { id: 'A', text: '$\\frac{x - 5}{2}$' },
            { id: 'B', text: '$\\frac{6x - 2}{3}$' },
            { id: 'C', text: '$\\frac{6x^2 - 2x - 30}{3x - 15}$' },
            { id: 'D', text: '$\\frac{2(x - 5)}{3}$' }
          ],
          correctAnswer: 'B',
          explanation: 'Factor numerator: $6x(x - 5) - 2(x - 5) = (x - 5)(6x - 2)$. Factor denominator: $3x - 15 = 3(x - 5)$. So $\\frac{(x - 5)(6x - 2)}{3(x - 5)} = \\frac{6x - 2}{3}$.'
        },
        {
          id: 'pt8-m2-q18',
          type: 'multiple-choice',
          question: 'The function $f$ is defined by $f(x) = (-5)(3)^x + 18$. What is the $y$-intercept of the graph of $y = f(x)$ in the $xy$-plane?',
          choices: [
            { id: 'A', text: '$(0, 13)$' },
            { id: 'B', text: '$(0, 18)$' },
            { id: 'C', text: '$(0, 23)$' },
            { id: 'D', text: '$(0, -5)$' }
          ],
          correctAnswer: 'A',
          explanation: 'The $y$-intercept is $f(0) = (-5)(3)^0 + 18 = (-5)(1) + 18 = -5 + 18 = 13$. The point is $(0, 13)$.'
        },
        {
          id: 'pt8-m2-q19',
          type: 'multiple-choice',
          question: 'For the exponential function $f$, the value of $f(1)$ is $k$, where $k$ is a constant. Which of the following equivalent forms of the function $f$ shows the value of $k$ as the coefficient or the base?',
          choices: [
            { id: 'A', text: '$f(x) = 40(1.5)^{x+1}$' },
            { id: 'B', text: '$f(x) = 60(1.5)^x$' },
            { id: 'C', text: '$f(x) = 90(1.5)^{x-1}$' },
            { id: 'D', text: '$f(x) = 135(1.5)^{x-2}$' }
          ],
          correctAnswer: 'C',
          explanation: 'We need $f(1) = k$ to appear as a coefficient. In option C: $f(1) = 90(1.5)^{1-1} = 90(1.5)^0 = 90(1) = 90$. So $k = 90$ appears as the coefficient. Verify all forms are equivalent: A: $f(1) = 40(1.5)^2 = 90$ ✓. B: $f(1) = 60(1.5) = 90$ ✓. D: $f(1) = 135(1.5)^{-1} = \\frac{135}{1.5} = 90$ ✓.'
        },
        {
          id: 'pt8-m2-q20',
          type: 'multiple-choice',
          question: '$-4x^2 + 24x + c = 0$\n\nIn the given equation, $c$ is a constant. The equation has exactly one solution. What is the value of $c$?',
          choices: [
            { id: 'A', text: '$36$' },
            { id: 'B', text: '$0$' },
            { id: 'C', text: '$-36$' },
            { id: 'D', text: '$-144$' }
          ],
          correctAnswer: 'C',
          explanation: 'For exactly one solution, the discriminant must equal zero: $b^2 - 4ac = 0$. Here $a = -4$, $b = 24$, so $24^2 - 4(-4)(c) = 0$. Thus $576 + 16c = 0$, giving $16c = -576$, so $c = -36$.'
        },
        {
          id: 'pt8-m2-q21',
          type: 'multiple-choice',
          question: 'Which of the following expressions has a factor of $(x + 3b)$, where $b$ is a positive integer constant?',
          choices: [
            { id: 'A', text: '$2x^2 + 5x + 6b$' },
            { id: 'B', text: '$2x^2 + 8bx + 6b$' },
            { id: 'C', text: '$2x^2 + 10bx + 6b$' },
            { id: 'D', text: '$2x^2 + 12bx + 6b$' }
          ],
          correctAnswer: 'B',
          explanation: 'If $(x + 3b)$ is a factor, then $x = -3b$ is a root. For factoring: $2x^2 + 8bx + 6b$. Factor out $2$: $2(x^2 + 4bx + 3b)$. If this factors as $2(x + 3b)(x + b) = 2(x^2 + 4bx + 3b^2)$. We need $3b = 3b^2$, so $b = 1$. Then $2x^2 + 8x + 6 = 2(x + 3)(x + 1)$, and $(x + 3) = (x + 3b)$ when $b = 1$ ✓.'
        },
        {
          id: 'pt8-m2-q22',
          type: 'fill-in',
          question: 'The perimeter of an equilateral triangle is $432$ centimeters. The height of this triangle is $k\\sqrt{3}$ centimeters, where $k$ is a constant. What is the value of $k$?',
          correctAnswer: '72',
          explanation: 'Each side of the equilateral triangle $= 432 \\div 3 = 144$ cm. For an equilateral triangle with side $s$, the height $h = \\frac{s\\sqrt{3}}{2}$. So $h = \\frac{144\\sqrt{3}}{2} = 72\\sqrt{3}$ cm. Therefore $k = 72$.'
        }
      ]
    }
  ]
};
