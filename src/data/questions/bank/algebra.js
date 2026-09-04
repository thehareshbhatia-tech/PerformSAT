export const algebraBank = [
  // === SLOPE FROM POINTS (5 questions) ===
  {
    id: "bank-alg-001",
    domain: "algebra",
    skills: ["slope-from-points"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The table gives the height, in centimeters, of a bamboo shoot on two days of a growth study. If the height increased at a constant rate, what was the rate of change, in centimeters per day, of the height?",
    questionTable: { headers: ["Day", "Height (cm)"], rows: [["2", "24"], ["6", "48"]] },
    choices: [
      // distractor: divides the change in height by the sum of the day numbers (24/8)
      { id: "A", text: "$3$" },
      { id: "B", text: "$6$" },
      // distractor: divides the later height by the later day number (48/6)
      { id: "C", text: "$8$" },
      // distractor: reports the change in height without dividing by the elapsed days
      { id: "D", text: "$24$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Rate of Change from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The height rose $48 - 24 = 24$ centimeters over $6 - 2 = 4$ days, so the rate is $\\frac{24}{4} = 6$ centimeters per day.\n\n**The Full Solution:**\nStep 1: A constant rate of change is $\\frac{\\text{change in height}}{\\text{change in days}}$, using the two rows of the table as the points $(2, 24)$ and $(6, 48)$.\nStep 2: Change in height $= 48 - 24 = 24$ centimeters; change in days $= 6 - 2 = 4$ days.\nStep 3: Rate $= \\frac{24}{4} = 6$ centimeters per day. Check: starting at $24$ centimeters on day $2$, four more days at $6$ centimeters per day gives $24 + 4(6) = 48$ centimeters on day $6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): divides the $24$-centimeter change by $2 + 6 = 8$, the sum of the day numbers, instead of by the elapsed $4$ days.\n* Choice C ($8$): divides the later height by the later day, $\\frac{48}{6}$, which treats the relationship as proportional through the origin.\n* Choice D ($24$): stops at the change in height and never divides by the change in days.\n\n**Test Day Takeaway:** A rate from two data points is always a difference divided by a difference: subtract the outputs, subtract the inputs, then divide.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "slope-rate-of-change",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-002",
    domain: "algebra",
    skills: ["slope-from-points"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The graph of line $k$ in the $xy$-plane is shown. Line $k$ passes through the points $(-3, 0)$ and $(3, 4)$. What is the slope of line $k$?",
    diagram: { type: "linearGraph", params: { slope: 0.6666667, yIntercept: 2, xRange: [-6, 6], yRange: [-4, 8], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[-3, 0], [3, 4]], label: "k" } },
    choices: [
      // distractor: negative reciprocal of the slope (run over rise with a sign flip)
      { id: "A", text: "$-\\frac{3}{2}$" },
      { id: "B", text: "$\\frac{2}{3}$" },
      // distractor: run over rise instead of rise over run
      { id: "C", text: "$\\frac{3}{2}$" },
      // distractor: change in y only, never divided by the change in x
      { id: "D", text: "$4$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** From $(-3, 0)$ to $(3, 4)$ the line rises $4$ while running $6$, so the slope is $\\frac{4}{6} = \\frac{2}{3}$.\n\n**The Full Solution:**\nStep 1: Slope $= \\frac{y_2 - y_1}{x_2 - x_1}$ for any two points on the line. Use $(x_1, y_1) = (-3, 0)$ and $(x_2, y_2) = (3, 4)$.\nStep 2: Rise $= 4 - 0 = 4$; run $= 3 - (-3) = 6$.\nStep 3: Slope $= \\frac{4}{6} = \\frac{2}{3}$. Check against the graph: from $(-3, 0)$, moving right $3$ units should raise the line by $\\frac{2}{3}(3) = 2$, landing on the $y$-intercept $(0, 2)$, which the graph shows. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{3}{2}$): computes $\\frac{\\text{run}}{\\text{rise}}$ and mishandles the sign of $3 - (-3)$; this is the slope of a perpendicular line, not of $k$.\n* Choice C ($\\frac{3}{2}$): inverts the ratio, putting the run $6$ over the rise $4$.\n* Choice D ($4$): reports the change in $y$ alone and never divides by the change in $x$.\n\n**Test Day Takeaway:** Slope is rise over run; subtracting $x$-coordinates that include a negative is where sign errors hide, so write $3 - (-3) = 6$ explicitly.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "slope-rate-of-change",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-003",
    domain: "algebra",
    skills: ["slope-from-points"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A courier service charges a flat fee plus a constant amount for each kilogram of a package's mass. A $3$-kilogram package costs $\\$19.50$ to ship, and a $9$-kilogram package costs $\\$34.50$ to ship. What is the charge per kilogram, in dollars?",
    choices: [
      // distractor: divides the cost difference by the sum of the masses (15/12)
      { id: "A", text: "$1.25$" },
      { id: "B", text: "$2.50$" },
      // distractor: divides one total by its mass (34.50/9), ignoring the flat fee
      { id: "C", text: "$3.83$" },
      // distractor: divides the other total by its mass (19.50/3), ignoring the flat fee
      { id: "D", text: "$6.50$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Per-Unit Rate (Slope of Cost)**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The cost rises $34.50 - 19.50 = 15.00$ dollars for $9 - 3 = 6$ extra kilograms, so the per-kilogram charge is $\\frac{15}{6} = 2.50$ dollars.\n\n**The Full Solution:**\nStep 1: The cost is linear in mass: $C = rm + F$, where $r$ is the charge per kilogram and $F$ is the flat fee. The two packages give the points $(3, 19.50)$ and $(9, 34.50)$.\nStep 2: The per-kilogram charge is the slope: $r = \\frac{34.50 - 19.50}{9 - 3} = \\frac{15}{6} = 2.50$.\nStep 3: Check by finding the flat fee: $19.50 - 2.50(3) = 12.00$, and then $12.00 + 2.50(9) = 34.50$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.25$): divides the $\\$15$ cost difference by $3 + 9 = 12$, the sum of the masses, rather than the $6$-kilogram difference.\n* Choice C ($3.83$): divides $34.50$ by $9$, treating the whole cost as per-kilogram and ignoring the flat fee.\n* Choice D ($6.50$): divides $19.50$ by $3$, the same error using the lighter package.\n\n**Test Day Takeaway:** When a flat fee is present, a single (mass, cost) pair cannot give the unit rate; subtract two pairs so the fee cancels.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "slope-rate-of-change",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-004",
    domain: "algebra",
    skills: ["slope-from-points"],
    difficulty: "medium",
    type: "fill-in",
    question: "The table gives the volume of propane, in gallons, in a heating tank on two days of a winter. If the volume decreased at a constant rate, at what rate, in gallons per day, did the volume decrease?",
    questionTable: { headers: ["Day", "Volume (gallons)"], rows: [["6", "210"], ["21", "150"]] },
    correctAnswer: "4",
    explanation: "**SAT Pattern: Rate from Two Points (Negative Slope)**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~15s):** The volume fell $210 - 150 = 60$ gallons over $21 - 6 = 15$ days, so it decreased at $\\frac{60}{15} = 4$ gallons per day.\n\n**The Full Solution:**\nStep 1: Treat the rows as points $(6, 210)$ and $(21, 150)$. The slope is $\\frac{150 - 210}{21 - 6} = \\frac{-60}{15} = -4$ gallons per day.\nStep 2: The negative sign means the volume is decreasing; the question asks for the rate of decrease, which is the size of the change, $4$ gallons per day.\nStep 3: Check: from $210$ gallons on day $6$, losing $4$ gallons per day for $15$ days gives $210 - 4(15) = 150$ gallons on day $21$. $\\checkmark$\n\n**Common Mistakes:** Entering $-4$ when the question asks for the rate of decrease as a positive quantity; dividing $60$ by $21$ (the day number) instead of by the $15$ elapsed days; dividing $210$ by $21$ to get $10$, which ignores the first reading entirely.\n\n**Test Day Takeaway:** Compute the slope with signs, then read the question's wording: \"rate of decrease\" wants the magnitude, while \"rate of change\" keeps the sign.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "slope-rate-of-change",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-005",
    domain: "algebra",
    skills: ["slope-from-points"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The table gives the water level, in centimeters, at a river gauge at two times on the same day. Over this interval the water level changed at a constant rate. What was the rate of change, in centimeters per hour, of the water level?",
    questionTable: { headers: ["Time", "Water level (cm)"], rows: [["6:50 A.M.", "184"], ["9:20 A.M.", "154"]] },
    choices: [
      // distractor: the change in level, never divided by the elapsed time
      { id: "A", text: "$-30$" },
      // distractor: uses 2 hours for the interval, ignoring the extra 30 minutes
      { id: "B", text: "$-15$" },
      { id: "C", text: "$-12$" },
      // distractor: uses 3 hours (subtracts the hour digits 9 - 6)
      { id: "D", text: "$-10$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Average Rate Over Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The level dropped $30$ centimeters between 6:50 A.M. and 9:20 A.M., which is $2$ hours $30$ minutes, or $2.5$ hours. The rate is $\\frac{-30}{2.5} = -12$ centimeters per hour.\n\n**The Full Solution:**\nStep 1: Change in level $= 154 - 184 = -30$ centimeters.\nStep 2: Elapsed time: from 6:50 A.M. to 8:50 A.M. is $2$ hours, and from 8:50 A.M. to 9:20 A.M. is $30$ more minutes, so the interval is $2.5$ hours. The rate is asked per hour, so the time must be expressed in hours.\nStep 3: Rate $= \\frac{-30}{2.5} = -12$ centimeters per hour. Check: $2.5$ hours at $-12$ centimeters per hour is $-30$ centimeters, and $184 - 30 = 154$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-30$): reports the total change in level and never divides by the elapsed time.\n* Choice B ($-15$): counts the interval as $2$ hours, dropping the final $30$ minutes, and computes $\\frac{-30}{2}$.\n* Choice D ($-10$): subtracts the hour digits, $9 - 6 = 3$ hours, ignoring the minutes entirely, and computes $\\frac{-30}{3}$.\n\n**Test Day Takeaway:** Convert clock times to a decimal number of hours before dividing; a rate \"per hour\" computed with a sloppy time interval is the most common trap in these items.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "slope-rate-of-change",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // === SLOPE-INTERCEPT FORM (7 questions) ===
  {
    id: "bank-alg-006",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A greenhouse heater raises the air temperature at a constant rate of $1.5$ degrees Fahrenheit per minute. The temperature was $48$ degrees Fahrenheit when the heater was turned on. Which equation gives the temperature $T$, in degrees Fahrenheit, $m$ minutes after the heater was turned on?",
    choices: [
      // distractor: treats the temperature as decreasing
      { id: "A", text: "$T = 48 - 1.5m$" },
      // distractor: swaps the rate and the starting value
      { id: "B", text: "$T = 48m + 1.5$" },
      // distractor: subtracts the starting temperature instead of adding it
      { id: "C", text: "$T = 1.5m - 48$" },
      { id: "D", text: "$T = 1.5m + 48$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Linear Model (Identify Slope and Intercept)**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Starting value $48$ plus $1.5$ for each of the $m$ minutes: $T = 1.5m + 48$.\n\n**The Full Solution:**\nStep 1: A quantity that starts at a fixed value and changes by a constant amount per unit of time is linear: $T = (\\text{rate})m + (\\text{starting value})$.\nStep 2: The rate is $1.5$ degrees per minute, and the starting value (at $m = 0$) is $48$ degrees, so $T = 1.5m + 48$.\nStep 3: Check with $m = 0$: $T = 48$, the temperature when the heater was turned on. After $10$ minutes, $T = 1.5(10) + 48 = 63$, which is $15$ degrees warmer, as expected. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($T = 48 - 1.5m$): models a temperature that falls $1.5$ degrees per minute, but the heater raises it.\n* Choice B ($T = 48m + 1.5$): swaps the roles of rate and starting value, making the temperature jump $48$ degrees every minute.\n* Choice C ($T = 1.5m - 48$): subtracts the starting temperature, giving $T = -48$ at $m = 0$, which contradicts the given start.\n\n**Test Day Takeaway:** In $y = mx + b$, the per-unit rate multiplies the variable and the starting amount stands alone; test $x = 0$ to confirm the intercept matches the story.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "linear-model",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-007",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A pottery studio charges a one-time kiln fee of $\\$45$ plus $\\$12$ for each session a member attends. Which equation gives the total cost $C$, in dollars, for a member who attends $s$ sessions?",
    choices: [
      // distractor: subtracts the one-time fee
      { id: "A", text: "$C = 12s - 45$" },
      // distractor: swaps the per-session charge and the one-time fee
      { id: "B", text: "$C = 45s + 12$" },
      { id: "C", text: "$C = 12s + 45$" },
      // distractor: adds the fee to the per-session charge as if the fee recurred every session
      { id: "D", text: "$C = 57s$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Linear Cost Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** One-time fee $45$, plus $12$ per session for $s$ sessions: $C = 12s + 45$.\n\n**The Full Solution:**\nStep 1: A fixed fee plus a constant charge per session is a linear cost: $C = (\\text{cost per session})s + (\\text{fixed fee})$.\nStep 2: The cost per session is $12$ and the fixed fee is $45$, so $C = 12s + 45$.\nStep 3: Check: with $s = 0$, $C = 45$, the fee alone; with $s = 3$, $C = 36 + 45 = 81$, which is $45$ plus three sessions at $12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($C = 12s - 45$): subtracts the kiln fee, giving a negative cost for a member with no sessions.\n* Choice B ($C = 45s + 12$): swaps the two numbers, charging $45$ per session and a $12$ fee.\n* Choice D ($C = 57s$): adds $45 + 12$ and charges it every session, as if the kiln fee recurred.\n\n**Test Day Takeaway:** A one-time fee is the $y$-intercept and a per-unit charge is the slope; a fee that is paid once never multiplies the variable.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "linear-model",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-008",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, a line has a slope of $-\\frac{3}{4}$ and a $y$-intercept of $(0, 6)$. Which of the following equations represents this line?",
    choices: [
      { id: "A", text: "$3x + 4y = 24$" },
      // distractor: slope 3/4 and y-intercept -6 (sign errors when clearing the fraction)
      { id: "B", text: "$3x - 4y = 24$" },
      // distractor: slope -4/3 (coefficients reversed)
      { id: "C", text: "$4x + 3y = 18$" },
      // distractor: slope 4/3 with the correct intercept
      { id: "D", text: "$4x - 3y = -18$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Slope-Intercept Form Identification**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The line is $y = -\\frac{3}{4}x + 6$. Multiplying by $4$ gives $4y = -3x + 24$, or $3x + 4y = 24$.\n\n**The Full Solution:**\nStep 1: In slope-intercept form the line is $y = -\\frac{3}{4}x + 6$. None of the choices is in that form, so rewrite it in standard form.\nStep 2: Multiply both sides by $4$ to clear the fraction: $4y = -3x + 24$. Add $3x$ to both sides: $3x + 4y = 24$.\nStep 3: Check choice A by solving for $y$: $4y = -3x + 24 \\Rightarrow y = -\\frac{3}{4}x + 6$, which has slope $-\\frac{3}{4}$ and passes through $(0, 6)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($3x - 4y = 24$): solving for $y$ gives $y = \\frac{3}{4}x - 6$, the wrong sign on both the slope and the intercept.\n* Choice C ($4x + 3y = 18$): gives $y = -\\frac{4}{3}x + 6$; the intercept is right but the coefficients of $x$ and $y$ are reversed, inverting the slope.\n* Choice D ($4x - 3y = -18$): gives $y = \\frac{4}{3}x + 6$, both the reciprocal and the wrong sign for the slope.\n\n**Test Day Takeaway:** When choices are in standard form $Ax + By = C$, the slope is $-\\frac{A}{B}$ and the $y$-intercept is $\\frac{C}{B}$; check both before committing.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "slope-intercept-identification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-009",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $r$ is defined by $r(t) = 2{,}400 - 85t$, where $r(t)$ is the estimated volume of fuel, in liters, remaining in a generator's tank $t$ hours after the generator is started. Which of the following is the best interpretation of $85$ in this context?",
    choices: [
      // distractor: confuses the slope with the initial value 2,400
      { id: "A", text: "The tank contains $85$ liters of fuel when the generator is started." },
      // distractor: treats the slope as the time until the output is zero
      { id: "B", text: "The generator can run for $85$ hours before the tank is empty." },
      // distractor: swaps the roles of input and output
      { id: "C", text: "After $85$ hours, $2{,}400$ liters of fuel remain in the tank." },
      { id: "D", text: "The generator uses $85$ liters of fuel each hour." }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** In $r(t) = 2{,}400 - 85t$, the coefficient of $t$ is the rate of change: each hour, $85$ liters are subtracted from the remaining volume.\n\n**The Full Solution:**\nStep 1: The function has the linear form $r(t) = b + mt$ with $b = 2{,}400$ and $m = -85$. The constant term is the value at $t = 0$, the starting volume.\nStep 2: The slope $m = -85$ is the change in $r(t)$ for each one-unit increase in $t$: the remaining fuel decreases by $85$ liters per hour, meaning the generator uses $85$ liters each hour.\nStep 3: Check: $r(1) = 2{,}400 - 85 = 2{,}315$ and $r(2) = 2{,}230$, a drop of $85$ liters for each additional hour. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: describes the $y$-intercept, but the starting volume is $2{,}400$ liters, not $85$.\n* Choice B: the running time until the tank is empty is the $t$-intercept, $\\frac{2{,}400}{85} \\approx 28$ hours, not $85$.\n* Choice C: substituting $t = 85$ gives $r(85) = 2{,}400 - 85(85)$, which is negative, so this statement is false and confuses the input with the output.\n\n**Test Day Takeaway:** In $y = b + mx$, the number multiplying the variable is always the change in the output per one unit of the input, with its sign telling the direction.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "interpret-slope",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-010",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Line $k$ is defined by $7x - 2y = 12$. Which of the following equations, written in slope-intercept form, also defines line $k$?",
    choices: [
      // distractor: moves 7x to the right side without changing its sign
      { id: "A", text: "$y = -\\frac{7}{2}x - 6$" },
      // distractor: divides by 2 instead of -2
      { id: "B", text: "$y = -\\frac{7}{2}x + 6$" },
      { id: "C", text: "$y = \\frac{7}{2}x - 6$" },
      // distractor: flips the sign of the x-term only, not the constant
      { id: "D", text: "$y = \\frac{7}{2}x + 6$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Standard to Slope-Intercept**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $7x - 2y = 12 \\Rightarrow -2y = -7x + 12 \\Rightarrow y = \\frac{7}{2}x - 6$.\n\n**The Full Solution:**\nStep 1: Isolate the $y$-term by subtracting $7x$ from both sides: $-2y = -7x + 12$.\nStep 2: Divide every term by $-2$: $y = \\frac{-7x}{-2} + \\frac{12}{-2} = \\frac{7}{2}x - 6$.\nStep 3: Check with a point. From $y = \\frac{7}{2}x - 6$, $x = 2$ gives $y = 1$; substituting into the original, $7(2) - 2(1) = 12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -\\frac{7}{2}x - 6$): moves $7x$ across without changing its sign, giving $-2y = 7x + 12$.\n* Choice B ($y = -\\frac{7}{2}x + 6$): divides $-7x + 12$ by $2$ instead of by $-2$, leaving both signs wrong.\n* Choice D ($y = \\frac{7}{2}x + 6$): divides the $x$-term by $-2$ correctly but forgets to divide the constant $12$ by $-2$.\n\n**Test Day Takeaway:** When dividing by a negative coefficient, every term on the other side changes sign, including the constant; verify with one quick point.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "standard-to-slope-intercept",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-011",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "At 10:30 A.M., a snowbank was $96$ centimeters tall. The snowbank melted at a constant rate, and at 1:00 P.M. the same day it was $66$ centimeters tall. If the snowbank continues to melt at this rate, at what time will its height reach $0$ centimeters?",
    choices: [
      // distractor: adds the 5.5 remaining hours to 10:30 A.M. instead of to 1:00 P.M.
      { id: "A", text: "4:00 P.M." },
      // distractor: uses 2 hours for the interval (rate 15 cm/h), then 66/15 = 4.4 h after 1:00 P.M.
      { id: "B", text: "5:24 P.M." },
      { id: "C", text: "6:30 P.M." },
      // distractor: divides the original 96 cm by 12 and counts 8 hours from 1:00 P.M.
      { id: "D", text: "9:00 P.M." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Linear Model to Find Zero Time**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The snowbank lost $30$ centimeters in $2.5$ hours, so it melts $12$ centimeters per hour. At 1:00 P.M. there are $66$ centimeters left, which lasts $\\frac{66}{12} = 5.5$ hours, reaching $0$ at 6:30 P.M.\n\n**The Full Solution:**\nStep 1: Find the rate. From 10:30 A.M. to 1:00 P.M. is $2.5$ hours, and the height dropped $96 - 66 = 30$ centimeters, so the rate is $\\frac{30}{2.5} = 12$ centimeters per hour.\nStep 2: Let $h$ be hours after 1:00 P.M. Then the height is $66 - 12h$. Set $66 - 12h = 0$: $h = \\frac{66}{12} = 5.5$ hours.\nStep 3: $5.5$ hours after 1:00 P.M. is 6:30 P.M. Check from the start instead: $96$ centimeters at $12$ per hour lasts $8$ hours, and $8$ hours after 10:30 A.M. is also 6:30 P.M. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (4:00 P.M.): finds the correct $5.5$ hours but counts them from 10:30 A.M., the time of the first measurement, instead of from 1:00 P.M.\n* Choice B (5:24 P.M.): treats the interval as $2$ hours, getting a rate of $15$ centimeters per hour, then $\\frac{66}{15} = 4.4$ hours, or $4$ hours $24$ minutes, after 1:00 P.M.\n* Choice D (9:00 P.M.): divides the original $96$ centimeters by $12$ to get $8$ hours but counts those $8$ hours from 1:00 P.M. rather than from 10:30 A.M.\n\n**Test Day Takeaway:** In a time-to-zero problem, anchor the remaining amount and the clock time to the same moment; mixing the starting height with the later time is the classic slip.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "linear-model-time",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-012",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The table gives the total number of downloads of an app on two days after its release. The total increased at a constant rate, and this rate is expected to continue. On which day will the total number of downloads first exceed $20{,}000$?",
    questionTable: { headers: ["Day", "Total downloads"], rows: [["0", "4,200"], ["12", "12,600"]] },
    choices: [
      // distractor: rounds 22.57 down; on day 22 the total is 19,600, still under 20,000
      { id: "A", text: "$22$" },
      { id: "B", text: "$23$" },
      // distractor: rounds up to 23 and then adds an extra day
      { id: "C", text: "$24$" },
      // distractor: divides 20,000 by 700, ignoring the 4,200 downloads on day 0
      { id: "D", text: "$29$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Linear Model Threshold**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The total grows $\\frac{12{,}600 - 4{,}200}{12} = 700$ per day. Solve $4{,}200 + 700d > 20{,}000$: $d > \\frac{15{,}800}{700} \\approx 22.6$, so the first whole day is day $23$.\n\n**The Full Solution:**\nStep 1: Rate $= \\frac{12{,}600 - 4{,}200}{12 - 0} = \\frac{8{,}400}{12} = 700$ downloads per day. Since day $0$ has $4{,}200$, the model is $D = 4{,}200 + 700d$.\nStep 2: The total exceeds $20{,}000$ when $4{,}200 + 700d > 20{,}000$, so $700d > 15{,}800$ and $d > 22.57\\ldots$.\nStep 3: Days are whole numbers, so the first day satisfying the inequality is day $23$. Check: on day $22$ the total is $4{,}200 + 700(22) = 19{,}600 < 20{,}000$; on day $23$ it is $20{,}300 > 20{,}000$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($22$): rounds $22.57$ down, but on day $22$ the total is only $19{,}600$, which does not exceed $20{,}000$.\n* Choice C ($24$): rounds up correctly to $23$ and then adds one more day for \"exceeds,\" double-counting the strict inequality.\n* Choice D ($29$): computes $\\frac{20{,}000}{700} \\approx 28.6$ and rounds up, forgetting the $4{,}200$ downloads already counted on day $0$.\n\n**Test Day Takeaway:** For a \"first exceeds\" question, solve the inequality, round the boundary up to the next whole unit, and confirm by testing that unit and the one before it.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "linear-model-inequality",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // === WORD PROBLEM TO EQUATION (6 questions) ===
  {
    id: "bank-alg-013",
    domain: "algebra",
    skills: ["word-problem-to-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A club printed a total of $140$ programs for an event. Each color program cost $\\$0.60$ to print and each black-and-white program cost $\\$0.25$ to print, for a total printing cost of $\\$56.00$. If $c$ is the number of color programs printed, which equation represents this situation?",
    choices: [
      // distractor: uses c for both program types
      { id: "A", text: "$0.60c + 0.25c = 56$" },
      // distractor: attaches the color price to the black-and-white count
      { id: "B", text: "$0.60(140 - c) + 0.25c = 56$" },
      { id: "C", text: "$0.60c + 0.25(140 - c) = 56$" },
      // distractor: charges all 140 programs at the black-and-white price in addition to the color ones
      { id: "D", text: "$0.60c + 0.25(140) = 56$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Word Problem to Equation Setup**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Color programs: $c$ at $0.60$ each. Black-and-white programs: the remaining $140 - c$ at $0.25$ each. Total cost: $0.60c + 0.25(140 - c) = 56$.\n\n**The Full Solution:**\nStep 1: Only one variable is defined, so express both counts with it: $c$ color programs and $140 - c$ black-and-white programs, since the two counts sum to $140$.\nStep 2: Cost is price times count for each type: $0.60c$ for color and $0.25(140 - c)$ for black-and-white. Their sum is the total, $56$.\nStep 3: Check that the equation is solvable with a sensible answer: $0.60c + 35 - 0.25c = 56 \\Rightarrow 0.35c = 21 \\Rightarrow c = 60$, so $60$ color and $80$ black-and-white programs cost $36 + 20 = 56$ dollars. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.60c + 0.25c = 56$): uses $c$ for both counts, ignoring that the black-and-white count is $140 - c$.\n* Choice B ($0.60(140 - c) + 0.25c = 56$): pairs the color price with the black-and-white count, reversing the definition of $c$.\n* Choice D ($0.60c + 0.25(140) = 56$): charges all $140$ programs at the black-and-white price and then adds the color programs again.\n\n**Test Day Takeaway:** When a total count is given and only one variable is defined, the other count is \"total minus the variable\"; write both counts before multiplying by prices.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "word-problem-setup",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-014",
    domain: "algebra",
    skills: ["word-problem-to-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A community garden charges $\\$32$ per season for a plot plus $\\$4$ for each bag of compost a gardener buys. A gardener paid a total of $\\$68$ for one season. Which equation can be used to find $b$, the number of bags of compost the gardener bought?",
    choices: [
      // distractor: subtracts the plot fee instead of adding it
      { id: "A", text: "$4b - 32 = 68$" },
      // distractor: swaps the fee and the per-bag price
      { id: "B", text: "$32b + 4 = 68$" },
      // distractor: adds the fee to the per-bag price as if the fee were charged per bag
      { id: "C", text: "$36b = 68$" },
      { id: "D", text: "$32 + 4b = 68$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Fixed plot fee $32$ plus $4$ per bag for $b$ bags equals the total $68$: $32 + 4b = 68$.\n\n**The Full Solution:**\nStep 1: The total cost is the one-time plot fee plus the compost cost. The compost cost is $4$ dollars per bag times $b$ bags, or $4b$.\nStep 2: Set the sum equal to the amount paid: $32 + 4b = 68$.\nStep 3: Check by solving: $4b = 36$, so $b = 9$. Nine bags at $4$ dollars is $36$ dollars, and $32 + 36 = 68$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4b - 32 = 68$): subtracts the plot fee, treating it as a discount rather than a charge.\n* Choice B ($32b + 4 = 68$): swaps the numbers, charging $32$ per bag with a $4$ fee.\n* Choice C ($36b = 68$): adds $32 + 4$ and multiplies by $b$, charging the plot fee once per bag.\n\n**Test Day Takeaway:** Fixed charge plus rate times quantity equals total; solve the equation you wrote and confirm the answer is a whole number of items.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "word-problem-setup",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-015",
    domain: "algebra",
    skills: ["word-problem-to-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "At the start of a planting season, one orchard has $640$ trees and adds $40$ trees each week. A second orchard has $1{,}000$ trees and removes $20$ trees each week. If these rates continue, after how many weeks will the two orchards have the same number of trees?",
    choices: [
      { id: "A", text: "$6$" },
      // distractor: ignores the removal rate (40w = 360)
      { id: "B", text: "$9$" },
      // distractor: sign error on the removal (640 + 40w = 1,000 + 20w)
      { id: "C", text: "$18$" },
      // distractor: reports the combined rate 40 + 20 instead of the time
      { id: "D", text: "$60$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Set Two Linear Models Equal**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The gap of $1{,}000 - 640 = 360$ trees closes at $40 + 20 = 60$ trees per week, so it closes in $\\frac{360}{60} = 6$ weeks.\n\n**The Full Solution:**\nStep 1: Let $w$ be the number of weeks. First orchard: $640 + 40w$. Second orchard: $1{,}000 - 20w$ (removing trees is a negative rate).\nStep 2: Set them equal: $640 + 40w = 1{,}000 - 20w$. Add $20w$ to both sides and subtract $640$: $60w = 360$, so $w = 6$.\nStep 3: Check: after $6$ weeks the first orchard has $640 + 240 = 880$ trees and the second has $1{,}000 - 120 = 880$ trees. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): solves $640 + 40w = 1{,}000$, ignoring that the second orchard is shrinking.\n* Choice C ($18$): writes the second orchard as $1{,}000 + 20w$, a sign error, and gets $20w = 360$.\n* Choice D ($60$): reports the combined closing rate, $40 + 20$, instead of solving for the time.\n\n**Test Day Takeaway:** When one quantity grows and another shrinks, their gap closes at the sum of the two rates; the time is the initial gap divided by that sum.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "word-problem-setup",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-016",
    domain: "algebra",
    skills: ["word-problem-to-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A road crew has already paved $850$ meters of a road and continues paving at a constant rate of $125$ meters per hour. How many more hours will the crew need to pave until the total paved length is $2{,}600$ meters?",
    choices: [
      // distractor: 850/125, the hours already worked rather than the hours remaining
      { id: "A", text: "$6.8$" },
      { id: "B", text: "$14$" },
      // distractor: 2,600/125, ignoring the 850 meters already paved
      { id: "C", text: "$20.8$" },
      // distractor: (2,600 + 850)/125, adding the paved length instead of subtracting it
      { id: "D", text: "$27.6$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Linear Equation with Starting Quantity**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Remaining length $= 2{,}600 - 850 = 1{,}750$ meters, and $\\frac{1{,}750}{125} = 14$ hours.\n\n**The Full Solution:**\nStep 1: Let $h$ be the additional hours. The paved length after $h$ more hours is $850 + 125h$.\nStep 2: Set it equal to the target: $850 + 125h = 2{,}600$, so $125h = 1{,}750$ and $h = 14$.\nStep 3: Check: $14$ hours at $125$ meters per hour is $1{,}750$ meters, and $850 + 1{,}750 = 2{,}600$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6.8$): computes $\\frac{850}{125}$, the time the crew has already spent, not the time remaining.\n* Choice C ($20.8$): computes $\\frac{2{,}600}{125}$, as if the crew were starting from zero.\n* Choice D ($27.6$): adds $850$ to $2{,}600$ instead of subtracting it before dividing.\n\n**Test Day Takeaway:** \"Already has\" is a starting value on the same side as the rate term; subtract it from the target before dividing by the rate.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "word-problem-setup",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-017",
    domain: "algebra",
    skills: ["word-problem-to-equation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A rooftop deck can safely support a total load of at most $3{,}600$ kilograms. Each planter on the deck has a mass of $85$ kilograms, and each bench has a mass of $140$ kilograms. If $14$ planters are already on the deck, what is the maximum number of benches that can be added without exceeding the load limit?",
    choices: [
      { id: "A", text: "$17$" },
      // distractor: rounds 17.2 up, which exceeds the limit (18 benches add 2,520 kg > 2,410 kg available)
      { id: "B", text: "$18$" },
      // distractor: 3,600/140 rounded down, ignoring the planters already on the deck
      { id: "C", text: "$25$" },
      // distractor: 2,410/85 rounded down, using the planter mass for the benches
      { id: "D", text: "$28$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The planters use $14(85) = 1{,}190$ kilograms, leaving $3{,}600 - 1{,}190 = 2{,}410$ kilograms. Since $\\frac{2{,}410}{140} \\approx 17.2$, at most $17$ benches fit.\n\n**The Full Solution:**\nStep 1: Let $n$ be the number of benches. The total load is $85(14) + 140n = 1{,}190 + 140n$, and it must satisfy $1{,}190 + 140n \\leq 3{,}600$.\nStep 2: Subtract $1{,}190$: $140n \\leq 2{,}410$, so $n \\leq 17.21\\ldots$.\nStep 3: $n$ must be a whole number, so the maximum is $17$. Check: $1{,}190 + 140(17) = 3{,}570 \\leq 3{,}600$, while $18$ benches give $3{,}710 > 3{,}600$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($18$): rounds $17.2$ up, but $18$ benches push the load to $3{,}710$ kilograms, over the limit.\n* Choice C ($25$): divides $3{,}600$ by $140$ and rounds down, ignoring the $1{,}190$ kilograms of planters already on the deck.\n* Choice D ($28$): divides the remaining $2{,}410$ kilograms by $85$, the planter mass, instead of by the bench mass.\n\n**Test Day Takeaway:** For a \"maximum number\" under a limit, subtract what is already used, divide by the per-item amount, and round DOWN; then verify one more item breaks the limit.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "inequality-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-018",
    domain: "algebra",
    skills: ["word-problem-to-equation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A coworking space charges a one-time deposit of $d$ dollars plus $\\$180$ per month. A second coworking space charges $\\$225$ per month with no deposit. The total cost of using the first space for $12$ months is the same as the total cost of using the second space for $10$ months. What is the value of $d$?",
    choices: [
      { id: "A", text: "$90$" },
      // distractor: uses 10 months for both spaces: 225(10) - 180(10)
      { id: "B", text: "$450$" },
      // distractor: uses 12 months for both spaces: 225(12) - 180(12)
      { id: "C", text: "$540$" },
      // distractor: swaps the two durations: d + 180(10) = 225(12)
      { id: "D", text: "$900$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Break-Even Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The second space costs $225(10) = 2{,}250$ for $10$ months, and the first costs $d + 180(12) = d + 2{,}160$ for $12$ months. Setting the totals equal gives $d = 2{,}250 - 2{,}160 = 90$.\n\n**The Full Solution:**\nStep 1: Build each total with its own number of months. First space for $12$ months: $d + 180(12) = d + 2{,}160$. Second space for $10$ months: $225(10) = 2{,}250$.\nStep 2: The two totals are equal: $d + 2{,}160 = 2{,}250$. Subtract $2{,}160$ from both sides: $d = 90$.\nStep 3: Check: $90 + 180(12) = 90 + 2{,}160 = 2{,}250$, and $225(10) = 2{,}250$, so the two totals match. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($450$): uses $10$ months for both spaces, computing $225(10) - 180(10)$, and ignores that the first space is used for $12$ months.\n* Choice C ($540$): uses $12$ months for both spaces, computing $225(12) - 180(12)$.\n* Choice D ($900$): swaps the two durations, solving $d + 180(10) = 225(12)$ instead.\n\n**Test Day Takeaway:** A break-even with an unknown fixed charge is solved by equating the two totals, but each total must be built with ITS OWN duration; the deposit is whatever remains after the monthly charges are subtracted.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "break-even-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // === TABLE TO EQUATION (4 questions) ===
  {
    id: "bank-alg-019",
    domain: "algebra",
    skills: ["table-to-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The table gives the total cost $C$, in dollars, of a catering order for $n$ guests for three values of $n$. The relationship between $n$ and $C$ is linear. Which equation represents this relationship?",
    questionTable: { headers: ["Guests, n", "Total cost, C (dollars)"], rows: [["10", "260"], ["20", "460"], ["30", "660"]] },
    choices: [
      // distractor: uses the first cost, 260, as the intercept
      { id: "A", text: "$C = 20n + 260$" },
      // distractor: divides 260 by 10 and assumes a proportional relationship
      { id: "B", text: "$C = 26n$" },
      // distractor: swaps the slope and the intercept
      { id: "C", text: "$C = 60n + 20$" },
      { id: "D", text: "$C = 20n + 60$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Linear Equation from Table**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Each additional $10$ guests adds $200$ dollars, so the slope is $20$ per guest. Then $260 = 20(10) + b$ gives $b = 60$, and $C = 20n + 60$.\n\n**The Full Solution:**\nStep 1: Slope from two rows: $\\frac{460 - 260}{20 - 10} = \\frac{200}{10} = 20$ dollars per guest.\nStep 2: Find the intercept with $C = 20n + b$ and the row $(10, 260)$: $260 = 200 + b$, so $b = 60$.\nStep 3: The equation is $C = 20n + 60$. Check the third row: $20(30) + 60 = 660$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($C = 20n + 260$): has the right slope but takes the first table cost as the intercept, forgetting that it corresponds to $n = 10$, not $n = 0$.\n* Choice B ($C = 26n$): divides $260$ by $10$ and assumes cost is proportional to guests; it fails the second row ($26 \\cdot 20 = 520 \\neq 460$).\n* Choice C ($C = 60n + 20$): swaps the slope and the intercept.\n\n**Test Day Takeaway:** The intercept is the value at input $0$; when the table does not include $0$, back it out by substituting one row into $y = mx + b$, then confirm with another row.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "table-to-linear",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-020",
    domain: "algebra",
    skills: ["table-to-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The table gives the balance $B$, in dollars, of a savings account after $w$ weekly deposits of equal size, for three values of $w$. Which function models the balance after $w$ deposits?",
    questionTable: { headers: ["Deposits, w", "Balance, B (dollars)"], rows: [["0", "250"], ["1", "285"], ["2", "320"]] },
    choices: [
      { id: "A", text: "$B(w) = 35w + 250$" },
      // distractor: uses the balance after one deposit as the intercept
      { id: "B", text: "$B(w) = 35w + 285$" },
      // distractor: swaps the deposit size and the starting balance
      { id: "C", text: "$B(w) = 250w + 35$" },
      // distractor: uses a balance as the slope
      { id: "D", text: "$B(w) = 285w + 250$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Linear Equation from Table (Intercept Given)**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The row $w = 0$ gives the intercept directly, $250$. Each deposit raises the balance by $285 - 250 = 35$, so $B(w) = 35w + 250$.\n\n**The Full Solution:**\nStep 1: The intercept is the output when the input is $0$: the table shows $B(0) = 250$.\nStep 2: The slope is the change per deposit: $\\frac{285 - 250}{1 - 0} = 35$, confirmed by $320 - 285 = 35$.\nStep 3: So $B(w) = 35w + 250$. Check $w = 2$: $35(2) + 250 = 320$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($B(w) = 35w + 285$): uses the balance after the first deposit as the starting balance; it gives $B(0) = 285$, contradicting the table.\n* Choice C ($B(w) = 250w + 35$): swaps the deposit size and the starting balance.\n* Choice D ($B(w) = 285w + 250$): uses the second row's balance as the slope instead of the difference between rows.\n\n**Test Day Takeaway:** When a table contains the input $0$, its output is the intercept with no computation; spend the effort on the slope and a one-row check.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "table-to-linear",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-021",
    domain: "algebra",
    skills: ["table-to-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "For the linear function $f$, the table shows $f(x)$ at three inputs. If $f(x) = ax + b$, where $a$ and $b$ are constants, what is the value of $b$?",
    questionTable: { headers: ["x", "f(x)"], rows: [["3", "22"], ["7", "42"], ["11", "62"]] },
    choices: [
      // distractor: pairs the output 22 with the input 7 from a different row (22 - 35)
      { id: "A", text: "$-13$" },
      // distractor: reports the slope a instead of b
      { id: "B", text: "$5$" },
      { id: "C", text: "$7$" },
      // distractor: treats f(3) as if it were f(0)
      { id: "D", text: "$22$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Find Intercept from Slope and Point**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The outputs rise $20$ for every $4$ in $x$, so $a = 5$. Then $22 = 5(3) + b$ gives $b = 7$.\n\n**The Full Solution:**\nStep 1: Slope: $a = \\frac{42 - 22}{7 - 3} = \\frac{20}{4} = 5$.\nStep 2: Substitute one row into $f(x) = 5x + b$. Using $(3, 22)$: $22 = 15 + b$, so $b = 7$.\nStep 3: Check with another row: $f(11) = 5(11) + 7 = 62$, matching the table. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-13$): computes $22 - 5(7)$, mixing the output of one row with the input of another.\n* Choice B ($5$): reports the slope $a$; the question asks for the constant $b$.\n* Choice D ($22$): takes $f(3)$ as the intercept, but the intercept is $f(0)$, which the table does not list.\n\n**Test Day Takeaway:** After finding the slope, substitute a single complete row (its $x$ AND its $f(x)$) to solve for $b$; never mix coordinates across rows.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "table-to-linear",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-022",
    domain: "algebra",
    skills: ["table-to-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table gives the remaining charge $p$, as a percent of capacity, of a drone's battery $t$ minutes after takeoff, for three values of $t$. Which linear function models $p$ in terms of $t$?",
    questionTable: { headers: ["t (minutes)", "p (percent)"], rows: [["2", "88"], ["6", "76"], ["10", "64"]] },
    choices: [
      { id: "A", text: "$p = -3t + 94$" },
      // distractor: uses the first row's charge as the intercept
      { id: "B", text: "$p = -3t + 88$" },
      // distractor: assumes 100 percent at takeoff without computing the intercept
      { id: "C", text: "$p = -3t + 100$" },
      // distractor: drops the negative sign on the slope
      { id: "D", text: "$p = 3t + 94$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Linear Function from Table (Negative Slope)**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The charge drops $12$ points every $4$ minutes, a slope of $-3$. Then $88 = -3(2) + b$ gives $b = 94$, so $p = -3t + 94$.\n\n**The Full Solution:**\nStep 1: Slope: $\\frac{76 - 88}{6 - 2} = \\frac{-12}{4} = -3$ percent per minute. The negative sign reflects a falling charge.\nStep 2: Substitute $(2, 88)$ into $p = -3t + b$: $88 = -6 + b$, so $b = 94$.\nStep 3: The model is $p = -3t + 94$. Check $t = 10$: $-30 + 94 = 64$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($p = -3t + 88$): uses the charge at $t = 2$ as the intercept, but the intercept is the charge at $t = 0$.\n* Choice C ($p = -3t + 100$): assumes the battery was full at takeoff; the table implies it started at $94$ percent.\n* Choice D ($p = 3t + 94$): drops the negative sign, describing a charge that increases during flight.\n\n**Test Day Takeaway:** A decreasing table means a negative slope; carry that sign into the intercept calculation, because $b = y - mx$ changes when $m$ is negative.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "table-to-linear",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // === FUNCTION EVALUATION (5 questions) ===
  {
    id: "bank-alg-023",
    domain: "algebra",
    skills: ["function-evaluation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $g$ is defined by $g(x) = 6x - 11$. What is the value of $g(4)$?",
    choices: [
      // distractor: subtracts inside first, 6(4 - 11)
      { id: "A", text: "$-42$" },
      // distractor: subtracts in the wrong order, 11 - 24
      { id: "B", text: "$-13$" },
      { id: "C", text: "$13$" },
      // distractor: drops the constant, 6(4) alone
      { id: "D", text: "$24$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Direct Function Evaluation**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Replace $x$ with $4$: $g(4) = 6(4) - 11 = 24 - 11 = 13$.\n\n**The Full Solution:**\nStep 1: $g(4)$ means the output of $g$ when the input is $4$, so substitute $4$ for every $x$ in the rule.\nStep 2: $g(4) = 6(4) - 11$. Multiply first: $6(4) = 24$.\nStep 3: Subtract: $24 - 11 = 13$. Check by reversing: $13 + 11 = 24$ and $24 \\div 6 = 4$, the input. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-42$): subtracts $11$ from $4$ before multiplying, as if the rule were $6(x - 11)$.\n* Choice B ($-13$): computes $11 - 24$, reversing the order of the subtraction.\n* Choice D ($24$): multiplies $6(4)$ but forgets to subtract $11$.\n\n**Test Day Takeaway:** Function notation is substitution: replace the variable, then follow the order of operations (multiply before subtracting).",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "direct-evaluation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-024",
    domain: "algebra",
    skills: ["function-evaluation"],
    difficulty: "easy",
    type: "fill-in",
    question: "The function $h$ is defined by $h(x) = -4x + 9$. What is the value of $h(-6)$?",
    correctAnswer: "33",
    explanation: "**SAT Pattern: Function Evaluation with Negatives**\n\n**The correct answer is $33$.**\n\n**The Fast Way (~5s):** $h(-6) = -4(-6) + 9 = 24 + 9 = 33$.\n\n**The Full Solution:**\nStep 1: Substitute $-6$ for $x$, keeping the parentheses: $h(-6) = -4(-6) + 9$.\nStep 2: A negative times a negative is positive: $-4(-6) = 24$.\nStep 3: Add: $24 + 9 = 33$. Check: $33 - 9 = 24$ and $24 \\div (-4) = -6$, the original input. $\\checkmark$\n\n**Common Mistakes:** Getting $-15$ by computing $-24 + 9$, which forgets that $-4(-6)$ is positive; getting $15$ by subtracting $9$ instead of adding; dropping the input's sign and computing $h(6) = -15$.\n\n**Test Day Takeaway:** Always wrap a negative input in parentheses before multiplying; the sign of the product is decided before any addition.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "direct-evaluation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-025",
    domain: "algebra",
    skills: ["function-evaluation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $C$ is defined by $C(n) = 10n + 11$, where $C(n)$ is the total cost, in dollars, of renting a kayak for $n$ hours. If the total cost of one rental was $\\$71$, for how many hours was the kayak rented?",
    choices: [
      { id: "A", text: "$6$" },
      // distractor: 71/10, ignoring the fixed 11 dollars
      { id: "B", text: "$7.1$" },
      // distractor: (71 + 11)/10, adding the fixed charge instead of subtracting it
      { id: "C", text: "$8.2$" },
      // distractor: stops at 10n = 60
      { id: "D", text: "$60$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Solve for Function Input**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Set the output equal to $71$: $10n + 11 = 71$, so $10n = 60$ and $n = 6$.\n\n**The Full Solution:**\nStep 1: The total cost is the output of $C$, so the condition is $C(n) = 71$, or $10n + 11 = 71$.\nStep 2: Subtract $11$ from both sides: $10n = 60$. Divide by $10$: $n = 6$.\nStep 3: Check: $C(6) = 10(6) + 11 = 71$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($7.1$): divides $71$ by $10$ without first removing the fixed $11$ dollars.\n* Choice C ($8.2$): adds $11$ to $71$ instead of subtracting it, then divides by $10$.\n* Choice D ($60$): stops at $10n = 60$ and reports the right-hand side instead of $n$.\n\n**Test Day Takeaway:** \"The cost was 71\" fixes the OUTPUT; set the rule equal to it and undo the operations in reverse order (subtract the constant, then divide by the rate).",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-solve-for-input",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-026",
    domain: "algebra",
    skills: ["function-evaluation"],
    difficulty: "medium",
    type: "fill-in",
    question: "The function $p$ is defined by $p(x) = 2x^2 - 5x + 3$. What is the value of $p(-2)$?",
    correctAnswer: "21",
    explanation: "**SAT Pattern: Function Evaluation (Quadratic)**\n\n**The correct answer is $21$.**\n\n**The Fast Way (~10s):** $p(-2) = 2(-2)^2 - 5(-2) + 3 = 2(4) + 10 + 3 = 21$.\n\n**The Full Solution:**\nStep 1: Substitute $-2$ for $x$ with parentheses: $p(-2) = 2(-2)^2 - 5(-2) + 3$.\nStep 2: Evaluate the power first: $(-2)^2 = 4$, so the first term is $2(4) = 8$. The middle term is $-5(-2) = +10$.\nStep 3: Add: $8 + 10 + 3 = 21$. Check the signs once more: a squared negative is positive, and a negative times a negative is positive. $\\checkmark$\n\n**Common Mistakes:** Getting $5$ by computing $-2^2 = -4$ (squaring only the $2$ and leaving the sign outside), which turns the first term into $-8$; getting $1$ by writing $-5(-2)$ as $-10$; getting $-15$ by combining both sign errors.\n\n**Test Day Takeaway:** Write every substituted negative in parentheses; $(-2)^2$ and $-2^2$ are different numbers, and the parentheses decide which one you compute.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "direct-evaluation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-027",
    domain: "algebra",
    skills: ["function-evaluation", "function-notation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = -3x + 11$. If $f(4a - 7) = f(2a + 5)$, where $a$ is a constant, what is the value of $a$?",
    choices: [
      // distractor: moves the constants with the wrong sign (2a = 5 - 7)
      { id: "A", text: "$-1$" },
      // distractor: sign error distributing -3 over +5 (gets -6a + 26 on the right)
      { id: "B", text: "$1$" },
      // distractor: divides 12 by 4 instead of by 2 at the last step
      { id: "C", text: "$3$" },
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Function Equality (One-to-One Linear)**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** A linear function with nonzero slope never gives the same output for two different inputs, so $f(4a - 7) = f(2a + 5)$ forces $4a - 7 = 2a + 5$, giving $2a = 12$ and $a = 6$.\n\n**The Full Solution:**\nStep 1: Because $f(x) = -3x + 11$ has slope $-3 \\neq 0$, it is one-to-one: equal outputs require equal inputs. So $4a - 7 = 2a + 5$.\nStep 2: Subtract $2a$ from both sides and add $7$: $2a = 12$, so $a = 6$.\nStep 3: Check by evaluating both sides: $4(6) - 7 = 17$ and $2(6) + 5 = 17$, so both inputs are $17$ and $f(17) = -40$ on each side. $\\checkmark$ (Expanding fully gives the same result: $-12a + 32 = -6a - 4 \\Rightarrow -6a = -36 \\Rightarrow a = 6$.)\n\n**Why the wrong answers are tempting:**\n* Choice A ($-1$): collects the constants as $5 - 7 = -2$ instead of $5 + 7 = 12$, giving $2a = -2$.\n* Choice B ($1$): expands the right side as $-6a + 15 + 11$, a sign error on $-3(5)$, leading to $-6a = -6$.\n* Choice C ($3$): reaches $2a = 12$ but divides by $4$ (the coefficient from the left side) instead of by $2$.\n\n**Test Day Takeaway:** When the same linear function appears on both sides, skip the expansion: equal outputs of a one-to-one function mean the inputs themselves are equal.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-equality",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // === PARALLEL LINE SLOPE (3 questions) ===
  {
    id: "bank-alg-028",
    domain: "algebra",
    skills: ["parallel-line-slope"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The graph of line $p$ in the $xy$-plane is shown. Line $p$ passes through the points $(0, -3)$ and $(2, 1)$. Line $q$, not shown, is parallel to line $p$. What is the slope of line $q$?",
    diagram: { type: "linearGraph", params: { slope: 2, yIntercept: -3, xRange: [-6, 6], yRange: [-6, 6], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, -3], [2, 1]], label: "p" } },
    choices: [
      // distractor: flips the sign of the slope
      { id: "A", text: "$-2$" },
      // distractor: gives the perpendicular slope (negative reciprocal)
      { id: "B", text: "$-\\frac{1}{2}$" },
      // distractor: inverts the slope (run over rise)
      { id: "C", text: "$\\frac{1}{2}$" },
      { id: "D", text: "$2$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Parallel Slope Identification**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** From $(0, -3)$ to $(2, 1)$ the line rises $4$ over a run of $2$, so line $p$ has slope $2$. Parallel lines have equal slopes, so line $q$ also has slope $2$.\n\n**The Full Solution:**\nStep 1: Slope of $p$: $\\frac{1 - (-3)}{2 - 0} = \\frac{4}{2} = 2$.\nStep 2: Two distinct lines in the $xy$-plane are parallel exactly when their slopes are equal, so the slope of $q$ equals the slope of $p$.\nStep 3: The slope of $q$ is $2$. Check on the graph: moving right $1$ unit from the $y$-intercept $(0, -3)$ raises the line $2$ units to $(1, -1)$, consistent with slope $2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): reverses the sign of the slope, which would describe a line falling from left to right, unlike $p$.\n* Choice B ($-\\frac{1}{2}$): gives the negative reciprocal, the slope of a line PERPENDICULAR to $p$, not parallel.\n* Choice C ($\\frac{1}{2}$): inverts the ratio, using run over rise.\n\n**Test Day Takeaway:** Parallel means the same slope, full stop; only perpendicular involves flipping and negating.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "parallel-slope-id",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-029",
    domain: "algebra",
    skills: ["parallel-line-slope"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Points $A(-4, 6)$ and $B(2, -3)$ are shown in the $xy$-plane. What is the slope of any line that is parallel to line $AB$?",
    diagram: { type: "coordinatePoints", params: { points: [[-4, 6], [2, -3]], xMin: -6, xMax: 6, yMin: -6, yMax: 8 } },
    choices: [
      { id: "A", text: "$-\\frac{3}{2}$" },
      // distractor: run over rise (inverted ratio)
      { id: "B", text: "$-\\frac{2}{3}$" },
      // distractor: the perpendicular slope (negative reciprocal)
      { id: "C", text: "$\\frac{2}{3}$" },
      // distractor: drops the negative sign
      { id: "D", text: "$\\frac{3}{2}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Parallel Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Slope of $AB = \\frac{-3 - 6}{2 - (-4)} = \\frac{-9}{6} = -\\frac{3}{2}$, and a parallel line shares that slope.\n\n**The Full Solution:**\nStep 1: Slope of $AB$: $\\frac{y_B - y_A}{x_B - x_A} = \\frac{-3 - 6}{2 - (-4)} = \\frac{-9}{6}$.\nStep 2: Simplify: $-\\frac{9}{6} = -\\frac{3}{2}$. The negative sign matches the plot: $B$ is lower and to the right of $A$.\nStep 3: Parallel lines have equal slopes, so any line parallel to $AB$ has slope $-\\frac{3}{2}$. Check: from $A(-4, 6)$, moving right $6$ and down $9$ lands on $(2, -3) = B$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{2}{3}$): inverts the ratio, dividing the run by the rise.\n* Choice C ($\\frac{2}{3}$): gives the negative reciprocal, which is the slope of a line perpendicular to $AB$.\n* Choice D ($\\frac{3}{2}$): drops the negative sign even though the line falls from left to right.\n\n**Test Day Takeaway:** Read the direction from the picture before computing: a line falling left-to-right must have a negative slope, which instantly eliminates half the choices.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "parallel-slope-id",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-030",
    domain: "algebra",
    skills: ["parallel-line-slope"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the $xy$-plane, the graph of the equation $9x - 6y = 27$ is a line. What is the slope of this line?",
    correctAnswer: "1.5",
    explanation: "**SAT Pattern: Slope from Standard Form**\n\n**The correct answer is $1.5$.**\n\n**The Fast Way (~10s):** For $Ax + By = C$, the slope is $-\\frac{A}{B} = -\\frac{9}{-6} = \\frac{3}{2} = 1.5$.\n\n**The Full Solution:**\nStep 1: Solve for $y$. Subtract $9x$: $-6y = -9x + 27$.\nStep 2: Divide by $-6$: $y = \\frac{9}{6}x - \\frac{27}{6} = \\frac{3}{2}x - \\frac{9}{2}$.\nStep 3: The coefficient of $x$ is the slope, $\\frac{3}{2} = 1.5$. Check with two points on the line: $(3, 0)$ and $(5, 3)$ both satisfy $9x - 6y = 27$, and $\\frac{3 - 0}{5 - 3} = \\frac{3}{2}$. $\\checkmark$ (Either $3/2$ or $1.5$ is accepted.)\n\n**Common Mistakes:** Entering $-1.5$ by reading the slope as $\\frac{9}{-6}$ without the extra negative from $-\\frac{A}{B}$; entering $9$ by taking the $x$-coefficient as the slope; entering $-4.5$, the $y$-intercept, instead of the slope.\n\n**Test Day Takeaway:** In standard form the slope is $-\\frac{A}{B}$; when $B$ is negative the two negatives cancel and the slope is positive.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "standard-form-slope",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // === WRITING PARALLEL EQUATION (3 questions) ===
  {
    id: "bank-alg-031",
    domain: "algebra",
    skills: ["writing-parallel-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, line $k$ is parallel to the line with equation $y = -\\frac{2}{3}x + 4$ and passes through the point $(6, -1)$. Which equation defines line $k$?",
    choices: [
      // distractor: uses the point's y-coordinate as the intercept
      { id: "A", text: "$y = -\\frac{2}{3}x - 1$" },
      { id: "B", text: "$y = -\\frac{2}{3}x + 3$" },
      // distractor: keeps the given line's intercept, which is the given line itself
      { id: "C", text: "$y = -\\frac{2}{3}x + 4$" },
      // distractor: uses the perpendicular slope
      { id: "D", text: "$y = \\frac{3}{2}x - 10$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Parallel means slope $-\\frac{2}{3}$. Substitute $(6, -1)$: $-1 = -\\frac{2}{3}(6) + b = -4 + b$, so $b = 3$ and $y = -\\frac{2}{3}x + 3$.\n\n**The Full Solution:**\nStep 1: Parallel lines have equal slopes, so line $k$ is $y = -\\frac{2}{3}x + b$ for some $b$.\nStep 2: The point $(6, -1)$ lies on $k$: $-1 = -\\frac{2}{3}(6) + b = -4 + b$, so $b = 3$.\nStep 3: Line $k$ is $y = -\\frac{2}{3}x + 3$. Check: at $x = 6$, $y = -4 + 3 = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -\\frac{2}{3}x - 1$): treats the $y$-coordinate of the given point as the $y$-intercept; but the point has $x = 6$, not $x = 0$.\n* Choice C ($y = -\\frac{2}{3}x + 4$): is the given line itself; it does not pass through $(6, -1)$, since $-4 + 4 = 0 \\neq -1$.\n* Choice D ($y = \\frac{3}{2}x - 10$): uses the negative reciprocal slope, which produces a perpendicular line.\n\n**Test Day Takeaway:** Copy the slope for a parallel line, then solve for $b$ by substituting the given point; the intercept is never just the point's $y$-value unless $x = 0$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "parallel-line-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-032",
    domain: "algebra",
    skills: ["writing-parallel-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Line $\\ell$ is defined by $5x - 2y = 8$. Line $n$ is parallel to line $\\ell$ in the $xy$-plane and passes through the point $(4, 3)$. Which equation defines line $n$?",
    choices: [
      // distractor: reads the slope from standard form as -5/2 (sign error)
      { id: "A", text: "$y = -\\frac{5}{2}x + 13$" },
      { id: "B", text: "$y = \\frac{5}{2}x - 7$" },
      // distractor: uses the point's y-coordinate as the intercept
      { id: "C", text: "$y = \\frac{5}{2}x + 3$" },
      // distractor: uses the x-coefficient 5 as the slope
      { id: "D", text: "$y = 5x - 17$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Parallel from Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** From $5x - 2y = 8$, the slope is $-\\frac{5}{-2} = \\frac{5}{2}$. Then $3 = \\frac{5}{2}(4) + b = 10 + b$, so $b = -7$ and $y = \\frac{5}{2}x - 7$.\n\n**The Full Solution:**\nStep 1: Find the slope of $\\ell$: $-2y = -5x + 8 \\Rightarrow y = \\frac{5}{2}x - 4$, so the slope is $\\frac{5}{2}$.\nStep 2: Line $n$ is parallel, so it has slope $\\frac{5}{2}$: $y = \\frac{5}{2}x + b$. Substitute $(4, 3)$: $3 = 10 + b$, so $b = -7$.\nStep 3: Line $n$ is $y = \\frac{5}{2}x - 7$. Check: at $x = 4$, $y = 10 - 7 = 3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -\\frac{5}{2}x + 13$): takes the slope as $-\\frac{5}{2}$, forgetting the negative sign on the $y$-coefficient, then solves for $b$ with that wrong slope.\n* Choice C ($y = \\frac{5}{2}x + 3$): has the right slope but uses the point's $y$-coordinate as the intercept.\n* Choice D ($y = 5x - 17$): uses the $x$-coefficient $5$ as the slope without dividing by the $y$-coefficient.\n\n**Test Day Takeaway:** Convert the standard-form line to $y = mx + b$ first (watch the sign of the $y$-coefficient), then reuse $m$ and solve for the new $b$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "parallel-line-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-033",
    domain: "algebra",
    skills: ["writing-parallel-equation", "parallel-line-slope"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Line $\\ell$ passes through the points $(-2, 9)$ and $(4, -6)$ in the $xy$-plane. Which of the following equations defines a line that is parallel to line $\\ell$ and has a $y$-intercept of $(0, 5)$?",
    choices: [
      // distractor: the equation of line l itself (intercept 4), not the required intercept 5
      { id: "A", text: "$y = -\\frac{5}{2}x + 4$" },
      // distractor: inverts the slope
      { id: "B", text: "$y = -\\frac{2}{5}x + 5$" },
      // distractor: drops the negative sign on the slope
      { id: "C", text: "$y = \\frac{5}{2}x + 5$" },
      { id: "D", text: "$y = -\\frac{5}{2}x + 5$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Parallel with Specified Intercept**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Slope of $\\ell$: $\\frac{-6 - 9}{4 - (-2)} = \\frac{-15}{6} = -\\frac{5}{2}$. A parallel line with $y$-intercept $5$ is $y = -\\frac{5}{2}x + 5$.\n\n**The Full Solution:**\nStep 1: Slope of $\\ell$: $m = \\frac{-6 - 9}{4 - (-2)} = \\frac{-15}{6} = -\\frac{5}{2}$.\nStep 2: A parallel line has the same slope, and the $y$-intercept is given directly as $(0, 5)$, so $b = 5$.\nStep 3: The line is $y = -\\frac{5}{2}x + 5$. Check that it is not $\\ell$ itself: $\\ell$ has intercept $9 - (-\\frac{5}{2})(-2) = 4$, so the two lines are distinct and parallel. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -\\frac{5}{2}x + 4$): is line $\\ell$ itself; it has the right slope but the wrong intercept.\n* Choice B ($y = -\\frac{2}{5}x + 5$): inverts the slope, dividing the change in $x$ by the change in $y$.\n* Choice C ($y = \\frac{5}{2}x + 5$): drops the negative sign even though $\\ell$ falls from left to right.\n\n**Test Day Takeaway:** When the intercept is given, the only work is the slope; compute it from the two points with signs and reuse it unchanged.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "parallel-line-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // === PERPENDICULAR NEGATIVE RECIPROCAL (3 questions) ===
  {
    id: "bank-alg-034",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane, line $r$ has a slope of $-6$. Line $s$ is perpendicular to line $r$. What is the slope of line $s$?",
    choices: [
      // distractor: keeps the same slope (parallel, not perpendicular)
      { id: "A", text: "$-6$" },
      // distractor: takes the reciprocal without changing the sign
      { id: "B", text: "$-\\frac{1}{6}$" },
      { id: "C", text: "$\\frac{1}{6}$" },
      // distractor: changes the sign without taking the reciprocal
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Perpendicular Slope (Negative Reciprocal)**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Perpendicular slopes are negative reciprocals: flip $-6 = -\\frac{6}{1}$ to $-\\frac{1}{6}$ and change the sign, giving $\\frac{1}{6}$.\n\n**The Full Solution:**\nStep 1: If two lines are perpendicular and neither is vertical, the product of their slopes is $-1$.\nStep 2: Let the slope of $s$ be $m$. Then $-6 \\cdot m = -1$, so $m = \\frac{-1}{-6} = \\frac{1}{6}$.\nStep 3: Check: $-6 \\cdot \\frac{1}{6} = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): repeats the slope of $r$, which describes a parallel line.\n* Choice B ($-\\frac{1}{6}$): takes the reciprocal but forgets to change the sign; the product $-6 \\cdot (-\\frac{1}{6}) = 1$, not $-1$.\n* Choice D ($6$): changes the sign but not the reciprocal; the product would be $-36$.\n\n**Test Day Takeaway:** Perpendicular slope = flip AND negate; verify by multiplying the two slopes to get exactly $-1$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "perpendicular-slope-id",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-035",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of line $t$ in the $xy$-plane is shown. Line $t$ passes through the points $(-4, 4)$ and $(4, 0)$. What is the slope of a line that is perpendicular to line $t$?",
    diagram: { type: "linearGraph", params: { slope: -0.5, yIntercept: 2, xRange: [-6, 6], yRange: [-4, 6], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[-4, 4], [4, 0]], label: "t" } },
    choices: [
      // distractor: takes the reciprocal of -1/2 without changing the sign
      { id: "A", text: "$-2$" },
      // distractor: reports the slope of line t itself
      { id: "B", text: "$-\\frac{1}{2}$" },
      // distractor: changes the sign of the slope but does not take the reciprocal
      { id: "C", text: "$\\frac{1}{2}$" },
      { id: "D", text: "$2$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Perpendicular Slope from Two Points**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Slope of $t$: $\\frac{0 - 4}{4 - (-4)} = \\frac{-4}{8} = -\\frac{1}{2}$. The negative reciprocal of $-\\frac{1}{2}$ is $2$.\n\n**The Full Solution:**\nStep 1: Slope of $t$ from the two points: $\\frac{0 - 4}{4 - (-4)} = \\frac{-4}{8} = -\\frac{1}{2}$, consistent with the graph falling gently from left to right.\nStep 2: A perpendicular line has slope $m$ with $-\\frac{1}{2} \\cdot m = -1$, so $m = 2$.\nStep 3: Check: $-\\frac{1}{2} \\cdot 2 = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): flips the fraction but keeps the negative sign; the product with $-\\frac{1}{2}$ would be $1$.\n* Choice B ($-\\frac{1}{2}$): is the slope of $t$ itself, the parallel slope.\n* Choice C ($\\frac{1}{2}$): changes only the sign without taking the reciprocal.\n\n**Test Day Takeaway:** Two-step problems hide a sign trap at each step: compute the original slope with signs, then flip AND negate for the perpendicular.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "perpendicular-slope-id",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-036",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the $xy$-plane, line $u$ has a slope of $-\\frac{2}{5}$. Line $v$ is perpendicular to line $u$. What is the slope of line $v$?",
    correctAnswer: "2.5",
    explanation: "**SAT Pattern: Perpendicular Slope as Decimal**\n\n**The correct answer is $2.5$.**\n\n**The Fast Way (~5s):** Flip and negate: the negative reciprocal of $-\\frac{2}{5}$ is $\\frac{5}{2} = 2.5$.\n\n**The Full Solution:**\nStep 1: Perpendicular lines (neither vertical) have slopes whose product is $-1$: $-\\frac{2}{5} \\cdot m = -1$.\nStep 2: Solve for $m$: $m = \\frac{-1}{-\\frac{2}{5}} = \\frac{5}{2}$.\nStep 3: As a decimal, $\\frac{5}{2} = 2.5$. Check: $-\\frac{2}{5} \\cdot 2.5 = -1$. $\\checkmark$ (Either $5/2$ or $2.5$ is accepted.)\n\n**Common Mistakes:** Entering $-2.5$ (reciprocal without the sign change); entering $0.4$ (sign change without the reciprocal, $\\frac{2}{5} = 0.4$); entering $-0.4$ (the original slope).\n\n**Test Day Takeaway:** For a fill-in, a fraction and its decimal are both accepted; the risk is the sign, so multiply your answer by the original slope and confirm you get $-1$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "perpendicular-slope-id",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // === WRITING PERPENDICULAR EQUATION (3 questions) ===
  {
    id: "bank-alg-037",
    domain: "algebra",
    skills: ["writing-perpendicular-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, line $g$ is perpendicular to the line with equation $y = \\frac{4}{3}x - 7$ and passes through the point $(8, 1)$. Which equation defines line $g$?",
    choices: [
      // distractor: changes the sign but does not flip the fraction
      { id: "A", text: "$y = -\\frac{4}{3}x + \\frac{35}{3}$" },
      { id: "B", text: "$y = -\\frac{3}{4}x + 7$" },
      // distractor: uses the point's y-coordinate as the intercept
      { id: "C", text: "$y = -\\frac{3}{4}x + 1$" },
      // distractor: flips the fraction but keeps the sign
      { id: "D", text: "$y = \\frac{3}{4}x - 5$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Perpendicular Line Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Perpendicular slope: $-\\frac{3}{4}$. Substitute $(8, 1)$: $1 = -\\frac{3}{4}(8) + b = -6 + b$, so $b = 7$ and $y = -\\frac{3}{4}x + 7$.\n\n**The Full Solution:**\nStep 1: The given line has slope $\\frac{4}{3}$, so a perpendicular line has slope $-\\frac{3}{4}$ (flip and negate; check: $\\frac{4}{3} \\cdot (-\\frac{3}{4}) = -1$).\nStep 2: Write $y = -\\frac{3}{4}x + b$ and substitute $(8, 1)$: $1 = -6 + b$, so $b = 7$.\nStep 3: Line $g$ is $y = -\\frac{3}{4}x + 7$. Check: at $x = 8$, $y = -6 + 7 = 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -\\frac{4}{3}x + \\frac{35}{3}$): negates the slope without flipping it, then solves for $b$ with that wrong slope.\n* Choice C ($y = -\\frac{3}{4}x + 1$): has the right slope but uses the $y$-coordinate of $(8, 1)$ as the intercept.\n* Choice D ($y = \\frac{3}{4}x - 5$): flips the fraction but keeps the positive sign, then finds $b = 1 - 6 = -5$.\n\n**Test Day Takeaway:** Perpendicular = flip and negate, then substitute the point for $b$; a quick product check ($m_1 m_2 = -1$) catches the two half-done slopes.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "perpendicular-line-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-038",
    domain: "algebra",
    skills: ["writing-perpendicular-equation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Line $\\ell$ is defined by $4x + 10y = 15$. Line $m$ is perpendicular to line $\\ell$ in the $xy$-plane and passes through the point $(-2, 6)$. Which of the following equations defines line $m$?",
    choices: [
      // distractor: parallel to l (slope -2/5) through the point
      { id: "A", text: "$2x + 5y = 26$" },
      // distractor: slope 2/5: sign changed but fraction not flipped
      { id: "B", text: "$2x - 5y = -34$" },
      // distractor: slope -5/2: fraction flipped but sign not changed
      { id: "C", text: "$5x + 2y = 2$" },
      { id: "D", text: "$5x - 2y = -22$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Perpendicular from Standard Form**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Slope of $\\ell$ is $-\\frac{4}{10} = -\\frac{2}{5}$, so $m$ has slope $\\frac{5}{2}$. Every choice passes through $(-2, 6)$, so only the slope decides: $5x - 2y = -22$ has slope $-\\frac{5}{-2} = \\frac{5}{2}$.\n\n**The Full Solution:**\nStep 1: Slope of $\\ell$: from $Ax + By = C$, slope $= -\\frac{A}{B} = -\\frac{4}{10} = -\\frac{2}{5}$. The perpendicular slope is the negative reciprocal, $\\frac{5}{2}$.\nStep 2: Line $m$: $y = \\frac{5}{2}x + b$ with $6 = \\frac{5}{2}(-2) + b = -5 + b$, so $b = 11$ and $y = \\frac{5}{2}x + 11$.\nStep 3: Convert to standard form: $2y = 5x + 22$, or $5x - 2y = -22$. Check the point: $5(-2) - 2(6) = -10 - 12 = -22$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2x + 5y = 26$): has slope $-\\frac{2}{5}$, the same as $\\ell$; it is the PARALLEL line through $(-2, 6)$.\n* Choice B ($2x - 5y = -34$): has slope $\\frac{2}{5}$, the sign changed but the fraction never flipped.\n* Choice C ($5x + 2y = 2$): has slope $-\\frac{5}{2}$, the fraction flipped but the sign unchanged.\n\n**Test Day Takeaway:** When every choice passes through the given point, the point cannot discriminate; compute each choice's slope as $-\\frac{A}{B}$ and match it to the required negative reciprocal.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "perpendicular-line-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-039",
    domain: "algebra",
    skills: ["writing-perpendicular-equation"],
    difficulty: "hard",
    type: "fill-in",
    question: "In the $xy$-plane, line $m$ is perpendicular to the line with equation $y = \\frac{3}{8}x - 2$ and passes through the point $(-6, 5)$. The $y$-intercept of line $m$ is $(0, c)$. What is the value of $c$?",
    correctAnswer: "-11",
    explanation: "**SAT Pattern: y-Intercept of Perpendicular Line**\n\n**The correct answer is $-11$.**\n\n**The Fast Way (~15s):** Perpendicular slope $= -\\frac{8}{3}$. Then $5 = -\\frac{8}{3}(-6) + c = 16 + c$, so $c = -11$.\n\n**The Full Solution:**\nStep 1: The given line has slope $\\frac{3}{8}$, so line $m$ has slope $-\\frac{8}{3}$ (flip and negate).\nStep 2: Write $y = -\\frac{8}{3}x + c$ and substitute $(-6, 5)$: $5 = -\\frac{8}{3}(-6) + c$. Since $-\\frac{8}{3}(-6) = 16$, this is $5 = 16 + c$.\nStep 3: $c = 5 - 16 = -11$. Check: at $x = -6$, $y = 16 - 11 = 5$. $\\checkmark$\n\n**Common Mistakes:** Entering $\\frac{29}{4}$ by using the parallel slope $\\frac{3}{8}$ instead of the perpendicular slope, since $5 = \\frac{3}{8}(-6) + c = -\\frac{9}{4} + c$ gives $c = \\frac{29}{4}$; entering $21$ by computing $-\\frac{8}{3}(-6)$ as $-16$; entering $5$ by treating the point's $y$-coordinate as the intercept.\n\n**Test Day Takeaway:** The intercept of a line through a known point is $c = y - mx$; with a negative slope and a negative $x$, the product $mx$ is positive, so $c$ ends up below $y$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "perpendicular-line-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // === SYSTEM SOLUTION TYPES (4 questions) ===
  {
    id: "bank-alg-040",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$y = -4x + 7$\n$y = -4x - 2$\n\nHow many solutions does the given system of equations have?",
    choices: [
      // distractor: assumes every linear system has one solution
      { id: "A", text: "Exactly one" },
      // distractor: two lines cannot cross at exactly two points
      { id: "B", text: "Exactly two" },
      // distractor: requires the same intercept as well as the same slope
      { id: "C", text: "Infinitely many" },
      { id: "D", text: "Zero" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Classify System (Parallel Lines)**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** Both lines have slope $-4$ but different $y$-intercepts ($7$ and $-2$), so they are parallel and never meet: zero solutions.\n\n**The Full Solution:**\nStep 1: Both equations are in slope-intercept form. The slopes are equal ($-4$ and $-4$), so the lines are either the same line or parallel.\nStep 2: The $y$-intercepts differ ($7 \\neq -2$), so the lines are distinct and parallel.\nStep 3: Parallel lines share no point, so the system has no solution. Algebraic check: setting $-4x + 7 = -4x - 2$ gives $7 = -2$, a false statement, confirming zero solutions. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (Exactly one): assumes any two linear equations cross once, but lines with equal slopes never do.\n* Choice B (Exactly two): two distinct lines can never intersect at exactly two points.\n* Choice C (Infinitely many): would require the equations to describe the same line, which needs equal intercepts too.\n\n**Test Day Takeaway:** Compare slopes first: equal slopes with different intercepts means zero solutions; equal slopes and equal intercepts means infinitely many; different slopes means exactly one.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "system-type-classification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-041",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$3x + 2y = 12$\n$6x - 4y = 8$\n\nHow many solutions does the given system of equations have?",
    choices: [
      // distractor: sees the doubled x-coefficient and assumes parallel lines
      { id: "A", text: "Zero" },
      { id: "B", text: "Exactly one" },
      // distractor: two lines cannot cross exactly twice
      { id: "C", text: "Exactly two" },
      // distractor: assumes the second equation is a multiple of the first
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Classify System (Different Slopes)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Slopes: $-\\frac{3}{2}$ for the first line and $-\\frac{6}{-4} = \\frac{3}{2}$ for the second. Different slopes mean the lines cross exactly once.\n\n**The Full Solution:**\nStep 1: Write each slope as $-\\frac{A}{B}$: first line $-\\frac{3}{2}$; second line $-\\frac{6}{-4} = \\frac{3}{2}$.\nStep 2: The slopes are not equal, so the lines are neither parallel nor identical; two non-parallel lines intersect in exactly one point.\nStep 3: Check by solving: doubling the first equation gives $6x + 4y = 24$; adding the second gives $12x = 32$, so $x = \\frac{8}{3}$, and then $y = 2$. One solution, $(\\frac{8}{3}, 2)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (Zero): notices that $6 = 2 \\cdot 3$ and assumes the lines are parallel, but the $y$-coefficient is $-4$, not $+4$, so the slopes differ.\n* Choice C (Exactly two): impossible for two straight lines.\n* Choice D (Infinitely many): would require the second equation to be exactly $2$ times the first, which fails on both the $y$-term and the constant.\n\n**Test Day Takeaway:** A doubled $x$-coefficient is bait; test the full ratio $\\frac{A_1}{A_2} = \\frac{B_1}{B_2}$ (with signs) before calling two lines parallel.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "system-type-classification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-042",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$4x - 10y = 14$\n$6x - 15y = k$\n\nIn the given system of equations, $k$ is a constant. If the system has infinitely many solutions, what is the value of $k$?",
    choices: [
      // distractor: divides 14 by 2 without multiplying by 3
      { id: "A", text: "$7$" },
      // distractor: leaves the constant unchanged
      { id: "B", text: "$14$" },
      { id: "C", text: "$21$" },
      // distractor: multiplies 14 by 3 without dividing by 2
      { id: "D", text: "$42$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Parameter for Identical Equations**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The second equation's coefficients are $\\frac{3}{2}$ times the first's ($4 \\to 6$, $-10 \\to -15$). For the same line, the constant must scale the same way: $k = \\frac{3}{2}(14) = 21$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the two equations describe the same line, so one equation is a constant multiple of the other.\nStep 2: The multiplier is $\\frac{6}{4} = \\frac{-15}{-10} = \\frac{3}{2}$. Multiply the first equation by $\\frac{3}{2}$: $6x - 15y = 21$.\nStep 3: Matching constants gives $k = 21$. Check: $\\frac{21}{14} = \\frac{3}{2}$, the same ratio as the coefficients. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): divides $14$ by $2$ but forgets to multiply by $3$, applying only half of the $\\frac{3}{2}$ scale factor.\n* Choice B ($14$): keeps the constant unchanged, which gives parallel lines and zero solutions.\n* Choice D ($42$): multiplies by $3$ without dividing by $2$.\n\n**Test Day Takeaway:** For \"infinitely many solutions,\" find the scale factor from the variable coefficients and apply the SAME factor to the constant.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "system-type-classification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-043",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$ax + 4y = 7$\n$6x - 8y = c$\n\nIn the given system of equations, $a$ and $c$ are constants. For which of the following values of $a$ and $c$ does the system have no solution?",
    choices: [
      { id: "A", text: "$a = -3$ and $c \\neq -14$" },
      // distractor: this makes the equations the same line: infinitely many solutions, not none
      { id: "B", text: "$a = -3$ and $c = -14$" },
      // distractor: drops the sign of the ratio -2
      { id: "C", text: "$a = 3$ and $c \\neq 14$" },
      // distractor: multiplies 6 by the ratio instead of dividing
      { id: "D", text: "$a = -12$ and $c \\neq -14$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Parameter for No Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** No solution means parallel, distinct lines: the second equation's coefficients must be a common multiple of the first's, but its constant must not be. From $4 \\to -8$ the multiplier is $-2$, so $a(-2) = 6$ gives $a = -3$, and the constant must satisfy $c \\neq 7(-2) = -14$.\n\n**The Full Solution:**\nStep 1: Two lines are parallel when their slopes are equal. Slope of the first: $-\\frac{a}{4}$; slope of the second: $-\\frac{6}{-8} = \\frac{3}{4}$. Setting $-\\frac{a}{4} = \\frac{3}{4}$ gives $a = -3$.\nStep 2: With $a = -3$ the first equation is $-3x + 4y = 7$, and multiplying it by $-2$ gives $6x - 8y = -14$. If $c = -14$ the two equations are the same line (infinitely many solutions), so no solution requires $c \\neq -14$.\nStep 3: Check: with $a = -3$ and, say, $c = 0$, the lines $-3x + 4y = 7$ and $6x - 8y = 0$ both have slope $\\frac{3}{4}$ but different intercepts ($\\frac{7}{4}$ and $0$), so they never meet. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($a = -3$ and $c = -14$): makes the second equation exactly $-2$ times the first, which is the SAME line and gives infinitely many solutions.\n* Choice C ($a = 3$ and $c \\neq 14$): uses the multiplier $2$ instead of $-2$, ignoring that $4y$ becomes $-8y$.\n* Choice D ($a = -12$ and $c \\neq -14$): computes $a = 6 \\cdot (-2)$, multiplying by the ratio when the first coefficient must be divided.\n\n**Test Day Takeaway:** \"No solution\" has two conditions: proportional coefficients (equal slopes) AND a constant that breaks the proportion; check both, because the same-proportion constant flips the answer to infinitely many.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "system-no-solution-parameter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // === SETTING UP SYSTEMS (4 questions) ===
  {
    id: "bank-alg-044",
    domain: "algebra",
    skills: ["setting-up-systems"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A school orchestra bought $v$ violin strings at $\\$9$ each and $c$ cello strings at $\\$14$ each. The orchestra bought $26$ strings in total and paid a total of $\\$289$. Which system of equations represents this situation?",
    choices: [
      { id: "A", text: "$v + c = 26$ and $9v + 14c = 289$" },
      // distractor: swaps the count total and the cost total
      { id: "B", text: "$v + c = 289$ and $9v + 14c = 26$" },
      // distractor: swaps the two prices
      { id: "C", text: "$v + c = 26$ and $14v + 9c = 289$" },
      // distractor: uses a difference instead of a sum for the count
      { id: "D", text: "$v - c = 26$ and $9v + 14c = 289$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: System Setup (Count + Cost)**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Count equation: $v + c = 26$. Cost equation: $9v + 14c = 289$.\n\n**The Full Solution:**\nStep 1: The number of strings is the sum of the two counts: $v + c = 26$.\nStep 2: The cost is price times count for each type, added: $9v + 14c = 289$.\nStep 3: Check that the system has a sensible solution: from $v = 26 - c$, $9(26 - c) + 14c = 289 \\Rightarrow 234 + 5c = 289 \\Rightarrow c = 11$ and $v = 15$; $15 + 11 = 26$ and $135 + 154 = 289$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($v + c = 289$ and $9v + 14c = 26$): swaps the two totals, putting the dollar amount with the counts.\n* Choice C ($v + c = 26$ and $14v + 9c = 289$): pairs each price with the wrong string type.\n* Choice D ($v - c = 26$ and $9v + 14c = 289$): subtracts the counts, but \"in total\" means the counts are added.\n\n**Test Day Takeaway:** Count-and-cost stories always produce one plain-sum equation for the counts and one price-weighted equation for the money; match each total to its own equation.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "system-setup-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-045",
    domain: "algebra",
    skills: ["setting-up-systems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "For an evening event, an aquarium sold adult tickets for $\\$14$ each and child tickets for $\\$9$ each. The number of child tickets sold was $3$ times the number of adult tickets sold, and the total ticket revenue was $\\$2{,}460$. If $a$ adult tickets and $c$ child tickets were sold, which system of equations represents this situation?",
    choices: [
      // distractor: reverses the ratio (makes adults 3 times children)
      { id: "A", text: "$a = 3c$ and $14a + 9c = 2{,}460$" },
      // distractor: swaps the two prices
      { id: "B", text: "$c = 3a$ and $9a + 14c = 2{,}460$" },
      // distractor: misreads "3 times" as a total of 3 tickets
      { id: "C", text: "$a + c = 3$ and $14a + 9c = 2{,}460$" },
      { id: "D", text: "$c = 3a$ and $14a + 9c = 2{,}460$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Ticket Sales System**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** \"Child tickets were $3$ times adult tickets\" is $c = 3a$. Revenue: $14a + 9c = 2{,}460$.\n\n**The Full Solution:**\nStep 1: Translate the comparison: the child count equals $3$ times the adult count, so $c = 3a$ (not $a = 3c$).\nStep 2: Revenue is price times count for each type: $14a + 9c = 2{,}460$.\nStep 3: Check by solving: substitute $c = 3a$ to get $14a + 27a = 41a = 2{,}460$, so $a = 60$ and $c = 180$; indeed $180 = 3(60)$ and $840 + 1{,}620 = 2{,}460$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($a = 3c$ and $14a + 9c = 2{,}460$): reverses the ratio, making adult tickets triple the child tickets.\n* Choice B ($c = 3a$ and $9a + 14c = 2{,}460$): attaches the child price to the adult count and vice versa.\n* Choice C ($a + c = 3$ and $14a + 9c = 2{,}460$): turns \"3 times\" into a total of $3$ tickets, which cannot produce $\\$2{,}460$.\n\n**Test Day Takeaway:** \"$X$ was $k$ times $Y$\" translates to $X = kY$: the multiplier attaches to the quantity being compared TO, and the larger quantity stands alone.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "system-setup-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-046",
    domain: "algebra",
    skills: ["setting-up-systems"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A jeweler melts together an alloy that is $60\\%$ gold and an alloy that is $90\\%$ gold to produce $45$ grams of an alloy that is $80\\%$ gold. If $x$ is the number of grams of the $60\\%$ alloy and $y$ is the number of grams of the $90\\%$ alloy, which system of equations represents this situation?",
    choices: [
      // distractor: sets the gold total equal to the percent 0.8 instead of 0.8 times 45 grams
      { id: "A", text: "$x + y = 45$ and $0.6x + 0.9y = 0.8$" },
      { id: "B", text: "$x + y = 45$ and $0.6x + 0.9y = 36$" },
      // distractor: swaps the mass total and the gold total
      { id: "C", text: "$x + y = 36$ and $0.6x + 0.9y = 45$" },
      // distractor: swaps the two concentrations
      { id: "D", text: "$x + y = 45$ and $0.9x + 0.6y = 36$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Mixture System Setup**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Mass: $x + y = 45$. Gold: $0.6x + 0.9y = 0.8(45) = 36$.\n\n**The Full Solution:**\nStep 1: The total mass of the two alloys equals the mass of the product: $x + y = 45$.\nStep 2: The gold content is conserved. The $60\\%$ alloy contributes $0.6x$ grams of gold, the $90\\%$ alloy contributes $0.9y$, and the product contains $0.8(45) = 36$ grams of gold: $0.6x + 0.9y = 36$.\nStep 3: Check by solving: $0.6x + 0.9(45 - x) = 36 \\Rightarrow 40.5 - 0.3x = 36 \\Rightarrow x = 15$, $y = 30$; then $9 + 27 = 36$ grams of gold, which is $80\\%$ of $45$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x + y = 45$ and $0.6x + 0.9y = 0.8$): equates grams of gold to a bare percent; the right side must be $0.8$ of the $45$-gram total.\n* Choice C ($x + y = 36$ and $0.6x + 0.9y = 45$): swaps the mass total ($45$) with the gold total ($36$).\n* Choice D ($x + y = 45$ and $0.9x + 0.6y = 36$): attaches $90\\%$ to the $60\\%$ alloy's mass and vice versa.\n\n**Test Day Takeaway:** A mixture gives two conservation equations: total amount, and total of the tracked ingredient, where every term (including the product's) is concentration times amount.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "mixture-system",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-047",
    domain: "algebra",
    skills: ["setting-up-systems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A café buys $x$ kilograms of Colombian coffee beans at $\\$18$ per kilogram and $y$ kilograms of Brazilian coffee beans at $\\$12$ per kilogram. The café buys $40$ kilograms of beans in total and spends $\\$630$. Which system of equations represents this situation?",
    choices: [
      // distractor: swaps the two prices
      { id: "A", text: "$x + y = 40$ and $12x + 18y = 630$" },
      // distractor: swaps the mass total and the dollar total
      { id: "B", text: "$x + y = 630$ and $18x + 12y = 40$" },
      // distractor: divides by the prices instead of multiplying
      { id: "C", text: "$x + y = 40$ and $\\frac{x}{18} + \\frac{y}{12} = 630$" },
      { id: "D", text: "$x + y = 40$ and $18x + 12y = 630$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Two-Variable Word Problem (Weight + Cost)**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Mass: $x + y = 40$. Cost: $18x + 12y = 630$.\n\n**The Full Solution:**\nStep 1: The total mass is the sum of the two masses: $x + y = 40$.\nStep 2: Cost is price per kilogram times kilograms for each type, added: $18x + 12y = 630$.\nStep 3: Check by solving: $18x + 12(40 - x) = 630 \\Rightarrow 6x + 480 = 630 \\Rightarrow x = 25$, $y = 15$; $25 + 15 = 40$ and $450 + 180 = 630$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x + y = 40$ and $12x + 18y = 630$): pairs each price with the wrong bean.\n* Choice B ($x + y = 630$ and $18x + 12y = 40$): swaps the kilogram total with the dollar total.\n* Choice C ($x + y = 40$ and $\\frac{x}{18} + \\frac{y}{12} = 630$): divides mass by price; dollars are price TIMES mass.\n\n**Test Day Takeaway:** Units guide the setup: kilograms add to kilograms, and (dollars per kilogram) times kilograms adds to dollars.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "system-setup-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // === SUBSTITUTION METHOD (6 questions) ===
  {
    id: "bank-alg-048",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$y = 2x - 5$\n$3x + y = 25$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $x$?",
    choices: [
      // distractor: sign error substituting (3x + 2x + 5 = 25)
      { id: "A", text: "$4$" },
      { id: "B", text: "$6$" },
      // distractor: reports y instead of x
      { id: "C", text: "$7$" },
      // distractor: stops at 5x = 30
      { id: "D", text: "$30$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Substitution Method**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Substitute $y = 2x - 5$ into the second equation: $3x + (2x - 5) = 25$, so $5x = 30$ and $x = 6$.\n\n**The Full Solution:**\nStep 1: The first equation already gives $y$ in terms of $x$, so replace $y$ in the second equation: $3x + (2x - 5) = 25$.\nStep 2: Combine like terms: $5x - 5 = 25$, so $5x = 30$ and $x = 6$.\nStep 3: Find $y$ to check: $y = 2(6) - 5 = 7$, and $3(6) + 7 = 25$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): substitutes $2x + 5$ instead of $2x - 5$, getting $5x = 20$.\n* Choice C ($7$): finds the solution correctly but reports $y$ instead of $x$.\n* Choice D ($30$): stops at $5x = 30$ without dividing.\n\n**Test Day Takeaway:** Substitute the whole expression in parentheses, keep its sign, and reread whether the question wants $x$ or $y$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "substitution-solve",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-049",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$y = 2x + 1$\n$y = -x + 7$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
    choices: [
      // distractor: the y-intercept of the first equation
      { id: "A", text: "$1$" },
      // distractor: reports x instead of y
      { id: "B", text: "$2$" },
      { id: "C", text: "$5$" },
      // distractor: the y-intercept of the second equation
      { id: "D", text: "$7$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System Equal to y on Both Sides**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Both equations equal $y$, so set them equal: $2x + 1 = -x + 7$, giving $3x = 6$ and $x = 2$. Then $y = 2(2) + 1 = 5$.\n\n**The Full Solution:**\nStep 1: Since $y = 2x + 1$ and $y = -x + 7$, the two right-hand sides are equal at the solution: $2x + 1 = -x + 7$.\nStep 2: Add $x$ to both sides and subtract $1$: $3x = 6$, so $x = 2$.\nStep 3: Substitute into either equation: $y = 2(2) + 1 = 5$. Check with the other: $-2 + 7 = 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): reads the $y$-intercept of the first line as the answer; the intercept is $y$ at $x = 0$, not at the intersection.\n* Choice B ($2$): solves correctly but reports $x$ instead of $y$.\n* Choice D ($7$): reads the $y$-intercept of the second line.\n\n**Test Day Takeaway:** When both equations are solved for $y$, equate the expressions to get $x$, then substitute back; the question usually asks for the coordinate you did NOT solve for first.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "substitution-solve",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-050",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "medium",
    type: "fill-in",
    question: "$x = 3y - 4$\n$2x + 5y = 25$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
    correctAnswer: "3",
    explanation: "**SAT Pattern: Substitution (x in terms of y)**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~10s):** Substitute $x = 3y - 4$ into the second equation: $2(3y - 4) + 5y = 25$, so $11y - 8 = 25$, $11y = 33$, and $y = 3$.\n\n**The Full Solution:**\nStep 1: The first equation gives $x$ in terms of $y$, so replace $x$ in the second equation: $2(3y - 4) + 5y = 25$.\nStep 2: Distribute and combine: $6y - 8 + 5y = 25 \\Rightarrow 11y = 33 \\Rightarrow y = 3$.\nStep 3: Check: $x = 3(3) - 4 = 5$, and $2(5) + 5(3) = 10 + 15 = 25$. $\\checkmark$\n\n**Common Mistakes:** Entering $5$, the value of $x$, when the question asks for $y$; getting $\\frac{29}{11}$ by writing $2(3y - 4)$ as $6y - 4$ (forgetting to distribute the $2$ to $-4$); getting $\\frac{17}{11}$ by moving the $-8$ across with the wrong sign, as $11y = 25 - 8$ instead of $25 + 8$.\n\n**Test Day Takeaway:** When an equation is already solved for $x$, substitute that whole expression, distribute fully, and reread which coordinate the question wants.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "substitution-solve",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-051",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A community pool sells adult day passes for $\\$6$ each and child day passes for $\\$4$ each. A group bought $11$ day passes for a total of $\\$54$. How many adult day passes did the group buy?",
    choices: [
      { id: "A", text: "$5$" },
      // distractor: the number of child passes
      { id: "B", text: "$6$" },
      // distractor: 54/6, treating every pass as an adult pass
      { id: "C", text: "$9$" },
      // distractor: the total number of passes
      { id: "D", text: "$11$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Substitution in Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Let $a$ be adult passes; then child passes are $11 - a$. Cost: $6a + 4(11 - a) = 54$, so $2a + 44 = 54$ and $a = 5$.\n\n**The Full Solution:**\nStep 1: Let $a$ and $c$ be the numbers of adult and child passes: $a + c = 11$ and $6a + 4c = 54$.\nStep 2: Solve the first equation for $c$: $c = 11 - a$. Substitute into the second: $6a + 4(11 - a) = 54 \\Rightarrow 6a + 44 - 4a = 54 \\Rightarrow 2a = 10 \\Rightarrow a = 5$.\nStep 3: Then $c = 6$. Check: $6(5) + 4(6) = 30 + 24 = 54$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): is the number of child passes, the other unknown.\n* Choice C ($9$): divides $54$ by $6$, as if all $11$ passes were adult passes; that also contradicts the count of $11$.\n* Choice D ($11$): reports the total number of passes rather than the adult count.\n\n**Test Day Takeaway:** Express one count as \"total minus the other,\" substitute into the cost equation, and finish by identifying which count the question asked for.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "substitution-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-052",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$y = \\frac{2}{3}x - 1$\n$4x - 3y = 21$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $x$?",
    choices: [
      // distractor: computes 3 times 2/3 as 6, giving -2x = 18
      { id: "A", text: "$-9$" },
      // distractor: reports y instead of x
      { id: "B", text: "$5$" },
      { id: "C", text: "$9$" },
      // distractor: sign error distributing -3 over -1 (4x - 2x - 3 = 21)
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Substitution with Fraction**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Substitute: $4x - 3\\left(\\frac{2}{3}x - 1\\right) = 21$. Since $3 \\cdot \\frac{2}{3} = 2$, this is $4x - 2x + 3 = 21$, so $2x = 18$ and $x = 9$.\n\n**The Full Solution:**\nStep 1: Replace $y$ in the second equation with $\\frac{2}{3}x - 1$: $4x - 3\\left(\\frac{2}{3}x - 1\\right) = 21$.\nStep 2: Distribute $-3$ across both terms: $-3 \\cdot \\frac{2}{3}x = -2x$ and $-3 \\cdot (-1) = +3$. The equation becomes $4x - 2x + 3 = 21$, so $2x = 18$ and $x = 9$.\nStep 3: Check: $y = \\frac{2}{3}(9) - 1 = 5$, and $4(9) - 3(5) = 36 - 15 = 21$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): multiplies $3 \\cdot \\frac{2}{3}$ as $6$ instead of $2$, producing $-2x + 3 = 21$.\n* Choice B ($5$): solves correctly but reports $y$ instead of $x$.\n* Choice D ($12$): distributes $-3$ to $-1$ as $-3$ instead of $+3$, giving $2x = 24$.\n\n**Test Day Takeaway:** A coefficient that cancels a fraction's denominator is a gift; distribute it to EVERY term in the parentheses, signs included, before combining.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "substitution-solve",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-053",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "hard",
    type: "fill-in",
    question: "$y = 4x - 9$\n$2x + 3y = 29$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $x + y$?",
    correctAnswer: "11",
    explanation: "**SAT Pattern: Substitution then Sum**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~15s):** Substitute: $2x + 3(4x - 9) = 29 \\Rightarrow 14x - 27 = 29 \\Rightarrow x = 4$. Then $y = 4(4) - 9 = 7$, and $x + y = 11$.\n\n**The Full Solution:**\nStep 1: Replace $y$ in the second equation: $2x + 3(4x - 9) = 29$.\nStep 2: Distribute and combine: $2x + 12x - 27 = 29 \\Rightarrow 14x = 56 \\Rightarrow x = 4$.\nStep 3: Find $y = 4(4) - 9 = 7$, so $x + y = 4 + 7 = 11$. Check: $2(4) + 3(7) = 8 + 21 = 29$. $\\checkmark$\n\n**Common Mistakes:** Entering $4$ or $7$ (one coordinate) when the question asks for the sum; getting $x = \\frac{19}{7}$ by writing $3(4x - 9)$ as $12x - 9$; adding before checking, so an arithmetic slip in $y$ goes unnoticed.\n\n**Test Day Takeaway:** Solve for both coordinates, verify them in the equation you did NOT substitute into, and only then compute the requested combination.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "substitution-solve",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // === ELIMINATION METHOD (6 questions) ===
  {
    id: "bank-alg-054",
    domain: "algebra",
    skills: ["elimination-method"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$x + y = 16$\n$x - y = 6$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $x$?",
    choices: [
      // distractor: reports y instead of x
      { id: "A", text: "$5$" },
      // distractor: halves 16 only, ignoring the second equation
      { id: "B", text: "$8$" },
      { id: "C", text: "$11$" },
      // distractor: stops at 2x = 22
      { id: "D", text: "$22$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Elimination by Addition**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Adding the equations cancels $y$: $2x = 22$, so $x = 11$.\n\n**The Full Solution:**\nStep 1: The $y$-terms have opposite signs ($+y$ and $-y$), so adding the equations eliminates $y$.\nStep 2: $(x + y) + (x - y) = 16 + 6$ gives $2x = 22$, so $x = 11$.\nStep 3: Then $y = 16 - 11 = 5$. Check the second equation: $11 - 5 = 6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): is the value of $y$, not $x$.\n* Choice B ($8$): halves $16$ as if $x = y$, ignoring the second equation.\n* Choice D ($22$): stops at $2x = 22$ without dividing by $2$.\n\n**Test Day Takeaway:** When a variable appears with opposite signs in the two equations, add them; the eliminated variable drops out in one step.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "elimination-solve",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-055",
    domain: "algebra",
    skills: ["elimination-method"],
    difficulty: "easy",
    type: "fill-in",
    question: "$4x + y = 24$\n$-4x + 3y = 8$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Solving a System by Elimination**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~5s):** Adding the equations cancels $x$: $4y = 32$, so $y = 8$.\n\n**The Full Solution:**\nStep 1: The $x$-terms are $4x$ and $-4x$, opposites, so adding the equations eliminates $x$.\nStep 2: $(4x + y) + (-4x + 3y) = 24 + 8$ gives $4y = 32$, so $y = 8$.\nStep 3: Check: from the first equation $4x = 24 - 8 = 16$, so $x = 4$; then $-4(4) + 3(8) = -16 + 24 = 8$. $\\checkmark$\n\n**Common Mistakes:** Entering $4$, the value of $x$; subtracting the equations instead of adding, which gives $8x - 2y = 16$ and does not eliminate anything; entering $32$ by stopping at $4y = 32$.\n\n**Test Day Takeaway:** Look for a variable whose coefficients are exact opposites; adding the equations then eliminates it with no scaling.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "elimination-solve",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-056",
    domain: "algebra",
    skills: ["elimination-method"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$7x + 2y = 41$\n$3x + 2y = 29$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $x$?",
    choices: [
      { id: "A", text: "$3$" },
      // distractor: adds the equations (10x + 4y = 70) and then divides 70 by 10
      { id: "B", text: "$7$" },
      // distractor: reports y instead of x
      { id: "C", text: "$10$" },
      // distractor: stops at 4x = 12
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Elimination by Subtraction**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Both equations have $+2y$, so subtract: $(7x + 2y) - (3x + 2y) = 41 - 29$ gives $4x = 12$ and $x = 3$.\n\n**The Full Solution:**\nStep 1: The $y$-coefficients are identical ($2$ and $2$), so subtracting one equation from the other eliminates $y$.\nStep 2: Subtract the second from the first: $4x + 0y = 12$, so $x = 3$.\nStep 3: Find $y$ from the second equation: $3(3) + 2y = 29 \\Rightarrow 2y = 20 \\Rightarrow y = 10$. Check the first: $7(3) + 2(10) = 21 + 20 = 41$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($7$): adds the equations to get $10x + 4y = 70$, then drops the $y$-term and divides $70$ by $10$.\n* Choice C ($10$): is the value of $y$, not $x$.\n* Choice D ($12$): stops at $4x = 12$ without dividing by $4$.\n\n**Test Day Takeaway:** Same sign and same coefficient means subtract; opposite signs mean add. Choose the operation that makes a variable vanish.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "elimination-solve",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-057",
    domain: "algebra",
    skills: ["elimination-method"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$6x + 5y = 50$\n$6x - 4y = 14$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
    choices: [
      { id: "A", text: "$4$" },
      // distractor: reports x instead of y
      { id: "B", text: "$5$" },
      // distractor: reports the combined coefficient 5 - (-4)
      { id: "C", text: "$9$" },
      // distractor: stops at 9y = 36
      { id: "D", text: "$36$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Elimination (Subtract to Cancel x)**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Both equations start with $6x$, so subtract them: $(5y) - (-4y) = 50 - 14$ gives $9y = 36$ and $y = 4$.\n\n**The Full Solution:**\nStep 1: The $x$-coefficients are equal ($6$ and $6$), so subtracting the second equation from the first eliminates $x$.\nStep 2: $(6x + 5y) - (6x - 4y) = 50 - 14$. Careful with the double negative: $5y - (-4y) = 9y$. So $9y = 36$ and $y = 4$.\nStep 3: Find $x$: $6x + 5(4) = 50 \\Rightarrow 6x = 30 \\Rightarrow x = 5$. Check the second equation: $6(5) - 4(4) = 30 - 16 = 14$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): is the value of $x$, not $y$.\n* Choice C ($9$): reports the combined coefficient $5 - (-4)$ instead of solving $9y = 36$.\n* Choice D ($36$): stops at $9y = 36$ without dividing.\n\n**Test Day Takeaway:** Subtracting an equation subtracts EVERY term, so a negative term becomes positive; write the subtraction out to avoid getting $y$ instead of $9y$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "elimination-solve",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-058",
    domain: "algebra",
    skills: ["elimination-method"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$5x + 2y = 31$\n$3x - 4y = 3$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $x + y$?",
    choices: [
      // distractor: computes x - y instead of x + y
      { id: "A", text: "$2$" },
      // distractor: reports x only
      { id: "B", text: "$5$" },
      { id: "C", text: "$8$" },
      // distractor: reports the combined x-coefficient 13
      { id: "D", text: "$13$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Elimination with Scaling**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Double the first equation to get $10x + 4y = 62$; adding $3x - 4y = 3$ gives $13x = 65$, so $x = 5$. Then $2y = 31 - 25 = 6$, $y = 3$, and $x + y = 8$.\n\n**The Full Solution:**\nStep 1: The $y$-coefficients are $2$ and $-4$. Multiply the first equation by $2$ so they become opposites: $10x + 4y = 62$.\nStep 2: Add to the second equation: $13x = 65$, so $x = 5$. Substitute into the first original equation: $25 + 2y = 31$, so $y = 3$.\nStep 3: $x + y = 5 + 3 = 8$. Check the second equation: $3(5) - 4(3) = 15 - 12 = 3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): computes $x - y = 5 - 3$ instead of the sum.\n* Choice B ($5$): stops after finding $x$ and never adds $y$.\n* Choice D ($13$): reports the coefficient from $13x = 65$ rather than finishing the solution.\n\n**Test Day Takeaway:** Scale one equation so a variable's coefficients become opposites, add, then answer the exact combination asked (sum, difference, or a single coordinate).",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "elimination-solve",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-059",
    domain: "algebra",
    skills: ["elimination-method", "setting-up-systems"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A library bought $50$ books for a reading program. Each paperback cost $\\$6$ and each hardcover cost $\\$11$, and the total cost of the books was $\\$370$. How many more paperbacks than hardcovers did the library buy?",
    choices: [
      // distractor: the number of hardcovers, not the difference
      { id: "A", text: "$14$" },
      { id: "B", text: "$22$" },
      // distractor: the number of paperbacks, not the difference
      { id: "C", text: "$36$" },
      // distractor: the total number of books
      { id: "D", text: "$50$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: System Word Problem (Mixed Prices)**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** If all $50$ were paperbacks the cost would be $300$; the extra $70$ comes from hardcovers at $5$ dollars more each, so there are $14$ hardcovers and $36$ paperbacks. The difference is $36 - 14 = 22$.\n\n**The Full Solution:**\nStep 1: Let $p$ and $h$ be the numbers of paperbacks and hardcovers: $p + h = 50$ and $6p + 11h = 370$.\nStep 2: Multiply the first equation by $6$ and subtract from the second: $(6p + 11h) - (6p + 6h) = 370 - 300$, so $5h = 70$ and $h = 14$. Then $p = 36$.\nStep 3: The question asks for the difference: $p - h = 36 - 14 = 22$. Check: $6(36) + 11(14) = 216 + 154 = 370$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): is the number of hardcovers; the question asks how many MORE paperbacks there were.\n* Choice C ($36$): is the number of paperbacks, again not the difference.\n* Choice D ($50$): is the total, which was given.\n\n**Test Day Takeaway:** Solve the system, then reread the question: \"how many more\" is a difference of the two unknowns, and both individual counts appear as traps.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "system-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // === GRAPHING SYSTEMS (4 questions) ===
  {
    id: "bank-alg-060",
    domain: "algebra",
    skills: ["graphing-systems"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The graphs of the two equations in a system of linear equations are shown in the $xy$-plane. What is the solution $(x, y)$ to the system?",
    diagram: { type: "twoLineGraph", params: { intersection: { x: -2, y: 3 }, slope1: 1, slope2: -2, xRange: [-6, 6], yRange: [-4, 8], showIntersection: true, xTickInterval: 2, yTickInterval: 2, gridInterval: 1 } },
    choices: [
      { id: "A", text: "$(-2, 3)$" },
      // distractor: the y-intercept of the steeper line
      { id: "B", text: "$(0, -1)$" },
      // distractor: the y-intercept of the other line
      { id: "C", text: "$(0, 5)$" },
      // distractor: swaps the coordinates of the intersection
      { id: "D", text: "$(3, -2)$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Intersection as Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** The solution to a system is the point where the graphs meet. The lines cross at $(-2, 3)$.\n\n**The Full Solution:**\nStep 1: A point is a solution to the system only if it lies on BOTH lines, so the solution is the intersection point.\nStep 2: Reading the graph, the lines cross $2$ units left of the $y$-axis and $3$ units above the $x$-axis: $(-2, 3)$.\nStep 3: Check with the lines' equations read from the graph: the rising line is $y = x + 5$ and the falling line is $y = -2x - 1$; at $x = -2$, both give $y = 3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($(0, -1)$): is the $y$-intercept of the falling line; it lies on only one of the two lines.\n* Choice C ($(0, 5)$): is the $y$-intercept of the rising line, again on only one line.\n* Choice D ($(3, -2)$): swaps the coordinates of the intersection point.\n\n**Test Day Takeaway:** Solution of a system = intersection of the graphs; read $x$ first (left-right), then $y$ (up-down), and write them in that order.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "graphing-intersection",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-061",
    domain: "algebra",
    skills: ["graphing-systems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graphs of the equations $4x - 6y = 9$ and $-6x + 9y = 5$ are two lines. How many points do the two lines have in common?",
    choices: [
      { id: "A", text: "Zero" },
      // distractor: assumes opposite-sign coefficients mean different slopes
      { id: "B", text: "Exactly one" },
      // distractor: two distinct lines cannot meet twice
      { id: "C", text: "Exactly two" },
      // distractor: sees proportional left sides but never checks the constants
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Classify System (Parallel Lines)**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Both lines have slope $\\frac{2}{3}$, but multiplying the first equation by $-\\frac{3}{2}$ gives $-6x + 9y = -\\frac{27}{2}$, not $5$. Same slope, different intercept: the lines are parallel and share no point.\n\n**The Full Solution:**\nStep 1: Put each equation in slope-intercept form. $4x - 6y = 9 \\Rightarrow y = \\frac{2}{3}x - \\frac{3}{2}$, and $-6x + 9y = 5 \\Rightarrow y = \\frac{2}{3}x + \\frac{5}{9}$.\nStep 2: The slopes are equal, so the lines are either parallel or the same line.\nStep 3: The $y$-intercepts differ ($-\\frac{3}{2} \\ne \\frac{5}{9}$), so the lines are distinct and parallel. Check: scaling the first equation by $-\\frac{3}{2}$ reproduces the left side $-6x + 9y$ but gives $-\\frac{27}{2} \\ne 5$. $\\checkmark$ No point satisfies both equations.\n\n**Why the wrong answers are tempting:**\n* Choice B (exactly one): assumes the opposite signs on the coefficients mean the slopes differ; both slopes equal $\\frac{2}{3}$.\n* Choice C (exactly two): two distinct straight lines can meet at most once, never twice.\n* Choice D (infinitely many): notices the left sides are proportional but skips the constants, which are not in the same ratio.\n\n**Test Day Takeaway:** For $Ax + By = C$ and $Dx + Ey = F$, compare the ratios $\\frac{A}{D}$, $\\frac{B}{E}$, and $\\frac{C}{F}$: equal coefficient ratios with a different constant ratio means parallel lines and no solution.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "graphing-system-type",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-062",
    domain: "algebra",
    skills: ["graphing-systems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $y = 5x - 7$ and the graph of $y = -3x + 17$ intersect at exactly one point. What are the coordinates of that point?",
    choices: [
      { id: "A", text: "$(3, 8)$" },
      // distractor: drops the sign on -7 when computing y
      { id: "B", text: "$(3, 22)$" },
      // distractor: combines 5x - 3x = 17 - 7 as if on one side (2x = 10, x = 5)
      { id: "C", text: "$(5, 18)$" },
      // distractor: reports (y, x)
      { id: "D", text: "$(8, 3)$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Find Intersection by Setting Equal**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** At the intersection the $y$-values agree: $5x - 7 = -3x + 17 \\Rightarrow 8x = 24 \\Rightarrow x = 3$. Then $y = 5(3) - 7 = 8$, so the point is $(3, 8)$.\n\n**The Full Solution:**\nStep 1: Both equations give $y$, so set the right sides equal: $5x - 7 = -3x + 17$.\nStep 2: Add $3x$ to both sides and add $7$: $8x = 24$, so $x = 3$.\nStep 3: Substitute into either equation: $y = 5(3) - 7 = 8$. Check with the other: $-3(3) + 17 = 8$. $\\checkmark$ The intersection is $(3, 8)$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($(3, 22)$): finds $x = 3$ correctly but computes $y = 5(3) + 7$, dropping the sign on $-7$.\n* Choice C ($(5, 18)$): combines $5x$ and $-3x$ into $2x$ and $17$ and $-7$ into $10$ as if each pair sat on the same side of the equation, getting $2x = 10$, $x = 5$, and then $y = 5(5) - 7 = 18$.\n* Choice D ($(8, 3)$): swaps the coordinates, reporting $(y, x)$ instead of $(x, y)$.\n\n**Test Day Takeaway:** When both equations are solved for $y$, set the expressions equal to find $x$, then substitute back and verify the point in the second equation before choosing.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "graphing-intersection",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-063",
    domain: "algebra",
    skills: ["graphing-systems"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = 2|x + 1| - 5$, and the graph of $y = f(x)$ is shown in the $xy$-plane. At how many points does the graph of $y = 2x + 1$ intersect the graph of $y = f(x)$?",
    diagram: { type: "absoluteValue", params: { vertex: [-1, -5], slope: 2 } },
    choices: [
      // distractor: treats the line as parallel to the whole graph, forgetting the left arm
      { id: "A", text: "Zero" },
      { id: "B", text: "Exactly one" },
      // distractor: assumes every line crosses a V twice
      { id: "C", text: "Exactly two" },
      // distractor: confuses parallel to an arm with lying on the arm
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Absolute Value Intersection**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** The right arm of the V is $y = 2x - 3$, parallel to $y = 2x + 1$, so they never meet there. The left arm $y = -2x - 7$ has a different slope and meets the line once, at $x = -2$. Exactly one intersection.\n\n**The Full Solution:**\nStep 1: Split $f$ at its vertex $x = -1$. For $x \\ge -1$: $f(x) = 2(x + 1) - 5 = 2x - 3$. For $x < -1$: $f(x) = -2(x + 1) - 5 = -2x - 7$.\nStep 2: Right arm: $2x - 3 = 2x + 1$ gives $-3 = 1$, impossible. The line is parallel to this arm and never touches it.\nStep 3: Left arm: $-2x - 7 = 2x + 1 \\Rightarrow -8 = 4x \\Rightarrow x = -2$, which satisfies $x < -1$. Check: $f(-2) = 2|-1| - 5 = -3$ and $2(-2) + 1 = -3$. $\\checkmark$ One intersection, at $(-2, -3)$.\n\n**Why the wrong answers are tempting:**\n* Choice A (zero): sees that the line's slope matches an arm of the graph and concludes the line is parallel to the whole graph, forgetting the left arm has slope $-2$.\n* Choice C (exactly two): assumes any line crosses a V-shaped graph twice; here the line is parallel to the right arm and can only meet the left arm.\n* Choice D (infinitely many): would require the line to coincide with an arm, but $y = 2x + 1$ and $y = 2x - 3$ have different intercepts.\n\n**Test Day Takeaway:** Split an absolute value graph into its two linear arms, test the line against each arm separately, and keep only solutions that fall inside that arm's domain.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "graphing-intersection",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // === INFINITE SOLUTIONS CONDITION (4 questions) ===
  {
    id: "bank-alg-064",
    domain: "algebra",
    skills: ["infinite-solutions-condition"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graphs of the two equations in a system of linear equations are the same line. Which of the following could be that system?",
    choices: [
      // distractor: doubles the left side but not the constant (parallel lines)
      { id: "A", text: "$2x + 3y = 12$ and $4x + 6y = 12$" },
      // distractor: flips the sign of the y-term (different slopes)
      { id: "B", text: "$2x + 3y = 12$ and $2x - 3y = 12$" },
      { id: "C", text: "$2x + 3y = 12$ and $4x + 6y = 24$" },
      // distractor: swaps the coefficients (different slopes)
      { id: "D", text: "$2x + 3y = 12$ and $3x + 2y = 12$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Identify Identical-Lines System**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Multiplying every term of $2x + 3y = 12$ by $2$ gives $4x + 6y = 24$ exactly, so the two equations describe one line.\n\n**The Full Solution:**\nStep 1: Two equations graph as the same line when one is a constant multiple of the other, including the constant term.\nStep 2: $2 \\cdot (2x + 3y) = 4x + 6y$ and $2 \\cdot 12 = 24$, which is the second equation in choice C.\nStep 3: Check a point: $(0, 4)$ gives $3(4) = 12$ and $6(4) = 24$. $\\checkmark$ Every solution of one equation solves the other.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4x + 6y = 12$): doubles the left side but keeps the constant $12$, producing a parallel line with no shared points.\n* Choice B ($2x - 3y = 12$): flips the sign of the $y$-term, so the slopes are $-\\frac{2}{3}$ and $\\frac{2}{3}$ and the lines cross once.\n* Choice D ($3x + 2y = 12$): swaps the coefficients, giving slopes $-\\frac{2}{3}$ and $-\\frac{3}{2}$, one intersection.\n\n**Test Day Takeaway:** Identical lines require every term, constant included, to scale by the same factor. Scaling only the left side makes parallel lines instead.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "infinite-solutions-identification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-065",
    domain: "algebra",
    skills: ["infinite-solutions-condition"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the system of equations $bx - 10y = 14$ and $9x - 15y = 21$, $b$ is a constant. If the system has infinitely many solutions, what is the value of $b$?",
    choices: [
      // distractor: sign slip from the negative y-coefficients
      { id: "A", text: "$-6$" },
      { id: "B", text: "$6$" },
      // distractor: copies the x-coefficient of the second equation
      { id: "C", text: "$9$" },
      // distractor: multiplies 9 by 3/2 instead of dividing
      { id: "D", text: "$13.5$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Parameter for Proportional Equations**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The second equation must be a multiple of the first. From the $y$-terms and constants, $\\frac{-15}{-10} = \\frac{21}{14} = \\frac{3}{2}$, so $\\frac{9}{b} = \\frac{3}{2}$ and $b = 6$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the second equation equals $k$ times the first for some constant $k$.\nStep 2: Compare the $y$-coefficients: $-15 = k(-10)$, so $k = \\frac{3}{2}$. The constants agree: $\\frac{3}{2}(14) = 21$. $\\checkmark$\nStep 3: Compare the $x$-coefficients: $9 = \\frac{3}{2}b$, so $b = 6$. Check: $\\frac{3}{2}(6x - 10y = 14)$ gives $9x - 15y = 21$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): a sign slip from the negative $y$-coefficients; the ratio $\\frac{-15}{-10}$ is positive.\n* Choice C ($9$): copies the $x$-coefficient of the second equation, ignoring that the second equation is scaled by $\\frac{3}{2}$.\n* Choice D ($13.5$): multiplies $9$ by $\\frac{3}{2}$ instead of dividing by it.\n\n**Test Day Takeaway:** Find the scale factor from a pair of known coefficients (or the constants), confirm it on a second pair, then solve for the unknown coefficient with that same factor.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "infinite-solutions-parameter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-066",
    domain: "algebra",
    skills: ["infinite-solutions-condition"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the system of equations $\\frac{2}{3}x + hy = 5$ and $-8x + 18y = c$, $h$ and $c$ are constants. If the system has infinitely many solutions, what is the value of $c$?",
    choices: [
      { id: "A", text: "$-60$" },
      // distractor: multiplies 5 by the coefficient -8 instead of the scale factor
      { id: "B", text: "$-40$" },
      // distractor: reports the scale factor k
      { id: "C", text: "$-12$" },
      // distractor: drops the sign on the scale factor
      { id: "D", text: "$60$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Find c for Infinite Solutions**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The $x$-coefficients fix the scale factor: $-8 \\div \\frac{2}{3} = -12$. The second equation is $-12$ times the first, so $c = -12(5) = -60$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the second equation is $k$ times the first, term by term.\nStep 2: From the $x$-terms, $-8 = k \\cdot \\frac{2}{3}$, so $k = -8 \\cdot \\frac{3}{2} = -12$. (The $y$-terms then force $h = \\frac{18}{-12} = -\\frac{3}{2}$, which is consistent but not needed.)\nStep 3: Apply $k$ to the constant: $c = -12 \\cdot 5 = -60$. Check: $-12\\left(\\frac{2}{3}x - \\frac{3}{2}y\\right) = -8x + 18y$ and $-12(5) = -60$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-40$): multiplies $5$ by the coefficient $-8$ instead of by the scale factor $-12$.\n* Choice C ($-12$): reports the scale factor $k$ itself rather than the constant $c$.\n* Choice D ($60$): drops the negative sign when dividing $-8$ by $\\frac{2}{3}$.\n\n**Test Day Takeaway:** With a fractional coefficient, get the multiplier by dividing (second coefficient over first), not multiplying, then push that same multiplier through to the constant.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "infinite-solutions-parameter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-067",
    domain: "algebra",
    skills: ["infinite-solutions-condition"],
    difficulty: "medium",
    type: "fill-in",
    question: "The system of equations $3x + 8y = -6$ and $-15x - 40y = k$, where $k$ is a constant, has infinitely many solutions. What is the value of $k$?",
    correctAnswer: "30",
    explanation: "**SAT Pattern: Find Constant for Identical Equations**\n\n**The correct answer is $30$.**\n\n**The Fast Way (~10s):** $\\frac{-15}{3} = \\frac{-40}{8} = -5$, so the second equation is $-5$ times the first: $k = -5(-6) = 30$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the second equation is a constant multiple of the first.\nStep 2: The $x$-coefficients give the multiplier $\\frac{-15}{3} = -5$; the $y$-coefficients agree, $\\frac{-40}{8} = -5$. $\\checkmark$\nStep 3: Apply it to the constant: $k = -5(-6) = 30$. Check: $-5(3x + 8y) = -15x - 40y$ and $-5(-6) = 30$. $\\checkmark$\n\n**Common Mistakes:** Reporting $-30$ by losing the sign when multiplying two negatives; using $+5$ as the multiplier because the second equation \"looks bigger\"; adding $-6$ and $-15$ instead of scaling.\n\n**Test Day Takeaway:** Read the multiplier off a coefficient pair, confirm it on the other pair, then multiply the constant by that same factor, signs included.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "infinite-solutions-parameter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // === FUNCTION NOTATION (5 questions) ===
  {
    id: "bank-alg-068",
    domain: "algebra",
    skills: ["function-notation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = 25 - 6x$. What is the value of $f(3)$?",
    choices: [
      // distractor: computes 18 - 25, reversing the subtraction
      { id: "A", text: "$-7$" },
      { id: "B", text: "$7$" },
      // distractor: subtracts 6 once instead of 6 times 3
      { id: "C", text: "$19$" },
      // distractor: adds 18 instead of subtracting
      { id: "D", text: "$43$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Basic Function Notation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Replace $x$ with $3$: $f(3) = 25 - 6(3) = 25 - 18 = 7$.\n\n**The Full Solution:**\nStep 1: $f(3)$ means the output of $f$ when the input is $3$, so substitute $3$ for every $x$ in the rule.\nStep 2: $f(3) = 25 - 6(3) = 25 - 18$.\nStep 3: $25 - 18 = 7$. Check: $6(3) = 18$ and $18 + 7 = 25$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): computes $18 - 25$, reversing the order of the subtraction.\n* Choice C ($19$): subtracts $6$ once, $25 - 6$, instead of subtracting $6 \\cdot 3 = 18$.\n* Choice D ($43$): adds $18$ to $25$ instead of subtracting it.\n\n**Test Day Takeaway:** Function notation $f(3)$ is a substitution instruction: put $3$ in for $x$, multiply before subtracting, and keep the sign in front of the $x$-term.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-notation-basic",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-069",
    domain: "algebra",
    skills: ["function-notation"],
    difficulty: "easy",
    type: "fill-in",
    question: "The function $p$ is defined by $p(x) = 9x - 63$. In the $xy$-plane, the graph of $y = p(x)$ has an $x$-intercept at $(a, 0)$. What is the value of $a$?",
    correctAnswer: "7",
    explanation: "**SAT Pattern: Find x-intercept (Zero of Function)**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~10s):** At the $x$-intercept, $y = 0$: $9x - 63 = 0 \\Rightarrow 9x = 63 \\Rightarrow x = 7$.\n\n**The Full Solution:**\nStep 1: The $x$-intercept is the point where the graph meets the $x$-axis, so $p(a) = 0$.\nStep 2: Set the rule equal to zero: $9a - 63 = 0$, so $9a = 63$.\nStep 3: Divide by $9$: $a = 7$. Check: $p(7) = 9(7) - 63 = 63 - 63 = 0$. $\\checkmark$\n\n**Common Mistakes:** Reporting $-63$, which is the $y$-intercept, not the $x$-intercept; computing $63 - 9 = 54$ instead of dividing; getting $-7$ by mishandling the sign when moving $-63$ across.\n\n**Test Day Takeaway:** \"$x$-intercept\" means output zero. Set the function equal to $0$ and solve; the $y$-intercept is the constant term, a different point.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-notation-zero",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-070",
    domain: "algebra",
    skills: ["function-notation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A bicycle repair shop's monthly profit, in dollars, is modeled by the function $P(r) = 42r - 3150$, where $r$ is the number of repairs completed that month. What is the minimum number of repairs the shop must complete in a month for its monthly profit to be at least $\\$0$?",
    choices: [
      // distractor: reports the per-repair rate
      { id: "A", text: "$42$" },
      { id: "B", text: "$75$" },
      // distractor: assumes profit must be strictly positive
      { id: "C", text: "$76$" },
      // distractor: subtracts 42 from 3150 instead of dividing
      { id: "D", text: "$3108$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Break-Even from Profit Function**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Profit is at least $0$ when $42r - 3150 \\ge 0$, so $r \\ge \\frac{3150}{42} = 75$. The minimum is $75$ repairs.\n\n**The Full Solution:**\nStep 1: \"At least $\\$0$\" translates to $P(r) \\ge 0$: $42r - 3150 \\ge 0$.\nStep 2: Add $3150$ and divide by $42$: $r \\ge 75$.\nStep 3: Since $75$ is a whole number of repairs, it is the minimum. Check: $P(75) = 42(75) - 3150 = 0$ and $P(74) = -42 < 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($42$): reports the per-repair rate instead of solving for $r$.\n* Choice C ($76$): assumes the profit must be strictly positive, but $P(75) = 0$ already satisfies \"at least $\\$0$.\"\n* Choice D ($3108$): subtracts $42$ from $3150$ instead of dividing.\n\n**Test Day Takeaway:** Break-even is where profit equals zero; solve $P(r) = 0$ and then read the inequality's direction to decide whether that boundary value itself counts.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-notation-application",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-071",
    domain: "algebra",
    skills: ["function-notation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $h$ is defined by $h(x) = 4 - 9x$. If $h(a) = -32$, what is the value of $a$?",
    choices: [
      // distractor: stops at -9a = -36
      { id: "A", text: "$-36$" },
      // distractor: divides -36 by 9 instead of -9
      { id: "B", text: "$-4$" },
      { id: "C", text: "$4$" },
      // distractor: reports 9a instead of a
      { id: "D", text: "$36$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $h(a) = -32$ means $4 - 9a = -32$. Subtract $4$: $-9a = -36$, so $a = 4$.\n\n**The Full Solution:**\nStep 1: The output is given, so replace $h(a)$ with $-32$ and $x$ with $a$: $4 - 9a = -32$.\nStep 2: Subtract $4$ from both sides: $-9a = -36$.\nStep 3: Divide both sides by $-9$: $a = 4$. Check: $h(4) = 4 - 9(4) = 4 - 36 = -32$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-36$): stops at $-9a = -36$ and reports the right side without dividing.\n* Choice B ($-4$): divides $-36$ by $9$ instead of by $-9$, losing the sign.\n* Choice D ($36$): reports the value of $9a$ rather than $a$.\n\n**Test Day Takeaway:** When the output is known, set the rule equal to it and undo the operations in reverse order; divide by the coefficient of the variable, sign included.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-notation-solve",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-072",
    domain: "algebra",
    skills: ["function-notation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "For the linear function $f$, $f(4) - f(-2) = 15$. What is the slope of the graph of $y = f(x)$ in the $xy$-plane?",
    choices: [
      // distractor: subtracts the inputs in the reverse order, -2 - 4
      { id: "A", text: "$-2.5$" },
      { id: "B", text: "$2.5$" },
      // distractor: uses 4 - 2 = 2 as the run, mishandling the negative input
      { id: "C", text: "$7.5$" },
      // distractor: reports the output change as the slope
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Slope from Function Difference**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Slope is change in output over change in input. The outputs change by $15$ while the inputs change by $4 - (-2) = 6$, so the slope is $\\frac{15}{6} = 2.5$.\n\n**The Full Solution:**\nStep 1: For a linear function, $\\text{slope} = \\frac{f(x_2) - f(x_1)}{x_2 - x_1}$ for any two inputs.\nStep 2: Take $x_2 = 4$ and $x_1 = -2$ so the numerator matches the given difference: $f(4) - f(-2) = 15$. The denominator is $4 - (-2) = 6$.\nStep 3: Slope $= \\frac{15}{6} = 2.5$. Check: a slope of $2.5$ over a run of $6$ rises $2.5 \\cdot 6 = 15$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2.5$): subtracts the inputs in the reverse order, $-2 - 4 = -6$, while keeping the outputs as $f(4) - f(-2)$.\n* Choice C ($7.5$): uses $4 - 2 = 2$ as the run, mishandling the negative input.\n* Choice D ($15$): reports the change in output as the slope, forgetting to divide by the change in input.\n\n**Test Day Takeaway:** A difference of outputs tells you the rise; the run is the difference of the same two inputs in the same order, so subtracting a negative input adds to the run.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-slope-from-values",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // === DOMAIN RESTRICTIONS (4 questions) ===
  {
    id: "bank-alg-073",
    domain: "algebra",
    skills: ["domain-restrictions"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $g$ is defined by $g(x) = \\frac{2x}{x - 9}$. Which of the following describes all values of $x$ for which $g(x)$ is defined?",
    choices: [
      // distractor: ignores the denominator
      { id: "A", text: "All real numbers" },
      // distractor: sign slip solving x - 9 = 0
      { id: "B", text: "All real numbers except $-9$" },
      // distractor: excludes the zero of the numerator
      { id: "C", text: "All real numbers except $0$" },
      { id: "D", text: "All real numbers except $9$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Domain (Denominator Restriction)**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** A fraction is undefined only where its denominator is $0$: $x - 9 = 0$ at $x = 9$. Every other real number is allowed.\n\n**The Full Solution:**\nStep 1: The only operation in $g$ that can fail is division, which is undefined when the denominator equals $0$.\nStep 2: Solve $x - 9 = 0$: $x = 9$. At that input, $g(9) = \\frac{18}{0}$, undefined.\nStep 3: The numerator $2x$ never restricts the domain; for example, $g(0) = \\frac{0}{-9} = 0$ is a perfectly good output. So the domain is all real numbers except $9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (all real numbers): ignores the denominator; $x = 9$ produces division by zero.\n* Choice B (except $-9$): a sign slip when solving $x - 9 = 0$; the zero of the denominator is $9$, not $-9$.\n* Choice C (except $0$): excludes the zero of the numerator, but a zero numerator just makes $g(x) = 0$, which is defined.\n\n**Test Day Takeaway:** Domain restrictions come from the denominator, not the numerator: set the denominator equal to zero, solve, and exclude exactly those inputs.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "domain-restriction",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-074",
    domain: "algebra",
    skills: ["domain-restrictions"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $h$ is defined by $h(x) = \\frac{3x + 1}{2x - 5}$. For what value of $x$ is $h(x)$ undefined?",
    choices: [
      // distractor: sign slip solving 2x - 5 = 0
      { id: "A", text: "$-\\frac{5}{2}$" },
      // distractor: sets the numerator to zero (that gives h = 0, which is defined)
      { id: "B", text: "$-\\frac{1}{3}$" },
      // distractor: sets the numerator to zero and drops the sign
      { id: "C", text: "$\\frac{1}{3}$" },
      { id: "D", text: "$\\frac{5}{2}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Find Undefined Point (Denominator Zero)**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $h$ is undefined where the denominator is zero: $2x - 5 = 0 \\Rightarrow x = \\frac{5}{2}$.\n\n**The Full Solution:**\nStep 1: A rational expression is undefined exactly when its denominator equals $0$.\nStep 2: Solve $2x - 5 = 0$: $2x = 5$, so $x = \\frac{5}{2}$.\nStep 3: Confirm the numerator is not also $0$ there: $3\\left(\\frac{5}{2}\\right) + 1 = \\frac{17}{2} \\ne 0$, so $h\\left(\\frac{5}{2}\\right) = \\frac{17/2}{0}$ is undefined. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{5}{2}$): a sign slip when solving $2x - 5 = 0$; moving $-5$ across gives $2x = +5$.\n* Choice B ($-\\frac{1}{3}$): sets the numerator equal to zero instead of the denominator; $h\\left(-\\frac{1}{3}\\right) = 0$ is defined.\n* Choice C ($\\frac{1}{3}$): sets the numerator to zero and also drops the sign.\n\n**Test Day Takeaway:** \"Undefined\" points to the denominator. Solve denominator $= 0$ and ignore the numerator, which only decides where the output is zero.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "domain-restriction",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-075",
    domain: "algebra",
    skills: ["domain-restrictions"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = \\frac{5x}{x^2 - 3x - 18}$. Which of the following describes all values of $x$ for which $f(x)$ is defined?",
    choices: [
      { id: "A", text: "All real numbers except $-3$ and $6$" },
      // distractor: factors with the signs reversed, (x + 6)(x - 3)
      { id: "B", text: "All real numbers except $-6$ and $3$" },
      // distractor: excludes only the zero of the numerator
      { id: "C", text: "All real numbers except $0$" },
      // distractor: also excludes 0, where f(0) = 0 is defined
      { id: "D", text: "All real numbers except $-3$, $0$, and $6$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Domain with Quadratic Denominator**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Factor the denominator: $x^2 - 3x - 18 = (x - 6)(x + 3)$, which is zero at $x = 6$ and $x = -3$. Exclude exactly those two inputs.\n\n**The Full Solution:**\nStep 1: $f$ is undefined only where the denominator is $0$, so solve $x^2 - 3x - 18 = 0$.\nStep 2: Find two numbers with product $-18$ and sum $-3$: $-6$ and $3$. So $x^2 - 3x - 18 = (x - 6)(x + 3)$, and the zeros are $x = 6$ and $x = -3$.\nStep 3: Check: $6^2 - 3(6) - 18 = 36 - 18 - 18 = 0$ and $(-3)^2 - 3(-3) - 18 = 9 + 9 - 18 = 0$. $\\checkmark$ The numerator $5x$ imposes no restriction ($f(0) = 0$ is defined), so the domain is all real numbers except $-3$ and $6$.\n\n**Why the wrong answers are tempting:**\n* Choice B (except $-6$ and $3$): factors with the signs reversed, $(x + 6)(x - 3)$, which expands to $x^2 + 3x - 18$, not the given denominator.\n* Choice C (except $0$): excludes only the zero of the numerator and misses both zeros of the denominator.\n* Choice D (except $-3$, $0$, and $6$): correctly finds the denominator's zeros but also excludes $0$, where $f(0) = 0$ is defined.\n\n**Test Day Takeaway:** Factor the quadratic denominator, exclude each root, and always expand your factors once to confirm the signs before trusting them.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "domain-restriction",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-076",
    domain: "algebra",
    skills: ["domain-restrictions"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The function $g$ is defined by $g(x) = \\frac{\\sqrt{12 - 3x}}{x + 2}$. Which of the following describes all values of $x$ for which $g(x)$ is a real number?",
    choices: [
      // distractor: ignores the denominator
      { id: "A", text: "$x \\le 4$" },
      // distractor: excludes the endpoint where the radicand is 0
      { id: "B", text: "$x < 4$ and $x \\ne -2$" },
      { id: "C", text: "$x \\le 4$ and $x \\ne -2$" },
      // distractor: forgets to reverse the inequality when dividing by -3
      { id: "D", text: "$x \\ge 4$ and $x \\ne -2$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Domain with Radical and Denominator**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The radicand must be nonnegative, $12 - 3x \\ge 0 \\Rightarrow x \\le 4$, and the denominator cannot be zero, $x \\ne -2$. Both conditions together: $x \\le 4$ and $x \\ne -2$.\n\n**The Full Solution:**\nStep 1: Square root: $12 - 3x \\ge 0 \\Rightarrow -3x \\ge -12 \\Rightarrow x \\le 4$ (dividing by $-3$ reverses the inequality). The value $x = 4$ is allowed because $\\sqrt{0} = 0$ is real.\nStep 2: Denominator: $x + 2 \\ne 0 \\Rightarrow x \\ne -2$. Note $-2 \\le 4$, so this exclusion actually removes a point from the interval.\nStep 3: Combine: $x \\le 4$ and $x \\ne -2$. Check: $g(4) = \\frac{0}{6} = 0$ is real; $g(-2) = \\frac{\\sqrt{18}}{0}$ is undefined; $g(5) = \\frac{\\sqrt{-3}}{7}$ is not real. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x \\le 4$): handles the radical but ignores the denominator, which is zero at $x = -2$.\n* Choice B ($x < 4$ and $x \\ne -2$): excludes $x = 4$, but a radicand of $0$ is fine; $\\sqrt{0} = 0$.\n* Choice D ($x \\ge 4$ and $x \\ne -2$): forgets to reverse the inequality when dividing by $-3$; for $x > 4$ the radicand is negative.\n\n**Test Day Takeaway:** Collect every restriction separately (radicand $\\ge 0$, denominator $\\ne 0$), remember that dividing by a negative flips the inequality, then intersect the conditions.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "domain-restriction",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // === FUNCTION COMPOSITION (4 questions) ===
  {
    id: "bank-alg-077",
    domain: "algebra",
    skills: ["function-composition"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table gives the values of the functions $f$ and $g$ at each integer value of $x$ from $1$ to $4$. What is the value of $f(g(4))$?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)", "g(x)"], rows: [["1", "3", "2"], ["2", "1", "1"], ["3", "4", "4"], ["4", "2", "3"]] } },
    choices: [
      // distractor: composes in the reverse order, g(f(4)) = g(2) = 1
      { id: "A", text: "$1$" },
      // distractor: stops after the inner step g(4) = 3
      { id: "B", text: "$3$" },
      { id: "C", text: "$4$" },
      // distractor: multiplies f(4) and g(4)
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Composition (Inner First)**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Inner function first: from the table, $g(4) = 3$. Then $f(3) = 4$. So $f(g(4)) = 4$.\n\n**The Full Solution:**\nStep 1: In $f(g(4))$, the innermost expression is $g(4)$. Read the $g(x)$ column at $x = 4$: $g(4) = 3$.\nStep 2: Replace $g(4)$ with $3$: $f(g(4)) = f(3)$.\nStep 3: Read the $f(x)$ column at $x = 3$: $f(3) = 4$. Check the direction: the input to $f$ is the output of $g$, which is $3$, and the row $x = 3$ gives $f(3) = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): composes in the reverse order, $g(f(4)) = g(2) = 1$.\n* Choice B ($3$): stops after the inner step $g(4) = 3$ and never applies $f$.\n* Choice D ($6$): multiplies the two table entries in the $x = 4$ row, $f(4) \\cdot g(4) = 2 \\cdot 3$, treating $f(g(4))$ as a product.\n\n**Test Day Takeaway:** Work from the inside out: evaluate the inner function at the given input, then use that output as the input to the outer function, reading each value from its own column.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-composition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-078",
    domain: "algebra",
    skills: ["function-composition"],
    difficulty: "medium",
    type: "fill-in",
    question: "Let $f(x) = x^2 - 5$ and $g(x) = 3x + 7$. If the function $h$ is defined by $h(x) = g(f(x))$ for all real numbers $x$, what is the value of $h(3)$?",
    correctAnswer: "19",
    explanation: "**SAT Pattern: Composition with Specific Input**\n\n**The correct answer is $19$.**\n\n**The Fast Way (~10s):** $h(3) = g(f(3))$. Inner first: $f(3) = 9 - 5 = 4$. Then $g(4) = 3(4) + 7 = 19$.\n\n**The Full Solution:**\nStep 1: $h(3) = g(f(3))$, so evaluate the inner function first: $f(3) = 3^2 - 5 = 4$.\nStep 2: Use that output as the input to $g$: $g(f(3)) = g(4)$.\nStep 3: $g(4) = 3(4) + 7 = 12 + 7 = 19$. Check the order: $h$ applies $f$ first, then $g$. $\\checkmark$\n\n**Common Mistakes:** Composing in the reverse order, $f(g(3)) = f(16) = 251$; stopping at $f(3) = 4$ without applying $g$; adding the outputs, $f(3) + g(3) = 4 + 16 = 20$; multiplying them, $f(3) \\cdot g(3) = 64$.\n\n**Test Day Takeaway:** In $g(f(a))$, the function nearest the input acts first. Finish it completely, then feed the number into the outer function.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-composition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-079",
    domain: "algebra",
    skills: ["function-composition"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The functions $f$ and $g$ are defined by $f(x) = x^2 + 2$ and $g(x) = 3x - 4$. Which of the following expressions is equivalent to $f(g(x))$?",
    choices: [
      // distractor: computes g(f(x)) instead
      { id: "A", text: "$3x^2 + 2$" },
      // distractor: squares the binomial term by term, (3x)^2 + 4^2
      { id: "B", text: "$9x^2 + 18$" },
      // distractor: subtracts 2 instead of adding it
      { id: "C", text: "$9x^2 - 24x + 14$" },
      { id: "D", text: "$9x^2 - 24x + 18$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Function Composition (Expression)**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** $f(g(x))$ means substitute $g(x) = 3x - 4$ for $x$ in $f$: $(3x - 4)^2 + 2 = 9x^2 - 24x + 16 + 2 = 9x^2 - 24x + 18$.\n\n**The Full Solution:**\nStep 1: In $f(g(x))$ the inner function is $g$, so every $x$ in $f$'s rule becomes $3x - 4$: $f(g(x)) = (3x - 4)^2 + 2$.\nStep 2: Expand the square: $(3x - 4)^2 = 9x^2 - 24x + 16$.\nStep 3: Add $2$: $9x^2 - 24x + 18$. Check with $x = 1$: $g(1) = -1$, $f(-1) = 3$; and $9 - 24 + 18 = 3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3x^2 + 2$): composes in the reverse order, $g(f(x)) = 3(x^2 + 2) - 4 = 3x^2 + 2$.\n* Choice B ($9x^2 + 18$): squares the binomial term by term, $(3x)^2 + 4^2$, dropping the middle term $-24x$.\n* Choice C ($9x^2 - 24x + 14$): expands correctly but subtracts $2$ instead of adding it.\n\n**Test Day Takeaway:** Substitute the entire inner expression in parentheses, expand $(a - b)^2$ as $a^2 - 2ab + b^2$, and test one numeric input to confirm the composition order.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-composition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-080",
    domain: "algebra",
    skills: ["function-composition"],
    difficulty: "hard",
    type: "fill-in",
    question: "The functions $f$ and $g$ are defined by $f(x) = 4x + 9$ and $g(x) = \\frac{x - 9}{4}$. If $f(g(k)) + g(f(k)) = 46$, what is the value of $k$?",
    correctAnswer: "23",
    explanation: "**SAT Pattern: Composition of Inverse Functions**\n\n**The correct answer is $23$.**\n\n**The Fast Way (~15s):** $g$ undoes $f$: $f(g(k)) = 4 \\cdot \\frac{k - 9}{4} + 9 = k$ and $g(f(k)) = \\frac{(4k + 9) - 9}{4} = k$. So $k + k = 46$ and $k = 23$.\n\n**The Full Solution:**\nStep 1: Compute $f(g(k))$: $f\\left(\\frac{k - 9}{4}\\right) = 4 \\cdot \\frac{k - 9}{4} + 9 = (k - 9) + 9 = k$.\nStep 2: Compute $g(f(k))$: $g(4k + 9) = \\frac{4k + 9 - 9}{4} = \\frac{4k}{4} = k$. The two functions are inverses, so each composition returns its input.\nStep 3: The equation becomes $k + k = 46$, so $k = 23$. Check: $g(23) = \\frac{14}{4} = 3.5$, $f(3.5) = 23$; $f(23) = 101$, $g(101) = 23$; $23 + 23 = 46$. $\\checkmark$\n\n**Common Mistakes:** Expanding only one composition and setting $k = 46$; treating $f(g(k))$ as $f(k) \\cdot g(k)$; distributing $4$ onto $\\frac{k - 9}{4}$ incorrectly and getting $k - 36 + 9$.\n\n**Test Day Takeaway:** When one function reverses the other's operations (multiply-then-add versus subtract-then-divide), recognize the inverse pair: every composition collapses to the input, and the equation simplifies before any algebra.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-composition-inverse",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // === FUNCTION TRANSFORMATIONS (5 questions) ===
  {
    id: "bank-alg-081",
    domain: "algebra",
    skills: ["function-transformations"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The graph of $y = f(x)$ is shown in the $xy$-plane. The graph of $y = g(x)$ is the result of translating the graph of $y = f(x)$ $3$ units to the right. Which of the following defines $g$?",
    diagram: { type: "absoluteValue", params: { vertex: [-1, 2], slope: 1 } },
    choices: [
      { id: "A", text: "$g(x) = f(x - 3)$" },
      // distractor: f(x + 3) moves the graph left
      { id: "B", text: "$g(x) = f(x + 3)$" },
      // distractor: f(x) - 3 moves the graph down
      { id: "C", text: "$g(x) = f(x) - 3$" },
      // distractor: f(x) + 3 moves the graph up
      { id: "D", text: "$g(x) = f(x) + 3$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Horizontal Shift**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** A shift of $3$ units to the right replaces $x$ with $x - 3$ inside the function: $g(x) = f(x - 3)$.\n\n**The Full Solution:**\nStep 1: Horizontal translations act on the input. Moving right by $3$ means the new graph at $x$ shows what the old graph showed at $x - 3$, so $g(x) = f(x - 3)$.\nStep 2: Test with the vertex. The graph of $f$ has its vertex at $(-1, 2)$, so after moving right $3$ the vertex should be at $(2, 2)$.\nStep 3: Check: $g(2) = f(2 - 3) = f(-1) = 2$, and for any other input $g$ is not at its minimum, so the vertex of $g$ is $(2, 2)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($g(x) = f(x + 3)$): moves the graph $3$ units to the left; its vertex would be at $(-4, 2)$.\n* Choice C ($g(x) = f(x) - 3$): subtracting outside the function moves the graph down $3$, to vertex $(-1, -1)$.\n* Choice D ($g(x) = f(x) + 3$): adding outside the function moves the graph up $3$, to vertex $(-1, 5)$.\n\n**Test Day Takeaway:** Inside the parentheses is horizontal and works backward ($x - 3$ moves right); outside the parentheses is vertical and works as written.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "transformation-identification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-082",
    domain: "algebra",
    skills: ["function-transformations"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The graph of $y = f(x)$ is shown in the $xy$-plane. The graph of $y = g(x)$ is the reflection of the graph of $y = f(x)$ across the $x$-axis. Which of the following defines $g$?",
    diagram: { type: "quadraticVertex", params: { vertex: [1, -4], a: 1, showPoints: [[-1, 0], [3, 0]], showVertex: true } },
    choices: [
      // distractor: f(-x) reflects across the y-axis
      { id: "A", text: "$g(x) = f(-x)$" },
      // distractor: -f(-x) reflects across both axes
      { id: "B", text: "$g(x) = -f(-x)$" },
      // distractor: takes reciprocals of outputs, not a reflection
      { id: "C", text: "$g(x) = \\dfrac{1}{f(x)}$" },
      { id: "D", text: "$g(x) = -f(x)$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Reflection over Axis**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Reflecting across the $x$-axis keeps each $x$ and flips the sign of each $y$, so every output is negated: $g(x) = -f(x)$.\n\n**The Full Solution:**\nStep 1: A reflection across the $x$-axis sends the point $(x, y)$ to $(x, -y)$. The input is unchanged; the output changes sign.\nStep 2: In function notation, \"negate the output\" is $g(x) = -f(x)$.\nStep 3: Check with the vertex. The graph of $f$ has vertex $(1, -4)$, so the reflected graph should have vertex $(1, 4)$: $g(1) = -f(1) = -(-4) = 4$. $\\checkmark$ The $x$-intercepts $(-1, 0)$ and $(3, 0)$ stay fixed, as they should under this reflection.\n\n**Why the wrong answers are tempting:**\n* Choice A ($g(x) = f(-x)$): negates the input, which reflects across the $y$-axis; the vertex would move to $(-1, -4)$.\n* Choice B ($g(x) = -f(-x)$): reflects across both axes, sending the vertex to $(-1, 4)$.\n* Choice C ($g(x) = \\dfrac{1}{f(x)}$): takes reciprocals of the outputs, which is not a reflection and is undefined where $f(x) = 0$.\n\n**Test Day Takeaway:** Across the $x$-axis means negate the output ($-f(x)$); across the $y$-axis means negate the input ($f(-x)$). Confirm with one landmark point such as the vertex.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "transformation-identification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-083",
    domain: "algebra",
    skills: ["function-transformations"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of $y = f(x)$ is shown in the $xy$-plane. The function $g$ is defined by $g(x) = f(x - 2) + 5$. What are the coordinates of the vertex of the graph of $y = g(x)$?",
    diagram: { type: "quadraticVertex", params: { vertex: [-3, 4], a: -1, showPoints: [[-5, 0], [-1, 0]], showVertex: true } },
    choices: [
      // distractor: reverses both directions (left 2, down 5)
      { id: "A", text: "$(-5, -1)$" },
      // distractor: shifts left 2 instead of right
      { id: "B", text: "$(-5, 9)$" },
      // distractor: shifts down 5 instead of up
      { id: "C", text: "$(-1, -1)$" },
      { id: "D", text: "$(-1, 9)$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Vertex from Transformations**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** The vertex of $f$ is at $(-3, 4)$. The $x - 2$ inside moves the graph right $2$; the $+ 5$ outside moves it up $5$. New vertex: $(-3 + 2, 4 + 5) = (-1, 9)$.\n\n**The Full Solution:**\nStep 1: Read the vertex of $f$ from the graph: the highest point is $(-3, 4)$.\nStep 2: $f(x - 2)$ is a horizontal translation $2$ units to the right (inside the function, opposite the sign), so the vertex moves to $(-1, 4)$.\nStep 3: Adding $5$ outside the function is a vertical translation up $5$, so the vertex moves to $(-1, 9)$. Check: $g(-1) = f(-1 - 2) + 5 = f(-3) + 5 = 4 + 5 = 9$, and no other input gives a larger value. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-5, -1)$): reverses both directions, moving left $2$ and down $5$.\n* Choice B ($(-5, 9)$): reads $x - 2$ as a shift to the left; inside the parentheses the sign works backward.\n* Choice C ($(-1, -1)$): reads $+ 5$ as a shift down; outside the parentheses the sign works as written.\n\n**Test Day Takeaway:** Track the vertex through each transformation one at a time: inside the function shifts horizontally (opposite the sign), outside shifts vertically (with the sign).",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "transformation-vertex",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-084",
    domain: "algebra",
    skills: ["function-transformations"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of the linear function $f$ is shown in the $xy$-plane. The function $g$ is defined by $g(x) = f(x) - 11$. What is the $y$-coordinate of the $y$-intercept of the graph of $y = g(x)$?",
    diagram: { type: "linearGraph", params: { slope: -2, yIntercept: 7, xRange: [-6, 8], yRange: [-6, 10], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 7], [2, 3]], label: "y = f(x)" } },
    choices: [
      // distractor: misreads the intercept as -7, then subtracts 11
      { id: "A", text: "$-18$" },
      // distractor: uses the shift itself as the intercept, as if f(0) were 0
      { id: "B", text: "$-11$" },
      { id: "C", text: "$-4$" },
      // distractor: subtracts in the wrong order, 11 - 7
      { id: "D", text: "$4$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: y-Intercept After Vertical Shift**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The graph of $f$ crosses the $y$-axis at $(0, 7)$, so $f(0) = 7$. Then $g(0) = f(0) - 11 = 7 - 11 = -4$.\n\n**The Full Solution:**\nStep 1: The $y$-intercept of $g$ is the point $(0, g(0))$, so evaluate $g$ at $x = 0$: $g(0) = f(0) - 11$.\nStep 2: Read $f(0)$ from the graph: the line meets the $y$-axis at $(0, 7)$, so $f(0) = 7$.\nStep 3: $g(0) = 7 - 11 = -4$. Check: subtracting $11$ from every output slides the whole line down $11$ units, so every point, including the $y$-intercept, drops by $11$: $7 - 11 = -4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-18$): misreads the intercept of $f$ as $-7$ and then subtracts $11$.\n* Choice B ($-11$): uses the shift itself as the intercept, as if $f(0)$ were $0$.\n* Choice D ($4$): subtracts in the wrong order, $11 - 7$.\n\n**Test Day Takeaway:** A vertical shift $f(x) + c$ moves every output by $c$, so the new $y$-intercept is the old one plus $c$; read the old intercept off the $y$-axis and add.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "transformation-application",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-085",
    domain: "algebra",
    skills: ["function-transformations"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The function $g$ is defined by $g(x) = \\frac{1}{2}(x + 4)^2 - 7$. Which of the following describes how the graph of $y = x^2$ can be transformed into the graph of $y = g(x)$ in the $xy$-plane?",
    choices: [
      // distractor: reads the factor 1/2 as a stretch by 2
      { id: "A", text: "Translate $4$ units to the left, stretch vertically by a factor of $2$, then translate $7$ units down." },
      // distractor: reads x + 4 as a shift to the right
      { id: "B", text: "Translate $4$ units to the right, compress vertically by a factor of $\\frac{1}{2}$, then translate $7$ units down." },
      // distractor: reads -7 as a shift up
      { id: "C", text: "Translate $4$ units to the left, compress vertically by a factor of $\\frac{1}{2}$, then translate $7$ units up." },
      { id: "D", text: "Translate $4$ units to the left, compress vertically by a factor of $\\frac{1}{2}$, then translate $7$ units down." }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Identify Multiple Transformations**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Compare with $y = a(x - h)^2 + k$: $h = -4$ (left $4$), $a = \\frac{1}{2}$ (vertical compression by $\\frac{1}{2}$), $k = -7$ (down $7$).\n\n**The Full Solution:**\nStep 1: Inside the square, $x + 4 = x - (-4)$, so the graph of $y = x^2$ is translated $4$ units to the left; the vertex moves from $(0, 0)$ to $(-4, 0)$.\nStep 2: The factor $\\frac{1}{2}$ multiplies every output, halving each distance from the $x$-axis: a vertical compression by a factor of $\\frac{1}{2}$ (the parabola opens wider).\nStep 3: The $-7$ outside translates the graph $7$ units down, putting the vertex at $(-4, -7)$. Check: $g(-4) = \\frac{1}{2}(0)^2 - 7 = -7$, and $g(-2) = \\frac{1}{2}(4) - 7 = -5$, which is $2$ above the vertex where $y = x^2$ would rise $4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (stretch by $2$): reads the factor $\\frac{1}{2}$ as a stretch; a coefficient between $0$ and $1$ compresses, making the parabola wider, not narrower.\n* Choice B (right $4$): reads $x + 4$ as a shift to the right; inside the parentheses the sign works backward.\n* Choice C (up $7$): reads $-7$ as a shift up; outside the parentheses the sign works as written.\n\n**Test Day Takeaway:** Match to $a(x - h)^2 + k$: $h$ shifts horizontally against its sign, $a$ between $0$ and $1$ compresses (wider), and $k$ shifts vertically with its sign.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "transformation-identification",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // === FINDING FUNCTION FROM CONDITIONS (5 questions) ===
  {
    id: "bank-alg-086",
    domain: "algebra",
    skills: ["finding-function-from-conditions"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The graph of line $k$ is shown in the $xy$-plane. Line $k$ passes through the origin and the point $(4, 6)$. Which of the following is an equation of line $k$?",
    diagram: { type: "linearGraph", params: { slope: 1.5, yIntercept: 0, xRange: [-6, 8], yRange: [-6, 10], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 0], [4, 6]], label: "k" } },
    choices: [
      { id: "A", text: "$y = \\dfrac{3}{2}x$" },
      // distractor: inverts the slope (run over rise)
      { id: "B", text: "$y = \\dfrac{2}{3}x$" },
      // distractor: adds the x-coordinate 4 as a y-intercept
      { id: "C", text: "$y = \\dfrac{3}{2}x + 4$" },
      // distractor: uses the y-coordinate 6 as the slope
      { id: "D", text: "$y = 6x$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Line Through Origin**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Through the origin, the $y$-intercept is $0$ and the slope is $\\frac{6 - 0}{4 - 0} = \\frac{3}{2}$, so $y = \\frac{3}{2}x$.\n\n**The Full Solution:**\nStep 1: A line through the origin has $y$-intercept $0$, so its equation has the form $y = mx$.\nStep 2: Slope from the two points: $m = \\frac{6 - 0}{4 - 0} = \\frac{6}{4} = \\frac{3}{2}$.\nStep 3: The equation is $y = \\frac{3}{2}x$. Check: at $x = 4$, $y = \\frac{3}{2}(4) = 6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = \\frac{2}{3}x$): inverts the slope, using run over rise; at $x = 4$ it gives $y = \\frac{8}{3}$, not $6$.\n* Choice C ($y = \\frac{3}{2}x + 4$): tacks on the $x$-coordinate $4$ as a $y$-intercept, but the line passes through the origin, so the intercept is $0$.\n* Choice D ($y = 6x$): uses the $y$-coordinate $6$ as the slope instead of dividing rise by run.\n\n**Test Day Takeaway:** Through the origin means $y = mx$ with no constant; compute $m$ as rise over run from the origin to the given point and verify by substitution.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-from-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-087",
    domain: "algebra",
    skills: ["finding-function-from-conditions"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table gives three values of $x$ and the corresponding values of $f(x)$ for the linear function $f$. Which of the following defines $f$?",
    diagram: { type: "table", params: { xHeader: "x", yHeader: "f(x)", rows: [["0", "-3"], ["5", "7"], ["10", "17"]] } },
    choices: [
      { id: "A", text: "$f(x) = 2x - 3$" },
      // distractor: inverts the slope, 5/10
      { id: "B", text: "$f(x) = \\dfrac{1}{2}x - 3$" },
      // distractor: uses f(5) = 7 as the intercept
      { id: "C", text: "$f(x) = 2x + 7$" },
      // distractor: swaps slope and intercept
      { id: "D", text: "$f(x) = -3x + 2$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Linear Function from Two Points (y-Intercept Given)**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The row $x = 0$ gives the $y$-intercept, $-3$. The outputs rise $10$ for every $5$ in $x$, so the slope is $2$: $f(x) = 2x - 3$.\n\n**The Full Solution:**\nStep 1: For a linear function $f(x) = mx + b$, $b = f(0)$. The table gives $f(0) = -3$.\nStep 2: Slope from two rows: $m = \\frac{7 - (-3)}{5 - 0} = \\frac{10}{5} = 2$.\nStep 3: $f(x) = 2x - 3$. Check with the third row: $f(10) = 2(10) - 3 = 17$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($f(x) = \\frac{1}{2}x - 3$): inverts the slope, dividing the change in $x$ by the change in $f(x)$.\n* Choice C ($f(x) = 2x + 7$): uses $f(5) = 7$ as the intercept; the intercept is the output at $x = 0$.\n* Choice D ($f(x) = -3x + 2$): swaps the slope and the intercept.\n\n**Test Day Takeaway:** When a table includes $x = 0$, read the intercept directly from that row, compute the slope from any two rows, and verify the rule on a row you did not use.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-from-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-088",
    domain: "algebra",
    skills: ["finding-function-from-conditions"],
    difficulty: "medium",
    type: "fill-in",
    question: "The table gives the temperature $T$, in degrees Celsius, of a metal rod at two times $t$, in minutes, after the rod was removed from a furnace. If $T$ is a linear function of $t$, what is the temperature of the rod, in degrees Celsius, at $t = 16$?",
    diagram: { type: "dataTable", params: { headers: ["Time (minutes)", "Temperature (°C)"], rows: [["4", "62"], ["10", "47"]] } },
    correctAnswer: "32",
    explanation: "**SAT Pattern: Linear Extrapolation**\n\n**The correct answer is $32$.**\n\n**The Fast Way (~15s):** The rod loses $62 - 47 = 15$ degrees over $6$ minutes, a rate of $-2.5$ degrees per minute. From $t = 10$ to $t = 16$ is another $6$ minutes, so $T = 47 - 15 = 32$.\n\n**The Full Solution:**\nStep 1: Rate of change from the two rows: $\\frac{47 - 62}{10 - 4} = \\frac{-15}{6} = -2.5$ degrees per minute.\nStep 2: Extend from the later row: $t = 16$ is $6$ minutes after $t = 10$, so the temperature changes by $-2.5 \\cdot 6 = -15$.\nStep 3: $T(16) = 47 - 15 = 32$. Check via the full model: $T(t) = 62 - 2.5(t - 4)$, so $T(16) = 62 - 2.5(12) = 62 - 30 = 32$. $\\checkmark$\n\n**Common Mistakes:** Treating $62$ as the temperature at $t = 0$ and computing $62 - 2.5(16) = 22$; adding instead of subtracting to get $47 + 15 = 62$; dividing $15$ by $16$ instead of by the $6$-minute gap.\n\n**Test Day Takeaway:** Find the rate from the two given points, then step from the nearest known point by the exact time gap, keeping the sign of the rate.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-from-conditions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-089",
    domain: "algebra",
    skills: ["finding-function-from-conditions"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The function $f$ is linear, $f(-4) = 19$, and $f(6) = -6$. In the $xy$-plane, the graph of $y = f(x)$ crosses the $y$-axis at the point $(0, b)$. What is the value of $b$?",
    choices: [
      // distractor: uses run 6 - 4 = 2, slope -12.5
      { id: "A", text: "$-31$" },
      { id: "B", text: "$9$" },
      // distractor: reports f(-4) as the intercept
      { id: "C", text: "$19$" },
      // distractor: uses slope +2.5
      { id: "D", text: "$29$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Find y-Intercept from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Slope $= \\frac{-6 - 19}{6 - (-4)} = \\frac{-25}{10} = -2.5$. From $x = -4$ to $x = 0$ is a run of $4$, so $b = 19 + (-2.5)(4) = 9$.\n\n**The Full Solution:**\nStep 1: Slope from the two points $(-4, 19)$ and $(6, -6)$: $m = \\frac{-6 - 19}{6 - (-4)} = \\frac{-25}{10} = -2.5$. Note the run is $10$, not $2$, because the inputs are $-4$ and $6$.\nStep 2: Write $f(x) = -2.5x + b$ and use $f(-4) = 19$: $19 = -2.5(-4) + b = 10 + b$, so $b = 9$.\nStep 3: Check with the other point: $f(6) = -2.5(6) + 9 = -15 + 9 = -6$. $\\checkmark$ The $y$-intercept is $(0, 9)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-31$): computes the run as $6 - 4 = 2$, getting slope $-12.5$, then $19 - 12.5(4) = -31$.\n* Choice C ($19$): reports $f(-4)$ as the intercept, treating the input $-4$ as if it were $0$.\n* Choice D ($29$): uses slope $+2.5$ and adds $10$ instead of subtracting.\n\n**Test Day Takeaway:** With a negative input, the run is $x_2 - x_1$ with the sign kept; then substitute one point into $y = mx + b$ and confirm with the other.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-from-conditions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },
  {
    id: "bank-alg-090",
    domain: "algebra",
    skills: ["finding-function-from-conditions", "slope-from-points"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A candle burns at a constant rate. The table gives the height $h$, in centimeters, of the candle $t$ hours after it was lit, for two values of $t$. What was the height of the candle, in centimeters, at the moment it was lit?",
    questionTable: { headers: ["Time (hours)", "Height (cm)"], rows: [["2", "21.5"], ["5", "17"]] },
    choices: [
      // distractor: steps the wrong direction from t = 2
      { id: "A", text: "$18.5$" },
      // distractor: adds only one hour of burn
      { id: "B", text: "$23$" },
      { id: "C", text: "$24.5$" },
      // distractor: uses 3 hours instead of 2
      { id: "D", text: "$26$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Linear Extrapolation Back to t = 0**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The candle loses $21.5 - 17 = 4.5$ cm over $3$ hours, so $1.5$ cm per hour. Two hours before $t = 2$ it was $2(1.5) = 3$ cm taller: $21.5 + 3 = 24.5$.\n\n**The Full Solution:**\nStep 1: Rate from the two rows: $\\frac{17 - 21.5}{5 - 2} = \\frac{-4.5}{3} = -1.5$ cm per hour.\nStep 2: The height when lit is $h(0)$. Going back from $t = 2$ to $t = 0$ undoes $2$ hours of burning, so add $1.5 \\cdot 2 = 3$: $h(0) = 21.5 + 3 = 24.5$.\nStep 3: Check with the model $h(t) = 24.5 - 1.5t$: $h(5) = 24.5 - 7.5 = 17$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($18.5$): steps in the wrong direction from $t = 2$, subtracting $3$ instead of adding it.\n* Choice B ($23$): adds only one hour of burn, $1.5$, instead of two hours.\n* Choice D ($26$): uses the $3$-hour gap between the rows, $21.5 + 4.5$, instead of the $2$ hours back to $t = 0$.\n\n**Test Day Takeaway:** Find the rate, then move from the nearest data point to $t = 0$ by exactly that many hours, reversing the direction of change because you are going backward in time.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "linear-extrapolation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-02-28"
  },

  // === SHIFTED OUTPUT (8 questions) — Phase 2 priority pattern ===
  // Covers 4 sub-flavors: linear-cost-with-fee, cross-multiply-then-shift,
  // direct-linear-expression-shift, function-evaluation-shift. All map to
  // satPattern 'shifted-output' (24x in 12 tests = 4.5% of all test items).
  {
    id: "bank-alg-091",
    domain: "algebra",
    skills: ["word-problem-to-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A ferry charges $\\$7$ per passenger plus a fixed fee of $\\$12$ per vehicle. A group traveling with one vehicle and $p$ passengers paid a total of $\\$61$. What would the total have been, in dollars, for the same vehicle with $p + 3$ passengers?",
    choices: [
      // distractor: adds the count 3 as dollars
      { id: "A", text: "$\\$64$" },
      { id: "B", text: "$\\$82$" },
      // distractor: adds a second vehicle fee
      { id: "C", text: "$\\$94$" },
      // distractor: uses the vehicle fee as the per-passenger price
      { id: "D", text: "$\\$97$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Shifted Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Three more passengers add $3 \\cdot \\$7 = \\$21$. The vehicle fee does not change, so the new total is $\\$61 + \\$21 = \\$82$.\n\n**The Full Solution:**\nStep 1: The cost equation is $7p + 12 = 61$, so $7p = 49$ and $p = 7$ passengers.\nStep 2: With $p + 3 = 10$ passengers and one vehicle: $7(10) + 12 = 70 + 12 = 82$.\nStep 3: Shortcut check without solving for $p$: adding $3$ passengers adds $3 \\cdot 7 = 21$, and $61 + 21 = 82$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$64$): adds the count $3$ as dollars instead of $3 \\cdot \\$7 = \\$21$.\n* Choice C ($\\$94$): adds a second vehicle fee, $82 + 12$, though the group still has one vehicle.\n* Choice D ($\\$97$): uses the vehicle fee $\\$12$ as the per-passenger price, $61 + 3 \\cdot 12$.\n\n**Test Day Takeaway:** In a rate-plus-fixed-fee model, changing the count changes only the rate part; multiply the extra count by the rate and leave the fixed fee alone.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "shifted-output",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-092",
    domain: "algebra",
    skills: ["word-problem-to-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A climbing gym charges $\\$4$ per visit plus a monthly membership fee of $\\$15$. Last month, a member who made $v$ visits was charged a total of $\\$47$. What would the member have been charged, in dollars, for $v - 3$ visits that month?",
    choices: [
      // distractor: subtracts both the 12 and the membership fee
      { id: "A", text: "$\\$20$" },
      // distractor: subtracts the membership fee instead of 3 visits
      { id: "B", text: "$\\$32$" },
      { id: "C", text: "$\\$35$" },
      // distractor: subtracts the count 3 as dollars
      { id: "D", text: "$\\$44$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Three fewer visits remove $3 \\cdot \\$4 = \\$12$. The membership fee stays, so the charge is $\\$47 - \\$12 = \\$35$.\n\n**The Full Solution:**\nStep 1: The charge equation is $4v + 15 = 47$, so $4v = 32$ and $v = 8$ visits.\nStep 2: For $v - 3 = 5$ visits: $4(5) + 15 = 20 + 15 = 35$.\nStep 3: Shortcut check: removing $3$ visits removes $3 \\cdot 4 = 12$, and $47 - 12 = 35$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\$20$): subtracts the $\\$12$ for the visits and also drops the $\\$15$ membership fee, which is still owed.\n* Choice B ($\\$32$): subtracts the membership fee $\\$15$ instead of the cost of $3$ visits.\n* Choice D ($\\$44$): subtracts the count $3$ as dollars instead of $3 \\cdot \\$4 = \\$12$.\n\n**Test Day Takeaway:** A change in the count moves the total by (change) $\\times$ (rate) in the same direction; the fixed fee is unaffected whether the count goes up or down.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "shifted-output",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-093",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The equation $4y - 13 = 35$ is given. What is the value of $4y + 7$?",
    choices: [
      // distractor: reports y
      { id: "A", text: "$12$" },
      // distractor: adds 7 to 35 without undoing the -13
      { id: "B", text: "$42$" },
      // distractor: reports 4y
      { id: "C", text: "$48$" },
      { id: "D", text: "$55$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Shifted Output**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Add $13$ to both sides: $4y = 48$. Then $4y + 7 = 48 + 7 = 55$. No need to find $y$.\n\n**The Full Solution:**\nStep 1: The target $4y + 7$ contains $4y$, so isolate $4y$ rather than $y$: $4y - 13 = 35 \\Rightarrow 4y = 48$.\nStep 2: Add $7$: $4y + 7 = 55$.\nStep 3: Check by solving fully: $y = 12$, and $4(12) + 7 = 48 + 7 = 55$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): reports $y$ itself instead of the requested expression.\n* Choice B ($42$): adds $7$ to $35$ without first undoing the $-13$; the two constants differ by $20$, not $7$.\n* Choice C ($48$): reports $4y$ and forgets the final $+7$.\n\n**Test Day Takeaway:** When the question asks for an expression, isolate that expression's variable part ($4y$ here) and shift by the new constant; solving for $y$ is an optional check.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "shifted-output",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-094",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The equation $\\frac{3x}{8} = \\frac{9}{4}$ is given. What is the value of $x + 7$?",
    choices: [
      // distractor: reports x
      { id: "A", text: "$6$" },
      // distractor: divides 9 by 3 to get x = 3, ignoring the 8/4
      { id: "B", text: "$10$" },
      { id: "C", text: "$13$" },
      // distractor: forgets to divide by 4: 3x = 72
      { id: "D", text: "$31$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Multiply both sides by $8$: $3x = \\frac{9 \\cdot 8}{4} = 18$, so $x = 6$ and $x + 7 = 13$.\n\n**The Full Solution:**\nStep 1: Clear the fraction on the left by multiplying both sides by $8$: $3x = \\frac{72}{4} = 18$.\nStep 2: Divide by $3$: $x = 6$.\nStep 3: Add $7$: $x + 7 = 13$. Check: $\\frac{3(6)}{8} = \\frac{18}{8} = \\frac{9}{4}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): reports $x$ and forgets the final $+7$.\n* Choice B ($10$): divides $9$ by $3$ to get $x = 3$, ignoring that the denominators $8$ and $4$ are different.\n* Choice D ($31$): cross-multiplies to $3x = 72$ but forgets to divide by $4$, getting $x = 24$.\n\n**Test Day Takeaway:** Clear denominators by cross-multiplying completely ($3x \\cdot 4 = 9 \\cdot 8$), solve, and then apply the shift the question actually asks for.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "shifted-output",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-095",
    domain: "algebra",
    skills: ["function-evaluation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $h$ is defined by $h(x) = 6x - 5$. What is the value of $h(4) + 8$?",
    choices: [
      // distractor: subtracts 8 instead of adding
      { id: "A", text: "$11$" },
      // distractor: reports h(4), forgetting the +8
      { id: "B", text: "$19$" },
      { id: "C", text: "$27$" },
      // distractor: adds 8 to the input, computing h(12)
      { id: "D", text: "$67$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $h(4) = 6(4) - 5 = 19$, so $h(4) + 8 = 27$.\n\n**The Full Solution:**\nStep 1: Evaluate the function first: $h(4) = 6(4) - 5 = 24 - 5 = 19$.\nStep 2: The $+8$ is outside the function, so it is added to the output: $19 + 8 = 27$.\nStep 3: Check: $27 - 8 = 19 = h(4)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($11$): subtracts $8$ from $h(4)$ instead of adding it.\n* Choice B ($19$): reports $h(4)$ and forgets the $+8$.\n* Choice D ($67$): adds $8$ to the input, computing $h(12) = 67$ instead of $h(4) + 8$.\n\n**Test Day Takeaway:** Read the placement of a constant carefully: outside the parentheses it adjusts the output after evaluating; inside it changes the input before evaluating.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "shifted-output",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-096",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "If $p$ is the solution to the equation $3(2p - 7) + 4 = 5(2p - 7) - 10$, what is the value of $2p + 3$?",
    choices: [
      // distractor: reports 2p - 7
      { id: "A", text: "$7$" },
      // distractor: treats 2p as 7, forgetting to add 7 back
      { id: "B", text: "$10$" },
      // distractor: sign slip 2u = 6 gives u = 3
      { id: "C", text: "$13$" },
      { id: "D", text: "$17$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Shifted Output**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Treat $2p - 7$ as one unit $u$: $3u + 4 = 5u - 10 \\Rightarrow 14 = 2u \\Rightarrow u = 7$. Then $2p = u + 7 = 14$, so $2p + 3 = 17$.\n\n**The Full Solution:**\nStep 1: Both sides contain the same expression $2p - 7$, so let $u = 2p - 7$: $3u + 4 = 5u - 10$.\nStep 2: Subtract $3u$ and add $10$: $14 = 2u$, so $u = 7$, meaning $2p - 7 = 7$ and $2p = 14$.\nStep 3: $2p + 3 = 14 + 3 = 17$. Check with $p = 7$: left side $3(7) + 4 = 25$, right side $5(7) - 10 = 25$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): reports the value of $2p - 7$ instead of $2p + 3$.\n* Choice B ($10$): treats $2p$ as $7$, forgetting to add the $7$ back before adding $3$.\n* Choice C ($13$): a sign slip, $2u = 6$, gives $u = 3$ and $2p = 10$.\n\n**Test Day Takeaway:** When the same expression appears on both sides, solve for that expression as a single unit, then convert to the expression the question asks for by adjusting the constant.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "shifted-output",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-097",
    domain: "algebra",
    skills: ["word-problem-to-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A print shop charges $\\$0.75$ per page plus a binding fee of $\\$6$ per booklet. Printing and binding one booklet with $n$ pages cost $\\$21$. What is the cost, in dollars, of printing and binding one booklet with $n + 12$ pages?",
    choices: [
      { id: "A", text: "$\\$30$" },
      // distractor: adds the 12 pages as dollars
      { id: "B", text: "$\\$33$" },
      // distractor: adds a second binding fee
      { id: "C", text: "$\\$36$" },
      // distractor: uses the binding fee as the per-page price
      { id: "D", text: "$\\$93$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Shifted Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Twelve more pages add $12 \\cdot \\$0.75 = \\$9$. One booklet still means one binding fee, so the cost is $\\$21 + \\$9 = \\$30$.\n\n**The Full Solution:**\nStep 1: The cost equation is $0.75n + 6 = 21$, so $0.75n = 15$ and $n = 20$ pages.\nStep 2: For $n + 12 = 32$ pages: $0.75(32) + 6 = 24 + 6 = 30$.\nStep 3: Shortcut check: $12$ extra pages cost $12 \\cdot 0.75 = 9$, and $21 + 9 = 30$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\$33$): adds the $12$ pages as $12$ dollars instead of $12 \\cdot \\$0.75$.\n* Choice C ($\\$36$): adds a second binding fee on top of the page cost, though it is still one booklet.\n* Choice D ($\\$93$): uses the $\\$6$ binding fee as the per-page price, $21 + 12 \\cdot 6$.\n\n**Test Day Takeaway:** Identify which quantity is scaling (pages) and which is fixed (binding); the extra cost is the extra count times the per-unit rate only.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "shifted-output",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-098",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "If $w$ is the solution to the equation $\\frac{4w - 3}{9} = \\frac{8}{3}$, what is the value of $8w + 1$?",
    choices: [
      // distractor: reports 4w + 1
      { id: "A", text: "$28$" },
      // distractor: drops the -3, getting 4w = 24
      { id: "B", text: "$49$" },
      { id: "C", text: "$55$" },
      // distractor: cross-multiplies as 4w - 3 = 72, forgetting to divide by 3
      { id: "D", text: "$151$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Shifted Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Multiply by $9$: $4w - 3 = 24$, so $4w = 27$. Since $8w = 2(4w) = 54$, the value of $8w + 1$ is $55$.\n\n**The Full Solution:**\nStep 1: Multiply both sides by $9$: $4w - 3 = \\frac{8 \\cdot 9}{3} = 24$.\nStep 2: Add $3$: $4w = 27$. The target $8w + 1$ is built from $8w = 2 \\cdot 4w = 54$, so there is no need to find $w$.\nStep 3: $8w + 1 = 55$. Check with $w = 6.75$: $\\frac{4(6.75) - 3}{9} = \\frac{24}{9} = \\frac{8}{3}$ and $8(6.75) + 1 = 55$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($28$): reports $4w + 1$, forgetting to double $4w$.\n* Choice B ($49$): drops the $-3$, getting $4w = 24$ and $8w + 1 = 49$.\n* Choice D ($151$): cross-multiplies as $4w - 3 = 8 \\cdot 9 = 72$, forgetting to divide by $3$.\n\n**Test Day Takeaway:** Isolate the block ($4w$) that the target is built from, scale the block rather than solving for the variable, and keep every constant from the original equation.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "shifted-output",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },

  // === MULTI-STEP LINEAR EQUATION (8 questions) — Phase 2 priority pattern ===
  // 20x in 12 tests = 3.8% of test items. Covers: distribute+combine,
  // LCD-fractions, same-denominator, and coefficient-chain word problems.
  {
    id: "bank-alg-099",
    domain: "algebra",
    skills: ["distributive-property", "combining-like-terms"],
    difficulty: "easy",
    type: "fill-in",
    question: "What is the solution to the equation $4(x + 3) - 7 = 25$?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~10s):** Distribute: $4x + 12 - 7 = 25 \\Rightarrow 4x + 5 = 25 \\Rightarrow 4x = 20 \\Rightarrow x = 5$.\n\n**The Full Solution:**\nStep 1: Distribute the $4$: $4(x + 3) = 4x + 12$, so the equation is $4x + 12 - 7 = 25$.\nStep 2: Combine constants on the left: $4x + 5 = 25$. Subtract $5$: $4x = 20$.\nStep 3: Divide by $4$: $x = 5$. Check: $4(5 + 3) - 7 = 32 - 7 = 25$. $\\checkmark$\n\n**Common Mistakes:** Distributing $4$ to $x$ only, giving $4x + 3 - 7 = 25$ and $x = 7.25$; adding $12$ and $7$ instead of subtracting, giving $4x = 6$; dividing $25$ by $4$ before moving the constants.\n\n**Test Day Takeaway:** Distribute to every term inside the parentheses, combine the constants, then isolate the variable; substitute back to confirm.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "multi-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-100",
    domain: "algebra",
    skills: ["distributive-property", "combining-like-terms"],
    difficulty: "easy",
    type: "fill-in",
    question: "What is the solution to the equation $5(x - 2) + 3x = 62$?",
    correctAnswer: "9",
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~10s):** Distribute and combine: $5x - 10 + 3x = 62 \\Rightarrow 8x = 72 \\Rightarrow x = 9$.\n\n**The Full Solution:**\nStep 1: Distribute the $5$: $5(x - 2) = 5x - 10$, so the equation is $5x - 10 + 3x = 62$.\nStep 2: Combine like terms: $8x - 10 = 62$. Add $10$: $8x = 72$.\nStep 3: Divide by $8$: $x = 9$. Check: $5(9 - 2) + 3(9) = 35 + 27 = 62$. $\\checkmark$\n\n**Common Mistakes:** Distributing $5$ to $x$ only, giving $5x - 2 + 3x = 62$ and $x = 8$; subtracting $10$ instead of adding, giving $8x = 52$; combining $5x$ and $3x$ as $15x$.\n\n**Test Day Takeaway:** Distribute fully, gather the variable terms on one side and the constants on the other, then divide; a quick substitution catches distribution slips.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "multi-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-101",
    domain: "algebra",
    skills: ["distributive-property", "combining-like-terms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "What value of $y$ is the solution to the equation $6(2y - 3) = 4y + 30$?",
    choices: [
      // distractor: -48 = -8y then divides by 8 instead of -8
      { id: "A", text: "$-6$" },
      // distractor: subtracts 18 instead of adding, 8y = 12
      { id: "B", text: "$1.5$" },
      // distractor: adds 4y instead of subtracting, 16y = 48
      { id: "C", text: "$3$" },
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Distribute: $12y - 18 = 4y + 30$. Subtract $4y$ and add $18$: $8y = 48$, so $y = 6$.\n\n**The Full Solution:**\nStep 1: Distribute the $6$: $6(2y - 3) = 12y - 18$, so $12y - 18 = 4y + 30$.\nStep 2: Collect the $y$-terms on the left by subtracting $4y$: $8y - 18 = 30$. Add $18$: $8y = 48$.\nStep 3: Divide by $8$: $y = 6$. Check: $6(12 - 3) = 54$ and $4(6) + 30 = 54$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): collects the $y$-terms on the right, $-18 - 30 = 4y - 12y$, so $-48 = -8y$, then divides by $8$ instead of $-8$.\n* Choice B ($1.5$): subtracts $18$ instead of adding it, getting $8y = 12$.\n* Choice C ($3$): adds $4y$ to the left instead of subtracting, getting $16y = 48$.\n\n**Test Day Takeaway:** Distribute first, then move variable terms one way and constants the other, flipping each sign as it crosses the equals sign; verify by substituting into both sides.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "multi-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-102",
    domain: "algebra",
    skills: ["distributive-property", "combining-like-terms"],
    difficulty: "medium",
    type: "fill-in",
    question: "What is the solution to the equation $3(4x + 1) - 8 = 5(2x - 3)$?",
    correctAnswer: "-5",
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $-5$.**\n\n**The Fast Way (~15s):** Distribute both sides: $12x + 3 - 8 = 10x - 15 \\Rightarrow 12x - 5 = 10x - 15 \\Rightarrow 2x = -10 \\Rightarrow x = -5$.\n\n**The Full Solution:**\nStep 1: Distribute: left side $3(4x + 1) - 8 = 12x + 3 - 8 = 12x - 5$; right side $5(2x - 3) = 10x - 15$.\nStep 2: Subtract $10x$ from both sides: $2x - 5 = -15$. Add $5$: $2x = -10$.\nStep 3: Divide by $2$: $x = -5$. Check: $3(-20 + 1) - 8 = -57 - 8 = -65$ and $5(-10 - 3) = -65$. $\\checkmark$\n\n**Common Mistakes:** Distributing $5$ to $2x$ only, giving $10x - 3$ on the right and $x = 1$; adding $5$ and $15$ with the wrong sign to get $2x = 10$ and $x = 5$; combining $3 - 8$ as $+5$.\n\n**Test Day Takeaway:** Distribute on both sides before moving anything, simplify each side to $ax + b$ form, then solve; a negative answer is a normal outcome, so check it rather than doubting it.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "multi-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-103",
    domain: "algebra",
    skills: ["combining-like-terms", "simplifying-rational-expressions"],
    difficulty: "medium",
    type: "fill-in",
    question: "What is the solution to the equation $\\frac{x - 2}{3} + \\frac{x + 4}{6} = 4$?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~15s):** Multiply every term by $6$: $2(x - 2) + (x + 4) = 24 \\Rightarrow 3x = 24 \\Rightarrow x = 8$.\n\n**The Full Solution:**\nStep 1: The least common denominator of $3$ and $6$ is $6$. Multiply both sides by $6$: $6 \\cdot \\frac{x - 2}{3} + 6 \\cdot \\frac{x + 4}{6} = 24$, which is $2(x - 2) + (x + 4) = 24$.\nStep 2: Distribute and combine: $2x - 4 + x + 4 = 24$, so $3x = 24$.\nStep 3: Divide by $3$: $x = 8$. Check: $\\frac{6}{3} + \\frac{12}{6} = 2 + 2 = 4$. $\\checkmark$\n\n**Common Mistakes:** Multiplying only the left side by $6$ and leaving $4$ unchanged, giving $3x = 4$; distributing $2$ to $x$ only, giving $2x - 2 + x + 4 = 24$ and $x = \\frac{22}{3}$; adding the denominators to get $\\frac{2x + 2}{9} = 4$.\n\n**Test Day Takeaway:** Clear fractions by multiplying every term, including the constant on the other side, by the least common denominator, then solve the resulting linear equation.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "multi-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-104",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "What value of $x$ is the solution to the equation $\\frac{4x + 9}{6} = \\frac{7x - 3}{3}$?",
    choices: [
      // distractor: sign slip, 10x = -15
      { id: "A", text: "$-1.5$" },
      { id: "B", text: "$1.5$" },
      // distractor: drops both denominators
      { id: "C", text: "$4$" },
      // distractor: reports 10x
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Multiply both sides by $6$: $4x + 9 = 2(7x - 3) = 14x - 6$. Then $15 = 10x$, so $x = 1.5$.\n\n**The Full Solution:**\nStep 1: The denominators are $6$ and $3$; multiply both sides by $6$. The left becomes $4x + 9$ and the right becomes $\\frac{6}{3}(7x - 3) = 2(7x - 3)$.\nStep 2: Distribute: $4x + 9 = 14x - 6$. Subtract $4x$ and add $6$: $15 = 10x$.\nStep 3: $x = 1.5$. Check: $\\frac{4(1.5) + 9}{6} = \\frac{15}{6} = 2.5$ and $\\frac{7(1.5) - 3}{3} = \\frac{7.5}{3} = 2.5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-1.5$): a sign slip when collecting terms, $10x = -15$.\n* Choice C ($4$): drops both denominators as if they were equal, solving $4x + 9 = 7x - 3$.\n* Choice D ($15$): reports $10x$ instead of $x$.\n\n**Test Day Takeaway:** When the denominators differ, multiply through by the least common denominator and distribute the resulting factor over the whole numerator, not just its first term.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "multi-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-105",
    domain: "algebra",
    skills: ["word-problem-to-equation", "combining-like-terms"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A landscaping crew planted oak, maple, and birch trees in a park. The number of maple trees planted was $4$ times the number of oak trees, and the number of birch trees planted was $9$ fewer than twice the number of oak trees. The crew planted $103$ trees in total. How many maple trees did the crew plant?",
    choices: [
      // distractor: reports the oak count
      { id: "A", text: "$16$" },
      // distractor: reports the birch count
      { id: "B", text: "$23$" },
      // distractor: adds oak and birch counts
      { id: "C", text: "$39$" },
      { id: "D", text: "$64$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Let $k$ be the number of oak trees: maples $= 4k$, birches $= 2k - 9$. Then $k + 4k + (2k - 9) = 103 \\Rightarrow 7k = 112 \\Rightarrow k = 16$, so there are $4(16) = 64$ maples.\n\n**The Full Solution:**\nStep 1: Define the variable as the quantity everything else is compared to: $k$ oak trees. Then maple $= 4k$ and birch $= 2k - 9$.\nStep 2: Total: $k + 4k + 2k - 9 = 103$, so $7k - 9 = 103$ and $7k = 112$, giving $k = 16$.\nStep 3: The question asks for maples: $4k = 64$. Check: $16 + 64 + (32 - 9) = 16 + 64 + 23 = 103$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($16$): reports the number of oak trees, the variable solved for, instead of the maples.\n* Choice B ($23$): reports the number of birch trees.\n* Choice C ($39$): adds the oak and birch counts, the two quantities not asked for.\n\n**Test Day Takeaway:** Let the variable be the base quantity the others are described from, write each count in terms of it, solve, and then reread the question to report the quantity actually requested.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "multi-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-106",
    domain: "algebra",
    skills: ["combining-like-terms", "simplifying-rational-expressions"],
    difficulty: "hard",
    type: "fill-in",
    question: "What is the solution to the equation $\\frac{4x + 3}{6} - \\frac{x - 5}{4} = 3$?",
    correctAnswer: "3",
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~20s):** Multiply by $12$: $2(4x + 3) - 3(x - 5) = 36 \\Rightarrow 8x + 6 - 3x + 15 = 36 \\Rightarrow 5x = 15 \\Rightarrow x = 3$.\n\n**The Full Solution:**\nStep 1: The least common denominator of $6$ and $4$ is $12$. Multiply every term by $12$: $2(4x + 3) - 3(x - 5) = 36$.\nStep 2: Distribute carefully, including the negative: $8x + 6 - 3x + 15 = 36$, so $5x + 21 = 36$.\nStep 3: Subtract $21$ and divide by $5$: $x = 3$. Check: $\\frac{15}{6} - \\frac{-2}{4} = 2.5 + 0.5 = 3$. $\\checkmark$\n\n**Common Mistakes:** Distributing $-3$ to $x$ only, giving $8x + 6 - 3x - 5 = 36$ and $x = 7$; forgetting to multiply the right side by $12$, giving $5x + 21 = 3$; using $24$ as the common denominator and then mis-scaling one term.\n\n**Test Day Takeaway:** When a fraction is subtracted, the negative applies to the whole numerator; multiply by the LCD, put the distributed numerator in parentheses, and distribute the sign to every term.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "multi-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },

  // === LINE FROM TWO POINTS (8 questions) — Phase 2 batch 4 priority pattern ===
  // 8x in 12 tests. Covers: slope+point→intercept, two points→slope,
  // two points→intercept, function values→evaluate at new x, x-intercept,
  // parallel & perpendicular line construction, combined function values.
  // SAT Pattern kebab matches: 'line-from-two-points'.
  {
    id: "bank-alg-107",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "easy",
    type: "fill-in",
    question: "In the $xy$-plane, a line with slope $-3$ passes through the point $(2, 5)$. What is the $y$-coordinate of the $y$-intercept of the line?",
    correctAnswer: "11",
    explanation: "**SAT Pattern: Line from Two Points**\n\n**The correct answer is $11$.**\n\n**The Fast Way (~10s):** Substitute into $y = mx + b$: $5 = -3(2) + b \\Rightarrow 5 = -6 + b \\Rightarrow b = 11$.\n\n**The Full Solution:**\nStep 1: A line with slope $-3$ has equation $y = -3x + b$ for some constant $b$, and $b$ is the $y$-coordinate of the $y$-intercept.\nStep 2: The point $(2, 5)$ is on the line, so $5 = -3(2) + b$, which is $5 = -6 + b$.\nStep 3: Add $6$: $b = 11$. Check: at $x = 2$, $y = -3(2) + 11 = 5$. $\\checkmark$\n\n**Common Mistakes:** Getting $-1$ by computing $5 - 6$ instead of $5 + 6$; using $5 = -3(5) + b$ by substituting the $y$-coordinate for $x$; reporting the slope-point product $-6$.\n\n**Test Day Takeaway:** With slope and one point, plug both into $y = mx + b$ and solve for $b$; a negative slope times a positive $x$ makes $b$ larger than the given $y$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "line-from-two-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-108",
    domain: "algebra",
    skills: ["slope-from-points"],
    difficulty: "easy",
    type: "fill-in",
    question: "Line $m$ is graphed in the $xy$-plane and passes through the points $(-4, 1)$ and $(4, 7)$. What is the slope of line $m$?",
    diagram: { type: "linearLine", params: { points: [[-4, 1], [4, 7]], xRange: [-6, 8], yRange: [-6, 8] } },
    correctAnswer: "3/4",
    explanation: "**SAT Pattern: Line from Two Points**\n\n**The correct answer is $\\frac{3}{4}$.**\n\n**The Fast Way (~10s):** Slope $= \\frac{7 - 1}{4 - (-4)} = \\frac{6}{8} = \\frac{3}{4}$.\n\n**The Full Solution:**\nStep 1: Slope is rise over run between any two points: $m = \\frac{y_2 - y_1}{x_2 - x_1}$.\nStep 2: Using $(-4, 1)$ and $(4, 7)$: rise $= 7 - 1 = 6$, run $= 4 - (-4) = 8$.\nStep 3: $m = \\frac{6}{8} = \\frac{3}{4}$. Check on the graph: moving right $8$ and up $6$ from $(-4, 1)$ lands on $(4, 7)$. $\\checkmark$\n\n**Common Mistakes:** Computing the run as $4 - 4 = 0$ by dropping the sign of $-4$ (an undefined slope for a clearly non-vertical line is the tell); inverting to $\\frac{8}{6}$ (run over rise); subtracting in mixed order to get $-\\frac{3}{4}$.\n\n**Test Day Takeaway:** Subtract the coordinates in the same order for both rise and run, treating subtraction of a negative as addition, then reduce the fraction.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "line-from-two-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-109",
    domain: "algebra",
    skills: ["slope-from-points", "slope-intercept-form"],
    difficulty: "medium",
    type: "fill-in",
    question: "A line in the $xy$-plane passes through the points $(-2, 9)$ and $(4, -3)$. What is the $y$-coordinate of the point where the line crosses the $y$-axis?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: Line from Two Points**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** Slope $= \\frac{-3 - 9}{4 - (-2)} = \\frac{-12}{6} = -2$. Then $9 = -2(-2) + b \\Rightarrow b = 5$.\n\n**The Full Solution:**\nStep 1: Slope from the two points: $m = \\frac{-3 - 9}{4 - (-2)} = \\frac{-12}{6} = -2$.\nStep 2: Write $y = -2x + b$ and substitute $(-2, 9)$: $9 = -2(-2) + b = 4 + b$, so $b = 5$.\nStep 3: Check with the other point: $y = -2(4) + 5 = -3$. $\\checkmark$ The line crosses the $y$-axis at $(0, 5)$.\n\n**Common Mistakes:** Getting $b = 13$ by computing $-2(-2)$ as $-4$; using run $4 - 2 = 2$ to get slope $-6$; reporting the slope $-2$ instead of the intercept.\n\n**Test Day Takeaway:** Find the slope from the two points, substitute either point into $y = mx + b$ watching double negatives, and confirm the equation with the point you did not use.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "line-from-two-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-110",
    domain: "algebra",
    skills: ["slope-from-points", "function-evaluation"],
    difficulty: "medium",
    type: "fill-in",
    question: "The table gives two values of $x$ and the corresponding values of $g(x)$ for the linear function $g$. What is the value of $g(9)$?",
    diagram: { type: "table", params: { xHeader: "x", yHeader: "g(x)", rows: [["0", "-7"], ["4", "5"]] } },
    correctAnswer: "20",
    explanation: "**SAT Pattern: Line from Two Points**\n\n**The correct answer is $20$.**\n\n**The Fast Way (~15s):** The outputs rise $12$ over a run of $4$, so the slope is $3$. With $g(0) = -7$, $g(x) = 3x - 7$ and $g(9) = 27 - 7 = 20$.\n\n**The Full Solution:**\nStep 1: Slope from the table: $\\frac{5 - (-7)}{4 - 0} = \\frac{12}{4} = 3$.\nStep 2: The row $x = 0$ gives the $y$-intercept directly: $g(0) = -7$, so $g(x) = 3x - 7$.\nStep 3: $g(9) = 3(9) - 7 = 27 - 7 = 20$. Check: $g(4) = 12 - 7 = 5$ matches the table. $\\checkmark$\n\n**Common Mistakes:** Using slope $\\frac{5 - 7}{4} = -0.5$ by dropping the negative on $-7$; extending from $x = 4$ by $9$ steps instead of $5$, getting $5 + 27 = 32$; reporting $27$ and forgetting the intercept.\n\n**Test Day Takeaway:** From a table, compute the slope from two rows, read the intercept from the $x = 0$ row if present, write the rule, and evaluate at the requested input.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "line-from-two-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-111",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, a line with slope $\\frac{3}{4}$ passes through the point $(-2, 6)$. What is the $x$-coordinate of the $x$-intercept of the line?",
    choices: [
      { id: "A", text: "$-10$" },
      // distractor: negates the y-intercept as if the slope were 1
      { id: "B", text: "$-7.5$" },
      // distractor: reports the y-intercept
      { id: "C", text: "$7.5$" },
      // distractor: drops the negative sign in the last division
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $6 = \\frac{3}{4}(-2) + b$ gives $b = 7.5$. Set $y = 0$: $0 = \\frac{3}{4}x + 7.5$, so $x = -7.5 \\div \\frac{3}{4} = -10$.\n\n**The Full Solution:**\nStep 1: Write $y = \\frac{3}{4}x + b$ and substitute $(-2, 6)$: $6 = -\\frac{3}{2} + b$, so $b = \\frac{15}{2} = 7.5$.\nStep 2: The $x$-intercept has $y = 0$: $0 = \\frac{3}{4}x + 7.5$, so $\\frac{3}{4}x = -7.5$.\nStep 3: Multiply by $\\frac{4}{3}$: $x = -10$. Check: from $(-10, 0)$, a run of $8$ to $x = -2$ rises $\\frac{3}{4}(8) = 6$, landing on $(-2, 6)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-7.5$): negates the $y$-intercept without dividing by the slope, as if the slope were $1$.\n* Choice C ($7.5$): reports the $y$-intercept instead of the $x$-intercept.\n* Choice D ($10$): drops the negative sign when dividing $-7.5$ by $\\frac{3}{4}$.\n\n**Test Day Takeaway:** Find $b$ from the given point, then set $y = 0$ and divide by the slope, keeping the sign; a positive slope with a positive $y$-intercept must cross the $x$-axis at a negative $x$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "line-from-two-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-112",
    domain: "algebra",
    skills: ["writing-parallel-equation", "slope-intercept-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Which of the following is an equation of the line in the $xy$-plane that passes through the point $(-3, 5)$ and is parallel to the line with equation $2x + y = 8$?",
    choices: [
      // distractor: uses the y-coordinate 5 as the intercept
      { id: "A", text: "$y = -2x + 5$" },
      // distractor: uses the perpendicular slope
      { id: "B", text: "$y = \\dfrac{1}{2}x + \\dfrac{13}{2}$" },
      { id: "C", text: "$y = -2x - 1$" },
      // distractor: reads the slope as +2 from the coefficient without solving for y
      { id: "D", text: "$y = 2x + 11$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $2x + y = 8$ is $y = -2x + 8$, slope $-2$. Parallel lines share the slope: $5 = -2(-3) + b \\Rightarrow b = -1$, so $y = -2x - 1$.\n\n**The Full Solution:**\nStep 1: Solve the given equation for $y$: $y = -2x + 8$. Its slope is $-2$, and a parallel line has the same slope.\nStep 2: Write $y = -2x + b$ and substitute $(-3, 5)$: $5 = -2(-3) + b = 6 + b$, so $b = -1$.\nStep 3: The line is $y = -2x - 1$. Check: at $x = -3$, $y = 6 - 1 = 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -2x + 5$): has the right slope but uses the point's $y$-coordinate as the intercept; that line passes through $(0, 5)$, not $(-3, 5)$.\n* Choice B ($y = \\frac{1}{2}x + \\frac{13}{2}$): uses the perpendicular slope $\\frac{1}{2}$ instead of the parallel slope.\n* Choice D ($y = 2x + 11$): reads the slope as $+2$ from the coefficient of $x$ without solving for $y$ first.\n\n**Test Day Takeaway:** Convert the given line to slope-intercept form before reading its slope, reuse that slope for a parallel line, and solve for $b$ with the given point.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "line-from-two-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-113",
    domain: "algebra",
    skills: ["writing-perpendicular-equation", "function-evaluation"],
    difficulty: "hard",
    type: "fill-in",
    question: "In the $xy$-plane, line $m$ passes through the point $(6, -1)$ and is perpendicular to the line with equation $3x - 2y = 10$. What is the $y$-coordinate of the point on line $m$ whose $x$-coordinate is $15$?",
    correctAnswer: "-7",
    explanation: "**SAT Pattern: Line from Two Points**\n\n**The correct answer is $-7$.**\n\n**The Fast Way (~20s):** $3x - 2y = 10$ has slope $\\frac{3}{2}$, so line $m$ has slope $-\\frac{2}{3}$. From $(6, -1)$, a run of $9$ to $x = 15$ changes $y$ by $-\\frac{2}{3}(9) = -6$: $y = -1 - 6 = -7$.\n\n**The Full Solution:**\nStep 1: Solve for $y$: $-2y = -3x + 10 \\Rightarrow y = \\frac{3}{2}x - 5$. The slope is $\\frac{3}{2}$.\nStep 2: Perpendicular slopes are negative reciprocals, so line $m$ has slope $-\\frac{2}{3}$. Point-slope form: $y + 1 = -\\frac{2}{3}(x - 6)$.\nStep 3: Substitute $x = 15$: $y + 1 = -\\frac{2}{3}(9) = -6$, so $y = -7$. Check: the slope from $(6, -1)$ to $(15, -7)$ is $\\frac{-6}{9} = -\\frac{2}{3}$, and $\\frac{3}{2} \\cdot \\left(-\\frac{2}{3}\\right) = -1$. $\\checkmark$\n\n**Common Mistakes:** Using slope $-\\frac{3}{2}$ (negating without reciprocating), which gives $y = -14.5$; using $\\frac{2}{3}$ (reciprocating without negating), which gives $y = 5$; reading the slope of $3x - 2y = 10$ as $3$ or $-\\frac{3}{2}$ without solving for $y$.\n\n**Test Day Takeaway:** Get the original slope from slope-intercept form, flip and negate it for the perpendicular, then use point-slope form and the run to the target $x$-coordinate.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "line-from-two-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-114",
    domain: "algebra",
    skills: ["slope-from-points", "function-evaluation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The linear function $h$ is defined for all real numbers $x$. The table shows the value of $h(x)$ for two values of $x$. What is the value of $h(12) - h(1)$?",
    diagram: { type: "dataTable", params: { headers: ["x", "h(x)"], rows: [["-3", "14"], ["5", "-2"]] } },
    choices: [
      // distractor: uses 12 + 1 = 13 as the run
      { id: "A", text: "$-26$" },
      { id: "B", text: "$-22$" },
      // distractor: subtracts the inputs without applying the slope
      { id: "C", text: "$11$" },
      // distractor: slope sign error, +2
      { id: "D", text: "$22$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Slope $= \\frac{-2 - 14}{5 - (-3)} = \\frac{-16}{8} = -2$. For a linear function, $h(12) - h(1) = \\text{slope} \\times (12 - 1) = -2(11) = -22$. No need for the intercept.\n\n**The Full Solution:**\nStep 1: Slope from the table rows: $m = \\frac{-2 - 14}{5 - (-3)} = \\frac{-16}{8} = -2$.\nStep 2: For any linear function, the change in output equals the slope times the change in input: $h(12) - h(1) = -2(12 - 1) = -22$.\nStep 3: Check by building the rule: $h(x) = -2x + b$ with $h(5) = -2$ gives $b = 8$, so $h(12) = -16$ and $h(1) = 6$; $-16 - 6 = -22$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-26$): uses $12 + 1 = 13$ as the run instead of $12 - 1 = 11$.\n* Choice C ($11$): subtracts the inputs but never multiplies by the slope.\n* Choice D ($22$): drops the negative on the slope; the outputs decrease as $x$ increases.\n\n**Test Day Takeaway:** For a linear function, a difference of outputs is slope times the difference of inputs; compute the slope from the table and skip the intercept entirely.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "line-from-two-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },

  // === SYSTEM OF EQUATIONS — ELIMINATION (8 questions) — Phase 2 batch 4 ===
  // 8x in 12 tests. Covers: direct elimination, multiply-then-eliminate,
  // find specific variable, find combination of variables, multiply both eqs.
  // SAT Pattern uses em-dash: kebab matches 'system-of-equations-elimination'.
  {
    id: "bank-alg-115",
    domain: "algebra",
    skills: ["elimination-method", "setting-up-systems"],
    difficulty: "easy",
    type: "fill-in",
    question: "The solution to the system of equations $5x + 2y = 31$ and $3x - 2y = 17$ is $(x, y)$. What is the value of $x$?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~10s):** The $y$-terms are opposites, so add the equations: $8x = 48$, giving $x = 6$.\n\n**The Full Solution:**\nStep 1: The coefficients of $y$ are $+2$ and $-2$, so adding the equations eliminates $y$.\nStep 2: $(5x + 2y) + (3x - 2y) = 31 + 17$, so $8x = 48$ and $x = 6$.\nStep 3: Check by finding $y$: $5(6) + 2y = 31 \\Rightarrow 2y = 1 \\Rightarrow y = 0.5$; then $3(6) - 2(0.5) = 18 - 1 = 17$. $\\checkmark$\n\n**Common Mistakes:** Subtracting the equations instead of adding, which gives $2x + 4y = 14$ and does not eliminate anything; adding the left sides but subtracting the right sides to get $8x = 14$; reporting $y$ instead of $x$.\n\n**Test Day Takeaway:** When one variable's coefficients are opposites, add the equations to cancel it; add both sides consistently and solve for the remaining variable.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "system-of-equations-elimination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-116",
    domain: "algebra",
    skills: ["elimination-method", "setting-up-systems"],
    difficulty: "easy",
    type: "fill-in",
    question: "The system of equations $4x + 7y = 43$ and $4x - 3y = 3$ has solution $(x, y)$. What is the value of $y$?",
    correctAnswer: "4",
    explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~10s):** The $x$-terms match, so subtract the second equation from the first: $10y = 40$, giving $y = 4$.\n\n**The Full Solution:**\nStep 1: Both equations have $4x$, so subtracting one from the other eliminates $x$.\nStep 2: $(4x + 7y) - (4x - 3y) = 43 - 3$, so $7y + 3y = 40$, or $10y = 40$, and $y = 4$.\nStep 3: Check by finding $x$: $4x + 28 = 43 \\Rightarrow x = 3.75$; then $4(3.75) - 3(4) = 15 - 12 = 3$. $\\checkmark$\n\n**Common Mistakes:** Subtracting $-3y$ as if it were $+3y$, getting $4y = 40$ and $y = 10$; adding the equations, which leaves $8x + 4y = 46$ with two unknowns; reporting $x = 3.75$ instead of $y$.\n\n**Test Day Takeaway:** When a variable has identical coefficients, subtract the equations, and distribute the subtraction across every term of the second equation, especially a negative one.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "system-of-equations-elimination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-117",
    domain: "algebra",
    skills: ["elimination-method", "setting-up-systems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The solution to the system of equations $2x + 5y = 1$ and $3x - 4y = 13$ is $(x, y)$. What is the value of $x$?",
    choices: [
      // distractor: uses y = 1 from a sign slip, then 2x + 5 = 1
      { id: "A", text: "$-2$" },
      // distractor: reports y instead of x
      { id: "B", text: "$-1$" },
      { id: "C", text: "$3$" },
      // distractor: stops at 2x = 6
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Multiply the first equation by $3$ and the second by $2$: $6x + 15y = 3$ and $6x - 8y = 26$. Subtract: $23y = -23$, so $y = -1$; then $2x - 5 = 1$ gives $x = 3$.\n\n**The Full Solution:**\nStep 1: To eliminate $x$, match its coefficients: $3(2x + 5y = 1)$ gives $6x + 15y = 3$; $2(3x - 4y = 13)$ gives $6x - 8y = 26$.\nStep 2: Subtract the second from the first: $15y - (-8y) = 3 - 26$, so $23y = -23$ and $y = -1$.\nStep 3: Substitute into $2x + 5y = 1$: $2x - 5 = 1$, so $2x = 6$ and $x = 3$. Check: $3(3) - 4(-1) = 9 + 4 = 13$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): a sign slip gives $y = 1$, and then $2x + 5 = 1$ yields $x = -2$.\n* Choice B ($-1$): reports $y$ instead of $x$.\n* Choice D ($6$): stops at $2x = 6$ without dividing.\n\n**Test Day Takeaway:** Scale both equations so one variable's coefficients match, subtract carefully (a minus applied to a negative becomes a plus), then back-substitute and reread which variable is asked for.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "system-of-equations-elimination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-118",
    domain: "algebra",
    skills: ["elimination-method", "setting-up-systems"],
    difficulty: "medium",
    type: "fill-in",
    question: "The solution to the system of equations $3x + 4y = 34$ and $5x - 6y = -32$ is $(x, y)$. What is the value of $y$?",
    correctAnswer: "7",
    explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~20s):** Multiply the first equation by $3$ and the second by $2$: $9x + 12y = 102$ and $10x - 12y = -64$. Add: $19x = 38$, so $x = 2$, and then $6 + 4y = 34$ gives $y = 7$.\n\n**The Full Solution:**\nStep 1: To eliminate $y$, make its coefficients opposites: $3(3x + 4y = 34)$ gives $9x + 12y = 102$, and $2(5x - 6y = -32)$ gives $10x - 12y = -64$.\nStep 2: Add the equations: $19x = 38$, so $x = 2$.\nStep 3: Substitute into $3x + 4y = 34$: $6 + 4y = 34$, so $4y = 28$ and $y = 7$. Check: $5(2) - 6(7) = 10 - 42 = -32$. $\\checkmark$\n\n**Common Mistakes:** Reporting $x = 2$ instead of $y$; multiplying the constant $-32$ by $2$ as $-16$ or forgetting to scale it; subtracting the scaled equations instead of adding, which leaves $-x + 24y = 166$.\n\n**Test Day Takeaway:** Scale each equation by the other's coefficient of the variable you are eliminating (including the constants), add when the signs are opposite, and back-substitute for the variable actually requested.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "system-of-equations-elimination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-119",
    domain: "algebra",
    skills: ["elimination-method", "setting-up-systems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The solution to the system of equations $3x - y = 7$ and $x + 2y = 14$ is $(x, y)$. What is the value of $4x + y$?",
    choices: [
      // distractor: reports x
      { id: "A", text: "$4$" },
      // distractor: reports y
      { id: "B", text: "$5$" },
      // distractor: reports x + y
      { id: "C", text: "$9$" },
      { id: "D", text: "$21$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** Add the two equations: $(3x - y) + (x + 2y) = 7 + 14$, which is exactly $4x + y = 21$.\n\n**The Full Solution:**\nStep 1: Notice the target $4x + y$ is the sum of the left sides: $3x + x = 4x$ and $-y + 2y = y$.\nStep 2: Add the equations: $4x + y = 7 + 14 = 21$.\nStep 3: Check by solving: from the first equation $y = 3x - 7$; substituting, $x + 6x - 14 = 14$, so $x = 4$ and $y = 5$. Then $4(4) + 5 = 21$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): reports $x$ after solving the system, not the requested expression.\n* Choice B ($5$): reports $y$.\n* Choice C ($9$): reports $x + y$ instead of $4x + y$.\n\n**Test Day Takeaway:** Before solving a system, compare the requested expression to the sum or difference of the equations; often one combination gives the answer in a single step.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "system-of-equations-elimination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-120",
    domain: "algebra",
    skills: ["elimination-method"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The system of equations $7x - 3y = 41$ and $2x + 3y = 4$ has solution $(x, y)$. What is the value of $y$?",
    choices: [
      // distractor: reports 3y
      { id: "A", text: "$-6$" },
      { id: "B", text: "$-2$" },
      // distractor: sign slip, 3y = 6
      { id: "C", text: "$2$" },
      // distractor: reports x
      { id: "D", text: "$5$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The $y$-terms are opposites, so add: $9x = 45$, $x = 5$. Then $2(5) + 3y = 4$ gives $3y = -6$ and $y = -2$.\n\n**The Full Solution:**\nStep 1: The coefficients of $y$ are $-3$ and $+3$, so adding the equations eliminates $y$: $9x = 45$, giving $x = 5$.\nStep 2: Substitute $x = 5$ into $2x + 3y = 4$: $10 + 3y = 4$, so $3y = -6$.\nStep 3: Divide by $3$: $y = -2$. Check in the first equation: $7(5) - 3(-2) = 35 + 6 = 41$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): stops at $3y = -6$ and reports that instead of $y$.\n* Choice C ($2$): a sign slip, computing $4 - 10$ as $6$ instead of $-6$.\n* Choice D ($5$): reports $x$ instead of $y$.\n\n**Test Day Takeaway:** After eliminating one variable, substitute back and finish the arithmetic on the other, then confirm which variable the question wants before answering.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "system-of-equations-elimination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-121",
    domain: "algebra",
    skills: ["elimination-method", "setting-up-systems"],
    difficulty: "hard",
    type: "fill-in",
    question: "A laboratory technician combines $x$ milliliters of a $20\\%$ acid solution with $y$ milliliters of a $50\\%$ acid solution to make $600$ milliliters of a $30\\%$ acid solution. What is the value of $y$?",
    correctAnswer: "200",
    explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**The correct answer is $200$.**\n\n**The Fast Way (~20s):** Total volume gives $x + y = 600$; total acid gives $0.2x + 0.5y = 0.3(600) = 180$. Multiply the first equation by $0.2$ and subtract: $0.3y = 60$, so $y = 200$.\n\n**The Full Solution:**\nStep 1: Write the two equations. Volume: $x + y = 600$. Acid content: $0.20x + 0.50y = 0.30(600)$, which simplifies to $0.2x + 0.5y = 180$.\nStep 2: Eliminate $x$. Multiply the volume equation by $0.2$: $0.2x + 0.2y = 120$. Subtract this from the acid equation: $0.3y = 60$, so $y = 200$.\nStep 3: Check. Then $x = 400$, and $0.2(400) + 0.5(200) = 80 + 100 = 180$, which is $30\\%$ of $600$. $\\checkmark$\n\n**Common Mistakes:** Reporting $x = 400$ instead of $y$; setting the acid equation equal to $30$ (a percent) instead of $180$ milliliters; adding the equations instead of subtracting after scaling, which does not eliminate a variable.\n\n**Test Day Takeaway:** A mixture problem is always two equations: one for total amount, one for total \"stuff\" (acid, money, weight). Scale one equation so a coefficient matches, then subtract.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "system-of-equations-elimination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-122",
    domain: "algebra",
    skills: ["elimination-method", "combining-like-terms"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$3x + 7y = 16$\n$5x - 2y = 13$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $8x + 5y$?",
    choices: [
      // distractor: subtracts the first equation from the second (2x - 9y = -3) and reports that constant
      { id: "A", text: "$-3$" },
      // distractor: reports y instead of the requested expression
      { id: "B", text: "$1$" },
      // distractor: reports x instead of the requested expression
      { id: "C", text: "$3$" },
      { id: "D", text: "$29$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: System of Equations — Elimination**\n\n**Choice D is correct.**\n\n**The Fast Way (~8s):** Add the two equations as written: $(3x + 5x) + (7y - 2y) = 16 + 13$, which is exactly $8x + 5y = 29$. No solving required.\n\n**The Full Solution:**\nStep 1: Notice the target $8x + 5y$ has coefficients $3 + 5$ and $7 + (-2)$, the column sums of the system. Adding the equations gives $8x + 5y = 29$ directly.\nStep 2: Confirm by solving. Multiply the first equation by $2$ and the second by $7$: $6x + 14y = 32$ and $35x - 14y = 91$. Adding eliminates $y$: $41x = 123$, so $x = 3$. Then $3(3) + 7y = 16$ gives $y = 1$.\nStep 3: Check: $8(3) + 5(1) = 24 + 5 = 29$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): subtracts the first equation from the second, producing $2x - 9y = -3$, and reports that constant.\n* Choice B ($1$): solves the system correctly but reports $y$ instead of $8x + 5y$.\n* Choice C ($3$): solves the system correctly but reports $x$ instead of $8x + 5y$.\n\n**Test Day Takeaway:** When a system asks for an expression rather than $x$ or $y$, compare its coefficients to the column sums or differences of the equations first. One addition can replace the whole solve.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "system-of-equations-elimination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 5/4: system-equivalence-check (8 items) =====
  // Pattern: equation/system has infinitely many solutions ⟺ identical after
  // simplification (or proportional coefficients AND constants).
  // 7 test occurrences across PT1, PT5, PT6, PT9, PT10, PT11, PT12.
  // SAT Pattern title (verbatim): 'System Equivalence Check' →
  // kebab 'system-equivalence-check'.
  {
    id: "bank-alg-123",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$5(2x + 3) - 4 = 10x + c$\n\nIn the given equation, $c$ is a constant. The equation has infinitely many solutions. What is the value of $c$?",
    choices: [
      // distractor: distributes the 5 to 2x only (10x + 3 - 4)
      { id: "A", text: "$-1$" },
      { id: "B", text: "$11$" },
      // distractor: distributes correctly but drops the -4
      { id: "C", text: "$15$" },
      // distractor: adds 4 instead of subtracting it
      { id: "D", text: "$19$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice B is correct.**\n\n**The Fast Way (~8s):** Simplify the left side: $10x + 15 - 4 = 10x + 11$. Infinitely many solutions means both sides are identical, so $c = 11$.\n\n**The Full Solution:**\nStep 1: Distribute on the left: $5(2x + 3) = 10x + 15$, so the left side is $10x + 15 - 4 = 10x + 11$.\nStep 2: The equation is now $10x + 11 = 10x + c$. Subtracting $10x$ from both sides leaves $11 = c$. Because the $x$ terms cancel, the equation is true for every $x$ exactly when the constants match.\nStep 3: Check with $c = 11$ and any $x$, say $x = 1$: left side $5(5) - 4 = 21$; right side $10 + 11 = 21$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-1$): distributes the $5$ to $2x$ but not to $3$, getting $10x + 3 - 4$.\n* Choice C ($15$): distributes correctly but forgets the $-4$ on the left side.\n* Choice D ($19$): treats the $-4$ as $+4$, getting $15 + 4$.\n\n**Test Day Takeaway:** \"Infinitely many solutions\" means the two sides are the same expression. Simplify fully, match the $x$ coefficients (already equal here), then match the constants.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-equivalence-check",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-124",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "easy",
    type: "fill-in",
    question: "$3(4x - 5) + 9 = 12x + d$\n\nIn the given equation, $d$ is a constant. If the equation has infinitely many solutions, what is the value of $d$?",
    correctAnswer: "-6",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**The correct answer is $-6$.**\n\n**The Fast Way (~8s):** Left side: $12x - 15 + 9 = 12x - 6$. For every $x$ to work, the right side must be the same expression, so $d = -6$.\n\n**The Full Solution:**\nStep 1: Distribute: $3(4x - 5) = 12x - 15$. The left side becomes $12x - 15 + 9 = 12x - 6$.\nStep 2: The equation reads $12x - 6 = 12x + d$. The $x$ terms already match, so the equation holds for all $x$ only if the constants match: $d = -6$.\nStep 3: Check with $x = 0$: left side $3(-5) + 9 = -6$; right side $0 + d = -6$. $\\checkmark$\n\n**Common Mistakes:** Entering $6$ (dropping the sign); entering $-15$ (forgetting to add the $9$); entering $-24$ (subtracting $9$ instead of adding it).\n\n**Test Day Takeaway:** Simplify one side completely before comparing. If the variable terms already agree, the constant term on the other side is the answer, sign included.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-equivalence-check",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-125",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$2x - 7y = 5$\n$8x - 28y = k$\n\nIn the given system of equations, $k$ is a constant. If the system has infinitely many solutions, what is the value of $k$?",
    choices: [
      // distractor: copies the constant without scaling
      { id: "A", text: "$5$" },
      // distractor: scales by 2 instead of 4
      { id: "B", text: "$10$" },
      { id: "C", text: "$20$" },
      // distractor: multiplies the constant by the coefficient 8 instead of the scale factor 4
      { id: "D", text: "$40$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice C is correct.**\n\n**The Fast Way (~8s):** The second equation's coefficients are $4$ times the first's ($8 = 4 \\cdot 2$, $-28 = 4 \\cdot (-7)$). For the equations to be the same line, the constant must scale by $4$ too: $k = 4 \\cdot 5 = 20$.\n\n**The Full Solution:**\nStep 1: Two linear equations have infinitely many common solutions only when they describe the same line, meaning one equation is a constant multiple of the other.\nStep 2: Compare coefficients: $\\frac{8}{2} = 4$ and $\\frac{-28}{-7} = 4$, so the multiplier is $4$.\nStep 3: Apply the same multiplier to the constant: $k = 4(5) = 20$. Check: $4(2x - 7y) = 8x - 28y$ and $4(5) = 20$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): copies the constant from the first equation without scaling it.\n* Choice B ($10$): scales by $2$, perhaps from the $2x$ coefficient rather than the ratio $8 \\div 2$.\n* Choice D ($40$): multiplies $5$ by $8$, the new coefficient, instead of by the scale factor $4$.\n\n**Test Day Takeaway:** For \"infinitely many solutions,\" find the multiplier from one pair of coefficients, confirm it with the other pair, then apply it to the constant.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-equivalence-check",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-126",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "medium",
    type: "fill-in",
    question: "$6x + 9y = -12$\n$-2x - 3y = c$\n\nIn the given system of equations, $c$ is a constant. If the system has infinitely many solutions, what is the value of $c$?",
    correctAnswer: "4",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~8s):** Multiply the second equation by $-3$: $6x + 9y = -3c$. Matching the first equation requires $-3c = -12$, so $c = 4$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the two equations represent the same line, so one is a multiple of the other.\nStep 2: The multiplier from the second equation to the first is $\\frac{6}{-2} = -3$ (check: $-3 \\cdot (-3) = 9$ matches the $y$ coefficient).\nStep 3: The constants must satisfy $-3c = -12$, so $c = 4$. Check: $-3(-2x - 3y) = 6x + 9y$ and $-3(4) = -12$. $\\checkmark$\n\n**Common Mistakes:** Entering $-4$ (dividing $-12$ by $3$ instead of $-3$); entering $36$ (multiplying $-12$ by $-3$ instead of dividing); entering $-12$ (copying the constant without scaling).\n\n**Test Day Takeaway:** The multiplier can be negative. Find it from a coefficient ratio, then divide the known constant by that same multiplier, keeping the sign.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-equivalence-check",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-127",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$8(x + 1) - 2 = 2(4x + k)$\n\nIn the given equation, $k$ is a constant. For what value of $k$ does the equation have infinitely many solutions?",
    choices: [
      { id: "A", text: "$3$" },
      // distractor: ignores the -2 and computes 8 ÷ 2
      { id: "B", text: "$4$" },
      // distractor: treats -2 as +2, getting 10 ÷ 2
      { id: "C", text: "$5$" },
      // distractor: matches 2k to 6 but forgets to divide by 2
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Left side: $8x + 8 - 2 = 8x + 6$. Right side: $8x + 2k$. The $x$ terms already match, so set the constants equal: $2k = 6$, giving $k = 3$.\n\n**The Full Solution:**\nStep 1: Expand both sides. Left: $8(x + 1) - 2 = 8x + 6$. Right: $2(4x + k) = 8x + 2k$.\nStep 2: The equation $8x + 6 = 8x + 2k$ holds for every $x$ only when $6 = 2k$, so $k = 3$.\nStep 3: Check with $k = 3$ and $x = 2$: left side $8(3) - 2 = 22$; right side $2(8 + 3) = 22$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): ignores the $-2$ and sets $2k = 8$.\n* Choice C ($5$): treats the $-2$ as $+2$, getting $2k = 10$.\n* Choice D ($6$): correctly finds $2k = 6$ but reports $6$ instead of dividing by $2$.\n\n**Test Day Takeaway:** Expand both sides completely before comparing. The constant on the right is $2k$, not $k$, so finish the last division.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-equivalence-check",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-128",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "medium",
    type: "fill-in",
    question: "$\\frac{2}{5}(10x + 35) = 4x + c$\n\nIn the given equation, $c$ is a constant. The equation has infinitely many solutions. What is the value of $c$?",
    correctAnswer: "14",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**The correct answer is $14$.**\n\n**The Fast Way (~8s):** Distribute $\\frac{2}{5}$: $\\frac{2}{5}(10x) = 4x$ and $\\frac{2}{5}(35) = 14$. So the left side is $4x + 14$, and $c = 14$.\n\n**The Full Solution:**\nStep 1: Multiply each term inside the parentheses by $\\frac{2}{5}$: $\\frac{2}{5} \\cdot 10x = 4x$ and $\\frac{2}{5} \\cdot 35 = 14$.\nStep 2: The equation becomes $4x + 14 = 4x + c$. The $x$ terms already agree, so infinitely many solutions requires $c = 14$.\nStep 3: Check with $x = 1$: left side $\\frac{2}{5}(45) = 18$; right side $4 + 14 = 18$. $\\checkmark$\n\n**Common Mistakes:** Entering $35$ (forgetting to multiply the constant by $\\frac{2}{5}$); entering $87.5$ (dividing $35$ by $\\frac{2}{5}$ instead of multiplying); entering $0$ (assuming the constant must vanish).\n\n**Test Day Takeaway:** A fraction in front of parentheses multiplies every term inside. Once the variable terms match, the leftover constant is the answer.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-equivalence-check",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-129",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$3x - 5y = 8$\n$ax + by = -24$\n\nIn the given system of equations, $a$ and $b$ are constants. If the system has infinitely many solutions, what is the value of $a - b$?",
    choices: [
      { id: "A", text: "$-24$" },
      // distractor: uses the original coefficients 3 - 5 without scaling
      { id: "B", text: "$-2$" },
      // distractor: computes a + b instead of a - b
      { id: "C", text: "$6$" },
      // distractor: uses multiplier +3 instead of -3 (a = 9, b = -15)
      { id: "D", text: "$24$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice A is correct.**\n\n**The Fast Way (~12s):** The constants force the multiplier: $\\frac{-24}{8} = -3$. So $a = -3(3) = -9$ and $b = -3(-5) = 15$, giving $a - b = -9 - 15 = -24$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the second equation is a constant multiple of the first. The only known pair is the constants, so the multiplier is $\\frac{-24}{8} = -3$.\nStep 2: Scale the first equation by $-3$: $-9x + 15y = -24$. Therefore $a = -9$ and $b = 15$.\nStep 3: Compute $a - b = -9 - 15 = -24$. Check: $-3(3x - 5y) = -9x + 15y$ and $-3(8) = -24$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-2$): subtracts the original coefficients, $3 - 5$, without applying the multiplier.\n* Choice C ($6$): finds $a$ and $b$ correctly but adds them, $-9 + 15$, instead of subtracting.\n* Choice D ($24$): uses a multiplier of $+3$, getting $a = 9$ and $b = -15$; the sign of $-24 \\div 8$ is lost.\n\n**Test Day Takeaway:** When both coefficients are unknown, the constants determine the multiplier. Watch its sign, then apply it to each coefficient before combining.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "system-equivalence-check",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-130",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "hard",
    type: "fill-in",
    question: "$p(2x - 5) + 9 = 6x + q$\n\nIn the given equation, $p$ and $q$ are constants. If the equation has infinitely many solutions, what is the value of $pq$?",
    correctAnswer: "-18",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**The correct answer is $-18$.**\n\n**The Fast Way (~12s):** Expand: $2px - 5p + 9 = 6x + q$. Match $x$ coefficients: $2p = 6$, so $p = 3$. Match constants: $-5(3) + 9 = -6 = q$. Then $pq = 3(-6) = -18$.\n\n**The Full Solution:**\nStep 1: Distribute $p$: the left side is $2px - 5p + 9$.\nStep 2: For the equation to hold for every $x$, the $x$ coefficients must match: $2p = 6$, so $p = 3$.\nStep 3: The constants must also match: $-5p + 9 = q$, so $q = -15 + 9 = -6$. Then $pq = (3)(-6) = -18$. Check with $x = 1$: left side $3(-3) + 9 = 0$; right side $6 - 6 = 0$. $\\checkmark$\n\n**Common Mistakes:** Entering $18$ (dropping the sign of $q$); entering $-3$ (computing $p + q$ instead of $pq$); entering $-45$ (forgetting the $+9$ so that $q = -15$).\n\n**Test Day Takeaway:** Two unknown constants means two matches: variable coefficients first (that fixes $p$), then constants (that fixes $q$). Only then combine them as the question asks.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "system-equivalence-check",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 6/1: function-evaluation (8 items) =====
  // Pattern: evaluate a function at a given input. Spans linear, quadratic, and
  // exponential function definitions. 15 test occurrences (highest-frequency
  // uncovered pattern after batches 1-5). SAT Pattern title (verbatim):
  // 'Function Evaluation' → kebab 'function-evaluation'.
  {
    id: "bank-alg-131",
    domain: "algebra",
    skills: ["function-evaluation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = 6x - 9$. What is the value of $f(5)$?",
    choices: [
      // distractor: computes 6(5 - 9) instead of 6(5) - 9
      { id: "A", text: "$-24$" },
      // distractor: adds instead of multiplies: 6 + 5 - 9
      { id: "B", text: "$2$" },
      { id: "C", text: "$21$" },
      // distractor: adds 9 instead of subtracting
      { id: "D", text: "$39$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Replace $x$ with $5$: $6(5) - 9 = 30 - 9 = 21$.\n\n**The Full Solution:**\nStep 1: $f(5)$ means \"the output of $f$ when the input is $5$.\" Substitute $5$ for every $x$ in the rule.\nStep 2: $f(5) = 6(5) - 9$. Multiply first: $6(5) = 30$.\nStep 3: Subtract: $30 - 9 = 21$. Check the order of operations: multiplication before subtraction. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-24$): subtracts inside first, computing $6(5 - 9) = 6(-4)$.\n* Choice B ($2$): adds $6 + 5$ instead of multiplying, then subtracts $9$.\n* Choice D ($39$): adds $9$ instead of subtracting it.\n\n**Test Day Takeaway:** $f(5)$ is a substitution, not an equation to solve. Put the input in parentheses where $x$ was, then follow the order of operations.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-evaluation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-132",
    domain: "algebra",
    skills: ["function-evaluation"],
    difficulty: "easy",
    type: "fill-in",
    question: "The graph of $y = h(x)$ is shown in the $xy$-plane, where $h$ is a linear function. What is the value of $h(4)$?",
    diagram: { type: "linearGraph", params: { slope: 2, yIntercept: -3, xRange: [-4, 6], yRange: [-6, 8], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, -3], [3, 3]], label: "y = h(x)" } },
    correctAnswer: "5",
    explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~8s):** $h(4)$ is the $y$-value on the line where $x = 4$. From the marked points $(0, -3)$ and $(3, 3)$ the line rises $2$ for each $1$ to the right, so at $x = 4$ it reaches $3 + 2 = 5$.\n\n**The Full Solution:**\nStep 1: Read two points off the graph: $(0, -3)$ and $(3, 3)$. Slope $= \\frac{3 - (-3)}{3 - 0} = \\frac{6}{3} = 2$, and the $y$-intercept is $-3$, so $h(x) = 2x - 3$.\nStep 2: Evaluate: $h(4) = 2(4) - 3 = 8 - 3 = 5$.\nStep 3: Check on the graph: one unit to the right of $(3, 3)$, the line is at height $5$. $\\checkmark$\n\n**Common Mistakes:** Entering $-3$ (the $y$-intercept, the value at $x = 0$); entering $3.5$ (solving $h(x) = 4$ instead of finding $h(4)$); entering $8$ (using the slope times $4$ without the intercept).\n\n**Test Day Takeaway:** $h(4)$ asks for the height of the graph at $x = 4$. Either read it directly or write the rule from two clean points and substitute.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-evaluation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-133",
    domain: "algebra",
    skills: ["function-evaluation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table gives four values of $x$ and the corresponding values of $g(x)$ for the linear function $g$. What is the value of $g(12)$?",
    diagram: { type: "dataTable", params: { headers: ["x", "g(x)"], rows: [["1", "4"], ["3", "10"], ["5", "16"], ["7", "22"]] } },
    choices: [
      // distractor: extends the table by steps of 6 but stops at x = 11
      { id: "A", text: "$34$" },
      // distractor: uses g(x) = 3x, dropping the constant term
      { id: "B", text: "$36$" },
      { id: "C", text: "$37$" },
      // distractor: uses the first table output, 4, as the constant: 3(12) + 4
      { id: "D", text: "$40$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice C is correct.**\n\n**The Fast Way (~12s):** Each step of $2$ in $x$ adds $6$ to $g(x)$, so the slope is $3$. From $(1, 4)$: $g(x) = 3x + 1$. Then $g(12) = 36 + 1 = 37$.\n\n**The Full Solution:**\nStep 1: Find the rate of change from two rows: $\\frac{10 - 4}{3 - 1} = \\frac{6}{2} = 3$. The other rows agree, confirming $g$ is linear with slope $3$.\nStep 2: Find the constant using $(1, 4)$: $4 = 3(1) + b$, so $b = 1$ and $g(x) = 3x + 1$.\nStep 3: Evaluate: $g(12) = 3(12) + 1 = 37$. Check against the table: $g(7) = 22$, and five more steps of $3$ give $22 + 15 = 37$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($34$): continues the table in steps of $6$ ($28$, $34$) but stops at $x = 11$, one step short of $12$.\n* Choice B ($36$): uses $g(x) = 3x$, dropping the constant $1$.\n* Choice D ($40$): uses the first output, $4$, as the $y$-intercept, computing $3(12) + 4$.\n\n**Test Day Takeaway:** A linear table hides a rule. Get the slope from any two rows, the constant from one row, then evaluate. Confirm with a second row before trusting the rule.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-evaluation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-134",
    domain: "advanced-math",
    skills: ["function-evaluation"],
    difficulty: "medium",
    type: "fill-in",
    question: "The function $f$ is defined by $f(x) = 4x^2 - 5x + 1$. What is the value of $f(-2)$?",
    correctAnswer: "27",
    explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $27$.**\n\n**The Fast Way (~8s):** Substitute $-2$ in parentheses: $4(-2)^2 - 5(-2) + 1 = 4(4) + 10 + 1 = 27$.\n\n**The Full Solution:**\nStep 1: Replace every $x$ with $(-2)$, keeping the parentheses: $f(-2) = 4(-2)^2 - 5(-2) + 1$.\nStep 2: Evaluate the power first: $(-2)^2 = 4$, so the first term is $4(4) = 16$. The middle term is $-5(-2) = +10$.\nStep 3: Add: $16 + 10 + 1 = 27$. Sign check: a negative squared is positive, and a negative times a negative is positive. $\\checkmark$\n\n**Common Mistakes:** Entering $7$ (computing $-5(-2)$ as $-10$); entering $-5$ (treating $4(-2)^2$ as $-16$); entering $-1$ (making both sign errors at once).\n\n**Test Day Takeaway:** Wrap a negative input in parentheses before substituting. The two places sign errors hide are the square and the product with a negative coefficient.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-evaluation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-135",
    domain: "algebra",
    skills: ["function-evaluation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $g$ is defined by $g(x) = 7x + 4$. What is the value of $g(6) - g(2)$?",
    choices: [
      // distractor: subtracts the inputs, 6 - 2, without applying g
      { id: "A", text: "$4$" },
      { id: "B", text: "$28$" },
      // distractor: adds the constant 4 twice instead of letting it cancel: 42 - 14 + 8
      { id: "C", text: "$36$" },
      // distractor: adds g(6) + g(2) instead of subtracting
      { id: "D", text: "$64$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~8s):** For a linear function, $g(6) - g(2)$ is the slope times the change in input: $7(6 - 2) = 28$. The constant $4$ cancels.\n\n**The Full Solution:**\nStep 1: Evaluate each output. $g(6) = 7(6) + 4 = 46$ and $g(2) = 7(2) + 4 = 18$.\nStep 2: Subtract: $46 - 18 = 28$.\nStep 3: Check with the shortcut: $g(6) - g(2) = (42 + 4) - (14 + 4) = 42 - 14 = 28$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): subtracts the inputs, $6 - 2$, and never applies the function.\n* Choice C ($36$): keeps both $+4$ constants instead of letting them cancel, computing $42 - 14 + 8$.\n* Choice D ($64$): adds $g(6) + g(2) = 46 + 18$ instead of subtracting.\n\n**Test Day Takeaway:** A difference of two outputs of a linear function equals slope times the difference of inputs. Compute both outputs if unsure, but expect the constant to disappear.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-evaluation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-136",
    domain: "advanced-math",
    skills: ["function-evaluation"],
    difficulty: "medium",
    type: "fill-in",
    question: "The function $f$ is defined by $f(x) = 2 \\cdot 3^{x} - 5$. What is the value of $f(4) - f(1)$?",
    correctAnswer: "156",
    explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $156$.**\n\n**The Fast Way (~10s):** $f(4) = 2(81) - 5 = 157$ and $f(1) = 2(3) - 5 = 1$, so $f(4) - f(1) = 156$. The $-5$ cancels in the subtraction.\n\n**The Full Solution:**\nStep 1: Evaluate $f(4)$. The exponent applies to $3$ only: $3^4 = 81$, so $f(4) = 2(81) - 5 = 162 - 5 = 157$.\nStep 2: Evaluate $f(1)$: $3^1 = 3$, so $f(1) = 2(3) - 5 = 1$.\nStep 3: Subtract: $157 - 1 = 156$. Check with the constants removed: $2(81) - 2(3) = 162 - 6 = 156$. $\\checkmark$\n\n**Common Mistakes:** Entering $1290$ (computing $(2 \\cdot 3)^4 = 1296$ by applying the exponent to the $2$ as well, so $f(4) = 1291$); entering $49$ (evaluating $f(3)$, as if $f(4) - f(1) = f(4 - 1)$); entering $151$ (using $f(1) = 6$, forgetting the $-5$ in the second evaluation).\n\n**Test Day Takeaway:** In $2 \\cdot 3^{x}$, only the $3$ is raised to the power. Evaluate each output separately before subtracting; a shared constant will cancel.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-evaluation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-137",
    domain: "advanced-math",
    skills: ["function-evaluation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = (3x + c)^2 - 4x$, where $c$ is a positive constant. If $f(0) = 4$, what is the value of $f(-2)$?",
    choices: [
      // distractor: sign slip on -4(-2): computes 16 - 8
      { id: "A", text: "$8$" },
      { id: "B", text: "$24$" },
      // distractor: expands (3x + 2)^2 as 9x^2 + 4, missing the middle term: 36 + 4 + 8
      { id: "C", text: "$48$" },
      // distractor: uses c = -2 despite "positive constant": (-8)^2 + 8
      { id: "D", text: "$72$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $f(0) = c^2 = 4$ gives $c = 2$ (positive). Then $f(-2) = (3(-2) + 2)^2 - 4(-2) = (-4)^2 + 8 = 16 + 8 = 24$.\n\n**The Full Solution:**\nStep 1: Use the given value to find $c$: $f(0) = (0 + c)^2 - 0 = c^2 = 4$, so $c = 2$ or $c = -2$. Since $c$ is positive, $c = 2$ and $f(x) = (3x + 2)^2 - 4x$.\nStep 2: Substitute $x = -2$: $3(-2) + 2 = -4$, so the squared term is $(-4)^2 = 16$. The second term is $-4(-2) = +8$.\nStep 3: Add: $16 + 8 = 24$. Check the signs: a negative squared is positive; negative times negative is positive. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): computes $-4(-2)$ as $-8$, getting $16 - 8$.\n* Choice C ($48$): expands $(3x + 2)^2$ as $9x^2 + 4$, dropping the middle term, and gets $36 + 4 + 8$.\n* Choice D ($72$): ignores \"positive\" and uses $c = -2$, so $(3(-2) - 2)^2 + 8 = 64 + 8$.\n\n**Test Day Takeaway:** When a function has an unknown constant, the given output pins it down first; read the sign condition before choosing a root. Then substitute with parentheses and evaluate the power before anything else.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-evaluation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-138",
    domain: "advanced-math",
    skills: ["function-evaluation"],
    difficulty: "hard",
    type: "fill-in",
    question: "The function $f$ is defined by $f(x) = k \\cdot 2^{x}$, where $k$ is a constant. If $f(3) = 56$, what is the value of $f(6)$?",
    correctAnswer: "448",
    explanation: "**SAT Pattern: Function Evaluation**\n\n**The correct answer is $448$.**\n\n**The Fast Way (~10s):** Going from $x = 3$ to $x = 6$ multiplies $2^{x}$ by $2^3 = 8$, so $f(6) = 8 \\cdot f(3) = 8(56) = 448$.\n\n**The Full Solution:**\nStep 1: Use $f(3) = 56$ to find $k$: $k \\cdot 2^3 = 8k = 56$, so $k = 7$.\nStep 2: Write the rule: $f(x) = 7 \\cdot 2^{x}$.\nStep 3: Evaluate: $f(6) = 7 \\cdot 2^6 = 7 \\cdot 64 = 448$. Check via the shortcut: $56 \\cdot 8 = 448$. $\\checkmark$\n\n**Common Mistakes:** Entering $112$ (assuming doubling the input doubles the output); entering $84$ (finding $k = 7$ but then treating $2^{6}$ as $2 \\cdot 6 = 12$, computing $7 \\cdot 12$); entering $64$ (reporting $2^6$ and forgetting $k$).\n\n**Test Day Takeaway:** For $k \\cdot b^{x}$, one known output determines $k$. Or skip $k$ entirely: each step of $+1$ in $x$ multiplies the output by $b$, so three steps multiply by $b^3$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-evaluation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 6/2: interpret-slope-in-context (7 items) =====
  // Bank already has bank-alg-009 for this pattern (1 item). Adding 7 more
  // for total of 8 (Tier 1 threshold).
  // Pattern: real-world linear function f(t) = b + mt is given; question asks
  // what the slope m represents in the scenario. 10 test occurrences across
  // PT1, PT2, PT4, PT6, PT7, PT10, PT11 and friends. SAT Pattern title
  // (verbatim): 'Interpret Slope in Context' → 'interpret-slope-in-context'.
  {
    id: "bank-alg-139",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The graph shows the linear relationship between the number of minutes $x$ since a bathtub began draining and the depth $y$, in inches, of the water in the tub. Which of the following is the best interpretation of the slope of the graph?",
    diagram: { type: "linearGraph", params: { slope: -2, yIntercept: 12, xRange: [0, 7], yRange: [0, 14], xTickInterval: 1, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 12], [6, 0]] } },
    choices: [
      // distractor: uses the y-intercept (12) as the rate
      { id: "A", text: "The depth of the water decreases by $12$ inches each minute." },
      { id: "B", text: "The depth of the water decreases by $2$ inches each minute." },
      // distractor: reads the slope as the starting value
      { id: "C", text: "The depth of the water was $2$ inches when the tub began draining." },
      // distractor: describes the x-intercept, not the slope
      { id: "D", text: "The tub is empty $6$ minutes after it began draining." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~8s):** The line drops from $(0, 12)$ to $(6, 0)$: a fall of $12$ inches over $6$ minutes, so the slope is $-2$ inches per minute. Slope is the change in $y$ for each $1$-unit change in $x$.\n\n**The Full Solution:**\nStep 1: Slope $= \\frac{\\text{change in } y}{\\text{change in } x} = \\frac{0 - 12}{6 - 0} = -2$.\nStep 2: The units of the slope are the units of $y$ per unit of $x$: inches per minute. The negative sign means the depth is decreasing.\nStep 3: So each minute, the depth of the water decreases by $2$ inches. Check on the graph: moving right $1$ unit moves down $2$ units. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: uses $12$, the starting depth (the $y$-intercept), as if it were the rate.\n* Choice C: describes the slope's number $2$ as a starting depth; the starting depth is $12$.\n* Choice D: correctly reads the $x$-intercept, but that describes when the tub is empty, not the slope.\n\n**Test Day Takeaway:** Slope is always \"change in $y$ per one unit of $x$.\" Name the units of each axis, then say the sentence: \"$y$ changes by [slope] for each one [x-unit].\"",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-slope-in-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-140",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $C(k) = 0.12k + 18$ gives the monthly cost $C(k)$, in dollars, of electricity for an apartment that uses $k$ kilowatt-hours of electricity in a month. What is the best interpretation of the number $0.12$ in this context?",
    choices: [
      // distractor: describes the constant 18, not the coefficient
      { id: "A", text: "The fixed monthly charge, in dollars, before any electricity is used." },
      { id: "B", text: "The cost, in dollars, of each kilowatt-hour of electricity used." },
      // distractor: confuses the coefficient with the variable k
      { id: "C", text: "The number of kilowatt-hours of electricity used in a month." },
      // distractor: describes C(1) = 18.12, not the rate
      { id: "D", text: "The total monthly cost, in dollars, when $1$ kilowatt-hour is used." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** In $C(k) = 0.12k + 18$, the number multiplied by $k$ is the rate: each additional kilowatt-hour adds $\\$0.12$ to the cost.\n\n**The Full Solution:**\nStep 1: The model is linear, $C(k) = mk + b$, with slope $m = 0.12$ and $y$-intercept $b = 18$.\nStep 2: The slope is the change in cost for each $1$-unit increase in $k$. Increasing $k$ by $1$ kilowatt-hour increases $C(k)$ by $0.12$ dollars.\nStep 3: Check: $C(1) - C(0) = 18.12 - 18 = 0.12$. $\\checkmark$ So $0.12$ is the cost per kilowatt-hour.\n\n**Why the wrong answers are tempting:**\n* Choice A: describes $18$, the cost when $k = 0$, not $0.12$.\n* Choice C: confuses the constant $0.12$ with the variable $k$, which is the quantity that changes.\n* Choice D: describes $C(1) = 18.12$, the whole bill for one kilowatt-hour, not the per-unit rate.\n\n**Test Day Takeaway:** In a linear model, the coefficient of the variable is \"dollars per unit\"; the constant is \"dollars when the variable is zero.\" Match the number to its role before reading the choices.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-slope-in-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-141",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "medium",
    type: "fill-in",
    question: "The table gives the estimated volume $V$, in cubic meters, of water in a reservoir $d$ days after a spillway was opened. The relationship between $d$ and $V$ is linear. By how many cubic meters does the volume of water decrease each day?",
    diagram: { type: "dataTable", params: { headers: ["d", "V"], rows: [["0", "9,000"], ["2", "8,300"], ["4", "7,600"], ["6", "6,900"]] } },
    correctAnswer: "350",
    explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**The correct answer is $350$.**\n\n**The Fast Way (~8s):** Between consecutive rows, $d$ increases by $2$ and $V$ drops by $700$. Per day, that is $\\frac{700}{2} = 350$ cubic meters.\n\n**The Full Solution:**\nStep 1: Compute the slope from two rows: $\\frac{8{,}300 - 9{,}000}{2 - 0} = \\frac{-700}{2} = -350$ cubic meters per day.\nStep 2: Confirm with another pair: $\\frac{6{,}900 - 7{,}600}{6 - 4} = -350$, consistent with a linear relationship.\nStep 3: The slope's magnitude, $350$, is the daily decrease. Check: $9{,}000 - 350(6) = 6{,}900$, matching the last row. $\\checkmark$\n\n**Common Mistakes:** Entering $700$ (the drop between rows, which spans $2$ days, not $1$); entering $-350$ (the question asks by how much the volume decreases, a positive amount); entering $2{,}100$ (the total drop over $6$ days).\n\n**Test Day Takeaway:** Rate per day means slope with $\\Delta d = 1$. When a table's rows are spaced by more than one unit, divide the change in the output by the actual spacing.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-slope-in-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-142",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph shows the relationship between the number of weeks $x$ since a seedling was planted and the height $y$, in centimeters, of the seedling. Which of the following is the best interpretation of the slope of the graph?",
    diagram: { type: "linearGraph", params: { slope: 3, yIntercept: 4, xRange: [0, 8], yRange: [0, 30], xTickInterval: 2, yTickInterval: 4, gridInterval: 2, showPoints: [[0, 4], [4, 16]] } },
    choices: [
      // distractor: assigns the slope value to the starting height
      { id: "A", text: "The seedling was $3$ centimeters tall when it was planted." },
      // distractor: true statement about the y-intercept, but it does not describe the slope
      { id: "B", text: "The seedling was $4$ centimeters tall when it was planted." },
      { id: "C", text: "The height of the seedling increases by $3$ centimeters each week." },
      // distractor: uses the y-intercept 4 as the weekly rate
      { id: "D", text: "The height of the seedling increases by $4$ centimeters each week." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~8s):** From $(0, 4)$ to $(4, 16)$ the height rises $12$ centimeters over $4$ weeks: slope $= 3$ centimeters per week.\n\n**The Full Solution:**\nStep 1: Read two marked points: $(0, 4)$ and $(4, 16)$. Slope $= \\frac{16 - 4}{4 - 0} = \\frac{12}{4} = 3$.\nStep 2: Units: $y$ is in centimeters and $x$ is in weeks, so the slope is $3$ centimeters per week, the weekly growth.\nStep 3: Check: the $y$-intercept $4$ is the height at planting, a separate quantity. Only choice C describes the slope. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: puts the slope's value, $3$, in the role of the starting height.\n* Choice B: is a true reading of the $y$-intercept, but the question asks about the slope.\n* Choice D: uses the intercept's value, $4$, as the weekly rate.\n\n**Test Day Takeaway:** On a contextual graph, compute the slope from two clean points and attach units ($y$-units per $x$-unit). A true statement about the intercept is still the wrong answer to a slope question.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-slope-in-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-143",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A biologist models the mass $M(d)$, in grams, of a young rat $d$ days after birth by $M(d) = 6 + 4.5d$ for $0 \\le d \\le 30$. Which of the following is the best interpretation of the number $4.5$ in this model?",
    choices: [
      // distractor: assigns the slope to the intercept role (birth mass is 6)
      { id: "A", text: "The mass of the rat at birth, in grams." },
      // distractor: reads a linear model as exponential
      { id: "B", text: "The number of days it takes the mass of the rat to double." },
      { id: "C", text: "The increase in the mass of the rat, in grams, each day after birth." },
      // distractor: swaps the roles of 6 and 4.5
      { id: "D", text: "The increase in the mass of the rat, in grams, every $6$ days." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $4.5$ multiplies $d$, so it is the rate: for each additional day, the mass increases by $4.5$ grams.\n\n**The Full Solution:**\nStep 1: The model has the form $M(d) = b + md$ with $b = 6$ and $m = 4.5$. The constant $6$ is the mass at $d = 0$, birth.\nStep 2: The coefficient $4.5$ is the slope: the change in $M$ when $d$ increases by $1$. Its units are grams per day.\nStep 3: Check: $M(1) - M(0) = 10.5 - 6 = 4.5$ grams. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: describes the constant $6$, the mass at birth, not the coefficient $4.5$.\n* Choice B: treats the model as exponential growth; a linear model adds a fixed amount, it does not double on a schedule.\n* Choice D: swaps the two numbers, treating $6$ as the time unit and $4.5$ as the change over that period.\n\n**Test Day Takeaway:** In $b + md$, the constant is the starting value and the coefficient is the per-unit change. Doubling language belongs to exponential models, never to a linear one.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-slope-in-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-144",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The graph shows the estimated population $y$, in thousands, of a town $x$ years after 2010, based on a linear model. Which of the following is the best interpretation of the slope of the graph?",
    diagram: { type: "linearGraph", params: { slope: 2, yIntercept: 24, xRange: [0, 10], yRange: [0, 50], xTickInterval: 2, yTickInterval: 10, gridInterval: 2, showPoints: [[0, 24], [5, 34]] } },
    choices: [
      // distractor: ignores that y is in thousands
      { id: "A", text: "The population of the town increases by $2$ people each year." },
      { id: "B", text: "The population of the town increases by $2{,}000$ people each year." },
      // distractor: assigns the slope to the intercept role (2010 population is 24,000)
      { id: "C", text: "The population of the town was $2{,}000$ in 2010." },
      // distractor: uses the y-intercept as the yearly rate
      { id: "D", text: "The population of the town increases by $24{,}000$ people each year." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** From $(0, 24)$ to $(5, 34)$ the line rises $10$ over $5$ years: slope $2$. But $y$ is in thousands, so the population grows by $2 \\times 1{,}000 = 2{,}000$ people per year.\n\n**The Full Solution:**\nStep 1: Slope $= \\frac{34 - 24}{5 - 0} = 2$, in units of \"thousands of people per year.\"\nStep 2: Convert the units: $2$ thousand people per year is $2{,}000$ people per year.\nStep 3: Check: over $10$ years the model predicts $24 + 2(10) = 44$ thousand, an increase of $20{,}000$ people, which is $2{,}000$ per year. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: reads the slope as $2$ people, ignoring that the vertical axis is measured in thousands.\n* Choice C: uses the slope's number as a starting population; the 2010 population is the intercept, $24{,}000$.\n* Choice D: uses the intercept, $24$ thousand, as though it were the yearly change.\n\n**Test Day Takeaway:** Read the axis label before interpreting a slope. \"In thousands\" multiplies every $y$-value, including the slope, by $1{,}000$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "interpret-slope-in-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-145",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "hard",
    type: "fill-in",
    question: "The estimated value $V(t)$, in dollars, of a printing press $t$ years after it was purchased is given by $V(t) = 68{,}000 - 4{,}250t$. According to the model, the value of the press decreases each year by $p\\%$ of its purchase price. What is the value of $p$?",
    correctAnswer: "6.25",
    explanation: "**SAT Pattern: Interpret Slope in Context**\n\n**The correct answer is $6.25$.**\n\n**The Fast Way (~10s):** The yearly decrease is the slope's magnitude, $4{,}250$; the purchase price is the intercept, $68{,}000$. So $p = \\frac{4{,}250}{68{,}000} \\times 100 = 6.25$.\n\n**The Full Solution:**\nStep 1: Identify the two numbers. The purchase price is $V(0) = 68{,}000$ dollars. The slope $-4{,}250$ means the value drops $4{,}250$ dollars each year.\nStep 2: Express the yearly drop as a fraction of the purchase price: $\\frac{4{,}250}{68{,}000} = \\frac{1}{16} = 0.0625$.\nStep 3: Convert to a percent: $0.0625 \\times 100 = 6.25$. Check: $6.25\\%$ of $68{,}000$ is $0.0625 \\times 68{,}000 = 4{,}250$. $\\checkmark$\n\n**Common Mistakes:** Entering $4250$ (the dollar decrease, not the percent); entering $0.0625$ (the decimal fraction, not $p$ as a percent); entering $16$ (the reciprocal, from $68{,}000 \\div 4{,}250$).\n\n**Test Day Takeaway:** Slope divided by intercept turns a dollars-per-year rate into a percent-of-starting-value rate. Read whether the answer is wanted as a decimal or as the number $p$ in \"$p\\%$.\"",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "interpret-slope-in-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 6/4: system-of-equations-substitution (8 items) =====
  // Pattern: solve a system of equations by substitution. Includes 2-equation
  // linear systems and mixed linear-quadratic systems. 8 test occurrences
  // across PT2, PT5, PT10, PT12 and M2Easy variants. SAT Pattern title
  // (verbatim from test bundles): 'System of Equations — Substitution'
  // with em-dash (U+2014) → kebab 'system-of-equations-substitution'.
  {
    id: "bank-alg-146",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$y = x + 3$\n$y = -2x + 9$\n\nThe graphs of the two equations in the given system are shown in the $xy$-plane. The solution to the system is $(x, y)$. What is the value of $x$?",
    diagram: { type: "twoLineGraph", params: { intersection: { x: 2, y: 5 }, slope1: 1, slope2: -2, xRange: [-4, 8], yRange: [-2, 10], showIntersection: true, xTickInterval: 2, yTickInterval: 2, gridInterval: 1 } },
    choices: [
      // distractor: sign error: 3x = -6
      { id: "A", text: "$-2$" },
      { id: "B", text: "$2$" },
      // distractor: reports y instead of x
      { id: "C", text: "$5$" },
      // distractor: stops at 3x = 6
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~8s):** Both equations give $y$, so set them equal: $x + 3 = -2x + 9$, hence $3x = 6$ and $x = 2$. The graph confirms the lines cross at $(2, 5)$.\n\n**The Full Solution:**\nStep 1: Substitute $x + 3$ for $y$ in the second equation: $x + 3 = -2x + 9$.\nStep 2: Add $2x$ to both sides and subtract $3$: $3x = 6$, so $x = 2$.\nStep 3: Then $y = 2 + 3 = 5$. Check in the second equation: $-2(2) + 9 = 5$. $\\checkmark$ The intersection point on the graph is $(2, 5)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): mishandles the signs when collecting terms, reaching $3x = -6$.\n* Choice C ($5$): reports the $y$-coordinate of the intersection instead of $x$.\n* Choice D ($6$): stops at $3x = 6$ without dividing by $3$.\n\n**Test Day Takeaway:** When both equations are solved for $y$, set the right sides equal. The graph's intersection is the same point, so use it as a check, not a substitute for the algebra.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-of-equations-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-147",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "easy",
    type: "fill-in",
    question: "$y = 2x - 5$\n$x + y = 16$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
    correctAnswer: "9",
    explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~8s):** Replace $y$ in the second equation: $x + (2x - 5) = 16$, so $3x = 21$ and $x = 7$. Then $y = 2(7) - 5 = 9$.\n\n**The Full Solution:**\nStep 1: The first equation already gives $y$ in terms of $x$, so substitute: $x + 2x - 5 = 16$.\nStep 2: Combine and solve: $3x = 21$, so $x = 7$.\nStep 3: Find $y$: $y = 2(7) - 5 = 9$. Check: $7 + 9 = 16$. $\\checkmark$\n\n**Common Mistakes:** Entering $7$ (stopping at $x$ when the question asks for $y$); entering $11$ (from $x + 2x + 5 = 16$, a sign slip on the $-5$); entering $16$ (misreading $x + y$ as $y$).\n\n**Test Day Takeaway:** Substitute the expression, solve for the first variable, then go back for the one the question actually asks about.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-of-equations-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-148",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$x = 3y - 4$\n$2x + y = 20$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
    choices: [
      { id: "A", text: "$4$" },
      // distractor: forgets to distribute the 2: 3y - 4 + y = 20
      { id: "B", text: "$6$" },
      // distractor: reports x instead of y
      { id: "C", text: "$8$" },
      // distractor: reports x + y
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~8s):** Substitute $3y - 4$ for $x$: $2(3y - 4) + y = 20$, so $7y - 8 = 20$ and $y = 4$.\n\n**The Full Solution:**\nStep 1: The first equation gives $x$ directly, so replace $x$ in the second: $2(3y - 4) + y = 20$.\nStep 2: Distribute and combine: $6y - 8 + y = 20$, so $7y = 28$ and $y = 4$.\nStep 3: Then $x = 3(4) - 4 = 8$. Check: $2(8) + 4 = 20$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): substitutes without distributing the $2$, solving $3y - 4 + y = 20$.\n* Choice C ($8$): solves correctly but reports $x$ instead of $y$.\n* Choice D ($12$): reports $x + y$ instead of $y$.\n\n**Test Day Takeaway:** When you substitute an expression, put it in parentheses so the coefficient in front multiplies every term. Then reread which variable is requested.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-of-equations-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-149",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "medium",
    type: "fill-in",
    question: "A ferry charges $\\$9$ per adult and $\\$5$ per child. A group of $14$ people paid a total of $\\$102$ for ferry tickets. How many children were in the group?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~15s):** If all $14$ were adults the cost would be $126$. Each child instead of an adult saves $4$, and $126 - 102 = 24$, so there are $24 \\div 4 = 6$ children.\n\n**The Full Solution:**\nStep 1: Let $a$ be the number of adults and $c$ the number of children. Count: $a + c = 14$. Cost: $9a + 5c = 102$.\nStep 2: Substitute $a = 14 - c$ into the cost equation: $9(14 - c) + 5c = 102$, so $126 - 4c = 102$, giving $4c = 24$ and $c = 6$.\nStep 3: Then $a = 8$. Check: $9(8) + 5(6) = 72 + 30 = 102$. $\\checkmark$\n\n**Common Mistakes:** Entering $8$ (the number of adults); setting up $9a + 5c = 14$ by mixing the count and the cost; forgetting to distribute the $9$ over $(14 - c)$.\n\n**Test Day Takeaway:** Two totals (how many, how much) give two equations. Solve the count equation for one variable and substitute it into the cost equation.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "system-of-equations-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-150",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$y = 2x - 7$\n$3x + 4y = 5$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $x + y$?",
    choices: [
      // distractor: reports y only
      { id: "A", text: "$-1$" },
      { id: "B", text: "$2$" },
      // distractor: reports x only
      { id: "C", text: "$3$" },
      // distractor: computes x - y
      { id: "D", text: "$4$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Substitute: $3x + 4(2x - 7) = 5$, so $11x - 28 = 5$ and $x = 3$. Then $y = 2(3) - 7 = -1$, and $x + y = 2$.\n\n**The Full Solution:**\nStep 1: Replace $y$ in the second equation with $2x - 7$: $3x + 4(2x - 7) = 5$.\nStep 2: Distribute and solve: $3x + 8x - 28 = 5$, so $11x = 33$ and $x = 3$.\nStep 3: Find $y = 2(3) - 7 = -1$, so $x + y = 3 + (-1) = 2$. Check: $3(3) + 4(-1) = 9 - 4 = 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-1$): reports $y$ alone.\n* Choice C ($3$): reports $x$ alone.\n* Choice D ($4$): computes $x - y = 3 - (-1)$ instead of $x + y$.\n\n**Test Day Takeaway:** Solve for both coordinates, then build the requested expression. A negative $y$ makes $x + y$ smaller than $x$, so sanity-check the direction.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-of-equations-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-151",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "medium",
    type: "fill-in",
    question: "$4m + 3n = 29$\n$n = m - 2$\n\nThe solution to the given system of equations is $(m, n)$. What is the value of $n$?",
    correctAnswer: "3",
    explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~8s):** Replace $n$ with $m - 2$: $4m + 3(m - 2) = 29$, so $7m - 6 = 29$, $m = 5$, and $n = 5 - 2 = 3$.\n\n**The Full Solution:**\nStep 1: The second equation gives $n$ in terms of $m$. Substitute into the first: $4m + 3(m - 2) = 29$.\nStep 2: Distribute and combine: $4m + 3m - 6 = 29$, so $7m = 35$ and $m = 5$.\nStep 3: Then $n = 5 - 2 = 3$. Check: $4(5) + 3(3) = 20 + 9 = 29$. $\\checkmark$\n\n**Common Mistakes:** Entering $5$ (the value of $m$, not $n$); entering $\\frac{23}{7}$ from $4m + 3m + 6 = 29$ (a sign slip on the $-2$); entering $7$ (finding $m = 5$ but then computing $n = m + 2$ instead of $m - 2$).\n\n**Test Day Takeaway:** Substitute with parentheses, distribute, solve, then return to the substitution equation for the second variable.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-of-equations-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-152",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$y = 3x - 2$\n$y = x^2 + 2x - 8$\n\nThe solution to the given system of equations is $(x, y)$, where $x > 0$. What is the value of $y$?",
    choices: [
      // distractor: uses the rejected root x = -2, giving y = -8
      { id: "A", text: "$-8$" },
      // distractor: reports x instead of y
      { id: "B", text: "$3$" },
      // distractor: factors as (x + 3)(x - 2), takes x = 2, gets y = 4
      { id: "C", text: "$4$" },
      { id: "D", text: "$7$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Set the two expressions for $y$ equal: $x^2 + 2x - 8 = 3x - 2$, so $x^2 - x - 6 = 0$, which factors as $(x - 3)(x + 2) = 0$. With $x > 0$, $x = 3$ and $y = 3(3) - 2 = 7$.\n\n**The Full Solution:**\nStep 1: Substitute $3x - 2$ for $y$ in the second equation: $3x - 2 = x^2 + 2x - 8$.\nStep 2: Bring everything to one side: $0 = x^2 - x - 6 = (x - 3)(x + 2)$, so $x = 3$ or $x = -2$. The condition $x > 0$ selects $x = 3$.\nStep 3: Then $y = 3(3) - 2 = 7$. Check in the quadratic: $3^2 + 2(3) - 8 = 9 + 6 - 8 = 7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): uses the rejected root $x = -2$, for which $y = 3(-2) - 2 = -8$.\n* Choice B ($3$): stops at $x = 3$ and reports it instead of $y$.\n* Choice C ($4$): factors as $(x + 3)(x - 2)$, takes $x = 2$, and computes $y = 3(2) - 2$.\n\n**Test Day Takeaway:** A line meeting a parabola gives a quadratic with two roots. Use the stated condition to pick one, then compute the variable the question actually asks for.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "system-of-equations-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-153",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "hard",
    type: "fill-in",
    question: "$2x + 5y = 1$\n$x = 3y - 5$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $xy$?",
    correctAnswer: "-2",
    explanation: "**SAT Pattern: System of Equations — Substitution**\n\n**The correct answer is $-2$.**\n\n**The Fast Way (~10s):** Substitute $x = 3y - 5$: $2(3y - 5) + 5y = 1$, so $11y - 10 = 1$ and $y = 1$. Then $x = 3(1) - 5 = -2$, and $xy = -2$.\n\n**The Full Solution:**\nStep 1: Replace $x$ in the first equation: $2(3y - 5) + 5y = 1$.\nStep 2: Distribute and combine: $6y - 10 + 5y = 1$, so $11y = 11$ and $y = 1$.\nStep 3: Then $x = 3(1) - 5 = -2$. The product is $xy = (-2)(1) = -2$. Check: $2(-2) + 5(1) = -4 + 5 = 1$. $\\checkmark$\n\n**Common Mistakes:** Entering $2$ (dropping the sign of $x$); entering $-1$ (computing $x + y$ instead of $xy$); entering $1$ (reporting $y$ alone).\n\n**Test Day Takeaway:** When the answer is a product, a single negative coordinate flips the sign. Solve for both values, then multiply carefully and enter the minus sign.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "system-of-equations-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 6/5: no-solution-condition (8 items) =====
  // Pattern: 2-equation linear system has NO solution ⟺ parallel lines (same
  // slope, different intercept). Find the parameter that produces parallelism.
  // 8 test occurrences across PT3, PT10, PT12 and friends.
  // SAT Pattern title (verbatim): 'No-Solution Condition' →
  // kebab 'no-solution-condition'.
  {
    id: "bank-alg-154",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$y = 5x - 2$\n$y = (k - 3)x + 8$\n\nIn the given system of equations, $k$ is a constant. The system has no solution. What is the value of $k$?",
    choices: [
      // distractor: computes 5 - 3 instead of solving k - 3 = 5
      { id: "A", text: "$2$" },
      // distractor: reports the slope 5 itself
      { id: "B", text: "$5$" },
      { id: "C", text: "$8$" },
      // distractor: matches k - 3 to the intercept 8
      { id: "D", text: "$11$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice C is correct.**\n\n**The Fast Way (~8s):** No solution means parallel lines with different intercepts. The intercepts $-2$ and $8$ already differ, so match the slopes: $k - 3 = 5$, giving $k = 8$.\n\n**The Full Solution:**\nStep 1: Both equations are in slope-intercept form. The first line has slope $5$ and $y$-intercept $-2$; the second has slope $k - 3$ and $y$-intercept $8$.\nStep 2: Two lines never meet only if they are parallel and distinct. Distinct is guaranteed since $-2 \\ne 8$; parallel requires $k - 3 = 5$.\nStep 3: Solve: $k = 8$. Check: the second equation becomes $y = 5x + 8$, parallel to $y = 5x - 2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): computes $5 - 3$ instead of solving $k - 3 = 5$.\n* Choice B ($5$): reports the required slope rather than the value of $k$ that produces it.\n* Choice D ($11$): sets $k - 3$ equal to the intercept $8$ instead of the slope.\n\n**Test Day Takeaway:** \"No solution\" for two lines means equal slopes and unequal intercepts. Set the slope expressions equal and solve for the constant; do not stop at the slope.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "no-solution-condition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-155",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "easy",
    type: "fill-in",
    question: "The graph of line $j$ is shown in the $xy$-plane. A system of two linear equations consists of the equation of line $j$ and the equation $y = kx - 5$, where $k$ is a constant. If the system has no solution, what is the value of $k$?",
    diagram: { type: "linearGraph", params: { slope: 3, yIntercept: 1, xRange: [-4, 4], yRange: [-6, 10], xTickInterval: 1, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 1], [2, 7]], label: "j" } },
    correctAnswer: "3",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~8s):** No solution means the second line is parallel to line $j$. From the marked points $(0, 1)$ and $(2, 7)$, line $j$ has slope $\\frac{7 - 1}{2 - 0} = 3$, so $k = 3$.\n\n**The Full Solution:**\nStep 1: Read the slope of line $j$ from two points on the graph: $\\frac{7 - 1}{2 - 0} = 3$. Its $y$-intercept is $1$, so line $j$ is $y = 3x + 1$.\nStep 2: A system of two lines has no solution exactly when the lines are parallel with different $y$-intercepts. The intercepts $1$ and $-5$ differ, so the condition is $k = 3$.\nStep 3: Check: $y = 3x - 5$ and $y = 3x + 1$ never intersect because $3x - 5 = 3x + 1$ has no solution. $\\checkmark$\n\n**Common Mistakes:** Entering $1$ (the $y$-intercept of line $j$); entering $-\\frac{1}{3}$ (the perpendicular slope, confusing \"no solution\" with \"perpendicular\"); entering $-5$ (copying the intercept of the second equation).\n\n**Test Day Takeaway:** Read the slope from two lattice points on the graph. Parallel with a different intercept is the whole condition for no solution.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "no-solution-condition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-156",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$3x + 4y = 7$\n$kx + 12y = 5$\n\nIn the given system of equations, $k$ is a constant. If the system has no solution, what is the value of $k$?",
    choices: [
      // distractor: copies the x-coefficient of the first equation
      { id: "A", text: "$3$" },
      // distractor: divides 12 by 3 instead of scaling 3 by 12 ÷ 4
      { id: "B", text: "$4$" },
      { id: "C", text: "$9$" },
      // distractor: multiplies 3 by 12 instead of by 3
      { id: "D", text: "$36$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice C is correct.**\n\n**The Fast Way (~8s):** The $y$-coefficients scale by $\\frac{12}{4} = 3$. Parallel lines need the $x$-coefficients to scale the same way: $k = 3(3) = 9$. The constants $7$ and $5$ do not scale by $3$, so the lines are distinct.\n\n**The Full Solution:**\nStep 1: In standard form, lines are parallel when the ratios of the $x$-coefficients and $y$-coefficients are equal: $\\frac{k}{3} = \\frac{12}{4}$.\nStep 2: Solve: $\\frac{k}{3} = 3$, so $k = 9$.\nStep 3: Confirm the lines are not identical: scaling the first equation by $3$ gives $9x + 12y = 21$, and $21 \\ne 5$, so the lines are parallel and distinct. No solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): copies the $x$-coefficient of the first equation without scaling.\n* Choice B ($4$): computes $12 \\div 3$, mixing a $y$-coefficient with an $x$-coefficient.\n* Choice D ($36$): multiplies $3$ by $12$ instead of by the scale factor $3$.\n\n**Test Day Takeaway:** For $Ax + By = C$ systems, parallel means $\\frac{A_2}{A_1} = \\frac{B_2}{B_1}$. Find the scale factor from the known pair and apply it to the other, then check the constants break the match.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "no-solution-condition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-157",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "medium",
    type: "fill-in",
    question: "$6x - 5y = 8$\n$18x + ky = 20$\n\nIn the given system of equations, $k$ is a constant. The system has no solution. What is the value of $k$?",
    correctAnswer: "-15",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $-15$.**\n\n**The Fast Way (~8s):** The $x$-coefficients scale by $\\frac{18}{6} = 3$. For parallel lines the $y$-coefficients must scale the same way: $k = 3(-5) = -15$.\n\n**The Full Solution:**\nStep 1: Parallel lines in standard form have proportional coefficients: $\\frac{18}{6} = \\frac{k}{-5}$.\nStep 2: The left ratio is $3$, so $k = 3(-5) = -15$.\nStep 3: Confirm the lines are distinct: $3(8) = 24 \\ne 20$, so the second equation is not a multiple of the first. Parallel and distinct means no solution. $\\checkmark$\n\n**Common Mistakes:** Entering $15$ (dropping the negative sign from $-5$); entering $-5$ (copying the coefficient without scaling); entering $5$ (both errors at once).\n\n**Test Day Takeaway:** Carry the sign of the coefficient through the scaling. A negative $y$-coefficient stays negative after multiplying by a positive factor.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "no-solution-condition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-158",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$mx + 10y = 3$\n$4x - 5y = 12$\n\nIn the given system of equations, $m$ is a constant. The system has no solution. What is the value of $m$?",
    choices: [
      { id: "A", text: "$-8$" },
      // distractor: reports the scale factor -2 instead of m
      { id: "B", text: "$-2$" },
      // distractor: drops the sign of the scale factor and reports it
      { id: "C", text: "$2$" },
      // distractor: uses scale factor +2 instead of -2
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice A is correct.**\n\n**The Fast Way (~8s):** From the $y$-coefficients, the first equation is $\\frac{10}{-5} = -2$ times the second. So $m = -2(4) = -8$.\n\n**The Full Solution:**\nStep 1: Parallel lines need proportional coefficients: $\\frac{m}{4} = \\frac{10}{-5}$.\nStep 2: The right side is $-2$, so $m = -2(4) = -8$.\nStep 3: Confirm distinct lines: $-2(12) = -24 \\ne 3$, so the equations are not the same line. No solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-2$): reports the scale factor instead of applying it to $4$.\n* Choice C ($2$): drops the sign of the scale factor and reports it.\n* Choice D ($8$): uses $+2$ as the scale factor, losing the sign from $10 \\div (-5)$.\n\n**Test Day Takeaway:** Compute the ratio from the pair of coefficients you know, sign included, then multiply the remaining known coefficient by that ratio.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "no-solution-condition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-159",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "medium",
    type: "fill-in",
    question: "$ax + 6y = 10$\n$3x + 9y = 8$\n\nIn the given system of equations, $a$ is a constant. If the system has no solution, what is the value of $a$?",
    correctAnswer: "2",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~8s):** The $y$-coefficients give the ratio $\\frac{6}{9} = \\frac{2}{3}$, so $a = \\frac{2}{3}(3) = 2$.\n\n**The Full Solution:**\nStep 1: For parallel lines, $\\frac{a}{3} = \\frac{6}{9}$.\nStep 2: Simplify: $\\frac{6}{9} = \\frac{2}{3}$, so $a = 3 \\cdot \\frac{2}{3} = 2$.\nStep 3: Confirm the lines are distinct: $\\frac{2}{3}(8) = \\frac{16}{3} \\ne 10$, so the first equation is not a multiple of the second. Parallel and distinct means no solution. $\\checkmark$\n\n**Common Mistakes:** Entering $4.5$ (inverting the ratio, $3 \\cdot \\frac{3}{2}$); entering $6$ (copying the $y$-coefficient); entering $18$ (multiplying $3$ by $6$ instead of by $\\frac{2}{3}$).\n\n**Test Day Takeaway:** The scale factor can be a fraction. Reduce it, apply it to the known coefficient, and confirm the constants do not scale the same way.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "no-solution-condition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-160",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The graph of line $r$ is shown in the $xy$-plane. Which of the following equations, together with the equation of line $r$, forms a system of equations with no solution?",
    diagram: { type: "linearGraph", params: { slope: 2, yIntercept: -1, xRange: [-4, 4], yRange: [-6, 8], xTickInterval: 1, yTickInterval: 2, gridInterval: 1, showPoints: [[0, -1], [2, 3]], label: "r" } },
    choices: [
      // distractor: negates the slope; the lines intersect
      { id: "A", text: "$y = -2x - 1$" },
      // distractor: is line r itself, giving infinitely many solutions
      { id: "B", text: "$y = 2x - 1$" },
      { id: "C", text: "$y = 2x + 4$" },
      // distractor: uses the reciprocal slope; the lines intersect
      { id: "D", text: "$y = \\frac{1}{2}x - 1$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice C is correct.**\n\n**The Fast Way (~12s):** From $(0, -1)$ and $(2, 3)$, line $r$ has slope $2$ and $y$-intercept $-1$: $y = 2x - 1$. No solution needs the same slope with a different intercept, which is $y = 2x + 4$.\n\n**The Full Solution:**\nStep 1: Find the equation of line $r$: slope $= \\frac{3 - (-1)}{2 - 0} = 2$, intercept $-1$, so $y = 2x - 1$.\nStep 2: A system of two lines has no solution only if the lines are parallel and distinct: equal slopes, different $y$-intercepts.\nStep 3: Only $y = 2x + 4$ has slope $2$ with an intercept other than $-1$. Check: $2x - 1 = 2x + 4$ reduces to $-1 = 4$, impossible. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -2x - 1$): shares the intercept but negates the slope, so the lines cross at $(0, -1)$.\n* Choice B ($y = 2x - 1$): is line $r$ itself; that system has infinitely many solutions, not none.\n* Choice D ($y = \\frac{1}{2}x - 1$): uses the reciprocal slope, so the lines are not parallel and intersect.\n\n**Test Day Takeaway:** Write the graphed line's equation first. Then the trap is the identical line: same slope and same intercept means infinitely many solutions, which is the opposite of no solution.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "no-solution-condition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-161",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "hard",
    type: "fill-in",
    question: "In the $xy$-plane, line $p$ passes through the points $(2, 9)$ and $(5, 3)$. Line $q$ passes through the points $(-1, 6)$ and $(k, 0)$, where $k$ is a constant. If lines $p$ and $q$ do not intersect, what is the value of $k$?",
    correctAnswer: "2",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~12s):** Lines that never intersect are parallel. Slope of $p$: $\\frac{3 - 9}{5 - 2} = -2$. Set the slope of $q$ equal: $\\frac{0 - 6}{k - (-1)} = -2$, so $k + 1 = 3$ and $k = 2$.\n\n**The Full Solution:**\nStep 1: Slope of line $p$: $\\frac{3 - 9}{5 - 2} = \\frac{-6}{3} = -2$.\nStep 2: Slope of line $q$ in terms of $k$: $\\frac{0 - 6}{k + 1} = \\frac{-6}{k + 1}$. Parallel means $\\frac{-6}{k + 1} = -2$, so $k + 1 = 3$ and $k = 2$.\nStep 3: Confirm the lines are distinct: $p$ is $y = -2x + 13$ and $q$ is $y = -2x + 4$. Same slope, different intercepts, so they never meet. $\\checkmark$\n\n**Common Mistakes:** Entering $4$ (solving $k - 1 = 3$ by mishandling the $-1$ in the run); entering $-4$ (using slope $+2$ from a sign error in $3 - 9$); entering $-13$ (setting the slope of $q$ to $\\frac{1}{2}$, the negative reciprocal, as if the lines were perpendicular: $\\frac{-6}{k + 1} = \\frac{1}{2}$ gives $k + 1 = -12$).\n\n**Test Day Takeaway:** \"Do not intersect\" is a slope condition: compute one slope, set the other equal, and solve. Subtracting a negative coordinate in the run is where the sign errors hide.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "no-solution-condition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 7/2: slope-from-two-points (7 items) =====
  // Bank already has 1 item for this pattern (around bank-alg-006 — an old one).
  // Adding 7 more for total of 8 (Tier 1 threshold).
  // Pattern: slope = Δy/Δx between two points. 7 test occurrences across PT1,
  // PT4, PT11 + M2Easy variants. SAT Pattern title (verbatim): 'Slope from
  // Two Points' → kebab 'slope-from-two-points'.
  {
    id: "bank-alg-162",
    domain: "algebra",
    skills: ["slope-from-points"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Line $m$ is shown in the $xy$-plane. Line $m$ passes through the points $(-3, -2)$ and $(1, 6)$. What is the slope of line $m$?",
    diagram: { type: "linearGraph", params: { slope: 2, yIntercept: 4, xRange: [-6, 6], yRange: [-8, 8], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[-3, -2], [1, 6]], label: "m" } },
    choices: [
      // distractor: sign error when subtracting negative coordinates
      { id: "A", text: "$-2$" },
      { id: "B", text: "$2$" },
      // distractor: reports the run, 1 - (-3)
      { id: "C", text: "$4$" },
      // distractor: reports the rise, 6 - (-2)
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~8s):** Rise over run: $\\frac{6 - (-2)}{1 - (-3)} = \\frac{8}{4} = 2$. The line rises to the right, so the slope is positive.\n\n**The Full Solution:**\nStep 1: Slope $= \\frac{y_2 - y_1}{x_2 - x_1}$ with $(x_1, y_1) = (-3, -2)$ and $(x_2, y_2) = (1, 6)$.\nStep 2: Numerator: $6 - (-2) = 8$. Denominator: $1 - (-3) = 4$.\nStep 3: Slope $= \\frac{8}{4} = 2$. Check on the graph: from $(-3, -2)$, moving right $1$ and up $2$ repeatedly lands on $(1, 6)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): mishandles the double negatives, producing a negative slope for a line that clearly rises.\n* Choice C ($4$): reports the run, $1 - (-3)$, instead of the ratio.\n* Choice D ($8$): reports the rise, $6 - (-2)$, instead of the ratio.\n\n**Test Day Takeaway:** Subtracting a negative coordinate adds. Compute rise and run separately, then divide, and confirm the sign against the picture.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "slope-from-two-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-163",
    domain: "algebra",
    skills: ["slope-from-points"],
    difficulty: "easy",
    type: "fill-in",
    question: "What is the slope of the line in the $xy$-plane that passes through the points $(-1, 8)$ and $(3, -4)$?",
    correctAnswer: "-3",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**The correct answer is $-3$.**\n\n**The Fast Way (~6s):** $\\frac{-4 - 8}{3 - (-1)} = \\frac{-12}{4} = -3$.\n\n**The Full Solution:**\nStep 1: Use $\\frac{y_2 - y_1}{x_2 - x_1}$ with $(x_1, y_1) = (-1, 8)$ and $(x_2, y_2) = (3, -4)$.\nStep 2: Rise: $-4 - 8 = -12$. Run: $3 - (-1) = 4$.\nStep 3: Slope $= \\frac{-12}{4} = -3$. Check by reversing the order: $\\frac{8 - (-4)}{-1 - 3} = \\frac{12}{-4} = -3$. $\\checkmark$\n\n**Common Mistakes:** Entering $3$ (dropping the sign; $y$ falls as $x$ rises, so the slope must be negative); entering $-6$ (using run $3 - 1 = 2$ by ignoring the negative in $-1$); entering $-\\frac{1}{3}$ (dividing run by rise).\n\n**Test Day Takeaway:** Keep the coordinates in the same order in both subtractions. A line that drops from left to right has a negative slope; use that as a sign check.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "slope-from-two-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-164",
    domain: "algebra",
    skills: ["slope-from-points"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Line $t$ in the $xy$-plane contains the points $(2, -6)$ and $(5, 6)$. What is the slope of line $t$?",
    choices: [
      // distractor: reverses one subtraction, getting -12 over 3
      { id: "A", text: "$-4$" },
      // distractor: computes 6 - 6 in the rise, dropping the sign of -6
      { id: "B", text: "$0$" },
      { id: "C", text: "$4$" },
      // distractor: reports the rise without dividing by the run
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~6s):** $\\frac{6 - (-6)}{5 - 2} = \\frac{12}{3} = 4$.\n\n**The Full Solution:**\nStep 1: Assign $(x_1, y_1) = (2, -6)$ and $(x_2, y_2) = (5, 6)$.\nStep 2: Rise: $6 - (-6) = 12$. Run: $5 - 2 = 3$.\nStep 3: Slope $= \\frac{12}{3} = 4$. Check: starting at $(2, -6)$ and moving right $3$ and up $12$ reaches $(5, 6)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): subtracts in opposite orders for rise and run, getting $\\frac{-12}{3}$.\n* Choice B ($0$): computes the rise as $6 - 6$, losing the sign of $-6$.\n* Choice D ($12$): stops at the rise and never divides by the run.\n\n**Test Day Takeaway:** Write the subtraction with the negative coordinate in parentheses: $6 - (-6)$. Then divide rise by run; a slope is a ratio, never just a difference.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "slope-from-two-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-165",
    domain: "algebra",
    skills: ["slope-from-points"],
    difficulty: "medium",
    type: "fill-in",
    question: "The points $(-4, 5)$ and $(2, -7)$ are shown in the $xy$-plane. Line $w$ passes through both points. What is the slope of line $w$?",
    diagram: { type: "coordinatePoints", params: { points: [[-4, 5], [2, -7]], xMin: -6, xMax: 6, yMin: -8, yMax: 8 } },
    correctAnswer: "-2",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**The correct answer is $-2$.**\n\n**The Fast Way (~6s):** $\\frac{-7 - 5}{2 - (-4)} = \\frac{-12}{6} = -2$. The right-hand point is lower, so the slope is negative.\n\n**The Full Solution:**\nStep 1: Take $(x_1, y_1) = (-4, 5)$ and $(x_2, y_2) = (2, -7)$.\nStep 2: Rise: $-7 - 5 = -12$. Run: $2 - (-4) = 6$.\nStep 3: Slope $= \\frac{-12}{6} = -2$. Check on the grid: from $(-4, 5)$, each step right drops $2$, and six steps right reach $(2, -7)$. $\\checkmark$\n\n**Common Mistakes:** Entering $2$ (dropping the sign); entering $6$ (using run $2 - 4 = -2$ by ignoring the negative in $-4$, giving $\\frac{-12}{-2} = 6$); entering $-\\frac{1}{2}$ (dividing run by rise).\n\n**Test Day Takeaway:** When points are plotted, use the picture to predict the sign before computing. Then rise over run, with the negative coordinates in parentheses.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "slope-from-two-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-166",
    domain: "algebra",
    skills: ["slope-from-points"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Line $h$ is shown in the $xy$-plane. The points $(-6, 2)$ and $(1, 2)$ lie on line $h$. What is the slope of line $h$?",
    diagram: { type: "linearGraph", params: { slope: 0, yIntercept: 2, xRange: [-8, 4], yRange: [-6, 6], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[-6, 2], [1, 2]], label: "h" } },
    choices: [
      { id: "A", text: "$0$" },
      // distractor: reports the shared y-coordinate
      { id: "B", text: "$2$" },
      // distractor: reports the run, 1 - (-6)
      { id: "C", text: "$7$" },
      // distractor: divides run by rise (7 over 0), confusing horizontal with vertical
      { id: "D", text: "The slope of line $h$ is undefined." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Both points have $y = 2$, so the rise is $0$ and the line is horizontal. A horizontal line has slope $0$.\n\n**The Full Solution:**\nStep 1: Slope $= \\frac{2 - 2}{1 - (-6)} = \\frac{0}{7}$.\nStep 2: Zero divided by a nonzero number is $0$, so the slope is $0$.\nStep 3: Check on the graph: the line is flat, with no rise as $x$ changes. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): reports the constant $y$-value of the line instead of its slope.\n* Choice C ($7$): reports the run, $1 - (-6)$, instead of the ratio.\n* Choice D: divides run by rise, $\\frac{7}{0}$, and concludes \"undefined.\" That describes a vertical line, not a horizontal one.\n\n**Test Day Takeaway:** Same $y$-coordinates means horizontal, slope $0$. Same $x$-coordinates means vertical, slope undefined. Do not swap the two.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "slope-from-two-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-167",
    domain: "algebra",
    skills: ["slope-from-points"],
    difficulty: "medium",
    type: "fill-in",
    question: "The graph of a linear equation in the $xy$-plane passes through the points $(-6, -1)$ and $(4, 4)$. What is the slope of the graph?",
    correctAnswer: "1/2",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**The correct answer is $\\frac{1}{2}$.**\n\n**The Fast Way (~6s):** $\\frac{4 - (-1)}{4 - (-6)} = \\frac{5}{10} = \\frac{1}{2}$, which can be entered as $1/2$ or $.5$.\n\n**The Full Solution:**\nStep 1: Let $(x_1, y_1) = (-6, -1)$ and $(x_2, y_2) = (4, 4)$.\nStep 2: Rise: $4 - (-1) = 5$. Run: $4 - (-6) = 10$.\nStep 3: Slope $= \\frac{5}{10} = \\frac{1}{2}$. Check: from $(-6, -1)$, moving right $10$ and up $5$ lands on $(4, 4)$. $\\checkmark$\n\n**Common Mistakes:** Entering $2$ (dividing run by rise); entering $\\frac{3}{10}$ (using rise $4 - 1 = 3$ by mishandling the negative in $-1$); entering $-\\frac{1}{2}$ (a stray sign, though the line rises to the right).\n\n**Test Day Takeaway:** A fractional slope is normal. Reduce the fraction and enter it as a fraction or an exact decimal; the sign follows the direction of the line.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "slope-from-two-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-168",
    domain: "algebra",
    skills: ["slope-from-points"],
    difficulty: "hard",
    type: "fill-in",
    question: "In the $xy$-plane, a line with slope $-3$ passes through the points $(2k, 5)$ and $(k + 3, -1)$, where $k$ is a constant. What is the value of $k$?",
    correctAnswer: "1",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**The correct answer is $1$.**\n\n**The Fast Way (~12s):** Set up the slope: $\\frac{-1 - 5}{(k + 3) - 2k} = -3$, so $\\frac{-6}{3 - k} = -3$. Then $3 - k = 2$ and $k = 1$.\n\n**The Full Solution:**\nStep 1: Write the slope with the unknown: $\\frac{-1 - 5}{(k + 3) - 2k} = \\frac{-6}{3 - k}$.\nStep 2: Set it equal to $-3$: $\\frac{-6}{3 - k} = -3$. Multiply both sides by $3 - k$: $-6 = -3(3 - k) = -9 + 3k$, so $3k = 3$ and $k = 1$.\nStep 3: Check: the points become $(2, 5)$ and $(4, -1)$, and $\\frac{-1 - 5}{4 - 2} = \\frac{-6}{2} = -3$. $\\checkmark$\n\n**Common Mistakes:** Entering $5$ (writing the run as $2k - (k + 3) = k - 3$ but keeping the rise as $-6$, an inconsistent order, giving $k - 3 = 2$); entering $-1$ (sign slip when distributing $-3$ over $3 - k$); entering $2$ (stopping at $3 - k = 2$ and reporting the $2$).\n\n**Test Day Takeaway:** With a parameter in the coordinates, write rise and run in the same order, set the ratio equal to the given slope, and clear the denominator. Always substitute back to confirm the slope.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "slope-from-two-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 7/3: two-step-linear-equation (8 items) =====
  // Pattern: ax + b = c, solve for x in two steps. 7 test occurrences across
  // PT3, PT12, M2Easy variants. SAT Pattern title (verbatim): 'Two-Step
  // Linear Equation' → kebab 'two-step-linear-equation'.
  {
    id: "bank-alg-169",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$4x - 12 = 20$\n\nWhat value of $x$ is the solution to the given equation?",
    choices: [
      // distractor: subtracts 12 from 20 instead of adding: 4x = 8
      { id: "A", text: "$2$" },
      { id: "B", text: "$8$" },
      // distractor: divides only the 20 by 4: x - 12 = 5
      { id: "C", text: "$17$" },
      // distractor: stops at 4x = 32
      { id: "D", text: "$32$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Add $12$: $4x = 32$. Divide by $4$: $x = 8$.\n\n**The Full Solution:**\nStep 1: Undo the subtraction first by adding $12$ to both sides: $4x = 32$.\nStep 2: Undo the multiplication by dividing both sides by $4$: $x = 8$.\nStep 3: Check: $4(8) - 12 = 32 - 12 = 20$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): subtracts $12$ from $20$ instead of adding, reaching $4x = 8$.\n* Choice C ($17$): divides only the $20$ by $4$, leaving $x - 12 = 5$.\n* Choice D ($32$): stops after adding $12$ and reports $4x$ instead of $x$.\n\n**Test Day Takeaway:** Reverse the order of operations: undo addition or subtraction first, then undo multiplication. Apply each step to the whole side.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "two-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-170",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "easy",
    type: "fill-in",
    question: "$7x + 15 = 64$\n\nWhat value of $x$ is the solution to the given equation?",
    correctAnswer: "7",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~5s):** Subtract $15$: $7x = 49$. Divide by $7$: $x = 7$.\n\n**The Full Solution:**\nStep 1: Subtract $15$ from both sides: $7x = 49$.\nStep 2: Divide both sides by $7$: $x = 7$.\nStep 3: Check: $7(7) + 15 = 49 + 15 = 64$. $\\checkmark$\n\n**Common Mistakes:** Entering $49$ (stopping at $7x = 49$); entering $\\frac{79}{7}$ (adding $15$ instead of subtracting); entering $\\frac{49}{15}$ (dividing by the wrong number).\n\n**Test Day Takeaway:** Isolate the variable term first, then divide by its coefficient. A quick substitution confirms the answer in seconds.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "two-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-171",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$\\frac{x}{5} + 6 = 2$\n\nWhat value of $x$ is the solution to the given equation?",
    choices: [
      { id: "A", text: "$-20$" },
      // distractor: stops at x/5 = -4
      { id: "B", text: "$-4$" },
      // distractor: drops the negative sign
      { id: "C", text: "$20$" },
      // distractor: adds 6 instead of subtracting: x/5 = 8
      { id: "D", text: "$40$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Subtract $6$: $\\frac{x}{5} = -4$. Multiply by $5$: $x = -20$.\n\n**The Full Solution:**\nStep 1: Subtract $6$ from both sides: $\\frac{x}{5} = 2 - 6 = -4$.\nStep 2: Multiply both sides by $5$: $x = -20$.\nStep 3: Check: $\\frac{-20}{5} + 6 = -4 + 6 = 2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-4$): stops at $\\frac{x}{5} = -4$ without multiplying by $5$.\n* Choice C ($20$): drops the negative sign somewhere along the way.\n* Choice D ($40$): adds $6$ to $2$ instead of subtracting, reaching $\\frac{x}{5} = 8$.\n\n**Test Day Takeaway:** A negative result partway through is a signal to slow down, not a mistake. Finish the last step (multiply by the denominator) and keep the sign.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "two-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-172",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "fill-in",
    question: "$9 - 4x = 33$\n\nWhat value of $x$ is the solution to the given equation?",
    correctAnswer: "-6",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**The correct answer is $-6$.**\n\n**The Fast Way (~5s):** Subtract $9$: $-4x = 24$. Divide by $-4$: $x = -6$.\n\n**The Full Solution:**\nStep 1: Subtract $9$ from both sides: $-4x = 24$.\nStep 2: Divide both sides by $-4$, keeping the sign: $x = -6$.\nStep 3: Check: $9 - 4(-6) = 9 + 24 = 33$. $\\checkmark$\n\n**Common Mistakes:** Entering $6$ (dividing $24$ by $4$ instead of $-4$); entering $-10.5$ (adding $9$ instead of subtracting, getting $-4x = 42$); entering $24$ (stopping at $-4x = 24$).\n\n**Test Day Takeaway:** When the variable term is negative, divide by the negative coefficient. Substituting the answer back catches a dropped sign immediately.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "two-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-173",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$3(x - 5) = 24$\n\nWhat value of $x$ is the solution to the given equation?",
    choices: [
      // distractor: subtracts 5 from 8 instead of adding
      { id: "A", text: "$3$" },
      // distractor: stops at x - 5 = 8
      { id: "B", text: "$8$" },
      { id: "C", text: "$13$" },
      // distractor: never divides by 3: x - 5 = 24
      { id: "D", text: "$29$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Divide by $3$: $x - 5 = 8$. Add $5$: $x = 13$.\n\n**The Full Solution:**\nStep 1: Divide both sides by $3$ to remove the factor outside the parentheses: $x - 5 = 8$.\nStep 2: Add $5$ to both sides: $x = 13$.\nStep 3: Check: $3(13 - 5) = 3(8) = 24$. $\\checkmark$ (Distributing first also works: $3x - 15 = 24$, so $3x = 39$ and $x = 13$.)\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): subtracts $5$ from $8$ instead of adding.\n* Choice B ($8$): stops at $x - 5 = 8$ and reports $8$.\n* Choice D ($29$): adds $5$ to $24$ without ever dividing by $3$.\n\n**Test Day Takeaway:** When a number multiplies a parenthesis, dividing by it first avoids distributing. Either way, undo the outer operation before the inner one.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "two-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-174",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "fill-in",
    question: "$\\frac{4x + 6}{3} = 10$\n\nWhat value of $x$ is the solution to the given equation?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~6s):** Multiply by $3$: $4x + 6 = 30$. Subtract $6$: $4x = 24$. Divide: $x = 6$.\n\n**The Full Solution:**\nStep 1: Clear the fraction by multiplying both sides by $3$: $4x + 6 = 30$.\nStep 2: Subtract $6$: $4x = 24$. Divide by $4$: $x = 6$.\nStep 3: Check: $\\frac{4(6) + 6}{3} = \\frac{30}{3} = 10$. $\\checkmark$\n\n**Common Mistakes:** Entering $3$ (dividing only the $4x$ by $3$, as if the equation were $\\frac{4x}{3} + 6 = 10$, so $\\frac{4x}{3} = 4$); entering $9$ (adding $6$ to $30$ instead of subtracting); entering $24$ (stopping at $4x = 24$).\n\n**Test Day Takeaway:** A fraction bar groups everything above it. Multiply the whole numerator's equation by the denominator first, then solve the two-step equation that remains.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "two-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-175",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$\\frac{x + 4}{6} - 2 = -5$\n\nWhat value of $x$ is the solution to the given equation?",
    choices: [
      // distractor: subtracts 2 instead of adding: (x + 4)/6 = -7
      { id: "A", text: "$-46$" },
      { id: "B", text: "$-22$" },
      // distractor: adds 4 instead of subtracting at the end: -18 + 4
      { id: "C", text: "$-14$" },
      // distractor: drops the negative sign
      { id: "D", text: "$14$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~8s):** Add $2$: $\\frac{x + 4}{6} = -3$. Multiply by $6$: $x + 4 = -18$. Subtract $4$: $x = -22$.\n\n**The Full Solution:**\nStep 1: Isolate the fraction by adding $2$ to both sides: $\\frac{x + 4}{6} = -3$.\nStep 2: Multiply both sides by $6$: $x + 4 = -18$.\nStep 3: Subtract $4$: $x = -22$. Check: $\\frac{-22 + 4}{6} - 2 = \\frac{-18}{6} - 2 = -3 - 2 = -5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-46$): subtracts $2$ instead of adding, reaching $\\frac{x + 4}{6} = -7$ and $x = -46$.\n* Choice C ($-14$): reaches $x + 4 = -18$ but then adds $4$ instead of subtracting.\n* Choice D ($14$): loses the negative sign, ending with the opposite of a correct intermediate.\n\n**Test Day Takeaway:** Peel operations from the outside in: the $-2$ first, then the division by $6$, then the $+4$. Each undo is the inverse operation, and negatives stay negative until the check says otherwise.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "two-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-176",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "hard",
    type: "fill-in",
    question: "$\\frac{2}{5}(x + 3) = -4$\n\nWhat value of $x$ is the solution to the given equation?",
    correctAnswer: "-13",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**The correct answer is $-13$.**\n\n**The Fast Way (~8s):** Multiply by $\\frac{5}{2}$: $x + 3 = -10$. Subtract $3$: $x = -13$.\n\n**The Full Solution:**\nStep 1: Undo the multiplication by $\\frac{2}{5}$ by multiplying both sides by its reciprocal, $\\frac{5}{2}$: $x + 3 = -4 \\cdot \\frac{5}{2} = -10$.\nStep 2: Subtract $3$ from both sides: $x = -13$.\nStep 3: Check: $\\frac{2}{5}(-13 + 3) = \\frac{2}{5}(-10) = -4$. $\\checkmark$\n\n**Common Mistakes:** Entering $-11$ (multiplying $-4$ by $2$ only, getting $x + 3 = -8$); entering $-4.6$ (multiplying by $\\frac{2}{5}$ instead of its reciprocal, getting $x + 3 = -1.6$); entering $7$ (a dropped sign, from $x + 3 = 10$).\n\n**Test Day Takeaway:** A fraction multiplying a parenthesis is undone by its reciprocal. Do that before touching what is inside the parentheses.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "two-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 7/5: perpendicular-line-through-point (8 items) =====
  // Pattern: given a line and a point not on it, find an equation (or feature)
  // of the line through that point PERPENDICULAR to the given line.
  // Perpendicular slopes are negative reciprocals: m_perp = -1/m.
  // 7 test occurrences across PT6, PT12, M2Easy variants. SAT Pattern title
  // (verbatim): 'Perpendicular Line Through Point' →
  // kebab 'perpendicular-line-through-point'.
  {
    id: "bank-alg-177",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane, line $k$ is defined by $y = 4x - 1$. What is the slope of a line that is perpendicular to line $k$?",
    choices: [
      // distractor: negates without taking the reciprocal
      { id: "A", text: "$-4$" },
      { id: "B", text: "$-\\frac{1}{4}$" },
      // distractor: takes the reciprocal without negating
      { id: "C", text: "$\\frac{1}{4}$" },
      // distractor: reports the slope of line k itself (parallel)
      { id: "D", text: "$4$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Line $k$ has slope $4$. A perpendicular slope is the negative reciprocal: $-\\frac{1}{4}$.\n\n**The Full Solution:**\nStep 1: In $y = 4x - 1$, the coefficient of $x$ is the slope, so line $k$ has slope $4$.\nStep 2: Perpendicular lines have slopes whose product is $-1$. If $m$ is the perpendicular slope, $4m = -1$, so $m = -\\frac{1}{4}$.\nStep 3: Check: $4 \\cdot \\left(-\\frac{1}{4}\\right) = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): flips the sign but forgets to take the reciprocal.\n* Choice C ($\\frac{1}{4}$): takes the reciprocal but forgets to flip the sign.\n* Choice D ($4$): reports the slope of line $k$ itself, which is a parallel line, not a perpendicular one.\n\n**Test Day Takeaway:** Perpendicular means \"flip and negate\": reciprocal and opposite sign. Both changes are required; the product of the two slopes must be $-1$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "perpendicular-line-through-point",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-178",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "easy",
    type: "fill-in",
    question: "Line $\\ell$ is defined by $y = \\frac{1}{4}x - 2$. What is the slope of a line that is perpendicular to line $\\ell$ in the $xy$-plane?",
    correctAnswer: "-4",
    explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**The correct answer is $-4$.**\n\n**The Fast Way (~5s):** The slope of $\\ell$ is $\\frac{1}{4}$. Flip and negate: $-4$.\n\n**The Full Solution:**\nStep 1: From $y = \\frac{1}{4}x - 2$, the slope of line $\\ell$ is $\\frac{1}{4}$.\nStep 2: A perpendicular line has slope $m$ with $\\frac{1}{4} \\cdot m = -1$, so $m = -4$.\nStep 3: Check: $\\frac{1}{4} \\cdot (-4) = -1$. $\\checkmark$\n\n**Common Mistakes:** Entering $4$ (reciprocal without the sign change); entering $-\\frac{1}{4}$ (sign change without the reciprocal); entering $2$ or $-2$ (using the $y$-intercept, which has nothing to do with slope).\n\n**Test Day Takeaway:** The $y$-intercept is a distraction for a perpendicular-slope question. Take the coefficient of $x$, invert it, and change its sign.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "perpendicular-line-through-point",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-179",
    domain: "algebra",
    skills: ["writing-perpendicular-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Line $\\ell$ is shown in the $xy$-plane. Line $n$ is perpendicular to line $\\ell$ and passes through the point $(0, -3)$. Which of the following equations defines line $n$?",
    diagram: { type: "linearGraph", params: { slope: 0.5, yIntercept: 2, xRange: [-6, 6], yRange: [-4, 6], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 2], [4, 4]], label: "ℓ" } },
    choices: [
      // distractor: negates the slope of ℓ without taking the reciprocal
      { id: "A", text: "$y = -\\frac{1}{2}x - 3$" },
      { id: "B", text: "$y = -2x - 3$" },
      // distractor: uses the same slope as ℓ (a parallel line)
      { id: "C", text: "$y = \\frac{1}{2}x - 3$" },
      // distractor: takes the reciprocal without negating
      { id: "D", text: "$y = 2x - 3$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** From $(0, 2)$ and $(4, 4)$, line $\\ell$ has slope $\\frac{2}{4} = \\frac{1}{2}$. The perpendicular slope is $-2$, and the line through $(0, -3)$ has $y$-intercept $-3$: $y = -2x - 3$.\n\n**The Full Solution:**\nStep 1: Read the slope of $\\ell$ from the marked points: $\\frac{4 - 2}{4 - 0} = \\frac{1}{2}$.\nStep 2: The slope of a perpendicular line is the negative reciprocal: $-2$.\nStep 3: The point $(0, -3)$ is on the $y$-axis, so it is the $y$-intercept of line $n$. In slope-intercept form, $n$ is $y = -2x - 3$. Check: $\\frac{1}{2} \\cdot (-2) = -1$, and $(0, -3)$ satisfies $y = -2(0) - 3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -\\frac{1}{2}x - 3$): negates the slope of $\\ell$ but forgets the reciprocal.\n* Choice C ($y = \\frac{1}{2}x - 3$): keeps the slope of $\\ell$, producing a parallel line.\n* Choice D ($y = 2x - 3$): takes the reciprocal but forgets the sign change.\n\n**Test Day Takeaway:** Get the graphed slope from two lattice points, flip and negate it, then use the given point. A point with $x = 0$ hands you the intercept for free.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "perpendicular-line-through-point",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-180",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the $xy$-plane, line $p$ is defined by $3x - 4y = 8$. What is the slope of a line that is perpendicular to line $p$?",
    correctAnswer: "-4/3",
    explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**The correct answer is $-\\frac{4}{3}$.**\n\n**The Fast Way (~8s):** Solve for $y$: $-4y = -3x + 8$, so $y = \\frac{3}{4}x - 2$. The slope of $p$ is $\\frac{3}{4}$; the perpendicular slope is $-\\frac{4}{3}$.\n\n**The Full Solution:**\nStep 1: Convert to slope-intercept form. Subtract $3x$: $-4y = -3x + 8$. Divide by $-4$: $y = \\frac{3}{4}x - 2$.\nStep 2: The slope of line $p$ is $\\frac{3}{4}$.\nStep 3: A perpendicular line has slope $-\\frac{4}{3}$. Check: $\\frac{3}{4} \\cdot \\left(-\\frac{4}{3}\\right) = -1$. $\\checkmark$\n\n**Common Mistakes:** Entering $\\frac{4}{3}$ (reciprocal without the sign change); entering $-\\frac{3}{4}$ (reading the slope as $-\\frac{3}{4}$ from the coefficients $3$ and $-4$ without dividing by $-4$, then only negating); entering $\\frac{3}{4}$ (reporting the slope of $p$ itself instead of the perpendicular slope).\n\n**Test Day Takeaway:** In standard form $Ax + By = C$, the slope is $-\\frac{A}{B}$, here $-\\frac{3}{-4} = \\frac{3}{4}$. Convert first, then flip and negate.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "perpendicular-line-through-point",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-181",
    domain: "algebra",
    skills: ["writing-perpendicular-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of line $k$ is shown. Line $j$ is perpendicular to line $k$ and passes through the point $(6, 2)$. What is the $y$-coordinate of the $y$-intercept of line $j$?",
    diagram: { type: "linearGraph", params: { slope: 3, yIntercept: -3, xRange: [-4, 8], yRange: [-6, 8], gridInterval: 1, xTickInterval: 2, yTickInterval: 2, highlightPoints: [[0, -3], [2, 3]], label: "k" } },
    choices: [
      // distractor: copies the y-intercept of line k instead of building line j
      { id: "A", text: "$-3$" },
      // distractor: uses slope 1/3 (reciprocal without the sign change)
      { id: "B", text: "$0$" },
      { id: "C", text: "$4$" },
      // distractor: uses slope -3 (sign change without the reciprocal)
      { id: "D", text: "$20$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** From the graph, line $k$ rises $6$ over a run of $2$ between $(0, -3)$ and $(2, 3)$, so its slope is $3$. A perpendicular line has slope $-\\dfrac{1}{3}$. Through $(6, 2)$: $2 = -\\dfrac{1}{3}(6) + b$, so $b = 4$.\n\n**The Full Solution:**\nStep 1: Read the slope of line $k$ from two marked points: $\\dfrac{3 - (-3)}{2 - 0} = \\dfrac{6}{2} = 3$.\nStep 2: Perpendicular slopes are negative reciprocals, so line $j$ has slope $-\\dfrac{1}{3}$.\nStep 3: Write $y = -\\dfrac{1}{3}x + b$ and substitute $(6, 2)$: $2 = -2 + b$, so $b = 4$. Check: the point $(6, 2)$ satisfies $y = -\\dfrac{1}{3}x + 4$ since $-2 + 4 = 2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): reports the $y$-intercept of line $k$ itself, the line that was given, not line $j$.\n* Choice B ($0$): flips the slope to $\\dfrac{1}{3}$ but forgets the sign change; then $2 = 2 + b$ gives $b = 0$.\n* Choice D ($20$): changes the sign to $-3$ but forgets to take the reciprocal; then $2 = -18 + b$ gives $b = 20$.\n\n**Test Day Takeaway:** Read the slope from two clean lattice points on the graph, flip and negate it for the perpendicular, then push the given point through $y = mx + b$ to find $b$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "perpendicular-line-through-point",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-182",
    domain: "algebra",
    skills: ["writing-perpendicular-equation"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the $xy$-plane, line $t$ is perpendicular to the line with equation $y = \\dfrac{2}{5}x - 9$ and passes through the point $(4, -7)$. What is the $y$-coordinate of the point on line $t$ whose $x$-coordinate is $-2$?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~25s):** The perpendicular slope is $-\\dfrac{5}{2}$. Moving from $x = 4$ to $x = -2$ is a run of $-6$, so $y$ changes by $-\\dfrac{5}{2}(-6) = 15$: $-7 + 15 = 8$.\n\n**The Full Solution:**\nStep 1: The given line has slope $\\dfrac{2}{5}$, so line $t$ has slope $-\\dfrac{5}{2}$ (negative reciprocal).\nStep 2: Use point-slope form through $(4, -7)$: $y + 7 = -\\dfrac{5}{2}(x - 4)$, which simplifies to $y = -\\dfrac{5}{2}x + 3$.\nStep 3: Substitute $x = -2$: $y = -\\dfrac{5}{2}(-2) + 3 = 5 + 3 = 8$. Check: the slope from $(4, -7)$ to $(-2, 8)$ is $\\dfrac{15}{-6} = -\\dfrac{5}{2}$. $\\checkmark$\n\n**Common Mistakes:** Using slope $\\dfrac{5}{2}$ (reciprocal without the sign change) gives $y = -22$; using slope $-\\dfrac{2}{5}$ (sign change without the reciprocal) gives $y = -4.6$; reporting the $y$-intercept $3$ instead of the value at $x = -2$.\n\n**Test Day Takeaway:** Negative reciprocal first, then point-slope. When only one output is requested, you can skip the intercept entirely and track the change in $y$ over the change in $x$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "perpendicular-line-through-point",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-183",
    domain: "algebra",
    skills: ["writing-perpendicular-equation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, line $\\ell$ is perpendicular to the line with equation $3x + 4y = 24$ and passes through that line's $x$-intercept. What is the $y$-coordinate of the $y$-intercept of line $\\ell$?",
    choices: [
      { id: "A", text: "$-\\dfrac{32}{3}$" },
      // distractor: uses slope 3/4 (sign change without the reciprocal)
      { id: "B", text: "$-6$" },
      // distractor: reports the y-intercept of the given line
      { id: "C", text: "$6$" },
      // distractor: uses slope -4/3 (reciprocal without the sign change)
      { id: "D", text: "$\\dfrac{32}{3}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** The $x$-intercept of $3x + 4y = 24$ is $(8, 0)$. Rewriting gives slope $-\\dfrac{3}{4}$, so line $\\ell$ has slope $\\dfrac{4}{3}$. Through $(8, 0)$: $0 = \\dfrac{4}{3}(8) + b$, so $b = -\\dfrac{32}{3}$.\n\n**The Full Solution:**\nStep 1: Find the $x$-intercept by setting $y = 0$: $3x = 24$, so $x = 8$. Line $\\ell$ passes through $(8, 0)$.\nStep 2: Solve for $y$: $4y = -3x + 24$, so $y = -\\dfrac{3}{4}x + 6$. The slope is $-\\dfrac{3}{4}$; the perpendicular slope is $\\dfrac{4}{3}$.\nStep 3: Substitute $(8, 0)$ into $y = \\dfrac{4}{3}x + b$: $0 = \\dfrac{32}{3} + b$, so $b = -\\dfrac{32}{3}$. Check: at $x = 8$, $\\dfrac{32}{3} - \\dfrac{32}{3} = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-6$): uses slope $\\dfrac{3}{4}$, changing the sign but forgetting to take the reciprocal; then $0 = 6 + b$ gives $b = -6$.\n* Choice C ($6$): reports the $y$-intercept of the given line, which the question never asks for.\n* Choice D ($\\dfrac{32}{3}$): uses slope $-\\dfrac{4}{3}$, taking the reciprocal but forgetting to change the sign.\n\n**Test Day Takeaway:** When a line is given in standard form, extract two things before anything else: the slope (solve for $y$) and whichever intercept the question names (set the other variable to $0$).",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "perpendicular-line-through-point",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-184",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "hard",
    type: "fill-in",
    question: "In the $xy$-plane, line $a$ passes through the points $(2, c)$ and $(5, c + 9)$, where $c$ is a constant. Line $b$ is perpendicular to line $a$ and passes through the point $(0, c)$. What is the slope of line $b$?",
    correctAnswer: "-1/3",
    explanation: "**SAT Pattern: Perpendicular Line Through Point**\n\n**The correct answer is $-\\dfrac{1}{3}$.**\n\n**The Fast Way (~20s):** The $c$ cancels in the rise: line $a$ rises $9$ over a run of $3$, so its slope is $3$. The perpendicular slope is $-\\dfrac{1}{3}$.\n\n**The Full Solution:**\nStep 1: Slope of line $a$: $\\dfrac{(c + 9) - c}{5 - 2} = \\dfrac{9}{3} = 3$. The unknown constant subtracts away.\nStep 2: Perpendicular lines have slopes whose product is $-1$, so line $b$ has slope $-\\dfrac{1}{3}$.\nStep 3: The point $(0, c)$ fixes where line $b$ sits but has no effect on its slope. Check: $3 \\cdot \\left(-\\dfrac{1}{3}\\right) = -1$. $\\checkmark$\n\n**Common Mistakes:** Entering $3$ (the slope of line $a$); entering $\\dfrac{1}{3}$ (reciprocal without the sign change); deciding the slope cannot be found because $c$ is unknown; entering $-3$ (sign change without the reciprocal).\n\n**Test Day Takeaway:** A parameter that appears in both $y$-coordinates cancels out of the slope. Compute the slope symbolically, then apply the negative reciprocal.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "perpendicular-line-through-point",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 8/1: one-step-linear-equation (8 items) =====
  // Pattern: ax = b or x + a = b, solve in ONE step. 7 test occurrences across
  // M2Easy variants. Title verbatim: 'One-Step Linear Equation'.
  {
    id: "bank-alg-185",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "What value of $x$ is the solution to the equation $10x - 4x = 84$?",
    choices: [
      // distractor: adds the coefficients to get 14x = 84
      { id: "A", text: "$6$" },
      { id: "B", text: "$14$" },
      // distractor: subtracts 6 from 84 instead of dividing
      { id: "C", text: "$78$" },
      // distractor: multiplies 84 by 6 instead of dividing
      { id: "D", text: "$504$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Combine like terms: $10x - 4x = 6x$. Then $6x = 84$ gives $x = 14$.\n\n**The Full Solution:**\nStep 1: The left side has two like terms. Subtract the coefficients: $10x - 4x = 6x$.\nStep 2: The equation becomes $6x = 84$. Divide both sides by $6$: $x = 14$.\nStep 3: Check: $10(14) - 4(14) = 140 - 56 = 84$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): adds the coefficients, $10 + 4 = 14$, then solves $14x = 84$.\n* Choice C ($78$): subtracts $6$ from $84$ instead of dividing by $6$.\n* Choice D ($504$): multiplies $84$ by $6$ instead of dividing.\n\n**Test Day Takeaway:** Collapse like terms before touching the other side. Then undo the multiplication with a division, never a subtraction.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "one-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-186",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "easy",
    type: "fill-in",
    question: "What value of $w$ is the solution to the equation $w + 23 = 15$?",
    correctAnswer: "-8",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**The correct answer is $-8$.**\n\n**The Fast Way (~5s):** Subtract $23$ from both sides: $w = 15 - 23 = -8$.\n\n**The Full Solution:**\nStep 1: The variable has $23$ added to it, so undo the addition by subtracting $23$ from both sides.\nStep 2: $w = 15 - 23 = -8$.\nStep 3: Check: $-8 + 23 = 15$. $\\checkmark$\n\n**Common Mistakes:** Entering $8$ (dropping the negative sign because the answer \"should\" be positive); entering $38$ (adding $23$ instead of subtracting); entering $-38$ (subtracting in the wrong direction).\n\n**Test Day Takeaway:** A one-step equation can have a negative solution. Compute $15 - 23$ carefully and enter the minus sign.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "one-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-187",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "What value of $k$ is the solution to the equation $\\dfrac{k}{8} = 12$?",
    choices: [
      // distractor: divides 12 by 8 instead of multiplying
      { id: "A", text: "$1.5$" },
      // distractor: subtracts 8 from 12
      { id: "B", text: "$4$" },
      // distractor: adds 8 to 12
      { id: "C", text: "$20$" },
      { id: "D", text: "$96$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** $k$ is divided by $8$, so multiply both sides by $8$: $k = 96$.\n\n**The Full Solution:**\nStep 1: The equation $\\dfrac{k}{8} = 12$ says $k$ divided by $8$ equals $12$.\nStep 2: Undo the division by multiplying both sides by $8$: $k = 12 \\cdot 8 = 96$.\nStep 3: Check: $\\dfrac{96}{8} = 12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1.5$): divides $12$ by $8$, applying the operation a second time instead of undoing it.\n* Choice B ($4$): subtracts $8$ from $12$, treating the fraction bar like a minus sign.\n* Choice C ($20$): adds $8$ to $12$, treating the fraction bar like a plus sign.\n\n**Test Day Takeaway:** A fraction bar under the variable is a division. Undo it by multiplying, and expect the result to be larger than the right side.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "one-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-188",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "easy",
    type: "fill-in",
    question: "What value of $m$ is the solution to the equation $6m + m = 91$?",
    correctAnswer: "13",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**The correct answer is $13$.**\n\n**The Fast Way (~5s):** $6m + m = 7m$, so $7m = 91$ and $m = 13$.\n\n**The Full Solution:**\nStep 1: The term $m$ has an unwritten coefficient of $1$, so $6m + m = 7m$.\nStep 2: Divide both sides of $7m = 91$ by $7$: $m = 13$.\nStep 3: Check: $6(13) + 13 = 78 + 13 = 91$. $\\checkmark$\n\n**Common Mistakes:** Treating $m$ as $0m$ and solving $6m = 91$ (giving a non-integer); reading $6m + m$ as $6m^2$; subtracting $7$ from $91$ to get $84$.\n\n**Test Day Takeaway:** A bare variable carries a coefficient of $1$. Add it in before dividing.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "one-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-189",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the equation $3(x - 4) = 27$, what is the value of the expression $x - 4$?",
    choices: [
      // distractor: divides to get 9, then subtracts 4 again
      { id: "A", text: "$5$" },
      { id: "B", text: "$9$" },
      // distractor: solves for x instead of the requested expression x - 4
      { id: "C", text: "$13$" },
      // distractor: subtracts 4 from 27 instead of dividing by 3
      { id: "D", text: "$23$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Treat $x - 4$ as a single unknown. Divide both sides by $3$: $x - 4 = 9$. Done; do not solve for $x$.\n\n**The Full Solution:**\nStep 1: The question asks for $x - 4$, which is exactly the quantity multiplied by $3$ on the left side.\nStep 2: Divide both sides by $3$: $x - 4 = \\dfrac{27}{3} = 9$.\nStep 3: Check: $3(9) = 27$. $\\checkmark$ (For the record, $x = 13$, but that is not what was asked.)\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): correctly gets $9$, then subtracts $4$ again, applying the $-4$ twice.\n* Choice C ($13$): solves all the way to $x$ and reports it, though the question asks for $x - 4$.\n* Choice D ($23$): subtracts $4$ from $27$ instead of dividing by $3$.\n\n**Test Day Takeaway:** When the question asks for an expression, look for that expression as a unit in the equation. One division may finish the problem; solving for $x$ is a wasted step and a common wrong answer.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "one-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-190",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "fill-in",
    question: "What value of $p$ is the solution to the equation $\\dfrac{3}{8}p = 27$?",
    correctAnswer: "72",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**The correct answer is $72$.**\n\n**The Fast Way (~10s):** Multiply both sides by the reciprocal $\\dfrac{8}{3}$: $p = 27 \\cdot \\dfrac{8}{3} = 9 \\cdot 8 = 72$.\n\n**The Full Solution:**\nStep 1: The coefficient of $p$ is $\\dfrac{3}{8}$. Undo it in one move by multiplying both sides by $\\dfrac{8}{3}$.\nStep 2: $p = \\dfrac{27 \\cdot 8}{3}$. Cancel the $3$ first: $\\dfrac{27}{3} = 9$, so $p = 9 \\cdot 8 = 72$.\nStep 3: Check: $\\dfrac{3}{8}(72) = 3 \\cdot 9 = 27$. $\\checkmark$\n\n**Common Mistakes:** Multiplying by $\\dfrac{3}{8}$ instead of $\\dfrac{8}{3}$ (giving $10.125$); multiplying by $8$ but forgetting to divide by $3$ (giving $216$); dividing by $8$ and multiplying by $3$ (giving $10.125$ again).\n\n**Test Day Takeaway:** A fraction coefficient is undone by its reciprocal in a single step. Cancel before multiplying to keep the arithmetic small.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "one-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-191",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "What value of $x$ is the solution to the equation $x - \\dfrac{5}{6} = \\dfrac{1}{3}$?",
    choices: [
      // distractor: subtracts 5/6 from 1/3 instead of adding
      { id: "A", text: "$-\\dfrac{1}{2}$" },
      // distractor: computes 5/6 - 1/3, reversing the sign
      { id: "B", text: "$\\dfrac{1}{2}$" },
      // distractor: adds numerators and denominators separately: (1+5)/(3+6)
      { id: "C", text: "$\\dfrac{2}{3}$" },
      { id: "D", text: "$\\dfrac{7}{6}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Add $\\dfrac{5}{6}$ to both sides: $x = \\dfrac{1}{3} + \\dfrac{5}{6} = \\dfrac{2}{6} + \\dfrac{5}{6} = \\dfrac{7}{6}$.\n\n**The Full Solution:**\nStep 1: The variable has $\\dfrac{5}{6}$ subtracted from it, so undo that by adding $\\dfrac{5}{6}$ to both sides.\nStep 2: Use the common denominator $6$: $\\dfrac{1}{3} = \\dfrac{2}{6}$, so $x = \\dfrac{2}{6} + \\dfrac{5}{6} = \\dfrac{7}{6}$.\nStep 3: Check: $\\dfrac{7}{6} - \\dfrac{5}{6} = \\dfrac{2}{6} = \\dfrac{1}{3}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\dfrac{1}{2}$): subtracts $\\dfrac{5}{6}$ from $\\dfrac{1}{3}$, repeating the operation instead of undoing it.\n* Choice B ($\\dfrac{1}{2}$): computes $\\dfrac{5}{6} - \\dfrac{1}{3}$, reversing the sign of the result.\n* Choice C ($\\dfrac{2}{3}$): adds numerators and denominators separately, $\\dfrac{1 + 5}{3 + 6} = \\dfrac{6}{9}$.\n\n**Test Day Takeaway:** Undo a subtraction with an addition, and add fractions over a common denominator. A solution larger than $1$ is fine here because $x$ must exceed the $\\dfrac{5}{6}$ being taken from it.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "one-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-192",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "hard",
    type: "fill-in",
    question: "What value of $x$ is the solution to the equation $\\dfrac{3x}{4} - \\dfrac{x}{6} = 7$?",
    correctAnswer: "12",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~20s):** Over the common denominator $12$: $\\dfrac{9x}{12} - \\dfrac{2x}{12} = \\dfrac{7x}{12}$. So $\\dfrac{7x}{12} = 7$ and $x = 12$.\n\n**The Full Solution:**\nStep 1: Both terms on the left are multiples of $x$. Combine them over the least common denominator of $4$ and $6$, which is $12$: $\\dfrac{3x}{4} = \\dfrac{9x}{12}$ and $\\dfrac{x}{6} = \\dfrac{2x}{12}$.\nStep 2: The equation becomes $\\dfrac{7x}{12} = 7$. Multiply both sides by $\\dfrac{12}{7}$: $x = 12$.\nStep 3: Check: $\\dfrac{3(12)}{4} - \\dfrac{12}{6} = 9 - 2 = 7$. $\\checkmark$\n\n**Common Mistakes:** Subtracting the denominators to get $\\dfrac{2x}{2}$; combining as $\\dfrac{3x - x}{4 - 6}$; clearing only one denominator; stopping at $7x = 84$ and entering $84$.\n\n**Test Day Takeaway:** Fractional like terms combine exactly as integer ones do once they share a denominator. Alternatively, multiply the whole equation by the LCD ($12$) to clear fractions in one move: $9x - 2x = 84$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "one-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 8/2: linear-system-by-substitution (8 items) =====
  // Pattern: both equations in y = ... form, set right-hand sides equal. 6 test
  // occurrences across M2Easy variants. SAT Pattern title (verbatim):
  // 'Linear System by Substitution'.
  // Note: distinct from 'System of Equations — Substitution' (covered separately)
  // because authoring inconsistency in test bundles uses both titles.
  {
    id: "bank-alg-193",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The solution to the system of equations $y = 4x$ and $y = x + 24$ is $(x, y)$. What is the value of $y$?",
    choices: [
      // distractor: reports x instead of y
      { id: "A", text: "$8$" },
      // distractor: reports the constant term of the second equation
      { id: "B", text: "$24$" },
      { id: "C", text: "$32$" },
      // distractor: substitutes 24 for x in y = 4x
      { id: "D", text: "$96$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Both equations give $y$, so set them equal: $4x = x + 24$, so $3x = 24$ and $x = 8$. Then $y = 4(8) = 32$.\n\n**The Full Solution:**\nStep 1: Substitute $4x$ for $y$ in the second equation: $4x = x + 24$.\nStep 2: Subtract $x$ from both sides: $3x = 24$, so $x = 8$.\nStep 3: Back-substitute: $y = 4(8) = 32$. Check with the second equation: $8 + 24 = 32$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): reports $x$; the question asks for $y$.\n* Choice B ($24$): reports the constant from the second equation as if it were the answer.\n* Choice D ($96$): substitutes $24$ in for $x$ in $y = 4x$ instead of solving first.\n\n**Test Day Takeaway:** When both equations are solved for $y$, set the right sides equal, solve for $x$, then plug back in to get the variable actually requested.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-system-by-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-194",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "easy",
    type: "fill-in",
    question: "The solution to the system of equations $x = 3y$ and $2x + y = 42$ is $(x, y)$. What is the value of $x$?",
    correctAnswer: "18",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**The correct answer is $18$.**\n\n**The Fast Way (~15s):** Replace $x$ with $3y$: $2(3y) + y = 7y = 42$, so $y = 6$ and $x = 3(6) = 18$.\n\n**The Full Solution:**\nStep 1: The first equation gives $x$ in terms of $y$. Substitute into the second: $2(3y) + y = 42$.\nStep 2: Combine like terms: $6y + y = 7y$, so $7y = 42$ and $y = 6$.\nStep 3: Back-substitute: $x = 3(6) = 18$. Check: $2(18) + 6 = 42$. $\\checkmark$\n\n**Common Mistakes:** Entering $6$ (the value of $y$, not $x$); substituting $3x$ for $y$ instead of $3y$ for $x$; forgetting to multiply $3y$ by $2$ and solving $3y + y = 42$.\n\n**Test Day Takeaway:** Substitute the variable that is already isolated, then read the question again before entering: the system asks for $x$, so finish the back-substitution.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-system-by-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-195",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The solution to the system of equations $y = 2x + 9$ and $y = -3x - 6$ is $(x, y)$. What is the value of $y$?",
    choices: [
      // distractor: stops at 5x = -15 and reports the right side
      { id: "A", text: "$-15$" },
      // distractor: reports x instead of y
      { id: "B", text: "$-3$" },
      { id: "C", text: "$3$" },
      // distractor: back-substitutes x = 3 instead of x = -3
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Set the expressions for $y$ equal: $2x + 9 = -3x - 6$, so $5x = -15$ and $x = -3$. Then $y = 2(-3) + 9 = 3$.\n\n**The Full Solution:**\nStep 1: Substitute $2x + 9$ for $y$ in the second equation: $2x + 9 = -3x - 6$.\nStep 2: Add $3x$ to both sides and subtract $9$: $5x = -15$, so $x = -3$.\nStep 3: Back-substitute: $y = 2(-3) + 9 = 3$. Check with the other equation: $-3(-3) - 6 = 9 - 6 = 3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-15$): stops at $5x = -15$ and reports that right side.\n* Choice B ($-3$): reports $x$; the question asks for $y$.\n* Choice D ($15$): drops the sign on $x$ and computes $2(3) + 9$.\n\n**Test Day Takeaway:** After solving for $x$, back-substitute carefully with its sign, and verify in the equation you did not use.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-system-by-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-196",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "medium",
    type: "fill-in",
    question: "The solution to the system of equations $3x + 2y = 32$ and $y = x - 4$ is $(x, y)$. What is the value of $y$?",
    correctAnswer: "4",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~15s):** Replace $y$ with $x - 4$: $3x + 2(x - 4) = 32$, so $5x - 8 = 32$, $x = 8$, and $y = 8 - 4 = 4$.\n\n**The Full Solution:**\nStep 1: The second equation isolates $y$, so substitute into the first: $3x + 2(x - 4) = 32$.\nStep 2: Distribute and combine: $3x + 2x - 8 = 32$, so $5x = 40$ and $x = 8$.\nStep 3: Back-substitute: $y = 8 - 4 = 4$. Check: $3(8) + 2(4) = 24 + 8 = 32$. $\\checkmark$\n\n**Common Mistakes:** Entering $8$ (the value of $x$); forgetting to distribute the $2$ to the $-4$ and solving $5x - 4 = 32$; substituting $x - 4$ for $x$ instead of for $y$.\n\n**Test Day Takeaway:** Distribute the coefficient across the entire substituted expression, including its constant, before combining like terms.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-system-by-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-197",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The solution to the system of equations $y = \\dfrac{1}{3}x + 6$ and $y = 2x - 4$ is $(x, y)$. What is the value of $xy$?",
    choices: [
      // distractor: reports x alone
      { id: "A", text: "$6$" },
      // distractor: reports y alone
      { id: "B", text: "$8$" },
      // distractor: adds x and y instead of multiplying
      { id: "C", text: "$14$" },
      { id: "D", text: "$48$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Set $\\dfrac{1}{3}x + 6 = 2x - 4$. Multiply by $3$: $x + 18 = 6x - 12$, so $5x = 30$ and $x = 6$. Then $y = 2(6) - 4 = 8$, and $xy = 48$.\n\n**The Full Solution:**\nStep 1: Substitute $2x - 4$ for $y$ in the first equation: $2x - 4 = \\dfrac{1}{3}x + 6$.\nStep 2: Clear the fraction by multiplying every term by $3$: $6x - 12 = x + 18$, so $5x = 30$ and $x = 6$.\nStep 3: Back-substitute: $y = 2(6) - 4 = 8$. Check: $\\dfrac{1}{3}(6) + 6 = 8$. $\\checkmark$ The product is $xy = 6 \\cdot 8 = 48$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): reports $x$ alone.\n* Choice B ($8$): reports $y$ alone.\n* Choice C ($14$): adds the coordinates, $6 + 8$, instead of multiplying them.\n\n**Test Day Takeaway:** Clear a fractional coefficient by multiplying the whole equation by its denominator, then compute exactly the combination the question names.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-system-by-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-198",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the $xy$-plane, the graphs of the equations $y = -2x + 13$ and $y = 4x - 11$ intersect at the point $(p, q)$. What is the value of $p$?",
    correctAnswer: "4",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~15s):** At the intersection both equations give the same $y$: $-2x + 13 = 4x - 11$, so $24 = 6x$ and $x = 4$. That is $p$.\n\n**The Full Solution:**\nStep 1: The intersection point satisfies both equations, so substitute one expression for $y$ into the other: $-2x + 13 = 4x - 11$.\nStep 2: Add $2x$ and $11$ to both sides: $24 = 6x$, so $x = 4$.\nStep 3: The $x$-coordinate of the intersection is $p = 4$. Check: $-2(4) + 13 = 5$ and $4(4) - 11 = 5$, so both lines pass through $(4, 5)$. $\\checkmark$\n\n**Common Mistakes:** Entering $5$ (the $y$-coordinate $q$); solving $-2x + 13 = 4x - 11$ as $2x = 2$ by mishandling signs; adding $13$ and $11$ to get $2x = 24$.\n\n**Test Day Takeaway:** \"Intersect at $(p, q)$\" is a system in disguise. Set the $y$-expressions equal, solve for $x$, and report the coordinate that was asked for.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-system-by-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-199",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The system of equations $y = cx - 8$ and $y = -2x + d$, where $c$ and $d$ are constants, has the solution $(-3, 10)$. What is the value of $cd$?",
    choices: [
      { id: "A", text: "$-24$" },
      // distractor: computes c - d instead of cd
      { id: "B", text: "$-10$" },
      // distractor: computes c + d instead of cd
      { id: "C", text: "$-2$" },
      // distractor: drops the negative sign on c
      { id: "D", text: "$24$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Substitute $(-3, 10)$ into each equation. First: $10 = -3c - 8$, so $c = -6$. Second: $10 = 6 + d$, so $d = 4$. Then $cd = -24$.\n\n**The Full Solution:**\nStep 1: A solution satisfies both equations, so put $x = -3$, $y = 10$ into $y = cx - 8$: $10 = -3c - 8$, so $-3c = 18$ and $c = -6$.\nStep 2: Put the same point into $y = -2x + d$: $10 = -2(-3) + d = 6 + d$, so $d = 4$.\nStep 3: $cd = (-6)(4) = -24$. Check: $y = -6(-3) - 8 = 10$ and $y = -2(-3) + 4 = 10$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-10$): computes $c - d = -6 - 4$ instead of the product.\n* Choice C ($-2$): computes $c + d = -6 + 4$ instead of the product.\n* Choice D ($24$): solves $-3c = 18$ as $c = 6$, dropping the sign.\n\n**Test Day Takeaway:** A given solution point turns each equation into a one-variable equation for its constant. Solve them separately, then combine exactly as the question directs.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-system-by-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-200",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "hard",
    type: "fill-in",
    question: "In the $xy$-plane, the graphs of $y = kx + 3$ and $y = -x + 15$, where $k$ is a constant, intersect at a point whose $y$-coordinate is $-5$. What is the value of $k$?",
    correctAnswer: "-2/5",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**The correct answer is $-\\dfrac{2}{5}$.**\n\n**The Fast Way (~25s):** Use the line without $k$ to find $x$: $-5 = -x + 15$, so $x = 20$. Then $-5 = 20k + 3$ gives $k = -\\dfrac{8}{20} = -\\dfrac{2}{5}$.\n\n**The Full Solution:**\nStep 1: The intersection point lies on $y = -x + 15$ with $y = -5$: $-5 = -x + 15$, so $x = 20$. The point is $(20, -5)$.\nStep 2: That point also lies on $y = kx + 3$: $-5 = 20k + 3$, so $20k = -8$.\nStep 3: $k = -\\dfrac{8}{20} = -\\dfrac{2}{5}$. Check: $-\\dfrac{2}{5}(20) + 3 = -8 + 3 = -5$. $\\checkmark$\n\n**Common Mistakes:** Substituting $y = -5$ into the $k$ equation first and getting stuck with two unknowns; solving $-5 = -x + 15$ as $x = -20$; entering $\\dfrac{2}{5}$ with the sign dropped; entering $-8$ (stopping at $20k = -8$).\n\n**Test Day Takeaway:** When one coordinate of an intersection is given, use the fully known line to recover the other coordinate first. The parameter then falls out of a single substitution.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-system-by-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 9/3: slope-as-rate-of-change-in-context (8 items) =====
  // 5 test occurrences across M2Easy variants.
  {
    id: "bank-alg-201",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The graph shows the amount $y$, in gallons, of fuel in a generator's tank $x$ hours after the generator is started. Which of the following is the best interpretation of the slope of the graph in this context?",
    diagram: { type: "linearGraph", params: { slope: -2, yIntercept: 24, xRange: [0, 14], yRange: [0, 28], gridInterval: 2, xTickInterval: 2, yTickInterval: 4, highlightPoints: [[0, 24], [12, 0]] } },
    choices: [
      { id: "A", text: "The generator uses $2$ gallons of fuel per hour." },
      // distractor: interprets the y-intercept, not the slope
      { id: "B", text: "The tank holds $24$ gallons of fuel when the generator is started." },
      // distractor: reads the x-intercept value as a rate
      { id: "C", text: "The generator uses $12$ gallons of fuel per hour." },
      // distractor: interprets the x-intercept, not the slope
      { id: "D", text: "The generator runs for $12$ hours before the tank is empty." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The line drops from $(0, 24)$ to $(12, 0)$: a change of $-24$ gallons over $12$ hours, so the slope is $-2$ gallons per hour. The generator uses $2$ gallons each hour.\n\n**The Full Solution:**\nStep 1: Slope is the change in $y$ (gallons) per one-unit change in $x$ (hours), so its units are gallons per hour.\nStep 2: Using the two marked points, slope $= \\dfrac{0 - 24}{12 - 0} = -2$.\nStep 3: A slope of $-2$ means the fuel decreases by $2$ gallons for each hour the generator runs. Check: after $12$ hours, $24 - 2(12) = 0$ gallons, matching the graph. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: describes the $y$-intercept, $24$ gallons at $x = 0$, not the rate of change.\n* Choice C: takes the $x$-intercept value $12$ and presents it as a rate; the fuel does not drop $12$ gallons per hour.\n* Choice D: describes the $x$-intercept, the time at which the fuel reaches $0$, not the slope.\n\n**Test Day Takeaway:** Slope is always \"change in the vertical quantity per one unit of the horizontal quantity.\" Read its units off the axes and compute it from two clean points on the line.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "slope-as-rate-of-change-in-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-202",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "easy",
    type: "fill-in",
    question: "A technician models the temperature $T$, in degrees Celsius, of a kiln $m$ minutes after it is switched on using the equation $T = 9.5m + 20$. According to the model, by how many degrees Celsius does the temperature of the kiln increase each minute?",
    correctAnswer: "9.5",
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $9.5$.**\n\n**The Fast Way (~10s):** In $T = 9.5m + 20$, the coefficient of $m$ is the change in $T$ per one minute: $9.5$ degrees Celsius per minute.\n\n**The Full Solution:**\nStep 1: The equation is in slope-intercept form, $T = (\\text{slope}) \\cdot m + (\\text{intercept})$.\nStep 2: The slope, $9.5$, is the change in temperature for each additional minute; the intercept, $20$, is the temperature at $m = 0$.\nStep 3: Check with two consecutive minutes: at $m = 1$, $T = 29.5$; at $m = 2$, $T = 39$. The difference is $9.5$. $\\checkmark$\n\n**Common Mistakes:** Entering $20$ (the starting temperature, not the rate); entering $29.5$ (the temperature after one minute, which includes the intercept); rounding $9.5$ to $10$.\n\n**Test Day Takeaway:** \"By how much per unit\" is always the slope. The intercept is where the model starts, not how fast it moves.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "slope-as-rate-of-change-in-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-203",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The scatterplot shows the mass $y$, in grams, of a crystal $x$ days after it was seeded in a solution, along with the line of best fit $\\hat{y} = 1.8x + 3$. Which of the following is the best interpretation of the slope of the line of best fit in this context?",
    diagram: { type: "scatterplot", params: { points: [[1, 5.2], [2, 6.1], [3, 9], [4, 9.7], [5, 12.6], [6, 13.1], [7, 16.2], [8, 17], [9, 20.1], [10, 20.4]], xMin: 0, xMax: 10, yMin: 0, yMax: 24, xGridStep: 1, yGridStep: 2, xLabelStep: 2, yLabelStep: 4, xLabel: "Days since seeding", yLabel: "Mass (grams)", bestFitLine: { slope: 1.8, intercept: 3 } } },
    choices: [
      // distractor: describes the y-intercept (3 grams), not the slope
      { id: "A", text: "The predicted mass of the crystal, in grams, on the day it was seeded" },
      // distractor: inverts the rate: days per gram instead of grams per day
      { id: "B", text: "The predicted number of days for the mass of the crystal to increase by $1$ gram" },
      // distractor: misreads the slope as an x-value to plug in
      { id: "C", text: "The predicted mass of the crystal, in grams, $1.8$ days after it was seeded" },
      { id: "D", text: "The predicted increase in the mass of the crystal, in grams, for each additional day" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** In $\\hat{y} = 1.8x + 3$, the slope $1.8$ is the predicted change in mass (grams) for each one-day increase in $x$: an increase of $1.8$ grams per day.\n\n**The Full Solution:**\nStep 1: On the scatterplot, $x$ is days and $y$ is grams, so the slope of the line of best fit has units of grams per day.\nStep 2: The slope $1.8$ is positive, so the predicted mass increases by $1.8$ grams for each additional day.\nStep 3: Check against the line: from $x = 2$ to $x = 3$ the predicted mass goes from $6.6$ to $8.4$ grams, a change of $1.8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A: the mass on the seeding day is the $y$-intercept, $3$ grams, not the slope.\n* Choice B: inverts the rate; days per gram would be $\\dfrac{1}{1.8}$, not $1.8$.\n* Choice C: treats $1.8$ as an input to the model instead of as the rate itself.\n\n**Test Day Takeaway:** The slope of a best-fit line is the predicted change in $y$ per one-unit change in $x$. Say it with units, and the right choice is the one that names the per-unit change.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "slope-as-rate-of-change-in-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-204",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "medium",
    type: "fill-in",
    question: "The scatterplot shows the fuel efficiency $y$, in miles per gallon, of a delivery van for several trips, plotted against the cargo load $x$, in hundreds of pounds, carried on each trip. The line of best fit is $\\hat{y} = -0.6x + 24$. According to the line of best fit, by how many miles per gallon is the fuel efficiency predicted to decrease for each additional hundred pounds of cargo?",
    diagram: { type: "scatterplot", params: { points: [[1, 23.9], [2, 22.4], [3, 22.6], [4, 21.1], [5, 22], [6, 20.3], [7, 20.6], [8, 18.9], [9, 19.5], [10, 17.6]], xMin: 0, xMax: 10, yMin: 16, yMax: 26, xGridStep: 1, yGridStep: 1, xLabelStep: 2, yLabelStep: 2, xLabel: "Cargo load (hundreds of pounds)", yLabel: "Fuel efficiency (mpg)", bestFitLine: { slope: -0.6, intercept: 24 } } },
    correctAnswer: "0.6",
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $0.6$.**\n\n**The Fast Way (~10s):** The slope of $\\hat{y} = -0.6x + 24$ is $-0.6$ miles per gallon per hundred pounds. The question asks for the size of the decrease, so the answer is $0.6$.\n\n**The Full Solution:**\nStep 1: The slope of the line of best fit is the predicted change in $y$ (miles per gallon) for each one-unit increase in $x$ (one hundred pounds of cargo).\nStep 2: The slope is $-0.6$; the negative sign means fuel efficiency goes down as cargo goes up.\nStep 3: A decrease of $0.6$ miles per gallon per hundred pounds. Check: the predicted value at $x = 5$ is $21$ and at $x = 6$ is $20.4$, a drop of $0.6$. $\\checkmark$\n\n**Common Mistakes:** Entering $24$ (the intercept, the predicted efficiency with no cargo); entering $-0.6$ when the question asks \"by how many\" (a decrease of $0.6$, entered as a positive amount); entering $6$ by misplacing the decimal.\n\n**Test Day Takeaway:** The slope carries the rate; its sign tells you the direction. When a question says \"decrease by how many,\" report the magnitude.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "slope-as-rate-of-change-in-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-205",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table shows the height $h$, in centimeters, of a bamboo shoot $d$ days after it was planted. The relationship between $d$ and $h$ is linear. Which of the following is the best interpretation of the slope of the graph of this relationship in the $dh$-plane?",
    diagram: { type: "dataTable", params: { headers: ["d (days)", "h (cm)"], rows: [["2", "41"], ["5", "62"], ["9", "90"]] } },
    choices: [
      // distractor: inverts the slope (run over rise)
      { id: "A", text: "The height of the shoot increases by $\\dfrac{1}{7}$ centimeter each day." },
      // distractor: reports the change in d alone
      { id: "B", text: "The height of the shoot increases by $3$ centimeters each day." },
      { id: "C", text: "The height of the shoot increases by $7$ centimeters each day." },
      // distractor: reports the change in h alone, without dividing by the change in d
      { id: "D", text: "The height of the shoot increases by $21$ centimeters each day." }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Between the first two rows, $h$ rises $21$ over $3$ days: slope $= 7$ centimeters per day.\n\n**The Full Solution:**\nStep 1: Slope is $\\dfrac{\\text{change in } h}{\\text{change in } d}$. From $(2, 41)$ to $(5, 62)$: $\\dfrac{62 - 41}{5 - 2} = \\dfrac{21}{3} = 7$.\nStep 2: Because the relationship is linear, every pair of rows gives the same slope. Confirm with $(5, 62)$ and $(9, 90)$: $\\dfrac{90 - 62}{9 - 5} = \\dfrac{28}{4} = 7$. $\\checkmark$\nStep 3: The slope's units are centimeters per day, so the shoot grows $7$ centimeters each day.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{1}{7}$): divides run by rise, the reciprocal of the slope.\n* Choice B ($3$): reports the change in $d$ between the first two rows without dividing.\n* Choice D ($21$): reports the change in $h$ between the first two rows without dividing by the $3$ days.\n\n**Test Day Takeaway:** From a table, slope is rise over run using any two rows, and a linear relationship guarantees the same value from every pair. Attach the units to interpret it.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "slope-as-rate-of-change-in-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-206",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "medium",
    type: "fill-in",
    question: "The table gives the monthly cost $C$, in dollars, of a mobile data plan predicted by a linear model for three amounts of data used, $g$, in gigabytes. According to the model, by how many dollars does the predicted monthly cost increase for each additional gigabyte of data used?",
    diagram: { type: "dataTable", params: { headers: ["g (gigabytes)", "C (dollars)"], rows: [["4", "31"], ["10", "52"], ["16", "73"]] } },
    correctAnswer: "3.5",
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $3.5$.**\n\n**The Fast Way (~15s):** From $4$ to $10$ gigabytes the cost rises $21$ dollars over $6$ gigabytes: $\\dfrac{21}{6} = 3.5$ dollars per gigabyte.\n\n**The Full Solution:**\nStep 1: The rate asked for is the slope of the linear model, $\\dfrac{\\text{change in } C}{\\text{change in } g}$.\nStep 2: Using the first two rows: $\\dfrac{52 - 31}{10 - 4} = \\dfrac{21}{6} = 3.5$.\nStep 3: Check with the last two rows: $\\dfrac{73 - 52}{16 - 10} = \\dfrac{21}{6} = 3.5$. The model is linear, so the rate is consistent. $\\checkmark$\n\n**Common Mistakes:** Entering $21$ (the change in cost without dividing by the change in data); entering $6$ (the change in data); dividing $31$ by $4$ to get $7.75$, which mixes in the fixed part of the cost.\n\n**Test Day Takeaway:** A per-unit rate from a table is the slope between two rows. Subtract outputs, subtract inputs, divide, and confirm with a second pair.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "slope-as-rate-of-change-in-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-207",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The scatterplot shows the number $y$ of bacterial colonies, in thousands, counted in a sample $x$ hours after an antibiotic was applied, along with the line of best fit $\\hat{y} = -2.4x + 30$. Which of the following is the best interpretation of the slope of the line of best fit in this context?",
    diagram: { type: "scatterplot", params: { points: [[1, 27.2], [2, 25.6], [3, 21.9], [4, 21.1], [5, 17.5], [6, 16.2], [7, 12.6], [8, 11.4], [9, 8], [10, 6.7]], xMin: 0, xMax: 10, yMin: 0, yMax: 32, xGridStep: 1, yGridStep: 4, xLabelStep: 2, yLabelStep: 8, xLabel: "Hours after application", yLabel: "Colonies (thousands)", bestFitLine: { slope: -2.4, intercept: 30 } } },
    choices: [
      { id: "A", text: "The predicted number of colonies decreases by $2{,}400$ each hour." },
      // distractor: ignores that y is measured in thousands
      { id: "B", text: "The predicted number of colonies decreases by $2.4$ each hour." },
      // distractor: scales by 10 instead of 1,000
      { id: "C", text: "The predicted number of colonies decreases by $24$ each hour." },
      // distractor: interprets the y-intercept, not the slope
      { id: "D", text: "The predicted number of colonies is $30{,}000$ at the time the antibiotic was applied." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The slope $-2.4$ is in thousands of colonies per hour. $2.4$ thousand is $2{,}400$, so the predicted count drops by $2{,}400$ colonies each hour.\n\n**The Full Solution:**\nStep 1: In $\\hat{y} = -2.4x + 30$, the slope is $-2.4$: the predicted change in $y$ for each additional hour.\nStep 2: The vertical axis is measured in thousands, so a change of $-2.4$ in $y$ is a change of $-2.4 \\times 1{,}000 = -2{,}400$ colonies.\nStep 3: The negative sign means a decrease. Check: from $x = 0$ to $x = 1$ the prediction falls from $30$ thousand to $27.6$ thousand, a drop of $2{,}400$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B: reads $2.4$ directly off the equation and forgets that the axis unit is thousands.\n* Choice C: applies the wrong scale factor, $10$ instead of $1{,}000$.\n* Choice D: correctly scales $30$ thousand but describes the $y$-intercept, not the slope.\n\n**Test Day Takeaway:** When an axis is labeled in thousands, the slope is in thousands too. Convert the rate to plain units before matching it to a choice, and make sure you are describing the slope rather than the intercept.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "slope-as-rate-of-change-in-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-208",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "hard",
    type: "fill-in",
    question: "The graph shows the temperature $y$, in degrees Celsius, of a solution $x$ minutes after it was placed in a cooling bath. If the temperature continues to change at the same rate, by how many degrees Celsius will the temperature of the solution decrease per hour?",
    diagram: { type: "linearGraph", params: { slope: -1.5, yIntercept: 22, xRange: [0, 10], yRange: [0, 26], gridInterval: 2, xTickInterval: 2, yTickInterval: 2, highlightPoints: [[0, 22], [8, 10]] } },
    correctAnswer: "90",
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**The correct answer is $90$.**\n\n**The Fast Way (~20s):** From $(0, 22)$ to $(8, 10)$ the temperature drops $12$ degrees in $8$ minutes: $1.5$ degrees per minute. Per hour that is $1.5 \\times 60 = 90$ degrees.\n\n**The Full Solution:**\nStep 1: The slope of the graph is $\\dfrac{10 - 22}{8 - 0} = \\dfrac{-12}{8} = -1.5$ degrees Celsius per minute.\nStep 2: The question asks for the rate per hour, and one hour is $60$ minutes, so multiply: $1.5 \\times 60 = 90$ degrees Celsius per hour.\nStep 3: Check the units: $\\dfrac{1.5 \\text{ degrees}}{1 \\text{ minute}} \\times \\dfrac{60 \\text{ minutes}}{1 \\text{ hour}} = 90$ degrees per hour. $\\checkmark$\n\n**Common Mistakes:** Entering $1.5$ (the rate per minute, ignoring the unit change); entering $12$ (the total drop shown, not a rate); dividing by $60$ instead of multiplying to get $0.025$; entering $-90$ when the question asks for the size of the decrease.\n\n**Test Day Takeaway:** Compute the slope in the graph's units first, then convert to the units the question names. A rate per minute becomes a rate per hour by multiplying by $60$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "slope-as-rate-of-change-in-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 9/4: reading-slope-intercept-form (8 items) =====
  // 5 test occurrences across M2Easy variants.
  {
    id: "bank-alg-209",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = 15 - 4x$. What is the slope of the graph of $y = f(x)$ in the $xy$-plane?",
    choices: [
      { id: "A", text: "$-4$" },
      // distractor: drops the sign because the x-term is written after the constant
      { id: "B", text: "$4$" },
      // distractor: computes 15 - 4
      { id: "C", text: "$11$" },
      // distractor: reports the y-intercept
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Rewrite $15 - 4x$ as $-4x + 15$. The coefficient of $x$ is $-4$, so the slope is $-4$.\n\n**The Full Solution:**\nStep 1: Slope-intercept form is $y = mx + b$, with $m$ the slope. The given rule has its terms in the opposite order: $f(x) = 15 - 4x = -4x + 15$.\nStep 2: The coefficient of $x$, including its sign, is $-4$. That is the slope. The constant $15$ is the $y$-intercept.\nStep 3: Check with two inputs: $f(0) = 15$ and $f(1) = 11$; the graph falls $4$ units per unit of $x$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): takes the coefficient without its sign because the $x$-term comes after the constant.\n* Choice C ($11$): computes $15 - 4$, treating the rule as arithmetic rather than reading its structure.\n* Choice D ($15$): reports the $y$-intercept instead of the slope.\n\n**Test Day Takeaway:** The slope is the coefficient attached to $x$, sign included, no matter where the $x$-term is written. Reorder into $mx + b$ if the form looks unfamiliar.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "reading-slope-intercept-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-210",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "easy",
    type: "fill-in",
    question: "The graph of the linear function $g$ in the $xy$-plane has equation $y = \\dfrac{5}{2}x - 14$. What is the $y$-coordinate of the $y$-intercept of the graph?",
    correctAnswer: "-14",
    explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**The correct answer is $-14$.**\n\n**The Fast Way (~5s):** In $y = mx + b$, the $y$-intercept is $b$. Here $b = -14$.\n\n**The Full Solution:**\nStep 1: The equation is already in slope-intercept form $y = mx + b$, with $m = \\dfrac{5}{2}$ and $b = -14$.\nStep 2: The $y$-intercept is the point where $x = 0$: $y = \\dfrac{5}{2}(0) - 14 = -14$.\nStep 3: So the $y$-intercept is $(0, -14)$ and its $y$-coordinate is $-14$. $\\checkmark$\n\n**Common Mistakes:** Entering $14$ (dropping the negative sign); entering $\\dfrac{5}{2}$ or $2.5$ (the slope); entering $\\dfrac{28}{5}$ (the $x$-intercept, found by setting $y = 0$).\n\n**Test Day Takeaway:** In $y = mx + b$, the constant term is the $y$-intercept, sign included. Confirm by substituting $x = 0$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "reading-slope-intercept-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-211",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The equation $4y = 3x - 20$ is graphed in the $xy$-plane. What is the $y$-coordinate of the $y$-intercept of the graph?",
    choices: [
      // distractor: reads the constant without dividing by 4
      { id: "A", text: "$-20$" },
      { id: "B", text: "$-5$" },
      // distractor: reports the coefficient of x
      { id: "C", text: "$3$" },
      // distractor: drops the sign after dividing
      { id: "D", text: "$5$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Divide everything by $4$: $y = \\dfrac{3}{4}x - 5$. The constant term, $-5$, is the $y$-intercept.\n\n**The Full Solution:**\nStep 1: The equation is not yet in $y = mx + b$ form because $y$ has a coefficient of $4$.\nStep 2: Divide both sides by $4$: $y = \\dfrac{3}{4}x - \\dfrac{20}{4} = \\dfrac{3}{4}x - 5$.\nStep 3: Now $b = -5$. Check by substituting $x = 0$ into the original equation: $4y = -20$, so $y = -5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-20$): reads the constant from the original equation without dividing by the coefficient of $y$.\n* Choice C ($3$): reports the coefficient of $x$ from the original equation, which is neither the slope nor the intercept.\n* Choice D ($5$): divides correctly but drops the negative sign.\n\n**Test Day Takeaway:** Only read slope and intercept after $y$ stands alone with coefficient $1$. Substituting $x = 0$ into the original equation is a fast check.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "reading-slope-intercept-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-212",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "medium",
    type: "fill-in",
    question: "The line with equation $y = 7 - \\dfrac{2x}{3}$ is graphed in the $xy$-plane. What is the slope of the line?",
    correctAnswer: "-2/3",
    explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**The correct answer is $-\\dfrac{2}{3}$.**\n\n**The Fast Way (~5s):** $\\dfrac{2x}{3}$ is the same as $\\dfrac{2}{3}x$, and it is subtracted, so the slope is $-\\dfrac{2}{3}$.\n\n**The Full Solution:**\nStep 1: Rewrite the equation in $y = mx + b$ order: $y = -\\dfrac{2}{3}x + 7$.\nStep 2: The coefficient of $x$ is $-\\dfrac{2}{3}$, so the slope is $-\\dfrac{2}{3}$; the $y$-intercept is $7$.\nStep 3: Check: at $x = 0$, $y = 7$; at $x = 3$, $y = 7 - 2 = 5$. A drop of $2$ over a run of $3$ is a slope of $-\\dfrac{2}{3}$. $\\checkmark$\n\n**Common Mistakes:** Entering $\\dfrac{2}{3}$ (missing the sign); entering $-\\dfrac{3}{2}$ (inverting the fraction); entering $7$ (the intercept); reading $\\dfrac{2x}{3}$ as having slope $2$.\n\n**Test Day Takeaway:** $\\dfrac{2x}{3}$ means $\\dfrac{2}{3} \\cdot x$. Pull the coefficient, keep the sign in front of it, and enter the fraction as $-2/3$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "reading-slope-intercept-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-213",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of the linear function $f$ is shown in the $xy$-plane. Which equation defines $f$?",
    diagram: { type: "linearGraph", params: { slope: -2, yIntercept: 4, xRange: [-4, 6], yRange: [-6, 8], gridInterval: 1, xTickInterval: 2, yTickInterval: 2, highlightPoints: [[0, 4], [3, -2]] } },
    choices: [
      // distractor: inverts the slope (run over rise)
      { id: "A", text: "$f(x) = -\\dfrac{1}{2}x + 4$" },
      { id: "B", text: "$f(x) = -2x + 4$" },
      // distractor: drops the sign on a decreasing line
      { id: "C", text: "$f(x) = 2x + 4$" },
      // distractor: swaps the slope and the y-intercept
      { id: "D", text: "$f(x) = 4x - 2$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The line crosses the $y$-axis at $4$ and passes through $(3, -2)$: down $6$ over $3$, so the slope is $-2$. That gives $f(x) = -2x + 4$.\n\n**The Full Solution:**\nStep 1: The $y$-intercept is where the line meets the $y$-axis: $(0, 4)$, so $b = 4$.\nStep 2: Use a second marked point, $(3, -2)$: slope $= \\dfrac{-2 - 4}{3 - 0} = \\dfrac{-6}{3} = -2$.\nStep 3: In slope-intercept form, $f(x) = -2x + 4$. Check: $f(3) = -6 + 4 = -2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\dfrac{1}{2}x + 4$): divides run by rise, inverting the slope.\n* Choice C ($2x + 4$): keeps the steepness but drops the sign; the graph falls from left to right, so the slope must be negative.\n* Choice D ($4x - 2$): swaps the roles of the two numbers, using the intercept as the slope.\n\n**Test Day Takeaway:** Read $b$ off the $y$-axis, then compute $m$ from two lattice points. A line that falls left to right has a negative $m$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "reading-slope-intercept-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-214",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "medium",
    type: "fill-in",
    question: "The equation $y + 9 = \\dfrac{5}{4}x$ is graphed in the $xy$-plane. What is the $y$-coordinate of the $y$-intercept of the graph?",
    correctAnswer: "-9",
    explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**The correct answer is $-9$.**\n\n**The Fast Way (~5s):** Subtract $9$ from both sides: $y = \\dfrac{5}{4}x - 9$. The constant term is $-9$.\n\n**The Full Solution:**\nStep 1: Isolate $y$ to reach slope-intercept form: $y = \\dfrac{5}{4}x - 9$.\nStep 2: In $y = mx + b$, $b = -9$ is the $y$-coordinate of the $y$-intercept.\nStep 3: Check by substituting $x = 0$ into the original equation: $y + 9 = 0$, so $y = -9$. $\\checkmark$\n\n**Common Mistakes:** Entering $9$ (reading the constant from the left side without moving it); entering $\\dfrac{5}{4}$ (the slope); entering $\\dfrac{36}{5}$ (the $x$-intercept).\n\n**Test Day Takeaway:** Move every constant to the $x$ side before reading $b$. Substituting $x = 0$ into the original form is a two-second check.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "reading-slope-intercept-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-215",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of line $\\ell$ is shown. Line $m$ is the reflection of line $\\ell$ across the $y$-axis. What is the slope of line $m$?",
    diagram: { type: "linearGraph", params: { slope: 1.5, yIntercept: -2, xRange: [-4, 6], yRange: [-6, 8], gridInterval: 1, xTickInterval: 2, yTickInterval: 2, highlightPoints: [[0, -2], [4, 4]], label: "ℓ" } },
    choices: [
      { id: "A", text: "$-\\dfrac{3}{2}$" },
      // distractor: takes the negative reciprocal, as if m were perpendicular to l
      { id: "B", text: "$-\\dfrac{2}{3}$" },
      // distractor: takes the reciprocal, as if reflecting across y = x
      { id: "C", text: "$\\dfrac{2}{3}$" },
      // distractor: assumes a reflection leaves the slope unchanged
      { id: "D", text: "$\\dfrac{3}{2}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Slope of a Reflected Line**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** From $(0, -2)$ to $(4, 4)$, line $\\ell$ has slope $\\dfrac{6}{4} = \\dfrac{3}{2}$. Reflecting across the $y$-axis sends each point $(x, y)$ to $(-x, y)$, which negates the slope: $-\\dfrac{3}{2}$.\n\n**The Full Solution:**\nStep 1: Read the slope of $\\ell$ from the two marked points: $\\dfrac{4 - (-2)}{4 - 0} = \\dfrac{6}{4} = \\dfrac{3}{2}$.\nStep 2: A reflection across the $y$-axis maps $(x, y)$ to $(-x, y)$. The marked points become $(0, -2)$ and $(-4, 4)$, which lie on line $m$.\nStep 3: Slope of $m$: $\\dfrac{4 - (-2)}{-4 - 0} = \\dfrac{6}{-4} = -\\dfrac{3}{2}$. Check: the run flipped sign and the rise did not, so the slope is negated. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\dfrac{2}{3}$): takes the negative reciprocal, which is the rule for a perpendicular line, not a reflection across an axis.\n* Choice C ($\\dfrac{2}{3}$): takes the reciprocal, which is what reflecting across the line $y = x$ would do.\n* Choice D ($\\dfrac{3}{2}$): assumes the reflection leaves the slope unchanged; only a translation does that.\n\n**Test Day Takeaway:** Reflecting a line across either axis negates its slope (the $y$-axis flips the run, the $x$-axis flips the rise). Reflect two points and recompute if you are unsure.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "slope-from-rearranged-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-216",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, line $\\ell$ has equation $2x + y = 10$. Line $m$ is perpendicular to line $\\ell$ and passes through the origin. What is the $x$-coordinate of the point at which lines $\\ell$ and $m$ intersect?",
    choices: [
      // distractor: reports the y-coordinate of the intersection
      { id: "A", text: "$2$" },
      { id: "B", text: "$4$" },
      // distractor: reports the x-intercept of line l, ignoring line m
      { id: "C", text: "$5$" },
      // distractor: reports the constant term of line l
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Perpendicular Line + Intersection**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Line $\\ell$ is $y = -2x + 10$, so line $m$ has slope $\\dfrac{1}{2}$ and, through the origin, equation $y = \\dfrac{1}{2}x$. Set equal: $\\dfrac{1}{2}x = -2x + 10$, so $\\dfrac{5}{2}x = 10$ and $x = 4$.\n\n**The Full Solution:**\nStep 1: Solve $2x + y = 10$ for $y$: $y = -2x + 10$. The slope of $\\ell$ is $-2$.\nStep 2: The perpendicular slope is $\\dfrac{1}{2}$. Since $m$ passes through $(0, 0)$, its equation is $y = \\dfrac{1}{2}x$.\nStep 3: Find the intersection by substitution: $\\dfrac{1}{2}x = -2x + 10$. Multiply by $2$: $x = -4x + 20$, so $5x = 20$ and $x = 4$. Check: at $x = 4$, $\\ell$ gives $y = 2$ and $m$ gives $y = 2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reports the $y$-coordinate of the intersection point $(4, 2)$.\n* Choice C ($5$): reports the $x$-intercept of $\\ell$ (where $y = 0$), ignoring line $m$ entirely.\n* Choice D ($10$): reports the constant from the equation of $\\ell$.\n\n**Test Day Takeaway:** Build the perpendicular line explicitly (negative reciprocal slope plus the given point), then solve the two-line system and report the coordinate that was asked for.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "slope-from-rearranged-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-217",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Line $k$ in the $xy$-plane has slope $-\\dfrac{3}{4}$. If line $n$ is perpendicular to line $k$, what is the slope of line $n$?",
    choices: [
      // distractor: takes the reciprocal but keeps the sign
      { id: "A", text: "$-\\dfrac{4}{3}$" },
      // distractor: keeps the same slope, which describes a parallel line
      { id: "B", text: "$-\\dfrac{3}{4}$" },
      // distractor: changes the sign but not the reciprocal
      { id: "C", text: "$\\dfrac{3}{4}$" },
      { id: "D", text: "$\\dfrac{4}{3}$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** Flip and negate: $-\\dfrac{3}{4}$ becomes $\\dfrac{4}{3}$.\n\n**The Full Solution:**\nStep 1: Perpendicular lines have slopes whose product is $-1$.\nStep 2: The negative reciprocal of $-\\dfrac{3}{4}$ is $-\\dfrac{1}{-3/4} = \\dfrac{4}{3}$.\nStep 3: Check: $-\\dfrac{3}{4} \\cdot \\dfrac{4}{3} = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\dfrac{4}{3}$): takes the reciprocal but keeps the negative sign; the product with $-\\dfrac{3}{4}$ is $+1$, not $-1$.\n* Choice B ($-\\dfrac{3}{4}$): repeats the given slope, which is the rule for parallel lines.\n* Choice C ($\\dfrac{3}{4}$): changes the sign but does not flip the fraction.\n\n**Test Day Takeaway:** \"Perpendicular\" means flip the fraction and change the sign, both. Multiply the two slopes; if the product is not $-1$, one of the two moves was skipped.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "perpendicular-slope",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-218",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "easy",
    type: "fill-in",
    question: "In the $xy$-plane, line $p$ is perpendicular to the line with equation $y = 6x + 1$. What is the slope of line $p$?",
    correctAnswer: "-1/6",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $-\\dfrac{1}{6}$.**\n\n**The Fast Way (~5s):** The given slope is $6$; its negative reciprocal is $-\\dfrac{1}{6}$.\n\n**The Full Solution:**\nStep 1: In $y = 6x + 1$ the slope is the coefficient of $x$, which is $6$. The intercept $1$ plays no role.\nStep 2: A perpendicular line has slope equal to the negative reciprocal: $-\\dfrac{1}{6}$.\nStep 3: Check: $6 \\cdot \\left(-\\dfrac{1}{6}\\right) = -1$. $\\checkmark$\n\n**Common Mistakes:** Entering $-6$ (negating without flipping); entering $\\dfrac{1}{6}$ (flipping without negating); entering $-1$ (using the intercept).\n\n**Test Day Takeaway:** Only the slope matters for perpendicularity. Write $6$ as $\\dfrac{6}{1}$, flip to $\\dfrac{1}{6}$, then attach the negative sign.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "perpendicular-slope",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-219",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of line $r$ is shown in the $xy$-plane. Line $s$ is perpendicular to line $r$ and passes through the point $(2, 5)$. Which equation defines line $s$?",
    diagram: { type: "linearGraph", params: { slope: -0.5, yIntercept: 1, xRange: [-4, 8], yRange: [-4, 6], gridInterval: 1, xTickInterval: 2, yTickInterval: 2, highlightPoints: [[0, 1], [4, -1]], label: "r" } },
    choices: [
      // distractor: uses slope -2 (reciprocal without the sign change) through the point
      { id: "A", text: "$y = -2x + 9$" },
      // distractor: keeps the slope of r, giving a parallel line through the point
      { id: "B", text: "$y = -\\dfrac{1}{2}x + 6$" },
      { id: "C", text: "$y = 2x + 1$" },
      // distractor: uses the point's y-coordinate as the intercept
      { id: "D", text: "$y = 2x + 5$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Perpendicular Line Through a Point**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** From $(0, 1)$ to $(4, -1)$, line $r$ has slope $-\\dfrac{1}{2}$, so line $s$ has slope $2$. Through $(2, 5)$: $5 = 2(2) + b$, so $b = 1$ and $y = 2x + 1$.\n\n**The Full Solution:**\nStep 1: Read the slope of $r$ from the marked points: $\\dfrac{-1 - 1}{4 - 0} = -\\dfrac{2}{4} = -\\dfrac{1}{2}$.\nStep 2: The perpendicular slope is the negative reciprocal, $2$. So $s$ has the form $y = 2x + b$.\nStep 3: Substitute $(2, 5)$: $5 = 4 + b$, so $b = 1$. The equation is $y = 2x + 1$. Check: $2(2) + 1 = 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -2x + 9$): flips the fraction but keeps the negative sign, then fits the point correctly with the wrong slope.\n* Choice B ($y = -\\dfrac{1}{2}x + 6$): keeps the slope of $r$, producing a parallel line through $(2, 5)$ rather than a perpendicular one.\n* Choice D ($y = 2x + 5$): has the right slope but uses the $y$-coordinate of the given point as the intercept without substituting.\n\n**Test Day Takeaway:** Slope from the graph, negative reciprocal for the perpendicular, then substitute the given point to find $b$. Three of the four choices pass through the point; only one has the perpendicular slope.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "perpendicular-slope",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-220",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "medium",
    type: "fill-in",
    question: "Line $a$ passes through the points $(1, 8)$ and $(5, 2)$ in the $xy$-plane. What is the slope of a line that is perpendicular to line $a$?",
    correctAnswer: "2/3",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $\\dfrac{2}{3}$.**\n\n**The Fast Way (~15s):** Slope of $a$: $\\dfrac{2 - 8}{5 - 1} = -\\dfrac{6}{4} = -\\dfrac{3}{2}$. The negative reciprocal is $\\dfrac{2}{3}$.\n\n**The Full Solution:**\nStep 1: Compute the slope of line $a$ from the two points: $\\dfrac{2 - 8}{5 - 1} = \\dfrac{-6}{4} = -\\dfrac{3}{2}$.\nStep 2: A perpendicular line has the negative reciprocal slope: flip $-\\dfrac{3}{2}$ to $-\\dfrac{2}{3}$ and change the sign to get $\\dfrac{2}{3}$.\nStep 3: Check: $-\\dfrac{3}{2} \\cdot \\dfrac{2}{3} = -1$. $\\checkmark$\n\n**Common Mistakes:** Entering $-\\dfrac{3}{2}$ (the slope of $a$ itself); entering $-\\dfrac{2}{3}$ (flipping without negating); computing the slope as $\\dfrac{5 - 1}{2 - 8}$ and getting $-\\dfrac{2}{3}$; not reducing $\\dfrac{6}{4}$ and entering $\\dfrac{4}{6}$ (equivalent, but easy to mistype).\n\n**Test Day Takeaway:** Two points give the slope; the perpendicular slope is one flip-and-negate away. Reduce the fraction before flipping to keep the numbers small.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "perpendicular-slope",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-221",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, line $d$ has equation $5x - 2y = 14$. Which of the following is the slope of a line that is perpendicular to line $d$?",
    choices: [
      // distractor: negates the slope of d without taking the reciprocal
      { id: "A", text: "$-\\dfrac{5}{2}$" },
      { id: "B", text: "$-\\dfrac{2}{5}$" },
      // distractor: takes the reciprocal without changing the sign
      { id: "C", text: "$\\dfrac{2}{5}$" },
      // distractor: reports the slope of d itself
      { id: "D", text: "$\\dfrac{5}{2}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Solve for $y$: $-2y = -5x + 14$, so $y = \\dfrac{5}{2}x - 7$. The slope of $d$ is $\\dfrac{5}{2}$; the perpendicular slope is $-\\dfrac{2}{5}$.\n\n**The Full Solution:**\nStep 1: Put the equation in slope-intercept form. Subtract $5x$: $-2y = -5x + 14$. Divide by $-2$: $y = \\dfrac{5}{2}x - 7$.\nStep 2: The slope of line $d$ is $\\dfrac{5}{2}$.\nStep 3: The negative reciprocal is $-\\dfrac{2}{5}$. Check: $\\dfrac{5}{2} \\cdot \\left(-\\dfrac{2}{5}\\right) = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\dfrac{5}{2}$): negates the slope of $d$ but does not flip it; this is the slope you get by misreading $-2y$ as $2y$.\n* Choice C ($\\dfrac{2}{5}$): flips the slope but keeps its sign.\n* Choice D ($\\dfrac{5}{2}$): reports the slope of line $d$ itself, which a parallel line would have.\n\n**Test Day Takeaway:** In standard form $Ax + By = C$, the slope is $-\\dfrac{A}{B}$, so a perpendicular slope is $\\dfrac{B}{A}$. Watch the sign of $B$ when you divide.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "perpendicular-slope",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-222",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "medium",
    type: "fill-in",
    question: "Lines $u$ and $v$ are perpendicular in the $xy$-plane. Line $u$ has equation $y = -\\dfrac{4}{9}x + 2$, and line $v$ passes through the origin. For what value of $y$ does the point $(8, y)$ lie on line $v$?",
    correctAnswer: "18",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $18$.**\n\n**The Fast Way (~15s):** The slope of $v$ is the negative reciprocal of $-\\dfrac{4}{9}$, which is $\\dfrac{9}{4}$. Through the origin, $v$ is $y = \\dfrac{9}{4}x$, so at $x = 8$, $y = 18$.\n\n**The Full Solution:**\nStep 1: The slope of $u$ is $-\\dfrac{4}{9}$, so the slope of $v$ is $\\dfrac{9}{4}$.\nStep 2: Line $v$ passes through $(0, 0)$, so its $y$-intercept is $0$ and its equation is $y = \\dfrac{9}{4}x$.\nStep 3: Substitute $x = 8$: $y = \\dfrac{9}{4}(8) = 18$. Check: the slope from $(0, 0)$ to $(8, 18)$ is $\\dfrac{18}{8} = \\dfrac{9}{4}$. $\\checkmark$\n\n**Common Mistakes:** Using slope $-\\dfrac{9}{4}$ and entering $-18$; using slope $\\dfrac{4}{9}$ and entering $\\dfrac{32}{9}$; adding the intercept $2$ of line $u$ to get $20$, though $v$ has its own intercept, $0$.\n\n**Test Day Takeaway:** The perpendicular slope comes from $u$; the intercept comes from the point $v$ passes through. Keep the two lines' intercepts separate.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "perpendicular-slope",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-223",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, line $\\ell$ passes through the points $(a, 0)$ and $(0, b)$, where $a$ and $b$ are positive constants. Which expression represents the slope of a line that is perpendicular to line $\\ell$?",
    choices: [
      { id: "A", text: "$\\dfrac{a}{b}$" },
      // distractor: negates the slope of l without taking the reciprocal
      { id: "B", text: "$\\dfrac{b}{a}$" },
      // distractor: takes the reciprocal without changing the sign
      { id: "C", text: "$-\\dfrac{a}{b}$" },
      // distractor: reports the slope of l itself
      { id: "D", text: "$-\\dfrac{b}{a}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Slope of $\\ell$: $\\dfrac{b - 0}{0 - a} = -\\dfrac{b}{a}$. Flip and negate: $\\dfrac{a}{b}$.\n\n**The Full Solution:**\nStep 1: Use the slope formula on $(a, 0)$ and $(0, b)$: $\\dfrac{b - 0}{0 - a} = \\dfrac{b}{-a} = -\\dfrac{b}{a}$. Since $a$ and $b$ are positive, $\\ell$ falls from left to right.\nStep 2: The perpendicular slope is the negative reciprocal of $-\\dfrac{b}{a}$: flipping gives $-\\dfrac{a}{b}$, and negating gives $\\dfrac{a}{b}$.\nStep 3: Check: $-\\dfrac{b}{a} \\cdot \\dfrac{a}{b} = -1$. $\\checkmark$ A positive perpendicular slope makes sense, since $\\ell$ has a negative one.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\dfrac{b}{a}$): negates the slope of $\\ell$ but forgets to flip the fraction.\n* Choice C ($-\\dfrac{a}{b}$): flips the fraction but keeps the negative sign.\n* Choice D ($-\\dfrac{b}{a}$): is the slope of $\\ell$ itself.\n\n**Test Day Takeaway:** With intercepts $(a, 0)$ and $(0, b)$, the slope is $-\\dfrac{b}{a}$. Treat the symbolic slope exactly like a numeric one: flip it, then change the sign.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "perpendicular-slope",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-224",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "hard",
    type: "fill-in",
    question: "In the $xy$-plane, line $g$ passes through the points $(3, -4)$ and $(7, k)$, where $k$ is a constant. Line $h$ has slope $-\\dfrac{2}{3}$ and is perpendicular to line $g$. What is the value of $k$?",
    correctAnswer: "2",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~20s):** Line $g$ must have slope $\\dfrac{3}{2}$ (negative reciprocal of $-\\dfrac{2}{3}$). So $\\dfrac{k - (-4)}{7 - 3} = \\dfrac{3}{2}$, giving $k + 4 = 6$ and $k = 2$.\n\n**The Full Solution:**\nStep 1: Since $g$ and $h$ are perpendicular, the slope of $g$ is the negative reciprocal of $-\\dfrac{2}{3}$, which is $\\dfrac{3}{2}$.\nStep 2: Write the slope of $g$ from its two points: $\\dfrac{k + 4}{4}$.\nStep 3: Set $\\dfrac{k + 4}{4} = \\dfrac{3}{2}$. Multiply by $4$: $k + 4 = 6$, so $k = 2$. Check: from $(3, -4)$ to $(7, 2)$ is up $6$ over $4$, a slope of $\\dfrac{3}{2}$, and $\\dfrac{3}{2} \\cdot \\left(-\\dfrac{2}{3}\\right) = -1$. $\\checkmark$\n\n**Common Mistakes:** Using slope $-\\dfrac{2}{3}$ for $g$ (treating the lines as parallel) and getting $k = -\\dfrac{20}{3}$; using $-\\dfrac{3}{2}$ (flipping without negating) and getting $k = -10$; writing the rise as $k - 4$ instead of $k - (-4)$ and getting $k = 10$.\n\n**Test Day Takeaway:** Convert the perpendicular condition into the required slope first, then set the two-point slope formula equal to it. Subtracting a negative coordinate is where most sign errors occur.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "perpendicular-slope",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 10/2: parallel-line-through-a-point (7 items) =====
  // Bank has 1 existing item; adding 7 more.
  {
    id: "bank-alg-225",
    domain: "algebra",
    skills: ["writing-parallel-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The graph of line $j$ is shown in the $xy$-plane. Line $k$ is parallel to line $j$ and passes through the point $(0, -3)$. Which equation defines line $k$?",
    diagram: { type: "linearGraph", params: { slope: 2, yIntercept: 1, xRange: [-4, 6], yRange: [-4, 8], gridInterval: 1, xTickInterval: 2, yTickInterval: 2, highlightPoints: [[0, 1], [2, 5]], label: "j" } },
    choices: [
      // distractor: swaps the slope and the intercept
      { id: "A", text: "$y = -3x + 2$" },
      // distractor: uses the perpendicular slope instead of the parallel one
      { id: "B", text: "$y = -\\dfrac{1}{2}x - 3$" },
      // distractor: copies line j instead of shifting it to the new intercept
      { id: "C", text: "$y = 2x + 1$" },
      { id: "D", text: "$y = 2x - 3$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Line $j$ rises from $(0, 1)$ to $(2, 5)$: slope $2$. A parallel line keeps slope $2$, and $(0, -3)$ is on the $y$-axis, so the intercept is $-3$: $y = 2x - 3$.\n\n**The Full Solution:**\nStep 1: Read the slope of $j$ from the marked points: $\\dfrac{5 - 1}{2 - 0} = 2$.\nStep 2: Parallel lines have equal slopes, so line $k$ has the form $y = 2x + b$.\nStep 3: The point $(0, -3)$ has $x = 0$, so it is the $y$-intercept: $b = -3$. Thus $y = 2x - 3$. Check: at $x = 0$, $y = -3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -3x + 2$): swaps the numbers, using $-3$ as a slope and $2$ as the intercept.\n* Choice B ($y = -\\dfrac{1}{2}x - 3$): uses the negative reciprocal slope, which gives a perpendicular line, not a parallel one.\n* Choice C ($y = 2x + 1$): is line $j$ itself; it does not pass through $(0, -3)$.\n\n**Test Day Takeaway:** Parallel means same slope, different intercept. When the given point has $x = 0$, its $y$-coordinate is the intercept and no further algebra is needed.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-line-through-a-point",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-226",
    domain: "algebra",
    skills: ["writing-parallel-equation"],
    difficulty: "easy",
    type: "fill-in",
    question: "In the $xy$-plane, line $m$ is parallel to the line with equation $y = -4x + 9$ and passes through the point $(0, 6)$. If $(1, y)$ is a point on line $m$, what is the value of $y$?",
    correctAnswer: "2",
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~10s):** Line $m$ has slope $-4$ and $y$-intercept $6$, so $y = -4x + 6$. At $x = 1$, $y = 2$.\n\n**The Full Solution:**\nStep 1: Parallel lines share a slope, so line $m$ has slope $-4$.\nStep 2: The point $(0, 6)$ is on the $y$-axis, so the $y$-intercept of $m$ is $6$: $y = -4x + 6$.\nStep 3: Substitute $x = 1$: $y = -4(1) + 6 = 2$. Check: moving one unit right from $(0, 6)$ along a slope of $-4$ lands at $(1, 2)$. $\\checkmark$\n\n**Common Mistakes:** Entering $5$ (using the intercept $9$ of the given line: $-4 + 9$); entering $10$ (using slope $+4$); entering $6$ (forgetting to move from the intercept to $x = 1$).\n\n**Test Day Takeaway:** Borrow only the slope from the given line. The intercept comes from the point the new line passes through.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-line-through-a-point",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-227",
    domain: "algebra",
    skills: ["writing-parallel-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Line $q$ is parallel to the line with equation $y = \\dfrac{3}{2}x - 5$ and passes through the point $(-2, 4)$ in the $xy$-plane. What is the $y$-coordinate of the $y$-intercept of line $q$?",
    choices: [
      // distractor: copies the intercept of the given line
      { id: "A", text: "$-5$" },
      // distractor: uses slope -3/2 (sign slip on the product with x = -2)
      { id: "B", text: "$1$" },
      // distractor: reports the y-coordinate of the given point
      { id: "C", text: "$4$" },
      { id: "D", text: "$7$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Slope stays $\\dfrac{3}{2}$. Substitute $(-2, 4)$: $4 = \\dfrac{3}{2}(-2) + b = -3 + b$, so $b = 7$.\n\n**The Full Solution:**\nStep 1: A line parallel to $y = \\dfrac{3}{2}x - 5$ has slope $\\dfrac{3}{2}$, so line $q$ is $y = \\dfrac{3}{2}x + b$ for some $b$.\nStep 2: The point $(-2, 4)$ lies on $q$: $4 = \\dfrac{3}{2}(-2) + b$, so $4 = -3 + b$.\nStep 3: $b = 7$. Check: $\\dfrac{3}{2}(-2) + 7 = -3 + 7 = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): keeps the intercept of the given line; a parallel line through a different point cannot share it.\n* Choice B ($1$): computes $\\dfrac{3}{2}(-2)$ as $+3$, a sign slip, giving $4 = 3 + b$.\n* Choice C ($4$): reports the $y$-coordinate of the given point, which is only the intercept when $x = 0$.\n\n**Test Day Takeaway:** Parallel copies the slope, never the intercept. Substitute the given point carefully, keeping the sign of a negative $x$-coordinate.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-line-through-a-point",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-228",
    domain: "algebra",
    skills: ["writing-parallel-equation"],
    difficulty: "medium",
    type: "fill-in",
    question: "Line $w$ is parallel to the line $6x + 3y = 15$ in the $xy$-plane and contains the point $(2, 5)$. Line $w$ intersects the $y$-axis at the point $(0, c)$. What is the value of $c$?",
    correctAnswer: "9",
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~15s):** $6x + 3y = 15$ becomes $y = -2x + 5$, so the slope is $-2$. Through $(2, 5)$: $5 = -2(2) + c$, so $c = 9$.\n\n**The Full Solution:**\nStep 1: Solve the given equation for $y$: $3y = -6x + 15$, so $y = -2x + 5$. Its slope is $-2$.\nStep 2: Line $w$ is parallel, so it has slope $-2$: $y = -2x + c$, where $c$ is the $y$-intercept.\nStep 3: Substitute $(2, 5)$: $5 = -4 + c$, so $c = 9$. Check: $-2(2) + 9 = 5$. $\\checkmark$\n\n**Common Mistakes:** Entering $5$ (the intercept of the given line); entering $1$ (using slope $+2$: $5 = 4 + c$); using slope $-6$ from the unconverted equation and entering $17$.\n\n**Test Day Takeaway:** Convert standard form to $y = mx + b$ before borrowing the slope. The parallel line gets that slope and its own intercept from the given point.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-line-through-a-point",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-229",
    domain: "algebra",
    skills: ["writing-parallel-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of line $\\ell$ is shown in the $xy$-plane. Line $n$ is parallel to line $\\ell$ and passes through the point $(4, 2)$. Which equation defines line $n$?",
    diagram: { type: "linearGraph", params: { slope: -1.5, yIntercept: 3, xRange: [-4, 6], yRange: [-6, 8], gridInterval: 1, xTickInterval: 2, yTickInterval: 2, highlightPoints: [[0, 3], [2, 0]], label: "ℓ" } },
    choices: [
      // distractor: uses the point's y-coordinate as the intercept
      { id: "A", text: "$y = -\\dfrac{3}{2}x + 2$" },
      // distractor: copies line l instead of shifting it through the point
      { id: "B", text: "$y = -\\dfrac{3}{2}x + 3$" },
      // distractor: drops the sign on the slope, then fits the point
      { id: "C", text: "$y = \\dfrac{3}{2}x - 4$" },
      { id: "D", text: "$y = -\\dfrac{3}{2}x + 8$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Line $\\ell$ drops from $(0, 3)$ to $(2, 0)$: slope $-\\dfrac{3}{2}$. Keep that slope and fit $(4, 2)$: $2 = -\\dfrac{3}{2}(4) + b = -6 + b$, so $b = 8$.\n\n**The Full Solution:**\nStep 1: Slope of $\\ell$ from the marked points: $\\dfrac{0 - 3}{2 - 0} = -\\dfrac{3}{2}$.\nStep 2: Line $n$ is parallel, so $n$ is $y = -\\dfrac{3}{2}x + b$.\nStep 3: Substitute $(4, 2)$: $2 = -6 + b$, so $b = 8$. The equation is $y = -\\dfrac{3}{2}x + 8$. Check: $-\\dfrac{3}{2}(4) + 8 = 2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -\\dfrac{3}{2}x + 2$): uses the $y$-coordinate of $(4, 2)$ as the intercept without substituting.\n* Choice B ($y = -\\dfrac{3}{2}x + 3$): is line $\\ell$ itself; it passes through $(4, -3)$, not $(4, 2)$.\n* Choice C ($y = \\dfrac{3}{2}x - 4$): uses slope $+\\dfrac{3}{2}$, then fits the point; the graph falls, so the slope must be negative.\n\n**Test Day Takeaway:** Read the slope from two lattice points, keep it for the parallel line, and substitute the given point to find the intercept. The line that shares both slope and intercept with $\\ell$ is $\\ell$, not a new line.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-line-through-a-point",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-230",
    domain: "algebra",
    skills: ["writing-parallel-equation"],
    difficulty: "medium",
    type: "fill-in",
    question: "Line $f$ is parallel to the line $y = \\dfrac{5}{4}x + 3$ and passes through $(8, 2)$ in the $xy$-plane. At what value of $x$ does line $f$ intersect the $x$-axis?",
    correctAnswer: "6.4",
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**The correct answer is $6.4$.**\n\n**The Fast Way (~25s):** Line $f$: $y = \\dfrac{5}{4}x + b$ with $2 = 10 + b$, so $b = -8$. Set $y = 0$: $\\dfrac{5}{4}x = 8$, so $x = \\dfrac{32}{5} = 6.4$.\n\n**The Full Solution:**\nStep 1: Parallel lines share slope, so $f$ is $y = \\dfrac{5}{4}x + b$. Substitute $(8, 2)$: $2 = \\dfrac{5}{4}(8) + b = 10 + b$, so $b = -8$.\nStep 2: The line meets the $x$-axis where $y = 0$: $0 = \\dfrac{5}{4}x - 8$, so $\\dfrac{5}{4}x = 8$.\nStep 3: Multiply by $\\dfrac{4}{5}$: $x = \\dfrac{32}{5} = 6.4$. Check: $\\dfrac{5}{4}(6.4) - 8 = 8 - 8 = 0$. $\\checkmark$\n\n**Common Mistakes:** Entering $-8$ (the $y$-intercept, not the $x$-intercept); using the intercept $3$ of the given line and entering $-2.4$; entering $10$ (the value of $\\dfrac{5}{4}(8)$, an intermediate step).\n\n**Test Day Takeaway:** Build the parallel line first, then set $y = 0$ for the $x$-intercept. Either $32/5$ or $6.4$ is acceptable for the answer field.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-line-through-a-point",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-231",
    domain: "algebra",
    skills: ["writing-parallel-equation"],
    difficulty: "hard",
    type: "fill-in",
    question: "In the $xy$-plane, line $t$ passes through the points $(-5, 2)$ and $(5, 10)$ and is parallel to the line with equation $ax - 5y = 20$, where $a$ is a constant. What is the value of $a$?",
    correctAnswer: "4",
    explanation: "**SAT Pattern: Parallel Line Through a Point**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~25s):** Slope of $t$: $\\dfrac{10 - 2}{5 - (-5)} = \\dfrac{8}{10} = \\dfrac{4}{5}$. The line $ax - 5y = 20$ has slope $\\dfrac{a}{5}$. Parallel means $\\dfrac{a}{5} = \\dfrac{4}{5}$, so $a = 4$.\n\n**The Full Solution:**\nStep 1: Compute the slope of line $t$ from its two points: $\\dfrac{10 - 2}{5 - (-5)} = \\dfrac{8}{10} = \\dfrac{4}{5}$.\nStep 2: Solve $ax - 5y = 20$ for $y$: $-5y = -ax + 20$, so $y = \\dfrac{a}{5}x - 4$. Its slope is $\\dfrac{a}{5}$.\nStep 3: Parallel lines have equal slopes: $\\dfrac{a}{5} = \\dfrac{4}{5}$, so $a = 4$. Check: $4x - 5y = 20$ has slope $\\dfrac{4}{5}$, matching line $t$. $\\checkmark$\n\n**Common Mistakes:** Computing the run as $5 - 5 = 0$ by dropping the sign on $-5$; reading the slope of $ax - 5y = 20$ as $-\\dfrac{a}{5}$ and entering $-4$; entering $\\dfrac{4}{5}$ (the slope itself rather than $a$).\n\n**Test Day Takeaway:** \"Parallel\" is an equation between slopes. Express the unknown line's slope in terms of the parameter ($-\\dfrac{A}{B}$ in standard form) and set it equal to the known slope.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-line-through-a-point",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 10/3: matching-coefficients (8 items) =====
  {
    id: "bank-alg-232",
    domain: "algebra",
    skills: ["distributive-property"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The expression $(x + 7)(x + 4)$ can be written in the form $x^2 + bx + 28$, where $b$ is a constant. What is the value of $b$?",
    choices: [
      // distractor: reports one factor's constant instead of the sum
      { id: "A", text: "$4$" },
      // distractor: reports the other factor's constant instead of the sum
      { id: "B", text: "$7$" },
      { id: "C", text: "$11$" },
      // distractor: reports the product 7 times 4, which is the constant term
      { id: "D", text: "$28$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The $x$-coefficient of $(x + 7)(x + 4)$ is the sum $7 + 4 = 11$.\n\n**The Full Solution:**\nStep 1: Expand: $(x + 7)(x + 4) = x^2 + 4x + 7x + 28 = x^2 + 11x + 28$.\nStep 2: Two polynomials that are equal for all $x$ have identical coefficients, so match the $x$-terms: $b = 11$.\nStep 3: Check the other coefficients too: $x^2$ matches $x^2$, and $28$ matches $28$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): takes the constant from one factor as the whole $x$-coefficient.\n* Choice B ($7$): takes the constant from the other factor.\n* Choice D ($28$): is the product $7 \\cdot 4$, which is the constant term, not the $x$-coefficient.\n\n**Test Day Takeaway:** For $(x + p)(x + q)$, the $x$-coefficient is $p + q$ and the constant is $pq$. \"Can be written in the form\" means match coefficients term by term.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "matching-coefficients",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-233",
    domain: "algebra",
    skills: ["distributive-property"],
    difficulty: "easy",
    type: "fill-in",
    question: "The equation $(x - 5)(x + 2) = x^2 + cx - 10$ is true for all values of $x$, where $c$ is a constant. What is the value of $c$?",
    correctAnswer: "-3",
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**The correct answer is $-3$.**\n\n**The Fast Way (~10s):** The $x$-coefficient is the sum of the constants in the factors: $-5 + 2 = -3$.\n\n**The Full Solution:**\nStep 1: Expand the left side: $(x - 5)(x + 2) = x^2 + 2x - 5x - 10 = x^2 - 3x - 10$.\nStep 2: The equation holds for every $x$, so the coefficients of $x$ must agree: $c = -3$.\nStep 3: Check: the constant terms also agree, $-5 \\cdot 2 = -10$. $\\checkmark$\n\n**Common Mistakes:** Entering $3$ (dropping the sign); entering $-7$ (subtracting $5 + 2$); entering $-10$ (the constant term); entering $7$ (using $5 + 2$ with the wrong sign).\n\n**Test Day Takeaway:** In $(x + p)(x + q)$ the linear coefficient is $p + q$ with signs included. Negative answers are common here; enter the minus sign.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "matching-coefficients",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-234",
    domain: "algebra",
    skills: ["distributive-property"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "If $(3x + 2)(x - 5) = 3x^2 + kx - 10$ for all values of $x$, what is the value of the constant $k$?",
    choices: [
      // distractor: subtracts the outer and inner products (-15 - 2) instead of adding
      { id: "A", text: "$-17$" },
      { id: "B", text: "$-13$" },
      // distractor: reports the constant term
      { id: "C", text: "$-10$" },
      // distractor: drops the sign on the combined x-terms
      { id: "D", text: "$13$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Outer plus inner: $3x(-5) + 2(x) = -15x + 2x = -13x$. So $k = -13$.\n\n**The Full Solution:**\nStep 1: Expand with FOIL: $(3x + 2)(x - 5) = 3x^2 - 15x + 2x - 10$.\nStep 2: Combine the $x$-terms: $-15x + 2x = -13x$, so the left side is $3x^2 - 13x - 10$.\nStep 3: Match coefficients with $3x^2 + kx - 10$: $k = -13$. Check: the $x^2$ and constant terms agree ($3$ and $-10$). $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-17$): subtracts the inner product instead of adding it, $-15 - 2$.\n* Choice C ($-10$): reports the constant term rather than the $x$-coefficient.\n* Choice D ($13$): combines correctly but drops the negative sign.\n\n**Test Day Takeaway:** When the leading coefficient is not $1$, you cannot just add the constants. Compute outer and inner products separately, keep their signs, and add.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "matching-coefficients",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-235",
    domain: "algebra",
    skills: ["distributive-property"],
    difficulty: "medium",
    type: "fill-in",
    question: "The expressions $(4x + a)(x - 3)$ and $4x^2 - 7x - 15$ are equivalent, where $a$ is a constant. What is the value of $a$?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** Match the constant terms: $a \\cdot (-3) = -15$, so $a = 5$. Confirm with the $x$-terms: $-12 + 5 = -7$. $\\checkmark$\n\n**The Full Solution:**\nStep 1: Expand: $(4x + a)(x - 3) = 4x^2 - 12x + ax - 3a = 4x^2 + (a - 12)x - 3a$.\nStep 2: Equivalent expressions have equal coefficients. Constant terms: $-3a = -15$, so $a = 5$.\nStep 3: Check the $x$-coefficient: $a - 12 = 5 - 12 = -7$, matching $-7x$. $\\checkmark$\n\n**Common Mistakes:** Entering $-5$ (dividing $-15$ by $3$ instead of $-3$); entering $19$ (solving $a - 12 = 7$ with a sign error); entering $-7$ (copying the $x$-coefficient).\n\n**Test Day Takeaway:** With one unknown in the factors, the constant term usually pins it down in one step; use the $x$-term as a free check rather than a second unknown.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "matching-coefficients",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-236",
    domain: "algebra",
    skills: ["distributive-property"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "For all values of $x$, $(px + 4)(x + q) = 3x^2 + 10x + 8$, where $p$ and $q$ are constants. What is the value of $p + q$?",
    choices: [
      // distractor: reports q alone
      { id: "A", text: "$2$" },
      // distractor: reports p alone
      { id: "B", text: "$3$" },
      { id: "C", text: "$5$" },
      // distractor: reports the product pq
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The $x^2$-term gives $p = 3$; the constant term gives $4q = 8$, so $q = 2$. Then $p + q = 5$.\n\n**The Full Solution:**\nStep 1: Expand: $(px + 4)(x + q) = px^2 + pqx + 4x + 4q = px^2 + (pq + 4)x + 4q$.\nStep 2: Match the $x^2$-coefficients: $p = 3$. Match the constants: $4q = 8$, so $q = 2$.\nStep 3: Check the $x$-coefficient: $pq + 4 = 3 \\cdot 2 + 4 = 10$. $\\checkmark$ So $p + q = 3 + 2 = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reports $q$ alone.\n* Choice B ($3$): reports $p$ alone.\n* Choice D ($6$): reports the product $pq$ instead of the sum.\n\n**Test Day Takeaway:** The leading and constant terms each involve only one unknown; solve those first, then use the middle term to verify before combining as asked.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "matching-coefficients",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-237",
    domain: "algebra",
    skills: ["distributive-property"],
    difficulty: "medium",
    type: "fill-in",
    question: "The expression $(2x + 3)^2$ is equivalent to $4x^2 + kx + 9$, where $k$ is a constant. What is the value of $k$?",
    correctAnswer: "12",
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~10s):** $(a + b)^2 = a^2 + 2ab + b^2$ with $a = 2x$, $b = 3$: the middle term is $2(2x)(3) = 12x$, so $k = 12$.\n\n**The Full Solution:**\nStep 1: Write the square as a product: $(2x + 3)(2x + 3)$.\nStep 2: Expand: $4x^2 + 6x + 6x + 9 = 4x^2 + 12x + 9$.\nStep 3: Match with $4x^2 + kx + 9$: $k = 12$. Check: the $x^2$-term $4$ and constant $9$ agree. $\\checkmark$\n\n**Common Mistakes:** Entering $6$ (writing only one of the two cross terms); entering $0$ (assuming $(2x + 3)^2 = 4x^2 + 9$); entering $3$ or $9$ (copying a constant).\n\n**Test Day Takeaway:** A squared binomial always has a middle term of $2ab$. Forgetting the doubled cross term is the single most common expansion error on the test.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "matching-coefficients",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-238",
    domain: "algebra",
    skills: ["distributive-property"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the equation $(3x + a)(2x + b) = 6x^2 + 19x + 10$, $a$ and $b$ are positive integers, and the equation is true for all values of $x$. What is the value of $b - a$?",
    choices: [
      // distractor: computes a - b instead of b - a
      { id: "A", text: "$-3$" },
      { id: "B", text: "$3$" },
      // distractor: computes a + b
      { id: "C", text: "$7$" },
      // distractor: reports the product ab
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Matching Coefficients with Integer Constraints**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** $ab = 10$ and $3b + 2a = 19$. Test the positive factor pairs of $10$: $(a, b) = (2, 5)$ gives $15 + 4 = 19$. So $b - a = 3$.\n\n**The Full Solution:**\nStep 1: Expand: $(3x + a)(2x + b) = 6x^2 + 3bx + 2ax + ab = 6x^2 + (3b + 2a)x + ab$.\nStep 2: Match coefficients: $ab = 10$ and $3b + 2a = 19$. Since $a$ and $b$ are positive integers, $(a, b)$ is one of $(1, 10)$, $(2, 5)$, $(5, 2)$, $(10, 1)$.\nStep 3: Test each in $3b + 2a$: $32$, $19$, $16$, $23$. Only $(2, 5)$ works. Check: $(3x + 2)(2x + 5) = 6x^2 + 15x + 4x + 10 = 6x^2 + 19x + 10$. $\\checkmark$ So $b - a = 5 - 2 = 3$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): computes $a - b$ instead of $b - a$.\n* Choice C ($7$): computes $a + b$, a different combination than the one asked for.\n* Choice D ($10$): reports the product $ab$, which is the constant term.\n\n**Test Day Takeaway:** With two unknowns in the factors, the constant term limits the candidates to a few integer pairs; the middle coefficient picks the winner. Then read the question again to see which combination it wants.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "matching-coefficients",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-239",
    domain: "algebra",
    skills: ["distributive-property"],
    difficulty: "hard",
    type: "fill-in",
    question: "The equation $(x + a)(3x - b) = 3x^2 + 7x - 20$ is true for all values of $x$, where $a$ and $b$ are positive integers. What is the value of $a + b$?",
    correctAnswer: "9",
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~30s):** $ab = 20$ and $3a - b = 7$. Among factor pairs of $20$, $(a, b) = (4, 5)$ gives $12 - 5 = 7$. So $a + b = 9$.\n\n**The Full Solution:**\nStep 1: Expand: $(x + a)(3x - b) = 3x^2 - bx + 3ax - ab = 3x^2 + (3a - b)x - ab$.\nStep 2: Match coefficients: $-ab = -20$, so $ab = 20$; and $3a - b = 7$. Positive integer pairs with $ab = 20$: $(1, 20)$, $(2, 10)$, $(4, 5)$, $(5, 4)$, $(10, 2)$, $(20, 1)$.\nStep 3: Test $3a - b$: $-17$, $-4$, $7$, $11$, $28$, $59$. Only $(4, 5)$ gives $7$. Check: $(x + 4)(3x - 5) = 3x^2 - 5x + 12x - 20 = 3x^2 + 7x - 20$. $\\checkmark$ So $a + b = 9$.\n\n**Common Mistakes:** Entering $20$ (the product); entering $1$ (computing $b - a$); choosing $(5, 4)$ because $ab = 20$ without checking the middle term, which gives $a + b = 9$ by luck but $3a - b = 11$; entering $-9$ from a sign error in $-ab$.\n\n**Test Day Takeaway:** Two unknown constants need two matched coefficients. Let the constant term list the integer candidates and the $x$-term select the correct pair.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "matching-coefficients",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 11/2: parallel-lines-no-solution (8 items) =====
  // Conceptually identical to no-solution-condition; distinct slug per test bundles.
  {
    id: "bank-alg-240",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The system of equations $y = -5x + 8$ and $y = cx - 3$, where $c$ is a constant, has no solution. What is the value of $c$?",
    choices: [
      { id: "A", text: "$-5$" },
      // distractor: reads the constant term of the second equation
      { id: "B", text: "$-3$" },
      // distractor: drops the sign on the slope
      { id: "C", text: "$5$" },
      // distractor: reports the y-intercept of the first equation
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** No solution means parallel lines: equal slopes, different intercepts. The intercepts $8$ and $-3$ already differ, so set the slopes equal: $c = -5$.\n\n**The Full Solution:**\nStep 1: Two lines in slope-intercept form have no common point exactly when they are parallel and distinct.\nStep 2: Parallel requires equal slopes, so $c = -5$.\nStep 3: Distinct requires different $y$-intercepts: $8 \\neq -3$. $\\checkmark$ With $c = -5$, the equation $-5x + 8 = -5x - 3$ reduces to $8 = -3$, which is never true, confirming no solution.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-3$): confuses the constant term of the second equation with the slope.\n* Choice C ($5$): drops the sign; lines with slopes $-5$ and $5$ cross exactly once.\n* Choice D ($8$): reports the $y$-intercept of the first equation.\n\n**Test Day Takeaway:** \"No solution\" for two lines means same slope, different intercept. Match the coefficient of $x$ and confirm the constants differ.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-lines-no-solution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-241",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "easy",
    type: "fill-in",
    question: "$y = 6x - 9$\n\n$y = kx + 2$\n\nIn the given system of equations, $k$ is a constant. The system has no solution. What is the value of $k$?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~10s):** Both equations are already solved for $y$. No solution means the lines are parallel, so the slopes must match: $k = 6$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has no solution exactly when its graphs are distinct parallel lines.\nStep 2: In slope-intercept form the slopes are $6$ and $k$, so parallel requires $k = 6$.\nStep 3: Check that the lines are distinct: the $y$-intercepts are $-9$ and $2$, which differ, so the lines never meet. $\\checkmark$\n\n**Common Mistakes:** Setting the intercepts equal ($k$-value confused with the constant $2$), or answering $-9$ by reading the wrong number from the first equation. Only the slope controls whether lines are parallel.\n\n**Test Day Takeaway:** In $y = mx + b$ form, \"no solution\" is a one-step read: equal $m$, different $b$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-lines-no-solution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-242",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of line $\\ell$ in the $xy$-plane is shown. A system of two linear equations consists of the equation of line $\\ell$ and the equation $y = cx - 4$, where $c$ is a constant. If the system has no solution, what is the value of $c$?",
    diagram: { type: "linearGraph", params: { slope: 2, yIntercept: 3, xRange: [-6, 6], yRange: [-8, 10], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 3], [1, 5]], label: "line ℓ" } },
    choices: [
      // distractor: slope sign flipped (reads the rise as negative)
      { id: "A", text: "$-2$" },
      // distractor: negative reciprocal; the perpendicular slope
      { id: "B", text: "$-0.5$" },
      // distractor: run over rise instead of rise over run
      { id: "C", text: "$0.5$" },
      { id: "D", text: "$2$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** No solution means the second line is parallel to $\\ell$, so $c$ equals the slope of $\\ell$. From the marked points $(0, 3)$ and $(1, 5)$ the slope is $2$, so $c = 2$.\n\n**The Full Solution:**\nStep 1: Read two lattice points on $\\ell$: $(0, 3)$ and $(1, 5)$. Slope $= \\frac{5 - 3}{1 - 0} = 2$, and the $y$-intercept is $3$, so $\\ell$ is $y = 2x + 3$.\nStep 2: The line $y = cx - 4$ is parallel to $\\ell$ exactly when $c = 2$.\nStep 3: With $c = 2$ the intercepts are $3$ and $-4$, which differ, so the lines are parallel and distinct and the system has no solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): flips the sign of the slope, as if $\\ell$ fell from left to right; the graph rises.\n* Choice B ($-0.5$): the negative reciprocal, which makes the lines perpendicular; one solution, not none.\n* Choice C ($0.5$): computes run over rise; between the marked points the rise is $2$ for a run of $1$.\n\n**Test Day Takeaway:** \"No solution\" on a graph is a slope-matching question: pull the slope from two clean lattice points and confirm the intercepts differ.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-lines-no-solution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-243",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "medium",
    type: "fill-in",
    question: "$5x - 2y = 9$\n\n$kx + 6y = 4$\n\nIn the system of equations shown, $k$ is a constant and the system has no solution. What is the value of $k$?",
    correctAnswer: "-15",
    explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**The correct answer is $-15$.**\n\n**The Fast Way (~15s):** The $y$-coefficients scale by $\\frac{6}{-2} = -3$, so the $x$-coefficients must scale the same way: $k = 5 \\cdot (-3) = -15$.\n\n**The Full Solution:**\nStep 1: Two equations in standard form describe parallel lines when the $x$- and $y$-coefficients are proportional: $\\frac{k}{5} = \\frac{6}{-2}$.\nStep 2: $\\frac{6}{-2} = -3$, so $k = -15$.\nStep 3: Confirm the lines are not the same line: the constants would need the ratio $\\frac{4}{9}$, and $\\frac{4}{9} \\neq -3$, so the lines are parallel and distinct. $\\checkmark$\n\n**Common Mistakes:** Dropping the sign and answering $15$; the $y$-coefficients change sign from $-2$ to $6$, so the multiplier is negative. Another slip is matching $k$ to $6$ directly without applying the multiplier to $5$.\n\n**Test Day Takeaway:** In standard form, find the multiplier between one pair of coefficients, apply it to the other pair, and check that it fails for the constants.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-lines-no-solution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-244",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table gives three values of $x$ and their corresponding values of $y$ for a linear equation. A system of two linear equations consists of this equation and the equation $y = cx + 5$, where $c$ is a constant. The system has no solution. What is the value of $c$?",
    diagram: { type: "dataTable", params: { headers: ["x", "y"], rows: [["1", "9"], ["4", "3"], ["7", "-3"]] } },
    choices: [
      { id: "A", text: "$-2$" },
      // distractor: change in x over change in y
      { id: "B", text: "$-0.5$" },
      // distractor: negative reciprocal (perpendicular slope)
      { id: "C", text: "$0.5$" },
      // distractor: sign dropped; y decreases as x increases
      { id: "D", text: "$2$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The line in the table drops $6$ units for every $3$ units of $x$, so its slope is $-2$. A parallel line has the same slope: $c = -2$.\n\n**The Full Solution:**\nStep 1: From the table, slope $= \\frac{3 - 9}{4 - 1} = \\frac{-6}{3} = -2$. Using $(1, 9)$: $9 = -2(1) + b$ gives $b = 11$, so the equation is $y = -2x + 11$.\nStep 2: The system has no solution only if $y = cx + 5$ is parallel to this line, so $c = -2$.\nStep 3: The intercepts $11$ and $5$ differ, so the lines are distinct parallel lines and never intersect. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-0.5$): computes $\\frac{\\Delta x}{\\Delta y} = \\frac{3}{-6}$ instead of $\\frac{\\Delta y}{\\Delta x}$.\n* Choice C ($0.5$): the negative reciprocal, which would make the lines perpendicular.\n* Choice D ($2$): ignores that $y$ decreases as $x$ increases; the slope is negative.\n\n**Test Day Takeaway:** A table hides a slope in plain sight: divide the change in $y$ by the change in $x$ between any two rows, then match it for \"no solution.\"",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-lines-no-solution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-245",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "medium",
    type: "fill-in",
    question: "$5x + my = 20$\n\n$-10x + 6y = 7$\n\nIn the given system of equations, $m$ is a constant. The system has no solution. What is the value of $m$?",
    correctAnswer: "-3",
    explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**The correct answer is $-3$.**\n\n**The Fast Way (~15s):** The $x$-coefficients scale by $\\frac{-10}{5} = -2$, so $6 = -2m$ and $m = -3$.\n\n**The Full Solution:**\nStep 1: Parallel lines in standard form have proportional variable coefficients: $\\frac{-10}{5} = \\frac{6}{m}$.\nStep 2: The left side is $-2$, so $-2m = 6$ and $m = -3$.\nStep 3: The constants $20$ and $7$ have ratio $\\frac{7}{20} \\neq -2$, so the lines are parallel but not identical. No solution. $\\checkmark$\n\n**Common Mistakes:** Writing $\\frac{5}{-10} = \\frac{m}{6}$ but then solving as if the ratio were $2$, giving $m = 3$. Both coefficient ratios must carry the same sign.\n\n**Test Day Takeaway:** Compute the multiplier from the known pair of coefficients, then solve one small equation for the unknown coefficient.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-lines-no-solution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-246",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$y = \\dfrac{3}{4}x - 2$\n\n$ax - 8y = b$\n\nIn the given system of equations, $a$ and $b$ are constants. If the system has no solution, which of the following must be true?",
    choices: [
      // distractor: those values make the lines identical (infinitely many solutions)
      { id: "A", text: "$a = 6$ and $b = 16$" },
      { id: "B", text: "$a = 6$ and $b \\neq 16$" },
      // distractor: sign error when solving -8y for y
      { id: "C", text: "$a = -6$ and $b \\neq 16$" },
      // distractor: swaps the roles of the slope and intercept conditions
      { id: "D", text: "$a \\neq 6$ and $b = 16$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Solve the second equation for $y$: $y = \\frac{a}{8}x - \\frac{b}{8}$. Parallel needs $\\frac{a}{8} = \\frac{3}{4}$, so $a = 6$; distinct needs $-\\frac{b}{8} \\neq -2$, so $b \\neq 16$.\n\n**The Full Solution:**\nStep 1: Rewrite $ax - 8y = b$ as $-8y = -ax + b$, then $y = \\frac{a}{8}x - \\frac{b}{8}$.\nStep 2: For no solution the slopes must be equal: $\\frac{a}{8} = \\frac{3}{4}$ gives $a = 6$.\nStep 3: The $y$-intercepts must differ: $-\\frac{b}{8} \\neq -2$ gives $b \\neq 16$. Check with $a = 6$, $b = 0$: $6x - 8y = 0$ is $y = \\frac{3}{4}x$, parallel to the first line and distinct. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($a = 6$ and $b = 16$): with $b = 16$ the second line becomes $y = \\frac{3}{4}x - 2$, the same line, which gives infinitely many solutions.\n* Choice C ($a = -6$ and $b \\neq 16$): loses a sign when dividing $-ax$ by $-8$; the slope is $+\\frac{a}{8}$.\n* Choice D ($a \\neq 6$ and $b = 16$): reverses the conditions; a different slope guarantees exactly one intersection.\n\n**Test Day Takeaway:** Two conditions define \"no solution\": equal slopes AND unequal intercepts. A choice that fixes only one of them is a trap.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-lines-no-solution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-247",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "hard",
    type: "fill-in",
    question: "$ax + 2y = 12$\n\n$8x + ay = 5$\n\nIn the given system of equations, $a$ is a positive constant. The system has no solution. What is the value of $a$?",
    correctAnswer: "4",
    explanation: "**SAT Pattern: Parallel Lines (No Solution)**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~20s):** Parallel means $\\frac{a}{8} = \\frac{2}{a}$, so $a^2 = 16$. Since $a$ is positive, $a = 4$.\n\n**The Full Solution:**\nStep 1: The lines are parallel when the coefficient ratios agree: $\\frac{a}{8} = \\frac{2}{a}$.\nStep 2: Cross-multiply: $a^2 = 16$, so $a = 4$ or $a = -4$. The stem says $a$ is positive, so $a = 4$.\nStep 3: Check with $a = 4$: the system is $4x + 2y = 12$ and $8x + 4y = 5$. The second's coefficients are twice the first's, but $5 \\neq 2 \\cdot 12$, so the lines are parallel and distinct. $\\checkmark$\n\n**Common Mistakes:** Solving $a^2 = 16$ and reporting $-4$ (ignores the positivity condition), or setting $\\frac{a}{8} = \\frac{a}{2}$ by matching the wrong pairs of coefficients, which has no nonzero solution.\n\n**Test Day Takeaway:** When the unknown appears in both equations, the ratio condition becomes a quadratic; use the given sign restriction to pick the root.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-lines-no-solution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 11/3: two-equation-system-from-a-word-problem (8 items) =====
  {
    id: "bank-alg-248",
    domain: "algebra",
    skills: ["word-problem-to-equation", "setting-up-systems"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A shipment contains a total of $48$ boxes, each of which is either small or large. The shipment contains $12$ more small boxes than large boxes. How many large boxes are in the shipment?",
    choices: [
      // distractor: repeats the given difference
      { id: "A", text: "$12$" },
      { id: "B", text: "$18$" },
      // distractor: halves 48 and ignores the difference
      { id: "C", text: "$24$" },
      // distractor: number of small boxes (wrong quantity reported)
      { id: "D", text: "$30$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Remove the $12$ extra small boxes: $48 - 12 = 36$ boxes are split evenly, so there are $18$ large boxes.\n\n**The Full Solution:**\nStep 1: Let $L$ be the number of large boxes and $S$ the number of small boxes. Then $S + L = 48$ and $S = L + 12$.\nStep 2: Substitute: $(L + 12) + L = 48$, so $2L + 12 = 48$ and $L = 18$.\nStep 3: Then $S = 30$. Check: $30 + 18 = 48$ and $30 - 18 = 12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): repeats the difference from the stem as if it were a count.\n* Choice C ($24$): splits $48$ in half and ignores the \"12 more\" condition.\n* Choice D ($30$): the number of small boxes; the question asks for large boxes.\n\n**Test Day Takeaway:** Translate \"12 more than\" into $S = L + 12$, substitute into the total, and reread the question before choosing which quantity to report.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "two-equation-system-from-a-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-249",
    domain: "algebra",
    skills: ["word-problem-to-equation", "setting-up-systems"],
    difficulty: "easy",
    type: "fill-in",
    question: "A rope $54$ centimeters long is cut into two pieces. The length of the longer piece is $5$ times the length of the shorter piece. What is the length, in centimeters, of the longer piece?",
    correctAnswer: "45",
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**The correct answer is $45$.**\n\n**The Fast Way (~10s):** The pieces are in a $5:1$ ratio, so the rope is $6$ equal parts of $9$ cm; the longer piece is $5 \\cdot 9 = 45$ cm.\n\n**The Full Solution:**\nStep 1: Let $s$ be the shorter length and $\\ell$ the longer length, in centimeters. Then $s + \\ell = 54$ and $\\ell = 5s$.\nStep 2: Substitute: $s + 5s = 54$, so $6s = 54$ and $s = 9$.\nStep 3: The longer piece is $\\ell = 5(9) = 45$. Check: $9 + 45 = 54$. $\\checkmark$\n\n**Common Mistakes:** Reporting the shorter piece, $9$, or dividing $54$ by $5$ instead of by $6$ (forgetting that the total is $6$ equal parts).\n\n**Test Day Takeaway:** \"One is $k$ times the other\" splits a total into $k + 1$ equal parts.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "two-equation-system-from-a-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-250",
    domain: "algebra",
    skills: ["word-problem-to-equation", "setting-up-systems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table gives the mass of each of two types of ceramic tile. A crate contains a total of $30$ tiles of these two types, and the total mass of the tiles in the crate is $38{,}400$ grams. How many rectangular tiles are in the crate?",
    diagram: { type: "dataTable", params: { headers: ["Tile type", "Mass (grams)"], rows: [["Square", "1,000"], ["Rectangular", "1,600"]] } },
    choices: [
      { id: "A", text: "$14$" },
      // distractor: splits the 30 tiles evenly, ignoring the mass condition
      { id: "B", text: "$15$" },
      // distractor: number of square tiles (wrong variable reported)
      { id: "C", text: "$16$" },
      // distractor: divides the total mass by 1,600 as if every tile were rectangular
      { id: "D", text: "$24$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** If all $30$ tiles were square the mass would be $30{,}000$ g. Each swap to a rectangular tile adds $600$ g, and $38{,}400 - 30{,}000 = 8{,}400 = 14 \\cdot 600$, so $14$ tiles are rectangular.\n\n**The Full Solution:**\nStep 1: Let $s$ be the number of square tiles and $r$ the number of rectangular tiles. Then $s + r = 30$ and $1000s + 1600r = 38400$.\nStep 2: Substitute $s = 30 - r$: $1000(30 - r) + 1600r = 38400$, so $30000 + 600r = 38400$ and $r = 14$.\nStep 3: Then $s = 16$. Check: $1000(16) + 1600(14) = 16000 + 22400 = 38400$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($15$): assumes the tiles split evenly and never uses the mass equation.\n* Choice C ($16$): the number of square tiles; the question asks for rectangular tiles.\n* Choice D ($24$): $38400 \\div 1600$, which treats every tile as rectangular and ignores the count of $30$.\n\n**Test Day Takeaway:** Count equation plus value equation: substitute the count into the value equation and solve for the quantity the question actually names.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "two-equation-system-from-a-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-251",
    domain: "algebra",
    skills: ["word-problem-to-equation", "setting-up-systems"],
    difficulty: "medium",
    type: "fill-in",
    question: "The table gives the price per flask, in dollars, for each of two capacities of laboratory flask. A laboratory ordered a total of $20$ flasks of these two capacities for a total price of $\\$252$. How many $500$-milliliter flasks did the laboratory order?",
    diagram: { type: "dataTable", params: { headers: ["Flask capacity", "Price per flask (dollars)"], rows: [["250 mL", "9"], ["500 mL", "15"]] } },
    correctAnswer: "12",
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~20s):** If all $20$ flasks were the $250$-mL size the order would cost $\\$180$. The extra $\\$72$ comes from upgrades that each add $\\$6$, so $72 \\div 6 = 12$ flasks are the $500$-mL size.\n\n**The Full Solution:**\nStep 1: Let $a$ be the number of $250$-mL flasks and $b$ the number of $500$-mL flasks. Then $a + b = 20$ and $9a + 15b = 252$.\nStep 2: Substitute $a = 20 - b$: $9(20 - b) + 15b = 252$, so $180 + 6b = 252$ and $b = 12$.\nStep 3: Then $a = 8$. Check: $9(8) + 15(12) = 72 + 180 = 252$. $\\checkmark$\n\n**Common Mistakes:** Reporting $8$, the number of $250$-mL flasks, or dividing $252$ by $15$ and rounding, which assumes every flask is the larger size.\n\n**Test Day Takeaway:** Read the prices from the table into a value equation, pair it with the count equation, and substitute.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "two-equation-system-from-a-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-252",
    domain: "algebra",
    skills: ["word-problem-to-equation", "setting-up-systems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table gives the number of grams of protein in one serving of each of two foods. A meal consists of $8$ servings of these foods and contains a total of $44$ grams of protein. How many servings of rice are in the meal?",
    diagram: { type: "dataTable", params: { headers: ["Food", "Protein per serving (grams)"], rows: [["Lentils", "10"], ["Rice", "4"]] } },
    choices: [
      // distractor: number of servings of lentils (wrong variable)
      { id: "A", text: "$2$" },
      { id: "B", text: "$6$" },
      // distractor: the total number of servings, never split
      { id: "C", text: "$8$" },
      // distractor: 44 divided by 4 as if the meal were all rice
      { id: "D", text: "$11$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Eight servings of rice alone would give $32$ g. The extra $12$ g comes from swapping rice for lentils at $+6$ g each, so $2$ servings are lentils and $6$ are rice.\n\n**The Full Solution:**\nStep 1: Let $\\ell$ be the servings of lentils and $r$ the servings of rice. Then $\\ell + r = 8$ and $10\\ell + 4r = 44$.\nStep 2: Substitute $\\ell = 8 - r$: $10(8 - r) + 4r = 44$, so $80 - 6r = 44$ and $r = 6$.\nStep 3: Then $\\ell = 2$. Check: $10(2) + 4(6) = 20 + 24 = 44$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): the number of servings of lentils, not rice.\n* Choice C ($8$): the total number of servings; the meal is a mix of the two foods.\n* Choice D ($11$): $44 \\div 4$, which assumes the whole meal is rice and ignores the $8$-serving total.\n\n**Test Day Takeaway:** Two facts, two equations: one for the count, one for the protein. Solve, then confirm you are reporting the food the question names.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "two-equation-system-from-a-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-253",
    domain: "algebra",
    skills: ["word-problem-to-equation", "setting-up-systems"],
    difficulty: "medium",
    type: "fill-in",
    question: "A mixture of walnuts and pecans has a total mass of $900$ grams. The mass of the walnuts in the mixture is $60$ grams more than twice the mass of the pecans. What is the mass, in grams, of the pecans in the mixture?",
    correctAnswer: "280",
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**The correct answer is $280$.**\n\n**The Fast Way (~15s):** Take away the extra $60$ g: $840$ g splits into $3$ equal parts (two for walnuts, one for pecans), so the pecans are $280$ g.\n\n**The Full Solution:**\nStep 1: Let $w$ be the mass of walnuts and $p$ the mass of pecans, in grams. Then $w + p = 900$ and $w = 2p + 60$.\nStep 2: Substitute: $(2p + 60) + p = 900$, so $3p + 60 = 900$ and $p = 280$.\nStep 3: Then $w = 2(280) + 60 = 620$. Check: $620 + 280 = 900$. $\\checkmark$\n\n**Common Mistakes:** Translating \"60 more than twice\" as $2(p + 60)$, which gives $3p + 120 = 900$ and $p = 260$; or reporting the walnut mass, $620$.\n\n**Test Day Takeaway:** \"$a$ more than $b$ times\" is $b \\cdot (\\text{quantity}) + a$; build the expression in that order before substituting.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "two-equation-system-from-a-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-254",
    domain: "algebra",
    skills: ["word-problem-to-equation", "setting-up-systems"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The table gives the printing rate, in pages per minute, of each of two printers. Printer A ran for $a$ minutes and printer B ran for $b$ minutes, for a combined total of $50$ minutes, and together they printed $1{,}832$ pages. How many more minutes did printer B run than printer A?",
    diagram: { type: "dataTable", params: { headers: ["Printer", "Rate (pages per minute)"], rows: [["A", "28"], ["B", "44"]] } },
    choices: [
      { id: "A", text: "$4$" },
      // distractor: reports a alone
      { id: "B", text: "$23$" },
      // distractor: reports b alone
      { id: "C", text: "$27$" },
      // distractor: adds the two times instead of subtracting
      { id: "D", text: "$50$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Fifty minutes on printer A alone gives $1{,}400$ pages. Each minute moved to printer B adds $16$ pages, and $1{,}832 - 1{,}400 = 432 = 27 \\cdot 16$, so $b = 27$, $a = 23$, and $b - a = 4$.\n\n**The Full Solution:**\nStep 1: $a + b = 50$ and $28a + 44b = 1832$.\nStep 2: Substitute $a = 50 - b$: $28(50 - b) + 44b = 1832$, so $1400 + 16b = 1832$ and $b = 27$. Then $a = 23$.\nStep 3: The question asks for $b - a = 27 - 23 = 4$. Check: $28(23) + 44(27) = 644 + 1188 = 1832$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($23$): the value of $a$; the question asks for a difference, not a single time.\n* Choice C ($27$): the value of $b$, again not the difference.\n* Choice D ($50$): the sum of the two times, which was given in the stem.\n\n**Test Day Takeaway:** Solving the system is only step one; the last line of the stem tells you which combination of the variables to report.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "two-equation-system-from-a-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-255",
    domain: "algebra",
    skills: ["word-problem-to-equation", "setting-up-systems"],
    difficulty: "hard",
    type: "fill-in",
    question: "The table gives the volume, in liters, of each of two sizes of storage container. A shelf holds $x$ small containers and $y$ large containers with a combined volume of $138$ liters. The shelf holds $2$ more large containers than small containers. What is the total number of containers on the shelf?",
    diagram: { type: "dataTable", params: { headers: ["Container size", "Volume (liters)"], rows: [["Small", "7"], ["Large", "12"]] } },
    correctAnswer: "14",
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**The correct answer is $14$.**\n\n**The Fast Way (~25s):** Write $y = x + 2$ and substitute into $7x + 12y = 138$: $19x + 24 = 138$, so $x = 6$, $y = 8$, and the total is $14$.\n\n**The Full Solution:**\nStep 1: The volume condition is $7x + 12y = 138$; the count condition is $y = x + 2$.\nStep 2: Substitute: $7x + 12(x + 2) = 138$, so $19x + 24 = 138$, $19x = 114$, and $x = 6$.\nStep 3: Then $y = 8$, and $x + y = 14$. Check: $7(6) + 12(8) = 42 + 96 = 138$. $\\checkmark$\n\n**Common Mistakes:** Stopping at $x = 6$ or $y = 8$ instead of adding them, or writing $x = y + 2$ (reversing \"2 more large than small\"), which gives $19y + 14 = 138$ and a non-integer $y$.\n\n**Test Day Takeaway:** When the second condition compares the two counts, substitute it directly, then read the question again for the quantity it wants.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "two-equation-system-from-a-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 11/4: solve-for-a-combination (8 items) =====
  {
    id: "bank-alg-256",
    domain: "algebra",
    skills: ["elimination-method"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$3x + 2y = 19$\n\n$x + 5y = 15$\n\nIf $(x, y)$ is the solution to the given system of equations, what is the value of $4x + 7y$?",
    choices: [
      // distractor: subtracts the equations instead of adding
      { id: "A", text: "$4$" },
      // distractor: averages the two constants
      { id: "B", text: "$17$" },
      { id: "C", text: "$34$" },
      // distractor: doubles the sum
      { id: "D", text: "$68$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Add the two equations: $(3x + x) + (2y + 5y) = 19 + 15$, which is exactly $4x + 7y = 34$.\n\n**The Full Solution:**\nStep 1: Notice that $4x + 7y$ is the sum of the left sides: $3x + x = 4x$ and $2y + 5y = 7y$.\nStep 2: Adding the equations gives $4x + 7y = 34$ directly.\nStep 3: Check by solving: from the second equation $x = 15 - 5y$; substituting, $3(15 - 5y) + 2y = 19$ gives $y = 2$, $x = 5$, and $4(5) + 7(2) = 34$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): subtracts the constants, $19 - 15$, but subtracting the equations gives $2x - 3y$, not $4x + 7y$.\n* Choice B ($17$): the average of $19$ and $15$, which corresponds to no valid combination.\n* Choice D ($68$): doubles the correct sum, as if $4x + 7y$ were twice the sum of the left sides.\n\n**Test Day Takeaway:** Before solving for $x$ and $y$, compare the target expression to the sum or difference of the equations.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "solve-for-a-combination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-257",
    domain: "algebra",
    skills: ["elimination-method"],
    difficulty: "easy",
    type: "fill-in",
    question: "$p + q = 14$\n\n$p - q = 6$\n\nIf $(p, q)$ is the solution to the given system of equations, what is the value of $4p - q$?",
    correctAnswer: "36",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**The correct answer is $36$.**\n\n**The Fast Way (~10s):** Adding the equations gives $2p = 20$, so $p = 10$ and $q = 4$; then $4p - q = 40 - 4 = 36$.\n\n**The Full Solution:**\nStep 1: Add the equations: $2p = 20$, so $p = 10$.\nStep 2: Substitute into $p + q = 14$: $q = 4$.\nStep 3: Evaluate $4p - q = 4(10) - 4 = 36$. Check: $10 - 4 = 6$. $\\checkmark$\n\n**Common Mistakes:** Computing $4p + q = 44$ by ignoring the minus sign, or stopping at $p = 10$ without evaluating the requested expression.\n\n**Test Day Takeaway:** Sum-and-difference systems solve in one addition; then evaluate the target expression carefully, sign included.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "solve-for-a-combination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-258",
    domain: "algebra",
    skills: ["elimination-method"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$2x + 7y = 25$\n\n$5x + 3y = 19$\n\nIf $(x, y)$ is the solution to the given system of equations, what is the value of $3x - 4y$?",
    choices: [
      // distractor: negates the sum of the constants
      { id: "A", text: "$-44$" },
      { id: "B", text: "$-6$" },
      // distractor: subtracts in the wrong order (first minus second)
      { id: "C", text: "$6$" },
      // distractor: adds the equations instead of subtracting
      { id: "D", text: "$44$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Second equation minus first: $(5x - 2x) + (3y - 7y) = 19 - 25$, so $3x - 4y = -6$.\n\n**The Full Solution:**\nStep 1: The target $3x - 4y$ matches $(5x + 3y) - (2x + 7y)$: $5x - 2x = 3x$ and $3y - 7y = -4y$.\nStep 2: Subtract the constants in the same order: $19 - 25 = -6$.\nStep 3: Check by solving: multiply the first equation by $5$ and the second by $2$ to get $10x + 35y = 125$ and $10x + 6y = 38$; subtracting gives $29y = 87$, so $y = 3$ and $x = 2$. Then $3(2) - 4(3) = -6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-44$): negates the sum of the constants; no combination of the equations produces $-44$ for this target.\n* Choice C ($6$): subtracts first minus second, which gives $-3x + 4y = 6$, the opposite sign of the target.\n* Choice D ($44$): adds the equations, but the sum is $7x + 10y$, not $3x - 4y$.\n\n**Test Day Takeaway:** When the target's coefficients are differences of the given coefficients, subtract the equations in the matching order and keep the sign of the constants.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "solve-for-a-combination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-259",
    domain: "algebra",
    skills: ["elimination-method"],
    difficulty: "medium",
    type: "fill-in",
    question: "$5x + 2y = 23$\n\n$x + 4y = 13$\n\nIf $(x, y)$ is the solution to the given system of equations, what is the value of $x + y$?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~10s):** Add the equations: $6x + 6y = 36$, so $x + y = 6$.\n\n**The Full Solution:**\nStep 1: Adding the two equations gives $6x + 6y = 36$.\nStep 2: Divide by $6$: $x + y = 6$.\nStep 3: Check by solving: $x = 13 - 4y$, so $5(13 - 4y) + 2y = 23$ gives $65 - 18y = 23$, $y = \\frac{7}{3}$, $x = \\frac{11}{3}$, and $x + y = \\frac{18}{3} = 6$. $\\checkmark$\n\n**Common Mistakes:** Solving for $x$ and $y$ separately and making an arithmetic slip with the fractions, or reporting $36$ without dividing by $6$.\n\n**Test Day Takeaway:** If the two equations add to a multiple of the target, the answer is one addition and one division away, even when $x$ and $y$ themselves are fractions.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "solve-for-a-combination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-260",
    domain: "algebra",
    skills: ["elimination-method"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$6x - y = 14$\n\n$2x + 3y = 18$\n\nIf $(x, y)$ is the solution to the given system of equations, what is the value of $8x + 2y$?",
    choices: [
      // distractor: subtracts the equations (gives 4x - 4y = -4)
      { id: "A", text: "$-4$" },
      // distractor: halves the sum, confusing 8x + 2y with 4x + y
      { id: "B", text: "$16$" },
      { id: "C", text: "$32$" },
      // distractor: doubles the sum
      { id: "D", text: "$64$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Add the equations: $8x + 2y = 32$.\n\n**The Full Solution:**\nStep 1: The sum of the left sides is $(6x + 2x) + (-y + 3y) = 8x + 2y$, exactly the target.\nStep 2: The sum of the right sides is $14 + 18 = 32$.\nStep 3: Check by solving: from the first equation $y = 6x - 14$; then $2x + 3(6x - 14) = 18$ gives $20x = 60$, $x = 3$, $y = 4$, and $8(3) + 2(4) = 32$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): subtracts the equations, which gives $4x - 4y = -4$, a different combination.\n* Choice B ($16$): halves the sum, reporting $4x + y$ instead of $8x + 2y$.\n* Choice D ($64$): doubles the sum, as if the target were $16x + 4y$.\n\n**Test Day Takeaway:** Match the target's coefficients to a sum or difference of the equations before touching substitution.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "solve-for-a-combination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-261",
    domain: "algebra",
    skills: ["elimination-method"],
    difficulty: "medium",
    type: "fill-in",
    question: "$4x + 5y = 33$\n\n$2x - 3y = -11$\n\nIf $(x, y)$ is the solution to the given system of equations, what is the value of $6x + 2y$?",
    correctAnswer: "22",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**The correct answer is $22$.**\n\n**The Fast Way (~10s):** Add the equations: $(4x + 2x) + (5y - 3y) = 33 + (-11)$, so $6x + 2y = 22$.\n\n**The Full Solution:**\nStep 1: The target $6x + 2y$ is the sum of the left sides, since $4x + 2x = 6x$ and $5y + (-3y) = 2y$.\nStep 2: Add the constants: $33 + (-11) = 22$.\nStep 3: Check by solving: from the second equation $2x = 3y - 11$, so $4x = 6y - 22$; substituting, $6y - 22 + 5y = 33$ gives $y = 5$, $x = 2$, and $6(2) + 2(5) = 22$. $\\checkmark$\n\n**Common Mistakes:** Adding $33 + 11 = 44$ by dropping the negative on $-11$, or subtracting the equations, which gives $2x + 8y$, not the target.\n\n**Test Day Takeaway:** Line up the coefficients: if the target is the sum of the left sides, the answer is the sum of the right sides, signs included.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "solve-for-a-combination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-262",
    domain: "algebra",
    skills: ["elimination-method"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$3x + 5y = 21$\n\n$7x + y = 17$\n\nIf $(x, y)$ is the solution to the given system of equations, what is the value of $9y - x$?",
    choices: [
      // distractor: subtracts the equations without scaling (gives -4x + 4y = 4)
      { id: "A", text: "$4$" },
      { id: "B", text: "$25$" },
      // distractor: adds the equations, which gives 10x + 6y
      { id: "C", text: "$38$" },
      // distractor: adds twice the first equation instead of subtracting the second
      { id: "D", text: "$59$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Twice the first equation minus the second: $(6x - 7x) + (10y - y) = 42 - 17$, so $-x + 9y = 25$.\n\n**The Full Solution:**\nStep 1: Look for a combination $m(3x + 5y) + n(7x + y)$ that equals $-x + 9y$. The $y$-coefficients need $5m + n = 9$ and the $x$-coefficients need $3m + 7n = -1$; $m = 2$, $n = -1$ works.\nStep 2: Apply it to the constants: $2(21) - 17 = 25$.\nStep 3: Check by solving: from the second equation $y = 17 - 7x$; then $3x + 5(17 - 7x) = 21$ gives $-32x = -64$, $x = 2$, $y = 3$, and $9(3) - 2 = 25$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): subtracts the equations as written, producing $-4x + 4y = 4$, which is not the target.\n* Choice C ($38$): adds the equations, producing $10x + 6y = 38$.\n* Choice D ($59$): adds twice the first equation to the second, $2(21) + 17$, flipping the sign of the needed combination.\n\n**Test Day Takeaway:** When the target is not a plain sum or difference, solve the small coefficient system for the multipliers, or just solve for $x$ and $y$ and evaluate.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "solve-for-a-combination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-263",
    domain: "algebra",
    skills: ["elimination-method"],
    difficulty: "hard",
    type: "fill-in",
    question: "$\\dfrac{x}{2} + \\dfrac{y}{3} = 7$\n\n$\\dfrac{x}{3} + \\dfrac{y}{2} = 8$\n\nIf $(x, y)$ is the solution to the given system of equations, what is the value of $x + y$?",
    correctAnswer: "18",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**The correct answer is $18$.**\n\n**The Fast Way (~20s):** Clear the fractions first: multiplying each equation by $6$ gives $3x + 2y = 42$ and $2x + 3y = 48$. Adding them gives $5x + 5y = 90$, so $x + y = 18$.\n\n**The Full Solution:**\nStep 1: Multiply the first equation by $6$: $3x + 2y = 42$. Multiply the second equation by $6$: $2x + 3y = 48$.\nStep 2: The sum of the left sides is $5x + 5y = 5(x + y)$, a multiple of the target, and the sum of the right sides is $90$. So $5(x + y) = 90$ and $x + y = 18$.\nStep 3: Check by solving: subtracting the cleared equations gives $x - y = -6$; with $x + y = 18$, $x = 6$ and $y = 12$. Then $\\frac{6}{2} + \\frac{12}{3} = 3 + 4 = 7$ and $\\frac{6}{3} + \\frac{12}{2} = 2 + 6 = 8$. $\\checkmark$\n\n**Common Mistakes:** Adding the equations as written gives $\\frac{5}{6}x + \\frac{5}{6}y = 15$; reporting $15$ stops before dividing by $\\frac{5}{6}$. Another slip is clearing the fractions, adding, and stopping at $90$ without dividing by $5$.\n\n**Test Day Takeaway:** When the equations carry fractions, clear them with one multiplier before looking for the sum or difference that builds the target.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "solve-for-a-combination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 11/5: same-line-infinitely-many-solutions (8 items) =====
  {
    id: "bank-alg-264",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$3x + 4y = 11$\n\n$9x + 12y = a$\n\nIn the given system of equations, $a$ is a constant. If the system has infinitely many solutions, what is the value of $a$?",
    choices: [
      // distractor: reports the multiplier instead of applying it
      { id: "A", text: "$3$" },
      // distractor: copies the first constant without scaling
      { id: "B", text: "$11$" },
      // distractor: scales by 2 instead of 3
      { id: "C", text: "$22$" },
      { id: "D", text: "$33$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** The second equation's coefficients are $3$ times the first's, so its constant must be $3 \\cdot 11 = 33$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the two equations describe the same line, so one is a multiple of the other.\nStep 2: $9x + 12y = 3(3x + 4y)$, so the multiplier is $3$.\nStep 3: Apply it to the constant: $a = 3(11) = 33$. Check: $3(3x + 4y = 11)$ is $9x + 12y = 33$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): the multiplier itself, not the scaled constant.\n* Choice B ($11$): keeps the original constant, which would make the lines parallel and distinct (no solution).\n* Choice C ($22$): scales by $2$ instead of $3$.\n\n**Test Day Takeaway:** \"Infinitely many solutions\" means every part of the equation, including the constant, scales by the same factor.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "same-line-infinitely-many-solutions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-265",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "easy",
    type: "fill-in",
    question: "$2x - 5y = k$\n\n$8x - 20y = 28$\n\nIn the given system of equations, $k$ is a constant. If the system has infinitely many solutions, what is the value of $k$?",
    correctAnswer: "7",
    explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~10s):** The second equation is $4$ times the first, so $4k = 28$ and $k = 7$.\n\n**The Full Solution:**\nStep 1: For the same line, the second equation must be a constant multiple of the first: $\\frac{8}{2} = \\frac{-20}{-5} = 4$.\nStep 2: The constants must scale by the same $4$: $4k = 28$.\nStep 3: $k = 7$. Check: $4(2x - 5y = 7)$ is $8x - 20y = 28$. $\\checkmark$\n\n**Common Mistakes:** Multiplying instead of dividing to get $k = 112$, or reading the multiplier as $-4$ from the $y$-coefficients and answering $-7$; the negatives cancel.\n\n**Test Day Takeaway:** Find the multiplier from the variable coefficients, then divide (or multiply) the known constant by it.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "same-line-infinitely-many-solutions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-266",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of a linear equation in the $xy$-plane is shown. A system of two linear equations consists of this equation and the equation $4x + ky = 24$, where $k$ is a constant. If the system has infinitely many solutions, what is the value of $k$?",
    diagram: { type: "linearGraph", params: { slope: -0.5, yIntercept: 3, xRange: [-4, 8], yRange: [-4, 6], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 3], [6, 0]], label: "" } },
    choices: [
      // distractor: attaches the negative slope sign to k
      { id: "A", text: "$-8$" },
      // distractor: y-coefficient of x + 2y = 6, never scaled by 4
      { id: "B", text: "$2$" },
      { id: "C", text: "$8$" },
      // distractor: divides 24 by 2 instead of scaling the y-coefficient
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The line has intercepts $(0, 3)$ and $(6, 0)$, so it is $x + 2y = 6$. Multiplying by $4$ gives $4x + 8y = 24$, so $k = 8$.\n\n**The Full Solution:**\nStep 1: Slope $= \\frac{0 - 3}{6 - 0} = -\\frac{1}{2}$ and the $y$-intercept is $3$, so the line is $y = -\\frac{1}{2}x + 3$, or $x + 2y = 6$.\nStep 2: For infinitely many solutions, $4x + ky = 24$ must be a multiple of $x + 2y = 6$. The constants give the multiplier $\\frac{24}{6} = 4$, and $4 \\cdot 1 = 4$ matches the $x$-coefficient.\nStep 3: So $k = 4 \\cdot 2 = 8$. Check: $4x + 8y = 24$ divided by $4$ is $x + 2y = 6$, the graphed line. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-8$): carries the negative sign of the slope into $k$; in standard form the $y$-coefficient here is positive.\n* Choice B ($2$): the $y$-coefficient of $x + 2y = 6$ before scaling by $4$.\n* Choice D ($12$): divides $24$ by the $y$-coefficient $2$, mixing the constant and the coefficient.\n\n**Test Day Takeaway:** Read a clean equation off the intercepts, convert to standard form, then scale every term by the same factor.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "same-line-infinitely-many-solutions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-267",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "medium",
    type: "fill-in",
    question: "$kx - 6y = 15$\n\n$-4x + 8y = -20$\n\nIn the given system of equations, $k$ is a constant. If the system has infinitely many solutions, what is the value of $k$?",
    correctAnswer: "3",
    explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~15s):** The $y$-coefficients and constants both scale by $-\\frac{4}{3}$ (since $8 = -\\frac{4}{3}(-6)$ and $-20 = -\\frac{4}{3}(15)$), so $-4 = -\\frac{4}{3}k$ and $k = 3$.\n\n**The Full Solution:**\nStep 1: Same line requires one equation to be a multiple of the other. From the $y$-coefficients the multiplier is $\\frac{8}{-6} = -\\frac{4}{3}$.\nStep 2: Confirm with the constants: $\\frac{-20}{15} = -\\frac{4}{3}$. Consistent.\nStep 3: Apply to the $x$-coefficients: $-\\frac{4}{3}k = -4$, so $k = 3$. Check: $-\\frac{4}{3}(3x - 6y = 15)$ is $-4x + 8y = -20$. $\\checkmark$\n\n**Common Mistakes:** Answering $-3$ by pairing the signs incorrectly, or answering $-4$ by copying the second equation's $x$-coefficient without dividing by the multiplier.\n\n**Test Day Takeaway:** When the multiplier is a fraction, compute it from a complete pair, verify it on the constants, then solve for the missing coefficient.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "same-line-infinitely-many-solutions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-268",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table gives three values of $x$ and their corresponding values of $y$ that satisfy a linear equation. A system of two linear equations consists of this equation and the equation $6x - 3y = c$, where $c$ is a constant. If the system has infinitely many solutions, what is the value of $c$?",
    diagram: { type: "dataTable", params: { headers: ["x", "y"], rows: [["1", "4"], ["3", "8"], ["5", "12"]] } },
    choices: [
      { id: "A", text: "$-6$" },
      // distractor: constant of 2x - y = -2 before scaling by 3
      { id: "B", text: "$-2$" },
      // distractor: the y-intercept copied as c
      { id: "C", text: "$2$" },
      // distractor: sign error on the constant
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The table rises $4$ for every $2$ in $x$, so $y = 2x + 2$, or $2x - y = -2$. Multiply by $3$: $6x - 3y = -6$, so $c = -6$.\n\n**The Full Solution:**\nStep 1: Slope $= \\frac{8 - 4}{3 - 1} = 2$. Using $(1, 4)$: $4 = 2(1) + b$ gives $b = 2$, so $y = 2x + 2$.\nStep 2: Rewrite in the form of the second equation: $2x - y = -2$. To match $6x - 3y$, multiply by $3$: $6x - 3y = -6$.\nStep 3: So $c = -6$. Check with $(5, 12)$: $6(5) - 3(12) = 30 - 36 = -6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-2$): the constant of $2x - y = -2$ before scaling to match the coefficients $6$ and $-3$.\n* Choice C ($2$): the $y$-intercept of the line, not the constant of the standard-form equation.\n* Choice D ($6$): drops the sign; plugging in $(1, 4)$ gives $6 - 12 = -6$, not $6$.\n\n**Test Day Takeaway:** Any table point can serve as a check: substitute it into $6x - 3y$ and the result is $c$ directly.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "same-line-infinitely-many-solutions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-269",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "medium",
    type: "fill-in",
    question: "$5x + by = 8$\n\n$-15x + 12y = -24$\n\nIn the given system of equations, $b$ is a constant. If the system has infinitely many solutions, what is the value of $b$?",
    correctAnswer: "-4",
    explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**The correct answer is $-4$.**\n\n**The Fast Way (~15s):** The multiplier is $\\frac{-15}{5} = -3$ (and $\\frac{-24}{8} = -3$ agrees), so $-3b = 12$ and $b = -4$.\n\n**The Full Solution:**\nStep 1: Same line means the second equation is a constant multiple of the first. From the $x$-coefficients: $-15 = -3(5)$, so the multiplier is $-3$.\nStep 2: The constants confirm it: $-24 = -3(8)$.\nStep 3: For the $y$-coefficients, $-3b = 12$, so $b = -4$. Check: $-3(5x - 4y = 8)$ is $-15x + 12y = -24$. $\\checkmark$\n\n**Common Mistakes:** Answering $4$ by using a multiplier of $3$ instead of $-3$, or answering $-36$ by multiplying $12$ by $-3$ instead of dividing.\n\n**Test Day Takeaway:** Verify the multiplier on two known pairs before solving for the unknown coefficient; the sign must match both.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "same-line-infinitely-many-solutions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-270",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$ax + 6y = b$\n\n$3x + 9y = 12$\n\nIn the given system of equations, $a$ and $b$ are constants. If the system has infinitely many solutions, what is the value of $a + b$?",
    choices: [
      // distractor: reports a alone
      { id: "A", text: "$2$" },
      // distractor: reports b alone
      { id: "B", text: "$8$" },
      { id: "C", text: "$10$" },
      // distractor: scales the constant by 3/2 instead of 2/3 (b = 18)
      { id: "D", text: "$20$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The $y$-coefficients give the multiplier $\\frac{6}{9} = \\frac{2}{3}$, so $a = \\frac{2}{3}(3) = 2$ and $b = \\frac{2}{3}(12) = 8$; $a + b = 10$.\n\n**The Full Solution:**\nStep 1: For the same line, the first equation must be a multiple of the second. From $6y$ and $9y$, the multiplier is $\\frac{2}{3}$.\nStep 2: $a = \\frac{2}{3} \\cdot 3 = 2$ and $b = \\frac{2}{3} \\cdot 12 = 8$.\nStep 3: $a + b = 2 + 8 = 10$. Check: $\\frac{2}{3}(3x + 9y = 12)$ is $2x + 6y = 8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): the value of $a$ only; the question asks for $a + b$.\n* Choice B ($8$): the value of $b$ only.\n* Choice D ($20$): uses the inverted multiplier $\\frac{3}{2}$ on the constant, giving $b = 18$, with $a = 2$.\n\n**Test Day Takeaway:** One multiplier scales every term; apply it consistently to both unknowns, then combine exactly as the question asks.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "same-line-infinitely-many-solutions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-271",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "hard",
    type: "fill-in",
    question: "$ax + 12y = 24$\n\n$3x + ay = 2a$\n\nIn the given system of equations, $a$ is a negative constant. If the system has infinitely many solutions, what is the value of $a$?",
    correctAnswer: "-6",
    explanation: "**SAT Pattern: Same Line (Infinitely Many Solutions)**\n\n**The correct answer is $-6$.**\n\n**The Fast Way (~20s):** Same line means proportional coefficients: $\\frac{a}{3} = \\frac{12}{a}$, so $a^2 = 36$. Since $a$ is negative, $a = -6$.\n\n**The Full Solution:**\nStep 1: For the equations to describe one line, $\\frac{a}{3} = \\frac{12}{a} = \\frac{24}{2a}$.\nStep 2: From $\\frac{a}{3} = \\frac{12}{a}$, $a^2 = 36$, so $a = 6$ or $a = -6$. The stem requires $a < 0$, so $a = -6$.\nStep 3: Verify all three ratios with $a = -6$: $\\frac{-6}{3} = -2$, $\\frac{12}{-6} = -2$, $\\frac{24}{-12} = -2$. The first equation is $-2$ times the second, so the lines coincide. $\\checkmark$\n\n**Common Mistakes:** Reporting $6$, which ignores the sign condition, or checking only the variable coefficients; for infinitely many solutions the constants must scale by the same factor, so always verify the third ratio.\n\n**Test Day Takeaway:** When the unknown sits in both equations, the proportion becomes $a^2 = $ constant; use the sign restriction, then check the constants too.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "same-line-infinitely-many-solutions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 11/1: vertex-form-to-standard-form (8 items) =====
  // Convert vertex form to standard, ask for coefficient sum or specific value.
  {
    id: "bank-alg-272",
    domain: "algebra",
    skills: ["distributive-property", "converting-quadratic-forms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $g$ is defined by $g(x) = (x + 4)^2 - 9$. Which of the following expressions is equivalent to $g(x)$?",
    choices: [
      // distractor: adds 9 instead of subtracting
      { id: "A", text: "$x^2 + 8x + 25$" },
      // distractor: doubles the middle term a second time (4x + 4x + 8x)
      { id: "B", text: "$x^2 + 16x + 7$" },
      // distractor: squares term by term and drops the middle term
      { id: "C", text: "$x^2 + 7$" },
      { id: "D", text: "$x^2 + 8x + 7$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $(x + 4)^2 = x^2 + 8x + 16$, and $16 - 9 = 7$, so $g(x) = x^2 + 8x + 7$.\n\n**The Full Solution:**\nStep 1: Expand the square: $(x + 4)^2 = x^2 + 2(4)x + 4^2 = x^2 + 8x + 16$.\nStep 2: Subtract $9$: $x^2 + 8x + 16 - 9 = x^2 + 8x + 7$.\nStep 3: Check at $x = 0$: $g(0) = 4^2 - 9 = 7$, and $0 + 0 + 7 = 7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^2 + 8x + 25$): adds the $9$ instead of subtracting it.\n* Choice B ($x^2 + 16x + 7$): counts the cross term twice more, as if the middle term were $4 \\cdot 4x$.\n* Choice C ($x^2 + 7$): squares $x$ and $4$ separately and omits the $2 \\cdot 4 \\cdot x$ cross term.\n\n**Test Day Takeaway:** $(x + p)^2 = x^2 + 2px + p^2$; the cross term is always $2p$, and the outside constant combines only with $p^2$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-to-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-273",
    domain: "algebra",
    skills: ["distributive-property", "converting-quadratic-forms"],
    difficulty: "easy",
    type: "fill-in",
    question: "The function $h$ is defined by $h(x) = (x - 6)^2 + 4$. When $h(x)$ is written in the form $x^2 + bx + c$, where $b$ and $c$ are constants, what is the value of $c$?",
    correctAnswer: "40",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**The correct answer is $40$.**\n\n**The Fast Way (~10s):** The constant term is $h(0)$: $(0 - 6)^2 + 4 = 36 + 4 = 40$.\n\n**The Full Solution:**\nStep 1: Expand: $(x - 6)^2 = x^2 - 12x + 36$.\nStep 2: Add $4$: $h(x) = x^2 - 12x + 40$, so $b = -12$ and $c = 40$.\nStep 3: Check: $h(0) = 40$ matches the constant term. $\\checkmark$\n\n**Common Mistakes:** Answering $4$ (the vertex-form constant, not the standard-form constant) or $-32$ (treating $(-6)^2$ as $-36$).\n\n**Test Day Takeaway:** The standard-form constant is the function's value at $0$: square the inside constant and add the outside constant.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-to-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-274",
    domain: "algebra",
    skills: ["distributive-property", "converting-quadratic-forms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = 3(x + 2)^2 - 5$. When $f(x)$ is written in the form $ax^2 + bx + c$, where $a$, $b$, and $c$ are constants, what is the value of $b$?",
    choices: [
      // distractor: expands (x + 2)^2 but never multiplies by 3
      { id: "A", text: "$4$" },
      // distractor: computes 3 times 2 instead of 3 times 2 times 2
      { id: "B", text: "$6$" },
      // distractor: reports the constant term c
      { id: "C", text: "$7$" },
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** The $x$-coefficient of $a(x - h)^2 + k$ is $-2ah$; here $a = 3$ and $h = -2$, so $b = -2(3)(-2) = 12$.\n\n**The Full Solution:**\nStep 1: Expand the square: $(x + 2)^2 = x^2 + 4x + 4$.\nStep 2: Multiply by $3$ and subtract $5$: $3x^2 + 12x + 12 - 5 = 3x^2 + 12x + 7$.\nStep 3: So $b = 12$. Check at $x = 1$: $f(1) = 3(9) - 5 = 22$, and $3 + 12 + 7 = 22$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): the middle term of $(x + 2)^2$ before the factor of $3$ is applied.\n* Choice B ($6$): multiplies $3$ by $2$ once, forgetting the cross term is $2 \\cdot 2x$.\n* Choice C ($7$): the constant term $c$, not the $x$-coefficient.\n\n**Test Day Takeaway:** Distribute the leading coefficient across every term of the expanded square before combining with the outside constant.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-to-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-275",
    domain: "algebra",
    skills: ["distributive-property", "converting-quadratic-forms"],
    difficulty: "medium",
    type: "fill-in",
    question: "The function $f$ is defined by $f(x) = (x - 7)^2 - 10$. When $f(x)$ is rewritten in the form $x^2 + bx + c$, where $b$ and $c$ are constants, what is the value of $b + c$?",
    correctAnswer: "25",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**The correct answer is $25$.**\n\n**The Fast Way (~15s):** $(x - 7)^2 - 10 = x^2 - 14x + 39$, so $b + c = -14 + 39 = 25$.\n\n**The Full Solution:**\nStep 1: Expand: $(x - 7)^2 = x^2 - 14x + 49$.\nStep 2: Subtract $10$: $x^2 - 14x + 39$, so $b = -14$ and $c = 39$.\nStep 3: $b + c = 25$. Check: $f(1) = (-6)^2 - 10 = 26 = 1 + b + c$, so $b + c = 25$. $\\checkmark$\n\n**Common Mistakes:** Using $b = 14$ (sign slip on the cross term) to get $53$, or forgetting to subtract $10$ and using $c = 49$ to get $35$.\n\n**Test Day Takeaway:** $1 + b + c = f(1)$ is a fast check for any monic quadratic.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-to-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-276",
    domain: "algebra",
    skills: ["distributive-property", "converting-quadratic-forms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = a(x - 2)^2 - 3$, where $a$ is a constant. The graph of $y = f(x)$ in the $xy$-plane is shown and passes through the point $(0, 5)$. When $f(x)$ is written in the form $ax^2 + bx + c$, where $b$ and $c$ are constants, what is the value of $b$?",
    diagram: { type: "quadraticVertex", params: { vertex: [2, -3], a: 2, showPoints: [[0, 5]], showVertex: true } },
    choices: [
      { id: "A", text: "$-8$" },
      // distractor: uses a = 1 when expanding
      { id: "B", text: "$-4$" },
      // distractor: reports a instead of b
      { id: "C", text: "$2$" },
      // distractor: sign dropped on the cross term
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Use the point to find $a$: $a(0 - 2)^2 - 3 = 5$ gives $a = 2$. Then $b = -2ah = -2(2)(2) = -8$.\n\n**The Full Solution:**\nStep 1: Substitute $(0, 5)$: $4a - 3 = 5$, so $a = 2$ and $f(x) = 2(x - 2)^2 - 3$.\nStep 2: Expand: $2(x^2 - 4x + 4) - 3 = 2x^2 - 8x + 8 - 3 = 2x^2 - 8x + 5$.\nStep 3: So $b = -8$. Check: $c = 5$ equals the $y$-intercept marked on the graph. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-4$): expands $(x - 2)^2$ without the factor $a = 2$.\n* Choice C ($2$): the value of $a$, not $b$.\n* Choice D ($8$): drops the sign; the graph's vertex is right of the $y$-axis, so the $x$-coefficient is negative.\n\n**Test Day Takeaway:** A marked point pins down $a$; then $b = -2ah$ and $c$ is the $y$-intercept, which the graph lets you confirm.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-to-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-277",
    domain: "algebra",
    skills: ["distributive-property", "converting-quadratic-forms"],
    difficulty: "medium",
    type: "fill-in",
    question: "The expression $-(x - 3)^2 + 11$ is equivalent to $ax^2 + bx + c$, where $a$, $b$, and $c$ are constants. What is the value of $c$?",
    correctAnswer: "2",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~10s):** The constant term is the expression's value at $x = 0$: $-(0 - 3)^2 + 11 = -9 + 11 = 2$.\n\n**The Full Solution:**\nStep 1: Expand: $(x - 3)^2 = x^2 - 6x + 9$.\nStep 2: Apply the negative and add $11$: $-x^2 + 6x - 9 + 11 = -x^2 + 6x + 2$.\nStep 3: So $c = 2$ (with $a = -1$ and $b = 6$). Check at $x = 0$: $-9 + 11 = 2$. $\\checkmark$\n\n**Common Mistakes:** Answering $20$ by forgetting the leading negative on the $9$, or $-20$ by also negating the $11$; only the squared expression is negated.\n\n**Test Day Takeaway:** When the vertex form has a leading negative, distribute it to all three terms of the expanded square before adding the outside constant.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-to-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-278",
    domain: "algebra",
    skills: ["distributive-property", "converting-quadratic-forms"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The graph of the function $g$ in the $xy$-plane is shown. The vertex of the graph is $(-3, 2)$, and the graph passes through the point $(-1, -6)$. If $g(x) = px^2 + qx + r$, where $p$, $q$, and $r$ are constants, what is the value of $p + q + r$?",
    diagram: { type: "quadraticVertex", params: { vertex: [-3, 2], a: -2, showPoints: [[-1, -6]], showVertex: true } },
    choices: [
      // distractor: forgets the +2 when expanding (r = -18)
      { id: "A", text: "$-32$" },
      { id: "B", text: "$-30$" },
      // distractor: reports r alone
      { id: "C", text: "$-16$" },
      // distractor: uses p = 2 (sign error from the point)
      { id: "D", text: "$34$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $p + q + r = g(1)$. With vertex $(-3, 2)$ the function is $g(x) = a(x + 3)^2 + 2$; the point gives $4a + 2 = -6$, so $a = -2$, and $g(1) = -2(16) + 2 = -30$.\n\n**The Full Solution:**\nStep 1: Vertex form: $g(x) = a(x + 3)^2 + 2$. Substitute $(-1, -6)$: $a(2)^2 + 2 = -6$, so $a = -2$.\nStep 2: Expand: $-2(x^2 + 6x + 9) + 2 = -2x^2 - 12x - 18 + 2 = -2x^2 - 12x - 16$, so $p = -2$, $q = -12$, $r = -16$.\nStep 3: $p + q + r = -2 - 12 - 16 = -30$. Check: $g(1) = -2(4)^2 + 2 = -30$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-32$): drops the $+2$ from the vertex form, using $r = -18$.\n* Choice C ($-16$): reports $r$ alone instead of the sum of the three coefficients.\n* Choice D ($34$): solves $4a + 2 = -6$ with a sign error to get $a = 2$; the graph opens downward, so $a$ must be negative.\n\n**Test Day Takeaway:** $p + q + r$ is just $g(1)$; once $a$ is known, evaluate the vertex form at $1$ instead of expanding.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-to-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-279",
    domain: "algebra",
    skills: ["distributive-property", "converting-quadratic-forms"],
    difficulty: "hard",
    type: "fill-in",
    question: "The function $f$ is defined by $f(x) = 4(x - h)^2 + k$, where $h$ and $k$ are constants. When $f(x)$ is written in the form $ax^2 + bx + c$, the result is $4x^2 - 24x + 41$. What is the value of $h + k$?",
    correctAnswer: "8",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~20s):** Expanding gives $4x^2 - 8hx + 4h^2 + k$. Matching $-8h = -24$ gives $h = 3$; matching $4(9) + k = 41$ gives $k = 5$. So $h + k = 8$.\n\n**The Full Solution:**\nStep 1: Expand: $4(x - h)^2 + k = 4x^2 - 8hx + 4h^2 + k$.\nStep 2: Match the $x$-coefficients: $-8h = -24$, so $h = 3$.\nStep 3: Match the constants: $4(3)^2 + k = 41$, so $36 + k = 41$ and $k = 5$. Then $h + k = 8$. Check: $4(x - 3)^2 + 5 = 4x^2 - 24x + 36 + 5 = 4x^2 - 24x + 41$. $\\checkmark$\n\n**Common Mistakes:** Using $h = -3$ (sign slip from $-8h = -24$) to get $h + k = 2$, or setting $k = 41$ by forgetting the $4h^2$ contribution, which gives $44$.\n\n**Test Day Takeaway:** Expand the vertex form symbolically, then match coefficients term by term: the $x$-term fixes $h$, and the constant then fixes $k$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-to-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 12/5: identifying-identity-contradiction-equations (8 items) =====
  {
    id: "bank-alg-280",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Each of the following is a linear equation in $x$. Which of the equations has no solution?",
    choices: [
      // distractor: different x-coefficients give exactly one solution (x = 1)
      { id: "A", text: "$3x + 5 = 5x + 3$" },
      // distractor: looks contradictory but solves to x = 0
      { id: "B", text: "$3x + 5 = -3x + 5$" },
      // distractor: an identity; infinitely many solutions, not zero
      { id: "C", text: "$3x + 5 = 3x + 5$" },
      { id: "D", text: "$3x + 5 = 3x - 5$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** No solution needs the same $x$-coefficient on both sides with different constants. Only $3x + 5 = 3x - 5$ fits: subtracting $3x$ leaves $5 = -5$, which is false.\n\n**The Full Solution:**\nStep 1: Subtract $3x$ from both sides of choice D: $5 = -5$. A false statement means no value of $x$ works.\nStep 2: Compare choice C: subtracting $3x$ gives $5 = 5$, always true, so infinitely many solutions.\nStep 3: Choices A and B have different $x$-coefficients on the two sides, so each has exactly one solution ($x = 1$ and $x = 0$). $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3x + 5 = 5x + 3$): the coefficients differ, so $2x = 2$ and $x = 1$; one solution.\n* Choice B ($3x + 5 = -3x + 5$): the opposite coefficients suggest a contradiction, but $6x = 0$ gives $x = 0$.\n* Choice C ($3x + 5 = 3x + 5$): identical sides make an identity with infinitely many solutions, the opposite of none.\n\n**Test Day Takeaway:** Cancel the variable terms first: a false constant statement means zero solutions, a true one means infinitely many.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "identifying-identity-contradiction-equations",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-281",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "easy",
    type: "fill-in",
    question: "$5(x - 2) + 3 = 5x + k$\n\nIn the given equation, $k$ is a constant. If the equation has infinitely many solutions, what is the value of $k$?",
    correctAnswer: "-7",
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**The correct answer is $-7$.**\n\n**The Fast Way (~10s):** Simplify the left side: $5x - 10 + 3 = 5x - 7$. For an identity the right side must match, so $k = -7$.\n\n**The Full Solution:**\nStep 1: Distribute: $5(x - 2) + 3 = 5x - 10 + 3 = 5x - 7$.\nStep 2: The equation is $5x - 7 = 5x + k$. The $x$-terms already match, so infinitely many solutions require the constants to match.\nStep 3: $k = -7$. Check with $x = 1$: left side $5(-1) + 3 = -2$; right side $5 - 7 = -2$. $\\checkmark$\n\n**Common Mistakes:** Answering $-10$ by forgetting to add the $3$, or $7$ by dropping the sign when combining $-10 + 3$.\n\n**Test Day Takeaway:** Simplify each side fully; an identity needs both the variable coefficients and the constants to agree.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "identifying-identity-contradiction-equations",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-282",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "For which of the following equations are there infinitely many values of $x$ that satisfy the equation?",
    choices: [
      // distractor: same x-coefficient but 8 ≠ 2; no solution
      { id: "A", text: "$4(x + 2) = 4x + 2$" },
      { id: "B", text: "$4(x + 2) = 4x + 8$" },
      // distractor: different x-coefficients; exactly one solution (x = 0)
      { id: "C", text: "$4(x + 2) = 2x + 8$" },
      // distractor: different x-coefficients; exactly one solution (x = 0)
      { id: "D", text: "$2(x + 4) = 4x + 8$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Distribute each left side and look for the equation whose two sides become identical: $4(x + 2) = 4x + 8$ is $4x + 8 = 4x + 8$.\n\n**The Full Solution:**\nStep 1: Distribute in choice B: $4x + 8 = 4x + 8$. Subtracting $4x$ leaves $8 = 8$, true for every $x$, so there are infinitely many solutions.\nStep 2: Choice A becomes $4x + 8 = 4x + 2$, or $8 = 2$: false, so no solution.\nStep 3: Choices C and D become $4x + 8 = 2x + 8$ and $2x + 8 = 4x + 8$; each gives $x = 0$, exactly one solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4(x + 2) = 4x + 2$): the matching $4x$ terms look like an identity, but the constants $8$ and $2$ differ, so it has no solution.\n* Choice C ($4(x + 2) = 2x + 8$): the constants match after distributing, but the $x$-coefficients differ, giving the single solution $x = 0$.\n* Choice D ($2(x + 4) = 4x + 8$): same trap as C with the sides swapped; $2x + 8 = 4x + 8$ has only $x = 0$.\n\n**Test Day Takeaway:** Distribute first, then compare: identical coefficients AND identical constants mean infinitely many solutions.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "identifying-identity-contradiction-equations",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-283",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "medium",
    type: "fill-in",
    question: "$3(2x - 5) + 4x = 2(5x + k)$\n\nIn the given equation, $k$ is a constant. If the equation has infinitely many solutions, what is the value of $k$?",
    correctAnswer: "-7.5",
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**The correct answer is $-7.5$.**\n\n**The Fast Way (~15s):** Left side: $6x - 15 + 4x = 10x - 15$. Right side: $10x + 2k$. The $x$-terms already agree, so $2k = -15$ and $k = -7.5$.\n\n**The Full Solution:**\nStep 1: Distribute and combine on the left: $3(2x - 5) + 4x = 6x - 15 + 4x = 10x - 15$.\nStep 2: Distribute on the right: $2(5x + k) = 10x + 2k$.\nStep 3: For an identity, $10x - 15 = 10x + 2k$ must hold for all $x$, so $2k = -15$ and $k = -\\frac{15}{2} = -7.5$. Check with $x = 0$: left $-15$, right $2(-7.5) = -15$. $\\checkmark$\n\n**Common Mistakes:** Answering $-15$ by forgetting that $k$ is multiplied by $2$ on the right, or $-30$ by multiplying $-15$ by $2$ instead of dividing by $2$.\n\n**Test Day Takeaway:** Fully simplify both sides before matching; the constant you match may still be scaled by a factor.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "identifying-identity-contradiction-equations",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-284",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$a(4x - 5) = 12x + b$\n\nIn the given equation, $a$ and $b$ are constants. If the equation has infinitely many solutions, what is the value of $a + b$?",
    choices: [
      // distractor: sign error giving a = -3
      { id: "A", text: "$-18$" },
      // distractor: reports b alone
      { id: "B", text: "$-15$" },
      { id: "C", text: "$-12$" },
      // distractor: reports a alone
      { id: "D", text: "$3$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Identity / Contradiction — Match Coefficients**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Distribute: $4ax - 5a = 12x + b$. Match coefficients: $4a = 12$ gives $a = 3$; then $b = -5a = -15$. So $a + b = -12$.\n\n**The Full Solution:**\nStep 1: Distribute the left side: $4ax - 5a$.\nStep 2: An identity requires equal $x$-coefficients: $4a = 12$, so $a = 3$.\nStep 3: Equal constants: $-5a = b$, so $b = -15$. Then $a + b = 3 + (-15) = -12$. Check: $3(4x - 5) = 12x - 15$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-18$): solves $4a = 12$ as $a = -3$ and adds $-15$.\n* Choice B ($-15$): reports $b$ alone rather than $a + b$.\n* Choice D ($3$): reports $a$ alone.\n\n**Test Day Takeaway:** Match the $x$-coefficients to find one constant, use it to find the other from the constant terms, then combine as asked.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "identifying-identity-contradiction-equations",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-285",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "medium",
    type: "fill-in",
    question: "$6(x + 2) - 4x = 2x + a$\n\nIn the given equation, $a$ is a constant. The equation has no solution for every value of $a$ except one. What is that value of $a$?",
    correctAnswer: "12",
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~10s):** Simplify the left side: $6x + 12 - 4x = 2x + 12$. The $x$-terms match the right side, so the equation has no solution unless $a = 12$, when it becomes an identity.\n\n**The Full Solution:**\nStep 1: Distribute and combine: $6(x + 2) - 4x = 2x + 12$.\nStep 2: The equation is $2x + 12 = 2x + a$. Subtracting $2x$ leaves $12 = a$.\nStep 3: If $a \\neq 12$ the statement is false and there is no solution; if $a = 12$ it is true for every $x$. The exceptional value is $a = 12$. $\\checkmark$\n\n**Common Mistakes:** Answering $2$ (the $x$-coefficient) or $6$ (the leading factor) instead of the simplified constant; the deciding comparison is between constants after the $x$-terms cancel.\n\n**Test Day Takeaway:** When the variable terms cancel, the equation is either always true or never true; the single constant that makes it true is the boundary.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "identifying-identity-contradiction-equations",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-286",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$p(3x - 2) + 9 = 6x + q$\n\nIn the given equation, $p$ and $q$ are constants. If the equation has exactly one solution, which of the following CANNOT be the value of $p$?",
    choices: [
      // distractor: sign-flipped version of the excluded value
      { id: "A", text: "$-2$" },
      // distractor: p = 0 still leaves 6x on the right, so one solution exists
      { id: "B", text: "$0$" },
      { id: "C", text: "$2$" },
      // distractor: copies the coefficient inside the parentheses
      { id: "D", text: "$3$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Distribute: $3px - 2p + 9 = 6x + q$. Exactly one solution requires the $x$-coefficients to differ: $3p \\neq 6$, so $p \\neq 2$.\n\n**The Full Solution:**\nStep 1: Distribute: $3px - 2p + 9 = 6x + q$.\nStep 2: Collect $x$-terms: $(3p - 6)x = q + 2p - 9$. This has exactly one solution when $3p - 6 \\neq 0$, that is, when $p \\neq 2$.\nStep 3: If $p = 2$, the left side is $0 \\cdot x$, and the equation is either an identity or a contradiction depending on $q$; it never has exactly one solution. So $p = 2$ is impossible. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): with $p = -2$ the $x$-coefficient is $-6 \\neq 6$, so one solution exists; the sign matters.\n* Choice B ($0$): $p = 0$ gives $9 = 6x + q$, still one solution; a zero multiplier does not remove the $6x$.\n* Choice D ($3$): copies the $3$ from inside the parentheses; $p = 3$ gives $9x$ on the left, which is fine.\n\n**Test Day Takeaway:** \"Exactly one solution\" fails only when the $x$-coefficients cancel; find the value that makes them equal and exclude it.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "identifying-identity-contradiction-equations",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-287",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "hard",
    type: "fill-in",
    question: "$\\dfrac{2}{3}(9x + a) = bx - 4$\n\nIn the given equation, $a$ and $b$ are constants. If the equation has infinitely many solutions, what is the value of $ab$?",
    correctAnswer: "-36",
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**The correct answer is $-36$.**\n\n**The Fast Way (~15s):** Distribute: $6x + \\frac{2}{3}a = bx - 4$. Matching gives $b = 6$ and $\\frac{2}{3}a = -4$, so $a = -6$ and $ab = -36$.\n\n**The Full Solution:**\nStep 1: Distribute the $\\frac{2}{3}$: $\\frac{2}{3}(9x) + \\frac{2}{3}a = 6x + \\frac{2}{3}a$.\nStep 2: An identity needs equal $x$-coefficients: $b = 6$.\nStep 3: Equal constants: $\\frac{2}{3}a = -4$, so $a = -6$. Then $ab = (-6)(6) = -36$. Check: $\\frac{2}{3}(9x - 6) = 6x - 4$. $\\checkmark$\n\n**Common Mistakes:** Setting $a = -4$ by forgetting the $\\frac{2}{3}$ multiplies $a$ too (giving $ab = -24$), or setting $b = 9$ by not distributing (giving $-54$).\n\n**Test Day Takeaway:** A fraction outside parentheses scales every term inside, including the unknown constant.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "identifying-identity-contradiction-equations",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 12/6: absolute-value-equation (8 items) =====
  {
    id: "bank-alg-288",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$|x + 2| = 6$\n\nWhich of the following is the set of all solutions to the given equation?",
    choices: [
      { id: "A", text: "$\\{-8, 4\\}$" },
      // distractor: sign-flipped: solves x - 2 = ±6
      { id: "B", text: "$\\{-4, 8\\}$" },
      // distractor: keeps only the positive case
      { id: "C", text: "$\\{4\\}$" },
      // distractor: solves |x| = 6, ignoring the +2
      { id: "D", text: "$\\{-6, 6\\}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $x + 2$ is $6$ units from $0$, so $x + 2 = 6$ or $x + 2 = -6$: $x = 4$ or $x = -8$.\n\n**The Full Solution:**\nStep 1: An absolute value equation $|u| = 6$ splits into $u = 6$ and $u = -6$.\nStep 2: $x + 2 = 6$ gives $x = 4$; $x + 2 = -6$ gives $x = -8$.\nStep 3: Check: $|4 + 2| = 6$ and $|-8 + 2| = |-6| = 6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\{-4, 8\\}$): solves $x - 2 = \\pm 6$, flipping the sign inside the absolute value.\n* Choice C ($\\{4\\}$): handles only the positive case and misses $x + 2 = -6$.\n* Choice D ($\\{-6, 6\\}$): solves $|x| = 6$ and never accounts for the $+2$.\n\n**Test Day Takeaway:** Split into two linear equations, solve each, and verify both by substituting back.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "absolute-value-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-289",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "easy",
    type: "fill-in",
    question: "$|3x - 12| = 0$\n\nWhat value of $x$ is the solution to the given equation?",
    correctAnswer: "4",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~5s):** An absolute value is $0$ only when the inside is $0$: $3x - 12 = 0$, so $x = 4$.\n\n**The Full Solution:**\nStep 1: $|u| = 0$ has the single solution $u = 0$; there is no separate negative case because $-0 = 0$.\nStep 2: Set $3x - 12 = 0$, so $3x = 12$.\nStep 3: $x = 4$. Check: $|3(4) - 12| = |0| = 0$. $\\checkmark$\n\n**Common Mistakes:** Answering $-4$ from a phantom \"negative case,\" or $12$ by solving $3x = 12$ and reporting the constant instead of $x$.\n\n**Test Day Takeaway:** $|u| = 0$ is the one absolute value equation with exactly one solution: set the inside equal to $0$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "absolute-value-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-290",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$|2x - 5| = 11$\n\nWhat is the sum of the solutions to the given equation?",
    choices: [
      // distractor: sign error on both solutions (adds -8 and 3)
      { id: "A", text: "$-5$" },
      { id: "B", text: "$5$" },
      // distractor: reports only the positive solution
      { id: "C", text: "$8$" },
      // distractor: treats both cases as positive (8 + 8)
      { id: "D", text: "$16$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The two cases $2x - 5 = 11$ and $2x - 5 = -11$ give $x = 8$ and $x = -3$; the sum is $5$. (Shortcut: the solutions are symmetric about $x = \\frac{5}{2}$, so their sum is $2 \\cdot \\frac{5}{2} = 5$.)\n\n**The Full Solution:**\nStep 1: Case 1: $2x - 5 = 11$, so $2x = 16$ and $x = 8$.\nStep 2: Case 2: $2x - 5 = -11$, so $2x = -6$ and $x = -3$.\nStep 3: Sum: $8 + (-3) = 5$. Check: $|16 - 5| = 11$ and $|-6 - 5| = 11$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): flips the sign of each solution, adding $-8$ and $3$.\n* Choice C ($8$): reports the positive solution alone instead of the sum.\n* Choice D ($16$): treats both cases as $+11$ and doubles $8$.\n\n**Test Day Takeaway:** For $|ax - b| = c$ the two solutions are symmetric about $x = \\frac{b}{a}$, so their sum is $\\frac{2b}{a}$; a fast check.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "absolute-value-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-291",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "fill-in",
    question: "$|5x + 3| = 17$\n\nWhat is the negative solution to the given equation?",
    correctAnswer: "-4",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**The correct answer is $-4$.**\n\n**The Fast Way (~10s):** The negative case is $5x + 3 = -17$, so $5x = -20$ and $x = -4$.\n\n**The Full Solution:**\nStep 1: Split: $5x + 3 = 17$ or $5x + 3 = -17$.\nStep 2: The first gives $5x = 14$, $x = 2.8$ (positive). The second gives $5x = -20$, $x = -4$.\nStep 3: The negative solution is $-4$. Check: $|5(-4) + 3| = |-17| = 17$. $\\checkmark$\n\n**Common Mistakes:** Answering $-2.8$ by negating the positive solution instead of solving the negative case, or $-\\frac{14}{5}$ by subtracting $3$ on the wrong side.\n\n**Test Day Takeaway:** The two cases are not negatives of each other; solve the case the question asks about from scratch.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "absolute-value-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-292",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of $y = |x - 3| + 2$ in the $xy$-plane is shown. How many solutions does the equation $|x - 3| + 2 = 2$ have?",
    diagram: { type: "absoluteValue", params: { vertex: [3, 2], slope: 1 } },
    choices: [
      // distractor: assumes the horizontal line y = 2 misses the graph
      { id: "A", text: "Zero" },
      { id: "B", text: "Exactly one" },
      // distractor: default two-case count without noticing |x - 3| = 0
      { id: "C", text: "Exactly two" },
      // distractor: confuses a single touching point with overlap
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Subtract $2$: $|x - 3| = 0$, which holds only when $x = 3$. One solution.\n\n**The Full Solution:**\nStep 1: Isolate the absolute value: $|x - 3| + 2 = 2$ gives $|x - 3| = 0$.\nStep 2: An absolute value equals $0$ only when the inside is $0$: $x - 3 = 0$, so $x = 3$.\nStep 3: Graphically, the horizontal line $y = 2$ touches the graph only at the vertex $(3, 2)$, confirming exactly one solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (Zero): would be right if the right side were below the vertex, such as $|x - 3| + 2 = 1$; here the line meets the vertex.\n* Choice C (Exactly two): the usual two-case split, but the two cases $x - 3 = 0$ and $x - 3 = -0$ are the same equation.\n* Choice D (Infinitely many): the line $y = 2$ shares one point with the graph, not a whole segment.\n\n**Test Day Takeaway:** After isolating, compare the right side to $0$: negative means no solutions, zero means one, positive means two.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "absolute-value-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-293",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "fill-in",
    question: "$3|x + 4| - 7 = 11$\n\nWhat is the greater of the two solutions to the given equation?",
    correctAnswer: "2",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**The correct answer is $2$.**\n\n**The Fast Way (~10s):** Isolate: $3|x + 4| = 18$, so $|x + 4| = 6$. Then $x + 4 = 6$ gives the greater solution, $x = 2$.\n\n**The Full Solution:**\nStep 1: Add $7$ and divide by $3$: $|x + 4| = 6$.\nStep 2: Split: $x + 4 = 6$ gives $x = 2$; $x + 4 = -6$ gives $x = -10$.\nStep 3: The greater solution is $2$. Check: $3|2 + 4| - 7 = 18 - 7 = 11$. $\\checkmark$\n\n**Common Mistakes:** Splitting before isolating (using $|x + 4| = 11$ or $18$), or reporting $-10$ because it has the larger absolute value.\n\n**Test Day Takeaway:** Isolate the absolute value expression completely before writing the two cases.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "absolute-value-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-294",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$|2x - 7| = 3x - 2$\n\nWhich of the following values of $x$ is the solution to the given equation?",
    choices: [
      // distractor: extraneous root from the positive case (right side becomes negative)
      { id: "A", text: "$-5$" },
      { id: "B", text: "$1.8$" },
      // distractor: sign slip in the positive case, and still fails the check
      { id: "C", text: "$5$" },
      // distractor: forgets to divide by 5 in the negative case
      { id: "D", text: "$9$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Case 1: $2x - 7 = 3x - 2$ gives $x = -5$, but then $3x - 2 = -17 < 0$, impossible for an absolute value. Case 2: $2x - 7 = -(3x - 2)$ gives $5x = 9$, $x = 1.8$, and $3(1.8) - 2 = 3.4 = |3.6 - 7|$. $\\checkmark$\n\n**The Full Solution:**\nStep 1: An absolute value is never negative, so any solution must satisfy $3x - 2 \\geq 0$, that is, $x \\geq \\frac{2}{3}$.\nStep 2: Case $2x - 7 = 3x - 2$: $x = -5$, which violates $x \\geq \\frac{2}{3}$; reject it.\nStep 3: Case $2x - 7 = -3x + 2$: $5x = 9$, $x = \\frac{9}{5} = 1.8$. Check: $|3.6 - 7| = 3.4$ and $3(1.8) - 2 = 3.4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): solves the positive case correctly but never checks; the right side is $-17$, so it is extraneous.\n* Choice C ($5$): a sign slip in the positive case; $|3| = 3$ but $3(5) - 2 = 13$, so it fails too.\n* Choice D ($9$): stops at $5x = 9$ without dividing.\n\n**Test Day Takeaway:** When the other side contains $x$, every candidate must be substituted back; a negative right side kills the root.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "absolute-value-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  {
    id: "bank-alg-295",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "hard",
    type: "fill-in",
    question: "$|3x - 4| = |x + 8|$\n\nWhat is the sum of all solutions to the given equation?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** Two absolute values are equal when the insides are equal or opposite: $3x - 4 = x + 8$ gives $x = 6$; $3x - 4 = -(x + 8)$ gives $x = -1$. Sum: $5$.\n\n**The Full Solution:**\nStep 1: $|u| = |v|$ means $u = v$ or $u = -v$.\nStep 2: $3x - 4 = x + 8$: $2x = 12$, $x = 6$. Check: $|14| = |14|$. $\\checkmark$\nStep 3: $3x - 4 = -x - 8$: $4x = -4$, $x = -1$. Check: $|-7| = |7|$. $\\checkmark$ The sum is $6 + (-1) = 5$.\n\n**Common Mistakes:** Solving only $u = v$ and answering $6$, or distributing the negative to only one term in $-(x + 8)$, which gives $3x - 4 = -x + 8$ and the false root $x = 3$.\n\n**Test Day Takeaway:** Equal absolute values give two linear equations, equal and opposite; both roots are valid, so no extraneous check is needed.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "absolute-value-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-11"
  },
  // ===== Phase 2 batch 15: top 2x patterns (concise items) =====
  // linear-equation-with-variables-on-both-sides
  {
    id: "bank-alg-296",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$7x - 4 = 3x + 20$\n\nWhich of the following is the solution to the given equation?",
    choices: [
      // distractor: sign error when moving terms (4x = -24)
      { id: "A", text: "$-6$" },
      // distractor: moves the constant the wrong way (4x = 16)
      { id: "B", text: "$4$" },
      { id: "C", text: "$6$" },
      // distractor: divides 24 by 3 instead of 4
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Move $3x$ left and $-4$ right: $4x = 24$, so $x = 6$.\n\n**The Full Solution:**\nStep 1: Subtract $3x$ from both sides: $4x - 4 = 20$.\nStep 2: Add $4$ to both sides: $4x = 24$.\nStep 3: Divide by $4$: $x = 6$. Check: $7(6) - 4 = 38$ and $3(6) + 20 = 38$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): a sign error in collecting terms, such as $4x = -24$.\n* Choice B ($4$): subtracts $4$ from $20$ instead of adding, giving $4x = 16$.\n* Choice D ($8$): divides $24$ by the coefficient $3$ from the right side instead of the combined $4$.\n\n**Test Day Takeaway:** Collect variables on one side and constants on the other with opposite operations, then divide by the combined coefficient.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-equation-with-variables-on-both-sides",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-297",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "easy",
    type: "fill-in",
    question: "$2x + 13 = 5x - 8$\n\nWhat value of $x$ is the solution to the given equation?",
    correctAnswer: "7",
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~10s):** Move $2x$ right and $-8$ left: $21 = 3x$, so $x = 7$.\n\n**The Full Solution:**\nStep 1: Subtract $2x$ from both sides: $13 = 3x - 8$.\nStep 2: Add $8$ to both sides: $21 = 3x$.\nStep 3: Divide by $3$: $x = 7$. Check: $2(7) + 13 = 27$ and $5(7) - 8 = 27$. $\\checkmark$\n\n**Common Mistakes:** Computing $13 - 8 = 5$ instead of $13 + 8 = 21$ (giving $x = \\frac{5}{3}$), or dividing by $7$ after combining the $x$-terms as $2x + 5x$.\n\n**Test Day Takeaway:** Move the smaller variable term so the coefficient stays positive, then handle the constants.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-equation-with-variables-on-both-sides",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-298",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graphs of $y = 2x - 3$ and $y = -x + 9$ in the $xy$-plane are shown. What is the $x$-coordinate of the point where the two graphs intersect?",
    diagram: { type: "twoLineGraph", params: { intersection: { x: 4, y: 5 }, slope1: 2, slope2: -1, xRange: [-2, 10], yRange: [-4, 10], showIntersection: false, xTickInterval: 2, yTickInterval: 2, gridInterval: 1 } },
    choices: [
      // distractor: sign error: 3x = -12
      { id: "A", text: "$-4$" },
      // distractor: subtracts the constants with the wrong sign (3x = 6)
      { id: "B", text: "$2$" },
      { id: "C", text: "$4$" },
      // distractor: reports the y-coordinate
      { id: "D", text: "$5$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** At the intersection the $y$-values agree: $2x - 3 = -x + 9$, so $3x = 12$ and $x = 4$.\n\n**The Full Solution:**\nStep 1: Set the two expressions for $y$ equal: $2x - 3 = -x + 9$.\nStep 2: Add $x$ to both sides and add $3$: $3x = 12$, so $x = 4$.\nStep 3: Check: $2(4) - 3 = 5$ and $-4 + 9 = 5$, so the lines meet at $(4, 5)$, consistent with the graph. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): collects the constants as $-9 - 3 = -12$ on the wrong side.\n* Choice B ($2$): computes $9 - 3 = 6$ and divides by $3$, mishandling the sign of $-3$.\n* Choice D ($5$): the $y$-coordinate of the intersection, not the $x$-coordinate.\n\n**Test Day Takeaway:** An intersection of two graphs is a linear equation with variables on both sides: set the right-hand sides equal and solve.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-equation-with-variables-on-both-sides",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-299",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "fill-in",
    question: "$\\dfrac{3x + 6}{k} = \\dfrac{x - 2}{4}$\n\nIn the given equation, $k$ is a constant. If $x = 10$ is the solution to the equation, what is the value of $k$?",
    correctAnswer: "18",
    explanation: "**SAT Pattern: Parameter Inference from a Linear Equation**\n\n**The correct answer is $18$.**\n\n**The Fast Way (~15s):** Substitute $x = 10$: $\\frac{36}{k} = \\frac{8}{4} = 2$, so $k = 18$.\n\n**The Full Solution:**\nStep 1: A solution makes the equation true, so replace $x$ with $10$: $\\frac{3(10) + 6}{k} = \\frac{10 - 2}{4}$.\nStep 2: Simplify: $\\frac{36}{k} = 2$.\nStep 3: Solve: $k = 18$. Check: $\\frac{36}{18} = 2$ and $\\frac{8}{4} = 2$. $\\checkmark$\n\n**Common Mistakes:** Cross-multiplying without substituting and trying to solve for two unknowns, or computing $\\frac{36}{2}$ as $72$ by multiplying instead of dividing.\n\n**Test Day Takeaway:** When the solution is given, substitute it immediately; the only unknown left is the parameter.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-equation-with-variables-on-both-sides",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-300",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$4(2x - 3) = 6x + 9 - x$\n\nIf $x$ satisfies the given equation, what is the value of $x$?",
    choices: [
      // distractor: sign error: 3x = -21
      { id: "A", text: "$-7$" },
      // distractor: collects constants as 9 - 12 = -3 and divides by 3
      { id: "B", text: "$-1$" },
      { id: "C", text: "$7$" },
      // distractor: stops at 3x = 21
      { id: "D", text: "$21$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Left: $8x - 12$. Right: $5x + 9$. Then $3x = 21$ and $x = 7$.\n\n**The Full Solution:**\nStep 1: Distribute on the left: $8x - 12$. Combine on the right: $6x - x + 9 = 5x + 9$.\nStep 2: Subtract $5x$ and add $12$: $3x = 21$.\nStep 3: $x = 7$. Check: $4(14 - 3) = 44$ and $42 + 9 - 7 = 44$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): flips the sign of the combined constant, solving $3x = -21$; moving $-12$ across the equals sign makes it $+12$.\n* Choice B ($-1$): computes $9 - 12 = -3$ and divides by $3$.\n* Choice D ($21$): stops at $3x = 21$ without dividing.\n\n**Test Day Takeaway:** Simplify each side completely (distribute, combine like terms) before moving anything across the equals sign.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-equation-with-variables-on-both-sides",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-301",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "fill-in",
    question: "$7(x - 3) = 4(x + 6)$\nWhat value of $x$ is the solution to the given equation?",
    correctAnswer: "15",
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**The correct answer is $15$.**\n\n**The Fast Way (~15s):** Distribute both sides: $7x - 21 = 4x + 24$. Collect $x$ on the left and constants on the right: $3x = 45$, so $x = 15$.\n\n**The Full Solution:**\nStep 1: Distribute on each side. Left: $7(x - 3) = 7x - 21$. Right: $4(x + 6) = 4x + 24$. The equation becomes $7x - 21 = 4x + 24$.\nStep 2: Subtract $4x$ from both sides: $3x - 21 = 24$. Add $21$ to both sides: $3x = 45$.\nStep 3: Divide by $3$: $x = 15$.\nCheck: $7(15 - 3) = 7(12) = 84$ and $4(15 + 6) = 4(21) = 84$. $\\checkmark$\n\n**Common Mistakes:** Distributing $7$ to $x$ but not to $-3$ gives $7x - 3 = 4x + 24$ and $x = 9$. Moving $-21$ across with the wrong sign gives $3x = 3$ and $x = 1$. Both fail the check.\n\n**Test Day Takeaway:** Distribute to EVERY term inside the parentheses first, then move all $x$-terms to one side and all constants to the other in one pass.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-equation-with-variables-on-both-sides",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-302",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$\\dfrac{ax - 4}{6} + \\dfrac{x + b}{3} = \\dfrac{5x + 2}{6}$\nIn the given equation, $a$ and $b$ are constants, and the equation is true for all values of $x$. What is the value of $a + b$?",
    choices: [
      // distractor: sign slip on the constant term (2b + 4 = 2 gives b = -1)
      { id: "A", text: "$2$" },
      { id: "B", text: "$6$" },
      // distractor: matched a to 5 without accounting for the 2x from the second fraction
      { id: "C", text: "$8$" },
      // distractor: forgot to double b when clearing the denominator 3
      { id: "D", text: "$9$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Polynomial Identity with Rational Expressions**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Multiply through by $6$: $ax - 4 + 2(x + b) = 5x + 2$, so $(a + 2)x + (2b - 4) = 5x + 2$. Match coefficients: $a = 3$, $b = 3$, and $a + b = 6$.\n\n**The Full Solution:**\nStep 1: Clear the denominators by multiplying every term by $6$, the least common denominator: $(ax - 4) + 2(x + b) = 5x + 2$.\nStep 2: Distribute and group: $ax - 4 + 2x + 2b = 5x + 2$, which is $(a + 2)x + (2b - 4) = 5x + 2$.\nStep 3: An identity holds for all $x$ only when the $x$-coefficients match and the constants match. $x$-terms: $a + 2 = 5$, so $a = 3$. Constants: $2b - 4 = 2$, so $b = 3$. Then $a + b = 6$.\nCheck: $\\dfrac{3x - 4}{6} + \\dfrac{x + 3}{3} = \\dfrac{3x - 4 + 2x + 6}{6} = \\dfrac{5x + 2}{6}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): writes the constant match as $2b + 4 = 2$, giving $b = -1$ and $a + b = 2$; the $-4$ keeps its sign.\n* Choice C ($8$): matches $a$ directly to $5$, forgetting that the second fraction contributes $2x$ once the denominator is cleared.\n* Choice D ($9$): multiplies the second fraction's constant by $1$ instead of $2$, giving $b - 4 = 2$ and $b = 6$.\n\n**Test Day Takeaway:** For an identity with fractions, clear denominators first, then match the $x$-coefficients and the constants separately; each match is its own small equation.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-equation-with-variables-on-both-sides",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-303",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "hard",
    type: "fill-in",
    question: "$\\dfrac{5x - 2}{3} = \\dfrac{3x + 5}{2}$\nWhat value of $x$ is the solution to the given equation?",
    correctAnswer: "19",
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**The correct answer is $19$.**\n\n**The Fast Way (~25s):** Cross-multiply: $2(5x - 2) = 3(3x + 5)$, so $10x - 4 = 9x + 15$. Then $x = 19$.\n\n**The Full Solution:**\nStep 1: Clear both fractions at once by multiplying both sides by the common denominator $6$: $6 \\cdot \\dfrac{5x - 2}{3} = 2(5x - 2)$ and $6 \\cdot \\dfrac{3x + 5}{2} = 3(3x + 5)$, so $2(5x - 2) = 3(3x + 5)$.\nStep 2: Distribute to EVERY term on each side: $10x - 4 = 9x + 15$.\nStep 3: Subtract $9x$ from both sides and add $4$ to both sides: $x = 19$.\nCheck: left side $\\dfrac{5(19) - 2}{3} = \\dfrac{93}{3} = 31$; right side $\\dfrac{3(19) + 5}{2} = \\dfrac{62}{2} = 31$. $\\checkmark$\n\n**Common Mistakes:** Pairing each numerator with its OWN denominator, $3(5x - 2) = 2(3x + 5)$, gives $15x - 6 = 6x + 10$ and $x = \\dfrac{16}{9}$. Distributing $3$ to $3x$ but not to $5$ gives $10x - 4 = 9x + 5$ and $x = 9$. Each fails the check.\n\n**Test Day Takeaway:** With a fraction on each side, multiply by the common denominator (or cross-multiply) so each numerator picks up the OTHER side's denominator, then distribute to every term before collecting $x$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-equation-with-variables-on-both-sides",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  // linear-equation-with-distribution
  {
    id: "bank-alg-304",
    domain: "algebra",
    skills: ["distributive-property"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$4(x - 3) = 36$\nWhat is the value of the expression $x - 3$ in the given equation?",
    choices: [
      // distractor: subtracted 3 from the quotient 9 even though the question asks for x - 3 itself
      { id: "A", text: "$6$" },
      { id: "B", text: "$9$" },
      // distractor: solved for x instead of the requested expression x - 3
      { id: "C", text: "$12$" },
      // distractor: subtracted 3 from 36 instead of dividing by 4
      { id: "D", text: "$33$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Shifted-Output Linear**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** The question asks for $x - 3$, which is the whole quantity inside the parentheses. Divide both sides by $4$: $x - 3 = 9$.\n\n**The Full Solution:**\nStep 1: Treat $x - 3$ as a single unknown. The equation says $4$ times that unknown equals $36$.\nStep 2: Divide both sides by $4$: $x - 3 = \\dfrac{36}{4} = 9$.\nStep 3: No further work is needed; solving for $x$ (which gives $12$) would answer a different question.\nCheck: if $x - 3 = 9$ then $x = 12$, and $4(12 - 3) = 4(9) = 36$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): finds $9$ and then subtracts $3$ again, treating the $9$ as $x$ instead of as $x - 3$.\n* Choice C ($12$): solves all the way to $x = 12$ and reports $x$, not the requested $x - 3$.\n* Choice D ($33$): subtracts $3$ from $36$ instead of dividing by $4$, misreading $4(x - 3)$ as $4x - 3$.\n\n**Test Day Takeaway:** When the requested expression already appears grouped in the equation, solve for the group directly; do not unpack it and then repack it.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-equation-with-distribution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-305",
    domain: "algebra",
    skills: ["distributive-property"],
    difficulty: "easy",
    type: "fill-in",
    question: "$6(x + 2) = 54$\nWhat value of $x$ is the solution to the given equation?",
    correctAnswer: "7",
    explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~5s):** Divide both sides by $6$: $x + 2 = 9$, so $x = 7$.\n\n**The Full Solution:**\nStep 1: Either distribute ($6x + 12 = 54$) or divide both sides by $6$ first ($x + 2 = 9$). Dividing first is shorter because $54$ is a multiple of $6$.\nStep 2: Subtract $2$ from both sides: $x = 7$.\nStep 3: The distributing route agrees: $6x + 12 = 54$ gives $6x = 42$ and $x = 7$.\nCheck: $6(7 + 2) = 6(9) = 54$. $\\checkmark$\n\n**Common Mistakes:** Stopping at $x + 2 = 9$ and reporting $9$. Distributing $6$ to $x$ but not to $2$ gives $6x + 2 = 54$ and $x = \\dfrac{52}{6}$, which is not an integer, a sign the distribution was incomplete.\n\n**Test Day Takeaway:** When the right side is a multiple of the outside factor, divide first; otherwise distribute to every term inside the parentheses.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-equation-with-distribution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-306",
    domain: "algebra",
    skills: ["distributive-property"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$4(x + k) = 52$\nIn the given equation, $k$ is a constant. If $x = 6$ is the solution to the equation, what is the value of $k$?",
    choices: [
      { id: "A", text: "$7$" },
      // distractor: stopped at 6 + k = 13 and reported 13
      { id: "B", text: "$13$" },
      // distractor: added 6 to 13 instead of subtracting
      { id: "C", text: "$19$" },
      // distractor: subtracted 6 from 52, never dividing by 4
      { id: "D", text: "$46$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Solve for a Parameter Given a Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Substitute $x = 6$: $4(6 + k) = 52$, so $6 + k = 13$ and $k = 7$.\n\n**The Full Solution:**\nStep 1: A solution is a value of $x$ that makes the equation true, so replace $x$ with $6$: $4(6 + k) = 52$.\nStep 2: Divide both sides by $4$: $6 + k = 13$.\nStep 3: Subtract $6$: $k = 7$.\nCheck: with $k = 7$ the equation is $4(x + 7) = 52$, and $x = 6$ gives $4(13) = 52$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($13$): stops at $6 + k = 13$ and reports the value of the parenthetical, not $k$.\n* Choice C ($19$): computes $13 + 6$ instead of $13 - 6$ when isolating $k$.\n* Choice D ($46$): subtracts $6$ from $52$ without first dividing by $4$, treating $4(x + k)$ as $x + k$.\n\n**Test Day Takeaway:** \"$x = 6$ is the solution\" means substitute $6$ for $x$; the constant then becomes the only unknown in an ordinary one-step equation.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-equation-with-distribution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-307",
    domain: "algebra",
    skills: ["distributive-property"],
    difficulty: "medium",
    type: "fill-in",
    question: "$3(2x - 5) + 4 = 25$\nWhat value of $x$ is the solution to the given equation?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~10s):** Subtract $4$ first: $3(2x - 5) = 21$, so $2x - 5 = 7$ and $x = 6$.\n\n**The Full Solution:**\nStep 1: Isolate the parenthetical group by subtracting $4$ from both sides: $3(2x - 5) = 21$.\nStep 2: Divide by $3$: $2x - 5 = 7$.\nStep 3: Add $5$ and divide by $2$: $2x = 12$, so $x = 6$.\nCheck: $3(2 \\cdot 6 - 5) + 4 = 3(7) + 4 = 25$. $\\checkmark$\n\n**Common Mistakes:** Distributing $3$ to $2x$ but not to $-5$ gives $6x - 5 + 4 = 25$ and $x = \\dfrac{26}{6}$. Adding $4$ to the right side instead of subtracting gives $6x - 15 = 29$ and $x = \\dfrac{22}{3}$. A non-integer result on a clean equation is a signal to recheck the distribution.\n\n**Test Day Takeaway:** Peel the equation from the outside in: remove the added constant, then the multiplier, then work inside the parentheses.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-equation-with-distribution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-308",
    domain: "algebra",
    skills: ["distributive-property"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$k(x - 3) + 5 = 2x + c$\nIn the given equation, $k$ and $c$ are constants. If the equation has no solution, what is the value of $k$?",
    choices: [
      // distractor: took the constant inside the parentheses as k
      { id: "A", text: "$-3$" },
      // distractor: matched the constant term to the x-coefficient (-3k + 5 = 2)
      { id: "B", text: "$1$" },
      { id: "C", text: "$2$" },
      // distractor: dropped the sign on the parenthetical constant
      { id: "D", text: "$3$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Linear Equation with Distribution (Solution-Count Condition)**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Distribute: $kx - 3k + 5 = 2x + c$. No solution requires equal $x$-coefficients with unequal constants, so $k = 2$.\n\n**The Full Solution:**\nStep 1: Distribute the left side: $kx - 3k + 5 = 2x + c$.\nStep 2: A linear equation has no solution exactly when both sides have the same $x$-coefficient but different constants (the two lines are parallel). Setting the $x$-coefficients equal gives $k = 2$.\nStep 3: With $k = 2$ the constants are $-3(2) + 5 = -1$ on the left and $c$ on the right; the equation has no solution for every $c \\neq -1$, and $k = 2$ is the only value that makes this possible.\nCheck: with $k = 2$ and, say, $c = 4$: $2x - 1 = 2x + 4$ reduces to $-1 = 4$, which is false for every $x$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): reads the $-3$ inside the parentheses as the value of $k$, rather than as the number $k$ multiplies.\n* Choice B ($1$): sets the left constant $-3k + 5$ equal to the $x$-coefficient $2$, mixing the constant match with the coefficient match.\n* Choice D ($3$): drops the sign on the parenthetical constant and reports $3$, confusing the shift inside the parentheses with the slope $k$.\n\n**Test Day Takeaway:** Solution counts come from comparing coefficients after distributing: same $x$-coefficient and different constants means no solution; same coefficient and same constant means infinitely many.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-equation-with-distribution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-309",
    domain: "algebra",
    skills: ["distributive-property"],
    difficulty: "medium",
    type: "fill-in",
    question: "$5(2x - 3) + 8 = 43$\nWhat value of $x$ is the solution to the given equation?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~10s):** Subtract $8$: $5(2x - 3) = 35$, so $2x - 3 = 7$ and $x = 5$.\n\n**The Full Solution:**\nStep 1: Subtract $8$ from both sides to isolate the parenthetical group: $5(2x - 3) = 35$.\nStep 2: Divide by $5$: $2x - 3 = 7$.\nStep 3: Add $3$, then divide by $2$: $2x = 10$, so $x = 5$.\nCheck: $5(2 \\cdot 5 - 3) + 8 = 5(7) + 8 = 43$. $\\checkmark$\n\n**Common Mistakes:** Distributing $5$ only to $2x$ gives $10x - 3 + 8 = 43$ and $x = 3.8$. Moving $8$ to the right with the wrong sign gives $10x - 15 = 51$ and $x = 6.6$. Both fail the check.\n\n**Test Day Takeaway:** Undo the outermost operation first: the $+8$, then the factor of $5$, then the inside of the parentheses.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-equation-with-distribution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-310",
    domain: "algebra",
    skills: ["distributive-property"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$a(x + 4) - 3(x - 2) = 5x + c$\nIn the given equation, $a$ and $c$ are constants. If the equation has infinitely many solutions, what is the value of $a + c$?",
    choices: [
      // distractor: set a + 3 = 5 instead of a - 3 = 5 (a = 2, c = 14)
      { id: "A", text: "$16$" },
      // distractor: ignored the -3x term when matching coefficients (a = 5, c = 26)
      { id: "B", text: "$31$" },
      // distractor: sign slip on the +6 constant (c = 32 - 6 = 26)
      { id: "C", text: "$34$" },
      { id: "D", text: "$46$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** Distribute: $(a - 3)x + (4a + 6) = 5x + c$. Infinitely many solutions means both sides are identical: $a - 3 = 5$ gives $a = 8$, and $c = 4(8) + 6 = 38$. So $a + c = 46$.\n\n**The Full Solution:**\nStep 1: Distribute and collect the left side: $ax + 4a - 3x + 6 = (a - 3)x + (4a + 6)$.\nStep 2: An equation has infinitely many solutions only when the two sides are the same expression, so match the $x$-coefficients: $a - 3 = 5$, giving $a = 8$.\nStep 3: Match the constants: $c = 4a + 6 = 4(8) + 6 = 38$. Therefore $a + c = 8 + 38 = 46$.\nCheck: with $a = 8$ the left side is $8x + 32 - 3x + 6 = 5x + 38$, identical to the right side $5x + 38$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($16$): writes the coefficient match as $a + 3 = 5$, giving $a = 2$ and $c = 14$; the $-3x$ must be subtracted, not added.\n* Choice B ($31$): matches $a$ straight to $5$, ignoring the $-3x$ produced by the second distribution, then gets $c = 26$.\n* Choice C ($34$): finds $a = 8$ but computes the constant as $32 - 6 = 26$; distributing $-3$ across $-2$ gives $+6$.\n\n**Test Day Takeaway:** \"Infinitely many solutions\" is a two-part match, coefficients first and then constants; the constant match must use the value of $a$ you just found.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-equation-with-distribution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-311",
    domain: "algebra",
    skills: ["distributive-property"],
    difficulty: "hard",
    type: "fill-in",
    question: "$\\dfrac{2}{3}(9x - 6) = 5(x + 2) - 2$\nWhat value of $x$ is the solution to the given equation?",
    correctAnswer: "12",
    explanation: "**SAT Pattern: Linear Equation with Distribution**\n\n**The correct answer is $12$.**\n\n**The Fast Way (~20s):** Distribute both sides: $6x - 4 = 5x + 10 - 2 = 5x + 8$. Then $x = 12$.\n\n**The Full Solution:**\nStep 1: Distribute $\\dfrac{2}{3}$ across both terms: $\\dfrac{2}{3} \\cdot 9x = 6x$ and $\\dfrac{2}{3} \\cdot (-6) = -4$, so the left side is $6x - 4$.\nStep 2: Distribute $5$ on the right and simplify: $5x + 10 - 2 = 5x + 8$.\nStep 3: Solve $6x - 4 = 5x + 8$: subtract $5x$ and add $4$ to get $x = 12$.\nCheck: left side $\\dfrac{2}{3}(108 - 6) = \\dfrac{2}{3}(102) = 68$; right side $5(14) - 2 = 68$. $\\checkmark$\n\n**Common Mistakes:** Applying $\\dfrac{2}{3}$ to $9x$ but not to $-6$ gives $6x - 6 = 5x + 8$ and $x = 14$. Adding the $2$ instead of subtracting gives $6x - 4 = 5x + 12$ and $x = 16$. Each fails the check.\n\n**Test Day Takeaway:** A fraction outside parentheses distributes like any other factor; multiply it into every term before combining anything.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-equation-with-distribution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  // combining-like-terms (2x)
  {
    id: "bank-alg-312",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "What is the value of $y$ that satisfies the equation $9y - 4y + 3y = 48$?",
    choices: [
      // distractor: added all three coefficients (9 + 4 + 3 = 16) and divided 48 by 16
      { id: "A", text: "$3$" },
      { id: "B", text: "$6$" },
      // distractor: reported the combined coefficient 8 instead of solving
      { id: "C", text: "$8$" },
      // distractor: subtracted both later coefficients (9 - 4 - 3 = 2) and divided 48 by 2
      { id: "D", text: "$24$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Combining Like Terms — Solve for the Variable**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Combine the $y$-terms: $9 - 4 + 3 = 8$, so $8y = 48$ and $y = 6$.\n\n**The Full Solution:**\nStep 1: All three terms are like terms (each is a number times $y$), so add their coefficients with their signs: $9 - 4 + 3 = 8$.\nStep 2: The equation becomes $8y = 48$.\nStep 3: Divide both sides by $8$: $y = 6$.\nCheck: $9(6) - 4(6) + 3(6) = 54 - 24 + 18 = 48$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): adds all three coefficients as positives ($9 + 4 + 3 = 16$) and divides $48$ by $16$, ignoring the minus sign on $4y$.\n* Choice C ($8$): reports the combined coefficient $8$ and stops before dividing.\n* Choice D ($24$): subtracts both $4$ and $3$ from $9$ to get $2$, treating the $+3y$ as if it were $-3y$.\n\n**Test Day Takeaway:** Combine like terms by adding coefficients WITH their signs; then one division finishes the problem.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "combining-like-terms",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-313",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "easy",
    type: "fill-in",
    question: "The expression $5t - 11t + 3t$ is equivalent to $kt$, where $k$ is a constant. What is the value of $k$?",
    correctAnswer: "-3",
    explanation: "**SAT Pattern: Combining Like Terms**\n\n**The correct answer is $-3$.**\n\n**The Fast Way (~5s):** Add the coefficients: $5 - 11 + 3 = -3$, so the expression is $-3t$ and $k = -3$.\n\n**The Full Solution:**\nStep 1: Each term is a constant times $t$, so they are like terms and can be combined by adding coefficients.\nStep 2: Work left to right: $5 - 11 = -6$, then $-6 + 3 = -3$.\nStep 3: The expression equals $-3t$, which matches $kt$ with $k = -3$.\nCheck: substitute $t = 1$: $5 - 11 + 3 = -3$ and $k(1) = -3$. $\\checkmark$\n\n**Common Mistakes:** Dropping the sign and answering $3$; adding all three as positives ($5 + 11 + 3 = 19$); or subtracting the last term as well ($5 - 11 - 3 = -9$). Substituting $t = 1$ exposes each of these.\n\n**Test Day Takeaway:** The coefficient of a combined term is the signed sum of the coefficients; keep the sign of the result.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "combining-like-terms",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-314",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Which of the following expressions is equivalent to $(5x - 7) - (2x - 3)$ for all values of $x$?",
    choices: [
      // distractor: added the x-terms and failed to distribute the minus to -3
      { id: "A", text: "$7x - 10$" },
      // distractor: did not distribute the minus sign to -3 (kept -7 - 3)
      { id: "B", text: "$3x - 10$" },
      // distractor: added the x-terms instead of subtracting
      { id: "C", text: "$7x - 4$" },
      { id: "D", text: "$3x - 4$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Combining Like Terms**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Distribute the minus sign: $5x - 7 - 2x + 3$. Combine: $3x - 4$.\n\n**The Full Solution:**\nStep 1: Subtracting a parenthetical negates every term inside it: $-(2x - 3) = -2x + 3$.\nStep 2: Rewrite without parentheses: $5x - 7 - 2x + 3$.\nStep 3: Combine like terms: $x$-terms $5x - 2x = 3x$; constants $-7 + 3 = -4$. The result is $3x - 4$.\nCheck: substitute $x = 2$: $(10 - 7) - (4 - 3) = 3 - 1 = 2$, and $3(2) - 4 = 2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($7x - 10$): makes both errors at once, adding the $x$-terms and leaving the $-3$ un-negated.\n* Choice B ($3x - 10$): subtracts the $x$-terms correctly but forgets that the minus sign also flips $-3$ to $+3$.\n* Choice C ($7x - 4$): negates the constant correctly but adds $5x + 2x$ instead of subtracting.\n\n**Test Day Takeaway:** A minus sign in front of parentheses changes the sign of EVERY term inside; rewrite the expression without parentheses before combining.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "combining-like-terms",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-315",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "fill-in",
    question: "The expression $5x^2 - 3x + 2x^2 + 9x - 4$ is equivalent to $ax^2 + bx + c$, where $a$, $b$, and $c$ are constants. What is the value of $b$?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Combining Like Terms**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~5s):** Only the $x$-terms feed $b$: $-3x + 9x = 6x$, so $b = 6$.\n\n**The Full Solution:**\nStep 1: Sort the terms by degree. Squared terms: $5x^2 + 2x^2 = 7x^2$. First-degree terms: $-3x + 9x = 6x$. Constant: $-4$.\nStep 2: The simplified expression is $7x^2 + 6x - 4$, so $a = 7$, $b = 6$, $c = -4$.\nStep 3: The question asks only for $b$, the coefficient of $x$: $b = 6$.\nCheck: substitute $x = 1$ into the original: $5 - 3 + 2 + 9 - 4 = 9$; into $7x^2 + 6x - 4$: $7 + 6 - 4 = 9$. $\\checkmark$\n\n**Common Mistakes:** Reporting $a = 7$ (the coefficient of $x^2$) instead of $b$; combining $-3x$ with $2x^2$ because the numbers sit next to each other; or computing $-3 - 9 = -12$ by mishandling the sign.\n\n**Test Day Takeaway:** Like terms must share the same variable AND the same exponent; group by degree first, then read off the one coefficient asked for.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "combining-like-terms",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-316",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$k(x + 2) - 3(x - 4) = 3x + 24$\nIn the given equation, $k$ is a constant. If the equation is true for all values of $x$, what is the value of $k$?",
    choices: [
      // distractor: wrote the coefficient match as k + 3 = 3
      { id: "A", text: "$0$" },
      // distractor: matched k directly to 3, ignoring the -3x term
      { id: "B", text: "$3$" },
      { id: "C", text: "$6$" },
      // distractor: sign slip on the constant match (2k - 12 = 24)
      { id: "D", text: "$18$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Parameter Inference (Identity)**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Distribute: $(k - 3)x + (2k + 12) = 3x + 24$. Match $x$-coefficients: $k - 3 = 3$, so $k = 6$.\n\n**The Full Solution:**\nStep 1: Distribute both products on the left: $kx + 2k - 3x + 12 = (k - 3)x + (2k + 12)$.\nStep 2: For the equation to hold for every $x$, the $x$-coefficients must agree: $k - 3 = 3$, so $k = 6$.\nStep 3: The constants must agree as well, which confirms the value: $2(6) + 12 = 24$. $\\checkmark$\nCheck: with $k = 6$ the left side is $6x + 12 - 3x + 12 = 3x + 24$, identical to the right side.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): writes the coefficient match as $k + 3 = 3$, adding the $-3x$ instead of subtracting it.\n* Choice B ($3$): matches $k$ straight to $3$ and forgets that $-3(x - 4)$ also contributes an $x$-term.\n* Choice D ($18$): uses the constant match with a sign slip, $2k - 12 = 24$; distributing $-3$ across $-4$ gives $+12$.\n\n**Test Day Takeaway:** \"True for all values of $x$\" means the two sides are the same expression; match the $x$-coefficients, then use the constants to confirm.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "combining-like-terms",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-317",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "fill-in",
    question: "The expression $5(3x - 2) - 4(x + 3)$ is equivalent to $ax + b$, where $a$ and $b$ are constants. What is the value of $b$?",
    correctAnswer: "-22",
    explanation: "**SAT Pattern: Combining Like Terms**\n\n**The correct answer is $-22$.**\n\n**The Fast Way (~10s):** Only the constants matter for $b$: $5(-2) - 4(3) = -10 - 12 = -22$.\n\n**The Full Solution:**\nStep 1: Distribute each product: $5(3x - 2) = 15x - 10$ and $-4(x + 3) = -4x - 12$.\nStep 2: Combine like terms: $x$-terms $15x - 4x = 11x$; constants $-10 - 12 = -22$.\nStep 3: The expression equals $11x - 22$, so $a = 11$ and $b = -22$.\nCheck: substitute $x = 0$: $5(-2) - 4(3) = -22$, and $11(0) - 22 = -22$. $\\checkmark$\n\n**Common Mistakes:** Distributing $-4$ to $x$ but not to $3$ gives $-10 + 3 = -7$. Treating $-4(x + 3)$ as $-4x + 12$ gives $-10 + 12 = 2$. Reporting $a = 11$ instead of $b$. Substituting $x = 0$ isolates the constant and catches each of these.\n\n**Test Day Takeaway:** To find the constant term of a linear expression, substitute $x = 0$; every $x$-term vanishes and only the constants remain.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "combining-like-terms",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-318",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$a(x^2 - 2x) + 3(x^2 + 4x) = 7x^2 + bx$\nIn the given equation, $a$ and $b$ are constants, and the equation is true for all values of $x$. What is the value of $a + b$?",
    choices: [
      // distractor: reported a alone
      { id: "A", text: "$4$" },
      { id: "B", text: "$8$" },
      // distractor: forgot the -2a contribution to the x-coefficient (b = 12)
      { id: "C", text: "$16$" },
      // distractor: sign slip: used +2a instead of -2a (b = 20)
      { id: "D", text: "$24$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Polynomial Identity with Two Parameters**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Expand: $(a + 3)x^2 + (-2a + 12)x = 7x^2 + bx$. Then $a + 3 = 7$ gives $a = 4$, and $b = -2(4) + 12 = 4$. So $a + b = 8$.\n\n**The Full Solution:**\nStep 1: Distribute both products: $ax^2 - 2ax + 3x^2 + 12x$.\nStep 2: Group by degree: $(a + 3)x^2 + (12 - 2a)x$. Match the $x^2$-coefficients with the right side: $a + 3 = 7$, so $a = 4$.\nStep 3: Match the $x$-coefficients: $b = 12 - 2a = 12 - 8 = 4$. Therefore $a + b = 4 + 4 = 8$.\nCheck: with $a = 4$ the left side is $4x^2 - 8x + 3x^2 + 12x = 7x^2 + 4x$, so $b = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): finds $a = 4$ correctly and stops, reporting $a$ rather than $a + b$.\n* Choice C ($16$): matches $b$ to the $12x$ alone, forgetting that $a(x^2 - 2x)$ also contributes $-2ax$; that gives $b = 12$.\n* Choice D ($24$): adds $2a$ instead of subtracting, giving $b = 8 + 12 = 20$ and $a + b = 24$.\n\n**Test Day Takeaway:** With two parameters, match the highest-degree coefficient first to pin down one parameter, then carry that value into the next coefficient match.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "combining-like-terms",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },
  {
    id: "bank-alg-319",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "hard",
    type: "fill-in",
    question: "The expression $2x(3x - 1) - 5(x^2 + 2x) + 4x^2$ is equivalent to $ax^2 + bx$, where $a$ and $b$ are constants. What is the value of $a$?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: Combining Like Terms**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~15s):** Collect only the $x^2$-terms: $2x \\cdot 3x = 6x^2$, $-5x^2$, and $+4x^2$ give $6 - 5 + 4 = 5$.\n\n**The Full Solution:**\nStep 1: Distribute each product. $2x(3x - 1) = 6x^2 - 2x$. $-5(x^2 + 2x) = -5x^2 - 10x$. The last term is already $4x^2$.\nStep 2: Group by degree. $x^2$-terms: $6x^2 - 5x^2 + 4x^2 = 5x^2$. $x$-terms: $-2x - 10x = -12x$.\nStep 3: The expression equals $5x^2 - 12x$, so $a = 5$ (and $b = -12$).\nCheck: substitute $x = 1$ into the original: $2(2) - 5(3) + 4 = 4 - 15 + 4 = -7$; into $5x^2 - 12x$: $5 - 12 = -7$. $\\checkmark$\n\n**Common Mistakes:** Treating $2x \\cdot 3x$ as $6x$ instead of $6x^2$, which drops the leading term to $-1$; forgetting to distribute $-5$ to $x^2$; or reporting $b = -12$ when the question asks for $a$.\n\n**Test Day Takeaway:** When a variable multiplies a parenthetical, the degree goes up; track $x^2$-terms and $x$-terms in separate columns before adding.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "combining-like-terms",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  // ─── SOLVE FOR INPUT FROM OUTPUT (bank-alg-320..326) ──────────────────────
  // Granularity principle: inverse evaluation (given f(a)=c, find a) is a
  // DISTINCT method from direct evaluation. Items pin "solve an equation"
  // not "substitute and compute."
  {
    id: "bank-alg-320",
    domain: "algebra",
    skills: ["function-notation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The graph of the linear function $f$ is shown in the $xy$-plane. For what value of $x$ does $f(x) = -2$?",
    diagram: { type: "linearGraph", params: { slope: 2, yIntercept: -6, xRange: [-4, 6], yRange: [-10, 6], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, label: "y = f(x)" } },
    choices: [
      // distractor: used -2 as the input and read f(-2) = -10
      { id: "A", text: "$-10$" },
      // distractor: read the y-intercept f(0) = -6
      { id: "B", text: "$-6$" },
      // distractor: reported the given output -2 as the input
      { id: "C", text: "$-2$" },
      { id: "D", text: "$2$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** $f(x) = -2$ means the $y$-value is $-2$. Find where the line crosses the horizontal line $y = -2$: that happens at $x = 2$.\n\n**The Full Solution:**\nStep 1: On the graph of $y = f(x)$, the output $f(x)$ is the $y$-coordinate and the input $x$ is the $x$-coordinate. The question gives the output and asks for the input.\nStep 2: Locate $y = -2$ on the vertical axis and move horizontally to the line. The line passes through $(2, -2)$.\nStep 3: The $x$-coordinate of that point is $2$, so $f(2) = -2$.\nCheck: the line crosses the $y$-axis at $(0, -6)$ and rises $2$ units for each $1$ unit to the right, so $f(x) = 2x - 6$ and $f(2) = 4 - 6 = -2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-10$): treats $-2$ as the input and reads $f(-2) = -10$ off the graph, reversing input and output.\n* Choice B ($-6$): reads the $y$-intercept, the output when $x = 0$, instead of finding where the output is $-2$.\n* Choice C ($-2$): repeats the given output as if it were the input.\n\n**Test Day Takeaway:** \"For what $x$ does $f(x) = k$\" is a horizontal read: start at $y = k$, go to the line, then drop to the $x$-axis.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "solve-for-input-from-output",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-alg-321",
    domain: "algebra",
    skills: ["function-notation"],
    difficulty: "easy",
    type: "fill-in",
    question: "The function $h$ is defined by $h(x) = 4x - 9$. If $h(a) = 15$, what is the value of $a$?",
    correctAnswer: "6",
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~5s):** $h(a) = 15$ means $4a - 9 = 15$, so $4a = 24$ and $a = 6$.\n\n**The Full Solution:**\nStep 1: $h(a)$ is the output when the input is $a$, so replace $x$ with $a$ in the rule: $h(a) = 4a - 9$.\nStep 2: Set the output equal to $15$: $4a - 9 = 15$.\nStep 3: Add $9$ to both sides ($4a = 24$) and divide by $4$: $a = 6$.\nCheck: $h(6) = 4(6) - 9 = 24 - 9 = 15$. $\\checkmark$\n\n**Common Mistakes:** Evaluating $h(15) = 51$ instead of solving for the input; subtracting $9$ from $15$ to get $4a = 6$ and $a = 1.5$; or reporting $24$ after adding $9$ but before dividing by $4$.\n\n**Test Day Takeaway:** \"$h(a) = 15$\" gives you the OUTPUT; substitute $a$ into the rule, set it equal to $15$, and solve for the input.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "solve-for-input-from-output",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-alg-322",
    domain: "algebra",
    skills: ["function-notation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table shows the value of $g(x)$ for three values of $x$, where $g$ is a linear function. For what value of $x$ is $g(x) = -7$?",
    diagram: { type: "dataTable", params: { headers: ["x", "g(x)"], rows: [["-1", "11"], ["2", "5"], ["5", "-1"]] } },
    choices: [
      // distractor: dropped the sign of -7 and solved -2x + 9 = 7
      { id: "A", text: "$1$" },
      // distractor: reported the magnitude of the given output as the input
      { id: "B", text: "$7$" },
      { id: "C", text: "$8$" },
      // distractor: evaluated g(-7) = 23, using the output as an input
      { id: "D", text: "$23$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Slope from the table: $\\dfrac{5 - 11}{2 - (-1)} = \\dfrac{-6}{3} = -2$, so $g(x) = -2x + 9$. Then $-2x + 9 = -7$ gives $-2x = -16$ and $x = 8$.\n\n**The Full Solution:**\nStep 1: Recover the rule. Between $(-1, 11)$ and $(2, 5)$ the slope is $\\dfrac{5 - 11}{2 - (-1)} = -2$. Using $(2, 5)$: $5 = -2(2) + b$, so $b = 9$ and $g(x) = -2x + 9$.\nStep 2: Confirm with the third row: $g(5) = -10 + 9 = -1$. $\\checkmark$\nStep 3: Set the output to $-7$: $-2x + 9 = -7$, so $-2x = -16$ and $x = 8$.\nCheck: $g(8) = -2(8) + 9 = -16 + 9 = -7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): solves $-2x + 9 = 7$, dropping the negative sign on the target output.\n* Choice B ($7$): reports the size of the given output as if it were the input.\n* Choice D ($23$): substitutes $x = -7$ and evaluates $g(-7) = 23$, reversing input and output.\n\n**Test Day Takeaway:** From a table of a linear function, get the slope from any two rows, the intercept from one row, then solve the rule for the input that produces the target output.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "solve-for-input-from-output",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-alg-323",
    domain: "algebra",
    skills: ["function-notation"],
    difficulty: "medium",
    type: "fill-in",
    question: "The table shows the balance, in dollars, remaining on a prepaid transit card after $n$ rides. The balance decreases by the same amount with each ride. After how many rides will the balance be $\\$12$?",
    diagram: { type: "dataTable", params: { headers: ["Rides, n", "Balance (dollars)"], rows: [["4", "62.00"], ["10", "47.00"], ["16", "32.00"]] } },
    correctAnswer: "24",
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**The correct answer is $24$.**\n\n**The Fast Way (~25s):** Each $6$ rides drop the balance by $\\$15$, so each ride costs $\\$2.50$. From $\\$32$ at $16$ rides, another $\\$20$ must come off: $20 \\div 2.50 = 8$ more rides, so $n = 24$.\n\n**The Full Solution:**\nStep 1: Find the rate. From $n = 4$ to $n = 10$ the balance falls from $62$ to $47$, a drop of $15$ over $6$ rides, so the rate is $-2.50$ dollars per ride. The rows $10 \\to 16$ confirm it: $47 - 32 = 15$.\nStep 2: Write the model. Starting balance: $62 + 4(2.50) = 72$, so $B(n) = 72 - 2.5n$.\nStep 3: Solve $72 - 2.5n = 12$: $2.5n = 60$, so $n = 24$.\nCheck: $B(24) = 72 - 2.5(24) = 72 - 60 = 12$. $\\checkmark$\n\n**Common Mistakes:** Dividing $15$ by $4$ instead of by $6$ (the ride gap between rows is $6$, not the row number); solving $2.5n = 72$ and answering $28.8$, which is when the balance hits $0$, not $12$; or reading $12$ as a number of rides.\n\n**Test Day Takeaway:** Table rows are rarely one unit apart; compute the rate as change in output divided by change in INPUT, then solve the model for the requested output.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "solve-for-input-from-output",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-alg-324",
    domain: "algebra",
    skills: ["function-notation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Three values of the linear function $f$ are shown in the table. If $f(x) = 60$, what is the value of $x$?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["-2", "0"], ["1", "15"], ["4", "30"]] } },
    choices: [
      { id: "A", text: "$10$" },
      // distractor: divided 60 by the slope 5, ignoring the intercept
      { id: "B", text: "$12$" },
      // distractor: added the intercept instead of subtracting: (60 + 10)/5
      { id: "C", text: "$14$" },
      // distractor: evaluated f(60) = 310 instead of solving for the input
      { id: "D", text: "$310$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The outputs rise $15$ for every $3$ in $x$, so the slope is $5$ and, from $(-2, 0)$, $f(x) = 5(x + 2) = 5x + 10$. Then $5x + 10 = 60$ gives $x = 10$.\n\n**The Full Solution:**\nStep 1: Slope from the first two rows: $\\dfrac{15 - 0}{1 - (-2)} = \\dfrac{15}{3} = 5$.\nStep 2: Intercept from $(1, 15)$: $15 = 5(1) + b$, so $b = 10$ and $f(x) = 5x + 10$. The third row confirms it: $f(4) = 20 + 10 = 30$. $\\checkmark$\nStep 3: Solve $5x + 10 = 60$: $5x = 50$, so $x = 10$.\nCheck: $f(10) = 5(10) + 10 = 60$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): divides $60$ by the slope $5$ and skips the intercept, as if $f(x) = 5x$.\n* Choice C ($14$): adds $10$ to $60$ before dividing, moving the intercept across with the wrong sign.\n* Choice D ($310$): plugs $60$ in as the input and computes $f(60) = 310$.\n\n**Test Day Takeaway:** A table row with output $0$ is a gift: it is the $x$-intercept, so $f(x) = m(x - x_0)$ with only the slope left to find.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "solve-for-input-from-output",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-alg-325",
    domain: "algebra",
    skills: ["function-notation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = x^2 + 4x$. If $f(a) = 21$ and $a > 0$, what is the value of $a$?",
    choices: [
      // distractor: the negative root, excluded by a > 0
      { id: "A", text: "$-7$" },
      { id: "B", text: "$3$" },
      // distractor: sign slip in the factoring: (a - 7)(a + 3)
      { id: "C", text: "$7$" },
      // distractor: reported the given output as the input
      { id: "D", text: "$21$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** $a^2 + 4a = 21$ becomes $a^2 + 4a - 21 = 0$, which factors as $(a + 7)(a - 3) = 0$. Since $a > 0$, $a = 3$.\n\n**The Full Solution:**\nStep 1: Substitute $a$ for $x$ and set the output to $21$: $a^2 + 4a = 21$.\nStep 2: Move everything to one side: $a^2 + 4a - 21 = 0$. Look for two numbers with product $-21$ and sum $4$: they are $7$ and $-3$, so $(a + 7)(a - 3) = 0$.\nStep 3: The solutions are $a = -7$ and $a = 3$. The condition $a > 0$ selects $a = 3$.\nCheck: $f(3) = 9 + 12 = 21$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): is the other root of the quadratic; it satisfies $f(a) = 21$ but violates $a > 0$.\n* Choice C ($7$): comes from factoring as $(a - 7)(a + 3)$, which would require a sum of $-4$, not $4$.\n* Choice D ($21$): repeats the output as the input; $f(21) = 525$, not $21$.\n\n**Test Day Takeaway:** When solving for an input of a quadratic gives two roots, the stem's sign condition ($a > 0$) is there to pick one; always apply it.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "solve-for-input-from-output",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-alg-326",
    domain: "algebra",
    skills: ["function-notation"],
    difficulty: "hard",
    type: "fill-in",
    question: "The graph of the linear function $f$ is shown in the $xy$-plane. The function $g$ is defined by $g(x) = f(x) - 11$. For what value of $x$ does $g(x) = 0$?",
    diagram: { type: "linearGraph", params: { slope: 2, yIntercept: 3, xRange: [-4, 6], yRange: [-6, 14], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, label: "y = f(x)" } },
    correctAnswer: "4",
    explanation: "**SAT Pattern: Solve for Input from Output**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~20s):** $g(x) = 0$ means $f(x) = 11$. From the graph, $f$ has $y$-intercept $3$ and slope $2$, so $2x + 3 = 11$ and $x = 4$.\n\n**The Full Solution:**\nStep 1: Translate the condition: $g(x) = f(x) - 11 = 0$ exactly when $f(x) = 11$. So the question is asking where the graph of $f$ reaches a height of $11$.\nStep 2: Read the rule for $f$ from the graph. The line crosses the $y$-axis at $(0, 3)$ and rises $2$ units for every $1$ unit to the right (for example, it passes through $(1, 5)$), so $f(x) = 2x + 3$.\nStep 3: Solve $2x + 3 = 11$: $2x = 8$, so $x = 4$.\nCheck: the point $(4, 11)$ lies on the line, and $g(4) = 11 - 11 = 0$. $\\checkmark$\n\n**Common Mistakes:** Solving $f(x) = 0$ instead of $f(x) = 11$, which gives $x = -1.5$, the $x$-intercept of $f$; reading the $y$-intercept $3$ as the answer; or subtracting $11$ from the input rather than the output.\n\n**Test Day Takeaway:** Rewrite a condition on a shifted function as a condition on the original: $f(x) - k = 0$ is the same as $f(x) = k$, then read or solve for that output.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "solve-for-input-from-output",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  // ─── LINEAR COST EQUATION SETUP (bank-alg-327..333) ───────────────────────
  // Granularity principle: SINGLE-variable linear cost setup (fixed fee +
  // per-unit), NOT a 2-variable system. Previously mis-aliased into
  // two-equation-system-from-a-word-problem pool. Now its own pattern.
  {
    id: "bank-alg-327",
    domain: "algebra",
    skills: ["word-problem-to-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A bike-share program charges a one-time activation fee of $\\$12$ plus $\\$4$ for each ride. Which equation gives the total cost $C$, in dollars, of the activation fee and $r$ rides?",
    choices: [
      { id: "A", text: "$C = 4r + 12$" },
      // distractor: swapped the fixed fee and the per-ride rate
      { id: "B", text: "$C = 12r + 4$" },
      // distractor: added the two dollar amounts and treated the sum as a per-ride rate
      { id: "C", text: "$C = 16r$" },
      // distractor: multiplied the fixed fee by the per-ride rate
      { id: "D", text: "$C = 4(r + 12)$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Cost = (rate per ride)(rides) + (one-time fee) $= 4r + 12$.\n\n**The Full Solution:**\nStep 1: The activation fee is paid once, regardless of $r$, so it is the constant term: $12$.\nStep 2: The $\\$4$ charge repeats once per ride, so it is multiplied by the number of rides: $4r$.\nStep 3: Add the two parts: $C = 4r + 12$.\nCheck: $3$ rides should cost $12 + 3(4) = 24$, and $4(3) + 12 = 24$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($C = 12r + 4$): swaps the roles, charging $\\$12$ per ride and a $\\$4$ one-time fee.\n* Choice C ($C = 16r$): adds $12 + 4$ and charges the sum on every ride, as if the activation fee were paid each time.\n* Choice D ($C = 4(r + 12)$): multiplies the activation fee by the per-ride rate; expanding gives $4r + 48$, a $\\$48$ fee that was never stated.\n\n**Test Day Takeaway:** In a cost model, the amount charged \"per\" something multiplies that something; the amount charged once is the constant.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-cost-equation-setup",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-alg-328",
    domain: "algebra",
    skills: ["word-problem-to-equation"],
    difficulty: "easy",
    type: "fill-in",
    question: "A tailoring service charges a $\\$14$ fitting fee plus $\\$6$ for each alteration. The total cost of an order with $n$ alterations is $\\$56$. What is the value of $n$?",
    correctAnswer: "7",
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**The correct answer is $7$.**\n\n**The Fast Way (~10s):** Remove the fee first: $56 - 14 = 42$. Then $42 \\div 6 = 7$ alterations.\n\n**The Full Solution:**\nStep 1: Model the total: $14 + 6n = 56$.\nStep 2: Subtract the one-time fee from both sides: $6n = 42$.\nStep 3: Divide by the per-alteration rate: $n = 7$.\nCheck: $14 + 6(7) = 14 + 42 = 56$. $\\checkmark$\n\n**Common Mistakes:** Dividing the whole $\\$56$ by $6$ and getting $9.33$, which forgets the fitting fee; or subtracting $6$ and dividing by $14$, which swaps the roles of the fee and the rate.\n\n**Test Day Takeaway:** To find the count in a fee-plus-rate model, subtract the fee from the total FIRST, then divide by the rate.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "linear-cost-equation-setup",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-alg-329",
    domain: "algebra",
    skills: ["word-problem-to-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table shows the total cost, in dollars, of renting a kayak for $1$, $2$, and $3$ hours. The total cost consists of a fixed fee plus a constant hourly rate. If the total cost of a rental was $\\$62$, for how many hours was the kayak rented?",
    diagram: { type: "dataTable", params: { headers: ["Hours", "Total cost (dollars)"], rows: [["1", "22"], ["2", "30"], ["3", "38"]] } },
    choices: [
      // distractor: used the 2-hour total (30) as the fixed fee: (62 - 30)/8
      { id: "A", text: "$4$" },
      // distractor: used the 1-hour total (22) as the fixed fee: (62 - 22)/8
      { id: "B", text: "$5$" },
      { id: "C", text: "$6$" },
      // distractor: divided 62 by the hourly rate and rounded up, ignoring the fee
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Each extra hour adds $\\$8$ ($22 \\to 30 \\to 38$), so the fixed fee is $22 - 8 = 14$. Then $14 + 8h = 62$ gives $8h = 48$ and $h = 6$.\n\n**The Full Solution:**\nStep 1: The hourly rate is the change in cost per hour: $30 - 22 = 8$ and $38 - 30 = 8$, so the rate is $\\$8$ per hour.\nStep 2: The fixed fee is what remains after removing one hour's charge from the $1$-hour cost: $22 - 8 = 14$. The model is $C = 14 + 8h$.\nStep 3: Solve $14 + 8h = 62$: $8h = 48$, so $h = 6$.\nCheck: $14 + 8(6) = 14 + 48 = 62$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): treats the $2$-hour total $\\$30$ as the fixed fee and computes $(62 - 30) \\div 8$.\n* Choice B ($5$): treats the $1$-hour total $\\$22$ as the fixed fee; the fee is the cost at ZERO hours, which is $14$.\n* Choice D ($8$): divides $62$ by $8$ to get $7.75$ and rounds up, ignoring the fixed fee entirely.\n\n**Test Day Takeaway:** In a cost table, the fixed fee is the value at zero units, one step BELOW the first row, not the first row itself.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "linear-cost-equation-setup",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-alg-330",
    domain: "algebra",
    skills: ["word-problem-to-equation"],
    difficulty: "medium",
    type: "fill-in",
    question: "A pet groomer charges a $\\$40$ base price for a bath plus $\\$6$ for each add-on treatment. If a customer's total was $\\$94$, how many add-on treatments were included?",
    correctAnswer: "9",
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**The correct answer is $9$.**\n\n**The Fast Way (~10s):** $94 - 40 = 54$ dollars went to add-ons, and $54 \\div 6 = 9$.\n\n**The Full Solution:**\nStep 1: Let $a$ be the number of add-on treatments. The total is the base price plus $6$ per add-on: $40 + 6a = 94$.\nStep 2: Subtract the base price: $6a = 54$.\nStep 3: Divide by $6$: $a = 9$.\nCheck: $40 + 6(9) = 40 + 54 = 94$. $\\checkmark$\n\n**Common Mistakes:** Dividing $94$ by $6$ (about $15.7$) without removing the base price; or adding $40$ instead of subtracting it, giving $6a = 134$. Neither produces a whole number, which is the signal to recheck the setup.\n\n**Test Day Takeaway:** A non-integer count of items almost always means the fixed part of the cost was handled incorrectly; subtract it before dividing.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "linear-cost-equation-setup",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-alg-331",
    domain: "algebra",
    skills: ["word-problem-to-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table shows the fare, in dollars, for an airport shuttle ride of $2$, $5$, and $8$ miles. The fare consists of a fixed charge plus a constant charge per mile. Which equation gives the fare $F$, in dollars, for a ride of $n$ miles?",
    diagram: { type: "dataTable", params: { headers: ["Miles", "Fare (dollars)"], rows: [["2", "9.50"], ["5", "17.00"], ["8", "24.50"]] } },
    choices: [
      { id: "A", text: "$F = 2.50n + 4.50$" },
      // distractor: used the 2-mile fare as the fixed charge
      { id: "B", text: "$F = 2.50n + 9.50$" },
      // distractor: swapped the fixed charge and the per-mile rate
      { id: "C", text: "$F = 4.50n + 2.50$" },
      // distractor: assumed the fare is proportional to miles (9.50/2)
      { id: "D", text: "$F = 4.75n$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Rate: $\\dfrac{17.00 - 9.50}{5 - 2} = \\dfrac{7.50}{3} = 2.50$ per mile. Fixed charge: $9.50 - 2(2.50) = 4.50$. So $F = 2.50n + 4.50$.\n\n**The Full Solution:**\nStep 1: The per-mile charge is the slope. From $2$ to $5$ miles the fare rises $7.50$, so the rate is $7.50 \\div 3 = 2.50$ dollars per mile. The $5 \\to 8$ rows agree: $24.50 - 17.00 = 7.50$.\nStep 2: The fixed charge is the fare at $0$ miles: $9.50 - 2(2.50) = 4.50$.\nStep 3: Assemble the equation: $F = 2.50n + 4.50$.\nCheck: $n = 8$ gives $2.50(8) + 4.50 = 24.50$, matching the table. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($F = 2.50n + 9.50$): uses the $2$-mile fare as the fixed charge; the intercept is the fare at zero miles, not at the first row.\n* Choice C ($F = 4.50n + 2.50$): finds both numbers but swaps them, charging $\\$4.50$ per mile.\n* Choice D ($F = 4.75n$): divides $9.50$ by $2$ and assumes the fare is proportional; the table's rows are not multiples of one another.\n\n**Test Day Takeaway:** Build a linear cost equation from a table in two moves: slope from two rows, then intercept by backing the slope out of one row.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-cost-equation-setup",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-alg-332",
    domain: "algebra",
    skills: ["word-problem-to-equation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A climbing gym charges a $\\$100$ enrollment fee plus $\\$50$ for each class attended. A member received a one-time $\\$50$ referral credit toward these charges. If the member's total charge was $\\$650$, how many classes did the member attend?",
    choices: [
      // distractor: treated the credit as an extra $50 fee: (650 - 150)/50
      { id: "A", text: "$10$" },
      // distractor: ignored the credit: (650 - 100)/50
      { id: "B", text: "$11$" },
      { id: "C", text: "$12$" },
      // distractor: ignored the enrollment fee: (650 + 50)/50
      { id: "D", text: "$14$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Charges before the credit: $650 + 50 = 700$. Remove the fee: $700 - 100 = 600$. Classes: $600 \\div 50 = 12$.\n\n**The Full Solution:**\nStep 1: Let $c$ be the number of classes. Fee plus classes minus credit equals the total: $100 + 50c - 50 = 650$.\nStep 2: Combine the constants: $50c + 50 = 650$, so $50c = 600$.\nStep 3: Divide by $50$: $c = 12$.\nCheck: $100 + 50(12) - 50 = 100 + 600 - 50 = 650$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): adds the credit to the fee instead of subtracting it, solving $150 + 50c = 650$.\n* Choice B ($11$): leaves the credit out entirely, solving $100 + 50c = 650$.\n* Choice D ($14$): applies the credit but forgets the enrollment fee, solving $50c - 50 = 650$.\n\n**Test Day Takeaway:** A credit is a negative constant in the cost equation; list every one-time amount with its sign before solving for the count.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "linear-cost-equation-setup",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-alg-333",
    domain: "algebra",
    skills: ["word-problem-to-equation"],
    difficulty: "hard",
    type: "fill-in",
    question: "A mobile mechanic charges a fixed travel fee plus a constant hourly rate. A $3$-hour repair costs $\\$205$ and a $5$-hour repair costs $\\$315$. What is the fixed travel fee, in dollars?",
    correctAnswer: "40",
    explanation: "**SAT Pattern: Linear Cost Equation Setup**\n\n**The correct answer is $40$.**\n\n**The Fast Way (~20s):** Two extra hours cost $315 - 205 = 110$, so the rate is $\\$55$ per hour. The fee is $205 - 3(55) = 40$.\n\n**The Full Solution:**\nStep 1: Let $t$ be the travel fee and $r$ the hourly rate. The two jobs give $t + 3r = 205$ and $t + 5r = 315$.\nStep 2: Subtract the first equation from the second: $2r = 110$, so $r = 55$.\nStep 3: Substitute back: $t + 3(55) = 205$, so $t = 205 - 165 = 40$.\nCheck: $40 + 5(55) = 40 + 275 = 315$. $\\checkmark$\n\n**Common Mistakes:** Dividing $205$ by $3$ (about $68.33$) as if there were no fee; using $315 - 205 = 110$ as the fee itself rather than as two hours of labor; or reporting the hourly rate $55$ when the question asks for the fee.\n\n**Test Day Takeaway:** Two total costs at two durations pin down a line: the difference in cost over the difference in hours is the rate, and backing the rate out of either job leaves the fee.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "linear-cost-equation-setup",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  // ─── WORD-PROBLEM TO MULTI-STEP LINEAR (bank-alg-334..341) ────────────────
  // Granularity principle: translating a word context into a multi-step linear
  // equation is a DISTINCT skill from solving the equation once written down.
  // Items emphasize the translation step (define variables, set up relationships,
  // then solve).
  {
    id: "bank-alg-334",
    domain: "algebra",
    skills: ["word-problem-to-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In a greenhouse, the number of pepper seedlings is twice the number $t$ of tomato seedlings, and the number of cucumber seedlings is $12$ more than the number of tomato seedlings. If the greenhouse holds $132$ seedlings of these three types, how many pepper seedlings does it hold?",
    choices: [
      // distractor: reported t, the number of tomato seedlings
      { id: "A", text: "$30$" },
      // distractor: reported the cucumber count t + 12
      { id: "B", text: "$42$" },
      { id: "C", text: "$60$" },
      // distractor: took half the total, assuming peppers are half of all seedlings
      { id: "D", text: "$66$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Total $= t + 2t + (t + 12) = 4t + 12 = 132$, so $t = 30$ and peppers $= 2(30) = 60$.\n\n**The Full Solution:**\nStep 1: Express each count in terms of $t$: tomato $= t$, pepper $= 2t$, cucumber $= t + 12$.\nStep 2: Sum them and set equal to $132$: $t + 2t + t + 12 = 4t + 12 = 132$, so $4t = 120$ and $t = 30$.\nStep 3: The question asks for peppers: $2t = 60$.\nCheck: $30 + 60 + 42 = 132$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($30$): stops at $t = 30$, the number of TOMATO seedlings, without converting to peppers.\n* Choice B ($42$): reports $t + 12$, the cucumber count.\n* Choice D ($66$): halves the total, assuming \"twice\" means peppers make up half of everything.\n\n**Test Day Takeaway:** Solve for the base variable, then reread the question and convert to the quantity actually asked for.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "word-problem-to-multi-step-linear",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-alg-335",
    domain: "algebra",
    skills: ["word-problem-to-equation"],
    difficulty: "medium",
    type: "fill-in",
    question: "A warehouse ships boxes in three sizes. The number of medium boxes shipped is $4$ times the number $s$ of small boxes shipped, and the number of large boxes shipped is $15$ fewer than the number of small boxes shipped. If $285$ boxes were shipped in total, how many large boxes were shipped?",
    correctAnswer: "35",
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**The correct answer is $35$.**\n\n**The Fast Way (~20s):** $s + 4s + (s - 15) = 6s - 15 = 285$, so $s = 50$ and large $= 50 - 15 = 35$.\n\n**The Full Solution:**\nStep 1: Write each count in terms of $s$: small $= s$, medium $= 4s$, large $= s - 15$.\nStep 2: Add them: $s + 4s + s - 15 = 6s - 15$. Set equal to the total: $6s - 15 = 285$, so $6s = 300$ and $s = 50$.\nStep 3: The question asks for large boxes: $s - 15 = 35$.\nCheck: $50 + 200 + 35 = 285$. $\\checkmark$\n\n**Common Mistakes:** Reporting $s = 50$ (small boxes) or $4s = 200$ (medium boxes) instead of the large count; writing \"$15$ fewer\" as $s + 15$, which gives $6s + 15 = 285$, $s = 45$, and $60$ large boxes; that total still adds to $285$, so only rereading the phrase catches the sign.\n\n**Test Day Takeaway:** \"Fewer than\" subtracts from the quantity named after it; translate each phrase, total, solve, then answer the specific count requested.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "word-problem-to-multi-step-linear",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-alg-336",
    domain: "algebra",
    skills: ["word-problem-to-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "On one crossing, a ferry carried cars, bicycles, and vans. The number of bicycles was $5$ times the number $c$ of cars, and the number of vans was $8$ fewer than the number of cars. If the ferry carried $90$ of these vehicles in total, how many vans did it carry?",
    choices: [
      { id: "A", text: "$6$" },
      // distractor: reported c, the number of cars
      { id: "B", text: "$14$" },
      // distractor: computed c + 8 instead of c - 8
      { id: "C", text: "$22$" },
      // distractor: reported 5c, the number of bicycles
      { id: "D", text: "$70$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** $c + 5c + (c - 8) = 7c - 8 = 90$, so $c = 14$ and vans $= 14 - 8 = 6$.\n\n**The Full Solution:**\nStep 1: In terms of $c$: cars $= c$, bicycles $= 5c$, vans $= c - 8$.\nStep 2: Total: $c + 5c + c - 8 = 7c - 8 = 90$, so $7c = 98$ and $c = 14$.\nStep 3: Vans $= c - 8 = 6$.\nCheck: $14 + 70 + 6 = 90$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($14$): stops at $c$, the number of cars.\n* Choice C ($22$): reads \"$8$ fewer than the cars\" as $c + 8$.\n* Choice D ($70$): reports the bicycle count $5c$.\n\n**Test Day Takeaway:** Once the base variable is known, compute the requested quantity from its own expression; the largest or first number you find is rarely the answer.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "word-problem-to-multi-step-linear",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-alg-337",
    domain: "algebra",
    skills: ["word-problem-to-equation"],
    difficulty: "medium",
    type: "fill-in",
    question: "In a choir, the number of altos is $4$ more than $3$ times the number $s$ of sopranos. If the choir has $44$ sopranos and altos in total, how many altos are in the choir?",
    correctAnswer: "34",
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**The correct answer is $34$.**\n\n**The Fast Way (~15s):** $s + (3s + 4) = 4s + 4 = 44$, so $s = 10$ and altos $= 3(10) + 4 = 34$.\n\n**The Full Solution:**\nStep 1: Translate: altos $= 3s + 4$.\nStep 2: Total: $s + 3s + 4 = 44$, so $4s = 40$ and $s = 10$.\nStep 3: Altos $= 3(10) + 4 = 34$.\nCheck: $10 + 34 = 44$. $\\checkmark$\n\n**Common Mistakes:** Reporting $s = 10$, the number of sopranos; translating \"$4$ more than $3$ times\" as $3(s + 4)$, which gives $4s + 12 = 44$ and $s = 8$; or subtracting $4$ from $44$ and halving to get $20$.\n\n**Test Day Takeaway:** \"$4$ more than $3$ times $s$\" is $3s + 4$; the \"times\" attaches to $s$ alone, and the \"more than\" is added afterward.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "word-problem-to-multi-step-linear",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-alg-338",
    domain: "algebra",
    skills: ["word-problem-to-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A film archive stores reels, cassettes, and discs. The number of cassettes is one-fourth the number $r$ of reels, and the number of discs is $60$ more than the number of cassettes. If the archive stores $900$ items of these three types, how many discs does it store?",
    choices: [
      // distractor: reported the "60 more" difference as the disc count
      { id: "A", text: "$60$" },
      // distractor: reported the cassette count r/4
      { id: "B", text: "$140$" },
      { id: "C", text: "$200$" },
      // distractor: reported r, the number of reels
      { id: "D", text: "$560$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $r + \\dfrac{r}{4} + \\left(\\dfrac{r}{4} + 60\\right) = 1.5r + 60 = 900$, so $r = 560$. Discs $= \\dfrac{560}{4} + 60 = 200$.\n\n**The Full Solution:**\nStep 1: In terms of $r$: reels $= r$, cassettes $= \\dfrac{r}{4}$, discs $= \\dfrac{r}{4} + 60$.\nStep 2: Total: $r + \\dfrac{r}{4} + \\dfrac{r}{4} + 60 = \\dfrac{3r}{2} + 60 = 900$, so $\\dfrac{3r}{2} = 840$ and $r = 560$.\nStep 3: Discs $= \\dfrac{560}{4} + 60 = 140 + 60 = 200$.\nCheck: $560 + 140 + 200 = 900$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($60$): reports the \"$60$ more\" as if it were the whole disc count.\n* Choice B ($140$): reports the cassette count and forgets to add the $60$.\n* Choice D ($560$): stops at $r$, the number of reels.\n\n**Test Day Takeaway:** When one quantity is defined relative to ANOTHER derived quantity (discs relative to cassettes, not reels), build the chain step by step before totaling.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "word-problem-to-multi-step-linear",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-alg-339",
    domain: "algebra",
    skills: ["word-problem-to-equation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A stadium sells premium, standard, and discounted tickets. For one event, the number of standard tickets sold was $5$ times the number $p$ of premium tickets sold, and the number of discounted tickets sold was $40$ fewer than the number of standard tickets sold. If $1{,}500$ tickets were sold in total, how many discounted tickets were sold?",
    choices: [
      // distractor: reported p, the premium count
      { id: "A", text: "$140$" },
      { id: "B", text: "$660$" },
      // distractor: reported the standard count 5p
      { id: "C", text: "$700$" },
      // distractor: computed 5p + 40 instead of 5p - 40
      { id: "D", text: "$740$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Standard $= 5p$, discounted $= 5p - 40$. Total: $p + 5p + 5p - 40 = 11p - 40 = 1{,}500$, so $p = 140$ and discounted $= 700 - 40 = 660$.\n\n**The Full Solution:**\nStep 1: Translate carefully; \"discounted\" is defined relative to STANDARD, not to $p$: premium $= p$, standard $= 5p$, discounted $= 5p - 40$.\nStep 2: Total: $p + 5p + (5p - 40) = 11p - 40 = 1{,}500$, so $11p = 1{,}540$ and $p = 140$.\nStep 3: Discounted $= 5(140) - 40 = 660$.\nCheck: $140 + 700 + 660 = 1{,}500$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($140$): stops at $p$.\n* Choice C ($700$): reports the standard count $5p$ and skips the final subtraction.\n* Choice D ($740$): adds $40$ instead of subtracting it.\n\n**Test Day Takeaway:** Read WHICH quantity a comparison refers to; \"fewer than the number of standard tickets\" hangs off $5p$, not off $p$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "word-problem-to-multi-step-linear",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-alg-340",
    domain: "algebra",
    skills: ["word-problem-to-equation"],
    difficulty: "hard",
    type: "fill-in",
    question: "In a marching band, the number of brass players is $3$ times the number $w$ of woodwind players, and the number of percussion players is $12$ fewer than the number of brass players. If the band has $128$ members in these three sections, how many percussion players does it have?",
    correctAnswer: "48",
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**The correct answer is $48$.**\n\n**The Fast Way (~25s):** Brass $= 3w$, percussion $= 3w - 12$. Total: $w + 3w + 3w - 12 = 7w - 12 = 128$, so $w = 20$ and percussion $= 60 - 12 = 48$.\n\n**The Full Solution:**\nStep 1: Translate each section in terms of $w$: woodwind $= w$, brass $= 3w$, percussion $= 3w - 12$ (defined relative to brass).\nStep 2: Total: $w + 3w + (3w - 12) = 7w - 12 = 128$, so $7w = 140$ and $w = 20$.\nStep 3: Percussion $= 3(20) - 12 = 48$.\nCheck: $20 + 60 + 48 = 128$. $\\checkmark$\n\n**Common Mistakes:** Writing percussion as $w - 12$ (relative to woodwinds), which gives $5w - 12 = 128$ and $w = 28$; reporting $w = 20$ or brass $= 60$; or adding $12$ instead of subtracting.\n\n**Test Day Takeaway:** A chained comparison (\"fewer than the number of brass players\") must be built on the expression for brass, $3w$, not on the base variable.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "word-problem-to-multi-step-linear",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  {
    id: "bank-alg-341",
    domain: "algebra",
    skills: ["word-problem-to-equation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The table shows the hourly wage Priya earns for each of two shifts at her job. Last month she worked a total of $34$ hours on these two shifts and earned $\\$526$. How many hours did she work on the weekday shift?",
    diagram: { type: "dataTable", params: { headers: ["Shift", "Hourly wage (dollars)"], rows: [["Weekday", "13"], ["Weekend", "19"]] } },
    choices: [
      // distractor: reported the weekend hours instead of the weekday hours
      { id: "A", text: "$14$" },
      // distractor: assumed the 34 hours were split evenly
      { id: "B", text: "$17$" },
      { id: "C", text: "$20$" },
      // distractor: divided 526 by 13, ignoring the weekend shift entirely
      { id: "D", text: "$40$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Word-Problem to Multi-Step Linear**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** If all $34$ hours were weekend hours she would earn $19(34) = 646$. Each hour moved to the weekday shift lowers that by $6$; the actual shortfall is $646 - 526 = 120$, so $120 \\div 6 = 20$ weekday hours.\n\n**The Full Solution:**\nStep 1: Let $d$ be the weekday hours; then the weekend hours are $34 - d$.\nStep 2: Earnings: $13d + 19(34 - d) = 526$. Distribute: $13d + 646 - 19d = 526$, so $-6d = -120$.\nStep 3: Divide by $-6$: $d = 20$.\nCheck: $13(20) + 19(14) = 260 + 266 = 526$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($14$): solves correctly but reports $34 - d$, the WEEKEND hours.\n* Choice B ($17$): splits the $34$ hours in half; that would earn $13(17) + 19(17) = 544$, not $526$.\n* Choice D ($40$): divides $526$ by $13$ as if every hour paid the weekday wage, and even exceeds the $34$ hours worked.\n\n**Test Day Takeaway:** With two rates and a fixed total count, write the second quantity as (total minus the first) so there is only one unknown.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "word-problem-to-multi-step-linear",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-12"
  },

  // ── linear-cost-model (5 questions, batch 2026-05-13) ─────────────────────
  // Pattern: build f(x) from a verbal description (base + per-unit; flat
  // period + hourly after; etc.). Aligns to Bluebook M2-Hard Q22 (window
  // repair piecewise) and Q3 (popsicles function-from-description).
  {
    id: "bank-alg-342",
    domain: "algebra",
    skills: ["linear-functions", "word-problems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table shows the total amount paid, in dollars, for renting a storage locker for $1$, $2$, and $3$ months. The total consists of a one-time deposit plus a constant monthly rate. Which function $f$ gives the total amount paid, in dollars, for $m$ months?",
    diagram: { type: "dataTable", params: { headers: ["Months", "Total paid (dollars)"], rows: [["1", "65"], ["2", "100"], ["3", "135"]] } },
    choices: [
      // distractor: swapped the deposit and the monthly rate
      { id: "A", text: "$f(m) = 30m + 35$" },
      // distractor: used the 1-month total as the deposit
      { id: "B", text: "$f(m) = 35m + 65$" },
      // distractor: assumed the total is proportional to months
      { id: "C", text: "$f(m) = 65m$" },
      { id: "D", text: "$f(m) = 35m + 30$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Linear Cost Model**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Each added month costs $35$ ($65 \\to 100 \\to 135$), so the deposit is $65 - 35 = 30$ and $f(m) = 35m + 30$.\n\n**The Full Solution:**\nStep 1: The monthly rate is the constant difference between consecutive rows: $100 - 65 = 35$ and $135 - 100 = 35$.\nStep 2: The deposit is the amount at $0$ months: $65 - 35 = 30$.\nStep 3: Rate times months plus deposit: $f(m) = 35m + 30$.\nCheck: $f(3) = 35(3) + 30 = 135$, matching the table. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($f(m) = 30m + 35$): swaps the two numbers, charging $\\$30$ per month with a $\\$35$ deposit; $f(2)$ would be $95$, not $100$.\n* Choice B ($f(m) = 35m + 65$): takes the $1$-month total as the deposit, double-counting the first month.\n* Choice C ($f(m) = 65m$): assumes proportionality; $f(2)$ would be $130$, not $100$.\n\n**Test Day Takeaway:** Test a candidate function against a table row other than the first; the wrong intercept shows up immediately.",
    calculatorAllowed: true,
    tags: ["build-function"],
    sourceStyleRef: "linear-cost-model",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  {
    id: "bank-alg-343",
    domain: "algebra",
    skills: ["linear-functions", "word-problems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A courier charges a $\\$6$ pickup fee plus $\\$1.20$ per pound to deliver a package. For deliveries to a rural address, an additional $\\$0.30$ per pound is charged. Which function $f$ gives the total charge, in dollars, for delivering a $p$-pound package to a rural address?",
    choices: [
      // distractor: ignored the rural surcharge
      { id: "A", text: "$f(p) = 1.20p + 6$" },
      // distractor: added the per-pound surcharge to the flat fee
      { id: "B", text: "$f(p) = 1.20p + 6.30$" },
      { id: "C", text: "$f(p) = 1.50p + 6$" },
      // distractor: counted the surcharge both per pound and as a flat amount
      { id: "D", text: "$f(p) = 1.50p + 6.30$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Linear Cost Model**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Both per-pound charges combine: $1.20 + 0.30 = 1.50$ per pound. The flat fee stays $6$. So $f(p) = 1.50p + 6$.\n\n**The Full Solution:**\nStep 1: Identify what scales with weight: the base $\\$1.20$ per pound and the rural $\\$0.30$ per pound. Together they are $1.50p$.\nStep 2: Identify what is paid once: the $\\$6$ pickup fee.\nStep 3: Add: $f(p) = 1.50p + 6$.\nCheck: a $10$-pound rural package costs $6 + 12 + 3 = 21$, and $1.50(10) + 6 = 21$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($f(p) = 1.20p + 6$): is the non-rural charge; it drops the surcharge.\n* Choice B ($f(p) = 1.20p + 6.30$): adds the $\\$0.30$ to the flat fee, charging the surcharge once instead of per pound.\n* Choice D ($f(p) = 1.50p + 6.30$): applies the surcharge per pound AND again as a flat amount.\n\n**Test Day Takeaway:** Sort every charge by its unit before writing the function: \"per pound\" amounts add into the coefficient, one-time amounts add into the constant.",
    calculatorAllowed: true,
    tags: ["build-function"],
    sourceStyleRef: "linear-cost-model",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  {
    id: "bank-alg-344",
    domain: "algebra",
    skills: ["linear-functions", "word-problems"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A crane rental costs $\\$280$ for the first $3$ hours plus a constant rate for each additional hour. A $7$-hour rental costs $\\$560$. Which function $f$ gives the total cost, in dollars, of a rental lasting $h$ hours, where $h \\geq 3$?",
    choices: [
      // distractor: divided the extra $280 by all 7 hours instead of the 4 additional hours
      { id: "A", text: "$f(h) = 40h + 280$" },
      // distractor: found the rate but charged it on all h hours on top of the $280
      { id: "B", text: "$f(h) = 70h + 280$" },
      // distractor: assumed proportionality: 560/7
      { id: "C", text: "$f(h) = 80h$" },
      { id: "D", text: "$f(h) = 70h + 70$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Linear Cost Model**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The $7$-hour job has $4$ additional hours costing $560 - 280 = 280$, so the rate is $\\$70$ per hour. Then $f(h) = 280 + 70(h - 3) = 70h + 70$.\n\n**The Full Solution:**\nStep 1: Find the hourly rate from the given job. Hours beyond the first $3$: $7 - 3 = 4$. Cost beyond the base: $560 - 280 = 280$. Rate: $280 \\div 4 = 70$ dollars per hour.\nStep 2: Write the model for $h \\geq 3$: base plus rate times additional hours, $f(h) = 280 + 70(h - 3)$.\nStep 3: Simplify: $280 + 70h - 210 = 70h + 70$.\nCheck: $f(7) = 70(7) + 70 = 560$ and $f(3) = 280$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($f(h) = 40h + 280$): divides the extra $\\$280$ by all $7$ hours rather than the $4$ additional ones, and still adds the full base.\n* Choice B ($f(h) = 70h + 280$): finds the correct rate but bills it for every hour, including the $3$ already covered by the $\\$280$; $f(7)$ would be $770$.\n* Choice C ($f(h) = 80h$): divides $560$ by $7$ and assumes proportionality; $f(3)$ would be $240$, not $280$.\n\n**Test Day Takeaway:** When the first $k$ units are bundled, the variable part is rate $\\times (h - k)$; simplify only after writing it that way, and check the bundle boundary.",
    calculatorAllowed: true,
    tags: ["build-function", "piecewise-linear"],
    sourceStyleRef: "linear-cost-model",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  {
    id: "bank-alg-345",
    domain: "algebra",
    skills: ["linear-functions", "word-problems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A language-learning subscription has a one-time enrollment fee plus a constant monthly charge. The table shows the total amount paid, in dollars, after $2$, $4$, and $6$ months. Which function $f$ gives the total amount paid, in dollars, after $m$ months?",
    diagram: { type: "dataTable", params: { headers: ["Months", "Total paid (dollars)"], rows: [["2", "39.00"], ["4", "54.00"], ["6", "69.00"]] } },
    choices: [
      { id: "A", text: "$f(m) = 7.50m + 24$" },
      // distractor: used the 2-month total as the enrollment fee
      { id: "B", text: "$f(m) = 7.50m + 39$" },
      // distractor: assumed proportionality: 39/2 per month
      { id: "C", text: "$f(m) = 19.50m$" },
      // distractor: swapped the fee and the monthly charge
      { id: "D", text: "$f(m) = 24m + 7.50$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Linear Cost Model**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Two months add $15$, so the monthly charge is $7.50$. Fee: $39 - 2(7.50) = 24$. So $f(m) = 7.50m + 24$.\n\n**The Full Solution:**\nStep 1: The rows are $2$ months apart and the totals rise by $15$ each time, so the monthly charge is $15 \\div 2 = 7.50$.\nStep 2: The enrollment fee is the total at $0$ months: $39 - 2(7.50) = 24$.\nStep 3: Assemble: $f(m) = 7.50m + 24$.\nCheck: $f(6) = 7.50(6) + 24 = 45 + 24 = 69$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($f(m) = 7.50m + 39$): treats the $2$-month total as the fee; the intercept is the value at zero months.\n* Choice C ($f(m) = 19.50m$): divides $39$ by $2$ and assumes no fee; $f(4)$ would be $78$, not $54$.\n* Choice D ($f(m) = 24m + 7.50$): swaps the fee and the monthly charge.\n\n**Test Day Takeaway:** When table rows are $2$ apart, divide the change by $2$ to get the per-unit rate before backing out the intercept.",
    calculatorAllowed: true,
    tags: ["build-function"],
    sourceStyleRef: "linear-cost-model",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  {
    id: "bank-alg-346",
    domain: "algebra",
    skills: ["linear-functions", "word-problems"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A restaurant buys a commercial freezer for $\\$6{,}300$. The freezer reduces the restaurant's spoilage losses by $\\$525$ each month. Which function $f$ gives the portion of the purchase price, in dollars, not yet recovered by these savings after $m$ months?",
    choices: [
      // distractor: sign reversed: gives savings minus price
      { id: "A", text: "$f(m) = 525m - 6{,}300$" },
      // distractor: added the savings to the price instead of subtracting
      { id: "B", text: "$f(m) = 6{,}300 + 525m$" },
      // distractor: skipped the first month of savings
      { id: "C", text: "$f(m) = 6{,}300 - 525(m - 1)$" },
      { id: "D", text: "$f(m) = 6{,}300 - 525m$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Linear Cost Model**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Start at $6{,}300$ and subtract $525$ for each month: $f(m) = 6{,}300 - 525m$.\n\n**The Full Solution:**\nStep 1: At $m = 0$ nothing has been recovered, so $f(0)$ must equal the full price $6{,}300$; the constant is $6{,}300$.\nStep 2: Each month recovers $525$, which REDUCES the unrecovered amount, so the rate is $-525$ per month.\nStep 3: Combine: $f(m) = 6{,}300 - 525m$.\nCheck: after $12$ months, $6{,}300 - 525(12) = 6{,}300 - 6{,}300 = 0$; the freezer has paid for itself in exactly one year. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($f(m) = 525m - 6{,}300$): reverses the sign; it would give $-6{,}300$ at $m = 0$ and grow instead of shrink.\n* Choice B ($f(m) = 6{,}300 + 525m$): adds the savings to the price, as if each month made the freezer more expensive.\n* Choice C ($f(m) = 6{,}300 - 525(m - 1)$): delays the savings by a month; $f(0)$ would be $6{,}825$, more than the purchase price.\n\n**Test Day Takeaway:** Anchor a cost model with its value at zero, then decide whether the per-unit amount increases or decreases it; a quick $m = 0$ test kills most wrong choices.",
    calculatorAllowed: true,
    tags: ["build-function"],
    sourceStyleRef: "linear-cost-model",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  // ── inequality-word-problem-floor (5 questions, batch 2026-05-13) ─────────
  // Pattern: real-world constraint (budget, capacity, etc.) translates to an
  // inequality; find max/min count. Aligns to Bluebook M2-Hard Q14 (candles
  // with budget + minimum quantity).
  {
    id: "bank-alg-347",
    domain: "algebra",
    skills: ["inequalities", "word-problems", "systems-of-equations"],
    difficulty: "hard",
    type: "fill-in",
    question: "A robotics club has $\\$1{,}260$ to spend on motors and must buy at least $120$ motors to receive a team discount. Standard motors cost $\\$8$ each and high-torque motors cost $\\$15$ each. What is the greatest number of high-torque motors the club can buy?",
    correctAnswer: "42",
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**The correct answer is $42$.**\n\n**The Fast Way (~40s):** Buy exactly $120$ motors. If all were standard the cost would be $960$, leaving $300$. Each swap to high-torque adds $7$, so $300 \\div 7 = 42.86$, and the floor is $42$.\n\n**The Full Solution:**\nStep 1: Let $h$ be the number of high-torque motors and $s$ the number of standard motors. Constraints: $8s + 15h \\leq 1{,}260$ and $s + h \\geq 120$.\nStep 2: To maximize $h$, keep the total at the minimum $120$ (extra standard motors only consume budget), so $s = 120 - h$. Substitute: $8(120 - h) + 15h \\leq 1{,}260$, giving $960 + 7h \\leq 1{,}260$ and $7h \\leq 300$.\nStep 3: $h \\leq 42.86$, and $h$ must be a whole number, so $h = 42$.\nCheck: $78$ standard and $42$ high-torque cost $624 + 630 = 1{,}254 \\leq 1{,}260$, and $43$ would cost $616 + 645 = 1{,}261$, over budget. $\\checkmark$\n\n**Common Mistakes:** Ignoring the $120$-motor minimum and computing $1{,}260 \\div 15 = 84$; rounding $42.86$ up to $43$, which breaks the budget; or dividing the leftover $300$ by the full price $15$ (giving $20$) instead of by the $7$-dollar difference.\n\n**Test Day Takeaway:** With a budget cap and a count floor, pin the count at the floor, fill with the cheap item, and let the leftover budget buy upgrades at the price DIFFERENCE; then round down.",
    calculatorAllowed: true,
    tags: ["constraint-optimization"],
    sourceStyleRef: "inequality-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  {
    id: "bank-alg-348",
    domain: "algebra",
    skills: ["inequalities", "word-problems"],
    difficulty: "medium",
    type: "fill-in",
    question: "A freight elevator can carry at most $1{,}800$ pounds. Each crate of tile weighs $45$ pounds, and each crate of fixtures weighs $28$ pounds. If exactly $20$ crates of fixtures are loaded, what is the greatest number of crates of tile that can also be loaded?",
    correctAnswer: "27",
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**The correct answer is $27$.**\n\n**The Fast Way (~20s):** Fixtures use $20 \\times 28 = 560$ pounds, leaving $1{,}240$. Then $1{,}240 \\div 45 = 27.56$, so at most $27$ crates of tile.\n\n**The Full Solution:**\nStep 1: Let $t$ be the number of crates of tile. Total weight must satisfy $45t + 28(20) \\leq 1{,}800$.\nStep 2: Simplify: $45t + 560 \\leq 1{,}800$, so $45t \\leq 1{,}240$.\nStep 3: $t \\leq 27.56$; since $t$ is a whole number of crates, the greatest value is $27$.\nCheck: $45(27) + 560 = 1{,}215 + 560 = 1{,}775 \\leq 1{,}800$, while $28$ crates would give $1{,}820$, over the limit. $\\checkmark$\n\n**Common Mistakes:** Rounding $27.56$ up to $28$; dividing $1{,}800$ by $45$ without removing the fixtures' weight (giving $40$); or subtracting $28$ once instead of $20 \\times 28$.\n\n**Test Day Takeaway:** Subtract the fixed load first, divide by the per-unit weight, and round DOWN; a capacity is a ceiling you may not cross.",
    calculatorAllowed: true,
    tags: ["constraint-optimization"],
    sourceStyleRef: "inequality-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  {
    id: "bank-alg-349",
    domain: "algebra",
    skills: ["inequalities", "word-problems", "systems-of-equations"],
    difficulty: "hard",
    type: "fill-in",
    question: "The table shows the cost per seat for two types of seats a theater is purchasing. The theater has a budget of $\\$5{,}400$ and must purchase at least $300$ seats to qualify for free delivery. What is the greatest number of cushioned seats the theater can purchase?",
    diagram: { type: "dataTable", params: { headers: ["Seat type", "Cost per seat (dollars)"], rows: [["Standard", "12"], ["Cushioned", "27"]] } },
    correctAnswer: "120",
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**The correct answer is $120$.**\n\n**The Fast Way (~40s):** Pin the order at $300$ seats. All standard would cost $3{,}600$, leaving $1{,}800$. Each upgrade to cushioned costs $27 - 12 = 15$ more, so $1{,}800 \\div 15 = 120$.\n\n**The Full Solution:**\nStep 1: Let $c$ be the number of cushioned seats and $s$ the number of standard seats: $12s + 27c \\leq 5{,}400$ and $s + c \\geq 300$.\nStep 2: Extra standard seats beyond the minimum only use budget, so set $s = 300 - c$: $12(300 - c) + 27c \\leq 5{,}400$, which simplifies to $3{,}600 + 15c \\leq 5{,}400$.\nStep 3: $15c \\leq 1{,}800$, so $c \\leq 120$. Here the bound is a whole number, so the maximum is exactly $120$.\nCheck: $180$ standard and $120$ cushioned cost $2{,}160 + 3{,}240 = 5{,}400$, using the budget exactly. $\\checkmark$\n\n**Common Mistakes:** Ignoring the $300$-seat minimum and computing $5{,}400 \\div 27 = 200$; dividing the leftover $1{,}800$ by $27$ (giving $66$) instead of by the $15$-dollar difference; or reporting $180$, the number of standard seats.\n\n**Test Day Takeaway:** Fill the required count with the cheaper item, then spend the leftover budget on upgrades priced at the difference between the two costs.",
    calculatorAllowed: true,
    tags: ["constraint-optimization"],
    sourceStyleRef: "inequality-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  {
    id: "bank-alg-350",
    domain: "algebra",
    skills: ["inequalities", "word-problems"],
    difficulty: "medium",
    type: "fill-in",
    question: "A florist has $\\$960$ to spend on roses and peonies for an event. Roses cost $\\$3$ each and peonies cost $\\$9$ each. If the florist buys exactly $120$ roses, what is the greatest number of peonies the florist can buy?",
    correctAnswer: "66",
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**The correct answer is $66$.**\n\n**The Fast Way (~15s):** Roses cost $120 \\times 3 = 360$, leaving $600$. Then $600 \\div 9 = 66.67$, so $66$ peonies.\n\n**The Full Solution:**\nStep 1: Let $p$ be the number of peonies. Budget constraint: $3(120) + 9p \\leq 960$.\nStep 2: Simplify: $360 + 9p \\leq 960$, so $9p \\leq 600$.\nStep 3: $p \\leq 66.67$; the greatest whole number is $66$.\nCheck: $360 + 9(66) = 360 + 594 = 954 \\leq 960$, while $67$ peonies would cost $963$ total, over budget. $\\checkmark$\n\n**Common Mistakes:** Rounding $66.67$ up to $67$; dividing $960$ by $9$ without paying for the roses (giving $106$); or dividing $600$ by $3$ instead of $9$.\n\n**Test Day Takeaway:** \"Greatest number\" under a budget means divide the remaining money by the unit price and take the floor, never the nearest integer.",
    calculatorAllowed: true,
    tags: ["constraint-optimization"],
    sourceStyleRef: "inequality-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  {
    id: "bank-alg-351",
    domain: "algebra",
    skills: ["inequalities", "word-problems"],
    difficulty: "hard",
    type: "fill-in",
    question: "A student group has $\\$588$ to print posters and must print at least $140$ posters to meet a campaign requirement. Matte posters cost $\\$3.20$ each and glossy posters cost $\\$5.60$ each. What is the greatest number of glossy posters the group can print?",
    correctAnswer: "58",
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**The correct answer is $58$.**\n\n**The Fast Way (~40s):** Print exactly $140$. All matte costs $448$, leaving $140$. Each glossy upgrade costs $5.60 - 3.20 = 2.40$ more, so $140 \\div 2.40 = 58.33$, and the floor is $58$.\n\n**The Full Solution:**\nStep 1: Let $g$ be the number of glossy posters and $m$ the number of matte posters: $3.20m + 5.60g \\leq 588$ and $m + g \\geq 140$.\nStep 2: Keep the count at the minimum, $m = 140 - g$: $3.20(140 - g) + 5.60g \\leq 588$, so $448 + 2.40g \\leq 588$ and $2.40g \\leq 140$.\nStep 3: $g \\leq 58.33$, so the greatest whole number is $58$.\nCheck: $82$ matte and $58$ glossy cost $262.40 + 324.80 = 587.20 \\leq 588$; $59$ glossy would cost $259.20 + 330.40 = 589.60$, over budget. $\\checkmark$\n\n**Common Mistakes:** Ignoring the $140$-poster minimum ($588 \\div 5.60 = 105$); rounding up to $59$; or dividing the leftover $140$ by the full glossy price $5.60$ (giving $25$) instead of by the $2.40$ difference.\n\n**Test Day Takeaway:** Decimal prices change nothing about the method: minimum count times the cheap price, leftover divided by the price gap, round down.",
    calculatorAllowed: true,
    tags: ["constraint-optimization"],
    sourceStyleRef: "inequality-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  // ── inequality-word-problem-floor MC variants (5 questions, batch 2026-05-13) ──
  // Pattern: budget + minimum-quantity optimization, MC form. Complements the
  // existing 6 fill-in items; distractors cover named trap classes (floor-as-answer,
  // budget/expensive cap ignoring floor, off-by-one round-up, wrong variable).
  {
    id: "bank-alg-352",
    domain: "algebra",
    skills: ["inequalities", "word-problems", "systems-of-equations"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The table shows the cost of each of two types of thermometers a clinic is ordering. The clinic has a budget of $\\$1{,}440$ and must order at least $150$ thermometers to qualify for a supplier discount. What is the greatest number of infrared thermometers the clinic can order?",
    diagram: { type: "dataTable", params: { headers: ["Thermometer type", "Cost each (dollars)"], rows: [["Basic", "6"], ["Infrared", "22"]] } },
    choices: [
      { id: "A", text: "$33$" },
      // distractor: rounded 33.75 up, which exceeds the budget
      { id: "B", text: "$34$" },
      // distractor: ignored the 150-unit minimum: 1440/22
      { id: "C", text: "$65$" },
      // distractor: divided the whole budget by the price difference without paying for the 150 basic units
      { id: "D", text: "$90$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Order exactly $150$. All basic costs $900$, leaving $540$. Each infrared upgrade costs $22 - 6 = 16$ more, so $540 \\div 16 = 33.75$, and the floor is $33$.\n\n**The Full Solution:**\nStep 1: Let $i$ be the number of infrared and $b$ the number of basic thermometers: $6b + 22i \\leq 1{,}440$ and $b + i \\geq 150$.\nStep 2: Set $b = 150 - i$ (extra basic units only spend budget): $6(150 - i) + 22i \\leq 1{,}440$, so $900 + 16i \\leq 1{,}440$ and $16i \\leq 540$.\nStep 3: $i \\leq 33.75$, so the greatest whole number is $33$.\nCheck: $117$ basic and $33$ infrared cost $702 + 726 = 1{,}428 \\leq 1{,}440$; $34$ infrared would cost $696 + 748 = 1{,}444$, over budget. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($34$): rounds $33.75$ up; the check above shows $34$ breaks the budget by $\\$4$.\n* Choice C ($65$): computes $1{,}440 \\div 22$, forgetting the $150$-unit minimum forces many basic units to be bought too.\n* Choice D ($90$): divides the entire budget by the $16$-dollar difference without first paying $900$ for the $150$ basic units.\n\n**Test Day Takeaway:** The leftover after buying the minimum at the cheap price is what funds upgrades; always round the upgrade count down and verify the total.",
    calculatorAllowed: true,
    tags: ["constraint-optimization"],
    sourceStyleRef: "inequality-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  {
    id: "bank-alg-353",
    domain: "algebra",
    skills: ["inequalities", "word-problems", "systems-of-equations"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A science department is ordering safety goggles of the two types shown in the table. The department has $\\$975$ to spend and must order at least $130$ pairs to receive free shipping. What is the greatest number of anti-fog pairs the department can order?",
    diagram: { type: "dataTable", params: { headers: ["Goggle type", "Cost per pair (dollars)"], rows: [["Basic", "5.00"], ["Anti-fog", "12.50"]] } },
    choices: [
      // distractor: divided the leftover 325 by the full anti-fog price 12.50 instead of the 7.50 difference
      { id: "A", text: "$26$" },
      { id: "B", text: "$43$" },
      // distractor: rounded 43.33 up, exceeding the budget
      { id: "C", text: "$44$" },
      // distractor: ignored the 130-pair minimum: 975/12.50
      { id: "D", text: "$78$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Order exactly $130$ pairs. All basic costs $650$, leaving $325$. Each anti-fog upgrade costs $12.50 - 5.00 = 7.50$ more, so $325 \\div 7.50 = 43.33$, and the floor is $43$.\n\n**The Full Solution:**\nStep 1: Let $a$ be the number of anti-fog pairs and $b$ the number of basic pairs: $5b + 12.5a \\leq 975$ and $a + b \\geq 130$.\nStep 2: Set $b = 130 - a$: $5(130 - a) + 12.5a \\leq 975$, so $650 + 7.5a \\leq 975$ and $7.5a \\leq 325$.\nStep 3: $a \\leq 43.33$, so the greatest whole number is $43$.\nCheck: $87$ basic and $43$ anti-fog cost $435 + 537.50 = 972.50 \\leq 975$; $44$ anti-fog would cost $430 + 550 = 980$, over budget. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($26$): divides the leftover $325$ by the full price $12.50$; but each upgrade only costs the DIFFERENCE, since a basic pair is being replaced.\n* Choice C ($44$): rounds $43.33$ up; the check shows $44$ costs $\\$980$.\n* Choice D ($78$): divides $975$ by $12.50$ and ignores the $130$-pair minimum.\n\n**Test Day Takeaway:** An upgrade replaces a cheaper item, so it costs only the price gap; dividing the leftover by the full price undercounts.",
    calculatorAllowed: true,
    tags: ["constraint-optimization"],
    sourceStyleRef: "inequality-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  {
    id: "bank-alg-354",
    domain: "algebra",
    skills: ["inequalities", "word-problems", "systems-of-equations"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A youth soccer league has $\\$2{,}250$ to spend on balls and must buy at least $250$ balls to receive a bulk rate. Training balls cost $\\$7$ each and match balls cost $\\$16$ each. What is the greatest number of match balls the league can buy?",
    choices: [
      // distractor: divided the leftover 500 by the full match-ball price 16 instead of the 9 difference
      { id: "A", text: "$31$" },
      { id: "B", text: "$55$" },
      // distractor: rounded 55.56 up, exceeding the budget
      { id: "C", text: "$56$" },
      // distractor: ignored the 250-ball minimum: 2250/16
      { id: "D", text: "$140$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Buy exactly $250$ balls. All training balls cost $1{,}750$, leaving $500$. Each match-ball upgrade costs $16 - 7 = 9$ more, so $500 \\div 9 = 55.56$, and the floor is $55$.\n\n**The Full Solution:**\nStep 1: Let $m$ be the number of match balls and $t$ the number of training balls: $7t + 16m \\leq 2{,}250$ and $t + m \\geq 250$.\nStep 2: Set $t = 250 - m$: $7(250 - m) + 16m \\leq 2{,}250$, so $1{,}750 + 9m \\leq 2{,}250$ and $9m \\leq 500$.\nStep 3: $m \\leq 55.56$, so the greatest whole number is $55$.\nCheck: $195$ training and $55$ match balls cost $1{,}365 + 880 = 2{,}245 \\leq 2{,}250$; $56$ match balls would cost $1{,}358 + 896 = 2{,}254$, over budget. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($31$): divides the leftover $500$ by $16$, the full price, instead of by the $9$-dollar upgrade cost.\n* Choice C ($56$): rounds $55.56$ up; the check shows it exceeds the budget by $\\$4$.\n* Choice D ($140$): computes $2{,}250 \\div 16$ and forgets that at least $250$ balls must be bought.\n\n**Test Day Takeaway:** Two constraints, one plan: hit the minimum count with the cheap item, upgrade with the leftover at the price gap, and floor the result.",
    calculatorAllowed: true,
    tags: ["constraint-optimization"],
    sourceStyleRef: "inequality-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  {
    id: "bank-alg-355",
    domain: "algebra",
    skills: ["inequalities", "word-problems", "systems-of-equations"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A dental office is ordering toothbrush kits of the two types shown in the table. The office has a budget of $\\$690$ and must order at least $90$ kits to qualify for free delivery. What is the greatest number of electric kits the office can order?",
    diagram: { type: "dataTable", params: { headers: ["Kit type", "Cost per kit (dollars)"], rows: [["Standard", "5.50"], ["Electric", "14.00"]] } },
    choices: [
      { id: "A", text: "$22$" },
      // distractor: rounded 22.94 up, exceeding the budget
      { id: "B", text: "$23$" },
      // distractor: ignored the 90-kit minimum: 690/14
      { id: "C", text: "$49$" },
      // distractor: reported the number of standard kits, 90 - 22
      { id: "D", text: "$68$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Order exactly $90$ kits. All standard costs $495$, leaving $195$. Each electric upgrade costs $14.00 - 5.50 = 8.50$ more, so $195 \\div 8.50 = 22.94$, and the floor is $22$.\n\n**The Full Solution:**\nStep 1: Let $e$ be the number of electric kits and $s$ the number of standard kits: $5.5s + 14e \\leq 690$ and $s + e \\geq 90$.\nStep 2: Set $s = 90 - e$: $5.5(90 - e) + 14e \\leq 690$, so $495 + 8.5e \\leq 690$ and $8.5e \\leq 195$.\nStep 3: $e \\leq 22.94$, so the greatest whole number is $22$.\nCheck: $68$ standard and $22$ electric cost $374 + 308 = 682 \\leq 690$; $23$ electric would cost $368.50 + 322 = 690.50$, over budget by fifty cents. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($23$): rounds up; $22.94$ is close to $23$, but the check shows $23$ kits cost $\\$690.50$.\n* Choice C ($49$): computes $690 \\div 14$ and ignores the $90$-kit minimum.\n* Choice D ($68$): is the number of STANDARD kits in the optimal order, not the electric count asked for.\n\n**Test Day Takeaway:** \"Close to the next integer\" is still a floor; verify the boundary case with the actual total before choosing.",
    calculatorAllowed: true,
    tags: ["constraint-optimization"],
    sourceStyleRef: "inequality-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  {
    id: "bank-alg-356",
    domain: "algebra",
    skills: ["inequalities", "word-problems", "systems-of-equations"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A summer camp has $\\$1{,}640$ to spend on life jackets and must buy at least $160$ of them to outfit every camper. Youth life jackets cost $\\$8.50$ each and adult life jackets cost $\\$16$ each. What is the greatest number of adult life jackets the camp can buy?",
    choices: [
      // distractor: divided the leftover 280 by the full adult price 16 instead of the 7.50 difference
      { id: "A", text: "$17$" },
      { id: "B", text: "$37$" },
      // distractor: rounded 37.33 up, exceeding the budget
      { id: "C", text: "$38$" },
      // distractor: ignored the 160-jacket minimum: 1640/16
      { id: "D", text: "$102$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Inequality Word Problem (Floor)**\n\n**Choice B is correct.**\n\n**The Fast Way (~40s):** Buy exactly $160$. All youth jackets cost $1{,}360$, leaving $280$. Each adult upgrade costs $16 - 8.50 = 7.50$ more, so $280 \\div 7.50 = 37.33$, and the floor is $37$.\n\n**The Full Solution:**\nStep 1: Let $a$ be the number of adult jackets and $y$ the number of youth jackets: $8.5y + 16a \\leq 1{,}640$ and $y + a \\geq 160$.\nStep 2: Set $y = 160 - a$: $8.5(160 - a) + 16a \\leq 1{,}640$, so $1{,}360 + 7.5a \\leq 1{,}640$ and $7.5a \\leq 280$.\nStep 3: $a \\leq 37.33$, so the greatest whole number is $37$.\nCheck: $123$ youth and $37$ adult jackets cost $1{,}045.50 + 592 = 1{,}637.50 \\leq 1{,}640$; $38$ adult would cost $1{,}037 + 608 = 1{,}645$, over budget. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($17$): divides the leftover $280$ by $16$, the full adult price, instead of by the $7.50$ upgrade cost.\n* Choice C ($38$): rounds $37.33$ up; the check shows it exceeds the budget by $\\$5$.\n* Choice D ($102$): computes $1{,}640 \\div 16$ and ignores the requirement to buy at least $160$ jackets.\n\n**Test Day Takeaway:** Meet the minimum count with the cheaper item first; only the money left over buys the more expensive item, and only at the price difference.",
    calculatorAllowed: true,
    tags: ["constraint-optimization"],
    sourceStyleRef: "inequality-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-13"
  },

  // ─── H.E. ONE-VARIABLE LINEAR INEQUALITY (bank-alg-357..364) ──────────────
  {
    id: "bank-alg-357",
    domain: "algebra",
    skills: ["inequalities"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Which of the following inequalities represents all values of $x$ that are solutions to $4x - 3 > 13$?",
    choices: [
      // distractor: subtracted 3 instead of adding it (4x > 10)
      { id: "A", text: "$x > \\dfrac{5}{2}$" },
      // distractor: flipped the inequality after dividing by positive 4
      { id: "B", text: "$x < 4$" },
      { id: "C", text: "$x > 4$" },
      // distractor: added 3 but never divided by 4
      { id: "D", text: "$x > 16$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Add $3$: $4x > 16$. Divide by $4$: $x > 4$.\n\n**The Full Solution:**\nStep 1: Isolate the $x$-term by adding $3$ to both sides: $4x > 16$.\nStep 2: Divide both sides by $4$. Because $4$ is positive, the inequality symbol keeps its direction: $x > 4$.\nStep 3: The solution set is every number greater than $4$.\nCheck: $x = 5$ gives $4(5) - 3 = 17 > 13$ (true); $x = 4$ gives $13 > 13$ (false), so $4$ itself is excluded. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x > \\dfrac{5}{2}$): subtracts $3$ from $13$ instead of adding it, giving $4x > 10$.\n* Choice B ($x < 4$): flips the symbol when dividing by $4$; flipping happens only for a NEGATIVE divisor.\n* Choice D ($x > 16$): stops at $4x > 16$ and forgets to divide.\n\n**Test Day Takeaway:** Solve an inequality exactly like an equation, and flip the symbol only when you multiply or divide by a negative number.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "one-variable-linear-inequality",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-358",
    domain: "algebra",
    skills: ["inequalities"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Which of the following describes the solution set of the inequality $-3x + 8 \\leq 2$?",
    choices: [
      // distractor: divided -6 by 3 instead of -3 and kept the direction
      { id: "A", text: "$x \\leq -2$" },
      // distractor: divided by -3 but did not flip the symbol
      { id: "B", text: "$x \\leq 2$" },
      // distractor: flipped the symbol but never divided by 3
      { id: "C", text: "$x \\geq 6$" },
      { id: "D", text: "$x \\geq 2$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** Subtract $8$: $-3x \\leq -6$. Divide by $-3$ and FLIP: $x \\geq 2$.\n\n**The Full Solution:**\nStep 1: Subtract $8$ from both sides: $-3x \\leq -6$.\nStep 2: Divide both sides by $-3$. Dividing by a negative reverses the inequality: $x \\geq 2$.\nStep 3: The solution set is all numbers greater than or equal to $2$.\nCheck: $x = 3$ gives $-9 + 8 = -1 \\leq 2$ (true); $x = 0$ gives $8 \\leq 2$ (false), so values below $2$ are excluded. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x \\leq -2$): divides $-6$ by $3$ rather than $-3$, getting the wrong sign on $2$, and never flips.\n* Choice B ($x \\leq 2$): gets $2$ but keeps the original direction; $x = 0$ would then be a solution, and it is not.\n* Choice C ($x \\geq 6$): flips correctly but forgets to divide $-6$ by $-3$, reading $-3x \\leq -6$ as $x \\geq 6$.\n\n**Test Day Takeaway:** A negative coefficient on $x$ means one flip of the symbol at the division step; test a number afterward to confirm the direction.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "one-variable-linear-inequality",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-359",
    domain: "algebra",
    skills: ["inequalities"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Which inequality represents all values of $x$ that satisfy $3(x - 4) < 7x + 8$?",
    choices: [
      // distractor: collected as -4x < 20 and forgot to flip when dividing by -4
      { id: "A", text: "$x < -5$" },
      { id: "B", text: "$x > -5$" },
      // distractor: did not distribute the 3 to -4 (3x - 4 < 7x + 8)
      { id: "C", text: "$x > -3$" },
      // distractor: combined the constants as 8 - 12 = -4 with the wrong sign
      { id: "D", text: "$x > -1$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Distribute: $3x - 12 < 7x + 8$. Move $x$ to the right to keep its coefficient positive: $-20 < 4x$, so $x > -5$.\n\n**The Full Solution:**\nStep 1: Distribute the $3$ across BOTH terms: $3x - 12 < 7x + 8$.\nStep 2: Subtract $3x$ from both sides and subtract $8$ from both sides: $-12 - 8 < 7x - 3x$, which is $-20 < 4x$.\nStep 3: Divide by the positive number $4$: $-5 < x$, that is, $x > -5$.\nCheck: $x = 0$ gives $-12 < 8$ (true, and $0 > -5$); $x = -6$ gives $-30 < -34$ (false, and $-6$ is not greater than $-5$). $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x < -5$): collects the terms as $-4x < 20$ and then forgets to flip the symbol when dividing by $-4$.\n* Choice C ($x > -3$): distributes $3$ to $x$ but not to $-4$, working from $3x - 4 < 7x + 8$.\n* Choice D ($x > -1$): mishandles the constants, combining them as $-4$ instead of $-20$.\n\n**Test Day Takeaway:** Move the $x$-terms toward the side with the larger coefficient so you divide by a positive number and never have to flip.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "one-variable-linear-inequality",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-360",
    domain: "algebra",
    skills: ["inequalities"],
    difficulty: "medium",
    type: "fill-in",
    question: "What is the greatest integer value of $x$ that satisfies the inequality $9 - 4x > 2$?",
    correctAnswer: "1",
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**The correct answer is $1$.**\n\n**The Fast Way (~10s):** $9 - 4x > 2$ gives $-4x > -7$, so $x < \\dfrac{7}{4} = 1.75$. The greatest integer below $1.75$ is $1$.\n\n**The Full Solution:**\nStep 1: Subtract $9$ from both sides: $-4x > -7$.\nStep 2: Divide by $-4$ and flip the symbol: $x < \\dfrac{7}{4}$, or $x < 1.75$.\nStep 3: The integers satisfying $x < 1.75$ are $1, 0, -1, \\ldots$; the greatest is $1$.\nCheck: $x = 1$ gives $9 - 4 = 5 > 2$ (true); $x = 2$ gives $9 - 8 = 1 > 2$ (false). $\\checkmark$\n\n**Common Mistakes:** Forgetting to flip and concluding $x > 1.75$, which has no greatest integer; rounding $1.75$ up to $2$, which fails the inequality; or computing $9 - 2 = 7$ and dividing by $4$ without the sign, giving $x > 1.75$.\n\n**Test Day Takeaway:** After solving, translate the bound into integers carefully: \"greatest integer less than $1.75$\" is $1$, not $2$; then substitute both $1$ and $2$ to be sure.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "one-variable-linear-inequality",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  { id: 'bank-alg-361', domain: 'algebra', skills: ['inequalities'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For which value of $x$ is the inequality $\\dfrac{x - 4}{3} \\geq 2$ true?',
    choices: [{ id: 'A', text: '$x = 4$' }, { id: 'B', text: '$x = 8$' }, { id: 'C', text: '$x = 10$' }, { id: 'D', text: '$x = -4$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Multiply both sides by the positive number $3$ (no flip): $x - 4 \\ge 6 \\Rightarrow x \\ge 10$. The only listed value that is at least $10$ is $x = 10$.\n\n**The Full Solution:**\nStep 1: Clear the fraction. Since $3 > 0$, multiplying does not reverse the inequality: $x - 4 \\ge 6$.\nStep 2: Add $4$ to both sides: $x \\ge 10$.\nStep 3: Check the choices against $x \\ge 10$. Only $x = 10$ satisfies it.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x = 4$): the value that makes the numerator $0$, not a solution of the inequality.\n* Choice B ($x = 8$): close to the boundary but $8 < 10$, so $\\frac{8-4}{3} = \\frac{4}{3} < 2$.\n* Choice D ($x = -4$): negative, far below the boundary; $\\frac{-4-4}{3} = -\\frac{8}{3} < 2$.\n\n**Test Day Takeaway:** Clear fractions first by multiplying by the positive denominator — multiplying or dividing by a positive number never flips the inequality sign.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-variable-linear-inequality', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-362', domain: 'algebra', skills: ['inequalities'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which compound inequality is equivalent to $2 < x + 5 \\leq 9$?',
    choices: [{ id: 'A', text: '$-3 < x \\leq 4$' }, { id: 'B', text: '$-3 \\leq x < 4$' }, { id: 'C', text: '$7 < x \\leq 14$' }, { id: 'D', text: '$-7 < x \\leq -14$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Subtract $5$ from all three parts of $2 < x + 5 \\le 9$: $-3 < x \\le 4$.\n\n**The Full Solution:**\nStep 1: A compound inequality is two inequalities at once; do the same operation to every part.\nStep 2: Subtract $5$: $2 - 5 < x + 5 - 5 \\le 9 - 5$, which is $-3 < x \\le 4$.\nStep 3: The strict $<$ stays on the left and the inclusive $\\le$ stays on the right.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-3 \\le x < 4$): swaps which bound is strict and which is inclusive.\n* Choice C ($7 < x \\le 14$): added $5$ instead of subtracting it.\n* Choice D ($-7 < x \\le -14$): subtracted $5$ from the wrong side and even reversed the bounds.\n\n**Test Day Takeaway:** For $a < x + c \\le b$, apply the same operation to all three parts and keep each comparator ($<$ vs $\\le$) attached to its own bound.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-variable-linear-inequality', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-363', domain: 'algebra', skills: ['inequalities'], difficulty: 'hard', type: 'multiple-choice',
    question: 'For how many integer values of $x$ does $-6 \\leq 2x - 4 < 8$ hold?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$6$' }, { id: 'D', text: '$7$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Add $4$ to all parts: $-2 \\le 2x < 12$. Divide by $2$: $-1 \\le x < 6$. The integers $-1, 0, 1, 2, 3, 4, 5$ give $7$ values.\n\n**The Full Solution:**\nStep 1: Isolate $x$ across all three parts of $-6 \\le 2x - 4 < 8$. Add $4$: $-2 \\le 2x < 12$.\nStep 2: Divide by the positive number $2$ (no flip): $-1 \\le x < 6$.\nStep 3: Count integers in $[-1, 6)$: include $-1$, exclude $6$. That is $-1, 0, 1, 2, 3, 4, 5$, which is $7$ integers.\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): counted only the nonnegative integers $0$ through $3$, or miscounted the span.\n* Choice B ($5$): forgot to include the left endpoint $-1$.\n* Choice C ($6$): off by one — likely included $6$ or dropped $-1$.\n\n**Test Day Takeaway:** To count integers in a half-open range $[a, b)$, include $a$ and exclude $b$; when in doubt, list them out.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-variable-linear-inequality', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-364', domain: 'algebra', skills: ['inequalities'], difficulty: 'hard', type: 'fill-in',
    question: 'What is the greatest integer value of $x$ that satisfies the inequality $-3x + 8 \\geq 2x - 12$?',
    correctAnswer: '4',
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~10s):** Collect terms: $-3x + 8 \\ge 2x - 12$ gives $20 \\ge 5x$, so $x \\le 4$. The greatest integer is $4$.\n\n**The Full Solution:**\nStep 1: Move the variable terms to one side. Add $3x$ and $12$ to both sides: $20 \\ge 5x$.\nStep 2: Divide by the positive number $5$ (no flip): $4 \\ge x$, i.e. $x \\le 4$.\nStep 3: The inclusive $\\le$ allows $x = 4$ itself, so the greatest integer that works is $4$.\n\n**Common Mistakes:** Reporting $5$ by reading $x \\le 4$ as $x < 5$ and overshooting; flipping the inequality to $x \\ge 4$ when no negative divisor was used.\n\n**Test Day Takeaway:** An inclusive $\\le$ keeps the boundary as a valid solution, so the greatest integer satisfying $x \\le 4$ is $4$ itself.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-variable-linear-inequality', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── H.E. SYSTEM OF LINEAR INEQUALITIES (bank-alg-365..372) ──────────────
  { id: 'bank-alg-365', domain: 'algebra', skills: ['inequalities'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which ordered pair $(x, y)$ satisfies BOTH $x + y \\leq 10$ AND $x \\geq 4$?',
    choices: [{ id: 'A', text: '$(2, 8)$' }, { id: 'B', text: '$(5, 4)$' }, { id: 'C', text: '$(7, 6)$' }, { id: 'D', text: '$(8, 5)$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Test $(5, 4)$: $5 + 4 = 9 \\le 10$ and $5 \\ge 4$. Both hold, so B works.\n\n**The Full Solution:**\nStep 1: Check $x \\ge 4$ first — it eliminates any pair with $x < 4$.\nStep 2: For the survivors, check $x + y \\le 10$.\nStep 3: $(5, 4)$: $5 \\ge 4$ and $5 + 4 = 9 \\le 10$. Both constraints pass.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(2, 8)$): fails $x \\ge 4$ because $2 < 4$.\n* Choice C ($(7, 6)$): $7 + 6 = 13 > 10$, violating the sum constraint.\n* Choice D ($(8, 5)$): $8 + 5 = 13 > 10$, same violation.\n\n**Test Day Takeaway:** A solution must satisfy every inequality in the system — reject a point the moment it fails any single constraint.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-linear-inequalities', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-366', domain: 'algebra', skills: ['inequalities'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which ordered pair $(x, y)$ is a solution to the system $y > 2x + 3$ and $y \\leq x + 7$?',
    choices: [{ id: 'A', text: '$(0, 0)$' }, { id: 'B', text: '$(0, 5)$' }, { id: 'C', text: '$(3, 5)$' }, { id: 'D', text: '$(5, 10)$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Test $(0, 5)$: $5 > 2(0) + 3 = 3$ and $5 \\le 0 + 7 = 7$. Both hold, so B works.\n\n**The Full Solution:**\nStep 1: A solution must satisfy both $y > 2x + 3$ and $y \\le x + 7$.\nStep 2: At $(0, 5)$: the first gives $5 > 3$ ($\\checkmark$); the second gives $5 \\le 7$ ($\\checkmark$).\nStep 3: Both pass, so $(0, 5)$ is in the solution region.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(0, 0)$): fails the first since $0 > 3$ is false.\n* Choice C ($(3, 5)$): fails the first since $5 > 2(3) + 3 = 9$ is false.\n* Choice D ($(5, 10)$): passes the second ($10 \\le 12$) but fails the first since $10 > 2(5) + 3 = 13$ is false.\n\n**Test Day Takeaway:** Plug a candidate into every inequality; one false statement disqualifies the entire point.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-linear-inequalities', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-367', domain: 'algebra', skills: ['inequalities'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A graph shows a region bounded by the line $y = x + 2$ (dashed) and $y = -x + 6$ (solid), with shading BELOW both lines. Which system corresponds to this graph?',
    // Renders the promised figure: dashed strict boundary + solid inclusive
    // boundary + gray solution region (renderer support added 2026-08-13).
    diagram: { type: 'twoLineGraph', params: { intersection: { x: 2, y: 4 }, slope1: 1, slope2: -1, line1Dash: true, shadeRegion: 'below-both', showIntersection: false, xRange: [-6, 8], yRange: [-4, 8] } },
    choices: [{ id: 'A', text: '$y < x + 2$ and $y \\leq -x + 6$' }, { id: 'B', text: '$y > x + 2$ and $y \\geq -x + 6$' }, { id: 'C', text: '$y \\geq x + 2$ and $y < -x + 6$' }, { id: 'D', text: '$y \\leq x + 2$ and $y \\geq -x + 6$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Dashed line $\\Rightarrow$ strict, so $y = x + 2$ becomes a strict comparator; solid line $\\Rightarrow$ inclusive, so $y = -x + 6$ becomes $\\le$. Shading below both means $y <$ and $y \\le$, giving $y < x + 2$ and $y \\le -x + 6$.\n\n**The Full Solution:**\nStep 1: A dashed boundary excludes the line itself, so the inequality on $y = x + 2$ is strict ($<$ or $>$).\nStep 2: A solid boundary includes the line, so the inequality on $y = -x + 6$ is inclusive ($\\le$ or $\\ge$).\nStep 3: Shading below a line means $y$ is less than the line's value, so both are \"$<$ / $\\le$\": $y < x + 2$ and $y \\le -x + 6$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($y > x + 2$ and $y \\ge -x + 6$): shades above both lines, the opposite of what is drawn.\n* Choice C ($y \\ge x + 2$ and $y < -x + 6$): reverses both the line styles and one shading direction.\n* Choice D ($y \\le x + 2$ and $y \\ge -x + 6$): makes the dashed line inclusive and shades above the second line.\n\n**Test Day Takeaway:** Read line style for strictness (dashed = strict, solid = inclusive) and shading for direction (below = $<$/$\\le$, above = $>$/$\\ge$).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-linear-inequalities', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-368', domain: 'algebra', skills: ['inequalities'], difficulty: 'medium', type: 'fill-in',
    question: 'For the system $x + y \\leq 8$ and $y \\geq 2x - 1$, what is the maximum value of $y$ such that $(0, y)$ is in the solution region?',
    correctAnswer: '8',
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~10s):** Set $x = 0$. The constraints become $y \\le 8$ and $y \\ge -1$, so $y$ ranges over $[-1, 8]$. The maximum is $8$.\n\n**The Full Solution:**\nStep 1: Substitute $x = 0$ into $x + y \\le 8$: $y \\le 8$.\nStep 2: Substitute $x = 0$ into $y \\ge 2x - 1$: $y \\ge -1$.\nStep 3: Both must hold, so $-1 \\le y \\le 8$; the largest allowed $y$ is $8$.\n\n**Common Mistakes:** Reporting $-1$ (the minimum, not the maximum); ignoring one constraint and assuming $y$ is unbounded.\n\n**Test Day Takeaway:** Substitute the fixed coordinate first, then read off the tightest upper and lower bounds the remaining inequalities place on the free variable.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-linear-inequalities', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-369', domain: 'algebra', skills: ['inequalities'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A bakery sells white loaves at $\\$3$ and rye at $\\$4$. They want to sell at most $200$ loaves total but earn at least $\\$700$. If $w$ and $r$ are the numbers of white and rye loaves, which system of inequalities models the constraints?',
    choices: [{ id: 'A', text: '$w + r \\leq 200$ and $3w + 4r \\leq 700$' }, { id: 'B', text: '$w + r \\geq 200$ and $3w + 4r \\geq 700$' }, { id: 'C', text: '$w + r \\leq 200$ and $3w + 4r \\geq 700$' }, { id: 'D', text: '$w + r \\geq 200$ and $3w + 4r \\leq 700$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** \"At most $200$ total\" $\\Rightarrow w + r \\le 200$; \"at least $\\$700$\" $\\Rightarrow 3w + 4r \\ge 700$. That pairing is Choice C.\n\n**The Full Solution:**\nStep 1: Total loaves is $w + r$. \"At most $200$\" caps it from above: $w + r \\le 200$.\nStep 2: Revenue is $\\$3$ per white plus $\\$4$ per rye, so $3w + 4r$. \"Earn at least $\\$700$\" sets a floor: $3w + 4r \\ge 700$.\nStep 3: The system is $w + r \\le 200$ and $3w + 4r \\ge 700$.\n\n**Why the wrong answers are tempting:**\n* Choice A: makes the revenue an upper bound ($3w + 4r \\le 700$), but \"at least\" is a floor.\n* Choice B: turns \"at most $200$\" into $w + r \\ge 200$, reversing the loaf cap.\n* Choice D: reverses both comparators relative to the wording.\n\n**Test Day Takeaway:** Map the words to symbols: \"at most / no more than / maximum\" is $\\le$, and \"at least / no less than / minimum\" is $\\ge$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-linear-inequalities', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-370', domain: 'algebra', skills: ['inequalities'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which best describes the graph of the system $y > -2x + 3$ AND $y < x + 4$ in the $xy$-plane?',
    choices: [{ id: 'A', text: 'A wedge bounded by two dashed lines, shaded above the first and below the second.' }, { id: 'B', text: 'A region with two solid lines, shaded above both.' }, { id: 'C', text: 'A region with one dashed line and one solid line.' }, { id: 'D', text: 'The empty set — the inequalities contradict each other.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Both inequalities are strict ($>$ and $<$), so both boundary lines are dashed. Shading above $y > -2x + 3$ and below $y < x + 4$ overlaps in a wedge — Choice A.\n\n**The Full Solution:**\nStep 1: A strict inequality ($>$ or $<$) draws a dashed line because the boundary is excluded; here both are strict, so both lines are dashed.\nStep 2: $y > -2x + 3$ shades above its line; $y < x + 4$ shades below its line.\nStep 3: The solution is where the two half-planes overlap, which is the wedge-shaped intersection bounded by two dashed lines.\n\n**Why the wrong answers are tempting:**\n* Choice B: claims solid lines and shading above both — wrong on style and on one direction.\n* Choice C: mixes one dashed and one solid line, but both inequalities are strict.\n* Choice D: the two lines have different slopes ($-2$ and $1$), so they intersect and the region is nonempty — not the empty set.\n\n**Test Day Takeaway:** Strict inequalities draw dashed lines, and the solution set is the intersection of the shaded half-planes.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-linear-inequalities', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-371', domain: 'algebra', skills: ['inequalities'], difficulty: 'hard', type: 'multiple-choice',
    question: 'For the system $x + 2y \\geq 20$ and $3x + y \\geq 30$ and $x, y \\geq 0$, which point lies on the boundary where the first two constraints are both binding?',
    choices: [{ id: 'A', text: '$(0, 30)$' }, { id: 'B', text: '$(8, 6)$' }, { id: 'C', text: '$(10, 5)$' }, { id: 'D', text: '$(20, 0)$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** A corner where both constraints are tight solves them as equations. From $3x + y = 30$, $y = 30 - 3x$; substitute into $x + 2y = 20$: $x + 60 - 6x = 20 \\Rightarrow -5x = -40 \\Rightarrow x = 8$, $y = 6$. That is $(8, 6)$.\n\n**The Full Solution:**\nStep 1: \"Both constraints binding\" means both inequalities hold as equalities: $x + 2y = 20$ and $3x + y = 30$.\nStep 2: Solve the system. From the second equation, $y = 30 - 3x$.\nStep 3: Substitute: $x + 2(30 - 3x) = 20 \\Rightarrow x + 60 - 6x = 20 \\Rightarrow -5x = -40 \\Rightarrow x = 8$, then $y = 30 - 24 = 6$.\nStep 4: Verify both: $8 + 2(6) = 20$ and $3(8) + 6 = 30$. Both check, so $(8, 6)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(0, 30)$): lies on $3x + y = 30$ only; $0 + 60 = 60 \\neq 20$.\n* Choice C ($(10, 5)$): satisfies neither equation exactly ($10 + 10 = 20$ holds but $30 + 5 = 35 \\neq 30$).\n* Choice D ($(20, 0)$): lies on $x + 2y = 20$ only; $60 + 0 = 60 \\neq 30$.\n\n**Test Day Takeaway:** A corner where two constraints are simultaneously binding is the solution of those two boundary lines treated as equalities — solve them as a system of equations.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'system-of-linear-inequalities', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-372', domain: 'algebra', skills: ['inequalities'], difficulty: 'hard', type: 'fill-in',
    question: 'The system $x + y \\leq 15$, $x \\geq 2$, $y \\geq 3$ defines a region in the $xy$-plane. What is the maximum possible value of $x + 2y$ over this region?',
    correctAnswer: '28',
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**The correct answer is $28$.**\n\n**The Fast Way (~30s):** A linear objective on a polygon maxes at a vertex. The corners are $(2, 3)$, $(2, 13)$, and $(12, 3)$; $x + 2y$ equals $8$, $28$, and $18$. The maximum is $28$.\n\n**The Full Solution:**\nStep 1: The region $x + y \\le 15$, $x \\ge 2$, $y \\ge 3$ is a triangle. Find its vertices by intersecting the boundary lines.\nStep 2: $x = 2$ with $y = 3$ gives $(2, 3)$; $x = 2$ with $x + y = 15$ gives $(2, 13)$; $y = 3$ with $x + y = 15$ gives $(12, 3)$.\nStep 3: Evaluate $x + 2y$ at each: $(2,3) \\to 8$, $(2,13) \\to 2 + 26 = 28$, $(12,3) \\to 12 + 6 = 18$. The largest is $28$.\n\n**Common Mistakes:** Testing only the lower corner $(2, 3)$ and reporting $8$; using $(12, 3)$ because it has the larger $x$ and reporting $18$, forgetting $y$ is weighted by $2$.\n\n**Test Day Takeaway:** A linear function over a polygonal feasible region attains its maximum and minimum at the vertices — evaluate at every corner and compare.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'system-of-linear-inequalities', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── H.C. DISTANCE FORMULA (bank-alg-373..380) ───────────────────────────
  { id: 'bank-alg-373', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the distance between the points $(1, 2)$ and $(4, 6)$ in the $xy$-plane?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$7$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Distance Formula**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** The horizontal gap is $\\Delta x = 4-1 = 3$ and the vertical gap is $\\Delta y = 6-2 = 4$. That is a $3$-$4$-$5$ right triangle, so the distance is $5$.\n\n**The Full Solution:**\nStep 1: Distance $= \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$, the hypotenuse of the right triangle with legs $\\Delta x$ and $\\Delta y$.\nStep 2: $\\Delta x = 4-1 = 3$, $\\Delta y = 6-2 = 4$.\nStep 3: $\\sqrt{3^2 + 4^2} = \\sqrt{9+16} = \\sqrt{25} = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reported only $\\Delta x$.\n* Choice B ($4$): reported only $\\Delta y$.\n* Choice D ($7$): added $\\Delta x + \\Delta y$ (taxicab distance), not the straight-line distance.\n\n**Test Day Takeaway:** Distance between two points is the hypotenuse of a right triangle: $\\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$. Watch for the $3$-$4$-$5$ pattern to skip the calculator.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-374', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the distance between the origin $(0, 0)$ and the point $(-3, 4)$ in the $xy$-plane?',
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$7$' }, { id: 'D', text: '$25$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Distance Formula**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** From the origin, the distance to $(-3, 4)$ is $\\sqrt{(-3)^2 + 4^2} = \\sqrt{9+16} = \\sqrt{25} = 5$. A $3$-$4$-$5$ triangle.\n\n**The Full Solution:**\nStep 1: Distance from the origin to $(x, y)$ is $\\sqrt{x^2 + y^2}$.\nStep 2: $(-3)^2 = 9$ and $4^2 = 16$ — the negative sign disappears when you square.\nStep 3: $\\sqrt{9 + 16} = \\sqrt{25} = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): subtracted the coordinates ($4-3$) instead of using the distance formula.\n* Choice C ($7$): added $|{-3}| + 4$ (taxicab distance).\n* Choice D ($25$): stopped at $x^2 + y^2 = 25$ and forgot the square root.\n\n**Test Day Takeaway:** Squaring kills negative signs, so negative coordinates give the same distance as their positive twins. Distance from the origin is $\\sqrt{x^2 + y^2}$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-375', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the distance between the points $(2, -3)$ and $(7, 9)$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$12$' }, { id: 'C', text: '$13$' }, { id: 'D', text: '$17$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Distance Formula**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $\\Delta x = 7-2 = 5$ and $\\Delta y = 9-(-3) = 12$. That is a $5$-$12$-$13$ triple, so the distance is $13$.\n\n**The Full Solution:**\nStep 1: Distance $= \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$.\nStep 2: $\\Delta x = 7-2 = 5$; $\\Delta y = 9-(-3) = 12$ — subtracting a negative adds.\nStep 3: $\\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): reported only $\\Delta x$.\n* Choice B ($12$): reported only $\\Delta y$.\n* Choice D ($17$): added $\\Delta x + \\Delta y$ (taxicab distance) instead of taking the hypotenuse.\n\n**Test Day Takeaway:** Memorize the Pythagorean triples ($3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$) — spotting one turns a distance problem into instant recall.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-376', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'medium', type: 'fill-in',
    question: 'What is the distance between the points $(-1, -2)$ and $(5, 6)$?',
    correctAnswer: '10',
    explanation: "**SAT Pattern: Distance Formula**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~10s):** $\\Delta x = 5-(-1) = 6$ and $\\Delta y = 6-(-2) = 8$. That is a scaled $3$-$4$-$5$ triangle (doubled), so the distance is $10$.\n\n**The Full Solution:**\nStep 1: Distance $= \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$.\nStep 2: $\\Delta x = 5-(-1) = 6$; $\\Delta y = 6-(-2) = 8$.\nStep 3: $\\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.\n\n**Common Mistakes:** Mishandling the double negatives and using $\\Delta x = 4$ or $\\Delta y = 4$; reporting $14$ by adding $6 + 8$ instead of taking the hypotenuse.\n\n**Test Day Takeaway:** $6$-$8$-$10$ is just a $3$-$4$-$5$ triple scaled by $2$. Subtract coordinates carefully, keeping signs, then look for a familiar triple.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-377', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A point $(x, 5)$ is $13$ units away from the origin in the $xy$-plane. What is the positive value of $x$?',
    choices: [{ id: 'A', text: '$8$' }, { id: 'B', text: '$12$' }, { id: 'C', text: '$13$' }, { id: 'D', text: '$18$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Distance Formula**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The point $(x, 5)$ is $13$ from the origin, so $\\sqrt{x^2 + 25} = 13$. Square: $x^2 = 144$, giving $x = 12$. (An $x$-$5$-$13$ triple with $x = 12$.)\n\n**The Full Solution:**\nStep 1: Distance from the origin to $(x, 5)$ is $\\sqrt{x^2 + 5^2} = 13$.\nStep 2: Square both sides to clear the radical: $x^2 + 25 = 169$.\nStep 3: $x^2 = 144 \\Rightarrow x = 12$ (the positive value).\n\n**Why the wrong answers are tempting:**\n* Choice A ($8$): guessed an $8$-$15$-$17$-style fit that does not match a leg of $5$.\n* Choice C ($13$): copied the distance itself instead of solving for the leg.\n* Choice D ($18$): used $13 + 5$ instead of working from $13^2 - 5^2$.\n\n**Test Day Takeaway:** When distance is given, square it immediately: $\\text{distance}^2 = x^2 + y^2$. Squaring first avoids dragging a radical through the algebra.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-378', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'medium', type: 'multiple-choice',
    question: 'In the $xy$-plane, the points $(1, 4)$ and $(7, 4)$ are two adjacent vertices of a square. What is the area of the square, in square units?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$12$' }, { id: 'C', text: '$24$' }, { id: 'D', text: '$36$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Distance Formula**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** The two vertices share the same $y$-value, so the side length is $|7 - 1| = 6$. Area $= 6^2 = 36$.\n\n**The Full Solution:**\nStep 1: $(1, 4)$ and $(7, 4)$ are adjacent vertices, so the segment between them is one side of the square.\nStep 2: Same $y$, so the distance is purely horizontal: $|7 - 1| = 6$.\nStep 3: Area of a square $= (\\text{side})^2 = 6^2 = 36$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): reported the side length, not the area.\n* Choice B ($12$): used $2 \\times 6$ (perimeter of two sides) instead of squaring.\n* Choice C ($24$): used $4 \\times 6$ (the perimeter) instead of the area.\n\n**Test Day Takeaway:** Points on the same horizontal line are $|\\Delta x|$ apart; on the same vertical line, $|\\Delta y|$ apart. Then square the side to get a square's area.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-379', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'hard', type: 'multiple-choice',
    question: 'What is the length of the line segment with endpoints $(2, 3)$ and $(8, 11)$?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$10$' }, { id: 'D', text: '$14$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Distance Formula**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $\\Delta x = 8-2 = 6$ and $\\Delta y = 11-3 = 8$. That is a scaled $3$-$4$-$5$ triangle, so the length is $\\sqrt{6^2 + 8^2} = 10$.\n\n**The Full Solution:**\nStep 1: The length of a segment equals the distance between its endpoints: $\\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$.\nStep 2: $\\Delta x = 8-2 = 6$; $\\Delta y = 11-3 = 8$.\nStep 3: $\\sqrt{36 + 64} = \\sqrt{100} = 10$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): reported only $\\Delta x$.\n* Choice B ($8$): reported only $\\Delta y$.\n* Choice D ($14$): added $\\Delta x + \\Delta y$ instead of taking the hypotenuse.\n\n**Test Day Takeaway:** Segment length and distance between endpoints are the same calculation. The $6$-$8$-$10$ triple makes it a no-calculator solve.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-380', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'hard', type: 'fill-in',
    question: 'The point $(a, 4)$ lies on a circle centered at the origin with radius $5$. What is the positive value of $a$?',
    correctAnswer: '3',
    explanation: "**SAT Pattern: Distance Formula**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~10s):** Every point on the circle is radius $5$ from the origin, so $a^2 + 4^2 = 5^2$. Then $a^2 = 9$, giving $a = 3$ (a $3$-$4$-$5$ triple).\n\n**The Full Solution:**\nStep 1: A circle centered at the origin with radius $5$ has equation $x^2 + y^2 = 25$ — the distance formula squared.\nStep 2: Substitute the point $(a, 4)$: $a^2 + 16 = 25$.\nStep 3: $a^2 = 9 \\Rightarrow a = 3$ (the positive value).\n\n**Common Mistakes:** Using $a = 25 - 16 = 9$ by forgetting to square the $4$ and unsquare $a$; reporting $a^2 = 9$ as the answer instead of $a = 3$.\n\n**Test Day Takeaway:** \"On a circle of radius $r$ centered at the origin\" means $x^2 + y^2 = r^2$. It is the distance formula in disguise — plug the point in and solve.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'distance-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── H.C. MIDPOINT FORMULA (bank-alg-381..388) ───────────────────────────
  { id: 'bank-alg-381', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the midpoint of the line segment connecting $(2, 4)$ and $(8, 10)$?',
    choices: [{ id: 'A', text: '$(3, 5)$' }, { id: 'B', text: '$(5, 7)$' }, { id: 'C', text: '$(6, 6)$' }, { id: 'D', text: '$(10, 14)$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Midpoint Formula**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Average each coordinate: $\\left(\\frac{2+8}{2}, \\frac{4+10}{2}\\right) = (5, 7)$.\n\n**The Full Solution:**\nStep 1: The midpoint is the average of the endpoints' $x$-values and the average of their $y$-values.\nStep 2: $x$-midpoint $= \\frac{2+8}{2} = 5$.\nStep 3: $y$-midpoint $= \\frac{4+10}{2} = 7$, so the midpoint is $(5, 7)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(3, 5)$): averaged within each point ($\\frac{2+4}{2}$) instead of pairing $x$ with $x$ and $y$ with $y$.\n* Choice C ($(6, 6)$): mismatched the averages.\n* Choice D ($(10, 14)$): added the coordinates without dividing by $2$.\n\n**Test Day Takeaway:** Midpoint $= \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$ — average the $x$'s, average the $y$'s, keep them separate.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'midpoint-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-382', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the midpoint of the segment with endpoints $(-4, 6)$ and $(10, -2)$?',
    choices: [{ id: 'A', text: '$(2, 2)$' }, { id: 'B', text: '$(3, 2)$' }, { id: 'C', text: '$(6, 4)$' }, { id: 'D', text: '$(7, 4)$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Midpoint Formula**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Average each coordinate, keeping the signs: $\\left(\\frac{-4+10}{2}, \\frac{6+(-2)}{2}\\right) = (3, 2)$.\n\n**The Full Solution:**\nStep 1: Midpoint averages the $x$-values and the $y$-values separately.\nStep 2: $x$-midpoint $= \\frac{-4+10}{2} = \\frac{6}{2} = 3$.\nStep 3: $y$-midpoint $= \\frac{6+(-2)}{2} = \\frac{4}{2} = 2$, so the midpoint is $(3, 2)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(2, 2)$): mishandled the $-4 + 10$ sum.\n* Choice C ($(6, 4)$): added the coordinates without dividing by $2$.\n* Choice D ($(7, 4)$): dropped the negatives, averaging $\\frac{4+10}{2}$ and $\\frac{6+2}{2}$.\n\n**Test Day Takeaway:** When endpoints have negative coordinates, average them with their signs intact — do not strip the minus before adding.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'midpoint-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-383', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The midpoint of the segment from $(3, k)$ to $(11, 5)$ is $(7, 8)$. What is the value of $k$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$11$' }, { id: 'D', text: '$13$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Midpoint Formula**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The $y$-midpoint is $\\frac{k+5}{2} = 8$. Multiply out: $k + 5 = 16$, so $k = 11$.\n\n**The Full Solution:**\nStep 1: The $y$-coordinate of the midpoint is the average of the two endpoints' $y$-values: $\\frac{k+5}{2}$.\nStep 2: Set it equal to the given midpoint $y$: $\\frac{k+5}{2} = 8$.\nStep 3: $k + 5 = 16 \\Rightarrow k = 11$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): solved $\\frac{k+11}{2} = 7$ using the $x$-values, which are not where $k$ lives.\n* Choice B ($8$): copied the midpoint $y$-value instead of solving for $k$.\n* Choice D ($13$): used $\\frac{k+5}{2} = 8 \\Rightarrow k = 16 - 3$, dropping the $5$ correctly but then mis-subtracting.\n\n**Test Day Takeaway:** A known midpoint is one equation per coordinate. Solve $\\frac{\\text{unknown} + \\text{known}}{2} = \\text{midpoint}$ for the missing endpoint value.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'midpoint-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-384', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'medium', type: 'fill-in',
    question: 'The midpoint of the segment from $(a, 2)$ to $(8, b)$ is $(5, 4)$. What is the value of $a + b$?',
    correctAnswer: '8',
    explanation: "**SAT Pattern: Midpoint Formula**\n\n**The correct answer is $8$.**\n\n**The Fast Way (~10s):** Each coordinate gives its own equation: $\\frac{a+8}{2} = 5 \\Rightarrow a = 2$, and $\\frac{2+b}{2} = 4 \\Rightarrow b = 6$. Sum: $a + b = 8$.\n\n**The Full Solution:**\nStep 1: The $x$-midpoint is $\\frac{a+8}{2} = 5$, so $a + 8 = 10$ and $a = 2$.\nStep 2: The $y$-midpoint is $\\frac{2+b}{2} = 4$, so $2 + b = 8$ and $b = 6$.\nStep 3: $a + b = 2 + 6 = 8$.\n\n**Common Mistakes:** Forgetting to double the midpoint before subtracting (e.g., $a = 5 - 8 = -3$); finding only $a$ and reporting it instead of the requested sum $a + b$.\n\n**Test Day Takeaway:** Treat each coordinate of the midpoint as a separate equation, solve for each unknown, then combine as the question asks.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'midpoint-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-385', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A line segment has one endpoint at $(1, -3)$ and midpoint $(4, 2)$. What are the coordinates of the other endpoint?',
    choices: [{ id: 'A', text: '$(7, 7)$' }, { id: 'B', text: '$(7, -7)$' }, { id: 'C', text: '$(3, 5)$' }, { id: 'D', text: '$(2.5, -0.5)$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Midpoint Formula**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The midpoint is the average of the endpoints, so the other endpoint is $2 \\cdot \\text{midpoint} - \\text{known endpoint} = (2(4)-1,\\ 2(2)-(-3)) = (7, 7)$.\n\n**The Full Solution:**\nStep 1: For each coordinate, midpoint $= \\frac{\\text{endpoint}_1 + \\text{endpoint}_2}{2}$. Solve for the unknown endpoint: $\\text{endpoint}_2 = 2 \\cdot \\text{midpoint} - \\text{endpoint}_1$.\nStep 2: $x$: $2(4) - 1 = 8 - 1 = 7$.\nStep 3: $y$: $2(2) - (-3) = 4 + 3 = 7$.\nThe other endpoint is $(7, 7)$.\n\n**Why the wrong answers are tempting:**\n* Choice B $(7, -7)$: correct $x$ but drops the sign flip on $-(-3)$, using $4 - 3$ instead of $4 + 3$.\n* Choice C $(3, 5)$: computes the displacement $\\text{midpoint} - \\text{endpoint} = (3, 5)$ but forgets to add it to the midpoint again.\n* Choice D $(2.5, -0.5)$: averages the midpoint with the known endpoint, treating the midpoint as the second endpoint.\n\n**Test Day Takeaway:** Given a midpoint and one endpoint, the other endpoint is $2 \\cdot \\text{midpoint} - \\text{known endpoint}$ — double the midpoint, then subtract what you already have.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'midpoint-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-386', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The diameter of a circle has endpoints $(-2, 6)$ and $(8, -4)$. What is the center of the circle?',
    choices: [{ id: 'A', text: '$(3, 1)$' }, { id: 'B', text: '$(5, 5)$' }, { id: 'C', text: '$(6, 2)$' }, { id: 'D', text: '$(10, 10)$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Midpoint Formula**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The center is the midpoint of any diameter: $\\left(\\frac{-2+8}{2},\\ \\frac{6+(-4)}{2}\\right) = (3, 1)$.\n\n**The Full Solution:**\nStep 1: The center of a circle is the midpoint of its diameter, so average the two endpoints coordinate by coordinate.\nStep 2: $x$: $\\frac{-2 + 8}{2} = \\frac{6}{2} = 3$.\nStep 3: $y$: $\\frac{6 + (-4)}{2} = \\frac{2}{2} = 1$.\nThe center is $(3, 1)$.\n\n**Why the wrong answers are tempting:**\n* Choice B $(5, 5)$: averages incorrectly, treating the spread of the points as the answer rather than the true midpoint.\n* Choice C $(6, 2)$: forgets to divide by $2$ on the $x$-coordinate, leaving $-2 + 8 = 6$.\n* Choice D $(10, 10)$: adds the coordinates without dividing by $2$ at all.\n\n**Test Day Takeaway:** The center of a circle is the midpoint of any diameter — just average the two diameter endpoints.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'midpoint-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-387', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'hard', type: 'multiple-choice',
    question: 'Points $A(2, 3)$, $B(8, 11)$, and $C$ are collinear, with $B$ the midpoint of $AC$. What are the coordinates of $C$?',
    choices: [{ id: 'A', text: '$(5, 7)$' }, { id: 'B', text: '$(10, 14)$' }, { id: 'C', text: '$(14, 19)$' }, { id: 'D', text: '$(16, 22)$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Midpoint Formula**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** $B$ is the midpoint of $AC$, so $C = 2B - A = (2(8)-2,\\ 2(11)-3) = (14, 19)$.\n\n**The Full Solution:**\nStep 1: If $B$ is the midpoint of $AC$, then $B = \\frac{A + C}{2}$, which rearranges to $C = 2B - A$.\nStep 2: $x$: $2(8) - 2 = 16 - 2 = 14$.\nStep 3: $y$: $2(11) - 3 = 22 - 3 = 19$.\nSo $C = (14, 19)$.\n\n**Why the wrong answers are tempting:**\n* Choice A $(5, 7)$: finds the midpoint of $AB$ instead of extending past $B$.\n* Choice B $(10, 14)$: adds the displacement $B - A = (6, 8)$ only once more onto $A$ in error, or stops after a half-step.\n* Choice D $(16, 22)$: computes $2B$ but forgets to subtract $A$.\n\n**Test Day Takeaway:** \"$B$ is the midpoint of $AC$\" means $C = 2B - A$ — double the midpoint and subtract the known endpoint. No equation-solving needed.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'midpoint-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-388', domain: 'algebra', skills: ['coordinate-geometry'], difficulty: 'hard', type: 'fill-in',
    question: 'A line segment from $(2, 5)$ to $(2k, 13)$ has its midpoint at $(7, 9)$. What is the value of $k$?',
    correctAnswer: '6',
    explanation: "**SAT Pattern: Midpoint Formula**\n\n**The correct answer is $6$.**\n\n**The Fast Way (~5s):** The midpoint $x$-coordinate is the average of the endpoint $x$-values: $\\frac{2 + 2k}{2} = 7 \\Rightarrow 2 + 2k = 14 \\Rightarrow k = 6$.\n\n**The Full Solution:**\nStep 1: The $x$-coordinate of the midpoint is $\\frac{x_1 + x_2}{2}$, so $\\frac{2 + 2k}{2} = 7$.\nStep 2: Multiply both sides by $2$: $2 + 2k = 14$.\nStep 3: Subtract $2$, then divide by $2$: $2k = 12 \\Rightarrow k = 6$.\nCheck with the $y$-coordinates: $\\frac{5 + 13}{2} = 9$ $\\checkmark$ — consistent with the given midpoint.\n\n**Common Mistakes:** Forgetting to multiply by $2$ first and solving $2 + 2k = 7$ to get $k = 2.5$; or working from the $y$-coordinates and not realizing $k$ lives only in the $x$-equation.\n\n**Test Day Takeaway:** When an endpoint carries a parameter, write the midpoint equation for the coordinate that contains it and solve.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'midpoint-formula', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // ─── H.E. healthy-push tail (bank-alg-389..390) ────────────────────────────
  { id: 'bank-alg-389', domain: 'algebra', skills: ['inequalities'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the solution to $4x - 7 \\leq 5x + 3$?',
    choices: [{ id: 'A', text: '$x \\leq -10$' }, { id: 'B', text: '$x \\geq -10$' }, { id: 'C', text: '$x \\leq 10$' }, { id: 'D', text: '$x \\geq 10$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Subtract $5x$ and add $7$: $-x \\le 10$. Multiply by $-1$ and FLIP: $x \\ge -10$.\n\n**The Full Solution:**\nStep 1: Collect variables on one side. From $4x - 7 \\le 5x + 3$, subtract $4x$ from both sides: $-7 \\le x + 3$.\nStep 2: Subtract $3$: $-10 \\le x$.\nStep 3: Read it as $x \\ge -10$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($x \\le -10$): correct value but failed to flip the inequality when isolating $x$ after multiplying by $-1$.\n* Choice C ($x \\le 10$): dropped the negative sign on $10$ and kept the inequality direction unflipped.\n* Choice D ($x \\ge 10$): dropped the negative sign on $10$.\n\n**Test Day Takeaway:** Flip the inequality sign only when you multiply or divide both sides by a negative number. Collecting terms by adding or subtracting never flips it.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-variable-linear-inequality', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  { id: 'bank-alg-390', domain: 'algebra', skills: ['inequalities'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A baker has $\\$60$ to buy flour and sugar for a recipe. Flour costs $\\$2$ per pound and sugar costs $\\$3$ per pound. She needs at least $20$ pounds total. If $f$ is pounds of flour and $s$ is pounds of sugar, which system represents her constraints?',
    choices: [{ id: 'A', text: '$2f + 3s \\leq 60$ and $f + s \\geq 20$' }, { id: 'B', text: '$2f + 3s \\geq 60$ and $f + s \\leq 20$' }, { id: 'C', text: '$2f + 3s \\leq 60$ and $f + s \\leq 20$' }, { id: 'D', text: '$2f + 3s = 60$ and $f + s = 20$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Cost cannot exceed the budget, so $2f + 3s \\le 60$. She needs at least $20$ pounds, so $f + s \\ge 20$. Both conditions match A.\n\n**The Full Solution:**\nStep 1: Cost of flour is $2f$ and cost of sugar is $3s$. With only $\\$60$ to spend, the total cost is at most $\\$60$: $2f + 3s \\le 60$.\nStep 2: \"At least $20$ pounds total\" is a lower bound on weight: $f + s \\ge 20$.\nStep 3: The system pairing $\\le$ for the budget with $\\ge$ for the weight is Choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B: reverses both inequalities — uses $\\ge 60$ for the budget and $\\le 20$ for the weight.\n* Choice C: gets the budget right ($\\le 60$) but flips the weight to $\\le 20$ instead of $\\ge 20$.\n* Choice D: uses equalities, forcing exact spending and exact weight rather than the allowed ranges.\n\n**Test Day Takeaway:** \"At most / no more than / a budget\" $\\Rightarrow \\le$. \"At least / no less than\" $\\Rightarrow \\ge$. Translate each constraint on its own.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-linear-inequalities', authoredBy: 'performsat-engine', createdAt: '2026-05-16' },

  // === TIER 0 BANK GROWTH (2026-05-21): 8 algebra patterns @ 3 items → @ 5 items ===

  { id: 'bank-alg-391', domain: 'algebra', skills: ['function-evaluation'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The function $g$ is defined by $g(x) = -2x + 9$. What is the value of $g(5)$?',
    choices: [{ id: 'A', text: '$19$' }, { id: 'B', text: '$-1$' }, { id: 'C', text: '$-10$' }, { id: 'D', text: '$14$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Substitute $x = 5$: $g(5) = -2(5) + 9 = -10 + 9 = -1$.\n\n**The Full Solution:**\nStep 1: Replace $x$ with $5$ in $g(x) = -2x + 9$.\nStep 2: $-2(5) = -10$.\nStep 3: $-10 + 9 = -1$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($19$): drops the negative on the slope, computing $2(5) + 9$.\n* Choice C ($-10$): stops after $-2(5)$ and forgets to add the constant $9$.\n* Choice D ($14$): ignores the coefficient $-2$ and adds input plus constant, $5 + 9$.\n\n**Test Day Takeaway:** Carry the sign through the multiplication before adding the constant. A negative coefficient times a positive input is negative.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-392', domain: 'algebra', skills: ['function-evaluation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = 2x^2 - 3x + 1$. What is the value of $f(-1)$?',
    choices: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$6$' }, { id: 'C', text: '$-4$' }, { id: 'D', text: '$2$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Substitute $x = -1$: $f(-1) = 2(-1)^2 - 3(-1) + 1 = 2 + 3 + 1 = 6$.\n\n**The Full Solution:**\nStep 1: $2(-1)^2 = 2(1) = 2$, since $(-1)^2 = 1$.\nStep 2: $-3(-1) = 3$ — subtracting a negative gives a positive.\nStep 3: Add the constant: $2 + 3 + 1 = 6$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): mishandles $(-1)^2$ as $-1$, getting $-2 + 3 + 1 = 2$, then slips further.\n* Choice C ($-4$): treats $-3(-1)$ as $-3$, computing $2 - 3 + 1$.\n* Choice D ($2$): correctly finds $2(-1)^2 = 2$ but stops there, dropping the other two terms.\n\n**Test Day Takeaway:** With a negative input, resolve each term's sign separately: $(-1)^2 = +1$ (even power), and subtracting a negative adds. Combine only after the signs are settled.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-evaluation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-393', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which of the following equations has infinitely many solutions?',
    choices: [{ id: 'A', text: '$2(x + 7) = 2x + 7$' }, { id: 'B', text: '$5(x - 1) = 5x - 5$' }, { id: 'C', text: '$5(x - 1) = 5x + 5$' }, { id: 'D', text: '$2(x + 7) = 14$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Distribute Choice B: $5(x - 1) = 5x - 5$, which matches the right side exactly. Identical sides mean every $x$ works — infinitely many solutions.\n\n**The Full Solution:**\nStep 1: An equation has infinitely many solutions when both sides simplify to the same expression (an identity).\nStep 2: Choice B: distribute $5(x - 1) = 5x - 5$. The right side is also $5x - 5$, so $5x - 5 = 5x - 5$ for every $x$.\nStep 3: That is an identity — infinitely many solutions.\n\n**Why the wrong answers are tempting:**\n* Choice A: $2(x + 7) = 2x + 14$, not $2x + 7$. Same $x$-coefficient with different constants $\\Rightarrow$ no solution.\n* Choice C: $5(x - 1) = 5x - 5$, not $5x + 5$. Same $x$-coefficient, different constants $\\Rightarrow$ no solution.\n* Choice D: $2(x + 7) = 14$ gives $2x + 14 = 14 \\Rightarrow x = 0$ — a single unique solution.\n\n**Test Day Takeaway:** Distribute and compare. Identical sides $\\Rightarrow$ identity (infinitely many); same $x$-coefficient but different constants $\\Rightarrow$ no solution; different $x$-coefficients $\\Rightarrow$ one solution.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'identifying-identity-contradiction-equations', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-394', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For the equation $8(x - 3) + k = 8x + 5$ to have infinitely many solutions, what is the value of $k$?',
    choices: [{ id: 'A', text: '$29$' }, { id: 'B', text: '$-19$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$-24$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Distribute the left side: $8x - 24 + k = 8x + 5$. The $8x$ terms already match, so set the constants equal: $-24 + k = 5 \\Rightarrow k = 29$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions requires both sides to be the same expression.\nStep 2: Left side: $8(x - 3) + k = 8x - 24 + k$. Right side: $8x + 5$.\nStep 3: The $x$-coefficients are both $8$, so match the constants: $-24 + k = 5$.\nStep 4: $k = 5 + 24 = 29$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-19$): solves $k = 5 - 24$ with the sign reversed, instead of $k = 5 + 24$.\n* Choice C ($5$): copies the right-side constant and ignores the $-24$ on the left.\n* Choice D ($-24$): copies the left-side constant without solving for $k$.\n\n**Test Day Takeaway:** \"Infinitely many solutions\" means the two sides are the same expression. With matching $x$-coefficients, choose the parameter so the constants match.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'identifying-identity-contradiction-equations', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-395', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A line in the $xy$-plane passes through the points $(2, 3)$ and $(5, 12)$. Which of the following is an equation of the line?',
    choices: [{ id: 'A', text: '$y = 3x - 3$' }, { id: 'B', text: '$y = 3x + 3$' }, { id: 'C', text: '$y = \\dfrac{1}{3}x + 3$' }, { id: 'D', text: '$y = 9x - 15$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Slope $= \\frac{12 - 3}{5 - 2} = \\frac{9}{3} = 3$. Using $(2, 3)$: $3 = 3(2) + b \\Rightarrow b = -3$, so $y = 3x - 3$.\n\n```seva-figure\n{\"type\":\"linearGraph\",\"params\":{\"slope\":3,\"yIntercept\":-3,\"xRange\":[0,8],\"yRange\":[0,15],\"gridInterval\":1,\"xTickInterval\":2,\"yTickInterval\":4,\"highlightPoints\":[[2,3],[5,12]]},\"caption\":\"Through $(2, 3)$ and $(5, 12)$ — rise 9 over run 3.\"}\n```\n\n**The Full Solution:**\nStep 1: Slope $m = \\frac{12 - 3}{5 - 2} = \\frac{9}{3} = 3$.\nStep 2: Substitute a point to find $b$. Using $(2, 3)$: $3 = 3(2) + b \\Rightarrow 3 = 6 + b \\Rightarrow b = -3$.\nStep 3: The equation is $y = 3x - 3$.\nCheck the other point: at $x = 5$, $y = 3(5) - 3 = 12$ $\\checkmark$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = 3x + 3$): correct slope but flips the sign of the intercept.\n* Choice C ($y = \\frac{1}{3}x + 3$): inverts the slope (run over rise) and misreads the intercept.\n* Choice D ($y = 9x - 15$): uses the raw rise of $9$ as the slope, forgetting to divide by the run of $3$.\n\n**Test Day Takeaway:** Find the slope first, then plug in either point to solve for $b$. Confirm by checking that the other point satisfies your equation.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'line-from-two-points', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-396', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A linear function $h$ satisfies $h(0) = 5$ and $h(4) = 13$. What is the value of $h(10)$?',
    choices: [{ id: 'A', text: '$23$' }, { id: 'B', text: '$25$' }, { id: 'C', text: '$20$' }, { id: 'D', text: '$30$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $h(0) = 5$ is the $y$-intercept, so $b = 5$. Slope $= \\frac{13 - 5}{4 - 0} = 2$, giving $h(x) = 2x + 5$, so $h(10) = 25$.\n\n**The Full Solution:**\nStep 1: $h(0) = 5$ means the line crosses the $y$-axis at $5$, so $b = 5$.\nStep 2: Slope $m = \\frac{13 - 5}{4 - 0} = \\frac{8}{4} = 2$.\nStep 3: $h(x) = 2x + 5$, so $h(10) = 2(10) + 5 = 25$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($23$): right slope but treats $h(4) = 13$ as the intercept, computing $20 + 3$.\n* Choice C ($20$): drops the intercept, computing only $2(10)$.\n* Choice D ($30$): misuses $h(4) = 13$ as the slope rather than reading slope from the two values.\n\n**Test Day Takeaway:** $h(0)$ hands you the $y$-intercept directly — no algebra. Then get the slope from the two given values and build $h(x) = mx + b$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'line-from-two-points', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-397', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $4x + 1 = 2x + 9$?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$\\dfrac{5}{3}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Strip the smaller $x$-term: subtract $2x$ to get $2x+1=9$, then $2x=8$, so $x=4$.\n\n**The Full Solution:**\nStep 1: Subtract $2x$ from both sides to collect the variable on the left: $2x+1=9$.\nStep 2: Subtract $1$ from both sides: $2x=8$.\nStep 3: Divide by $2$: $x=4$.\nCheck: $4(4)+1=17$ and $2(4)+9=17$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): mishandles the coefficients, dividing a wrong constant by $2$.\n* Choice C ($5$): adds $1+9=10$ and divides by $2$ instead of subtracting $1$ from $9$.\n* Choice D ($\\frac{5}{3}$): combines like terms incorrectly into $6x=10$.\n\n**Test Day Takeaway:** With variables on both sides, subtract the smaller $x$-coefficient first. That keeps the leading coefficient positive and the arithmetic clean.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-398', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $6 - 2x = 3x + 21$?',
    choices: [{ id: 'A', text: '$-3$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$-5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Add $2x$ to clear the negative $x$-term: $6=5x+21$. Subtract $21$: $-15=5x$, so $x=-3$.\n\n**The Full Solution:**\nStep 1: Add $2x$ to both sides: $6=5x+21$.\nStep 2: Subtract $21$ from both sides: $-15=5x$.\nStep 3: Divide by $5$: $x=-3$.\nCheck: $6-2(-3)=12$ and $3(-3)+21=12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): drops the negative sign in the final division.\n* Choice C ($5$): reverses the subtraction and mishandles the sign.\n* Choice D ($-5$): divides $-15$ by $3$ instead of by $5$.\n\n**Test Day Takeaway:** Move the negative $x$-term to the other side by adding it. A positive $x$-coefficient cuts down sign errors.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-equation-with-variables-on-both-sides', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-399', domain: 'algebra', skills: ['distributive-property'], difficulty: 'easy', type: 'multiple-choice',
    question: 'For all $x$, $(x + 3)(x + 5) = x^2 + ax + 15$. What is the value of $a$?',
    choices: [{ id: 'A', text: '$8$' }, { id: 'B', text: '$15$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** The middle coefficient of $(x+p)(x+q)$ is the sum $p+q$, so $a=3+5=8$.\n\n**The Full Solution:**\nStep 1: Expand: $(x+3)(x+5)=x^2+5x+3x+15=x^2+8x+15$.\nStep 2: Match to $x^2+ax+15$: the coefficient of $x$ gives $a=8$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($15$): reports the constant term $3\\cdot 5$ instead of the middle coefficient.\n* Choice C ($3$): reports just one factor constant.\n* Choice D ($5$): reports the other factor constant.\n\n**Test Day Takeaway:** For $(x+p)(x+q)=x^2+(p+q)x+pq$, the middle coefficient is the SUM of the constants and the last term is their PRODUCT.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'matching-coefficients', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-400', domain: 'algebra', skills: ['distributive-property'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For all $x$, $(x + a)(x + 4) = x^2 + 7x + b$. What is the value of $a + b$?',
    choices: [{ id: 'A', text: '$15$' }, { id: 'B', text: '$12$' }, { id: 'C', text: '$7$' }, { id: 'D', text: '$19$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Match the $x$-coefficient: $a+4=7$, so $a=3$. Then the constant is $b=4a=12$. So $a+b=15$.\n\n**The Full Solution:**\nStep 1: Expand: $(x+a)(x+4)=x^2+(a+4)x+4a$.\nStep 2: Match the middle coefficient: $a+4=7 \\Rightarrow a=3$.\nStep 3: Match the constant: $b=4a=4(3)=12$.\nStep 4: Add: $a+b=3+12=15$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): reports only $b$ and forgets to add $a$.\n* Choice C ($7$): returns the middle coefficient instead of $a+b$.\n* Choice D ($19$): finds $a=3$ and $b=12$ but adds in the stray middle coefficient.\n\n**Test Day Takeaway:** With two unknowns linking factored and expanded forms, match BOTH the $x$-coefficient and the constant term before answering what the question asks.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'matching-coefficients', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-401', domain: 'algebra', skills: ['distributive-property', 'combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $3(2x - 1) = 4x + 9$?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$4$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Distribute to $6x-3=4x+9$, subtract $4x$ to get $2x-3=9$, then $2x=12$, so $x=6$.\n\n**The Full Solution:**\nStep 1: Distribute the $3$: $6x-3=4x+9$.\nStep 2: Subtract $4x$ to collect variables: $2x-3=9$.\nStep 3: Add $3$: $2x=12$.\nStep 4: Divide by $2$: $x=6$.\nCheck: $3(2\\cdot 6-1)=3\\cdot 11=33$ and $4(6)+9=33$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): skips the distribution and treats the left side as $2x-1$.\n* Choice C ($5$): loses the $-3$ when moving constants across.\n* Choice D ($4$): mis-combines to $2x=8$ instead of $2x=12$.\n\n**Test Day Takeaway:** Distribute FIRST when an equation has parentheses, then gather variables on one side and constants on the other.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'multi-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-402', domain: 'algebra', skills: ['distributive-property', 'combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $\\dfrac{x + 6}{2} = x - 1$?',
    choices: [{ id: 'A', text: '$8$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$2$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Multiply both sides by $2$: $x+6=2x-2$. Subtract $x$: $6=x-2$, so $x=8$.\n\n**The Full Solution:**\nStep 1: Clear the fraction by multiplying both sides by $2$: $x+6=2(x-1)=2x-2$.\nStep 2: Subtract $x$ from both sides: $6=x-2$.\nStep 3: Add $2$: $x=8$.\nCheck: $\\frac{8+6}{2}=7$ and $8-1=7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): multiplies only the right side by $2$, leaving $x+6=2x-1$.\n* Choice C ($5$): forgets to distribute the $2$ across the $-1$.\n* Choice D ($2$): reverses the direction of the subtraction in Step 2.\n\n**Test Day Takeaway:** Clear fractions first by multiplying BOTH sides by the denominator, then distribute. Multiplying only one side is the classic fraction-equation trap.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'multi-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-403', domain: 'algebra', skills: ['perpendicular-negative-reciprocal'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the slope of a line perpendicular to $y = -\\dfrac{1}{3}x + 5$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$-3$' }, { id: 'C', text: '$\\dfrac{1}{3}$' }, { id: 'D', text: '$-\\dfrac{1}{3}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** The perpendicular slope is the negative reciprocal of $-\\frac{1}{3}$: flip to $-3$, negate to $3$.\n\n**The Full Solution:**\nStep 1: The given line has slope $-\\frac{1}{3}$.\nStep 2: A perpendicular line has the negative reciprocal slope. The reciprocal of $-\\frac{1}{3}$ is $-3$; negating gives $3$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-3$): takes the reciprocal but forgets to negate.\n* Choice C ($\\frac{1}{3}$): negates but forgets to take the reciprocal.\n* Choice D ($-\\frac{1}{3}$): returns the original slope — that line is parallel, not perpendicular.\n\n**Test Day Takeaway:** Perpendicular slopes are negative reciprocals: FLIP and NEGATE. Flipping a negative fraction makes it positive.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'perpendicular-slope', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-404', domain: 'algebra', skills: ['perpendicular-negative-reciprocal'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Line $\\ell$ is perpendicular to the line whose equation is $2x + 5y = 10$. What is the slope of line $\\ell$?',
    choices: [{ id: 'A', text: '$\\dfrac{5}{2}$' }, { id: 'B', text: '$-\\dfrac{2}{5}$' }, { id: 'C', text: '$-\\dfrac{5}{2}$' }, { id: 'D', text: '$\\dfrac{2}{5}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** In standard form $Ax+By=C$, the slope is $-\\frac{A}{B}=-\\frac{2}{5}$. Flip and negate for the perpendicular slope: $\\frac{5}{2}$.\n\n**The Full Solution:**\nStep 1: Rewrite $2x+5y=10$ as $5y=-2x+10$, so $y=-\\frac{2}{5}x+2$. The slope is $-\\frac{2}{5}$.\nStep 2: The perpendicular slope is the negative reciprocal. The reciprocal of $-\\frac{2}{5}$ is $-\\frac{5}{2}$; negating gives $\\frac{5}{2}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{2}{5}$): returns the original slope — that describes a parallel line.\n* Choice C ($-\\frac{5}{2}$): flips the fraction but forgets to negate.\n* Choice D ($\\frac{2}{5}$): negates but forgets to flip.\n\n**Test Day Takeaway:** From standard form $Ax+By=C$, the slope is $-\\frac{A}{B}$. The negative reciprocal then means FLIP and NEGATE.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'perpendicular-slope', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-405', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'easy', type: 'multiple-choice',
    question: 'In the equation $y = \\dfrac{1}{2}x - 7$, what is the $y$-intercept of the line?',
    choices: [{ id: 'A', text: '$-7$' }, { id: 'B', text: '$7$' }, { id: 'C', text: '$\\dfrac{1}{2}$' }, { id: 'D', text: '$14$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~3s):** In $y=mx+b$, the $y$-intercept is $b$. Here $b=-7$.\n\n**The Full Solution:**\nStep 1: The equation $y=\\frac{1}{2}x-7$ is already in slope-intercept form $y=mx+b$.\nStep 2: The constant term is the $y$-intercept: $b=-7$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($7$): drops the negative sign.\n* Choice C ($\\frac{1}{2}$): reports the slope instead of the intercept.\n* Choice D ($14$): doubles the intercept.\n\n**Test Day Takeaway:** In $y=mx+b$, $m$ (the coefficient of $x$) is the slope and $b$ (the constant) is the $y$-intercept. Read it with its sign.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reading-slope-intercept-form', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-406', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the slope of the line whose equation is $y = 3 - 4x$?',
    choices: [{ id: 'A', text: '$-4$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$-3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Reorder to $y=mx+b$: $y=-4x+3$. The slope is the coefficient of $x$, so $-4$.\n\n**The Full Solution:**\nStep 1: Rewrite $y=3-4x$ as $y=-4x+3$.\nStep 2: The coefficient of $x$ is the slope: $m=-4$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): drops the negative sign on $-4x$.\n* Choice C ($3$): reports the $y$-intercept, the first number shown, instead of the slope.\n* Choice D ($-3$): negates the intercept by mistake.\n\n**Test Day Takeaway:** Even when an equation is written constant-first as $y=b+mx$, the coefficient of $x$ is still the slope. Mentally reorder to $y=mx+b$ before reading.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'reading-slope-intercept-form', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // === TIER 1 BANK GROWTH (2026-05-21): algebra patterns @ 4 items → @ 10 items ===

  // --- absolute-value-equation (4 → 10) ---
  { id: 'bank-alg-407', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the solution set of $|x| = 8$?',
    choices: [{ id: 'A', text: '$\\{8\\}$' }, { id: 'B', text: '$\\{-8\\}$' }, { id: 'C', text: '$\\{-8, 8\\}$' }, { id: 'D', text: '$\\{0, 8\\}$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** $|x|=8$ means the distance from $0$ is $8$, so $x=8$ or $x=-8$: the set $\\{-8,8\\}$.\n\n**The Full Solution:**\nStep 1: Absolute value measures distance from zero, so $|x|=8$ splits into $x=8$ and $x=-8$.\nStep 2: Both values satisfy the equation, giving the solution set $\\{-8,8\\}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\{8\\}$): keeps only the positive root.\n* Choice B ($\\{-8\\}$): keeps only the negative root.\n* Choice D ($\\{0,8\\}$): treats $0$ as a boundary value, which it is not.\n\n**Test Day Takeaway:** $|x|=c$ with $c>0$ always has TWO solutions: $\\pm c$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'absolute-value-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-408', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the smallest solution of $|x - 4| = 11$?',
    choices: [{ id: 'A', text: '$-7$' }, { id: 'B', text: '$-15$' }, { id: 'C', text: '$15$' }, { id: 'D', text: '$7$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Split $x-4=\\pm 11$. That gives $x=15$ or $x=-7$; the smallest is $-7$.\n\n**The Full Solution:**\nStep 1: $|x-4|=11$ splits into $x-4=11$ and $x-4=-11$.\nStep 2: Solve each: $x=15$ and $x=-7$.\nStep 3: The question asks for the smallest, which is $-7$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-15$): mishandles the constant instead of solving $x-4=-11$.\n* Choice C ($15$): picks the largest solution rather than the smallest.\n* Choice D ($7$): solves $x+4=11$ by flipping the sign of the constant.\n\n**Test Day Takeaway:** $|\\text{expression}|=c$ splits into two equations. Solve both, then pick the one the question asks for.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'absolute-value-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-409', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the sum of the solutions of $|2x - 6| = 10$?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$0$' }, { id: 'C', text: '$10$' }, { id: 'D', text: '$8$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** An absolute value equal to $10$ splits into two cases: $2x - 6 = 10$ or $2x - 6 = -10$. These give $x = 8$ and $x = -2$, so the sum is $8 + (-2) = 6$.\n\n**The Full Solution:**\nStep 1: $|2x - 6| = 10$ means $2x - 6 = 10$ or $2x - 6 = -10$.\nStep 2: From the first branch, $2x = 16 \\Rightarrow x = 8$.\nStep 3: From the second branch, $2x = -4 \\Rightarrow x = -2$.\nStep 4: Add the solutions: $8 + (-2) = 6$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($0$): assumes the two solutions are symmetric about $0$ — true only when the inside is just $|x|$, here the $-6$ shifts the center.\n* Choice C ($10$): just echoes the constant on the right side.\n* Choice D ($8$): stops at the positive-branch solution and forgets to add the negative one.\n\n**Test Day Takeaway:** Solutions of $|ax + b| = c$ are not symmetric about zero unless $b = 0$. Solve both branches, then combine.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'absolute-value-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-410', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'How many real solutions does the equation $|x + 7| = 0$ have?',
    choices: [{ id: 'A', text: 'Exactly one' }, { id: 'B', text: 'Exactly two' }, { id: 'C', text: 'Zero' }, { id: 'D', text: 'Infinitely many' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** An absolute value equals $0$ only when the inside is exactly $0$. So $x + 7 = 0 \\Rightarrow x = -7$ — exactly one solution.\n\n**The Full Solution:**\nStep 1: $|x + 7| = 0$ forces $x + 7 = 0$ (there is no second case; both branches collapse to the same equation).\nStep 2: $x = -7$ is the only value that works.\n\n**Why the wrong answers are tempting:**\n* Choice B (Exactly two): assumes every absolute-value equation has two solutions — true for $|expr| = c$ with $c > 0$, but not when $c = 0$.\n* Choice C (Zero): confuses $|x + 7| = 0$ with $|x + 7| = $ a negative number, which truly has no solution.\n* Choice D (Infinitely many): treats it like an identity, which it is not.\n\n**Test Day Takeaway:** $|expr| = 0$ has exactly one solution; $|expr| = $ negative has zero; $|expr| = $ positive has two.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'absolute-value-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-411', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $|3x + 1| = 14$, what is the value of $|3x + 1| - 9$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$23$' }, { id: 'C', text: '$-5$' }, { id: 'D', text: '$14$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** You already know $|3x + 1| = 14$, so substitute it straight in: $|3x + 1| - 9 = 14 - 9 = 5$.\n\n**The Full Solution:**\nStep 1: The question hands you the value of the whole absolute-value expression: $|3x + 1| = 14$.\nStep 2: Replace $|3x + 1|$ with $14$ in $|3x + 1| - 9$: that is $14 - 9 = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($23$): adds instead of subtracts, $14 + 9$.\n* Choice C ($-5$): reverses the order, computing $9 - 14$.\n* Choice D ($14$): reports the original expression without doing the $-9$.\n\n**Test Day Takeaway:** When a question gives you the value of an expression, substitute it directly — there is no need to solve for $x$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'absolute-value-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-412', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'hard', type: 'multiple-choice',
    question: 'For what value of $k$ does the equation $|x - 5| = k$ have exactly one real solution?',
    choices: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$1$' }, { id: 'D', text: 'No such value exists' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $|x - 5| = k$ has two solutions when $k > 0$, none when $k < 0$, and exactly one when $k = 0$ (then $x = 5$). So $k = 0$.\n\n**The Full Solution:**\nStep 1: An absolute value is never negative, so $k$ must be $\\ge 0$ for any solution to exist.\nStep 2: If $k > 0$, the two branches $x - 5 = k$ and $x - 5 = -k$ give two distinct answers.\nStep 3: If $k = 0$, both branches collapse to $x - 5 = 0$, giving the single solution $x = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): confuses the value that makes the inside zero ($x = 5$) with the value of $k$.\n* Choice C ($1$): any positive $k$ produces two solutions, not one.\n* Choice D (No such value exists): a value does exist — namely $k = 0$.\n\n**Test Day Takeaway:** An absolute-value equation has exactly one solution precisely when the right side equals $0$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'absolute-value-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- linear-system-by-substitution (4 → 10) ---
  { id: 'bank-alg-413', domain: 'algebra', skills: ['substitution-method'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The system of equations $y = 2x + 3$ and $y = 4x - 1$ has solution $(x, y)$. What is the value of $x$?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$1$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$-2$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Both equations equal $y$, so set the right sides equal: $2x + 3 = 4x - 1 \\Rightarrow 4 = 2x \\Rightarrow x = 2$.\n\n**The Full Solution:**\nStep 1: Since $y = 2x + 3$ and $y = 4x - 1$, the right sides are equal: $2x + 3 = 4x - 1$.\nStep 2: Subtract $2x$ from both sides: $3 = 2x - 1$.\nStep 3: Add $1$: $4 = 2x \\Rightarrow x = 2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($1$): mishandles the constant move, landing on $2x = 2$ instead of $2x = 4$.\n* Choice C ($3$): just copies the constant from the first equation.\n* Choice D ($-2$): sign error when moving the $2x$ term across.\n\n**Test Day Takeaway:** When both equations are solved for $y$, set the right sides equal and solve the single linear equation that results.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-system-by-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-414', domain: 'algebra', skills: ['substitution-method'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The system of equations $y = 5 - x$ and $y = 3x - 7$ has solution $(x, y)$. What is the value of $y$?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$-2$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Set the right sides equal: $5 - x = 3x - 7 \\Rightarrow 12 = 4x \\Rightarrow x = 3$. Then $y = 5 - 3 = 2$.\n\n**The Full Solution:**\nStep 1: Both equal $y$, so $5 - x = 3x - 7$.\nStep 2: Add $x$ to both sides and add $7$: $12 = 4x$.\nStep 3: $x = 3$. Substitute into the simpler equation: $y = 5 - 3 = 2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): reports $x$ instead of the requested $y$.\n* Choice C ($5$): copies the constant from the first equation.\n* Choice D ($-2$): sign error on the final substitution.\n\n**Test Day Takeaway:** Solve for $x$ first, then plug it into the simpler equation to get $y$ — and check which variable the question actually wants.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-system-by-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-415', domain: 'algebra', skills: ['substitution-method'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The system of equations $y = -2x + 9$ and $y = x - 3$ has solution $(x, y)$. What is the value of $x + y$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$6$' }, { id: 'D', text: '$1$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Set the right sides equal: $-2x + 9 = x - 3 \\Rightarrow 12 = 3x \\Rightarrow x = 4$. Then $y = 4 - 3 = 1$, so $x + y = 5$.\n\n**The Full Solution:**\nStep 1: Both equal $y$, so $-2x + 9 = x - 3$.\nStep 2: Add $2x$ and add $3$: $12 = 3x \\Rightarrow x = 4$.\nStep 3: Substitute: $y = 4 - 3 = 1$.\nStep 4: $x + y = 4 + 1 = 5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): reports just $x$.\n* Choice C ($6$): a substitution slip, treating $y$ as $x + 2$.\n* Choice D ($1$): reports just $y$.\n\n**Test Day Takeaway:** When the target is $x + y$ (or $x - y$), solve fully for both variables first, then compute the requested combination.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-system-by-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-416', domain: 'algebra', skills: ['substitution-method'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If the system of equations $y = 3x$ and $y = x + 8$ has solution $(x, y)$, what is the value of $xy$?',
    choices: [{ id: 'A', text: '$48$' }, { id: 'B', text: '$24$' }, { id: 'C', text: '$16$' }, { id: 'D', text: '$12$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Set the right sides equal: $3x = x + 8 \\Rightarrow 2x = 8 \\Rightarrow x = 4$. Then $y = 3(4) = 12$, so $xy = 48$.\n\n**The Full Solution:**\nStep 1: Both equal $y$, so $3x = x + 8$.\nStep 2: Subtract $x$: $2x = 8 \\Rightarrow x = 4$.\nStep 3: Substitute: $y = 3(4) = 12$.\nStep 4: $xy = 4 \\times 12 = 48$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($24$): uses a wrong $y$ value ($6$) and multiplies $4 \\times 6$.\n* Choice C ($16$): squares $x$ instead of computing $xy$.\n* Choice D ($12$): reports just $y$.\n\n**Test Day Takeaway:** Find $x$ and $y$ first, then read what the question wants. Combinations like $xy$, $\\frac{x}{y}$, or $y - x$ all require fully solving the system first.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-system-by-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-417', domain: 'algebra', skills: ['substitution-method'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The system of equations $y = \\dfrac{x + 5}{2}$ and $y = x - 1$ has solution $(x, y)$. What is the value of $x$?',
    choices: [{ id: 'A', text: '$7$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$\\dfrac{3}{2}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Set the right sides equal and clear the fraction: $\\frac{x + 5}{2} = x - 1 \\Rightarrow x + 5 = 2x - 2 \\Rightarrow x = 7$.\n\n**The Full Solution:**\nStep 1: Both equal $y$, so $\\frac{x + 5}{2} = x - 1$.\nStep 2: Multiply every term on both sides by $2$: $x + 5 = 2(x - 1) = 2x - 2$.\nStep 3: Subtract $x$ and add $2$: $7 = x$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): fails to multiply the right side by $2$, distorting the equation.\n* Choice C ($5$): copies the constant in the left-hand numerator.\n* Choice D ($\\frac{3}{2}$): misapplies the fraction clearance.\n\n**Test Day Takeaway:** Clear a fraction first by multiplying both sides by the denominator — and multiply every term on the other side, not just one.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-system-by-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-418', domain: 'algebra', skills: ['substitution-method'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A line passes through the points $(1, 3)$ and $(4, 9)$. At what point does this line intersect the line $y = -x + 10$?',
    choices: [{ id: 'A', text: '$(3, 7)$' }, { id: 'B', text: '$(2, 8)$' }, { id: 'C', text: '$(4, 6)$' }, { id: 'D', text: '$(5, 5)$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The first line has slope $\\frac{9 - 3}{4 - 1} = 2$, so $y = 2x + 1$. Set equal to the second line: $2x + 1 = -x + 10 \\Rightarrow 3x = 9 \\Rightarrow x = 3$, $y = 7$. Intersection $(3, 7)$.\n\n```seva-figure\n{\"type\":\"linearGraph\",\"params\":{\"slope\":2,\"yIntercept\":1,\"xRange\":[-1,7],\"yRange\":[0,12],\"gridInterval\":1,\"xTickInterval\":2,\"yTickInterval\":2,\"highlightPoints\":[[1,3],[4,9]]},\"caption\":\"Through $(1, 3)$ and $(4, 9)$ — rise 6 over run 3.\"}\n```\n\n**The Full Solution:**\nStep 1: Slope through $(1, 3)$ and $(4, 9)$ is $\\frac{9 - 3}{4 - 1} = \\frac{6}{3} = 2$.\nStep 2: Point-slope from $(1, 3)$: $y - 3 = 2(x - 1) \\Rightarrow y = 2x + 1$.\nStep 3: Set the two lines equal: $2x + 1 = -x + 10 \\Rightarrow 3x = 9 \\Rightarrow x = 3$.\nStep 4: $y = 2(3) + 1 = 7$. The intersection is $(3, 7)$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($(2, 8)$): satisfies the second line but not the first, so it is not the intersection.\n* Choice C ($(4, 6)$): mistakes a given point of the first line for the intersection.\n* Choice D ($(5, 5)$): mis-solves the resulting system.\n\n**Test Day Takeaway:** For an intersection, first write both lines explicitly (build the first from its two points), then solve by substitution.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'linear-system-by-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- no-solution-condition (4 → 10) ---
  { id: 'bank-alg-419', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The system of equations $y = 3x + 5$ and $y = (k - 2)x + 1$ has no solution. What is the value of $k$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$-3$' }, { id: 'D', text: '$1$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** No solution means parallel lines: same slope, different intercepts. Match slopes: $k - 2 = 3 \\Rightarrow k = 5$. The intercepts $5 \\neq 1$ already differ.\n\n**The Full Solution:**\nStep 1: A linear system has no solution exactly when the lines are parallel — equal slopes but different $y$-intercepts.\nStep 2: The first line has slope $3$, so set $k - 2 = 3 \\Rightarrow k = 5$.\nStep 3: Check intercepts: $5 \\neq 1$, so the lines are genuinely parallel, not identical. No solution confirmed.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): copies the slope value without solving $k - 2 = 3$ for $k$.\n* Choice C ($-3$): sign error solving $k - 2 = 3$.\n* Choice D ($1$): copies the intercept of the second line.\n\n**Test Day Takeaway:** Same slope with different intercepts gives no solution; same slope and same intercept gives infinitely many.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'no-solution-condition', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-420', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The system of equations $y = -2x + 7$ and $y = mx + 1$ has no solution. What is the value of $m$?',
    choices: [{ id: 'A', text: '$-2$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$7$' }, { id: 'D', text: '$\\dfrac{1}{2}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** No solution means parallel lines, so the slopes must match: $m = -2$.\n\n**The Full Solution:**\nStep 1: A system has no solution when the lines are parallel — equal slopes, different intercepts.\nStep 2: The first line has slope $-2$, so $m = -2$.\nStep 3: The intercepts $7 \\neq 1$ already differ, so the lines are parallel and never meet.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): drops the negative sign on the slope.\n* Choice C ($7$): copies the intercept of the first line.\n* Choice D ($\\frac{1}{2}$): gives the negative reciprocal, which is the perpendicular condition, not parallel.\n\n**Test Day Takeaway:** For no solution, slopes must match exactly — sign included — while intercepts differ.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'no-solution-condition', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-421', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The system of equations $5x + 2y = 10$ and $10x + ky = 3$ has no solution. What is the value of $k$?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$10$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** No solution means the second equation's left side is the same scalar multiple of the first, but the constant breaks the pattern. The $x$-coefficients give the scalar: $\\frac{10}{5}=2$, so $k=2\\cdot 2=4$.\n\n**The Full Solution:**\nStep 1: For $Ax+By=C$ pairs, no solution requires $\\frac{A_2}{A_1}=\\frac{B_2}{B_1}\\neq\\frac{C_2}{C_1}$.\nStep 2: From the $x$-coefficients, $\\frac{A_2}{A_1}=\\frac{10}{5}=2$.\nStep 3: Match the $y$-coefficients: $\\frac{k}{2}=2 \\Rightarrow k=4$.\nStep 4: Confirm the constants differ: $\\frac{3}{10}\\neq 2$, so the lines are parallel and never meet. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): the scalar ratio itself, not $k$.\n* Choice C ($5$): the $x$-coefficient of the first equation.\n* Choice D ($10$): the $x$-coefficient of the second equation.\n\n**Test Day Takeaway:** For two equations in standard form, no solution means $\\frac{A_2}{A_1}=\\frac{B_2}{B_1}\\neq\\frac{C_2}{C_1}$ — equal coefficient ratios, unequal constant ratio.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'no-solution-condition', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-422', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The system $y = \\dfrac{1}{3}x + 4$ and $y = (k + 1)x - 2$ has no solution. What is the value of $k$?',
    choices: [{ id: 'A', text: '$-\\dfrac{2}{3}$' }, { id: 'B', text: '$\\dfrac{1}{3}$' }, { id: 'C', text: '$\\dfrac{2}{3}$' }, { id: 'D', text: '$-3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Both equations are in slope-intercept form. No solution means equal slopes but different intercepts, so set the slopes equal: $k+1=\\frac{1}{3} \\Rightarrow k=-\\frac{2}{3}$.\n\n**The Full Solution:**\nStep 1: Two lines have no solution when they are parallel: same slope, different $y$-intercept.\nStep 2: Match slopes: $k+1=\\frac{1}{3}$.\nStep 3: Solve: $k=\\frac{1}{3}-1=-\\frac{2}{3}$.\nStep 4: Check the intercepts differ: $4\\neq -2$, so the lines are parallel and never intersect. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{1}{3}$): reports the slope itself, not $k$.\n* Choice C ($\\frac{2}{3}$): sign error solving $k=\\frac{1}{3}-1$.\n* Choice D ($-3$): the perpendicular (negative-reciprocal) slope, not the parallel condition.\n\n**Test Day Takeaway:** When both equations are $y=mx+b$, no solution means equal slopes — isolate the unknown from the slope-matching equation, don't stop at the slope value.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'no-solution-condition', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-423', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For what value of $c$ does the system of equations $4x + cy = 12$ and $8x + 6y = 5$ have no solution?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$6$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$12$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Take the $x$-coefficient ratio for the scalar: $\\frac{8}{4}=2$. The $y$-coefficients must match it: $\\frac{6}{c}=2 \\Rightarrow c=3$.\n\n**The Full Solution:**\nStep 1: No solution requires $\\frac{A_2}{A_1}=\\frac{B_2}{B_1}\\neq\\frac{C_2}{C_1}$.\nStep 2: The $x$-coefficients fix the scalar: $\\frac{8}{4}=2$.\nStep 3: Force the $y$-coefficients to match: $\\frac{6}{c}=2 \\Rightarrow c=3$.\nStep 4: Confirm the constants break the pattern: $\\frac{5}{12}\\neq 2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): copies the $y$-coefficient of the second equation.\n* Choice C ($2$): copies the scalar ratio itself.\n* Choice D ($12$): copies the constant from the first equation.\n\n**Test Day Takeaway:** Get the scalar from the $x$-coefficient ratio, then make the $y$-coefficient ratio equal it. Solve for the unknown coefficient using that scalar.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'no-solution-condition', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-424', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A system of two linear equations has no solution. The first equation is $3x - 5y = 12$. Which of the following could be the second equation?',
    choices: [{ id: 'A', text: '$6x - 10y = 23$' }, { id: 'B', text: '$6x - 10y = 24$' }, { id: 'C', text: '$3x - 5y = 12$' }, { id: 'D', text: '$6x + 10y = 23$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** No solution means the left side is a clean scalar multiple of $3x-5y$ but the right side does NOT scale the same way. Choice A's left side is $2\\times$ the first ($6x-10y$), yet its constant is $23$, not $2\\cdot 12=24$ — parallel lines, no solution.\n\n**The Full Solution:**\nStep 1: Doubling $3x-5y=12$ gives $6x-10y=24$, which would be the same line.\nStep 2: For no solution, keep the same left side but change the constant: $6x-10y=23$ matches Choice A.\nStep 3: Equal slopes, unequal intercepts means the lines never meet. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($6x-10y=24$): both sides scale by $2$ — same line, infinitely many solutions.\n* Choice C ($3x-5y=12$): identical to the first equation — infinitely many solutions.\n* Choice D ($6x+10y=23$): the $+10y$ flips the slope, giving a different line with one unique solution.\n\n**Test Day Takeaway:** Scale the left side by some factor. If the right side does not scale by that same factor, the system has no solution.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'no-solution-condition', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- one-step-linear-equation (4 → 10) ---
  { id: 'bank-alg-425', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $x + 13 = 5$?',
    choices: [{ id: 'A', text: '$-8$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$18$' }, { id: 'D', text: '$-18$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~3s):** Subtract $13$ from both sides: $x=5-13=-8$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): drops the negative sign.\n* Choice C ($18$): adds $13$ instead of subtracting.\n* Choice D ($-18$): adds with the wrong sign.\n\n**Test Day Takeaway:** Move a constant to the other side with the inverse operation — $+13$ becomes $-13$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-426', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $\\dfrac{x}{4} = 9$?',
    choices: [{ id: 'A', text: '$36$' }, { id: 'B', text: '$\\dfrac{9}{4}$' }, { id: 'C', text: '$2.25$' }, { id: 'D', text: '$13$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~3s):** Multiply both sides by $4$: $x=4\\cdot 9=36$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{9}{4}$): divides $9$ by $4$ instead of multiplying.\n* Choice C ($2.25$): the same wrong value as B in decimal form.\n* Choice D ($13$): adds $4+9$.\n\n**Test Day Takeaway:** $\\frac{x}{a}=b$ means $x=ab$ — multiply both sides by the denominator.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-427', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $-7x = 42$?',
    choices: [{ id: 'A', text: '$-6$' }, { id: 'B', text: '$6$' }, { id: 'C', text: '$-49$' }, { id: 'D', text: '$49$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~3s):** Divide both sides by $-7$: $x=\\frac{42}{-7}=-6$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): drops the negative sign.\n* Choice C ($-49$): subtracts instead of dividing.\n* Choice D ($49$): subtracts and drops the sign.\n\n**Test Day Takeaway:** Dividing a positive by a negative gives a negative — track the sign all the way through.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-428', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $6 = x - 11$?',
    choices: [{ id: 'A', text: '$17$' }, { id: 'B', text: '$-5$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$-17$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~3s):** Add $11$ to both sides: $x=6+11=17$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-5$): subtracts $11$ (wrong direction).\n* Choice C ($5$): the same wrong value as B without the sign.\n* Choice D ($-17$): wrong direction and wrong sign.\n\n**Test Day Takeaway:** It doesn't matter which side $x$ sits on — apply the inverse operation to isolate it.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-429', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $8x = -56$?',
    choices: [{ id: 'A', text: '$-7$' }, { id: 'B', text: '$7$' }, { id: 'C', text: '$-48$' }, { id: 'D', text: '$48$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~3s):** Divide both sides by $8$: $x=\\frac{-56}{8}=-7$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($7$): drops the negative sign.\n* Choice C ($-48$): subtracts $8$ instead of dividing.\n* Choice D ($48$): subtracts and drops the sign.\n\n**Test Day Takeaway:** $ax=b$ gives $x=\\frac{b}{a}$ — the sign of $b$ carries straight through.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-430', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $2.5x = 10$?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$2.5$' }, { id: 'C', text: '$7.5$' }, { id: 'D', text: '$25$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Divide both sides by the coefficient: $x=\\frac{10}{2.5}=4$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2.5$): copies the coefficient.\n* Choice C ($7.5$): subtracts $2.5$ from $10$.\n* Choice D ($25$): multiplies $2.5\\cdot 10$ instead of dividing.\n\n**Test Day Takeaway:** A decimal coefficient doesn't change the move — divide both sides by it.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'one-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- parallel-line-through-a-point (4 → 10) ---
  { id: 'bank-alg-431', domain: 'algebra', skills: ['writing-parallel-equation'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which equation represents the line that passes through the point $(1, 4)$ and is parallel to the line $y = 2x + 5$?',
    choices: [{ id: 'A', text: '$y = 2x + 2$' }, { id: 'B', text: '$y = 2x + 5$' }, { id: 'C', text: '$y = -\\dfrac{1}{2}x + 4$' }, { id: 'D', text: '$y = 2x + 4$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Parallel Line through a Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Parallel lines share the slope $2$. Plug the point into $y=2x+b$: $4=2(1)+b \\Rightarrow b=2$, giving $y=2x+2$.\n\n**The Full Solution:**\nStep 1: Parallel means same slope, so $m=2$.\nStep 2: Use the point $(1,4)$ in $y=2x+b$: $4=2(1)+b$.\nStep 3: Solve: $b=2$, so the line is $y=2x+2$ (Choice A).\n\n**Why the wrong answers are tempting:**\n* Choice B ($y=2x+5$): the original line, which doesn't pass through $(1,4)$.\n* Choice C ($y=-\\frac{1}{2}x+4$): uses the perpendicular slope.\n* Choice D ($y=2x+4$): sets the intercept to the point's $y$-value instead of solving for $b$.\n\n**Test Day Takeaway:** Parallel = same slope. Carry the slope over, then plug the point into $y=mx+b$ to solve for $b$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-line-through-a-point', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-432', domain: 'algebra', skills: ['writing-parallel-equation'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which equation represents the line that passes through the point $(0, -7)$ and is parallel to the line $y = -3x + 1$?',
    choices: [{ id: 'A', text: '$y = -3x - 7$' }, { id: 'B', text: '$y = -3x + 7$' }, { id: 'C', text: '$y = 3x - 7$' }, { id: 'D', text: '$y = \\dfrac{1}{3}x - 7$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Parallel Line through a Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Parallel keeps the slope $-3$. The point $(0,-7)$ sits on the $y$-axis, so the intercept is $b=-7$ directly: $y=-3x-7$.\n\n**The Full Solution:**\nStep 1: Parallel lines share the slope, so $m=-3$.\nStep 2: A point with $x=0$ is the $y$-intercept itself, so $b=-7$.\nStep 3: The line is $y=-3x-7$ (Choice A).\n\n**Why the wrong answers are tempting:**\n* Choice B ($y=-3x+7$): drops the negative sign on $b$.\n* Choice C ($y=3x-7$): drops the negative sign on the slope.\n* Choice D ($y=\\frac{1}{3}x-7$): uses the perpendicular slope.\n\n**Test Day Takeaway:** When the given point has $x=0$, its $y$-coordinate IS the intercept — no algebra needed.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-line-through-a-point', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-433', domain: 'algebra', skills: ['writing-parallel-equation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which equation represents the line that passes through the point $(6, 0)$ and is parallel to the line $y = \\dfrac{1}{2}x - 4$?',
    choices: [{ id: 'A', text: '$y = \\dfrac{1}{2}x - 3$' }, { id: 'B', text: '$y = \\dfrac{1}{2}x - 4$' }, { id: 'C', text: '$y = -2x + 12$' }, { id: 'D', text: '$y = \\dfrac{1}{2}x + 3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Parallel Line through a Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Parallel lines share the slope $\\frac{1}{2}$. Plug in $(6, 0)$: $0 = \\frac{1}{2}(6) + b \\Rightarrow 0 = 3 + b \\Rightarrow b = -3$. So $y = \\frac{1}{2}x - 3$.\n\n**The Full Solution:**\nStep 1: A parallel line copies the slope, so $m = \\frac{1}{2}$.\nStep 2: Substitute the point $(6, 0)$ into $y = \\frac{1}{2}x + b$: $0 = \\frac{1}{2}(6) + b = 3 + b$.\nStep 3: Solve for the intercept: $b = -3$. The equation is $y = \\frac{1}{2}x - 3$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = \\frac{1}{2}x - 4$): just copies the given line — but that line passes through $(0, -4)$, not $(6, 0)$.\n* Choice C ($y = -2x + 12$): uses the perpendicular slope $-2$ instead of the parallel slope.\n* Choice D ($y = \\frac{1}{2}x + 3$): correct slope but a sign error left $b = +3$ instead of $-3$.\n\n**Test Day Takeaway:** Parallel means equal slope. Lock the slope, then let the given point pin down the intercept.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-line-through-a-point', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-434', domain: 'algebra', skills: ['writing-parallel-equation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A line passes through the point $(3, -1)$ and is parallel to the line $2x + y = 8$. What is the $y$-intercept of this line?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$-7$' }, { id: 'C', text: '$8$' }, { id: 'D', text: '$-1$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Parallel Line through a Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Rewrite $2x + y = 8$ as $y = -2x + 8$, so the slope is $-2$. Plug in $(3, -1)$: $-1 = -2(3) + b = -6 + b \\Rightarrow b = 5$.\n\n**The Full Solution:**\nStep 1: Convert to slope-intercept form: $2x + y = 8 \\Rightarrow y = -2x + 8$. The slope is $-2$.\nStep 2: A parallel line has the same slope, so use $y = -2x + b$ with the point $(3, -1)$: $-1 = -2(3) + b = -6 + b$.\nStep 3: Solve: $b = -1 + 6 = 5$. The $y$-intercept is $5$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-7$): drops the negative sign on the slope, computing $-1 = 6 + b \\Rightarrow b = -7$.\n* Choice C ($8$): copies the intercept of the given line $y = -2x + 8$.\n* Choice D ($-1$): copies the $y$-coordinate of the given point instead of solving.\n\n**Test Day Takeaway:** Convert $Ax + By = C$ to $y = mx + b$ before reading the slope — the slope is never the bare coefficient in standard form.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-line-through-a-point', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-435', domain: 'algebra', skills: ['writing-parallel-equation'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Line $\\ell$ passes through $(4, 7)$ and is parallel to the line $y = -x + 11$. What is the value of $y$ on line $\\ell$ when $x = 10$?',
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$11$' }, { id: 'C', text: '$-3$' }, { id: 'D', text: '$17$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Parallel Line through a Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Slope $-1$ through $(4, 7)$: $7 = -4 + b \\Rightarrow b = 11$, so $\\ell$ is $y = -x + 11$. At $x = 10$: $y = -10 + 11 = 1$.\n\n**The Full Solution:**\nStep 1: Parallel to $y = -x + 11$ means $\\ell$ has slope $-1$.\nStep 2: Use $(4, 7)$ to find the intercept: $7 = -(4) + b \\Rightarrow b = 11$. So $\\ell$: $y = -x + 11$.\nStep 3: Evaluate at $x = 10$: $y = -(10) + 11 = 1$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($11$): returns the $y$-intercept (the value at $x = 0$), not at $x = 10$.\n* Choice C ($-3$): drops the constant, computing $y = -(10) + 7 = -3$ from the point instead of the line.\n* Choice D ($17$): drops the negative slope, computing $y = 10 + 7 = 17$.\n\n**Test Day Takeaway:** Build the full equation first, then substitute the requested $x$ — don't shortcut straight from the given point.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-line-through-a-point', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-436', domain: 'algebra', skills: ['writing-parallel-equation'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A line is parallel to $y = 3x + k$ for some constant $k$. The line passes through the points $(2, 5)$ and $(h, 11)$. What is the value of $h$?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$6$' }, { id: 'C', text: '$8$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Parallel Line through a Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Parallel to $y = 3x + k$ forces slope $3$. Set the slope between the two points equal to $3$: $\\frac{11 - 5}{h - 2} = 3 \\Rightarrow \\frac{6}{h - 2} = 3 \\Rightarrow h - 2 = 2 \\Rightarrow h = 4$.\n\n**The Full Solution:**\nStep 1: A parallel line has slope $3$.\nStep 2: The slope through $(2, 5)$ and $(h, 11)$ is $\\frac{11 - 5}{h - 2} = \\frac{6}{h - 2}$.\nStep 3: Set it equal to $3$: $\\frac{6}{h - 2} = 3 \\Rightarrow 6 = 3(h - 2) \\Rightarrow h - 2 = 2 \\Rightarrow h = 4$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): returns the rise $11 - 5 = 6$ without dividing by the slope.\n* Choice C ($8$): adds the run to the wrong point or doubles, treating $h - 2 = 6$.\n* Choice D ($3$): copies the slope itself as the answer.\n\n**Test Day Takeaway:** When \"parallel\" fixes the slope, the slope formula becomes one linear equation in the unknown — set it equal and solve.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-line-through-a-point', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- parallel-lines-no-solution (4 → 10) ---
  { id: 'bank-alg-437', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'easy', type: 'multiple-choice',
    question: 'How many solutions does the system of equations $y = 4x + 1$ and $y = 4x + 9$ have?',
    choices: [{ id: 'A', text: 'Zero' }, { id: 'B', text: 'Exactly one' }, { id: 'C', text: 'Exactly two' }, { id: 'D', text: 'Infinitely many' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Parallel Lines No Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Both lines have slope $4$ but different intercepts ($1$ vs $9$), so they are parallel and never meet — zero solutions.\n\n**The Full Solution:**\nStep 1: Both equations are in $y = mx + b$ form with slope $4$.\nStep 2: The intercepts differ: $1 \\neq 9$.\nStep 3: Same slope, different intercept means the lines are parallel and distinct, so they never intersect. Zero solutions, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B (Exactly one): the default guess; only happens when the slopes differ.\n* Choice C (Exactly two): two lines can never cross twice — only curves do.\n* Choice D (Infinitely many): would require the equations to be identical, but the intercepts differ.\n\n**Test Day Takeaway:** In $y = mx + b$ form, same $m$ plus different $b$ equals parallel equals zero solutions.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-lines-no-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-438', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'easy', type: 'multiple-choice',
    question: 'In the $xy$-plane, two distinct parallel lines pass through $(0, 3)$ and $(0, 8)$, respectively. At how many points do these lines intersect?',
    choices: [{ id: 'A', text: 'Zero' }, { id: 'B', text: 'One' }, { id: 'C', text: 'Two' }, { id: 'D', text: 'Infinitely many' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Parallel Lines No Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~3s):** Two parallel, distinct lines never meet — zero intersection points.\n\n**The Full Solution:**\nStep 1: The lines are stated to be parallel, so they have equal slopes.\nStep 2: They pass through different points, $(0, 3)$ and $(0, 8)$, so they are distinct.\nStep 3: Parallel and distinct lines never cross, so they intersect at zero points, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B (One): only a non-parallel pair intersects exactly once.\n* Choice C (Two): straight lines never meet at two points.\n* Choice D (Infinitely many): that needs the same line, but these are distinct.\n\n**Test Day Takeaway:** \"Parallel and distinct\" is just the geometry word for \"no solution.\"",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-lines-no-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-439', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'medium', type: 'multiple-choice',
    question: 'How many solutions does the system of equations $2x - 3y = 12$ and $4x - 6y = 8$ have?',
    choices: [{ id: 'A', text: 'Zero' }, { id: 'B', text: 'One' }, { id: 'C', text: 'Two' }, { id: 'D', text: 'Infinitely many' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Parallel Lines No Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Compare ratios: $\\frac{4}{2} = 2$ and $\\frac{-6}{-3} = 2$ match on the left, but $\\frac{8}{12} = \\frac{2}{3} \\neq 2$ on the right. Left scales, right does not, so the lines are parallel but distinct — zero solutions.\n\n**The Full Solution:**\nStep 1: The $x$- and $y$-coefficients of the second equation are $2 \\times$ those of the first: $4 = 2 \\cdot 2$ and $-6 = 2 \\cdot (-3)$.\nStep 2: For the same line, the constant must scale too: $2 \\cdot 12 = 24$, but the second equation has $8$.\nStep 3: Same slope, different constant means parallel and distinct, so zero solutions, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B (One): the default guess, skipping the ratio check.\n* Choice C (Two): linear systems never give exactly two solutions.\n* Choice D (Infinitely many): would require the right side to scale to $24$, not $8$.\n\n**Test Day Takeaway:** In standard form, when the coefficients scale equally but the constant does not, the lines are parallel — zero solutions.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-lines-no-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-440', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For which value of $m$ does the system $y = mx + 3$ and $y = mx - 2$ have NO solution?',
    choices: [{ id: 'A', text: 'Any value of $m$' }, { id: 'B', text: 'No value of $m$' }, { id: 'C', text: '$m = 0$ only' }, { id: 'D', text: '$m = -2$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Parallel Lines No Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Both lines have slope $m$ no matter what $m$ is, and the intercepts $3$ and $-2$ are always different. So they are always parallel and distinct — no solution for any value of $m$.\n\n**The Full Solution:**\nStep 1: The two equations share the same slope $m$ for every $m$.\nStep 2: The intercepts are fixed at $3$ and $-2$, which are never equal.\nStep 3: Equal slope and unequal intercept means the lines stay parallel and distinct for every $m$, so there is no solution for any value of $m$, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B (No value of $m$): reverses the logic — no $m$ produces a unique solution, but the question asks when there is no solution.\n* Choice C ($m = 0$ only): wrongly treats horizontal lines as a special case; the intercepts differ at every $m$.\n* Choice D ($m = -2$): copies the intercept $-2$ as if it were a slope value.\n\n**Test Day Takeaway:** When both lines use the same slope expression and have fixed, different intercepts, they are parallel regardless of the slope's value.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-lines-no-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-441', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'medium', type: 'multiple-choice',
    question: 'How many solutions does the system of equations $x + y = 4$ and $2x + 2y = 10$ have?',
    choices: [{ id: 'A', text: 'Zero' }, { id: 'B', text: 'One' }, { id: 'C', text: 'Two' }, { id: 'D', text: 'Infinitely many' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Parallel Lines No Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The second equation's left side is $2 \\times$ the first ($2x + 2y$ vs $x + y$), but the constant $10$ is not $2 \\cdot 4 = 8$. Left scales, right does not, so parallel and distinct — zero solutions.\n\n**The Full Solution:**\nStep 1: Multiply the first equation by $2$: $x + y = 4 \\Rightarrow 2x + 2y = 8$.\nStep 2: Compare to the second equation, $2x + 2y = 10$: identical left side, but $8 \\neq 10$.\nStep 3: The two demands $2x + 2y = 8$ and $2x + 2y = 10$ can't both hold, so the lines are parallel and never meet. Zero solutions, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B (One): skips the check on the constant after scaling.\n* Choice C (Two): linear pairs never have exactly two solutions.\n* Choice D (Infinitely many): would require the constant to scale to $8$, not $10$.\n\n**Test Day Takeaway:** Scale one equation to match the other's left side; if the constants then disagree, the lines are parallel with zero solutions.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-lines-no-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-442', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A system of two linear equations has no solution. Which of the following statements MUST be true about the lines defined by the equations?',
    choices: [{ id: 'A', text: 'They have the same slope but different $y$-intercepts.' }, { id: 'B', text: 'They have different slopes.' }, { id: 'C', text: 'They have the same slope and the same $y$-intercept.' }, { id: 'D', text: 'They are perpendicular.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Parallel Lines No Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** \"No solution\" means the lines never meet, and the only way two lines never meet is to be parallel — same slope, different $y$-intercept.\n\n**The Full Solution:**\nStep 1: A solution to the system is a point on both lines.\nStep 2: No solution means there is no shared point, so the lines never intersect.\nStep 3: Non-vertical lines never intersect only when they have the same slope but different intercepts. That is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B (different slopes): different slopes guarantee they cross once — exactly one solution.\n* Choice C (same slope and same intercept): that is the same line, giving infinitely many solutions.\n* Choice D (perpendicular): perpendicular lines still meet exactly once.\n\n**Test Day Takeaway:** Memorize the trichotomy — different slopes give one solution, same slope with different intercept gives none, same slope and same intercept gives infinitely many.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'parallel-lines-no-solution', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- same-line-infinitely-many-solutions (4 → 10) ---
  { id: 'bank-alg-443', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'easy', type: 'multiple-choice',
    question: 'How many solutions does the system of equations $y = 2x + 5$ and $2y = 4x + 10$ have?',
    choices: [{ id: 'A', text: 'Infinitely many' }, { id: 'B', text: 'Exactly one' }, { id: 'C', text: 'Zero' }, { id: 'D', text: 'Exactly two' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Same Line Infinitely Many Solutions**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Divide the second equation by $2$: $2y = 4x + 10 \\Rightarrow y = 2x + 5$, identical to the first. Same line means infinitely many solutions.\n\n**The Full Solution:**\nStep 1: Simplify $2y = 4x + 10$ by dividing every term by $2$: $y = 2x + 5$.\nStep 2: This matches the first equation exactly.\nStep 3: Two identical lines overlap completely, so every point on the line solves both equations — infinitely many solutions, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B (Exactly one): the default guess; only happens when slopes differ.\n* Choice C (Zero): that needs the same slope but different intercepts.\n* Choice D (Exactly two): linear systems never produce exactly two solutions.\n\n**Test Day Takeaway:** If one equation is a scalar multiple of the other on both sides, it's the same line and the system has infinitely many solutions.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'same-line-infinitely-many-solutions', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-444', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'easy', type: 'multiple-choice',
    question: 'How many solutions does the system of equations $3x - y = 6$ and $6x - 2y = 12$ have?',
    choices: [{ id: 'A', text: 'Infinitely many' }, { id: 'B', text: 'Exactly one' }, { id: 'C', text: 'Zero' }, { id: 'D', text: 'Exactly two' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Same Line Infinitely Many Solutions**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** The second equation is exactly $2 \\times$ the first: $2(3x - y) = 6x - 2y$ and $2(6) = 12$. Same line means infinitely many solutions.\n\n**The Full Solution:**\nStep 1: Multiply the first equation by $2$: $3x - y = 6 \\Rightarrow 6x - 2y = 12$.\nStep 2: This is identical to the second equation.\nStep 3: Identical lines share every point, so the system has infinitely many solutions, which is choice A.\n\n**Why the wrong answers are tempting:**\n* Choice B (Exactly one): assumes the lines cross at a single point.\n* Choice C (Zero): requires the same slope but a different constant after scaling.\n* Choice D (Exactly two): linear systems never have exactly two solutions.\n\n**Test Day Takeaway:** Check the scale factor on the left side first, then confirm the same factor works on the right; match on both and the lines are identical.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'same-line-infinitely-many-solutions', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-445', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'easy', type: 'multiple-choice',
    question: 'For what value of $c$ does the system of equations $y = 4x + c$ and $y = 4x + 9$ have infinitely many solutions?',
    choices: [{ id: 'A', text: '$9$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$0$' }, { id: 'D', text: 'Any value of $c$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Same Line Infinitely Many Solutions**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Both lines have slope $4$, so they coincide only when their intercepts match too: $c=9$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the two equations describe the same line.\nStep 2: Both are in slope-intercept form with slope $4$, so the slopes already agree.\nStep 3: The lines are identical only when the constants match: $c=9$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): copies the shared slope instead of the intercept.\n* Choice C ($0$): a default guess; $c=0$ gives a parallel line, no solution.\n* Choice D (Any value of $c$): any $c\\neq 9$ leaves the lines parallel and distinct, so they never meet.\n\n**Test Day Takeaway:** Two lines in $y=mx+b$ form coincide only when both $m$ and $b$ match. Same slope alone gives parallel lines.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'same-line-infinitely-many-solutions', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-446', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'medium', type: 'multiple-choice',
    question: 'For what value of $k$ does the system of equations $5x + 2y = 10$ and $kx + 4y = 20$ have infinitely many solutions?',
    choices: [{ id: 'A', text: '$10$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$4$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Same Line Infinitely Many Solutions**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The $y$-coefficients go from $2$ to $4$, a factor of $2$. The whole second equation must be $2\\times$ the first, so $k=2\\cdot 5=10$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means one equation is a constant multiple of the other.\nStep 2: Find the scalar from a matching pair: $\\frac{4}{2}=2$, and the constants check: $\\frac{20}{10}=2$. $\\checkmark$\nStep 3: Apply that scalar to the $x$-coefficient: $k=2\\cdot 5=10$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): copies the $x$-coefficient of the first equation, ignoring the scaling.\n* Choice C ($2$): reports the scale factor itself, not $k$.\n* Choice D ($4$): copies the $y$-coefficient of the second equation.\n\n**Test Day Takeaway:** For infinitely many solutions, every matching pair of coefficients and constants must share the same ratio.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'same-line-infinitely-many-solutions', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-447', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The system of equations $y = \\dfrac{a}{3}x + 5$ and $y = 2x + b$ has infinitely many solutions. What is the value of $a + b$?',
    choices: [{ id: 'A', text: '$11$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$13$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Same Line Infinitely Many Solutions**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Same line means matching slopes and intercepts: $\\frac{a}{3}=2\\Rightarrow a=6$ and $b=5$, so $a+b=11$.\n\n**The Full Solution:**\nStep 1: Both equations are in slope-intercept form, so set slopes equal: $\\frac{a}{3}=2$, giving $a=6$.\nStep 2: Set intercepts equal: $b=5$.\nStep 3: Add: $a+b=6+5=11$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): solves $\\frac{a}{3}=2$ wrong, treating $a=3$, then adds $3+5$.\n* Choice C ($5$): reports only $b$ and forgets $a$.\n* Choice D ($13$): pairs $b=5$ with an inflated $a=8$.\n\n**Test Day Takeaway:** Match slopes and intercepts separately, then combine. Solve $\\frac{a}{3}=2$ by multiplying both sides by $3$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'same-line-infinitely-many-solutions', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-448', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'hard', type: 'multiple-choice',
    question: 'Two linear equations have infinitely many common solutions. Which statement MUST be true?',
    choices: [{ id: 'A', text: 'Each equation can be obtained from the other by multiplying every term by the same nonzero constant.' }, { id: 'B', text: 'The lines have the same slope but different $y$-intercepts.' }, { id: 'C', text: 'The lines are perpendicular.' }, { id: 'D', text: 'The lines have different slopes and the same $y$-intercept.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Same Line Infinitely Many Solutions**\n\n**Choice A is correct.**\n\n**The Fast Way:** Infinitely many common solutions means both equations are the same line, so one is just every term of the other multiplied by the same nonzero constant.\n\n**The Full Solution:**\nStep 1: Two linear equations share infinitely many solutions only if their graphs are the identical line.\nStep 2: Identical lines have coefficients and constants in one common ratio, so each equation is a nonzero scalar multiple of the other.\n\n**Why the wrong answers are tempting:**\n* Choice B: same slope but different intercepts gives parallel lines, which share zero solutions.\n* Choice C: perpendicular lines cross once, so exactly one solution.\n* Choice D: different slopes always cross once, again one solution.\n\n**Test Day Takeaway:** Same line means every term scales by one nonzero constant, including the constant term, not just the slope.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'same-line-infinitely-many-solutions', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- slope-as-rate-of-change-in-context (4 → 10) ---
  { id: 'bank-alg-449', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A taxi service charges riders according to the equation $y = 0.40m + 2.50$, where $y$ is the total fare in dollars and $m$ is the number of miles traveled. Which of the following is the BEST interpretation of the number $0.40$ in this equation?',
    choices: [{ id: 'A', text: 'The taxi charges an additional $\\$0.40$ for each mile traveled.' }, { id: 'B', text: 'The initial fare is $\\$0.40$.' }, { id: 'C', text: 'The taxi charges $\\$0.40$ in total.' }, { id: 'D', text: 'Each mile costs $\\$2.50$.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice A is correct.**\n\n**The Fast Way:** In $y=0.40m+2.50$, the coefficient on $m$ is the rate: $\\$0.40$ added per mile.\n\n**The Full Solution:**\nStep 1: The equation is in slope-intercept form, so $0.40$ is the slope and $2.50$ is the starting fare.\nStep 2: The slope is the change in $y$ (dollars) per one unit of $m$ (mile), so each extra mile adds $\\$0.40$.\n\n**Why the wrong answers are tempting:**\n* Choice B: $\\$0.40$ as the initial fare confuses the slope with the $\\$2.50$ intercept.\n* Choice C: a total fare misreads a per-mile rate as a fixed amount.\n* Choice D: swaps the two numbers, calling $\\$2.50$ the per-mile cost.\n\n**Test Day Takeaway:** Slope in a real-world linear model is always \"amount of $y$ added per one unit of $x$.\" Read it with the units.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-as-rate-of-change-in-context', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-450', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'easy', type: 'multiple-choice',
    question: 'The height of a plant is modeled by the function $h(d) = 0.3d + 12$, where $h(d)$ is the plant\'s height in centimeters $d$ days after planting. Which of the following is the BEST interpretation of $0.3$ in this function?',
    choices: [{ id: 'A', text: 'The plant grows by $0.3$ centimeters each day.' }, { id: 'B', text: 'The plant is $0.3$ centimeters tall when planted.' }, { id: 'C', text: 'The plant reaches $0.3$ centimeters per minute.' }, { id: 'D', text: 'It takes $0.3$ days for the plant to grow $12$ centimeters.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice A is correct.**\n\n**The Fast Way:** In $h(d)=0.3d+12$, the coefficient $0.3$ is centimeters of growth per day.\n\n**The Full Solution:**\nStep 1: The slope $0.3$ multiplies $d$, the number of days, so its units are centimeters per day.\nStep 2: That means each additional day adds $0.3$ cm of height.\n\n**Why the wrong answers are tempting:**\n* Choice B: $0.3$ cm at planting confuses the slope with the $12$ cm intercept.\n* Choice C: \"per minute\" uses the wrong time unit; $d$ is in days.\n* Choice D: rearranges the numbers into a meaningless claim.\n\n**Test Day Takeaway:** The slope's units are [unit of $y$] per [unit of $x$]. Here that is centimeters per day.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-as-rate-of-change-in-context', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-451', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A car\'s velocity, in miles per hour, is modeled by $v(t) = -5t + 80$, where $t$ is the number of seconds after the brakes are applied. Which of the following is the BEST interpretation of the value $-5$ in this model?',
    choices: [{ id: 'A', text: 'The car\'s velocity decreases by $5$ miles per hour each second.' }, { id: 'B', text: 'The car decelerates by $5$ seconds.' }, { id: 'C', text: 'The car\'s velocity is $-5$ mph at $t = 0$.' }, { id: 'D', text: 'The car travels at $5$ mph in reverse.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice A is correct.**\n\n**The Fast Way:** In $v(t)=-5t+80$, the slope $-5$ has units of mph per second, and the negative sign means velocity drops $5$ mph each second.\n\n**The Full Solution:**\nStep 1: The coefficient on $t$ is the slope; $t$ is in seconds and $v$ is in mph, so the slope is in mph per second.\nStep 2: A slope of $-5$ means each second the velocity decreases by $5$ mph.\n\n**Why the wrong answers are tempting:**\n* Choice B: \"decelerates by $5$ seconds\" mixes up the units.\n* Choice C: a velocity of $-5$ mph at $t=0$ confuses the slope with the intercept (initial velocity is $80$ mph).\n* Choice D: reading the negative as reverse motion misinterprets the sign of a rate.\n\n**Test Day Takeaway:** A negative slope means the dependent quantity decreases by that amount per unit of the independent quantity.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-as-rate-of-change-in-context', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-452', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A printer\'s total monthly cost, in dollars, is given by $C(x) = 1.25x + 50$, where $x$ is the number of pages printed in a month. Which of the following is the BEST interpretation of $1.25$ in this expression?',
    choices: [{ id: 'A', text: 'The cost increases by $\\$1.25$ for each additional page printed.' }, { id: 'B', text: 'The fixed monthly cost is $\\$1.25$.' }, { id: 'C', text: 'The printer prints $1.25$ pages per dollar.' }, { id: 'D', text: 'It costs $\\$1.25$ to start printing each month.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice A is correct.**\n\n**The Fast Way:** In $C(x)=1.25x+50$, the slope $1.25$ is the cost added per page: $\\$1.25$ for each additional page.\n\n**The Full Solution:**\nStep 1: The coefficient on $x$ (pages) is the slope, so its units are dollars per page.\nStep 2: Each additional page raises the total cost by $\\$1.25$.\n\n**Why the wrong answers are tempting:**\n* Choice B: $\\$1.25$ as a fixed cost confuses the slope with the $\\$50$ intercept.\n* Choice C: \"$1.25$ pages per dollar\" inverts the rate.\n* Choice D: a setup cost misreads the per-page slope as a fixed charge.\n\n**Test Day Takeaway:** In a linear cost model, the slope is the marginal (per-unit) cost and the intercept is the fixed cost.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-as-rate-of-change-in-context', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-453', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'easy', type: 'multiple-choice',
    question: 'A phone plan\'s monthly cost, in dollars, is given by $C = 0.10m + 35$, where $m$ is the number of minutes of calls. Which of the following is the BEST interpretation of $0.10$ in this equation?',
    choices: [{ id: 'A', text: 'Each minute of calls costs $\\$0.10$.' }, { id: 'B', text: 'The base monthly fee is $\\$0.10$.' }, { id: 'C', text: 'The first $0.10$ minutes are free.' }, { id: 'D', text: 'The total monthly cost is $\\$0.10$.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice A is correct.**\n\n**The Fast Way:** In $C=0.10m+35$, the slope $0.10$ is the cost per minute: each minute costs $\\$0.10$.\n\n**The Full Solution:**\nStep 1: The coefficient on $m$ (minutes) is the slope, with units of dollars per minute.\nStep 2: So each minute of calls adds $\\$0.10$ to the bill.\n\n**Why the wrong answers are tempting:**\n* Choice B: $\\$0.10$ as a base fee confuses the slope with the $\\$35$ intercept.\n* Choice C: free minutes misreads the slope as a count.\n* Choice D: a $\\$0.10$ total misreads the per-minute rate as the whole cost.\n\n**Test Day Takeaway:** Slope is the per-unit rate (dollars per minute); the intercept is the fixed base fee.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-as-rate-of-change-in-context', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-454', domain: 'algebra', skills: ['slope-intercept-form'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A city\'s population, in thousands, is modeled by $P(t) = 240 + 18t$, where $t$ is the number of years since 2020. Which of the following is the BEST interpretation of $18$ in this model?',
    choices: [{ id: 'A', text: 'The population is predicted to grow by $18{,}000$ people each year.' }, { id: 'B', text: 'The population in 2020 was $18$ thousand.' }, { id: 'C', text: 'The population will reach $18{,}000$ by 2038.' }, { id: 'D', text: 'The growth rate is $18\\%$ per year.' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice A is correct.**\n\n**The Fast Way:** $P$ is in thousands, so the slope $18$ means $18$ thousand, i.e. $18{,}000$ more people per year.\n\n**The Full Solution:**\nStep 1: In $P(t)=240+18t$, the slope $18$ is the change in $P$ per year.\nStep 2: Because $P$ is measured in thousands, $18$ corresponds to $18{,}000$ people added each year.\n\n**Why the wrong answers are tempting:**\n* Choice B: $18$ thousand in 2020 confuses the slope with the intercept ($240$ thousand at $t=0$).\n* Choice C: invents a milestone year that the model never states.\n* Choice D: a percent growth rate would require an exponential model, not a linear one.\n\n**Test Day Takeaway:** When a quantity is given \"in thousands,\" convert the slope to raw units in your answer: $18$ thousand is $18{,}000$, not $18$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'slope-as-rate-of-change-in-context', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- slope-from-two-points (4 → 10) ---
  { id: 'bank-alg-455', domain: 'algebra', skills: ['slope-from-points'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the slope of the line that passes through the points $(2, 5)$ and $(8, 17)$?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$\\dfrac{1}{2}$' }, { id: 'C', text: '$12$' }, { id: 'D', text: '$6$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** $m=\\frac{17-5}{8-2}=\\frac{12}{6}=2$.\n\n```seva-figure\n{\"type\":\"linearGraph\",\"params\":{\"slope\":2,\"yIntercept\":1,\"xRange\":[0,11],\"yRange\":[2,20],\"gridInterval\":1,\"xTickInterval\":2,\"yTickInterval\":4,\"highlightPoints\":[[2,5],[8,17]]},\"caption\":\"Through $(2, 5)$ and $(8, 17)$ — rise 12 over run 6.\"}\n```\n\n**The Full Solution:**\nStep 1: Slope is $\\frac{\\text{change in }y}{\\text{change in }x}=\\frac{y_2-y_1}{x_2-x_1}$.\nStep 2: Using $(2,5)$ and $(8,17)$: $m=\\frac{17-5}{8-2}=\\frac{12}{6}=2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{1}{2}$): flips the fraction to run over rise.\n* Choice C ($12$): reports only the rise ($17-5$).\n* Choice D ($6$): reports only the run ($8-2$).\n\n**Test Day Takeaway:** Slope is change in $y$ over change in $x$. Keep the same point first in both the numerator and denominator.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'slope-from-two-points', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-456', domain: 'algebra', skills: ['slope-from-points'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the slope of the line passing through the points $(-1, 3)$ and $(3, 11)$?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$\\dfrac{1}{2}$' }, { id: 'C', text: '$8$' }, { id: 'D', text: '$4$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $m=\\frac{11-3}{3-(-1)}=\\frac{8}{4}=2$.\n\n**The Full Solution:**\nStep 1: Slope is $\\frac{y_2-y_1}{x_2-x_1}$.\nStep 2: Using $(-1,3)$ and $(3,11)$: $m=\\frac{11-3}{3-(-1)}=\\frac{8}{4}=2$. Subtracting the $-1$ adds, so the run is $4$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{1}{2}$): flips rise and run.\n* Choice C ($8$): reports only the rise.\n* Choice D ($4$): reports only the run.\n\n**Test Day Takeaway:** Subtracting a negative adds. Watch the sign in the denominator: $3-(-1)=4$, not $2$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'slope-from-two-points', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-457', domain: 'algebra', skills: ['slope-from-points'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the slope of the line through the points $(4, 0)$ and $(0, 8)$?',
    choices: [{ id: 'A', text: '$-2$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$\\dfrac{1}{2}$' }, { id: 'D', text: '$-\\dfrac{1}{2}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Slope is $\\frac{\\text{rise}}{\\text{run}}=\\frac{8-0}{0-4}=\\frac{8}{-4}=-2$.\n\n**The Full Solution:**\nStep 1: Pick $(x_1,y_1)=(4,0)$ and $(x_2,y_2)=(0,8)$.\nStep 2: $m=\\frac{y_2-y_1}{x_2-x_1}=\\frac{8-0}{0-4}=\\frac{8}{-4}=-2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): drops the negative sign — the line falls left-to-right, so the slope must be negative.\n* Choice C ($\\frac{1}{2}$): flips rise over run.\n* Choice D ($-\\frac{1}{2}$): flips rise over run and keeps the negative.\n\n**Test Day Takeaway:** When $x$ increases as $y$ decreases (or vice versa), the slope is negative. Keep $\\frac{\\Delta y}{\\Delta x}$ in that order — never invert it.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'slope-from-two-points', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-458', domain: 'algebra', skills: ['slope-from-points'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What is the slope of the line passing through $(-3, -7)$ and $(5, -3)$?',
    choices: [{ id: 'A', text: '$\\dfrac{1}{2}$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$-\\dfrac{1}{2}$' }, { id: 'D', text: '$\\dfrac{5}{2}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $m=\\frac{-3-(-7)}{5-(-3)}=\\frac{4}{8}=\\frac{1}{2}$.\n\n**The Full Solution:**\nStep 1: Let $(x_1,y_1)=(-3,-7)$ and $(x_2,y_2)=(5,-3)$.\nStep 2: $y_2-y_1=-3-(-7)=4$ and $x_2-x_1=5-(-3)=8$.\nStep 3: $m=\\frac{4}{8}=\\frac{1}{2}$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): flips rise over run.\n* Choice C ($-\\frac{1}{2}$): drops a negative sign while subtracting.\n* Choice D ($\\frac{5}{2}$): mishandles the differences with the negative coordinates.\n\n**Test Day Takeaway:** Subtracting a negative adds: $-3-(-7)=4$ and $5-(-3)=8$. Write the minus-a-negative as plus before you compute.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'slope-from-two-points', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-459', domain: 'algebra', skills: ['slope-from-points'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What is the slope of the line passing through $(1, 4)$ and $(5, 4)$?',
    choices: [{ id: 'A', text: '$0$' }, { id: 'B', text: 'Undefined' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$1$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Both points have $y=4$, so the line is horizontal and the slope is $0$.\n\n**The Full Solution:**\nStep 1: $m=\\frac{4-4}{5-1}=\\frac{0}{4}$.\nStep 2: A zero numerator gives $m=0$.\n\n**Why the wrong answers are tempting:**\n* Choice B (Undefined): that applies to a vertical line, where the $x$-values match — here the $y$-values match.\n* Choice C ($4$): copies the shared $y$-coordinate instead of computing slope.\n* Choice D ($1$): default guess with no calculation.\n\n**Test Day Takeaway:** Same $y$ for both points $\\Rightarrow$ horizontal line, slope $0$. Same $x$ for both points $\\Rightarrow$ vertical line, slope undefined.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'slope-from-two-points', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-460', domain: 'algebra', skills: ['slope-from-points'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A line has slope $-3$ and passes through the point $(2, -3)$. Which of the following points also lies on the line?',
    choices: [{ id: 'A', text: '$(3, -6)$' }, { id: 'B', text: '$(3, 0)$' }, { id: 'C', text: '$(0, 2)$' }, { id: 'D', text: '$(1, -6)$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Slope $-3$ means each step of $+1$ in $x$ drops $y$ by $3$. From $(2,-3)$, move to $(3,-6)$.\n\n**The Full Solution:**\nStep 1: Test each point against $m=\\frac{y-(-3)}{x-2}=-3$.\nStep 2: For $(3,-6)$: $\\frac{-6-(-3)}{3-2}=\\frac{-3}{1}=-3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($(3,0)$): moves $y$ up by $3$ — that is slope $+3$, the wrong sign.\n* Choice C ($(0,2)$): $\\frac{2-(-3)}{0-2}=\\frac{5}{-2}=-\\frac{5}{2}$, not $-3$.\n* Choice D ($(1,-6)$): moves $x$ down by $1$ and $y$ down by $3$, which also gives slope $+3$.\n\n**Test Day Takeaway:** With slope $m$, every $+1$ in $x$ changes $y$ by exactly $m$, sign included. Step from the known point and check.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'slope-from-two-points', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- solve-for-a-combination (4 → 10) ---
  { id: 'bank-alg-461', domain: 'algebra', skills: ['elimination-method'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $x + y = 10$ and $x - y = 4$, what is the value of $x + 2y$?',
    choices: [{ id: 'A', text: '$13$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$14$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Add the equations: $2x=14\\Rightarrow x=7$. Subtract: $2y=6\\Rightarrow y=3$. Then $x+2y=7+6=13$.\n\n**The Full Solution:**\nStep 1: $(x+y)+(x-y)=10+4\\Rightarrow 2x=14\\Rightarrow x=7$.\nStep 2: $(x+y)-(x-y)=10-4\\Rightarrow 2y=6\\Rightarrow y=3$.\nStep 3: $x+2y=7+2(3)=13$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($10$): returns $x+y$, the first equation's value, instead of $x+2y$.\n* Choice C ($14$): stops at $2x=14$ from the addition step.\n* Choice D ($3$): returns just $y$.\n\n**Test Day Takeaway:** When the target is a combination like $x+2y$, find $x$ and $y$ first, then build the exact expression asked for.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-a-combination', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-462', domain: 'algebra', skills: ['elimination-method'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $2x + 3y = 12$ and $2x - 3y = 6$, what is the value of $4x$?',
    choices: [{ id: 'A', text: '$18$' }, { id: 'B', text: '$6$' }, { id: 'C', text: '$36$' }, { id: 'D', text: '$9$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Add the equations: the $3y$ and $-3y$ cancel, giving $4x=18$ directly — no need to find $x$ or $y$.\n\n**The Full Solution:**\nStep 1: $(2x+3y)+(2x-3y)=12+6$.\nStep 2: The $y$-terms cancel: $4x=18$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): copies the second equation's constant.\n* Choice C ($36$): doubles the correct sum.\n* Choice D ($9$): halves $4x=18$ and reports $2x$ instead of $4x$.\n\n**Test Day Takeaway:** If the target ($4x$) is exactly what elimination produces, stop there — solving for $x$ separately just adds a chance to slip.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-a-combination', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-463', domain: 'algebra', skills: ['elimination-method'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $5x + y = 20$ and $5x - y = 10$, what is the value of $xy$?',
    choices: [{ id: 'A', text: '$15$' }, { id: 'B', text: '$10$' }, { id: 'C', text: '$30$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Add: $10x=30\\Rightarrow x=3$. Subtract: $2y=10\\Rightarrow y=5$. Then $xy=3\\cdot 5=15$.\n\n**The Full Solution:**\nStep 1: $(5x+y)+(5x-y)=20+10\\Rightarrow 10x=30\\Rightarrow x=3$.\nStep 2: $(5x+y)-(5x-y)=20-10\\Rightarrow 2y=10\\Rightarrow y=5$.\nStep 3: $xy=3\\cdot 5=15$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($10$): returns the difference $5x-y$ instead of the product.\n* Choice C ($30$): returns $10x$ from the addition step.\n* Choice D ($5$): returns just $y$.\n\n**Test Day Takeaway:** A product like $xy$ needs both values. Elimination delivers both fast: add for $x$, subtract for $y$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-a-combination', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-464', domain: 'algebra', skills: ['elimination-method'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $3a + 2b = 14$ and $3a - 2b = 2$, what is the value of $b$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$8$' }, { id: 'D', text: '$\\dfrac{8}{3}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Subtract the equations: the $3a$ cancels, leaving $4b=12\\Rightarrow b=3$.\n\n**The Full Solution:**\nStep 1: $(3a+2b)-(3a-2b)=14-2$.\nStep 2: The $a$-terms cancel: $4b=12$.\nStep 3: $b=3$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): copies the second equation's constant.\n* Choice C ($8$): stops at $4b=12$ but reads off the wrong number, or returns $2b$ from a single equation.\n* Choice D ($\\frac{8}{3}$): solves for $a$ instead of $b$ (adding gives $6a=16$, $a=\\frac{8}{3}$).\n\n**Test Day Takeaway:** Add to cancel the variable with opposite signs; subtract to cancel the matching variable. Here subtracting kills $a$ and isolates $b$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-a-combination', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-465', domain: 'algebra', skills: ['elimination-method'], difficulty: 'hard', type: 'multiple-choice',
    question: 'If $4x + 3y = 30$ and $4x - y = 10$, what is the value of $8x + 2y$?',
    choices: [{ id: 'A', text: '$40$' }, { id: 'B', text: '$20$' }, { id: 'C', text: '$30$' }, { id: 'D', text: '$10$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Add the two equations: $(4x+3y)+(4x-y)=30+10$ gives $8x+2y=40$ — exactly what's asked.\n\n**The Full Solution:**\nStep 1: Stack the equations and add: $4x+4x=8x$ and $3y+(-y)=2y$.\nStep 2: The right side is $30+10=40$, so $8x+2y=40$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($20$): halves the sum, as if dividing $8x+2y$ by $2$.\n* Choice C ($30$): copies the first equation's constant.\n* Choice D ($10$): copies the second equation's constant.\n\n**Test Day Takeaway:** Before grinding out $x$ and $y$, check whether the requested combination is just the sum or difference of the given equations. Here it's the sum.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-a-combination', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-466', domain: 'algebra', skills: ['elimination-method'], difficulty: 'hard', type: 'multiple-choice',
    question: 'If $x + y + z = 15$ and $x + y - z = 3$, what is the value of $z$?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$12$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$9$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Subtract the equations: $(x+y+z)-(x+y-z)=15-3$ gives $2z=12\\Rightarrow z=6$.\n\n**The Full Solution:**\nStep 1: The $x$ and $y$ terms are identical in both equations, so subtracting cancels them.\nStep 2: $z-(-z)=2z$ and $15-3=12$, so $2z=12$.\nStep 3: $z=6$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($12$): stops at $2z=12$ and forgets to divide by $2$.\n* Choice C ($3$): copies the second equation's constant.\n* Choice D ($9$): subtracts incorrectly, e.g. treats it as $15-3$ then halves the wrong way.\n\n**Test Day Takeaway:** You don't need every variable. If subtraction cancels everything except the one you want, solve for it directly.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'solve-for-a-combination', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- system-equivalence-check (4 → 10) ---
  { id: 'bank-alg-467', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'easy', type: 'multiple-choice',
    question: 'For what value of $k$ do the equations $2x + 5y = 8$ and $4x + 10y = k$ describe the SAME line?',
    choices: [{ id: 'A', text: '$16$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$32$' }, { id: 'D', text: '$4$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The left side of the second equation is $2\\times$ the first ($4x=2\\cdot 2x$, $10y=2\\cdot 5y$). For the same line, the right side must scale by $2$ too: $k=2\\cdot 8=16$.\n\n**The Full Solution:**\nStep 1: Compare coefficients: $\\frac{4}{2}=2$ and $\\frac{10}{5}=2$, so the second equation is the first multiplied by $2$.\nStep 2: A single line requires every term to scale by that same factor, so $k=2\\cdot 8=16$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): copies the original constant without scaling.\n* Choice C ($32$): scales by $4$ instead of $2$.\n* Choice D ($4$): uses an unrelated number such as the $x$-coefficient.\n\n**Test Day Takeaway:** Two equations describe the same line only when $A$, $B$, and $C$ all scale by one common factor. Find the factor from the coefficients, then apply it to the constant.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-equivalence-check', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-468', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The equations $3x - y = 4$ and $ax - by = 12$ represent the SAME line. What is the value of $a + b$?',
    choices: [{ id: 'A', text: '$12$' }, { id: 'B', text: '$9$' }, { id: 'C', text: '$15$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The constant scales from $4$ to $12$, a factor of $3$. So $a=3\\cdot 3=9$ and $b=3\\cdot 1=3$, giving $a+b=12$.\n\n**The Full Solution:**\nStep 1: For the same line, multiply $3x-y=4$ by the factor that turns $4$ into $12$: that factor is $\\frac{12}{4}=3$.\nStep 2: Apply it to each coefficient: $a=3\\cdot 3=9$ and $-b=3\\cdot(-1)=-3$, so $b=3$.\nStep 3: $a+b=9+3=12$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): returns just $a$ and stops.\n* Choice C ($15$): scales one coefficient correctly but mis-adds, e.g. $9+6$.\n* Choice D ($3$): returns the scaling factor itself instead of $a+b$.\n\n**Test Day Takeaway:** Same line means one scaling factor applies to every term. Read the factor off the constants, multiply it through, then answer the exact quantity asked.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-equivalence-check', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-469', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which of the following equations represents the SAME line as $y = 2x + 1$?',
    choices: [{ id: 'A', text: '$4x - 2y = -2$' }, { id: 'B', text: '$4x - 2y = 2$' }, { id: 'C', text: '$2x - y = 1$' }, { id: 'D', text: '$y = 2x - 1$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Put $y=2x+1$ in standard form: $2x-y=-1$. Scale by $2$: $4x-2y=-2$. That is exactly choice A.\n\n**The Full Solution:**\nStep 1: Move the $x$-term over: $y=2x+1 \\Rightarrow -2x+y=1 \\Rightarrow 2x-y=-1$.\nStep 2: Two equations describe the same line only when one is a constant multiple of the other. Multiply $2x-y=-1$ by $2$: $4x-2y=-2$.\nStep 3: Match against the choices — A reads $4x-2y=-2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($4x-2y=2$): right coefficients but wrong constant sign; this is $y=2x-1$.\n* Choice C ($2x-y=1$): rearranges to $y=2x-1$, not $2x+1$ — the constant flipped.\n* Choice D ($y=2x-1$): same slope but intercept $-1$, a parallel line, not the same line.\n\n**Test Day Takeaway:** Same line means one equation is a uniform multiple of the other — convert to standard form first, then check that coefficients AND the constant scale by the same factor.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-equivalence-check', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-470', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The equation $5x + 2y = 20$ is one of two equations in a system that has infinitely many solutions. Which of the following could be the second equation?',
    choices: [{ id: 'A', text: '$15x + 6y = 60$' }, { id: 'B', text: '$15x + 6y = 40$' }, { id: 'C', text: '$5x + 2y = 10$' }, { id: 'D', text: '$5x - 2y = 20$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Infinitely many solutions means the second equation is the first times a constant. Multiply $5x+2y=20$ by $3$: $15x+6y=60$, which is choice A.\n\n**The Full Solution:**\nStep 1: A system has infinitely many solutions exactly when both equations are the same line — one is a scalar multiple of the other.\nStep 2: Scale every term of $5x+2y=20$ by $3$: $15x+6y=60$.\nStep 3: Choice A matches term for term. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($15x+6y=40$): the left side scaled by $3$ but the constant did not — that is no solution (parallel lines).\n* Choice C ($5x+2y=10$): same coefficients, different constant — also parallel, no solution.\n* Choice D ($5x-2y=20$): the $y$-coefficient sign changed, so it is a different slope — one solution.\n\n**Test Day Takeaway:** For infinitely many solutions, the entire equation — coefficients and constant — must scale by the same number.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-equivalence-check', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-471', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'medium', type: 'multiple-choice',
    question: 'The equation $3x + ky = 18$ represents the same line as $6x + 4y = 36$. What is the value of $k$?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$8$' }, { id: 'D', text: '$6$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The $x$-coefficients give the scalar: $6 \\div 3 = 2$, so $6x+4y=36$ is $2\\times$ the first equation. Then $4=2k$, so $k=2$.\n\n**The Full Solution:**\nStep 1: Same line means one equation is a constant multiple of the other. Compare $x$-terms: $6x$ vs $3x$ gives factor $2$.\nStep 2: Apply that factor to the $y$-term: $4y$ must equal $2 \\cdot ky$, so $4=2k \\Rightarrow k=2$.\nStep 3: Check the constants: $2 \\cdot 18=36$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): copies the $y$-coefficient $4$ from $6x+4y=36$ instead of solving for $k$.\n* Choice C ($8$): doubles $4$ — scaling in the wrong direction.\n* Choice D ($6$): copies the $x$-coefficient $6$ from the second equation.\n\n**Test Day Takeaway:** Find the scalar from a coefficient pair you fully know, then use it to back-solve any unknown coefficient.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-equivalence-check', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-472', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The system $ax + 5y = 20$ and $4x + 10y = b$ has infinitely many solutions. What is the value of $a + b$?',
    choices: [{ id: 'A', text: '$42$' }, { id: 'B', text: '$24$' }, { id: 'C', text: '$40$' }, { id: 'D', text: '$22$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Get the scalar from the $y$-terms: $10 \\div 5=2$. So $4x+10y=b$ is $2\\times$ of $ax+5y=20$. That gives $a=4\\div2=2$ and $b=2\\cdot20=40$, so $a+b=42$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the second equation is the first scaled by some constant. Compare $y$-terms: $10y$ vs $5y$ gives factor $2$.\nStep 2: Apply to the $x$-term: $4x$ equals $2 \\cdot ax$, so $4=2a \\Rightarrow a=2$.\nStep 3: Apply to the constant: $b=2 \\cdot 20=40$.\nStep 4: $a+b=2+40=42$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($24$): mixes wrong components, such as adding $a$ to a mis-scaled constant.\n* Choice C ($40$): stops at $b$ and forgets to add $a$.\n* Choice D ($22$): another mis-paired sum.\n\n**Test Day Takeaway:** Lock the scalar from a coefficient ratio first, then apply it to BOTH the unknown coefficient and the constant before combining.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-equivalence-check', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- system-of-equations-elimination (4 → 10) ---
  { id: 'bank-alg-473', domain: 'algebra', skills: ['elimination-method', 'setting-up-systems'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $x + y = 14$ and $x - y = 2$, what is the value of $x$?',
    choices: [{ id: 'A', text: '$8$' }, { id: 'B', text: '$6$' }, { id: 'C', text: '$7$' }, { id: 'D', text: '$16$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: System of Equations (Elimination)**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** The $y$-terms are $+y$ and $-y$, so add the equations: $2x=16 \\Rightarrow x=8$.\n\n**The Full Solution:**\nStep 1: $(x+y)+(x-y)=14+2$. The $+y$ and $-y$ cancel.\nStep 2: $2x=16 \\Rightarrow x=8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): solves for $y$ instead of $x$ (subtracting gives $2y=12$, $y=6$).\n* Choice C ($7$): halves the sum $14$ alone, ignoring the second equation.\n* Choice D ($16$): stops at $2x=16$ without dividing by $2$.\n\n**Test Day Takeaway:** Add equations when a variable appears with opposite signs — it cancels in one step.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-equations-elimination', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-474', domain: 'algebra', skills: ['elimination-method', 'setting-up-systems'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $2x + y = 9$ and $x - y = 3$, what is the value of $y$?',
    choices: [{ id: 'A', text: '$1$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: System of Equations (Elimination)**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Add to cancel $y$: $3x=12 \\Rightarrow x=4$. Substitute into $x-y=3$: $4-y=3 \\Rightarrow y=1$.\n\n**The Full Solution:**\nStep 1: $(2x+y)+(x-y)=9+3$. The $+y$ and $-y$ cancel, leaving $3x=12$, so $x=4$.\nStep 2: Plug $x=4$ into $x-y=3$: $4-y=3 \\Rightarrow y=1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): copies the constant $3$ from the second equation instead of solving for $y$.\n* Choice C ($4$): returns $x$, not $y$ — answer the variable the question asks for.\n* Choice D ($5$): a substitution slip after finding $x$.\n\n**Test Day Takeaway:** After elimination gives one variable, substitute it into the simpler original equation to get the other.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-equations-elimination', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-475', domain: 'algebra', skills: ['elimination-method', 'setting-up-systems'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $3x + 2y = 12$ and $x + 2y = 8$, what is the value of $x$?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$1$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: System of Equations (Elimination)**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Both equations have $+2y$, so subtract: $3x-x=12-8 \\Rightarrow 2x=4 \\Rightarrow x=2$.\n\n**The Full Solution:**\nStep 1: $(3x+2y)-(x+2y)=12-8$. The $2y$ terms cancel.\nStep 2: $2x=4 \\Rightarrow x=2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$) and Choice C ($4$): result from subtracting in the wrong order or adding instead of subtracting.\n* Choice D ($1$): an arithmetic slip dividing $4$ by $2$.\n\n**Test Day Takeaway:** Subtract equations to eliminate a variable that appears with the SAME sign and coefficient.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-equations-elimination', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-476', domain: 'algebra', skills: ['elimination-method', 'setting-up-systems'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $4x - 3y = 11$ and $4x + 5y = 27$, what is the value of $y$?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$-2$' }, { id: 'D', text: '$8$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: System of Equations (Elimination)**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Both equations have $4x$, so subtract: $(4x+5y)-(4x-3y)=27-11 \\Rightarrow 8y=16 \\Rightarrow y=2$.\n\n**The Full Solution:**\nStep 1: Line up the equations. The $4x$ terms match, so subtraction eliminates $x$.\nStep 2: $(4x+5y)-(4x-3y)=27-11$. The $x$ cancels and $5y-(-3y)=8y$.\nStep 3: $8y=16 \\Rightarrow y=2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): divides $16$ by the $x$-coefficient $4$ instead of the combined $y$-coefficient $8$.\n* Choice C ($-2$): sign error on $5y-(-3y)$, treating the double negative as subtraction.\n* Choice D ($8$): stops at $8y=16$ without dividing by $8$.\n\n**Test Day Takeaway:** When both equations share an $x$-coefficient, subtract to eliminate $x$ — and watch the double-negative when combining the $y$-terms.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-equations-elimination', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-477', domain: 'algebra', skills: ['elimination-method', 'setting-up-systems'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $5x + 2y = 24$ and $3x - 2y = 8$, what is the value of $x$?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$8$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: System of Equations (Elimination)**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The $y$-terms are $+2y$ and $-2y$, so add: $8x=32 \\Rightarrow x=4$.\n\n**The Full Solution:**\nStep 1: $(5x+2y)+(3x-2y)=24+8$. The $+2y$ and $-2y$ cancel.\nStep 2: $8x=32 \\Rightarrow x=4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$) and Choice C ($2$): mis-add the left or right side before dividing.\n* Choice D ($8$): stops at $8x=32$ and reports $8$ instead of dividing.\n\n**Test Day Takeaway:** Opposite-sign matching terms ($+2y$ and $-2y$) cancel the moment you add the equations.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-equations-elimination', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-478', domain: 'algebra', skills: ['elimination-method', 'setting-up-systems'], difficulty: 'hard', type: 'multiple-choice',
    question: 'If $2x + 3y = 22$ and $4x + y = 24$, what is the value of $xy$?',
    choices: [{ id: 'A', text: '$20$' }, { id: 'B', text: '$24$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$22$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: System of Equations (Elimination)**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Scale the first by $2$: $4x+6y=44$. Subtract the second: $5y=20 \\Rightarrow y=4$. Then $4x+4=24 \\Rightarrow x=5$. So $xy=5\\cdot4=20$.\n\n**The Full Solution:**\nStep 1: To eliminate $x$, match its coefficient. Multiply $2x+3y=22$ by $2$: $4x+6y=44$.\nStep 2: Subtract $4x+y=24$: $(4x+6y)-(4x+y)=44-24 \\Rightarrow 5y=20 \\Rightarrow y=4$.\nStep 3: Back-substitute into $4x+y=24$: $4x+4=24 \\Rightarrow 4x=20 \\Rightarrow x=5$.\nStep 4: The question asks for $xy$: $5 \\cdot 4=20$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($24$): copies the constant from the second equation instead of computing $xy$.\n* Choice C ($5$): returns just $x$ — the question wants the product.\n* Choice D ($22$): copies the constant from the first equation.\n\n**Test Day Takeaway:** Scale one equation to match a coefficient, eliminate, then back-substitute — and reread what the question wants ($xy$, not $x$).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-equations-elimination', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- system-of-equations-substitution (4 → 10) ---
  { id: 'bank-alg-479', domain: 'algebra', skills: ['substitution-method'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $x = 3y - 1$ and $x + y = 11$, what is the value of $y$?',
    choices: [{ id: 'A', text: '$3$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$8$' }, { id: 'D', text: '$2$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: System of Equations (Substitution)**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $x$ is already isolated, so substitute into $x+y=11$: $(3y-1)+y=11 \\Rightarrow 4y=12 \\Rightarrow y=3$.\n\n**The Full Solution:**\nStep 1: The first equation gives $x=3y-1$. Drop that expression into $x+y=11$.\nStep 2: $(3y-1)+y=11 \\Rightarrow 4y-1=11$.\nStep 3: $4y=12 \\Rightarrow y=3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): combines the $y$-coefficients wrong, treating $3y+y$ as $5y$ or mishandling the constant.\n* Choice C ($8$): returns $x$ (since $x=3(3)-1=8$), not $y$.\n* Choice D ($2$): drops or mis-signs the $-1$.\n\n**Test Day Takeaway:** When one variable is already isolated, substitute its expression into the OTHER equation right away.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-equations-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-480', domain: 'algebra', skills: ['substitution-method'], difficulty: 'easy', type: 'multiple-choice',
    question: 'If $y = 2x + 5$ and $3x + y = 25$, what is the value of $x$?',
    choices: [{ id: 'A', text: '$4$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$13$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: System of Equations (Substitution)**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $y$ is isolated, so substitute into $3x+y=25$: $3x+(2x+5)=25 \\Rightarrow 5x=20 \\Rightarrow x=4$.\n\n**The Full Solution:**\nStep 1: The first equation gives $y=2x+5$. Substitute into $3x+y=25$.\nStep 2: $3x+(2x+5)=25 \\Rightarrow 5x+5=25$.\nStep 3: $5x=20 \\Rightarrow x=4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): copies the constant $5$ from $y=2x+5$ instead of solving.\n* Choice C ($13$): this is $y$ at the solution ($y=2(4)+5=13$), not $x$.\n* Choice D ($3$): an arithmetic slip on $5x=20$.\n\n**Test Day Takeaway:** Substitute the isolated expression, then combine like terms carefully before isolating the variable.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-equations-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-481', domain: 'algebra', skills: ['substitution-method'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $a = 2b + 4$ and $a + 3b = 19$, what is the value of $a$?',
    choices: [{ id: 'A', text: '$10$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$4$' }, { id: 'D', text: '$15$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: System of Equations (Substitution)**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** The first equation already gives $a$ in terms of $b$, so substitute $2b+4$ for $a$: $(2b+4)+3b=19 \\Rightarrow 5b=15 \\Rightarrow b=3$. Then $a=2(3)+4=10$.\n\n**The Full Solution:**\nStep 1: Substitute $a=2b+4$ into $a+3b=19$: $(2b+4)+3b=19$.\nStep 2: Combine like terms: $5b+4=19 \\Rightarrow 5b=15 \\Rightarrow b=3$.\nStep 3: Back-substitute into $a=2b+4$: $a=2(3)+4=10$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): stops at $b=3$, but the question asks for $a$.\n* Choice C ($4$): copies the constant from $a=2b+4$.\n* Choice D ($15$): reports $5b$ instead of finishing the solve.\n\n**Test Day Takeaway:** When one equation is already solved for a variable, substitute it straight into the other — then read the question to see which variable it wants.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-equations-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-482', domain: 'algebra', skills: ['substitution-method'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $x = 5 - y$ and $2x + 3y = 13$, what is the value of $x$?',
    choices: [{ id: 'A', text: '$2$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$5$' }, { id: 'D', text: '$1$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: System of Equations (Substitution)**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Replace $x$ with $5-y$ in $2x+3y=13$: $2(5-y)+3y=13 \\Rightarrow 10+y=13 \\Rightarrow y=3$. Then $x=5-3=2$.\n\n**The Full Solution:**\nStep 1: Substitute $x=5-y$: $2(5-y)+3y=13$.\nStep 2: Distribute over both terms: $10-2y+3y=13 \\Rightarrow 10+y=13$.\nStep 3: Solve: $y=3$, so $x=5-3=2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): stops at $y=3$, but the question asks for $x$.\n* Choice C ($5$): copies the constant from $x=5-y$.\n* Choice D ($1$): mis-substitutes or mishandles a sign.\n\n**Test Day Takeaway:** Distribute the coefficient over BOTH terms of the substituted expression — $2(5-y)$ is $10-2y$, not $10-y$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-equations-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-483', domain: 'algebra', skills: ['substitution-method'], difficulty: 'medium', type: 'multiple-choice',
    question: 'If $y = -3x + 7$ and $4x + 2y = 8$, what is the value of $y$?',
    choices: [{ id: 'A', text: '$-2$' }, { id: 'B', text: '$2$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$7$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: System of Equations (Substitution)**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Substitute $y=-3x+7$ into $4x+2y=8$: $4x+2(-3x+7)=8 \\Rightarrow -2x+14=8 \\Rightarrow x=3$. Then $y=-3(3)+7=-2$.\n\n**The Full Solution:**\nStep 1: Substitute $y=-3x+7$: $4x+2(-3x+7)=8$.\nStep 2: Distribute and combine: $4x-6x+14=8 \\Rightarrow -2x+14=8$.\nStep 3: Solve: $-2x=-6 \\Rightarrow x=3$. Back-substitute: $y=-3(3)+7=-2$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): drops the negative sign on the final value.\n* Choice C ($3$): reports $x$, but the question asks for $y$.\n* Choice D ($7$): copies the intercept from $y=-3x+7$.\n\n**Test Day Takeaway:** Track signs through every step of the substitution — a single dropped negative flips your answer.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-equations-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-484', domain: 'algebra', skills: ['substitution-method'], difficulty: 'hard', type: 'multiple-choice',
    question: 'If $2x + y = 10$ and $x = \\dfrac{1}{2}y + 1$, what is the value of $x + y$?',
    choices: [{ id: 'A', text: '$7$' }, { id: 'B', text: '$4$' }, { id: 'C', text: '$3$' }, { id: 'D', text: '$10$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: System of Equations (Substitution)**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Substitute $x=\\frac{1}{2}y+1$ into $2x+y=10$: $2\\left(\\frac{1}{2}y+1\\right)+y=10 \\Rightarrow 2y+2=10 \\Rightarrow y=4$. Then $x=\\frac{1}{2}(4)+1=3$, so $x+y=7$.\n\n**The Full Solution:**\nStep 1: Substitute $x=\\frac{1}{2}y+1$ into the first equation: $2\\left(\\frac{1}{2}y+1\\right)+y=10$.\nStep 2: Multiplying clears the fraction: $y+2+y=10 \\Rightarrow 2y=8 \\Rightarrow y=4$.\nStep 3: Then $x=\\frac{1}{2}(4)+1=3$, so $x+y=4+3=7$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): reports $y$ alone.\n* Choice C ($3$): reports $x$ alone.\n* Choice D ($10$): copies the constant from $2x+y=10$.\n\n**Test Day Takeaway:** When the substituted variable sits in a fraction, multiplying it by the matching coefficient clears the fraction cleanly — and answer the actual target, $x+y$, not just one variable.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-of-equations-substitution', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- two-equation-system-from-a-word-problem (4 → 10) ---
  { id: 'bank-alg-485', domain: 'algebra', skills: ['word-problem-to-equation', 'setting-up-systems'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A theater sold $100$ tickets to a show. Adult tickets cost $\\$12$ each and child tickets cost $\\$7$ each. The total revenue was $\\$920$. How many child tickets were sold?',
    choices: [{ id: 'A', text: '$56$' }, { id: 'B', text: '$44$' }, { id: 'C', text: '$50$' }, { id: 'D', text: '$36$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Count: $a+c=100$. Value: $12a+7c=920$. Substitute $a=100-c$: $12(100-c)+7c=920 \\Rightarrow 1200-5c=920 \\Rightarrow c=56$.\n\n**The Full Solution:**\nStep 1: Let $a$ be adult tickets and $c$ child tickets. Tickets sold: $a+c=100$.\nStep 2: Revenue: $12a+7c=920$.\nStep 3: Solve the count equation for $a=100-c$ and substitute: $12(100-c)+7c=920 \\Rightarrow 1200-12c+7c=920 \\Rightarrow -5c=-280 \\Rightarrow c=56$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($44$): the number of adult tickets, $100-56$.\n* Choice C ($50$): just halves the $100$ total.\n* Choice D ($36$): an arithmetic slip in the revenue equation.\n\n**Test Day Takeaway:** Mixed-quantity problems always split into two equations — one for COUNT (the totals add up) and one for VALUE (price times quantity equals revenue).",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'two-equation-system-from-a-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-486', domain: 'algebra', skills: ['word-problem-to-equation', 'setting-up-systems'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Two numbers have a sum of $24$ and a difference of $6$. What is the larger of the two numbers?',
    choices: [{ id: 'A', text: '$15$' }, { id: 'B', text: '$9$' }, { id: 'C', text: '$18$' }, { id: 'D', text: '$12$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** With $a+b=24$ and $a-b=6$, add the equations to cancel $b$: $2a=30 \\Rightarrow a=15$. The larger number is $15$.\n\n**The Full Solution:**\nStep 1: Let $a$ be the larger and $b$ the smaller: $a+b=24$ and $a-b=6$.\nStep 2: Add the two equations: $(a+b)+(a-b)=24+6 \\Rightarrow 2a=30$.\nStep 3: $a=15$ (and $b=9$ checks: $15+9=24$, $15-9=6$).\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): the smaller number.\n* Choice C ($18$): an arithmetic slip.\n* Choice D ($12$): just halves the sum, ignoring the difference.\n\n**Test Day Takeaway:** Given a sum and a difference, add the equations to get the larger value in one step (subtract to get the smaller).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'two-equation-system-from-a-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-487', domain: 'algebra', skills: ['word-problem-to-equation', 'setting-up-systems'], difficulty: 'medium', type: 'multiple-choice',
    question: 'A movie theater sold a total of $200$ matinee and evening tickets. Matinee tickets cost $\\$8$ each, evening tickets cost $\\$13$ each, and total revenue was $\\$2{,}225$. How many evening tickets were sold?',
    choices: [{ id: 'A', text: '$125$' }, { id: 'B', text: '$75$' }, { id: 'C', text: '$100$' }, { id: 'D', text: '$150$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Count: $m+e=200$. Value: $8m+13e=2{,}225$. Substitute $m=200-e$: $8(200-e)+13e=2{,}225 \\Rightarrow 1600+5e=2{,}225 \\Rightarrow e=125$.\n\n**The Full Solution:**\nStep 1: Let $m$ be matinee tickets and $e$ evening tickets. Tickets: $m+e=200$.\nStep 2: Revenue: $8m+13e=2{,}225$.\nStep 3: Substitute $m=200-e$: $1600-8e+13e=2{,}225 \\Rightarrow 5e=625 \\Rightarrow e=125$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($75$): the matinee count, $200-125$.\n* Choice C ($100$): just halves the $200$ total.\n* Choice D ($150$): an arithmetic slip in the revenue equation.\n\n**Test Day Takeaway:** Define each variable explicitly and pair each price with its own ticket type before building the count and value equations.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'two-equation-system-from-a-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-488', domain: 'algebra', skills: ['word-problem-to-equation', 'setting-up-systems'], difficulty: 'medium', type: 'multiple-choice',
    question: 'On a farm, there are chickens and cows totaling $50$ heads and $134$ legs. How many cows are on the farm?',
    choices: [{ id: 'A', text: '$17$' }, { id: 'B', text: '$33$' }, { id: 'C', text: '$25$' }, { id: 'D', text: '$13$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Heads: $c+h=50$. Legs: $4c+2h=134$. Substitute $h=50-c$: $4c+2(50-c)=134 \\Rightarrow 2c+100=134 \\Rightarrow c=17$.\n\n**The Full Solution:**\nStep 1: Let $c$ be cows and $h$ chickens. Each animal has one head: $c+h=50$.\nStep 2: Cows have $4$ legs, chickens $2$: $4c+2h=134$.\nStep 3: Substitute $h=50-c$: $4c+100-2c=134 \\Rightarrow 2c=34 \\Rightarrow c=17$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($33$): the chicken count, $50-17$.\n* Choice C ($25$): just halves the $50$ heads.\n* Choice D ($13$): an arithmetic slip in the leg equation.\n\n**Test Day Takeaway:** In head-and-leg problems, the head equation counts animals ($1$ each) and the leg equation weights by leg count — $4$ for cows, $2$ for chickens.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'two-equation-system-from-a-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-489', domain: 'algebra', skills: ['word-problem-to-equation', 'setting-up-systems'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Bob and Lisa earned a combined total of $\\$46$ doing yard work. Bob earned $\\$8$ more than Lisa. How much did Lisa earn?',
    choices: [{ id: 'A', text: '$\\$19$' }, { id: 'B', text: '$\\$27$' }, { id: 'C', text: '$\\$23$' }, { id: 'D', text: '$\\$8$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Total: $b+l=46$. Difference: $b=l+8$. Substitute: $(l+8)+l=46 \\Rightarrow 2l=38 \\Rightarrow l=19$. Lisa earned $\\$19$.\n\n**The Full Solution:**\nStep 1: Let $b$ be Bob's earnings and $l$ Lisa's: $b+l=46$.\nStep 2: \"Bob earned $\\$8$ more than Lisa\" means $b=l+8$.\nStep 3: Substitute: $(l+8)+l=46 \\Rightarrow 2l+8=46 \\Rightarrow 2l=38 \\Rightarrow l=19$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\$27$): Bob's earnings, $19+8$.\n* Choice C ($\\$23$): just halves the $\\$46$ total, ignoring the difference.\n* Choice D ($\\$8$): copies the difference itself.\n\n**Test Day Takeaway:** \"$\\$8$ more than\" translates to $b=l+8$; combine it with the total equation and substitute.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'two-equation-system-from-a-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-490', domain: 'algebra', skills: ['word-problem-to-equation', 'setting-up-systems'], difficulty: 'hard', type: 'multiple-choice',
    question: 'A jar contains only dimes and quarters, totaling $32$ coins and $\\$5.30$. How many quarters are in the jar?',
    choices: [{ id: 'A', text: '$14$' }, { id: 'B', text: '$18$' }, { id: 'C', text: '$22$' }, { id: 'D', text: '$10$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way (~40s):** Count: $d+q=32$. Value (in dollars): $0.10d+0.25q=5.30$. Substitute $d=32-q$: $0.10(32-q)+0.25q=5.30 \\Rightarrow 3.20+0.15q=5.30 \\Rightarrow q=14$.\n\n**The Full Solution:**\nStep 1: Let $d$ be dimes and $q$ quarters. Coins: $d+q=32$.\nStep 2: Value: $0.10d+0.25q=5.30$.\nStep 3: Substitute $d=32-q$: $3.20-0.10q+0.25q=5.30 \\Rightarrow 0.15q=2.10 \\Rightarrow q=14$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($18$): the dime count, $32-14$.\n* Choice C ($22$): an arithmetic slip with the decimals.\n* Choice D ($10$): a wrong coin combination.\n\n**Test Day Takeaway:** Mixed-coin problems pair a count equation with a value equation; write each coin's worth in dollars ($0.10$, $0.25$) and track the decimals carefully.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'two-equation-system-from-a-word-problem', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- two-step-linear-equation (4 → 10) ---
  { id: 'bank-alg-491', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $3x + 7 = 22$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$8$' }, { id: 'C', text: '$\\dfrac{22}{3}$' }, { id: 'D', text: '$15$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Subtract $7$ from both sides: $3x=15$. Divide by $3$: $x=5$.\n\n**The Full Solution:**\nStep 1: Move the constant: $3x+7=22 \\Rightarrow 3x=15$.\nStep 2: Divide by the coefficient: $x=\\frac{15}{3}=5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($8$): subtracts $7$ but forgets to divide by $3$.\n* Choice C ($\\frac{22}{3}$): divides by $3$ first, skipping the subtraction.\n* Choice D ($15$): reports $3x$ after the subtraction instead of $x$.\n\n**Test Day Takeaway:** Two steps, in order: (1) move the constant, then (2) divide by the coefficient.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'two-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-492', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $5x - 8 = 17$?',
    choices: [{ id: 'A', text: '$5$' }, { id: 'B', text: '$\\dfrac{9}{5}$' }, { id: 'C', text: '$25$' }, { id: 'D', text: '$3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Add $8$ to both sides: $5x=25$. Divide by $5$: $x=5$.\n\n**The Full Solution:**\nStep 1: Undo the subtraction: $5x-8=17 \\Rightarrow 5x=25$.\nStep 2: Divide by the coefficient: $x=\\frac{25}{5}=5$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{9}{5}$): subtracts $8$ instead of adding it, giving $5x=9$.\n* Choice C ($25$): reports $5x$ instead of dividing to find $x$.\n* Choice D ($3$): drops the $-8$ entirely.\n\n**Test Day Takeaway:** Undo operations in reverse order — clear the constant first (add or subtract), then divide by the coefficient.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'two-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-493', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $-2x + 9 = 15$?',
    choices: [{ id: 'A', text: '$-3$' }, { id: 'B', text: '$3$' }, { id: 'C', text: '$-12$' }, { id: 'D', text: '$12$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Subtract $9$ from both sides: $-2x = 6$. Divide by $-2$: $x = -3$.\n\n**The Full Solution:**\nStep 1: Isolate the $x$-term. $-2x + 9 = 15 \\Rightarrow -2x = 15 - 9 = 6$.\nStep 2: Divide by the coefficient: $x = \\frac{6}{-2} = -3$.\nStep 3: Check: $-2(-3) + 9 = 6 + 9 = 15$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($3$): drops the negative when dividing by $-2$.\n* Choice C ($-12$): leaves $-2x = 6$ but reports $-2x$ instead of solving for $x$.\n* Choice D ($12$): adds $9$ instead of subtracting it, then mishandles the sign.\n\n**Test Day Takeaway:** Dividing a positive by a negative coefficient gives a negative result — track the sign on the coefficient.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'two-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-494', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $\\dfrac{x}{3} + 4 = 10$?',
    choices: [{ id: 'A', text: '$18$' }, { id: 'B', text: '$6$' }, { id: 'C', text: '$2$' }, { id: 'D', text: '$\\dfrac{14}{3}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Subtract $4$: $\\frac{x}{3} = 6$. Multiply by $3$: $x = 18$.\n\n**The Full Solution:**\nStep 1: Undo the addition: $\\frac{x}{3} + 4 = 10 \\Rightarrow \\frac{x}{3} = 6$.\nStep 2: Undo the division by multiplying both sides by $3$: $x = 6 \\times 3 = 18$.\nStep 3: Check: $\\frac{18}{3} + 4 = 6 + 4 = 10$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): stops at $\\frac{x}{3} = 6$ and reports that value as $x$.\n* Choice C ($2$): divides by $3$ instead of multiplying.\n* Choice D ($\\frac{14}{3}$): mishandles the $4$ by dividing it into the equation.\n\n**Test Day Takeaway:** For $\\frac{x}{a} + b = c$, subtract $b$ first, then multiply by $a$ — multiply to undo division.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'two-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-495', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $8 - 3x = 23$?',
    choices: [{ id: 'A', text: '$-5$' }, { id: 'B', text: '$5$' }, { id: 'C', text: '$\\dfrac{15}{8}$' }, { id: 'D', text: '$-\\dfrac{31}{3}$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Subtract $8$: $-3x = 15$. Divide by $-3$: $x = -5$.\n\n**The Full Solution:**\nStep 1: Isolate the $x$-term: $8 - 3x = 23 \\Rightarrow -3x = 23 - 8 = 15$.\nStep 2: Divide by the coefficient: $x = \\frac{15}{-3} = -5$.\nStep 3: Check: $8 - 3(-5) = 8 + 15 = 23$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): drops the negative on the coefficient $-3$.\n* Choice C ($\\frac{15}{8}$): divides $15$ by $8$ instead of by the coefficient.\n* Choice D ($-\\frac{31}{3}$): adds $8 + 23$ instead of subtracting.\n\n**Test Day Takeaway:** The coefficient of $x$ in $8 - 3x$ is $-3$, not $3$. Move the constant first, then divide by the signed coefficient.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'two-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-496', domain: 'algebra', skills: ['combining-like-terms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'What value of $x$ satisfies the equation $-7x - 11 = -53$?',
    choices: [{ id: 'A', text: '$6$' }, { id: 'B', text: '$-6$' }, { id: 'C', text: '$\\dfrac{42}{7}$' }, { id: 'D', text: '$9$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Add $11$: $-7x = -42$. Divide by $-7$: $x = 6$.\n\n**The Full Solution:**\nStep 1: Isolate the $x$-term: $-7x - 11 = -53 \\Rightarrow -7x = -53 + 11 = -42$.\nStep 2: Divide by the coefficient: $x = \\frac{-42}{-7} = 6$.\nStep 3: Check: $-7(6) - 11 = -42 - 11 = -53$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-6$): forgets that a negative divided by a negative is positive.\n* Choice C ($\\frac{42}{7}$): equals $6$ but is left unsimplified — the closest distractor.\n* Choice D ($9$): arithmetic slip when combining the constants.\n\n**Test Day Takeaway:** A negative divided by a negative is positive: $\\frac{-42}{-7} = 6$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'two-step-linear-equation', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // --- vertex-form-to-standard-form (4 → 10) ---
  { id: 'bank-alg-497', domain: 'algebra', skills: ['distributive-property', 'converting-quadratic-forms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which of the following is equivalent to $(x - 3)^2 + 5$?',
    choices: [{ id: 'A', text: '$x^2 - 6x + 14$' }, { id: 'B', text: '$x^2 - 6x + 4$' }, { id: 'C', text: '$x^2 + 9 + 5$' }, { id: 'D', text: '$x^2 + 6x + 14$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $(x - 3)^2 = x^2 - 6x + 9$. Add the outside $5$: $x^2 - 6x + 14$.\n\n**The Full Solution:**\nStep 1: Expand the square: $(x - 3)^2 = x^2 - 2(3)x + 3^2 = x^2 - 6x + 9$.\nStep 2: Add the constant $5$: $x^2 - 6x + 9 + 5 = x^2 - 6x + 14$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($x^2 - 6x + 4$): subtracts $5$ instead of adding it ($9 - 5$).\n* Choice C ($x^2 + 9 + 5$): squares term-by-term and forgets the $-6x$ cross term.\n* Choice D ($x^2 + 6x + 14$): drops the negative on the middle term.\n\n**Test Day Takeaway:** $(x - h)^2 = x^2 - 2hx + h^2$ — the middle term is $-2hx$, never skip it.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-to-standard-form', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-498', domain: 'algebra', skills: ['distributive-property', 'converting-quadratic-forms'], difficulty: 'easy', type: 'multiple-choice',
    question: 'Which of the following is equivalent to $(x + 2)^2 - 7$?',
    choices: [{ id: 'A', text: '$x^2 + 4x - 3$' }, { id: 'B', text: '$x^2 + 4x + 11$' }, { id: 'C', text: '$x^2 + 4 - 7$' }, { id: 'D', text: '$x^2 - 4x - 3$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $(x + 2)^2 = x^2 + 4x + 4$. Subtract the outside $7$: $x^2 + 4x - 3$.\n\n**The Full Solution:**\nStep 1: Expand the square: $(x + 2)^2 = x^2 + 2(2)x + 2^2 = x^2 + 4x + 4$.\nStep 2: Subtract the constant $7$: $x^2 + 4x + 4 - 7 = x^2 + 4x - 3$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($x^2 + 4x + 11$): adds $7$ instead of subtracting it ($4 + 7$).\n* Choice C ($x^2 + 4 - 7$): squares term-by-term and forgets the $4x$ cross term.\n* Choice D ($x^2 - 4x - 3$): drops the sign on the middle term.\n\n**Test Day Takeaway:** $(a + b)^2 = a^2 + 2ab + b^2$ — the cross term is $2ab$. Expand fully before combining the outside constant.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-to-standard-form', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-499', domain: 'algebra', skills: ['distributive-property', 'converting-quadratic-forms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which of the following is equivalent to $2(x - 1)^2 + 4$?',
    choices: [{ id: 'A', text: '$2x^2 - 4x + 6$' }, { id: 'B', text: '$2x^2 + 4x + 6$' }, { id: 'C', text: '$2x^2 - 4x + 4$' }, { id: 'D', text: '$2x^2 - 2x + 4$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $(x - 1)^2 = x^2 - 2x + 1$. Multiply all three terms by $2$: $2x^2 - 4x + 2$. Add $4$: $2x^2 - 4x + 6$.\n\n**The Full Solution:**\nStep 1: Expand the square: $(x - 1)^2 = x^2 - 2x + 1$.\nStep 2: Distribute the leading $2$: $2(x^2 - 2x + 1) = 2x^2 - 4x + 2$.\nStep 3: Add the outside constant: $2x^2 - 4x + 2 + 4 = 2x^2 - 4x + 6$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($2x^2 + 4x + 6$): drops the negative on the middle term.\n* Choice C ($2x^2 - 4x + 4$): forgets to add the $+4$ to the constant (leaves the $+2$).\n* Choice D ($2x^2 - 2x + 4$): fails to distribute the $2$ over the middle term.\n\n**Test Day Takeaway:** Distribute the leading coefficient over all three expanded terms first, then combine with the outside constant.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-to-standard-form', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-500', domain: 'algebra', skills: ['distributive-property', 'converting-quadratic-forms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which of the following is equivalent to $-(x + 5)^2 + 3$?',
    choices: [{ id: 'A', text: '$-x^2 - 10x - 22$' }, { id: 'B', text: '$-x^2 + 10x - 22$' }, { id: 'C', text: '$-x^2 - 10x + 28$' }, { id: 'D', text: '$x^2 + 10x + 28$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $(x + 5)^2 = x^2 + 10x + 25$. Negate every term: $-x^2 - 10x - 25$. Add $3$: $-x^2 - 10x - 22$.\n\n**The Full Solution:**\nStep 1: Expand the square: $(x + 5)^2 = x^2 + 10x + 25$.\nStep 2: Apply the leading negative to all three terms: $-(x^2 + 10x + 25) = -x^2 - 10x - 25$.\nStep 3: Add the outside constant: $-x^2 - 10x - 25 + 3 = -x^2 - 10x - 22$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($-x^2 + 10x - 22$): drops the negative on the $10x$ term.\n* Choice C ($-x^2 - 10x + 28$): adds the $3$ to a positive $25$ instead of negating it first ($-25 + 3 = -22$, not $+28$).\n* Choice D ($x^2 + 10x + 28$): ignores the leading negative entirely.\n\n**Test Day Takeaway:** A leading negative distributes to every term of the expanded binomial; only the separate outside constant is added afterward.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-to-standard-form', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-501', domain: 'algebra', skills: ['distributive-property', 'converting-quadratic-forms'], difficulty: 'medium', type: 'multiple-choice',
    question: 'Which of the following is equivalent to $3(x - 4)^2$?',
    choices: [{ id: 'A', text: '$3x^2 - 24x + 48$' }, { id: 'B', text: '$3x^2 - 12x + 16$' }, { id: 'C', text: '$3x^2 + 24x + 48$' }, { id: 'D', text: '$3x^2 - 24x - 48$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $(x - 4)^2 = x^2 - 8x + 16$. Multiply all three terms by $3$: $3x^2 - 24x + 48$.\n\n**The Full Solution:**\nStep 1: Expand the square: $(x - 4)^2 = x^2 - 8x + 16$.\nStep 2: Distribute the leading $3$: $3(x^2 - 8x + 16) = 3x^2 - 24x + 48$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($3x^2 - 12x + 16$): multiplies only the first term by $3$, leaving the cross and constant terms undistributed.\n* Choice C ($3x^2 + 24x + 48$): drops the negative on the middle term.\n* Choice D ($3x^2 - 24x - 48$): drops the sign on the constant ($+16 \\times 3 = +48$).\n\n**Test Day Takeaway:** The leading coefficient multiplies every term of the expanded binomial, not just the $x^2$ term.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-to-standard-form', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  { id: 'bank-alg-502', domain: 'algebra', skills: ['distributive-property', 'converting-quadratic-forms'], difficulty: 'hard', type: 'multiple-choice',
    question: 'If $(x + a)^2 + 7 = x^2 + 8x + b$ for all $x$, what is the value of $b$?',
    choices: [{ id: 'A', text: '$23$' }, { id: 'B', text: '$16$' }, { id: 'C', text: '$7$' }, { id: 'D', text: '$11$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Expanding the left gives $x^2 + 2ax + a^2 + 7$. Match the middle term: $2a = 8 \\Rightarrow a = 4$. Then $b = a^2 + 7 = 16 + 7 = 23$.\n\n**The Full Solution:**\nStep 1: Expand the left side: $(x + a)^2 + 7 = x^2 + 2ax + a^2 + 7$.\nStep 2: Match the $x$-coefficient against $x^2 + 8x + b$: $2a = 8 \\Rightarrow a = 4$.\nStep 3: Match the constants: $b = a^2 + 7 = 4^2 + 7 = 16 + 7 = 23$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($16$): finds $a^2 = 16$ but forgets to add the $+7$.\n* Choice C ($7$): copies the constant from the left side without expanding.\n* Choice D ($11$): combines the wrong pieces ($4 + 7$ instead of $16 + 7$).\n\n**Test Day Takeaway:** Match middle coefficients first to find the unknown, then match constants using $a^2 + c = b$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'vertex-form-to-standard-form', authoredBy: 'performsat-engine', createdAt: '2026-05-21' },

  // === DIFFICULT-QUESTIONS PDF BATCH (2026-05-22) — 12 algebra items reskinned ===

  { id: 'bank-alg-503', domain: 'algebra', skills: ['slope-from-points', 'function-transformations'], difficulty: 'hard', type: 'multiple-choice',
    question: 'For line $h$, the table shows three values of $x$ and their corresponding values of $y$.\n\n| $x$ | $y$ |\n|---|---|\n| $12$ | $95$ |\n| $18$ | $125$ |\n| $24$ | $155$ |\n\nLine $k$ is the result of translating line $h$ down $8$ units in the $xy$-plane. What is the $x$-intercept of line $k$?',
    choices: [{ id: 'A', text: '$\\left(-\\dfrac{27}{5},\\, 0\\right)$' }, { id: 'B', text: '$\\left(-\\dfrac{19}{5},\\, 0\\right)$' }, { id: 'C', text: '$\\left(-7,\\, 0\\right)$' }, { id: 'D', text: '$\\left(\\dfrac{27}{5},\\, 0\\right)$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Vertical Shift of a Line — $x$-intercept**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Slope of $h$ is $\\frac{125 - 95}{18 - 12} = \\frac{30}{6} = 5$, and its $y$-intercept is $95 - 5(12) = 35$. Shifting down $8$ gives line $k$: $y = 5x + 27$. Set $y = 0$: $5x + 27 = 0 \\Rightarrow x = -\\frac{27}{5}$.\n\n**The Full Solution:**\nStep 1: Find the slope from any two rows: $\\frac{125 - 95}{18 - 12} = 5$.\nStep 2: Find the $y$-intercept of $h$: $y = 5x + b$, so $95 = 5(12) + b \\Rightarrow b = 35$. Thus $h$: $y = 5x + 35$.\nStep 3: Translate down $8$ — slope stays, intercept drops by $8$: $k$: $y = 5x + 27$.\nStep 4: Set $y = 0$ and solve: $5x + 27 = 0 \\Rightarrow x = -\\frac{27}{5}$, so the $x$-intercept is $\\left(-\\frac{27}{5},\\, 0\\right)$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\left(-\\frac{19}{5},\\, 0\\right)$): forgets to shift the intercept, or shifts by the wrong amount.\n* Choice C ($\\left(-7,\\, 0\\right)$): divides the intercept by the wrong value instead of by the slope.\n* Choice D ($\\left(\\frac{27}{5},\\, 0\\right)$): correct magnitude but drops the negative sign.\n\n**Test Day Takeaway:** A vertical shift moves the $y$-intercept by $\\pm c$ and leaves the slope unchanged; for the $x$-intercept of the shifted line, set $y = 0$ and solve.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'function-from-shifted-graph', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-alg-504', domain: 'algebra', skills: ['system-solution-types', 'substitution-method'], difficulty: 'hard', type: 'multiple-choice',
    question: '$$4x + 5y = 9$$\n$$12x + 15y = 27$$\n\nFor each real number $r$, which of the following points lies on the graph of each equation in the $xy$-plane for the given system?',
    choices: [{ id: 'A', text: '$\\left(\\dfrac{r}{5}+9,\\,-\\dfrac{r}{5}+27\\right)$' }, { id: 'B', text: '$\\left(-\\dfrac{5r}{4}+\\dfrac{9}{4},\\,r\\right)$' }, { id: 'C', text: '$\\left(r,\\,\\dfrac{4r}{5}+\\dfrac{9}{5}\\right)$' }, { id: 'D', text: '$\\left(r,\\,-\\dfrac{4r}{5}+\\dfrac{9}{5}\\right)$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Same Line — Infinitely Many Solutions (Parametric)**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The second equation is exactly $3$ times the first, so both are the same line. Solve $4x + 5y = 9$ for $y$: $y = \\frac{9 - 4x}{5} = -\\frac{4x}{5} + \\frac{9}{5}$. Let $x = r$: the point is $\\left(r,\\, -\\frac{4r}{5} + \\frac{9}{5}\\right)$.\n\n**The Full Solution:**\nStep 1: Multiply the first equation by $3$: $12x + 15y = 27$ — identical to the second. The system is one line with infinitely many solutions.\nStep 2: Solve the single equation $4x + 5y = 9$ for $y$: $5y = 9 - 4x \\Rightarrow y = -\\frac{4x}{5} + \\frac{9}{5}$.\nStep 3: Parameterize with $x = r$: every solution has the form $\\left(r,\\, -\\frac{4r}{5} + \\frac{9}{5}\\right)$, which is Choice D.\n\n**Why the wrong answers are tempting:**\n* Choice A: applies a multiplier to both coordinates instead of solving the line equation; the result does not satisfy $4x + 5y = 9$.\n* Choice B: parameterizes by $y = r$ instead of by $x$. It does describe the same line, but it is not in the $x = r$ form the question's matching choices use.\n* Choice C: drops the negative on the linear coefficient ($+\\frac{4r}{5}$ instead of $-\\frac{4r}{5}$).\n\n**Test Day Takeaway:** When one equation is a multiple of the other, the system is a single line — solve it for $y$ and let $x = r$ to write the parametric solution. Plug a choice into the original equation to confirm it holds for all $r$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'same-line-infinitely-many-solutions', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-alg-505', domain: 'algebra', skills: ['perpendicular-negative-reciprocal', 'system-solution-types'], difficulty: 'hard', type: 'multiple-choice',
    question: '$$3x + 4y = 1$$\n$$ax + by = 1$$\n\nIn the given pair of equations, $a$ and $b$ are constants. The graph of this pair of equations in the $xy$-plane is a pair of perpendicular lines. Which of the following pairs of equations also represents a pair of perpendicular lines?',
    choices: [{ id: 'A', text: '$6x + 4y = 1$\n\n$ax - 2by = 1$' }, { id: 'B', text: '$6x + 4y = 1$\n\n$ax + 2by = 1$' }, { id: 'C', text: '$6x + 4y = 1$\n\n$2ax + by = 1$' }, { id: 'D', text: '$3x - 4y = 1$\n\n$ax + by = 1$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: Perpendicular Slopes (Standard Form)**\n\n**Choice B is correct.**\n\n**The Fast Way (~45s):** A line $Ax+By=1$ has slope $-\\frac{A}{B}$. So $3x+4y=1$ has slope $-\\frac{3}{4}$, and $ax+by=1$ has slope $-\\frac{a}{b}$. Perpendicular means the product is $-1$: $\\left(-\\frac{3}{4}\\right)\\left(-\\frac{a}{b}\\right)=-1$, which forces $\\frac{a}{b}=-\\frac{4}{3}$. Now test choice B: $6x+4y=1$ has slope $-\\frac{6}{4}=-\\frac{3}{2}$, and $ax+2by=1$ has slope $-\\frac{a}{2b}=-\\frac{1}{2}\\cdot\\frac{a}{b}=-\\frac{1}{2}\\left(-\\frac{4}{3}\\right)=\\frac{2}{3}$. Product: $-\\frac{3}{2}\\cdot\\frac{2}{3}=-1$. $\\checkmark$\n\n**The Full Solution:**\nStep 1: From the given pair, the perpendicularity condition gives $\\frac{a}{b}=-\\frac{4}{3}$.\nStep 2: The first line in every choice, $6x+4y=1$, has fixed slope $-\\frac{3}{2}$. For perpendicular lines the second slope must be the negative reciprocal, $\\frac{2}{3}$.\nStep 3: In B the second line $ax+2by=1$ has slope $-\\frac{a}{2b}=\\frac{2}{3}$, matching exactly. The other choices break this.\n\n**Why the wrong answers are tempting:**\n* Choice A: $ax-2by=1$ flips the sign on $b$, giving slope $-\\frac{2}{3}$ — not the negative reciprocal of $-\\frac{3}{2}$.\n* Choice C: $2ax+by=1$ doubles $a$ instead of $b$, giving slope $-\\frac{2a}{b}=\\frac{8}{3}$, so the product is not $-1$.\n* Choice D: $3x-4y=1$ flips the first slope to $+\\frac{3}{4}$ while keeping the original $a,b$, breaking the original relationship.\n\n**Test Day Takeaway:** In standard form $Ax+By=C$ the slope is $-\\frac{A}{B}$, and perpendicular lines have slopes whose product is $-1$ (negative reciprocals).",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'perpendicular-slope', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-alg-506', domain: 'algebra', skills: ['system-solution-types', 'infinite-solutions-condition'], difficulty: 'hard', type: 'fill-in',
    question: '$$\\dfrac{3}{4}y - \\dfrac{1}{8}x = \\dfrac{1}{2} - \\dfrac{3}{4}y$$\n$$\\dfrac{1}{4}x + \\dfrac{5}{4} = py + \\dfrac{7}{4}$$\n\nIn the given system of equations, $p$ is a constant. If the system has no solution, what is the value of $p$?',
    correctAnswer: '3',
    explanation: "**SAT Pattern: No Solution Parameter (Two-Equation System)**\n\n**The correct answer is $3$.**\n\n**The Fast Way (~50s):** Clear fractions and put both equations in $x,y$ form. Equation 1 becomes $x-12y=-4$ and equation 2 becomes $x-4py=2$. No solution means the lines are parallel: matching $x$ and $y$ coefficients but different constants. Match the $y$ coefficients: $-12=-4p$, so $p=3$. The constants $-4$ and $2$ differ, confirming no solution.\n\n**The Full Solution:**\nStep 1: Equation 1: $\\frac{3}{4}y-\\frac{1}{8}x=\\frac{1}{2}-\\frac{3}{4}y \\Rightarrow \\frac{3}{2}y-\\frac{1}{8}x=\\frac{1}{2}$. Multiply by $8$: $12y-x=4$, i.e. $x-12y=-4$.\nStep 2: Equation 2: $\\frac{1}{4}x+\\frac{5}{4}=py+\\frac{7}{4} \\Rightarrow \\frac{1}{4}x-py=\\frac{1}{2}$. Multiply by $4$: $x-4py=2$.\nStep 3: Parallel (no solution) requires identical $x$ and $y$ coefficients. The $x$ coefficients already match at $1$. Set $-4p=-12$, so $p=3$. Since the constants $-4 \\neq 2$, the system truly has no solution.\n\n**Common Mistakes:** Equating coefficients before clearing fractions and getting a wrong $p$; or solving the system fully and chasing a contradiction instead of just matching coefficients.\n\n**Test Day Takeaway:** No solution = same slope, different intercept. Clear fractions to a clean $Ax+By=C$ first, then force the $x$ and $y$ coefficients to match.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-no-solution-parameter', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-alg-507', domain: 'algebra', skills: ['system-solution-types', 'one-step-linear-equation'], difficulty: 'hard', type: 'multiple-choice',
    question: '$$-5x + 35px = 91$$\n\nIn the given equation, $p$ is a constant. The equation has no solution. What is the value of $p$?',
    choices: [{ id: 'A', text: '$0$' }, { id: 'B', text: '$\\dfrac{1}{7}$' }, { id: 'C', text: '$\\dfrac{5}{7}$' }, { id: 'D', text: '$5$' }],
    correctAnswer: 'B',
    explanation: "**SAT Pattern: No-Solution Condition (Single Linear Equation)**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Factor the left side: $-5x+35px=x(-5+35p)=91$. An equation of the form $kx=91$ with a nonzero right side has no solution only when $k=0$. Set $-5+35p=0$, so $p=\\frac{5}{35}=\\frac{1}{7}$.\n\n**The Full Solution:**\nStep 1: Combine the $x$-terms: $x(35p-5)=91$.\nStep 2: If $35p-5\\neq 0$ there is exactly one solution, $x=\\frac{91}{35p-5}$. To have no solution the coefficient must vanish: $35p-5=0$.\nStep 3: Solve: $35p=5 \\Rightarrow p=\\frac{1}{7}$. Then the equation reads $0=91$, which is impossible — no solution.\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): treats the equation as if it could be satisfied at $p=0$, but then $-5x=91$ has the solution $x=-\\frac{91}{5}$.\n* Choice C ($\\frac{5}{7}$): solves $35p-5=0$ but mishandles the $5$, scaling $p$ by an extra factor.\n* Choice D ($5$): solves a sign- or coefficient-flipped version instead of $35p-5=0$.\n\n**Test Day Takeaway:** A single linear equation $kx=c$ has no solution exactly when $k=0$ and $c\\neq 0$.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'no-solution-condition', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-alg-508', domain: 'algebra', skills: ['function-evaluation', 'function-notation'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The table shows three values of $x$ and their corresponding values of $g(x)$, where $g(x)=\\dfrac{f(x)}{x+4}$ and $f$ is a linear function.\n\n| $x$ | $g(x)$ |\n|---|---|\n| $-24$ | $4$ |\n| $-8$ | $0$ |\n| $16$ | $6$ |\n\nWhat is the $y$-intercept of the graph of $y=f(x)$ in the $xy$-plane?',
    choices: [{ id: 'A', text: '$(0,\\, 40)$' }, { id: 'B', text: '$(0,\\, 32)$' }, { id: 'C', text: '$(0,\\, 5)$' }, { id: 'D', text: '$(0,\\, -8)$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Recover Linear $f$ from $g(x)=f(x)/(x+c)$**\n\n**Choice A is correct.**\n\n**The Fast Way (~45s):** Since $g(x)=\\frac{f(x)}{x+4}$, multiply back: $f(x)=g(x)(x+4)$. The table gives $f(-24)=4(-20)=-80$, $f(-8)=0(-4)=0$, $f(16)=6(20)=120$. The slope is $\\frac{0-(-80)}{-8-(-24)}=\\frac{80}{16}=5$, so $f(x)=5(x+8)=5x+40$ and $f(0)=40$. The intercept is $(0,40)$.\n\n**The Full Solution:**\nStep 1: Recover three points of $f$ using $f(x)=g(x)(x+4)$: $(-24,-80)$, $(-8,0)$, $(16,120)$.\nStep 2: Slope from the first two points: $\\frac{0-(-80)}{-8-(-24)}=\\frac{80}{16}=5$. Check with the third: $\\frac{120-0}{16-(-8)}=\\frac{120}{24}=5$. $\\checkmark$\nStep 3: Use point $(-8,0)$: $f(x)=5(x-(-8))=5x+40$, so $f(0)=40$, giving the $y$-intercept $(0,40)$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($(0,32)$): uses $f(x)=5(x+?)$ with the wrong shift, dropping part of the $+40$ constant.\n* Choice C ($(0,5)$): reports the slope as the intercept.\n* Choice D ($(0,-8)$): reports the root of $f$ (where $g=0$) instead of the $y$-intercept.\n\n**Test Day Takeaway:** When $g(x)=\\frac{f(x)}{L(x)}$ and $f$ is linear, undo the division to recover $f$-values, fit the line, then read off the $y$-intercept $f(0)$.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'function-from-points', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-alg-509', domain: 'algebra', skills: ['function-notation', 'domain-restrictions'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x)=a\\sqrt{x+b}$, where $a$ and $b$ are constants. In the $xy$-plane, the graph of $y=f(x)$ passes through the point $(-18,\\,0)$, and $f(18) < 0$. Which of the following must be true?',
    choices: [{ id: 'A', text: '$f(0) = 18$' }, { id: 'B', text: '$f(0) = -18$' }, { id: 'C', text: '$a > b$' }, { id: 'D', text: '$a < b$' }],
    correctAnswer: 'D',
    explanation: "**SAT Pattern: Square Root Function — Sign Reasoning**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The graph passes through $(-18,0)$, so $a\\sqrt{-18+b}=0$. Since $a\\neq 0$ (otherwise $f$ is constantly $0$ and $f(18)$ couldn't be negative), the root forces $-18+b=0$, so $b=18$. Then $f(18)=a\\sqrt{36}=6a$, and $f(18)<0$ means $a<0$. With $a<0$ and $b=18$, we have $a<b$.\n\n**The Full Solution:**\nStep 1: A zero at $x=-18$ gives $a\\sqrt{-18+b}=0$. The factor $a$ is nonzero, so the radical must be $0$: $b=18$.\nStep 2: Evaluate $f(18)=a\\sqrt{18+18}=a\\sqrt{36}=6a$. Given $f(18)<0$, divide by $6$: $a<0$.\nStep 3: Compare: $a<0<18=b$, so $a<b$ must be true.\n\n**Why the wrong answers are tempting:**\n* Choice A ($f(0)=18$): $f(0)=a\\sqrt{18}$, which is negative (since $a<0$) and not $18$.\n* Choice B ($f(0)=-18$): same error — $f(0)=a\\sqrt{18}$ is an irrational negative number, not $-18$.\n* Choice C ($a>b$): reverses the inequality; $a$ is negative while $b=18$ is positive.\n\n**Test Day Takeaway:** Use a known zero to pin the inside-the-root constant, then use a sign condition like $f(18)<0$ to pin the sign of the leading coefficient.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-from-conditions', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-alg-510', domain: 'algebra', skills: ['function-evaluation', 'function-notation-application'], difficulty: 'hard', type: 'multiple-choice',
    question: 'The linear function $g$ is defined by $g(x)=b-12x$, where $b$ is a constant. If $g(c+5)=\\dfrac{c}{3}$, where $c$ is a constant, which of the following expressions represents the value of $b$?',
    choices: [{ id: 'A', text: '$\\dfrac{37c}{3} + 60$' }, { id: 'B', text: '$\\dfrac{c}{3} + 60$' }, { id: 'C', text: '$\\dfrac{13c}{3} + 5$' }, { id: 'D', text: '$12c + 60$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: Solve for a Linear Parameter from a Conditional Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** Substitute $x=c+5$ into $g$: $g(c+5)=b-12(c+5)=b-12c-60$. Set this equal to $\\frac{c}{3}$ and solve for $b$: $b=\\frac{c}{3}+12c+60=\\frac{c+36c}{3}+60=\\frac{37c}{3}+60$.\n\n**The Full Solution:**\nStep 1: Apply the rule $g(x)=b-12x$ at $x=c+5$: $b-12(c+5)=b-12c-60$.\nStep 2: This equals $\\frac{c}{3}$: $b-12c-60=\\frac{c}{3}$.\nStep 3: Isolate $b$: $b=\\frac{c}{3}+12c+60$. Write $12c=\\frac{36c}{3}$ to combine: $b=\\frac{c+36c}{3}+60=\\frac{37c}{3}+60$.\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\frac{c}{3}+60$): drops the $12c$ that comes from distributing $-12$.\n* Choice C ($\\frac{13c}{3}+5$): mishandles the common denominator and loses the $60$.\n* Choice D ($12c+60$): forgets to add the $\\frac{c}{3}$ term back to $b$.\n\n**Test Day Takeaway:** Substitute the input exactly, distribute fully, then collect the variable terms over a common denominator before isolating the parameter.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'function-from-conditions', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-alg-511', domain: 'algebra', skills: ['identify-quadratic', 'discriminant-analysis'], difficulty: 'hard', type: 'multiple-choice',
    question: '$$y = 2x^2 - 19x + 56$$\n$$y = 4x + a$$\n\nIn the given system of equations, $a$ is a constant. The graphs of the equations in the given system intersect at exactly one point, $(x,\\,y)$, in the $xy$-plane. What is the value of $x$?',
    choices: [{ id: 'A', text: '$-\\dfrac{23}{4}$' }, { id: 'B', text: '$\\dfrac{19}{4}$' }, { id: 'C', text: '$\\dfrac{23}{4}$' }, { id: 'D', text: '$8$' }],
    correctAnswer: 'C',
    explanation: "**SAT Pattern: Tangent Line — Discriminant Equals Zero**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** Set the curves equal: $2x^2-19x+56=4x+a$, so $2x^2-23x+(56-a)=0$. One intersection point means the discriminant is zero, so the quadratic is a perfect square with its single root at the vertex: $x=\\frac{-(-23)}{2(2)}=\\frac{23}{4}$.\n\n**The Full Solution:**\nStep 1: Substitute the line into the parabola: $2x^2-19x+56=4x+a$.\nStep 2: Move everything to one side: $2x^2-19x-4x+56-a=0 \\Rightarrow 2x^2-23x+(56-a)=0$.\nStep 3: Exactly one solution means discriminant $=0$, so the lone root is the vertex $x=\\frac{-b}{2a}=\\frac{23}{2(2)}=\\frac{23}{4}$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{23}{4}$): sign error in $\\frac{-b}{2a}$, using $-23$ in the numerator.\n* Choice B ($\\frac{19}{4}$): keeps $19$ and forgets to combine $-19x-4x=-23x$.\n* Choice D ($8$): ignores the leading coefficient $2$, dividing as if $a=1$.\n\n**Test Day Takeaway:** A line meeting a parabola at exactly one point is tangent — set them equal, force the discriminant to $0$, and the single $x$ is $\\frac{-b}{2a}$ of the combined quadratic.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'tangent-line-and-discriminant', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-alg-512', domain: 'algebra', skills: ['percent-decimal-conversion', 'percent-change'], difficulty: 'hard', type: 'fill-in',
    question: 'The number $a$ is $120\\%$ greater than the number $b$. The number $b$ is $80\\%$ less than $65$. What is the value of $a$?',
    correctAnswer: '28.6',
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**The correct answer is $28.6$.**\n\n**The Fast Way (~30s):** \"$80\\%$ less than $65$\" means $b=65(1-0.80)=65(0.20)=13$. \"$120\\%$ greater than $b$\" means $a=b(1+1.20)=2.20b=2.20(13)=28.6$.\n\n**The Full Solution:**\nStep 1: Find $b$. Decreasing $65$ by $80\\%$ leaves $20\\%$: $b=0.20\\times 65=13$.\nStep 2: Find $a$. Increasing $b$ by $120\\%$ multiplies by $1+1.20=2.20$: $a=2.20\\times 13=28.6$.\n\n**Common Mistakes:** Reading \"$120\\%$ greater\" as $\\times 1.20$ (gives $15.6$) instead of $\\times 2.20$; reading \"$80\\%$ less\" as $\\times 0.80$ (gives $52$, then $114.4$) instead of $\\times 0.20$.\n\n**Test Day Takeaway:** \"$p\\%$ greater\" multiplies by $1+\\frac{p}{100}$; \"$p\\%$ less\" multiplies by $1-\\frac{p}{100}$. Work chained percents one step at a time.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'chained-percent-relationship', authoredBy: 'performsat-engine', createdAt: '2026-05-22' },

  { id: 'bank-alg-513', domain: 'algebra', skills: ['system-solution-types'], difficulty: 'hard', type: 'multiple-choice',
    question: 'In the system of equations $2x - 7y = 9$ and $kx + 21y = -5$, $k$ is a constant. If the system has no solution, what is the value of $k$?',
    choices: [{ id: 'A', text: '$-6$' }, { id: 'B', text: '$-3$' }, { id: 'C', text: '$-\\frac{2}{3}$' }, { id: 'D', text: '$6$' }],
    correctAnswer: 'A',
    explanation: "**SAT Pattern: System With No Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** No solution means the left sides are proportional but the right sides are not. Multiplying $2x - 7y$ by $-3$ gives $-6x + 21y$, which matches $kx + 21y$ when $k = -6$; since $9 \\cdot (-3) = -27 \\neq -5$, the lines are parallel and distinct.\n\n**The Full Solution:**\nStep 1: Write the coefficient triples: $(2, -7, 9)$ and $(k, 21, -5)$.\nStep 2: A linear system has no solution exactly when the $x$- and $y$-coefficients are proportional but the constants are not. The $y$-coefficients give the ratio $\\frac{21}{-7} = -3$, so require $\\frac{k}{2} = -3$, which gives $k = -6$.\nStep 3: Confirm the constants break the proportion: $\\frac{-5}{9} \\neq -3$, so the lines are parallel but not identical — no solution, not infinitely many. $\\checkmark$\nStep 4: Check with slopes: $2x - 7y = 9$ has slope $\\frac{2}{7}$; with $k = -6$, $-6x + 21y = -5$ has slope $\\frac{6}{21} = \\frac{2}{7}$. Equal slopes, different intercepts. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-3$): reports the scale factor between the two equations (the $\\times(-3)$ that turns $-7y$ into $21y$) instead of the value of $k$ that the factor produces.\n* Choice C ($-\\frac{2}{3}$): runs the proportion upside down, solving $\\frac{2}{k} = -3$ instead of $\\frac{k}{2} = -3$.\n* Choice D ($6$): matches $7y$ to $21y$ without tracking the sign of $-7$, flipping the sign of $k$.\n\n**Test Day Takeaway:** For no solution, make the $x$- and $y$-coefficients proportional and then verify the constants are NOT in that same ratio — if they are, you have infinitely many solutions instead.",
    calculatorAllowed: false, tags: [], sourceStyleRef: 'system-no-solution-constant', sourceRef: 'pilot-m1-system-constant', authoredBy: 'seva-cb-craft-pilot', createdAt: '2026-08-13' },

  { id: 'bank-alg-514', domain: 'algebra', skills: ['slope-from-points', 'linear-functions'], difficulty: 'medium', type: 'fill-in',
    question: 'The table above gives three values of $x$ and the corresponding values of $f(x)$ for the linear function $f$, where $t$ is a constant. What is the slope of the graph of $y = f(x)$ in the $xy$-plane?',
    diagram: { type: 'dataTable', params: { headers: ['x', 'f(x)'], rows: [['2', 't + 9'], ['5', 't'], ['8', 't - 9']] } },
    correctAnswer: '-3',
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**The correct answer is $-3$.**\n\n**The Fast Way (~15s):** Slope needs only the CHANGES, and the $t$'s cancel: from $x = 2$ to $x = 5$, $f$ drops from $t + 9$ to $t$ — a change of $-9$ over a change of $+3$. Slope $= \\frac{-9}{3} = -3$.\n\n**The Full Solution:**\nStep 1: Take two rows of the table as points on the line: $(2, t+9)$ and $(5, t)$.\nStep 2: Slope $= \\frac{t - (t + 9)}{5 - 2} = \\frac{-9}{3} = -3$. The unknown constant $t$ subtracts away completely.\nStep 3: Confirm with the other pair of rows: $\\frac{(t - 9) - t}{8 - 5} = \\frac{-9}{3} = -3$ — the same value, as a linear function requires. $\\checkmark$\n\n**Common Mistakes:** Entering $3$ (the size of the drop, with the sign dropped); entering $-1/3$ (dividing run by rise); deciding the slope \"cannot be determined\" because $t$ is unknown — in a parameterized table the constant always cancels out of the slope.\n\n**Test Day Takeaway:** Symbolic table entries are a College Board favorite: subtract first and the unknown constant disappears. A negative slope is a perfectly valid grid-in — enter the minus sign.",
    calculatorAllowed: true, tags: [], sourceStyleRef: 'parameterized-table-slope', sourceRef: 'pilot-m5-spr-negative-slope', authoredBy: 'seva-cb-craft-pilot', createdAt: '2026-08-13' }
];
