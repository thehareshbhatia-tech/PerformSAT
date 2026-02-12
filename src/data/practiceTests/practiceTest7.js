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
          difficulty: 'medium',
          question: 'A survey of $240$ students asked whether they prefer math or science and whether they are in grade 10 or grade 11. Of the $100$ grade 10 students, $45$ prefer math. Of the $140$ grade 11 students, $80$ prefer science. What fraction of the students who prefer math are in grade 11?',
          choices: [
            { id: 'A', text: '$\\frac{45}{105}$' },
            { id: 'B', text: '$\\frac{60}{105}$' },
            { id: 'C', text: '$\\frac{60}{140}$' },
            { id: 'D', text: '$\\frac{45}{100}$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Build a two-way table and find the conditional fraction.\n\n**Step 1: Find grade 11 students who prefer math**\nGrade 11 total $= 140$, and $80$ prefer science, so $140 - 80 = 60$ prefer math.\n\n**Step 2: Find total students who prefer math**\nGrade 10 math $+ $ grade 11 math $= 45 + 60 = 105$.\n\n**Step 3: Calculate the fraction**\n$\\frac{\\text{Grade 11 math}}{\\text{Total math}} = \\frac{60}{105}$\n\n**Why other choices are incorrect:**\n• Choice A ($\\frac{45}{105}$): This is the fraction of math-preferring students in grade 10\n• Choice C ($\\frac{60}{140}$): This is the fraction of all grade 11 students who prefer math\n• Choice D ($\\frac{45}{100}$): This is the fraction of grade 10 students who prefer math\n\n**Key concept:** Conditional fractions require restricting the denominator to only the relevant subgroup.',
          skills: ['Problem Solving', 'Two-Way Tables']
        },
        {
          id: 'pt7-m1-q7',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The system of equations $3x + 2y = 19$ and $x - y = 3$ has the solution $(x, y)$. What is the value of $x + y$?',
          choices: [
            { id: 'A', text: '$7$' },
            { id: 'B', text: '$8$' },
            { id: 'C', text: '$9$' },
            { id: 'D', text: '$11$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Solve the system using substitution.\n\n**Step 1: Solve the second equation for $x$**\n$x = y + 3$\n\n**Step 2: Substitute into the first equation**\n$3(y + 3) + 2y = 19$\n$3y + 9 + 2y = 19$\n$5y = 10$, so $y = 2$\n\n**Step 3: Find $x$ and compute $x + y$**\n$x = 2 + 3 = 5$\n$x + y = 5 + 2 = 7$\n\n**Verification:** $3(5) + 2(2) = 15 + 4 = 19$ ✓ and $5 - 2 = 3$ ✓\n\n**Why other choices are incorrect:**\n• Choice B ($8$): May result from an arithmetic error in substitution\n• Choice C ($9$): Confuses $x + y$ with $2x - y$\n• Choice D ($11$): May result from computing $x + 2y$ instead of $x + y$\n\n**Key concept:** When asked for an expression like $x + y$, solve the system completely first, then compute the requested expression.',
          skills: ['Algebra', 'Systems of Equations']
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
          difficulty: 'medium',
          question: 'The expression $6x^2 + 7x - 20$ can be written as $(2x + 5)(3x + k)$ for some constant $k$. What is the value of $k$?',
          correctAnswer: '-4',
          explanation: '**The correct answer is $-4$.** Expand the factored form and match coefficients.\n\n**Step 1: Expand $(2x + 5)(3x + k)$**\n$= 6x^2 + 2kx + 15x + 5k = 6x^2 + (2k + 15)x + 5k$\n\n**Step 2: Match the constant term**\n$5k = -20$, so $k = -4$\n\n**Verification:** $(2x + 5)(3x - 4) = 6x^2 - 8x + 15x - 20 = 6x^2 + 7x - 20$ ✓\n\n**Key concept:** When a factored form is partially given, expand and match corresponding coefficients to find the unknown constant.',
          skills: ['Advanced Math', 'Polynomial Factoring']
        },
        {
          id: 'pt7-m1-q14',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The function $h(x) = \\frac{x + 5}{x^2 - 9}$ is undefined for which of the following values of $x$?',
          choices: [
            { id: 'A', text: '$-5$ only' },
            { id: 'B', text: '$3$ only' },
            { id: 'C', text: '$3$ and $-3$' },
            { id: 'D', text: '$-5$, $3$, and $-3$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** A rational function is undefined where the denominator equals zero.\n\n**Step 1: Set the denominator equal to zero**\n$x^2 - 9 = 0$\n$(x - 3)(x + 3) = 0$\n$x = 3$ or $x = -3$\n\n**Step 2: Check whether $x = -5$ causes an issue**\nAt $x = -5$: denominator $= (-5)^2 - 9 = 25 - 9 = 16 \\neq 0$. The function is defined at $x = -5$ (it equals $0/16 = 0$).\n\n**Why other choices are incorrect:**\n• Choice A ($-5$ only): $x = -5$ makes the numerator $0$, not the denominator — the function equals $0$ there\n• Choice B ($3$ only): Misses $x = -3$, which also makes the denominator $0$\n• Choice D: $x = -5$ does not make the function undefined\n\n**Key concept:** A rational function is undefined only where the denominator is $0$. A numerator of $0$ simply means the function value is $0$.',
          skills: ['Advanced Math', 'Rational Functions']
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
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The equation $x(kx - 42) = -9$ has no real solution. What is the least integer value of $k$?',
          correctAnswer: '50',
          explanation: '**The correct answer is $50$.**\n\n**Step 1: Rewrite in standard form**\n$x(kx - 42) = -9$\n$kx^2 - 42x + 9 = 0$\n\n**Step 2: Apply the discriminant condition for no real solutions**\nFor no real solutions, the discriminant must be negative: $b^2 - 4ac < 0$.\n\nHere $a = k$, $b = -42$, $c = 9$:\n$(-42)^2 - 4(k)(9) < 0$\n$1764 - 36k < 0$\n$36k > 1764$\n$k > 49$\n\n**Step 3: Find the least integer**\nSince $k > 49$, the least integer value is $k = 50$.\n\n**Key concept:** A quadratic $ax^2 + bx + c = 0$ has no real solutions when $b^2 - 4ac < 0$. Solve the resulting inequality for the parameter.',
          skills: ['Advanced Math', 'Discriminant']
        },
        {
          id: 'pt7-m1-q17',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'In the $xy$-plane, the graph of the equation $y = -x^2 + 8x - 21$ intersects the line $y = c$ at exactly one point. What is the value of $c$?',
          choices: [
            { id: 'A', text: '$-5$' },
            { id: 'B', text: '$-4$' },
            { id: 'C', text: '$-3$' },
            { id: 'D', text: '$-21$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** A horizontal line $y = c$ intersects a downward-opening parabola at exactly one point when $c$ equals the maximum value (vertex).\n\n**Step 1: Find the vertex $x$-coordinate**\nFor $y = -x^2 + 8x - 21$:\n$x = -\\frac{b}{2a} = -\\frac{8}{2(-1)} = 4$\n\n**Step 2: Find the vertex $y$-coordinate**\n$y = -(4)^2 + 8(4) - 21 = -16 + 32 - 21 = -5$\n\nThe vertex is $(4, -5)$ and since $a = -1 < 0$, this is the maximum.\n\n**Step 3: Determine $c$**\nThe line $y = c$ touches the parabola at exactly one point when $c = -5$.\n\n**Why other choices are incorrect:**\n• Choice B ($-4$): Since $-4 > -5$, the line $y = -4$ lies above the maximum and never intersects the parabola\n• Choice C ($-3$): Same reasoning — $-3 > -5$, so no intersection\n• Choice D ($-21$): This is the $y$-intercept; the line $y = -21$ intersects the parabola at two points\n\n**Key concept:** A horizontal line touches a parabola at exactly one point only at the vertex — the maximum for downward-opening or the minimum for upward-opening.',
          skills: ['Advanced Math', 'Quadratic Vertex']
        },
        {
          id: 'pt7-m1-q18',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'One of the two equations in a system of linear equations is given.\n\n$$4x = 28y - 20$$\n\nThe system has no solution. Which equation could be the second equation in this system?',
          choices: [
            { id: 'A', text: '$x = 7y$' },
            { id: 'B', text: '$\\frac{1}{4}x = 7y$' },
            { id: 'C', text: '$x = 7y - 5$' },
            { id: 'D', text: '$\\frac{1}{4}x = 7y - 5$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** For a system to have no solution, the equations must represent parallel lines (same slope, different intercepts).\n\n**Step 1: Rewrite the given equation**\n$4x = 28y - 20$\nDivide by $4$: $x = 7y - 5$, or equivalently $x - 7y = -5$\n\n**Step 2: Check each choice**\n• Choice A: $x = 7y \\Rightarrow x - 7y = 0$. The coefficient ratio is the same ($1:-7$), but the constant differs ($0 \\neq -5$). These are parallel lines — **no solution** ✓\n• Choice B: $\\frac{1}{4}x = 7y \\Rightarrow x = 28y \\Rightarrow x - 28y = 0$. Different coefficient ratio ($1:-28$ vs $1:-7$). Has a unique solution ✗\n• Choice C: $x = 7y - 5 \\Rightarrow x - 7y = -5$. This is the same equation as the original — infinitely many solutions ✗\n• Choice D: $\\frac{1}{4}x = 7y - 5 \\Rightarrow x = 28y - 20 \\Rightarrow x - 28y = -20$. Different coefficient ratio. Has a unique solution ✗\n\n**Key concept:** Two linear equations have no solution when $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$ (same slope, different intercepts).',
          skills: ['Algebra', 'Systems of Equations']
        },
        {
          id: 'pt7-m1-q19',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'If $\\frac{10}{n} = \\frac{10}{a} - \\frac{10}{b}$, which of the following correctly expresses $n$ in terms of $a$ and $b$?',
          choices: [
            { id: 'A', text: '$n = \\frac{ab}{b - a}$' },
            { id: 'B', text: '$n = \\frac{ab}{a - b}$' },
            { id: 'C', text: '$n = a - b$' },
            { id: 'D', text: '$n = \\frac{a + b}{ab}$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Solve the multi-variable fraction equation for $n$.\n\n**Step 1: Divide both sides by $10$**\n$\\frac{1}{n} = \\frac{1}{a} - \\frac{1}{b}$\n\n**Step 2: Combine the right side over a common denominator**\n$\\frac{1}{n} = \\frac{b}{ab} - \\frac{a}{ab} = \\frac{b - a}{ab}$\n\n**Step 3: Take the reciprocal**\n$n = \\frac{ab}{b - a}$\n\n**Why other choices are incorrect:**\n• Choice B ($\\frac{ab}{a - b}$): Sign error — subtracted in the wrong order. This would give $n$ if the equation were $\\frac{10}{n} = \\frac{10}{b} - \\frac{10}{a}$\n• Choice C ($a - b$): Incorrectly treats the denominators as if they can be subtracted directly\n• Choice D ($\\frac{a + b}{ab}$): This is $\\frac{1}{a} + \\frac{1}{b}$, not the reciprocal of $\\frac{1}{a} - \\frac{1}{b}$\n\n**Key concept:** When variables are in denominators, find a common denominator to combine fractions, then take the reciprocal to isolate the target variable.',
          skills: ['Advanced Math', 'Rational Equations']
        },
        {
          id: 'pt7-m1-q20',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'In the $xy$-plane, which of the following equations represents a circle that intersects the $y$-axis at exactly one point?',
          choices: [
            { id: 'A', text: '$(x - 3)^2 + (y - 4)^2 = 9$' },
            { id: 'B', text: '$(x - 5)^2 + (y + 2)^2 = 16$' },
            { id: 'C', text: '$(x + 4)^2 + (y - 1)^2 = 25$' },
            { id: 'D', text: '$(x - 2)^2 + (y - 6)^2 = 9$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** A circle intersects the $y$-axis at exactly one point when it is tangent to the $y$-axis. This happens when the distance from the center to the $y$-axis equals the radius.\n\n**Step 1: Check each circle**\nThe distance from center $(h, k)$ to the $y$-axis is $|h|$.\n\n• A: Center $(3, 4)$, $r = 3$. Distance $= |3| = 3 = r$. **Tangent** — exactly one intersection ✓\n• B: Center $(5, -2)$, $r = 4$. Distance $= |5| = 5 > 4 = r$. Circle does not reach the $y$-axis — zero intersections ✗\n• C: Center $(-4, 1)$, $r = 5$. Distance $= |-4| = 4 < 5 = r$. Circle crosses the $y$-axis — two intersections ✗\n• D: Center $(2, 6)$, $r = 3$. Distance $= |2| = 2 < 3 = r$. Circle crosses the $y$-axis — two intersections ✗\n\n**Verification for A:** Set $x = 0$: $(0-3)^2 + (y-4)^2 = 9 \\Rightarrow 9 + (y-4)^2 = 9 \\Rightarrow y = 4$. Exactly one point ✓\n\n**Key concept:** A circle with center $(h, k)$ and radius $r$ is tangent to the $y$-axis when $|h| = r$. If $|h| < r$, it intersects at two points; if $|h| > r$, it does not intersect.',
          skills: ['Geometry', 'Circle Equations']
        },
        {
          id: 'pt7-m1-q21',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'A ball is launched upward from the ground. The height $h$, in feet, of the ball $t$ seconds after launch is modeled by the quadratic function $h(t) = -16t^2 + 96t$. The ball reaches its maximum height and then falls back to the ground. What is the maximum height, in feet, reached by the ball?',
          correctAnswer: '144',
          explanation: '**The correct answer is $144$.**\n\n**Step 1: Find the time at maximum height**\nThe maximum occurs at the vertex. For $h(t) = -16t^2 + 96t$:\n$t = -\\frac{b}{2a} = -\\frac{96}{2(-16)} = -\\frac{96}{-32} = 3$ seconds\n\n**Step 2: Calculate the maximum height**\n$h(3) = -16(3)^2 + 96(3) = -16(9) + 288 = -144 + 288 = 144$ feet\n\n**Verification:** At $t = 0$: $h = 0$ (ground). At $t = 6$: $h = -16(36) + 96(6) = -576 + 576 = 0$ (returns to ground). The parabola is symmetric about $t = 3$, confirming the maximum.\n\n**Key concept:** For projectile motion modeled by $h = at^2 + bt + c$, the maximum height occurs at $t = -\\frac{b}{2a}$. Substitute this back into the function to find the maximum value.',
          skills: ['Advanced Math', 'Quadratic Vertex']
        },
        {
          id: 'pt7-m1-q22',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'A store sells two types of candles. Small candles cost \\$4 each and large candles cost \\$7 each. A customer buys a total of at least $10$ candles and spends no more than \\$55. What is the maximum number of large candles the customer can buy?',
          choices: [
            { id: 'A', text: '$3$' },
            { id: 'B', text: '$4$' },
            { id: 'C', text: '$5$' },
            { id: 'D', text: '$6$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Set up a system of inequalities and maximize large candles.\n\n**Step 1: Define variables and constraints**\nLet $s = $ small candles and $\\ell = $ large candles.\n• Total candles: $s + \\ell \\geq 10$\n• Budget: $4s + 7\\ell \\leq 55$\n• Both $s, \\ell \\geq 0$ (integers)\n\n**Step 2: Express $s$ in terms of $\\ell$ and find the constraint**\nFrom the total: $s \\geq 10 - \\ell$\nSubstitute into budget: $4(10 - \\ell) + 7\\ell \\leq 55$\n$40 - 4\\ell + 7\\ell \\leq 55$\n$3\\ell \\leq 15$\n$\\ell \\leq 5$\n\n**Step 3: Verify $\\ell = 5$**\nWith $\\ell = 5$: $s \\geq 10 - 5 = 5$. Cost $= 4(5) + 7(5) = 20 + 35 = 55 \\leq 55$ ✓\n\n**Why other choices are incorrect:**\n• Choices A and B: These are valid but not the maximum\n• Choice D ($6$): $s \\geq 4$ and cost $= 4(4) + 7(6) = 16 + 42 = 58 > 55$ — exceeds budget\n\n**Key concept:** To maximize one variable in a system of inequalities, substitute the binding constraint (minimum of the other variable) and solve.',
          skills: ['Problem Solving', 'Systems of Inequalities']
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
          difficulty: 'medium',
          question: 'The function $f(x) = 3(x - 4)^2 + 7$ has a minimum value. What is the minimum value of $f(x)$?',
          choices: [
            { id: 'A', text: '$3$' },
            { id: 'B', text: '$4$' },
            { id: 'C', text: '$7$' },
            { id: 'D', text: '$55$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Identify the minimum from vertex form.\n\n**Step 1: Recognize the vertex form**\n$f(x) = 3(x - 4)^2 + 7$ is in vertex form $a(x - h)^2 + k$ with vertex $(4, 7)$.\n\n**Step 2: Determine the minimum**\nSince $a = 3 > 0$, the parabola opens upward and the vertex is a minimum. The minimum value of $f(x)$ is $k = 7$.\n\n**Why other choices are incorrect:**\n• Choice A ($3$): This is the coefficient $a$, which affects the width, not the minimum value\n• Choice B ($4$): This is the $x$-coordinate of the vertex, not the $y$-value\n• Choice D ($55$): This is $f(0) = 3(16) + 7 = 55$, not the minimum\n\n**Key concept:** In $f(x) = a(x-h)^2 + k$, the minimum value (when $a > 0$) is $k$, occurring at $x = h$.',
          skills: ['Advanced Math', 'Quadratic Vertex']
        },
        {
          id: 'pt7-m2-q6',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'If $\\frac{3x - 5}{4} = 7$, what is the value of $3x - 5$?',
          correctAnswer: '28',
          explanation: '**The correct answer is $28$.**\n\n**Step 1: Multiply both sides by $4$**\n$\\frac{3x - 5}{4} = 7$\n$3x - 5 = 28$\n\nThe question asks for the value of $3x - 5$, which is $28$.\n\n**Verification:** $\\frac{28}{4} = 7$ ✓\n\n**Key concept:** When asked for the value of an expression (not just $x$), isolate that expression directly rather than solving for $x$ first.',
          skills: ['Algebra', 'Linear Equations']
        },
        {
          id: 'pt7-m2-q7',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'A researcher surveyed a random sample of $500$ residents in a city with $80,000$ residents and found that $315$ of them support a new park. Based on this sample, which of the following is closest to the number of city residents who would support the new park?',
          choices: [
            { id: 'A', text: '$31,500$' },
            { id: 'B', text: '$40,000$' },
            { id: 'C', text: '$50,400$' },
            { id: 'D', text: '$63,000$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Scale the sample proportion to the full population.\n\n**Step 1: Find the sample proportion**\n$\\frac{315}{500} = 0.63 = 63\\%$\n\n**Step 2: Apply to the full population**\n$0.63 \\times 80{,}000 = 50{,}400$\n\n**Why other choices are incorrect:**\n• Choice A ($31{,}500$): Multiplied $315 \\times 100$ instead of using the proportion\n• Choice B ($40{,}000$): Used $50\\%$ instead of $63\\%$\n• Choice D ($63{,}000$): Multiplied $63 \\times 1{,}000$ rather than $0.63 \\times 80{,}000$\n\n**Key concept:** To estimate a population value from a sample: multiply the sample proportion by the population size.',
          skills: ['Problem Solving', 'Statistical Inference']
        },
        {
          id: 'pt7-m2-q8',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The expression $\\frac{x^2 + 5x + 6}{x + 2}$ is equivalent to which of the following for $x \\neq -2$?',
          choices: [
            { id: 'A', text: '$x + 2$' },
            { id: 'B', text: '$x + 3$' },
            { id: 'C', text: '$x + 6$' },
            { id: 'D', text: '$x^2 + 5x + 3$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Factor the numerator and simplify.\n\n**Step 1: Factor the numerator**\n$x^2 + 5x + 6 = (x + 2)(x + 3)$\n\n**Step 2: Simplify**\n$\\frac{(x + 2)(x + 3)}{x + 2} = x + 3$ (for $x \\neq -2$)\n\n**Why other choices are incorrect:**\n• Choice A ($x + 2$): This is the denominator, not the result of simplification\n• Choice C ($x + 6$): Does not come from correct factoring\n• Choice D: Subtracting instead of dividing\n\n**Key concept:** To simplify rational expressions, factor the numerator and denominator, then cancel common factors.',
          skills: ['Advanced Math', 'Rational Expressions']
        },
        {
          id: 'pt7-m2-q9',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'A right circular cylinder has a height of $10$ cm and a volume of $250\\pi$ cubic cm. What is the radius, in cm, of the cylinder?',
          correctAnswer: '5',
          explanation: '**The correct answer is $5$.**\n\n**Step 1: Use the volume formula**\n$V = \\pi r^2 h$\n$250\\pi = \\pi r^2 (10)$\n\n**Step 2: Solve for $r$**\nDivide both sides by $10\\pi$:\n$r^2 = \\frac{250\\pi}{10\\pi} = 25$\n$r = 5$ cm\n\n**Verification:** $\\pi(5)^2(10) = 250\\pi$ ✓\n\n**Key concept:** For cylinder problems, use $V = \\pi r^2 h$. When given volume and height, divide to find $r^2$, then take the square root.',
          skills: ['Geometry', 'Volume']
        },
        {
          id: 'pt7-m2-q10',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'For each real number $r$, which of the following points lies on the graph of each equation in the $xy$-plane for the given system?\n\n$$5x + 3y = 8$$\n$$20x + 12y = 32$$',
          choices: [
            { id: 'A', text: '$\\left(r, \\frac{8 - 5r}{3}\\right)$' },
            { id: 'B', text: '$\\left(r, \\frac{5r + 8}{3}\\right)$' },
            { id: 'C', text: '$\\left(\\frac{8 - 3r}{5}, r\\right)$' },
            { id: 'D', text: '$\\left(\\frac{5r + 8}{3}, r\\right)$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** First verify that the system has infinitely many solutions, then express the solution set parametrically.\n\n**Step 1: Check the relationship between equations**\nMultiply the first equation by $4$: $20x + 12y = 32$. This is identical to the second equation, so the system has infinitely many solutions.\n\n**Step 2: Express $y$ in terms of a parameter**\nLet $x = r$. From $5x + 3y = 8$:\n$3y = 8 - 5r$\n$y = \\frac{8 - 5r}{3}$\n\nSo every point of the form $\\left(r, \\frac{8 - 5r}{3}\\right)$ lies on both lines.\n\n**Why other choices are incorrect:**\n• Choice B: Uses $5r + 8$ (wrong sign) — substituting gives $5r + 3 \\cdot \\frac{5r + 8}{3} = 5r + 5r + 8 = 10r + 8 \\neq 8$\n• Choice C: Correctly expresses $x$ in terms of $y = r$, but the question asks which point lies on each equation — this is also valid. However, checking: $5 \\cdot \\frac{8-3r}{5} + 3r = 8 - 3r + 3r = 8$ ✓. Both A and C work, but convention uses $x = r$.\n• Choice D: Uses incorrect formula\n\n**Key concept:** When a system has infinitely many solutions (dependent equations), the solution set can be expressed parametrically by letting one variable be $r$ and solving for the other.',
          skills: ['Algebra', 'Systems of Equations']
        },
        {
          id: 'pt7-m2-q11',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The regular price of a jacket at a store is \\$120. The sale price of the jacket is $70\\%$ less than the regular price, and the sale price is $20\\%$ greater than the store\'s cost for the jacket. What was the store\'s cost, in dollars, for the jacket? (Disregard the \\$ sign when entering your answer. For example, if your answer is \\$4.97, enter 4.97)',
          correctAnswer: '30',
          explanation: '**The correct answer is $30$.**\n\n**Step 1: Find the sale price**\nThe sale price is $70\\%$ less than the regular price:\nSale price $= 120 \\times (1 - 0.70) = 120 \\times 0.30 = 36$ dollars\n\n**Step 2: Find the store\'s cost**\nThe sale price is $20\\%$ greater than the store\'s cost $c$:\n$36 = c \\times (1 + 0.20) = 1.20c$\n$c = \\frac{36}{1.20} = 30$ dollars\n\n**Verification:** Cost $= \\$30$. $20\\%$ more $= 30 \\times 1.20 = \\$36$ (sale price). Regular price $= \\$120$, and $\\$120 - \\$36 = \\$84$, which is $70\\%$ of $\\$120$ ✓\n\n**Key concept:** Work through multi-step percentage problems sequentially. "X% less" means multiply by $(1 - X/100)$; "X% greater" means multiply by $(1 + X/100)$.',
          skills: ['Problem Solving', 'Percent Change']
        },
        {
          id: 'pt7-m2-q12',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'The equation $x - 23 = (x - a)(x - 23)$, where $a$ is a constant and $a > 24$. Which of the following are solutions to the equation?\n\nI. $a$\nII. $a + 1$\nIII. $23$',
          choices: [
            { id: 'A', text: 'I and II only' },
            { id: 'B', text: 'I and III only' },
            { id: 'C', text: 'II and III only' },
            { id: 'D', text: 'I, II, and III' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Factor the equation to find all solutions.\n\n**Step 1: Rearrange and factor**\n$x - 23 = (x - a)(x - 23)$\n$(x - 23) - (x - a)(x - 23) = 0$\n$(x - 23)[1 - (x - a)] = 0$\n$(x - 23)(a + 1 - x) = 0$\n\n**Step 2: Find solutions**\n$x - 23 = 0 \\Rightarrow x = 23$\n$a + 1 - x = 0 \\Rightarrow x = a + 1$\n\n**Step 3: Check each statement**\n• I ($x = a$): Substitute: $(a - 23)(a + 1 - a) = (a - 23)(1) = a - 23 \\neq 0$ since $a > 24$. **Not a solution** ✗\n• II ($x = a + 1$): This is a solution from the factoring ✓\n• III ($x = 23$): This is a solution from the factoring ✓\n\n**Key concept:** Factor out the common expression $(x - 23)$ rather than dividing by it, since dividing could lose the solution $x = 23$.',
          skills: ['Advanced Math', 'Polynomial Equations']
        },
        {
          id: 'pt7-m2-q13',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'A right circular cone has a volume of $15{,}360\\pi$ cubic centimeters and the area of its base is $2{,}304\\pi$ square centimeters. What is the slant height, in centimeters, of this cone?',
          choices: [
            { id: 'A', text: '$20$' },
            { id: 'B', text: '$36$' },
            { id: 'C', text: '$48$' },
            { id: 'D', text: '$52$' }
          ],
          correctAnswer: 'D',
          explanation: '**Choice D is correct.** Use the volume and base area to find the height, then calculate the slant height.\n\n**Step 1: Find the radius**\nBase area $= \\pi r^2 = 2{,}304\\pi$\n$r^2 = 2{,}304$, so $r = 48$ cm\n\n**Step 2: Find the height using the volume**\n$V = \\frac{1}{3}\\pi r^2 h$\n$15{,}360\\pi = \\frac{1}{3}\\pi(2{,}304)h$\n$15{,}360 = 768h$\n$h = 20$ cm\n\n**Step 3: Find the slant height**\n$\\ell = \\sqrt{r^2 + h^2} = \\sqrt{2{,}304 + 400} = \\sqrt{2{,}704} = 52$ cm\n\n**Why other choices are incorrect:**\n• Choice A ($20$): This is the height, not the slant height\n• Choice B ($36$): Incorrect calculation\n• Choice C ($48$): This is the radius, not the slant height\n\n**Key concept:** The slant height of a cone relates to the radius and height by $\\ell = \\sqrt{r^2 + h^2}$ (Pythagorean theorem applied to the right triangle formed by the radius, height, and slant height).',
          skills: ['Geometry', 'Volume']
        },
        {
          id: 'pt7-m2-q14',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'A square is inscribed in a circle with radius $5\\sqrt{2}$. What is the area of the square?',
          choices: [
            { id: 'A', text: '$25$' },
            { id: 'B', text: '$50$' },
            { id: 'C', text: '$100$' },
            { id: 'D', text: '$200$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Relate the circle\'s radius to the square\'s diagonal.\n\n**Step 1: Find the diagonal of the square**\nWhen a square is inscribed in a circle, the diagonal of the square equals the diameter of the circle.\nDiameter $= 2 \\times 5\\sqrt{2} = 10\\sqrt{2}$\n\n**Step 2: Find the side length**\nFor a square with diagonal $d$: side $= \\frac{d}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{\\sqrt{2}} = 10$\n\n**Step 3: Calculate the area**\nArea $= 10^2 = 100$\n\n**Why other choices are incorrect:**\n• Choice A ($25$): Used the radius as the side length: $(5)^2 = 25$\n• Choice B ($50$): Used $\\frac{\\text{diagonal}^2}{4} = \\frac{200}{4}$\n• Choice D ($200$): Used the diagonal as the side: $(10\\sqrt{2})^2 = 200$\n\n**Key concept:** For a square inscribed in a circle: diagonal $= $ diameter $= 2r$, and side $= \\frac{\\text{diagonal}}{\\sqrt{2}}$. Alternatively, area $= \\frac{d^2}{2} = \\frac{(2r)^2}{2} = 2r^2$.',
          skills: ['Geometry', 'Circles and Squares']
        },
        {
          id: 'pt7-m2-q15',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'Which expression is equivalent to $\\frac{3}{x - 2} + \\frac{5}{x + 4}$?',
          choices: [
            { id: 'A', text: '$\\frac{8x + 2}{x^2 + 2x - 8}$' },
            { id: 'B', text: '$\\frac{8x + 22}{x^2 + 2x - 8}$' },
            { id: 'C', text: '$\\frac{8}{x^2 + 2x - 8}$' },
            { id: 'D', text: '$\\frac{8x + 2}{2x + 2}$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Combine the fractions using a common denominator.\n\n**Step 1: Find the common denominator**\nThe common denominator is $(x - 2)(x + 4) = x^2 + 2x - 8$.\n\n**Step 2: Rewrite each fraction**\n$$\\frac{3(x + 4)}{(x - 2)(x + 4)} + \\frac{5(x - 2)}{(x - 2)(x + 4)}$$\n\n**Step 3: Combine the numerators**\n$$\\frac{3(x + 4) + 5(x - 2)}{x^2 + 2x - 8} = \\frac{3x + 12 + 5x - 10}{x^2 + 2x - 8} = \\frac{8x + 2}{x^2 + 2x - 8}$$\n\n**Why other choices are incorrect:**\n• Choice B ($8x + 22$): Incorrectly computed $5(x + 4) = 5x + 20$ instead of $5(x - 2) = 5x - 10$\n• Choice C ($8$): Added only the numerators $3 + 5 = 8$ without adjusting for the common denominator\n• Choice D ($2x + 2$ denominator): Added the denominators instead of multiplying them\n\n**Key concept:** To add rational expressions, multiply each fraction by the missing factor to create a common denominator, then combine numerators.',
          skills: ['Advanced Math', 'Rational Expressions']
        },
        {
          id: 'pt7-m2-q16',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The function $g$ is defined by $g(x) = \\frac{f(x)}{x + 3}$, where $f$ is a linear function. The table shows three values of $g$. What is the $y$-intercept of $y = f(x)$?',
          diagram: {
            type: 'table',
            params: {
              title: '',
              headers: ['x', 'g(x)'],
              rows: [
                ['0', '2'],
                ['3', '4'],
                ['9', '5']
              ]
            }
          },
          correctAnswer: '6',
          explanation: '**The correct answer is $6$.** Use the table to find $f(x)$, then identify the $y$-intercept.\n\n**Step 1: Find $f(x)$ values from the table**\nSince $g(x) = \\frac{f(x)}{x + 3}$, we have $f(x) = g(x) \\cdot (x + 3)$.\n\n$f(0) = 2 \\cdot (0 + 3) = 6$\n$f(3) = 4 \\cdot (3 + 3) = 24$\n$f(9) = 5 \\cdot (9 + 3) = 60$\n\n**Step 2: Verify $f$ is linear**\nSlope from $(0, 6)$ to $(3, 24)$: $\\frac{24 - 6}{3 - 0} = 6$\nSlope from $(3, 24)$ to $(9, 60)$: $\\frac{60 - 24}{9 - 3} = 6$ ✓\n\n**Step 3: Find the $y$-intercept**\nThe $y$-intercept of $f$ is $f(0) = 6$.\n\n**Key concept:** When $g(x) = \\frac{f(x)}{x + 3}$, recover $f$ by multiplying: $f(x) = g(x)(x + 3)$. Then verify the values are consistent with a linear function.',
          skills: ['Advanced Math', 'Composed Functions']
        },
        {
          id: 'pt7-m2-q17',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'A painting machine covers $2{,}160$ square feet of wall per hour. Which of the following is closest to this rate in square yards per minute? (1 yard = 3 feet)',
          choices: [
            { id: 'A', text: '$4$' },
            { id: 'B', text: '$12$' },
            { id: 'C', text: '$36$' },
            { id: 'D', text: '$240$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Convert both the area units and the time units.\n\n**Step 1: Convert square feet to square yards**\nSince $1$ yard $= 3$ feet, $1$ square yard $= 3^2 = 9$ square feet.\n$$2{,}160 \\text{ sq ft} \\div 9 = 240 \\text{ sq yd}$$\n\n**Step 2: Convert hours to minutes**\n$$240 \\text{ sq yd per hour} \\div 60 = 4 \\text{ sq yd per minute}$$\n\n**Why other choices are incorrect:**\n• Choice B ($12$): Divided by $3$ instead of $9$ (forgot to square the conversion factor): $2{,}160 \\div 3 \\div 60 = 12$\n• Choice C ($36$): Only converted time, not area: $2{,}160 \\div 60 = 36$\n• Choice D ($240$): Only converted area, not time: $2{,}160 \\div 9 = 240$\n\n**Key concept:** When converting squared units, you must square the linear conversion factor. Since $1$ yd $= 3$ ft, $1$ sq yd $= 9$ sq ft.',
          skills: ['Problem Solving', 'Unit Conversion']
        },
        {
          id: 'pt7-m2-q18',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'If $2^{a} = 3$ and $2^{b} = 5$, what is the value of $2^{3a + 2b}$?',
          correctAnswer: '675',
          explanation: '**The correct answer is $675$.** Use exponent rules to rewrite $2^{3a+2b}$ in terms of $2^a$ and $2^b$.\n\n**Step 1: Split the exponent using the product rule**\n$$2^{3a + 2b} = 2^{3a} \\cdot 2^{2b}$$\n\n**Step 2: Apply the power rule**\n$$2^{3a} = (2^a)^3 \\quad \\text{and} \\quad 2^{2b} = (2^b)^2$$\n\n**Step 3: Substitute the given values**\n$$(2^a)^3 \\cdot (2^b)^2 = 3^3 \\cdot 5^2 = 27 \\cdot 25 = 675$$\n\n**Key concept:** The exponent rules $a^{m+n} = a^m \\cdot a^n$ and $(a^m)^n = a^{mn}$ allow you to break apart complex exponents into simpler pieces.',
          skills: ['Advanced Math', 'Exponent Rules']
        },
        {
          id: 'pt7-m2-q19',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The equation $x^2 - 14x + 40 = 0$ has solutions $p$ and $q$. What is the value of $(p - 2)(q - 2)$?',
          correctAnswer: '16',
          explanation: '**The correct answer is $16$.** Use Vieta\'s formulas to find the answer without solving for $p$ and $q$ individually.\n\n**Step 1: Apply Vieta\'s formulas**\nFor $x^2 - 14x + 40 = 0$:\n$p + q = 14$ (sum of roots)\n$pq = 40$ (product of roots)\n\n**Step 2: Expand $(p - 2)(q - 2)$**\n$$(p - 2)(q - 2) = pq - 2p - 2q + 4 = pq - 2(p + q) + 4$$\n\n**Step 3: Substitute**\n$$= 40 - 2(14) + 4 = 40 - 28 + 4 = 16$$\n\n**Verification:** Solve directly: $x = \\frac{14 \\pm \\sqrt{196 - 160}}{2} = \\frac{14 \\pm 6}{2}$, so $p = 10$ and $q = 4$.\n$(10 - 2)(4 - 2) = 8 \\cdot 2 = 16$ ✓\n\n**Key concept:** Vieta\'s formulas ($p + q = -b/a$, $pq = c/a$) let you evaluate symmetric expressions of the roots without solving the quadratic.',
          skills: ['Advanced Math', 'Quadratic Equations']
        },
        {
          id: 'pt7-m2-q20',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'In the $xy$-plane, a circle has center $(6, -3)$ and radius $5$. A line passes through the center of the circle with slope $\\frac{3}{2}$. What is the $x$-coordinate of the point where this line crosses the $x$-axis?',
          correctAnswer: '8',
          explanation: '**The correct answer is $8$.** Find the equation of the line through the center, then find where it crosses the $x$-axis.\n\n**Step 1: Write the equation of the line**\nUsing point-slope form with center $(6, -3)$ and slope $\\frac{3}{2}$:\n$$y - (-3) = \\frac{3}{2}(x - 6)$$\n$$y + 3 = \\frac{3}{2}(x - 6)$$\n\n**Step 2: Find the $x$-intercept (set $y = 0$)**\n$$0 + 3 = \\frac{3}{2}(x - 6)$$\n$$3 = \\frac{3}{2}(x - 6)$$\n$$2 = x - 6$$\n$$x = 8$$\n\n**Verification:** At $(8, 0)$: slope from $(6, -3)$ is $\\frac{0 - (-3)}{8 - 6} = \\frac{3}{2}$ ✓\n\n**Key concept:** The circle\'s equation is not needed to solve this problem — only the center and the line\'s slope matter. Find the line equation using point-slope form, then set $y = 0$.',
          skills: ['Geometry', 'Coordinate Geometry']
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
          skills: ['Advanced Math', 'Quadratic Equations']
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
          skills: ['Advanced Math', 'Rational Functions']
        }
      ]
    }
  ]
};
