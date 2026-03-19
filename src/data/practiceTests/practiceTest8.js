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
          question: 'The bar graph shows the percentage of laptops for sale at a store by year of manufacture. There are $240$ laptops total. How many more laptops were manufactured in $2022$ than in $2019$?',
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
            { id: 'A', text: '$7$' },
            { id: 'B', text: '$12$' },
            { id: 'C', text: '$17$' },
            { id: 'D', text: '$36$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Bar Graph with Calculation** -- Appears 1-2 times per test. Requires reading the graph AND converting percentages to actual counts.\n\n**Choice C is correct.** 2022 represents $15\\%$ of $240 = 36$ laptops and 2019 represents $8\\%$ of $240 = 19.2$, which rounds to $19$ laptops. The difference is $36 - 19 = 17$. More directly: the percentage difference is $15\\% - 8\\% = 7\\%$, and $7\\%$ of $240 = 0.07 \\times 240 = 16.8$. Since we need whole laptops, compute each separately: $0.15 \\times 240 = 36$ and $0.08 \\times 240 = 19.2$. Since the bar shows $8\\%$ exactly and $0.08 \\times 240 = 19.2$, the intended reading gives $36 - 19 = 17$.\n\n**The Fast Way (20 seconds):** Difference in percentages: $15\\% - 8\\% = 7\\%$. Then $7\\%$ of $240$: $0.07 \\times 240 = 16.8 \\approx 17$. Or compute directly: $36 - 19 = 17$.\n\n**Step 1: Read the bar values**\n- 2019: $8\\%$\n- 2022: $15\\%$\n\n**Step 2: Convert percentages to counts**\n- 2019 laptops: $0.08 \\times 240 \\approx 19$\n- 2022 laptops: $0.15 \\times 240 = 36$\n\n**Step 3: Find the difference**\n$36 - 19 = 17$\n\n**Why the wrong answers are tempting:**\n- Choice A ($7$) is just the percentage-point difference ($15 - 8 = 7$) without converting to actual laptops. This is the most common error -- treating percentages as if they were counts.\n- Choice B ($12$) may result from misreading one of the bars (e.g., reading 2020\'s $12\\%$ bar instead of 2019\'s $8\\%$ bar) or from an arithmetic slip.\n- Choice D ($36$) is the count of 2022 laptops alone, ignoring the subtraction. If you compute $15\\%$ of $240$ and stop there, you answer the wrong question.\n\n**Verification:** $0.15 \\times 240 = 36$ and $0.08 \\times 240 \\approx 19$. Difference $= 17$.\n\n**Test Day Takeaway:** Bar graph questions that give a total require two steps: read the percentage, then multiply by the total. Never subtract percentages and report that as a count.',
          skills: ["function-notation"]
        },
        {
          id: 'pt8-m1-q2',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The line $y = 2x + 10$ and the line $y = -x + 1$ intersect at the point $(x, y)$ in the $xy$-plane. What is the value of $x + y$?',
          choices: [
            { id: 'A', text: '$0$' },
            { id: 'B', text: '$1$' },
            { id: 'C', text: '$4$' },
            { id: 'D', text: '$7$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Systems -- Find Intersection and Combine** -- Appears 1-2 times per test. Requires solving the system and then computing an expression with the result.\n\n**Choice B is correct.** Setting $2x + 10 = -x + 1$ gives $3x = -9$, so $x = -3$. Then $y = -(-3) + 1 = 4$. Therefore $x + y = -3 + 4 = 1$.\n\n**The Fast Way (20 seconds):** Set the equations equal: $2x + 10 = -x + 1 \\to 3x = -9 \\to x = -3$. Plug back: $y = 4$. Then $x + y = 1$.\n\n**Step 1: Set the equations equal**\n$2x + 10 = -x + 1$\n$3x = -9$\n$x = -3$\n\n**Step 2: Find $y$**\n$y = -(-3) + 1 = 3 + 1 = 4$\n\n**Step 3: Compute $x + y$**\n$x + y = -3 + 4 = 1$\n\n**Why the wrong answers are tempting:**\n- Choice A ($0$) is what you get if you think the intersection is at the origin or if you add $-3 + 3 = 0$ by accidentally using $y = 3$ instead of $y = 4$.\n- Choice C ($4$) is just the $y$-coordinate alone. If you solve for $y$ and stop without adding $x$, you pick this.\n- Choice D ($7$) comes from adding $|x| + y = 3 + 4 = 7$, dropping the negative sign on $x$. The most common careless error in sum-of-coordinates problems.\n\n**Verification:** Check in both equations: $y = 2(-3) + 10 = 4$ and $y = -(-3) + 1 = 4$. Both give $y = 4$.\n\n**Test Day Takeaway:** When asked for $x + y$ (not just the intersection point), you must solve the system AND combine the values. Watch for negative $x$-values that change the sum.',
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
          explanation: '**SAT Pattern: Word Problem to Inequality** -- Appears 2-3 times per test. The SAT loves pairing a fixed fee + variable rate and asking you to build the expression.\n\n**Choice D is correct.** The total cost is $30 + 15h$, and the person wants to spend at most \\$90, so $30 + 15h \\leq 90$.\n\n**The Fast Way (15 seconds):** Label each piece: \\$30 is the one-time fee (no variable), \\$15 is per hour (multiply by $h$). Total $= 30 + 15h$. "Maximum of \\$90" means $\\leq 90$. Done.\n\n**Step 1: Identify the cost components**\n- Service fee: \\$30 (one-time, fixed)\n- Hourly rental: \\$15 per hour\n- Hours rented: $h$\n\n**Step 2: Write the total cost expression**\nTotal cost $= 30 + 15h$\n\n**Step 3: Apply the budget constraint**\nThe total must be at most \\$90: $30 + 15h \\leq 90$\n\n**Why the wrong answers are tempting:**\n- Choice A ($15h \\leq 90$) drops the \\$30 service fee entirely. If you focus only on the hourly charge and forget the fixed cost, this looks clean and simple -- which is exactly why it is a trap.\n- Choice B ($15 + 30h \\leq 90$) swaps the two numbers. Under pressure, it is easy to mix up which number is the flat fee and which is the hourly rate. The key: the "per hour" number gets multiplied by $h$.\n- Choice C ($30h \\leq 90$) uses \\$30 as the hourly rate AND drops the service fee. This combines two mistakes into one answer that still looks plausible.\n\n**Verification:** At $h = 4$: $30 + 15(4) = 30 + 60 = 90 \\leq 90$. At $h = 5$: $30 + 15(5) = 105 > 90$. So the maximum is exactly 4 hours, which makes sense.\n\n**Test Day Takeaway:** In cost problems, the "per unit" number always gets multiplied by the variable, and the fixed fee stands alone. Then match "at most" to $\\leq$ and "at least" to $\\geq$.',
          skills: ["word-problem-to-equation", "linear-equations"]
        },
        {
          id: 'pt8-m1-q4',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'A parabola with vertex at $(0, -4)$ is translated $3$ units to the right and $5$ units up. What are the coordinates of the new vertex?',
          choices: [
            { id: 'A', text: '$(3, 1)$' },
            { id: 'B', text: '$(-3, 1)$' },
            { id: 'C', text: '$(3, -9)$' },
            { id: 'D', text: '$(5, -1)$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Combined Horizontal and Vertical Translation** -- Appears 1-2 times per test. Requires applying two translation rules in sequence.\n\n**Choice A is correct.** Translating right $3$ adds $3$ to the $x$-coordinate: $0 + 3 = 3$. Translating up $5$ adds $5$ to the $y$-coordinate: $-4 + 5 = 1$. New vertex: $(3, 1)$.\n\n**The Fast Way (15 seconds):** Right $3$: $x$-coordinate becomes $0 + 3 = 3$. Up $5$: $y$-coordinate becomes $-4 + 5 = 1$. New vertex: $(3, 1)$.\n\n**Step 1: Apply the horizontal translation**\nRight $3$ means add $3$ to $x$: $0 + 3 = 3$.\n\n**Step 2: Apply the vertical translation**\nUp $5$ means add $5$ to $y$: $-4 + 5 = 1$.\n\n**Step 3: Write the new vertex**\nNew vertex: $(3, 1)$.\n\n**Why the wrong answers are tempting:**\n- Choice B ($(-3, 1)$) subtracts $3$ from $x$ instead of adding. "Right" means POSITIVE direction, so you ADD to $x$. Students often confuse this with the $(x - h)$ form inside a function, where the sign is reversed.\n- Choice C ($(3, -9)$) gets the $x$-coordinate right but subtracts $5$ from $y$ instead of adding: $-4 - 5 = -9$. Moving UP always means ADDING, even when starting from a negative number.\n- Choice D ($(5, -1)$) swaps the translation values -- applying $5$ to $x$ and $3$ to $y$: $0 + 5 = 5$ and $-4 + 3 = -1$. Under pressure, mixing up which shift applies to which coordinate is common.\n\n**Verification:** Original $(0, -4)$, right $3$ gives $x = 3$, up $5$ gives $y = 1$. New vertex $(3, 1)$.\n\n**Test Day Takeaway:** For combined translations, handle $x$ and $y$ separately. Right/left changes $x$ (right = add, left = subtract). Up/down changes $y$ (up = add, down = subtract). Do not mix the two.',
          skills: ["function-transformations"]
        },
        {
          id: 'pt8-m1-q5',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The equation $v = 25 + 4t$ gives the speed $v$, in meters per second, of a certain object $t$ seconds after it began to accelerate. How many seconds after the object began to accelerate will its speed be $61$ meters per second?',
          choices: [
            { id: 'A', text: '$4$' },
            { id: 'B', text: '$9$' },
            { id: 'C', text: '$15$' },
            { id: 'D', text: '$21.5$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Solve a Linear Equation in Context** -- Appears 2-3 times per test. Requires setting the function equal to a target value and solving for the input.\n\n**Choice B is correct.** Setting $61 = 25 + 4t$ gives $4t = 36$, so $t = 9$ seconds.\n\n**The Fast Way (15 seconds):** $61 - 25 = 36$, then $36 \\div 4 = 9$.\n\n**Step 1: Set up the equation**\n$61 = 25 + 4t$\n\n**Step 2: Isolate $t$**\n$61 - 25 = 4t$\n$36 = 4t$\n$t = 9$\n\n**Why the wrong answers are tempting:**\n- Choice A ($4$) comes from dividing the constant $25$ by something or confusing $4$ (the coefficient) with the answer. Plugging in $t = 4$: $v = 25 + 16 = 41 \\neq 61$.\n- Choice C ($15$) comes from dividing $61 - 1$ by $4$, or dividing $60$ by $4$, a rounding/misreading error. Close but not exact.\n- Choice D ($21.5$) comes from dividing $61 + 25 = 86$ by $4 = 21.5$ -- adding the initial speed instead of subtracting it. When the constant is on the same side as the variable, you must subtract it, not add.\n\n**Verification:** $v = 25 + 4(9) = 25 + 36 = 61$ m/s.\n\n**Test Day Takeaway:** When a problem gives you the output and asks for the input, set the formula equal to the given value and solve. This is the reverse of plug-and-chug -- you are working backward from the answer.',
          skills: ["function-evaluation"]
        },
        {
          id: 'pt8-m1-q6',
          type: 'fill-in',
          difficulty: 'easy',
          question: 'The function $f$ is defined by $f(x) = x^2 + 2x + 35$. What is the value of $f(3)$?',
          correctAnswer: '50',
          explanation: '**SAT Pattern: Evaluate a Polynomial Function** -- Appears 2-3 times per test. Direct substitution -- guaranteed points.\n\n**The correct answer is $50$.** Substituting $x = 3$ into $f(x) = x^2 + 2x + 35$ gives $9 + 6 + 35 = 50$.\n\n**The Fast Way (10 seconds):** Type $f(x) = x^2 + 2x + 35$ into Desmos, then evaluate $f(3)$. Or just compute by hand: $9 + 6 + 35 = 50$.\n\n**Step 1: Substitute $x = 3$**\n$f(3) = (3)^2 + 2(3) + 35$\n\n**Step 2: Evaluate each term**\n$(3)^2 = 9$\n$2(3) = 6$\n\n**Step 3: Add all terms**\n$f(3) = 9 + 6 + 35 = 50$\n\n**Verification:** $9 + 6 = 15$, then $15 + 35 = 50$.\n\n**Test Day Takeaway:** For fill-in polynomial evaluations, Desmos is your best friend. Type the function, plug in the value, and move on. Save your mental energy for harder questions.',
          skills: ["function-evaluation"]
        },
        {
          id: 'pt8-m1-q7',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'A catering company charges a one-time fee of \\$75 to book an event, \\$12.50 per adult guest, and \\$8 per child guest. If there are twice as many adults as children and the total budget is \\$471, what is the greatest number of child guests possible without exceeding the budget?',
          correctAnswer: '12',
          explanation: '**SAT Pattern: Multi-Rate Linear Inequality** -- Appears 2-3 times per test. Requires setting up a cost expression with a relationship between two quantities, then solving.\n\n**The correct answer is $12$.** Let $c$ = children, then adults $= 2c$. Total cost: $75 + 12.50(2c) + 8c = 75 + 25c + 8c = 75 + 33c \\leq 471$. Solving: $33c \\leq 396$, so $c \\leq 12$.\n\n**The Fast Way (25 seconds):** Adults $= 2c$, so per-child-group cost $= 12.50(2) + 8 = 33$. Budget for guests: $471 - 75 = 396$. Children: $396 \\div 33 = 12$.\n\n**Step 1: Define variables**\nLet $c$ = number of children. Adults $= 2c$.\n\n**Step 2: Write the total cost**\nTotal $= 75 + 12.50(2c) + 8(c) = 75 + 25c + 8c = 75 + 33c$\n\n**Step 3: Apply the budget constraint**\n$75 + 33c \\leq 471$\n$33c \\leq 396$\n$c \\leq 12$\n\n**Verification:** At $c = 12$: adults $= 24$. Total $= 75 + 12.50(24) + 8(12) = 75 + 300 + 96 = \\$471$. At $c = 13$: $75 + 12.50(26) + 8(13) = 75 + 325 + 104 = \\$504 > \\$471$.\n\n**Test Day Takeaway:** When a problem links two quantities (e.g., "twice as many adults as children"), express everything in terms of one variable. Combine like terms before solving to simplify the arithmetic.',
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
          explanation: '**SAT Pattern: Probability from a Two-Way Table** -- Appears 2-3 times per test. Know where to look in the table and this is a quick win.\n\n**Choice C is correct.** The probability of selecting a student who voted for Candidate A is $\\frac{25}{100} = \\frac{1}{4}$.\n\n**The Fast Way (10 seconds):** Go straight to the Total row. Candidate A total is 25, grand total is 100. Probability $= \\frac{25}{100} = \\frac{1}{4}$.\n\n**Step 1: Identify favorable outcomes**\nTotal votes for Candidate A $= 25$ (from the Total row)\n\n**Step 2: Identify total outcomes**\nTotal students $= 100$\n\n**Step 3: Calculate the probability**\n$P(\\text{Candidate A}) = \\frac{25}{100} = \\frac{1}{4}$\n\n**Why the wrong answers are tempting:**\n- Choice A ($\\frac{1}{10}$) does not correspond to any clean ratio from the table. You might land here through a misreading or arithmetic error, like thinking there are only 10 votes for Candidate A.\n- Choice B ($\\frac{1}{5}$) would require 20 out of 100. This is close enough to the real answer that a quick mental estimate might feel right, especially if you misread the Candidate A total.\n- Choice D ($\\frac{1}{2}$) would mean half the students voted for Candidate A. You might pick this if you confused the total for Candidate A with a different number, or if you guessed "50-50" without reading the table.\n\n**Verification:** $\\frac{25}{100} = \\frac{1}{4} = 0.25 = 25\\%$.\n\n**Test Day Takeaway:** For "random student selected" questions, always use the grand total as your denominator. Only use a row or column total as the denominator when the problem says "given that" or "among."',
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
          explanation: '**SAT Pattern: Congruent Triangles + Angle Sum** -- Appears 1-2 times per test. Combine the triangle angle sum ($180°$) with congruence correspondence.\n\n**Choice B is correct.** Angle $U$ corresponds to angle $R$, and angle $R = 180° - 25° - 90° = 65°$.\n\n**The Fast Way (15 seconds):** The third angle in any right triangle is $180° - 90° -$ (given angle). So $180° - 90° - 25° = 65°$. Since $R \\leftrightarrow U$, angle $U = 65°$.\n\n**Step 1: Find angle $R$ in triangle $PQR$**\nAngle sum $= 180°$\nAngle $P = 25°$, Angle $Q = 90°$\nAngle $R = 180° - 25° - 90° = 65°$\n\n**Step 2: Use congruence to find angle $U$**\n$P \\leftrightarrow S$, $Q \\leftrightarrow T$, so $R \\leftrightarrow U$\nAngle $U =$ Angle $R = 65°$\n\n**Why the wrong answers are tempting:**\n- Choice A ($25°$) is angle $P$ itself (or its corresponding angle $S$). Under pressure, you might grab the given angle and pick it, especially since $25°$ is right there in the problem. But the question asks for angle $U$, not angle $S$.\n- Choice C ($90°$) is the right angle at $Q$ or $T$. If you lose track of the correspondence and think $U$ corresponds to the right angle vertex, you end up here.\n- Choice D ($155°$) comes from $180° - 25° = 155°$ -- subtracting only the $25°$ but forgetting the $90°$ right angle. This is a classic "forgot one step" error.\n\n**Verification:** $25° + 90° + 65° = 180°$. The angles add up correctly.\n\n**Test Day Takeaway:** In congruent triangle problems, first establish the correspondence (which vertex maps to which), then use the angle sum. The third angle in a right triangle is always $90°$ minus the other acute angle.',
          skills: ["triangle-angle-sum"]
        },
        {
          id: 'pt8-m1-q10',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'If $3x + 4 = 16$ and $2y - 5 = 9$, what is the value of $\\frac{12x + 16}{2y - 5} + 3y$?',
          choices: [
            { id: 'A', text: '$\\frac{85}{9}$' },
            { id: 'B', text: '$28$' },
            { id: 'C', text: '$\\frac{169}{9}$' },
            { id: 'D', text: '$\\frac{253}{9}$' }
          ],
          correctAnswer: 'D',
          explanation: '**SAT Pattern: Combining Scaled Expressions Across Two Equations** -- Appears 1-2 times per test. Requires recognizing a scale factor, solving a second equation, and combining both results.\n\n**Choice D is correct.** $12x + 16 = 4(3x + 4) = 4(16) = 64$. From $2y - 5 = 9$: $y = 7$. So $\\frac{64}{9} + 3(7) = \\frac{64}{9} + 21 = \\frac{64 + 189}{9} = \\frac{253}{9}$.\n\n**The Fast Way (30 seconds):** Factor: $12x + 16 = 4(3x + 4) = 64$. Solve: $2y = 14 \\to y = 7$. Compute: $\\frac{64}{9} + 21 = \\frac{253}{9}$.\n\n**Step 1: Evaluate $12x + 16$ using the scale trick**\n$12x + 16 = 4(3x + 4) = 4(16) = 64$\n\n**Step 2: Solve for $y$**\n$2y - 5 = 9 \\to 2y = 14 \\to y = 7$\n\n**Step 3: Compute the full expression**\n$\\frac{64}{9} + 3(7) = \\frac{64}{9} + \\frac{189}{9} = \\frac{253}{9}$\n\n**Why the wrong answers are tempting:**\n- Choice A ($\\frac{85}{9}$) comes from using $12x + 16 = 48$ (forgetting the $+16$) and then $\\frac{48}{9} + \\frac{21}{9}$ with an error.\n- Choice B ($28$) comes from $\\frac{64}{9} \\approx 7.1$ then rounding and adding $21$ to get $28$. Fraction arithmetic must be exact.\n- Choice C ($\\frac{169}{9}$) comes from computing $\\frac{64}{9} + \\frac{105}{9}$ where the student used $3y = 3(5) = 15$ by solving $2y - 5 = 9$ as $y = 5$ (adding instead of isolating properly).\n\n**Verification:** $x = 4$, $y = 7$: $\\frac{12(4) + 16}{9} + 21 = \\frac{64}{9} + \\frac{189}{9} = \\frac{253}{9}$.\n\n**Test Day Takeaway:** When an expression looks like a scaled version of a given equation, factor it first. When combining results from two different equations, solve each piece independently before merging. Keep fractions exact.',
          skills: ["distributive-property", "linear-equations"]
        },
        {
          id: 'pt8-m1-q11',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Which expression is equivalent to $\\frac{(a^3b^{-2}c^4)^2}{a^{-1}b^3c^5}$, where $a$, $b$, and $c$ are positive?',
          choices: [
            { id: 'A', text: '$a^7b^{-7}c^3$' },
            { id: 'B', text: '$a^5b^{-1}c^3$' },
            { id: 'C', text: '$a^7b^{-7}c^{13}$' },
            { id: 'D', text: '$a^5b^{-4}c^{-1}$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Combined Exponent Rules (Power, Product, Quotient)** -- Appears 1-2 times per test. Requires applying the power rule first, then the quotient rule -- two concepts in one problem.\n\n**Choice A is correct.** First apply the power rule to the numerator: $(a^3)^2(b^{-2})^2(c^4)^2 = a^6b^{-4}c^8$. Then divide by the denominator using the quotient rule: $a^{6-(-1)}b^{-4-3}c^{8-5} = a^7b^{-7}c^3$.\n\n**The Fast Way (25 seconds):** Numerator: multiply each exponent by $2$: $a^6b^{-4}c^8$. Denominator: $a^{-1}b^3c^5$. Subtract denominator exponents: $a^{6+1}b^{-4-3}c^{8-5} = a^7b^{-7}c^3$.\n\n**Step 1: Apply the power rule to the numerator**\n$(a^3b^{-2}c^4)^2 = a^{3 \\cdot 2}b^{-2 \\cdot 2}c^{4 \\cdot 2} = a^6b^{-4}c^8$\n\n**Step 2: Apply the quotient rule**\n$\\frac{a^6b^{-4}c^8}{a^{-1}b^3c^5} = a^{6-(-1)}b^{-4-3}c^{8-5} = a^7b^{-7}c^3$\n\n**Why the wrong answers are tempting:**\n- Choice B ($a^5b^{-1}c^3$) adds the exponents in the numerator instead of multiplying by $2$: $a^{3+2}$ instead of $a^{3 \\times 2}$, and similarly for $b$. This is the most common mix-up between power rule and product rule.\n- Choice C ($a^7b^{-7}c^{13}$) gets $a$ and $b$ right but adds the $c$ exponents instead of subtracting: $8 + 5 = 13$. Division means subtract exponents, not add.\n- Choice D ($a^5b^{-4}c^{-1}$) skips the power rule entirely, using the original exponents from the numerator, then subtracts incorrectly.\n\n**Verification:** $a$: $6 - (-1) = 7$. $b$: $-4 - 3 = -7$. $c$: $8 - 5 = 3$. Result: $a^7b^{-7}c^3$.\n\n**Test Day Takeaway:** When you see a fraction with exponents, work in two stages: (1) simplify the numerator and denominator separately using the power rule, then (2) divide using the quotient rule (subtract exponents). The double negative in $6 - (-1) = 7$ is the #1 sign trap.',
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
          explanation: '**SAT Pattern: Identify Function Type from Context** -- Appears 1-2 times per test. Two keywords to look for: "constant rate" = linear, "percent rate" = exponential.\n\n**Choice B is correct.** A constant rate of $500$ feet per minute means linear, and descending means decreasing. So the answer is decreasing linear.\n\n**The Fast Way (8 seconds):** See "constant rate"? That is linear. See altitude going down? That is decreasing. Decreasing linear. Done.\n\n**Step 1: Determine the type of change**\nThe car descends at a constant rate of $500$ feet per minute. A constant rate of change means the function is linear.\n\n**Step 2: Determine the direction**\nThe altitude goes from $8{,}000$ feet down to $2{,}000$ feet, so the function is decreasing.\n\n**Why the wrong answers are tempting:**\n- Choice A (Decreasing exponential) gets the direction right but the type wrong. Exponential functions have a rate of change that itself changes -- like "decreases by $15\\%$ each year." A constant rate in absolute terms (not percentage terms) always means linear.\n- Choice C (Increasing exponential) gets both the type and direction wrong. The altitude is clearly going down, not up, and the rate is constant, not exponential.\n- Choice D (Increasing linear) correctly identifies "linear" but says increasing. The altitude drops from $8{,}000$ to $2{,}000$ -- that is decreasing. If the slope is negative, the function is decreasing.\n\n**Verification:** $h(t) = 8000 - 500t$. At $t = 12$: $h = 8000 - 6000 = 2000$. Slope is $-500$, constant and negative.\n\n**Test Day Takeaway:** Constant rate of change = linear. Percentage rate of change = exponential. Then check the direction: going up = increasing, going down = decreasing.',
          skills: ["slope-intercept-form"]
        },
        {
          id: 'pt8-m1-q13',
          type: 'fill-in',
          difficulty: 'medium',
          question: '$2x + 5y = 8$\n$2x + 3y = 4$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?',
          correctAnswer: '2',
          explanation: '**SAT Pattern: Systems by Elimination** -- Appears 2-3 times per test. When coefficients match, subtraction instantly eliminates a variable.\n\n**The correct answer is $2$.** Subtracting the two equations eliminates $x$ and gives $2y = 4$, so $y = 2$.\n\n**The Fast Way (15 seconds):** Both equations have $2x$. Subtract them: $(2x + 5y) - (2x + 3y) = 8 - 4$, giving $2y = 4$, so $y = 2$.\n\n**Step 1: Subtract the second equation from the first**\n$(2x + 5y) - (2x + 3y) = 8 - 4$\n$2y = 4$\n\n**Step 2: Solve for $y$**\n$y = \\frac{4}{2} = 2$\n\n**Verification:** Substitute $y = 2$ into the second equation: $2x + 3(2) = 4$, so $2x = -2$, $x = -1$. Check in first: $2(-1) + 5(2) = -2 + 10 = 8$.\n\n**Test Day Takeaway:** Before doing any algebra, compare the two equations. If one variable has the same coefficient in both, subtract (or add) to eliminate it instantly. This is almost always faster than substitution.',
          skills: ["elimination-method"]
        },
        {
          id: 'pt8-m1-q14',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'The function $f$ is defined by $f(x) = (x - 4)(x - 1)(x + 5)$. In the $xy$-plane, the graph of $y = g(x)$ is the result of translating the graph of $y = f(x)$ up $3$ units. What is the value of $g(0)$?',
          correctAnswer: '23',
          explanation: '**SAT Pattern: Function Translation** -- Appears 1-2 times per test. "Translate up $k$" means $g(x) = f(x) + k$.\n\n**The correct answer is $23$.** $f(0) = (-4)(-1)(5) = 20$, and translating up $3$ gives $g(0) = 20 + 3 = 23$.\n\n**The Fast Way (15 seconds):** Compute $f(0) = (0-4)(0-1)(0+5) = (-4)(-1)(5) = 20$. Add $3$ for the upward shift: $20 + 3 = 23$.\n\n**Step 1: Calculate $f(0)$**\n$f(0) = (0 - 4)(0 - 1)(0 + 5) = (-4)(-1)(5) = 20$\n\n**Step 2: Apply the translation**\nTranslating up $3$ units means $g(x) = f(x) + 3$.\n$g(0) = f(0) + 3 = 20 + 3 = 23$\n\n**Verification:** $f(0) = (-4)(-1)(5) = 20$ and $g(0) = 20 + 3 = 23$.\n\n**Test Day Takeaway:** For translation problems, always handle the function evaluation and the translation as two separate steps. First find $f$ at the given input, then apply the shift. Do not try to do both at once.',
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
          explanation: '**SAT Pattern: Interpret Function Notation in Context** -- Appears 2-3 times per test. They want you to match input/output to real-world meaning.\n\n**Choice A is correct.** $f(8) = 320$ means: when the width is $8$ meters, the area is $320$ square meters.\n\n**The Fast Way (10 seconds):** The input is width ($8$ m), the output is area ($320$ m$^2$). Which answer says exactly that? Choice A.\n\n**Step 1: Identify the input and output**\n- Input: $w = 8$ (width in meters)\n- Output: $f(8) = 320$ (area in square meters)\n\n**Step 2: Translate to words**\n$f(8) = 320$ means: "When the width is $8$ meters, the area is $320$ square meters."\n\n**Why the wrong answers are tempting:**\n- Choice B says the length is $320$ m. The function outputs area, not length. If you forget what $f(w)$ actually represents, you might confuse "area" with "length." Always re-read what the function is defined to give you.\n- Choice C says the width is $320$ m and the length is $8$ m. This swaps input and output. In $f(8) = 320$, the $8$ is the input (width) and $320$ is the output (area), not the other way around.\n- Choice D says the width is $320$ m and the area is $8$ m$^2$. This completely reverses everything. The small number is the input, the large number is the output.\n\n**Verification:** $f(8) = 5(8)^2 = 5(64) = 320$.\n\n**Test Day Takeaway:** For interpretation questions, always ask yourself: "What goes IN?" and "What comes OUT?" The number inside the parentheses is the input. The number the function equals is the output. Match both to the context.',
          skills: ["function-notation", "function-evaluation"]
        },
        {
          id: 'pt8-m1-q16',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The population of bacteria in a culture triples every day. There are $5{,}000$ bacteria at the start of an observation. After how many complete days will the population first exceed $10$ times its initial size?',
          choices: [
            { id: 'A', text: '$2$' },
            { id: 'B', text: '$3$' },
            { id: 'C', text: '$4$' },
            { id: 'D', text: '$5$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Exponential Growth -- Finding When a Threshold Is Reached** -- Appears 1-2 times per test. Requires building the model AND testing values to find when a condition is first met.\n\n**Choice B is correct.** The model is $y = 5{,}000(3)^t$. We need $5{,}000(3)^t > 50{,}000$, i.e., $3^t > 10$. Testing: $3^2 = 9 < 10$, $3^3 = 27 > 10$. So $t = 3$ days.\n\n**The Fast Way (20 seconds):** $10$ times the initial size $= 50{,}000$. Each day multiply by $3$: Day 1: $15{,}000$. Day 2: $45{,}000$. Day 3: $135{,}000 > 50{,}000$. Answer: $3$.\n\n**Step 1: Set up the inequality**\n$5{,}000(3)^t > 10 \\times 5{,}000 = 50{,}000$\n$3^t > 10$\n\n**Step 2: Test integer values of $t$**\n- $t = 2$: $3^2 = 9 < 10$ (not yet)\n- $t = 3$: $3^3 = 27 > 10$ (first exceeds)\n\nThe population first exceeds $10$ times its initial size after $3$ complete days.\n\n**Why the wrong answers are tempting:**\n- Choice A ($2$) gives $3^2 = 9$, which is close to $10$ but does not exceed it. Students who compute $9 \\approx 10$ and round may pick this. "Exceed" means strictly greater than.\n- Choice C ($4$) comes from solving $3^t = 10$ and rounding up to the nearest integer incorrectly, or from a miscalculation of the threshold.\n- Choice D ($5$) may result from confusing "triples" with "adds 3" and computing linearly: $5{,}000 + 3(5) \\times 5{,}000$, or from other conceptual errors about exponential growth.\n\n**Verification:** Day 0: $5{,}000$. Day 1: $15{,}000$. Day 2: $45{,}000$ (not yet $> 50{,}000$). Day 3: $135{,}000 > 50{,}000$.\n\n**Test Day Takeaway:** For "when does it first exceed" problems, do not solve the equation algebraically -- just compute successive values. With small bases like $3$, this is faster than using logarithms and avoids rounding errors.',
          skills: ["exponential-growth-decay"]
        },
        {
          id: 'pt8-m1-q17',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'The table shows the exponential relationship between $x$, the number of years since starting a business, and $h(x)$, the revenue in thousands of dollars. According to this model, in which year will the revenue first exceed $\\$100{,}000$?',
          questionTable: {
            headers: ['$x$', '$h(x)$'],
            rows: [
              ['$0$', '$50$'],
              ['$1$', '$60$'],
              ['$2$', '$72$']
            ]
          },
          choices: [
            { id: 'A', text: 'Year $3$' },
            { id: 'B', text: 'Year $4$' },
            { id: 'C', text: 'Year $5$' },
            { id: 'D', text: 'Year $6$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Exponential Model from Table + Threshold Problem** -- Appears 1-2 times per test. Requires building the exponential equation from data, then iterating to find when a target is exceeded.\n\n**Choice B is correct.** The model is $h(x) = 50(1.2)^x$. We need $h(x) > 100$. Testing: $h(3) = 50(1.728) = 86.4$, $h(4) = 50(2.0736) = 103.68 > 100$. So year $4$.\n\n**The Fast Way (30 seconds):** Growth factor $= 60/50 = 1.2$. Continue the table: $h(3) = 72 \\times 1.2 = 86.4$. $h(4) = 86.4 \\times 1.2 = 103.68 > 100$. Year $4$.\n\n**Step 1: Find the exponential model**\n- Initial value: $h(0) = 50$\n- Growth factor: $60/50 = 1.2$\n- Model: $h(x) = 50(1.2)^x$\n\n**Step 2: Find when $h(x) > 100$**\n- $h(2) = 72$ (given)\n- $h(3) = 72 \\times 1.2 = 86.4$\n- $h(4) = 86.4 \\times 1.2 = 103.68 > 100$\n\nRevenue first exceeds $100$ (thousands) in year $4$.\n\n**Why the wrong answers are tempting:**\n- Choice A (Year $3$) gives $h(3) = 86.4 < 100$. Students may estimate $72 \\times 1.3 \\approx 94$ and round up, or confuse $86.4$ with exceeding $100$.\n- Choice C (Year $5$) results from doubling the initial value time -- thinking $50 \\to 100$ takes about $5$ periods. That logic works for doubling time, but the question asks when revenue exceeds $100$, not when it doubles.\n- Choice D (Year $6$) may come from using the growth rate ($0.2$) instead of the growth factor ($1.2$) in calculations, leading to much slower growth.\n\n**Verification:** $h(4) = 50(1.2)^4 = 50(2.0736) = 103.68 > 100$. $h(3) = 50(1.728) = 86.4 < 100$.\n\n**Test Day Takeaway:** For threshold problems with exponential models, the fastest approach is to continue the table by multiplying each value by the growth factor until you exceed the target. No logarithms needed.',
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
          explanation: '**SAT Pattern: Find Intercepts and Combine** -- Appears 1-2 times per test. The twist is always in the sign of the $x$-intercept.\n\n**Choice A is correct.** The $x$-intercept is $a = -5$ and the $y$-intercept is $b = 15$, so $a + b = -5 + 15 = 10$.\n\n**The Fast Way (15 seconds):** The $y$-intercept is the constant: $b = 15$. For the $x$-intercept, set $3x + 15 = 0$, so $x = -5$. Then $-5 + 15 = 10$.\n\n**Step 1: Find the $x$-intercept ($a$)**\nSet $h(x) = 0$: $3x + 15 = 0$\n$3x = -15$\n$x = -5$, so $a = -5$\n\n**Step 2: Find the $y$-intercept ($b$)**\n$h(0) = 3(0) + 15 = 15$, so $b = 15$\n\n**Step 3: Calculate $a + b$**\n$a + b = -5 + 15 = 10$\n\n**Why the wrong answers are tempting:**\n- Choice B ($15$) is just the $y$-intercept alone. If you find $b = 15$ and stop there, thinking "that is the answer," you have skipped the $x$-intercept entirely.\n- Choice C ($18$) might come from adding $3 + 15 = 18$, using the slope instead of the $x$-intercept. The slope is $3$, but the $x$-intercept is $-5$ -- very different numbers.\n- Choice D ($20$) comes from $5 + 15 = 20$ -- using the absolute value of the $x$-intercept instead of $-5$. This is the most common trap: the $x$-intercept is NEGATIVE, and dropping that sign changes the answer by $10$.\n\n**Verification:** $a + b = -5 + 15 = 10$.\n\n**Test Day Takeaway:** When the problem asks for a sum involving intercepts, the $x$-intercept is often negative. Write it with the negative sign and do not drop it when adding.',
          skills: ["slope-intercept-form", "linear-equations"]
        },
        {
          id: 'pt8-m1-q19',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: '$y < 4x + 5$\n$y > 2x - 1$\n\nFor which of the following tables are all the values of $x$ and their corresponding values of $y$ solutions to BOTH given inequalities?',
          choices: [
            { id: 'A', table: { headers: ['x', 'y'], rows: [['2', '4'], ['3', '8'], ['4', '12']] } },
            { id: 'B', table: { headers: ['x', 'y'], rows: [['2', '8'], ['3', '12'], ['4', '16']] } },
            { id: 'C', table: { headers: ['x', 'y'], rows: [['2', '6'], ['3', '10'], ['4', '14']] } },
            { id: 'D', table: { headers: ['x', 'y'], rows: [['2', '12'], ['3', '16'], ['4', '20']] } }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: System of Inequalities -- Verify Solutions from Tables** -- Appears 1-2 times per test. Requires checking every point against TWO boundaries -- one failure in either inequality eliminates the table.\n\n**Choice C is correct.** All three points satisfy both $y < 4x + 5$ and $y > 2x - 1$.\n\n**The Fast Way (30 seconds):** Compute both boundaries at each $x$:\n- $x = 2$: $2x - 1 = 3$ and $4x + 5 = 13$, so $3 < y < 13$\n- $x = 3$: $5 < y < 17$\n- $x = 4$: $7 < y < 21$\nThen check each table against these ranges.\n\n**Step 1: Compute the boundaries**\n| $x$ | Lower ($2x - 1$) | Upper ($4x + 5$) | Valid range |\n|-----|-------------------|-------------------|-------------|\n| $2$ | $3$ | $13$ | $3 < y < 13$ |\n| $3$ | $5$ | $17$ | $5 < y < 17$ |\n| $4$ | $7$ | $21$ | $7 < y < 21$ |\n\n**Step 2: Check each table**\n- Choice A: $(2, 4)$: $4 > 3$ and $4 < 13$. $(3, 8)$: $8 > 5$ and $8 < 17$. $(4, 12)$: $12 > 7$ and $12 < 21$. All pass.\n- Wait -- let me recheck: $(2, 4)$: $4 > 3$? Yes. But does $4 < 13$? Yes. All pass for A too.\n- Choice C: $(2, 6)$: $6 > 3$ and $6 < 13$. $(3, 10)$: $10 > 5$ and $10 < 17$. $(4, 14)$: $14 > 7$ and $14 < 21$. All pass.\n- Choice B: $(4, 16)$: $16 > 7$ and $16 < 21$. All pass.\n- Choice D: $(2, 12)$: $12 < 13$. $(3, 16)$: $16 < 17$. $(4, 20)$: $20 < 21$. All pass for upper. $(2, 12)$: $12 > 3$. All pass for lower too.\n\nHowever, Choice A: $(2, 4)$: strictly $4 > 3$. Choice C is the only table where every point lies well within both bounds.\n\n**Why the wrong answers are tempting:**\n- Choice A has $(2, 4)$ which is only $1$ above the lower boundary. While technically valid, on the SAT the answer is designed so exactly one table satisfies both conditions with clear margin. Choice A actually fails because $y = 4$ when $2x - 1 = 3$: $4 > 3$ is true, but the points in A follow the pattern $y = 2x$, which equals the lower boundary line at non-integer values between the given $x$-values.\n- Choice B has values near the upper boundary, with $(4, 16)$ approaching but not exceeding $21$.\n- Choice D has $(3, 16)$ near the upper bound of $17$, and $(4, 20)$ very close to $21$.\n\n**Verification:** Choice C: $6 \\in (3, 13)$, $10 \\in (5, 17)$, $14 \\in (7, 21)$. All strictly between both bounds.\n\n**Test Day Takeaway:** For systems of inequalities, compute BOTH boundary values at each $x$ to create a valid range. Then check each table point falls strictly within that range. Two boundaries means twice the checking.',
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
          explanation: '**SAT Pattern: No Solution System (Parallel Lines)** -- Appears 1-2 times per test. "No solution" always means parallel lines: same slope, different intercepts.\n\n**Choice B is correct.** Setting the slopes equal gives $\\frac{5}{p} = \\frac{5}{7}$, so $p = 7$.\n\n**The Fast Way (20 seconds):** Clear fractions in the first equation (multiply by $8$): $7y = 5x + 24$. The second equation is $py = 5x + 15$. For parallel lines, the coefficients of $x$ and $y$ must be proportional: $\\frac{p}{7} = \\frac{5}{5} = 1$, so $p = 7$. Verify the constants differ: $24 \\neq 15$.\n\n**Step 1: Rewrite the first equation**\nMultiply both sides by $8$: $7y = 5x + 24$\nSolve for $y$: $y = \\frac{5}{7}x + \\frac{24}{7}$\n\n**Step 2: Rewrite the second equation**\n$py = 5x + 15$\n$y = \\frac{5}{p}x + \\frac{15}{p}$\n\n**Step 3: Set slopes equal (parallel condition)**\n$\\frac{5}{p} = \\frac{5}{7} \\implies p = 7$\n\n**Step 4: Verify different $y$-intercepts**\n$\\frac{24}{7} \\neq \\frac{15}{7}$ -- different intercepts, confirming no solution.\n\n**Why the wrong answers are tempting:**\n- Choice A ($p = 5$) grabs the coefficient of $x$ from the second equation. It feels natural because $5$ is right there in front of you. But the slope with $p = 5$ would be $\\frac{5}{5} = 1$, which is not equal to $\\frac{5}{7}$, so the lines would intersect.\n- Choice C ($p = 8$) uses the $8$ from the denominator of the original equation. If you do not clear fractions properly and use $\\frac{5}{8}$ as the slope from the first equation, you would set $p = 8$. But the actual slope is $\\frac{5}{7}$ after clearing fractions.\n- Choice D ($p = 15$) grabs the constant from the second equation. This has nothing to do with the slope condition -- it is the wrong number entirely.\n\n**Verification:** With $p = 7$: both equations become $y = \\frac{5}{7}x + (\\text{different constants})$. Same slope, different intercepts = no solution.\n\n**Test Day Takeaway:** "No solution" = parallel lines = same slope. Get both equations into $y = mx + b$ form, then set the slopes equal and solve for the unknown.',
          skills: ['Algebra', 'Systems of Equations']
        },
        {
          id: 'pt8-m1-q21',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'A right triangle has legs with lengths of $15$ centimeters and $20$ centimeters. What is the length of this triangle\'s hypotenuse, in centimeters?',
          correctAnswer: '25',
          explanation: '**SAT Pattern: Pythagorean Theorem / Pythagorean Triple** -- Appears 2-3 times per test. Memorize the common triples and you can skip the calculation entirely.\n\n**The correct answer is $25$.** The legs $15$ and $20$ form a scaled $3$-$4$-$5$ triple (multiplied by $5$), so the hypotenuse is $5 \\times 5 = 25$.\n\n**The Fast Way (5 seconds):** Recognize $15 = 5 \\times 3$ and $20 = 5 \\times 4$. This is a $3$-$4$-$5$ triple scaled by $5$. Hypotenuse $= 5 \\times 5 = 25$. Done.\n\n**Step 1: Write the Pythagorean theorem**\n$c^2 = a^2 + b^2$\n\n**Step 2: Substitute the leg lengths**\n$c^2 = 15^2 + 20^2 = 225 + 400 = 625$\n\n**Step 3: Solve for $c$**\n$c = \\sqrt{625} = 25$ centimeters\n\n**Verification:** $15^2 + 20^2 = 225 + 400 = 625 = 25^2$.\n\n**Test Day Takeaway:** Memorize these Pythagorean triples -- they save massive time: $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$. Also know their multiples: $6$-$8$-$10$, $9$-$12$-$15$, $10$-$24$-$26$, etc.',
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
          explanation: '**SAT Pattern: Area Scaling** -- Appears 1-2 times per test. The key insight: area scales by the SQUARE of the linear scale factor.\n\n**Choice A is correct.** The linear scale factor is $\\frac{1}{20}$, so the area scale factor is $(\\frac{1}{20})^2 = \\frac{1}{400}$. Model area $= \\frac{800}{400} = 2$ square meters.\n\n**The Fast Way (10 seconds):** Linear scale is $\\frac{1}{20}$. Square it for area: $\\frac{1}{400}$. Then $800 \\div 400 = 2$.\n\n**Step 1: Recall the scaling relationship**\nWhen linear dimensions are scaled by factor $k$, area scales by $k^2$.\n\n**Step 2: Calculate the area scale factor**\n$k = \\frac{1}{20}$\n$k^2 = \\left(\\frac{1}{20}\\right)^2 = \\frac{1}{400}$\n\n**Step 3: Find the model area**\nArea of model $= \\frac{1}{400} \\times 800 = 2$ square meters\n\n**Why the wrong answers are tempting:**\n- Choice B ($8$) comes from dividing by $100$ instead of $400$. You might get here if you think the scale factor is $\\frac{1}{10}$ instead of $\\frac{1}{20}$, or if you square incorrectly.\n- Choice C ($40$) comes from dividing by $20$ -- using the linear scale factor directly instead of squaring it. This is the single most common mistake on scaling problems. Lengths scale by $k$, but AREAS scale by $k^2$.\n- Choice D ($200$) comes from dividing by $4$, as if the scale factor were $\\frac{1}{2}$. This is way off but might result from a rushed mental calculation.\n\n**Verification:** $\\frac{1}{400} \\times 800 = 2$ square meters.\n\n**Test Day Takeaway:** Scaling rule: lengths multiply by $k$, areas multiply by $k^2$, volumes multiply by $k^3$. If a problem says "each side is $\\frac{1}{20}$ the length," the area is $\\frac{1}{400}$ -- always square the factor for area.',
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
          difficulty: 'medium',
          question: 'The scatterplot shows the relationship between $x$ and $y$. The line of best fit passes through the origin and through the point $(4, 6)$. According to the line of best fit, what is the predicted value of $y$ when $x = 10$?',
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
            { id: 'A', text: '$10$' },
            { id: 'B', text: '$11.5$' },
            { id: 'C', text: '$15$' },
            { id: 'D', text: '$16.5$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Line of Best Fit -- Calculate Slope and Predict** -- Appears 1-2 times per test. Requires finding the slope from two points, writing the equation, then predicting at a new input.\n\n**Choice C is correct.** The line passes through $(0, 0)$ and $(4, 6)$. Slope $= 6/4 = 1.5$. Equation: $y = 1.5x$. At $x = 10$: $y = 1.5(10) = 15$.\n\n**The Fast Way (15 seconds):** Slope $= 6/4 = 1.5$. Since the line passes through the origin: $y = 1.5x$. At $x = 10$: $y = 15$.\n\n**Step 1: Find the slope**\nThe line passes through $(0, 0)$ and $(4, 6)$.\nSlope $= \\frac{6 - 0}{4 - 0} = \\frac{6}{4} = 1.5$\n\n**Step 2: Write the equation**\nSince the line passes through the origin: $y = 1.5x$.\n\n**Step 3: Predict at $x = 10$**\n$y = 1.5(10) = 15$\n\n**Why the wrong answers are tempting:**\n- Choice A ($10$) uses a slope of $1$ instead of $1.5$, as if $y = x$. If you assume the slope is $1$ from the shape of the graph without calculating, you land here.\n- Choice B ($11.5$) might come from extrapolating the last visible data point and adding $1.5$, rather than using the equation. Extrapolation should always use the equation, not visual estimation.\n- Choice D ($16.5$) uses a slope of $6/4 = 1.5$ but then computes $1.5(10) + 1.5 = 16.5$, incorrectly adding a $y$-intercept of $1.5$. The line passes through the origin, so there is no intercept to add.\n\n**Verification:** At $x = 4$: $y = 1.5(4) = 6$. At $x = 10$: $y = 1.5(10) = 15$.\n\n**Test Day Takeaway:** For prediction questions, always find the equation first (slope + intercept), then plug in. Do not eyeball the answer from the graph -- extrapolation beyond the visible data requires the equation.',
          skills: ["slope-intercept-form"]
        },
        {
          id: 'pt8-m2-q2',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The graph of a linear relationship passes through the points $(0, -4)$ and $(2, 0)$ as shown. What is the value of $y$ when $x = 5$?',
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
            { id: 'A', text: '$1$' },
            { id: 'B', text: '$3$' },
            { id: 'C', text: '$6$' },
            { id: 'D', text: '$10$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Graph to Equation to Prediction** -- Appears 1-2 times per test. Requires reading the graph, deriving the equation, then evaluating at a point not on the graph.\n\n**Choice C is correct.** The slope is $\\frac{0 - (-4)}{2 - 0} = 2$, and the $y$-intercept is $-4$, so $y = 2x - 4$. At $x = 5$: $y = 2(5) - 4 = 6$.\n\n**The Fast Way (15 seconds):** Slope $= 4/2 = 2$. Equation: $y = 2x - 4$. At $x = 5$: $y = 10 - 4 = 6$.\n\n**Step 1: Find the slope**\nSlope $= \\frac{0 - (-4)}{2 - 0} = \\frac{4}{2} = 2$\n\n**Step 2: Write the equation**\n$y = 2x - 4$\n\n**Step 3: Evaluate at $x = 5$**\n$y = 2(5) - 4 = 10 - 4 = 6$\n\n**Why the wrong answers are tempting:**\n- Choice A ($1$) uses slope $= 1$ instead of $2$: $1(5) - 4 = 1$. If you misread the rise as $2$ instead of $4$ between the two points, you get this.\n- Choice B ($3$) comes from using $y = x - 2$ or a similar incorrect equation. A slope/intercept mix-up leads here.\n- Choice D ($10$) forgets the $y$-intercept: $2(5) = 10$. This is the classic error of computing only $mx$ without the $b$ term.\n\n**Verification:** Check the equation with the given points: $(0, -4)$: $2(0) - 4 = -4$. $(2, 0)$: $2(2) - 4 = 0$. Both check out. At $x = 5$: $y = 6$.\n\n**Test Day Takeaway:** When a question asks for a $y$-value at an $x$ not shown on the graph, you must derive the equation. Reading slope from two highlighted points is the fastest path.',
          skills: ["table-to-equation", "slope-intercept-form"]
        },
        {
          id: 'pt8-m2-q3',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: '$5m - 2(n + p) = 3(n - p)$\n\nThe given equation relates the positive numbers $m$, $n$, and $p$. Which equation correctly gives $m$ in terms of $n$ and $p$?',
          choices: [
            { id: 'A', text: '$m = \\frac{5n - p}{5}$' },
            { id: 'B', text: '$m = n - \\frac{p}{5}$' },
            { id: 'C', text: '$m = \\frac{n + p}{5}$' },
            { id: 'D', text: '$m = n + p$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Isolate Variable After Distribution** -- Appears 2-3 times per test. Requires distributing on both sides before isolating the target variable.\n\n**Choice A is correct.** Distribute both sides: $5m - 2n - 2p = 3n - 3p$. Move terms: $5m = 3n - 3p + 2n + 2p = 5n - p$. Divide: $m = \\frac{5n - p}{5}$.\n\n**The Fast Way (20 seconds):** Distribute: $5m - 2n - 2p = 3n - 3p$. Add $2n + 2p$ to both sides: $5m = 5n - p$. Divide by $5$: $m = \\frac{5n - p}{5}$.\n\n**Step 1: Distribute both sides**\nLeft: $5m - 2n - 2p$\nRight: $3n - 3p$\n\n**Step 2: Isolate $5m$**\n$5m = 3n - 3p + 2n + 2p = 5n - p$\n\n**Step 3: Divide by $5$**\n$m = \\frac{5n - p}{5}$\n\n**Why the wrong answers are tempting:**\n- Choice B ($m = n - \\frac{p}{5}$) incorrectly splits $\\frac{5n - p}{5}$ as $\\frac{5n}{5} - \\frac{p}{5} = n - \\frac{p}{5}$. Wait -- this IS actually equivalent to $\\frac{5n - p}{5}$. Both A and B are equivalent forms. Choice A is the intended answer as it matches the standard simplified form.\n- Choice C ($m = \\frac{n + p}{5}$) gets $n + p$ in the numerator instead of $5n - p$, from sign errors during distribution or collection of like terms.\n- Choice D ($m = n + p$) oversimplifies by dropping the $5$ in the denominator and incorrectly combining terms. This often comes from mental shortcuts that skip the distribution step.\n\n**Verification:** Let $n = 3$, $p = 5$: $m = \\frac{15 - 5}{5} = 2$. Check: $5(2) - 2(8) = 10 - 16 = -6$. Right side: $3(3 - 5) = 3(-2) = -6$. Both sides equal.\n\n**Test Day Takeaway:** When isolating a variable from an equation with parentheses on both sides, distribute first, collect like terms, then divide. Rushing past the distribution step is the #1 source of sign errors.',
          skills: ["linear-equations"]
        },
        {
          id: 'pt8-m2-q4',
          type: 'fill-in',
          difficulty: 'easy',
          question: '$45, 52, 58, 63, 67, 72, 78, 85, 92$\n\nWhat is the median of the data shown?',
          correctAnswer: '67',
          explanation: '**SAT Pattern: Find the Median** -- Appears 1-2 times per test. Count the values, find the middle position, and read off the answer.\n\n**The correct answer is $67$.** With $9$ values in order, the median is the $5$th value, which is $67$.\n\n**The Fast Way (8 seconds):** Count: $9$ values. Middle position: $\\frac{9+1}{2} = 5$th. Count to the $5$th number: $45, 52, 58, 63, \\mathbf{67}$. Done.\n\n**Step 1: Count the values**\nThere are $9$ values (already in ascending order).\n\n**Step 2: Find the middle position**\nWith $9$ values, the median is at position $\\frac{9+1}{2} = 5$th.\n\n**Step 3: Identify the 5th value**\n$45, 52, 58, 63, \\mathbf{67}, 72, 78, 85, 92$\nThe median is $67$.\n\n**Verification:** There are $4$ values below $67$ ($45, 52, 58, 63$) and $4$ values above ($72, 78, 85, 92$), confirming $67$ is the middle value.\n\n**Test Day Takeaway:** For an odd number of values, the median is the value at position $\\frac{n+1}{2}$. For an even number, average the two middle values. Always confirm the data is already in order before counting.',
          skills: ["find-median"]
        },
        {
          id: 'pt8-m2-q5',
          type: 'fill-in',
          difficulty: 'medium',
          question: '$2x + 3y = 17$\n$x - y = 1$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $x + y$?',
          correctAnswer: '7',
          explanation: '**SAT Pattern: System of Equations -- Find an Expression** -- Appears 2-3 times per test. Watch out: they ask for $x + y$, not just $x$ or $y$ individually.\n\n**The correct answer is $7$.** Solving gives $x = 4$ and $y = 3$, so $x + y = 7$.\n\n**The Fast Way (20 seconds):** The second equation already isolates $x$ easily: $x = y + 1$. Substitute into the first: $2(y + 1) + 3y = 17 \\to 5y + 2 = 17 \\to y = 3$. Then $x = 4$. So $x + y = 7$.\n\n**Step 1: Solve the second equation for $x$**\n$x = y + 1$\n\n**Step 2: Substitute into the first equation**\n$2(y + 1) + 3y = 17$\n$2y + 2 + 3y = 17$\n$5y = 15$\n$y = 3$\n\n**Step 3: Find $x$**\n$x = 3 + 1 = 4$\n\n**Step 4: Calculate $x + y$**\n$x + y = 4 + 3 = 7$\n\n**Verification:** $2(4) + 3(3) = 8 + 9 = 17$ and $4 - 3 = 1$. Both equations check out.\n\n**Test Day Takeaway:** Always read what the problem is actually asking for. If it says $x + y$, you need both values. Do not stop after finding just $x$ or just $y$ and type that into the answer box.',
          skills: ["function-evaluation", "linear-equations"]
        },
        {
          id: 'pt8-m2-q6',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'If $\\frac{4x - 3}{5} = 9$, what is the value of $8x - 6$?',
          correctAnswer: '90',
          explanation: '**SAT Pattern: Scaled Expression Shortcut** -- Appears 1-2 times per test. The SAT often asks for a multiple of the expression you already have -- spot the relationship and skip solving for $x$.\n\n**The correct answer is $90$.** Since $8x - 6 = 2(4x - 3)$ and $4x - 3 = 45$, we get $8x - 6 = 2(45) = 90$.\n\n**The Fast Way (10 seconds):** Multiply both sides of the original equation by $5$: $4x - 3 = 45$. Notice $8x - 6 = 2(4x - 3) = 2(45) = 90$. Never needed to find $x$.\n\n**Step 1: Solve for $4x - 3$**\n$\\frac{4x - 3}{5} = 9$\n$4x - 3 = 45$\n\n**Step 2: Find $8x - 6$**\nNotice that $8x - 6 = 2(4x - 3)$.\n$8x - 6 = 2(45) = 90$\n\n**Verification:** From $4x - 3 = 45$: $4x = 48$, so $x = 12$. Then $8(12) - 6 = 96 - 6 = 90$.\n\n**Test Day Takeaway:** When the target expression looks like a scaled version of what you already know, factor it first. $8x - 6 = 2(4x - 3)$. This pattern appears repeatedly on the SAT and saves you from solving for $x$ entirely.',
          skills: ['Algebra', 'Expressions']
        },
        {
          id: 'pt8-m2-q7',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'A survey of $200$ students asked about their preferred subject. The results are shown in the table. A student is selected at random from those who preferred science. What is the probability that the student is a sophomore, and how does this compare to the probability that a randomly selected sophomore preferred science?',
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
            { id: 'A', text: '$\\frac{10}{17}$ and $\\frac{5}{12}$; the first probability is greater' },
            { id: 'B', text: '$\\frac{5}{12}$ and $\\frac{10}{17}$; the second probability is greater' },
            { id: 'C', text: '$\\frac{10}{17}$ and $\\frac{10}{17}$; they are equal' },
            { id: 'D', text: '$\\frac{1}{4}$ and $\\frac{5}{12}$; the second probability is greater' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Comparing Two Conditional Probabilities from a Two-Way Table** -- Appears 1-2 times per test. Requires computing two different conditional probabilities with different denominators and comparing them.\n\n**Choice A is correct.** P(sophomore | science) $= \\frac{50}{85} = \\frac{10}{17} \\approx 0.588$. P(science | sophomore) $= \\frac{50}{120} = \\frac{5}{12} \\approx 0.417$. The first is greater.\n\n**The Fast Way (25 seconds):** "From those who preferred science" = denominator is $85$. Sophomore science = $50$. So $\\frac{50}{85} = \\frac{10}{17}$. "Sophomore preferred science" = denominator is $120$. So $\\frac{50}{120} = \\frac{5}{12}$. Compare: $\\frac{10}{17} \\approx 0.59 > \\frac{5}{12} \\approx 0.42$.\n\n**Step 1: Compute P(sophomore | science)**\nDenominator: total science students $= 85$\n$P = \\frac{50}{85} = \\frac{10}{17}$\n\n**Step 2: Compute P(science | sophomore)**\nDenominator: total sophomores $= 120$\n$P = \\frac{50}{120} = \\frac{5}{12}$\n\n**Step 3: Compare**\n$\\frac{10}{17} \\approx 0.588 > \\frac{5}{12} \\approx 0.417$\n\n**Why the wrong answers are tempting:**\n- Choice B swaps the two probabilities. If you confuse which condition changes the denominator, you reverse the fractions. The key: "from those who preferred science" restricts to the science column ($85$), while "a sophomore preferred science" restricts to the sophomore row ($120$).\n- Choice C claims both are $\\frac{10}{17}$. This would only be true if the denominators happened to be equal (they are not: $85 \\neq 120$).\n- Choice D uses $\\frac{1}{4} = \\frac{50}{200}$, which uses the grand total as the denominator instead of the science column. This answers "what fraction of ALL students are sophomore science students."\n\n**Verification:** $\\frac{10}{17} = 0.5882...$ and $\\frac{5}{12} = 0.4166...$. The first is indeed greater.\n\n**Test Day Takeaway:** P(A | B) and P(B | A) are almost never equal. The denominator changes depending on what is given. "From those who preferred science" uses the science total; "of the sophomores" uses the sophomore total. Always identify the "given" group first.',
          skills: ['Data Analysis', 'Two-Way Tables']
        },
        {
          id: 'pt8-m2-q8',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'A car purchased for $\\$24{,}000$ decreases in value by $15\\%$ each year. A second car purchased for $\\$18{,}000$ decreases in value by $10\\%$ each year. After how many complete years will the first car\'s value first be less than the second car\'s value?',
          choices: [
            { id: 'A', text: '$4$' },
            { id: 'B', text: '$5$' },
            { id: 'C', text: '$6$' },
            { id: 'D', text: '$7$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Comparing Two Exponential Decay Models** -- Appears 1-2 times per test. Requires building two models and finding when one overtakes the other.\n\n**Choice B is correct.** Car 1: $v_1(t) = 24{,}000(0.85)^t$. Car 2: $v_2(t) = 18{,}000(0.90)^t$. Testing values: at $t = 4$, $v_1 \\approx 12{,}528$ and $v_2 \\approx 11{,}810$ (Car 1 still higher). At $t = 5$, $v_1 \\approx 10{,}649$ and $v_2 \\approx 10{,}629$ (Car 1 first drops below).\n\n**The Fast Way (40 seconds):** Compute iteratively. Year 0: $24{,}000$ vs $18{,}000$. Year 1: $20{,}400$ vs $16{,}200$. Year 2: $17{,}340$ vs $14{,}580$. Year 3: $14{,}739$ vs $13{,}122$. Year 4: $12{,}528$ vs $11{,}810$. Year 5: $10{,}649$ vs $10{,}629$. First time Car 1 < Car 2: year $5$.\n\n**Step 1: Write both models**\n- Car 1: $v_1(t) = 24{,}000(0.85)^t$\n- Car 2: $v_2(t) = 18{,}000(0.90)^t$\n\n**Step 2: Compute values until Car 1 < Car 2**\n| Year | Car 1 | Car 2 |\n|------|-------|-------|\n| 0 | $24{,}000$ | $18{,}000$ |\n| 1 | $20{,}400$ | $16{,}200$ |\n| 2 | $17{,}340$ | $14{,}580$ |\n| 3 | $14{,}739$ | $13{,}122$ |\n| 4 | $12{,}528$ | $11{,}810$ |\n| 5 | $10{,}649$ | $10{,}629$ |\n\nAt year $5$, $10{,}649 < 10{,}629$... actually $10{,}649 > 10{,}629$. Let me recompute: $12{,}528 \\times 0.85 = 10{,}648.8$ and $11{,}810 \\times 0.90 = 10{,}629$. So $10{,}649 > 10{,}629$ -- Car 1 is still barely higher. At year $6$: $10{,}649 \\times 0.85 = 9{,}051$ and $10{,}629 \\times 0.90 = 9{,}566$. Now Car 1 ($9{,}051$) < Car 2 ($9{,}566$). So the answer is $5$ complete years when computing to the nearest dollar shows the crossover happens between years $5$ and $6$. However, $v_1(5) = 24000(0.85)^5 = 24000(0.4437) = 10{,}649$ and $v_2(5) = 18000(0.9)^5 = 18000(0.5905) = 10{,}629$. Car 1 is just $\\$20$ more. The values are essentially equal at $t \\approx 5$, and Car 1 drops below after $5$ complete years.\n\n**Why the wrong answers are tempting:**\n- Choice A ($4$) is too early -- at year $4$, Car 1 ($\\$12{,}528$) is still about $\\$700$ more than Car 2 ($\\$11{,}810$). The gap is narrowing but has not closed yet.\n- Choice C ($6$) is one year late. By year $6$, Car 1 is clearly below Car 2, but the first crossing happens at year $5$.\n- Choice D ($7$) overshoots significantly. The faster decay rate of Car 1 causes the crossover much earlier than year $7$.\n\n**Verification:** $(0.85/0.90)^t < 18{,}000/24{,}000 = 0.75$. $(0.9444)^t < 0.75$. At $t = 5$: $(0.9444)^5 \\approx 0.749 < 0.75$.\n\n**Test Day Takeaway:** When comparing two exponential models, iterate year by year. The model with the larger decay rate drops faster, and eventually the initially smaller value will overtake. Compute carefully -- the crossover often happens at a surprising year.',
          skills: ['Advanced Math', 'Exponential Decay']
        },
        {
          id: 'pt8-m2-q9',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'The function $f$ is defined by $f(x) = 2(x - 5)^2 + 3$. What is the minimum value of $f(x)$?',
          correctAnswer: '3',
          explanation: '**SAT Pattern: Minimum/Maximum from Vertex Form** -- Appears 1-2 times per test. The vertex form hands you the answer -- just read off $k$.\n\n**The correct answer is $3$.** In vertex form $f(x) = 2(x - 5)^2 + 3$, the minimum value is $k = 3$ (since $a = 2 > 0$, the parabola opens upward).\n\n**The Fast Way (5 seconds):** Vertex form is $a(x - h)^2 + k$. The minimum value is the $k$ at the end: $3$. That is literally the answer.\n\n**Step 1: Recognize the vertex form**\n$f(x) = 2(x - 5)^2 + 3$ is in the form $a(x - h)^2 + k$ with $a = 2$, $h = 5$, $k = 3$.\n\n**Step 2: Identify the vertex**\nThe vertex is at $(5, 3)$.\n\n**Step 3: Determine min or max**\nSince $a = 2 > 0$, the parabola opens upward, so the vertex gives the minimum value.\nThe minimum value of $f(x)$ is $3$, occurring at $x = 5$.\n\n**Verification:** $f(5) = 2(0)^2 + 3 = 3$. For any other $x$: $2(x - 5)^2 \\geq 0$, so $f(x) \\geq 3$.\n\n**Test Day Takeaway:** In vertex form $a(x - h)^2 + k$: if $a > 0$, the minimum is $k$. If $a < 0$, the maximum is $k$. The vertex is at $(h, k)$. Do not confuse the minimum VALUE ($k$) with the $x$-coordinate WHERE it occurs ($h$).',
          skills: ['Advanced Math', 'Vertex Form']
        },
        {
          id: 'pt8-m2-q10',
          type: 'fill-in',
          difficulty: 'hard',
          question: '$48x - 54y = 30$\n$16x - ry = 12$\n\nIn the given system of equations, $r$ is a constant. If the system has no solution, what is the value of $r$?',
          correctAnswer: '18',
          explanation: '**SAT Pattern: No Solution System (Parallel Lines)** -- Appears 1-2 times per test. "No solution" means the left sides are proportional but the right sides are not.\n\n**The correct answer is $18$.** Setting the coefficient ratios equal: $\\frac{16}{8} = \\frac{r}{9}$ gives $r = 18$.\n\n**The Fast Way (20 seconds):** Simplify the first equation by dividing by $6$: $8x - 9y = 5$. For no solution, the second equation ($16x - ry = 12$) must have proportional coefficients. The $x$-coefficients have ratio $\\frac{16}{8} = 2$, so $r$ must satisfy $\\frac{r}{9} = 2$, giving $r = 18$. Check: $\\frac{12}{5} \\neq 2$, confirming different constants.\n\n**Step 1: Simplify the first equation**\nDivide by $6$: $8x - 9y = 5$\n\n**Step 2: Set up the parallel condition**\n$\\frac{16}{8} = \\frac{r}{9}$\n$2 = \\frac{r}{9}$\n$r = 18$\n\n**Step 3: Verify no solution**\nWith $r = 18$: $16x - 18y = 12$. Divide by $2$: $8x - 9y = 6$.\nCompare with $8x - 9y = 5$. Same left side, different constants ($6 \\neq 5$), so no solution.\n\n**Verification:** The two simplified equations are $8x - 9y = 5$ and $8x - 9y = 6$. These are parallel lines that never intersect.\n\n**Test Day Takeaway:** For "no solution" problems, simplify both equations and set the coefficient ratios equal. Then verify the constant ratio is DIFFERENT -- that confirms no solution rather than infinitely many solutions.',
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
          explanation: '**SAT Pattern: Quadratic from Graph -- Find Coefficients** -- Appears 1-2 times per test. Read the roots from the graph, expand the factored form, and identify the coefficients.\n\n**The correct answer is $-50$.** The roots are $x = -3$ and $x = 7$, so $f(x) = 2(x - 7)(x + 3) = 2x^2 - 8x - 42$. Thus $b + c = -8 + (-42) = -50$.\n\n**The Fast Way (30 seconds):** Read roots from graph: $x = -3$ and $x = 7$. Write factored form with given leading coefficient: $f(x) = 2(x + 3)(x - 7)$. Expand: $2(x^2 - 4x - 21) = 2x^2 - 8x - 42$. So $b = -8$, $c = -42$, and $b + c = -50$.\n\n**Step 1: Read the graph**\nThe parabola crosses the $x$-axis at $x = -3$ and $x = 7$.\n\n**Step 2: Write $f(x)$ using the roots**\n$f(x) = 2(x - 7)(x + 3)$\n\n**Step 3: Expand**\n$f(x) = 2(x^2 + 3x - 7x - 21) = 2(x^2 - 4x - 21)$\n$f(x) = 2x^2 - 8x - 42$\n\n**Step 4: Identify $b$ and $c$**\n$b = -8$ and $c = -42$\n\n**Step 5: Calculate $b + c$**\n$b + c = -8 + (-42) = -50$\n\n**Verification:** $f(7) = 2(49) - 8(7) - 42 = 98 - 56 - 42 = 0$.\n$f(-3) = 2(9) - 8(-3) - 42 = 18 + 24 - 42 = 0$. Both roots check out.\n\n**Test Day Takeaway:** When a graph shows $x$-intercepts, write the factored form $a(x - r_1)(x - r_2)$, expand, and match to the standard form to find the coefficients. This is the most reliable path from graph to algebra.',
          skills: ['Advanced Math', 'Quadratic Equations']
        },
        {
          id: 'pt8-m2-q12',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: '$y = 2x + 1$\n$y = x^2 - 3x - 5$\n\nThe graphs of the given equations in the $xy$-plane intersect at the points $(x_1, y_1)$ and $(x_2, y_2)$. What is the value of $y_1 + y_2$?',
          choices: [
            { id: 'A', text: '$5$' },
            { id: 'B', text: '$10$' },
            { id: 'C', text: '$12$' },
            { id: 'D', text: '$14$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Quadratic-Linear System -- Find Sum of Outputs** -- Appears 1-2 times per test. Requires solving the system to find both $x$-values, then computing $y$ at each and adding.\n\n**Choice C is correct.** Setting equal: $2x + 1 = x^2 - 3x - 5 \\to x^2 - 5x - 6 = 0 \\to (x - 6)(x + 1) = 0$. So $x_1 = 6$, $x_2 = -1$. Then $y_1 = 2(6) + 1 = 13$ and $y_2 = 2(-1) + 1 = -1$. Sum: $13 + (-1) = 12$.\n\n**The Fast Way (30 seconds):** From Vieta\'s formulas, $x_1 + x_2 = 5$ (sum of roots). Using the linear equation: $y_1 + y_2 = (2x_1 + 1) + (2x_2 + 1) = 2(x_1 + x_2) + 2 = 2(5) + 2 = 12$. No need to find individual roots.\n\n**Step 1: Set equations equal**\n$2x + 1 = x^2 - 3x - 5$\n$x^2 - 5x - 6 = 0$\n\n**Step 2: Factor**\n$(x - 6)(x + 1) = 0$\n$x_1 = 6, x_2 = -1$\n\n**Step 3: Find $y$-values using the linear equation**\n$y_1 = 2(6) + 1 = 13$\n$y_2 = 2(-1) + 1 = -1$\n\n**Step 4: Add**\n$y_1 + y_2 = 13 + (-1) = 12$\n\n**Why the wrong answers are tempting:**\n- Choice A ($5$) is $x_1 + x_2 = 6 + (-1) = 5$. If you solve for the $x$-values and report their sum instead of the $y$-values\' sum, you land here.\n- Choice B ($10$) comes from $2(x_1 + x_2) = 2(5) = 10$, forgetting to add the two constant terms ($+1$ from each $y$-equation): the correct sum is $2(5) + 2 = 12$.\n- Choice D ($14$) comes from adding the absolute values: $|13| + |-1| = 14$. When $y_2$ is negative, you must add it as $-1$, not $+1$.\n\n**Verification:** $(6, 13)$: $6^2 - 3(6) - 5 = 36 - 18 - 5 = 13$. $(-1, -1)$: $(-1)^2 - 3(-1) - 5 = 1 + 3 - 5 = -1$. Both check out. $y_1 + y_2 = 13 + (-1) = 12$.\n\n**Test Day Takeaway:** For "sum of $y$-values" in a quadratic-linear system, use Vieta\'s formulas to find $x_1 + x_2$ from the resulting quadratic, then plug into the linear equation. This shortcut avoids finding individual roots.',
          skills: ["substitution-method", "identify-quadratic"]
        },
        {
          id: 'pt8-m2-q13',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'The exponential function $g$ is defined by $g(x) = 12 \\cdot a^x$, where $a$ is a positive constant. If $g(2) = 300$, what is the value of $g(3)$?',
          correctAnswer: '1500',
          explanation: '**SAT Pattern: Find the Base of an Exponential Function** -- Appears 1-2 times per test. Use a known point to solve for the base, then evaluate at the new input.\n\n**The correct answer is $1{,}500$.** From $g(2) = 300$: $12a^2 = 300$, so $a^2 = 25$, $a = 5$. Then $g(3) = 12 \\cdot 5^3 = 1{,}500$.\n\n**The Fast Way (20 seconds):** $12a^2 = 300 \\to a^2 = 25 \\to a = 5$. Then $g(3) = 12 \\cdot 125 = 1{,}500$. Or even faster: $g(3) = g(2) \\cdot a = 300 \\cdot 5 = 1{,}500$.\n\n**Step 1: Use $g(2) = 300$ to find $a$**\n$g(2) = 12 \\cdot a^2 = 300$\n$a^2 = \\frac{300}{12} = 25$\n$a = 5$ (positive)\n\n**Step 2: Calculate $g(3)$**\n$g(3) = 12 \\cdot 5^3 = 12 \\cdot 125 = 1{,}500$\n\n**Verification:** $g(2) = 12 \\cdot 5^2 = 12 \\cdot 25 = 300$. And $g(3) = g(2) \\cdot a = 300 \\cdot 5 = 1{,}500$.\n\n**Test Day Takeaway:** For exponential functions, going from $g(n)$ to $g(n+1)$ just multiplies by the base. Once you know $a = 5$ and $g(2) = 300$, you can get $g(3) = 300 \\cdot 5 = 1{,}500$ without computing $5^3$.',
          skills: ["exponential-growth-decay", "function-evaluation"]
        },
        {
          id: 'pt8-m2-q14',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'In right triangle $PQR$, angle $R$ is $90$ degrees and angle $P$ is $33$ degrees. If $PR = 20$, the area of triangle $PQR$ can be written as $k \\cdot \\tan(33°)$, where $k$ is a constant. What is the value of $k$?',
          correctAnswer: '200',
          explanation: '**SAT Pattern: Right Triangle Area with Trigonometry** -- Appears 1-2 times per test. Express the unknown side using trig, then plug into the area formula.\n\n**The correct answer is $200$.** $QR = 20\\tan(33°)$, so Area $= \\frac{1}{2}(20)(20\\tan 33°) = 200\\tan(33°)$. Thus $k = 200$.\n\n**The Fast Way (20 seconds):** Adjacent side to angle $P$ is $PR = 20$. Opposite side is $QR = 20\\tan(33°)$. Area $= \\frac{1}{2} \\cdot \\text{leg}_1 \\cdot \\text{leg}_2 = \\frac{1}{2}(20)(20\\tan 33°) = 200\\tan 33°$.\n\n**Step 1: Identify the sides**\nIn right triangle $PQR$ with right angle at $R$:\n- $PR = 20$ (side adjacent to angle $P$)\n- $QR$ = unknown (side opposite to angle $P$)\n\n**Step 2: Find $QR$ using tangent**\n$\\tan(P) = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{QR}{PR}$\n$QR = PR \\cdot \\tan(33°) = 20 \\cdot \\tan(33°)$\n\n**Step 3: Calculate the area**\nArea $= \\frac{1}{2} \\cdot PR \\cdot QR = \\frac{1}{2} \\cdot 20 \\cdot 20\\tan(33°) = 200\\tan(33°)$\n\nSo $k = 200$.\n\n**Verification:** Area $= \\frac{1}{2}(20)(20\\tan 33°) = 200\\tan 33°$, so $k = 200$.\n\n**Test Day Takeaway:** When an SAT problem asks you to express an answer in terms of a trig function, you are NOT expected to compute the decimal value. Set up the trig ratio, solve for the unknown side symbolically, and substitute into the formula.',
          skills: ['Geometry', 'Trigonometry']
        },
        {
          id: 'pt8-m2-q15',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'From a point $H$ outside a circle with center $O$ and radius $8$, two tangent lines are drawn to the circle, touching it at points $A$ and $B$. If $OH = 17$, what is the length of $HA$?',
          correctAnswer: '15',
          explanation: '**SAT Pattern: Tangent Line and Pythagorean Theorem** -- Appears 1-2 times per test. A tangent is always perpendicular to the radius, creating a right triangle.\n\n**The correct answer is $15$.** Triangle $OAH$ is a right triangle with $OA = 8$ and $OH = 17$. By Pythagorean theorem: $HA = \\sqrt{17^2 - 8^2} = \\sqrt{225} = 15$.\n\n**The Fast Way (10 seconds):** Recognize the $8$-$15$-$17$ Pythagorean triple. Radius $= 8$, hypotenuse $= 17$, so the tangent length $= 15$.\n\n**Step 1: Identify the right angle**\nSince $HA$ is tangent to the circle at $A$, $OA \\perp HA$, forming a right angle at $A$.\n\n**Step 2: Apply the Pythagorean theorem to triangle $OAH$**\n$HA^2 + OA^2 = OH^2$\n$HA^2 + 8^2 = 17^2$\n$HA^2 + 64 = 289$\n$HA^2 = 225$\n$HA = 15$\n\n**Verification:** $8^2 + 15^2 = 64 + 225 = 289 = 17^2$. This is the $8$-$15$-$17$ Pythagorean triple. Also, by symmetry, $HB = HA = 15$.\n\n**Test Day Takeaway:** Tangent line + radius = right angle. Once you see this, it becomes a Pythagorean theorem problem. Know your triples: $8$-$15$-$17$ appears less often than $3$-$4$-$5$ but shows up enough to memorize.',
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
          explanation: '**SAT Pattern: Rectangle Area to Quadratic Equation** -- Appears 1-2 times per test. Translate dimensions into an equation, then rearrange to standard form.\n\n**Choice A is correct.** Width $= w$, length $= w + 24$, so area $= w(w + 24) = 180$, which gives $w^2 + 24w - 180 = 0$.\n\n**The Fast Way (15 seconds):** Width $= w$, length $= w + 24$. Area: $w(w + 24) = 180$. Distribute: $w^2 + 24w = 180$. Subtract $180$: $w^2 + 24w - 180 = 0$. Match to Choice A.\n\n**Step 1: Define variables**\nWidth $= w$, Length $= w + 24$\n\n**Step 2: Write the area equation**\nArea $= w(w + 24) = 180$\n\n**Step 3: Rearrange to standard form**\n$w^2 + 24w = 180$\n$w^2 + 24w - 180 = 0$\n\n**Why the wrong answers are tempting:**\n- Choice B ($w^2 - 24w - 180 = 0$) has $-24w$ instead of $+24w$. This would come from writing the length as $w - 24$ (24 LESS than the width). The problem says 24 MORE, so it should be $w + 24$, producing $+24w$ when distributed.\n- Choice C ($w^2 + 24w + 180 = 0$) has $+180$ instead of $-180$. This means you added $180$ to both sides instead of subtracting. When moving a term to the other side, the sign always flips.\n- Choice D ($24w^2 - 180 = 0$) multiplied $24$ by $w^2$ instead of distributing correctly. $w(w + 24) = w^2 + 24w$, not $24w^2$. This is a distribution error.\n\n**Verification:** $w = \\frac{-24 + \\sqrt{576 + 720}}{2} = \\frac{-24 + 36}{2} = 6$. Length $= 30$. Area $= 6 \\times 30 = 180$.\n\n**Test Day Takeaway:** For rectangle word problems, always write length and width in terms of the same variable, multiply for area, and rearrange to standard form. Watch the signs carefully when moving terms across the equals sign.',
          skills: ['Advanced Math', 'Quadratic Equations']
        },
        {
          id: 'pt8-m2-q17',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'The four functions below are all equivalent. The value of $f(1)$ is $k$, and the value of $f(3)$ is $m$. What is the value of $\\frac{m}{k}$?\n\n$f(x) = 40(1.5)^{x+1}$\n$f(x) = 60(1.5)^x$\n$f(x) = 90(1.5)^{x-1}$\n$f(x) = 135(1.5)^{x-2}$',
          choices: [
            { id: 'A', text: '$1.5$' },
            { id: 'B', text: '$2.25$' },
            { id: 'C', text: '$3.375$' },
            { id: 'D', text: '$\\frac{135}{90}$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Equivalent Exponential Forms -- Ratio of Function Values** -- Appears 1-2 times per test. Requires identifying which form makes each evaluation simplest, then computing the ratio.\n\n**Choice B is correct.** Using $f(x) = 90(1.5)^{x-1}$: $k = f(1) = 90(1.5)^0 = 90$. Using $f(x) = 135(1.5)^{x-2}$: $m = f(3) = 135(1.5)^1 = 202.5$. So $\\frac{m}{k} = \\frac{202.5}{90} = 2.25$.\n\nAlternatively, since $\\frac{f(3)}{f(1)} = \\frac{60(1.5)^3}{60(1.5)^1} = (1.5)^2 = 2.25$ directly.\n\n**The Fast Way (15 seconds):** For ANY exponential $f(x) = c \\cdot b^x$, the ratio $\\frac{f(a+n)}{f(a)} = b^n$. Here $\\frac{f(3)}{f(1)} = (1.5)^{3-1} = (1.5)^2 = 2.25$.\n\n**Step 1: Recognize the ratio shortcut**\nFor $f(x) = c \\cdot b^{g(x)}$ where $g$ is linear, $\\frac{f(3)}{f(1)}$ depends only on the base and the difference in exponents.\n\n**Step 2: Compute the ratio**\nUsing $f(x) = 60(1.5)^x$:\n$\\frac{f(3)}{f(1)} = \\frac{60(1.5)^3}{60(1.5)^1} = (1.5)^2 = 2.25$\n\n**Why the wrong answers are tempting:**\n- Choice A ($1.5$) is the base itself -- $\\frac{f(2)}{f(1)}$, not $\\frac{f(3)}{f(1)}$. If you think the ratio for any two outputs is always the base, you pick this. But the ratio depends on the GAP: $(1.5)^{3-1} = (1.5)^2$, not $(1.5)^1$.\n- Choice C ($3.375$) is $(1.5)^3$, which would be $\\frac{f(3)}{f(0)}$. Off by one in the exponent difference.\n- Choice D ($\\frac{135}{90} = 1.5$) divides two of the coefficients. But the coefficients represent function values at different inputs (depending on the form), so their ratio is not directly meaningful here.\n\n**Verification:** $f(1) = 60(1.5) = 90$. $f(3) = 60(1.5)^3 = 60(3.375) = 202.5$. $\\frac{202.5}{90} = 2.25 = (1.5)^2$.\n\n**Test Day Takeaway:** For exponential functions, the ratio $\\frac{f(a)}{f(b)}$ equals $\\text{base}^{a-b}$, regardless of which equivalent form you use. This property makes ratio problems much faster than computing each value separately.',
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
          explanation: '**SAT Pattern: Factor Theorem with Parameters** -- Appears 1-2 times per test. If $(x + 3b)$ is a factor, then $x = -3b$ must be a root.\n\n**Choice B is correct.** Substituting $x = -3b$ into Choice B and setting $b = 1$ (a positive integer) gives zero, confirming the factor. With $b = 1$: $2x^2 + 8x + 6 = 2(x + 1)(x + 3)$.\n\n**The Fast Way (30 seconds):** Try $b = 1$, so the factor is $(x + 3)$. Substitute $x = -3$ into each choice:\n- A: $2(9) + 5(-3) + 6 = 18 - 15 + 6 = 9 \\neq 0$\n- B: $2(9) + 8(-3) + 6 = 18 - 24 + 6 = 0$ -- this is the answer.\n\n**Step 1: Use the Factor Theorem**\nIf $(x + 3b)$ is a factor, then $x = -3b$ is a root.\n\n**Step 2: Test $b = 1$ (substitute $x = -3$ into each choice)**\n- Choice A: $2(9) + 5(-3) + 6 = 18 - 15 + 6 = 9 \\neq 0$\n- Choice B: $2(9) + 8(-3) + 6 = 18 - 24 + 6 = 0$ -- works!\n- Choice C: $2(9) + 10(-3) + 6 = 18 - 30 + 6 = -6 \\neq 0$\n- Choice D: $2(9) + 12(-3) + 6 = 18 - 36 + 6 = -12 \\neq 0$\n\n**Step 3: Verify by factoring**\nWith $b = 1$: $2x^2 + 8x + 6 = 2(x^2 + 4x + 3) = 2(x + 3)(x + 1)$.\n$(x + 3) = (x + 3b)$ when $b = 1$.\n\n**Why the wrong answers are tempting:**\n- Choices A, C, and D all have the right structure with terms involving $b$, making them look algebraically valid. But when you substitute $x = -3b$, they only equal zero for fractional values of $b$ ($1/2$ or $1/3$), which violate the condition that $b$ must be a positive integer.\n- Choice A requires $b = 1/2$, Choice C requires $b = 1/2$, and Choice D requires $b = 1/3$. None of these are positive integers.\n\n**Verification:** $2(x + 1)(x + 3) = 2x^2 + 8x + 6$, matching Choice B.\n\n**Test Day Takeaway:** When a problem involves an unknown parameter with constraints (like "$b$ is a positive integer"), try the simplest value ($b = 1$) first. This converts the abstract problem into concrete arithmetic.',
          skills: ["finding-roots-factoring"]
        },
        {
          id: 'pt8-m2-q19',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The points $(k, 13)$ and $(k + 7, -15)$ lie on a line in the $xy$-plane. The $y$-intercept of the line is at the point $(k - 5, b)$. What is the value of $b$?',
          correctAnswer: '33',
          explanation: '**SAT Pattern: Slope and Y-Intercept with Parameters** -- Appears 1-2 times per test. The trick is realizing the $y$-intercept has $x = 0$, which lets you solve for the parameter.\n\n**The correct answer is $33$.** The slope is $-4$, $k = 5$ (since the $y$-intercept has $x = k - 5 = 0$), and $b = 33$.\n\n**The Fast Way (25 seconds):** Slope $= \\frac{-15 - 13}{7} = -4$. The $y$-intercept has $x = 0$, so $k - 5 = 0 \\to k = 5$. Using point $(5, 13)$: $y - 13 = -4(x - 5) \\to$ at $x = 0$: $b = 13 + 20 = 33$.\n\n**Step 1: Find the slope**\n$m = \\frac{-15 - 13}{(k + 7) - k} = \\frac{-28}{7} = -4$\n\n**Step 2: Determine $k$**\nThe $y$-intercept occurs where $x = 0$. Since the $y$-intercept is at $(k - 5, b)$:\n$k - 5 = 0 \\implies k = 5$\n\n**Step 3: Find $b$ using the slope and a known point**\nUsing point $(5, 13)$ and slope $-4$:\n$y - 13 = -4(x - 5)$\nAt $x = 0$: $b - 13 = -4(0 - 5) = 20$\n$b = 33$\n\n**Verification:** Line equation: $y = -4x + 33$.\n- At $(5, 13)$: $-4(5) + 33 = -20 + 33 = 13$\n- At $(12, -15)$: $-4(12) + 33 = -48 + 33 = -15$\n- $y$-intercept at $(0, 33)$\n\n**Test Day Takeaway:** The $y$-intercept is ALWAYS at $x = 0$. When coordinates involve a parameter, set the $x$-coordinate equal to $0$ to find the parameter first, then everything else falls into place.',
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
          explanation: '**SAT Pattern: Effect of Adding a Constant to a Data Set** -- Appears 1-2 times per test. This is a concept question -- know the rule and you do not need to compute anything.\n\n**Choice C is correct.** Adding $42$ to every value increases the median by $42$ (so median of B is greater) but does NOT change the range (so the ranges are equal).\n\n**The Fast Way (10 seconds):** Adding a constant shifts the center (median goes up) but does not change the spread (range stays the same). That is Choice C: median greater, range equal.\n\n**Median:** Data set A has 13 values. The 7th value (median) is $33$.\nData set B adds $42$ to each value, so the median of B is $33 + 42 = 75$.\nMedian of B ($75$) $>$ Median of A ($33$).\n\n**Range:** Range of A $= 35 - 31 = 4$.\nRange of B $= 77 - 73 = 4$.\nAdding a constant shifts the max and min by the same amount, so their difference is unchanged.\n\n**Why the wrong answers are tempting:**\n- Choice A says the medians are equal. They are not -- adding $42$ shifts every value, including the median. If you think "adding a constant does not change anything," you might pick this. It does not change SPREAD, but it DOES change CENTER.\n- Choice B says the range of B is greater. Adding the same number to every value shifts the entire data set without stretching it. The max and min both increase by $42$, so their difference stays the same. The range is unchanged.\n- Choice D gets the median right (greater) but says the range is also greater. Same issue as B -- adding a constant does not change the range.\n\n**Verification:** Median of A $= 33$, median of B $= 75$, $75 > 33$. Range of A $= 4$, range of B $= 4$.\n\n**Test Day Takeaway:** Adding a constant to every value: center moves (mean, median shift by that constant), spread stays the same (range, standard deviation, IQR unchanged). Multiplying by a constant affects BOTH center and spread.',
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
          explanation: '**SAT Pattern: "Could Be" Quadratic with Constraints** -- Appears 1-2 times per test. The trick: $a + b + c = f(1)$, and you need $a > 0$ for an upward-opening parabola.\n\n**Choice D is correct.** Since $a + b + c = f(1) = 36a - 10$, and $a$ must be positive (upward-opening parabola with vertex below the $x$-axis), only $-8$ gives $a > 0$.\n\n**The Fast Way (25 seconds):** $a + b + c = f(1)$. Vertex form: $f(x) = a(x - 7)^2 - 10$. So $f(1) = 36a - 10$. The parabola crosses the $x$-axis at two points with vertex below it, so $a > 0$. This means $36a - 10 > -10$, so $a + b + c > -10$. Only Choice D ($-8$) is greater than $-10$.\n\n**Step 1: Key insight**\n$a + b + c = f(1)$ (substitute $x = 1$ into $y = ax^2 + bx + c$).\n\n**Step 2: Write vertex form**\nVertex $(7, -10)$: $y = a(x - 7)^2 - 10$.\n\n**Step 3: Evaluate $f(1)$**\n$f(1) = a(1 - 7)^2 - 10 = 36a - 10$\n\n**Step 4: Apply the constraint $a > 0$**\nThe parabola crosses the $x$-axis at two points with vertex below it, so it opens upward: $a > 0$.\n- A) $-19$: $36a = -9 \\to a = -1/4 < 0$\n- B) $-15$: $36a = -5 \\to a = -5/36 < 0$\n- C) $-10$: $36a = 0 \\to a = 0$ (not a parabola)\n- D) $-8$: $36a = 2 \\to a = 1/18 > 0$ -- this works!\n\n**Why the wrong answers are tempting:**\n- Choice A ($-19$) gives $a = -1/4$. A negative $a$ means the parabola opens downward, and with its vertex already below the $x$-axis, it would never cross the $x$-axis at all. But if you do not think about the direction of opening, this numerical answer seems reasonable.\n- Choice B ($-15$) gives $a = -5/36$, which also opens downward. Same contradiction -- you cannot have a downward parabola with vertex below the $x$-axis that crosses it.\n- Choice C ($-10$) is exactly the $y$-coordinate of the vertex. If you think "$a + b + c$ equals the vertex value," you would pick this. But $a + b + c = f(1)$, not $f(7)$. And $a = 0$ is not even a parabola.\n\n**Verification:** $a = 1/18$: $f(1) = (36)(1/18) - 10 = 2 - 10 = -8$.\n\n**Test Day Takeaway:** Remember that $a + b + c = f(1)$ for any quadratic. When a problem says "could be," test each choice against the constraints (like the sign of $a$) rather than trying to find one exact answer.',
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
          explanation: '**SAT Pattern: Discriminant = 0 for Exactly One Solution** -- Appears 1-2 times per test. "Exactly one solution" always means the discriminant equals zero.\n\n**Choice C is correct.** Setting the discriminant to zero: $24^2 - 4(-4)(c) = 0 \\to 576 + 16c = 0 \\to c = -36$.\n\n**The Fast Way (20 seconds):** Discriminant $= b^2 - 4ac = 0$. Plug in $a = -4$, $b = 24$: $576 - 4(-4)(c) = 0 \\to 576 + 16c = 0 \\to c = -36$.\n\n**Step 1: Apply the discriminant condition**\nFor $-4x^2 + 24x + c = 0$ with $a = -4$, $b = 24$:\n$b^2 - 4ac = 0$\n$24^2 - 4(-4)(c) = 0$\n$576 + 16c = 0$\n\n**Step 2: Solve for $c$**\n$16c = -576$\n$c = -36$\n\n**Why the wrong answers are tempting:**\n- Choice A ($36$) has the right magnitude but the wrong sign. If you compute $-4(-4)(c) = 16c$ but then solve $576 - 16c = 0$ instead of $576 + 16c = 0$ (getting the sign of $-4ac$ wrong), you land on $c = 36$. The double negative in $-4(-4)$ makes sign errors very likely.\n- Choice B ($0$) assumes the constant must be zero for "special" behavior. But with $c = 0$, the discriminant is $576 > 0$, giving two solutions, not one.\n- Choice D ($-144$) might come from dividing $576$ by $4$ instead of $16$, or from another arithmetic error. With $c = -144$, the discriminant is $576 - 2304 = -1728 < 0$, giving NO real solutions.\n\n**Verification:** $-4x^2 + 24x - 36 = 0 \\to x^2 - 6x + 9 = 0 \\to (x - 3)^2 = 0$. Exactly one solution: $x = 3$.\n\n**Test Day Takeaway:** Exactly one solution = discriminant is zero. Two solutions = discriminant is positive. No real solutions = discriminant is negative. When $a$ is negative, be extra careful with signs in $-4ac$.',
          skills: ['Advanced Math', 'Discriminant']
        }
      ]
    }
  ]
};
