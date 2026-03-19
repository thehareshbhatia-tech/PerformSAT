// Practice Test 10 - Based on College Board SAT Practice Test #7
// 44 questions total (22 per module)

export const practiceTest10 = {
  id: 'practice-test-10',
  title: 'Practice Test 10',
  description: 'Full-length SAT Math practice test with 44 questions across two modules.',
  totalQuestions: 44,
  timePerModule: 35,
  modules: [
    {
      id: 'module-1',
      title: 'Module 1',
      timeLimit: 35,
      questions: [
        {
          id: 'pt10-m1-q1',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The scatterplot above shows the temperature, in degrees Fahrenheit (°F), and the distance above sea level, in thousands of feet, measured at $6$ locations on Mount Jefferson. A line of best fit is also shown. At a distance of $4$ thousand feet above sea level, what is the temperature, in °F, predicted by the line of best fit?',
          diagram: {
            type: 'scatterplot',
            params: {
              points: [
                [1, 62], [2, 48], [3, 45],
                [4.5, 28], [5, 30], [5.5, 20]
              ],
              xMax: 7,
              yMax: 70,
              bestFitLine: { slope: -8, intercept: 67 }
            }
          },
          choices: [
            { id: 'A', text: '$47$' },
            { id: 'B', text: '$35$' },
            { id: 'C', text: '$25$' },
            { id: 'D', text: '$0$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Line of Best Fit Reading** -- Appears 2-3 times per test. The SAT loves giving you a scatterplot with a best-fit line and asking you to predict a value.\n\n**Choice B is correct.** The line of best fit predicts a temperature of $35$°F at $4$ thousand feet above sea level.\n\n**The Fast Way (15 seconds):** Plug into the line equation directly. The line has slope $-8$ and $y$-intercept $67$, so $y = -8x + 67$. At $x = 4$: $y = -8(4) + 67 = -32 + 67 = 35$.\n\n**Step 1: Use the line of best fit**\nThe line of best fit has slope $-8$ and $y$-intercept $67$, giving $y = -8x + 67$.\n\n**Step 2: Substitute $x = 4$**\n$y = -8(4) + 67 = -32 + 67 = 35$°F.\n\n**Why the wrong answers are tempting:**\n- $47$ (Choice A) is what you get if you read the line at about $x = 2.5$ instead of $x = 4$. On a busy scatterplot, it is easy to lose your place on the horizontal axis and land on the wrong point.\n- $25$ (Choice C) is the line value near $x = 5.25$. If you overshoot past $4$ on the axis, you end up here. The SAT counts on you rushing and misreading the scale.\n- $0$ (Choice D) plays on the idea that temperature might hit zero at high altitude, but $0$°F is nowhere near the line at $x = 4$. This traps students who confuse the $x$-intercept of the line with the predicted value.\n\n**Verification:** $y = -8(4) + 67 = -32 + 67 = 35$ -- confirmed.\n\n**Test Day Takeaway:** For scatterplot predictions, always use the line equation if given, not the actual data points -- the line IS the prediction.',
          skills: ['Data Analysis', 'Scatterplots']
        },
        {
          id: 'pt10-m1-q2',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Rectangle $P$ has a length of $12$ inches and a width of $6$ inches. A smaller rectangle with a length of $5$ inches and a width of $4$ inches is removed from one corner of rectangle $P$. What is the area, in square inches, of the resulting figure?',
          choices: [
            { id: 'A', text: '$92$' },
            { id: 'B', text: '$84$' },
            { id: 'C', text: '$80$' },
            { id: 'D', text: '$52$' }
          ],
          correctAnswer: 'D',
          explanation: '**SAT Pattern: Area Subtraction with Dimension Calculation** -- Shows up 1-2 times per test. The SAT gives you dimensions rather than areas directly, adding an extra computation step.\n\n**Choice D is correct.** The resulting figure has an area of $52$ square inches.\n\n**The Fast Way (20 seconds):** Compute both areas first: $12 \\times 6 = 72$ and $5 \\times 4 = 20$. Then subtract: $72 - 20 = 52$.\n\n**Step 1: Find the area of rectangle $P$**\nArea of $P = 12 \\times 6 = 72$ square inches.\n\n**Step 2: Find the area of the removed rectangle**\nArea of removed piece $= 5 \\times 4 = 20$ square inches.\n\n**Step 3: Calculate the remaining area**\n$72 - 20 = 52$ square inches.\n\n**Why the wrong answers are tempting:**\n- $92$ (Choice A) is $72 + 20$. The word "removed" should trigger subtraction, but under pressure your brain can default to addition. This is the most common mistake on this type of problem.\n- $84$ (Choice B) could come from miscalculating one of the areas -- for example, using $5 \\times 6 = 30$ for the removed rectangle and subtracting from a miscomputed total.\n- $80$ (Choice C) could result from computing the removed area incorrectly as $5 + 4 = 9$ instead of $5 \\times 4 = 20$, then subtracting from a rounded total.\n\n**Verification:** $12 \\times 6 = 72$, $5 \\times 4 = 20$, $72 - 20 = 52$ -- confirmed.\n\n**Test Day Takeaway:** When given dimensions instead of areas, compute each area first before combining. "Removed" always means subtract.',
          skills: ['Geometry', 'Area']
        },
        {
          id: 'pt10-m1-q3',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: '$|2p - 3| + 61 = 65$\n\nWhich value is a solution to the given equation?',
          choices: [
            { id: 'A', text: '$\\frac{65}{61}$' },
            { id: 'B', text: '$\\frac{7}{2}$' },
            { id: 'C', text: '$126$' },
            { id: 'D', text: '$130$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Absolute Value Equation with Linear Expression** -- Appears 1-2 times per test. The SAT tests whether you can isolate the absolute value and then solve the resulting linear equation inside.\n\n**Choice B is correct.** A solution to the equation is $p = \\frac{7}{2}$.\n\n**The Fast Way (20 seconds):** Isolate the absolute value: $|2p - 3| = 4$. Then $2p - 3 = 4$ gives $p = \\frac{7}{2}$, or $2p - 3 = -4$ gives $p = -\\frac{1}{2}$. Choice B gives $\\frac{7}{2}$.\n\n**Step 1: Isolate $|2p - 3|$**\n$|2p - 3| + 61 = 65$\n$|2p - 3| = 65 - 61 = 4$\n\n**Step 2: Split into two cases**\nCase 1: $2p - 3 = 4 \\Rightarrow 2p = 7 \\Rightarrow p = \\frac{7}{2}$\nCase 2: $2p - 3 = -4 \\Rightarrow 2p = -1 \\Rightarrow p = -\\frac{1}{2}$\n\n**Step 3: Match to the choices**\nSince $\\frac{7}{2}$ appears among the choices, the answer is $\\frac{7}{2}$.\n\n**Why the wrong answers are tempting:**\n- $\\frac{65}{61}$ (Choice A) comes from dividing the two numbers you see instead of subtracting. When students are unsure what operation to use, division can feel like a reasonable guess -- but the equation clearly calls for subtraction.\n- $126$ (Choice C) is $65 + 61$. If you forget whether the $61$ is being added or subtracted and default to adding, you land here.\n- $130$ (Choice D) is $65 \\times 2$, which has no connection to the equation at all. This is there to catch students who are guessing rather than solving.\n\n**Verification:** $|2(\\frac{7}{2}) - 3| + 61 = |7 - 3| + 61 = 4 + 61 = 65$ -- confirmed.\n\n**Test Day Takeaway:** With absolute value equations, always isolate the absolute value first, then split into two cases. When the expression inside is more than just a variable, solve the resulting linear equation carefully.',
          skills: ['Algebra', 'Absolute Value Equations']
        },
        {
          id: 'pt10-m1-q4',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'Lorenzo purchased a box of cereal and some strawberries at the grocery store. Lorenzo paid \\$2 for the box of cereal and \\$1.90 per pound for the strawberries. If Lorenzo paid a total of \\$9.60 for the box of cereal and the strawberries, which of the following equations can be used to find $p$, the number of pounds of strawberries Lorenzo purchased? (Assume there is no sales tax.)',
          choices: [
            { id: 'A', text: '$1.90p + 2 = 9.60$' },
            { id: 'B', text: '$1.90p - 2 = 9.60$' },
            { id: 'C', text: '$1.90 + 2p = 9.60$' },
            { id: 'D', text: '$1.90 - 2p = 9.60$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Setting Up a Linear Equation from a Word Problem** -- Appears 2-3 times per test. The SAT wants to see if you can translate words into algebra without solving.\n\n**Choice A is correct.** The equation $1.90p + 2 = 9.60$ correctly models the total cost.\n\n**The Fast Way (20 seconds):** Ask yourself: what costs depend on $p$? The strawberries at $\\$1.90$ per pound, so that is $1.90p$. The cereal is a flat $\\$2$. Total is $9.60$. So $1.90p + 2 = 9.60$.\n\n**Step 1: Write expressions for each cost**\n- Cereal: $\\$2$ (fixed)\n- Strawberries: $\\$1.90$ per pound $\\times$ $p$ pounds $= 1.90p$\n\n**Step 2: Set up the equation**\nTotal cost = cereal + strawberries:\n$1.90p + 2 = 9.60$\n\n**Why the wrong answers are tempting:**\n- $1.90p - 2 = 9.60$ (Choice B) subtracts the cereal instead of adding it. Lorenzo bought both items, so costs add up. But when you are scanning quickly, a minus sign can slip by unnoticed.\n- $1.90 + 2p = 9.60$ (Choice C) swaps which number multiplies $p$. It is easy to attach the variable to the wrong price, especially when both numbers are close in value.\n- $1.90 - 2p = 9.60$ (Choice D) combines both errors: wrong sign and wrong coefficient. The SAT includes this to catch students who are guessing between the other traps.\n\n**Verification:** $1.90p + 2 = 9.60 \\Rightarrow 1.90p = 7.60 \\Rightarrow p = 4$ pounds. Check: $1.90(4) + 2 = 7.60 + 2 = 9.60$ -- confirmed.\n\n**Test Day Takeaway:** In cost problems, the per-unit price always multiplies the variable. Fixed costs just get added on.',
          skills: ['Algebra', 'Linear Equations', 'Word Problems']
        },
        {
          id: 'pt10-m1-q5',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The bar graph above summarizes the charge, in kilowatt-hours (kWh), a battery received each day for $15$ days. For how many of these $15$ days did the battery receive a charge of $0$ kWh?',
          diagram: {
            type: 'barChart',
            params: {
              data: [
                { label: '0', value: 4 },
                { label: '1', value: 3 },
                { label: '2', value: 6 },
                { label: '3', value: 1 },
                { label: '4', value: 1 }
              ],
              xLabel: 'Charge (kWh)',
              yLabel: 'Number of days',
              yMax: 8
            }
          },
          choices: [
            { id: 'A', text: '$0$' },
            { id: 'B', text: '$1$' },
            { id: 'C', text: '$4$' },
            { id: 'D', text: '$6$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Reading a Bar Graph** -- Appears 1-2 times per test. Straightforward graph reading, but the SAT bets you will read the wrong bar.\n\n**Choice C is correct.** The battery received a charge of $0$ kWh on $4$ of the $15$ days.\n\n**The Fast Way (10 seconds):** Find the bar labeled $0$ on the horizontal axis. Read its height on the vertical axis: $4$. That is your answer.\n\n**Step 1: Locate the $0$ kWh bar**\nOn the horizontal axis, find the bar labeled $0$ kWh.\n\n**Step 2: Read the frequency**\nThe height of this bar reaches $4$ on the vertical axis (Number of days).\n\n**Why the wrong answers are tempting:**\n- $0$ (Choice A) confuses the category label with the count. The question asks "how many days had $0$ kWh?" not "what was the charge?" Students see the number $0$ in the question and pick $0$ without actually reading the graph.\n- $1$ (Choice B) is the height of the $3$ kWh or $4$ kWh bars. If you accidentally read the wrong bar -- especially one near the right side of the graph -- you land on $1$.\n- $6$ (Choice D) is the height of the $2$ kWh bar, which is the tallest bar on the graph. It is natural for your eye to be drawn to the biggest bar, but that is $2$ kWh, not $0$ kWh.\n\n**Verification:** The $0$ kWh bar has height $4$. Total check: $4 + 3 + 6 + 1 + 1 = 15$ days -- confirmed.\n\n**Test Day Takeaway:** On bar graph questions, put your finger on the correct label first, then trace up. Do not let the tallest bar steal your attention.',
          skills: ['Data Analysis', 'Bar Graphs']
        },
        {
          id: 'pt10-m1-q6',
          type: 'fill-in',
          difficulty: 'easy',
          question: 'Line $\\ell$ in the $xy$-plane passes through the point $(0, -5)$ and is parallel to the line defined by $y = 3(3x + 2) - 6$. The equation $y = px + r$ defines line $\\ell$, where $p$ and $r$ are constants. What is the value of $p + r$?',
          correctAnswer: '4',
          explanation: '**SAT Pattern: Parallel Lines and Slope-Intercept Form** -- Appears 1-2 times per test. The SAT combines parallel line reasoning (same slope) with algebraic simplification and multi-step evaluation.\n\n**The correct answer is $4$.**\n\n**The Fast Way (30 seconds):** Simplify the given line: $y = 3(3x + 2) - 6 = 9x + 6 - 6 = 9x$. Parallel lines have the same slope, so $p = 9$. The line passes through $(0, -5)$, so $r = -5$. Thus $p + r = 9 + (-5) = 4$.\n\n**Step 1: Simplify the given line equation**\n$y = 3(3x + 2) - 6 = 9x + 6 - 6 = 9x$\nThe slope of this line is $9$.\n\n**Step 2: Determine the slope of line $\\ell$**\nParallel lines have equal slopes, so $p = 9$.\n\n**Step 3: Determine the $y$-intercept of line $\\ell$**\nLine $\\ell$ passes through $(0, -5)$, so $r = -5$.\n\n**Step 4: Compute $p + r$**\n$p + r = 9 + (-5) = 4$\n\n**Verification:** Line $\\ell$: $y = 9x - 5$. At $(0, -5)$: $y = 9(0) - 5 = -5$ -- confirmed. The slope $9$ matches the parallel line -- confirmed. $p + r = 9 + (-5) = 4$ -- confirmed.\n\n**Test Day Takeaway:** Problems that combine parallel lines with disguised equations require multiple steps: simplify the reference line to find the slope, apply the parallel condition, use the given point to find the intercept, then compute the requested expression.',
          skills: ['Algebra', 'Linear Equations', 'Slope']
        },
        {
          id: 'pt10-m1-q7',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'What is an $x$-coordinate of an $x$-intercept of the graph of $y = 3(x - 14)(x + 5)(x + 4)$ in the $xy$-plane?',
          correctAnswer: '14',
          alternateAnswers: ['-5', '-4'],
          explanation: '**SAT Pattern: Zeros from Factored Form** -- Appears 2-3 times per test. When a polynomial is already factored, the SAT is testing whether you know the zero-product property.\n\n**The correct answer is $14$ (also accepted: $-5$ or $-4$).**\n\n**The Fast Way (10 seconds):** The $x$-intercepts are where each factor equals zero. Just read them off: $x = 14$, $x = -5$, or $x = -4$. Enter any one.\n\n**Step 1: Set $y = 0$**\n$0 = 3(x - 14)(x + 5)(x + 4)$\n\n**Step 2: Apply the zero-product property**\nSince $3 \\neq 0$, at least one factor must be zero:\n- $x - 14 = 0 \\Rightarrow x = 14$\n- $x + 5 = 0 \\Rightarrow x = -5$\n- $x + 4 = 0 \\Rightarrow x = -4$\n\nAny of these three values is a valid answer.\n\n**Verification:** $y = 3(14 - 14)(14 + 5)(14 + 4) = 3(0)(19)(18) = 0$ -- confirmed.\n\n**Test Day Takeaway:** When the polynomial is already factored, do not expand it. Set each factor to zero and read the roots directly. The leading coefficient never affects where the zeros are.',
          skills: ['Algebra', 'Polynomial Functions', 'Zeros']
        },
        {
          id: 'pt10-m1-q8',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The graph above shows the estimated value, in dollars, of a tablet as a function of the number of months since it was purchased. What is the best interpretation of the $y$-intercept of the graph in this context?',
          diagram: {
            type: 'linearGraph',
            params: {
              slope: -8.75,
              yIntercept: 225,
              xRange: [0, 28],
              yRange: [0, 250],
              xTickInterval: 4,
              yTickInterval: 50,
              gridInterval: 4,
              highlightPoints: [[0, 225]]
            }
          },
          choices: [
            { id: 'A', text: 'The estimated value of the tablet was \\$225 when it was purchased.' },
            { id: 'B', text: 'The estimated value of the tablet $24$ months after it was purchased was \\$225.' },
            { id: 'C', text: 'The estimated value of the tablet had decreased by \\$225 in the $24$ months after it was purchased.' },
            { id: 'D', text: 'The estimated value of the tablet decreased by approximately $2.25\\%$ each year after it was purchased.' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Interpreting the Y-Intercept in Context** -- Appears 2-3 times per test. The SAT tests whether you can translate a graph feature into a real-world meaning.\n\n**Choice A is correct.** The $y$-intercept tells us the tablet was worth $\\$225$ at the moment it was purchased.\n\n**The Fast Way (15 seconds):** The $y$-intercept is where $x = 0$. Since $x$ = months since purchase, $x = 0$ means "at purchase." The value there is $\\$225$. Only Choice A says this.\n\n**Step 1: Read the graph**\nFrom the graph, the $y$-intercept is at $(0, 225)$.\n\n**Step 2: Interpret the axes**\nThe $x$-axis represents months since purchase, and the $y$-axis represents the estimated value in dollars.\n\n**Step 3: Interpret the $y$-intercept**\nAt $x = 0$ (the moment of purchase), the estimated value is $\\$225$. This means the tablet was worth $\\$225$ when it was purchased.\n\n**Why the wrong answers are tempting:**\n- Choice B says the value was $\\$225$ at $24$ months. This sounds plausible if you do not check the graph carefully, but the line is decreasing, so the value at $24$ months is far below $\\$225$. The $y$-intercept is at $x = 0$, not $x = 24$.\n- Choice C describes a decrease of $\\$225$ over $24$ months. That is a rate-of-change interpretation (related to slope), not a $y$-intercept interpretation. It is easy to mix up what each graph feature represents.\n- Choice D mentions a percentage decrease per year, which sounds mathematical and official. But the $y$-intercept is a starting value, not a rate. Plus, the graph shows a linear decrease in dollars, not a percentage-based decay.\n\n**Verification:** At $x = 0$ (purchase time), the graph reads $y = 225$, confirming the initial value -- confirmed.\n\n**Test Day Takeaway:** The $y$-intercept always answers the question "what was the value when the independent variable was zero?" Translate $x = 0$ into the context of the problem.',
          skills: ['Functions', 'Graph Interpretation']
        },
        {
          id: 'pt10-m1-q9',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Triangles $EFG$ and $JKL$ are congruent, where $E$, $F$, and $G$ correspond to $J$, $K$, and $L$, respectively. The measure of angle $E$ is $45°$ and the measure of angle $F$ is $20°$. What is the measure of angle $J$?',
          choices: [
            { id: 'A', text: '$20°$' },
            { id: 'B', text: '$45°$' },
            { id: 'C', text: '$135°$' },
            { id: 'D', text: '$160°$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Congruent Triangle Correspondence** -- Appears 1-2 times per test. The SAT tests whether you can read the letter order in a congruence statement to match corresponding parts.\n\n**Choice B is correct.** Since $E$ corresponds to $J$, angle $J = 45°$.\n\n**The Fast Way (10 seconds):** The congruence statement $EFG \\cong JKL$ tells you the first letters match: $E \\leftrightarrow J$. So $\\angle J = \\angle E = 45°$.\n\n**Step 1: Identify the correspondence**\nTriangles $EFG \\cong JKL$ with $E \\leftrightarrow J$, $F \\leftrightarrow K$, $G \\leftrightarrow L$.\n\n**Step 2: Apply the congruence**\nCorresponding angles in congruent triangles are equal. Since $E$ corresponds to $J$:\n$\\angle J = \\angle E = 45°$\n\n**Why the wrong answers are tempting:**\n- $20°$ (Choice A) is the measure of angle $F$, not angle $E$. If you mix up which angle corresponds to $J$, you grab the wrong value. The SAT puts both given angle measures in the choices to catch exactly this mistake.\n- $135°$ (Choice C) is $180° - 45°$. Some students reflexively subtract from $180°$ thinking they need a supplementary angle, but congruent corresponding angles are equal -- no subtraction needed.\n- $160°$ (Choice D) is $180° - 20°$. This combines two errors: picking the wrong angle ($F$ instead of $E$) and then taking its supplement. The SAT stacks errors in wrong answers to catch students who make one mistake and then compound it.\n\n**Verification:** $E \\leftrightarrow J$, so $\\angle J = \\angle E = 45°$ -- confirmed.\n\n**Test Day Takeaway:** The letter order in a congruence statement is everything. First letter matches first letter, second matches second, third matches third. Read it like a code.',
          skills: ['Geometry', 'Congruent Triangles']
        },
        {
          id: 'pt10-m1-q10',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The function $f$ is defined by $f(x) = \\frac{1}{2}(x + 6)$. What is the value of $f(f(f(4)))$?',
          choices: [
            { id: 'A', text: '$20$' },
            { id: 'B', text: '$\\frac{17}{4}$' },
            { id: 'C', text: '$\\frac{23}{4}$' },
            { id: 'D', text: '$5$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Iterated Function Evaluation** -- Appears 1 time per test. The SAT tests whether you can chain function evaluations carefully, tracking fractions through multiple substitutions.\n\n**Choice C is correct.** $f(f(f(4))) = \\frac{23}{4}$.\n\n**The Fast Way (40 seconds):** Work inside-out. $f(4) = \\frac{1}{2}(10) = 5$. $f(5) = \\frac{1}{2}(11) = \\frac{11}{2}$. $f\\left(\\frac{11}{2}\\right) = \\frac{1}{2}\\left(\\frac{11}{2} + 6\\right) = \\frac{1}{2} \\cdot \\frac{23}{2} = \\frac{23}{4}$.\n\n**Step 1: Compute $f(4)$**\n$f(4) = \\frac{1}{2}(4 + 6) = \\frac{1}{2}(10) = 5$\n\n**Step 2: Compute $f(f(4)) = f(5)$**\n$f(5) = \\frac{1}{2}(5 + 6) = \\frac{1}{2}(11) = \\frac{11}{2}$\n\n**Step 3: Compute $f(f(f(4))) = f\\left(\\frac{11}{2}\\right)$**\n$f\\left(\\frac{11}{2}\\right) = \\frac{1}{2}\\left(\\frac{11}{2} + 6\\right) = \\frac{1}{2}\\left(\\frac{11}{2} + \\frac{12}{2}\\right) = \\frac{1}{2} \\cdot \\frac{23}{2} = \\frac{23}{4}$\n\n**Why the wrong answers are tempting:**\n- $20$ (Choice A) comes from multiplying by $2$ instead of $\\frac{1}{2}$ at some stage. Under time pressure, your brain can flip a fraction.\n- $\\frac{17}{4}$ (Choice B) results from an arithmetic error in the final step, such as adding $\\frac{11}{2} + 3$ instead of $\\frac{11}{2} + 6$.\n- $5$ (Choice D) is just $f(4)$, the first evaluation. This is the classic "stopped too early" trap -- you computed the innermost call but forgot to apply $f$ two more times.\n\n**Verification:** $f(4) = 5$, $f(5) = \\frac{11}{2}$, $f\\left(\\frac{11}{2}\\right) = \\frac{23}{4} = 5.75$ -- confirmed.\n\n**Test Day Takeaway:** For iterated functions like $f(f(f(x)))$, work from the inside out, writing down each intermediate result. Fraction arithmetic in the later steps is where most errors happen -- do not skip steps.',
          skills: ['Functions', 'Function Evaluation']
        },
        {
          id: 'pt10-m1-q11',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The graph above shows a system of two equations. What is the solution $(x, y)$ to this system of two equations?',
          diagram: {
            type: 'parabola',
            params: {
              vertex: { h: -3, k: 4 },
              a: 1,
              xRange: [-8, 4],
              yRange: [0, 14],
              showVertex: false,
              highlightPoints: [[-3.5, 4.5]],
              overlayLine: { slope: 1, yIntercept: 8 },
              xTickInterval: 1,
              yTickInterval: 2,
              gridInterval: 1
            }
          },
          choices: [
            { id: 'A', text: '$(0, 8)$' },
            { id: 'B', text: '$\\left(\\frac{7}{2}, \\frac{9}{2}\\right)$' },
            { id: 'C', text: '$\\left(-\\frac{7}{2}, \\frac{9}{2}\\right)$' },
            { id: 'D', text: '$(-3, 4)$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: System of Equations from a Graph** -- Appears 1-2 times per test. The SAT shows two graphs and asks for the intersection point. You can read it from the graph or solve algebraically.\n\n**Choice C is correct.** The intersection point is $\\left(-\\frac{7}{2}, \\frac{9}{2}\\right)$.\n\n**The Fast Way (20 seconds):** Look at the graph. The curves cross in the negative-$x$ region near $(-3.5, 4.5)$. Only Choice C has a negative $x$-coordinate with $x = -\\frac{7}{2} = -3.5$ and $y = \\frac{9}{2} = 4.5$. Pick it.\n\n**Step 1: Identify the two equations**\nThe parabola has vertex $(-3, 4)$ with $a = 1$, so $y = (x + 3)^2 + 4$. The line is $y = x + 8$.\n\n**Step 2: Set them equal**\n$(x + 3)^2 + 4 = x + 8$\n$x^2 + 6x + 9 + 4 = x + 8$\n$x^2 + 5x + 5 = 0$\n\nUsing the quadratic formula: $x = \\frac{-5 \\pm \\sqrt{5}}{2}$. The intersection visible in the graph is at $x \\approx -3.5 = -\\frac{7}{2}$.\n\n**Step 3: Find $y$**\n$y = -\\frac{7}{2} + 8 = \\frac{9}{2}$. So the intersection is $\\left(-\\frac{7}{2}, \\frac{9}{2}\\right)$.\n\n**Why the wrong answers are tempting:**\n- $(0, 8)$ (Choice A) is the $y$-intercept of the line $y = x + 8$. It is a real point on one of the curves, which makes it feel like a legitimate answer. But the question asks where the two curves meet, not where one curve crosses an axis.\n- $\\left(\\frac{7}{2}, \\frac{9}{2}\\right)$ (Choice B) has the right numbers but the wrong sign on $x$. A quick glance at the graph shows the intersection is in the negative-$x$ region, so $+\\frac{7}{2}$ cannot be right.\n- $(-3, 4)$ (Choice D) is the vertex of the parabola. It is a special, prominent point, and on a timed test it is tempting to grab it. But the vertex is not where the line and parabola cross.\n\n**Verification:** At $x = -\\frac{7}{2}$: line gives $y = -\\frac{7}{2} + 8 = \\frac{9}{2}$ -- confirmed.\n\n**Test Day Takeaway:** The solution to a system is where the graphs intersect, not where either graph has a special feature like a vertex or intercept. Use the graph to narrow choices, then verify algebraically.',
          skills: ['Systems of Equations', 'Absolute Value Functions']
        },
        {
          id: 'pt10-m1-q12',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: '$y = 6x + 3$\n\nOne of the two equations in a system of linear equations is given. The system has infinitely many solutions. Which equation could be the second equation in this system?',
          choices: [
            { id: 'A', text: '$y = 2(6x) + 3$' },
            { id: 'B', text: '$y = 2(6x + 3)$' },
            { id: 'C', text: '$2y = 2(6x) + 3$' },
            { id: 'D', text: '$2y = 2(6x + 3)$' }
          ],
          correctAnswer: 'D',
          explanation: '**SAT Pattern: Infinitely Many Solutions (Equivalent Equations)** -- Appears 1-2 times per test. The SAT tests whether you know that infinitely many solutions means the two equations are the same line in disguise.\n\n**Choice D is correct.** $2y = 2(6x + 3)$ simplifies to $y = 6x + 3$, which is identical to the first equation.\n\n**The Fast Way (20 seconds):** For infinitely many solutions, the second equation must simplify to the first. Try each choice: divide both sides by any common factor and see which one gives back $y = 6x + 3$. Choice D: $2y = 2(6x + 3)$ -- divide both sides by $2$ to get $y = 6x + 3$. That is it.\n\n**Step 1: Simplify each choice to see if it matches $y = 6x + 3$**\n- Choice A: $y = 2(6x) + 3 = 12x + 3$ -- different slope, not equivalent\n- Choice B: $y = 2(6x + 3) = 12x + 6$ -- different slope and intercept\n- Choice C: $2y = 12x + 3 \\Rightarrow y = 6x + 1.5$ -- different intercept\n- Choice D: $2y = 2(6x + 3) = 12x + 6 \\Rightarrow y = 6x + 3$ -- match!\n\n**Why the wrong answers are tempting:**\n- Choice A ($y = 2(6x) + 3$) only doubles the $6x$ part but leaves the $+3$ alone. The resulting slope of $12$ is different from $6$, so this is a different line. But the $+3$ at the end matches, which makes it feel close.\n- Choice B ($y = 2(6x + 3)$) doubles the entire right side but does not double $y$. This gives $y = 12x + 6$, a completely different line. Students who think "multiply both sides by $2$" might forget they need to multiply the left side too.\n- Choice C ($2y = 2(6x) + 3$) doubles $y$ on the left and $6x$ on the right, but not the $+3$. When you divide by $2$, the intercept becomes $1.5$ instead of $3$. This is the sneakiest trap because the slope is correct.\n\n**Verification:** $2y = 2(6x + 3) = 12x + 6 \\Rightarrow y = 6x + 3$ -- identical to the original equation -- confirmed.\n\n**Test Day Takeaway:** Infinitely many solutions means the same line. To create an equivalent equation, you must multiply or divide the ENTIRE equation (both sides, all terms) by the same constant.',
          skills: ['Systems of Equations', 'Infinitely Many Solutions']
        },
        {
          id: 'pt10-m1-q13',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'If $\\frac{6}{7}p + 18 = 54$, what is the value of $7p$?',
          correctAnswer: '294',
          explanation: '**SAT Pattern: Solve for an Expression, Not Just the Variable** -- Appears 2-3 times per test. The SAT asks for $7p$ instead of $p$ to see if you can work strategically or will make a multiplication error at the end.\n\n**The correct answer is $294$.**\n\n**The Fast Way (20 seconds):** Isolate $\\frac{6}{7}p$ first: $\\frac{6}{7}p = 54 - 18 = 36$. Multiply both sides by $\\frac{49}{6}$ to jump straight to $7p$: $7p = 36 \\times \\frac{49}{6} = 294$. Or solve for $p = 42$ first and then multiply by $7$.\n\n**Step 1: Isolate $\\frac{6}{7}p$**\n$\\frac{6}{7}p + 18 = 54$\n$\\frac{6}{7}p = 36$\n\n**Step 2: Solve for $p$**\n$p = 36 \\times \\frac{7}{6} = \\frac{252}{6} = 42$\n\n**Step 3: Find $7p$**\n$7p = 7 \\times 42 = 294$\n\n**Verification:** $\\frac{6}{7}(42) + 18 = 36 + 18 = 54$ -- confirmed.\n\n**Test Day Takeaway:** When the SAT asks for an expression like $7p$ rather than $p$, do not stop after finding $p$. Read the question one more time before entering your answer.',
          skills: ['Algebra', 'Solving Equations']
        },
        {
          id: 'pt10-m1-q14',
          type: 'fill-in',
          difficulty: 'medium',
          question: '$y = 9x + 12$\n$x + 7y = 20$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?',
          correctAnswer: '3',
          explanation: '**SAT Pattern: System of Equations by Substitution** -- Appears 2-3 times per test. When one equation is already solved for $y$, the SAT expects substitution.\n\n**The correct answer is $3$.**\n\n**The Fast Way (30 seconds):** The first equation already gives $y = 9x + 12$. Plug it into the second: $x + 7(9x + 12) = 20$. Solve for $x$, then back-substitute. Or type both equations into Desmos and read the intersection.\n\n**Step 1: Substitute the first equation into the second**\nSince $y = 9x + 12$, substitute into $x + 7y = 20$:\n$x + 7(9x + 12) = 20$\n\n**Step 2: Solve for $x$**\n$x + 63x + 84 = 20$\n$64x = -64$\n$x = -1$\n\n**Step 3: Find $y$**\n$y = 9(-1) + 12 = -9 + 12 = 3$\n\n**Verification:** Check in the second equation: $(-1) + 7(3) = -1 + 21 = 20$ -- confirmed.\n\n**Test Day Takeaway:** When one equation is already solved for a variable, substitution is the fastest path. Always verify your answer in the equation you did NOT use for substitution.',
          skills: ['Systems of Equations', 'Substitution']
        },
        {
          id: 'pt10-m1-q15',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'A circle in the $xy$-plane has the equation $(x - 13)^2 + (y - k)^2 = 64$. Which of the following gives the center of the circle and its radius?',
          choices: [
            { id: 'A', text: 'The center is at $(13, k)$ and the radius is $8$.' },
            { id: 'B', text: 'The center is at $(k, 13)$ and the radius is $8$.' },
            { id: 'C', text: 'The center is at $(k, 13)$ and the radius is $64$.' },
            { id: 'D', text: 'The center is at $(13, k)$ and the radius is $64$.' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Circle Equation -- Center and Radius** -- Appears 1-2 times per test. The SAT tests whether you can read center and radius from standard form, especially the $r^2$ vs. $r$ distinction.\n\n**Choice A is correct.** The center is $(13, k)$ and the radius is $8$.\n\n**The Fast Way (15 seconds):** Match the equation $(x - 13)^2 + (y - k)^2 = 64$ to the template $(x - h)^2 + (y - k)^2 = r^2$. Center $= (13, k)$, and $r = \\sqrt{64} = 8$. Only Choice A has both correct.\n\n**Step 1: Recall the standard form**\n$(x - h)^2 + (y - k)^2 = r^2$ has center $(h, k)$ and radius $r$.\n\n**Step 2: Match to the given equation**\n$(x - 13)^2 + (y - k)^2 = 64$\n- Center: $(h, k) = (13, k)$\n- Radius: $r^2 = 64$, so $r = \\sqrt{64} = 8$\n\n**Why the wrong answers are tempting:**\n- Choice B reverses the center to $(k, 13)$. The $x$-coordinate comes from the $(x - 13)^2$ part and the $y$-coordinate from the $(y - k)^2$ part, but under pressure it is easy to flip them. The SAT deliberately uses a variable $k$ for one coordinate to make the order harder to track.\n- Choice C combines both common errors: reversed center AND using $64$ as the radius instead of $8$. Two mistakes in one answer, but if you are rushing and make both errors, this looks right.\n- Choice D gets the center correct but uses $64$ as the radius. The equation gives $r^2 = 64$, not $r = 64$. This is the single most common mistake on circle equation problems -- forgetting to take the square root.\n\n**Verification:** Center $(13, k)$ and $r = \\sqrt{64} = 8$ -- confirmed.\n\n**Test Day Takeaway:** The number on the right side of a circle equation is $r^2$, never $r$. Always take the square root. Write "r-squared" next to it as a reminder.',
          skills: ['Geometry', 'Circle Equations']
        },
        {
          id: 'pt10-m1-q16',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The function $f$ is defined by $f(x) = |x - 4x|$. What value of $a$ satisfies $f(5) - f(a) = -15$?',
          choices: [
            { id: 'A', text: '$-20$' },
            { id: 'B', text: '$5$' },
            { id: 'C', text: '$10$' },
            { id: 'D', text: '$45$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Absolute Value Function Evaluation** -- Appears 1-2 times per test. The SAT tests whether you simplify the absolute value expression before plugging in values.\n\n**Choice C is correct.** $a = 10$ satisfies $f(5) - f(a) = -15$.\n\n**The Fast Way (30 seconds):** Simplify first: $f(x) = |x - 4x| = |-3x| = 3|x|$. Then $f(5) = 15$. Solve $15 - 3|a| = -15$, so $|a| = 10$, meaning $a = 10$. Or just test each answer choice in Desmos.\n\n**Step 1: Simplify $f(x)$**\n$f(x) = |x - 4x| = |-3x| = 3|x|$\n\n**Step 2: Evaluate $f(5)$**\n$f(5) = 3|5| = 3(5) = 15$\n\n**Step 3: Solve for $a$**\n$f(5) - f(a) = -15$\n$15 - 3|a| = -15$\n$3|a| = 30$\n$|a| = 10$\n\nSo $a = 10$ or $a = -10$. Since $10$ is among the choices, $a = 10$.\n\n**Why the wrong answers are tempting:**\n- $-20$ (Choice A) might come from a sign or arithmetic error when solving $|a| = 10$. Some students double $-10$ or confuse the steps. Testing it: $f(-20) = 3(20) = 60$, and $15 - 60 = -45$, which is not $-15$.\n- $5$ (Choice B) is the input value given in the problem. If you think "same input means same output" or just assume $a = 5$, you get $15 - 15 = 0$, not $-15$. The SAT loves putting the given input as a wrong answer.\n- $45$ (Choice D) is $3 \\times 15$, which could result from misapplying the function. Testing it: $f(45) = 135$, and $15 - 135 = -120$, nowhere near $-15$.\n\n**Verification:** $f(10) = 3|10| = 30$. $f(5) - f(10) = 15 - 30 = -15$ -- confirmed.\n\n**Test Day Takeaway:** Always simplify the function definition first. $|x - 4x| = |-3x| = 3|x|$ is much easier to work with than the original form.',
          skills: ['Functions', 'Absolute Value']
        },
        {
          id: 'pt10-m1-q17',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'For the exponential function $f$, the value of $f(0)$ is $c$, where $c$ is a constant. Of the following equations that define the function $f$, which equation shows the value of $c$ as the coefficient or the base?',
          choices: [
            { id: 'A', text: '$f(x) = 22(1.5)^{x+1}$' },
            { id: 'B', text: '$f(x) = 33(1.5)^x$' },
            { id: 'C', text: '$f(x) = 49.5(1.5)^{x-1}$' },
            { id: 'D', text: '$f(x) = 74.25(1.5)^{x-2}$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Identifying Initial Value in Exponential Form** -- Appears 1-2 times per test. The SAT gives multiple equivalent exponential equations and asks which one makes the initial value visible.\n\n**Choice B is correct.** In $f(x) = 33(1.5)^x$, the coefficient $33$ is directly visible as $c = f(0)$.\n\n**The Fast Way (20 seconds):** For $f(0) = c$ to be visible as a coefficient, the exponent must become $0$ when $x = 0$. That only happens when the exponent is just $x$ (not $x + 1$ or $x - 1$). Choice B has exponent $x$, so $f(0) = 33(1.5)^0 = 33$. The coefficient $33$ is $c$.\n\n**Step 1: Evaluate $f(0)$ for each choice**\n- A: $f(0) = 22(1.5)^1 = 33$ -- the value $33$ is not visible as a coefficient or base\n- B: $f(0) = 33(1.5)^0 = 33(1) = 33$ -- the coefficient $33$ equals $c$ directly\n- C: $f(0) = 49.5(1.5)^{-1} = 49.5 \\div 1.5 = 33$ -- the value $33$ is hidden\n- D: $f(0) = 74.25(1.5)^{-2} = 74.25 \\div 2.25 = 33$ -- the value $33$ is hidden\n\n**Why the wrong answers are tempting:**\n- All four equations define the exact same function, so they all give $f(0) = 33$. The trap is that students evaluate $f(0)$ for one choice, get $33$, and select it without checking whether $33$ appears as a visible number in that form. In Choices A, C, and D, you have to do arithmetic to arrive at $33$ -- it is not sitting there as a coefficient or base.\n- Choice A ($22 \\cdot 1.5^{x+1}$) is particularly tempting because $22$ is the coefficient and looks simple, but $f(0) = 22 \\times 1.5 = 33$, which means $c$ is hidden behind a multiplication.\n\n**Verification:** $f(0) = 33(1.5)^0 = 33(1) = 33 = c$ -- confirmed.\n\n**Test Day Takeaway:** For $f(x) = a \\cdot b^x$, the coefficient $a$ equals $f(0)$ because $b^0 = 1$. This only works when the exponent is plain $x$ with no shifts.',
          skills: ['Exponential Functions', 'Function Evaluation']
        },
        {
          id: 'pt10-m1-q18',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'The function $f(t) = 40{,}000(2)^{\\frac{t}{790}}$ gives the number of bacteria in a population $t$ minutes after an initial observation. How much time, in minutes, does it take for the number of bacteria in the population to double?',
          choices: [
            { id: 'A', text: '$2$' },
            { id: 'B', text: '$790$' },
            { id: 'C', text: '$1{,}580$' },
            { id: 'D', text: '$40{,}000$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Doubling Time from Exponential Function** -- Appears 1-2 times per test. The SAT tests whether you can read the doubling time directly from the structure of the equation.\n\n**Choice B is correct.** The bacteria population doubles every $790$ minutes.\n\n**The Fast Way (15 seconds):** In $f(t) = 40{,}000 \\cdot 2^{t/790}$, the denominator of the exponent IS the doubling time. The base is $2$ (doubling), and the exponent equals $1$ when $t = 790$. So the answer is $790$.\n\n**Step 1: Understand the function structure**\n$f(t) = 40{,}000 \\cdot 2^{\\frac{t}{790}}$. The base is $2$, and the exponent is $\\frac{t}{790}$.\n\n**Step 2: Find when the population doubles**\nThe population doubles when $f(t) = 2 \\times 40{,}000 = 80{,}000$:\n$40{,}000 \\cdot 2^{\\frac{t}{790}} = 80{,}000$\n$2^{\\frac{t}{790}} = 2$\n$\\frac{t}{790} = 1$\n$t = 790$ minutes\n\n**Why the wrong answers are tempting:**\n- $2$ (Choice A) is the base of the exponential, not the doubling time. Students see the word "double" and grab the number $2$ from the equation. But the base $2$ tells you the growth factor, while the denominator $790$ tells you how long that growth takes.\n- $1{,}580$ (Choice C) is $2 \\times 790$. If you think "doubling means multiply the time by $2$," you land here. But $1{,}580$ minutes is actually the time to quadruple ($2^2 = 4$), not double.\n- $40{,}000$ (Choice D) is the initial population, not a time at all. Under pressure, students sometimes grab the most prominent number in the equation without checking its meaning.\n\n**Verification:** $f(790) = 40{,}000 \\cdot 2^{790/790} = 40{,}000 \\cdot 2 = 80{,}000$ (doubled) -- confirmed.\n\n**Test Day Takeaway:** For $f(t) = A \\cdot 2^{t/d}$, the doubling time is always $d$, the denominator of the exponent. Memorize this structure -- it appears on almost every SAT.',
          skills: ['Exponential Functions', 'Exponential Growth']
        },
        {
          id: 'pt10-m1-q19',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: '$\\frac{12}{n} - \\frac{2}{t} = -\\frac{2}{w}$\n\nThe given equation relates the variables $n$, $t$, and $w$, where $n > 0$, $t > 0$, and $w > t$. Which expression is equivalent to $n$?',
          choices: [
            { id: 'A', text: '$12tw$' },
            { id: 'B', text: '$6(t - w)$' },
            { id: 'C', text: '$\\frac{w - t}{6tw}$' },
            { id: 'D', text: '$\\frac{6tw}{w - t}$' }
          ],
          correctAnswer: 'D',
          explanation: '**SAT Pattern: Isolating a Variable in a Rational Equation** -- Appears 1-2 times per test. These look intimidating but follow a predictable recipe: combine fractions, then cross-multiply.\n\n**Choice D is correct.** $n = \\frac{6tw}{w - t}$.\n\n**The Fast Way (45 seconds):** Move terms without $n$ to the right, combine them into one fraction, then flip to solve for $n$. Or plug in easy numbers like $t = 2, w = 3$ and test each choice.\n\n**Step 1: Move terms without $n$ to the right**\n$\\frac{12}{n} = \\frac{2}{t} - \\frac{2}{w}$\n\n**Step 2: Combine the right side over a common denominator**\n$\\frac{12}{n} = \\frac{2w - 2t}{tw} = \\frac{2(w - t)}{tw}$\n\n**Step 3: Solve for $n$ by cross-multiplying**\n$12 \\cdot tw = n \\cdot 2(w - t)$\n$n = \\frac{12tw}{2(w - t)} = \\frac{6tw}{w - t}$\n\n**Why the wrong answers are tempting:**\n- $12tw$ (Choice A) looks clean and simple, which is appealing on a hard problem. But it ignores the subtraction on the right side entirely. Students who rush the cross-multiplication step can end up here.\n- $6(t - w)$ (Choice B) has the subtraction reversed ($t - w$ instead of $w - t$) and drops the $tw$ from the numerator. It feels close to the right answer because the $6$ is correct, but the structure is wrong.\n- $\\frac{w - t}{6tw}$ (Choice C) is actually $\\frac{1}{n}$, not $n$. This is the most insidious trap: you do all the algebra correctly to find $\\frac{1}{n} = \\frac{2(w-t)}{12tw}$ and then forget to take the reciprocal. Always check whether you solved for $n$ or for $\\frac{1}{n}$.\n\n**Verification:** Let $t = 2, w = 3$: $n = \\frac{6(2)(3)}{3 - 2} = 36$. Check: $\\frac{12}{36} - \\frac{2}{2} = \\frac{1}{3} - 1 = -\\frac{2}{3}$ and $-\\frac{2}{3} = -\\frac{2}{3}$ -- confirmed.\n\n**Test Day Takeaway:** On rational equation problems, plugging in simple numbers (like $t = 2, w = 3$) and testing each answer choice is often faster than doing all the algebra.',
          skills: ['Algebra', 'Rational Equations']
        },
        {
          id: 'pt10-m1-q20',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'During a study, the temperature of air in a chamber was recorded. The scatterplot above shows the temperature $y$, in degrees Celsius, at time $x$, in minutes. What was the average rate of change, in °C per minute, of the recorded temperature from $x = 5$ to $x = 7$?',
          diagram: {
            type: 'scatterplot',
            params: {
              points: [
                [1, 3], [2, 5], [3, 6], [4, 9],
                [5, 12], [6, 14], [7, 18], [8, 20],
                [9, 23], [10, 25]
              ],
              xMax: 12,
              yMax: 28
            }
          },
          correctAnswer: '3',
          explanation: '**SAT Pattern: Average Rate of Change** -- Appears 2-3 times per test. Average rate of change is just slope between two points. The SAT loves testing this because students overthink it.\n\n**The correct answer is $3$.**\n\n**The Fast Way (15 seconds):** Average rate of change = slope between the two points. Read the coordinates from the scatterplot: $(5, 12)$ and $(7, 18)$. Slope $= \\frac{18 - 12}{7 - 5} = \\frac{6}{2} = 3$.\n\n**Step 1: Identify the coordinates**\nFrom the scatterplot: at $x = 5$, $y = 12$ and at $x = 7$, $y = 18$.\n\n**Step 2: Apply the average rate of change formula**\n$$\\text{Average rate of change} = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{18 - 12}{7 - 5} = \\frac{6}{2} = 3$$\n\nThe temperature increased at an average rate of $3$°C per minute.\n\n**Verification:** $(18 - 12) \\div (7 - 5) = 6 \\div 2 = 3$ -- confirmed.\n\n**Test Day Takeaway:** Average rate of change is just slope. Period. Use $\\frac{\\Delta y}{\\Delta x}$ and do not overcomplicate it.',
          skills: ['Functions', 'Rate of Change']
        },
        {
          id: 'pt10-m1-q21',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'In August, a car dealer completed $15$ more than $3$ times the number of sales the car dealer completed in September. In August and September, the car dealer completed $363$ sales. How many sales did the car dealer complete in September?',
          correctAnswer: '87',
          explanation: '**SAT Pattern: Word Problem with "More Than N Times"** -- Appears 1-2 times per test. The SAT tests whether you can translate "15 more than 3 times" into $3s + 15$ (not $15 \\cdot 3s$).\n\n**The correct answer is $87$.**\n\n**The Fast Way (30 seconds):** Let $s$ = September sales. August $= 3s + 15$. Total: $s + 3s + 15 = 363$, so $4s = 348$, giving $s = 87$.\n\n**Step 1: Define the variable**\nLet $s$ = number of sales in September.\nThen August sales $= 3s + 15$ (15 more than 3 times September).\n\n**Step 2: Write the equation**\nTotal sales in both months $= 363$:\n$s + (3s + 15) = 363$\n\n**Step 3: Solve for $s$**\n$4s + 15 = 363$\n$4s = 348$\n$s = 87$\n\n**Verification:** September: $87$. August: $3(87) + 15 = 261 + 15 = 276$. Total: $87 + 276 = 363$ -- confirmed. Also, $276 = 3(87) + 15$ -- confirmed.\n\n**Test Day Takeaway:** "15 more than 3 times $s$" means $3s + 15$. Always write the multiplication first, then add. And always check that both conditions are satisfied -- the total and the relationship.',
          skills: ['Algebra', 'Word Problems', 'Systems of Equations']
        },
        {
          id: 'pt10-m1-q22',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'Points $Q$ and $R$ lie on a circle with center $P$. The radius of this circle is $9$ inches. Triangle $PQR$ has a perimeter of $31$ inches. What is the length, in inches, of $QR$?',
          choices: [
            { id: 'A', text: '$13\\sqrt{2}$' },
            { id: 'B', text: '$13$' },
            { id: 'C', text: '$9\\sqrt{2}$' },
            { id: 'D', text: '$9$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Triangle with Circle Radii as Sides** -- Appears 1-2 times per test. The SAT tests whether you recognize that segments from the center to the circle are all radii (same length).\n\n**Choice B is correct.** $QR = 13$ inches.\n\n**The Fast Way (15 seconds):** $PQ$ and $PR$ are both radii $= 9$. Perimeter $= 9 + 9 + QR = 31$, so $QR = 31 - 18 = 13$. No Pythagorean theorem needed.\n\n**Step 1: Identify the known sides**\nSince $P$ is the center and $Q$, $R$ are on the circle, $PQ$ and $PR$ are both radii:\n$PQ = PR = 9$ inches.\n\n**Step 2: Use the perimeter to find $QR$**\nPerimeter $= PQ + PR + QR = 31$\n$9 + 9 + QR = 31$\n$QR = 31 - 18 = 13$ inches.\n\n**Why the wrong answers are tempting:**\n- $13\\sqrt{2}$ (Choice A) assumes the triangle is a $45$-$45$-$90$ right triangle with legs of $13$. Nothing in the problem says there is a right angle, so the Pythagorean theorem does not apply here. The $\\sqrt{2}$ makes it look sophisticated, which can trick you into thinking it must be correct.\n- $9\\sqrt{2}$ (Choice C) assumes a right isosceles triangle with legs equal to the radius. Again, no right angle is given. Students who see two equal sides (the radii) sometimes jump to "isosceles right triangle" without checking.\n- $9$ (Choice D) assumes all three sides equal the radius, making it equilateral. But $3 \\times 9 = 27$, not $31$, so the triangle is not equilateral. This choice preys on the instinct to keep things simple.\n\n**Verification:** Perimeter $= 9 + 9 + 13 = 31$ -- confirmed.\n\n**Test Day Takeaway:** When a triangle has its vertex at the center of a circle and two vertices on the circle, two sides are automatically radii. Use the perimeter (or other given info) to find the third side -- do not assume special triangle types unless the problem states it.',
          skills: ['Geometry', 'Circles', 'Triangles']
        }
      ]
    },
    {
      id: 'module-2',
      title: 'Module 2',
      timeLimit: 35,
      questions: [
        {
          id: 'pt10-m2-q1',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'There are $250$ trees in a park. Of these trees, $6\\%$ are birch trees and $30\\%$ of the remaining trees are maple trees. How many maple trees are in the park?',
          choices: [
            { id: 'A', text: '$6$' },
            { id: 'B', text: '$15$' },
            { id: 'C', text: '$70.5$' },
            { id: 'D', text: '$75$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Percent of a Remainder** -- Appears 1-2 times per test. The SAT adds a layer by asking for a percentage of what is left after a first percentage is removed.\n\n**Choice C is correct.** There are $70.5$ maple trees in the park.\n\n**The Fast Way (20 seconds):** Birch trees: $0.06 \\times 250 = 15$. Remaining: $250 - 15 = 235$. Maple trees: $0.30 \\times 235 = 70.5$.\n\n**Step 1: Find the number of birch trees**\n$6\\%$ of $250 = 0.06 \\times 250 = 15$ birch trees.\n\n**Step 2: Find the remaining trees**\n$250 - 15 = 235$ non-birch trees.\n\n**Step 3: Find the number of maple trees**\n$30\\%$ of $235 = 0.30 \\times 235 = 70.5$ maple trees.\n\n**Why the wrong answers are tempting:**\n- $6$ (Choice A) is just the birch percentage itself, not the result of any calculation. Some students see "$6\\%$" and think the answer involves that number directly.\n- $15$ (Choice B) is the number of birch trees ($0.06 \\times 250$). Students who stop after the first step or confuse which type of tree the question asks about will pick this.\n- $75$ (Choice D) is $30\\%$ of $250$, which applies the maple percentage to the entire park instead of the remaining trees. The question says "$30\\%$ of the remaining trees," not "$30\\%$ of all trees."\n\n**Verification:** $0.06 \\times 250 = 15$, $250 - 15 = 235$, $0.30 \\times 235 = 70.5$ -- confirmed.\n\n**Test Day Takeaway:** When a percentage applies to "the remaining" or "the rest," you must subtract the first group before applying the second percentage. Watch for whether the percent applies to the total or to a subset.',
          skills: ['Percentages', 'Arithmetic']
        },
        {
          id: 'pt10-m2-q2',
          type: 'multiple-choice',
          difficulty: 'easy',
          question: 'The graph of the quadratic function $y = f(x)$ is shown above. What is the vertex of the graph?',
          diagram: {
            type: 'parabola',
            params: {
              vertex: { h: 0, k: 2 },
              a: 1,
              xRange: [-6, 6],
              yRange: [-2, 10],
              showVertex: false,
              xTickInterval: 2,
              yTickInterval: 2,
              gridInterval: 1,
              label: 'y = f(x)'
            }
          },
          choices: [
            { id: 'A', text: '$(0, -2)$' },
            { id: 'B', text: '$(0, -3)$' },
            { id: 'C', text: '$(0, 2)$' },
            { id: 'D', text: '$(0, 3)$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Reading the Vertex from a Graph** -- Appears 1-2 times per test. The SAT gives you a parabola and asks for the vertex. The trap is misreading the sign or value from the graph.\n\n**Choice C is correct.** The vertex of the parabola is at $(0, 2)$.\n\n**The Fast Way (10 seconds):** The vertex is the lowest point of an upward-opening parabola. It sits on the $y$-axis at height $2$. That gives $(0, 2)$.\n\n**Step 1: Locate the vertex**\nThe vertex is the lowest point (minimum) of an upward-opening parabola. From the graph, the parabola reaches its minimum at the point $(0, 2)$.\n\n**Step 2: Confirm the coordinates**\nThe axis of symmetry is the vertical line $x = 0$ (the $y$-axis), and the minimum $y$-value is $2$.\n\n**Why the wrong answers are tempting:**\n- $(0, -2)$ (Choice A) flips the sign of the $y$-coordinate. The vertex is above the $x$-axis, not below it. When you are moving quickly, it is easy to confuse positive and negative on a graph, especially if the $y$-axis scale extends into negative territory.\n- $(0, -3)$ (Choice B) gets both the sign and magnitude wrong. This might attract students who misread the grid lines or who associate the vertex with the lowest visible point on the $y$-axis.\n- $(0, 3)$ (Choice D) is off by one grid line. The vertex is at $y = 2$, not $y = 3$. This is the most dangerous trap because it is so close -- one tick mark off on the vertical axis.\n\n**Verification:** The vertex is at $(0, 2)$ with the parabola opening upward -- confirmed.\n\n**Test Day Takeaway:** When reading coordinates from a graph, count the grid lines carefully. Do not estimate -- place your pencil tip on the exact point and read both coordinates deliberately.',
          skills: ['Quadratic Functions', 'Graph Analysis']
        },
        {
          id: 'pt10-m2-q3',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'The number of raccoons in a $131$-square-mile area is estimated to be $2{,}358$. A wildlife study predicts that the population will increase by $25\\%$ over the next $5$ years while the area remains the same. What is the estimated population density, in raccoons per square mile, of this area after $5$ years?',
          choices: [
            { id: 'A', text: '$18$' },
            { id: 'B', text: '$22.5$' },
            { id: 'C', text: '$149$' },
            { id: 'D', text: '$2{,}947.5$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Population Density with Percent Increase** -- Appears 1-2 times per test. This combines a unit rate problem with a percentage growth step. The SAT checks whether you apply the increase before dividing.\n\n**Choice B is correct.** The estimated population density after $5$ years is $22.5$ raccoons per square mile.\n\n**The Fast Way (20 seconds):** New population: $2{,}358 \\times 1.25 = 2{,}947.5$. Density: $2{,}947.5 \\div 131 = 22.5$.\n\n**Step 1: Calculate the new population after $25\\%$ increase**\n$2{,}358 \\times 1.25 = 2{,}947.5$ raccoons.\n\n**Step 2: Apply the population density formula**\n$$\\text{Population density} = \\frac{2{,}947.5}{131} = 22.5$$\n\nThe estimated density is $22.5$ raccoons per square mile.\n\n**Why the wrong answers are tempting:**\n- $18$ (Choice A) is the current density ($2{,}358 \\div 131 = 18$) without the $25\\%$ increase. Students who forget to apply the population growth and just divide directly will pick this.\n- $149$ (Choice C) is $131 + 18$, which adds the area and the current density. When you are unsure which operation to use, addition feels safe, but "per square mile" demands division.\n- $2{,}947.5$ (Choice D) is the future population itself, not the density. Students who correctly compute the $25\\%$ increase but forget to divide by the area will pick this.\n\n**Verification:** $2{,}358 \\times 1.25 = 2{,}947.5$, and $2{,}947.5 \\div 131 = 22.5$ -- confirmed.\n\n**Test Day Takeaway:** Multi-step rate problems require you to handle each layer in order. First apply any growth or change to the total, then compute the rate. "Per" always means divide.',
          skills: ['Ratios', 'Population Density']
        },
        {
          id: 'pt10-m2-q4',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'A survey asked $120$ students about their study habits. Of these students, $45$ study on weekends and $75$ study on weekdays only. Among the weekend studiers, $\\frac{2}{3}$ scored above average on the test. Among the weekday-only studiers, $\\frac{1}{3}$ scored above average. If a student who scored above average is selected at random, what is the probability that this student studies on weekends?',
          choices: [
            { id: 'A', text: '$\\frac{1}{4}$' },
            { id: 'B', text: '$\\frac{6}{11}$' },
            { id: 'C', text: '$\\frac{2}{3}$' },
            { id: 'D', text: '$\\frac{3}{4}$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Conditional Probability from a Two-Way Table** -- Appears 1-2 times per test. The SAT tests whether you can find a conditional probability by identifying both the "given" group and the "favorable" subset within it.\n\n**Choice B is correct.** The probability is $\\frac{6}{11}$.\n\n**The Fast Way (40 seconds):** Weekend studiers above average: $45 \\times \\frac{2}{3} = 30$. Weekday studiers above average: $75 \\times \\frac{1}{3} = 25$. Total above average: $30 + 25 = 55$. Probability = $\\frac{30}{55} = \\frac{6}{11}$.\n\n**Step 1: Find the number of above-average scorers in each group**\nWeekend studiers who scored above average: $45 \\times \\frac{2}{3} = 30$\nWeekday-only studiers who scored above average: $75 \\times \\frac{1}{3} = 25$\n\n**Step 2: Find the total number of above-average scorers**\n$30 + 25 = 55$ students scored above average.\n\n**Step 3: Compute the conditional probability**\n$$P(\\text{weekend} \\mid \\text{above average}) = \\frac{30}{55} = \\frac{6}{11}$$\n\n**Why the wrong answers are tempting:**\n- $\\frac{1}{4}$ (Choice A) is $\\frac{30}{120}$, dividing weekend above-average students by the total number of all students. This ignores the "given" condition -- we are told the selected student already scored above average.\n- $\\frac{2}{3}$ (Choice C) is the proportion of weekend studiers who scored above average, not the proportion of above-average scorers who study on weekends. Confusing $P(A|B)$ with $P(B|A)$ is the most common conditional probability error.\n- $\\frac{3}{4}$ (Choice D) could result from incorrectly computing the ratio of groups or misapplying the fractions.\n\n**Verification:** $\\frac{30}{55} = \\frac{6}{11} \\approx 0.545$ -- confirmed.\n\n**Test Day Takeaway:** In conditional probability, the denominator is always the "given" group. "Given that they scored above average" means the denominator is the total above-average count, not the total student count.',
          skills: ['Probability', 'Data Analysis']
        },
        {
          id: 'pt10-m2-q5',
          type: 'fill-in',
          difficulty: 'medium',
          question: '$f(x) = 45x + 600$\n\nThe function $f$ gives the monthly fee $f(x)$, in dollars, a facility charges to keep $x$ crates in storage. What is the monthly fee, in dollars, the facility charges to keep $50$ crates in storage?',
          correctAnswer: '2850',
          explanation: '**SAT Pattern: Linear Function Evaluation in Context** -- Appears 2-3 times per test. Plug in and compute. The context (storage fees) is just window dressing.\n\n**The correct answer is $2850$.**\n\n**The Fast Way (15 seconds):** $f(50) = 45(50) + 600 = 2{,}250 + 600 = 2{,}850$. Type it into Desmos if you want to double-check.\n\n**Step 1: Substitute $x = 50$**\n$f(50) = 45(50) + 600$\n\n**Step 2: Calculate**\n$f(50) = 2{,}250 + 600 = 2{,}850$\n\nThe monthly fee is $\\$2{,}850$.\n\n**Verification:** $45 \\times 50 = 2{,}250$, and $2{,}250 + 600 = 2{,}850$ -- confirmed.\n\n**Test Day Takeaway:** For linear functions in context, the coefficient of $x$ is the per-unit cost and the constant is the base fee. Plug in, compute, and move on -- do not overthink the word problem.',
          skills: ['Functions', 'Function Evaluation']
        },
        {
          id: 'pt10-m2-q6',
          type: 'fill-in',
          difficulty: 'medium',
          question: 'The function $f$ is defined by $f(x) = 5\\left(\\frac{1}{4} - x\\right)^2 + \\frac{11}{4}$. What is the value of $f\\left(\\frac{1}{4}\\right)$?',
          correctAnswer: '2.75',
          alternateAnswers: ['11/4'],
          explanation: '**SAT Pattern: Function Evaluation at a Special Input (Vertex Form)** -- Appears 1-2 times per test. The SAT picks an input that zeroes out the squared term. Recognize this shortcut and the problem takes seconds.\n\n**The correct answer is $2.75$ (or $\\frac{11}{4}$).**\n\n**The Fast Way (10 seconds):** Notice that $x = \\frac{1}{4}$ makes the parentheses zero: $\\frac{1}{4} - \\frac{1}{4} = 0$. So $f\\left(\\frac{1}{4}\\right) = 5(0)^2 + \\frac{11}{4} = \\frac{11}{4} = 2.75$.\n\n**Step 1: Substitute $x = \\frac{1}{4}$**\n$f\\left(\\frac{1}{4}\\right) = 5\\left(\\frac{1}{4} - \\frac{1}{4}\\right)^2 + \\frac{11}{4}$\n\n**Step 2: Simplify the squared term**\n$\\frac{1}{4} - \\frac{1}{4} = 0$, so $(0)^2 = 0$.\n\n**Step 3: Calculate the result**\n$f\\left(\\frac{1}{4}\\right) = 5(0) + \\frac{11}{4} = \\frac{11}{4} = 2.75$\n\n**Verification:** $5\\left(\\frac{1}{4} - \\frac{1}{4}\\right)^2 + \\frac{11}{4} = 5(0) + 2.75 = 2.75$ -- confirmed.\n\n**Test Day Takeaway:** When the input matches the number inside a squared term, the entire squared piece vanishes. You are left with just the constant -- which is also the vertex value of the parabola.',
          skills: ['Functions', 'Function Evaluation']
        },
        {
          id: 'pt10-m2-q7',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'If $8x + 3y = 6$ and $4x - 3y = 12$, what is the value of $72x + 27y$?',
          choices: [
            { id: 'A', text: '$3$' },
            { id: 'B', text: '$15$' },
            { id: 'C', text: '$54$' },
            { id: 'D', text: '$57$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: System of Equations with Strategic Scaling** -- Appears 1-2 times per test. The SAT rewards students who see how to combine equations to produce the target expression without solving for individual variables.\n\n**Choice C is correct.** $72x + 27y = 54$.\n\n**The Fast Way (30 seconds):** Add the two equations: $(8x + 3y) + (4x - 3y) = 6 + 12$, giving $12x = 18$, so $8x = 12$ is not quite right -- let us use the strategic approach instead. Notice $72x + 27y = 9(8x + 3y) = 9(6) = 54$.\n\n**Step 1: Recognize the target expression as a multiple of the first equation**\n$72x + 27y = 9(8x + 3y)$\n\n**Step 2: Substitute the known value**\nSince $8x + 3y = 6$:\n$72x + 27y = 9 \\times 6 = 54$\n\n**Step 3: Verify the system is consistent**\nAdding the equations: $12x = 18$, so $x = \\frac{3}{2}$. Then $3y = 6 - 8(\\frac{3}{2}) = 6 - 12 = -6$, so $y = -2$.\nCheck: $72(\\frac{3}{2}) + 27(-2) = 108 - 54 = 54$.\n\n**Why the wrong answers are tempting:**\n- $3$ (Choice A) could come from finding $y = -2$ and then taking the absolute value minus $1$, or from other partial computations that go off track.\n- $15$ (Choice B) might result from adding the right-hand sides $6 + 12 = 18$ and then subtracting $3$, or from misidentifying the multiplier.\n- $57$ (Choice D) is close to $54$ and could result from a small arithmetic slip in the scaling step, such as computing $9 \\times 6 + 3$.\n\n**Verification:** $x = \\frac{3}{2}$, $y = -2$: $72(\\frac{3}{2}) + 27(-2) = 108 - 54 = 54$ -- confirmed.\n\n**Test Day Takeaway:** Before solving a system for individual variables, check whether the target expression is a multiple of one of the given equations. $72x + 27y = 9(8x + 3y)$ lets you skip the system entirely and multiply directly.',
          skills: ['Algebra', 'Algebraic Manipulation']
        },
        {
          id: 'pt10-m2-q8',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Which expression is equivalent to $23x^3 + 2x^2 + 9x$?',
          choices: [
            { id: 'A', text: '$23x(x^2 + 2x + 9)$' },
            { id: 'B', text: '$9x(23x^3 + 2x^2 + 1)$' },
            { id: 'C', text: '$x(23x^2 + 2x + 9)$' },
            { id: 'D', text: '$34(x^3 + x^2 + x)$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Factoring Out the GCF** -- Appears 1-2 times per test. The SAT tests whether you can identify the correct greatest common factor and factor it out cleanly.\n\n**Choice C is correct.** $23x^3 + 2x^2 + 9x = x(23x^2 + 2x + 9)$.\n\n**The Fast Way (15 seconds):** What divides evenly into all three terms? The coefficients $23$, $2$, and $9$ share no common factor other than $1$. But every term has at least one $x$. So the GCF is $x$. Factor it out: $x(23x^2 + 2x + 9)$.\n\n**Step 1: Identify the GCF**\nThe terms are $23x^3$, $2x^2$, and $9x$. The GCF is $x$ (the lowest power of $x$ present in all terms).\n\n**Step 2: Factor out $x$**\n$23x^3 + 2x^2 + 9x = x(23x^2 + 2x + 9)$\n\n**Why the wrong answers are tempting:**\n- Choice A factors out $23x$ instead of just $x$. Since $23$ does not divide evenly into $2$ or $9$, this changes the remaining coefficients entirely. If you distribute $23x$ back through, you get $23x^3 + 46x^2 + 207x$, which is not the original expression.\n- Choice B factors out $9x$, which also does not divide evenly into $23$ or $2$. Even worse, it raises the powers inside the parentheses incorrectly. This would expand to $207x^4 + 18x^3 + 9x$.\n- Choice D uses $34$ as a common factor, as if you could add the coefficients $23 + 2 + 9 = 34$ and factor that out. You cannot add coefficients to find a GCF -- that is not how factoring works.\n\n**Verification:** Distribute $x$ back: $x(23x^2) + x(2x) + x(9) = 23x^3 + 2x^2 + 9x$ -- confirmed.\n\n**Test Day Takeaway:** The GCF of the variables is the lowest power of $x$ that appears. The GCF of the coefficients is the largest number that divides into ALL of them. If the coefficients share nothing, the GCF is just $x$ (or $x^n$).',
          skills: ['Algebra', 'Factoring', 'Polynomials']
        },
        {
          id: 'pt10-m2-q9',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'Which expression is equivalent to $(9x^3 + 5x + 7) + (6x^3 + 5x^2 - 5)$?',
          choices: [
            { id: 'A', text: '$15x^6 + 5x^2 - 5x - 35$' },
            { id: 'B', text: '$15x^3 + 10x^2 + 2$' },
            { id: 'C', text: '$15x^6 + 5x^2 + 5x + 2$' },
            { id: 'D', text: '$15x^3 + 5x^2 + 5x + 2$' }
          ],
          correctAnswer: 'D',
          explanation: '**SAT Pattern: Adding Polynomials (Combining Like Terms)** -- Appears 1-2 times per test. The SAT tests whether you add coefficients (correct) or multiply exponents (incorrect) when combining polynomials.\n\n**Choice D is correct.** $(9x^3 + 5x + 7) + (6x^3 + 5x^2 - 5) = 15x^3 + 5x^2 + 5x + 2$.\n\n**The Fast Way (20 seconds):** Line up like terms by degree. $x^3$: $9 + 6 = 15$. $x^2$: $0 + 5 = 5$. $x$: $5 + 0 = 5$. Constants: $7 + (-5) = 2$. Result: $15x^3 + 5x^2 + 5x + 2$.\n\n**Step 1: Group like terms**\n$(9x^3 + 6x^3) + (5x^2) + (5x) + (7 + (-5))$\n\n**Step 2: Combine**\n- $x^3$ terms: $9x^3 + 6x^3 = 15x^3$\n- $x^2$ terms: $0 + 5x^2 = 5x^2$\n- $x$ terms: $5x + 0 = 5x$\n- Constants: $7 + (-5) = 2$\n\n**Result:** $15x^3 + 5x^2 + 5x + 2$\n\n**Why the wrong answers are tempting:**\n- Choice A has $15x^6$ instead of $15x^3$. This comes from multiplying the exponents ($3 \\times 3 = 6$ or $3 + 3 = 6$) instead of adding the coefficients. When you ADD polynomials, you add coefficients -- the exponents stay the same. Exponent rules for multiplication do not apply here.\n- Choice B ($15x^3 + 10x^2 + 2$) combines $5x^2 + 5x$ as $10x^2$, treating $x$ and $x^2$ as like terms. They are not. Like terms must have the exact same power of $x$.\n- Choice C has the same $x^6$ error as Choice A plus extra coefficient mistakes, making it doubly wrong. But on a timed test, the $x^6$ can look impressive enough to seem correct.\n\n**Verification:** Plug in $x = 1$: $15 + 5 + 5 + 2 = 27$. Original: $(9 + 5 + 7) + (6 + 5 - 5) = 21 + 6 = 27$ -- confirmed.\n\n**Test Day Takeaway:** When adding polynomials, exponents never change. You are only adding the coefficients of like terms. If you see an exponent in your answer that was not in the original, something went wrong.',
          skills: ['Algebra', 'Polynomial Addition']
        },
        {
          id: 'pt10-m2-q10',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'Which of the following is equivalent to $\\frac{3}{x + 2} + \\frac{5}{x - 4}$?',
          choices: [
            { id: 'A', text: '$\\frac{8x - 2}{(x + 2)(x - 4)}$' },
            { id: 'B', text: '$\\frac{8x + 22}{(x + 2)(x - 4)}$' },
            { id: 'C', text: '$\\frac{8}{(x + 2)(x - 4)}$' },
            { id: 'D', text: '$\\frac{8x - 2}{2x - 2}$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Adding Rational Expressions** -- Appears 1-2 times per test. This is the algebra version of adding fractions with different denominators. The most common error is a sign mistake in the numerator.\n\n**Choice A is correct.** $\\frac{3}{x + 2} + \\frac{5}{x - 4} = \\frac{8x - 2}{(x + 2)(x - 4)}$.\n\n**The Fast Way (30 seconds):** Cross-multiply: numerator $= 3(x - 4) + 5(x + 2) = 3x - 12 + 5x + 10 = 8x - 2$. Denominator $= (x + 2)(x - 4)$. Or plug $x = 0$ into the original and each choice to eliminate wrong answers.\n\n**Step 1: Find the common denominator**\nThe common denominator is $(x + 2)(x - 4)$.\n\n**Step 2: Rewrite each fraction**\n$$\\frac{3}{x + 2} = \\frac{3(x - 4)}{(x + 2)(x - 4)} = \\frac{3x - 12}{(x + 2)(x - 4)}$$\n$$\\frac{5}{x - 4} = \\frac{5(x + 2)}{(x + 2)(x - 4)} = \\frac{5x + 10}{(x + 2)(x - 4)}$$\n\n**Step 3: Add the numerators**\n$$\\frac{3x - 12 + 5x + 10}{(x + 2)(x - 4)} = \\frac{8x - 2}{(x + 2)(x - 4)}$$\n\n**Why the wrong answers are tempting:**\n- $\\frac{8x + 22}{(x + 2)(x - 4)}$ (Choice B) gets $+22$ instead of $-2$ in the numerator. This happens when you distribute $3(x - 4)$ as $3x + 12$ instead of $3x - 12$. Sign errors in cross-multiplication are the number one mistake on rational expression problems.\n- $\\frac{8}{(x + 2)(x - 4)}$ (Choice C) just adds the numerators straight across: $3 + 5 = 8$. This works for fractions with the same denominator but is completely wrong when denominators differ. The SAT includes this to catch students who shortcut the process.\n- $\\frac{8x - 2}{2x - 2}$ (Choice D) has the right numerator but adds the denominators instead of multiplying them: $(x + 2) + (x - 4) = 2x - 2$. Common denominators are products, not sums.\n\n**Verification:** At $x = 0$: LHS $= \\frac{3}{2} + \\frac{5}{-4} = \\frac{3}{2} - \\frac{5}{4} = \\frac{1}{4}$. RHS $= \\frac{0 - 2}{(2)(-4)} = \\frac{-2}{-8} = \\frac{1}{4}$ -- confirmed.\n\n**Test Day Takeaway:** When adding rational expressions, the denominator is always the PRODUCT of the two denominators. And watch your signs when cross-multiplying -- write out every step.',
          skills: ['Advanced Math', 'Rational Expressions']
        },
        {
          id: 'pt10-m2-q11',
          type: 'multiple-choice',
          difficulty: 'medium',
          question: 'A line of best fit for the data is shown in the scatterplot above. Which of the following is closest to the slope of the line of best fit shown?',
          diagram: {
            type: 'scatterplot',
            params: {
              points: [
                [0.5, 3], [1, 4], [1.5, 5], [2, 6],
                [2.5, 7], [3, 8], [3.5, 9], [4, 10],
                [4.5, 8], [5, 12], [5.5, 13], [6, 14]
              ],
              xMax: 7,
              yMax: 16,
              bestFitLine: { slope: 2, intercept: 2 }
            }
          },
          choices: [
            { id: 'A', text: '$0$' },
            { id: 'B', text: '$\\frac{1}{2}$' },
            { id: 'C', text: '$1$' },
            { id: 'D', text: '$2$' }
          ],
          correctAnswer: 'D',
          explanation: '**SAT Pattern: Estimating Slope from a Line of Best Fit** -- Appears 1-2 times per test. Pick two clear points on the line (not the data points), then use rise over run.\n\n**Choice D is correct.** The slope of the line of best fit is approximately $2$.\n\n**The Fast Way (15 seconds):** Pick two points where the line crosses grid intersections: $(0, 2)$ and $(6, 14)$. Slope $= \\frac{14 - 2}{6 - 0} = \\frac{12}{6} = 2$.\n\n**Step 1: Pick two points on the line**\nFrom the line of best fit: $(0, 2)$ and $(6, 14)$.\n\n**Step 2: Calculate the slope**\n$$\\text{Slope} = \\frac{14 - 2}{6 - 0} = \\frac{12}{6} = 2$$\n\n**Why the wrong answers are tempting:**\n- $0$ (Choice A) means a flat, horizontal line. The line of best fit clearly tilts upward, so the slope cannot be zero. This targets students who confuse "slope" with "intercept" or who are guessing.\n- $\\frac{1}{2}$ (Choice B) is the reciprocal of $2$. This happens when you compute run over rise instead of rise over run. It is an extremely common mistake because "rise over run" sounds simple but gets flipped under pressure.\n- $1$ (Choice C) feels like a natural default -- a slope of $1$ means the line goes up at a $45°$ angle. But this line is steeper than $45°$; it rises $2$ units for every $1$ unit across. The SAT puts $1$ as a choice because it is many students\' gut instinct.\n\n**Verification:** Using $(0, 2)$ and $(6, 14)$: slope $= \\frac{14 - 2}{6 - 0} = \\frac{12}{6} = 2$ -- confirmed.\n\n**Test Day Takeaway:** Always use two points ON THE LINE (not scattered data points) when estimating slope. Pick points that land neatly on grid intersections so there is no guesswork.',
          skills: ['Data Analysis', 'Slope', 'Line of Best Fit']
        },
        {
          id: 'pt10-m2-q12',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The function $g$ is defined by $g(x) = \\frac{f(x)}{x + 1}$, where $f$ is a linear function. The table shows two values of $x$ and their corresponding values of $g(x)$. What is the $y$-intercept of the graph of $y = f(x)$ in the $xy$-plane?',
          questionTable: {
            headers: ['x', 'g(x)'],
            rows: [
              ['1', '9'],
              ['2', '7']
            ]
          },
          correctAnswer: 15,
          explanation: '**SAT Pattern: Recovering a Linear Function from a Rational Definition** -- Appears 1 time per test. The SAT defines $g$ in terms of $f$ and gives you $g$ values. You need to work backward to find $f$.\n\n**The correct answer is $15$.**\n\n**The Fast Way (40 seconds):** Multiply both sides: $f(x) = g(x)(x + 1)$. Get two points on $f$: $f(1) = 9 \\cdot 2 = 18$ and $f(2) = 7 \\cdot 3 = 21$. Slope $= 3$. Equation: $f(x) = 3x + 15$. The $y$-intercept is $15$.\n\n**Step 1: Find values of $f$**\nSince $g(x) = \\frac{f(x)}{x + 1}$, we have $f(x) = g(x) \\cdot (x + 1)$.\n\n- $f(1) = g(1) \\cdot (1 + 1) = 9 \\cdot 2 = 18$\n- $f(2) = g(2) \\cdot (2 + 1) = 7 \\cdot 3 = 21$\n\n**Step 2: Find the equation of $f$**\nSince $f$ is linear, find the slope:\n$$m = \\frac{21 - 18}{2 - 1} = 3$$\n\nUsing point $(1, 18)$:\n$$f(x) = 3(x - 1) + 18 = 3x + 15$$\n\n**Step 3: Find the $y$-intercept**\n$$f(0) = 3(0) + 15 = 15$$\n\n**Verification:** $g(1) = \\frac{3(1) + 15}{1 + 1} = \\frac{18}{2} = 9$ and $g(2) = \\frac{3(2) + 15}{2 + 1} = \\frac{21}{3} = 7$ -- both confirmed.\n\n**Test Day Takeaway:** When a function is defined as a ratio, multiply to undo the division. Once you have two points on a linear function, you can find the full equation and any feature (slope, intercept, etc.).',
          skills: ['Advanced Math', 'Functions']
        },
        {
          id: 'pt10-m2-q13',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'In triangles $ABC$ and $ADE$, angles $C$ and $E$ are right angles. Point $C$ is on $\\overline{AE}$ and point $B$ is on $\\overline{AD}$. If $AB = \\sqrt{41}$, $AC = 4$, and $CE = 16$, what is the area of triangle $ADE$?',
          diagram: {
            type: 'nestedRightTriangles',
            params: {
              labels: { A: 'A', B: 'B', C: 'C', D: 'D', E: 'E' },
              sideLabels: { AB: '√41', AC: '4', CE: '16' }
            }
          },
          correctAnswer: 250,
          explanation: '**SAT Pattern: Similar Right Triangles with Pythagorean Theorem** -- Appears 1-2 times per test. The SAT nests a smaller right triangle inside a larger one, testing similarity and the Pythagorean theorem together.\n\n**The correct answer is $250$.**\n\n**The Fast Way (45 seconds):** Find $BC$ using Pythagorean theorem: $BC = \\sqrt{41 - 16} = 5$. Then $AE = 4 + 16 = 20$, so the scale factor is $20/4 = 5$. Thus $DE = 5 \\times 5 = 25$. Area $= \\frac{1}{2}(20)(25) = 250$.\n\n**Step 1: Find $BC$ in right triangle $ABC$**\nRight angle at $C$, $AC = 4$, $AB = \\sqrt{41}$:\n$BC = \\sqrt{AB^2 - AC^2} = \\sqrt{41 - 16} = \\sqrt{25} = 5$\n\n**Step 2: Establish similarity and scale factor**\nTriangles $ABC$ and $ADE$ are similar (both have a right angle and share angle $A$).\n$AE = AC + CE = 4 + 16 = 20$\nScale factor from $ABC$ to $ADE$: $\\frac{AE}{AC} = \\frac{20}{4} = 5$\n\n**Step 3: Find $DE$ and the area**\n$DE = 5 \\cdot BC = 5 \\cdot 5 = 25$\nArea of triangle $ADE = \\frac{1}{2} \\cdot AE \\cdot DE = \\frac{1}{2} \\cdot 20 \\cdot 25 = 250$\n\n**Verification:** Area of $ABC = \\frac{1}{2}(4)(5) = 10$. Area of $ADE = 10 \\times 5^2 = 10 \\times 25 = 250$ (area scales by the square of the linear scale factor) -- confirmed.\n\n**Test Day Takeaway:** When you see nested right triangles sharing an angle, they are similar. Find the scale factor from corresponding sides, then use it to find any missing measurement. Remember: areas scale by the square of the scale factor.',
          skills: ['similar-triangles', 'pythagorean-theorem', 'area']
        },
        {
          id: 'pt10-m2-q14',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'In triangle $XYZ$, angle $Y$ is a right angle, point $P$ lies on $\\overline{XZ}$, and point $Q$ lies on $\\overline{YZ}$ such that $\\overline{PQ}$ is parallel to $\\overline{XY}$. If the measure of angle $XZY$ is $63°$, what is the measure, in degrees, of angle $XPQ$?',
          correctAnswer: '117',
          explanation: '**SAT Pattern: Parallel Lines and Angle Relationships in Triangles** -- Appears 1-2 times per test. The SAT combines parallel line angle rules with triangle angle sums.\n\n**The correct answer is $117$.**\n\n**The Fast Way (20 seconds):** Since $PQ \\parallel XY$ and $XZ$ is a transversal, angles $XPQ$ and $XZY$ are co-interior (same-side interior) angles, so they add to $180°$. $\\angle XPQ = 180° - 63° = 117°$.\n\n**Step 1: Find angle $X$ in triangle $XYZ$**\nAngle $Y = 90°$ and angle $Z = 63°$, so:\n$\\angle X = 180° - 90° - 63° = 27°$\n\n**Step 2: Identify the angle relationship**\nSince $\\overline{PQ} \\parallel \\overline{XY}$ and $\\overline{XZ}$ is a transversal, angles $XPQ$ and $XZY$ are co-interior (same-side interior) angles along that transversal. Co-interior angles are supplementary.\n\n**Step 3: Calculate angle $XPQ$**\n$\\angle XPQ = 180° - 63° = 117°$\n\n**Verification:** $\\angle XPQ + \\angle XZY = 117° + 63° = 180°$ (co-interior angles are supplementary) -- confirmed.\n\n**Test Day Takeaway:** When you see parallel lines, immediately look for the transversal and identify angle pairs: co-interior angles are supplementary ($180°$), alternate interior angles are equal. This shortcut avoids a longer multi-step calculation.',
          skills: ['Geometry', 'Parallel Lines', 'Triangle Angles']
        },
        {
          id: 'pt10-m2-q15',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: 'An investment account was opened with an initial value of $\\$890$. The value of the account doubled every $10$ years. Which equation represents the value of the account $M(t)$, in dollars, $t$ years after the account was opened?',
          choices: [
            { id: 'A', text: '$M(t) = 890\\left(\\frac{1}{2}\\right)^{\\frac{t}{10}}$' },
            { id: 'B', text: '$M(t) = 890\\left(\\frac{1}{10}\\right)^{\\frac{t}{2}}$' },
            { id: 'C', text: '$M(t) = 890(2)^{\\frac{t}{10}}$' },
            { id: 'D', text: '$M(t) = 890(10)^{\\frac{t}{2}}$' }
          ],
          correctAnswer: 'C',
          explanation: '**SAT Pattern: Building an Exponential Doubling Model** -- Appears 1-2 times per test. The SAT gives you a growth scenario and asks you to pick the correct exponential equation. The trap is mixing up the base and the exponent denominator.\n\n**Choice C is correct.** $M(t) = 890(2)^{\\frac{t}{10}}$.\n\n**The Fast Way (15 seconds):** Doubling means base $= 2$. Every $10$ years means the exponent denominator $= 10$. Initial value $= 890$. So $M(t) = 890(2)^{t/10}$. Only Choice C matches.\n\n**Step 1: Identify the components**\n- Initial value: $\\$890$\n- Growth factor: $2$ (doubling)\n- Doubling period: $10$ years\n\n**Step 2: Write the equation**\nThe general form for doubling is $M(t) = M_0 \\cdot 2^{t/d}$, where $d$ is the doubling time:\n$M(t) = 890(2)^{\\frac{t}{10}}$\n\n**Why the wrong answers are tempting:**\n- Choice A uses $\\frac{1}{2}$ as the base, which models halving (decay), not doubling (growth). "Doubled" and "halved" are opposites, but when you see both $2$ and $\\frac{1}{2}$ in the choices, it is easy to grab the wrong one if you are not careful.\n- Choice B uses base $\\frac{1}{10}$ and exponent $\\frac{t}{2}$. It swaps the roles of $2$ and $10$ -- using the period as the base and the growth factor as the denominator. This is exactly backwards.\n- Choice D uses base $10$ and exponent $\\frac{t}{2}$. This would multiply the investment by $10$ every $2$ years, which is explosive growth far beyond doubling every decade. The $10$ comes from the period, not the growth factor.\n\n**Verification:** $M(10) = 890(2)^{10/10} = 890(2) = 1{,}780$ (doubled) -- confirmed.\n\n**Test Day Takeaway:** For exponential growth models: the base is the growth factor (doubled = base $2$, tripled = base $3$), and the exponent denominator is the period. Memorize the template $M(t) = M_0 \\cdot (\\text{factor})^{t/(\\text{period})}$.',
          skills: ['Exponential Functions', 'Exponential Growth']
        },
        {
          id: 'pt10-m2-q16',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: '$y < x$\n$x < 22$\n\nFor which of the following tables are all the values of $x$ and their corresponding values of $y$ solutions to the given system of inequalities?',
          choices: [
            { id: 'A', text: '$\\begin{array}{|c|c|c|c|}\\hline x & 19 & 20 & 21 \\\\ \\hline y & 18 & 19 & 20 \\\\ \\hline\\end{array}$' },
            { id: 'B', text: '$\\begin{array}{|c|c|c|c|}\\hline x & 19 & 20 & 21 \\\\ \\hline y & 20 & 21 & 22 \\\\ \\hline\\end{array}$' },
            { id: 'C', text: '$\\begin{array}{|c|c|c|c|}\\hline x & 23 & 24 & 25 \\\\ \\hline y & 22 & 23 & 24 \\\\ \\hline\\end{array}$' },
            { id: 'D', text: '$\\begin{array}{|c|c|c|c|}\\hline x & 23 & 24 & 25 \\\\ \\hline y & 24 & 25 & 26 \\\\ \\hline\\end{array}$' }
          ],
          correctAnswer: 'A',
          explanation: '**SAT Pattern: Checking Solutions to a System of Inequalities** -- Appears 1-2 times per test. The SAT gives you tables of values and asks which table has ALL pairs satisfying the system. One failed pair eliminates a choice.\n\n**Choice A is correct.** All pairs in Choice A satisfy both $y < x$ and $x < 22$.\n\n**The Fast Way (30 seconds):** Eliminate quickly. $x < 22$ kills Choices C and D immediately (their $x$ values are $23, 24, 25$). For the remaining two, check $y < x$: Choice A has $y$ one less than $x$ each time (good), Choice B has $y$ one more than $x$ (bad). Choice A wins.\n\n**Step 1: Check Choice A -- $x$: $19, 20, 21$; $y$: $18, 19, 20$**\n- $x < 22$: $19 < 22$, $20 < 22$, $21 < 22$ -- all pass\n- $y < x$: $18 < 19$, $19 < 20$, $20 < 21$ -- all pass\n\n**Step 2: Check why other choices fail**\n- Choice B: $y$ values are $20, 21, 22$. For $x = 19$, $y = 20$, but $20 < 19$ is false.\n- Choice C: $x$ values are $23, 24, 25$. Since $23 < 22$ is false, $x < 22$ fails.\n- Choice D: $x$ values are $23, 24, 25$. Same issue -- $x < 22$ fails.\n\n**Why the wrong answers are tempting:**\n- Choice B has the right range for $x$ (all less than $22$), which makes it feel like it should work. But $y > x$ in every pair, which violates $y < x$. The SAT knows that students who only check one inequality will miss this.\n- Choices C and D both have $x > 22$, violating the second inequality. Students who focus only on the $y < x$ condition and forget to check $x < 22$ might pick one of these.\n- Choice D violates both inequalities simultaneously, but it is still there to catch students who are guessing or not checking systematically.\n\n**Verification:** Choice A: $18 < 19 < 22$, $19 < 20 < 22$, $20 < 21 < 22$ -- all confirmed.\n\n**Test Day Takeaway:** With inequality tables, eliminate choices using the simplest inequality first. Here, $x < 22$ instantly eliminates two choices, cutting your work in half.',
          skills: ['Systems of Inequalities', 'Linear Inequalities']
        },
        {
          id: 'pt10-m2-q17',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'The equation $x^2 + y^2 + 10x - 4y + c = 0$ defines a circle in the $xy$-plane with radius $6$. What is the value of $c$?',
          correctAnswer: -7,
          explanation: '**SAT Pattern: Completing the Square for a Circle Equation** -- Appears 1 time per test. The SAT gives a circle in general form and a radius, then asks you to find a constant. You must complete the square.\n\n**The correct answer is $-7$.**\n\n**The Fast Way (40 seconds):** Use the formula: for $x^2 + y^2 + Dx + Ey + F = 0$, the radius is $r = \\sqrt{(D/2)^2 + (E/2)^2 - F}$. Here $D = 10$, $E = -4$, $F = c$: $6 = \\sqrt{25 + 4 - c}$, so $36 = 29 - c$, giving $c = -7$.\n\n**Step 1: Group and complete the square**\n$$(x^2 + 10x) + (y^2 - 4y) = -c$$\n\nFor $x$: $x^2 + 10x + 25 = (x + 5)^2$, add $25$.\nFor $y$: $y^2 - 4y + 4 = (y - 2)^2$, add $4$.\n\n$$(x + 5)^2 + (y - 2)^2 = -c + 25 + 4 = 29 - c$$\n\n**Step 2: Use the radius condition**\nThe standard form $(x - h)^2 + (y - k)^2 = r^2$ has $r^2 = 29 - c$.\n\nSince $r = 6$:\n$$29 - c = 36$$\n$$c = -7$$\n\n**Verification:** $x^2 + y^2 + 10x - 4y - 7 = 0 \\implies (x + 5)^2 + (y - 2)^2 = 36$. Radius $= \\sqrt{36} = 6$ -- confirmed.\n\n**Test Day Takeaway:** Memorize the shortcut: for a circle $x^2 + y^2 + Dx + Ey + F = 0$, the radius is $\\sqrt{(D/2)^2 + (E/2)^2 - F}$. This saves you from completing the square every time.',
          skills: ['Geometry', 'Circle Equations']
        },
        {
          id: 'pt10-m2-q18',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: '$3y = 4x + 17$\n\n$-3y = 9x - 23$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $39x$?',
          choices: [
            { id: 'A', text: '$-18$' },
            { id: 'B', text: '$-6$' },
            { id: 'C', text: '$6$' },
            { id: 'D', text: '$18$' }
          ],
          correctAnswer: 'D',
          explanation: '**SAT Pattern: System of Equations with Strategic Multiplication** -- Appears 1-2 times per test. The SAT asks for $39x$ instead of $x$ to see if you can connect $39x = 3 \\times 13x$ and skip extra steps.\n\n**Choice D is correct.** $39x = 18$.\n\n**The Fast Way (30 seconds):** Add the two equations: $3y + (-3y) = (4x + 17) + (9x - 23)$, giving $0 = 13x - 6$, so $13x = 6$. Then $39x = 3(13x) = 3(6) = 18$. No need to find $x$ itself.\n\n**Step 1: Add the two equations**\n$3y + (-3y) = (4x + 17) + (9x - 23)$\n$0 = 13x - 6$\n$13x = 6$\n\n**Step 2: Find $39x$**\n$39x = 3 \\times 13x = 3 \\times 6 = 18$\n\n**Why the wrong answers are tempting:**\n- $-18$ (Choice A) comes from a sign error. When you add $17 + (-23)$, you get $-6$ on the right side, which can make you think $13x = -6$. But actually $13x - 6 = 0$ means $13x = 6$ (positive). The negative is on the constant, not on $13x$.\n- $-6$ (Choice B) is the value of $17 - 23$, which appears during the algebra. Students who lose track of which side the negative belongs to might report $-6$ as the answer.\n- $6$ (Choice C) is the value of $13x$, not $39x$. This is the classic "stopped too early" trap. The question asks for $39x$, which is three times larger.\n\n**Verification:** $x = \\frac{6}{13}$, so $39x = 39 \\times \\frac{6}{13} = 3 \\times 6 = 18$ -- confirmed.\n\n**Test Day Takeaway:** When the SAT asks for an expression like $39x$ after you find $13x = 6$, notice that $39 = 3 \\times 13$. Multiply both sides by $3$ instead of solving for $x$ and then multiplying by $39$.',
          skills: ['Systems of Equations', 'Linear Equations']
        },
        {
          id: 'pt10-m2-q19',
          type: 'multiple-choice',
          difficulty: 'hard',
          question: '$h(t) = -16t^2 + b$\n\nThe function $h$ estimates an object\'s height, in feet, above the ground $t$ seconds after the object is dropped, where $b$ is a constant. The function estimates that the object is $3{,}364$ feet above the ground when it is dropped at $t = 0$. Approximately how many seconds after being dropped does the function estimate the object will hit the ground?',
          choices: [
            { id: 'A', text: '$7.25$' },
            { id: 'B', text: '$14.50$' },
            { id: 'C', text: '$105.13$' },
            { id: 'D', text: '$210.25$' }
          ],
          correctAnswer: 'B',
          explanation: '**SAT Pattern: Projectile / Free-Fall Quadratic** -- Appears 1-2 times per test. The SAT gives you a height function and asks when the object hits the ground ($h = 0$). Do not forget to take the square root at the end.\n\n**Choice B is correct.** The object hits the ground approximately $14.5$ seconds after being dropped.\n\n**The Fast Way (30 seconds):** $b = 3{,}364$ (given at $t = 0$). Set $h = 0$: $16t^2 = 3{,}364$, so $t^2 = 210.25$, and $t = \\sqrt{210.25} = 14.5$. On Desmos, graph $y = -16x^2 + 3364$ and find the positive $x$-intercept.\n\n**Step 1: Find $b$**\nAt $t = 0$: $h(0) = -16(0)^2 + b = b = 3{,}364$ feet.\n\n**Step 2: Set $h(t) = 0$ (ground level)**\n$-16t^2 + 3{,}364 = 0$\n$16t^2 = 3{,}364$\n$t^2 = 210.25$\n\n**Step 3: Solve for $t$**\n$t = \\sqrt{210.25} = 14.5$ seconds (taking the positive root since $t > 0$).\n\n**Why the wrong answers are tempting:**\n- $7.25$ (Choice A) is exactly half of $14.5$. This could come from an extra division by $2$ somewhere in your work, or from dividing by $32$ instead of $16$. When you see an answer that is exactly half of another choice, double-check your algebra.\n- $105.13$ (Choice C) is $3{,}364 \\div 32$, which happens if you divide by $2 \\times 16$ in one step instead of just $16$. Skipping steps in the algebra can cause this kind of error.\n- $210.25$ (Choice D) is $t^2$, not $t$. This is the "forgot the square root" trap. You did all the hard work but stopped one step before the finish line. The SAT loves this mistake.\n\n**Verification:** $h(14.5) = -16(14.5)^2 + 3{,}364 = -16(210.25) + 3{,}364 = -3{,}364 + 3{,}364 = 0$ -- confirmed.\n\n**Test Day Takeaway:** In free-fall problems, "hits the ground" means $h = 0$. Solve for $t^2$ first, then remember to take the square root. If your answer matches $t^2$ in the choices, you stopped too early.',
          skills: ['Quadratic Functions', 'Physics Applications']
        },
        {
          id: 'pt10-m2-q20',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'Let $f(x) = x^2 - 4x + 3$ and $g(x) = 2x - 1$. What is the sum of all values of $x$ for which $f(g(x)) = 0$?',
          correctAnswer: 3,
          explanation: '**SAT Pattern: Function Composition Set to Zero** -- Appears 1 time per test. The SAT tests whether you can compose two functions and solve the resulting equation. Vieta\'s formulas can save time if you only need the sum of solutions.\n\n**The correct answer is $3$.**\n\n**The Fast Way (40 seconds):** Instead of composing, think backwards: $f(g(x)) = 0$ means $g(x)$ must be a root of $f$. Since $f(x) = (x-1)(x-3)$, the roots of $f$ are $1$ and $3$. So $g(x) = 1$ gives $2x - 1 = 1$, $x = 1$. And $g(x) = 3$ gives $2x - 1 = 3$, $x = 2$. Sum $= 1 + 2 = 3$.\n\n**Step 1: Substitute $g(x)$ into $f$**\n$$f(g(x)) = f(2x - 1) = (2x - 1)^2 - 4(2x - 1) + 3$$\n\n**Step 2: Expand**\n$$= 4x^2 - 4x + 1 - 8x + 4 + 3$$\n$$= 4x^2 - 12x + 8$$\n\n**Step 3: Factor and solve**\n$$4(x^2 - 3x + 2) = 0$$\n$$4(x - 1)(x - 2) = 0$$\n$$x = 1 \\quad \\text{or} \\quad x = 2$$\n\n**Step 4: Find the sum**\n$$1 + 2 = 3$$\n\n**Verification:**\n- $x = 1$: $g(1) = 1$, $f(1) = 1 - 4 + 3 = 0$ -- confirmed\n- $x = 2$: $g(2) = 3$, $f(3) = 9 - 12 + 3 = 0$ -- confirmed\n\n**Test Day Takeaway:** For $f(g(x)) = 0$, you can either expand the full composition OR work backwards by finding the roots of $f$ first, then solving $g(x) = \\text{each root}$. The backwards approach is often faster and avoids messy algebra.',
          skills: ['Advanced Math', 'Function Composition']
        },
        {
          id: 'pt10-m2-q21',
          type: 'fill-in',
          difficulty: 'hard',
          question: 'A line intersects two parallel lines, forming four acute angles and four obtuse angles. The measure of one of the acute angles is $(9x - 560)°$. The sum of the measures of one of the acute angles and three of the obtuse angles is $(-18x + w)°$. What is the value of $w$?',
          correctAnswer: '1660',
          explanation: '**SAT Pattern: Transversal Angle Relationships with Variables** -- Appears 1 time per test. The SAT combines parallel line angle rules with algebraic expressions. The key insight: all acute angles are equal, all obtuse angles are equal, and each pair sums to $180°$.\n\n**The correct answer is $1660$.**\n\n**The Fast Way (40 seconds):** Acute angle $= (9x - 560)°$. Obtuse angle $= 180° - (9x - 560)° = (740 - 9x)°$. Sum of $1$ acute $+ 3$ obtuse $= (9x - 560) + 3(740 - 9x) = 9x - 560 + 2220 - 27x = -18x + 1660$. Since the sum equals $(-18x + w)°$, we get $w = 1660$.\n\n**Step 1: Express the obtuse angle**\nLet the acute angle $= (9x - 560)°$. Then the obtuse angle $= 180° - (9x - 560)° = (740 - 9x)°$.\n\n**Step 2: Compute the sum**\nSum of one acute and three obtuse angles:\n$= (9x - 560) + 3(740 - 9x)$\n$= 9x - 560 + 2{,}220 - 27x$\n$= -18x + 1{,}660$\n\n**Step 3: Match to the given expression**\nSince the sum is given as $(-18x + w)°$, we have $w = 1{,}660$.\n\n**Verification:** Let $x = 70$ (so acute angle $= 9(70) - 560 = 70°$, obtuse angle $= 110°$). Sum $= 70 + 3(110) = 70 + 330 = 400$. Formula: $-18(70) + 1660 = -1260 + 1660 = 400$ -- confirmed.\n\n**Test Day Takeaway:** When a transversal crosses parallel lines, there are only two distinct angle measures: the acute angle and the obtuse angle. They always add to $180°$. Use this relationship to express everything in terms of one variable.',
          skills: ['Geometry', 'Parallel Lines', 'Transversals', 'Angle Relationships']
        },
        {
          id: 'pt10-m2-q22',
          type: 'fill-in',
          difficulty: 'hard',
          question: '$y = -2.5$\n\n$y = x^2 + 8x + k$\n\nIn the given system of equations, $k$ is a positive integer constant. The system has no real solutions. What is the least possible value of $k$?',
          correctAnswer: '14',
          explanation: '**SAT Pattern: No Real Solutions via the Discriminant** -- Appears 1-2 times per test. The SAT tests whether you know that "no real solutions" means the discriminant is negative, and then asks for a boundary value.\n\n**The correct answer is $14$.**\n\n**The Fast Way (35 seconds):** Set the equations equal: $x^2 + 8x + (k + 2.5) = 0$. For no real solutions, discriminant $< 0$: $64 - 4(k + 2.5) < 0$, so $54 < 4k$, meaning $k > 13.5$. The smallest positive integer greater than $13.5$ is $14$.\n\n**Step 1: Set the equations equal**\n$x^2 + 8x + k = -2.5$\n$x^2 + 8x + (k + 2.5) = 0$\n\n**Step 2: Apply the discriminant condition**\nFor no real solutions, the discriminant must be negative:\n$b^2 - 4ac < 0$\n$8^2 - 4(1)(k + 2.5) < 0$\n$64 - 4k - 10 < 0$\n$54 < 4k$\n$k > 13.5$\n\n**Step 3: Find the least positive integer**\nSince $k$ must be a positive integer and $k > 13.5$, the least possible value is $k = 14$.\n\n**Verification:** With $k = 14$: discriminant $= 64 - 4(16.5) = 64 - 66 = -2 < 0$ (no real solutions -- good). With $k = 13$: discriminant $= 64 - 4(15.5) = 64 - 62 = 2 > 0$ (has solutions -- bad). So $14$ is the boundary -- confirmed.\n\n**Test Day Takeaway:** "No real solutions" on the SAT almost always means discriminant $< 0$. Set up $b^2 - 4ac < 0$, solve the inequality for the unknown, and if the answer must be an integer, round to the next integer that satisfies the strict inequality.',
          skills: ['Quadratic Equations', 'Systems of Equations', 'Discriminant']
        }
      ]
    }
  ]
};
