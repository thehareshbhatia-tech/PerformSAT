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
          difficulty: 'easy',
          question: 'If $5x - 15 = 30$, what is the value of $x - 3$?',
          choices: [
            { id: 'A', text: '$6$' },
            { id: 'B', text: '$9$' },
            { id: 'C', text: '$12$' },
            { id: 'D', text: '$15$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Factor the left side to isolate the expression $x - 3$ directly.\n\n**Step 1: Factor out the common factor**\n$5x - 15 = 5(x - 3)$\n\nSo the equation becomes $5(x - 3) = 30$.\n\n**Step 2: Solve for $x - 3$**\nDivide both sides by $5$:\n$x - 3 = \\frac{30}{5} = 6$\n\n**Why other choices are incorrect:**\n• Choice B ($9$): This is the value of $x$, not $x - 3$\n• Choice C ($12$): Results from incorrectly dividing $30$ by $2.5$\n• Choice D ($15$): Results from subtracting $15$ from $30$ without factoring\n\n**Key concept:** When asked for an expression like $x - 3$ rather than $x$ alone, factor the equation to isolate that expression directly — it saves a step.',
          skills: ["linear-equations"]
        },
        {
          id: 'pt7-m1-q2',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'A researcher collected data on the relationship between hours of sunlight and plant height. The scatterplot shows a positive linear relationship. If the line of best fit has equation $h = 2.5s + 4$, where $h$ is height in centimeters and $s$ is hours of sunlight, what does the $4$ represent?',
          choices: [
            { id: 'A', text: 'The increase in height for each additional hour of sunlight' },
            { id: 'B', text: 'The predicted height when there is no sunlight' },
            { id: 'C', text: 'The maximum height of the plants' },
            { id: 'D', text: 'The number of hours of sunlight needed' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Identify the role of each part in the linear equation $h = 2.5s + 4$.\n\n**Step 1: Identify the equation form**\nThis equation is in slope-intercept form: $y = mx + b$, where $m = 2.5$ (slope) and $b = 4$ ($y$-intercept).\n\n**Step 2: Interpret the $y$-intercept**\nThe constant $4$ is the value of $h$ when $s = 0$:\n$h = 2.5(0) + 4 = 4$\n\nThis means when there is zero sunlight ($s = 0$), the predicted height is $4$ cm.\n\n**Why other choices are incorrect:**\n• Choice A: The increase per hour of sunlight is $2.5$ (the slope), not $4$\n• Choice C: The equation gives no maximum; height increases without bound as $s$ increases\n• Choice D: The number of hours is the input variable $s$, not the constant $4$\n\n**Key concept:** In $y = mx + b$, the $y$-intercept $b$ represents the predicted value of the output when the input is $0$.',
          skills: ["slope-intercept-form", "word-problem-to-equation"]
        },
        {
          id: 'pt7-m1-q3',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'What is the solution to $\\sqrt{3x + 7} = 5$?',
          choices: [
            { id: 'A', text: '$4$' },
            { id: 'B', text: '$6$' },
            { id: 'C', text: '$8$' },
            { id: 'D', text: '$10$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Solve the radical equation by squaring both sides.\n\n**Step 1: Square both sides**\n$(\\sqrt{3x + 7})^2 = 5^2$\n$3x + 7 = 25$\n\n**Step 2: Isolate $x$**\n$3x = 25 - 7 = 18$\n$x = \\frac{18}{3} = 6$\n\n**Step 3: Verify the solution**\n$\\sqrt{3(6) + 7} = \\sqrt{18 + 7} = \\sqrt{25} = 5$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($4$): $\\sqrt{3(4)+7} = \\sqrt{19} \\approx 4.36 \\neq 5$\n• Choice C ($8$): $\\sqrt{3(8)+7} = \\sqrt{31} \\approx 5.57 \\neq 5$\n• Choice D ($10$): $\\sqrt{3(10)+7} = \\sqrt{37} \\approx 6.08 \\neq 5$\n\n**Key concept:** Always verify solutions to radical equations — squaring can introduce extraneous solutions.',
          skills: ["linear-equations"]
        },
        {
          id: 'pt7-m1-q4',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Which inequality represents all values of $x$ such that $3x - 7 > 2x + 5$?',
          choices: [
            { id: 'A', text: '$x > 12$' },
            { id: 'B', text: '$x > -12$' },
            { id: 'C', text: '$x < 12$' },
            { id: 'D', text: '$x < -12$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Solve the inequality by isolating $x$.\n\n**Step 1: Subtract $2x$ from both sides**\n$3x - 7 - 2x > 2x + 5 - 2x$\n$x - 7 > 5$\n\n**Step 2: Add $7$ to both sides**\n$x - 7 + 7 > 5 + 7$\n$x > 12$\n\n**Why other choices are incorrect:**\n• Choice B ($x > -12$): Sign error — incorrectly subtracting $7$ instead of adding\n• Choice C ($x < 12$): Inequality direction flipped — the direction does not change when adding or subtracting\n• Choice D ($x < -12$): Both the sign and direction are wrong\n\n**Key concept:** When solving inequalities, the direction stays the same unless you multiply or divide by a negative number.',
          skills: ["linear-equations"]
        },
        {
          id: 'pt7-m1-q5',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The function $f(t) = 800(1.06)^t$ models the value of an investment after $t$ years. What does $800$ represent in this context?',
          choices: [
            { id: 'A', text: 'The annual interest rate' },
            { id: 'B', text: 'The initial investment amount' },
            { id: 'C', text: 'The value after one year' },
            { id: 'D', text: 'The total interest earned' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Identify the role of each component in the exponential function.\n\n**Step 1: Identify the equation form**\nThe function $f(t) = 800(1.06)^t$ has the form $f(t) = a \\cdot b^t$, where $a = 800$ is the initial value and $b = 1.06$ is the growth factor.\n\n**Step 2: Interpret the initial value**\nWhen $t = 0$: $f(0) = 800(1.06)^0 = 800 \\times 1 = 800$\n\nThis confirms $800$ is the value at time $t = 0$, which is the initial investment amount.\n\n**Why other choices are incorrect:**\n• Choice A: The annual interest rate is $6\\%$ (from $1.06 - 1 = 0.06$), not $800$\n• Choice C: The value after one year is $800(1.06)^1 = \\$848$, not $800$\n• Choice D: Total interest earned depends on $t$ and is not a fixed constant\n\n**Key concept:** In $f(t) = a \\cdot b^t$, the coefficient $a$ is the initial value (when $t = 0$), and $b - 1$ gives the growth rate.',
          skills: ["exponential-growth-decay"]
        },
        {
          id: 'pt7-m1-q6',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'A phone plan charges a monthly fee of \\$25 plus \\$0.05 per text message. Which equation represents the total monthly cost $C$ in terms of the number of text messages $m$?',
          choices: [
            { id: 'A', text: '$C = 0.05m + 25$' },
            { id: 'B', text: '$C = 25m + 0.05$' },
            { id: 'C', text: '$C = 0.05(m + 25)$' },
            { id: 'D', text: '$C = 25(m + 0.05)$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Translate the word problem into a linear equation.\n\n**Step 1: Identify the components**\n• Fixed monthly fee: \\$25 (does not depend on messages)\n• Variable cost: \\$0.05 per text message\n• Number of messages: $m$\n\n**Step 2: Build the equation**\nTotal cost = fixed fee + (cost per message × number of messages)\n$C = 25 + 0.05m = 0.05m + 25$\n\n**Why other choices are incorrect:**\n• Choice B ($C = 25m + 0.05$): Multiplies \\$25 by number of messages — this would charge \\$25 per message\n• Choice C ($C = 0.05(m + 25)$): Distributes to $0.05m + 1.25$, which has the wrong fixed fee\n• Choice D ($C = 25(m + 0.05)$): Distributes to $25m + 1.25$, charging \\$25 per message\n\n**Key concept:** In cost equations, the per-unit rate multiplies the variable, and the fixed fee is added as a constant.',
          skills: ["word-problem-to-equation", "slope-intercept-form"]
        },
        {
          id: 'pt7-m1-q7',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'A triangle has a base of $12$ inches and a height of $8$ inches. What is the area of the triangle in square inches?',
          choices: [
            { id: 'A', text: '$20$' },
            { id: 'B', text: '$48$' },
            { id: 'C', text: '$96$' },
            { id: 'D', text: '$192$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Apply the triangle area formula.\n\n**Step 1: Recall the formula**\n$$\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$$\n\n**Step 2: Substitute and calculate**\n$$\\text{Area} = \\frac{1}{2} \\times 12 \\times 8 = \\frac{96}{2} = 48 \\text{ square inches}$$\n\n**Why other choices are incorrect:**\n• Choice A ($20$): Added base and height ($12 + 8$) instead of multiplying\n• Choice C ($96$): Forgot to multiply by $\\frac{1}{2}$ (this is base × height, the area of a rectangle)\n• Choice D ($192$): Doubled the rectangle area instead of halving it\n\n**Key concept:** The area of a triangle is exactly half the area of a rectangle with the same base and height: $A = \\frac{1}{2}bh$.',
          skills: ["triangle-area"]
        },
        {
          id: 'pt7-m1-q8',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'If $x^2 - 6x + 9 = 0$, what is the value of $x$?',
          choices: [
            { id: 'A', text: '$-3$' },
            { id: 'B', text: '$3$' },
            { id: 'C', text: '$-3$ or $3$' },
            { id: 'D', text: '$9$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Recognize and factor the perfect square trinomial.\n\n**Step 1: Identify the pattern**\n$x^2 - 6x + 9$ fits the pattern $a^2 - 2ab + b^2 = (a - b)^2$\nwhere $a = x$ and $b = 3$: $x^2 - 2(x)(3) + 3^2$\n\n**Step 2: Factor**\n$x^2 - 6x + 9 = (x - 3)^2 = 0$\n\n**Step 3: Solve**\n$(x - 3)^2 = 0$ means $x - 3 = 0$, so $x = 3$\n\n**Why other choices are incorrect:**\n• Choice A ($-3$): $(-3)^2 - 6(-3) + 9 = 9 + 18 + 9 = 36 \\neq 0$\n• Choice C ($-3$ or $3$): Only $x = 3$ works; $x = -3$ does not satisfy the equation\n• Choice D ($9$): $(9)^2 - 6(9) + 9 = 81 - 54 + 9 = 36 \\neq 0$\n\n**Key concept:** A perfect square trinomial $a^2 - 2ab + b^2 = (a - b)^2$ has exactly one repeated root.',
          skills: ["perfect-square-trinomial", "finding-roots-factoring"]
        },
        {
          id: 'pt7-m1-q9',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The equation $y = 2x^2 - 8x + 10$ represents a parabola. What is the $y$-intercept?',
          choices: [
            { id: 'A', text: '$2$' },
            { id: 'B', text: '$-8$' },
            { id: 'C', text: '$10$' },
            { id: 'D', text: '$0$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Find the $y$-intercept by setting $x = 0$.\n\n**Step 1: Recall what the $y$-intercept means**\nThe $y$-intercept is the point where the graph crosses the $y$-axis, which occurs when $x = 0$.\n\n**Step 2: Substitute $x = 0$**\n$y = 2(0)^2 - 8(0) + 10 = 0 - 0 + 10 = 10$\n\n**Why other choices are incorrect:**\n• Choice A ($2$): This is the leading coefficient $a$, not the $y$-intercept\n• Choice B ($-8$): This is the coefficient of $x$, not the $y$-intercept\n• Choice D ($0$): The $y$-intercept is not at the origin\n\n**Key concept:** For any polynomial $y = ax^2 + bx + c$, the $y$-intercept is always the constant term $c$.',
          skills: ["vertex-form", "function-evaluation"]
        },
        {
          id: 'pt7-m1-q10',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'A store increases the price of an item by $25\\%$. If the new price is \\$75, what was the original price?',
          choices: [
            { id: 'A', text: '\\$50' },
            { id: 'B', text: '\\$56.25' },
            { id: 'C', text: '\\$60' },
            { id: 'D', text: '\\$62.50' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Set up an equation using the percent increase.\n\n**Step 1: Write the percent increase equation**\nIf the original price is $p$ and it increases by $25\\%$:\n$p + 0.25p = 1.25p = 75$\n\n**Step 2: Solve for $p$**\n$p = \\frac{75}{1.25} = 60$\n\nThe original price was \\$60.\n\n**Verification:** \\$60 + 25\\% of \\$60 = \\$60 + \\$15 = \\$75 ✓\n\n**Why other choices are incorrect:**\n• Choice A (\\$50): $1.25 \\times 50 = \\$62.50 \\neq \\$75$\n• Choice B (\\$56.25): $1.25 \\times 56.25 = \\$70.31 \\neq \\$75$\n• Choice D (\\$62.50): This comes from subtracting $25\\%$ of $75$ from $75$, but $25\\%$ of the new price is not the same as $25\\%$ of the original\n\n**Key concept:** "Increased by $p\\%$" means multiply by $(1 + p/100)$. To find the original, divide the new value by that factor.',
          skills: ["percent-change"]
        },
        {
          id: 'pt7-m1-q11',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The equation of a circle is $(x - 4)^2 + (y + 2)^2 = 36$. What is the radius of the circle?',
          choices: [
            { id: 'A', text: '$4$' },
            { id: 'B', text: '$6$' },
            { id: 'C', text: '$18$' },
            { id: 'D', text: '$36$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Read the radius from the standard form of a circle equation.\n\n**Step 1: Recall the standard form**\nThe standard form of a circle is $(x - h)^2 + (y - k)^2 = r^2$, where $(h, k)$ is the center and $r$ is the radius.\n\n**Step 2: Identify the components**\n$(x - 4)^2 + (y + 2)^2 = 36$\n• Center: $(4, -2)$\n• $r^2 = 36$, so $r = \\sqrt{36} = 6$\n\n**Why other choices are incorrect:**\n• Choice A ($4$): This is the $x$-coordinate of the center, not the radius\n• Choice C ($18$): This is $r^2 / 2$, a common error from halving instead of taking the square root\n• Choice D ($36$): This is $r^2$, not $r$ — you must take the square root\n\n**Key concept:** In $(x - h)^2 + (y - k)^2 = r^2$, the right side is $r^2$, not $r$. Always take the square root to find the radius.',
          skills: ["circle-equation"]
        },
        {
          id: 'pt7-m1-q12',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'In a right triangle, if $\\sin(\\theta) = \\frac{5}{13}$, what is $\\cos(\\theta)$?',
          choices: [
            { id: 'A', text: '$\\frac{5}{13}$' },
            { id: 'B', text: '$\\frac{12}{13}$' },
            { id: 'C', text: '$\\frac{5}{12}$' },
            { id: 'D', text: '$\\frac{13}{12}$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Use the Pythagorean identity to find $\\cos(\\theta)$.\n\n**Step 1: Apply the Pythagorean identity**\n$\\sin^2(\\theta) + \\cos^2(\\theta) = 1$\n$\\left(\\frac{5}{13}\\right)^2 + \\cos^2(\\theta) = 1$\n$\\frac{25}{169} + \\cos^2(\\theta) = 1$\n\n**Step 2: Solve for $\\cos(\\theta)$**\n$\\cos^2(\\theta) = 1 - \\frac{25}{169} = \\frac{169 - 25}{169} = \\frac{144}{169}$\n$\\cos(\\theta) = \\frac{12}{13}$ (positive, since the angle is in a right triangle)\n\n**Why other choices are incorrect:**\n• Choice A ($\\frac{5}{13}$): This is $\\sin(\\theta)$, not $\\cos(\\theta)$\n• Choice C ($\\frac{5}{12}$): This is $\\tan(\\theta) = \\frac{\\sin}{\\cos} = \\frac{5/13}{12/13}$\n• Choice D ($\\frac{13}{12}$): This is $\\sec(\\theta) = \\frac{1}{\\cos(\\theta)}$, the reciprocal\n\n**Key concept:** In a right triangle with sides $5$-$12$-$13$: $\\sin = \\frac{\\text{opposite}}{\\text{hypotenuse}}$ and $\\cos = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$. The identity $\\sin^2 + \\cos^2 = 1$ always holds.',
          skills: ["soh-cah-toa", "pythagorean-theorem"]
        },
        {
          id: 'pt7-m1-q13',
          type: 'fill-in',
          difficulty: 'easy',
          question: 'If $4(2x + 3) = 28$, what is the value of $x$?',
          correctAnswer: '2',
          explanation: '**The correct answer is $2$.** Distribute and solve the linear equation.\n\n**Step 1: Distribute the $4$**\n$4(2x + 3) = 28$\n$8x + 12 = 28$\n\n**Step 2: Subtract $12$ from both sides**\n$8x = 28 - 12 = 16$\n\n**Step 3: Divide by $8$**\n$x = \\frac{16}{8} = 2$\n\n**Verification:** $4(2(2) + 3) = 4(4 + 3) = 4(7) = 28$ ✓\n\n**Key concept:** Always distribute first to clear parentheses, then isolate the variable using inverse operations.',
          skills: ["linear-equations", "distributive-property"]
        },
        {
          id: 'pt7-m1-q14',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The function $g(x) = 3x - 7$. What is $g(5)$?',
          choices: [
            { id: 'A', text: '$2$' },
            { id: 'B', text: '$8$' },
            { id: 'C', text: '$15$' },
            { id: 'D', text: '$22$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Evaluate the function by substituting $x = 5$.\n\n**Step 1: Substitute $x = 5$ into the function**\n$g(5) = 3(5) - 7$\n\n**Step 2: Calculate**\n$g(5) = 15 - 7 = 8$\n\n**Why other choices are incorrect:**\n• Choice A ($2$): Would result from $3(5) - 13$, an arithmetic error\n• Choice C ($15$): This is $3(5)$ without subtracting $7$\n• Choice D ($22$): Would result from $3(5) + 7$, adding instead of subtracting\n\n**Key concept:** To evaluate $f(a)$, replace every $x$ in the function rule with $a$ and simplify.',
          skills: ["function-evaluation"]
        },
        {
          id: 'pt7-m1-q15',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'If $f(x) = x^2 + 4x - 5$, for what value of $x$ does $f(x) = 0$?',
          choices: [
            { id: 'A', text: '$x = 1$ only' },
            { id: 'B', text: '$x = -5$ only' },
            { id: 'C', text: '$x = 1$ or $x = -5$' },
            { id: 'D', text: '$x = -1$ or $x = 5$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Factor the quadratic to find the roots.\n\n**Step 1: Set up the equation**\n$x^2 + 4x - 5 = 0$\n\n**Step 2: Factor the quadratic**\nFind two numbers that multiply to $-5$ and add to $4$: those are $5$ and $-1$.\n$x^2 + 4x - 5 = (x + 5)(x - 1) = 0$\n\n**Step 3: Apply the zero product property**\n$x + 5 = 0 \\Rightarrow x = -5$\n$x - 1 = 0 \\Rightarrow x = 1$\n\n**Verification:**\n• $f(1) = 1 + 4 - 5 = 0$ ✓\n• $f(-5) = 25 - 20 - 5 = 0$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($x = 1$ only): Misses the second root $x = -5$\n• Choice B ($x = -5$ only): Misses the second root $x = 1$\n• Choice D ($x = -1$ or $x = 5$): Sign errors — these are the factors with wrong signs\n\n**Key concept:** To solve $ax^2 + bx + c = 0$ by factoring, find two numbers whose product is $c$ and sum is $b$.',
          skills: ["finding-roots-factoring"]
        },
        {
          id: 'pt7-m1-q16',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'A line passes through the points $(2, 5)$ and $(6, 13)$. What is the slope of the line?',
          choices: [
            { id: 'A', text: '$\\frac{1}{2}$' },
            { id: 'B', text: '$2$' },
            { id: 'C', text: '$4$' },
            { id: 'D', text: '$8$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Use the slope formula with the two given points.\n\n**Step 1: Apply the slope formula**\n$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{13 - 5}{6 - 2}$$\n\n**Step 2: Calculate**\n$$m = \\frac{8}{4} = 2$$\n\n**Why other choices are incorrect:**\n• Choice A ($\\frac{1}{2}$): This is the reciprocal — computed $\\frac{\\Delta x}{\\Delta y}$ instead of $\\frac{\\Delta y}{\\Delta x}$\n• Choice C ($4$): This is the change in $x$ alone ($6 - 2$), not the ratio\n• Choice D ($8$): This is the change in $y$ alone ($13 - 5$), not the ratio\n\n**Key concept:** Slope $= \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1}$. Make sure $y$ is in the numerator.',
          skills: ["slope-from-points"]
        },
        {
          id: 'pt7-m1-q17',
          type: 'fill-in',
          difficulty: 'easy',
          question: 'What is the value of $3^2 + 4^2$?',
          correctAnswer: '25',
          explanation: '**The correct answer is $25$.** Evaluate each power and add.\n\n**Step 1: Calculate each term**\n$3^2 = 9$\n$4^2 = 16$\n\n**Step 2: Add the results**\n$9 + 16 = 25$\n\n**Key concept:** This is a Pythagorean triple: $3$-$4$-$5$. Since $3^2 + 4^2 = 5^2 = 25$, a triangle with sides $3$, $4$, and $5$ is a right triangle.',
          skills: ["pythagorean-theorem"]
        },
        {
          id: 'pt7-m1-q18',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Which expression is equivalent to $(2x^3)^2$?',
          choices: [
            { id: 'A', text: '$2x^6$' },
            { id: 'B', text: '$4x^5$' },
            { id: 'C', text: '$4x^6$' },
            { id: 'D', text: '$2x^9$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Apply the power rule to both the coefficient and the variable.\n\n**Step 1: Apply the power to each factor**\n$(2x^3)^2 = 2^2 \\times (x^3)^2$\n\n**Step 2: Simplify each part**\n$2^2 = 4$\n$(x^3)^2 = x^{3 \\times 2} = x^6$\n\n**Step 3: Combine**\n$(2x^3)^2 = 4x^6$\n\n**Why other choices are incorrect:**\n• Choice A ($2x^6$): Forgot to square the coefficient $2$\n• Choice B ($4x^5$): Added the exponents ($3 + 2$) instead of multiplying ($3 \\times 2$)\n• Choice D ($2x^9$): Used $3^2 = 9$ for the exponent but forgot to square the coefficient\n\n**Key concept:** When raising a product to a power: $(ab)^n = a^n \\cdot b^n$. When raising a power to a power: $(x^m)^n = x^{mn}$.',
          skills: ["exponent-laws"]
        },
        {
          id: 'pt7-m1-q19',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The sum of three consecutive integers is $72$. What is the largest of these integers?',
          choices: [
            { id: 'A', text: '$23$' },
            { id: 'B', text: '$24$' },
            { id: 'C', text: '$25$' },
            { id: 'D', text: '$26$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Set up an equation using consecutive integers.\n\n**Step 1: Define the variables**\nLet the three consecutive integers be $n$, $n + 1$, and $n + 2$.\n\n**Step 2: Write and solve the equation**\n$n + (n + 1) + (n + 2) = 72$\n$3n + 3 = 72$\n$3n = 69$\n$n = 23$\n\n**Step 3: Find the largest**\nThe three integers are $23$, $24$, $25$. The largest is $25$.\n\n**Verification:** $23 + 24 + 25 = 72$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($23$): This is the smallest of the three, not the largest\n• Choice B ($24$): This is the middle integer\n• Choice D ($26$): Would make the sum $24 + 25 + 26 = 75 \\neq 72$\n\n**Key concept:** For consecutive integer problems, let the smallest be $n$ and express the others as $n + 1$, $n + 2$, etc.',
          skills: ["word-problem-to-equation", "linear-equations"]
        },
        {
          id: 'pt7-m1-q20',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'If $2y - 3 = 11$, what is the value of $4y$?',
          choices: [
            { id: 'A', text: '$14$' },
            { id: 'B', text: '$22$' },
            { id: 'C', text: '$28$' },
            { id: 'D', text: '$44$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Solve for $y$ first, then compute $4y$.\n\n**Step 1: Solve for $y$**\n$2y - 3 = 11$\n$2y = 11 + 3 = 14$\n$y = 7$\n\n**Step 2: Calculate $4y$**\n$4y = 4(7) = 28$\n\n**Shortcut:** From $2y = 14$, multiply both sides by $2$: $4y = 28$.\n\n**Why other choices are incorrect:**\n• Choice A ($14$): This is $2y$, not $4y$\n• Choice B ($22$): Arithmetic error\n• Choice D ($44$): Would result from computing $4(11)$ instead of $4(7)$\n\n**Key concept:** When asked for a multiple of the variable (like $4y$), you can manipulate the equation directly — double both sides of $2y = 14$ to get $4y = 28$.',
          skills: ["linear-equations"]
        },
        {
          id: 'pt7-m1-q21',
          type: 'fill-in',
          difficulty: 'easy',
          question: 'A rectangle has a perimeter of $28$ cm. If the length is $9$ cm, what is the width in cm?',
          correctAnswer: '5',
          explanation: '**The correct answer is $5$.** Use the perimeter formula for a rectangle.\n\n**Step 1: Write the perimeter formula**\n$P = 2(\\text{length} + \\text{width})$\n$28 = 2(9 + w)$\n\n**Step 2: Solve for the width**\nDivide both sides by $2$: $14 = 9 + w$\nSubtract $9$: $w = 14 - 9 = 5$\n\n**Verification:** $P = 2(9 + 5) = 2(14) = 28$ ✓\n\n**Key concept:** The perimeter of a rectangle is $P = 2l + 2w$ (or equivalently $P = 2(l + w)$). To find a missing dimension, substitute the known values and solve.',
          skills: ["word-problem-to-equation"]
        },
        {
          id: 'pt7-m1-q22',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Which of the following is equivalent to $(x + 3)(x - 3)$?',
          choices: [
            { id: 'A', text: '$x^2 - 9$' },
            { id: 'B', text: '$x^2 + 9$' },
            { id: 'C', text: '$x^2 - 6x + 9$' },
            { id: 'D', text: '$x^2 + 6x + 9$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Apply the difference of squares formula.\n\n**Step 1: Recognize the pattern**\n$(x + 3)(x - 3)$ has the form $(a + b)(a - b)$, which equals $a^2 - b^2$.\n\n**Step 2: Apply the formula**\n$(x + 3)(x - 3) = x^2 - 3^2 = x^2 - 9$\n\n**Verification (FOIL method):**\n$x \\cdot x + x(-3) + 3 \\cdot x + 3(-3) = x^2 - 3x + 3x - 9 = x^2 - 9$ ✓\n\n**Why other choices are incorrect:**\n• Choice B ($x^2 + 9$): Sign error — the product of $+3$ and $-3$ is $-9$, not $+9$\n• Choice C ($x^2 - 6x + 9$): This is $(x - 3)^2$, not $(x + 3)(x - 3)$\n• Choice D ($x^2 + 6x + 9$): This is $(x + 3)^2$, not $(x + 3)(x - 3)$\n\n**Key concept:** $(a + b)(a - b) = a^2 - b^2$ — the middle terms cancel, leaving only the difference of squares.',
          skills: ["difference-of-squares"]
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
          difficulty: 'easy',
          question: 'A bag contains $4$ red marbles, $6$ blue marbles, and $5$ green marbles. If one marble is selected at random, what is the probability of selecting a blue marble?',
          choices: [
            { id: 'A', text: '$\\frac{1}{5}$' },
            { id: 'B', text: '$\\frac{2}{5}$' },
            { id: 'C', text: '$\\frac{6}{15}$' },
            { id: 'D', text: '$\\frac{2}{3}$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Calculate the probability using the basic probability formula.\n\n**Step 1: Find the total number of marbles**\nTotal $= 4 + 6 + 5 = 15$ marbles\n\n**Step 2: Calculate the probability**\n$P(\\text{blue}) = \\frac{\\text{blue marbles}}{\\text{total marbles}} = \\frac{6}{15} = \\frac{2}{5}$\n\n**Why other choices are incorrect:**\n• Choice A ($\\frac{1}{5} = \\frac{3}{15}$): This would require only $3$ favorable outcomes\n• Choice C ($\\frac{6}{15}$): While numerically equal to $\\frac{2}{5}$, the SAT expects simplified fractions\n• Choice D ($\\frac{2}{3}$): This would require $10$ blue out of $15$ total\n\n**Key concept:** $P(\\text{event}) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$. Always reduce fractions to lowest terms.',
          skills: ["percent-of-value"]
        },
        {
          id: 'pt7-m2-q2',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Which function represents exponential decay?',
          choices: [
            { id: 'A', text: '$f(x) = 3x + 2$' },
            { id: 'B', text: '$f(x) = 100(1.05)^x$' },
            { id: 'C', text: '$f(x) = 50(0.85)^x$' },
            { id: 'D', text: '$f(x) = x^2 - 4$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Identify which function has the form of exponential decay.\n\n**Step 1: Recall the exponential decay form**\nExponential decay: $f(x) = a \\cdot b^x$ where $a > 0$ and $0 < b < 1$.\nThe base $b$ must be between $0$ and $1$ for the function to decrease.\n\n**Step 2: Check each choice**\n• Choice A: $f(x) = 3x + 2$ — linear, not exponential\n• Choice B: $f(x) = 100(1.05)^x$ — base $1.05 > 1$, so this is exponential growth\n• Choice C: $f(x) = 50(0.85)^x$ — base $0.85$ is between $0$ and $1$ ✓ Exponential decay\n• Choice D: $f(x) = x^2 - 4$ — quadratic, not exponential\n\n**Why other choices are incorrect:**\n• Choice A: Linear functions have a constant rate of change, not exponential\n• Choice B: Since $1.05 > 1$, the function grows as $x$ increases\n• Choice D: $x^2$ is a power function (variable in the base), not exponential (variable in the exponent)\n\n**Key concept:** In $f(x) = a \\cdot b^x$: if $b > 1$, it is growth; if $0 < b < 1$, it is decay. The decay rate here is $1 - 0.85 = 15\\%$ per unit.',
          skills: ["exponential-growth-decay"]
        },
        {
          id: 'pt7-m2-q3',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The line $y = -3x + 12$ intersects the $y$-axis at what point?',
          choices: [
            { id: 'A', text: '$(0, -3)$' },
            { id: 'B', text: '$(0, 12)$' },
            { id: 'C', text: '$(12, 0)$' },
            { id: 'D', text: '$(-3, 0)$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Find the $y$-intercept by setting $x = 0$.\n\n**Step 1: Recall the definition**\nThe $y$-intercept is the point where the line crosses the $y$-axis, which occurs when $x = 0$.\n\n**Step 2: Substitute $x = 0$**\n$y = -3(0) + 12 = 12$\n\nThe $y$-intercept is the point $(0, 12)$.\n\n**Why other choices are incorrect:**\n• Choice A ($(0, -3)$): Confused the slope ($-3$) with the $y$-value at $x = 0$\n• Choice C ($(12, 0)$): This is the $x$-intercept (where $y = 0$), not the $y$-intercept\n• Choice D ($(-3, 0)$): Not a point on this line; $y = -3(-3) + 12 = 21 \\neq 0$\n\n**Key concept:** In slope-intercept form $y = mx + b$, the $y$-intercept is always the point $(0, b)$.',
          skills: ["slope-intercept-form"]
        },
        {
          id: 'pt7-m2-q4',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'What is the solution to the system of equations: $x + y = 10$ and $x - y = 4$?',
          choices: [
            { id: 'A', text: '$x = 7$, $y = 3$' },
            { id: 'B', text: '$x = 3$, $y = 7$' },
            { id: 'C', text: '$x = 6$, $y = 4$' },
            { id: 'D', text: '$x = 8$, $y = 2$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Solve the system using the elimination method.\n\n**Step 1: Add the two equations**\n$x + y = 10$\n$x - y = 4$\nAdding: $2x = 14$\n\n**Step 2: Solve for $x$**\n$x = \\frac{14}{2} = 7$\n\n**Step 3: Solve for $y$**\nSubstitute $x = 7$ into the first equation:\n$7 + y = 10$, so $y = 3$\n\n**Verification:** Check in both equations:\n• $7 + 3 = 10$ ✓\n• $7 - 3 = 4$ ✓\n\n**Why other choices are incorrect:**\n• Choice B ($x = 3, y = 7$): Swapped the values — $3 - 7 = -4 \\neq 4$\n• Choice C ($x = 6, y = 4$): $6 + 4 = 10$ ✓ but $6 - 4 = 2 \\neq 4$\n• Choice D ($x = 8, y = 2$): $8 + 2 = 10$ ✓ but $8 - 2 = 6 \\neq 4$\n\n**Key concept:** Adding equations eliminates variables with opposite signs. When one equation has $+y$ and another has $-y$, adding eliminates $y$ directly.',
          skills: ["elimination-method"]
        },
        {
          id: 'pt7-m2-q5',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'A survey found that $35\\%$ of $200$ students prefer online classes. How many students prefer online classes?',
          choices: [
            { id: 'A', text: '$35$' },
            { id: 'B', text: '$65$' },
            { id: 'C', text: '$70$' },
            { id: 'D', text: '$130$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Calculate the percentage of the total.\n\n**Step 1: Convert the percentage to a decimal**\n$35\\% = 0.35$\n\n**Step 2: Multiply by the total**\n$0.35 \\times 200 = 70$ students\n\n**Why other choices are incorrect:**\n• Choice A ($35$): Used the percentage value directly instead of calculating $35\\%$ of $200$\n• Choice B ($65$): Calculation error\n• Choice D ($130$): Computed $65\\%$ of $200$ (the complement), which is the number who do NOT prefer online classes\n\n**Key concept:** To find $p\\%$ of a number $n$: multiply $\\frac{p}{100} \\times n$.',
          skills: ["percent-of-value"]
        },
        {
          id: 'pt7-m2-q6',
          type: 'fill-in',
          difficulty: 'easy',
          question: 'The ratio of boys to girls in a class is $3:5$. If there are $24$ boys, how many girls are in the class?',
          correctAnswer: '40',
          explanation: '**The correct answer is $40$.** Use the given ratio to find the number of girls.\n\n**Step 1: Find the value of one ratio unit**\nBoys : Girls $= 3 : 5$\nIf boys $= 24$ and the ratio portion for boys is $3$:\nOne unit $= \\frac{24}{3} = 8$\n\n**Step 2: Calculate the number of girls**\nGirls $= 5 \\times 8 = 40$\n\n**Verification:** $\\frac{\\text{Boys}}{\\text{Girls}} = \\frac{24}{40} = \\frac{3}{5}$ ✓\n\n**Key concept:** In ratio problems, find the value of one unit by dividing the known quantity by its ratio portion, then multiply by the other ratio portion.',
          skills: ["word-problem-to-equation"]
        },
        {
          id: 'pt7-m2-q7',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Which equation is equivalent to $2(x - 4) = 3(x + 1)$?',
          choices: [
            { id: 'A', text: '$2x - 8 = 3x + 3$' },
            { id: 'B', text: '$2x - 4 = 3x + 1$' },
            { id: 'C', text: '$2x - 8 = 3x + 1$' },
            { id: 'D', text: '$2x - 4 = 3x + 3$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Distribute both sides to find the equivalent equation.\n\n**Step 1: Distribute the left side**\n$2(x - 4) = 2x - 8$\n\n**Step 2: Distribute the right side**\n$3(x + 1) = 3x + 3$\n\n**Step 3: Write the equivalent equation**\n$2x - 8 = 3x + 3$\n\n**Why other choices are incorrect:**\n• Choice B ($2x - 4 = 3x + 1$): Failed to distribute — used the constants inside parentheses directly\n• Choice C ($2x - 8 = 3x + 1$): Left side is correct, but right side forgot to multiply $3 \\times 1 = 3$\n• Choice D ($2x - 4 = 3x + 3$): Right side is correct, but left side forgot to multiply $2 \\times 4 = 8$\n\n**Key concept:** The distributive property states $a(b + c) = ab + ac$. Multiply the factor outside by EACH term inside the parentheses.',
          skills: ["distributive-property", "linear-equations"]
        },
        {
          id: 'pt7-m2-q8',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'A car travels at a constant rate of $55$ miles per hour. The equation $d = 55t$ represents the distance $d$ traveled in $t$ hours. If the car travels $220$ miles, how many hours did it travel?',
          choices: [
            { id: 'A', text: '$3$' },
            { id: 'B', text: '$4$' },
            { id: 'C', text: '$5$' },
            { id: 'D', text: '$6$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Solve the distance equation for time.\n\n**Step 1: Substitute $d = 220$ into the equation**\n$220 = 55t$\n\n**Step 2: Solve for $t$**\n$t = \\frac{220}{55} = 4$ hours\n\n**Verification:** $55 \\times 4 = 220$ miles ✓\n\n**Why other choices are incorrect:**\n• Choice A ($3$): $55 \\times 3 = 165 \\neq 220$\n• Choice C ($5$): $55 \\times 5 = 275 \\neq 220$\n• Choice D ($6$): $55 \\times 6 = 330 \\neq 220$\n\n**Key concept:** The distance formula $d = rt$ relates distance, rate, and time. To find time: $t = \\frac{d}{r}$.',
          skills: ["linear-equations", "word-problem-to-equation"]
        },
        {
          id: 'pt7-m2-q9',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'If the function $f(x) = (x - 2)(x + 6) = 0$, what are the solutions for $x$?',
          choices: [
            { id: 'A', text: '$x = 2$ and $x = 6$' },
            { id: 'B', text: '$x = -2$ and $x = -6$' },
            { id: 'C', text: '$x = 2$ and $x = -6$' },
            { id: 'D', text: '$x = -2$ and $x = 6$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Apply the zero product property.\n\n**Step 1: Set each factor equal to zero**\nIf $(x - 2)(x + 6) = 0$, then either $x - 2 = 0$ or $x + 6 = 0$.\n\n**Step 2: Solve each equation**\n$x - 2 = 0 \\Rightarrow x = 2$\n$x + 6 = 0 \\Rightarrow x = -6$\n\n**Verification:**\n• $(2 - 2)(2 + 6) = (0)(8) = 0$ ✓\n• $(-6 - 2)(-6 + 6) = (-8)(0) = 0$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($x = 2$ and $x = 6$): Sign error on second root — $x + 6 = 0$ gives $x = -6$, not $6$\n• Choice B ($x = -2$ and $x = -6$): Sign error on first root — $x - 2 = 0$ gives $x = 2$, not $-2$\n• Choice D ($x = -2$ and $x = 6$): Both signs are wrong\n\n**Key concept:** The zero product property: if $ab = 0$, then $a = 0$ or $b = 0$. For $(x - r) = 0$, the root is $x = r$ (same sign).',
          skills: ["roots-from-factors"]
        },
        {
          id: 'pt7-m2-q10',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Emma saves \\$50 per week. She currently has \\$200 in savings. Which equation represents her total savings $S$ after $w$ weeks?',
          choices: [
            { id: 'A', text: '$S = 200w + 50$' },
            { id: 'B', text: '$S = 50w + 200$' },
            { id: 'C', text: '$S = 50w - 200$' },
            { id: 'D', text: '$S = 200w - 50$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Write the equation for total savings as a function of weeks.\n\n**Step 1: Identify the components**\n• Starting savings: \\$200 (constant, does not depend on weeks)\n• Weekly savings rate: \\$50 per week\n• Number of weeks: $w$\n\n**Step 2: Build the equation**\nTotal savings $=$ starting amount $+$ (weekly savings $\\times$ weeks)\n$S = 200 + 50w = 50w + 200$\n\n**Verification:** After $3$ weeks: $S = 50(3) + 200 = 350$. This makes sense: \\$200 initial + \\$150 saved.\n\n**Why other choices are incorrect:**\n• Choice A ($S = 200w + 50$): Charges \\$200 per week with only \\$50 starting — roles are reversed\n• Choice C ($S = 50w - 200$): Subtracts the initial savings instead of adding\n• Choice D ($S = 200w - 50$): Wrong rate and wrong operation on the constant\n\n**Key concept:** In $y = mx + b$ for real-world models, $m$ is the rate of change per unit and $b$ is the starting value.',
          skills: ["slope-intercept-form", "word-problem-to-equation"]
        },
        {
          id: 'pt7-m2-q11',
          type: 'multiple-choice',
          difficulty: 'easy',
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
          explanation: '**Choice B is correct.** Find the middle value of the ordered data set.\n\n**Step 1: Confirm the data is ordered**\nThe values are already in order: $12, 15, 18, 22, 28, 35, 42$\n\n**Step 2: Find the middle position**\nWith $7$ values, the median is the $\\frac{7+1}{2} = 4$th value.\n\n**Step 3: Identify the median**\nCounting to the $4$th value: $12, 15, 18, \\mathbf{22}, 28, 35, 42$\nThe median is $22$.\n\n**Why other choices are incorrect:**\n• Choice A ($18$): This is the $3$rd value, not the $4$th\n• Choice C ($24.57$): This is the mean ($\\frac{172}{7} \\approx 24.57$), not the median\n• Choice D ($28$): This is the $5$th value, not the $4$th\n\n**Key concept:** For an odd number of values $n$, the median is the value at position $\\frac{n+1}{2}$. The data must be in order.',
          skills: ["find-median"]
        },
        {
          id: 'pt7-m2-q12',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'A line has slope $4$. What is the slope of a line perpendicular to it?',
          choices: [
            { id: 'A', text: '$4$' },
            { id: 'B', text: '$-4$' },
            { id: 'C', text: '$\\frac{1}{4}$' },
            { id: 'D', text: '$-\\frac{1}{4}$' }
          ],
          correctAnswer: 'D',
          explanation: '**Choice D is correct.** Find the negative reciprocal of the given slope.\n\n**Step 1: Recall the perpendicular slope rule**\nPerpendicular lines have slopes that are negative reciprocals of each other:\n$m_1 \\times m_2 = -1$\n\n**Step 2: Calculate the perpendicular slope**\nGiven slope $= 4$\n$m_2 = -\\frac{1}{4}$\n\n**Verification:** $4 \\times \\left(-\\frac{1}{4}\\right) = -1$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($4$): Same slope means parallel, not perpendicular\n• Choice B ($-4$): Just the negative, not the negative reciprocal\n• Choice C ($\\frac{1}{4}$): Just the reciprocal, not the negative reciprocal\n\n**Key concept:** Perpendicular slopes: $m_2 = -\\frac{1}{m_1}$. Parallel slopes: $m_2 = m_1$.',
          skills: ["perpendicular-negative-reciprocal"]
        },
        {
          id: 'pt7-m2-q13',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The equation $3x + 2y = 18$ can be rewritten in slope-intercept form as:',
          choices: [
            { id: 'A', text: '$y = \\frac{3}{2}x + 9$' },
            { id: 'B', text: '$y = -\\frac{3}{2}x + 9$' },
            { id: 'C', text: '$y = \\frac{3}{2}x - 9$' },
            { id: 'D', text: '$y = -\\frac{2}{3}x + 6$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Solve the equation for $y$ to convert to slope-intercept form.\n\n**Step 1: Isolate the $y$ term**\n$3x + 2y = 18$\n$2y = -3x + 18$\n\n**Step 2: Divide by the coefficient of $y$**\n$y = \\frac{-3x + 18}{2} = -\\frac{3}{2}x + 9$\n\n**Why other choices are incorrect:**\n• Choice A ($y = \\frac{3}{2}x + 9$): Sign error — when moving $3x$ to the right side, it becomes $-3x$\n• Choice C ($y = \\frac{3}{2}x - 9$): Both the slope sign and intercept sign are wrong\n• Choice D ($y = -\\frac{2}{3}x + 6$): Used the reciprocal slope and incorrect intercept\n\n**Key concept:** To convert $ax + by = c$ to slope-intercept form $y = mx + b$: subtract the $x$ term and divide everything by the coefficient of $y$.',
          skills: ["slope-intercept-form"]
        },
        {
          id: 'pt7-m2-q14',
          type: 'fill-in',
          difficulty: 'easy',
          question: 'A store offers a $20\\%$ discount on an item originally priced at \\$85. What is the sale price in dollars?',
          correctAnswer: '68',
          explanation: '**The correct answer is $68$.** Calculate the sale price after applying the discount.\n\n**Step 1: Calculate the discount amount**\nDiscount $= 20\\%$ of \\$85 $= 0.20 \\times 85 = \\$17$\n\n**Step 2: Subtract the discount from the original price**\nSale price $= \\$85 - \\$17 = \\$68$\n\n**Alternative method:** Multiply by $(1 - 0.20) = 0.80$:\nSale price $= 0.80 \\times 85 = \\$68$\n\n**Key concept:** A $p\\%$ discount means you pay $(100 - p)\\%$ of the original price. So $20\\%$ off means paying $80\\%$ of the original.',
          skills: ["percent-change"]
        },
        {
          id: 'pt7-m2-q15',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Which expression is equivalent to $x^3 - 8$?',
          choices: [
            { id: 'A', text: '$(x - 2)(x^2 + 2x + 4)$' },
            { id: 'B', text: '$(x - 2)(x^2 - 2x + 4)$' },
            { id: 'C', text: '$(x + 2)(x^2 - 2x + 4)$' },
            { id: 'D', text: '$(x - 2)(x - 2)(x - 2)$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Factor using the difference of cubes formula.\n\n**Step 1: Recognize the pattern**\n$x^3 - 8 = x^3 - 2^3$ is a difference of cubes.\n\n**Step 2: Apply the formula**\n$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$\n\nWith $a = x$ and $b = 2$:\n$x^3 - 2^3 = (x - 2)(x^2 + 2x + 4)$\n\n**Verification:** Expand $(x - 2)(x^2 + 2x + 4)$:\n$= x^3 + 2x^2 + 4x - 2x^2 - 4x - 8 = x^3 - 8$ ✓\n\n**Why other choices are incorrect:**\n• Choice B ($(x-2)(x^2 - 2x + 4)$): Uses $-ab$ instead of $+ab$ in the second factor\n• Choice C ($(x+2)(x^2 - 2x + 4)$): This factors $x^3 + 8$ (sum of cubes), not $x^3 - 8$\n• Choice D ($(x-2)^3$): $(x-2)^3 = x^3 - 6x^2 + 12x - 8 \\neq x^3 - 8$\n\n**Key concept:** Difference of cubes: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$. Sum of cubes: $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$.',
          skills: ["finding-roots-factoring", "equivalent-expressions"]
        },
        {
          id: 'pt7-m2-q16',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'A rectangle has length $(x + 5)$ and width $(x - 2)$. If the area is $18$, what is the positive value of $x$?',
          correctAnswer: '4',
          explanation: '**The correct answer is $4$.** Set up and solve the quadratic equation from the area formula.\n\n**Step 1: Write the area equation**\nArea $= \\text{length} \\times \\text{width}$\n$(x + 5)(x - 2) = 18$\n\n**Step 2: Expand and rearrange**\n$x^2 + 3x - 10 = 18$\n$x^2 + 3x - 28 = 0$\n\n**Step 3: Factor the quadratic**\nFind two numbers that multiply to $-28$ and add to $3$: those are $7$ and $-4$.\n$(x + 7)(x - 4) = 0$\n$x = -7$ or $x = 4$\n\n**Step 4: Choose the valid answer**\nSince the problem asks for the positive value, $x = 4$.\n\n**Verification:** Length $= 4 + 5 = 9$, Width $= 4 - 2 = 2$, Area $= 9 \\times 2 = 18$ ✓\n\n**Key concept:** When area problems lead to quadratics, always check which solutions make sense in context (dimensions must be positive).',
          skills: ["finding-roots-factoring", "identify-quadratic"]
        },
        {
          id: 'pt7-m2-q17',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'A cylinder has radius $3$ inches and height $8$ inches. What is its volume in cubic inches?',
          choices: [
            { id: 'A', text: '$72\\pi$' },
            { id: 'B', text: '$24\\pi$' },
            { id: 'C', text: '$48\\pi$' },
            { id: 'D', text: '$144\\pi$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Apply the cylinder volume formula.\n\n**Step 1: Recall the formula**\n$$V = \\pi r^2 h$$\n\n**Step 2: Substitute the values**\n$r = 3$, $h = 8$\n$V = \\pi (3)^2 (8) = \\pi (9)(8) = 72\\pi$ cubic inches\n\n**Why other choices are incorrect:**\n• Choice B ($24\\pi$): Computed $\\pi(3)(8) = 24\\pi$ — forgot to square the radius\n• Choice C ($48\\pi$): Incorrect formula application\n• Choice D ($144\\pi$): May have doubled the radius to $6$: $\\pi(6)^2(4) = 144\\pi$\n\n**Key concept:** Volume of a cylinder: $V = \\pi r^2 h$. Remember to square the radius — a common error is using $r$ instead of $r^2$.',
          skills: ["volume-prism"]
        },
        {
          id: 'pt7-m2-q18',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'If $5^{2x} = 125$, what is the value of $x$?',
          correctAnswer: '1.5',
          explanation: '**The correct answer is $1.5$.** Rewrite both sides with the same base to solve the exponential equation.\n\n**Step 1: Express $125$ as a power of $5$**\n$125 = 5^3$\n\n**Step 2: Set the exponents equal**\n$5^{2x} = 5^3$\nSince the bases are equal: $2x = 3$\n\n**Step 3: Solve for $x$**\n$x = \\frac{3}{2} = 1.5$\n\n**Verification:** $5^{2(1.5)} = 5^3 = 125$ ✓\n\n**Key concept:** When $a^m = a^n$ (same base), the exponents must be equal: $m = n$. Always try to rewrite both sides with the same base.',
          skills: ["exponent-laws"]
        },
        {
          id: 'pt7-m2-q19',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'A quadratic function has vertex at $(3, -4)$ and passes through the point $(5, 0)$. Which could be the equation of this function?',
          choices: [
            { id: 'A', text: '$y = (x - 3)^2 - 4$' },
            { id: 'B', text: '$y = (x + 3)^2 - 4$' },
            { id: 'C', text: '$y = -(x - 3)^2 - 4$' },
            { id: 'D', text: '$y = 2(x - 3)^2 - 4$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Use vertex form and the given point to find the equation.\n\n**Step 1: Write the vertex form**\nWith vertex $(h, k) = (3, -4)$:\n$y = a(x - 3)^2 - 4$\n\n**Step 2: Find $a$ using the point $(5, 0)$**\nSubstitute $x = 5$ and $y = 0$:\n$0 = a(5 - 3)^2 - 4$\n$0 = 4a - 4$\n$a = 1$\n\n**Step 3: Write the final equation**\n$y = (x - 3)^2 - 4$\n\n**Verification:** At $x = 5$: $y = (5-3)^2 - 4 = 4 - 4 = 0$ ✓. At vertex $x = 3$: $y = 0 - 4 = -4$ ✓\n\n**Why other choices are incorrect:**\n• Choice B ($y = (x+3)^2 - 4$): Vertex would be at $(-3, -4)$, not $(3, -4)$\n• Choice C ($y = -(x-3)^2 - 4$): Opens downward and vertex is a maximum at $y = -4$ — the parabola never reaches $y = 0$\n• Choice D ($y = 2(x-3)^2 - 4$): At $x = 5$: $y = 2(4) - 4 = 4 \\neq 0$\n\n**Key concept:** Vertex form: $y = a(x - h)^2 + k$ where $(h, k)$ is the vertex. Use a known point to solve for $a$.',
          skills: ["vertex-form", "finding-function-from-conditions"]
        },
        {
          id: 'pt7-m2-q20',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Which expression is equivalent to $\\frac{4x^2 - 9}{2x + 3}$?',
          choices: [
            { id: 'A', text: '$2x + 3$' },
            { id: 'B', text: '$2x - 3$' },
            { id: 'C', text: '$4x - 3$' },
            { id: 'D', text: '$4x + 3$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Factor the numerator and simplify.\n\n**Step 1: Recognize the numerator as a difference of squares**\n$4x^2 - 9 = (2x)^2 - 3^2 = (2x + 3)(2x - 3)$\n\n**Step 2: Simplify the fraction**\n$\\frac{(2x + 3)(2x - 3)}{2x + 3} = 2x - 3$ (where $2x + 3 \\neq 0$)\n\n**Verification:** Let $x = 2$: $\\frac{4(4) - 9}{2(2) + 3} = \\frac{7}{7} = 1$. And $2(2) - 3 = 1$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($2x + 3$): This is the denominator, not the remaining factor after cancellation\n• Choice C ($4x - 3$): Does not result from any correct factoring of $4x^2 - 9$\n• Choice D ($4x + 3$): Does not result from cancelling common factors\n\n**Key concept:** To simplify rational expressions, factor numerator and denominator completely, then cancel common factors. Remember: $a^2 - b^2 = (a+b)(a-b)$.',
          skills: ["simplifying-rational-expressions", "difference-of-squares"]
        },
        {
          id: 'pt7-m2-q21',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The graph of $y = 3x^2 + bx + c$ is shown, where $b$ and $c$ are constants. What is the value of $bc$?',
          diagram: {
            type: 'parabola',
            params: {
              vertex: { h: 1, k: -6 },
              a: 3,
              xRange: [-2, 4],
              yRange: [-8, 6],
              showVertex: false,
              xTickInterval: 1,
              yTickInterval: 2,
              gridInterval: 1,
              label: 'y = 3x² + bx + c'
            }
          },
          correctAnswer: 18,
          explanation: '**The correct answer is 18.**\n\n**Step 1:** From the graph, the parabola has vertex at $(1, -6)$ and opens upward with $a = 3$.\n\nUsing vertex form: $y = 3(x - 1)^2 - 6 = 3(x^2 - 2x + 1) - 6 = 3x^2 - 6x + 3 - 6 = 3x^2 - 6x - 3$\n\n**Step 2:** Match with $y = 3x^2 + bx + c$:\n$b = -6$ and $c = -3$\n\n**Step 3:** $bc = (-6)(-3) = 18$\n\n**Verification:** $x$-intercepts at $x = 1 \\pm \\sqrt{2}$: $3(1 + \\sqrt{2})^2 - 6(1 + \\sqrt{2}) - 3 = 3(3 + 2\\sqrt{2}) - 6 - 6\\sqrt{2} - 3 = 9 + 6\\sqrt{2} - 9 - 6\\sqrt{2} = 0$ ✓',
          skills: ['quadratic-equations', 'vertex-form', 'graph-interpretation']
        },
        {
          id: 'pt7-m2-q22',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'The rational function $f$ is defined by an equation in the form $f(x) = \\frac{a}{x + b}$, where $a$ and $b$ are constants. The partial graph of $y = f(x)$ is shown. If $g(x) = f(x + 3)$, which equation could define function $g$?',
          diagram: {
            type: 'rationalFunction',
            params: {
              a: 5,
              b: 3,
              xMin: -10
            }
          },
          choices: [
            { id: 'A', text: '$g(x) = \\frac{5}{x}$' },
            { id: 'B', text: '$g(x) = \\frac{5}{x + 3}$' },
            { id: 'C', text: '$g(x) = \\frac{5}{x + 6}$' },
            { id: 'D', text: '$g(x) = \\frac{5(x + 3)}{x + 3}$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.**\n\n**Step 1:** From the graph, the vertical asymptote is at $x = -3$, so $b = 3$ and $f(x) = \\frac{a}{x + 3}$.\n\nThe graph passes through approximately $(-4, -5)$: $\\frac{a}{-4 + 3} = \\frac{a}{-1} = -5$, so $a = 5$.\n\nThus $f(x) = \\frac{5}{x + 3}$.\n\n**Step 2:** Find $g(x) = f(x + 3)$:\n$g(x) = f(x + 3) = \\frac{5}{(x + 3) + 3} = \\frac{5}{x + 6}$',
          skills: ['rational-functions', 'function-transformations']
        }
      ]
    }
  ]
};
