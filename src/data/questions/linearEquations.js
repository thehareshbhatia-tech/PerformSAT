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
      question: "A phone plan charges a flat fee of \\$25 per month plus \\$0.10 per text message. Which equation represents the total monthly cost C in terms of the number of text messages t?",
      choices: [
        { id: "A", text: "$C = 0.10 + 25t$" },
        { id: "B", text: "$C = 25 + 0.10t$" },
        { id: "C", text: "$C = 25t + 0.10$" },
        { id: "D", text: "$C = 10 + 25t$" }
      ],
      correctAnswer: "B",
      hint: "Think about what stays the same each month (the flat fee) and what changes based on usage (the per-text charge).",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** A fee that stays put is the constant; a per-text charge multiplies $t$. So $C = 25 + 0.10t$ — that's choice B.\n\n**The Full Solution:**\nStep 1: The flat fee is $\\$25$ every month no matter how many texts you send, so it is the constant term: $b = 25$.\nStep 2: The $\\$0.10$ per text is the rate, so it multiplies the count $t$: the slope is $0.10$.\nStep 3: In $y = mx + b$ form, $C = 25 + 0.10t$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($C = 0.10 + 25t$): swaps the roles, treating $\\$0.10$ as the fixed fee and $\\$25$ as the per-text rate.\n* Choice C ($C = 25t + 0.10$): makes $25$ the coefficient of $t$, charging $\\$25$ per text.\n* Choice D ($C = 10 + 25t$): misreads $\\$0.10$ as $10$ for the fee and again charges $\\$25$ per text.\n\n**Test Day Takeaway:** The quantity that does not depend on the variable is the constant; the per-unit rate is the coefficient that multiplies the variable.",
      skills: ['word-problem-to-equation', 'slope-intercept-form']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "The relationship between two variables, x and y, is linear. For every increase in the value of x by 1, the value of y increases by 8. When the value of x is 2, the value of y is 18. Which equation represents this relationship?",
      choices: [
        { id: "A", text: "$y = 2x + 18$" },
        { id: "B", text: "$y = 2x + 8$" },
        { id: "C", text: "$y = 8x + 2$" },
        { id: "D", text: "$y = 3x + 26$" }
      ],
      correctAnswer: "C",
      hint: "The rate of change (slope) is how much y changes when x changes by 1. Use the given point (2, 18) to find the y-intercept.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** \"Increases by $8$ for each $+1$ in $x$\" means slope $8$, killing A and B. Plug $(2,18)$ into $y=8x+b$: $18=16+b$, so $b=2$, giving $y=8x+2$ — choice C.\n\n**The Full Solution:**\nStep 1: The rate of change is the slope: $m = \\frac{\\Delta y}{\\Delta x} = \\frac{8}{1} = 8$.\nStep 2: Use the point $(2,18)$ in $y = mx + b$: $18 = 8(2) + b = 16 + b$, so $b = 2$.\nStep 3: The equation is $y = 8x + 2$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = 2x + 18$): uses the point's coordinates as the parameters — slope $2$ from the $x$-value, intercept $18$ from the $y$-value.\n* Choice B ($y = 2x + 8$): again takes slope $2$ from the $x$-value but slots $8$ as the intercept.\n* Choice D ($y = 3x + 26$): wrong slope $3$; check $(2,18)$: $3(2)+26 = 32 \\neq 18$.\n\n**Test Day Takeaway:** \"$y$ goes up by $k$ for every $+1$ in $x$\" means the slope is $k$. Then substitute a known point to solve for the intercept.",
      skills: ['word-problem-to-equation', 'slope-intercept-form']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A candle is 12 inches tall and burns at a rate of 0.5 inches per hour. Which equation gives the height h of the candle after t hours?",
      choices: [
        { id: "A", text: "$h = 12 + 0.5t$" },
        { id: "B", text: "$h = 0.5 - 12t$" },
        { id: "C", text: "$h = 12 - 0.5t$" },
        { id: "D", text: "$h = 12t - 0.5$" }
      ],
      correctAnswer: "C",
      hint: "The candle is getting shorter over time (decreasing), so the slope should be negative. Start with the initial height.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~10s):** It starts at $12$ and shrinks, so a decreasing line from $12$: $h = 12 - 0.5t$ — choice C.\n\n**The Full Solution:**\nStep 1: At $t = 0$ the candle is $12$ inches, so the starting value (intercept) is $12$.\nStep 2: It burns down, so height decreases at $0.5$ in/hr: the slope is $-0.5$.\nStep 3: Assemble: $h = 12 - 0.5t$. Check $t = 4$: $h = 12 - 2 = 10$ inches.\n\n**Why the wrong answers are tempting:**\n* Choice A ($h = 12 + 0.5t$): uses $+0.5t$, which makes the candle grow — but \"burns\" means it shrinks.\n* Choice B ($h = 0.5 - 12t$): swaps the roles of $0.5$ and $12$; at $t = 0$ this gives $0.5$, not $12$.\n* Choice D ($h = 12t - 0.5$): makes $12$ the rate, so the candle grows $12$ inches per hour.\n\n**Test Day Takeaway:** A quantity that decreases at a constant rate has a negative slope: $y = (\\text{start}) - (\\text{rate})t$.",
      skills: ['word-problem-to-equation', 'slope-intercept-form']
    },
    {
      id: 4,
      difficulty: "medium",
      question: "The relationship between two variables, x and y, is linear. For every increase in x by 1, y decreases by 5. When x is 4, y is 3. Which equation represents this relationship?",
      choices: [
        { id: "A", text: "$y = -5x + 23$" },
        { id: "B", text: "$y = 5x - 17$" },
        { id: "C", text: "$y = -5x - 17$" },
        { id: "D", text: "$y = 5x + 23$" }
      ],
      correctAnswer: "A",
      hint: "A decrease means negative slope. Use the point (4, 3) with slope −5 to find the y-intercept.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** \"Decreases by $5$\" means slope $-5$, eliminating B and D. Plug $(4,3)$ into $y = -5x + b$: $3 = -20 + b$, so $b = 23$, giving $y = -5x + 23$ — choice A.\n\n**The Full Solution:**\nStep 1: $y$ decreases by $5$ for each $+1$ in $x$, so the slope is $m = -5$.\nStep 2: Use $(4,3)$ in $y = mx + b$: $3 = -5(4) + b = -20 + b$, so $b = 23$.\nStep 3: The equation is $y = -5x + 23$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = 5x - 17$): drops the negative sign on the slope; $+5$ contradicts \"decreases.\"\n* Choice C ($y = -5x - 17$): right slope, but the intercept is sign-flipped — subtracting instead of adding gives the false $b = 3 - 20 = -17$ instead of $b = 23$.\n* Choice D ($y = 5x + 23$): both signs wrong; at $x = 4$, $5(4) + 23 = 43 \\neq 3$.\n\n**Test Day Takeaway:** \"$y$ decreases by $k$\" forces the slope to be $-k$. Lock in the sign before solving for the intercept.",
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
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Over $2$ minutes at $15$ gal/min, $2 \\times 15 = 30$ gallons drain. The equation keeps the per-minute rate and subtracts because the tank empties: $W = 500 - 15m$ — choice A.\n\n**The Full Solution:**\nStep 1: Change over a $2$-minute interval: $15 \\times 2 = 30$ gallons.\nStep 2: The tank starts at $500$ gallons and drains at $15$ gal/min, so the slope is negative: $W = 500 - 15m$.\nStep 3: Check $m = 2$: $W = 500 - 15(2) = 470$, a drop of $30$ gallons. Both parts match choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B (decreases by $15$): correct equation, but it reports the per-minute rate ($15$) instead of the $2$-minute change ($30$).\n* Choice C (uses $W = 500 + 15m$): right $30$-gallon change, but $+15m$ means the tank fills, not drains.\n* Choice D (decreases by $7.5$): divides $15 \\div 2 = 7.5$ instead of multiplying by $2$, and uses the wrong rate in the equation.\n\n**Test Day Takeaway:** The equation always uses the unit rate; to get the change over $n$ units, multiply the rate by $n$.",
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
        { id: "A", text: "$y = -2x + 11$" },
        { id: "B", text: "$y = 2x + 7$" },
        { id: "C", text: "$y = -2x - 11$" },
        { id: "D", text: "$y = 2x - 11$" }
      ],
      correctAnswer: "A",
      hint: "The data shows y decreasing as x increases, so the slope should be negative. Estimate the rate of decrease and the y-intercept.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** The data falls as $x$ rises, so the slope is negative — only A and C survive. The line sits near $y = 11$ at $x = 0$, so the intercept is positive: $y = -2x + 11$ — choice A.\n\n**The Full Solution:**\nStep 1: Take two points, $(1,9)$ and $(4,3)$: $m = \\frac{3 - 9}{4 - 1} = \\frac{-6}{3} = -2$.\nStep 2: Use $(1,9)$ in $y = -2x + b$: $9 = -2 + b$, so $b = 11$.\nStep 3: The equation is $y = -2x + 11$, which fits every plotted point.\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = 2x + 7$): positive slope $+2$ would trend upward, but the data clearly falls.\n* Choice C ($y = -2x - 11$): right slope, but a negative intercept; at $x = 1$, $-2 - 11 = -13 \\neq 9$.\n* Choice D ($y = 2x - 11$): both signs wrong; the line would rise from deep negatives, matching no point.\n\n**Test Day Takeaway:** For a scatterplot model, first fix the slope's sign from the trend direction, then read the intercept's sign — that usually kills three choices at once.",
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
        { id: "A", text: "$y = -1.9x - 10.1$" },
        { id: "B", text: "$y = -1.9x + 10.1$" },
        { id: "C", text: "$y = 1.9x - 10.1$" },
        { id: "D", text: "$y = 1.9x + 10.1$" }
      ],
      correctAnswer: "B",
      hint: "The data shows a downward trend (negative slope) and starts near $y = 10$ when $x = 0$ (positive y-intercept).",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** The trend falls, so the slope is negative (kills C and D). The data starts near $y = 10$ at $x = 0$, so the intercept is positive: $y = -1.9x + 10.1$ — choice B.\n\n**The Full Solution:**\nStep 1: As $x$ rises from $0$ to $4$, $y$ drops from about $10$ to about $2$, so the slope is negative — eliminate the positive-slope choices C and D.\nStep 2: Estimate the slope from the endpoints: $m = \\frac{2 - 10}{4 - 0} = \\frac{-8}{4} = -2$, close to the regression value $-1.9$.\nStep 3: At $x = 0$ the data is near $y = 10$, so the intercept is positive ($\\approx 10.1$), not negative. That picks B over A.\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -1.9x - 10.1$): right slope, but a negative intercept; at $x = 0$ it gives $-10.1$, while the data is near $+10$.\n* Choice C ($y = 1.9x - 10.1$): positive slope trends upward, contradicting the falling data.\n* Choice D ($y = 1.9x + 10.1$): positive slope; at $x = 4$ it predicts $17.7$, far above the actual $\\approx 2$.\n\n**Test Day Takeaway:** Pin the sign of the slope and the sign of the intercept first — for a best-fit line that often eliminates three of the four choices before you compute anything.",
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
        { id: "A", text: "$y = 5x + 55$" },
        { id: "B", text: "$y = 10x + 45$" },
        { id: "C", text: "$y = 5x + 65$" },
        { id: "D", text: "$y = 10x + 55$" }
      ],
      correctAnswer: "A",
      hint: "Find the slope using two points, then check which equation works for all the given points.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** From $(2,65)$ to $(8,95)$ the score climbs $30$ over $6$ hours, so $m = \\frac{30}{6} = 5$. Back-solve the intercept: $65 = 5(2) + b$ gives $b = 55$, so $y = 5x + 55$ — choice A.\n\n**The Full Solution:**\nStep 1: Slope from $(2,65)$ and $(8,95)$: $m = \\frac{95 - 65}{8 - 2} = \\frac{30}{6} = 5$.\nStep 2: Intercept from $(2,65)$: $65 = 5(2) + b = 10 + b$, so $b = 55$.\nStep 3: The equation $y = 5x + 55$ hits every point: $5(4)+55 = 75$, $5(6)+55 = 85$, $5(8)+55 = 95$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = 10x + 45$): uses slope $10$ — the $y$-rise without dividing by the $x$-run; fails $(4,75)$: $10(4)+45 = 85$.\n* Choice C ($y = 5x + 65$): right slope, but takes $b = 65$ straight from $(2,65)$, forgetting to subtract $5(2)$; check: $5(2)+65 = 75 \\neq 65$.\n* Choice D ($y = 10x + 55$): combines the bad slope $10$ with $55$; fails $(2,65)$: $10(2)+55 = 75$.\n\n**Test Day Takeaway:** Compute the slope as rise over run, then back-solve the intercept with one point — and confirm against a second point so a near-miss can't fool you.",
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
        { id: "A", text: "$y = 3x + 4$" },
        { id: "B", text: "$y = 4x + 3$" },
        { id: "C", text: "$y = 2x + 4$" },
        { id: "D", text: "$y = 3x + 10$" }
      ],
      correctAnswer: "A",
      hint: "Use the slope formula: m = (y₂ − y₁)/(x₂ − x₁). The point where the line crosses the y-axis tells you the y-intercept directly.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** The line crosses the $y$-axis at $4$, so $b = 4$. Rising $6$ over a run of $2$ gives slope $3$: $y = 3x + 4$ — choice A.\n\n**The Full Solution:**\nStep 1: Read the intercept directly: the line passes through $(0,4)$, so $b = 4$.\nStep 2: Slope from $(0,4)$ to $(2,10)$: $m = \\frac{10 - 4}{2 - 0} = \\frac{6}{2} = 3$.\nStep 3: The equation is $y = 3x + 4$; check $(2,10)$: $3(2)+4 = 10$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = 4x + 3$): swaps slope and intercept, using $m = 4$, $b = 3$.\n* Choice C ($y = 2x + 4$): wrong slope $2$; at $x = 2$, $2(2)+4 = 8 \\neq 10$.\n* Choice D ($y = 3x + 10$): right slope, but uses $10$ (the $y$ at $x = 2$) as the intercept instead of the value at $x = 0$.\n\n**Test Day Takeaway:** The $y$-intercept is the $y$-value at $x = 0$ — when the graph crosses the axis at a grid point, read $b$ directly and only compute the slope.",
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
        { id: "A", text: "$y = 8x + 12$" },
        { id: "B", text: "$8x + 12y = 480$" },
        { id: "C", text: "$y = 12x + 8$" },
        { id: "D", text: "$12x + 8y = 480$" }
      ],
      correctAnswer: "D",
      hint: "Use the intercepts to find the equation. When $x = 0$, $y = 40$. When $y = 0$, $x = 60$. Which equation satisfies both?",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** Read the intercepts: the line hits $(40,0)$ and $(0,60)$. Test choice D: $12(40)+8(0) = 480$ and $12(0)+8(60) = 480$. Both hold, so $12x + 8y = 480$ — choice D.\n\n**The Full Solution:**\nStep 1: A budget line slopes downward, so $y$ falls as $x$ rises — eliminate the positive-slope choices A and C.\nStep 2: From the graph the line passes through $(40,0)$ and $(0,60)$.\nStep 3: Plug both into the standard-form candidates. Choice D, $12x + 8y = 480$: $(40,0) \\Rightarrow 480$ and $(0,60) \\Rightarrow 480$. Both satisfy it, so D is the relationship.\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = 8x + 12$): positive slope; a budget constraint must decrease as $x$ grows.\n* Choice B ($8x + 12y = 480$): a downward line, but its intercepts are $(60,0)$ and $(0,40)$ — at $(40,0)$ it gives $320 \\neq 480$, so it misses the graphed points.\n* Choice C ($y = 12x + 8$): positive slope again; at $x = 0$ it gives $8$, not $60$.\n\n**Test Day Takeaway:** For a line through two axis intercepts, just substitute both intercept points into each candidate equation — the one that satisfies both is the answer.",
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
        { id: "A", text: "$y = -2x + 4$" },
        { id: "B", text: "$y = 2x + 12$" },
        { id: "C", text: "$y = -2x - 4$" },
        { id: "D", text: "$y = 2x - 4$" }
      ],
      correctAnswer: "A",
      hint: "Calculate the slope using the two points, then use one point to find the y-intercept.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** The line falls left to right, so the slope is negative — only A and C survive. Find $b$ from $(4,-4)$: $-4 = -2(4) + b$ gives $b = 4$, so $y = -2x + 4$ — choice A.\n\n**The Full Solution:**\nStep 1: Slope from $(-2,8)$ and $(4,-4)$: $m = \\frac{-4 - 8}{4 - (-2)} = \\frac{-12}{6} = -2$.\nStep 2: Intercept from $(4,-4)$: $-4 = -2(4) + b = -8 + b$, so $b = 4$.\nStep 3: The equation is $y = -2x + 4$; check $(-2,8)$: $-2(-2)+4 = 8$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = 2x + 12$): positive slope, but the line clearly descends.\n* Choice C ($y = -2x - 4$): right slope, but uses $-4$ (the $y$ at $x = 4$) as the intercept instead of solving, which gives $b = 4$.\n* Choice D ($y = 2x - 4$): wrong slope sign and wrong intercept; at $(-2,8)$, $2(-2)-4 = -8 \\neq 8$.\n\n**Test Day Takeaway:** With negative coordinates, subtracting a negative adds: $4 - (-2) = 6$ in the run. Watch that sign in the slope formula.",
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
        { id: "A", text: "$f(x) = 3x + 29$" },
        { id: "B", text: "$f(x) = 29x + 32$" },
        { id: "C", text: "$f(x) = 35x + 29$" },
        { id: "D", text: "$f(x) = 32x + 35$" }
      ],
      correctAnswer: "A",
      hint: "Find the slope by seeing how much f(x) changes when x increases by 1. The value when $x = 0$ is your y-intercept.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** The table gives $x = 0 \\to f(x) = 29$, so $b = 29$ directly. From $x = 0$ to $1$, $f$ rises $3$, so the slope is $3$: $f(x) = 3x + 29$ — choice A.\n\n**The Full Solution:**\nStep 1: When $x = 0$, $f(x) = 29$, so the intercept is read straight off: $b = 29$.\nStep 2: Slope from the table: as $x$ goes $0 \\to 1$, $f$ goes $29 \\to 32$, so $m = \\frac{32 - 29}{1 - 0} = 3$.\nStep 3: The equation is $f(x) = 3x + 29$; check $x = 2$: $3(2)+29 = 35$, matching the table.\n\n**Why the wrong answers are tempting:**\n* Choice B ($f(x) = 29x + 32$): uses the output $29$ as the slope and $32$ as the intercept — both are $f(x)$ values, not a rate.\n* Choice C ($f(x) = 35x + 29$): takes $35$ (the value at $x = 2$) as the slope without computing $\\frac{\\Delta f}{\\Delta x}$.\n* Choice D ($f(x) = 32x + 35$): drops two table outputs in as slope and intercept; at $x = 0$ it gives $35 \\neq 29$.\n\n**Test Day Takeaway:** Slope is $\\frac{\\text{change in } f(x)}{\\text{change in } x}$. When the table includes $x = 0$, that row's output is the intercept — no calculation needed.",
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
        { id: "A", text: "$y = 3x + 5$" },
        { id: "B", text: "$y = 6x + 5$" },
        { id: "C", text: "$y = 3x + 11$" },
        { id: "D", text: "$y = 2x + 5$" }
      ],
      correctAnswer: "A",
      hint: "Find how much y changes when x increases by 2. That's your rise. Divide by 2 to get the slope. When $x = 0$, y gives you the y-intercept.",
      explanation: "**Choice A is correct.** The line has slope $3$ and $y$-intercept $5$, giving $y=3x+5$.\n\n**The Fast Way (~20s):** Each step the $x$-values rise by $2$ and the $y$-values rise by $6$, so the slope is $\\frac{6}{2}=3$. At $x=0$, $y=5$, so the equation is $y=3x+5$.\n\n**The Full Solution:**\nStep 1: Find the slope. Across one row, $\\Delta y=6$ for $\\Delta x=2$, so $m=\\frac{\\Delta y}{\\Delta x}=\\frac{6}{2}=3$.\nStep 2: Read the intercept. When $x=0$, $y=5$, so $b=5$.\nStep 3: Combine: $y=3x+5$. Check a far row: $3(6)+5=23$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($y=6x+5$): used the raw $y$-jump of $6$ as the slope without dividing by $\\Delta x=2$.\n* Choice C ($y=3x+11$): right slope, but grabbed the $y$-value at $x=2$ as the intercept instead of the value at $x=0$.\n* Choice D ($y=2x+5$): slipped on the slope division, treating $\\frac{6}{2}$ as $2$.\n\n**Test Day Takeaway:** When table $x$-values jump by more than $1$, the slope is the $y$-change divided by the $x$-change — never the raw $y$-jump.",
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
        { id: "A", text: "$g(x) = 3x + 4$" },
        { id: "B", text: "$g(x) = 6x + 1$" },
        { id: "C", text: "$g(x) = 3x + 7$" },
        { id: "D", text: "$g(x) = 2x + 5$" }
      ],
      correctAnswer: "A",
      hint: "Find the slope from consecutive x-values. Then use any point to find the y-intercept.",
      explanation: "**Choice A is correct.** The slope is $3$ and the $y$-intercept is $4$, giving $g(x)=3x+4$.\n\n**The Fast Way (~20s):** From $(1,7)$ to $(3,13)$ the slope is $\\frac{13-7}{3-1}=3$. Back the line up one step from $(1,7)$ to $x=0$: $7-3=4$, so $b=4$ and $g(x)=3x+4$.\n\n**The Full Solution:**\nStep 1: Slope from two rows: $m=\\frac{13-7}{3-1}=\\frac{6}{2}=3$.\nStep 2: Solve for $b$ with $(1,7)$: $7=3(1)+b\\Rightarrow b=4$.\nStep 3: Combine: $g(x)=3x+4$. Check $(3,13)$: $3(3)+4=13$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($g(x)=6x+1$): used the $y$-jump of $6$ as the slope without dividing by $\\Delta x=2$.\n* Choice C ($g(x)=3x+7$): right slope, but treated the output $7$ at $x=1$ as the $y$-intercept; the intercept is at $x=0$.\n* Choice D ($g(x)=2x+5$): mis-divided the slope as $2$; it fits $x=1$ but fails $x=3$.\n\n**Test Day Takeaway:** When the table skips $x=0$, you cannot read $b$ directly — find the slope first, then solve $y=mx+b$ with any known point.",
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
        { id: "A", text: "$f(x) = -3x + 9$" },
        { id: "B", text: "$f(x) = 3x + 9$" },
        { id: "C", text: "$f(x) = -3x - 9$" },
        { id: "D", text: "$f(x) = 3x - 9$" }
      ],
      correctAnswer: "A",
      hint: "Notice that f(x) is decreasing as x increases, so the slope is negative. Use $x = 0$ to find the y-intercept directly.",
      explanation: "**Choice A is correct.** The slope is $-3$ and the $y$-intercept is $9$, giving $f(x)=-3x+9$.\n\n**The Fast Way (~20s):** At $x=0$, $f(x)=9$, so $b=9$ — that kills choices C and D. The outputs fall as $x$ rises, so the slope is negative: from $(0,9)$ to $(2,3)$, $m=\\frac{3-9}{2}=-3$.\n\n**The Full Solution:**\nStep 1: Read the intercept: $f(0)=9$, so $b=9$.\nStep 2: Slope from $(0,9)$ and $(2,3)$: $m=\\frac{3-9}{2-0}=\\frac{-6}{2}=-3$.\nStep 3: Combine: $f(x)=-3x+9$. Check $(4,-3)$: $-3(4)+9=-3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($f(x)=3x+9$): right intercept, but used a positive slope; the table's outputs decrease, so the slope must be negative.\n* Choice C ($f(x)=-3x-9$): right slope, but flipped the intercept sign to $-9$. At $x=0$ this gives $-9\\neq9$.\n* Choice D ($f(x)=3x-9$): both signs wrong — positive slope and negative intercept.\n\n**Test Day Takeaway:** When the table includes $x=0$, the matching output is $b$ for free. Then set the slope's sign by whether outputs rise or fall.",
      skills: ['table-to-equation', 'slope-from-points']
    },

    // === FROM FUNCTION NOTATION ===
    {
      id: 16,
      difficulty: "easy",
      question: "In the linear function f, $f(0) = 8$ and $f(1) = 12$. Which equation defines f?",
      choices: [
        { id: "A", text: "$f(x) = 12x + 8$" },
        { id: "B", text: "$f(x) = 4x$" },
        { id: "C", text: "$f(x) = 4x + 12$" },
        { id: "D", text: "$f(x) = 4x + 8$" }
      ],
      correctAnswer: "D",
      hint: "$f(0) = 8$ means the y-intercept is 8. Use $f(1) = 12$ to find the slope.",
      explanation: "**Choice D is correct.** The $y$-intercept is $8$ and the slope is $4$, giving $f(x)=4x+8$.\n\n**The Fast Way (~15s):** $f(0)=8$ is the intercept, and from $(0,8)$ to $(1,12)$ the slope is $\\frac{12-8}{1}=4$. So $f(x)=4x+8$.\n\n**The Full Solution:**\nStep 1: $f(0)=8$, so $b=8$.\nStep 2: Slope from $(0,8)$ and $(1,12)$: $m=\\frac{12-8}{1-0}=4$.\nStep 3: Combine: $f(x)=4x+8$. Check $f(1)=4(1)+8=12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($f(x)=12x+8$): used the output $12$ at $x=1$ as the slope, confusing a value with a rate of change.\n* Choice B ($f(x)=4x$): right slope, but dropped the intercept; this gives $f(0)=0\\neq8$.\n* Choice C ($f(x)=4x+12$): right slope, but used $f(1)=12$ as the intercept instead of $f(0)=8$.\n\n**Test Day Takeaway:** $f(0)$ is always the $y$-intercept $b$ — read it straight off and save a step.",
      skills: ['function-notation-to-equation', 'slope-from-points']
    },
    {
      id: 17,
      difficulty: "medium",
      question: "If f(x) is a linear function where $f(2) = 7$ and $f(5) = 16$, what is f(0)?",
      choices: [
        { id: "A", text: "1" },
        { id: "B", text: "$-1$" },
        { id: "C", text: "3" },
        { id: "D", text: "$-3$" }
      ],
      correctAnswer: "A",
      hint: "First find the slope using the two points (2, 7) and (5, 16). Then use point-slope form to find the y-intercept, which equals f(0).",
      explanation: "**Choice A is correct.** $f(0)=1$.\n\n**The Fast Way (~20s):** Slope from $(2,7)$ and $(5,16)$ is $\\frac{16-7}{5-2}=3$. Back up from $(2,7)$ to $x=0$: subtract two slopes, $7-2(3)=1$, so $f(0)=1$.\n\n**The Full Solution:**\nStep 1: Slope: $m=\\frac{16-7}{5-2}=\\frac{9}{3}=3$.\nStep 2: Solve for $b$ with $(2,7)$: $7=3(2)+b\\Rightarrow b=1$.\nStep 3: Since $f(0)=b$, $f(0)=1$. Check $f(5)=3(5)+1=16$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-1$): a sign slip on $7-6$, writing $-1$ instead of $1$.\n* Choice C ($3$): reported the slope $m=3$ instead of $f(0)=b$.\n* Choice D ($-3$): combined the slope mix-up with a sign error.\n\n**Test Day Takeaway:** $f(0)$ means the $y$-intercept $b$ — find the slope, solve for $b$ with one point, and report $b$, not $m$.",
      skills: ['function-notation-to-equation', 'slope-from-points', 'slope-intercept-form']
    },
    {
      id: 18,
      difficulty: "medium",
      question: "For the linear function h, $h(3) = 14$ and $h(7) = 26$. Which equation defines h?",
      choices: [
        { id: "A", text: "$h(x) = 3x + 5$" },
        { id: "B", text: "$h(x) = 4x + 2$" },
        { id: "C", text: "$h(x) = 3x + 14$" },
        { id: "D", text: "$h(x) = 4x - 2$" }
      ],
      correctAnswer: "A",
      hint: "Find the slope using the two given points, then find the y-intercept.",
      explanation: "**Choice A is correct.** The slope is $3$ and the $y$-intercept is $5$, giving $h(x)=3x+5$.\n\n**The Fast Way (~20s):** Slope from $(3,14)$ and $(7,26)$ is $\\frac{26-14}{7-3}=3$. Solve for $b$ with $(3,14)$: $14-3(3)=5$. So $h(x)=3x+5$.\n\n**The Full Solution:**\nStep 1: Slope: $m=\\frac{26-14}{7-3}=\\frac{12}{4}=3$.\nStep 2: Solve for $b$ with $(3,14)$: $14=3(3)+b\\Rightarrow b=5$.\nStep 3: Combine: $h(x)=3x+5$. Check $h(7)=3(7)+5=26$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($h(x)=4x+2$): divided by the bare $x$-value $3$ instead of $\\Delta x=4$, getting slope $4$.\n* Choice C ($h(x)=3x+14$): right slope, but used the output $14$ at $x=3$ as the intercept.\n* Choice D ($h(x)=4x-2$): same slope error as B, plus a sign slip on the constant.\n\n**Test Day Takeaway:** Slope uses the difference of the $x$-values, $\\frac{y_2-y_1}{x_2-x_1}$ — never a single $x$-value as the denominator.",
      skills: ['function-notation-to-equation', 'slope-from-points']
    },
    {
      id: 19,
      difficulty: "hard",
      question: "In the linear function g, $g(-1) = 10$ and $g(3) = -2$. What is the value of x when $g(x) = 7$?",
      choices: [
        { id: "A", text: "0" },
        { id: "B", text: "1" },
        { id: "C", text: "$-2$" },
        { id: "D", text: "2" }
      ],
      correctAnswer: "A",
      hint: "First find the equation of g(x), then solve $g(x) = 7$ for x.",
      explanation: "**Choice A is correct.** When $g(x)=7$, $x=0$.\n\n**The Fast Way (~20s):** Slope from $(-1,10)$ and $(3,-2)$ is $\\frac{-2-10}{3-(-1)}=-3$, and solving gives intercept $b=7$. Since $g(x)=7$ asks for the intercept value, $x=0$ — no further algebra.\n\n**The Full Solution:**\nStep 1: Slope: $m=\\frac{-2-10}{3-(-1)}=\\frac{-12}{4}=-3$.\nStep 2: Solve for $b$ with $(-1,10)$: $10=-3(-1)+b\\Rightarrow b=7$, so $g(x)=-3x+7$.\nStep 3: Set $g(x)=7$: $-3x+7=7\\Rightarrow -3x=0\\Rightarrow x=0$. Check $g(0)=7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): guessed without solving; $g(1)=-3(1)+7=4\\neq7$.\n* Choice C ($-2$): a sign error on $-3x=0$; $g(-2)=13\\neq7$.\n* Choice D ($2$): rushed the final solve; $g(2)=1\\neq7$.\n\n**Test Day Takeaway:** Solving $g(x)=b$ (the intercept value) always gives $x=0$ — spot it and skip the algebra.",
      skills: ['function-notation-to-equation', 'slope-from-points', 'solving-linear-equations']
    },
    {
      id: 20,
      difficulty: "hard",
      question: "The linear function f is defined such that $f(-2) = 25$ and $f(6) = 9$. What is the y-intercept of the graph of $y = f(x)$?",
      choices: [
        { id: "A", text: "17" },
        { id: "B", text: "21" },
        { id: "C", text: "23" },
        { id: "D", text: "25" }
      ],
      correctAnswer: "B",
      hint: "Find the slope, then use one of the given points to find b in $f(x) = mx + b$.",
      explanation: "**Choice B is correct.** The $y$-intercept is $21$.\n\n**The Fast Way (~20s):** Slope from $(-2,25)$ and $(6,9)$ is $\\frac{9-25}{6-(-2)}=-2$. Solve for $b$ with $(6,9)$: $9-(-2)(6)=9+12=21$.\n\n**The Full Solution:**\nStep 1: Slope: $m=\\frac{9-25}{6-(-2)}=\\frac{-16}{8}=-2$.\nStep 2: Solve for $b$ with $(6,9)$: $9=-2(6)+b\\Rightarrow 9=-12+b\\Rightarrow b=21$.\nStep 3: So $f(x)=-2x+21$ and the $y$-intercept is $21$. Check $f(-2)=-2(-2)+21=25$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($17$): averaged the two outputs, $\\frac{25+9}{2}=17$; the output midpoint is the intercept only when the input midpoint is $0$, but here it is $2$.\n* Choice C ($23$): an arithmetic slip computing $-2(-2)$ as $2$ instead of $4$ while solving for $b$.\n* Choice D ($25$): used the output at $x=-2$ as the intercept; the intercept is the value at $x=0$.\n\n**Test Day Takeaway:** The $y$-intercept is $f(0)$, so always solve $y=mx+b$ with the slope and a known point — never substitute an output from a non-zero input.",
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
      question: "$f(x) = 3x + 7$\n\nThe graph of $y = f(x)$ in the xy-plane is a line. Line j is parallel to this graph. What is the slope of line j?",
      choices: [
        { id: "A", text: "3" },
        { id: "B", text: "7" },
        { id: "C", text: "$-3$" },
        { id: "D", text: "−", fraction: { numerator: "1", denominator: "3" } }
      ],
      correctAnswer: "A",
      hint: "Parallel lines have the same slope. What is the slope of $f(x) = 3x + 7$?",
      explanation: "**Choice A is correct.** Parallel lines have equal slopes, so line $j$ has slope $3$.\n\n**The Fast Way (~10s):** The slope of $f(x)=3x+7$ is $3$, and parallel lines copy the slope exactly, so line $j$ has slope $3$.\n\n**The Full Solution:**\nStep 1: In $y=mx+b$, the slope is the coefficient of $x$, so $f$ has slope $3$.\nStep 2: Parallel means identical slope, so line $j$ also has slope $3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($7$): grabbed the $y$-intercept instead of the slope.\n* Choice C ($-3$): negated the slope; parallel lines keep the same sign.\n* Choice D ($-\\frac{1}{3}$): used the negative reciprocal, which is the perpendicular slope, not the parallel one.\n\n**Test Day Takeaway:** Parallel lines have the same slope; perpendicular lines have negative-reciprocal slopes. Do not mix the two rules.",
      skills: ['parallel-line-slope']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "$g(x) = -4x + 9$\n\nThe graph of $y = g(x)$ in the xy-plane is a line. Line k is parallel to this graph. What is the slope of line k?",
      choices: [
        { id: "A", text: "9" },
        { id: "B", text: "4" },
        { id: "C", text: "$-4$" },
        { id: "D", text: "$-9$" }
      ],
      correctAnswer: "C",
      hint: "Parallel lines have identical slopes. Identify the slope from the equation $g(x) = -4x + 9$.",
      explanation: "**Choice C is correct.** Parallel lines have equal slopes, so line $k$ has slope $-4$.\n\n**The Fast Way (~10s):** The slope of $g(x)=-4x+9$ is $-4$, sign included, and a parallel line copies it exactly.\n\n**The Full Solution:**\nStep 1: In $y=mx+b$, the slope is the coefficient of $x$, so $g$ has slope $-4$.\nStep 2: Parallel means identical slope, so line $k$ has slope $-4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($9$): grabbed the $y$-intercept instead of the slope.\n* Choice B ($4$): dropped the negative sign; the slope is $-4$, not $4$.\n* Choice D ($-9$): negated the intercept, conflating it with the slope.\n\n**Test Day Takeaway:** The slope is the coefficient of $x$, sign and all — and parallel lines preserve it exactly.",
      skills: ['parallel-line-slope']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "$h(x) = (2/5)x - 6$\n\nThe graph of $y = h(x)$ in the xy-plane is a line. Line m is parallel to this graph. What is the slope of line m?",
      choices: [
        { id: "A", text: "$-6$" },
        { id: "B", text: "−", fraction: { numerator: "5", denominator: "2" } },
        { id: "C", fraction: { numerator: "2", denominator: "5" } },
        { id: "D", text: "6" }
      ],
      correctAnswer: "C",
      hint: "Parallel lines have the same slope. The slope is the coefficient of x.",
      explanation: "**Choice C is correct.** Parallel lines have equal slopes, so line $m$ has slope $\\frac{2}{5}$.\n\n**The Fast Way (~10s):** The slope of $h(x)=\\frac{2}{5}x-6$ is $\\frac{2}{5}$, and a parallel line copies it exactly — do not flip or negate the fraction.\n\n**The Full Solution:**\nStep 1: In $y=mx+b$, the slope is the coefficient of $x$, so $h$ has slope $\\frac{2}{5}$.\nStep 2: Parallel means identical slope, so line $m$ has slope $\\frac{2}{5}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): grabbed the $y$-intercept instead of the slope.\n* Choice B ($-\\frac{5}{2}$): used the negative reciprocal, which is the perpendicular slope.\n* Choice D ($6$): just the absolute value of the intercept — neither the slope's value nor sign.\n\n**Test Day Takeaway:** A parallel slope is identical, even when it is a fraction; flipping and negating gives the perpendicular slope.",
      skills: ['parallel-line-slope']
    },

    // === TYPE 2: Write equation through point parallel to given line ===
    {
      id: 4,
      difficulty: "easy",
      question: "What is the equation of the line that passes through the point (0, 8) and is parallel to the graph of $y = 5x + 2$ in the xy-plane?",
      choices: [
        { id: "A", text: "$y = 8x$" },
        { id: "B", text: "$y = 5x + 8$" },
        { id: "C", text: "$y = 5x$" },
        { id: "D", text: "$y = 8x + 5$" }
      ],
      correctAnswer: "B",
      hint: "Parallel lines have the same slope. The point (0, 8) tells you the y-intercept directly.",
      explanation: "**Choice B is correct.** The line has slope $5$ and passes through $(0,8)$, giving $y=5x+8$.\n\n**The Fast Way (~15s):** Parallel to $y=5x+2$ means slope $5$, and the point $(0,8)$ sits on the $y$-axis, so $b=8$. The equation is $y=5x+8$.\n\n**The Full Solution:**\nStep 1: Copy the slope from the parallel line: $m=5$.\nStep 2: The point has $x=0$, so its $y$-value is the intercept: $b=8$.\nStep 3: Combine: $y=5x+8$. Check $(0,8)$: $5(0)+8=8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y=8x$): used $8$ as the slope and dropped the intercept, swapping the roles of the numbers.\n* Choice C ($y=5x$): right slope, but forgot the intercept; this passes through $(0,0)$, not $(0,8)$.\n* Choice D ($y=8x+5$): swapped slope and intercept — used $8$ as slope and $5$ as intercept.\n\n**Test Day Takeaway:** For a parallel line through a point, copy the slope and use the point for $b$; when the point has $x=0$, its $y$-value is the intercept.",
      skills: ['parallel-line-slope', 'writing-parallel-equation']
    },
    {
      id: 5,
      difficulty: "medium",
      question: "What is the equation of the line that passes through the point (3, 14) and is parallel to the graph of $y = 3x - 2$ in the xy-plane?",
      choices: [
        { id: "A", text: "$y = 3x + 5$" },
        { id: "B", text: "$y = 3x - 2$" },
        { id: "C", text: "$y = 3x + 14$" },
        { id: "D", text: "$y = -$", fraction: { numerator: "1", denominator: "3" }, textAfter: "x + 14" }
      ],
      correctAnswer: "A",
      hint: "Use slope 3 (same as the given line). Substitute point (3, 14) into $y = 3x + b$ to find b.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** Parallel means same slope, so $m=3$. Plug the point into $y=3x+b$: $14=3(3)+b$ gives $b=5$, so $y=3x+5$.\n\n**The Full Solution:**\nStep 1: Parallel lines share a slope. The given line $y=3x-2$ has slope $3$, so the new line is $y=3x+b$.\nStep 2: Use the point $(3,14)$: $14=3(3)+b \\Rightarrow 14=9+b \\Rightarrow b=5$.\nStep 3: The equation is $y=3x+5$. Check: $3(3)+5=14$ $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($y=3x-2$): the original line itself — right slope, but it passes through $(0,-2)$, not $(3,14)$.\n* Choice C ($y=3x+14$): drops the point's $y$-value straight into $b$; that only works when $x=0$.\n* Choice D ($y=-\\frac{1}{3}x+14$): uses the perpendicular slope $-\\frac{1}{3}$ instead of the parallel slope.\n\n**Test Day Takeaway:** For a parallel line through a point, keep the slope and solve $y=mx+b$ for $b$ using the point. The point's $y$-value is the intercept only when its $x$ is $0$.",
      skills: ['parallel-line-slope', 'writing-parallel-equation']
    },
    {
      id: 6,
      difficulty: "medium",
      question: "What is the equation of the line that passes through the point (−2, 4) and is parallel to the graph of $y = -2x + 5$ in the xy-plane?",
      choices: [
        { id: "A", text: "$y = -2x$" },
        { id: "B", text: "$y = -2x + 4$" },
        { id: "C", text: "$y = 2x + 8$" },
        { id: "D", text: "$y =$", fraction: { numerator: "1", denominator: "2" }, textAfter: "x + 4" }
      ],
      correctAnswer: "A",
      hint: "Parallel lines have slope −2. Use point (−2, 4) to find the y-intercept.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** Same slope $m=-2$. Plug in $(-2,4)$: $4=-2(-2)+b=4+b$, so $b=0$ and the line is $y=-2x$.\n\n**The Full Solution:**\nStep 1: Parallel to $y=-2x+5$ means slope $-2$, so the line is $y=-2x+b$.\nStep 2: Substitute $(-2,4)$: $4=-2(-2)+b \\Rightarrow 4=4+b \\Rightarrow b=0$.\nStep 3: The equation is $y=-2x$. Check: $-2(-2)=4$ $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($y=-2x+4$): drops the point's $y$-value ($4$) into $b$ without solving; that line passes through $(-2,8)$, not $(-2,4)$.\n* Choice C ($y=2x+8$): uses slope $+2$ — the sign of the slope was dropped.\n* Choice D ($y=\\frac{1}{2}x+4$): uses the perpendicular slope $\\frac{1}{2}$ instead of the parallel slope.\n\n**Test Day Takeaway:** Watch the double negative: $-2(-2)=+4$. Keep the slope for a parallel line and solve for $b$ with the given point.",
      skills: ['parallel-line-slope', 'writing-parallel-equation']
    },

    // === TYPE 3: System with no solution - identify parallel equation ===
    {
      id: 7,
      difficulty: "medium",
      question: "$y = 4x + 12$\n\nOne of the equations in a system of two linear equations is given. The system has no solution. Which equation could be the second equation in the system?",
      choices: [
        { id: "A", text: "$-4x + y = 12$" },
        { id: "B", text: "$-4x + y = 20$" },
        { id: "C", text: "$-8x + y = 24$" },
        { id: "D", text: "$-8x + y = 12$" }
      ],
      correctAnswer: "B",
      hint: "No solution means parallel lines (same slope, different y-intercept). Rewrite each choice in $y = mx + b$ form.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** No solution means parallel lines: same slope, different intercept. The given line is $y=4x+12$, so look for slope $4$ with intercept $\\neq 12$. Choice B, $-4x+y=20$, becomes $y=4x+20$.\n\n**The Full Solution:**\nStep 1: The given line $y=4x+12$ has slope $4$.\nStep 2: Convert Choice B to slope-intercept form: $-4x+y=20 \\Rightarrow y=4x+20$ — slope $4$, intercept $20\\neq 12$. Parallel.\nStep 3: Confirm no solution: $4x+12=4x+20 \\Rightarrow 12=20$, impossible. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4x+y=12 \\Rightarrow y=4x+12$): the same line as the given equation — infinitely many solutions, not none.\n* Choice C ($-8x+y=24 \\Rightarrow y=8x+24$): slope $8$, so it crosses the given line at one point.\n* Choice D ($-8x+y=12 \\Rightarrow y=8x+12$): slope $8$ again — one intersection.\n\n**Test Day Takeaway:** No solution = parallel = same slope, different intercept. Same slope and same intercept means one identical line (infinitely many solutions), and different slopes means exactly one solution.",
      skills: ['parallel-line-slope', 'system-no-solution']
    },
    {
      id: 8,
      difficulty: "medium",
      question: "$y = -5x + 15$\n\nOne of the equations in a system of two linear equations is given. The system has no solution. Which equation could be the second equation in the system?",
      choices: [
        { id: "A", text: "$5x + y = 15$" },
        { id: "B", text: "$5x + y = 25$" },
        { id: "C", text: "$-5x + y = 15$" },
        { id: "D", text: "$10x + 2y = 30$" }
      ],
      correctAnswer: "B",
      hint: "Convert each answer to slope-intercept form. No solution requires same slope but different y-intercept.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** No solution means same slope, different intercept. The given line is $y=-5x+15$, so look for slope $-5$ with intercept $\\neq 15$. Choice B, $5x+y=25$, becomes $y=-5x+25$.\n\n**The Full Solution:**\nStep 1: The given line $y=-5x+15$ has slope $-5$.\nStep 2: Convert Choice B: $5x+y=25 \\Rightarrow y=-5x+25$ — slope $-5$, intercept $25\\neq 15$. Parallel.\nStep 3: Confirm: $-5x+15=-5x+25 \\Rightarrow 15=25$, impossible, so no solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5x+y=15 \\Rightarrow y=-5x+15$): identical to the given line — infinitely many solutions.\n* Choice C ($-5x+y=15 \\Rightarrow y=5x+15$): moving $-5x$ across flips its sign to $+5x$, so the slope is $+5$ — one intersection.\n* Choice D ($10x+2y=30 \\Rightarrow y=-5x+15$): just the original equation doubled — same line, infinitely many solutions.\n\n**Test Day Takeaway:** Multiplying an equation through by a constant gives an equivalent line, not a parallel one. For no solution you need the same slope but a genuinely different intercept.",
      skills: ['parallel-line-slope', 'system-no-solution']
    },

    // === TYPE 4: Find constant p for no solution (single equation) ===
    {
      id: 9,
      difficulty: "hard",
      question: "$-4x + 28px = 56$\n\nIn the given equation, p is a constant. The equation has no solution. What is the value of p?",
      choices: [
        { id: "A", text: "0" },
        { id: "B", fraction: { numerator: "1", denominator: "7" } },
        { id: "C", fraction: { numerator: "2", denominator: "7" } },
        { id: "D", text: "7" }
      ],
      correctAnswer: "B",
      hint: "Combine the x terms: $(-4 + 28p)x = 56$. For no solution, the coefficient of x must be 0 while the right side is non-zero.",
      explanation: "**The correct answer is $\\frac{1}{7}$.**\n\n**The Fast Way (~20s):** Combine $x$-terms: $(-4+28p)x=56$. A single-variable equation has no solution only when the coefficient is $0$ while the constant is not, so set $-4+28p=0 \\Rightarrow p=\\frac{4}{28}=\\frac{1}{7}$.\n\n**The Full Solution:**\nStep 1: Group like terms on the left: $-4x+28px=(-4+28p)x=56$.\nStep 2: For $kx=c$ to have no solution, $k=0$ and $c\\neq 0$ (the equation collapses to $0=56$, a contradiction).\nStep 3: Set $-4+28p=0 \\Rightarrow 28p=4 \\Rightarrow p=\\frac{1}{7}$. Since $56\\neq 0$, this gives no solution. $\\checkmark$\n\n**Common Mistakes:** Picking $p=0$ (gives $-4x=56$, one solution); picking $p=\\frac{2}{7}$ (coefficient becomes $+4$, one solution); inverting $\\frac{1}{7}$ to $7$.\n\n**Test Day Takeaway:** A linear equation $kx=c$ has no solution exactly when the variable's coefficient is $0$ and the constant is nonzero. Set the combined coefficient to $0$ and solve for the parameter.",
      skills: ['parallel-line-slope', 'no-solution-equation']
    },
    {
      id: 10,
      difficulty: "hard",
      question: "$7x - 21px = 42$\n\nIn the given equation, p is a constant. The equation has no solution. What is the value of p?",
      choices: [
        { id: "A", text: "$-3$" },
        { id: "B", text: "−", fraction: { numerator: "1", denominator: "3" } },
        { id: "C", fraction: { numerator: "1", denominator: "3" } },
        { id: "D", text: "3" }
      ],
      correctAnswer: "C",
      hint: "Factor out x: $(7 - 21p)x = 42$. For no solution, make the x coefficient equal to 0.",
      explanation: "**The correct answer is $\\frac{1}{3}$.**\n\n**The Fast Way (~20s):** Combine $x$-terms: $(7-21p)x=42$. No solution requires the coefficient to vanish, so set $7-21p=0 \\Rightarrow p=\\frac{7}{21}=\\frac{1}{3}$.\n\n**The Full Solution:**\nStep 1: Group like terms: $7x-21px=(7-21p)x=42$.\nStep 2: For $kx=c$ with $c\\neq 0$ to have no solution, $k=0$.\nStep 3: Set $7-21p=0 \\Rightarrow 21p=7 \\Rightarrow p=\\frac{1}{3}$. Since $42\\neq 0$, the equation becomes $0=42$, impossible. $\\checkmark$\n\n**Common Mistakes:** Choosing $p=-\\frac{1}{3}$ or $p=-3$ (wrong sign — the coefficient won't cancel); inverting $\\frac{1}{3}$ to $3$; forgetting to reduce $\\frac{7}{21}$ to $\\frac{1}{3}$.\n\n**Test Day Takeaway:** No solution means the $x$-coefficient collapses to $0$. Set the combined coefficient equal to zero, solve for the parameter, and reduce the fraction.",
      skills: ['parallel-line-slope', 'no-solution-equation']
    },

    // === TYPE 5: Find constant for no solution in system (advanced) ===
    {
      id: 11,
      difficulty: "hard",
      question: "$36x - 48y = 36y + 18$\nry = (1/6) − 9x\n\nIn the given system of equations, r is a constant. If the system has no solution, what is the value of r?",
      choices: [
        { id: "A", text: "$-21$" },
        { id: "B", text: "−", fraction: { numerator: "1", denominator: "4" } },
        { id: "C", fraction: { numerator: "1", denominator: "4" } },
        { id: "D", text: "21" }
      ],
      correctAnswer: "A",
      hint: "Rewrite both equations in standard form ($ax + by = c$). For no solution, the ratios a₁/a₂ = b₁/b₂ ≠ c₁/c₂.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** Reduce Equation 1 to $6x-14y=3$ and Equation 2 to $9x+ry=\\frac{1}{6}$. Parallel lines need matched coefficient ratios: $\\frac{6}{9}=\\frac{-14}{r}$, which gives $r=-21$.\n\n**The Full Solution:**\nStep 1: Equation 1: $36x-48y=36y+18 \\Rightarrow 36x-84y=18$. Divide by $6$: $6x-14y=3$.\nStep 2: Equation 2: $ry=\\frac{1}{6}-9x \\Rightarrow 9x+ry=\\frac{1}{6}$.\nStep 3: For no solution, the $x$ and $y$ coefficients are proportional but the constants are not: $\\frac{6}{9}=\\frac{-14}{r} \\Rightarrow \\frac{2}{3}=\\frac{-14}{r} \\Rightarrow r=\\frac{-14\\cdot 3}{2}=-21$.\nStep 4: Check the constants differ — Equation 1 scales to $6x-14y=3$ while Equation 2 scales to $6x-14y=\\frac{1}{9}$. Same left side, different right side, so the lines are parallel. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{1}{4}$): doesn't satisfy $\\frac{2}{3}=\\frac{-14}{r}$, so the slopes differ — one solution.\n* Choice C ($\\frac{1}{4}$): wrong both in size and sign; the slopes don't match.\n* Choice D ($21$): the right magnitude but positive, giving slope ratio $-\\frac{2}{3}$ instead of $+\\frac{2}{3}$ — $r$ must be negative.\n\n**Test Day Takeaway:** For $a_1x+b_1y=c_1$ and $a_2x+b_2y=c_2$, no solution means $\\frac{a_1}{a_2}=\\frac{b_1}{b_2}\\neq\\frac{c_1}{c_2}$. Put both equations in standard form before comparing.",
      skills: ['parallel-line-slope', 'system-no-solution', 'algebraic-manipulation']
    },
    {
      id: 12,
      difficulty: "hard",
      question: "$(5/2)y - (1/3)x = (1/2) - (5/2)y$\n(1/3)$x + (5/3) = py + (11/3)$\n\nIn the given system of equations, p is a constant. If the system has no solution, what is the value of p?",
      choices: [
        { id: "A", text: "$-5$" },
        { id: "B", text: "−", fraction: { numerator: "1", denominator: "5" } },
        { id: "C", fraction: { numerator: "1", denominator: "5" } },
        { id: "D", text: "5" }
      ],
      correctAnswer: "D",
      hint: "Simplify each equation to standard form. Then set up the parallel condition where the slopes are equal.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~20s):** Reduce Equation 1 to $x-15y=-\\frac{3}{2}$ and Equation 2 to $x-3py=6$. Matching the $y$-coefficients needs $-3p=-15$, so $p=5$.\n\n**The Full Solution:**\nStep 1: Equation 1: add $\\frac{5}{2}y$ to both sides: $5y-\\frac{1}{3}x=\\frac{1}{2}$. Multiply by $-3$: $x-15y=-\\frac{3}{2}$.\nStep 2: Equation 2: $\\frac{1}{3}x+\\frac{5}{3}=py+\\frac{11}{3} \\Rightarrow \\frac{1}{3}x-py=\\frac{11}{3}-\\frac{5}{3}=2$. Multiply by $3$: $x-3py=6$.\nStep 3: For no solution, the coefficients of $x$ and $y$ match but the constants differ. The $x$-coefficients are both $1$, so set $-3p=-15 \\Rightarrow p=5$.\nStep 4: Check: the two lines become $x-15y=-\\frac{3}{2}$ and $x-15y=6$ — same left side, different right side. Parallel, no solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): makes the $y$-coefficient $+15$ instead of $-15$ — different slopes, one solution.\n* Choice B ($-\\frac{1}{5}$): gives a $y$-coefficient of $\\frac{3}{5}$, nowhere near $-15$.\n* Choice C ($\\frac{1}{5}$): gives a $y$-coefficient of $-\\frac{3}{5}$ — still not $-15$, so the lines cross.\n\n**Test Day Takeaway:** Clear all fractions first, then match coefficients. No solution means identical coefficients of $x$ and $y$ but a different constant.",
      skills: ['parallel-line-slope', 'system-no-solution', 'algebraic-manipulation']
    }
  ],

  // Section: Perpendicular Lines (covers videos 23-24)
  "Perpendicular Lines": [
    {
      id: 1,
      difficulty: "easy",
      question: "Line k has the equation $y = 2x + 5$. What is the slope of a line perpendicular to line k?",
      choices: [
        { id: "A", text: "2" },
        { id: "B", text: "$-2$" },
        { id: "C", fraction: { numerator: "1", denominator: "2" } },
        { id: "D", text: "−", fraction: { numerator: "1", denominator: "2" } }
      ],
      correctAnswer: "D",
      hint: "Perpendicular slopes are negative reciprocals. Flip the fraction and change the sign.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~10s):** Perpendicular slopes are negative reciprocals. The slope of $y=2x+5$ is $2$, so flip and negate: $-\\frac{1}{2}$.\n\n**The Full Solution:**\nStep 1: Line $k$ has slope $2$.\nStep 2: The perpendicular slope is the negative reciprocal: flip $2=\\frac{2}{1}$ to $\\frac{1}{2}$, then negate to $-\\frac{1}{2}$.\nStep 3: Check: $2\\cdot\\left(-\\frac{1}{2}\\right)=-1$ $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): the same slope — that's a parallel line, not perpendicular.\n* Choice B ($-2$): only negated, never flipped; $2\\cdot(-2)=-4\\neq -1$.\n* Choice C ($\\frac{1}{2}$): only flipped, never negated; $2\\cdot\\frac{1}{2}=1\\neq -1$.\n\n**Test Day Takeaway:** Perpendicular slopes satisfy $m_1\\cdot m_2=-1$. Do both moves — flip the fraction and change the sign.",
      skills: ['perpendicular-negative-reciprocal']
    },
    {
      id: 2,
      difficulty: "easy",
      question: "Which equation represents a line perpendicular to $y = -3x + 1$?",
      choices: [
        { id: "A", text: "$y = -3x + 4$" },
        { id: "B", text: "$y = 3x - 2$" },
        { id: "C", text: "$y =$", fraction: { numerator: "1", denominator: "3" }, textAfter: "x + 5" },
        { id: "D", text: "$y = -$", fraction: { numerator: "1", denominator: "3" }, textAfter: "x + 1" }
      ],
      correctAnswer: "C",
      hint: "The slope is -3. The negative reciprocal means flip it (1/3) and change the sign (positive).",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** The slope of $y=-3x+1$ is $-3$; its negative reciprocal is $\\frac{1}{3}$. Only Choice C, $y=\\frac{1}{3}x+5$, has that slope.\n\n**The Full Solution:**\nStep 1: The given line has slope $-3$.\nStep 2: Negative reciprocal of $-3=\\frac{-3}{1}$: flip to $\\frac{1}{-3}=-\\frac{1}{3}$, then negate to $+\\frac{1}{3}$.\nStep 3: Choice C has slope $\\frac{1}{3}$. Check: $(-3)\\cdot\\frac{1}{3}=-1$ $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y=-3x+4$): same slope $-3$ — parallel, not perpendicular.\n* Choice B ($y=3x-2$): only negated to $+3$; $(-3)(3)=-9\\neq -1$.\n* Choice D ($y=-\\frac{1}{3}x+1$): flipped but not negated, so it stays negative; $(-3)\\left(-\\frac{1}{3}\\right)=1\\neq -1$.\n\n**Test Day Takeaway:** When the original slope is negative, its negative reciprocal is positive — the two negatives cancel. Always confirm with $m_1\\cdot m_2=-1$.",
      skills: ['perpendicular-negative-reciprocal']
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A line passes through (2, 4) and is perpendicular to the line shown below. What is the equation of this line?",
      questionFormula: { text: "$y =$", fraction: { numerator: "1", denominator: "2" }, textAfter: "x − 3" },
      choices: [
        { id: "A", text: "$y = -2x + 8$" },
        { id: "B", text: "$y = 2x$" },
        { id: "C", text: "$y =$", fraction: { numerator: "1", denominator: "2" }, textAfter: "x + 3" },
        { id: "D", text: "$y = -2x$" }
      ],
      correctAnswer: "A",
      hint: "The negative reciprocal of 1/2 is -2. Use this slope with the point (2, 4) to find the equation.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** The given line has slope $\\frac{1}{2}$, so the perpendicular slope is $-2$. Through $(2,4)$: $y-4=-2(x-2)$ gives $y=-2x+8$.\n\n**The Full Solution:**\nStep 1: The shown line has slope $\\frac{1}{2}$; its negative reciprocal is $-2$.\nStep 2: Use point-slope form at $(2,4)$: $y-4=-2(x-2) \\Rightarrow y-4=-2x+4$.\nStep 3: Solve: $y=-2x+8$. Check the point: $-2(2)+8=4$ $\\checkmark$, and $\\frac{1}{2}\\cdot(-2)=-1$ $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($y=2x$): uses slope $+2$ (reciprocal without negating); it happens to pass through $(2,4)$, which makes it a tempting trap, but $\\frac{1}{2}\\cdot 2=1\\neq -1$.\n* Choice C ($y=\\frac{1}{2}x+3$): keeps the original slope $\\frac{1}{2}$ — that's parallel, not perpendicular.\n* Choice D ($y=-2x$): correct slope but $b=0$; at $(2,4)$ this gives $-4$, not $4$.\n\n**Test Day Takeaway:** Perpendicular line through a point: take the negative-reciprocal slope, then anchor it with point-slope form so the intercept lands right.",
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
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~10s):** Perpendicular slope is the negative reciprocal. Flip $\\frac{4}{5}$ to $\\frac{5}{4}$, then negate: $-\\frac{5}{4}$.\n\n**The Full Solution:**\nStep 1: The given slope is $\\frac{4}{5}$.\nStep 2: Flip the fraction: $\\frac{5}{4}$. Negate: $-\\frac{5}{4}$.\nStep 3: Check: $\\frac{4}{5}\\cdot\\left(-\\frac{5}{4}\\right)=-\\frac{20}{20}=-1$ $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{4}{5}$): the same slope — parallel, not perpendicular.\n* Choice B ($-\\frac{4}{5}$): only negated, never flipped; $\\frac{4}{5}\\cdot\\left(-\\frac{4}{5}\\right)=-\\frac{16}{25}\\neq -1$.\n* Choice C ($\\frac{5}{4}$): only flipped, never negated; $\\frac{4}{5}\\cdot\\frac{5}{4}=1\\neq -1$.\n\n**Test Day Takeaway:** A negative reciprocal needs both moves — flip and negate. Verify the product of perpendicular slopes is $-1$.",
      skills: ['perpendicular-negative-reciprocal']
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Line j passes through (0, 3) and (4, 1). A line perpendicular to j passes through (2, 5). What is the y-intercept of the perpendicular line?",
      choices: [
        { id: "A", text: "1" },
        { id: "B", text: "3" },
        { id: "C", text: "$-1$" },
        { id: "D", text: "5" }
      ],
      correctAnswer: "A",
      hint: "First find the slope of line j, then find the perpendicular slope. Use point (2, 5) to write the equation and find b.",
      explanation: "**Choice A is correct.** The $y$-intercept of the perpendicular line is $1$.\n\n**The Fast Way (~25s):** Line $j$ drops $2$ over a run of $4$, so its slope is $-\\frac{1}{2}$; the perpendicular slope is the negative reciprocal, $2$. Plug the point $(2,5)$ into $y=2x+b$: $5=2(2)+b \\Rightarrow b=1$.\n\n**The Full Solution:**\nStep 1: Slope of $j$ from $(0,3)$ and $(4,1)$: $m_j=\\frac{1-3}{4-0}=\\frac{-2}{4}=-\\frac{1}{2}$.\nStep 2: Perpendicular slope is the negative reciprocal of $-\\frac{1}{2}$, which is $2$.\nStep 3: Write the perpendicular line through $(2,5)$: $y-5=2(x-2) \\Rightarrow y=2x-4+5 \\Rightarrow y=2x+1$.\nStep 4: The $y$-intercept is $b=1$, so the answer is Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): the $y$-intercept of line $j$ itself (from $(0,3)$), not the perpendicular line. The question asks for the perpendicular line's intercept.\n* Choice C ($-1$): a sign slip on $-4+5$, reading it as $-(4+5)$ or $-1$ instead of $+1$.\n* Choice D ($5$): the $y$-coordinate of the given point $(2,5)$, mistaken for the intercept. That value occurs at $x=2$, not at $x=0$.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals; once you have the slope and a point, substitute into $y=mx+b$ and solve for $b$ — don't grab a $y$-coordinate that isn't at $x=0$.",
      skills: ['slope-from-points', 'perpendicular-negative-reciprocal', 'writing-perpendicular-equation']
    }
  ]
};
