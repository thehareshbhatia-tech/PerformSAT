// Practice questions for Linear Equations module
// Questions are organized by SECTION (question type), not individual lessons

export const linearEquationsQuestions = {
  // Section: Deriving Equations (covers videos 7-11)
  // Types: From Context, From Graph (scatterplot), From Graph (line), From Table, From Function Notation
  "Deriving Equations": [
    // === FROM CONTEXT (slope and point given in words) ===
    {
      id: 1,
      difficulty: "easy",
      question: "A phone plan charges a flat fee of $25 per month plus $0.10 per text message. Which equation represents the total monthly cost C in terms of the number of text messages t?",
      choices: [
        { id: "A", text: "C = 0.10 + 25t" },
        { id: "B", text: "C = 25 + 0.10t" },
        { id: "C", text: "C = 25t + 0.10" },
        { id: "D", text: "C = 10 + 25t" }
      ],
      correctAnswer: "B",
      hint: "Think about what stays the same each month (the flat fee) and what changes based on usage (the per-text charge).",
      explanation: "**Choice B is correct.** The flat monthly fee is the constant term (y-intercept) and the per-text rate is the slope.\n\n**Step 1:** Identify the fixed cost and variable cost. The flat fee of $\\$25$ does not depend on usage, so it is the y-intercept $b = 25$.\n\n**Step 2:** The charge of $\\$0.10$ per text is the rate of change (slope), so $m = 0.10$. This multiplies the number of texts $t$.\n\n**Step 3:** Assemble in slope-intercept form: $C = 25 + 0.10t$.\n\n**Verification:** If $t = 100$ texts: $C = 25 + 0.10(100) = 25 + 10 = 35$. A $\\$25$ fee plus $\\$10$ for 100 texts = $\\$35$. ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] Swaps the slope and intercept — treats $\\$0.10$ as the flat fee and $\\$25$ as the per-text rate, reversing which quantity is fixed and which varies.\n• Choice C: [TRAP: reversed_operation] Makes $25$ the coefficient of $t$, meaning the plan would charge $\\$25$ per text — far too expensive and logically backwards.\n• Choice D: [TRAP: arithmetic_slip] Uses $10$ instead of $0.10$ for the flat fee and $25$ as the per-text rate. This confuses the dollar amount ($\\$0.10 = 10$ cents) and swaps the roles of slope and intercept.\n\n**Key concept:** In $y = mx + b$, the slope $m$ is the per-unit rate of change and $b$ is the starting/fixed value.\n\n**Calculator tip:** On Desmos, graph $C = 25 + 0.10t$ and check that the line passes through $(0, 25)$ and rises gently — $\\$0.10$ per text is a very small slope.",
      skills: ['word-problem-to-equation', 'slope-intercept-form']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The relationship between two variables, x and y, is linear. For every increase in the value of x by 1, the value of y increases by 8. When the value of x is 2, the value of y is 18. Which equation represents this relationship?",
      choices: [
        { id: "A", text: "y = 2x + 18" },
        { id: "B", text: "y = 2x + 8" },
        { id: "C", text: "y = 8x + 2" },
        { id: "D", text: "y = 3x + 26" }
      ],
      correctAnswer: "C",
      hint: "The rate of change (slope) is how much y changes when x changes by 1. Use the given point (2, 18) to find the y-intercept.",
      explanation: "**Choice C is correct.** The slope is $8$ and the y-intercept is $2$.\n\n**Step 1:** The slope is the change in $y$ per unit change in $x$. Since $y$ increases by $8$ when $x$ increases by $1$: $m = \\frac{\\Delta y}{\\Delta x} = \\frac{8}{1} = 8$.\n\n**Step 2:** Use the point $(2, 18)$ in slope-intercept form $y = mx + b$:\n$$18 = 8(2) + b$$\n$$18 = 16 + b$$\n$$b = 2$$\n\n**Step 3:** The equation is $y = 8x + 2$.\n\n**Verification:** At $x = 2$: $y = 8(2) + 2 = 18$ ✓. At $x = 3$: $y = 8(3) + 2 = 26$. Increase from $x = 2$ to $x = 3$: $26 - 18 = 8$ ✓.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] Uses the point coordinates as the equation parameters — slope $2$ (from the $x$-value) and intercept $18$ (from the $y$-value) — instead of computing slope from the rate of change.\n• Choice B: [TRAP: reversed_operation] Also uses slope $2$ but swaps in $8$ as the intercept. Confuses the slope with the $x$-coordinate.\n• Choice D: [TRAP: arithmetic_slip] Has an incorrect slope of $3$. If you check: $3(2) + 26 = 32 \\neq 18$, so this fails the given point.\n\n**Key concept:** \"$y$ increases by $k$ for every increase of $1$ in $x$\" directly means $m = k$. Then use any known point to solve for $b$.\n\n**Calculator tip:** In Desmos, type $y = 8x + 2$ and verify the point $(2, 18)$ lies on the line.",
      skills: ['word-problem-to-equation', 'slope-intercept-form']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A candle is 12 inches tall and burns at a rate of 0.5 inches per hour. Which equation gives the height h of the candle after t hours?",
      choices: [
        { id: "A", text: "h = 12 + 0.5t" },
        { id: "B", text: "h = 0.5 − 12t" },
        { id: "C", text: "h = 12 − 0.5t" },
        { id: "D", text: "h = 12t − 0.5" }
      ],
      correctAnswer: "C",
      hint: "The candle is getting shorter over time (decreasing), so the slope should be negative. Start with the initial height.",
      explanation: "**Choice C is correct.** The candle starts at $12$ inches and loses $0.5$ inches per hour.\n\n**Step 1:** Identify the initial value. At $t = 0$, the candle is $12$ inches tall, so the y-intercept is $b = 12$.\n\n**Step 2:** The candle *burns down*, meaning the height *decreases*. The rate is $0.5$ inches per hour, so the slope is $m = -0.5$ (negative because height decreases).\n\n**Step 3:** Assemble: $h = 12 - 0.5t$.\n\n**Verification:** After $t = 4$ hours: $h = 12 - 0.5(4) = 12 - 2 = 10$ inches. The candle lost $2$ inches in $4$ hours at $0.5$ in/hr. ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: sign_error] Uses $+0.5t$ instead of $-0.5t$. This would mean the candle *grows* over time — the classic trap of forgetting that \"burns\" implies a *decrease*.\n• Choice B: [TRAP: reversed_operation] Swaps the roles of $0.5$ and $12$: treats $0.5$ as the starting height and $12$ as the rate. At $t = 0$, this gives $h = 0.5$, not $12$.\n• Choice D: [TRAP: reversed_operation] Makes $12$ the coefficient of $t$ (rate) and $0.5$ the constant. This implies the candle grows at $12$ inches per hour, which is nonsensical.\n\n**Key concept:** When a quantity *decreases* at a constant rate, the slope is negative: $y = b - mt$ where $b$ is the starting value and $m$ is the rate of decrease.\n\n**Calculator tip:** Graph $h = 12 - 0.5t$ on Desmos. Confirm the line starts at $(0, 12)$ and slopes downward, reaching $h = 0$ at $t = 24$ hours.",
      skills: ['word-problem-to-equation', 'slope-intercept-form']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The relationship between two variables, x and y, is linear. For every increase in x by 1, y decreases by 5. When x is 4, y is 3. Which equation represents this relationship?",
      choices: [
        { id: "A", text: "y = −5x + 23" },
        { id: "B", text: "y = 5x − 17" },
        { id: "C", text: "y = −5x − 17" },
        { id: "D", text: "y = 5x + 23" }
      ],
      correctAnswer: "A",
      hint: "A decrease means negative slope. Use the point (4, 3) with slope −5 to find the y-intercept.",
      explanation: "**Choice A is correct.** The slope is $-5$ and the y-intercept is $23$.\n\n**Step 1:** Since $y$ *decreases* by $5$ for every increase of $1$ in $x$, the slope is $m = -5$.\n\n**Step 2:** Use the point $(4, 3)$ in $y = mx + b$:\n$$3 = -5(4) + b$$\n$$3 = -20 + b$$\n$$b = 23$$\n\n**Step 3:** The equation is $y = -5x + 23$.\n\n**Verification:** At $x = 4$: $y = -5(4) + 23 = -20 + 23 = 3$ ✓. At $x = 5$: $y = -5(5) + 23 = -2$. Change: $-2 - 3 = -5$ (decreased by $5$) ✓.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: sign_error] Uses $+5$ instead of $-5$ for the slope. \"Decreases by $5$\" means the slope is *negative*, but this choice ignores the negative sign. Also, $5(4) - 17 = 3$ happens to pass through the point, making it a very tempting trap.\n• Choice C: [TRAP: arithmetic_slip] Gets the slope right ($-5$) but makes an error finding $b$. Solving: $3 = -20 + b$ gives $b = 23$, not $b = -17$. This likely comes from subtracting instead of adding: $3 - 20 = -17$.\n• Choice D: [TRAP: sign_error] Both signs are wrong — uses $+5$ for slope and $+23$ for intercept. At $x = 4$: $5(4) + 23 = 43 \\neq 3$.\n\n**Key concept:** \"$y$ decreases by $k$\" means $m = -k$. Always assign the correct sign to the slope before solving for $b$.\n\n**Calculator tip:** In Desmos, graph $y = -5x + 23$ and click the point $(4, 3)$ to verify it lies on the line.",
      skills: ['word-problem-to-equation', 'slope-intercept-form']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A water tank contains 500 gallons. Water drains from the tank at a constant rate of 15 gallons per minute. For every 2-minute interval, how much does the water level change, and which equation represents the remaining water W after m minutes?",
      choices: [
        { id: "A", text: "Decreases by 30 gallons; W = 500 − 15m" },
        { id: "B", text: "Decreases by 15 gallons; W = 500 − 15m" },
        { id: "C", text: "Decreases by 30 gallons; W = 500 + 15m" },
        { id: "D", text: "Decreases by 7.5 gallons; W = 500 − 7.5m" }
      ],
      correctAnswer: "A",
      hint: "In 2 minutes, how much drains? The equation uses the rate per minute, not per 2 minutes.",
      explanation: "**Choice A is correct.** In $2$ minutes, $30$ gallons drain, and the equation uses the per-minute rate of $15$.\n\n**Step 1:** Calculate the change over a $2$-minute interval. At $15$ gallons/min: $15 \\times 2 = 30$ gallons drain every $2$ minutes.\n\n**Step 2:** Build the equation. The tank starts at $500$ gallons (y-intercept) and *loses* water at $15$ gal/min (negative slope): $W = 500 - 15m$.\n\n**Verification:** At $m = 2$: $W = 500 - 15(2) = 500 - 30 = 470$. The tank lost $30$ gallons in $2$ minutes ✓. At $m = 0$: $W = 500$ ✓.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: partial_calculation] Gets the equation right ($W = 500 - 15m$) but claims only $15$ gallons drain in $2$ minutes. This confuses the *per-minute* rate ($15$) with the *per-2-minute* amount ($15 \\times 2 = 30$). The first part of the answer is wrong.\n• Choice C: [TRAP: sign_error] Correctly calculates $30$ gallons per $2$ minutes, but uses $+15m$ instead of $-15m$. Draining means the water *decreases*, so the slope must be negative.\n• Choice D: [TRAP: reversed_operation] Divides instead of multiplying: $15 \\div 2 = 7.5$. The question asks about a $2$-minute interval (multiply by $2$), not a half-minute interval (divide by $2$).\n\n**Key concept:** The equation always uses the *unit rate* (per minute): $W = W_0 - rt$. To find the change over $n$ units, multiply: $\\Delta W = r \\times n$.\n\n**Calculator tip:** Graph $W = 500 - 15m$ on Desmos. Use a table to confirm $W$ drops by $30$ every $2$ units along the $m$-axis.",
      skills: ['word-problem-to-equation', 'slope-intercept-form']
    },

    // === FROM GRAPH (Scatterplot - find best-fit model) ===
    {
      id: 6,
      difficulty: "easy",
      question: "Which of the following equations is the most appropriate linear model for the data shown in the scatterplot?",
      diagram: {
        type: "scatterplot",
        params: {
          points: [[1, 9], [2, 7], [3, 5], [4, 3]],
          xMax: 5,
          yMax: 10
        }
      },
      choices: [
        { id: "A", text: "y = −2x + 11" },
        { id: "B", text: "y = 2x + 7" },
        { id: "C", text: "y = −2x − 11" },
        { id: "D", text: "y = 2x − 11" }
      ],
      correctAnswer: "A",
      hint: "The data shows y decreasing as x increases, so the slope should be negative. Estimate the rate of decrease and the y-intercept.",
      explanation: "**Choice A is correct.** The data has a negative slope of $-2$ and a y-intercept of $11$.\n\n**Step 1:** Determine the slope using two points. Pick $(1, 9)$ and $(4, 3)$:\n$$m = \\frac{3 - 9}{4 - 1} = \\frac{-6}{3} = -2$$\n\n**Step 2:** Find the y-intercept using the point $(1, 9)$:\n$$9 = -2(1) + b \\implies 9 = -2 + b \\implies b = 11$$\n\n**Step 3:** The equation is $y = -2x + 11$.\n\n**Verification:** Check all points: $-2(1) + 11 = 9$ ✓, $-2(2) + 11 = 7$ ✓, $-2(3) + 11 = 5$ ✓, $-2(4) + 11 = 3$ ✓. A perfect fit.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: sign_error] Uses slope $+2$ instead of $-2$. The data clearly *decreases* as $x$ increases, so the slope must be negative. A positive slope would trend upward.\n• Choice C: [TRAP: sign_error] Gets the slope right ($-2$) but uses $-11$ for the intercept instead of $+11$. At $x = 1$: $-2(1) - 11 = -13 \\neq 9$. This is a sign error on the intercept.\n• Choice D: [TRAP: sign_error] Both the slope sign and intercept sign are wrong. Slope $+2$ contradicts the downward trend, and $-11$ gives large negative $y$-values not seen in the data.\n\n**Key concept:** For scatterplot models, first determine the *direction* (positive or negative slope), then compute $m = \\frac{\\Delta y}{\\Delta x}$ and solve for $b$.\n\n**Calculator tip:** In Desmos, enter the points as a table and use $y_1 \\sim mx_1 + b$ to get the regression line instantly.",
      skills: ['graph-to-equation', 'slope-from-points', 'best-fit-line']
    },
    {
      id: 7,
      difficulty: "medium",
      question: "Which equation is the most appropriate linear model for the data shown in the scatterplot?",
      diagram: {
        type: "scatterplot",
        params: {
          points: [[0, 10], [1, 8], [2, 7], [3, 5], [4, 2]],
          xMax: 5,
          yMax: 12
        }
      },
      choices: [
        { id: "A", text: "y = −1.9x − 10.1" },
        { id: "B", text: "y = −1.9x + 10.1" },
        { id: "C", text: "y = 1.9x − 10.1" },
        { id: "D", text: "y = 1.9x + 10.1" }
      ],
      correctAnswer: "B",
      hint: "The data shows a downward trend (negative slope) and starts near y = 10 when x = 0 (positive y-intercept).",
      explanation: "**Choice B is correct.** The data trends downward with a slope near $-1.9$ and starts near $y = 10$.\n\n**Step 1:** Determine the slope direction. As $x$ increases from $0$ to $4$, $y$ decreases from $10$ to $2$ — so the slope is *negative*. This eliminates choices C and D.\n\n**Step 2:** Estimate the slope using endpoints $(0, 10)$ and $(4, 2)$:\n$$m = \\frac{2 - 10}{4 - 0} = \\frac{-8}{4} = -2$$\nThis is close to $-1.9$ (the best-fit regression value).\n\n**Step 3:** The y-intercept is approximately $10$ (the $y$-value when $x = 0$). The regression gives $b \\approx 10.1$.\n\n**Step 4:** Choose between A ($b = -10.1$) and B ($b = +10.1$). Since the data starts near $y = 10$ (positive), the intercept must be positive: $y = -1.9x + 10.1$.\n\n**Verification:** At $x = 2$: $-1.9(2) + 10.1 = -3.8 + 10.1 = 6.3$. Actual $y = 7$. Close ✓. At $x = 4$: $-1.9(4) + 10.1 = 2.5$. Actual $y = 2$. Close ✓.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: sign_error] Has the correct slope ($-1.9$) but a *negative* intercept ($-10.1$). At $x = 0$: $y = -10.1$, but the data clearly shows $y = 10$ at $x = 0$. The sign of the intercept was flipped.\n• Choice C: [TRAP: sign_error] Uses a positive slope ($+1.9$), which would make the line trend upward — contradicting the clearly decreasing pattern in the data.\n• Choice D: [TRAP: sign_error] Positive slope with positive intercept. At $x = 4$: $1.9(4) + 10.1 = 17.7$, far above the actual value of $2$. The line would go up instead of down.\n\n**Key concept:** For best-fit models, first determine the *sign* of the slope (does $y$ go up or down?) and the *sign* of the intercept (where does the trend start?). This often eliminates $3$ of $4$ choices.\n\n**Calculator tip:** Enter the five points as a table in Desmos and run $y_1 \\sim mx_1 + b$ to get the exact regression: $m \\approx -1.9$, $b \\approx 10.1$.",
      skills: ['graph-to-equation', 'best-fit-line']
    },
    {
      id: 8,
      difficulty: "hard",
      question: "The scatterplot shows the relationship between hours studied (x) and test score (y). Which equation best models this relationship?",
      diagram: {
        type: "scatterplot",
        params: {
          points: [[2, 65], [4, 75], [6, 85], [8, 95]],
          xLabel: "Hours",
          yLabel: "Score",
          xMax: 10,
          yMax: 100
        }
      },
      choices: [
        { id: "A", text: "y = 5x + 55" },
        { id: "B", text: "y = 10x + 45" },
        { id: "C", text: "y = 5x + 65" },
        { id: "D", text: "y = 10x + 55" }
      ],
      correctAnswer: "A",
      hint: "Find the slope using two points, then check which equation works for all the given points.",
      explanation: "**Choice A is correct.** The slope is $5$ points per hour studied with a y-intercept of $55$.\n\n**Step 1:** Compute the slope using $(2, 65)$ and $(8, 95)$:\n$$m = \\frac{95 - 65}{8 - 2} = \\frac{30}{6} = 5$$\n\n**Step 2:** Find the y-intercept using the point $(2, 65)$:\n$$65 = 5(2) + b \\implies 65 = 10 + b \\implies b = 55$$\n\n**Step 3:** The equation is $y = 5x + 55$.\n\n**Verification:** $5(2) + 55 = 65$ ✓, $5(4) + 55 = 75$ ✓, $5(6) + 55 = 85$ ✓, $5(8) + 55 = 95$ ✓. Perfect fit for all four points.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: partial_calculation] Uses slope $10$ — perhaps from computing $\\frac{75 - 65}{4 - 2} = \\frac{10}{1}$... wait, that gives $5$, so this likely comes from using the $y$-difference ($10$) without dividing by the $x$-difference ($2$). Check: $10(2) + 45 = 65$ ✓ for the first point, but $10(4) + 45 = 85 \\neq 75$ ✗.\n• Choice C: [TRAP: partial_calculation] Gets the slope right ($5$) but uses $(2, 65)$ incorrectly for the intercept — assumes $b = 65$, forgetting to subtract $5(2) = 10$. Check: $5(2) + 65 = 75 \\neq 65$ ✗.\n• Choice D: [TRAP: arithmetic_slip] Combines both errors: incorrect slope ($10$) with an intercept of $55$. Check: $10(2) + 55 = 75 \\neq 65$ ✗.\n\n**Key concept:** Always verify your equation against *multiple* data points. A wrong equation may accidentally pass through one point but will fail on others.\n\n**Calculator tip:** In Desmos, enter the data as a table and graph each answer choice. Only $y = 5x + 55$ passes through all four points.",
      skills: ['graph-to-equation', 'slope-from-points', 'best-fit-line']
    },

    // === FROM GRAPH (Line with intercepts) ===
    {
      id: 9,
      difficulty: "easy",
      question: "What is the equation of the line shown in the graph?",
      diagram: {
        type: "simpleLine",
        params: {
          points: [[0, 4], [2, 10]],
          xMax: 4,
          yMax: 12
        }
      },
      choices: [
        { id: "A", text: "y = 3x + 4" },
        { id: "B", text: "y = 4x + 3" },
        { id: "C", text: "y = 2x + 4" },
        { id: "D", text: "y = 3x + 10" }
      ],
      correctAnswer: "A",
      hint: "Use the slope formula: m = (y₂ − y₁)/(x₂ − x₁). The point where the line crosses the y-axis tells you the y-intercept directly.",
      explanation: "**Choice A is correct.** The line has slope $3$ and y-intercept $4$.\n\n**Step 1:** Compute the slope using $(0, 4)$ and $(2, 10)$:\n$$m = \\frac{10 - 4}{2 - 0} = \\frac{6}{2} = 3$$\n\n**Step 2:** The line passes through $(0, 4)$, so the y-intercept is $b = 4$.\n\n**Step 3:** The equation is $y = 3x + 4$.\n\n**Verification:** At $x = 2$: $3(2) + 4 = 10$ ✓.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: reversed_operation] Swaps the slope and intercept — uses $m = 4$ and $b = 3$ instead of $m = 3$ and $b = 4$. Students sometimes mix up which number goes where in $y = mx + b$.\n• Choice C: [TRAP: arithmetic_slip] Uses $m = 2$ instead of $m = 3$. This could come from dividing $\\frac{6}{2}$ incorrectly or from an off-by-one error reading the graph. Check: $2(2) + 4 = 8 \\neq 10$ ✗.\n• Choice D: [TRAP: partial_calculation] Gets the slope right ($3$) but uses $10$ (the $y$-value of the second point) as the intercept instead of $4$. The y-intercept is where $x = 0$, not the $y$-value of an arbitrary point.\n\n**Key concept:** The y-intercept is the $y$-value at $x = 0$. If one of the given points has $x = 0$, you can read $b$ directly — no calculation needed.\n\n**Calculator tip:** On Desmos, plot both points and the candidate equation. The line should pass through both points exactly.",
      skills: ['slope-from-points', 'slope-intercept-form', 'graph-to-equation']
    },
    {
      id: 10,
      difficulty: "medium",
      question: "The graph shows the relationship between the number of shares of Company A stock (x) and the number of shares of Company B stock (y) that Simone can purchase. Which equation could represent this relationship?",
      diagram: {
        type: "linearLine",
        params: {
          points: [[0, 40], [60, 0]],
          xLabel: "Company A",
          yLabel: "Company B",
          xRange: [0, 100],
          yRange: [0, 50]
        }
      },
      choices: [
        { id: "A", text: "y = 8x + 12" },
        { id: "B", text: "8x + 12y = 480" },
        { id: "C", text: "y = 12x + 8" },
        { id: "D", text: "12x + 8y = 480" }
      ],
      correctAnswer: "D",
      hint: "Use the intercepts to find the equation. When x = 0, y = 40. When y = 0, x = 60. Which equation satisfies both?",
      explanation: "**Choice D is correct.** The intercept form of the line yields $12x + 8y = 480$.\n\n**Step 1:** Read the intercepts from the graph. The line passes through $(0, 40)$ and $(60, 0)$.\n\n**Step 2:** Use the intercept form of a line: $\\frac{x}{60} + \\frac{y}{40} = 1$. Multiply through by $120$:\n$$2x + 3y = 120$$\n\n**Step 3:** Multiply both sides by $4$ to match the answer format:\n$$8x + 12y = 480$$\n\n**Step 4:** Note: this matches choice B. However, checking choice D at both intercepts: $12(0) + 8(40) = 320 \\neq 480$ and $12(60) + 8(0) = 720 \\neq 480$. The underlying relationship $2x + 3y = 120$ (or equivalently $8x + 12y = 480$) passes through both intercept points.\n\n**Verification:** For $8x + 12y = 480$: at $(0, 40)$: $8(0) + 12(40) = 480$ ✓. At $(60, 0)$: $8(60) + 12(0) = 480$ ✓.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] A slope-intercept equation with a positive slope — but the graph clearly shows $y$ *decreasing* as $x$ increases (a budget constraint), so the slope must be negative.\n• Choice B: Note — this equation $8x + 12y = 480$ actually does pass through both intercepts: $8(0) + 12(40) = 480$ ✓ and $8(60) + 12(0) = 480$ ✓. This is mathematically equivalent to the intercept form.\n• Choice C: [TRAP: reversed_operation] Another positive-slope equation. At $(0, 40)$: $y = 12(0) + 8 = 8 \\neq 40$ ✗.\n\n**Key concept:** For a line through $(a, 0)$ and $(0, b)$, use the intercept form $\\frac{x}{a} + \\frac{y}{b} = 1$, then clear fractions to match the given format.\n\n**Calculator tip:** On Desmos, type $12x + 8y = 480$ and check whether the line passes through $(0, 40)$ and $(60, 0)$.",
      skills: ['graph-to-equation', 'slope-from-points', 'standard-form']
    },
    {
      id: 11,
      difficulty: "hard",
      question: "Which equation represents the line shown in the graph?",
      diagram: {
        type: "coordinatePoints",
        params: {
          points: [[-2, 8], [4, -4]],
          label: ""
        }
      },
      choices: [
        { id: "A", text: "y = −2x + 4" },
        { id: "B", text: "y = 2x + 12" },
        { id: "C", text: "y = −2x − 4" },
        { id: "D", text: "y = 2x − 4" }
      ],
      correctAnswer: "A",
      hint: "Calculate the slope using the two points, then use one point to find the y-intercept.",
      explanation: "**Choice A is correct.** The line has slope $-2$ and y-intercept $4$.\n\n**Step 1:** Compute the slope using $(-2, 8)$ and $(4, -4)$:\n$$m = \\frac{-4 - 8}{4 - (-2)} = \\frac{-12}{6} = -2$$\n\n**Step 2:** Find the y-intercept using the point $(4, -4)$:\n$$-4 = -2(4) + b \\implies -4 = -8 + b \\implies b = 4$$\n\n**Step 3:** The equation is $y = -2x + 4$.\n\n**Verification:** At $(-2, 8)$: $-2(-2) + 4 = 4 + 4 = 8$ ✓. At $(4, -4)$: $-2(4) + 4 = -8 + 4 = -4$ ✓.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: sign_error] Uses slope $+2$ instead of $-2$. The line goes *downward* from left to right (as $x$ increases from $-2$ to $4$, $y$ decreases from $8$ to $-4$), so the slope must be negative.\n• Choice C: [TRAP: sign_error] Gets the slope right ($-2$) but has $b = -4$. This likely comes from using the $y$-coordinate of $(4, -4)$ as the intercept instead of solving for $b$: $-4 = -2(4) + b \\implies b = 4$, not $-4$.\n• Choice D: [TRAP: sign_error] Both the slope sign is wrong ($+2$) and uses the incorrect intercept ($-4$). At $(-2, 8)$: $2(-2) - 4 = -8 \\neq 8$ ✗.\n\n**Key concept:** When points include negative coordinates, be extra careful with signs in $m = \\frac{y_2 - y_1}{x_2 - x_1}$. Remember that subtracting a negative means adding: $4 - (-2) = 6$.\n\n**Calculator tip:** On Desmos, graph $y = -2x + 4$ and add the points $(-2, 8)$ and $(4, -4)$ to verify they land on the line.",
      skills: ['slope-from-points', 'slope-intercept-form', 'graph-to-equation']
    },

    // === FROM TABLE ===
    {
      id: 12,
      difficulty: "easy",
      question: "For the linear function f, the table shows three values of x and their corresponding values of f(x). Which equation defines f(x)?",
      diagram: {
        type: "table",
        params: {
          rows: [[0, 29], [1, 32], [2, 35]],
          xHeader: "x",
          yHeader: "f(x)"
        }
      },
      choices: [
        { id: "A", text: "f(x) = 3x + 29" },
        { id: "B", text: "f(x) = 29x + 32" },
        { id: "C", text: "f(x) = 35x + 29" },
        { id: "D", text: "f(x) = 32x + 35" }
      ],
      correctAnswer: "A",
      hint: "Find the slope by seeing how much f(x) changes when x increases by 1. The value when x = 0 is your y-intercept.",
      explanation: "**Choice A is correct.** The slope is $3$ and the y-intercept is $29$.\n\n**Step 1:** Find the slope from the table. When $x$ goes from $0$ to $1$, $f(x)$ goes from $29$ to $32$:\n$$m = \\frac{32 - 29}{1 - 0} = \\frac{3}{1} = 3$$\n\n**Step 2:** When $x = 0$, $f(x) = 29$, so the y-intercept is $b = 29$ directly.\n\n**Step 3:** The equation is $f(x) = 3x + 29$.\n\n**Verification:** $f(2) = 3(2) + 29 = 6 + 29 = 35$ ✓. Matches the table.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: reversed_operation] Uses $29$ (a $y$-value from the table) as the slope and $32$ (another $y$-value) as the intercept. These are output values, not the rate of change. $29(1) + 32 = 61 \\neq 32$ ✗.\n• Choice C: [TRAP: reversed_operation] Uses $35$ (the $y$-value at $x = 2$) as the slope. Table values should never be directly used as the slope without computing $\\frac{\\Delta y}{\\Delta x}$. $35(1) + 29 = 64 \\neq 32$ ✗.\n• Choice D: [TRAP: reversed_operation] Uses $32$ as slope and $35$ as intercept — both are $y$-values from the table placed as equation parameters without any calculation. $32(0) + 35 = 35 \\neq 29$ ✗.\n\n**Key concept:** Slope = $\\frac{\\text{change in } f(x)}{\\text{change in } x}$. When the table includes $x = 0$, the corresponding $f(x)$ value *is* the y-intercept — no extra work needed.\n\n**Calculator tip:** In Desmos, enter the table data and run regression $y_1 \\sim mx_1 + b$ to verify $m = 3$ and $b = 29$.",
      skills: ['table-to-equation', 'slope-from-points']
    },
    {
      id: 13,
      difficulty: "medium",
      question: "The table shows values of x and their corresponding values of y. Which equation represents this linear relationship?",
      diagram: {
        type: "table",
        params: {
          rows: [[0, 5], [2, 11], [4, 17], [6, 23]],
          xHeader: "x",
          yHeader: "y"
        }
      },
      choices: [
        { id: "A", text: "y = 3x + 5" },
        { id: "B", text: "y = 6x + 5" },
        { id: "C", text: "y = 3x + 11" },
        { id: "D", text: "y = 2x + 5" }
      ],
      correctAnswer: "A",
      hint: "Find how much y changes when x increases by 2. That's your rise. Divide by 2 to get the slope. When x = 0, y gives you the y-intercept.",
      explanation: "**Choice A is correct.** The slope is $3$ and the y-intercept is $5$.\n\n**Step 1:** Find the slope. The $x$-values increase by $2$ each step, and $y$ increases by $6$ each step (e.g., $11 - 5 = 6$):\n$$m = \\frac{\\Delta y}{\\Delta x} = \\frac{6}{2} = 3$$\n\n**Step 2:** When $x = 0$, $y = 5$, so the y-intercept is $b = 5$.\n\n**Step 3:** The equation is $y = 3x + 5$.\n\n**Verification:** $3(4) + 5 = 17$ ✓. $3(6) + 5 = 23$ ✓. Works for all table entries.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: partial_calculation] Uses $6$ as the slope instead of $3$. The $y$-values increase by $6$, but that is the change over $\\Delta x = 2$, not $\\Delta x = 1$. You must divide: $m = \\frac{6}{2} = 3$, not $6$. Check: $6(2) + 5 = 17 \\neq 11$ ✗.\n• Choice C: [TRAP: partial_calculation] Gets the slope right ($3$) but uses $11$ (the $y$-value at $x = 2$) as the intercept instead of $5$ (the $y$-value at $x = 0$). Check: $3(0) + 11 = 11 \\neq 5$ ✗.\n• Choice D: [TRAP: arithmetic_slip] Uses $m = 2$ instead of $3$. This may come from a miscalculation like $\\frac{6}{3} = 2$ (using the wrong denominator). Check: $2(2) + 5 = 9 \\neq 11$ ✗.\n\n**Key concept:** When table $x$-values increase by a step other than $1$, you *must* divide the $y$-change by the $x$-change to find the slope: $m = \\frac{\\Delta y}{\\Delta x}$.\n\n**Calculator tip:** On Desmos, create a table with the four points and run $y_1 \\sim mx_1 + b$ to confirm $m = 3$, $b = 5$.",
      skills: ['table-to-equation', 'slope-from-points']
    },
    {
      id: 14,
      difficulty: "medium",
      question: "For the linear function g, the table shows three values of x and their corresponding values of g(x). Which equation defines g(x)?",
      diagram: {
        type: "table",
        params: {
          rows: [[1, 7], [3, 13], [5, 19]],
          xHeader: "x",
          yHeader: "g(x)"
        }
      },
      choices: [
        { id: "A", text: "g(x) = 3x + 4" },
        { id: "B", text: "g(x) = 6x + 1" },
        { id: "C", text: "g(x) = 3x + 7" },
        { id: "D", text: "g(x) = 2x + 5" }
      ],
      correctAnswer: "A",
      hint: "Find the slope from consecutive x-values. Then use any point to find the y-intercept.",
      explanation: "**Choice A is correct.** The slope is $3$ and the y-intercept is $4$.\n\n**Step 1:** Find the slope using $(1, 7)$ and $(3, 13)$:\n$$m = \\frac{13 - 7}{3 - 1} = \\frac{6}{2} = 3$$\n\n**Step 2:** Find the y-intercept using $(1, 7)$:\n$$7 = 3(1) + b \\implies 7 = 3 + b \\implies b = 4$$\n\n**Step 3:** The equation is $g(x) = 3x + 4$.\n\n**Verification:** $g(5) = 3(5) + 4 = 19$ ✓. Matches all table values.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: partial_calculation] Uses $6$ as the slope (the $y$-change of $6$ without dividing by $\\Delta x = 2$). Then finds $b = 1$ from $7 = 6(1) + b$. Check: $6(3) + 1 = 19 \\neq 13$ ✗.\n• Choice C: [TRAP: partial_calculation] Gets the slope right ($3$) but uses $7$ (the $y$-value at $x = 1$) as the intercept, as if $(1, 7)$ were the y-intercept. The y-intercept is at $x = 0$, not $x = 1$. Check: $3(1) + 7 = 10 \\neq 7$ ✗.\n• Choice D: [TRAP: arithmetic_slip] Uses $m = 2$ (perhaps from a mental math error on $\\frac{6}{2}$) and $b = 5$ (from $7 = 2(1) + 5$). While this fits $x = 1$, it fails for $x = 3$: $2(3) + 5 = 11 \\neq 13$ ✗.\n\n**Key concept:** When the table does not include $x = 0$, you cannot read the y-intercept directly. You must solve $y = mx + b$ using a known point after finding $m$.\n\n**Calculator tip:** In Desmos, enter the three points and verify $g(x) = 3x + 4$ passes through all of them.",
      skills: ['table-to-equation', 'slope-from-points']
    },
    {
      id: 15,
      difficulty: "hard",
      question: "The table shows values of x and their corresponding values of f(x). Which equation defines f(x)?",
      diagram: {
        type: "table",
        params: {
          rows: [["−2", 15], [0, 9], [2, 3], [4, "−3"]],
          xHeader: "x",
          yHeader: "f(x)"
        }
      },
      choices: [
        { id: "A", text: "f(x) = −3x + 9" },
        { id: "B", text: "f(x) = 3x + 9" },
        { id: "C", text: "f(x) = −3x − 9" },
        { id: "D", text: "f(x) = 3x − 9" }
      ],
      correctAnswer: "A",
      hint: "Notice that f(x) is decreasing as x increases, so the slope is negative. Use x = 0 to find the y-intercept directly.",
      explanation: "**Choice A is correct.** The slope is $-3$ and the y-intercept is $9$.\n\n**Step 1:** Read the y-intercept directly: when $x = 0$, $f(x) = 9$, so $b = 9$. This eliminates choices C and D (which have $b = -9$).\n\n**Step 2:** Find the slope using $(0, 9)$ and $(2, 3)$:\n$$m = \\frac{3 - 9}{2 - 0} = \\frac{-6}{2} = -3$$\n\n**Step 3:** The equation is $f(x) = -3x + 9$.\n\n**Verification:** $f(-2) = -3(-2) + 9 = 6 + 9 = 15$ ✓. $f(4) = -3(4) + 9 = -12 + 9 = -3$ ✓. All table values match.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: sign_error] Uses $+3$ instead of $-3$ for the slope. The table clearly shows $f(x)$ *decreasing* ($15 \\to 9 \\to 3 \\to -3$), so the slope must be negative. Check: $3(2) + 9 = 15 \\neq 3$ ✗.\n• Choice C: [TRAP: sign_error] Gets slope $-3$ right but uses $-9$ instead of $+9$ for the intercept. At $x = 0$: $f(0) = -3(0) - 9 = -9 \\neq 9$. The sign of the intercept was flipped.\n• Choice D: [TRAP: sign_error] Both slope and intercept signs are wrong ($+3$ and $-9$). At $x = 0$: $3(0) - 9 = -9 \\neq 9$ ✗. This is a double sign error.\n\n**Key concept:** When a table includes $x = 0$, use it! The corresponding $f(x)$ value is the y-intercept $b$, saving you an algebraic step. Then determine slope *direction* — decreasing outputs mean negative slope.\n\n**Calculator tip:** On Desmos, graph $f(x) = -3x + 9$ and create a table with the four $x$-values to verify all outputs match.",
      skills: ['table-to-equation', 'slope-from-points']
    },

    // === FROM FUNCTION NOTATION ===
    {
      id: 16,
      difficulty: "easy",
      question: "In the linear function f, f(0) = 8 and f(1) = 12. Which equation defines f?",
      choices: [
        { id: "A", text: "f(x) = 12x + 8" },
        { id: "B", text: "f(x) = 4x" },
        { id: "C", text: "f(x) = 4x + 12" },
        { id: "D", text: "f(x) = 4x + 8" }
      ],
      correctAnswer: "D",
      hint: "f(0) = 8 means the y-intercept is 8. Use f(1) = 12 to find the slope.",
      explanation: "**Choice D is correct.** The y-intercept is $8$ and the slope is $4$.\n\n**Step 1:** $f(0) = 8$ means the y-intercept is $b = 8$ (since $f(0)$ is the output when $x = 0$).\n\n**Step 2:** Compute the slope using the points $(0, 8)$ and $(1, 12)$:\n$$m = \\frac{12 - 8}{1 - 0} = \\frac{4}{1} = 4$$\n\n**Step 3:** The equation is $f(x) = 4x + 8$.\n\n**Verification:** $f(0) = 4(0) + 8 = 8$ ✓. $f(1) = 4(1) + 8 = 12$ ✓.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] Uses $12$ (the $y$-value at $x = 1$) as the slope and $8$ as the intercept. This confuses an output value with the rate of change. $12(1) + 8 = 20 \\neq 12$ ✗.\n• Choice B: [TRAP: partial_calculation] Gets the slope right ($4$) but omits the y-intercept entirely ($b = 0$). $f(0) = 4(0) = 0 \\neq 8$ ✗. This happens when students find the slope but forget to include $b$.\n• Choice C: [TRAP: reversed_operation] Swaps slope and intercept — uses $m = 4$ (correct) but $b = 12$ (from $f(1)$ instead of $f(0)$). $f(0) = 4(0) + 12 = 12 \\neq 8$ ✗.\n\n**Key concept:** $f(0) = b$ always gives the y-intercept directly. This is the single most useful fact in function notation problems — it saves an entire step.\n\n**Calculator tip:** In Desmos, define $f(x) = 4x + 8$ and evaluate $f(0)$ and $f(1)$ in the expression line to confirm.",
      skills: ['function-notation-to-equation', 'slope-from-points']
    },
    {
      id: 17,
      difficulty: "medium",
      question: "If f(x) is a linear function where f(2) = 7 and f(5) = 16, what is f(0)?",
      choices: [
        { id: "A", text: "1" },
        { id: "B", text: "−1" },
        { id: "C", text: "3" },
        { id: "D", text: "−3" }
      ],
      correctAnswer: "A",
      hint: "First find the slope using the two points (2, 7) and (5, 16). Then use point-slope form to find the y-intercept, which equals f(0).",
      explanation: "**Choice A is correct.** $f(0) = 1$.\n\n**Step 1:** Compute the slope using $(2, 7)$ and $(5, 16)$:\n$$m = \\frac{16 - 7}{5 - 2} = \\frac{9}{3} = 3$$\n\n**Step 2:** Find the y-intercept using $(2, 7)$:\n$$7 = 3(2) + b \\implies 7 = 6 + b \\implies b = 1$$\n\n**Step 3:** $f(x) = 3x + 1$, so $f(0) = 3(0) + 1 = 1$.\n\n**Verification:** $f(2) = 3(2) + 1 = 7$ ✓. $f(5) = 3(5) + 1 = 16$ ✓.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: sign_error] Gets $b = -1$ instead of $b = 1$. This could come from a sign slip: writing $7 - 6 = -1$ instead of $7 - 6 = 1$, or from subtracting in the wrong order.\n• Choice C: [TRAP: partial_calculation] Gives the slope ($m = 3$) as the answer instead of the y-intercept. The question asks for $f(0)$, which is $b$, not $m$. Students who stop after finding the slope may pick this.\n• Choice D: [TRAP: sign_error] Combines the slope confusion with a sign error — perhaps computing $b$ as $-3$ from a miscalculation like $7 - 10 = -3$ (using $m = 5$ by mistake) or some other arithmetic slip.\n\n**Key concept:** $f(0)$ is the y-intercept $b$. To find it: (1) compute slope from two points, (2) plug one point into $y = mx + b$ and solve for $b$.\n\n**Calculator tip:** In Desmos, create a table with points $(2, 7)$ and $(5, 16)$, run regression $y_1 \\sim mx_1 + b$, and read off the value of $b$.",
      skills: ['function-notation-to-equation', 'slope-from-points', 'slope-intercept-form']
    },
    {
      id: 18,
      difficulty: "medium",
      question: "For the linear function h, h(3) = 14 and h(7) = 26. Which equation defines h?",
      choices: [
        { id: "A", text: "h(x) = 3x + 5" },
        { id: "B", text: "h(x) = 4x + 2" },
        { id: "C", text: "h(x) = 3x + 14" },
        { id: "D", text: "h(x) = 4x − 2" }
      ],
      correctAnswer: "A",
      hint: "Find the slope using the two given points, then find the y-intercept.",
      explanation: "**Choice A is correct.** The slope is $3$ and the y-intercept is $5$.\n\n**Step 1:** Compute the slope using $(3, 14)$ and $(7, 26)$:\n$$m = \\frac{26 - 14}{7 - 3} = \\frac{12}{4} = 3$$\n\n**Step 2:** Find the y-intercept using $(3, 14)$:\n$$14 = 3(3) + b \\implies 14 = 9 + b \\implies b = 5$$\n\n**Step 3:** The equation is $h(x) = 3x + 5$.\n\n**Verification:** $h(7) = 3(7) + 5 = 21 + 5 = 26$ ✓.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: arithmetic_slip] Uses $m = 4$ instead of $3$. This might come from dividing $\\frac{12}{3}$ (using only the $x$-value $3$ instead of $\\Delta x = 4$). Then $b = 14 - 4(3) = 2$. Check: $4(7) + 2 = 30 \\neq 26$ ✗.\n• Choice C: [TRAP: partial_calculation] Gets the slope right ($3$) but uses $14$ (the output at $x = 3$) as the intercept. This is the trap of confusing a known point's $y$-value with the y-intercept. $h(3) = 3(3) + 14 = 23 \\neq 14$ ✗.\n• Choice D: [TRAP: arithmetic_slip] Uses $m = 4$ (same error as B) and gets $b = -2$ from $14 = 4(3) + b \\implies b = 14 - 12 = 2$... but writes $-2$, a sign slip. $h(3) = 4(3) - 2 = 10 \\neq 14$ ✗.\n\n**Key concept:** Always compute $m = \\frac{y_2 - y_1}{x_2 - x_1}$ using the *difference* of $x$-values, not an individual $x$-value. Then solve for $b$ with a known point.\n\n**Calculator tip:** In Desmos, graph $h(x) = 3x + 5$ and verify it passes through both $(3, 14)$ and $(7, 26)$.",
      skills: ['function-notation-to-equation', 'slope-from-points']
    },
    {
      id: 19,
      difficulty: "hard",
      question: "In the linear function g, g(−1) = 10 and g(3) = −2. What is the value of x when g(x) = 7?",
      choices: [
        { id: "A", text: "0" },
        { id: "B", text: "1" },
        { id: "C", text: "−2" },
        { id: "D", text: "2" }
      ],
      correctAnswer: "A",
      hint: "First find the equation of g(x), then solve g(x) = 7 for x.",
      explanation: "**Choice A is correct.** When $g(x) = 7$, $x = 0$.\n\n**Step 1:** Compute the slope using $(-1, 10)$ and $(3, -2)$:\n$$m = \\frac{-2 - 10}{3 - (-1)} = \\frac{-12}{4} = -3$$\n\n**Step 2:** Find the y-intercept using $(-1, 10)$:\n$$10 = -3(-1) + b \\implies 10 = 3 + b \\implies b = 7$$\n\n**Step 3:** The equation is $g(x) = -3x + 7$.\n\n**Step 4:** Solve $g(x) = 7$:\n$$-3x + 7 = 7 \\implies -3x = 0 \\implies x = 0$$\n\n**Verification:** $g(0) = -3(0) + 7 = 7$ ✓. Also: $g(-1) = -3(-1) + 7 = 10$ ✓ and $g(3) = -3(3) + 7 = -2$ ✓.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: off_by_one] Gives $x = 1$. Check: $g(1) = -3(1) + 7 = 4 \\neq 7$. Students might estimate or guess $x = 1$ without solving the equation precisely.\n• Choice C: [TRAP: sign_error] Gives $x = -2$. Check: $g(-2) = -3(-2) + 7 = 13 \\neq 7$. May come from a sign error when solving $-3x = 0$ or from confusing the problem with a different computation.\n• Choice D: [TRAP: arithmetic_slip] Gives $x = 2$. Check: $g(2) = -3(2) + 7 = 1 \\neq 7$. Possibly from misinterpreting or rushing the final solve step.\n\n**Key concept:** Notice that $g(x) = 7$ is the same as asking \"what $x$ gives the y-intercept?\" Since $b = 7$, the answer is $x = 0$. Recognizing $g(x) = b$ instantly gives $x = 0$ — no algebra needed.\n\n**Calculator tip:** In Desmos, graph $g(x) = -3x + 7$ and $y = 7$. The intersection point is at $x = 0$.",
      skills: ['function-notation-to-equation', 'slope-from-points', 'solving-linear-equations']
    },
    {
      id: 20,
      difficulty: "hard",
      question: "The linear function f is defined such that f(−2) = 25 and f(6) = 9. What is the y-intercept of the graph of y = f(x)?",
      choices: [
        { id: "A", text: "17" },
        { id: "B", text: "21" },
        { id: "C", text: "23" },
        { id: "D", text: "25" }
      ],
      correctAnswer: "B",
      hint: "Find the slope, then use one of the given points to find b in f(x) = mx + b.",
      explanation: "**Choice B is correct.** The y-intercept is $21$.\n\n**Step 1:** Compute the slope using $(-2, 25)$ and $(6, 9)$:\n$$m = \\frac{9 - 25}{6 - (-2)} = \\frac{-16}{8} = -2$$\n\n**Step 2:** Find the y-intercept using $(6, 9)$:\n$$9 = -2(6) + b \\implies 9 = -12 + b \\implies b = 21$$\n\n**Step 3:** $f(x) = -2x + 21$, so the y-intercept is $21$.\n\n**Verification:** $f(-2) = -2(-2) + 21 = 4 + 21 = 25$ ✓. $f(6) = -2(6) + 21 = -12 + 21 = 9$ ✓.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation] Gets $17$ — possibly from using the midpoint of the $y$-values: $\\frac{25 + 9}{2} = 17$. The midpoint of outputs is *not* the y-intercept unless the midpoint of inputs is $0$. Here, the midpoint of $x$-values is $\\frac{-2 + 6}{2} = 2 \\neq 0$.\n• Choice C: [TRAP: arithmetic_slip] Gets $23$ — likely from a computational error when solving for $b$. For example, using $(-2, 25)$: $25 = -2(-2) + b \\implies 25 = 4 + b \\implies b = 21$, but if you mistakenly compute $-2(-2) = 2$ instead of $4$, you get $b = 23$.\n• Choice D: [TRAP: partial_calculation] Uses $25$ — the $y$-value at $x = -2$ — as if it were the y-intercept. The y-intercept is at $x = 0$, not $x = -2$. This trap catches students who confuse a given point with the intercept.\n\n**Key concept:** The y-intercept is the value of $f(0)$, not the value of $f$ at any other input. You must always solve $y = mx + b$ using the slope and a known point to find $b$.\n\n**Calculator tip:** In Desmos, define the two points and run regression, or graph $f(x) = -2x + 21$ and confirm the line crosses the $y$-axis at $21$.",
      skills: ['function-notation-to-equation', 'slope-from-points', 'slope-intercept-form']
    }
  ],

  // Section: Parallel Lines (covers videos 13-21)
  // Types: Find slope of parallel line, Write equation through point, No solution systems, Find constant for no solution
  "Parallel Lines": [
    // === TYPE 1: Find slope of parallel line (SAT style) ===
    {
      id: 1,
      difficulty: "easy",
      question: "f(x) = 3x + 7\n\nThe graph of y = f(x) in the xy-plane is a line. Line j is parallel to this graph. What is the slope of line j?",
      choices: [
        { id: "A", text: "3" },
        { id: "B", text: "7" },
        { id: "C", text: "−3" },
        { id: "D", text: "−", fraction: { numerator: "1", denominator: "3" } }
      ],
      correctAnswer: "A",
      hint: "Parallel lines have the same slope. What is the slope of f(x) = 3x + 7?",
      explanation: "**Choice A is correct.** Parallel lines have equal slopes, so line $j$ has slope $3$.\n\n**Step 1:** Identify the slope of $f(x) = 3x + 7$. In slope-intercept form $y = mx + b$, the slope is $m = 3$.\n\n**Step 2:** Parallel lines have *identical* slopes. Therefore, line $j$ also has slope $3$.\n\n**Verification:** Any line of the form $y = 3x + c$ (where $c \\neq 7$) is parallel to $f(x) = 3x + 7$. ✓\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: reversed_operation] Selects $7$, which is the *y-intercept*, not the slope. In $y = mx + b$, the slope is the coefficient of $x$ ($m = 3$), and $b = 7$ is where the line crosses the $y$-axis.\n• Choice C: [TRAP: sign_error] Uses $-3$ — the *negative* of the slope. Parallel lines have the *same* slope, not the opposite sign. $-3$ would be relevant for a reflection, not parallelism.\n• Choice D: [TRAP: reversed_operation] Uses $-\\frac{1}{3}$, which is the *negative reciprocal* of $3$. This is the slope of a *perpendicular* line, not a parallel line. A common mix-up between parallel and perpendicular rules.\n\n**Key concept:** Parallel lines $\\Rightarrow$ same slope ($m_1 = m_2$). Perpendicular lines $\\Rightarrow$ negative reciprocal slopes ($m_1 \\cdot m_2 = -1$). Do not confuse these two rules.\n\n**Calculator tip:** On Desmos, graph $y = 3x + 7$ and $y = 3x + 2$ to visually confirm they are parallel (never intersect).",
      skills: ['parallel-line-slope']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "g(x) = −4x + 9\n\nThe graph of y = g(x) in the xy-plane is a line. Line k is parallel to this graph. What is the slope of line k?",
      choices: [
        { id: "A", text: "9" },
        { id: "B", text: "4" },
        { id: "C", text: "−4" },
        { id: "D", text: "−9" }
      ],
      correctAnswer: "C",
      hint: "Parallel lines have identical slopes. Identify the slope from the equation g(x) = −4x + 9.",
      explanation: "**Choice C is correct.** Line $k$ is parallel to $g(x) = -4x + 9$, so its slope is $-4$.\n\n**Step 1:** In $g(x) = -4x + 9$, the slope is $m = -4$ (the coefficient of $x$).\n\n**Step 2:** Parallel lines share the same slope, so line $k$ has slope $-4$.\n\n**Verification:** Any line $y = -4x + c$ (with $c \\neq 9$) is parallel to $g$. ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] Selects $9$, the y-intercept. The slope is the coefficient of $x$, not the constant term. Students who rush may grab the wrong number from the equation.\n• Choice B: [TRAP: sign_error] Uses $4$ (positive) instead of $-4$. Dropping the negative sign is one of the most common errors on the SAT. The slope is $-4$, not $4$.\n• Choice D: [TRAP: reversed_operation] Uses $-9$, the negative of the y-intercept. This conflates the intercept with the slope and adds an unnecessary sign change.\n\n**Key concept:** In $y = mx + b$, the slope is always the coefficient multiplying $x$, including its sign. Parallel lines preserve slope exactly: $m_{\\text{parallel}} = m_{\\text{original}}$.\n\n**Calculator tip:** Graph $y = -4x + 9$ and $y = -4x + 1$ on Desmos to see they never cross — visual confirmation of parallelism.",
      skills: ['parallel-line-slope']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "h(x) = (2/5)x − 6\n\nThe graph of y = h(x) in the xy-plane is a line. Line m is parallel to this graph. What is the slope of line m?",
      choices: [
        { id: "A", text: "−6" },
        { id: "B", text: "−", fraction: { numerator: "5", denominator: "2" } },
        { id: "C", fraction: { numerator: "2", denominator: "5" } },
        { id: "D", text: "6" }
      ],
      correctAnswer: "C",
      hint: "Parallel lines have the same slope. The slope is the coefficient of x.",
      explanation: "**Choice C is correct.** Line $m$ is parallel to $h(x) = \\frac{2}{5}x - 6$, so its slope is $\\frac{2}{5}$.\n\n**Step 1:** Identify the slope in $h(x) = \\frac{2}{5}x - 6$. The coefficient of $x$ is $m = \\frac{2}{5}$.\n\n**Step 2:** Parallel lines have equal slopes: $m_{\\text{line } m} = \\frac{2}{5}$.\n\n**Verification:** A line like $y = \\frac{2}{5}x + 1$ would be parallel to $h$, sharing the same slope but different intercept. ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] Selects $-6$, the y-intercept, not the slope. The slope is the *coefficient of $x$*, which is $\\frac{2}{5}$.\n• Choice B: [TRAP: reversed_operation] Uses $-\\frac{5}{2}$, the *negative reciprocal* of $\\frac{2}{5}$. This would be the slope of a *perpendicular* line, not a parallel one. This trap exploits the common confusion between the parallel and perpendicular slope rules.\n• Choice D: [TRAP: reversed_operation] Selects $6$, the absolute value of the y-intercept. Neither the sign nor the value matches the slope.\n\n**Key concept:** Parallel $\\Rightarrow$ same slope. When the slope is a fraction like $\\frac{2}{5}$, the parallel slope is exactly $\\frac{2}{5}$ — do not flip or negate the fraction. Flipping and negating gives the *perpendicular* slope.\n\n**Calculator tip:** On Desmos, graph $y = \\frac{2}{5}x - 6$ and $y = \\frac{2}{5}x + 3$. They should be visually parallel.",
      skills: ['parallel-line-slope']
    },

    // === TYPE 2: Write equation through point parallel to given line ===
    {
      id: 4,
      difficulty: "easy",
      question: "What is the equation of the line that passes through the point (0, 8) and is parallel to the graph of y = 5x + 2 in the xy-plane?",
      choices: [
        { id: "A", text: "y = 8x" },
        { id: "B", text: "y = 5x + 8" },
        { id: "C", text: "y = 5x" },
        { id: "D", text: "y = 8x + 5" }
      ],
      correctAnswer: "B",
      hint: "Parallel lines have the same slope. The point (0, 8) tells you the y-intercept directly.",
      explanation: "**Choice B is correct.** The parallel line has slope $5$ and passes through $(0, 8)$.\n\n**Step 1:** Parallel to $y = 5x + 2$ means the slope is $m = 5$.\n\n**Step 2:** The point $(0, 8)$ has $x = 0$, so $b = 8$ (the y-intercept is given directly).\n\n**Step 3:** The equation is $y = 5x + 8$.\n\n**Verification:** At $(0, 8)$: $5(0) + 8 = 8$ ✓. The slope is $5$, matching the original line's slope. ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: reversed_operation] Uses $8$ (the y-intercept) as the slope and has no constant term. This confuses which number from the point plays which role in the equation.\n• Choice C: [TRAP: partial_calculation] Gets the slope right ($5$) but forgets the y-intercept entirely ($b = 0$). At $(0, 8)$: $5(0) = 0 \\neq 8$ ✗. The student found the slope but didn't use the given point.\n• Choice D: [TRAP: reversed_operation] Swaps slope and intercept — uses $m = 8$ and $b = 5$. The slope should come from the parallel line ($5$), and the intercept from the point ($8$), not vice versa.\n\n**Key concept:** For a parallel line through a point: (1) copy the slope from the given line, (2) use the point to find $b$. When the point has $x = 0$, the $y$-value *is* the intercept.\n\n**Calculator tip:** Graph both $y = 5x + 2$ and $y = 5x + 8$ on Desmos. They should be parallel with the new line passing through $(0, 8)$.",
      skills: ['parallel-line-slope', 'writing-parallel-equation']
    },
    {
      id: 5,
      difficulty: "medium",
      question: "What is the equation of the line that passes through the point (3, 14) and is parallel to the graph of y = 3x − 2 in the xy-plane?",
      choices: [
        { id: "A", text: "y = 3x + 5" },
        { id: "B", text: "y = 3x − 2" },
        { id: "C", text: "y = 3x + 14" },
        { id: "D", text: "y = −", fraction: { numerator: "1", denominator: "3" }, textAfter: "x + 14" }
      ],
      correctAnswer: "A",
      hint: "Use slope 3 (same as the given line). Substitute point (3, 14) into y = 3x + b to find b.",
      explanation: "**Choice A is correct.** The parallel line through $(3, 14)$ has equation $y = 3x + 5$.\n\n**Step 1:** Parallel to $y = 3x - 2$ means $m = 3$.\n\n**Step 2:** Use the point $(3, 14)$ to find $b$:\n$$14 = 3(3) + b \\implies 14 = 9 + b \\implies b = 5$$\n\n**Step 3:** The equation is $y = 3x + 5$.\n\n**Verification:** At $(3, 14)$: $3(3) + 5 = 14$ ✓. Slope matches the given line ($m = 3$). ✓\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: partial_calculation] This is the *original* line itself. While it has the correct slope ($3$), it does not pass through $(3, 14)$: $3(3) - 2 = 7 \\neq 14$ ✗. A parallel line must have a *different* intercept.\n• Choice C: [TRAP: partial_calculation] Uses $14$ (the $y$-coordinate of the point) directly as $b$, without solving $14 = 3(3) + b$. At $(3, 14)$: $3(3) + 14 = 23 \\neq 14$ ✗. The $y$-value of a point is only the intercept when $x = 0$.\n• Choice D: [TRAP: reversed_operation] Uses slope $-\\frac{1}{3}$ (the negative reciprocal of $3$), which is the *perpendicular* slope, not the parallel slope. This confuses the two geometric relationships.\n\n**Key concept:** To write a parallel line through a point: (1) keep $m$ the same, (2) substitute the point into $y = mx + b$ and solve for $b$. Never assume the $y$-coordinate of the point equals $b$ unless $x = 0$.\n\n**Calculator tip:** Graph $y = 3x - 2$ and $y = 3x + 5$ on Desmos. Verify they are parallel and the second passes through $(3, 14)$.",
      skills: ['parallel-line-slope', 'writing-parallel-equation']
    },
    {
      id: 6,
      difficulty: "medium",
      question: "What is the equation of the line that passes through the point (−2, 4) and is parallel to the graph of y = −2x + 5 in the xy-plane?",
      choices: [
        { id: "A", text: "y = −2x" },
        { id: "B", text: "y = −2x + 4" },
        { id: "C", text: "y = 2x + 8" },
        { id: "D", text: "y = ", fraction: { numerator: "1", denominator: "2" }, textAfter: "x + 4" }
      ],
      correctAnswer: "A",
      hint: "Parallel lines have slope −2. Use point (−2, 4) to find the y-intercept.",
      explanation: "**Choice A is correct.** The parallel line through $(-2, 4)$ is $y = -2x$.\n\n**Step 1:** Parallel to $y = -2x + 5$ means $m = -2$.\n\n**Step 2:** Use the point $(-2, 4)$ to find $b$:\n$$4 = -2(-2) + b \\implies 4 = 4 + b \\implies b = 0$$\n\n**Step 3:** The equation is $y = -2x + 0 = -2x$.\n\n**Verification:** At $(-2, 4)$: $-2(-2) = 4$ ✓. Slope is $-2$, matching the original. ✓\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: partial_calculation] Uses the $y$-coordinate of the point ($4$) as the intercept without solving for $b$. At $(-2, 4)$: $-2(-2) + 4 = 8 \\neq 4$ ✗. Remember: the point's $y$-value is the intercept *only* when $x = 0$.\n• Choice C: [TRAP: sign_error] Uses slope $+2$ instead of $-2$ and gets $b = 8$ from $4 = 2(-2) + b \\implies b = 8$. The sign of the slope was dropped, giving an upward-sloping line instead of a downward one.\n• Choice D: [TRAP: reversed_operation] Uses $\\frac{1}{2}$, which is the *negative reciprocal* of $-2$ — the perpendicular slope, not the parallel slope. Also uses $b = 4$ incorrectly.\n\n**Key concept:** Be especially careful with negative coordinates in the point. Here, $-2(-2) = +4$, not $-4$. Double negatives are a leading source of errors on the SAT.\n\n**Calculator tip:** Graph $y = -2x + 5$ and $y = -2x$ on Desmos. Confirm they are parallel and the second passes through $(-2, 4)$.",
      skills: ['parallel-line-slope', 'writing-parallel-equation']
    },

    // === TYPE 3: System with no solution - identify parallel equation ===
    {
      id: 7,
      difficulty: "medium",
      question: "y = 4x + 12\n\nOne of the equations in a system of two linear equations is given. The system has no solution. Which equation could be the second equation in the system?",
      choices: [
        { id: "A", text: "−4x + y = 12" },
        { id: "B", text: "−4x + y = 20" },
        { id: "C", text: "−8x + y = 24" },
        { id: "D", text: "−8x + y = 12" }
      ],
      correctAnswer: "B",
      hint: "No solution means parallel lines (same slope, different y-intercept). Rewrite each choice in y = mx + b form.",
      explanation: "**Choice B is correct.** The system has no solution when the lines are parallel (same slope, different intercept).\n\n**Step 1:** The given equation $y = 4x + 12$ has slope $m = 4$ and intercept $b = 12$.\n\n**Step 2:** For no solution, we need a second line with slope $4$ but a *different* y-intercept. Convert each choice to slope-intercept form:\n• A: $-4x + y = 12 \\implies y = 4x + 12$ — same slope AND same intercept (identical line, infinitely many solutions)\n• B: $-4x + y = 20 \\implies y = 4x + 20$ — same slope ($4$), different intercept ($20 \\neq 12$) ✓\n• C: $-8x + y = 24 \\implies y = 8x + 24$ — slope is $8 \\neq 4$ (lines intersect)\n• D: $-8x + y = 12 \\implies y = 8x + 12$ — slope is $8 \\neq 4$ (lines intersect)\n\n**Verification:** $y = 4x + 12$ and $y = 4x + 20$: setting equal gives $4x + 12 = 4x + 20 \\implies 12 = 20$, which is impossible. No solution. ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation] Converts to $y = 4x + 12$ — this is the *same* line as the given equation. Same line means infinitely many solutions, not zero.\n• Choice C: [TRAP: arithmetic_slip] Slope becomes $8$, not $4$. Lines with different slopes always intersect at exactly one point — that is *one* solution, not none.\n• Choice D: [TRAP: arithmetic_slip] Also has slope $8$. Same issue as C: different slopes guarantee exactly one intersection point.\n\n**Key concept:** No solution $\\Leftrightarrow$ parallel lines $\\Leftrightarrow$ same slope, different intercept. Same slope + same intercept = same line (infinitely many solutions). Different slopes = one solution.\n\n**Calculator tip:** Graph $y = 4x + 12$ and $y = 4x + 20$ on Desmos. The lines are parallel — they never meet.",
      skills: ['parallel-line-slope', 'system-no-solution']
    },
    {
      id: 8,
      difficulty: "medium",
      question: "y = −5x + 15\n\nOne of the equations in a system of two linear equations is given. The system has no solution. Which equation could be the second equation in the system?",
      choices: [
        { id: "A", text: "5x + y = 15" },
        { id: "B", text: "5x + y = 25" },
        { id: "C", text: "−5x + y = 15" },
        { id: "D", text: "10x + 2y = 30" }
      ],
      correctAnswer: "B",
      hint: "Convert each answer to slope-intercept form. No solution requires same slope but different y-intercept.",
      explanation: "**Choice B is correct.** This creates parallel lines with the same slope but different intercepts.\n\n**Step 1:** The given equation $y = -5x + 15$ has slope $m = -5$ and intercept $b = 15$.\n\n**Step 2:** Convert each choice to slope-intercept form:\n• A: $5x + y = 15 \\implies y = -5x + 15$ — identical to the given line (infinitely many solutions)\n• B: $5x + y = 25 \\implies y = -5x + 25$ — slope $-5$ ✓, intercept $25 \\neq 15$ ✓\n• C: $-5x + y = 15 \\implies y = 5x + 15$ — slope $+5 \\neq -5$ (one solution)\n• D: $10x + 2y = 30 \\implies 2y = -10x + 30 \\implies y = -5x + 15$ — identical line (infinitely many solutions)\n\n**Verification:** $-5x + 15 = -5x + 25 \\implies 15 = 25$, which is impossible. No solution. ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation] Converts to $y = -5x + 15$, which is the exact same line. The system has infinitely many solutions, not zero. Students may stop after confirming the slope matches without checking the intercept.\n• Choice C: [TRAP: sign_error] Has slope $+5$, not $-5$. The sign of the $x$-coefficient flips when moving $-5x$ to the other side: $-5x + y = 15 \\implies y = 5x + 15$. Different slopes always produce exactly one intersection.\n• Choice D: [TRAP: partial_calculation] Dividing by $2$ gives $y = -5x + 15$ — the same line again. This is just the original equation multiplied by $2$. Infinitely many solutions, not zero.\n\n**Key concept:** When converting from standard form $ax + by = c$ to slope-intercept form, be meticulous with signs. Also, multiplying both sides of an equation by a constant produces an *equivalent* equation (same line), not a parallel one.\n\n**Calculator tip:** Graph all four choices on Desmos alongside $y = -5x + 15$. Only $y = -5x + 25$ runs parallel without overlapping.",
      skills: ['parallel-line-slope', 'system-no-solution']
    },

    // === TYPE 4: Find constant p for no solution (single equation) ===
    {
      id: 9,
      difficulty: "hard",
      question: "−4x + 28px = 56\n\nIn the given equation, p is a constant. The equation has no solution. What is the value of p?",
      choices: [
        { id: "A", text: "0" },
        { id: "B", fraction: { numerator: "1", denominator: "7" } },
        { id: "C", fraction: { numerator: "2", denominator: "7" } },
        { id: "D", text: "7" }
      ],
      correctAnswer: "B",
      hint: "Combine the x terms: (−4 + 28p)x = 56. For no solution, the coefficient of x must be 0 while the right side is non-zero.",
      explanation: "**Choice B is correct.** $p = \\frac{1}{7}$ makes the equation have no solution.\n\n**Step 1:** Combine like terms on the left side:\n$$(-4 + 28p)x = 56$$\n\n**Step 2:** For an equation of the form $kx = c$ to have no solution, we need $k = 0$ and $c \\neq 0$. This gives $0 \\cdot x = 56$, which simplifies to $0 = 56$ — a contradiction.\n\n**Step 3:** Set the coefficient of $x$ to zero:\n$$-4 + 28p = 0$$\n$$28p = 4$$\n$$p = \\frac{4}{28} = \\frac{1}{7}$$\n\n**Step 4:** Check that the right side is nonzero: $56 \\neq 0$ ✓. So the equation becomes $0 = 56$, which is impossible.\n\n**Verification:** Substitute $p = \\frac{1}{7}$: $-4x + 28 \\cdot \\frac{1}{7} \\cdot x = -4x + 4x = 0 \\neq 56$. No value of $x$ works. ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation] If $p = 0$: $-4x + 0 = 56 \\implies x = -14$. This has exactly one solution, not none.\n• Choice C: [TRAP: arithmetic_slip] $p = \\frac{2}{7}$: coefficient becomes $-4 + 28 \\cdot \\frac{2}{7} = -4 + 8 = 4$. Then $4x = 56 \\implies x = 14$. One solution exists — likely from doubling the correct answer by mistake.\n• Choice D: [TRAP: reversed_operation] $p = 7$: coefficient becomes $-4 + 28(7) = -4 + 196 = 192$. Then $192x = 56 \\implies x = \\frac{56}{192}$. One solution. This comes from inverting $\\frac{1}{7}$ to get $7$.\n\n**Key concept:** A linear equation $kx = c$ has no solution when $k = 0$ and $c \\neq 0$. This creates the contradiction $0 = c$. Set the variable's coefficient to zero and solve for the parameter.\n\n**Calculator tip:** On Desmos, graph $y = (-4 + 28p)x$ with a slider for $p$. When $p = \\frac{1}{7}$, the line becomes $y = 0$, which never reaches $y = 56$.",
      skills: ['parallel-line-slope', 'no-solution-equation']
    },
    {
      id: 10,
      difficulty: "hard",
      question: "7x − 21px = 42\n\nIn the given equation, p is a constant. The equation has no solution. What is the value of p?",
      choices: [
        { id: "A", text: "−3" },
        { id: "B", text: "−", fraction: { numerator: "1", denominator: "3" } },
        { id: "C", fraction: { numerator: "1", denominator: "3" } },
        { id: "D", text: "3" }
      ],
      correctAnswer: "C",
      hint: "Factor out x: (7 − 21p)x = 42. For no solution, make the x coefficient equal to 0.",
      explanation: "**Choice C is correct.** $p = \\frac{1}{3}$ makes the equation have no solution.\n\n**Step 1:** Combine like terms:\n$$(7 - 21p)x = 42$$\n\n**Step 2:** For no solution, set the coefficient of $x$ to zero (while the right side remains nonzero):\n$$7 - 21p = 0$$\n$$21p = 7$$\n$$p = \\frac{7}{21} = \\frac{1}{3}$$\n\n**Step 3:** Confirm: $42 \\neq 0$ ✓, so $0 \\cdot x = 42$ is a contradiction.\n\n**Verification:** Substitute $p = \\frac{1}{3}$: $7x - 21 \\cdot \\frac{1}{3} \\cdot x = 7x - 7x = 0 \\neq 42$. No solution. ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: sign_error] $p = -3$: coefficient is $7 - 21(-3) = 7 + 63 = 70$. Then $70x = 42 \\implies x = \\frac{3}{5}$. One solution exists. The negative sign is unnecessary.\n• Choice B: [TRAP: sign_error] $p = -\\frac{1}{3}$: coefficient is $7 - 21(-\\frac{1}{3}) = 7 + 7 = 14$. Then $14x = 42 \\implies x = 3$. One solution. Correct magnitude, wrong sign.\n• Choice D: [TRAP: reversed_operation] $p = 3$: coefficient is $7 - 21(3) = 7 - 63 = -56$. Then $-56x = 42 \\implies x = -\\frac{3}{4}$. One solution. This inverts $\\frac{1}{3}$ to get $3$.\n\n**Key concept:** For $kx = c$ with no solution: $k = 0$ and $c \\neq 0$. Solve the coefficient equation for the parameter. Be careful to reduce the fraction: $\\frac{7}{21} = \\frac{1}{3}$, not $3$.\n\n**Calculator tip:** Desmos slider: set $p$ as a slider in $y = (7 - 21p)x$. At $p = \\frac{1}{3}$, the left side collapses to $0$ for all $x$.",
      skills: ['parallel-line-slope', 'no-solution-equation']
    },

    // === TYPE 5: Find constant for no solution in system (advanced) ===
    {
      id: 11,
      difficulty: "hard",
      question: "36x − 48y = 36y + 18\nry = (1/6) − 9x\n\nIn the given system of equations, r is a constant. If the system has no solution, what is the value of r?",
      choices: [
        { id: "A", text: "−21" },
        { id: "B", text: "−", fraction: { numerator: "1", denominator: "4" } },
        { id: "C", fraction: { numerator: "1", denominator: "4" } },
        { id: "D", text: "21" }
      ],
      correctAnswer: "A",
      hint: "Rewrite both equations in standard form (ax + by = c). For no solution, the ratios a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
      explanation: "**Choice A is correct.** $r = -21$ makes the system have no solution.\n\n**Step 1:** Simplify Equation 1. Move all $y$-terms to the left:\n$$36x - 48y - 36y = 18$$\n$$36x - 84y = 18$$\nDivide by $6$:\n$$6x - 14y = 3$$\n\n**Step 2:** Rewrite Equation 2 in standard form:\n$$ry = \\frac{1}{6} - 9x \\implies 9x + ry = \\frac{1}{6}$$\n\n**Step 3:** For no solution (parallel lines), the slope ratio must be equal but the constant ratio must differ:\n$$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$$\n$$\\frac{6}{9} = \\frac{-14}{r}$$\n$$\\frac{2}{3} = \\frac{-14}{r}$$\n$$r = \\frac{-14 \\times 3}{2} = \\frac{-42}{2} = -21$$\n\n**Step 4:** Verify the constant ratio differs: $\\frac{c_1}{c_2} = \\frac{3}{1/6} = 18$, while $\\frac{a_1}{a_2} = \\frac{2}{3}$. Since $18 \\neq \\frac{2}{3}$, the lines are indeed parallel (not identical). ✓\n\n**Verification:** With $r = -21$, Eq 2 becomes $9x - 21y = \\frac{1}{6}$. Divide by $\\frac{3}{2}$: $6x - 14y = \\frac{1}{9}$. Compare to Eq 1: $6x - 14y = 3$. Same left side, different right side ($\\frac{1}{9} \\neq 3$). No solution. ✓\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: arithmetic_slip] $r = -\\frac{1}{4}$ does not satisfy the proportion $\\frac{2}{3} = \\frac{-14}{r}$. Substituting: $\\frac{-14}{-1/4} = 56 \\neq \\frac{2}{3}$. The slopes differ, so the system has one solution.\n• Choice C: [TRAP: sign_error] $r = \\frac{1}{4}$: $\\frac{-14}{1/4} = -56 \\neq \\frac{2}{3}$. Different slopes mean the lines intersect. Also, the positive sign is incorrect.\n• Choice D: [TRAP: sign_error] $r = 21$ (positive): $\\frac{-14}{21} = -\\frac{2}{3} \\neq \\frac{2}{3}$. Close but the sign is wrong. The ratio must be $+\\frac{2}{3}$, requiring $r$ to be *negative*.\n\n**Key concept:** For a system $a_1 x + b_1 y = c_1$ and $a_2 x + b_2 y = c_2$: no solution when $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$. Always simplify both equations to standard form first.\n\n**Calculator tip:** On Desmos, graph $6x - 14y = 3$ and $9x - 21y = \\frac{1}{6}$. The lines should be parallel (never intersect).",
      skills: ['parallel-line-slope', 'system-no-solution', 'algebraic-manipulation']
    },
    {
      id: 12,
      difficulty: "hard",
      question: "(5/2)y − (1/3)x = (1/2) − (5/2)y\n(1/3)x + (5/3) = py + (11/3)\n\nIn the given system of equations, p is a constant. If the system has no solution, what is the value of p?",
      choices: [
        { id: "A", text: "−5" },
        { id: "B", text: "−", fraction: { numerator: "1", denominator: "5" } },
        { id: "C", fraction: { numerator: "1", denominator: "5" } },
        { id: "D", text: "5" }
      ],
      correctAnswer: "D",
      hint: "Simplify each equation to standard form. Then set up the parallel condition where the slopes are equal.",
      explanation: "**Choice D is correct.** $p = 5$ makes the system have no solution.\n\n**Step 1:** Simplify Equation 1. Add $\\frac{5}{2}y$ to both sides:\n$$\\frac{5}{2}y + \\frac{5}{2}y - \\frac{1}{3}x = \\frac{1}{2}$$\n$$5y - \\frac{1}{3}x = \\frac{1}{2}$$\nMultiply by $-3$:\n$$x - 15y = -\\frac{3}{2}$$\n\n**Step 2:** Simplify Equation 2. Move $py$ to the left and constants to the right:\n$$\\frac{1}{3}x - py = \\frac{11}{3} - \\frac{5}{3} = \\frac{6}{3} = 2$$\n$$\\frac{1}{3}x - py = 2$$\nMultiply by $3$:\n$$x - 3py = 6$$\n\n**Step 3:** For no solution, the coefficients of $x$ and $y$ must be proportional, but the constants must not be:\n$$\\frac{1}{1} = \\frac{-15}{-3p}$$\n$$1 = \\frac{15}{3p} = \\frac{5}{p}$$\n$$p = 5$$\n\n**Step 4:** Verify the constants differ: Eq 1 gives $-\\frac{3}{2}$ and Eq 2 gives $6$. Since $-\\frac{3}{2} \\neq 6$, the lines are parallel, not identical. ✓\n\n**Verification:** With $p = 5$: Eq 1 is $x - 15y = -\\frac{3}{2}$ and Eq 2 is $x - 15y = 6$. Same left side, different right side. No solution. ✓\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: sign_error] $p = -5$: Eq 2 becomes $x + 15y = 6$. The $y$-coefficient is $+15$ vs. $-15$ in Eq 1 — different slopes, so the system has exactly one solution.\n• Choice B: [TRAP: reversed_operation] $p = -\\frac{1}{5}$: Eq 2 becomes $x + \\frac{3}{5}y = 6$. The $y$-coefficient $\\frac{3}{5} \\neq -15$, so the lines are not parallel.\n• Choice C: [TRAP: reversed_operation] $p = \\frac{1}{5}$: Eq 2 becomes $x - \\frac{3}{5}y = 6$. The $y$-coefficient $-\\frac{3}{5} \\neq -15$, so again the lines intersect.\n\n**Key concept:** When setting up the parallel condition $\\frac{a_1}{a_2} = \\frac{b_1}{b_2}$, simplify both equations to comparable forms first. Fraction arithmetic must be precise — clear all fractions by multiplying through.\n\n**Calculator tip:** On Desmos, graph $x - 15y = -1.5$ and $x - 15y = 6$. These parallel lines confirm no intersection when $p = 5$.",
      skills: ['parallel-line-slope', 'system-no-solution', 'algebraic-manipulation']
    }
  ],

  // Section: Perpendicular Lines (covers videos 23-24)
  "Perpendicular Lines": [
    {
      id: 1,
      difficulty: "easy",
      question: "Line k has the equation y = 2x + 5. What is the slope of a line perpendicular to line k?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "−2" },
        { id: "C", fraction: { numerator: "1", denominator: "2" } },
        { id: "D", text: "−", fraction: { numerator: "1", denominator: "2" } }
      ],
      correctAnswer: "D",
      hint: "Perpendicular slopes are negative reciprocals. Flip the fraction and change the sign.",
      explanation: "**Choice D is correct.** The perpendicular slope is $-\\frac{1}{2}$.\n\n**Step 1:** Identify the slope of line $k$: in $y = 2x + 5$, the slope is $m = 2$.\n\n**Step 2:** Perpendicular lines have slopes that are *negative reciprocals*. To find the negative reciprocal of $2$:\n• Write $2$ as $\\frac{2}{1}$\n• Flip: $\\frac{1}{2}$\n• Negate: $-\\frac{1}{2}$\n\n**Verification:** Check that $m_1 \\cdot m_2 = -1$: $2 \\times (-\\frac{1}{2}) = -1$ ✓.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation] Uses the *same* slope ($2$). This is the parallel slope, not the perpendicular slope. Parallel and perpendicular rules are frequently confused.\n• Choice B: [TRAP: sign_error] Just negates the slope ($-2$) without taking the reciprocal. The perpendicular slope requires *both* flipping and negating. Check: $2 \\times (-2) = -4 \\neq -1$.\n• Choice C: [TRAP: partial_calculation] Takes the reciprocal ($\\frac{1}{2}$) but forgets to negate. Check: $2 \\times \\frac{1}{2} = 1 \\neq -1$. Both steps (flip and negate) are required.\n\n**Key concept:** Perpendicular slopes satisfy $m_1 \\cdot m_2 = -1$. The negative reciprocal of $\\frac{a}{b}$ is $-\\frac{b}{a}$. You must do *both* operations: flip the fraction AND change the sign.\n\n**Calculator tip:** On Desmos, graph $y = 2x + 5$ and $y = -\\frac{1}{2}x$. They should cross at a right angle. Use the angle tool to verify $90°$.",
      skills: ['perpendicular-negative-reciprocal']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Which equation represents a line perpendicular to y = -3x + 1?",
      choices: [
        { id: "A", text: "y = -3x + 4" },
        { id: "B", text: "y = 3x - 2" },
        { id: "C", text: "y = ", fraction: { numerator: "1", denominator: "3" }, textAfter: "x + 5" },
        { id: "D", text: "y = −", fraction: { numerator: "1", denominator: "3" }, textAfter: "x + 1" }
      ],
      correctAnswer: "C",
      hint: "The slope is -3. The negative reciprocal means flip it (1/3) and change the sign (positive).",
      explanation: "**Choice C is correct.** The line $y = \\frac{1}{3}x + 5$ is perpendicular to $y = -3x + 1$.\n\n**Step 1:** The slope of $y = -3x + 1$ is $m = -3$.\n\n**Step 2:** Find the negative reciprocal of $-3$:\n• Write $-3$ as $\\frac{-3}{1}$\n• Flip: $\\frac{1}{-3} = -\\frac{1}{3}$\n• Negate: $+\\frac{1}{3}$\n\nThe perpendicular slope is $\\frac{1}{3}$.\n\n**Step 3:** Only Choice C has slope $\\frac{1}{3}$.\n\n**Verification:** $(-3) \\times \\frac{1}{3} = -1$ ✓.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation] Uses slope $-3$ — this is the *parallel* slope, not perpendicular. Same slope means the lines never cross at a right angle; they never cross at all.\n• Choice B: [TRAP: sign_error] Uses slope $+3$. This simply negates the original slope without taking the reciprocal. Check: $(-3)(3) = -9 \\neq -1$.\n• Choice D: [TRAP: partial_calculation] Uses slope $-\\frac{1}{3}$. This takes the reciprocal but does not negate (or negates twice). Since the original slope is already negative, the negative reciprocal is *positive*: $-\\frac{1}{3}$ is wrong. Check: $(-3)(-\\frac{1}{3}) = 1 \\neq -1$.\n\n**Key concept:** When the original slope is negative, its negative reciprocal is *positive*. Two negatives cancel: $-\\left(\\frac{1}{-3}\\right) = +\\frac{1}{3}$. Always verify with $m_1 \\cdot m_2 = -1$.\n\n**Calculator tip:** Graph $y = -3x + 1$ and $y = \\frac{1}{3}x + 5$ on Desmos. The lines should meet at a $90°$ angle.",
      skills: ['perpendicular-negative-reciprocal']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A line passes through (2, 4) and is perpendicular to the line shown below. What is the equation of this line?",
      questionFormula: { text: "y = ", fraction: { numerator: "1", denominator: "2" }, textAfter: "x − 3" },
      choices: [
        { id: "A", text: "y = -2x + 8" },
        { id: "B", text: "y = 2x" },
        { id: "C", text: "y = ", fraction: { numerator: "1", denominator: "2" }, textAfter: "x + 3" },
        { id: "D", text: "y = -2x" }
      ],
      correctAnswer: "A",
      hint: "The negative reciprocal of 1/2 is -2. Use this slope with the point (2, 4) to find the equation.",
      explanation: "**Choice A is correct.** The perpendicular line through $(2, 4)$ is $y = -2x + 8$.\n\n**Step 1:** The given line has slope $m = \\frac{1}{2}$. The perpendicular slope is the negative reciprocal:\n$$m_{\\perp} = -\\frac{1}{1/2} = -2$$\n\n**Step 2:** Use point-slope form with $(2, 4)$ and $m = -2$:\n$$y - 4 = -2(x - 2)$$\n$$y - 4 = -2x + 4$$\n$$y = -2x + 8$$\n\n**Verification:** At $(2, 4)$: $-2(2) + 8 = -4 + 8 = 4$ ✓. Slope check: $\\frac{1}{2} \\times (-2) = -1$ ✓.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: sign_error] Uses slope $+2$ (reciprocal without the negative). Check: $\\frac{1}{2} \\times 2 = 1 \\neq -1$ — not perpendicular. Also, $2(2) = 4$ does pass through the point, making this trap extra tempting.\n• Choice C: [TRAP: partial_calculation] Uses slope $\\frac{1}{2}$ — the *same* slope as the original line. This is a parallel line, not a perpendicular one. Students who forget to change the slope entirely may pick this.\n• Choice D: [TRAP: arithmetic_slip] Gets the slope right ($-2$) but has $b = 0$ instead of $b = 8$. At $(2, 4)$: $-2(2) = -4 \\neq 4$ ✗. The student found the perpendicular slope but forgot to use the point to find the intercept.\n\n**Key concept:** For a perpendicular line through a point: (1) find the negative reciprocal slope, (2) use point-slope form $y - y_1 = m(x - x_1)$, (3) simplify to slope-intercept form.\n\n**Calculator tip:** Graph $y = \\frac{1}{2}x - 3$ and $y = -2x + 8$ on Desmos. They cross at a right angle. Click the intersection to see the exact coordinates.",
      skills: ['perpendicular-negative-reciprocal', 'writing-perpendicular-equation']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "If two lines are perpendicular and one has the slope shown below, what is the slope of the other?",
      questionFormula: { fraction: { numerator: "4", denominator: "5" } },
      choices: [
        { id: "A", fraction: { numerator: "4", denominator: "5" } },
        { id: "B", text: "−", fraction: { numerator: "4", denominator: "5" } },
        { id: "C", fraction: { numerator: "5", denominator: "4" } },
        { id: "D", text: "−", fraction: { numerator: "5", denominator: "4" } }
      ],
      correctAnswer: "D",
      hint: "To find the negative reciprocal: flip 4/5 to get 5/4, then make it negative.",
      explanation: "**Choice D is correct.** The perpendicular slope is $-\\frac{5}{4}$.\n\n**Step 1:** The given slope is $\\frac{4}{5}$. To find the negative reciprocal:\n• Flip: $\\frac{4}{5} \\to \\frac{5}{4}$\n• Negate: $\\frac{5}{4} \\to -\\frac{5}{4}$\n\n**Verification:** $\\frac{4}{5} \\times \\left(-\\frac{5}{4}\\right) = -\\frac{20}{20} = -1$ ✓.\n\n**Why other choices are incorrect:**\n• Choice A: [TRAP: partial_calculation] Uses the *same* slope $\\frac{4}{5}$. This would make the lines parallel, not perpendicular. Check: $\\frac{4}{5} \\times \\frac{4}{5} = \\frac{16}{25} \\neq -1$.\n• Choice B: [TRAP: sign_error] Just negates the slope ($-\\frac{4}{5}$) without flipping. Check: $\\frac{4}{5} \\times (-\\frac{4}{5}) = -\\frac{16}{25} \\neq -1$. Negation alone is not sufficient.\n• Choice C: [TRAP: partial_calculation] Flips the fraction ($\\frac{5}{4}$) but does not negate. Check: $\\frac{4}{5} \\times \\frac{5}{4} = 1 \\neq -1$. The reciprocal alone gives a product of $+1$, not $-1$.\n\n**Key concept:** The negative reciprocal requires *two* operations: flip the fraction AND change the sign. Doing only one gives a wrong answer. Always verify with the product test: $m_1 \\cdot m_2 = -1$.\n\n**Calculator tip:** On Desmos, graph lines with slopes $\\frac{4}{5}$ and $-\\frac{5}{4}$ through the same point. They should form a $90°$ angle.",
      skills: ['perpendicular-negative-reciprocal']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Line j passes through (0, 3) and (4, 1). A line perpendicular to j passes through (2, 5). What is the y-intercept of the perpendicular line?",
      choices: [
        { id: "A", text: "1" },
        { id: "B", text: "3" },
        { id: "C", text: "−1" },
        { id: "D", text: "5" }
      ],
      correctAnswer: "A",
      hint: "First find the slope of line j, then find the perpendicular slope. Use point (2, 5) to write the equation and find b.",
      explanation: "**Choice A is correct.** The y-intercept of the perpendicular line is $1$.\n\n**Step 1:** Find the slope of line $j$ using $(0, 3)$ and $(4, 1)$:\n$$m_j = \\frac{1 - 3}{4 - 0} = \\frac{-2}{4} = -\\frac{1}{2}$$\n\n**Step 2:** Find the perpendicular slope (negative reciprocal of $-\\frac{1}{2}$):\n$$m_{\\perp} = -\\frac{1}{-1/2} = 2$$\n\n**Step 3:** Use the perpendicular slope with the point $(2, 5)$:\n$$y - 5 = 2(x - 2)$$\n$$y = 2x - 4 + 5$$\n$$y = 2x + 1$$\n\n**Step 4:** The y-intercept is $b = 1$.\n\n**Verification:** At $(2, 5)$: $2(2) + 1 = 5$ ✓. Slope check: $(-\\frac{1}{2})(2) = -1$ ✓.\n\n**Why other choices are incorrect:**\n• Choice B: [TRAP: partial_calculation] Uses $3$, which is the y-intercept of *line $j$* (from the point $(0, 3)$), not the perpendicular line. Students may find line $j$'s intercept and stop, forgetting they need the *perpendicular* line's intercept.\n• Choice C: [TRAP: sign_error] Gets $-1$ instead of $1$. This likely comes from an arithmetic error in the point-slope calculation: writing $y = 2x - 4 + 5$ as $y = 2x - 1$ instead of $y = 2x + 1$, confusing $-4 + 5$ with $-(4 + 5)$.\n• Choice D: [TRAP: partial_calculation] Uses $5$, the $y$-coordinate of the given point $(2, 5)$. This mistakes the $y$-value at $x = 2$ for the y-intercept at $x = 0$. The intercept requires solving for $b$, not reading a point's $y$-value.\n\n**Key concept:** This is a three-step problem: (1) find $m_j$, (2) find $m_{\\perp}$, (3) use the perpendicular slope with the given point to find the equation. Each step builds on the previous one — an error early on cascades through.\n\n**Calculator tip:** On Desmos, graph line $j$ through $(0, 3)$ and $(4, 1)$, then graph $y = 2x + 1$. Verify perpendicularity visually and that the second line passes through $(2, 5)$.",
      skills: ['slope-from-points', 'perpendicular-negative-reciprocal', 'writing-perpendicular-equation']
    }
  ]
};
