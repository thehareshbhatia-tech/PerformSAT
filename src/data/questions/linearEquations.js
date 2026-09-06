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
      question: "A gym charges a one-time registration fee of \\$40 plus \\$18 for each month of membership. Which equation gives the total amount $A$, in dollars, paid for $m$ months of membership?",
      choices: [
        { id: "A", text: "$A = 18m + 40$" },
        { id: "B", text: "$A = 40m + 18$" },
        { id: "C", text: "$A = 58m$" },
        { id: "D", text: "$A = 18m - 40$" }
      ],
      correctAnswer: "A",
      hint: "One of the two amounts is charged again every month and the other is charged only once — that decides which one multiplies $m$.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** The \\$18 recurs, so it multiplies $m$; the \\$40 is paid once, so it is the constant: $A = 18m + 40$ — choice A.\n\n**The Full Solution:**\nStep 1: The membership charge is \\$18 for each month, so $m$ months contribute $18m$ dollars.\nStep 2: The registration fee is paid once no matter how long the membership lasts, so it is the constant term, $40$.\nStep 3: Combine the two: $A = 18m + 40$. Check $m = 3$: $18(3)+40 = 94$, which is the \\$40 fee plus three monthly charges of \\$18. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($A = 40m + 18$): swaps the two amounts, charging \\$40 every month and \\$18 only once.\n* Choice C ($A = 58m$): adds the two amounts before multiplying, so the \\$40 fee is charged every month along with the \\$18.\n* Choice D ($A = 18m - 40$): subtracts the registration fee; a fee raises the total paid, so it must be added.\n\n**Test Day Takeaway:** In a linear model the per-unit amount is the slope and the one-time amount is the constant. Substitute a small value like $m = 3$ and count the charges by hand to confirm you have not swapped them.",
      skills: ["word-problem-to-equation", "slope-intercept-form"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A seedling is $5$ centimeters tall when it is first measured, and it grows $2$ centimeters each week after that. Which equation gives the height $h$, in centimeters, of the seedling $w$ weeks after it is first measured?",
      choices: [
        { id: "A", text: "$h = 2w$" },
        { id: "B", text: "$h = 2w + 5$" },
        { id: "C", text: "$h = 5 - 2w$" },
        { id: "D", text: "$h = 5w + 2$" }
      ],
      correctAnswer: "B",
      hint: "At $w = 0$ the seedling already has a height — the equation has to produce that value.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** Growth of $2$ centimeters per week gives $2w$, and the seedling starts at $5$: $h = 2w + 5$ — choice B.\n\n**The Full Solution:**\nStep 1: The height at the first measurement corresponds to $w = 0$, so the constant term is $5$.\nStep 2: The seedling gains $2$ centimeters each week, so $w$ weeks add $2w$ centimeters.\nStep 3: Combine: $h = 2w + 5$. Check $w = 4$: $2(4)+5 = 13$ centimeters, which is $5$ plus four weeks of $2$-centimeter growth. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($h = 2w$): ignores the height at the first measurement, so the model starts the seedling at $0$ centimeters.\n* Choice C ($h = 5 - 2w$): subtracts the weekly growth, which would make the seedling shrink over time.\n* Choice D ($h = 5w + 2$): swaps the two numbers, treating $5$ centimeters as the weekly growth and $2$ centimeters as the starting height.\n\n**Test Day Takeaway:** Evaluate a candidate equation at the input $0$: whatever it returns should be the quantity described as the starting amount.",
      skills: ["word-problem-to-equation", "slope-intercept-form"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A delivery drone begins a flight with its battery at $96$ percent charge, and the charge decreases by $1.5$ percentage points for each minute of flight. Which equation gives the battery charge $c$, as a percent, after $t$ minutes of flight?",
      choices: [
        { id: "A", text: "$c = 96 - 1.5t$" },
        { id: "B", text: "$c = 96 - 15t$" },
        { id: "C", text: "$c = 1.5t + 96$" },
        { id: "D", text: "$c = 1.5t - 96$" }
      ],
      correctAnswer: "A",
      hint: "A quantity that falls at a steady rate has a negative rate of change; the starting value stays positive.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~20s):** The charge starts at $96$ and falls $1.5$ points per minute: $c = 96 - 1.5t$ — choice A.\n\n**The Full Solution:**\nStep 1: At $t = 0$ the charge is $96$ percent, so the constant term is $96$.\nStep 2: The charge decreases, so the rate of change is negative: $-1.5$ percentage points per minute, contributing $-1.5t$.\nStep 3: Combine: $c = 96 - 1.5t$. Check $t = 10$: $96 - 15 = 81$ percent, a drop of $15$ points across $10$ minutes at $1.5$ points per minute. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($c = 96 - 15t$): reads the rate as $15$ percentage points per minute; the battery would then be empty after $6.4$ minutes.\n* Choice C ($c = 1.5t + 96$): uses the right numbers but adds, so the battery would gain charge during the flight.\n* Choice D ($c = 1.5t - 96$): reverses both roles, starting the battery at $-96$ percent and raising it.\n\n**Test Day Takeaway:** Read the direction of change before the size of it. A decreasing quantity forces a negative coefficient on the variable, never on the starting value.",
      skills: ["word-problem-to-equation", "slope-intercept-form"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In a linear relationship between $x$ and $y$, each increase of $4$ in the value of $x$ corresponds to a decrease of $10$ in the value of $y$. When the value of $x$ is $6$, the value of $y$ is $1$. Which equation represents this relationship?",
      choices: [
        { id: "A", text: "$y = -10x + 61$" },
        { id: "B", text: "$y = -2.5x + 1$" },
        { id: "C", text: "$y = -2.5x + 16$" },
        { id: "D", text: "$y = 2.5x - 14$" }
      ],
      correctAnswer: "C",
      hint: "A drop of $10$ across a run of $4$ is not a rate of change until you divide.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** $m = \\frac{-10}{4} = -2.5$, and $1 = -2.5(6)+b$ gives $b = 16$: $y = -2.5x + 16$ — choice C.\n\n**The Full Solution:**\nStep 1: The rate of change is the change in $y$ divided by the change in $x$: $m = \\frac{-10}{4} = -2.5$.\nStep 2: Substitute the given pair $(6, 1)$ into $y = -2.5x + b$: $1 = -15 + b$, so $b = 16$.\nStep 3: The equation is $y = -2.5x + 16$. Check by stepping $4$ units right from $x = 6$: at $x = 10$, $y = -25+16 = -9$, which is $10$ less than $1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -10x + 61$): uses the $10$-unit drop as the rate of change without dividing by the $4$-unit run; then $1 = -10(6)+b$ forces $b = 61$.\n* Choice B ($y = -2.5x + 1$): has the correct rate of change but treats the given value $y = 1$ as the value at $x = 0$; it occurs at $x = 6$.\n* Choice D ($y = 2.5x - 14$): makes the rate of change positive, so $y$ would rise as $x$ rises; then $1 = 2.5(6)+b$ forces $b = -14$.\n\n**Test Day Takeaway:** The phrase '$y$ drops $10$ for every $4$ that $x$ rises' describes a ratio, not a slope — divide first, then anchor the line with the given point.",
      skills: ["word-problem-to-equation", "slope-intercept-form"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "A cable is wound onto a drum at a constant rate. After $4$ minutes of winding, $118$ meters of cable remain on the ground, and after $9$ minutes, $63$ meters remain. Which equation gives the number of meters $L$ of cable remaining on the ground after $t$ minutes of winding?",
      choices: [
        { id: "A", text: "$L = 118 - 11t$" },
        { id: "B", text: "$L = 162 - 55t$" },
        { id: "C", text: "$L = 162 - 11t$" },
        { id: "D", text: "$L = 162 + 11t$" }
      ],
      correctAnswer: "C",
      hint: "Neither reading happens at $t = 0$, so the constant term has to be recovered rather than read off.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~35s):** $55$ meters disappear over $5$ minutes, so the rate is $-11$; backing up $4$ minutes from $118$ gives $118 + 44 = 162$ at $t = 0$ — choice C.\n\n**The Full Solution:**\nStep 1: Rate of change: $\\frac{63 - 118}{9 - 4} = \\frac{-55}{5} = -11$ meters per minute.\nStep 2: Find the amount at $t = 0$ by substituting the first reading: $118 = -11(4)+b$, so $b = 118 + 44 = 162$ meters.\nStep 3: The equation is $L = 162 - 11t$. Check the second reading: $162 - 11(9) = 162 - 99 = 63$ meters. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($L = 118 - 11t$): finds the rate correctly but uses the $4$-minute reading, $118$, as the amount at $t = 0$.\n* Choice B ($L = 162 - 55t$): uses the total drop between the two readings, $55$ meters, as the per-minute rate instead of dividing by the $5$ elapsed minutes.\n* Choice D ($L = 162 + 11t$): uses a positive rate, which would pile cable onto the ground while the drum winds it up.\n\n**Test Day Takeaway:** Two readings at nonzero times give the rate directly, but the constant term still has to be back-solved. Verify with the reading you did not use to find it.",
      skills: ["word-problem-to-equation", "slope-intercept-form"]
    },

    // === FROM GRAPH (Scatterplot - find best-fit model) ===
    {
      id: 6,
      difficulty: "easy",
      question: "For each of six trials, a technician recorded the value of $x$ and the corresponding value of $y$. The scatterplot shows the results. Which equation is the most appropriate linear model for these data?",
      diagram: { type: "scatterplot", params: { points: [[1, 7], [2, 12], [3, 16], [4, 23], [5, 27], [6, 32]], xMin: 0, xMax: 7, yMin: 0, yMax: 35, xGridStep: 1, yGridStep: 5, yLabelStep: 10 } },
      choices: [
        { id: "A", text: "$y = 2x + 5$" },
        { id: "B", text: "$y = 5x + 2$" },
        { id: "C", text: "$y = 5x - 2$" },
        { id: "D", text: "$y = -5x + 2$" }
      ],
      correctAnswer: "B",
      hint: "Fix the sign of the rate of change from the direction of the trend, then read where the pattern would meet the vertical axis.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** The points climb about $5$ units per step and, traced back to $x = 0$, land near $2$: $y = 5x + 2$ — choice B.\n\n**The Full Solution:**\nStep 1: The values rise as $x$ rises, so the rate of change is positive, which rules out the negative-slope choice.\nStep 2: Estimate the rate from the two end points, $(1, 7)$ and $(6, 32)$: $\\frac{32-7}{6-1} = \\frac{25}{5} = 5$.\nStep 3: Estimate the starting value: at $x = 1$ the data are near $7$, so at $x = 0$ they would be near $7 - 5 = 2$, a positive number.\nStep 4: That gives $y = 5x + 2$, which lands within a unit or two of every plotted point. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = 2x + 5$): swaps the rate of change and the starting value; at $x = 6$ it predicts $17$, while the data are near $32$.\n* Choice C ($y = 5x - 2$): has the right rate of change but a negative starting value; the trend traced back to $x = 0$ sits above the axis, not below it.\n* Choice D ($y = -5x + 2$): uses a negative rate of change, but the plotted values increase as $x$ increases.\n\n**Test Day Takeaway:** For a scatterplot model, settle the sign of the slope and the sign of the intercept first — that alone usually eliminates three of the four choices.",
      skills: ["graph-to-equation", "slope-from-points", "best-fit-line"]
    },
    {
      id: 7,
      difficulty: "medium",
      question: "The scatterplot shows the age, in years, and the resale value, in thousands of dollars, of each of eight delivery vans. Which equation is the most appropriate linear model for these data?",
      diagram: { type: "scatterplot", params: { points: [[1, 21], [2, 19], [3, 18], [4, 16], [5, 15], [6, 12], [7, 12], [8, 10]], xMin: 0, xMax: 9, yMin: 0, yMax: 24, xGridStep: 1, yGridStep: 2, yLabelStep: 4, xLabel: "Age (years)", yLabel: "Resale value (thousands of dollars)" } },
      choices: [
        { id: "A", text: "$y = -22x + 1.5$" },
        { id: "B", text: "$y = -1.5x - 22$" },
        { id: "C", text: "$y = -1.5x + 22$" },
        { id: "D", text: "$y = 1.5x + 10$" }
      ],
      correctAnswer: "C",
      hint: "Estimate the drop per year from the two ends of the trend, then ask what value the trend points to for a brand-new van.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** Value falls about $1.5$ thousand dollars per year and the trend reaches about $22$ at age $0$: $y = -1.5x + 22$ — choice C.\n\n**The Full Solution:**\nStep 1: Resale value falls as age rises, so the rate of change is negative.\nStep 2: Estimate it from the ends, $(1, 21)$ and $(8, 10)$: $\\frac{10-21}{8-1} = \\frac{-11}{7} \\approx -1.6$, close to $-1.5$.\nStep 3: At $x = 1$ the value is about $21$, so at $x = 0$ it would be about $21 + 1.5 = 22.5$, near $22$.\nStep 4: The model $y = -1.5x + 22$ predicts $10$ thousand dollars at age $8$, matching the plotted point. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -22x + 1.5$): swaps the rate of change and the starting value, so the model would lose $22$ thousand dollars of value each year.\n* Choice B ($y = -1.5x - 22$): has the right rate of change but a negative starting value; at age $1$ it predicts $-23.5$ thousand dollars.\n* Choice D ($y = 1.5x + 10$): uses a positive rate of change, which would mean older vans resell for more.\n\n**Test Day Takeaway:** Read the intercept as the value the model assigns at input $0$ — here, a brand-new van — and reject any model whose prediction there is impossible.",
      skills: ["graph-to-equation", "best-fit-line"]
    },
    {
      id: 8,
      difficulty: "hard",
      question: "The scatterplot shows the depth, in meters, and the water temperature, in degrees Celsius, at each of ten sampling sites in a lake, along with the line of best fit for the data. The line of best fit passes through the points $(5, 22)$ and $(20, 10)$. Which equation represents the line of best fit?",
      diagram: { type: "scatterplot", params: { points: [[2, 25], [4, 23], [6, 20], [8, 21], [10, 18], [13, 15], [16, 14], [19, 10], [22, 9], [24, 6]], xMin: 0, xMax: 25, yMin: 0, yMax: 28, xGridStep: 5, yGridStep: 4, xLabelStep: 5, yLabelStep: 8, xLabel: "Depth (meters)", yLabel: "Temperature (degrees Celsius)", bestFitLine: { slope: -0.8, intercept: 26 } } },
      choices: [
        { id: "A", text: "$y = -1.25x + 28.25$" },
        { id: "B", text: "$y = -0.8x + 22$" },
        { id: "C", text: "$y = -0.8x + 26$" },
        { id: "D", text: "$y = 0.8x + 18$" }
      ],
      correctAnswer: "C",
      hint: "Two points determine the line exactly — no estimating is needed once you use them both.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** $m = \\frac{10-22}{20-5} = -0.8$, and $22 = -0.8(5)+b$ gives $b = 26$: $y = -0.8x + 26$ — choice C.\n\n**The Full Solution:**\nStep 1: Rate of change from the two given points: $m = \\frac{10-22}{20-5} = \\frac{-12}{15} = -0.8$ degree Celsius per meter.\nStep 2: Substitute $(5, 22)$ into $y = -0.8x + b$: $22 = -4 + b$, so $b = 26$.\nStep 3: The equation is $y = -0.8x + 26$. Check the second point: $-0.8(20)+26 = -16+26 = 10$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -1.25x + 28.25$): inverts the rate of change, computing $\\frac{20-5}{10-22} = -1.25$; anchoring that at $(5, 22)$ then forces $b = 28.25$.\n* Choice B ($y = -0.8x + 22$): has the correct rate of change but takes $22$, the temperature at a depth of $5$ meters, as the value at depth $0$.\n* Choice D ($y = 0.8x + 18$): drops the negative sign on the rate of change, which would make deeper water warmer; anchoring $+0.8$ at $(5, 22)$ gives $b = 18$.\n\n**Test Day Takeaway:** When a stem hands you two points on the line, compute the slope from them and back-solve the intercept — then confirm with the point you did not use.",
      skills: ["graph-to-equation", "slope-from-points", "best-fit-line"]
    },

    // === FROM GRAPH (Line with intercepts) ===
    {
      id: 9,
      difficulty: "easy",
      question: "The graph of a line in the $xy$-plane is shown. Which equation represents this line?",
      diagram: { type: "simpleLine", params: { points: [[0, 3], [4, 11]], xMax: 6, yMax: 14 } },
      choices: [
        { id: "A", text: "$y = 0.5x + 3$" },
        { id: "B", text: "$y = 2x + 3$" },
        { id: "C", text: "$y = 2x + 11$" },
        { id: "D", text: "$y = 3x + 2$" }
      ],
      correctAnswer: "B",
      hint: "The line crosses the vertical axis at a grid point, so one of the two constants can simply be read off.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** The line crosses the vertical axis at $3$ and rises $8$ over a run of $4$, so the slope is $2$: $y = 2x + 3$ — choice B.\n\n**The Full Solution:**\nStep 1: Read the $y$-intercept: the line passes through $(0, 3)$, so $b = 3$.\nStep 2: Compute the slope from $(0, 3)$ and $(4, 11)$: $m = \\frac{11-3}{4-0} = \\frac{8}{4} = 2$.\nStep 3: The equation is $y = 2x + 3$. Check the second point: $2(4)+3 = 11$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = 0.5x + 3$): inverts the slope, dividing the run by the rise, $\\frac{4}{8}$, instead of the rise by the run.\n* Choice C ($y = 2x + 11$): uses $11$, the height of the line at $x = 4$, as the $y$-intercept; the intercept is the height at $x = 0$.\n* Choice D ($y = 3x + 2$): swaps the slope and the $y$-intercept.\n\n**Test Day Takeaway:** When the graph crosses the vertical axis at a lattice point, read $b$ for free and spend your time only on the slope.",
      skills: ["slope-from-points", "slope-intercept-form", "graph-to-equation"]
    },
    {
      id: 10,
      difficulty: "medium",
      question: "In the $xy$-plane, the graph shown models the combinations of $x$ small crates and $y$ large crates that exactly fill one delivery truck. Which equation could represent this relationship?",
      diagram: { type: "linearLine", params: { points: [[0, 15], [20, 0]], xRange: [0, 24], yRange: [0, 20] } },
      choices: [
        { id: "A", text: "$4x + 3y = 60$" },
        { id: "B", text: "$3x + 4y = 20$" },
        { id: "C", text: "$3x + 4y = 60$" },
        { id: "D", text: "$20x + 15y = 60$" }
      ],
      correctAnswer: "C",
      hint: "Both intercepts are visible on the graph; the correct equation has to be satisfied by each of them.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** The line hits $(20, 0)$ and $(0, 15)$; only $3x + 4y = 60$ gives $60$ at both — choice C.\n\n**The Full Solution:**\nStep 1: Read the intercepts from the graph: the line passes through $(20, 0)$ and $(0, 15)$.\nStep 2: Substitute $(20, 0)$ into $3x + 4y = 60$: $3(20)+4(0) = 60$. $\\checkmark$\nStep 3: Substitute $(0, 15)$ into the same equation: $3(0)+4(15) = 60$. $\\checkmark$ Both intercepts satisfy it, so it represents the graph.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4x + 3y = 60$): swaps the coefficients, which places the intercepts at $(15, 0)$ and $(0, 20)$ instead.\n* Choice B ($3x + 4y = 20$): keeps the correct coefficients but uses an intercept value, $20$, as the constant; at $(20, 0)$ the left side is $60$, not $20$.\n* Choice D ($20x + 15y = 60$): uses the intercepts themselves as the coefficients; at $(20, 0)$ the left side is $400$, not $60$.\n\n**Test Day Takeaway:** With a line in standard form, test the two intercepts rather than converting to slope-intercept form — two substitutions settle it.",
      skills: ["graph-to-equation", "slope-from-points", "standard-form"]
    },
    {
      id: 11,
      difficulty: "hard",
      question: "In the $xy$-plane, line $\\ell$ passes through the two points plotted in the figure shown. The equation of line $\\ell$ can be written in the form $y = mx + b$, where $m$ and $b$ are constants. Which equation represents line $\\ell$?",
      diagram: { type: "coordinatePoints", params: { points: [[-6, 9], [3, -3]], xMin: -10, xMax: 10, yMin: -10, yMax: 10 } },
      choices: [
        { id: "A", text: "$y = -\\frac{4}{3}x + 1$" },
        { id: "B", text: "$y = -\\frac{4}{3}x + 9$" },
        { id: "C", text: "$y = -\\frac{3}{4}x + \\frac{9}{2}$" },
        { id: "D", text: "$y = \\frac{4}{3}x + 17$" }
      ],
      correctAnswer: "A",
      hint: "Subtracting a negative coordinate lengthens the run — write the subtraction out rather than doing it in your head.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~30s):** $m = \\frac{-3-9}{3-(-6)} = -\\frac{4}{3}$, and $-3 = -\\frac{4}{3}(3)+b$ gives $b = 1$ — choice A.\n\n**The Full Solution:**\nStep 1: Compute the slope: $m = \\frac{-3-9}{3-(-6)} = \\frac{-12}{9} = -\\frac{4}{3}$. The run is $3-(-6) = 9$, not $3$.\nStep 2: Substitute $(3, -3)$ into $y = -\\frac{4}{3}x + b$: $-3 = -4 + b$, so $b = 1$.\nStep 3: The equation is $y = -\\frac{4}{3}x + 1$. Check the other point: $-\\frac{4}{3}(-6)+1 = 8+1 = 9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = -\\frac{4}{3}x + 9$): takes $9$, the second coordinate of the left-hand point, as the $y$-intercept; that height occurs at $x = -6$.\n* Choice C ($y = -\\frac{3}{4}x + \\frac{9}{2}$): inverts the slope to $\\frac{3-(-6)}{-3-9} = -\\frac{3}{4}$, which then forces $b = \\frac{9}{2}$.\n* Choice D ($y = \\frac{4}{3}x + 17$): drops a negative sign in the run, computing $\\frac{-12}{-9}$; anchoring $+\\frac{4}{3}$ at $(-6, 9)$ gives $b = 17$.\n\n**Test Day Takeaway:** With negative coordinates the run is where slopes go wrong: $3 - (-6) = 9$. Compute it explicitly, then confirm the finished equation on the point you did not use.",
      skills: ["slope-from-points", "slope-intercept-form", "graph-to-equation"]
    },

    // === FROM TABLE ===
    {
      id: 12,
      difficulty: "easy",
      question: "Three ordered pairs that satisfy the linear function $f$ are recorded in the table. Which equation defines $f$?",
      diagram: { type: "table", params: { rows: [[0, 17], [1, 22], [2, 27]], xHeader: "x", yHeader: "f(x)" } },
      choices: [
        { id: "A", text: "$f(x) = 5x + 17$" },
        { id: "B", text: "$f(x) = 5x + 22$" },
        { id: "C", text: "$f(x) = 17x + 5$" },
        { id: "D", text: "$f(x) = 22x + 17$" }
      ],
      correctAnswer: "A",
      hint: "One row of the table hands you the value of the function at an input of $0$.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** $f(0) = 17$ gives the constant, and one step of $x$ raises the output by $5$: $f(x) = 5x + 17$ — choice A.\n\n**The Full Solution:**\nStep 1: The table includes $x = 0$, so the constant term is read directly: $f(0) = 17$.\nStep 2: From $x = 0$ to $x = 1$ the output rises from $17$ to $22$, so the rate of change is $\\frac{22-17}{1-0} = 5$.\nStep 3: The equation is $f(x) = 5x + 17$. Check the last row: $5(2)+17 = 27$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($f(x) = 5x + 22$): uses the correct rate of change but takes $22$, the output at $x = 1$, as the constant term.\n* Choice C ($f(x) = 17x + 5$): finds both numbers correctly but puts them in the wrong slots, using $17$ as the rate of change and $5$ as the constant term.\n* Choice D ($f(x) = 22x + 17$): treats the output $22$ as a rate of change instead of computing the change in output over the change in input.\n\n**Test Day Takeaway:** A table row with $x = 0$ hands you the constant term for free; spend the effort on the rate of change and then verify on a row you did not use.",
      skills: ["table-to-equation", "slope-from-points"]
    },
    {
      id: 13,
      difficulty: "medium",
      question: "The table lists three pairs of values that satisfy a linear relationship between $x$ and $y$. Which equation represents this relationship?",
      diagram: { type: "table", params: { rows: [[1, 34], [4, 22], [7, 10]], xHeader: "x", yHeader: "y" } },
      choices: [
        { id: "A", text: "$y = -12x + 46$" },
        { id: "B", text: "$y = -4x + 34$" },
        { id: "C", text: "$y = -4x + 38$" },
        { id: "D", text: "$y = 4x + 30$" }
      ],
      correctAnswer: "C",
      hint: "The $x$-values jump by more than $1$ between rows, so the drop in $y$ is not the rate of change on its own.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** $y$ falls $12$ for every $3$ that $x$ rises, so $m = -4$; then $34 = -4(1)+b$ gives $b = 38$ — choice C.\n\n**The Full Solution:**\nStep 1: Rate of change from the first two rows: $m = \\frac{22-34}{4-1} = \\frac{-12}{3} = -4$.\nStep 2: Substitute $(1, 34)$ into $y = -4x + b$: $34 = -4 + b$, so $b = 38$.\nStep 3: The equation is $y = -4x + 38$. Check the last row: $-4(7)+38 = 10$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -12x + 46$): uses the $12$-unit drop between rows as the rate of change without dividing by the $3$-unit change in $x$; that then forces $b = 46$.\n* Choice B ($y = -4x + 34$): has the correct rate of change but takes $34$, the value of $y$ at $x = 1$, as the $y$-intercept.\n* Choice D ($y = 4x + 30$): makes the rate of change positive even though $y$ falls as $x$ rises; that then forces $b = 30$.\n\n**Test Day Takeaway:** Divide by the change in $x$ every time. When table inputs step by $3$, the raw drop in the output is three rate-of-change steps, not one.",
      skills: ["table-to-equation", "slope-from-points"]
    },
    {
      id: 14,
      difficulty: "medium",
      question: "For the linear function $g$, the table gives the value of $g(x)$ at three inputs. Which equation defines $g$?",
      diagram: { type: "table", params: { rows: [[2, 5], [5, 14], [8, 23]], xHeader: "x", yHeader: "g(x)" } },
      choices: [
        { id: "A", text: "$g(x) = 3x - 1$" },
        { id: "B", text: "$g(x) = 3x + 1$" },
        { id: "C", text: "$g(x) = 3x + 5$" },
        { id: "D", text: "$g(x) = 9x - 13$" }
      ],
      correctAnswer: "A",
      hint: "No row has an input of $0$, so the constant term has to be solved for rather than read.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~25s):** $m = \\frac{9}{3} = 3$, and $5 = 3(2)+b$ gives $b = -1$: $g(x) = 3x - 1$ — choice A.\n\n**The Full Solution:**\nStep 1: Rate of change: $m = \\frac{14-5}{5-2} = \\frac{9}{3} = 3$.\nStep 2: Substitute $(2, 5)$ into $g(x) = 3x + b$: $5 = 6 + b$, so $b = -1$.\nStep 3: The equation is $g(x) = 3x - 1$. Check the last row: $3(8)-1 = 23$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($g(x) = 3x + 1$): solves $5 = 6 + b$ but records $b$ as $+1$ instead of $-1$.\n* Choice C ($g(x) = 3x + 5$): has the correct rate of change but reads the output $5$ at $x = 2$ as the value at $x = 0$.\n* Choice D ($g(x) = 9x - 13$): uses the $9$-unit jump in the output as the rate of change without dividing by the $3$-unit jump in the input; anchoring that at $(2, 5)$ gives $-13$ as the constant.\n\n**Test Day Takeaway:** When the table skips the input $0$, find the rate of change first and substitute one full ordered pair — then test the equation on a different row.",
      skills: ["table-to-equation", "slope-from-points"]
    },
    {
      id: 15,
      difficulty: "hard",
      question: "For the linear function $f$, the table records three inputs and their corresponding outputs. If $f$ is defined by $f(x) = mx + b$, where $m$ and $b$ are constants, which equation defines $f$?",
      diagram: { type: "table", params: { rows: [["−6", 20], ["−2", 14], [6, 2]], xHeader: "x", yHeader: "f(x)" } },
      choices: [
        { id: "A", text: "$f(x) = -6x + 2$" },
        { id: "B", text: "$f(x) = -\\frac{3}{2}x + 11$" },
        { id: "C", text: "$f(x) = -\\frac{3}{2}x + 14$" },
        { id: "D", text: "$f(x) = \\frac{3}{2}x + 11$" }
      ],
      correctAnswer: "B",
      hint: "The inputs are unevenly spaced, so pick a pair and divide — do not read the drop between rows as the rate.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~35s):** $m = \\frac{14-20}{-2-(-6)} = -\\frac{3}{2}$, and $14 = -\\frac{3}{2}(-2)+b$ gives $b = 11$ — choice B.\n\n**The Full Solution:**\nStep 1: Rate of change from the first two rows: $m = \\frac{14-20}{-2-(-6)} = \\frac{-6}{4} = -\\frac{3}{2}$.\nStep 2: Substitute $(-2, 14)$: $14 = -\\frac{3}{2}(-2)+b = 3+b$, so $b = 11$.\nStep 3: The equation is $f(x) = -\\frac{3}{2}x + 11$. Check the last row: $-\\frac{3}{2}(6)+11 = -9+11 = 2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($f(x) = -6x + 2$): uses the $-6$ change in output between the first two rows as the rate of change; anchoring that at $(-2, 14)$ gives $2$ as the constant.\n* Choice C ($f(x) = -\\frac{3}{2}x + 14$): has the correct rate of change but takes $14$, the output at $x = -2$, as the value at $x = 0$.\n* Choice D ($f(x) = \\frac{3}{2}x + 11$): drops the negative sign on the rate of change even though the outputs fall as the inputs rise.\n\n**Test Day Takeaway:** Unevenly spaced inputs are the trap: the difference between consecutive outputs is a rate only after you divide by the difference between the inputs.",
      skills: ["table-to-equation", "slope-from-points"]
    },

    // === FROM FUNCTION NOTATION ===
    {
      id: 16,
      difficulty: "easy",
      question: "For the linear function $f$, $f(0) = 5$ and $f(1) = 12$. Which equation defines $f$?",
      choices: [
        { id: "A", text: "$f(x) = 5x + 7$" },
        { id: "B", text: "$f(x) = 7x + 5$" },
        { id: "C", text: "$f(x) = 7x + 12$" },
        { id: "D", text: "$f(x) = 12x + 5$" }
      ],
      correctAnswer: "B",
      hint: "An input of $0$ tells you one of the two constants outright; the other comes from the single step to the next input.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** $f(0) = 5$ is the constant, and $12 - 5 = 7$ is the rate of change: $f(x) = 7x + 5$ — choice B.\n\n**The Full Solution:**\nStep 1: Because $f(0) = 5$, the constant term of the equation is $5$.\nStep 2: Increasing the input by $1$ raises the output from $5$ to $12$, so the rate of change is $12 - 5 = 7$.\nStep 3: The equation is $f(x) = 7x + 5$. Check: $f(1) = 7+5 = 12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($f(x) = 5x + 7$): swaps the rate of change and the value at $0$.\n* Choice C ($f(x) = 7x + 12$): has the correct rate of change but uses $12$, the output at an input of $1$, as the constant term.\n* Choice D ($f(x) = 12x + 5$): treats the output $12$ as the rate of change rather than the difference $f(1)-f(0)$.\n\n**Test Day Takeaway:** With inputs one unit apart, the rate of change is just the difference of the outputs — no division needed, so the only real risk is mixing up which number is which.",
      skills: ["function-notation-to-equation", "slope-from-points"]
    },
    {
      id: 17,
      difficulty: "medium",
      question: "The function $f$ is linear, $f(3) = 11$, and $f(7) = 27$. What is the value of $f(0)$?",
      choices: [
        { id: "A", text: "$-37$" },
        { id: "B", text: "$-1$" },
        { id: "C", text: "$4$" },
        { id: "D", text: "$23$" }
      ],
      correctAnswer: "B",
      hint: "Moving from an input of $3$ down to an input of $0$ changes the output by three rate-of-change steps — in which direction?",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** $m = \\frac{27-11}{7-3} = 4$, and stepping back $3$ units from $f(3) = 11$ gives $11 - 12 = -1$ — choice B.\n\n**The Full Solution:**\nStep 1: Rate of change: $m = \\frac{27-11}{7-3} = \\frac{16}{4} = 4$.\nStep 2: Going from $x = 3$ to $x = 0$ decreases the input by $3$, so the output decreases by $4(3) = 12$.\nStep 3: Therefore $f(0) = 11 - 12 = -1$. Check with the full equation $f(x) = 4x - 1$: $f(7) = 28-1 = 27$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-37$): uses the $16$-unit change in output as the rate of change without dividing by the $4$-unit change in input: $11 - 16(3) = -37$.\n* Choice C ($4$): reports the rate of change, $4$, rather than the output at an input of $0$.\n* Choice D ($23$): moves in the wrong direction, adding three rate-of-change steps: $11 + 4(3) = 23$.\n\n**Test Day Takeaway:** Decide the direction of travel before you compute: moving toward a smaller input subtracts rate-of-change steps, and that sign error is the most common miss on this pattern.",
      skills: ["function-notation-to-equation", "slope-from-points", "slope-intercept-form"]
    },
    {
      id: 18,
      difficulty: "medium",
      question: "For the linear function $h$, $h(2) = -3$ and $h(6) = 13$. Which equation defines $h$?",
      choices: [
        { id: "A", text: "$h(x) = 16x - 35$" },
        { id: "B", text: "$h(x) = 4x - 11$" },
        { id: "C", text: "$h(x) = 4x - 3$" },
        { id: "D", text: "$h(x) = 4x + 11$" }
      ],
      correctAnswer: "B",
      hint: "Neither given input is $0$, so the constant term must come out of a substitution.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** $m = \\frac{16}{4} = 4$, and $-3 = 4(2)+b$ gives $b = -11$ — choice B.\n\n**The Full Solution:**\nStep 1: Rate of change: $m = \\frac{13-(-3)}{6-2} = \\frac{16}{4} = 4$.\nStep 2: Substitute $(2, -3)$ into $h(x) = 4x + b$: $-3 = 8 + b$, so $b = -11$.\nStep 3: The equation is $h(x) = 4x - 11$. Check: $h(6) = 24-11 = 13$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($h(x) = 16x - 35$): uses the $16$-unit change in output as the rate of change without dividing by the $4$-unit change in input; that forces $b = -35$.\n* Choice C ($h(x) = 4x - 3$): has the correct rate of change but reads $h(2) = -3$ as the value at an input of $0$.\n* Choice D ($h(x) = 4x + 11$): solves $-3 = 8 + b$ but reverses the sign of the result, recording $+11$.\n\n**Test Day Takeaway:** Isolating $b$ from $-3 = 8 + b$ means subtracting $8$ from a negative number. Write that arithmetic out — the sign slip there is what separates two of these choices.",
      skills: ["function-notation-to-equation", "slope-from-points"]
    },
    {
      id: 19,
      difficulty: "hard",
      question: "The function $g$ is linear, $g(-2) = 17$, and $g(4) = -1$. In the $xy$-plane, the graph of $y = g(x)$ is a line. What is the value of $x$ for which $g(x) = 5$?",
      choices: [
        { id: "A", text: "$-\\frac{16}{3}$" },
        { id: "B", text: "$-4$" },
        { id: "C", text: "$-2$" },
        { id: "D", text: "$2$" }
      ],
      correctAnswer: "D",
      hint: "Build the equation for $g$ first; the question then asks for an input, not an output.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~35s):** $m = \\frac{-1-17}{4-(-2)} = -3$ and $b = 11$, so $-3x + 11 = 5$ gives $x = 2$ — choice D.\n\n**The Full Solution:**\nStep 1: Rate of change: $m = \\frac{-1-17}{4-(-2)} = \\frac{-18}{6} = -3$.\nStep 2: Substitute $(4, -1)$ into $g(x) = -3x + b$: $-1 = -12 + b$, so $b = 11$ and $g(x) = -3x + 11$.\nStep 3: Solve $-3x + 11 = 5$: subtract $11$ to get $-3x = -6$, then divide by $-3$ to get $x = 2$.\nStep 4: Check: $g(2) = -6 + 11 = 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{16}{3}$): adds $11$ to both sides instead of subtracting it, solving $-3x = 16$.\n* Choice B ($-4$): computes $g(5) = -3(5)+11 = -4$ instead of solving $g(x) = 5$ — the input and the output are swapped.\n* Choice C ($-2$): reaches $-3x = -6$ but divides without tracking the two negatives, reporting $x = -2$.\n\n**Test Day Takeaway:** The phrase 'the value of $x$ for which $g(x) = 5$' asks for an input. Substituting $5$ for $x$ answers a different question, and that answer is always among the choices.",
      skills: ["function-notation-to-equation", "slope-from-points", "solving-linear-equations"]
    },
    {
      id: 20,
      difficulty: "hard",
      question: "The linear function $f$ satisfies $f(-3) = 20$ and $f(5) = -4$. In the $xy$-plane, the graph of $y = f(x)$ has a $y$-intercept at $(0, b)$, where $b$ is a constant. What is the value of $b$?",
      choices: [
        { id: "A", text: "$-3$" },
        { id: "B", text: "$11$" },
        { id: "C", text: "$20$" },
        { id: "D", text: "$29$" }
      ],
      correctAnswer: "B",
      hint: "Substituting a negative input into a negative rate of change produces a positive product — write the multiplication out.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** $m = \\frac{-4-20}{5-(-3)} = -3$, and $20 = -3(-3)+b$ gives $b = 11$ — choice B.\n\n**The Full Solution:**\nStep 1: Rate of change: $m = \\frac{-4-20}{5-(-3)} = \\frac{-24}{8} = -3$.\nStep 2: Substitute $(-3, 20)$ into $y = -3x + b$: $20 = -3(-3)+b = 9+b$, so $b = 11$.\nStep 3: The $y$-intercept is $(0, 11)$. Check the other value: $f(5) = -3(5)+11 = -4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): reports the rate of change, $-3$, instead of the $y$-coordinate of the $y$-intercept.\n* Choice C ($20$): reports $f(-3) = 20$, the output at $x = -3$ rather than at $x = 0$.\n* Choice D ($29$): evaluates $-3(-3)$ as $-9$, turning $20 = -9 + b$ into $b = 29$.\n\n**Test Day Takeaway:** The $y$-intercept is the output at $x = 0$, never an output listed in the stem. Get there by substituting a full ordered pair and watching the sign of the product.",
      skills: ["function-notation-to-equation", "slope-from-points", "slope-intercept-form"]
    }
  ],

  // Section: Parallel Lines (covers videos 13-21)
  // Types: Find slope of parallel line, Write equation through point, No solution systems, Find constant for no solution
  "Parallel Lines": [
    // === TYPE 1: Find slope of parallel line (SAT style) ===
    {
      id: 1,
      difficulty: "easy",
      question: "$f(x) = 6x - 11$\n\nThe function $f$ is defined by the given equation. In the $xy$-plane, the graph of $y = f(x)$ is a line, and line $p$ is parallel to that line. What is the slope of line $p$?",
      choices: [
        { id: "A", text: "$-11$" },
        { id: "B", text: "$-6$" },
        { id: "C", text: "$-\\frac{1}{6}$" },
        { id: "D", text: "$6$" }
      ],
      correctAnswer: "D",
      hint: "The equation is already solved for the output, so no rearranging is needed before you read the rate of change.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~10s):** The graph of $y = 6x - 11$ has slope $6$, and parallel lines have equal slopes — choice D.\n\n**The Full Solution:**\nStep 1: The equation $y = 6x - 11$ is in slope-intercept form, so the graph of $y = f(x)$ has slope $6$ and $y$-intercept $-11$.\nStep 2: Two distinct lines in the $xy$-plane are parallel exactly when their slopes are equal.\nStep 3: Therefore line $p$ has slope $6$. Check: any other slope would eventually meet the graph of $f$, so the lines could not be parallel. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-11$): reports $-11$, the $y$-intercept of the graph of $f$, rather than its slope.\n* Choice B ($-6$): negates the slope; parallel lines have equal slopes, not opposite ones.\n* Choice C ($-\\frac{1}{6}$): gives the negative reciprocal, which is the slope of a line perpendicular to the graph of $f$.\n\n**Test Day Takeaway:** Parallel means equal slopes — nothing is flipped and nothing changes sign. Confirm which number in $y = mx + b$ is the slope before you answer.",
      skills: ["parallel-line-slope"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "In the $xy$-plane, the graph of $g(x) = -\\frac{3}{4}x + 5$ is a line. Line $k$ is parallel to this line. What is the slope of line $k$?",
      choices: [
        { id: "A", text: "$-\\frac{4}{3}$" },
        { id: "B", text: "$-\\frac{3}{4}$" },
        { id: "C", text: "$\\frac{3}{4}$" },
        { id: "D", text: "$\\frac{4}{3}$" }
      ],
      correctAnswer: "B",
      hint: "Copy the coefficient of $x$ exactly as it stands — sign included.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Parallel lines share a slope, and the coefficient of $x$ here is $-\\frac{3}{4}$ — choice B.\n\n**The Full Solution:**\nStep 1: The equation is already in slope-intercept form, so the slope of the graph of $g$ is $-\\frac{3}{4}$.\nStep 2: Parallel lines have equal slopes.\nStep 3: Line $k$ therefore has slope $-\\frac{3}{4}$. Check the direction: a negative slope falls left to right, and any parallel line must fall at the same steepness. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{4}{3}$): flips the fraction while keeping the sign; parallel lines require no flip at all.\n* Choice C ($\\frac{3}{4}$): keeps the fraction but drops the negative sign, describing a line that rises rather than falls.\n* Choice D ($\\frac{4}{3}$): gives the negative reciprocal, the slope of a perpendicular line.\n\n**Test Day Takeaway:** Fraction slopes invite two reflexes that do not belong here — flipping and negating. Parallel means copy the coefficient exactly.",
      skills: ["parallel-line-slope"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In the $xy$-plane, line $m$ is parallel to the graph of $4x + 10y = 25$. What is the slope of line $m$?",
      choices: [
        { id: "A", text: "$-\\frac{5}{2}$" },
        { id: "B", text: "$-\\frac{2}{5}$" },
        { id: "C", text: "$\\frac{2}{5}$" },
        { id: "D", text: "$\\frac{5}{2}$" }
      ],
      correctAnswer: "B",
      hint: "The equation is not in slope-intercept form yet; isolate $y$ before you read anything off.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** Solving for $y$ gives $y = -\\frac{2}{5}x + \\frac{5}{2}$, so the shared slope is $-\\frac{2}{5}$ — choice B.\n\n**The Full Solution:**\nStep 1: Isolate the $y$-term: $10y = -4x + 25$.\nStep 2: Divide every term by $10$: $y = -\\frac{4}{10}x + \\frac{25}{10} = -\\frac{2}{5}x + \\frac{5}{2}$, so the slope is $-\\frac{2}{5}$.\nStep 3: Parallel lines have equal slopes, so line $m$ has slope $-\\frac{2}{5}$. Check with a point: $\\left(5, \\frac{1}{2}\\right)$ satisfies $4(5)+10\\left(\\frac{1}{2}\\right)=25$ and $-\\frac{2}{5}(5)+\\frac{5}{2}=\\frac{1}{2}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{5}{2}$): flips the fraction, reporting the change in $x$ over the change in $y$.\n* Choice C ($\\frac{2}{5}$): loses the negative sign; moving $4x$ across the equals sign makes the coefficient negative.\n* Choice D ($\\frac{5}{2}$): reports the negative reciprocal, which belongs to a perpendicular line.\n\n**Test Day Takeaway:** From $Ax + By = C$ the slope is $-\\frac{A}{B}$ — the minus sign comes from moving $Ax$ across, and it is the step most often skipped.",
      skills: ["parallel-line-slope"]
    },

    // === TYPE 2: Write equation through point parallel to given line ===
    {
      id: 4,
      difficulty: "easy",
      question: "In the $xy$-plane, line $t$ passes through the point $(0, -7)$ and is parallel to the graph of $y = 9x + 4$. Which equation represents line $t$?",
      choices: [
        { id: "A", text: "$y = 9x - 7$" },
        { id: "B", text: "$y = 9x + 4$" },
        { id: "C", text: "$y = -7x + 9$" },
        { id: "D", text: "$y = -\\frac{1}{9}x - 7$" }
      ],
      correctAnswer: "A",
      hint: "The given point sits on the $y$-axis, so it names one of the two constants outright.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Parallel forces slope $9$, and $(0, -7)$ is the $y$-intercept: $y = 9x - 7$ — choice A.\n\n**The Full Solution:**\nStep 1: Parallel lines have equal slopes, so line $t$ has slope $9$.\nStep 2: The point $(0, -7)$ has $x$-coordinate $0$, so it is the $y$-intercept and $b = -7$.\nStep 3: The equation is $y = 9x - 7$. Check: substituting $x = 0$ gives $y = -7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = 9x + 4$): has the correct slope but is the given line itself, which passes through $(0, 4)$ rather than $(0, -7)$.\n* Choice C ($y = -7x + 9$): swaps the slope and the $y$-intercept.\n* Choice D ($y = -\\frac{1}{9}x - 7$): uses the negative reciprocal, $-\\frac{1}{9}$, giving a line perpendicular to the given one.\n\n**Test Day Takeaway:** A point whose $x$-coordinate is $0$ is the $y$-intercept — recognize it and the equation is finished in one step.",
      skills: ["parallel-line-slope", "writing-parallel-equation"]
    },
    {
      id: 5,
      difficulty: "medium",
      question: "Line $n$ passes through the point $(6, 5)$ and is parallel to the graph of $y = -2x + 9$ in the $xy$-plane. Which equation represents line $n$?",
      choices: [
        { id: "A", text: "$y = -2x - 7$" },
        { id: "B", text: "$y = -2x + 5$" },
        { id: "C", text: "$y = -2x + 17$" },
        { id: "D", text: "$y = \\frac{1}{2}x + 2$" }
      ],
      correctAnswer: "C",
      hint: "Copy the slope, then let the given point determine the constant.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~20s):** Slope $-2$, and $5 = -2(6)+b$ gives $b = 17$: $y = -2x + 17$ — choice C.\n\n**The Full Solution:**\nStep 1: Parallel lines have equal slopes, so line $n$ has slope $-2$.\nStep 2: Substitute $(6, 5)$ into $y = -2x + b$: $5 = -12 + b$, so $b = 17$.\nStep 3: The equation is $y = -2x + 17$. Check the point: $-2(6)+17 = 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -2x - 7$): computes $b = 5 - 12$ instead of $5 + 12$, reversing the sign when moving $-12$ across the equals sign.\n* Choice B ($y = -2x + 5$): uses the $y$-coordinate of the given point as the constant; the value $5$ occurs at $x = 6$, not at $x = 0$.\n* Choice D ($y = \\frac{1}{2}x + 2$): uses the negative reciprocal slope, $\\frac{1}{2}$, which produces the perpendicular line through the same point.\n\n**Test Day Takeaway:** After substituting a point, isolate $b$ by adding the opposite of the product — that single step is where the two look-alike choices split.",
      skills: ["parallel-line-slope", "writing-parallel-equation"]
    },
    {
      id: 6,
      difficulty: "medium",
      question: "In the $xy$-plane, line $q$ is parallel to the graph of $2x - 3y = 12$ and passes through the point $(6, 1)$. Which equation represents line $q$?",
      choices: [
        { id: "A", text: "$y = -\\frac{3}{2}x + 10$" },
        { id: "B", text: "$y = -\\frac{2}{3}x + 5$" },
        { id: "C", text: "$y = \\frac{2}{3}x - 3$" },
        { id: "D", text: "$y = \\frac{2}{3}x + 1$" }
      ],
      correctAnswer: "C",
      hint: "Dividing by a negative coefficient changes the sign of every term — do that before deciding the slope.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** $2x - 3y = 12$ gives $y = \\frac{2}{3}x - 4$, so the slope is $\\frac{2}{3}$; then $1 = 4 + b$ gives $b = -3$ — choice C.\n\n**The Full Solution:**\nStep 1: Solve the given equation for $y$: $-3y = -2x + 12$, and dividing by $-3$ gives $y = \\frac{2}{3}x - 4$. The slope is $\\frac{2}{3}$.\nStep 2: Line $q$ has the same slope. Substitute $(6, 1)$: $1 = \\frac{2}{3}(6)+b = 4+b$, so $b = -3$.\nStep 3: The equation is $y = \\frac{2}{3}x - 3$. Check: $\\frac{2}{3}(6)-3 = 4-3 = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -\\frac{3}{2}x + 10$): uses the negative reciprocal, $-\\frac{3}{2}$, giving the perpendicular line through the point.\n* Choice B ($y = -\\frac{2}{3}x + 5$): reads the slope as $-\\frac{2}{3}$, forgetting that dividing by $-3$ flips the sign of $-2x$; that then forces $b = 5$.\n* Choice D ($y = \\frac{2}{3}x + 1$): has the correct slope but takes the $y$-coordinate $1$ as the constant instead of solving for it.\n\n**Test Day Takeaway:** When the $y$-coefficient is negative, the slope's sign flips during the division. Rearrange fully, then anchor the parallel line with the given point.",
      skills: ["parallel-line-slope", "writing-parallel-equation"]
    },

    // === TYPE 3: System with no solution - identify parallel equation ===
    {
      id: 7,
      difficulty: "medium",
      question: "$y = 7x - 3$\n\nThe given equation is one of the two equations in a system of linear equations in the $xy$-plane. The system has no solution. Which equation could be the other equation in the system?",
      choices: [
        { id: "A", text: "$y = -7x - 3$" },
        { id: "B", text: "$y = 7x + 5$" },
        { id: "C", text: "$y = 7x - 3$" },
        { id: "D", text: "$y = -\\frac{1}{7}x - 3$" }
      ],
      correctAnswer: "B",
      hint: "Picture the graphs: no solution means the two lines never meet, and there is only one way that happens.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** No solution means parallel but distinct: same slope $7$, different constant — choice B.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has no solution exactly when the graphs are parallel and distinct.\nStep 2: Parallel requires the same slope, $7$, which eliminates the choices with slopes $-7$ and $-\\frac{1}{7}$.\nStep 3: Distinct requires a different $y$-intercept, so $y = 7x + 5$ works. Check: $7x - 3 = 7x + 5$ reduces to $-3 = 5$, which is never true, so the system has no solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -7x - 3$): changes the slope, so the two lines cross once and the system has exactly one solution.\n* Choice C ($y = 7x - 3$): repeats the given equation; identical lines share every point, so the system has infinitely many solutions rather than none.\n* Choice D ($y = -\\frac{1}{7}x - 3$): uses the negative reciprocal slope, giving perpendicular lines that meet at exactly one point.\n\n**Test Day Takeaway:** No solution needs both conditions: equal slopes and unequal intercepts. The same-equation choice satisfies only the first and is the standard trap.",
      skills: ["parallel-line-slope", "system-no-solution"]
    },
    {
      id: 8,
      difficulty: "medium",
      question: "$4x + y = 9$\n\nOne equation in a system of two linear equations is given. If the system has no solution, which of the following could be the second equation in the system?",
      choices: [
        { id: "A", text: "$x + 4y = 9$" },
        { id: "B", text: "$4x - y = 9$" },
        { id: "C", text: "$8x + 2y = 18$" },
        { id: "D", text: "$8x + 2y = 30$" }
      ],
      correctAnswer: "D",
      hint: "Rewrite each candidate in slope-intercept form; two of them differ from the given line only in appearance.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~30s):** $8x + 2y = 30$ is $y = -4x + 15$: the same slope as $y = -4x + 9$ but a different intercept — choice D.\n\n**The Full Solution:**\nStep 1: Solve the given equation for $y$: $y = -4x + 9$, so its slope is $-4$ and its $y$-intercept is $9$.\nStep 2: No solution requires a second line with slope $-4$ and a different $y$-intercept. Rewrite the candidate: $8x + 2y = 30$ gives $2y = -8x + 30$, so $y = -4x + 15$.\nStep 3: The slopes match and the intercepts differ, so the lines are parallel and distinct. Check by elimination: doubling the given equation gives $8x + 2y = 18$, and $18 \\neq 30$, so no pair $(x, y)$ satisfies both. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x + 4y = 9$): swaps the coefficients, giving slope $-\\frac{1}{4}$ instead of $-4$, so the lines cross once.\n* Choice B ($4x - y = 9$): changes the sign on $y$, giving slope $4$; the two lines then intersect at a single point.\n* Choice C ($8x + 2y = 18$): is exactly twice the given equation, so it is the same line and the system has infinitely many solutions.\n\n**Test Day Takeaway:** In standard form, proportional coefficients with a proportional constant means one line; proportional coefficients with a non-proportional constant means no solution.",
      skills: ["parallel-line-slope", "system-no-solution"]
    },

    // === TYPE 4: Find constant p for no solution (single equation) ===
    {
      id: 9,
      difficulty: "hard",
      question: "$9x - 45px = 27$\n\nIn the given equation, $p$ is a constant. The equation has no solution. What is the value of $p$?",
      choices: [
        { id: "A", text: "$-\\frac{2}{5}$" },
        { id: "B", text: "$-\\frac{1}{5}$" },
        { id: "C", text: "$\\frac{1}{5}$" },
        { id: "D", text: "$5$" }
      ],
      correctAnswer: "C",
      hint: "Factor $x$ out of the left side first; a linear equation loses its solution only when something on the left disappears.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** Factoring gives $(9 - 45p)x = 27$; no solution requires $9 - 45p = 0$, so $p = \\frac{1}{5}$ — choice C.\n\n**The Full Solution:**\nStep 1: Combine the terms on the left: $9x - 45px = (9 - 45p)x$, so the equation is $(9 - 45p)x = 27$.\nStep 2: An equation of the form $kx = 27$ has no solution exactly when $k = 0$, because $0 = 27$ is never true. Set $9 - 45p = 0$.\nStep 3: Solve: $45p = 9$, so $p = \\frac{9}{45} = \\frac{1}{5}$.\nStep 4: Check: at $p = \\frac{1}{5}$ the left side is $9x - 9x = 0$, and $0 = 27$ has no solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{2}{5}$): sets the coefficient equal to the right-hand side, solving $9 - 45p = 27$ and getting $-\\frac{2}{5}$.\n* Choice B ($-\\frac{1}{5}$): reaches $-45p = -9$ but divides without tracking the two negatives, reporting $-\\frac{1}{5}$.\n* Choice D ($5$): divides $45$ by $9$ instead of $9$ by $45$.\n\n**Test Day Takeaway:** For a one-variable linear equation, no solution means the variable vanishes and a false numerical statement remains. Set the coefficient of $x$ to $0$, never to the constant on the right.",
      skills: ["parallel-line-slope", "no-solution-equation"]
    },
    {
      id: 10,
      difficulty: "hard",
      question: "$2(3x - 7) = ax + 14$\n\nIn the given equation, $a$ is a constant. If the equation has no solution, what is the value of $a$?",
      choices: [
        { id: "A", text: "$-6$" },
        { id: "B", text: "$2$" },
        { id: "C", text: "$3$" },
        { id: "D", text: "$6$" }
      ],
      correctAnswer: "D",
      hint: "Distribute before you compare anything; the coefficient of $x$ on the left is not visible yet.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~30s):** Distributing gives $6x - 14 = ax + 14$; the $x$-terms must match while the constants do not, so $a = 6$ — choice D.\n\n**The Full Solution:**\nStep 1: Distribute the $2$: $6x - 14 = ax + 14$.\nStep 2: Gather the $x$-terms on one side: $(6 - a)x = 28$.\nStep 3: No solution requires the coefficient of $x$ to be $0$ while the constant is not, so $6 - a = 0$ and $a = 6$.\nStep 4: Check: at $a = 6$ the equation reduces to $-14 = 14$, which is never true. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): solves $6 - a = 0$ but records the opposite sign; substituting $a = -6$ leaves $12x = 28$, which has a solution.\n* Choice B ($2$): reads the multiplier outside the parentheses, $2$, as the coefficient of $x$ on the left.\n* Choice C ($3$): reads the coefficient inside the parentheses, $3$, without distributing the $2$ across it.\n\n**Test Day Takeaway:** Distribute first, then match coefficients. An equation with no solution is one where both sides change at the same rate but start from different places.",
      skills: ["parallel-line-slope", "no-solution-equation"]
    },

    // === TYPE 5: Find constant for no solution in system (advanced) ===
    {
      id: 11,
      difficulty: "hard",
      question: "$5x + 2y = 8$\n$ry = 15 - 10x$\n\nIn the given system of two linear equations, $r$ is a constant. If the system has no solution, what is the value of $r$?",
      choices: [
        { id: "A", text: "$-4$" },
        { id: "B", text: "$1$" },
        { id: "C", text: "$2$" },
        { id: "D", text: "$4$" }
      ],
      correctAnswer: "D",
      hint: "Put the second equation in the same arrangement as the first before you compare coefficients.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~40s):** Rewritten, the second equation is $10x + ry = 15$; its $x$-coefficient is twice the first equation's, so $r$ must be twice $2$ — choice D.\n\n**The Full Solution:**\nStep 1: Rearrange the second equation into standard form: $10x + ry = 15$.\nStep 2: Two linear equations have no solution when one equation's variable coefficients are a common multiple of the other's while the constants are not in that same ratio. Here $10 = 2(5)$, so the multiplier is $2$.\nStep 3: Matching the $y$-coefficients under that multiplier gives $r = 2(2) = 4$.\nStep 4: Check: with $r = 4$ the system is $5x + 2y = 8$ and $10x + 4y = 15$. Doubling the first gives $10x + 4y = 16$, and $16 \\neq 15$, so the lines are parallel and distinct. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): equates the slopes with a sign error, solving $-\\frac{10}{r} = \\frac{5}{2}$ instead of $-\\frac{10}{r} = -\\frac{5}{2}$.\n* Choice B ($1$): sets up the proportion upside down, $\\frac{2}{r} = \\frac{10}{5}$, rather than $\\frac{2}{r} = \\frac{5}{10}$.\n* Choice C ($2$): copies the first equation's $y$-coefficient, ignoring that the $x$-coefficients differ by a factor of $2$.\n\n**Test Day Takeaway:** Rearrange both equations into the same form, find the multiplier from a coefficient pair you can see, and apply that one multiplier to every coefficient.",
      skills: ["parallel-line-slope", "system-no-solution", "algebraic-manipulation"]
    },
    {
      id: 12,
      difficulty: "hard",
      question: "$\\frac{3}{4}x + \\frac{1}{2}y = 6$\n$y = kx - 7$\n\nIn the given system of two linear equations, $k$ is a constant. If the system has no solution, what is the value of $k$?",
      choices: [
        { id: "A", text: "$-\\frac{3}{2}$" },
        { id: "B", text: "$-\\frac{3}{4}$" },
        { id: "C", text: "$\\frac{2}{3}$" },
        { id: "D", text: "$\\frac{3}{2}$" }
      ],
      correctAnswer: "A",
      hint: "The second equation is already solved for $y$; put the first one in that same form so the two slopes can be compared directly.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~40s):** The first equation is $y = 12 - \\frac{3}{2}x$, so parallel and distinct requires $k = -\\frac{3}{2}$ — choice A.\n\n**The Full Solution:**\nStep 1: Solve the first equation for $y$: $\\frac{1}{2}y = 6 - \\frac{3}{4}x$, and multiplying through by $2$ gives $y = 12 - \\frac{3}{2}x$.\nStep 2: No solution means the graphs are parallel and distinct, so the slopes must be equal: $k = -\\frac{3}{2}$.\nStep 3: Confirm the lines are distinct: their $y$-intercepts are $12$ and $-7$, which differ, so the lines never meet.\nStep 4: Check by substitution: $12 - \\frac{3}{2}x = -\\frac{3}{2}x - 7$ reduces to $12 = -7$, which is never true. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{3}{4}$): moves $\\frac{3}{4}x$ across the equals sign correctly but never divides by the $\\frac{1}{2}$ attached to $y$, so the slope comes out half its true size.\n* Choice C ($\\frac{2}{3}$): uses the negative reciprocal, which makes the lines perpendicular — they would then meet at exactly one point.\n* Choice D ($\\frac{3}{2}$): drops the negative sign that appears when $\\frac{3}{4}x$ moves to the other side of the equation.\n\n**Test Day Takeaway:** Fractional coefficients hide the slope. Clear the fraction on $y$ first — the slope is the coefficient of $x$ only after $y$ stands alone with coefficient $1$.",
      skills: ["parallel-line-slope", "system-no-solution", "algebraic-manipulation"]
    }
  ],

  // Section: Perpendicular Lines (covers videos 23-24)
  "Perpendicular Lines": [
    {
      id: 1,
      difficulty: "easy",
      question: "Line $c$ is represented by the equation $y = 5x - 8$ in the $xy$-plane. What is the slope of any line perpendicular to line $c$?",
      choices: [
        { id: "A", text: "$-5$" },
        { id: "B", text: "$-\\frac{1}{5}$" },
        { id: "C", text: "$\\frac{1}{5}$" },
        { id: "D", text: "$5$" }
      ],
      correctAnswer: "B",
      hint: "Two moves are required, not one: the fraction turns over and the sign changes.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** Perpendicular slopes multiply to $-1$, so the slope is $-\\frac{1}{5}$ — choice B.\n\n**The Full Solution:**\nStep 1: In the form $y = 5x - 8$, line $c$ has slope $5$.\nStep 2: Perpendicular slopes are negative reciprocals: write $5$ as $\\frac{5}{1}$, flip it to $\\frac{1}{5}$, and change the sign to $-\\frac{1}{5}$.\nStep 3: Check the defining relationship: $5\\left(-\\frac{1}{5}\\right) = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): changes the sign without flipping: $5(-5) = -25$, not $-1$.\n* Choice C ($\\frac{1}{5}$): flips without changing the sign: $5\\left(\\frac{1}{5}\\right) = 1$, not $-1$.\n* Choice D ($5$): repeats the slope of line $c$, which describes a parallel line.\n\n**Test Day Takeaway:** Verify a perpendicular slope by multiplying: the product with the original slope must be exactly $-1$, which catches a missed flip or a missed sign in one step.",
      skills: ["perpendicular-negative-reciprocal"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "In the $xy$-plane, which of the following equations represents a line perpendicular to the graph of $y = -\\frac{2}{7}x + 4$?",
      choices: [
        { id: "A", text: "$y = -\\frac{7}{2}x + 4$" },
        { id: "B", text: "$y = -\\frac{2}{7}x - 4$" },
        { id: "C", text: "$y = \\frac{2}{7}x + 4$" },
        { id: "D", text: "$y = \\frac{7}{2}x - 1$" }
      ],
      correctAnswer: "D",
      hint: "Work out the required slope first, then scan the choices for it and ignore the constants entirely.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~15s):** The negative reciprocal of $-\\frac{2}{7}$ is $\\frac{7}{2}$, and only one choice has that slope — choice D.\n\n**The Full Solution:**\nStep 1: The given line has slope $-\\frac{2}{7}$.\nStep 2: Flip the fraction to get $\\frac{7}{2}$, then reverse the sign; reversing the sign of a negative gives a positive, so the required slope is $\\frac{7}{2}$.\nStep 3: Only $y = \\frac{7}{2}x - 1$ has that slope. Check: $-\\frac{2}{7}\\left(\\frac{7}{2}\\right) = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -\\frac{7}{2}x + 4$): flips the fraction but keeps it negative: $-\\frac{2}{7}\\left(-\\frac{7}{2}\\right) = 1$, not $-1$.\n* Choice B ($y = -\\frac{2}{7}x - 4$): has the same slope as the given line, so it is parallel rather than perpendicular.\n* Choice C ($y = \\frac{2}{7}x + 4$): reverses the sign without flipping: $-\\frac{2}{7}\\left(\\frac{2}{7}\\right) = -\\frac{4}{49}$.\n\n**Test Day Takeaway:** When the original slope is negative, the perpendicular slope is positive — the two sign changes cancel. Confirm with the product test rather than trusting the reflex.",
      skills: ["perpendicular-negative-reciprocal"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In the $xy$-plane, line $w$ passes through the point $(10, 3)$ and is perpendicular to the graph of $y = -\\frac{5}{2}x + 1$. Which equation represents line $w$?",
      choices: [
        { id: "A", text: "$y = -\\frac{5}{2}x + 28$" },
        { id: "B", text: "$y = -\\frac{2}{5}x + 7$" },
        { id: "C", text: "$y = \\frac{2}{5}x - 1$" },
        { id: "D", text: "$y = \\frac{5}{2}x - 22$" }
      ],
      correctAnswer: "C",
      hint: "Settle the slope completely before the point comes into play — a wrong slope produces a wrong constant as well.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** The perpendicular slope is $\\frac{2}{5}$, and $3 = \\frac{2}{5}(10)+b$ gives $b = -1$ — choice C.\n\n**The Full Solution:**\nStep 1: The given line has slope $-\\frac{5}{2}$, so line $w$ has slope $\\frac{2}{5}$, its negative reciprocal.\nStep 2: Substitute $(10, 3)$ into $y = \\frac{2}{5}x + b$: $3 = 4 + b$, so $b = -1$.\nStep 3: The equation is $y = \\frac{2}{5}x - 1$. Check both conditions: $\\frac{2}{5}(10)-1 = 3$, and $-\\frac{5}{2}\\left(\\frac{2}{5}\\right) = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -\\frac{5}{2}x + 28$): keeps the slope of the given line, producing the parallel line through the point instead of the perpendicular one.\n* Choice B ($y = -\\frac{2}{5}x + 7$): flips the fraction but keeps the negative sign; anchoring $-\\frac{2}{5}$ at $(10, 3)$ then gives $b = 7$.\n* Choice D ($y = \\frac{5}{2}x - 22$): changes the sign without flipping; anchoring $\\frac{5}{2}$ at $(10, 3)$ then gives $b = -22$.\n\n**Test Day Takeaway:** Each wrong version of the slope carries its own constant, so all four choices look like real work. Check the finished line against both requirements: it contains the point and its slope times the original is $-1$.",
      skills: ["perpendicular-negative-reciprocal", "writing-perpendicular-equation"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "Line $u$ is perpendicular to the graph of $6x - 15y = 45$ in the $xy$-plane. What is the slope of line $u$?",
      choices: [
        { id: "A", text: "$-\\frac{5}{2}$" },
        { id: "B", text: "$-\\frac{2}{5}$" },
        { id: "C", text: "$\\frac{2}{5}$" },
        { id: "D", text: "$\\frac{5}{2}$" }
      ],
      correctAnswer: "A",
      hint: "Two steps stand between the printed equation and the answer: rearrange, then take the negative reciprocal.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~25s):** Solving gives $y = \\frac{2}{5}x - 3$, so the perpendicular slope is $-\\frac{5}{2}$ — choice A.\n\n**The Full Solution:**\nStep 1: Isolate the $y$-term: $-15y = -6x + 45$.\nStep 2: Divide by $-15$: $y = \\frac{6}{15}x - 3 = \\frac{2}{5}x - 3$, so the given line has slope $\\frac{2}{5}$.\nStep 3: Take the negative reciprocal: $-\\frac{5}{2}$. Check: $\\frac{2}{5}\\left(-\\frac{5}{2}\\right) = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{2}{5}$): changes the sign of the given slope without flipping the fraction.\n* Choice C ($\\frac{2}{5}$): reports the slope of the given line itself, which describes a parallel line.\n* Choice D ($\\frac{5}{2}$): flips the given slope without changing its sign.\n\n**Test Day Takeaway:** Dividing by a negative $y$-coefficient makes the slope positive here — finish the rearrangement before applying the perpendicular rule, or both steps go wrong at once.",
      skills: ["perpendicular-negative-reciprocal"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In the $xy$-plane, line $j$ passes through the points $(-4, 9)$ and $(8, 6)$. Line $k$ is perpendicular to line $j$ and passes through the point $(2, -3)$. What is the $y$-coordinate of the $y$-intercept of line $k$?",
      choices: [
        { id: "A", text: "$-11$" },
        { id: "B", text: "$-3$" },
        { id: "C", text: "$-\\frac{5}{2}$" },
        { id: "D", text: "$5$" }
      ],
      correctAnswer: "A",
      hint: "Three moves in order: the slope of line $j$, the perpendicular slope, then the constant from the point on line $k$.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~40s):** Line $j$ has slope $-\\frac{1}{4}$, so line $k$ has slope $4$; then $-3 = 4(2)+b$ gives $b = -11$ — choice A.\n\n**The Full Solution:**\nStep 1: Slope of line $j$: $m = \\frac{6-9}{8-(-4)} = \\frac{-3}{12} = -\\frac{1}{4}$.\nStep 2: Line $k$ is perpendicular, so its slope is the negative reciprocal of $-\\frac{1}{4}$, which is $4$.\nStep 3: Substitute $(2, -3)$ into $y = 4x + b$: $-3 = 8 + b$, so $b = -11$.\nStep 4: Check: $y = 4x - 11$ passes through $(2, -3)$ because $8 - 11 = -3$, and $-\\frac{1}{4}(4) = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-3$): reports the $y$-coordinate of the given point $(2, -3)$; that value occurs at $x = 2$, not at $x = 0$.\n* Choice C ($-\\frac{5}{2}$): uses the slope of line $j$ itself, $-\\frac{1}{4}$; anchoring that at $(2, -3)$ gives $-\\frac{5}{2}$, the intercept of the line parallel to $j$ rather than perpendicular to it.\n* Choice D ($5$): computes $-3 + 8$ instead of $-3 - 8$ when isolating $b$.\n\n**Test Day Takeaway:** A three-step chain gives three places to stop early, and each stopping point is one of the choices. Finish with a line that satisfies every condition in the stem.",
      skills: ["slope-from-points", "perpendicular-negative-reciprocal", "writing-perpendicular-equation"]
    }
  ]
};
