// Practice Test 7 - Based on College Board SAT Practice Test #6
// 44 original questions inspired by official SAT format

export const practiceTest7 = {
  id: 'practice-test-7',
  title: 'Practice Test 7',
  description: 'Full-length SAT Math practice test with 44 questions across two modules.',
  modules: [
    {
      id: 'module-1',
      title: 'Module 1',
      questions: [
        {
          id: 'pt7-m1-q1',
          type: 'multiple-choice',
          question: 'If $5x - 15 = 30$, what is the value of $x - 3$?',
          choices: [
            { id: 'A', text: '$6$' },
            { id: 'B', text: '$9$' },
            { id: 'C', text: '$12$' },
            { id: 'D', text: '$15$' }
          ],
          correctAnswer: 'A',
          explanation: 'From $5x - 15 = 30$, we can factor: $5(x - 3) = 30$. Dividing both sides by $5$: $x - 3 = 6$.'
        },
        {
          id: 'pt7-m1-q2',
          type: 'multiple-choice',
          question: 'A researcher collected data on the relationship between hours of sunlight and plant height. The scatterplot shows a positive linear relationship. If the line of best fit has equation $h = 2.5s + 4$, where $h$ is height in centimeters and $s$ is hours of sunlight, what does the $4$ represent?',
          choices: [
            { id: 'A', text: 'The increase in height for each additional hour of sunlight' },
            { id: 'B', text: 'The predicted height when there is no sunlight' },
            { id: 'C', text: 'The maximum height of the plants' },
            { id: 'D', text: 'The number of hours of sunlight needed' }
          ],
          correctAnswer: 'B',
          explanation: 'In the equation $h = 2.5s + 4$, the constant term $4$ is the $y$-intercept, representing the predicted height when $s = 0$ (no sunlight).'
        },
        {
          id: 'pt7-m1-q3',
          type: 'multiple-choice',
          question: 'What is the solution to $\\sqrt{3x + 7} = 5$?',
          choices: [
            { id: 'A', text: '$4$' },
            { id: 'B', text: '$6$' },
            { id: 'C', text: '$8$' },
            { id: 'D', text: '$10$' }
          ],
          correctAnswer: 'B',
          explanation: 'Squaring both sides: $3x + 7 = 25$. Subtracting $7$: $3x = 18$. Dividing by $3$: $x = 6$. Check: $\\sqrt{3(6) + 7} = \\sqrt{25} = 5$ ✓'
        },
        {
          id: 'pt7-m1-q4',
          type: 'multiple-choice',
          question: 'Which inequality represents all values of $x$ such that $3x - 7 > 2x + 5$?',
          choices: [
            { id: 'A', text: '$x > 12$' },
            { id: 'B', text: '$x > -12$' },
            { id: 'C', text: '$x < 12$' },
            { id: 'D', text: '$x < -12$' }
          ],
          correctAnswer: 'A',
          explanation: 'Subtracting $2x$ from both sides: $x - 7 > 5$. Adding $7$ to both sides: $x > 12$.'
        },
        {
          id: 'pt7-m1-q5',
          type: 'multiple-choice',
          question: 'The function $f(t) = 800(1.06)^t$ models the value of an investment after $t$ years. What does $800$ represent in this context?',
          choices: [
            { id: 'A', text: 'The annual interest rate' },
            { id: 'B', text: 'The initial investment amount' },
            { id: 'C', text: 'The value after one year' },
            { id: 'D', text: 'The total interest earned' }
          ],
          correctAnswer: 'B',
          explanation: 'In the exponential function $f(t) = 800(1.06)^t$, $800$ is the initial value when $t = 0$, representing the initial investment amount.'
        },
        {
          id: 'pt7-m1-q6',
          type: 'multiple-choice',
          question: 'A phone plan charges a monthly fee of \\$25 plus \\$0.05 per text message. Which equation represents the total monthly cost $C$ in terms of the number of text messages $m$?',
          choices: [
            { id: 'A', text: '$C = 0.05m + 25$' },
            { id: 'B', text: '$C = 25m + 0.05$' },
            { id: 'C', text: '$C = 0.05(m + 25)$' },
            { id: 'D', text: '$C = 25(m + 0.05)$' }
          ],
          correctAnswer: 'A',
          explanation: 'The total cost is the fixed monthly fee (\\$25) plus the variable cost (\\$0.05 per message × number of messages). So $C = 0.05m + 25$.'
        },
        {
          id: 'pt7-m1-q7',
          type: 'multiple-choice',
          question: 'A triangle has a base of $12$ inches and a height of $8$ inches. What is the area of the triangle in square inches?',
          choices: [
            { id: 'A', text: '$20$' },
            { id: 'B', text: '$48$' },
            { id: 'C', text: '$96$' },
            { id: 'D', text: '$192$' }
          ],
          correctAnswer: 'B',
          explanation: 'Area of a triangle $= \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 12 \\times 8 = 48$ square inches.'
        },
        {
          id: 'pt7-m1-q8',
          type: 'multiple-choice',
          question: 'If $x^2 - 6x + 9 = 0$, what is the value of $x$?',
          choices: [
            { id: 'A', text: '$-3$' },
            { id: 'B', text: '$3$' },
            { id: 'C', text: '$-3$ or $3$' },
            { id: 'D', text: '$9$' }
          ],
          correctAnswer: 'B',
          explanation: 'Factoring: $x^2 - 6x + 9 = (x - 3)^2 = 0$. Therefore, $x - 3 = 0$, so $x = 3$.'
        },
        {
          id: 'pt7-m1-q9',
          type: 'multiple-choice',
          question: 'The equation $y = 2x^2 - 8x + 10$ represents a parabola. What is the $y$-intercept?',
          choices: [
            { id: 'A', text: '$2$' },
            { id: 'B', text: '$-8$' },
            { id: 'C', text: '$10$' },
            { id: 'D', text: '$0$' }
          ],
          correctAnswer: 'C',
          explanation: 'The $y$-intercept occurs when $x = 0$. Substituting: $y = 2(0)^2 - 8(0) + 10 = 10$.'
        },
        {
          id: 'pt7-m1-q10',
          type: 'multiple-choice',
          question: 'A store increases the price of an item by $25\\%$. If the new price is \\$75, what was the original price?',
          choices: [
            { id: 'A', text: '\\$50' },
            { id: 'B', text: '\\$56.25' },
            { id: 'C', text: '\\$60' },
            { id: 'D', text: '\\$62.50' }
          ],
          correctAnswer: 'C',
          explanation: 'If the original price is $p$, then $1.25p = 75$. Dividing by $1.25$: $p = \\frac{75}{1.25} = \\$60$.'
        },
        {
          id: 'pt7-m1-q11',
          type: 'multiple-choice',
          question: 'The equation of a circle is $(x - 4)^2 + (y + 2)^2 = 36$. What is the radius of the circle?',
          choices: [
            { id: 'A', text: '$4$' },
            { id: 'B', text: '$6$' },
            { id: 'C', text: '$18$' },
            { id: 'D', text: '$36$' }
          ],
          correctAnswer: 'B',
          explanation: 'The standard form of a circle is $(x - h)^2 + (y - k)^2 = r^2$. Here, $r^2 = 36$, so $r = 6$.'
        },
        {
          id: 'pt7-m1-q12',
          type: 'multiple-choice',
          question: 'In a right triangle, if $\\sin(\\theta) = \\frac{5}{13}$, what is $\\cos(\\theta)$?',
          choices: [
            { id: 'A', text: '$\\frac{5}{13}$' },
            { id: 'B', text: '$\\frac{12}{13}$' },
            { id: 'C', text: '$\\frac{5}{12}$' },
            { id: 'D', text: '$\\frac{13}{12}$' }
          ],
          correctAnswer: 'B',
          explanation: 'Using the Pythagorean identity: $\\sin^2(\\theta) + \\cos^2(\\theta) = 1$. So $\\left(\\frac{5}{13}\\right)^2 + \\cos^2(\\theta) = 1$. Thus $\\cos^2(\\theta) = 1 - \\frac{25}{169} = \\frac{144}{169}$, and $\\cos(\\theta) = \\frac{12}{13}$.'
        },
        {
          id: 'pt7-m1-q13',
          type: 'fill-in',
          question: 'If $4(2x + 3) = 28$, what is the value of $x$?',
          correctAnswer: '2',
          explanation: 'Distributing: $8x + 12 = 28$. Subtracting $12$: $8x = 16$. Dividing by $8$: $x = 2$.'
        },
        {
          id: 'pt7-m1-q14',
          type: 'multiple-choice',
          question: 'The function $g(x) = 3x - 7$. What is $g(5)$?',
          choices: [
            { id: 'A', text: '$2$' },
            { id: 'B', text: '$8$' },
            { id: 'C', text: '$15$' },
            { id: 'D', text: '$22$' }
          ],
          correctAnswer: 'B',
          explanation: 'Substituting $x = 5$: $g(5) = 3(5) - 7 = 15 - 7 = 8$.'
        },
        {
          id: 'pt7-m1-q15',
          type: 'multiple-choice',
          question: 'If $f(x) = x^2 + 4x - 5$, for what value of $x$ does $f(x) = 0$?',
          choices: [
            { id: 'A', text: '$x = 1$ only' },
            { id: 'B', text: '$x = -5$ only' },
            { id: 'C', text: '$x = 1$ or $x = -5$' },
            { id: 'D', text: '$x = -1$ or $x = 5$' }
          ],
          correctAnswer: 'C',
          explanation: 'Factoring: $x^2 + 4x - 5 = (x + 5)(x - 1) = 0$. So $x = -5$ or $x = 1$.'
        },
        {
          id: 'pt7-m1-q16',
          type: 'multiple-choice',
          question: 'A line passes through the points $(2, 5)$ and $(6, 13)$. What is the slope of the line?',
          choices: [
            { id: 'A', text: '$\\frac{1}{2}$' },
            { id: 'B', text: '$2$' },
            { id: 'C', text: '$4$' },
            { id: 'D', text: '$8$' }
          ],
          correctAnswer: 'B',
          explanation: 'Slope $= \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{13 - 5}{6 - 2} = \\frac{8}{4} = 2$.'
        },
        {
          id: 'pt7-m1-q17',
          type: 'fill-in',
          question: 'What is the value of $3^2 + 4^2$?',
          correctAnswer: '25',
          explanation: '$3^2 + 4^2 = 9 + 16 = 25$.'
        },
        {
          id: 'pt7-m1-q18',
          type: 'multiple-choice',
          question: 'Which expression is equivalent to $(2x^3)^2$?',
          choices: [
            { id: 'A', text: '$2x^6$' },
            { id: 'B', text: '$4x^5$' },
            { id: 'C', text: '$4x^6$' },
            { id: 'D', text: '$2x^9$' }
          ],
          correctAnswer: 'C',
          explanation: '$(2x^3)^2 = 2^2 \\times (x^3)^2 = 4 \\times x^6 = 4x^6$.'
        },
        {
          id: 'pt7-m1-q19',
          type: 'multiple-choice',
          question: 'The sum of three consecutive integers is $72$. What is the largest of these integers?',
          choices: [
            { id: 'A', text: '$23$' },
            { id: 'B', text: '$24$' },
            { id: 'C', text: '$25$' },
            { id: 'D', text: '$26$' }
          ],
          correctAnswer: 'C',
          explanation: 'Let the integers be $n$, $n+1$, $n+2$. Then $n + (n+1) + (n+2) = 72$, so $3n + 3 = 72$, $3n = 69$, $n = 23$. The largest is $23 + 2 = 25$.'
        },
        {
          id: 'pt7-m1-q20',
          type: 'multiple-choice',
          question: 'If $2y - 3 = 11$, what is the value of $4y$?',
          choices: [
            { id: 'A', text: '$14$' },
            { id: 'B', text: '$22$' },
            { id: 'C', text: '$28$' },
            { id: 'D', text: '$44$' }
          ],
          correctAnswer: 'C',
          explanation: 'From $2y - 3 = 11$, we get $2y = 14$, so $y = 7$. Therefore, $4y = 4(7) = 28$.'
        },
        {
          id: 'pt7-m1-q21',
          type: 'fill-in',
          question: 'A rectangle has a perimeter of $28$ cm. If the length is $9$ cm, what is the width in cm?',
          correctAnswer: '5',
          explanation: 'Perimeter $= 2(\\text{length} + \\text{width})$. So $28 = 2(9 + \\text{width})$, $14 = 9 + \\text{width}$, width $= 5$ cm.'
        },
        {
          id: 'pt7-m1-q22',
          type: 'multiple-choice',
          question: 'Which of the following is equivalent to $(x + 3)(x - 3)$?',
          choices: [
            { id: 'A', text: '$x^2 - 9$' },
            { id: 'B', text: '$x^2 + 9$' },
            { id: 'C', text: '$x^2 - 6x + 9$' },
            { id: 'D', text: '$x^2 + 6x + 9$' }
          ],
          correctAnswer: 'A',
          explanation: 'Using the difference of squares formula: $(x + 3)(x - 3) = x^2 - 3^2 = x^2 - 9$.'
        }
      ]
    },
    {
      id: 'module-2',
      title: 'Module 2',
      questions: [
        {
          id: 'pt7-m2-q1',
          type: 'multiple-choice',
          question: 'If $f(x) = 2x^2 - 3x + 1$, what is $f(-2)$?',
          choices: [
            { id: 'A', text: '$3$' },
            { id: 'B', text: '$11$' },
            { id: 'C', text: '$15$' },
            { id: 'D', text: '$19$' }
          ],
          correctAnswer: 'C',
          explanation: '$f(-2) = 2(-2)^2 - 3(-2) + 1 = 2(4) + 6 + 1 = 8 + 6 + 1 = 15$.'
        },
        {
          id: 'pt7-m2-q2',
          type: 'multiple-choice',
          question: 'Two lines intersect, forming vertical angles. If one angle measures $65°$, what is the measure of the angle adjacent to it?',
          choices: [
            { id: 'A', text: '$25°$' },
            { id: 'B', text: '$65°$' },
            { id: 'C', text: '$115°$' },
            { id: 'D', text: '$130°$' }
          ],
          correctAnswer: 'C',
          explanation: 'Adjacent angles on a straight line are supplementary (sum to $180°$). So the adjacent angle $= 180° - 65° = 115°$.'
        },
        {
          id: 'pt7-m2-q3',
          type: 'multiple-choice',
          question: 'A bag contains $4$ red marbles, $6$ blue marbles, and $5$ green marbles. If one marble is selected at random, what is the probability of selecting a blue marble?',
          choices: [
            { id: 'A', text: '$\\frac{1}{5}$' },
            { id: 'B', text: '$\\frac{2}{5}$' },
            { id: 'C', text: '$\\frac{6}{15}$' },
            { id: 'D', text: '$\\frac{2}{3}$' }
          ],
          correctAnswer: 'B',
          explanation: 'Total marbles $= 4 + 6 + 5 = 15$. Probability of blue $= \\frac{6}{15} = \\frac{2}{5}$.'
        },
        {
          id: 'pt7-m2-q4',
          type: 'multiple-choice',
          question: 'Which function represents exponential decay?',
          choices: [
            { id: 'A', text: '$f(x) = 3x + 2$' },
            { id: 'B', text: '$f(x) = 100(1.05)^x$' },
            { id: 'C', text: '$f(x) = 50(0.85)^x$' },
            { id: 'D', text: '$f(x) = x^2 - 4$' }
          ],
          correctAnswer: 'C',
          explanation: 'Exponential decay has the form $f(x) = a(b)^x$ where $0 < b < 1$. In $f(x) = 50(0.85)^x$, the base $0.85$ is between $0$ and $1$.'
        },
        {
          id: 'pt7-m2-q5',
          type: 'multiple-choice',
          question: 'The line $y = -3x + 12$ intersects the $y$-axis at what point?',
          choices: [
            { id: 'A', text: '$(0, -3)$' },
            { id: 'B', text: '$(0, 12)$' },
            { id: 'C', text: '$(12, 0)$' },
            { id: 'D', text: '$(-3, 0)$' }
          ],
          correctAnswer: 'B',
          explanation: 'The $y$-intercept is the point where $x = 0$. Substituting: $y = -3(0) + 12 = 12$. The point is $(0, 12)$.'
        },
        {
          id: 'pt7-m2-q6',
          type: 'multiple-choice',
          question: 'What is the solution to the system of equations: $x + y = 10$ and $x - y = 4$?',
          choices: [
            { id: 'A', text: '$x = 7$, $y = 3$' },
            { id: 'B', text: '$x = 3$, $y = 7$' },
            { id: 'C', text: '$x = 6$, $y = 4$' },
            { id: 'D', text: '$x = 8$, $y = 2$' }
          ],
          correctAnswer: 'A',
          explanation: 'Adding the equations: $2x = 14$, so $x = 7$. Substituting into $x + y = 10$: $7 + y = 10$, so $y = 3$.'
        },
        {
          id: 'pt7-m2-q7',
          type: 'multiple-choice',
          question: 'A survey found that $35\\%$ of $200$ students prefer online classes. How many students prefer online classes?',
          choices: [
            { id: 'A', text: '$35$' },
            { id: 'B', text: '$65$' },
            { id: 'C', text: '$70$' },
            { id: 'D', text: '$130$' }
          ],
          correctAnswer: 'C',
          explanation: '$35\\%$ of $200 = 0.35 \\times 200 = 70$ students.'
        },
        {
          id: 'pt7-m2-q8',
          type: 'multiple-choice',
          question: 'Which expression is equivalent to $x^3 - 8$?',
          choices: [
            { id: 'A', text: '$(x - 2)(x^2 + 2x + 4)$' },
            { id: 'B', text: '$(x - 2)(x^2 - 2x + 4)$' },
            { id: 'C', text: '$(x + 2)(x^2 - 2x + 4)$' },
            { id: 'D', text: '$(x - 2)(x - 2)(x - 2)$' }
          ],
          correctAnswer: 'A',
          explanation: 'Using the difference of cubes formula: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$. Here, $x^3 - 8 = x^3 - 2^3 = (x - 2)(x^2 + 2x + 4)$.'
        },
        {
          id: 'pt7-m2-q9',
          type: 'fill-in',
          question: 'The ratio of boys to girls in a class is $3:5$. If there are $24$ boys, how many girls are in the class?',
          correctAnswer: '40',
          explanation: 'If boys:girls $= 3:5$ and boys $= 24$, then $\\frac{24}{3} = 8$ represents one unit. Girls $= 5 \\times 8 = 40$.'
        },
        {
          id: 'pt7-m2-q10',
          type: 'multiple-choice',
          question: 'Which equation is equivalent to $2(x - 4) = 3(x + 1)$?',
          choices: [
            { id: 'A', text: '$2x - 8 = 3x + 3$' },
            { id: 'B', text: '$2x - 4 = 3x + 1$' },
            { id: 'C', text: '$2x - 8 = 3x + 1$' },
            { id: 'D', text: '$2x - 4 = 3x + 3$' }
          ],
          correctAnswer: 'A',
          explanation: 'Distributing both sides: $2(x - 4) = 2x - 8$ and $3(x + 1) = 3x + 3$. So $2x - 8 = 3x + 3$.'
        },
        {
          id: 'pt7-m2-q11',
          type: 'multiple-choice',
          question: 'A car travels at a constant rate of $55$ miles per hour. The equation $d = 55t$ represents the distance $d$ traveled in $t$ hours. If the car travels $220$ miles, how many hours did it travel?',
          choices: [
            { id: 'A', text: '$3$' },
            { id: 'B', text: '$4$' },
            { id: 'C', text: '$5$' },
            { id: 'D', text: '$6$' }
          ],
          correctAnswer: 'B',
          explanation: 'Using $d = 55t$ with $d = 220$: $220 = 55t$, so $t = \\frac{220}{55} = 4$ hours.'
        },
        {
          id: 'pt7-m2-q12',
          type: 'multiple-choice',
          question: 'If the function $f(x) = (x - 2)(x + 6) = 0$, what are the solutions for $x$?',
          choices: [
            { id: 'A', text: '$x = 2$ and $x = 6$' },
            { id: 'B', text: '$x = -2$ and $x = -6$' },
            { id: 'C', text: '$x = 2$ and $x = -6$' },
            { id: 'D', text: '$x = -2$ and $x = 6$' }
          ],
          correctAnswer: 'C',
          explanation: 'Setting each factor to zero: $x - 2 = 0$ gives $x = 2$, and $x + 6 = 0$ gives $x = -6$.'
        },
        {
          id: 'pt7-m2-q13',
          type: 'multiple-choice',
          question: 'Emma saves \\$50 per week. She currently has \\$200 in savings. Which equation represents her total savings $S$ after $w$ weeks?',
          choices: [
            { id: 'A', text: '$S = 200w + 50$' },
            { id: 'B', text: '$S = 50w + 200$' },
            { id: 'C', text: '$S = 50w - 200$' },
            { id: 'D', text: '$S = 200w - 50$' }
          ],
          correctAnswer: 'B',
          explanation: 'Total savings = starting amount + (weekly savings × weeks) $= 200 + 50w$, or $S = 50w + 200$.'
        },
        {
          id: 'pt7-m2-q14',
          type: 'fill-in',
          question: 'A rectangle has length $(x + 5)$ and width $(x - 2)$. If the area is $18$, what is the positive value of $x$?',
          correctAnswer: '4',
          explanation: 'Area $= (x + 5)(x - 2) = 18$. Expanding: $x^2 + 3x - 10 = 18$, so $x^2 + 3x - 28 = 0$. Factoring: $(x + 7)(x - 4) = 0$. So $x = -7$ or $x = 4$. The positive value is $x = 4$. Check: $(4 + 5)(4 - 2) = 9 \\times 2 = 18$ ✓'
        },
        {
          id: 'pt7-m2-q15',
          type: 'multiple-choice',
          question: 'What is the median of the data set shown?',
          questionFormula: {
            equation: "$$12, 15, 18, 22, 28, 35, 42$$"
          },
          choices: [
            { id: 'A', text: '$18$' },
            { id: 'B', text: '$22$' },
            { id: 'C', text: '$24.57$' },
            { id: 'D', text: '$28$' }
          ],
          correctAnswer: 'B',
          explanation: 'The median of an ordered set with $7$ values is the $4$th value. The values in order are: $12, 15, 18, 22, 28, 35, 42$. The $4$th value is $22$.'
        },
        {
          id: 'pt7-m2-q16',
          type: 'multiple-choice',
          question: 'A cylinder has radius $3$ inches and height $8$ inches. What is its volume in cubic inches?',
          choices: [
            { id: 'A', text: '$72\\pi$' },
            { id: 'B', text: '$24\\pi$' },
            { id: 'C', text: '$48\\pi$' },
            { id: 'D', text: '$144\\pi$' }
          ],
          correctAnswer: 'A',
          explanation: 'Volume of cylinder $= \\pi r^2 h = \\pi(3)^2(8) = \\pi(9)(8) = 72\\pi$ cubic inches.'
        },
        {
          id: 'pt7-m2-q17',
          type: 'multiple-choice',
          question: 'A line has slope $4$. What is the slope of a line perpendicular to it?',
          choices: [
            { id: 'A', text: '$4$' },
            { id: 'B', text: '$-4$' },
            { id: 'C', text: '$\\frac{1}{4}$' },
            { id: 'D', text: '$-\\frac{1}{4}$' }
          ],
          correctAnswer: 'D',
          explanation: 'Perpendicular lines have slopes that are negative reciprocals. The negative reciprocal of $4$ is $-\\frac{1}{4}$.'
        },
        {
          id: 'pt7-m2-q18',
          type: 'multiple-choice',
          question: 'The equation $3x + 2y = 18$ can be rewritten in slope-intercept form as:',
          choices: [
            { id: 'A', text: '$y = \\frac{3}{2}x + 9$' },
            { id: 'B', text: '$y = -\\frac{3}{2}x + 9$' },
            { id: 'C', text: '$y = \\frac{3}{2}x - 9$' },
            { id: 'D', text: '$y = -\\frac{2}{3}x + 6$' }
          ],
          correctAnswer: 'B',
          explanation: 'Solving for $y$: $2y = -3x + 18$, so $y = -\\frac{3}{2}x + 9$.'
        },
        {
          id: 'pt7-m2-q19',
          type: 'fill-in',
          question: 'If $5^{2x} = 125$, what is the value of $x$?',
          correctAnswer: '1.5',
          explanation: '$125 = 5^3$, so $5^{2x} = 5^3$. Therefore $2x = 3$, and $x = \\frac{3}{2} = 1.5$.'
        },
        {
          id: 'pt7-m2-q20',
          type: 'multiple-choice',
          question: 'A quadratic function has vertex at $(3, -4)$ and passes through the point $(5, 0)$. Which could be the equation of this function?',
          choices: [
            { id: 'A', text: '$y = (x - 3)^2 - 4$' },
            { id: 'B', text: '$y = (x + 3)^2 - 4$' },
            { id: 'C', text: '$y = -(x - 3)^2 - 4$' },
            { id: 'D', text: '$y = 2(x - 3)^2 - 4$' }
          ],
          correctAnswer: 'A',
          explanation: 'Vertex form is $y = a(x - h)^2 + k$ with vertex $(h, k) = (3, -4)$. So $y = a(x - 3)^2 - 4$. Testing with point $(5, 0)$: $0 = a(5-3)^2 - 4 = 4a - 4$, so $a = 1$. Thus $y = (x - 3)^2 - 4$.'
        },
        {
          id: 'pt7-m2-q21',
          type: 'multiple-choice',
          question: 'Which expression is equivalent to $\\frac{4x^2 - 9}{2x + 3}$?',
          choices: [
            { id: 'A', text: '$2x + 3$' },
            { id: 'B', text: '$2x - 3$' },
            { id: 'C', text: '$4x - 3$' },
            { id: 'D', text: '$4x + 3$' }
          ],
          correctAnswer: 'B',
          explanation: 'Factor the numerator as a difference of squares: $4x^2 - 9 = (2x + 3)(2x - 3)$. Then $\\frac{(2x + 3)(2x - 3)}{2x + 3} = 2x - 3$.'
        },
        {
          id: 'pt7-m2-q22',
          type: 'fill-in',
          question: 'A store offers a $20\\%$ discount on an item originally priced at \\$85. What is the sale price in dollars?',
          correctAnswer: '68',
          explanation: 'Discount $= 20\\%$ of \\$85 $= 0.20 \\times 85 = \\$17$. Sale price $= \\$85 - \\$17 = \\$68$.'
        }
      ]
    }
  ]
};
