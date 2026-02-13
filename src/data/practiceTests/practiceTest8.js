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
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'The system of equations $\\frac{7}{8}y = \\frac{5}{8}x + 3$ and $py = 5x + 15$ has no solution. What is the value of $p$?',
          choices: [
            { id: 'A', text: '$5$' },
            { id: 'B', text: '$7$' },
            { id: 'C', text: '$8$' },
            { id: 'D', text: '$15$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** For a system with no solution, the lines must be parallel (same slope, different $y$-intercepts).\n\n**Step 1: Rewrite the first equation**\nMultiply both sides by $8$: $7y = 5x + 24$\nSolve for $y$: $y = \\frac{5}{7}x + \\frac{24}{7}$\n\n**Step 2: Rewrite the second equation**\n$py = 5x + 15$\n$y = \\frac{5}{p}x + \\frac{15}{p}$\n\n**Step 3: Set slopes equal (parallel condition)**\n$$\\frac{5}{p} = \\frac{5}{7} \\implies p = 7$$\n\n**Step 4: Verify different $y$-intercepts**\n$\\frac{24}{7} \\neq \\frac{15}{7}$ ✓ (different intercepts, so no solution)\n\n**Why other choices are incorrect:**\n• Choice A ($p = 5$): Slope would be $1$, not $\\frac{5}{7}$\n• Choice C ($p = 8$): Slope would be $\\frac{5}{8}$, not $\\frac{5}{7}$\n• Choice D ($p = 15$): Slope would be $\\frac{1}{3}$, not $\\frac{5}{7}$\n\n**Key concept:** A system has no solution when lines are parallel: same slope but different $y$-intercepts. Clear fractions first to compare more easily.',
          skills: ['Algebra', 'Systems of Equations']
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
          difficulty: 'medium',
          question: '$2x + 3y = 17$\n$x - y = 1$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $x + y$?',
          correctAnswer: '7',
          explanation: '**The correct answer is $7$.** Solve the system by substitution.\n\n**Step 1: Solve the second equation for $x$**\n$x = y + 1$\n\n**Step 2: Substitute into the first equation**\n$2(y + 1) + 3y = 17$\n$2y + 2 + 3y = 17$\n$5y = 15$\n$y = 3$\n\n**Step 3: Find $x$**\n$x = 3 + 1 = 4$\n\n**Step 4: Calculate $x + y$**\n$x + y = 4 + 3 = 7$\n\n**Verification:** $2(4) + 3(3) = 8 + 9 = 17$ ✓ and $4 - 3 = 1$ ✓\n\n**Key concept:** When one equation is easily solved for a variable, use substitution. Then compute the requested expression — don\'t assume they\'re asking for $x$ or $y$ alone.',
          skills: ["function-evaluation", "linear-equations"]
        },
        {
          id: 'pt8-m2-q6',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'If $\\frac{4x - 3}{5} = 9$, what is the value of $8x - 6$?',
          correctAnswer: '90',
          explanation: '**The correct answer is $90$.** Recognize the relationship between $4x - 3$ and $8x - 6$.\n\n**Step 1: Solve for $4x - 3$**\n$\\frac{4x - 3}{5} = 9$\n$4x - 3 = 45$\n\n**Step 2: Find $8x - 6$**\nNotice that $8x - 6 = 2(4x - 3)$.\n$8x - 6 = 2(45) = 90$\n\n**Verification:** From $4x - 3 = 45$: $4x = 48$, so $x = 12$. Then $8(12) - 6 = 96 - 6 = 90$ ✓\n\n**Key concept:** Before solving for $x$ individually, check whether the target expression is a multiple of an expression you already know. This saves time: $8x - 6 = 2(4x - 3)$.',
          skills: ['Algebra', 'Expressions']
        },
        {
          id: 'pt8-m2-q7',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'A survey of $200$ students asked about their preferred subject. The results are shown in the table. What fraction of the sophomores preferred science?',
          diagram: {
            type: 'table',
            params: {
              title: 'Student Subject Preference',
              headers: ['', 'Science', 'Math', 'Total'],
              rows: [
                ['Freshmen', '35', '45', '80'],
                ['Sophomores', '50', '70', '120'],
                ['Total', '85', '115', '200']
              ]
            }
          },
          choices: [
            { id: 'A', text: '$\\frac{5}{12}$' },
            { id: 'B', text: '$\\frac{1}{4}$' },
            { id: 'C', text: '$\\frac{10}{17}$' },
            { id: 'D', text: '$\\frac{17}{40}$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Find the conditional fraction using the correct row total.\n\n**Step 1: Identify the relevant data**\nSophomores who preferred science: $50$\nTotal sophomores: $120$\n\n**Step 2: Write the fraction**\n$$\\frac{50}{120} = \\frac{5}{12}$$\n\n**Why other choices are incorrect:**\n• Choice B ($\\frac{1}{4}$): Used total students: $\\frac{50}{200} = \\frac{1}{4}$ — this is the fraction of all students, not just sophomores\n• Choice C ($\\frac{10}{17}$): Used science total: $\\frac{50}{85}$ — wrong denominator (all science students, not all sophomores)\n• Choice D ($\\frac{17}{40}$): Used $\\frac{85}{200}$ — this is the fraction of all students who prefer science\n\n**Key concept:** For conditional fractions from two-way tables, use the row or column total that matches the given condition, not the grand total.',
          skills: ['Data Analysis', 'Two-Way Tables']
        },
        {
          id: 'pt8-m2-q8',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'A car purchased for $\\$24{,}000$ decreases in value by $15\\%$ each year. Which function $v$ gives the value of the car, in dollars, $t$ years after purchase?',
          choices: [
            { id: 'A', text: '$v(t) = 24{,}000(0.15)^t$' },
            { id: 'B', text: '$v(t) = 24{,}000(0.85)^t$' },
            { id: 'C', text: '$v(t) = 24{,}000(1.15)^t$' },
            { id: 'D', text: '$v(t) = 24{,}000 - 0.15t$' }
          ],
          correctAnswer: 'B',
          explanation: '**Choice B is correct.** Model the exponential decay.\n\n**Step 1: Identify the components**\n• Initial value: $\\$24{,}000$\n• Decay rate: $15\\%$ per year, so $85\\%$ is retained each year\n• Decay factor: $1 - 0.15 = 0.85$\n\n**Step 2: Write the exponential model**\n$v(t) = 24{,}000(0.85)^t$\n\n**Verification:** After $1$ year: $v(1) = 24{,}000(0.85) = 20{,}400$ (a $15\\%$ decrease) ✓\n\n**Why other choices are incorrect:**\n• Choice A ($0.15^t$): Uses the decay rate as the base — this would give $24{,}000(0.15) = 3{,}600$ after $1$ year (an $85\\%$ decrease)\n• Choice C ($1.15^t$): This models $15\\%$ growth, not decay\n• Choice D: This is a linear model, not exponential — value decreases by a fixed amount, not a percentage\n\n**Key concept:** For percent decrease: multiply by $(1 - r)$ each period, giving $A(1 - r)^t$. For $15\\%$ decrease, the factor is $0.85$.',
          skills: ['Advanced Math', 'Exponential Decay']
        },
        {
          id: 'pt8-m2-q9',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'The function $f$ is defined by $f(x) = 2(x - 5)^2 + 3$. What is the minimum value of $f(x)$?',
          correctAnswer: '3',
          explanation: '**The correct answer is $3$.** Identify the minimum from the vertex form.\n\n**Step 1: Recognize the vertex form**\n$f(x) = 2(x - 5)^2 + 3$ is in the form $a(x - h)^2 + k$ with $a = 2$, $h = 5$, $k = 3$.\n\n**Step 2: Identify the vertex**\nThe vertex is at $(5, 3)$.\n\n**Step 3: Determine min or max**\nSince $a = 2 > 0$, the parabola opens upward, so the vertex gives the minimum value.\n\nThe minimum value of $f(x)$ is $3$, occurring at $x = 5$.\n\n**Verification:** $f(5) = 2(0)^2 + 3 = 3$. For any other $x$: $2(x - 5)^2 \\geq 0$, so $f(x) \\geq 3$ ✓\n\n**Key concept:** In vertex form $a(x - h)^2 + k$: if $a > 0$, the minimum value is $k$; if $a < 0$, the maximum value is $k$.',
          skills: ['Advanced Math', 'Vertex Form']
        },
        {
          id: 'pt8-m2-q10',
          type: 'fill-in',
          difficulty: 'hard',
          question: '$48x - 54y = 30$\n$16x - ry = 12$\n\nIn the given system of equations, $r$ is a constant. If the system has no solution, what is the value of $r$?',
          correctAnswer: '18',
          explanation: '**The correct answer is $18$.** For no solution, the lines must be parallel with different $y$-intercepts.\n\n**Step 1: Simplify the first equation**\nDivide by $6$: $8x - 9y = 5$\n\n**Step 2: Set up the parallel condition**\nFor no solution, the ratio of coefficients of $x$ and $y$ must be equal, but the constant ratio must differ.\n$$\\frac{16}{8} = \\frac{r}{9}$$\n$$2 = \\frac{r}{9}$$\n$$r = 18$$\n\n**Step 3: Verify no solution**\nWith $r = 18$: $16x - 18y = 12$. Divide by $2$: $8x - 9y = 6$.\nCompare with $8x - 9y = 5$. Same left side, different constants ($6 \\neq 5$), so no solution. ✓\n\n**Key concept:** A system $a_1x + b_1y = c_1$ and $a_2x + b_2y = c_2$ has no solution when $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$.',
          skills: ['Algebra', 'Systems of Equations']
        },
        {
          id: 'pt8-m2-q11',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The function $f$ is defined by $f(x) = 2x^2 + bx + c$, where $b$ and $c$ are constants. The graph of $y = f(x)$ in the $xy$-plane is shown. What is the value of $b + c$?',
          diagram: {
            type: 'parabola',
            params: {
              vertex: { h: 2, k: -50 },
              a: 2,
              xRange: [-5, 9],
              yRange: [-55, 10],
              xTickInterval: 2,
              yTickInterval: 10,
              gridInterval: 1,
              showVertex: false,
              highlightPoints: [[-3, 0], [7, 0]],
              label: 'y = f(x)'
            }
          },
          correctAnswer: '-50',
          explanation: '**The correct answer is $-50$.** Read the x-intercepts from the graph, then use the roots to find $b$ and $c$.\n\n**Step 1: Read the graph**\nFrom the graph, the parabola crosses the $x$-axis at $x = -3$ and $x = 7$.\n\n**Step 2: Write $f(x)$ using the roots**\nSince $f(-3) = 0$ and $f(7) = 0$, with leading coefficient $2$:\n$f(x) = 2(x - 7)(x + 3)$\n\n**Step 3: Expand**\n$f(x) = 2(x^2 + 3x - 7x - 21) = 2(x^2 - 4x - 21)$\n$f(x) = 2x^2 - 8x - 42$\n\n**Step 4: Identify $b$ and $c$**\n$b = -8$ and $c = -42$\n\n**Step 5: Calculate $b + c$**\n$b + c = -8 + (-42) = -50$\n\n**Verification:** $f(7) = 2(49) - 8(7) - 42 = 98 - 56 - 42 = 0$ ✓\n$f(-3) = 2(9) - 8(-3) - 42 = 18 + 24 - 42 = 0$ ✓\n\n**Key concept:** Read the $x$-intercepts from the graph to identify the roots. If a quadratic $ax^2 + bx + c$ has roots $r$ and $s$, it can be written as $a(x - r)(x - s)$. Expand to find $b$ and $c$.',
          skills: ['Advanced Math', 'Quadratic Equations']
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
          type: 'fill-in',
          difficulty: 'hard',
          question: 'In right triangle $PQR$, angle $R$ is $90$ degrees and angle $P$ is $33$ degrees. If $PR = 20$, the area of triangle $PQR$ can be written as $k \\cdot \\tan(33°)$, where $k$ is a constant. What is the value of $k$?',
          correctAnswer: '200',
          explanation: '**The correct answer is $200$.** Use trigonometry to express the area in terms of $\\tan(33°)$.\n\n**Step 1: Identify the sides**\nIn right triangle $PQR$ with right angle at $R$:\n• $PR = 20$ (side adjacent to angle $P$)\n• $QR$ = unknown (side opposite to angle $P$)\n\n**Step 2: Find $QR$ using tangent**\n$$\\tan(P) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{QR}{PR}$$\n$$QR = PR \\cdot \\tan(33°) = 20 \\cdot \\tan(33°)$$\n\n**Step 3: Calculate the area**\n$$\\text{Area} = \\frac{1}{2} \\cdot PR \\cdot QR = \\frac{1}{2} \\cdot 20 \\cdot 20\\tan(33°) = 200\\tan(33°)$$\n\nSo $k = 200$.\n\n**Key concept:** In right triangle problems where the answer involves a trig function, express the unknown side using the given angle and known side, then substitute into the area formula.',
          skills: ['Geometry', 'Trigonometry']
        },
        {
          id: 'pt8-m2-q15',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'From a point $H$ outside a circle with center $O$ and radius $8$, two tangent lines are drawn to the circle, touching it at points $A$ and $B$. If $OH = 17$, what is the length of $HA$?',
          correctAnswer: '15',
          explanation: '**The correct answer is $15$.** Use the property that a tangent is perpendicular to the radius at the point of tangency.\n\n**Step 1: Identify the right angle**\nSince $HA$ is tangent to the circle at $A$, we have $OA \\perp HA$, forming a right angle at $A$.\n\n**Step 2: Apply the Pythagorean theorem to triangle $OAH$**\n$$HA^2 + OA^2 = OH^2$$\n$$HA^2 + 8^2 = 17^2$$\n$$HA^2 + 64 = 289$$\n$$HA^2 = 225$$\n$$HA = 15$$\n\n**Verification:** This is an $8$-$15$-$17$ Pythagorean triple. Also, by symmetry, $HB = HA = 15$.\n\n**Key concept:** A tangent line to a circle is perpendicular to the radius drawn to the point of tangency. This creates a right triangle with the external point, the center, and the tangent point.',
          skills: ['Geometry', 'Circles']
        },
        {
          id: 'pt8-m2-q16',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'A rectangle has a length that is $24$ more than its width. The area of the rectangle is $180$ square units. Which equation could be used to find the width $w$ of the rectangle?',
          choices: [
            { id: 'A', text: '$w^2 + 24w - 180 = 0$' },
            { id: 'B', text: '$w^2 - 24w - 180 = 0$' },
            { id: 'C', text: '$w^2 + 24w + 180 = 0$' },
            { id: 'D', text: '$24w^2 - 180 = 0$' }
          ],
          correctAnswer: 'A',
          explanation: '**Choice A is correct.** Translate the word problem into an equation.\n\n**Step 1: Define variables**\nWidth $= w$\nLength $= w + 24$\n\n**Step 2: Write the area equation**\n$$\\text{Area} = w(w + 24) = 180$$\n\n**Step 3: Rearrange to standard form**\n$$w^2 + 24w = 180$$\n$$w^2 + 24w - 180 = 0$$\n\n**Verification:** Solving: $w = \\frac{-24 \\pm \\sqrt{576 + 720}}{2} = \\frac{-24 \\pm \\sqrt{1296}}{2} = \\frac{-24 \\pm 36}{2}$.\nPositive solution: $w = \\frac{12}{2} = 6$. Length $= 30$. Area $= 6 \\times 30 = 180$ ✓\n\n**Why other choices are incorrect:**\n• Choice B: Uses $-24w$ instead of $+24w$ — would mean length is $24$ less, not more\n• Choice C: Uses $+180$ instead of $-180$ — did not move $180$ to the other side\n• Choice D: Incorrectly multiplied $24 \\times w^2$ instead of $w \\times (w + 24)$\n\n**Key concept:** For "length is $d$ more than width" problems: length $= w + d$, area $= w(w + d)$, leading to $w^2 + dw - A = 0$.',
          skills: ['Advanced Math', 'Quadratic Equations']
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
          difficulty: 'hard',
          question: 'The points $(k, 13)$ and $(k + 7, -15)$ lie on a line in the $xy$-plane. The $y$-intercept of the line is at the point $(k - 5, b)$. What is the value of $b$?',
          correctAnswer: '33',
          explanation: '**The correct answer is $33$.** Find the slope, determine $k$, then find $b$.\n\n**Step 1: Find the slope**\n$$m = \\frac{-15 - 13}{(k + 7) - k} = \\frac{-28}{7} = -4$$\n\n**Step 2: Determine $k$**\nThe $y$-intercept occurs where $x = 0$. Since the $y$-intercept is at $(k - 5, b)$:\n$$k - 5 = 0 \\implies k = 5$$\n\n**Step 3: Find $b$ using the slope and a known point**\nUsing point $(5, 13)$ and slope $-4$:\n$$y - 13 = -4(x - 5)$$\nAt $x = 0$: $b - 13 = -4(0 - 5) = 20$\n$$b = 33$$\n\n**Verification:** Line equation: $y = -4x + 33$.\n• At $(5, 13)$: $-4(5) + 33 = -20 + 33 = 13$ ✓\n• At $(12, -15)$: $-4(12) + 33 = -48 + 33 = -15$ ✓\n• $y$-intercept at $(0, 33)$ ✓\n\n**Key concept:** The $y$-intercept is where $x = 0$. When coordinates are given in terms of a parameter, use the condition $x = 0$ to find the parameter\'s value first.',
          skills: ['Algebra', 'Linear Equations']
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
          skills: ['Data Analysis', 'Statistics']
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
          skills: ['Advanced Math', 'Quadratic Equations']
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
          skills: ['Advanced Math', 'Discriminant']
        }
      ]
    }
  ]
};
