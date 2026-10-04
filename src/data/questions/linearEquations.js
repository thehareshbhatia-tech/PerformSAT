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
      question: "A gym charges a one-time fee of \\$40 plus \\$18 per month. Which equation represents this situation, where $A$ is the total amount, in dollars, paid for $m$ months?",
      choices: [
        { id: "A", text: "$A = 18m + 40$" },
        // distractor: swaps the two amounts, charging \$40 every month and \$18 once
        { id: "B", text: "$A = 40m + 18$" },
        // distractor: adds the two amounts before multiplying, so the one-time fee is charged every month
        { id: "C", text: "$A = 58m$" },
        // distractor: subtracts the one-time fee instead of adding it
        { id: "D", text: "$A = 18m - 40$" }
      ],
      correctAnswer: "A",
      hint: "One of the two amounts is charged every month and the other is charged only once.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** The \\$18 is paid every month, so it multiplies $m$; the \\$40 is paid once, so it is the constant: $A = 18m + 40$.\n\n**The Full Solution:**\nStep 1: For $m$ months at \\$18 per month, the monthly charges total $18m$ dollars.\nStep 2: The one-time fee is paid once no matter how many months are paid, so it adds a constant $40$.\nStep 3: Combine the two: $A = 18m + 40$. Check: for $m = 3$, $18(3) + 40 = 94$, which is the \\$40 fee plus three monthly charges of \\$18 ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($A = 40m + 18$): swaps the two amounts, so the \\$40 fee would be charged every month and the \\$18 only once.\n* Choice C ($A = 58m$): adds the two amounts first, which charges the one-time fee again every month.\n* Choice D ($A = 18m - 40$): subtracts the fee; a fee adds to the total paid, so it must be added.\n\n**Test Day Takeaway:** The amount charged per unit multiplies the variable, and the one-time amount is the constant term. Test a small value such as $m = 3$ to confirm the two are not swapped.",
      skills: ["word-problem-to-equation", "slope-intercept-form"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "A plant is $5$ centimeters tall and grows $2$ centimeters each week. Which equation gives the plant's height $h$, in centimeters, after $w$ weeks?",
      choices: [
        // distractor: leaves out the starting height of 5 centimeters
        { id: "A", text: "$h = 2w$" },
        { id: "B", text: "$h = 2w + 5$" },
        // distractor: subtracts the weekly growth, as though the plant were getting shorter
        { id: "C", text: "$h = 5 - 2w$" },
        // distractor: swaps the starting height and the weekly growth
        { id: "D", text: "$h = 5w + 2$" }
      ],
      correctAnswer: "B",
      hint: "At $w = 0$ the plant already has a height, and the equation has to produce it.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** The plant starts at $5$ centimeters and adds $2$ centimeters per week, so $h = 2w + 5$.\n\n**The Full Solution:**\nStep 1: The plant grows $2$ centimeters each week, so after $w$ weeks it has grown $2w$ centimeters.\nStep 2: Its height before any growth is $5$ centimeters, the constant term.\nStep 3: Add the two: $h = 2w + 5$. Check: after $3$ weeks, $2(3) + 5 = 11$ centimeters, which is $5 + 2 + 2 + 2$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($h = 2w$): gives a height of $0$ at $w = 0$, leaving out the starting $5$ centimeters.\n* Choice C ($h = 5 - 2w$): subtracts the growth, so the plant would get shorter each week.\n* Choice D ($h = 5w + 2$): swaps the starting height and the weekly growth.\n\n**Test Day Takeaway:** In a linear model, the starting amount is the constant term and the amount added each period is the coefficient of the variable.",
      skills: ["word-problem-to-equation", "slope-intercept-form"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "A candle gets shorter by $1.5$ centimeters each hour that it burns. After burning for $4$ hours, the candle is $12$ centimeters tall. Which equation gives the candle's height $h$, in centimeters, after it burns for $t$ hours?",
      choices: [
        // distractor: subtracts the 6 centimeters burned in 4 hours from 12 instead of adding it back
        { id: "A", text: "$h = 6 - 1.5t$" },
        // distractor: uses the height after 4 hours as the height at t = 0
        { id: "B", text: "$h = 12 - 1.5t$" },
        { id: "C", text: "$h = 18 - 1.5t$" },
        // distractor: finds the starting height but makes the height increase each hour
        { id: "D", text: "$h = 18 + 1.5t$" }
      ],
      correctAnswer: "C",
      hint: "The candle was taller than $12$ centimeters before it started burning.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** In $4$ hours the candle lost $4(1.5) = 6$ centimeters, so it started at $12 + 6 = 18$ centimeters: $h = 18 - 1.5t$.\n\n**The Full Solution:**\nStep 1: The height decreases by $1.5$ centimeters per hour, so the equation has the form $h = b - 1.5t$, where $b$ is the height at $t = 0$.\nStep 2: Substitute $t = 4$ and $h = 12$: $12 = b - 1.5(4) = b - 6$, so $b = 18$.\nStep 3: The equation is $h = 18 - 1.5t$. Check: at $t = 4$, $18 - 6 = 12$ centimeters ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($h = 6 - 1.5t$): subtracts the $6$ centimeters burned in $4$ hours from $12$ instead of adding them back.\n* Choice B ($h = 12 - 1.5t$): treats the height after $4$ hours as the height before the candle was lit.\n* Choice D ($h = 18 + 1.5t$): finds the starting height but makes the candle grow by $1.5$ centimeters each hour.\n\n**Test Day Takeaway:** When the given value is not at time $0$, substitute it into $h = b + mt$ to recover the starting value before choosing an equation.",
      skills: ["word-problem-to-equation", "slope-intercept-form"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "For a linear relationship between $x$ and $y$, each increase of $4$ in $x$ corresponds to a decrease of $10$ in $y$, and $y = 1$ when $x = 6$. Which equation represents this relationship?",
      choices: [
        // distractor: uses the decrease of 10 as the slope without dividing by the run of 4
        { id: "A", text: "$y = -10x + 61$" },
        // distractor: uses the given y-value, 1, as the y-intercept
        { id: "B", text: "$y = -2.5x + 1$" },
        { id: "C", text: "$y = -2.5x + 16$" },
        // distractor: drops the negative sign on the slope, giving 1 = 2.5(6) + b and b = -14
        { id: "D", text: "$y = 2.5x - 14$" }
      ],
      correctAnswer: "C",
      hint: "A decrease of $10$ across a run of $4$ is not yet a rate of change.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** The slope is $\\frac{-10}{4} = -2.5$, and $1 = -2.5(6) + b$ gives $b = 16$.\n\n**The Full Solution:**\nStep 1: The slope is the change in $y$ divided by the change in $x$: $\\frac{-10}{4} = -2.5$.\nStep 2: Write $y = -2.5x + b$ and substitute $x = 6$ and $y = 1$: $1 = -15 + b$, so $b = 16$.\nStep 3: The equation is $y = -2.5x + 16$. Check: at $x = 10$, an increase of $4$, $y = -25 + 16 = -9$, which is $10$ less than $1$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -10x + 61$): uses the decrease of $10$ as the slope without dividing by the run of $4$.\n* Choice B ($y = -2.5x + 1$): uses $1$, the value of $y$ when $x = 6$, as the $y$-intercept.\n* Choice D ($y = 2.5x - 14$): drops the negative sign on the slope, so $1 = 2.5(6) + b$ gives $b = -14$.\n\n**Test Day Takeaway:** Slope is a change in $y$ per $1$ unit of $x$; divide the change in $y$ by the change in $x$ before writing the equation.",
      skills: ["word-problem-to-equation", "slope-intercept-form"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "Water drains from a tank at a constant rate. After $4$ minutes, $118$ gallons of water remain in the tank, and after $9$ minutes, $63$ gallons remain. Which equation gives the number of gallons $g$ remaining in the tank after $t$ minutes?",
      choices: [
        // distractor: finds the rate but uses the 4-minute amount, 118, as the starting amount
        { id: "A", text: "$g = 118 - 11t$" },
        // distractor: uses the 55-gallon drop over 5 minutes as the drop per minute
        { id: "B", text: "$g = 162 - 55t$" },
        { id: "C", text: "$g = 162 - 11t$" },
        // distractor: finds the starting amount but makes the amount of water increase each minute
        { id: "D", text: "$g = 162 + 11t$" }
      ],
      correctAnswer: "C",
      hint: "Neither amount is given at $t = 0$, so the constant term has to be found.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~35s):** The tank loses $118 - 63 = 55$ gallons in $5$ minutes, or $11$ gallons per minute, so it started with $118 + 4(11) = 162$ gallons.\n\n**The Full Solution:**\nStep 1: The rate of change is $\\frac{63 - 118}{9 - 4} = \\frac{-55}{5} = -11$ gallons per minute.\nStep 2: Write $g = b - 11t$ and substitute $t = 4$ and $g = 118$: $118 = b - 44$, so $b = 162$.\nStep 3: The equation is $g = 162 - 11t$. Check: at $t = 9$, $162 - 99 = 63$ gallons ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($g = 118 - 11t$): finds the rate but uses $118$, the amount after $4$ minutes, as the amount at $t = 0$.\n* Choice B ($g = 162 - 55t$): uses the $55$-gallon drop over $5$ minutes as the drop for each minute.\n* Choice D ($g = 162 + 11t$): finds the starting amount but adds water each minute instead of removing it.\n\n**Test Day Takeaway:** With two readings and neither at time $0$, find the rate from the two readings, then work back to $t = 0$ for the constant term.",
      skills: ["word-problem-to-equation", "slope-intercept-form"]
    },

    // === FROM GRAPH (Scatterplot - find best-fit model) ===
    {
      id: 6,
      difficulty: "easy",
      question: "Each point in the scatterplot shows a pair of values of $x$ and $y$. Which of the following equations is the most appropriate linear model for the data?",
      diagram: { type: "scatterplot", params: { points: [[1, 7], [2, 12], [3, 16], [4, 23], [5, 27], [6, 32]], xMin: 0, xMax: 7, yMin: 0, yMax: 35, xGridStep: 1, yGridStep: 5, yLabelStep: 10 } },
      choices: [
        // distractor: swaps the slope and the y-intercept
        { id: "A", text: "$y = 2x + 5$" },
        { id: "B", text: "$y = 5x + 2$" },
        // distractor: has the right slope but the wrong sign on the y-intercept, predicting 3 at x = 1 instead of about 7
        { id: "C", text: "$y = 5x - 2$" },
        // distractor: gives the trend a negative slope although y increases as x increases
        { id: "D", text: "$y = -5x + 2$" }
      ],
      correctAnswer: "B",
      hint: "Decide the sign of the slope from the direction of the trend, then estimate where the trend meets the $y$-axis.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** $y$ rises about $5$ for each increase of $1$ in $x$, and the trend points to about $2$ at $x = 0$, so $y = 5x + 2$.\n\n**The Full Solution:**\nStep 1: As $x$ increases, $y$ increases, so the slope is positive; that rules out choice D.\nStep 2: From $(1, 7)$ to $(6, 32)$, $y$ rises $25$ over $5$ units of $x$, a slope of about $5$.\nStep 3: Back up one unit from $(1, 7)$: $7 - 5 = 2$, so the $y$-intercept is about $2$ and the model is $y = 5x + 2$. Check: at $x = 4$ the model gives $22$, close to the plotted $23$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = 2x + 5$): swaps the slope and the $y$-intercept; it predicts only $17$ at $x = 6$, far below the plotted $32$.\n* Choice C ($y = 5x - 2$): has the right slope but predicts $3$ at $x = 1$, where the data show $7$.\n* Choice D ($y = -5x + 2$): has a negative slope, but the data rise from left to right.\n\n**Test Day Takeaway:** Check the direction of the trend first, then compare each remaining model with one or two plotted points.",
      skills: ["graph-to-equation", "slope-from-points", "best-fit-line"]
    },
    {
      id: 7,
      difficulty: "medium",
      question: "The scatterplot shows the age $x$, in years, and the resale value $y$, in thousands of dollars, of each of $8$ vans. Which equation is the most appropriate linear model for the data shown?",
      diagram: { type: "scatterplot", params: { points: [[1, 21], [2, 19], [3, 18], [4, 16], [5, 15], [6, 12], [7, 12], [8, 10]], xMin: 0, xMax: 9, yMin: 0, yMax: 24, xGridStep: 1, yGridStep: 2, yLabelStep: 4, xLabel: "Age (years)", yLabel: "Resale value (thousands of dollars)" } },
      choices: [
        // distractor: swaps the slope and the y-intercept
        { id: "A", text: "$y = -22x + 1.5$" },
        // distractor: has the right slope but a negative y-intercept, predicting negative values
        { id: "B", text: "$y = -1.5x - 22$" },
        { id: "C", text: "$y = -1.5x + 22$" },
        // distractor: gives the trend a positive slope although value falls as age rises
        { id: "D", text: "$y = 1.5x + 10$" }
      ],
      correctAnswer: "C",
      hint: "Estimate the drop per year from the ends of the trend, then estimate the value at age $0$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** Value falls from about $21$ at $1$ year to about $10$ at $8$ years, roughly $1.5$ per year, and the trend starts near $22$ at age $0$.\n\n**The Full Solution:**\nStep 1: The values fall as age increases, so the slope is negative; that rules out choice D.\nStep 2: From $(1, 21)$ to $(8, 10)$ the value drops $11$ over $7$ years, about $1.5$ thousand dollars per year.\nStep 3: Back up one year from $(1, 21)$: about $21 + 1.5 = 22.5$, so the $y$-intercept is near $22$ and the model is $y = -1.5x + 22$. Check: at $x = 4$ the model gives $16$, matching the plotted $16$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -22x + 1.5$): swaps the slope and the $y$-intercept; it predicts a negative value for a $1$-year-old van.\n* Choice B ($y = -1.5x - 22$): has the right slope but a negative $y$-intercept, so every predicted value is below $0$.\n* Choice D ($y = 1.5x + 10$): has a positive slope, but older vans in the data are worth less.\n\n**Test Day Takeaway:** A linear model must match the direction of the data and pass near the points; check one point in the middle of the data after choosing.",
      skills: ["graph-to-equation", "best-fit-line"]
    },
    {
      id: 8,
      difficulty: "hard",
      question: "The scatterplot shows the depth $x$, in meters, and the water temperature $y$, in degrees Celsius, at $10$ locations in a lake. The line of best fit passes through the points $(5, 22)$ and $(20, 10)$. Which of the following equations represents the line of best fit?",
      diagram: { type: "scatterplot", params: { points: [[2, 25], [4, 23], [6, 20], [8, 21], [10, 18], [13, 15], [16, 14], [19, 10], [22, 9], [24, 6]], xMin: 0, xMax: 25, yMin: 0, yMax: 28, xGridStep: 5, yGridStep: 4, xLabelStep: 5, yLabelStep: 8, xLabel: "Depth (meters)", yLabel: "Temperature (degrees Celsius)", bestFitLine: { slope: -0.8, intercept: 26 } } },
      choices: [
        // distractor: computes the slope as run over rise, -15/12 = -1.25
        { id: "A", text: "$y = -1.25x + 28.25$" },
        // distractor: uses 22, the y-coordinate of (5, 22), as the y-intercept
        { id: "B", text: "$y = -0.8x + 22$" },
        { id: "C", text: "$y = -0.8x + 26$" },
        // distractor: drops the negative sign on the slope, giving 22 = 0.8(5) + b and b = 18
        { id: "D", text: "$y = 0.8x + 18$" }
      ],
      correctAnswer: "C",
      hint: "The two points determine the line exactly; no estimating is needed.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** The slope is $\\frac{10 - 22}{20 - 5} = -0.8$, and $22 = -0.8(5) + b$ gives $b = 26$.\n\n**The Full Solution:**\nStep 1: The slope through $(5, 22)$ and $(20, 10)$ is $\\frac{10 - 22}{20 - 5} = \\frac{-12}{15} = -0.8$.\nStep 2: Write $y = -0.8x + b$ and substitute $(5, 22)$: $22 = -4 + b$, so $b = 26$.\nStep 3: The line of best fit is $y = -0.8x + 26$. Check: at $x = 20$, $-16 + 26 = 10$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -1.25x + 28.25$): divides the change in $x$ by the change in $y$, $\\frac{15}{-12} = -1.25$, so the slope is inverted.\n* Choice B ($y = -0.8x + 22$): uses $22$, the $y$-coordinate at $x = 5$, as the $y$-intercept.\n* Choice D ($y = 0.8x + 18$): drops the negative sign on the slope, so $22 = 0.8(5) + b$ gives $b = 18$.\n\n**Test Day Takeaway:** Slope is change in $y$ over change in $x$; once you have it, substitute one point to find the $y$-intercept, and check the other point.",
      skills: ["graph-to-equation", "slope-from-points", "best-fit-line"]
    },

    // === FROM GRAPH (Line with intercepts) ===
    {
      id: 9,
      difficulty: "easy",
      question: "The graph of $y = f(x)$ is shown, where $f$ is a linear function. Which equation defines $f$?",
      diagram: { type: "simpleLine", params: { points: [[0, 3], [4, 11]], xMax: 6, yMax: 14 } },
      choices: [
        // distractor: divides the run by the rise, 4/8, so the slope is inverted
        { id: "A", text: "$f(x) = 0.5x + 3$" },
        { id: "B", text: "$f(x) = 2x + 3$" },
        // distractor: uses 11, the y-value at x = 4, as the y-intercept
        { id: "C", text: "$f(x) = 2x + 11$" },
        // distractor: swaps the slope and the y-intercept
        { id: "D", text: "$f(x) = 3x + 2$" }
      ],
      correctAnswer: "B",
      hint: "The line crosses the $y$-axis at a grid point, so one constant can be read directly.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~20s):** The line crosses the $y$-axis at $3$ and rises $8$ over a run of $4$, so the slope is $2$: $f(x) = 2x + 3$.\n\n**The Full Solution:**\nStep 1: The line meets the $y$-axis at $(0, 3)$, so the $y$-intercept is $3$.\nStep 2: The line also passes through $(4, 11)$, so the slope is $\\frac{11 - 3}{4 - 0} = 2$.\nStep 3: The equation is $f(x) = 2x + 3$. Check: $f(4) = 8 + 3 = 11$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($f(x) = 0.5x + 3$): divides the run by the rise, $\\frac{4}{8}$, so the slope is inverted.\n* Choice C ($f(x) = 2x + 11$): uses $11$, the value at $x = 4$, as the $y$-intercept.\n* Choice D ($f(x) = 3x + 2$): swaps the slope and the $y$-intercept.\n\n**Test Day Takeaway:** Read the $y$-intercept where the line meets the $y$-axis, then compute the slope from a second point on a grid intersection.",
      skills: ["slope-from-points", "slope-intercept-form", "graph-to-equation"]
    },
    {
      id: 10,
      difficulty: "medium",
      question: "The graph shows the possible combinations of $x$ small boxes and $y$ large boxes that exactly fill a storage shelf. Which of the following equations represents this relationship?",
      diagram: { type: "linearLine", params: { points: [[0, 15], [20, 0]], xRange: [0, 24], yRange: [0, 20] } },
      choices: [
        // distractor: swaps the coefficients, so the intercepts become (15, 0) and (0, 20)
        { id: "A", text: "$4x + 3y = 60$" },
        // distractor: uses the x-intercept, 20, as the constant, so the intercepts become (20/3, 0) and (0, 5)
        { id: "B", text: "$3x + 4y = 20$" },
        { id: "C", text: "$3x + 4y = 60$" },
        // distractor: uses the intercepts as coefficients, which gives intercepts (3, 0) and (0, 4)
        { id: "D", text: "$20x + 15y = 60$" }
      ],
      correctAnswer: "C",
      hint: "Both intercepts can be read from the graph, and the correct equation is satisfied by each of them.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** The graph passes through $(20, 0)$ and $(0, 15)$, and only $3x + 4y = 60$ is satisfied by both points.\n\n**The Full Solution:**\nStep 1: The graph meets the $x$-axis at $(20, 0)$ and the $y$-axis at $(0, 15)$.\nStep 2: Substitute $(20, 0)$ into $3x + 4y = 60$: $60 = 60$. Substitute $(0, 15)$: $60 = 60$.\nStep 3: Both intercepts satisfy $3x + 4y = 60$, so it represents the relationship. Check: the slope of $3x + 4y = 60$ is $-\\frac{3}{4}$, and the graph falls $15$ over a run of $20$, also $-\\frac{3}{4}$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($4x + 3y = 60$): swaps the coefficients; its intercepts are $(15, 0)$ and $(0, 20)$.\n* Choice B ($3x + 4y = 20$): has the right coefficients but the wrong constant; its intercepts are $\\left(\\frac{20}{3}, 0\\right)$ and $(0, 5)$.\n* Choice D ($20x + 15y = 60$): puts the intercepts in as coefficients; its intercepts are $(3, 0)$ and $(0, 4)$.\n\n**Test Day Takeaway:** For an equation in standard form, substitute both intercepts read from the graph; the correct equation must work for each one.",
      skills: ["graph-to-equation", "slope-from-points", "standard-form"]
    },
    {
      id: 11,
      difficulty: "hard",
      question: "In the $xy$-plane, line $\\ell$ passes through the two points shown. Which equation defines line $\\ell$?",
      diagram: { type: "coordinatePoints", params: { points: [[-6, 9], [3, -3]], xMin: -10, xMax: 10, yMin: -10, yMax: 10 } },
      choices: [
        { id: "A", text: "$y = -\\frac{4}{3}x + 1$" },
        // distractor: uses 9, the y-coordinate of (-6, 9), as the y-intercept
        { id: "B", text: "$y = -\\frac{4}{3}x + 9$" },
        // distractor: divides the change in x by the change in y, so the slope is inverted
        { id: "C", text: "$y = -\\frac{3}{4}x + \\frac{9}{2}$" },
        // distractor: drops the negative sign on the slope, giving 9 = (4/3)(-6) + b and b = 17
        { id: "D", text: "$y = \\frac{4}{3}x + 17$" }
      ],
      correctAnswer: "A",
      hint: "One point has a negative $x$-coordinate; write the subtraction for the run out in full.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~35s):** The points are $(-6, 9)$ and $(3, -3)$, so the slope is $\\frac{-12}{9} = -\\frac{4}{3}$, and $9 = -\\frac{4}{3}(-6) + b$ gives $b = 1$.\n\n**The Full Solution:**\nStep 1: Read the points from the grid: $(-6, 9)$ and $(3, -3)$.\nStep 2: The slope is $\\frac{-3 - 9}{3 - (-6)} = \\frac{-12}{9} = -\\frac{4}{3}$.\nStep 3: Substitute $(-6, 9)$ into $y = -\\frac{4}{3}x + b$: $9 = 8 + b$, so $b = 1$ and the line is $y = -\\frac{4}{3}x + 1$. Check: at $x = 3$, $-4 + 1 = -3$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = -\\frac{4}{3}x + 9$): uses $9$, the $y$-coordinate of $(-6, 9)$, as the $y$-intercept, although that point is not on the $y$-axis.\n* Choice C ($y = -\\frac{3}{4}x + \\frac{9}{2}$): divides the change in $x$ by the change in $y$, so the slope is inverted.\n* Choice D ($y = \\frac{4}{3}x + 17$): drops the negative sign on the slope, so $9 = \\frac{4}{3}(-6) + b$ gives $b = 17$.\n\n**Test Day Takeaway:** Subtracting a negative coordinate makes the run longer: $3 - (-6) = 9$. Confirm the final equation with the second point.",
      skills: ["slope-from-points", "slope-intercept-form", "graph-to-equation"]
    },

    // === FROM TABLE ===
    {
      id: 12,
      difficulty: "easy",
      question: "For the linear function $f$, the table shows three values of $x$ and their corresponding values of $f(x)$. Which equation defines $f$?",
      diagram: { type: "table", params: { rows: [[0, 17], [1, 22], [2, 27]], xHeader: "x", yHeader: "f(x)" } },
      choices: [
        { id: "A", text: "$f(x) = 5x + 17$" },
        // distractor: uses f(1) = 22 as the y-intercept
        { id: "B", text: "$f(x) = 5x + 22$" },
        // distractor: swaps the slope and the y-intercept
        { id: "C", text: "$f(x) = 17x + 5$" },
        // distractor: uses f(1) as the slope and f(0) as the y-intercept
        { id: "D", text: "$f(x) = 22x + 17$" }
      ],
      correctAnswer: "A",
      hint: "One row of the table gives the value of the function when $x = 0$.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** $f(0) = 17$ is the $y$-intercept, and $f(x)$ rises by $5$ each time $x$ rises by $1$: $f(x) = 5x + 17$.\n\n**The Full Solution:**\nStep 1: The row $x = 0$ gives $f(0) = 17$, so the $y$-intercept is $17$.\nStep 2: From $x = 0$ to $x = 1$, $f(x)$ increases from $17$ to $22$, so the slope is $5$.\nStep 3: The function is $f(x) = 5x + 17$. Check: $f(2) = 10 + 17 = 27$, matching the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($f(x) = 5x + 22$): uses $22$, the value at $x = 1$, as the $y$-intercept.\n* Choice C ($f(x) = 17x + 5$): swaps the slope and the $y$-intercept.\n* Choice D ($f(x) = 22x + 17$): uses $f(1)$ as the slope instead of the change from $f(0)$ to $f(1)$.\n\n**Test Day Takeaway:** If a table includes $x = 0$, that row gives the $y$-intercept; the slope is the change in $f(x)$ for each increase of $1$ in $x$.",
      skills: ["table-to-equation", "slope-from-points"]
    },
    {
      id: 13,
      difficulty: "medium",
      question: "The variables $x$ and $y$ have a linear relationship, and the table shows four pairs of their values. Which equation represents this relationship?",
      diagram: { type: "table", params: { xHeader: "x", yHeader: "y", rows: [["10", "1.4"], ["20", "2.0"], ["30", "2.6"], ["40", "3.2"]] } },
      choices: [
        // distractor: uses 0.6, the change in y between rows, as the change per unit of x
        { id: "A", text: "$y = 0.6x + 0.8$" },
        // distractor: swaps the slope and the y-intercept
        { id: "B", text: "$y = 0.8x + 0.06$" },
        // distractor: uses the first value of y, 1.4, as the y-intercept although that row has x = 10
        { id: "C", text: "$y = 0.06x + 1.4$" },
        { id: "D", text: "$y = 0.06x + 0.8$" }
      ],
      correctAnswer: "D",
      hint: "The values of $x$ go up by $10$, not by $1$.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~30s):** $y$ rises $0.6$ for every $10$ in $x$, a slope of $0.06$, and backing up from $(10, 1.4)$ gives $1.4 - 0.6 = 0.8$ at $x = 0$.\n\n**The Full Solution:**\nStep 1: Each increase of $10$ in $x$ raises $y$ by $0.6$, so the slope is $\\frac{0.6}{10} = 0.06$.\nStep 2: Write $y = 0.06x + b$ and substitute $(10, 1.4)$: $1.4 = 0.6 + b$, so $b = 0.8$.\nStep 3: The equation is $y = 0.06x + 0.8$. Check: at $x = 40$, $2.4 + 0.8 = 3.2$, matching the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = 0.6x + 0.8$): treats the $0.6$ change between rows as the change for each $1$ unit of $x$; at $x = 40$ it gives $24.8$.\n* Choice B ($y = 0.8x + 0.06$): swaps the slope and the $y$-intercept.\n* Choice C ($y = 0.06x + 1.4$): uses $1.4$ as the $y$-intercept, but that value is at $x = 10$, not $x = 0$.\n\n**Test Day Takeaway:** Divide the change in $y$ by the change in $x$, not by the number of rows, and find the intercept by working back to $x = 0$.",
      skills: ["table-to-equation", "slope-from-points"]
    },
    {
      id: 14,
      difficulty: "medium",
      question: "A kayak rental shop charges a fixed fee plus an hourly rate. The table shows the total cost $C$, in dollars, of renting a kayak for $h$ hours. Which equation represents this situation?",
      diagram: { type: "table", params: { xHeader: "h", yHeader: "C", rows: [["2", "34"], ["5", "55"], ["9", "83"], ["14", "118"]] } },
      choices: [
        // distractor: divides the first total by its hours, 34/2 = 17, treating the cost as proportional
        { id: "A", text: "$C = 17h$" },
        // distractor: swaps the hourly rate and the fixed fee
        { id: "B", text: "$C = 20h + 7$" },
        // distractor: finds the hourly rate but leaves out the fixed fee
        { id: "C", text: "$C = 7h$" },
        { id: "D", text: "$C = 7h + 20$" }
      ],
      correctAnswer: "D",
      hint: "Two rows are enough to find the cost of one more hour.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~30s):** From $2$ to $5$ hours the cost rises $21$ dollars, so the rate is \\$7 per hour, and $34 - 2(7) = 20$ is the fixed fee.\n\n**The Full Solution:**\nStep 1: From $h = 2$ to $h = 5$, the cost rises from $34$ to $55$, so the hourly rate is $\\frac{55 - 34}{5 - 2} = 7$ dollars.\nStep 2: Write $C = 7h + b$ and substitute $(2, 34)$: $34 = 14 + b$, so the fixed fee is $b = 20$.\nStep 3: The equation is $C = 7h + 20$. Check: at $h = 14$, $98 + 20 = 118$, matching the table ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($C = 17h$): divides $34$ by $2$, treating the cost as proportional to the hours; at $h = 5$ it gives $85$, not $55$.\n* Choice B ($C = 20h + 7$): swaps the hourly rate and the fixed fee.\n* Choice C ($C = 7h$): finds the hourly rate but leaves out the fixed fee.\n\n**Test Day Takeaway:** Find the rate from the change between two rows, then use any row to recover the fixed amount; never divide a single total by its input when there is a fixed fee.",
      skills: ["table-to-equation", "slope-from-points"]
    },
    {
      id: 15,
      difficulty: "hard",
      question: "The table shows three values of $x$ and their corresponding values of $f(x)$, where $f$ is a linear function. What is the x-intercept of the graph of $y = f(x)$ in the $xy$-plane?",
      diagram: { type: "table", params: { rows: [["−6", 20], ["−2", 14], [6, 2]], xHeader: "x", yHeader: "f(x)" } },
      choices: [
        // distractor: solves -1.5x + 11 = 0 with a sign error, getting x = -22/3
        { id: "A", text: "$\\left(-\\frac{22}{3}, 0\\right)$" },
        { id: "B", text: "$\\left(\\frac{22}{3}, 0\\right)$" },
        // distractor: gives the y-intercept instead of the x-intercept
        { id: "C", text: "$(0, 11)$" },
        // distractor: uses the y-intercept value, 11, as the x-coordinate of the x-intercept
        { id: "D", text: "$(11, 0)$" }
      ],
      correctAnswer: "B",
      hint: "The values of $x$ are not evenly spaced, so divide each change in $f(x)$ by the matching change in $x$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~45s):** The slope is $\\frac{14 - 20}{-2 - (-6)} = -\\frac{3}{2}$, so $f(x) = -\\frac{3}{2}x + 11$, and $f(x) = 0$ when $x = \\frac{22}{3}$.\n\n**The Full Solution:**\nStep 1: Using $(-6, 20)$ and $(-2, 14)$, the slope is $\\frac{14 - 20}{-2 - (-6)} = \\frac{-6}{4} = -\\frac{3}{2}$.\nStep 2: Substitute $(-2, 14)$ into $f(x) = -\\frac{3}{2}x + b$: $14 = 3 + b$, so $b = 11$ and $f(x) = -\\frac{3}{2}x + 11$.\nStep 3: The $x$-intercept is where $f(x) = 0$: $-\\frac{3}{2}x + 11 = 0$, so $x = \\frac{22}{3}$, and the $x$-intercept is $\\left(\\frac{22}{3}, 0\\right)$. Check: $f(6) = -9 + 11 = 2$, matching the table, and $-\\frac{3}{2}\\left(\\frac{22}{3}\\right) + 11 = 0$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\left(-\\frac{22}{3}, 0\\right)$): makes a sign error when solving $-\\frac{3}{2}x + 11 = 0$.\n* Choice C ($(0, 11)$): is the $y$-intercept of the graph, not the $x$-intercept.\n* Choice D ($(11, 0)$): uses the $y$-intercept value, $11$, as the $x$-coordinate of the $x$-intercept.\n\n**Test Day Takeaway:** An $x$-intercept has a $y$-coordinate of $0$. Build the equation from the table, then set $f(x) = 0$ and solve.",
      skills: ["table-to-equation", "slope-from-points"]
    },

    // === FROM FUNCTION NOTATION ===
    {
      id: 16,
      difficulty: "easy",
      question: "$h(x) = 4x + b$\nFor the linear function $h$, $b$ is a constant and $h(1) = 12$. What is the value of $b$?",
      choices: [
        // distractor: divides h(1) = 12 by the slope 4
        { id: "A", text: "$3$" },
        { id: "B", text: "$8$" },
        // distractor: uses h(1) = 12 as the value of b, as though x were 0
        { id: "C", text: "$12$" },
        // distractor: adds 4 to 12 instead of subtracting it
        { id: "D", text: "$16$" }
      ],
      correctAnswer: "B",
      hint: "Substitute $x = 1$ into the given equation.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~10s):** $h(1) = 4(1) + b = 12$, so $b = 8$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 1$ into the given equation: $h(1) = 4(1) + b = 4 + b$.\nStep 2: It's given that $h(1) = 12$, so $4 + b = 12$.\nStep 3: Subtract $4$ from each side: $b = 8$. Check: $h(1) = 4 + 8 = 12$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): divides $12$ by $4$, solving $4b = 12$ instead of $4 + b = 12$.\n* Choice C ($12$): treats $h(1)$ as the $y$-intercept, which is the value at $x = 0$, not $x = 1$.\n* Choice D ($16$): adds $4$ to $12$ instead of subtracting it.\n\n**Test Day Takeaway:** To find a constant in a function, substitute the given input and output into the equation and solve.",
      skills: ["function-notation-to-equation", "slope-from-points"]
    },
    {
      id: 17,
      difficulty: "medium",
      question: "$f(x) = ax + b$\nIn the given equation, $a$ and $b$ are constants. If $f(3) = 4$ and $f(7) = 24$, what is the value of $a + b$?",
      choices: [
        // distractor: gives the value of b only
        { id: "A", text: "$-11$" },
        { id: "B", text: "$-6$" },
        // distractor: gives the value of a only
        { id: "C", text: "$5$" },
        // distractor: makes a sign error finding b, using 4 + 15 = 19, so a + b = 24
        { id: "D", text: "$24$" }
      ],
      correctAnswer: "B",
      hint: "Find $a$ from the two given values first.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~30s):** $a = \\frac{24 - 4}{7 - 3} = 5$, and $4 = 15 + b$ gives $b = -11$, so $a + b = -6$, which is also $f(1)$.\n\n**The Full Solution:**\nStep 1: The slope is $a = \\frac{f(7) - f(3)}{7 - 3} = \\frac{24 - 4}{4} = 5$.\nStep 2: Substitute $f(3) = 4$: $4 = 5(3) + b$, so $b = -11$.\nStep 3: Then $a + b = 5 + (-11) = -6$. Check: $f(7) = 35 - 11 = 24$ ✓, and $a + b$ is $f(1) = 5 - 11 = -6$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-11$): stops at $b$ and never adds $a$.\n* Choice C ($5$): stops at $a$ and never finds $b$.\n* Choice D ($24$): makes a sign error finding $b$, computing $4 + 15 = 19$, so $a + b = 24$.\n\n**Test Day Takeaway:** Two values of a linear function give the slope; substitute either one to get the intercept, and reread the question to see which combination is asked for.",
      skills: ["function-notation-to-equation", "slope-from-points", "slope-intercept-form"]
    },
    {
      id: 18,
      difficulty: "medium",
      question: "$S(m) = am + b$\nThe function $S$ gives the balance, in dollars, of a savings account $m$ months after it was opened, where $a$ and $b$ are constants. If $S(4) = 860$ and $S(9) = 1{,}785$, what is the value of $b$?",
      choices: [
        { id: "A", text: "$120$" },
        // distractor: gives the value of a, the monthly increase, instead of b
        { id: "B", text: "$185$" },
        // distractor: divides 860 by 4, treating the balance as proportional to the months
        { id: "C", text: "$215$" },
        // distractor: gives the difference 1,785 - 860, the increase over five months
        { id: "D", text: "$925$" }
      ],
      correctAnswer: "A",
      hint: "The two months given are five months apart.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~30s):** The balance rises $1{,}785 - 860 = 925$ dollars in $5$ months, so $a = 185$, and $860 - 4(185) = 120$.\n\n**The Full Solution:**\nStep 1: The rate is $a = \\frac{1{,}785 - 860}{9 - 4} = \\frac{925}{5} = 185$ dollars per month.\nStep 2: Substitute $S(4) = 860$: $860 = 185(4) + b = 740 + b$.\nStep 3: Solve: $b = 120$. Check: $S(9) = 185(9) + 120 = 1{,}665 + 120 = 1{,}785$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($185$): is the value of $a$, the increase in balance each month.\n* Choice C ($215$): divides $860$ by $4$, which ignores the starting balance $b$.\n* Choice D ($925$): is the increase over the $5$ months from month $4$ to month $9$, not a constant of the function.\n\n**Test Day Takeaway:** In a linear model, find the rate from two data points first; the constant term is what remains when you work back to an input of $0$.",
      skills: ["function-notation-to-equation", "slope-from-points"]
    },
    {
      id: 19,
      difficulty: "hard",
      question: "$g(x) = ax + b$\nFor the linear function $g$, $a$ and $b$ are constants, $g(-4) = 23$, and $g(6) = -2$. What is the value of $x$ for which $g(x) = -32$?",
      choices: [
        // distractor: drops the negative sign on the slope, getting g(x) = 2.5x + 33
        { id: "A", text: "$-26$" },
        // distractor: finds the slope but leaves out the constant, solving -2.5x = -32
        { id: "B", text: "$12.8$" },
        { id: "C", text: "$18$" },
        // distractor: uses g(-4) = 23 as the y-intercept, solving -2.5x + 23 = -32
        { id: "D", text: "$22$" }
      ],
      correctAnswer: "C",
      hint: "Use the two given values of $g$ to find $a$ and $b$ first.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~40s):** The slope is $\\frac{-2 - 23}{6 - (-4)} = -2.5$ and $g(x) = -2.5x + 13$, so $-2.5x + 13 = -32$ gives $x = 18$.\n\n**The Full Solution:**\nStep 1: The slope of $g$ is $a = \\frac{-2 - 23}{6 - (-4)} = \\frac{-25}{10} = -2.5$.\nStep 2: Substitute $g(6) = -2$ into $g(x) = -2.5x + b$: $-2 = -15 + b$, so $b = 13$ and $g(x) = -2.5x + 13$.\nStep 3: Solve $-2.5x + 13 = -32$: $-2.5x = -45$, so $x = 18$. Check: $g(18) = -45 + 13 = -32$ ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-26$): drops the negative sign on the slope, so $g(x) = 2.5x + 33$ and $2.5x + 33 = -32$ gives $x = -26$.\n* Choice B ($12.8$): finds the slope but leaves out the constant term, solving $-2.5x = -32$.\n* Choice D ($22$): uses $23$ as the $y$-intercept, although $23$ is the value at $x = -4$, and solves $-2.5x + 23 = -32$.\n\n**Test Day Takeaway:** Build the full equation of the line, slope and constant, from the two given values before setting it equal to the target output.",
      skills: ["function-notation-to-equation", "slope-from-points", "solving-linear-equations"]
    },
    {
      id: 20,
      difficulty: "hard",
      question: "For the linear function $f$, $f(-3) = 20$ and $f(5) = -4$. The graph of $y = f(x)$ in the $xy$-plane has an $x$-intercept at $(a, 0)$ and a $y$-intercept at $(0, b)$. What is the value of $\\frac{b}{a}$?",
      choices: [
        // distractor: reports the slope of the graph, -3, as the value of b/a, missing that b/a is the opposite of the slope
        { id: "A", text: "$-3$" },
        // distractor: computes a/b = (11/3)/11 instead of b/a
        { id: "B", text: "$\\frac{1}{3}$" },
        { id: "C", text: "$3$" },
        // distractor: stops at the y-intercept, b = 11, and never finds a
        { id: "D", text: "$11$" }
      ],
      correctAnswer: "C",
      hint: "Find the slope from the two given values, then write $f(x)$ in slope-intercept form.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~50s):** The slope is $\\frac{-4 - 20}{5 - (-3)} = -3$, so $f(x) = -3x + 11$; then $b = 11$, $a = \\frac{11}{3}$, and $\\frac{b}{a} = 3$.\n\n**The Full Solution:**\nStep 1: The graph passes through $(-3, 20)$ and $(5, -4)$, so its slope is $\\frac{-4 - 20}{5 - (-3)} = \\frac{-24}{8} = -3$.\nStep 2: Write $f(x) = -3x + b$ and substitute $(5, -4)$: $-4 = -15 + b$, so $b = 11$ and $f(x) = -3x + 11$. The $y$-intercept is $(0, 11)$.\nStep 3: Set $f(a) = 0$: $-3a + 11 = 0$, so $a = \\frac{11}{3}$. Then $\\frac{b}{a} = \\frac{11}{11/3} = 3$.\n\nCheck: $f(-3) = 9 + 11 = 20$, $f(5) = -15 + 11 = -4$, and $f\\left(\\frac{11}{3}\\right) = -11 + 11 = 0$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): is the slope of the graph; the slope is $\\frac{0 - b}{a - 0} = -\\frac{b}{a}$, so $\\frac{b}{a}$ is its opposite.\n* Choice B ($\\frac{1}{3}$): divides in the wrong order, $\\frac{a}{b} = \\frac{11/3}{11}$.\n* Choice D ($11$): is the $y$-intercept $b$ alone; the question asks for $b$ divided by $a$.\n\n**Test Day Takeaway:** Two function values give the slope, the slope and one point give the equation, and the intercepts come straight from that equation; for any line through $(a, 0)$ and $(0, b)$, the slope is $-\\frac{b}{a}$.",
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
      question: "$f(x) = 7x - 9$\nIn the $xy$-plane, line $p$ is parallel to the graph of $y = f(x)$. What is the slope of line $p$?",
      choices: [
        // distractor: reports the y-intercept, -9, instead of the slope
        { id: "A", text: "$-9$" },
        // distractor: changes the sign of the slope, which gives a line that is not parallel
        { id: "B", text: "$-7$" },
        // distractor: uses the negative reciprocal, which is the slope of a perpendicular line
        { id: "C", text: "$-\\frac{1}{7}$" },
        { id: "D", text: "$7$" }
      ],
      correctAnswer: "D",
      hint: "The equation is already solved for the output, so read the coefficient of $x$.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~15s):** The graph of $y = 7x - 9$ has slope $7$, and parallel lines have equal slopes, so line $p$ has slope $7$.\n\n**The Full Solution:**\nStep 1: The graph of $y = f(x)$ is the line $y = 7x - 9$, which is in slope-intercept form $y = mx + b$.\nStep 2: Its slope is the coefficient of $x$, which is $7$.\nStep 3: Parallel lines have the same slope, so the slope of line $p$ is $7$.\n\nCheck: Any line $y = 7x + b$ with $b \\ne -9$, such as $y = 7x + 1$, rises $7$ units for each unit to the right, exactly like the graph of $f$, so the two never meet. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): is the $y$-intercept of the graph, not its slope.\n* Choice B ($-7$): changes the sign of the slope; that line slants the other way.\n* Choice C ($-\\frac{1}{7}$): is the negative reciprocal, the slope of a line perpendicular to the graph.\n\n**Test Day Takeaway:** Parallel means the same slope: read the coefficient of $x$ and copy it exactly.",
      skills: ["parallel-line-slope"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "In the $xy$-plane, line $j$ and the graph of $y = -\\frac{5}{2}x + 4$ never intersect. What is the slope of line $j$?",
      choices: [
        { id: "A", text: "$-\\frac{5}{2}$" },
        // distractor: takes the reciprocal of the slope but keeps the sign
        { id: "B", text: "$-\\frac{2}{5}$" },
        // distractor: uses the negative reciprocal, the slope of a perpendicular line
        { id: "C", text: "$\\frac{2}{5}$" },
        // distractor: drops the negative sign of the slope
        { id: "D", text: "$\\frac{5}{2}$" }
      ],
      correctAnswer: "A",
      hint: "Lines that never meet rise or fall at the same rate; copy the coefficient of $x$, sign included.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~15s):** Two lines that never intersect are parallel, so line $j$ has the same slope as the given line, $-\\frac{5}{2}$.\n\n**The Full Solution:**\nStep 1: The given line is written in the form $y = mx + b$, so its slope is the coefficient of $x$: $m = -\\frac{5}{2}$.\nStep 2: Two distinct lines in the $xy$-plane that never intersect are parallel, and parallel lines have equal slopes.\nStep 3: The slope of line $j$ is $-\\frac{5}{2}$.\n\nCheck: The line $y = -\\frac{5}{2}x$ has the same slope as the given line and a different $y$-intercept; setting $-\\frac{5}{2}x = -\\frac{5}{2}x + 4$ gives $0 = 4$, so the lines never meet. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{2}{5}$): flips the fraction; a parallel line keeps the slope unchanged.\n* Choice C ($\\frac{2}{5}$): is the negative reciprocal, the slope of a perpendicular line.\n* Choice D ($\\frac{5}{2}$): drops the negative sign, so the line would rise instead of fall.\n\n**Test Day Takeaway:** Lines that never intersect are parallel, and the slope carries over unchanged, sign and all.",
      skills: ["parallel-line-slope"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In the $xy$-plane, line $\\ell$ is parallel to the line with equation $4x + 7y = 21$. What is the slope of line $\\ell$?",
      choices: [
        // distractor: divides the y-coefficient by the x-coefficient, inverting the slope
        { id: "A", text: "$-\\frac{7}{4}$" },
        { id: "B", text: "$-\\frac{4}{7}$" },
        // distractor: drops the negative sign when solving for y
        { id: "C", text: "$\\frac{4}{7}$" },
        // distractor: uses the negative reciprocal, the slope of a perpendicular line
        { id: "D", text: "$\\frac{7}{4}$" }
      ],
      correctAnswer: "B",
      hint: "Rewrite the equation so the coefficient of $y$ is $1$.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~25s):** Solving $4x + 7y = 21$ for $y$ gives $y = -\\frac{4}{7}x + 3$, so the slope is $-\\frac{4}{7}$.\n\n**The Full Solution:**\nStep 1: Subtract $4x$ from both sides: $7y = -4x + 21$.\nStep 2: Divide by $7$: $y = -\\frac{4}{7}x + 3$, so the given line has slope $-\\frac{4}{7}$.\nStep 3: Parallel lines have equal slopes, so line $\\ell$ has slope $-\\frac{4}{7}$.\n\nCheck: The points $(0, 3)$ and $(7, -1)$ are on the given line, and $\\frac{-1 - 3}{7 - 0} = -\\frac{4}{7}$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{7}{4}$): inverts the ratio of the coefficients; the slope of $Ax + By = C$ is $-\\frac{A}{B}$.\n* Choice C ($\\frac{4}{7}$): loses the negative sign when moving $4x$ to the right side.\n* Choice D ($\\frac{7}{4}$): is the negative reciprocal, the slope of a perpendicular line.\n\n**Test Day Takeaway:** For $Ax + By = C$, the slope is $-\\frac{A}{B}$; solve for $y$ if you are unsure of the sign.",
      skills: ["parallel-line-slope"]
    },

    // === TYPE 2: Write equation through point parallel to given line ===
    {
      id: 4,
      difficulty: "easy",
      question: "Line $p$ is parallel to the line $y = \\frac{1}{2}x + 3$ in the $xy$-plane and passes through the point $(4, 6)$. Which equation defines line $p$?",
      choices: [
        // distractor: uses the perpendicular slope, -2, through (4, 6)
        { id: "A", text: "$y = -2x + 14$" },
        // distractor: copies the given line, which does not pass through (4, 6)
        { id: "B", text: "$y = \\frac{1}{2}x + 3$" },
        { id: "C", text: "$y = \\frac{1}{2}x + 4$" },
        // distractor: adds 2 to 6 instead of subtracting when solving for the y-intercept
        { id: "D", text: "$y = \\frac{1}{2}x + 8$" }
      ],
      correctAnswer: "C",
      hint: "Parallel lines share a slope; only the constant term is left to find.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~25s):** Line $p$ has slope $\\frac{1}{2}$, and $6 = \\frac{1}{2}(4) + b$ gives $b = 4$.\n\n**The Full Solution:**\nStep 1: Line $p$ is parallel to the given line, so its slope is also $\\frac{1}{2}$: $y = \\frac{1}{2}x + b$.\nStep 2: Substitute the point $(4, 6)$: $6 = \\frac{1}{2}(4) + b = 2 + b$.\nStep 3: So $b = 4$, and line $p$ is $y = \\frac{1}{2}x + 4$.\n\nCheck: $\\frac{1}{2}(4) + 4 = 6$, so $(4, 6)$ is on the line. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -2x + 14$): passes through $(4, 6)$ but has the perpendicular slope, $-2$.\n* Choice B ($y = \\frac{1}{2}x + 3$): is the given line itself; at $x = 4$ it gives $y = 5$, not $6$.\n* Choice D ($y = \\frac{1}{2}x + 8$): adds $2$ to $6$ instead of subtracting it when solving for $b$.\n\n**Test Day Takeaway:** Keep the slope, then substitute the given point to find the new $y$-intercept.",
      skills: ["parallel-line-slope", "writing-parallel-equation"]
    },
    {
      id: 5,
      difficulty: "medium",
      question: "Line $j$ passes through the point $(-4, 9)$ and is parallel to the line $3x - 2y = 10$ in the $xy$-plane. Which equation defines line $j$?",
      choices: [
        // distractor: takes the slope of 3x - 2y = 10 as -3/2, losing the sign from dividing by -2
        { id: "A", text: "$y = -\\frac{3}{2}x + 3$" },
        // distractor: rewrites the given line, y = (3/2)x - 5, which does not pass through (-4, 9)
        { id: "B", text: "$y = \\frac{3}{2}x - 5$" },
        // distractor: treats (3/2)(-4) as +6 when solving for the y-intercept, getting b = 9 - 6
        { id: "C", text: "$y = \\frac{3}{2}x + 3$" },
        { id: "D", text: "$y = \\frac{3}{2}x + 15$" }
      ],
      correctAnswer: "D",
      hint: "Rewrite the given line in slope-intercept form to read its slope.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~40s):** The given line is $y = \\frac{3}{2}x - 5$, so line $j$ is $y = \\frac{3}{2}x + b$ with $9 = \\frac{3}{2}(-4) + b = -6 + b$, giving $b = 15$.\n\n**The Full Solution:**\nStep 1: Solve $3x - 2y = 10$ for $y$: $-2y = -3x + 10$, so $y = \\frac{3}{2}x - 5$, which has slope $\\frac{3}{2}$.\nStep 2: Line $j$ is parallel, so it has the form $y = \\frac{3}{2}x + b$. Substitute $(-4, 9)$: $9 = \\frac{3}{2}(-4) + b = -6 + b$.\nStep 3: So $b = 15$, and line $j$ is $y = \\frac{3}{2}x + 15$.\n\nCheck: $\\frac{3}{2}(-4) + 15 = -6 + 15 = 9$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -\\frac{3}{2}x + 3$): loses a sign when dividing by $-2$, so the slope is wrong even though the line passes through $(-4, 9)$.\n* Choice B ($y = \\frac{3}{2}x - 5$): is the given line itself; at $x = -4$ it gives $y = -11$.\n* Choice C ($y = \\frac{3}{2}x + 3$): treats $\\frac{3}{2}(-4)$ as $+6$, so $b = 9 - 6 = 3$.\n\n**Test Day Takeaway:** Get the slope from the given line in slope-intercept form, then use the point, keeping track of the negative coordinate.",
      skills: ["parallel-line-slope", "writing-parallel-equation"]
    },
    {
      id: 6,
      difficulty: "medium",
      question: "At Company A, the total cost $y$, in dollars, of renting a kayak for $x$ hours is given by $y = 12x + 20$. At Company B, the total cost is given by $y = 12x + 35$. Which statement is true?",
      choices: [
        // distractor: assumes two linear equations always meet at one point, missing that the slopes are equal
        { id: "A", text: "The costs at the two companies are equal for exactly one value of $x$." },
        // distractor: notices the equal slopes but ignores the different constant terms
        { id: "B", text: "The costs at the two companies are equal for every value of $x$." },
        { id: "C", text: "The cost at Company B is \\$15 more than the cost at Company A for every value of $x$." },
        // distractor: compares only the starting fees, as if the hourly charges could change the gap
        { id: "D", text: "The cost at Company B is \\$15 more than the cost at Company A only when $x = 0$." }
      ],
      correctAnswer: "C",
      hint: "Compare the constant terms once you notice the coefficients of $x$ match.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** Subtracting gives $(12x + 35) - (12x + 20) = 15$ for every $x$, so Company B always costs \\$15 more.\n\n**The Full Solution:**\nStep 1: Both companies charge \\$12 per hour, since the coefficient of $x$ is $12$ in both equations.\nStep 2: The difference in cost is $(12x + 35) - (12x + 20) = 15$; the $x$-terms cancel.\nStep 3: The difference does not depend on $x$, so Company B costs \\$15 more than Company A for every number of hours.\n\nCheck: For $x = 3$, the costs are $12(3) + 20 = 56$ and $12(3) + 35 = 71$, and $71 - 56 = 15$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A (equal for exactly one value): assumes the lines cross, but equal slopes with different intercepts give parallel lines that never meet.\n* Choice B (equal for every value): sees the matching rates but ignores the different fixed fees, $20$ and $35$.\n* Choice D (\\$15 more only when $x = 0$): looks only at the fixed fees; since the hourly rates are equal, the gap stays \\$15 for every $x$.\n\n**Test Day Takeaway:** Equal slopes mean a constant difference; subtract the two expressions to see what is left.",
      skills: ["parallel-line-slope", "writing-parallel-equation"]
    },

    // === TYPE 3: System with no solution - identify parallel equation ===
    {
      id: 7,
      difficulty: "medium",
      question: "$6x - 9y = 12$\nOne of the two equations in a system of linear equations is given. The system has no solution. Which equation could be the second equation in this system?",
      choices: [
        // distractor: divides the given equation by 3, which gives the same line and infinitely many solutions
        { id: "A", text: "$2x - 3y = 4$" },
        { id: "B", text: "$2x - 3y = 7$" },
        // distractor: changes the sign of the y-term, which changes the slope and gives exactly one solution
        { id: "C", text: "$2x + 3y = 4$" },
        // distractor: swaps the coefficients of x and y, which changes the slope and gives exactly one solution
        { id: "D", text: "$9x - 6y = 12$" }
      ],
      correctAnswer: "B",
      hint: "Divide the given equation by a common factor, then compare left sides and constants.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~35s):** Dividing by $3$ gives $2x - 3y = 4$; a line $2x - 3y = 7$ is parallel to it with a different constant, so the system has no solution.\n\n**The Full Solution:**\nStep 1: Divide the given equation by $3$: $2x - 3y = 4$.\nStep 2: A system of two linear equations has no solution when the lines are parallel and distinct: the left sides are proportional but the constants are not.\nStep 3: $2x - 3y = 7$ has the same left side as $2x - 3y = 4$ but a different constant, so no pair $(x, y)$ satisfies both.\n\nCheck: If $2x - 3y = 7$, then $6x - 9y = 3(7) = 21$, not $12$, so the two equations can never both be true. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($2x - 3y = 4$): is the given equation divided by $3$, the same line, so the system has infinitely many solutions.\n* Choice C ($2x + 3y = 4$): has slope $-\\frac{2}{3}$ instead of $\\frac{2}{3}$, so the lines cross once.\n* Choice D ($9x - 6y = 12$): swaps the coefficients, giving slope $\\frac{3}{2}$, so the lines cross once.\n\n**Test Day Takeaway:** No solution: scale one equation so the left sides match exactly, then check that the constants differ.",
      skills: ["parallel-line-slope", "system-no-solution"]
    },
    {
      id: 8,
      difficulty: "medium",
      question: "Line $k$ passes through the points $(3, 10)$ and $(8, 30)$ in the $xy$-plane. Line $j$, defined by $y = px - 6$, is parallel to line $k$. What is the value of $p$?",
      choices: [
        // distractor: subtracts the y-values and the x-values in opposite orders, (10 - 30)/(8 - 3)
        { id: "A", text: "$-4$" },
        // distractor: divides the change in x by the change in y
        { id: "B", text: "$\\frac{1}{4}$" },
        // distractor: adds the coordinates instead of subtracting, (30 + 10)/(8 + 3)
        { id: "C", text: "$\\frac{40}{11}$" },
        { id: "D", text: "$4$" }
      ],
      correctAnswer: "D",
      hint: "Slope is the change in $y$ divided by the matching change in $x$.",
      explanation: "**Choice D is correct.**\n\n**The Fast Way (~25s):** Line $k$ has slope $\\frac{30 - 10}{8 - 3} = 4$, and line $j$ is parallel, so $p = 4$.\n\n**The Full Solution:**\nStep 1: The slope of line $k$ is $\\frac{30 - 10}{8 - 3} = \\frac{20}{5} = 4$.\nStep 2: Line $j$ is $y = px - 6$, so its slope is $p$.\nStep 3: Parallel lines have equal slopes, so $p = 4$.\n\nCheck: With $p = 4$, line $j$ is $y = 4x - 6$; at $x = 3$ it gives $y = 6 \\ne 10$, so line $j$ is parallel to line $k$ and not the same line. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): subtracts the $y$-values in one order and the $x$-values in the other.\n* Choice B ($\\frac{1}{4}$): divides the run by the rise, the reciprocal of the slope.\n* Choice C ($\\frac{40}{11}$): adds the coordinates instead of finding their differences.\n\n**Test Day Takeaway:** Find the slope from two points as rise over run, subtracting in the same order, then match it.",
      skills: ["parallel-line-slope", "system-no-solution"]
    },

    // === TYPE 4: Find constant p for no solution (single equation) ===
    {
      id: 9,
      difficulty: "hard",
      question: "$3(4x - 5) + k = 2(kx + 3) + 1$\nIn the given equation, $k$ is a constant. For what value of $k$ does the equation have no solution?",
      choices: [
        // distractor: sets 12 + 2k = 0 after a sign error moving the 2kx term
        { id: "A", text: "$-6$" },
        { id: "B", text: "$6$" },
        // distractor: forgets to distribute the 2 to kx, matching 12x with kx
        { id: "C", text: "$12$" },
        // distractor: makes the constant terms equal, -15 + k = 7, which gives exactly one solution instead
        { id: "D", text: "$22$" }
      ],
      correctAnswer: "B",
      hint: "No solution means the $x$-terms match on both sides while the constants do not.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~50s):** Expanding gives $12x - 15 + k = 2kx + 7$; the $x$-terms match when $2k = 12$, so $k = 6$, and then $-9 \\ne 7$.\n\n**The Full Solution:**\nStep 1: Distribute: the left side is $12x - 15 + k$ and the right side is $2kx + 6 + 1 = 2kx + 7$.\nStep 2: The equation has no solution when the coefficients of $x$ are equal and the constants are not. Equal coefficients: $12 = 2k$, so $k = 6$.\nStep 3: With $k = 6$, the constants are $-15 + 6 = -9$ on the left and $7$ on the right, which are not equal.\n\nCheck: With $k = 6$ the equation becomes $12x - 9 = 12x + 7$, which simplifies to $-9 = 7$, a false statement for every $x$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): moves the $2kx$ term without changing its sign, solving $12 + 2k = 0$.\n* Choice C ($12$): forgets to distribute the $2$ to $kx$, so it matches $12x$ with $kx$.\n* Choice D ($22$): makes the constants equal; with $k = 22$ the $x$-coefficients are $12$ and $44$, so there is exactly one solution.\n\n**Test Day Takeaway:** No solution: same coefficient of $x$ on both sides, different constants. Infinitely many: both the same.",
      skills: ["parallel-line-slope", "no-solution-equation"]
    },
    {
      id: 10,
      difficulty: "hard",
      question: "$y = \\frac{a}{4}x + 7$\n$y = \\frac{5}{2}x - 3$\nIn the given system of equations, $a$ is a constant. If the system has no solution, what is the value of $a$?",
      choices: [
        // distractor: inverts the slope, solving a/4 = 2/5
        { id: "A", text: "$\\frac{8}{5}$" },
        // distractor: sets a equal to the slope 5/2, forgetting that the slope is a/4
        { id: "B", text: "$\\frac{5}{2}$" },
        { id: "C", text: "$10$" },
        // distractor: multiplies 5 by 4 and ignores the 2 in the denominator
        { id: "D", text: "$20$" }
      ],
      correctAnswer: "C",
      hint: "Two lines with no point in common have the same slope and different $y$-intercepts.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** No solution means equal slopes: $\\frac{a}{4} = \\frac{5}{2}$, so $a = 10$; the intercepts $7$ and $-3$ differ.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has no solution when the lines are parallel and distinct, that is, equal slopes and different $y$-intercepts.\nStep 2: The slopes are $\\frac{a}{4}$ and $\\frac{5}{2}$. Setting them equal gives $\\frac{a}{4} = \\frac{5}{2}$, so $a = 4 \\cdot \\frac{5}{2} = 10$.\nStep 3: The $y$-intercepts are $7$ and $-3$, which differ, so the lines are parallel and never meet.\n\nCheck: With $a = 10$, the system is $y = \\frac{5}{2}x + 7$ and $y = \\frac{5}{2}x - 3$; setting them equal gives $7 = -3$, which is false. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{8}{5}$): sets $\\frac{a}{4}$ equal to $\\frac{2}{5}$, the reciprocal of the slope.\n* Choice B ($\\frac{5}{2}$): sets $a$ itself equal to the slope instead of $\\frac{a}{4}$.\n* Choice D ($20$): multiplies $5$ by $4$ and loses the $2$ in the denominator.\n\n**Test Day Takeaway:** For a no-solution system in slope-intercept form, set the slopes equal and confirm the intercepts differ.",
      skills: ["parallel-line-slope", "no-solution-equation"]
    },

    // === TYPE 5: Find constant for no solution in system (advanced) ===
    {
      id: 11,
      difficulty: "hard",
      question: "In the $xy$-plane, line $\\ell$ is parallel to the line $y = -\\frac{2}{5}x + 1$ and passes through the points $(-7, r)$ and $(8, 3)$. What is the value of $r$?",
      choices: [
        // distractor: subtracts the y-values and x-values in opposite orders, solving (r - 3)/15 = -2/5
        { id: "A", text: "$-3$" },
        // distractor: computes the run as 8 - 7 = 1, dropping the negative of -7
        { id: "B", text: "$3.4$" },
        { id: "C", text: "$9$" },
        // distractor: uses the reciprocal slope -5/2 instead of -2/5
        { id: "D", text: "$40.5$" }
      ],
      correctAnswer: "C",
      hint: "The two given points must produce the stated slope.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~45s):** Line $\\ell$ has slope $-\\frac{2}{5}$, so $\\frac{3 - r}{8 - (-7)} = -\\frac{2}{5}$, giving $3 - r = -6$ and $r = 9$.\n\n**The Full Solution:**\nStep 1: Line $\\ell$ is parallel to $y = -\\frac{2}{5}x + 1$, so its slope is $-\\frac{2}{5}$.\nStep 2: The slope through $(-7, r)$ and $(8, 3)$ is $\\frac{3 - r}{8 - (-7)} = \\frac{3 - r}{15}$. Set it equal: $\\frac{3 - r}{15} = -\\frac{2}{5}$.\nStep 3: Multiply by $15$: $3 - r = -6$, so $r = 9$.\n\nCheck: $\\frac{3 - 9}{8 - (-7)} = \\frac{-6}{15} = -\\frac{2}{5}$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): writes the slope as $\\frac{r - 3}{8 - (-7)}$, subtracting the $y$-values in the opposite order from the $x$-values.\n* Choice B ($3.4$): computes the run as $8 - 7 = 1$, losing the negative sign of $-7$.\n* Choice D ($40.5$): uses $-\\frac{5}{2}$, the reciprocal of the slope.\n\n**Test Day Takeaway:** Set the two-point slope equal to the known slope, subtracting coordinates in the same order on top and bottom.",
      skills: ["parallel-line-slope", "system-no-solution", "algebraic-manipulation"]
    },
    {
      id: 12,
      difficulty: "hard",
      question: "$10x - 4y = 6$\n$-15x + 6y = c$\nIn the given system of equations, $c$ is a constant. If the system has infinitely many solutions, what is the value of $c$?",
      choices: [
        { id: "A", text: "$-9$" },
        // distractor: uses the inverted scale factor -2/3 instead of -3/2
        { id: "B", text: "$-4$" },
        // distractor: copies the constant 6, as if the constants must be equal
        { id: "C", text: "$6$" },
        // distractor: drops the negative sign of the scale factor -3/2
        { id: "D", text: "$9$" }
      ],
      correctAnswer: "A",
      hint: "One equation must be a constant multiple of the other, constants included.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~35s):** Multiplying the first equation by $-\\frac{3}{2}$ gives $-15x + 6y = -9$, so $c = -9$.\n\n**The Full Solution:**\nStep 1: The system has infinitely many solutions when the two equations describe the same line, so the second equation must be a multiple of the first.\nStep 2: The factor that turns $10x$ into $-15x$ is $-\\frac{3}{2}$, and it also turns $-4y$ into $6y$.\nStep 3: Apply the same factor to the constant: $c = -\\frac{3}{2}(6) = -9$.\n\nCheck: $-\\frac{3}{2}(10x - 4y) = -15x + 6y$ and $-\\frac{3}{2}(6) = -9$, so $-15x + 6y = -9$ is the first equation multiplied by $-\\frac{3}{2}$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($-4$): uses the factor $-\\frac{2}{3}$, which turns the second equation into the first, but applies it to the first equation's constant.\n* Choice C ($6$): assumes the constants must be equal, but the coefficients were scaled by $-\\frac{3}{2}$.\n* Choice D ($9$): uses $\\frac{3}{2}$ and loses the negative sign of the scale factor.\n\n**Test Day Takeaway:** Infinitely many solutions: find the one factor that matches the $x$- and $y$-coefficients, then apply it to the constant too.",
      skills: ["parallel-line-slope", "system-no-solution", "algebraic-manipulation"]
    }
  ],

  // Section: Perpendicular Lines (covers videos 23-24)
  "Perpendicular Lines": [
    {
      id: 1,
      difficulty: "easy",
      question: "$y = \\frac{5}{2}x - 8$\nIn the $xy$-plane, line $m$ is perpendicular to the graph of the given equation. What is the slope of line $m$?",
      choices: [
        // distractor: changes the sign of the slope but does not take the reciprocal
        { id: "A", text: "$-\\frac{5}{2}$" },
        { id: "B", text: "$-\\frac{2}{5}$" },
        // distractor: takes the reciprocal but does not change the sign
        { id: "C", text: "$\\frac{2}{5}$" },
        // distractor: copies the slope, which gives a parallel line
        { id: "D", text: "$\\frac{5}{2}$" }
      ],
      correctAnswer: "B",
      hint: "Flip the slope and change its sign.",
      explanation: "**Choice B is correct.**\n\n**The Fast Way (~15s):** The given line has slope $\\frac{5}{2}$; the negative reciprocal is $-\\frac{2}{5}$.\n\n**The Full Solution:**\nStep 1: The given equation is in slope-intercept form, so its slope is $\\frac{5}{2}$.\nStep 2: Perpendicular lines have slopes whose product is $-1$.\nStep 3: The slope of line $m$ is $-\\frac{2}{5}$, since $\\frac{5}{2} \\cdot \\left(-\\frac{2}{5}\\right) = -1$.\n\nCheck: $\\frac{5}{2} \\cdot \\left(-\\frac{2}{5}\\right) = -\\frac{10}{10} = -1$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{5}{2}$): changes the sign but keeps the fraction right side up; the product with $\\frac{5}{2}$ is $-\\frac{25}{4}$, not $-1$.\n* Choice C ($\\frac{2}{5}$): flips the fraction but keeps the sign; the product is $1$, not $-1$.\n* Choice D ($\\frac{5}{2}$): copies the slope, which describes a parallel line.\n\n**Test Day Takeaway:** A perpendicular slope needs both moves: take the reciprocal and change the sign.",
      skills: ["perpendicular-negative-reciprocal"]
    },
    {
      id: 2,
      difficulty: "easy",
      question: "In the $xy$-plane, line $j$ is perpendicular to the line with equation $y = -3x + 5$. Which equation could define line $j$?",
      choices: [
        // distractor: copies the slope -3, which gives a parallel line
        { id: "A", text: "$y = -3x + 2$" },
        // distractor: takes the reciprocal of -3 but keeps the negative sign
        { id: "B", text: "$y = -\\frac{1}{3}x + 2$" },
        { id: "C", text: "$y = \\frac{1}{3}x + 2$" },
        // distractor: changes the sign of -3 but does not take the reciprocal
        { id: "D", text: "$y = 3x + 2$" }
      ],
      correctAnswer: "C",
      hint: "Perpendicular slopes multiply to $-1$.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~15s):** The given slope is $-3$, so a perpendicular line has slope $\\frac{1}{3}$; only choice C has that slope.\n\n**The Full Solution:**\nStep 1: The line $y = -3x + 5$ has slope $-3$.\nStep 2: A perpendicular line has slope $m$ with $-3m = -1$, so $m = \\frac{1}{3}$.\nStep 3: The $y$-intercept can be any value, so $y = \\frac{1}{3}x + 2$ could define line $j$.\n\nCheck: $-3 \\cdot \\frac{1}{3} = -1$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -3x + 2$): has the same slope as the given line, so it is parallel, not perpendicular.\n* Choice B ($y = -\\frac{1}{3}x + 2$): takes the reciprocal but keeps the sign; $-3 \\cdot \\left(-\\frac{1}{3}\\right) = 1$.\n* Choice D ($y = 3x + 2$): changes the sign but does not take the reciprocal; $-3 \\cdot 3 = -9$.\n\n**Test Day Takeaway:** Check perpendicular slopes by multiplying them: the product must be $-1$.",
      skills: ["perpendicular-negative-reciprocal"]
    },
    {
      id: 3,
      difficulty: "medium",
      question: "In the $xy$-plane, line $\\ell$ passes through the point $(6, 7)$ and is perpendicular to the line $y = -\\frac{2}{3}x + 1$. Which equation defines line $\\ell$?",
      choices: [
        // distractor: takes the reciprocal of -2/3 but keeps the negative sign
        { id: "A", text: "$y = -\\frac{3}{2}x + 16$" },
        // distractor: changes the sign of -2/3 but does not take the reciprocal
        { id: "B", text: "$y = \\frac{2}{3}x + 3$" },
        { id: "C", text: "$y = \\frac{3}{2}x - 2$" },
        // distractor: uses the correct slope but adds 9 to 7 instead of subtracting when finding the y-intercept
        { id: "D", text: "$y = \\frac{3}{2}x + 16$" }
      ],
      correctAnswer: "C",
      hint: "Find the perpendicular slope first, then use the point to find the $y$-intercept.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~35s):** The perpendicular slope is $\\frac{3}{2}$, and $7 = \\frac{3}{2}(6) + b$ gives $b = -2$.\n\n**The Full Solution:**\nStep 1: The given line has slope $-\\frac{2}{3}$, so line $\\ell$ has the negative reciprocal slope, $\\frac{3}{2}$.\nStep 2: Substitute $(6, 7)$ into $y = \\frac{3}{2}x + b$: $7 = 9 + b$.\nStep 3: So $b = -2$, and line $\\ell$ is $y = \\frac{3}{2}x - 2$.\n\nCheck: $\\frac{3}{2}(6) - 2 = 9 - 2 = 7$, and $-\\frac{2}{3} \\cdot \\frac{3}{2} = -1$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -\\frac{3}{2}x + 16$): passes through $(6, 7)$ but keeps the negative sign, so it is not perpendicular.\n* Choice B ($y = \\frac{2}{3}x + 3$): passes through $(6, 7)$ but only changes the sign of the slope.\n* Choice D ($y = \\frac{3}{2}x + 16$): has the right slope but adds $9$ to $7$; at $x = 6$ it gives $y = 25$.\n\n**Test Day Takeaway:** Perpendicular line through a point: negative reciprocal slope first, then substitute the point to find $b$.",
      skills: ["perpendicular-negative-reciprocal", "writing-perpendicular-equation"]
    },
    {
      id: 4,
      difficulty: "medium",
      question: "In the $xy$-plane, line $k$ passes through the points $(-2, 7)$ and $(4, -1)$. Line $j$ is perpendicular to line $k$. What is the slope of line $j$?",
      choices: [
        // distractor: reports the slope of line k itself
        { id: "A", text: "$-\\frac{4}{3}$" },
        // distractor: takes the reciprocal of -4/3 but keeps the negative sign
        { id: "B", text: "$-\\frac{3}{4}$" },
        { id: "C", text: "$\\frac{3}{4}$" },
        // distractor: changes the sign of -4/3 but does not take the reciprocal
        { id: "D", text: "$\\frac{4}{3}$" }
      ],
      correctAnswer: "C",
      hint: "Find line $k$'s slope from its two points first.",
      explanation: "**Choice C is correct.**\n\n**The Fast Way (~30s):** Line $k$ has slope $\\frac{-1 - 7}{4 - (-2)} = -\\frac{4}{3}$, so line $j$ has slope $\\frac{3}{4}$.\n\n**The Full Solution:**\nStep 1: The slope of line $k$ is $\\frac{-1 - 7}{4 - (-2)} = \\frac{-8}{6} = -\\frac{4}{3}$.\nStep 2: Perpendicular slopes are negative reciprocals.\nStep 3: The slope of line $j$ is $\\frac{3}{4}$.\n\nCheck: $-\\frac{4}{3} \\cdot \\frac{3}{4} = -1$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{4}{3}$): is the slope of line $k$; the question asks about the perpendicular line.\n* Choice B ($-\\frac{3}{4}$): flips the fraction but keeps the sign; the product with $-\\frac{4}{3}$ is $1$.\n* Choice D ($\\frac{4}{3}$): changes the sign but does not flip the fraction.\n\n**Test Day Takeaway:** Two steps, in order: slope from the two points, then the negative reciprocal.",
      skills: ["perpendicular-negative-reciprocal"]
    },
    {
      id: 5,
      difficulty: "hard",
      question: "In the $xy$-plane, line $\\ell$ is perpendicular to the line $3x - 4y = 12$ and passes through the points $(2, 10)$ and $(8, k)$. What is the value of $k$?",
      choices: [
        { id: "A", text: "$2$" },
        // distractor: uses -3/4, changing the sign of the given slope without taking the reciprocal
        { id: "B", text: "$5.5$" },
        // distractor: uses 3/4, the slope of the given line, as if the lines were parallel
        { id: "C", text: "$14.5$" },
        // distractor: uses 4/3, taking the reciprocal without changing the sign
        { id: "D", text: "$18$" }
      ],
      correctAnswer: "A",
      hint: "Perpendicular lines have slopes whose product is $-1$.",
      explanation: "**Choice A is correct.**\n\n**The Fast Way (~50s):** The given line has slope $\\frac{3}{4}$, so line $\\ell$ has slope $-\\frac{4}{3}$; then $\\frac{k - 10}{8 - 2} = -\\frac{4}{3}$ gives $k = 2$.\n\n**The Full Solution:**\nStep 1: Solve $3x - 4y = 12$ for $y$: $y = \\frac{3}{4}x - 3$, so its slope is $\\frac{3}{4}$ and line $\\ell$ has slope $-\\frac{4}{3}$.\nStep 2: The slope through $(2, 10)$ and $(8, k)$ is $\\frac{k - 10}{8 - 2} = \\frac{k - 10}{6}$. Set it equal to $-\\frac{4}{3}$: $k - 10 = -8$.\nStep 3: So $k = 2$.\n\nCheck: $\\frac{2 - 10}{8 - 2} = \\frac{-8}{6} = -\\frac{4}{3}$, and $\\frac{3}{4} \\cdot \\left(-\\frac{4}{3}\\right) = -1$. ✓\n\n**Why the wrong answers are tempting:**\n* Choice B ($5.5$): uses $-\\frac{3}{4}$, which changes the sign but does not take the reciprocal.\n* Choice C ($14.5$): uses $\\frac{3}{4}$, the slope of the given line, which would make the lines parallel.\n* Choice D ($18$): uses $\\frac{4}{3}$, which takes the reciprocal but keeps the positive sign.\n\n**Test Day Takeaway:** Convert the given line to slope-intercept form, take the negative reciprocal, then set the two-point slope equal to it.",
      skills: ["slope-from-points", "perpendicular-negative-reciprocal", "writing-perpendicular-equation"]
    }
  ]
};
