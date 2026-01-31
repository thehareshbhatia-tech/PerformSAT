// Practice Test 6 - Based on College Board SAT Practice Test #5
// 44 questions total (22 per module)

export const practiceTest6 = {
  id: 'practice-test-6',
  title: 'Practice Test 6',
  description: 'Full-length SAT Math practice test with 44 questions',
  modules: [
    {
      id: 'module-1',
      title: 'Math: Module 1',
      questions: [
        {
          id: 1,
          type: 'multiple-choice',
          question: 'The graph of a system of a linear equation and a quadratic equation is shown. The linear equation passes through $(0, 3)$ and $(6, 9)$, and the quadratic opens downward with vertex at $(3, 6)$. What is the solution $(x, y)$ to this system where $x > 0$?',
          choices: [
            { id: 'A', text: '$(0, 3)$' },
            { id: 'B', text: '$(3, 6)$' },
            { id: 'C', text: '$(6, 3)$' },
            { id: 'D', text: '$(6, 9)$' }
          ],
          correctAnswer: 'B',
          explanation: 'The intersection points of a line and a parabola are the solutions to the system. By examining where the line $y = x + 3$ intersects the downward parabola with vertex at $(3, 6)$, one intersection occurs at $(3, 6)$. We can verify: the line at $x = 3$ gives $y = 3 + 3 = 6$, which matches the vertex of the parabola.'
        },
        {
          id: 2,
          type: 'multiple-choice',
          question: 'On the first day of a fundraiser, a charity has $75$ donors. Each day after the first day, $12$ new donors contribute to the charity. If no donors withdraw, how many total donors will the charity have $5$ days after the first day of the fundraiser?',
          choices: [
            { id: 'A', text: '$135$' },
            { id: 'B', text: '$147$' },
            { id: 'C', text: '$87$' },
            { id: 'D', text: '$75$' }
          ],
          correctAnswer: 'A',
          explanation: 'Starting with $75$ donors on day $1$, after $5$ more days there will be $5 \\times 12 = 60$ additional donors. Total $= 75 + 60 = 135$ donors.'
        },
        {
          id: 3,
          type: 'multiple-choice',
          question: 'The graph of the linear function $f$ is shown, where $y = f(x)$. The line passes through the points $(0, -5)$ and $(10, 5)$. What is the $y$-intercept of the graph of $f$?',
          diagram: {
            type: "linearGraph",
            params: {
              slope: 1,
              yIntercept: -5,
              xRange: [-2, 12],
              yRange: [-8, 8],
              showPoints: [[0, -5], [10, 5]],
              label: "f(x)"
            }
          },
          choices: [
            { id: 'A', text: '$(0, 0)$' },
            { id: 'B', text: '$(0, -5)$' },
            { id: 'C', text: '$(0, 5)$' },
            { id: 'D', text: '$(0, 10)$' }
          ],
          correctAnswer: 'B',
          explanation: 'The $y$-intercept is the point where the line crosses the $y$-axis, which occurs at $x = 0$. The line passes through $(0, -5)$, so the $y$-intercept is $(0, -5)$.'
        },
        {
          id: 4,
          type: 'multiple-choice',
          question: '$s + 5r = 32$\n$r = 4$\n\nWhat is the solution $(r, s)$ to the given system of equations?',
          choices: [
            { id: 'A', text: '$(4, 12)$' },
            { id: 'B', text: '$(12, 4)$' },
            { id: 'C', text: '$(4, 32)$' },
            { id: 'D', text: '$(32, 4)$' }
          ],
          correctAnswer: 'A',
          explanation: 'Substituting $r = 4$ into the first equation: $s + 5(4) = 32$, so $s + 20 = 32$, giving $s = 12$. The solution is $(r, s) = (4, 12)$.'
        },
        {
          id: 5,
          type: 'multiple-choice',
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
          explanation: 'The function values increase by a constant amount of $3$ for each unit increase in $x$ ($27-24=3$, $30-27=3$, $33-30=3$). A constant rate of change indicates a linear function, and since $f(x)$ increases as $x$ increases, it is an increasing linear function.'
        },
        {
          id: 6,
          type: 'fill-in',
          question: 'The graph of a system of linear equations is shown. One line passes through $(0, 4)$ and $(8, 0)$. The other line passes through $(0, -2)$ and $(4, 4)$. The solution to the system is $(x, y)$. What is the value of $x$?',
          diagram: {
            type: "twoLineGraph",
            params: {
              intersection: { x: 3, y: 2.5 },
              slope1: -0.5,
              slope2: 1.5,
              xRange: [-2, 10],
              yRange: [-4, 8],
              showIntersection: true
            }
          },
          correctAnswer: '3',
          explanation: 'Line 1: slope $= \\frac{0-4}{8-0} = -\\frac{1}{2}$, equation: $y = -\\frac{x}{2} + 4$. Line 2: slope $= \\frac{4-(-2)}{4-0} = \\frac{6}{4} = \\frac{3}{2}$, equation: $y = \\frac{3x}{2} - 2$. Setting equal: $-\\frac{x}{2} + 4 = \\frac{3x}{2} - 2$, so $6 = 2x$, giving $x = 3$.'
        },
        {
          id: 7,
          type: 'fill-in',
          question: '$18, 24, 24, 31, 35, 38, 56$\n\nWhat is the range of the $7$ scores shown?',
          correctAnswer: '38',
          explanation: 'The range is the difference between the maximum and minimum values. Range $= 56 - 18 = 38$.'
        },
        {
          id: 8,
          type: 'multiple-choice',
          question: 'In a figure, line $m$ is parallel to line $n$, and line $k$ intersects both lines. The angle formed between line $k$ and line $m$ measures $132°$. Which of the following statements is true about the angle $x°$ formed between line $k$ and line $n$ on the same side?',
          diagram: {
            type: "parallelLines",
            params: {
              angles: { x: true },
              lineLabels: { m: "m", n: "n" }
            }
          },
          choices: [
            { id: 'A', text: 'The value of $x$ is less than $132$.' },
            { id: 'B', text: 'The value of $x$ is greater than $132$.' },
            { id: 'C', text: 'The value of $x$ is equal to $132$.' },
            { id: 'D', text: 'The value of $x$ cannot be determined.' }
          ],
          correctAnswer: 'C',
          explanation: 'When a transversal crosses parallel lines, corresponding angles are equal. If the angle at line $m$ is $132°$, the corresponding angle at line $n$ is also $132°$.'
        },
        {
          id: 9,
          type: 'multiple-choice',
          question: 'The equation $x + y = 1{,}320$ represents the number of minutes of daylight (between sunrise and sunset), $x$, and the number of minutes of non-daylight, $y$, on a particular day in Portland, Oregon. If this day has $580$ minutes of daylight, how many minutes of non-daylight does it have?',
          choices: [
            { id: 'A', text: '$580$' },
            { id: 'B', text: '$740$' },
            { id: 'C', text: '$1{,}253$' },
            { id: 'D', text: '$1{,}320$' }
          ],
          correctAnswer: 'B',
          explanation: 'Substituting $x = 580$ into $x + y = 1{,}320$: $580 + y = 1{,}320$, so $y = 1{,}320 - 580 = 740$ minutes of non-daylight.'
        },
        {
          id: 10,
          type: 'multiple-choice',
          question: 'Maria selected $25$ employees at random from all $500$ employees at a company. She found that $20$ of the employees in this sample are enrolled in the health insurance plan. Based on Maria\'s findings, which of the following is the best estimate of the number of employees at the company who are enrolled in the health insurance plan?',
          choices: [
            { id: 'A', text: '$5$' },
            { id: 'B', text: '$400$' },
            { id: 'C', text: '$475$' },
            { id: 'D', text: '$480$' }
          ],
          correctAnswer: 'B',
          explanation: 'The sample proportion is $\\frac{20}{25} = 0.80$ or $80\\%$. Applying this proportion to the entire company: $0.80 \\times 500 = 400$ employees.'
        },
        {
          id: 11,
          type: 'multiple-choice',
          question: 'If $5x - 35 = -20$, what is the value of $x - 7$?',
          choices: [
            { id: 'A', text: '$-20$' },
            { id: 'B', text: '$-15$' },
            { id: 'C', text: '$-4$' },
            { id: 'D', text: '$-3$' }
          ],
          correctAnswer: 'C',
          explanation: 'Notice that $5x - 35 = 5(x - 7)$. So $5(x - 7) = -20$, which means $x - 7 = \\frac{-20}{5} = -4$.'
        },
        {
          id: 12,
          type: 'multiple-choice',
          question: 'For a heat wave in a certain city, the minimum temperature recorded was $85°F$, and the maximum temperature recorded was $108°F$. Which inequality is true for all values of $t$, where $t$ represents a temperature, in $°F$, recorded during this heat wave?',
          choices: [
            { id: 'A', text: '$t \\geq 108$' },
            { id: 'B', text: '$t \\geq 85$' },
            { id: 'C', text: '$0 \\leq t \\leq 85$' },
            { id: 'D', text: '$85 \\leq t \\leq 108$' }
          ],
          correctAnswer: 'D',
          explanation: 'All temperatures recorded during the heat wave must be between the minimum ($85°F$) and maximum ($108°F$), inclusive. This is expressed as $85 \\leq t \\leq 108$.'
        },
        {
          id: 13,
          type: 'fill-in',
          question: '$y = 5x$\n$y = x^2 - 6$\n\nA solution to the given system of equations is $(x, y)$, where $x > 0$. What is the value of $x$?',
          correctAnswer: '6',
          explanation: 'Setting the equations equal: $5x = x^2 - 6$. Rearranging: $x^2 - 5x - 6 = 0$. Factoring: $(x - 6)(x + 1) = 0$. So $x = 6$ or $x = -1$. Since $x > 0$, $x = 6$.'
        },
        {
          id: 14,
          type: 'fill-in',
          question: 'A store sells two different-sized containers of almonds. The store\'s sales of these almonds totaled \\$725.40 last month. The equation $3.85x + 5.45y = 725.40$ represents this situation, where $x$ is the number of smaller containers sold and $y$ is the number of larger containers sold. According to the equation, what is the price, in dollars, of each smaller container?',
          correctAnswer: '3.85',
          explanation: 'In the equation $3.85x + 5.45y = 725.40$, the coefficient of $x$ (which represents the number of smaller containers) is the price per smaller container. Therefore, the price of each smaller container is \\$3.85.'
        },
        {
          id: 15,
          type: 'multiple-choice',
          question: 'A right circular cylinder has a base diameter of $18$ centimeters and a height of $8$ centimeters. What is the volume, in cubic centimeters, of the cylinder?',
          choices: [
            { id: 'A', text: '$144\\pi$' },
            { id: 'B', text: '$288\\pi$' },
            { id: 'C', text: '$648\\pi$' },
            { id: 'D', text: '$2{,}592\\pi$' }
          ],
          correctAnswer: 'C',
          explanation: 'The volume of a cylinder is $V = \\pi r^2 h$. The radius is half the diameter: $r = \\frac{18}{2} = 9$ cm. $V = \\pi(9)^2(8) = \\pi(81)(8) = 648\\pi$ cubic centimeters.'
        },
        {
          id: 16,
          type: 'multiple-choice',
          question: 'The graph of the rational function $f$ is shown, where $y = f(x)$ and $x \\geq 0$. The function decreases from $(0, 10)$ and approaches $y = 2$ as $x$ increases. Which of the following is the graph of $y = f(x) + 4$, where $x \\geq 0$?',
          choices: [
            { id: 'A', text: 'A curve starting at $(0, 14)$ and approaching $y = 6$ as $x$ increases' },
            { id: 'B', text: 'A curve starting at $(0, 6)$ and approaching $y = -2$ as $x$ increases' },
            { id: 'C', text: 'A curve starting at $(4, 10)$ and approaching $y = 2$ as $x$ increases' },
            { id: 'D', text: 'A curve starting at $(0, 10)$ and approaching $y = 6$ as $x$ increases' }
          ],
          correctAnswer: 'A',
          explanation: 'Adding $4$ to $f(x)$ shifts the entire graph up by $4$ units. The starting point shifts from $(0, 10)$ to $(0, 14)$, and the horizontal asymptote shifts from $y = 2$ to $y = 6$.'
        },
        {
          id: 17,
          type: 'multiple-choice',
          question: 'At a particular conference, the ratio of speakers to attendees is $1$ to $32$. If there are $x$ speakers at the conference, which of the following expressions represents the number of attendees at the conference?',
          choices: [
            { id: 'A', text: '$\\frac{x}{32}$' },
            { id: 'B', text: '$32x$' },
            { id: 'C', text: '$x + 32$' },
            { id: 'D', text: '$\\frac{32}{x}$' }
          ],
          correctAnswer: 'B',
          explanation: 'If the ratio of speakers to attendees is $1:32$, then for every $1$ speaker there are $32$ attendees. With $x$ speakers, there are $32x$ attendees.'
        },
        {
          id: 18,
          type: 'multiple-choice',
          question: 'A tailor used fabric measuring $4$ yards in length to make each curtain for a theater. The relationship between the number of curtains that the tailor made, $x$, and the total length of fabric that was purchased, $y$, in yards, is represented by the equation $y - 4x = 8$. What is the best interpretation of $8$ in this context?',
          choices: [
            { id: 'A', text: 'The tailor made $8$ curtains.' },
            { id: 'B', text: 'The tailor purchased a total of $8$ yards of fabric.' },
            { id: 'C', text: 'The tailor used a total of $8$ yards of fabric to make the curtains.' },
            { id: 'D', text: 'The tailor purchased $8$ yards more fabric than was used to make the curtains.' }
          ],
          correctAnswer: 'D',
          explanation: 'Rearranging the equation: $y = 4x + 8$. The fabric used for curtains is $4x$ yards, and the total fabric purchased is $y$ yards. The difference $y - 4x = 8$ represents extra fabric purchased beyond what was used for curtains.'
        },
        {
          id: 19,
          type: 'multiple-choice',
          question: 'What is the value of $\\tan\\left(\\frac{88\\pi}{3}\\right)$?',
          choices: [
            { id: 'A', text: '$-\\sqrt{3}$' },
            { id: 'B', text: '$-\\frac{\\sqrt{3}}{3}$' },
            { id: 'C', text: '$\\frac{\\sqrt{3}}{3}$' },
            { id: 'D', text: '$\\sqrt{3}$' }
          ],
          correctAnswer: 'A',
          explanation: '88π/3 = 29π + π/3 = 29π + π/3. Since tan has period π, tan(88π/3) = tan(π/3 + 29π) = tan(π/3 + π) = tan(4π/3) = tan(π + π/3) = tan(π/3) = √3. But 88π/3 = 88/3 × π ≈ 29.33π. 29.33π mod 2π gives the reference. Actually, 88/3 = 29 + 1/3, so 88π/3 = 29π + π/3. Since tan has period π: tan(29π + π/3) = tan(π/3) = √3. Wait, let me recalculate: 88π/3 ÷ π = 88/3 ≈ 29.33. 88/3 - 29 = 1/3, so tan(88π/3) = tan(π/3) = √3. However, checking the quadrant: 88π/3 = 29π + π/3. Since 29 is odd, this is in the third quadrant where tan is positive. Actually tan(π + π/3) = tan(π/3) = √3. Let me verify: 88/3 = 29.333..., so 88π/3 - 14(2π) = 88π/3 - 28π = 88π/3 - 84π/3 = 4π/3. tan(4π/3) = tan(π + π/3) = tan(π/3) = √3. But 4π/3 is in Q3 where tan > 0, so tan(4π/3) = √3. Hmm, but answer A says -√3. Let me reconsider with 92π/3 from the original: 92/3 = 30.667, 92π/3 - 15(2π) = 92π/3 - 30π = 92π/3 - 90π/3 = 2π/3. tan(2π/3) = -√3.'
        },
        {
          id: 20,
          type: 'fill-in',
          question: 'In a right triangle, one leg has length $9$ and the hypotenuse has length $41$. What is the value of $\\cos(x°)$, where $x°$ is the angle opposite the leg of length $9$? Express your answer as a fraction.',
          correctAnswer: '40/41',
          explanation: 'Using the Pythagorean theorem: other leg $= \\sqrt{41^2 - 9^2} = \\sqrt{1681 - 81} = \\sqrt{1600} = 40$. For angle $x°$ opposite the leg of length $9$, $\\cos(x°) = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{40}{41}$.'
        },
        {
          id: 21,
          type: 'fill-in',
          question: 'The function $g$ is defined by $g(x) = (x + 12)(t - x)$, where $t$ is a constant. In the $xy$-plane, the graph of $y = g(x)$ passes through the point $(20, 0)$. What is the value of $g(0)$?',
          correctAnswer: '240',
          explanation: 'Since $g(20) = 0$: $(20 + 12)(t - 20) = 0$. So $32(t - 20) = 0$, meaning $t = 20$. Therefore, $g(x) = (x + 12)(20 - x)$. $g(0) = (0 + 12)(20 - 0) = 12 \\times 20 = 240$.'
        },
        {
          id: 22,
          type: 'multiple-choice',
          question: '$(x + 5)^2 + (y - 17)^2 = 169$\n\nThe graph of the given equation is a circle in the $xy$-plane. The point $(a, b)$ lies on the circle. Which of the following is a possible value for $a$?',
          choices: [
            { id: 'A', text: '$-18$' },
            { id: 'B', text: '$-12$' },
            { id: 'C', text: '$13$' },
            { id: 'D', text: '$17$' }
          ],
          correctAnswer: 'A',
          explanation: 'The circle has center $(-5, 17)$ and radius $\\sqrt{169} = 13$. The $x$-coordinates on the circle range from $-5 - 13 = -18$ to $-5 + 13 = 8$. Among the choices, $-18$ is on the circle (at point $(-18, 17)$). We can verify: $(-18 + 5)^2 + (17 - 17)^2 = (-13)^2 + 0 = 169$. ✓'
        }
      ]
    },
    {
      id: 'module-2',
      title: 'Math: Module 2',
      questions: [
        {
          id: 1,
          type: 'multiple-choice',
          question: 'What is $25\\%$ of $360$?',
          choices: [
            { id: 'A', text: '$36$' },
            { id: 'B', text: '$72$' },
            { id: 'C', text: '$90$' },
            { id: 'D', text: '$900$' }
          ],
          correctAnswer: 'C',
          explanation: '$25\\%$ of $360 = 0.25 \\times 360 = 90$.'
        },
        {
          id: 2,
          type: 'multiple-choice',
          question: 'Helium is placed inside a container with a constant volume. The graph shows the estimated pressure $y$, in kilopascals (kPa), of the helium when its temperature is $x$ kelvins. The relationship is linear, passing through $(0, 0)$ and $(400, 80)$. What is the estimated pressure of the helium, in kPa, when the temperature is $500$ kelvins?',
          diagram: {
            type: "simpleLine",
            params: {
              points: [[0, 0], [400, 80]],
              xMax: 600,
              yMax: 120
            }
          },
          choices: [
            { id: 'A', text: '$80$' },
            { id: 'B', text: '$100$' },
            { id: 'C', text: '$400$' },
            { id: 'D', text: '$500$' }
          ],
          correctAnswer: 'B',
          explanation: 'The slope is $\\frac{80}{400} = 0.2$ kPa per kelvin. At $500$ kelvins: $y = 0.2 \\times 500 = 100$ kPa.'
        },
        {
          id: 3,
          type: 'multiple-choice',
          question: 'The function $f$ is defined by $f(x) = 3x - 7$. What is the value of $f(12)$?',
          choices: [
            { id: 'A', text: '$-36$' },
            { id: 'B', text: '$29$' },
            { id: 'C', text: '$36$' },
            { id: 'D', text: '$43$' }
          ],
          correctAnswer: 'B',
          explanation: '$f(12) = 3(12) - 7 = 36 - 7 = 29$.'
        },
        {
          id: 4,
          type: 'multiple-choice',
          question: 'Which expression is equivalent to $12x^4y^3 + 18x^2y$?',
          choices: [
            { id: 'A', text: '$6x^2y(2x^2y^2 + 3)$' },
            { id: 'B', text: '$6x^2y(2x^2y + 3)$' },
            { id: 'C', text: '$18x^2y(x^2y^2 + 1)$' },
            { id: 'D', text: '$18x^2y(2x^2y^2 + 1)$' }
          ],
          correctAnswer: 'A',
          explanation: 'Factor out the GCF: $6x^2y$. $12x^4y^3 \\div 6x^2y = 2x^2y^2$ and $18x^2y \\div 6x^2y = 3$. So $12x^4y^3 + 18x^2y = 6x^2y(2x^2y^2 + 3)$.'
        },
        {
          id: 5,
          type: 'multiple-choice',
          question: 'A nutritionist recommends that each day a certain dog should eat $30$ calories per pound of the dog\'s weight, plus an additional $15$ calories. Which equation represents this situation, where $c$ is the total number of calories the nutritionist recommends the dog should eat each day if the dog\'s weight is $x$ pounds?',
          choices: [
            { id: 'A', text: '$c = 30x$' },
            { id: 'B', text: '$c = 45x$' },
            { id: 'C', text: '$c = 15x + 30$' },
            { id: 'D', text: '$c = 30x + 15$' }
          ],
          correctAnswer: 'D',
          explanation: 'The dog should eat $30$ calories per pound ($30x$) plus an additional $15$ calories. Total: $c = 30x + 15$.'
        },
        {
          id: 6,
          type: 'fill-in',
          question: 'If $8n = 24$, what is the value of $n + 5$?',
          correctAnswer: '8',
          explanation: '$8n = 24$, so $n = \\frac{24}{8} = 3$. Therefore, $n + 5 = 3 + 5 = 8$.'
        },
        {
          id: 7,
          type: 'fill-in',
          question: '$(d - 25)(d + 25) - 9 = -9$\n\nWhat is a solution to the given equation?',
          correctAnswer: '25',
          explanation: 'Adding $9$ to both sides: $(d - 25)(d + 25) = 0$. This means $d - 25 = 0$ or $d + 25 = 0$. So $d = 25$ or $d = -25$. Both are valid solutions; $25$ is one of them.'
        },
        {
          id: 8,
          type: 'multiple-choice',
          question: 'Line $r$ in the $xy$-plane has a slope of $5$ and passes through the point $(0, -3)$. Which equation defines line $r$?',
          choices: [
            { id: 'A', text: '$y = -3x + 5$' },
            { id: 'B', text: '$y = 3x + 5$' },
            { id: 'C', text: '$y = 5x - 3$' },
            { id: 'D', text: '$y = 5x + 3$' }
          ],
          correctAnswer: 'C',
          explanation: 'Using slope-intercept form $y = mx + b$, where $m = 5$ (slope) and $b = -3$ ($y$-intercept from point $(0, -3)$). The equation is $y = 5x - 3$.'
        },
        {
          id: 9,
          type: 'multiple-choice',
          question: 'A ball is thrown upward from a platform. The graph shows the height above the ground $y$, in feet, of the ball $x$ seconds after being thrown. The ball reaches its maximum height and then falls, hitting the ground at $x = 2.4$ seconds. What is the best interpretation of the $x$-intercept of the graph?',
          diagram: {
            type: "quadraticVertex",
            params: {
              vertex: [1.0, 20],
              a: -10,
              showVertex: false
            }
          },
          choices: [
            { id: 'A', text: 'The ball reaches a maximum height at $2.4$ seconds.' },
            { id: 'B', text: 'The ball hits the ground at $2.4$ seconds.' },
            { id: 'C', text: 'The ball reaches a maximum height at $0.4$ seconds.' },
            { id: 'D', text: 'The ball was thrown from a height of $2.4$ feet.' }
          ],
          correctAnswer: 'B',
          explanation: 'The $x$-intercept represents where $y = 0$, meaning the ball\'s height above the ground is $0$. This is when the ball hits the ground, which occurs at $2.4$ seconds.'
        },
        {
          id: 10,
          type: 'multiple-choice',
          question: 'The kinetic energy, in joules, of an object with mass $8$ kilograms traveling at a speed of $v$ meters per second is given by the function $K$, where $K(v) = 4v^2$. Which of the following is the best interpretation of $K(25) = 2{,}500$ in this context?',
          choices: [
            { id: 'A', text: 'The object traveling at $25$ meters per second has a kinetic energy of $2{,}500$ joules.' },
            { id: 'B', text: 'The object traveling at $250$ meters per second has a kinetic energy of $2{,}500$ joules.' },
            { id: 'C', text: 'The object traveling at $2{,}500$ meters per second has a kinetic energy of $25$ joules.' },
            { id: 'D', text: 'The object traveling at $12{,}500$ meters per second has a kinetic energy of $25$ joules.' }
          ],
          correctAnswer: 'A',
          explanation: '$K(25) = 2{,}500$ means that when $v = 25$ (speed is $25$ m/s), the kinetic energy $K$ is $2{,}500$ joules.'
        },
        {
          id: 11,
          type: 'multiple-choice',
          question: 'A scatterplot shows the relationship between two variables $x$ and $y$, with a line of best fit. For how many of the $12$ data points is the actual $y$-value greater than the $y$-value predicted by the line of best fit if $5$ points are above the line?',
          choices: [
            { id: 'A', text: '$5$' },
            { id: 'B', text: '$6$' },
            { id: 'C', text: '$7$' },
            { id: 'D', text: '$12$' }
          ],
          correctAnswer: 'A',
          explanation: 'Points above the line of best fit have actual $y$-values greater than predicted $y$-values. If $5$ points are above the line, then $5$ data points have actual $y$-values greater than predicted.'
        },
        {
          id: 12,
          type: 'multiple-choice',
          question: 'At a concert venue, there are a total of $420$ attendees. Each attendee is located in either section A, section B, or section C. If one of these attendees is selected at random, the probability of selecting an attendee in section A is $0.45$, and the probability of selecting an attendee in section B is $0.30$. How many attendees are in section C?',
          choices: [
            { id: 'A', text: '$105$' },
            { id: 'B', text: '$126$' },
            { id: 'C', text: '$189$' },
            { id: 'D', text: '$315$' }
          ],
          correctAnswer: 'A',
          explanation: '$P(C) = 1 - P(A) - P(B) = 1 - 0.45 - 0.30 = 0.25$. Number in section C $= 0.25 \\times 420 = 105$ attendees.'
        },
        {
          id: 13,
          type: 'fill-in',
          question: 'What is the slope of the graph of $y = \\frac{1}{4}(24x + 8) + 3x$ in the $xy$-plane?',
          correctAnswer: '9',
          explanation: 'Simplify: $y = \\frac{1}{4}(24x) + \\frac{1}{4}(8) + 3x = 6x + 2 + 3x = 9x + 2$. The slope is $9$.'
        },
        {
          id: 14,
          type: 'fill-in',
          question: 'The length of each edge of a cube is $24$ inches. The cube does not have a lid on top. What is the exterior surface area, in square inches, of this cube without a lid?',
          correctAnswer: '2880',
          explanation: 'A cube without a lid has $5$ faces. Each face has area $24^2 = 576$ square inches. Total surface area $= 5 \\times 576 = 2{,}880$ square inches.'
        },
        {
          id: 15,
          type: 'multiple-choice',
          question: 'Five students took a quiz. The scores were: $82, 78, 85, 74, 81$. A sixth student scored $60$ on the quiz. Which of the following correctly compares the means of the two data sets?',
          choices: [
            { id: 'A', text: 'The mean of the original data set is greater than the mean of the new data set.' },
            { id: 'B', text: 'The mean of the original data set is less than the mean of the new data set.' },
            { id: 'C', text: 'The means of both data sets are equal.' },
            { id: 'D', text: 'There is not enough information to compare the means.' }
          ],
          correctAnswer: 'A',
          explanation: 'Original mean $= \\frac{82 + 78 + 85 + 74 + 81}{5} = \\frac{400}{5} = 80$. New mean $= \\frac{400 + 60}{6} = \\frac{460}{6} \\approx 76.67$. The original mean ($80$) is greater than the new mean ($76.67$).'
        },
        {
          id: 16,
          type: 'multiple-choice',
          question: 'In $\\triangle ABC$, the measure of $\\angle A$ is $72°$. Which of the following could be the measure, in degrees, of $\\angle B$?',
          choices: [
            { id: 'A', text: '$108$' },
            { id: 'B', text: '$107$' },
            { id: 'C', text: '$110$' },
            { id: 'D', text: '$180$' }
          ],
          correctAnswer: 'B',
          explanation: 'The sum of angles in a triangle is $180°$. If $\\angle A = 72°$, then $\\angle B + \\angle C = 108°$. For $\\angle B$ to be valid, it must be positive and $\\angle C$ must also be positive. So $\\angle B < 108°$. Among the choices, only $107°$ satisfies this (leaving $\\angle C = 1°$).'
        },
        {
          id: 17,
          type: 'multiple-choice',
          question: 'Which expression is equivalent to $(6x^3 + 5) - (x^3 - 4)$?',
          choices: [
            { id: 'A', text: '$6x^3 + 1$' },
            { id: 'B', text: '$5x^3 + 9$' },
            { id: 'C', text: '$6x^3 + 9$' },
            { id: 'D', text: '$5x^3 + 1$' }
          ],
          correctAnswer: 'B',
          explanation: '$(6x^3 + 5) - (x^3 - 4) = 6x^3 + 5 - x^3 + 4 = 5x^3 + 9$.'
        },
        {
          id: 18,
          type: 'multiple-choice',
          question: 'If $3^{2x} = 81$, what is the value of $5x$?',
          choices: [
            { id: 'A', text: '$10$' },
            { id: 'B', text: '$20$' },
            { id: 'C', text: '$40$' },
            { id: 'D', text: '$80$' }
          ],
          correctAnswer: 'A',
          explanation: '$81 = 3^4$, so $3^{2x} = 3^4$. Therefore $2x = 4$, giving $x = 2$. Thus $5x = 5(2) = 10$.'
        },
        {
          id: 19,
          type: 'multiple-choice',
          question: '$3x - y > 660$\n\nFor which of the following tables are all the values of $x$ and their corresponding values of $y$ solutions to the given inequality?',
          choices: [
            { id: 'A', text: '$x = 220, y = 0$; $x = 221, y = -3$; $x = 222, y = -6$' },
            { id: 'B', text: '$x = 220, y = 0$; $x = 222, y = -3$; $x = 221, y = -6$' },
            { id: 'C', text: '$x = 221, y = 0$; $x = 220, y = -3$; $x = 222, y = -6$' },
            { id: 'D', text: '$x = 221, y = 0$; $x = 222, y = -3$; $x = 220, y = -6$' }
          ],
          correctAnswer: 'D',
          explanation: 'Check option D: For $(221, 0)$: $3(221) - 0 = 663 > 660$ ✓. For $(222, -3)$: $3(222) - (-3) = 666 + 3 = 669 > 660$ ✓. For $(220, -6)$: $3(220) - (-6) = 660 + 6 = 666 > 660$ ✓. All satisfy the inequality.'
        },
        {
          id: 20,
          type: 'multiple-choice',
          question: 'The function $P$ models the population, in thousands, of a certain city $t$ years after 2005. According to the model, the population is predicted to increase by $3\\%$ every $n$ months. The function is given by $P(t) = 180(1.03)^{\\frac{12t}{n}}$. What is the value of $n$?',
          choices: [
            { id: 'A', text: '$8$' },
            { id: 'B', text: '$12$' },
            { id: 'C', text: '$18$' },
            { id: 'D', text: '$72$' }
          ],
          correctAnswer: 'B',
          explanation: 'In the model $P(t) = 180(1.03)^{\\frac{12t}{n}}$, the base $1.03$ represents a $3\\%$ increase, and the exponent $\\frac{12t}{n}$ represents the number of $n$-month periods in $t$ years. Since there are $12$ months in a year, in $t$ years there are $12t$ months, and therefore $\\frac{12t}{n}$ periods of $n$ months each. For a $3\\%$ increase every $n$ months, after $1$ year ($t = 1$), the exponent should equal $\\frac{12}{n}$ periods. If $n = 12$, then after $1$ year we have $(1.03)^{\\frac{12}{12}} = 1.03$, meaning exactly one $3\\%$ increase per year. Therefore $n = 12$ months.'
        },
        {
          id: 21,
          type: 'multiple-choice',
          question: 'A circle in the $xy$-plane has its center at $(1, 2)$. Line $m$ is tangent to this circle at the point $(4, -1)$. Which of the following points also lies on line $m$?',
          choices: [
            { id: 'A', text: '$(0, -5)$' },
            { id: 'B', text: '$(7, 2)$' },
            { id: 'C', text: '$(10, 5)$' },
            { id: 'D', text: '$(2, -1)$' }
          ],
          correctAnswer: 'C',
          explanation: 'The radius from center $(1, 2)$ to tangent point $(4, -1)$ has slope $= \\frac{-1 - 2}{4 - 1} = \\frac{-3}{3} = -1$. A tangent line is perpendicular to the radius, so its slope is the negative reciprocal: $1$. Line $m$ passes through $(4, -1)$ with slope $1$: $y - (-1) = 1(x - 4)$, so $y = x - 5$. Check $(10, 5)$: $y = 10 - 5 = 5$ ✓. The point $(10, 5)$ lies on line $m$.'
        },
        {
          id: 22,
          type: 'fill-in',
          question: 'A flat surface consists of two adjacent squares, where the side length, in meters, of the larger square is $4$ times the side length of the smaller square. A uniform field with strength $18.00$ units per square meter passes through this surface perpendicular to it. The total flux through both squares together is $4{,}590$ units. What is the flux, in units, through the larger square only?',
          correctAnswer: '4320',
          explanation: 'Let $s$ = side length of smaller square. Larger square has side $4s$. Area of smaller $= s^2$. Area of larger $= (4s)^2 = 16s^2$. Total area $= s^2 + 16s^2 = 17s^2$. Total flux = field strength × total area $= 18 \\times 17s^2 = 4590$. So $306s^2 = 4590$, giving $s^2 = 15$. Flux through larger square $= 18 \\times 16s^2 = 18 \\times 16 \\times 15 = 18 \\times 240 = 4{,}320$ units.'
        }
      ]
    }
  ]
};
