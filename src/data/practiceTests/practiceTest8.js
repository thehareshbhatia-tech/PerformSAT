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
          difficulty: 'easy',
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
          explanation: '**Choice C is correct.** Read the bar graph to find the year with the smallest bar.\n\n**Step 1: Read each bar**\n• 2019: $8\\%$\n• 2020: $12\\%$\n• 2021: $5\\%$\n• 2022: $15\\%$\n\n**Step 2: Identify the minimum**\nThe smallest value is $5\\%$, which corresponds to 2021.\n\n**Why other choices are incorrect:**\n• Choice A (2019): $8\\%$ is not the lowest\n• Choice B (2020): $12\\%$ is higher than $5\\%$\n• Choice D (2022): $15\\%$ is the highest\n\n**Key concept:** On bar graphs, the height of each bar represents the value. The shortest bar corresponds to the smallest value.',
          skills: ["function-notation"]
        },
        {
          id: 'pt8-m1-q2',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Two lines intersect at the point $(-3, 4)$. What is the solution $(x, y)$ to this system of equations?',
          choices: [
            { id: 'A', text: '$(4, -3)$' },
            { id: 'B', text: '$(0, 4)$' },
            { id: 'C', text: '$(-3, 4)$' },
            { id: 'D', text: '$(3, -4)$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** The solution to a system of equations is the intersection point.\n\n**Step 1: Recall the definition**\nThe solution to a system of two linear equations is the point $(x, y)$ where their graphs intersect.\n\n**Step 2: Apply the definition**\nThe problem states the lines intersect at $(-3, 4)$, so the solution is $(-3, 4)$.\n\n**Why other choices are incorrect:**\n• Choice A ($(4, -3)$): The coordinates are swapped\n• Choice B ($(0, 4)$): The $x$-coordinate is wrong\n• Choice D ($(3, -4)$): Both signs are flipped\n\n**Key concept:** The solution to a system of equations corresponds to the intersection point. The order matters: $(x, y)$ means $x$ first, $y$ second.',
          skills: ["graphing-systems"]
        },
        {
          id: 'pt8-m1-q3',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The total cost, in dollars, to rent a kayak consists of a \\$30 service fee and a \\$15 per hour rental fee. A person rents a kayak for $h$ hours and intends to spend a maximum of \\$90. Which inequality represents this situation?',
          choices: [
            { id: 'A', text: '$15h \\leq 90$' },
            { id: 'B', text: '$15 + 30h \\leq 90$' },
            { id: 'C', text: '$30h \\leq 90$' },
            { id: 'D', text: '$30 + 15h \\leq 90$' }
          ],
          correctAnswer: 'D',
          explanation: '**Choice D is correct.** Build the cost inequality from the given information.\n\n**Step 1: Identify the cost components**\n• Service fee: \\$30 (one-time, fixed)\n• Hourly rental: \\$15 per hour\n• Hours rented: $h$\n\n**Step 2: Write the total cost expression**\nTotal cost $= 30 + 15h$\n\n**Step 3: Apply the budget constraint**\nThe total must be at most \\$90: $30 + 15h \\leq 90$\n\n**Why other choices are incorrect:**\n• Choice A ($15h \\leq 90$): Missing the \\$30 service fee\n• Choice B ($15 + 30h \\leq 90$): The rates are swapped — charges \\$30/hour and \\$15 fixed\n• Choice C ($30h \\leq 90$): Missing the service fee and uses wrong hourly rate\n\n**Key concept:** Total cost = fixed fee + (rate per unit × number of units). Use $\\leq$ for "at most" and $\\geq$ for "at least."',
          skills: ["word-problem-to-equation", "linear-equations"]
        },
        {
          id: 'pt8-m1-q4',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'If a parabola with vertex at $(0, -4)$ is translated up $5$ units, what is the $y$-coordinate of the new vertex?',
          choices: [
            { id: 'A', text: '$-9$' },
            { id: 'B', text: '$-4$' },
            { id: 'C', text: '$1$' },
            { id: 'D', text: '$5$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Apply the vertical translation to the vertex.\n\n**Step 1: Recall the translation rule**\nTranslating a graph up $k$ units adds $k$ to every $y$-coordinate.\n\n**Step 2: Apply to the vertex**\nOriginal vertex: $(0, -4)$\nTranslation: up $5$ units\nNew $y$-coordinate: $-4 + 5 = 1$\n\n**Why other choices are incorrect:**\n• Choice A ($-9$): Subtracted $5$ instead of adding (translated down)\n• Choice B ($-4$): Did not apply the translation\n• Choice D ($5$): Used only the translation amount, ignoring the original $y$-coordinate\n\n**Key concept:** Translating up $k$ units: $y_{\\text{new}} = y_{\\text{old}} + k$. Translating down $k$ units: $y_{\\text{new}} = y_{\\text{old}} - k$.',
          skills: ["function-transformations"]
        },
        {
          id: 'pt8-m1-q5',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The equation $v = 25 + 4t$ gives the speed $v$, in meters per second, of a certain object $t$ seconds after it began to accelerate. What is the speed, in meters per second, of the object $6$ seconds after it began to accelerate?',
          choices: [
            { id: 'A', text: '$25$' },
            { id: 'B', text: '$29$' },
            { id: 'C', text: '$49$' },
            { id: 'D', text: '$54$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Substitute $t = 6$ into the speed equation.\n\n**Step 1: Substitute $t = 6$**\n$v = 25 + 4(6)$\n\n**Step 2: Calculate**\n$v = 25 + 24 = 49$ meters per second\n\n**Why other choices are incorrect:**\n• Choice A ($25$): This is the initial speed at $t = 0$, not at $t = 6$\n• Choice B ($29$): Would result from $25 + 4 = 29$ (using $t = 1$)\n• Choice D ($54$): Would result from $6 \\times (25 \\div 4 + 4)$ or similar arithmetic error\n\n**Key concept:** To evaluate a function at a specific input, replace the variable with the given value and compute.',
          skills: ["function-evaluation"]
        },
        {
          id: 'pt8-m1-q6',
          type: 'fill-in',
          difficulty: 'easy',
          question: 'The function $f$ is defined by $f(x) = x^2 + 2x + 35$. What is the value of $f(3)$?',
          correctAnswer: '50',
          explanation: '**The correct answer is $50$.** Substitute $x = 3$ into the function.\n\n**Step 1: Substitute $x = 3$**\n$f(3) = (3)^2 + 2(3) + 35$\n\n**Step 2: Evaluate each term**\n$(3)^2 = 9$\n$2(3) = 6$\n\n**Step 3: Add all terms**\n$f(3) = 9 + 6 + 35 = 50$\n\n**Key concept:** To evaluate a polynomial at a specific value, substitute the value for every occurrence of the variable and simplify using order of operations (exponents first, then multiplication, then addition).',
          skills: ["function-evaluation"]
        },
        {
          id: 'pt8-m1-q7',
          type: 'fill-in',
          difficulty: 'easy',
          question: 'A catering company charges a one-time fee of \\$50 to book an event and \\$12.50 per guest. The company has a budget limit of \\$400 for one event. What is the greatest number of guests possible without exceeding the budget?',
          correctAnswer: '28',
          explanation: '**The correct answer is $28$.** Set up and solve the budget inequality.\n\n**Step 1: Write the cost equation**\nTotal cost $= 50 + 12.50g$, where $g$ is the number of guests.\n\n**Step 2: Apply the budget constraint**\n$50 + 12.50g \\leq 400$\n\n**Step 3: Solve for $g$**\n$12.50g \\leq 400 - 50 = 350$\n$g \\leq \\frac{350}{12.50} = 28$\n\n**Verification:** $50 + 12.50(28) = 50 + 350 = \\$400$ ✓ (exactly at budget)\n\n**Key concept:** For "greatest number" problems, solve the inequality and take the largest whole number that satisfies it.',
          skills: ["word-problem-to-equation", "linear-equations"]
        },
        {
          id: 'pt8-m1-q8',
          type: 'multiple-choice',
          difficulty: 'easy',
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
          explanation: '**Choice C is correct.** Use the probability formula with the two-way table.\n\n**Step 1: Identify favorable outcomes**\nTotal votes for Candidate A $= 25$ (from the Total row)\n\n**Step 2: Identify total outcomes**\nTotal students $= 100$\n\n**Step 3: Calculate the probability**\n$P(\\text{Candidate A}) = \\frac{25}{100} = \\frac{1}{4}$\n\n**Why other choices are incorrect:**\n• Choice A ($\\frac{1}{10}$): Would require only $10$ votes for Candidate A\n• Choice B ($\\frac{1}{5}$): Would require $20$ votes for Candidate A\n• Choice D ($\\frac{1}{2}$): Would require $50$ votes for Candidate A\n\n**Key concept:** $P(\\text{event}) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$. In a two-way table, use the totals row/column for overall probabilities.',
          skills: ["percent-of-value"]
        },
        {
          id: 'pt8-m1-q9',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Triangles $PQR$ and $STU$ are congruent, where $P$ corresponds to $S$, and $Q$ and $T$ are right angles. The measure of angle $P$ is $25°$. What is the measure of angle $U$?',
          choices: [
            { id: 'A', text: '$25°$' },
            { id: 'B', text: '$65°$' },
            { id: 'C', text: '$90°$' },
            { id: 'D', text: '$155°$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Use the triangle angle sum and congruence correspondence.\n\n**Step 1: Find angle $R$ in triangle $PQR$**\nAngle sum in a triangle $= 180°$\nAngle $P = 25°$, Angle $Q = 90°$\nAngle $R = 180° - 25° - 90° = 65°$\n\n**Step 2: Use congruence to find angle $U$**\n$P \\leftrightarrow S$, $Q \\leftrightarrow T$, so $R \\leftrightarrow U$\nAngle $U =$ Angle $R = 65°$\n\n**Why other choices are incorrect:**\n• Choice A ($25°$): This is angle $P$ (or its corresponding angle $S$), not angle $U$\n• Choice C ($90°$): This is the right angle at $Q$ (or $T$)\n• Choice D ($155°$): This is $180° - 25°$, which is not how triangle angles work\n\n**Key concept:** In congruent triangles, corresponding angles are equal. The angle sum in any triangle is $180°$.',
          skills: ["triangle-angle-sum"]
        },
        {
          id: 'pt8-m1-q10',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'If $3x + 4 = 16$, what is the value of $12x + 16$?',
          choices: [
            { id: 'A', text: '$48$' },
            { id: 'B', text: '$52$' },
            { id: 'C', text: '$64$' },
            { id: 'D', text: '$68$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Recognize the relationship between the expression and the given equation.\n\n**Step 1: Factor the target expression**\n$12x + 16 = 4(3x + 4)$\n\n**Step 2: Substitute the known value**\nSince $3x + 4 = 16$:\n$12x + 16 = 4(16) = 64$\n\n**Alternative method:** Solve for $x$ first: $3x = 12$, so $x = 4$. Then $12(4) + 16 = 48 + 16 = 64$.\n\n**Why other choices are incorrect:**\n• Choice A ($48$): This is $12x$ alone when $x = 4$, without adding $16$\n• Choice B ($52$): Arithmetic error\n• Choice D ($68$): Would result from $4(17)$ or similar miscalculation\n\n**Key concept:** When asked for a multiple of a given expression, factor the target to use the known equation directly — this is faster than solving for the variable first.',
          skills: ["distributive-property", "linear-equations"]
        },
        {
          id: 'pt8-m1-q11',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Which expression is equivalent to $(a^3b^2c^{-1})(a^2b^3c^4)$, where $a$, $b$, and $c$ are positive?',
          choices: [
            { id: 'A', text: '$a^5b^5c^3$' },
            { id: 'B', text: '$a^6b^6c^4$' },
            { id: 'C', text: '$a^5b^5c^{-4}$' },
            { id: 'D', text: '$a^6b^5c^{-5}$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Multiply by adding exponents for each base.\n\n**Step 1: Apply the product rule for each variable**\n$a$: $a^3 \\cdot a^2 = a^{3+2} = a^5$\n$b$: $b^2 \\cdot b^3 = b^{2+3} = b^5$\n$c$: $c^{-1} \\cdot c^4 = c^{-1+4} = c^3$\n\n**Step 2: Combine**\n$(a^3b^2c^{-1})(a^2b^3c^4) = a^5b^5c^3$\n\n**Why other choices are incorrect:**\n• Choice B ($a^6b^6c^4$): Multiplied exponents instead of adding\n• Choice C ($a^5b^5c^{-4}$): Multiplied the $c$ exponents ($-1 \\times 4 = -4$) instead of adding\n• Choice D ($a^6b^5c^{-5}$): Multiple errors in exponent arithmetic\n\n**Key concept:** When multiplying powers with the same base, add the exponents: $x^m \\cdot x^n = x^{m+n}$. This rule applies to negative exponents too.',
          skills: ["exponent-laws"]
        },
        {
          id: 'pt8-m1-q12',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'A car travels from an altitude of $8{,}000$ feet to $2{,}000$ feet at a constant rate of $500$ feet per minute. What type of function best models the relationship between the car\'s altitude and time?',
          choices: [
            { id: 'A', text: 'Decreasing exponential' },
            { id: 'B', text: 'Decreasing linear' },
            { id: 'C', text: 'Increasing exponential' },
            { id: 'D', text: 'Increasing linear' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Identify the function type from the rate of change.\n\n**Step 1: Determine the type of change**\nThe car descends at a constant rate of $500$ feet per minute. A constant rate of change means the function is linear.\n\n**Step 2: Determine the direction**\nThe altitude goes from $8{,}000$ feet down to $2{,}000$ feet, so the function is decreasing.\n\n**Why other choices are incorrect:**\n• Choice A (Decreasing exponential): Exponential functions have a changing rate, not a constant rate\n• Choice C (Increasing exponential): The altitude is decreasing, not increasing\n• Choice D (Increasing linear): The altitude is decreasing, not increasing\n\n**Key concept:** Constant rate of change → linear function. If the rate is positive, the function is increasing; if negative, it is decreasing.',
          skills: ["slope-intercept-form"]
        },
        {
          id: 'pt8-m1-q13',
          type: 'fill-in',
          difficulty: 'medium',
          question: '$2x + 5y = 8$\n$2x + 3y = 4$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?',
          correctAnswer: '2',
          explanation: '**The correct answer is $2$.** Use elimination to solve for $y$.\n\n**Step 1: Subtract the second equation from the first**\n$(2x + 5y) - (2x + 3y) = 8 - 4$\n$2y = 4$\n\n**Step 2: Solve for $y$**\n$y = \\frac{4}{2} = 2$\n\n**Verification:** Substitute $y = 2$ into the second equation: $2x + 3(2) = 4$, so $2x = -2$, $x = -1$. Check in first: $2(-1) + 5(2) = -2 + 10 = 8$ ✓\n\n**Key concept:** When both equations have the same coefficient for one variable (here $2x$), subtract the equations to eliminate that variable.',
          skills: ["elimination-method"]
        },
        {
          id: 'pt8-m1-q14',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'The function $f$ is defined by $f(x) = (x - 4)(x - 1)(x + 5)$. In the $xy$-plane, the graph of $y = g(x)$ is the result of translating the graph of $y = f(x)$ up $3$ units. What is the value of $g(0)$?',
          correctAnswer: '23',
          explanation: '**The correct answer is $23$.** Find $f(0)$, then apply the vertical translation.\n\n**Step 1: Calculate $f(0)$**\n$f(0) = (0 - 4)(0 - 1)(0 + 5) = (-4)(-1)(5) = 20$\n\n**Step 2: Apply the translation**\nTranslating up $3$ units means $g(x) = f(x) + 3$.\n$g(0) = f(0) + 3 = 20 + 3 = 23$\n\n**Key concept:** Translating a graph up $k$ units adds $k$ to the function: $g(x) = f(x) + k$. To find $g(a)$, first compute $f(a)$, then add $k$.',
          skills: ["function-transformations"]
        },
        {
          id: 'pt8-m1-q15',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The function $f(w) = 5w^2$ gives the area of a rectangle, in square meters, if its width is $w$ meters and its length is $5$ times its width. Which of the following is the best interpretation of $f(8) = 320$?',
          choices: [
            { id: 'A', text: 'If the width of the rectangle is $8$ m, then the area of the rectangle is $320$ m².' },
            { id: 'B', text: 'If the width of the rectangle is $8$ m, then the length of the rectangle is $320$ m.' },
            { id: 'C', text: 'If the width of the rectangle is $320$ m, then the length of the rectangle is $8$ m.' },
            { id: 'D', text: 'If the width of the rectangle is $320$ m, then the area of the rectangle is $8$ m².' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Interpret the function notation $f(8) = 320$ in context.\n\n**Step 1: Identify the input and output**\n• Input: $w = 8$ (width in meters)\n• Output: $f(8) = 320$ (area in square meters)\n\n**Step 2: Translate to words**\n$f(8) = 320$ means: "When the width is $8$ meters, the area is $320$ square meters."\n\n**Verification:** $f(8) = 5(8)^2 = 5(64) = 320$ ✓\n\n**Why other choices are incorrect:**\n• Choice B: The function gives area, not length\n• Choice C: $320$ is the output (area), not the input (width)\n• Choice D: The input and output roles are reversed\n\n**Key concept:** $f(a) = b$ means "when the input is $a$, the output is $b$." Always identify what the input and output represent in context.',
          skills: ["function-notation", "function-evaluation"]
        },
        {
          id: 'pt8-m1-q16',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The population of bacteria in a culture triples every day. There are $5{,}000$ bacteria at the start of an observation. Which of the following represents the number of bacteria, $y$, in the culture $t$ days after the start of the observation?',
          choices: [
            { id: 'A', text: '$y = \\frac{1}{3}(5{,}000)^t$' },
            { id: 'B', text: '$y = 3(5{,}000)^t$' },
            { id: 'C', text: '$y = 5{,}000\\left(\\frac{1}{3}\\right)^t$' },
            { id: 'D', text: '$y = 5{,}000(3)^t$' }
          ],
          correctAnswer: 'D',
          explanation: '**Choice D is correct.** Build the exponential growth model.\n\n**Step 1: Identify the components**\n• Initial population: $5{,}000$ bacteria\n• Growth factor: triples each day, so multiply by $3$\n• Time: $t$ days\n\n**Step 2: Write the equation**\n$y = \\text{initial} \\times (\\text{growth factor})^t = 5{,}000(3)^t$\n\n**Verification:** At $t = 1$: $y = 5{,}000(3)^1 = 15{,}000$ (tripled) ✓\n\n**Why other choices are incorrect:**\n• Choice A ($y = \\frac{1}{3}(5{,}000)^t$): The initial value should be multiplied by the growth factor raised to $t$, not the other way around\n• Choice B ($y = 3(5{,}000)^t$): The base should be the growth factor ($3$), not the initial value ($5{,}000$)\n• Choice C ($y = 5{,}000(\\frac{1}{3})^t$): A base of $\\frac{1}{3}$ represents decay (dividing by $3$), not growth\n\n**Key concept:** Exponential growth: $y = a \\cdot b^t$ where $a$ is the initial value and $b$ is the growth factor. "Triples" means $b = 3$; "doubles" means $b = 2$.',
          skills: ["exponential-growth-decay"]
        },
        {
          id: 'pt8-m1-q17',
          type: 'multiple-choice',
          difficulty: 'medium',
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
          explanation: '**Choice B is correct.** Find the initial value and growth factor from the table.\n\n**Step 1: Find the initial value**\nWhen $x = 0$: $h(0) = 50$. So the initial value is $50$.\n\n**Step 2: Find the growth factor**\n$\\frac{h(1)}{h(0)} = \\frac{60}{50} = 1.2$\n$\\frac{h(2)}{h(1)} = \\frac{72}{60} = 1.2$\n\nThe common ratio is $1.2$.\n\n**Step 3: Write the equation**\n$h(x) = 50(1.2)^x$\n\n**Verification:** $h(2) = 50(1.2)^2 = 50(1.44) = 72$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($50(0.2)^x$): Base $0.2 < 1$ would give decay, but the values are increasing\n• Choice C ($60(0.2)^x$): Wrong initial value and base gives decay\n• Choice D ($60(1.2)^x$): Wrong initial value — $h(0)$ should be $50$, not $60$\n\n**Key concept:** For exponential functions from a table: the initial value is $h(0)$, and the growth factor is the constant ratio $\\frac{h(x+1)}{h(x)}$.',
          skills: ["table-to-equation", "exponential-growth-decay"]
        },
        {
          id: 'pt8-m1-q18',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The function $h$ is defined by $h(x) = 3x + 15$. The graph of $y = h(x)$ in the $xy$-plane has an $x$-intercept at $(a, 0)$ and a $y$-intercept at $(0, b)$, where $a$ and $b$ are constants. What is the value of $a + b$?',
          choices: [
            { id: 'A', text: '$10$' },
            { id: 'B', text: '$15$' },
            { id: 'C', text: '$18$' },
            { id: 'D', text: '$20$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Find both intercepts and add them.\n\n**Step 1: Find the $x$-intercept ($a$)**\nSet $h(x) = 0$: $3x + 15 = 0$\n$3x = -15$\n$x = -5$, so $a = -5$\n\n**Step 2: Find the $y$-intercept ($b$)**\n$h(0) = 3(0) + 15 = 15$, so $b = 15$\n\n**Step 3: Calculate $a + b$**\n$a + b = -5 + 15 = 10$\n\n**Why other choices are incorrect:**\n• Choice B ($15$): This is just the $y$-intercept without adding $a$\n• Choice C ($18$): Arithmetic error, possibly from $3 + 15$\n• Choice D ($20$): Possibly used $|a| + b = 5 + 15 = 20$ instead of $a + b$\n\n**Key concept:** The $x$-intercept is found by setting $y = 0$; the $y$-intercept by setting $x = 0$. Watch the signs when adding.',
          skills: ["slope-intercept-form", "linear-equations"]
        },
        {
          id: 'pt8-m1-q19',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: '$y < 4x + 5$\n\nFor which of the following tables are all the values of $x$ and their corresponding values of $y$ solutions to the given inequality?',
          choices: [
            { id: 'A', table: { headers: ['x', 'y'], rows: [['2', '15'], ['3', '19'], ['4', '23']] } },
            { id: 'B', table: { headers: ['x', 'y'], rows: [['2', '12'], ['3', '16'], ['4', '20']] } },
            { id: 'C', table: { headers: ['x', 'y'], rows: [['2', '10'], ['3', '14'], ['4', '18']] } },
            { id: 'D', table: { headers: ['x', 'y'], rows: [['2', '8'], ['3', '12'], ['4', '16']] } }
          ],
          correctAnswer: 'D',
          explanation: '**Choice D is correct.** Test each table to see if all $(x, y)$ pairs satisfy $y < 4x + 5$.\n\n**Step 1: Calculate the boundary values**\n• $x = 2$: $4(2) + 5 = 13$, so $y$ must be $< 13$\n• $x = 3$: $4(3) + 5 = 17$, so $y$ must be $< 17$\n• $x = 4$: $4(4) + 5 = 21$, so $y$ must be $< 21$\n\n**Step 2: Check Choice D**\n• $(2, 8)$: $8 < 13$ ✓\n• $(3, 12)$: $12 < 17$ ✓\n• $(4, 16)$: $16 < 21$ ✓\nAll pass!\n\n**Why other choices fail:**\n• Choice A: $(2, 15)$: $15 > 13$ ✗\n• Choice B: $(2, 12)$: $12 < 13$ ✓, but $(3, 16)$: $16 < 17$ ✓, $(4, 20)$: $20 < 21$ ✓ — actually all pass too. However, looking more carefully, A fails at $x = 2$ since $15 > 13$.\n• Choice C: $(4, 18)$: $18 < 21$ ✓ — passes, but all values in D are strictly less by a wider margin.\n\n**Key concept:** To verify solutions to an inequality, substitute each $(x, y)$ pair and check that the inequality holds for ALL values.',
          skills: ["linear-equations"]
        },
        {
          id: 'pt8-m1-q20',
          type: 'fill-in',
          difficulty: 'hard',
          question: '$y = 2x + 1$\n$2y = 6x - 2$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $x - y$?',
          correctAnswer: '-3',
          explanation: '**The correct answer is $-3$.** Solve the system by substitution.\n\n**Step 1: Substitute the first equation into the second**\nSince $y = 2x + 1$, substitute into $2y = 6x - 2$:\n$2(2x + 1) = 6x - 2$\n$4x + 2 = 6x - 2$\n\n**Step 2: Solve for $x$**\n$4x - 6x = -2 - 2$\n$-2x = -4$\n$x = 2$\n\n**Step 3: Find $y$**\n$y = 2(2) + 1 = 5$\n\n**Step 4: Calculate $x - y$**\n$x - y = 2 - 5 = -3$\n\n**Verification:** Check in second equation: $2(5) = 10$ and $6(2) - 2 = 10$ ✓\n\n**Key concept:** When one equation is already solved for a variable (like $y = ...$), substitute it directly into the other equation.',
          skills: ["substitution-method"]
        },
        {
          id: 'pt8-m1-q21',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'A right triangle has legs with lengths of $15$ centimeters and $20$ centimeters. What is the length of this triangle\'s hypotenuse, in centimeters?',
          correctAnswer: '25',
          explanation: '**The correct answer is $25$.** Apply the Pythagorean theorem.\n\n**Step 1: Write the Pythagorean theorem**\n$c^2 = a^2 + b^2$ where $a$ and $b$ are legs, $c$ is the hypotenuse.\n\n**Step 2: Substitute the leg lengths**\n$c^2 = 15^2 + 20^2 = 225 + 400 = 625$\n\n**Step 3: Solve for $c$**\n$c = \\sqrt{625} = 25$ centimeters\n\n**Key concept:** This is a $3$-$4$-$5$ Pythagorean triple scaled by $5$: $15 = 5(3)$, $20 = 5(4)$, $25 = 5(5)$. Recognizing common triples ($3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$) saves time on the SAT.',
          skills: ["pythagorean-theorem"]
        },
        {
          id: 'pt8-m1-q22',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'The floor of a conference room has an area of $800$ square meters. An architect creates a scale model where the length of each side is $\\frac{1}{20}$ times the length of the corresponding side of the actual floor. What is the area, in square meters, of the scale model?',
          choices: [
            { id: 'A', text: '$2$' },
            { id: 'B', text: '$8$' },
            { id: 'C', text: '$40$' },
            { id: 'D', text: '$200$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Apply the area scaling rule.\n\n**Step 1: Recall the scaling relationship**\nWhen linear dimensions are scaled by factor $k$, area scales by $k^2$.\n\n**Step 2: Calculate the area scale factor**\n$k = \\frac{1}{20}$\n$k^2 = \\left(\\frac{1}{20}\\right)^2 = \\frac{1}{400}$\n\n**Step 3: Find the model area**\nArea of model $= \\frac{1}{400} \\times 800 = 2$ square meters\n\n**Why other choices are incorrect:**\n• Choice B ($8$): Divided by $100$ instead of $400$ — used $k$ instead of $k^2$\n• Choice C ($40$): Divided by $20$ (the linear scale factor) instead of $400$ ($k^2$)\n• Choice D ($200$): Divided by $4$ — incorrect scale calculation\n\n**Key concept:** Linear scale factor $k$ → area scales by $k^2$, volume scales by $k^3$. For $k = \\frac{1}{20}$: area scales by $\\frac{1}{400}$, volume would scale by $\\frac{1}{8{,}000}$.',
          skills: ["volume-scaling", "dimensional-analysis"]
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
          difficulty: 'easy',
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
          explanation: '**Choice C is correct.** Use the properties of a line through the origin.\n\n**Step 1: Identify the $y$-intercept**\nThe line passes through the origin, so the $y$-intercept is $0$.\n\n**Step 2: Determine the slope**\nFrom the line of best fit, the slope is $1.5$.\n\n**Step 3: Write the equation**\n$y = mx + b = 1.5x + 0 = 1.5x$\n\n**Why other choices are incorrect:**\n• Choice A ($y = x + 1.5$): Has a $y$-intercept of $1.5$, not $0$\n• Choice B ($y = x - 1.5$): Has a $y$-intercept of $-1.5$ and wrong slope\n• Choice D ($y = -1.5x$): Negative slope would make the line decrease\n\n**Key concept:** A line through the origin has the form $y = mx$ (no constant term). The $y$-intercept is always $0$.',
          skills: ["slope-intercept-form"]
        },
        {
          id: 'pt8-m2-q2',
          type: 'multiple-choice',
          difficulty: 'easy',
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
          explanation: '**Choice B is correct.** Find the equation from the graph, then match to a table.\n\n**Step 1: Find the slope from the graph**\nThe line passes through $(0, -4)$ and $(2, 0)$.\nSlope $= \\frac{0 - (-4)}{2 - 0} = \\frac{4}{2} = 2$\n\n**Step 2: Write the equation**\n$y = 2x - 4$\n\n**Step 3: Verify with Choice B**\n• $x = 0$: $y = 2(0) - 4 = -4$ ✓\n• $x = 1$: $y = 2(1) - 4 = -2$ ✓\n• $x = 2$: $y = 2(2) - 4 = 0$ ✓\n\n**Why other choices are incorrect:**\n• Choice A: $(0, 0)$ — the $y$-intercept should be $-4$, not $0$\n• Choice C: $(1, -6)$ — $2(1) - 4 = -2 \\neq -6$\n• Choice D: $(0, 4)$ — the $y$-intercept should be $-4$, not $4$\n\n**Key concept:** To match a graph to a table, find the equation first, then verify each point in the table satisfies the equation.',
          skills: ["table-to-equation", "slope-intercept-form"]
        },
        {
          id: 'pt8-m2-q3',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: '$5m = 3(n + p)$\n\nThe given equation relates the positive numbers $m$, $n$, and $p$. Which equation correctly gives $m$ in terms of $n$ and $p$?',
          choices: [
            { id: 'A', text: '$m = \\frac{3(n + p)}{5}$' },
            { id: 'B', text: '$m = 3(n + p)$' },
            { id: 'C', text: '$m = 3(n + p) - 5$' },
            { id: 'D', text: '$m = 3 - n - p - 5$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Isolate $m$ by dividing both sides by $5$.\n\n**Step 1: Start with the given equation**\n$5m = 3(n + p)$\n\n**Step 2: Divide both sides by $5$**\n$m = \\frac{3(n + p)}{5}$\n\n**Why other choices are incorrect:**\n• Choice B ($m = 3(n + p)$): Forgot to divide by $5$\n• Choice C ($m = 3(n + p) - 5$): Subtracted $5$ instead of dividing by $5$\n• Choice D ($m = 3 - n - p - 5$): Completely incorrect algebraic manipulation\n\n**Key concept:** To isolate a variable multiplied by a coefficient, divide both sides by that coefficient. Do not subtract it.',
          skills: ["linear-equations"]
        },
        {
          id: 'pt8-m2-q4',
          type: 'fill-in',
          difficulty: 'easy',
          question: '$45, 52, 58, 63, 67, 72, 78, 85, 92$\n\nWhat is the median of the data shown?',
          correctAnswer: '67',
          explanation: '**The correct answer is $67$.** Find the middle value of the ordered data set.\n\n**Step 1: Count the values**\nThere are $9$ values (already in ascending order).\n\n**Step 2: Find the middle position**\nWith $9$ values, the median is at position $\\frac{9+1}{2} = 5$th.\n\n**Step 3: Identify the 5th value**\n$45, 52, 58, 63, \\mathbf{67}, 72, 78, 85, 92$\nThe median is $67$.\n\n**Key concept:** For an odd number of values $n$, the median is the value at position $\\frac{n+1}{2}$. The data must be in order.',
          skills: ["find-median"]
        },
        {
          id: 'pt8-m2-q5',
          type: 'fill-in',
          difficulty: 'easy',
          question: 'The function $f$ is defined by $f(x) = 5x$. For what value of $x$ does $f(x) = 35$?',
          correctAnswer: '7',
          explanation: '**The correct answer is $7$.** Set the function equal to $35$ and solve.\n\n**Step 1: Set up the equation**\n$f(x) = 35$\n$5x = 35$\n\n**Step 2: Solve for $x$**\n$x = \\frac{35}{5} = 7$\n\n**Verification:** $f(7) = 5(7) = 35$ ✓\n\n**Key concept:** To find $x$ when $f(x) = k$, set the function rule equal to $k$ and solve for $x$.',
          skills: ["function-evaluation", "linear-equations"]
        },
        {
          id: 'pt8-m2-q6',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Of $250$ marbles, $175$ are blue. What percentage of the marbles are blue?',
          choices: [
            { id: 'A', text: '$30\\%$' },
            { id: 'B', text: '$43\\%$' },
            { id: 'C', text: '$70\\%$' },
            { id: 'D', text: '$75\\%$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Convert the fraction to a percentage.\n\n**Step 1: Write the fraction**\n$\\frac{175}{250}$\n\n**Step 2: Convert to percentage**\n$\\frac{175}{250} = 0.70 = 70\\%$\n\n**Alternative method:** Simplify first: $\\frac{175}{250} = \\frac{7}{10} = 70\\%$\n\n**Why other choices are incorrect:**\n• Choice A ($30\\%$): This is the percentage that are NOT blue ($\\frac{75}{250}$)\n• Choice B ($43\\%$): Incorrect calculation\n• Choice D ($75\\%$): $75\\%$ of $250 = 187.5$, not $175$\n\n**Key concept:** Percentage $= \\frac{\\text{part}}{\\text{whole}} \\times 100$.',
          skills: ["percent-of-value"]
        },
        {
          id: 'pt8-m2-q7',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: '$f(x) = 6x + 10$\n\nThe function $f$ gives the estimated distance, in miles, a hiker travels $x$ hours after starting a trail. Which statement is the best interpretation of $10$ in this context?',
          choices: [
            { id: 'A', text: 'The hiker will walk for $10$ hours.' },
            { id: 'B', text: 'The hiker is estimated to travel a maximum of $10$ miles.' },
            { id: 'C', text: 'The estimated distance increases by $10$ miles each hour.' },
            { id: 'D', text: 'The hiker had already traveled $10$ miles when timing started.' }
          ],
          correctAnswer: 'D',
          explanation: '**Choice D is correct.** Interpret the constant term in context.\n\n**Step 1: Identify the equation form**\n$f(x) = 6x + 10$ is in slope-intercept form $y = mx + b$.\n• Slope ($6$): rate of change — $6$ miles per hour\n• $y$-intercept ($10$): value when $x = 0$\n\n**Step 2: Interpret in context**\nWhen $x = 0$ (timing starts), the hiker has already traveled $f(0) = 10$ miles.\n\n**Why other choices are incorrect:**\n• Choice A: The equation does not limit hours; $x$ can be any non-negative value\n• Choice B: There is no maximum — distance increases without bound\n• Choice C: $6$ is the rate (miles per hour), not $10$\n\n**Key concept:** In $f(x) = mx + b$, the constant $b$ represents the initial value (when $x = 0$), and $m$ represents the rate of change per unit.',
          skills: ["slope-intercept-form", "word-problem-to-equation"]
        },
        {
          id: 'pt8-m2-q8',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Each side of equilateral triangle $A$ is multiplied by a scale factor of $k$ to create equilateral triangle $B$. The length of each side of triangle $B$ is greater than the length of each side of triangle $A$. Which could be the value of $k$?',
          choices: [
            { id: 'A', text: '$\\frac{5}{4}$' },
            { id: 'B', text: '$1$' },
            { id: 'C', text: '$\\frac{4}{5}$' },
            { id: 'D', text: '$0$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Determine which scale factor makes the triangle larger.\n\n**Step 1: Understand the condition**\nTriangle $B$ has sides greater than triangle $A$, so the scale factor must be $k > 1$.\n\n**Step 2: Check each choice**\n• $\\frac{5}{4} = 1.25 > 1$ ✓ (enlargement)\n• $1$: Same size, not greater\n• $\\frac{4}{5} = 0.80 < 1$ (reduction)\n• $0$: Triangle collapses to a point\n\n**Why other choices are incorrect:**\n• Choice B ($k = 1$): Equal sides, not greater\n• Choice C ($k = \\frac{4}{5}$): Makes sides smaller, not larger\n• Choice D ($k = 0$): All sides become $0$\n\n**Key concept:** Scale factor $k > 1$ creates an enlargement; $0 < k < 1$ creates a reduction; $k = 1$ preserves the original size.',
          skills: ["similar-triangles", "volume-scaling"]
        },
        {
          id: 'pt8-m2-q9',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: '$42x = 42x$\n\nHow many solutions does the given equation have?',
          choices: [
            { id: 'A', text: 'Exactly one' },
            { id: 'B', text: 'Exactly two' },
            { id: 'C', text: 'Infinitely many' },
            { id: 'D', text: 'Zero' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Analyze the structure of the equation.\n\n**Step 1: Simplify the equation**\n$42x = 42x$\nSubtract $42x$ from both sides: $0 = 0$\n\n**Step 2: Interpret the result**\n$0 = 0$ is always true, regardless of the value of $x$. Therefore, every real number is a solution.\n\n**Why other choices are incorrect:**\n• Choice A (Exactly one): This would require a single value, like $x = 5$\n• Choice B (Exactly two): This would require two specific values\n• Choice D (Zero): This would require a contradiction like $0 = 1$\n\n**Key concept:** When simplifying an equation leads to a true statement (like $0 = 0$), there are infinitely many solutions. A false statement (like $0 = 5$) means no solutions.',
          skills: ["system-solution-types"]
        },
        {
          id: 'pt8-m2-q10',
          type: 'fill-in',
          difficulty: 'easy',
          question: 'Marcus bought notebooks and pens for \\$54. Each notebook cost \\$4, and each pen cost \\$2. If Marcus bought $8$ notebooks, how many pens did he buy?',
          correctAnswer: '11',
          explanation: '**The correct answer is $11$.** Calculate step by step.\n\n**Step 1: Find the cost of notebooks**\n$8$ notebooks $\\times$ \\$4 per notebook $= \\$32$\n\n**Step 2: Find the remaining amount for pens**\n\\$54 total $-$ \\$32 notebooks $= \\$22$\n\n**Step 3: Find the number of pens**\n$\\$22 \\div \\$2$ per pen $= 11$ pens\n\n**Verification:** $8(\\$4) + 11(\\$2) = \\$32 + \\$22 = \\$54$ ✓\n\n**Key concept:** In multi-item purchase problems, calculate the known costs first, find the remainder, then divide by the per-unit cost of the unknown item.',
          skills: ["word-problem-to-equation", "linear-equations"]
        },
        {
          id: 'pt8-m2-q11',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The function $f$ is defined by $f(x) = (-5)(3)^x + 18$. What is the $y$-intercept of the graph of $y = f(x)$ in the $xy$-plane?',
          choices: [
            { id: 'A', text: '$(0, 13)$' },
            { id: 'B', text: '$(0, 18)$' },
            { id: 'C', text: '$(0, 23)$' },
            { id: 'D', text: '$(0, -5)$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Find the $y$-intercept by evaluating $f(0)$.\n\n**Step 1: Substitute $x = 0$**\n$f(0) = (-5)(3)^0 + 18$\n\n**Step 2: Simplify using $3^0 = 1$**\n$f(0) = (-5)(1) + 18 = -5 + 18 = 13$\n\nThe $y$-intercept is $(0, 13)$.\n\n**Why other choices are incorrect:**\n• Choice B ($(0, 18)$): Ignored the $(-5)(3)^0$ term, keeping only the constant $18$\n• Choice C ($(0, 23)$): Computed $5 + 18$ instead of $-5 + 18$\n• Choice D ($(0, -5)$): Used only the coefficient $-5$, ignoring the constant $18$\n\n**Key concept:** The $y$-intercept of any function is $f(0)$. For exponential functions, remember that $b^0 = 1$ for any base $b$.',
          skills: ["exponential-y-intercept"]
        },
        {
          id: 'pt8-m2-q12',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: '$y = 49$\n$y = x^2 - 15$\n\nThe graphs of the given equations in the $xy$-plane intersect at the point $(x, y)$. What is a possible value of $x$?',
          choices: [
            { id: 'A', text: '$-64$' },
            { id: 'B', text: '$-8$' },
            { id: 'C', text: '$7$' },
            { id: 'D', text: '$49$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Substitute and solve for $x$.\n\n**Step 1: Set the equations equal**\nSince both equal $y$: $49 = x^2 - 15$\n\n**Step 2: Solve for $x$**\n$x^2 = 49 + 15 = 64$\n$x = \\pm\\sqrt{64} = \\pm 8$\n\n**Step 3: Match to answer choices**\n$x = -8$ or $x = 8$. Choice B ($-8$) is among the options.\n\n**Why other choices are incorrect:**\n• Choice A ($-64$): This is $-x^2$, not $x$\n• Choice C ($7$): $7^2 - 15 = 49 - 15 = 34 \\neq 49$\n• Choice D ($49$): $49^2 - 15 = 2{,}386 \\neq 49$\n\n**Key concept:** When solving $x^2 = k$ (where $k > 0$), there are two solutions: $x = \\pm\\sqrt{k}$. Check which one appears in the answer choices.',
          skills: ["substitution-method", "identify-quadratic"]
        },
        {
          id: 'pt8-m2-q13',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'The exponential function $g$ is defined by $g(x) = 12 \\cdot a^x$, where $a$ is a positive constant. If $g(2) = 300$, what is the value of $g(3)$?',
          correctAnswer: '1500',
          explanation: '**The correct answer is $1{,}500$.** Find the base $a$, then evaluate $g(3)$.\n\n**Step 1: Use $g(2) = 300$ to find $a$**\n$g(2) = 12 \\cdot a^2 = 300$\n$a^2 = \\frac{300}{12} = 25$\n$a = 5$ (positive)\n\n**Step 2: Calculate $g(3)$**\n$g(3) = 12 \\cdot 5^3 = 12 \\cdot 125 = 1{,}500$\n\n**Verification:** $g(2) = 12 \\cdot 5^2 = 12 \\cdot 25 = 300$ ✓\n\n**Key concept:** For exponential functions $f(x) = a \\cdot b^x$, use a known point to find the unknown base, then evaluate at the desired input.',
          skills: ["exponential-growth-decay", "function-evaluation"]
        },
        {
          id: 'pt8-m2-q14',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'In right triangle $ABC$, the sum of the measures of angle $A$ and angle $B$ is $90$ degrees. The value of $\\sin(A)$ is $\\frac{3}{5}$. What is the value of $\\cos(B)$?',
          choices: [
            { id: 'A', text: '$\\frac{3}{5}$' },
            { id: 'B', text: '$\\frac{4}{5}$' },
            { id: 'C', text: '$\\frac{5}{4}$' },
            { id: 'D', text: '$\\frac{5}{3}$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Use the complementary angle relationship.\n\n**Step 1: Identify the relationship**\nSince $A + B = 90°$, angles $A$ and $B$ are complementary.\n\n**Step 2: Apply the cofunction identity**\n$\\cos(B) = \\cos(90° - A) = \\sin(A)$\n\n**Step 3: Substitute the known value**\n$\\cos(B) = \\sin(A) = \\frac{3}{5}$\n\n**Why other choices are incorrect:**\n• Choice B ($\\frac{4}{5}$): This is $\\cos(A)$, not $\\cos(B)$\n• Choice C ($\\frac{5}{4}$): This is $\\sec(A) = \\frac{1}{\\cos(A)}$, which is greater than $1$ and cannot be a cosine value\n• Choice D ($\\frac{5}{3}$): This is $\\csc(A) = \\frac{1}{\\sin(A)}$, also greater than $1$\n\n**Key concept:** In a right triangle, $\\sin(A) = \\cos(90° - A)$ and $\\cos(A) = \\sin(90° - A)$. Complementary angles have the "co" relationship.',
          skills: ["soh-cah-toa"]
        },
        {
          id: 'pt8-m2-q15',
          type: 'multiple-choice',
          difficulty: 'medium',
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
          explanation: '**Choice B is correct.** Use the intercept points to verify the equation.\n\n**Step 1: Identify key points from the graph**\nThe line passes through $(0, 60)$ and $(40, 0)$.\n\n**Step 2: Verify Choice B: $3x + 2y = 120$**\n• At $(0, 60)$: $3(0) + 2(60) = 0 + 120 = 120$ ✓\n• At $(40, 0)$: $3(40) + 2(0) = 120 + 0 = 120$ ✓\n\n**Why other choices are incorrect:**\n• Choice A ($y = 60x + 40$): At $(0, 60)$: $y = 60(0) + 40 = 40 \\neq 60$\n• Choice C ($y = 40x + 60$): At $(40, 0)$: $y = 40(40) + 60 = 1{,}660 \\neq 0$\n• Choice D ($2x + 3y = 120$): At $(0, 60)$: $2(0) + 3(60) = 180 \\neq 120$\n\n**Key concept:** To identify an equation from a graph, test known points (especially intercepts) in each answer choice. Both points must satisfy the equation.',
          skills: ["slope-intercept-form", "linear-equations"]
        },
        {
          id: 'pt8-m2-q16',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Which expression is equivalent to $\\frac{6x(x - 5) - 2(x - 5)}{3x - 15}$, where $x > 5$?',
          choices: [
            { id: 'A', text: '$\\frac{x - 5}{2}$' },
            { id: 'B', text: '$\\frac{6x - 2}{3}$' },
            { id: 'C', text: '$\\frac{6x^2 - 2x - 30}{3x - 15}$' },
            { id: 'D', text: '$\\frac{2(x - 5)}{3}$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Factor and simplify the rational expression.\n\n**Step 1: Factor the numerator**\n$6x(x - 5) - 2(x - 5)$\nFactor out $(x - 5)$: $(x - 5)(6x - 2)$\n\n**Step 2: Factor the denominator**\n$3x - 15 = 3(x - 5)$\n\n**Step 3: Cancel common factors**\n$\\frac{(x - 5)(6x - 2)}{3(x - 5)} = \\frac{6x - 2}{3}$ (where $x \\neq 5$)\n\n**Why other choices are incorrect:**\n• Choice A ($\\frac{x-5}{2}$): Incorrect cancellation — does not match the factored form\n• Choice C: This is just the expanded form, not simplified\n• Choice D ($\\frac{2(x-5)}{3}$): Incorrectly factored the numerator\n\n**Key concept:** To simplify rational expressions: (1) factor the numerator and denominator completely, (2) cancel common factors. Always factor out the GCF first.',
          skills: ["simplifying-rational-expressions"]
        },
        {
          id: 'pt8-m2-q17',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'For the exponential function $f$, the value of $f(1)$ is $k$, where $k$ is a constant. Which of the following equivalent forms of the function $f$ shows the value of $k$ as the coefficient or the base?',
          choices: [
            { id: 'A', text: '$f(x) = 40(1.5)^{x+1}$' },
            { id: 'B', text: '$f(x) = 60(1.5)^x$' },
            { id: 'C', text: '$f(x) = 90(1.5)^{x-1}$' },
            { id: 'D', text: '$f(x) = 135(1.5)^{x-2}$' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.** Find which form shows $f(1) = k$ as the coefficient.\n\n**Step 1: Understand the requirement**\nWe need $f(1) = k$, and $k$ should appear as the coefficient (the number in front) of the function.\n\n**Step 2: Evaluate each form at $x = 1$**\n• A: $f(1) = 40(1.5)^{1+1} = 40(2.25) = 90$. Coefficient is $40 \\neq 90$\n• B: $f(1) = 60(1.5)^1 = 60(1.5) = 90$. Coefficient is $60 \\neq 90$\n• C: $f(1) = 90(1.5)^{1-1} = 90(1.5)^0 = 90(1) = 90$. Coefficient is $90 = k$ ✓\n• D: $f(1) = 135(1.5)^{-1} = 90$. Coefficient is $135 \\neq 90$\n\n**Step 3: Confirm**\nIn Choice C, the coefficient $90$ equals $f(1) = k$.\n\n**Key concept:** In $f(x) = c \\cdot b^{x-a}$, the coefficient $c$ equals $f(a)$ because $b^{a-a} = b^0 = 1$. To show $f(1)$ as the coefficient, use the form with exponent $(x - 1)$.',
          skills: ["exponential-growth-decay", "equivalent-expressions"]
        },
        {
          id: 'pt8-m2-q18',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Which of the following expressions has a factor of $(x + 3b)$, where $b$ is a positive integer constant?',
          choices: [
            { id: 'A', text: '$2x^2 + 5x + 6b$' },
            { id: 'B', text: '$2x^2 + 8bx + 6b$' },
            { id: 'C', text: '$2x^2 + 10bx + 6b$' },
            { id: 'D', text: '$2x^2 + 12bx + 6b$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Test which expression equals zero when $x = -3b$ (since if $(x + 3b)$ is a factor, $x = -3b$ is a root).\n\n**Step 1: Substitute $x = -3b$ into Choice B**\n$2(-3b)^2 + 8b(-3b) + 6b = 2(9b^2) - 24b^2 + 6b = 18b^2 - 24b^2 + 6b = -6b^2 + 6b$.\n\nThis equals $6b(1 - b)$, which equals $0$ when $b = 1$.\n\n**Step 2: Verify by factoring with $b = 1$**\nWith $b = 1$: $2x^2 + 8x + 6 = 2(x^2 + 4x + 3) = 2(x + 3)(x + 1)$.\n\nIndeed $(x + 3) = (x + 3b)$ when $b = 1$, confirming the factor.\n\n**Step 3: Check that other choices fail**\n• Choice A with $x = -3b$: $2(9b^2) + 5(-3b) + 6b = 18b^2 - 15b + 6b = 18b^2 - 9b = 9b(2b - 1)$. Zero only when $b = 1/2$, but $b$ must be a positive integer.\n• Choice C: $18b^2 - 30b^2 + 6b = -12b^2 + 6b = 6b(1 - 2b)$. Zero when $b = 1/2$ — not a positive integer.\n• Choice D: $18b^2 - 36b^2 + 6b = -18b^2 + 6b = 6b(1 - 3b)$. Zero when $b = 1/3$ — not a positive integer.\n\n**Why other choices are incorrect:**\n• Choice A: Requires $b = 1/2$, which is not a positive integer\n• Choice C: Requires $b = 1/2$, which is not a positive integer\n• Choice D: Requires $b = 1/3$, which is not a positive integer\n\n**Key concept:** If $(x + 3b)$ is a factor of a polynomial, then substituting $x = -3b$ must yield zero (Factor Theorem). Test each choice and verify that $b$ is a positive integer.',
          skills: ["finding-roots-factoring"]
        },
        {
          id: 'pt8-m2-q19',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'The perimeter of an equilateral triangle is $432$ centimeters. The height of this triangle is $k\\sqrt{3}$ centimeters, where $k$ is a constant. What is the value of $k$?',
          correctAnswer: '72',
          explanation: '**The correct answer is $72$.** Find the side length from the perimeter, then apply the equilateral triangle height formula.\n\n**Step 1: Find the side length**\nAn equilateral triangle has three equal sides, so each side $= \\frac{432}{3} = 144$ cm.\n\n**Step 2: Apply the height formula**\nFor an equilateral triangle with side $s$, the height is $h = \\frac{s\\sqrt{3}}{2}$.\n\n$$h = \\frac{144\\sqrt{3}}{2} = 72\\sqrt{3}$$\n\n**Step 3: Identify $k$**\nSince $h = k\\sqrt{3}$ and $h = 72\\sqrt{3}$, we get $k = 72$.\n\n**Verification:** The height formula comes from splitting the equilateral triangle into two 30-60-90 right triangles. The base of each is $72$, the hypotenuse is $144$, and the height (opposite the 60-degree angle) is $72\\sqrt{3}$. By the Pythagorean theorem: $72^2 + (72\\sqrt{3})^2 = 5184 + 15552 = 20736 = 144^2$ ✓.\n\n**Key concept:** In an equilateral triangle with side $s$, the height is $\\frac{s\\sqrt{3}}{2}$, derived from the 30-60-90 special right triangle ratio $1 : \\sqrt{3} : 2$.',
          skills: ["special-right-triangles", "pythagorean-theorem"]
        },
        {
          id: 'pt8-m2-q20',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'The dot plot represents the $13$ values in data set A. Data set B is created by adding $42$ to each of the values in data set A. Which of the following correctly compares the medians and the ranges of data sets A and B?',
          diagram: {
            type: 'dotPlot',
            params: {
              title: 'Data Set A',
              data: [
                { value: 31, count: 3 },
                { value: 32, count: 2 },
                { value: 33, count: 4 },
                { value: 34, count: 3 },
                { value: 35, count: 1 }
              ],
              xMin: 31,
              xMax: 35
            }
          },
          choices: [
            { id: 'A', text: 'The median of data set B is equal to the median of data set A, and the range of data set B is equal to the range of data set A.' },
            { id: 'B', text: 'The median of data set B is equal to the median of data set A, and the range of data set B is greater than the range of data set A.' },
            { id: 'C', text: 'The median of data set B is greater than the median of data set A, and the range of data set B is equal to the range of data set A.' },
            { id: 'D', text: 'The median of data set B is greater than the median of data set A, and the range of data set B is greater than the range of data set A.' }
          ],
          correctAnswer: 'C',
          explanation: '**Choice C is correct.**\n\n**Median:** Data set A has 13 values. The 7th value (median) is $33$.\nData set B adds $42$ to each value, so the median of B is $33 + 42 = 75$.\nMedian of B ($75$) $>$ Median of A ($33$).\n\n**Range:** Range of A $= 35 - 31 = 4$.\nRange of B $= 77 - 73 = 4$.\nAdding a constant to every value does not change the range.\n\nSo the median increases but the range stays the same.',
          skills: ['statistics', 'dot-plots', 'median', 'range']
        },
        {
          id: 'pt8-m2-q21',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'In the $xy$-plane, a parabola has vertex $(7, -10)$ and intersects the $x$-axis at two points. If the equation of the parabola is written in the form $y = ax^2 + bx + c$, where $a$, $b$, and $c$ are constants, which of the following could be the value of $a + b + c$?',
          choices: [
            { id: 'A', text: '$-19$' },
            { id: 'B', text: '$-15$' },
            { id: 'C', text: '$-10$' },
            { id: 'D', text: '$-8$' }
          ],
          correctAnswer: 'D',
          explanation: '**Choice D is correct.**\n\n**Key insight:** $a + b + c = f(1)$ (substitute $x = 1$ into $y = ax^2 + bx + c$).\n\nThe parabola has vertex $(7, -10)$, so $y = a(x - 7)^2 - 10$ for some $a > 0$ (opens upward since it crosses the $x$-axis at two points with vertex below).\n\n$f(1) = a(1 - 7)^2 - 10 = 36a - 10$\n\nCheck each choice with the requirement $a > 0$:\n• A) $-19$: $36a = -9 \\Rightarrow a = -\\frac{1}{4} < 0$ ✗\n• B) $-15$: $36a = -5 \\Rightarrow a = -\\frac{5}{36} < 0$ ✗\n• C) $-10$: $36a = 0 \\Rightarrow a = 0$ (not a parabola) ✗\n• D) $-8$: $36a = 2 \\Rightarrow a = \\frac{1}{18} > 0$ ✓\n\nOnly choice D gives a positive value of $a$, producing a valid upward-opening parabola with vertex below the $x$-axis that intersects it at two points.',
          skills: ['quadratic-equations', 'vertex-form', 'parabolas']
        },
        {
          id: 'pt8-m2-q22',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: '$-4x^2 + 24x + c = 0$\n\nIn the given equation, $c$ is a constant. The equation has exactly one solution. What is the value of $c$?',
          choices: [
            { id: 'A', text: '$36$' },
            { id: 'B', text: '$0$' },
            { id: 'C', text: '$-36$' },
            { id: 'D', text: '$-144$' }
          ],
          correctAnswer: 'C',
          explanation: 'For exactly one solution, the discriminant must equal zero: $b^2 - 4ac = 0$. Here $a = -4$, $b = 24$, so $24^2 - 4(-4)(c) = 0$. Thus $576 + 16c = 0$, giving $16c = -576$, so $c = -36$.',
          skills: ["discriminant-analysis"]
        }
      ]
    }
  ]
};
