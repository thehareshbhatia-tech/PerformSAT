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
          question: 'If $5x - 15 = 30$ and $y = 2(x - 3) + 7$, what is the value of $y$?',
          choices: [
            { id: 'A', text: '$19$' },
            { id: 'B', text: '$25$' },
            { id: 'C', text: '$12$' },
            { id: 'D', text: '$15$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: "Find the Expression, Then Substitute"** -- Shows up 1-2 times per test. College Board chains two steps: first isolate a sub-expression, then feed it into a second equation.\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** Notice $5x - 15 = 5(x - 3) = 30$, so $x - 3 = 6$. Substitute into $y$: $y = 2(6) + 7 = 19$.\n\n**The Full Solution:**\nStep 1 -- Solve for the sub-expression:\n$5x - 15 = 30$\nFactor: $5(x - 3) = 30$\nDivide both sides by $5$: $x - 3 = 6$\n\nStep 2 -- Substitute into the second equation:\n$y = 2(x - 3) + 7 = 2(6) + 7 = 12 + 7 = 19$\n\n**Why the wrong answers are tempting:**\n• Choice B ($25$): You solved for $x = 9$ and plugged that directly into $2x + 7 = 25$, forgetting to use the expression $x - 3$ inside the parentheses. College Board designs this trap because students who find $x$ sometimes substitute $x$ instead of $x - 3$.\n• Choice C ($12$): This is $2(x-3) = 12$ without the $+ 7$. You did both algebraic steps but forgot the constant. Under time pressure, dropping a term is the number one score killer.\n• Choice D ($15$): This comes from computing $x - 3 = 6$ and then $6 + 9 = 15$, conflating $x$ with the constant. This trap punishes students who mix up which numbers to combine.\n\n**Verification:** $x - 3 = 6$ means $x = 9$. Check first equation: $5(9) - 15 = 30$. Check $y$: $2(9-3) + 7 = 19$. Confirmed.\n\n**Test Day Takeaway:** When two equations are linked, isolate the shared sub-expression first -- here $x - 3$ -- and substitute it directly. Never solve for $x$ unless you have to.',
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
          explanation: '**SAT Pattern: Slope vs. Intercept Interpretation** -- Shows up every single test. College Board puts 1-2 of these on every exam, and the trap is always the same: confusing slope with intercept.\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** In $h = 2.5s + 4$, plug in $s = 0$: $h = 4$. The $4$ is the predicted height when sunlight is zero. That matches Choice B.\n\n**The Full Solution:**\nThis equation is in slope-intercept form $y = mx + b$:\n- Slope $m = 2.5$: height increases by $2.5$ cm per additional hour of sunlight\n- $y$-intercept $b = 4$: when $s = 0$, the predicted height is $4$ cm\n\n**Why the wrong answers are tempting:**\n• Choice A: This describes the slope ($2.5$), not the intercept ($4$). College Board knows that students who memorize "slope = rate of change" and "intercept = starting value" but get them mixed up will pick this. The slope and intercept swap is their favorite trap on interpretation questions.\n• Choice C: A linear model has no maximum -- it increases forever. This answer sounds reasonable to students who do not think about what a linear function actually looks like. It exploits real-world intuition ("plants can\'t grow forever") over mathematical reasoning.\n• Choice D: The number of hours is the input variable $s$, not the constant $4$. This confuses the role of a variable with a parameter.\n\n**Verification:** At $s = 0$: $h = 2.5(0) + 4 = 4$ cm, confirming the $y$-intercept interpretation.\n\n**Test Day Takeaway:** On interpretation questions, always ask: "What happens when the input is zero?" The answer is the $y$-intercept. "What happens when the input increases by one?" The answer is the slope.',
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
          explanation: '**SAT Pattern: Radical Equations** -- Shows up 1 per test. The process is always the same: square both sides, then solve the linear equation.\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Back-solve from the answer choices. Try $x = 6$: $\\sqrt{3(6)+7} = \\sqrt{25} = 5$. Done.\n\n**The Full Solution:**\n$(\\sqrt{3x + 7})^2 = 5^2$\n$3x + 7 = 25$\n$3x = 18$\n$x = 6$\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): $\\sqrt{3(4)+7} = \\sqrt{19} \\approx 4.36 \\neq 5$. Likely from a subtraction error when isolating $x$, such as computing $25 - 7 = 14$ instead of $18$. College Board designs this to catch arithmetic slips under time pressure.\n• Choice C ($8$): $\\sqrt{3(8)+7} = \\sqrt{31} \\approx 5.57 \\neq 5$. This comes from forgetting to subtract $7$ before dividing: $25 \\div 3 \\approx 8.3$. It punishes students who rush through the order of operations.\n• Choice D ($10$): $\\sqrt{3(10)+7} = \\sqrt{37} \\approx 6.08 \\neq 5$. This comes from computing $25 - 7 = 18$ but then not dividing by $3$. It rewards students who do partial work and stop.\n\n**Verification:** $\\sqrt{3(6) + 7} = \\sqrt{18 + 7} = \\sqrt{25} = 5$. Check.\n\n**Test Day Takeaway:** With radical equations and multiple choice, back-solving is often faster than algebra. Plug each answer into the original equation and see which one works.',
          skills: ["linear-equations"]
        },
        {
          id: 'pt7-m1-q4',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Which inequality represents all values of $x$ such that $3(2x - 5) - x > 2x + 10$?',
          choices: [
            { id: 'A', text: '$x > \\frac{25}{3}$' },
            { id: 'B', text: '$x > 25$' },
            { id: 'C', text: '$x < \\frac{25}{3}$' },
            { id: 'D', text: '$x > -5$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Linear Inequality with Distribution** -- Shows up 1-2 times per test. The extra reasoning step is distributing before collecting terms; the inequality direction rule still applies.\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Distribute: $6x - 15 - x > 2x + 10$, so $5x - 15 > 2x + 10$. Subtract $2x$: $3x - 15 > 10$. Add $15$: $3x > 25$. Divide: $x > \\frac{25}{3}$.\n\n**The Full Solution:**\nStep 1 -- Distribute: $3(2x - 5) - x = 6x - 15 - x = 5x - 15$\nStep 2 -- Solve the inequality:\n$5x - 15 > 2x + 10$\n$3x > 25$\n$x > \\frac{25}{3}$\n\n**Why the wrong answers are tempting:**\n• Choice B ($x > 25$): You forgot to divide by $3$ in the final step, writing $x > 25$ instead of $x > 25/3$. College Board designs this trap because students who correctly simplify often rush the last step and skip the division.\n• Choice C ($x < \\frac{25}{3}$): You found the correct boundary but flipped the inequality direction. The direction only changes when you multiply or divide by a negative. Since we divided by positive $3$, the sign stays. This trap punishes students who over-apply the "flip" rule.\n• Choice D ($x > -5$): This comes from a distribution error, such as computing $3(2x - 5) = 6x - 5$ instead of $6x - 15$. Dropping the distributive property is a common mistake under time pressure.\n\n**Verification:** Test $x = 9 > 25/3 \\approx 8.33$: LHS $= 3(13) - 9 = 30$, RHS $= 28$. Since $30 > 28$, confirmed.\n\n**Test Day Takeaway:** When an inequality involves parentheses, distribute first, then combine like terms. Only flip the inequality when you multiply or divide by a negative number.',
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
          explanation: '**SAT Pattern: Exponential Function Interpretation** -- Shows up every test. College Board always asks you to interpret the initial value or the growth/decay factor in context.\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** In $f(t) = 800(1.06)^t$, plug in $t = 0$: $f(0) = 800(1)= 800$. The $800$ is the value at the start, which is the initial investment.\n\n**The Full Solution:**\nThe function $f(t) = a \\cdot b^t$ has two parts:\n- $a = 800$ is the initial value (when $t = 0$)\n- $b = 1.06$ is the growth factor, meaning $6\\%$ annual growth\n\n**Why the wrong answers are tempting:**\n• Choice A: The annual interest rate is $6\\%$, which comes from $1.06 - 1 = 0.06$. This trap is designed for students who confuse the coefficient with the base. College Board banks on you mixing up which number means what.\n• Choice C: The value after one year is $f(1) = 800(1.06) = 848$, not $800$. This trap targets students who confuse $f(0)$ with $f(1)$. It rewards a common off-by-one misunderstanding.\n• Choice D: Total interest earned changes over time and is never a fixed number. This exploits students who do not realize that in an exponential function, only the initial value is constant.\n\n**Verification:** $f(0) = 800(1.06)^0 = 800(1) = 800$. The coefficient is the starting value.\n\n**Test Day Takeaway:** In $f(t) = a \\cdot b^t$: the number in front ($a$) is always the initial value, and the base ($b$) tells you the growth factor. Growth rate = $b - 1$.',
          skills: ["exponential-growth-decay"]
        },
        {
          id: 'pt7-m1-q6',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'A survey of $240$ students asked whether they prefer math or science and whether they are in grade 10 or grade 11. Of the $100$ grade 10 students, $45$ prefer math. Of the $140$ grade 11 students, $80$ prefer science. What fraction of the students who prefer math are in grade 11?',
          choices: [
            { id: 'A', text: '$\\frac{45}{105}$' },
            { id: 'B', text: '$\\frac{60}{105}$' },
            { id: 'C', text: '$\\frac{60}{140}$' },
            { id: 'D', text: '$\\frac{45}{100}$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Two-Way Table Conditional Fraction** -- Shows up 1-2 times per test. The trap is always about using the wrong denominator -- the "of" group vs. the whole population.\n\n**Choice B is correct.**\n\n**The Fast Way (30 seconds):** Build a quick mental table. Grade 11 math = $140 - 80 = 60$. Total math = $45 + 60 = 105$. Fraction = $\\frac{60}{105}$.\n\n**The Full Solution:**\nGrade 11 students who prefer math: $140 - 80 = 60$\nTotal students who prefer math: $45 + 60 = 105$\nFraction of math students who are in grade 11: $\\frac{60}{105}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{45}{105}$): This is the fraction of math students who are in grade 10, not grade 11. You used the right denominator but the wrong numerator. College Board puts this here because students who correctly identify the denominator sometimes grab the first number they see ($45$) without checking which grade it belongs to.\n• Choice C ($\\frac{60}{140}$): This is the fraction of all grade 11 students who prefer math. You used the right numerator ($60$) but the wrong denominator ($140$ instead of $105$). This trap exploits the most common conditional probability mistake: using the wrong "given" group.\n• Choice D ($\\frac{45}{100}$): This is the fraction of grade 10 students who prefer math. Both the numerator and denominator come from grade 10, not from the "prefer math" group. This is for students who did not read the question carefully.\n\n**Verification:** $\\frac{60}{105} = \\frac{4}{7} \\approx 0.571$. Grade 11 math ($60$) + grade 10 math ($45$) = $105$ total math. Check.\n\n**Test Day Takeaway:** On conditional fraction problems, underline the phrase after "of" -- that is your denominator. "Fraction of math students" means the denominator is total math students.',
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
          explanation: '**SAT Pattern: Systems of Equations** -- Shows up 2-3 times per test. College Board often asks for an expression like $x + y$ rather than $x$ and $y$ separately.\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** From $x - y = 3$, get $x = y + 3$. Plug into $3(y+3) + 2y = 19$: $5y + 9 = 19$, so $y = 2$ and $x = 5$. Then $x + y = 7$.\n\n**The Full Solution:**\nFrom equation 2: $x = y + 3$\nSubstitute into equation 1: $3(y + 3) + 2y = 19$\n$3y + 9 + 2y = 19$\n$5y = 10$, so $y = 2$\n$x = 2 + 3 = 5$\n$x + y = 5 + 2 = 7$\n\n**Why the wrong answers are tempting:**\n• Choice B ($8$): Likely from an arithmetic error in substitution, such as getting $5y = 15$ and $y = 3$ instead of $y = 2$. One small slip in mental math changes your final answer. College Board counts on time pressure causing these errors.\n• Choice C ($9$): This could come from computing $2x - y$ instead of $x + y$ with the correct values ($2(5) - 2 + 1 = 9$), or from misreading what expression is being asked for. Always re-read the question.\n• Choice D ($11$): Could result from computing $x + 2y + 2 = 5 + 4 + 2 = 11$ or a similar wrong expression. When the answer seems suspiciously large, double-check which expression you computed.\n\n**Verification:** $3(5) + 2(2) = 15 + 4 = 19$ and $5 - 2 = 3$. Both equations satisfied.\n\n**Test Day Takeaway:** On Desmos, type both equations and look at the intersection point. Then compute whatever expression they ask for. Systems on Desmos take about 15 seconds.',
          skills: ['Algebra', 'Systems of Equations']
        },
        {
          id: 'pt7-m1-q8',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The equation $2x^2 - 12x + 18 = k$ has exactly one real solution. The value of $x$ that satisfies this equation is substituted into the expression $x^2 - 2x + 5$. What is the resulting value?',
          choices: [
            { id: 'A', text: '$2$' },
            { id: 'B', text: '$8$' },
            { id: 'C', text: '$14$' },
            { id: 'D', text: '$24$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Perfect Square Trinomial + Multi-Step Substitution** -- Combines recognizing a perfect square form, determining the discriminant condition, and evaluating a second expression.\n\n**Choice B is correct.**\n\n**The Full Solution:**\nStep 1 -- Factor: $2x^2 - 12x + 18 = 2(x^2 - 6x + 9) = 2(x-3)^2$.\nStep 2 -- For exactly one real solution to $2(x-3)^2 = k$, we need $(x-3)^2 = k/2$ to have one solution. A square equals zero at exactly one point, so $k = 0$.\nStep 3 -- When $k = 0$: $2(x-3)^2 = 0$ gives $x = 3$.\nStep 4 -- Evaluate: $x^2 - 2x + 5 = 9 - 6 + 5 = 8$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): You evaluated $x^2 - 6x + 9$ at $x = 3$, getting $0$, then added $2$ from a misremembered expression. This catches students who confuse the original equation\'s expression with the one they need to evaluate.\n• Choice C ($14$): You found $x = 3$ correctly but evaluated $x^2 + 5 = 14$, dropping the $-2x$ term. Under multi-step pressure, forgetting a middle term is common.\n• Choice D ($24$): You substituted $x = 3$ into $2x^2 - 2x + 6$, conflating the original quadratic\'s coefficients with the evaluation expression. College Board designs multi-step problems so that mixing up which expression to use produces a plausible wrong answer.\n\n**Verification:** $k = 0$: $2(3)^2 - 12(3) + 18 = 18 - 36 + 18 = 0$. One solution at $x = 3$. $3^2 - 2(3) + 5 = 8$. Check.\n\n**Test Day Takeaway:** When a problem says "exactly one real solution," think discriminant $= 0$ or a perfect square equaling zero. Then follow through to whatever expression they actually ask you to evaluate -- do not stop at finding $x$.',
          skills: ["perfect-square-trinomial", "finding-roots-factoring"]
        },
        {
          id: 'pt7-m1-q9',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The parabola $y = 2x^2 - 8x + 10$ has vertex $(h, k)$ and $y$-intercept $(0, c)$. What is the value of $c - k$?',
          choices: [
            { id: 'A', text: '$2$' },
            { id: 'B', text: '$8$' },
            { id: 'C', text: '$10$' },
            { id: 'D', text: '$12$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Multi-Step Vertex and Intercept Comparison** -- Requires finding the $y$-intercept, computing the vertex, and then combining the results.\n\n**Choice B is correct.**\n\n**The Full Solution:**\nStep 1 -- $y$-intercept: Set $x = 0$: $c = 2(0)^2 - 8(0) + 10 = 10$.\nStep 2 -- Vertex $x$-coordinate: $h = -\\frac{b}{2a} = -\\frac{-8}{2(2)} = 2$.\nStep 3 -- Vertex $y$-coordinate: $k = 2(2)^2 - 8(2) + 10 = 8 - 16 + 10 = 2$.\nStep 4 -- Compute the difference: $c - k = 10 - 2 = 8$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($2$): This is $k$ itself, the vertex $y$-coordinate. You stopped one step early, finding the vertex but forgetting to subtract it from $c$. College Board frequently places intermediate results as wrong answers.\n• Choice C ($10$): This is $c$ alone, the $y$-intercept. You found the first value correctly but forgot the vertex step entirely. On multi-step problems, College Board rewards partial work with a matching wrong answer.\n• Choice D ($12$): This is $c + k = 10 + 2$ instead of $c - k$. You computed both values correctly but added instead of subtracting. Sign and operation errors in the final step are especially common under time pressure.\n\n**Verification:** Vertex form: $2(x-2)^2 + 2$. At $x = 0$: $2(4) + 2 = 10 = c$. $c - k = 10 - 2 = 8$. Check.\n\n**Test Day Takeaway:** Multi-step problems that ask for a combined expression are testing whether you can hold multiple results in memory. Write each intermediate value on your scratch paper before computing the final answer.',
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
          explanation: '**SAT Pattern: Percent Increase -- Finding the Original** -- Shows up 1-2 per test. The trap is always subtracting the percent from the new price instead of dividing.\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** "Increased by $25\\%$" means the new price is $1.25 \\times$ original. So original $= 75 \\div 1.25 = 60$. On Desmos: type $75/1.25$ and hit enter.\n\n**The Full Solution:**\nOriginal price $\\times 1.25 = 75$\n$p = \\frac{75}{1.25} = 60$\n\n**Why the wrong answers are tempting:**\n• Choice A (\\$50): $1.25 \\times 50 = 62.50 \\neq 75$. This does not check out, but it is a clean number that feels right under time pressure. College Board includes attractive-looking wrong answers to exploit guessing.\n• Choice B (\\$56.25): This comes from computing $75\\%$ of $75$ ($0.75 \\times 75 = 56.25$). The student confused "increased by $25\\%$" with "is $75\\%$ of $75$." This is an algebra error disguised as a percent error.\n• Choice D (\\$62.50): This is THE classic SAT percent trap. You computed $75 - 0.25(75) = 62.50$. But $25\\%$ of the new price is NOT the same as $25\\%$ of the original price. College Board puts this trap on almost every test because so many students fall for it.\n\n**Verification:** $60 + 25\\%$ of $60 = 60 + 15 = 75$. Check.\n\n**Test Day Takeaway:** "Increased by X%" means multiply by $(1 + X/100)$. To reverse it, DIVIDE by that factor. Never subtract the percent of the new number.',
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
          explanation: '**SAT Pattern: Circle Equation -- Reading the Radius** -- Shows up every test. The trap is always forgetting to take the square root.\n\n**Choice B is correct.**\n\n**The Fast Way (5 seconds):** In $(x-h)^2 + (y-k)^2 = r^2$, the right side is $r^2$, not $r$. So $r^2 = 36$ means $r = 6$.\n\n**The Full Solution:**\n$(x - 4)^2 + (y + 2)^2 = 36$\nCenter: $(4, -2)$\n$r^2 = 36$, so $r = \\sqrt{36} = 6$\n\n**Why the wrong answers are tempting:**\n• Choice A ($4$): This is the $x$-coordinate of the center, not the radius. College Board puts center coordinates as answer choices because rushing students confuse "which number means what" in the circle equation.\n• Choice C ($18$): This is $36 \\div 2$. Some students half the right side instead of taking the square root. This exploits the common confusion between dividing by $2$ and square rooting -- two very different operations that students sometimes conflate.\n• Choice D ($36$): This is $r^2$, not $r$. This is the single most common mistake on circle problems. You see the number on the right side and write it down as the radius without taking the square root. College Board uses this trap on literally every test.\n\n**Verification:** The point $(4, 4)$ should be on the circle: $(4-4)^2 + (4+2)^2 = 0 + 36 = 36$. Check.\n\n**Test Day Takeaway:** The circle equation gives you $r^2$, not $r$. Always take the square root. Write this on your scratch paper: "right side = $r^2$, NOT $r$."',
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
          explanation: '**SAT Pattern: SOH-CAH-TOA with Pythagorean Triples** -- Shows up 1-2 times per test. If you memorize the common triples ($3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$), these become instant.\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** $\\sin = \\frac{5}{13}$ means opposite $= 5$, hypotenuse $= 13$. Recognize the $5$-$12$-$13$ triple. Adjacent $= 12$. So $\\cos = \\frac{12}{13}$.\n\n**The Full Solution:**\n$\\sin^2(\\theta) + \\cos^2(\\theta) = 1$\n$\\left(\\frac{5}{13}\\right)^2 + \\cos^2(\\theta) = 1$\n$\\frac{25}{169} + \\cos^2(\\theta) = 1$\n$\\cos^2(\\theta) = \\frac{144}{169}$\n$\\cos(\\theta) = \\frac{12}{13}$ (positive in a right triangle)\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{5}{13}$): This is just $\\sin(\\theta)$ again. College Board puts this here for students who see the question, panic, and copy the given value. It also catches students who think $\\sin = \\cos$ in a right triangle (only true for $45$-degree angles).\n• Choice C ($\\frac{5}{12}$): This is $\\tan(\\theta) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{5}{12}$. Students who confuse the trig ratios mix up "adjacent over hypotenuse" with "opposite over adjacent." College Board exploits the fact that all three ratios use the same numbers.\n• Choice D ($\\frac{13}{12}$): This is $\\sec(\\theta) = \\frac{1}{\\cos(\\theta)}$, the reciprocal. You found the right numbers but flipped the fraction. This trap catches students who are almost right but invert their answer.\n\n**Verification:** $\\left(\\frac{5}{13}\\right)^2 + \\left(\\frac{12}{13}\\right)^2 = \\frac{25 + 144}{169} = \\frac{169}{169} = 1$. Check.\n\n**Test Day Takeaway:** Memorize the Pythagorean triples: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$. They turn a 60-second calculation into a 10-second recognition.',
          skills: ["soh-cah-toa", "pythagorean-theorem"]
        },
        {
          id: 'pt7-m1-q13',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'The expression $6x^2 + 7x - 20$ can be written as $(2x + 5)(3x + k)$ for some constant $k$. What is the value of $k$?',
          correctAnswer: '-4',
          explanation: '**SAT Pattern: Matching Coefficients in Factored Form** -- Shows up 1 per test. When part of the factored form is given, expand and match.\n\n**The correct answer is $-4$.**\n\n**The Fast Way (15 seconds):** Just match the constant terms. $(2x + 5)(3x + k)$ gives a constant of $5k$. We need $5k = -20$, so $k = -4$.\n\n**The Full Solution:**\n$(2x + 5)(3x + k) = 6x^2 + 2kx + 15x + 5k = 6x^2 + (2k + 15)x + 5k$\nMatching constant terms: $5k = -20$, so $k = -4$\nVerify with the $x$-coefficient: $2(-4) + 15 = -8 + 15 = 7$. Check.\n\n**Verification:** $(2x + 5)(3x - 4) = 6x^2 - 8x + 15x - 20 = 6x^2 + 7x - 20$. Check.\n\n**Test Day Takeaway:** When matching coefficients, start with the constant term -- it usually involves fewer variables and gives you the answer fastest.',
          skills: ['Advanced Math', 'Polynomial Factoring']
        },
        {
          id: 'pt7-m1-q14',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'The function $h(x) = \\frac{x + 5}{x^2 - 9}$ is undefined for which of the following values of $x$?',
          choices: [
            { id: 'A', text: '$-5$ only' },
            { id: 'B', text: '$3$ only' },
            { id: 'C', text: '$3$ and $-3$' },
            { id: 'D', text: '$-5$, $3$, and $-3$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Undefined Rational Functions** -- Shows up 1-2 per test. A rational function is undefined where the denominator equals zero. The numerator is irrelevant.\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Set the denominator equal to zero: $x^2 - 9 = 0$, so $x = 3$ or $x = -3$. That is it. Ignore the numerator.\n\n**The Full Solution:**\n$x^2 - 9 = 0$\n$(x - 3)(x + 3) = 0$\n$x = 3$ or $x = -3$\nAt $x = -5$: denominator $= (-5)^2 - 9 = 16 \\neq 0$, so the function IS defined there (it equals $0/16 = 0$).\n\n**Why the wrong answers are tempting:**\n• Choice A ($-5$ only): $x = -5$ makes the numerator zero, not the denominator. The function value there is $\\frac{0}{16} = 0$, which is perfectly defined. College Board designs this trap because students confuse "the function equals zero" with "the function is undefined." Those are completely different things.\n• Choice B ($3$ only): You found one root of $x^2 - 9 = 0$ but forgot the other. This punishes students who solve $x^2 = 9$ and only think of the positive square root. Always remember: $x^2 = 9$ has TWO solutions.\n• Choice D: You included $x = -5$ because it makes the numerator zero. This is the most tempting wrong answer because $-5$ does "do something special" to the function, just not the right something. College Board loves this psychological trick -- putting a value that IS notable but for the wrong reason.\n\n**Verification:** At $x = 3$: denominator $= 0$ (undefined). At $x = -3$: denominator $= 0$ (undefined). At $x = -5$: $h(-5) = 0$, defined. Check.\n\n**Test Day Takeaway:** "Undefined" means denominator = $0$. "Function equals zero" means numerator = $0$. Never confuse these two concepts.',
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
          explanation: '**SAT Pattern: Finding Zeros by Factoring** -- Shows up 1-2 per test. Factor the quadratic, set each factor to zero, and check ALL solutions.\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** On Desmos, graph $y = x^2 + 4x - 5$. The $x$-intercepts are at $x = 1$ and $x = -5$.\n\n**The Full Solution:**\n$x^2 + 4x - 5 = 0$\nFind two numbers that multiply to $-5$ and add to $4$: those are $5$ and $-1$.\n$(x + 5)(x - 1) = 0$\n$x = -5$ or $x = 1$\n\n**Why the wrong answers are tempting:**\n• Choice A ($x = 1$ only): You found one root but stopped. College Board designs this for students who factor correctly, find one solution, and move on without checking the other factor. On a timed test, the urge to rush to the next question is strong.\n• Choice B ($x = -5$ only): Same issue -- you found the other root but missed $x = 1$. This answer and Choice A are paired traps: if you only find one root, College Board has a wrong answer waiting for you either way.\n• Choice D ($x = -1$ or $x = 5$): The signs are flipped. The factoring is $(x + 5)(x - 1)$, which gives $x = -5$ and $x = 1$, NOT $x = 5$ and $x = -1$. College Board exploits the most common factoring sign error: confusing the signs inside the factors with the signs of the solutions.\n\n**Verification:** $f(1) = 1 + 4 - 5 = 0$ and $f(-5) = 25 - 20 - 5 = 0$. Both check out.\n\n**Test Day Takeaway:** When you factor $(x + a)(x + b) = 0$, the solutions are $x = -a$ and $x = -b$. The signs FLIP. Always double-check signs by plugging back in.',
          skills: ["finding-roots-factoring"]
        },
        {
          id: 'pt7-m1-q16',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The equation $x(kx - 42) = -9$ has no real solution. What is the least integer value of $k$?',
          correctAnswer: '50',
          explanation: '**SAT Pattern: Discriminant and No Real Solutions** -- Shows up 1 per test. "No real solutions" always means discriminant $< 0$.\n\n**The correct answer is $50$.**\n\n**The Fast Way (30 seconds):** Rewrite as $kx^2 - 42x + 9 = 0$. For no real solutions: $b^2 - 4ac < 0$. So $1764 - 36k < 0$, meaning $k > 49$. Least integer: $50$.\n\n**The Full Solution:**\n$x(kx - 42) = -9$\n$kx^2 - 42x + 9 = 0$\nDiscriminant: $(-42)^2 - 4(k)(9) = 1764 - 36k$\nFor no real solutions: $1764 - 36k < 0$\n$36k > 1764$\n$k > 49$\nLeast integer value: $k = 50$\n\n**Verification:** $k = 50$: discriminant $= 1764 - 1800 = -36 < 0$ (no real solutions). $k = 49$: discriminant $= 1764 - 1764 = 0$ (one real solution, not zero). So $49$ does not work but $50$ does.\n\n**Test Day Takeaway:** No real solutions means $b^2 - 4ac < 0$. One solution means $= 0$. Two solutions means $> 0$. When they ask for "least integer," solve the inequality and round up.',
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
          explanation: '**SAT Pattern: Horizontal Line Tangent to a Parabola** -- Shows up 1 per test. "Intersects at exactly one point" means the horizontal line passes through the vertex.\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** On Desmos, graph $y = -x^2 + 8x - 21$. Read the vertex from the graph: it is at $(4, -5)$. So $c = -5$.\n\n**The Full Solution:**\nVertex $x$-coordinate: $x = -\\frac{b}{2a} = -\\frac{8}{2(-1)} = 4$\nVertex $y$-coordinate: $y = -(4)^2 + 8(4) - 21 = -16 + 32 - 21 = -5$\nSince $a = -1 < 0$, this is a downward-opening parabola with maximum at $y = -5$.\nThe line $y = c$ touches at exactly one point when $c = -5$.\n\n**Why the wrong answers are tempting:**\n• Choice B ($-4$): Since $-4 > -5$, the line $y = -4$ is ABOVE the maximum of the parabola, so it never intersects at all. This trap catches students who make a small arithmetic error in the vertex calculation (perhaps getting $-16 + 32 - 21 = -4$ by miscounting).\n• Choice C ($-3$): Same reasoning -- $-3 > -5$, so no intersection. This may come from a sign error in the vertex calculation. College Board puts multiple "close but wrong" values to punish arithmetic slips.\n• Choice D ($-21$): This is the $y$-intercept (plug in $x = 0$). The line $y = -21$ intersects the parabola at two points (at $x = 0$ and by symmetry). This trap is for students who confuse the vertex with the $y$-intercept.\n\n**Verification:** $-x^2 + 8x - 21 = -5$ gives $-x^2 + 8x - 16 = 0$, so $x^2 - 8x + 16 = (x-4)^2 = 0$. One solution at $x = 4$. Check.\n\n**Test Day Takeaway:** "Intersects $y = c$ at exactly one point" = the line passes through the vertex. Find the vertex $y$-value using $x = -b/(2a)$, then plug back in.',
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
          explanation: '**SAT Pattern: No Solution Systems (Parallel Lines)** -- Shows up 1-2 per test. No solution = same slope, different $y$-intercept. Infinitely many solutions = same equation.\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Simplify the given equation: $4x = 28y - 20$ becomes $x = 7y - 5$. For no solution, we need the same slope but a different constant. $x = 7y$ has the same slope ($1/7$ when solved for $y$) but a different constant ($0$ vs. $-5$). Parallel lines.\n\n**The Full Solution:**\nGiven: $x = 7y - 5$, or $x - 7y = -5$\nChoice A: $x = 7y$, or $x - 7y = 0$\nSame coefficients ($1$ and $-7$) but different constants ($0 \\neq -5$). Parallel lines = no solution.\n\n**Why the wrong answers are tempting:**\n• Choice B: $\\frac{1}{4}x = 7y$ simplifies to $x = 28y$, or $x - 28y = 0$. The coefficient ratio is $1:-28$, which differs from $1:-7$. These lines have different slopes and WILL intersect -- one unique solution. College Board makes the fraction $\\frac{1}{4}$ look like it might relate to the $4$ in the original equation.\n• Choice C: $x = 7y - 5$ is the SAME equation as the original after simplification. Same equation = infinitely many solutions, not no solution. This is the subtlest trap -- it punishes students who do not simplify the original equation first.\n• Choice D: $\\frac{1}{4}x = 7y - 5$ simplifies to $x = 28y - 20$, which is the original equation. Again, infinitely many solutions. College Board disguises the same equation with different-looking coefficients.\n\n**Verification:** Original: $y = \\frac{1}{7}x + \\frac{5}{7}$. Choice A: $y = \\frac{1}{7}x$. Same slope $\\frac{1}{7}$, different intercepts. Check.\n\n**Test Day Takeaway:** For no solution, simplify both equations to the same form and check: same coefficients on $x$ and $y$, different constant. For infinitely many, they must be identical.',
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
          explanation: '**SAT Pattern: Solving Rational Equations for a Variable** -- Shows up 1 per test. The key technique is combining fractions over a common denominator, then taking the reciprocal.\n\n**Choice A is correct.**\n\n**The Fast Way (30 seconds):** Plug in easy numbers. Let $a = 2$, $b = 3$: $\\frac{10}{n} = \\frac{10}{2} - \\frac{10}{3} = 5 - \\frac{10}{3} = \\frac{5}{3}$. So $n = \\frac{10 \\times 3}{5} = 6$. Now check: $\\frac{ab}{b-a} = \\frac{6}{1} = 6$. That matches Choice A.\n\n**The Full Solution:**\n$\\frac{10}{n} = \\frac{10}{a} - \\frac{10}{b}$\nDivide by $10$: $\\frac{1}{n} = \\frac{1}{a} - \\frac{1}{b} = \\frac{b - a}{ab}$\nTake the reciprocal: $n = \\frac{ab}{b - a}$\n\n**Why the wrong answers are tempting:**\n• Choice B ($\\frac{ab}{a - b}$): You subtracted in the wrong order. This gives $\\frac{1}{b} - \\frac{1}{a}$ instead of $\\frac{1}{a} - \\frac{1}{b}$. College Board knows that sign errors in fraction subtraction are extremely common, and this trap catches exactly that mistake.\n• Choice C ($a - b$): You treated $\\frac{1}{a} - \\frac{1}{b}$ as $\\frac{1}{a-b}$. This is a fundamental fraction error -- you CANNOT subtract denominators directly. College Board exploits this because many students misremember fraction rules under pressure.\n• Choice D ($\\frac{a + b}{ab}$): This is $\\frac{1}{a} + \\frac{1}{b}$, not the reciprocal of $\\frac{1}{a} - \\frac{1}{b}$. You used addition instead of subtraction. This catches students who lose track of the operation while working with fractions.\n\n**Verification:** With $a = 2$, $b = 3$: $n = \\frac{6}{1} = 6$. $\\frac{10}{6} = \\frac{5}{3}$, and $\\frac{10}{2} - \\frac{10}{3} = 5 - \\frac{10}{3} = \\frac{5}{3}$. Check.\n\n**Test Day Takeaway:** When a problem has variables in denominators with multiple-choice answers, plug in small numbers to test each choice. It is often faster and less error-prone than algebraic manipulation.',
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
          explanation: '**SAT Pattern: Circle Tangent to an Axis** -- Shows up 1 per test. A circle is tangent to the $y$-axis when the distance from the center to the $y$-axis equals the radius.\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** For each choice, check if $|h| = r$ (tangent to $y$-axis). Choice A: $|3| = 3 = r$. Done.\n\n**The Full Solution:**\nThe distance from center $(h, k)$ to the $y$-axis is $|h|$.\n- A: Center $(3, 4)$, $r = 3$. $|3| = 3 = r$. Tangent to $y$-axis -- exactly one intersection.\n- B: Center $(5, -2)$, $r = 4$. $|5| = 5 > 4$. Does not reach the $y$-axis.\n- C: Center $(-4, 1)$, $r = 5$. $|-4| = 4 < 5$. Crosses the $y$-axis at two points.\n- D: Center $(2, 6)$, $r = 3$. $|2| = 2 < 3$. Crosses the $y$-axis at two points.\n\n**Why the wrong answers are tempting:**\n• Choice B: The center is far from the $y$-axis ($5$ units away) with a radius of only $4$, so the circle never reaches the $y$-axis. Students who do not think geometrically might pick this because the numbers "look right."\n• Choice C: The circle crosses the $y$-axis at TWO points because the radius ($5$) exceeds the distance to the axis ($4$). This trap catches students who confuse "intersects" with "is tangent to."\n• Choice D: Same issue as C -- the circle crosses the $y$-axis twice. Students might pick this because $(2, 6)$ "looks closer" to the $y$-axis, but closer means two intersections, not one.\n\n**Verification:** Set $x = 0$ in A: $(0-3)^2 + (y-4)^2 = 9$ gives $9 + (y-4)^2 = 9$, so $(y-4)^2 = 0$ and $y = 4$. Exactly one point. Check.\n\n**Test Day Takeaway:** Tangent to the $y$-axis: $|h| = r$. Tangent to the $x$-axis: $|k| = r$. If the distance is less than $r$, the circle crosses twice. If greater, it does not cross at all.',
          skills: ['Geometry', 'Circle Equations']
        },
        {
          id: 'pt7-m1-q21',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'A ball is launched upward from the ground. The height $h$, in feet, of the ball $t$ seconds after launch is modeled by the quadratic function $h(t) = -16t^2 + 96t$. The ball reaches its maximum height and then falls back to the ground. What is the maximum height, in feet, reached by the ball?',
          correctAnswer: '144',
          explanation: '**SAT Pattern: Projectile Motion / Maximum Height** -- Shows up 1 per test. Maximum height = vertex of the parabola. Use $t = -b/(2a)$.\n\n**The correct answer is $144$.**\n\n**The Fast Way (20 seconds):** On Desmos, graph $y = -16x^2 + 96x$. Click the vertex. It is at $(3, 144)$. The maximum height is $144$ feet.\n\n**The Full Solution:**\nTime at maximum: $t = -\\frac{b}{2a} = -\\frac{96}{2(-16)} = 3$ seconds\nMaximum height: $h(3) = -16(9) + 96(3) = -144 + 288 = 144$ feet\n\n**Verification:** At $t = 0$: $h = 0$ (ground). At $t = 6$: $h = -16(36) + 576 = 0$ (back to ground). The parabola is symmetric about $t = 3$, confirming the vertex.\n\n**Test Day Takeaway:** For projectile motion, maximum height is always at $t = -b/(2a)$. Plug that time back into the function to get the height. On Desmos, just graph it and click the peak.',
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
          explanation: '**SAT Pattern: Systems of Inequalities -- Maximize/Minimize** -- Shows up 1 per test. Set up the constraints, substitute the binding constraint, and solve.\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** To maximize large candles, minimize small candles. Minimum small = $10 - \\ell$. Budget constraint: $4(10 - \\ell) + 7\\ell \\leq 55$, so $40 + 3\\ell \\leq 55$, giving $\\ell \\leq 5$. Max is $5$.\n\n**The Full Solution:**\nLet $s$ = small candles, $\\ell$ = large candles.\nConstraints: $s + \\ell \\geq 10$ and $4s + 7\\ell \\leq 55$, with $s, \\ell \\geq 0$ (integers)\nTo maximize $\\ell$, use the minimum $s$: $s = 10 - \\ell$\n$4(10 - \\ell) + 7\\ell \\leq 55$\n$40 - 4\\ell + 7\\ell \\leq 55$\n$3\\ell \\leq 15$\n$\\ell \\leq 5$\n\n**Why the wrong answers are tempting:**\n• Choices A ($3$) and B ($4$): These are valid numbers of large candles, but the question asks for the MAXIMUM. College Board puts valid-but-not-optimal answers to punish students who find one working solution and stop without checking if a larger value also works.\n• Choice D ($6$): With $\\ell = 6$, you need $s \\geq 4$, and cost $= 4(4) + 7(6) = 16 + 42 = 58 > 55$. This exceeds the budget by \\$3. College Board places this "one too many" answer to catch students who make a boundary error or forget to check the budget constraint.\n\n**Verification:** $\\ell = 5$, $s = 5$: total $= 10 \\geq 10$ and cost $= 20 + 35 = 55 \\leq 55$. Both constraints satisfied.\n\n**Test Day Takeaway:** To maximize one variable in a system of inequalities, minimize everything else. Substitute the tightest constraint and solve. Then verify your answer satisfies ALL constraints.',
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
          difficulty: 'medium',
          question: 'A bag contains $4$ red marbles, $6$ blue marbles, and $5$ green marbles. One marble is drawn and set aside (it is NOT blue). What is the probability that the next marble drawn at random from the remaining marbles is blue?',
          choices: [
            { id: 'A', text: '$\\frac{2}{5}$' },
            { id: 'B', text: '$\\frac{3}{7}$' },
            { id: 'C', text: '$\\frac{2}{7}$' },
            { id: 'D', text: '$\\frac{6}{15}$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Conditional Probability After Removal** -- Shows up 1-2 per test. The extra step is adjusting the total after the first draw while recognizing which group was affected.\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** After removing one non-blue marble, $14$ marbles remain and all $6$ blue marbles are still there. $P = \\frac{6}{14} = \\frac{3}{7}$.\n\n**The Full Solution:**\nStep 1 -- Original total: $4 + 6 + 5 = 15$ marbles.\nStep 2 -- One non-blue marble is removed: $15 - 1 = 14$ marbles remain, with all $6$ blue still in the bag.\nStep 3 -- Probability: $\\frac{6}{14} = \\frac{3}{7}$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{2}{5}$): This is $\\frac{6}{15}$ simplified -- the probability BEFORE the first draw. You ignored the fact that a marble was removed. College Board designs this for students who skip the conditional step and compute from the original counts.\n• Choice C ($\\frac{6}{14}$): This is mathematically equal to $\\frac{3}{7}$. On a fill-in, both would be accepted. As multiple choice, College Board lists the unreduced form alongside the reduced form. The simplified version $\\frac{3}{7}$ is the credited answer.\n• Choice D ($\\frac{6}{15}$): Same as Choice A but unreduced. You used the original total of $15$ instead of the updated total of $14$. This trap catches students who forget to update the denominator after a marble is removed.\n\n**Verification:** $\\frac{3}{7} \\approx 0.429$, slightly higher than $\\frac{2}{5} = 0.400$, which makes sense -- removing a non-blue marble increases the blue proportion.\n\n**Test Day Takeaway:** When a problem says something is drawn and set aside, update both the numerator (if the favorable group changed) and the denominator (total always decreases). Read carefully whether the removed item is from the favorable group or not.',
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
          explanation: '**SAT Pattern: Identifying Exponential Growth vs. Decay** -- Shows up 1-2 per test. The base tells you everything: greater than $1$ = growth, between $0$ and $1$ = decay.\n\n**Choice C is correct.**\n\n**The Fast Way (10 seconds):** Scan for the form $a \\cdot b^x$ where $0 < b < 1$. Only Choice C has base $0.85$, which is between $0$ and $1$. That is decay.\n\n**The Full Solution:**\n- A: $3x + 2$ is linear (not exponential at all)\n- B: $100(1.05)^x$ has base $1.05 > 1$, so it is exponential growth\n- C: $50(0.85)^x$ has base $0.85$, where $0 < 0.85 < 1$, so it is exponential decay\n- D: $x^2 - 4$ is quadratic (variable in the base, not the exponent)\n\n**Why the wrong answers are tempting:**\n• Choice A: A linear function with a positive slope goes up, but it is not exponential. College Board includes this because some students think any "increasing function" is exponential growth, and any other function type could be decay.\n• Choice B: This IS exponential, but it is growth, not decay. The base $1.05$ means the function increases by $5\\%$ each unit. Students who remember "exponential" but forget to check whether the base is above or below $1$ fall for this.\n• Choice D: The variable is in the base ($x^2$), not in the exponent. In exponential functions, the variable MUST be in the exponent. This confuses power functions with exponential functions.\n\n**Verification:** $f(0) = 50$ and $f(1) = 50(0.85) = 42.5$. The output decreased, confirming decay.\n\n**Test Day Takeaway:** For $f(x) = a \\cdot b^x$: if $b > 1$, it grows. If $0 < b < 1$, it decays. The decay rate is $1 - b$ (here, $15\\%$). Just check whether the base is above or below $1$.',
          skills: ["exponential-growth-decay"]
        },
        {
          id: 'pt7-m2-q3',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The line $6x + 2y = 24$ intersects the $y$-axis at what point?',
          choices: [
            { id: 'A', text: '$(0, -3)$' },
            { id: 'B', text: '$(0, 12)$' },
            { id: 'C', text: '$(4, 0)$' },
            { id: 'D', text: '$(0, 24)$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Y-Intercept from Standard Form** -- Shows up every test. The extra step here is that the equation is in standard form, so you must either convert to slope-intercept form or substitute $x = 0$ before reading the intercept.\n\n**Choice B is correct.**\n\n**The Fast Way (10 seconds):** Set $x = 0$: $6(0) + 2y = 24$, so $2y = 24$ and $y = 12$. The point is $(0, 12)$.\n\n**The Full Solution:**\nStep 1 -- Substitute $x = 0$ into the standard form:\n$6(0) + 2y = 24$\n$2y = 24$\n$y = 12$\nStep 2 -- The $y$-intercept is $(0, 12)$.\n\nAlternatively, convert to slope-intercept form: $2y = -6x + 24$, so $y = -3x + 12$. The $y$-intercept is $12$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($(0, -3)$): You converted to $y = -3x + 12$ and grabbed the slope ($-3$) instead of the intercept ($12$). College Board designs this trap for students who confuse slope and intercept, especially after a conversion step adds cognitive load.\n• Choice C ($(4, 0)$): This is the $x$-intercept, not the $y$-intercept. Setting $y = 0$: $6x = 24$, $x = 4$. You solved for the wrong axis. College Board loves swapping which intercept they ask for.\n• Choice D ($(0, 24)$): You read the constant $24$ directly from $6x + 2y = 24$ without dividing by $2$. In standard form $Ax + By = C$, the $y$-intercept is $C/B$, not $C$. This is the most common standard-form trap.\n\n**Verification:** $6(0) + 2(12) = 24$. Check.\n\n**Test Day Takeaway:** For ANY equation, the $y$-intercept is found by setting $x = 0$ and solving for $y$. In standard form $Ax + By = C$, the $y$-intercept is $C/B$. Do not read the constant directly -- you must divide.',
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
          explanation: '**SAT Pattern: Systems by Elimination** -- Shows up 2-3 per test. When one equation has $+y$ and the other has $-y$, add them to eliminate $y$ instantly.\n\n**Choice A is correct.**\n\n**The Fast Way (15 seconds):** Add the equations: $2x = 14$, so $x = 7$. Then $y = 10 - 7 = 3$. Or just check each answer in both equations.\n\n**The Full Solution:**\n$x + y = 10$\n$x - y = 4$\nAdd: $2x = 14$, so $x = 7$\n$7 + y = 10$, so $y = 3$\n\n**Why the wrong answers are tempting:**\n• Choice B ($x = 3, y = 7$): You swapped $x$ and $y$. Check: $3 - 7 = -4 \\neq 4$. College Board puts the swapped solution because students who solve correctly sometimes write the values in the wrong order. This exploits carelessness, not lack of understanding.\n• Choice C ($x = 6, y = 4$): This satisfies the first equation ($6 + 4 = 10$) but NOT the second ($6 - 4 = 2 \\neq 4$). College Board designs this to catch students who only check one equation. If your answer works in one equation, always verify it in the other.\n• Choice D ($x = 8, y = 2$): Also satisfies the first equation ($8 + 2 = 10$) but not the second ($8 - 2 = 6 \\neq 4$). Same trap -- it passes one check but fails the other.\n\n**Verification:** $7 + 3 = 10$ and $7 - 3 = 4$. Both equations satisfied. Check.\n\n**Test Day Takeaway:** Always verify your solution in BOTH equations. College Board frequently includes wrong answers that satisfy only one of the two equations.',
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
          explanation: '**SAT Pattern: Minimum/Maximum from Vertex Form** -- Shows up 1-2 per test. In $a(x-h)^2 + k$, the min or max value is always $k$.\n\n**Choice C is correct.**\n\n**The Fast Way (5 seconds):** In $f(x) = 3(x - 4)^2 + 7$, the minimum value is $k = 7$. Since $a = 3 > 0$, the parabola opens up, so $k$ is the minimum. Done.\n\n**The Full Solution:**\n$f(x) = 3(x - 4)^2 + 7$ is in vertex form $a(x - h)^2 + k$ with vertex $(4, 7)$.\nSince $a = 3 > 0$, the parabola opens upward, and the vertex is the minimum point.\nThe minimum value of $f(x)$ is $k = 7$.\n\n**Why the wrong answers are tempting:**\n• Choice A ($3$): This is the coefficient $a$, which controls how wide or narrow the parabola is. College Board puts $a$ as an answer choice because students who partially remember vertex form grab the first number they see. The $a$ value tells you the "stretch," not the minimum.\n• Choice B ($4$): This is $h$, the $x$-coordinate where the minimum occurs. Students confuse "where the minimum happens" ($x = 4$) with "what the minimum value is" ($y = 7$). College Board exploits this distinction every time it tests vertex form.\n• Choice D ($55$): This is $f(0) = 3(16) + 7 = 55$. You evaluated at $x = 0$ instead of at the vertex. This catches students who default to plugging in $x = 0$ when they are unsure.\n\n**Verification:** $f(4) = 3(0)^2 + 7 = 7$. For any other $x$, $(x-4)^2 > 0$, so $f(x) > 7$. Check.\n\n**Test Day Takeaway:** In vertex form $a(x-h)^2 + k$: the vertex is at $(h, k)$. If $a > 0$, the minimum value is $k$. If $a < 0$, the maximum value is $k$. The minimum/maximum VALUE is always $k$, never $h$.',
          skills: ['Advanced Math', 'Quadratic Vertex']
        },
        {
          id: 'pt7-m2-q6',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'If $\\frac{3x - 5}{4} = 7$ and $\\frac{y - 2}{3} = \\frac{x - 1}{5}$, what is the value of $y$?',
          correctAnswer: '8',
          explanation: '**SAT Pattern: Chained Fractional Equations** -- Requires solving one equation fully, substituting into a second fractional equation, and solving again. Multi-step algebra under time pressure.\n\n**The correct answer is $8$.**\n\n**The Full Solution:**\nStep 1 -- Solve the first equation for $x$:\n$\\frac{3x - 5}{4} = 7$\n$3x - 5 = 28$\n$3x = 33$\n$x = 11$\n\nStep 2 -- Substitute $x = 11$ into the second equation:\n$\\frac{y - 2}{3} = \\frac{11 - 1}{5} = \\frac{10}{5} = 2$\n\nStep 3 -- Solve for $y$:\n$y - 2 = 6$\n$y = 8$\n\n**Common errors:**\n• Getting $x = 11$ but substituting into the wrong side, or forgetting to subtract $1$ from $x$ before dividing by $5$, giving $\\frac{11}{5}$ instead of $\\frac{10}{5}$. That leads to $y = \\frac{43}{5}$, a non-integer that should signal a mistake.\n• Solving the first equation as $3x = 23$ (subtracting $5$ from $28$ instead of adding), giving $x = 23/3$. Always verify your intermediate result: $\\frac{3(11)-5}{4} = \\frac{28}{4} = 7$.\n• Cross-multiplying the second equation incorrectly: $5(y-2) = 3(x-1)$ gives $5y - 10 = 30$, so $y = 8$. Some students get $3(y-2) = 5(x-1)$ by swapping sides, yielding $y = 52/3$.\n\n**Verification:** $\\frac{3(11)-5}{4} = \\frac{28}{4} = 7$. $\\frac{8-2}{3} = \\frac{6}{3} = 2$ and $\\frac{11-1}{5} = \\frac{10}{5} = 2$. Both check.\n\n**Test Day Takeaway:** Multi-step fractional equations require solving one variable fully before substituting. Always verify intermediate results -- if you get a non-integer in an integer-answer problem, go back and check.',
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
          explanation: '**SAT Pattern: Scaling Sample Proportions to Population** -- Shows up 1-2 per test. Find the sample proportion, then multiply by the population.\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** $\\frac{315}{500} = 0.63$. Population estimate: $0.63 \\times 80{,}000 = 50{,}400$.\n\n**The Full Solution:**\nSample proportion: $\\frac{315}{500} = 0.63 = 63\\%$\nEstimated supporters: $0.63 \\times 80{,}000 = 50{,}400$\n\n**Why the wrong answers are tempting:**\n• Choice A ($31{,}500$): You multiplied $315 \\times 100$ instead of using the proportion correctly. This is a common scaling error where students pick the wrong multiplier. College Board includes this because $315 \\times 100$ is a natural (but wrong) thing to try.\n• Choice B ($40{,}000$): You assumed $50\\%$ support instead of computing the actual proportion. This trap catches students who round or estimate too aggressively, or who default to "half" without calculating.\n• Choice D ($63{,}000$): You multiplied $63 \\times 1{,}000$ or used $0.63 \\times 100{,}000$. This comes from treating the percentage as a count or using the wrong population size. College Board exploits the fact that $63$ appears in both the percentage and this answer.\n\n**Verification:** $\\frac{50{,}400}{80{,}000} = 0.63 = \\frac{315}{500}$. Proportions match. Check.\n\n**Test Day Takeaway:** Sample-to-population problems always follow the same formula: (sample proportion) $\\times$ (population size). Find the proportion first, then multiply.',
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
          explanation: '**SAT Pattern: Simplifying Rational Expressions by Factoring** -- Shows up 1-2 per test. Factor the numerator, cancel the common factor with the denominator.\n\n**Choice B is correct.**\n\n**The Fast Way (15 seconds):** Plug in $x = 1$: $\\frac{1 + 5 + 6}{1 + 2} = \\frac{12}{3} = 4$. Check choices: $1 + 3 = 4$. Choice B works.\n\n**The Full Solution:**\n$x^2 + 5x + 6 = (x + 2)(x + 3)$\n$\\frac{(x + 2)(x + 3)}{x + 2} = x + 3$ (for $x \\neq -2$)\n\n**Why the wrong answers are tempting:**\n• Choice A ($x + 2$): This is the denominator itself. After canceling the common factor, the denominator disappears -- it does not become the answer. College Board puts the denominator as a choice because students sometimes confuse "what cancels" with "what remains."\n• Choice C ($x + 6$): This does not come from any correct factoring. Students might add $3$ to the wrong term, or try to "simplify" by subtracting parts of the fraction. College Board includes plausible-looking but mathematically wrong simplifications.\n• Choice D ($x^2 + 5x + 3$): You subtracted the denominator from the numerator ($6 - 2 = 3$ at the end). Division is NOT subtraction. This exploits students who do not know how to simplify rational expressions and try an incorrect shortcut.\n\n**Verification:** $(x + 3)(x + 2) = x^2 + 5x + 6$. Check.\n\n**Test Day Takeaway:** To simplify $\\frac{\\text{polynomial}}{\\text{linear factor}}$, always try factoring the numerator first. If the denominator is a factor, it cancels. If you are stuck, plug in a number to test.',
          skills: ['Advanced Math', 'Rational Expressions']
        },
        {
          id: 'pt7-m2-q9',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'A right circular cylinder has a height of $10$ cm and a volume of $250\\pi$ cubic cm. What is the total surface area, in square cm, of the cylinder? (Give your answer as a number times $\\pi$. For example, if your answer is $36\\pi$, enter 36.)',
          correctAnswer: '150',
          explanation: '**SAT Pattern: Multi-Step 3D Geometry -- Volume to Surface Area** -- Requires finding the radius from volume, then applying the surface area formula. Chains two formulas together.\n\n**The correct answer is $150$ (i.e., $150\\pi$ sq cm).**\n\n**The Full Solution:**\nStep 1 -- Find the radius from volume:\n$V = \\pi r^2 h$\n$250\\pi = \\pi r^2(10)$\n$r^2 = 25$, so $r = 5$ cm\n\nStep 2 -- Compute total surface area:\n$SA = 2\\pi r^2 + 2\\pi r h$\n$= 2\\pi(25) + 2\\pi(5)(10)$\n$= 50\\pi + 100\\pi = 150\\pi$\n\nThe coefficient is $150$.\n\n**Common errors:**\n• Answering $5$ (the radius) -- you stopped at the intermediate step. The question asks for surface area, not radius. College Board frequently places intermediate values as traps.\n• Computing only the lateral surface area $2\\pi rh = 100\\pi$ and forgetting the two circular bases. The total surface area includes $2\\pi r^2$ for the top and bottom.\n• Computing only $\\pi r^2 + 2\\pi rh = 125\\pi$ (one base instead of two). Read "total surface area" carefully -- it means all surfaces.\n• Getting $r^2 = 25$ but using $r = 25$ in the surface area formula, yielding a much larger answer.\n\n**Verification:** $V = \\pi(25)(10) = 250\\pi$. $SA = 2\\pi(25) + 2\\pi(5)(10) = 50\\pi + 100\\pi = 150\\pi$. Check.\n\n**Test Day Takeaway:** Total surface area of a cylinder $= 2\\pi r^2 + 2\\pi rh$. When a problem gives volume and asks for surface area, you must find $r$ first. Write each intermediate value on scratch paper to avoid losing track.',
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
            { id: 'C', text: '$\\left(\\frac{8 + 3r}{5}, r\\right)$' },
            { id: 'D', text: '$\\left(\\frac{5r + 8}{3}, r\\right)$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Infinitely Many Solutions -- Parametric Form** -- Shows up 1 per test. When two equations are multiples of each other, the system has infinitely many solutions. Express one variable in terms of a parameter $r$.\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Check if the equations are the same: $4 \\times (5x + 3y) = 20x + 12y = 32$. Yes, same line. Let $x = r$, solve for $y$: $3y = 8 - 5r$, so $y = \\frac{8 - 5r}{3}$. That is Choice A.\n\n**The Full Solution:**\nMultiply equation 1 by $4$: $20x + 12y = 32$ (identical to equation 2).\nThe system has infinitely many solutions.\nLet $x = r$: $5r + 3y = 8$ gives $y = \\frac{8 - 5r}{3}$.\nSolution: $\\left(r, \\frac{8 - 5r}{3}\\right)$\n\n**Why the wrong answers are tempting:**\n• Choice B: Uses $5r + 8$ instead of $8 - 5r$ (wrong sign on $5r$). Substituting: $5r + 3 \\cdot \\frac{5r + 8}{3} = 5r + 5r + 8 = 10r + 8 \\neq 8$. College Board flips the sign to catch students who make a sign error when isolating $y$.\n• Choice C: This expresses $x$ in terms of $r$ (with $y = r$), which is algebraically valid but not the form with $x = r$. The SAT answer choices use $x = r$ convention here, and this choice swaps the roles. It catches students who solve for the wrong variable.\n• Choice D: Uses an incorrect formula that does not satisfy the original equation. Substituting back confirms it fails.\n\n**Verification:** Plug $\\left(r, \\frac{8-5r}{3}\\right)$ into $5x + 3y$: $5r + 3 \\cdot \\frac{8-5r}{3} = 5r + 8 - 5r = 8$. Check.\n\n**Test Day Takeaway:** When two equations are identical (one is a multiple of the other), the system has infinitely many solutions. Let $x = r$ and solve for $y$ in terms of $r$ to get the parametric form.',
          skills: ['Algebra', 'Systems of Equations']
        },
        {
          id: 'pt7-m2-q11',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The regular price of a jacket at a store is \\$120. The sale price of the jacket is $70\\%$ less than the regular price, and the sale price is $20\\%$ greater than the store\'s cost for the jacket. What was the store\'s cost, in dollars, for the jacket? (Disregard the \\$ sign when entering your answer. For example, if your answer is \\$4.97, enter 4.97)',
          correctAnswer: '30',
          explanation: '**SAT Pattern: Multi-Step Percent Problems** -- Shows up 1-2 per test. Work through each percent change one at a time, in order. Never combine them.\n\n**The correct answer is $30$.**\n\n**The Fast Way (20 seconds):** Sale price = $120 \\times 0.30 = 36$ (since $70\\%$ less means $30\\%$ of original). Then cost: $36 \\div 1.20 = 30$ (since sale price is $20\\%$ greater than cost).\n\n**The Full Solution:**\nSale price: $70\\%$ less than \\$120 means $120 \\times (1 - 0.70) = 120 \\times 0.30 = 36$\nStore\'s cost: Sale price is $20\\%$ greater than cost, so $36 = 1.20c$\n$c = \\frac{36}{1.20} = 30$\n\n**Verification:** Cost = \\$30. $20\\%$ more = $30 \\times 1.20 = \\$36$. And $120 - 36 = 84$, which is $70\\%$ of $120$. Check.\n\n**Test Day Takeaway:** "X% less" means multiply by $(1 - X/100)$. "X% greater" means multiply by $(1 + X/100)$. To reverse a percent increase, DIVIDE by the factor. Work one step at a time -- never try to combine multiple percent changes into one calculation.',
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
          explanation: '**SAT Pattern: Factoring with Common Expressions** -- Shows up 1 per test. When both sides share a common factor, move everything to one side and factor it out. Never divide by the common factor -- you will lose a solution.\n\n**Choice C is correct.**\n\n**The Fast Way (30 seconds):** Move everything to one side: $(x - 23) - (x-a)(x-23) = 0$. Factor out $(x-23)$: $(x-23)(1 - (x-a)) = (x-23)(a + 1 - x) = 0$. Solutions: $x = 23$ or $x = a + 1$. That is II and III.\n\n**The Full Solution:**\n$(x - 23) - (x - a)(x - 23) = 0$\n$(x - 23)[1 - (x - a)] = 0$\n$(x - 23)(a + 1 - x) = 0$\n$x = 23$ or $x = a + 1$\n\nCheck I ($x = a$): $(a - 23)(a + 1 - a) = (a - 23)(1) = a - 23 \\neq 0$ since $a > 24$. NOT a solution.\n\n**Why the wrong answers are tempting:**\n• Choice A (I and II): Includes $x = a$, which does NOT work. College Board puts $a$ as an option because students see $(x - a)$ in the equation and instinctively think $a$ must be a solution. It exploits pattern recognition without verification.\n• Choice B (I and III): Also incorrectly includes $x = a$ while excluding $x = a + 1$. Students who divide both sides by $(x - 23)$ (losing the $x = 23$ solution) and then solve $(x - a) = 1$ get $x = a + 1$, but they might think "$a$" also works because it "looks right."\n• Choice D (I, II, III): Includes all three, but $x = a$ definitively fails. This is for students who assume that every value that appears in the equation must be a solution.\n\n**Verification:** $x = a + 1$: LHS $= a - 22$. RHS $= (1)(a - 22) = a - 22$. Check. $x = 23$: LHS $= 0$. RHS $= (23-a)(0) = 0$. Check.\n\n**Test Day Takeaway:** Never divide both sides by a variable expression -- you will lose solutions. Always move to one side and factor. Then check each proposed solution by substituting back.',
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
          explanation: '**SAT Pattern: Multi-Step 3D Geometry** -- Shows up 1 per test. These require chaining multiple formulas: base area to find $r$, volume to find $h$, Pythagorean theorem to find slant height.\n\n**Choice D is correct.**\n\n**The Fast Way (45 seconds):** Base area = $\\pi r^2 = 2304\\pi$, so $r = 48$. Volume: $\\frac{1}{3}\\pi(2304)h = 15360\\pi$, so $h = 20$. Slant height: $\\sqrt{48^2 + 20^2} = \\sqrt{2304 + 400} = \\sqrt{2704} = 52$.\n\n**The Full Solution:**\nStep 1: $\\pi r^2 = 2{,}304\\pi$, so $r = 48$ cm\nStep 2: $\\frac{1}{3}\\pi(2{,}304)h = 15{,}360\\pi$, so $768h = 15{,}360$ and $h = 20$ cm\nStep 3: $\\ell = \\sqrt{r^2 + h^2} = \\sqrt{2{,}304 + 400} = \\sqrt{2{,}704} = 52$ cm\n\n**Why the wrong answers are tempting:**\n• Choice A ($20$): This is the height, not the slant height. You did steps 1-2 correctly but stopped before step 3. College Board puts intermediate results as wrong answers to catch students who do partial work. The slant height is ALWAYS longer than the height.\n• Choice B ($36$): This does not correspond to any meaningful quantity in this problem. It may result from an arithmetic error in one of the steps.\n• Choice C ($48$): This is the radius, not the slant height. Again, you stopped at an intermediate result. College Board frequently puts the radius and height as wrong answers on slant-height problems.\n\n**Verification:** $\\sqrt{48^2 + 20^2} = \\sqrt{2304 + 400} = \\sqrt{2704} = 52$. Check.\n\n**Test Day Takeaway:** Slant height problems always require the Pythagorean theorem as the final step: $\\ell = \\sqrt{r^2 + h^2}$. The wrong answers are almost always the intermediate values ($r$ and $h$). If your answer matches the radius or height, you are not done yet.',
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
          explanation: '**SAT Pattern: Square Inscribed in a Circle** -- Shows up 1 per test. The key relationship: diagonal of the square = diameter of the circle.\n\n**Choice C is correct.**\n\n**The Fast Way (15 seconds):** Diagonal = diameter = $2 \\times 5\\sqrt{2} = 10\\sqrt{2}$. Area of square $= \\frac{d^2}{2} = \\frac{(10\\sqrt{2})^2}{2} = \\frac{200}{2} = 100$.\n\n**The Full Solution:**\nDiagonal = diameter = $2(5\\sqrt{2}) = 10\\sqrt{2}$\nSide = $\\frac{\\text{diagonal}}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{\\sqrt{2}} = 10$\nArea = $10^2 = 100$\n\n**Why the wrong answers are tempting:**\n• Choice A ($25$): You used the radius ($5\\sqrt{2}$) and forgot the $\\sqrt{2}$, computing $(5)^2 = 25$. College Board designs this for students who drop the radical under pressure. The radius is $5\\sqrt{2}$, not $5$.\n• Choice B ($50$): You computed $\\frac{\\text{diagonal}^2}{4}$ instead of $\\frac{\\text{diagonal}^2}{2}$, or used $r^2 = (5\\sqrt{2})^2 = 50$ without the correct formula. This exploits confusion about the relationship between diagonal and area.\n• Choice D ($200$): You used the diagonal as the side length: $(10\\sqrt{2})^2 = 200$. The diagonal is NOT the side -- it is $\\sqrt{2}$ times the side. This is the most common error on inscribed square problems.\n\n**Verification:** Side = $10$, diagonal = $10\\sqrt{2}$ = diameter = $2(5\\sqrt{2}) = 10\\sqrt{2}$. Area = $100$. Check.\n\n**Test Day Takeaway:** For a square inscribed in a circle: diagonal = diameter = $2r$. Then either use side = diagonal/$\\sqrt{2}$ or the shortcut area $= \\frac{d^2}{2} = 2r^2$.',
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
          explanation: '**SAT Pattern: Adding Rational Expressions** -- Shows up 1 per test. Find the common denominator (multiply the two denominators), then combine the numerators.\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** Plug in $x = 0$: $\\frac{3}{-2} + \\frac{5}{4} = -\\frac{6}{4} + \\frac{5}{4} = -\\frac{1}{4}$. Check Choice A: $\\frac{0 + 2}{0 + 0 - 8} = \\frac{2}{-8} = -\\frac{1}{4}$. Match.\n\n**The Full Solution:**\nCommon denominator: $(x-2)(x+4) = x^2 + 2x - 8$\n$$\\frac{3(x+4) + 5(x-2)}{x^2 + 2x - 8} = \\frac{3x + 12 + 5x - 10}{x^2 + 2x - 8} = \\frac{8x + 2}{x^2 + 2x - 8}$$\n\n**Why the wrong answers are tempting:**\n• Choice B ($8x + 22$): You multiplied $5$ by the WRONG factor: $5(x+4) = 5x + 20$ instead of $5(x-2) = 5x - 10$. This gives $3x + 12 + 5x + 20 = 8x + 32$... wait, actually this gives $8x + 22$ if you did $3(x+4) + 5(x+2)$. College Board designs this to catch students who cross-multiply incorrectly, using the same denominator for both fractions.\n• Choice C ($8$): You added only the numerators ($3 + 5 = 8$) without adjusting for the common denominator. This is a fundamental fraction error -- you cannot add fractions by adding numerators alone. College Board exploits this common mistake.\n• Choice D ($2x + 2$ denominator): You ADDED the denominators instead of multiplying them: $(x-2) + (x+4) = 2x + 2$. The common denominator is the PRODUCT of the individual denominators, not their sum. This is another fundamental fraction misconception.\n\n**Verification:** $x = 0$: $\\frac{2}{-8} = -\\frac{1}{4}$ and $\\frac{3}{-2} + \\frac{5}{4} = -\\frac{1}{4}$. Check.\n\n**Test Day Takeaway:** When adding fractions with different denominators, multiply each numerator by the OTHER denominator. The common denominator is always the product. When in doubt, plug in a number to verify.',
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
          explanation: '**SAT Pattern: Reverse-Engineering a Composed Function** -- Shows up 1 per test. When given $g(x) = f(x)/(x+3)$, recover $f(x)$ by multiplying: $f(x) = g(x) \\cdot (x+3)$.\n\n**The correct answer is $6$.**\n\n**The Fast Way (20 seconds):** The $y$-intercept of $f$ is $f(0)$. From the table, $g(0) = 2$, so $f(0) = 2 \\times (0+3) = 6$. Done.\n\n**The Full Solution:**\n$f(x) = g(x) \\cdot (x + 3)$\n$f(0) = 2 \\cdot 3 = 6$\n$f(3) = 4 \\cdot 6 = 24$\n$f(9) = 5 \\cdot 12 = 60$\nVerify linearity: slope from $(0,6)$ to $(3,24)$: $\\frac{18}{3} = 6$. Slope from $(3,24)$ to $(9,60)$: $\\frac{36}{6} = 6$. Consistent.\nThe $y$-intercept of $f$ is $f(0) = 6$.\n\n**Verification:** $f(x) = 6x + 6$. $g(0) = \\frac{6}{3} = 2$. $g(3) = \\frac{24}{6} = 4$. $g(9) = \\frac{60}{12} = 5$. All match the table. Check.\n\n**Test Day Takeaway:** When a composed function is defined as a ratio, undo it by multiplying. The $y$-intercept is always $f(0)$, so start there -- you often do not need to find the full equation.',
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
          explanation: '**SAT Pattern: Unit Conversion with Squared Units** -- Shows up 1 per test. The trap is always forgetting to SQUARE the conversion factor when converting area units.\n\n**Choice A is correct.**\n\n**The Fast Way (20 seconds):** $1$ sq yd $= 9$ sq ft. So $2160 \\div 9 = 240$ sq yd/hr. Then $240 \\div 60 = 4$ sq yd/min.\n\n**The Full Solution:**\nConvert area: $1$ yd $= 3$ ft, so $1$ sq yd $= 9$ sq ft.\n$2{,}160 \\text{ sq ft/hr} \\div 9 = 240 \\text{ sq yd/hr}$\nConvert time: $240 \\text{ sq yd/hr} \\div 60 = 4 \\text{ sq yd/min}$\n\n**Why the wrong answers are tempting:**\n• Choice B ($12$): You divided by $3$ instead of $9$: $2160 \\div 3 \\div 60 = 12$. This is THE classic unit conversion trap. When converting SQUARE units, you must SQUARE the linear factor. $1$ yard $= 3$ feet, but $1$ SQUARE yard $= 9$ square feet. College Board puts this on every test because so many students forget to square.\n• Choice C ($36$): You only converted time but not area: $2160 \\div 60 = 36$. This is still in square FEET per minute, not square yards. You forgot half the conversion. College Board catches students who do one step and think they are done.\n• Choice D ($240$): You only converted area but not time: $2160 \\div 9 = 240$. This is still per HOUR, not per minute. Same trap as Choice C but in the other direction.\n\n**Verification:** $4 \\text{ sq yd/min} \\times 9 \\text{ sq ft/sq yd} \\times 60 \\text{ min/hr} = 2{,}160 \\text{ sq ft/hr}$. Check.\n\n**Test Day Takeaway:** When converting squared units, SQUARE the conversion factor: $1$ yd $= 3$ ft means $1$ sq yd $= 9$ sq ft. When converting cubed units, CUBE it. The wrong answers on these problems are ALWAYS what you get if you forget to square.',
          skills: ['Problem Solving', 'Unit Conversion']
        },
        {
          id: 'pt7-m2-q18',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'If $2^{a} = 3$ and $2^{b} = 5$, what is the value of $2^{3a + 2b}$?',
          correctAnswer: '675',
          explanation: '**SAT Pattern: Exponent Rules with Substitution** -- Shows up 1 per test. Split the exponent using rules, then substitute the given values.\n\n**The correct answer is $675$.**\n\n**The Fast Way (20 seconds):** $2^{3a+2b} = 2^{3a} \\cdot 2^{2b} = (2^a)^3 \\cdot (2^b)^2 = 3^3 \\cdot 5^2 = 27 \\cdot 25 = 675$.\n\n**The Full Solution:**\n$2^{3a + 2b} = 2^{3a} \\cdot 2^{2b}$ (product rule: $x^{m+n} = x^m \\cdot x^n$)\n$= (2^a)^3 \\cdot (2^b)^2$ (power rule: $x^{mn} = (x^m)^n$)\n$= 3^3 \\cdot 5^2 = 27 \\cdot 25 = 675$\n\n**Verification:** $27 \\times 25 = 675$. And $2^a = 3, 2^b = 5$ means $a = \\log_2 3, b = \\log_2 5$, so $2^{3\\log_2 3 + 2\\log_2 5} = 3^3 \\cdot 5^2 = 675$. Check.\n\n**Test Day Takeaway:** When you see $2^{3a+2b}$, immediately split it as $(2^a)^3 \\cdot (2^b)^2$. The two exponent rules you need: $x^{m+n} = x^m \\cdot x^n$ and $(x^m)^n = x^{mn}$.',
          skills: ['Advanced Math', 'Exponent Rules']
        },
        {
          id: 'pt7-m2-q19',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The equation $x^2 - 14x + 40 = 0$ has solutions $p$ and $q$. What is the value of $(p - 2)(q - 2)$?',
          correctAnswer: '16',
          explanation: '**SAT Pattern: Vieta\'s Formulas** -- Shows up 1 per test. Instead of solving the quadratic, use $p + q = -b/a$ and $pq = c/a$ to evaluate expressions involving the roots.\n\n**The correct answer is $16$.**\n\n**The Fast Way (20 seconds):** By Vieta\'s: $p + q = 14$, $pq = 40$. Expand: $(p-2)(q-2) = pq - 2(p+q) + 4 = 40 - 28 + 4 = 16$.\n\n**The Full Solution:**\nFor $x^2 - 14x + 40 = 0$:\n$p + q = 14$ and $pq = 40$ (Vieta\'s formulas)\n$(p - 2)(q - 2) = pq - 2p - 2q + 4 = pq - 2(p + q) + 4$\n$= 40 - 2(14) + 4 = 40 - 28 + 4 = 16$\n\n**Verification:** Solving directly: $x = \\frac{14 \\pm 6}{2}$, so $p = 10, q = 4$. $(10-2)(4-2) = 8 \\times 2 = 16$. Check.\n\n**Test Day Takeaway:** Vieta\'s formulas let you skip solving the quadratic entirely. For $x^2 + bx + c = 0$: sum of roots $= -b$, product of roots $= c$. Expand the expression they ask for in terms of sum and product, then substitute.',
          skills: ['Advanced Math', 'Quadratic Equations']
        },
        {
          id: 'pt7-m2-q20',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'In the $xy$-plane, a circle has center $(6, -3)$ and radius $5$. A line passes through the center of the circle with slope $\\frac{3}{2}$. What is the $x$-coordinate of the point where this line crosses the $x$-axis?',
          correctAnswer: '8',
          explanation: '**SAT Pattern: Line Through a Point with Given Slope** -- Shows up 1-2 per test. Use point-slope form, then set $y = 0$ to find the $x$-intercept. The circle is a red herring.\n\n**The correct answer is $8$.**\n\n**The Fast Way (20 seconds):** The circle info just gives you the center point $(6, -3)$. Line through $(6, -3)$ with slope $\\frac{3}{2}$: rise $3$, run $2$. From $y = -3$, you need to go up $3$ to reach $y = 0$, which means going right $2$. So $x = 6 + 2 = 8$.\n\n**The Full Solution:**\nPoint-slope form: $y + 3 = \\frac{3}{2}(x - 6)$\nSet $y = 0$: $3 = \\frac{3}{2}(x - 6)$\n$2 = x - 6$\n$x = 8$\n\n**Verification:** Slope from $(6, -3)$ to $(8, 0)$: $\\frac{0-(-3)}{8-6} = \\frac{3}{2}$. Check.\n\n**Test Day Takeaway:** When a problem mentions a circle but asks about a line, the circle is usually just there to give you a point. Do not waste time writing the circle equation. Focus on the line.',
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
              label: 'y = 3x\u00B2 + bx + c'
            }
          },
          correctAnswer: '18',
          explanation: '**SAT Pattern: Reading a Parabola Graph to Find Coefficients** -- Shows up 1 per test. Read the vertex from the graph, write vertex form, expand to standard form, and match coefficients.\n\n**The correct answer is $18$.**\n\n**The Fast Way (30 seconds):** Vertex is $(1, -6)$ with $a = 3$. Vertex form: $3(x-1)^2 - 6 = 3x^2 - 6x + 3 - 6 = 3x^2 - 6x - 3$. So $b = -6$, $c = -3$, and $bc = 18$.\n\n**The Full Solution:**\nFrom the graph: vertex at $(1, -6)$, $a = 3$\nVertex form: $y = 3(x - 1)^2 - 6$\nExpand: $y = 3(x^2 - 2x + 1) - 6 = 3x^2 - 6x + 3 - 6 = 3x^2 - 6x - 3$\nMatch with $y = 3x^2 + bx + c$: $b = -6$, $c = -3$\n$bc = (-6)(-3) = 18$\n\n**Verification:** Vertex check: $x = -b/(2a) = 6/6 = 1$ and $y(1) = 3 - 6 - 3 = -6$. Check.\n\n**Test Day Takeaway:** When given a parabola graph with $y = ax^2 + bx + c$, read the vertex $(h, k)$, write $y = a(x-h)^2 + k$, and expand. The expansion gives you $b$ and $c$ directly.',
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
          explanation: '**SAT Pattern: Horizontal Shift of a Rational Function** -- Shows up 1 per test. For $g(x) = f(x+3)$, replace every $x$ in $f(x)$ with $(x+3)$. This shifts the graph $3$ units to the LEFT.\n\n**Choice C is correct.**\n\n**The Fast Way (20 seconds):** From the graph, the vertical asymptote is at $x = -3$, so $f(x) = \\frac{5}{x+3}$. Then $g(x) = f(x+3) = \\frac{5}{(x+3)+3} = \\frac{5}{x+6}$.\n\n**The Full Solution:**\nFrom the graph: vertical asymptote at $x = -3$ means $b = 3$, so $f(x) = \\frac{a}{x+3}$.\nThe graph passes through $(-4, -5)$: $\\frac{a}{-4+3} = \\frac{a}{-1} = -5$, so $a = 5$.\n$f(x) = \\frac{5}{x+3}$\n$g(x) = f(x+3) = \\frac{5}{(x+3)+3} = \\frac{5}{x+6}$\n\n**Why the wrong answers are tempting:**\n• Choice A ($\\frac{5}{x}$): You replaced the $+3$ with $+3$ and they "canceled." This would only be correct if $b = 0$ in the original function. College Board puts this for students who think the shift "removes" the existing constant.\n• Choice B ($\\frac{5}{x+3}$): This is $f(x)$ itself, not $f(x+3)$. You forgot to apply the shift. College Board includes the original function as a wrong answer because students sometimes overthink and end up not changing anything.\n• Choice D ($\\frac{5(x+3)}{x+3}$): This simplifies to just $5$ (a constant, for $x \\neq -3$), which is not a rational function with a vertical asymptote. This comes from incorrectly multiplying instead of substituting.\n\n**Verification:** $g(0) = \\frac{5}{6}$ and $f(3) = \\frac{5}{6}$. Since $g(x) = f(x+3)$, $g(0) = f(3)$. Check.\n\n**Test Day Takeaway:** For $g(x) = f(x + h)$, replace every $x$ in $f(x)$ with $(x+h)$. The vertical asymptote shifts left by $h$. If the original asymptote was at $x = -b$, the new one is at $x = -b - h$.',
          skills: ['Advanced Math', 'Rational Functions']
        }
      ]
    }
  ]
};
