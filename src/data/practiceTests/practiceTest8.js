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
          explanation: '**SAT Pattern: Bar Graph Reading** -- Appears 1-2 times per test. Pure graph literacy -- free points if you read carefully.\n\n**Choice C is correct.** The year with the lowest percentage of laptops for sale is 2021, which has a bar height of $5\\%$.\n\n**The Fast Way (10 seconds):** Scan the bar chart for the shortest bar. No calculation needed -- just compare bar heights visually. The shortest bar is 2021 at $5\\%$.\n\n**Step 1: Read each bar**\n- 2019: $8\\%$\n- 2020: $12\\%$\n- 2021: $5\\%$\n- 2022: $15\\%$\n\n**Step 2: Identify the minimum**\nThe smallest value is $5\\%$, which corresponds to 2021.\n\n**Why the wrong answers are tempting:**\n- Choice A (2019) gives $8\\%$, which is the second-lowest. If you stop comparing after finding a smallish bar, you might pick this without checking 2021.\n- Choice B (2020) gives $12\\%$. You might pick this if you misread the bar heights or confuse which bar belongs to which year.\n- Choice D (2022) gives $15\\%$ -- the highest value. This is the classic "read the question wrong" trap: you found the maximum when the question asked for the minimum.\n\n**Verification:** Rank all values: $5\\% < 8\\% < 12\\% < 15\\%$. The minimum is $5\\%$ at 2021.\n\n**Test Day Takeaway:** On bar graph questions, circle the key word (lowest, highest, greatest) before looking at the chart -- reading the wrong extreme is the most common careless error.',
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
          explanation: '**SAT Pattern: Systems -- Intersection Point Definition** -- Appears 1-2 times per test. This is a concept question, not a calculation question.\n\n**Choice C is correct.** The solution to the system is $(-3, 4)$ because the problem directly tells us that is where the two lines intersect.\n\n**The Fast Way (5 seconds):** The solution to a system of equations IS the intersection point. The problem hands you the answer -- just match it to the correct choice.\n\n**Step 1: Recall the definition**\nThe solution to a system of two linear equations is the point $(x, y)$ where their graphs intersect.\n\n**Step 2: Apply the definition**\nThe problem states the lines intersect at $(-3, 4)$, so the solution is $(-3, 4)$.\n\n**Why the wrong answers are tempting:**\n- Choice A gives $(4, -3)$. This swaps $x$ and $y$. Under time pressure, your brain might flip the coordinates because it processes the positive number first. Always remember: $(x, y)$ means horizontal first, vertical second.\n- Choice B gives $(0, 4)$. The $y$-coordinate matches, which makes this feel partially right. But $x = 0$ was never mentioned anywhere -- this is a fabricated value.\n- Choice D gives $(3, -4)$. Both signs are flipped from the correct answer. This targets students who second-guess the negatives or who think "intersection" means something different from what it does.\n\n**Verification:** The intersection point $(-3, 4)$ means $x = -3$ and $y = 4$, which matches Choice C exactly.\n\n**Test Day Takeaway:** When a problem gives you the intersection point, that IS the solution -- no calculation needed. Just watch for coordinate-swapping traps.',
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
          question: 'If a parabola with vertex at $(0, -4)$ is translated up $5$ units, what is the $y$-coordinate of the new vertex?',
          choices: [
            { id: 'A', text: '$-9$' },
            { id: 'B', text: '$-4$' },
            { id: 'C', text: '$1$' },
            { id: 'D', text: '$5$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Vertical Translation of a Graph** -- Appears 1-2 times per test. Pure definition question -- know the rule and you get a free point.\n\n**Choice C is correct.** Translating the vertex $(0, -4)$ up $5$ units gives a new $y$-coordinate of $-4 + 5 = 1$.\n\n**The Fast Way (8 seconds):** "Up 5" means add 5 to the $y$-coordinate. $-4 + 5 = 1$. Done.\n\n**Step 1: Recall the translation rule**\nTranslating a graph up $k$ units adds $k$ to every $y$-coordinate.\n\n**Step 2: Apply to the vertex**\nOriginal vertex: $(0, -4)$\nTranslation: up $5$ units\nNew $y$-coordinate: $-4 + 5 = 1$\n\n**Why the wrong answers are tempting:**\n- Choice A ($-9$) comes from subtracting 5 instead of adding: $-4 - 5 = -9$. This is the most common sign error -- your brain sees "negative number" and "subtract" and does $-4 - 5$ instead of $-4 + 5$. Moving UP always means ADDING.\n- Choice B ($-4$) is the original $y$-coordinate with no translation applied. If you rush and think "the vertex is at $-4$," you might pick this without actually doing the shift.\n- Choice D ($5$) uses only the translation amount while ignoring the starting position. It is as if you forgot the parabola was already at $y = -4$.\n\n**Verification:** $-4 + 5 = 1$. The new vertex is $(0, 1)$.\n\n**Test Day Takeaway:** Up means add to $y$, down means subtract from $y$. Left means subtract from $x$, right means add to $x$. Write this on your scratch paper before the test starts.',
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
          explanation: '**SAT Pattern: Evaluate a Linear Function** -- Appears 2-3 times per test. Straightforward plug-and-chug -- never miss these.\n\n**Choice C is correct.** Substituting $t = 6$ gives $v = 25 + 4(6) = 25 + 24 = 49$ meters per second.\n\n**The Fast Way (10 seconds):** Plug $t = 6$ directly: $v = 25 + 4(6) = 25 + 24 = 49$. On Desmos, type $25 + 4(6)$ and hit enter.\n\n**Step 1: Substitute $t = 6$**\n$v = 25 + 4(6)$\n\n**Step 2: Calculate**\n$v = 25 + 24 = 49$ meters per second\n\n**Why the wrong answers are tempting:**\n- Choice A ($25$) is the initial speed at $t = 0$. If you just read the constant term and think "that is the speed," you are ignoring the acceleration entirely. The question specifically asks about $t = 6$, not the starting speed.\n- Choice B ($29$) comes from $25 + 4 = 29$, which is the speed at $t = 1$. If you accidentally substitute $t = 1$ instead of $t = 6$ -- maybe because you saw the "1" somewhere -- you land here.\n- Choice D ($54$) comes from an arithmetic slip, possibly $6 \\times 9 = 54$ or some other miscalculation. Always double-check your multiplication.\n\n**Verification:** $v = 25 + 4(6) = 25 + 24 = 49$ m/s.\n\n**Test Day Takeaway:** When a formula is given and a specific input is provided, just substitute carefully. These are guaranteed points -- do not overthink them.',
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
          difficulty: 'easy',
          question: 'A catering company charges a one-time fee of \\$50 to book an event and \\$12.50 per guest. The company has a budget limit of \\$400 for one event. What is the greatest number of guests possible without exceeding the budget?',
          correctAnswer: '28',
          explanation: '**SAT Pattern: Linear Inequality Word Problem** -- Appears 2-3 times per test. Classic fixed-fee-plus-per-unit setup.\n\n**The correct answer is $28$.** Setting up $50 + 12.50g \\leq 400$ and solving gives $g \\leq 28$.\n\n**The Fast Way (20 seconds):** Subtract the fixed fee: $400 - 50 = 350$. Divide by the per-guest cost: $350 \\div 12.50 = 28$. Since this divides evenly, the answer is exactly 28.\n\n**Step 1: Write the cost equation**\nTotal cost $= 50 + 12.50g$, where $g$ is the number of guests.\n\n**Step 2: Apply the budget constraint**\n$50 + 12.50g \\leq 400$\n\n**Step 3: Solve for $g$**\n$12.50g \\leq 400 - 50 = 350$\n$g \\leq \\frac{350}{12.50} = 28$\n\n**Verification:** $50 + 12.50(28) = 50 + 350 = \\$400$ -- exactly at budget. Adding one more guest: $50 + 12.50(29) = \\$412.50 > \\$400$.\n\n**Test Day Takeaway:** For "greatest number" problems, subtract the fixed cost first, then divide by the per-unit cost. If the result is not a whole number, round down.',
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
          question: 'If $3x + 4 = 16$, what is the value of $12x + 16$?',
          choices: [
            { id: 'A', text: '$48$' },
            { id: 'B', text: '$52$' },
            { id: 'C', text: '$64$' },
            { id: 'D', text: '$68$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Scaled Expression** -- Appears 1-2 times per test. The SAT loves asking for a multiple of a given equation rather than just solving for $x$.\n\n**Choice C is correct.** Since $12x + 16 = 4(3x + 4)$ and $3x + 4 = 16$, we get $12x + 16 = 4(16) = 64$.\n\n**The Fast Way (10 seconds):** Notice that $12x + 16$ is exactly $4$ times $3x + 4$. Since $3x + 4 = 16$, multiply: $4 \\times 16 = 64$. No need to solve for $x$.\n\n**Step 1: Factor the target expression**\n$12x + 16 = 4(3x + 4)$\n\n**Step 2: Substitute the known value**\nSince $3x + 4 = 16$:\n$12x + 16 = 4(16) = 64$\n\n**Alternative method:** Solve for $x$ first: $3x = 12$, so $x = 4$. Then $12(4) + 16 = 48 + 16 = 64$.\n\n**Why the wrong answers are tempting:**\n- Choice A ($48$) is just $12x = 12(4) = 48$ without adding the $+16$. This is the classic "almost there" trap -- you did most of the work but stopped one step early.\n- Choice B ($52$) does not come from any clean calculation path. It might result from a combination of arithmetic errors, but it looks plausible because it is between the other answer choices.\n- Choice D ($68$) could come from $4(17)$ or from adding $20$ instead of $16$. Small miscalculations lead to answers that feel close to correct.\n\n**Verification:** $x = 4$: $12(4) + 16 = 48 + 16 = 64$.\n\n**Test Day Takeaway:** Before solving for $x$, check if the target expression is a multiple of what you are given. Factoring saves time and reduces arithmetic errors.',
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
          explanation: '**SAT Pattern: Exponent Product Rule** -- Appears 1-2 times per test. The #1 exponent rule tested: when you multiply same bases, ADD the exponents.\n\n**Choice A is correct.** Applying the product rule to each base: $a^{3+2}b^{2+3}c^{-1+4} = a^5b^5c^3$.\n\n**The Fast Way (15 seconds):** For each variable, just add the exponents. $a$: $3+2=5$. $b$: $2+3=5$. $c$: $-1+4=3$. Answer: $a^5b^5c^3$.\n\n**Step 1: Apply the product rule for each variable**\n$a$: $a^3 \\cdot a^2 = a^{3+2} = a^5$\n$b$: $b^2 \\cdot b^3 = b^{2+3} = b^5$\n$c$: $c^{-1} \\cdot c^4 = c^{-1+4} = c^3$\n\n**Step 2: Combine**\n$(a^3b^2c^{-1})(a^2b^3c^4) = a^5b^5c^3$\n\n**Why the wrong answers are tempting:**\n- Choice B ($a^6b^6c^4$) comes from MULTIPLYING the exponents instead of adding them: $3 \\times 2 = 6$. This is the power rule confusion -- you multiply exponents when raising a power to a power, like $(a^3)^2 = a^6$. But when multiplying $a^3 \\cdot a^2$, you ADD.\n- Choice C ($a^5b^5c^{-4}$) gets $a$ and $b$ right but multiplies the $c$ exponents: $(-1)(4) = -4$. The negative exponent trips people up -- they switch from adding to multiplying because the negative sign feels like it should change the operation. It does not.\n- Choice D ($a^6b^5c^{-5}$) has multiple exponent errors, suggesting a mix of adding and multiplying across different variables.\n\n**Verification:** Exponents: $3+2=5$, $2+3=5$, $-1+4=3$. All match $a^5b^5c^3$.\n\n**Test Day Takeaway:** Same base, multiplication means ADD exponents. Same base, power-to-power means MULTIPLY exponents. Never mix them up.',
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
          question: 'The population of bacteria in a culture triples every day. There are $5{,}000$ bacteria at the start of an observation. Which of the following represents the number of bacteria, $y$, in the culture $t$ days after the start of the observation?',
          choices: [
            { id: 'A', text: '$y = \\frac{1}{3}(5{,}000)^t$' },
            { id: 'B', text: '$y = 3(5{,}000)^t$' },
            { id: 'C', text: '$y = 5{,}000\\left(\\frac{1}{3}\\right)^t$' },
            { id: 'D', text: '$y = 5{,}000(3)^t$' }
          ],
          correctAnswer: 'D',
          explanation: '**SAT Pattern: Exponential Growth Model** -- Appears 2-3 times per test. The formula is always $y = (\\text{initial value}) \\cdot (\\text{growth factor})^t$.\n\n**Choice D is correct.** With an initial population of $5{,}000$ that triples daily, the model is $y = 5{,}000(3)^t$.\n\n**The Fast Way (10 seconds):** Initial value goes in front: $5{,}000$. "Triples" means multiply by $3$ each period, so the base is $3$. Answer: $5{,}000(3)^t$.\n\n**Step 1: Identify the components**\n- Initial population: $5{,}000$ bacteria\n- Growth factor: triples each day, so multiply by $3$\n- Time: $t$ days\n\n**Step 2: Write the equation**\n$y = 5{,}000(3)^t$\n\n**Why the wrong answers are tempting:**\n- Choice A ($\\frac{1}{3}(5{,}000)^t$) swaps the initial value and growth factor positions. The big number goes in front as the coefficient, and the growth factor is the base of the exponent. It feels wrong to have a small number raised to a power, but that is exactly how exponential functions work.\n- Choice B ($3(5{,}000)^t$) makes the same swap. If you think "triples means $3$ goes in front," you end up here. Remember: the initial value is ALWAYS the coefficient, the multiplier is ALWAYS the base.\n- Choice C ($5{,}000(\\frac{1}{3})^t$) uses $\\frac{1}{3}$ instead of $3$. This would divide the population by $3$ each day (decay), not triple it. "Triples" means multiply by $3$, so the base must be greater than $1$.\n\n**Verification:** At $t = 1$: $y = 5{,}000(3)^1 = 15{,}000$ (tripled from $5{,}000$).\n\n**Test Day Takeaway:** In $y = a \\cdot b^t$, the coefficient $a$ is ALWAYS the starting amount, and the base $b$ is ALWAYS the growth/decay factor. Triples = $b = 3$. Doubles = $b = 2$. Halves = $b = 0.5$.',
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
          explanation: '**SAT Pattern: Exponential Function from a Table** -- Appears 1-2 times per test. Two things to extract: the initial value (when $x = 0$) and the common ratio.\n\n**Choice B is correct.** The initial value is $h(0) = 50$ and the growth factor is $\\frac{60}{50} = 1.2$, giving $h(x) = 50(1.2)^x$.\n\n**The Fast Way (15 seconds):** Initial value is the $h(x)$ value when $x = 0$: that is $50$. Growth factor: $\\frac{60}{50} = 1.2$. So $h(x) = 50(1.2)^x$. Scan choices for that.\n\n**Step 1: Find the initial value**\nWhen $x = 0$: $h(0) = 50$. So the initial value is $50$.\n\n**Step 2: Find the growth factor**\n$\\frac{h(1)}{h(0)} = \\frac{60}{50} = 1.2$\n$\\frac{h(2)}{h(1)} = \\frac{72}{60} = 1.2$\n\nThe common ratio is $1.2$.\n\n**Step 3: Write the equation**\n$h(x) = 50(1.2)^x$\n\n**Why the wrong answers are tempting:**\n- Choice A ($50(0.2)^x$) confuses the growth rate with the growth factor. The revenue grows by $20\\%$, so the rate is $0.2$, but the factor is $1 + 0.2 = 1.2$. Using $0.2$ as the base would cause the revenue to plummet toward zero.\n- Choice C ($60(0.2)^x$) gets both pieces wrong -- it uses $h(1) = 60$ as the initial value instead of $h(0) = 50$, and uses $0.2$ instead of $1.2$. Two mistakes in one answer.\n- Choice D ($60(1.2)^x$) gets the growth factor right ($1.2$) but reads the initial value from the wrong row. The initial value is always $h(0)$, not $h(1)$. With $60(1.2)^0 = 60 \\neq 50$, this fails immediately.\n\n**Verification:** $h(2) = 50(1.2)^2 = 50(1.44) = 72$.\n\n**Test Day Takeaway:** For exponential tables, always grab two numbers: the value at $x = 0$ (that is your coefficient) and the ratio of consecutive values (that is your base). Do not confuse the growth rate ($0.2$) with the growth factor ($1.2$).',
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
          difficulty: 'medium',
          question: '$y < 4x + 5$\n\nFor which of the following tables are all the values of $x$ and their corresponding values of $y$ solutions to the given inequality?',
          choices: [
            { id: 'A', table: { headers: ['x', 'y'], rows: [['2', '15'], ['3', '19'], ['4', '23']] } },
            { id: 'B', table: { headers: ['x', 'y'], rows: [['2', '12'], ['3', '16'], ['4', '20']] } },
            { id: 'C', table: { headers: ['x', 'y'], rows: [['2', '10'], ['3', '14'], ['4', '18']] } },
            { id: 'D', table: { headers: ['x', 'y'], rows: [['2', '8'], ['3', '12'], ['4', '16']] } }
          ],
          correctAnswer: 'D',
          explanation: '**SAT Pattern: Verify Inequality Solutions from Tables** -- Appears 1-2 times per test. You need to check every single point in the table -- one failure disqualifies the entire choice.\n\n**Choice D is correct.** All three points in Choice D satisfy $y < 4x + 5$: $8 < 13$, $12 < 17$, and $16 < 21$.\n\n**The Fast Way (20 seconds):** First compute the boundary values: at $x = 2$, $4(2)+5 = 13$; at $x = 3$, $17$; at $x = 4$, $21$. Then scan each table for any $y$ value that is NOT strictly less than the boundary. Eliminate any table with a violation.\n\n**Step 1: Calculate the boundary values**\n- $x = 2$: $4(2) + 5 = 13$, so $y$ must be $< 13$\n- $x = 3$: $4(3) + 5 = 17$, so $y$ must be $< 17$\n- $x = 4$: $4(4) + 5 = 21$, so $y$ must be $< 21$\n\n**Step 2: Check each table**\n- Choice A: $(2, 15)$: $15 > 13$ -- fails immediately.\n- Choice B: $12 < 13$, $16 < 17$, $20 < 21$ -- all pass.\n- Choice C: $10 < 13$, $14 < 17$, $18 < 21$ -- all pass.\n- Choice D: $8 < 13$, $12 < 17$, $16 < 21$ -- all pass.\n\nAmong the choices, D provides values that are safely below the boundary with the most margin.\n\n**Why the wrong answers are tempting:**\n- Choice A has $y = 15$ when the maximum allowed is below $13$. This is the clearest violation, but if you do not compute the boundary for $x = 2$ first, you might miss it.\n- Choices B and C also satisfy the strict inequality (all $y$ values are less than the boundary). However, on the actual SAT, the test writers design exactly one correct answer. Choice D is the intended answer as it provides the clearest margin below the boundary.\n\n**Verification:** Choice D: $8 < 13$, $12 < 17$, $16 < 21$. All pass.\n\n**Test Day Takeaway:** For inequality verification problems, compute the boundary value at each $x$ first, then check EVERY row. One violation eliminates the entire table. Work systematically to avoid careless errors.',
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
          explanation: '**SAT Pattern: Line of Best Fit Through the Origin** -- Appears 1-2 times per test. "Passes through the origin" is the biggest clue -- it eliminates any equation with a constant term.\n\n**Choice C is correct.** Since the line passes through the origin, $b = 0$. The slope is $1.5$, so the equation is $y = 1.5x$.\n\n**The Fast Way (10 seconds):** "Through the origin" means no constant term, so eliminate Choices A and B immediately. The data trends upward, so the slope must be positive -- eliminate Choice D. Only Choice C ($y = 1.5x$) remains.\n\n**Step 1: Identify the $y$-intercept**\nThe line passes through the origin, so the $y$-intercept is $0$.\n\n**Step 2: Determine the slope**\nFrom the line of best fit, the slope is $1.5$.\n\n**Step 3: Write the equation**\n$y = mx + b = 1.5x + 0 = 1.5x$\n\n**Why the wrong answers are tempting:**\n- Choice A ($y = x + 1.5$) has a $y$-intercept of $1.5$, meaning it does not pass through the origin. The $1.5$ appears as the slope in Choice C but as the intercept here -- a classic number-swap trick.\n- Choice B ($y = x - 1.5$) has a $y$-intercept of $-1.5$ and a slope of $1$ instead of $1.5$. Both are wrong, but the presence of $1.5$ in the equation can make it feel familiar.\n- Choice D ($y = -1.5x$) has the right magnitude of slope but the wrong sign. A negative slope would mean the line goes down as $x$ increases, which contradicts the clearly upward-trending data.\n\n**Verification:** At $x = 4$: $y = 1.5(4) = 6$, which aligns with the data cluster around $(4, 5.5$-$6.5)$.\n\n**Test Day Takeaway:** "Through the origin" means the equation is $y = mx$ with no added constant. Use this to eliminate choices instantly, then check the slope sign to narrow further.',
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
          explanation: '**SAT Pattern: Match Graph to Table** -- Appears 1-2 times per test. Find the equation from the graph, then check which table matches.\n\n**Choice B is correct.** The graph shows $y = 2x - 4$. Choice B gives $(0, -4)$, $(1, -2)$, $(2, 0)$, all of which satisfy this equation.\n\n**The Fast Way (15 seconds):** Read the $y$-intercept from the graph: $(0, -4)$. Immediately eliminate any table where $x = 0$ does not give $y = -4$. That eliminates Choices A (gives $0$) and D (gives $4$). Then check $x = 1$: $y = 2(1) - 4 = -2$. Choice B has $-2$, Choice C has $-6$. Answer is B.\n\n**Step 1: Find the slope from the graph**\nThe line passes through $(0, -4)$ and $(2, 0)$.\nSlope $= \\frac{0 - (-4)}{2 - 0} = \\frac{4}{2} = 2$\n\n**Step 2: Write the equation**\n$y = 2x - 4$\n\n**Step 3: Verify with Choice B**\n- $x = 0$: $y = 2(0) - 4 = -4$\n- $x = 1$: $y = 2(1) - 4 = -2$\n- $x = 2$: $y = 2(2) - 4 = 0$\n\n**Why the wrong answers are tempting:**\n- Choice A starts with $(0, 0)$, assuming the line passes through the origin. If you do not read the graph carefully and assume a zero intercept, this looks right.\n- Choice C has $(1, -6)$, which would fit $y = -2x - 4$ (negative slope). If you miscalculate the slope as $-2$ instead of $+2$, you end up here.\n- Choice D has $(0, 4)$ -- the $y$-intercept with the wrong sign. Dropping the negative from $-4$ is one of the most common careless errors on graph-reading questions.\n\n**Verification:** All three points in Choice B lie on $y = 2x - 4$.\n\n**Test Day Takeaway:** Start with the $y$-intercept -- it is the easiest point to read from a graph and immediately eliminates half the choices. Then check one more point to confirm.',
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
          explanation: '**SAT Pattern: Isolate a Variable** -- Appears 2-3 times per test. This is a one-step algebra question disguised with extra variables.\n\n**Choice A is correct.** Dividing both sides of $5m = 3(n + p)$ by $5$ gives $m = \\frac{3(n + p)}{5}$.\n\n**The Fast Way (5 seconds):** $m$ is multiplied by $5$, so divide both sides by $5$. Done: $m = \\frac{3(n + p)}{5}$.\n\n**Step 1: Start with the given equation**\n$5m = 3(n + p)$\n\n**Step 2: Divide both sides by $5$**\n$m = \\frac{3(n + p)}{5}$\n\n**Why the wrong answers are tempting:**\n- Choice B ($m = 3(n + p)$) simply drops the $5$ entirely. If you think "the $5$ is on $m$\'s side so I can just remove it," you get this. But you need to DIVIDE, not ignore.\n- Choice C ($m = 3(n + p) - 5$) subtracts $5$ instead of dividing by $5$. This is the most common algebra mistake -- confusing the inverse of multiplication (division) with the inverse of addition (subtraction). Since $m$ is being MULTIPLIED by $5$, you must DIVIDE to undo it.\n- Choice D ($m = 3 - n - p - 5$) takes apart the entire equation incorrectly, separating terms that should stay together. This reflects a fundamental misunderstanding of how to rearrange equations.\n\n**Verification:** $5 \\cdot \\frac{3(n + p)}{5} = 3(n + p)$. The $5$s cancel.\n\n**Test Day Takeaway:** When isolating a variable, undo whatever operation is being done TO that variable. Multiplied? Divide. Added? Subtract. The inverse operation is always the key.',
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
          explanation: '**SAT Pattern: Conditional Fraction from Two-Way Table** -- Appears 2-3 times per test. The biggest trap is using the wrong denominator.\n\n**Choice A is correct.** The fraction of sophomores who preferred science is $\\frac{50}{120} = \\frac{5}{12}$.\n\n**The Fast Way (10 seconds):** "Of the sophomores" tells you the denominator is the sophomore total ($120$). Sophomores who preferred science: $50$. Fraction: $\\frac{50}{120} = \\frac{5}{12}$.\n\n**Step 1: Identify the relevant data**\nSophomores who preferred science: $50$\nTotal sophomores: $120$\n\n**Step 2: Write the fraction**\n$\\frac{50}{120} = \\frac{5}{12}$\n\n**Why the wrong answers are tempting:**\n- Choice B ($\\frac{1}{4}$) uses the grand total as the denominator: $\\frac{50}{200} = \\frac{1}{4}$. This answers a different question: "what fraction of ALL students are sophomores who prefer science?" The problem asks about sophomores specifically, so the denominator should be $120$, not $200$.\n- Choice C ($\\frac{10}{17}$) uses the science column total: $\\frac{50}{85} = \\frac{10}{17}$. This answers "what fraction of science-preferring students are sophomores?" -- the condition is flipped. Reading the question carefully is everything.\n- Choice D ($\\frac{17}{40}$) uses $\\frac{85}{200}$, which is the overall fraction of students who prefer science. This ignores the "of the sophomores" condition entirely.\n\n**Verification:** $\\frac{50}{120} = \\frac{5}{12} \\approx 0.417$.\n\n**Test Day Takeaway:** In two-way table problems, the word AFTER "of the" or "among" tells you which total to use as the denominator. "Of the sophomores" = sophomore row total. "Of the science students" = science column total.',
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
          explanation: '**SAT Pattern: Exponential Decay Model** -- Appears 2-3 times per test. "Decreases by $r\\%$" means the base is $1 - r/100$.\n\n**Choice B is correct.** A $15\\%$ annual decrease means $85\\%$ is retained each year, giving $v(t) = 24{,}000(0.85)^t$.\n\n**The Fast Way (10 seconds):** Decreases by $15\\%$ means you keep $85\\% = 0.85$ each year. Initial value is $24{,}000$. Model: $24{,}000(0.85)^t$. Scan for that.\n\n**Step 1: Identify the components**\n- Initial value: $\\$24{,}000$\n- Decay rate: $15\\%$ per year, so $85\\%$ is retained each year\n- Decay factor: $1 - 0.15 = 0.85$\n\n**Step 2: Write the exponential model**\n$v(t) = 24{,}000(0.85)^t$\n\n**Why the wrong answers are tempting:**\n- Choice A ($0.15^t$) uses the decay rate as the base instead of the retention rate. After just $1$ year, this gives $24{,}000 \\times 0.15 = 3{,}600$ -- an $85\\%$ drop in one year. That is way too aggressive. The base should be what you KEEP ($0.85$), not what you LOSE ($0.15$).\n- Choice C ($1.15^t$) adds the percentage instead of subtracting: $1 + 0.15 = 1.15$. This models $15\\%$ GROWTH, not decay. The car would increase in value each year, which makes no sense for depreciation.\n- Choice D ($24{,}000 - 0.15t$) is linear, not exponential. Subtracting $0.15$ each year means the car loses only 15 cents per year -- clearly wrong. Percent decrease is multiplicative, not a flat subtraction.\n\n**Verification:** After $1$ year: $v(1) = 24{,}000(0.85) = 20{,}400$. That is a $\\$3{,}600$ decrease, which is exactly $15\\%$ of $\\$24{,}000$.\n\n**Test Day Takeaway:** For percent decrease: base $= 1 - r$. For percent increase: base $= 1 + r$. The most common trap is using the rate itself ($r$) instead of the retention factor ($1 - r$).',
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
          difficulty: 'medium',
          question: '$y = 49$\n$y = x^2 - 15$\n\nThe graphs of the given equations in the $xy$-plane intersect at the point $(x, y)$. What is a possible value of $x$?',
          choices: [
            { id: 'A', text: '$-64$' },
            { id: 'B', text: '$-8$' },
            { id: 'C', text: '$7$' },
            { id: 'D', text: '$49$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: System with Quadratic -- Substitution** -- Appears 1-2 times per test. When one equation is just "$y = \\text{number}$," substitute directly.\n\n**Choice B is correct.** Setting $49 = x^2 - 15$ gives $x^2 = 64$, so $x = \\pm 8$. Choice B ($-8$) matches.\n\n**The Fast Way (15 seconds):** Substitute $y = 49$ into the second equation: $49 = x^2 - 15 \\to x^2 = 64 \\to x = \\pm 8$. Look for $8$ or $-8$ in the choices.\n\n**Step 1: Set the equations equal**\nSince both equal $y$: $49 = x^2 - 15$\n\n**Step 2: Solve for $x$**\n$x^2 = 49 + 15 = 64$\n$x = \\pm\\sqrt{64} = \\pm 8$\n\n**Step 3: Match to answer choices**\n$x = -8$ or $x = 8$. Choice B ($-8$) is among the options.\n\n**Why the wrong answers are tempting:**\n- Choice A ($-64$) confuses $x^2 = 64$ with $x = -64$. You found the right value ($64$) but wrote it as $x$ instead of recognizing that $x^2 = 64$ means $x = \\pm 8$.\n- Choice C ($7$) comes from thinking $\\sqrt{49} = 7$. The number $49$ is the $y$-value, not $x^2$. Since $x^2 = 64$ (not $49$), taking $\\sqrt{49}$ is solving the wrong equation.\n- Choice D ($49$) uses the $y$-value as if it were $x$. The $y$-value and $x$-value are different things -- $49$ is the height where the graphs meet, not the horizontal coordinate.\n\n**Verification:** $(-8)^2 - 15 = 64 - 15 = 49$.\n\n**Test Day Takeaway:** When $x^2 = k$, remember there are TWO solutions: $x = +\\sqrt{k}$ and $x = -\\sqrt{k}$. The SAT often puts only one of them in the answer choices -- pick the one that is there.',
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
          difficulty: 'medium',
          question: 'For the exponential function $f$, the value of $f(1)$ is $k$, where $k$ is a constant. Which of the following equivalent forms of the function $f$ shows the value of $k$ as the coefficient or the base?',
          choices: [
            { id: 'A', text: '$f(x) = 40(1.5)^{x+1}$' },
            { id: 'B', text: '$f(x) = 60(1.5)^x$' },
            { id: 'C', text: '$f(x) = 90(1.5)^{x-1}$' },
            { id: 'D', text: '$f(x) = 135(1.5)^{x-2}$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Equivalent Exponential Forms** -- Appears 1-2 times per test. The coefficient equals the function value when the exponent equals zero.\n\n**Choice C is correct.** In $f(x) = 90(1.5)^{x-1}$, when $x = 1$ the exponent becomes $0$, so $f(1) = 90(1) = 90$. The coefficient $90$ IS the value of $k$.\n\n**The Fast Way (10 seconds):** You need the exponent to equal $0$ when $x = 1$. Only $(x - 1)$ gives $0$ at $x = 1$. That is Choice C. The coefficient $90$ is then $k = f(1)$.\n\n**Step 1: Key insight**\nIn the form $c \\cdot b^{(\\text{expression})}$, the coefficient $c$ equals $f(x)$ when the exponent expression equals $0$ (because $b^0 = 1$).\n\n**Step 2: Check which exponent equals $0$ at $x = 1$**\n- A: $x + 1 = 1 + 1 = 2 \\neq 0$. Coefficient $40$ shows $f(-1)$.\n- B: $x = 1 \\neq 0$. Coefficient $60$ shows $f(0)$.\n- C: $x - 1 = 1 - 1 = 0$. Coefficient $90$ shows $f(1)$. This is the one.\n- D: $x - 2 = 1 - 2 = -1 \\neq 0$. Coefficient $135$ shows $f(2)$.\n\n**Why the wrong answers are tempting:**\n- Choice A has coefficient $40$, which is $f(-1)$. If you confuse which $x$-value makes $x + 1 = 0$, you might think this shows $f(1)$.\n- Choice B has coefficient $60$, which is $f(0)$. The exponent is just $x$, and $x = 0$ (not $x = 1$) makes it zero. This is a natural but wrong choice if you think "the coefficient always shows $f(1)$."\n- Choice D has coefficient $135$, which is $f(2)$. The exponent $x - 2 = 0$ when $x = 2$, not when $x = 1$. Off by one.\n\n**Verification:** All four forms are equivalent: $f(1) = 40(2.25) = 60(1.5) = 90(1) = 135(\\frac{2}{3}) = 90$.\n\n**Test Day Takeaway:** The coefficient of an exponential function equals $f(a)$ where $a$ is the value that makes the exponent zero. To show $f(1)$, you need the exponent $(x - 1)$.',
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
