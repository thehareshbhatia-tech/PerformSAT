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
          question: "A gym membership has a one-time signup fee and a monthly charge. The equation $3600 = 400 + 320t$ represents the total amount paid, in dollars, after $t$ months. How many months does it take to pay a total of \\$3600?",
          correctAnswer: 10,
          explanation: "**The correct answer is 10.** Solve for $t$ in the equation.\n\n• $3600 = 400 + 320t$\n• $3600 - 400 = 320t$\n• $3200 = 320t$\n• $t = 3200 \\div 320$\n• $t = 10$\n\n**Understanding the equation:**\n• $400$ represents the one-time signup fee\n• $320t$ represents the monthly charges (\\$320/month)\n• $3600$ is the total amount paid\n\n**Key concept:** In equations of the form Total = Fixed Cost + (Rate × Time), isolate the variable by subtracting the fixed cost first.",
          skills: ["linear-equations", "word-problems"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "$5$ less than $6$ times a number $y$ is equal to $49$. Which equation represents this situation?",
          choices: [
            { id: "A", text: "$(5)(6)y = 49$" },
            { id: "B", text: "$6y = 49 + 5$" },
            { id: "C", text: "$5y - 6 = 49$" },
            { id: "D", text: "$6y - 5 = 49$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Translate the phrase step by step:\n\n• \"$6$ times a number $y$\" → $6y$\n• \"$5$ less than\" means subtract $5$ → $6y - 5$\n• \"is equal to $49$\" → $= 49$\n• Full equation: $6y - 5 = 49$\n\n**Why other choices are incorrect:**\n• Choice A: Incorrectly multiplies $5$ and $6$ together\n• Choice B: \"$5$ less than\" means subtract, not add\n• Choice C: Has the wrong coefficient and subtrahend reversed\n\n**Key concept:** \"A less than B\" translates to $B - A$, not $A - B$.",
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
          explanation: 'All temperatures recorded during the heat wave must be between the minimum ($85°F$) and maximum ($108°F$), inclusive. This is expressed as $85 \\leq t \\leq 108$.'
        },
        {
          id: 4,
          type: "fill-in",
          difficulty: "easy",
          question: "A baker used \\$42 to purchase flour at \\$6 per bag. How many bags of flour did the baker purchase?",
          correctAnswer: "7",
          explanation: "**The correct answer is $7$.**\n\n• Total spent: \\$42\n• Cost per bag: \\$6\n• Number of bags $=$ Total $\\div$ Cost per bag\n• Number of bags $= 42 \\div 6 = 7$\n\n**Key concept:** When you know the total cost and the cost per unit, divide to find the number of units.\n\n**Calculator tip:** Simply enter $42 \\div 6 = 7$.",
          skills: ["Problem-Solving and Data Analysis", "Unit rates"]
        },
        {
          id: 5,
          type: 'fill-in',
          difficulty: 'easy',
          question: '$18, 24, 24, 31, 35, 38, 56$\n\nWhat is the range of the $7$ scores shown?',
          correctAnswer: '38',
          explanation: 'The range is the difference between the maximum and minimum values. Range $= 56 - 18 = 38$.'
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
          explanation: "**Choice C is correct.** In the equation $T = 72 - 2h$:\n\n• $72$ is the initial temperature (when $h = 0$)\n• $-2$ is the rate of change (slope)\n• The negative coefficient means temperature decreases\n• The magnitude $2$ means it decreases by $2°F$ per hour\n\n**Why other choices are incorrect:**\n• Choice A: $72$ represents the initial temperature, not $2$\n• Choice B: The temperature after $2$ hours would be $T = 72 - 2(2) = 68°F$\n• Choice D: The equation doesn't specify a minimum temperature\n\n**Key concept:** In $y = mx + b$ (or variations), $m$ represents the rate of change.",
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
          explanation: 'Substituting $x = 580$ into $x + y = 1{,}320$: $580 + y = 1{,}320$, so $y = 1{,}320 - 580 = 740$ minutes of non-daylight.'
        },
        {
          id: 8,
          type: 'fill-in',
          difficulty: 'medium',
          question: 'In a right triangle, one leg has length $9$ and the hypotenuse has length $41$. What is the value of $\\cos(x°)$, where $x°$ is the angle opposite the leg of length $9$? Express your answer as a fraction.',
          correctAnswer: '40/41',
          explanation: 'Using the Pythagorean theorem: other leg $= \\sqrt{41^2 - 9^2} = \\sqrt{1681 - 81} = \\sqrt{1600} = 40$. For angle $x°$ opposite the leg of length $9$, $\\cos(x°) = \\frac{\\text{adjacent}}{\\text{hypotenuse}} = \\frac{40}{41}$.'
        },
        {
          id: 9,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A water tank contains $240$ gallons of water. Water drains from the tank at a rate of $15$ gallons per minute. Which equation models the amount of water $W$, in gallons, remaining in the tank after $m$ minutes?",
          choices: [
            { id: "A", text: "$W = 240 + 15m$" },
            { id: "B", text: "$W = 240 - 15m$" },
            { id: "C", text: "$W = 15m - 240$" },
            { id: "D", text: "$W = 240m - 15$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** The water is draining, so the amount decreases over time.\n\n• Initial amount: $240$ gallons\n• Rate of change: $-15$ gallons per minute (draining)\n• Equation: $W = 240 - 15m$\n\n**Verification:**\n• At $m = 0$: $W = 240 - 0 = 240$ gallons ✓\n• At $m = 4$: $W = 240 - 60 = 180$ gallons ✓\n• At $m = 16$: $W = 240 - 240 = 0$ gallons (empty) ✓\n\n**Why other choices are incorrect:**\n• Choice A: Would mean water is being added\n• Choice C: Would give negative values initially\n• Choice D: Incorrect structure entirely\n\n**Key concept:** Linear decrease: Amount = Initial $-$ (Rate $\\times$ Time)",
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
          explanation: "**Choice C is correct.** Analyze the pattern in $f(x)$.\n\n• Check for constant difference (linear): $6-3=3$, $12-6=6$, $24-12=12$, $48-24=24$\n  Differences are NOT constant (not linear)\n\n• Check for constant ratio (exponential): $\\frac{6}{3}=2$, $\\frac{12}{6}=2$, $\\frac{24}{12}=2$, $\\frac{48}{24}=2$\n  Ratio is constant $= 2$ (exponential) ✓\n\nThe function doubles each time $x$ increases by $1$, so $f(x) = 3(2)^x$.\n\n**Why other choices are incorrect:**\n• Choice A (Linear): Would have constant first differences\n• Choice B (Quadratic): Would have constant second differences\n• Choice D (Absolute value): Would have a V-shape pattern\n\n**Key concept:** Exponential functions have a constant ratio between consecutive outputs.",
          skills: ["function-identification", "exponential-functions"]
        },
        {
          id: 11,
          type: "fill-in",
          difficulty: "medium",
          question: "$18x + y = 36$\n$5x + y = 62$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
          correctAnswer: "72",
          explanation: "**The correct answer is $72$.**\n\n• Subtract the second equation from the first:\n• $(18x + y) - (5x + y) = 36 - 62$\n• $13x = -26$\n• $x = -2$\n\n• Substitute $x = -2$ into the second equation:\n• $5(-2) + y = 62$\n• $-10 + y = 62$\n• $y = 72$\n\n**Verification:** \n• $18(-2) + 72 = -36 + 72 = 36$ ✓\n• $5(-2) + 72 = -10 + 72 = 62$ ✓\n\n**Key concept:** Use elimination or substitution to solve systems of linear equations.",
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
          explanation: "**Choice A is correct.** In the function $f(t) = 75 + 40t$, the coefficient of $t$ (which is $40$) represents the rate of change.\n\n• The slope ($40$) tells us how much the total changes per unit of $t$\n• Each week (each increase of $1$ in $t$), the savings increase by \\$40\n\n**Why other choices are incorrect:**\n• Choice B: The initial amount (when $t = 0$) is \\$75, not \\$40\n• Choice C: After 1 week, $f(1) = 75 + 40(1) = $ \\$115, not \\$40\n• Choice D: The variable $t$ represents weeks; $40$ is the weekly savings rate\n\n**Key concept:** In $f(x) = mx + b$, the coefficient $m$ represents the rate of change per unit of $x$.",
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
          explanation: "**Choice A is correct.** Find the slope and $y$-intercept from the table.\n\n• Slope $= \\frac{\\text{change in } g(x)}{\\text{change in } x} = \\frac{21 - 17}{1 - 0} = 4$\n• $Y$-intercept: when $x = 0$, $g(x) = 17$\n• Equation: $g(x) = 4x + 17$\n\n**Verification:**\n• $g(0) = 4(0) + 17 = 17$ ✓\n• $g(1) = 4(1) + 17 = 21$ ✓\n• $g(2) = 4(2) + 17 = 25$ ✓\n\n**Why other choices are incorrect:**\n• Choices B, C, D: Don't match the pattern in the table\n\n**Key concept:** For a linear function, use two points to find the slope, then use $y = mx + b$ form.",
          skills: ["Algebra", "Linear functions"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "Line $p$ in the $xy$-plane has a slope of $-\\frac{1}{4}$ and passes through the point $(8, 5)$. Which equation defines line $p$?",
          choices: [
            { id: "A", text: "$y = 8x - \\frac{1}{4}$" },
            { id: "B", text: "$y = 5x + 8$" },
            { id: "C", text: "$y = -\\frac{x}{4} + 5$" },
            { id: "D", text: "$y = -\\frac{x}{4} + 7$" }
          ],
          correctAnswer: "D",
          explanation: "**Choice D is correct.** Use point-slope form and convert to slope-intercept form.\n\n• Point-slope: $y - y_1 = m(x - x_1)$\n• $y - 5 = -\\frac{1}{4}(x - 8)$\n• $y - 5 = -\\frac{x}{4} + 2$\n• $y = -\\frac{x}{4} + 7$\n\n**Verification:** When $x = 8$:\n• $y = -\\frac{8}{4} + 7 = -2 + 7 = 5$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: Wrong form entirely\n• Choice B: Wrong slope\n• Choice C: Doesn't pass through $(8, 5)$: $y = -\\frac{8}{4} + 5 = -2 + 5 = 3 \\neq 5$\n\n**Key concept:** Use point-slope form $y - y_1 = m(x - x_1)$, then simplify.",
          skills: ["Algebra", "Linear equations"]
        },
        {
          id: 15,
          type: 'fill-in',
          difficulty: 'medium',
          question: '$y = 5x$\n$y = x^2 - 6$\n\nA solution to the given system of equations is $(x, y)$, where $x > 0$. What is the value of $x$?',
          correctAnswer: '6',
          explanation: 'Setting the equations equal: $5x = x^2 - 6$. Rearranging: $x^2 - 5x - 6 = 0$. Factoring: $(x - 6)(x + 1) = 0$. So $x = 6$ or $x = -1$. Since $x > 0$, $x = 6$.'
        },
        {
          id: 16,
          type: "multiple-choice",
          difficulty: "medium",
          question: "The function $f(x) = 315(1.028)^x$ models the value, in dollars, of a savings bond by the end of each year from 1985 through 2000, where $x$ is the number of years after 1985. Which of the following is the best interpretation of \"$f(4)$ is approximately equal to $352$\" in this context?",
          choices: [
            { id: "A", text: "The value of the savings bond is estimated to be approximately $4$ dollars greater in 1989 than in 1985." },
            { id: "B", text: "The value of the savings bond is estimated to be approximately \\$352 in 1989." },
            { id: "C", text: "The value, in dollars, of the savings bond is estimated to be approximately $4$ times greater in 1989 than in 1985." },
            { id: "D", text: "The value of the savings bond is estimated to increase by approximately \\$352 every 4 years between 1985 and 2000." }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Interpret $f(4) \\approx 352$:\n\n• $x = 4$ means $4$ years after 1985, which is 1989\n• $f(4)$ gives the value of the bond at that time\n• $f(4) \\approx 352$ means the bond is worth about \\$352 in 1989\n\n**Why other choices are incorrect:**\n• Choice A: The $4$ represents years, not dollar increase\n• Choice C: The function doesn't show a $4\\times$ multiplier\n• Choice D: Exponential growth isn't constant dollar increases\n\n**Key concept:** In $f(x)$, $x$ is the input (years after start) and $f(x)$ is the output (value in dollars).",
          skills: ["Algebra", "Exponential functions"]
        },
        {
          id: 17,
          type: "multiple-choice",
          difficulty: "medium",
          question: "For a certain rectangular garden, the ratio of its length to its width is $24$ to $8$. If the width of the garden increases by $5$ feet, how must the length change to maintain this ratio?",
          choices: [
            { id: "A", text: "It must decrease by $15$ feet." },
            { id: "B", text: "It must increase by $15$ feet." },
            { id: "C", text: "It must decrease by $5$ feet." },
            { id: "D", text: "It must increase by $5$ feet." }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Set up the proportion with the ratio.\n\n• Original ratio: $\\frac{\\text{length}}{\\text{width}} = \\frac{24}{8} = 3$\n• The ratio simplifies to $3:1$ (length is $3$ times width)\n• If width increases by $5$, new width $=$ original $+ 5$\n• To maintain ratio: new length $= 3 \\times$ (new width)\n• Change in length $= 3 \\times$ (change in width) $= 3 \\times 5 = 15$\n• Length must increase by $15$ feet\n\n**Why other choices are incorrect:**\n• Choice A: Length increases, not decreases, when width increases\n• Choice C: Wrong magnitude and direction\n• Choice D: Doesn't account for the $3:1$ ratio\n\n**Key concept:** To maintain a ratio, both quantities must change proportionally.",
          skills: ["Problem-Solving and Data Analysis", "Ratios"]
        },
        {
          id: 18,
          type: "multiple-choice",
          difficulty: "medium",
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
          explanation: "**Choice C is correct.** Based on the scatterplot:\n\n• Positive slope: eliminates choices B and D (negative slopes)\n• The data shows a positive linear trend starting around $y = 7$-$8$ when $x = 1$\n• The slope appears to be around $1.5$ (rise of about $10$ over run of about $7$)\n• Choice C: $y = 7.2 + 1.5x$ has $y$-intercept of $7.2$ and slope of $1.5$\n\n**Key concept:** In $y = mx + b$ form, $m$ is the slope and $b$ is the $y$-intercept.",
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
          explanation: "**Choice C is correct.** Use the slope-intercept form $y = mx + b$.\n\n• Slope $m = 3$\n• Passes through origin means $y$-intercept $b = 0$\n• Equation: $y = 3x + 0 = 3x$\n\n**Why other choices are incorrect:**\n• Choice A: Has slope $-3$ (negative)\n• Choice B: Has slope $1$ and $y$-intercept $3$\n• Choice D: Has slope $1$ and $y$-intercept $-3$\n\n**Key concept:** A line through the origin has equation $y = mx$ where $m$ is the slope.",
          skills: ["Algebra", "Linear equations"]
        },
        {
          id: 20,
          type: "fill-in",
          difficulty: "medium",
          question: "For what value of $x$ is the function $f(x) = \\frac{x + 5}{x - 3}$ undefined?",
          correctAnswer: 3,
          explanation: "**The correct answer is $3$.** A rational function is undefined when the denominator equals zero.\n\n• Set denominator $= 0$:\n• $x - 3 = 0$\n• $x = 3$\n\nWhen $x = 3$, the denominator is $0$, making the function undefined (division by zero).\n\n**Verification:** $f(3) = \\frac{3+5}{3-3} = \\frac{8}{0}$, which is undefined ✓\n\n**Key concept:** Rational functions are undefined where the denominator equals zero.",
          skills: ["rational-functions", "domain"]
        },
        {
          id: 21,
          type: "multiple-choice",
          difficulty: "hard",
          question: "Which expression is equivalent to $\\frac{x^2 + 5x + 6}{x^2 - 4}$?",
          choices: [
            { id: "A", text: "$\\frac{x + 3}{x - 2}$" },
            { id: "B", text: "$\\frac{x + 3}{x + 2}$" },
            { id: "C", text: "$\\frac{x + 2}{x - 2}$" },
            { id: "D", text: "$\\frac{x - 3}{x - 2}$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** Factor both the numerator and denominator.\n\n**Factor numerator:** $x^2 + 5x + 6 = (x + 2)(x + 3)$\n**Factor denominator:** $x^2 - 4 = (x + 2)(x - 2)$ [difference of squares]\n\n**Simplify:**\n• $\\frac{x^2 + 5x + 6}{x^2 - 4}$\n• $= \\frac{(x + 2)(x + 3)}{(x + 2)(x - 2)}$\n• $= \\frac{x + 3}{x - 2}$ [cancel $(x + 2)$]\n\n**Why other choices are incorrect:**\n• Choice B: Would require $(x-2)$ in numerator\n• Choice C: Would require $(x+3)$ to cancel\n• Choice D: Wrong sign in numerator factor\n\n**Key concept:** To simplify rational expressions, factor completely, then cancel common factors.",
          skills: ["rational-expressions", "factoring"]
        },
        {
          id: 22,
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The function $g$ is defined by $g(x) = (x + 12)(t - x)$, where $t$ is a constant. In the $xy$-plane, the graph of $y = g(x)$ passes through the point $(20, 0)$. What is the value of $g(0)$?',
          correctAnswer: '240',
          explanation: 'Since $g(20) = 0$: $(20 + 12)(t - 20) = 0$. So $32(t - 20) = 0$, meaning $t = 20$. Therefore, $g(x) = (x + 12)(20 - x)$. $g(0) = (0 + 12)(20 - 0) = 12 \\times 20 = 240$.'
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
          type: "multiple-choice",
          difficulty: "easy",
          question: "$x + y = 24$\n$4y = x$\n\nWhat is the solution $(x, y)$ to the given system of equations?",
          choices: [
            { id: "A", text: "$(16, 8)$" },
            { id: "B", text: "$(18, 6)$" },
            { id: "C", text: "$(19.2, 4.8)$" },
            { id: "D", text: "$(20, 4)$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Use substitution to solve.\n\n• From equation 2: $x = 4y$\n• Substitute into equation 1: $4y + y = 24$\n• Simplify: $5y = 24$\n• Solve: $y = \\frac{24}{5} = 4.8$\n• Find $x$: $x = 4(4.8) = 19.2$\n• Solution: $(19.2, 4.8)$\n\n**Verification:** $19.2 + 4.8 = 24$ ✓ and $4(4.8) = 19.2$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: $16 + 8 = 24$ ✓ but $4(8) = 32 \\neq 16$\n• Choice B: $18 + 6 = 24$ ✓ but $4(6) = 24 \\neq 18$\n• Choice D: $20 + 4 = 24$ ✓ but $4(4) = 16 \\neq 20$\n\n**Key concept:** Substitution works well when one equation has an isolated variable.",
          skills: ["Algebra", "Systems of equations"]
        },
        {
          id: 2,
          type: "multiple-choice",
          difficulty: "easy",
          question: "The point $(5, -3)$ in the $xy$-plane is a solution to which of the following systems of inequalities?",
          choices: [
            { id: "A", text: "$x > 0$ and $y > 0$" },
            { id: "B", text: "$x > 0$ and $y < 0$" },
            { id: "C", text: "$x < 0$ and $y > 0$" },
            { id: "D", text: "$x < 0$ and $y < 0$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Check the signs of the coordinates.\n\n• Point $(5, -3)$ has $x = 5$ and $y = -3$\n• $x = 5 > 0$ (positive) ✓\n• $y = -3 < 0$ (negative) ✓\n• This matches $x > 0$ and $y < 0$\n\n**Why other choices are incorrect:**\n• Choice A: $y$ is not $> 0$ (it's $-3$)\n• Choice C: $x$ is not $< 0$ (it's $5$)\n• Choice D: $x$ is not $< 0$ (it's $5$)\n\n**Key concept:** A point $(x, y)$ satisfies an inequality if substituting its coordinates makes the inequality true.",
          skills: ["Algebra", "Inequalities"]
        },
        {
          id: 3,
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Helium is placed inside a container with a constant volume. The graph shows the estimated pressure $y$, in kilopascals (kPa), of the helium when its temperature is $x$ kelvins. The relationship is linear, passing through $(0, 0)$ and $(400, 80)$. What is the estimated pressure of the helium, in kPa, when the temperature is $500$ kelvins?',
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
            { id: 'A', text: '$80$' },
            { id: 'B', text: '$100$' },
            { id: 'C', text: '$400$' },
            { id: 'D', text: '$500$' }
          ],
          correctAnswer: 'B',
          explanation: 'The slope is $\\frac{80}{400} = 0.2$ kPa per kelvin. At $500$ kelvins: $y = 0.2 \\times 500 = 100$ kPa.'
        },
        {
          id: 4,
          type: 'multiple-choice',
          difficulty: 'easy',
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
          id: 5,
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
          explanation: "**Choice B is correct.** Convert feet to miles by dividing.\n\n• Distance in feet: 7,920 feet\n• Conversion: 1 mile = 5,280 feet\n• Miles = 7,920 ÷ 5,280 = 1.5 miles\n\n**Why other choices are incorrect:**\n• Choice A (0.67): This would be 5,280 ÷ 7,920 (inverted)\n• Choice C (2,640): Subtracted instead of divided\n• Choice D (13,200): Added instead of divided\n\n**Key concept:** To convert to a larger unit, divide by the conversion factor.\n\n**Calculator tip:** 7920 ÷ 5280 = 1.5",
          skills: ["Problem-Solving and Data Analysis", "Unit conversion"]
        },
        {
          id: 6,
          type: 'multiple-choice',
          difficulty: 'easy',
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
          id: 7,
          type: "multiple-choice",
          difficulty: "medium",
          question: "A scatterplot shows a negative linear association between two variables. Which could be the equation of the line of best fit?",
          choices: [
            { id: "A", text: "$y = 3x + 10$" },
            { id: "B", text: "$y = -2x + 15$" },
            { id: "C", text: "$y = x^2 - 4$" },
            { id: "D", text: "$y = 5$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** A negative linear association means the line slopes downward.\n\n• Negative association → negative slope\n• Only $y = -2x + 15$ has a negative slope ($-2$)\n\n**Why other choices are incorrect:**\n• Choice A: Positive slope ($+3$) indicates positive association\n• Choice C: This is quadratic, not linear\n• Choice D: This is a horizontal line (slope $= 0$), indicating no association\n\n**Key concept:** Negative linear association = negative slope in the line of best fit.",
          skills: ["scatterplots", "linear-regression"]
        },
        {
          id: 8,
          type: "multiple-choice",
          difficulty: "medium",
          question: "An elevator can carry passengers if the combined weight of the passengers and cargo is no more than $2{,}400$ pounds. What is the maximum number of passengers this elevator can carry along with cargo weighing $300$ pounds if each passenger weighs $150$ pounds?",
          choices: [
            { id: "A", text: "$13$" },
            { id: "B", text: "$14$" },
            { id: "C", text: "$16$" },
            { id: "D", text: "$17$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Set up and solve the inequality.\n\n• Let $p$ = number of passengers\n• Cargo: $300$ pounds\n• Each passenger: $150$ pounds\n• Constraint: $300 + 150p \\leq 2400$\n• $150p \\leq 2100$\n• $p \\leq 14$\n\nThe maximum number of passengers is $14$.\n\n**Verification:** $300 + 150(14) = 300 + 2100 = 2400 \\leq 2400$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($13$): Valid but not maximum\n• Choice C ($16$): $300 + 150(16) = 2700 > 2400$\n• Choice D ($17$): $300 + 150(17) = 2850 > 2400$\n\n**Key concept:** \"No more than\" means $\\leq$. Find the largest integer satisfying the inequality.",
          skills: ["Algebra", "Linear inequalities"]
        },
        {
          id: 9,
          type: "fill-in",
          difficulty: "medium",
          question: "$|x - 7| = 12$\n\nWhat is one possible solution to the given equation?",
          correctAnswer: "19",
          explanation: "**The correct answer is $19$ (or $-5$).**\n\nSolve the absolute value equation by considering both cases:\n\n**Case 1:** $x - 7 = 12$\n• $x = 19$\n\n**Case 2:** $x - 7 = -12$\n• $x = -5$\n\n**Verification:**\n• $|19 - 7| = |12| = 12$ ✓\n• $|-5 - 7| = |-12| = 12$ ✓\n\n**Key concept:** $|A| = B$ means $A = B$ or $A = -B$. Both solutions are valid.",
          skills: ["Algebra", "Absolute value equations"]
        },
        {
          id: 10,
          type: 'fill-in',
          difficulty: 'medium',
          question: 'What is the slope of the graph of $y = \\frac{1}{4}(24x + 8) + 3x$ in the $xy$-plane?',
          correctAnswer: '9',
          explanation: 'Simplify: $y = \\frac{1}{4}(24x) + \\frac{1}{4}(8) + 3x = 6x + 2 + 3x = 9x + 2$. The slope is $9$.'
        },
        {
          id: 11,
          type: "multiple-choice",
          difficulty: "medium",
          question: "In the figure, lines $m$ and $n$ are parallel. If $x = 5k + 8$ and $y = 7k - 20$, what is the value of $z$?",
          diagram: {
            type: "parallelLines",
            params: {
              angles: { x: true, y: true, z: true },
              lineLabels: { m: "m", n: "n" }
            }
          },
          choices: [
            { id: "A", text: "$14$" },
            { id: "B", text: "$28$" },
            { id: "C", text: "$78$" },
            { id: "D", text: "$102$" }
          ],
          correctAnswer: "C",
          explanation: "**Choice C is correct.** Use properties of parallel lines and transversals.\n\n• If $x$ and $y$ are corresponding angles or alternate angles, they're equal\n• If $x$ and $y$ are co-interior angles, $x + y = 180°$\n\nAssuming $x$ and $y$ are equal (corresponding angles):\n• $5k + 8 = 7k - 20$\n• $28 = 2k$\n• $k = 14$\n• $x = 5(14) + 8 = 78°$\n\nIf $z$ is a corresponding angle to $x$, then $z = 78°$.\n\n**Key concept:** When parallel lines are cut by a transversal, corresponding angles are equal and co-interior angles are supplementary.",
          skills: ["Geometry", "Parallel lines"]
        },
        {
          id: 12,
          type: "fill-in",
          difficulty: "medium",
          question: "$f(x) = 5x + 8$\n\nFor the given function $f$, the graph of $y = f(x)$ in the $xy$-plane is parallel to line $k$. What is the slope of line $k$?",
          correctAnswer: "5",
          explanation: "**The correct answer is $5$.**\n\n• The function $f(x) = 5x + 8$ is in slope-intercept form $y = mx + b$\n• Slope of $f(x)$ is $m = 5$\n• Parallel lines have the same slope\n• Therefore, line $k$ has slope $5$\n\n**Key concept:** Parallel lines have equal slopes. In $y = mx + b$, $m$ is the slope.",
          skills: ["Algebra", "Linear equations"]
        },
        {
          id: 13,
          type: "fill-in",
          difficulty: "medium",
          question: "In triangle $ABC$, angle $A$ measures $(2x + 10)°$, angle $B$ measures $45°$, and angle $C$ measures $x°$. What is the value of $x$?",
          correctAnswer: "41.67",
          alternateAnswers: [41.7, 42, "125/3"],
          explanation: "**The correct answer is $\\frac{125}{3} \\approx 41.67$.** The sum of angles in a triangle is $180°$.\n\n• $(2x + 10) + 45 + x = 180$\n• $3x + 55 = 180$\n• $3x = 125$\n• $x = \\frac{125}{3} \\approx 41.67°$\n\n**Verification:**\n• Angle $A$: $2\\left(\\frac{125}{3}\\right) + 10 = \\frac{250}{3} + \\frac{30}{3} = \\frac{280}{3} \\approx 93.33°$\n• Angle $B$: $45°$\n• Angle $C$: $\\frac{125}{3} \\approx 41.67°$\n• Sum: $\\frac{280}{3} + 45 + \\frac{125}{3} = \\frac{280}{3} + \\frac{135}{3} + \\frac{125}{3} = \\frac{540}{3} = 180°$ ✓\n\n**Key concept:** The sum of interior angles of a triangle is always $180°$.",
          skills: ["triangle-angles", "geometry"]
        },
        {
          id: 14,
          type: "multiple-choice",
          difficulty: "medium",
          question: "For the function $f(x) = \\sqrt{x + 5}$, what is the least value of $x$ for which $f(x)$ is defined?",
          choices: [
            { id: "A", text: "$-5$" },
            { id: "B", text: "$0$" },
            { id: "C", text: "$5$" },
            { id: "D", text: "$25$" }
          ],
          correctAnswer: "A",
          explanation: "**Choice A is correct.** The square root function is defined when the radicand is non-negative.\n\n• For $f(x) = \\sqrt{x + 5}$ to be defined:\n• $x + 5 \\geq 0$\n• $x \\geq -5$\n\nThe least value is $x = -5$.\n\n**Verification:** $f(-5) = \\sqrt{-5 + 5} = \\sqrt{0} = 0$ ✓\n\n**Why other choices are incorrect:**\n• Choice B ($0$): $f$ is defined for values less than $0$\n• Choice C ($5$): $f$ is defined for values less than $5$\n• Choice D ($25$): Much larger than necessary\n\n**Key concept:** For $f(x) = \\sqrt{\\text{expression}}$, the domain is where expression $\\geq 0$.",
          skills: ["function-domain", "radical-functions"]
        },
        {
          id: 15,
          type: 'fill-in',
          difficulty: 'medium',
          question: '$(d - 25)(d + 25) - 9 = -9$\n\nWhat is a solution to the given equation?',
          correctAnswer: '25',
          explanation: 'Adding $9$ to both sides: $(d - 25)(d + 25) = 0$. This means $d - 25 = 0$ or $d + 25 = 0$. So $d = 25$ or $d = -25$. Both are valid solutions; $25$ is one of them.'
        },
        {
          id: 16,
          type: "fill-in",
          difficulty: "medium",
          question: "In an isosceles triangle, the two equal angles each measure 65°. What is the measure, in degrees, of the third angle?",
          correctAnswer: 50,
          explanation: "**The correct answer is 50.** Use the triangle angle sum property.\n\n• Sum of angles = 180°\n• Two equal angles: 65° + 65° = 130°\n• Third angle: 180° - 130° = 50°\n\n**Key concept:** In an isosceles triangle, the two base angles are equal, and all three angles sum to 180°.",
          skills: ["triangle-angles", "isosceles-triangles"]
        },
        {
          id: 17,
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
          explanation: "**Choice A is correct.** Identify the vertex from vertex form.\n\n• $f(x) = \\frac{1}{4}(x - 5)^2 + 2$ is in vertex form $a(x - h)^2 + k$\n• Vertex: $(h, k) = (5, 2)$\n• Since $a = \\frac{1}{4} > 0$, the parabola opens upward\n• The vertex represents the minimum point\n• Minimum height $= 2$ inches (the $k$-value)\n\n**Why other choices are incorrect:**\n• Choice B: $5$ is the time at minimum, not the height\n• Choice C: At release ($x = 0$), $f(0) = \\frac{1}{4}(25) + 2 = 8.25$ inches\n• Choice D: Same error as C\n\n**Key concept:** In $f(x) = a(x - h)^2 + k$, the vertex is $(h, k)$. If $a > 0$, $k$ is the minimum.",
          skills: ["Algebra", "Quadratic functions"]
        },
        {
          id: 18,
          type: 'multiple-choice',
          difficulty: 'medium',
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
          type: "fill-in",
          difficulty: "hard",
          question: "A cube has a surface area of $150$ square centimeters. What is the volume, in cubic centimeters, of the cube?",
          correctAnswer: 125,
          explanation: "**The correct answer is $125$.** Find the side length from surface area, then calculate volume.\n\n**Step 1: Find side length**\n• Surface area of cube $= 6s^2$\n• $150 = 6s^2$\n• $25 = s^2$\n• $s = 5$ cm\n\n**Step 2: Find volume**\n• Volume $= s^3$\n• Volume $= 5^3 = 125$ cm³\n\n**Key concept:**\n• Cube surface area: $SA = 6s^2$\n• Cube volume: $V = s^3$",
          skills: ["volume", "surface-area", "geometry"]
        },
        {
          id: 20,
          type: 'fill-in',
          difficulty: 'hard',
          question: 'A flat surface consists of two adjacent squares, where the side length, in meters, of the larger square is $4$ times the side length of the smaller square. A uniform field with strength $18.00$ units per square meter passes through this surface perpendicular to it. The total flux through both squares together is $4{,}590$ units. What is the flux, in units, through the larger square only?',
          correctAnswer: '4320',
          explanation: 'Let $s$ = side length of smaller square. Larger square has side $4s$. Area of smaller $= s^2$. Area of larger $= (4s)^2 = 16s^2$. Total area $= s^2 + 16s^2 = 17s^2$. Total flux = field strength × total area $= 18 \\times 17s^2 = 4590$. So $306s^2 = 4590$, giving $s^2 = 15$. Flux through larger square $= 18 \\times 16s^2 = 18 \\times 16 \\times 15 = 18 \\times 240 = 4{,}320$ units.'
        },
        {
          id: 21,
          type: "fill-in",
          difficulty: "hard",
          question: "A student's grade is calculated as follows: tests count for $70\\%$ and homework counts for $30\\%$. If the student has a test average of $85$ and a homework average of $90$, what is the student's overall grade?",
          correctAnswer: 86.5,
          alternateAnswers: ["173/2"],
          explanation: "**The correct answer is $86.5$.** Calculate the weighted average.\n\n• Weighted grade $=$ (Test average $\\times$ Test weight) $+$ (Homework average $\\times$ Homework weight)\n• $= (85 \\times 0.70) + (90 \\times 0.30)$\n• $= 59.5 + 27$\n• $= 86.5$\n\n**Why simple average would be wrong:**\n• Simple average: $\\frac{85 + 90}{2} = 87.5$\n• But tests count more, so the grade is closer to $85$\n\n**Key concept:** Weighted average $= \\Sigma(\\text{value} \\times \\text{weight})$, where weights sum to $1$ (or $100\\%$).",
          skills: ["weighted-average", "statistics"]
        },
        {
          id: 22,
          type: "multiple-choice",
          difficulty: "hard",
          question: "If $4^x = 32$, which of the following is the value of $x$?",
          choices: [
            { id: "A", text: "$2$" },
            { id: "B", text: "$2.5$" },
            { id: "C", text: "$3$" },
            { id: "D", text: "$8$" }
          ],
          correctAnswer: "B",
          explanation: "**Choice B is correct.** Express both sides with the same base.\n\n• $4^x = 32$\n• $(2^2)^x = 2^5$ (since $4 = 2^2$ and $32 = 2^5$)\n• $2^{2x} = 2^5$\n• $2x = 5$\n• $x = 2.5$\n\n**Verification:** $4^{2.5} = 4^2 \\times 4^{0.5} = 16 \\times 2 = 32$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($2$): $4^2 = 16 \\neq 32$\n• Choice C ($3$): $4^3 = 64 \\neq 32$\n• Choice D ($8$): $4^8$ is much larger than $32$\n\n**Calculator tip:** Use logarithms: $x = \\log_4(32) = \\frac{\\log(32)}{\\log(4)} \\approx 2.5$",
          skills: ["exponential-equations", "exponents"]
        }
      ]
    }
  ]
};
