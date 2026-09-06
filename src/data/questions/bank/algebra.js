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
    diagram: { type: "twoLineGraph", params: { intersection: { x: -2, y: 3 }, slope1: 1, slope2: -2, xRange: [-6, 6], yRange: [-4, 8], showIntersection: false, xTickInterval: 2, yTickInterval: 2, gridInterval: 1 } },
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
    diagram: { type: "twoLineGraph", params: { intersection: { x: 2, y: 5 }, slope1: 1, slope2: -2, xRange: [-4, 8], yRange: [-2, 10], showIntersection: false, xTickInterval: 2, yTickInterval: 2, gridInterval: 1 } },
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

  {
    id: "bank-alg-361",
    domain: "algebra",
    skills: ["inequalities"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Which of the following inequalities has the same solution set as the inequality $-\\dfrac{2}{5}(x - 10) \\geq 6$?",
    choices: [
      { id: "A", text: "$x \\leq -5$" },
      // distractor: does not reverse the inequality when multiplying by a negative number
      { id: "B", text: "$x \\geq -5$" },
      // distractor: solves x - 10 <= -15 as x <= 15 - 10
      { id: "C", text: "$x \\leq 5$" },
      // distractor: ignores the negative sign on the coefficient
      { id: "D", text: "$x \\geq 25$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Multiply both sides by $-\\dfrac{5}{2}$ and reverse the inequality: $x - 10 \\leq -15$, so $x \\leq -5$.\n\n**The Full Solution:**\nStep 1: The coefficient of $(x - 10)$ is $-\\dfrac{2}{5}$. To undo it, multiply both sides by its reciprocal, $-\\dfrac{5}{2}$. Because that number is negative, the direction of the inequality reverses: $x - 10 \\leq 6 \\cdot \\left(-\\dfrac{5}{2}\\right) = -15$.\nStep 2: Add $10$ to both sides: $x \\leq -5$.\nStep 3: Check with $x = -10$ (which satisfies $x \\leq -5$): $-\\dfrac{2}{5}(-10 - 10) = -\\dfrac{2}{5}(-20) = 8 \\geq 6$. $\\checkmark$ Check with $x = 0$ (which does not): $-\\dfrac{2}{5}(-10) = 4$, and $4 \\geq 6$ is false. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($x \\geq -5$): keeps the original direction after multiplying by the negative number $-\\dfrac{5}{2}$; the direction must reverse.\n* Choice C ($x \\leq 5$): reverses correctly to $x - 10 \\leq -15$ but then moves the $10$ by computing $15 - 10 = 5$, dropping the negative that belongs to $-15$.\n* Choice D ($x \\geq 25$): drops the negative sign on the coefficient, solving $\\dfrac{2}{5}(x - 10) \\geq 6$ instead.\n\n**Test Day Takeaway:** Every time you multiply or divide an inequality by a negative number, flip the sign; then verify with one number from your solution set and one from outside it.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "one-variable-linear-inequality",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-362",
    domain: "algebra",
    skills: ["inequalities"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Which of the following describes all values of $x$ that satisfy the compound inequality $-7 \\leq 3 - 2x < 11$?",
    choices: [
      // distractor: adds 3 to each part instead of subtracting 3
      { id: "A", text: "$-7 < x \\leq 2$" },
      // distractor: divides by 2 and never reverses the inequality signs
      { id: "B", text: "$-5 \\leq x < 4$" },
      // distractor: reverses the order of the bounds but leaves the strict and inclusive signs in their original places
      { id: "C", text: "$-4 \\leq x < 5$" },
      { id: "D", text: "$-4 < x \\leq 5$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Subtract $3$ from all three parts to get $-10 \\leq -2x < 8$; divide by $-2$ and reverse both signs: $5 \\geq x > -4$, which is $-4 < x \\leq 5$.\n\n**The Full Solution:**\nStep 1: Isolate the $x$-term in the middle. Subtracting $3$ from each part of $-7 \\leq 3 - 2x < 11$ gives $-10 \\leq -2x < 8$.\nStep 2: Divide each part by $-2$. Dividing by a negative reverses both inequality signs: $5 \\geq x > -4$.\nStep 3: Rewrite in increasing order: $-4 < x \\leq 5$. Note that the strict sign now sits next to $-4$ and the inclusive sign next to $5$. Check the endpoints: $x = 5$ gives $3 - 10 = -7$, and $-7 \\leq -7$ holds. $\\checkmark$ $x = -4$ gives $3 + 8 = 11$, and $11 < 11$ fails, so $-4$ is correctly excluded. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7 < x \\leq 2$): adds $3$ to each part instead of subtracting it, producing $-4 \\leq -2x < 14$ before dividing.\n* Choice B ($-5 \\leq x < 4$): divides by $2$ as though the coefficient were positive, so neither sign is reversed.\n* Choice C ($-4 \\leq x < 5$): swaps the bounds correctly but keeps the inclusive sign on the left and the strict sign on the right; the signs travel with their numbers when the order flips.\n\n**Test Day Takeaway:** In a compound inequality, whatever you do to the middle you do to both ends, and dividing by a negative flips both signs, carrying each sign with its own bound.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "one-variable-linear-inequality",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-363",
    domain: "algebra",
    skills: ["inequalities"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the inequality $-3(x - k) + 5 \\geq 2x - 10$, $k$ is a constant. The solution set of the inequality is all values of $x$ such that $x \\leq 6$. What is the value of $k$?",
    choices: [
      // distractor: distributes -3(x - k) as -3x - 3k
      { id: "A", text: "$-5$" },
      // distractor: sets 3k + 15 = 6, forgetting to multiply the bound by 5
      { id: "B", text: "$-3$" },
      { id: "C", text: "$5$" },
      // distractor: sets 3k = 30 without first subtracting 15
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** The boundary $x = 6$ must make the two sides equal: $-3(6 - k) + 5 = 2(6) - 10$ gives $-18 + 3k + 5 = 2$, so $3k = 15$ and $k = 5$.\n\n**The Full Solution:**\nStep 1: Solve the inequality for $x$ in terms of $k$. Distribute: $-3x + 3k + 5 \\geq 2x - 10$. Collect the $x$-terms on the right by adding $3x$ to both sides and adding $10$ to both sides: $3k + 15 \\geq 5x$.\nStep 2: Divide by the positive number $5$ (no sign flip): $x \\leq \\dfrac{3k + 15}{5}$. The solution set is given as $x \\leq 6$, so the boundaries must match: $\\dfrac{3k + 15}{5} = 6$.\nStep 3: Multiply by $5$: $3k + 15 = 30$, so $3k = 15$ and $k = 5$. Check: with $k = 5$ the inequality is $-3x + 20 \\geq 2x - 10$, or $30 \\geq 5x$, or $x \\leq 6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): distributes $-3(x - k)$ as $-3x - 3k$, which leads to $x \\leq \\dfrac{15 - 3k}{5}$ and the wrong sign on $k$.\n* Choice B ($-3$): sets $3k + 15 = 6$, matching the numerator to the bound without multiplying by the denominator $5$.\n* Choice D ($10$): jumps from $3k + 15 = 30$ to $3k = 30$, skipping the subtraction of $15$.\n\n**Test Day Takeaway:** When a solution set is given, the boundary value is where both sides are equal; substitute it as an equation to find the constant, then confirm the direction of the inequality.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "one-variable-linear-inequality",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-364",
    domain: "algebra",
    skills: ["inequalities"],
    difficulty: "hard",
    type: "fill-in",
    question: "What is the least integer value of $x$ that satisfies the inequality $\\dfrac{3x - 1}{4} - \\dfrac{x + 5}{3} > 2$?",
    correctAnswer: "10",
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**The correct answer is $10$.**\n\n**The Fast Way (~30s):** Multiply through by $12$: $3(3x - 1) - 4(x + 5) > 24$, which simplifies to $5x - 23 > 24$, so $x > 9.4$. The least integer greater than $9.4$ is $10$.\n\n**The Full Solution:**\nStep 1: Clear the fractions by multiplying every term by the least common denominator, $12$ (a positive number, so the sign does not flip): $12 \\cdot \\dfrac{3x - 1}{4} - 12 \\cdot \\dfrac{x + 5}{3} > 12 \\cdot 2$, which is $3(3x - 1) - 4(x + 5) > 24$.\nStep 2: Distribute carefully, including the negative on the second product: $9x - 3 - 4x - 20 > 24$, so $5x - 23 > 24$ and $5x > 47$.\nStep 3: Divide by $5$: $x > 9.4$. The inequality is strict and $9.4$ is not an integer, so the least integer in the solution set is $10$. Check $x = 10$: $\\dfrac{29}{4} - \\dfrac{15}{3} = 7.25 - 5 = 2.25 > 2$. $\\checkmark$ Check $x = 9$: $\\dfrac{26}{4} - \\dfrac{14}{3} \\approx 6.5 - 4.67 = 1.83$, which is not greater than $2$, so $9$ is correctly excluded. $\\checkmark$\n\n**Common Mistakes:** Answering $9$ by rounding $9.4$ down instead of taking the next integer up; entering $9.4$ itself, which is not an integer; distributing $-4$ over $(x + 5)$ as $-4x + 20$, which gives $5x > 7$ and a least integer of $2$; multiplying only the left side by $12$ and comparing to $2$ instead of $24$.\n\n**Test Day Takeaway:** After clearing fractions, solve to a decimal bound, then read the question again: \"least integer\" on a $>$ inequality means the next whole number above the bound.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "one-variable-linear-inequality",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── H.E. SYSTEM OF LINEAR INEQUALITIES (bank-alg-365..372) ──────────────
  {
    id: "bank-alg-365",
    domain: "algebra",
    skills: ["inequalities"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The shaded region shown represents all solutions to the system of inequalities $y \\leq x + 3$ and $y \\leq -2x + 6$ in the $xy$-plane. Which of the following ordered pairs $(x, y)$ is a solution to the system?",
    diagram: { type: "twoLineGraph", params: { intersection: { x: 1, y: 4 }, slope1: 1, slope2: -2, shadeRegion: "below-both", showIntersection: false, xRange: [-6, 6], yRange: [-4, 8], xTickInterval: 2, yTickInterval: 2, gridInterval: 1 } },
    choices: [
      // distractor: satisfies the second inequality but lies above the line y = x + 3
      { id: "A", text: "$(-2, 4)$" },
      { id: "B", text: "$(2, 0)$" },
      // distractor: satisfies the second inequality but lies above the line y = x + 3
      { id: "C", text: "$(0, 5)$" },
      // distractor: satisfies the first inequality but lies above the line y = -2x + 6
      { id: "D", text: "$(3, 2)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Test each pair in both inequalities. For $(2, 0)$: $0 \\leq 2 + 3$ and $0 \\leq -4 + 6$ are both true, so $(2, 0)$ is in the shaded region.\n\n**The Full Solution:**\nStep 1: A point is a solution to the system only if it satisfies both inequalities, which is the same as lying in the shaded region below both lines.\nStep 2: Check $(2, 0)$ in $y \\leq x + 3$: $0 \\leq 5$ is true. Check it in $y \\leq -2x + 6$: $0 \\leq 2$ is true. Both hold.\nStep 3: Confirm the others fail. $(-2, 4)$: $4 \\leq 1$ is false. $(0, 5)$: $5 \\leq 3$ is false. $(3, 2)$: $2 \\leq 6$ is true, but $2 \\leq 0$ is false. Only $(2, 0)$ satisfies both. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-2, 4)$): satisfies $y \\leq -2x + 6$ since $4 \\leq 10$, but it sits above the line $y = x + 3$, where $y$ would have to be at most $1$.\n* Choice C ($(0, 5)$): satisfies $y \\leq -2x + 6$ since $5 \\leq 6$, but it is above $y = x + 3$, whose value at $x = 0$ is $3$.\n* Choice D ($(3, 2)$): satisfies $y \\leq x + 3$ since $2 \\leq 6$, but it is above $y = -2x + 6$, whose value at $x = 3$ is $0$.\n\n**Test Day Takeaway:** A solution to a system of inequalities must pass every inequality; a point that passes one but fails the other is outside the shaded region.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-of-linear-inequalities",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-366",
    domain: "algebra",
    skills: ["inequalities"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$y > 3x - 4$\n$y < -x + 8$\n\nWhich of the following ordered pairs $(x, y)$ is a solution to the given system of inequalities?",
    choices: [
      { id: "A", text: "$(1, 3)$" },
      // distractor: lies on the boundary line y = -x + 8, which a strict inequality excludes
      { id: "B", text: "$(0, 8)$" },
      // distractor: fails the first inequality (1 is not greater than 2)
      { id: "C", text: "$(2, 1)$" },
      // distractor: satisfies the first inequality but fails the second (6 is not less than 5)
      { id: "D", text: "$(3, 6)$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Substitute $(1, 3)$: $3 > 3(1) - 4 = -1$ is true and $3 < -1 + 8 = 7$ is true, so $(1, 3)$ satisfies both inequalities.\n\n**The Full Solution:**\nStep 1: A solution to the system must make both inequalities true. Test each candidate in the first inequality, $y > 3x - 4$, then in the second, $y < -x + 8$.\nStep 2: $(1, 3)$: first, $3 > -1$ is true; second, $3 < 7$ is true. Both hold.\nStep 3: Eliminate the rest. $(0, 8)$: $8 > -4$ is true, but $8 < 8$ is false because the inequality is strict. $(2, 1)$: $1 > 2$ is false. $(3, 6)$: $6 > 5$ is true, but $6 < 5$ is false. Only $(1, 3)$ passes both. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($(0, 8)$): lies exactly on the line $y = -x + 8$; a strict inequality ($<$) excludes points on its boundary.\n* Choice C ($(2, 1)$): fails the first inequality, since $3(2) - 4 = 2$ and $1$ is not greater than $2$.\n* Choice D ($(3, 6)$): passes the first inequality but fails the second, since $-3 + 8 = 5$ and $6$ is not less than $5$.\n\n**Test Day Takeaway:** Substitute the pair into each inequality separately, and remember that a strict inequality rejects a point that lands exactly on its boundary line.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-of-linear-inequalities",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-367",
    domain: "algebra",
    skills: ["inequalities"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The shaded region shown represents all solutions to a system of two linear inequalities in the $xy$-plane. Which of the following could be the system?",
    diagram: { type: "twoLineGraph", params: { intersection: { x: 2, y: 3 }, slope1: 2, slope2: -1, line2Dash: true, shadeRegion: "above-both", showIntersection: false, xRange: [-4, 8], yRange: [-4, 8], xTickInterval: 2, yTickInterval: 2, gridInterval: 1 } },
    choices: [
      { id: "A", text: "$y \\geq 2x - 1$ and $y > -x + 5$" },
      // distractor: shades below both lines instead of above
      { id: "B", text: "$y \\leq 2x - 1$ and $y < -x + 5$" },
      // distractor: assigns the strict sign to the solid line and the inclusive sign to the dashed line
      { id: "C", text: "$y > 2x - 1$ and $y \\geq -x + 5$" },
      // distractor: shades below the dashed line
      { id: "D", text: "$y \\geq 2x - 1$ and $y < -x + 5$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** The solid line has slope $2$ and $y$-intercept $-1$; the dashed line has slope $-1$ and $y$-intercept $5$. Shading above both with solid $\\Rightarrow$ inclusive and dashed $\\Rightarrow$ strict gives $y \\geq 2x - 1$ and $y > -x + 5$.\n\n**The Full Solution:**\nStep 1: Read each boundary line from the grid. The rising line passes through $(0, -1)$ and $(1, 1)$, so it is $y = 2x - 1$. The falling line passes through $(0, 5)$ and $(5, 0)$, so it is $y = -x + 5$.\nStep 2: Decide direction and strictness. The shading lies above both lines, so each inequality is of the \"$y$ greater than\" type. The rising line is solid, so its boundary is included ($\\geq$); the falling line is dashed, so its boundary is excluded ($>$).\nStep 3: Combine: $y \\geq 2x - 1$ and $y > -x + 5$. Check with a point in the shaded region such as $(2, 6)$: $6 \\geq 3$ and $6 > 3$ are both true. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($y \\leq 2x - 1$ and $y < -x + 5$): describes the region below both lines, the opposite of what is shaded.\n* Choice C ($y > 2x - 1$ and $y \\geq -x + 5$): has the right directions but swaps the line styles, making the solid line strict and the dashed line inclusive.\n* Choice D ($y \\geq 2x - 1$ and $y < -x + 5$): shades above the solid line but below the dashed line, which would put the region on the other side of $y = -x + 5$.\n\n**Test Day Takeaway:** Read a shaded graph in two passes: slope and intercept give each line's equation, then shading side gives the direction and line style gives strict versus inclusive.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-of-linear-inequalities",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-368",
    domain: "algebra",
    skills: ["inequalities"],
    difficulty: "medium",
    type: "fill-in",
    question: "$y \\leq -3x + 21$\n$y \\geq x - 3$\n\nIn the $xy$-plane, the point $(k, 6)$ is a solution to the given system of inequalities. What is the greatest possible value of $k$?",
    correctAnswer: "5",
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**The correct answer is $5$.**\n\n**The Fast Way (~25s):** Substitute $y = 6$ into each inequality: $6 \\leq -3k + 21$ gives $k \\leq 5$, and $6 \\geq k - 3$ gives $k \\leq 9$. Both must hold, so the greatest $k$ is $5$.\n\n**The Full Solution:**\nStep 1: Since the point is $(k, 6)$, replace $x$ with $k$ and $y$ with $6$ in both inequalities.\nStep 2: First inequality: $6 \\leq -3k + 21$. Subtract $21$: $-15 \\leq -3k$. Divide by $-3$ and reverse: $5 \\geq k$, so $k \\leq 5$. Second inequality: $6 \\geq k - 3$, so $k \\leq 9$.\nStep 3: The point must satisfy both conditions, so $k \\leq 5$ and $k \\leq 9$ together mean $k \\leq 5$. The greatest possible value is $5$. Check $(5, 6)$: $6 \\leq -15 + 21 = 6$ holds (the boundary is included), and $6 \\geq 2$ holds. $\\checkmark$\n\n**Common Mistakes:** Answering $9$ by using only the second inequality; forgetting to reverse the sign when dividing by $-3$, which turns the first condition into $k \\geq 5$ and suggests no maximum; substituting $6$ for $x$ instead of $y$.\n\n**Test Day Takeaway:** When one coordinate is fixed, plug it in to turn each inequality into a bound on the other coordinate, then take the tightest bound that satisfies every inequality at once.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-of-linear-inequalities",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-369",
    domain: "algebra",
    skills: ["inequalities"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A garden plot has $120$ square feet of planting space. Each tomato plant requires $4$ square feet, and each pepper plant requires $2$ square feet. A gardener will plant $t$ tomato plants and $p$ pepper plants and wants at least $40$ plants in total. Which of the following systems of inequalities represents this situation?",
    choices: [
      // distractor: reverses both inequality directions
      { id: "A", text: "$4t + 2p \\geq 120$ and $t + p \\leq 40$" },
      // distractor: swaps the space requirements of the two plant types
      { id: "B", text: "$2t + 4p \\leq 120$ and $t + p \\geq 40$" },
      // distractor: translates "at least 40 plants" as an upper bound
      { id: "C", text: "$4t + 2p \\leq 120$ and $t + p \\leq 40$" },
      { id: "D", text: "$4t + 2p \\leq 120$ and $t + p \\geq 40$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Space used is $4t + 2p$, which cannot exceed $120$: $4t + 2p \\leq 120$. \"At least $40$ plants\" is $t + p \\geq 40$.\n\n**The Full Solution:**\nStep 1: Build the space constraint. Tomato plants use $4$ square feet each, so $t$ of them use $4t$; pepper plants use $2p$. The total planted space cannot exceed what is available: $4t + 2p \\leq 120$.\nStep 2: Build the count constraint. The total number of plants is $t + p$, and \"at least $40$\" means greater than or equal to $40$: $t + p \\geq 40$.\nStep 3: The system is $4t + 2p \\leq 120$ and $t + p \\geq 40$. Check with a plausible plan, $t = 10$ and $p = 35$: space $40 + 70 = 110 \\leq 120$ and count $45 \\geq 40$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4t + 2p \\geq 120$ and $t + p \\leq 40$): flips both directions, requiring the garden to be overfilled and capping the plant count.\n* Choice B ($2t + 4p \\leq 120$ and $t + p \\geq 40$): attaches $2$ square feet to tomatoes and $4$ to peppers, the reverse of the given requirements.\n* Choice C ($4t + 2p \\leq 120$ and $t + p \\leq 40$): reads \"at least $40$\" as \"at most $40$.\"\n\n**Test Day Takeaway:** Match each phrase to a sign: \"available\" or \"cannot exceed\" means $\\leq$, \"at least\" means $\\geq$, and each coefficient must sit with the variable it describes.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-of-linear-inequalities",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-370",
    domain: "algebra",
    skills: ["inequalities"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$y \\leq 3x - 2$\n$y \\leq 3x + 4$\n\nWhich of the following best describes the set of all points $(x, y)$ in the $xy$-plane that are solutions to the given system of inequalities?",
    choices: [
      { id: "A", text: "All points on or below the line $y = 3x - 2$" },
      // distractor: uses the higher line, which is the looser of the two conditions
      { id: "B", text: "All points on or below the line $y = 3x + 4$" },
      // distractor: reads two "less than or equal" conditions as a band between the lines
      { id: "C", text: "All points on or between the lines $y = 3x - 2$ and $y = 3x + 4$" },
      // distractor: assumes parallel boundaries mean an empty solution set
      { id: "D", text: "No points, because the two boundary lines are parallel" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** For every $x$, $3x - 2 < 3x + 4$. Any $y$ that is at most the smaller value $3x - 2$ is automatically at most $3x + 4$, so the system is just $y \\leq 3x - 2$.\n\n**The Full Solution:**\nStep 1: The two boundary lines have the same slope, $3$, so they are parallel, with $y = 3x + 4$ always $6$ units above $y = 3x - 2$.\nStep 2: A point satisfies the system when it is on or below both lines. Being on or below the lower line, $y = 3x - 2$, already places it below the upper line, so the second inequality adds no new restriction.\nStep 3: The solution set is all points on or below $y = 3x - 2$. Check with $(0, -2)$: $-2 \\leq -2$ and $-2 \\leq 4$ both hold. Check with $(0, 1)$, which is between the lines: $1 \\leq -2$ fails, so points between the lines are not solutions. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B (on or below $y = 3x + 4$): keeps the looser condition; points between the lines satisfy it but fail $y \\leq 3x - 2$.\n* Choice C (between the lines): would be correct for $3x - 2 \\leq y \\leq 3x + 4$, but here both inequalities point the same way.\n* Choice D (no points): confuses this system with a system of equations; parallel lines have no intersection, but inequalities describe regions, and these regions overlap.\n\n**Test Day Takeaway:** When both inequalities have the same direction and parallel boundaries, the stricter one wins; sketch the two lines and shade to see which region survives.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-of-linear-inequalities",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-371",
    domain: "algebra",
    skills: ["inequalities"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The shaded region shown represents all solutions to the system of inequalities $y \\leq ax + b$ and $2y + kx \\leq 8$ in the $xy$-plane, where $a$, $b$, and $k$ are constants. What is the value of $a + b + k$?",
    diagram: { type: "twoLineGraph", params: { intersection: { x: 2, y: 2 }, slope1: 2, slope2: -1, shadeRegion: "below-both", showIntersection: false, xRange: [-4, 8], yRange: [-6, 8], xTickInterval: 2, yTickInterval: 2, gridInterval: 1 } },
    choices: [
      // distractor: takes k = -2 from 2y = -2x + 8 without moving the x-term to the left side
      { id: "A", text: "$-2$" },
      // distractor: takes k = 1 by matching the slope -1 directly to -k, ignoring the factor of 2 on y
      { id: "B", text: "$1$" },
      { id: "C", text: "$2$" },
      // distractor: reads the y-intercept of the rising line as +2 instead of -2
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** The falling line is $y = -x + 4$; doubling gives $2y = -2x + 8$, so $2y + 2x \\leq 8$ and $k = 2$. The rising line is $y = 2x - 2$, so $a = 2$ and $b = -2$. Then $a + b + k = 2 - 2 + 2 = 2$.\n\n**The Full Solution:**\nStep 1: Identify which drawn line goes with which inequality. Solving $2y + kx \\leq 8$ for $y$ gives $y \\leq -\\dfrac{k}{2}x + 4$, so its boundary has $y$-intercept $4$. On the graph, the line through $(0, 4)$ is the falling line, which also passes through $(4, 0)$; its slope is $-1$. Then $-\\dfrac{k}{2} = -1$, so $k = 2$.\nStep 2: The other boundary, $y = ax + b$, is the rising line. It passes through $(0, -2)$ and $(1, 0)$, so $b = -2$ and $a = \\dfrac{0 - (-2)}{1 - 0} = 2$.\nStep 3: $a + b + k = 2 + (-2) + 2 = 2$. Check the shading: the region is below both lines, matching the two \"$\\leq$\" inequalities, and the test point $(2, 0)$ satisfies $0 \\leq 2$ and $0 + 4 \\leq 8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): writes $2y = -2x + 8$ and reads off $k = -2$, forgetting that $k$ is the coefficient after the $x$-term moves to the left side.\n* Choice B ($1$): matches the slope $-1$ to $-k$ directly, ignoring that $y$ carries a coefficient of $2$ in the given form.\n* Choice D ($6$): reads the rising line's $y$-intercept as $+2$, giving $a + b + k = 2 + 2 + 2$.\n\n**Test Day Takeaway:** Put each inequality in slope-intercept form first, use the $y$-intercepts to match equations to drawn lines, and only then read slopes from the grid.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "system-of-linear-inequalities",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-372",
    domain: "algebra",
    skills: ["inequalities"],
    difficulty: "hard",
    type: "fill-in",
    question: "$2x + y \\leq 24$\n$y \\geq 2x$\n$x \\geq 3$\n\nThe solutions to the given system of inequalities form a region in the $xy$-plane. What is the greatest possible value of $y$ for a point $(x, y)$ in this region?",
    correctAnswer: "18",
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**The correct answer is $18$.**\n\n**The Fast Way (~35s):** From the first inequality, $y \\leq 24 - 2x$, which is largest when $x$ is smallest. The smallest allowed $x$ is $3$, giving $y \\leq 18$; and $(3, 18)$ also satisfies $y \\geq 2x$. So the greatest $y$ is $18$.\n\n**The Full Solution:**\nStep 1: Rewrite the first inequality as $y \\leq 24 - 2x$. Because the coefficient of $x$ is negative, this upper bound on $y$ decreases as $x$ increases, so the largest possible $y$ comes from the smallest permitted $x$.\nStep 2: Find the permitted $x$-values. Combining $y \\geq 2x$ with $y \\leq 24 - 2x$ requires $2x \\leq 24 - 2x$, so $x \\leq 6$; together with $x \\geq 3$, the region has $3 \\leq x \\leq 6$. The smallest permitted $x$ is $3$.\nStep 3: At $x = 3$, the bound is $y \\leq 24 - 6 = 18$, and the lower bound is $y \\geq 6$, so $y$ can be as large as $18$. Check $(3, 18)$: $6 + 18 = 24 \\leq 24$, $18 \\geq 6$, and $3 \\geq 3$ all hold. $\\checkmark$\n\n**Common Mistakes:** Answering $12$ by taking the intersection of $y = 2x$ and $2x + y = 24$ at $(6, 12)$, which is the corner with the largest $x$, not the largest $y$; answering $24$ by setting $x = 0$, which violates $x \\geq 3$; answering $6$ by using $y = 2x$ at $x = 3$, the smallest $y$ at that $x$ rather than the largest.\n\n**Test Day Takeaway:** The extreme value of one coordinate over a bounded region occurs at a corner; check the corner where the binding constraint on that coordinate is tightest, not just the corner where two slanted lines cross.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "system-of-linear-inequalities",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── H.C. DISTANCE FORMULA (bank-alg-373..380) ───────────────────────────
  {
    id: "bank-alg-373",
    domain: "algebra",
    skills: ["coordinate-geometry"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The points $(-2, 1)$ and $(4, 9)$ are shown in the $xy$-plane. What is the distance, in units, between the two points?",
    diagram: { type: "coordinatePoints", params: { points: [[-2, 1], [4, 9]], xMin: -6, xMax: 6, yMin: -2, yMax: 10 } },
    choices: [
      // distractor: subtracts the two leg lengths, 8 - 6
      { id: "A", text: "$2$" },
      // distractor: uses only the vertical change
      { id: "B", text: "$8$" },
      { id: "C", text: "$10$" },
      // distractor: adds the two leg lengths instead of using the Pythagorean theorem
      { id: "D", text: "$14$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Distance Formula**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The horizontal change is $4 - (-2) = 6$ and the vertical change is $9 - 1 = 8$; a $6$-$8$ right triangle has hypotenuse $10$.\n\n**The Full Solution:**\nStep 1: The distance between $(x_1, y_1)$ and $(x_2, y_2)$ is $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$, the hypotenuse of the right triangle whose legs are the horizontal and vertical changes.\nStep 2: Horizontal change: $4 - (-2) = 6$. Vertical change: $9 - 1 = 8$.\nStep 3: Distance $= \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$. Check: $6$-$8$-$10$ is twice the $3$-$4$-$5$ triple. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): subtracts the leg lengths, $8 - 6$, instead of combining their squares.\n* Choice B ($8$): reports only the vertical change and ignores the horizontal change.\n* Choice D ($14$): adds the legs, $6 + 8$, which measures a path along the grid rather than the straight-line distance.\n\n**Test Day Takeaway:** Distance in the plane is always a hypotenuse: find the two changes, square them, add, and take the square root, watching for the common Pythagorean triples.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-374",
    domain: "algebra",
    skills: ["coordinate-geometry"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane, what is the distance between the origin and the point $(-5, 12)$?",
    choices: [
      // distractor: subtracts the coordinates, 12 - 5
      { id: "A", text: "$7$" },
      { id: "B", text: "$13$" },
      // distractor: adds the coordinates, 5 + 12
      { id: "C", text: "$17$" },
      // distractor: forgets to take the square root
      { id: "D", text: "$169$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Distance Formula**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** From the origin, the legs are $5$ and $12$, and $5$-$12$-$13$ is a Pythagorean triple, so the distance is $13$.\n\n**The Full Solution:**\nStep 1: The origin is $(0, 0)$, so the horizontal change to $(-5, 12)$ is $-5$ and the vertical change is $12$.\nStep 2: Apply the distance formula: $\\sqrt{(-5)^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169}$. The negative sign disappears when squared.\nStep 3: $\\sqrt{169} = 13$. Check: $13^2 = 169 = 25 + 144$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): subtracts $5$ from $12$, treating the distance as a difference of coordinates.\n* Choice C ($17$): adds $5$ and $12$, the length of a path along the axes rather than the straight line.\n* Choice D ($169$): stops at $25 + 144$ and never takes the square root.\n\n**Test Day Takeaway:** The distance from the origin to $(a, b)$ is $\\sqrt{a^2 + b^2}$; a negative coordinate contributes exactly as its positive counterpart does.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-375",
    domain: "algebra",
    skills: ["coordinate-geometry"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, triangle $ABC$ has vertices $A(-4, 1)$, $B(5, 1)$, and $C(5, 13)$. What is the perimeter of triangle $ABC$?",
    choices: [
      // distractor: adds only the two legs and omits side AC
      { id: "A", text: "$21$" },
      // distractor: uses 12, the longer leg, in place of the hypotenuse 15
      { id: "B", text: "$33$" },
      { id: "C", text: "$36$" },
      // distractor: computes the area (1/2)(9)(12) instead of the perimeter
      { id: "D", text: "$54$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Distance Formula**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** $AB$ is horizontal with length $9$, $BC$ is vertical with length $12$, and $AC$ is the hypotenuse of a $9$-$12$-$15$ right triangle. Perimeter $= 9 + 12 + 15 = 36$.\n\n**The Full Solution:**\nStep 1: $A$ and $B$ share the $y$-coordinate $1$, so $AB = 5 - (-4) = 9$. $B$ and $C$ share the $x$-coordinate $5$, so $BC = 13 - 1 = 12$. These sides are perpendicular, so the triangle is a right triangle with the right angle at $B$.\nStep 2: Find $AC$ with the distance formula: $\\sqrt{(5 - (-4))^2 + (13 - 1)^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$.\nStep 3: Perimeter $= 9 + 12 + 15 = 36$. Check: $9$-$12$-$15$ is three times $3$-$4$-$5$, so $AC = 15$ is consistent. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($21$): adds only the two legs, $9 + 12$, and forgets the third side.\n* Choice B ($33$): uses $12$ for $AC$, as if the hypotenuse equaled the longer leg.\n* Choice D ($54$): computes $\\dfrac{1}{2}(9)(12)$, the area, instead of the sum of the side lengths.\n\n**Test Day Takeaway:** When two vertices share a coordinate, that side's length is a simple subtraction; save the distance formula for the slanted side, then add all three.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-376",
    domain: "algebra",
    skills: ["coordinate-geometry"],
    difficulty: "medium",
    type: "fill-in",
    question: "The points $(-5, -2)$ and $(7, 3)$ shown in the $xy$-plane are the endpoints of a diameter of a circle. What is the radius of the circle?",
    diagram: { type: "coordinatePoints", params: { points: [[-5, -2], [7, 3]], xMin: -8, xMax: 8, yMin: -4, yMax: 6 } },
    correctAnswer: "6.5",
    explanation: "**SAT Pattern: Distance Formula**\n\n**The correct answer is $6.5$.**\n\n**The Fast Way (~20s):** The changes are $7 - (-5) = 12$ and $3 - (-2) = 5$, so the diameter is $\\sqrt{144 + 25} = 13$ and the radius is $\\dfrac{13}{2} = 6.5$.\n\n**The Full Solution:**\nStep 1: The diameter is the distance between its endpoints. Horizontal change: $7 - (-5) = 12$. Vertical change: $3 - (-2) = 5$.\nStep 2: Diameter $= \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13$.\nStep 3: The radius is half the diameter: $\\dfrac{13}{2} = 6.5$. Check: $2(6.5) = 13$ and $13^2 = 169$. $\\checkmark$\n\n**Common Mistakes:** Entering $13$, the diameter, when the question asks for the radius; computing the changes as $7 - 5 = 2$ and $3 - 2 = 1$ by dropping the negative signs; adding the changes to get $17$ instead of using the distance formula.\n\n**Test Day Takeaway:** Subtracting a negative coordinate adds; after the distance formula, reread the question to see whether it wants the full length or half of it.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-377",
    domain: "algebra",
    skills: ["coordinate-geometry"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, the distance between the points $(k, 3)$ and $(2, -5)$ is $10$ units, where $k$ is a positive constant. What is the value of $k$?",
    choices: [
      // distractor: solves k - 2 = 6 as k = 6 - 2
      { id: "A", text: "$4$" },
      // distractor: reports the horizontal leg k - 2 instead of k
      { id: "B", text: "$6$" },
      { id: "C", text: "$8$" },
      // distractor: sets k - 2 = 10, ignoring the vertical leg
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Distance Formula**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** The vertical leg is $3 - (-5) = 8$ and the hypotenuse is $10$, so the horizontal leg is $6$ (a $6$-$8$-$10$ triangle). Then $k - 2 = 6$, so $k = 8$.\n\n**The Full Solution:**\nStep 1: Set up the distance formula: $\\sqrt{(k - 2)^2 + (3 - (-5))^2} = 10$, so $(k - 2)^2 + 64 = 100$.\nStep 2: Subtract $64$: $(k - 2)^2 = 36$, so $k - 2 = 6$ or $k - 2 = -6$, giving $k = 8$ or $k = -4$.\nStep 3: The question states $k$ is positive, so $k = 8$. Check: the points $(8, 3)$ and $(2, -5)$ have changes $6$ and $8$, and $\\sqrt{36 + 64} = 10$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): solves $k - 2 = 6$ as $k = 6 - 2$, subtracting instead of adding.\n* Choice B ($6$): stops at the leg length $k - 2 = 6$ and reports it as $k$.\n* Choice D ($12$): sets $k - 2 = 10$, treating the whole distance as the horizontal leg and ignoring the $8$-unit vertical change.\n\n**Test Day Takeaway:** Square the distance equation to remove the root, solve for the squared quantity, and keep both signs until the question's condition ($k > 0$) tells you which one to keep.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-378",
    domain: "algebra",
    skills: ["coordinate-geometry"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The points $(-3, 2)$ and $(5, 8)$ shown in the $xy$-plane are two adjacent vertices of a square. What is the perimeter of the square?",
    diagram: { type: "coordinatePoints", params: { points: [[-3, 2], [5, 8]], xMin: -6, xMax: 8, yMin: -2, yMax: 10 } },
    choices: [
      // distractor: reports the side length only
      { id: "A", text: "$10$" },
      { id: "B", text: "$40$" },
      // distractor: uses 8 + 6 = 14 as the side length
      { id: "C", text: "$56$" },
      // distractor: computes the area of the square
      { id: "D", text: "$100$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Distance Formula**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Adjacent vertices are the ends of one side. The changes are $8$ and $6$, so the side is $10$ and the perimeter is $4(10) = 40$.\n\n**The Full Solution:**\nStep 1: Adjacent vertices of a square are joined by a side, so the side length is the distance between the two points. Horizontal change: $5 - (-3) = 8$. Vertical change: $8 - 2 = 6$.\nStep 2: Side $= \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$.\nStep 3: A square has four equal sides, so the perimeter is $4 \\times 10 = 40$. Check: $40 \\div 4 = 10$ and $10^2 = 100 = 64 + 36$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($10$): stops at the side length and never multiplies by $4$.\n* Choice C ($56$): adds the changes, $8 + 6 = 14$, as the side length instead of using the distance formula, then multiplies by $4$.\n* Choice D ($100$): squares the side to get the area, $10^2$, rather than the perimeter.\n\n**Test Day Takeaway:** Translate the geometry word first: \"adjacent vertices\" means one side, \"opposite vertices\" means a diagonal; then compute the distance and apply the shape's formula.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-379",
    domain: "algebra",
    skills: ["coordinate-geometry"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The points $(-3, 4)$ and $(x, -2)$ in the $xy$-plane are $10$ units apart. What is the sum of all possible values of $x$?",
    choices: [
      // distractor: reports only the negative solution
      { id: "A", text: "$-11$" },
      { id: "B", text: "$-6$" },
      // distractor: reports only the positive solution
      { id: "C", text: "$5$" },
      // distractor: adds the absolute values of the two solutions, 5 + 11
      { id: "D", text: "$16$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Distance Formula**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** The vertical leg is $4 - (-2) = 6$ and the hypotenuse is $10$, so the horizontal leg is $8$: $x + 3 = \\pm 8$, giving $x = 5$ or $x = -11$. Their sum is $-6$.\n\n**The Full Solution:**\nStep 1: Apply the distance formula: $\\sqrt{(x - (-3))^2 + (-2 - 4)^2} = 10$, so $(x + 3)^2 + 36 = 100$.\nStep 2: Subtract $36$: $(x + 3)^2 = 64$. A squared quantity equal to $64$ can be $8$ or $-8$: $x + 3 = 8$ gives $x = 5$, and $x + 3 = -8$ gives $x = -11$. Both $(5, -2)$ and $(-11, -2)$ are $10$ units from $(-3, 4)$.\nStep 3: The sum of all possible values is $5 + (-11) = -6$. Check: the two solutions are symmetric about $x = -3$, so their sum is $2(-3) = -6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-11$): keeps only the solution from $x + 3 = -8$.\n* Choice C ($5$): keeps only the solution from $x + 3 = 8$, forgetting that a square has two roots.\n* Choice D ($16$): adds $5$ and $11$ as if both solutions were positive, ignoring the sign of $-11$.\n\n**Test Day Takeaway:** A distance condition produces a squared term with two roots; when the question says \"all possible values,\" find both and use the symmetry about the fixed coordinate as a check.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-380",
    domain: "algebra",
    skills: ["coordinate-geometry"],
    difficulty: "hard",
    type: "fill-in",
    question: "In the $xy$-plane, the point $(6, y)$ lies on the circle with center $(-2, 4)$ and radius $10$. If $y < 0$, what is the value of $y$?",
    correctAnswer: "-2",
    explanation: "**SAT Pattern: Distance Formula**\n\n**The correct answer is $-2$.**\n\n**The Fast Way (~25s):** A point on the circle is $10$ units from the center. The horizontal leg is $6 - (-2) = 8$, so the vertical leg is $6$: $y = 4 \\pm 6$, and the negative option is $y = -2$.\n\n**The Full Solution:**\nStep 1: Every point on a circle is one radius from the center, so the distance from $(6, y)$ to $(-2, 4)$ equals $10$: $\\sqrt{(6 - (-2))^2 + (y - 4)^2} = 10$.\nStep 2: Square both sides: $64 + (y - 4)^2 = 100$, so $(y - 4)^2 = 36$ and $y - 4 = 6$ or $y - 4 = -6$. This gives $y = 10$ or $y = -2$.\nStep 3: The condition $y < 0$ selects $y = -2$. Check: the distance from $(6, -2)$ to $(-2, 4)$ is $\\sqrt{8^2 + (-6)^2} = \\sqrt{64 + 36} = 10$. $\\checkmark$\n\n**Common Mistakes:** Entering $10$, the root that violates $y < 0$; computing the horizontal leg as $6 - 2 = 4$ by dropping the sign of $-2$, which leads to $(y - 4)^2 = 84$ and no clean answer; entering $-6$, the vertical leg, instead of the coordinate $y = 4 - 6$.\n\n**Test Day Takeaway:** \"On the circle\" means \"distance to the center equals the radius\"; set up that distance, solve the squared term for both roots, and let the stated condition pick the one to grid in.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "distance-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── H.C. MIDPOINT FORMULA (bank-alg-381..388) ───────────────────────────
  {
    id: "bank-alg-381",
    domain: "algebra",
    skills: ["coordinate-geometry"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The points $(-6, 3)$ and $(4, 9)$ are shown in the $xy$-plane. What is the midpoint of the line segment that has these two points as its endpoints?",
    diagram: { type: "coordinatePoints", params: { points: [[-6, 3], [4, 9]], xMin: -8, xMax: 6, yMin: -2, yMax: 10 } },
    choices: [
      // distractor: halves the differences of the coordinates instead of the sums
      { id: "A", text: "$(-5, -3)$" },
      // distractor: adds the coordinates but never divides by 2
      { id: "B", text: "$(-2, 12)$" },
      // distractor: halves the differences taken in the other order
      { id: "C", text: "$(5, 3)$" },
      { id: "D", text: "$(-1, 6)$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Midpoint Formula**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Average the $x$-coordinates and average the $y$-coordinates: $\\dfrac{-6 + 4}{2} = -1$ and $\\dfrac{3 + 9}{2} = 6$, so the midpoint is $(-1, 6)$.\n\n**The Full Solution:**\nStep 1: The midpoint of the segment from $(x_1, y_1)$ to $(x_2, y_2)$ is $\\left(\\dfrac{x_1 + x_2}{2}, \\dfrac{y_1 + y_2}{2}\\right)$, the point halfway along in each direction.\nStep 2: $x$-coordinate: $\\dfrac{-6 + 4}{2} = \\dfrac{-2}{2} = -1$. $y$-coordinate: $\\dfrac{3 + 9}{2} = \\dfrac{12}{2} = 6$.\nStep 3: The midpoint is $(-1, 6)$. Check: from $(-6, 3)$, moving $5$ right and $3$ up reaches $(-1, 6)$, and another $5$ right and $3$ up reaches $(4, 9)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-5, -3)$): halves the differences $-6 - 4$ and $3 - 9$; the midpoint uses sums, not differences.\n* Choice B ($(-2, 12)$): adds the coordinates correctly but skips the division by $2$.\n* Choice C ($(5, 3)$): halves the differences $4 - (-6)$ and $9 - 3$, which gives half the displacement rather than a location.\n\n**Test Day Takeaway:** A midpoint is an average in each coordinate: add the two values and divide by $2$; a difference gives a displacement, never a point.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "midpoint-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-382",
    domain: "algebra",
    skills: ["coordinate-geometry"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane, what is the midpoint of the line segment whose endpoints are $(-8, -1)$ and $(2, 7)$?",
    choices: [
      { id: "A", text: "$(-3, 3)$" },
      // distractor: halves the differences of the coordinates instead of the sums
      { id: "B", text: "$(-5, -4)$" },
      // distractor: adds the coordinates but never divides by 2
      { id: "C", text: "$(-6, 6)$" },
      // distractor: drops the negative sign on the x-coordinate
      { id: "D", text: "$(3, 3)$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Midpoint Formula**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $\\dfrac{-8 + 2}{2} = -3$ and $\\dfrac{-1 + 7}{2} = 3$, so the midpoint is $(-3, 3)$.\n\n**The Full Solution:**\nStep 1: The midpoint averages the endpoints coordinate by coordinate: $\\left(\\dfrac{x_1 + x_2}{2}, \\dfrac{y_1 + y_2}{2}\\right)$.\nStep 2: $x$: $\\dfrac{-8 + 2}{2} = \\dfrac{-6}{2} = -3$. $y$: $\\dfrac{-1 + 7}{2} = \\dfrac{6}{2} = 3$.\nStep 3: The midpoint is $(-3, 3)$. Check: it is $5$ units right and $4$ units up from $(-8, -1)$, and $(2, 7)$ is another $5$ right and $4$ up. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($(-5, -4)$): halves the differences $-8 - 2$ and $-1 - 7$ instead of the sums.\n* Choice C ($(-6, 6)$): adds the coordinates but forgets to divide by $2$.\n* Choice D ($(3, 3)$): loses the sign of $\\dfrac{-6}{2}$; the average of $-8$ and $2$ is negative.\n\n**Test Day Takeaway:** Add, then halve, in each coordinate, and keep the signs: the midpoint of a negative and a smaller positive is still negative.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "midpoint-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-383",
    domain: "algebra",
    skills: ["coordinate-geometry"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, the midpoint of the line segment with endpoints $(-5, k)$ and $(9, -3)$ is $(2, 4)$. What is the value of $k$?",
    choices: [
      // distractor: computes 4 - 3 without doubling the midpoint coordinate
      { id: "A", text: "$1$" },
      // distractor: doubles 4 but subtracts 3 instead of adding it
      { id: "B", text: "$5$" },
      // distractor: adds 3 to 4 without doubling first
      { id: "C", text: "$7$" },
      { id: "D", text: "$11$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Midpoint Formula**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The $y$-coordinates average to $4$: $\\dfrac{k + (-3)}{2} = 4$, so $k - 3 = 8$ and $k = 11$.\n\n**The Full Solution:**\nStep 1: Only the $y$-coordinate involves $k$. The midpoint's $y$-coordinate is the average of the endpoints' $y$-coordinates: $\\dfrac{k + (-3)}{2} = 4$.\nStep 2: Multiply both sides by $2$: $k - 3 = 8$. Add $3$: $k = 11$.\nStep 3: Check the $x$-coordinate for consistency: $\\dfrac{-5 + 9}{2} = 2$, matching the given midpoint. And $\\dfrac{11 + (-3)}{2} = 4$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($1$): computes $4 - 3$, never doubling the midpoint coordinate to undo the division by $2$.\n* Choice B ($5$): doubles to $8$ but then subtracts $3$ instead of adding it.\n* Choice C ($7$): adds $3$ to $4$ without first doubling.\n\n**Test Day Takeaway:** To recover a missing endpoint coordinate, double the midpoint coordinate and subtract the known endpoint coordinate: $k = 2(4) - (-3)$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "midpoint-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-384",
    domain: "algebra",
    skills: ["coordinate-geometry"],
    difficulty: "medium",
    type: "fill-in",
    question: "In the $xy$-plane, the midpoint of the line segment with endpoints $(a, -6)$ and $(3, b)$ is $(-2, 1)$. What is the value of $a - b$?",
    correctAnswer: "-15",
    explanation: "**SAT Pattern: Midpoint Formula**\n\n**The correct answer is $-15$.**\n\n**The Fast Way (~20s):** Double each midpoint coordinate and subtract the known endpoint: $a = 2(-2) - 3 = -7$ and $b = 2(1) - (-6) = 8$. Then $a - b = -7 - 8 = -15$.\n\n**The Full Solution:**\nStep 1: Write the midpoint conditions. $x$: $\\dfrac{a + 3}{2} = -2$. $y$: $\\dfrac{-6 + b}{2} = 1$.\nStep 2: Solve each. From the first, $a + 3 = -4$, so $a = -7$. From the second, $-6 + b = 2$, so $b = 8$.\nStep 3: $a - b = -7 - 8 = -15$. Check: the midpoint of $(-7, -6)$ and $(3, 8)$ is $\\left(\\dfrac{-4}{2}, \\dfrac{2}{2}\\right) = (-2, 1)$. $\\checkmark$\n\n**Common Mistakes:** Entering $1$, the value of $a + b$, when the question asks for $a - b$; entering $15$ by dropping the sign; solving $a + 3 = -2$ without doubling, which gives $a = -5$; solving $-6 + b = 1$ to get $b = 7$ for the same reason.\n\n**Test Day Takeaway:** Handle the two coordinates as two separate equations, double before you subtract, and reread whether the question wants a sum, a difference, or a product of the unknowns.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "midpoint-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-385",
    domain: "algebra",
    skills: ["coordinate-geometry"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A line segment in the $xy$-plane has one endpoint at $(-4, 7)$ and its midpoint at $(1, 2)$. What are the coordinates of the other endpoint?",
    choices: [
      // distractor: steps from the midpoint back toward the known endpoint instead of beyond it
      { id: "A", text: "$(-9, 12)$" },
      // distractor: finds the midpoint of the two given points
      { id: "B", text: "$\\left(-\\dfrac{3}{2}, \\dfrac{9}{2}\\right)$" },
      // distractor: reports the displacement from the endpoint to the midpoint, not a location
      { id: "C", text: "$(5, -5)$" },
      { id: "D", text: "$(6, -3)$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Midpoint Formula**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** From $(-4, 7)$ to the midpoint $(1, 2)$ is $5$ right and $5$ down; repeat that step from the midpoint to reach $(6, -3)$.\n\n**The Full Solution:**\nStep 1: Let the other endpoint be $(x, y)$. The midpoint conditions are $\\dfrac{-4 + x}{2} = 1$ and $\\dfrac{7 + y}{2} = 2$.\nStep 2: Solve each: $-4 + x = 2$ gives $x = 6$; $7 + y = 4$ gives $y = -3$.\nStep 3: The other endpoint is $(6, -3)$. Check: the midpoint of $(-4, 7)$ and $(6, -3)$ is $\\left(\\dfrac{2}{2}, \\dfrac{4}{2}\\right) = (1, 2)$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-9, 12)$): moves $5$ left and $5$ up from the known endpoint, stepping away from the midpoint instead of through it.\n* Choice B ($\\left(-\\dfrac{3}{2}, \\dfrac{9}{2}\\right)$): averages the two given points, treating the midpoint as an endpoint.\n* Choice C ($(5, -5)$): reports the change from the endpoint to the midpoint rather than adding that change to the midpoint.\n\n**Test Day Takeaway:** The midpoint is the center of the segment, so the far endpoint is $2(\\text{midpoint}) - (\\text{known endpoint})$ in each coordinate; verify by recomputing the midpoint.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "midpoint-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-386",
    domain: "algebra",
    skills: ["coordinate-geometry"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The points $(-7, 5)$ and $(3, -1)$ shown in the $xy$-plane are the endpoints of a diameter of a circle. What are the coordinates of the center of the circle?",
    diagram: { type: "coordinatePoints", params: { points: [[-7, 5], [3, -1]], xMin: -8, xMax: 6, yMin: -4, yMax: 8 } },
    choices: [
      // distractor: halves the differences of the coordinates instead of the sums
      { id: "A", text: "$(-5, 3)$" },
      { id: "B", text: "$(-2, 2)$" },
      // distractor: adds the coordinates without dividing by 2
      { id: "C", text: "$(-4, 4)$" },
      // distractor: halves the differences taken in the other order
      { id: "D", text: "$(5, -3)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Midpoint Formula**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** The center of a circle is the midpoint of any diameter: $\\left(\\dfrac{-7 + 3}{2}, \\dfrac{5 + (-1)}{2}\\right) = (-2, 2)$.\n\n**The Full Solution:**\nStep 1: A diameter passes through the center, and the center is equidistant from the diameter's endpoints, so the center is the midpoint of the diameter.\nStep 2: $x$: $\\dfrac{-7 + 3}{2} = \\dfrac{-4}{2} = -2$. $y$: $\\dfrac{5 + (-1)}{2} = \\dfrac{4}{2} = 2$.\nStep 3: The center is $(-2, 2)$. Check: from the center, $(-7, 5)$ is $5$ left and $3$ up, and $(3, -1)$ is $5$ right and $3$ down, so both endpoints are the same distance from the center. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-5, 3)$): halves $-7 - 3$ and $5 - (-1)$, the differences rather than the sums.\n* Choice C ($(-4, 4)$): adds the coordinates but skips the division by $2$.\n* Choice D ($(5, -3)$): halves the differences in the opposite order, giving a displacement with the wrong meaning.\n\n**Test Day Takeaway:** \"Endpoints of a diameter\" is a midpoint question in disguise: average the coordinates to find the center.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "midpoint-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-387",
    domain: "algebra",
    skills: ["coordinate-geometry"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, point $M(3, -1)$ is the midpoint of segment $PQ$, and point $N(7, 4)$ is the midpoint of segment $QR$. If point $P$ has coordinates $(-2, 3)$, what are the coordinates of point $R$?",
    choices: [
      // distractor: finds the midpoint of M and N
      { id: "A", text: "$\\left(5, \\dfrac{3}{2}\\right)$" },
      // distractor: stops after finding Q
      { id: "B", text: "$(8, -5)$" },
      // distractor: reflects P through N instead of reflecting Q through N
      { id: "C", text: "$(16, 5)$" },
      { id: "D", text: "$(6, 13)$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Midpoint Formula**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** $Q = 2M - P = (6 + 2, -2 - 3) = (8, -5)$; then $R = 2N - Q = (14 - 8, 8 + 5) = (6, 13)$.\n\n**The Full Solution:**\nStep 1: Find $Q$ from the first midpoint. Since $M$ is the midpoint of $PQ$, each coordinate of $Q$ is twice the coordinate of $M$ minus the coordinate of $P$: $Q = (2(3) - (-2), 2(-1) - 3) = (8, -5)$.\nStep 2: Find $R$ from the second midpoint. Since $N$ is the midpoint of $QR$: $R = (2(7) - 8, 2(4) - (-5)) = (6, 13)$.\nStep 3: Check both midpoints. Midpoint of $P(-2, 3)$ and $Q(8, -5)$: $\\left(\\dfrac{6}{2}, \\dfrac{-2}{2}\\right) = (3, -1) = M$. Midpoint of $Q(8, -5)$ and $R(6, 13)$: $\\left(\\dfrac{14}{2}, \\dfrac{8}{2}\\right) = (7, 4) = N$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\left(5, \\dfrac{3}{2}\\right)$): averages $M$ and $N$, but neither midpoint is an endpoint of a segment with the other.\n* Choice B ($(8, -5)$): correctly finds $Q$ but stops there instead of continuing to $R$.\n* Choice C ($(16, 5)$): computes $2N - P$, reflecting the wrong point through $N$; $N$ is the midpoint of $QR$, not $PR$.\n\n**Test Day Takeaway:** Chain midpoint problems one segment at a time, using endpoint $= 2(\\text{midpoint}) - (\\text{other endpoint})$, and confirm each recovered point by recomputing its midpoint.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "midpoint-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-388",
    domain: "algebra",
    skills: ["coordinate-geometry"],
    difficulty: "hard",
    type: "fill-in",
    question: "In the $xy$-plane, the midpoint of the line segment with endpoints $(c, 3c)$ and $(2c + 9, -c)$ is $(k, 6)$, where $c$ and $k$ are constants. What is the value of $k$?",
    correctAnswer: "13.5",
    explanation: "**SAT Pattern: Midpoint Formula**\n\n**The correct answer is $13.5$.**\n\n**The Fast Way (~30s):** The $y$-coordinate of the midpoint is $\\dfrac{3c + (-c)}{2} = c$, so $c = 6$. Then $k = \\dfrac{c + (2c + 9)}{2} = \\dfrac{3(6) + 9}{2} = \\dfrac{27}{2} = 13.5$.\n\n**The Full Solution:**\nStep 1: Use the known midpoint coordinate to find $c$. The $y$-coordinates of the endpoints are $3c$ and $-c$, so the midpoint's $y$-coordinate is $\\dfrac{3c - c}{2} = c$. It is given as $6$, so $c = 6$.\nStep 2: Now write the $x$-coordinate of the midpoint in terms of $c$: $\\dfrac{c + (2c + 9)}{2} = \\dfrac{3c + 9}{2}$.\nStep 3: Substitute $c = 6$: $k = \\dfrac{18 + 9}{2} = \\dfrac{27}{2} = 13.5$. Check: the endpoints are $(6, 18)$ and $(21, -6)$, whose midpoint is $\\left(\\dfrac{27}{2}, \\dfrac{12}{2}\\right) = (13.5, 6)$. $\\checkmark$\n\n**Common Mistakes:** Entering $6$, the value of $c$, instead of $k$; computing the midpoint's $y$-coordinate as $\\dfrac{3c - c}{2} = 2c$ by forgetting to divide, which gives $c = 3$ and $k = 9$; entering $27$ by forgetting to halve $3c + 9$.\n\n**Test Day Takeaway:** When a midpoint has one known coordinate, use that coordinate first to pin down the parameter, then feed the parameter into the other coordinate.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "midpoint-formula",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // ─── H.E. healthy-push tail (bank-alg-389..390) ────────────────────────────
  {
    id: "bank-alg-389",
    domain: "algebra",
    skills: ["inequalities"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A freight elevator has a maximum load of $1{,}500$ kilograms. A worker who weighs $90$ kilograms will ride the elevator with $n$ identical crates that each weigh $55$ kilograms. What is the greatest possible value of $n$?",
    choices: [
      { id: "A", text: "$25$" },
      // distractor: rounds 25.6 up instead of down
      { id: "B", text: "$26$" },
      // distractor: ignores the worker: 1500/55 rounded down
      { id: "C", text: "$27$" },
      // distractor: adds the worker to the limit: 1590/55 rounded down
      { id: "D", text: "$28$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: One-Variable Linear Inequality**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** The crates may weigh at most $1{,}500 - 90 = 1{,}410$ kilograms, and $\\dfrac{1{,}410}{55} \\approx 25.6$, so at most $25$ whole crates fit.\n\n**The Full Solution:**\nStep 1: Translate the limit into an inequality. The total load is the worker plus the crates: $90 + 55n \\leq 1{,}500$.\nStep 2: Subtract $90$: $55n \\leq 1{,}410$. Divide by $55$: $n \\leq 25.6\\overline{36}$.\nStep 3: The number of crates must be a whole number, so the greatest possible $n$ is $25$. Check: $90 + 55(25) = 1{,}465 \\leq 1{,}500$, while $90 + 55(26) = 1{,}520 > 1{,}500$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($26$): rounds $25.6$ up; the $26$th crate pushes the load to $1{,}520$ kilograms, over the limit.\n* Choice C ($27$): divides $1{,}500$ by $55$ and ignores the worker's $90$ kilograms.\n* Choice D ($28$): adds the worker's weight to the limit instead of subtracting it, dividing $1{,}590$ by $55$.\n\n**Test Day Takeaway:** For a \"greatest number that fits\" question, subtract the fixed part from the limit, divide by the per-item amount, and round down; then confirm one more item breaks the limit.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "one-variable-linear-inequality",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  {
    id: "bank-alg-390",
    domain: "algebra",
    skills: ["inequalities"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A landscaping crew has at most $30$ hours available to plant trees and shrubs. Planting a tree takes $2.5$ hours, and planting a shrub takes $0.5$ hour. A client requires that the number of shrubs planted be at least twice the number of trees planted. If $t$ is the number of trees and $s$ is the number of shrubs, which of the following systems of inequalities represents this situation?",
    choices: [
      // distractor: puts the factor of 2 on the wrong variable in the ratio condition
      { id: "A", text: "$5t + s \\leq 60$ and $2s \\geq t$" },
      { id: "B", text: "$5t + s \\leq 60$ and $s \\geq 2t$" },
      // distractor: reverses the time constraint
      { id: "C", text: "$5t + s \\geq 60$ and $s \\geq 2t$" },
      // distractor: swaps the time coefficients of trees and shrubs
      { id: "D", text: "$t + 5s \\leq 60$ and $s \\geq 2t$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: System of Linear Inequalities**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** Time: $2.5t + 0.5s \\leq 30$; doubling gives $5t + s \\leq 60$. \"Shrubs at least twice the trees\": $s \\geq 2t$.\n\n**The Full Solution:**\nStep 1: Build the time constraint. Trees use $2.5t$ hours and shrubs use $0.5s$ hours, and the total cannot exceed $30$: $2.5t + 0.5s \\leq 30$. Multiplying every term by $2$ (a positive number, so the direction is unchanged) gives the equivalent form $5t + s \\leq 60$, which is how the choices are written.\nStep 2: Build the ratio constraint. \"The number of shrubs is at least twice the number of trees\" compares $s$ to $2t$: $s \\geq 2t$. The factor of $2$ multiplies the trees because trees are the smaller quantity being doubled.\nStep 3: The system is $5t + s \\leq 60$ and $s \\geq 2t$. Check with $t = 4$, $s = 10$: time $2.5(4) + 0.5(10) = 10 + 5 = 15 \\leq 30$ hours, or in the scaled form $5(4) + 10 = 30 \\leq 60$; and $10 \\geq 2(4) = 8$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5t + s \\leq 60$ and $2s \\geq t$): doubles the shrubs instead of the trees, which allows, for example, $s = 3$ with $t = 5$, far fewer shrubs than trees.\n* Choice C ($5t + s \\geq 60$ and $s \\geq 2t$): requires the crew to use at least $30$ hours rather than at most $30$.\n* Choice D ($t + 5s \\leq 60$ and $s \\geq 2t$): assigns $2.5$ hours to each shrub and $0.5$ hour to each tree, the reverse of the given times.\n\n**Test Day Takeaway:** For \"A is at least twice B,\" write $A \\geq 2B$ and test it with easy numbers; for a time budget, check whether the choices have been scaled by a constant before you match coefficients.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-of-linear-inequalities",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-16"
  },

  // === TIER 0 BANK GROWTH (2026-05-21): 8 algebra patterns @ 3 items → @ 5 items ===

  {
    id: "bank-alg-391",
    domain: "algebra",
    skills: ["function-evaluation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $h$ is defined by $h(x) = 7 - 3x$. What is the value of $h(-2)$?",
    choices: [
      // distractor: negates the entire result
      { id: "A", text: "$-13$" },
      // distractor: subtracts before multiplying: (7 - 3)(-2)
      { id: "B", text: "$-8$" },
      // distractor: substitutes 2 instead of -2
      { id: "C", text: "$1$" },
      { id: "D", text: "$13$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Replace $x$ with $-2$: $7 - 3(-2) = 7 + 6 = 13$.\n\n**The Full Solution:**\nStep 1: $h(-2)$ means the output of $h$ when the input is $-2$. Substitute $-2$ for every $x$ in the rule, using parentheses to protect the sign: $h(-2) = 7 - 3(-2)$.\nStep 2: Multiply first: $3(-2) = -6$, so the expression is $7 - (-6)$.\nStep 3: Subtracting a negative adds: $7 + 6 = 13$. Check: the graph of $h$ has slope $-3$, so moving from $x = 0$ (where $h = 7$) to $x = -2$ raises the output by $3 \\times 2 = 6$, to $13$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-13$): applies a negative to the whole result, as though $h(-2) = -h(2)$.\n* Choice B ($-8$): subtracts $7 - 3$ first and then multiplies by $-2$, ignoring the order of operations.\n* Choice C ($1$): substitutes $2$ instead of $-2$, giving $7 - 6$.\n\n**Test Day Takeaway:** Substitute with parentheses around a negative input, multiply before subtracting, and remember that subtracting a negative product raises the value.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-evaluation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-392",
    domain: "algebra",
    skills: ["function-evaluation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $g$ is defined by $g(x) = 3x^2 - 5x - 4$. What is the value of $g(-2)$?",
    choices: [
      // distractor: evaluates (-2)^2 as -4
      { id: "A", text: "$-6$" },
      // distractor: evaluates -5(-2) as -10
      { id: "B", text: "$-2$" },
      { id: "C", text: "$18$" },
      // distractor: drops the constant term -4
      { id: "D", text: "$22$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Function Evaluation**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $g(-2) = 3(-2)^2 - 5(-2) - 4 = 12 + 10 - 4 = 18$.\n\n**The Full Solution:**\nStep 1: Substitute $-2$ for $x$ with parentheses: $g(-2) = 3(-2)^2 - 5(-2) - 4$.\nStep 2: Evaluate each term. $(-2)^2 = 4$, so $3(-2)^2 = 12$. Next, $-5(-2) = +10$. The constant stays $-4$.\nStep 3: Combine: $12 + 10 - 4 = 18$. Check: $g(2) = 12 - 10 - 4 = -2$, and the two values differ by $20 = 2 \\cdot 5 \\cdot 2$, exactly the change caused by the $-5x$ term flipping sign. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): treats $(-2)^2$ as $-4$, giving $-12 + 10 - 4$.\n* Choice B ($-2$): writes $-5(-2)$ as $-10$, giving $12 - 10 - 4$; this is actually $g(2)$.\n* Choice D ($22$): forgets the constant term, stopping at $12 + 10$.\n\n**Test Day Takeaway:** With a negative input, square it inside parentheses so the result is positive, and watch for the double negative in a term like $-5x$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-evaluation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-393",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "For which of the following equations is there no value of $x$ that makes the equation true?",
    choices: [
      // distractor: is an identity, true for every x
      { id: "A", text: "$5(x + 2) = 5x + 10$" },
      { id: "B", text: "$5(x + 2) = 5x + 7$" },
      // distractor: has exactly one solution, x = 0
      { id: "C", text: "$5(x + 2) = 4x + 10$" },
      // distractor: has exactly one solution, x = -3
      { id: "D", text: "$5(x + 2) = 3x + 4$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Expand the left side: $5x + 10$. An equation has no solution when the $x$-terms match but the constants differ; $5x + 10 = 5x + 7$ reduces to $10 = 7$, which is false.\n\n**The Full Solution:**\nStep 1: Distribute on the left of each choice: $5(x + 2) = 5x + 10$. Compare with each right side.\nStep 2: Choice B becomes $5x + 10 = 5x + 7$. Subtracting $5x$ from both sides leaves $10 = 7$, a false statement with no $x$ remaining. No value of $x$ can make it true.\nStep 3: Confirm the others have solutions. Choice A: $5x + 10 = 5x + 10$ is true for every $x$. Choice C: $5x + 10 = 4x + 10$ gives $x = 0$. Choice D: $5x + 10 = 3x + 4$ gives $2x = -6$, so $x = -3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5(x + 2) = 5x + 10$): has the same coefficient on both sides, which can look like \"no solution,\" but the constants also match, so it is an identity with infinitely many solutions.\n* Choice C ($5(x + 2) = 4x + 10$): has different $x$-coefficients, so it has exactly one solution, $x = 0$.\n* Choice D ($5(x + 2) = 3x + 4$): also has different $x$-coefficients and one solution, $x = -3$.\n\n**Test Day Takeaway:** Same $x$-coefficient and same constant means infinitely many solutions; same $x$-coefficient and different constant means none; different $x$-coefficients means exactly one.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "identifying-identity-contradiction-equations",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-394",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$6(x + 4) - 2x = 4(x + c) + 4$\n\nIn the given equation, $c$ is a constant. If the equation has infinitely many solutions, what is the value of $c$?",
    choices: [
      { id: "A", text: "$5$" },
      // distractor: divides 24 by 4 and ignores the +4 on the right side
      { id: "B", text: "$6$" },
      // distractor: adds 4 to 24 before dividing by 4
      { id: "C", text: "$7$" },
      // distractor: subtracts 4 from 24 but never divides by 4
      { id: "D", text: "$20$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Identifying Identity / Contradiction Equations**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Left side: $6x + 24 - 2x = 4x + 24$. Right side: $4x + 4c + 4$. The $x$-terms already match, so the constants must match: $4c + 4 = 24$, giving $c = 5$.\n\n**The Full Solution:**\nStep 1: Simplify each side. Left: $6(x + 4) - 2x = 6x + 24 - 2x = 4x + 24$. Right: $4(x + c) + 4 = 4x + 4c + 4$.\nStep 2: An equation has infinitely many solutions only when both sides are the same expression. The $x$-coefficients are both $4$, so the constants must be equal: $24 = 4c + 4$.\nStep 3: Subtract $4$: $4c = 20$, so $c = 5$. Check: with $c = 5$ the right side is $4x + 24$, identical to the left side, so every $x$ works. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($6$): matches $4c$ to $24$ and forgets the extra $+4$ on the right side.\n* Choice C ($7$): adds $4$ to $24$ instead of subtracting it, solving $4c = 28$.\n* Choice D ($20$): correctly gets $4c = 20$ but reports $20$ without dividing by $4$.\n\n**Test Day Takeaway:** Simplify both sides fully, then force the two sides to be identical: equal $x$-coefficients and equal constants; the constant condition is the one that determines $c$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "identifying-identity-contradiction-equations",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-395",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The graph of line $k$ in the $xy$-plane is shown. Line $k$ passes through the points $(-2, -1)$ and $(2, 5)$. Which of the following is an equation of line $k$?",
    diagram: { type: "linearGraph", params: { slope: 1.5, yIntercept: 2, xRange: [-6, 6], yRange: [-6, 8], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[-2, -1], [2, 5]], label: "k" } },
    choices: [
      { id: "A", text: "$y = \\dfrac{3}{2}x + 2$" },
      // distractor: inverts the slope (run over rise)
      { id: "B", text: "$y = \\dfrac{2}{3}x + 2$" },
      // distractor: uses the y-coordinate of the first point as the y-intercept
      { id: "C", text: "$y = \\dfrac{3}{2}x - 1$" },
      // distractor: gives the slope the wrong sign for a rising line
      { id: "D", text: "$y = -\\dfrac{3}{2}x + 2$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Slope $= \\dfrac{5 - (-1)}{2 - (-2)} = \\dfrac{6}{4} = \\dfrac{3}{2}$. The line crosses the $y$-axis at $(0, 2)$, so $y = \\dfrac{3}{2}x + 2$.\n\n**The Full Solution:**\nStep 1: Compute the slope from the two points: $m = \\dfrac{\\Delta y}{\\Delta x} = \\dfrac{5 - (-1)}{2 - (-2)} = \\dfrac{6}{4} = \\dfrac{3}{2}$. The line rises from left to right, so a positive slope is expected.\nStep 2: Find the $y$-intercept by substituting one point into $y = \\dfrac{3}{2}x + b$. Using $(2, 5)$: $5 = \\dfrac{3}{2}(2) + b = 3 + b$, so $b = 2$.\nStep 3: The equation is $y = \\dfrac{3}{2}x + 2$. Check with the other point: $\\dfrac{3}{2}(-2) + 2 = -3 + 2 = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = \\dfrac{2}{3}x + 2$): divides run by rise, inverting the slope; it fails at $(2, 5)$ since $\\dfrac{4}{3} + 2 \\neq 5$.\n* Choice C ($y = \\dfrac{3}{2}x - 1$): has the right slope but takes $-1$, the $y$-value of a point with $x = -2$, as the $y$-intercept.\n* Choice D ($y = -\\dfrac{3}{2}x + 2$): flips the sign of the slope, describing a line that falls from left to right.\n\n**Test Day Takeaway:** Slope is rise over run between the two points, then solve for $b$ with one point and confirm with the other; the graph's direction tells you the sign to expect.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "line-from-two-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-396",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Two input-output pairs of the linear function $h$ are shown in the table. What is the value of $h(9)$?",
    diagram: { type: "dataTable", params: { headers: ["x", "h(x)"], rows: [["1", "4"], ["5", "16"]] } },
    choices: [
      // distractor: adds the change in x (4) to 16 instead of the change in h
      { id: "A", text: "$20$" },
      // distractor: uses h(x) = 3x, dropping the y-intercept
      { id: "B", text: "$27$" },
      { id: "C", text: "$28$" },
      // distractor: measures the step from x = 1 instead of from x = 5, adding 3(8) to 16
      { id: "D", text: "$40$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Line from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The rate is $\\dfrac{16 - 4}{5 - 1} = 3$ per unit of $x$. From $x = 5$ to $x = 9$ is $4$ more units, so $h(9) = 16 + 3(4) = 28$.\n\n**The Full Solution:**\nStep 1: A linear function has a constant rate of change. From the table, slope $= \\dfrac{16 - 4}{5 - 1} = \\dfrac{12}{4} = 3$.\nStep 2: Write the rule. Using $(1, 4)$ in $h(x) = 3x + b$: $4 = 3 + b$, so $b = 1$ and $h(x) = 3x + 1$.\nStep 3: $h(9) = 3(9) + 1 = 28$. Check with the second row: $h(5) = 15 + 1 = 16$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($20$): adds the change in $x$, which is $4$, to $16$ instead of the change in $h$, which is $3 \\times 4 = 12$.\n* Choice B ($27$): uses $h(x) = 3x$ and forgets the intercept $1$.\n* Choice D ($40$): steps from $x = 1$ by $8$ units but starts from $h = 16$, the value at $x = 5$; the starting value and starting input must come from the same row.\n\n**Test Day Takeaway:** Two rows of a linear table give the slope; then either write the full rule or step forward from the nearer row by slope times the change in $x$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "line-from-two-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-397",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$9x - 14 = 5x + 10$\n\nWhat value of $x$ is the solution to the given equation?",
    choices: [
      // distractor: moves the constant with the wrong sign: 4x = 10 - 14
      { id: "A", text: "$-1$" },
      // distractor: subtracts 10 from 14 instead of adding: 4x = 4
      { id: "B", text: "$1$" },
      // distractor: adds 5x to 9x instead of subtracting: 14x = 24
      { id: "C", text: "$\\dfrac{12}{7}$" },
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Subtract $5x$ and add $14$: $4x = 24$, so $x = 6$.\n\n**The Full Solution:**\nStep 1: Gather the $x$-terms on one side. Subtract $5x$ from both sides: $4x - 14 = 10$.\nStep 2: Gather the constants on the other side. Add $14$ to both sides: $4x = 24$.\nStep 3: Divide by $4$: $x = 6$. Check: left side $9(6) - 14 = 40$; right side $5(6) + 10 = 40$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-1$): moves $-14$ across as $-14$ instead of $+14$, giving $4x = -4$.\n* Choice B ($1$): subtracts $10$ from $14$ instead of adding them, giving $4x = 4$.\n* Choice C ($\\dfrac{12}{7}$): adds $5x$ to $9x$ instead of subtracting, giving $14x = 24$.\n\n**Test Day Takeaway:** Move variables to one side and constants to the other by doing the opposite operation on both sides, then plug the answer back into both sides to confirm they match.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-equation-with-variables-on-both-sides",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-398",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$5 - 4x = 2x + 23$\n\nWhat value of $x$ is the solution to the given equation?",
    choices: [
      // distractor: combines -4x and 2x as -2x
      { id: "A", text: "$-9$" },
      { id: "B", text: "$-3$" },
      // distractor: drops the sign when dividing: 6x = 18
      { id: "C", text: "$3$" },
      // distractor: adds the constants and divides by 2
      { id: "D", text: "$14$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Linear Equation with Variables on Both Sides**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Subtract $2x$ and subtract $5$: $-6x = 18$, so $x = -3$.\n\n**The Full Solution:**\nStep 1: Subtract $2x$ from both sides to collect the $x$-terms: $5 - 6x = 23$.\nStep 2: Subtract $5$ from both sides: $-6x = 18$.\nStep 3: Divide by $-6$: $x = -3$. Check: left side $5 - 4(-3) = 5 + 12 = 17$; right side $2(-3) + 23 = 17$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): combines $-4x - 2x$ as $-2x$, then solves $-2x = 18$.\n* Choice C ($3$): reaches $-6x = 18$ but divides as if the coefficient were $+6$.\n* Choice D ($14$): adds $5$ and $23$ and divides by $2$, ignoring the $-4x$ term entirely.\n\n**Test Day Takeaway:** When the variable has a negative coefficient, keep the sign attached through every step, and finish by checking that both sides give the same number.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-equation-with-variables-on-both-sides",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-399",
    domain: "algebra",
    skills: ["distributive-property"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The equation $(x + 7)(x - 3) = x^2 + bx - 21$ is true for all values of $x$, where $b$ is a constant. What is the value of $b$?",
    choices: [
      // distractor: reports the constant term instead of the x-coefficient
      { id: "A", text: "$-21$" },
      // distractor: gets the sign of the middle term wrong (-7x + 3x)
      { id: "B", text: "$-4$" },
      { id: "C", text: "$4$" },
      // distractor: adds 7 and 3 without regard to sign
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** The $x$-coefficient of $(x + 7)(x - 3)$ is $7 + (-3) = 4$, so $b = 4$.\n\n**The Full Solution:**\nStep 1: Expand the left side: $(x + 7)(x - 3) = x^2 - 3x + 7x - 21 = x^2 + 4x - 21$.\nStep 2: Since the equation holds for all $x$, the two sides are the same polynomial, so matching coefficients term by term: the $x$-coefficient on the left, $4$, equals $b$.\nStep 3: $b = 4$. Check: the constant terms also match, $-21 = -21$, and testing $x = 1$ gives $(8)(-2) = -16$ on the left and $1 + 4 - 21 = -16$ on the right. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-21$): reports the constant term, which is already given, instead of the $x$-coefficient.\n* Choice B ($-4$): computes the middle term as $-7x + 3x$, attaching the negative to the wrong factor.\n* Choice D ($10$): adds $7$ and $3$ as if both were positive.\n\n**Test Day Takeaway:** \"True for all values of $x$\" means match coefficients; the middle coefficient of $(x + p)(x + q)$ is $p + q$ with signs included.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "matching-coefficients",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-400",
    domain: "algebra",
    skills: ["distributive-property"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The equation $(2x + a)(x - 3) = 2x^2 - 5x + b$ is true for all values of $x$, where $a$ and $b$ are constants. What is the value of $a + b$?",
    choices: [
      { id: "A", text: "$-2$" },
      // distractor: writes the x-terms as -6x - ax, getting a = -1 and b = 3
      { id: "B", text: "$2$" },
      // distractor: drops the sign when computing b = -3a, using b = 3
      { id: "C", text: "$4$" },
      // distractor: writes the x-coefficient as a + 6, getting a = -11 and b = 33
      { id: "D", text: "$22$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Matching Coefficients**\n\n**Choice A is correct.**\n\n**The Fast Way (~25s):** Expanding gives $2x^2 + (a - 6)x - 3a$. Match: $a - 6 = -5$, so $a = 1$; then $b = -3a = -3$. So $a + b = -2$.\n\n**The Full Solution:**\nStep 1: Expand the left side: $(2x + a)(x - 3) = 2x^2 - 6x + ax - 3a = 2x^2 + (a - 6)x - 3a$.\nStep 2: Match the $x$-coefficients: $a - 6 = -5$, so $a = 1$. Match the constants: $b = -3a = -3$.\nStep 3: $a + b = 1 + (-3) = -2$. Check: $(2x + 1)(x - 3) = 2x^2 - 6x + x - 3 = 2x^2 - 5x - 3$, which matches $2x^2 - 5x + b$ with $b = -3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($2$): writes the $x$-terms as $-6x - ax$, solving $-6 - a = -5$ to get $a = -1$ and then $b = 3$.\n* Choice C ($4$): finds $a = 1$ correctly but takes $b = 3$, losing the negative in $-3a$.\n* Choice D ($22$): writes the $x$-coefficient as $a + 6$, giving $a = -11$ and $b = 33$.\n\n**Test Day Takeaway:** Expand fully, group the $x$-terms with their signs, and match one coefficient at a time; the constant term is the product of the constants, sign included.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "matching-coefficients",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-401",
    domain: "algebra",
    skills: ["distributive-property", "combining-like-terms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$4(3x - 2) - 5x = 2(x + 9) + 4$\n\nWhat value of $x$ is the solution to the given equation?",
    choices: [
      // distractor: adds 2x to 7x instead of subtracting: 9x = 30
      { id: "A", text: "$\\dfrac{10}{3}$" },
      // distractor: does not distribute the 4 to -2: 5x = 24
      { id: "B", text: "$\\dfrac{24}{5}$" },
      { id: "C", text: "$6$" },
      // distractor: reaches 5x = 30 but never divides by 5
      { id: "D", text: "$30$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Left: $12x - 8 - 5x = 7x - 8$. Right: $2x + 18 + 4 = 2x + 22$. Then $5x = 30$, so $x = 6$.\n\n**The Full Solution:**\nStep 1: Distribute and combine like terms on each side. Left: $4(3x - 2) - 5x = 12x - 8 - 5x = 7x - 8$. Right: $2(x + 9) + 4 = 2x + 18 + 4 = 2x + 22$.\nStep 2: Subtract $2x$ from both sides and add $8$ to both sides: $5x = 30$.\nStep 3: Divide by $5$: $x = 6$. Check: left side $4(16) - 30 = 34$; right side $2(15) + 4 = 34$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{10}{3}$): adds $2x$ to $7x$ instead of subtracting it, producing $9x = 30$.\n* Choice B ($\\dfrac{24}{5}$): distributes the $4$ to $3x$ but not to $-2$, leaving $7x - 2 = 2x + 22$ and $5x = 24$.\n* Choice D ($30$): stops at $5x = 30$ and reports the right side without dividing.\n\n**Test Day Takeaway:** Distribute to every term inside the parentheses, simplify each side completely, and only then move terms across; a quick substitution confirms the result.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "multi-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-402",
    domain: "algebra",
    skills: ["distributive-property", "combining-like-terms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$\\dfrac{2x - 5}{3} = \\dfrac{x + 7}{2}$\n\nWhat value of $x$ is the solution to the given equation?",
    choices: [
      // distractor: multiplies each side by its own denominator: 3(2x - 5) = 2(x + 7)
      { id: "A", text: "$\\dfrac{29}{4}$" },
      // distractor: subtracts 10 from 21 instead of adding
      { id: "B", text: "$11$" },
      // distractor: does not distribute after cross-multiplying: 4x - 5 = 3x + 7
      { id: "C", text: "$12$" },
      { id: "D", text: "$31$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Multi-Step Linear Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Cross-multiply: $2(2x - 5) = 3(x + 7)$, so $4x - 10 = 3x + 21$ and $x = 31$.\n\n**The Full Solution:**\nStep 1: Clear both denominators by multiplying both sides by $6$, the least common denominator: $6 \\cdot \\dfrac{2x - 5}{3} = 6 \\cdot \\dfrac{x + 7}{2}$, which gives $2(2x - 5) = 3(x + 7)$.\nStep 2: Distribute on both sides: $4x - 10 = 3x + 21$.\nStep 3: Subtract $3x$ and add $10$: $x = 31$. Check: left side $\\dfrac{62 - 5}{3} = \\dfrac{57}{3} = 19$; right side $\\dfrac{31 + 7}{2} = \\dfrac{38}{2} = 19$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{29}{4}$): multiplies each numerator by its own denominator, writing $3(2x - 5) = 2(x + 7)$, which leads to $4x = 29$; cross-multiplication pairs each numerator with the other fraction's denominator.\n* Choice B ($11$): reaches $4x - 10 = 3x + 21$ but then computes $21 - 10$ instead of $21 + 10$.\n* Choice C ($12$): cross-multiplies the $x$-terms only, writing $4x - 5 = 3x + 7$ without distributing to the constants.\n\n**Test Day Takeaway:** Multiply every term by the same common denominator, distribute to each term in the numerator, and verify by evaluating both fractions at your answer.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "multi-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-403",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Line $k$ is defined by $y = \\dfrac{2}{5}x - 3$. Line $j$ is perpendicular to line $k$ in the $xy$-plane. What is the slope of line $j$?",
    choices: [
      { id: "A", text: "$-\\dfrac{5}{2}$" },
      // distractor: changes only the sign, without taking the reciprocal
      { id: "B", text: "$-\\dfrac{2}{5}$" },
      // distractor: uses the same slope, as for a parallel line
      { id: "C", text: "$\\dfrac{2}{5}$" },
      // distractor: takes only the reciprocal, without changing the sign
      { id: "D", text: "$\\dfrac{5}{2}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The slope of $k$ is $\\dfrac{2}{5}$; a perpendicular line has the negative reciprocal slope, $-\\dfrac{5}{2}$.\n\n**The Full Solution:**\nStep 1: In slope-intercept form $y = mx + b$, the coefficient of $x$ is the slope, so line $k$ has slope $\\dfrac{2}{5}$.\nStep 2: Perpendicular lines have slopes whose product is $-1$. If $m_j \\cdot \\dfrac{2}{5} = -1$, then $m_j = -\\dfrac{5}{2}$.\nStep 3: Check the product: $\\dfrac{2}{5} \\cdot \\left(-\\dfrac{5}{2}\\right) = -1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\dfrac{2}{5}$): flips the sign but keeps the same fraction; the product with $\\dfrac{2}{5}$ is $-\\dfrac{4}{25}$, not $-1$.\n* Choice C ($\\dfrac{2}{5}$): is the slope of a line parallel to $k$, not perpendicular.\n* Choice D ($\\dfrac{5}{2}$): takes the reciprocal but not the negative; the product is $+1$.\n\n**Test Day Takeaway:** Perpendicular means \"flip and negate\": invert the fraction and change the sign, then multiply the two slopes to confirm you get $-1$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "perpendicular-slope",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-404",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of line $m$ in the $xy$-plane is shown. Which of the following is the slope of a line that is perpendicular to line $m$?",
    diagram: { type: "linearGraph", params: { slope: -0.5, yIntercept: 3, xRange: [-6, 6], yRange: [-4, 6], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 3], [4, 1]], label: "m" } },
    choices: [
      // distractor: takes the reciprocal but keeps the negative sign
      { id: "A", text: "$-2$" },
      // distractor: reports the slope of line m itself
      { id: "B", text: "$-\\dfrac{1}{2}$" },
      // distractor: changes only the sign, without taking the reciprocal
      { id: "C", text: "$\\dfrac{1}{2}$" },
      { id: "D", text: "$2$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Perpendicular Slope**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** Line $m$ drops $2$ units for every $4$ units to the right, so its slope is $-\\dfrac{1}{2}$. The perpendicular slope is the negative reciprocal, $2$.\n\n**The Full Solution:**\nStep 1: Read two points on line $m$ from the grid: $(0, 3)$ and $(4, 1)$. Slope $= \\dfrac{1 - 3}{4 - 0} = \\dfrac{-2}{4} = -\\dfrac{1}{2}$.\nStep 2: Perpendicular slopes multiply to $-1$: $m_{\\perp} \\cdot \\left(-\\dfrac{1}{2}\\right) = -1$, so $m_{\\perp} = 2$.\nStep 3: Check: $-\\dfrac{1}{2} \\cdot 2 = -1$. $\\checkmark$ A line of slope $2$ rises steeply while $m$ falls gently, consistent with a right angle between them.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): inverts the fraction but forgets to change the sign; the product with $-\\dfrac{1}{2}$ is $+1$.\n* Choice B ($-\\dfrac{1}{2}$): is the slope of $m$ itself, the answer to a different question.\n* Choice C ($\\dfrac{1}{2}$): changes the sign but not the fraction; a slope of $\\dfrac{1}{2}$ makes a shallow angle with $m$, not a right angle.\n\n**Test Day Takeaway:** From a graph, get the slope as rise over run between two grid points first, then flip and negate it for the perpendicular line.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "perpendicular-slope",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-405",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The graph of $y = -\\dfrac{3}{4}x + 6$ in the $xy$-plane has a $y$-intercept at $(0, b)$, where $b$ is a constant. What is the value of $b$?",
    choices: [
      // distractor: reports the slope
      { id: "A", text: "$-\\dfrac{3}{4}$" },
      // distractor: reports the slope without its sign
      { id: "B", text: "$\\dfrac{3}{4}$" },
      { id: "C", text: "$6$" },
      // distractor: reports the x-intercept
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** In $y = mx + b$, the constant term is the $y$-intercept, so $b = 6$.\n\n**The Full Solution:**\nStep 1: The $y$-intercept is where the graph crosses the $y$-axis, which is where $x = 0$.\nStep 2: Substitute $x = 0$: $y = -\\dfrac{3}{4}(0) + 6 = 6$. So the $y$-intercept is $(0, 6)$ and $b = 6$.\nStep 3: Check: the equation is already in slope-intercept form $y = mx + b$ with $m = -\\dfrac{3}{4}$ and $b = 6$, which agrees. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\dfrac{3}{4}$): reports the slope, the coefficient of $x$, instead of the constant term.\n* Choice B ($\\dfrac{3}{4}$): reports the slope with its sign dropped.\n* Choice D ($8$): solves $0 = -\\dfrac{3}{4}x + 6$ for $x$, which gives the $x$-intercept, not the $y$-intercept.\n\n**Test Day Takeaway:** In $y = mx + b$, the number multiplying $x$ is the slope and the lone constant is the $y$-intercept; setting $x = 0$ confirms it in one step.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "reading-slope-intercept-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-406",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "What is the slope of the graph of the equation $y = 12 - 2x$ in the $xy$-plane?",
    choices: [
      { id: "A", text: "$-2$" },
      // distractor: takes the negative reciprocal of the slope
      { id: "B", text: "$-\\dfrac{1}{2}$" },
      // distractor: drops the negative sign
      { id: "C", text: "$2$" },
      // distractor: reports the y-intercept
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Reading Slope-Intercept Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Rewrite as $y = -2x + 12$; the coefficient of $x$ is $-2$.\n\n**The Full Solution:**\nStep 1: Slope-intercept form is $y = mx + b$. The given equation lists the constant first, so reorder the terms: $y = 12 - 2x = -2x + 12$.\nStep 2: The slope $m$ is the coefficient of $x$, including its sign: $m = -2$.\nStep 3: Check with two points: at $x = 0$, $y = 12$; at $x = 1$, $y = 10$. The change is $10 - 12 = -2$ per unit of $x$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\dfrac{1}{2}$): gives the slope of a perpendicular line rather than of this line.\n* Choice C ($2$): takes the coefficient without its negative sign; the line falls, so its slope must be negative.\n* Choice D ($12$): reports the constant term, which is the $y$-intercept.\n\n**Test Day Takeaway:** When the equation is written out of the usual order, reorder it into $y = mx + b$ before reading the slope, and keep the sign that travels with $x$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "reading-slope-intercept-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // === TIER 1 BANK GROWTH (2026-05-21): algebra patterns @ 4 items → @ 10 items ===

  // --- absolute-value-equation (4 → 10) ---
  {
    id: "bank-alg-407",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Which of the following is the solution set of the equation $|x + 3| = 5$?",
    choices: [
      // distractor: adds 3 instead of subtracting when solving each case
      { id: "A", text: "$\\{-2, 8\\}$" },
      { id: "B", text: "$\\{-8, 2\\}$" },
      // distractor: keeps only the positive case
      { id: "C", text: "$\\{2\\}$" },
      // distractor: ignores the +3 inside the absolute value
      { id: "D", text: "$\\{-5, 5\\}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** $x + 3 = 5$ or $x + 3 = -5$, so $x = 2$ or $x = -8$.\n\n**The Full Solution:**\nStep 1: An absolute value equals $5$ when the expression inside is $5$ or $-5$. Split into two cases: $x + 3 = 5$ and $x + 3 = -5$.\nStep 2: Solve each: $x = 5 - 3 = 2$ and $x = -5 - 3 = -8$.\nStep 3: The solution set is $\\{-8, 2\\}$. Check: $|2 + 3| = |5| = 5$ and $|-8 + 3| = |-5| = 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\{-2, 8\\}$): adds $3$ to $\\pm 5$ instead of subtracting; $|8 + 3| = 11$, not $5$.\n* Choice C ($\\{2\\}$): solves only the positive case and misses $x = -8$.\n* Choice D ($\\{-5, 5\\}$): treats the equation as $|x| = 5$, ignoring the $+3$.\n\n**Test Day Takeaway:** An absolute value equation is two equations in disguise; solve both cases and substitute each answer back to confirm.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "absolute-value-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-408",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "What is the greater of the two solutions to the equation $|5 - 2x| = 13$?",
    choices: [
      // distractor: reports the lesser solution
      { id: "A", text: "$-4$" },
      // distractor: solves 2x = 13 - 5, dropping the sign on x
      { id: "B", text: "$4$" },
      { id: "C", text: "$9$" },
      // distractor: reaches 2x = 18 but never divides by 2
      { id: "D", text: "$18$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $5 - 2x = 13$ gives $x = -4$; $5 - 2x = -13$ gives $x = 9$. The greater is $9$.\n\n**The Full Solution:**\nStep 1: Split into two cases: $5 - 2x = 13$ or $5 - 2x = -13$.\nStep 2: Case 1: $-2x = 8$, so $x = -4$. Case 2: $-2x = -18$, so $x = 9$.\nStep 3: The greater solution is $9$. Check: $|5 - 2(9)| = |5 - 18| = |-13| = 13$. $\\checkmark$ (And $|5 - 2(-4)| = |13| = 13$.)\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): is the lesser solution, from the case $5 - 2x = 13$.\n* Choice B ($4$): solves $2x = 13 - 5$ as if the $x$-term were positive, losing the sign.\n* Choice D ($18$): reaches $2x = 18$ in the second case and reports $18$ without dividing.\n\n**Test Day Takeaway:** Solve both cases completely before comparing them; with a negative coefficient on $x$, the case with $-13$ often produces the larger $x$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "absolute-value-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-409",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "What is the sum of all solutions to the equation $|4x - 6| = 14$?",
    choices: [
      // distractor: multiplies the solutions instead of adding them
      { id: "A", text: "$-10$" },
      { id: "B", text: "$3$" },
      // distractor: reports only the solution from the positive case
      { id: "C", text: "$5$" },
      // distractor: subtracts the solutions instead of adding them
      { id: "D", text: "$7$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $4x - 6 = 14$ gives $x = 5$; $4x - 6 = -14$ gives $x = -2$. Sum: $5 + (-2) = 3$.\n\n**The Full Solution:**\nStep 1: Split into two cases: $4x - 6 = 14$ or $4x - 6 = -14$.\nStep 2: Case 1: $4x = 20$, so $x = 5$. Case 2: $4x = -8$, so $x = -2$.\nStep 3: The sum is $5 + (-2) = 3$. Check: the solutions are symmetric about the value that makes $4x - 6 = 0$, namely $x = \\dfrac{3}{2}$, and $2 \\cdot \\dfrac{3}{2} = 3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-10$): multiplies $5$ and $-2$ instead of adding them.\n* Choice C ($5$): finds only the positive-case solution and reports it as the sum.\n* Choice D ($7$): computes $5 - (-2)$, the distance between the solutions, not their sum.\n\n**Test Day Takeaway:** The two solutions of $|ax + b| = c$ sit symmetrically around the point where $ax + b = 0$, so their sum is twice that point; use it to check your addition.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "absolute-value-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-410",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$|2x - 9| + 5 = 3$\n\nHow many real solutions does the given equation have?",
    choices: [
      { id: "A", text: "Zero" },
      // distractor: assumes the absolute value equals 0 after isolating
      { id: "B", text: "Exactly one" },
      // distractor: assumes every absolute value equation has two solutions
      { id: "C", text: "Exactly two" },
      // distractor: confuses this with an identity
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Isolate the absolute value: $|2x - 9| = -2$. An absolute value is never negative, so there are no solutions.\n\n**The Full Solution:**\nStep 1: Subtract $5$ from both sides to isolate the absolute value: $|2x - 9| = 3 - 5 = -2$.\nStep 2: For every real $x$, $|2x - 9| \\geq 0$, so it can never equal $-2$.\nStep 3: The equation has zero real solutions. Check: the smallest the left side of the original equation can be is $0 + 5 = 5$, which is already greater than $3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B (Exactly one): would be right if the isolated absolute value equaled $0$, but here it must equal $-2$.\n* Choice C (Exactly two): assumes the usual two cases $2x - 9 = \\pm 2$ apply, without checking that the right side is positive.\n* Choice D (Infinitely many): treats the equation as an identity, but the left side is at least $5$ and the right side is $3$.\n\n**Test Day Takeaway:** Isolate the absolute value first and look at the sign of the other side: positive means two solutions, zero means one, negative means none.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "absolute-value-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-411",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "If $|4 - 3x| = 11$ and $x > 0$, what is the value of $3x$?",
    choices: [
      // distractor: uses the case 4 - 3x = 11, which gives a negative x
      { id: "A", text: "$-7$" },
      // distractor: reports x instead of 3x
      { id: "B", text: "$5$" },
      // distractor: subtracts 4 from 11 instead of adding
      { id: "C", text: "$7$" },
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** The case $4 - 3x = -11$ gives $3x = 15$ (and $x = 5 > 0$); the other case gives a negative $x$. So $3x = 15$.\n\n**The Full Solution:**\nStep 1: Split into two cases: $4 - 3x = 11$ or $4 - 3x = -11$.\nStep 2: Case 1: $-3x = 7$, so $x = -\\dfrac{7}{3}$, which violates $x > 0$. Case 2: $-3x = -15$, so $x = 5$, which satisfies $x > 0$.\nStep 3: The question asks for $3x$, not $x$: $3x = 15$. Check: $|4 - 15| = |-11| = 11$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): comes from the case $4 - 3x = 11$, whose solution $x = -\\dfrac{7}{3}$ is ruled out by $x > 0$.\n* Choice B ($5$): is the value of $x$; the question asks for $3x$.\n* Choice C ($7$): computes $11 - 4$ instead of $11 + 4$ when isolating $3x$ in the valid case.\n\n**Test Day Takeaway:** Use the given condition to discard the invalid case, then reread the question to see which expression, $x$ or $3x$, it actually wants.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "absolute-value-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-412",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$|2x - 6| + c = 4$\n\nIn the given equation, $c$ is a constant. For what value of $c$ does the equation have exactly one real solution?",
    choices: [
      // distractor: leaves |2x - 6| = 4, which has two solutions
      { id: "A", text: "$0$" },
      // distractor: uses the x-value that makes 2x - 6 equal 0
      { id: "B", text: "$3$" },
      { id: "C", text: "$4$" },
      // distractor: uses the constant inside the absolute value
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Absolute Value Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Isolate: $|2x - 6| = 4 - c$. An absolute value equation has exactly one solution only when the right side is $0$, so $c = 4$.\n\n**The Full Solution:**\nStep 1: Subtract $c$ from both sides: $|2x - 6| = 4 - c$.\nStep 2: Count solutions by the sign of the right side. If $4 - c > 0$, there are two solutions ($2x - 6 = \\pm(4 - c)$). If $4 - c < 0$, there are none. If $4 - c = 0$, the only solution is where $2x - 6 = 0$, that is, $x = 3$.\nStep 3: Exactly one solution requires $4 - c = 0$, so $c = 4$. Check: with $c = 4$, the equation is $|2x - 6| + 4 = 4$, or $|2x - 6| = 0$, whose only solution is $x = 3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): gives $|2x - 6| = 4$, which has two solutions, $x = 5$ and $x = 1$.\n* Choice B ($3$): is the $x$-value of the single solution, not the value of $c$ that produces it.\n* Choice D ($6$): copies the constant inside the absolute value; with $c = 6$ the right side is $-2$ and there are no solutions.\n\n**Test Day Takeaway:** Isolate the absolute value and set the other side to $0$ for \"exactly one solution\"; a positive right side gives two, a negative gives none.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "absolute-value-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- linear-system-by-substitution (4 → 10) ---
  {
    id: "bank-alg-413",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$y = 4x - 9$\n$y = 2x + 5$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
    choices: [
      // distractor: solves 2x = 9 - 5 by subtracting instead of adding, then reports that x
      { id: "A", text: "$2$" },
      // distractor: reports x instead of y
      { id: "B", text: "$7$" },
      // distractor: adds 9 and 5 and stops
      { id: "C", text: "$14$" },
      { id: "D", text: "$19$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Set the expressions for $y$ equal: $4x - 9 = 2x + 5$, so $2x = 14$ and $x = 7$. Then $y = 2(7) + 5 = 19$.\n\n**The Full Solution:**\nStep 1: Both equations give $y$, so substitute one into the other: $4x - 9 = 2x + 5$.\nStep 2: Subtract $2x$ and add $9$: $2x = 14$, so $x = 7$.\nStep 3: Find $y$ from either equation: $y = 2(7) + 5 = 19$. Check with the first: $4(7) - 9 = 19$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): solves $2x = 9 - 5$ instead of $2x = 9 + 5$ and reports that value.\n* Choice B ($7$): is the value of $x$; the question asks for $y$.\n* Choice C ($14$): stops at $2x = 14$ and reports $14$.\n\n**Test Day Takeaway:** When both equations are solved for $y$, set the right sides equal to get $x$, then substitute back and confirm both equations give the same $y$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-system-by-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-414",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$x = 3y - 4$\n$2x + y = 13$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $y$?",
    choices: [
      { id: "A", text: "$3$" },
      // distractor: reports x instead of y
      { id: "B", text: "$5$" },
      // distractor: reports x + y
      { id: "C", text: "$8$" },
      // distractor: reaches 7y = 21 but never divides by 7
      { id: "D", text: "$21$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Substitute $3y - 4$ for $x$: $2(3y - 4) + y = 13$, so $7y - 8 = 13$ and $y = 3$.\n\n**The Full Solution:**\nStep 1: The first equation gives $x$ in terms of $y$, so replace $x$ in the second equation: $2(3y - 4) + y = 13$.\nStep 2: Distribute and combine: $6y - 8 + y = 13$, so $7y = 21$ and $y = 3$.\nStep 3: Then $x = 3(3) - 4 = 5$. Check in the second equation: $2(5) + 3 = 13$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): is the value of $x$, not $y$.\n* Choice C ($8$): adds $x$ and $y$ together.\n* Choice D ($21$): stops at $7y = 21$ without dividing by $7$.\n\n**Test Day Takeaway:** Substitute the expression for one variable into the other equation with parentheses, distribute carefully, and reread which coordinate the question wants.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-system-by-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-415",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$y = -3x + 14$\n$y = 2x - 6$\n\nIf $(x, y)$ is the solution to the given system of equations, what is the value of $x + y$?",
    choices: [
      // distractor: reports y only
      { id: "A", text: "$2$" },
      // distractor: reports x only
      { id: "B", text: "$4$" },
      { id: "C", text: "$6$" },
      // distractor: computes the product xy instead of the sum
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $-3x + 14 = 2x - 6$ gives $5x = 20$, so $x = 4$ and $y = 2(4) - 6 = 2$. Then $x + y = 6$.\n\n**The Full Solution:**\nStep 1: Set the two expressions for $y$ equal: $-3x + 14 = 2x - 6$.\nStep 2: Add $3x$ and add $6$ to both sides: $20 = 5x$, so $x = 4$. Substitute into the second equation: $y = 2(4) - 6 = 2$.\nStep 3: $x + y = 4 + 2 = 6$. Check in the first equation: $-3(4) + 14 = 2 = y$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): is $y$ alone.\n* Choice B ($4$): is $x$ alone.\n* Choice D ($8$): multiplies $4$ and $2$ instead of adding them.\n\n**Test Day Takeaway:** Solve for both coordinates, then build exactly the combination the question names; $x + y$, $xy$, and the single coordinates are all common answer choices.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-system-by-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-416",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$y = 5x$\n$3x + 2y = 52$\n\nIf $(x, y)$ is the solution to the given system of equations, what is the value of $xy$?",
    choices: [
      // distractor: reports x only
      { id: "A", text: "$4$" },
      // distractor: reports y only
      { id: "B", text: "$20$" },
      // distractor: computes x + y instead of xy
      { id: "C", text: "$24$" },
      { id: "D", text: "$80$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Substitute $5x$ for $y$: $3x + 10x = 52$, so $x = 4$ and $y = 20$. Then $xy = 80$.\n\n**The Full Solution:**\nStep 1: Replace $y$ in the second equation with $5x$: $3x + 2(5x) = 52$.\nStep 2: Simplify: $13x = 52$, so $x = 4$. Then $y = 5(4) = 20$.\nStep 3: $xy = 4 \\times 20 = 80$. Check in the second equation: $3(4) + 2(20) = 12 + 40 = 52$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): is $x$ alone.\n* Choice B ($20$): is $y$ alone.\n* Choice C ($24$): adds $x$ and $y$ instead of multiplying.\n\n**Test Day Takeaway:** A \"$y = kx$\" equation substitutes in one move; after solving, form the exact product or sum the question asks for.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-system-by-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-417",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$y = \\dfrac{x + 14}{3}$\n$y = 2x - 2$\n\nThe solution to the given system of equations is $(x, y)$. What is the value of $x$?",
    choices: [
      // distractor: makes a sign error when collecting terms: 5x = -20
      { id: "A", text: "$-4$" },
      { id: "B", text: "$4$" },
      // distractor: reports y instead of x
      { id: "C", text: "$6$" },
      // distractor: does not multiply the right side by 3: x + 14 = 2x - 2
      { id: "D", text: "$16$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** Set the $y$-expressions equal and clear the fraction: $x + 14 = 3(2x - 2) = 6x - 6$, so $20 = 5x$ and $x = 4$.\n\n**The Full Solution:**\nStep 1: Substitute: $\\dfrac{x + 14}{3} = 2x - 2$. Multiply both sides by $3$: $x + 14 = 6x - 6$.\nStep 2: Subtract $x$ and add $6$: $20 = 5x$, so $x = 4$.\nStep 3: Find $y$ to check: $y = 2(4) - 2 = 6$, and $\\dfrac{4 + 14}{3} = 6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): collects terms as $5x = -20$, mishandling the sign when moving $14$ and $-6$.\n* Choice C ($6$): is the value of $y$; the question asks for $x$.\n* Choice D ($16$): multiplies only the left side by $3$, solving $x + 14 = 2x - 2$.\n\n**Test Day Takeaway:** When one equation has a denominator, multiply every term on both sides by it before collecting terms, then verify by computing $y$ two ways.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-system-by-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-418",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The graph of line $\\ell$ in the $xy$-plane is shown. Line $\\ell$ passes through the points $(-3, -1)$ and $(3, 3)$. At which point does line $\\ell$ intersect the graph of $y = -x + 11$?",
    diagram: { type: "linearGraph", params: { slope: 0.6666667, yIntercept: 1, xRange: [-6, 6], yRange: [-4, 6], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[-3, -1], [3, 3]], label: "ℓ" } },
    choices: [
      // distractor: picks a marked point on line l, which is not on the second line
      { id: "A", text: "$(3, 3)$" },
      // distractor: uses the inverted slope 3/2 for line l
      { id: "B", text: "$(4, 7)$" },
      // distractor: swaps the coordinates of the intersection point
      { id: "C", text: "$(5, 6)$" },
      { id: "D", text: "$(6, 5)$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Linear System by Substitution**\n\n**Choice D is correct.**\n\n**The Fast Way (~35s):** Line $\\ell$ has slope $\\dfrac{3 - (-1)}{3 - (-3)} = \\dfrac{2}{3}$ and $y$-intercept $1$, so $y = \\dfrac{2}{3}x + 1$. Setting $\\dfrac{2}{3}x + 1 = -x + 11$ gives $\\dfrac{5}{3}x = 10$, so $x = 6$ and $y = 5$.\n\n**The Full Solution:**\nStep 1: Write an equation for $\\ell$. Slope $= \\dfrac{3 - (-1)}{3 - (-3)} = \\dfrac{4}{6} = \\dfrac{2}{3}$. Using $(3, 3)$: $3 = \\dfrac{2}{3}(3) + b = 2 + b$, so $b = 1$ and $\\ell$ is $y = \\dfrac{2}{3}x + 1$.\nStep 2: At the intersection both equations hold, so substitute: $\\dfrac{2}{3}x + 1 = -x + 11$. Add $x$ and subtract $1$: $\\dfrac{5}{3}x = 10$, so $x = 6$.\nStep 3: Then $y = -6 + 11 = 5$. Check on $\\ell$: $\\dfrac{2}{3}(6) + 1 = 5$. $\\checkmark$ The intersection is $(6, 5)$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($(3, 3)$): is a marked point on $\\ell$, but $-3 + 11 = 8 \\neq 3$, so it is not on the second line.\n* Choice B ($(4, 7)$): comes from using the inverted slope $\\dfrac{3}{2}$ for $\\ell$, which gives $\\dfrac{3}{2}x + 1 = -x + 11$ and $x = 4$.\n* Choice C ($(5, 6)$): swaps the coordinates of the correct point; $(5, 6)$ satisfies $y = -x + 11$ but not $\\ell$.\n\n**Test Day Takeaway:** Turn the graphed line into an equation from two grid points, then solve the resulting system by substitution and check the point in both equations.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "linear-system-by-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- no-solution-condition (4 → 10) ---
  {
    id: "bank-alg-419",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$y = 6x - 1$\n$y = (k + 3)x + 8$\n\nIn the given system of equations, $k$ is a constant. If the system has no solution, what is the value of $k$?",
    choices: [
      // distractor: sets k + 3 = -6, using the opposite slope
      { id: "A", text: "$-9$" },
      // distractor: sets k + 3 = 0
      { id: "B", text: "$-3$" },
      { id: "C", text: "$3$" },
      // distractor: reports the required slope instead of solving for k
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** No solution means parallel lines with different intercepts. The intercepts $-1$ and $8$ already differ, so match the slopes: $k + 3 = 6$, giving $k = 3$.\n\n**The Full Solution:**\nStep 1: A system of two linear equations has no solution exactly when the lines are parallel and distinct: equal slopes, different $y$-intercepts.\nStep 2: The slopes are $6$ and $k + 3$. Set them equal: $k + 3 = 6$, so $k = 3$.\nStep 3: Confirm the lines are distinct: the $y$-intercepts are $-1$ and $8$, which differ, so the lines never meet. Check: with $k = 3$ the second equation is $y = 6x + 8$, parallel to $y = 6x - 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): sets $k + 3 = -6$, matching the slope's opposite instead of the slope.\n* Choice B ($-3$): sets $k + 3 = 0$, producing a horizontal line that would cross $y = 6x - 1$.\n* Choice D ($6$): reports the slope the second line needs rather than the value of $k$ that produces it.\n\n**Test Day Takeaway:** For \"no solution,\" make the slopes equal and confirm the intercepts differ; then solve for the constant, not the slope itself.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "no-solution-condition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-420",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$3x + 4y = 12$\n$y = mx + 9$\n\nIn the given system of equations, $m$ is a constant. If the system has no solution, what is the value of $m$?",
    choices: [
      // distractor: inverts the slope of the first line
      { id: "A", text: "$-\\dfrac{4}{3}$" },
      { id: "B", text: "$-\\dfrac{3}{4}$" },
      // distractor: drops the negative sign on the slope
      { id: "C", text: "$\\dfrac{3}{4}$" },
      // distractor: uses the coefficient of x in the first equation as the slope
      { id: "D", text: "$3$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Solve the first equation for $y$: $y = -\\dfrac{3}{4}x + 3$. Parallel and distinct lines have equal slopes, so $m = -\\dfrac{3}{4}$.\n\n**The Full Solution:**\nStep 1: Put the first equation in slope-intercept form. Subtract $3x$: $4y = -3x + 12$. Divide by $4$: $y = -\\dfrac{3}{4}x + 3$. Its slope is $-\\dfrac{3}{4}$ and its $y$-intercept is $3$.\nStep 2: No solution requires the lines to be parallel with different intercepts. The intercepts $3$ and $9$ already differ, so set the slopes equal: $m = -\\dfrac{3}{4}$.\nStep 3: Check: $y = -\\dfrac{3}{4}x + 9$ is parallel to $y = -\\dfrac{3}{4}x + 3$ and never meets it. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\dfrac{4}{3}$): divides the coefficients in the wrong order, $\\dfrac{4}{3}$ instead of $\\dfrac{3}{4}$.\n* Choice C ($\\dfrac{3}{4}$): forgets the sign change that comes from moving $3x$ to the other side.\n* Choice D ($3$): reads the coefficient of $x$ in $3x + 4y = 12$ as the slope without solving for $y$.\n\n**Test Day Takeaway:** Rewrite standard form as $y = mx + b$ before comparing slopes; the slope of $Ax + By = C$ is $-\\dfrac{A}{B}$, sign included.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "no-solution-condition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-421",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The system of equations $6x - 4y = 9$ and $kx + 10y = 1$, where $k$ is a constant, has no solution. What is the value of $k$?",
    choices: [
      { id: "A", text: "$-15$" },
      // distractor: sets k to the opposite of the x-coefficient 6, treating "parallel" as opposite coefficients rather than proportional ones; k = -6 gives slope \frac{3}{5}, and the lines cross.
      { id: "B", text: "$-6$" },
      // distractor: multiplies 6 by \frac{-4}{10} instead of dividing by it, inverting the proportion.
      { id: "C", text: "$-\\frac{12}{5}$" },
      // distractor: drops the negative when solving -\frac{k}{10} = \frac{3}{2}; k = 15 gives slope -\frac{3}{2}, and the lines intersect.
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** No solution means the coefficient ratios match: $\\frac{6}{k} = \\frac{-4}{10}$, so $k = 6 \\cdot \\frac{10}{-4} = -15$.\n\n**The Full Solution:**\nStep 1: Write each equation in slope-intercept form. First: $y = \\frac{3}{2}x - \\frac{9}{4}$, slope $\\frac{3}{2}$. Second: $y = -\\frac{k}{10}x + \\frac{1}{10}$, slope $-\\frac{k}{10}$.\nStep 2: A system of two lines has no solution only when the lines are parallel and distinct, so the slopes must be equal: $-\\frac{k}{10} = \\frac{3}{2}$, giving $k = -15$.\nStep 3: Check that the lines are distinct: the $y$-intercepts $-\\frac{9}{4}$ and $\\frac{1}{10}$ differ, so with $k = -15$ the lines are parallel and never meet. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-6$): sets $k$ to the opposite of the $x$-coefficient $6$, treating \"parallel\" as opposite coefficients rather than proportional ones; $k = -6$ gives slope $\\frac{3}{5}$, and the lines cross.\n* Choice C ($-\\frac{12}{5}$): multiplies $6$ by $\\frac{-4}{10}$ instead of dividing by it, inverting the proportion.\n* Choice D ($15$): drops the negative when solving $-\\frac{k}{10} = \\frac{3}{2}$; $k = 15$ gives slope $-\\frac{3}{2}$, and the lines intersect.\n\n**Test Day Takeaway:** In standard form, no solution requires $\\frac{A_1}{A_2} = \\frac{B_1}{B_2} \\neq \\frac{C_1}{C_2}$: match the $x$- and $y$-coefficient ratio, then confirm the constants break it.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "no-solution-condition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-422",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Line $m$ is shown in the $xy$-plane. The equation of line $m$ and the equation $4x - ky = 6$, where $k$ is a constant, form a system of equations with no solution. What is the value of $k$?",
    diagram: { type: "linearGraph", params: { slope: 2, yIntercept: -2, xRange: [-4, 4], yRange: [-6, 8], xTickInterval: 1, yTickInterval: 2, gridInterval: 1, showPoints: [[0, -2], [3, 4]], label: "m" } },
    choices: [
      // distractor: moves 4x across with the wrong sign and solves -\frac{4}{k} = 2; with k = -2 the second line has slope -2 and crosses line m.
      { id: "A", text: "$-2$" },
      // distractor: reads the slope of line m as run over rise, \frac{3}{6} = \frac{1}{2}, and reports that number as k.
      { id: "B", text: "$\\frac{1}{2}$" },
      { id: "C", text: "$2$" },
      // distractor: multiplies 4 by the slope instead of dividing: 4 \cdot 2 = 8, but \frac{4}{8} = \frac{1}{2} \neq 2.
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Line $m$ rises $6$ over a run of $3$, so its slope is $2$; the second line has slope $\\frac{4}{k}$, and $\\frac{4}{k} = 2$ gives $k = 2$.\n\n**The Full Solution:**\nStep 1: From the graph, line $m$ passes through $(0, -2)$ and $(3, 4)$, so its slope is $\\frac{4 - (-2)}{3 - 0} = 2$ and its equation is $y = 2x - 2$.\nStep 2: Solve $4x - ky = 6$ for $y$: $-ky = -4x + 6$, so $y = \\frac{4}{k}x - \\frac{6}{k}$. No solution means parallel lines, so $\\frac{4}{k} = 2$ and $k = 2$.\nStep 3: Check distinctness: with $k = 2$ the second line is $y = 2x - 3$, whose $y$-intercept $-3$ differs from $-2$. Same slope, different intercept, no intersection. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-2$): moves $4x$ across with the wrong sign and solves $-\\frac{4}{k} = 2$; with $k = -2$ the second line has slope $-2$ and crosses line $m$.\n* Choice B ($\\frac{1}{2}$): reads the slope of line $m$ as run over rise, $\\frac{3}{6} = \\frac{1}{2}$, and reports that number as $k$.\n* Choice D ($8$): multiplies $4$ by the slope instead of dividing: $4 \\cdot 2 = 8$, but $\\frac{4}{8} = \\frac{1}{2} \\neq 2$.\n\n**Test Day Takeaway:** Read the slope off two lattice points, put the second equation in $y = mx + b$ form, and match slopes; then confirm the intercepts differ.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "no-solution-condition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-423",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the system of equations $y = \\frac{5}{2}x - 1$ and $cy = 10x + 7$, $c$ is a constant. If the system has no solution, what is the value of $c$?",
    choices: [
      // distractor: solves \frac{10}{c} = -\frac{5}{2} after a sign slip; c = -4 gives slope -\frac{5}{2}, and the lines cross.
      { id: "A", text: "$-4$" },
      // distractor: uses the reciprocal of the slope, \frac{2}{5}, as c; then \frac{10}{c} = 25, not \frac{5}{2}.
      { id: "B", text: "$\\frac{2}{5}$" },
      // distractor: reports the slope \frac{5}{2} itself instead of solving \frac{10}{c} = \frac{5}{2} for c.
      { id: "C", text: "$\\frac{5}{2}$" },
      { id: "D", text: "$4$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Divide the second equation by $c$: slope $\\frac{10}{c}$. Set it equal to $\\frac{5}{2}$: $c = 4$.\n\n**The Full Solution:**\nStep 1: The first line has slope $\\frac{5}{2}$ and $y$-intercept $-1$. Dividing the second equation by $c$ gives $y = \\frac{10}{c}x + \\frac{7}{c}$, slope $\\frac{10}{c}$.\nStep 2: No solution requires equal slopes: $\\frac{10}{c} = \\frac{5}{2}$. Cross-multiplying, $5c = 20$, so $c = 4$.\nStep 3: Check that the lines are not the same line: with $c = 4$ the second line is $y = \\frac{5}{2}x + \\frac{7}{4}$, and $\\frac{7}{4} \\neq -1$. Parallel and distinct, so zero solutions. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-4$): solves $\\frac{10}{c} = -\\frac{5}{2}$ after a sign slip; $c = -4$ gives slope $-\\frac{5}{2}$, and the lines cross.\n* Choice B ($\\frac{2}{5}$): uses the reciprocal of the slope, $\\frac{2}{5}$, as $c$; then $\\frac{10}{c} = 25$, not $\\frac{5}{2}$.\n* Choice C ($\\frac{5}{2}$): reports the slope $\\frac{5}{2}$ itself instead of solving $\\frac{10}{c} = \\frac{5}{2}$ for $c$.\n\n**Test Day Takeaway:** When a coefficient sits on $y$, divide through first; the slope is $\\frac{\\text{coefficient of } x}{\\text{coefficient of } y}$, and only then match slopes.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "no-solution-condition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-424",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The equation $5x - 2(y - 4) = 3x + 1$ is one of the two equations in a system of linear equations in $x$ and $y$. The system has no solution. Which of the following could be the other equation in the system?",
    choices: [
      // distractor: keeps 2x but doubles only the y-coefficient; its slope is \frac{1}{2}, so it crosses the given line exactly once.
      { id: "A", text: "$2x - 4y = -7$" },
      { id: "B", text: "$4x - 4y = 14$" },
      // distractor: doubles every term including the constant, producing the same line, which gives infinitely many solutions rather than none.
      { id: "C", text: "$4x - 4y = -14$" },
      // distractor: flips the sign of the y-term; its slope is -1, so the lines intersect.
      { id: "D", text: "$4x + 4y = 14$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: No-Solution Condition**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Simplify the given equation to $2x - 2y = -7$. The other line must have the same slope but a different intercept: $4x - 4y = 14$ doubles the left side but not the constant.\n\n**The Full Solution:**\nStep 1: Expand and collect: $5x - 2y + 8 = 3x + 1$ gives $2x - 2y = -7$, so the given line has slope $1$ and $y$-intercept $\\frac{7}{2}$.\nStep 2: For no solution the other line needs slope $1$ (coefficients proportional to $2$ and $-2$) and a constant that is NOT the same multiple. Choice B, $4x - 4y = 14$, has coefficients doubled ($4, -4$) but constant $14 \\neq 2(-7)$.\nStep 3: Check: $4x - 4y = 14$ is $y = x - \\frac{7}{2}$, slope $1$, intercept $-\\frac{7}{2} \\neq \\frac{7}{2}$. Parallel, distinct, no solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2x - 4y = -7$): keeps $2x$ but doubles only the $y$-coefficient; its slope is $\\frac{1}{2}$, so it crosses the given line exactly once.\n* Choice C ($4x - 4y = -14$): doubles every term including the constant, producing the same line, which gives infinitely many solutions rather than none.\n* Choice D ($4x + 4y = 14$): flips the sign of the $y$-term; its slope is $-1$, so the lines intersect.\n\n**Test Day Takeaway:** Simplify first, then test candidates on two things: proportional $x$- and $y$-coefficients (parallel) AND a constant that breaks the proportion (distinct).",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "no-solution-condition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- one-step-linear-equation (4 → 10) ---
  {
    id: "bank-alg-425",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Which of the following is the solution to the equation $x + 26 = 9$?",
    choices: [
      // distractor: subtracts 26 from -9 instead of from 9, mishandling the sign of the constant.
      { id: "A", text: "$-35$" },
      { id: "B", text: "$-17$" },
      // distractor: computes 26 - 9, reversing the subtraction and losing the negative sign.
      { id: "C", text: "$17$" },
      // distractor: adds 26 to 9 instead of subtracting, doing the same operation as the equation rather than the inverse.
      { id: "D", text: "$35$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~5s):** Subtract $26$ from both sides: $x = 9 - 26 = -17$.\n\n**The Full Solution:**\nStep 1: The variable has $26$ added to it, so undo the addition by subtracting $26$ from each side.\nStep 2: $x + 26 - 26 = 9 - 26$, which simplifies to $x = -17$.\nStep 3: Check: $-17 + 26 = 9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-35$): subtracts $26$ from $-9$ instead of from $9$, mishandling the sign of the constant.\n* Choice C ($17$): computes $26 - 9$, reversing the subtraction and losing the negative sign.\n* Choice D ($35$): adds $26$ to $9$ instead of subtracting, doing the same operation as the equation rather than the inverse.\n\n**Test Day Takeaway:** Undo whatever is done to the variable with the inverse operation on both sides, and keep the order of subtraction: $9 - 26$, not $26 - 9$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "one-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-426",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$\\frac{x}{6} = -7$ What value of $x$ is the solution to the given equation?",
    choices: [
      { id: "A", text: "$-42$" },
      // distractor: subtracts 6 from -7 instead of multiplying by 6.
      { id: "B", text: "$-13$" },
      // distractor: divides -7 by 6, applying division a second time instead of undoing it.
      { id: "C", text: "$-\\frac{7}{6}$" },
      // distractor: multiplies correctly but drops the negative sign.
      { id: "D", text: "$42$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Multiply both sides by $6$: $x = -42$.\n\n**The Full Solution:**\nStep 1: The variable is divided by $6$, so multiply each side by $6$ to isolate $x$.\nStep 2: $6 \\cdot \\frac{x}{6} = 6 \\cdot (-7)$, so $x = -42$.\nStep 3: Check: $\\frac{-42}{6} = -7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-13$): subtracts $6$ from $-7$ instead of multiplying by $6$.\n* Choice C ($-\\frac{7}{6}$): divides $-7$ by $6$, applying division a second time instead of undoing it.\n* Choice D ($42$): multiplies correctly but drops the negative sign.\n\n**Test Day Takeaway:** Division is undone by multiplication; a negative times a positive stays negative, so carry the sign through.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "one-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-427",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "For the equation $-9x = 63$, what is the value of $x$?",
    choices: [
      { id: "A", text: "$-7$" },
      // distractor: divides 63 by 9 but ignores the negative sign on the coefficient.
      { id: "B", text: "$7$" },
      // distractor: subtracts 9 from 63, treating -9x as x - 9.
      { id: "C", text: "$54$" },
      // distractor: adds 9 to 63, as if the -9 were being subtracted from x.
      { id: "D", text: "$72$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Divide both sides by $-9$: $x = \\frac{63}{-9} = -7$.\n\n**The Full Solution:**\nStep 1: The variable is multiplied by $-9$, so divide each side by $-9$.\nStep 2: $\\frac{-9x}{-9} = \\frac{63}{-9}$, so $x = -7$.\nStep 3: Check: $-9(-7) = 63$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($7$): divides $63$ by $9$ but ignores the negative sign on the coefficient.\n* Choice C ($54$): subtracts $9$ from $63$, treating $-9x$ as $x - 9$.\n* Choice D ($72$): adds $9$ to $63$, as if the $-9$ were being subtracted from $x$.\n\n**Test Day Takeaway:** A coefficient is undone by division, including its sign: divide by $-9$, not by $9$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "one-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-428",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The equation $15 = x - 8$ is true for what value of $x$?",
    choices: [
      // distractor: computes 8 - 15, subtracting in the wrong direction.
      { id: "A", text: "$-7$" },
      // distractor: divides 15 by 8, treating x - 8 as 8x.
      { id: "B", text: "$\\frac{15}{8}$" },
      // distractor: subtracts 8 from 15 instead of adding, repeating the equation's operation instead of undoing it.
      { id: "C", text: "$7$" },
      { id: "D", text: "$23$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** Add $8$ to both sides: $x = 15 + 8 = 23$.\n\n**The Full Solution:**\nStep 1: The variable has $8$ subtracted from it, so add $8$ to each side.\nStep 2: $15 + 8 = x - 8 + 8$, so $23 = x$.\nStep 3: Check: $23 - 8 = 15$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-7$): computes $8 - 15$, subtracting in the wrong direction.\n* Choice B ($\\frac{15}{8}$): divides $15$ by $8$, treating $x - 8$ as $8x$.\n* Choice C ($7$): subtracts $8$ from $15$ instead of adding, repeating the equation's operation instead of undoing it.\n\n**Test Day Takeaway:** The variable can sit on the right side; isolate it the same way by adding back what was subtracted.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "one-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-429",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Which value of $x$ is the solution to the equation $4x = -30$?",
    choices: [
      // distractor: multiplies -30 by 4 instead of dividing.
      { id: "A", text: "$-120$" },
      // distractor: subtracts 4 from -30, treating 4x as x + 4.
      { id: "B", text: "$-34$" },
      { id: "C", text: "$-7.5$" },
      // distractor: divides correctly but drops the negative sign.
      { id: "D", text: "$7.5$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Divide both sides by $4$: $x = -\\frac{30}{4} = -7.5$.\n\n**The Full Solution:**\nStep 1: The variable is multiplied by $4$, so divide each side by $4$.\nStep 2: $x = \\frac{-30}{4} = -\\frac{15}{2} = -7.5$.\nStep 3: Check: $4(-7.5) = -30$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-120$): multiplies $-30$ by $4$ instead of dividing.\n* Choice B ($-34$): subtracts $4$ from $-30$, treating $4x$ as $x + 4$.\n* Choice D ($7.5$): divides correctly but drops the negative sign.\n\n**Test Day Takeaway:** A non-integer answer is fine on the SAT; $-\\frac{30}{4}$ simplifies to $-7.5$, and the sign of the constant carries over.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "one-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-430",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "For what value of $x$ is the equation $\\frac{3}{4}x = -12$ true?",
    choices: [
      { id: "A", text: "$-16$" },
      // distractor: multiplies -12 by \frac{3}{4} instead of by the reciprocal \frac{4}{3}.
      { id: "B", text: "$-9$" },
      // distractor: multiplies by \frac{3}{4} and also drops the negative sign.
      { id: "C", text: "$9$" },
      // distractor: uses the reciprocal correctly but loses the negative sign.
      { id: "D", text: "$16$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: One-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~8s):** Multiply both sides by the reciprocal $\\frac{4}{3}$: $x = -12 \\cdot \\frac{4}{3} = -16$.\n\n**The Full Solution:**\nStep 1: The coefficient of $x$ is $\\frac{3}{4}$. Multiplying by its reciprocal $\\frac{4}{3}$ makes the coefficient $1$.\nStep 2: $\\frac{4}{3} \\cdot \\frac{3}{4}x = \\frac{4}{3}(-12)$, so $x = -\\frac{48}{3} = -16$.\nStep 3: Check: $\\frac{3}{4}(-16) = -12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-9$): multiplies $-12$ by $\\frac{3}{4}$ instead of by the reciprocal $\\frac{4}{3}$.\n* Choice C ($9$): multiplies by $\\frac{3}{4}$ and also drops the negative sign.\n* Choice D ($16$): uses the reciprocal correctly but loses the negative sign.\n\n**Test Day Takeaway:** To clear a fractional coefficient, multiply by its reciprocal, not by the fraction itself.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "one-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- parallel-line-through-a-point (4 → 10) ---
  {
    id: "bank-alg-431",
    domain: "algebra",
    skills: ["writing-parallel-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Line $p$ is shown in the $xy$-plane. Which of the following equations defines a line that is parallel to line $p$ and has a $y$-intercept of $(0, 4)$?",
    diagram: { type: "linearGraph", params: { slope: 2, yIntercept: -1, xRange: [-4, 4], yRange: [-6, 8], xTickInterval: 1, yTickInterval: 2, gridInterval: 1, showPoints: [[0, -1], [2, 3]], label: "p" } },
    choices: [
      // distractor: negates the slope; y = -2x + 4 is a reflection of the direction, not a parallel line, and it crosses line p.
      { id: "A", text: "$y = -2x + 4$" },
      // distractor: uses the negative reciprocal -\frac{1}{2}, which is the slope of a perpendicular line.
      { id: "B", text: "$y = -\\frac{1}{2}x + 4$" },
      // distractor: is the equation of line p itself; it has the right slope but the wrong y-intercept.
      { id: "C", text: "$y = 2x - 1$" },
      { id: "D", text: "$y = 2x + 4$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Parallel Line through a Point**\n\n**Choice D is correct.**\n\n**The Fast Way (~8s):** Line $p$ rises $4$ over a run of $2$, slope $2$. Parallel means slope $2$; intercept $4$ gives $y = 2x + 4$.\n\n**The Full Solution:**\nStep 1: Read two lattice points on line $p$: $(0, -1)$ and $(2, 3)$. Slope $= \\frac{3 - (-1)}{2 - 0} = \\frac{4}{2} = 2$.\nStep 2: Parallel lines have equal slopes, so the new line has slope $2$. Its $y$-intercept is given as $4$, so $y = 2x + 4$.\nStep 3: Check: the new line is not line $p$ (intercepts $4 \\neq -1$) and has the same slope, so it is parallel. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -2x + 4$): negates the slope; $y = -2x + 4$ is a reflection of the direction, not a parallel line, and it crosses line $p$.\n* Choice B ($y = -\\frac{1}{2}x + 4$): uses the negative reciprocal $-\\frac{1}{2}$, which is the slope of a perpendicular line.\n* Choice C ($y = 2x - 1$): is the equation of line $p$ itself; it has the right slope but the wrong $y$-intercept.\n\n**Test Day Takeaway:** Parallel means same slope, different intercept; read the slope from two grid points, then plug in the given intercept.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-line-through-a-point",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-432",
    domain: "algebra",
    skills: ["writing-parallel-equation"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane, line $\\ell$ passes through the point $(0, -5)$ and is parallel to the line with equation $y = 4x - 2$. Which of the following equations defines line $\\ell$?",
    choices: [
      { id: "A", text: "$y = 4x - 5$" },
      // distractor: keeps the given line's intercept -2; this line does not pass through (0, -5).
      { id: "B", text: "$y = 4x - 2$" },
      // distractor: negates the slope; -4 is not parallel to slope 4.
      { id: "C", text: "$y = -4x - 5$" },
      // distractor: uses the negative reciprocal -\frac{1}{4}, the slope of a perpendicular line.
      { id: "D", text: "$y = -\\frac{1}{4}x - 5$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Parallel Line through a Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~8s):** Same slope $4$; the point $(0, -5)$ is the $y$-intercept, so $y = 4x - 5$.\n\n**The Full Solution:**\nStep 1: Parallel lines share a slope. The given line $y = 4x - 2$ has slope $4$, so line $\\ell$ has slope $4$.\nStep 2: The point $(0, -5)$ has $x = 0$, so it is the $y$-intercept: $b = -5$. Line $\\ell$ is $y = 4x - 5$.\nStep 3: Check: at $x = 0$, $y = 4(0) - 5 = -5$, so $(0, -5)$ is on the line, and the slope $4$ matches. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = 4x - 2$): keeps the given line's intercept $-2$; this line does not pass through $(0, -5)$.\n* Choice C ($y = -4x - 5$): negates the slope; $-4$ is not parallel to slope $4$.\n* Choice D ($y = -\\frac{1}{4}x - 5$): uses the negative reciprocal $-\\frac{1}{4}$, the slope of a perpendicular line.\n\n**Test Day Takeaway:** A point with $x = 0$ hands you the $y$-intercept directly; combine it with the borrowed slope and you are done.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-line-through-a-point",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-433",
    domain: "algebra",
    skills: ["writing-parallel-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of line $k$ is shown in the $xy$-plane. Which equation defines the line that is parallel to line $k$ and passes through the point $(4, 1)$?",
    diagram: { type: "linearGraph", params: { slope: -0.5, yIntercept: 2, xRange: [-4, 6], yRange: [-4, 6], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 2], [4, 0]], label: "k" } },
    choices: [
      // distractor: solves 1 = -2 + b as b = 1 - 2, subtracting instead of adding 2.
      { id: "A", text: "$y = -\\frac{1}{2}x - 1$" },
      // distractor: uses the y-coordinate of the given point as the y-intercept without accounting for x = 4.
      { id: "B", text: "$y = -\\frac{1}{2}x + 1$" },
      { id: "C", text: "$y = -\\frac{1}{2}x + 3$" },
      // distractor: uses the perpendicular slope 2 (through (4, 1): 1 = 8 + b, b = -7) instead of the parallel slope.
      { id: "D", text: "$y = 2x - 7$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Parallel Line through a Point**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Line $k$ drops $2$ over a run of $4$: slope $-\\frac{1}{2}$. Through $(4, 1)$: $1 = -\\frac{1}{2}(4) + b$, so $b = 3$.\n\n**The Full Solution:**\nStep 1: From the graph, line $k$ passes through $(0, 2)$ and $(4, 0)$, so its slope is $\\frac{0 - 2}{4 - 0} = -\\frac{1}{2}$.\nStep 2: The parallel line has slope $-\\frac{1}{2}$: $y = -\\frac{1}{2}x + b$. Substitute $(4, 1)$: $1 = -2 + b$, so $b = 3$.\nStep 3: Check: $y = -\\frac{1}{2}(4) + 3 = 1$. $\\checkmark$ The intercept $3$ differs from $2$, so this is a distinct parallel line.\n\n**Why the wrong answers are tempting:**\n* Choice A ($y = -\\frac{1}{2}x - 1$): solves $1 = -2 + b$ as $b = 1 - 2$, subtracting instead of adding $2$.\n* Choice B ($y = -\\frac{1}{2}x + 1$): uses the $y$-coordinate of the given point as the $y$-intercept without accounting for $x = 4$.\n* Choice D ($y = 2x - 7$): uses the perpendicular slope $2$ (through $(4, 1)$: $1 = 8 + b$, $b = -7$) instead of the parallel slope.\n\n**Test Day Takeaway:** Borrow the slope, then solve $y_1 = m x_1 + b$ for $b$; a point with $x \\neq 0$ is never the intercept itself.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-line-through-a-point",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-434",
    domain: "algebra",
    skills: ["writing-parallel-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A line in the $xy$-plane is parallel to the line with equation $3x + 5y = 30$ and passes through the point $(-5, 7)$. What is the $y$-coordinate of the $y$-intercept of this line?",
    choices: [
      // distractor: uses the reciprocal slope -\frac{5}{3}: 7 = \frac{25}{3} + b gives b = -\frac{4}{3}.
      { id: "A", text: "$-\\frac{4}{3}$" },
      { id: "B", text: "$4$" },
      // distractor: reports the y-intercept of the given line, \frac{30}{5} = 6, instead of the new line's.
      { id: "C", text: "$6$" },
      // distractor: uses slope +\frac{3}{5} after a sign error: 7 = -3 + b gives b = 10.
      { id: "D", text: "$10$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Parallel Line through a Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Slope of $3x + 5y = 30$ is $-\\frac{3}{5}$. Then $7 = -\\frac{3}{5}(-5) + b = 3 + b$, so $b = 4$.\n\n**The Full Solution:**\nStep 1: Solve for $y$: $5y = -3x + 30$, so $y = -\\frac{3}{5}x + 6$. The slope is $-\\frac{3}{5}$ (the $6$ belongs to the given line only).\nStep 2: The parallel line is $y = -\\frac{3}{5}x + b$. Substitute $(-5, 7)$: $7 = -\\frac{3}{5}(-5) + b = 3 + b$, so $b = 4$.\nStep 3: Check: at $x = -5$, $y = -\\frac{3}{5}(-5) + 4 = 3 + 4 = 7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{4}{3}$): uses the reciprocal slope $-\\frac{5}{3}$: $7 = \\frac{25}{3} + b$ gives $b = -\\frac{4}{3}$.\n* Choice C ($6$): reports the $y$-intercept of the given line, $\\frac{30}{5} = 6$, instead of the new line's.\n* Choice D ($10$): uses slope $+\\frac{3}{5}$ after a sign error: $7 = -3 + b$ gives $b = 10$.\n\n**Test Day Takeaway:** Convert to $y = mx + b$ to read the slope, keep only the slope, and rebuild the intercept from the given point.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-line-through-a-point",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-435",
    domain: "algebra",
    skills: ["writing-parallel-equation"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Line $t$ is shown in the $xy$-plane. Line $u$ is parallel to line $t$ and passes through the point $(2, -3)$. What is the $y$-coordinate of the point on line $u$ whose $x$-coordinate is $6$?",
    diagram: { type: "linearGraph", params: { slope: 0.75, yIntercept: 1, xRange: [-4, 8], yRange: [-4, 8], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 1], [4, 4]], label: "t" } },
    choices: [
      // distractor: applies slope -\frac{3}{4} after a sign error: -3 - 3 = -6.
      { id: "A", text: "$-6$" },
      { id: "B", text: "$0$" },
      // distractor: adds the rise 3 but forgets to start from y = -3.
      { id: "C", text: "$3$" },
      // distractor: evaluates line t at x = 6 (\frac{3}{4} \cdot 6 + 1 = \frac{11}{2}) instead of line u.
      { id: "D", text: "$\\frac{11}{2}$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Parallel Line through a Point**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Line $t$ has slope $\\frac{3}{4}$. From $(2, -3)$, a run of $4$ gives a rise of $3$: $y = -3 + 3 = 0$.\n\n**The Full Solution:**\nStep 1: From the graph, line $t$ passes through $(0, 1)$ and $(4, 4)$, so its slope is $\\frac{4 - 1}{4 - 0} = \\frac{3}{4}$. Line $u$ has the same slope.\nStep 2: Write line $u$ in point-slope form: $y + 3 = \\frac{3}{4}(x - 2)$. At $x = 6$: $y + 3 = \\frac{3}{4}(4) = 3$, so $y = 0$.\nStep 3: Check: line $u$ is $y = \\frac{3}{4}x - \\frac{9}{2}$; at $x = 6$, $y = \\frac{9}{2} - \\frac{9}{2} = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-6$): applies slope $-\\frac{3}{4}$ after a sign error: $-3 - 3 = -6$.\n* Choice C ($3$): adds the rise $3$ but forgets to start from $y = -3$.\n* Choice D ($\\frac{11}{2}$): evaluates line $t$ at $x = 6$ ($\\frac{3}{4} \\cdot 6 + 1 = \\frac{11}{2}$) instead of line $u$.\n\n**Test Day Takeaway:** With a slope and one point, point-slope form answers \"what is $y$ at this $x$\" in one line; parallel just means reuse the slope.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-line-through-a-point",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-436",
    domain: "algebra",
    skills: ["writing-parallel-equation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the $xy$-plane, the line with equation $y = \\frac{2}{5}x + c$, where $c$ is a constant, is parallel to the line that passes through the points $(-3, 8)$ and $(k, 2)$. What is the value of $k$?",
    choices: [
      { id: "A", text: "$-18$" },
      // distractor: writes the run as k - 3 instead of k - (-3), then solves k - 3 = -15.
      { id: "B", text: "$-12$" },
      // distractor: sets the slope equal to the reciprocal \frac{5}{2}: -6 = \frac{5}{2}(k + 3) gives k = -\frac{27}{5}.
      { id: "C", text: "$-\\frac{27}{5}$" },
      // distractor: drops the negative from the rise 2 - 8 = -6 and solves k + 3 = 15.
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Parallel Line through a Point**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Parallel means the slope through the two points is $\\frac{2}{5}$: $\\frac{2 - 8}{k - (-3)} = \\frac{2}{5}$, so $k + 3 = -15$ and $k = -18$.\n\n**The Full Solution:**\nStep 1: The constant $c$ does not affect slope; the given line has slope $\\frac{2}{5}$, so the line through $(-3, 8)$ and $(k, 2)$ must also have slope $\\frac{2}{5}$.\nStep 2: Set up the slope: $\\frac{2 - 8}{k - (-3)} = \\frac{-6}{k + 3} = \\frac{2}{5}$. Cross-multiply: $2(k + 3) = -30$, so $k + 3 = -15$ and $k = -18$.\nStep 3: Check: the slope through $(-3, 8)$ and $(-18, 2)$ is $\\frac{2 - 8}{-18 + 3} = \\frac{-6}{-15} = \\frac{2}{5}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-12$): writes the run as $k - 3$ instead of $k - (-3)$, then solves $k - 3 = -15$.\n* Choice C ($-\\frac{27}{5}$): sets the slope equal to the reciprocal $\\frac{5}{2}$: $-6 = \\frac{5}{2}(k + 3)$ gives $k = -\\frac{27}{5}$.\n* Choice D ($12$): drops the negative from the rise $2 - 8 = -6$ and solves $k + 3 = 15$.\n\n**Test Day Takeaway:** A parameter like $c$ is often a decoy; slope conditions ignore it. Write the run as $x_2 - x_1$ with the negative coordinate in parentheses.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-line-through-a-point",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- parallel-lines-no-solution (4 → 10) ---
  {
    id: "bank-alg-437",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Line $h$ is shown in the $xy$-plane. Which of the following equations, when paired with the equation of line $h$, gives a system of equations with no solution?",
    diagram: { type: "linearGraph", params: { slope: -1, yIntercept: 3, xRange: [-4, 6], yRange: [-4, 6], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, 3], [3, 0]], label: "h" } },
    choices: [
      { id: "A", text: "$y = -x - 2$" },
      // distractor: is the equation of line h itself, so the system has infinitely many solutions, not zero.
      { id: "B", text: "$y = -x + 3$" },
      // distractor: has slope 1, perpendicular to line h; the lines meet at exactly one point.
      { id: "C", text: "$y = x - 2$" },
      // distractor: shares the y-intercept 3 but has slope 1, so the lines cross at (0, 3).
      { id: "D", text: "$y = x + 3$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Parallel Lines No Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~8s):** Line $h$ has slope $-1$ and $y$-intercept $3$. No solution needs the same slope with a different intercept: $y = -x - 2$.\n\n**The Full Solution:**\nStep 1: From the graph, line $h$ passes through $(0, 3)$ and $(3, 0)$, so its slope is $\\frac{0 - 3}{3 - 0} = -1$ and its equation is $y = -x + 3$.\nStep 2: A system has no solution when the lines are parallel and distinct. Among the choices, only $y = -x - 2$ has slope $-1$ with an intercept other than $3$.\nStep 3: Check: $-x + 3 = -x - 2$ simplifies to $3 = -2$, which is never true, so the lines share no point. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($y = -x + 3$): is the equation of line $h$ itself, so the system has infinitely many solutions, not zero.\n* Choice C ($y = x - 2$): has slope $1$, perpendicular to line $h$; the lines meet at exactly one point.\n* Choice D ($y = x + 3$): shares the $y$-intercept $3$ but has slope $1$, so the lines cross at $(0, 3)$.\n\n**Test Day Takeaway:** Zero solutions = same slope, different intercept. Identify the slope from the graph, then eliminate the choice that IS the line and the choices with a different slope.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-lines-no-solution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-438",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graph of $y = 6x - 1$ and the graph of $y = 6x + 4$ are lines. At how many points do the two lines intersect?",
    choices: [
      // distractor: assumes any two distinct lines must cross; equal slopes rule that out.
      { id: "A", text: "Exactly one" },
      // distractor: two straight lines can never intersect at exactly two points.
      { id: "B", text: "Exactly two" },
      // distractor: infinitely many points would require the same intercept as well as the same slope.
      { id: "C", text: "Infinitely many" },
      { id: "D", text: "Zero" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Parallel Lines No Solution**\n\n**Choice D is correct.**\n\n**The Fast Way (~5s):** Both lines have slope $6$ but different $y$-intercepts ($-1$ and $4$), so they are parallel and never meet.\n\n**The Full Solution:**\nStep 1: Compare slopes: both equations are in $y = mx + b$ form with $m = 6$, so the lines are parallel.\nStep 2: Compare intercepts: $-1 \\neq 4$, so the lines are distinct parallel lines.\nStep 3: Check algebraically: setting $6x - 1 = 6x + 4$ gives $-1 = 4$, a false statement, so no $x$ satisfies both equations. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (Exactly one): assumes any two distinct lines must cross; equal slopes rule that out.\n* Choice B (Exactly two): two straight lines can never intersect at exactly two points.\n* Choice C (Infinitely many): infinitely many points would require the same intercept as well as the same slope.\n\n**Test Day Takeaway:** Same slope, different intercept means parallel: the equations can never both hold, so the intersection count is zero.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-lines-no-solution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-439",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table gives values of the linear functions $f$ and $g$ at three values of $x$. How many solutions does the system of equations $y = f(x)$ and $y = g(x)$ have?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)", "g(x)"], rows: [["0", "-1", "2"], ["2", "3", "6"], ["4", "7", "10"]] } },
    choices: [
      { id: "A", text: "Zero" },
      // distractor: assumes two different lines must cross somewhere; that fails when the slopes are equal.
      { id: "B", text: "Exactly one" },
      // distractor: two lines cannot intersect at exactly two points.
      { id: "C", text: "Exactly two" },
      // distractor: would require f(x) = g(x) in every row, but g(x) - f(x) = 3 in each row.
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Parallel Lines No Solution**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Both functions rise by $4$ for every $2$ units of $x$ (slope $2$), but $g(x)$ is always $3$ more than $f(x)$, so the lines are parallel and never meet.\n\n**The Full Solution:**\nStep 1: Find each slope from the table. $f$: $\\frac{3 - (-1)}{2 - 0} = 2$. $g$: $\\frac{6 - 2}{2 - 0} = 2$. The slopes are equal.\nStep 2: Find the intercepts: $f(0) = -1$ and $g(0) = 2$, so $f(x) = 2x - 1$ and $g(x) = 2x + 2$. Same slope, different intercept: parallel, distinct lines.\nStep 3: Check: $2x - 1 = 2x + 2$ gives $-1 = 2$, which is false for every $x$, so the system has zero solutions. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B (Exactly one): assumes two different lines must cross somewhere; that fails when the slopes are equal.\n* Choice C (Exactly two): two lines cannot intersect at exactly two points.\n* Choice D (Infinitely many): would require $f(x) = g(x)$ in every row, but $g(x) - f(x) = 3$ in each row.\n\n**Test Day Takeaway:** From a table, compute both slopes with the same two $x$-values; equal slopes plus a constant gap between the columns means no solution.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-lines-no-solution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-440",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the system of equations $y = 3x - 7$ and $y = (2m - 1)x + 5$, $m$ is a constant. If the system has no solution, what is the value of $m$?",
    choices: [
      // distractor: negates the slope and ignores the expression 2m - 1, setting m = -3.
      { id: "A", text: "$-3$" },
      // distractor: sets 2m - 1 = -3, matching the opposite of the slope.
      { id: "B", text: "$-1$" },
      // distractor: moves the 1 to the wrong side, solving 2m = 3 - 1.
      { id: "C", text: "$1$" },
      { id: "D", text: "$2$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Parallel Lines No Solution**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** No solution means equal slopes: $2m - 1 = 3$, so $m = 2$.\n\n**The Full Solution:**\nStep 1: Both equations are in slope-intercept form. The first has slope $3$; the second has slope $2m - 1$ and intercept $5$.\nStep 2: The intercepts $-7$ and $5$ already differ, so the lines are distinct; no solution then requires equal slopes: $2m - 1 = 3$, $2m = 4$, $m = 2$.\nStep 3: Check: with $m = 2$ the second line is $y = 3x + 5$; solving $3x - 7 = 3x + 5$ gives $-7 = 5$, false, so no solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): negates the slope and ignores the expression $2m - 1$, setting $m = -3$.\n* Choice B ($-1$): sets $2m - 1 = -3$, matching the opposite of the slope.\n* Choice C ($1$): moves the $1$ to the wrong side, solving $2m = 3 - 1$.\n\n**Test Day Takeaway:** When the slope is an expression in a parameter, set the whole expression equal to the other slope and solve; check the intercepts differ.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-lines-no-solution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-441",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "How many solutions does the system of equations $3x + 4y = 8$ and $\\frac{3}{2}x + 2y = 10$ have?",
    choices: [
      // distractor: assumes the fractional coefficient makes the second line's slope different; scaling by 2 shows the slopes are identical.
      { id: "A", text: "Exactly one" },
      // distractor: two straight lines can never meet at exactly two points.
      { id: "B", text: "Exactly two" },
      // distractor: notices the proportional coefficients but not that the constants (8 and 20) break the proportion; the lines are parallel, not identical.
      { id: "C", text: "Infinitely many" },
      { id: "D", text: "Zero" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Parallel Lines No Solution**\n\n**Choice D is correct.**\n\n**The Fast Way (~8s):** Double the second equation: $3x + 4y = 20$. The left sides match but $8 \\neq 20$, so the lines are parallel and distinct: zero solutions.\n\n**The Full Solution:**\nStep 1: Clear the fraction by multiplying the second equation by $2$: $3x + 4y = 20$.\nStep 2: Now both equations have the same $x$- and $y$-coefficients ($3$ and $4$), so both lines have slope $-\\frac{3}{4}$. Their constants differ ($8$ versus $20$), so the intercepts differ: $2$ versus $5$.\nStep 3: Check: subtracting the equations gives $0 = -12$, which is false, so no $(x, y)$ satisfies both. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (Exactly one): assumes the fractional coefficient makes the second line's slope different; scaling by $2$ shows the slopes are identical.\n* Choice B (Exactly two): two straight lines can never meet at exactly two points.\n* Choice C (Infinitely many): notices the proportional coefficients but not that the constants ($8$ and $20$) break the proportion; the lines are parallel, not identical.\n\n**Test Day Takeaway:** Scale one equation so the $x$- and $y$-coefficients match; then the constants decide: equal means the same line, unequal means parallel with no solution.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-lines-no-solution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-442",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The system of equations $ax + by = c$ and $dx + ey = f$, where $a$, $b$, $c$, $d$, $e$, and $f$ are nonzero constants, has no solution. Which of the following must be true?",
    choices: [
      // distractor: requires equal x-coefficients, which parallel lines need not have; in the example, a = 2 and d = 1.
      { id: "A", text: "$a = d$" },
      { id: "B", text: "$ae = bd$" },
      // distractor: says the constants are in the same proportion as the coefficients, which together with ae = bd would make the lines identical, giving infinitely many solutions, not zero.
      { id: "C", text: "$af = cd$" },
      // distractor: makes the slopes opposites rather than equal, so the lines would cross.
      { id: "D", text: "$ae = -bd$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Parallel Lines No Solution**\n\n**Choice B is correct.**\n\n**The Fast Way (~20s):** No solution means equal slopes: $-\\frac{a}{b} = -\\frac{d}{e}$, so $\\frac{a}{b} = \\frac{d}{e}$, which cross-multiplies to $ae = bd$.\n\n**The Full Solution:**\nStep 1: Solve each equation for $y$: the first line has slope $-\\frac{a}{b}$, the second has slope $-\\frac{d}{e}$ (both defined since $b, e \\neq 0$).\nStep 2: A system of two lines has no solution exactly when the lines are parallel and distinct. Parallel means $-\\frac{a}{b} = -\\frac{d}{e}$, so $\\frac{a}{b} = \\frac{d}{e}$ and therefore $ae = bd$.\nStep 3: Check with an example: $2x + 4y = 1$ and $x + 2y = 5$ have no solution, and $ae = 2 \\cdot 2 = 4 = bd = 4 \\cdot 1$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($a = d$): requires equal $x$-coefficients, which parallel lines need not have; in the example, $a = 2$ and $d = 1$.\n* Choice C ($af = cd$): says the constants are in the same proportion as the coefficients, which together with $ae = bd$ would make the lines identical, giving infinitely many solutions, not zero.\n* Choice D ($ae = -bd$): makes the slopes opposites rather than equal, so the lines would cross.\n\n**Test Day Takeaway:** Translate \"no solution\" into \"equal slopes, different intercepts,\" then express the slope condition in the given constants: $\\frac{a}{b} = \\frac{d}{e}$ is $ae = bd$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "parallel-lines-no-solution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- same-line-infinitely-many-solutions (4 → 10) ---
  {
    id: "bank-alg-443",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "How many solutions does the system of equations $y = 5x - 4$ and $2y - 10x = -8$ have?",
    choices: [
      // distractor: treats two equations that look different as two different lines; rearranging shows they are the same.
      { id: "A", text: "Exactly one" },
      // distractor: two lines cannot intersect at exactly two points.
      { id: "B", text: "Exactly two" },
      { id: "C", text: "Infinitely many" },
      // distractor: spots the matching slopes and assumes parallel lines, but the intercepts also match (\frac{-8}{2} = -4), so the lines are not distinct.
      { id: "D", text: "Zero" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Same Line Infinitely Many Solutions**\n\n**Choice C is correct.**\n\n**The Fast Way (~8s):** Divide the second equation by $2$: $y - 5x = -4$, or $y = 5x - 4$. Both equations describe the same line, so every point on it is a solution.\n\n**The Full Solution:**\nStep 1: Rewrite the second equation in slope-intercept form: $2y = 10x - 8$, so $y = 5x - 4$.\nStep 2: This is identical to the first equation: same slope $5$ and same $y$-intercept $-4$. The graphs coincide.\nStep 3: Check: any point on the line, such as $(1, 1)$, satisfies both: $1 = 5(1) - 4$ and $2(1) - 10(1) = -8$. $\\checkmark$ Infinitely many such points exist.\n\n**Why the wrong answers are tempting:**\n* Choice A (Exactly one): treats two equations that look different as two different lines; rearranging shows they are the same.\n* Choice B (Exactly two): two lines cannot intersect at exactly two points.\n* Choice D (Zero): spots the matching slopes and assumes parallel lines, but the intercepts also match ($\\frac{-8}{2} = -4$), so the lines are not distinct.\n\n**Test Day Takeaway:** Before counting solutions, put both equations in the same form; identical slope AND identical intercept means infinitely many solutions.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "same-line-infinitely-many-solutions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-444",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "For three values of $x$, the table shows the corresponding values of the linear functions $f$ and $g$. In the $xy$-plane, how many points lie on both the graph of $y = f(x)$ and the graph of $y = g(x)$?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)", "g(x)"], rows: [["-1", "1", "1"], ["0", "4", "4"], ["1", "7", "7"]] } },
    choices: [
      // distractor: assumes two differently named functions must be different, parallel lines; the identical columns show otherwise.
      { id: "A", text: "Zero" },
      // distractor: assumes the lines cross once, but lines that agree at two or more points are the same line.
      { id: "B", text: "Exactly one" },
      // distractor: two straight lines cannot meet at exactly two points.
      { id: "C", text: "Exactly two" },
      { id: "D", text: "Infinitely many" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Same Line Infinitely Many Solutions**\n\n**Choice D is correct.**\n\n**The Fast Way (~8s):** The two linear functions agree at three different inputs, so their graphs are the same line, and every point on it is shared.\n\n**The Full Solution:**\nStep 1: From the table, $f$ has slope $\\frac{4 - 1}{0 - (-1)} = 3$ and $f(0) = 4$, so $f(x) = 3x + 4$.\nStep 2: Likewise $g$ has slope $\\frac{4 - 1}{0 - (-1)} = 3$ and $g(0) = 4$, so $g(x) = 3x + 4$. Same slope and same intercept: the graphs coincide.\nStep 3: Check: two distinct lines can share at most one point, but these share $(-1, 1)$, $(0, 4)$, and $(1, 7)$, so they must be the same line. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (Zero): assumes two differently named functions must be different, parallel lines; the identical columns show otherwise.\n* Choice B (Exactly one): assumes the lines cross once, but lines that agree at two or more points are the same line.\n* Choice C (Exactly two): two straight lines cannot meet at exactly two points.\n\n**Test Day Takeaway:** Two lines that share two points are the same line; a table with matching columns is the \"infinitely many solutions\" case in disguise.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "same-line-infinitely-many-solutions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-445",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the system of equations $y = -\\frac{1}{2}x + c$ and $2y + x = 9$, $c$ is a constant. If the system has infinitely many solutions, what is the value of $c$?",
    choices: [
      // distractor: isolates 2y with a sign error, writing 2y = -x - 9, and gets -\frac{9}{2}.
      { id: "A", text: "$-\\frac{9}{2}$" },
      { id: "B", text: "$\\frac{9}{2}$" },
      // distractor: moves x across but forgets to divide the 9 by 2.
      { id: "C", text: "$9$" },
      // distractor: multiplies 9 by 2 instead of dividing.
      { id: "D", text: "$18$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Same Line Infinitely Many Solutions**\n\n**Choice B is correct.**\n\n**The Fast Way (~8s):** Solve the second equation for $y$: $y = -\\frac{1}{2}x + \\frac{9}{2}$. Matching intercepts gives $c = \\frac{9}{2}$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the two equations describe the same line, so slopes and $y$-intercepts must both match.\nStep 2: Rewrite $2y + x = 9$: $2y = -x + 9$, so $y = -\\frac{1}{2}x + \\frac{9}{2}$. The slopes already match ($-\\frac{1}{2}$), so set $c = \\frac{9}{2}$.\nStep 3: Check: with $c = \\frac{9}{2}$, doubling the first equation gives $2y = -x + 9$, exactly the second equation. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{9}{2}$): isolates $2y$ with a sign error, writing $2y = -x - 9$, and gets $-\\frac{9}{2}$.\n* Choice C ($9$): moves $x$ across but forgets to divide the $9$ by $2$.\n* Choice D ($18$): multiplies $9$ by $2$ instead of dividing.\n\n**Test Day Takeaway:** \"Infinitely many solutions\" = same line: convert to $y = mx + b$ and match both $m$ and $b$, dividing every term by the $y$-coefficient.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "same-line-infinitely-many-solutions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-446",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the system of equations $8x + 6y = 22$ and $12x + ky = 33$, $k$ is a constant. The system has infinitely many solutions. What is the value of $k$?",
    choices: [
      // distractor: drops the sign; 12x - 9y = 33 has slope \frac{4}{3}, not -\frac{4}{3}, so the lines would cross.
      { id: "A", text: "$-9$" },
      // distractor: multiplies 6 by \frac{2}{3}, inverting the scale factor.
      { id: "B", text: "$4$" },
      // distractor: copies the y-coefficient from the first equation, ignoring that the second equation is scaled by \frac{3}{2}.
      { id: "C", text: "$6$" },
      { id: "D", text: "$9$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Same Line Infinitely Many Solutions**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** The second equation is the first scaled by $\\frac{3}{2}$ (since $12 = \\frac{3}{2}(8)$ and $33 = \\frac{3}{2}(22)$), so $k = \\frac{3}{2}(6) = 9$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the equations are multiples of each other. Find the scale factor from the $x$-terms: $\\frac{12}{8} = \\frac{3}{2}$.\nStep 2: Confirm the constants use the same factor: $\\frac{33}{22} = \\frac{3}{2}$. So every term of the first equation is multiplied by $\\frac{3}{2}$, and $k = \\frac{3}{2} \\cdot 6 = 9$.\nStep 3: Check: $\\frac{3}{2}(8x + 6y) = 12x + 9y$ and $\\frac{3}{2}(22) = 33$, giving $12x + 9y = 33$, the second equation. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-9$): drops the sign; $12x - 9y = 33$ has slope $\\frac{4}{3}$, not $-\\frac{4}{3}$, so the lines would cross.\n* Choice B ($4$): multiplies $6$ by $\\frac{2}{3}$, inverting the scale factor.\n* Choice C ($6$): copies the $y$-coefficient from the first equation, ignoring that the second equation is scaled by $\\frac{3}{2}$.\n\n**Test Day Takeaway:** For the same line in standard form, all three ratios must agree: find the factor from the terms you can see, then apply it to the unknown coefficient.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "same-line-infinitely-many-solutions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-447",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Line $g$ is shown in the $xy$-plane. The system consisting of the equation of line $g$ and the equation $y = \\frac{a}{4}x + b$, where $a$ and $b$ are constants, has infinitely many solutions. What is the value of $a + b$?",
    diagram: { type: "linearGraph", params: { slope: 0.5, yIntercept: -3, xRange: [-4, 6], yRange: [-6, 4], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[0, -3], [4, -1]], label: "g" } },
    choices: [
      // distractor: sets a = \frac{1}{2}, reading the slope as a and ignoring the divisor 4: \frac{1}{2} - 3 = -\frac{5}{2}.
      { id: "A", text: "$-\\frac{5}{2}$" },
      { id: "B", text: "$-1$" },
      // distractor: reports a = 2 alone, forgetting to add b = -3.
      { id: "C", text: "$2$" },
      // distractor: reads the slope as run over rise, 2, so \frac{a}{4} = 2 gives a = 8; 8 - 3 = 5.
      { id: "D", text: "$5$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Same Line Infinitely Many Solutions**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Line $g$ has slope $\\frac{1}{2}$ and $y$-intercept $-3$. Same line means $\\frac{a}{4} = \\frac{1}{2}$, so $a = 2$, and $b = -3$; $a + b = -1$.\n\n**The Full Solution:**\nStep 1: Read line $g$ from the graph: it passes through $(0, -3)$ and $(4, -1)$, so slope $= \\frac{-1 - (-3)}{4 - 0} = \\frac{2}{4} = \\frac{1}{2}$ and the equation is $y = \\frac{1}{2}x - 3$.\nStep 2: Infinitely many solutions means $y = \\frac{a}{4}x + b$ is the same line: $\\frac{a}{4} = \\frac{1}{2}$ gives $a = 2$, and $b = -3$.\nStep 3: So $a + b = 2 + (-3) = -1$. Check: $y = \\frac{2}{4}x - 3 = \\frac{1}{2}x - 3$ matches line $g$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{5}{2}$): sets $a = \\frac{1}{2}$, reading the slope as $a$ and ignoring the divisor $4$: $\\frac{1}{2} - 3 = -\\frac{5}{2}$.\n* Choice C ($2$): reports $a = 2$ alone, forgetting to add $b = -3$.\n* Choice D ($5$): reads the slope as run over rise, $2$, so $\\frac{a}{4} = 2$ gives $a = 8$; $8 - 3 = 5$.\n\n**Test Day Takeaway:** Same line = same slope and same intercept; when the slope is written as $\\frac{a}{4}$, solve $\\frac{a}{4} = m$ rather than setting $a = m$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "same-line-infinitely-many-solutions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-448",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The system of equations $px + qy = r$ and $3x - 6y = 15$, where $p$, $q$, and $r$ are constants, has infinitely many solutions. Which of the following must be true?",
    choices: [
      { id: "A", text: "$q = -2p$" },
      // distractor: has the wrong sign; q = 2p would give slope -\frac{p}{2p} = -\frac{1}{2}, but the given line has slope \frac{1}{2}.
      { id: "B", text: "$q = 2p$" },
      // distractor: confuses p and q: r = 5p is true, but r = 15t and 5q = -30t are not equal.
      { id: "C", text: "$r = 5q$" },
      // distractor: assumes the equations must be identical; any nonzero multiple works, so p could be 6 or -3.
      { id: "D", text: "$p = 3$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Same Line Infinitely Many Solutions**\n\n**Choice A is correct.**\n\n**The Fast Way (~20s):** Same line means $(p, q, r)$ is a multiple of $(3, -6, 15)$: $p = 3t$, $q = -6t$, so $q = -2p$.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the two equations represent the same line, so the first equation is a nonzero multiple of the second: $p = 3t$, $q = -6t$, $r = 15t$ for some $t \\neq 0$.\nStep 2: Eliminate $t$: $q = -6t = -2(3t) = -2p$. This holds for every allowed $t$, so it must be true. (Also $r = 5p$, but that is not among the choices.)\nStep 3: Check with $t = 2$: $6x - 12y = 30$ is the same line, and $q = -12 = -2(6) = -2p$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($q = 2p$): has the wrong sign; $q = 2p$ would give slope $-\\frac{p}{2p} = -\\frac{1}{2}$, but the given line has slope $\\frac{1}{2}$.\n* Choice C ($r = 5q$): confuses $p$ and $q$: $r = 5p$ is true, but $r = 15t$ and $5q = -30t$ are not equal.\n* Choice D ($p = 3$): assumes the equations must be identical; any nonzero multiple works, so $p$ could be $6$ or $-3$.\n\n**Test Day Takeaway:** \"Same line\" does not mean identical coefficients; it means proportional ones. Write $(p, q, r) = t(3, -6, 15)$ and test each choice for all $t$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "same-line-infinitely-many-solutions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- slope-as-rate-of-change-in-context (4 → 10) ---
  {
    id: "bank-alg-449",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The function $d(t) = 12t + 30$ gives the depth $d$, in centimeters, of water in a tank $t$ minutes after a pump is turned on. Which of the following is the best interpretation of the number $12$ in this context?",
    choices: [
      // distractor: describes the constant term 30, the depth at t = 0.
      { id: "A", text: "The depth of the water, in centimeters, when the pump is turned on" },
      // distractor: the depth after one minute is d(1) = 42, not 12.
      { id: "B", text: "The depth of the water, in centimeters, one minute after the pump is turned on" },
      // distractor: the depth is already 30 centimeters at t = 0; 12 is a rate in centimeters per minute, not a time.
      { id: "C", text: "The number of minutes it takes the depth of the water to reach $30$ centimeters" },
      { id: "D", text: "The increase in the depth of the water, in centimeters, each minute" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice D is correct.**\n\n**The Fast Way (~8s):** In $d = 12t + 30$, the coefficient of $t$ is the rate: the depth grows $12$ centimeters per minute.\n\n**The Full Solution:**\nStep 1: The function is linear in $t$, so $12$ is the slope and $30$ is the value at $t = 0$.\nStep 2: The slope is the change in $d$ per unit change in $t$: each additional minute adds $12$ centimeters of depth.\nStep 3: Check: $d(0) = 30$ and $d(1) = 42$; the difference $42 - 30 = 12$ is the per-minute increase. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (The depth of the water, in centimeters, when the pump is turned on): describes the constant term $30$, the depth at $t = 0$.\n* Choice B (The depth of the water, in centimeters, one minute after the pump is turned on): the depth after one minute is $d(1) = 42$, not $12$.\n* Choice C (The number of minutes it takes the depth of the water to reach $30$ centimeters): the depth is already $30$ centimeters at $t = 0$; $12$ is a rate in centimeters per minute, not a time.\n\n**Test Day Takeaway:** In $y = mx + b$, the coefficient of the input variable is always \"change in output per one unit of input\"; the constant is the starting value.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "slope-as-rate-of-change-in-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-450",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The total mass $m$, in grams, of a beaker and the salt solution it contains is given by $m = 1.2v + 85$, where $v$ is the volume, in milliliters, of solution in the beaker. Which of the following is the best interpretation of $1.2$ in this equation?",
    choices: [
      // distractor: describes the constant 85, the mass at v = 0.
      { id: "A", text: "The mass, in grams, of the empty beaker" },
      { id: "B", text: "The mass, in grams, of each milliliter of solution" },
      // distractor: treats 85 as a volume; 85 is a mass in grams, and no volume is being solved for.
      { id: "C", text: "The volume, in milliliters, of solution that has a mass of $85$ grams" },
      // distractor: the total mass with 1 milliliter is m(1) = 86.2 grams, not 1.2.
      { id: "D", text: "The total mass, in grams, of the beaker when it contains $1$ milliliter of solution" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~8s):** $1.2$ multiplies the volume, so it is the mass added per milliliter: each milliliter of solution has a mass of $1.2$ grams.\n\n**The Full Solution:**\nStep 1: The equation is linear with slope $1.2$ and constant $85$. The constant is the mass when $v = 0$, the empty beaker.\nStep 2: The slope is the change in total mass per one-milliliter increase in volume, which is the mass of one milliliter of solution.\nStep 3: Check: $m(1) - m(0) = 86.2 - 85 = 1.2$ grams per milliliter. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (The mass, in grams, of the empty beaker): describes the constant $85$, the mass at $v = 0$.\n* Choice C (The volume, in milliliters, of solution that has a mass of $85$ grams): treats $85$ as a volume; $85$ is a mass in grams, and no volume is being solved for.\n* Choice D (The total mass, in grams, of the beaker when it contains $1$ milliliter of solution): the total mass with $1$ milliliter is $m(1) = 86.2$ grams, not $1.2$.\n\n**Test Day Takeaway:** A slope's units are output units per input unit (here grams per milliliter); use that to pick the interpretation.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "slope-as-rate-of-change-in-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-451",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $A(t) = 12.5 - 0.4t$ models the area $A$, in thousands of square kilometers, of an ice sheet $t$ years after 2000. Which of the following is the best interpretation of $0.4$ in this context?",
    choices: [
      { id: "A", text: "The area of the ice sheet decreases by $400$ square kilometers each year." },
      // distractor: ignores that A is measured in thousands of square kilometers.
      { id: "B", text: "The area of the ice sheet decreases by $0.4$ square kilometers each year." },
      // distractor: confuses the rate with the initial value; the area in 2000 was 12.5 thousand, or 12{,}500, square kilometers.
      { id: "C", text: "The area of the ice sheet in 2000 was $400$ square kilometers." },
      // distractor: uses the initial value 12.5 thousand as if it were the yearly change.
      { id: "D", text: "The area of the ice sheet decreases by $12{,}500$ square kilometers each year." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** The slope $-0.4$ is in thousands of square kilometers per year; $0.4$ thousand is $400$ square kilometers lost each year.\n\n**The Full Solution:**\nStep 1: The model is linear with slope $-0.4$ and constant $12.5$. The negative slope means $A$ decreases as $t$ increases.\nStep 2: The units of $A$ are thousands of square kilometers, so a change of $0.4$ in $A$ is $0.4 \\times 1{,}000 = 400$ square kilometers, per year.\nStep 3: Check: $A(0) = 12.5$ and $A(1) = 12.1$; the drop of $0.4$ thousand square kilometers is $400$ square kilometers. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B (The area of the ice sheet decreases by $0.4$ square kilometers each year.): ignores that $A$ is measured in thousands of square kilometers.\n* Choice C (The area of the ice sheet in 2000 was $400$ square kilometers.): confuses the rate with the initial value; the area in 2000 was $12.5$ thousand, or $12{,}500$, square kilometers.\n* Choice D (The area of the ice sheet decreases by $12{,}500$ square kilometers each year.): uses the initial value $12.5$ thousand as if it were the yearly change.\n\n**Test Day Takeaway:** Check the units attached to the output variable; a slope of $0.4$ in \"thousands\" is a change of $400$ per unit of input.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "slope-as-rate-of-change-in-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-452",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The table gives the volume $V$, in liters, of fuel remaining in a generator's tank at several times $t$, in hours, after the generator was started. The relationship between $t$ and $V$ is linear. Which of the following is the best interpretation of the slope of the line that models this relationship?",
    diagram: { type: "dataTable", params: { headers: ["t (hours)", "V (liters)"], rows: [["0", "60"], ["2", "53"], ["5", "42.5"]] } },
    choices: [
      // distractor: reads the 7-liter drop between t = 0 and t = 2 as a per-hour rate without dividing by the 2-hour gap.
      { id: "A", text: "The volume of fuel in the tank decreases by $7$ liters each hour." },
      { id: "B", text: "The volume of fuel in the tank decreases by $3.5$ liters each hour." },
      // distractor: describes the V-intercept (V = 60 at t = 0), not the slope.
      { id: "C", text: "The tank contained $60$ liters of fuel when the generator was started." },
      // distractor: inverts the rate; hours per liter would be \frac{1}{3.5}, not 3.5.
      { id: "D", text: "The generator runs for $3.5$ hours on each liter of fuel." }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Slope $= \\frac{53 - 60}{2 - 0} = -3.5$ liters per hour: the tank loses $3.5$ liters every hour.\n\n**The Full Solution:**\nStep 1: Use two rows to compute the slope: $\\frac{\\Delta V}{\\Delta t} = \\frac{53 - 60}{2 - 0} = \\frac{-7}{2} = -3.5$.\nStep 2: The slope's units are liters per hour, and the negative sign means the volume is decreasing: $3.5$ liters are used each hour.\nStep 3: Check with the third row: $\\frac{42.5 - 53}{5 - 2} = \\frac{-10.5}{3} = -3.5$, the same rate, confirming the relationship is linear. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (The volume of fuel in the tank decreases by $7$ liters each hour.): reads the $7$-liter drop between $t = 0$ and $t = 2$ as a per-hour rate without dividing by the $2$-hour gap.\n* Choice C (The tank contained $60$ liters of fuel when the generator was started.): describes the $V$-intercept ($V = 60$ at $t = 0$), not the slope.\n* Choice D (The generator runs for $3.5$ hours on each liter of fuel.): inverts the rate; hours per liter would be $\\frac{1}{3.5}$, not $3.5$.\n\n**Test Day Takeaway:** Slope from a table is $\\frac{\\Delta \\text{output}}{\\Delta \\text{input}}$ between two rows; divide by the actual gap in the input, not by $1$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "slope-as-rate-of-change-in-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-453",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The temperature $T$, in degrees Celsius, of a liquid $m$ minutes after it is removed from a heat source is modeled by $T(m) = 92 - 1.5m$. Which of the following is the best interpretation of $1.5$ in this model?",
    choices: [
      // distractor: describes the constant 92, the temperature at m = 0.
      { id: "A", text: "The temperature of the liquid, in degrees Celsius, when it is removed from the heat source" },
      // distractor: the temperature after one minute is T(1) = 90.5, not 1.5.
      { id: "B", text: "The temperature of the liquid, in degrees Celsius, one minute after it is removed from the heat source" },
      { id: "C", text: "The decrease in the temperature of the liquid, in degrees Celsius, each minute" },
      // distractor: inverts the rate; cooling by 1 degree takes \frac{1}{1.5} of a minute, not 1.5 minutes.
      { id: "D", text: "The number of minutes it takes the liquid to cool by $1$ degree Celsius" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice C is correct.**\n\n**The Fast Way (~8s):** The coefficient of $m$ is $-1.5$: the temperature drops $1.5$ degrees Celsius per minute.\n\n**The Full Solution:**\nStep 1: The model is linear with slope $-1.5$ and constant $92$. The constant is the temperature at $m = 0$.\nStep 2: The slope is the change in temperature per one-minute increase in $m$; the negative sign means a decrease of $1.5$ degrees each minute.\nStep 3: Check: $T(0) = 92$ and $T(1) = 90.5$; the difference is $1.5$ degrees. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A (The temperature of the liquid, in degrees Celsius, when it is removed from the heat source): describes the constant $92$, the temperature at $m = 0$.\n* Choice B (The temperature of the liquid, in degrees Celsius, one minute after it is removed from the heat source): the temperature after one minute is $T(1) = 90.5$, not $1.5$.\n* Choice D (The number of minutes it takes the liquid to cool by $1$ degree Celsius): inverts the rate; cooling by $1$ degree takes $\\frac{1}{1.5}$ of a minute, not $1.5$ minutes.\n\n**Test Day Takeaway:** A subtracted coefficient is a negative slope: read it as \"decreases by (that much) per unit of input.\"",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "slope-as-rate-of-change-in-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-454",
    domain: "algebra",
    skills: ["slope-intercept-form"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A hot-air balloon's altitude is a linear function of the time since launch. The balloon's altitude was $950$ feet $3$ minutes after launch and $1{,}250$ feet $8$ minutes after launch. Which of the following is the best interpretation of the slope of the graph of this function?",
    choices: [
      // distractor: describes the altitude at t = 0, the intercept, rather than the slope.
      { id: "A", text: "The balloon's altitude at launch was $770$ feet." },
      // distractor: divides the 300-foot change by 3 (the first time value) instead of by the 5-minute gap.
      { id: "B", text: "The balloon's altitude increased by $100$ feet each minute." },
      // distractor: divides the 300-foot change by 8 (the second time value) instead of by the 5-minute gap.
      { id: "C", text: "The balloon's altitude increased by $37.5$ feet each minute." },
      { id: "D", text: "The balloon's altitude increased by $60$ feet each minute." }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Slope as Rate of Change in Context**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Slope $= \\frac{1{,}250 - 950}{8 - 3} = \\frac{300}{5} = 60$ feet per minute.\n\n**The Full Solution:**\nStep 1: The two data points are $(3, 950)$ and $(8, 1{,}250)$ in (minutes, feet).\nStep 2: Slope $= \\frac{\\Delta \\text{altitude}}{\\Delta \\text{time}} = \\frac{1{,}250 - 950}{8 - 3} = \\frac{300}{5} = 60$, in feet per minute.\nStep 3: Check: starting at $950$ feet and rising $60$ feet per minute for $5$ minutes gives $950 + 300 = 1{,}250$ feet. $\\checkmark$ (The intercept would be $950 - 60 \\cdot 3 = 770$, but that is not the slope.)\n\n**Why the wrong answers are tempting:**\n* Choice A (The balloon's altitude at launch was $770$ feet.): describes the altitude at $t = 0$, the intercept, rather than the slope.\n* Choice B (The balloon's altitude increased by $100$ feet each minute.): divides the $300$-foot change by $3$ (the first time value) instead of by the $5$-minute gap.\n* Choice C (The balloon's altitude increased by $37.5$ feet each minute.): divides the $300$-foot change by $8$ (the second time value) instead of by the $5$-minute gap.\n\n**Test Day Takeaway:** Slope is change in output over change in input between the two given points; the denominator is the difference of the times, not either time alone.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "slope-as-rate-of-change-in-context",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- slope-from-two-points (4 → 10) ---
  {
    id: "bank-alg-455",
    domain: "algebra",
    skills: ["slope-from-points"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Line $n$ in the $xy$-plane is shown. The points $(-4, -1)$ and $(4, 5)$ lie on line $n$. Which of the following is the slope of line $n$?",
    diagram: { type: "linearGraph", params: { slope: 0.75, yIntercept: 2, xRange: [-6, 6], yRange: [-4, 8], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[-4, -1], [4, 5]], label: "n" } },
    choices: [
      // distractor: is the negative reciprocal (a perpendicular slope); the line rises left to right, so its slope must be positive.
      { id: "A", text: "$-\\frac{4}{3}$" },
      { id: "B", text: "$\\frac{3}{4}$" },
      // distractor: puts the run over the rise, \frac{8}{6}.
      { id: "C", text: "$\\frac{4}{3}$" },
      // distractor: reports the rise 6 without dividing by the run 8.
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~8s):** From $(-4, -1)$ to $(4, 5)$ the line rises $6$ over a run of $8$: slope $\\frac{6}{8} = \\frac{3}{4}$.\n\n**The Full Solution:**\nStep 1: Slope $= \\frac{y_2 - y_1}{x_2 - x_1}$. Take $(x_1, y_1) = (-4, -1)$ and $(x_2, y_2) = (4, 5)$.\nStep 2: Rise $= 5 - (-1) = 6$; run $= 4 - (-4) = 8$. Slope $= \\frac{6}{8} = \\frac{3}{4}$.\nStep 3: Check against the graph: from $(-4, -1)$, moving right $4$ should raise the line by $\\frac{3}{4}(4) = 3$, reaching $(0, 2)$, the $y$-intercept shown. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{4}{3}$): is the negative reciprocal (a perpendicular slope); the line rises left to right, so its slope must be positive.\n* Choice C ($\\frac{4}{3}$): puts the run over the rise, $\\frac{8}{6}$.\n* Choice D ($6$): reports the rise $6$ without dividing by the run $8$.\n\n**Test Day Takeaway:** Subtract both coordinates in the same order and keep rise on top; a rising line must end up with a positive slope.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "slope-from-two-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-456",
    domain: "algebra",
    skills: ["slope-from-points"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane shown, points $P$ and $Q$ have coordinates $(-3, 7)$ and $(3, -2)$, respectively. What is the slope of line $PQ$?",
    diagram: { type: "coordinatePoints", params: { points: [[-3, 7], [3, -2]], xMin: -5, xMax: 5, yMin: -4, yMax: 9 } },
    choices: [
      { id: "A", text: "$-\\frac{3}{2}$" },
      // distractor: inverts the ratio, putting the run 6 over the rise -9.
      { id: "B", text: "$-\\frac{2}{3}$" },
      // distractor: is the negative reciprocal, the slope of a line perpendicular to PQ.
      { id: "C", text: "$\\frac{2}{3}$" },
      // distractor: drops the negative sign even though the line falls from left to right.
      { id: "D", text: "$\\frac{3}{2}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~8s):** Rise $= -2 - 7 = -9$, run $= 3 - (-3) = 6$; slope $= \\frac{-9}{6} = -\\frac{3}{2}$.\n\n**The Full Solution:**\nStep 1: Use $(x_1, y_1) = (-3, 7)$ and $(x_2, y_2) = (3, -2)$ in $\\frac{y_2 - y_1}{x_2 - x_1}$.\nStep 2: $\\frac{-2 - 7}{3 - (-3)} = \\frac{-9}{6} = -\\frac{3}{2}$.\nStep 3: Check: $Q$ is to the right of and below $P$, so the slope must be negative; from $P$, moving right $6$ and down $9$ lands on $Q$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{2}{3}$): inverts the ratio, putting the run $6$ over the rise $-9$.\n* Choice C ($\\frac{2}{3}$): is the negative reciprocal, the slope of a line perpendicular to $PQ$.\n* Choice D ($\\frac{3}{2}$): drops the negative sign even though the line falls from left to right.\n\n**Test Day Takeaway:** Glance at the plot first: a line falling left to right has a negative slope, which eliminates half the choices before any arithmetic.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "slope-from-two-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-457",
    domain: "algebra",
    skills: ["slope-from-points"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of the linear function $f$ is shown in the $xy$-plane. The graph has an $x$-intercept at $(5, 0)$ and a $y$-intercept at $(0, -3)$. What is the slope of the graph of $f$?",
    diagram: { type: "linearGraph", params: { slope: 0.6, yIntercept: -3, xRange: [-4, 8], yRange: [-6, 4], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[5, 0], [0, -3]], label: "f" } },
    choices: [
      // distractor: inverts the ratio and mishandles the sign of -3.
      { id: "A", text: "$-\\frac{5}{3}$" },
      // distractor: subtracts the coordinates in mismatched order, \frac{-3 - 0}{5 - 0}, producing a negative slope for a rising line.
      { id: "B", text: "$-\\frac{3}{5}$" },
      { id: "C", text: "$\\frac{3}{5}$" },
      // distractor: puts the run 5 over the rise 3.
      { id: "D", text: "$\\frac{5}{3}$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Between $(0, -3)$ and $(5, 0)$ the line rises $3$ over a run of $5$: slope $\\frac{3}{5}$.\n\n**The Full Solution:**\nStep 1: The two intercepts are points on the line: $(0, -3)$ and $(5, 0)$.\nStep 2: Slope $= \\frac{0 - (-3)}{5 - 0} = \\frac{3}{5}$.\nStep 3: Check: the graph rises from left to right, so the slope is positive; and $f(x) = \\frac{3}{5}x - 3$ gives $f(5) = 3 - 3 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\frac{5}{3}$): inverts the ratio and mishandles the sign of $-3$.\n* Choice B ($-\\frac{3}{5}$): subtracts the coordinates in mismatched order, $\\frac{-3 - 0}{5 - 0}$, producing a negative slope for a rising line.\n* Choice D ($\\frac{5}{3}$): puts the run $5$ over the rise $3$.\n\n**Test Day Takeaway:** Intercepts are just two points: $(a, 0)$ and $(0, b)$ give slope $\\frac{b - 0}{0 - a} = -\\frac{b}{a}$; here $-\\frac{-3}{5} = \\frac{3}{5}$.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "slope-from-two-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-458",
    domain: "algebra",
    skills: ["slope-from-points"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "What is the slope of the line in the $xy$-plane that contains the points $(-7, 2)$ and $(-1, -6)$?",
    choices: [
      { id: "A", text: "$-\\frac{4}{3}$" },
      // distractor: puts the run over the rise, \frac{6}{-8}.
      { id: "B", text: "$-\\frac{3}{4}$" },
      // distractor: computes the run as -1 - 7 = -8, dropping the double negative, and gets \frac{-8}{-8} = 1.
      { id: "C", text: "$1$" },
      // distractor: subtracts in mismatched order (y_2 - y_1 over x_1 - x_2), losing the negative sign.
      { id: "D", text: "$\\frac{4}{3}$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** Rise $= -6 - 2 = -8$; run $= -1 - (-7) = 6$; slope $= \\frac{-8}{6} = -\\frac{4}{3}$.\n\n**The Full Solution:**\nStep 1: Let $(x_1, y_1) = (-7, 2)$ and $(x_2, y_2) = (-1, -6)$. Slope $= \\frac{y_2 - y_1}{x_2 - x_1}$.\nStep 2: Numerator: $-6 - 2 = -8$. Denominator: $-1 - (-7) = -1 + 7 = 6$. Slope $= \\frac{-8}{6} = -\\frac{4}{3}$.\nStep 3: Check by reversing the order: $\\frac{2 - (-6)}{-7 - (-1)} = \\frac{8}{-6} = -\\frac{4}{3}$, the same value. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($-\\frac{3}{4}$): puts the run over the rise, $\\frac{6}{-8}$.\n* Choice C ($1$): computes the run as $-1 - 7 = -8$, dropping the double negative, and gets $\\frac{-8}{-8} = 1$.\n* Choice D ($\\frac{4}{3}$): subtracts in mismatched order ($y_2 - y_1$ over $x_1 - x_2$), losing the negative sign.\n\n**Test Day Takeaway:** Write $x_2 - x_1$ with the negative coordinate in parentheses, $-1 - (-7)$, so the double negative becomes an addition.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "slope-from-two-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-459",
    domain: "algebra",
    skills: ["slope-from-points"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The points $(-3, 5)$ and $(4, 5)$ are plotted in the $xy$-plane. Line $\\ell$ contains both points. What is the slope of line $\\ell$?",
    diagram: { type: "coordinatePoints", params: { points: [[-3, 5], [4, 5]], xMin: -5, xMax: 6, yMin: -2, yMax: 8 } },
    choices: [
      { id: "A", text: "$0$" },
      // distractor: reports the shared y-coordinate instead of the slope.
      { id: "B", text: "$5$" },
      // distractor: reports the run 4 - (-3) = 7 instead of rise over run.
      { id: "C", text: "$7$" },
      // distractor: confuses a horizontal line (slope 0) with a vertical line, whose slope is undefined because the run is 0.
      { id: "D", text: "The slope of line $\\ell$ is undefined." }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice A is correct.**\n\n**The Fast Way (~5s):** Both points have $y = 5$, so the line is horizontal: rise $0$, slope $0$.\n\n**The Full Solution:**\nStep 1: Slope $= \\frac{5 - 5}{4 - (-3)} = \\frac{0}{7}$.\nStep 2: A fraction with numerator $0$ and nonzero denominator equals $0$, so the slope is $0$.\nStep 3: Check: the plotted points are at the same height, so the line through them is horizontal, and horizontal lines have slope $0$ (the equation is $y = 5$). $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($5$): reports the shared $y$-coordinate instead of the slope.\n* Choice C ($7$): reports the run $4 - (-3) = 7$ instead of rise over run.\n* Choice D (The slope of line $\\ell$ is undefined.): confuses a horizontal line (slope $0$) with a vertical line, whose slope is undefined because the run is $0$.\n\n**Test Day Takeaway:** Same $y$-values means horizontal and slope $0$; same $x$-values means vertical and undefined slope. Zero on top is fine; zero on the bottom is not.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "slope-from-two-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-460",
    domain: "algebra",
    skills: ["slope-from-points"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A line in the $xy$-plane has slope $-\\frac{3}{2}$ and passes through the point $(-4, 5)$. Which of the following points also lies on the line?",
    choices: [
      // distractor: moves left 2 but still goes down 3; moving left with a negative slope goes UP, so the point at x = -6 is (-6, 8).
      { id: "A", text: "$(-6, 2)$" },
      { id: "B", text: "$(-2, 2)$" },
      // distractor: swaps rise and run, moving right 3 and down 2; the slope to (-1, 3) is \frac{-2}{3}, not -\frac{3}{2}.
      { id: "C", text: "$(-1, 3)$" },
      // distractor: drops the negative sign, rising 3 over a run of 2.
      { id: "D", text: "$(-2, 8)$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Slope $-\\frac{3}{2}$ means right $2$, down $3$: from $(-4, 5)$ that is $(-2, 2)$.\n\n**The Full Solution:**\nStep 1: A slope of $-\\frac{3}{2}$ means every run of $+2$ pairs with a rise of $-3$.\nStep 2: Starting at $(-4, 5)$: $x = -4 + 2 = -2$ and $y = 5 - 3 = 2$, so $(-2, 2)$ is on the line.\nStep 3: Check with the slope formula: $\\frac{2 - 5}{-2 - (-4)} = \\frac{-3}{2} = -\\frac{3}{2}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-6, 2)$): moves left $2$ but still goes down $3$; moving left with a negative slope goes UP, so the point at $x = -6$ is $(-6, 8)$.\n* Choice C ($(-1, 3)$): swaps rise and run, moving right $3$ and down $2$; the slope to $(-1, 3)$ is $\\frac{-2}{3}$, not $-\\frac{3}{2}$.\n* Choice D ($(-2, 8)$): drops the negative sign, rising $3$ over a run of $2$.\n\n**Test Day Takeaway:** Turn the slope into a move: $-\\frac{3}{2}$ is \"right $2$, down $3$\" (or \"left $2$, up $3$\"); apply it to the given point and verify with the slope formula.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "slope-from-two-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- solve-for-a-combination (4 → 10) ---
  {
    id: "bank-alg-461",
    domain: "algebra",
    skills: ["elimination-method"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "If $3x + y = 17$ and $x + 3y = 11$, what is the value of $x + y$?",
    choices: [
      // distractor: reports y = 2 alone.
      { id: "A", text: "$2$" },
      // distractor: reports x = 5 alone.
      { id: "B", text: "$5$" },
      { id: "C", text: "$7$" },
      // distractor: stops at 4x + 4y = 28 and forgets to divide by 4.
      { id: "D", text: "$28$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice C is correct.**\n\n**The Fast Way (~8s):** Add the equations: $4x + 4y = 28$, so $x + y = 7$.\n\n**The Full Solution:**\nStep 1: The target $x + y$ has equal coefficients, so look for a combination of the equations with equal $x$- and $y$-coefficients. Adding gives $4x + 4y = 28$.\nStep 2: Divide by $4$: $x + y = 7$. No need to find $x$ and $y$ separately.\nStep 3: Check by solving fully: subtracting $3$ times the second from the first gives $-8y = -16$, $y = 2$, then $x = 5$; $5 + 2 = 7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reports $y = 2$ alone.\n* Choice B ($5$): reports $x = 5$ alone.\n* Choice D ($28$): stops at $4x + 4y = 28$ and forgets to divide by $4$.\n\n**Test Day Takeaway:** When the question asks for a combination like $x + y$, try adding or subtracting the equations first; the combination often falls out in one step.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "solve-for-a-combination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-462",
    domain: "algebra",
    skills: ["elimination-method"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "If $5x - 2y = 19$ and $x + 2y = 5$, what is the value of $3x$?",
    choices: [
      // distractor: reports 3y = \frac{3}{2} instead of 3x.
      { id: "A", text: "$\\frac{3}{2}$" },
      // distractor: solves for x = 4 but forgets to multiply by 3.
      { id: "B", text: "$4$" },
      { id: "C", text: "$12$" },
      // distractor: reports 6x = 24 without halving it to get 3x.
      { id: "D", text: "$24$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice C is correct.**\n\n**The Fast Way (~8s):** The $y$-terms are opposites, so adding gives $6x = 24$; then $3x$ is half of that, $12$.\n\n**The Full Solution:**\nStep 1: Add the equations to eliminate $y$: $(5x - 2y) + (x + 2y) = 19 + 5$, so $6x = 24$.\nStep 2: The question asks for $3x$, which is $\\frac{6x}{2} = 12$. (Equivalently, $x = 4$ and $3(4) = 12$.)\nStep 3: Check: with $x = 4$, the second equation gives $2y = 1$, $y = \\frac{1}{2}$; then $5(4) - 2(\\frac{1}{2}) = 19$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{2}$): reports $3y = \\frac{3}{2}$ instead of $3x$.\n* Choice B ($4$): solves for $x = 4$ but forgets to multiply by $3$.\n* Choice D ($24$): reports $6x = 24$ without halving it to get $3x$.\n\n**Test Day Takeaway:** Read what is asked before finishing: $6x = 24$ is one step from $3x$ or from $x$, and the answer choices include both traps.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "solve-for-a-combination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-463",
    domain: "algebra",
    skills: ["elimination-method"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The solution to the system of equations $4x + y = 26$ and $4x - y = 14$ is $(x, y)$. What is the value of $xy$?",
    choices: [
      // distractor: computes x + y = 11 instead of the product.
      { id: "A", text: "$11$" },
      // distractor: reports 4x = 20.
      { id: "B", text: "$20$" },
      { id: "C", text: "$30$" },
      // distractor: reports 8x = 40, the sum of the right-hand sides.
      { id: "D", text: "$40$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Add: $8x = 40$, $x = 5$. Subtract: $2y = 12$, $y = 6$. So $xy = 30$.\n\n**The Full Solution:**\nStep 1: Add the equations to eliminate $y$: $8x = 40$, so $x = 5$.\nStep 2: Subtract the second from the first to eliminate $x$: $2y = 12$, so $y = 6$.\nStep 3: Then $xy = 5 \\cdot 6 = 30$. Check: $4(5) + 6 = 26$ and $4(5) - 6 = 14$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($11$): computes $x + y = 11$ instead of the product.\n* Choice B ($20$): reports $4x = 20$.\n* Choice D ($40$): reports $8x = 40$, the sum of the right-hand sides.\n\n**Test Day Takeaway:** Adding and subtracting the same pair of equations gives both variables quickly; then form exactly the expression asked for.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "solve-for-a-combination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-464",
    domain: "algebra",
    skills: ["elimination-method"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "If $2m + 5n = 31$ and $2m - 5n = -9$, what is the value of $n$?",
    choices: [
      { id: "A", text: "$4$" },
      // distractor: reports m = 5.5 instead of n.
      { id: "B", text: "$5.5$" },
      // distractor: reports 2m = 11 from adding the equations and halving.
      { id: "C", text: "$11$" },
      // distractor: stops at 10n = 40 without dividing by 10.
      { id: "D", text: "$40$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice A is correct.**\n\n**The Fast Way (~8s):** Subtract the second equation from the first: $10n = 40$, so $n = 4$.\n\n**The Full Solution:**\nStep 1: The $m$-terms are identical, so subtracting eliminates $m$: $(2m + 5n) - (2m - 5n) = 31 - (-9)$.\nStep 2: Simplify: $10n = 40$, so $n = 4$. Note $31 - (-9) = 40$, not $22$.\nStep 3: Check: adding the equations gives $4m = 22$, $m = 5.5$; then $2(5.5) + 5(4) = 31$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($5.5$): reports $m = 5.5$ instead of $n$.\n* Choice C ($11$): reports $2m = 11$ from adding the equations and halving.\n* Choice D ($40$): stops at $10n = 40$ without dividing by $10$.\n\n**Test Day Takeaway:** Subtracting a negative constant adds: $31 - (-9) = 40$. Then divide by the coefficient and confirm you reported the variable asked for.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "solve-for-a-combination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-465",
    domain: "algebra",
    skills: ["elimination-method"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "In the system of equations $\\frac{x}{2} + \\frac{y}{3} = 7$ and $\\frac{x}{3} + \\frac{y}{2} = 8$, what is the value of $x + y$?",
    choices: [
      // distractor: reports x = 6 alone.
      { id: "A", text: "$6$" },
      // distractor: reports y = 12 alone.
      { id: "B", text: "$12$" },
      // distractor: stops at 15, the sum of the right-hand sides, without dividing by the combined coefficient \frac{5}{6}.
      { id: "C", text: "$15$" },
      { id: "D", text: "$18$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** Add the equations: $\\left(\\frac{1}{2} + \\frac{1}{3}\\right)(x + y) = 15$, so $\\frac{5}{6}(x + y) = 15$ and $x + y = 18$.\n\n**The Full Solution:**\nStep 1: Adding the equations pairs the coefficients: $\\frac{x}{2} + \\frac{x}{3} = \\frac{5}{6}x$ and $\\frac{y}{3} + \\frac{y}{2} = \\frac{5}{6}y$, so $\\frac{5}{6}(x + y) = 15$.\nStep 2: Multiply by $\\frac{6}{5}$: $x + y = 18$.\nStep 3: Check by solving: multiply the first equation by $6$ ($3x + 2y = 42$) and the second by $6$ ($2x + 3y = 48$); subtracting $3$ times the second from $2$ times the first gives $-5y = -60$, $y = 12$, $x = 6$; $6 + 12 = 18$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): reports $x = 6$ alone.\n* Choice B ($12$): reports $y = 12$ alone.\n* Choice C ($15$): stops at $15$, the sum of the right-hand sides, without dividing by the combined coefficient $\\frac{5}{6}$.\n\n**Test Day Takeaway:** Symmetric coefficients (a pair swapped between the equations) are a signal: adding produces a multiple of $x + y$ directly.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "solve-for-a-combination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-466",
    domain: "algebra",
    skills: ["elimination-method"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The equations $4x + 3y - 2z = 21$ and $2x - 3y + 2z = 3$ are true for some values of $x$, $y$, and $z$. What is the value of $x$?",
    choices: [
      // distractor: subtracts the right-hand sides, 21 - 3 = 18, and divides by 6.
      { id: "A", text: "$3$" },
      { id: "B", text: "$4$" },
      // distractor: divides 24 by 2, the x-coefficient of the second equation, instead of by 6.
      { id: "C", text: "$12$" },
      // distractor: reports 6x = 24 without dividing by 6.
      { id: "D", text: "$24$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Solve for a Combination**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** The $y$- and $z$-terms are exact opposites, so adding the equations leaves $6x = 24$ and $x = 4$.\n\n**The Full Solution:**\nStep 1: Two equations cannot pin down three unknowns in general, so look for a combination that cancels both $y$ and $z$ at once: $3y$ with $-3y$ and $-2z$ with $2z$.\nStep 2: Add: $(4x + 3y - 2z) + (2x - 3y + 2z) = 21 + 3$, so $6x = 24$ and $x = 4$.\nStep 3: Check: substituting $x = 4$ gives $3y - 2z = 5$ and $-3y + 2z = -5$, which are consistent (the same condition), so $x = 4$ holds for every such solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): subtracts the right-hand sides, $21 - 3 = 18$, and divides by $6$.\n* Choice C ($12$): divides $24$ by $2$, the $x$-coefficient of the second equation, instead of by $6$.\n* Choice D ($24$): reports $6x = 24$ without dividing by $6$.\n\n**Test Day Takeaway:** Extra variables are not a problem when their terms are opposites; add the equations and the unwanted variables vanish together.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "solve-for-a-combination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- system-equivalence-check (4 → 10) ---
  {
    id: "bank-alg-467",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graphs of $3x - 7y = 5$ and $9x - 21y = k$, where $k$ is a constant, are the same line. What is the value of $k$?",
    choices: [
      // distractor: divides 5 by 3 instead of multiplying.
      { id: "A", text: "$\\frac{5}{3}$" },
      // distractor: keeps the constant 5 unchanged while the coefficients were tripled; that gives a parallel line.
      { id: "B", text: "$5$" },
      { id: "C", text: "$15$" },
      // distractor: multiplies 5 by 9, the new x-coefficient, instead of by the scale factor 3.
      { id: "D", text: "$45$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** The second equation's coefficients are $3$ times the first's, so $k = 3 \\cdot 5 = 15$.\n\n**The Full Solution:**\nStep 1: Compare coefficients: $9 = 3 \\cdot 3$ and $-21 = 3 \\cdot (-7)$, so the second equation is the first multiplied by $3$.\nStep 2: For the same line, the constant must be multiplied by the same factor: $k = 3 \\cdot 5 = 15$.\nStep 3: Check: dividing $9x - 21y = 15$ by $3$ returns $3x - 7y = 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{5}{3}$): divides $5$ by $3$ instead of multiplying.\n* Choice B ($5$): keeps the constant $5$ unchanged while the coefficients were tripled; that gives a parallel line.\n* Choice D ($45$): multiplies $5$ by $9$, the new $x$-coefficient, instead of by the scale factor $3$.\n\n**Test Day Takeaway:** Find the factor that turns one equation's coefficients into the other's, then apply that same factor to the constant.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-equivalence-check",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-468",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The equations $2x + 5y = 6$ and $ax + by = 18$, where $a$ and $b$ are constants, represent the same line in the $xy$-plane. What is the value of $a + b$?",
    choices: [
      // distractor: adds the original coefficients 2 + 5 without scaling them.
      { id: "A", text: "$7$" },
      // distractor: reports b = 15 alone.
      { id: "B", text: "$15$" },
      // distractor: reports the constant 18.
      { id: "C", text: "$18$" },
      { id: "D", text: "$21$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice D is correct.**\n\n**The Fast Way (~8s):** The constants go from $6$ to $18$, a factor of $3$, so $a = 6$ and $b = 15$; $a + b = 21$.\n\n**The Full Solution:**\nStep 1: Same line means the second equation is a multiple of the first. The constants fix the factor: $\\frac{18}{6} = 3$.\nStep 2: Apply the factor to each coefficient: $a = 3 \\cdot 2 = 6$ and $b = 3 \\cdot 5 = 15$.\nStep 3: $a + b = 6 + 15 = 21$. Check: $6x + 15y = 18$ divided by $3$ is $2x + 5y = 6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): adds the original coefficients $2 + 5$ without scaling them.\n* Choice B ($15$): reports $b = 15$ alone.\n* Choice C ($18$): reports the constant $18$.\n\n**Test Day Takeaway:** When the constant is the known pair, use it to find the multiplier, then scale every coefficient by it before combining.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-equivalence-check",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-469",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Which of the following equations represents the same line in the $xy$-plane as the equation $y = -\\frac{3}{4}x + 2$?",
    choices: [
      // distractor: multiplies the x-term by 4 but leaves the constant 2 unscaled; it has the same slope but intercept \frac{1}{2}.
      { id: "A", text: "$3x + 4y = 2$" },
      // distractor: mishandles the sign when moving -3x; its slope is \frac{3}{4}.
      { id: "B", text: "$3x - 4y = 8$" },
      // distractor: swaps the coefficients; its slope is -\frac{4}{3}.
      { id: "C", text: "$4x + 3y = 8$" },
      { id: "D", text: "$3x + 4y = 8$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice D is correct.**\n\n**The Fast Way (~8s):** Multiply by $4$: $4y = -3x + 8$; move the $x$-term: $3x + 4y = 8$.\n\n**The Full Solution:**\nStep 1: Clear the fraction by multiplying every term by $4$: $4y = -3x + 8$.\nStep 2: Add $3x$ to both sides to reach standard form: $3x + 4y = 8$.\nStep 3: Check: solving $3x + 4y = 8$ for $y$ gives $y = -\\frac{3}{4}x + 2$, the original equation. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3x + 4y = 2$): multiplies the $x$-term by $4$ but leaves the constant $2$ unscaled; it has the same slope but intercept $\\frac{1}{2}$.\n* Choice B ($3x - 4y = 8$): mishandles the sign when moving $-3x$; its slope is $\\frac{3}{4}$.\n* Choice C ($4x + 3y = 8$): swaps the coefficients; its slope is $-\\frac{4}{3}$.\n\n**Test Day Takeaway:** Multiply EVERY term (including the constant) by the denominator, then move the $x$-term with its sign flipped.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-equivalence-check",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-470",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The equation $-2x + 6y = 9$ is one of two equations in a system of linear equations that has infinitely many solutions. Which of the following could be the other equation in the system?",
    choices: [
      // distractor: halves the coefficients but not the constant; the constant should be \frac{9}{2}, so this line is parallel with no solution.
      { id: "A", text: "$-x + 3y = 9$" },
      // distractor: scales the coefficients by -2 but the constant by +2; the sign mismatch makes a distinct parallel line.
      { id: "B", text: "$4x - 12y = 18$" },
      { id: "C", text: "$4x - 12y = -18$" },
      // distractor: swaps the coefficients, changing the slope; that line crosses the given one exactly once.
      { id: "D", text: "$6x - 2y = 9$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Multiply the given equation by $-2$: $4x - 12y = -18$. Same line, infinitely many solutions.\n\n**The Full Solution:**\nStep 1: Infinitely many solutions means the other equation is a nonzero multiple of $-2x + 6y = 9$, with every term scaled by the same factor.\nStep 2: Choice C has $x$-coefficient $4 = -2(-2)$ and $y$-coefficient $-12 = -2(6)$, so the factor is $-2$; the constant must be $-2(9) = -18$, which matches.\nStep 3: Check: dividing $4x - 12y = -18$ by $-2$ gives $-2x + 6y = 9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-x + 3y = 9$): halves the coefficients but not the constant; the constant should be $\\frac{9}{2}$, so this line is parallel with no solution.\n* Choice B ($4x - 12y = 18$): scales the coefficients by $-2$ but the constant by $+2$; the sign mismatch makes a distinct parallel line.\n* Choice D ($6x - 2y = 9$): swaps the coefficients, changing the slope; that line crosses the given one exactly once.\n\n**Test Day Takeaway:** Test the factor on all three numbers; a factor that fits the coefficients but not the constant gives a parallel line, not the same line.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-equivalence-check",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-471",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The graph of $ky - 8x = 12$ in the $xy$-plane is the same as the graph of $3y - 2x = 3$, where $k$ is a constant. What is the value of $k$?",
    choices: [
      // distractor: divides 3 by the factor 4 instead of multiplying.
      { id: "A", text: "$\\frac{3}{4}$" },
      // distractor: copies the y-coefficient 3 without scaling it.
      { id: "B", text: "$3$" },
      // distractor: reports the scale factor 4 itself instead of 4 \cdot 3.
      { id: "C", text: "$4$" },
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice D is correct.**\n\n**The Fast Way (~8s):** From $-2x$ to $-8x$ and $3$ to $12$ the factor is $4$, so $k = 4 \\cdot 3 = 12$.\n\n**The Full Solution:**\nStep 1: The same graph means the first equation is a multiple of the second. Compare the known terms: $-8x = 4(-2x)$ and $12 = 4(3)$, so the factor is $4$.\nStep 2: Apply the factor to the $y$-coefficient: $k = 4 \\cdot 3 = 12$.\nStep 3: Check: $12y - 8x = 12$ divided by $4$ is $3y - 2x = 3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\frac{3}{4}$): divides $3$ by the factor $4$ instead of multiplying.\n* Choice B ($3$): copies the $y$-coefficient $3$ without scaling it.\n* Choice C ($4$): reports the scale factor $4$ itself instead of $4 \\cdot 3$.\n\n**Test Day Takeaway:** Two matching terms are enough to find the factor; check that both agree, then scale the term holding the unknown.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-equivalence-check",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-472",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The system of equations $ax - 6y = 8$ and $9x + by = -12$, where $a$ and $b$ are constants, has infinitely many solutions. What is the value of $a + b$?",
    choices: [
      // distractor: applies the negative factor to a but not to b, taking b = -9: -6 + (-9) = -15.
      { id: "A", text: "$-15$" },
      // distractor: uses the factor +\frac{3}{2} (ignoring the sign change from 8 to -12): a = 6, b = -9.
      { id: "B", text: "$-3$" },
      { id: "C", text: "$3$" },
      // distractor: works with magnitudes only, a = 6 and b = 9, dropping both signs.
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System Equivalence Check**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** The constants give the factor $\\frac{-12}{8} = -\\frac{3}{2}$. Then $9 = -\\frac{3}{2}a$ gives $a = -6$, and $b = -\\frac{3}{2}(-6) = 9$; $a + b = 3$.\n\n**The Full Solution:**\nStep 1: Same line means the second equation equals the first times some factor $t$. The constants are both known: $t = \\frac{-12}{8} = -\\frac{3}{2}$.\nStep 2: Match the $x$-terms: $9 = t \\cdot a = -\\frac{3}{2}a$, so $a = -6$. Match the $y$-terms: $b = t \\cdot (-6) = -\\frac{3}{2}(-6) = 9$.\nStep 3: $a + b = -6 + 9 = 3$. Check: $-\\frac{3}{2}(-6x - 6y) = 9x + 9y$ and $-\\frac{3}{2}(8) = -12$, giving $9x + 9y = -12$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-15$): applies the negative factor to $a$ but not to $b$, taking $b = -9$: $-6 + (-9) = -15$.\n* Choice B ($-3$): uses the factor $+\\frac{3}{2}$ (ignoring the sign change from $8$ to $-12$): $a = 6$, $b = -9$.\n* Choice D ($15$): works with magnitudes only, $a = 6$ and $b = 9$, dropping both signs.\n\n**Test Day Takeaway:** Let the fully known pair (here the constants) determine the factor, sign included, and apply that one factor to every other term.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-equivalence-check",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- system-of-equations-elimination (4 → 10) ---
  {
    id: "bank-alg-473",
    domain: "algebra",
    skills: ["elimination-method", "setting-up-systems"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "If $x + y = 21$ and $x - y = 9$, what is the value of $x$?",
    choices: [
      // distractor: reports y = 6 instead of x.
      { id: "A", text: "$6$" },
      // distractor: subtracts the equations, getting 2y = 12, and reports 12.
      { id: "B", text: "$12$" },
      { id: "C", text: "$15$" },
      // distractor: stops at 2x = 30 without dividing by 2.
      { id: "D", text: "$30$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System of Equations (Elimination)**\n\n**Choice C is correct.**\n\n**The Fast Way (~5s):** Add the equations: $2x = 30$, so $x = 15$.\n\n**The Full Solution:**\nStep 1: The $y$-terms are opposites ($+y$ and $-y$), so adding the equations eliminates $y$.\nStep 2: $(x + y) + (x - y) = 21 + 9$ gives $2x = 30$, so $x = 15$.\nStep 3: Check: then $y = 21 - 15 = 6$, and $15 - 6 = 9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($6$): reports $y = 6$ instead of $x$.\n* Choice B ($12$): subtracts the equations, getting $2y = 12$, and reports $12$.\n* Choice D ($30$): stops at $2x = 30$ without dividing by $2$.\n\n**Test Day Takeaway:** Opposite coefficients mean add; identical coefficients mean subtract. Then divide, and report the variable that was asked for.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-of-equations-elimination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-474",
    domain: "algebra",
    skills: ["elimination-method", "setting-up-systems"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "What is the value of $y$ in the solution to the system of equations $3x + y = 20$ and $x - y = 4$?",
    choices: [
      { id: "A", text: "$2$" },
      // distractor: reports the constant 4 from the second equation as if it were y.
      { id: "B", text: "$4$" },
      // distractor: reports x = 6 instead of y.
      { id: "C", text: "$6$" },
      // distractor: reports x + y = 8.
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: System of Equations (Elimination)**\n\n**Choice A is correct.**\n\n**The Fast Way (~8s):** Add to eliminate $y$: $4x = 24$, $x = 6$. Then $y = x - 4 = 2$.\n\n**The Full Solution:**\nStep 1: The $y$-terms are $+y$ and $-y$, so add the equations: $4x = 24$, giving $x = 6$.\nStep 2: Substitute into $x - y = 4$: $6 - y = 4$, so $y = 2$.\nStep 3: Check: $3(6) + 2 = 20$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): reports the constant $4$ from the second equation as if it were $y$.\n* Choice C ($6$): reports $x = 6$ instead of $y$.\n* Choice D ($8$): reports $x + y = 8$.\n\n**Test Day Takeaway:** Eliminating one variable is only half the job; substitute back and make sure the value you circle is the variable the question names.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-of-equations-elimination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-475",
    domain: "algebra",
    skills: ["elimination-method", "setting-up-systems"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The solution to the system of equations $5x + 3y = 27$ and $2x + 3y = 18$ is $(x, y)$. What is the value of $x$?",
    choices: [
      { id: "A", text: "$3$" },
      // distractor: reports y = 4 instead of x.
      { id: "B", text: "$4$" },
      // distractor: stops at 3x = 9 without dividing by 3.
      { id: "C", text: "$9$" },
      // distractor: adds the equations instead, getting 7x + 6y = 45, then divides 45 by 3.
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: System of Equations (Elimination)**\n\n**Choice A is correct.**\n\n**The Fast Way (~8s):** The $y$-terms match, so subtract: $3x = 9$, $x = 3$.\n\n**The Full Solution:**\nStep 1: Both equations contain $3y$, so subtracting the second from the first eliminates $y$.\nStep 2: $(5x + 3y) - (2x + 3y) = 27 - 18$ gives $3x = 9$, so $x = 3$.\nStep 3: Check: $2(3) + 3y = 18$ gives $y = 4$, and $5(3) + 3(4) = 27$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($4$): reports $y = 4$ instead of $x$.\n* Choice C ($9$): stops at $3x = 9$ without dividing by $3$.\n* Choice D ($15$): adds the equations instead, getting $7x + 6y = 45$, then divides $45$ by $3$.\n\n**Test Day Takeaway:** Identical terms cancel by subtraction; subtract the whole equation, constants included, then divide by the surviving coefficient.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-of-equations-elimination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-476",
    domain: "algebra",
    skills: ["elimination-method", "setting-up-systems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "For the system of equations $6x - 5y = 3$ and $6x + 2y = 24$, what is the value of $y$?",
    choices: [
      // distractor: subtracts in the other order, -7y = -21, and then forgets that dividing two negatives gives a positive.
      { id: "A", text: "$-3$" },
      { id: "B", text: "$3$" },
      // distractor: reports the coefficient 7 instead of solving 7y = 21.
      { id: "C", text: "$7$" },
      // distractor: stops at 7y = 21 without dividing by 7.
      { id: "D", text: "$21$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: System of Equations (Elimination)**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Subtract the first equation from the second: $7y = 21$, so $y = 3$.\n\n**The Full Solution:**\nStep 1: Both equations have $6x$, so subtracting eliminates $x$. Subtract the first from the second: $(6x + 2y) - (6x - 5y) = 24 - 3$.\nStep 2: Simplify: $2y - (-5y) = 7y$ and $24 - 3 = 21$, so $7y = 21$ and $y = 3$.\nStep 3: Check: $6x + 2(3) = 24$ gives $x = 3$, and $6(3) - 5(3) = 3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): subtracts in the other order, $-7y = -21$, and then forgets that dividing two negatives gives a positive.\n* Choice C ($7$): reports the coefficient $7$ instead of solving $7y = 21$.\n* Choice D ($21$): stops at $7y = 21$ without dividing by $7$.\n\n**Test Day Takeaway:** Subtracting a negative term adds: $2y - (-5y) = 7y$. Either subtraction order works if the signs are tracked on both sides.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-of-equations-elimination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-477",
    domain: "algebra",
    skills: ["elimination-method", "setting-up-systems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the system of equations $4x + 3y = 30$ and $7x - 3y = 36$, what is the value of $x$?",
    choices: [
      // distractor: reports y = 2 instead of x.
      { id: "A", text: "$2$" },
      { id: "B", text: "$6$" },
      // distractor: divides 66 by 3, the y-coefficient, instead of by 11.
      { id: "C", text: "$22$" },
      // distractor: stops at 11x = 66 without dividing by 11.
      { id: "D", text: "$66$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: System of Equations (Elimination)**\n\n**Choice B is correct.**\n\n**The Fast Way (~8s):** Add to cancel the $y$-terms: $11x = 66$, so $x = 6$.\n\n**The Full Solution:**\nStep 1: The $y$-terms are $+3y$ and $-3y$, so adding the equations eliminates $y$.\nStep 2: $(4x + 3y) + (7x - 3y) = 30 + 36$ gives $11x = 66$, so $x = 6$.\nStep 3: Check: $4(6) + 3y = 30$ gives $y = 2$, and $7(6) - 3(2) = 36$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): reports $y = 2$ instead of $x$.\n* Choice C ($22$): divides $66$ by $3$, the $y$-coefficient, instead of by $11$.\n* Choice D ($66$): stops at $11x = 66$ without dividing by $11$.\n\n**Test Day Takeaway:** After adding, divide by the combined coefficient of the surviving variable ($4 + 7 = 11$), not by a coefficient of the eliminated one.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-of-equations-elimination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-478",
    domain: "algebra",
    skills: ["elimination-method", "setting-up-systems"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$3x + 2y = 32$ and $5x - 4y = 2$. If $(x, y)$ is the solution to the given system of equations, what is the value of $xy$?",
    choices: [
      // distractor: computes x + y = 13 instead of the product.
      { id: "A", text: "$13$" },
      // distractor: uses x twice, 6 \cdot 6 = 36.
      { id: "B", text: "$36$" },
      { id: "C", text: "$42$" },
      // distractor: forgets to divide 2y = 14 by 2, taking y = 14 and getting 6 \cdot 14 = 84.
      { id: "D", text: "$84$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System of Equations (Elimination)**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** Double the first equation ($6x + 4y = 64$) and add: $11x = 66$, $x = 6$; then $2y = 14$, $y = 7$; $xy = 42$.\n\n**The Full Solution:**\nStep 1: No coefficients match yet. Multiply the first equation by $2$ so the $y$-terms become opposites: $6x + 4y = 64$.\nStep 2: Add to $5x - 4y = 2$: $11x = 66$, so $x = 6$. Substitute: $3(6) + 2y = 32$, so $2y = 14$ and $y = 7$.\nStep 3: $xy = 6 \\cdot 7 = 42$. Check: $5(6) - 4(7) = 30 - 28 = 2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($13$): computes $x + y = 13$ instead of the product.\n* Choice B ($36$): uses $x$ twice, $6 \\cdot 6 = 36$.\n* Choice D ($84$): forgets to divide $2y = 14$ by $2$, taking $y = 14$ and getting $6 \\cdot 14 = 84$.\n\n**Test Day Takeaway:** Scale one equation so a pair of terms becomes opposites, eliminate, back-substitute, and only then build the expression the question asks for.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-of-equations-elimination",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- system-of-equations-substitution (4 → 10) ---
  {
    id: "bank-alg-479",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The system of equations $y = 4x - 3$ and $2x + y = 15$ has solution $(x, y)$. What is the value of $y$?",
    choices: [
      // distractor: reports x = 3 instead of y.
      { id: "A", text: "$3$" },
      // distractor: drops the -3 when combining (6x = 15, x = 2.5) and gets y = 7.
      { id: "B", text: "$7$" },
      { id: "C", text: "$9$" },
      // distractor: computes 15 - 3 = 12, subtracting the constant instead of substituting.
      { id: "D", text: "$12$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System of Equations (Substitution)**\n\n**Choice C is correct.**\n\n**The Fast Way (~8s):** Substitute $4x - 3$ for $y$: $2x + 4x - 3 = 15$, so $x = 3$ and $y = 4(3) - 3 = 9$.\n\n**The Full Solution:**\nStep 1: The first equation gives $y$ in terms of $x$, so replace $y$ in the second: $2x + (4x - 3) = 15$.\nStep 2: Combine: $6x - 3 = 15$, so $6x = 18$ and $x = 3$.\nStep 3: Then $y = 4(3) - 3 = 9$. Check: $2(3) + 9 = 15$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): reports $x = 3$ instead of $y$.\n* Choice B ($7$): drops the $-3$ when combining ($6x = 15$, $x = 2.5$) and gets $y = 7$.\n* Choice D ($12$): computes $15 - 3 = 12$, subtracting the constant instead of substituting.\n\n**Test Day Takeaway:** Substitute the whole expression in parentheses, keep its constant, solve for $x$, then go back for the variable actually requested.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-of-equations-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-480",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The solution to the system of equations $x = 5 - 2y$ and $3x + y = 10$ is $(x, y)$. What is the value of $x$?",
    choices: [
      // distractor: distributes the 3 to the 5 only (15 - 2y + y = 10, y = 5), giving x = 5 - 10 = -5.
      { id: "A", text: "$-5$" },
      // distractor: reports y = 1 instead of x.
      { id: "B", text: "$1$" },
      { id: "C", text: "$3$" },
      // distractor: computes x = 5 + 2(1) = 7, flipping the sign of the 2y term.
      { id: "D", text: "$7$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System of Equations (Substitution)**\n\n**Choice C is correct.**\n\n**The Fast Way (~8s):** Substitute: $3(5 - 2y) + y = 10$, so $15 - 5y = 10$, $y = 1$, and $x = 5 - 2(1) = 3$.\n\n**The Full Solution:**\nStep 1: Replace $x$ in the second equation with $5 - 2y$: $3(5 - 2y) + y = 10$.\nStep 2: Distribute the $3$ to both terms: $15 - 6y + y = 10$, so $15 - 5y = 10$, $-5y = -5$, and $y = 1$.\nStep 3: Then $x = 5 - 2(1) = 3$. Check: $3(3) + 1 = 10$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-5$): distributes the $3$ to the $5$ only ($15 - 2y + y = 10$, $y = 5$), giving $x = 5 - 10 = -5$.\n* Choice B ($1$): reports $y = 1$ instead of $x$.\n* Choice D ($7$): computes $x = 5 + 2(1) = 7$, flipping the sign of the $2y$ term.\n\n**Test Day Takeaway:** When substituting into a term with a coefficient, distribute to every part of the expression: $3(5 - 2y) = 15 - 6y$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-of-equations-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-481",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "If $(x, y)$ is the solution to the system of equations $y = 2x + 3$ and $5x - y = 9$, what is the value of $y$?",
    choices: [
      // distractor: sign slip when distributing the negative (5x - 2x + 3 = 9 gives x = 2), and reports x
      { id: "A", text: "$2$" },
      // distractor: reports x instead of y
      { id: "B", text: "$4$" },
      // distractor: sign slip when distributing the negative gives x = 2, then y = 2(2) + 3 = 7
      { id: "C", text: "$7$" },
      { id: "D", text: "$11$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: System of Equations (Substitution)**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** The first equation already isolates $y$, so replace $y$ in the second equation: $5x - (2x + 3) = 9$ gives $3x = 12$, so $x = 4$ and $y = 2(4) + 3 = 11$.\n\n**The Full Solution:**\nStep 1: Substitute $2x + 3$ for $y$ in $5x - y = 9$: $5x - (2x + 3) = 9$. Distribute the negative to both terms: $5x - 2x - 3 = 9$.\nStep 2: Combine like terms: $3x - 3 = 9$, so $3x = 12$ and $x = 4$.\nStep 3: The question asks for $y$, so return to $y = 2x + 3$: $y = 2(4) + 3 = 11$. Check in the second equation: $5(4) - 11 = 20 - 11 = 9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($2$): distributes the negative to $2x$ only, writing $5x - 2x + 3 = 9$, which gives $x = 2$; it is also the wrong variable.\n* Choice B ($4$): is the value of $x$, not $y$; the question asks for $y$.\n* Choice C ($7$): follows the same sign slip as choice A ($x = 2$) and then computes $y = 2(2) + 3 = 7$.\n\n**Test Day Takeaway:** When you substitute an expression that is being subtracted, wrap it in parentheses so the negative reaches every term, then reread which variable the question wants.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-of-equations-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-482",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$$x = 4y - 7$$\n$$3x + 2y = 21$$\n\nWhat is the value of $y$ in the solution $(x, y)$ to the given system of equations?",
    choices: [
      // distractor: writes +21 instead of -21 after distributing 3 across (4y - 7), giving 14y = 0
      { id: "A", text: "$0$" },
      // distractor: distributes the 3 to 4y only (12y - 7 + 2y = 21), giving 14y = 28
      { id: "B", text: "$2$" },
      { id: "C", text: "$3$" },
      // distractor: reports x instead of y
      { id: "D", text: "$5$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System of Equations (Substitution)**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Replace $x$ with $4y - 7$ in the second equation: $3(4y - 7) + 2y = 21$, so $14y - 21 = 21$, $14y = 42$, and $y = 3$.\n\n**The Full Solution:**\nStep 1: The first equation gives $x$ in terms of $y$, so substitute into $3x + 2y = 21$: $3(4y - 7) + 2y = 21$.\nStep 2: Distribute the $3$ to both terms: $12y - 21 + 2y = 21$. Combine like terms: $14y - 21 = 21$, so $14y = 42$ and $y = 3$.\nStep 3: Check by finding $x = 4(3) - 7 = 5$ and testing the second equation: $3(5) + 2(3) = 15 + 6 = 21$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0$): treats $3(-7)$ as $+21$, producing $14y + 21 = 21$ and $y = 0$.\n* Choice B ($2$): multiplies only the $4y$ by $3$ and leaves the $-7$ alone, producing $14y - 7 = 21$ and $y = 2$.\n* Choice D ($5$): is the value of $x$, which the question does not ask for.\n\n**Test Day Takeaway:** Distributing a coefficient across a two-term substitution is where these systems break; multiply both terms, then check the requested variable with the equation you did not substitute into.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-of-equations-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-483",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "In the $xy$-plane, the graphs of $y = -2x + 9$ and $3x - 2y = 10$ intersect at the point $(a, b)$. What is the value of $a$?",
    choices: [
      // distractor: computes -2(-2x) as -4x instead of +4x, giving -x - 18 = 10
      { id: "A", text: "$-28$" },
      // distractor: reports b (the y-coordinate) instead of a
      { id: "B", text: "$1$" },
      { id: "C", text: "$4$" },
      // distractor: treats -2y as +2y, giving 3x - 4x + 18 = 10 and x = 8
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: System of Equations (Substitution)**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** The intersection point satisfies both equations, so substitute $-2x + 9$ for $y$: $3x - 2(-2x + 9) = 10$, which simplifies to $7x - 18 = 10$, so $x = 4$.\n\n**The Full Solution:**\nStep 1: At the intersection, the $y$-values agree, so replace $y$ in $3x - 2y = 10$ with $-2x + 9$: $3x - 2(-2x + 9) = 10$.\nStep 2: Distribute $-2$ carefully: $-2(-2x) = +4x$ and $-2(9) = -18$, so $3x + 4x - 18 = 10$, giving $7x = 28$ and $x = 4$.\nStep 3: The point is $(a, b) = (4, b)$ with $b = -2(4) + 9 = 1$. Check: $3(4) - 2(1) = 12 - 2 = 10$. $\\checkmark$ So $a = 4$.\n\n**Why the wrong answers are tempting:**\n* Choice A ($-28$): multiplies $-2$ by $-2x$ and gets $-4x$, leaving $-x - 18 = 10$ and $x = -28$.\n* Choice B ($1$): is $b$, the $y$-coordinate of the intersection point, not $a$.\n* Choice D ($8$): drops the negative on $-2y$, computing $3x + 2y = 10$, which gives $3x - 4x + 18 = 10$ and $x = 8$.\n\n**Test Day Takeaway:** A negative times a negative inside a substitution is the most common sign trap; write the two products separately ($+4x$ and $-18$) before combining.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-of-equations-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-484",
    domain: "algebra",
    skills: ["substitution-method"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$$\\dfrac{y}{3} = x + 2$$\n$$4x + 2y = 52$$\n\nIf $(x, y)$ is the solution to the given system of equations, what is the value of $x + y$?",
    choices: [
      // distractor: reports x alone
      { id: "A", text: "$4$" },
      // distractor: computes y - x instead of x + y
      { id: "B", text: "$14$" },
      // distractor: reports y alone (also the sum obtained by substituting y = x + 2, ignoring the 3)
      { id: "C", text: "$18$" },
      { id: "D", text: "$22$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: System of Equations (Substitution)**\n\n**Choice D is correct.**\n\n**The Fast Way (~25s):** Clear the fraction first: $y = 3x + 6$. Substituting into the second equation gives $4x + 2(3x + 6) = 52$, so $10x = 40$, $x = 4$, $y = 18$, and $x + y = 22$.\n\n**The Full Solution:**\nStep 1: Multiply both sides of $\\dfrac{y}{3} = x + 2$ by $3$ to isolate $y$: $y = 3x + 6$. Every term on the right gets multiplied, not just $x$.\nStep 2: Substitute into $4x + 2y = 52$: $4x + 2(3x + 6) = 52$, so $4x + 6x + 12 = 52$, $10x = 40$, and $x = 4$. Then $y = 3(4) + 6 = 18$.\nStep 3: The question asks for the sum: $x + y = 4 + 18 = 22$. Check the original first equation: $\\dfrac{18}{3} = 6 = 4 + 2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($4$): stops at $x = 4$ and forgets the question asks for $x + y$.\n* Choice B ($14$): subtracts, $18 - 4$, instead of adding the coordinates.\n* Choice C ($18$): is $y$ alone; it is also what you get by substituting $y = x + 2$ (multiplying only the left side by $3$, so the $3$ never reaches $x + 2$), which yields $x = 8$, $y = 10$, and a sum of $18$.\n\n**Test Day Takeaway:** When an equation gives a variable divided by a constant, multiply every term to clear it before substituting, and finish by computing exactly the combination the question names.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-of-equations-substitution",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- two-equation-system-from-a-word-problem (4 → 10) ---
  {
    id: "bank-alg-485",
    domain: "algebra",
    skills: ["word-problem-to-equation", "setting-up-systems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A pottery studio sold a total of $84$ mugs and bowls at a craft fair. The table gives the price, in dollars, of each item. If the studio collected a total of $1{,}224$ dollars from these sales, how many bowls were sold?",
    questionTable: { headers: ["Item", "Price (dollars)"], rows: [["Mug", "12"], ["Bowl", "18"]] },
    choices: [
      // distractor: reports the difference between the number of mugs and the number of bowls
      { id: "A", text: "$12$" },
      { id: "B", text: "$36$" },
      // distractor: reports the number of mugs (also results from swapping the two prices)
      { id: "C", text: "$48$" },
      // distractor: divides the total revenue by the bowl price, as if every item sold were a bowl
      { id: "D", text: "$68$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (~30s):** If all $84$ items had been mugs, revenue would be $12(84) = 1{,}008$ dollars. Each bowl instead of a mug adds $18 - 12 = 6$ dollars, and the actual revenue is $1{,}224 - 1{,}008 = 216$ dollars higher, so there were $\\dfrac{216}{6} = 36$ bowls.\n\n**The Full Solution:**\nStep 1: Let $m$ be the number of mugs and $b$ the number of bowls. The count gives $m + b = 84$, and the table's prices give the revenue equation $12m + 18b = 1{,}224$.\nStep 2: Solve the count equation for $m$: $m = 84 - b$. Substitute: $12(84 - b) + 18b = 1{,}224$, so $1{,}008 - 12b + 18b = 1{,}224$, giving $6b = 216$ and $b = 36$.\nStep 3: Then $m = 84 - 36 = 48$. Check the revenue: $12(48) + 18(36) = 576 + 648 = 1{,}224$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($12$): is $48 - 36$, the difference between the two counts, not the number of bowls.\n* Choice C ($48$): is the number of mugs; it is also the bowl count you get if the prices are attached to the wrong items ($18m + 12b = 1{,}224$).\n* Choice D ($68$): divides $1{,}224$ by $18$, which assumes all $84$ items were bowls and ignores the count equation.\n\n**Test Day Takeaway:** A two-price word problem always gives two equations: one for the count and one for the money; solve the count equation for one variable and substitute into the money equation.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "two-equation-system-from-a-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-486",
    domain: "algebra",
    skills: ["word-problem-to-equation", "setting-up-systems"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "The sum of two numbers is $53$, and their difference is $17$. What is the larger of the two numbers?",
    choices: [
      // distractor: reports the smaller number
      { id: "A", text: "$18$" },
      { id: "B", text: "$35$" },
      // distractor: computes 53 - 17 and forgets to divide by 2
      { id: "C", text: "$36$" },
      // distractor: computes 53 + 17 and forgets to divide by 2
      { id: "D", text: "$70$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** Adding the sum and the difference doubles the larger number: $53 + 17 = 70$, so the larger number is $\\dfrac{70}{2} = 35$.\n\n**The Full Solution:**\nStep 1: Let $L$ be the larger number and $S$ the smaller. The conditions give $L + S = 53$ and $L - S = 17$.\nStep 2: Add the two equations: the $S$ terms cancel, leaving $2L = 70$, so $L = 35$.\nStep 3: Then $S = 53 - 35 = 18$. Check the difference: $35 - 18 = 17$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($18$): is the smaller number, found from $2S = 53 - 17 = 36$.\n* Choice C ($36$): stops at $53 - 17 = 36$, which is $2S$, without dividing by $2$.\n* Choice D ($70$): stops at $53 + 17 = 70$, which is $2L$, without dividing by $2$.\n\n**Test Day Takeaway:** Sum and difference of two numbers: add the equations to get twice the larger, subtract to get twice the smaller, and always finish with the division by $2$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "two-equation-system-from-a-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-487",
    domain: "algebra",
    skills: ["word-problem-to-equation", "setting-up-systems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A ferry sold $250$ tickets for one crossing. The table gives the price, in dollars, of each type of ticket. The total amount collected from these ticket sales was $3{,}700$ dollars. How many walk-on tickets were sold?",
    questionTable: { headers: ["Ticket type", "Price (dollars)"], rows: [["Walk-on", "10"], ["Vehicle", "25"]] },
    choices: [
      // distractor: reports the number of vehicle tickets
      { id: "A", text: "$80$" },
      // distractor: reports the difference between walk-on and vehicle tickets
      { id: "B", text: "$90$" },
      // distractor: divides the total collected by the vehicle price, ignoring the ticket count
      { id: "C", text: "$148$" },
      { id: "D", text: "$170$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** If all $250$ tickets were walk-on, the total would be $10(250) = 2{,}500$ dollars. The extra $3{,}700 - 2{,}500 = 1{,}200$ dollars comes from vehicle tickets at $25 - 10 = 15$ dollars more each, so there were $\\dfrac{1{,}200}{15} = 80$ vehicle tickets and $250 - 80 = 170$ walk-on tickets.\n\n**The Full Solution:**\nStep 1: Let $w$ be the number of walk-on tickets and $v$ the number of vehicle tickets. The count equation is $w + v = 250$; using the table's prices, the money equation is $10w + 25v = 3{,}700$.\nStep 2: Substitute $w = 250 - v$: $10(250 - v) + 25v = 3{,}700$, so $2{,}500 + 15v = 3{,}700$, giving $15v = 1{,}200$ and $v = 80$.\nStep 3: The question asks for walk-on tickets: $w = 250 - 80 = 170$. Check: $10(170) + 25(80) = 1{,}700 + 2{,}000 = 3{,}700$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($80$): is the number of vehicle tickets, the variable you solve for first; the question asks for walk-on tickets.\n* Choice B ($90$): is $170 - 80$, the gap between the two counts.\n* Choice C ($148$): is $3{,}700 \\div 25$, treating every ticket as a vehicle ticket and ignoring the count of $250$.\n\n**Test Day Takeaway:** In a two-equation word problem, the variable you solve for first is usually not the one asked for; substitute back and reread the question before choosing.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "two-equation-system-from-a-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-488",
    domain: "algebra",
    skills: ["word-problem-to-equation", "setting-up-systems"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "A shipment consists of $60$ crates, each of which is either small or large. The table gives the mass, in kilograms, of each type of crate. If the total mass of the shipment is $1{,}375$ kilograms, how many large crates are in the shipment?",
    questionTable: { headers: ["Crate type", "Mass (kilograms)"], rows: [["Small", "15"], ["Large", "40"]] },
    choices: [
      { id: "A", text: "$19$" },
      // distractor: reports the difference between the number of small and large crates
      { id: "B", text: "$22$" },
      // distractor: divides the total mass by 15 + 40 = 55, the mass of one crate of each type
      { id: "C", text: "$25$" },
      // distractor: reports the number of small crates (also results from swapping the two masses)
      { id: "D", text: "$41$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** Sixty small crates would have mass $15(60) = 900$ kilograms. The shipment is $1{,}375 - 900 = 475$ kilograms heavier, and each large crate adds $40 - 15 = 25$ kilograms over a small one, so there are $\\dfrac{475}{25} = 19$ large crates.\n\n**The Full Solution:**\nStep 1: Let $s$ be the number of small crates and $L$ the number of large crates. The count equation is $s + L = 60$, and from the table the mass equation is $15s + 40L = 1{,}375$.\nStep 2: Substitute $s = 60 - L$: $15(60 - L) + 40L = 1{,}375$, so $900 + 25L = 1{,}375$, giving $25L = 475$ and $L = 19$.\nStep 3: Then $s = 60 - 19 = 41$. Check: $15(41) + 40(19) = 615 + 760 = 1{,}375$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($22$): is $41 - 19$, the difference between the two counts.\n* Choice C ($25$): divides $1{,}375$ by $55$, the combined mass of one small and one large crate, which would only be right if the two counts were equal.\n* Choice D ($41$): is the number of small crates; it also results from assigning $40$ kilograms to the small crates and $15$ to the large ones.\n\n**Test Day Takeaway:** Pair the count equation with the total-quantity equation, solve for the variable the question asks about, and use the other variable only for the check.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "two-equation-system-from-a-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-489",
    domain: "algebra",
    skills: ["word-problem-to-equation", "setting-up-systems"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "A wire $60$ centimeters long is cut into two pieces. One piece is $14$ centimeters longer than the other. What is the length, in centimeters, of the shorter piece?",
    choices: [
      { id: "A", text: "$23$" },
      // distractor: halves the total length and ignores the 14-centimeter difference
      { id: "B", text: "$30$" },
      // distractor: reports the longer piece
      { id: "C", text: "$37$" },
      // distractor: subtracts 14 from 60 but never divides by 2
      { id: "D", text: "$46$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** Remove the extra $14$ centimeters and the two pieces would be equal: $60 - 14 = 46$, so each would be $23$ centimeters. The shorter piece is $23$ centimeters.\n\n**The Full Solution:**\nStep 1: Let $s$ be the length of the shorter piece and $\\ell$ the length of the longer piece, in centimeters. The wire gives $s + \\ell = 60$, and the comparison gives $\\ell = s + 14$.\nStep 2: Substitute: $s + (s + 14) = 60$, so $2s + 14 = 60$, $2s = 46$, and $s = 23$.\nStep 3: Then $\\ell = 23 + 14 = 37$. Check the total: $23 + 37 = 60$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($30$): splits the wire in half, ignoring that one piece is $14$ centimeters longer.\n* Choice C ($37$): is the longer piece, not the shorter one.\n* Choice D ($46$): subtracts $14$ from $60$ and stops, forgetting that $46$ is the combined length of two equal pieces.\n\n**Test Day Takeaway:** \"One is $k$ more than the other\" plus a total is a two-equation system in disguise: subtract $k$ from the total, halve it, and read off which piece was asked for.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "two-equation-system-from-a-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-490",
    domain: "algebra",
    skills: ["word-problem-to-equation", "setting-up-systems"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "A florist sold small and large bouquets at a weekend market. The table gives the price, in dollars, of each size. The florist sold $5$ more than twice as many small bouquets as large bouquets and collected a total of $880$ dollars from these sales. How many large bouquets did the florist sell?",
    questionTable: { headers: ["Bouquet size", "Price (dollars)"], rows: [["Small", "8"], ["Large", "24"]] },
    choices: [
      { id: "A", text: "$21$" },
      // distractor: drops the "5 more" and uses s = 2L, giving 40L = 880
      { id: "B", text: "$22$" },
      // distractor: reports the number of small bouquets
      { id: "C", text: "$47$" },
      // distractor: reports the total number of bouquets
      { id: "D", text: "$68$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Two-Equation System from a Word Problem**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** Write the small count in terms of the large count, $s = 2L + 5$, and put it straight into the revenue equation: $8(2L + 5) + 24L = 880$, so $40L + 40 = 880$ and $L = 21$.\n\n**The Full Solution:**\nStep 1: Let $L$ be the number of large bouquets and $s$ the number of small bouquets. \"$5$ more than twice as many small as large\" translates to $s = 2L + 5$. The table's prices give the revenue equation $8s + 24L = 880$.\nStep 2: Substitute: $8(2L + 5) + 24L = 880$, so $16L + 40 + 24L = 880$, giving $40L = 840$ and $L = 21$.\nStep 3: Then $s = 2(21) + 5 = 47$. Check the revenue: $8(47) + 24(21) = 376 + 504 = 880$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($22$): translates the relationship as $s = 2L$, losing the \"$5$ more,\" so $40L = 880$ and $L = 22$.\n* Choice C ($47$): is the number of small bouquets.\n* Choice D ($68$): is $47 + 21$, the total number of bouquets, which the question never asks for.\n\n**Test Day Takeaway:** \"$a$ more than $b$ times as many\" becomes $b(\\text{other}) + a$; translate it as a single expression, substitute into the money equation, and let the constant term do its work.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "two-equation-system-from-a-word-problem",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- two-step-linear-equation (4 → 10) ---
  {
    id: "bank-alg-491",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$$4x + 8 = 60$$\n\nWhat value of $x$ is the solution to the given equation?",
    choices: [
      // distractor: divides 60 by 4 first and then subtracts 8
      { id: "A", text: "$7$" },
      { id: "B", text: "$13$" },
      // distractor: adds 8 to 60 instead of subtracting, then divides by 4
      { id: "C", text: "$17$" },
      // distractor: subtracts 8 but never divides by 4
      { id: "D", text: "$52$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Undo the $+8$ first, then the $\\times 4$: $4x = 52$, so $x = 13$.\n\n**The Full Solution:**\nStep 1: Isolate the variable term by subtracting $8$ from both sides: $4x + 8 - 8 = 60 - 8$, so $4x = 52$.\nStep 2: Divide both sides by $4$: $x = \\dfrac{52}{4} = 13$.\nStep 3: Check: $4(13) + 8 = 52 + 8 = 60$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($7$): divides $60$ by $4$ before removing the $8$, then subtracts $8$ from $15$; the constant must be undone before the coefficient.\n* Choice C ($17$): adds $8$ to $60$ instead of subtracting, giving $\\dfrac{68}{4}$.\n* Choice D ($52$): stops at $4x = 52$ and reports $52$ as if it were $x$.\n\n**Test Day Takeaway:** Undo operations in reverse order: subtract (or add) the constant first, then divide by the coefficient, and plug the result back in.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "two-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-492",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "$$3x + 6 = 21$$\n\nWhich of the following is the solution to the given equation?",
    choices: [
      { id: "A", text: "$5$" },
      // distractor: adds 6 to 21 instead of subtracting, then divides by 3
      { id: "B", text: "$9$" },
      // distractor: divides 21 by 3 first and then adds 6
      { id: "C", text: "$13$" },
      // distractor: subtracts 6 but never divides by 3
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice A is correct.**\n\n**The Fast Way (~10s):** $3x = 21 - 6 = 15$, so $x = 5$.\n\n**The Full Solution:**\nStep 1: Subtract $6$ from both sides to isolate the $x$-term: $3x = 15$.\nStep 2: Divide both sides by $3$: $x = 5$.\nStep 3: Check: $3(5) + 6 = 15 + 6 = 21$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($9$): adds $6$ to $21$ instead of subtracting, giving $\\dfrac{27}{3} = 9$.\n* Choice C ($13$): divides $21$ by $3$ first, then adds $6$ to $7$, undoing the operations in the wrong order.\n* Choice D ($15$): is the value of $3x$, not $x$; the division by $3$ was skipped.\n\n**Test Day Takeaway:** A two-step equation is solved by peeling off the constant, then the coefficient; a ten-second substitution check catches every one of these slips.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "two-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-493",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "For what value of $x$ is the expression $-4x + 10$ equal to $34$?",
    choices: [
      // distractor: adds 10 to 34 instead of subtracting, giving -4x = 44
      { id: "A", text: "$-11$" },
      { id: "B", text: "$-6$" },
      // distractor: drops the negative sign on the coefficient and divides 24 by 4
      { id: "C", text: "$6$" },
      // distractor: stops at -4x = 24 and reports 24
      { id: "D", text: "$24$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Set $-4x + 10 = 34$. Then $-4x = 24$, so $x = -6$.\n\n**The Full Solution:**\nStep 1: Translate the sentence into the equation $-4x + 10 = 34$ and subtract $10$ from both sides: $-4x = 24$.\nStep 2: Divide both sides by $-4$, keeping the sign: $x = \\dfrac{24}{-4} = -6$.\nStep 3: Check: $-4(-6) + 10 = 24 + 10 = 34$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-11$): adds $10$ to $34$ instead of subtracting, producing $-4x = 44$.\n* Choice C ($6$): divides $24$ by $4$ instead of by $-4$, losing the sign of the coefficient.\n* Choice D ($24$): isolates $-4x = 24$ and stops, never dividing by the coefficient.\n\n**Test Day Takeaway:** A negative coefficient is part of the coefficient; when you divide, divide by the whole thing, sign included, and confirm with a substitution.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "two-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-494",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$$\\dfrac{x}{5} - 7 = 3$$\n\nWhat is the solution to the given equation?",
    choices: [
      // distractor: subtracts 7 from 3 instead of adding, then multiplies by 5
      { id: "A", text: "$-20$" },
      // distractor: divides 10 by 5 instead of multiplying
      { id: "B", text: "$2$" },
      // distractor: multiplies 3 by 5 first and then subtracts 7
      { id: "C", text: "$8$" },
      { id: "D", text: "$50$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice D is correct.**\n\n**The Fast Way (~10s):** Add $7$ to get $\\dfrac{x}{5} = 10$, then multiply by $5$: $x = 50$.\n\n**The Full Solution:**\nStep 1: Add $7$ to both sides to isolate the fraction: $\\dfrac{x}{5} = 10$.\nStep 2: The variable is divided by $5$, so undo that by multiplying both sides by $5$: $x = 50$.\nStep 3: Check: $\\dfrac{50}{5} - 7 = 10 - 7 = 3$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-20$): subtracts $7$ from $3$ instead of adding, giving $\\dfrac{x}{5} = -4$ and $x = -20$.\n* Choice B ($2$): divides $10$ by $5$; but $x$ is already divided by $5$, so the inverse operation is multiplication.\n* Choice C ($8$): multiplies $3$ by $5$ first and then subtracts $7$, undoing the steps in the wrong order.\n\n**Test Day Takeaway:** $\\dfrac{x}{5}$ means $x$ divided by $5$, so after isolating it you multiply by $5$; add the constant back before touching the fraction.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "two-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-495",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "$$5x + 9 - 2x = 30$$\n\nWhat value of $x$ satisfies the given equation?",
    choices: [
      // distractor: adds the coefficients (5 + 2 = 7) instead of subtracting, giving 7x = 21
      { id: "A", text: "$3$" },
      { id: "B", text: "$7$" },
      // distractor: moves the 9 to the right side with the wrong sign, giving 3x = 39
      { id: "C", text: "$13$" },
      // distractor: combines to 3x = 21 but never divides by 3
      { id: "D", text: "$21$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~10s):** Combine the $x$-terms first: $3x + 9 = 30$, so $3x = 21$ and $x = 7$.\n\n**The Full Solution:**\nStep 1: Combine like terms on the left: $5x - 2x = 3x$, so the equation is $3x + 9 = 30$.\nStep 2: Subtract $9$ from both sides: $3x = 21$. Divide by $3$: $x = 7$.\nStep 3: Check in the original form: $5(7) + 9 - 2(7) = 35 + 9 - 14 = 30$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3$): treats $-2x$ as $+2x$ and combines to $7x + 9 = 30$, giving $x = 3$.\n* Choice C ($13$): adds $9$ to $30$ instead of subtracting, producing $3x = 39$.\n* Choice D ($21$): is the value of $3x$; the final division by $3$ was skipped.\n\n**Test Day Takeaway:** Collect like terms before isolating anything; the sign in front of each term travels with it when you combine.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "two-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-496",
    domain: "algebra",
    skills: ["combining-like-terms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Which of the following is the value of $x$ that satisfies the equation $2.5x - 4 = 11$?",
    choices: [
      // distractor: divides 11 by 2.5 first and then subtracts 4
      { id: "A", text: "$0.4$" },
      // distractor: subtracts 4 from 11 instead of adding, then divides by 2.5
      { id: "B", text: "$2.8$" },
      { id: "C", text: "$6$" },
      // distractor: adds 4 to get 15 but never divides by 2.5
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Two-Step Linear Equation**\n\n**Choice C is correct.**\n\n**The Fast Way (~10s):** Add $4$: $2.5x = 15$. Since $2.5 \\times 6 = 15$, $x = 6$.\n\n**The Full Solution:**\nStep 1: Add $4$ to both sides to isolate the variable term: $2.5x = 15$.\nStep 2: Divide both sides by $2.5$. Writing $2.5 = \\dfrac{5}{2}$ makes it clean: $x = 15 \\cdot \\dfrac{2}{5} = 6$.\nStep 3: Check: $2.5(6) - 4 = 15 - 4 = 11$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($0.4$): divides $11$ by $2.5$ to get $4.4$, then subtracts $4$; the constant must be undone first.\n* Choice B ($2.8$): subtracts $4$ from $11$ instead of adding, then divides $7$ by $2.5$.\n* Choice D ($15$): is the value of $2.5x$ after adding $4$; the division by the coefficient was skipped.\n\n**Test Day Takeaway:** A decimal coefficient changes nothing about the order of operations; turn $2.5$ into $\\dfrac{5}{2}$ and dividing becomes multiplying by $\\dfrac{2}{5}$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "two-step-linear-equation",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // --- vertex-form-to-standard-form (4 → 10) ---
  {
    id: "bank-alg-497",
    domain: "algebra",
    skills: ["distributive-property", "converting-quadratic-forms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "Which of the following expressions is equivalent to $(x + 4)^2 - 9$ for all values of $x$?",
    choices: [
      { id: "A", text: "$x^2 + 8x + 7$" },
      // distractor: adds 9 to 16 instead of subtracting
      { id: "B", text: "$x^2 + 8x + 25$" },
      // distractor: uses 4x for the middle term instead of 2(4)x = 8x
      { id: "C", text: "$x^2 + 4x + 7$" },
      // distractor: squares term by term, (x + 4)^2 = x^2 + 16, dropping the middle term
      { id: "D", text: "$x^2 + 7$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice A is correct.**\n\n**The Fast Way (~15s):** $(x + 4)^2 = x^2 + 8x + 16$; subtract $9$ to get $x^2 + 8x + 7$.\n\n**The Full Solution:**\nStep 1: Expand the square as a product: $(x + 4)(x + 4) = x^2 + 4x + 4x + 16 = x^2 + 8x + 16$.\nStep 2: Apply the $-9$: $x^2 + 8x + 16 - 9 = x^2 + 8x + 7$.\nStep 3: Check with $x = 1$: the original gives $(5)^2 - 9 = 16$, and $1 + 8 + 7 = 16$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($x^2 + 8x + 25$): adds the $9$ to $16$ instead of subtracting it.\n* Choice C ($x^2 + 4x + 7$): keeps only one of the two $4x$ cross terms, so the middle coefficient is half of what it should be.\n* Choice D ($x^2 + 7$): squares $x$ and $4$ separately as $x^2 + 16$; a binomial squared always has a middle term.\n\n**Test Day Takeaway:** $(x + a)^2 = x^2 + 2ax + a^2$: double the cross term, square the constant, then apply the outside constant last.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-to-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-498",
    domain: "algebra",
    skills: ["distributive-property", "converting-quadratic-forms"],
    difficulty: "easy",
    type: "multiple-choice",
    question: "For all values of $x$, which expression is equivalent to $(x - 6)^2 + 2$?",
    choices: [
      // distractor: writes -36 instead of +36 for (-6)^2
      { id: "A", text: "$x^2 - 12x - 34$" },
      // distractor: drops the middle term by squaring term by term
      { id: "B", text: "$x^2 + 38$" },
      { id: "C", text: "$x^2 - 12x + 38$" },
      // distractor: uses +12x for the middle term, losing the sign of -6
      { id: "D", text: "$x^2 + 12x + 38$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~15s):** $(x - 6)^2 = x^2 - 12x + 36$, and adding $2$ gives $x^2 - 12x + 38$.\n\n**The Full Solution:**\nStep 1: Expand $(x - 6)(x - 6) = x^2 - 6x - 6x + 36 = x^2 - 12x + 36$. Note $(-6)(-6) = +36$.\nStep 2: Add the constant outside the square: $x^2 - 12x + 36 + 2 = x^2 - 12x + 38$.\nStep 3: Check with $x = 6$: the original is $0 + 2 = 2$, and $36 - 72 + 38 = 2$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($x^2 - 12x - 34$): treats $(-6)^2$ as $-36$; a square of a negative is positive.\n* Choice B ($x^2 + 38$): squares $x$ and $-6$ separately and omits the $-12x$ middle term.\n* Choice D ($x^2 + 12x + 38$): forgets that the cross term $2(-6)x$ is negative.\n\n**Test Day Takeaway:** Track two signs when expanding $(x - a)^2$: the middle term is $-2ax$ and the constant $a^2$ is positive.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-to-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-499",
    domain: "algebra",
    skills: ["distributive-property", "converting-quadratic-forms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The expression $3(x + 2)^2 - 5$ is equivalent to which of the following expressions?",
    choices: [
      // distractor: drops the middle term of the square
      { id: "A", text: "$3x^2 + 7$" },
      // distractor: expands (x + 2)^2 as x^2 + 2x + 4, halving the middle term
      { id: "B", text: "$3x^2 + 6x + 7$" },
      // distractor: distributes the 3 to the -5 as well
      { id: "C", text: "$3x^2 + 12x - 3$" },
      { id: "D", text: "$3x^2 + 12x + 7$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice D is correct.**\n\n**The Fast Way (~15s):** $(x + 2)^2 = x^2 + 4x + 4$; multiply by $3$ to get $3x^2 + 12x + 12$, then subtract $5$: $3x^2 + 12x + 7$.\n\n**The Full Solution:**\nStep 1: Expand the square first: $(x + 2)^2 = x^2 + 4x + 4$.\nStep 2: Distribute the $3$ across all three terms: $3x^2 + 12x + 12$. The $-5$ sits outside the parentheses and is not multiplied.\nStep 3: Combine constants: $12 - 5 = 7$, giving $3x^2 + 12x + 7$. Check with $x = 0$: original $3(4) - 5 = 7$; expanded $0 + 0 + 7 = 7$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($3x^2 + 7$): omits the $4x$ cross term of the square entirely.\n* Choice B ($3x^2 + 6x + 7$): expands $(x + 2)^2$ with a $2x$ middle term instead of $4x$, so after tripling the middle coefficient is $6$ instead of $12$.\n* Choice C ($3x^2 + 12x - 3$): multiplies the $-5$ by $3$ as well, but $-5$ is outside the parentheses.\n\n**Test Day Takeaway:** Expand the square, distribute the leading coefficient to every term of that square only, then add the constant that sits outside.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-to-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-500",
    domain: "algebra",
    skills: ["distributive-property", "converting-quadratic-forms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "Which of the following is equivalent to the expression $-(x - 3)^2 + 10$ for every value of $x$?",
    choices: [
      // distractor: fails to flip the sign of the middle term when applying the negative
      { id: "A", text: "$-x^2 - 6x + 1$" },
      { id: "B", text: "$-x^2 + 6x + 1$" },
      // distractor: fails to negate the constant 9, so 9 + 10 = 19
      { id: "C", text: "$-x^2 + 6x + 19$" },
      // distractor: squares term by term as x^2 - 9, then negates: -x^2 + 9 + 10
      { id: "D", text: "$-x^2 + 19$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $(x - 3)^2 = x^2 - 6x + 9$; negating every term gives $-x^2 + 6x - 9$, and adding $10$ gives $-x^2 + 6x + 1$.\n\n**The Full Solution:**\nStep 1: Expand the square: $(x - 3)^2 = x^2 - 6x + 9$.\nStep 2: The leading negative applies to all three terms: $-(x^2 - 6x + 9) = -x^2 + 6x - 9$.\nStep 3: Add $10$: $-x^2 + 6x + 1$. Check with $x = 3$: the original is $-0 + 10 = 10$, and $-9 + 18 + 1 = 10$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-x^2 - 6x + 1$): negates $x^2$ and $9$ but leaves the middle term $-6x$ unchanged.\n* Choice C ($-x^2 + 6x + 19$): negates $x^2$ and the middle term but not the $9$, then adds $10$ to $+9$.\n* Choice D ($-x^2 + 19$): squares term by term as $x^2 - 9$, losing the middle term, then negates and adds $10$.\n\n**Test Day Takeaway:** A negative in front of a squared binomial must reach all three terms of the expansion; write the expansion first, then distribute the sign.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-to-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-501",
    domain: "algebra",
    skills: ["distributive-property", "converting-quadratic-forms"],
    difficulty: "medium",
    type: "multiple-choice",
    question: "The function $f$ is defined by $f(x) = \\dfrac{1}{2}(x + 4)^2 - 6$. Which of the following is an equivalent form of $f(x)$?",
    choices: [
      // distractor: expands (x + 4)^2 as x^2 + 4x + 16, halving the middle term
      { id: "A", text: "$\\dfrac{1}{2}x^2 + 2x + 2$" },
      { id: "B", text: "$\\dfrac{1}{2}x^2 + 4x + 2$" },
      // distractor: halves x^2 and 8x but not the 16
      { id: "C", text: "$\\dfrac{1}{2}x^2 + 4x + 10$" },
      // distractor: halves only the x^2 term
      { id: "D", text: "$\\dfrac{1}{2}x^2 + 8x + 10$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice B is correct.**\n\n**The Fast Way (~15s):** $(x + 4)^2 = x^2 + 8x + 16$; halving every term gives $\\dfrac{1}{2}x^2 + 4x + 8$, and subtracting $6$ gives $\\dfrac{1}{2}x^2 + 4x + 2$.\n\n**The Full Solution:**\nStep 1: Expand the square: $(x + 4)^2 = x^2 + 8x + 16$.\nStep 2: Multiply each of the three terms by $\\dfrac{1}{2}$: $\\dfrac{1}{2}x^2 + 4x + 8$.\nStep 3: Subtract $6$: $\\dfrac{1}{2}x^2 + 4x + 2$. Check with $x = -4$: $f(-4) = 0 - 6 = -6$, and $\\dfrac{1}{2}(16) - 16 + 2 = -6$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($\\dfrac{1}{2}x^2 + 2x + 2$): uses $4x$ as the middle term of the square instead of $8x$, so the halved middle term is $2x$.\n* Choice C ($\\dfrac{1}{2}x^2 + 4x + 10$): halves $x^2$ and $8x$ but leaves the $16$ whole, giving $16 - 6 = 10$.\n* Choice D ($\\dfrac{1}{2}x^2 + 8x + 10$): applies the $\\dfrac{1}{2}$ to the $x^2$ term only.\n\n**Test Day Takeaway:** A fractional leading coefficient multiplies every term of the expanded square; the constant outside is added only after that.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-to-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  {
    id: "bank-alg-502",
    domain: "algebra",
    skills: ["distributive-property", "converting-quadratic-forms"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$$3(x - c)^2 - 11 = 3x^2 - 30x + d$$\n\nIn the given equation, $c$ and $d$ are constants, and the equation is true for all values of $x$. What is the value of $d$?",
    choices: [
      // distractor: reports c instead of d
      { id: "A", text: "$5$" },
      // distractor: computes c^2 - 11 = 25 - 11, forgetting the factor of 3 on c^2
      { id: "B", text: "$14$" },
      { id: "C", text: "$64$" },
      // distractor: adds 11 instead of subtracting: 75 + 11
      { id: "D", text: "$86$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Vertex Form to Standard Form**\n\n**Choice C is correct.**\n\n**The Fast Way (~25s):** Expanding the left side gives $3x^2 - 6cx + 3c^2 - 11$. Matching the $x$-coefficient, $-6c = -30$, so $c = 5$; then $d = 3(25) - 11 = 64$.\n\n**The Full Solution:**\nStep 1: Expand: $(x - c)^2 = x^2 - 2cx + c^2$, so $3(x - c)^2 - 11 = 3x^2 - 6cx + 3c^2 - 11$.\nStep 2: Two polynomials equal for all $x$ have identical coefficients. Matching the $x$-terms: $-6c = -30$, so $c = 5$.\nStep 3: Matching the constants: $d = 3c^2 - 11 = 3(25) - 11 = 75 - 11 = 64$. Check with $x = 0$: the left side is $3(25) - 11 = 64$, and the right side is $d = 64$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($5$): is the value of $c$; the question asks for $d$.\n* Choice B ($14$): computes $c^2 - 11 = 25 - 11$, forgetting that the $3$ multiplies $c^2$ as well.\n* Choice D ($86$): adds the $11$ instead of subtracting it: $75 + 11$.\n\n**Test Day Takeaway:** \"True for all values of $x$\" means match coefficients term by term; expand fully, use the middle term to find the hidden constant, and only then read off the constant term.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "vertex-form-to-standard-form",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-21"
  },

  // === DIFFICULT-QUESTIONS PDF BATCH (2026-05-22) — 12 algebra items reskinned ===

  {
    id: "bank-alg-503",
    domain: "algebra",
    skills: ["slope-from-points", "function-transformations"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The graph of line $h$ in the $xy$-plane is shown. Line $h$ passes through the points $(-4, -2)$ and $(2, 7)$. Line $k$ is the result of translating line $h$ down $10$ units. What is the $x$-intercept of line $k$?",
    diagram: { type: "linearGraph", params: { slope: 1.5, yIntercept: 4, xRange: [-8, 8], yRange: [-8, 12], xTickInterval: 2, yTickInterval: 2, gridInterval: 1, showPoints: [[-4, -2], [2, 7]], label: "h" } },
    choices: [
      // distractor: reports the y-intercept of line k (-6) as the x-intercept
      { id: "A", text: "$(-6, 0)$" },
      // distractor: solves (3/2)x = 6 with a sign slip, giving x = -4
      { id: "B", text: "$(-4, 0)$" },
      // distractor: finds the x-intercept of line h itself, ignoring the translation
      { id: "C", text: "$\\left(-\\dfrac{8}{3}, 0\\right)$" },
      { id: "D", text: "$(4, 0)$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Vertical Shift of a Line — $x$-intercept**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** From the two points, the slope of $h$ is $\\dfrac{7 - (-2)}{2 - (-4)} = \\dfrac{9}{6} = \\dfrac{3}{2}$, and the graph crosses the $y$-axis at $4$, so $h$ is $y = \\dfrac{3}{2}x + 4$. Shifting down $10$ gives $y = \\dfrac{3}{2}x - 6$, whose $x$-intercept is where $\\dfrac{3}{2}x = 6$, so $x = 4$.\n\n**The Full Solution:**\nStep 1: Slope of $h$: $\\dfrac{7 - (-2)}{2 - (-4)} = \\dfrac{9}{6} = \\dfrac{3}{2}$. Using the point $(2, 7)$: $7 = \\dfrac{3}{2}(2) + b$, so $b = 4$ and $h$ is $y = \\dfrac{3}{2}x + 4$, matching the $y$-intercept visible on the graph.\nStep 2: Translating a line down $10$ units subtracts $10$ from every $y$-value, so line $k$ is $y = \\dfrac{3}{2}x + 4 - 10 = \\dfrac{3}{2}x - 6$. The slope is unchanged.\nStep 3: The $x$-intercept has $y = 0$: $0 = \\dfrac{3}{2}x - 6$, so $\\dfrac{3}{2}x = 6$ and $x = 4$. The intercept is $(4, 0)$. Check: on $h$, the point directly above is $(4, 10)$, and $10 - 10 = 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($(-6, 0)$): takes the new $y$-intercept, $-6$, and reports it as an $x$-intercept.\n* Choice B ($(-4, 0)$): solves $\\dfrac{3}{2}x = 6$ but attaches a stray negative, giving $x = -4$.\n* Choice C ($\\left(-\\dfrac{8}{3}, 0\\right)$): finds where line $h$ crosses the $x$-axis, $\\dfrac{3}{2}x + 4 = 0$, and never applies the translation.\n\n**Test Day Takeaway:** A vertical translation changes only the constant term of a line's equation; build the original equation from the graph, adjust the constant, then set $y = 0$ for the $x$-intercept.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-from-shifted-graph",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-alg-504",
    domain: "algebra",
    skills: ["system-solution-types", "substitution-method"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$$6x - 4y = 10$$\n$$9x - 6y = 15$$\n\nFor any real number $r$, which of the following ordered pairs $(x, y)$ is a solution to the given system of equations?",
    choices: [
      { id: "A", text: "$\\left(r,\\ \\dfrac{3r}{2} - \\dfrac{5}{2}\\right)$" },
      // distractor: moves the constant across with the wrong sign when solving for y
      { id: "B", text: "$\\left(r,\\ \\dfrac{3r}{2} + \\dfrac{5}{2}\\right)$" },
      // distractor: flips the sign of the slope when dividing by -4
      { id: "C", text: "$\\left(r,\\ -\\dfrac{3r}{2} - \\dfrac{5}{2}\\right)$" },
      // distractor: swaps the coordinates, putting the y-expression in the x position
      { id: "D", text: "$\\left(\\dfrac{3r}{2} - \\dfrac{5}{2},\\ r\\right)$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Same Line — Infinitely Many Solutions (Parametric)**\n\n**Choice A is correct.**\n\n**The Fast Way (~30s):** The second equation is $\\dfrac{3}{2}$ times the first, so both describe the same line, $y = \\dfrac{3}{2}x - \\dfrac{5}{2}$. Every point on that line is a solution: with $x = r$, the point is $\\left(r,\\ \\dfrac{3r}{2} - \\dfrac{5}{2}\\right)$.\n\n**The Full Solution:**\nStep 1: Multiply $6x - 4y = 10$ by $\\dfrac{3}{2}$: $9x - 6y = 15$, which is exactly the second equation. The two equations represent one line, so the system has infinitely many solutions, namely every point on that line.\nStep 2: Solve for $y$: $-4y = 10 - 6x$, so $y = \\dfrac{6x - 10}{4} = \\dfrac{3}{2}x - \\dfrac{5}{2}$.\nStep 3: Letting $x = r$ gives $y = \\dfrac{3r}{2} - \\dfrac{5}{2}$. Check in the second equation: $9r - 6\\left(\\dfrac{3r}{2} - \\dfrac{5}{2}\\right) = 9r - 9r + 15 = 15$ for every $r$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($\\left(r,\\ \\dfrac{3r}{2} + \\dfrac{5}{2}\\right)$): carries the $10$ across as $+10$ when isolating $y$, so the constant has the wrong sign; substituting gives $6r - 6r - 10 = -10 \\neq 10$.\n* Choice C ($\\left(r,\\ -\\dfrac{3r}{2} - \\dfrac{5}{2}\\right)$): divides $6x$ by $-4$ but forgets the resulting sign change on the $x$-term; it satisfies the system only when $r = 0$.\n* Choice D ($\\left(\\dfrac{3r}{2} - \\dfrac{5}{2},\\ r\\right)$): places the $y$-expression in the $x$ slot; substituting gives $5r - 15$, which equals $10$ only for $r = 5$.\n\n**Test Day Takeaway:** When one equation is a multiple of the other, the \"system\" is a single line; solve it for $y$ and any $x = r$ generates a solution, so verify a candidate pair by substituting and watching the $r$-terms cancel.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "same-line-infinitely-many-solutions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-alg-505",
    domain: "algebra",
    skills: ["perpendicular-negative-reciprocal", "system-solution-types"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$$5x - 2y = 8$$\n$$cx + dy = 8$$\n\nIn the given pair of equations, $c$ and $d$ are constants. In the $xy$-plane, the graphs of the two equations are perpendicular lines. Which of the following pairs of equations also represents a pair of perpendicular lines?",
    choices: [
      // distractor: doubles both x-coefficients; slopes become 5 and -4/5, product -4
      { id: "A", text: "$10x - 2y = 8$\n\n$2cx + dy = 8$" },
      // distractor: changes only the first line; slopes 5/4 and -2/5, product -1/2
      { id: "B", text: "$5x - 4y = 8$\n\n$cx + dy = 8$" },
      { id: "C", text: "$10x - 2y = 8$\n\n$cx + 2dy = 8$" },
      // distractor: flips the sign of one slope; slopes -5/2 and -2/5 have product +1, not -1
      { id: "D", text: "$5x + 2y = 8$\n\n$cx + dy = 8$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Perpendicular Slopes (Standard Form)**\n\n**Choice C is correct.**\n\n**The Fast Way (~40s):** A line $Ax + By = C$ has slope $-\\dfrac{A}{B}$. The first line's slope is $\\dfrac{5}{2}$, so the second's must be $-\\dfrac{2}{5}$, which forces $\\dfrac{c}{d} = \\dfrac{2}{5}$. In choice C the slopes are $\\dfrac{10}{2} = 5$ and $-\\dfrac{c}{2d} = -\\dfrac{1}{5}$, whose product is $-1$.\n\n**The Full Solution:**\nStep 1: From $5x - 2y = 8$, the slope is $-\\dfrac{5}{-2} = \\dfrac{5}{2}$. Perpendicular slopes multiply to $-1$, so the slope of $cx + dy = 8$, which is $-\\dfrac{c}{d}$, must equal $-\\dfrac{2}{5}$. Hence $\\dfrac{c}{d} = \\dfrac{2}{5}$.\nStep 2: Test choice C. The first line $10x - 2y = 8$ has slope $\\dfrac{10}{2} = 5$. The second line $cx + 2dy = 8$ has slope $-\\dfrac{c}{2d} = -\\dfrac{1}{2} \\cdot \\dfrac{c}{d} = -\\dfrac{1}{2} \\cdot \\dfrac{2}{5} = -\\dfrac{1}{5}$.\nStep 3: The product is $5 \\cdot \\left(-\\dfrac{1}{5}\\right) = -1$, so the lines are perpendicular. $\\checkmark$ (Doubling one slope and halving the other, with the sign relationship kept, preserves perpendicularity.)\n\n**Why the wrong answers are tempting:**\n* Choice A ($10x - 2y = 8$ and $2cx + dy = 8$): doubles both $x$-coefficients, so both slopes double: $5$ and $-\\dfrac{4}{5}$, with product $-4$.\n* Choice B ($5x - 4y = 8$ and $cx + dy = 8$): changes only the first slope, to $\\dfrac{5}{4}$, while the second stays $-\\dfrac{2}{5}$; the product is $-\\dfrac{1}{2}$.\n* Choice D ($5x + 2y = 8$ and $cx + dy = 8$): makes the first slope $-\\dfrac{5}{2}$; paired with $-\\dfrac{2}{5}$ the product is $+1$. Reciprocal is not enough; the signs must be opposite.\n\n**Test Day Takeaway:** In standard form the slope is $-\\dfrac{A}{B}$; for perpendicular lines, check that the product of the two slopes is exactly $-1$, tracking what each coefficient change does to each slope.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "perpendicular-slope",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-alg-506",
    domain: "algebra",
    skills: ["system-solution-types", "infinite-solutions-condition"],
    difficulty: "hard",
    type: "fill-in",
    question: "$$\\dfrac{2}{3}x - \\dfrac{1}{6}y = \\dfrac{5}{2} + \\dfrac{1}{3}x$$\n$$\\dfrac{3}{4}y + 2 = kx - \\dfrac{1}{4}$$\n\nIn the given system of equations, $k$ is a constant. If the system has no solution, what is the value of $k$?",
    correctAnswer: "3/2",
    explanation: "**SAT Pattern: No Solution Parameter (Two-Equation System)**\n\n**The correct answer is $\\frac{3}{2}$.**\n\n**The Fast Way (~40s):** Clear the fractions: the first equation becomes $2x - y = 15$ (slope $2$) and the second becomes $4kx - 3y = 9$ (slope $\\dfrac{4k}{3}$). No solution means parallel, distinct lines, so $\\dfrac{4k}{3} = 2$ and $k = \\dfrac{3}{2}$.\n\n**The Full Solution:**\nStep 1: Simplify the first equation. Subtract $\\dfrac{1}{3}x$ from both sides: $\\dfrac{1}{3}x - \\dfrac{1}{6}y = \\dfrac{5}{2}$. Multiply by $6$: $2x - y = 15$, or $y = 2x - 15$, a line with slope $2$ and $y$-intercept $-15$.\nStep 2: Simplify the second equation. Move terms: $kx - \\dfrac{3}{4}y = \\dfrac{9}{4}$. Multiply by $4$: $4kx - 3y = 9$, or $y = \\dfrac{4k}{3}x - 3$, a line with slope $\\dfrac{4k}{3}$ and $y$-intercept $-3$.\nStep 3: A system of two linear equations has no solution exactly when the lines are parallel and distinct. The intercepts $-15$ and $-3$ already differ, so the lines are distinct; parallel requires $\\dfrac{4k}{3} = 2$, so $4k = 6$ and $k = \\dfrac{3}{2}$. Check: with $k = \\dfrac{3}{2}$, the second line is $y = 2x - 3$, parallel to $y = 2x - 15$. $\\checkmark$ Enter $3/2$ or $1.5$.\n\n**Common Mistakes:** Setting the slopes equal before collecting the $x$-terms in the first equation (using $\\dfrac{2}{3}$ instead of $\\dfrac{1}{3}$ as the $x$-coefficient), which gives $k = 3$; matching $k$ to the coefficient $2$ without accounting for the $\\dfrac{4}{3}$ factor; treating \"no solution\" as \"same line\" and trying to match the constants as well.\n\n**Test Day Takeaway:** Rewrite each messy equation as $y = mx + b$ before comparing; no solution means equal slopes with different intercepts, and the constant $k$ is found from the slope condition alone.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-no-solution-parameter",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-alg-507",
    domain: "algebra",
    skills: ["system-solution-types", "one-step-linear-equation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$$3(kx + 2) = 8x - 5$$\n\nIn the given equation, $k$ is a constant. If the equation has no solution, what is the value of $k$?",
    choices: [
      // distractor: moves 8x to the left without changing its sign, solving 3k + 8 = 0
      { id: "A", text: "$-\\dfrac{8}{3}$" },
      // distractor: solves 8k = 3 instead of 3k = 8 (swaps the coefficients)
      { id: "B", text: "$\\dfrac{3}{8}$" },
      { id: "C", text: "$\\dfrac{8}{3}$" },
      // distractor: ignores the factor of 3 and sets the x-coefficient k equal to 8
      { id: "D", text: "$8$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: No-Solution Condition (Single Linear Equation)**\n\n**Choice C is correct.**\n\n**The Fast Way (~20s):** Distribute: $3kx + 6 = 8x - 5$. A linear equation has no solution when the $x$-coefficients match but the constants do not. Here $6 \\neq -5$, so set $3k = 8$: $k = \\dfrac{8}{3}$.\n\n**The Full Solution:**\nStep 1: Distribute the $3$: $3kx + 6 = 8x - 5$. Collect the $x$-terms on one side: $(3k - 8)x = -11$.\nStep 2: If $3k - 8 \\neq 0$, dividing gives exactly one solution, $x = \\dfrac{-11}{3k - 8}$. If $3k - 8 = 0$, the equation reads $0 = -11$, which is false for every $x$, so there is no solution.\nStep 3: Set $3k - 8 = 0$: $k = \\dfrac{8}{3}$. Check: $3\\left(\\dfrac{8}{3}x + 2\\right) = 8x + 6$, and $8x + 6 = 8x - 5$ has no solution. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\dfrac{8}{3}$): brings $8x$ to the left side as $+8x$, solving $3k + 8 = 0$.\n* Choice B ($\\dfrac{3}{8}$): swaps the roles of the coefficients and solves $8k = 3$.\n* Choice D ($8$): matches $k$ directly to $8$, forgetting that the coefficient of $x$ on the left is $3k$, not $k$.\n\n**Test Day Takeaway:** \"No solution\" for a linear equation means the $x$-terms cancel and the constants disagree; distribute first, then set the two $x$-coefficients equal and confirm the constants differ.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "no-solution-condition",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-alg-508",
    domain: "algebra",
    skills: ["function-evaluation", "function-notation"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "Let $f$ be a linear function, and let $g(x) = \\dfrac{f(x)}{x + 2}$ for all $x \\neq -2$. Three values of $g(x)$ are shown in the table. Which equation defines $f$?",
    diagram: { type: "dataTable", params: { headers: ["x", "g(x)"], rows: [["-4", "9"], ["2", "0"], ["4", "1"]] } },
    choices: [
      { id: "A", text: "$f(x) = 3x - 6$" },
      // distractor: solves 0 = 3(2) + b with a sign slip, giving b = +6
      { id: "B", text: "$f(x) = 3x + 6$" },
      // distractor: multiplies g(x) by x - 2 instead of x + 2, so f(-4) = -54 and the slope through (2, 0) is 9
      { id: "C", text: "$f(x) = 9x - 18$" },
      // distractor: treats the table values as values of f itself and fits a line through (-4, 9) and (2, 0)
      { id: "D", text: "$f(x) = -\\dfrac{3}{2}x + 3$" }
    ],
    correctAnswer: "A",
    explanation: "**SAT Pattern: Recover Linear $f$ from $g(x)=f(x)/(x+c)$**\n\n**Choice A is correct.**\n\n**The Fast Way (~35s):** Since $f(x) = g(x)(x + 2)$, the table gives $f(-4) = 9(-2) = -18$, $f(2) = 0(4) = 0$, and $f(4) = 1(6) = 6$. The slope from $(-4, -18)$ to $(2, 0)$ is $\\dfrac{18}{6} = 3$, and $0 = 3(2) + b$ gives $b = -6$, so $f(x) = 3x - 6$.\n\n**The Full Solution:**\nStep 1: Multiply both sides of $g(x) = \\dfrac{f(x)}{x + 2}$ by $x + 2$ to recover $f$: $f(x) = g(x) \\cdot (x + 2)$. Apply it to each row: $f(-4) = 9 \\cdot (-4 + 2) = -18$; $f(2) = 0 \\cdot (2 + 2) = 0$; $f(4) = 1 \\cdot (4 + 2) = 6$.\nStep 2: $f$ is linear, so use two of the points $(-4, -18)$, $(2, 0)$, $(4, 6)$: slope $= \\dfrac{0 - (-18)}{2 - (-4)} = \\dfrac{18}{6} = 3$. The third point confirms it: $\\dfrac{6 - 0}{4 - 2} = 3$.\nStep 3: With slope $3$ and the point $(2, 0)$: $0 = 3(2) + b$, so $b = -6$ and $f(x) = 3x - 6$. Check the first row: $g(-4) = \\dfrac{3(-4) - 6}{-4 + 2} = \\dfrac{-18}{-2} = 9$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice B ($f(x) = 3x + 6$): has the right slope but solves $0 = 6 + b$ as $b = 6$; this $f$ gives $f(2) = 12$, not $0$.\n* Choice C ($f(x) = 9x - 18$): multiplies by $x - 2$ instead of $x + 2$, producing $f(-4) = -54$ and a slope of $9$ through $(2, 0)$.\n* Choice D ($f(x) = -\\dfrac{3}{2}x + 3$): reads the table as values of $f$ rather than $g$ and fits a line through $(-4, 9)$ and $(2, 0)$, skipping the multiplication by $x + 2$.\n\n**Test Day Takeaway:** When $g$ is $f$ divided by a linear factor, multiply each table value by that factor to get points on $f$, then build the line from two of them and check with the third.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "function-from-points",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-alg-509",
    domain: "algebra",
    skills: ["function-notation", "domain-restrictions"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The function $h$ is defined by $h(x) = c\\sqrt{x - d}$, where $c$ and $d$ are constants. In the $xy$-plane, the graph of $y = h(x)$ has an $x$-intercept at $(-7, 0)$, and $h(2) < 0$. Which of the following must be true?",
    choices: [
      // distractor: reverses the sign conclusion: h(2) = 3c < 0 forces c < 0, not c > 0
      { id: "A", text: "$c > 0$" },
      // distractor: reads the intercept x = -7 as d = 7 instead of solving x - d = 0 to get d = -7
      { id: "B", text: "$d > 0$" },
      // distractor: can be true (c = -1) or false (c = -20); it is not forced
      { id: "C", text: "$c > d$" },
      { id: "D", text: "$cd > 0$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: Square Root Function — Sign Reasoning**\n\n**Choice D is correct.**\n\n**The Fast Way (~30s):** The square root is zero only when its input is zero, so the $x$-intercept at $x = -7$ forces $-7 - d = 0$, giving $d = -7$. Then $h(2) = c\\sqrt{9} = 3c < 0$ forces $c < 0$. Two negatives multiply to a positive: $cd > 0$.\n\n**The Full Solution:**\nStep 1: Use the intercept: $h(-7) = c\\sqrt{-7 - d} = 0$. If $c$ were $0$, then $h(x) = 0$ for every $x$, contradicting $h(2) < 0$. So $c \\neq 0$ and $\\sqrt{-7 - d} = 0$, which gives $d = -7$. The function is $h(x) = c\\sqrt{x + 7}$.\nStep 2: Use the sign condition: $h(2) = c\\sqrt{2 + 7} = 3c$. Since $3c < 0$, $c < 0$.\nStep 3: With $c < 0$ and $d = -7 < 0$, the product $cd$ is positive, so $cd > 0$ must be true. Check with a concrete pair such as $c = -2$, $d = -7$: $h(-7) = 0$ and $h(2) = -6 < 0$, and $cd = 14 > 0$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($c > 0$): reverses the conclusion from $h(2) < 0$; a positive $c$ would make $h(2) = 3c$ positive.\n* Choice B ($d > 0$): reads the intercept $-7$ as the value of $d$ with the sign dropped; solving $x - d = 0$ at $x = -7$ gives $d = -7$.\n* Choice C ($c > d$): holds for $c = -1$ (since $-1 > -7$) but fails for $c = -20$; the conditions do not fix the size of $c$, so this need not be true.\n\n**Test Day Takeaway:** For $c\\sqrt{x - d}$, the $x$-intercept pins down $d$ and a single signed output pins down the sign of $c$; a \"must be true\" answer has to follow from those two facts alone, not from a convenient example.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-from-conditions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-alg-510",
    domain: "algebra",
    skills: ["function-evaluation", "function-notation-application"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "The linear function $f$ is defined by $f(x) = 9x + k$, where $k$ is a constant. If $f(2n - 1) = \\dfrac{n}{2}$, where $n$ is a constant, which of the following expressions represents the value of $k$?",
    choices: [
      // distractor: moves the -9 to the other side without changing its sign
      { id: "A", text: "$-\\dfrac{35n}{2} - 9$" },
      { id: "B", text: "$-\\dfrac{35n}{2} + 9$" },
      // distractor: distributes 9 to 2n as 9n instead of 18n
      { id: "C", text: "$-\\dfrac{17n}{2} + 9$" },
      // distractor: adds the left-side terms to n/2 instead of subtracting them
      { id: "D", text: "$\\dfrac{37n}{2} - 9$" }
    ],
    correctAnswer: "B",
    explanation: "**SAT Pattern: Solve for a Linear Parameter from a Conditional Equation**\n\n**Choice B is correct.**\n\n**The Fast Way (~25s):** Substitute $2n - 1$ for $x$: $9(2n - 1) + k = \\dfrac{n}{2}$, so $18n - 9 + k = \\dfrac{n}{2}$ and $k = \\dfrac{n}{2} - 18n + 9 = -\\dfrac{35n}{2} + 9$.\n\n**The Full Solution:**\nStep 1: Evaluate $f$ at the input $2n - 1$: $f(2n - 1) = 9(2n - 1) + k = 18n - 9 + k$.\nStep 2: Set this equal to the given output: $18n - 9 + k = \\dfrac{n}{2}$. Isolate $k$ by subtracting $18n$ and adding $9$: $k = \\dfrac{n}{2} - 18n + 9$.\nStep 3: Combine the $n$-terms with a common denominator: $\\dfrac{n}{2} - \\dfrac{36n}{2} = -\\dfrac{35n}{2}$, so $k = -\\dfrac{35n}{2} + 9$. Check with $n = 2$: $k = -35 + 9 = -26$, and $f(3) = 27 - 26 = 1 = \\dfrac{2}{2}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-\\dfrac{35n}{2} - 9$): moves the $-9$ across the equals sign without flipping it to $+9$.\n* Choice C ($-\\dfrac{17n}{2} + 9$): distributes the $9$ to $2n$ as $9n$ instead of $18n$, so the $n$-coefficient becomes $\\dfrac{1}{2} - 9$.\n* Choice D ($\\dfrac{37n}{2} - 9$): adds $18n$ and subtracts $9$ instead of the reverse, effectively solving for $-k$.\n\n**Test Day Takeaway:** Substitute the whole input expression in parentheses, distribute fully, then move every non-$k$ term across with its sign flipped; a quick numeric check with a small $n$ catches sign errors.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "function-from-conditions",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-alg-511",
    domain: "algebra",
    skills: ["identify-quadratic", "discriminant-analysis"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$$y = 3x^2 - 14x + 20$$\n$$y = 4x + c$$\n\nIn the given system of equations, $c$ is a constant. The graphs of the equations in the system intersect at exactly one point, $(x, y)$, in the $xy$-plane. What is the value of $x$?",
    choices: [
      // distractor: uses b/(2a) instead of -b/(2a), giving -18/6
      { id: "A", text: "$-3$" },
      // distractor: uses the parabola's own vertex, 14/6, ignoring the 4x from the line
      { id: "B", text: "$\\dfrac{7}{3}$" },
      { id: "C", text: "$3$" },
      // distractor: uses -b/a instead of -b/(2a), giving 18/3
      { id: "D", text: "$6$" }
    ],
    correctAnswer: "C",
    explanation: "**SAT Pattern: Tangent Line — Discriminant Equals Zero**\n\n**Choice C is correct.**\n\n**The Fast Way (~30s):** Set the expressions for $y$ equal: $3x^2 - 14x + 20 = 4x + c$, or $3x^2 - 18x + (20 - c) = 0$. Exactly one intersection means this quadratic has a double root, which sits at $x = -\\dfrac{b}{2a} = \\dfrac{18}{6} = 3$.\n\n**The Full Solution:**\nStep 1: Substitute the line into the parabola: $3x^2 - 14x + 20 = 4x + c$. Collect terms: $3x^2 - 18x + (20 - c) = 0$.\nStep 2: One intersection point means one solution, so the discriminant is zero: $(-18)^2 - 4(3)(20 - c) = 0$, giving $324 - 240 + 12c = 0$ and $c = -7$. The quadratic becomes $3x^2 - 18x + 27 = 3(x - 3)^2 = 0$.\nStep 3: The double root is $x = 3$. Check: the parabola gives $y = 27 - 42 + 20 = 5$, and the line gives $y = 4(3) - 7 = 5$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-3$): computes $\\dfrac{b}{2a} = \\dfrac{-18}{6}$ and forgets the negative in $-\\dfrac{b}{2a}$.\n* Choice B ($\\dfrac{7}{3}$): uses the vertex of the original parabola, $\\dfrac{14}{6}$, without moving the $4x$ from the line into the quadratic.\n* Choice D ($6$): computes $-\\dfrac{b}{a} = \\dfrac{18}{3}$, dropping the $2$ in the denominator.\n\n**Test Day Takeaway:** A line tangent to a parabola meets it at a double root; combine the equations into one quadratic, and the tangency point is at $-\\dfrac{b}{2a}$ of that combined quadratic, whether or not you ever find $c$.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "tangent-line-and-discriminant",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-alg-512",
    domain: "algebra",
    skills: ["percent-decimal-conversion", "percent-change"],
    difficulty: "hard",
    type: "fill-in",
    question: "The number $p$ is $35\\%$ less than the number $q$. The number $q$ is $250\\%$ greater than $24$. What is the value of $p$?",
    correctAnswer: "54.6",
    explanation: "**SAT Pattern: Chained Percent Relationship**\n\n**The correct answer is $54.6$.**\n\n**The Fast Way (~25s):** \"$250\\%$ greater than $24$\" is $24 + 2.5(24) = 3.5(24) = 84$, so $q = 84$. \"$35\\%$ less than $q$\" is $0.65q = 0.65(84) = 54.6$.\n\n**The Full Solution:**\nStep 1: Resolve the chain from the known number outward. $q$ is $250\\%$ greater than $24$, so $q = 24 + 2.50(24) = 24(1 + 2.50) = 24(3.5) = 84$.\nStep 2: $p$ is $35\\%$ less than $q$, so $p = q - 0.35q = 0.65q = 0.65(84) = 54.6$.\nStep 3: Check the percents: $84 - 54.6 = 29.4$, and $\\dfrac{29.4}{84} = 0.35$; also $\\dfrac{84 - 24}{24} = 2.5 = 250\\%$. $\\checkmark$\n\n**Common Mistakes:** Reading \"$250\\%$ greater than\" as \"$250\\%$ of\" and using $q = 2.5(24) = 60$, which gives $p = 39$; multiplying by $0.35$ instead of $0.65$ for \"$35\\%$ less,\" which gives $29.4$; applying the $35\\%$ to $24$ instead of to $q$.\n\n**Test Day Takeaway:** \"$k\\%$ greater than\" multiplies by $1 + \\dfrac{k}{100}$ and \"$k\\%$ less than\" multiplies by $1 - \\dfrac{k}{100}$; in a chain, start from the only actual number and apply each multiplier in order.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "chained-percent-relationship",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-05-22"
  },

  {
    id: "bank-alg-513",
    domain: "algebra",
    skills: ["system-solution-types"],
    difficulty: "hard",
    type: "multiple-choice",
    question: "$$-5x + 8y = 13$$\n$$kx - 24y = 4$$\n\nIn the given system of equations, $k$ is a constant. If the system has no solution, what is the value of $k$?",
    choices: [
      // distractor: multiplies 5 by -3 but forgets that the x-coefficient in the first equation is -5
      { id: "A", text: "$-15$" },
      // distractor: reports the scale factor -24/8 = -3 instead of k
      { id: "B", text: "$-3$" },
      // distractor: reports the magnitude of the scale factor
      { id: "C", text: "$3$" },
      { id: "D", text: "$15$" }
    ],
    correctAnswer: "D",
    explanation: "**SAT Pattern: System With No Solution**\n\n**Choice D is correct.**\n\n**The Fast Way (~20s):** No solution means the lines are parallel, so the coefficients of $x$ and $y$ are in the same ratio. The $y$-coefficients go from $8$ to $-24$, a factor of $-3$, so $k = -3(-5) = 15$.\n\n**The Full Solution:**\nStep 1: Two lines have no common point when they are parallel and distinct. In standard form, parallel means one equation's $x$- and $y$-coefficients are the same multiple of the other's: $\\dfrac{k}{-5} = \\dfrac{-24}{8}$.\nStep 2: $\\dfrac{-24}{8} = -3$, so $k = -3(-5) = 15$.\nStep 3: Confirm the lines are distinct, not identical: scaling the first equation by $-3$ gives $15x - 24y = -39$, and $-39 \\neq 4$, so the lines are parallel and never meet. Slope check: both lines have slope $\\dfrac{5}{8}$. $\\checkmark$\n\n**Why the wrong answers are tempting:**\n* Choice A ($-15$): multiplies $5$ by $-3$ but overlooks that the first $x$-coefficient is $-5$, so the sign comes out wrong.\n* Choice B ($-3$): stops at the scale factor $\\dfrac{-24}{8}$ and reports it as $k$.\n* Choice C ($3$): reports the size of the scale factor and drops its sign.\n\n**Test Day Takeaway:** For a no-solution system in standard form, find the multiplier that maps one $y$-coefficient to the other, apply that same multiplier to the $x$-coefficient with its sign, and confirm the constants do not match.",
    calculatorAllowed: false,
    tags: [],
    sourceStyleRef: "system-no-solution-constant",
    sourceRef: "pilot-m1-system-constant",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-08-13"
  },

  {
    id: "bank-alg-514",
    domain: "algebra",
    skills: ["slope-from-points", "linear-functions"],
    difficulty: "medium",
    type: "fill-in",
    question: "For the linear function $f$, the table shows the value of $f(x)$ at three values of $x$, where $t$ is a constant. What is the slope of the graph of $y = f(x)$ in the $xy$-plane?",
    diagram: { type: "dataTable", params: { headers: ["x", "f(x)"], rows: [["-3", "t - 10"], ["1", "t + 6"], ["6", "t + 26"]] } },
    correctAnswer: "4",
    explanation: "**SAT Pattern: Slope from Two Points**\n\n**The correct answer is $4$.**\n\n**The Fast Way (~15s):** Slope only needs the changes, and the $t$'s cancel: from $x = -3$ to $x = 1$, $f$ rises from $t - 10$ to $t + 6$, a change of $16$ over a change of $4$. Slope $= \\dfrac{16}{4} = 4$.\n\n**The Full Solution:**\nStep 1: Take two rows of the table as points on the line: $(-3, t - 10)$ and $(1, t + 6)$.\nStep 2: Slope $= \\dfrac{(t + 6) - (t - 10)}{1 - (-3)} = \\dfrac{16}{4} = 4$. The unknown constant $t$ subtracts away.\nStep 3: Confirm with the other pair of rows: $\\dfrac{(t + 26) - (t + 6)}{6 - 1} = \\dfrac{20}{5} = 4$, the same value, as a linear function requires. $\\checkmark$\n\n**Common Mistakes:** Computing $\\dfrac{4}{16}$ by putting the change in $x$ on top; subtracting $-3$ as if it were $3$ and getting a run of $-2$ or $2$; concluding the slope cannot be found because $t$ is unknown, when the symbolic entries cancel in any difference.\n\n**Test Day Takeaway:** In a table with a symbolic constant, subtract outputs and subtract inputs; the constant vanishes and the slope is an ordinary number.",
    calculatorAllowed: true,
    tags: [],
    sourceStyleRef: "parameterized-table-slope",
    sourceRef: "pilot-m5-spr-negative-slope",
    authoredBy: "seva-bank-recreation",
    createdAt: "2026-08-13"
  }
];
